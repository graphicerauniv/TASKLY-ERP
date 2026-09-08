import express from 'express';
import multer from 'multer';
import { z } from 'zod';
import { config } from '../config.js';
import { db, id, serialize } from '../db.js';
import { asyncHandler } from '../lib/async-handler.js';
import { storeObject } from '../services/object-storage.js';
import { extensionForMimeType } from '../services/upload-rules.js';

export const facultyAttendanceRouter = express.Router();
export const studentAttendanceRouter = express.Router();
export const attendanceCorrectionsAdminRouter = express.Router();

const correctionUpload = multer({
  storage: multer.memoryStorage(),
  limits: { fileSize: config.maxUploadBytes },
});
const correctionAttachmentTypes = new Set(['application/pdf', 'image/png', 'image/jpeg']);

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
const correctionReasonTypes = [
  'marked-absent',
  'not-updated',
  'class-cancelled',
  'wrong-status',
  'duplicate',
  'other',
];
const correctionRequestSchema = z.object({
  recordId: z.string().trim().min(1),
  reasonType: z.enum(correctionReasonTypes).optional().default('other'),
  requestedStatus: z.enum(['present', 'absent']).optional(),
  note: z.string().trim().min(10).max(300).optional(),
  reason: z.string().trim().min(10).max(500).optional(),
}).refine((value) => value.note || value.reason, { message: 'Add a short note explaining the correction.' });
const correctionResponseSchema = z.object({
  message: z.string().trim().max(1000).optional().default(''),
});
const correctionAdminUpdateSchema = z.object({
  status: z.enum(['reviewing', 'needs-reply', 'approved', 'rejected']),
  message: z.string().trim().min(3).max(1000),
  replyDueAt: z.string().datetime().optional().nullable(),
});
const alertReadSchema = z.object({
  ids: z.array(z.string().trim().min(1)).optional(),
  all: z.boolean().optional(),
});
const alertPreferencesSchema = z.object({
  enabled: z.boolean(),
  critical: z.boolean(),
  risk: z.boolean(),
  pending: z.boolean(),
  correction: z.boolean(),
  onTrack: z.boolean(),
});

const REQUIRED_ATTENDANCE = 75;
const DEFAULT_ALERT_PREFERENCES = Object.freeze({
  enabled: true,
  critical: true,
  risk: true,
  pending: true,
  correction: true,
  onTrack: true,
});

const OPEN_CORRECTION_STATUSES = ['submitted', 'reviewing', 'needs-reply', 'pending'];

function normalizedCorrectionStatus(status) {
  return status === 'pending' ? 'submitted' : status;
}

function correctionView(document) {
  return serialize({
    ...document,
    status: normalizedCorrectionStatus(document.status),
    requestNumber: document.requestNumber || `CR-${String(document._id).slice(-6).toUpperCase()}`,
    reasonType: document.reasonType || 'other',
    note: document.note || document.reason || '',
    requestedStatus:
      document.requestedStatus || (document.recordedStatus === 'absent' ? 'present' : 'absent'),
    attachments: document.attachments || [],
    messages: document.messages || [],
    timeline:
      document.timeline || [
        { status: 'submitted', label: 'Submitted', at: document.createdAt },
      ],
  });
}

async function storeCorrectionAttachment(file, studentId, requestId = 'new') {
  if (!file) return null;
  if (!correctionAttachmentTypes.has(file.mimetype))
    throw Object.assign(new Error('Upload a PDF, PNG, or JPG file.'), { status: 400 });
  const key = `${studentId}/${requestId}/${Date.now()}-${Math.random().toString(36).slice(2, 10)}${extensionForMimeType(file.mimetype)}`;
  const stored = await storeObject({
    bucket: config.storage.attendanceCorrectionBucket,
    key,
    body: file.buffer,
    contentType: file.mimetype,
  });
  return {
    name: file.originalname,
    bucket: stored.bucket,
    key: stored.key,
    url: stored.url,
    mimeType: file.mimetype,
    size: file.size,
    uploadedAt: new Date(),
  };
}

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

