import { ObjectId } from 'bson';
import { config } from './config.js';
import { PostgresDocumentDatabase } from './postgres-document-db.js';

let database;
const DATABASE_SCHEMA_VERSION = 'postgres-domain-schema-2026-08-27-v2';

export async function connectDatabase() {
  database = new PostgresDocumentDatabase(config.databaseUrl);
  await database.connect();
  if (await database.prepareSchema(DATABASE_SCHEMA_VERSION)) {
    await ensureIndexes(database);
    await database.markRuntimeMigration(DATABASE_SCHEMA_VERSION);
  }
  return database;
}

export function db() {
  if (!database) throw new Error('Database has not been connected.');
  return database;
}

export async function closeDatabase() {
  await database?.close();
  database = undefined;
}

export function id(value, field = 'id') {
  if (!ObjectId.isValid(value)) {
    const error = new Error(`Invalid ${field}.`);
    error.status = 400;
    throw error;
  }
  return new ObjectId(value);
}

export function serialize(document) {
  if (!document) return document;
  const walk = (item) => {
    if (item instanceof ObjectId) return item.toHexString();
    if (item instanceof Date) return item.toISOString();
    if (Array.isArray(item)) return item.map(walk);
    if (item && typeof item === 'object') {
      const output = {};
      for (const [key, value] of Object.entries(item)) output[key] = walk(value);
      return output;
    }
    return item;
  };
  return walk(document);
}

async function ensureIndexes(databaseInstance) {
  await migrateHostelFloors(databaseInstance);
  await migrateFeePeriods(databaseInstance);
  await removeLegacyApplicationNumberIndex(databaseInstance);
  await databaseInstance
    .collection('studentFeeLedgers')
    .dropIndex('erp_studentfeeledgers_a13db7a69b67');
  await Promise.all([
    databaseInstance.collection('admins').createIndex({ email: 1 }, { unique: true }),
    databaseInstance.collection('masterTypes').createIndex({ slug: 1 }, { unique: true }),
    databaseInstance.collection('masterValues').createIndex({ typeSlug: 1, name: 1, parentId: 1 }),
    databaseInstance.collection('forms').createIndex({ slug: 1 }, { unique: true }),
    databaseInstance.collection('admissions').createIndex({ formId: 1, createdAt: -1 }),
    databaseInstance
      .collection('admissions')
      .createIndex({ studentId: 1 }, { unique: true, sparse: true }),
    databaseInstance.collection('admissions').createIndex({ status: 1, updatedAt: -1 }),
    databaseInstance.collection('hostels').createIndex({ code: 1 }, { unique: true }),
    databaseInstance.collection('hostels').createIndex({ name: 1 }),
    databaseInstance
      .collection('hostelBlocks')
      .createIndex({ hostelId: 1, name: 1 }, { unique: true }),
    databaseInstance
      .collection('hostelFloors')
      .createIndex({ hostelId: 1, name: 1 }, { unique: true }),
    databaseInstance
      .collection('hostelRooms')
      .createIndex({ hostelId: 1, roomNumber: 1 }, { unique: true }),
    databaseInstance
      .collection('hostelRoomConfigurations')
      .createIndex({ roomId: 1, academicSession: 1 }, { unique: true }),
    databaseInstance
      .collection('hostelAllocations')
      .createIndex(
        { studentAdmissionId: 1, academicSession: 1 },
        { unique: true, partialFilterExpression: { status: 'active' } },
      ),
    databaseInstance
      .collection('hostelAllocations')
      .createIndex(
        { roomId: 1, bedNumber: 1, academicSession: 1 },
        { unique: true, partialFilterExpression: { status: 'active' } },
      ),
    databaseInstance.collection('feeBooks').createIndex({ code: 1 }, { unique: true }),
    databaseInstance
      .collection('feeHeads')
      .createIndex({ bookId: 1, normalizedName: 1 }, { unique: true }),
    databaseInstance
      .collection('hostelFees')
      .createIndex(
        { bookId: 1, hostelId: 1, seater: 1, roomType: 1, feeHeadId: 1, frequency: 1 },
        { unique: true },
      ),
    databaseInstance.collection('courseFees').createIndex({ bookId: 1, courseId: 1 }),
    databaseInstance
      .collection('courseFees')
      .createIndex({ bookId: 1, courseId: 1, domicileId: 1, studentTypeId: 1 }),
    databaseInstance.collection('courseFees').createIndex({ importPreviewId: 1 }),
    databaseInstance
      .collection('studentFeeLedgers')
      .createIndex(
        { studentAdmissionId: 1, feeBookId: 1, kind: 1, periodKey: 1 },
        { unique: true, partialFilterExpression: { status: 'active' } },
      ),
    databaseInstance
      .collection('studentFeeLedgers')
      .createIndex({ studentAdmissionId: 1, status: 1, kind: 1 }),
    databaseInstance
      .collection('feeImportPreviews')
      .createIndex({ expiresAt: 1 }, { expireAfterSeconds: 0 }),
    databaseInstance
      .collection('feePayments')
      .createIndex({ razorpayOrderId: 1 }, { unique: true }),
    databaseInstance
      .collection('feePayments')
      .createIndex({ razorpayPaymentId: 1 }, { unique: true, sparse: true }),
    databaseInstance
      .collection('feePayments')
      .createIndex({ receiptNumber: 1 }, { unique: true, sparse: true }),
    databaseInstance
      .collection('feePayments')
      .createIndex({ studentAdmissionId: 1, createdAt: -1 }),
  ]);
}

