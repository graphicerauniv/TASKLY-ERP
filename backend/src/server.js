import { createApp } from './app.js';
import { config, validateConfig } from './config.js';
import { closeDatabase, connectDatabase } from './db.js';
import { bootstrap } from './services/bootstrap.js';

async function start() {
  const startedAt = Date.now();
  validateConfig();
  console.log('Starting Taskly ERP API and connecting to PostgreSQL…');
  await connectDatabase();
  console.log(`PostgreSQL ready in ${Date.now() - startedAt}ms.`);
  await bootstrap();
  const server = createApp().listen(config.port, () =>
    console.log(
      `${config.appName} API listening on http://localhost:${config.port}${config.apiPrefix} (${Date.now() - startedAt}ms total)`,
    ),
  );
  const shutdown = () =>
    server.close(async () => {
      await closeDatabase();
      process.exit(0);
    });
  process.on('SIGTERM', shutdown);
  process.on('SIGINT', shutdown);
}
start().catch((error) => {
  console.error('Failed to start API:', error.message);
  process.exit(1);
});
