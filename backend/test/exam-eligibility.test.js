import assert from 'node:assert/strict';
import test from 'node:test';
import { examEligibilityDecision } from '../src/routes/exams.routes.js';
import { PostgresDocumentDatabase } from '../src/postgres-document-db.js';

test('allows an exam only when registration, subject, fees and backlogs are clear', () => {
  assert.deepEqual(
    examEligibilityDecision({
      hasRegistration: true,
      hasSubject: true,
      outstandingBalance: 0,
      backlogCount: 0,
    }),
    { eligible: true, reasons: [] },
  );
});

test('reports every reason that makes a student ineligible for an exam', () => {
  assert.deepEqual(
    examEligibilityDecision({
      hasRegistration: true,
      hasSubject: false,
      outstandingBalance: 1250,
      backlogCount: 2,
    }),
    {
      eligible: false,
      reasons: [
        'The scheduled subject is not in the semester registration.',
        'Fee balance is outstanding.',
        'The student has an active backlog.',
      ],
    },
  );
});

test('registers the student backlog PostgreSQL collection', async () => {
  const database = new PostgresDocumentDatabase(
    'postgresql://taskly:test@localhost:5432/taskly_test',
  );
  assert.ok(database.collection('studentBacklogs'));
  await database.close();
});
