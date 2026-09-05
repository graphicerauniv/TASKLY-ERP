import crypto from 'node:crypto';
import express from 'express';
import multer from 'multer';
import { config } from '../config.js';
import { db, id, serialize } from '../db.js';
import { asyncHandler } from '../lib/async-handler.js';
import { masterValueAliases, validateSubmission } from '../services/admission-validation.js';
import { activeForm, normalizeForm } from '../services/form-definition.js';
import { storeObject } from '../services/object-storage.js';
import { allowedMimeTypes, extensionForMimeType } from '../services/upload-rules.js';

export const formsRouter = express.Router();
const upload = multer({
  storage: multer.memoryStorage(),
  limits: { fileSize: config.maxUploadBytes },
});
const SUBMISSION_COLLECTIONS = {
  faculty: 'facultyApplications',
  employee: 'employeeApplications',
  general: 'formSubmissions',
};

function audiencesOverlap(leftForm, rightForm) {
  if ((leftForm.purpose || 'admission') !== (rightForm.purpose || 'admission')) return false;
  return ['academicSessionIds', 'universityIds', 'collegeIds', 'departmentIds', 'levelIds'].every(
    (field) => {
      const left = (leftForm.audience?.[field] || []).map(String);
      const right = (rightForm.audience?.[field] || []).map(String);
      return !left.length || !right.length || left.some((value) => right.includes(value));
    },
  );
}

function activeFields(form) {
  return (form.sections || [])
    .filter((section) => section.isActive)
    .flatMap((section) => section.subsections || [])
    .filter((subsection) => subsection.isActive !== false)
    .flatMap((subsection) => subsection.fields || [])
    .filter((field) => field.isActive);
}

function publishErrors(form) {
  const purpose = form.purpose || 'admission';
  const audience = form.audience || {};
  const sections = (form.sections || []).filter((section) => section.isActive);
  const fields = activeFields(form);
  const errors = [];
  if (!sections.length) errors.push('Enable at least one section before publishing.');
  if (!fields.some((field) => field.isRequired))
    errors.push('Mark at least one active field as required before publishing.');
  if (purpose === 'admission') {
    if (!audience.academicSessionIds?.length)
      errors.push('Select at least one academic session for this admission form.');
    if (!audience.levelIds?.length)
      errors.push('Select at least one admission level such as UG or PG.');
    const requiredMasters = [
      ['academic', 'Academic Session'],
      ['university', 'University'],
      ['college', 'College'],
      ['department', 'Department'],
      ['level', 'Level'],
      ['course', 'Course'],
      ['student-type', 'Student Type'],
      ['domicile', 'Domicile'],
      ['fee-type', 'Fee Type'],
    ];
    for (const [slug, label] of requiredMasters) {
      const mapped = fields.find(
        (field) => field.type === 'dropdown' && field.dataSource?.masterTypeSlug === slug,
      );
      if (!mapped) errors.push(`${label} must be a dropdown mapped to ${label} master data.`);
      else if (!mapped.isRequired) errors.push(`${label} must be marked as required.`);
    }
    if (
      !fields.some(
        (field) => field.isRequired && /^(student\s*name|first\s*name)$/i.test(field.name.trim()),
      )
    )
      errors.push('Add a required Student Name or First Name field.');
  }
  if (purpose === 'faculty' && !audience.departmentIds?.length)
    errors.push('Select at least one department for this faculty form.');
  if (purpose !== 'admission') {
    if (!form.destination?.navigationSectionId || !form.destination?.navigationSectionName)
      errors.push('Choose or create the sidebar section for this form.');
    if (!form.destination?.menuName)
      errors.push('Enter the name that should appear in the sidebar.');
    if (!form.destination?.databaseSectionId || !form.destination?.databaseSectionName)
      errors.push('Choose or create the database section for submitted records.');
    if (form.destination?.databaseSectionId === 'students')
      errors.push('“Students” is reserved for approved active student records.');
    if (
      ['home', 'admissions', 'students', 'database', 'academics', 'fees', 'accounts'].includes(
        form.destination?.navigationSectionId,
      )
    )
      errors.push('Choose a non-reserved sidebar section name for this form.');
  }
  return errors;
}

