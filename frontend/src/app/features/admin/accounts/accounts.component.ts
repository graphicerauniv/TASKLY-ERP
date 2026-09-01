import { CurrencyPipe, DatePipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ApiService } from '../../../core/api.service';
import { FeeCredit, FeePayment, StudentDiscount } from '../../../core/models';
import { AdminPageComponent } from '../../../shared/ui/admin-page/admin-page.component';
import {
  FilterPopoverComponent,
  FilterPopoverOption,
} from '../../../shared/ui/filter-popover/filter-popover.component';
import {
  CompactActionItem,
  CompactActionMenuComponent,
} from '../../../shared/ui/compact-action-menu/compact-action-menu.component';

@Component({
  selector: 'erp-accounts',
  imports: [
    AdminPageComponent,
    CompactActionMenuComponent,
    FilterPopoverComponent,
    FormsModule,
    CurrencyPipe,
    DatePipe,
  ],
  templateUrl: './accounts.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AccountsComponent {
  private readonly api = inject(ApiService);
  readonly items = signal<FeePayment[]>([]);
  readonly discounts = signal<StudentDiscount[]>([]);
  readonly credits = signal<FeeCredit[]>([]);
  readonly summary = signal({
    successfulPayments: 0,
    collectedAmount: 0,
    pendingPayments: 0,
    availableCredit: 0,
  });
  readonly loading = signal(false);
  readonly error = signal('');
  readonly statusFilterOptions: readonly FilterPopoverOption[] = [
    { label: 'All statuses', value: '' },
    { label: 'Paid', value: 'paid' },
    { label: 'Pending', value: 'created' },
    { label: 'Failed', value: 'failed' },
    { label: 'Refunded', value: 'refunded' },
  ];
  readonly paymentActions: readonly CompactActionItem[] = [
    { id: 'receipt', label: 'Download receipt', icon: 'download' },
  ];
  search = '';
  status = '';

  constructor() {
    this.load();
  }

  load() {
    this.loading.set(true);
    this.api.accounts(this.search.trim(), this.status).subscribe({
      next: ({ items, discounts, credits, summary }) => {
        this.items.set(items);
        this.discounts.set(discounts);
        this.credits.set(credits);
        this.summary.set(summary);
        this.loading.set(false);
      },
      error: (error) => {
        this.error.set(error.error?.message || 'Could not load accounts.');
        this.loading.set(false);
      },
    });
  }

  receipt(payment: FeePayment) {
    this.api
      .downloadAdminReceipt(payment._id)
      .subscribe((blob) => downloadBlob(blob, `${payment.receiptNumber || 'fee-receipt'}.html`));
  }

  handlePaymentAction(action: string, payment: FeePayment): void {
    if (action === 'receipt') this.receipt(payment);
  }
}

function downloadBlob(blob: Blob, name: string) {
  const url = URL.createObjectURL(blob);
  const anchor = document.createElement('a');
  anchor.href = url;
  anchor.download = name;
  anchor.click();
  URL.revokeObjectURL(url);
}
