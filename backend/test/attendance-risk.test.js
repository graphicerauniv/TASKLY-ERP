import test from 'node:test';
import assert from 'node:assert/strict';
import { attendanceRisk } from '../src/routes/attendance.routes.js';

function subject(presentLectures, totalLectures) {
  return {
    subjectId: 'subject-1',
    subjectName: 'Data Structures',
    subjectCode: 'CS501',
    facultyNames: [],
    totalLectures,
    presentLectures,
    absentLectures: totalLectures - presentLectures,
    attendancePercentage: totalLectures
      ? Number(((presentLectures / totalLectures) * 100).toFixed(2))
      : 0,
  };
}

test('calculates the minimum consecutive classes needed to reach 75 percent', () => {
  const risk = attendanceRisk(subject(29, 40), 8);
  assert.equal(risk.status, 'critical');
  assert.equal(risk.classesToTarget, 4);
  assert.equal(risk.canReachTarget, true);
});

test('reports when the published schedule is too short to reach the target', () => {
  const risk = attendanceRisk(subject(29, 40), 3);
  assert.equal(risk.classesToTarget, 4);
  assert.equal(risk.canReachTarget, false);
  assert.equal(risk.bestPossibleAttendance, 74.42);
});

test('derives risk and watch status from the safe absence buffer', () => {
  assert.equal(attendanceRisk(subject(30, 40), 8).status, 'at-risk');
  const watch = attendanceRisk(subject(32, 40), 8);
  assert.equal(watch.status, 'watch');
  assert.equal(watch.absenceBuffer, 2);
  assert.equal(attendanceRisk(subject(34, 40), 8).status, 'on-track');
});

test('keeps subjects without saved lectures in a pending state', () => {
  const risk = attendanceRisk(subject(0, 0), 8);
  assert.equal(risk.status, 'pending');
  assert.equal(risk.classesToTarget, null);
});
