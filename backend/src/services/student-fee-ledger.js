import { ObjectId } from 'bson';

export async function generateStudentFeeLedgers(database, admission, createdBy) {
  if (admission.status !== 'approved' || !admission.isActive)
    return failure(admission, 'Student must be approved and active.');
  const context = await feeContext(database, admission);
  const missing = [
    'academicSession',
    'collegeId',
    'courseId',
    'domicileId',
    'studentTypeId',
    'currentAcademicYear',
  ].filter((field) => !context[field]);
  if (missing.length)
    return failure(admission, `Missing admission fee mapping: ${missing.join(', ')}.`);
  const book = await database.collection('feeBooks').findOne(
    {
      collegeId: context.collegeId,
      academicSession: context.academicSession,
      isActive: true,
    },
    { sort: { startDate: -1, createdAt: -1 } },
  );
  if (!book)
    return failure(admission, 'No active fee book matches the student college and session.');

  const createdKinds = [];
  const skippedKinds = [];
  const academic = await academicLedger(database, admission, context, book, createdBy);
  if (academic === 'created') createdKinds.push('academic');
  else skippedKinds.push({ kind: 'academic', reason: academic });
  const hostel = await hostelLedger(database, admission, context, book, createdBy);
  if (hostel === 'created') createdKinds.push('hostel');
  else skippedKinds.push({ kind: 'hostel', reason: hostel });
  return {
    studentAdmissionId: admission._id,
    studentId: admission.studentId,
    studentName: admission.studentName,
    createdKinds,
    skippedKinds,
    success: createdKinds.length > 0,
  };
}

export async function removeStudentFeeLedgers(database, studentAdmissionId) {
  const ledgers = await database
    .collection('studentFeeLedgers')
    .find({ studentAdmissionId, status: 'active' })
    .toArray();
  if (ledgers.some((ledger) => Number(ledger.paidAmount || 0) > 0)) {
    const error = new Error('Fee ledgers with payments cannot be deleted.');
    error.status = 409;
    throw error;
  }
  const result = await database
    .collection('studentFeeLedgers')
    .deleteMany({ studentAdmissionId, status: 'active' });
  return result.deletedCount;
}

export function totalsForEntries(entries) {
  const chargeAmount = entries
    .filter((entry) => entry.category === 'fee')
    .reduce((sum, entry) => sum + Number(entry.amount || 0), 0);
  const discountAmount = entries
    .filter((entry) => entry.category === 'discount')
    .reduce((sum, entry) => sum + Number(entry.amount || 0), 0);
  return {
    chargeAmount,
    discountAmount,
    totalAmount: Math.max(0, chargeAmount - discountAmount),
  };
}

async function academicLedger(database, admission, context, book, createdBy) {
  const existing = await existingLedger(database, admission._id, book._id, 'academic');
  if (existing) {
    if (Number(existing.currentAcademicYear) === context.currentAcademicYear)
      return 'Academic Fee already created.';
    if (Number(existing.paidAmount || 0) > 0)
      return 'Academic year cannot be changed because the existing Academic Fee has payments.';
  }
  const candidates = await database
    .collection('courseFees')
    .find({ bookId: book._id, courseId: context.courseId })
    .toArray();
  const fees = feesForAcademicYear(
    selectMatchingCourseFees(candidates, context),
    context.currentAcademicYear,
  );
  if (!fees.length) return 'No matching course fee structure.';
  if (hasConflictingFeeAmounts(fees))
    return 'Multiple fee schedules match this student. Map the applicable eligibility band before creating fees.';
  const entries = await ledgerEntries(database, fees, book, 'academic');
  if (!entries.length) return 'No active mapped Academic Fee heads.';
  if (existing) await database.collection('studentFeeLedgers').deleteOne({ _id: existing._id });
  await insertLedger(database, {
    admission,
    context,
    book,
    kind: 'academic',
    name: 'Academic Fee',
    entries,
    createdBy,
  });
  return 'created';
}

