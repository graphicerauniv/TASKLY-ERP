import express from 'express';
import ExcelJS from 'exceljs';
import multer from 'multer';
import { Readable } from 'node:stream';
import { z } from 'zod';
import { db, id, serialize } from '../db.js';
import { asyncHandler } from '../lib/async-handler.js';

export const examsRouter = express.Router();
const upload = multer({ storage: multer.memoryStorage(), limits: { fileSize: 5 * 1024 * 1024 } });

const objectIdString = z.string().trim().min(1);
const examScheduleSchema = z.object({
  academicSessionId: objectIdString,
  universityId: objectIdString,
  collegeId: objectIdString,
  semesterParity: z.enum(['odd', 'even']),
  examType: z.enum([
    'sessional',
    'internal_practical',
    'teacher_assessment',
    'end_term',
    'end_term_practical',
    'mid_term',
  ]),
  caption: z.string().trim().min(1).max(240),
  theoryQuestionViewCount: z.coerce.number().int().min(0).max(10000),
  practicalQuestionViewCount: z.coerce.number().int().min(0).max(10000),
  isActive: z.boolean().optional().default(true),
});
const clockTime = z
  .string()
  .trim()
  .regex(/^(0[1-9]|1[0-2]):[0-5][0-9]$/, 'Enter time in HH:MM format.');
const examShiftSchema = z.object({
  academicSessionId: objectIdString,
  universityId: objectIdString,
  examScheduleId: objectIdString,
  caption: z.string().trim().min(1).max(240),
  shiftSerial: z.coerce.number().int().min(1).max(20),
  timeFrom: clockTime,
  timeFromMeridiem: z.enum(['AM', 'PM']),
  timeTo: clockTime,
  timeToMeridiem: z.enum(['AM', 'PM']),
  isActive: z.boolean().optional().default(true),
});
const examSubjectScheduleSchema = z.object({
  academicSessionId: objectIdString,
  universityId: objectIdString,
  collegeId: objectIdString,
  examScheduleId: objectIdString,
  departmentId: objectIdString,
  levelId: objectIdString,
  courseId: objectIdString,
  semester: z.coerce.number().int().min(1).max(20),
  subjectId: objectIdString,
  examDate: z
    .string()
    .trim()
    .regex(/^\d{4}-\d{2}-\d{2}$/, 'Select a valid exam date.'),
  shiftId: objectIdString,
  isActive: z.boolean().optional().default(true),
});

const EXAM_TYPE_NAMES = {
  sessional: 'Sessional',
  internal_practical: 'Internal/Practical',
  teacher_assessment: 'Teacher Assessment',
  end_term: 'End-Term',
  end_term_practical: 'End-Term/Practical',
  mid_term: 'Mid-Term',
};

async function masterValue(value, typeSlug, label) {
  const item = await db()
    .collection('masterValues')
    .findOne({ _id: id(value, `${label}Id`), typeSlug, isActive: true });
  if (!item) throw Object.assign(new Error(`Select an active ${label}.`), { status: 400 });
  return item;
}

async function resolveSchedule(data) {
  const [session, university, college] = await Promise.all([
    masterValue(data.academicSessionId, 'academic', 'academic session'),
    masterValue(data.universityId, 'university', 'university'),
    masterValue(data.collegeId, 'college', 'college'),
  ]);
  if (String(college.parentId || '') !== String(university._id))
    throw Object.assign(new Error('The selected college does not belong to this university.'), {
      status: 400,
    });
  return {
    ...data,
    academicSessionId: session._id,
    academicSession: session.name,
    universityId: university._id,
    universityName: university.name,
    collegeId: college._id,
    collegeName: college.name,
    examTypeName: EXAM_TYPE_NAMES[data.examType],
  };
}

function duplicateFilter(data) {
  return {
    academicSessionId: id(data.academicSessionId, 'academicSessionId'),
    collegeId: id(data.collegeId, 'collegeId'),
    semesterParity: data.semesterParity,
    examType: data.examType,
    caption: data.caption,
  };
}

