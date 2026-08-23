# Document 0 — TECH STACK

**Phase:** 1 — University ERP Foundation  
**Status:** Technology baseline supplied by project owner

## Technology Baseline

| Layer | Recommended Technology | Role |
|---|---|---|
| ERP Frontend | Angular 20+ | Main ERP application, admin, faculty, and student dashboards |
| Public Web / Portal | Next.js | Public website, admissions, and SEO pages |
| Language | TypeScript | Frontend and backend type safety |
| API Framework | NestJS | Enterprise API architecture, modules, RBAC, and validation |
| HTTP Engine | Fastify | High-performance HTTP layer for NestJS |
| API Style | REST API | Main ERP API |
| API Versioning | URI Versioning | `/api/v1/...` |
| API Documentation | Swagger / OpenAPI | API documentation and testing |
| Validation | Zod / class-validator | Request validation |
| ORM | Prisma | PostgreSQL database access |
| Primary Database | PostgreSQL | Students, academics, fees, HR, exams, and finance |
| NoSQL Database | MongoDB | Flexible documents, logs, and dynamic data |
| Cache | Redis | Caching, sessions, and locks |
| Queue | BullMQ + Redis | Background jobs and task processing |
| Message Broker | Kafka | Future large-scale event streaming and microservices |
| Search Engine | OpenSearch | Global, student, and document search |
| Real-Time Communication | WebSocket / Socket.IO | Live notifications, dashboards, and status updates |
| Authentication | JWT + Refresh Tokens | Secure authentication |
| Authorization | RBAC + Permission System | Role, module, and action-based access |
| SSO | OAuth 2.0 / OpenID Connect | University SSO integration |
| Security | Helmet + CORS + Rate Limiting | API security |
| Password Hashing | Argon2id | Secure password storage |
| File Storage | MinIO / S3-compatible storage | Documents, certificates, and images |
| Reverse Proxy | Nginx | Routing, SSL, and load balancing |
| Server OS | Ubuntu Server LTS | On-premise production server |
| Containerization | Docker | Deployment and isolation |
| Container Management | Docker Compose initially | Multi-service deployment |
| Process Management | PM2 | Node.js process management if not containerized |
| Load Balancing | Nginx / HAProxy | Multiple API instances |
| Logging | Pino | Application logging |
| Centralized Logs | Loki + Grafana | Log aggregation and analysis |
| Monitoring | Prometheus | Server, API, and database metrics |
| Monitoring Dashboard | Grafana | Infrastructure and ERP monitoring |
| Error Tracking | Sentry | Production error tracking |
| Testing | Jest + Supertest | Unit and API testing |
| E2E Testing | Playwright | End-to-end ERP testing |
| Load Testing | k6 | API performance and load testing |
| CI/CD | GitHub Actions | Automated build, test, and deployment |
| Code Quality | ESLint + Prettier | Code standards |
| Version Control | Git + GitHub/GitLab | Source control |
| Frontend State | NgRx + RxJS | Complex ERP state management |
| UI Framework | Angular Material + CDK | Enterprise UI components |
| Charts / Analytics | Apache ECharts | Dashboards and analytics |
| PDF Generation | PDFKit / Puppeteer | Reports, certificates, and receipts |
| Excel Processing | ExcelJS | Bulk import and export |
| Email | SMTP / Nodemailer | Email notifications |
| SMS / WhatsApp | Official provider APIs | Alerts and communication |
| Scheduler | NestJS Scheduler / Cron | Scheduled ERP tasks |
| Architecture | Modular Monolith | Initial ERP architecture |
| Future Architecture | Microservices + Kafka | Scale individual services when required |
| Deployment Model | On-Premise / Self-Hosted | University-owned infrastructure |
| Database Backup | PostgreSQL PITR + Automated Backups | Disaster recovery |
| Database Scaling | Connection Pooling + Read Replicas | High concurrency |
| Performance Strategy | Redis + DB Indexing + Query Optimization | Low API latency |

## Primary API Stack

Node.js + TypeScript + NestJS + Fastify is the primary ERP API stack.

## Decisions to Confirm Later

- Whether MongoDB, Kafka, OpenSearch, and HAProxy are required in the first release.
- Final hosting topology and production sizing.
- Final identity provider for university SSO.
- Final SMS/WhatsApp provider.
