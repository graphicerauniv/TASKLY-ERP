import express from 'express';
import multer from 'multer';
import crypto from 'node:crypto';
import { config } from '../config.js';
import { db, id, serialize } from '../db.js';
import { accessKey, applicationNumber, hashKey } from '../lib/ids.js';
import { asyncHandler } from '../lib/async-handler.js';
import { activeForm } from '../services/form-definition.js';
import { validateSubmission } from '../services/admission-validation.js';
import { storeObject } from '../services/object-storage.js';
import { allowedMimeTypes, extensionForMimeType } from '../services/upload-rules.js';
import { syncAdmissionIdentity } from '../services/admission-identity.js';

export const publicRouter = express.Router();
const upload = multer({
  storage: multer.memoryStorage(),
  limits: { fileSize: config.maxUploadBytes },
});

publicRouter.get(
  '/forms/active',
  asyncHandler(async (request, response) => {
    const form = await db()
      .collection('forms')
      .findOne({ status: 'published', isActive: true }, { sort: { updatedAt: -1 } });
    if (!form)
      return response.status(404).json({ message: 'No admission form is currently available.' });
    response.json({ item: serialize(activeForm(form)) });
  }),
);

publicRouter.get(
  '/master-data/:typeSlug/options',
  asyncHandler(async (request, response) => {
    const filter = { typeSlug: request.params.typeSlug, isActive: true };
    if (request.query.parentId) filter.parentId = id(request.query.parentId, 'parentId');
    if (request.query.search)
      filter.name = { $regex: escapeRegex(request.query.search), $options: 'i' };
    const items = await db()
      .collection('masterValues')
      .find(filter)
      .sort({ order: 1, name: 1 })
      .limit(50)
      .project({ name: 1, parentId: 1, metadata: 1 })
      .toArray();
    response.json({ items: items.map((item) => ({ ...serialize(item), label: item.name })) });
  }),
);

publicRouter.post(
  '/admissions',
  asyncHandler(async (request, response) => {
    const form = request.body.formId
      ? await db()
          .collection('forms')
          .findOne({ _id: id(request.body.formId), status: 'published', isActive: true })
      : await db()
          .collection('forms')
          .findOne({ status: 'published', isActive: true }, { sort: { updatedAt: -1 } });
    if (!form)
      return response.status(404).json({ message: 'No admission form is currently available.' });
    const key = accessKey();
    const now = new Date();
    const document = {
      applicationNumber: applicationNumber(),
      formId: form._id,
      formVersion: form.version,
      formSnapshot: activeForm(form),
      status: 'draft',
      hasSavedData: false,
      currentSectionId: form.sections.find((s) => s.isActive)?.id || null,
      responses: {},
      repeatableResponses: {},
      accessKeyHash: hashKey(key),
      createdAt: now,
      updatedAt: now,
    };
    const result = await db().collection('admissions').insertOne(document);
    response
      .status(201)
      .json({ item: admissionForStudent({ ...document, _id: result.insertedId }), accessKey: key });
  }),
);

publicRouter.get(
  '/admissions/:admissionId',
  admissionAccess,
  asyncHandler(async (request, response) => {
    response.json({ item: admissionForStudent(request.admission) });
  }),
);

publicRouter.patch(
  '/admissions/:admissionId',
  admissionAccess,
  asyncHandler(async (request, response) => {
    if (request.admission.status !== 'draft')
      return response.status(409).json({ message: 'A submitted application cannot be changed.' });
    const update = { hasSavedData: true, updatedAt: new Date() };
    if (request.body.currentSectionId !== undefined) {
      const requestedSectionId = String(request.body.currentSectionId || '');
      update.currentSectionId = request.admission.formSnapshot.sections.some(
        (section) => section.id === requestedSectionId,
      )
        ? requestedSectionId
        : request.admission.formSnapshot.sections[0]?.id || null;
    }
    if (
      request.body.responses &&
      typeof request.body.responses === 'object' &&
      !Array.isArray(request.body.responses)
    )
      update.responses = request.body.responses;
    if (
      request.body.repeatableResponses &&
      typeof request.body.repeatableResponses === 'object' &&
      !Array.isArray(request.body.repeatableResponses)
    )
      update.repeatableResponses = request.body.repeatableResponses;
    let item = await db()
      .collection('admissions')
      .findOneAndUpdate(
        { _id: request.admission._id },
        { $set: update },
        { returnDocument: 'after' },
      );
    await syncAdmissionIdentity(db(), item, item.responses || {});
    item = await db().collection('admissions').findOne({ _id: item._id });
    response.json({ item: admissionForStudent(item) });
  }),
);

