import assert from 'node:assert/strict';
import test from 'node:test';
import { applyScholarshipsToEntries } from '../src/services/student-scholarships.js';

const tuition = (amount) => ({
  feeHeadId: 'tuition',
  feeHeadName: 'Tuition Fee',
  category: 'fee',
  priority: 2,
  amount,
  paidAmount: 0,
  balanceAmount: amount,
  dueDate: '2026-08-01',
  periodLabel: 'Year 1',
  status: 'due',
});

const assignment = (name, type, value) => ({
  _id: `assignment-${name}`,
  scholarshipId: `scholarship-${name}`,
  scholarshipName: name,
  type,
  value,
  startAcademicYear: 1,
  startSemester: 1,
  status: 'active',
});

test('applies multiple scholarships only against Tuition Fee and caps their total', () => {
  const entries = applyScholarshipsToEntries(
    [tuition(100_000), { ...tuition(15_000), feeHeadName: 'Admission Fee' }],
    [assignment('Merit', 'percentage', 25), assignment('Sports', 'fixed', 90_000)],
    { feeFrequency: 'year', currentAcademicYear: 1, currentSemester: 1 },
  );
  const discounts = entries.filter((entry) => entry.isScholarship);
  assert.deepEqual(
    discounts.map((entry) => entry.amount),
    [25_000, 75_000],
  );
  assert.equal(discounts.reduce((sum, entry) => sum + entry.amount, 0), 100_000);
  assert.equal(entries.find((entry) => entry.feeHeadName === 'Tuition Fee').balanceAmount, 0);
  assert.equal(entries.find((entry) => entry.feeHeadName === 'Admission Fee').balanceAmount, 15_000);
});

test('divides fixed annual scholarships between semester fee periods', () => {
  const entries = applyScholarshipsToEntries(
    [tuition(50_000)],
    [assignment('Annual award', 'fixed', 20_000)],
    { feeFrequency: 'semester', currentAcademicYear: 1, currentSemester: 1 },
  );
  assert.equal(entries.find((entry) => entry.isScholarship)?.amount, 10_000);
});

test('does not apply a scholarship before its assigned semester', () => {
  const nextSemester = { ...assignment('Late award', 'percentage', 10), startSemester: 2 };
  const entries = applyScholarshipsToEntries([tuition(50_000)], [nextSemester], {
    feeFrequency: 'semester',
    currentAcademicYear: 1,
    currentSemester: 1,
  });
  assert.equal(entries.some((entry) => entry.isScholarship), false);
});

test('applies a one-time fixed discount in full only to its selected semester ledger', () => {
  const discount = {
    _id: 'discount-1',
    name: 'Special approval',
    type: 'fixed',
    value: 20_000,
    targetLedgerId: 'ledger-semester-2',
    targetPeriodKey: 'semester:2',
    adjustmentKind: 'discount',
    recurring: false,
    internalRemark: 'Private management approval reference',
    status: 'active',
  };
  const entries = applyScholarshipsToEntries([tuition(50_000)], [discount], {
    ledgerId: 'ledger-semester-2',
    periodKey: 'semester:2',
    feeFrequency: 'semester',
    currentAcademicYear: 1,
    currentSemester: 2,
  });
  const applied = entries.find((entry) => entry.isOneTimeDiscount);
  assert.equal(applied.amount, 20_000);
  assert.equal(applied.feeHeadName, 'Special approval');
  assert.equal(applied.frequency, 'one-time');
  assert.equal(Object.hasOwn(applied, 'internalRemark'), false);

  const otherPeriod = applyScholarshipsToEntries([tuition(50_000)], [discount], {
    ledgerId: 'ledger-semester-3',
    periodKey: 'semester:3',
    feeFrequency: 'semester',
    currentAcademicYear: 2,
    currentSemester: 3,
  });
  assert.equal(otherPeriod.some((entry) => entry.isOneTimeDiscount), false);
});

test('applies a one-time scholarship in full only to the selected ledger', () => {
  const oneTime = {
    ...assignment('One-time merit', 'fixed', 20_000),
    recurring: false,
    targetLedgerId: 'ledger-semester-2',
    targetPeriodKey: 'semester:2',
  };
  const selected = applyScholarshipsToEntries([tuition(50_000)], [oneTime], {
    ledgerId: 'ledger-semester-2',
    periodKey: 'semester:2',
    feeFrequency: 'semester',
    currentAcademicYear: 1,
    currentSemester: 2,
  });
  const applied = selected.find((entry) => entry.isOneTimeScholarship);
  assert.equal(applied.amount, 20_000);
  assert.equal(applied.isScholarship, true);
  assert.equal(applied.frequency, 'one-time');

  const next = applyScholarshipsToEntries([tuition(50_000)], [oneTime], {
    ledgerId: 'ledger-semester-3',
    periodKey: 'semester:3',
    feeFrequency: 'semester',
    currentAcademicYear: 2,
    currentSemester: 3,
  });
  assert.equal(next.some((entry) => entry.isScholarship), false);
});
