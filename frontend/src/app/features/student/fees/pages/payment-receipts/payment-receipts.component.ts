import { DatePipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit, computed, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { take } from 'rxjs';
import { StudentMobileBottomNavComponent } from '../../../dashboard/components/student-mobile-bottom-nav/student-mobile-bottom-nav.component';
import { StudentSessionService } from '../../../shared/services/student-session.service';
import { StudentFeesFacade } from '../../data-access/student-fees.facade';
import { StudentFeeWorkspaceViewModel } from '../../models/student-fee-dashboard.models';
import { LucideDownload, LucideSearch, LucideShieldCheck } from '@lucide/angular';

@Component({
  selector: 'erp-payment-receipts',
  standalone: true,
  imports: [DatePipe, RouterLink, StudentMobileBottomNavComponent, LucideDownload, LucideSearch, LucideShieldCheck],
  templateUrl: './payment-receipts.component.html',
  styleUrl: '../../../styles/_student-fee-final-pages.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PaymentReceiptsComponent implements OnInit {
  private readonly fees = inject(StudentFeesFacade);
  private readonly session = inject(StudentSessionService);
  private readonly inr = new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 });

  readonly workspace = signal<StudentFeeWorkspaceViewModel>(this.fees.workspaceLoading(this.session.profile()));
  readonly searchTerm = signal('');
  readonly periodFilter = signal('all');
  readonly dateFilter = signal('all');

  readonly receipts = computed(() => this.workspace().payments.filter((payment) => payment.status === 'successful'));
  readonly periods = computed(() => [...new Set(this.receipts().map((payment) => payment.feePeriodLabel).filter(Boolean))]);
  readonly filteredReceipts = computed(() => {
    const term = this.searchTerm().trim().toLowerCase();
    const period = this.periodFilter();
    const date = this.dateFilter();
    return this.receipts().filter((payment) => {
      const matchesTerm = !term || [payment.receiptNumber, payment.orderReference, payment.paymentId, payment.feePeriodLabel]
        .some((value) => (value ?? '').toLowerCase().includes(term));
      const matchesPeriod = period === 'all' || payment.feePeriodLabel === period;
      const matchesDate = date === 'all' || withinDays(payment.paidAt ?? payment.createdAt, Number(date));
      return matchesTerm && matchesPeriod && matchesDate;
    });
  });
  readonly totalReceived = computed(() => this.formatMoney(this.receipts().reduce((sum, payment) => sum + payment.amount.amount, 0)));
  readonly latestPaymentDate = computed(() => {
    const dates = this.receipts()
      .map((payment) => payment.paidAt ?? payment.createdAt)
      .filter(Boolean)
      .map((value) => new Date(value as string))
      .filter((date) => !Number.isNaN(date.getTime()))
      .sort((first, second) => second.getTime() - first.getTime());
    return dates[0]?.toISOString() ?? null;
  });

  ngOnInit(): void {
    this.load();
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

  private formatMoney(amount: number): string {
    return this.inr.format(amount);
  }
}

function withinDays(value: string | null, days: number): boolean {
  if (!value || !Number.isFinite(days)) return true;
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return false;
  return Date.now() - date.getTime() <= days * 86_400_000;
}
