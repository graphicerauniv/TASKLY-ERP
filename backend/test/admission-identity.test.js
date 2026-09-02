import assert from 'node:assert/strict';
import test from 'node:test';
import { ObjectId } from 'bson';
import {
  admissionContext,
  feeFrequencyForMasterValue,
  normalizeCourseCode,
  sessionYearCode,
} from '../src/services/admission-identity.js';

test('builds Student ID components from the session year and course code', () => {
  assert.equal(sessionYearCode('2026'), '26');
  assert.equal(sessionYearCode('2027-28'), '27');
  assert.equal(normalizeCourseCode(' b.ca '), 'BCA');
});

test('maps Fee Type master values to the admission billing mode', () => {
  assert.equal(
    feeFrequencyForMasterValue({ name: 'Custom', metadata: { periodType: 'year' } }),
    'year',
  );
  assert.equal(feeFrequencyForMasterValue({ name: 'Semester-wise' }), 'semester');
  assert.equal(feeFrequencyForMasterValue({ name: 'Yearly Fee' }), 'year');
  assert.equal(feeFrequencyForMasterValue({ name: 'Monthly' }), null);
});

test('finds schema-driven admission identity fields and student name', () => {
  const sessionId = new ObjectId();
  const courseId = new ObjectId();
  const feeTypeId = new ObjectId();
  const form = {
    sections: [
      {
        subsections: [
          {
            fields: [
              { id: 'name', name: 'Student Name' },
              {
                id: 'session',
                name: 'Academic Session',
                dataSource: { masterTypeSlug: 'academic' },
              },
              {
                id: 'course',
                name: 'Course',
                dataSource: { masterTypeSlug: 'course' },
              },
              {
                id: 'feeType',
                name: 'Fee Type',
                dataSource: { masterTypeSlug: 'fee-type' },
              },
              { id: 'year', name: 'Current Academic Year', type: 'dropdown' },
            ],
          },
        ],
      },
    ],
  };
  const context = admissionContext(form, {
    name: 'Aarav Sharma',
    session: [sessionId.toString()],
    course: [courseId.toString()],
    feeType: feeTypeId.toString(),
    year: '2',
  });
  assert.equal(context.studentName, 'Aarav Sharma');
  assert.ok(context.sessionValueId.equals(sessionId));
  assert.ok(context.courseValueId.equals(courseId));
  assert.ok(context.feeTypeValueId.equals(feeTypeId));
  assert.equal(context.currentAcademicYear, 2);
});
