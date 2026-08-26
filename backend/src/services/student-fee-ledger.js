import { ObjectId } from 'bson';

export async function generateStudentFeeLedgers(database, admission, createdBy, options = {}) {
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
  const academic = await academicLedger(
    database,
    admission,
    context,
    book,
    createdBy,
    options.penalty,
  );
  if (academic === 'created') createdKinds.push('academic');
  else skippedKinds.push({ kind: 'academic', reason: academic });
  if (!options.academicOnly) {
    const hostel = await hostelLedger(database, admission, context, book, createdBy);
    if (hostel === 'created') createdKinds.push('hostel');
    else skippedKinds.push({ kind: 'hostel', reason: hostel });
  }
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

async function academicLedger(database, admission, context, book, createdBy, penalty) {
  const periodKey = academicPeriodKey(context);
  const existing = await existingLedger(database, admission._id, book._id, 'academic', periodKey);
  if (existing) {
    return `${academicPeriodLabel(context)} Academic Fee already created.`;
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
  const entries = await ledgerEntries(database, fees, book, 'academic', context);
  if (!entries.length) return 'No active mapped Academic Fee heads.';
  await insertLedger(database, {
    admission,
    context,
    book,
    kind: 'academic',
    name: 'Academic Fee',
    entries,
    createdBy,
    penalty,
    periodKey,
    periodLabel: academicPeriodLabel(context),
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
  if (
    await existingLedger(
      database,
      admission._id,
      book._id,
      'hostel',
      `session:${context.academicSession}`,
    )
  )
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
  const entries = await ledgerEntries(database, fees, book, 'hostel', context);
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
    periodKey: `session:${context.academicSession}`,
    periodLabel: 'Current session',
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
    currentSemester: Number(
      admission.currentSemester || Math.max(1, Number(admission.currentAcademicYear || 1) * 2 - 1),
    ),
    feeFrequency: admission.feeFrequency === 'semester' ? 'semester' : 'year',
  };
}

async function ledgerEntries(database, fees, book, kind, context) {
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
    .filter((fee) => {
      if (kind !== 'academic' || context.feeFrequency !== 'semester') return true;
      const head = headMap.get(String(fee.feeHeadId));
      return semesterFeeDecision(fee, head, context.currentSemester).included;
    })
    .map((fee) => {
      const head = headMap.get(String(fee.feeHeadId));
      const decision =
        kind === 'academic' && context.feeFrequency === 'semester'
          ? semesterFeeDecision(fee, head, context.currentSemester)
          : { included: true, amount: Number(fee.amount || 0), divided: false };
      const entryAmount = decision.amount;
      return {
        sourceFeeId: fee._id,
        feeHeadId: head._id,
        feeHeadName: head.name,
        category: head.category || fee.category || 'fee',
        priority: Number(head.priority || 9999),
        frequency: fee.frequency,
        academicYear: fee.academicYear || null,
        semester: fee.semester || null,
        periodLabel:
          kind === 'academic' && context.feeFrequency === 'semester'
            ? `Semester ${context.currentSemester}`
            : periodLabel(fee, kind),
        amount: entryAmount,
        paidAmount: 0,
        balanceAmount: entryAmount,
        dueDate: dueDate(book.startDate, fee),
        status: 'due',
        dividedSemesterWise: decision.divided,
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
    currentSemester: input.kind === 'academic' ? input.context.currentSemester : null,
    feeFrequency: input.kind === 'academic' ? input.context.feeFrequency : 'year',
    periodKey: input.periodKey,
    periodLabel: input.periodLabel,
    kind: input.kind,
    name: input.name,
    entries: input.entries,
    ...totals,
    paidAmount: 0,
    balanceAmount: totals.totalAmount,
    status: 'active',
    paymentStatus: 'due',
    penalty: normalizePenalty(input.penalty),
    penaltyAmount: 0,
    hostelAllocationId: input.hostelAllocationId || null,
    hostelName: input.hostelName || '',
    roomNumber: input.roomNumber || '',
    createdBy: input.createdBy,
    createdAt: now,
    updatedAt: now,
  });
}

async function existingLedger(database, studentAdmissionId, feeBookId, kind, periodKey) {
  return database
    .collection('studentFeeLedgers')
    .findOne({ studentAdmissionId, feeBookId, kind, periodKey, status: 'active' });
}

export async function progressionCandidates(database, mode) {
  const frequency = mode === 'semester' ? 'semester' : 'year';
  const admissions = await database
    .collection('admissions')
    .find({ status: 'approved', isActive: true, feeFrequency: frequency })
    .sort({ studentName: 1 })
    .toArray();
  const courseIds = [
    ...new Set(admissions.map((item) => String(item.courseId || '')).filter(Boolean)),
  ]
    .map(objectId)
    .filter(Boolean);
  const courses = courseIds.length
    ? await database
        .collection('masterValues')
        .find({ _id: { $in: courseIds } })
        .toArray()
    : [];
  const courseMap = new Map(courses.map((course) => [String(course._id), course]));
  return admissions
    .map((admission) => {
      const course = courseMap.get(String(admission.courseId));
      const durationYears = Number(course?.metadata?.durationYears || 1);
      const totalSemesters = Number(course?.metadata?.totalSemesters || durationYears * 2);
      if (mode === 'semester') {
        const currentSemester = Number(
          admission.currentSemester || admission.currentAcademicYear * 2 - 1,
        );
        if (currentSemester >= totalSemesters) return null;
        const nextSemester = currentSemester + 1;
        return {
          ...admission,
          nextAcademicYear: Math.ceil(nextSemester / 2),
          nextSemester,
          nextPeriodLabel: `Semester ${nextSemester}`,
        };
      }
      const currentAcademicYear = Number(admission.currentAcademicYear || 1);
      if (currentAcademicYear >= durationYears) return null;
      return {
        ...admission,
        nextAcademicYear: currentAcademicYear + 1,
        nextSemester: null,
        nextPeriodLabel: `Year ${currentAcademicYear + 1}`,
      };
    })
    .filter(Boolean);
}

export async function progressStudentFee(database, admission, mode, createdBy, penalty) {
  const course = admission.courseId
    ? await database
        .collection('masterValues')
        .findOne({ _id: admission.courseId, typeSlug: 'course' })
    : null;
  const durationYears = Number(course?.metadata?.durationYears || 1);
  const totalSemesters = Number(course?.metadata?.totalSemesters || durationYears * 2);
  const target = { ...admission };
  if (mode === 'semester') {
    if (admission.feeFrequency !== 'semester')
      return failure(admission, 'Student is not configured for semester-wise fees.');
    const nextSemester =
      Number(admission.currentSemester || admission.currentAcademicYear * 2 - 1) + 1;
    if (nextSemester > totalSemesters)
      return failure(admission, 'The course has no next semester.');
    target.currentSemester = nextSemester;
    target.currentAcademicYear = Math.ceil(nextSemester / 2);
  } else {
    if (admission.feeFrequency === 'semester')
      return failure(admission, 'Use Next Semester for this student.');
    const nextYear = Number(admission.currentAcademicYear || 1) + 1;
    if (nextYear > durationYears)
      return failure(admission, 'The course has no next academic year.');
    target.currentAcademicYear = nextYear;
    target.currentSemester = nextYear * 2 - 1;
  }
  const result = await generateStudentFeeLedgers(database, target, createdBy, {
    academicOnly: true,
    penalty,
  });
  if (result.createdKinds.includes('academic')) {
    await database.collection('admissions').updateOne(
      { _id: admission._id },
      {
        $set: {
          currentAcademicYear: target.currentAcademicYear,
          currentSemester: target.currentSemester,
          updatedAt: new Date(),
        },
      },
    );
  }
  return result;
}

function academicPeriodKey(context) {
  return context.feeFrequency === 'semester'
    ? `semester:${context.currentSemester}`
    : `year:${context.currentAcademicYear}`;
}

function academicPeriodLabel(context) {
  return context.feeFrequency === 'semester'
    ? `Semester ${context.currentSemester}`
    : `Year ${context.currentAcademicYear}`;
}

function normalizePenalty(penalty) {
  if (!penalty?.enabled) return { enabled: false };
  return {
    enabled: true,
    dueDate: penalty.dueDate,
    dailyAmount: Number(penalty.dailyAmount || 0),
    maxAmount: Number(penalty.maxAmount || 0),
  };
}

export function semesterFeeDecision(fee, head, currentSemester) {
  if (fee.semester) {
    return {
      included: Number(fee.semester) === Number(currentSemester),
      amount: Number(fee.amount || 0),
      divided: false,
    };
  }
  const divided = Boolean(head?.divideSemesterWise);
  return {
    included: divided || Number(currentSemester) % 2 === 1,
    amount: Number(fee.amount || 0) / (divided ? 2 : 1),
    divided,
  };
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
