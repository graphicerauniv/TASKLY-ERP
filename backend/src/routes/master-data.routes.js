import express from 'express';
import ExcelJS from 'exceljs';
import multer from 'multer';
import { Readable } from 'node:stream';
import { z } from 'zod';
import { db, id, serialize } from '../db.js';
import { asyncHandler } from '../lib/async-handler.js';
import { pageResult, pagination } from '../lib/pagination.js';
import { slugify } from '../lib/slug.js';

export const masterDataRouter = express.Router();
const upload = multer({ storage: multer.memoryStorage(), limits: { fileSize: 5 * 1024 * 1024 } });
const typeSchema = z.object({
  name: z.string().trim().min(2).max(80),
  parentTypeSlug: z.string().nullable().optional(),
  isActive: z.boolean().optional(),
});
const valueSchema = z.object({
  name: z.string().trim().min(1).max(160),
  code: z.string().trim().max(50).optional().default(''),
  parentId: z.string().nullable().optional(),
  isActive: z.boolean().optional().default(true),
  metadata: z.record(z.string(), z.unknown()).optional().default({}),
});

masterDataRouter.get(
  '/types',
  asyncHandler(async (request, response) => {
    const items = await db()
      .collection('masterTypes')
      .find({})
      .sort({ order: 1, name: 1 })
      .toArray();
    response.json({ items: items.map(serialize) });
  }),
);

masterDataRouter.post(
  '/types',
  asyncHandler(async (request, response) => {
    const data = typeSchema.parse(request.body);
    const slug = slugify(data.name);
    if (!slug)
      return response.status(400).json({ message: 'A valid master-data name is required.' });
    const now = new Date();
    const document = {
      ...data,
      slug,
      parentTypeSlug: data.parentTypeSlug || null,
      isCustom: true,
      isActive: data.isActive ?? true,
      order: 1000,
      createdAt: now,
      updatedAt: now,
    };
    const result = await db().collection('masterTypes').insertOne(document);
    response.status(201).json({ item: serialize({ ...document, _id: result.insertedId }) });
  }),
);

masterDataRouter.patch(
  '/types/:slug',
  asyncHandler(async (request, response) => {
    const data = typeSchema.partial().parse(request.body);
    delete data.slug;
    const result = await db()
      .collection('masterTypes')
      .findOneAndUpdate(
        { slug: request.params.slug },
        { $set: { ...data, updatedAt: new Date() } },
        { returnDocument: 'after' },
      );
    if (!result) return response.status(404).json({ message: 'Master-data type not found.' });
    response.json({ item: serialize(result) });
  }),
);

masterDataRouter.delete(
  '/types/:slug',
  asyncHandler(async (request, response) => {
    const type = await db().collection('masterTypes').findOne({ slug: request.params.slug });
    if (!type) return response.status(404).json({ message: 'Master-data type not found.' });
    if (!type.isCustom)
      return response
        .status(400)
        .json({ message: 'Built-in master-data types cannot be deleted.' });
    await Promise.all([
      db().collection('masterTypes').deleteOne({ _id: type._id }),
      db().collection('masterValues').deleteMany({ typeSlug: type.slug }),
    ]);
    response.status(204).end();
  }),
);

masterDataRouter.get(
  '/:typeSlug/values',
  asyncHandler(async (request, response) => {
    const { page, limit, skip } = pagination(request.query);
    const filter = { typeSlug: request.params.typeSlug };
    if (request.query.active === 'true') filter.isActive = true;
    if (request.query.parentId) filter.parentId = id(request.query.parentId, 'parentId');
    if (request.query.search)
      filter.$or = [
        { name: { $regex: escapeRegex(request.query.search), $options: 'i' } },
        { code: { $regex: escapeRegex(request.query.search), $options: 'i' } },
      ];
    const [items, total] = await Promise.all([
      db()
        .collection('masterValues')
        .find(filter)
        .sort({ order: 1, name: 1 })
        .skip(skip)
        .limit(limit)
        .toArray(),
      db().collection('masterValues').countDocuments(filter),
    ]);
    response.json(pageResult(items.map(serialize), total, page, limit));
  }),
);

