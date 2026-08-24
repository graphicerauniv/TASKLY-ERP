import express from 'express';
import ExcelJS from 'exceljs';
import multer from 'multer';
import { z } from 'zod';
import { config } from '../config.js';
import { db, id, serialize } from '../db.js';
import { asyncHandler } from '../lib/async-handler.js';
import { normalizeFeeName, parseFeeWorkbook } from '../services/fee-workbook.js';

export const feesRouter = express.Router();
const upload = multer({
  storage: multer.memoryStorage(),
  limits: { fileSize: Math.max(config.maxUploadBytes, 10 * 1024 * 1024) },
  fileFilter(request, file, callback) {
    void request;
    callback(null, /\.xlsx$/i.test(file.originalname));
  },
});
const dateString = z.string().regex(/^\d{4}-\d{2}-\d{2}$/);
const amount = z.coerce.number().nonnegative().max(1_000_000_000);
const bookSchema = z.object({
  collegeId: z.string(),
  startDate: dateString,
  endDate: dateString,
  academicSession: z.string().trim().min(4).max(30),
  code: z.string().trim().min(2).max(40),
  frequency: z.enum(['semester', 'year']),
  isActive: z.boolean().optional().default(true),
});
const headSchema = z.object({
  bookId: z.string(),
  name: z.string().trim().min(2).max(120),
  category: z.enum(['fee', 'discount', 'payment-option']).optional().default('fee'),
  isActive: z.boolean().optional().default(true),
});
const hostelFeeSchema = z.object({
  bookId: z.string(),
  hostelId: z.string(),
  seater: z.coerce.number().int().min(1).max(50),
  roomType: z.string().trim().min(1).max(80),
  feeHeadId: z.string(),
  frequency: z.enum(['one-time', 'semester', 'half-yearly', 'yearly']),
  amount,
});
const courseFeeSchema = z.object({
  bookId: z.string(),
  courseId: z.string(),
  feeHeadId: z.string(),
  academicYear: z.coerce.number().int().min(1).max(10).nullable().optional(),
  semester: z.coerce.number().int().min(1).max(20).nullable().optional(),
  frequency: z.enum(['one-time', 'semester', 'half-yearly', 'yearly']),
  eligibilityBand: z.string().trim().max(500).optional().default('All candidates'),
  amount,
});

async function masterValue(value, typeSlug, field) {
  const item = await db().collection('masterValues').findOne({ _id: id(value, field), typeSlug });
  if (!item) {
    const error = new Error(`${field} was not found.`);
    error.status = 404;
    throw error;
  }
  return item;
}

async function feeBook(value) {
  const item = await db().collection('feeBooks').findOne({ _id: id(value, 'bookId') });
  if (!item) {
    const error = new Error('Fee book was not found.');
    error.status = 404;
    throw error;
  }
  return item;
}

async function feeHead(value, bookId) {
  const item = await db().collection('feeHeads').findOne({
    _id: id(value, 'feeHeadId'),
    bookId,
  });
  if (!item) {
    const error = new Error('Fee head was not found in the selected book.');
    error.status = 404;
    throw error;
  }
  return item;
}

feesRouter.get('/books', asyncHandler(async (request, response) => {
  const items = await db().collection('feeBooks').find({}).sort({ createdAt: -1 }).toArray();
  response.json({ items: items.map(serialize) });
}));

feesRouter.get('/course-options', asyncHandler(async (request, response) => {
  const items = await db()
    .collection('masterValues')
    .find({ typeSlug: 'course', isActive: true })
    .project({ name: 1, parentId: 1, isActive: 1, metadata: 1 })
    .sort({ name: 1 })
    .toArray();
  response.json({ items: items.map(serialize) });
}));