function clockMinutes(value, meridiem) {
  const [hours, minutes] = value.split(':').map(Number);
  return (hours % 12) * 60 + minutes + (meridiem === 'PM' ? 12 * 60 : 0);
}

async function resolveShift(data) {
  const [session, university, examSchedule] = await Promise.all([
    masterValue(data.academicSessionId, 'academic', 'academic session'),
    masterValue(data.universityId, 'university', 'university'),
    db()
      .collection('examSchedules')
      .findOne({
        _id: id(data.examScheduleId, 'examScheduleId'),
        isActive: true,
      }),
  ]);
  if (!examSchedule)
    throw Object.assign(new Error('Select an active exam schedule.'), { status: 400 });
  if (String(examSchedule.academicSessionId) !== String(session._id))
    throw Object.assign(new Error('The exam schedule does not belong to this session.'), {
      status: 400,
    });
  if (String(examSchedule.universityId) !== String(university._id))
    throw Object.assign(new Error('The exam schedule does not belong to this university.'), {
      status: 400,
    });
  const timeFromMinutes = clockMinutes(data.timeFrom, data.timeFromMeridiem);
  const timeToMinutes = clockMinutes(data.timeTo, data.timeToMeridiem);
  if (timeToMinutes <= timeFromMinutes)
    throw Object.assign(new Error('Shift end time must be later than its start time.'), {
      status: 400,
    });
  return {
    ...data,
    academicSessionId: session._id,
    academicSession: session.name,
    universityId: university._id,
    universityName: university.name,
    examScheduleId: examSchedule._id,
    examScheduleCaption: examSchedule.caption,
    collegeId: examSchedule.collegeId,
    collegeName: examSchedule.collegeName,
    timeFromMinutes,
    timeToMinutes,
  };
}

function includesId(values, value) {
  return (values || []).map(String).includes(String(value));
}

function subjectMatchesScope(subject, scope) {
  return (
    (!subject.academicSessionId ||
      String(subject.academicSessionId) === String(scope.academicSessionId)) &&
    (!subject.academicSession || subject.academicSession === scope.academicSession) &&
    (!subject.universityId || String(subject.universityId) === String(scope.universityId)) &&
    (!subject.collegeId || String(subject.collegeId) === String(scope.collegeId)) &&
    (!subject.levelId || String(subject.levelId) === String(scope.levelId)) &&
    (!subject.departmentIds?.length || includesId(subject.departmentIds, scope.departmentId)) &&
    (!subject.courseIds?.length || includesId(subject.courseIds, scope.courseId)) &&
    (!Number(subject.semester) || Number(subject.semester) === Number(scope.semester))
  );
}

function validIsoDate(value) {
  const date = new Date(`${value}T00:00:00.000Z`);
  return !Number.isNaN(date.valueOf()) && date.toISOString().slice(0, 10) === value;
}

function normalizedImportValue(value) {
  return String(value || '')
    .trim()
    .toLocaleLowerCase('en-IN');
}

function findImportMaster(values, typeSlug, name, parentId = null) {
  const normalizedName = normalizedImportValue(name);
  return values.find(
    (item) =>
      item.typeSlug === typeSlug &&
      normalizedImportValue(item.name) === normalizedName &&
      (parentId === null || String(item.parentId || '') === String(parentId)),
  );
}

function importActiveValue(value) {
  return !['false', 'no', '0', 'inactive'].includes(normalizedImportValue(value));
}

export function examEligibilityDecision({
  hasRegistration,
  hasSubject,
  outstandingBalance,
  backlogCount,
}) {
  const reasons = [];
  if (!hasRegistration) reasons.push('Semester registration is incomplete.');
  else if (!hasSubject) reasons.push('The scheduled subject is not in the semester registration.');
  if (Number(outstandingBalance || 0) > 0) reasons.push('Fee balance is outstanding.');
  if (Number(backlogCount || 0) > 0) reasons.push('The student has an active backlog.');
  return { eligible: reasons.length === 0, reasons };
}

