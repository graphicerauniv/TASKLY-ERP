import crypto from 'node:crypto';
import { URL } from 'node:url';
import { ObjectId } from 'bson';
import pg from 'pg';

const DOMAIN_TABLES = Object.freeze({
  admins: { table: 'admins', columns: ['email', 'name', 'role', 'isActive'] },
  admissions: {
    table: 'admissions',
    columns: [
      'studentId',
      'studentName',
      'status',
      'academicSession',
      'currentAcademicYear',
      'currentSemester',
      'feeFrequency',
      'courseId',
      'courseName',
      'departmentName',
      'collegeName',
      'domicileName',
      'studentTypeName',
      'isActive',
    ],
  },
  courseFeeDrafts: {
    table: 'course_fee_drafts',
    columns: ['bookId', 'bookCode', 'courseId', 'courseName', 'academicSession', 'status'],
  },
  courseFees: {
    table: 'course_fees',
    columns: [
      'bookId',
      'bookCode',
      'courseId',
      'courseName',
      'academicYear',
      'semester',
      'feeHeadId',
      'feeHeadName',
      'domicileName',
      'studentTypeName',
      'amount',
      'source',
      'sourceSheet',
    ],
  },
  feeBooks: {
    table: 'fee_books',
    columns: ['code', 'collegeId', 'collegeName', 'academicSession', 'frequency', 'isActive'],
  },
  feeHeads: {
    table: 'fee_heads',
    columns: [
      'bookId',
      'bookCode',
      'name',
      'category',
      'priority',
      'divideSemesterWise',
      'isActive',
    ],
  },
  feeImportPreviews: { table: 'fee_import_previews', columns: ['status', 'sourceFile'] },
  feePayments: {
    table: 'fee_payments',
    columns: [
      'receiptNumber',
      'studentAdmissionId',
      'studentId',
      'studentName',
      'razorpayOrderId',
      'razorpayPaymentId',
      'amount',
      'status',
    ],
  },
  forms: { table: 'forms', columns: ['name', 'slug', 'status', 'version', 'isActive'] },
  hostelAllocations: {
    table: 'hostel_allocations',
    columns: [
      'studentAdmissionId',
      'studentId',
      'studentName',
      'academicSession',
      'hostelId',
      'hostelName',
      'roomId',
      'roomNumber',
      'status',
    ],
  },
  hostelBlocks: { table: 'hostel_blocks', columns: ['hostelId', 'hostelName', 'name'] },
  hostelFees: {
    table: 'hostel_fees',
    columns: [
      'bookId',
      'bookCode',
      'hostelId',
      'hostelName',
      'feeHeadId',
      'feeHeadName',
      'seater',
      'roomType',
      'amount',
    ],
  },
  hostelFloors: { table: 'hostel_floors', columns: ['hostelId', 'name', 'sortOrder'] },
  hostelRoomConfigurations: {
    table: 'hostel_room_configurations',
    columns: ['hostelId', 'roomId', 'academicSession', 'roomType', 'capacity'],
  },
  hostelRooms: {
    table: 'hostel_rooms',
    columns: [
      'hostelId',
      'hostelName',
      'blockId',
      'blockName',
      'floorId',
      'floorName',
      'roomNumber',
      'roomType',
      'seater',
      'capacity',
      'isActive',
    ],
  },
  hostels: { table: 'hostels', columns: ['code', 'name', 'type', 'structureMode', 'isActive'] },
  masterTypes: {
    table: 'master_types',
    columns: ['slug', 'name', 'parentTypeSlug', 'isActive'],
  },
  masterValues: {
    table: 'master_values',
    columns: ['typeSlug', 'code', 'name', 'parentId', 'isActive'],
  },
  studentFeeLedgers: {
    table: 'student_fee_ledgers',
    columns: [
      'studentAdmissionId',
      'studentId',
      'studentName',
      'kind',
      'academicSession',
      'currentAcademicYear',
      'currentSemester',
      'feeFrequency',
      'periodKey',
      'periodLabel',
      'feeBookId',
      'feeBookCode',
      'totalAmount',
      'paidAmount',
      'balanceAmount',
      'status',
      'paymentStatus',
      'penaltyAmount',
    ],
  },
});

