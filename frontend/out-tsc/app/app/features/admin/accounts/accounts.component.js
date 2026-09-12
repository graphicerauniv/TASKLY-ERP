import { CurrencyPipe, DatePipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, DestroyRef, computed, inject, signal, } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { combineLatest } from 'rxjs';
import { LucideSearch, LucideRefreshCw, LucideChevronLeft, LucideChevronRight, } from '@lucide/angular';
import { ApiService } from '../../../core/api.service';
import { ERP_PAGINATION } from '../../../core/config/data-view.constants';
import { AdminIllustrationComponent } from '../../../shared/ui/admin-illustration/admin-illustration.component';
import { AdminPageComponent } from '../../../shared/ui/admin-page/admin-page.component';
import { RecordDrawerComponent, } from '../../../shared/ui/record-drawer/record-drawer.component';
import { CompactActionMenuComponent, } from '../../../shared/ui/compact-action-menu/compact-action-menu.component';
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
const _c0 = a0 => ["/admin/admissions/applications", a0];
const _forTrack0 = ($index, $item) => $item._id;
function AccountsComponent_Conditional_5_Template(rf, ctx) { if (rf & 1) {
    const _r1 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "section", 4)(1, "p");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "button", 7);
    i0.ɵɵlistener("click", function AccountsComponent_Conditional_5_Template_button_click_3_listener() { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.load()); });
    i0.ɵɵtext(4, "Retry");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r1.error());
} }
function AccountsComponent_Conditional_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "section", 8)(1, "article", 9)(2, "div")(3, "small");
    i0.ɵɵtext(4, "Total collected");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "strong");
    i0.ɵɵtext(6);
    i0.ɵɵpipe(7, "currency");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(8, "article", 9)(9, "div")(10, "small");
    i0.ɵɵtext(11, "Available credit");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(12, "strong");
    i0.ɵɵtext(13);
    i0.ɵɵpipe(14, "currency");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(15, "article", 9)(16, "div")(17, "small");
    i0.ɵɵtext(18, "Successful payments");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(19, "strong");
    i0.ɵɵtext(20);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(21, "article", 9)(22, "div")(23, "small");
    i0.ɵɵtext(24, "Pending orders");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(25, "strong");
    i0.ɵɵtext(26);
    i0.ɵɵelementEnd()()()();
    i0.ɵɵelementStart(27, "section", 10)(28, "header", 11)(29, "div")(30, "h2");
    i0.ɵɵtext(31, "Collection workspaces");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(32, "p");
    i0.ɵɵtext(33, "Each directory has its own filters, pagination and record details.");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(34, "nav", 12)(35, "a", 13);
    i0.ɵɵelement(36, "erp-admin-illustration", 14);
    i0.ɵɵelementStart(37, "span")(38, "strong");
    i0.ɵɵtext(39, "Student payments");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(40, "small");
    i0.ɵɵtext(41, "Online, offline and credit-adjusted transactions");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(42, "a", 15);
    i0.ɵɵelement(43, "erp-admin-illustration", 16);
    i0.ɵɵelementStart(44, "span")(45, "strong");
    i0.ɵɵtext(46, "Excess credits");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(47, "small");
    i0.ɵɵtext(48, "Available, consumed and refunded balances");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(49, "a", 17);
    i0.ɵɵelement(50, "erp-admin-illustration", 18);
    i0.ɵɵelementStart(51, "span")(52, "strong");
    i0.ɵɵtext(53, "Discount audit");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(54, "small");
    i0.ɵɵtext(55, "One-time concessions and internal remarks");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(56, "a", 19);
    i0.ɵɵelement(57, "erp-admin-illustration", 20);
    i0.ɵɵelementStart(58, "span")(59, "strong");
    i0.ɵɵtext(60, "Finance operations");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(61, "small");
    i0.ɵɵtext(62, "Fee setup, imports, generation and publication");
    i0.ɵɵelementEnd()()()()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵattribute("aria-busy", ctx_r1.loading());
    i0.ɵɵadvance(6);
    i0.ɵɵtextInterpolate(ctx_r1.loading() ? "\u2026" : i0.ɵɵpipeBind2(7, 5, ctx_r1.summary().collectedAmount, "INR"));
    i0.ɵɵadvance(7);
    i0.ɵɵtextInterpolate(ctx_r1.loading() ? "\u2026" : i0.ɵɵpipeBind2(14, 8, ctx_r1.summary().availableCredit, "INR"));
    i0.ɵɵadvance(7);
    i0.ɵɵtextInterpolate(ctx_r1.loading() ? "\u2026" : ctx_r1.summary().successfulPayments);
    i0.ɵɵadvance(6);
    i0.ɵɵtextInterpolate(ctx_r1.loading() ? "\u2026" : ctx_r1.summary().pendingPayments);
} }
function AccountsComponent_Conditional_7_For_10_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 28);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const value_r4 = ctx.$implicit;
    i0.ɵɵproperty("value", value_r4);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(value_r4 === "created" ? "Pending" : value_r4);
} }
function AccountsComponent_Conditional_7_Conditional_11_Template(rf, ctx) { if (rf & 1) {
    const _r5 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "select", 45);
    i0.ɵɵtwoWayListener("ngModelChange", function AccountsComponent_Conditional_7_Conditional_11_Template_select_ngModelChange_0_listener($event) { i0.ɵɵrestoreView(_r5); const ctx_r1 = i0.ɵɵnextContext(2); i0.ɵɵtwoWayBindingSet(ctx_r1.channel, $event) || (ctx_r1.channel = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementStart(1, "option", 27);
    i0.ɵɵtext(2, "All channels");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "option", 46);
    i0.ɵɵtext(4, "Online");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "option", 47);
    i0.ɵɵtext(6, "Offline");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "option", 48);
    i0.ɵɵtext(8, "Excess credit");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r1.channel);
} }
function AccountsComponent_Conditional_7_Conditional_14_Template(rf, ctx) { if (rf & 1) {
    const _r6 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 7);
    i0.ɵɵlistener("click", function AccountsComponent_Conditional_7_Conditional_14_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r6); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.clearFilters()); });
    i0.ɵɵtext(1, " Clear ");
    i0.ɵɵelementEnd();
} }
function AccountsComponent_Conditional_7_Case_21_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "th", 34);
    i0.ɵɵtext(1, "Receipt");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(2, "th", 34);
    i0.ɵɵtext(3, "Student");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "th", 34);
    i0.ɵɵtext(5, "Channel");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "th", 34);
    i0.ɵɵtext(7, "Amount");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "th", 34);
    i0.ɵɵtext(9, "Date");
    i0.ɵɵelementEnd();
} }
function AccountsComponent_Conditional_7_Case_22_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "th", 34);
    i0.ɵɵtext(1, "Student");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(2, "th", 34);
    i0.ɵɵtext(3, "Source receipt");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "th", 34);
    i0.ɵɵtext(5, "Fee type");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "th", 34);
    i0.ɵɵtext(7, "Original credit");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "th", 34);
    i0.ɵɵtext(9, "Remaining");
    i0.ɵɵelementEnd();
} }
function AccountsComponent_Conditional_7_Case_23_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "th", 34);
    i0.ɵɵtext(1, "Student");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(2, "th", 34);
    i0.ɵɵtext(3, "Discount");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "th", 34);
    i0.ɵɵtext(5, "Value");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "th", 34);
    i0.ɵɵtext(7, "Fee period");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "th", 34);
    i0.ɵɵtext(9, "Created");
    i0.ɵɵelementEnd();
} }
function AccountsComponent_Conditional_7_Conditional_29_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "tr")(1, "td", 49);
    i0.ɵɵelement(2, "span", 50);
    i0.ɵɵelementStart(3, "p", 51);
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate1("Loading ", ctx_r1.title(), "\u2026");
} }
function AccountsComponent_Conditional_7_Conditional_30_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "tr")(1, "td", 49);
    i0.ɵɵelement(2, "erp-admin-illustration", 52);
    i0.ɵɵelementStart(3, "h3");
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "p");
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("kind", ctx_r1.search || ctx_r1.status || ctx_r1.channel ? "noResults" : "feeWallet");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", ctx_r1.search || ctx_r1.status || ctx_r1.channel ? "No matching records" : "No records yet", " ");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", ctx_r1.search || ctx_r1.status || ctx_r1.channel ? "Change or clear your filters to try again." : "New records will appear here when finance activity is recorded.", " ");
} }
function AccountsComponent_Conditional_7_Conditional_31_Case_0_For_1_Template(rf, ctx) { if (rf & 1) {
    const _r7 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "tr")(1, "td")(2, "strong");
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(4, "td")(5, "strong");
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "small");
    i0.ɵɵtext(8);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(9, "td");
    i0.ɵɵtext(10);
    i0.ɵɵelementStart(11, "small");
    i0.ɵɵtext(12);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(13, "td", 53);
    i0.ɵɵtext(14);
    i0.ɵɵpipe(15, "currency");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(16, "td");
    i0.ɵɵtext(17);
    i0.ɵɵpipe(18, "date");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(19, "td")(20, "span", 54);
    i0.ɵɵtext(21);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(22, "td", 55)(23, "erp-compact-action-menu", 56);
    i0.ɵɵlistener("selected", function AccountsComponent_Conditional_7_Conditional_31_Case_0_For_1_Template_erp_compact_action_menu_selected_23_listener() { const item_r8 = i0.ɵɵrestoreView(_r7).$implicit; const ctx_r1 = i0.ɵɵnextContext(4); return i0.ɵɵresetView(ctx_r1.open(item_r8)); });
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const item_r8 = ctx.$implicit;
    const ctx_r1 = i0.ɵɵnextContext(4);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(item_r8.receiptNumber || "Not issued");
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(item_r8.studentName);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(item_r8.studentId);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", item_r8.paymentChannel || "online");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(item_r8.paymentReference || item_r8.razorpayPaymentId || item_r8.razorpayOrderId);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind2(15, 11, item_r8.amount, "INR"));
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind2(18, 14, item_r8.paidAt || item_r8.createdAt, "mediumDate"));
    i0.ɵɵadvance(3);
    i0.ɵɵclassProp("erp-status--paid", item_r8.status === "paid");
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(item_r8.status === "created" ? "Pending" : item_r8.status);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("items", ctx_r1.rowActions);
} }
function AccountsComponent_Conditional_7_Conditional_31_Case_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵrepeaterCreate(0, AccountsComponent_Conditional_7_Conditional_31_Case_0_For_1_Template, 24, 17, "tr", null, _forTrack0);
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵrepeater(ctx_r1.payments());
} }
function AccountsComponent_Conditional_7_Conditional_31_Case_1_For_1_Template(rf, ctx) { if (rf & 1) {
    const _r9 = i0.ɵɵgetCurrentView();
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
    i0.ɵɵelementStart(10, "td", 53);
    i0.ɵɵtext(11);
    i0.ɵɵpipe(12, "currency");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(13, "td", 53)(14, "strong");
    i0.ɵɵtext(15);
    i0.ɵɵpipe(16, "currency");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(17, "td")(18, "span", 54);
    i0.ɵɵtext(19);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(20, "td", 55)(21, "erp-compact-action-menu", 56);
    i0.ɵɵlistener("selected", function AccountsComponent_Conditional_7_Conditional_31_Case_1_For_1_Template_erp_compact_action_menu_selected_21_listener() { const item_r10 = i0.ɵɵrestoreView(_r9).$implicit; const ctx_r1 = i0.ɵɵnextContext(4); return i0.ɵɵresetView(ctx_r1.open(item_r10)); });
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const item_r10 = ctx.$implicit;
    const ctx_r1 = i0.ɵɵnextContext(4);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(item_r10.studentName);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(item_r10.studentId);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(item_r10.sourceReceiptNumber || "\u2014");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(item_r10.kind === "academic" ? "Academic" : "Hostel");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind2(12, 8, item_r10.originalAmount, "INR"));
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind2(16, 11, item_r10.remainingAmount, "INR"));
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(item_r10.status);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("items", ctx_r1.rowActions);
} }
function AccountsComponent_Conditional_7_Conditional_31_Case_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵrepeaterCreate(0, AccountsComponent_Conditional_7_Conditional_31_Case_1_For_1_Template, 22, 14, "tr", null, _forTrack0);
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵrepeater(ctx_r1.credits());
} }
function AccountsComponent_Conditional_7_Conditional_31_Case_2_For_1_Template(rf, ctx) { if (rf & 1) {
    const _r11 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "tr")(1, "td")(2, "strong");
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "small");
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(6, "td");
    i0.ɵɵtext(7);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "td", 53);
    i0.ɵɵtext(9);
    i0.ɵɵpipe(10, "currency");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(11, "td");
    i0.ɵɵtext(12);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(13, "td");
    i0.ɵɵtext(14);
    i0.ɵɵpipe(15, "date");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(16, "td")(17, "span", 54);
    i0.ɵɵtext(18);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(19, "td", 55)(20, "erp-compact-action-menu", 56);
    i0.ɵɵlistener("selected", function AccountsComponent_Conditional_7_Conditional_31_Case_2_For_1_Template_erp_compact_action_menu_selected_20_listener() { const item_r12 = i0.ɵɵrestoreView(_r11).$implicit; const ctx_r1 = i0.ɵɵnextContext(4); return i0.ɵɵresetView(ctx_r1.open(item_r12)); });
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const item_r12 = ctx.$implicit;
    const ctx_r1 = i0.ɵɵnextContext(4);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(item_r12.studentName);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(item_r12.studentId);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(item_r12.name);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", item_r12.type === "percentage" ? item_r12.value + "%" : i0.ɵɵpipeBind2(10, 8, item_r12.value, "INR"), " ");
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(item_r12.targetPeriodLabel);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind2(15, 11, item_r12.createdAt, "mediumDate"));
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(item_r12.status);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("items", ctx_r1.rowActions);
} }
function AccountsComponent_Conditional_7_Conditional_31_Case_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵrepeaterCreate(0, AccountsComponent_Conditional_7_Conditional_31_Case_2_For_1_Template, 21, 14, "tr", null, _forTrack0);
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵrepeater(ctx_r1.discounts());
} }
function AccountsComponent_Conditional_7_Conditional_31_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵconditionalCreate(0, AccountsComponent_Conditional_7_Conditional_31_Case_0_Template, 2, 0)(1, AccountsComponent_Conditional_7_Conditional_31_Case_1_Template, 2, 0)(2, AccountsComponent_Conditional_7_Conditional_31_Case_2_Template, 2, 0);
} if (rf & 2) {
    let tmp_2_0;
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵconditional((tmp_2_0 = ctx_r1.section()) === "payments" ? 0 : tmp_2_0 === "credits" ? 1 : tmp_2_0 === "discounts" ? 2 : -1);
} }
function AccountsComponent_Conditional_7_For_41_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 40);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const size_r13 = ctx.$implicit;
    i0.ɵɵproperty("ngValue", size_r13);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(size_r13);
} }
function AccountsComponent_Conditional_7_Template(rf, ctx) { if (rf & 1) {
    const _r3 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "section", 5)(1, "form", 21);
    i0.ɵɵlistener("ngSubmit", function AccountsComponent_Conditional_7_Template_form_ngSubmit_1_listener() { i0.ɵɵrestoreView(_r3); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.navigate()); });
    i0.ɵɵelementStart(2, "label", 22);
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(3, "svg", 23);
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(4, "input", 24);
    i0.ɵɵtwoWayListener("ngModelChange", function AccountsComponent_Conditional_7_Template_input_ngModelChange_4_listener($event) { i0.ɵɵrestoreView(_r3); const ctx_r1 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r1.search, $event) || (ctx_r1.search = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(5, "div", 25)(6, "select", 26);
    i0.ɵɵtwoWayListener("ngModelChange", function AccountsComponent_Conditional_7_Template_select_ngModelChange_6_listener($event) { i0.ɵɵrestoreView(_r3); const ctx_r1 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r1.status, $event) || (ctx_r1.status = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementStart(7, "option", 27);
    i0.ɵɵtext(8, "All statuses");
    i0.ɵɵelementEnd();
    i0.ɵɵrepeaterCreate(9, AccountsComponent_Conditional_7_For_10_Template, 2, 2, "option", 28, i0.ɵɵrepeaterTrackByIdentity);
    i0.ɵɵelementEnd();
    i0.ɵɵconditionalCreate(11, AccountsComponent_Conditional_7_Conditional_11_Template, 9, 1, "select", 29);
    i0.ɵɵelementStart(12, "button", 30);
    i0.ɵɵtext(13, " Apply filters ");
    i0.ɵɵelementEnd();
    i0.ɵɵconditionalCreate(14, AccountsComponent_Conditional_7_Conditional_14_Template, 2, 0, "button", 31);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(15, "div", 32)(16, "table")(17, "caption", 33);
    i0.ɵɵtext(18);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(19, "thead")(20, "tr");
    i0.ɵɵconditionalCreate(21, AccountsComponent_Conditional_7_Case_21_Template, 10, 0)(22, AccountsComponent_Conditional_7_Case_22_Template, 10, 0)(23, AccountsComponent_Conditional_7_Case_23_Template, 10, 0);
    i0.ɵɵelementStart(24, "th", 34);
    i0.ɵɵtext(25, "Status");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(26, "th", 35);
    i0.ɵɵtext(27, "Actions");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(28, "tbody");
    i0.ɵɵconditionalCreate(29, AccountsComponent_Conditional_7_Conditional_29_Template, 5, 1, "tr")(30, AccountsComponent_Conditional_7_Conditional_30_Template, 7, 3, "tr")(31, AccountsComponent_Conditional_7_Conditional_31_Template, 3, 1);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(32, "footer", 36)(33, "span", 37);
    i0.ɵɵtext(34);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(35, "div", 25)(36, "label", 38)(37, "span");
    i0.ɵɵtext(38, "Rows");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(39, "select", 39);
    i0.ɵɵtwoWayListener("ngModelChange", function AccountsComponent_Conditional_7_Template_select_ngModelChange_39_listener($event) { i0.ɵɵrestoreView(_r3); const ctx_r1 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r1.pageSize, $event) || (ctx_r1.pageSize = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵlistener("ngModelChange", function AccountsComponent_Conditional_7_Template_select_ngModelChange_39_listener() { i0.ɵɵrestoreView(_r3); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.navigate()); });
    i0.ɵɵrepeaterCreate(40, AccountsComponent_Conditional_7_For_41_Template, 2, 2, "option", 40, i0.ɵɵrepeaterTrackByIdentity);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(42, "button", 41);
    i0.ɵɵlistener("click", function AccountsComponent_Conditional_7_Template_button_click_42_listener() { i0.ɵɵrestoreView(_r3); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.navigate(ctx_r1.pagination().page - 1)); });
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(43, "svg", 42);
    i0.ɵɵelementEnd();
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(44, "span");
    i0.ɵɵtext(45);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(46, "button", 43);
    i0.ɵɵlistener("click", function AccountsComponent_Conditional_7_Template_button_click_46_listener() { i0.ɵɵrestoreView(_r3); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.navigate(ctx_r1.pagination().page + 1)); });
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(47, "svg", 44);
    i0.ɵɵelementEnd()()()();
} if (rf & 2) {
    let tmp_11_0;
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(4);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r1.search);
    i0.ɵɵattribute("aria-label", "Search " + ctx_r1.title());
    i0.ɵɵadvance(2);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r1.status);
    i0.ɵɵadvance(3);
    i0.ɵɵrepeater(ctx_r1.statuses());
    i0.ɵɵadvance(2);
    i0.ɵɵconditional(ctx_r1.section() === "payments" ? 11 : -1);
    i0.ɵɵadvance();
    i0.ɵɵproperty("disabled", ctx_r1.loading());
    i0.ɵɵadvance(2);
    i0.ɵɵconditional(ctx_r1.search || ctx_r1.status || ctx_r1.channel ? 14 : -1);
    i0.ɵɵadvance();
    i0.ɵɵattribute("aria-label", ctx_r1.title() + " table");
    i0.ɵɵadvance();
    i0.ɵɵattribute("aria-busy", ctx_r1.loading());
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", ctx_r1.title(), ". Newest records first. Open the action menu for details. ");
    i0.ɵɵadvance(3);
    i0.ɵɵconditional((tmp_11_0 = ctx_r1.section()) === "payments" ? 21 : tmp_11_0 === "credits" ? 22 : tmp_11_0 === "discounts" ? 23 : -1);
    i0.ɵɵadvance(8);
    i0.ɵɵconditional(ctx_r1.loading() ? 29 : !ctx_r1.pagination().total ? 30 : 31);
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(ctx_r1.loading() ? "Loading results\u2026" : ctx_r1.start() + "\u2013" + ctx_r1.end() + " of " + ctx_r1.pagination().total + " records");
    i0.ɵɵadvance(5);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r1.pageSize);
    i0.ɵɵproperty("disabled", ctx_r1.loading());
    i0.ɵɵadvance();
    i0.ɵɵrepeater(ctx_r1.pageSizes);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("disabled", ctx_r1.loading() || ctx_r1.pagination().page <= 1);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate2("Page ", ctx_r1.pagination().page, " of ", ctx_r1.pagination().totalPages);
    i0.ɵɵadvance();
    i0.ɵɵproperty("disabled", ctx_r1.loading() || ctx_r1.pagination().page >= ctx_r1.pagination().totalPages);
} }
function AccountsComponent_Conditional_8_Conditional_1_Conditional_0_For_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div")(1, "dt");
    i0.ɵɵtext(2);
    i0.ɵɵelementStart(3, "small");
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(5, "dd");
    i0.ɵɵtext(6);
    i0.ɵɵpipe(7, "currency");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const allocation_r15 = ctx.$implicit;
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", allocation_r15.feeHeadName);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(allocation_r15.periodLabel);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind2(7, 3, allocation_r15.amount, "INR"));
} }
function AccountsComponent_Conditional_8_Conditional_1_Conditional_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "section")(1, "h3");
    i0.ɵɵtext(2, "Fee allocations");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "dl", 60);
    i0.ɵɵrepeaterCreate(4, AccountsComponent_Conditional_8_Conditional_1_Conditional_0_For_5_Template, 8, 6, "div", null, i0.ɵɵrepeaterTrackByIndex);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const item_r16 = i0.ɵɵnextContext();
    i0.ɵɵadvance(4);
    i0.ɵɵrepeater(item_r16.allocations);
} }
function AccountsComponent_Conditional_8_Conditional_1_Conditional_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 4);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r1.downloadError());
} }
function AccountsComponent_Conditional_8_Conditional_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵconditionalCreate(0, AccountsComponent_Conditional_8_Conditional_1_Conditional_0_Template, 6, 0, "section");
    i0.ɵɵconditionalCreate(1, AccountsComponent_Conditional_8_Conditional_1_Conditional_1_Template, 2, 1, "p", 4);
} if (rf & 2) {
    const item_r16 = ctx;
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵconditional((item_r16.allocations == null ? null : item_r16.allocations.length) ? 0 : -1);
    i0.ɵɵadvance();
    i0.ɵɵconditional(ctx_r1.downloadError() ? 1 : -1);
} }
function AccountsComponent_Conditional_8_Conditional_5_Conditional_0_Template(rf, ctx) { if (rf & 1) {
    const _r17 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 62);
    i0.ɵɵlistener("click", function AccountsComponent_Conditional_8_Conditional_5_Conditional_0_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r17); const item_r18 = i0.ɵɵnextContext(); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.receipt(item_r18)); });
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵproperty("disabled", ctx_r1.downloading());
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r1.downloading() ? "Downloading\u2026" : "Download receipt", " ");
} }
function AccountsComponent_Conditional_8_Conditional_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵconditionalCreate(0, AccountsComponent_Conditional_8_Conditional_5_Conditional_0_Template, 2, 2, "button", 61);
} if (rf & 2) {
    i0.ɵɵconditional(ctx.status === "paid" ? 0 : -1);
} }
function AccountsComponent_Conditional_8_Template(rf, ctx) { if (rf & 1) {
    const _r14 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "erp-record-drawer", 57);
    i0.ɵɵlistener("closed", function AccountsComponent_Conditional_8_Template_erp_record_drawer_closed_0_listener() { i0.ɵɵrestoreView(_r14); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.preview.set(null)); });
    i0.ɵɵconditionalCreate(1, AccountsComponent_Conditional_8_Conditional_1_Template, 2, 2);
    i0.ɵɵelementStart(2, "div", 58)(3, "a", 59);
    i0.ɵɵtext(4, "Student record");
    i0.ɵɵelementEnd();
    i0.ɵɵconditionalCreate(5, AccountsComponent_Conditional_8_Conditional_5_Template, 1, 1);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    let tmp_8_0;
    let tmp_10_0;
    const record_r19 = ctx;
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵproperty("open", true)("title", record_r19.studentName || "Record details")("description", ctx_r1.title())("fields", ctx_r1.detailFields(record_r19))("illustration", ctx_r1.section() === "discounts" ? "discountTicket" : "feeWallet")("busy", ctx_r1.downloading());
    i0.ɵɵadvance();
    i0.ɵɵconditional((tmp_8_0 = ctx_r1.payment(record_r19)) ? 1 : -1, tmp_8_0);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("routerLink", i0.ɵɵpureFunction1(9, _c0, record_r19.studentAdmissionId));
    i0.ɵɵadvance(2);
    i0.ɵɵconditional((tmp_10_0 = ctx_r1.payment(record_r19)) ? 5 : -1, tmp_10_0);
} }
export class AccountsComponent {
    api = inject(ApiService);
    route = inject(ActivatedRoute);
    router = inject(Router);
    request;
    section = signal('payments', ...(ngDevMode ? [{ debugName: "section" }] : /* istanbul ignore next */ []));
    payments = signal([], ...(ngDevMode ? [{ debugName: "payments" }] : /* istanbul ignore next */ []));
    discounts = signal([], ...(ngDevMode ? [{ debugName: "discounts" }] : /* istanbul ignore next */ []));
    credits = signal([], ...(ngDevMode ? [{ debugName: "credits" }] : /* istanbul ignore next */ []));
    summary = signal({
        successfulPayments: 0,
        collectedAmount: 0,
        pendingPayments: 0,
        availableCredit: 0,
    }, ...(ngDevMode ? [{ debugName: "summary" }] : /* istanbul ignore next */ []));
    pagination = signal({ page: 1, pageSize: 25, total: 0, totalPages: 1 }, ...(ngDevMode ? [{ debugName: "pagination" }] : /* istanbul ignore next */ []));
    pageSizes = ERP_PAGINATION.pageSizeOptions;
    loading = signal(true, ...(ngDevMode ? [{ debugName: "loading" }] : /* istanbul ignore next */ []));
    error = signal('', ...(ngDevMode ? [{ debugName: "error" }] : /* istanbul ignore next */ []));
    downloadError = signal('', ...(ngDevMode ? [{ debugName: "downloadError" }] : /* istanbul ignore next */ []));
    downloading = signal(false, ...(ngDevMode ? [{ debugName: "downloading" }] : /* istanbul ignore next */ []));
    preview = signal(null, ...(ngDevMode ? [{ debugName: "preview" }] : /* istanbul ignore next */ []));
    title = computed(() => ({
        overview: 'Collections overview',
        payments: 'Student payments',
        credits: 'Excess credits',
        discounts: 'Discount audit',
    })[this.section()], ...(ngDevMode ? [{ debugName: "title" }] : /* istanbul ignore next */ []));
    description = computed(() => ({
        overview: 'Live collection totals and focused finance workspaces.',
        payments: 'Find transactions, inspect allocations and download receipts.',
        credits: 'Track unallocated receipts and remaining student credit.',
        discounts: 'Review one-time concessions without mixing them with payments.',
    })[this.section()], ...(ngDevMode ? [{ debugName: "description" }] : /* istanbul ignore next */ []));
    statuses = computed(() => ({
        overview: [],
        payments: ['paid', 'created', 'failed', 'refunded'],
        credits: ['available', 'consumed', 'refunded'],
        discounts: ['active', 'removed'],
    })[this.section()], ...(ngDevMode ? [{ debugName: "statuses" }] : /* istanbul ignore next */ []));
    rowActions = [
        { id: 'preview', label: 'View details', icon: 'view' },
    ];
    start = computed(() => this.pagination().total ? (this.pagination().page - 1) * this.pagination().pageSize + 1 : 0, ...(ngDevMode ? [{ debugName: "start" }] : /* istanbul ignore next */ []));
    end = computed(() => Math.min(this.pagination().page * this.pagination().pageSize, this.pagination().total), ...(ngDevMode ? [{ debugName: "end" }] : /* istanbul ignore next */ []));
    search = '';
    status = '';
    channel = '';
    pageSize = ERP_PAGINATION.defaultPageSize;
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
                if (section === 'payments')
                    this.payments.set(result.items);
                if (section === 'credits')
                    this.credits.set(result.items);
                if (section === 'discounts')
                    this.discounts.set(result.items);
                this.pagination.set(result.pagination);
                this.loading.set(false);
            },
            error: (error) => this.failed(error),
        });
    }
    failed(error) {
        this.error.set(error.error?.message || 'This finance workspace could not be loaded. Please retry.');
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
    open(record) {
        this.downloadError.set('');
        this.preview.set(record);
    }
    payment(record) {
        return this.section() === 'payments' ? record : null;
    }
    detailFields(record) {
        const money = (value) => new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR' }).format(value);
        const common = [
            { label: 'Student ID', value: record.studentId },
            { label: 'Status', value: record.status },
        ];
        if (this.section() === 'credits') {
            const credit = record;
            return [
                ...common,
                { label: 'Source receipt', value: credit.sourceReceiptNumber || '—' },
                { label: 'Original credit', value: money(credit.originalAmount) },
                { label: 'Remaining credit', value: money(credit.remainingAmount) },
                { label: 'Fee type', value: credit.kind },
            ];
        }
        if (this.section() === 'discounts') {
            const discount = record;
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
        const payment = record;
        return [
            ...common,
            { label: 'Receipt', value: payment.receiptNumber || 'Not issued' },
            { label: 'Amount', value: money(payment.amount) },
            { label: 'Fee period', value: payment.targetPeriodLabel || 'Legacy payment' },
            { label: 'Channel', value: payment.paymentChannel || 'online' },
            {
                label: 'Reference',
                value: payment.paymentReference || payment.razorpayPaymentId || payment.razorpayOrderId || '—',
            },
            { label: 'Received by', value: payment.acceptedByName || '—' },
            { label: 'Internal remark', value: payment.internalRemark || '—' },
        ];
    }
    receipt(payment) {
        if (this.downloading())
            return;
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
    static ɵfac = function AccountsComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || AccountsComponent)(); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: AccountsComponent, selectors: [["erp-accounts"]], decls: 9, vars: 6, consts: [["variant", "compact", 3, "title", "description", "layout"], ["page-actions", ""], ["type", "button", 1, "erp-button", "erp-button--secondary", 3, "click", "disabled"], ["lucideRefreshCw", "", "size", "16", "aria-hidden", "true"], ["role", "alert", 1, "erp-notice", "erp-notice--error"], [1, "erp-card", "erp-table-shell", "erp-finance-directory"], [3, "open", "title", "description", "fields", "illustration", "busy"], ["type", "button", 1, "erp-button", "erp-button--secondary", 3, "click"], ["aria-label", "All-time collection summary", 1, "erp-metric-strip"], [1, "erp-metric-strip__item"], [1, "erp-card", "erp-card--padded"], [1, "erp-card__header"], ["aria-label", "Collection directories", 1, "erp-crm-workspace-links"], ["routerLink", "/admin/accounts/payments"], ["kind", "feeWallet", "size", "compact"], ["routerLink", "/admin/accounts/credits"], ["kind", "feeConfiguration", "size", "compact"], ["routerLink", "/admin/accounts/discounts"], ["kind", "discountTicket", "size", "compact"], ["routerLink", "/admin/fees/overview"], ["kind", "dataConfiguration", "size", "compact"], [1, "erp-table-toolbar", 3, "ngSubmit"], [1, "erp-search-control"], ["lucideSearch", "", "size", "17", "aria-hidden", "true"], ["type", "search", "name", "search", "maxlength", "120", "placeholder", "Search student, receipt or reference\u2026", 3, "ngModelChange", "ngModel"], [1, "erp-table-toolbar__actions"], ["name", "status", "aria-label", "Record status", 1, "erp-control", 3, "ngModelChange", "ngModel"], ["value", ""], [3, "value"], ["name", "channel", "aria-label", "Payment channel", 1, "erp-control", 3, "ngModel"], ["type", "submit", 1, "erp-button", "erp-button--primary", 3, "disabled"], ["type", "button", 1, "erp-button", "erp-button--secondary"], ["tabindex", "0", 1, "erp-table-shell__scroll"], [1, "erp-sr-only"], ["scope", "col"], ["scope", "col", 1, "erp-table-shell__actions"], ["aria-label", "Directory pagination", 1, "erp-pagination"], ["aria-live", "polite"], [1, "erp-finance-page-size"], ["aria-label", "Rows per page", 1, "erp-control", 3, "ngModelChange", "ngModel", "disabled"], [3, "ngValue"], ["type", "button", "aria-label", "Previous page", 1, "erp-icon-button", 3, "click", "disabled"], ["lucideChevronLeft", "", "size", "18"], ["type", "button", "aria-label", "Next page", 1, "erp-icon-button", 3, "click", "disabled"], ["lucideChevronRight", "", "size", "18"], ["name", "channel", "aria-label", "Payment channel", 1, "erp-control", 3, "ngModelChange", "ngModel"], ["value", "online"], ["value", "offline"], ["value", "credit"], ["colspan", "7", 1, "erp-empty-state"], ["aria-hidden", "true", 1, "erp-spinner"], ["role", "status"], ["size", "compact", 3, "kind"], [1, "erp-tabular"], [1, "erp-status"], [1, "erp-table-shell__actions"], [3, "selected", "items"], [3, "closed", "open", "title", "description", "fields", "illustration", "busy"], ["drawer-actions", "", 1, "erp-finance-record-actions"], [1, "erp-button", "erp-button--secondary", 3, "routerLink"], [1, "erp-crm-detail-list"], ["type", "button", 1, "erp-button", "erp-button--primary", 3, "disabled"], ["type", "button", 1, "erp-button", "erp-button--primary", 3, "click", "disabled"]], template: function AccountsComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "erp-admin-page", 0)(1, "div", 1)(2, "button", 2);
            i0.ɵɵlistener("click", function AccountsComponent_Template_button_click_2_listener() { return ctx.load(); });
            i0.ɵɵnamespaceSVG();
            i0.ɵɵelement(3, "svg", 3);
            i0.ɵɵtext(4, " Refresh ");
            i0.ɵɵelementEnd()();
            i0.ɵɵconditionalCreate(5, AccountsComponent_Conditional_5_Template, 5, 1, "section", 4)(6, AccountsComponent_Conditional_6_Template, 63, 11)(7, AccountsComponent_Conditional_7_Template, 48, 18, "section", 5);
            i0.ɵɵelementEnd();
            i0.ɵɵconditionalCreate(8, AccountsComponent_Conditional_8_Template, 6, 11, "erp-record-drawer", 6);
        } if (rf & 2) {
            let tmp_5_0;
            i0.ɵɵproperty("title", ctx.title())("description", ctx.description())("layout", ctx.section() === "overview" ? "default" : "collection");
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("disabled", ctx.loading());
            i0.ɵɵadvance(3);
            i0.ɵɵconditional(ctx.error() ? 5 : ctx.section() === "overview" ? 6 : 7);
            i0.ɵɵadvance(3);
            i0.ɵɵconditional((tmp_5_0 = ctx.preview()) ? 8 : -1, tmp_5_0);
        } }, dependencies: [AdminIllustrationComponent,
            RecordDrawerComponent,
            AdminPageComponent,
            CompactActionMenuComponent,
            FormsModule, i1.ɵNgNoValidate, i1.NgSelectOption, i1.ɵNgSelectMultipleOption, i1.DefaultValueAccessor, i1.SelectControlValueAccessor, i1.NgControlStatus, i1.NgControlStatusGroup, i1.MaxLengthValidator, i1.NgModel, i1.NgForm, RouterLink,
            LucideSearch,
            LucideRefreshCw,
            LucideChevronLeft,
            LucideChevronRight,
            CurrencyPipe,
            DatePipe], encapsulation: 2, changeDetection: 0 });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AccountsComponent, [{
        type: Component,
        args: [{ selector: 'erp-accounts', imports: [
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
                ], changeDetection: ChangeDetectionStrategy.OnPush, template: "<erp-admin-page\n  [title]=\"title()\"\n  [description]=\"description()\"\n  variant=\"compact\"\n  [layout]=\"section() === 'overview' ? 'default' : 'collection'\"\n>\n  <div page-actions>\n    <button\n      class=\"erp-button erp-button--secondary\"\n      type=\"button\"\n      [disabled]=\"loading()\"\n      (click)=\"load()\"\n    >\n      <svg lucideRefreshCw size=\"16\" aria-hidden=\"true\"></svg> Refresh\n    </button>\n  </div>\n  @if (error()) {\n    <section class=\"erp-notice erp-notice--error\" role=\"alert\">\n      <p>{{ error() }}</p>\n      <button class=\"erp-button erp-button--secondary\" type=\"button\" (click)=\"load()\">Retry</button>\n    </section>\n  } @else if (section() === 'overview') {\n    <section\n      class=\"erp-metric-strip\"\n      aria-label=\"All-time collection summary\"\n      [attr.aria-busy]=\"loading()\"\n    >\n      <article class=\"erp-metric-strip__item\">\n        <div>\n          <small>Total collected</small\n          ><strong>{{ loading() ? '\u2026' : (summary().collectedAmount | currency: 'INR') }}</strong>\n        </div>\n      </article>\n      <article class=\"erp-metric-strip__item\">\n        <div>\n          <small>Available credit</small\n          ><strong>{{ loading() ? '\u2026' : (summary().availableCredit | currency: 'INR') }}</strong>\n        </div>\n      </article>\n      <article class=\"erp-metric-strip__item\">\n        <div>\n          <small>Successful payments</small\n          ><strong>{{ loading() ? '\u2026' : summary().successfulPayments }}</strong>\n        </div>\n      </article>\n      <article class=\"erp-metric-strip__item\">\n        <div>\n          <small>Pending orders</small\n          ><strong>{{ loading() ? '\u2026' : summary().pendingPayments }}</strong>\n        </div>\n      </article>\n    </section>\n    <section class=\"erp-card erp-card--padded\">\n      <header class=\"erp-card__header\">\n        <div>\n          <h2>Collection workspaces</h2>\n          <p>Each directory has its own filters, pagination and record details.</p>\n        </div>\n      </header>\n      <nav class=\"erp-crm-workspace-links\" aria-label=\"Collection directories\">\n        <a routerLink=\"/admin/accounts/payments\"\n          ><erp-admin-illustration kind=\"feeWallet\" size=\"compact\" /><span\n            ><strong>Student payments</strong\n            ><small>Online, offline and credit-adjusted transactions</small></span\n          ></a\n        >\n        <a routerLink=\"/admin/accounts/credits\"\n          ><erp-admin-illustration kind=\"feeConfiguration\" size=\"compact\" /><span\n            ><strong>Excess credits</strong\n            ><small>Available, consumed and refunded balances</small></span\n          ></a\n        >\n        <a routerLink=\"/admin/accounts/discounts\"\n          ><erp-admin-illustration kind=\"discountTicket\" size=\"compact\" /><span\n            ><strong>Discount audit</strong\n            ><small>One-time concessions and internal remarks</small></span\n          ></a\n        >\n        <a routerLink=\"/admin/fees/overview\"\n          ><erp-admin-illustration kind=\"dataConfiguration\" size=\"compact\" /><span\n            ><strong>Finance operations</strong\n            ><small>Fee setup, imports, generation and publication</small></span\n          ></a\n        >\n      </nav>\n    </section>\n  } @else {\n    <section class=\"erp-card erp-table-shell erp-finance-directory\">\n      <form class=\"erp-table-toolbar\" (ngSubmit)=\"navigate()\">\n        <label class=\"erp-search-control\">\n          <svg lucideSearch size=\"17\" aria-hidden=\"true\"></svg>\n          <input\n            type=\"search\"\n            name=\"search\"\n            [(ngModel)]=\"search\"\n            maxlength=\"120\"\n            [attr.aria-label]=\"'Search ' + title()\"\n            placeholder=\"Search student, receipt or reference\u2026\"\n          />\n        </label>\n        <div class=\"erp-table-toolbar__actions\">\n          <select class=\"erp-control\" name=\"status\" aria-label=\"Record status\" [(ngModel)]=\"status\">\n            <option value=\"\">All statuses</option>\n            @for (value of statuses(); track value) {\n              <option [value]=\"value\">{{ value === 'created' ? 'Pending' : value }}</option>\n            }\n          </select>\n          @if (section() === 'payments') {\n            <select\n              class=\"erp-control\"\n              name=\"channel\"\n              aria-label=\"Payment channel\"\n              [(ngModel)]=\"channel\"\n            >\n              <option value=\"\">All channels</option>\n              <option value=\"online\">Online</option>\n              <option value=\"offline\">Offline</option>\n              <option value=\"credit\">Excess credit</option>\n            </select>\n          }\n          <button class=\"erp-button erp-button--primary\" type=\"submit\" [disabled]=\"loading()\">\n            Apply filters\n          </button>\n          @if (search || status || channel) {\n            <button class=\"erp-button erp-button--secondary\" type=\"button\" (click)=\"clearFilters()\">\n              Clear\n            </button>\n          }\n        </div>\n      </form>\n      <div class=\"erp-table-shell__scroll\" tabindex=\"0\" [attr.aria-label]=\"title() + ' table'\">\n        <table [attr.aria-busy]=\"loading()\">\n          <caption class=\"erp-sr-only\">\n            {{\n              title()\n            }}. Newest records first. Open the action menu for details.\n          </caption>\n          <thead>\n            <tr>\n              @switch (section()) {\n                @case ('payments') {\n                  <th scope=\"col\">Receipt</th>\n                  <th scope=\"col\">Student</th>\n                  <th scope=\"col\">Channel</th>\n                  <th scope=\"col\">Amount</th>\n                  <th scope=\"col\">Date</th>\n                }\n                @case ('credits') {\n                  <th scope=\"col\">Student</th>\n                  <th scope=\"col\">Source receipt</th>\n                  <th scope=\"col\">Fee type</th>\n                  <th scope=\"col\">Original credit</th>\n                  <th scope=\"col\">Remaining</th>\n                }\n                @case ('discounts') {\n                  <th scope=\"col\">Student</th>\n                  <th scope=\"col\">Discount</th>\n                  <th scope=\"col\">Value</th>\n                  <th scope=\"col\">Fee period</th>\n                  <th scope=\"col\">Created</th>\n                }\n              }\n              <th scope=\"col\">Status</th>\n              <th scope=\"col\" class=\"erp-table-shell__actions\">Actions</th>\n            </tr>\n          </thead>\n          <tbody>\n            @if (loading()) {\n              <tr>\n                <td colspan=\"7\" class=\"erp-empty-state\">\n                  <span class=\"erp-spinner\" aria-hidden=\"true\"></span>\n                  <p role=\"status\">Loading {{ title() }}\u2026</p>\n                </td>\n              </tr>\n            } @else if (!pagination().total) {\n              <tr>\n                <td colspan=\"7\" class=\"erp-empty-state\">\n                  <erp-admin-illustration\n                    [kind]=\"search || status || channel ? 'noResults' : 'feeWallet'\"\n                    size=\"compact\"\n                  />\n                  <h3>\n                    {{ search || status || channel ? 'No matching records' : 'No records yet' }}\n                  </h3>\n                  <p>\n                    {{\n                      search || status || channel\n                        ? 'Change or clear your filters to try again.'\n                        : 'New records will appear here when finance activity is recorded.'\n                    }}\n                  </p>\n                </td>\n              </tr>\n            } @else {\n              @switch (section()) {\n                @case ('payments') {\n                  @for (item of payments(); track item._id) {\n                    <tr>\n                      <td>\n                        <strong>{{ item.receiptNumber || 'Not issued' }}</strong>\n                      </td>\n                      <td>\n                        <strong>{{ item.studentName }}</strong\n                        ><small>{{ item.studentId }}</small>\n                      </td>\n                      <td>\n                        {{ item.paymentChannel || 'online'\n                        }}<small>{{\n                          item.paymentReference || item.razorpayPaymentId || item.razorpayOrderId\n                        }}</small>\n                      </td>\n                      <td class=\"erp-tabular\">{{ item.amount | currency: 'INR' }}</td>\n                      <td>{{ item.paidAt || item.createdAt | date: 'mediumDate' }}</td>\n                      <td>\n                        <span\n                          class=\"erp-status\"\n                          [class.erp-status--paid]=\"item.status === 'paid'\"\n                          >{{ item.status === 'created' ? 'Pending' : item.status }}</span\n                        >\n                      </td>\n                      <td class=\"erp-table-shell__actions\">\n                        <erp-compact-action-menu [items]=\"rowActions\" (selected)=\"open(item)\" />\n                      </td>\n                    </tr>\n                  }\n                }\n                @case ('credits') {\n                  @for (item of credits(); track item._id) {\n                    <tr>\n                      <td>\n                        <strong>{{ item.studentName }}</strong\n                        ><small>{{ item.studentId }}</small>\n                      </td>\n                      <td>{{ item.sourceReceiptNumber || '\u2014' }}</td>\n                      <td>{{ item.kind === 'academic' ? 'Academic' : 'Hostel' }}</td>\n                      <td class=\"erp-tabular\">{{ item.originalAmount | currency: 'INR' }}</td>\n                      <td class=\"erp-tabular\">\n                        <strong>{{ item.remainingAmount | currency: 'INR' }}</strong>\n                      </td>\n                      <td>\n                        <span class=\"erp-status\">{{ item.status }}</span>\n                      </td>\n                      <td class=\"erp-table-shell__actions\">\n                        <erp-compact-action-menu [items]=\"rowActions\" (selected)=\"open(item)\" />\n                      </td>\n                    </tr>\n                  }\n                }\n                @case ('discounts') {\n                  @for (item of discounts(); track item._id) {\n                    <tr>\n                      <td>\n                        <strong>{{ item.studentName }}</strong\n                        ><small>{{ item.studentId }}</small>\n                      </td>\n                      <td>{{ item.name }}</td>\n                      <td class=\"erp-tabular\">\n                        {{\n                          item.type === 'percentage'\n                            ? item.value + '%'\n                            : (item.value | currency: 'INR')\n                        }}\n                      </td>\n                      <td>{{ item.targetPeriodLabel }}</td>\n                      <td>{{ item.createdAt | date: 'mediumDate' }}</td>\n                      <td>\n                        <span class=\"erp-status\">{{ item.status }}</span>\n                      </td>\n                      <td class=\"erp-table-shell__actions\">\n                        <erp-compact-action-menu [items]=\"rowActions\" (selected)=\"open(item)\" />\n                      </td>\n                    </tr>\n                  }\n                }\n              }\n            }\n          </tbody>\n        </table>\n      </div>\n      <footer class=\"erp-pagination\" aria-label=\"Directory pagination\">\n        <span aria-live=\"polite\">{{\n          loading()\n            ? 'Loading results\u2026'\n            : start() + '\u2013' + end() + ' of ' + pagination().total + ' records'\n        }}</span>\n        <div class=\"erp-table-toolbar__actions\">\n          <label class=\"erp-finance-page-size\"\n            ><span>Rows</span\n            ><select\n              class=\"erp-control\"\n              aria-label=\"Rows per page\"\n              [(ngModel)]=\"pageSize\"\n              (ngModelChange)=\"navigate()\"\n              [disabled]=\"loading()\"\n            >\n              @for (size of pageSizes; track size) {\n                <option [ngValue]=\"size\">{{ size }}</option>\n              }\n            </select></label\n          >\n          <button\n            class=\"erp-icon-button\"\n            type=\"button\"\n            aria-label=\"Previous page\"\n            [disabled]=\"loading() || pagination().page <= 1\"\n            (click)=\"navigate(pagination().page - 1)\"\n          >\n            <svg lucideChevronLeft size=\"18\" />\n          </button>\n          <span>Page {{ pagination().page }} of {{ pagination().totalPages }}</span>\n          <button\n            class=\"erp-icon-button\"\n            type=\"button\"\n            aria-label=\"Next page\"\n            [disabled]=\"loading() || pagination().page >= pagination().totalPages\"\n            (click)=\"navigate(pagination().page + 1)\"\n          >\n            <svg lucideChevronRight size=\"18\" />\n          </button>\n        </div>\n      </footer>\n    </section>\n  }\n</erp-admin-page>\n\n@if (preview(); as record) {\n  <erp-record-drawer\n    [open]=\"true\"\n    [title]=\"record.studentName || 'Record details'\"\n    [description]=\"title()\"\n    [fields]=\"detailFields(record)\"\n    [illustration]=\"section() === 'discounts' ? 'discountTicket' : 'feeWallet'\"\n    [busy]=\"downloading()\"\n    (closed)=\"preview.set(null)\"\n  >\n    @if (payment(record); as item) {\n      @if (item.allocations?.length) {\n        <section>\n          <h3>Fee allocations</h3>\n          <dl class=\"erp-crm-detail-list\">\n            @for (allocation of item.allocations; track $index) {\n              <div>\n                <dt>\n                  {{ allocation.feeHeadName }}<small>{{ allocation.periodLabel }}</small>\n                </dt>\n                <dd>{{ allocation.amount | currency: 'INR' }}</dd>\n              </div>\n            }\n          </dl>\n        </section>\n      }\n      @if (downloadError()) {\n        <p class=\"erp-notice erp-notice--error\" role=\"alert\">{{ downloadError() }}</p>\n      }\n    }\n    <div drawer-actions class=\"erp-finance-record-actions\">\n      <a\n        class=\"erp-button erp-button--secondary\"\n        [routerLink]=\"['/admin/admissions/applications', record.studentAdmissionId]\"\n        >Student record</a\n      >\n      @if (payment(record); as item) {\n        @if (item.status === 'paid') {\n          <button\n            class=\"erp-button erp-button--primary\"\n            type=\"button\"\n            [disabled]=\"downloading()\"\n            (click)=\"receipt(item)\"\n          >\n            {{ downloading() ? 'Downloading\u2026' : 'Download receipt' }}\n          </button>\n        }\n      }\n    </div>\n  </erp-record-drawer>\n}\n" }]
    }], () => [], null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(AccountsComponent, { className: "AccountsComponent", filePath: "frontend/src/app/features/admin/accounts/accounts.component.ts", lineNumber: 56 }); })();
