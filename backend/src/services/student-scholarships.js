import { ObjectId } from 'bson';

const TUITION_PATTERN = /\btuition\b/i;

export async function scholarshipAssignments(database, studentAdmissionId) {
  return database
    .collection('studentScholarships')
    .find({ studentAdmissionId, status: 'active' })
    .sort({ assignedAt: 1, createdAt: 1 })
    .toArray();
}

export async function discountAssignments(database, studentAdmissionId) {
  const items = await database
    .collection('studentDiscounts')
    .find({ studentAdmissionId, status: 'active' })
    .sort({ createdAt: 1 })
    .toArray();
  return items.map((item) => ({ ...item, adjustmentKind: 'discount', recurring: false }));
}

export async function scholarshipEntriesForPeriod(database, admission, context, entries) {
  const [scholarships, discounts] = await Promise.all([
    scholarshipAssignments(database, admission._id),
    discountAssignments(database, admission._id),
  ]);
  const assignments = [...scholarships, ...discounts];
  if (context.feeFrequency === 'year')
    assignments.push({
      _id: `yearly-discount-${context.currentAcademicYear}`,
      name: 'Yearly Payment Discount',
      scholarshipName: 'Yearly Payment Discount',
      type: 'percentage',
      value: 5,
      recurring: true,
      startAcademicYear: 1,
      adjustmentKind: 'annual-discount',
      isSystemAnnualDiscount: true,
      status: 'active',
    });
  return applyScholarshipsToEntries(entries, assignments, context);
}

export function applyScholarshipsToEntries(sourceEntries, assignments, context) {
  let entries = sourceEntries.filter((entry) => !entry.isScholarship && !entry.isOneTimeDiscount);
  const eligible = assignments.filter((assignment) => assignmentApplies(assignment, context));
  const tuitionEntries = entries.filter(
    (entry) => entry.category === 'fee' && TUITION_PATTERN.test(entry.feeHeadName || ''),
  );
  const tuitionAmount = roundMoney(
    tuitionEntries.reduce((sum, entry) => sum + Number(entry.amount || 0), 0),
  );
  if (!tuitionAmount) return entries.filter((entry) => entry.category !== 'discount');
  let availableTuition = tuitionAmount;
  entries = entries
    .map((entry) => {
      if (entry.category !== 'discount') return entry;
      const appliedAmount = roundMoney(Math.min(availableTuition, Number(entry.amount || 0)));
      availableTuition = roundMoney(availableTuition - appliedAmount);
      return {
        ...entry,
        amount: appliedAmount,
        paidAmount: 0,
        balanceAmount: 0,
        status: 'paid',
        appliesToFeeHeadName: 'Tuition Fee',
      };
    })
    .filter((entry) => entry.category !== 'discount' || Number(entry.amount || 0) > 0);
  const tuitionPriority = Math.min(
    ...tuitionEntries.map((entry) => Number(entry.priority || 9999)),
  );
  const tuitionDueDate = tuitionEntries
    .map((entry) => entry.dueDate)
    .filter(Boolean)
    .sort()[0];
  const adjustmentEntries = [];

  for (const assignment of eligible) {
    if (availableTuition <= 0) break;
    const isAnnualDiscount = assignment.isSystemAnnualDiscount === true;
    const isOneTimeDiscount = assignment.adjustmentKind === 'discount';
    const isOneTimeScholarship = !isOneTimeDiscount && assignment.recurring === false;
    const configuredAmount =
      assignment.type === 'percentage'
        ? tuitionAmount * (Number(assignment.value || 0) / 100)
        : Number(assignment.value || 0) /
          (!isOneTimeDiscount && !isOneTimeScholarship && context.feeFrequency === 'semester'
            ? 2
            : 1);
    const appliedAmount = roundMoney(Math.min(availableTuition, configuredAmount));
    if (appliedAmount <= 0) continue;
    adjustmentEntries.push({
      feeHeadId: isAnnualDiscount
        ? `yearly-payment-discount-${Number(context.currentAcademicYear || 1)}`
        : isOneTimeDiscount
          ? `discount-${String(assignment._id)}`
          : assignment.scholarshipId,
      feeHeadName: isAnnualDiscount
        ? 'Yearly Payment Discount (5%)'
        : isOneTimeDiscount
          ? assignment.name || 'One-time Discount'
          : assignment.scholarshipName,
      category: 'discount',
      priority: tuitionPriority,
      frequency:
        isOneTimeDiscount || isOneTimeScholarship
          ? 'one-time'
          : context.feeFrequency === 'semester'
            ? 'semester'
            : 'yearly',
      academicYear: Number(context.currentAcademicYear || 1),
      semester: context.feeFrequency === 'semester' ? Number(context.currentSemester || 1) : null,
      periodLabel:
        context.feeFrequency === 'semester'
          ? `Semester ${Number(context.currentSemester || 1)}`
          : `Year ${Number(context.currentAcademicYear || 1)}`,
      amount: appliedAmount,
      paidAmount: 0,
      balanceAmount: 0,
      dueDate: tuitionDueDate || null,
      status: 'paid',
      isScholarship: !isOneTimeDiscount && !isAnnualDiscount,
      isAnnualDiscount,
      isOneTimeScholarship,
      isOneTimeDiscount,
      adjustmentKind: isAnnualDiscount
        ? 'annual-discount'
        : isOneTimeDiscount
          ? 'discount'
          : 'scholarship',
      scholarshipAssignmentId: isOneTimeDiscount || isAnnualDiscount ? undefined : assignment._id,
      scholarshipId: isOneTimeDiscount || isAnnualDiscount ? undefined : assignment.scholarshipId,
      customDiscountId: isOneTimeDiscount ? assignment._id : undefined,
      scholarshipType: isOneTimeDiscount || isAnnualDiscount ? undefined : assignment.type,
      scholarshipValue:
        isOneTimeDiscount || isAnnualDiscount ? undefined : Number(assignment.value || 0),
    });
    availableTuition = roundMoney(availableTuition - appliedAmount);
  }
  return allocateDiscountsToTuition([...entries, ...adjustmentEntries]).sort(compareLedgerEntries);
}

