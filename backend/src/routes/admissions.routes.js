import express from 'express';
import argon2 from 'argon2';
import crypto from 'node:crypto';
import multer from 'multer';
import { ObjectId } from 'bson';
import { z } from 'zod';
import { config } from '../config.js';
import { db, id, serialize } from '../db.js';
import { asyncHandler } from '../lib/async-handler.js';
import { pageResult, pagination } from '../lib/pagination.js';
import { syncAdmissionIdentity } from '../services/admission-identity.js';
import { masterValueAliases, validateSubmission } from '../services/admission-validation.js';
import { storeObject } from '../services/object-storage.js';
import { allowedMimeTypes, extensionForMimeType } from '../services/upload-rules.js';
import { generateStudentFeeLedgers } from '../services/student-fee-ledger.js';

export const admissionsRouter = express.Router();
const upload = multer({
  storage: multer.memoryStorage(),
  limits: { fileSize: config.maxUploadBytes },
});
const passwordSetupSchema = z
  .object({
    passwordMode: z.enum(['student-id', 'manual']),
    password: z.string().optional().default(''),
  })
  .refine((value) => value.passwordMode === 'student-id' || value.password.length >= 8, {
    message: 'A manually entered password must contain at least 8 characters.',
    path: ['password'],
  });
const approvalSchema = passwordSetupSchema.and(
  z.object({
    currentAcademicYear: z.coerce.number().int().min(1).max(10),
    feeFrequency: z.enum(['year', 'semester']).optional().default('year'),
    currentSemester: z.coerce.number().int().min(1).max(20).optional(),
  }),
);
const currentAcademicYearSchema = z.coerce.number().int().min(1).max(10);
const currentSemesterSchema = z.coerce.number().int().min(1).max(20);
admissionsRouter.get(
  '/',
  asyncHandler(async (request, response) => {
    const { page, limit, skip } = pagination(request.query);
    const filter = {};
    if (request.query.status) filter.status = request.query.status;
    if (request.query.status === 'draft') filter.hasSavedData = true;
    if (request.query.search) {
      const match = { $regex: escapeRegex(request.query.search), $options: 'i' };
      filter.$or = [
        { studentId: match },
        { studentName: match },
        { courseName: match },
        { academicSession: match },
      ];
    }
    const fieldFilters = {
      application: ['applicationNumber', 'studentId'],
      studentId: ['studentId'],
      studentName: ['studentName'],
      university: ['universityName'],
      college: ['collegeName'],
      branch: ['branchName', 'departmentName'],
      course: ['courseName'],
      session: ['academicSession'],
    };
    for (const [queryKey, documentFields] of Object.entries(fieldFilters)) {
      const value = String(request.query[queryKey] || '').trim();
      if (!value) continue;
      const match = { $regex: escapeRegex(value), $options: 'i' };
      if (documentFields.length === 1) filter[documentFields[0]] = match;
      else filter.$and = [...(filter.$and || []), { $or: documentFields.map((field) => ({ [field]: match })) }];
    }
    const [items, total] = await Promise.all([
      db()
        .collection('admissions')
        .find(filter)
        .project({ accessKeyHash: 0, passwordHash: 0, formSnapshot: 0 })
        .sort({ createdAt: -1 })
        .skip(skip)
        .limit(limit)
        .toArray(),
      db().collection('admissions').countDocuments(filter),
    ]);
    const ledgers = items.length
      ? await db()
          .collection('studentFeeLedgers')
          .find({ studentAdmissionId: { $in: items.map((item) => item._id) }, status: 'active' })
          .project({ studentAdmissionId: 1, kind: 1 })
          .toArray()
      : [];
    const kindsByStudent = new Map();
    for (const ledger of ledgers) {
      const key = String(ledger.studentAdmissionId);
      kindsByStudent.set(key, [...(kindsByStudent.get(key) || []), ledger.kind]);
    }
    response.json(
      pageResult(
        items.map((item) =>
          serialize({ ...item, feeLedgerKinds: kindsByStudent.get(String(item._id)) || [] }),
        ),
        total,
        page,
        limit,
      ),
    );
  }),
);
admissionsRouter.patch(
  '/:admissionId',
  asyncHandler(async (request, response) => {
    const admissionId = id(request.params.admissionId);
    const admission = await db().collection('admissions').findOne({ _id: admissionId });
    if (!admission) return response.status(404).json({ message: 'Admission not found.' });
    if (!['draft', 'pending_approval', 'approved'].includes(admission.status))
      return response.status(409).json({ message: 'This student record cannot be edited.' });
    const requestedFeeFrequency = request.body.feeFrequency
      ? z.enum(['year', 'semester']).parse(request.body.feeFrequency)
      : null;
    const feeModeChanged =
      admission.status === 'approved' &&
      requestedFeeFrequency &&
      requestedFeeFrequency !== (admission.feeFrequency === 'semester' ? 'semester' : 'year');
    if (feeModeChanged) {
      const paidLedger = await db()
        .collection('studentFeeLedgers')
        .findOne({
          studentAdmissionId: admissionId,
          kind: 'academic',
          status: 'active',
          paidAmount: { $gt: 0 },
        });
      if (paidLedger)
        return response.status(409).json({
          message:
            'This student has Academic Fee payments. Accounts must complete a controlled fee-mode adjustment.',
        });
    }
    if (
      admission.status === 'approved' &&
      ['currentAcademicYear', 'currentSemester', 'feeFrequency'].some(
        (field) => request.body[field] !== undefined,
      ) &&
      (await db()
        .collection('studentProgressions')
        .findOne({ studentAdmissionId: admissionId, status: 'pending' }))
    )
      return response.status(409).json({
        message:
          'This student has a pending academic promotion. Complete the promotion before changing the fee period settings.',
      });
    const update = { hasSavedData: true, updatedAt: new Date() };
    if (request.body.currentSectionId !== undefined) {
      const sectionId = String(request.body.currentSectionId || '');
      update.currentSectionId = admission.formSnapshot.sections.some(
        (section) => section.id === sectionId,
      )
        ? sectionId
        : admission.formSnapshot.sections[0]?.id || null;
    }
    if (plainObject(request.body.responses)) update.responses = request.body.responses;
    if (plainObject(request.body.repeatableResponses))
      update.repeatableResponses = request.body.repeatableResponses;
    if (request.body.feeFrequencyChoice !== undefined) {
      update.feeFrequencyChoice = z
        .enum(['year', 'semester'])
        .parse(request.body.feeFrequencyChoice);
      update.feeFrequency = update.feeFrequencyChoice;
    }
    if (request.body.currentAcademicYear !== undefined)
      update.currentAcademicYear = currentAcademicYearSchema.parse(
        request.body.currentAcademicYear,
      );
    if (request.body.feeFrequency !== undefined)
      update.feeFrequency = z.enum(['year', 'semester']).parse(request.body.feeFrequency);
    if (request.body.currentSemester !== undefined)
      update.currentSemester = currentSemesterSchema.parse(request.body.currentSemester);
    let item = await db()
      .collection('admissions')
      .findOneAndUpdate({ _id: admissionId }, { $set: update }, { returnDocument: 'after' });
    await syncAdmissionIdentity(db(), item, item.responses || {});
    const explicitFeePeriod = {};
    for (const field of ['currentAcademicYear', 'currentSemester', 'feeFrequency'])
      if (update[field] !== undefined) explicitFeePeriod[field] = update[field];
    if (Object.keys(explicitFeePeriod).length)
      await db()
        .collection('admissions')
        .updateOne({ _id: admissionId }, { $set: explicitFeePeriod });
    item = await db().collection('admissions').findOne({ _id: admissionId });
    if (feeModeChanged) {
      const now = new Date();
      await db().collection('studentFeeLedgers').deleteMany({
        studentAdmissionId: admissionId,
        kind: 'academic',
        status: 'active',
      });
      await db()
        .collection('studentProgressions')
        .updateMany(
          { studentAdmissionId: admissionId, status: 'pending' },
          {
            $set: {
              status: 'cancelled',
              cancelledReason: 'Fee payment mode changed by administrator.',
              cancelledAt: now,
              updatedAt: now,
            },
          },
        );
      await db()
        .collection('feeModeChanges')
        .insertOne({
          studentAdmissionId: admissionId,
          studentId: item.studentId,
          studentName: item.studentName,
          fromMode: admission.feeFrequency === 'semester' ? 'semester' : 'year',
          toMode: requestedFeeFrequency,
          changedBy: id(request.admin._id),
          changedAt: now,
          createdAt: now,
          updatedAt: now,
        });
      await generateStudentFeeLedgers(db(), item, id(request.admin._id));
    }
    response.json({ item: serialize(item) });
  }),
);
admissionsRouter.post(
  '/:admissionId/submit',
  asyncHandler(async (request, response) => {
    const admissionId = id(request.params.admissionId);
    const admission = await db().collection('admissions').findOne({ _id: admissionId });
    if (!admission) return response.status(404).json({ message: 'Admission not found.' });
    if (admission.status !== 'draft') return response.json({ item: serialize(admission) });
    const aliases = await masterValueAliases(
      db(),
      admission.responses || {},
      admission.repeatableResponses || {},
    );
    const errors = validateSubmission(
      admission.formSnapshot,
      admission.responses || {},
      admission.repeatableResponses || {},
      aliases,
    );
    if (errors.length)
      return response
        .status(422)
        .json({ message: 'Complete all required fields before submitting.', errors });
    const mappedIdentity = await syncAdmissionIdentity(db(), admission, admission.responses || {});
    if (!['year', 'semester'].includes(mappedIdentity.feeFrequencyChoice))
      return response
        .status(422)
        .json({ message: 'Select Yearly or Semester from the Fee Type field.' });
    const identity = await syncAdmissionIdentity(db(), admission, admission.responses || {}, {
      generateStudentId: true,
    });
    if (identity.academicSessionId && identity.courseId && !identity.studentId)
      return response.status(422).json({
        message: 'A Student ID could not be generated. Check the session year and course code.',
      });
    const item = await db()
      .collection('admissions')
      .findOneAndUpdate(
        { _id: admissionId, status: 'draft' },
        {
          $set: {
            status: 'pending_approval',
            submittedAt: new Date(),
            updatedAt: new Date(),
          },
        },
        { returnDocument: 'after' },
      );
    response.json({ item: serialize(item) });
  }),
);
admissionsRouter.post(
  '/:admissionId/approve',
  asyncHandler(async (request, response) => {
    const admissionId = id(request.params.admissionId);
    const admission = await db().collection('admissions').findOne({ _id: admissionId });
    if (!admission) return response.status(404).json({ message: 'Admission not found.' });
    if (admission.status === 'approved') return response.json({ item: safeAdmission(admission) });
    if (admission.status !== 'pending_approval')
      return response.status(409).json({ message: 'Submit the admission before approving it.' });
    const aliases = await masterValueAliases(
      db(),
      admission.responses || {},
      admission.repeatableResponses || {},
    );
    const errors = validateSubmission(
      admission.formSnapshot,
      admission.responses || {},
      admission.repeatableResponses || {},
      aliases,
    );
    if (errors.length)
      return response
        .status(422)
        .json({ message: 'Required admission data is incomplete.', errors });
    if (!admission.studentId)
      return response.status(422).json({ message: 'Generate the Student ID before approval.' });
    const passwordSetup = approvalSchema.parse(request.body);
    if (admission.feeFrequencyChoice && passwordSetup.feeFrequency !== admission.feeFrequencyChoice)
      return response.status(409).json({
        message: 'The approval fee mode must match the mode selected in the admission form.',
      });
    if (passwordSetup.feeFrequency === 'semester') {
      passwordSetup.currentSemester ||= passwordSetup.currentAcademicYear * 2 - 1;
      passwordSetup.currentAcademicYear = Math.ceil(passwordSetup.currentSemester / 2);
    }
    const initialPassword =
      passwordSetup.passwordMode === 'student-id' ? admission.studentId : passwordSetup.password;
    const item = await db()
      .collection('admissions')
      .findOneAndUpdate(
        { _id: admissionId, status: 'pending_approval' },
        {
          $set: {
            status: 'approved',
            isActive: true,
            passwordHash: await argon2.hash(initialPassword),
            mustChangePassword: true,
            currentAcademicYear: passwordSetup.currentAcademicYear,
            currentSemester:
              passwordSetup.currentSemester || passwordSetup.currentAcademicYear * 2 - 1,
            feeFrequency: passwordSetup.feeFrequency,
            passwordUpdatedAt: new Date(),
            approvedAt: new Date(),
            updatedAt: new Date(),
          },
        },
        { returnDocument: 'after' },
      );
    let feeGeneration;
    try {
      feeGeneration = await generateStudentFeeLedgers(db(), item, id(request.admin._id));
    } catch (error) {
      feeGeneration = { success: false, reason: error.message };
    }
    response.json({ item: safeAdmission(item), feeGeneration: serialize(feeGeneration) });
  }),
);
admissionsRouter.post(
  '/:admissionId/password',
  asyncHandler(async (request, response) => {
    const admissionId = id(request.params.admissionId);
    const admission = await db()
      .collection('admissions')
      .findOne({ _id: admissionId, status: 'approved' });
    if (!admission) return response.status(404).json({ message: 'Approved student not found.' });
    if (!admission.studentId)
      return response.status(422).json({ message: 'This student does not have a Student ID.' });
    const passwordSetup = passwordSetupSchema.parse(request.body);
    const password =
      passwordSetup.passwordMode === 'student-id' ? admission.studentId : passwordSetup.password;
    await db()
      .collection('admissions')
      .updateOne(
        { _id: admissionId },
        {
          $set: {
            isActive: true,
            passwordHash: await argon2.hash(password),
            mustChangePassword: true,
            passwordUpdatedAt: new Date(),
            updatedAt: new Date(),
          },
        },
      );
    response.json({ message: 'Student password reset successfully.' });
  }),
);
admissionsRouter.post(
  '/:admissionId/upload',
  upload.single('file'),
  asyncHandler(async (request, response) => {
    const admission = await db()
      .collection('admissions')
      .findOne({ _id: id(request.params.admissionId) });
    if (!admission) return response.status(404).json({ message: 'Admission not found.' });
    if (!['draft', 'pending_approval', 'approved'].includes(admission.status))
      return response.status(409).json({ message: 'This student record cannot be edited.' });
    if (!request.file) return response.status(400).json({ message: 'Choose a file to upload.' });
    const field = findField(admission.formSnapshot, request.body.fieldId);
    if (!field || !['file', 'image', 'signature'].includes(field.type))
      return response.status(400).json({ message: 'The upload field is invalid.' });
    if (!allowedMimeTypes(field).has(request.file.mimetype))
      return response.status(400).json({ message: 'This file type is not allowed for the field.' });
    const fieldLimitMb = Math.min(
      Number(field.uploadConfig?.maxSizeMb) || config.maxUploadMb,
      config.maxUploadMb,
    );
    if (request.file.size > fieldLimitMb * 1024 * 1024)
      return response
        .status(400)
        .json({ message: `The file must be ${fieldLimitMb} MB or smaller.` });
    const key = `admissions/${admission._id}/${field.id}/${crypto.randomUUID()}${extensionForMimeType(request.file.mimetype)}`;
    const stored = await storeObject({
      key,
      body: request.file.buffer,
      contentType: request.file.mimetype,
    });
    response.status(201).json({
      file: {
        name: request.file.originalname,
        key: stored.key,
        url: stored.url,
        mimeType: request.file.mimetype,
        size: request.file.size,
        storage: config.storage.driver,
      },
    });
  }),
);
admissionsRouter.get(
  '/:admissionId',
  asyncHandler(async (request, response) => {
    const item = await db()
      .collection('admissions')
      .findOne(
        { _id: id(request.params.admissionId) },
        { projection: { accessKeyHash: 0, passwordHash: 0 } },
      );
    if (!item) return response.status(404).json({ message: 'Admission not found.' });
    const valueIds = new Set();
    collectObjectIds(item.responses, valueIds);
    collectObjectIds(item.repeatableResponses, valueIds);
    const masterValues = valueIds.size
      ? await db()
          .collection('masterValues')
          .find({ _id: { $in: [...valueIds].map((value) => new ObjectId(value)) } })
          .project({ name: 1 })
          .toArray()
      : [];
    response.json({
      item: serialize(item),
      masterLabels: Object.fromEntries(
        masterValues.map((value) => [value._id.toString(), value.name]),
      ),
    });
  }),
);
admissionsRouter.delete(
  '/:admissionId',
  asyncHandler(async (request, response) => {
    const result = await db()
      .collection('admissions')
      .deleteOne({ _id: id(request.params.admissionId) });
    if (!result.deletedCount) return response.status(404).json({ message: 'Admission not found.' });
    response.status(204).end();
  }),
);

function collectObjectIds(value, output) {
  if (typeof value === 'string' && ObjectId.isValid(value)) output.add(value);
  else if (Array.isArray(value)) value.forEach((item) => collectObjectIds(item, output));
  else if (value && typeof value === 'object')
    Object.values(value).forEach((item) => collectObjectIds(item, output));
}

function findField(form, fieldId) {
  for (const section of form.sections || [])
    for (const subsection of section.subsections || []) {
      const field = subsection.fields?.find((candidate) => candidate.id === fieldId);
      if (field) return field;
    }
  return null;
}

const plainObject = (value) => value && typeof value === 'object' && !Array.isArray(value);
const escapeRegex = (value) => String(value).replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
function safeAdmission(document) {
  const value = serialize(document);
  delete value.accessKeyHash;
  delete value.passwordHash;
  return value;
}
