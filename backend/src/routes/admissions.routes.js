import express from 'express';
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
    response.json({ item: serialize(item) });
  }),
);