export function selectMatchingCourseFees(fees, context) {
  const matching = fees.filter((fee) =>
    ['domicileId', 'studentTypeId', 'countryId'].every((field) =>
      dimensionMatches(fee, field, context[field]),
    ),
  );
  if (!matching.length) return [];

  const batches = new Map();
  for (const fee of matching) {
    const key = fee.importPreviewId
      ? `import:${fee.importPreviewId}:${fee.sourceSheet || 'unknown-sheet'}`
      : `mapping:${dimensionKey(fee)}`;
    const batch = batches.get(key) || {
      fees: [],
      specificity: dimensionSpecificity(fee),
      courseAffinity: courseAffinity(fee, context.courseName),
      createdAt: new Date(fee.createdAt || 0).getTime(),
    };
    batch.fees.push(fee);
    batch.specificity = Math.max(batch.specificity, dimensionSpecificity(fee));
    batch.courseAffinity = Math.max(batch.courseAffinity, courseAffinity(fee, context.courseName));
    batch.createdAt = Math.max(batch.createdAt, new Date(fee.createdAt || 0).getTime());
    batches.set(key, batch);
  }
  const selected = [...batches.values()].sort(
    (left, right) =>
      right.specificity - left.specificity ||
      right.courseAffinity - left.courseAffinity ||
      right.createdAt - left.createdAt,
  )[0];
  return selected?.fees || [];
}

export function feesForAcademicYear(fees, currentAcademicYear) {
  return deduplicateFeeRows(
    fees.filter(
      (fee) => fee.academicYear == null || Number(fee.academicYear) === Number(currentAcademicYear),
    ),
  );
}

async function hostelLedger(database, admission, context, book, createdBy) {
  if (await existingLedger(database, admission._id, book._id, 'hostel'))
    return 'Hostel Fee already created.';
  const allocation = await database.collection('hostelAllocations').findOne({
    studentAdmissionId: admission._id,
    academicSession: context.academicSession,
    status: 'active',
  });
  if (!allocation) return 'No active hostel allocation for this session.';
  const [configuration, room] = await Promise.all([
    database.collection('hostelRoomConfigurations').findOne({
      roomId: allocation.roomId,
      academicSession: context.academicSession,
    }),
    database.collection('hostelRooms').findOne({ _id: allocation.roomId }),
  ]);
  const capacity = Number(configuration?.capacity || room?.capacity || 0);
  const roomType = String(configuration?.roomType || room?.roomType || '');
  if (!capacity || !roomType) return 'Hostel room capacity or type is not configured.';
  const fees = await database
    .collection('hostelFees')
    .find({
      bookId: book._id,
      hostelId: allocation.hostelId,
      seater: capacity,
      roomType,
    })
    .toArray();
  if (!fees.length) return 'No matching hostel fee structure.';
  const entries = await ledgerEntries(database, fees, book, 'hostel');
  if (!entries.length) return 'No active mapped Hostel Fee heads.';
  await insertLedger(database, {
    admission,
    context,
    book,
    kind: 'hostel',
    name: 'Hostel Fee',
    entries,
    createdBy,
    hostelAllocationId: allocation._id,
    hostelName: allocation.hostelName,
    roomNumber: allocation.roomNumber,
  });
  return 'created';
}

async function feeContext(database, admission) {
  let collegeId = objectId(admission.collegeId);
  const courseId = objectId(admission.courseId);
  if (!collegeId && courseId) {
    const course = await database
      .collection('masterValues')
      .findOne({ _id: courseId, typeSlug: 'course' });
    const level = course?.parentId
      ? await database
          .collection('masterValues')
          .findOne({ _id: course.parentId, typeSlug: 'level' })
      : null;
    const department = level?.parentId
      ? await database
          .collection('masterValues')
          .findOne({ _id: level.parentId, typeSlug: 'department' })
      : null;
    collegeId = department?.parentId || null;
  }
  return {
    academicSession: admission.academicSession || '',
    collegeId,
    courseId,
    domicileId: objectId(admission.domicileId),
    studentTypeId: objectId(admission.studentTypeId),
    countryId: objectId(admission.countryId),
    courseName: admission.courseName || '',
    currentAcademicYear: Number(admission.currentAcademicYear || 0),
  };
}

async function ledgerEntries(database, fees, book, kind) {
  const headIds = [...new Set(fees.map((fee) => String(fee.feeHeadId)))].map(
    (value) => new ObjectId(value),
  );
  const heads = await database
    .collection('feeHeads')
    .find({ _id: { $in: headIds }, bookId: book._id, isActive: true })
    .toArray();
  const headMap = new Map(heads.map((head) => [String(head._id), head]));
  return fees
    .filter((fee) => headMap.has(String(fee.feeHeadId)))
    .map((fee) => {
      const head = headMap.get(String(fee.feeHeadId));
      return {
        sourceFeeId: fee._id,
        feeHeadId: head._id,
        feeHeadName: head.name,
        category: head.category || fee.category || 'fee',
        priority: Number(head.priority || 9999),
        frequency: fee.frequency,
        academicYear: fee.academicYear || null,
        semester: fee.semester || null,
        periodLabel: periodLabel(fee, kind),
        amount: Number(fee.amount || 0),
        dueDate: dueDate(book.startDate, fee),
        status: 'due',
      };
    })
    .sort(
      (left, right) =>
        left.priority - right.priority ||
        Number(left.semester || left.academicYear || 0) -
          Number(right.semester || right.academicYear || 0) ||
        left.feeHeadName.localeCompare(right.feeHeadName),
    );
}

