import express from 'express';
import ExcelJS from 'exceljs';
import multer from 'multer';
import { z } from 'zod';
import { config } from '../config.js';
import { db, id, serialize } from '../db.js';
import { asyncHandler } from '../lib/async-handler.js';
import { normalizeFeeName, parseFeeWorkbook } from '../services/fee-workbook.js';
import {
  generateStudentFeeLedgers,
  progressionCandidates,
  progressStudentFee,
  recalculateStudentAcademicLedger,
  removeStudentFeeLedgers,
} from '../services/student-fee-ledger.js';
import { promoteStudentProgression } from '../services/student-promotion.js';
import { publishFeeSchedule } from '../services/fee-visibility.js';
import {
  discountAssignmentDocument,
  refreshStudentScholarshipLedgers,
  scholarshipAssignmentDocument,
} from '../services/student-scholarships.js';

export const feesRouter = express.Router();
const upload = multer({
  storage: multer.memoryStorage(),
  limits: { fileSize: Math.max(config.maxUploadBytes, 10 * 1024 * 1024) },
  fileFilter(request, file, callback) {
    void request;
    callback(null, /\.xlsx$/i.test(file.originalname));
  },
});
const dateString = z.string().regex(/^\d{4}-\d{2}-\d{2}$/);
const amount = z.coerce.number().nonnegative().max(1_000_000_000);
const promotionSchema = z.object({ progressionIds: z.array(z.string()).min(1).max(500) });
const bookSchema = z.object({
  collegeId: z.string(),
  startDate: dateString,
  endDate: dateString,
  academicSession: z.string().trim().min(4).max(30),
  code: z.string().trim().min(2).max(40),
  frequency: z.enum(['semester', 'year']),
  isActive: z.boolean().optional().default(true),
});
const headSchema = z.object({
  bookId: z.string(),
  name: z.string().trim().min(2).max(120),
  category: z.enum(['fee', 'discount', 'payment-option']).optional().default('fee'),
  priority: z.coerce.number().int().min(1).max(9999).optional(),
  placement: z.enum(['top', 'bottom', 'before', 'after']).optional().default('bottom'),
  referenceHeadId: z.string().optional().nullable(),
  divideSemesterWise: z.boolean().optional().default(false),
  isActive: z.boolean().optional().default(true),
});
const hostelFeeSchema = z.object({
  bookId: z.string(),
  hostelId: z.string(),
  seater: z.coerce.number().int().min(1).max(50),
  roomType: z.string().trim().min(1).max(80),
  feeHeadId: z.string(),
  frequency: z.enum(['one-time', 'semester', 'half-yearly', 'yearly']),
  amount,
});
const courseFeeSchema = z.object({
  bookId: z.string(),
  courseId: z.string(),
  feeHeadId: z.string(),
  domicileId: z.string(),
  studentTypeId: z.string(),
  feeTypeId: z.string(),
  countryId: z.string().nullable().optional(),
  academicId: z.string().nullable().optional(),
  academicYear: z.coerce.number().int().min(1).max(10).nullable().optional(),
  semester: z.coerce.number().int().min(1).max(20).nullable().optional(),
  frequency: z.enum(['one-time', 'semester', 'half-yearly', 'yearly']),
  eligibilityBand: z.string().trim().max(500).optional().default('All candidates'),
  amount,
});
const courseFeeMatrixSchema = z.object({
  bookId: z.string(),
  courseId: z.string(),
  domicileId: z.string(),
  studentTypeId: z.string(),
  feeTypeId: z.string(),
  countryId: z.string().nullable().optional(),
  replaceExisting: z.boolean().optional().default(true),
  rows: z
    .array(
      z.object({
        feeHeadId: z.string(),
        amounts: z
          .array(
            z.object({
              periodType: z.enum(['year', 'semester']),
              periodNumber: z.coerce.number().int().min(1).max(20),
              amount,
            }),
          )
          .min(1),
      }),
    )
    .min(1),
});
const courseFeeDraftSchema = z.object({
  bookId: z.string(),
  departmentId: z.string().optional().default(''),
  levelId: z.string().optional().default(''),
  courseId: z.string().optional().default(''),
  domicileId: z.string().optional().default(''),
  studentTypeId: z.string().optional().default(''),
  feeTypeId: z.string().optional().default(''),
  countryId: z.string().optional().default(''),
  selectedFeeHeadIds: z.array(z.string()).max(500).optional().default([]),
  matrixAmounts: z
    .record(z.union([z.number().nonnegative().max(1_000_000_000), z.null()]))
    .optional()
    .default({}),
});
const studentLedgerGenerationSchema = z.object({
  studentAdmissionIds: z.array(z.string()).min(1).max(500),
});
const penaltySchema = z
  .object({
    enabled: z.boolean().optional().default(false),
    dueDate: dateString.optional(),
    dailyAmount: amount.optional().default(0),
    maxAmount: amount.optional().default(0),
  })
  .refine(
    (value) => !value.enabled || (value.dueDate && value.dailyAmount > 0 && value.maxAmount > 0),
    { message: 'Due date, daily amount and maximum amount are required when penalty is enabled.' },
  );
const progressionSchema = z.object({
  mode: z.enum(['semester', 'year']),
  studentAdmissionIds: z.array(z.string()).min(1).max(500),
  penalty: penaltySchema.optional().default({ enabled: false, dailyAmount: 0, maxAmount: 0 }),
});
const scholarshipBaseSchema = z.object({
  name: z.string().trim().min(2).max(120),
  valueMode: z.enum(['preconfigured', 'custom']).optional().default('preconfigured'),
  type: z.enum(['percentage', 'fixed']).nullish(),
  value: z.coerce.number().positive().max(1_000_000_000).nullish(),
  isActive: z.boolean().optional().default(true),
});
const scholarshipSchema = scholarshipBaseSchema.superRefine((data, context) => {
  if (data.valueMode === 'preconfigured' && (!data.type || !data.value))
    context.addIssue({
      code: 'custom',
      path: ['value'],
      message: 'Choose the calculation and value for a preconfigured scholarship.',
    });
  if (data.type === 'percentage' && Number(data.value || 0) > 100)
    context.addIssue({
      code: 'custom',
      path: ['value'],
      message: 'Percentage scholarship cannot exceed 100%.',
    });
});
const scholarshipAssignmentSchema = z
  .object({
    scholarshipId: z.string().min(1),
    type: z.enum(['percentage', 'fixed']).optional(),
    value: z.coerce.number().positive().max(1_000_000_000).optional(),
    recurring: z.boolean().optional().default(true),
    targetLedgerId: z.string().optional(),
  })
  .superRefine((data, context) => {
    if ((data.type && !data.value) || (!data.type && data.value))
      context.addIssue({
        code: 'custom',
        path: ['value'],
        message: 'Choose both the custom calculation and value.',
      });
    if (data.type === 'percentage' && Number(data.value || 0) > 100)
      context.addIssue({
        code: 'custom',
        path: ['value'],
        message: 'Percentage scholarship cannot exceed 100%.',
      });
    if (!data.recurring && !data.targetLedgerId)
      context.addIssue({
        code: 'custom',
        path: ['targetLedgerId'],
        message: 'Select the one-time scholarship fee period.',
      });
  });
