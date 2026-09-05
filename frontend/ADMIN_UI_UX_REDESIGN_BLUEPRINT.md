# TASKLY ERP Admin UI/UX Redesign Blueprint

**Status:** Active implementation baseline — Phases 1–2 delivered; Phase 3 admin-wide migration in progress  
**Scope:** Authenticated admin frontend, with a complete admission-system deep dive  
**Date:** 31 August 2026  
**Design direction:** GitHub-like operational clarity, adapted to a high-volume education ERP

---

## Implementation ledger

Use this ledger to resume the redesign without repeating the full-project audit. Update it after every completed slice.

### Delivered

- **Phase 1 foundation:** semantic admin tokens and primitives, compact admin shell/navigation, lazy admin routes, Applications Workbench, shallow preview drawer, dedicated Application Record, UI rules, and Phase 1 regression scenarios.
- **Phase 2 — review and activation:** URL-addressable Application Review, evidence/readiness checks, draft submission handoff, focused activation dialog, and approval removed from list/preview contexts.
- **Phase 2 — form management foundation:** searchable Forms Library, form-specific builder route, and return navigation.
- **Phase 2 — authenticated editing:** dedicated admin Application Editor replacing the applicant component on existing-record edit routes; current-section workspace, section outline, responsive supporting panel, autosave, manual save, upload handling, validation summary, guarded unsaved navigation, and Review handoff.
- **Phase 2 — publishing safety:** form publish-readiness dialog with blocking checks for empty structure, missing required content, duplicate identifiers, broken data/visibility dependencies, invalid patterns, choice configuration, repeatable ranges, and upload rules.
- **Phase 3 — high-volume collection density:** introduced the shared `collection` page layout and applied it to applications, admission forms, master-data directories, fee directories/drafts, scholarships, accounts, promotions, fee progression, deletion governance, and hostel operations. Collection screens now use the full viewport, compact title/toolbars, 40px desktop rows, sticky table headers, reduced decorative elevation, and 44px mobile touch rows. Scholarship and application sub-navigation and form-library metrics were converted from tall cards into compact operational strips.
- **Phase 3 — admin shell refinement:** removed the unrelated global New Admission action from the top header, consolidated the header into one correctly separated breadcrumb trail, reduced shell height, and upgraded the collapsed/hover sidebar with a sky-blue lined surface, translucent hierarchy panels, stronger active tiles, nested navigation rails, and consistent icon states without changing route or flyout behavior.
- **Verification:** TypeScript, formatting, UI-rule and production builds pass. Admissions Phase 2 has four registered Playwright scenarios. The integrated browser is still unavailable, so interactive visual execution remains pending.

### Next Phase 2 slices

1. Replace the admin **new application** path once an authenticated create-admission contract exists; it currently remains on the legacy applicant orchestration because frontend scope must not invent backend behavior.
2. Add builder preview, version history, duplicate/archive governance, and stronger content lint navigation.
3. Build Enrollment Readiness and archive/governance queues; remove ordinary delete navigation.
4. Finish admission E2E/accessibility/responsive/visual execution, then remove remaining legacy admission component selectors and redirects after parity.

---

## 1. Executive decision

TASKLY ERP should not be reskinned as another card-heavy dashboard. Its admin frontend should be reorganized around a small set of repeatable work patterns: **find a record, understand its state, complete the next task, and verify the result**.

The proposed product character is:

> A quiet, information-dense enterprise interface that combines GitHub's clarity, Meritto's enrollment workflow coverage, Salesforce's 360-degree record model, and Unstop's staged journeys—without visually cloning any of them.

The redesign must change information architecture and responsibility boundaries before it changes decoration.

### Structural decisions

| Area                  | Decision                                                                                                                                            |
| --------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| Navigation            | Stable global shell, domain navigation, local module navigation, and URL-backed record tabs; no hover-dependent expanding sidebar                   |
| Admissions            | One applications workbench with saved views and role queues; approved students move conceptually into the Student Registry                          |
| Record handling       | Lightweight preview drawer plus a dedicated full record route; no full CRM record inside a modal                                                    |
| Admission workflow    | One current form section at a time, compact progress, right section navigator, sticky actions, and a final review                                   |
| Approval              | Review first; then a focused activation step. Do not expose decision, credentials, fee period, and every other action simultaneously                |
| Data pages            | Standard collection workbench with server pagination, filters, saved views, column controls, bulk mode, and explicit states                         |
| Configuration         | Separate lists, create/edit routes, builders, imports, and destructive workflows instead of putting them on one screen                              |
| Visual system         | Neutral surfaces, retained blue brand accent, thin borders, minimal shadow, compact typography, and restrained radius                               |
| Frontend architecture | Lazy domain route boundaries, smaller page containers, domain data-access layers, and modular design-system styles                                  |
| Migration             | Strangler migration: build new patterns, migrate one workflow at a time, redirect legacy routes, and delete legacy UI only after parity is verified |

### The five questions every admin screen must answer

1. Where am I?
2. What record, queue, or configuration am I working on?
3. What needs attention?
4. What is the next safe action?
5. What changed after I acted?

If a page cannot answer those questions quickly, it is not finished.

---

## 2. Research basis and limitations

### What was directly audited

- The Angular route tree, admin shell, every current admin feature template, shared UI components, token files, global style system, API client, and admission form engine.
- Template complexity, route coupling, selector growth, component responsibility, build budgets, and existing end-to-end test coverage.
- Current admission states and UI/API behavior needed to understand the frontend workflow.
- A production build and the project's UI-rule check.

### Visual inspection limitation

The in-app browser surface was unavailable in this workspace session, so a click-through visual audit could not be completed here. The current-state findings in this document are therefore **code-verified**, while pixel-level observations still require a later walkthrough at 1440px, 1280px, 1024px, 768px, and 390px widths.

Meritto and Unstop's full admin products are authenticated. Their verified findings below come from public product pages, help-center workflows, and public screenshots—not assumptions about inaccessible screens.

### Benchmark synthesis

| Reference                 | What to adopt                                                                                                                                                     | What not to copy                                                 |
| ------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------- |
| GitHub / Primer           | Calm density, compact typography, borders, familiar navigation, composable filters, command palette, predictable actions, accessibility, design-system governance | GitHub-specific repository metaphors or a literal visual clone   |
| Meritto                   | Enrollment lifecycle, unified application profile, review queues, document verification, contextual overlays, drill-down dashboards, bulk workflows               | Its exact styling or every CRM feature before TASKLY supports it |
| Unstop                    | Explicit staged setup, rounds/journeys, structured assessment configuration, process analytics                                                                    | Consumer/marketing decoration inside operational ERP screens     |
| Salesforce Lightning      | Highlights header, details/related/activity separation, record tabs, contextual quick actions, density options                                                    | Excessive tab depth or platform-specific terminology             |
| Carbon / Atlassian        | Enterprise shell, table workbenches, batch mode, URL-persisted filters, semantic tokens, layout primitives, enforcement                                           | A second off-the-shelf visual identity                           |
| Material adaptive layouts | List-detail and supporting-pane behavior across breakpoints                                                                                                       | A generic Material appearance                                    |

Primary references:

