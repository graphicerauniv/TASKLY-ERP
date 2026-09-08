import { z } from 'zod';

export const financeDirectoryQuery = z.object({
  section: z.enum(['payments', 'credits', 'discounts']).default('payments'),
  page: z.coerce.number().int().min(1).max(1_000_000).default(1),
  pageSize: z.coerce.number().int().min(1).max(100).default(25),
  search: z.string().trim().max(120).default(''),
  status: z.string().max(40).default(''),
  channel: z.enum(['', 'online', 'offline', 'credit']).default(''),
});

const definitions = {
  payments: {
    collection: 'feePayments',
    fields: [
      'studentId',
      'studentName',
      'receiptNumber',
      'razorpayPaymentId',
      'razorpayOrderId',
      'paymentReference',
    ],
    statuses: ['', 'paid', 'created', 'failed', 'refunded'],
  },
  credits: {
    collection: 'feeCredits',
    fields: ['studentId', 'studentName', 'sourceReceiptNumber'],
    statuses: ['', 'available', 'consumed', 'refunded'],
  },
  discounts: {
    collection: 'studentDiscounts',
    fields: ['studentId', 'studentName', 'name', 'targetPeriodLabel', 'internalRemark'],
    statuses: ['', 'active', 'removed'],
  },
};

export async function readFinanceDirectory(database, rawQuery) {
  const query = financeDirectoryQuery.parse(rawQuery);
  const definition = definitions[query.section];
  const filter = {};
  if (query.status) {
    // Validate against the actual domain rather than accepting arbitrary JSON operators.
    z.enum(definition.statuses).parse(query.status);
    filter.status = query.status;
  }
  if (query.search) {
    const match = { $regex: query.search.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), $options: 'i' };
    filter.$or = definition.fields.map((field) => ({ [field]: match }));
  }
  if (query.section === 'payments' && query.channel) {
    if (query.channel === 'online')
      filter.$and = [
        { $or: [{ paymentChannel: 'online' }, { paymentChannel: { $exists: false } }] },
      ];
    else filter.paymentChannel = query.channel;
  }
  return database.collection(definition.collection).readPage(filter, query);
}

export async function readFinanceSummary(database) {
  const [paid, pendingPayments, available] = await Promise.all([
    database.collection('feePayments').numericSummary('amount', { status: 'paid' }),
    database.collection('feePayments').countDocuments({ status: 'created' }),
    database.collection('feeCredits').numericSummary('remainingAmount', { status: 'available' }),
  ]);
  return {
    successfulPayments: paid.count,
    collectedAmount: paid.total,
    pendingPayments,
    availableCredit: available.total,
  };
}