const studentDiscountSchema = z
  .object({
    name: z.string().trim().min(2).max(120),
    type: z.enum(['percentage', 'fixed']),
    value: z.coerce.number().positive().max(1_000_000_000),
    targetLedgerId: z.string().min(1),
    internalRemark: z.string().trim().min(3).max(1000),
  })
  .superRefine((data, context) => {
    if (data.type === 'percentage' && data.value > 100)
      context.addIssue({
        code: 'custom',
        path: ['value'],
        message: 'Percentage discount cannot exceed 100%.',
      });
  });
const feeScheduleSchema = z.object({
  universityId: z.string().min(1),
  collegeId: z.string().min(1),
  academicSession: z.string().trim().min(4).max(30),
  mode: z.enum(['semester', 'year']),
  targetNumber: z.coerce.number().int().min(2).max(20).nullable().optional(),
  publishAt: z.coerce.date(),
  nextPeriodDeadline: z.coerce.date().optional(),
  previousPeriodDeadline: z.coerce.date().optional(),
  dailyFineAmount: amount.optional().default(0),
  maxFineAmount: amount.optional().default(0),
  isActive: z.boolean().optional().default(true),
});

async function masterValue(value, typeSlug, field) {
  const item = await db()
    .collection('masterValues')
    .findOne({ _id: id(value, field), typeSlug });
  if (!item) {
    const error = new Error(`${field} was not found.`);
    error.status = 404;
    throw error;
  }
  return item;
}

async function feeBook(value) {
  const item = await db()
    .collection('feeBooks')
    .findOne({ _id: id(value, 'bookId') });
  if (!item) {
    const error = new Error('Fee book was not found.');
    error.status = 404;
    throw error;
  }
  return item;
}

async function feeHead(value, bookId) {
  const item = await db()
    .collection('feeHeads')
    .findOne({
      _id: id(value, 'feeHeadId'),
      bookId,
    });
  if (!item) {
    const error = new Error('Fee head was not found in the selected book.');
    error.status = 404;
    throw error;
  }
  return item;
}

async function approvedStudent(value) {
  const student = await db()
    .collection('admissions')
    .findOne({
      _id: id(value, 'studentAdmissionId'),
      status: 'approved',
      isActive: true,
    });
  if (!student) {
    const error = new Error('Approved active student was not found.');
    error.status = 404;
    throw error;
  }
  return student;
}

feesRouter.get(
  '/scholarships',
  asyncHandler(async (request, response) => {
    const filter = request.query.active === 'true' ? { isActive: true } : {};
    const items = await db()
      .collection('scholarships')
      .find(filter)
      .sort({ isActive: -1, name: 1 })
      .toArray();
    response.json({ items: items.map(serialize) });
  }),
);

feesRouter.get(
  '/fee-schedules',
  asyncHandler(async (request, response) => {
    const filter = {};
    if (request.query.collegeId) filter.collegeId = id(request.query.collegeId, 'collegeId');
    if (request.query.academicSession)
      filter.academicSession = String(request.query.academicSession);
    const items = await db()
      .collection('feeSchedules')
      .find(filter)
      .sort({ academicSession: -1, mode: 1, targetNumber: 1 })
      .toArray();
    response.json({
      items: items.map((item) =>
        serialize({
          ...item,
          nextPeriodDeadline: item.nextPeriodDeadline || item.previousPeriodDeadline,
        }),
      ),
    });
  }),
);

feesRouter.post(
  '/fee-schedules',
  asyncHandler(async (request, response) => {
    const data = feeScheduleSchema.parse(request.body);
    data.nextPeriodDeadline ||= data.previousPeriodDeadline;
    if (!data.nextPeriodDeadline)
      return response.status(422).json({ message: 'The upcoming fee deadline is required.' });
    const [university, college] = await Promise.all([
      masterValue(data.universityId, 'university', 'universityId'),
      masterValue(data.collegeId, 'college', 'collegeId'),
    ]);
    if (String(college.parentId || '') !== String(university._id))
      return response.status(422).json({
        message: 'The selected college does not belong to the selected university.',
      });
    const now = new Date();
    const document = {
      ...data,
      universityId: university._id,
      universityName: university.name,
      collegeId: college._id,
      collegeName: college.name,
      createdBy: id(request.admin._id),
      createdAt: now,
      updatedAt: now,
    };
    const duplicate = await db().collection('feeSchedules').findOne({
      universityId: university._id,
      collegeId: college._id,
      academicSession: data.academicSession,
      mode: data.mode,
      targetNumber: null,
    });
    if (duplicate)
      return response
        .status(409)
        .json({ message: 'This college fee transition is already configured.' });
    const result = await db().collection('feeSchedules').insertOne(document);
    response.status(201).json({ item: serialize({ ...document, _id: result.insertedId }) });
  }),
);

feesRouter.patch(
  '/fee-schedules/:scheduleId',
  asyncHandler(async (request, response) => {
    const scheduleId = id(request.params.scheduleId, 'scheduleId');
    const current = await db().collection('feeSchedules').findOne({ _id: scheduleId });
    if (!current) return response.status(404).json({ message: 'Fee schedule was not found.' });
    const parsed = feeScheduleSchema.parse({
      ...current,
      universityId: String(current.universityId),
      collegeId: String(current.collegeId),
      nextPeriodDeadline: current.nextPeriodDeadline || current.previousPeriodDeadline,
      ...request.body,
    });
    parsed.nextPeriodDeadline ||= parsed.previousPeriodDeadline;
    if (!parsed.nextPeriodDeadline)
      return response.status(422).json({ message: 'The upcoming fee deadline is required.' });
    const [university, college] = await Promise.all([
      masterValue(String(parsed.universityId), 'university', 'universityId'),
      masterValue(String(parsed.collegeId), 'college', 'collegeId'),
    ]);
    if (String(college.parentId || '') !== String(university._id))
      return response.status(422).json({
        message: 'The selected college does not belong to the selected university.',
      });
    const update = {
      ...parsed,
      universityId: university._id,
      universityName: university.name,
      collegeId: college._id,
      collegeName: college.name,
      updatedAt: new Date(),
    };
    await db().collection('feeSchedules').updateOne({ _id: scheduleId }, { $set: update });
    const item = await db().collection('feeSchedules').findOne({ _id: scheduleId });
    response.json({ item: serialize(item) });
  }),
);

feesRouter.post(
  '/fee-schedules/:scheduleId/publish',
  asyncHandler(async (request, response) => {
    const schedule = await db()
      .collection('feeSchedules')
      .findOne({ _id: id(request.params.scheduleId, 'scheduleId'), isActive: true });
    if (!schedule)
      return response.status(404).json({ message: 'Active fee schedule was not found.' });
    const results = await publishFeeSchedule(db(), schedule, id(request.admin._id));
    response.json({
      studentsProcessed: results.length,
      published: results.filter((item) => item.published && !item.alreadyPublished).length,
      alreadyPublished: results.filter((item) => item.published && item.alreadyPublished).length,
      scheduled: results.filter((item) => item.scheduled).length,
      results: results.map(serialize),
    });
  }),
);