async function createRuntimeMigrationsTable(pool) {
  await pool.query(`
    create table if not exists erp_runtime_migrations (
      name text primary key,
      applied_at timestamptz not null default now()
    )
  `);
}

async function createDomainTables(pool) {
  const client = await pool.connect();
  try {
    await client.query('begin');
    for (const definition of Object.values(DOMAIN_TABLES)) {
      await client.query(`
        create table if not exists ${definition.table} (
          id text primary key,
          document jsonb not null,
          migrated_at timestamptz,
          updated_at timestamptz not null default now()
        )
      `);
      for (const field of definition.columns) {
        const column = snakeCase(field);
        await client.query(`
          alter table ${definition.table}
          add column if not exists ${column} text
          generated always as (document ->> ${quoteLiteral(field)}) stored
        `);
      }
      await client.query(`
        create index if not exists ${definition.table}_document_idx
        on ${definition.table} using gin (document jsonb_path_ops)
      `);
      await client.query(`
        create index if not exists ${definition.table}_updated_at_idx
        on ${definition.table} (updated_at desc)
      `);
    }
    await client.query('commit');
  } catch (error) {
    await client.query('rollback');
    throw error;
  } finally {
    client.release();
  }
}

function tableForCollection(name) {
  const definition = DOMAIN_TABLES[name];
  if (!definition) throw new Error(`Unknown PostgreSQL collection: ${name}`);
  return definition.table;
}

function snakeCase(value) {
  return String(value)
    .replace(/([a-z0-9])([A-Z])/g, '$1_$2')
    .toLocaleLowerCase()
    .replace(/[^a-z0-9_]/g, '');
}

export class PostgresDocumentDatabase {
  constructor(connectionString) {
    this.pool = new pg.Pool({
      connectionString: secureConnectionString(connectionString),
      max: 15,
      idleTimeoutMillis: 30_000,
    });
  }

  async connect() {
    await createRuntimeMigrationsTable(this.pool);
    return this;
  }

  async hasRuntimeMigration(name) {
    const result = await this.pool.query(
      'select 1 from erp_runtime_migrations where name = $1 limit 1',
      [name],
    );
    return result.rowCount > 0;
  }

  async prepareSchema(name) {
    if (await this.hasRuntimeMigration(name)) return false;
    await createDomainTables(this.pool);
    return true;
  }

  async markRuntimeMigration(name) {
    await this.pool.query(
      `insert into erp_runtime_migrations (name)
       values ($1)
       on conflict (name) do nothing`,
      [name],
    );
  }

  collection(name) {
    tableForCollection(name);
    return new PostgresCollection(this.pool, name);
  }

  async close() {
    await this.pool.end();
  }
}

class PostgresCollection {
  constructor(pool, name) {
    this.pool = pool;
    this.name = name;
    this.table = tableForCollection(name);
  }

  find(filter = {}) {
    return new PostgresCursor(this.pool, this.name, filter);
  }

  async findOne(filter = {}, options = {}) {
    const cursor = this.find(filter);
    if (options.sort) cursor.sort(options.sort);
    if (options.projection) cursor.project(options.projection);
    return cursor.next();
  }

  async insertOne(document) {
    const value = normalizeDocument(document);
    value._id ||= new ObjectId().toHexString();
    try {
      await this.pool.query(
        `insert into ${this.table} (id, document, updated_at)
         values ($1, $2::jsonb, now())`,
        [String(value._id), JSON.stringify(value)],
      );
    } catch (error) {
      throw mongoStyleError(error);
    }
    return { acknowledged: true, insertedId: hydrateId(value._id) };
  }

  async insertMany(documents) {
    const client = await this.pool.connect();
    const insertedIds = {};
    try {
      await client.query('begin');
      for (const [index, document] of documents.entries()) {
        const value = normalizeDocument(document);
        value._id ||= new ObjectId().toHexString();
        await client.query(
          `insert into ${this.table} (id, document, updated_at)
           values ($1, $2::jsonb, now())`,
          [String(value._id), JSON.stringify(value)],
        );
        insertedIds[index] = hydrateId(value._id);
      }
      await client.query('commit');
      return { acknowledged: true, insertedCount: documents.length, insertedIds };
    } catch (error) {
      await client.query('rollback');
      throw mongoStyleError(error);
    } finally {
      client.release();
    }
  }

