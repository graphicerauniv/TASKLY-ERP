# GEU ERP Admin UI/UX Current-System Audit

> Repository state inspected: 2026-09-01. This is an implementation audit, not a redesign proposal. Paths are repository-relative. `Needs verification` means runtime data or a deployed environment is required. No environment secrets were inspected or reproduced.

## 1. Project and frontend information

The frontend is one standalone-component Angular SPA. The browser entry is `frontend/src/index.html`; bootstrap is `frontend/src/main.ts`; providers are in `frontend/src/app/app.config.ts`; top-level routes are in `frontend/src/app/app.routes.ts`.

| Concern | Actual implementation |
|---|---|
| Framework | Angular packages `@angular/core`, `common`, `compiler`, `forms`, `platform-browser` **^21.2.0**; CLI/build **^21.2.0** |
| Build | Angular CLI using `@angular/build` ^21.2.0 (its development pipeline uses Vite internally); TypeScript ~5.9.3, Sass ^1.92.0, PostCSS ^8.5.6 |
| Router | `@angular/router` ^21.2.0, standalone `Routes`, route-level `loadComponent`/`loadChildren` |
| State | Angular signals/computed/effect and component-local state. NgRx store/effects/entity/router-store/devtools ^21.1.0 are installed but no Admin feature store was found |
| Fetching | Angular `HttpClient` through `frontend/src/app/core/api.service.ts`; RxJS ^7.8.2. No query/cache library |
| Styling | Global SCSS (`src/style/_tokens.scss`, `_system.scss`, `_admin-primitives.scss`, `_index.scss`) plus large feature SCSS files; Tailwind 4.3.3 is configured/imported but Admin templates primarily use authored classes |
| Components | Custom standalone components. Angular Material/CDK ^21.2.0 installed; Admin shell uses CDK focus trap. No Material widget suite is consistently used |
| Icons | `@lucide/angular` ^1.33.0; a few text/Unicode icons remain |
| Charts | ECharts ^6.0.0 + ngx-echarts ^21.0.0 installed; no chart component is used on current Admin pages |
| Tables/grid | Native HTML tables and custom CSS; no data-grid/virtual-table dependency |
| Forms | Angular Forms ^21.2.0, predominantly template-driven `FormsModule`/`ngModel`; no third-party form library |
| Validation | Frontend hand-written validation (`admission-form-validation.ts`, `form-publish-validation.ts`, component methods); backend Zod ^4.4.3. No frontend validation package |
| Animation | CSS transitions/tokenized motion only; no Angular animations or third-party animation library found |
| Dates/utilities | Native date inputs/`Date`, RxJS; no date-picker, date utility, lodash, or general utility package |
| Responsive system | CSS variables at 48rem/64rem/80rem, while feature media queries also use 767/768, 900, 980, 1080, 1180 and 1280px. Shell switches to drawer at 767px |

Relevant structure:

```text
frontend/src/app/
  core/                    auth, interceptor, API facade, entity interfaces, master-data store
  features/admin/
    admin.routes.ts        complete Admin route source of truth
    layout/                shell and navigation configuration
    dashboard/ admissions/ form-builder/ master-data/
    fee-management/ fee-progression/ scholarships/ accounts/
    student-scholarships/ student-promotions/ delete-admissions/
    hostel-management/ auth/
  features/student/admission/  dynamic admission UI reused by Admin
  shared/ui/               reusable shell/page/workflow/action/state components
frontend/src/style/        global tokens and component contracts
backend/src/routes/        API routes
backend/src/services/      business rules
backend/src/middleware/auth.js
```

## 2. Existing Admin shell

| Item | File and current behaviour | Reuse/state/responsiveness/limitations |
|---|---|---|
| Root | `app.routes.ts` lazy-loads `/admin`; `admin.routes.ts` redirects bare `/admin` to `/admin/dashboard` | Entire child tree is guarded by `authGuard`; `/admin/login` redirects to `/login` |
| Layout | `features/admin/layout/admin-shell.component.{ts,html,scss}` | One shell and router outlet for all pages. OnPush; signals hold URL, collapse/drawer/flyout state and page context |
| Desktop sidebar | Same shell; content driven by `layout/navigation/admin-navigation.config.ts` | Starts **collapsed** every load (`desktopCollapsed=true`), 76px vs 280px. Section click opens a positioned 360px flyout; no persisted preference; no hover expansion |
| Mobile nav | Same navigation template in modal `<aside>`, backdrop and CDK focus trap | At <=767px desktop sidebar is hidden; hamburger opens 304px drawer, body scroll is locked, Escape/backdrop/navigation closes it. No bottom navigation |
| Header | Shell header | 56px sticky header containing mobile menu and breadcrumbs only. There is no global search, notification control, settings control, or header account menu |
| Breadcrumbs | `resolveAdminPageContext()` in navigation config | Derived from navigation regexes and route title; plain text, not links. Dynamic IDs are not resolved to entity names |
| Content | `<main class="content admin-main"><router-outlet/>` | Token max width 1600px; pages generally use shared `erp-admin-page` workspace max 1480px. Padding changes 24/16/12px |
| Footer/account | Sidebar footer in shell template | Mailto support, initials/name/email, direct logout button. No account dropdown/profile/preferences. Repeated in mobile drawer |
| Theme/providers | `app.config.ts`, `styles.scss`, `style/_index.scss`, `_tokens.scss` | Light-only `color-scheme: light`; no theme switch/provider. Http client/interceptor/router providers; no locale/date provider visible |
| Authentication | `core/auth.guard.ts`, `auth.service.ts`, `auth.interceptor.ts`; backend `middleware/auth.js` | Token presence guards frontend; interceptor attaches bearer token and clears on 401. Backend verifies JWT and active admin record. No refresh-token flow |
| Roles/permissions | None beyond authenticated Admin | Navigation is not role-filtered, routes have no role guard, admin session shape is name/email only, backend has no granular authorization middleware |

