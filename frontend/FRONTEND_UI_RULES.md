# GEU ERP Frontend Architecture and UI Rules

This is the official contract for every frontend developer and AI-assisted change.

## 1. Angular SPA Contract

- Keep Angular as a Single Page Application.
- `src/index.html` is the only browser entry HTML file.
- Files named `*.component.html` are Angular templates, not standalone web pages.
- Every screen renders through Angular Router.
- Every authenticated admin screen renders inside the single `AdminShellComponent` `<router-outlet>`.
- Use `routerLink` for internal navigation. Never use `<a href="/...">` for an Angular route.
- External URLs, `mailto:`, `tel:`, downloads, and same-page anchors may use `href` where appropriate.
- Do not change backend, API, database, authentication, or data models for a UI-only task.

## 2. Routing and Lazy Loading

Official route ownership:

```text
src/app/app.routes.ts                    root routes and auth entry points
src/app/features/admin/admin.routes.ts   admin shell and admin child routes
```

Lazy-load portal and admin domain boundaries. Large or infrequently used pages may
also use `loadComponent` inside their domain. Permission-aware preloading may be
added after authentication; do not return to one eager admin route graph.

Required route behavior:

```text
/login                    lazy Admin Login
/student/login            lazy Student Login
/admin                    lazy AdminShell and admin routes
/admin/dashboard          lazy page inside AdminShell
/admin/admissions         lazy admissions domain/page inside AdminShell
/admin/form-builder       lazy page inside AdminShell
/admin/master-data/:slug  lazy page inside AdminShell
/admin/admission/student  lazy page inside AdminShell
/admin/delete-admissions  lazy governance page inside AdminShell
```

Legacy route aliases may redirect through Angular Router. They must not reload the browser.

Configuration modules with both data entry and record management must use separate routes:

```text
/create       focused creation form
/view         searchable, filterable record directory
/:id/edit     focused edit form
/import       optional bulk-import workflow
```

Do not place an unbounded records table below a creation form.
Master Data modules must follow the same route split:

```text
/admin/master-data/:typeSlug/create
/admin/master-data/:typeSlug/view
/admin/master-data/:typeSlug/:id/edit
```

## 3. Official Folder Backbone

```text
src/app/
  core/
    config/
    contracts/
    models and app-wide services/stores/guards/interceptors

  shared/
    ui/
      admin-page/
      compact-action-menu/
      admission-form-workspace/
      form-progress-header/
      form-section-navigator/
      form-section-nav-item/
      dynamic-section-renderer/
      form-sub-group/
      dynamic-field-renderer/
      upload-field/
      form-action-bar/
      mobile-section-navigator-sheet/
    utils/
    pipes/

  features/
    admin/
      auth/
      layout/
      dashboard/
      admissions/
      form-builder/
      master-data/
      delete-admissions/
      admin.routes.ts
    student/
      auth/
      admission/
      student.routes.ts
      layout/
        student-shell/
        student-header/
        student-sidebar/
        student-mobile-drawer/
        student-profile-menu/
      dashboard/
      shared/
        config/
        models/
        services/
      styles/
        _student-tokens.scss
        _student-typography.scss
        _student-layout.scss
        _student-responsive.scss
        student-theme.scss
```

Do not create a parallel `pages`, `screens`, `views`, or second theme architecture without updating this file first.

The Student Portal is the approved isolated portal exception. Its reusable visual
system lives in `features/student/styles`, every variable uses the `--student-*`
prefix, and every selector is scoped beneath `[data-portal='student']`. Student
feature pages must consume this system instead of Admin `erp-*` layout styling.

## 4. Component File Rule

The standard Angular component pattern is:

```text
feature-name.component.ts    logic and bindings
feature-name.component.html  Angular template
feature-name.component.scss  optional unique local layout only
```

Component HTML is correct and required when the UI is not an intentionally tiny inline template.
It is not a separate browser page.