  updateOne(filter, update, options = {}) {
    return this.#update(filter, update, { ...options, many: false, returnDocument: false });
  }

  updateMany(filter, update, options = {}) {
    return this.#update(filter, update, { ...options, many: true, returnDocument: false });
  }

  findOneAndUpdate(filter, update, options = {}) {
    return this.#update(filter, update, { ...options, many: false, returnDocument: true });
  }

  async #update(filter, update, options) {
    const client = await this.pool.connect();
    try {
      await client.query('begin');
      let documents = await selectDocuments(client, this.name, filter, true);
      if (options.sort) documents = sortDocuments(documents, options.sort);
      if (!options.many) documents = documents.slice(0, 1);
      let upsertedId = null;
      if (!documents.length && options.upsert) {
        const seed = equalitySeed(filter);
        seed._id ||= new ObjectId().toHexString();
        documents = [seed];
        upsertedId = hydrateId(seed._id);
      }
      const updated = [];
      for (const original of documents) {
        const next = applyUpdate(original, update, Boolean(upsertedId));
        await client.query(
          `insert into ${this.table} (id, document, updated_at)
           values ($1, $2::jsonb, now())
           on conflict (id)
           do update set document = excluded.document, updated_at = now()`,
          [String(next._id), JSON.stringify(normalizeDocument(next))],
        );
        updated.push(next);
      }
      await client.query('commit');
      if (options.returnDocument)
        return updated.length ? applyProjection(updated[0], options.projection) : null;
      return {
        acknowledged: true,
        matchedCount: upsertedId ? 0 : documents.length,
        modifiedCount: documents.length,
        upsertedCount: upsertedId ? 1 : 0,
        upsertedId,
      };
    } catch (error) {
      await client.query('rollback');
      throw mongoStyleError(error);
    } finally {
      client.release();
    }
  }

  deleteOne(filter) {
    return this.#delete(filter, false);
  }

  deleteMany(filter) {
    return this.#delete(filter, true);
  }

  async #delete(filter, many) {
    const client = await this.pool.connect();
    try {
      await client.query('begin');
      const documents = await selectDocuments(client, this.name, filter, true);
      const targets = many ? documents : documents.slice(0, 1);
      for (const document of targets)
        await client.query(`delete from ${this.table} where id = $1`, [String(document._id)]);
      await client.query('commit');
      return { acknowledged: true, deletedCount: targets.length };
    } catch (error) {
      await client.query('rollback');
      throw error;
    } finally {
      client.release();
    }
  }

  async countDocuments(filter = {}) {
    const parameters = [];
    const where = compileFilter(filter, parameters);
    const result = await this.pool.query(
      `select count(*)::integer as count from ${this.table}${where ? ` where ${where}` : ''}`,
      parameters,
    );
    return result.rows[0].count;
  }

  async distinct(field, filter = {}) {
    const documents = await selectDocuments(this.pool, this.name, filter);
    return [
      ...new Map(
        documents.map((item) => [stableValue(getPath(item, field)), getPath(item, field)]),
      ).values(),
    ].filter((value) => value !== undefined);
  }

  aggregate(pipeline = []) {
    return new AggregateCursor(this.pool, this.name, pipeline);
  }

  async bulkWrite(operations) {
    for (const operation of operations) {
      if (operation.updateOne)
        await this.updateOne(
          operation.updateOne.filter,
          operation.updateOne.update,
          operation.updateOne,
        );
    }
    return { acknowledged: true };
  }

  async createIndex(key, options = {}) {
    if (options.expireAfterSeconds !== undefined) return 'ttl_managed_by_query';
    const digest = crypto
      .createHash('sha1')
      .update(
        `${this.name}:${JSON.stringify(key)}:${JSON.stringify(options.partialFilterExpression || {})}`,
      )
      .digest('hex')
      .slice(0, 12);
    const indexName = `erp_${safeName(this.name)}_${digest}`;
    const expressions = Object.keys(key).map((field) => `(document #>> '{${pathSql(field)}}')`);
    const partial = options.partialFilterExpression
      ? ` and ${compileLiteralFilter(options.partialFilterExpression)}`
      : '';
    const unique = options.unique ? 'unique ' : '';
    try {
      await this.pool.query(
        `create ${unique}index if not exists ${indexName}
         on ${this.table} (${expressions.join(', ')})${partial ? ` where true${partial}` : ''}`,
      );
    } catch (error) {
      throw mongoStyleError(error);
    }
    return indexName;
  }

  async indexes() {
    const result = await this.pool.query(
      `select indexname as name from pg_indexes where schemaname = 'public' and tablename = $1`,
      [this.table],
    );
    return result.rows;
  }

  async dropIndex(name) {
    if (!/^erp_[a-z0-9_]+$/.test(name)) throw new Error('Invalid index name.');
    await this.pool.query(`drop index if exists ${name}`);
  }
}