function buildStudentAttendanceSummary(records, timetableEntries) {
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
    if (record.facultyName) summary.facultyNames.add(record.facultyName);
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
  return {
    subjects,
    overall: {
      totalLectures,
      presentLectures,
      absentLectures: totalLectures - presentLectures,
      attendancePercentage: totalLectures
        ? Number(((presentLectures / totalLectures) * 100).toFixed(2))
        : 0,
    },
  };
}

function utcDate(value) {
  if (!value) return null;
  const parsed = new Date(value);
  if (Number.isNaN(parsed.getTime())) return null;
  return new Date(
    Date.UTC(parsed.getUTCFullYear(), parsed.getUTCMonth(), parsed.getUTCDate()),
  );
}

function upcomingLecturesBySubject(timetableEntries, fallbackDays = 28) {
  const plans = new Map();
  const today = new Date();
  const tomorrow = new Date(
    Date.UTC(today.getUTCFullYear(), today.getUTCMonth(), today.getUTCDate() + 1),
  );
  const fallbackEnd = new Date(tomorrow);
  fallbackEnd.setUTCDate(fallbackEnd.getUTCDate() + fallbackDays - 1);
  const maximumEnd = new Date(tomorrow);
  maximumEnd.setUTCDate(maximumEnd.getUTCDate() + 549);
  for (const entry of timetableEntries) {
    const effectiveFrom = utcDate(entry.effectiveFrom);
    const configuredEnd = utcDate(entry.effectiveTo);
    const start = effectiveFrom && effectiveFrom > tomorrow ? effectiveFrom : tomorrow;
    const requestedEnd = configuredEnd || fallbackEnd;
    const end = requestedEnd < maximumEnd ? requestedEnd : maximumEnd;
    if (end < start) continue;
    let count = 0;
    for (const date = new Date(start); date <= end; date.setUTCDate(date.getUTCDate() + 1)) {
      const day = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'][
        date.getUTCDay()
      ];
      if (entry.day === day) count += 1;
    }
    const key = String(entry.subjectId);
    const current = plans.get(key) || { count: 0, through: end, usesConfiguredEnd: false };
    plans.set(key, {
      count: current.count + count,
      through: current.through > end ? current.through : end,
      usesConfiguredEnd: current.usesConfiguredEnd || Boolean(configuredEnd),
    });
  }
  return plans;
}

export function attendanceRisk(subject, upcomingLectures = 0) {
  if (!subject.totalLectures) {
    return {
      ...subject,
      upcomingLectures,
      requiredAttendance: REQUIRED_ATTENDANCE,
      status: 'pending',
      classesToTarget: null,
      canReachTarget: null,
      bestPossibleAttendance: null,
      absenceBuffer: null,
      message: 'Attendance will appear after faculty saves the first lecture.',
    };
  }
  const target = REQUIRED_ATTENDANCE / 100;
  const classesToTarget = Math.max(
    0,
    Math.ceil((target * subject.totalLectures - subject.presentLectures) / (1 - target)),
  );
  const bestPossibleAttendance = upcomingLectures
    ? Number(
        (
          ((subject.presentLectures + upcomingLectures) /
            (subject.totalLectures + upcomingLectures)) *
          100
        ).toFixed(2),
      )
    : subject.attendancePercentage;
  const absenceBuffer = Math.max(
    0,
    Math.floor(subject.presentLectures / target - subject.totalLectures + 1e-9),
  );
  let status = 'on-track';
  let message = `You can miss ${absenceBuffer} more ${absenceBuffer === 1 ? 'class' : 'classes'} and remain at or above ${REQUIRED_ATTENDANCE}%.`;
  if (subject.attendancePercentage < REQUIRED_ATTENDANCE) {
    status = 'critical';
    message =
      classesToTarget <= upcomingLectures
        ? `Attend the next ${classesToTarget} consecutive ${classesToTarget === 1 ? 'class' : 'classes'} to reach ${REQUIRED_ATTENDANCE}%.`
        : `The current published schedule is too short to reach ${REQUIRED_ATTENDANCE}%.`;
  } else if (absenceBuffer <= 1) {
    status = 'at-risk';
    message = `The next absence would reduce attendance below ${REQUIRED_ATTENDANCE}%.`;
  } else if (absenceBuffer <= 3) {
    status = 'watch';
    message = `Attendance could fall below ${REQUIRED_ATTENDANCE}% after ${absenceBuffer + 1} absences.`;
  } else {
    message = 'Attendance is comfortably above the university minimum.';
  }
  return {
    ...subject,
    upcomingLectures,
    requiredAttendance: REQUIRED_ATTENDANCE,
    status,
    classesToTarget,
    canReachTarget: classesToTarget <= upcomingLectures,
    bestPossibleAttendance,
    absenceBuffer,
    message,
  };
}

