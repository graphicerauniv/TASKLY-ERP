import assert from 'node:assert/strict';
import test from 'node:test';
import { ObjectId } from 'bson';
import {
  feesForAcademicYear,
  selectMatchingCourseFees,
  totalsForEntries,
} from '../src/services/student-fee-ledger.js';

test('calculates Academic and Hostel Fee ledger totals from mapped fee heads', () => {
  assert.deepEqual(
    totalsForEntries([
      { category: 'fee', amount: 50_000 },
      { category: 'fee', amount: 5_000 },
      { category: 'discount', amount: 10_000 },
      { category: 'payment-option', amount: 1_000 },
    ]),
    { chargeAmount: 55_000, discountAmount: 10_000, totalAmount: 45_000 },
  );
});

test('keeps only the current academic year and one-time course fees', () => {
  const headId = new ObjectId();
  const rows = [
    { feeHeadId: headId, category: 'fee', academicYear: 1, amount: 100 },
    { feeHeadId: headId, category: 'fee', academicYear: 2, amount: 120 },
    { feeHeadId: new ObjectId(), category: 'fee', academicYear: null, amount: 25 },
  ];

  assert.deepEqual(feesForAcademicYear(rows, 2), [rows[1], rows[2]]);
});

test('prefers the most-specific compatible legacy course fee import', () => {
  const domicileId = new ObjectId();
  const studentTypeId = new ObjectId();
  const otherDomicileId = new ObjectId();
  const context = { domicileId, studentTypeId, countryId: null, courseName: 'B.tech Cse' };
  const legacyImportId = new ObjectId();
  const domicileImportId = new ObjectId();
  const rows = [
    { importPreviewId: legacyImportId, feeHeadName: 'Legacy generic' },
    {
      importPreviewId: domicileImportId,
      domicileId,
      sourceSheet: 'btech-cse',
      feeHeadName: 'Matching domicile',
    },
    { importPreviewId: new ObjectId(), domicileId: otherDomicileId, feeHeadName: 'Wrong domicile' },
  ];

  assert.deepEqual(selectMatchingCourseFees(rows, context), [rows[1]]);
});

test('chooses the imported sheet that matches the mapped course name', () => {
  const importPreviewId = new ObjectId();
  const context = {
    domicileId: new ObjectId(),
    studentTypeId: new ObjectId(),
    countryId: null,
    courseName: 'B.tech Cse',
  };
  const intended = {
    importPreviewId,
    sourceSheet: 'btech-cse',
    domicileId: context.domicileId,
  };
  const incorrectlyMapped = {
    importPreviewId,
    sourceSheet: 'mech-cse',
    domicileId: context.domicileId,
  };

  assert.deepEqual(selectMatchingCourseFees([incorrectlyMapped, intended], context), [intended]);
});

test('keeps strict matching when a course fee dimension is explicitly saved', () => {
  const context = {
    domicileId: new ObjectId(),
    studentTypeId: new ObjectId(),
    countryId: null,
    courseName: 'B.tech Cse',
  };
  const matching = {
    domicileId: context.domicileId,
    studentTypeId: context.studentTypeId,
    countryId: null,
  };
  const wrongType = { ...matching, studentTypeId: new ObjectId() };

  assert.deepEqual(selectMatchingCourseFees([matching, wrongType], context), [matching]);
});