feesRouter.delete(
  '/fee-schedules/:scheduleId',
  asyncHandler(async (request, response) => {
    const scheduleId = id(request.params.scheduleId, 'scheduleId');
    const schedule = await db().collection('feeSchedules').findOne({ _id: scheduleId });
    if (!schedule) return response.status(404).json({ message: 'Fee schedule was not found.' });
    await db().collection('feeSchedules').deleteOne({ _id: scheduleId });
    await db()
      .collection('studentFeeLedgers')
      .updateMany(
        { feeScheduleId: scheduleId },
        { $unset: { feeScheduleId: '' }, $set: { updatedAt: new Date() } },
      );
    response.json({ deleted: true });
  }),
);

feesRouter.post(
  '/scholarships',
  asyncHandler(async (request, response) => {
    const data = scholarshipSchema.parse(request.body);
    const normalizedName = normalizeFeeName(data.name);
    const duplicate = await db().collection('scholarships').findOne({ normalizedName });
    if (duplicate)
      return response.status(409).json({ message: 'A scholarship with this name already exists.' });
    const now = new Date();
    const document = {
      ...data,
      type: data.valueMode === 'custom' ? null : data.type,
      value: data.valueMode === 'custom' ? null : Number(data.value),
      normalizedName,
      createdBy: id(request.admin._id),
      createdAt: now,
      updatedAt: now,
    };
    const result = await db().collection('scholarships').insertOne(document);
    response.status(201).json({ item: serialize({ ...document, _id: result.insertedId }) });
  }),
);

feesRouter.patch(
  '/scholarships/:scholarshipId',
  asyncHandler(async (request, response) => {
    const data = scholarshipBaseSchema.partial().parse(request.body);
    const scholarshipId = id(request.params.scholarshipId, 'scholarshipId');
    const current = await db().collection('scholarships').findOne({ _id: scholarshipId });
    if (!current) return response.status(404).json({ message: 'Scholarship was not found.' });
    const candidate = scholarshipSchema.parse({ ...current, ...data });
    const update = {
      ...candidate,
      type: candidate.valueMode === 'custom' ? null : candidate.type,
      value: candidate.valueMode === 'custom' ? null : Number(candidate.value),
      updatedAt: new Date(),
    };
    if (data.name) {
      update.normalizedName = normalizeFeeName(data.name);
      const duplicate = await db()
        .collection('scholarships')
        .findOne({
          normalizedName: update.normalizedName,
          _id: { $ne: scholarshipId },
        });
      if (duplicate)
        return response
          .status(409)
          .json({ message: 'A scholarship with this name already exists.' });
    }
    await db().collection('scholarships').updateOne({ _id: scholarshipId }, { $set: update });
    const item = await db().collection('scholarships').findOne({ _id: scholarshipId });
    response.json({ item: serialize(item) });
  }),
);

feesRouter.delete(
  '/scholarships/:scholarshipId',
  asyncHandler(async (request, response) => {
    const scholarshipId = id(request.params.scholarshipId, 'scholarshipId');
    const assigned = await db().collection('studentScholarships').countDocuments({ scholarshipId });
    if (assigned)
      return response.status(409).json({
        message: 'This scholarship has student history. Disable it instead of deleting it.',
      });
    const result = await db().collection('scholarships').deleteOne({ _id: scholarshipId });
    if (!result.deletedCount)
      return response.status(404).json({ message: 'Scholarship was not found.' });
    response.status(204).end();
  }),
);

feesRouter.get(
  '/student-scholarships/:studentAdmissionId',
  asyncHandler(async (request, response) => {
    const student = await approvedStudent(request.params.studentAdmissionId);
    const [assignments, discounts, ledgers, scholarships] = await Promise.all([
      db()
        .collection('studentScholarships')
        .find({ studentAdmissionId: student._id, status: 'active' })
        .sort({ assignedAt: 1 })
        .toArray(),
      db()
        .collection('studentDiscounts')
        .find({ studentAdmissionId: student._id, status: 'active' })
        .sort({ createdAt: 1 })
        .toArray(),
      db()
        .collection('studentFeeLedgers')
        .find({ studentAdmissionId: student._id, kind: 'academic', status: 'active' })
        .sort({ currentAcademicYear: 1, currentSemester: 1 })
        .toArray(),
      db().collection('scholarships').find({ isActive: true }).sort({ name: 1 }).toArray(),
    ]);
    response.json({
      student: serialize(student),
      assignments: assignments.map(serialize),
      discounts: discounts.map(serialize),
      ledgers: ledgers.map(serialize),
      scholarships: scholarships.map(serialize),
    });
  }),
);

feesRouter.post(
  '/student-scholarships/:studentAdmissionId',
  asyncHandler(async (request, response) => {
    const data = scholarshipAssignmentSchema.parse(request.body);
    const student = await approvedStudent(request.params.studentAdmissionId);
    const scholarship = await db()
      .collection('scholarships')
      .findOne({
        _id: id(data.scholarshipId, 'scholarshipId'),
        isActive: true,
      });
    if (!scholarship)
      return response.status(404).json({ message: 'Active scholarship was not found.' });
    const customValue = scholarship.valueMode === 'custom';
    if (customValue && (!data.type || Number(data.value || 0) <= 0))
      return response.status(400).json({
        message: 'Choose the calculation and value for this custom scholarship.',
      });
    if (!customValue && (!scholarship.type || Number(scholarship.value || 0) <= 0))
      return response.status(409).json({
        message: 'Configure the scholarship calculation and value before assigning this head.',
      });
    const duplicate = await db().collection('studentScholarships').findOne({
      studentAdmissionId: student._id,
      scholarshipId: scholarship._id,
      status: 'active',
    });
    if (duplicate)
      return response.status(409).json({ message: 'This scholarship is already assigned.' });
    const targetLedger = data.recurring
      ? null
      : await db()
          .collection('studentFeeLedgers')
          .findOne({
            _id: id(data.targetLedgerId, 'targetLedgerId'),
            studentAdmissionId: student._id,
            kind: 'academic',
            status: 'active',
          });
    if (!data.recurring && !targetLedger)
      return response.status(404).json({ message: 'Selected Academic Fee period was not found.' });
    const document = scholarshipAssignmentDocument(
      student,
      scholarship,
      data,
      request.admin._id,
      targetLedger,
    );
    const result = await db().collection('studentScholarships').insertOne(document);
    const assignment = { ...document, _id: result.insertedId };
    try {
      const ledgers = await refreshStudentScholarshipLedgers(db(), student);
      response.status(201).json({
        item: serialize(assignment),
        ledgers: ledgers.map(serialize),
      });
    } catch (error) {
      await db().collection('studentScholarships').deleteOne({ _id: result.insertedId });
      throw error;
    }
  }),
);

feesRouter.post(
  '/student-discounts/:studentAdmissionId',
  asyncHandler(async (request, response) => {
    const data = studentDiscountSchema.parse(request.body);
    const student = await approvedStudent(request.params.studentAdmissionId);
    const ledger = await db()
      .collection('studentFeeLedgers')
      .findOne({
        _id: id(data.targetLedgerId, 'targetLedgerId'),
        studentAdmissionId: student._id,
        kind: 'academic',
        status: 'active',
      });
    if (!ledger)
      return response.status(404).json({ message: 'Selected Academic Fee period was not found.' });
    const hasTuitionFee = (ledger.entries || []).some(
      (entry) => entry.category === 'fee' && /\btuition\b/i.test(entry.feeHeadName || ''),
    );
    if (!hasTuitionFee)
      return response.status(409).json({
        message: 'The selected fee period has no Tuition Fee to discount.',
      });
    const document = discountAssignmentDocument(student, ledger, data, request.admin._id);
    const result = await db().collection('studentDiscounts').insertOne(document);
    const discount = { ...document, _id: result.insertedId };
    try {
      const ledgers = await refreshStudentScholarshipLedgers(db(), student);
      response.status(201).json({ item: serialize(discount), ledgers: ledgers.map(serialize) });
    } catch (error) {
      await db().collection('studentDiscounts').deleteOne({ _id: result.insertedId });
      throw error;
    }
  }),
);

