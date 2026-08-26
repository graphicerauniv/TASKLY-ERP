import assert from 'node:assert/strict';
import test from 'node:test';
import { ObjectId } from 'bson';
import {
  admissionContext,
  normalizeCourseCode,
  sessionYearCode,
} from '../src/services/admission-identity.js';

test('builds Student ID components from the session year and course code', () => {
  assert.equal(sessionYearCode('2026'), '26');
  assert.equal(sessionYearCode('2027-28'), '27');
  assert.equal(normalizeCourseCode(' b.ca '), 'BCA');
});

test('finds schema-driven admission identity fields and student name', () => {
  const sessionId = new ObjectId();
  const courseId = new ObjectId();
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
  });
  assert.equal(context.studentName, 'Aarav Sharma');
  assert.ok(context.sessionValueId.equals(sessionId));
  assert.ok(context.courseValueId.equals(courseId));
});