No global notifications centre, global search, conventional footer, or reusable toast host exists. Success/error messages are page-local notices.

## 3. Complete Admin navigation and route inventory

All rows require the single authenticated Admin role. “Hidden” means absent from the sidebar but reachable through a link/action or URL. Dynamic master routes represent 14 configured sidebar types and any backend-created custom type.

| Module | Navigation label | Route | Page component | Sub-pages / status |
|---|---|---|---|---|
| Home | Home | `/admin/dashboard` | `dashboard/dashboard.component.ts` | Complete summary page |
| Admissions | New admission | `/admin/admission/student` | `features/student/admission/dynamic-admission.component.ts` | Admin-embedded create workflow; complete |
| Admissions | Forms | `/admin/admissions/forms` | `admissions/forms-library/...ts` | Library; complete |
| Admissions | Hidden legacy builder | `/admin/form-builder` | `form-builder/form-builder.component.ts` | Builder default; complete |
| Admissions | Hidden form edit | `/admin/admissions/forms/:formId/edit` | same builder | Complete |
| Students | All applications | `/admin/admissions/applications` | `admissions/admissions.component.ts` | Complete workbench |
| Students | Draft applications | `/admin/admissions/unfilled` | same | Status preset `draft`; complete |
| Students | Awaiting review | `/admin/admissions/not-approved` | same | `pending_approval`; complete |
| Students | Approved students | `/admin/admissions/approved` | same | `approved`; complete |
| Students | Hidden record | `/admin/admissions/applications/:admissionId` | `application-record/...ts` | Overview/application tabs; complete |
| Students | Hidden review | `/admin/admissions/applications/:admissionId/review` | `application-review/...ts` | Complete approval workspace |
| Students | Hidden edit | `/admin/admissions/:admissionId/edit` | `application-editor/...ts` | Complete; unsaved-changes guard |
| Students | Hidden scholarships | `/admin/admissions/:admissionId/scholarships` | `student-scholarships/...ts` | Complete assignment/discount page |
| Students | Promotions | `/admin/admissions/promotions` | `student-promotions/...ts` | Complete batch action |
| Students | Record deletion | `/admin/delete-admissions` | `delete-admissions/...ts` | Complete destructive list |
| Finance | Accounts & payments | `/admin/accounts` | `accounts/accounts.component.ts` | Complete read/receipt list |
| Finance | Fee progression | `/admin/fees/progression` | `fee-progression/...ts` | UI fetches candidates; action implementation **partial** |
| Finance | Scholarships | `/admin/fees/scholarships/view` | `scholarships/...ts` | View/create/edit routes; complete |
| Finance | Hidden scholarship create/edit | `/admin/fees/scholarships/create`, `/:id/edit` | same | Complete |
| Finance | Fee books | `/admin/fees/books/view` | `fee-management/...ts` | create/view/:id/edit; complete |
| Finance | Fee heads | `/admin/fees/heads/view` | same | create/view/:id/edit; complete |
| Finance | Course fees | `/admin/fees/course-fees/view` | same | create/import/drafts/view; complete, very large multi-mode component |
| Finance | Hostel fees | `/admin/fees/hostel-fees/view` | same | create/view; create/delete present, no edit route |
| Hostel | Hostel details | `/admin/master-data/hostel/details` | `hostel-management/...ts` | Complete CRUD |
| Hostel | Structure | `/admin/master-data/hostel/structure` | same | Blocks/floors; complete |
| Hostel | Rooms | `/admin/master-data/hostel/rooms` | same | Manual/bulk rooms; complete |
| Hostel | Room capacity | `/admin/master-data/hostel/capacity` | same | Complete |
| Hostel | Allocations | `/admin/master-data/hostel/allocation` | same | Allocate/transfer/vacate; complete |
| Hostel | Occupancy overview | `/admin/master-data/hostel/overview` | same | Complete summary |
| Settings | Academic sessions, universities, colleges, departments, levels, courses | `/admin/master-data/:typeSlug/view` | `master-data/...ts` | paired `/create`, `/:id/edit`; complete generic CRUD |
| Settings | Domiciles, student types, fee types | same pattern | same | Complete |
| Settings | Countries, states, districts, cities | same pattern | same | Dependency-aware CRUD; complete |
| Settings | Custom masters | `/admin/master-data/custom/view` | same | Complete if type exists; runtime type details need verification |

Redirects retained: `/admin/master-data`, `/admin/master-data/hostel`, `/admin/fees`, `/admin/fees/scholarships`, `/admin/fees/books`, `/heads`, `/hostel-fees`, `/course-fees`, `/course-fee-view`, `/admin/admissions`, `/admin/admission/database`, `/admin/admission/delete`, and `/admin/admission`.

## 4. Page inventory and workflow behaviour

### Dashboard

`dashboard.component.ts/html` calls `GET /dashboard/summary`, showing four KPI cards (applications, pending, approved, master records). Primary action is absent. It has loading text, a local error notice, and no empty distinction, filters, chart, modal, export, or pagination. Cards wrap responsively. Status: complete but minimal.

### Admissions and students

**Applications workbench** (`admissions.component.*`) displays identity/contact/course/status/application dates and fee-ledger readiness in table/card/preview representations. URL-backed view, query, status and pagination (`page`, allowed `size`) call `GET /admissions`. Actions include quick preview drawer, full record, edit, review, scholarships, password reset, generate/recalculate/delete fee records, and deletion as status permits. It has search, filter popover, status route presets, bulk selection, native table sorting/presentation logic, server pagination, confirmation dialogs, skeleton/loading, empty and error states, stale-data refresh feedback and local success messages. Wide table scrolls; mobile uses alternate/card treatment. No general export.

