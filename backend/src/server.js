import { createApp } from './app.js';
import { config, validateConfig } from './config.js';
import { closeDatabase, connectDatabase } from './db.js';
import { bootstrap } from './services/bootstrap.js';

async function start() {
  validateConfig();
  await connectDatabase();
  await bootstrap();
  const server = createApp().listen(config.port, () =>
    console.log(
      `${config.appName} API listening on http://localhost:${config.port}${config.apiPrefix}`,
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
