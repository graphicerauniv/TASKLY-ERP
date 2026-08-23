import express from 'express';
import multer from 'multer';
import path from 'node:path';
import crypto from 'node:crypto';
import fs from 'node:fs';
import { config } from '../config.js';
import { db, id, serialize } from '../db.js';
import { accessKey, applicationNumber, hashKey } from '../lib/ids.js';
import { asyncHandler } from '../lib/async-handler.js';
import { activeForm } from '../services/form-definition.js';
import { validateSubmission } from '../services/admission-validation.js';

export const publicRouter = express.Router();
fs.mkdirSync(config.uploadDir, { recursive: true });
const storage = multer.diskStorage({
  destination: config.uploadDir,
  filename: (request, file, done) =>
    done(null, `${Date.now()}-${crypto.randomUUID()}${safeExtension(file.originalname)}`),
});
const upload = multer({
  storage,
  limits: { fileSize: config.maxUploadBytes },
  fileFilter: (request, file, done) => {
    const allowed = ['image/jpeg', 'image/png', 'image/webp', 'application/pdf'];
    done(
      allowed.includes(file.mimetype)
        ? null
        : Object.assign(new Error('Only JPG, PNG, WebP, and PDF files are allowed.'), {
            status: 400,
          }),
      allowed.includes(file.mimetype),
    );
  },
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
    const searchField = request.query.searchField === 'code' ? 'code' : 'name';
    if (request.query.search)
      filter[searchField] = { $regex: escapeRegex(request.query.search), $options: 'i' };
    const items = await db()
      .collection('masterValues')
      .find(filter)
      .sort({ order: 1, name: 1 })
      .limit(50)
      .project({ name: 1, code: 1, parentId: 1, metadata: 1 })
      .toArray();
    const labelField = request.query.labelField === 'code' ? 'code' : 'name';
    response.json({
      items: items.map((item) => ({ ...serialize(item), label: item[labelField] || item.name })),
    });
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
    if (request.admission.status === 'submitted')
      return response.status(409).json({ message: 'A submitted application cannot be changed.' });
    const update = { updatedAt: new Date() };
    if (request.body.currentSectionId !== undefined)
      update.currentSectionId = String(request.body.currentSectionId || '');
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
    const item = await db()
      .collection('admissions')
      .findOneAndUpdate(
        { _id: request.admission._id },
        { $set: update },
        { returnDocument: 'after' },
      );
    response.json({ item: admissionForStudent(item) });
  }),
);

publicRouter.post(
  '/admissions/:admissionId/upload',
  admissionAccess,
  upload.single('file'),
  asyncHandler(async (request, response) => {
    if (!request.file) return response.status(400).json({ message: 'Choose a file to upload.' });
    response.status(201).json({
      file: {
        name: request.file.originalname,
        url: `/uploads/${request.file.filename}`,
        mimeType: request.file.mimetype,
        size: request.file.size,
      },
    });
  }),
);

publicRouter.post(
  '/admissions/:admissionId/submit',
  admissionAccess,
  asyncHandler(async (request, response) => {
    if (request.admission.status === 'submitted')
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
    const item = await db()
      .collection('admissions')
      .findOneAndUpdate(
        { _id: request.admission._id },
        { $set: { status: 'submitted', submittedAt: new Date(), updatedAt: new Date() } },
        { returnDocument: 'after' },
      );
    response.json({ item: admissionForStudent(item) });
  }),
);

async function admissionAccess(request, response, next) {
  try {
    const admission = await db()
      .collection('admissions')
      .findOne({ _id: id(request.params.admissionId) });
    const key = request.headers['x-admission-key'];
    if (!admission || !key || hashKey(String(key)) !== admission.accessKeyHash)
      return response.status(401).json({ message: 'Admission access is invalid.' });
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
function safeExtension(filename) {
  const ext = path.extname(filename).toLowerCase();
  return ['.jpg', '.jpeg', '.png', '.webp', '.pdf'].includes(ext) ? ext : '';
}
const escapeRegex = (value) => String(value).replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
