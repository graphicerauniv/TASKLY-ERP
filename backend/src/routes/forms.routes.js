import express from 'express';
import { db, id, serialize } from '../db.js';
import { asyncHandler } from '../lib/async-handler.js';
import { normalizeForm } from '../services/form-definition.js';

export const formsRouter = express.Router();

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
    if (await db().collection('admissions').countDocuments({ formId }))
      return response
        .status(409)
        .json({ message: 'Forms with admission records must be archived instead of deleted.' });
    const result = await db().collection('forms').deleteOne({ _id: formId });
    if (!result.deletedCount) return response.status(404).json({ message: 'Form not found.' });
    response.status(204).end();
  }),
);