**Application record** (`application-record.component.*`) calls `GET /admissions/:id`, displays overview plus dynamic submitted application sections, master labels, status and linked actions. Query tabs `overview|application`, section deep-linking, journey rail; loading/error states. No mutation or pagination. Responsive layouts collapse; complete.

**Application editor** (`application-editor.component.*`) calls `GET /admissions/:id`, then `PATCH /admissions/:id`; renders dynamic sections/fields with section navigation, uploads through `POST /admissions/:id/uploads`, validation, save progress/error/success, and browser confirm in `unsaved-changes.guard.ts`. It does not submit/approve. Desktop sticky navigation becomes mobile section sheet/action bar through shared workflow components. Complete.

**Application review** (`application-review.component.*`) loads `GET /admissions/:id`; presents summary, submitted sections, checklist/decision controls, fee-period selection and password activation inputs. Approval calls `POST /admissions/:id/approve`; it can update fee period and reset student password using `PATCH /admissions/:id` and `POST /admissions/:id/password`. Validation requires eligible status and decision inputs. Success/error notices and confirmation UI are local. The API has approval, not a separate rejection endpoint; any “reject” presentation not backed by an endpoint is **Needs verification**. Complete for approval/activation.

**New admission** (`dynamic-admission.component.*`, reused from student) loads active form and starts a draft (`GET /public/forms/active`, `POST /public/admissions`) or loads an admin ID; in Admin mode saves via `PATCH /admissions/:id`, uploads, then `POST /admissions/:id/submit`. Dynamic validation comes from form schema plus `admission-form-validation.ts`. Long-form progress/header/right navigator/mobile sheet/sticky action bar are shared. Draft/save/submit success and errors are inline. Complete.

**Forms library** calls `GET /forms`; shows form name/status/section counts with create, edit, duplicate/publish/archive/delete actions routed or delegated to builder. Has search/status filtering, table actions, empty/error/loading feedback; no pagination. **Form builder** (`form-builder.component.*` plus four local components) loads/saves/deletes forms (`GET /forms`, `PUT /forms/:id`, `DELETE /forms/:id`; creation is supported by API). It edits tabs/subsections/fields, options, visibility, searchable master sources and upload rules; supports duplicate/reorder/settings drawers and readiness/publish/delete/name dialogs. Publish validation is extensive and local. No audit history or collaborative conflict handling.

**Scholarships & discounts per student** loads `GET /fees/students/:studentAdmissionId/scholarships`; assigns recurring scholarship, creates a one-time fixed/percent discount, removes either, and receives recalculated ledgers. Confirmation is used for removals; totals/fee impact are displayed. No edit or history beyond active/removed records returned. Complete.

**Promotions** filters candidates using the promotions endpoint, course/session/year/semester criteria, selects rows and posts IDs to `/admissions/promotions`. It reports promoted/skipped results. No rollback or audit timeline. Complete.

**Record deletion** loads admissions, searches and deletes with `DELETE /admissions/:id` after a confirm dialog. It is not role-restricted and is a hard/destructive API operation. Local loading/error/success/empty states; no recovery. Complete and high risk.

### Finance

**Accounts & payments** calls `GET /payments/admin/accounts?search&status`, shows payment/student/reference/amount/status and outstanding balance; search/status filter and receipt download (`GET /payments/admin/accounts/:paymentId/receipt`). Loading/error/empty states; no pagination or payment-entry/refund UI. Complete read-only surface.

**Fee progression** loads semester/year candidates (`GET /fees/progression/candidates`). The component exposes mode and selection, but the inspected page does not call `progressStudentFees`; therefore progression execution is **partial** even though `ApiService` and backend endpoint exist.

**Scholarship catalogue** calls list/create/update APIs; routes determine view/create/edit mode. It supports name, fixed/percentage type, value and active toggle, search/filter, action menu, inline feedback. Delete exists in `ApiService` but is not used by this component. Complete for current UI scope.

**Fee management** is one 1,831-line TS/1,870-line template component switched by route `data.section/mode`. Fee books and heads support list/create/edit/delete; hostel fees support list/create/delete; course fees support matrix configuration, draft create/update/delete, workbook preview/commit import, and read view. It calls fee books, heads, courses, hostel, fee-type masters, fee matrices and draft/import endpoints. Each mode contains bespoke forms/tables, filter popovers, confirmations, local notices and responsive overflow. No unified transaction, step history or server pagination; status is complete but structurally high-risk.

### Hostel

The six routes share `hostel-management.component.*` (1,402-line TS/2,463-line template). Details CRUDs hostels and active state; structure CRUDs blocks/floors; rooms manually creates or bulk-generates and deletes/updates rooms; capacity edits room type/seats; allocations search students and rooms then allocate, transfer or vacate with staged UI and confirmation/reason; overview shows occupancy for an academic session. Calls `/hostels` structure/rooms/capacity/students/allocations/overview endpoints and academic master values. It has route/query context, tables/cards, many modal/dialog states, local errors/successes and responsive overflow. No pagination, waitlist, export or audit history. Complete.

### Settings/master data

`master-data.component.*` is route-driven by `typeSlug` and `mode`. It loads master type metadata/dependencies and values, searches, creates/updates/deletes, toggles active state, imports a file and supports course-specific dependent fields. Routes supply view/create/edit for every slug. Loading/error/empty/success and confirm dialog exist; no pagination/export/history. Custom/dynamic type correctness depends on runtime backend data: **Needs verification**.

## 5. Core workflow mapping

