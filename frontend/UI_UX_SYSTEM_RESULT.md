# GEU ERP UI/UX System Result

This file records the current agreed frontend UI/UX architecture so future
developers and AI agents do not recreate page-by-page styling.

## Current Decision

The frontend uses one global design system:

```text
src/style/_tokens.scss  = theme values
src/style/_system.scss  = reusable UI patterns
src/style/_index.scss   = style entry point
```

Feature pages do not create their own SCSS by default. Angular component
generation is configured with `style: none`; a documented unique-layout
exception remains possible.

The application remains one Angular SPA with a single `src/index.html`.
All other HTML files are Angular component templates. Admin screens share one
AdminShell router outlet, and internal navigation uses Angular Router.

## Mandatory Admin Illustration System

Every existing or new Admin Portal page must use the supplied global illustration
library for relevant empty, filtered-empty, unavailable, pending, upload,
configuration, history, scheduling, finance, scholarship and student-assignment
states. Feature pages must select a semantic `kind` through
`erp-admin-illustration`; they must not hard-code paths, copy source images into
feature folders or use checkerboard preview files.

```text
public/assets/images/admin-illustrations/  = optimized transparent WebP assets
shared/ui/admin-illustration/              = typed registry and global renderer
```

Illustrations communicate page state and always appear with useful text and,
where applicable, a next action. Lucide remains the functional icon system for
buttons, navigation and controls. The complete mandatory contract and semantic
mapping are defined in `FRONTEND_UI_RULES.md`.

Only Auth/Login and Dashboard are lazy loaded. Other admin routes are declared
as normal imported components in `src/app/features/admin/admin.routes.ts`.

## Scalable Page Rule

Feature pages are responsible for:

- HTML structure
- Angular state and business logic
- binding data to reusable UI patterns

Feature pages are not responsible for:

- theme colors
- card/button/input/table styling
- random shadows/radius/spacing
- repeated layout systems

## Dynamic Long Form Pattern

Large workflows such as Student Admission now use:

- compact top progress summary,
- one active section rendered at a time,
- right sticky section navigator on desktop,
- bottom-sheet section navigator on mobile,
- collapsible sub-groups,
- compact field layout,
- sticky action bar.

These are implemented as reusable components in `src/app/shared/ui`, including
progress header, workspace, section navigator/items, dynamic section/field
renderers, subgroup, upload field, action bar, and mobile navigator sheet.

This is the default pattern for any workflow with more than five sections.

## Guardrail

Run before handoff:

```text
npm run check:ui
npm run build
```

`check:ui` blocks new feature SCSS files and raw colors outside the theme
system.
