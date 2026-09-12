import { Buffer } from 'node:buffer';
import express from 'express';
import PDFDocument from 'pdfkit';
import { z } from 'zod';
import { db, id, serialize } from '../db.js';
import { asyncHandler } from '../lib/async-handler.js';
import { pageResult, pagination } from '../lib/pagination.js';

export const academicsRouter = express.Router();
export const studentAcademicsRouter = express.Router();

const objectIdString = z.string().trim().min(1);
const scopeSchema = z.object({
  academicSession: z.string().trim().min(4).max(30),
  universityId: objectIdString,
  universityName: z.string().trim().min(1).max(160),
  collegeId: objectIdString,
  collegeName: z.string().trim().min(1).max(160),
  semester: z.coerce.number().int().min(1).max(20),
});
const groupSchema = scopeSchema.extend({
  name: z.string().trim().min(1).max(120),
  levelId: objectIdString.optional().nullable(),
  levelName: z.string().trim().max(120).optional().default(''),
  departmentIds: z.array(objectIdString).min(1),
  departmentNames: z.array(z.string().trim().min(1)).min(1),
  courseIds: z.array(objectIdString).default([]),
  courseNames: z.array(z.string().trim().min(1)).default([]),
  branchIds: z.array(objectIdString).default([]),
  branchNames: z.array(z.string().trim().min(1)).default([]),
  isActive: z.boolean().optional().default(true),
});
const sectionSchema = z.object({
  name: z.string().trim().min(1).max(80),
  academicSession: z.string().trim().min(4).max(30),
  semester: z.coerce.number().int().min(1).max(20),
  groupIds: z.array(objectIdString).min(1),
  isActive: z.boolean().optional().default(true),
});
const setSchema = z.object({
  name: z.string().trim().min(1).max(80),
  academicSession: z.string().trim().min(4).max(30),
  semester: z.coerce.number().int().min(1).max(20),
  groupId: objectIdString,
  sectionId: objectIdString,
  isActive: z.boolean().optional().default(true),
});
const subjectMarkPartSchema = z.object({
  key: z.enum(['internal', 'external', 'midTerm', 'practical', 'internalPractical']),
  label: z.string().trim().max(80),
  maxMarks: z.coerce.number().min(0).max(10000).default(0),
  passMarksEnabled: z.boolean().default(false),
  passMarks: z.coerce.number().min(0).max(10000).default(0),
});
const subjectSchema = z.object({
  name: z.string().trim().max(180).optional().default(''),
  hindiName: z.string().trim().max(180).optional().default(''),
  code: z.string().trim().max(50).optional().default(''),
  academicSessionId: z.string().trim().optional().default(''),
  academicSession: z.string().trim().max(30).optional().default(''),
  universityId: z.string().trim().optional().default(''),
  universityName: z.string().trim().max(160).optional().default(''),
  collegeId: z.string().trim().optional().default(''),
  collegeName: z.string().trim().max(160).optional().default(''),
  levelId: z.string().trim().optional().default(''),
  levelName: z.string().trim().max(120).optional().default(''),
  semester: z.coerce.number().int().min(0).max(20).optional().default(0),
  departmentIds: z.array(objectIdString).default([]),
  departmentNames: z.array(z.string().trim().min(1)).default([]),
  courseIds: z.array(objectIdString).default([]),
  courseNames: z.array(z.string().trim().min(1)).default([]),
  branchIds: z.array(objectIdString).default([]),
  branchNames: z.array(z.string().trim().min(1)).default([]),
  markType: z.string().trim().max(80).optional().default(''),
  subjectType: z.enum(['', 'theory', 'practical', 'tutorial', 'project']).default(''),
  subjectOption: z.enum(['', 'required', 'elective']).default(''),
  evaluationType: z.enum(['', 'marks', 'grade']).default(''),
  credits: z.coerce.number().min(0).max(100).default(0),
  subjectCounter: z.coerce.number().int().min(0).max(100).default(0),
  lectureHours: z.coerce.number().min(0).max(100).default(0),
  tutorialHours: z.coerce.number().min(0).max(100).default(0),
  labHours: z.coerce.number().min(0).max(100).default(0),
  maxMarks: z.coerce.number().min(0).max(10000).default(0),
  passMarks: z.coerce.number().min(0).max(10000).default(0),
  internalMarks: z.coerce.number().min(0).max(10000).default(0),
  externalMarks: z.coerce.number().min(0).max(10000).default(0),
  midTermMarks: z.coerce.number().min(0).max(10000).default(0),
  alternativeGrade: z.string().trim().max(80).optional().default(''),
  alternativeGradePoint: z.coerce.number().min(0).max(100).default(0),
  alternativeSubjectCredit: z.coerce.number().min(0).max(100).default(0),
  splitType: z
    .enum([
      '',
      'internal_external',
      'internal_external_midterm',
      'internal_external_practical',
      'internal_external_midterm_practical',
    ])
    .default(''),
  splitCategory: z.string().trim().max(100).optional().default(''),
  markSplits: z.array(subjectMarkPartSchema).default([]),
  flags: z.record(z.string(), z.boolean()).optional().default({}),
  visibility: z.record(z.string(), z.boolean()).optional().default({}),
  isActive: z.boolean().optional().default(true),
});
const facultySchema = z.object({
  name: z.string().trim().min(1).max(160),
  code: z.string().trim().min(1).max(40),
  email: z.string().email(),
  universityId: objectIdString,
  collegeId: objectIdString,
  departmentIds: z.array(objectIdString).min(1),
  subjectIds: z.array(objectIdString).default([]),
  weeklyLimit: z.coerce.number().min(1).max(100).default(40),
  availableDays: z
    .array(z.string())
    .default(['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday']),
  isActive: z.boolean().optional().default(true),
});
const roomSchema = z.object({
  name: z.string().trim().min(1).max(120),
  code: z.string().trim().min(1).max(40),
  universityId: objectIdString,
  collegeId: objectIdString,
  building: z.string().trim().max(120).default(''),
  floor: z.string().trim().max(80).default(''),
  roomType: z.enum(['classroom', 'lab', 'auditorium']),
  capacity: z.coerce.number().int().min(1).max(10000),
  subjectIds: z.array(objectIdString).default([]),
  isActive: z.boolean().optional().default(true),
});
const timetableMasterSchema = z.object({
  name: z.string().trim().min(1).max(160),
  academicSession: z.string().trim().min(4).max(30),
  universityId: objectIdString,
  universityName: z.string().trim().optional().default(''),
  collegeId: objectIdString,
  collegeName: z.string().trim().optional().default(''),
  isActive: z.boolean().optional().default(true),
});
const timetableStructureSchema = z.object({
  timetableMasterId: objectIdString,
  name: z.string().trim().min(1).max(160),
  periodCount: z.coerce.number().int().min(1).max(30),
  workingDays: z
    .array(z.enum(['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']))
    .min(1),
  isActive: z.boolean().optional().default(true),
});
const timetablePeriodSchema = z.object({
  timetableMasterId: objectIdString,
  timetableStructureId: objectIdString,
  periodNumber: z.coerce.number().int().min(1).max(30),
  periodType: z.enum(['lecture', 'break']),
  startTime: z.string().regex(/^([01]\d|2[0-3]):[0-5]\d$/),
  durationMinutes: z.coerce
    .number()
    .int()
    .min(5)
    .max(200)
    .refine((value) => value % 5 === 0, 'Duration must use 5-minute steps.'),
  isConfigured: z.boolean().optional().default(true),
});
const allocationSchema = z.object({
  studentAdmissionId: objectIdString,
  groupId: objectIdString,
  sectionId: objectIdString,
  setId: objectIdString,
  academicSession: z.string().trim().min(4).max(30),
  semester: z.coerce.number().int().min(1).max(20),
});
const groupSubjectSchema = z.object({
  groupId: objectIdString,
  subjectIds: z.array(objectIdString).min(1),
  academicSession: z.string().trim().min(4).max(30),
  semester: z.coerce.number().int().min(1).max(20),
  requirement: z.enum(['required', 'elective']).default('required'),
});
const timetableAudienceSchema = z.object({
  groupId: objectIdString,
  sectionIds: z.array(objectIdString).min(1),
  setIds: z.array(objectIdString).default([]),
});
const timetableSchema = z.object({
  timetableMasterId: objectIdString,
  timetableStructureId: objectIdString,
  timetablePeriodId: objectIdString,
  academicSession: z.string().trim().min(4).max(30),
  semester: z.coerce.number().int().min(1).max(20),
  groupId: objectIdString,
  sectionId: objectIdString,
  audiences: z.array(timetableAudienceSchema).optional().default([]),
  setIds: z.array(objectIdString).default([]),
  subjectId: z.string().trim().optional().default(''),
  facultyId: z.string().trim().optional().default(''),
  roomId: z.string().trim().optional().default(''),
  day: z.enum(['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']),
  classType: z.enum(['lecture', 'tutorial', 'lab']),
  effectiveFrom: z.coerce.date().optional().nullable(),
  effectiveTo: z.coerce.date().optional().nullable(),
  isActive: z.boolean().optional().default(true),
});