The Angular schematic may keep `style: none` for components without layout needs.
Create co-located component SCSS when the component owns geometry or responsive
composition that cannot be expressed with:

1. an existing shared UI component,
2. an existing `erp-*` global UI contract,
3. a reusable shared pattern/component,
4. a small Tailwind layout utility.

Local SCSS must use global tokens and must never declare raw colours, spacing scales,
buttons, cards, inputs, typography, shadows, or repeated responsive patterns.

## 5. One Design System

The Admin Portal has one canonical global style system:

```text
src/style/_tokens.scss  theme values
src/style/_system.scss  foundations and approved global utilities only
src/style/_index.scss   one style entry imported by src/styles.scss
```

Do not add a duplicate `shared/theme`, `styles`, `theme`, or page-theme folder.
The `src/style` folder is the GEU ERP equivalent of the shared theme layer.

The Student Portal intentionally has a separate, route-scoped theme at
`src/app/features/student/styles`. Never import Admin-specific layout styling into
Student components, and never expose Student tokens on `:root`, `html`, or `body`.

Correct ownership:

```text
Theme change      = mostly _tokens.scss
UI pattern change = shared/ui component with encapsulated styles
Feature page      = page composition + business bindings
Local SCSS        = token-based component geometry and responsive composition
```

If changing the theme requires editing many feature files, the implementation is wrong.

## 6. Token Rule

Colours, typography, spacing, radius, shadows, widths, z-index, transitions,
control heights, and responsive layout constants belong in `_tokens.scss`.

Never write raw colours in feature/shared component files:

```scss
/* wrong */
background: #2196f3;

/* correct */
background: var(--erp-button-primary-bg);
```

Reusable CSS classes must use the `erp-` prefix to prevent collisions with generic
names such as `.brand`, `.field`, `.card`, `.actions`, or `.sidebar`.

## 7. Shared UI Rule

Do not duplicate sidebar, topbar, page header, card, button, table, form control,
status, empty state, modal, workflow navigation, upload, or action-bar markup in feature pages.

Extract reusable UI into `src/app/shared/ui/<component-name>/` with:

```text
component-name.component.ts
component-name.component.html
component-name.component.scss  optional reusable component styling only
```

Shared visual styling still consumes global ERP tokens.

Normal admin pages should compose the existing `erp-admin-page` and global system classes:

```html
<erp-admin-page eyebrow="Module" title="Page title" description="Short description">
  <section class="erp-card erp-card--padded">...</section>
</erp-admin-page>
```

## 8. Row Action Rule

Table and list row actions must use the shared compact action pattern.

Use:

```html
<erp-compact-action-menu [items]="rowActions" (selected)="handleRowAction($event, row)" />
```

Do not render repeated visible row buttons such as `Edit`, `Delete`, `View`,
`Enable`, or `Disable` directly inside action columns. If a row has only one
minor action, still prefer the compact menu for table consistency. Use direct
buttons only for primary page-level actions, form submits, dialog confirmation
actions, or isolated icon controls where the icon is the accepted UI pattern.

Every new row action menu must:

- reuse `CompactActionMenuComponent`,
- use meaningful Lucide icons from the existing icon system,
- keep destructive actions marked as `destructive`,
- keep business behavior in the feature component,
- avoid custom per-page action button CSS.

## 9. Navigation Flyout Rule

Sidebar flyouts with more than one category must use the shared accordion
navigation pattern. Groups are closed by default and expand only on user action
or active search.

Use this for:

- Master Data groups such as Campus Operations, Academic Masters, Location Masters,
  and Custom Masters.
- Fee Management create/view/import groups.
- Future large ERP module menus.

Do not render long flat lists in flyout panels. Parent groups must show a clear
icon, compact label, count/context text, chevron rotation, active parent state,
and nested child links with a subtle blue hierarchy line.

## 10. Long Workflow and Dynamic Form Rule

Any workflow with more than five top-level sections must use the shared schema-driven pattern:

```text
Compact progress header
Main current section form
Right sticky section navigator on desktop
Mobile bottom-sheet section navigator
Sticky bottom action bar
```

Required shared components:

- `AdmissionFormWorkspace`
- `FormProgressHeader`
- `FormSectionNavigator`
- `FormSectionNavItem`
- `DynamicSectionRenderer`
- `FormSubGroup`
- `DynamicFieldRenderer`
- `UploadField`
- `FormActionBar`
- `MobileSectionNavigatorSheet`

Do not use:

- a long horizontal stepper,
- large section tabs,
- all sections rendered on one giant page,
- a second left sidebar,
- a card for every field,
- a gradient banner for section headings.

Field rules:

- maximum two columns on desktop,
- one column on mobile,
- 48px controls,
- compact inline checkboxes and radios,
- compact upload tiles,
- collapsible schema sub-groups,
- one current top-level section at a time,
- validation directly below the field,
- 44px minimum mobile touch targets.

Use this pattern for Admission, Hostel, Scholarship, Document Verification,
Fee Concession, Employee Onboarding, and every future long workflow.

## 11. Page Header Rule

All admin pages must use the shared page header system. Do not create custom
large headings, repeated module labels, or page intro blocks inside feature
templates.

Use:

```html
<erp-admin-page title="Fee Books" variant="minimal"> ... </erp-admin-page>
```

Header variants:

- `module`: only for true module landing pages such as Dashboard or a future
  Fee Management overview.
- `compact`: for standard operational pages that need a short title and one
  useful line of context.
- `minimal`: default for create/view/list/table-heavy pages where vertical
  working space matters.

Page layouts:

- `default`: editors, record pages, review tasks, and dashboards.
- `collection`: high-volume directories and operational workbenches. It uses the
  full content width, a compact title row, dense toolbars and rows, and sticky
  table headers while retaining 44px mobile touch targets.

Use `layout="collection"` only on the list/view side of a split create/view
module. Do not use it to compress forms, review flows, dialogs, or record pages.

Rules:

- Do not show the same module eyebrow on every inner page.
- Keep module context in the topbar breadcrumb or sidebar active state.
- Page descriptions are optional and must be removed when they only repeat the
  obvious page purpose.
- Feature pages must place actions in the shared `[page-actions]` slot.
- Do not hand-code page header spacing, typography, or margins in feature SCSS.

## 12. Data Directory and Pagination Rule

Record directories must reuse the global data-view contracts and tokens:

```text
src/app/core/config/data-view.constants.ts
src/app/core/contracts/data-view.contracts.ts
```

Every potentially growing table must provide:

- search relevant to its visible columns,
- useful domain filters,
- result count,
- page-size control using `ERP_PAGINATION.pageSizeOptions`,
- previous/next controls with bounded page state,
- loading, filtered-empty, and no-data states,
- stable row tracking,
- compact three-dot actions.

Client-side pagination is allowed only while the API returns a deliberately bounded dataset.
Large production datasets require server-side `page`, `pageSize`, `search`, filter, sort,
and pagination metadata support. Do not fake server pagination by downloading every record.

## 13. Tailwind Rule

Tailwind is allowed for small, readable layout helpers only.

Allowed:

- flex/grid helpers,
- simple responsive visibility/alignment,
- small one-off layout composition.

Not allowed:

- arbitrary raw colours,
- utility duplication of the ERP card/button/input/table system,
- large unreadable utility strings replacing shared components.

## 14. Final Verification

Before handoff run:

```text
npm run check:ui
npm run build
```

`check:ui` verifies:

- exactly one `src/index.html`,
- all other HTML files are Angular `*.component.html` templates,
- internal routes use `routerLink`,
- admin portal/domain routes remain lazily bounded,
- feature SCSS consumes shared tokens and does not declare raw colours,
- raw colours are not added outside the theme system.

Visual QA must cover desktop, laptop, tablet, mobile, keyboard focus,
no horizontal overflow, sticky actions, and the mobile section sheet.
