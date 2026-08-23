import crypto from 'node:crypto';
export const stableId = (prefix) => `${prefix}_${crypto.randomUUID()}`;
export const accessKey = () => crypto.randomBytes(32).toString('hex');
export const hashKey = (value) => crypto.createHash('sha256').update(value).digest('hex');
export function applicationNumber() {
  const date = new Date().toISOString().slice(0, 10).replaceAll('-', '');
  return `ADM-${date}-${crypto.randomBytes(3).toString('hex').toUpperCase()}`;
}