const resources = Object.freeze({
  groups: 'academicGroups',
  sections: 'academicSections',
  sets: 'academicSets',
  subjects: 'subjects',
  faculties: 'faculties',
  rooms: 'academicRooms',
  allocations: 'studentAcademicAssignments',
  'group-subjects': 'groupSubjectAssignments',
  timetables: 'timetableEntries',
  'timetable-masters': 'timetableMasters',
  'timetable-structures': 'timetableStructures',
  'timetable-periods': 'timetablePeriods',
});
const schemas = {
  groups: groupSchema,
  sections: sectionSchema,
  sets: setSchema,
  subjects: subjectSchema,
  faculties: facultySchema,
  rooms: roomSchema,
  'timetable-masters': timetableMasterSchema,
  'timetable-structures': timetableStructureSchema,
  'timetable-periods': timetablePeriodSchema,
};
const objectIdFields = new Set([
  'universityId',
  'collegeId',
  'academicSessionId',
  'levelId',
  'groupId',
  'sectionId',
  'setId',
  'subjectId',
  'facultyId',
  'roomId',
  'studentAdmissionId',
  'timetableMasterId',
  'timetableStructureId',
  'timetablePeriodId',
]);
const arrayIdFields = new Set([
  'departmentIds',
  'courseIds',
  'branchIds',
  'groupIds',
  'subjectIds',
  'setIds',
  'timetablePeriodIds',
]);

function documentData(data) {
  return Object.fromEntries(
    Object.entries(data).map(([key, value]) => [
      key,
      objectIdFields.has(key) && value
        ? id(value, key)
        : arrayIdFields.has(key)
          ? value.map((item) => id(item, key))
          : value,
    ]),
  );
}
function resourceCollection(value) {
  const collection = resources[value];
  if (!collection) {
    const error = new Error('Academic resource was not found.');
    error.status = 404;
    throw error;
  }
  return collection;
}
function duplicateError(label) {
  const error = new Error(`${label} already exists in this academic scope.`);
  error.status = 409;
  return error;
}
const escapeRegex = (value) => String(value).replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
function overlap(leftStart, leftEnd, rightStart, rightEnd) {
  return leftStart < rightEnd && rightStart < leftEnd;
}
function endTimeFor(startTime, durationMinutes) {
  const [hours, minutes] = startTime.split(':').map(Number);
  const total = hours * 60 + minutes + Number(durationMinutes);
  if (total >= 24 * 60) return null;
  return `${String(Math.floor(total / 60)).padStart(2, '0')}:${String(total % 60).padStart(2, '0')}`;
}
async function activeMaster(masterId, typeSlug) {
  return db()
    .collection('masterValues')
    .findOne({ _id: id(masterId), typeSlug, isActive: true });
}
async function masterNames(values, typeSlug) {
  const records = await Promise.all(values.map((value) => activeMaster(value, typeSlug)));
  if (records.some((value) => !value)) {
    const error = new Error(`One or more selected ${typeSlug} values are unavailable.`);
    error.status = 400;
    throw error;
  }
  return records.map((value) => value.name);
}
async function resolveAcademicMasterData(data) {
  const output = { ...data };
  if (data.academicSessionId) {
    const value = await activeMaster(data.academicSessionId, 'academic');
    if (!value)
      throw Object.assign(new Error('Selected academic session is unavailable.'), { status: 400 });
    output.academicSession = value.name;
  }
  if (data.universityId) {
    const value = await activeMaster(data.universityId, 'university');
    if (!value)
      throw Object.assign(new Error('Selected university is unavailable.'), { status: 400 });
    output.universityName = value.name;
  }
  if (data.collegeId) {
    const value = await activeMaster(data.collegeId, 'college');
    if (!value || (data.universityId && String(value.parentId) !== data.universityId))
      throw Object.assign(new Error('Selected college does not belong to this university.'), {
        status: 400,
      });
    output.collegeName = value.name;
  }
  for (const [idsField, namesField, typeSlug] of [
    ['departmentIds', 'departmentNames', 'department'],
    ['courseIds', 'courseNames', 'course'],
    ['branchIds', 'branchNames', 'branch'],
  ])
    if (data[idsField]?.length) output[namesField] = await masterNames(data[idsField], typeSlug);
  if (data.levelId) {
    const value = await activeMaster(data.levelId, 'level');
    if (!value) throw Object.assign(new Error('Selected level is unavailable.'), { status: 400 });
    output.levelName = value.name;
  }
  return output;
}

academicsRouter.get(
  '/bootstrap',
  asyncHandler(async (request, response) => {
    const [
      masters,
      students,
      groups,
      sections,
      sets,
      subjects,
      faculties,
      rooms,
      timetableMasters,
      timetableStructures,
      timetablePeriods,
      groupSubjects,
    ] = await Promise.all([
      db()
        .collection('masterValues')
        .find({ isActive: true })
        .sort({ typeSlug: 1, name: 1 })
        .toArray(),
      db()
        .collection('admissions')
        .find({ status: 'approved', isActive: true })
        .sort({ studentName: 1 })
        .toArray(),
      ...[
        'academicGroups',
        'academicSections',
        'academicSets',
        'subjects',
        'faculties',
        'academicRooms',
        'timetableMasters',
        'timetableStructures',
        'timetablePeriods',
      ].map((name) => db().collection(name).find({}).sort({ name: 1 }).toArray()),
      db().collection('groupSubjectAssignments').find({ status: 'active' }).toArray(),
    ]);
    response.json({
      masters: masters.map(serialize),
      students: students.map((student) =>
        serialize({
          _id: student._id,
          studentId: student.studentId,
          studentName: student.studentName,
          academicSession: student.academicSession,
          currentSemester: student.currentSemester,
          courseId: student.courseId,
          courseName: student.courseName,
          departmentName: student.departmentName,
          collegeName: student.collegeName,
        }),
      ),
      groups: groups.map(serialize),
      sections: sections.map(serialize),
      sets: sets.map(serialize),
      subjects: subjects.map(serialize),
      faculties: faculties.map(serialize),
      rooms: rooms.map(serialize),
      timetableMasters: timetableMasters.map(serialize),
      timetableStructures: timetableStructures.map(serialize),
      timetablePeriods: timetablePeriods.map(serialize),
      groupSubjects: groupSubjects.map(serialize),
    });
  }),
);

academicsRouter.get(
  '/subject-assignments/subjects',
  asyncHandler(async (request, response) => {
    const { page, limit, skip } = pagination(request.query);
    const academicSession = String(request.query.academicSession || '').trim();
    const semester = Number(request.query.semester || 0);
    const groupId = request.query.groupId ? id(String(request.query.groupId), 'groupId') : null;
    const filter = { isActive: true };
    if (academicSession) filter.academicSession = academicSession;
    if (semester) filter.semester = semester;
    const subjectType = String(request.query.subjectType || '').trim();
    if (subjectType === 'elective') filter.subjectOption = { $regex: '^elective$', $options: 'i' };
    else if (subjectType)
      filter.subjectType = { $regex: `^${escapeRegex(subjectType)}`, $options: 'i' };
    const search = String(request.query.search || '').trim();
    if (search) {
      const match = { $regex: escapeRegex(search), $options: 'i' };
      filter.$or = [{ name: match }, { code: match }, { departmentNames: match }];
    }
    const [subjects, total] = await Promise.all([
      db()
        .collection('subjects')
        .find(filter)
        .sort({ name: 1, code: 1 })
        .skip(skip)
        .limit(limit)
        .toArray(),
      db().collection('subjects').countDocuments(filter),
    ]);
    const assignments =
      groupId && subjects.length
        ? await db()
            .collection('groupSubjectAssignments')
            .find({
              groupId,
              subjectId: { $in: subjects.map((subject) => subject._id) },
              academicSession,
              semester,
              status: 'active',
            })
            .toArray()
        : [];
    const assignmentBySubject = new Map(
      assignments.map((assignment) => [String(assignment.subjectId), assignment]),
    );
    response.json(
      pageResult(
        subjects.map((subject) => {
          const assignment = assignmentBySubject.get(String(subject._id));
          return serialize({
            ...subject,
            departmentName: subject.departmentNames?.join(', ') || '—',
            assigned: Boolean(assignment),
            assignedRequirement: assignment?.requirement || null,
          });
        }),
        total,
        page,
        limit,
      ),
    );
  }),
);

academicsRouter.get(
  '/:resource',
  asyncHandler(async (request, response) => {
    const collection = resourceCollection(request.params.resource);
    const filter = {};
    const requestedGroupId = String(request.query.groupId || '');
    const requestedSectionId = String(request.query.sectionId || '');
    for (const field of [
      'academicSession',
      'semester',
      'day',
      'isActive',
      'groupId',
      'sectionId',
      'timetableMasterId',
      'timetableStructureId',
      'status',
    ])
      if (
        request.query[field] !== undefined &&
        request.query[field] !== '' &&
        !(
          request.params.resource === 'timetables' &&
          (field === 'groupId' || field === 'sectionId')
        )
      )
        filter[field] =
          field === 'semester'
            ? Number(request.query[field])
            : field === 'isActive'
              ? request.query[field] === 'true'
              : objectIdFields.has(field)
                ? id(String(request.query[field]), field)
                : String(request.query[field]);
    let items = await db()
      .collection(collection)
      .find(filter)
      .sort({ academicSession: -1, semester: 1, name: 1, day: 1, startTime: 1 })
      .limit(1000)
      .toArray();
    if (request.params.resource === 'timetables' && requestedGroupId)
      items = items.filter((entry) =>
        entryAudiences(entry).some(
          (audience) =>
            String(audience.groupId) === requestedGroupId &&
            (!requestedSectionId || audience.sectionIds.map(String).includes(requestedSectionId)),
        ),
      );
    response.json({ items: items.map(serialize) });
  }),
);

