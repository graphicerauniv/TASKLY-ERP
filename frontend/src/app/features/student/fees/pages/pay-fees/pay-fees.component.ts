import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { finalize, take } from 'rxjs';
import { ApiService } from '../../../../../core/api.service';
import { StudentMobileBottomNavComponent } from '../../../dashboard/components/student-mobile-bottom-nav/student-mobile-bottom-nav.component';
import { StudentSessionService } from '../../../shared/services/student-session.service';
import { RazorpayCheckoutService, RazorpayPaymentResult } from '../../data-access/razorpay-checkout.service';
import { StudentFeesFacade } from '../../data-access/student-fees.facade';
import { FeeLedgerDetailViewModel, StudentFeeWorkspaceViewModel } from '../../models/student-fee-dashboard.models';
import { LucideCheckCircle2, LucideInfo, LucideRefreshCw, LucideReceiptText, LucideShieldCheck, LucideIndianRupee } from '@lucide/angular';

@Component({
  selector: 'erp-pay-fees',
  imports: [FormsModule, RouterLink, StudentMobileBottomNavComponent, LucideCheckCircle2, LucideInfo, LucideRefreshCw, LucideReceiptText, LucideShieldCheck, LucideIndianRupee],
  templateUrl: './pay-fees.component.html',
  styleUrl: '../../../styles/_student-fees.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PayFeesComponent {
  private readonly fees = inject(StudentFeesFacade);
  private readonly session = inject(StudentSessionService);
  private readonly api = inject(ApiService);
  private readonly checkout = inject(RazorpayCheckoutService);
  private readonly route = inject(ActivatedRoute);
  private readonly router = inject(Router);

  readonly workspace = signal<StudentFeeWorkspaceViewModel>(this.fees.workspaceLoading(this.session.profile()));
  readonly selectedKind = signal<'academic' | 'hostel'>('academic');
  readonly selectedLedgerId = signal<string | null>(null);
  readonly paymentAmount = signal<number | null>(null);
  readonly reviewed = signal(false);
  readonly processing = signal(false);
  readonly message = signal<string | null>(null);
  readonly selectedLedger = computed(() => this.workspace().ledgers.find((ledger) => ledger.id === this.selectedLedgerId()) ?? null);
  readonly payableLedgers = computed(() => this.workspace().ledgers.filter((ledger) => ledger.kind === this.selectedKind() && ledger.isPayable));
  readonly canContinue = computed(() => {
    const ledger = this.selectedLedger();
    const amount = this.paymentAmount();
    return !!ledger && !!amount && amount > 0 && amount <= (ledger.balance?.amount ?? 0) && this.reviewed() && !this.processing();
  });

  constructor() { this.load(); }

  selectKind(kind: 'academic' | 'hostel'): void {
    this.selectedKind.set(kind);
    const next = this.workspace().ledgers.find((ledger) => ledger.kind === kind && ledger.isPayable) ?? null;
    this.selectLedger(next);
  }

  selectLedger(ledger: FeeLedgerDetailViewModel | null): void {
    this.selectedLedgerId.set(ledger?.id ?? null);
    this.paymentAmount.set(ledger?.balance?.amount ?? null);
    this.reviewed.set(false);
    this.message.set(null);
  }

  updateAmount(value: string): void {
    const amount = Number(value);
    this.paymentAmount.set(Number.isFinite(amount) ? amount : null);
    this.reviewed.set(false);
  }

  onAmountInput(event: Event): void {
    this.updateAmount((event.target as HTMLInputElement).value);
  }

  onReviewChange(event: Event): void {
    this.reviewed.set((event.target as HTMLInputElement).checked);
  }

  continueToPayment(): void {
    const token = this.session.token();
    const ledger = this.selectedLedger();
    const amount = this.paymentAmount();
    if (!token || !ledger || !amount || !this.canContinue()) return;
    this.processing.set(true);
    this.message.set(null);
    this.api.createStudentPaymentOrder(token, amount, ledger.id).pipe(take(1)).subscribe({
      next: async (order) => {
        const opened = await this.checkout.open(order, `${ledger.title} · ${ledger.periodLabel}`, (result) => this.verify(token, result), () => this.processing.set(false));
        if (!opened) {
          this.processing.set(false);
          this.message.set('Secure checkout could not be opened. Please try again.');
        }
      },
      error: () => {
        this.processing.set(false);
        this.message.set('The payment request could not be created. Please review the amount and try again.');
      },
    });
  }

  private verify(token: string, result: RazorpayPaymentResult): void {
    this.api.verifyStudentPayment(token, result).pipe(take(1), finalize(() => this.processing.set(false))).subscribe({
      next: () => { this.message.set('Payment verified successfully. Your fee records have been refreshed.'); this.load(); },
      error: () => this.message.set('Payment verification is pending. Please check payment history before trying again.'),
    });
  }

  load(): void {
    const token = this.session.token();
    if (!token) { this.workspace.set(this.fees.workspaceLoading(this.session.profile(), 'error', 'Please sign in again to access fees.')); return; }
    this.workspace.set(this.fees.workspaceLoading(this.session.profile()));
    this.fees.loadWorkspace(token, this.session.profile()).pipe(take(1)).subscribe((workspace) => {
      this.workspace.set(workspace);
      const requestedId = this.route.snapshot.queryParamMap.get('ledger');
      const requested = workspace.ledgers.find((ledger) => ledger.id === requestedId && ledger.isPayable) ?? null;
      const first = requested ?? workspace.ledgers.find((ledger) => ledger.kind === 'academic' && ledger.isPayable) ?? workspace.ledgers.find((ledger) => ledger.isPayable) ?? null;
      if (first) { this.selectedKind.set(first.kind); this.selectLedger(first); }
    });
  }
}