async function resolveSubjectSchedule(data) {
  const [session, university, college, department, level, course, examSchedule, subject, shift] =
    await Promise.all([
      masterValue(data.academicSessionId, 'academic', 'academic session'),
      masterValue(data.universityId, 'university', 'university'),
      masterValue(data.collegeId, 'college', 'college'),
      masterValue(data.departmentId, 'department', 'department'),
      masterValue(data.levelId, 'level', 'level'),
      masterValue(data.courseId, 'course', 'course'),
      db()
        .collection('examSchedules')
        .findOne({
          _id: id(data.examScheduleId, 'examScheduleId'),
          isActive: true,
        }),
      db()
        .collection('subjects')
        .findOne({
          _id: id(data.subjectId, 'subjectId'),
          isActive: true,
        }),
      db()
        .collection('examShiftSchedules')
        .findOne({
          _id: id(data.shiftId, 'shiftId'),
          isActive: true,
        }),
    ]);
  if (String(college.parentId || '') !== String(university._id))
    throw Object.assign(new Error('The selected college does not belong to this university.'), {
      status: 400,
    });
  if (!examSchedule)
    throw Object.assign(new Error('Select an active exam schedule.'), { status: 400 });
  if (
    String(examSchedule.academicSessionId) !== String(session._id) ||
    String(examSchedule.universityId) !== String(university._id) ||
    String(examSchedule.collegeId) !== String(college._id)
  )
    throw Object.assign(
      new Error('The selected exam schedule does not match this academic scope.'),
      {
        status: 400,
      },
    );
  const expectedParity = Number(data.semester) % 2 === 0 ? 'even' : 'odd';
  if (examSchedule.semesterParity !== expectedParity)
    throw Object.assign(
      new Error(`Select an ${expectedParity} exam schedule for Semester ${data.semester}.`),
      { status: 400 },
    );
  if (!shift || String(shift.examScheduleId) !== String(examSchedule._id))
    throw Object.assign(new Error('Select an active shift from this exam schedule.'), {
      status: 400,
    });
  if (!validIsoDate(data.examDate))
    throw Object.assign(new Error('Select a valid exam date.'), { status: 400 });
  const scope = {
    academicSessionId: session._id,
    academicSession: session.name,
    universityId: university._id,
    collegeId: college._id,
    departmentId: department._id,
    levelId: level._id,
    courseId: course._id,
    semester: data.semester,
  };
  if (!subject || !subjectMatchesScope(subject, scope))
    throw Object.assign(new Error('The selected subject is not mapped to this academic scope.'), {
      status: 400,
    });
  return {
    ...data,
    academicSessionId: session._id,
    academicSession: session.name,
    universityId: university._id,
    universityName: university.name,
    collegeId: college._id,
    collegeName: college.name,
    departmentId: department._id,
    departmentName: department.name,
    levelId: level._id,
    levelName: level.name,
    courseId: course._id,
    courseName: course.name,
    examScheduleId: examSchedule._id,
    examScheduleCaption: examSchedule.caption,
    subjectId: subject._id,
    subjectName: subject.name,
    subjectCode: subject.code,
    shiftId: shift._id,
    shiftCaption: shift.caption,
    shiftSerial: shift.shiftSerial,
    timeFrom: shift.timeFrom,
    timeFromMeridiem: shift.timeFromMeridiem,
    timeTo: shift.timeTo,
    timeToMeridiem: shift.timeToMeridiem,
  };
}

examsRouter.get(
  '/schedules',
  asyncHandler(async (_request, response) => {
    const items = await db()
      .collection('examSchedules')
      .find({})
      .sort({ academicSession: -1, collegeName: 1, caption: 1 })
      .toArray();
    response.json({ items: items.map(serialize) });
  }),
);