async function studentRiskSnapshot(student) {
  const [records, timetableEntries] = await Promise.all([
    db()
      .collection('attendanceRecords')
      .find({
        studentAdmissionId: student._id,
        academicSession: student.academicSession,
        semester: Number(student.currentSemester || 1),
      })
      .sort({ date: -1 })
      .toArray(),
    studentVisibleEntries(student),
  ]);
  const summary = buildStudentAttendanceSummary(records, timetableEntries);
  const upcoming = upcomingLecturesBySubject(timetableEntries, 28);
  const latestBySubject = new Map();
  for (const record of records) {
    const key = String(record.subjectId);
    if (!latestBySubject.has(key)) latestBySubject.set(key, record);
  }
  const subjects = summary.subjects
    .map((subject) => ({
      ...attendanceRisk(subject, upcoming.get(subject.subjectId)?.count || 0),
      latestActivityAt:
        latestBySubject.get(subject.subjectId)?.updatedAt ||
        latestBySubject.get(subject.subjectId)?.date ||
        new Date(),
    }))
    .sort((left, right) => {
      const order = { critical: 0, 'at-risk': 1, watch: 2, pending: 3, 'on-track': 4 };
      return order[left.status] - order[right.status] || left.attendancePercentage - right.attendancePercentage;
    });
  return {
    subjects,
    summary: {
      belowMinimum: subjects.filter((subject) => subject.status === 'critical').length,
      atRisk: subjects.filter((subject) => ['at-risk', 'watch'].includes(subject.status)).length,
      pending: subjects.filter((subject) => subject.status === 'pending').length,
      onTrack: subjects.filter((subject) => subject.status === 'on-track').length,
    },
    overall: summary.overall,
    requiredAttendance: REQUIRED_ATTENDANCE,
    syncedAt: new Date().toISOString(),
  };
}