formsRouter.get(
  '/database/:sectionId',
  asyncHandler(async (request, response) => {
    const sectionId = String(request.params.sectionId);
    const forms = await db()
      .collection('forms')
      .find({ 'destination.databaseSectionId': sectionId })
      .project({ name: 1, purpose: 1, destination: 1 })
      .toArray();
    if (!forms.length) return response.status(404).json({ message: 'Database section not found.' });
    const formIdsByPurpose = new Map();
    for (const form of forms) {
      if (!SUBMISSION_COLLECTIONS[form.purpose]) continue;
      formIdsByPurpose.set(form.purpose, [...(formIdsByPurpose.get(form.purpose) || []), form._id]);
    }
    const groups = await Promise.all(
      [...formIdsByPurpose.entries()].map(([purpose, formIds]) =>
        db()
          .collection(SUBMISSION_COLLECTIONS[purpose])
          .find({ formId: { $in: formIds } })
          .sort({ submittedAt: -1 })
          .limit(1000)
          .toArray(),
      ),
    );
    const items = groups
      .flat()
      .sort((left, right) => new Date(right.submittedAt) - new Date(left.submittedAt));
    response.json({
      section: { id: sectionId, name: forms[0].destination.databaseSectionName },
      items: items.map(serialize),
    });
  }),
);

formsRouter.get(
  '/submission/:purpose/:submissionId',
  asyncHandler(async (request, response) => {
    const collection = SUBMISSION_COLLECTIONS[String(request.params.purpose)];
    if (!collection) return response.status(400).json({ message: 'Invalid form purpose.' });
    const item = await db()
      .collection(collection)
      .findOne({ _id: id(request.params.submissionId) });
    if (!item) return response.status(404).json({ message: 'Submitted record not found.' });
    response.json({ item: serialize(item) });
  }),
);

formsRouter.patch(
  '/submission/:purpose/:submissionId',
  asyncHandler(async (request, response) => {
    const collection = SUBMISSION_COLLECTIONS[String(request.params.purpose)];
    if (!collection) return response.status(400).json({ message: 'Invalid form purpose.' });
    const submissionId = id(request.params.submissionId);
    const existing = await db().collection(collection).findOne({ _id: submissionId });
    if (!existing) return response.status(404).json({ message: 'Submitted record not found.' });
    const responses = request.body.responses || {};
    const repeatableResponses = request.body.repeatableResponses || {};
    const aliases = await masterValueAliases(db(), responses, repeatableResponses);
    const errors = validateSubmission(
      existing.formSnapshot,
      responses,
      repeatableResponses,
      aliases,
    );
    if (errors.length)
      return response.status(422).json({ message: 'Complete the required form fields.', errors });
    const item = await db()
      .collection(collection)
      .findOneAndUpdate(
        { _id: submissionId },
        {
          $set: {
            responses,
            repeatableResponses,
            updatedBy: id(request.admin._id),
            updatedAt: new Date(),
          },
        },
        { returnDocument: 'after' },
      );
    response.json({ item: serialize(item) });
  }),
);

