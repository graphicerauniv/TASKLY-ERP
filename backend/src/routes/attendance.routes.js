import express from 'express';
import { z } from 'zod';
import { db, id, serialize } from '../db.js';
import { asyncHandler } from '../lib/async-handler.js';

export const facultyAttendanceRouter = express.Router();
export const studentAttendanceRouter = express.Router();

const attendanceDate = z.string().regex(/^\d{4}-\d{2}-\d{2}$/);
const attendanceRowsSchema = z.object({
  date: attendanceDate,
  rows: z
    .array(
      z.object({
        studentAdmissionId: z.string().trim().min(1),
        status: z.enum(['present', 'absent']),
      }),
    )
    .min(1),
});

function audiences(entry) {
  if (entry.audiences?.length) return entry.audiences;
  return [
    {
      groupId: String(entry.groupId),
      sectionIds: [String(entry.sectionId)],
      setIds: (entry.setIds || []).map(String),
    },
  ];
}

async function academicFaculty(facultyApplication) {
  const employeeId = String(
    facultyApplication.employeeId || facultyApplication.applicationCode || '',
  ).toUpperCase();
  const faculty = await db().collection('faculties').findOne({ code: employeeId, isActive: true });
  return faculty;
}

async function rosterFor(entry) {
  const allocations = await db()
    .collection('studentAcademicAssignments')
    .find({
      academicSession: entry.academicSession,
      semester: entry.semester,
      status: 'active',
    })
    .toArray();
  const studentIds = new Set();
  for (const allocation of allocations) {
    const included = audiences(entry).some(
      (audience) =>
        String(audience.groupId) === String(allocation.groupId) &&
        audience.sectionIds.map(String).includes(String(allocation.sectionId)) &&
        (!audience.setIds.length || audience.setIds.map(String).includes(String(allocation.setId))),
    );
    if (included) studentIds.add(String(allocation.studentAdmissionId));
  }
  const students = await Promise.all(
    [...studentIds].map((studentId) =>
      db()
        .collection('admissions')
        .findOne({ _id: id(studentId), status: 'approved', isActive: true }),
    ),
  );
  return students
    .filter(Boolean)
    .sort((left, right) => String(left.studentName).localeCompare(String(right.studentName)));
}

async function facultyEntry(request, response, entryId) {
  const faculty = await academicFaculty(request.faculty);
  if (!faculty) {
    response.status(409).json({
      message: `No Academic Faculty record uses Employee ID ${request.faculty.employeeId || request.faculty.applicationCode}.`,
    });
    return null;
  }
  const entry = await db()
    .collection('timetableEntries')
    .findOne({
      _id: id(entryId, 'timetableEntryId'),
      facultyId: faculty._id,
      isActive: true,
    });
  if (!entry || !entry.subjectId) {
    response.status(404).json({ message: 'Assigned timetable class was not found.' });
    return null;
  }
  return { faculty, entry };
}

function matchesEntryDay(entry, date) {
  const day = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'][
    new Date(`${date}T00:00:00Z`).getUTCDay()
  ];
  return entry.day === day;
}

async function studentVisibleEntries(student) {
  const assignment = await db()
    .collection('studentAcademicAssignments')
    .findOne({
      studentAdmissionId: student._id,
      academicSession: student.academicSession,
      semester: Number(student.currentSemester || 1),
      status: 'active',
    });
  if (!assignment) return [];
  const entries = await db()
    .collection('timetableEntries')
    .find({
      academicSession: assignment.academicSession,
      semester: assignment.semester,
      isActive: true,
    })
    .toArray();
  return entries.filter(
    (entry) =>
      entry.subjectId &&
      entry.facultyId &&
      audiences(entry).some(
        (audience) =>
          String(audience.groupId) === String(assignment.groupId) &&
          audience.sectionIds.map(String).includes(String(assignment.sectionId)) &&
          (!audience.setIds.length ||
            audience.setIds.map(String).includes(String(assignment.setId))),
      ),
  );
}

facultyAttendanceRouter.get(
  '/classes',
  asyncHandler(async (request, response) => {
    const date = attendanceDate.parse(
      String(request.query.date || new Date().toISOString().slice(0, 10)),
    );
    const faculty = await academicFaculty(request.faculty);
    if (!faculty) return response.json({ facultyMapped: false, date, items: [] });
    const day = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'][
      new Date(`${date}T00:00:00Z`).getUTCDay()
    ];
    const entries = await db()
      .collection('timetableEntries')
      .find({ facultyId: faculty._id, day, isActive: true })
      .sort({ startTime: 1 })
      .toArray();
    const items = await Promise.all(
      entries
        .filter((entry) => entry.subjectId && entry.facultyId)
        .map(async (entry) => {
          const [roster, session] = await Promise.all([
            rosterFor(entry),
            db().collection('attendanceSessions').findOne({ timetableEntryId: entry._id, date }),
          ]);
          return serialize({
            ...entry,
            rosterCount: roster.length,
            attendanceStatus: session ? 'saved' : 'not_marked',
            attendanceSessionId: session?._id || null,
          });
        }),
    );
    response.json({ facultyMapped: true, date, items });
  }),
);

facultyAttendanceRouter.get(
  '/classes/:entryId',
  asyncHandler(async (request, response) => {
    const date = attendanceDate.parse(String(request.query.date || ''));
    const result = await facultyEntry(request, response, request.params.entryId);
    if (!result) return;
    if (!matchesEntryDay(result.entry, date))
      return response.status(400).json({ message: 'This class is not scheduled on that date.' });
    const [roster, records] = await Promise.all([
      rosterFor(result.entry),
      db()
        .collection('attendanceRecords')
        .find({ timetableEntryId: result.entry._id, date })
        .toArray(),
    ]);
    const statusByStudent = new Map(
      records.map((record) => [String(record.studentAdmissionId), record.status]),
    );
    response.json({
      item: serialize(result.entry),
      students: roster.map((student) => ({
        admissionId: String(student._id),
        studentId: student.studentId || '',
        studentName: student.studentName || 'Student',
        status: statusByStudent.get(String(student._id)) || 'present',
      })),
    });
  }),
);

