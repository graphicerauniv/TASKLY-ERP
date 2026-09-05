# GEU ERP Admissions UI/UX Flow Design

> Scope: Admin sidebar **Admissions -> New admission -> admission form -> review -> submit -> completion**. This document defines the intended UI/UX flow in depth. It does not redesign the applications directory, form builder, application review, scholarships, or student management pages except where the new-admission journey links to them.

## 1. Purpose

The New Admission experience must let an administrator create a student application quickly, accurately, and without losing work. The interface should behave like a professional CRM data-entry workflow: compact navigation, strong context, predictable actions, clear validation, and persistent progress.

The flow begins in the Admin sidebar and ends when the application is sent to the approval queue or, where supported by business rules, becomes an approved student.

Primary user: authenticated administrator entering an application on behalf of a student.

Primary job: create a complete, valid admission record from the currently published admission form.

## 2. Entry Flow

```text
Admin shell
  -> Click Admissions
     -> Admissions submenu/flyout opens
        -> Click New admission
           -> Route: /admin/admission/student
              -> Load active admission form
                 -> Create a draft admission
                    -> Open first incomplete form section
```

### 2.1 Clicking Admissions

- `Admissions` is a top-level sidebar section, not a form action.
- Clicking it opens its submenu while retaining the current page until a child is selected.
- The submenu is compact and anchored to the sidebar item on desktop.
- On mobile, the submenu appears inside the navigation drawer.
- The parent item receives an active state for all admission-create and admission-form routes.
- The submenu contains at minimum:
  - `New admission`
  - `Forms`
- `New admission` is the first item because it is the primary operational action.
- The submenu closes after route navigation.
- Keyboard behavior: Enter/Space opens the section; Escape closes it; arrow/tab navigation reaches child links.

### 2.2 Clicking New Admission

- Route: `/admin/admission/student`.
- The Admin shell remains visible.
- Breadcrumb context: `Admin / Admissions`.
- Page title context: `New admission`.
- The admission page is embedded, so the public admission portal header is not shown.
- The sidebar marks `Admissions` and `New admission` active.
- The page immediately shows a loading state; it must not briefly render an empty form.

## 3. Initial Data and State Flow

On route entry, the interface performs this sequence:

1. Load the active published admission form.
2. Create a new draft admission linked to that form.
3. Receive the form snapshot and draft application data.
4. Resolve the current section from `currentSectionId`.
5. Load options for fields backed by master data.
6. Open the first subsection containing an incomplete required field; otherwise open the first visible subsection.
7. Render the guided form workspace.

The form uses the saved form snapshot attached to the admission. A later form-builder change must not unexpectedly restructure an application already in progress.

### 3.1 Loading State

- Centered workspace state inside a bordered surface.
- Spinner plus `Preparing your admission form...`.
- Main navigation remains available.
- Form controls and action buttons are not shown until a usable form and draft exist.
- Loading text uses `aria-live="polite"` behavior through the page state.

### 3.2 Form Unavailable State

Displayed when the active form or initial draft cannot be loaded:

- Heading: `Admission form unavailable`.
- Human-readable API error below the heading.
- No blank form shell.
- Admin navigation remains usable.
- A production-ready implementation should expose a `Try again` action and a link to `Forms` when no active form exists.

## 4. Admission Form Page Structure

The form page has five persistent conceptual layers:

```text
Admin shell header and sidebar
Admission progress header
Section journey navigation
Active section / final review content
Sticky form action bar
```

### 4.1 Progress Header

The progress header establishes context before any fields:

- Eyebrow: `New student admission`.
- Title: active admission form name.
- Description: configured form description or a standard completion instruction.
- Current position: `Section X of Y`.
- Overall progress percentage.
- Save status: `Unsaved changes`, `Saving...`, success text, or the latest saved state.
- `View all sections` control opens the section navigator on small screens.

The header should remain concise. It communicates progress and state, not marketing content.

### 4.2 Journey Navigation

The journey navigation is generated from the form's configured sections.

Each item contains:

- Section number/order.
- Section title.
- State: current, complete, incomplete, or not started.
- Status text based on required-field completion.
- Click action to open that section.

The rail also displays:

