# Student Attendance — Current Feature UI/UX Specification

**Product:** TASKLY / GEU ERP  
**Area:** Student portal  
**Route:** `/student/attendance`  
**Document type:** Current-state audit and implementation-ready UI/UX specification  
**Last reviewed:** 7 September 2026

## 1. Purpose

This document describes the student-side attendance feature as it currently exists in the repository. It covers the visible interface, data flow, loading and error states, responsive behavior, accessibility, dashboard integration, known limitations, and the recommended professional target experience.

The document separates:

- **Current implementation:** behavior that exists now.
- **Observed gap:** a limitation verified in the current implementation.
- **Target requirement:** a recommended improvement, not current behavior.

No runtime behavior is changed by this document.

## 2. Feature objective

The attendance feature should let an authenticated student quickly answer four questions:

1. What is my overall attendance percentage?
2. How many conducted lectures did I attend or miss?
3. Which subjects need attention?
4. Is my attendance above the institution's required threshold?

The current page answers the first three questions at a basic numerical level. Threshold guidance and decision support exist only partially on the dashboard and are not yet visible on the full attendance page.

## 3. Current implementation map

| Responsibility              | Current source                                                                                                          |
| --------------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| Attendance page controller  | `frontend/src/app/features/student/academics/student-attendance.component.ts`                                           |
| Attendance page template    | `frontend/src/app/features/student/academics/student-attendance.component.html`                                         |
| Shared page styling         | `frontend/src/app/features/student/styles/_student-fees.scss`                                                           |
| Additional imported styling | `frontend/src/app/features/student/academics/student-timetable.component.scss`                                          |
| Student route               | `frontend/src/app/features/student/student.routes.ts`                                                                   |
| Student navigation item     | `frontend/src/app/features/student/shared/config/student-navigation.config.ts`                                          |
| API client                  | `frontend/src/app/core/api.service.ts`                                                                                  |
| Attendance response model   | `frontend/src/app/core/models.ts`                                                                                       |
| Student attendance endpoint | `backend/src/routes/attendance.routes.js`                                                                               |
| Dashboard attendance card   | `frontend/src/app/features/student/dashboard/components/attendance-overview-card/attendance-overview-card.component.ts` |
| Dashboard data mapping      | `frontend/src/app/features/student/dashboard/data-access/student-dashboard.facade.ts`                                   |

## 4. Entry points and navigation

### 4.1 Primary navigation

The student sidebar/mobile navigation contains an enabled item with:

- Label: `Attendance`
- Icon: `calendar-check`
- Route: `/student/attendance`
- Accessible name: `Open attendance`
- Navigation order: third student module

### 4.2 Dashboard entry point

The student dashboard contains an Attendance operational card. When data is available, it displays:

- Overall attendance percentage in a circular progress visualization.
- Classes attended.
- Classes held.
- A `View attendance` button that opens `/student/attendance`.

The dashboard also maps attendance into these internal conditions:

| Percentage            | Dashboard status |
| --------------------- | ---------------- |
| No conducted lectures | `unknown`        |
| 75% or above          | `safe`           |
| 65% to below 75%      | `warning`        |
| Below 65%             | `critical`       |

The minimum required value is currently hard-coded to `75` in the dashboard view model. The full attendance page does not currently display this threshold or the safe/warning/critical state.

## 5. Current page information architecture

The full attendance page contains three vertical regions.

### 5.1 Page heading

Current content:

- Breadcrumb: `Academics / Attendance`
- Page title: `My Attendance`
- Supporting text: `Only lectures where faculty saved attendance are included.`

The supporting text is important because timetable entries alone do not count as conducted lectures. A lecture affects attendance totals only after faculty attendance has been saved.

### 5.2 Overall attendance summary

The summary panel displays:

- Heading: `Overall Attendance`
- Present/total sentence, for example `42 present from 50 conducted lectures`
- Overall attendance percentage

Current formula:

```text
overall attendance percentage = present lectures / total conducted lectures × 100
```

The API rounds this value to two decimal places. When no lectures have been conducted, the value is `0`.

### 5.3 Subject attendance table

The table contains seven columns:

| Column         | Source                    | Fallback |
| -------------- | ------------------------- | -------- |
| Subject        | `subjectName`             | None     |
| Subject code   | `subjectCode`             | Em dash  |
| Faculty        | `facultyNames.join(', ')` | Em dash  |
| Total lectures | `totalLectures`           | `0`      |
| Present        | `presentLectures`         | `0`      |
| Absent         | `absentLectures`          | `0`      |
| Attendance     | `attendancePercentage`    | `0%`     |

Each row is tracked by `subjectId`. If no subject rows are available, the table displays `No attendance has been marked yet.` across all seven columns.

## 6. Current state behavior

### 6.1 Loading

On initial entry:

- `loading` is set to `true`.
- The page displays `Loading attendance…` inside a message panel.
- The client requests `GET /api/v1/student-attendance` with the student bearer token.

There is no skeleton table, progressive loading state, timeout message, or manual refresh action.

### 6.2 Loaded with attendance

When the request succeeds:

- Subject summaries replace the local empty array.
- Overall totals replace the initial zero values.
- The loading state ends.
- The summary and subject table become visible.

### 6.3 Loaded without marked attendance

The API may still return timetable subjects with zero lectures because it seeds the subject summary from student-visible timetable entries before applying saved attendance records.

Possible zero-data presentations are therefore:

- Subjects exist, but every subject shows `0` lectures and `0%`.
- No subjects exist, and the table-level empty message is displayed.

The page does not currently distinguish `No subjects allocated` from `Attendance not marked yet`.

### 6.4 Error

When the request fails:

- Loading ends.
- The page displays `Your attendance is temporarily unavailable.`
- The message has `role="alert"`.

There is currently no retry button, error code, offline treatment, support action, or retained last-known data.

### 6.5 Missing session token

The component reads the token from `StudentSessionService`. If the token is missing, the constructor returns without making a request. The route is expected to be protected by the student authentication flow; however, the local loading state remains `true` if the component is ever reached without a token.

## 7. Current data contract

### 7.1 Subject response

```ts
interface StudentAttendanceSubject {
  subjectId: string;
  subjectName: string;
  subjectCode: string;
  facultyNames: string[];
  totalLectures: number;
  presentLectures: number;
  absentLectures: number;
  attendancePercentage: number;
}
```

### 7.2 Overall response

```ts
interface StudentAttendanceOverall {
  totalLectures: number;
  presentLectures: number;
  absentLectures: number;
  attendancePercentage: number;
}
```

### 7.3 Endpoint response

```json
{
  "subjects": [],
  "overall": {
    "totalLectures": 0,
    "presentLectures": 0,
    "absentLectures": 0,
    "attendancePercentage": 0
  }
}
```

### 7.4 Backend scope

The backend filters saved attendance records using the authenticated student's:

- Admission identifier.
- Academic session.
- Current semester, defaulting to semester `1` if absent.

It also loads timetable entries visible to that student so allocated subjects can appear before attendance has been marked.

Faculty names are de-duplicated with a set and returned as an array. Overall totals are calculated from the subject summaries.

## 8. Current visual system

### 8.1 Reused design language

The page uses student design tokens for:

- Text and muted text colors.
- Surface backgrounds.
- Borders and dividers.
- Primary blue accents.
- Card radius and spacing.

### 8.2 Current styling dependency

The attendance component imports the fee stylesheet and timetable stylesheet. Its page heading and loading/error message reuse fee-page classes such as:

- `student-fees-page`
- `student-fees-heading`
- `student-fees-message`

The overall and subject sections use `student-fee-ledger` and `student-fee-ledger__table`. Dedicated rules for these exact attendance classes are not currently present. Existing fee styles target similarly named but different selectors such as `student-fee-ledger-card` and `student-fee-ledger-table`.

This naming mismatch means the attendance panels and table do not receive the complete card/table treatment that their markup implies.

### 8.3 Typography hierarchy

Current desktop hierarchy:

- Page title: approximately `32px`.
- Breadcrumb: approximately `13px`.
- Supporting text: standard muted body text.
- Table content: browser/table defaults unless inherited globally.

Current mobile heading behavior:

- Page title increases to approximately `34px`.
- Breadcrumb and supporting paragraph are hidden below `768px`.

Hiding the supporting paragraph removes the explanation of what counts as attendance on mobile.

