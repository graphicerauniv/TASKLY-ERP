import { MongoClient, ObjectId } from 'mongodb';
import { config } from './config.js';

let client;
let database;

export async function connectDatabase() {
  client = new MongoClient(config.mongoUrl);
  await client.connect();
  database = client.db(config.mongoDbName);
  await ensureIndexes(database);
  return database;
}

export function db() {
  if (!database) throw new Error('Database has not been connected.');
  return database;
}

export async function closeDatabase() {
  await client?.close();
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
  await Promise.all([
    databaseInstance.collection('admins').createIndex({ email: 1 }, { unique: true }),
    databaseInstance.collection('masterTypes').createIndex({ slug: 1 }, { unique: true }),
    databaseInstance.collection('masterValues').createIndex({ typeSlug: 1, name: 1, parentId: 1 }),
    databaseInstance.collection('forms').createIndex({ slug: 1 }, { unique: true }),
    databaseInstance
      .collection('admissions')
      .createIndex({ applicationNumber: 1 }, { unique: true }),
    databaseInstance.collection('admissions').createIndex({ formId: 1, createdAt: -1 }),
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
    databaseInstance.collection('feeHeads').createIndex(
      { bookId: 1, normalizedName: 1 },
      { unique: true },
    ),
    databaseInstance.collection('hostelFees').createIndex(
      { bookId: 1, hostelId: 1, seater: 1, roomType: 1, feeHeadId: 1, frequency: 1 },
      { unique: true },
    ),
    databaseInstance.collection('courseFees').createIndex({ bookId: 1, courseId: 1 }),
    databaseInstance.collection('courseFees').createIndex({ bookId: 1, courseId: 1, domicileId: 1 }),
    databaseInstance.collection('courseFees').createIndex({ importPreviewId: 1 }),
    databaseInstance.collection('feeImportPreviews').createIndex({ expiresAt: 1 }, { expireAfterSeconds: 0 }),
  ]);
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
