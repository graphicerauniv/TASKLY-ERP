import { CurrencyPipe, DatePipe, TitleCasePipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, RouterLink } from '@angular/router';
import {
  LucideArrowLeft,
  LucideArrowDown,
  LucideArrowRight,
  LucideBadgePercent,
  LucideCalendarDays,
  LucideCheckCircle2,
  LucideDownload,
  LucideEye,
  LucideGraduationCap,
  LucideInfo,
  LucidePlus,
  LucideRefreshCw,
  LucideReceiptText,
  LucideSearch,
  LucideWalletCards,
} from '@lucide/angular';
import { ApiService } from '../../../core/api.service';
import {
  Admission,
  Scholarship,
  StudentDiscount,
  StudentFeeLedger,
  StudentScholarship,
} from '../../../core/models';
import { AdminPageComponent } from '../../../shared/ui/admin-page/admin-page.component';
import {
  CompactActionItem,
  CompactActionMenuComponent,
} from '../../../shared/ui/compact-action-menu/compact-action-menu.component';
import { ConfirmDialogComponent } from '../../../shared/ui/confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'erp-student-scholarships',
  imports: [
    AdminPageComponent,
    CompactActionMenuComponent,
    ConfirmDialogComponent,
    CurrencyPipe,
    DatePipe,
    FormsModule,
    LucideArrowLeft,
    LucideArrowDown,
    LucideArrowRight,
    LucideBadgePercent,
    LucideCalendarDays,
    LucideCheckCircle2,
    LucideDownload,
    LucideEye,
    LucideGraduationCap,
    LucideInfo,
    LucidePlus,
    LucideRefreshCw,
    LucideReceiptText,
    LucideSearch,
    LucideWalletCards,
    RouterLink,
    TitleCasePipe,
  ],
  templateUrl: './student-scholarships.component.html',
  styleUrl: './student-scholarships.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StudentScholarshipsComponent {
  private readonly api = inject(ApiService);
  private readonly route = inject(ActivatedRoute);
  readonly student = signal<Admission | null>(null);
  readonly assignments = signal<StudentScholarship[]>([]);
  readonly scholarships = signal<Scholarship[]>([]);
  readonly discounts = signal<StudentDiscount[]>([]);
  readonly ledgers = signal<StudentFeeLedger[]>([]);
  readonly loading = signal(true);
  readonly saving = signal(false);
  readonly error = signal('');
  readonly message = signal('');
  readonly removingId = signal<string | null>(null);
  readonly removingDiscountId = signal<string | null>(null);
  readonly activeTab = signal<'overview' | 'scholarships' | 'discounts' | 'impact'>('overview');
  readonly scholarshipPanelOpen = signal(false);
  readonly discountPanelOpen = signal(false);
  readonly scholarshipSearch = signal('');
  readonly discountSearch = signal('');
  readonly selectedImpactLedgerId = signal('');
  readonly pageTitle = computed(() =>
    this.activeTab() === 'impact' ? 'Fee impact' : 'Scholarships & discounts',
  );
  readonly pageDescription = computed(() => {
    if (this.activeTab() === 'impact')
      return "See how scholarships and discounts affect the student's fee account.";
    if (this.activeTab() === 'discounts')
      return 'Manage approved one-time discounts and review their impact on the student fee account.';
    return 'Manage tuition concessions and review their impact on the student fee account.';
  });
  readonly assets = {
    feeWallet: '/assets/images/scholarships/illustration-fee-wallet.png',
    campusUnavailable: '/assets/images/scholarships/illustration-campus-unavailable.png',
    noResults: '/assets/images/scholarships/illustration-no-results.png',
    pendingReview: '/assets/images/scholarships/illustration-pending-review.png',
    emptyScholarships: '/assets/images/scholarships/illustration-empty-scholarships.png',
    addStudent: '/assets/images/scholarships/illustration-add-student.png',
    discountTicket: '/assets/images/scholarships/illustration-discount-ticket.png',
  } as const;
  readonly removeActions: CompactActionItem[] = [
    { id: 'remove', label: 'Remove assignment', icon: 'delete', destructive: true },
  ];
  readonly discountRemoveActions: CompactActionItem[] = [
    { id: 'remove', label: 'Remove discount', icon: 'delete', destructive: true },
  ];
  readonly availableScholarships = computed(() => {
    const assigned = new Set(this.assignments().map((item) => item.scholarshipId));
    return this.scholarships().filter(
      (item) =>
        item.isActive &&
        (item.valueMode === 'custom' || Number(item.value || 0) > 0) &&
        !assigned.has(item._id),
    );
  });
  selectedScholarship() {
    return this.availableScholarships().find((item) => item._id === this.scholarshipId());
  }
  readonly removingAssignment = computed(() =>
    this.assignments().find((item) => item._id === this.removingId()),
  );
  readonly removingDiscount = computed(() =>
    this.discounts().find((item) => item._id === this.removingDiscountId()),
  );
  readonly totalCharges = computed(() =>
    this.ledgers().reduce((sum, ledger) => sum + Number(ledger.chargeAmount || 0), 0),
  );
  readonly totalDiscounts = computed(() =>
    this.ledgers().reduce((sum, ledger) => sum + Number(ledger.discountAmount || 0), 0),
  );
  readonly totalPayable = computed(() =>
    this.ledgers().reduce((sum, ledger) => sum + Number(ledger.totalAmount || 0), 0),
  );
  readonly totalPaid = computed(() =>
    this.ledgers().reduce((sum, ledger) => sum + Number(ledger.paidAmount || 0), 0),
  );
  readonly totalBalance = computed(() =>
    this.ledgers().reduce((sum, ledger) => sum + Number(ledger.balanceAmount || 0), 0),
  );
  readonly oneTimeDiscountTotal = computed(() =>
    this.ledgers().reduce((sum, ledger) => sum + this.oneTimeDiscountAmount(ledger), 0),
  );
  readonly discountAffectedPeriods = computed(
    () => this.ledgers().filter((ledger) => this.oneTimeDiscountAmount(ledger) > 0).length,
  );
  readonly lastDiscountApplied = computed(() => {
    const dates = this.discounts()
      .map((discount) => discount.createdAt)
      .filter(Boolean)
      .sort();
    return dates[dates.length - 1] || '';
  });
  readonly filteredAssignments = computed(() => {
    const query = this.scholarshipSearch().trim().toLowerCase();
    if (!query) return this.assignments();
    return this.assignments().filter((item) =>
      [item.scholarshipName, item.type, item.recurring ? 'recurring' : 'one-time']
        .join(' ')
        .toLowerCase()
        .includes(query),
    );
  });
  readonly filteredDiscounts = computed(() => {
    const query = this.discountSearch().trim().toLowerCase();
    if (!query) return this.discounts();
    return this.discounts().filter((item) =>
      [item.name, item.type, item.targetPeriodLabel, item.internalRemark]
        .join(' ')
        .toLowerCase()
        .includes(query),
    );
  });
  readonly lastRecalculated = computed(() => {
    const dates = this.ledgers()
      .map((ledger) => ledger.createdAt)
      .filter(Boolean)
      .sort();
    return dates[dates.length - 1] || '';
  });
  readonly mostImpactfulLedger = computed(() =>
    this.ledgers().reduce<StudentFeeLedger | null>(
      (selected, ledger) =>
        !selected || Number(ledger.discountAmount || 0) > Number(selected.discountAmount || 0)
          ? ledger
          : selected,
      null,
    ),
  );
  readonly affectedPeriods = computed(
    () => this.ledgers().filter((ledger) => Number(ledger.discountAmount || 0) > 0).length,
  );
  readonly visibleImpactLedgers = computed(() => {
    const selectedId = this.selectedImpactLedgerId();
    if (!selectedId) return this.ledgers();
    const selected = this.ledgers().find((ledger) => ledger._id === selectedId);
    return selected ? [selected] : this.ledgers();
  });
  readonly studentAdmissionId = this.route.snapshot.paramMap.get('admissionId') || '';
  scholarshipId = signal('');
  customScholarshipType: 'percentage' | 'fixed' = 'percentage';
  customScholarshipValue: number | null = null;
  scholarshipRecurring = true;
  scholarshipLedgerId = '';
  discountName = '';
  discountType: 'percentage' | 'fixed' = 'fixed';
  discountValue: number | null = null;
  discountLedgerId = '';
  discountRemark = '';

  constructor() {
    this.load();
  }

  load() {
    this.loading.set(true);
    this.error.set('');
    this.api.studentScholarships(this.studentAdmissionId).subscribe({
      next: ({ student, assignments, discounts, scholarships, ledgers }) => {
        this.student.set(student);
        this.assignments.set(assignments);
        this.scholarships.set(scholarships);
        this.discounts.set(discounts);
        this.ledgers.set(ledgers);
        if (!ledgers.some((ledger) => ledger._id === this.selectedImpactLedgerId())) {
          this.selectedImpactLedgerId.set(ledgers[0]?._id || '');
        }
        if (!this.availableScholarships().some((item) => item._id === this.scholarshipId()))
          this.scholarshipId.set('');
        if (!ledgers.some((ledger) => ledger._id === this.discountLedgerId))
          this.discountLedgerId = this.defaultLedgerId(student, ledgers);
        if (!ledgers.some((ledger) => ledger._id === this.scholarshipLedgerId))
          this.scholarshipLedgerId = this.defaultLedgerId(student, ledgers);
        this.loading.set(false);
      },
      error: (error) => {
        this.error.set(error.error?.message || 'Could not load student scholarship details.');
        this.loading.set(false);
      },
    });
  }

  assign() {
    if (!this.scholarshipId() || this.saving()) return;
    const customValue = this.selectedScholarship()?.valueMode === 'custom';
    const value = Number(this.customScholarshipValue || 0);
    if (
      customValue &&
      (value <= 0 || (this.customScholarshipType === 'percentage' && value > 100))
    ) {
      this.error.set('Enter a valid custom scholarship percentage or fixed amount.');
      return;
    }
    if (!this.scholarshipRecurring && !this.scholarshipLedgerId) {
      this.error.set('Select the fee period for the one-time scholarship.');
      return;
    }
    this.saving.set(true);
    this.error.set('');
    this.message.set('');
    this.api
      .assignStudentScholarship(this.studentAdmissionId, {
        scholarshipId: this.scholarshipId(),
        type: customValue ? this.customScholarshipType : undefined,
        value: customValue ? value : undefined,
        recurring: this.scholarshipRecurring,
        targetLedgerId: this.scholarshipRecurring ? undefined : this.scholarshipLedgerId,
      })
      .subscribe({
        next: () => {
          this.message.set('Scholarship assigned and Tuition Fee updated.');
          this.scholarshipId.set('');
          this.customScholarshipType = 'percentage';
          this.customScholarshipValue = null;
          this.scholarshipRecurring = true;
          this.saving.set(false);
          this.scholarshipPanelOpen.set(false);
          this.load();
        },
        error: (error) => {
          this.error.set(error.error?.message || 'Could not assign the scholarship.');
          this.saving.set(false);
        },
      });
  }

  remove(item: StudentScholarship) {
    if (this.saving()) return;
    if (this.removingId() !== item._id) {
      this.removingId.set(item._id);
      return;
    }
    this.saving.set(true);
    this.error.set('');
    this.message.set('');
    this.api.removeStudentScholarship(this.studentAdmissionId, item._id).subscribe({
      next: () => {
        this.message.set(
          `${item.scholarshipName} removed from future and unpaid fee periods. Paid records were preserved.`,
        );
        this.saving.set(false);
        this.removingId.set(null);
        this.load();
      },
      error: (error) => {
        this.error.set(error.error?.message || 'Could not remove the scholarship.');
        this.saving.set(false);
        this.removingId.set(null);
      },
    });
  }

  cancelRemove() {
    this.removingId.set(null);
  }

  createDiscount() {
    if (this.saving()) return;
    const name = this.discountName.trim();
    const value = Number(this.discountValue || 0);
    const internalRemark = this.discountRemark.trim();
    if (!name || !this.discountLedgerId || value <= 0 || internalRemark.length < 3) {
      this.error.set('Enter the discount name, fee period, value, and an internal remark.');
      return;
    }
    if (this.discountType === 'percentage' && value > 100) {
      this.error.set('Percentage discount cannot exceed 100%.');
      return;
    }
    this.saving.set(true);
    this.error.set('');
    this.message.set('');
    this.api
      .createStudentDiscount(this.studentAdmissionId, {
        name,
        type: this.discountType,
        value,
        targetLedgerId: this.discountLedgerId,
        internalRemark,
      })
      .subscribe({
        next: () => {
          this.message.set('One-time Tuition Fee discount applied to the selected fee period.');
          this.discountName = '';
          this.discountType = 'fixed';
          this.discountValue = null;
          this.discountRemark = '';
          this.saving.set(false);
          this.discountPanelOpen.set(false);
          this.load();
        },
        error: (error) => {
          this.error.set(error.error?.message || 'Could not apply the one-time discount.');
          this.saving.set(false);
        },
      });
  }

  removeDiscount(item: StudentDiscount) {
    if (this.saving()) return;
    if (this.removingDiscountId() !== item._id) {
      this.removingDiscountId.set(item._id);
      return;
    }
    this.saving.set(true);
    this.error.set('');
    this.message.set('');
    this.api.removeStudentDiscount(this.studentAdmissionId, item._id).subscribe({
      next: () => {
        this.message.set(`${item.name} removed from ${item.targetPeriodLabel}.`);
        this.removingDiscountId.set(null);
        this.saving.set(false);
        this.load();
      },
      error: (error) => {
        this.error.set(error.error?.message || 'Could not remove the one-time discount.');
        this.removingDiscountId.set(null);
        this.saving.set(false);
      },
    });
  }

  cancelDiscountRemove() {
    this.removingDiscountId.set(null);
  }

  handleAssignmentAction(action: string, item: StudentScholarship) {
    if (action === 'remove') this.remove(item);
  }

  handleDiscountAction(action: string, item: StudentDiscount) {
    if (action === 'remove') this.removeDiscount(item);
  }

  tuitionAmount(ledger: StudentFeeLedger) {
    return ledger.entries
      .filter((entry) => entry.category === 'fee' && /\btuition\b/i.test(entry.feeHeadName || ''))
      .reduce((sum, entry) => sum + Number(entry.amount || 0), 0);
  }

  scholarshipAmount(ledger: StudentFeeLedger) {
    return ledger.entries
      .filter((entry) => entry.isScholarship)
      .reduce((sum, entry) => sum + Number(entry.amount || 0), 0);
  }

  oneTimeDiscountAmount(ledger: StudentFeeLedger) {
    return ledger.entries
      .filter((entry) => entry.isOneTimeDiscount)
      .reduce((sum, entry) => sum + Number(entry.amount || 0), 0);
  }

  feeHeadEntries(ledger: StudentFeeLedger) {
    return ledger.entries.filter(
      (entry) => entry.category === 'fee' && !entry.isScholarship && !entry.isOneTimeDiscount,
    );
  }

  scholarshipImpact(ledger: StudentFeeLedger, assignment: StudentScholarship, feeHeadName: string) {
    if (!/\btuition\b/i.test(feeHeadName)) return 0;
    return ledger.entries
      .filter((entry) => entry.isScholarship && entry.scholarshipAssignmentId === assignment._id)
      .reduce((sum, entry) => sum + Number(entry.amount || 0), 0);
  }

  discountImpact(ledger: StudentFeeLedger, discount: StudentDiscount, feeHeadName: string) {
    if (!/\btuition\b/i.test(feeHeadName)) return 0;
    return ledger.entries
      .filter((entry) => entry.isOneTimeDiscount && entry.customDiscountId === discount._id)
      .reduce((sum, entry) => sum + Number(entry.amount || 0), 0);
  }

  feeHeadNetAmount(entry: StudentFeeLedger['entries'][number]) {
    return Math.max(0, Number(entry.amount || 0) - Number(entry.discountAmount || 0));
  }

  entryType(entry: StudentFeeLedger['entries'][number]) {
    if (entry.isScholarship) return 'Recurring scholarship';
    if (entry.isOneTimeDiscount) return 'One-time discount';
    if (entry.category === 'payment-option') return 'Payment option';
    return 'Fee head';
  }

  entryNetAmount(entry: StudentFeeLedger['entries'][number]) {
    if (entry.isScholarship || entry.isOneTimeDiscount) return -Number(entry.amount || 0);
    return Math.max(0, Number(entry.amount || 0) - Number(entry.discountAmount || 0));
  }

  statusLabel(status: StudentFeeLedger['entries'][number]['status']) {
    return status === 'paid' ? 'Paid' : status === 'partial' ? 'Part paid' : 'Due';
  }

  assignmentValue(item: StudentScholarship) {
    return item.type === 'percentage' ? `${item.value}%` : null;
  }

  discountValueLabel(item: StudentDiscount) {
    return item.type === 'percentage' ? `${item.value}%` : null;
  }

  initials(name: string) {
    const parts = name.trim().split(/\s+/).filter(Boolean);
    const value =
      parts.length > 1 ? `${parts[0][0]}${parts[parts.length - 1][0]}` : name.slice(0, 2);
    return value.toUpperCase();
  }

  private defaultLedgerId(student: Admission, ledgers: StudentFeeLedger[]) {
    const current = ledgers.find((ledger) =>
      student.feeFrequency === 'semester'
        ? ledger.currentSemester === student.currentSemester
        : ledger.currentAcademicYear === student.currentAcademicYear &&
          ledger.feeFrequency === 'year',
    );
    return current?._id || ledgers[0]?._id || '';
  }
}
