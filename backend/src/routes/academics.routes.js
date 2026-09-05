import express from 'express';
import { z } from 'zod';
import { db, id, serialize } from '../db.js';
import { asyncHandler } from '../lib/async-handler.js';

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
const subjectSchema = scopeSchema.extend({
  name: z.string().trim().min(1).max(180),
  hindiName: z.string().trim().max(180).optional().default(''),
  code: z.string().trim().min(1).max(50),
  departmentIds: z.array(objectIdString).min(1),
  departmentNames: z.array(z.string().trim().min(1)).min(1),
  courseIds: z.array(objectIdString).default([]),
  courseNames: z.array(z.string().trim().min(1)).default([]),
  branchIds: z.array(objectIdString).default([]),
  branchNames: z.array(z.string().trim().min(1)).default([]),
  subjectType: z.enum(['theory', 'practical', 'tutorial', 'project']),
  subjectOption: z.enum(['required', 'elective']).default('required'),
  evaluationType: z.enum(['marks', 'grade']).default('marks'),
  credits: z.coerce.number().min(0).max(100),
  subjectCounter: z.coerce.number().int().min(0).max(100).default(0),
  lectureHours: z.coerce.number().min(0).max(100).default(0),
  tutorialHours: z.coerce.number().min(0).max(100).default(0),
  labHours: z.coerce.number().min(0).max(100).default(0),
  maxMarks: z.coerce.number().min(0).max(10000).default(0),
  passMarks: z.coerce.number().min(0).max(10000).default(0),
  internalMarks: z.coerce.number().min(0).max(10000).default(0),
  externalMarks: z.coerce.number().min(0).max(10000).default(0),
  midTermMarks: z.coerce.number().min(0).max(10000).default(0),
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
const timetableSchema = z.object({
  timetableMasterId: objectIdString,
  timetableStructureId: objectIdString,
  timetablePeriodId: objectIdString,
  academicSession: z.string().trim().min(4).max(30),
  semester: z.coerce.number().int().min(1).max(20),
  groupId: objectIdString,
  sectionId: objectIdString,
  setIds: z.array(objectIdString).default([]),
  subjectId: objectIdString,
  facultyId: objectIdString,
  roomId: objectIdString,
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
  '/:resource',
  asyncHandler(async (request, response) => {
    const collection = resourceCollection(request.params.resource);
    const filter = {};
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
      if (request.query[field] !== undefined && request.query[field] !== '')
        filter[field] =
          field === 'semester'
            ? Number(request.query[field])
            : field === 'isActive'
              ? request.query[field] === 'true'
              : objectIdFields.has(field)
                ? id(String(request.query[field]), field)
                : String(request.query[field]);
    response.json({
      items: (
        await db()
          .collection(collection)
          .find(filter)
          .sort({ academicSession: -1, semester: 1, name: 1, day: 1, startTime: 1 })
          .limit(1000)
          .toArray()
      ).map(serialize),
    });
  }),
);

academicsRouter.post(
  '/:resource',
  asyncHandler(async (request, response, next) => {
    const type = request.params.resource;
    if (!schemas[type]) return next();
    let data = schemas[type].parse(request.body);
    if (
      type === 'subjects' &&
      (Number(data.passMarks) > Number(data.maxMarks) ||
        Number(data.internalMarks) + Number(data.externalMarks) + Number(data.midTermMarks) >
          Number(data.maxMarks))
    )
      return response.status(400).json({
        message:
          'Passing marks and the internal/external/mid-term split must fit within maximum marks.',
      });
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
    if (await db().collection(collection).findOne(duplicateFilter)) throw duplicateError(data.name);
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
      if (type === 'timetable-structures' && data.periodCount !== undefined) {
        const current = await db().collection(collection).findOne({ _id: itemId });
        if (Number(data.periodCount) !== Number(current?.periodCount))
          return response.status(409).json({
            message:
              'Period count cannot be changed after slots are generated. Create another structure instead.',
          });
      }
      data = await resolveAcademicMasterData(data);
    }
    const result = await db()
      .collection(collection)
      .updateOne({ _id: itemId }, { $set: { ...documentData(data), updatedAt: new Date() } });
    if (!result.matchedCount)
      return response.status(404).json({ message: 'Record was not found.' });
    response.json({ item: serialize(await db().collection(collection).findOne({ _id: itemId })) });
  }),
);

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

academicsRouter.post(
  '/timetables',
  asyncHandler(async (request, response) => {
    let data = timetableSchema.parse(request.body);
    if (data.effectiveFrom && data.effectiveTo && data.effectiveFrom > data.effectiveTo)
      return response
        .status(400)
        .json({ message: 'Effective-to date must be after effective-from date.' });
    const [master, structure, period, group, section, subject, faculty, room] = await Promise.all([
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
      db()
        .collection('academicGroups')
        .findOne({ _id: id(data.groupId), isActive: true }),
      db()
        .collection('academicSections')
        .findOne({ _id: id(data.sectionId), isActive: true }),
      db()
        .collection('subjects')
        .findOne({ _id: id(data.subjectId), isActive: true }),
      db()
        .collection('faculties')
        .findOne({ _id: id(data.facultyId), isActive: true }),
      db()
        .collection('academicRooms')
        .findOne({ _id: id(data.roomId), isActive: true }),
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
    if (!group || !section || !subject || !faculty || !room)
      return response
        .status(400)
        .json({ message: 'Select active group, section, subject, faculty and room records.' });
    if (
      group.academicSession !== data.academicSession ||
      Number(group.semester) !== Number(data.semester) ||
      String(group.universityId) !== String(master.universityId) ||
      String(group.collegeId) !== String(master.collegeId)
    )
      return response.status(400).json({
        message: 'The selected group is outside this timetable session or institution.',
      });
    if (!section.groupIds.some((value) => String(value) === String(group._id)))
      return response.status(400).json({ message: 'Section is not mapped to this group.' });
    const mapping = await db().collection('groupSubjectAssignments').findOne({
      groupId: group._id,
      subjectId: subject._id,
      academicSession: data.academicSession,
      semester: data.semester,
      status: 'active',
    });
    if (!mapping)
      return response.status(400).json({ message: 'Subject is not assigned to this group.' });
    if (
      group.departmentIds?.length &&
      subject.departmentIds?.length &&
      !group.departmentIds.some((groupDepartment) =>
        subject.departmentIds.some(
          (subjectDepartment) => String(groupDepartment) === String(subjectDepartment),
        ),
      )
    )
      return response
        .status(400)
        .json({ message: 'Subject department is incompatible with this group.' });
    if (
      faculty.subjectIds?.length &&
      !faculty.subjectIds.some((value) => String(value) === String(subject._id))
    )
      return response.status(400).json({ message: 'Faculty is not mapped to this subject.' });
    if (faculty.availableDays?.length && !faculty.availableDays.includes(data.day))
      return response
        .status(400)
        .json({ message: 'Faculty is not available on the selected day.' });
    if (
      room.subjectIds?.length &&
      !room.subjectIds.some((value) => String(value) === String(subject._id))
    )
      return response
        .status(400)
        .json({ message: 'This room/lab is not configured for the selected subject.' });
    if (data.classType === 'lab' && room.roomType !== 'lab')
      return response.status(400).json({ message: 'A lab timetable period requires a lab room.' });
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
        (String(entry.facultyId) === String(faculty._id) ||
          String(entry.roomId) === String(room._id) ||
          String(entry.groupId) === String(group._id) ||
          String(entry.sectionId) === String(section._id) ||
          data.setIds.some((setId) =>
            (entry.setIds || []).some((value) => String(value) === setId),
          )),
    );
    if (conflict)
      return response.status(409).json({
        message:
          'This period conflicts with an existing faculty, room, group, section or set timetable entry.',
        conflict: serialize(conflict),
      });
    const allocationFilter = {
      academicSession: data.academicSession,
      semester: data.semester,
      groupId: group._id,
      sectionId: section._id,
      status: 'active',
    };
    const allocations = await db()
      .collection('studentAcademicAssignments')
      .find(allocationFilter)
      .toArray();
    const expectedStudents = data.setIds.length
      ? allocations.filter((allocation) =>
          data.setIds.some((value) => String(allocation.setId) === value),
        ).length
      : allocations.length;
    if (expectedStudents > Number(room.capacity || 0))
      return response.status(409).json({
        message: `Room capacity is ${room.capacity}, but this class contains ${expectedStudents} allocated students.`,
      });
    const facultyPeriods = await db()
      .collection('timetableEntries')
      .find({ academicSession: data.academicSession, facultyId: faculty._id, isActive: true })
      .toArray();
    const weeklyHours = facultyPeriods.reduce((sum, entry) => {
      const [startHour, startMinute] = entry.startTime.split(':').map(Number);
      const [endHour, endMinute] = entry.endTime.split(':').map(Number);
      return sum + (endHour * 60 + endMinute - startHour * 60 - startMinute) / 60;
    }, 0);
    const [startHour, startMinute] = data.startTime.split(':').map(Number);
    const [endHour, endMinute] = data.endTime.split(':').map(Number);
    if (
      weeklyHours + (endHour * 60 + endMinute - startHour * 60 - startMinute) / 60 >
      Number(faculty.weeklyLimit || 40)
    )
      return response
        .status(409)
        .json({ message: 'This period exceeds the faculty weekly workload limit.' });
    const now = new Date();
    const document = {
      ...documentData(data),
      timetablePeriodIds: [period._id],
      status: 'draft',
      groupName: group.name,
      sectionName: section.name,
      subjectName: subject.name,
      subjectCode: subject.code,
      facultyName: faculty.name,
      roomName: room.name,
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
        subjectId: objectIdString,
        facultyId: objectIdString,
        roomId: objectIdString,
        classType: z.enum(['lecture', 'tutorial', 'lab']),
      })
      .parse(request.body);
    const entry = await db()
      .collection('timetableEntries')
      .findOne({ _id: entryId, isActive: true });
    if (!entry) return response.status(404).json({ message: 'Timetable slot was not found.' });
    const [subject, faculty, room, mapping] = await Promise.all([
      db()
        .collection('subjects')
        .findOne({ _id: id(changes.subjectId), isActive: true }),
      db()
        .collection('faculties')
        .findOne({ _id: id(changes.facultyId), isActive: true }),
      db()
        .collection('academicRooms')
        .findOne({ _id: id(changes.roomId), isActive: true }),
      db()
        .collection('groupSubjectAssignments')
        .findOne({
          groupId: entry.groupId,
          subjectId: id(changes.subjectId),
          academicSession: entry.academicSession,
          semester: entry.semester,
          status: 'active',
        }),
    ]);
    if (!subject || !faculty || !room || !mapping)
      return response.status(400).json({
        message: 'Select an assigned subject and compatible active faculty and room.',
      });
    if (
      faculty.subjectIds?.length &&
      !faculty.subjectIds.some((value) => String(value) === String(subject._id))
    )
      return response.status(400).json({ message: 'Faculty is not mapped to this subject.' });
    if (faculty.availableDays?.length && !faculty.availableDays.includes(entry.day))
      return response.status(400).json({ message: 'Faculty is unavailable on this day.' });
    if (
      room.subjectIds?.length &&
      !room.subjectIds.some((value) => String(value) === String(subject._id))
    )
      return response.status(400).json({ message: 'Room is not configured for this subject.' });
    if (changes.classType === 'lab' && room.roomType !== 'lab')
      return response.status(400).json({ message: 'A lab class requires a lab room.' });
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
        (String(other.facultyId) === String(faculty._id) ||
          String(other.roomId) === String(room._id) ||
          String(other.groupId) === String(entry.groupId) ||
          String(other.sectionId) === String(entry.sectionId)),
    );
    if (conflict)
      return response.status(409).json({
        message: 'The updated faculty, room or class conflicts with another timetable slot.',
      });
    const allocations = await db()
      .collection('studentAcademicAssignments')
      .find({
        academicSession: entry.academicSession,
        semester: entry.semester,
        groupId: entry.groupId,
        sectionId: entry.sectionId,
        status: 'active',
      })
      .toArray();
    if (allocations.length > Number(room.capacity || 0))
      return response.status(409).json({
        message: `Room capacity is ${room.capacity}, but this section contains ${allocations.length} students.`,
      });
    await db()
      .collection('timetableEntries')
      .updateOne(
        { _id: entryId },
        {
          $set: {
            subjectId: subject._id,
            subjectName: subject.name,
            subjectCode: subject.code,
            facultyId: faculty._id,
            facultyName: faculty.name,
            roomId: room._id,
            roomName: room.name,
            classType: changes.classType,
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
        (String(other.facultyId) === String(entry.facultyId) ||
          String(other.roomId) === String(entry.roomId) ||
          String(other.groupId) === String(entry.groupId) ||
          String(other.sectionId) === String(entry.sectionId)),
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
    const incomplete = entries.find(
      (entry) => !entry.subjectId || !entry.facultyId || !entry.roomId,
    );
    if (incomplete)
      return response.status(409).json({
        message: `${incomplete.day} ${incomplete.startTime} is incomplete. Assign its subject, teacher and room before publishing.`,
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

studentAcademicsRouter.get(
  '/timetable',
  asyncHandler(async (request, response) => {
    const student = request.student;
    const assignment = await db()
      .collection('studentAcademicAssignments')
      .findOne({
        studentAdmissionId: student._id,
        academicSession: student.academicSession,
        semester: Number(student.currentSemester || 1),
        status: 'active',
      });
    if (!assignment) return response.json({ assignment: null, subjects: [], items: [] });
    const subjectMappings = await db()
      .collection('groupSubjectAssignments')
      .find({
        groupId: assignment.groupId,
        academicSession: assignment.academicSession,
        semester: assignment.semester,
        status: 'active',
      })
      .toArray();
    const assignedSubjects = (
      await Promise.all(
        subjectMappings.map((mapping) =>
          db().collection('subjects').findOne({ _id: mapping.subjectId, isActive: true }),
        ),
      )
    ).filter(Boolean);
    const entries = await db()
      .collection('timetableEntries')
      .find({
        academicSession: assignment.academicSession,
        semester: assignment.semester,
        groupId: assignment.groupId,
        sectionId: assignment.sectionId,
        isActive: true,
      })
      .sort({ day: 1, startTime: 1 })
      .toArray();
    const publishedEntries = entries.filter((entry) => entry.status === 'published');
    const timetableStructureId = publishedEntries[0]?.timetableStructureId;
    const [structure, periods] = timetableStructureId
      ? await Promise.all([
          db().collection('timetableStructures').findOne({ _id: timetableStructureId }),
          db()
            .collection('timetablePeriods')
            .find({ timetableStructureId, isConfigured: true })
            .sort({ periodNumber: 1 })
            .toArray(),
        ])
      : [null, []];
    response.json({
      assignment: serialize(assignment),
      subjects: assignedSubjects.map(serialize),
      structure: structure ? serialize(structure) : null,
      periods: periods.map(serialize),
      items: publishedEntries
        .filter(
          (entry) =>
            !entry.setIds?.length ||
            entry.setIds.some((value) => String(value) === String(assignment.setId)),
        )
        .map(serialize),
    });
  }),
);
