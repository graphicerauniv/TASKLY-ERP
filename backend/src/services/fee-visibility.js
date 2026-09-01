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
  }
  return results;
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

  const wasPublished = ledger.visibilityStatus !== 'hidden';
  if (!wasPublished) {
    const publishedAt = new Date();
    await database.collection('studentFeeLedgers').updateOne(
      { _id: ledger._id },
      {
        $set: {
          visibilityStatus: 'published',
          visibleFrom: schedule.publishAt,
          publishedAt,
          feeScheduleId: schedule._id,
          updatedAt: publishedAt,
        },
      },
    );
  }
  const previous = await database.collection('studentFeeLedgers').findOne({
    studentAdmissionId: admission._id,
    kind: 'academic',
    periodKey: target.previousPeriodKey,
    status: 'active',
  });
  if (previous && schedule.previousPeriodDeadline) {
    const enabled =
      Number(schedule.dailyFineAmount || 0) > 0 && Number(schedule.maxFineAmount || 0) > 0;
    const penalty = enabled
      ? {
          enabled: true,
          dueDate: String(schedule.previousPeriodDeadline).slice(0, 10),
          dailyAmount: Number(schedule.dailyFineAmount),
          maxAmount: Number(schedule.maxFineAmount),
        }
      : { enabled: false };
    await database.collection('studentFeeLedgers').updateOne(
      { _id: previous._id },
      {
        $set: {
          penalty,
          fineScheduleId: schedule._id,
          previousPeriodDeadline: schedule.previousPeriodDeadline,
          updatedAt: new Date(),
        },
      },
    );
    await refreshLedgerPenalty(database, { ...previous, penalty });
  }
  await applyAvailableStudentCredit(database, admission._id, 'academic');
  return {
    studentAdmissionId: admission._id,
    studentId: admission.studentId,
    studentName: admission.studentName,
    ledgerId: ledger._id,
    periodLabel: target.periodLabel,
    published: true,
    alreadyPublished: wasPublished,
  };
}

export function targetForSchedule(schedule, admission) {
  const currentYear = Number(admission.currentAcademicYear || 1);
  const currentSemester = Number(admission.currentSemester || currentYear * 2 - 1);
  const targetNumber = Number(schedule.targetNumber);
  if (schedule.mode === 'semester') {
    if (admission.feeFrequency !== 'semester') return null;
    const nextSemester = currentSemester + 1;
    if (nextSemester !== targetNumber) return null;
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
    if (nextSemester % 2 !== 1 || nextYear !== targetNumber) return null;
    return {
      progressionMode: 'semester',
      periodKey: `semester:${nextSemester}`,
      periodLabel: `Semester ${nextSemester}`,
      previousPeriodKey: `semester:${currentSemester}`,
    };
  }
  const nextYear = currentYear + 1;
  if (nextYear !== targetNumber) return null;
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
