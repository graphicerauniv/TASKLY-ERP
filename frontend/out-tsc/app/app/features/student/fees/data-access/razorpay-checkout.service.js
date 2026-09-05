import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
export class RazorpayCheckoutService {
    async open(order, description, onSuccess, onDismiss) {
        if (!(await this.loadScript()) || !window.Razorpay)
            return false;
        const checkout = new window.Razorpay({
            key: order.keyId,
            amount: order.amountPaise,
            currency: order.currency,
            name: 'GEU ERP',
            description,
            order_id: order.orderId,
            prefill: { name: order.student.name },
            handler: (result) => onSuccess(result),
            modal: { ondismiss: onDismiss },
        });
        checkout.open();
        return true;
    }
    loadScript() {
        if (window.Razorpay)
            return Promise.resolve(true);
        return new Promise((resolve) => {
            const existing = document.querySelector('script[data-razorpay-checkout]');
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
    static ɵfac = function RazorpayCheckoutService_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || RazorpayCheckoutService)(); };
    static ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: RazorpayCheckoutService, factory: RazorpayCheckoutService.ɵfac, providedIn: 'root' });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(RazorpayCheckoutService, [{
        type: Injectable,
        args: [{ providedIn: 'root' }]
    }], null, null); })();
