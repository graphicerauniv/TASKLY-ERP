import express from 'express';
import { Buffer } from 'node:buffer';
import { z } from 'zod';
import { db, id, serialize } from '../db.js';
import { asyncHandler } from '../lib/async-handler.js';
import { requireAdmin, requireStudent } from '../middleware/auth.js';
import {
  completePayment,
  createRazorpayOrder,
  paymentReceiptHtml,
  razorpayEnabled,
  razorpayPaymentDetails,
  refreshStudentPenalties,
  verifyCheckoutSignature,
  verifyWebhookSignature,
} from '../services/fee-payments.js';

export const paymentsRouter = express.Router();
const orderSchema = z.object({
  amount: z.coerce.number().positive().max(10_000_000),
  ledgerId: z.string().min(1),
});
const verificationSchema = z.object({
  razorpay_order_id: z.string().min(1),
  razorpay_payment_id: z.string().min(1),
  razorpay_signature: z.string().min(1),
});

paymentsRouter.post(
  '/student/orders',
  requireStudent,
  asyncHandler(async (request, response) => {
    const data = orderSchema.parse(request.body);
    const order = await createRazorpayOrder(
      db(),
      request.student,
      data.amount,
      id(data.ledgerId, 'ledgerId'),
    );
    response.status(201).json(order);
  }),
);

paymentsRouter.post(
  '/student/verify',
  requireStudent,
  asyncHandler(async (request, response) => {
    const data = verificationSchema.parse(request.body);
    const local = await db().collection('feePayments').findOne({
      razorpayOrderId: data.razorpay_order_id,
      studentAdmissionId: request.student._id,
    });
    if (!local)
      return response.status(404).json({ message: 'The local payment order was not found.' });
    if (
      !verifyCheckoutSignature(
        local.razorpayOrderId,
        data.razorpay_payment_id,
        data.razorpay_signature,
      )
    )
      return response.status(400).json({ message: 'The Razorpay payment signature is invalid.' });
    const details = await razorpayPaymentDetails(data.razorpay_payment_id);
    if (details.order_id !== data.razorpay_order_id)
      return response
        .status(400)
        .json({ message: 'The Razorpay payment does not match this order.' });
    if (Number(details.amount) !== Math.round(Number(local.amount) * 100))
      return response
        .status(400)
        .json({ message: 'The Razorpay payment amount does not match this order.' });
    const payment = await completePayment(db(), {
      orderId: data.razorpay_order_id,
      paymentId: data.razorpay_payment_id,
      method: details.method,
      email: details.email,
      contact: details.contact,
    });
    response.json({ item: serialize(payment) });
  }),
);

paymentsRouter.post(
  '/razorpay/webhook',
  asyncHandler(async (request, response) => {
    const rawBody = request.rawBody || Buffer.from(JSON.stringify(request.body || {}));
    if (!verifyWebhookSignature(rawBody, request.headers['x-razorpay-signature']))
      return response.status(400).json({ message: 'Invalid webhook signature.' });
    const entity = request.body?.payload?.payment?.entity;
    if (['payment.captured', 'order.paid'].includes(request.body?.event) && entity?.order_id) {
      await completePayment(db(), {
        orderId: entity.order_id,
        paymentId: entity.id,
        method: entity.method,
        email: entity.email,
        contact: entity.contact,
      });
    } else if (request.body?.event === 'payment.failed' && entity?.order_id) {
      await db()
        .collection('feePayments')
        .updateOne(
          { razorpayOrderId: entity.order_id, status: { $ne: 'paid' } },
          {
            $set: {
              status: 'failed',
              failureCode: entity.error_code || '',
              failureDescription: entity.error_description || '',
              updatedAt: new Date(),
            },
          },
        );
    }
    response.json({ received: true });
  }),
);

paymentsRouter.get(
  '/student/history',
  requireStudent,
  asyncHandler(async (request, response) => {
    const items = await db()
      .collection('feePayments')
      .find({ studentAdmissionId: request.student._id })
      .sort({ createdAt: -1 })
      .limit(200)
      .toArray();
    response.json({ items: items.map(serialize), razorpayEnabled: razorpayEnabled() });
  }),
);

paymentsRouter.get(
  '/student/receipt/:paymentId',
  requireStudent,
  asyncHandler(async (request, response) => {
    const payment = await db()
      .collection('feePayments')
      .findOne({
        _id: id(request.params.paymentId, 'paymentId'),
        studentAdmissionId: request.student._id,
        status: 'paid',
      });
    if (!payment) return response.status(404).json({ message: 'Receipt not found.' });
    sendReceipt(response, payment);
  }),
);

paymentsRouter.get(
  '/admin/accounts',
  requireAdmin,
  asyncHandler(async (request, response) => {
    const filter = {};
    if (request.query.status) filter.status = request.query.status;
    if (request.query.search) {
      const match = { $regex: escapeRegex(request.query.search), $options: 'i' };
      filter.$or = [
        { studentId: match },
        { studentName: match },
        { receiptNumber: match },
        { razorpayPaymentId: match },
      ];
    }
    const items = await db()
      .collection('feePayments')
      .find(filter)
      .sort({ createdAt: -1 })
      .limit(2000)
      .toArray();
    const studentIds = [...new Set(items.map((item) => String(item.studentAdmissionId)))].map(
      (value) => id(value, 'studentAdmissionId'),
    );
    for (const studentAdmissionId of studentIds)
      await refreshStudentPenalties(db(), studentAdmissionId);
    const ledgers = studentIds.length
      ? await db()
          .collection('studentFeeLedgers')
          .find({ studentAdmissionId: { $in: studentIds }, status: 'active' })
          .toArray()
      : [];
    const outstandingByStudent = new Map();
    for (const ledger of ledgers) {
      const key = String(ledger.studentAdmissionId);
      outstandingByStudent.set(
        key,
        Number(outstandingByStudent.get(key) || 0) + Number(ledger.balanceAmount || 0),
      );
    }
    const paid = items.filter((item) => item.status === 'paid');
    response.json({
      items: items.map((item) =>
        serialize({
          ...item,
          outstandingBalance: outstandingByStudent.get(String(item.studentAdmissionId)) || 0,
        }),
      ),
      summary: {
        successfulPayments: paid.length,
        collectedAmount: paid.reduce((sum, item) => sum + Number(item.amount || 0), 0),
        pendingPayments: items.filter((item) => item.status === 'created').length,
      },
    });
  }),
);

paymentsRouter.get(
  '/admin/accounts/:paymentId/receipt',
  requireAdmin,
  asyncHandler(async (request, response) => {
    const payment = await db()
      .collection('feePayments')
      .findOne({
        _id: id(request.params.paymentId, 'paymentId'),
        status: 'paid',
      });
    if (!payment) return response.status(404).json({ message: 'Receipt not found.' });
    sendReceipt(response, payment);
  }),
);

paymentsRouter.post(
  '/admin/penalties/refresh',
  requireAdmin,
  asyncHandler(async (request, response) => {
    const studentAdmissionId = id(request.body.studentAdmissionId, 'studentAdmissionId');
    const items = await refreshStudentPenalties(db(), studentAdmissionId);
    response.json({ items: items.map(serialize) });
  }),
);

function sendReceipt(response, payment) {
  response
    .set('Content-Type', 'text/html; charset=utf-8')
    .set('Content-Disposition', `attachment; filename="${payment.receiptNumber}.html"`)
    .send(paymentReceiptHtml(payment));
}

const escapeRegex = (value) => String(value).replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