| Workflow | Actual sequence, validation, API, result/failure/history |
|---|---|
| Form creation/publishing | Forms library → builder → name/tabs/subsections/fields/settings → readiness dialog → save/publish. `GET/POST/PUT /forms`, status draft/published/archived. Local structural/dependency/upload validation; any authenticated admin. Errors inline. No version/audit history |
| Draft application | New admission starts draft → completes current dynamic sections → save/upload → submit. `draft → pending_approval` (repository also models `submitted`). Required/schema/upload validation. Failure retains page-local state; no event log |
| Processing/review | Applications queue → preview/record/edit → review. Edit PATCHes data; review loads full record. `pending_approval → approved` via approve endpoint. No supported rejection endpoint found |
| Student activation | Review approval collects/creates student identity/password and fee-period inputs → approve endpoint → approved active student. Duplicate identity, invalid fee configuration and validation errors can fail. Backend admission identity/validation services enforce rules; no UI audit log |
| Approved management | Approved route → record/edit/scholarships/password/fees actions. Status remains approved; fee generation/recalculation endpoints mutate ledgers |
| Promotion | Promotions filter → select candidates → confirm/post progression IDs → promoted/skipped result. Candidate status `pending/promoting/promoted/cancelled`; service enforces eligibility. No rollback/history UI |
| Scholarship | Approved record → scholarships → choose active catalogue item → assign → ledgers recalculated. Remove marks/removes assignment and recalculates. Active/removed status; no approval stage |
| One-time discount | Same page → fixed/percent amount and reason → create → fee ledgers recalculated → removable after confirmation. Validation/API errors inline; no edit |
| Finance configuration | Create book → heads → course/hostel fee mappings; course matrix may save draft, preview workbook import, map, commit. Backend Zod/business services validate references and duplicates. Draft only status; no audit history |
| Payment | Admin accounts only views/searches payment records and downloads receipt. Actual payment initiation is student-side; no Admin payment processing/refund workflow |
| Deletion | Record deletion/search → action → explicit confirmation → DELETE admission. Backend may reject dependent records; no restore/trash/audit UI |
| Hostel | Define hostel → blocks/floors → rooms → capacity → allocate student/bed → transfer or vacate → overview. Backend validates hierarchy/capacity/occupancy. No waitlist/history/export |
| Settings | Select master type → list/search → create/edit/activate/delete/import. Dependencies (e.g. location/course hierarchy) are loaded first. Backend rejects invalid/dependent deletion. No change history |

## 6. Roles and permissions

Only two authentication domains exist: Admin and Student. There are no Admin sub-roles, role enums, permission claims, navigation filters, route permission guards or backend permission checks.

| Role | Module/page visibility | View/create/edit/approve/delete/export/finance/settings |
|---|---|---|
| Authenticated active Admin | Every Admin navigation item and every `/admin/**` child route | All capabilities exposed by UI/API, including approval, financial configuration and hard deletion. Receipt download only export-like permission |
| Unauthenticated user | Login only | None; frontend guard redirects and backend returns 401 |
| Student | Student portal only | Cannot use Admin JWT routes; public/student endpoints have separate checks |

Enforcement is **both** frontend authentication visibility and backend `requireAdmin`, but granular authorization is **not enforced** anywhere. The login/API admin payload contains name/email, not role/permissions. This is a critical inconsistency with any expectation of registrar/finance/hostel/settings separation.

## 7. Existing design system

Source: `frontend/src/style/_tokens.scss`; contracts: `_system.scss`, `_admin-primitives.scss`; shell geometry: `admin-shell.component.scss`.

| Area | Current exact tokens |
|---|---|
| Primary | blue 500 `#0b66c3`; hover `#0959ad`; pressed `#084b91`; link/focus `#0969da` |
| Canvas/surfaces | canvas `#f6f8fa`, soft `#f3f4f6`, surface `#fff`, detail `#f6f8fa`, hover `#f3f4f6`, selected `#eaf4ff` |
| Borders/text | subtle `#e5e7eb`, default `#d0d7de`, strong `#afb8c1`; heading `#1f2328`, body `#3d444d`, muted `#59636e`, light `#6e7781` |
| Semantic | success `#1a7f37`/bg `#dafbe1`; warning `#9a6700`/bg `#fff8c5`; danger `#cf222e`/bg `#ffebe9`; info `#0969da`/bg `#ddf4ff` |
| Sidebar | gradient `#0959ad → #084b91`; current shell also uses light surface tokens; active edge `#0b66c3`, mobile 304px, flyout 360px |
| Typography | Inter if locally available, then Apple/Segoe/system sans; display 24px, page title 20px, section 16px, panel/body 14px, table/label 13px, caption 12px; weights 400/500/600/700; line heights 1.333–1.5 |
| Layout | sidebar 280/76px; header 56px; content 1600px, workspace 1480px; page padding 24/16/12px; gaps 20/24px; breakpoints 48/64/80rem |
| Layers | content 1, header 100, sidebar 200, dropdown 400, drawer 600, modal 800, toast 1000 |
| Cards | radius 8px; border default/subtle; shadow `0 1px 2px rgb(31 35 40 / 4%)`; padding 16px (12px compact) |
| Controls | 36px, large 40px, compact 32px, mobile 44px; control radius 6px |
| Tables | header 40px, row 44px (40 compact), wide min 1120px, custom native tables |
| Chips/tabs | chip/badge 22px pill; route tabs 36px with 2px active indicator |
| Overlays | modal 560px, drawer 420px, overlay radius 10px/shadow `0 8px 24px rgb(31 35 40 / 18%)`; workflow sheet 78dvh |
| Feedback | skeleton 1400ms; loading spinner 32px; state panels min 180–240px. Reduced-motion media query reduces durations to 1ms |

Tooltip and dropdown dimensions are contract/class-specific rather than separately tokenized. Toast z-index/motion tokens exist, but no global toast implementation was found. Feature SCSS sometimes overrides the system, so token values are not universal rendered values.

