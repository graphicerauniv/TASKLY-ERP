import test from 'node:test';
import assert from 'node:assert/strict';
import { semesterFeeDecision } from '../src/services/student-fee-ledger.js';
import { calculatePenaltyAmount } from '../src/services/fee-payments.js';
import { promoteStudentProgression } from '../src/services/student-promotion.js';

test('splits only configured annual fee heads for semester-wise students', () => {
  assert.deepEqual(
    semesterFeeDecision({ amount: 100_000, semester: null }, { divideSemesterWise: true }, 2),
    { included: true, amount: 50_000, divided: true },
  );
  assert.deepEqual(
    semesterFeeDecision({ amount: 10_000, semester: null }, { divideSemesterWise: false }, 2),
    { included: false, amount: 10_000, divided: false },
  );
  assert.equal(
    semesterFeeDecision({ amount: 40_000, semester: 2 }, { divideSemesterWise: false }, 2).included,
    true,
  );
});

test('caps daily penalties and stops them when the balance is paid', () => {
  const settings = {
    enabled: true,
    dueDate: '2026-08-01',
    dailyAmount: 100,
    maxAmount: 2_000,
  };
  assert.equal(calculatePenaltyAmount(settings, 50_000, new Date('2026-08-06T12:00:00Z')), 500);
  assert.equal(calculatePenaltyAmount(settings, 50_000, new Date('2026-09-01T12:00:00Z')), 2_000);
  assert.equal(calculatePenaltyAmount(settings, 0, new Date('2026-09-01T12:00:00Z')), 0);
});

test('changes the academic semester only when a pending promotion is explicitly promoted', async () => {
  const admission = {
    _id: 'student-1',
    status: 'approved',
    isActive: true,
    currentAcademicYear: 1,
    currentSemester: 1,
  };
  const progression = {
    _id: 'progression-1',
    studentAdmissionId: admission._id,
    mode: 'semester',
    fromAcademicYear: 1,
    fromSemester: 1,
    toAcademicYear: 1,
    toSemester: 2,
    status: 'pending',
  };
  const database = promotionDatabase(admission, progression);
  assert.equal(admission.currentSemester, 1);
  const promoted = await promoteStudentProgression(database, progression._id, 'admin-1');
  assert.equal(admission.currentSemester, 2);
  assert.equal(admission.currentAcademicYear, 1);
  assert.equal(promoted.status, 'promoted');
});

function promotionDatabase(admission, progression) {
  return {
    collection(name) {
      if (name === 'admissions')
        return {
          async findOne(filter) {
            return filter._id === admission._id && admission.status === filter.status
              ? admission
              : null;
          },
          async updateOne(filter, update) {
            if (filter._id === admission._id) Object.assign(admission, update.$set);
          },
        };
      if (name === 'studentProgressions')
        return {
          async findOneAndUpdate(filter, update) {
            if (filter._id !== progression._id || progression.status !== filter.status) return null;
            Object.assign(progression, update.$set);
            return progression;
          },
          async updateOne(filter, update) {
            if (filter._id === progression._id && progression.status === filter.status)
              Object.assign(progression, update.$set);
          },
        };
      throw new Error(`Unexpected collection ${name}`);
    },
  };
}