class PostgresCursor {
  constructor(pool, collectionName, filter) {
    this.pool = pool;
    this.collectionName = collectionName;
    this.filter = filter;
    this.sortSpec = null;
    this.projection = null;
    this.skipCount = 0;
    this.limitCount = null;
  }
  sort(value) {
    this.sortSpec = value;
    return this;
  }
  project(value) {
    this.projection = value;
    return this;
  }
  skip(value) {
    this.skipCount = Number(value) || 0;
    return this;
  }
  limit(value) {
    this.limitCount = Number(value);
    return this;
  }
  async toArray() {
    let documents = await selectDocuments(this.pool, this.collectionName, this.filter);
    if (this.sortSpec) documents = sortDocuments(documents, this.sortSpec);
    if (this.skipCount) documents = documents.slice(this.skipCount);
    if (this.limitCount != null && this.limitCount > 0)
      documents = documents.slice(0, this.limitCount);
    return documents.map((item) => applyProjection(item, this.projection));
  }
  async next() {
    return (await this.limit(1).toArray())[0] || null;
  }
}

class AggregateCursor {
  constructor(pool, collectionName, pipeline) {
    this.pool = pool;
    this.collectionName = collectionName;
    this.pipeline = pipeline;
  }
  async toArray() {
    let documents = await selectDocuments(this.pool, this.collectionName, {});
    for (const stage of this.pipeline) {
      if (stage.$match) documents = documents.filter((item) => matchesFilter(item, stage.$match));
      if (stage.$group) {
        const groups = new Map();
        for (const item of documents) {
          const groupId = expressionValue(item, stage.$group._id);
          const key = stableValue(groupId);
          const target = groups.get(key) || { _id: groupId };
          for (const [field, expression] of Object.entries(stage.$group)) {
            if (field === '_id' || !expression.$sum) continue;
            target[field] =
              Number(target[field] || 0) + Number(expressionValue(item, expression.$sum) || 0);
          }
          groups.set(key, target);
        }
        documents = [...groups.values()];
      }
    }
    return documents;
  }
}

async function selectDocuments(client, collectionName, filter, forUpdate = false) {
  const table = tableForCollection(collectionName);
  const parameters = [];
  const where = compileFilter(filter, parameters);
  const result = await client.query(
    `select document from ${table}${where ? ` where ${where}` : ''}${forUpdate ? ' for update' : ''}`,
    parameters,
  );
  return result.rows.map((row) => hydrateDocument(row.document));
}

