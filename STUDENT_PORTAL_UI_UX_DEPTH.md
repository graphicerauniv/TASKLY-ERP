# Student Portal UI/UX Design Depth

> Scope: `/student` portal redesign specification. This document is the visual and interaction source of truth for every sidebar option, existing inner route, and future module. It is based on the current Angular route and navigation configuration.

## 1. Experience direction

The portal should feel calm, trustworthy and action-oriented: a student should understand their current academic position, pending work and money due within five seconds. Use generous whitespace, short labels, clear status chips and one dominant action per page.

### Shared shell

- Desktop: 264px expanded sidebar / 72px icon rail, 68px top header, content max-width 1536px.
- Mobile: 62px header, slide-over navigation drawer, fixed bottom navigation for Dashboard, Academics, Fees and Profile.
- Main background: `#F7F8F3`; surfaces: `#FFFEFC` and `#FFFFFF`; primary blue: `#2196F3`; navy text: `#0B1F3A`.
- Font: Manrope, fallback Inter/system-ui. Display 28px/800, H1 24px/800, H2 20px/700, H3 17px/700, body 14px/500, caption 12px/500.
- Cards: 18px radius, 1px `#D9E8F3` border, `0 8px 24px rgba(31,73,125,.08)` shadow. Module cards: 22px radius.
- Spacing: 4px base scale; common gaps 16, 24 and 32px. Focus ring: 3px `rgba(33,150,243,.25)`.
- Status colors: success `#16A36A`/`#E8F8F0`, warning `#E89A1C`/`#FFF4DC`, danger `#DF5252`/`#FFF0F0`, muted `#8190A5`.

### Global interaction rules

- Sidebar click opens the route and marks the item active with a blue left indicator, soft blue background and filled icon.
- Every page has breadcrumb or back link, page title, one-line context, and a right-side primary action where applicable.
- Loading uses skeleton blocks matching the final layout; errors retain the page frame and offer `Try again`.
- Empty states use the existing student illustrations where available, explain why the state is empty, and show a next action.
- Destructive actions require a confirmation dialog. Payment and download actions show progress and a success/error result.
- Never use color alone for status; pair color with text and icon. All controls need keyboard focus, labels, and 44px minimum touch target.

## 2. Navigation map

| Sidebar option | Route | Current state | Primary student job |
|---|---|---:|---|
| Dashboard | `/student/dashboard` | Implemented | See overview and urgent actions |
| Academics | `/student/academics` | Planned/disabled | Track subjects, credits and results |
| Attendance | `/student/attendance` | Planned/disabled | Check attendance and shortage risk |
| Fees | `/student/fees` | Implemented | Understand and pay dues |
| Exams | `/student/exams` | Planned/disabled | View timetable, admit card and results |
| Hostel | `/student/hostel` | Planned/disabled | View allocation, room and requests |
| Complaints | `/student/complaints` | Planned/disabled | Raise and track support issues |
| Placement | `/student/placement` | Planned/disabled | Explore drives and applications |
| Documents | `/student/documents` | Planned/disabled | Find, upload and download records |
| Campus | `/student/campus` | Planned/disabled | Discover services, map and contacts |
| Profile (profile menu) | `/student/profile` | Implemented | Review identity and education data |

Disabled modules should appear as `Coming soon` only if product wants users to discover them; otherwise hide them from the active list. Do not route a disabled click to a broken page.

## 3. Page-by-page design

### 3.1 Dashboard — `/student/dashboard`

**Purpose:** a personalized command center, not a data dump.

**Layout:** greeting hero at top with student name, current course/session and a small day illustration. Below it, a 4-column KPI row: attendance, current fee due, next exam/event, and profile completion. Then a responsive module grid, followed by two-column operational cards: upcoming schedule/notices and recent documents.

**Cards and content:**

- Hero: `Good morning, {name}`; academic context; `View profile` and urgent `Pay fees` action.
- Academic progress: progress ring/bar, semester, CGPA/credits when available, `View academics`.
- Attendance overview: percentage, present/absent count, shortage warning threshold, `View attendance`.
- Fee status: outstanding balance, due date, `Pay now`; use violet fee tone and red only for overdue.
- Module cards: Academics, Attendance, Fees, Exams, Hostel, Complaints, Placement, Documents, Campus. Each has icon, one-line value, status and arrow.
- Quick updates: notices, deadlines and unread count; row click opens detail drawer/page.

