# Updated Student Admission and Fee Flow

> Status: Implemented baseline. This document describes the admission, billing, comparison, payment, credit and promotion behaviour now implemented in Taskly ERP.

## 1. Purpose

This flow covers the complete student journey from admission-form creation to admission, fee generation, scholarships and discounts, online/offline payments, excess-credit adjustment, future-fee publication, and academic promotion.

The central rule is that a student chooses a preferred fee-payment mode during admission:

- Yearly fee
- Semester-wise fee

The choice is saved with the admission and becomes the student's active billing mode after approval. The student can still view a comparison of both yearly and semester-wise fee structures, but only the active mode creates payable dues.

## 2. Master data and course configuration

Before admissions begin, the administrator configures:

- University
- College
- Department
- Course level
- Course
- Course code
- Course duration and total semesters
- Academic session
- Domicile
- Student type
- Country, when required
- Current academic year options
- Fee types

The course code and academic session are used for Student ID generation.

Example:

```text
Session: 2026-2027
Course code: CSE
Student ID: 26CSE4821
```

## 3. Admission-form configuration

The published admission form contains all required personal, academic, course, session, domicile, student-type, and document fields.

The form must also contain a required **Fee Type** master-data dropdown with two mapped options:

1. Yearly fee
2. Semester-wise fee

This custom-form field is the single source of truth for the student's payment choice. The Yearly master value maps to `feeFrequencyChoice = year`, and Semester maps to `feeFrequencyChoice = semester`. No separate hardcoded fee-mode card is displayed.

The course and session fields continue to use configured master data. The current academic year should come from the form/course configuration and be saved with the admission.

## 4. Draft admission

When the form is saved without submission:

- The record remains a draft.
- It appears in Admission Drafts/Unfilled Data.
- No Student ID is generated.
- The selected fee mode is saved if the student has selected it.
- The form can be reopened and edited.
- Missing required fields do not prevent saving.

## 5. Admission submission and Student ID

When Submit is selected:

1. Every required field is validated.
2. Fee payment mode must be selected.
3. Course and session must be valid master-data selections.
4. The Student ID is generated.
5. The admission moves to Awaiting Review/Not Approved.

Student ID format:

```text
Last two digits of starting session year + course code + four random digits
```

The Student ID is not generated for a draft.

## 6. Admission review and approval

The administrator can open and edit a submitted/not-approved student before approval.

During approval, the system displays the fee mode chosen on the admission form. The administrator verifies it along with:

- Current academic year
- Current semester
- Course and session mappings
- Student status
- Initial portal password

After approval:

- Status becomes approved.
- Student becomes active.
- The student can log in with the Student ID.
- The student must change the temporary password on first login.
- The saved form selection becomes the student's active fee mode.

The administrator should not silently change the student's selected fee mode during approval. If a correction is required, it should be recorded as an explicit fee-mode change.

## 7. Fee master setup

The administrator creates:

- Fee book for the college and academic session
- Ordered fee heads
- Yearly course-fee structure
- Semester-wise course-fee structure
- Hostel-fee structure
- Fee publication schedules
- Penalty rules

Fee heads have internal numeric priority. Priority controls payment allocation but is not shown in the student portal.

Fee heads with an amount of zero are not displayed in the student's fee details.

## 8. Yearly and semester-wise fee structures

Both pricing structures must be available for comparison:

### Yearly structure

- Shows the complete academic-year fee.
- Receives an additional 5% yearly-payment discount.
- The 5% discount is not applied to semester-wise billing.
- Existing scholarships and approved discounts are shown in the yearly comparison.

### Semester-wise structure

- Shows the academic-year charges divided/configured across its two semesters.
- Does not receive the extra 5% yearly-payment discount.
- Existing scholarships and approved discounts are shown according to their semester applicability.

The comparison is informational. It does not create two simultaneous payable versions of the same fee.

Only the student's active fee mode determines the payable ledgers.

## 9. Fee generation after approval

### Student selected semester-wise fee

When the administrator creates the student's fee account:

- The current semester ledger is created and published.
- The next semester ledger for the same academic-year cycle is also prepared.
- The next semester ledger remains hidden.
- Only the current semester ledger appears in the student portal.
- The student remains academically in the current semester.

Example:

```text
Student current semester: Semester 1
Created ledgers: Semester 1 and Semester 2
Student can see: Semester 1 only
Semester 2 status: Hidden/prepared
```

### Student selected yearly fee

- The current academic-year ledger is created and published.
- The payable total includes the configured yearly fee less the additional 5% yearly-payment discount.
- The next academic-year fee is not payable until it is prepared and published through the future-fee flow.

### Hostel fee

Hostel Fee is independent of yearly/semester academic billing and requires:

- Active hostel allocation
- Matching session
- Matching hostel, room type and capacity
- Configured hostel fee structure

If no matching allocation exists, the student sees that they are not enrolled/assigned for Hostel Fee.

## 10. Student fee-mode comparison

The student portal provides a **Compare Fee Modes** view.

It displays:

- Current active mode
- Yearly gross fee
- Yearly 5% payment discount
- Yearly scholarships and other discounts
- Yearly net payable amount
- Semester 1 gross fee
- Semester 1 scholarships and discounts
- Semester 1 net amount
- Semester 2 gross fee
- Semester 2 scholarships and discounts
- Semester 2 net amount
- Total semester-wise annual cost
- Difference between yearly and semester-wise totals

Comparison data is calculated from fee-master configuration and does not create payable dues.

The student cannot directly change the active fee mode. The student can request the administrator to change it.

## 11. Fee-mode change request

The future change flow should be:

1. Student reviews both structures.
2. Student requests a fee-mode change from the administrator.
3. Administrator reviews existing ledgers, scholarships, discounts, payments and excess credit.
4. If no payment exists, the old unpaid payable ledger can be replaced with the new mode.
5. If payments exist, the system must preserve the paid amount and require an Accounts-controlled conversion/adjustment.
6. The administrator confirms the change.
7. The new active billing mode is saved.
8. Payable ledgers are regenerated without duplicating charges.
9. A history record stores old mode, new mode, reason, administrator and date.

The comparison view remains available after a mode change.

## 12. Scholarship flow

Scholarships remain applicable only to Tuition Fee.

Scholarship masters support:

- Preconfigured value: saved percentage or fixed amount
- Custom during assignment: value selected while applying it to a student

When assigning a scholarship, the administrator chooses:

- Scholarship head
- Custom percentage/fixed value when required
- One-time or carry-forward
- Target fee period for a one-time scholarship

Multiple different scholarships can be assigned to the same student.

Scholarships appear in:

- The active payable ledger
- Yearly/semester comparison calculations
- Student My Scholarships page

Scholarship totals cannot reduce Tuition Fee below zero.

## 13. One-time discount flow

A one-time discount:

- Is entered directly for a student
- Is not stored as reusable discount master data
- Has percentage or fixed calculation
- Has an internal administrative remark
- Applies to one selected fee period
- Does not carry forward
- Reduces Tuition Fee only

The internal remark is not shown to the student.

The additional 5% yearly-payment discount is a system fee-mode benefit and must be shown separately from scholarships and manual one-time discounts.

## 14. Student portal fee display

After login, the student opens Fees from the main dashboard.

The portal shows:

- Academic Fee
- Hostel Fee
- Current active fee mode
- Published fee periods
- Gross charges
- Scholarships
- One-time discounts
- Yearly-payment discount, when applicable
- Penalties
- Amount received
- Excess credit
- Remaining balance
- Payment history
- Receipts

Only published ledgers are payable and visible in the normal fee view. Hidden future ledgers remain admin-only until publication.

## 15. Online payment

The student can pay through Razorpay using:

- One selected published ledger
- All published Academic Fee dues
- All published Hostel Fee dues
- A custom amount up to the current outstanding balance

After successful verification:

- Payment is recorded.
- Amount is allocated according to payment priority.
- Ledger balances are updated.
- Receipt is generated.
- Payment History is updated.

Online payment does not currently accept an amount above the published outstanding balance. Excess-credit creation applies to the new offline-payment flow described below.

## 16. Offline payment with excess credit

From Approved Students, the administrator can record an offline payment.

The administrator enters:

- Academic or Hostel Fee
- Optional target fee period
- Amount received
- Payment method
- Reference number
- Payment date
- Internal remark

Unlike online payment, the offline amount may be greater than the student's current published outstanding balance.

The payment is split into:

```text
Amount received = amount applied to existing dues + excess credit
```

Example:

```text
Current published balance: ₹40,000
Offline amount received: ₹50,000
Applied now: ₹40,000
Excess credit: ₹10,000
```

The receipt must show:

- Total amount received
- Amount adjusted against current fees
- Excess amount retained as student credit
- Allocation by fee period and fee head
- Remaining credit balance

The student portal and Accounts section both display the excess-credit balance.

## 17. Excess-credit adjustment

Excess credit belongs to the student fee account and is not treated as income against a fee head until it is allocated.

When a new fee ledger becomes published:

1. The system checks the student's available excess credit.
2. Credit is automatically allocated to the newly published fee.
3. Allocation follows normal rules: penalty first, then fee heads by internal numeric priority.
4. The new ledger's paid and balance amounts are updated.
5. The credit balance is reduced.
6. The student sees the adjustment in Fee Details and Payment History.
7. A credit-adjustment receipt/audit record is created.