publicRouter.post(
  '/admissions/:admissionId/upload',
  admissionAccess,
  upload.single('file'),
  asyncHandler(async (request, response) => {
    if (request.admission.status !== 'draft')
      return response.status(409).json({ message: 'A submitted application cannot be changed.' });
    if (!request.file) return response.status(400).json({ message: 'Choose a file to upload.' });
    const field = findField(request.admission.formSnapshot, request.body.fieldId);
    if (!field || !['file', 'image', 'signature'].includes(field.type))
      return response.status(400).json({ message: 'The upload field is invalid.' });
    const allowed = allowedMimeTypes(field);
    if (!allowed.has(request.file.mimetype))
      return response.status(400).json({ message: 'This file type is not allowed for the field.' });
    const fieldLimitMb = Math.min(
      Number(field.uploadConfig?.maxSizeMb) || config.maxUploadMb,
      config.maxUploadMb,
    );
    if (request.file.size > fieldLimitMb * 1024 * 1024)
      return response
        .status(400)
        .json({ message: `The file must be ${fieldLimitMb} MB or smaller.` });
    const key = `admissions/${request.admission._id}/${field.id}/${crypto.randomUUID()}${extensionForMimeType(request.file.mimetype)}`;
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

publicRouter.post(
  '/admissions/:admissionId/submit',
  admissionAccess,
  asyncHandler(async (request, response) => {
    if (request.admission.status === 'pending_approval' || request.admission.status === 'approved')
      return response.json({ item: admissionForStudent(request.admission) });
    const errors = validateSubmission(
      request.admission.formSnapshot,
      request.admission.responses || {},
      request.admission.repeatableResponses || {},
    );
    if (errors.length)
      return response
        .status(422)
        .json({ message: 'Complete all required fields before submitting.', errors });
    const identity = await syncAdmissionIdentity(
      db(),
      request.admission,
      request.admission.responses || {},
    );
    if (identity.academicSessionId && identity.courseId && !identity.studentId)
      return response.status(422).json({
        message: 'A Student ID could not be generated. Check the session year and course code.',
      });
    const item = await db()
      .collection('admissions')
      .findOneAndUpdate(
        { _id: request.admission._id },
        {
          $set: {
            status: 'pending_approval',
            submittedAt: new Date(),
            updatedAt: new Date(),
          },
        },
        { returnDocument: 'after' },
      );
    response.json({ item: admissionForStudent(item) });
  }),
);

async function admissionAccess(request, response, next) {
  try {
    let admission = await db()
      .collection('admissions')
      .findOne({ _id: id(request.params.admissionId) });
    const key = request.headers['x-admission-key'];
    if (!admission || !key || hashKey(String(key)) !== admission.accessKeyHash)
      return response.status(401).json({ message: 'Admission access is invalid.' });

    // Drafts keep their entered values, but always use the latest published
    // structure. Stable section and field IDs preserve the existing answers.
    if (admission.status === 'draft') {
      const form = await db()
        .collection('forms')
        .findOne({ _id: admission.formId, status: 'published', isActive: true });
      if (form && form.version !== admission.formVersion) {
        const formSnapshot = activeForm(form);
        const currentSectionId = formSnapshot.sections.some(
          (section) => section.id === admission.currentSectionId,
        )
          ? admission.currentSectionId
          : formSnapshot.sections[0]?.id || null;
        const updatedAt = new Date();
        await db()
          .collection('admissions')
          .updateOne(
            { _id: admission._id },
            {
              $set: {
                formVersion: form.version,
                formSnapshot,
                currentSectionId,
                updatedAt,
              },
            },
          );
        admission = {
          ...admission,
          formVersion: form.version,
          formSnapshot,
          currentSectionId,
          updatedAt,
        };
      }
    }
    request.admission = admission;
    next();
  } catch (error) {
    next(error);
  }
}
function admissionForStudent(document) {
  const value = serialize(document);
  delete value.accessKeyHash;
  return value;
}
function findField(form, fieldId) {
  for (const section of form.sections || [])
    for (const subsection of section.subsections || []) {
      const field = subsection.fields?.find((candidate) => candidate.id === fieldId);
      if (field) return field;
    }
  return null;
}
const escapeRegex = (value) => String(value).replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
