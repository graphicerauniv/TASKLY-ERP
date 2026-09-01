import { CurrencyPipe, DatePipe, TitleCasePipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, RouterLink } from '@angular/router';
import {
  LucideArrowLeft,
  LucideBadgePercent,
  LucideGraduationCap,
  LucideReceiptText,
  LucideUserRound,
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
    LucideBadgePercent,
    LucideGraduationCap,
    LucideReceiptText,
    LucideUserRound,
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
  readonly removeActions: CompactActionItem[] = [
    { id: 'remove', label: 'Remove assignment', icon: 'delete', destructive: true },
  ];
  readonly availableScholarships = computed(() => {
    const assigned = new Set(this.assignments().map((item) => item.scholarshipId));
    return this.scholarships().filter((item) => item.isActive && !assigned.has(item._id));
  });
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
  readonly studentAdmissionId = this.route.snapshot.paramMap.get('admissionId') || '';
  scholarshipId = '';
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
        if (!this.availableScholarships().some((item) => item._id === this.scholarshipId))
          this.scholarshipId = '';
        if (!ledgers.some((ledger) => ledger._id === this.discountLedgerId))
          this.discountLedgerId = this.defaultLedgerId(student, ledgers);
        this.loading.set(false);
      },
      error: (error) => {
        this.error.set(error.error?.message || 'Could not load student scholarship details.');
        this.loading.set(false);
      },
    });
  }

  assign() {
    if (!this.scholarshipId || this.saving()) return;
    this.saving.set(true);
    this.error.set('');
    this.message.set('');
    this.api.assignStudentScholarship(this.studentAdmissionId, this.scholarshipId).subscribe({
      next: () => {
        this.message.set('Scholarship assigned and Tuition Fee updated.');
        this.scholarshipId = '';
        this.saving.set(false);
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
