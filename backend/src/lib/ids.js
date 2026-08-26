import crypto from 'node:crypto';
export const stableId = (prefix) => `${prefix}_${crypto.randomUUID()}`;
export const accessKey = () => crypto.randomBytes(32).toString('hex');
export const hashKey = (value) => crypto.createHash('sha256').update(value).digest('hex');