masterDataRouter.post(
  '/:typeSlug/values',
  asyncHandler(async (request, response) => {
    await requireType(request.params.typeSlug);
    const data = valueSchema.parse(request.body);
    const now = new Date();
    const document = {
      ...data,
      typeSlug: request.params.typeSlug,
      parentId: data.parentId ? id(data.parentId, 'parentId') : null,
      order: Number(request.body.order) || 0,
      createdAt: now,
      updatedAt: now,
    };
    const result = await db().collection('masterValues').insertOne(document);
    response.status(201).json({ item: serialize({ ...document, _id: result.insertedId }) });
  }),
);

masterDataRouter.patch(
  '/:typeSlug/values/:valueId',
  asyncHandler(async (request, response) => {
    const data = valueSchema.partial().parse(request.body);
    if ('parentId' in data) data.parentId = data.parentId ? id(data.parentId, 'parentId') : null;
    const result = await db()
      .collection('masterValues')
      .findOneAndUpdate(
        { _id: id(request.params.valueId), typeSlug: request.params.typeSlug },
        { $set: { ...data, updatedAt: new Date() } },
        { returnDocument: 'after' },
      );
    if (!result) return response.status(404).json({ message: 'Master-data value not found.' });
    response.json({ item: serialize(result) });
  }),
);

masterDataRouter.delete(
  '/:typeSlug/values/:valueId',
  asyncHandler(async (request, response) => {
    const valueId = id(request.params.valueId);
    const dependents = await db().collection('masterValues').countDocuments({ parentId: valueId });
    if (dependents)
      return response
        .status(409)
        .json({ message: 'This value is used as a parent and cannot be deleted.' });
    const result = await db()
      .collection('masterValues')
      .deleteOne({ _id: valueId, typeSlug: request.params.typeSlug });
    if (!result.deletedCount)
      return response.status(404).json({ message: 'Master-data value not found.' });
    response.status(204).end();
  }),
);

masterDataRouter.post(
  '/:typeSlug/import',
  upload.single('file'),
  asyncHandler(async (request, response) => {
    await requireType(request.params.typeSlug);
    if (!request.file) return response.status(400).json({ message: 'Choose a CSV or Excel file.' });
    const workbook = new ExcelJS.Workbook();
    if (request.file.originalname.toLowerCase().endsWith('.csv'))
      await workbook.csv.read(Readable.from(request.file.buffer));
    else await workbook.xlsx.load(request.file.buffer);
    const sheet = workbook.worksheets[0];
    if (!sheet)
      return response.status(400).json({ message: 'The uploaded file has no worksheet.' });
    const headers = sheet.getRow(1).values.map((v) =>
      String(v || '')
        .trim()
        .toLowerCase(),
    );
    const index = (name) => headers.indexOf(name);
    if (index('name') < 0)
      return response.status(400).json({ message: 'The file must contain a Name column.' });
    const operations = [];
    sheet.eachRow((row, rowNumber) => {
      if (rowNumber === 1) return;
      const name = String(row.getCell(index('name')).text || '').trim();
      if (!name) return;
      const code = index('code') > 0 ? String(row.getCell(index('code')).text || '').trim() : '';
      const activeText =
        index('active') > 0 ? String(row.getCell(index('active')).text).toLowerCase() : 'true';
      operations.push({
        updateOne: {
          filter: { typeSlug: request.params.typeSlug, name, parentId: null },
          update: {
            $set: {
              code,
              isActive: !['false', 'no', '0'].includes(activeText),
              updatedAt: new Date(),
            },
            $setOnInsert: {
              typeSlug: request.params.typeSlug,
              parentId: null,
              order: 0,
              metadata: {},
              createdAt: new Date(),
            },
          },
          upsert: true,
        },
      });
    });
    if (operations.length) await db().collection('masterValues').bulkWrite(operations);
    response.json({ imported: operations.length });
  }),
);

async function requireType(slug) {
  const type = await db().collection('masterTypes').findOne({ slug });
  if (!type) {
    const error = new Error('Master-data type not found.');
    error.status = 404;
    throw error;
  }
  return type;
}
const escapeRegex = (value) => String(value).replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
