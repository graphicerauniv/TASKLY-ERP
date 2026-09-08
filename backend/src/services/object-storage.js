import { GetObjectCommand, PutObjectCommand, S3Client } from '@aws-sdk/client-s3';
import { Buffer } from 'node:buffer';
import fs from 'node:fs/promises';
import path from 'node:path';
import { config } from '../config.js';

let s3Client;

export async function storeObject({ key, body, contentType, bucket = '' }) {
  const targetBucket = bucket || config.storage.bucket;
  if (config.storage.driver === 'local') {
    const localKey = bucket ? `${bucket}/${key}` : key;
    const target = path.resolve(config.uploadDir, localKey);
    if (!target.startsWith(`${config.uploadDir}${path.sep}`))
      throw new Error('Invalid upload key.');
    await fs.mkdir(path.dirname(target), { recursive: true });
    await fs.writeFile(target, body);
    return { bucket: targetBucket || 'local', key, url: `/uploads/${localKey}` };
  }
  if (config.storage.driver !== 's3')
    throw Object.assign(new Error(`Unsupported storage driver: ${config.storage.driver}`), {
      status: 500,
    });
  if (!targetBucket)
    throw Object.assign(new Error('An S3 bucket is required for uploads.'), { status: 500 });
  await client().send(
    new PutObjectCommand({
      Bucket: targetBucket,
      Key: key,
      Body: body,
      ContentType: contentType,
    }),
  );
  const publicUrl = config.storage.publicUrl
    ? `${config.storage.publicUrl}/${key.split('/').map(encodeURIComponent).join('/')}`
    : '';
  return { bucket: targetBucket, key, url: publicUrl };
}

export async function readObject({ key, bucket = '' }) {
  const targetBucket = bucket || config.storage.bucket;
  if (config.storage.driver === 'local') {
    const localKey = bucket ? `${bucket}/${key}` : key;
    const target = path.resolve(config.uploadDir, localKey);
    if (!target.startsWith(`${config.uploadDir}${path.sep}`))
      throw new Error('Invalid upload key.');
    return fs.readFile(target);
  }
  if (config.storage.driver !== 's3')
    throw Object.assign(new Error(`Unsupported storage driver: ${config.storage.driver}`), {
      status: 500,
    });
  if (!targetBucket)
    throw Object.assign(new Error('An S3 bucket is required for downloads.'), { status: 500 });
  const result = await client().send(
    new GetObjectCommand({
      Bucket: targetBucket,
      Key: key,
    }),
  );
  if (!result.Body)
    throw Object.assign(new Error('The proof file is unavailable.'), { status: 404 });
  return Buffer.from(await result.Body.transformToByteArray());
}

function client() {
  if (s3Client) return s3Client;
  const options = {
    region: config.storage.region,
    forcePathStyle: config.storage.forcePathStyle,
  };
  if (config.storage.endpoint) options.endpoint = config.storage.endpoint;
  if (config.storage.accessKeyId && config.storage.secretAccessKey)
    options.credentials = {
      accessKeyId: config.storage.accessKeyId,
      secretAccessKey: config.storage.secretAccessKey,
    };
  s3Client = new S3Client(options);
  return s3Client;
}