## 8. Shared component inventory

| Component | Path | Usage/variants/responsive | Safe to reuse? / problems |
|---|---|---|---|
| Admin page | `shared/ui/admin-page` | Most modern Admin pages; header/actions/content slots | Yes; older form builder/dynamic form vary |
| Action menu | `shared/ui/compact-action-menu` | Lists/tables across admissions, finance, hostel, masters | Yes; custom menu semantics still appear in legacy sections |
| Confirm dialog | `shared/ui/confirm-dialog` | Admissions, fees, masters, deletion, scholarship | Yes; builder and hostel also contain bespoke dialogs: duplication |
| Filter popover | `shared/ui/filter-popover` | Admissions, accounts, scholarships, fee management | Yes; filter schemas remain page-local |
| Dynamic renderers/upload | `dynamic-field-renderer`, `dynamic-section-renderer`, `upload-field` | Admission create/edit | Yes within schema contract; tightly coupled to admission models |
| Workflow navigation | `form-progress-header`, `form-section-navigator`, `mobile-section-navigator-sheet`, `form-action-bar`, `form-sub-group` | Long admission flows | Yes; purpose-built responsive pattern |
| Admission workspace/rail/nav | `admission-form-workspace`, `admission-journey-rail`, `admission-workspace-nav` | Admission record/editor/review | Yes within Admissions |
| Finance workspace nav | `finance-workspace-nav` | Finance page family | Yes; route-specific |
| Settings modal/context inspector | `settings-modal`, `context-inspector` | Builder/complex workspaces | Conditional; semantics overlap drawer patterns |
| Field icon | `field-type-icon` | Builder | Yes |

Buttons, cards, tables, inputs, selects, badges, tabs, pagination, loading/empty/error and skeletons are mostly **CSS contracts**, not encapsulated Angular components. KPI cards are page markup. Native date inputs are used; no shared date picker/avatar/chart. File upload is shared only for admission fields. Duplicated purposes include bespoke dialogs/drawers, page notices, table shells, empty states, form controls, cards and responsive table handling.

## 9. Data and API contracts

Canonical frontend shapes: `frontend/src/app/core/models.ts`; action URLs: `core/api.service.ts`; server validation/routes: `backend/src/routes` and `backend/src/services`.

| Entity | Important frontend-facing fields/status/relations/actions |
|---|---|
| AdmissionForm | `_id`, name, sections/subsections/fields, status `draft|published|archived`; fields include type/options/required/search/upload/visibility. CRUD `/forms` |
| Application/Admission | `_id`, formId, applicationNumber, studentId, name/email/phone, form data/files, course/session relations, dates, active flag; `draft|pending_approval|approved|submitted`. list/get/patch/submit/approve/password/upload/delete |
| Student | Approved Admission is the student record; session includes admission/student IDs, name/email/course and must be active+approved. No separate Admin Student entity |
| MasterType/Value | `_id`, name, slug, parent/dependency, code/label/value, active, metadata. Dynamic `/master-data/:slug/values`, CRUD/import |
| Programme/course/session | Master values (course and academic slugs) with parent relationships/metadata; course options used by fees/promotions |
| Scholarship | `_id`, name, `fixed|percentage`, numeric value, active; catalogue CRUD. Assignment has student/scholarship IDs, snapshots/dates, `active|removed` |
| Discount | `_id`, studentAdmissionId, fixed/percentage, value/reason/dates, `active|removed`; create/remove per student |
| FeeBook | `_id`, code/name, college/session/period metadata, active/dates; CRUD |
| FeeHead | `_id`, bookId, name/code, frequency `one-time|semester|half-yearly|yearly`, priority/active; CRUD |
| Course/HostelFee | book/head/course or hostel IDs plus domicile/student-type/country/period and amount; matrix create/list/delete/import |
| FeePeriod/Ledger | academic/semester/year period fields; ledger totals, paid/discount/scholarship/balance, entries, status active; entries `due|paid|partial`. generate/recalculate/progress/delete |
| Payment | `_id`, studentAdmissionId, provider/order/payment/reference IDs, amount/currency, allocations, dates; `created|processing|paid|failed|refunded`; Admin list/receipt only |
| Hostel | `_id`, name/code/gender/session, active; Block/Floor/Room hierarchy; room number/type/capacity/occupied beds. Allocation relates student/hostel/room/bed/session and is `active|vacated` with transfer/vacate data |
| Admin | Backend admin record has ID/name/email/password hash/isActive; frontend intentionally stores only token and name/email. No role/permission fields |
| Promotion | progression/admission/course/session/year/semester relations; `pending|promoting|promoted|cancelled`; candidates and batch promote |

Dates are serialized strings in frontend interfaces; amounts are numbers and should be treated as currency values. Optionality varies extensively by form schema and legacy data. Exact runtime master metadata is **Needs verification**.

## 10. Responsive/mobile audit

- Shell: desktop grid and collapsed sidebar above 767px; mobile drawer at/below 767px. Resize at <=1080 forces collapsed mode. Focus trap, Escape and scroll lock are implemented.
- Content: token padding reduces 24→16→12px. Long admission forms have a designed mobile section sheet. Cards generally collapse to one column.
- Tables: custom wrappers/min-width horizontal scrolling are common; there is no universal responsive table or frozen action column. Dense finance/hostel matrices remain desktop-oriented and require horizontal scrolling.
- Forms: many grids collapse via local media queries, but breakpoint values are inconsistent. Mobile control token is 44px, yet not every local control consumes it.
- Modals/drawers: shared sizes exist and many become viewport-width, but bespoke builder/hostel overlays require per-screen verification. Some long dialog bodies scroll.
- Desktop-only/high-risk pages: fee matrix/import, form builder three-pane workspace, hostel structure/capacity/allocation tables. They remain technically reachable on mobile but are not efficient touch workflows.
- Missing: no device test evidence for every route, no landscape/tablet-specific navigation mode, no universal sticky table actions, and no global responsive data-view contract enforcement.

