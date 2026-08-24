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

Lazy load only:

1. Auth/Login features
2. Dashboard

Keep Admissions, Form Builder, Master Data, Delete Admissions, Student Admission,
and future ERP modules as normal imported route components until this rule is deliberately changed.

Required route behavior:

```text
/login                    lazy Admin Login
/student/login            lazy Student Login
/admin/dashboard          lazy Dashboard inside AdminShell
/admin/admissions         normal component inside AdminShell
/admin/form-builder       normal component inside AdminShell
/admin/master-data/:slug  normal component inside AdminShell
/admin/admission/student  normal component inside AdminShell
/admin/delete-admissions  normal component inside AdminShell
```

Legacy route aliases may redirect through Angular Router. They must not reload the browser.

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
```

Do not create a parallel `pages`, `screens`, `views`, or second theme architecture without updating this file first.

## 4. Component File Rule

The standard Angular component pattern is:

```text
feature-name.component.ts    logic and bindings
feature-name.component.html  Angular template
feature-name.component.scss  optional unique local layout only
```

Component HTML is correct and required when the UI is not an intentionally tiny inline template.
It is not a separate browser page.

The Angular schematic uses `style: none` by default so a stylesheet is not generated for every page.
Create local SCSS only when the component has a genuine unique layout that cannot be expressed with:

1. an existing shared UI component,
2. an existing `erp-*` global UI contract,
3. a reusable addition to `_system.scss`,
4. a small Tailwind layout utility.

Approved feature SCSS must begin with:

```scss
/* ERP-LOCAL-STYLE: explain why this layout cannot be shared */
```

Local SCSS must use global tokens and must never declare raw colours, spacing scales,
buttons, cards, inputs, typography, shadows, or repeated responsive patterns.

## 5. One Design System

The project has one canonical global style system:

```text
src/style/_tokens.scss  theme values
src/style/_system.scss  reusable UI contracts
src/style/_index.scss   one style entry imported by src/styles.scss
```

Do not add a duplicate `shared/theme`, `styles`, `theme`, or page-theme folder.
The `src/style` folder is the GEU ERP equivalent of the shared theme layer.

Correct ownership:

```text
Theme change      = mostly _tokens.scss
UI pattern change = shared/ui component + _system.scss
Feature page      = page composition + business bindings
Local SCSS        = documented unique layout exception only
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

## 9. Long Workflow and Dynamic Form Rule

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

## 10. Tailwind Rule

Tailwind is allowed for small, readable layout helpers only.

Allowed:

- flex/grid helpers,
- simple responsive visibility/alignment,
- small one-off layout composition.

Not allowed:

- arbitrary raw colours,
- utility duplication of the ERP card/button/input/table system,
- large unreadable utility strings replacing shared components.

## 11. Final Verification

Before handoff run:

```text
npm run check:ui
npm run build
```

`check:ui` verifies:

- exactly one `src/index.html`,
- all other HTML files are Angular `*.component.html` templates,
- internal routes use `routerLink`,
- lazy loading is limited to Auth/Login and Dashboard,
- feature SCSS has a documented unique-layout exception,
- raw colours are not added outside the theme system.

Visual QA must cover desktop, laptop, tablet, mobile, keyboard focus,
no horizontal overflow, sticky actions, and the mobile section sheet.