examsRouter.post(
  '/schedules',
  asyncHandler(async (request, response) => {
    const parsed = examScheduleSchema.parse(request.body);
    if (await db().collection('examSchedules').findOne(duplicateFilter(parsed)))
      return response.status(409).json({ message: 'This exam schedule already exists.' });
    const now = new Date();
    const document = {
      ...(await resolveSchedule(parsed)),
      createdAt: now,
      updatedAt: now,
      createdBy: id(request.admin._id),
    };
    const result = await db().collection('examSchedules').insertOne(document);
    response.status(201).json({ item: serialize({ ...document, _id: result.insertedId }) });
  }),
);

examsRouter.patch(
  '/schedules/:scheduleId',
  asyncHandler(async (request, response) => {
    const scheduleId = id(request.params.scheduleId, 'scheduleId');
    const current = await db().collection('examSchedules').findOne({ _id: scheduleId });
    if (!current) return response.status(404).json({ message: 'Exam schedule was not found.' });
    const parsed = examScheduleSchema.parse({ ...serialize(current), ...request.body });
    const duplicate = await db().collection('examSchedules').findOne(duplicateFilter(parsed));
    if (duplicate && String(duplicate._id) !== String(scheduleId))
      return response.status(409).json({ message: 'This exam schedule already exists.' });
    const document = { ...(await resolveSchedule(parsed)), updatedAt: new Date() };
    await db().collection('examSchedules').updateOne({ _id: scheduleId }, { $set: document });
    response.json({
      item: serialize(await db().collection('examSchedules').findOne({ _id: scheduleId })),
    });
  }),
);

examsRouter.delete(
  '/schedules/:scheduleId',
  asyncHandler(async (request, response) => {
    const scheduleId = id(request.params.scheduleId, 'scheduleId');
    if (await db().collection('examShiftSchedules').findOne({ examScheduleId: scheduleId }))
      return response.status(409).json({
        message: 'Delete this exam schedule’s shifts before deleting the exam schedule.',
      });
    const result = await db().collection('examSchedules').deleteOne({ _id: scheduleId });
    if (!result.deletedCount)
      return response.status(404).json({ message: 'Exam schedule was not found.' });
    response.json({ deleted: true });
  }),
);

examsRouter.get(
  '/shifts',
  asyncHandler(async (_request, response) => {
    const items = await db()
      .collection('examShiftSchedules')
      .find({})
      .sort({ academicSession: -1, examScheduleCaption: 1, shiftSerial: 1 })
      .toArray();
    response.json({ items: items.map(serialize) });
  }),
);

examsRouter.post(
  '/shifts',
  asyncHandler(async (request, response) => {
    const parsed = examShiftSchema.parse(request.body);
    const duplicate = await db()
      .collection('examShiftSchedules')
      .findOne({
        examScheduleId: id(parsed.examScheduleId, 'examScheduleId'),
        shiftSerial: parsed.shiftSerial,
      });
    if (duplicate)
      return response.status(409).json({
        message: 'This shift serial already exists for the selected exam schedule.',
      });
    const now = new Date();
    const document = {
      ...(await resolveShift(parsed)),
      createdAt: now,
      updatedAt: now,
      createdBy: id(request.admin._id),
    };
    const result = await db().collection('examShiftSchedules').insertOne(document);
    response.status(201).json({ item: serialize({ ...document, _id: result.insertedId }) });
  }),
);