Example:

```text
Available excess credit: ₹10,000
New Semester 2 fee: ₹60,000
Automatically adjusted: ₹10,000
Semester 2 remaining balance: ₹50,000
Excess credit remaining: ₹0
```

Credit cannot be silently deleted. Refund or manual reversal must be an Accounts-controlled action with an audit history.

## 18. Payment allocation order

For both normal payments and excess-credit adjustments:

1. Oldest published academic period first
2. Penalty first
3. Fee heads in internal numeric priority order
4. Earlier due date when priorities match
5. Hostel Fee according to the selected payment scope

Students see the resulting amounts but do not see internal priority numbers.

## 19. Future semester fee publication

For a semester-wise student, the next semester ledger was already prepared when the fee account was created.

The administrator configures the publication schedule using:

- University/college
- Academic session
- Target semester
- Publication date and time
- Previous-semester payment deadline
- Daily penalty
- Maximum penalty

At publication time:

- The prepared next-semester ledger becomes visible and payable.
- The student remains academically in the current semester.
- Existing excess credit is automatically applied.
- Unpaid previous-semester dues remain visible.
- Penalty begins on previous-semester dues after their configured deadline.

Example:

```text
Academic position: Semester 1
Visible payable fees: Semester 1 and Semester 2
Promotion status: Still Semester 1
```

## 20. Future yearly fee publication

For a yearly student:

- The next academic-year ledger is prepared through Next Year Fee.
- It remains hidden until its configured publication time.
- When published, the 5% yearly-payment discount is included.
- Scholarships that carry forward are applied.
- One-time scholarships/discounts are not carried forward.
- Excess credit is automatically adjusted.
- The student remains in the current academic year until formally promoted.

For a semester-wise student moving from Semester 2 to Semester 3, the next fee remains semester-based unless an administrator-approved fee-mode change is completed.

## 21. Penalty flow

When a next semester/year fee is published, the previous period can receive a payment deadline.

If an old balance remains after that deadline:

```text
Penalty = overdue days × daily penalty amount
```

The penalty:

- Stops at the configured maximum
- Stops increasing when the relevant old balance is fully paid
- Appears with the combined outstanding dues
- Is paid before ordinary fee heads

Publishing a new fee does not remove or merge the old ledger. The student sees all published unpaid periods together.

## 22. Academic promotion

Fee publication and academic promotion are separate actions.

Publishing Semester 2 Fee does not move the student from Semester 1 to Semester 2.

When the administrator selects Promote:

- Semester-wise student moves to the prepared next semester.
- Academic year is recalculated from the semester.
- Yearly student moves to the next academic year.
- The same approved student record is updated.
- Historical ledgers and payments remain unchanged.
- The promotion record is marked completed.

The student remains in Approved Students; they are not deleted or moved into a separate student table.

## 23. Accounts and receipts

The Accounts section displays:

- Online payments
- Offline payments
- Amount received
- Amount allocated
- Excess credit created
- Excess credit remaining
- Automatic future-credit adjustments
- Student and Student ID
- Fee period
- Payment reference
- Method and date
- Receipt number
- Current outstanding balance

Students and administrators can download receipts.

Internal remarks remain hidden from students.

## 24. Audit and protection rules

The system must preserve audit history for:

- Fee-mode selection
- Fee-mode changes
- Ledger generation
- Ledger publication
- Scholarships
- One-time discounts
- Payments
- Excess-credit creation
- Credit allocation
- Credit refund/reversal
- Promotion

Protection rules:

- A paid ledger cannot be deleted.
- A paid ledger cannot be silently recalculated.
- Switching fee mode after payment requires an Accounts adjustment.
- Excess credit cannot be manually erased.
- A fee cannot be charged twice through yearly and semester-wise ledgers.
- Hidden ledgers cannot be paid until published.
- Zero-value fee heads are not shown.
- Internal fee-head priority and administrative remarks are not shown to students.

## 25. Current implementation decisions

1. The additional 5% yearly-payment discount applies to Tuition Fee, matching the existing rule that scholarships and manual discounts reduce Tuition Fee only.
2. Semester-wise approval creates the current semester ledger and prepares the immediately following semester ledger. Only the current ledger is initially published.
3. Academic Fee and Hostel Fee excess credits remain separate and are automatically adjusted only against a matching future fee type.
4. Students compare the modes in the portal and contact the administrator to request a change. The administrator applies the change from the admission record; paid ledgers are protected and cannot be silently recalculated.
5. Excess-credit refunds and reversals are not automated in this baseline. The credit remains preserved in Accounts until it is allocated to a future matching fee.
