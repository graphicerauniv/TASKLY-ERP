import { Injectable } from '@angular/core';

export interface RazorpayOrderData {
  keyId: string;
  orderId: string;
  amountPaise: number;
  currency: string;
  student: { name: string; studentId: string };
}

export interface RazorpayPaymentResult {
  razorpay_order_id: string;
  razorpay_payment_id: string;
  razorpay_signature: string;
}

interface RazorpayInstance { open(): void; }

interface RazorpayConstructor {
  new (options: Record<string, unknown>): RazorpayInstance;
}

declare global { interface Window { Razorpay?: RazorpayConstructor; } }

@Injectable({ providedIn: 'root' })
export class RazorpayCheckoutService {
  async open(order: RazorpayOrderData, description: string, onSuccess: (result: RazorpayPaymentResult) => void, onDismiss: () => void): Promise<boolean> {
    if (!(await this.loadScript()) || !window.Razorpay) return false;
    const checkout = new window.Razorpay({
      key: order.keyId,
      amount: order.amountPaise,
      currency: order.currency,
      name: 'GEU ERP',
      description,
      order_id: order.orderId,
      prefill: { name: order.student.name },
      handler: (result: RazorpayPaymentResult) => onSuccess(result),
      modal: { ondismiss: onDismiss },
    });
    checkout.open();
    return true;
  }

  private loadScript(): Promise<boolean> {
    if (window.Razorpay) return Promise.resolve(true);
    return new Promise((resolve) => {
      const existing = document.querySelector<HTMLScriptElement>('script[data-razorpay-checkout]');
      if (existing) {
        existing.addEventListener('load', () => resolve(Boolean(window.Razorpay)), { once: true });
        existing.addEventListener('error', () => resolve(false), { once: true });
        return;
      }
      const script = document.createElement('script');
      script.src = 'https://checkout.razorpay.com/v1/checkout.js';
      script.async = true;
      script.dataset['razorpayCheckout'] = 'true';
      script.onload = () => resolve(Boolean(window.Razorpay));
      script.onerror = () => resolve(false);
      document.body.appendChild(script);
    });
  }
}