examsRouter.patch(
  '/shifts/:shiftId',
  asyncHandler(async (request, response) => {
    const shiftId = id(request.params.shiftId, 'shiftId');
    const current = await db().collection('examShiftSchedules').findOne({ _id: shiftId });
    if (!current) return response.status(404).json({ message: 'Exam shift was not found.' });
    const parsed = examShiftSchema.parse({ ...serialize(current), ...request.body });
    const duplicate = await db()
      .collection('examShiftSchedules')
      .findOne({
        examScheduleId: id(parsed.examScheduleId, 'examScheduleId'),
        shiftSerial: parsed.shiftSerial,
      });
    if (duplicate && String(duplicate._id) !== String(shiftId))
      return response.status(409).json({
        message: 'This shift serial already exists for the selected exam schedule.',
      });
    const document = { ...(await resolveShift(parsed)), updatedAt: new Date() };
    await db().collection('examShiftSchedules').updateOne({ _id: shiftId }, { $set: document });
    response.json({
      item: serialize(await db().collection('examShiftSchedules').findOne({ _id: shiftId })),
    });
  }),
);

examsRouter.delete(
  '/shifts/:shiftId',
  asyncHandler(async (request, response) => {
    const shiftId = id(request.params.shiftId, 'shiftId');
    if (await db().collection('examSubjectSchedules').findOne({ shiftId }))
      return response.status(409).json({
        message: 'Remove the scheduled subjects using this shift before deleting it.',
      });
    const result = await db().collection('examShiftSchedules').deleteOne({ _id: shiftId });
    if (!result.deletedCount)
      return response.status(404).json({ message: 'Exam shift was not found.' });
    response.json({ deleted: true });
  }),
);

examsRouter.get(
  '/subject-options',
  asyncHandler(async (request, response) => {
    const scopeSchema = examSubjectScheduleSchema.pick({
      academicSessionId: true,
      universityId: true,
      collegeId: true,
      departmentId: true,
      levelId: true,
      courseId: true,
      semester: true,
    });
    const data = scopeSchema.parse(request.query);
    const [session, university, college, department, level, course] = await Promise.all([
      masterValue(data.academicSessionId, 'academic', 'academic session'),
      masterValue(data.universityId, 'university', 'university'),
      masterValue(data.collegeId, 'college', 'college'),
      masterValue(data.departmentId, 'department', 'department'),
      masterValue(data.levelId, 'level', 'level'),
      masterValue(data.courseId, 'course', 'course'),
    ]);
    if (String(college.parentId || '') !== String(university._id))
      return response.status(400).json({
        message: 'The selected college does not belong to this university.',
      });
    const scope = {
      academicSessionId: session._id,
      academicSession: session.name,
      universityId: university._id,
      collegeId: college._id,
      departmentId: department._id,
      levelId: level._id,
      courseId: course._id,
      semester: data.semester,
    };
    const subjects = await db()
      .collection('subjects')
      .find({ isActive: true, semester: { $in: [0, data.semester] } })
      .sort({ name: 1, code: 1 })
      .limit(1000)
      .toArray();
    response.json({
      items: subjects.filter((subject) => subjectMatchesScope(subject, scope)).map(serialize),
    });
  }),
);

examsRouter.get(
  '/subject-schedules',
  asyncHandler(async (_request, response) => {
    const items = await db()
      .collection('examSubjectSchedules')
      .find({})
      .sort({ examDate: -1, examScheduleCaption: 1, courseName: 1, subjectName: 1 })
      .toArray();
    response.json({ items: items.map(serialize) });
  }),
);