academicsRouter.post(
  '/:resource',
  asyncHandler(async (request, response, next) => {
    const type = request.params.resource;
    if (!schemas[type]) return next();
    let data = schemas[type].parse(request.body);
    if (type === 'subjects') {
      const marksError = validateSubjectMarks(data);
      if (marksError) return response.status(400).json({ message: marksError });
    }
    data = await resolveAcademicMasterData(data);
    let timetableMaster = null;
    if (type === 'timetable-structures' || type === 'timetable-periods') {
      timetableMaster = await db()
        .collection('timetableMasters')
        .findOne({ _id: id(data.timetableMasterId), isActive: true });
      if (!timetableMaster)
        return response.status(400).json({ message: 'Active timetable master was not found.' });
      data = {
        ...data,
        academicSession: timetableMaster.academicSession,
        universityId: timetableMaster.universityId,
        universityName: timetableMaster.universityName,
        collegeId: timetableMaster.collegeId,
        collegeName: timetableMaster.collegeName,
      };
    }
    if (type === 'timetable-periods') {
      const structure = await db()
        .collection('timetableStructures')
        .findOne({
          _id: id(data.timetableStructureId),
          timetableMasterId: id(data.timetableMasterId),
          isActive: true,
        });
      if (!structure || data.periodNumber > Number(structure.periodCount))
        return response
          .status(400)
          .json({ message: 'Period does not belong to the selected timetable structure.' });
      const endTime = endTimeFor(data.startTime, data.durationMinutes);
      if (!endTime)
        return response.status(400).json({ message: 'Period cannot continue beyond midnight.' });
      data.endTime = endTime;
    }
    const collection = resourceCollection(type);
    const duplicateFilter =
      type === 'timetable-structures'
        ? { timetableMasterId: id(data.timetableMasterId), name: data.name }
        : type === 'timetable-periods'
          ? { timetableStructureId: id(data.timetableStructureId), periodNumber: data.periodNumber }
          : type === 'sections'
            ? { name: data.name, academicSession: data.academicSession, semester: data.semester }
            : type === 'sets'
              ? {
                  name: data.name,
                  academicSession: data.academicSession,
                  semester: data.semester,
                  groupId: id(data.groupId),
                  sectionId: id(data.sectionId),
                }
              : type === 'groups' || type === 'timetable-masters'
                ? {
                    name: data.name,
                    ...(data.academicSession ? { academicSession: data.academicSession } : {}),
                    ...(data.collegeId ? { collegeId: id(data.collegeId) } : {}),
                  }
                : {
                    code: data.code,
                    ...(data.academicSession ? { academicSession: data.academicSession } : {}),
                    ...(data.collegeId ? { collegeId: id(data.collegeId) } : {}),
                  };
    if (
      !(type === 'subjects' && !data.code) &&
      (await db().collection(collection).findOne(duplicateFilter))
    )
      throw duplicateError(data.name || data.code || 'Record');
    if (type === 'subjects' && !data.code) data.code = null;
    if (type === 'sets') {
      const section = await db()
        .collection('academicSections')
        .findOne({
          _id: id(data.sectionId),
          academicSession: data.academicSession,
          semester: data.semester,
        });
      if (!section?.groupIds.some((value) => String(value) === data.groupId))
        return response
          .status(400)
          .json({ message: 'The selected section is not mapped to this group and semester.' });
    }
    const now = new Date();
    const document = {
      ...documentData(data),
      createdAt: now,
      updatedAt: now,
      createdBy: id(request.admin._id),
    };
    const result = await db().collection(collection).insertOne(document);
    if (type === 'timetable-structures') {
      for (let periodNumber = 1; periodNumber <= data.periodCount; periodNumber += 1)
        await db()
          .collection('timetablePeriods')
          .insertOne({
            timetableMasterId: id(data.timetableMasterId),
            timetableStructureId: result.insertedId,
            timetableName: timetableMaster.name,
            structureName: data.name,
            academicSession: timetableMaster.academicSession,
            periodNumber,
            periodType: null,
            startTime: null,
            endTime: null,
            durationMinutes: null,
            isConfigured: false,
            createdAt: now,
            updatedAt: now,
            createdBy: id(request.admin._id),
          });
    }
    response.status(201).json({ item: serialize({ ...document, _id: result.insertedId }) });
  }),
);

academicsRouter.patch(
  '/:resource/:itemId',
  asyncHandler(async (request, response) => {
    const type = request.params.resource;
    const schema =
      type === 'group-subjects'
        ? z.object({
            requirement: z.enum(['required', 'elective']).optional(),
            status: z.enum(['active', 'inactive']).optional(),
          })
        : schemas[type];
    if (!schema) return response.status(404).json({ message: 'Academic resource was not found.' });
    const collection = resourceCollection(type);
    const itemId = id(request.params.itemId, 'itemId');
    let data;
    if (type === 'timetable-periods') {
      const current = await db().collection(collection).findOne({ _id: itemId });
      if (!current)
        return response.status(404).json({ message: 'Timetable period was not found.' });
      if (request.body.clearConfiguration === true) {
        const inUse = await db()
          .collection('timetableEntries')
          .findOne({
            $or: [{ timetablePeriodId: itemId }, { timetablePeriodIds: itemId }],
          });
        if (inUse)
          return response.status(409).json({
            message: 'This period is already used in a timetable and cannot be cleared.',
          });
        await db()
          .collection(collection)
          .updateOne(
            { _id: itemId },
            {
              $set: {
                periodType: null,
                startTime: null,
                endTime: null,
                durationMinutes: null,
                isConfigured: false,
                updatedAt: new Date(),
              },
            },
          );
        return response.json({
          item: serialize(await db().collection(collection).findOne({ _id: itemId })),
        });
      }
      data = timetablePeriodSchema.parse({
        timetableMasterId: String(current.timetableMasterId),
        timetableStructureId: String(current.timetableStructureId),
        periodNumber: current.periodNumber,
        ...request.body,
      });
      const endTime = endTimeFor(data.startTime, data.durationMinutes);
      if (!endTime)
        return response.status(400).json({ message: 'Period cannot continue beyond midnight.' });
      const periods = await db()
        .collection('timetablePeriods')
        .find({ timetableStructureId: current.timetableStructureId, isConfigured: true })
        .toArray();
      const conflict = periods.find(
        (period) =>
          String(period._id) !== String(itemId) &&
          overlap(data.startTime, endTime, period.startTime, period.endTime),
      );
      if (conflict)
        return response
          .status(409)
          .json({ message: `This time overlaps Period ${conflict.periodNumber}.` });
      data = { ...data, endTime, isConfigured: true };
    } else {
      data = schema.partial().parse(request.body);
      if (type === 'subjects') {
        const marksError = validateSubjectMarks(data);
        if (marksError) return response.status(400).json({ message: marksError });
      }
      if (type === 'timetable-structures' && data.periodCount !== undefined) {
        const current = await db().collection(collection).findOne({ _id: itemId });
        if (Number(data.periodCount) !== Number(current?.periodCount))
          return response.status(409).json({
            message:
              'Period count cannot be changed after slots are generated. Create another structure instead.',
          });
      }
      data = await resolveAcademicMasterData(data);
      if (type === 'subjects' && data.code === '') data.code = null;
    }
    const result = await db()
      .collection(collection)
      .updateOne({ _id: itemId }, { $set: { ...documentData(data), updatedAt: new Date() } });
    if (!result.matchedCount)
      return response.status(404).json({ message: 'Record was not found.' });
    response.json({ item: serialize(await db().collection(collection).findOne({ _id: itemId })) });
  }),
);

function validateSubjectMarks(data) {
  const maxMarks = Number(data.maxMarks || 0);
  const passMarks = Number(data.passMarks || 0);
  if (maxMarks > 0 && passMarks > maxMarks)
    return 'Passing marks cannot be greater than maximum marks.';
  const parts = data.markSplits || [];
  for (const part of parts)
    if (part.passMarksEnabled && Number(part.passMarks || 0) > Number(part.maxMarks || 0))
      return `${part.label || 'Split'} passing marks cannot exceed its maximum marks.`;
  const splitTotal = parts.reduce((total, part) => total + Number(part.maxMarks || 0), 0);
  if (maxMarks > 0 && splitTotal > maxMarks)
    return 'The subject split total cannot be greater than maximum marks.';
  return '';
}

academicsRouter.delete(
  '/:resource/:itemId',
  asyncHandler(async (request, response) => {
    const type = request.params.resource;
    const collection = resourceCollection(type);
    const itemId = id(request.params.itemId, 'itemId');
    if (type === 'timetable-periods')
      return response.status(409).json({
        message: 'Generated period slots cannot be deleted. Reconfigure the slot instead.',
      });
    const referenceChecks = {
      'timetable-masters': [
        ['timetableStructures', 'timetableMasterId'],
        ['timetableEntries', 'timetableMasterId'],
      ],
      'timetable-structures': [['timetableEntries', 'timetableStructureId']],
      'timetable-periods': [['timetableEntries', 'timetablePeriodId']],
      groups: [
        ['academicSets', 'groupId'],
        ['studentAcademicAssignments', 'groupId'],
        ['groupSubjectAssignments', 'groupId'],
        ['timetableEntries', 'groupId'],
      ],
      sections: [
        ['academicSets', 'sectionId'],
        ['studentAcademicAssignments', 'sectionId'],
        ['timetableEntries', 'sectionId'],
      ],
      sets: [['studentAcademicAssignments', 'setId']],
      subjects: [
        ['groupSubjectAssignments', 'subjectId'],
        ['timetableEntries', 'subjectId'],
      ],
      faculties: [['timetableEntries', 'facultyId']],
      rooms: [['timetableEntries', 'roomId']],
      timetables: [['attendanceSessions', 'timetableEntryId']],
    };
    for (const [referenceCollection, field] of referenceChecks[type] || [])
      if (
        await db()
          .collection(referenceCollection)
          .findOne({ [field]: itemId })
      )
        return response.status(409).json({
          message: 'This record is already in use. Disable or remove its dependent mappings first.',
        });
    if (type === 'groups') {
      const sections = await db().collection('academicSections').find({}).toArray();
      if (
        sections.some((section) =>
          section.groupIds?.some((value) => String(value) === String(itemId)),
        )
      )
        return response
          .status(409)
          .json({ message: 'This group is mapped to one or more sections.' });
    }
    if (type === 'timetable-structures')
      await db().collection('timetablePeriods').deleteMany({ timetableStructureId: itemId });
    const result = await db().collection(collection).deleteOne({ _id: itemId });
    if (!result.deletedCount)
      return response.status(404).json({ message: 'Record was not found.' });
    response.json({ deleted: true });
  }),
);