## 11. Performance evidence

- Admin route module and shell are lazy-loaded; every child page also uses dynamic `loadComponent`, so route-level splitting exists. Login is lazy. There is no preloading strategy visible.
- ECharts/ngx-echarts, NgRx suite, Angular Material and Tailwind are installed but not materially used by current Admin pages; tree-shaking may limit bundle impact, but bundle output must be measured (**Needs verification**).
- Very large components/templates: fee management (1,831 TS/1,870 HTML/999 SCSS), hostel (1,402/2,463/926), form builder (802/745), admissions (736/701). These increase parse/maintenance cost and local change-detection surface.
- OnPush and signals are used widely, but several pages subscribe imperatively and reload full lists after mutations. No HTTP cache/deduplication layer exists.
- Accounts, forms, master data, scholarships, hostel lists and several finance lists have no server pagination/virtualization. Admissions does have server pagination.
- Native tables have no virtual scroll; large fee matrices are fully rendered. CDK virtual scrolling is not used.
- Large PNG assets include finance sprite and auth/admin artwork; student WebP assets do not affect Admin routes unless imported. Asset byte/runtime impact needs a production bundle trace.
- Feature SCSS is heavily duplicated; multiple Admin feature style files run hundreds of lines. CSS splitting/deduplication status needs build analysis.
- CSS motion is modest and reduced-motion aware. No non-lazy Admin charts or expensive animation framework found.

## 12. Current UI/UX problems by severity

**Critical**

- No granular Admin authorization: any active Admin can approve students, alter finance/settings/hostel data and hard-delete records.
- Record deletion is hard-delete with no role restriction, recovery, typed confirmation or audit trail visible.

**High**

- One component owns many unrelated Finance modes and one owns all Hostel modes; behaviour and layout are difficult to reason about and test.
- No audit/history UI for approval, financial changes, scholarship/discount removal, promotion, master changes or hostel transfers/vacates.
- Dense course-fee, builder and hostel workflows are only minimally usable on small screens.
- No rejection endpoint/workflow was found despite review terminology; lifecycle vocabulary includes both `submitted` and `pending_approval`.
- Most non-admission tables are unpaginated/unvirtualized.

**Medium**

- Navigation mixes Admissions creation/forms with a separate Students application lifecycle; hidden action routes make the hierarchy harder to learn.
- Header is underused: no global search, notifications or account menu; breadcrumbs are non-clickable.
- Feedback patterns are page-local notices/dialogs; no consistent toast/error boundary/offline/stale-state system.
- Custom tables/forms/dialogs repeat markup and interaction logic; sorting, keyboard handling and responsive overflow differ by page.
- Breakpoints are inconsistent between tokens and feature SCSS. Collapsed-sidebar preference is not persisted.
- Template-driven forms and hand-written validation make error timing/messages inconsistent.
- Accessibility is partly strong in shell (skip link, focus movement/trap, labels), but bespoke overlays, native tables, icon/text controls and focus return need route-by-route verification.

**Low**

- Installed but unused/limited libraries increase dependency governance overhead.
- Breadcrumbs show generic route titles rather than entity names; no direct breadcrumb navigation.
- No shared chart/date-picker/avatar component, although current workflows do not strictly require them.

## 13. Constraints for a future redesign

Must preserve all route URLs/redirect compatibility, `ApiService` contracts and backend endpoints; application/form/master/fee/hostel models; validation and upload rules; application and payment status values; approval/activation, fee recalculation, promotion and hostel capacity rules; authenticated Admin boundary; receipt downloads and workbook import; and all workflows marked complete above.

The shell markup, navigation presentation, header, breadcrumbs, cards, native table presentation, form-control visuals, filters, menus, dialogs/drawers, notices, responsive layouts and page composition can be replaced without changing business behaviour, provided route parameters/query parameters, calls, confirmations and validation remain intact. Permission redesign, lifecycle changes, new rejection, soft deletion, audit history or payment actions are **not** UI-only changes and require backend/product work.

## 13A. Scholarship and discount feature — detailed current UI/UX audit

This feature has two related Admin surfaces: the reusable scholarship directory and the student-specific scholarship review workspace. They are separate workflows and should not be treated as one generic CRUD page.

### 13A.1 Scholarship directory and scheme editor

Routes:

- `/admin/fees/scholarships/view` — scholarship directory.
- `/admin/fees/scholarships/create` — create a reusable scheme.
- `/admin/fees/scholarships/:id/edit` — edit a scheme.

All three modes use `features/admin/scholarships/scholarships.component.{ts,html,scss}` inside the shared `erp-admin-page` shell. The page is labelled **Fee Management**. View mode uses the title **Scholarship directory**; create/edit modes use **Create scholarship** and **Edit scholarship**.

The directory is a native table with client-side search and status filtering. Its columns are:

| Column | Current UI behavior |
|---|---|
| Scholarship | Name and “Reusable tuition concession” helper text |
| Value source | `Preconfigured` or `Custom at assignment` |
| Calculation | Percentage, fixed amount, selected at assignment, or `Needs configuration` |
| Value | Percentage, INR amount, assignment-time value, or em dash |
| Applied to | Static `Tuition Fee` label |
| Availability | `Available` or `Inactive` status pill |
| Actions | Compact menu: edit and enable/disable |

The toolbar contains a scholarship-name search field and a status filter with **All statuses**, **Available**, and **Inactive**. Summary metrics show total schemes, available schemes and inactive schemes. Loading, empty and filtered-empty states are rendered inside the table; success and error messages are page-local notices. There is no pagination, sorting, export, bulk operation, usage count, history view or visible delete action.