async function studentAlertFeed(student) {
  const [risk, state, preferenceDocument, corrections] = await Promise.all([
    studentRiskSnapshot(student),
    db().collection('studentNotificationStates').findOne({ studentAdmissionId: student._id }),
    db().collection('studentNotificationPreferences').findOne({ studentAdmissionId: student._id }),
    db()
      .collection('attendanceCorrectionRequests')
      .find({ studentAdmissionId: student._id })
      .sort({ updatedAt: -1 })
      .limit(20)
      .toArray(),
  ]);
  const preferences = { ...DEFAULT_ALERT_PREFERENCES, ...(preferenceDocument?.preferences || {}) };
  const alerts = [];
  if (preferences.enabled) {
    for (const subject of risk.subjects) {
      const createdAt = new Date(subject.latestActivityAt).toISOString();
      if (subject.status === 'critical' && preferences.critical)
        alerts.push({
          id: `attendance:critical:${subject.subjectId}:${subject.attendancePercentage}`,
          type: 'critical',
          title: `${subject.subjectName} is below the ${REQUIRED_ATTENDANCE}% minimum`,
          message: `${subject.attendancePercentage}% attendance. ${subject.message}`,
          createdAt,
          subjectId: subject.subjectId,
          actionLabel: 'View shortage',
        });
      if (['at-risk', 'watch'].includes(subject.status) && preferences.risk)
        alerts.push({
          id: `attendance:risk:${subject.subjectId}:${subject.attendancePercentage}`,
          type: 'risk',
          title: `${subject.subjectName} needs attention`,
          message: subject.message,
          createdAt,
          subjectId: subject.subjectId,
          actionLabel: 'View subject',
        });
      if (subject.status === 'pending' && preferences.pending)
        alerts.push({
          id: `attendance:pending:${subject.subjectId}`,
          type: 'pending',
          title: `${subject.subjectName} attendance is not marked`,
          message: subject.message,
          createdAt,
          subjectId: subject.subjectId,
          actionLabel: 'View record',
        });
      if (subject.status === 'on-track' && preferences.onTrack)
        alerts.push({
          id: `attendance:on-track:${subject.subjectId}:${subject.attendancePercentage}`,
          type: 'on-track',
          title: `${subject.subjectName} is on track`,
          message: `Current attendance is ${subject.attendancePercentage}%. Keep it up.`,
          createdAt,
          subjectId: subject.subjectId,
          actionLabel: 'View subject',
        });
    }
    if (preferences.correction) {
      for (const request of corrections) {
        alerts.push({
          id: `attendance:correction:${request._id}:${request.status}`,
          type: 'correction',
          title: `Attendance correction ${request.status}`,
          message: `Your ${request.subjectName || 'attendance'} request for ${request.attendanceDate} is ${request.status}.`,
          createdAt: new Date(request.updatedAt || request.createdAt).toISOString(),
          subjectId: String(request.subjectId || ''),
          recordId: String(request.attendanceRecordId || ''),
          actionLabel: 'View update',
        });
      }
    }
  }
  const readIds = new Set((state?.readIds || []).map(String));
  const items = alerts
    .map((alert) => ({ ...alert, read: readIds.has(alert.id) }))
    .sort((left, right) => new Date(right.createdAt) - new Date(left.createdAt));
  return {
    items,
    counts: {
      unread: items.filter((item) => !item.read).length,
      critical: items.filter((item) => item.type === 'critical').length,
      risk: items.filter((item) => item.type === 'risk').length,
      updates: items.filter((item) => ['pending', 'correction', 'on-track'].includes(item.type)).length,
    },
    syncedAt: new Date().toISOString(),
  };
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
    response.json(buildStudentAttendanceSummary(records, timetableEntries));
  }),
);

studentAttendanceRouter.get(
  '/analytics',
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
    const summary = buildStudentAttendanceSummary(records, timetableEntries);
    const planningWindowDays = 28;
    const upcoming = upcomingLecturesBySubject(timetableEntries, planningWindowDays);
    const planningThrough = [...upcoming.values()].reduce(
      (latest, plan) => (plan.through > latest ? plan.through : latest),
      new Date(),
    );
    response.json({
      ...summary,
      subjects: summary.subjects.map((subject) => {
        const plan = upcoming.get(subject.subjectId);
        return {
          ...subject,
          upcomingLectures: plan?.count || 0,
          upcomingThrough: plan?.through?.toISOString().slice(0, 10) || null,
          upcomingSource: plan?.usesConfiguredEnd ? 'configured-timetable' : 'forecast-window',
        };
      }),
      planningWindowDays,
      planningThrough: planningThrough.toISOString().slice(0, 10),
      syncedAt: new Date().toISOString(),
    });
  }),
);

studentAttendanceRouter.get(
  '/risk',
  asyncHandler(async (request, response) => {
    response.json(await studentRiskSnapshot(request.student));
  }),
);

studentAttendanceRouter.get(
  '/alerts',
  asyncHandler(async (request, response) => {
    response.json(await studentAlertFeed(request.student));
  }),
);