feesRouter.post('/books', asyncHandler(async (request, response) => {
  const data = bookSchema.parse(request.body);
  if (data.endDate < data.startDate) return response.status(400).json({ message: 'End date must be on or after start date.' });
  const college = await masterValue(data.collegeId, 'college', 'collegeId');
  const now = new Date();
  const document = { ...data, code: data.code.toUpperCase(), collegeId: college._id, collegeName: college.name, createdBy: id(request.admin._id), createdAt: now, updatedAt: now };
  const result = await db().collection('feeBooks').insertOne(document);
  response.status(201).json({ item: serialize({ ...document, _id: result.insertedId }) });
}));

feesRouter.patch('/books/:bookId', asyncHandler(async (request, response) => {
  const data = bookSchema.partial().parse(request.body);
  if (data.collegeId) {
    const college = await masterValue(data.collegeId, 'college', 'collegeId');
    data.collegeId = college._id;
    data.collegeName = college.name;
  }
  if (data.code) data.code = data.code.toUpperCase();
  const result = await db().collection('feeBooks').findOneAndUpdate({ _id: id(request.params.bookId) }, { $set: { ...data, updatedAt: new Date() } }, { returnDocument: 'after' });
  if (!result) return response.status(404).json({ message: 'Fee book was not found.' });
  response.json({ item: serialize(result) });
}));

feesRouter.delete('/books/:bookId', asyncHandler(async (request, response) => {
  const bookId = id(request.params.bookId);
  const usage = await Promise.all(['feeHeads', 'hostelFees', 'courseFees'].map((name) => db().collection(name).countDocuments({ bookId })));
  if (usage.some(Boolean)) return response.status(409).json({ message: 'This book has fee records. Disable it instead of deleting it.' });
  const result = await db().collection('feeBooks').deleteOne({ _id: bookId });
  if (!result.deletedCount) return response.status(404).json({ message: 'Fee book was not found.' });
  response.status(204).end();
}));

feesRouter.get('/heads', asyncHandler(async (request, response) => {
  const filter = request.query.bookId ? { bookId: id(request.query.bookId, 'bookId') } : {};
  const items = await db().collection('feeHeads').find(filter).sort({ name: 1 }).toArray();
  response.json({ items: items.map(serialize) });
}));

feesRouter.post('/heads', asyncHandler(async (request, response) => {
  const data = headSchema.parse(request.body);
  const book = await feeBook(data.bookId);
  const now = new Date();
  const document = { ...data, bookId: book._id, bookCode: book.code, normalizedName: normalizeFeeName(data.name), createdBy: id(request.admin._id), createdAt: now, updatedAt: now };
  const result = await db().collection('feeHeads').insertOne(document);
  response.status(201).json({ item: serialize({ ...document, _id: result.insertedId }) });
}));

feesRouter.patch('/heads/:headId', asyncHandler(async (request, response) => {
  const data = headSchema.omit({ bookId: true }).partial().parse(request.body);
  if (data.name) data.normalizedName = normalizeFeeName(data.name);
  const result = await db().collection('feeHeads').findOneAndUpdate({ _id: id(request.params.headId) }, { $set: { ...data, updatedAt: new Date() } }, { returnDocument: 'after' });
  if (!result) return response.status(404).json({ message: 'Fee head was not found.' });
  response.json({ item: serialize(result) });
}));

feesRouter.delete('/heads/:headId', asyncHandler(async (request, response) => {
  const feeHeadId = id(request.params.headId);
  const usage = await Promise.all(['hostelFees', 'courseFees'].map((name) => db().collection(name).countDocuments({ feeHeadId })));
  if (usage.some(Boolean)) return response.status(409).json({ message: 'This fee head is in use. Disable it instead of deleting it.' });
  const result = await db().collection('feeHeads').deleteOne({ _id: feeHeadId });
  if (!result.deletedCount) return response.status(404).json({ message: 'Fee head was not found.' });
  response.status(204).end();
}));

feesRouter.get('/hostel-fees', asyncHandler(async (request, response) => {
  const filter = request.query.bookId ? { bookId: id(request.query.bookId, 'bookId') } : {};
  const items = await db().collection('hostelFees').find(filter).sort({ hostelName: 1, seater: 1, roomType: 1 }).toArray();
  response.json({ items: items.map(serialize) });
}));