async function migrateFeePeriods(databaseInstance) {
  const courses = await databaseInstance
    .collection('masterValues')
    .find({ typeSlug: 'course', 'metadata.defaultAcademicYear': { $exists: false } })
    .toArray();
  await Promise.all(
    courses.map((course) =>
      databaseInstance
        .collection('masterValues')
        .updateOne({ _id: course._id }, { $set: { 'metadata.defaultAcademicYear': 1 } }),
    ),
  );
  const admissions = await databaseInstance
    .collection('admissions')
    .find({
      $or: [
        { feeFrequency: { $exists: false } },
        { currentAcademicYear: { $exists: false } },
        { currentSemester: { $exists: false } },
      ],
    })
    .toArray();
  await Promise.all(
    admissions.map((admission) => {
      const currentAcademicYear = Number(admission.currentAcademicYear || 1);
      return databaseInstance.collection('admissions').updateOne(
        { _id: admission._id },
        {
          $set: {
            feeFrequency: admission.feeFrequency === 'semester' ? 'semester' : 'year',
            currentAcademicYear,
            currentSemester: Number(admission.currentSemester || currentAcademicYear * 2 - 1),
          },
        },
      );
    }),
  );
  const ledgers = await databaseInstance
    .collection('studentFeeLedgers')
    .find({
      $or: [
        { feeFrequency: { $exists: false } },
        { periodKey: { $exists: false } },
        { paymentStatus: { $exists: false } },
      ],
    })
    .toArray();
  await Promise.all(
    ledgers.map((ledger) => {
      const feeFrequency = ledger.feeFrequency === 'semester' ? 'semester' : 'year';
      const currentAcademicYear = Number(ledger.currentAcademicYear || 1);
      const currentSemester = Number(ledger.currentSemester || currentAcademicYear * 2 - 1);
      const periodKey =
        ledger.periodKey ||
        (ledger.kind === 'hostel'
          ? `session:${ledger.academicSession}`
          : feeFrequency === 'semester'
            ? `semester:${currentSemester}`
            : `year:${currentAcademicYear}`);
      const entries = (ledger.entries || []).map((entry) => ({
        ...entry,
        paidAmount: Number(entry.paidAmount || 0),
        balanceAmount: Number(
          entry.balanceAmount ?? Number(entry.amount || 0) - Number(entry.paidAmount || 0),
        ),
      }));
      return databaseInstance.collection('studentFeeLedgers').updateOne(
        { _id: ledger._id },
        {
          $set: {
            feeFrequency,
            currentAcademicYear,
            currentSemester: ledger.kind === 'academic' ? currentSemester : null,
            periodKey,
            periodLabel:
              ledger.periodLabel ||
              (ledger.kind === 'hostel'
                ? 'Current session'
                : feeFrequency === 'semester'
                  ? `Semester ${currentSemester}`
                  : `Year ${currentAcademicYear}`),
            entries,
            paymentStatus: Number(ledger.balanceAmount || 0) > 0 ? 'due' : 'paid',
          },
        },
      );
    }),
  );
}

async function removeLegacyApplicationNumberIndex(databaseInstance) {
  let indexes = [];
  try {
    indexes = await databaseInstance.collection('admissions').indexes();
  } catch (error) {
    if (error.codeName !== 'NamespaceNotFound') throw error;
  }
  const index = indexes.find((candidate) => candidate.key?.applicationNumber === 1);
  if (index) await databaseInstance.collection('admissions').dropIndex(index.name);
}

async function migrateHostelFloors(databaseInstance) {
  const floors = await databaseInstance.collection('hostelFloors').find({}).toArray();
  const grouped = new Map();
  for (const floor of floors) {
    const key = `${String(floor.hostelId)}::${String(floor.name).trim().toLocaleLowerCase()}`;
    grouped.set(key, [...(grouped.get(key) || []), floor]);
  }
  for (const matches of grouped.values()) {
    const [canonical, ...duplicates] = matches;
    await databaseInstance
      .collection('hostelFloors')
      .updateOne({ _id: canonical._id }, { $unset: { blockId: '', blockName: '' } });
    if (!duplicates.length) continue;
    const duplicateIds = duplicates.map((floor) => floor._id);
    await Promise.all([
      databaseInstance
        .collection('hostelRooms')
        .updateMany({ floorId: { $in: duplicateIds } }, { $set: { floorId: canonical._id } }),
      databaseInstance
        .collection('hostelAllocations')
        .updateMany({ floorId: { $in: duplicateIds } }, { $set: { floorId: canonical._id } }),
      databaseInstance.collection('hostelFloors').deleteMany({ _id: { $in: duplicateIds } }),
    ]);
  }
  let indexes = [];
  try {
    indexes = await databaseInstance.collection('hostelFloors').indexes();
  } catch (error) {
    if (error.codeName !== 'NamespaceNotFound') throw error;
  }
  const oldIndex = indexes.find(
    (index) => index.key?.blockId === 1 && index.key?.name === 1 && !index.key?.hostelId,
  );
  if (oldIndex) await databaseInstance.collection('hostelFloors').dropIndex(oldIndex.name);
}
