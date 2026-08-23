# Taskly ERP

Database-driven admission ERP with a Super Admin form builder.

## Workspaces

- `frontend`: Angular admin panel and dynamic student admission renderer.
- `backend`: JavaScript-only Node.js, Express, and MongoDB API.
- `cocumetation SRS`: SRS and technology decisions.

Master data, custom data sources, form configuration, drafts, uploads, and submissions are stored in MongoDB.

## Setup

```bash
npm install
cp backend/.env.example backend/.env
cp frontend/.env.example frontend/.env
npm run create:admin --workspace backend -- admin@example.com "strong-password" "Super Admin"
npm run start:dev --workspace backend
npm start --workspace frontend
```

MongoDB must be running before the API starts. Alternatively, set `SUPER_ADMIN_EMAIL` and `SUPER_ADMIN_PASSWORD` temporarily in `backend/.env`; the API will create the first database-backed account at startup. Environment templates are committed; real `.env` files remain ignored.
