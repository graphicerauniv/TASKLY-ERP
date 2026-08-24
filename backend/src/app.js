import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import { rateLimit } from 'express-rate-limit';
import { config } from './config.js';
import { requireAdmin } from './middleware/auth.js';
import { errorHandler, notFound } from './middleware/errors.js';
import { authRouter } from './routes/auth.routes.js';
import { dashboardRouter } from './routes/dashboard.routes.js';
import { masterDataRouter } from './routes/master-data.routes.js';
import { formsRouter } from './routes/forms.routes.js';
import { publicRouter } from './routes/public.routes.js';
import { admissionsRouter } from './routes/admissions.routes.js';
import { hostelsRouter } from './routes/hostels.routes.js';
import { feesRouter } from './routes/fees.routes.js';

export function createApp() {
  const app = express();
  app.disable('x-powered-by');
  app.use(helmet({ crossOriginResourcePolicy: { policy: 'cross-origin' } }));
  app.use(
    cors({
      origin(origin, callback) {
        callback(null, !origin || config.corsOrigins.includes(origin));
      },
      credentials: true,
    }),
  );
  app.use(express.json({ limit: '2mb' }));
  app.use('/uploads', express.static(config.uploadDir));
  app.get('/health', (request, response) => response.json({ status: 'ok', app: config.appName }));
  app.use(
    `${config.apiPrefix}/auth`,
    rateLimit({ windowMs: 15 * 60 * 1000, limit: 50 }),
    authRouter,
  );
  app.use(
    `${config.apiPrefix}/public`,
    rateLimit({ windowMs: 60 * 1000, limit: 300 }),
    publicRouter,
  );
  app.use(`${config.apiPrefix}/dashboard`, requireAdmin, dashboardRouter);
  app.use(`${config.apiPrefix}/master-data`, requireAdmin, masterDataRouter);
  app.use(`${config.apiPrefix}/forms`, requireAdmin, formsRouter);
  app.use(`${config.apiPrefix}/admissions`, requireAdmin, admissionsRouter);
  app.use(`${config.apiPrefix}/hostels`, requireAdmin, hostelsRouter);
  app.use(`${config.apiPrefix}/fees`, requireAdmin, feesRouter);
  app.use(notFound);
  app.use(errorHandler);
  return app;
}