feesRouter.post('/hostel-fees', asyncHandler(async (request, response) => {
  const data = hostelFeeSchema.parse(request.body);
  const book = await feeBook(data.bookId);
  const hostel = await db().collection('hostels').findOne({ _id: id(data.hostelId, 'hostelId') });
  if (!hostel) return response.status(404).json({ message: 'Hostel was not found.' });
  const head = await feeHead(data.feeHeadId, book._id);
  const now = new Date();
  const document = { ...data, bookId: book._id, bookCode: book.code, hostelId: hostel._id, hostelName: hostel.name, feeHeadId: head._id, feeHeadName: head.name, createdBy: id(request.admin._id), createdAt: now, updatedAt: now };
  const result = await db().collection('hostelFees').insertOne(document);
  response.status(201).json({ item: serialize({ ...document, _id: result.insertedId }) });
}));

feesRouter.delete('/hostel-fees/:feeId', asyncHandler(async (request, response) => {
  const result = await db().collection('hostelFees').deleteOne({ _id: id(request.params.feeId) });
  if (!result.deletedCount) return response.status(404).json({ message: 'Hostel fee was not found.' });
  response.status(204).end();
}));

feesRouter.get('/course-fees', asyncHandler(async (request, response) => {
  const filter = request.query.bookId ? { bookId: id(request.query.bookId, 'bookId') } : {};
  if (request.query.courseId) filter.courseId = id(request.query.courseId, 'courseId');
  const items = await db().collection('courseFees').find(filter).sort({ courseName: 1, academicYear: 1, semester: 1, feeHeadName: 1 }).limit(5000).toArray();
  response.json({ items: items.map(serialize) });
}));

feesRouter.post('/course-fees', asyncHandler(async (request, response) => {
  const data = courseFeeSchema.parse(request.body);
  const book = await feeBook(data.bookId);
  const course = await masterValue(data.courseId, 'course', 'courseId');
  const head = await feeHead(data.feeHeadId, book._id);
  const now = new Date();
  const document = { ...data, bookId: book._id, bookCode: book.code, courseId: course._id, courseName: course.name, feeHeadId: head._id, feeHeadName: head.name, category: head.category, source: 'manual', createdBy: id(request.admin._id), createdAt: now, updatedAt: now };
  const result = await db().collection('courseFees').insertOne(document);
  response.status(201).json({ item: serialize({ ...document, _id: result.insertedId }) });
}));

feesRouter.delete('/course-fees/:feeId', asyncHandler(async (request, response) => {
  const result = await db().collection('courseFees').deleteOne({ _id: id(request.params.feeId) });
  if (!result.deletedCount) return response.status(404).json({ message: 'Course fee was not found.' });
  response.status(204).end();
}));

feesRouter.post('/course-fees/import/preview', upload.single('file'), asyncHandler(async (request, response) => {
  if (!request.file) return response.status(400).json({ message: 'Choose an .xlsx fee workbook.' });
  const book = await feeBook(request.body.bookId);
  const courses = await db().collection('masterValues').find({ typeSlug: 'course', isActive: true }).sort({ name: 1 }).toArray();
  const heads = await db().collection('feeHeads').find({ bookId: book._id, isActive: true }).toArray();
  const workbook = new ExcelJS.Workbook();
  await workbook.xlsx.load(request.file.buffer);
  const sheets = parseFeeWorkbook(workbook, courses);
  const sourceHeads = [...new Set(sheets.flatMap((sheet) => sheet.sourceHeads))].sort();
  const headMappings = sourceHeads.map((sourceHead) => {
    const matches = heads.filter((head) => head.normalizedName === normalizeFeeName(sourceHead));
    return { sourceHead, status: matches.length === 1 ? 'matched' : matches.length ? 'ambiguous' : 'unmatched', feeHeadId: matches.length === 1 ? String(matches[0]._id) : null, feeHeadName: matches.length === 1 ? matches[0].name : null };
  });
  const now = new Date();
  const preview = { bookId: book._id, bookCode: book.code, fileName: request.file.originalname, sheets, headMappings, createdBy: id(request.admin._id), createdAt: now, expiresAt: new Date(now.getTime() + 24 * 60 * 60 * 1000), status: 'pending' };
  const result = await db().collection('feeImportPreviews').insertOne(preview);
  response.status(201).json({ preview: serialize({ ...preview, _id: result.insertedId, sheets: sheets.map(({ lines, ...sheet }) => sheet) }) });
}));