## 9. Current responsive behavior

### 9.1 Desktop

The page uses a vertical grid with approximately `20px` gaps. The overall summary and subject table use the available content width.

### 9.2 Tablet

The shared fee styles reduce some multi-column fee layouts, but the attendance page does not contain those fee-specific layouts. The attendance table remains a seven-column semantic table.

### 9.3 Mobile

Below `768px`:

- The page adds bottom padding to avoid the student mobile navigation.
- Breadcrumb and heading description are hidden.
- The title remains visible.
- There is no attendance-specific mobile subject-card layout.
- There is no verified dedicated horizontal-scroll rule for `student-fee-ledger__table`.

Long subject names, multiple faculty names, and seven columns can therefore create crowding or viewport overflow.

## 10. Current accessibility

### Existing strengths

- The page container has `aria-label="Student attendance"`.
- The error message uses `role="alert"`.
- A native semantic table is used with a header row and column headings.
- The navigation item has an explicit accessible label.
- The dashboard attendance ring has an accessible percentage label.
- The dashboard action is a real button with router navigation.

### Current accessibility gaps

- The loading message does not use `aria-live` or `role="status"`.
- The table has no `<caption>` describing its scope.
- Percentage values rely only on numbers; no textual safe/warning/critical meaning is provided.
- No focusable row action or subject detail drill-down exists.
- The mobile page hides context that explains which lectures are counted.
- No refresh result is announced because refresh is not implemented.

## 11. Current UX strengths

- The page is read-only and easy to understand at a basic level.
- The API is student-authorized and scoped to the active student's academic context.
- Overall and subject-level totals are consistent because both come from the same endpoint.
- The page clearly states that only faculty-saved attendance is counted.
- Empty, loading, loaded, and error branches exist.
- Dashboard-to-detail navigation is direct.
- Subject rows support multiple faculty members.

## 12. Current UX and scalability gaps

### High priority

1. **Incomplete visual styling:** Attendance ledger class names do not match the available fee ledger styles.
2. **Weak mobile presentation:** A seven-column table is not converted into compact subject cards.
3. **No threshold guidance:** The full page does not tell the student whether attendance is safe, at risk, or critical.
4. **No recovery action:** Error state offers no retry.
5. **No refresh timestamp:** Students cannot tell how current the attendance data is.
6. **Ambiguous empty state:** No allocated subjects and no saved attendance use nearly the same presentation.

### Medium priority

1. No subject search.
2. No status filter such as `All`, `Safe`, `At risk`, or `Critical`.
3. No sorting by percentage, subject, present count, or absent count.
4. No academic session/semester context displayed on the page.
5. No attendance trend or recent change information.
6. No subject-level history or date-wise drill-down.
7. No pagination or virtualisation strategy if subject structures become unusually large.
8. Long faculty lists are not truncated or expanded intentionally.
9. Percentages may display unnecessary decimals without a consistent formatting policy.

### Backend/data limitations

The existing student endpoint returns aggregate subject totals only. The current response cannot support:

- Date-wise attendance history.
- Calendar view.
- Lecture-level correction details.
- Monthly trends.
- Attendance changes since the last visit.
- Faculty remarks.
- Excused/medical leave states.

Those experiences require an expanded or separate student-authorized endpoint.

## 13. Recommended target experience

This section is a target design specification and is not current behavior.

### 13.1 Desktop page structure

```text
Page heading + academic context + last updated + refresh
Overall attendance hero
Four KPI cards
Search + status filters + sorting
Subject attendance table
Legend / calculation note
```

### 13.2 Page header

Include:

- Breadcrumb: `Academics / Attendance`.
- Title: `My Attendance`.
- Academic context pill: session, semester, programme, and section.
- `Last updated` timestamp.
- Compact refresh button.
- Explanatory line that remains visible on mobile.

### 13.3 Overall attendance hero

The hero should show:

- Large accessible progress ring.
- Overall percentage.
- Status label: `On track`, `Needs attention`, or `Critical`.
- Required threshold, supplied by configuration rather than hard-coded UI text.
- Present, absent, and conducted totals.
- A short actionable sentence.

Recommended status semantics:

| State    | Rule                                        | Color role | Suggested message                                     |
| -------- | ------------------------------------------- | ---------- | ----------------------------------------------------- |
| Unknown  | No conducted lectures                       | Neutral    | Attendance will appear after faculty saves a lecture. |
| Safe     | At or above required threshold              | Success    | You are currently on track.                           |
| Warning  | Within 10 percentage points below threshold | Warning    | Attend upcoming classes to recover.                   |
| Critical | More than 10 points below threshold         | Danger     | Immediate attendance improvement is required.         |

Color must not be the only indicator. Always pair color with an icon and text.

### 13.4 KPI cards

Display four compact cards:

1. Conducted lectures.
2. Present.
3. Absent.
4. Required attendance percentage.

Cards should use small professional icons, consistent numerical alignment, and no oversized radio/check controls.

### 13.5 Subject controls

Recommended controls:

- Search by subject name, code, or faculty.
- Status tabs: `All`, `On track`, `At risk`, `Critical`, `Not started`.
- Sort: lowest attendance, highest attendance, subject name, most absences.
- Optional semester selector only when the API supports historical semesters.

Search should debounce locally for the current aggregate result set. If the endpoint later becomes paginated, search and filters should move server-side.

### 13.6 Desktop subject table

Recommended columns:

| Column     | Behavior                                          |
| ---------- | ------------------------------------------------- |
| Subject    | Name plus code as secondary text                  |
| Faculty    | First faculty name plus `+N` overflow disclosure  |
| Conducted  | Right-aligned number                              |
| Present    | Right-aligned number with success accent          |
| Absent     | Right-aligned number with danger accent           |
| Attendance | Percentage, compact progress bar, and text status |
| Action     | `View details` when history is supported          |

Keep the header visible while scrolling long result sets. Use server pagination if the result count can exceed approximately 100 rows.

### 13.7 Mobile subject cards

Below `768px`, replace the wide table visually with one card per subject:

```text
Subject name                         72%
CS-201 · Faculty name          Needs attention
[---------------- progress ----------------]
Conducted 24       Present 17       Absent 7
```

Mobile requirements:

- No horizontal page scrolling.
- Minimum interactive target size of `44 × 44px`.
- Subject code and faculty wrap safely.
- Percentage and status remain visible without opening the card.
- Secondary detail may expand inline or open a bottom sheet.
- Preserve the attendance calculation note.

### 13.8 Loading state

Use a stable skeleton that mirrors the final layout:

- Overall hero skeleton.
- Four KPI skeleton cards.
- Five subject-row/card skeletons.

The loading container should use `aria-busy="true"`, and a visually available status message should use `role="status"` or an appropriate polite live region.

### 13.9 Empty states

Use distinct empty states:

| Condition                  | Title                     | Message                                                       |
| -------------------------- | ------------------------- | ------------------------------------------------------------- |
| No subjects allocated      | No subjects available     | Your academic subjects have not been allocated yet.           |
| Subjects exist, no records | Attendance not marked yet | Attendance will appear after faculty saves the first lecture. |
| Filters return no matches  | No matching subjects      | Change or clear the current search and filters.               |

### 13.10 Error state

The error panel should contain:

- Clear title: `Attendance could not be loaded`.
- Brief non-technical explanation.
- Primary `Try again` button.
- Secondary support link when repeated failures occur.
- Last-known attendance, if safe cached data is available, visibly labelled as potentially outdated.

## 14. Recommended interaction rules

1. Refresh must not clear existing data while the new request is pending.
2. Filters must update the visible count immediately.
3. Clearing search must restore the previous filter state.
4. Status thresholds must come from one shared configuration source.
5. Percentage formatting should use a maximum of one decimal place in the UI while retaining full API precision.
6. Zero-conducted subjects should show `Not started`, not a misleading critical `0%`.
7. Multiple faculty names should be accessible through an inline disclosure or tooltip that also works with keyboard and touch.
8. URL query parameters should preserve search, status, sorting, session, and semester when those controls are introduced.

## 15. Recommended component structure

```text
StudentAttendancePage
├── AttendancePageHeader
├── AttendanceOverallHero
├── AttendanceKpiGrid
├── AttendanceSubjectToolbar
├── AttendanceSubjectTable          (desktop/tablet)
├── AttendanceSubjectCardList       (mobile)
├── AttendanceEmptyState
├── AttendanceErrorState
└── AttendanceCalculationNote
```

