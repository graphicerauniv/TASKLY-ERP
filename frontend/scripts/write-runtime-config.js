import fs from 'node:fs';
import path from 'node:path';

const root = path.resolve(import.meta.dirname, '..');
const envPath = path.join(root, '.env');
const env = {};
if (fs.existsSync(envPath)) {
  for (const line of fs.readFileSync(envPath, 'utf8').split(/\r?\n/)) {
    const match = line.match(/^([A-Z0-9_]+)=(.*)$/);
    if (match) env[match[1]] = match[2].trim().replace(/^['"]|['"]$/g, '');
  }
}
const config = {
  apiBaseUrl: env.TASKLY_API_BASE_URL || 'http://localhost:3000/api/v1',
  appName: env.TASKLY_APP_NAME || 'Taskly ERP',
};
fs.mkdirSync(path.join(root, 'public'), { recursive: true });
fs.writeFileSync(
  path.join(root, 'public', 'runtime-config.js'),
  `window.__TASKLY_CONFIG__=${JSON.stringify(config)};\n`,
);
