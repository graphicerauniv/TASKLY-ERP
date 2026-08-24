import { PutObjectCommand, S3Client } from '@aws-sdk/client-s3';
import fs from 'node:fs/promises';
import path from 'node:path';
import { config } from '../config.js';

let s3Client;

export async function storeObject({ key, body, contentType }) {
  if (config.storage.driver === 'local') {
    const target = path.resolve(config.uploadDir, key);
    if (!target.startsWith(`${config.uploadDir}${path.sep}`)) throw new Error('Invalid upload key.');
    await fs.mkdir(path.dirname(target), { recursive: true });
    await fs.writeFile(target, body);
    return { key, url: `/uploads/${key}` };
  }
  if (config.storage.driver !== 's3')
    throw Object.assign(new Error(`Unsupported storage driver: ${config.storage.driver}`), {
      status: 500,
    });
  if (!config.storage.bucket)
    throw Object.assign(new Error('S3_BUCKET is required for S3 uploads.'), { status: 500 });
  await client().send(
    new PutObjectCommand({
      Bucket: config.storage.bucket,
      Key: key,
      Body: body,
      ContentType: contentType,
    }),
  );
  const publicUrl = config.storage.publicUrl
    ? `${config.storage.publicUrl}/${key.split('/').map(encodeURIComponent).join('/')}`
    : '';
  return { key, url: publicUrl };
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
