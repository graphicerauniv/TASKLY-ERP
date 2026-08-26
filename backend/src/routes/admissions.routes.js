import express from 'express';
import crypto from 'node:crypto';
import multer from 'multer';
import { ObjectId } from 'mongodb';
import { config } from '../config.js';
import { db, id, serialize } from '../db.js';
import { asyncHandler } from '../lib/async-handler.js';
import { pageResult, pagination } from '../lib/pagination.js';
import { syncAdmissionIdentity } from '../services/admission-identity.js';
import { validateSubmission } from '../services/admission-validation.js';
import { storeObject } from '../services/object-storage.js';
import { allowedMimeTypes, extensionForMimeType } from '../services/upload-rules.js';

export const admissionsRouter = express.Router();
const upload = multer({
  storage: multer.memoryStorage(),
  limits: { fileSize: config.maxUploadBytes },
});
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
        { applicationNumber: match },
        { studentId: match },
        { studentName: match },
        { courseName: match },
        { academicSession: match },
      ];
    }
    const [items, total] = await Promise.all([
      db()
        .collection('admissions')
        .find(filter)
        .project({ accessKeyHash: 0, formSnapshot: 0 })
        .sort({ createdAt: -1 })
        .skip(skip)
        .limit(limit)
        .toArray(),
      db().collection('admissions').countDocuments(filter),
    ]);
    response.json(pageResult(items.map(serialize), total, page, limit));
  }),
);
admissionsRouter.patch(
  '/:admissionId',
  asyncHandler(async (request, response) => {
    const admissionId = id(request.params.admissionId);
    const admission = await db().collection('admissions').findOne({ _id: admissionId });
    if (!admission) return response.status(404).json({ message: 'Admission not found.' });
    if (admission.status !== 'draft')
      return response.status(409).json({ message: 'Only unfilled admission data can be edited.' });
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
    let item = await db()
      .collection('admissions')
      .findOneAndUpdate({ _id: admissionId }, { $set: update }, { returnDocument: 'after' });
    await syncAdmissionIdentity(db(), item, item.responses || {});
    item = await db().collection('admissions').findOne({ _id: admissionId });
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
    const errors = validateSubmission(
      admission.formSnapshot,
      admission.responses || {},
      admission.repeatableResponses || {},
    );
    if (errors.length)
      return response
        .status(422)
        .json({ message: 'Complete all required fields before submitting.', errors });
    const identity = await syncAdmissionIdentity(db(), admission, admission.responses || {});
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
    if (admission.status === 'approved') return response.json({ item: serialize(admission) });
    if (admission.status !== 'pending_approval')
      return response.status(409).json({ message: 'Submit the admission before approving it.' });
    const errors = validateSubmission(
      admission.formSnapshot,
      admission.responses || {},
      admission.repeatableResponses || {},
    );
    if (errors.length)
      return response
        .status(422)
        .json({ message: 'Required admission data is incomplete.', errors });
    const item = await db()
      .collection('admissions')
      .findOneAndUpdate(
        { _id: admissionId, status: 'pending_approval' },
        { $set: { status: 'approved', approvedAt: new Date(), updatedAt: new Date() } },
        { returnDocument: 'after' },
      );
    response.json({ item: serialize(item) });
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
    if (admission.status !== 'draft')
      return response.status(409).json({ message: 'Only unfilled admission data can be edited.' });
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
      .findOne({ _id: id(request.params.admissionId) }, { projection: { accessKeyHash: 0 } });
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
