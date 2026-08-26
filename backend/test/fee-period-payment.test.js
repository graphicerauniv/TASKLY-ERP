import test from 'node:test';
import assert from 'node:assert/strict';
import { semesterFeeDecision } from '../src/services/student-fee-ledger.js';
import { calculatePenaltyAmount } from '../src/services/fee-payments.js';

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
