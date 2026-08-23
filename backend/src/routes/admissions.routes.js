import express from 'express';
import { ObjectId } from 'mongodb';
import { db, id, serialize } from '../db.js';
import { asyncHandler } from '../lib/async-handler.js';
import { pageResult, pagination } from '../lib/pagination.js';

export const admissionsRouter = express.Router();
admissionsRouter.get(
  '/',
  asyncHandler(async (request, response) => {
    const { page, limit, skip } = pagination(request.query);
    const filter = {};
    if (request.query.status) filter.status = request.query.status;
    if (request.query.search)
      filter.applicationNumber = { $regex: String(request.query.search), $options: 'i' };
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
    if (!result.deletedCount)
      return response.status(404).json({ message: 'Admission not found.' });
    response.status(204).end();
  }),
);

function collectObjectIds(value, output) {
  if (typeof value === 'string' && ObjectId.isValid(value)) output.add(value);
  else if (Array.isArray(value)) value.forEach((item) => collectObjectIds(item, output));
  else if (value && typeof value === 'object')
    Object.values(value).forEach((item) => collectObjectIds(item, output));
}
