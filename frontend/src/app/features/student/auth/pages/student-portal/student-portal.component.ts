import { CurrencyPipe, DatePipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { LucideUserRound } from '@lucide/angular';
import { ApiService } from '../../../../../core/api.service';
import { FeePayment, StudentFeeLedger, StudentSession } from '../../../../../core/models';

@Component({
  selector: 'erp-student-portal',
  imports: [CurrencyPipe, DatePipe, FormsModule, LucideUserRound],
  templateUrl: './student-portal.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StudentPortalComponent {
  private readonly api = inject(ApiService);
  private readonly router = inject(Router);
  readonly student = signal<StudentSession | null>(this.readStudent());
  readonly feeLedgers = signal<StudentFeeLedger[]>([]);
  readonly loadingFees = signal(false);
  readonly feeError = signal('');
  readonly activeKind = signal<'academic' | 'hostel'>('academic');
  readonly payments = signal<FeePayment[]>([]);
  readonly razorpayEnabled = signal(false);
  readonly paying = signal(false);
  readonly paymentMessage = signal('');
  paymentAmount: number | null = null;
  readonly totalOutstanding = computed(() =>
    this.feeLedgers().reduce((sum, item) => sum + Number(item.balanceAmount || 0), 0),
  );

  constructor() {
    const token = localStorage.getItem('taskly_student_token');
    if (!token || !this.student()?.studentId) {
      void this.router.navigate(['/student/login']);
      return;
    }
    this.loadFees(token);
    this.loadPayments(token);
  }

  ledger(kind: 'academic' | 'hostel') {
    return this.feeLedgers().filter((item) => item.kind === kind)[0] || null;
  }

  pay() {
    const token = localStorage.getItem('taskly_student_token');
    const amount = Number(this.paymentAmount || 0);
    if (!token || amount <= 0 || amount > this.totalOutstanding() || this.paying()) {
      this.feeError.set('Enter a valid amount up to your total outstanding balance.');
      return;
    }
    this.paying.set(true);
    this.feeError.set('');
    this.api.createStudentPaymentOrder(token, amount).subscribe({
      next: async (order) => {
        if (!(await loadRazorpay())) {
          this.feeError.set('Razorpay Checkout could not be loaded. Check your connection.');
          this.paying.set(false);
          return;
        }
        const checkout = new window.Razorpay!({
          key: order.keyId,
          amount: order.amountPaise,
          currency: order.currency,
          order_id: order.orderId,
          name: 'Taskly ERP',
          description: `Fee payment for ${order.student.studentId}`,
          prefill: { name: order.student.name },
          handler: (result: RazorpayResult) => this.verifyPayment(token, result),
          modal: { ondismiss: () => this.paying.set(false) },
          theme: {
            color: getComputedStyle(document.documentElement)
              .getPropertyValue('--erp-color-primary')
              .trim(),
          },
        });
        checkout.open();
      },
      error: (error) => {
        this.feeError.set(error.error?.message || 'Could not start the payment.');
        this.paying.set(false);
      },
    });
  }

  receipt(payment: FeePayment) {
    const token = localStorage.getItem('taskly_student_token');
    if (!token) return;
    this.api
      .downloadStudentReceipt(token, payment._id)
      .subscribe((blob) => downloadBlob(blob, `${payment.receiptNumber || 'fee-receipt'}.html`));
  }

  entryAmount(entry: StudentFeeLedger['entries'][number]) {
    return entry.category === 'discount' ? -entry.amount : entry.amount;
  }

  private loadFees(token: string) {
    this.loadingFees.set(true);
    this.feeError.set('');
    this.api.studentFees(token).subscribe({
      next: ({ items }) => {
        this.feeLedgers.set(items);
        this.loadingFees.set(false);
      },
      error: (error) => {
        this.feeError.set(error.error?.message || 'Could not load your fees.');
        this.loadingFees.set(false);
      },
    });
  }

  private loadPayments(token: string) {
    this.api.studentPaymentHistory(token).subscribe({
      next: ({ items, razorpayEnabled }) => {
        this.payments.set(items);
        this.razorpayEnabled.set(razorpayEnabled);
      },
    });
  }

  private verifyPayment(token: string, result: RazorpayResult) {
    this.api.verifyStudentPayment(token, result).subscribe({
      next: ({ item }) => {
        this.paymentMessage.set(`Payment successful. Receipt ${item.receiptNumber} is ready.`);
        this.paymentAmount = null;
        this.paying.set(false);
        this.loadFees(token);
        this.loadPayments(token);
      },
      error: (error) => {
        this.feeError.set(error.error?.message || 'Payment verification failed. Contact Accounts.');
        this.paying.set(false);
      },
    });
  }

  private readStudent(): StudentSession | null {
    try {
      return JSON.parse(localStorage.getItem('taskly_student_profile') || 'null');
    } catch {
      return null;
    }
  }
}

declare global {
  interface Window {
    Razorpay?: new (options: Record<string, unknown>) => { open(): void };
  }
}

interface RazorpayResult {
  razorpay_order_id: string;
  razorpay_payment_id: string;
  razorpay_signature: string;
}

function loadRazorpay(): Promise<boolean> {
  if (window.Razorpay) return Promise.resolve(true);
  return new Promise((resolve) => {
    const existing = document.querySelector<HTMLScriptElement>('script[data-razorpay-checkout]');
    if (existing) {
      existing.addEventListener('load', () => resolve(true), { once: true });
      existing.addEventListener('error', () => resolve(false), { once: true });
      return;
    }
    const script = document.createElement('script');
    script.src = 'https://checkout.razorpay.com/v1/checkout.js';
    script.dataset['razorpayCheckout'] = 'true';
    script.onload = () => resolve(true);
    script.onerror = () => resolve(false);
    document.head.appendChild(script);
  });
}

function downloadBlob(blob: Blob, name: string) {
  const url = URL.createObjectURL(blob);
  const anchor = document.createElement('a');
  anchor.href = url;
  anchor.download = name;
  anchor.click();
  URL.revokeObjectURL(url);
}