function compileFilter(filter, parameters, alias = 'document') {
  const clauses = [];
  for (const [field, condition] of Object.entries(filter || {})) {
    if (field === '$or') {
      const nested = condition
        .map((item) => compileFilter(item, parameters, alias))
        .filter(Boolean);
      if (nested.length) clauses.push(`(${nested.join(' or ')})`);
      continue;
    }
    const jsonExpression = `${alias} #> '{${pathSql(field)}}'`;
    const textExpression = `${alias} #>> '{${pathSql(field)}}'`;
    if (plainObject(condition) && Object.keys(condition).some((key) => key.startsWith('$'))) {
      if (condition.$regex !== undefined) {
        parameters.push(String(condition.$regex));
        clauses.push(
          `${textExpression} ~${String(condition.$options || '').includes('i') ? '*' : ''} $${parameters.length}`,
        );
      }
      if (condition.$in) {
        const values = condition.$in.map((value) => {
          parameters.push(JSON.stringify(normalizeValue(value)));
          return `${jsonExpression} = $${parameters.length}::jsonb`;
        });
        clauses.push(values.length ? `(${values.join(' or ')})` : 'false');
      }
      if (condition.$ne !== undefined) {
        parameters.push(JSON.stringify(normalizeValue(condition.$ne)));
        clauses.push(`${jsonExpression} is distinct from $${parameters.length}::jsonb`);
      }
      if (condition.$exists !== undefined)
        clauses.push(`${jsonExpression} is ${condition.$exists ? 'not ' : ''}null`);
      for (const [operator, symbol] of [
        ['$gt', '>'],
        ['$gte', '>='],
        ['$lt', '<'],
        ['$lte', '<='],
      ]) {
        if (condition[operator] !== undefined) {
          parameters.push(textComparable(condition[operator]));
          clauses.push(`${textExpression} ${symbol} $${parameters.length}`);
        }
      }
      continue;
    }
    parameters.push(JSON.stringify(normalizeValue(condition)));
    clauses.push(`${jsonExpression} = $${parameters.length}::jsonb`);
  }
  return clauses.join(' and ');
}

function compileLiteralFilter(filter) {
  return Object.entries(filter)
    .map(
      ([field, value]) =>
        `(document #> '{${pathSql(field)}}') = ${quoteLiteral(JSON.stringify(normalizeValue(value)))}::jsonb`,
    )
    .join(' and ');
}

function applyUpdate(document, update, inserting) {
  const next = structuredClone(normalizeDocument(document));
  if (inserting && update.$setOnInsert)
    for (const [path, value] of Object.entries(update.$setOnInsert))
      setPath(next, path, normalizeValue(value));
  if (update.$set)
    for (const [path, value] of Object.entries(update.$set))
      setPath(next, path, normalizeValue(value));
  if (update.$unset) for (const path of Object.keys(update.$unset)) unsetPath(next, path);
  if (update.$inc)
    for (const [path, value] of Object.entries(update.$inc))
      setPath(next, path, Number(getPath(next, path) || 0) + Number(value));
  if (update.$push)
    for (const [path, value] of Object.entries(update.$push)) {
      const current = Array.isArray(getPath(next, path)) ? [...getPath(next, path)] : [];
      if (plainObject(value) && value.$each) {
        current.push(...value.$each.map(normalizeValue));
        if (value.$slice != null) {
          const sliced =
            Number(value.$slice) < 0
              ? current.slice(Number(value.$slice))
              : current.slice(0, Number(value.$slice));
          setPath(next, path, sliced);
        } else setPath(next, path, current);
      } else {
        current.push(normalizeValue(value));
        setPath(next, path, current);
      }
    }
  return hydrateDocument(next);
}

function equalitySeed(filter) {
  const output = {};
  for (const [field, value] of Object.entries(filter || {}))
    if (
      !field.startsWith('$') &&
      !(plainObject(value) && Object.keys(value).some((key) => key.startsWith('$')))
    )
      setPath(output, field, normalizeValue(value));
  return output;
}

function matchesFilter(document, filter) {
  return Object.entries(filter || {}).every(([field, expected]) => {
    if (field === '$or') return expected.some((item) => matchesFilter(document, item));
    const actual = getPath(document, field);
    if (plainObject(expected) && Object.keys(expected).some((key) => key.startsWith('$'))) {
      if (expected.$in && !expected.$in.some((item) => valuesEqual(actual, item))) return false;
      if (expected.$ne !== undefined && valuesEqual(actual, expected.$ne)) return false;
      if (expected.$exists !== undefined && (actual !== undefined) !== expected.$exists)
        return false;
      if (
        expected.$regex !== undefined &&
        !new RegExp(expected.$regex, expected.$options || '').test(String(actual || ''))
      )
        return false;
      return true;
    }
    return valuesEqual(actual, expected);
  });
}

