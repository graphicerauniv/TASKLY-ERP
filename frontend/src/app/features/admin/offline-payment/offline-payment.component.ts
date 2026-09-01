import { CurrencyPipe, DatePipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { ApiService } from '../../../core/api.service';
import {
  FeePayment,
  OfflinePaymentStudent,
  StudentFeeLedger,
} from '../../../core/models';
import { AdminPageComponent } from '../../../shared/ui/admin-page/admin-page.component';

type OfflineMethod =
  | 'cash'
  | 'upi'
  | 'bank_transfer'
  | 'cheque'
  | 'card'
  | 'demand_draft'
  | 'other';

@Component({
  selector: 'erp-offline-payment',
  imports: [AdminPageComponent, CurrencyPipe, DatePipe, FormsModule, RouterLink],
  templateUrl: './offline-payment.component.html',
  styleUrl: './offline-payment.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OfflinePaymentComponent {
  private readonly api = inject(ApiService);
  private readonly route = inject(ActivatedRoute);
  readonly studentAdmissionId = this.route.snapshot.paramMap.get('admissionId') || '';
  readonly student = signal<OfflinePaymentStudent | null>(null);
  readonly ledgers = signal<StudentFeeLedger[]>([]);
  readonly payments = signal<FeePayment[]>([]);
  readonly selectedKind = signal<'academic' | 'hostel'>('academic');
  readonly targetLedgerId = signal<string | null>(null);
  readonly loading = signal(true);
  readonly saving = signal(false);
  readonly error = signal('');
  readonly message = signal('');
  readonly receipt = signal<FeePayment | null>(null);
  readonly kindLedgers = computed(() =>
    this.ledgers().filter((ledger) => ledger.kind === this.selectedKind()),
  );
  readonly payableLedgers = computed(() =>
    this.kindLedgers().filter(
      (ledger) => Number(ledger.balanceAmount || 0) > 0,
    ),
  );
  readonly selectedLedger = computed(() =>
    this.payableLedgers().find((ledger) => ledger._id === this.targetLedgerId()) ?? null,
  );
  readonly maximum = computed(() =>
    this.selectedLedger()
      ? Number(this.selectedLedger()?.balanceAmount || 0)
      : this.payableLedgers().reduce(
          (total, ledger) => total + Number(ledger.balanceAmount || 0),
          0,
        ),
  );
  amount: number | null = null;
  method: OfflineMethod = 'cash';
  referenceNumber = '';
  paymentDate = localDateValue(new Date());
  internalRemark = '';
  private idempotencyKey = globalThis.crypto.randomUUID();

  constructor() {
    this.load();
  }

  load() {
    this.loading.set(true);
    this.error.set('');
    this.api.offlinePaymentWorkspace(this.studentAdmissionId).subscribe({
      next: ({ student, ledgers, payments }) => {
        this.student.set(student);
        this.ledgers.set(ledgers);
        this.payments.set(payments);
        if (!this.kindLedgers().length && ledgers.some((ledger) => ledger.kind === 'hostel'))
          this.selectedKind.set('hostel');
        this.loading.set(false);
      },
      error: (error) => {
        this.error.set(error.error?.message || 'Could not load this student fee account.');
        this.loading.set(false);
      },
    });
  }

  selectKind(kind: 'academic' | 'hostel') {
    this.selectedKind.set(kind);
    this.targetLedgerId.set(null);
    this.amount = null;
    this.receipt.set(null);
    this.error.set('');
  }

  selectTarget(value: string) {
    this.targetLedgerId.set(value || null);
    this.amount = this.maximum() || null;
    this.receipt.set(null);
    this.error.set('');
  }

  adjust() {
    if (this.saving()) return;
    const amount = Number(this.amount || 0);
    if (amount <= 0 || amount > this.maximum()) {
      this.error.set(`Enter an amount between ₹1 and ₹${this.maximum().toLocaleString('en-IN')}.`);
      return;
    }
    if (this.method !== 'cash' && !this.referenceNumber.trim()) {
      this.error.set('Enter the transaction, cheque, card or bank reference number.');
      return;
    }
    this.saving.set(true);
    this.error.set('');
    this.message.set('');
    this.api
      .createOfflinePayment(this.studentAdmissionId, {
        amount,
        kind: this.selectedKind(),
        targetLedgerId: this.targetLedgerId(),
        method: this.method,
        referenceNumber: this.referenceNumber.trim(),
        paymentDate: new Date(`${this.paymentDate}T12:00:00`).toISOString(),
        internalRemark: this.internalRemark.trim(),
        idempotencyKey: this.idempotencyKey,
      })
      .subscribe({
        next: ({ item, duplicate, ledgers }) => {
          this.ledgers.set(ledgers);
          this.payments.update((items) => [item, ...items.filter((value) => value._id !== item._id)]);
          this.receipt.set(item);
          this.message.set(
            duplicate
              ? 'This payment was already adjusted. The existing receipt is shown below.'
              : 'Offline payment adjusted successfully and the receipt is now available to the student.',
          );
          this.amount = null;
          this.referenceNumber = '';
          this.internalRemark = '';
          this.targetLedgerId.set(null);
          this.idempotencyKey = globalThis.crypto.randomUUID();
          this.saving.set(false);
        },
        error: (error) => {
          this.error.set(error.error?.message || 'The offline payment could not be adjusted.');
          if (error.status && error.status !== 0)
            this.idempotencyKey = globalThis.crypto.randomUUID();
          this.saving.set(false);
        },
      });
  }

  downloadReceipt(payment: FeePayment) {
    this.api.downloadAdminReceipt(payment._id).subscribe((blob) =>
      downloadBlob(blob, `${payment.receiptNumber || 'offline-fee-receipt'}.html`),
    );
  }

  visibleEntries(ledger: StudentFeeLedger) {
    return ledger.entries.filter(
      (entry) => Number(entry.amount || 0) > 0 || Number(entry.paidAmount || 0) > 0,
    );
  }
}

function localDateValue(date: Date) {
  const shifted = new Date(date.getTime() - date.getTimezoneOffset() * 60_000);
  return shifted.toISOString().slice(0, 10);
}

function downloadBlob(blob: Blob, name: string) {
  const url = URL.createObjectURL(blob);
  const anchor = document.createElement('a');
  anchor.href = url;
  anchor.download = name;
  anchor.click();
  URL.revokeObjectURL(url);
}