The editor is a card-based form with a right-side **How it works** guidance panel. It contains:

- scholarship name, required, maximum 120 characters;
- value configuration: preconfigured value or custom during student assignment;
- calculation: percentage or fixed amount, shown for preconfigured schemes;
- numeric value, greater than zero, with percentage capped at 100;
- availability: available for assignment or inactive.

Validation is imperative and displayed as a page-level error. The save button is disabled while saving. Cancel returns to the directory without an unsaved-change warning. The backend also rejects duplicate normalized names. `POST /fees/scholarships` creates, while `PATCH /fees/scholarships/:scholarshipId` edits or changes availability.

The backend has `DELETE /fees/scholarships/:scholarshipId`, but the current UI does not expose deletion. If student history exists, the backend rejects deletion and requires the scheme to be disabled instead. This makes inactive status the practical lifecycle control, although the table does not explain this restriction.

### 13A.2 Student scholarship review workspace

The route `/admin/admissions/:admissionId/scholarships` uses `student-scholarships.component.{ts,html,scss}`. It is normally reached from the approved-student/application action workflow and is not a top-level sidebar destination. The page begins with a **Students** back link to `/admin/admissions/approved`.

The student context card shows name, student ID, course, status, academic session, current semester/year, billing cycle and college. This gives the Admin billing context before applying a financial adjustment.

The workspace contains four local tabs rather than child routes:

| Tab | Purpose | Count |
|---|---|---|
| Overview | Financial summary, fee-period totals and support panels | — |
| Scholarships | Assign catalogue schemes and list active assignments | Assignment count |
| One-time discounts | Apply a direct discount to one fee period and list active discounts | Discount count |
| Fee impact | Show aggregate and fee-head-level ledger results | Ledger count |

The active tab is component-local state and is not written to the URL. Refreshing or reopening the route returns to Overview.

### 13A.3 Overview and fee impact UI

Overview opens with five clickable financial tiles: Gross fees, Total concessions, Net payable, Paid and Outstanding. Each navigates to Fee impact. A Fee-period summary table shows period, gross fee, concessions, net payable, paid, balance and payment status. A **Full fee breakdown** button also opens Fee impact.

Two support panels summarize current scholarships and discounts. Their **Manage** actions switch tabs. Empty support content provides a direct path to add a one-time discount.

Fee impact repeats gross charges, total scholarship/discount concessions, net payable, paid and outstanding. Each active academic ledger is rendered as a separate card with period, session, fee book, payable, outstanding and payment status. The detailed native table shows fee head, adjustment type, period, gross charge, concession, net impact, paid, balance, due date and status. Scholarship and one-time discount rows are visually marked as adjustments, and period totals are shown in the table footer.

This is the strongest part of the current design because it makes ledger recalculation visible at fee-head level. It is also the densest: on small screens it relies on horizontal scrolling, has no pinned identifying column, and does not show a detailed provenance or change timeline for each adjustment.

### 13A.4 Scholarship assignment workflow

The Scholarships tab contains an assignment workspace with:

- **Scholarship scheme** — active schemes only; already-active assignments are excluded. Options show the configured percentage, INR value or `Custom value`.
- **Calculation** and value — displayed for custom schemes; percentage is capped at 100.
- **Application** — `Recurring · carry forward` or `One-time only`.
- **Fee period** — shown for one-time application and populated from active academic ledgers.
- **Assign scholarship** — disabled until a scheme is selected and while saving.

The assignments table shows scheme, method, benefit, effective period, assigned date, active status and a destructive compact action menu. There is no edit action.

The backend requires an approved student, an active scheme, valid scheme configuration and no duplicate active assignment. Custom schemes require calculation and value. One-time assignments require a valid active academic fee ledger. Successful assignment refreshes all student ledgers; if refresh fails, the new assignment is rolled back.

Removal uses the shared destructive confirmation dialog. The message says the scholarship will be removed from applicable unpaid fee periods and paid records will be preserved. The backend changes the assignment to `removed`, records removed time/admin, refreshes ledgers and restores the active record if refresh fails. The UI has no removal reason, restore action, affected-period preview or visible removal history.

### 13A.5 One-time discount workflow

The Discounts tab is titled **Add one-time discount** and describes the action as an approved exception to one fee period. Its fields are:

- discount name, maximum 120 characters;
- fee period from the student’s active academic ledgers;
- fixed amount or percentage calculation method;
- positive numeric amount, with percentage capped at 100;
- approval note, maximum 1,000 characters, intended for reason, approver and reference number.

The primary action is **Apply discount**. It is disabled while saving or when no ledgers exist, but incomplete name, period and amount are handled later through component/backend validation rather than field-level messages.

The table labelled **Discount history** shows name/created date, method, value, target period/session, internal approval note, active status and a destructive remove menu. Despite the label, the API returns only active discounts; removed records are therefore not visible in this table.

The backend requires a valid active academic ledger containing a Tuition Fee entry. It creates an active `studentDiscounts` record and recalculates ledgers. Removal is a soft-status change to `removed`. If the target fee period has any payment, removal is rejected with the rule that reversal must be handled by Accounts. The UI displays this as a page-local error.

### 13A.6 Current visual language, strengths and gaps

The feature reuses shared Admin cards, tables, controls, notices, compact action menus and confirmation dialogs. Lucide icons distinguish student, graduation, percentage, wallet and receipt concepts. Blue is used for primary actions, green for concession amounts and paid/active states, and a blue-tinted panel emphasizes outstanding balance. Currency is formatted as INR and dates as `dd MMM yyyy`.