async function validateAllocation(data) {
  const [student, group, section, set] = await Promise.all([
    db()
      .collection('admissions')
      .findOne({ _id: id(data.studentAdmissionId), status: 'approved', isActive: true }),
    db()
      .collection('academicGroups')
      .findOne({ _id: id(data.groupId), isActive: true }),
    db()
      .collection('academicSections')
      .findOne({ _id: id(data.sectionId), isActive: true }),
    db()
      .collection('academicSets')
      .findOne({ _id: id(data.setId), isActive: true }),
  ]);
  if (!student) return 'Approved active student was not found.';
  if (
    !group ||
    group.academicSession !== data.academicSession ||
    Number(group.semester) !== data.semester
  )
    return 'Group does not match the session and semester.';
  if (!section || !section.groupIds.some((value) => String(value) === String(group._id)))
    return 'Section is not mapped to the selected group.';
  if (
    !set ||
    String(set.groupId) !== String(group._id) ||
    String(set.sectionId) !== String(section._id)
  )
    return 'Set does not belong to the selected group and section.';
  if (student.academicSession && student.academicSession !== data.academicSession)
    return 'Student session does not match.';
  if (Number(student.currentSemester || 1) !== data.semester)
    return 'Student semester does not match.';
  if (
    group.courseIds.length &&
    student.courseId &&
    !group.courseIds.some((value) => String(value) === String(student.courseId))
  )
    return 'Student course is not included in this group.';
  return null;
}

academicsRouter.get(
  '/allocations/students',
  asyncHandler(async (request, response) => {
    const { page, limit, skip } = pagination(request.query);
    const academicSession = String(request.query.academicSession || '').trim();
    const semester = Number(request.query.semester || 0);
    const group = request.query.groupId
      ? await db()
          .collection('academicGroups')
          .findOne({ _id: id(String(request.query.groupId), 'groupId'), isActive: true })
      : null;
    const filter = { status: 'approved', isActive: true };
    if (academicSession) filter.academicSession = academicSession;
    if (semester) filter.currentSemester = semester;
    if (group?.courseIds?.length) filter.courseId = { $in: group.courseIds };
    const search = String(request.query.search || '').trim();
    if (search) {
      const match = { $regex: escapeRegex(search), $options: 'i' };
      filter.$or = [
        { studentName: match },
        { studentId: match },
        { applicationNumber: match },
        { courseName: match },
      ];
    }
    const [students, total] = await Promise.all([
      db()
        .collection('admissions')
        .find(filter)
        .project({ passwordHash: 0, accessKeyHash: 0, formSnapshot: 0, responses: 0 })
        .sort({ studentName: 1, studentId: 1 })
        .skip(skip)
        .limit(limit)
        .toArray(),
      db().collection('admissions').countDocuments(filter),
    ]);
    const assignments = students.length
      ? await db()
          .collection('studentAcademicAssignments')
          .find({
            studentAdmissionId: { $in: students.map((student) => student._id) },
            ...(academicSession ? { academicSession } : {}),
            ...(semester ? { semester } : {}),
            status: 'active',
          })
          .toArray()
      : [];
    const assignmentByStudent = new Map(
      assignments.map((assignment) => [String(assignment.studentAdmissionId), assignment]),
    );
    response.json(
      pageResult(
        students.map((student) => {
          const assignment = assignmentByStudent.get(String(student._id));
          return serialize({
            _id: student._id,
            studentName: student.studentName,
            studentId: student.studentId,
            applicationNumber: student.applicationNumber,
            courseName: student.courseName,
            currentAllocation: assignment
              ? `${assignment.groupName} · ${assignment.sectionName} · ${assignment.setName}`
              : '',
            validation: assignment ? 'warning' : 'ready',
          });
        }),
        total,
        page,
        limit,
      ),
    );
  }),
);

academicsRouter.post(
  '/allocations/resolve-students',
  asyncHandler(async (request, response) => {
    const data = z
      .object({ studentIds: z.array(z.string().trim().min(1)).min(1).max(5000) })
      .parse(request.body);
    const normalizedIds = [...new Set(data.studentIds.map((value) => value.toUpperCase()))];
    const students = await db()
      .collection('admissions')
      .find({ studentId: { $in: normalizedIds }, status: 'approved', isActive: true })
      .project({ _id: 1, studentName: 1, studentId: 1, applicationNumber: 1, courseName: 1 })
      .limit(5000)
      .toArray();
    const found = new Set(students.map((student) => student.studentId));
    response.json({
      items: students.map((student) => serialize({ ...student, validation: 'ready' })),
      unresolved: normalizedIds.filter((studentId) => !found.has(studentId)),
    });
  }),
);

academicsRouter.post(
  '/allocations/preview',
  asyncHandler(async (request, response) => {
    const rows = z.array(z.unknown()).min(1).max(5000).parse(request.body.rows);
    const preview = [];
    const seen = new Set();
    for (let index = 0; index < rows.length; index += 1) {
      const parsed = allocationSchema.safeParse(rows[index]);
      const key = parsed.success
        ? `${parsed.data.studentAdmissionId}:${parsed.data.academicSession}:${parsed.data.semester}`
        : '';
      preview.push({
        row: index + 2,
        data: rows[index],
        error: parsed.success
          ? seen.has(key)
            ? 'Duplicate student/session/semester row in this file.'
            : await validateAllocation(parsed.data)
          : parsed.error.issues[0]?.message || 'Invalid row.',
      });
      if (key) seen.add(key);
    }
    response.json({
      rows: preview,
      valid: preview.filter((row) => !row.error).length,
      invalid: preview.filter((row) => row.error).length,
    });
  }),
);

academicsRouter.post(
  '/allocations/bulk',
  asyncHandler(async (request, response) => {
    const rows = z.array(allocationSchema).min(1).max(5000).parse(request.body.rows);
    const errors = [];
    let assigned = 0;
    for (let index = 0; index < rows.length; index += 1) {
      const data = rows[index];
      const error = await validateAllocation(data);
      if (error) {
        errors.push({ row: index + 2, message: error });
        continue;
      }
      const studentAdmissionId = id(data.studentAdmissionId);
      const [student, group, section, set] = await Promise.all([
        db().collection('admissions').findOne({ _id: studentAdmissionId }),
        db()
          .collection('academicGroups')
          .findOne({ _id: id(data.groupId) }),
        db()
          .collection('academicSections')
          .findOne({ _id: id(data.sectionId) }),
        db()
          .collection('academicSets')
          .findOne({ _id: id(data.setId) }),
      ]);
      const details = {
        studentId: student.studentId,
        studentName: student.studentName,
        groupName: group.name,
        sectionName: section.name,
        setName: set.name,
      };
      const existing = await db().collection('studentAcademicAssignments').findOne({
        studentAdmissionId,
        academicSession: data.academicSession,
        semester: data.semester,
        status: 'active',
      });
      const now = new Date();
      if (existing) {
        await db()
          .collection('studentAcademicAssignmentHistory')
          .insertOne({
            ...existing,
            assignmentId: existing._id,
            _id: undefined,
            status: 'replaced',
            replacedAt: now,
          });
        await db()
          .collection('studentAcademicAssignments')
          .updateOne(
            { _id: existing._id },
            {
              $set: {
                ...documentData(data),
                ...details,
                updatedAt: now,
                assignedBy: id(request.admin._id),
              },
            },
          );
      } else {
        await db()
          .collection('studentAcademicAssignments')
          .insertOne({
            ...documentData(data),
            ...details,
            status: 'active',
            createdAt: now,
            updatedAt: now,
            assignedBy: id(request.admin._id),
          });
      }
      assigned += 1;
    }
    response.json({ assigned, errors });
  }),
);

academicsRouter.post(
  '/group-subjects/bulk',
  asyncHandler(async (request, response) => {
    const data = groupSubjectSchema.parse(request.body);
    const groupId = id(data.groupId);
    const group = await db().collection('academicGroups').findOne({
      _id: groupId,
      academicSession: data.academicSession,
      semester: data.semester,
      isActive: true,
    });
    if (!group)
      return response.status(400).json({ message: 'Matching active group was not found.' });
    let assigned = 0;
    for (const subjectIdText of data.subjectIds) {
      const subjectId = id(subjectIdText);
      const subject = await db().collection('subjects').findOne({
        _id: subjectId,
        academicSession: data.academicSession,
        semester: data.semester,
        isActive: true,
      });
      if (!subject) continue;
      const exists = await db().collection('groupSubjectAssignments').findOne({
        groupId,
        subjectId,
        academicSession: data.academicSession,
        semester: data.semester,
        status: 'active',
      });
      if (exists) continue;
      await db()
        .collection('groupSubjectAssignments')
        .insertOne({
          groupId,
          subjectId,
          groupName: group.name,
          subjectName: subject.name,
          subjectCode: subject.code,
          academicSession: data.academicSession,
          semester: data.semester,
          requirement: data.requirement,
          status: 'active',
          createdAt: new Date(),
          assignedBy: id(request.admin._id),
        });
      assigned += 1;
    }
    response.status(201).json({ assigned });
  }),
);

