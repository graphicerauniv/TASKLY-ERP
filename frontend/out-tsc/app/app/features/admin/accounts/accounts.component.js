import { CurrencyPipe, DatePipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ApiService } from '../../../core/api.service';
import { AdminPageComponent } from '../../../shared/ui/admin-page/admin-page.component';
import { FilterPopoverComponent, } from '../../../shared/ui/filter-popover/filter-popover.component';
import { CompactActionMenuComponent, } from '../../../shared/ui/compact-action-menu/compact-action-menu.component';
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
const _c0 = () => [];
const _forTrack0 = ($index, $item) => $item._id;
const _forTrack1 = ($index, $item) => $item.feeHeadId + $item.ledgerId;
function AccountsComponent_Conditional_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 1);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r0.error());
} }
function AccountsComponent_For_60_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "tr")(1, "td")(2, "strong");
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "small");
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(6, "td");
    i0.ɵɵtext(7);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "td");
    i0.ɵɵtext(9);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(10, "td");
    i0.ɵɵtext(11);
    i0.ɵɵpipe(12, "currency");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(13, "td")(14, "strong");
    i0.ɵɵtext(15);
    i0.ɵɵpipe(16, "currency");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(17, "td")(18, "span", 13);
    i0.ɵɵtext(19);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(20, "td");
    i0.ɵɵtext(21);
    i0.ɵɵpipe(22, "date");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const credit_r2 = ctx.$implicit;
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(credit_r2.studentName);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(credit_r2.studentId);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(credit_r2.kind === "academic" ? "Academic Fee" : "Hostel Fee");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(credit_r2.sourceReceiptNumber || "\u2014");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind2(12, 8, credit_r2.originalAmount, "INR"));
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind2(16, 11, credit_r2.remainingAmount, "INR"));
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(credit_r2.status);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind2(22, 14, credit_r2.createdAt, "medium"));
} }
function AccountsComponent_ForEmpty_61_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "tr")(1, "td", 14);
    i0.ɵɵtext(2, "No excess-credit records found.");
    i0.ɵɵelementEnd()();
} }
function AccountsComponent_For_102_Conditional_14_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "small");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const payment_r3 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1("Received by ", payment_r3.acceptedByName);
} }
function AccountsComponent_For_102_Conditional_15_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "small");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const payment_r3 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(payment_r3.internalRemark);
} }
function AccountsComponent_For_102_For_23_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "small");
    i0.ɵɵtext(1);
    i0.ɵɵpipe(2, "currency");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const allocation_r4 = ctx.$implicit;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate3("", allocation_r4.periodLabel ? allocation_r4.periodLabel + " \u00B7 " : "", "", allocation_r4.feeHeadName, ": ", i0.ɵɵpipeBind2(2, 3, allocation_r4.amount, "INR"));
} }
function AccountsComponent_For_102_Conditional_34_Template(rf, ctx) { if (rf & 1) {
    const _r5 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "erp-compact-action-menu", 16);
    i0.ɵɵlistener("selected", function AccountsComponent_For_102_Conditional_34_Template_erp_compact_action_menu_selected_0_listener($event) { i0.ɵɵrestoreView(_r5); const payment_r3 = i0.ɵɵnextContext().$implicit; const ctx_r0 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r0.handlePaymentAction($event, payment_r3)); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("items", ctx_r0.paymentActions);
} }
function AccountsComponent_For_102_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "tr")(1, "td")(2, "strong");
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(4, "td")(5, "strong");
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "small");
    i0.ɵɵtext(8);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(9, "td")(10, "strong");
    i0.ɵɵtext(11);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(12, "small");
    i0.ɵɵtext(13);
    i0.ɵɵelementEnd();
    i0.ɵɵconditionalCreate(14, AccountsComponent_For_102_Conditional_14_Template, 2, 1, "small");
    i0.ɵɵconditionalCreate(15, AccountsComponent_For_102_Conditional_15_Template, 2, 1, "small");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(16, "td");
    i0.ɵɵtext(17);
    i0.ɵɵpipe(18, "currency");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(19, "td");
    i0.ɵɵtext(20);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(21, "td");
    i0.ɵɵrepeaterCreate(22, AccountsComponent_For_102_For_23_Template, 3, 6, "small", null, _forTrack1);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(24, "td");
    i0.ɵɵtext(25);
    i0.ɵɵpipe(26, "currency");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(27, "td");
    i0.ɵɵtext(28);
    i0.ɵɵpipe(29, "date");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(30, "td")(31, "span", 13);
    i0.ɵɵtext(32);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(33, "td");
    i0.ɵɵconditionalCreate(34, AccountsComponent_For_102_Conditional_34_Template, 1, 1, "erp-compact-action-menu", 15);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const payment_r3 = ctx.$implicit;
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(payment_r3.receiptNumber || "Pending");
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(payment_r3.studentName);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(payment_r3.studentId);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(payment_r3.paymentChannel === "offline" ? "Offline" : payment_r3.paymentChannel === "credit" ? "Excess credit" : "Online \u00B7 Razorpay");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(payment_r3.paymentReference || payment_r3.razorpayPaymentId || payment_r3.razorpayOrderId);
    i0.ɵɵadvance();
    i0.ɵɵconditional(payment_r3.paymentChannel === "offline" && payment_r3.acceptedByName ? 14 : -1);
    i0.ɵɵadvance();
    i0.ɵɵconditional(payment_r3.paymentChannel === "offline" && payment_r3.internalRemark ? 15 : -1);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind2(18, 13, payment_r3.amount, "INR"));
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(payment_r3.targetPeriodLabel || "Legacy payment");
    i0.ɵɵadvance(2);
    i0.ɵɵrepeater(payment_r3.allocations || i0.ɵɵpureFunction0(22, _c0));
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind2(26, 16, payment_r3.outstandingBalance || 0, "INR"));
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind2(29, 19, payment_r3.paidAt || payment_r3.createdAt, "medium"));
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(payment_r3.status);
    i0.ɵɵadvance(2);
    i0.ɵɵconditional(payment_r3.status === "paid" ? 34 : -1);
} }
function AccountsComponent_ForEmpty_103_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "tr")(1, "td", 17);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", ctx_r0.loading() ? "Loading payments\u2026" : "No payment records found.", " ");
} }
function AccountsComponent_For_135_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "tr")(1, "td")(2, "strong");
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "small");
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(6, "td");
    i0.ɵɵtext(7);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "td");
    i0.ɵɵtext(9);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(10, "td");
    i0.ɵɵtext(11);
    i0.ɵɵpipe(12, "currency");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(13, "td");
    i0.ɵɵtext(14);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(15, "td");
    i0.ɵɵtext(16);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(17, "td");
    i0.ɵɵtext(18);
    i0.ɵɵpipe(19, "date");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(20, "td")(21, "span", 13);
    i0.ɵɵtext(22);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const discount_r6 = ctx.$implicit;
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(discount_r6.studentName);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(discount_r6.studentId);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(discount_r6.name);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(discount_r6.type === "percentage" ? "Percentage" : "Fixed amount");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", discount_r6.type === "percentage" ? discount_r6.value + "%" : i0.ɵɵpipeBind2(12, 9, discount_r6.value, "INR"), " ");
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(discount_r6.targetPeriodLabel);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(discount_r6.internalRemark);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind2(19, 12, discount_r6.createdAt, "medium"));
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(discount_r6.status);
} }
function AccountsComponent_ForEmpty_136_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "tr")(1, "td", 18);
    i0.ɵɵtext(2, "No one-time discount records found.");
    i0.ɵɵelementEnd()();
} }
export class AccountsComponent {
    api = inject(ApiService);
    items = signal([], ...(ngDevMode ? [{ debugName: "items" }] : /* istanbul ignore next */ []));
    discounts = signal([], ...(ngDevMode ? [{ debugName: "discounts" }] : /* istanbul ignore next */ []));
    credits = signal([], ...(ngDevMode ? [{ debugName: "credits" }] : /* istanbul ignore next */ []));
    summary = signal({
        successfulPayments: 0,
        collectedAmount: 0,
        pendingPayments: 0,
        availableCredit: 0,
    }, ...(ngDevMode ? [{ debugName: "summary" }] : /* istanbul ignore next */ []));
    loading = signal(false, ...(ngDevMode ? [{ debugName: "loading" }] : /* istanbul ignore next */ []));
    error = signal('', ...(ngDevMode ? [{ debugName: "error" }] : /* istanbul ignore next */ []));
    statusFilterOptions = [
        { label: 'All statuses', value: '' },
        { label: 'Paid', value: 'paid' },
        { label: 'Pending', value: 'created' },
        { label: 'Failed', value: 'failed' },
        { label: 'Refunded', value: 'refunded' },
    ];
    paymentActions = [
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
    receipt(payment) {
        this.api
            .downloadAdminReceipt(payment._id)
            .subscribe((blob) => downloadBlob(blob, `${payment.receiptNumber || 'fee-receipt'}.html`));
    }
    handlePaymentAction(action, payment) {
        if (action === 'receipt')
            this.receipt(payment);
    }
    static ɵfac = function AccountsComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || AccountsComponent)(); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: AccountsComponent, selectors: [["erp-accounts"]], decls: 137, vars: 20, consts: [["eyebrow", "Accounts", "title", "Student Payments", "description", "Review online and offline payments, allocation details, balances and receipts.", "variant", "minimal", "layout", "collection"], [1, "erp-notice", "erp-notice--error"], ["aria-label", "Payments summary", 1, "erp-metric-strip"], [1, "erp-metric-strip__item"], [1, "erp-metric-strip__icon", "erp-metric-strip__icon--image"], ["src", "assets/admin/finance-icons/accounts-payments.png", "alt", "", "aria-hidden", "true"], [1, "erp-card", "erp-table-shell"], [1, "erp-table-toolbar"], [1, "erp-table-shell__scroll"], [1, "erp-table-toolbar__actions"], ["type", "search", "placeholder", "Search payments", 1, "erp-control", 3, "ngModelChange", "keyup.enter", "ngModel"], ["label", "Status filters", "resetValue", "", 3, "valueChange", "options", "value"], ["type", "button", 1, "erp-button", "erp-button--secondary", 3, "click"], [1, "erp-status"], ["colspan", "7", 1, "erp-empty-state"], [3, "items"], [3, "selected", "items"], ["colspan", "10", 1, "erp-empty-state"], ["colspan", "8", 1, "erp-empty-state"]], template: function AccountsComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "erp-admin-page", 0);
            i0.ɵɵconditionalCreate(1, AccountsComponent_Conditional_1_Template, 2, 1, "p", 1);
            i0.ɵɵelementStart(2, "section", 2)(3, "article", 3)(4, "span", 4);
            i0.ɵɵelement(5, "img", 5);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(6, "div")(7, "small");
            i0.ɵɵtext(8, "Total collected");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(9, "strong");
            i0.ɵɵtext(10);
            i0.ɵɵpipe(11, "currency");
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(12, "article", 3)(13, "div")(14, "small");
            i0.ɵɵtext(15, "Available excess credit");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(16, "strong");
            i0.ɵɵtext(17);
            i0.ɵɵpipe(18, "currency");
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(19, "article", 3)(20, "div")(21, "small");
            i0.ɵɵtext(22, "Successful payments");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(23, "strong");
            i0.ɵɵtext(24);
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(25, "article", 3)(26, "div")(27, "small");
            i0.ɵɵtext(28, "Pending orders");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(29, "strong");
            i0.ɵɵtext(30);
            i0.ɵɵelementEnd()()()();
            i0.ɵɵelementStart(31, "section", 6)(32, "div", 7)(33, "div")(34, "h2");
            i0.ɵɵtext(35, " Student excess credit ");
            i0.ɵɵelementStart(36, "small");
            i0.ɵɵtext(37);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(38, "p");
            i0.ɵɵtext(39, "Unallocated offline receipts retained for matching future fees.");
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(40, "div", 8)(41, "table")(42, "thead")(43, "tr")(44, "th");
            i0.ɵɵtext(45, "Student");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(46, "th");
            i0.ɵɵtext(47, "Fee type");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(48, "th");
            i0.ɵɵtext(49, "Source receipt");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(50, "th");
            i0.ɵɵtext(51, "Original excess");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(52, "th");
            i0.ɵɵtext(53, "Available credit");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(54, "th");
            i0.ɵɵtext(55, "Status");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(56, "th");
            i0.ɵɵtext(57, "Created");
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(58, "tbody");
            i0.ɵɵrepeaterCreate(59, AccountsComponent_For_60_Template, 23, 17, "tr", null, _forTrack0, false, AccountsComponent_ForEmpty_61_Template, 3, 0, "tr");
            i0.ɵɵelementEnd()()()();
            i0.ɵɵelementStart(62, "section", 6)(63, "div", 7)(64, "div")(65, "h2");
            i0.ɵɵtext(66, " Payment records ");
            i0.ɵɵelementStart(67, "small");
            i0.ɵɵtext(68);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(69, "p");
            i0.ɵɵtext(70, "Search by student, receipt, online payment ID or offline reference.");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(71, "div", 9)(72, "input", 10);
            i0.ɵɵtwoWayListener("ngModelChange", function AccountsComponent_Template_input_ngModelChange_72_listener($event) { i0.ɵɵtwoWayBindingSet(ctx.search, $event) || (ctx.search = $event); return $event; });
            i0.ɵɵlistener("keyup.enter", function AccountsComponent_Template_input_keyup_enter_72_listener() { return ctx.load(); });
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(73, "erp-filter-popover", 11);
            i0.ɵɵlistener("valueChange", function AccountsComponent_Template_erp_filter_popover_valueChange_73_listener($event) { ctx.status = $event; return ctx.load(); });
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(74, "button", 12);
            i0.ɵɵlistener("click", function AccountsComponent_Template_button_click_74_listener() { return ctx.load(); });
            i0.ɵɵtext(75, " Search ");
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(76, "div", 8)(77, "table")(78, "thead")(79, "tr")(80, "th");
            i0.ɵɵtext(81, "Receipt");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(82, "th");
            i0.ɵɵtext(83, "Student");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(84, "th");
            i0.ɵɵtext(85, "Channel / reference");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(86, "th");
            i0.ɵɵtext(87, "Amount");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(88, "th");
            i0.ɵɵtext(89, "Fee period");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(90, "th");
            i0.ɵɵtext(91, "Allocation");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(92, "th");
            i0.ɵɵtext(93, "Outstanding");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(94, "th");
            i0.ɵɵtext(95, "Date");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(96, "th");
            i0.ɵɵtext(97, "Status");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(98, "th");
            i0.ɵɵtext(99, "Action");
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(100, "tbody");
            i0.ɵɵrepeaterCreate(101, AccountsComponent_For_102_Template, 35, 23, "tr", null, _forTrack0, false, AccountsComponent_ForEmpty_103_Template, 3, 1, "tr");
            i0.ɵɵelementEnd()()()();
            i0.ɵɵelementStart(104, "section", 6)(105, "div", 7)(106, "div")(107, "h2");
            i0.ɵɵtext(108, " One-time discount audit ");
            i0.ɵɵelementStart(109, "small");
            i0.ɵɵtext(110);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(111, "p");
            i0.ɵɵtext(112, "Internal remarks are restricted to administrators and Accounts.");
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(113, "div", 8)(114, "table")(115, "thead")(116, "tr")(117, "th");
            i0.ɵɵtext(118, "Student");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(119, "th");
            i0.ɵɵtext(120, "Discount");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(121, "th");
            i0.ɵɵtext(122, "Type");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(123, "th");
            i0.ɵɵtext(124, "Value");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(125, "th");
            i0.ɵɵtext(126, "Fee period");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(127, "th");
            i0.ɵɵtext(128, "Internal remark");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(129, "th");
            i0.ɵɵtext(130, "Date");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(131, "th");
            i0.ɵɵtext(132, "Status");
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(133, "tbody");
            i0.ɵɵrepeaterCreate(134, AccountsComponent_For_135_Template, 23, 15, "tr", null, _forTrack0, false, AccountsComponent_ForEmpty_136_Template, 3, 0, "tr");
            i0.ɵɵelementEnd()()()()();
        } if (rf & 2) {
            i0.ɵɵadvance();
            i0.ɵɵconditional(ctx.error() ? 1 : -1);
            i0.ɵɵadvance(9);
            i0.ɵɵtextInterpolate(i0.ɵɵpipeBind2(11, 14, ctx.summary().collectedAmount, "INR"));
            i0.ɵɵadvance(7);
            i0.ɵɵtextInterpolate(i0.ɵɵpipeBind2(18, 17, ctx.summary().availableCredit, "INR"));
            i0.ɵɵadvance(7);
            i0.ɵɵtextInterpolate(ctx.summary().successfulPayments);
            i0.ɵɵadvance(6);
            i0.ɵɵtextInterpolate(ctx.summary().pendingPayments);
            i0.ɵɵadvance(7);
            i0.ɵɵtextInterpolate(ctx.credits().length);
            i0.ɵɵadvance(22);
            i0.ɵɵrepeater(ctx.credits());
            i0.ɵɵadvance(9);
            i0.ɵɵtextInterpolate(ctx.items().length);
            i0.ɵɵadvance(4);
            i0.ɵɵtwoWayProperty("ngModel", ctx.search);
            i0.ɵɵadvance();
            i0.ɵɵproperty("options", ctx.statusFilterOptions)("value", ctx.status);
            i0.ɵɵadvance(28);
            i0.ɵɵrepeater(ctx.items());
            i0.ɵɵadvance(9);
            i0.ɵɵtextInterpolate(ctx.discounts().length);
            i0.ɵɵadvance(24);
            i0.ɵɵrepeater(ctx.discounts());
        } }, dependencies: [AdminPageComponent,
            CompactActionMenuComponent,
            FilterPopoverComponent,
            FormsModule, i1.DefaultValueAccessor, i1.NgControlStatus, i1.NgModel, CurrencyPipe,
            DatePipe], encapsulation: 2, changeDetection: 0 });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AccountsComponent, [{
        type: Component,
        args: [{ selector: 'erp-accounts', imports: [
                    AdminPageComponent,
                    CompactActionMenuComponent,
                    FilterPopoverComponent,
                    FormsModule,
                    CurrencyPipe,
                    DatePipe,
                ], changeDetection: ChangeDetectionStrategy.OnPush, template: "<erp-admin-page\n  eyebrow=\"Accounts\"\n  title=\"Student Payments\"\n  description=\"Review online and offline payments, allocation details, balances and receipts.\"\n  variant=\"minimal\"\n  layout=\"collection\"\n>\n  @if (error()) {\n    <p class=\"erp-notice erp-notice--error\">{{ error() }}</p>\n  }\n  <section class=\"erp-metric-strip\" aria-label=\"Payments summary\">\n    <article class=\"erp-metric-strip__item\">\n      <span class=\"erp-metric-strip__icon erp-metric-strip__icon--image\"\n        ><img src=\"assets/admin/finance-icons/accounts-payments.png\" alt=\"\" aria-hidden=\"true\"\n      /></span>\n      <div>\n        <small>Total collected</small>\n        <strong>{{ summary().collectedAmount | currency: 'INR' }}</strong>\n      </div>\n    </article>\n    <article class=\"erp-metric-strip__item\">\n      <div>\n        <small>Available excess credit</small\n        ><strong>{{ summary().availableCredit | currency: 'INR' }}</strong>\n      </div>\n    </article>\n    <article class=\"erp-metric-strip__item\">\n      <div>\n        <small>Successful payments</small>\n        <strong>{{ summary().successfulPayments }}</strong>\n      </div>\n    </article>\n    <article class=\"erp-metric-strip__item\">\n      <div>\n        <small>Pending orders</small>\n        <strong>{{ summary().pendingPayments }}</strong>\n      </div>\n    </article>\n  </section>\n  <section class=\"erp-card erp-table-shell\">\n    <div class=\"erp-table-toolbar\">\n      <div>\n        <h2>\n          Student excess credit <small>{{ credits().length }}</small>\n        </h2>\n        <p>Unallocated offline receipts retained for matching future fees.</p>\n      </div>\n    </div>\n    <div class=\"erp-table-shell__scroll\">\n      <table>\n        <thead>\n          <tr>\n            <th>Student</th>\n            <th>Fee type</th>\n            <th>Source receipt</th>\n            <th>Original excess</th>\n            <th>Available credit</th>\n            <th>Status</th>\n            <th>Created</th>\n          </tr>\n        </thead>\n        <tbody>\n          @for (credit of credits(); track credit._id) {\n            <tr>\n              <td>\n                <strong>{{ credit.studentName }}</strong\n                ><small>{{ credit.studentId }}</small>\n              </td>\n              <td>{{ credit.kind === 'academic' ? 'Academic Fee' : 'Hostel Fee' }}</td>\n              <td>{{ credit.sourceReceiptNumber || '\u2014' }}</td>\n              <td>{{ credit.originalAmount | currency: 'INR' }}</td>\n              <td>\n                <strong>{{ credit.remainingAmount | currency: 'INR' }}</strong>\n              </td>\n              <td>\n                <span class=\"erp-status\">{{ credit.status }}</span>\n              </td>\n              <td>{{ credit.createdAt | date: 'medium' }}</td>\n            </tr>\n          } @empty {\n            <tr>\n              <td colspan=\"7\" class=\"erp-empty-state\">No excess-credit records found.</td>\n            </tr>\n          }\n        </tbody>\n      </table>\n    </div>\n  </section>\n  <section class=\"erp-card erp-table-shell\">\n    <div class=\"erp-table-toolbar\">\n      <div>\n        <h2>\n          Payment records <small>{{ items().length }}</small>\n        </h2>\n        <p>Search by student, receipt, online payment ID or offline reference.</p>\n      </div>\n      <div class=\"erp-table-toolbar__actions\">\n        <input\n          class=\"erp-control\"\n          type=\"search\"\n          [(ngModel)]=\"search\"\n          placeholder=\"Search payments\"\n          (keyup.enter)=\"load()\"\n        /><erp-filter-popover\n          label=\"Status filters\"\n          resetValue=\"\"\n          [options]=\"statusFilterOptions\"\n          [value]=\"status\"\n          (valueChange)=\"status = $event; load()\"\n        /><button class=\"erp-button erp-button--secondary\" type=\"button\" (click)=\"load()\">\n          Search\n        </button>\n      </div>\n    </div>\n    <div class=\"erp-table-shell__scroll\">\n      <table>\n        <thead>\n          <tr>\n            <th>Receipt</th>\n            <th>Student</th>\n            <th>Channel / reference</th>\n            <th>Amount</th>\n            <th>Fee period</th>\n            <th>Allocation</th>\n            <th>Outstanding</th>\n            <th>Date</th>\n            <th>Status</th>\n            <th>Action</th>\n          </tr>\n        </thead>\n        <tbody>\n          @for (payment of items(); track payment._id) {\n            <tr>\n              <td>\n                <strong>{{ payment.receiptNumber || 'Pending' }}</strong>\n              </td>\n              <td>\n                <strong>{{ payment.studentName }}</strong\n                ><small>{{ payment.studentId }}</small>\n              </td>\n              <td>\n                <strong>{{\n                  payment.paymentChannel === 'offline'\n                    ? 'Offline'\n                    : payment.paymentChannel === 'credit'\n                      ? 'Excess credit'\n                      : 'Online \u00B7 Razorpay'\n                }}</strong\n                ><small>{{\n                  payment.paymentReference || payment.razorpayPaymentId || payment.razorpayOrderId\n                }}</small>\n                @if (payment.paymentChannel === 'offline' && payment.acceptedByName) {\n                  <small>Received by {{ payment.acceptedByName }}</small>\n                }\n                @if (payment.paymentChannel === 'offline' && payment.internalRemark) {\n                  <small>{{ payment.internalRemark }}</small>\n                }\n              </td>\n              <td>{{ payment.amount | currency: 'INR' }}</td>\n              <td>{{ payment.targetPeriodLabel || 'Legacy payment' }}</td>\n              <td>\n                @for (\n                  allocation of payment.allocations || [];\n                  track allocation.feeHeadId + allocation.ledgerId\n                ) {\n                  <small\n                    >{{ allocation.periodLabel ? allocation.periodLabel + ' \u00B7 ' : ''\n                    }}{{ allocation.feeHeadName }}: {{ allocation.amount | currency: 'INR' }}</small\n                  >\n                }\n              </td>\n              <td>{{ payment.outstandingBalance || 0 | currency: 'INR' }}</td>\n              <td>{{ payment.paidAt || payment.createdAt | date: 'medium' }}</td>\n              <td>\n                <span class=\"erp-status\">{{ payment.status }}</span>\n              </td>\n              <td>\n                @if (payment.status === 'paid') {\n                  <erp-compact-action-menu\n                    [items]=\"paymentActions\"\n                    (selected)=\"handlePaymentAction($event, payment)\"\n                  />\n                }\n              </td>\n            </tr>\n          } @empty {\n            <tr>\n              <td colspan=\"10\" class=\"erp-empty-state\">\n                {{ loading() ? 'Loading payments\u2026' : 'No payment records found.' }}\n              </td>\n            </tr>\n          }\n        </tbody>\n      </table>\n    </div>\n  </section>\n  <section class=\"erp-card erp-table-shell\">\n    <div class=\"erp-table-toolbar\">\n      <div>\n        <h2>\n          One-time discount audit <small>{{ discounts().length }}</small>\n        </h2>\n        <p>Internal remarks are restricted to administrators and Accounts.</p>\n      </div>\n    </div>\n    <div class=\"erp-table-shell__scroll\">\n      <table>\n        <thead>\n          <tr>\n            <th>Student</th>\n            <th>Discount</th>\n            <th>Type</th>\n            <th>Value</th>\n            <th>Fee period</th>\n            <th>Internal remark</th>\n            <th>Date</th>\n            <th>Status</th>\n          </tr>\n        </thead>\n        <tbody>\n          @for (discount of discounts(); track discount._id) {\n            <tr>\n              <td>\n                <strong>{{ discount.studentName }}</strong\n                ><small>{{ discount.studentId }}</small>\n              </td>\n              <td>{{ discount.name }}</td>\n              <td>{{ discount.type === 'percentage' ? 'Percentage' : 'Fixed amount' }}</td>\n              <td>\n                {{\n                  discount.type === 'percentage'\n                    ? discount.value + '%'\n                    : (discount.value | currency: 'INR')\n                }}\n              </td>\n              <td>{{ discount.targetPeriodLabel }}</td>\n              <td>{{ discount.internalRemark }}</td>\n              <td>{{ discount.createdAt | date: 'medium' }}</td>\n              <td>\n                <span class=\"erp-status\">{{ discount.status }}</span>\n              </td>\n            </tr>\n          } @empty {\n            <tr>\n              <td colspan=\"8\" class=\"erp-empty-state\">No one-time discount records found.</td>\n            </tr>\n          }\n        </tbody>\n      </table>\n    </div>\n  </section>\n</erp-admin-page>\n" }]
    }], () => [], null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(AccountsComponent, { className: "AccountsComponent", filePath: "frontend/src/app/features/admin/accounts/accounts.component.ts", lineNumber: 29 }); })();
function downloadBlob(blob, name) {
    const url = URL.createObjectURL(blob);
    const anchor = document.createElement('a');
    anchor.href = url;
    anchor.download = name;
    anchor.click();
    URL.revokeObjectURL(url);
}