- [Primer Product UI](https://primer.style/product/), [Primer layout](https://primer.style/product/getting-started/foundations/layout/), [Primer typography](https://primer.style/product/getting-started/foundations/typography/), [Primer forms](https://primer.style/product/ui-patterns/forms/), and [Primer filters](https://primer.style/product/scenario-patterns/filter/).
- [Meritto education CRM](https://www.meritto.com/education-crm/), [online-degree admissions platform](https://www.meritto.com/admission-software-for-online-courses/), [DocVerify](https://www.meritto.com/post-application-automation/docverify/), and [Application Manager resubmission](https://support.meritto.com/hc/en-us/articles/37470986940825-Overview-of-Resubmission).
- [Unstop employer platform](https://unstop.com/employers/amp), [campus hiring workflow](https://unstop.com/blog/unstop-campus-hiring-platform), and [assessment creation workflow](https://unstop.com/blog/creating-hiring-assessment-on-unstop).
- [Salesforce record form](https://developer.salesforce.com/docs/platform/lightning-component-reference/guide/lightning-record-form.html) and [Salesforce DataTable](https://developer.salesforce.com/docs/platform/lightning-component-reference/guide/lightning-datatable.html).
- [Carbon data table](https://carbondesignsystem.com/components/data-table/usage/), [Carbon filtering](https://carbondesignsystem.com/patterns/filtering/), [Atlassian design tokens](https://atlassian.design/tokens/design-tokens), and [Atlassian grid](https://atlassian.design/foundations/grid-beta/applying-grid).
- [WCAG 2.2](https://www.w3.org/TR/WCAG22/) and the [WAI-ARIA Authoring Practices patterns](https://www.w3.org/WAI/ARIA/apg/patterns/).

---

## 3. Current admin frontend: evidence-backed inventory

### 3.1 Quantitative baseline

| Evidence                                  |                        Current result | Meaning                                                                                           |
| ----------------------------------------- | ------------------------------------: | ------------------------------------------------------------------------------------------------- |
| Admin feature surface                     |              41 files / ~17,783 lines | The redesign is a product migration, not a page-level restyle                                     |
| Concrete admin screen patterns            |                                    36 | The route tree is broad, but many routes are modes of a few oversized components                  |
| Admin template controls                   | 234 buttons / 103 inputs / 86 selects | Action and form density needs governed composition and progressive disclosure                     |
| Admin data/overlay surface                |         22 tables / 21 dialog markers | Common table, overlay, focus, and state behavior is now essential infrastructure                  |
| Source files under `frontend/src`         |                                   177 | Admin and student systems are already substantial                                                 |
| Global `_system.scss`                     |           8,767 lines / 188,554 bytes | One stylesheet has become a second application architecture                                       |
| Unique class references in `_system.scss` |                                   501 | The global contract mixes primitives, pages, shell, builders, and legacy selectors                |
| `erp-` vs non-`erp-` unique classes       |                            180 vs 321 | Naming/governance is inconsistent despite the current rule set                                    |
| Media queries in `_system.scss`           |                                    48 | Responsive behavior is duplicated across global page-specific sections                            |
| Admin shell template                      |                           1,058 lines | Navigation, flyouts, search, state, profile, and utilities are concentrated in one component      |
| Hostel template                           |                           2,463 lines | Six routes are rendered by one page subsystem                                                     |
| Fee template                              |                           1,825 lines | Multiple fee products and modes are rendered by one page subsystem                                |
| Admissions directory template             |                             609 lines | List, bulk fees, account activation, record detail, application data, and fee period are combined |
| Production initial bundle                 |                           2.22 MB raw | It exceeds the configured 2.10 MB error budget                                                    |
| Global styles bundle                      |                         277.84 kB raw | Styling architecture is materially contributing to payload and maintenance cost                   |
| Admin Playwright coverage                 |                         0 admin specs | Current E2E coverage is student-focused only                                                      |

`npm run check:ui` passes, but `npm run build` fails the initial bundle budget. The rule set catches some local violations but does not catch oversized page responsibilities or the global stylesheet becoming a monolith.

### 3.2 Current route-level information architecture

```text
Admin shell
├─ Dashboard
├─ Master data
│  ├─ Generic master: create / view / edit
│  ├─ Hostel details
│  ├─ Hostel structure
│  ├─ Hostel rooms
│  ├─ Hostel capacity
│  ├─ Hostel allocation
│  └─ Hostel overview
├─ Form builder
├─ Admissions
│  ├─ New student admission
│  ├─ Edit admission
│  ├─ Unfilled data
│  ├─ Not approved students
│  ├─ Approved students
│  ├─ Student scholarships
│  ├─ Promotions
│  └─ Delete admissions
├─ Fee management
│  ├─ Fee books: create / view / edit
│  ├─ Fee heads: create / view / edit
│  ├─ Scholarships: create / view / edit
│  ├─ Hostel fees: create / view
│  ├─ Course fees: create / import / drafts / view
│  └─ Fee progression
└─ Accounts
```

The route count is not the problem by itself. The problem is that routes frequently change a `mode` or `section` inside the same very large component, so page boundaries do not produce code, styling, state, or cognitive boundaries.

### 3.3 Root causes of clutter

| Root cause                         | Current evidence                                                                                                | User impact                                                                       |
| ---------------------------------- | --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- |
| State names are treated as modules | “Unfilled data,” “Not approved students,” and “Approved students” are separate destinations                     | Admins must learn navigation labels instead of working from one application model |
| Multiple responsibilities per page | Admissions combines directory, record detail, approval, credentials, fee period, and ledger actions             | Users see unrelated actions before understanding the record                       |
| Full records inside overlays       | The application drawer is 720px wide and contains overview, application sections, actions, and finance settings | Deep work has no stable URL, weak orientation, and cramped hierarchy              |
| Repeated navigation layers         | Sidebar flyout + admission workspace switcher + page header + drawer tabs + section nav                         | The same location/status is represented several times                             |
| Mega-components                    | Hostel, fees, shell, builder, and admissions have hundreds of branches and handlers                             | Visual consistency and safe change become difficult                               |
| Cross-portal coupling              | Admin create/edit imports the student `DynamicAdmissionComponent`                                               | Admin and applicant contexts inherit each other's behavior and presentation       |
| Global CSS owns feature pages      | `_system.scss` contains migrated shell, auth, dashboard, builder, and admission page styling                    | One change can affect unrelated pages and all styles load up front                |
| Static admin imports               | Almost every admin feature is statically imported by policy                                                     | Initial bundle grows with every ERP module                                        |
| Inconsistent icon treatment        | Lucide icons coexist with glyphs such as `＋`, `×`, `‹`, and `›`                                                | The product feels assembled rather than governed                                  |
| No standard state model            | Loading, empty, no-results, permission, and failure handling vary by page                                       | Admins cannot predict what the interface is doing                                 |

### 3.4 Admission-specific findings

1. **The applications component is an entire subsystem.** It owns status directories, selection, bulk fee generation, fee periods, account activation, password reset, approval, quick actions, and record/application rendering.
2. **Approval can start from the row menu before a structured review.** The same dialog asks for admission approval, academic position, fee frequency, and temporary credentials.
3. **The detail drawer is doing full-page work.** It contains administrative actions, high-value facts, fee settings, and all dynamic application data.
4. **The workflow shows two progress systems.** The progress header is followed by a horizontal journey rail, even though the existing rule file says long workflows should use a current-section workspace and right navigator.
5. **Admin and student admission contexts are coupled.** Admin routes import the student feature component; new records and edits choose different API behavior inside the same component.
6. **Copy and state semantics drift.** An edit route can still be labeled “New student admission.” “Last updated” currently renders the creation timestamp. The frontend still recognizes a legacy `submitted` state alongside `pending_approval`.
7. **Selection safety is weak.** Selected IDs can remain after a search or page change, so a later bulk fee action can target records no longer visible.
8. **Detail feedback is incomplete.** A detail-loading signal is set but not represented in the template, and detail-load failure can be silent.
9. **Destructive removal is a primary destination.** It should be a protected archive/governance workflow with dependency impact, not ordinary navigation.
10. **The dynamic form schema permits content-quality drift.** Current data includes inconsistent capitalization, typographical errors, and weak help/validation content; the builder needs publishing-quality checks as well as layout controls.

These are not solved by reducing `font-size`. They require new boundaries.

### 3.5 Scale, accessibility, and governance gaps

- Admissions and Delete Admissions are the only current directories using true server pagination. Fee Management paginates already-downloaded arrays; most other directories are unbounded.
- Master Data requests a fixed maximum of 100 records without directory pagination, so later records can become unreachable. The Hostel student chooser silently limits its option set to 40. Both patterns fail far below the intended scale.
- The 22 current tables have no table captions or sortable-header semantics. Custom tabs lack the WAI-ARIA tab model, and only 14 focus traps were found across 21 dialog markers.
- The dynamic field renderer presents its visual label as a `span` rather than a programmatically associated `label`, and does not provide a consistent touched/invalid error presentation.
- There is no reusable admin data-table, filter bar, drawer shell, route tab set, bulk toolbar, breadcrumb, toast, or object-page pattern. Features therefore reproduce different versions of the same interaction.
- The only shell-level authorization boundary is the authenticated-admin guard. Navigation has no current role, capability, campus-scope, or action-level permission model.
- Several installed frontend systems are not currently used in source: NgRx, Angular Material, and ECharts. Tailwind is loaded but is effectively absent from admin templates. Phase 1 must either assign a governed purpose to a dependency or remove it from the shipped surface.
- `styles.scss` imports the UI font at runtime from Google Fonts and also globally loads student-theme styling. The redesign should self-host its typeface and ensure portal/feature styles load only where needed.
- The current UI checker explicitly enforces the old lazy-loading policy and exempts the global system stylesheet from important raw-style checks. Its passing result is therefore not evidence of scalable page architecture or design-system compliance.

---

## 4. Target experience principles

### 4.1 Calm density

- Fit more useful information by removing repeated headings, oversized controls, empty decoration, and nested cards.
- Do not make core data tiny. Default body text remains 14px; dense table text may be 13px.
- Use proximity, alignment, weight, and separators before color or elevation.
- One page has one dominant purpose and usually one primary action.

### 4.2 Progressive disclosure

- Show identity, state, blockers, and the next action first.
- Put infrequent actions in menus.
- Put supporting context in a rail or preview drawer.
- Put long or risky tasks on dedicated pages.
- Never display every field, filter, action, and related record at once.

### 4.3 Stable orientation

- The shell does not expand because the pointer crosses it.
- Page titles, breadcrumbs, active navigation, and record identity remain stable.
- Tabs that represent routes update the URL.
- Filters, sorting, pagination, and saved view IDs are serializable in the URL.

### 4.4 Workflow over database structure

- Navigation reflects admin jobs: Review applications, Verify documents, Activate students, Allocate rooms.
- Database states become saved views and queue filters, not an explosion of primary navigation items.
- Configuration is separated from daily operational work.

### 4.5 Safe action design

- The highest-frequency safe action may be visible; the rest move to an overflow menu.
- Destructive or irreversible actions show scope, dependency impact, and the resulting state.
- Bulk mode replaces the normal toolbar so the current selection and available actions are unmistakable.
- The interface confirms completion and updates the visible record/list state immediately.

### 4.6 Accessibility and input neutrality

- WCAG 2.2 AA is a phase-one constraint, not a final polish task.
- Every interaction works with mouse, keyboard, touch, zoom, and reduced motion.
- No function depends only on hover, drag, color, or an unlabeled icon.

---

## 5. Target shell and information architecture

### 5.1 Navigation layers

```text
┌──────────────────────────────────────────────────────────────────────────────┐
│ Global header: institution/campus · global search · help · alerts · profile │
├──────────────────┬───────────────────────────────────────────────────────────┤
│ Domain sidebar   │ Breadcrumbs / local module context                       │
│                  ├───────────────────────────────────────────────────────────┤
│ Home             │ Page header: title · state · one primary action          │
│ Admissions       ├───────────────────────────────────────────────────────────┤
│ Students         │ Local views / tabs / filters                             │
│ Finance          │                                                           │
│ Hostel           │ Page content or record workspace                         │
│ Reports          │                                                           │
│                  │                                                           │
│ Settings         │                                                           │
└──────────────────┴───────────────────────────────────────────────────────────┘
```

1. **Global header:** institution/campus context, `Ctrl/Cmd+K` global search/commands, help, notifications, profile.
2. **Domain sidebar:** Home, Admissions, Students, Finance, Hostel, Reports, Settings. Only supported modules are visible.
3. **Local module navigation:** Overview, Applications, Review, Enrollment, and similar peers. It lives inside the active domain, not as a second competing global sidebar.
4. **Record/page navigation:** URL-backed tabs or section anchors immediately above the content they control.

### 5.2 Recommended shell dimensions

| Element         | Expanded desktop | Compact desktop/tablet |                 Mobile |
| --------------- | ---------------: | ---------------------: | ---------------------: |
| Global header   |             52px |                   52px |                52–56px |
| Sidebar         |            240px |  64px, explicit toggle |           Route drawer |
| Page padding    |             24px |                   16px |                12–16px |
| Content gap     |             24px |                   16px |                12–16px |
| Supporting rail |        280–320px |      Side sheet or tab | Separate route/section |

The sidebar should use a neutral surface and subtle border. The university blue remains the brand/action/active accent rather than filling the entire navigation with a strong gradient.

### 5.3 Target domain map

```text
Home

Admissions
├─ Overview
├─ Applications
├─ Review queues
├─ Enrollment readiness
└─ Admissions reports              [when supported]

Students
├─ Student directory
├─ Academic progression
└─ Student record
   ├─ Overview
   ├─ Profile
   ├─ Academics
   ├─ Finance
   ├─ Scholarships and discounts
   ├─ Hostel
   └─ Activity / audit

Finance
├─ Overview
├─ Student accounts
├─ Fee books
├─ Fee heads
├─ Course fee structures
├─ Hostel fee structures
├─ Scholarship catalog
├─ Imports and drafts
└─ Transactions / reconciliation

Hostel
├─ Overview
├─ Hostel properties
├─ Blocks, floors, and rooms
├─ Capacity and availability
└─ Allocations

Reports                              [show only when implemented]

Settings
├─ Admission forms and portal
├─ Reference / master data
├─ Academic configuration
├─ Users, roles, and permissions    [show only when implemented]
└─ Archive and governance
```

### 5.4 Information-architecture rules

- “Create,” “View,” and “Edit” are routes/actions, not global navigation categories.
- Statuses such as Draft, Submitted, Approved, and Archived are saved views within a collection.
- A student becomes a Student Registry record after approval/activation; admissions does not remain the owner of the entire student lifecycle.
- Academic progression belongs to Students/Academics, not Admissions.
- Scholarship definitions belong to Finance configuration; a student's scholarship assignment belongs on the student record.
- Form Builder belongs to Admissions Settings and receives its own full workbench route.
- Master data is configuration, not daily primary navigation.
- Destructive removal belongs to protected governance/archive flows.

---

## 6. Canonical page taxonomy

Every admin route must use one of these named page templates.

| Template              | Purpose                                                           | Required regions                                                         |
| --------------------- | ----------------------------------------------------------------- | ------------------------------------------------------------------------ |
| Module overview       | Orient a role and surface work needing attention                  | Context selector, limited KPIs, queues, trend, recent activity           |
| Collection workbench  | Find, compare, filter, select, and act on records                 | Header, saved views, query toolbar, data region, pagination, preview     |
| Record detail         | Understand one entity and its related work                        | Identity header, route tabs, primary content, supporting rail, activity  |
| Create/edit form      | Enter a focused set of fields                                     | Header, form surface, validation, sticky actions                         |
| Guided workflow       | Complete ordered or long dynamic work                             | Progress, current section, section navigator, save state, sticky actions |
| Review workspace      | Process a queue efficiently                                       | Queue/list, current record, evidence, decision rail                      |
| Configuration builder | Manipulate structure and properties                               | Workbench toolbar, outline, canvas, inspector, preview/publish state     |
| Import workflow       | Upload, map, validate, confirm, and review results                | Step state, error grid, summary, recoverable job history                 |
| Analytics/report      | Explore and explain aggregated data                               | Scope/date filters, summary, chart/table, drill-down/export              |
| System state          | Explain loading, empty, no-results, error, permission, or offline | Clear state, recovery action, support context                            |

### 6.1 Overlay decision matrix

| Pattern              | Use it for                                                            | Do not use it for                               |
| -------------------- | --------------------------------------------------------------------- | ----------------------------------------------- |
| Tooltip              | Short label or explanation                                            | Critical instructions or interactive content    |
| Action menu          | Small immediate action set                                            | Forms or multi-step work                        |
| Popover/select panel | Searchable choice or brief contextual content                         | Long editing                                    |
| Inline expansion     | One row's secondary details                                           | Full record history                             |
| Right preview drawer | Preview, triage, or repeated short edit while preserving list context | Full 360-degree record or long form             |
| Modal                | Confirmation, decision, or focused task with few inputs               | Multi-section form, record page, or nested tabs |
| Dedicated page       | Long, risky, linkable, collaborative, or multi-section work           | Tiny confirmation                               |
| Wizard/workflow      | Truly ordered steps with dependency or validation                     | Unrelated peer content                          |

### 6.2 Card and panel rules

- A card groups one coherent subject; it is not the default wrapper around every element.
- Cards are never nested inside decorative cards.
- Use a divider or whitespace for subgroups before adding another surface.
- Operational pages use flat white panels on a neutral canvas with 1px borders.
- Shadows are reserved for overlays and rare floating layers.
- A dashboard may use KPI cards, but every KPI must drill into a filtered operational view.

---

## 7. Admissions: target product architecture

### 7.1 Lifecycle model

```text
Future inquiry/lead
        ↓
Draft application
        ↓ submit
Submitted / awaiting review
        ↓ review
Decision and activation
        ↓
Enrollment readiness
        ↓
Active student record
```

Current backend statuses can map into this UI immediately:

| Current state      | UI label                              | Primary home                              |
| ------------------ | ------------------------------------- | ----------------------------------------- |
| `draft`            | Draft / incomplete                    | Applications saved view                   |
| `pending_approval` | Awaiting review                       | Review queue                              |
| `approved`         | Active / approved                     | Student Registry and applications history |
| Legacy `submitted` | Normalize visually to Awaiting review | Compatibility only                        |

Future stages—document review, interview, offer, rejected, withdrawn—must remain hidden until their domain contracts exist. The architecture reserves space without creating empty navigation.

### 7.2 Target admission routes

```text
/admin/admissions/overview
/admin/admissions/applications
/admin/admissions/applications/new
/admin/admissions/applications/:id
/admin/admissions/applications/:id/application
/admin/admissions/applications/:id/finance
/admin/admissions/applications/:id/activity
/admin/admissions/applications/:id/edit/:sectionId
/admin/admissions/review
/admin/admissions/enrollment-readiness
/admin/settings/admissions/forms
/admin/settings/admissions/forms/:id/builder
/admin/settings/admissions/archive
```

Legacy status routes should redirect to `/admin/admissions/applications?view=...` so bookmarks continue to work.

### 7.3 Admissions overview

Purpose: tell an admission manager what needs action now.

Recommended regions:

1. Admission cycle/intake selector.
2. Five maximum primary metrics: Drafts, Awaiting review, Approved, Missing fee account, and At risk/blocked when supported.
3. “Work needing attention” queues with counts and oldest age.
4. Conversion/funnel trend only when the data is meaningful and drillable.
5. Program/intake breakdown.
6. Recent decisions and failures.

Do not turn the overview into a wall of 20 independent cards. Every metric opens a filtered workbench.

### 7.4 Applications collection workbench

```text
┌ Applications                                      [New application] ┐
│ All | Drafts | Awaiting review | Approved | My saved views          │
├──────────────────────────────────────────────────────────────────────┤
│ Search applicants…  [Program] [Intake] [More filters]  [Columns ⋯] │
│ Active: B.Tech ×  2026 ×                         1,284 results       │
├──────────────────────────────────────────────────────────────────────┤
│ □ Applicant      Program     Intake   Stage      Updated     ⋯      │
│ □ Asha Verma     B.Tech CSE  2026     Review     2h ago      ⋯      │
│ □ ...                                                               │
├──────────────────────────────────────────────────────────────────────┤
│ 25 / page                   1–25 of 1,284              Prev  Next    │
└──────────────────────────────────────────────────────────────────────┘
```

Default columns:

- Applicant name + application/student ID.
- Program.
- Intake/session.
- Stage/status.
- Completeness or blocker summary.
- Updated time.
- One contextual action menu.

Optional columns belong in the column chooser. Fee-ledger status may be a saved view/filter, but fee configuration should not dominate the admission directory.

Required behaviors:

- Server-side search, filters, sort, and pagination.
- Saved private/team/system views.
- URL-backed view and query state.
- Clear selection whenever query scope changes unless “select all matching results” is explicitly confirmed.
- Bulk mode replaces the toolbar and states exact scope.
- Preview drawer opens on row/identity activation; full record opens via a clear action.
- Loading, initial empty, filtered empty, partial failure, stale data, and permission states.

### 7.5 Preview drawer versus full record

**Preview drawer—fast triage only:**

- Identity, application number, program, intake, stage.
- Three to six key facts.
- Completeness/blockers.
- Last meaningful activity.
- One next action and “Open full record.”

**Dedicated full record:**

```text
Breadcrumbs
┌ Avatar  Applicant name · APP-2026-00123     [Awaiting review] [Review] [⋯] ┐
│ B.Tech CSE · 2026 intake · last updated 2 hours ago                         │
├ Overview ─ Application ─ Finance ─ Scholarships ─ Activity ────────────────┤
│ Main tab content (8–9 columns)                  │ Context rail (3–4 cols)   │
│                                                 │ Stage and progress         │
│ Key facts / blockers / section data             │ Academic position          │
│ Related items / timeline                        │ Linked account / ledger    │
│                                                 │ Important dates            │
└─────────────────────────────────────────────────┴───────────────────────────┘
```

Future Documents, Communications, Evaluations, and Audit tabs can be added when supported. Tabs must be URL-backed and only appear when they provide real content.

### 7.6 Admin create/edit workflow

```text
Application title                                      Saved 10:42
Progress: Section 3 of 8 · 42% complete
┌────────────────────────────────────────────┬────────────────────────┐
│ Current section                            │ Sections               │
│                                            │ ✓ Identity             │
│ Personal details                           │ ✓ Programme            │
│ ─────────────────────────────────────────  │ ● Personal details     │
│ Field                                      │ ○ Address              │
│ Field                                      │ ○ Academics            │
│ Field                                      │ ! Documents            │
│                                            │ ○ Review               │
└────────────────────────────────────────────┴────────────────────────┘
┌ Previous        Save draft                         Save and continue ┐
└──────────────────────────────────────────────────────────────────────┘
```

Rules:

- Admin and applicant/student pages use the same schema/validation engine but different page containers, API facades, copy, routing, and permissions.
- One top-level section is visible at a time.
- A right sticky navigator is used on wide screens; a full-height sheet is used on narrow screens.
- No second horizontal journey rail for long forms.
- Default to one vertical form scan line. Two columns are allowed only for naturally paired short fields.
- Save state is always visible; navigation never hides an unsaved failure.
- A final review lists complete and incomplete sections and takes the admin directly to the failing field/section.
- Error summary appears at the top after submission, with errors also adjacent to fields.
- Edit routes say “Edit application,” not “New admission.”

### 7.7 Review and activation workspace

High-volume review is a separate job, not a row-menu shortcut.

```text
┌ Review queue ───────┬ Application / evidence ───────────┬ Decision ─────┐
│ 34 awaiting review  │ Applicant identity and sections   │ Blockers       │
│ Search / filters    │ Documents/fields needing review   │ Review notes   │
│ Current applicant   │ Change history                    │ Approve /      │
│ Next applicant      │                                   │ return action  │
└─────────────────────┴───────────────────────────────────┴────────────────┘
```

For the current backend contract, approval still needs academic period and initial account credentials. The UI should present these as a focused **activation checklist after review**, not mix them into the initial queue/list interaction:

1. Confirm application completeness.
2. Confirm academic placement and fee frequency.
3. Confirm account activation method.
4. Show exactly what approval will create/change.
5. Submit once and show the resulting student/account state.

When future transitions exist, “Return for correction,” “Reject,” and “Withdraw” should require a reason, generate an activity entry, and expose communication consequences.

### 7.8 Enrollment readiness

The current fee-account generation action should become a task-oriented queue:

- Approved but fee account missing.
- Academic period missing/inconsistent.
- Fee structure not matched.
- Hostel fee pending where relevant.
- Ready and completed.

This keeps financial setup out of the primary application list while still making operational exceptions visible.

### 7.9 Admission form configuration

```text
Forms directory
└─ Form record / versions
   └─ Builder workbench
      ├─ Toolbar: name, version, save state, preview, publish
      ├─ Left: section/subsection/field outline
      ├─ Center: form canvas
      └─ Right: selected item inspector
```

Publishing gates should check:

- Empty or duplicate labels.
- Spelling/casing warnings.
- Missing required-field help or validation messages where necessary.
- Broken dependencies and visibility conditions.
- Empty sections/subsections.
- Invalid upload constraints.
- Missing program/session identity mapping.
- Keyboard order and accessible names.
- Desktop and mobile preview.

Draft, preview, publish, version history, active status, and archive are distinct states/actions.

### 7.10 Archive and destructive actions

- Replace “Delete admissions” primary navigation with Archive/Governance.
- Show linked fees, payments, scholarships, hostel allocation, progression, and account implications before a destructive action.
- Prefer archive/deactivate where business rules allow.
- Require explicit permission, reason, record identity confirmation, and an audit event.
- A destructive action never appears beside the ordinary “Edit” action without separation.

---

## 8. Module-by-module representation plan

### 8.1 Global shell

**Current:** A collapsed-by-default sidebar expands on hover/focus, owns multiple large flyouts, duplicates link descriptions, and places a permanent “New student admission” action in the global topbar regardless of the active module.

**Target:**

- Stable, configuration-driven sidebar with explicit expansion/collapse.
- One level of visible domain navigation; deeper links appear as local module navigation.
- Topbar global search/command palette, institution/campus context, help, notifications, and profile.
- Breadcrumbs generated from route metadata.
- Page-specific primary actions stay in the page header.
- Navigation definitions contain canonical label, route, semantic icon, keywords, required capability, and optional count—not hand-authored repeated markup.
- Split the shell into app header, domain navigation, mobile navigation, profile menu, notification trigger, and breadcrumb components.

### 8.2 Admin dashboard

**Current:** Four counts and a large welcome/flow panel. It describes how the form system works rather than helping an admin run the institution.

**Target role-based command center:**

- Institution/intake/date context at the top.
- Compact operational KPIs with deltas and drill-down links.
- “Needs attention” queue prioritized by age/risk.
- Admissions funnel and program breakdown when available.
- Finance/hostel exceptions relevant to the current role.
- Recent administrative activity and failed jobs.
- Customization by role later, but a curated default first.

Do not show generic configuration counts unless they require action.

### 8.3 Student Registry

**Current:** Approved students remain inside Admissions, and the same admission drawer becomes the nearest thing to a student profile.

**Target:**

- Dedicated Student Directory collection workbench.
- Student identity record with tabs for Overview, Profile, Academics, Finance, Scholarships/Discounts, Hostel, Documents, and Activity as supported.
- Admission application remains a linked originating record.
- Account security actions live in a protected account panel, not beside ordinary admission edits.
- Student promotions/progression live here or under Academics.

### 8.4 Master/reference data

**Current:** Generic create/view/edit routes are a good beginning, but the sidebar exposes a deeply nested flyout and the global stylesheet carries specialized master-page rules.

**Target settings workbench:**

```text
Reference data
┌ Type/category list ─────┬ Records directory ───────────────────────┐
│ Academic               │ Search · parent filter · status · import │
│ University             │ Table                                    │
│ College                │                                          │
│ Department             │ Selecting hierarchical data opens        │
│ Location…              │ a right hierarchy/impact panel           │
└────────────────────────┴──────────────────────────────────────────┘
```

- Type search and categorized list.
- Records directory with parent context, usage count, active state, and row menu.
- Dedicated create/edit page for complex records; short single-value edits may use a side sheet.
- Hierarchy exploration in a right panel with breadcrumbs, following the useful Meritto pattern.
- Import is a staged upload/map/validate/confirm job with downloadable errors.
- Delete/disable includes a usage-impact preview.

### 8.5 Hostel

**Current:** One component renders six routes and combines hostel setup, structure, rooms, configurations, capacity, allocations, transfers, vacancies, filters, tables, dialogs, and drawers.

**Target domain:**

```text
Hostel
├─ Overview
├─ Properties
│  └─ Property record: overview / structure / rooms / fee link
├─ Room inventory
├─ Capacity and availability
└─ Allocations
   ├─ Allocation workbench
   ├─ New allocation workflow
   └─ Transfer / vacate focused actions
```

- Property list and dedicated hostel record.
- Structure editor expresses block → floor → room hierarchy.
- Room inventory uses server filters and a pinned location column.
- Capacity view emphasizes exceptions: overbooked, unavailable, unconfigured, expiring allocations.
- Allocation workflow selects student, session, hostel, room, bed, confirms conflicts, and produces a clear result.
- Transfer and vacate use short focused dialogs/sheets with current and resulting assignments.
- Hostel fee definition remains in Finance, with a contextual link from the hostel record.

### 8.6 Finance and fee management

**Current:** One fee component serves books, heads, hostel fees, course-fee create/import/drafts/view, while scholarships, fee progression, accounts, and student fee actions are spread across other pages.

**Target domain:**

```text
Finance
├─ Overview
├─ Student accounts
├─ Payments
├─ Fee configuration
│  ├─ Fee books
│  ├─ Fee heads
│  ├─ Course fee structures
│  ├─ Hostel fee structures
│  └─ Scholarship catalog
├─ Imports and drafts
└─ Audit / reconciliation
```

Representation rules:

- Fee books and heads use the standard list → create/edit → record flow.
- Course fees use a dedicated matrix editor with sticky identity columns, explicit save state, validation, and draft/version context.
- Imports use five steps: Upload → Map → Validate → Confirm → Results.
- Hostel fee structures are filtered configuration records, not a form above an unlimited table.
- Scholarship catalog defines reusable rules; assignment and fee impact live on the student finance record.
- Fee period progression and academic promotion remain distinct workflows and are linked, not mixed into one table.

### 8.7 Accounts and payments

**Current:** Payment summary, a ten-column payment table, receipt download, and one-time discount audit are stacked on one route. The page has no pagination and the discount audit is a second unrelated table.

**Target:**

- Finance Overview holds collected/pending/refund KPIs.
- Payments gets its own collection workbench with date, status, mode, student, receipt, and amount filters.
- Payment record/preview shows allocation breakdown, gateway identifiers, receipt, audit, and linked student account.
- Discounts get an Audit saved view or dedicated audit page.
- Reconciliation exceptions are a separate task queue.
- Sensitive internal remarks and identifiers use capability-aware column visibility.

### 8.8 Student progression

**Current:** Fee preparation and student promotion are two separate routes but live under different navigation concepts; promotions still repeat the admissions workspace navigation.

**Target:**

- Place Academic Progression under Students/Academics.
- Use saved views: Eligible, Fee period missing, Ready to promote, Promoted, Cancelled.
- Bulk mode shows exact student count and target period.
- Preview affected students and exceptions before commitment.
- Show resulting academic and fee periods after completion.
- Link to Finance's “prepare next fee period” exception view when blocked.

### 8.9 Form Builder

**Current:** The core three-pane idea is appropriate, but form selection, creation, structure, canvas, inspector, publishing, and multiple dialogs remain concentrated in one route/component and styling is duplicated globally.

**Target:**

- Forms Library is a standard directory.
- Each form/version has a dedicated builder route.
- Full-bleed workbench inside the admin shell, with a stable toolbar.
- Left outline contains the complete field hierarchy and search.
- Center canvas represents the actual form at desktop/mobile widths.
- Right inspector owns properties for the selected item.
- Preview, lint, version comparison, publish checklist, rollback, duplicate, and archive are first-class flows.
- Builder state has explicit `Saved`, `Saving`, `Unsaved`, `Save failed`, `Published`, and `Outdated` states.

### 8.10 Login

Admin login is outside the operational shell but still consumes the same typography, field, button, feedback, and accessibility foundations. Decorative treatment can retain stronger brand expression here because it does not compete with operational data.

---

## 9. TASKLY Admin Design System

Working name: **Taskly Admin UI**. It should be a governed internal system, not a collection of SCSS utilities.

### 9.1 System layers

```text
Foundations
  Color · type · spacing · grid · border · radius · elevation · motion · icons
        ↓
Primitives
  Box · Stack · Inline · Grid · Text · Heading · Divider · VisuallyHidden
        ↓
Components
  Buttons · fields · menus · tabs · panels · dialogs · drawers · table · states
        ↓
Patterns
  App shell · collection workbench · record page · workflow · review · import
        ↓
Domain patterns
  Applicant identity · admission stage · fee status · academic period · room locator
        ↓
Page templates
  Overview · collection · record · form · builder · report
```

Feature pages compose patterns and bind business behavior. They do not invent new buttons, tables, cards, headings, modal anatomy, or arbitrary visual values.

### 9.2 Typography

Recommended family: **Inter Variable, self-hosted**, followed by a system-sans fallback. This keeps a clean GitHub-like operational feel while providing stable numerals and consistent rendering on the ERP's likely Windows-heavy admin environment. Use `ui-monospace` only for technical IDs when visual distinction is useful.

All size tokens use `rem`; line-height is unitless.

| Role                 |                   Size / line |  Weight | Usage                      |
| -------------------- | ----------------------------: | ------: | -------------------------- |
| Module landing title |         1.5rem / 2rem (24/32) |     600 | Rare true module overviews |
| Page title           |     1.25rem / 1.75rem (20/28) |     600 | Standard route title       |
| Section title        |         1rem / 1.5rem (16/24) |     600 | Major page groups          |
| Panel/table title    |    0.875rem / 1.25rem (14/20) |     600 | Cards and data regions     |
| Body/control         |    0.875rem / 1.25rem (14/20) | 400–500 | Default UI                 |
| Dense table          |  0.8125rem / 1.125rem (13/18) | 400–600 | High-volume rows           |
| Label                |  0.8125rem / 1.125rem (13/18) | 500–600 | Form labels                |
| Caption/meta         |        0.75rem / 1rem (12/16) | 400–500 | Supporting metadata        |
| KPI numeral          | 1.5–1.75rem / 2rem (24–28/32) |     600 | Limited overview metrics   |

Rules:

- Sentence case for page titles, field labels, buttons, tabs, table headers, and statuses.
- One semantic `h1` per route; heading order follows structure, never appearance.
- Color is not the primary hierarchy mechanism.
- Body copy is left-aligned and generally limited to about 72–80 characters.
- Dates, money, counts, and table-aligned values use tabular numerals.
- Descriptions are optional and removed when they simply restate the title.

### 9.3 Color and surfaces

Preserve the existing university blue identity, but remove the constant blue/green cast from structural surfaces.

| Token role                  | Direction                                                    |
| --------------------------- | ------------------------------------------------------------ |
| Canvas                      | Cool neutral light gray                                      |
| Primary surface             | White                                                        |
| Subtle surface              | Neutral gray for toolbars, headers, selected rows            |
| Border default              | Neutral medium-light gray with reliable non-text contrast    |
| Text strong                 | Near-black neutral                                           |
| Text body                   | Dark neutral                                                 |
| Text muted                  | Medium neutral that still meets AA                           |
| Brand/action                | Restrained university blue                                   |
| Focus                       | High-visibility blue ring, not just a border change          |
| Success/warning/danger/info | Semantic pairs with text, background, border, and icon roles |

Rules:

- Blue means link, primary action, active navigation, or focus—not “everything important.”
- Status uses text plus icon/shape where needed; never color alone.
- Gradients are limited to auth/brand or rare illustration contexts.
- Tables and forms live mostly on neutral surfaces.
- Dark mode remains token-ready but is not a phase-one priority.
- Every token pair is contrast-tested before approval.

### 9.4 Spacing, sizing, and density

Core spacing scale: **4, 8, 12, 16, 20, 24, 32, 40, 48px**.

| Element             | Default | Compact |        Touch/narrow |
| ------------------- | ------: | ------: | ------------------: |
| Button/input height |    36px |    32px |             40–44px |
| Table row           | 44–48px |    40px | Card/row adaptation |
| Table header        |    40px |    36px |             40–44px |
| Icon-only action    | 32–36px |    32px |             40–44px |
| Panel padding       |    16px |    12px |             12–16px |
| Major section gap   | 24–32px |    24px |             20–24px |

Density is a deliberate variant:

- **Comfortable:** default for onboarding, forms, and mixed-skill roles.
- **Compact:** default for expert, high-volume tables.
- **Touch:** automatically increases targets without inflating typography.

Do not globally solve density by shrinking everything or by using 48px controls everywhere.

### 9.5 Grid and page width

- 12-column desktop, 6-column tablet, 2-column narrow composition grid.
- 16px gutter at medium widths and 24px at large widths.
- Focused form content: approximately 720–840px maximum.
- Standard record content: approximately 1,280–1,440px maximum.
- Data workbenches: fluid width with sensible minimum column behavior.
- Record page: 8/4 or 9/3 main/supporting split.
- Narrative text never stretches across the full data-workbench width.

### 9.6 Border, radius, and elevation

| Element      | Recommended treatment                                        |
| ------------ | ------------------------------------------------------------ |
| Control      | 1px border, 6px radius                                       |
| Card/panel   | 1px border, 6–8px radius                                     |
| Menu/popover | 8px radius, compact overlay shadow                           |
| Drawer/modal | 8–12px radius where edges are not flush                      |
| Badge/pill   | Fully rounded only when semantically a compact status/filter |

- Remove lift-on-hover from ordinary cards.
- Do not use shadow to separate every page section.
- Use border and whitespace for persistent hierarchy; shadow for floating layers.

### 9.7 Icon system

TASKLY should own the **meaning and governance** of its icon system while using Lucide as the geometric base.

| Domain                | Canonical semantic icon          |
| --------------------- | -------------------------------- |
| Home                  | `LayoutDashboard`                |
| Admissions            | `ClipboardList`                  |
| Applications          | `Files`                          |
| Review                | `ClipboardCheck`                 |
| Students              | `UsersRound`                     |
| Academics/progression | `GraduationCap` / `CalendarSync` |
| Finance               | `ReceiptIndianRupee`             |
| Payments              | `CreditCard`                     |
| Scholarships          | `Award`                          |
| Hostel                | `Building2`                      |
| Rooms/beds            | `DoorOpen` / `BedDouble`         |
| Reports               | `ChartNoAxesCombined`            |
| Master data           | `Database`                       |
| Form builder          | `LayoutTemplate`                 |
| Settings              | `Settings2`                      |
| Audit/activity        | `History`                        |

Registry rules:

- 16px standard control icon, 20px navigation icon, 24px feature/empty-state icon.
- 1.75px target stroke, optically reviewed rather than mechanically scaled.
- Every icon has a canonical name, meaning, contexts, accessible-label rule, and state pair if relevant.
- Text labels remain for navigation and unfamiliar domain concepts.
- No Unicode action glyphs, emoji, mixed icon packs, or arbitrary per-page colors.
- Custom SVGs are created only for genuinely domain-specific objects such as Admission Cycle, Merit List, Fee Ledger, Enrollment, and Hostel Allocation.

### 9.8 Motion

Motion is feedback, not decoration.

| Motion              |    Duration | Use                                             |
| ------------------- | ----------: | ----------------------------------------------- |
| Micro feedback      |    80–120ms | Press, focus, checkbox, menu item               |
| Standard transition |   160–180ms | Disclosure, tab underline, compact state change |
| Overlay             |   200–240ms | Drawer/modal/popover enter/exit                 |
| Complex reflow      | Up to 280ms | Rare builder/list-detail transitions            |

- Use opacity/transform where possible.
- Do not animate table data for spectacle.
- Avoid constant pulse unless communicating a short active process.
- Preserve location during drawer/route transitions.
- `prefers-reduced-motion` reduces all nonessential animation to effectively instant.

### 9.9 UI content

- Use direct nouns and imperative verbs: “Approve application,” “Save fee structure,” “Archive form.”
- Replace “Admission Unfilled Data” with “Draft applications.”
- Replace “Not Approved Students” with “Awaiting review.”
- Distinguish applicant, application, student, account, and enrollment.
- Error text explains what failed, why when known, and what the admin can do next.
- Confirmation text names the exact record and resulting state.
- Avoid repeated marketing-style descriptions on operational pages.

---

## 10. Component and pattern catalog

The library should distinguish a reusable visual component from a workflow pattern. A button is a component; a collection workbench is a pattern composed from many components.

### 10.1 Foundations and primitives

| Asset                       | Contract                                                  |
| --------------------------- | --------------------------------------------------------- |
| `Text` / typography classes | Semantic size, weight, color, truncation, tabular numbers |
| `Heading`                   | Semantic heading level independent from visual style      |
| `Stack`                     | Vertical layout with tokenized gap and alignment          |
| `Inline`                    | Horizontal/wrapping layout with tokenized gap             |
| `Grid`                      | Responsive column composition                             |
| `Box` / surface             | Background, border, padding, radius via governed variants |
| `Divider`                   | Horizontal/vertical semantic separator                    |
| `VisuallyHidden`            | Accessible names and supplementary content                |
| `FocusRing`                 | One consistent focus treatment                            |
| `ScrollableRegion`          | Named overflow region with keyboard/edge behavior         |

### 10.2 Core components

| Component            | Required variants / behavior                                                                     |
| -------------------- | ------------------------------------------------------------------------------------------------ |
| Button               | Primary, secondary, invisible/ghost, danger; small/default/large; loading; icon-leading/trailing |
| Icon button          | Accessible label required, tooltip where useful, selected/toggled state                          |
| Link                 | Inline, muted, standalone; external/download indicators                                          |
| Field wrapper        | Label, required/optional, help, error, character count, described-by wiring                      |
| Text input           | Text/email/number/date/search states; prefix/suffix only when meaningful                         |
| Textarea             | Autosize bounds, count, validation                                                               |
| Select               | Native for small static lists; consistent label/error behavior                                   |
| Combobox             | Async search, grouped options, empty/loading/error, keyboard navigation                          |
| Checkbox/radio       | Compact groups, strong selected state, description support                                       |
| Switch               | Immediate boolean settings only; not form submission choices                                     |
| File upload          | Type/size help, progress, preview, replace/remove, error, security state                         |
| Badge/status         | Neutral, info, success, warning, danger; text always present                                     |
| Avatar/identity      | Image/initial fallback, primary and secondary labels                                             |
| Breadcrumbs          | Route-derived, collapsed middle items at narrow widths                                           |
| Tabs                 | URL-backed nav tabs and local panel tabs as separate APIs; keyboard semantics                    |
| Segmented control    | Two to four mutually exclusive display modes; not page navigation                                |
| Menu                 | Keyboard roving focus, separators, destructive grouping, shortcut labels                         |
| Tooltip              | Noninteractive short help; hover and focus behavior                                              |
| Popover              | Contextual interactive content with focus/escape behavior                                        |
| Dialog               | Focus trap/return, semantic title, Escape, safe primary/destructive ordering                     |
| Drawer/sheet         | Preview, filters, or short focused edit; correct modal/non-modal semantics                       |
| Toast                | Short completion/failure feedback with accessible live region                                    |
| Banner/notice        | Persistent page-level status, optional recovery action                                           |
| Card/panel           | Flat, bordered, header/body/footer slots; no decorative variants by default                      |
| Accordion/disclosure | Section grouping with stable keyboard behavior; state not hidden accidentally                    |
| Progress             | Determinate/indeterminate; text equivalent                                                       |
| Skeleton             | Matches final layout; no perpetual decorative shimmer                                            |
| Empty state          | Initial empty vs no results vs no permission vs error variants                                   |
| Pagination           | Result range, page size, previous/next, optional direct page navigation                          |
| Data table/grid      | Typed cells, sticky header, sort, selection, density, column controls, states                    |
| Activity timeline    | Actor, action, object, timestamp, metadata, expandable detail                                    |

### 10.3 Collection workbench pattern

An ERP table is a task surface, not raw `<table>` markup with a search box.

Required anatomy:

1. Page header and primary create/import action.
2. System/saved views with counts where reliable.
3. Query toolbar: search, three to five quick filters, More filters.
4. Active-filter chips and result count.
5. Utility controls: Sort when not in headers, Columns, Density, Refresh, Export.
6. Data region with sticky headers and stable primary column.
7. Contextual selection/batch toolbar.
8. Pagination or cursor control.
9. Preview side sheet when the domain benefits from triage.

Table rules:

- Use semantic HTML tables for read-oriented data. Use an ARIA grid only when spreadsheet-like keyboard editing is truly required.
- Server-side pagination is the default for growing ERP entities.
- Client filtering/pagination is allowed only for explicitly bounded configuration lists.
- Default to 25 or 50 rows; 100 is an expert option when performance allows.
- Sticky header and optionally pinned primary identity column.
- Row click does not hide link semantics; the primary identity is a real link.
- One heavily used row action may be visible. Remaining actions use the standardized menu.
- Horizontal scroll is allowed for genuinely two-dimensional information, with frozen identity/context where feasible.
- Sorting shows direction and returns to the first page/cursor scope.
- Empty table, no search results, loading, retryable error, partial data, and permission restriction are different states.

### 10.4 Filters and saved views

Borrow the composability of GitHub filters but keep a visual builder for nontechnical admins.

Each saved view stores:

- Scope/institution/intake.
- Search and filter expression.
- Sort and grouping.
- Visible columns, order, widths, and density.
- Ownership: private, team, or system.
- Default-view capability and sharing rules.

Behavior:

- Search finds records; filters narrow the current collection.
- Small fixed choice sets use a menu; long lists use a searchable select panel.
- Advanced filters support AND/OR groups without forcing users to learn syntax.
- Active filters remain visible as chips/sentence summary.
- The URL represents the current view, query, sort, and pagination cursor where practical.
- Reset returns to the selected saved view, not an unknowable global default.

### 10.5 Record-page pattern

Required anatomy:

1. Breadcrumb/back context.
2. Record identity header.
3. Primary state and next action.
4. URL-backed tabs.
5. Main task/content region.
6. Supporting metadata rail.
7. Related records and activity, separated from core details.
8. Capability-aware overflow actions.

Record headers must not become banners full of badges. Show at most the state, one attention signal, and the few identity fields needed for orientation.

### 10.6 Form pattern

- Visible persistent label; placeholder is an example, never the label.
- Related fields are grouped under a meaningful heading and description only when useful.
- Default one-column scan; paired short fields may share a row.
- Required and optional policy is consistent across the product.
- Help precedes error; errors appear beside the field and in a submit summary.
- Controls expose the correct native input type, autocomplete, input mode, and accessible description.
- Sticky actions appear only on long forms or workflows.
- Destructive secondary actions do not sit beside the primary save without separation.
- View and edit modes are visually distinct.

### 10.7 Workflow pattern

- Compact context/title and save state.
- Determinate progress when completion is meaningful.
- One current top-level section.
- Sticky desktop section navigator or mobile sheet.
- Clear Previous, Save draft, and Continue/Submit actions.
- Direct section navigation does not falsely mark skipped sections complete.
- Review mode shows actual values, documents, warnings, and edit links.
- Leaving with unsaved changes is handled explicitly.

### 10.8 Overlay behavior contract

All dialogs, drawers, menus, popovers, and select panels should use Angular CDK overlay/a11y primitives or a governed wrapper. Required behavior includes:

- Initial focus appropriate to content.
- Focus containment when modal.
- Escape behavior.
- Focus return to the trigger/next logical element.
- Scroll locking and background inertness when modal.
- Accessible name and optional description.
- No nested modal unless a reviewed exception exists.
- Responsive transformation: desktop drawer may become a full-height sheet/route on narrow screens.

### 10.9 System-state pattern

| State         | Required message and action                                                 |
| ------------- | --------------------------------------------------------------------------- |
| Loading       | What is loading; skeleton/spinner appropriate to expected layout            |
| First empty   | Why no records exist and the valid creation/import action                   |
| No results    | Current query produced none; clear/edit filters                             |
| Permission    | What is restricted and who/where can help                                   |
| Error         | What failed, whether data is safe, Retry, and support/reference when useful |
| Partial data  | Which region failed without hiding healthy content                          |
| Offline/stale | Last refresh time and retry behavior                                        |
| Success       | What changed and a link to the resulting record when appropriate            |

---

## 11. Responsive and accessibility contract

### 11.1 Adaptive layout

| Width class                | Behavior                                                                                                     |
| -------------------------- | ------------------------------------------------------------------------------------------------------------ |
| Expanded (≥1280px)         | Full domain sidebar; main + supporting rail; list-detail where valuable                                      |
| Large/medium (1024–1279px) | Compact/explicit sidebar; supporting rail moves to sheet or tab                                              |
| Tablet (768–1023px)        | List and detail generally become separate views; filters use full-height sheet                               |
| Narrow (<768px)            | Mobile route drawer; page actions collapse; lists become prioritized rows/cards; details use separate routes |

Rules:

- Desktop-primary does not mean desktop-only.
- No function is available only on hover.
- Tables hide low-priority columns through responsive column policy; users can inspect all row details.
- Truly two-dimensional matrices may scroll horizontally and should retain identity headers.
- Sticky headers/action bars must not cover focused content.
- Mobile does not merely shrink the desktop three-pane layout.

### 11.2 WCAG 2.2 AA baseline

- Normal text contrast at least 4.5:1; large text at least 3:1; UI component/non-text contrast at least 3:1.
- Minimum AA pointer target is 24×24 CSS px with spacing exceptions; TASKLY uses 32px desktop floor and approximately 40–44px in touch contexts.
- Full keyboard access, visible focus, logical tab order, and no keyboard traps.
- Focus remains visible beneath sticky bars and overlays.
- Semantic landmarks, one route `h1`, ordered headings, table headers/captions, and proper form labels.
- Screen-reader announcements for result counts, loading, save state, validation summaries, toasts, and selection changes.
- Dialog focus trap/return and tabs/menu/combobox keyboard models follow WAI-ARIA APG.
- Reflow and text zoom do not remove functionality at a 320 CSS-pixel equivalent, except essential two-dimensional data.
- Error identification never relies only on red.
- All drag-and-drop builder actions have keyboard alternatives.
- Reduced motion, forced colors/high contrast, and 200% text size are tested.

---

## 12. Target Angular frontend architecture

The current frontend foundation—Angular, Signals, OnPush, CDK, NgRx packages, Lucide, and ECharts—is sufficient. The redesign needs stronger boundaries, not a framework replacement.

### 12.1 Route boundaries

The current “only Dashboard may be lazy loaded” rule must be deliberately revised. Every major admin domain should own a lazy route file:

```text
/admin                         AdminShell
  /home                        lazy Home domain
  /admissions                  lazy Admissions domain
  /students                    lazy Students domain
  /finance                     lazy Finance domain
  /hostel                      lazy Hostel domain
  /reports                     lazy Reports domain
  /settings                    lazy Settings domain
```

Benefits:

- Smaller initial bundle.
- Domain code and providers load only when needed.
- Each domain owns route metadata, local navigation, capability guards, and error boundaries.
- Teams can migrate and test domains independently.

Deep feature pages inside a domain may use `loadComponent` when they are large builders, imports, or rarely visited workflows.

### 12.2 Proposed feature structure

```text
src/app/
├─ core/
│  ├─ auth/
│  ├─ config/
│  ├─ http/
│  ├─ navigation/
│  ├─ permissions/
│  └─ observability/
├─ shared/
│  ├─ ui/                       primitive and component library
│  ├─ patterns/                 table, record, workflow, review, import
│  ├─ domain/
│  │  └─ admission-form-runtime/
│  ├─ pipes/
│  └─ utils/
└─ features/admin/
   ├─ shell/
   ├─ home/
   ├─ admissions/
   │  ├─ admissions.routes.ts
   │  ├─ pages/
   │  ├─ components/
   │  ├─ data-access/
   │  ├─ state/
   │  ├─ models/
   │  └─ config/
   ├─ students/
   ├─ finance/
   ├─ hostel/
   └─ settings/
```

Each page component orchestrates route state and patterns. Business calculations and HTTP orchestration do not live in templates or visual components.

### 12.3 State and data flow

Use a hybrid model:

- **URL state:** saved view, filters, search, sort, page/cursor, and active record tab.
- **Feature facade/store:** server collections, caching, mutations, optimistic/pessimistic refresh, permissions, and cross-page domain state.
- **Signals/local component state:** open menu, temporary form input, local disclosure, and presentational interaction.
- **Reactive forms/schema engine:** complex forms and validation.

NgRx should be feature-scoped rather than one giant global store. Data-access facades expose typed signals/observables and keep components independent from raw API endpoints.

### 12.4 Admission runtime separation

```text
Schema and validation engine
├─ Admin application editor
│  ├─ authenticated API facade
│  ├─ admin copy/actions
│  └─ admin route/permission behavior
└─ Applicant/student editor
   ├─ public/student API facade
   ├─ applicant copy/actions
   └─ portal route/session behavior
```

Shared field renderers must not force shared page composition or session behavior.

### 12.5 Styling architecture

The official `src/style` foundation remains, but `_system.scss` should become an entry/forwarder rather than an 8,000-line page dump.

```text
src/style/
├─ _tokens.scss
├─ foundations/
│  ├─ _reset.scss
│  ├─ _typography.scss
│  ├─ _layout.scss
│  ├─ _focus.scss
│  └─ _motion.scss
├─ utilities/
│  ├─ _a11y.scss
│  └─ _layout.scss
├─ _system.scss                 forwards approved global foundations only
└─ _index.scss

shared/ui/<component>/          component markup, API, and encapsulated styles
shared/patterns/<pattern>/      pattern markup, API, and encapsulated styles
feature page                    composition-only styles for unique layout
```

Required governance changes:

- Semantic tokens remain globally available.
- Component styles are co-located and encapsulated instead of copied into global CSS.
- Page-specific shell/auth/builder/admission blocks leave `_system.scss`.
- No raw colors, arbitrary spacing, radius, z-index, type sizes, or shadows in feature styles.
- Linting checks token use and disallowed duplicate component selectors.
- The legacy selectors are inventoried and removed as their pages migrate.

This requires an intentional update to `FRONTEND_UI_RULES.md`; keeping the current rule unchanged would reproduce the stylesheet monolith.

### 12.6 Angular CDK and Material

- Use CDK Overlay, A11y, Portal, FocusTrap, scrolling, and virtual-scroll primitives where appropriate.
- Keep TASKLY's own visual identity; do not mix unthemed Angular Material controls with custom controls page by page.
- If a Material component is adopted (datepicker, autocomplete, dialog), wrap/theme it through the design system and document its behavior.
- Replace raw custom modal/backdrop markup with one governed dialog/drawer service and components.

### 12.7 Performance and scale

Frontend scale is achieved by bounded data and bounded code:

- Lazy load admin domains and rare heavy workbenches.
- Do not ship report/chart libraries until a report/dashboard route needs them.
- Server-side filter, sort, projection, and pagination for every growing directory.
- Use cursor/keyset pagination for very large/changing collections when the API supports it; offset pagination remains acceptable for bounded/early workflows.
- Debounce search; cancel stale requests; cache safe reference data.
- Never download millions of records to fake filtering, export, pagination, or “select all.”
- Large export is a background job with status/history, not a browser memory operation.
- Use virtual scrolling only when a bounded client-side interaction truly benefits; it does not replace server pagination.
- Keep stable `trackBy`/identity and OnPush rendering.
- Preserve list state when returning from preview/detail.

Phase-one performance gate:

- Production build passes the existing 2.10 MB initial error budget.
- Initial admin JavaScript and global CSS show a measurable reduction from the 2.22 MB / 277.84 kB baseline.
- Each domain receives its own bundle budget and bundle-analysis report.
- No page renders an unbounded collection.

### 12.8 Observability and failure handling

- Route-level error boundary/state.
- Correlation/reference ID in recoverable error details when the API provides it.
- Log failed UI workflows without storing sensitive field values.
- Measure page/load latency, filter latency, save failures, validation failures, and abandonment at section level.
- Audit business actions separately from product analytics.

### 12.9 Test architecture

| Layer             | Coverage                                                     |
| ----------------- | ------------------------------------------------------------ |
| Component unit    | Variants, states, events, keyboard behavior                  |
| Storybook/docs    | Every supported component and pattern state                  |
| Accessibility     | Automated axe plus manual keyboard/screen-reader checks      |
| Visual regression | Desktop, laptop, tablet, and mobile reference widths         |
| Page integration  | Route/query state, facades, empty/loading/error, permissions |
| Playwright E2E    | Critical admin jobs and destructive safeguards               |
| Performance       | Bundle budgets, render/request counts, large-list fixtures   |

Minimum admin E2E journeys:

1. Find a draft application through a saved view and filters.
2. Resume/edit, validate, save, and submit an application.
3. Review and approve/activate an application through the full record flow.
4. Generate or resolve a missing fee account through Enrollment Readiness.
5. Assign and remove a student scholarship/discount safely.
6. Prepare and complete academic progression.
7. Create, validate, preview, publish, version, and archive a form.
8. Create hostel structure, find capacity, allocate, transfer, and vacate safely.
9. Find a payment and download its receipt.
10. Attempt a protected destructive action and verify impact/confirmation/permission behavior.

---

## 13. Three-phase implementation roadmap

The current document is the planning baseline. Implementation begins only after the blueprint and three-screen visual direction are approved.

### Phase 1 — Foundations, shell, and admissions pilot

**Objective:** Establish the new product language and prove it on the highest-volume admission surfaces.

#### Workstream A: product and IA foundation

- Approve terminology: Application, Applicant, Awaiting review, Approved, Student, Enrollment readiness, Archive.
- Approve domain ownership and target route map.
- Define admin roles/jobs and top five tasks per role.
- Capture current visual screenshots and task-time baseline when browser access is available.
- Create a migration register for every route: Legacy, Pilot, Migrated, Deprecated, Removed.

#### Workstream B: design system v1

- Neutral surface/color tokens and retained blue accent.
- Inter/system typography tokens and rem/unitless type contracts.
- New density, spacing, radius, border, elevation, motion, breakpoint, and z-index tokens.
- Semantic icon registry and wrapper.
- Button, icon button, fields, status, menu, tooltip, dialog, drawer, banner/toast, tabs, breadcrumbs, empty/loading/error, pagination.
- Accessibility and content guidelines.
- Storybook/documentation baseline.

#### Workstream C: frontend architecture

- Revise frontend rules deliberately.
- Split admin routes into lazy domains.
- Build configuration-driven shell and local module navigation.
- Establish `shared/ui`, `shared/patterns`, domain data-access/facade conventions.
- Modularize global styling ownership.
- Add admin Playwright, accessibility, and visual-regression harnesses.

#### Workstream D: admissions pilot

- Admissions Overview.
- Applications Collection Workbench replacing three status pages.
- Quick preview drawer.
- Dedicated Application Record shell with Overview and Application tabs.
- Correct query/selection/state behavior.
- Preserve legacy route redirects.

#### Phase 1 exit criteria

- Three responsive reference screens approved: Applications list, Application record, Application editor section.
- Shell and pilot use only supported design-system components.
- WCAG 2.2 AA automated checks pass and manual keyboard flow is documented.
- Existing production bundle budget passes, with domain chunks visible.
- No stale hidden selection can trigger a bulk action.
- Legacy routes continue through redirects.
- Pilot usability test reaches at least 90% task completion with no critical confusion issue.

### Phase 2 — Complete admission-system redesign

**Objective:** Replace the entire admin admission experience and remove its legacy mega-components.

#### Workstream A: application capture/edit

- Separate shared schema engine from admin and applicant orchestration.
- Authenticated admin draft workflow.
- Current-section workspace, right navigator, mobile sheet, sticky actions.
- Autosave/save status, unsaved navigation protection, field validation, error summary, real review.
- Upload preview/replace/error behavior.

#### Workstream B: review and activation

- Review Queue workbench.
- Application evidence/checklist layout.
- Focused activation checklist for academic period, fee mode, and credentials under the current contract.
- Clear result state and linked Student Registry record.
- Future-ready decision pattern without exposing unsupported transitions.

#### Workstream C: connected admission work

- Enrollment Readiness queue for missing/invalid fee setup.
- Student scholarship and discount experience moved into the student/finance context with admission links.
- Promotion moved to Students/Academics.
- Archive/Governance replaces ordinary delete navigation.

#### Workstream D: form management

- Forms Library.
- Dedicated builder route.
- Full outline/canvas/inspector decomposition.
- Content lint, dependency checks, preview, publish checklist, version history, duplicate, archive.
- Design-system-based dynamic fields.

#### Workstream E: migration and removal

- Redirect old admission URLs.
- Remove legacy admission drawer, credential modal, workspace nav, duplicate journey rail, and page-specific global selectors after parity.
- Split models/data access by application, student, finance, and form configuration responsibilities.
- Complete admission E2E, accessibility, responsive, visual, and performance suites.

#### Phase 2 exit criteria

- Every current admin admission function has a mapped, tested home in the new architecture.
- Admin create/edit no longer depends on public access-key/localStorage orchestration.
- Full application work is URL-addressable; preview drawer remains intentionally shallow.
- Approval cannot occur accidentally from an unreviewed list context.
- Admission form publishing blocks broken dependencies and poor required content.
- Legacy admission component/style code is removed rather than hidden.
- Counselors, reviewers, finance admins, and super admins complete their critical tasks in moderated testing.

### Phase 3 — Admin-wide migration, scale, and polish

**Objective:** Apply the proven system across the remaining admin portal and finish production governance.

#### Migration order

1. Student Registry and academic progression.
2. Finance configuration and Student Accounts.
3. Payments/Accounts and audit views.
4. Hostel properties, inventory, capacity, and allocation workflows.
5. Master/reference data and imports.
6. Admin Dashboard.
7. Remaining settings, reports, and cross-domain utilities.

The order follows operational risk and reuse: Student/Finance benefit directly from the admission record and workbench patterns, while the dashboard should be rebuilt after its destination pages exist.

#### Phase 3 finishing work

- Command palette/global search.
- Saved views and role defaults across domains.
- Capability-aware navigation, actions, columns, and empty states.
- Full responsive adaptations and touch density.
- Refined activity/audit patterns.
- Background import/export job center.
- Performance profiling with high-volume fixtures.
- Complete keyboard, screen-reader, forced-colors, zoom, and reduced-motion QA.
- Remove remaining legacy selectors and duplicate UI markup.
- Version the design system and publish migration notes.

#### Phase 3 exit criteria

- Every admin route uses a canonical page template.
- Every table uses the collection/data-view contract and bounded server data.
- No feature creates private button, card, table, dialog, tab, or form styling without an approved exception.
- Global stylesheet contains foundations, not feature-page implementations.
- Production build and per-domain budgets pass.
- Admin Playwright coverage includes every critical domain workflow.
- WCAG 2.2 AA has no known critical/serious issue.
- Legacy admin UI and CSS removal register is empty.

---

## 14. Migration operating model

### 14.1 Strangler workflow per feature

1. Audit the current page and API behavior.
2. Write task/job statement and page-template selection.
3. Produce low-fidelity wireflow and states.
4. Review against design-system patterns.
5. Build behind a route/feature flag or parallel route.
6. Verify functional parity, accessibility, responsive behavior, and performance.
7. Run role-based usability test.
8. Redirect legacy route.
9. Observe errors/usage for a stabilization window.
10. Remove legacy component, selectors, tests, and dead navigation.

### 14.2 No big-bang rules

- Do not globally replace typography/styles before validating the three pilot screens.
- Do not maintain two permanent design systems.
- Do not “temporarily” wrap legacy mega-components in new cards and call them migrated.
- Do not delete the old path until functional parity, redirects, and acceptance tests pass.
- Do not create future navigation items without supported pages/data.
- Do not change backend/data behavior as an accidental side effect of a UI migration.

### 14.3 Component maturity

Every design-system asset has a status:

- **Experimental:** may change; pilot use only.
- **Supported:** documented, tested, stable API, approved for all features.
- **Deprecated:** replacement and migration path documented.

Promotion to Supported requires:

- At least two real use cases or one foundational system need.
- Anatomy, variants, behavior, content, responsive, and accessibility documentation.
- Unit, keyboard, accessibility, and visual-regression coverage.
- Token-only styling and reviewed component API.
- Named owner.

---

## 15. Research and usability validation plan

### 15.1 Admin roles to test

- Super administrator.
- Admissions manager.
- Data-entry/counselor operator.
- Reviewer/verifier.
- Finance/accounts administrator.
- Hostel administrator.
- Read-only auditor/support user.

### 15.2 Baseline tasks

Measure the current and redesigned experience for:

1. Find an incomplete application for a named student and identify what is missing.
2. Review a submitted application and safely activate it.
3. Correct one application field without losing context.
4. Identify approved students missing fee accounts and resolve one.
5. Find the reason a student's current balance changed.
6. Prepare and complete a student promotion.
7. Add a field to an admission form, preview it on mobile, and publish safely.
8. Find an available hostel bed and allocate it to a student.

Capture:

- Task success/failure.
- Time on task.
- Misclick/backtrack count.
- Help requests.
- Wrong-record/wrong-scope actions.
- Confidence rating after completion.
- System Usability Scale or a short standardized ease score.

### 15.3 Product success metrics

| Goal                                                     | Target after migration    |
| -------------------------------------------------------- | ------------------------- |
| First-use critical task completion                       | ≥90% in moderated testing |
| Wrong-scope bulk action                                  | 0                         |
| Critical admin task available only via hidden/direct URL | 0                         |
| Pages with canonical template                            | 100%                      |
| Growing lists with server-side data contract             | 100%                      |
| Supported shared component adoption                      | ≥90% of applicable UI     |
| Critical/serious automated accessibility findings        | 0                         |
| Keyboard completion of critical journeys                 | 100%                      |
| Production bundle budget                                 | Pass                      |
| Legacy page-specific global selectors                    | 0 at Phase 3 exit         |

Do not optimize for “number of cards” or subjective polish alone. Measure admin comprehension and safe completion.

---

## 16. Definition of Done for every redesigned page

A page is complete only when:

- Its purpose and owner domain are unambiguous.
- It uses one canonical page template.
- Breadcrumb, page title, active navigation, and URL state agree.
- Only the valid primary action is emphasized.
- Loading, empty, no-results, failure, permission, and success states exist.
- Filters/sort/page are URL-backed where relevant.
- Selection and destructive scope are explicit.
- It uses semantic tokens and supported components only.
- Desktop, laptop, tablet, mobile, zoom, keyboard, and reduced-motion behavior are verified.
- WCAG 2.2 AA checks pass.
- Analytics/audit events do not expose sensitive values.
- Unit/integration/E2E/visual coverage is proportional to risk.
- Legacy route/component/style removal is tracked.
- Product owner and a representative admin user approve the task flow—not only the screenshot.

---

## 17. Recommended approval checkpoint before coding

Approve these five choices before Phase 1 implementation:

1. **Visual character:** neutral GitHub-like operational surfaces with retained TASKLY/university blue accent and no blue-gradient shell.
2. **Typography:** self-hosted Inter Variable, 14px default body, 13px compact table, 20px standard page title.
3. **Navigation ownership:** Admissions, Students, Finance, Hostel, Settings as distinct domains; states become saved views.
4. **Admission record model:** quick preview drawer plus dedicated record route; review/activation are structured tasks.
5. **Migration model:** new design system and pilot first, full admissions second, remaining admin third; legacy is deleted only after verified parity.

Once approved, the first implementation artifact should be a responsive, interactive prototype of:

- Applications Collection Workbench.
- Application Record.
- Admin Application Editor current-section view.

Those three screens exercise nearly every foundational decision—shell, typography, density, tables, filters, record hierarchy, forms, tabs, drawers, icons, states, and responsiveness—before thousands of lines are migrated.

---

## 18. Phase 3 implementation note: Finance workspace

- Finance pages use the existing sidebar hierarchy as their navigation source. A second horizontal module menu is intentionally not rendered inside page content.
- Fee-dependent workflows start with a single centered **Select fee book** gate. Tables, pagination, filters, and configuration forms render only after a valid fee-book context exists.
- After selection, the gate becomes a compact working-context bar with the book code, college, session, and one **Change book** action.
- High-density record pages keep search visible and place secondary filters in a click-open popover.
- Course-fee criteria open in a focused drawer so results remain readable instead of sharing the canvas with a large form.
- Finance imagery uses a dedicated admin-only PNG set. It does not inherit the student portal's visual language.