export async function refreshStudentScholarshipLedgers(database, admission, options = {}) {
  const [scholarships, discounts] = await Promise.all([
    scholarshipAssignments(database, admission._id),
    discountAssignments(database, admission._id),
  ]);
  const assignments = [...scholarships, ...discounts];
  const ledgers = await database
    .collection('studentFeeLedgers')
    .find({ studentAdmissionId: admission._id, kind: 'academic', status: 'active' })
    .toArray();
  const prepared = [];
  for (const ledger of ledgers) {
    if (options.preservePaidScholarships && Number(ledger.paidAmount || 0) > 0) continue;
    const context = {
      currentAcademicYear: Number(ledger.currentAcademicYear || 1),
      currentSemester: Number(ledger.currentSemester || 1),
      feeFrequency: ledger.feeFrequency === 'semester' ? 'semester' : 'year',
      ledgerId: ledger._id,
      periodKey: ledger.periodKey,
    };
    const entries = applyScholarshipsToEntries(ledger.entries || [], assignments, context);
    const totals = totalsForLedger(entries);
    if (totals.totalAmount + 0.009 < totals.paidAmount) {
      const error = new Error(
        `${ledger.periodLabel || 'This fee period'} already has payments greater than the fee after this adjustment. Contact Accounts before applying it.`,
      );
      error.status = 409;
      throw error;
    }
    const update = {
      entries,
      ...totals,
      paymentStatus: totals.balanceAmount <= 0 ? 'paid' : totals.paidAmount > 0 ? 'partial' : 'due',
      scholarshipsUpdatedAt: new Date(),
      adjustmentsUpdatedAt: new Date(),
      updatedAt: new Date(),
    };
    prepared.push({ ledger, update });
  }
  const refreshed = [];
  for (const { ledger, update } of prepared) {
    await database.collection('studentFeeLedgers').updateOne({ _id: ledger._id }, { $set: update });
    refreshed.push({ ...ledger, ...update });
  }
  return refreshed;
}

export function totalsForLedger(entries) {
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
    entries
      .filter((entry) => entry.category === 'fee')
      .reduce((sum, entry) => sum + Number(entry.paidAmount || 0), 0),
  );
  return {
    chargeAmount,
    discountAmount,
    totalAmount,
    paidAmount,
    balanceAmount: roundMoney(Math.max(0, totalAmount - paidAmount)),
  };
}

