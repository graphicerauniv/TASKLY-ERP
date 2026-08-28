import { DatePipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit, computed, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { take } from 'rxjs';
import { StudentMobileBottomNavComponent } from '../../../dashboard/components/student-mobile-bottom-nav/student-mobile-bottom-nav.component';
import { StudentSessionService } from '../../../shared/services/student-session.service';
import { StudentFeesFacade } from '../../data-access/student-fees.facade';
import { StudentFeeWorkspaceViewModel, StudentPaymentRecordViewModel } from '../../models/student-fee-dashboard.models';
import { LucideCheckCircle2, LucideClock3, LucideDownload, LucideDynamicIcon, LucideInfo, LucideSearch, LucideXCircle } from '@lucide/angular';

type HistoryFilter = 'all' | StudentPaymentRecordViewModel['status'];

@Component({
  selector: 'erp-payment-history',
  standalone: true,
  imports: [DatePipe, RouterLink, StudentMobileBottomNavComponent, LucideCheckCircle2, LucideClock3, LucideDownload, LucideDynamicIcon, LucideInfo, LucideSearch, LucideXCircle],
  templateUrl: './payment-history.component.html',
  styleUrl: '../../../styles/_student-fee-final-pages.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PaymentHistoryComponent implements OnInit {
  private readonly fees = inject(StudentFeesFacade);
  private readonly session = inject(StudentSessionService);

  readonly workspace = signal<StudentFeeWorkspaceViewModel>(this.fees.workspaceLoading(this.session.profile()));
  readonly searchTerm = signal('');
  readonly periodFilter = signal('all');
  readonly dateFilter = signal('all');
  readonly statusFilter = signal<HistoryFilter>('all');

  readonly periods = computed(() => [...new Set(this.workspace().payments.map((payment) => payment.feePeriodLabel).filter(Boolean))]);
  readonly filteredPayments = computed(() => {
    const term = this.searchTerm().trim().toLowerCase();
    const period = this.periodFilter();
    const date = this.dateFilter();
    const status = this.statusFilter();
    return this.workspace().payments.filter((payment) => {
      const matchesTerm = !term || [payment.receiptNumber, payment.orderReference, payment.paymentId, payment.feePeriodLabel]
        .some((value) => (value ?? '').toLowerCase().includes(term));
      const matchesPeriod = period === 'all' || payment.feePeriodLabel === period;
      const matchesDate = date === 'all' || withinDays(payment.paidAt ?? payment.createdAt, Number(date));
      const matchesStatus = status === 'all' || payment.status === status;
      return matchesTerm && matchesPeriod && matchesDate && matchesStatus;
    });
  });
  readonly successfulCount = computed(() => this.workspace().payments.filter((payment) => payment.status === 'successful').length);
  readonly pendingCount = computed(() => this.workspace().payments.filter((payment) => payment.status === 'pending').length);
  readonly failedCount = computed(() => this.workspace().payments.filter((payment) => payment.status === 'failed').length);

  ngOnInit(): void {
    this.load();
  }

  setStatus(status: HistoryFilter): void {
    this.statusFilter.set(status);
  }

  onSearch(event: Event): void {
    this.searchTerm.set((event.target as HTMLInputElement).value);
  }

  onPeriod(event: Event): void {
    this.periodFilter.set((event.target as HTMLSelectElement).value);
  }

  onDate(event: Event): void {
    this.dateFilter.set((event.target as HTMLSelectElement).value);
  }

  private load(): void {
    const token = this.session.token();
    if (!token) {
      this.workspace.set(this.fees.workspaceLoading(this.session.profile(), 'error', 'Please sign in again to access fees.'));
      return;
    }
    this.workspace.set(this.fees.workspaceLoading(this.session.profile()));
    this.fees.loadWorkspace(token, this.session.profile()).pipe(take(1)).subscribe((workspace) => this.workspace.set(workspace));
  }
}

function withinDays(value: string | null, days: number): boolean {
  if (!value || !Number.isFinite(days)) return true;
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return false;
  return Date.now() - date.getTime() <= days * 86_400_000;
}