examsRouter.get(
  '/eligibility',
  asyncHandler(async (request, response) => {
    const subjectScheduleId = id(
      z.string().trim().min(1).parse(request.query.subjectScheduleId),
      'subjectScheduleId',
    );
    const schedule = await db()
      .collection('examSubjectSchedules')
      .findOne({ _id: subjectScheduleId, isActive: true });
    if (!schedule)
      return response.status(404).json({ message: 'Active subject schedule was not found.' });
    const students = await db()
      .collection('admissions')
      .find({
        status: 'approved',
        isActive: true,
        academicSession: schedule.academicSession,
        universityId: schedule.universityId,
        collegeId: schedule.collegeId,
        courseId: schedule.courseId,
        currentSemester: schedule.semester,
      })
      .sort({ studentName: 1, studentId: 1 })
      .limit(5000)
      .toArray();
    const studentAdmissionIds = students.map((student) => student._id);
    const [registrations, ledgers, backlogs] = studentAdmissionIds.length
      ? await Promise.all([
          db()
            .collection('studentSemesterRegistrations')
            .find({
              studentAdmissionId: { $in: studentAdmissionIds },
              academicSession: schedule.academicSession,
              semester: schedule.semester,
              status: 'registered',
            })
            .toArray(),
          db()
            .collection('studentFeeLedgers')
            .find({ studentAdmissionId: { $in: studentAdmissionIds }, status: 'active' })
            .toArray(),
          db()
            .collection('studentBacklogs')
            .find({
              studentAdmissionId: { $in: studentAdmissionIds },
              status: 'active',
              isActive: true,
            })
            .toArray(),
        ])
      : [[], [], []];
    const registrationByStudent = new Map(
      registrations.map((registration) => [String(registration.studentAdmissionId), registration]),
    );
    const balanceByStudent = new Map();
    for (const ledger of ledgers) {
      if (ledger.visibilityStatus === 'hidden') continue;
      const key = String(ledger.studentAdmissionId);
      balanceByStudent.set(
        key,
        Number(balanceByStudent.get(key) || 0) + Math.max(0, Number(ledger.balanceAmount || 0)),
      );
    }
    const backlogsByStudent = new Map();
    for (const backlog of backlogs) {
      const key = String(backlog.studentAdmissionId);
      backlogsByStudent.set(key, Number(backlogsByStudent.get(key) || 0) + 1);
    }
    const items = students.map((student) => {
      const key = String(student._id);
      const registration = registrationByStudent.get(key);
      const hasSubject = Boolean(
        registration?.subjectIds?.some(
          (subjectId) => String(subjectId) === String(schedule.subjectId),
        ),
      );
      const outstandingBalance = Number(balanceByStudent.get(key) || 0);
      const backlogCount = Number(backlogsByStudent.get(key) || 0);
      const decision = examEligibilityDecision({
        hasRegistration: Boolean(registration),
        hasSubject,
        outstandingBalance,
        backlogCount,
      });
      return serialize({
        studentAdmissionId: student._id,
        studentId: student.studentId || '',
        studentName: student.studentName || '',
        courseName: student.courseName || schedule.courseName,
        academicSession: schedule.academicSession,
        semester: schedule.semester,
        semesterRegistered: Boolean(registration),
        subjectAssigned: hasSubject,
        outstandingBalance,
        backlogCount,
        ...decision,
      });
    });
    response.json({
      schedule: serialize(schedule),
      items,
      summary: {
        total: items.length,
        eligible: items.filter((item) => item.eligible).length,
        ineligible: items.filter((item) => !item.eligible).length,
      },
    });
  }),
);

async function subjectScheduleConflict(data, excludedId = null) {
  const collection = db().collection('examSubjectSchedules');
  const [subjectDuplicate, slotDuplicate] = await Promise.all([
    collection.findOne({
      examScheduleId: id(data.examScheduleId, 'examScheduleId'),
      courseId: id(data.courseId, 'courseId'),
      semester: data.semester,
      subjectId: id(data.subjectId, 'subjectId'),
    }),
    collection.findOne({
      examScheduleId: id(data.examScheduleId, 'examScheduleId'),
      courseId: id(data.courseId, 'courseId'),
      semester: data.semester,
      examDate: data.examDate,
      shiftId: id(data.shiftId, 'shiftId'),
    }),
  ]);
  const different = (item) => item && String(item._id) !== String(excludedId || '');
  if (different(subjectDuplicate)) return 'This subject is already scheduled for the course.';
  if (different(slotDuplicate))
    return 'Another subject is already scheduled for this course, date and shift.';
  return '';
}

