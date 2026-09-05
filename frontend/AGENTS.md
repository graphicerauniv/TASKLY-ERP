# Frontend Agent Instructions

Before making any frontend UI or Angular feature change, read and follow:

```text
FRONTEND_UI_RULES.md
```

The global admin illustration rule in that file is mandatory for every existing
page redesign and every new Admin Portal page. Use the semantic
`erp-admin-illustration` registry for each applicable state; never hard-code or
duplicate illustration assets in a feature.

Keep Angular as one SPA with only `src/index.html` as the browser entry. Other
HTML files must be Angular `*.component.html` templates. Use `routerLink` for
internal routes and render every admin screen through the one AdminShell outlet.

Do not add raw colors, one-off theme values, duplicate card styles, duplicate button styles, duplicate table styles, or new global style folders.

For table/list row actions, use `erp-compact-action-menu` from `shared/ui`.
Do not place repeated visible `Edit`, `Delete`, `View`, `Enable`, or `Disable`
buttons directly in action columns. Dialog confirmation buttons and page-level
primary actions may remain visible buttons.

Use the official global style folder:

```text
src/style/
```

Theme values belong in `src/style/_tokens.scss`.
Reusable UI contracts belong in `src/style/_system.scss`.
Feature SCSS should stay small and only cover unique layout behavior.

For long workflows or dynamic forms with more than five sections, do not create
a horizontal stepper or render all sections at once. Use the global scalable
workflow pattern documented in `FRONTEND_UI_RULES.md`:

- compact progress header
- center current-section form
- right sticky section navigator on desktop
- mobile bottom-sheet section navigator
- sticky action bar

Only Auth/Login and Dashboard may be lazy loaded. Admin feature routes belong in
`src/app/features/admin/admin.routes.ts` and are normally imported components.

New Angular components do not generate a stylesheet by default. A local feature
SCSS file is allowed only for a unique layout exception and must begin with an
`ERP-LOCAL-STYLE:` reason. Use the project schematic default or explicitly generate with:

```text
ng generate component <path> --style none
```

Before handing off frontend work, run:

```text
npm run check:ui
```