function entryAudiences(entry) {
  if (entry.audiences?.length) return entry.audiences;
  return entry.groupId && entry.sectionId
    ? [
        {
          groupId: String(entry.groupId),
          sectionIds: [String(entry.sectionId)],
          setIds: (entry.setIds || []).map(String),
        },
      ]
    : [];
}

function timetableAudiencesOverlap(left, right) {
  return left.some((leftAudience) =>
    right.some((rightAudience) => {
      if (String(leftAudience.groupId) !== String(rightAudience.groupId)) return false;
      const sectionOverlap = leftAudience.sectionIds.some((sectionId) =>
        rightAudience.sectionIds.map(String).includes(String(sectionId)),
      );
      if (!sectionOverlap) return false;
      if (!leftAudience.setIds.length || !rightAudience.setIds.length) return true;
      return leftAudience.setIds.some((setId) =>
        rightAudience.setIds.map(String).includes(String(setId)),
      );
    }),
  );
}

async function resolveTimetableAssignment(data, master) {
  const audiences = data.audiences?.length
    ? data.audiences
    : [{ groupId: data.groupId, sectionIds: [data.sectionId], setIds: data.setIds || [] }];
  const groupIds = [...new Set(audiences.map((audience) => audience.groupId))];
  const sectionIds = [...new Set(audiences.flatMap((audience) => audience.sectionIds))];
  const setIds = [...new Set(audiences.flatMap((audience) => audience.setIds || []))];
  const [groups, sections, sets, subject, faculty, room] = await Promise.all([
    Promise.all(
      groupIds.map((value) =>
        db()
          .collection('academicGroups')
          .findOne({ _id: id(value), isActive: true }),
      ),
    ),
    Promise.all(
      sectionIds.map((value) =>
        db()
          .collection('academicSections')
          .findOne({ _id: id(value), isActive: true }),
      ),
    ),
    Promise.all(
      setIds.map((value) =>
        db()
          .collection('academicSets')
          .findOne({ _id: id(value), isActive: true }),
      ),
    ),
    data.subjectId
      ? db()
          .collection('subjects')
          .findOne({ _id: id(data.subjectId), isActive: true })
      : null,
    data.facultyId
      ? db()
          .collection('faculties')
          .findOne({ _id: id(data.facultyId), isActive: true })
      : null,
    data.roomId
      ? db()
          .collection('academicRooms')
          .findOne({ _id: id(data.roomId), isActive: true })
      : null,
  ]);
  if (groups.some((value) => !value) || sections.some((value) => !value))
    return { error: 'Select active groups and sections for this class.' };
  if (sets.some((value) => !value))
    return { error: 'Select only active sets for this combined class.' };
  if (
    groups.some(
      (group) =>
        group.academicSession !== data.academicSession ||
        Number(group.semester) !== Number(data.semester) ||
        String(group.universityId) !== String(master.universityId) ||
        String(group.collegeId) !== String(master.collegeId),
    )
  )
    return { error: 'Every combined group must match this session, semester and institution.' };
  for (const audience of audiences) {
    const group = groups.find((value) => String(value._id) === String(audience.groupId));
    for (const sectionId of audience.sectionIds) {
      const section = sections.find((value) => String(value._id) === String(sectionId));
      if (!section?.groupIds?.some((value) => String(value) === String(group._id)))
        return { error: 'Every selected section must belong to its selected group.' };
    }
    for (const setId of audience.setIds || []) {
      const set = sets.find((value) => String(value._id) === String(setId));
      if (
        String(set?.groupId) !== String(group._id) ||
        !audience.sectionIds.map(String).includes(String(set?.sectionId)) ||
        set?.academicSession !== data.academicSession ||
        Number(set?.semester) !== Number(data.semester)
      )
        return { error: 'Every selected set must belong to its selected group and section.' };
    }
  }
  if (data.subjectId && !subject) return { error: 'Selected subject is unavailable.' };
  if (data.facultyId && !faculty) return { error: 'Selected faculty is unavailable.' };
  if (data.roomId && !room) return { error: 'Selected room is unavailable.' };
  if (
    subject &&
    ((subject.universityId && String(subject.universityId) !== String(master.universityId)) ||
      (subject.collegeId && String(subject.collegeId) !== String(master.collegeId)))
  )
    return { error: 'Selected subject is outside this university or college.' };
  if (
    faculty &&
    ((faculty.universityId && String(faculty.universityId) !== String(master.universityId)) ||
      (faculty.collegeId && String(faculty.collegeId) !== String(master.collegeId)))
  )
    return { error: 'Selected faculty is outside this university or college.' };
  if (faculty?.availableDays?.length && !faculty.availableDays.includes(data.day))
    return { error: 'Faculty is unavailable on this day.' };
  if (
    subject &&
    faculty?.subjectIds?.length &&
    !faculty.subjectIds.some((value) => String(value) === String(subject._id))
  )
    return { error: 'Faculty is not mapped to this subject.' };
  if (
    subject &&
    room?.subjectIds?.length &&
    !room.subjectIds.some((value) => String(value) === String(subject._id))
  )
    return { error: 'Room is not configured for this subject.' };
  if (data.classType === 'lab' && room && room.roomType !== 'lab')
    return { error: 'A lab class requires a lab room.' };
  return { audiences, groups, sections, subject, faculty, room };
}

async function timetableRoster(audiences, academicSession, semester) {
  const allocations = await db()
    .collection('studentAcademicAssignments')
    .find({ academicSession, semester, status: 'active' })
    .toArray();
  const admissionIds = new Set();
  for (const allocation of allocations) {
    const matches = audiences.some(
      (audience) =>
        String(audience.groupId) === String(allocation.groupId) &&
        audience.sectionIds.map(String).includes(String(allocation.sectionId)) &&
        (!audience.setIds.length || audience.setIds.map(String).includes(String(allocation.setId))),
    );
    if (matches) admissionIds.add(String(allocation.studentAdmissionId));
  }
  return Promise.all(
    [...admissionIds].map((value) =>
      db()
        .collection('admissions')
        .findOne({ _id: id(value), status: 'approved', isActive: true }),
    ),
  ).then((students) => students.filter(Boolean));
}

academicsRouter.post(
  '/timetables',
  asyncHandler(async (request, response) => {
    let data = timetableSchema.parse(request.body);
    if (data.effectiveFrom && data.effectiveTo && data.effectiveFrom > data.effectiveTo)
      return response
        .status(400)
        .json({ message: 'Effective-to date must be after effective-from date.' });
    const [master, structure, period] = await Promise.all([
      db()
        .collection('timetableMasters')
        .findOne({
          _id: id(data.timetableMasterId),
          isActive: true,
        }),
      db()
        .collection('timetableStructures')
        .findOne({
          _id: id(data.timetableStructureId),
          timetableMasterId: id(data.timetableMasterId),
          isActive: true,
        }),
      db()
        .collection('timetablePeriods')
        .findOne({
          _id: id(data.timetablePeriodId),
          timetableMasterId: id(data.timetableMasterId),
          timetableStructureId: id(data.timetableStructureId),
          isConfigured: true,
        }),
    ]);
    if (!master || !structure || !period)
      return response.status(400).json({
        message: 'Select an active timetable, structure and configured period.',
      });
    if (period.periodType !== 'lecture')
      return response.status(400).json({ message: 'Break periods cannot contain a class.' });
    if (!structure.workingDays?.includes(data.day))
      return response.status(400).json({ message: 'This day is not enabled in the structure.' });
    if (master.academicSession !== data.academicSession)
      return response.status(400).json({ message: 'Timetable session does not match the class.' });
    data = { ...data, startTime: period.startTime, endTime: period.endTime };
    const resolved = await resolveTimetableAssignment(data, master);
    if (resolved.error) return response.status(400).json({ message: resolved.error });
    const { audiences, groups, sections, subject, faculty, room } = resolved;
    const sameDay = await db()
      .collection('timetableEntries')
      .find({
        academicSession: data.academicSession,
        semester: data.semester,
        day: data.day,
        isActive: true,
      })
      .toArray();
    const conflict = sameDay.find(
      (entry) =>
        overlap(data.startTime, data.endTime, entry.startTime, entry.endTime) &&
        ((faculty && String(entry.facultyId) === String(faculty._id)) ||
          (room && String(entry.roomId) === String(room._id)) ||
          timetableAudiencesOverlap(audiences, entryAudiences(entry))),
    );
    if (conflict)
      return response.status(409).json({
        message:
          'This period conflicts with an existing faculty, room, group, section or set timetable entry.',
        conflict: serialize(conflict),
      });
    const expectedStudents = (await timetableRoster(audiences, data.academicSession, data.semester))
      .length;
    if (room && expectedStudents > Number(room.capacity || 0))
      return response.status(409).json({
        message: `Room capacity is ${room.capacity}, but this class contains ${expectedStudents} allocated students.`,
      });
    const facultyPeriods = faculty
      ? await db()
          .collection('timetableEntries')
          .find({ academicSession: data.academicSession, facultyId: faculty._id, isActive: true })
          .toArray()
      : [];
    const weeklyHours = facultyPeriods.reduce((sum, entry) => {
      const [startHour, startMinute] = entry.startTime.split(':').map(Number);
      const [endHour, endMinute] = entry.endTime.split(':').map(Number);
      return sum + (endHour * 60 + endMinute - startHour * 60 - startMinute) / 60;
    }, 0);
    const [startHour, startMinute] = data.startTime.split(':').map(Number);
    const [endHour, endMinute] = data.endTime.split(':').map(Number);
    if (
      weeklyHours + (endHour * 60 + endMinute - startHour * 60 - startMinute) / 60 >
      Number(faculty?.weeklyLimit || 40)
    )
      return response
        .status(409)
        .json({ message: 'This period exceeds the faculty weekly workload limit.' });
    const now = new Date();
    const document = {
      ...documentData(data),
      audiences,
      groupIds: groups.map((value) => value._id),
      sectionIds: sections.map((value) => value._id),
      timetablePeriodIds: [period._id],
      status: 'draft',
      groupName: groups.map((value) => value.name).join(', '),
      sectionName: sections.map((value) => value.name).join(', '),
      subjectId: subject?._id || null,
      subjectName: subject?.name || '',
      subjectCode: subject?.code || '',
      facultyId: faculty?._id || null,
      facultyName: faculty?.name || '',
      roomId: room?._id || null,
      roomName: room?.name || '',
      createdAt: now,
      updatedAt: now,
      createdBy: id(request.admin._id),
    };
    const result = await db().collection('timetableEntries').insertOne(document);
    response.status(201).json({ item: serialize({ ...document, _id: result.insertedId }) });
  }),
);