examsRouter.post(
  '/subject-schedules/import',
  upload.single('file'),
  asyncHandler(async (request, response) => {
    if (!request.file?.originalname.toLowerCase().endsWith('.csv'))
      return response.status(400).json({ message: 'Choose a CSV file.' });
    const workbook = new ExcelJS.Workbook();
    await workbook.csv.read(Readable.from(request.file.buffer));
    const sheet = workbook.worksheets[0];
    if (!sheet) return response.status(400).json({ message: 'The CSV file has no rows.' });
    const requiredHeaders = [
      'academicsession',
      'university',
      'college',
      'examschedule',
      'department',
      'level',
      'course',
      'semester',
      'subjectcode',
      'examdate',
      'shiftserial',
    ];
    const headers = sheet.getRow(1).values.map(normalizedImportValue);
    const column = (name) => headers.indexOf(name);
    const missingHeaders = requiredHeaders.filter((name) => column(name) < 0);
    if (missingHeaders.length)
      return response.status(400).json({
        message: `Missing CSV columns: ${missingHeaders.join(', ')}. Download the current template and try again.`,
      });
    const rows = [];
    sheet.eachRow((row, rowNumber) => {
      if (rowNumber === 1) return;
      const value = (name) => String(row.getCell(column(name)).text || '').trim();
      if (!requiredHeaders.some((name) => value(name))) return;
      rows.push({
        rowNumber,
        academicSession: value('academicsession'),
        university: value('university'),
        college: value('college'),
        examSchedule: value('examschedule'),
        department: value('department'),
        level: value('level'),
        course: value('course'),
        semester: Number(value('semester')),
        subjectCode: value('subjectcode'),
        examDate: value('examdate'),
        shiftSerial: Number(value('shiftserial')),
        isActive: column('isactive') < 0 ? true : importActiveValue(value('isactive')),
      });
    });
    if (!rows.length) return response.status(400).json({ message: 'The CSV has no data rows.' });
    if (rows.length > 1000)
      return response.status(400).json({ message: 'Upload at most 1,000 schedules at a time.' });
    const [masters, schedules, shifts, subjects] = await Promise.all([
      db()
        .collection('masterValues')
        .find({
          typeSlug: {
            $in: ['academic', 'university', 'college', 'department', 'level', 'course'],
          },
          isActive: true,
        })
        .toArray(),
      db().collection('examSchedules').find({ isActive: true }).toArray(),
      db().collection('examShiftSchedules').find({ isActive: true }).toArray(),
      db().collection('subjects').find({ isActive: true }).toArray(),
    ]);
    const errors = [];
    let imported = 0;
    for (const row of rows) {
      try {
        const session = findImportMaster(masters, 'academic', row.academicSession);
        const university = findImportMaster(masters, 'university', row.university);
        const college = findImportMaster(masters, 'college', row.college, university?._id);
        const department = findImportMaster(masters, 'department', row.department, college?._id);
        const level = findImportMaster(masters, 'level', row.level, department?._id);
        const course = findImportMaster(masters, 'course', row.course, level?._id);
        if (!session) throw new Error('Academic session was not found in Master Data.');
        if (!university) throw new Error('University was not found in Master Data.');
        if (!college) throw new Error('College was not found under the selected university.');
        if (!department) throw new Error('Department was not found under the selected college.');
        if (!level) throw new Error('Level was not found under the selected department.');
        if (!course) throw new Error('Course was not found under the selected level.');
        if (!Number.isInteger(row.semester) || row.semester < 1 || row.semester > 20)
          throw new Error('Semester must be a number from 1 to 20.');
        if (!validIsoDate(row.examDate)) throw new Error('Exam date must use YYYY-MM-DD format.');
        const examSchedule = schedules.find(
          (item) =>
            String(item.academicSessionId) === String(session._id) &&
            String(item.universityId) === String(university._id) &&
            String(item.collegeId) === String(college._id) &&
            normalizedImportValue(item.caption) === normalizedImportValue(row.examSchedule),
        );
        if (!examSchedule) throw new Error('Matching active exam schedule was not found.');
        const shift = shifts.find(
          (item) =>
            String(item.examScheduleId) === String(examSchedule._id) &&
            Number(item.shiftSerial) === row.shiftSerial,
        );
        if (!shift) throw new Error('Shift serial was not found in the selected exam schedule.');
        const scope = {
          academicSessionId: session._id,
          academicSession: session.name,
          universityId: university._id,
          collegeId: college._id,
          departmentId: department._id,
          levelId: level._id,
          courseId: course._id,
          semester: row.semester,
        };
        const subject = subjects.find(
          (item) =>
            normalizedImportValue(item.code) === normalizedImportValue(row.subjectCode) &&
            subjectMatchesScope(item, scope),
        );
        if (!subject) throw new Error('Subject code is not mapped to this academic scope.');
        const parsed = examSubjectScheduleSchema.parse({
          academicSessionId: String(session._id),
          universityId: String(university._id),
          collegeId: String(college._id),
          examScheduleId: String(examSchedule._id),
          departmentId: String(department._id),
          levelId: String(level._id),
          courseId: String(course._id),
          semester: row.semester,
          subjectId: String(subject._id),
          examDate: row.examDate,
          shiftId: String(shift._id),
          isActive: row.isActive,
        });
        const conflict = await subjectScheduleConflict(parsed);
        if (conflict) throw new Error(conflict);
        const now = new Date();
        await db()
          .collection('examSubjectSchedules')
          .insertOne({
            ...(await resolveSubjectSchedule(parsed)),
            createdAt: now,
            updatedAt: now,
            createdBy: id(request.admin._id),
          });
        imported += 1;
      } catch (error) {
        errors.push({ row: row.rowNumber, message: error.message || 'The row is invalid.' });
      }
    }
    response.json({ imported, failed: errors.length, errors });
  }),
);

