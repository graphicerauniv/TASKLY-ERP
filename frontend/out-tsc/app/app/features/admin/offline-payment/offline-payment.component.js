import { CurrencyPipe, DatePipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { ApiService } from '../../../core/api.service';
import { AdminPageComponent } from '../../../shared/ui/admin-page/admin-page.component';
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
const _forTrack0 = ($index, $item) => $item._id;
const _forTrack1 = ($index, $item) => $item.feeHeadId + $item.periodLabel;
function OfflinePaymentComponent_Conditional_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 3);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r0.message());
} }
function OfflinePaymentComponent_Conditional_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 4);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r0.error());
} }
function OfflinePaymentComponent_Conditional_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "section", 5);
    i0.ɵɵtext(1, "Loading the student fee account\u2026");
    i0.ɵɵelementEnd();
} }
function OfflinePaymentComponent_Conditional_7_For_44_For_26_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "tr")(1, "td")(2, "strong");
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "small");
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(6, "td");
    i0.ɵɵtext(7);
    i0.ɵɵpipe(8, "currency");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(9, "td");
    i0.ɵɵtext(10);
    i0.ɵɵpipe(11, "currency");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(12, "td");
    i0.ɵɵtext(13);
    i0.ɵɵpipe(14, "currency");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(15, "td")(16, "strong");
    i0.ɵɵtext(17);
    i0.ɵɵpipe(18, "currency");
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const entry_r3 = ctx.$implicit;
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(entry_r3.feeHeadName);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(entry_r3.isPenalty ? "Penalty \u00B7 paid first" : "Priority " + entry_r3.priority);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind2(8, 6, entry_r3.amount, "INR"));
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind2(11, 9, entry_r3.discountAmount || 0, "INR"));
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind2(14, 12, entry_r3.paidAmount, "INR"));
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind2(18, 15, entry_r3.balanceAmount, "INR"));
} }
function OfflinePaymentComponent_Conditional_7_For_44_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "article", 11)(1, "header")(2, "div")(3, "strong");
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "small");
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(7, "b");
    i0.ɵɵtext(8);
    i0.ɵɵpipe(9, "currency");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(10, "div", 34)(11, "table")(12, "thead")(13, "tr")(14, "th");
    i0.ɵɵtext(15, "Fee head");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(16, "th");
    i0.ɵɵtext(17, "Charge");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(18, "th");
    i0.ɵɵtext(19, "Discount");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(20, "th");
    i0.ɵɵtext(21, "Received");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(22, "th");
    i0.ɵɵtext(23, "Left amount");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(24, "tbody");
    i0.ɵɵrepeaterCreate(25, OfflinePaymentComponent_Conditional_7_For_44_For_26_Template, 19, 18, "tr", null, _forTrack1);
    i0.ɵɵelementEnd()()()();
} if (rf & 2) {
    const ledger_r4 = ctx.$implicit;
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate2("", ledger_r4.name, " \u00B7 ", ledger_r4.periodLabel);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ledger_r4.academicSession);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind2(9, 4, ledger_r4.balanceAmount, "INR"));
    i0.ɵɵadvance(17);
    i0.ɵɵrepeater(ctx_r0.visibleEntries(ledger_r4));
} }
function OfflinePaymentComponent_Conditional_7_ForEmpty_45_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 12);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1("No published ", ctx_r0.selectedKind(), " fee balance is available.");
} }
function OfflinePaymentComponent_Conditional_7_For_60_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 16);
    i0.ɵɵtext(1);
    i0.ɵɵpipe(2, "currency");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ledger_r5 = ctx.$implicit;
    i0.ɵɵproperty("value", ledger_r5._id);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate2(" ", ledger_r5.periodLabel, " \u00B7 balance ", i0.ɵɵpipeBind2(2, 3, ledger_r5.balanceAmount, "INR"), " ");
} }
function OfflinePaymentComponent_Conditional_7_Conditional_68_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 18);
    i0.ɵɵtext(1);
    i0.ɵɵpipe(2, "currency");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" Excess credit after this payment: ", i0.ɵɵpipeBind2(2, 1, ctx_r0.projectedExcess(), "INR"), " ");
} }
function OfflinePaymentComponent_Conditional_7_Conditional_103_Template(rf, ctx) { if (rf & 1) {
    const _r6 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "section", 31)(1, "div")(2, "small");
    i0.ɵɵtext(3, "Receipt generated");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "strong");
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "span");
    i0.ɵɵtext(7);
    i0.ɵɵpipe(8, "currency");
    i0.ɵɵpipe(9, "currency");
    i0.ɵɵpipe(10, "currency");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(11, "button", 35);
    i0.ɵɵlistener("click", function OfflinePaymentComponent_Conditional_7_Conditional_103_Template_button_click_11_listener() { const payment_r7 = i0.ɵɵrestoreView(_r6); const ctx_r0 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r0.downloadReceipt(payment_r7)); });
    i0.ɵɵtext(12, " Download receipt ");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const payment_r7 = ctx;
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(payment_r7.receiptNumber);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate4("Received ", i0.ɵɵpipeBind2(8, 5, payment_r7.amount, "INR"), " \u00B7 Applied ", i0.ɵɵpipeBind2(9, 8, payment_r7.appliedAmount || 0, "INR"), " \u00B7 Excess ", i0.ɵɵpipeBind2(10, 11, payment_r7.excessCreditAmount || 0, "INR"), " \u00B7 ", payment_r7.method);
} }
function OfflinePaymentComponent_Conditional_7_For_133_Template(rf, ctx) { if (rf & 1) {
    const _r8 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "tr")(1, "td")(2, "strong");
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(4, "td");
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd();
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
    i0.ɵɵpipe(15, "date");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(16, "td")(17, "button", 36);
    i0.ɵɵlistener("click", function OfflinePaymentComponent_Conditional_7_For_133_Template_button_click_17_listener() { const payment_r9 = i0.ɵɵrestoreView(_r8).$implicit; const ctx_r0 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r0.downloadReceipt(payment_r9)); });
    i0.ɵɵtext(18, " Receipt ");
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const payment_r9 = ctx.$implicit;
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(payment_r9.receiptNumber);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", payment_r9.paymentChannel === "offline" ? "Offline" : "Online \u00B7 Razorpay", " ");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(payment_r9.paymentReference || payment_r9.razorpayPaymentId || "\u2014");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(payment_r9.targetPeriodLabel);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind2(12, 6, payment_r9.amount, "INR"));
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind2(15, 9, payment_r9.paidAt, "medium"));
} }
function OfflinePaymentComponent_Conditional_7_ForEmpty_134_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "tr")(1, "td", 37);
    i0.ɵɵtext(2, "No completed payments found.");
    i0.ɵɵelementEnd()();
} }
function OfflinePaymentComponent_Conditional_7_Template(rf, ctx) { if (rf & 1) {
    const _r2 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "section", 6)(1, "div")(2, "small");
    i0.ɵɵtext(3, "Student");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "strong");
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "span");
    i0.ɵɵtext(7);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(8, "div")(9, "small");
    i0.ɵɵtext(10, "Course");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(11, "strong");
    i0.ɵɵtext(12);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(13, "span");
    i0.ɵɵtext(14);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(15, "div")(16, "small");
    i0.ɵɵtext(17, "Current academic period");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(18, "strong");
    i0.ɵɵtext(19);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(20, "span");
    i0.ɵɵtext(21, "Fee publication does not change this period");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(22, "div")(23, "small");
    i0.ɵɵtext(24, "Available excess credit");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(25, "strong");
    i0.ɵɵtext(26);
    i0.ɵɵpipe(27, "currency");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(28, "span");
    i0.ɵɵtext(29);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(30, "div", 7)(31, "section", 5)(32, "div", 8)(33, "div")(34, "h2");
    i0.ɵɵtext(35, "Published fee structure");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(36, "p");
    i0.ɵɵtext(37, "Only published fee periods can receive an offline payment.");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(38, "div", 9)(39, "button", 10);
    i0.ɵɵlistener("click", function OfflinePaymentComponent_Conditional_7_Template_button_click_39_listener() { i0.ɵɵrestoreView(_r2); const ctx_r0 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r0.selectKind("academic")); });
    i0.ɵɵtext(40, " Academic Fee ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(41, "button", 10);
    i0.ɵɵlistener("click", function OfflinePaymentComponent_Conditional_7_Template_button_click_41_listener() { i0.ɵɵrestoreView(_r2); const ctx_r0 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r0.selectKind("hostel")); });
    i0.ɵɵtext(42, " Hostel Fee ");
    i0.ɵɵelementEnd()();
    i0.ɵɵrepeaterCreate(43, OfflinePaymentComponent_Conditional_7_For_44_Template, 27, 7, "article", 11, _forTrack0, false, OfflinePaymentComponent_Conditional_7_ForEmpty_45_Template, 2, 1, "p", 12);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(46, "aside", 13)(47, "div", 8)(48, "div")(49, "h2");
    i0.ɵɵtext(50, "Receive and adjust");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(51, "p");
    i0.ɵɵtext(52, "The oldest period is adjusted first, followed by penalty and fee-head priority.");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(53, "label")(54, "span");
    i0.ɵɵtext(55, "Apply payment to *");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(56, "select", 14);
    i0.ɵɵlistener("ngModelChange", function OfflinePaymentComponent_Conditional_7_Template_select_ngModelChange_56_listener($event) { i0.ɵɵrestoreView(_r2); const ctx_r0 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r0.selectTarget($event)); });
    i0.ɵɵelementStart(57, "option", 15);
    i0.ɵɵtext(58);
    i0.ɵɵelementEnd();
    i0.ɵɵrepeaterCreate(59, OfflinePaymentComponent_Conditional_7_For_60_Template, 3, 6, "option", 16, _forTrack0);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(61, "label")(62, "span");
    i0.ɵɵtext(63, "Amount received *");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(64, "input", 17);
    i0.ɵɵtwoWayListener("ngModelChange", function OfflinePaymentComponent_Conditional_7_Template_input_ngModelChange_64_listener($event) { i0.ɵɵrestoreView(_r2); const ctx_r0 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r0.amount, $event) || (ctx_r0.amount = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(65, "small");
    i0.ɵɵtext(66);
    i0.ɵɵpipe(67, "currency");
    i0.ɵɵelementEnd()();
    i0.ɵɵconditionalCreate(68, OfflinePaymentComponent_Conditional_7_Conditional_68_Template, 3, 4, "p", 18);
    i0.ɵɵelementStart(69, "label")(70, "span");
    i0.ɵɵtext(71, "Payment mode *");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(72, "select", 14);
    i0.ɵɵtwoWayListener("ngModelChange", function OfflinePaymentComponent_Conditional_7_Template_select_ngModelChange_72_listener($event) { i0.ɵɵrestoreView(_r2); const ctx_r0 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r0.method, $event) || (ctx_r0.method = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementStart(73, "option", 19);
    i0.ɵɵtext(74, "Cash");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(75, "option", 20);
    i0.ɵɵtext(76, "UPI");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(77, "option", 21);
    i0.ɵɵtext(78, "Bank transfer");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(79, "option", 22);
    i0.ɵɵtext(80, "Cheque");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(81, "option", 23);
    i0.ɵɵtext(82, "Card at counter");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(83, "option", 24);
    i0.ɵɵtext(84, "Demand draft");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(85, "option", 25);
    i0.ɵɵtext(86, "Other");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(87, "label")(88, "span");
    i0.ɵɵtext(89, "Payment date *");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(90, "input", 26);
    i0.ɵɵtwoWayListener("ngModelChange", function OfflinePaymentComponent_Conditional_7_Template_input_ngModelChange_90_listener($event) { i0.ɵɵrestoreView(_r2); const ctx_r0 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r0.paymentDate, $event) || (ctx_r0.paymentDate = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(91, "label")(92, "span");
    i0.ɵɵtext(93);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(94, "input", 27);
    i0.ɵɵtwoWayListener("ngModelChange", function OfflinePaymentComponent_Conditional_7_Template_input_ngModelChange_94_listener($event) { i0.ɵɵrestoreView(_r2); const ctx_r0 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r0.referenceNumber, $event) || (ctx_r0.referenceNumber = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(95, "label")(96, "span");
    i0.ɵɵtext(97, "Internal remark");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(98, "textarea", 28);
    i0.ɵɵtwoWayListener("ngModelChange", function OfflinePaymentComponent_Conditional_7_Template_textarea_ngModelChange_98_listener($event) { i0.ɵɵrestoreView(_r2); const ctx_r0 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r0.internalRemark, $event) || (ctx_r0.internalRemark = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(99, "button", 29);
    i0.ɵɵlistener("click", function OfflinePaymentComponent_Conditional_7_Template_button_click_99_listener() { i0.ɵɵrestoreView(_r2); const ctx_r0 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r0.adjust()); });
    i0.ɵɵtext(100);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(101, "small", 30);
    i0.ɵɵtext(102, "Adjustment updates the student ledger immediately and cannot be submitted twice.");
    i0.ɵɵelementEnd()()();
    i0.ɵɵconditionalCreate(103, OfflinePaymentComponent_Conditional_7_Conditional_103_Template, 13, 14, "section", 31);
    i0.ɵɵelementStart(104, "section", 32)(105, "div", 33)(106, "div")(107, "h2");
    i0.ɵɵtext(108, " Recent receipts ");
    i0.ɵɵelementStart(109, "small");
    i0.ɵɵtext(110);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(111, "p");
    i0.ɵɵtext(112, "Online and offline payments recorded for this student.");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(113, "div", 34)(114, "table")(115, "thead")(116, "tr")(117, "th");
    i0.ɵɵtext(118, "Receipt");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(119, "th");
    i0.ɵɵtext(120, "Channel");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(121, "th");
    i0.ɵɵtext(122, "Reference");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(123, "th");
    i0.ɵɵtext(124, "Fee period");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(125, "th");
    i0.ɵɵtext(126, "Amount");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(127, "th");
    i0.ɵɵtext(128, "Date");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(129, "th");
    i0.ɵɵtext(130, "Action");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(131, "tbody");
    i0.ɵɵrepeaterCreate(132, OfflinePaymentComponent_Conditional_7_For_133_Template, 19, 12, "tr", null, _forTrack0, false, OfflinePaymentComponent_Conditional_7_ForEmpty_134_Template, 3, 0, "tr");
    i0.ɵɵelementEnd()()()();
} if (rf & 2) {
    let tmp_25_0;
    const item_r10 = ctx;
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(item_r10.studentName);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(item_r10.studentId);
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(item_r10.courseName || "Not available");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(item_r10.academicSession || "Session unavailable");
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(item_r10.feeFrequency === "semester" ? "Semester " + item_r10.currentSemester : "Year " + item_r10.currentAcademicYear);
    i0.ɵɵadvance(7);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind2(27, 27, ctx_r0.excessCreditBalance(), "INR"));
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1("Automatically adjusted against future published ", ctx_r0.selectedKind(), " fees");
    i0.ɵɵadvance(10);
    i0.ɵɵclassProp("is-active", ctx_r0.selectedKind() === "academic");
    i0.ɵɵadvance(2);
    i0.ɵɵclassProp("is-active", ctx_r0.selectedKind() === "hostel");
    i0.ɵɵadvance(2);
    i0.ɵɵrepeater(ctx_r0.kindLedgers());
    i0.ɵɵadvance(13);
    i0.ɵɵproperty("ngModel", ctx_r0.targetLedgerId() || "");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1("All published ", ctx_r0.selectedKind(), " fees");
    i0.ɵɵadvance();
    i0.ɵɵrepeater(ctx_r0.payableLedgers());
    i0.ɵɵadvance(5);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r0.amount);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1("Current dues: ", i0.ɵɵpipeBind2(67, 30, ctx_r0.maximum(), "INR"), ". Any additional amount becomes excess credit.");
    i0.ɵɵadvance(2);
    i0.ɵɵconditional(ctx_r0.projectedExcess() > 0 ? 68 : -1);
    i0.ɵɵadvance(4);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r0.method);
    i0.ɵɵadvance(18);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r0.paymentDate);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1("Reference number ", ctx_r0.method === "cash" ? "(optional)" : "*");
    i0.ɵɵadvance();
    i0.ɵɵtwoWayProperty("ngModel", ctx_r0.referenceNumber);
    i0.ɵɵadvance(4);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r0.internalRemark);
    i0.ɵɵadvance();
    i0.ɵɵproperty("disabled", ctx_r0.saving() || !ctx_r0.payableLedgers().length);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r0.saving() ? "Adjusting payment\u2026" : "Adjust payment", " ");
    i0.ɵɵadvance(3);
    i0.ɵɵconditional((tmp_25_0 = ctx_r0.receipt()) ? 103 : -1, tmp_25_0);
    i0.ɵɵadvance(7);
    i0.ɵɵtextInterpolate(ctx_r0.payments().length);
    i0.ɵɵadvance(22);
    i0.ɵɵrepeater(ctx_r0.payments());
} }
export class OfflinePaymentComponent {
    api = inject(ApiService);
    route = inject(ActivatedRoute);
    studentAdmissionId = this.route.snapshot.paramMap.get('admissionId') || '';
    student = signal(null, ...(ngDevMode ? [{ debugName: "student" }] : /* istanbul ignore next */ []));
    ledgers = signal([], ...(ngDevMode ? [{ debugName: "ledgers" }] : /* istanbul ignore next */ []));
    payments = signal([], ...(ngDevMode ? [{ debugName: "payments" }] : /* istanbul ignore next */ []));
    selectedKind = signal('academic', ...(ngDevMode ? [{ debugName: "selectedKind" }] : /* istanbul ignore next */ []));
    targetLedgerId = signal(null, ...(ngDevMode ? [{ debugName: "targetLedgerId" }] : /* istanbul ignore next */ []));
    loading = signal(true, ...(ngDevMode ? [{ debugName: "loading" }] : /* istanbul ignore next */ []));
    saving = signal(false, ...(ngDevMode ? [{ debugName: "saving" }] : /* istanbul ignore next */ []));
    error = signal('', ...(ngDevMode ? [{ debugName: "error" }] : /* istanbul ignore next */ []));
    message = signal('', ...(ngDevMode ? [{ debugName: "message" }] : /* istanbul ignore next */ []));
    receipt = signal(null, ...(ngDevMode ? [{ debugName: "receipt" }] : /* istanbul ignore next */ []));
    excessCreditBalance = signal(0, ...(ngDevMode ? [{ debugName: "excessCreditBalance" }] : /* istanbul ignore next */ []));
    kindLedgers = computed(() => this.ledgers().filter((ledger) => ledger.kind === this.selectedKind()), ...(ngDevMode ? [{ debugName: "kindLedgers" }] : /* istanbul ignore next */ []));
    payableLedgers = computed(() => this.kindLedgers().filter((ledger) => Number(ledger.balanceAmount || 0) > 0), ...(ngDevMode ? [{ debugName: "payableLedgers" }] : /* istanbul ignore next */ []));
    selectedLedger = computed(() => this.payableLedgers().find((ledger) => ledger._id === this.targetLedgerId()) ?? null, ...(ngDevMode ? [{ debugName: "selectedLedger" }] : /* istanbul ignore next */ []));
    maximum = computed(() => this.selectedLedger()
        ? Number(this.selectedLedger()?.balanceAmount || 0)
        : this.payableLedgers().reduce((total, ledger) => total + Number(ledger.balanceAmount || 0), 0), ...(ngDevMode ? [{ debugName: "maximum" }] : /* istanbul ignore next */ []));
    projectedExcess = computed(() => Math.max(0, Number(this.amount || 0) - this.maximum()), ...(ngDevMode ? [{ debugName: "projectedExcess" }] : /* istanbul ignore next */ []));
    amount = null;
    method = 'cash';
    referenceNumber = '';
    paymentDate = localDateValue(new Date());
    internalRemark = '';
    idempotencyKey = globalThis.crypto.randomUUID();
    constructor() {
        this.load();
    }
    load() {
        this.loading.set(true);
        this.error.set('');
        this.api.offlinePaymentWorkspace(this.studentAdmissionId).subscribe({
            next: ({ student, ledgers, payments, excessCreditBalance }) => {
                this.student.set(student);
                this.ledgers.set(ledgers);
                this.payments.set(payments);
                this.excessCreditBalance.set(Number(excessCreditBalance || 0));
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
    selectKind(kind) {
        this.selectedKind.set(kind);
        this.targetLedgerId.set(null);
        this.amount = null;
        this.receipt.set(null);
        this.error.set('');
    }
    selectTarget(value) {
        this.targetLedgerId.set(value || null);
        this.amount = this.maximum() || null;
        this.receipt.set(null);
        this.error.set('');
    }
    adjust() {
        if (this.saving())
            return;
        const amount = Number(this.amount || 0);
        if (amount <= 0) {
            this.error.set('Enter an amount greater than zero.');
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
            next: ({ item, duplicate, ledgers, excessCreditBalance }) => {
                this.ledgers.set(ledgers);
                this.payments.update((items) => [
                    item,
                    ...items.filter((value) => value._id !== item._id),
                ]);
                this.receipt.set(item);
                this.excessCreditBalance.set(Number(excessCreditBalance || 0));
                this.message.set(duplicate
                    ? 'This payment was already adjusted. The existing receipt is shown below.'
                    : 'Offline payment adjusted successfully and the receipt is now available to the student.');
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
    downloadReceipt(payment) {
        this.api
            .downloadAdminReceipt(payment._id)
            .subscribe((blob) => downloadBlob(blob, `${payment.receiptNumber || 'offline-fee-receipt'}.html`));
    }
    visibleEntries(ledger) {
        return ledger.entries.filter((entry) => Number(entry.amount || 0) > 0 || Number(entry.paidAmount || 0) > 0);
    }
    static ɵfac = function OfflinePaymentComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || OfflinePaymentComponent)(); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: OfflinePaymentComponent, selectors: [["erp-offline-payment"]], decls: 8, vars: 3, consts: [["eyebrow", "Accounts", "title", "Make Offline Payment", "description", "Record money received offline and adjust it against the student's published fee balance.", "variant", "minimal"], ["page-actions", ""], ["routerLink", "/admin/admissions", 1, "erp-button", "erp-button--secondary"], [1, "erp-notice", "erp-notice--success"], ["role", "alert", 1, "erp-notice", "erp-notice--error"], [1, "erp-card", "erp-card--padded"], [1, "erp-card", "erp-card--padded", "offline-student"], [1, "offline-layout"], [1, "erp-card__header"], [1, "offline-tabs"], ["type", "button", 3, "click"], [1, "offline-ledger"], [1, "erp-empty-state"], [1, "erp-card", "erp-card--padded", "offline-form"], [1, "erp-control", 3, "ngModelChange", "ngModel"], ["value", ""], [3, "value"], ["type", "number", "min", "1", 1, "erp-control", 3, "ngModelChange", "ngModel"], [1, "erp-notice", "erp-notice--info"], ["value", "cash"], ["value", "upi"], ["value", "bank_transfer"], ["value", "cheque"], ["value", "card"], ["value", "demand_draft"], ["value", "other"], ["type", "date", 1, "erp-control", 3, "ngModelChange", "ngModel"], ["placeholder", "Transaction, cheque or bank reference", 1, "erp-control", 3, "ngModelChange", "ngModel"], ["rows", "3", "maxlength", "1000", "placeholder", "Visible only to administrators and Accounts", 1, "erp-control", 3, "ngModelChange", "ngModel"], ["type", "button", 1, "erp-button", "erp-button--primary", 3, "click", "disabled"], [1, "offline-warning"], [1, "erp-card", "erp-card--padded", "offline-receipt"], [1, "erp-card", "erp-table-shell"], [1, "erp-table-toolbar"], [1, "erp-table-shell__scroll"], ["type", "button", 1, "erp-button", "erp-button--primary", 3, "click"], ["type", "button", 1, "erp-button", "erp-button--secondary", 3, "click"], ["colspan", "7", 1, "erp-empty-state"]], template: function OfflinePaymentComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "erp-admin-page", 0)(1, "div", 1)(2, "a", 2);
            i0.ɵɵtext(3, "Back to approved students");
            i0.ɵɵelementEnd()();
            i0.ɵɵconditionalCreate(4, OfflinePaymentComponent_Conditional_4_Template, 2, 1, "p", 3);
            i0.ɵɵconditionalCreate(5, OfflinePaymentComponent_Conditional_5_Template, 2, 1, "p", 4);
            i0.ɵɵconditionalCreate(6, OfflinePaymentComponent_Conditional_6_Template, 2, 0, "section", 5)(7, OfflinePaymentComponent_Conditional_7_Template, 135, 33);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            let tmp_2_0;
            i0.ɵɵadvance(4);
            i0.ɵɵconditional(ctx.message() ? 4 : -1);
            i0.ɵɵadvance();
            i0.ɵɵconditional(ctx.error() ? 5 : -1);
            i0.ɵɵadvance();
            i0.ɵɵconditional(ctx.loading() ? 6 : (tmp_2_0 = ctx.student()) ? 7 : -1, tmp_2_0);
        } }, dependencies: [AdminPageComponent, FormsModule, i1.NgSelectOption, i1.ɵNgSelectMultipleOption, i1.DefaultValueAccessor, i1.NumberValueAccessor, i1.SelectControlValueAccessor, i1.NgControlStatus, i1.MaxLengthValidator, i1.MinValidator, i1.NgModel, RouterLink, CurrencyPipe, DatePipe], styles: [".offline-student[_ngcontent-%COMP%], \n.offline-receipt[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 2rem;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 1rem;\n}\n\n.offline-student[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%], \n.offline-receipt[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 0.25rem;\n}\n\n.offline-student[_ngcontent-%COMP%]   small[_ngcontent-%COMP%], \n.offline-receipt[_ngcontent-%COMP%]   small[_ngcontent-%COMP%], \n.offline-ledger[_ngcontent-%COMP%]   small[_ngcontent-%COMP%], \n.offline-form[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  color: var(--erp-text-muted);\n}\n\n.offline-layout[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: minmax(0, 1.6fr) minmax(20rem, 0.8fr);\n  gap: 1rem;\n  align-items: start;\n  margin-bottom: 1rem;\n}\n\n.offline-tabs[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.5rem;\n  margin-bottom: 1rem;\n}\n\n.offline-tabs[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  padding: 0.65rem 1rem;\n  border: 1px solid var(--erp-border-default);\n  border-radius: var(--erp-radius-control);\n  background: var(--erp-surface-overlay);\n  cursor: pointer;\n}\n\n.offline-tabs[_ngcontent-%COMP%]   button.is-active[_ngcontent-%COMP%] {\n  color: white;\n  border-color: var(--erp-blue-700);\n  background: var(--erp-blue-700);\n}\n\n.offline-ledger[_ngcontent-%COMP%] {\n  margin-top: 1rem;\n  overflow: hidden;\n  border: 1px solid var(--erp-border-default);\n  border-radius: var(--erp-radius-card);\n}\n\n.offline-ledger[_ngcontent-%COMP%]   header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  gap: 1rem;\n  padding: 1rem;\n  background: var(--erp-surface-detail-soft);\n}\n\n.offline-ledger[_ngcontent-%COMP%]   header[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 0.2rem;\n}\n\n.offline-form[_ngcontent-%COMP%] {\n  position: sticky;\n  top: 1rem;\n  display: grid;\n  gap: 1rem;\n}\n\n.offline-form[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 0.4rem;\n}\n\n.offline-warning[_ngcontent-%COMP%] {\n  line-height: 1.5;\n}\n\n@media (max-width: 900px) {\n  .offline-layout[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n\n  .offline-form[_ngcontent-%COMP%] {\n    position: static;\n  }\n\n  .offline-student[_ngcontent-%COMP%], \n   .offline-receipt[_ngcontent-%COMP%] {\n    align-items: stretch;\n    flex-direction: column;\n  }\n}"], changeDetection: 0 });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(OfflinePaymentComponent, [{
        type: Component,
        args: [{ selector: 'erp-offline-payment', imports: [AdminPageComponent, CurrencyPipe, DatePipe, FormsModule, RouterLink], changeDetection: ChangeDetectionStrategy.OnPush, template: "<erp-admin-page\n  eyebrow=\"Accounts\"\n  title=\"Make Offline Payment\"\n  description=\"Record money received offline and adjust it against the student's published fee balance.\"\n  variant=\"minimal\"\n>\n  <div page-actions>\n    <a class=\"erp-button erp-button--secondary\" routerLink=\"/admin/admissions\"\n      >Back to approved students</a\n    >\n  </div>\n\n  @if (message()) {\n    <p class=\"erp-notice erp-notice--success\">{{ message() }}</p>\n  }\n  @if (error()) {\n    <p class=\"erp-notice erp-notice--error\" role=\"alert\">{{ error() }}</p>\n  }\n\n  @if (loading()) {\n    <section class=\"erp-card erp-card--padded\">Loading the student fee account\u2026</section>\n  } @else if (student(); as item) {\n    <section class=\"erp-card erp-card--padded offline-student\">\n      <div>\n        <small>Student</small><strong>{{ item.studentName }}</strong\n        ><span>{{ item.studentId }}</span>\n      </div>\n      <div>\n        <small>Course</small><strong>{{ item.courseName || 'Not available' }}</strong\n        ><span>{{ item.academicSession || 'Session unavailable' }}</span>\n      </div>\n      <div>\n        <small>Current academic period</small\n        ><strong>{{\n          item.feeFrequency === 'semester'\n            ? 'Semester ' + item.currentSemester\n            : 'Year ' + item.currentAcademicYear\n        }}</strong\n        ><span>Fee publication does not change this period</span>\n      </div>\n      <div>\n        <small>Available excess credit</small\n        ><strong>{{ excessCreditBalance() | currency: 'INR' }}</strong\n        ><span>Automatically adjusted against future published {{ selectedKind() }} fees</span>\n      </div>\n    </section>\n\n    <div class=\"offline-layout\">\n      <section class=\"erp-card erp-card--padded\">\n        <div class=\"erp-card__header\">\n          <div>\n            <h2>Published fee structure</h2>\n            <p>Only published fee periods can receive an offline payment.</p>\n          </div>\n        </div>\n        <div class=\"offline-tabs\">\n          <button\n            type=\"button\"\n            [class.is-active]=\"selectedKind() === 'academic'\"\n            (click)=\"selectKind('academic')\"\n          >\n            Academic Fee\n          </button>\n          <button\n            type=\"button\"\n            [class.is-active]=\"selectedKind() === 'hostel'\"\n            (click)=\"selectKind('hostel')\"\n          >\n            Hostel Fee\n          </button>\n        </div>\n        @for (ledger of kindLedgers(); track ledger._id) {\n          <article class=\"offline-ledger\">\n            <header>\n              <div>\n                <strong>{{ ledger.name }} \u00B7 {{ ledger.periodLabel }}</strong\n                ><small>{{ ledger.academicSession }}</small>\n              </div>\n              <b>{{ ledger.balanceAmount | currency: 'INR' }}</b>\n            </header>\n            <div class=\"erp-table-shell__scroll\">\n              <table>\n                <thead>\n                  <tr>\n                    <th>Fee head</th>\n                    <th>Charge</th>\n                    <th>Discount</th>\n                    <th>Received</th>\n                    <th>Left amount</th>\n                  </tr>\n                </thead>\n                <tbody>\n                  @for (\n                    entry of visibleEntries(ledger);\n                    track entry.feeHeadId + entry.periodLabel\n                  ) {\n                    <tr>\n                      <td>\n                        <strong>{{ entry.feeHeadName }}</strong\n                        ><small>{{\n                          entry.isPenalty ? 'Penalty \u00B7 paid first' : 'Priority ' + entry.priority\n                        }}</small>\n                      </td>\n                      <td>{{ entry.amount | currency: 'INR' }}</td>\n                      <td>{{ entry.discountAmount || 0 | currency: 'INR' }}</td>\n                      <td>{{ entry.paidAmount | currency: 'INR' }}</td>\n                      <td>\n                        <strong>{{ entry.balanceAmount | currency: 'INR' }}</strong>\n                      </td>\n                    </tr>\n                  }\n                </tbody>\n              </table>\n            </div>\n          </article>\n        } @empty {\n          <p class=\"erp-empty-state\">No published {{ selectedKind() }} fee balance is available.</p>\n        }\n      </section>\n\n      <aside class=\"erp-card erp-card--padded offline-form\">\n        <div class=\"erp-card__header\">\n          <div>\n            <h2>Receive and adjust</h2>\n            <p>The oldest period is adjusted first, followed by penalty and fee-head priority.</p>\n          </div>\n        </div>\n        <label\n          ><span>Apply payment to *</span\n          ><select\n            class=\"erp-control\"\n            [ngModel]=\"targetLedgerId() || ''\"\n            (ngModelChange)=\"selectTarget($event)\"\n          >\n            <option value=\"\">All published {{ selectedKind() }} fees</option>\n            @for (ledger of payableLedgers(); track ledger._id) {\n              <option [value]=\"ledger._id\">\n                {{ ledger.periodLabel }} \u00B7 balance {{ ledger.balanceAmount | currency: 'INR' }}\n              </option>\n            }\n          </select></label\n        >\n        <label\n          ><span>Amount received *</span\n          ><input class=\"erp-control\" type=\"number\" min=\"1\" [(ngModel)]=\"amount\" /><small\n            >Current dues: {{ maximum() | currency: 'INR' }}. Any additional amount becomes excess\n            credit.</small\n          ></label\n        >\n        @if (projectedExcess() > 0) {\n          <p class=\"erp-notice erp-notice--info\">\n            Excess credit after this payment: {{ projectedExcess() | currency: 'INR' }}\n          </p>\n        }\n        <label\n          ><span>Payment mode *</span\n          ><select class=\"erp-control\" [(ngModel)]=\"method\">\n            <option value=\"cash\">Cash</option>\n            <option value=\"upi\">UPI</option>\n            <option value=\"bank_transfer\">Bank transfer</option>\n            <option value=\"cheque\">Cheque</option>\n            <option value=\"card\">Card at counter</option>\n            <option value=\"demand_draft\">Demand draft</option>\n            <option value=\"other\">Other</option>\n          </select></label\n        >\n        <label\n          ><span>Payment date *</span\n          ><input class=\"erp-control\" type=\"date\" [(ngModel)]=\"paymentDate\"\n        /></label>\n        <label\n          ><span>Reference number {{ method === 'cash' ? '(optional)' : '*' }}</span\n          ><input\n            class=\"erp-control\"\n            [(ngModel)]=\"referenceNumber\"\n            placeholder=\"Transaction, cheque or bank reference\"\n        /></label>\n        <label\n          ><span>Internal remark</span\n          ><textarea\n            class=\"erp-control\"\n            rows=\"3\"\n            maxlength=\"1000\"\n            [(ngModel)]=\"internalRemark\"\n            placeholder=\"Visible only to administrators and Accounts\"\n          ></textarea>\n        </label>\n        <button\n          class=\"erp-button erp-button--primary\"\n          type=\"button\"\n          [disabled]=\"saving() || !payableLedgers().length\"\n          (click)=\"adjust()\"\n        >\n          {{ saving() ? 'Adjusting payment\u2026' : 'Adjust payment' }}\n        </button>\n        <small class=\"offline-warning\"\n          >Adjustment updates the student ledger immediately and cannot be submitted twice.</small\n        >\n      </aside>\n    </div>\n\n    @if (receipt(); as payment) {\n      <section class=\"erp-card erp-card--padded offline-receipt\">\n        <div>\n          <small>Receipt generated</small><strong>{{ payment.receiptNumber }}</strong\n          ><span\n            >Received {{ payment.amount | currency: 'INR' }} \u00B7 Applied\n            {{ payment.appliedAmount || 0 | currency: 'INR' }} \u00B7 Excess\n            {{ payment.excessCreditAmount || 0 | currency: 'INR' }} \u00B7 {{ payment.method }}</span\n          >\n        </div>\n        <button\n          class=\"erp-button erp-button--primary\"\n          type=\"button\"\n          (click)=\"downloadReceipt(payment)\"\n        >\n          Download receipt\n        </button>\n      </section>\n    }\n\n    <section class=\"erp-card erp-table-shell\">\n      <div class=\"erp-table-toolbar\">\n        <div>\n          <h2>\n            Recent receipts <small>{{ payments().length }}</small>\n          </h2>\n          <p>Online and offline payments recorded for this student.</p>\n        </div>\n      </div>\n      <div class=\"erp-table-shell__scroll\">\n        <table>\n          <thead>\n            <tr>\n              <th>Receipt</th>\n              <th>Channel</th>\n              <th>Reference</th>\n              <th>Fee period</th>\n              <th>Amount</th>\n              <th>Date</th>\n              <th>Action</th>\n            </tr>\n          </thead>\n          <tbody>\n            @for (payment of payments(); track payment._id) {\n              <tr>\n                <td>\n                  <strong>{{ payment.receiptNumber }}</strong>\n                </td>\n                <td>\n                  {{ payment.paymentChannel === 'offline' ? 'Offline' : 'Online \u00B7 Razorpay' }}\n                </td>\n                <td>{{ payment.paymentReference || payment.razorpayPaymentId || '\u2014' }}</td>\n                <td>{{ payment.targetPeriodLabel }}</td>\n                <td>{{ payment.amount | currency: 'INR' }}</td>\n                <td>{{ payment.paidAt | date: 'medium' }}</td>\n                <td>\n                  <button\n                    class=\"erp-button erp-button--secondary\"\n                    type=\"button\"\n                    (click)=\"downloadReceipt(payment)\"\n                  >\n                    Receipt\n                  </button>\n                </td>\n              </tr>\n            } @empty {\n              <tr>\n                <td colspan=\"7\" class=\"erp-empty-state\">No completed payments found.</td>\n              </tr>\n            }\n          </tbody>\n        </table>\n      </div>\n    </section>\n  }\n</erp-admin-page>\n", styles: [".offline-student,\n.offline-receipt {\n  display: flex;\n  gap: 2rem;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 1rem;\n}\n\n.offline-student > div,\n.offline-receipt > div {\n  display: grid;\n  gap: 0.25rem;\n}\n\n.offline-student small,\n.offline-receipt small,\n.offline-ledger small,\n.offline-form small {\n  color: var(--erp-text-muted);\n}\n\n.offline-layout {\n  display: grid;\n  grid-template-columns: minmax(0, 1.6fr) minmax(20rem, 0.8fr);\n  gap: 1rem;\n  align-items: start;\n  margin-bottom: 1rem;\n}\n\n.offline-tabs {\n  display: flex;\n  gap: 0.5rem;\n  margin-bottom: 1rem;\n}\n\n.offline-tabs button {\n  padding: 0.65rem 1rem;\n  border: 1px solid var(--erp-border-default);\n  border-radius: var(--erp-radius-control);\n  background: var(--erp-surface-overlay);\n  cursor: pointer;\n}\n\n.offline-tabs button.is-active {\n  color: white;\n  border-color: var(--erp-blue-700);\n  background: var(--erp-blue-700);\n}\n\n.offline-ledger {\n  margin-top: 1rem;\n  overflow: hidden;\n  border: 1px solid var(--erp-border-default);\n  border-radius: var(--erp-radius-card);\n}\n\n.offline-ledger header {\n  display: flex;\n  justify-content: space-between;\n  gap: 1rem;\n  padding: 1rem;\n  background: var(--erp-surface-detail-soft);\n}\n\n.offline-ledger header div {\n  display: grid;\n  gap: 0.2rem;\n}\n\n.offline-form {\n  position: sticky;\n  top: 1rem;\n  display: grid;\n  gap: 1rem;\n}\n\n.offline-form label {\n  display: grid;\n  gap: 0.4rem;\n}\n\n.offline-warning {\n  line-height: 1.5;\n}\n\n@media (max-width: 900px) {\n  .offline-layout {\n    grid-template-columns: 1fr;\n  }\n\n  .offline-form {\n    position: static;\n  }\n\n  .offline-student,\n  .offline-receipt {\n    align-items: stretch;\n    flex-direction: column;\n  }\n}\n"] }]
    }], () => [], null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(OfflinePaymentComponent, { className: "OfflinePaymentComponent", filePath: "frontend/src/app/features/admin/offline-payment/offline-payment.component.ts", lineNumber: 19 }); })();
function localDateValue(date) {
    const shifted = new Date(date.getTime() - date.getTimezoneOffset() * 60_000);
    return shifted.toISOString().slice(0, 10);
}
function downloadBlob(blob, name) {
    const url = URL.createObjectURL(blob);
    const anchor = document.createElement('a');
    anchor.href = url;
    anchor.download = name;
    anchor.click();
    URL.revokeObjectURL(url);
}