academicsRouter.post(
  '/timetables/:entryId/update',
  asyncHandler(async (request, response) => {
    const entryId = id(request.params.entryId, 'entryId');
    const changes = z
      .object({
        subjectId: z.string().trim().optional(),
        facultyId: z.string().trim().optional(),
        roomId: z.string().trim().optional(),
        classType: z.enum(['lecture', 'tutorial', 'lab']).optional(),
        audiences: z.array(timetableAudienceSchema).optional(),
      })
      .parse(request.body);
    const entry = await db()
      .collection('timetableEntries')
      .findOne({ _id: entryId, isActive: true });
    if (!entry) return response.status(404).json({ message: 'Timetable slot was not found.' });
    if (
      (changes.subjectId !== undefined ||
        changes.facultyId !== undefined ||
        changes.audiences !== undefined) &&
      (await db().collection('attendanceSessions').findOne({ timetableEntryId: entryId }))
    )
      return response.status(409).json({
        message:
          'Subject, faculty and combined-class audience cannot change after attendance is recorded.',
      });
    const master = await db()
      .collection('timetableMasters')
      .findOne({ _id: entry.timetableMasterId, isActive: true });
    if (!master) return response.status(400).json({ message: 'Timetable is unavailable.' });
    const merged = {
      ...entry,
      ...changes,
      subjectId:
        changes.subjectId === undefined ? String(entry.subjectId || '') : changes.subjectId,
      facultyId:
        changes.facultyId === undefined ? String(entry.facultyId || '') : changes.facultyId,
      roomId: changes.roomId === undefined ? String(entry.roomId || '') : changes.roomId,
      audiences: changes.audiences || entryAudiences(entry),
    };
    const resolved = await resolveTimetableAssignment(merged, master);
    if (resolved.error) return response.status(400).json({ message: resolved.error });
    const { audiences, groups, sections, subject, faculty, room } = resolved;
    const sameDay = await db()
      .collection('timetableEntries')
      .find({
        academicSession: entry.academicSession,
        semester: entry.semester,
        day: entry.day,
        isActive: true,
      })
      .toArray();
    const conflict = sameDay.find(
      (other) =>
        String(other._id) !== String(entryId) &&
        overlap(entry.startTime, entry.endTime, other.startTime, other.endTime) &&
        ((faculty && String(other.facultyId) === String(faculty._id)) ||
          (room && String(other.roomId) === String(room._id)) ||
          timetableAudiencesOverlap(audiences, entryAudiences(other))),
    );
    if (conflict)
      return response.status(409).json({
        message: 'The updated faculty, room or class conflicts with another timetable slot.',
      });
    const roster = await timetableRoster(audiences, entry.academicSession, entry.semester);
    if (room && roster.length > Number(room.capacity || 0))
      return response.status(409).json({
        message: `Room capacity is ${room.capacity}, but this class contains ${roster.length} students.`,
      });
    await db()
      .collection('timetableEntries')
      .updateOne(
        { _id: entryId },
        {
          $set: {
            audiences,
            groupIds: groups.map((value) => value._id),
            sectionIds: sections.map((value) => value._id),
            groupName: groups.map((value) => value.name).join(', '),
            sectionName: sections.map((value) => value.name).join(', '),
            subjectId: subject?._id || null,
            subjectName: subject?.name || '',
            subjectCode: subject?.code || '',
            facultyId: faculty?._id || null,
            facultyName: faculty?.name || '',
            roomId: room?._id || null,
            roomName: room?.name || '',
            classType: changes.classType || entry.classType || 'lecture',
            status: 'draft',
            updatedAt: new Date(),
          },
        },
      );
    response.json({
      item: serialize(await db().collection('timetableEntries').findOne({ _id: entryId })),
    });
  }),
);

academicsRouter.post(
  '/timetables/:entryId/merge',
  asyncHandler(async (request, response) => {
    const entryId = id(request.params.entryId, 'entryId');
    const entry = await db()
      .collection('timetableEntries')
      .findOne({ _id: entryId, isActive: true });
    if (!entry) return response.status(404).json({ message: 'Timetable slot was not found.' });
    const periods = await db()
      .collection('timetablePeriods')
      .find({
        timetableStructureId: entry.timetableStructureId,
        isConfigured: true,
      })
      .sort({ periodNumber: 1 })
      .toArray();
    const selectedIds = (
      entry.timetablePeriodIds?.length ? entry.timetablePeriodIds : [entry.timetablePeriodId]
    ).map(String);
    const selected = periods.filter((period) => selectedIds.includes(String(period._id)));
    const last = selected.at(-1);
    const nextPeriod = periods.find(
      (period) => period.periodNumber === Number(last?.periodNumber) + 1,
    );
    if (!nextPeriod || nextPeriod.periodType !== 'lecture')
      return response
        .status(409)
        .json({ message: 'The next column is unavailable or is a break.' });
    const sameDay = await db()
      .collection('timetableEntries')
      .find({
        academicSession: entry.academicSession,
        semester: entry.semester,
        day: entry.day,
        isActive: true,
      })
      .toArray();
    const conflict = sameDay.find(
      (other) =>
        String(other._id) !== String(entryId) &&
        overlap(entry.startTime, nextPeriod.endTime, other.startTime, other.endTime) &&
        ((entry.facultyId && String(other.facultyId) === String(entry.facultyId)) ||
          (entry.roomId && String(other.roomId) === String(entry.roomId)) ||
          timetableAudiencesOverlap(entryAudiences(entry), entryAudiences(other))),
    );
    if (conflict)
      return response
        .status(409)
        .json({ message: 'The next column already conflicts with a class, faculty or room.' });
    const timetablePeriodIds = [...selected.map((period) => period._id), nextPeriod._id];
    await db()
      .collection('timetableEntries')
      .updateOne(
        { _id: entryId },
        {
          $set: {
            timetablePeriodIds,
            endTime: nextPeriod.endTime,
            status: 'draft',
            updatedAt: new Date(),
          },
        },
      );
    response.json({
      item: serialize(await db().collection('timetableEntries').findOne({ _id: entryId })),
    });
  }),
);

academicsRouter.post(
  '/timetables/:entryId/split',
  asyncHandler(async (request, response) => {
    const entryId = id(request.params.entryId, 'entryId');
    const entry = await db()
      .collection('timetableEntries')
      .findOne({ _id: entryId, isActive: true });
    if (!entry) return response.status(404).json({ message: 'Timetable slot was not found.' });
    const firstPeriodId = entry.timetablePeriodIds?.[0] || entry.timetablePeriodId;
    const firstPeriod = await db().collection('timetablePeriods').findOne({ _id: firstPeriodId });
    if (!firstPeriod)
      return response.status(409).json({ message: 'Original period configuration was not found.' });
    await db()
      .collection('timetableEntries')
      .updateOne(
        { _id: entryId },
        {
          $set: {
            timetablePeriodId: firstPeriod._id,
            timetablePeriodIds: [firstPeriod._id],
            startTime: firstPeriod.startTime,
            endTime: firstPeriod.endTime,
            status: 'draft',
            updatedAt: new Date(),
          },
        },
      );
    response.json({
      item: serialize(await db().collection('timetableEntries').findOne({ _id: entryId })),
    });
  }),
);

academicsRouter.post(
  '/timetables/:entryId/remove-assignment',
  asyncHandler(async (request, response) => {
    const entryId = id(request.params.entryId, 'entryId');
    const result = await db()
      .collection('timetableEntries')
      .updateOne(
        { _id: entryId, isActive: true },
        {
          $set: {
            subjectId: null,
            subjectName: '',
            subjectCode: '',
            facultyId: null,
            facultyName: '',
            status: 'draft',
            updatedAt: new Date(),
          },
        },
      );
    if (!result.matchedCount)
      return response.status(404).json({ message: 'Timetable slot was not found.' });
    response.json({
      item: serialize(await db().collection('timetableEntries').findOne({ _id: entryId })),
    });
  }),
);