- Overall progress.
- `N of M required fields completed` for the current section.
- Access to all sections.

Navigation rules:

- Administrators may revisit completed sections.
- Selecting another section saves or preserves the current draft state according to the current implementation contract.
- The current section is visually distinct without relying on color alone.
- Complete sections use a check status.
- Incomplete sections expose pending required fields.
- Section labels must wrap rather than truncate critical information.

### 4.3 Active Section Workspace

Only one top-level form section is edited at a time.

The section surface contains:

- Section number.
- Section title.
- Configured description or default guidance.
- Contextual icon based on section name.
- Required-field completion count.
- A list of subsections.

This keeps a potentially long form manageable and reduces visual overload.

### 4.4 Subsection Accordion

Each subsection is a collapsible group containing:

- Subsection title.
- Optional description.
- Total field count.
- Required field count.
- Remaining required count.
- Complete state when all required values are present.
- Expand/collapse control.

Default opening behavior:

- Open the first subsection with missing required fields.
- If none are incomplete, open the first visible subsection.
- When Next is blocked, automatically open the first incomplete subsection.
- Do not expand every subsection by default.

### 4.5 Field Grid

- Desktop: fields use a responsive multi-column grid where field type and available width permit.
- Narrow screens: fields become one column.
- Labels remain above controls.
- Required fields have a visible required marker and programmatic required state.
- Help text appears directly below the related control.
- Validation text appears beside or below the field it describes.
- Long labels wrap; controls remain aligned.
- Conditional fields are removed from the active layout when their visibility rule is false.

Supported field behavior includes text, email, phone, number, date, select, searchable master-data options, radio/checkbox-style values, textarea, and file upload according to the configured schema.

## 5. Field Interaction Rules

### 5.1 Editing and Dirty State

- Any value change marks the draft as dirty.
- Header/action status changes to `Unsaved changes`.
- Dependent field options reload when their parent changes.
- Invalid dependent values are cleared when they no longer belong to the selected parent.
- Progress updates from actual completed fields, not merely visited sections.

### 5.2 Searchable Master Data

- Options are loaded from the field's configured data source.
- Search requests use the entered query.
- Parent-child dependencies are respected, such as university -> college -> department -> course.
- Loading, no-results, and API-error states belong inside or immediately beside the control.
- The selected label must remain readable after the option list closes.

### 5.3 Conditional Visibility

- Visibility rules are evaluated against the current response model.
- Hidden fields do not block section completion.
- When a controlling answer changes, dependent visibility updates immediately.
- Previously entered hidden values require a consistent policy: retain for reversible branching or clear before submission. The implementation decision must be uniform across all fields.

### 5.4 File Upload

Upload flow:

```text
Choose file
  -> Validate configured file type
  -> Validate configured maximum size, default 5 MB
  -> Show uploading state
  -> Upload against the draft admission and field ID
  -> Store returned file reference
  -> Show uploaded-file state with remove action
```

Error messages identify the field and reason, for example an unsupported type or exceeded size. Removing a file clears the field response. Upload controls must remain keyboard accessible and must not depend on drag-and-drop.

### 5.5 Repeatable Subsections

Repeatable groups support records such as qualifications or family entries.

- Empty state: `No records added. Add [subsection] to begin.`
- `Add [subsection]` appends a new entry.
- Entries are numbered in display order.
- Each entry renders its own field grid and dependent options.
- `Remove` deletes only the selected entry.
- Removal should require confirmation when the entry contains values or uploaded documents.
- Required-field calculations use the actual number of entries, with schema minimums enforced.

## 6. Persistent Action Bar

The form action bar remains available at the bottom of the working viewport.

### 6.1 Left Area

- `Back` appears after the first section and in review mode.
- In a regular section, Back opens the previous section.
- In review mode, Back returns to the final editable section.

### 6.2 Center Status

- Displays save state in a polite live region.
- Possible states: saved, unsaved, saving, save failed.
- Status text must not move the action buttons when it changes.

### 6.3 Right Area

- `Save draft` saves without advancing.
- Primary action is contextual:
  - Intermediate section: `Save and continue` or `Next section`.
  - Final editable section: `Review application`.
  - Review mode: `Submit application`.