async function insertLedger(database, input) {
  const now = new Date();
  const totals = totalsForEntries(input.entries);
  await database.collection('studentFeeLedgers').insertOne({
    studentAdmissionId: input.admission._id,
    studentId: input.admission.studentId,
    studentName: input.admission.studentName,
    feeBookId: input.book._id,
    feeBookCode: input.book.code,
    academicSession: input.context.academicSession,
    currentAcademicYear: input.context.currentAcademicYear,
    kind: input.kind,
    name: input.name,
    entries: input.entries,
    ...totals,
    paidAmount: 0,
    balanceAmount: totals.totalAmount,
    status: 'active',
    hostelAllocationId: input.hostelAllocationId || null,
    hostelName: input.hostelName || '',
    roomNumber: input.roomNumber || '',
    createdBy: input.createdBy,
    createdAt: now,
    updatedAt: now,
  });
}

async function existingLedger(database, studentAdmissionId, feeBookId, kind) {
  return database
    .collection('studentFeeLedgers')
    .findOne({ studentAdmissionId, feeBookId, kind, status: 'active' });
}

function periodLabel(fee, kind) {
  if (kind === 'hostel') return 'Current session';
  if (fee.semester) return `Semester ${fee.semester}`;
  if (fee.academicYear) return `Year ${fee.academicYear}`;
  return fee.frequency === 'one-time' ? 'One-time' : 'Current session';
}

function dueDate(startDate, fee) {
  const date = new Date(`${startDate}T00:00:00.000Z`);
  const period = Math.max(1, Number(fee.semester || fee.academicYear || 1));
  const months = fee.semester ? (period - 1) * 6 : fee.academicYear ? (period - 1) * 12 : 0;
  date.setUTCMonth(date.getUTCMonth() + months);
  return date.toISOString().slice(0, 10);
}

function objectId(value) {
  if (value instanceof ObjectId) return value;
  return typeof value === 'string' && ObjectId.isValid(value) ? new ObjectId(value) : null;
}

function dimensionMatches(fee, field, expected) {
  if (!Object.prototype.hasOwnProperty.call(fee, field)) return true;
  const actual = fee[field];
  if (actual === null || actual === '') return expected === null || expected === '';
  return String(actual) === String(expected);
}

function dimensionSpecificity(fee) {
  return ['domicileId', 'studentTypeId', 'countryId'].filter((field) =>
    Object.prototype.hasOwnProperty.call(fee, field),
  ).length;
}

function dimensionKey(fee) {
  return ['domicileId', 'studentTypeId', 'countryId']
    .map((field) =>
      Object.prototype.hasOwnProperty.call(fee, field) ? String(fee[field]) : 'legacy-any',
    )
    .join(':');
}

function courseAffinity(fee, courseName) {
  if (!fee.sourceSheet || !courseName) return 0;
  const compact = (value) =>
    String(value)
      .toLocaleLowerCase()
      .replace(/[^a-z0-9]/g, '');
  return compact(fee.sourceSheet) === compact(courseName) ? 2 : 0;
}

function deduplicateFeeRows(fees) {
  const rows = new Map();
  for (const fee of fees) {
    const key = [
      fee.feeHeadId,
      fee.category,
      fee.academicYear,
      fee.semester,
      fee.frequency,
      Number(fee.amount || 0),
    ].join(':');
    if (!rows.has(key)) rows.set(key, fee);
  }
  return [...rows.values()];
}

function hasConflictingFeeAmounts(fees) {
  const amounts = new Map();
  for (const fee of fees) {
    const key = [fee.feeHeadId, fee.category, fee.academicYear, fee.semester, fee.frequency].join(
      ':',
    );
    const values = amounts.get(key) || new Set();
    values.add(Number(fee.amount || 0));
    amounts.set(key, values);
  }
  return [...amounts.values()].some((values) => values.size > 1);
}

function failure(admission, reason) {
  return {
    studentAdmissionId: admission._id,
    studentId: admission.studentId,
    studentName: admission.studentName,
    createdKinds: [],
    skippedKinds: [],
    success: false,
    reason,
  };
}
