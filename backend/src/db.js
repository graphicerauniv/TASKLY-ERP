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
  await Promise.all([
    databaseInstance.collection('admins').createIndex({ email: 1 }, { unique: true }),
    databaseInstance.collection('masterTypes').createIndex({ slug: 1 }, { unique: true }),
    databaseInstance.collection('masterValues').createIndex({ typeSlug: 1, name: 1, parentId: 1 }),
    databaseInstance.collection('forms').createIndex({ slug: 1 }, { unique: true }),
    databaseInstance
      .collection('admissions')
      .createIndex({ applicationNumber: 1 }, { unique: true }),
    databaseInstance.collection('admissions').createIndex({ formId: 1, createdAt: -1 }),
  ]);
}