- Buttons show a saving/submitting state and prevent duplicate requests.

## 7. Save and Section Progression

### 7.1 Save Draft

- Save the current responses, repeatable responses, and current section ID.
- Keep the administrator on the current section.
- On success show `Progress saved.` and update the save status.
- On failure keep all entered values on screen and show a clear error.
- A failed save must not mark the draft as saved.

### 7.2 Continue to Next Section

1. Validate required fields in the current visible section.
2. If missing, stay on the section.
3. Show `Complete N required field(s) to continue.`.
4. Open the first incomplete subsection.
5. Focus or scroll to the first invalid field.
6. If valid, save the draft.
7. Advance only after a successful save.
8. Load the next section's master-data options.
9. Reset subsection expansion to the next incomplete group.

The final editable section transitions to review instead of submitting immediately.

## 8. Final Review

Review mode replaces editable fields with a compact section checklist.

Header content:

- Eyebrow: `Final review`.
- Title: `Review your application`.
- Guidance to check every configured section.

Each section review item contains:

- Complete or attention icon.
- Section title.
- `Complete` or the number of required fields pending.
- `Edit` button that returns directly to that section.

Submission behavior:

- Submit is disabled while required fields remain missing.
- Missing sections are visually marked as needing attention.
- The administrator can edit any section and return to review.
- The interface performs whole-application validation before submission.

## 9. Submit Flow

```text
Submit application
  -> Prevent duplicate action
  -> Save latest draft
  -> Validate complete application
  -> Submit admin admission
  -> Receive updated admission status and student ID
  -> Replace form with completion state
```

Failure behavior:

- Preserve all entered data and review position.
- Restore the submit control after failure.
- Display backend validation messages in readable order.
- Where possible, link or route the administrator to the section containing the invalid field.

## 10. Completion State

After successful submission, the form workspace, journey rail, and action bar are removed.

Displayed content:

- Success icon.
- `Student sent for approval` when submitted to the approval queue.
- `Student approved` if the returned record is already approved.
- Generated Student ID.
- Primary queue action:
  - `Open Not Approved Students` for pending approval.
  - `Open Approved Students` for approved status.
- `Start another admission` resets the workflow and creates a new draft.

Starting another admission must clear the prior local admission key and must not reuse the previous student's responses.

## 11. Desktop Layout

- Admin sidebar uses the compact CRM width defined by the shell.
- Main form content stays within the shared admin workspace width.
- Progress header spans the form workspace.
- Journey navigation remains visually separate from the active form content.
- Form fields use available width without producing excessively wide text inputs.
- The action bar is sticky and does not cover the last form row.
- Long sections scroll in the page; nested scrolling inside the form card is avoided.
- Sidebar flyouts and form navigation must not overlap the active input area incoherently.

## 12. Tablet and Mobile Layout

At mobile widths:

- Admin sidebar becomes the existing drawer.
- Progress header uses a compact current-section summary.
- Desktop journey rail is replaced by a `View sections` control.
- Tapping it opens a bottom sheet with backdrop, close button, progress, search, and section list.
- The sheet is a modal dialog and traps interaction while open.
- Field grids become one column.
- Repeatable-entry controls stack without horizontal overflow.
- Action bar remains reachable with touch targets of at least the mobile control height.
- Back, Save draft, and primary action must wrap or reorganize without text clipping.
- Bottom padding reserves space for the sticky action bar.
- Upload names and validation messages wrap instead of expanding the viewport.

## 13. Feedback and State Matrix

| State | Location | Required presentation | Available action |
|---|---|---|---|
| Initial loading | Main workspace | Spinner and preparation text | Wait |
| Form unavailable | Main workspace | Error title and API message | Retry / open Forms |
| Draft ready | Full form | Header, journey, first incomplete section | Enter data |
| Unsaved | Header and action bar | `Unsaved changes` | Save draft / continue |
| Saving | Action bar | Saving label; actions protected | Wait |
| Saved | Header and action bar | `Progress saved.` | Continue |
| Section invalid | Above form and fields | Missing required count; first invalid group opens | Correct fields |
| Uploading | Upload field | File-specific progress | Wait/cancel where supported |
| Upload failed | Field/page notice | Field name and reason | Select another file/retry |
| Review incomplete | Review list | Attention state and missing count | Edit section |
| Submitting | Action bar | Submitting label; duplicate action blocked | Wait |
| Submit failed | Review/page notice | Backend validation or service message | Correct/retry |
| Submitted | Completion state | Status, Student ID, destination action | Open queue / start another |