facultyAttendanceRouter.put(
  '/classes/:entryId',
  asyncHandler(async (request, response) => {
    const data = attendanceRowsSchema.parse(request.body);
    const result = await facultyEntry(request, response, request.params.entryId);
    if (!result) return;
    if (!matchesEntryDay(result.entry, data.date))
      return response.status(400).json({ message: 'This class is not scheduled on that date.' });
    const roster = await rosterFor(result.entry);
    const allowed = new Set(roster.map((student) => String(student._id)));
    const submitted = new Set(data.rows.map((row) => row.studentAdmissionId));
    if (
      data.rows.some((row) => !allowed.has(row.studentAdmissionId)) ||
      submitted.size !== roster.length
    )
      return response
        .status(400)
        .json({ message: 'Submit attendance exactly once for every student in this class.' });
    const now = new Date();
    const existing = await db()
      .collection('attendanceSessions')
      .findOne({ timetableEntryId: result.entry._id, date: data.date });
    const sessionDocument = {
      timetableEntryId: result.entry._id,
      date: data.date,
      academicSession: result.entry.academicSession,
      semester: result.entry.semester,
      subjectId: result.entry.subjectId,
      subjectName: result.entry.subjectName,
      subjectCode: result.entry.subjectCode,
      facultyId: result.faculty._id,
      facultyName: result.faculty.name,
      totalStudents: data.rows.length,
      presentCount: data.rows.filter((row) => row.status === 'present').length,
      absentCount: data.rows.filter((row) => row.status === 'absent').length,
      status: 'saved',
      updatedAt: now,
      markedBy: request.faculty._id,
    };
    let sessionId = existing?._id;
    if (existing)
      await db()
        .collection('attendanceSessions')
        .updateOne({ _id: existing._id }, { $set: sessionDocument });
    else {
      const inserted = await db()
        .collection('attendanceSessions')
        .insertOne({ ...sessionDocument, createdAt: now });
      sessionId = inserted.insertedId;
    }
    for (const row of data.rows) {
      const student = roster.find((value) => String(value._id) === row.studentAdmissionId);
      await db()
        .collection('attendanceRecords')
        .updateOne(
          {
            timetableEntryId: result.entry._id,
            date: data.date,
            studentAdmissionId: id(row.studentAdmissionId),
          },
          {
            $set: {
              attendanceSessionId: sessionId,
              timetableEntryId: result.entry._id,
              date: data.date,
              academicSession: result.entry.academicSession,
              semester: result.entry.semester,
              studentAdmissionId: student._id,
              studentId: student.studentId || '',
              studentName: student.studentName || '',
              subjectId: result.entry.subjectId,
              subjectName: result.entry.subjectName,
              subjectCode: result.entry.subjectCode,
              facultyId: result.faculty._id,
              facultyName: result.faculty.name,
              status: row.status,
              updatedAt: now,
            },
            $setOnInsert: { createdAt: now },
          },
          { upsert: true },
        );
    }
    response.json({ saved: data.rows.length, sessionId: String(sessionId) });
  }),
);

studentAttendanceRouter.get(
  '/',
  asyncHandler(async (request, response) => {
    const [records, timetableEntries] = await Promise.all([
      db()
        .collection('attendanceRecords')
        .find({
          studentAdmissionId: request.student._id,
          academicSession: request.student.academicSession,
          semester: Number(request.student.currentSemester || 1),
        })
        .sort({ date: -1 })
        .toArray(),
      studentVisibleEntries(request.student),
    ]);
    const summaries = new Map();
    for (const entry of timetableEntries) {
      const key = String(entry.subjectId);
      const summary = summaries.get(key) || {
        subjectId: key,
        subjectName: entry.subjectName,
        subjectCode: entry.subjectCode,
        facultyNames: new Set(),
        totalLectures: 0,
        presentLectures: 0,
        absentLectures: 0,
      };
      if (entry.facultyName) summary.facultyNames.add(entry.facultyName);
      summaries.set(key, summary);
    }
    for (const record of records) {
      const key = String(record.subjectId);
      const summary = summaries.get(key) || {
        subjectId: key,
        subjectName: record.subjectName,
        subjectCode: record.subjectCode,
        facultyNames: new Set(),
        totalLectures: 0,
        presentLectures: 0,
        absentLectures: 0,
      };
      summary.facultyNames.add(record.facultyName);
      summary.totalLectures += 1;
      if (record.status === 'present') summary.presentLectures += 1;
      else summary.absentLectures += 1;
      summaries.set(key, summary);
    }
    const subjects = [...summaries.values()].map((summary) => ({
      ...summary,
      facultyNames: [...summary.facultyNames].filter(Boolean),
      attendancePercentage: summary.totalLectures
        ? Number(((summary.presentLectures / summary.totalLectures) * 100).toFixed(2))
        : 0,
    }));
    const totalLectures = subjects.reduce((sum, item) => sum + item.totalLectures, 0);
    const presentLectures = subjects.reduce((sum, item) => sum + item.presentLectures, 0);
    response.json({
      subjects,
      overall: {
        totalLectures,
        presentLectures,
        absentLectures: totalLectures - presentLectures,
        attendancePercentage: totalLectures
          ? Number(((presentLectures / totalLectures) * 100).toFixed(2))
          : 0,
      },
    });
  }),
);
