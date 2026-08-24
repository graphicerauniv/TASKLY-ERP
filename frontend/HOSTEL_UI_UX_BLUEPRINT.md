# GEU ERP Hostel UI/UX Blueprint

This document is the official UI/UX redesign plan for the Hostel module. It must be used before redesigning or creating any Hostel page so the module stays professional, scalable, responsive, and consistent with the GEU ERP admin design system.

## 1. Scope

The Hostel module covers:

- Hostel details and setup
- Hostel blocks and floors
- Room creation and room generation
- Room capacity and room type configuration
- Student room allocation
- Room transfer and vacate flows
- Hostel occupancy overview

This is a UI/UX and frontend structure document only. Do not change backend APIs, database models, authentication, permissions, or existing business behavior while applying this blueprint.

## 2. Core Design Goal

The Hostel module must feel like a premium ERP operations workspace, not a collection of form cards. The design should help an admin understand:

- what hostel data exists,
- what setup step is incomplete,
- which rooms are available,
- which students are allocated,
- what action is safe or destructive,
- what needs attention before allocation.

The target feeling is:

Premium, calm, enterprise, readable, structured, fast, and built for daily admin work.

Avoid:

- huge empty cards,
- repeated page-specific CSS,
- random colors,
- visible Edit/Delete buttons in table rows,
- overlarge forms,
- nested cards inside cards,
- giant modals for small actions,
- cramped tables without hierarchy,
- hiding important workflow context.

## 3. Architecture Rule

Hostel pages must follow the current GEU ERP frontend contract:

- Angular remains a SPA.
- Hostel screens render inside `AdminShellComponent`.
- Internal routes use `routerLink`.
- No separate static HTML pages.
- No duplicate sidebar or topbar.
- Feature styling must use global `erp-*` classes and tokens.
- Local SCSS is allowed only for unique Hostel layout exceptions and must start with `/* ERP-LOCAL-STYLE: ... */`.

The Hostel module should reuse:

- `erp-admin-page`
- `erp-card`
- `erp-button`
- `erp-control`
- `erp-status`
- `erp-table-shell`
- `erp-compact-action-menu`
- global typography, spacing, radius, shadow, transition, and layout tokens from `src/style/_tokens.scss`

## 4. Recommended Hostel Frontend Structure

Use one feature module area, but split heavy UI into focused components.

```text
src/app/features/admin/hostel-management/
  hostel-management.component.ts
  hostel-management.component.html
  hostel-management.component.scss
  components/
    hostel-command-bar.component.ts
    hostel-command-bar.component.html
    hostel-setup-summary.component.ts
    hostel-setup-summary.component.html
    hostel-details-panel.component.ts
    hostel-details-panel.component.html
    hostel-structure-panel.component.ts
    hostel-structure-panel.component.html
    hostel-room-workspace.component.ts
    hostel-room-workspace.component.html
    hostel-capacity-workspace.component.ts
    hostel-capacity-workspace.component.html
    hostel-allocation-workspace.component.ts
    hostel-allocation-workspace.component.html
    hostel-overview-workspace.component.ts
    hostel-overview-workspace.component.html
```

Only create these components when implementing the redesign. Do not create all files empty.

Shared reusable patterns that are useful outside Hostel should go in:

```text
src/app/shared/ui/
  page-command-bar/
  entity-summary-card/
  filter-bar/
  split-workspace/
  entity-tree/
  metric-strip/
  confirmation-dialog/
```

## 5. Global Layout Pattern

Hostel pages should use a three-zone admin workspace:

```text
Admin sidebar | Main work area | Context panel
```

Use this layout only when the page benefits from context. On mobile, the context panel becomes a drawer or bottom sheet.

### Main Work Area

The main work area contains the primary task:

- create or edit hostel,
- manage rooms,
- allocate a student,
- review occupancy.

It should have:

- page header,
- command/filter bar,
- primary content table or form,
- sticky action footer only when the user is in an edit/create flow.

### Context Panel

The right context panel should show supporting information:

- selected hostel summary,
- setup completion,
- available rooms,
- warnings,
- recent actions,
- quick stats.

Do not put primary CRUD forms in the right panel unless the form is short and clearly contextual.

### Mobile

On tablet and mobile:

- main content becomes single column,
- context panel becomes a drawer/bottom sheet,
- tables become scrollable or card-list views,
- action bars stay sticky at bottom,
- touch targets remain at least 44px.

## 6. Hostel Navigation Model

Keep the existing section routes and behavior:

- Details
- Structure
- Rooms
- Capacity
- Allocation
- Overview

Represent these sections as a compact module switcher or command tabs below the page header, not as giant banners.

Each section should show:

- title,
- short operational description,
- completion or health status where useful,
- primary action button if applicable.

Example:

```text
Hostel Management
Configure hostels, rooms, capacity and student allocations.

[Details] [Structure] [Rooms] [Capacity] [Allocation] [Overview]
```

## 7. Page-Level Header

Every Hostel section should use the same header pattern:

- eyebrow: `HOSTEL`
- title: section title
- description: one clear line
- right actions: Refresh, Create, Export, or Save where relevant

Header text must not be oversized. Hostel is an operations module, so density and scanning are more important than marketing-style hero text.

## 8. Command Bar

Use a command bar after the page header for:

- academic session
- selected hostel
- block
- floor
- search
- status filters
- primary actions

Rules:

- Filters should stay in one clean row on desktop.
- On laptop/tablet, wrap gracefully.
- On mobile, filters collapse into a filter drawer.
- Primary action button stays visually strongest.
- Do not scatter filters across multiple unrelated cards.

## 9. Details Page UX

Purpose: create and maintain hostel records.

Recommended layout:

- Left/main: hostel table
- Right/context: add/edit hostel panel
- Top: summary metric strip

Metrics:

- Total hostels
- Active hostels
- Planned rooms
- Created rooms

Hostel table columns:

- Hostel
- Type
- Structure
- Rooms
- Status
- Actions

Structure should combine blocks/floors in one readable cell:

```text
4 blocks
6 floors
```

Actions must use `erp-compact-action-menu`, not visible row buttons.

Add/Edit hostel should be a side panel or modal-style panel with:

- Hostel name
- Type
- Number of blocks
- Number of floors
- Planned rooms
- Active state

Destructive delete must use confirmation dialog, not native `confirm()`, when redesign is implemented.

## 10. Structure Page UX

Purpose: define blocks and floors for a hostel.

Recommended layout:

```text
Selected hostel summary
Block list        Floor list
```

Better future layout:

```text
Hostel structure tree | Selected item details
```

Rules:

- Select hostel first.
- Show empty state if no hostel is selected.
- Blocks and floors should look like structure items, not plain table rows only.
- Add block/floor should be inline but visually controlled.
- Edit and delete should use compact action menu.
- If deletion is blocked because rooms exist, show clear error feedback.

Do not use oversized two independent cards that make the relationship unclear. The admin should instantly understand that blocks and floors belong to the selected hostel.

## 11. Rooms Page UX

Purpose: create rooms manually or generate room sequences.

Recommended layout:

- Top command bar: hostel, block, floor
- Main left: room table/grid
- Right context: create room/generate rooms panel

Room creation modes:

- Manual room
- Auto generate

Use segmented control instead of plain radio buttons.

Manual mode fields:

- Room number

Auto mode fields:

- Prefix
- Start number
- Number of rooms
- Preview example: `A-101, A-102, A-103`

Room list should support:

- search by room number,
- filter by active/disabled,
- filter by configured/not configured,
- compact row action menu,
- empty state.

Room row hierarchy:

```text
Room A-101
Block A / Ground Floor
```

## 12. Capacity Page UX

Purpose: set room type and bed capacity for an academic session.

Recommended layout:

- Top command bar: session, hostel, block, floor
- Main: room list with configuration state
- Right drawer/modal: capacity editor for selected room

Capacity editor:

- Room name and location at top
- Seater dropdown
- Custom seater input when needed
- Room type dropdown
- Custom room type input when needed
- Save capacity

Do not render a capacity form as a large full-width page card. Capacity editing is a focused contextual action and should open in a controlled panel or modal.

Table status:

- Configured
- Not configured
- Disabled room
- Full capacity if occupancy exists

## 13. Allocation Page UX

Purpose: allocate, transfer, and vacate students.

This is the highest-risk Hostel workflow. Make it guided.

Recommended layout:

```text
Allocation command bar
Student and session selection
Available room finder
Active allocations table
Right context: selected student / selected room / bed availability
```

Allocation flow:

1. Select academic session.
2. Select student.
3. Select hostel.
4. Select block/floor if needed.
5. Select configured room.
6. Select available bed.
7. Confirm allocation.

Required UI states:

- Student already allocated
- No configured rooms
- No beds available
- Hostel disabled
- Room disabled
- Transfer mode active
- Vacate confirmation

Transfer flow:

- Selecting transfer from row action should show a clear transfer banner.
- Current room and bed must remain visible.
- Destination room and bed selection should be visually separate.
- Cancel transfer must be obvious.

Vacate flow:

- Use confirmation dialog.
- Show student, room, bed, and session.
- Reason input should be optional unless business rules later require it.
- Destructive button must be red/danger style.

## 14. Overview Page UX

Purpose: monitor capacity and occupancy.

Recommended layout:

- Session filter
- KPI strip
- Occupancy table
- Optional visual bars per hostel

KPIs:

- Active hostels
- Total rooms
- Total beds
- Occupied beds
- Available beds
- Occupancy percentage

Hostel occupancy row:

- Hostel name
- Type
- Rooms
- Beds
- Occupied
- Available
- Occupancy progress bar

Use restrained progress bars. Do not use loud colors except for warning states.

## 15. Card and Table Rules

Cards:

- Use cards only for meaningful grouped content.
- Do not put cards inside cards.
- Keep radius consistent with global ERP tokens.
- Keep headers compact.
- Avoid huge white empty cards.

Tables:

- Use `erp-table-shell`.
- Sticky table headers may be used for long lists.
- Row actions use compact three-dot action menu.
- Empty states must be helpful.
- Dense rows are acceptable if spacing remains readable.
- Avoid wide columns with one-word values.

## 16. Form Rules

All Hostel forms must use:

- `erp-field-stack`
- `erp-control`
- global form spacing
- direct validation below field
- maximum two columns on desktop
- one column on mobile
- 48px control height

Do not manually define form colors, borders, shadows, or input heights in Hostel SCSS.

Use clear labels:

- `Hostel name`
- `Hostel type`
- `Academic session`
- `Block`
- `Floor`
- `Room number`
- `Room type`
- `Bed`

Avoid vague labels like `Name` when the context can be unclear.

## 17. Action Rules

Page-level primary actions:

- Create hostel
- Generate rooms
- Allocate room
- Save capacity
- Refresh overview

Row-level actions:

- Edit
- Rename
- Enable/Disable
- Set capacity
- Transfer
- Vacate
- Delete

Row-level actions must use the compact action menu.

Destructive actions:

- Delete hostel
- Delete block
- Delete floor
- Delete room
- Vacate room

Destructive actions require confirmation and danger styling.

## 18. Motion and Interaction

Use the global transition timing:

- hover: 180-280ms
- drawer/panel open: 250-350ms
- menu open: 160-220ms

Preferred animation:

- opacity
- translate
- border/background color
- chevron rotation

Avoid:

- bounce,
- dramatic scale,
- slow animations,
- animations on every row at once.

Respect `prefers-reduced-motion`.

## 19. Responsive Rules

Desktop:

- sidebar hover expand remains global,
- main content and optional context panel visible,
- filters in command bar.

Laptop:

- context panel may become narrower,
- command bar wraps cleanly.

Tablet:

- context panel becomes drawer,
- tables remain horizontally scrollable only inside table shell,
- no page-level horizontal overflow.

Mobile:

- one-column layout,
- command filters collapse,
- context panel becomes bottom sheet,
- row actions stay icon-based,
- sticky footer actions remain reachable,
- large tables can become compact list cards.

Small mobile:

- no clipped labels,
- no overflowing select/input text,
- minimum 44px touch targets,
- avoid side-by-side fields.

## 20. Accessibility

Every Hostel workflow must include:

- visible focus states,
- keyboard-accessible buttons and menus,
- `aria-expanded` on expandable controls,
- `aria-label` on icon-only buttons,
- semantic table headers,
- dialog `role="dialog"` or `role="alertdialog"`,
- `aria-modal="true"` for modals,
- status messages with `role="status"` or `role="alert"`.

Do not rely on hover only.

## 21. Loading, Empty, Error and Success States

Loading:

- Use skeletons or compact loading rows for tables.
- Do not leave large blank areas with only text.

Empty:

- No hostels: show `Create hostel` action.
- No blocks/floors: show `Add block` or `Add floor` action.
- No rooms: show manual/generate room action.
- No configured rooms: guide admin to capacity setup.
- No allocations: show allocation starting hint.

Error:

- Keep error near relevant workflow.
- Use clear business language.
- Avoid generic `operation failed` when backend returns a useful message.

Success:

- Use subtle notice or toast-like inline status.
- Do not permanently push layout down for every success message.

## 22. Performance

Hostel pages may grow large. Keep UI efficient:

- avoid rendering every possible heavy panel at once,
- split large sections into focused components,
- use computed values carefully,
- avoid expensive filtering in templates for very large room lists,
- add pagination or virtual scrolling later if room volume becomes high,
- keep decorative CSS lightweight.

## 23. Implementation Order

When implementation starts, follow this order:

1. Audit current Hostel UI and confirm all business actions still work.
2. Add or improve shared system classes only if needed.
3. Create reusable Hostel components only where they reduce real complexity.
4. Redesign Details page.
5. Redesign Structure page.
6. Redesign Rooms page.
7. Redesign Capacity page.
8. Redesign Allocation page.
9. Redesign Overview page.
10. Replace native confirm flows with shared confirmation dialog.
11. Test responsive layouts.
12. Run `npm run check:ui`.
13. Run `npm run build`.

## 24. QA Checklist

Before completing Hostel UI work, verify:

- No backend/API behavior changed.
- Admin shell sidebar/topbar remains global.
- No new standalone HTML pages.
- No raw colors in feature SCSS.
- Row actions use compact action menu.
- Hostel delete, room delete, vacate actions require confirmation.
- Forms use `erp-control` and global form rules.
- Tables use `erp-table-shell`.
- Mobile has no page-level horizontal overflow.
- Filters wrap or collapse correctly.
- Context panels do not cover important content.
- Keyboard focus is visible.
- Reduced motion is respected.
- `npm run check:ui` passes.
- `npm run build` passes.

## 25. Final Rule

Hostel UI must be built as an operations workspace. If a future page needs different visuals, first ask whether the pattern belongs in the global ERP system or a shared Hostel component. Do not solve repeated UI problems inside one page file.
