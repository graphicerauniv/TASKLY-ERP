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
      (entry) => entry.isPenalty || Number(entry.amount || 0) > 0 || Number(entry.paidAmount || 0) > 0,
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

export async function createRazorpayOrder(database, student, amountRupees, targetLedgerId) {
  if (!razorpayEnabled()) {
    const error = new Error('Online payments are not configured yet. Contact the accounts office.');
    error.status = 503;
    throw error;
  }
  const ledgers = await refreshStudentPenalties(database, student._id);
  const targetLedger = ledgers.find((ledger) => String(ledger._id) === String(targetLedgerId));
  if (!targetLedger) {
    const error = new Error('The selected fee period was not found. Refresh the fee page.');
    error.status = 404;
    throw error;
  }
  const outstanding = roundMoney(Number(targetLedger.balanceAmount || 0));
  const amount = roundMoney(amountRupees);
  if (amount <= 0 || amount > outstanding) {
    const error = new Error(`Enter an amount between ₹1 and ₹${outstanding.toFixed(2)}.`);
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
        feeLedgerId: String(targetLedger._id),
        feePeriod: targetLedger.periodLabel,
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
    targetLedgerId: targetLedger._id,
    targetPeriodLabel: targetLedger.periodLabel,
    razorpayOrderId: order.id,
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
  { orderId, paymentId, method = '', email = '', contact = '' },
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
      (ledger) => String(ledger._id) === String(payment.targetLedgerId),
    );
  if (!ledgers.length) {
    const error = new Error('The fee period selected for this payment is no longer active.');
    error.status = 409;
    throw error;
  }
  let remaining = Number(payment.amount);
  const allocations = [];
  const targets = [];
  for (const ledger of ledgers) {
    const ledgerRemaining = Number(ledger.balanceAmount || 0);
    for (const [index, original] of (ledger.entries || []).entries()) {
      const entry = normalizeEntry(original);
      if (entry.category !== 'fee' || entry.balanceAmount <= 0) continue;
      targets.push({ ledger, ledgerRemaining, index, entry });
    }
  }
  targets.sort(
    (left, right) =>
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
        target.entry.amount -
          Number(target.entry.discountAmount || 0) -
          target.entry.paidAmount,
      ),
    );
    target.entry.status = target.entry.balanceAmount <= 0 ? 'paid' : 'partial';
    target.ledger.entries[target.index] = target.entry;
    ledgerRemaining.set(ledgerId, roundMoney((ledgerRemaining.get(ledgerId) || 0) - applied));
    remaining = roundMoney(remaining - applied);
    allocations.push({
      ledgerId: target.ledger._id,
      ledgerKind: target.ledger.kind,
      feeHeadId: target.entry.feeHeadId,
      feeHeadName: target.entry.feeHeadName,
      isPenalty: Boolean(target.entry.isPenalty),
      amount: applied,
    });
  }
  if (remaining > 0.009)
    throw new Error('Payment allocation exceeded the current outstanding balance.');
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
  const updated = await database.collection('feePayments').findOneAndUpdate(
    { _id: payment._id, status: 'processing' },
    {
      $set: {
        razorpayPaymentId: paymentId,
        method,
        email,
        contact,
        allocations,
        receiptNumber,
        status: 'paid',
        paidAt: new Date(),
        updatedAt: new Date(),
      },
    },
    { returnDocument: 'after' },
  );
  return updated || database.collection('feePayments').findOne({ _id: payment._id });
}

export function paymentReceiptHtml(payment) {
  const rows = (payment.allocations || [])
    .map(
      (item) =>
        `<tr><td>${escapeHtml(item.feeHeadName)}</td><td>${escapeHtml(item.ledgerKind)}</td><td style="text-align:right">₹${Number(item.amount).toFixed(2)}</td></tr>`,
    )
    .join('');
  return `<!doctype html><html><head><meta charset="utf-8"><title>${escapeHtml(payment.receiptNumber)}</title><style>body{font:14px Arial;color:#172033;max-width:760px;margin:40px auto;padding:24px}header{border-bottom:2px solid #172033;margin-bottom:24px}table{width:100%;border-collapse:collapse;margin-top:24px}th,td{padding:10px;border-bottom:1px solid #ddd;text-align:left}.total{font-size:20px;text-align:right;margin-top:20px}</style></head><body><header><h1>Taskly ERP Fee Receipt</h1><p>Receipt ${escapeHtml(payment.receiptNumber)}</p></header><p><strong>Student:</strong> ${escapeHtml(payment.studentName)} (${escapeHtml(payment.studentId)})</p><p><strong>Fee period:</strong> ${escapeHtml(payment.targetPeriodLabel || 'Fee payment')}</p><p><strong>Payment ID:</strong> ${escapeHtml(payment.razorpayPaymentId)}</p><p><strong>Paid at:</strong> ${escapeHtml(new Date(payment.paidAt).toLocaleString('en-IN'))}</p><table><thead><tr><th>Fee head</th><th>Ledger</th><th style="text-align:right">Amount</th></tr></thead><tbody>${rows}</tbody></table><p class="total"><strong>Total paid: ₹${Number(payment.amount).toFixed(2)}</strong></p><p>This is a system-generated receipt.</p></body></html>`;
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