examsRouter.post(
  '/subject-schedules',
  asyncHandler(async (request, response) => {
    const parsed = examSubjectScheduleSchema.parse(request.body);
    const conflict = await subjectScheduleConflict(parsed);
    if (conflict) return response.status(409).json({ message: conflict });
    const now = new Date();
    const document = {
      ...(await resolveSubjectSchedule(parsed)),
      createdAt: now,
      updatedAt: now,
      createdBy: id(request.admin._id),
    };
    const result = await db().collection('examSubjectSchedules').insertOne(document);
    response.status(201).json({ item: serialize({ ...document, _id: result.insertedId }) });
  }),
);

examsRouter.patch(
  '/subject-schedules/:itemId',
  asyncHandler(async (request, response) => {
    const itemId = id(request.params.itemId, 'itemId');
    const current = await db().collection('examSubjectSchedules').findOne({ _id: itemId });
    if (!current) return response.status(404).json({ message: 'Scheduled subject was not found.' });
    const parsed = examSubjectScheduleSchema.parse({ ...serialize(current), ...request.body });
    const conflict = await subjectScheduleConflict(parsed, itemId);
    if (conflict) return response.status(409).json({ message: conflict });
    const document = { ...(await resolveSubjectSchedule(parsed)), updatedAt: new Date() };
    await db().collection('examSubjectSchedules').updateOne({ _id: itemId }, { $set: document });
    response.json({
      item: serialize(await db().collection('examSubjectSchedules').findOne({ _id: itemId })),
    });
  }),
);

examsRouter.delete(
  '/subject-schedules/:itemId',
  asyncHandler(async (request, response) => {
    const result = await db()
      .collection('examSubjectSchedules')
      .deleteOne({ _id: id(request.params.itemId, 'itemId') });
    if (!result.deletedCount)
      return response.status(404).json({ message: 'Scheduled subject was not found.' });
    response.json({ deleted: true });
  }),
);