studentAttendanceRouter.post(
  '/alerts/read',
  asyncHandler(async (request, response) => {
    const data = alertReadSchema.parse(request.body);
    const feed = await studentAlertFeed(request.student);
    const ids = data.all ? feed.items.map((item) => item.id) : data.ids || [];
    const existing = await db()
      .collection('studentNotificationStates')
      .findOne({ studentAdmissionId: request.student._id });
    const readIds = [...new Set([...(existing?.readIds || []).map(String), ...ids])].slice(-500);
    await db()
      .collection('studentNotificationStates')
      .updateOne(
        { studentAdmissionId: request.student._id },
        {
          $set: { studentAdmissionId: request.student._id, readIds, updatedAt: new Date() },
          $setOnInsert: { createdAt: new Date() },
        },
        { upsert: true },
      );
    response.json({ readIds });
  }),
);

studentAttendanceRouter.get(
  '/alert-preferences',
  asyncHandler(async (request, response) => {
    const document = await db()
      .collection('studentNotificationPreferences')
      .findOne({ studentAdmissionId: request.student._id });
    response.json({
      preferences: { ...DEFAULT_ALERT_PREFERENCES, ...(document?.preferences || {}) },
    });
  }),
);

studentAttendanceRouter.put(
  '/alert-preferences',
  asyncHandler(async (request, response) => {
    const preferences = alertPreferencesSchema.parse(request.body);
    preferences.critical = true;
    const now = new Date();
    await db()
      .collection('studentNotificationPreferences')
      .updateOne(
        { studentAdmissionId: request.student._id },
        {
          $set: { studentAdmissionId: request.student._id, preferences, updatedAt: now },
          $setOnInsert: { createdAt: now },
        },
        { upsert: true },
      );
    response.json({ preferences });
  }),
);

studentAttendanceRouter.get(
  '/subjects/:subjectId',
  asyncHandler(async (request, response) => {
    const subjectId = id(request.params.subjectId, 'subjectId');
    const [visibleEntries, records] = await Promise.all([
      studentVisibleEntries(request.student),
      db()
        .collection('attendanceRecords')
        .find({
          studentAdmissionId: request.student._id,
          academicSession: request.student.academicSession,
          semester: Number(request.student.currentSemester || 1),
          subjectId,
        })
        .sort({ date: -1 })
        .toArray(),
    ]);
    const subjectEntries = visibleEntries.filter(
      (entry) => String(entry.subjectId) === String(subjectId),
    );
    if (!subjectEntries.length && !records.length)
      return response
        .status(404)
        .json({ message: 'This subject is not available to the student.' });

    const entryById = new Map(subjectEntries.map((entry) => [String(entry._id), entry]));
    const source = subjectEntries[0] || records[0];
    const presentLectures = records.filter((record) => record.status === 'present').length;
    const totalLectures = records.length;
    response.json({
      subject: {
        subjectId: String(subjectId),
        subjectName: source.subjectName || 'Subject',
        subjectCode: source.subjectCode || '',
        facultyNames: [
          ...new Set(
            [
              ...subjectEntries.map((entry) => entry.facultyName),
              ...records.map((record) => record.facultyName),
            ].filter(Boolean),
          ),
        ],
        totalLectures,
        presentLectures,
        absentLectures: totalLectures - presentLectures,
        attendancePercentage: totalLectures
          ? Number(((presentLectures / totalLectures) * 100).toFixed(2))
          : 0,
      },
      schedule: subjectEntries.map((entry) => ({
        timetableEntryId: String(entry._id),
        day: entry.day,
        startTime: entry.startTime,
        endTime: entry.endTime,
        classType: entry.classType || 'Lecture',
        roomName: entry.roomName || '',
        facultyName: entry.facultyName || '',
      })),
      records: records.map((record) => {
        const entry = entryById.get(String(record.timetableEntryId));
        return serialize({
          recordId: record._id,
          attendanceSessionId: record.attendanceSessionId,
          timetableEntryId: record.timetableEntryId,
          date: record.date,
          status: record.status,
          updatedAt: record.updatedAt,
          markedBy: 'Faculty',
          startTime: entry?.startTime || '',
          endTime: entry?.endTime || '',
          roomName: entry?.roomName || '',
          facultyName: record.facultyName || entry?.facultyName || '',
          classType: entry?.classType || 'Lecture',
        });
      }),
    });
  }),
);

