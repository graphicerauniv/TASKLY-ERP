import crypto from 'node:crypto';
import { Buffer } from 'node:buffer';
import { config } from '../config.js';

export function razorpayEnabled() {
  return Boolean(config.razorpay.keyId && config.razorpay.keySecret);
}

export async function refreshStudentPenalties(database, studentAdmissionId, asOf = new Date()) {
  const ledgers = await database
    .collection('studentFeeLedgers')
    .find({ studentAdmissionId, status: 'active' })
    .toArray();
  const refreshed = [];
  for (const ledger of ledgers) refreshed.push(await refreshLedgerPenalty(database, ledger, asOf));
  return refreshed;
}

export async function refreshLedgerPenalty(database, ledger, asOf = new Date()) {
  const entries = await entriesWithCurrentPriorities(database, ledger.entries || []);
  const settings = ledger.penalty || {};
  const existingIndex = entries.findIndex((entry) => entry.isPenalty);
  const penaltyAmount = calculatePenaltyAmount(settings, ledger.balanceAmount, asOf);
  const previousPenalty = existingIndex >= 0 ? entries[existingIndex] : null;
  const paidPenalty = Number(previousPenalty?.paidAmount || 0);
  if (penaltyAmount > 0 || previousPenalty) {
    const penaltyEntry = {
      feeHeadId: 'penalty',
      feeHeadName: 'Late Payment Penalty',
      category: 'fee',
      priority: 0,
      frequency: 'daily',
      academicYear: ledger.currentAcademicYear || null,
      semester: ledger.currentSemester || null,
      periodLabel: ledger.periodLabel || 'Current period',
      amount: Math.max(penaltyAmount, paidPenalty),
      paidAmount: Math.min(paidPenalty, Math.max(penaltyAmount, paidPenalty)),
      balanceAmount: Math.max(0, penaltyAmount - paidPenalty),
      dueDate: settings.dueDate,
      status: penaltyAmount <= paidPenalty ? 'paid' : paidPenalty ? 'partial' : 'due',
      isPenalty: true,
    };
    if (existingIndex >= 0) entries[existingIndex] = penaltyEntry;
    else entries.unshift(penaltyEntry);
  }
  entries.sort(compareEntriesByPriority);
  const totals = ledgerTotals(entries);
  const update = {
    entries,
    penaltyAmount,
    chargeAmount: totals.chargeAmount,
    discountAmount: totals.discountAmount,
    totalAmount: totals.totalAmount,
    paidAmount: totals.paidAmount,
    balanceAmount: totals.balanceAmount,
    paymentStatus: totals.balanceAmount <= 0 ? 'paid' : totals.paidAmount ? 'partial' : 'due',
    penaltyCalculatedAt: asOf,
    updatedAt: new Date(),
  };
  await database.collection('studentFeeLedgers').updateOne({ _id: ledger._id }, { $set: update });
  return { ...ledger, ...update };
}

async function entriesWithCurrentPriorities(database, sourceEntries) {
  const entries = sourceEntries
    .map(normalizeEntry)
    .filter(
      (entry) =>
        entry.isPenalty || Number(entry.amount || 0) > 0 || Number(entry.paidAmount || 0) > 0,
    );
  const feeHeadIds = entries
    .filter((entry) => !entry.isPenalty && entry.feeHeadId)
    .map((entry) => entry.feeHeadId);
  const heads = feeHeadIds.length
    ? await database
        .collection('feeHeads')
        .find({ _id: { $in: feeHeadIds } })
        .toArray()
    : [];
  const priorities = new Map(
    heads.map((head) => [String(head._id), Number(head.priority || 9999)]),
  );
  return entries.map((entry) => ({
    ...entry,
    priority: entry.isPenalty
      ? 0
      : priorities.get(String(entry.feeHeadId)) || Number(entry.priority || 9999),
  }));
}

function compareEntriesByPriority(left, right) {
  return (
    Number(!left.isPenalty) - Number(!right.isPenalty) ||
    Number(left.priority || 9999) - Number(right.priority || 9999) ||
    String(left.dueDate || '').localeCompare(String(right.dueDate || '')) ||
    String(left.feeHeadName || '').localeCompare(String(right.feeHeadName || ''))
  );
}

