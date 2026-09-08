# Admin workspace redesign

## Scope

The route audit expands `ADMIN_ROUTES`, ignores redirects, and counts parameterised paths once.
There are **53 non-Academics page routes using 22 component layouts**. The **12 Academics
routes are protected reference pages**. Student-facing and public-facing routes are not restyled.

| Area                                    | Routes | Coverage                                                                                                                                                                                                                                      |
| --------------------------------------- | -----: | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Finance                                 |     24 | Fee books (3), heads (3), hostel fees (2), course fees (4), scholarships (3), collections (4), Finance overview, publication, progression, student scholarships, offline payment                                                              |
| Admissions / students / forms / records |     19 | Form builder (2), admission entry, forms library, form applications, submissions, fill form, student database, database edit, database records, application edit/review/detail, all/draft/pending/approved applications, promotions, deletion |
| Master data / hostel                    |      9 | Master create/view/edit templates; hostel details/structure/rooms/capacity/allocation/overview                                                                                                                                                |
| Dashboard                               |      1 | Operational summary and workspace shortcuts                                                                                                                                                                                                   |

## Implementation plan

1. Use the Academics canvas, blue accent, light table headings, subtle borders and compact
   controls through a single admin-only token scope; preserve Academics styles and behavior.
2. Give all 53 routes a shared illustrated workspace bar with real routed subpage links.
   Keep creation separate from directories, expose existing import/draft routes, and retain
   student-record context when moving between application, scholarship and payment pages.
3. Replace old dark Finance illustrations with the semantic generated WebP catalogue.
   Use the same catalogue for page context, drawers and empty states.
   Sidebar navigation and sidebar summaries retain Lucide line icons, per user preference.
4. Finish Finance forms, summaries, scope selectors, tables and drawer surfaces. Bring
   custom admissions/form-builder/embedded-form surfaces into the same scoped system.
5. Verify route coverage, route destinations, asset existence, compilation and UI rules.
   Browser visual/interaction verification is a separate check and must not be claimed
   unless an actual browser is available.

## Maintenance contracts

- Workspace labels, illustration keys and subpage links: `admin-workspace.registry.ts`.
- Asset paths: `admin-illustration.registry.ts`; no feature-specific hardcoded image paths.
- Shared presentation: `_admin-primitives.scss`, inside `.erp-crm-workspace`.
- Reference palette: `_tokens.scss` Academics tokens. Do not copy raw colours into pages.
- The Finance extension adds read-only paginated directory and summary APIs. No schema,
  permission, payment calculation or fee-generation rule changes are made.

## Validation

Run `npm run check:admin-workspaces`, `npm run check:ui`, and `npm run build`.
Review desktop (1440), laptop (1024), tablet (768) and phone (390) when browser access is available.

The workspace contract check is part of the production build. It verifies the 53-route /
22-layout inventory, valid subpage destinations, exactly one current link per page,
query-string/trailing-slash handling, available illustration assets, and no remaining
references to the legacy dark Finance icon set. It also verifies that Academics and
student/public URLs do not receive the workspace bar.

Visual QA remains pending: the browser connector returned “No browser is available”.
Compilation and contract checks do not substitute for checking actual rendered pages.

## Finance split and operational limits

- `/admin/fees/overview`: setup/import, generation/publication and collections entry points.
- `/admin/accounts/overview`: aggregate collection totals, no large tables.
- `/admin/accounts/payments`: payment directory, channel/status filters, allocation/receipt drawer.
- `/admin/accounts/credits`: excess-credit directory and detail drawer.
- `/admin/accounts/discounts`: one-time-discount audit and internal-remark drawer.
- `/admin/accounts` redirects to the payment directory for existing links.
- Collection directories use PostgreSQL LIMIT/OFFSET, validated page sizes (maximum 100),
  stable date/id sorting and independent count queries. Summary totals are computed in SQL.
  The legacy combined API remains available for compatibility but is not used by these pages.
- Bulk fee preparation is confirmed first, then sent in sequential 100-student batches.
  There is a progress indicator and stop-after-current-batch action. Uncertain requests are
  never automatically retried. This is a foreground operation, not a durable background job.
- Existing eligibility calculation and configuration APIs are retained. Their production
  load characteristics have not been benchmarked as part of this UI work.
