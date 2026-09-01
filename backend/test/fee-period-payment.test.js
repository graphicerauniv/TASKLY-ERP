import test from 'node:test';
import assert from 'node:assert/strict';
import { semesterFeeDecision } from '../src/services/student-fee-ledger.js';
import {
  allocatePaymentAcrossLedgers,
  calculatePenaltyAmount,
  createOfflinePayment,
  paymentReceiptHtml,
} from '../src/services/fee-payments.js';
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

test('allocates offline amounts to the oldest period, penalty, then numeric head priority', () => {
  const ledgers = [
    paymentLedger('semester-2', 2, [feeEntry('Semester 2 Tuition', 2, 10_000)]),
    paymentLedger('semester-1', 1, [
      feeEntry('Tuition Fee', 2, 5_000),
      feeEntry('Admission Fee', 1, 1_000),
      { ...feeEntry('Late Payment Penalty', 0, 500), isPenalty: true },
    ]),
  ];
  const allocations = allocatePaymentAcrossLedgers(ledgers, 1_700);
  assert.deepEqual(
    allocations.map((item) => [item.periodLabel, item.feeHeadName, item.amount]),
    [
      ['Semester 1', 'Late Payment Penalty', 500],
      ['Semester 1', 'Admission Fee', 1_000],
      ['Semester 1', 'Tuition Fee', 200],
    ],
  );
  assert.equal(ledgers[0].entries[0].paidAmount, 0);
});

test('offline receipt identifies the channel, reference and receiving administrator', () => {
  const html = paymentReceiptHtml({
    receiptNumber: 'RCPT-1',
    studentName: 'Vivek',
    studentId: '26CSE1234',
    targetPeriodLabel: 'Combined academic fees',
    paymentChannel: 'offline',
    paymentReference: 'CASH-42',
    method: 'cash',
    acceptedByName: 'Accounts Admin',
    paidAt: new Date('2026-09-01T10:00:00Z'),
    amount: 1_000,
    allocations: [],
  });
  assert.match(html, /Offline/);
  assert.match(html, /CASH-42/);
  assert.match(html, /Accounts Admin/);
});

test('repeated offline submission returns the existing paid transaction without readjusting fees', async () => {
  const existing = { _id: 'payment-1', status: 'paid', receiptNumber: 'RCPT-1' };
  const database = {
    collection(name) {
      assert.equal(name, 'feePayments');
      return { async findOne() { return existing; } };
    },
  };
  const result = await createOfflinePayment(
    database,
    { _id: 'student-1' },
    { idempotencyKey: 'same-request' },
    { _id: 'admin-1' },
  );
  assert.equal(result.duplicate, true);
  assert.equal(result.payment, existing);
});

function paymentLedger(id, semester, entries) {
  return {
    _id: id,
    kind: 'academic',
    feeFrequency: 'semester',
    currentSemester: semester,
    currentAcademicYear: Math.ceil(semester / 2),
    periodKey: `semester:${semester}`,
    periodLabel: `Semester ${semester}`,
    balanceAmount: entries.reduce((sum, entry) => sum + entry.balanceAmount, 0),
    entries,
  };
}

function feeEntry(name, priority, amount) {
  return {
    feeHeadId: name.toLowerCase().replaceAll(' ', '-'),
    feeHeadName: name,
    category: 'fee',
    priority,
    amount,
    paidAmount: 0,
    discountAmount: 0,
    balanceAmount: amount,
    dueDate: '2026-08-01',
    status: 'due',
  };
}

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