function sortDocuments(documents, sort) {
  return [...documents].sort((left, right) => {
    for (const [field, direction] of Object.entries(sort)) {
      const a = getPath(left, field),
        b = getPath(right, field);
      if (valuesEqual(a, b)) continue;
      if (a == null) return direction > 0 ? -1 : 1;
      if (b == null) return direction > 0 ? 1 : -1;
      const comparison =
        typeof a === 'number' && typeof b === 'number'
          ? a - b
          : String(a).localeCompare(String(b), undefined, { numeric: true, sensitivity: 'base' });
      return comparison * Math.sign(direction);
    }
    return 0;
  });
}

function applyProjection(document, projection) {
  if (!projection) return document;
  const included = Object.entries(projection)
    .filter(([, value]) => value === 1)
    .map(([key]) => key);
  if (included.length) {
    const result = {};
    if (projection._id !== 0 && document._id !== undefined) result._id = document._id;
    for (const field of included)
      if (getPath(document, field) !== undefined) setPath(result, field, getPath(document, field));
    return result;
  }
  const result = structuredClone(normalizeDocument(document));
  for (const [field, value] of Object.entries(projection))
    if (value === 0) unsetPath(result, field);
  return hydrateDocument(result);
}

function normalizeDocument(document) {
  return normalizeValue(document);
}
function normalizeValue(value) {
  if (value instanceof ObjectId) return value.toHexString();
  if (value instanceof Date) return value.toISOString();
  if (Array.isArray(value)) return value.map(normalizeValue);
  if (value && typeof value === 'object') {
    const output = {};
    for (const [key, item] of Object.entries(value))
      if (item !== undefined) output[key] = normalizeValue(item);
    return output;
  }
  return value;
}

function hydrateDocument(value, key = '') {
  if (Array.isArray(value))
    return value.map((item) => hydrateDocument(item, key.replace(/Ids$/, 'Id')));
  if (value && typeof value === 'object') {
    const output = {};
    for (const [childKey, item] of Object.entries(value))
      output[childKey] = hydrateDocument(item, childKey);
    return output;
  }
  if (typeof value === 'string' && (key === '_id' || /Id$/.test(key)) && ObjectId.isValid(value))
    return new ObjectId(value);
  return value;
}

function hydrateId(value) {
  return ObjectId.isValid(value) ? new ObjectId(value) : value;
}
function getPath(object, path) {
  return String(path)
    .split('.')
    .reduce((value, key) => value?.[key], object);
}
function setPath(object, path, value) {
  const parts = String(path).split('.');
  let target = object;
  for (const part of parts.slice(0, -1)) target = target[part] ||= {};
  target[parts.at(-1)] = value;
}
function unsetPath(object, path) {
  const parts = String(path).split('.');
  const target = parts.slice(0, -1).reduce((value, key) => value?.[key], object);
  if (target) delete target[parts.at(-1)];
}
function expressionValue(document, expression) {
  if (typeof expression === 'string' && expression.startsWith('$'))
    return getPath(document, expression.slice(1));
  return expression;
}
function valuesEqual(left, right) {
  return stableValue(left) === stableValue(right);
}
function stableValue(value) {
  return JSON.stringify(normalizeValue(value));
}
function textComparable(value) {
  return value instanceof Date ? value.toISOString() : String(normalizeValue(value));
}
function plainObject(value) {
  return (
    value &&
    typeof value === 'object' &&
    !Array.isArray(value) &&
    !(value instanceof Date) &&
    !(value instanceof ObjectId)
  );
}
function pathSql(path) {
  return String(path)
    .split('.')
    .map((part) => part.replace(/[^a-zA-Z0-9_-]/g, ''))
    .join(',');
}
function safeName(value) {
  return String(value)
    .toLocaleLowerCase()
    .replace(/[^a-z0-9]+/g, '_')
    .slice(0, 24);
}
function quoteLiteral(value) {
  return `'${String(value).replaceAll("'", "''")}'`;
}
function mongoStyleError(error) {
  if (error?.code === '23505') {
    error.code = 11000;
    error.codeName = 'DuplicateKey';
  }
  return error;
}

function secureConnectionString(connectionString) {
  const url = new URL(connectionString);
  if (url.searchParams.get('sslmode') === 'require') url.searchParams.set('sslmode', 'verify-full');
  return url.toString();
}