Recommended state separation:

- API state: loading, refreshing, loaded, empty, error.
- Source data: overall and subjects.
- View state: search query, status filter, sort order.
- Derived data: visible subjects and visible status counts.
- Configuration: required attendance threshold.

## 16. Recommended API evolution

Keep the current aggregate endpoint for the overview, but consider adding:

```http
GET /api/v1/student-attendance?session=2026-27&semester=1
GET /api/v1/student-attendance/subjects/:subjectId/history?page=1&limit=25
```

Suggested aggregate metadata:

```json
{
  "academicContext": {
    "session": "2026-27",
    "semester": 1,
    "programme": "B.Tech Computer Engineering",
    "section": "A"
  },
  "policy": {
    "minimumRequiredPercentage": 75
  },
  "lastUpdatedAt": "2026-09-07T10:00:00.000Z"
}
```

Suggested lecture-history fields:

- Attendance date.
- Timetable period.
- Subject.
- Faculty.
- Present/absent status.
- Record update timestamp.
- Correction state or audit note, when institution policy allows it.

## 17. Acceptance criteria for a professional redesign

### Functional

- [ ] Authenticated students can load their current attendance.
- [ ] Overall totals equal the sum of subject totals.
- [ ] Search, filtering, and sorting produce correct visible results.
- [ ] A failed request can be retried without reloading the application.
- [ ] Zero-conducted subjects display `Not started`.
- [ ] Threshold state uses institution configuration.
- [ ] Dashboard and full-page status rules are identical.

### Desktop UI

- [ ] No content overlaps at supported viewport widths.
- [ ] Table headings and numerical columns align consistently.
- [ ] Long subject and faculty values truncate or wrap intentionally.
- [ ] Loading, empty, filtered-empty, and error states preserve layout stability.

### Mobile UI

- [ ] No horizontal page overflow at `320px` width.
- [ ] Subject information is presented as cards or an equally readable responsive pattern.
- [ ] Primary percentage and status are visible without interaction.
- [ ] Touch targets are at least `44 × 44px`.
- [ ] Bottom navigation does not cover page content.

### Accessibility

- [ ] Page title and heading hierarchy are logical.
- [ ] Loading and refresh completion are announced.
- [ ] Table includes a meaningful caption on desktop.
- [ ] Status is communicated with text and icon, not color alone.
- [ ] All controls work with keyboard and visible focus.
- [ ] Contrast meets WCAG 2.2 AA.
- [ ] Reduced-motion preferences are respected.

### Performance and scale

- [ ] Aggregate page load makes one attendance request.
- [ ] Search debounce prevents unnecessary server traffic.
- [ ] History uses pagination or cursor-based loading.
- [ ] Large faculty labels and subject lists do not shift the layout.
- [ ] Refresh retains current content until replacement data succeeds.

## 18. Recommended delivery order

### Phase 1 — Correct the current page

1. Replace fee-oriented class names with attendance-specific components/styles.
2. Add complete desktop card and table styling.
3. Add mobile subject cards.
4. Add retry, refresh, loading skeleton, and distinct empty states.
5. Share the dashboard threshold calculation with the full page.

### Phase 2 — Improve decision support

1. Add search, status filters, and sorting.
2. Add required-threshold guidance.
3. Add academic context and last-updated information.
4. Add accessible status labels and progress indicators.

### Phase 3 — Add detailed history

1. Create a student-authorized subject-history endpoint.
2. Add subject drill-down.
3. Add date/month filtering and trends.
4. Add correction/audit information according to institution policy.

## 19. Current-state conclusion

The existing feature has a correct basic data path and a clear read-only purpose. It successfully exposes overall and subject-level attendance from faculty-saved records. Its main weakness is presentation maturity: the full page does not yet match the richer dashboard visualization, has incomplete attendance-specific styling, and lacks responsive subject cards, threshold guidance, filtering, recovery, and detailed history.

The recommended first step is to preserve the current endpoint and calculation logic while rebuilding the page with dedicated attendance components and responsive styles. This delivers the largest UI/UX improvement without requiring an immediate backend redesign.
