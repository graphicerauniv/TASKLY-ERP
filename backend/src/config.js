import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { config as loadEnvironment } from 'dotenv';

const backendRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
loadEnvironment({ path: path.join(backendRoot, '.env'), quiet: true });

const integer = (value, fallback) => Number.parseInt(value ?? '', 10) || fallback;
const boolean = (value, fallback = false) =>
  value == null || value === '' ? fallback : String(value).toLowerCase() === 'true';

export const config = Object.freeze({
  nodeEnv: process.env.NODE_ENV || 'development',
  port: integer(process.env.PORT, 3000),
  apiPrefix: process.env.API_PREFIX || '/api/v1',
  appName: process.env.APP_NAME || 'Taskly ERP',
  databaseUrl: process.env.DATABASE_URL || '',
  razorpay: {
    keyId: process.env.RAZORPAY_KEY_ID || '',
    keySecret: process.env.RAZORPAY_KEY_SECRET || '',
    webhookSecret: process.env.RAZORPAY_WEBHOOK_SECRET || '',
  },
  jwtSecret: process.env.JWT_ACCESS_SECRET || '',
  jwtTtl: process.env.JWT_ACCESS_TTL || '8h',
  jwtRefreshTtl: process.env.JWT_REFRESH_TTL || '365d',
  corsOrigins: (process.env.CORS_ORIGINS || 'http://localhost:4200')
    .split(',')
    .map((v) => v.trim())
    .filter(Boolean),
  uploadDir: path.resolve(backendRoot, process.env.UPLOAD_DIR || 'uploads'),
  maxUploadBytes: integer(process.env.MAX_UPLOAD_MB, 5) * 1024 * 1024,
  maxUploadMb: integer(process.env.MAX_UPLOAD_MB, 5),
  storage: {
    driver: process.env.STORAGE_DRIVER || 'local',
    bucket: process.env.S3_BUCKET || '',
    region: process.env.S3_REGION || 'us-east-1',
    endpoint: process.env.S3_ENDPOINT || '',
    accessKeyId: process.env.S3_ACCESS_KEY_ID || '',
    secretAccessKey: process.env.S3_SECRET_ACCESS_KEY || '',
    forcePathStyle: boolean(process.env.S3_FORCE_PATH_STYLE),
    publicUrl: String(process.env.S3_PUBLIC_URL || '').replace(/\/$/, ''),
  },
  bootstrapAdmin: {
    email: process.env.SUPER_ADMIN_EMAIL?.trim().toLowerCase(),
    password: process.env.SUPER_ADMIN_PASSWORD,
    name: process.env.SUPER_ADMIN_NAME || 'Super Admin',
  },
});

export function validateConfig() {
  if (!/^postgres(?:ql)?:\/\//i.test(config.databaseUrl))
    throw new Error('DATABASE_URL must contain a valid PostgreSQL connection string.');
  if (config.jwtSecret.length < 32)
    throw new Error('JWT_ACCESS_SECRET must contain at least 32 characters.');
  if (Boolean(config.razorpay.keyId) !== Boolean(config.razorpay.keySecret))
    throw new Error('RAZORPAY_KEY_ID and RAZORPAY_KEY_SECRET must be configured together.');
  if (!['local', 's3'].includes(config.storage.driver))
    throw new Error('STORAGE_DRIVER must be either local or s3.');
  if (config.storage.driver === 's3' && !config.storage.bucket)
    throw new Error('S3_BUCKET is required when STORAGE_DRIVER=s3.');
  if (
    config.storage.driver === 's3' &&
    config.storage.endpoint &&
    (!config.storage.accessKeyId || !config.storage.secretAccessKey)
  )
    throw new Error(
      'S3_ACCESS_KEY_ID and S3_SECRET_ACCESS_KEY are required for an S3-compatible endpoint.',
    );
}
