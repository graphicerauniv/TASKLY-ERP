import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { config as loadEnvironment } from 'dotenv';

const backendRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
loadEnvironment({ path: path.join(backendRoot, '.env'), quiet: true });

const integer = (value, fallback) => Number.parseInt(value ?? '', 10) || fallback;

export const config = Object.freeze({
  nodeEnv: process.env.NODE_ENV || 'development',
  port: integer(process.env.PORT, 3000),
  apiPrefix: process.env.API_PREFIX || '/api/v1',
  appName: process.env.APP_NAME || 'Taskly ERP',
  mongoUrl: process.env.MONGODB_URL || 'mongodb://127.0.0.1:27017/taskly_erp',
  mongoDbName: process.env.MONGODB_DB_NAME || 'taskly_erp',
  jwtSecret: process.env.JWT_ACCESS_SECRET || '',
  jwtTtl: process.env.JWT_ACCESS_TTL || '8h',
  corsOrigins: (process.env.CORS_ORIGINS || 'http://localhost:4200')
    .split(',')
    .map((v) => v.trim())
    .filter(Boolean),
  uploadDir: path.resolve(backendRoot, process.env.UPLOAD_DIR || 'uploads'),
  maxUploadBytes: integer(process.env.MAX_UPLOAD_MB, 5) * 1024 * 1024,
  bootstrapAdmin: {
    email: process.env.SUPER_ADMIN_EMAIL?.trim().toLowerCase(),
    password: process.env.SUPER_ADMIN_PASSWORD,
    name: process.env.SUPER_ADMIN_NAME || 'Super Admin',
  },
});

export function validateConfig() {
  if (config.jwtSecret.length < 32)
    throw new Error('JWT_ACCESS_SECRET must contain at least 32 characters.');
}