Strengths include clear separation between scheme setup and student application, explicit recurring versus one-time behavior, exclusion of inactive/already-assigned schemes, student billing context before mutation, confirmation before removal, and visible aggregate plus fee-head impact.

Current risks and limitations:

- Any authenticated Admin can configure, apply or remove financial concessions; there is no granular finance permission or approval role.
- Approval notes are collected but there is no immutable audit timeline, reviewer identity, evidence export or visible history of removed records.
- The confirmation does not preview the exact fee periods or amount changes affected by removal.
- Page-level errors are not attached to invalid fields, and the discount action can be clicked with incomplete inputs.
- Catalogue, assignment, discount and ledger impact are coupled in one large student workspace, increasing cognitive load.
- Tab state is not URL-backed, and there is no stale-data/recalculation state or retry boundary.
- Fee-impact tables remain wide and desktop-oriented on mobile.
- Terminology varies between scholarship, concession, discount and adjustment; `Discount history` is particularly misleading because only active records are returned.
- There is no direct catalogue usage/history view, bulk assignment, adjustment edit, restore or Accounts reversal workflow.

### 13A.7 Redesign boundaries

A UI redesign may change the shell, tab treatment, cards, forms, table layout, responsive behavior, notices and action-menu placement if it preserves routes and IDs, catalogue CRUD, active/inactive behavior, preconfigured/custom semantics, fixed/percentage validation, recurring/one-time assignment, Tuition Fee targeting, confirmation rules, backend error handling, ledger recalculation and paid-record preservation.

Granular permissions, separated approval roles, immutable audit history, restoring removed assignments, discount reversal through Accounts and changing financial status/lifecycle rules require backend and product changes; they are not UI-only redesign work.

## 14. Minimum screenshot checklist

| Priority | Page/route/state | Role/device/overlay |
|---|---|---|
| 1 | Dashboard `/admin/dashboard`, loaded KPIs | Admin, desktop expanded and collapsed sidebar |
| 2 | Applications `/admin/admissions/applications`, populated + filters | Admin, desktop; filter and quick-preview drawer open |
| 3 | Same, empty/error and mobile table/card | Admin, mobile |
| 4 | Record `/admin/admissions/applications/:id`, overview and application tabs | Admin, desktop |
| 5 | Review `.../:id/review`, pending approval | Admin, desktop; decision/confirmation open |
| 6 | Edit `/admin/admissions/:id/edit`, long populated form | Admin, desktop + mobile section sheet open |
| 7 | New admission `/admin/admission/student`, validation errors | Admin, mobile and desktop |
| 8 | Forms `/admin/admissions/forms`, populated | Admin, desktop; row menu open |
| 9 | Builder `/admin/admissions/forms/:id/edit` | Admin, desktop; field settings drawer and publish-readiness dialog |
| 10 | Approved `/admin/admissions/approved` and student scholarships route | Admin, desktop; discount form/removal confirmation |
| 11 | Promotions `/admin/admissions/promotions`, candidates selected | Admin, desktop |
| 12 | Record deletion `/admin/delete-admissions` | Admin, desktop; destructive confirmation open |
| 13 | Accounts `/admin/accounts`, paid/failed rows | Admin, desktop; filters/menu open |
| 14 | Fee books/heads/scholarships view and create | Admin, desktop (one representative list + form each) |
| 15 | Course fees create matrix, import preview, drafts, view | Admin, desktop; capture all four route modes |
| 16 | Hostel details, structure, rooms, capacity | Admin, desktop; one edit/create overlay |
| 17 | Hostel allocations and overview | Admin, desktop + mobile; allocation stage and vacate confirmation |
| 18 | Master data course and city views/create/edit | Admin, desktop; dependency fields and import state |
| 19 | Login `/login`, error and normal | Unauthenticated, desktop + mobile |

## 15. Final summary

- **Top-level Admin modules:** 6 navigation sections (Home, Admissions, Students, Finance, Hostel, Settings); 10 implementation domains when Accounts, Form Builder, Scholarships, Promotions and deletion are counted separately.
- **Route surface:** 56 Admin child route records after expanding the four mapped route groups: 41 component-bearing route records and 15 redirect records. The 41 include repeated components in different modes/status views and three dynamic master-data patterns; 14 named master types share those view/create/edit patterns. Runtime custom master types may increase reachable pages.
- **Complete:** Dashboard, admission create/list/record/edit/review approval, form library/builder, student scholarship/discount, promotions, deletion, accounts read/receipt, scholarship catalogue, fee configuration modes, six hostel modes and generic master CRUD/import.
- **Partial:** Fee progression execution UI; rejection workflow. Runtime custom-master behaviour is Needs verification.
- **Placeholders:** No explicit placeholder component found.
- **Shared components:** 19 shared UI directories; 10 component families materially used by Admin. Many primitives remain CSS-only.
- **Duplicated components/patterns:** dialogs, drawers, notices, cards, table shells, empty/loading/error states, controls and responsive table strategies (at least 8 duplicated purposes).
- **Major workflows:** 12 mapped above.
- **Missing system states:** global notifications/toasts, offline/error boundary, audit/history, undo/restore, granular authorization, consistent stale/cache state, and pagination/virtualization for most lists.
- **Top redesign risks:** preserving hidden/dynamic routes; accidentally changing backend-dependent validation/status transitions; treating absent permissions/rejection/audit as visual work; breaking multi-mode Finance/Hostel behaviour; and losing responsive admission workflow semantics while replacing duplicated primitives.

### Route recheck

This inventory was rechecked against `frontend/src/app/features/admin/admin.routes.ts` and navigation against `frontend/src/app/features/admin/layout/navigation/admin-navigation.config.ts`. Hidden action routes and legacy redirects are explicitly included above. No Admin page component present in the feature folder was found without a route or reuse path; authentication is routed separately through `/login`.