studentAttendanceRouter.get(
  '/correction-records',
  asyncHandler(async (request, response) => {
    const records = await db()
      .collection('attendanceRecords')
      .find({
        studentAdmissionId: request.student._id,
        academicSession: request.student.academicSession,
        semester: Number(request.student.currentSemester || 1),
      })
      .sort({ date: -1, updatedAt: -1 })
      .limit(250)
      .toArray();
    const entryIds = [...new Set(records.map((record) => String(record.timetableEntryId)).filter(Boolean))];
    const entries = entryIds.length
      ? await db()
          .collection('timetableEntries')
          .find({ _id: { $in: entryIds.map((entryId) => id(entryId)) } })
          .toArray()
      : [];
    const entriesById = new Map(entries.map((entry) => [String(entry._id), entry]));
    const items = records.map((record) => {
      const entry = entriesById.get(String(record.timetableEntryId));
      return serialize({
        recordId: record._id,
        attendanceSessionId: record.attendanceSessionId,
        timetableEntryId: record.timetableEntryId,
        subjectId: record.subjectId,
        subjectName: record.subjectName || entry?.subjectName || 'Subject',
        subjectCode: record.subjectCode || entry?.subjectCode || '',
        date: record.date,
        status: record.status,
        startTime: entry?.startTime || '',
        endTime: entry?.endTime || '',
        roomName: entry?.roomName || '',
        facultyName: record.facultyName || entry?.facultyName || '',
        classType: entry?.classType || 'Lecture',
        updatedAt: record.updatedAt,
      });
    });
    const subjects = [
      ...new Map(
        items.map((item) => [
          String(item.subjectId),
          { subjectId: item.subjectId, subjectName: item.subjectName, subjectCode: item.subjectCode },
        ]),
      ).values(),
    ];
    response.json({ items, subjects });
  }),
);

studentAttendanceRouter.get(
  '/correction-requests',
  asyncHandler(async (request, response) => {
    const documents = await db()
      .collection('attendanceCorrectionRequests')
      .find({
        studentAdmissionId: request.student._id,
        academicSession: request.student.academicSession,
        semester: Number(request.student.currentSemester || 1),
      })
      .sort({ updatedAt: -1, createdAt: -1 })
      .limit(100)
      .toArray();
    const normalized = documents.map(correctionView);
    const search = String(request.query.search || '').trim().toLowerCase();
    const status = String(request.query.status || 'all');
    const items = normalized.filter((item) => {
      const matchesSearch =
        !search ||
        [item.requestNumber, item.subjectName, item.subjectCode]
          .filter(Boolean)
          .some((value) => String(value).toLowerCase().includes(search));
      const matchesStatus =
        status === 'all' ||
        (status === 'open' && OPEN_CORRECTION_STATUSES.includes(item.status)) ||
        item.status === status;
      return matchesSearch && matchesStatus;
    });
    response.json({
      items,
      counts: {
        all: normalized.length,
        open: normalized.filter((item) => OPEN_CORRECTION_STATUSES.includes(item.status)).length,
        needsReply: normalized.filter((item) => item.status === 'needs-reply').length,
        approved: normalized.filter((item) => item.status === 'approved').length,
        rejected: normalized.filter((item) => item.status === 'rejected').length,
      },
    });
  }),
);

studentAttendanceRouter.get(
  '/correction-requests/:requestId',
  asyncHandler(async (request, response) => {
    const document = await db().collection('attendanceCorrectionRequests').findOne({
      _id: id(request.params.requestId, 'requestId'),
      studentAdmissionId: request.student._id,
    });
    if (!document) return response.status(404).json({ message: 'Correction request was not found.' });
    response.json({ item: correctionView(document) });
  }),
);

