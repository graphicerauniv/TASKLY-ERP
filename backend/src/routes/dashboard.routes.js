import express from 'express';
import { db } from '../db.js';
import { asyncHandler } from '../lib/async-handler.js';

export const dashboardRouter = express.Router();
dashboardRouter.get(
  '/summary',
  asyncHandler(async (request, response) => {
    const [masterValues, forms, drafts, submitted] = await Promise.all([
      db().collection('masterValues').countDocuments(),
      db().collection('forms').countDocuments(),
      db().collection('admissions').countDocuments({ status: 'draft' }),
      db().collection('admissions').countDocuments({ status: 'submitted' }),
    ]);
    response.json({ masterValues, forms, drafts, submitted });
  }),
);
