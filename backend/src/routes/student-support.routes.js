import crypto from 'node:crypto';
import express from 'express';
import multer from 'multer';
import { z } from 'zod';
import { config } from '../config.js';
import { db, id, serialize } from '../db.js';
import { asyncHandler } from '../lib/async-handler.js';
import { storeObject } from '../services/object-storage.js';
import { extensionForMimeType } from '../services/upload-rules.js';

export const studentSupportRouter = express.Router();

const upload = multer({
  storage: multer.memoryStorage(),
  limits: { fileSize: config.maxUploadBytes },
});

const issueTypes = [
  'Fee amount discrepancy',
  'Payment debited but not updated',
  'Receipt problem',
  'Scholarship issue',
  'Challan or installment issue',
];

const supportRequestSchema = z.object({
  issueType: z.enum(issueTypes),
  feeLedgerId: z.string().trim().optional().default(''),
  feePeriodLabel: z.string().trim().max(120).optional().default(''),
  paymentReference: z.string().trim().max(120).optional().default(''),
  subject: z.string().trim().min(5).max(140),
  description: z.string().trim().min(20).max(2500),
  confirmed: z.literal('true'),
});

const allowedAttachments = new Set(['application/pdf', 'image/png', 'image/jpeg']);

studentSupportRouter.get(
  '/',
  asyncHandler(async (request, response) => {
    const items = await db()
      .collection('studentSupportRequests')
      .find({ studentAdmissionId: request.student._id })
      .sort({ createdAt: -1 })
      .limit(100)
      .toArray();
    response.json({ items: items.map(serialize) });
  }),
);

studentSupportRouter.post(
  '/',
  upload.single('attachment'),
  asyncHandler(async (request, response) => {
    const data = supportRequestSchema.parse(request.body);
    if (data.feeLedgerId) {
      const ledger = await db().collection('studentFeeLedgers').findOne({
        _id: id(data.feeLedgerId, 'feeLedgerId'),
        studentAdmissionId: request.student._id,
      });
      if (!ledger) return response.status(404).json({ message: 'The selected fee period was not found.' });
    }
    let attachment = null;
    if (request.file) {
      if (!allowedAttachments.has(request.file.mimetype))
        return response.status(400).json({ message: 'Attach a PDF, PNG, or JPG file.' });
      const key = `student-support/${request.student._id}/${crypto.randomUUID()}${extensionForMimeType(request.file.mimetype)}`;
      const stored = await storeObject({
        key,
        body: request.file.buffer,
        contentType: request.file.mimetype,
      });
      attachment = {
        name: request.file.originalname,
        key: stored.key,
        url: stored.url,
        mimeType: request.file.mimetype,
        size: request.file.size,
      };
    }
    const now = new Date();
    const document = {
      requestNumber: `FS-${now.getUTCFullYear()}-${crypto.randomBytes(4).toString('hex').toUpperCase()}`,
      studentAdmissionId: request.student._id,
      studentId: request.student.studentId || '',
      studentName: request.student.studentName || '',
      academicSession: request.student.academicSession || '',
      semester: Number(request.student.currentSemester || 1),
      issueType: data.issueType,
      feeLedgerId: data.feeLedgerId ? id(data.feeLedgerId, 'feeLedgerId') : null,
      feePeriodLabel: data.feePeriodLabel,
      paymentReference: data.paymentReference,
      subject: data.subject,
      description: data.description,
      attachment,
      priority: data.issueType === 'Payment debited but not updated' ? 'high' : 'normal',
      status: 'open',
      createdAt: now,
      updatedAt: now,
    };
    const result = await db().collection('studentSupportRequests').insertOne(document);
    response.status(201).json({ item: serialize({ ...document, _id: result.insertedId }) });
  }),
);