studentAttendanceRouter.post(
  '/correction-requests',
  correctionUpload.single('attachment'),
  asyncHandler(async (request, response) => {
    const data = correctionRequestSchema.parse(request.body);
    const record = await db()
      .collection('attendanceRecords')
      .findOne({
        _id: id(data.recordId, 'recordId'),
        studentAdmissionId: request.student._id,
        academicSession: request.student.academicSession,
        semester: Number(request.student.currentSemester || 1),
      });
    if (!record) return response.status(404).json({ message: 'Attendance record was not found.' });
    const existing = await db().collection('attendanceCorrectionRequests').findOne({
      attendanceRecordId: record._id,
      studentAdmissionId: request.student._id,
      status: { $in: OPEN_CORRECTION_STATUSES },
    });
    if (existing)
      return response.status(409).json({ message: 'An open correction request already exists for this lecture.' });

    const entry = await db().collection('timetableEntries').findOne({ _id: record.timetableEntryId });
    const attachment = await storeCorrectionAttachment(request.file, request.student.studentId || String(request.student._id));
    const now = new Date();
    const sequence = (await db().collection('attendanceCorrectionRequests').countDocuments({})) + 1001;
    const document = {
      requestNumber: `CR-${sequence}`,
      attendanceRecordId: record._id,
      attendanceSessionId: record.attendanceSessionId,
      timetableEntryId: record.timetableEntryId,
      studentAdmissionId: request.student._id,
      studentId: request.student.studentId || '',
      studentName: request.student.studentName || '',
      academicSession: request.student.academicSession,
      semester: Number(request.student.currentSemester || 1),
      subjectId: record.subjectId,
      subjectName: record.subjectName || entry?.subjectName || 'Subject',
      subjectCode: record.subjectCode || entry?.subjectCode || '',
      attendanceDate: record.date,
      startTime: entry?.startTime || '',
      endTime: entry?.endTime || '',
      facultyName: record.facultyName || entry?.facultyName || '',
      roomName: entry?.roomName || '',
      classType: entry?.classType || 'Lecture',
      recordedStatus: record.status,
      requestedStatus:
        data.requestedStatus || (record.status === 'absent' ? 'present' : 'absent'),
      reasonType: data.reasonType,
      note: data.note || data.reason,
      reason: data.note || data.reason,
      attachments: attachment ? [attachment] : [],
      messages: [],
      timeline: [{ status: 'submitted', label: 'Submitted', at: now }],
      status: 'submitted',
      active: true,
      createdAt: now,
      updatedAt: now,
    };
    const result = await db().collection('attendanceCorrectionRequests').insertOne(document);
    response.status(201).json({ item: correctionView({ ...document, _id: result.insertedId }) });
  }),
);

studentAttendanceRouter.post(
  '/correction-requests/:requestId/respond',
  correctionUpload.single('attachment'),
  asyncHandler(async (request, response) => {
    const data = correctionResponseSchema.parse(request.body);
    const collection = db().collection('attendanceCorrectionRequests');
    const document = await collection.findOne({
      _id: id(request.params.requestId, 'requestId'),
      studentAdmissionId: request.student._id,
    });
    if (!document) return response.status(404).json({ message: 'Correction request was not found.' });
    if (!OPEN_CORRECTION_STATUSES.includes(document.status))
      return response.status(409).json({ message: 'This correction request is already closed.' });
    const attachment = await storeCorrectionAttachment(
      request.file,
      request.student.studentId || String(request.student._id),
      document.requestNumber || String(document._id),
    );
    if (!data.message && !attachment)
      return response.status(400).json({ message: 'Add a reply or supporting proof.' });
    const now = new Date();
    const message = {
      authorRole: 'student',
      authorName: request.student.studentName || 'Student',
      message: data.message,
      attachments: attachment ? [attachment] : [],
      createdAt: now,
    };
    await collection.updateOne(
      { _id: document._id },
      {
        $set: { status: 'reviewing', updatedAt: now },
        $push: {
          messages: message,
          timeline: { status: 'reviewing', label: 'Reply received', at: now },
        },
      },
    );
    response.json({
      item: correctionView({
        ...document,
        status: 'reviewing',
        messages: [...(document.messages || []), message],
        timeline: [
          ...(document.timeline || []),
          { status: 'reviewing', label: 'Reply received', at: now },
        ],
        updatedAt: now,
      }),
    });
  }),
);

