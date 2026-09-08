import { CurrencyPipe, DatePipe } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
  computed,
  inject,
  signal,
} from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { combineLatest, Subscription } from 'rxjs';
import {
  LucideSearch,
  LucideRefreshCw,
  LucideChevronLeft,
  LucideChevronRight,
} from '@lucide/angular';
import { ApiService } from '../../../core/api.service';
import { ERP_PAGINATION } from '../../../core/config/data-view.constants';
import { FeeCredit, FeePayment, StudentDiscount } from '../../../core/models';
import { AdminIllustrationComponent } from '../../../shared/ui/admin-illustration/admin-illustration.component';
import { AdminPageComponent } from '../../../shared/ui/admin-page/admin-page.component';
import {
  RecordDrawerComponent,
  RecordDetailField,
} from '../../../shared/ui/record-drawer/record-drawer.component';
import {
  CompactActionItem,
  CompactActionMenuComponent,
} from '../../../shared/ui/compact-action-menu/compact-action-menu.component';

type Section = 'overview' | 'payments' | 'credits' | 'discounts';
type FinanceRecord = FeePayment | FeeCredit | StudentDiscount;

@Component({
  selector: 'erp-accounts',
  imports: [
    AdminIllustrationComponent,
    RecordDrawerComponent,
    AdminPageComponent,
    CompactActionMenuComponent,
    FormsModule,
    CurrencyPipe,
    DatePipe,
    RouterLink,
    LucideSearch,
    LucideRefreshCw,
    LucideChevronLeft,
    LucideChevronRight,
  ],
  templateUrl: './accounts.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AccountsComponent {
  private readonly api = inject(ApiService);
  private readonly route = inject(ActivatedRoute);
  private readonly router = inject(Router);
  private request?: Subscription;
  readonly section = signal<Section>('payments');
  readonly payments = signal<FeePayment[]>([]);
  readonly discounts = signal<StudentDiscount[]>([]);
  readonly credits = signal<FeeCredit[]>([]);
  readonly summary = signal({
    successfulPayments: 0,
    collectedAmount: 0,
    pendingPayments: 0,
    availableCredit: 0,
  });
  readonly pagination = signal({ page: 1, pageSize: 25, total: 0, totalPages: 1 });
  readonly pageSizes = ERP_PAGINATION.pageSizeOptions;
  readonly loading = signal(true);
  readonly error = signal('');
  readonly downloadError = signal('');
  readonly downloading = signal(false);
  readonly preview = signal<FinanceRecord | null>(null);
  readonly title = computed(
    () =>
      ({
        overview: 'Collections overview',
        payments: 'Student payments',
        credits: 'Excess credits',
        discounts: 'Discount audit',
      })[this.section()],
  );
  readonly description = computed(
    () =>
      ({
        overview: 'Live collection totals and focused finance workspaces.',
        payments: 'Find transactions, inspect allocations and download receipts.',
        credits: 'Track unallocated receipts and remaining student credit.',
        discounts: 'Review one-time concessions without mixing them with payments.',
      })[this.section()],
  );
  readonly statuses = computed(
    () =>
      ({
        overview: [],
        payments: ['paid', 'created', 'failed', 'refunded'],
        credits: ['available', 'consumed', 'refunded'],
        discounts: ['active', 'removed'],
      })[this.section()],
  );
  readonly rowActions: CompactActionItem[] = [
    { id: 'preview', label: 'View details', icon: 'view' },
  ];
  readonly start = computed(() =>
    this.pagination().total ? (this.pagination().page - 1) * this.pagination().pageSize + 1 : 0,
  );
  readonly end = computed(() =>
    Math.min(this.pagination().page * this.pagination().pageSize, this.pagination().total),
  );
  search = '';
  status = '';
  channel = '';
  pageSize: number = ERP_PAGINATION.defaultPageSize;

  constructor() {
    inject(DestroyRef).onDestroy(() => this.request?.unsubscribe());
    combineLatest([this.route.data, this.route.queryParamMap])
      .pipe(takeUntilDestroyed())
      .subscribe(([data, params]) => {
        this.section.set(data['section'] || 'payments');
        this.search = params.get('search') || '';
        this.status = params.get('status') || '';
        this.channel = this.section() === 'payments' ? params.get('channel') || '' : '';
        const size = Number(params.get('pageSize') || ERP_PAGINATION.defaultPageSize);
        this.pageSize = this.pageSizes.some((item) => item === size)
          ? size
          : ERP_PAGINATION.defaultPageSize;
        const page = Number(params.get('page') || 1);
        this.preview.set(null);
        this.load(Number.isSafeInteger(page) && page > 0 && page <= 1_000_000 ? page : 1);
      });
  }

  load(page = this.pagination().page) {
    this.request?.unsubscribe();
    this.loading.set(true);
    this.error.set('');
    this.payments.set([]);
    this.credits.set([]);
    this.discounts.set([]);
    const section = this.section();
    if (section === 'overview') {
      this.request = this.api.financeSummary().subscribe({
        next: (summary) => {
          this.summary.set(summary);
          this.loading.set(false);
        },
        error: (error) => this.failed(error),
      });
      return;
    }
    this.request = this.api
      .financeDirectory(section, {
        page,
        pageSize: this.pageSize,
        search: this.search.trim(),
        status: this.status,
        channel: this.channel,
      })
      .subscribe({
        next: (result) => {
          if (section === 'payments') this.payments.set(result.items as FeePayment[]);
          if (section === 'credits') this.credits.set(result.items as FeeCredit[]);
          if (section === 'discounts') this.discounts.set(result.items as StudentDiscount[]);
          this.pagination.set(result.pagination);
          this.loading.set(false);
        },
        error: (error) => this.failed(error),
      });
  }
  private failed(error: { error?: { message?: string } }) {
    this.error.set(
      error.error?.message || 'This finance workspace could not be loaded. Please retry.',
    );
    this.loading.set(false);
  }
  navigate(page = 1) {
    const queryParams = {
      search: this.search.trim() || null,
      status: this.status || null,
      channel: this.channel || null,
      page,
      pageSize: this.pageSize,
    };
    void this.router.navigate([], { relativeTo: this.route, queryParams });
  }
  clearFilters() {
    this.search = '';
    this.status = '';
    this.channel = '';
    this.navigate();
  }
  open(record: FinanceRecord) {
    this.downloadError.set('');
    this.preview.set(record);
  }
  payment(record: FinanceRecord): FeePayment | null {
    return this.section() === 'payments' ? (record as FeePayment) : null;
  }
  detailFields(record: FinanceRecord): RecordDetailField[] {
    const money = (value: number) =>
      new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR' }).format(value);
    const common = [
      { label: 'Student ID', value: record.studentId },
      { label: 'Status', value: record.status },
    ];
    if (this.section() === 'credits') {
      const credit = record as FeeCredit;
      return [
        ...common,
        { label: 'Source receipt', value: credit.sourceReceiptNumber || '—' },
        { label: 'Original credit', value: money(credit.originalAmount) },
        { label: 'Remaining credit', value: money(credit.remainingAmount) },
        { label: 'Fee type', value: credit.kind },
      ];
    }
    if (this.section() === 'discounts') {
      const discount = record as StudentDiscount;
      return [
        ...common,
        { label: 'Discount', value: discount.name },
        {
          label: 'Value',
          value: discount.type === 'percentage' ? discount.value + '%' : money(discount.value),
        },
        { label: 'Fee period', value: discount.targetPeriodLabel },
        { label: 'Internal remark', value: discount.internalRemark || '—' },
      ];
    }
    const payment = record as FeePayment;
    return [
      ...common,
      { label: 'Receipt', value: payment.receiptNumber || 'Not issued' },
      { label: 'Amount', value: money(payment.amount) },
      { label: 'Fee period', value: payment.targetPeriodLabel || 'Legacy payment' },
      { label: 'Channel', value: payment.paymentChannel || 'online' },
      {
        label: 'Reference',
        value:
          payment.paymentReference || payment.razorpayPaymentId || payment.razorpayOrderId || '—',
      },
      { label: 'Received by', value: payment.acceptedByName || '—' },
      { label: 'Internal remark', value: payment.internalRemark || '—' },
    ];
  }
  receipt(payment: FeePayment) {
    if (this.downloading()) return;
    this.downloading.set(true);
    this.downloadError.set('');
    this.api.downloadAdminReceipt(payment._id).subscribe({
      next: (blob) => {
        const url = URL.createObjectURL(blob);
        const anchor = document.createElement('a');
        anchor.href = url;
        anchor.download = (payment.receiptNumber || 'fee-receipt') + '.html';
        anchor.click();
        setTimeout(() => URL.revokeObjectURL(url), 1000);
        this.downloading.set(false);
      },
      error: () => {
        this.downloadError.set('Receipt download failed. Please retry.');
        this.downloading.set(false);
      },
    });
  }
}