## 14. Accessibility Requirements

- Every control has a visible label or an accessible name.
- Section progress uses progressbar semantics and exposes current value.
- Error notices use alert semantics; save updates use polite live regions.
- Required and invalid fields expose `aria-required` and `aria-invalid` where applicable.
- Validation text is programmatically associated with its control.
- Focus moves to the first invalid field after blocked progression.
- Accordion triggers expose expanded state and controlled region.
- Mobile section sheet uses dialog semantics, closes with Escape, and returns focus to its trigger.
- Icons supplement text and are hidden from assistive technology when decorative.
- Status is never communicated by color alone.
- Keyboard users can complete every field, upload, section navigation, repeatable group, review, and submission action.

## 15. Data Protection and Error Safety

- Never display backend stack traces or internal IDs as primary error text.
- Do not clear the in-memory draft after a network failure.
- Do not submit twice while the first request is active.
- Do not silently discard a repeatable entry containing data.
- Uploaded documents are associated with the current draft admission only.
- Starting another admission occurs only after successful completion or explicit confirmation.
- Navigating away with unsaved data should produce a consistent warning in the admin flow.

## 16. Current Implementation Mapping

| Concern | Current source |
|---|---|
| Admin route | `frontend/src/app/features/admin/admin.routes.ts` |
| Sidebar entry and active state | `frontend/src/app/features/admin/layout/navigation/admin-navigation.config.ts` |
| Form controller/state | `frontend/src/app/features/student/admission/dynamic-admission.component.ts` |
| Form page markup | `frontend/src/app/features/student/admission/dynamic-admission.component.html` |
| Progress header | `frontend/src/app/shared/ui/form-progress-header/` |
| Journey rail | `frontend/src/app/shared/ui/admission-journey-rail/` |
| Section rendering | `frontend/src/app/shared/ui/dynamic-section-renderer/` |
| Subsection groups | `frontend/src/app/shared/ui/form-sub-group/` |
| Dynamic fields | `frontend/src/app/shared/ui/dynamic-field-renderer/` |
| Upload control | `frontend/src/app/shared/ui/upload-field/` |
| Bottom actions | `frontend/src/app/shared/ui/form-action-bar/` |
| Mobile section sheet | `frontend/src/app/shared/ui/mobile-section-navigator-sheet/` |
| Validation rules | `frontend/src/app/features/admin/admissions/admission-form-validation.ts` and dynamic form methods |

## 17. Current Gaps to Preserve as Explicit Design Decisions

These are current-state concerns that must be resolved during implementation rather than left ambiguous:

- The form-unavailable state has no visible retry action.
- Embedded new admission does not currently show a dedicated page-level cancel/exit action.
- Unsaved-change protection is explicit for the separate application editor route, but not clearly enforced for the new-admission route.
- Repeatable entry removal is immediate in the current template.
- Page-level errors exist, but field-level validation and focus movement must be consistently verified for every dynamic field type.
- Section selection behavior should explicitly define whether it auto-saves before navigation.
- Conditional hidden-value retention needs one documented policy.
- Mobile sheet focus trapping and focus return require runtime verification.
- The completion action currently uses the existing labels `Not Approved Students` and `Approved Students`; sidebar terminology currently uses `Awaiting review` and `Approved students`, so labels should be aligned.

## 18. Acceptance Flow

The design is complete when an administrator can:

1. Open `Admissions` from the compact sidebar.
2. Select `New admission` and see a stable loading state.
3. Receive a new draft based on the active form.
4. Complete standard, dependent, conditional, upload, and repeatable fields.
5. Save without leaving the section.
6. Move through sections only after required validation passes.
7. Revisit sections from desktop navigation or the mobile sheet.
8. Review completion status for every section.
9. Submit once without losing responses.
10. See the generated Student ID and correct destination queue.
11. Start another clean admission without data from the previous record.