formsRouter.post(
  '/:formId/upload',
  upload.single('file'),
  asyncHandler(async (request, response) => {
    const form = await db()
      .collection('forms')
      .findOne({ _id: id(request.params.formId), status: 'published', isActive: true });
    if (!form || (form.purpose || 'admission') === 'admission')
      return response.status(404).json({ message: 'This data-entry form is unavailable.' });
    if (!request.file) return response.status(400).json({ message: 'Choose a file to upload.' });
    const field = findField(activeForm(form), request.body.fieldId);
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
    const key = `form-submissions/${form._id}/${field.id}/${crypto.randomUUID()}${extensionForMimeType(request.file.mimetype)}`;
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

formsRouter.post(
  '/:formId/submissions',
  asyncHandler(async (request, response) => {
    const form = await db()
      .collection('forms')
      .findOne({ _id: id(request.params.formId), status: 'published', isActive: true });
    const collection = SUBMISSION_COLLECTIONS[form?.purpose];
    if (!form || !collection)
      return response.status(404).json({ message: 'This data-entry form is unavailable.' });
    if (!form.destination?.databaseSectionId || !form.destination?.navigationSectionId)
      return response.status(409).json({
        message: 'Republish this form after configuring its sidebar and database sections.',
      });
    const responses = request.body.responses || {};
    const repeatableResponses = request.body.repeatableResponses || {};
    const aliases = await masterValueAliases(db(), responses, repeatableResponses);
    const snapshot = activeForm(form);
    const errors = validateSubmission(snapshot, responses, repeatableResponses, aliases);
    if (errors.length)
      return response.status(422).json({ message: 'Complete the required form fields.', errors });
    const applicationCode = await generateApplicationCode();
    const now = new Date();
    const document = {
      formId: form._id,
      formName: form.name,
      formSlug: form.slug,
      formVersion: form.version,
      formSnapshot: snapshot,
      purpose: form.purpose,
      applicationCode,
      applicationCodeGeneratedAt: now,
      navigationSectionId: form.destination.navigationSectionId,
      navigationSectionName: form.destination.navigationSectionName,
      databaseSectionId: form.destination.databaseSectionId,
      databaseSectionName: form.destination.databaseSectionName,
      audience: form.audience,
      responses,
      repeatableResponses,
      status: 'submitted',
      createdBy: id(request.admin._id),
      createdAt: now,
      submittedAt: now,
      updatedAt: now,
    };
    const result = await db().collection(collection).insertOne(document);
    response.status(201).json({ item: serialize({ ...document, _id: result.insertedId }) });
  }),
);

formsRouter.get(
  '/submissions/:purpose/:formId',
  asyncHandler(async (request, response) => {
    const purpose = String(request.params.purpose);
    const collections = {
      faculty: 'facultyApplications',
      employee: 'employeeApplications',
      general: 'formSubmissions',
    };
    if (!collections[purpose])
      return response.status(400).json({ message: 'Student forms use the Admissions workflow.' });
    const formId = id(request.params.formId, 'formId');
    const form = await db().collection('forms').findOne({ _id: formId, purpose });
    if (!form) return response.status(404).json({ message: 'Application form not found.' });
    const items = await db()
      .collection(collections[purpose])
      .find({ formId })
      .sort({ submittedAt: -1 })
      .limit(1000)
      .toArray();
    response.json({ items: items.map(serialize), form: serialize(form) });
  }),
);

formsRouter.get(
  '/mapping-options',
  asyncHandler(async (_request, response) => {
    const items = await db()
      .collection('masterValues')
      .find({
        typeSlug: {
          $in: ['academic', 'university', 'college', 'department', 'level'],
        },
        isActive: true,
      })
      .sort({ typeSlug: 1, order: 1, name: 1 })
      .toArray();
    response.json({ items: items.map(serialize) });
  }),
);

formsRouter.get(
  '/',
  asyncHandler(async (request, response) => {
    const items = await db().collection('forms').find({}).sort({ updatedAt: -1 }).toArray();
    response.json({ items: items.map(serialize) });
  }),
);
formsRouter.post(
  '/',
  asyncHandler(async (request, response) => {
    const now = new Date();
    const document = {
      ...normalizeForm(request.body),
      version: 1,
      createdBy: id(request.admin._id),
      updatedBy: id(request.admin._id),
      createdAt: now,
      updatedAt: now,
    };
    const result = await db().collection('forms').insertOne(document);
    response.status(201).json({ item: serialize({ ...document, _id: result.insertedId }) });
  }),
);
formsRouter.get(
  '/:formId',
  asyncHandler(async (request, response) => {
    const item = await db()
      .collection('forms')
      .findOne({ _id: id(request.params.formId) });
    if (!item) return response.status(404).json({ message: 'Form not found.' });
    response.json({ item: serialize(item) });
  }),
);
formsRouter.put(
  '/:formId',
  asyncHandler(async (request, response) => {
    const _id = id(request.params.formId);
    const existing = await db().collection('forms').findOne({ _id });
    if (!existing) return response.status(404).json({ message: 'Form not found.' });
    const data = normalizeForm(request.body, existing);
    if (existing.status === 'published' && data.purpose !== existing.purpose)
      return response.status(409).json({
        message: 'The form purpose cannot be changed after first publication.',
      });
    if (
      existing.destinationLockedAt &&
      data.purpose !== 'admission' &&
      destinationKey(existing.destination) !== destinationKey(data.destination)
    )
      return response.status(409).json({
        message: 'The sidebar and database destination cannot be changed after first publication.',
      });
    if (data.status === 'published' && data.isActive) {
      const errors = publishErrors(data);
      if (errors.length)
        return response.status(422).json({
          message: 'Complete the form publishing requirements.',
          errors,
        });
      const forms = await db()
        .collection('forms')
        .find({ status: 'published', isActive: true })
        .toArray();
      const conflict = forms.find(
        (form) =>
          data.purpose === 'admission' &&
          String(form._id) !== String(_id) &&
          audiencesOverlap(form, data),
      );
      if (conflict)
        return response.status(409).json({
          message: `“${conflict.name}” already covers part of this admission audience. Archive it or use a non-overlapping session and level mapping.`,
        });
      if (data.purpose !== 'admission' && !existing.destinationLockedAt)
        data.destinationLockedAt = new Date();
    }
    const history = {
      version: existing.version,
      name: existing.name,
      status: existing.status,
      sections: existing.sections,
      savedAt: new Date(),
      savedBy: id(request.admin._id),
    };
    const result = await db()
      .collection('forms')
      .findOneAndUpdate(
        { _id },
        {
          $set: { ...data, updatedBy: id(request.admin._id), updatedAt: new Date() },
          $inc: { version: 1 },
          $push: { history: { $each: [history], $slice: -10 } },
        },
        { returnDocument: 'after' },
      );
    response.json({ item: serialize(result) });
  }),
);
formsRouter.delete(
  '/:formId',
  asyncHandler(async (request, response) => {
    const formId = id(request.params.formId);
    const submissionCounts = await Promise.all(
      ['admissions', 'facultyApplications', 'employeeApplications', 'formSubmissions'].map(
        (collection) => db().collection(collection).countDocuments({ formId }),
      ),
    );
    if (submissionCounts.some(Boolean))
      return response
        .status(409)
        .json({ message: 'Forms with submitted records must be archived instead of deleted.' });
    const result = await db().collection('forms').deleteOne({ _id: formId });
    if (!result.deletedCount) return response.status(404).json({ message: 'Form not found.' });
    response.status(204).end();
  }),
);

async function generateApplicationCode() {
  const letters = 'ABCDEFGHJKLMNPQRSTUVWXYZ';
  const digits = '23456789';
  const alphabet = `${letters}${digits}`;
  for (let attempt = 0; attempt < 20; attempt += 1) {
    const characters = [randomCharacter(letters), randomCharacter(digits)];
    while (characters.length < 8) characters.push(randomCharacter(alphabet));
    for (let index = characters.length - 1; index > 0; index -= 1) {
      const swapIndex = crypto.randomInt(0, index + 1);
      [characters[index], characters[swapIndex]] = [characters[swapIndex], characters[index]];
    }
    const code = characters.join('');
    const exists = await Promise.all(
      Object.values(SUBMISSION_COLLECTIONS).map((collection) =>
        db().collection(collection).findOne({ applicationCode: code }),
      ),
    );
    if (!exists.some(Boolean)) return code;
  }
  const error = new Error('A unique application code could not be generated. Try again.');
  error.status = 503;
  throw error;
}

function randomCharacter(alphabet) {
  return alphabet[crypto.randomInt(0, alphabet.length)];
}

function findField(form, fieldId) {
  for (const section of form.sections || [])
    for (const subsection of section.subsections || []) {
      const field = subsection.fields?.find((candidate) => candidate.id === fieldId);
      if (field) return field;
    }
  return null;
}

function destinationKey(destination = {}) {
  return JSON.stringify({
    navigationSectionId: destination.navigationSectionId,
    navigationSectionName: destination.navigationSectionName,
    databaseSectionId: destination.databaseSectionId,
    databaseSectionName: destination.databaseSectionName,
  });
}