feesRouter.delete(
  '/student-discounts/:studentAdmissionId/:discountId',
  asyncHandler(async (request, response) => {
    const student = await approvedStudent(request.params.studentAdmissionId);
    const discountId = id(request.params.discountId, 'discountId');
    const discount = await db().collection('studentDiscounts').findOne({
      _id: discountId,
      studentAdmissionId: student._id,
      status: 'active',
    });
    if (!discount)
      return response.status(404).json({ message: 'One-time discount was not found.' });
    const ledger = await db().collection('studentFeeLedgers').findOne({
      _id: discount.targetLedgerId,
      studentAdmissionId: student._id,
      status: 'active',
    });
    if (Number(ledger?.paidAmount || 0) > 0)
      return response.status(409).json({
        message:
          'This fee period already has a payment. The discount must be reversed by Accounts.',
      });
    const removedAt = new Date();
    await db()
      .collection('studentDiscounts')
      .updateOne(
        { _id: discountId },
        {
          $set: {
            status: 'removed',
            removedAt,
            removedBy: id(request.admin._id),
            updatedAt: removedAt,
          },
        },
      );
    try {
      const ledgers = await refreshStudentScholarshipLedgers(db(), student);
      response.json({ removed: true, ledgers: ledgers.map(serialize) });
    } catch (error) {
      await db()
        .collection('studentDiscounts')
        .updateOne(
          { _id: discountId },
          {
            $set: { status: 'active', updatedAt: new Date() },
            $unset: { removedAt: '', removedBy: '' },
          },
        );
      throw error;
    }
  }),
);

feesRouter.delete(
  '/student-scholarships/:studentAdmissionId/:assignmentId',
  asyncHandler(async (request, response) => {
    const student = await approvedStudent(request.params.studentAdmissionId);
    const assignmentId = id(request.params.assignmentId, 'assignmentId');
    const assignment = await db().collection('studentScholarships').findOne({
      _id: assignmentId,
      studentAdmissionId: student._id,
      status: 'active',
    });
    if (!assignment)
      return response.status(404).json({ message: 'Student scholarship was not found.' });
    const removedAt = new Date();
    await db()
      .collection('studentScholarships')
      .updateOne(
        { _id: assignmentId },
        {
          $set: {
            status: 'removed',
            removedAt,
            removedBy: id(request.admin._id),
            updatedAt: removedAt,
          },
        },
      );
    try {
      const ledgers = await refreshStudentScholarshipLedgers(db(), student, {
        preservePaidScholarships: true,
      });
      response.json({ removed: true, ledgers: ledgers.map(serialize) });
    } catch (error) {
      await db()
        .collection('studentScholarships')
        .updateOne(
          { _id: assignmentId },
          {
            $set: { status: 'active', updatedAt: new Date() },
            $unset: { removedAt: '', removedBy: '' },
          },
        );
      throw error;
    }
  }),
);

feesRouter.get(
  '/books',
  asyncHandler(async (request, response) => {
    const items = await db().collection('feeBooks').find({}).sort({ createdAt: -1 }).toArray();
    response.json({ items: items.map(serialize) });
  }),
);

feesRouter.get(
  '/course-options',
  asyncHandler(async (request, response) => {
    const items = await db()
      .collection('masterValues')
      .find({ typeSlug: 'course', isActive: true })
      .project({ name: 1, parentId: 1, isActive: 1, metadata: 1 })
      .sort({ name: 1 })
      .toArray();
    response.json({ items: items.map(serialize) });
  }),
);

feesRouter.get(
  '/student-ledgers',
  asyncHandler(async (request, response) => {
    const filter = { status: 'active' };
    if (request.query.studentAdmissionId)
      filter.studentAdmissionId = id(request.query.studentAdmissionId, 'studentAdmissionId');
    const items = await db()
      .collection('studentFeeLedgers')
      .find(filter)
      .sort({ studentName: 1, kind: 1, createdAt: -1 })
      .limit(2000)
      .toArray();
    response.json({ items: items.map(serialize) });
  }),
);

feesRouter.post(
  '/student-ledgers/generate',
  asyncHandler(async (request, response) => {
    const data = studentLedgerGenerationSchema.parse(request.body);
    const admissionIds = [...new Set(data.studentAdmissionIds)].map((value) =>
      id(value, 'studentAdmissionId'),
    );
    const admissions = await db()
      .collection('admissions')
      .find({ _id: { $in: admissionIds } })
      .toArray();
    const admissionMap = new Map(admissions.map((student) => [String(student._id), student]));
    const results = [];
    for (const admissionId of admissionIds) {
      const admission = admissionMap.get(String(admissionId));
      if (!admission) {
        results.push({
          studentAdmissionId: admissionId,
          success: false,
          createdKinds: [],
          skippedKinds: [],
          reason: 'Student not found.',
        });
        continue;
      }
      results.push(await generateStudentFeeLedgers(db(), admission, id(request.admin._id)));
    }
    response.json({
      created: results.reduce((total, result) => total + result.createdKinds.length, 0),
      studentsProcessed: results.length,
      results: results.map(serialize),
    });
  }),
);