const importSchema = z.object({
  previewId: z.string(),
  sheetMappings: z.array(z.object({ sheetName: z.string(), courseIds: z.array(z.string()) })),
  headMappings: z.array(z.object({ sourceHead: z.string(), feeHeadId: z.string().nullable() })),
  replaceExisting: z.boolean().optional().default(false),
});

feesRouter.post('/course-fees/import/commit', asyncHandler(async (request, response) => {
  const data = importSchema.parse(request.body);
  const preview = await db().collection('feeImportPreviews').findOne({ _id: id(data.previewId, 'previewId'), status: 'pending', expiresAt: { $gt: new Date() } });
  if (!preview) return response.status(404).json({ message: 'Import preview was not found or has expired.' });
  const courseIds = new Map(data.sheetMappings.map((item) => [item.sheetName, item.courseIds.map((courseId) => id(courseId, 'courseId'))]));
  const headIds = new Map(data.headMappings.filter((item) => item.feeHeadId).map((item) => [item.sourceHead, id(item.feeHeadId, 'feeHeadId')]));
  const selectedCourseIds = [...courseIds.values()].flat();
  const courses = await db().collection('masterValues').find({ _id: { $in: selectedCourseIds }, typeSlug: 'course' }).toArray();
  const heads = await db().collection('feeHeads').find({ _id: { $in: [...headIds.values()] }, bookId: preview.bookId }).toArray();
  const courseMap = new Map(courses.map((item) => [String(item._id), item]));
  const headMap = new Map(heads.map((item) => [String(item._id), item]));
  const documents = [];
  for (const sheet of preview.sheets) {
    const mappedCourses = (courseIds.get(sheet.sheetName) || [])
      .map((courseId) => courseMap.get(String(courseId)))
      .filter(Boolean);
    for (const course of mappedCourses) {
      for (const line of sheet.lines) {
        const feeHeadId = headIds.get(line.sourceHead);
        const head = feeHeadId && headMap.get(String(feeHeadId));
        if (!head) continue;
        documents.push({
        bookId: preview.bookId,
        bookCode: preview.bookCode,
        courseId: course._id,
        courseName: course.name,
        feeHeadId: head._id,
        feeHeadName: head.name,
        category: line.category,
        frequency: line.frequency,
        academicYear: line.academicYear,
        semester: line.semester,
        eligibilityBand: line.eligibilityBand,
        amount: line.amount,
        intakeYear: sheet.intakeYear,
        source: 'excel',
        sourceFile: preview.fileName,
        sourceSheet: sheet.sheetName,
        sourceCell: line.sourceCell,
        importPreviewId: preview._id,
        createdBy: id(request.admin._id),
        createdAt: new Date(),
        updatedAt: new Date(),
        });
      }
    }
  }
  if (!documents.length) return response.status(400).json({ message: 'No fee rows have both a course and fee-head mapping.' });
  if (data.replaceExisting) {
    const mappedCourses = [...new Set(documents.map((item) => String(item.courseId)))].map((value) => id(value));
    await db().collection('courseFees').deleteMany({ bookId: preview.bookId, courseId: { $in: mappedCourses }, source: 'excel' });
  }
  await db().collection('courseFees').insertMany(documents);
  await db().collection('feeImportPreviews').updateOne({ _id: preview._id }, { $set: { status: 'imported', importedAt: new Date(), importedCount: documents.length } });
  response.json({ imported: documents.length, mappedSheets: new Set(documents.map((item) => item.sourceSheet)).size });
}));