academicsRouter.post(
  '/timetables/publish',
  asyncHandler(async (request, response) => {
    const scope = z
      .object({
        academicSession: z.string().trim().min(4).max(30),
        semester: z.coerce.number().int().min(1).max(20),
        groupId: objectIdString,
        sectionId: objectIdString,
        timetableMasterId: objectIdString,
        timetableStructureId: objectIdString,
      })
      .parse(request.body);
    const filter = documentData(scope);
    const entries = await db()
      .collection('timetableEntries')
      .find({ ...filter, isActive: true })
      .toArray();
    if (!entries.length)
      return response.status(409).json({ message: 'Assign at least one timetable slot first.' });
    const incomplete = entries.find((entry) => !entry.subjectId || !entry.facultyId);
    if (incomplete)
      return response.status(409).json({
        message: `${incomplete.day} ${incomplete.startTime} is incomplete. Assign its subject and teacher before publishing.`,
      });
    const now = new Date();
    await db()
      .collection('timetableEntries')
      .updateMany(filter, { $set: { status: 'published', publishedAt: now, updatedAt: now } });
    await db()
      .collection('timetablePublications')
      .updateOne(
        filter,
        {
          $set: {
            ...filter,
            status: 'published',
            entryCount: entries.length,
            publishedAt: now,
            publishedBy: id(request.admin._id),
            updatedAt: now,
          },
          $setOnInsert: { createdAt: now },
        },
        { upsert: true },
      );
    response.json({ published: entries.length, publishedAt: now });
  }),
);

const defaultStudentTimetablePreferences = Object.freeze({
  defaultView: 'auto',
  showFaculty: true,
  showRooms: true,
  compactMode: false,
  reminderMinutes: 15,
});

const studentTimetablePreferencesSchema = z.object({
  defaultView: z.enum(['auto', 'today', 'week']),
  showFaculty: z.boolean(),
  showRooms: z.boolean(),
  compactMode: z.boolean(),
  reminderMinutes: z.coerce.number().int().min(5).max(1440),
});

function publicStudentTimetablePreferences(value = {}) {
  return {
    defaultView: value.defaultView || defaultStudentTimetablePreferences.defaultView,
    showFaculty: value.showFaculty ?? defaultStudentTimetablePreferences.showFaculty,
    showRooms: value.showRooms ?? defaultStudentTimetablePreferences.showRooms,
    compactMode: value.compactMode ?? defaultStudentTimetablePreferences.compactMode,
    reminderMinutes: value.reminderMinutes ?? defaultStudentTimetablePreferences.reminderMinutes,
    ...(value.updatedAt ? { updatedAt: serialize(value.updatedAt) } : {}),
  };
}

async function timetableForStudent(student) {
  const savedPreferences = await db()
    .collection('studentTimetablePreferences')
    .findOne({ studentAdmissionId: student._id });
  const preferences = publicStudentTimetablePreferences(savedPreferences);
  const assignment = await db()
    .collection('studentAcademicAssignments')
    .findOne({
      studentAdmissionId: student._id,
      academicSession: student.academicSession,
      semester: Number(student.currentSemester || 1),
      status: 'active',
    });
  if (!assignment)
    return {
      assignment: null,
      subjects: [],
      structure: null,
      periods: [],
      items: [],
      reminders: [],
      preferences,
      publishedAt: null,
    };
  const entries = await db()
    .collection('timetableEntries')
    .find({
      academicSession: assignment.academicSession,
      semester: assignment.semester,
      status: 'published',
      isActive: true,
    })
    .sort({ day: 1, startTime: 1 })
    .toArray();
  const visibleEntries = entries.filter(
    (entry) =>
      entry.subjectId &&
      entry.facultyId &&
      entryAudiences(entry).some(
        (audience) =>
          String(audience.groupId) === String(assignment.groupId) &&
          audience.sectionIds.map(String).includes(String(assignment.sectionId)) &&
          (!audience.setIds.length ||
            audience.setIds.map(String).includes(String(assignment.setId))),
      ),
  );
  const subjectIds = [...new Set(visibleEntries.map((entry) => String(entry.subjectId)))];
  const assignedSubjects = (
    await Promise.all(
      subjectIds.map((subjectId) =>
        db()
          .collection('subjects')
          .findOne({ _id: id(subjectId), isActive: true }),
      ),
    )
  ).filter(Boolean);
  const timetableStructureId = visibleEntries[0]?.timetableStructureId;
  const [structure, periods, reminders] = timetableStructureId
    ? await Promise.all([
        db().collection('timetableStructures').findOne({ _id: timetableStructureId }),
        db()
          .collection('timetablePeriods')
          .find({ timetableStructureId, isConfigured: true })
          .sort({ periodNumber: 1 })
          .toArray(),
        db()
          .collection('studentTimetableReminders')
          .find({ studentAdmissionId: student._id, isActive: true })
          .toArray(),
      ])
    : [null, [], []];
  const publishedAt = visibleEntries.reduce(
    (latest, entry) =>
      !latest || (entry.publishedAt && entry.publishedAt > latest) ? entry.publishedAt : latest,
    null,
  );
  return {
    assignment: serialize(assignment),
    subjects: assignedSubjects.map(serialize),
    structure: structure ? serialize(structure) : null,
    periods: periods.map(serialize),
    items: visibleEntries.map(serialize),
    reminders: reminders.map(serialize),
    preferences,
    publishedAt,
  };
}

export function timetablePdf(student, timetable, weekStart, includeDetails = true) {
  return new Promise((resolve, reject) => {
    const document = new PDFDocument({
      size: 'A4',
      layout: 'landscape',
      margin: 30,
      info: { Title: 'Student timetable', Author: 'Graphic Era University' },
    });
    const chunks = [];
    document.on('data', (chunk) => chunks.push(chunk));
    document.on('end', () => resolve(Buffer.concat(chunks)));
    document.on('error', reject);

    const navy = '#071b53';
    const blue = '#087cf0';
    const border = '#cbdcf0';
    const muted = '#5b6f9d';
    const soft = '#f1f7ff';
    const weekDayNames = [
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
      'Sunday',
    ];
    const configuredDays = timetable.structure?.workingDays?.filter((day) =>
      weekDayNames.includes(day),
    );
    const days = configuredDays?.length ? configuredDays : weekDayNames.slice(0, 6);
    const periods = timetable.periods;
    const start = new Date(`${weekStart}T00:00:00Z`);
    const end = new Date(start);
    end.setUTCDate(
      start.getUTCDate() + Math.max(...days.map((day) => weekDayNames.indexOf(day)), 0),
    );
    const shortDate = (date) =>
      date.toLocaleDateString('en-GB', { day: 'numeric', month: 'short', timeZone: 'UTC' });

    document.fillColor(navy).font('Helvetica-Bold').fontSize(22).text('GEU');
    document.fontSize(17).text('Student Timetable', 85, 31);
    document
      .fillColor(muted)
      .font('Helvetica')
      .fontSize(9)
      .text(
        `${student.studentName || student.name || 'Student'}  |  ${student.studentId || ''}`,
        85,
        53,
      )
      .text(
        `Semester ${student.currentSemester || 1}  |  ${shortDate(start)} - ${shortDate(end)}`,
        85,
        67,
      );
    document
      .fillColor(navy)
      .font('Helvetica-Bold')
      .text(student.academicSession || '', 660, 36, { width: 150, align: 'right' });
    document
      .fillColor(muted)
      .font('Helvetica')
      .text(`Generated ${new Date().toLocaleString('en-IN')}`, 620, 53, {
        width: 190,
        align: 'right',
      });

    const tableX = 30;
    const tableY = 92;
    const tableWidth = 782;
    const timeWidth = 92;
    const dayWidth = (tableWidth - timeWidth) / Math.max(days.length, 1);
    const headerHeight = 44;
    const rowHeight = Math.min(62, Math.max(40, 420 / Math.max(periods.length, 1)));
    document.roundedRect(tableX, tableY, tableWidth, headerHeight, 6).fill(navy);
    document
      .fillColor('#ffffff')
      .font('Helvetica-Bold')
      .fontSize(9)
      .text('TIME', tableX, tableY + 17, { width: timeWidth, align: 'center' });
    days.forEach((day, index) => {
      const date = new Date(start);
      date.setUTCDate(start.getUTCDate() + Math.max(weekDayNames.indexOf(day), 0));
      document.text(
        `${day.toUpperCase()}\n${shortDate(date).toUpperCase()}`,
        tableX + timeWidth + index * dayWidth,
        tableY + 10,
        { width: dayWidth, align: 'center' },
      );
    });
    periods.forEach((period, rowIndex) => {
      const y = tableY + headerHeight + rowIndex * rowHeight;
      document
        .rect(tableX, y, tableWidth, rowHeight)
        .fillAndStroke(period.periodType === 'break' ? soft : '#ffffff', border);
      document
        .fillColor(navy)
        .font('Helvetica-Bold')
        .fontSize(8)
        .text(
          `${period.startTime || ''} - ${period.endTime || ''}`,
          tableX + 5,
          y + rowHeight / 2 - 5,
          { width: timeWidth - 10, align: 'center' },
        );
      days.forEach((day, columnIndex) => {
        const x = tableX + timeWidth + columnIndex * dayWidth;
        document
          .moveTo(x, y)
          .lineTo(x, y + rowHeight)
          .stroke(border);
        const entry = timetable.items.find(
          (item) =>
            item.day === day &&
            (item.timetablePeriodIds?.[0] || item.timetablePeriodId) === period._id,
        );
        if (period.periodType === 'break') {
          document
            .fillColor(muted)
            .font('Helvetica-Bold')
            .fontSize(8)
            .text('BREAK', x + 4, y + rowHeight / 2 - 5, { width: dayWidth - 8, align: 'center' });
        } else if (entry) {
          document
            .fillColor(blue)
            .rect(x + 5, y + 7, 3, rowHeight - 14)
            .fill();
          document
            .fillColor(navy)
            .font('Helvetica-Bold')
            .fontSize(8)
            .text(entry.subjectName, x + 13, y + 9, {
              width: dayWidth - 18,
              height: 20,
              ellipsis: true,
            });
          if (includeDetails)
            document
              .fillColor(muted)
              .font('Helvetica')
              .fontSize(7)
              .text(
                `${entry.subjectCode || ''}${entry.roomName ? `  |  ${entry.roomName}` : ''}`,
                x + 13,
                y + 30,
                { width: dayWidth - 18, ellipsis: true },
              )
              .text(entry.facultyName || '', x + 13, y + 41, {
                width: dayWidth - 18,
                ellipsis: true,
              });
        } else {
          document
            .fillColor(muted)
            .font('Helvetica')
            .fontSize(9)
            .text('-', x, y + rowHeight / 2 - 5, { width: dayWidth, align: 'center' });
        }
      });
    });
    document
      .fillColor(muted)
      .font('Helvetica')
      .fontSize(8)
      .text('Generated from the latest timetable published by the academic office.', 30, 550, {
        width: 782,
        align: 'center',
      });
    document.end();
  });
}

