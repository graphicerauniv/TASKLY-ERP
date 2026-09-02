import { applyAvailableStudentCredit, refreshLedgerPenalty } from './fee-payments.js';
import { progressStudentFee } from './student-fee-ledger.js';

export async function ensureStudentScheduledFees(database, admission, now = new Date()) {
  if (!admission?.collegeId || !admission?.academicSession) return [];
  const filter = {
    collegeId: admission.collegeId,
    academicSession: admission.academicSession,
    isActive: true,
    publishAt: { $lte: now },
  };
  const schedules = await database.collection('feeSchedules').find(filter).toArray();
  const results = [];
  for (const schedule of schedules) {
    const result = await publishScheduleForStudent(
      database,
      schedule,
      admission,
      schedule.createdBy,
    );
    if (result.published) results.push(result);
    if (now >= new Date(schedule.publishAt)) await completeScheduleIfPublished(database, schedule);
  }
  return results;
}

async function completeScheduleIfPublished(database, schedule) {
  const students = await database
    .collection('admissions')
    .find({
      collegeId: schedule.collegeId,
      academicSession: schedule.academicSession,
      status: 'approved',
      isActive: true,
    })
    .toArray();
  const eligible = students
    .map((student) => ({ student, target: targetForSchedule(schedule, student) }))
    .filter((item) => item.target);
  if (!eligible.length) return;
  const pending = [];
  for (const { student, target } of eligible) {
    const ledger = await database.collection('studentFeeLedgers').findOne({
      studentAdmissionId: student._id,
      kind: 'academic',
      periodKey: target.periodKey,
      status: 'active',
      visibilityStatus: 'hidden',
    });
    if (ledger) pending.push(ledger);
  }
  if (!pending.length)
    await database
      .collection('feeSchedules')
      .updateOne(
        { _id: schedule._id, isActive: true },
        { $set: { isActive: false, completedAt: new Date(), updatedAt: new Date() } },
      );
}

export async function publishFeeSchedule(database, schedule, actorId) {
  const filter = {
    collegeId: schedule.collegeId,
    academicSession: schedule.academicSession,
    status: 'approved',
    isActive: true,
  };
  const students = await database.collection('admissions').find(filter).toArray();
  const results = [];
  for (const student of students)
    results.push(await publishScheduleForStudent(database, schedule, student, actorId));
  return results;
}

export async function publishScheduleForStudent(database, schedule, admission, actorId) {
  const target = targetForSchedule(schedule, admission);
  if (!target)
    return { studentAdmissionId: admission._id, published: false, reason: 'Not eligible.' };
  let ledger = await database.collection('studentFeeLedgers').findOne({
    studentAdmissionId: admission._id,
    kind: 'academic',
    periodKey: target.periodKey,
    status: 'active',
  });
  if (!ledger) {
    await progressStudentFee(database, admission, target.progressionMode, actorId, {
      enabled: false,
    });
    ledger = await database.collection('studentFeeLedgers').findOne({
      studentAdmissionId: admission._id,
      kind: 'academic',
      periodKey: target.periodKey,
      status: 'active',
    });
  }
  if (!ledger)
    return {
      studentAdmissionId: admission._id,
      published: false,
      reason: `Could not create ${target.periodLabel}.`,
    };

  const visibleFrom = new Date(schedule.publishAt);
  const shouldPublish = visibleFrom <= new Date();
  const wasPublished = ledger.visibilityStatus !== 'hidden';
  if (!wasPublished && shouldPublish) {
    const publishedAt = new Date();
    await database.collection('studentFeeLedgers').updateOne(
      { _id: ledger._id },
      {
        $set: {
          visibilityStatus: 'published',
          visibleFrom,
          publishedAt,
          feeScheduleId: schedule._id,
          updatedAt: publishedAt,
        },
      },
    );
  }
  const nextPeriodDeadline = schedule.nextPeriodDeadline || schedule.previousPeriodDeadline;
  if (nextPeriodDeadline) {
    const enabled =
      Number(schedule.dailyFineAmount || 0) > 0 && Number(schedule.maxFineAmount || 0) > 0;
    const penalty = enabled
      ? {
          enabled: true,
          dueDate: String(nextPeriodDeadline).slice(0, 10),
          dailyAmount: Number(schedule.dailyFineAmount),
          maxAmount: Number(schedule.maxFineAmount),
        }
      : { enabled: false };
    await database.collection('studentFeeLedgers').updateOne(
      { _id: ledger._id },
      {
        $set: {
          penalty,
          fineScheduleId: schedule._id,
          nextPeriodDeadline,
          updatedAt: new Date(),
        },
      },
    );
    await refreshLedgerPenalty(database, { ...ledger, penalty });
  }
  await applyAvailableStudentCredit(database, admission._id, 'academic');
  return {
    studentAdmissionId: admission._id,
    studentId: admission.studentId,
    studentName: admission.studentName,
    ledgerId: ledger._id,
    periodLabel: target.periodLabel,
    published: shouldPublish,
    scheduled: !shouldPublish,
    alreadyPublished: wasPublished,
  };
}

export function targetForSchedule(schedule, admission) {
  const currentYear = Number(admission.currentAcademicYear || 1);
  const currentSemester = Number(admission.currentSemester || currentYear * 2 - 1);
  if (schedule.mode === 'semester') {
    if (admission.feeFrequency !== 'semester') return null;
    const nextSemester = currentSemester + 1;
    return {
      progressionMode: 'semester',
      periodKey: `semester:${nextSemester}`,
      periodLabel: `Semester ${nextSemester}`,
      previousPeriodKey: `semester:${currentSemester}`,
    };
  }
  if (admission.feeFrequency === 'semester') {
    const nextSemester = currentSemester + 1;
    const nextYear = Math.ceil(nextSemester / 2);
    if (nextSemester % 2 !== 1) return null;
    return {
      progressionMode: 'semester',
      periodKey: `semester:${nextSemester}`,
      periodLabel: `Semester ${nextSemester}`,
      previousPeriodKey: `semester:${currentSemester}`,
    };
  }
  const nextYear = currentYear + 1;
  return {
    progressionMode: 'year',
    periodKey: `year:${nextYear}`,
    periodLabel: `Year ${nextYear}`,
    previousPeriodKey: `year:${currentYear}`,
  };
}

export function isStudentVisibleLedger(ledger) {
  return ledger.visibilityStatus !== 'hidden';
}