studentAttendanceRouter.post(
  '/correction-requests/:requestId/withdraw',
  asyncHandler(async (request, response) => {
    const collection = db().collection('attendanceCorrectionRequests');
    const document = await collection.findOne({
      _id: id(request.params.requestId, 'requestId'),
      studentAdmissionId: request.student._id,
    });
    if (!document) return response.status(404).json({ message: 'Correction request was not found.' });
    if (!OPEN_CORRECTION_STATUSES.includes(document.status))
      return response.status(409).json({ message: 'Only an open request can be withdrawn.' });
    const now = new Date();
    await collection.updateOne(
      { _id: document._id },
      {
        $set: { status: 'withdrawn', active: false, updatedAt: now },
        $push: { timeline: { status: 'withdrawn', label: 'Withdrawn', at: now } },
      },
    );
    response.json({ message: 'Correction request withdrawn.' });
  }),
);

attendanceCorrectionsAdminRouter.get(
  '/',
  asyncHandler(async (request, response) => {
    const documents = await db()
      .collection('attendanceCorrectionRequests')
      .find({})
      .sort({ updatedAt: -1, createdAt: -1 })
      .limit(250)
      .toArray();
    const search = String(request.query.search || '').trim().toLowerCase();
    const status = String(request.query.status || 'all');
    const items = documents
      .map(correctionView)
      .filter(
        (item) =>
          (status === 'all' || item.status === status) &&
          (!search ||
            [item.requestNumber, item.studentName, item.studentId, item.subjectName]
              .filter(Boolean)
              .some((value) => String(value).toLowerCase().includes(search))),
      );
    response.json({ items });
  }),
);

attendanceCorrectionsAdminRouter.get(
  '/:requestId',
  asyncHandler(async (request, response) => {
    const document = await db().collection('attendanceCorrectionRequests').findOne({
      _id: id(request.params.requestId, 'requestId'),
    });
    if (!document) return response.status(404).json({ message: 'Correction request was not found.' });
    response.json({ item: correctionView(document) });
  }),
);

attendanceCorrectionsAdminRouter.patch(
  '/:requestId',
  asyncHandler(async (request, response) => {
    const data = correctionAdminUpdateSchema.parse(request.body);
    const collection = db().collection('attendanceCorrectionRequests');
    const document = await collection.findOne({ _id: id(request.params.requestId, 'requestId') });
    if (!document) return response.status(404).json({ message: 'Correction request was not found.' });
    const now = new Date();
    const message = {
      authorRole: 'academic-office',
      authorName: request.admin?.name || 'Academic Office',
      message: data.message,
      attachments: [],
      createdAt: now,
    };
    if (data.status === 'approved') {
      await db().collection('attendanceRecords').updateOne(
        { _id: document.attendanceRecordId },
        { $set: { status: document.requestedStatus || 'present', updatedAt: now } },
      );
    }
    await collection.updateOne(
      { _id: document._id },
      {
        $set: {
          status: data.status,
          active: !['approved', 'rejected'].includes(data.status),
          replyDueAt: data.replyDueAt ? new Date(data.replyDueAt) : null,
          reviewedBy: request.admin?._id,
          updatedAt: now,
        },
        $push: {
          messages: message,
          timeline: {
            status: data.status,
            label: data.status === 'needs-reply' ? 'Needs reply' : data.status,
            at: now,
          },
        },
      },
    );
    const updated = await collection.findOne({ _id: document._id });
    response.json({ item: correctionView(updated) });
  }),
);
