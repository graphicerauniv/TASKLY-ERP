import { CurrencyPipe, DatePipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ApiService } from '../../../core/api.service';
import { FeePayment, StudentDiscount } from '../../../core/models';
import { AdminPageComponent } from '../../../shared/ui/admin-page/admin-page.component';

@Component({
  selector: 'erp-accounts',
  imports: [AdminPageComponent, FormsModule, CurrencyPipe, DatePipe],
  templateUrl: './accounts.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AccountsComponent {
  private readonly api = inject(ApiService);
  readonly items = signal<FeePayment[]>([]);
  readonly discounts = signal<StudentDiscount[]>([]);
  readonly summary = signal({ successfulPayments: 0, collectedAmount: 0, pendingPayments: 0 });
  readonly loading = signal(false);
  readonly error = signal('');
  search = '';
  status = '';

  constructor() {
    this.load();
  }

  load() {
    this.loading.set(true);
    this.api.accounts(this.search.trim(), this.status).subscribe({
      next: ({ items, discounts, summary }) => {
        this.items.set(items);
        this.discounts.set(discounts);
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
}

function downloadBlob(blob: Blob, name: string) {
  const url = URL.createObjectURL(blob);
  const anchor = document.createElement('a');
  anchor.href = url;
  anchor.download = name;
  anchor.click();
  URL.revokeObjectURL(url);
}
