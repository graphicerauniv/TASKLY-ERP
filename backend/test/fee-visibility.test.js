import assert from 'node:assert/strict';
import test from 'node:test';
import {
  isStudentVisibleLedger,
  targetForSchedule,
} from '../src/services/fee-visibility.js';

test('publishes the next semester without academically promoting the student', () => {
  const admission = {
    feeFrequency: 'semester',
    currentAcademicYear: 1,
    currentSemester: 1,
  };
  assert.deepEqual(targetForSchedule({ mode: 'semester', targetNumber: 2 }, admission), {
    progressionMode: 'semester',
    periodKey: 'semester:2',
    periodLabel: 'Semester 2',
    previousPeriodKey: 'semester:1',
  });
  assert.equal(admission.currentSemester, 1);
});

test('year transition publishes year two for annual students and semester three for semester students', () => {
  assert.deepEqual(
    targetForSchedule(
      { mode: 'year', targetNumber: 2 },
      { feeFrequency: 'year', currentAcademicYear: 1, currentSemester: 1 },
    ),
    {
      progressionMode: 'year',
      periodKey: 'year:2',
      periodLabel: 'Year 2',
      previousPeriodKey: 'year:1',
    },
  );
  assert.deepEqual(
    targetForSchedule(
      { mode: 'year', targetNumber: 2 },
      { feeFrequency: 'semester', currentAcademicYear: 1, currentSemester: 2 },
    ),
    {
      progressionMode: 'semester',
      periodKey: 'semester:3',
      periodLabel: 'Semester 3',
      previousPeriodKey: 'semester:2',
    },
  );
});

test('student portal excludes hidden prepared ledgers', () => {
  assert.equal(isStudentVisibleLedger({ visibilityStatus: 'hidden' }), false);
  assert.equal(isStudentVisibleLedger({ visibilityStatus: 'published' }), true);
  assert.equal(isStudentVisibleLedger({}), true);
});