export async function createRazorpayOrder(
  database,
  student,
  amountRupees,
  targetLedgerId,
  targetKind = 'academic',
) {
  if (!razorpayEnabled()) {
    const error = new Error('Online payments are not configured yet. Contact the accounts office.');
    error.status = 503;
    throw error;
  }
  const ledgers = await refreshStudentPenalties(database, student._id);
  const targets = targetLedgerId
    ? ledgers.filter(
        (ledger) =>
          String(ledger._id) === String(targetLedgerId) && ledger.visibilityStatus !== 'hidden',
      )
    : ledgers.filter(
        (ledger) => ledger.kind === targetKind && ledger.visibilityStatus !== 'hidden',
      );
  if (!targets.length) {
    const error = new Error('The selected fee period was not found. Refresh the fee page.');
    error.status = 404;
    throw error;
  }
  const outstanding = roundMoney(
    targets.reduce((sum, ledger) => sum + Number(ledger.balanceAmount || 0), 0),
  );
  const amount = roundMoney(amountRupees);
  if (amount <= 0) {
    const error = new Error('Enter an amount greater than zero.');
    error.status = 422;
    throw error;
  }
  if (amount > outstanding) {
    const error = new Error(`The maximum payable amount is ${outstanding}.`);
    error.status = 422;
    throw error;
  }
  const localReceipt = `PAY-${Date.now()}-${crypto.randomInt(1000, 10_000)}`;
  const result = await globalThis.fetch('https://api.razorpay.com/v1/orders', {
    method: 'POST',
    headers: {
      Authorization: `Basic ${Buffer.from(`${config.razorpay.keyId}:${config.razorpay.keySecret}`).toString('base64')}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      amount: Math.round(amount * 100),
      currency: 'INR',
      receipt: localReceipt,
      notes: {
        studentId: student.studentId,
        studentAdmissionId: String(student._id),
        feeLedgerId: targetLedgerId ? String(targetLedgerId) : 'combined',
        feePeriod: targetLedgerId ? targets[0].periodLabel : `Combined ${targetKind} fees`,
      },
    }),
  });
  const order = await result.json();
  if (!result.ok) {
    const error = new Error(
      order?.error?.description || 'Razorpay could not create the payment order.',
    );
    error.status = 502;
    throw error;
  }
  const now = new Date();
  const document = {
    studentAdmissionId: student._id,
    studentId: student.studentId,
    studentName: student.studentName,
    targetLedgerId: targetLedgerId || null,
    targetKind,
    targetPeriodLabel: targetLedgerId ? targets[0].periodLabel : `Combined ${targetKind} fees`,
    razorpayOrderId: order.id,
    paymentChannel: 'online',
    localReceipt,
    amount,
    currency: 'INR',
    status: 'created',
    createdAt: now,
    updatedAt: now,
  };
  await database.collection('feePayments').insertOne(document);
  return {
    keyId: config.razorpay.keyId,
    orderId: order.id,
    amountPaise: order.amount,
    currency: order.currency,
    student: { name: student.studentName, studentId: student.studentId },
  };
}

export async function createOfflinePayment(database, student, data, acceptedBy) {
  const existing = await database
    .collection('feePayments')
    .findOne({ idempotencyKey: data.idempotencyKey });
  if (existing) {
    if (existing.status === 'paid') return { payment: existing, duplicate: true };
    const error = new Error('This offline payment submission is already being processed.');
    error.status = 409;
    throw error;
  }
  if (data.referenceNumber) {
    const duplicateReference = await database.collection('feePayments').findOne({
      studentAdmissionId: student._id,
      paymentChannel: 'offline',
      paymentReference: data.referenceNumber,
      status: 'paid',
    });
    if (duplicateReference) {
      const error = new Error(
        'This offline payment reference is already recorded for the student.',
      );
      error.status = 409;
      throw error;
    }
  }

  const ledgers = await refreshStudentPenalties(database, student._id);
  const targets = data.targetLedgerId
    ? ledgers.filter(
        (ledger) =>
          String(ledger._id) === String(data.targetLedgerId) &&
          ledger.visibilityStatus !== 'hidden',
      )
    : ledgers.filter((ledger) => ledger.kind === data.kind && ledger.visibilityStatus !== 'hidden');
  if (!targets.length) {
    const error = new Error('No published fee balance was found for this selection.');
    error.status = 404;
    throw error;
  }
  const outstanding = roundMoney(
    targets.reduce((sum, ledger) => sum + Number(ledger.balanceAmount || 0), 0),
  );
  const amount = roundMoney(data.amount);
  if (amount <= 0 || amount > outstanding) {
    const error = new Error(`Enter an amount between ₹1 and ₹${outstanding.toFixed(2)}.`);
    error.status = 422;
    throw error;
  }

  const orderId = `OFFLINE-${crypto.randomUUID()}`;
  const paymentReference =
    data.referenceNumber || `OFF-${Date.now()}-${crypto.randomInt(1000, 10_000)}`;
  const now = new Date();
  const document = {
    studentAdmissionId: student._id,
    studentId: student.studentId,
    studentName: student.studentName,
    targetLedgerId: data.targetLedgerId || null,
    targetKind: data.kind,
    targetPeriodLabel: data.targetLedgerId ? targets[0].periodLabel : `Combined ${data.kind} fees`,
    razorpayOrderId: orderId,
    paymentChannel: 'offline',
    paymentReference,
    paymentDate: data.paymentDate,
    idempotencyKey: data.idempotencyKey,
    amount,
    currency: 'INR',
    method: data.method,
    internalRemark: data.internalRemark || '',
    allowExcessCredit: true,
    acceptedBy: acceptedBy._id,
    acceptedByName: acceptedBy.name || acceptedBy.email || 'Administrator',
    status: 'created',
    createdAt: now,
    updatedAt: now,
  };
  await database.collection('feePayments').insertOne(document);
  try {
    const payment = await completePayment(database, {
      orderId,
      paymentId: paymentReference,
      method: data.method,
      paidAt: data.paymentDate,
    });
    return { payment, duplicate: false };
  } catch (error) {
    await database.collection('feePayments').updateOne(
      { razorpayOrderId: orderId, status: { $ne: 'paid' } },
      {
        $set: {
          status: 'failed',
          failureDescription: error.message,
          updatedAt: new Date(),
        },
      },
    );
    throw error;
  }
}

export function verifyCheckoutSignature(orderId, paymentId, signature) {
  const expected = crypto
    .createHmac('sha256', config.razorpay.keySecret)
    .update(`${orderId}|${paymentId}`)
    .digest('hex');
  return safeEqual(expected, signature);
}

export function verifyWebhookSignature(rawBody, signature) {
  if (!config.razorpay.webhookSecret) return false;
  const expected = crypto
    .createHmac('sha256', config.razorpay.webhookSecret)
    .update(rawBody)
    .digest('hex');
  return safeEqual(expected, signature);
}

export async function razorpayPaymentDetails(paymentId) {
  const result = await globalThis.fetch(
    `https://api.razorpay.com/v1/payments/${encodeURIComponent(paymentId)}`,
    {
      headers: {
        Authorization: `Basic ${Buffer.from(`${config.razorpay.keyId}:${config.razorpay.keySecret}`).toString('base64')}`,
      },
    },
  );
  const payment = await result.json();
  if (!result.ok) {
    const error = new Error(payment?.error?.description || 'Razorpay payment verification failed.');
    error.status = 502;
    throw error;
  }
  if (!['authorized', 'captured'].includes(payment.status)) {
    const error = new Error('The payment has not been authorized by Razorpay.');
    error.status = 409;
    throw error;
  }
  if (payment.status === 'authorized') {
    const captureResult = await globalThis.fetch(
      `https://api.razorpay.com/v1/payments/${encodeURIComponent(paymentId)}/capture`,
      {
        method: 'POST',
        headers: {
          Authorization: `Basic ${Buffer.from(`${config.razorpay.keyId}:${config.razorpay.keySecret}`).toString('base64')}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ amount: payment.amount, currency: payment.currency || 'INR' }),
      },
    );
    const captured = await captureResult.json();
    if (!captureResult.ok || captured.status !== 'captured') {
      const error = new Error(
        captured?.error?.description || 'Razorpay could not capture the authorized payment.',
      );
      error.status = 502;
      throw error;
    }
    return captured;
  }
  return payment;
}

export async function completePayment(
  database,
  { orderId, paymentId, method = '', email = '', contact = '', paidAt = new Date() },
) {
  let payment = await database.collection('feePayments').findOne({ razorpayOrderId: orderId });
  if (!payment) {
    const error = new Error('Payment order was not found.');
    error.status = 404;
    throw error;
  }
  if (payment.status === 'paid') return payment;
  const claimed = await database
    .collection('feePayments')
    .findOneAndUpdate(
      { _id: payment._id, status: 'created' },
      { $set: { status: 'processing', updatedAt: new Date() } },
      { returnDocument: 'after' },
    );
  if (!claimed) {
    payment = await database.collection('feePayments').findOne({ _id: payment._id });
    if (payment?.status === 'paid') return payment;
    const error = new Error('This payment is already being processed.');
    error.status = 409;
    throw error;
  }
  payment = claimed;
  let ledgers = await refreshStudentPenalties(database, payment.studentAdmissionId);
  if (payment.targetLedgerId)
    ledgers = ledgers.filter(
      (ledger) =>
        String(ledger._id) === String(payment.targetLedgerId) &&
        ledger.visibilityStatus !== 'hidden',
    );
  else if (payment.targetKind)
    ledgers = ledgers.filter(
      (ledger) => ledger.kind === payment.targetKind && ledger.visibilityStatus !== 'hidden',
    );
  if (!ledgers.length) {
    const error = new Error('The fee period selected for this payment is no longer active.');
    error.status = 409;
    throw error;
  }
  const outstanding = roundMoney(
    ledgers.reduce((sum, ledger) => sum + Number(ledger.balanceAmount || 0), 0),
  );
  const { appliedAmount, excessCreditAmount } = paymentAmounts(
    payment.amount,
    outstanding,
    payment.allowExcessCredit,
  );
  const allocations = appliedAmount > 0 ? allocatePaymentAcrossLedgers(ledgers, appliedAmount) : [];
  for (const ledger of ledgers) {
    const totals = ledgerTotals(ledger.entries.map(normalizeEntry));
    await database.collection('studentFeeLedgers').updateOne(
      { _id: ledger._id },
      {
        $set: {
          entries: ledger.entries,
          ...totals,
          paymentStatus: totals.balanceAmount ? 'partial' : 'paid',
          updatedAt: new Date(),
        },
      },
    );
  }
  const receiptNumber = `RCPT-${new Date().toISOString().slice(0, 10).replaceAll('-', '')}-${crypto.randomInt(100_000, 1_000_000)}`;
  if (excessCreditAmount > 0)
    await database.collection('feeCredits').insertOne({
      studentAdmissionId: payment.studentAdmissionId,
      studentId: payment.studentId,
      studentName: payment.studentName,
      kind: payment.targetKind || 'academic',
      sourcePaymentId: payment._id,
      sourceReceiptNumber: receiptNumber,
      originalAmount: excessCreditAmount,
      remainingAmount: excessCreditAmount,
      status: 'available',
      createdAt: paidAt,
      updatedAt: new Date(),
    });
  const updated = await database.collection('feePayments').findOneAndUpdate(
    { _id: payment._id, status: 'processing' },
    {
      $set: {
        ...(payment.paymentChannel === 'offline'
          ? { paymentReference: paymentId }
          : { razorpayPaymentId: paymentId }),
        method,
        email,
        contact,
        allocations,
        appliedAmount,
        excessCreditAmount,
        receiptNumber,
        status: 'paid',
        paidAt,
        updatedAt: new Date(),
      },
    },
    { returnDocument: 'after' },
  );
  return updated || database.collection('feePayments').findOne({ _id: payment._id });
}

export function paymentAmounts(amount, outstanding, allowExcessCredit = false) {
  const received = roundMoney(amount);
  const due = roundMoney(outstanding);
  const appliedAmount = roundMoney(allowExcessCredit ? Math.min(received, due) : received);
  return {
    appliedAmount,
    excessCreditAmount: roundMoney(Math.max(0, received - appliedAmount)),
  };
}

export async function studentCreditBalance(database, studentAdmissionId, kind = null) {
  const filter = { studentAdmissionId, status: 'available', remainingAmount: { $gt: 0 } };
  if (kind) filter.kind = kind;
  const credits = await database.collection('feeCredits').find(filter).toArray();
  return roundMoney(credits.reduce((sum, credit) => sum + Number(credit.remainingAmount || 0), 0));
}

export async function applyAvailableStudentCredit(database, studentAdmissionId, kind = null) {
  const creditFilter = {
    studentAdmissionId,
    status: 'available',
    remainingAmount: { $gt: 0 },
  };
  if (kind) creditFilter.kind = kind;
  const credits = await database
    .collection('feeCredits')
    .find(creditFilter)
    .sort({ createdAt: 1 })
    .toArray();
  const adjustments = [];
  for (const credit of credits) {
    let ledgers = await refreshStudentPenalties(database, studentAdmissionId);
    ledgers = ledgers.filter(
      (ledger) =>
        ledger.visibilityStatus !== 'hidden' &&
        ledger.status === 'active' &&
        ledger.kind === credit.kind &&
        Number(ledger.balanceAmount || 0) > 0,
    );
    const outstanding = roundMoney(
      ledgers.reduce((sum, ledger) => sum + Number(ledger.balanceAmount || 0), 0),
    );
    const amount = roundMoney(Math.min(Number(credit.remainingAmount || 0), outstanding));
    if (amount <= 0) continue;
    const allocations = allocatePaymentAcrossLedgers(ledgers, amount);
    for (const ledger of ledgers) {
      const totals = ledgerTotals(ledger.entries.map(normalizeEntry));
      await database.collection('studentFeeLedgers').updateOne(
        { _id: ledger._id },
        {
          $set: {
            entries: ledger.entries,
            ...totals,
            paymentStatus: totals.balanceAmount ? 'partial' : 'paid',
            updatedAt: new Date(),
          },
        },
      );
    }
    const remainingAmount = roundMoney(Number(credit.remainingAmount) - amount);
    await database.collection('feeCredits').updateOne(
      { _id: credit._id },
      {
        $set: {
          remainingAmount,
          status: remainingAmount > 0 ? 'available' : 'consumed',
          updatedAt: new Date(),
        },
      },
    );
    const now = new Date();
    const adjustment = {
      studentAdmissionId,
      studentId: credit.studentId,
      studentName: credit.studentName,
      feeCreditId: credit._id,
      sourcePaymentId: credit.sourcePaymentId,
      sourceReceiptNumber: credit.sourceReceiptNumber,
      kind: credit.kind,
      amount,
      allocations,
      status: 'applied',
      appliedAt: now,
      createdAt: now,
      updatedAt: now,
    };
    const result = await database.collection('feeCreditAllocations').insertOne(adjustment);
    adjustments.push({ ...adjustment, _id: result.insertedId });
    await database.collection('feePayments').insertOne({
      studentAdmissionId,
      studentId: credit.studentId,
      studentName: credit.studentName,
      targetLedgerId: null,
      targetKind: credit.kind,
      targetPeriodLabel: `Automatic ${credit.kind} fee credit adjustment`,
      razorpayOrderId: `CREDIT-${crypto.randomUUID()}`,
      paymentChannel: 'credit',
      paymentReference: credit.sourceReceiptNumber,
      amount,
      appliedAmount: amount,
      excessCreditAmount: 0,
      currency: 'INR',
      method: 'excess_credit',
      allocations,
      receiptNumber: `CRADJ-${now.toISOString().slice(0, 10).replaceAll('-', '')}-${crypto.randomInt(100_000, 1_000_000)}`,
      status: 'paid',
      paidAt: now,
      createdAt: now,
      updatedAt: now,
    });
  }
  return adjustments;
}

export function allocatePaymentAcrossLedgers(ledgers, paymentAmount) {
  let remaining = Number(paymentAmount);
  const allocations = [];
  const targets = [];
  for (const ledger of ledgers) {
    for (const [index, original] of (ledger.entries || []).entries()) {
      const entry = normalizeEntry(original);
      if (entry.category !== 'fee' || entry.balanceAmount <= 0) continue;
      targets.push({ ledger, index, entry });
    }
  }
  targets.sort(
    (left, right) =>
      ledgerPeriodOrder(left.ledger) - ledgerPeriodOrder(right.ledger) ||
      Number(!left.entry.isPenalty) - Number(!right.entry.isPenalty) ||
      Number(left.entry.priority || 9999) - Number(right.entry.priority || 9999) ||
      String(left.entry.dueDate || '').localeCompare(String(right.entry.dueDate || '')),
  );
  const ledgerRemaining = new Map(
    ledgers.map((ledger) => [String(ledger._id), Number(ledger.balanceAmount || 0)]),
  );
  for (const target of targets) {
    if (remaining <= 0) break;
    const ledgerId = String(target.ledger._id);
    const payable = Math.min(target.entry.balanceAmount, ledgerRemaining.get(ledgerId) || 0);
    const applied = roundMoney(Math.min(remaining, payable));
    if (!applied) continue;
    target.entry.paidAmount = roundMoney(target.entry.paidAmount + applied);
    target.entry.balanceAmount = roundMoney(
      Math.max(
        0,
        target.entry.amount - Number(target.entry.discountAmount || 0) - target.entry.paidAmount,
      ),
    );
    target.entry.status = target.entry.balanceAmount <= 0 ? 'paid' : 'partial';
    target.ledger.entries[target.index] = target.entry;
    ledgerRemaining.set(ledgerId, roundMoney((ledgerRemaining.get(ledgerId) || 0) - applied));
    remaining = roundMoney(remaining - applied);
    allocations.push({
      ledgerId: target.ledger._id,
      ledgerKind: target.ledger.kind,
      periodKey: target.ledger.periodKey,
      periodLabel: target.ledger.periodLabel,
      feeHeadId: target.entry.feeHeadId,
      feeHeadName: target.entry.feeHeadName,
      isPenalty: Boolean(target.entry.isPenalty),
      amount: applied,
    });
  }
  if (remaining > 0.009)
    throw new Error('Payment allocation exceeded the current outstanding balance.');
  return allocations;
}

function ledgerPeriodOrder(ledger) {
  if (ledger.kind === 'hostel') return Number.MAX_SAFE_INTEGER;
  return ledger.feeFrequency === 'semester'
    ? Number(ledger.currentSemester || 0)
    : Number(ledger.currentAcademicYear || 0) * 2;
}

export function paymentReceiptHtml(payment) {
  const rows = (payment.allocations || [])
    .map(
      (item) =>
        `<tr><td>${escapeHtml(item.feeHeadName)}</td><td>${escapeHtml(item.periodLabel || item.ledgerKind)}</td><td style="text-align:right">₹${Number(item.amount).toFixed(2)}</td></tr>`,
    )
    .join('');
  const channel =
    payment.paymentChannel === 'offline'
      ? 'Offline'
      : payment.paymentChannel === 'credit'
        ? 'Excess credit adjustment'
        : 'Online · Razorpay';
  const reference = payment.paymentReference || payment.razorpayPaymentId || '';
  const collector =
    payment.paymentChannel === 'offline' && payment.acceptedByName
      ? `<p><strong>Received by:</strong> ${escapeHtml(payment.acceptedByName)}</p>`
      : '';
  const appliedAmount = Number(payment.appliedAmount ?? payment.amount);
  const excessCreditAmount = Number(payment.excessCreditAmount || 0);
  return `<!doctype html><html><head><meta charset="utf-8"><title>${escapeHtml(payment.receiptNumber)}</title><style>body{font:14px Arial;color:#172033;max-width:760px;margin:40px auto;padding:24px}header{border-bottom:2px solid #172033;margin-bottom:24px}table{width:100%;border-collapse:collapse;margin-top:24px}th,td{padding:10px;border-bottom:1px solid #ddd;text-align:left}.total{font-size:20px;text-align:right;margin-top:20px}</style></head><body><header><h1>Taskly ERP Fee Receipt</h1><p>Receipt ${escapeHtml(payment.receiptNumber)}</p></header><p><strong>Student:</strong> ${escapeHtml(payment.studentName)} (${escapeHtml(payment.studentId)})</p><p><strong>Fee period:</strong> ${escapeHtml(payment.targetPeriodLabel || 'Fee payment')}</p><p><strong>Payment channel:</strong> ${escapeHtml(channel)}</p><p><strong>Payment method:</strong> ${escapeHtml(payment.method || 'Not recorded')}</p><p><strong>Reference:</strong> ${escapeHtml(reference)}</p>${collector}<p><strong>Paid at:</strong> ${escapeHtml(new Date(payment.paidAt).toLocaleString('en-IN'))}</p><table><thead><tr><th>Fee head</th><th>Fee period</th><th style="text-align:right">Amount</th></tr></thead><tbody>${rows}</tbody></table><p><strong>Adjusted against fees:</strong> ₹${appliedAmount.toFixed(2)}</p>${excessCreditAmount > 0 ? `<p><strong>Excess student credit:</strong> ₹${excessCreditAmount.toFixed(2)}</p>` : ''}<p class="total"><strong>Total received: ₹${Number(payment.amount).toFixed(2)}</strong></p><p>This is a system-generated receipt.</p></body></html>`;
}

function normalizeEntry(entry) {
  const amount = Number(entry.amount || 0);
  const paidAmount = Number(entry.paidAmount || 0);
  const discountAmount = Number(entry.discountAmount || 0);
  const calculatedBalance = amount - discountAmount - paidAmount;
  return {
    ...entry,
    amount,
    paidAmount,
    discountAmount,
    balanceAmount: Math.max(0, Number(entry.balanceAmount ?? calculatedBalance)),
    status:
      Number(entry.balanceAmount ?? calculatedBalance) <= 0
        ? 'paid'
        : paidAmount
          ? 'partial'
          : 'due',
  };
}

function ledgerTotals(entries) {
  const chargeAmount = roundMoney(
    entries
      .filter((entry) => entry.category === 'fee')
      .reduce((sum, entry) => sum + Number(entry.amount || 0), 0),
  );
  const discountAmount = roundMoney(
    entries
      .filter((entry) => entry.category === 'discount')
      .reduce((sum, entry) => sum + Number(entry.amount || 0), 0),
  );
  const totalAmount = roundMoney(Math.max(0, chargeAmount - discountAmount));
  const paidAmount = roundMoney(
    entries.reduce((sum, entry) => sum + Number(entry.paidAmount || 0), 0),
  );
  return {
    chargeAmount,
    discountAmount,
    totalAmount,
    paidAmount,
    balanceAmount: roundMoney(Math.max(0, totalAmount - paidAmount)),
  };
}

function utcDay(value) {
  const date =
    value instanceof Date ? value : new Date(`${String(value).slice(0, 10)}T00:00:00.000Z`);
  return Date.UTC(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate());
}

export function calculatePenaltyAmount(settings, outstandingBalance, asOf = new Date()) {
  if (
    !settings?.enabled ||
    Number(outstandingBalance || 0) <= 0 ||
    !settings.dueDate ||
    Number(settings.dailyAmount || 0) <= 0 ||
    Number(settings.maxAmount || 0) <= 0
  )
    return 0;
  const overdueDays = Math.max(
    0,
    Math.floor((utcDay(asOf) - utcDay(settings.dueDate)) / 86_400_000),
  );
  return Math.min(Number(settings.maxAmount), overdueDays * Number(settings.dailyAmount));
}

function roundMoney(value) {
  return Math.round((Number(value) + Number.EPSILON) * 100) / 100;
}

function safeEqual(expected, actual) {
  const left = Buffer.from(String(expected || ''));
  const right = Buffer.from(String(actual || ''));
  return left.length === right.length && crypto.timingSafeEqual(left, right);
}

function escapeHtml(value) {
  return String(value ?? '')
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;');
}