async function semesterRegistrationContext(student) {
  const academicSession = student.academicSession || '';
  const semester = Number(student.currentSemester || 1);
  const assignment = await db().collection('studentAcademicAssignments').findOne({
    studentAdmissionId: student._id,
    academicSession,
    semester,
    status: 'active',
  });
  const blockers = [];
  if (!academicSession) blockers.push('The student does not have an academic session.');
  if (!assignment) blockers.push('Academic group, section and set allocation is required.');

  let subjects = [];
  if (assignment) {
    const groupIds = [assignment.groupId, ...(assignment.groupIds || [])]
      .filter(Boolean)
      .map((value) => id(value, 'groupId'));
    const subjectAssignments = groupIds.length
      ? await db()
          .collection('groupSubjectAssignments')
          .find({
            groupId: { $in: groupIds },
            academicSession,
            semester,
            status: 'active',
          })
          .toArray()
      : [];
    const assignmentBySubject = new Map();
    for (const item of subjectAssignments)
      if (!assignmentBySubject.has(String(item.subjectId)))
        assignmentBySubject.set(String(item.subjectId), item);
    const subjectIds = [...assignmentBySubject.keys()].map((value) => id(value, 'subjectId'));
    const records = subjectIds.length
      ? await db()
          .collection('subjects')
          .find({ _id: { $in: subjectIds }, isActive: true })
          .sort({ name: 1, code: 1 })
          .toArray()
      : [];
    subjects = records.map((subject) => ({
      _id: subject._id,
      name: subject.name,
      code: subject.code || '',
      subjectType: subject.subjectType || '',
      credits: Number(subject.credits || 0),
      requirement: assignmentBySubject.get(String(subject._id))?.requirement || 'required',
    }));
  }
  if (assignment && !subjects.length)
    blockers.push('No active subjects are assigned to the student’s group for this semester.');

  const registration = await db()
    .collection('studentSemesterRegistrations')
    .findOne({ studentAdmissionId: student._id, academicSession, semester });
  return {
    student: {
      _id: student._id,
      studentId: student.studentId || '',
      studentName: student.studentName || student.name || '',
      academicSession,
      semester,
      currentAcademicYear: Number(student.currentAcademicYear || Math.ceil(semester / 2)),
      universityId: student.universityId || null,
      universityName: student.universityName || '',
      collegeId: student.collegeId || null,
      collegeName: student.collegeName || '',
      departmentId: student.departmentId || null,
      departmentName: student.departmentName || '',
      levelId: student.levelId || null,
      levelName: student.levelName || '',
      courseId: student.courseId || null,
      courseName: student.courseName || '',
    },
    assignment: assignment ? serialize(assignment) : null,
    subjects: subjects.map(serialize),
    registration: registration ? serialize(registration) : null,
    eligible: blockers.length === 0 && !registration,
    blockers,
  };
}

studentAcademicsRouter.get(
  '/semester-registration',
  asyncHandler(async (request, response) => {
    const context = await semesterRegistrationContext(request.student);
    const history = await db()
      .collection('studentSemesterRegistrations')
      .find({ studentAdmissionId: request.student._id, status: 'registered' })
      .sort({ registeredAt: -1 })
      .toArray();
    response.json({ ...context, history: history.map(serialize) });
  }),
);

studentAcademicsRouter.post(
  '/semester-registration',
  asyncHandler(async (request, response) => {
    const context = await semesterRegistrationContext(request.student);
    if (context.registration)
      return response.json({ item: context.registration, alreadyRegistered: true });
    if (!context.eligible)
      return response.status(409).json({
        message: context.blockers[0] || 'Semester registration is currently unavailable.',
      });
    const now = new Date();
    const { student, assignment, subjects } = context;
    const document = {
      studentAdmissionId: request.student._id,
      studentId: student.studentId,
      studentName: student.studentName,
      academicSession: student.academicSession,
      semester: student.semester,
      currentAcademicYear: student.currentAcademicYear,
      universityId: student.universityId,
      universityName: student.universityName,
      collegeId: student.collegeId,
      collegeName: student.collegeName,
      departmentId: student.departmentId,
      departmentName: student.departmentName,
      levelId: student.levelId,
      levelName: student.levelName,
      courseId: student.courseId,
      courseName: student.courseName,
      groupId: assignment.groupId,
      groupName: assignment.groupName || '',
      sectionId: assignment.sectionId,
      sectionName: assignment.sectionName || '',
      setId: assignment.setId,
      setName: assignment.setName || '',
      subjectIds: subjects.map((subject) => subject._id),
      subjectCount: subjects.length,
      subjects,
      status: 'registered',
      registeredAt: now,
      createdAt: now,
      updatedAt: now,
    };
    const result = await db().collection('studentSemesterRegistrations').insertOne(document);
    response.status(201).json({
      item: serialize({ ...document, _id: result.insertedId }),
      alreadyRegistered: false,
    });
  }),
);

studentAcademicsRouter.get(
  '/timetable.pdf',
  asyncHandler(async (request, response) => {
    const weekStart = z
      .string()
      .regex(/^\d{4}-\d{2}-\d{2}$/)
      .parse(request.query.weekStart);
    const includeDetails = request.query.includeDetails !== 'false';
    const timetable = await timetableForStudent(request.student);
    if (!timetable.items.length)
      return response.status(404).json({ message: 'No published timetable is available.' });
    const file = await timetablePdf(request.student, timetable, weekStart, includeDetails);
    response
      .status(200)
      .set({
        'Content-Type': 'application/pdf',
        'Content-Disposition': `attachment; filename="GEU_Timetable_Sem${request.student.currentSemester || 1}.pdf"`,
        'Content-Length': String(file.length),
      })
      .send(file);
  }),
);

studentAcademicsRouter.put(
  '/timetable/preferences',
  asyncHandler(async (request, response) => {
    const input = studentTimetablePreferencesSchema.parse(request.body || {});
    const now = new Date();
    await db()
      .collection('studentTimetablePreferences')
      .updateOne(
        { studentAdmissionId: request.student._id },
        {
          $set: { ...input, updatedAt: now },
          $setOnInsert: { createdAt: now },
        },
        { upsert: true },
      );
    response.json({
      preferences: publicStudentTimetablePreferences(
        await db()
          .collection('studentTimetablePreferences')
          .findOne({ studentAdmissionId: request.student._id }),
      ),
    });
  }),
);

studentAcademicsRouter.put(
  '/timetable/reminders/:entryId',
  asyncHandler(async (request, response) => {
    const entryId = id(request.params.entryId, 'entryId');
    const input = z
      .object({ minutesBefore: z.coerce.number().int().min(5).max(1440).default(15) })
      .parse(request.body || {});
    const timetable = await timetableForStudent(request.student);
    if (!timetable.items.some((entry) => String(entry._id) === String(entryId)))
      return response.status(404).json({ message: 'Published class was not found.' });
    const now = new Date();
    await db()
      .collection('studentTimetableReminders')
      .updateOne(
        { studentAdmissionId: request.student._id, timetableEntryId: entryId },
        {
          $set: { minutesBefore: input.minutesBefore, isActive: true, updatedAt: now },
          $setOnInsert: { createdAt: now },
        },
        { upsert: true },
      );
    response.json({
      reminder: serialize(
        await db()
          .collection('studentTimetableReminders')
          .findOne({ studentAdmissionId: request.student._id, timetableEntryId: entryId }),
      ),
    });
  }),
);

studentAcademicsRouter.delete(
  '/timetable/reminders/:entryId',
  asyncHandler(async (request, response) => {
    const entryId = id(request.params.entryId, 'entryId');
    await db()
      .collection('studentTimetableReminders')
      .updateOne(
        { studentAdmissionId: request.student._id, timetableEntryId: entryId },
        { $set: { isActive: false, updatedAt: new Date() } },
      );
    response.status(204).end();
  }),
);

studentAcademicsRouter.get(
  '/timetable',
  asyncHandler(async (request, response) => {
    const timetable = await timetableForStudent(request.student);
    response.json({
      ...timetable,
      serverTime: new Date().toISOString(),
    });
  }),
);
