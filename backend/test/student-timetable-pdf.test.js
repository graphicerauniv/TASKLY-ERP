import assert from 'node:assert/strict';
import test from 'node:test';
import { timetablePdf } from '../src/routes/academics.routes.js';
import { PostgresDocumentDatabase } from '../src/postgres-document-db.js';

test('registers the student timetable reminders PostgreSQL collection', async () => {
  const database = new PostgresDocumentDatabase(
    'postgresql://taskly:test@localhost:5432/taskly_test',
  );
  assert.ok(database.collection('studentTimetableReminders'));
  assert.ok(database.collection('studentTimetablePreferences'));
  await database.close();
});

test('creates a landscape student timetable PDF from published schedule data', async () => {
  const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const periods = [
    { _id: 'p1', startTime: '09:00', endTime: '09:50', periodType: 'lecture' },
    { _id: 'p2', startTime: '09:55', endTime: '10:45', periodType: 'lecture' },
    { _id: 'p3', startTime: '10:45', endTime: '11:15', periodType: 'break' },
    { _id: 'p4', startTime: '11:15', endTime: '12:05', periodType: 'lecture' },
    { _id: 'p5', startTime: '12:10', endTime: '13:00', periodType: 'lecture' },
  ];
  const items = days.slice(0, 4).map((day, index) => ({
    day,
    timetablePeriodId: periods[index]._id,
    subjectName: [
      'Mathematics',
      'Database Management Systems',
      'Computer Networks',
      'Operating Systems',
    ][index],
    subjectCode: `TCS10${index + 1}`,
    facultyName: `Faculty ${index + 1}`,
    roomName: index === 3 ? 'Lab 3' : 'Room 10',
  }));
  const result = await timetablePdf(
    {
      studentName: 'Anubhav Dhyani',
      studentId: '262347661',
      academicSession: '2026-27',
      currentSemester: 1,
    },
    { structure: { workingDays: days }, periods, items },
    '2026-09-07',
  );

  assert.equal(result.subarray(0, 4).toString(), '%PDF');
  assert.ok(result.length > 2000);
});