function assignmentApplies(assignment, context) {
  if (assignment.adjustmentKind === 'discount' || assignment.recurring === false) {
    if (assignment.targetLedgerId && context.ledgerId)
      return String(assignment.targetLedgerId) === String(context.ledgerId);
    return Boolean(
      assignment.targetPeriodKey &&
      context.periodKey &&
      assignment.targetPeriodKey === context.periodKey,
    );
  }
  const currentYear = Number(context.currentAcademicYear || 1);
  const startYear = Number(assignment.startAcademicYear || 1);
  if (currentYear < startYear) return false;
  if (context.feeFrequency !== 'semester' || currentYear > startYear) return true;
  return Number(context.currentSemester || 1) >= Number(assignment.startSemester || 1);
}

function compareLedgerEntries(left, right) {
  return (
    Number(left.priority || 9999) - Number(right.priority || 9999) ||
    Number(left.category === 'discount') - Number(right.category === 'discount') ||
    String(left.feeHeadName || '').localeCompare(String(right.feeHeadName || ''))
  );
}

function allocateDiscountsToTuition(entries) {
  let remainingDiscount = roundMoney(
    entries
      .filter((entry) => entry.category === 'discount')
      .reduce((sum, entry) => sum + Number(entry.amount || 0), 0),
  );
  return entries.map((entry) => {
    if (entry.category !== 'fee' || !TUITION_PATTERN.test(entry.feeHeadName || '')) return entry;
    const discountAmount = roundMoney(Math.min(remainingDiscount, Number(entry.amount || 0)));
    remainingDiscount = roundMoney(remainingDiscount - discountAmount);
    const balanceAmount = roundMoney(
      Math.max(0, Number(entry.amount || 0) - discountAmount - Number(entry.paidAmount || 0)),
    );
    return {
      ...entry,
      discountAmount,
      balanceAmount,
      status: balanceAmount <= 0 ? 'paid' : Number(entry.paidAmount || 0) > 0 ? 'partial' : 'due',
    };
  });
}

function roundMoney(value) {
  return Math.round((Number(value) + Number.EPSILON) * 100) / 100;
}

export function scholarshipAssignmentDocument(
  admission,
  scholarship,
  assignment,
  assignedBy,
  ledger,
) {
  const now = new Date();
  const usesCustomValue = scholarship.valueMode === 'custom';
  return {
    studentAdmissionId: admission._id,
    studentId: admission.studentId,
    studentName: admission.studentName,
    scholarshipId: scholarship._id,
    scholarshipName: scholarship.name,
    type: usesCustomValue ? assignment.type : scholarship.type,
    value: Number(usesCustomValue ? assignment.value : scholarship.value),
    startAcademicYear: Number(admission.currentAcademicYear || 1),
    startSemester:
      admission.feeFrequency === 'semester'
        ? Number(admission.currentSemester || admission.currentAcademicYear * 2 - 1 || 1)
        : null,
    recurring: assignment.recurring,
    targetLedgerId: ledger?._id || null,
    targetPeriodKey: ledger?.periodKey || null,
    targetPeriodLabel: ledger?.periodLabel || null,
    status: 'active',
    assignedBy: objectId(assignedBy),
    assignedAt: now,
    createdAt: now,
    updatedAt: now,
  };
}

export function discountAssignmentDocument(admission, ledger, discount, createdBy) {
  const now = new Date();
  return {
    studentAdmissionId: admission._id,
    studentId: admission.studentId,
    studentName: admission.studentName,
    name: discount.name,
    type: discount.type,
    value: Number(discount.value),
    targetLedgerId: ledger._id,
    targetPeriodKey: ledger.periodKey,
    targetPeriodLabel: ledger.periodLabel,
    academicSession: ledger.academicSession,
    academicYear: Number(ledger.currentAcademicYear || 1),
    semester: ledger.feeFrequency === 'semester' ? Number(ledger.currentSemester || 1) : null,
    feeFrequency: ledger.feeFrequency,
    internalRemark: discount.internalRemark,
    recurring: false,
    adjustmentKind: 'discount',
    status: 'active',
    createdBy: objectId(createdBy),
    createdAt: now,
    updatedAt: now,
  };
}

function objectId(value) {
  if (value instanceof ObjectId) return value;
  return typeof value === 'string' && ObjectId.isValid(value) ? new ObjectId(value) : value;
}
