import test from 'node:test';
import assert from 'node:assert/strict';
import { readFinanceDirectory, readFinanceSummary } from '../src/services/finance-directory.js';
import { PostgresDocumentDatabase } from '../src/postgres-document-db.js';

test('finance directory reads only the requested collection and passes bounded paging', async () => {
  let called;
  const database = {
    collection(name) {
      return {
        async readPage(filter, options) {
          called = { name, filter, options };
          return { items: [], pagination: { page: 3, pageSize: 25, total: 6200, totalPages: 248 } };
        },
      };
    },
  };
  const result = await readFinanceDirectory(database, {
    section: 'credits',
    page: '3',
    pageSize: '25',
    search: 'A.(B)',
    status: 'available',
  });
  assert.equal(called.name, 'feeCredits');
  assert.equal(called.options.page, 3);
  assert.equal(called.filter.status, 'available');
  assert.equal(called.filter.$or[0].studentId.$regex, 'A\\.\\(B\\)');
  assert.equal(result.pagination.total, 6200);
});

test('rejects invalid paging and cross-domain statuses before accessing the database', async () => {
  const database = {
    collection() {
      assert.fail('Database must not be called');
    },
  };
  for (const query of [
    { pageSize: 101 },
    { page: -1 },
    { page: 1.2 },
    { search: { $ne: '' } },
    { section: 'credits', status: 'paid' },
    { section: 'discounts', status: 'available' },
    { channel: 'unexpected' },
  ]) {
    await assert.rejects(readFinanceDirectory(database, query));
  }
});

test('uses domain statuses and includes legacy online payments in channel search', async () => {
  let filter;
  const database = {
    collection() {
      return {
        async readPage(value) {
          filter = value;
          return {};
        },
      };
    },
  };
  await readFinanceDirectory(database, { channel: 'online', status: 'created' });
  assert.equal(filter.status, 'created');
  assert.equal(filter.$and[0].$or[0].paymentChannel, 'online');
  await readFinanceDirectory(database, { section: 'discounts', status: 'removed' });
  assert.equal(filter.status, 'removed');
  await readFinanceDirectory(database, { section: 'credits', status: 'consumed' });
  assert.equal(filter.status, 'consumed');
});

test('summary uses database aggregates, not the visible directory page', async () => {
  const database = {
    collection(name) {
      return {
        async numericSummary(field, filter) {
          assert.ok(field === 'amount' || field === 'remainingAmount');
          assert.ok(filter.status === 'paid' || filter.status === 'available');
          return name === 'feePayments'
            ? { count: 12000, total: 8400000 }
            : { count: 19, total: 15000 };
        },
        async countDocuments(filter) {
          assert.equal(filter.status, 'created');
          return 200;
        },
      };
    },
  };
  assert.deepEqual(await readFinanceSummary(database), {
    successfulPayments: 12000,
    collectedAmount: 8400000,
    pendingPayments: 200,
    availableCredit: 15000,
  });
});

test('PostgreSQL readPage applies LIMIT/OFFSET in SQL and clamps stale last-page requests', async (t) => {
  const database = new PostgresDocumentDatabase('postgres://test:test@localhost/test');
  t.after(() => database.close());
  const queries = [];
  database.pool.query = async (sql, parameters) => {
    queries.push({ sql, parameters });
    if (sql.includes('count(*)')) return { rows: [{ count: 1001 }] };
    return { rows: [{ document: { _id: 'record-1', amount: 42 } }] };
  };
  const result = await database
    .collection('feePayments')
    .readPage({ status: 'paid' }, { page: 999, pageSize: 100 });
  assert.deepEqual(result.pagination, { page: 11, pageSize: 100, total: 1001, totalPages: 11 });
  assert.equal(result.items.length, 1);
  assert.match(queries[1].sql, /limit \$2 offset \$3/);
  assert.match(queries[1].sql, /id desc/);
  assert.deepEqual(queries[1].parameters.slice(-2), [100, 1000]);
  await assert.rejects(
    database.collection('feePayments').readPage({}, { page: 1, pageSize: 1000 }),
  );
});

test('PostgreSQL numeric summary aggregates safely without selecting documents', async (t) => {
  const database = new PostgresDocumentDatabase('postgres://test:test@localhost/test');
  t.after(() => database.close());
  database.pool.query = async (sql) => {
    assert.match(sql, /coalesce\(sum/);
    assert.doesNotMatch(sql, /select document/);
    return { rows: [{ count: 8000, total: '240500.25' }] };
  };
  assert.deepEqual(
    await database.collection('feePayments').numericSummary('amount', { status: 'paid' }),
    { count: 8000, total: 240500.25 },
  );
  await assert.rejects(
    database.collection('feePayments').numericSummary("amount');drop table fee_payments;--"),
  );
});