**Actions:** module click, `Pay now`, `View all`, notification/profile menu, mobile bottom-nav selection. Keep no more than two prominent CTAs in the first viewport.

**States:** first login welcome, normal data, partial data, no notices, API failure, and skeleton. A missing module should show `Coming soon`, not a fake zero.

### 3.2 Profile — `/student/profile`

**Purpose:** give confidence that identity and academic records are correct.

**Layout:** profile hero with avatar, full name, Student ID, course, session and verification badge. A sticky section navigator on desktop and horizontal section tabs on mobile. Content is grouped into Personal details, Contact, Academic profile, Education records, Documents and Digital ID.

**Visual treatment:** white detail panels; read-only fields use soft gray-blue fill; verified values get a green check and `Verified` chip. Sensitive Student ID has copy action and accessible tooltip.

**Actions:** `Download ID`, `View digital ID`, `Download document`, `Request correction`, copy Student ID. Correction opens a side sheet with field, current value, requested value and reason—not inline uncontrolled editing.

**States:** profile completion percentage, missing document callouts, verification pending, no document, download failure and read-only security message.

### 3.3 Fees overview — `/student/fees`

**Purpose:** answer “how much do I owe and what can I do now?”

**Layout:** page header with active fee mode chip (`Yearly`/`Semester-wise), total outstanding hero card and `Pay fees` button. Below: Academic Fee and Hostel Fee tabs/cards, period filter, fee summary cards and quick links to Details, History, Receipts, Challan, Installments, Scholarship and Support.

**Summary card:** gross amount, scholarship, one-time discount, yearly-payment discount (separate line), penalty, amount paid, excess credit and remaining balance. Use tabular numerals for currency.

**Actions:** `Pay fees`, `Compare modes`, `View details`, `Download challan`, `Ask for support`. Only published ledgers are shown as payable.

### 3.4 Pay fees — `/student/fees/pay`

**Purpose:** complete payment with minimum uncertainty.

**Layout:** left panel lists selectable published ledgers and fee periods; right sticky payment summary. Scope switch: Academic / Hostel; amount selector: full due or custom amount up to outstanding balance; payment method section.

**Primary CTA:** `Proceed to secure payment`. Display Razorpay/security note, selected period, amount and refund/help link immediately above the button.

**States:** no payable dues (show paid confirmation), custom amount validation, payment processing, success with receipt number/download, cancelled payment, verification pending and failed payment with retry.

### 3.5 Fee details — `/student/fees/details`

**Purpose:** provide an auditable breakdown.

**Layout:** period selector at top; expandable fee-head table with columns Fee head, Gross, Scholarship/discount, Penalty, Paid, Balance. Desktop uses table; mobile uses stacked accordion rows. Summary remains sticky on desktop.

**Rules:** hide zero-value fee heads; show internal priority numbers never; show excess-credit adjustment as a positive, clearly labelled row. `Pay this balance` should preserve the selected period.

### 3.6 Payment receipts — `/student/fees/receipts`

Receipt list cards/table: receipt number, date, method, fee type, amount, status and download icon. Filters for Academic/Hostel, date and status; search by receipt number. Row click opens receipt preview drawer. Empty state: “Receipts appear here after a payment is verified.”

### 3.7 Payment history — `/student/fees/history`

Use a chronological timeline on mobile and table on desktop. Each event shows payment, allocation, excess credit created, or automatic future-fee adjustment. Include amount received, amount allocated, reference, period and remaining credit. Filter by period/type/status; preserve an audit-friendly detail drawer.

### 3.8 Fee challan — `/student/fees/challan`

Header explains challan validity and selected fee period. Show printable challan preview with student identity, fee heads, payable amount, due date and reference. Actions: `Download PDF`, `Print`, `Back to fees`. If no published due exists, show no-challan illustration and link to Fee Details.

### 3.9 Installments — `/student/fees/installments`

Show installment progress as a horizontal stepper/timeline: installment number, due date, amount, paid/balance and status. Highlight next payable installment with `Pay installment`; overdue gets warning/danger treatment and penalty explanation. Include total plan summary and mobile accordion.

### 3.10 Scholarships — `/student/fees/scholarships`

Card per scholarship: name, type (percentage/fixed), amount, applicable fee period, one-time/carry-forward and status. A top summary shows total benefit and how it affects Tuition Fee. Hide admin-only remarks. Empty state uses `no-scholarship` artwork and explains how to contact Accounts.

### 3.11 Fee support — `/student/fees/support`

Top card: open support request button, response expectation and contact channel. Request form fields: category, fee period, subject, description, attachment and preferred contact. Below, request cards show ticket ID, created date, status, latest response and `View conversation`. Use status progression: Open → In review → Waiting for student → Resolved.

### 3.12 Compare fee modes — `/student/fees/compare`

Two equal comparison columns: Yearly and Semester-wise. Clearly badge the active mode. Show gross, scholarships, manual discounts, yearly 5% discount only in Yearly, penalties if applicable, net annual cost and difference. Add a short explanation that comparison does not create a second payable ledger. CTA: `Request mode change` opens support with mode prefilled; students cannot silently change billing mode.

## 4. Future module designs

### Academics — `/student/academics`

Header: course, semester and academic year selector. KPI cards for CGPA, credits earned, current semester and backlogs. Subject cards/table show code, faculty, credits, internal/external marks and result status. Actions: view syllabus, download transcript, request correction. Include no-data, result-pending and failed-load states.

### Attendance — `/student/attendance`

Hero percentage with safe/warning/shortage band; subject-wise bars; monthly calendar; present/absent/leave counts. Actions: filter semester/subject, request attendance correction, download report. Never imply eligibility solely from color—show exact threshold text.

### Exams — `/student/exams`

Tabs Upcoming, Admit card, Results. Upcoming exam cards show subject, date, time, room and preparation status. Actions: download admit card, add reminder, view result/marksheet. Handle timetable not published and result pending.

### Hostel — `/student/hostel`

Allocation hero: hostel, block, room, bed and validity. Cards for fee balance, roommates, wardens, rules and maintenance requests. Actions: download allocation letter, raise request, contact warden. Unallocated state must explain Hostel Fee is unavailable without an active allocation.

### Complaints — `/student/complaints`

Dashboard with open/in-review/resolved counts, searchable ticket list and category filter. New complaint form includes category, location, description, attachment and urgency. Detail page/drawer has conversation timeline, SLA, assignee and close/reopen action.

### Placement — `/student/placement`

Profile-readiness banner; opportunity cards show company, role, package, eligibility, deadline and application status. Actions: view details, apply, upload resume, withdraw where allowed. Empty state distinguishes “no eligible drives” from “profile incomplete.”

### Documents — `/student/documents`

Document vault grouped by Identity, Academic, Finance and Other. Each row has type, status, updated date, preview/download. Actions: upload, replace, request document. Show file rules before upload, progress, virus/type error and verification pending.

### Campus — `/student/campus`

Search-first campus hub with service cards, map shortcut, office hours and contact directory. Categories: Library, Transport, Health, IT Helpdesk, Clubs and Emergency. Emergency contact stays visually distinct and accessible from mobile.

## 5. Responsive and accessibility specification

- Breakpoints: desktop ≥1200px, tablet 768–1199px, mobile <768px.
- Desktop grids collapse from 4 → 2 → 1 columns; tables become accordions/cards on mobile.
- Keep primary action sticky only when it does not cover content; on mobile use a bottom action bar for payment/form submission.
- Minimum contrast: WCAG AA. Use visible focus, semantic headings, labelled icon buttons, live regions for payment status, and `aria-current` for active navigation.
- Currency uses `₹` and Indian grouping; dates use a consistent locale. Never truncate Student ID, receipt number or amount without copy/view access.

## 6. Component inventory

Build and reuse: `StudentShell`, `Sidebar`, `Header`, `MobileDrawer`, `BottomNav`, `PageHeader`, `HeroCard`, `MetricCard`, `StatusChip`, `Tabs`, `FilterBar`, `DataTable`, `MobileAccordion`, `Timeline`, `EmptyState`, `Skeleton`, `SideSheet`, `ConfirmDialog`, `Toast`, `FileUploader`, `ReceiptPreview`, `CurrencySummary` and `ProgressRing`.

## 7. Acceptance checklist

- Every enabled sidebar click lands on a real route and preserves active state.
- Every page has loading, empty, error and success states.
- Every primary action has a visible result and recovery path.
- Fees never expose unpublished ledgers, zero-value heads, internal priorities or admin remarks.
- Paid amounts, excess credit and automatic adjustments are visually distinguishable and auditable.
- All screens work at mobile width, keyboard-only navigation and screen-reader semantics.