function escapeRegex(value) {
  return String(value).replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

feesRouter.get(
  '/student-ledgers/progression-candidates',
  asyncHandler(async (request, response) => {
    const mode = z.enum(['semester', 'year']).parse(request.query.mode || 'semester');
    const items = await progressionCandidates(db(), mode);
    response.json({ items: items.map(serialize) });
  }),
);

feesRouter.post(
  '/student-ledgers/progress',
  asyncHandler(async (request, response) => {
    const data = progressionSchema.parse(request.body);
    const admissionIds = [...new Set(data.studentAdmissionIds)].map((value) =>
      id(value, 'studentAdmissionId'),
    );
    const admissions = await db()
      .collection('admissions')
      .find({ _id: { $in: admissionIds } })
      .toArray();
    const admissionMap = new Map(admissions.map((student) => [String(student._id), student]));
    const results = [];
    for (const admissionId of admissionIds) {
      const admission = admissionMap.get(String(admissionId));
      if (!admission) continue;
      results.push(
        await progressStudentFee(db(), admission, data.mode, id(request.admin._id), data.penalty),
      );
    }
    response.json({
      created: results.reduce((total, result) => total + result.createdKinds.length, 0),
      promotionsCreated: results.filter((result) => result.promotionCreated).length,
      studentsProcessed: results.length,
      results: results.map(serialize),
    });
  }),
);

feesRouter.get(
  '/student-promotions',
  asyncHandler(async (request, response) => {
    const filter = {};
    if (request.query.mode) filter.mode = z.enum(['semester', 'year']).parse(request.query.mode);
    if (request.query.status && request.query.status !== 'all')
      filter.status = z
        .enum(['pending', 'promoting', 'promoted', 'cancelled'])
        .parse(request.query.status);
    if (request.query.academicSession)
      filter.academicSession = String(request.query.academicSession);
    if (request.query.courseId) filter.courseId = id(request.query.courseId, 'courseId');
    if (request.query.currentAcademicYear)
      filter.fromAcademicYear = z.coerce
        .number()
        .int()
        .min(1)
        .max(10)
        .parse(request.query.currentAcademicYear);
    if (request.query.currentSemester)
      filter.fromSemester = z.coerce
        .number()
        .int()
        .min(1)
        .max(20)
        .parse(request.query.currentSemester);
    if (request.query.search) {
      const match = { $regex: escapeRegex(request.query.search), $options: 'i' };
      filter.$or = [
        { studentName: match },
        { studentId: match },
        { courseName: match },
        { academicSession: match },
      ];
    }
    const items = await db()
      .collection('studentProgressions')
      .find(filter)
      .sort({ createdAt: -1 })
      .limit(5000)
      .toArray();
    response.json({ items: items.map(serialize) });
  }),
);

feesRouter.post(
  '/student-promotions/promote',
  asyncHandler(async (request, response) => {
    const data = promotionSchema.parse(request.body);
    const progressionIds = [...new Set(data.progressionIds)].map((value) =>
      id(value, 'progressionId'),
    );
    const results = [];
    for (const progressionId of progressionIds) {
      try {
        const item = await promoteStudentProgression(db(), progressionId, id(request.admin._id));
        results.push({ progressionId, success: true, item });
      } catch (error) {
        results.push({ progressionId, success: false, reason: error.message });
      }
    }
    response.json({
      promoted: results.filter((result) => result.success).length,
      requested: progressionIds.length,
      results: results.map(serialize),
    });
  }),
);

feesRouter.post(
  '/student-ledgers/recalculate',
  asyncHandler(async (request, response) => {
    const data = studentLedgerGenerationSchema.parse(request.body);
    const admissionIds = [...new Set(data.studentAdmissionIds)].map((value) =>
      id(value, 'studentAdmissionId'),
    );
    const admissions = await db()
      .collection('admissions')
      .find({ _id: { $in: admissionIds } })
      .toArray();
    const admissionMap = new Map(admissions.map((student) => [String(student._id), student]));
    const results = [];
    for (const admissionId of admissionIds) {
      const admission = admissionMap.get(String(admissionId));
      if (!admission) continue;
      results.push(await recalculateStudentAcademicLedger(db(), admission, id(request.admin._id)));
    }
    response.json({
      created: results.reduce((total, result) => total + result.createdKinds.length, 0),
      studentsProcessed: results.length,
      results: results.map(serialize),
    });
  }),
);

feesRouter.delete(
  '/student-ledgers/student/:studentAdmissionId',
  asyncHandler(async (request, response) => {
    const studentAdmissionId = id(request.params.studentAdmissionId, 'studentAdmissionId');
    const deleted = await removeStudentFeeLedgers(db(), studentAdmissionId);
    if (!deleted)
      return response
        .status(404)
        .json({ message: 'No active Academic or Hostel Fee ledger found.' });
    response.json({ deleted });
  }),
);

feesRouter.post(
  '/books',
  asyncHandler(async (request, response) => {
    const data = bookSchema.parse(request.body);
    if (data.endDate < data.startDate)
      return response.status(400).json({ message: 'End date must be on or after start date.' });
    const college = await masterValue(data.collegeId, 'college', 'collegeId');
    const now = new Date();
    const document = {
      ...data,
      code: data.code.toUpperCase(),
      collegeId: college._id,
      collegeName: college.name,
      createdBy: id(request.admin._id),
      createdAt: now,
      updatedAt: now,
    };
    const result = await db().collection('feeBooks').insertOne(document);
    response.status(201).json({ item: serialize({ ...document, _id: result.insertedId }) });
  }),
);

feesRouter.patch(
  '/books/:bookId',
  asyncHandler(async (request, response) => {
    const data = bookSchema.partial().parse(request.body);
    if (data.collegeId) {
      const college = await masterValue(data.collegeId, 'college', 'collegeId');
      data.collegeId = college._id;
      data.collegeName = college.name;
    }
    if (data.code) data.code = data.code.toUpperCase();
    const result = await db()
      .collection('feeBooks')
      .findOneAndUpdate(
        { _id: id(request.params.bookId) },
        { $set: { ...data, updatedAt: new Date() } },
        { returnDocument: 'after' },
      );
    if (!result) return response.status(404).json({ message: 'Fee book was not found.' });
    response.json({ item: serialize(result) });
  }),
);

feesRouter.delete(
  '/books/:bookId',
  asyncHandler(async (request, response) => {
    const bookId = id(request.params.bookId);
    const usage = await Promise.all(
      ['feeHeads', 'hostelFees', 'courseFees'].map((name) =>
        db().collection(name).countDocuments({ bookId }),
      ),
    );
    if (usage.some(Boolean))
      return response
        .status(409)
        .json({ message: 'This book has fee records. Disable it instead of deleting it.' });
    const result = await db().collection('feeBooks').deleteOne({ _id: bookId });
    if (!result.deletedCount)
      return response.status(404).json({ message: 'Fee book was not found.' });
    response.status(204).end();
  }),
);

feesRouter.get(
  '/heads',
  asyncHandler(async (request, response) => {
    const filter = request.query.bookId ? { bookId: id(request.query.bookId, 'bookId') } : {};
    const items = await db()
      .collection('feeHeads')
      .find(filter)
      .sort({ priority: 1, createdAt: 1, name: 1 })
      .toArray();
    response.json({ items: items.map(serialize) });
  }),
);

async function nextFeeHeadPriority(bookId) {
  const last = await db()
    .collection('feeHeads')
    .find({ bookId })
    .sort({ priority: -1 })
    .limit(1)
    .next();
  return Number(last?.priority || 0) + 1;
}

function requiresCountry(studentType, domicile) {
  return /foreign|international|nri/i.test(`${studentType?.name || ''} ${domicile?.name || ''}`);
}

function feeTypePeriod(feeType) {
  if (/semester|sem/i.test(feeType?.name || '')) return 'semester';
  if (/year|annual/i.test(feeType?.name || '')) return 'year';
  const configured = feeType?.metadata?.periodType;
  if (configured === 'year' || configured === 'semester') return configured;
  const error = new Error('Selected fee type must represent Yearly or Semester fees.');
  error.status = 400;
  throw error;
}

async function resequenceFeeHeadPriority(bookId, feeHeadId, requestedPriority) {
  const heads = await db()
    .collection('feeHeads')
    .find({ bookId })
    .sort({ priority: 1, createdAt: 1, name: 1 })
    .toArray();
  const selected = heads.find((head) => String(head._id) === String(feeHeadId));
  if (!selected) return;
  const remaining = heads.filter((head) => String(head._id) !== String(feeHeadId));
  const position = Math.min(
    remaining.length,
    Math.max(0, Math.round(Number(requestedPriority || remaining.length + 1)) - 1),
  );
  remaining.splice(position, 0, selected);
  await Promise.all(
    remaining.map((head, index) =>
      db()
        .collection('feeHeads')
        .updateOne({ _id: head._id }, { $set: { priority: index + 1 } }),
    ),
  );
}

async function compactFeeHeadPriorities(bookId) {
  const heads = await db()
    .collection('feeHeads')
    .find({ bookId })
    .sort({ priority: 1, createdAt: 1, name: 1 })
    .toArray();
  await Promise.all(
    heads.map((head, index) =>
      db()
        .collection('feeHeads')
        .updateOne({ _id: head._id }, { $set: { priority: index + 1 } }),
    ),
  );
}

async function resolveFeeHeadPriority(bookId, placement, referenceHeadId) {
  if (placement === 'top') return 0;
  if ((placement === 'before' || placement === 'after') && referenceHeadId) {
    const reference = await db()
      .collection('feeHeads')
      .findOne({ _id: id(referenceHeadId, 'referenceHeadId'), bookId });
    if (reference) return Number(reference.priority || 1) + (placement === 'after' ? 0.5 : -0.5);
  }
  return nextFeeHeadPriority(bookId);
}

feesRouter.post(
  '/heads',
  asyncHandler(async (request, response) => {
    const data = headSchema.parse(request.body);
    const book = await feeBook(data.bookId);
    const now = new Date();
    const priority =
      data.priority ||
      (await resolveFeeHeadPriority(book._id, data.placement, data.referenceHeadId));
    const headData = { ...data };
    delete headData.placement;
    delete headData.referenceHeadId;
    const document = {
      ...headData,
      bookId: book._id,
      bookCode: book.code,
      priority,
      normalizedName: normalizeFeeName(data.name),
      createdBy: id(request.admin._id),
      createdAt: now,
      updatedAt: now,
    };
    const result = await db().collection('feeHeads').insertOne(document);
    await resequenceFeeHeadPriority(book._id, result.insertedId, priority);
    const item = await db().collection('feeHeads').findOne({ _id: result.insertedId });
    response.status(201).json({ item: serialize(item) });
  }),
);

feesRouter.patch(
  '/heads/:headId',
  asyncHandler(async (request, response) => {
    const data = headSchema.omit({ bookId: true }).partial().parse(request.body);
    if (data.name) data.normalizedName = normalizeFeeName(data.name);
    const current = await db()
      .collection('feeHeads')
      .findOne({ _id: id(request.params.headId) });
    if (!current) return response.status(404).json({ message: 'Fee head was not found.' });
    if (data.placement) {
      data.priority = await resolveFeeHeadPriority(
        current.bookId,
        data.placement,
        data.referenceHeadId,
      );
    }
    const requestedPriority = data.priority ?? current.priority;
    const headData = { ...data };
    delete headData.placement;
    delete headData.referenceHeadId;
    await db()
      .collection('feeHeads')
      .updateOne({ _id: current._id }, { $set: { ...headData, updatedAt: new Date() } });
    await resequenceFeeHeadPriority(current.bookId, current._id, requestedPriority);
    const result = await db().collection('feeHeads').findOne({ _id: current._id });
    response.json({ item: serialize(result) });
  }),
);

feesRouter.delete(
  '/heads/:headId',
  asyncHandler(async (request, response) => {
    const feeHeadId = id(request.params.headId);
    const current = await db().collection('feeHeads').findOne({ _id: feeHeadId });
    if (!current) return response.status(404).json({ message: 'Fee head was not found.' });
    const usage = await Promise.all(
      ['hostelFees', 'courseFees'].map((name) =>
        db().collection(name).countDocuments({ feeHeadId }),
      ),
    );
    if (usage.some(Boolean))
      return response
        .status(409)
        .json({ message: 'This fee head is in use. Disable it instead of deleting it.' });
    const result = await db().collection('feeHeads').deleteOne({ _id: feeHeadId });
    if (!result.deletedCount)
      return response.status(404).json({ message: 'Fee head was not found.' });
    await compactFeeHeadPriorities(current.bookId);
    response.status(204).end();
  }),
);

feesRouter.get(
  '/hostel-fees',
  asyncHandler(async (request, response) => {
    const filter = request.query.bookId ? { bookId: id(request.query.bookId, 'bookId') } : {};
    const items = await db()
      .collection('hostelFees')
      .find(filter)
      .sort({ hostelName: 1, seater: 1, roomType: 1 })
      .toArray();
    response.json({ items: items.map(serialize) });
  }),
);

feesRouter.post(
  '/hostel-fees',
  asyncHandler(async (request, response) => {
    const data = hostelFeeSchema.parse(request.body);
    const book = await feeBook(data.bookId);
    const hostel = await db()
      .collection('hostels')
      .findOne({ _id: id(data.hostelId, 'hostelId') });
    if (!hostel) return response.status(404).json({ message: 'Hostel was not found.' });
    const head = await feeHead(data.feeHeadId, book._id);
    const now = new Date();
    const document = {
      ...data,
      bookId: book._id,
      bookCode: book.code,
      hostelId: hostel._id,
      hostelName: hostel.name,
      feeHeadId: head._id,
      feeHeadName: head.name,
      createdBy: id(request.admin._id),
      createdAt: now,
      updatedAt: now,
    };
    const result = await db().collection('hostelFees').insertOne(document);
    response.status(201).json({ item: serialize({ ...document, _id: result.insertedId }) });
  }),
);

feesRouter.delete(
  '/hostel-fees/:feeId',
  asyncHandler(async (request, response) => {
    const result = await db()
      .collection('hostelFees')
      .deleteOne({ _id: id(request.params.feeId) });
    if (!result.deletedCount)
      return response.status(404).json({ message: 'Hostel fee was not found.' });
    response.status(204).end();
  }),
);

feesRouter.get(
  '/course-fees',
  asyncHandler(async (request, response) => {
    const filter = request.query.bookId ? { bookId: id(request.query.bookId, 'bookId') } : {};
    if (request.query.courseId) filter.courseId = id(request.query.courseId, 'courseId');
    if (request.query.domicileId) filter.domicileId = id(request.query.domicileId, 'domicileId');
    if (request.query.studentTypeId)
      filter.studentTypeId = id(request.query.studentTypeId, 'studentTypeId');
    if (request.query.countryId) filter.countryId = id(request.query.countryId, 'countryId');
    const items = await db()
      .collection('courseFees')
      .find(filter)
      .sort({
        courseName: 1,
        domicileName: 1,
        studentTypeName: 1,
        countryName: 1,
        academicYear: 1,
        semester: 1,
        feeHeadName: 1,
      })
      .limit(5000)
      .toArray();
    response.json({ items: items.map(serialize) });
  }),
);

feesRouter.post(
  '/course-fees',
  asyncHandler(async (request, response) => {
    const data = courseFeeSchema.parse(request.body);
    const book = await feeBook(data.bookId);
    const course = await masterValue(data.courseId, 'course', 'courseId');
    const head = await feeHead(data.feeHeadId, book._id);
    const domicile = await masterValue(data.domicileId, 'domicile', 'domicileId');
    const studentType = await masterValue(data.studentTypeId, 'student-type', 'studentTypeId');
    const feeType = await masterValue(data.feeTypeId, 'fee-type', 'feeTypeId');
    const periodType = feeTypePeriod(feeType);
    if (requiresCountry(studentType, domicile) && !data.countryId) {
      return response
        .status(400)
        .json({ message: 'Country is required for a foreign domicile or student type.' });
    }
    const country = data.countryId
      ? await masterValue(data.countryId, 'country', 'countryId')
      : null;
    const academic = data.academicId
      ? await masterValue(data.academicId, 'academic', 'academicId')
      : null;
    const now = new Date();
    const document = {
      ...data,
      bookId: book._id,
      bookCode: book.code,
      courseId: course._id,
      courseName: course.name,
      feeHeadId: head._id,
      feeHeadName: head.name,
      domicileId: domicile._id,
      domicileName: domicile.name,
      studentTypeId: studentType._id,
      studentTypeName: studentType.name,
      feeTypeId: feeType._id,
      feeTypeName: feeType.name,
      periodType,
      countryId: country?._id || null,
      countryName: country?.name || null,
      academicId: academic?._id || null,
      academicName: academic?.name || null,
      category: head.category,
      source: 'manual',
      createdBy: id(request.admin._id),
      createdAt: now,
      updatedAt: now,
    };
    const result = await db().collection('courseFees').insertOne(document);
    response.status(201).json({ item: serialize({ ...document, _id: result.insertedId }) });
  }),
);

feesRouter.get(
  '/course-fee-drafts',
  asyncHandler(async (request, response) => {
    const filter = request.query.bookId ? { bookId: id(request.query.bookId, 'bookId') } : {};
    const items = await db()
      .collection('courseFeeDrafts')
      .find(filter)
      .sort({ updatedAt: -1 })
      .limit(250)
      .toArray();
    response.json({ items: items.map(serialize) });
  }),
);

feesRouter.get(
  '/course-fee-drafts/:draftId',
  asyncHandler(async (request, response) => {
    const item = await db()
      .collection('courseFeeDrafts')
      .findOne({ _id: id(request.params.draftId, 'draftId') });
    if (!item) return response.status(404).json({ message: 'Course fee draft was not found.' });
    response.json({ item: serialize(item) });
  }),
);

feesRouter.post(
  '/course-fee-drafts',
  asyncHandler(async (request, response) => {
    const data = courseFeeDraftSchema.parse(request.body);
    const book = await feeBook(data.bookId);
    const course = data.courseId
      ? await db()
          .collection('masterValues')
          .findOne({ _id: id(data.courseId, 'courseId'), typeSlug: 'course' })
      : null;
    const now = new Date();
    const document = {
      ...data,
      bookId: book._id,
      bookCode: book.code,
      collegeName: book.collegeName,
      academicSession: book.academicSession,
      courseName: course?.name || '',
      status: 'draft',
      createdBy: id(request.admin._id),
      updatedBy: id(request.admin._id),
      createdAt: now,
      updatedAt: now,
    };
    const result = await db().collection('courseFeeDrafts').insertOne(document);
    response.status(201).json({ item: serialize({ ...document, _id: result.insertedId }) });
  }),
);

feesRouter.put(
  '/course-fee-drafts/:draftId',
  asyncHandler(async (request, response) => {
    const draftId = id(request.params.draftId, 'draftId');
    const existing = await db().collection('courseFeeDrafts').findOne({ _id: draftId });
    if (!existing) return response.status(404).json({ message: 'Course fee draft was not found.' });
    const data = courseFeeDraftSchema.parse(request.body);
    const book = await feeBook(data.bookId);
    const course = data.courseId
      ? await db()
          .collection('masterValues')
          .findOne({ _id: id(data.courseId, 'courseId'), typeSlug: 'course' })
      : null;
    const update = {
      ...data,
      bookId: book._id,
      bookCode: book.code,
      collegeName: book.collegeName,
      academicSession: book.academicSession,
      courseName: course?.name || '',
      status: 'draft',
      updatedBy: id(request.admin._id),
      updatedAt: new Date(),
    };
    const item = await db()
      .collection('courseFeeDrafts')
      .findOneAndUpdate({ _id: draftId }, { $set: update }, { returnDocument: 'after' });
    response.json({ item: serialize(item) });
  }),
);

feesRouter.delete(
  '/course-fee-drafts/:draftId',
  asyncHandler(async (request, response) => {
    const result = await db()
      .collection('courseFeeDrafts')
      .deleteOne({ _id: id(request.params.draftId, 'draftId') });
    if (!result.deletedCount)
      return response.status(404).json({ message: 'Course fee draft was not found.' });
    response.status(204).end();
  }),
);

feesRouter.post(
  '/course-fees/matrix',
  asyncHandler(async (request, response) => {
    const data = courseFeeMatrixSchema.parse(request.body);
    const book = await feeBook(data.bookId);
    const course = await masterValue(data.courseId, 'course', 'courseId');
    const domicile = await masterValue(data.domicileId, 'domicile', 'domicileId');
    const studentType = await masterValue(data.studentTypeId, 'student-type', 'studentTypeId');
    const feeType = await masterValue(data.feeTypeId, 'fee-type', 'feeTypeId');
    const periodType = feeTypePeriod(feeType);
    if (requiresCountry(studentType, domicile) && !data.countryId) {
      return response
        .status(400)
        .json({ message: 'Country is required for a foreign domicile or student type.' });
    }
    const country = data.countryId
      ? await masterValue(data.countryId, 'country', 'countryId')
      : null;
    const headIds = data.rows.map((row) => id(row.feeHeadId, 'feeHeadId'));
    const heads = await db()
      .collection('feeHeads')
      .find({ _id: { $in: headIds }, bookId: book._id, isActive: true })
      .toArray();
    const headMap = new Map(heads.map((head) => [String(head._id), head]));
    const now = new Date();
    const documents = [];
    for (const row of data.rows) {
      const head = headMap.get(String(id(row.feeHeadId, 'feeHeadId')));
      if (!head) continue;
      for (const cell of row.amounts) {
        if (cell.periodType !== periodType) {
          return response.status(400).json({
            message: `Fee matrix periods must match the selected ${feeType.name} fee type.`,
          });
        }
        documents.push({
          bookId: book._id,
          bookCode: book.code,
          courseId: course._id,
          courseName: course.name,
          feeHeadId: head._id,
          feeHeadName: head.name,
          domicileId: domicile._id,
          domicileName: domicile.name,
          studentTypeId: studentType._id,
          studentTypeName: studentType.name,
          feeTypeId: feeType._id,
          feeTypeName: feeType.name,
          periodType,
          countryId: country?._id || null,
          countryName: country?.name || null,
          academicId: null,
          academicName: null,
          academicYear:
            cell.periodType === 'year' ? cell.periodNumber : Math.ceil(cell.periodNumber / 2),
          semester: cell.periodType === 'semester' ? cell.periodNumber : null,
          frequency: cell.periodType === 'semester' ? 'semester' : 'yearly',
          eligibilityBand: 'All candidates',
          amount: cell.amount,
          category: head.category,
          source: 'manual',
          createdBy: id(request.admin._id),
          createdAt: now,
          updatedAt: now,
        });
      }
    }
    if (!documents.length)
      return response
        .status(400)
        .json({ message: 'Select at least one active fee head and enter an amount.' });
    if (data.replaceExisting) {
      await db()
        .collection('courseFees')
        .deleteMany({
          bookId: book._id,
          courseId: course._id,
          domicileId: domicile._id,
          studentTypeId: studentType._id,
          feeTypeId: feeType._id,
          countryId: country?._id || null,
          source: 'manual',
        });
    }
    await db().collection('courseFees').insertMany(documents);
    response.status(201).json({ saved: documents.length });
  }),
);

feesRouter.delete(
  '/course-fees/:feeId',
  asyncHandler(async (request, response) => {
    const result = await db()
      .collection('courseFees')
      .deleteOne({ _id: id(request.params.feeId) });
    if (!result.deletedCount)
      return response.status(404).json({ message: 'Course fee was not found.' });
    response.status(204).end();
  }),
);

feesRouter.post(
  '/course-fees/import/preview',
  upload.single('file'),
  asyncHandler(async (request, response) => {
    if (!request.file)
      return response.status(400).json({ message: 'Choose an .xlsx fee workbook.' });
    const book = await feeBook(request.body.bookId);
    const domicile = await masterValue(request.body.domicileId, 'domicile', 'domicileId');
    const studentType = await masterValue(
      request.body.studentTypeId,
      'student-type',
      'studentTypeId',
    );
    if (requiresCountry(studentType, domicile) && !request.body.countryId) {
      return response
        .status(400)
        .json({ message: 'Country is required for a foreign domicile or student type.' });
    }
    const country = request.body.countryId
      ? await masterValue(request.body.countryId, 'country', 'countryId')
      : null;
    const courses = await db()
      .collection('masterValues')
      .find({ typeSlug: 'course', isActive: true })
      .sort({ name: 1 })
      .toArray();
    const heads = await db()
      .collection('feeHeads')
      .find({ bookId: book._id, isActive: true })
      .toArray();
    const workbook = new ExcelJS.Workbook();
    await workbook.xlsx.load(request.file.buffer);
    const sheets = parseFeeWorkbook(workbook, courses);
    const sourceHeads = [...new Set(sheets.flatMap((sheet) => sheet.sourceHeads))].sort();
    const headMappings = sourceHeads.map((sourceHead) => {
      const matches = heads.filter((head) => head.normalizedName === normalizeFeeName(sourceHead));
      return {
        sourceHead,
        status: matches.length === 1 ? 'matched' : matches.length ? 'ambiguous' : 'unmatched',
        feeHeadId: matches.length === 1 ? String(matches[0]._id) : null,
        feeHeadName: matches.length === 1 ? matches[0].name : null,
      };
    });
    const now = new Date();
    const preview = {
      bookId: book._id,
      bookCode: book.code,
      domicileId: domicile._id,
      domicileName: domicile.name,
      studentTypeId: studentType._id,
      studentTypeName: studentType.name,
      countryId: country?._id || null,
      countryName: country?.name || null,
      fileName: request.file.originalname,
      sheets,
      headMappings,
      createdBy: id(request.admin._id),
      createdAt: now,
      expiresAt: new Date(now.getTime() + 24 * 60 * 60 * 1000),
      status: 'pending',
    };
    const result = await db().collection('feeImportPreviews').insertOne(preview);
    response.status(201).json({
      preview: serialize({
        ...preview,
        _id: result.insertedId,
        sheets: sheets.map((sheet) => {
          const summary = { ...sheet };
          delete summary.lines;
          return summary;
        }),
      }),
    });
  }),
);

const importSchema = z.object({
  previewId: z.string(),
  sheetMappings: z.array(z.object({ sheetName: z.string(), courseIds: z.array(z.string()) })),
  headMappings: z.array(z.object({ sourceHead: z.string(), feeHeadId: z.string().nullable() })),
  replaceExisting: z.boolean().optional().default(false),
});

feesRouter.post(
  '/course-fees/import/commit',
  asyncHandler(async (request, response) => {
    const data = importSchema.parse(request.body);
    const preview = await db()
      .collection('feeImportPreviews')
      .findOne({
        _id: id(data.previewId, 'previewId'),
        status: 'pending',
        expiresAt: { $gt: new Date() },
      });
    if (!preview)
      return response.status(404).json({ message: 'Import preview was not found or has expired.' });
    const courseIds = new Map(
      data.sheetMappings.map((item) => [
        item.sheetName,
        item.courseIds.map((courseId) => id(courseId, 'courseId')),
      ]),
    );
    const headIds = new Map(
      data.headMappings
        .filter((item) => item.feeHeadId)
        .map((item) => [item.sourceHead, id(item.feeHeadId, 'feeHeadId')]),
    );
    const selectedCourseIds = [...courseIds.values()].flat();
    const courses = await db()
      .collection('masterValues')
      .find({ _id: { $in: selectedCourseIds }, typeSlug: 'course' })
      .toArray();
    const heads = await db()
      .collection('feeHeads')
      .find({ _id: { $in: [...headIds.values()] }, bookId: preview.bookId })
      .toArray();
    const courseMap = new Map(courses.map((item) => [String(item._id), item]));
    const headMap = new Map(heads.map((item) => [String(item._id), item]));
    const documents = [];
    const adminId = id(request.admin._id);
    const mappedSheetNames = [];
    for (const sheet of preview.sheets) {
      const mappedCourses = (courseIds.get(sheet.sheetName) || [])
        .map((courseId) => courseMap.get(String(courseId)))
        .filter(Boolean);
      for (const line of sheet.lines) {
        const feeHeadId = headIds.get(line.sourceHead);
        const head = feeHeadId && headMap.get(String(feeHeadId));
        if (!head) continue;
        const now = new Date();
        const template = {
          feeHeadId: head._id,
          feeHeadName: head.name,
          category: line.category,
          frequency: line.frequency,
          academicYear: line.academicYear,
          semester: line.semester,
          eligibilityBand: line.eligibilityBand,
          amount: line.amount,
          intakeYear: sheet.intakeYear,
          sourceCell: line.sourceCell,
          importPreviewId: preview._id,
        };
        for (const course of mappedCourses) {
          documents.push({
            ...template,
            bookId: preview.bookId,
            bookCode: preview.bookCode,
            courseId: course._id,
            courseName: course.name,
            domicileId: preview.domicileId,
            domicileName: preview.domicileName,
            studentTypeId: preview.studentTypeId,
            studentTypeName: preview.studentTypeName,
            countryId: preview.countryId || null,
            countryName: preview.countryName || null,
            source: 'excel',
            sourceFile: preview.fileName,
            sourceSheet: sheet.sheetName,
            createdBy: adminId,
            createdAt: now,
            updatedAt: now,
          });
        }
      }
      if (mappedCourses.length) mappedSheetNames.push(sheet.sheetName);
    }
    if (!documents.length)
      return response
        .status(400)
        .json({ message: 'No fee rows have both a course and fee-head mapping.' });
    if (data.replaceExisting) {
      await db()
        .collection('courseFees')
        .deleteMany({
          bookId: preview.bookId,
          domicileId: preview.domicileId,
          studentTypeId: preview.studentTypeId,
          ...(preview.countryId ? { countryId: preview.countryId } : {}),
          source: 'excel',
          sourceSheet: { $in: mappedSheetNames },
        });
    }
    await db().collection('courseFees').insertMany(documents);
    await db()
      .collection('feeImportPreviews')
      .updateOne(
        { _id: preview._id },
        { $set: { status: 'imported', importedAt: new Date(), importedCount: documents.length } },
      );
    response.json({
      imported: documents.length,
      mappedSheets: new Set(documents.map((item) => item.sourceSheet)).size,
    });
  }),
);
