import { CurrencyPipe, DatePipe, TitleCasePipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { LucideArrowLeft, LucideArrowDown, LucideArrowRight, LucideBadgePercent, LucideCalendarDays, LucideCheckCircle2, LucideDownload, LucideEye, LucideGraduationCap, LucideInfo, LucidePlus, LucideRefreshCw, LucideReceiptText, LucideSearch, LucideWalletCards, } from '@lucide/angular';
import { ApiService } from '../../../core/api.service';
import { AdminPageComponent } from '../../../shared/ui/admin-page/admin-page.component';
import { CompactActionMenuComponent, } from '../../../shared/ui/compact-action-menu/compact-action-menu.component';
import { ConfirmDialogComponent } from '../../../shared/ui/confirm-dialog/confirm-dialog.component';
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
const _forTrack0 = ($index, $item) => $item._id;
const _forTrack1 = ($index, $item) => $item.feeHeadId + $item.feeHeadName + $item.category;
function StudentScholarshipsComponent_Conditional_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 4);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r0.message());
} }
function StudentScholarshipsComponent_Conditional_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 5);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r0.error());
} }
function StudentScholarshipsComponent_Conditional_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "section", 6);
    i0.ɵɵtext(1, "Loading scholarship record\u2026");
    i0.ɵɵelementEnd();
} }
function StudentScholarshipsComponent_Conditional_8_Conditional_19_For_128_Template(rf, ctx) { if (rf & 1) {
    const _r4 = i0.ɵɵgetCurrentView();
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
    i0.ɵɵelementStart(9, "td", 52);
    i0.ɵɵtext(10);
    i0.ɵɵpipe(11, "currency");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(12, "td")(13, "strong", 53);
    i0.ɵɵtext(14);
    i0.ɵɵpipe(15, "currency");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(16, "td");
    i0.ɵɵtext(17);
    i0.ɵɵpipe(18, "currency");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(19, "td")(20, "strong");
    i0.ɵɵtext(21);
    i0.ɵɵpipe(22, "currency");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(23, "td")(24, "span", 54);
    i0.ɵɵtext(25);
    i0.ɵɵpipe(26, "titlecase");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(27, "td", 41)(28, "button", 55);
    i0.ɵɵlistener("click", function StudentScholarshipsComponent_Conditional_8_Conditional_19_For_128_Template_button_click_28_listener() { const ledger_r5 = i0.ɵɵrestoreView(_r4).$implicit; const ctx_r0 = i0.ɵɵnextContext(3); ctx_r0.selectedImpactLedgerId.set(ledger_r5._id); return i0.ɵɵresetView(ctx_r0.activeTab.set("impact")); });
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(29, "svg", 56);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ledger_r5 = ctx.$implicit;
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(ledger_r5.periodLabel);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ledger_r5.academicSession);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind4(8, 12, ledger_r5.chargeAmount, "INR", "symbol", "1.0-2"));
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1(" \u2212 ", i0.ɵɵpipeBind4(11, 17, ledger_r5.discountAmount, "INR", "symbol", "1.0-2"), " ");
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind4(15, 22, ledger_r5.totalAmount, "INR", "symbol", "1.0-2"));
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind4(18, 27, ledger_r5.paidAmount, "INR", "symbol", "1.0-2"));
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind4(22, 32, ledger_r5.balanceAmount, "INR", "symbol", "1.0-2"));
    i0.ɵɵadvance(3);
    i0.ɵɵclassProp("fee-status--paid", ledger_r5.paymentStatus === "paid")("fee-status--partial", ledger_r5.paymentStatus === "partial");
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ledger_r5.paymentStatus === "partial" ? "Part paid" : i0.ɵɵpipeBind1(26, 37, ledger_r5.paymentStatus));
} }
function StudentScholarshipsComponent_Conditional_8_Conditional_19_ForEmpty_129_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "tr")(1, "td", 57);
    i0.ɵɵtext(2, " No fee ledger has been generated for this student. ");
    i0.ɵɵelementEnd()();
} }
function StudentScholarshipsComponent_Conditional_8_Conditional_19_For_142_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 46)(1, "div")(2, "strong");
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "small");
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(6, "b");
    i0.ɵɵtext(7);
    i0.ɵɵpipe(8, "currency");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const assignment_r7 = ctx.$implicit;
    const ctx_r0 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(assignment_r7.scholarshipName);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1("From ", assignment_r7.startSemester ? "Semester " + assignment_r7.startSemester : "Year " + assignment_r7.startAcademicYear);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r0.assignmentValue(assignment_r7) ?? i0.ɵɵpipeBind4(8, 3, assignment_r7.value, "INR", "symbol", "1.0-2"));
} }
function StudentScholarshipsComponent_Conditional_8_Conditional_19_ForEmpty_143_Template(rf, ctx) { if (rf & 1) {
    const _r6 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 47);
    i0.ɵɵelement(1, "img", 58);
    i0.ɵɵelementStart(2, "strong");
    i0.ɵɵtext(3, "No scholarships applied");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "small");
    i0.ɵɵtext(5, "Assign an approved scholarship scheme.");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "button", 10);
    i0.ɵɵlistener("click", function StudentScholarshipsComponent_Conditional_8_Conditional_19_ForEmpty_143_Template_button_click_6_listener() { i0.ɵɵrestoreView(_r6); const ctx_r0 = i0.ɵɵnextContext(3); ctx_r0.activeTab.set("scholarships"); return i0.ɵɵresetView(ctx_r0.scholarshipPanelOpen.set(true)); });
    i0.ɵɵtext(7, " Assign scholarship ");
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(8, "svg", 59);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance();
    i0.ɵɵproperty("src", ctx_r0.assets.emptyScholarships, i0.ɵɵsanitizeUrl);
} }
function StudentScholarshipsComponent_Conditional_8_Conditional_19_For_153_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 46)(1, "div")(2, "strong");
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "small");
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(6, "b");
    i0.ɵɵtext(7);
    i0.ɵɵpipe(8, "currency");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const discount_r9 = ctx.$implicit;
    const ctx_r0 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(discount_r9.name);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate2("", discount_r9.targetPeriodLabel, " \u00B7 ", discount_r9.academicSession);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r0.discountValueLabel(discount_r9) ?? i0.ɵɵpipeBind4(8, 4, discount_r9.value, "INR", "symbol", "1.0-2"));
} }
function StudentScholarshipsComponent_Conditional_8_Conditional_19_ForEmpty_154_Template(rf, ctx) { if (rf & 1) {
    const _r8 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 47);
    i0.ɵɵelement(1, "img", 58);
    i0.ɵɵelementStart(2, "strong");
    i0.ɵɵtext(3, "No one-time discounts applied");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "small");
    i0.ɵɵtext(5, "Add an approved exception for a specific fee period.");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "button", 10);
    i0.ɵɵlistener("click", function StudentScholarshipsComponent_Conditional_8_Conditional_19_ForEmpty_154_Template_button_click_6_listener() { i0.ɵɵrestoreView(_r8); const ctx_r0 = i0.ɵɵnextContext(3); ctx_r0.activeTab.set("discounts"); return i0.ɵɵresetView(ctx_r0.discountPanelOpen.set(true)); });
    i0.ɵɵtext(7, " Add one-time discount ");
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(8, "svg", 59);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance();
    i0.ɵɵproperty("src", ctx_r0.assets.discountTicket, i0.ɵɵsanitizeUrl);
} }
function StudentScholarshipsComponent_Conditional_8_Conditional_19_Template(rf, ctx) { if (rf & 1) {
    const _r3 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "section", 15)(1, "div", 16)(2, "span", 17);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "div")(5, "div", 18)(6, "h2");
    i0.ɵɵtext(7);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "span", 19);
    i0.ɵɵtext(9);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(10, "p");
    i0.ɵɵtext(11);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(12, "dl", 20)(13, "div")(14, "dt");
    i0.ɵɵtext(15, "Session");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(16, "dd");
    i0.ɵɵtext(17);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(18, "div")(19, "dt");
    i0.ɵɵtext(20, "Current period");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(21, "dd");
    i0.ɵɵtext(22);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(23, "div")(24, "dt");
    i0.ɵɵtext(25, "Billing cycle");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(26, "dd");
    i0.ɵɵtext(27);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(28, "div")(29, "dt");
    i0.ɵɵtext(30, "College");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(31, "dd");
    i0.ɵɵtext(32);
    i0.ɵɵelementEnd()()()();
    i0.ɵɵelementStart(33, "section", 21)(34, "button", 22);
    i0.ɵɵlistener("click", function StudentScholarshipsComponent_Conditional_8_Conditional_19_Template_button_click_34_listener() { i0.ɵɵrestoreView(_r3); const ctx_r0 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r0.activeTab.set("impact")); });
    i0.ɵɵelementStart(35, "span", 23);
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(36, "svg", 24);
    i0.ɵɵelementEnd();
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(37, "span");
    i0.ɵɵtext(38, "Gross fees");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(39, "strong");
    i0.ɵɵtext(40);
    i0.ɵɵpipe(41, "currency");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(42, "small");
    i0.ɵɵtext(43, "Before concessions");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(44, "button", 25);
    i0.ɵɵlistener("click", function StudentScholarshipsComponent_Conditional_8_Conditional_19_Template_button_click_44_listener() { i0.ɵɵrestoreView(_r3); const ctx_r0 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r0.activeTab.set("impact")); });
    i0.ɵɵelementStart(45, "span", 26);
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(46, "svg", 27);
    i0.ɵɵelementEnd();
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(47, "span");
    i0.ɵɵtext(48, "Total concessions");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(49, "strong");
    i0.ɵɵtext(50);
    i0.ɵɵpipe(51, "currency");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(52, "small");
    i0.ɵɵtext(53, "Scholarships & discounts");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(54, "button", 22);
    i0.ɵɵlistener("click", function StudentScholarshipsComponent_Conditional_8_Conditional_19_Template_button_click_54_listener() { i0.ɵɵrestoreView(_r3); const ctx_r0 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r0.activeTab.set("impact")); });
    i0.ɵɵelementStart(55, "span", 23);
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(56, "svg", 28);
    i0.ɵɵelementEnd();
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(57, "span");
    i0.ɵɵtext(58, "Net payable");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(59, "strong");
    i0.ɵɵtext(60);
    i0.ɵɵpipe(61, "currency");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(62, "small");
    i0.ɵɵtext(63, "After concessions");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(64, "button", 22);
    i0.ɵɵlistener("click", function StudentScholarshipsComponent_Conditional_8_Conditional_19_Template_button_click_64_listener() { i0.ɵɵrestoreView(_r3); const ctx_r0 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r0.activeTab.set("impact")); });
    i0.ɵɵelementStart(65, "span", 29);
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(66, "svg", 30);
    i0.ɵɵelementEnd();
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(67, "span");
    i0.ɵɵtext(68, "Paid amount");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(69, "strong");
    i0.ɵɵtext(70);
    i0.ɵɵpipe(71, "currency");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(72, "small");
    i0.ɵɵtext(73, "Total payments made");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(74, "button", 31);
    i0.ɵɵlistener("click", function StudentScholarshipsComponent_Conditional_8_Conditional_19_Template_button_click_74_listener() { i0.ɵɵrestoreView(_r3); const ctx_r0 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r0.activeTab.set("impact")); });
    i0.ɵɵelementStart(75, "span", 32);
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(76, "svg", 24);
    i0.ɵɵelementEnd();
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(77, "span");
    i0.ɵɵtext(78, "Outstanding");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(79, "strong");
    i0.ɵɵtext(80);
    i0.ɵɵpipe(81, "currency");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(82, "small");
    i0.ɵɵtext(83, "Current balance");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(84, "div", 33)(85, "span", 23);
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(86, "svg", 34);
    i0.ɵɵelementEnd();
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(87, "span");
    i0.ɵɵtext(88, "Account status");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(89, "strong");
    i0.ɵɵtext(90);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(91, "small");
    i0.ɵɵtext(92);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(93, "div", 35)(94, "section", 36)(95, "div", 37)(96, "div")(97, "h2");
    i0.ɵɵtext(98, " Fee period summary ");
    i0.ɵɵelementStart(99, "small");
    i0.ɵɵtext(100);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(101, "p");
    i0.ɵɵtext(102, "Summary of all academic periods for this admission.");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(103, "button", 38);
    i0.ɵɵlistener("click", function StudentScholarshipsComponent_Conditional_8_Conditional_19_Template_button_click_103_listener() { i0.ɵɵrestoreView(_r3); const ctx_r0 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r0.activeTab.set("impact")); });
    i0.ɵɵtext(104, " View full fee impact ");
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(105, "svg", 39);
    i0.ɵɵelementEnd()();
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(106, "div", 40)(107, "table")(108, "thead")(109, "tr")(110, "th");
    i0.ɵɵtext(111, "Fee period");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(112, "th");
    i0.ɵɵtext(113, "Gross fees");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(114, "th");
    i0.ɵɵtext(115, "Concessions");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(116, "th");
    i0.ɵɵtext(117, "Net payable");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(118, "th");
    i0.ɵɵtext(119, "Paid");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(120, "th");
    i0.ɵɵtext(121, "Balance");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(122, "th");
    i0.ɵɵtext(123, "Status");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(124, "th", 41);
    i0.ɵɵtext(125, "Action");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(126, "tbody");
    i0.ɵɵrepeaterCreate(127, StudentScholarshipsComponent_Conditional_8_Conditional_19_For_128_Template, 30, 39, "tr", null, _forTrack0, false, StudentScholarshipsComponent_Conditional_8_Conditional_19_ForEmpty_129_Template, 3, 0, "tr");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(130, "footer", 42);
    i0.ɵɵtext(131);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(132, "div", 43)(133, "article", 44)(134, "header")(135, "div");
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(136, "svg", 45);
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(137, "h2");
    i0.ɵɵtext(138, "Active scholarships");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(139, "button", 10);
    i0.ɵɵlistener("click", function StudentScholarshipsComponent_Conditional_8_Conditional_19_Template_button_click_139_listener() { i0.ɵɵrestoreView(_r3); const ctx_r0 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r0.activeTab.set("scholarships")); });
    i0.ɵɵtext(140, "Manage all");
    i0.ɵɵelementEnd()();
    i0.ɵɵrepeaterCreate(141, StudentScholarshipsComponent_Conditional_8_Conditional_19_For_142_Template, 9, 8, "div", 46, _forTrack0, false, StudentScholarshipsComponent_Conditional_8_Conditional_19_ForEmpty_143_Template, 9, 1, "div", 47);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(144, "article", 44)(145, "header")(146, "div");
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(147, "svg", 48);
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(148, "h2");
    i0.ɵɵtext(149, "Active one-time discounts");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(150, "button", 10);
    i0.ɵɵlistener("click", function StudentScholarshipsComponent_Conditional_8_Conditional_19_Template_button_click_150_listener() { i0.ɵɵrestoreView(_r3); const ctx_r0 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r0.activeTab.set("discounts")); });
    i0.ɵɵtext(151, "Add discount");
    i0.ɵɵelementEnd()();
    i0.ɵɵrepeaterCreate(152, StudentScholarshipsComponent_Conditional_8_Conditional_19_For_153_Template, 9, 9, "div", 46, _forTrack0, false, StudentScholarshipsComponent_Conditional_8_Conditional_19_ForEmpty_154_Template, 9, 1, "div", 47);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(155, "section", 49)(156, "span", 50);
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(157, "svg", 51);
    i0.ɵɵelementEnd();
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(158, "div")(159, "strong");
    i0.ɵɵtext(160, "Changes reflect automatically");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(161, "p");
    i0.ɵɵtext(162, "Any new scholarship or discount updates the fee impact instantly.");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(163, "button", 38);
    i0.ɵɵlistener("click", function StudentScholarshipsComponent_Conditional_8_Conditional_19_Template_button_click_163_listener() { i0.ɵɵrestoreView(_r3); const ctx_r0 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r0.activeTab.set("impact")); });
    i0.ɵɵtext(164, " Go to fee impact ");
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(165, "svg", 39);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const item_r10 = i0.ɵɵnextContext();
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(ctx_r0.initials(item_r10.studentName || "Student"));
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(item_r10.studentName || "Student record");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(item_r10.status === "approved" ? "Active" : item_r10.status);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate2(" ", item_r10.studentId || "ID pending", " \u00B7 ", item_r10.courseName || "Programme not mapped", " ");
    i0.ɵɵadvance(6);
    i0.ɵɵtextInterpolate(item_r10.academicSession || "\u2014");
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate1(" ", item_r10.feeFrequency === "semester" ? "Semester " + item_r10.currentSemester : "Year " + item_r10.currentAcademicYear, " ");
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(item_r10.feeFrequency === "semester" ? "Semester-wise" : "Annual");
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(item_r10.collegeName || "\u2014");
    i0.ɵɵadvance(8);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind4(41, 22, ctx_r0.totalCharges(), "INR", "symbol", "1.0-2"));
    i0.ɵɵadvance(10);
    i0.ɵɵtextInterpolate1("\u2212 ", i0.ɵɵpipeBind4(51, 27, ctx_r0.totalDiscounts(), "INR", "symbol", "1.0-2"));
    i0.ɵɵadvance(10);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind4(61, 32, ctx_r0.totalPayable(), "INR", "symbol", "1.0-2"));
    i0.ɵɵadvance(10);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind4(71, 37, ctx_r0.totalPaid(), "INR", "symbol", "1.0-2"));
    i0.ɵɵadvance(10);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind4(81, 42, ctx_r0.totalBalance(), "INR", "symbol", "1.0-2"));
    i0.ɵɵadvance(10);
    i0.ɵɵtextInterpolate(ctx_r0.totalBalance() > 0 ? "Due" : "Paid");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1("", ctx_r0.ledgers().length, " fee periods");
    i0.ɵɵadvance(8);
    i0.ɵɵtextInterpolate(ctx_r0.ledgers().length);
    i0.ɵɵadvance(27);
    i0.ɵɵrepeater(ctx_r0.ledgers());
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate2(" Showing ", ctx_r0.ledgers().length, " of ", ctx_r0.ledgers().length, " periods ");
    i0.ɵɵadvance(10);
    i0.ɵɵrepeater(ctx_r0.assignments());
    i0.ɵɵadvance(11);
    i0.ɵɵrepeater(ctx_r0.discounts());
} }
function StudentScholarshipsComponent_Conditional_8_Conditional_20_For_36_Template(rf, ctx) { if (rf & 1) {
    const _r12 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "tr")(1, "td")(2, "span", 70)(3, "span", 71);
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(4, "svg", 27);
    i0.ɵɵelementEnd();
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(5, "span")(6, "strong");
    i0.ɵɵtext(7);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "small");
    i0.ɵɵtext(9);
    i0.ɵɵelementEnd()()()();
    i0.ɵɵelementStart(10, "td")(11, "strong", 52);
    i0.ɵɵtext(12);
    i0.ɵɵpipe(13, "currency");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(14, "td")(15, "span", 72);
    i0.ɵɵtext(16);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(17, "small");
    i0.ɵɵtext(18);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(19, "td");
    i0.ɵɵtext(20);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(21, "td");
    i0.ɵɵtext(22);
    i0.ɵɵpipe(23, "date");
    i0.ɵɵelementStart(24, "small");
    i0.ɵɵtext(25);
    i0.ɵɵpipe(26, "date");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(27, "td")(28, "span", 72);
    i0.ɵɵtext(29, "Active");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(30, "td", 41)(31, "erp-compact-action-menu", 73);
    i0.ɵɵlistener("selected", function StudentScholarshipsComponent_Conditional_8_Conditional_20_For_36_Template_erp_compact_action_menu_selected_31_listener($event) { const assignment_r13 = i0.ɵɵrestoreView(_r12).$implicit; const ctx_r0 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r0.handleAssignmentAction($event, assignment_r13)); });
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const assignment_r13 = ctx.$implicit;
    const ctx_r0 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(7);
    i0.ɵɵtextInterpolate(assignment_r13.scholarshipName);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(assignment_r13.recurring ? "Recurring tuition concession" : "One-time tuition concession");
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(ctx_r0.assignmentValue(assignment_r13) ?? i0.ɵɵpipeBind4(13, 9, assignment_r13.value, "INR", "symbol", "1.0-2"));
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(assignment_r13.recurring ? "Recurring" : "One-time");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(assignment_r13.recurring ? "Carry forward" : "Selected period");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", assignment_r13.recurring ? assignment_r13.startSemester ? "From Semester " + assignment_r13.startSemester : "From Year " + assignment_r13.startAcademicYear : assignment_r13.targetPeriodLabel, " ");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind2(23, 14, assignment_r13.assignedAt, "dd MMM yyyy"));
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind2(26, 17, assignment_r13.assignedAt, "h:mm a"));
    i0.ɵɵadvance(6);
    i0.ɵɵproperty("items", ctx_r0.removeActions);
} }
function StudentScholarshipsComponent_Conditional_8_Conditional_20_ForEmpty_37_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "tr")(1, "td", 74)(2, "div", 75);
    i0.ɵɵelement(3, "img", 58);
    i0.ɵɵelementStart(4, "strong");
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "span");
    i0.ɵɵtext(7);
    i0.ɵɵelementEnd()()()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("src", ctx_r0.scholarshipSearch() ? ctx_r0.assets.noResults : ctx_r0.assets.addStudent, i0.ɵɵsanitizeUrl);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r0.scholarshipSearch() ? "No scholarships match your search" : "No scholarships assigned");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r0.scholarshipSearch() ? "Try a different search term." : "Assign an active scholarship scheme to provide a tuition concession.");
} }
function StudentScholarshipsComponent_Conditional_8_Conditional_20_Conditional_40_For_20_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 84);
    i0.ɵɵtext(1);
    i0.ɵɵpipe(2, "currency");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const scholarship_r15 = ctx.$implicit;
    i0.ɵɵproperty("value", scholarship_r15._id);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate2(" ", scholarship_r15.name, " \u00B7 ", scholarship_r15.valueMode === "custom" ? "Custom value" : scholarship_r15.type === "percentage" ? scholarship_r15.value + "%" : i0.ɵɵpipeBind4(2, 3, scholarship_r15.value, "INR", "symbol", "1.0-2"), " ");
} }
function StudentScholarshipsComponent_Conditional_8_Conditional_20_Conditional_40_Conditional_21_Template(rf, ctx) { if (rf & 1) {
    const _r16 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "label")(1, "span");
    i0.ɵɵtext(2, "Calculation");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "select", 82);
    i0.ɵɵtwoWayListener("ngModelChange", function StudentScholarshipsComponent_Conditional_8_Conditional_20_Conditional_40_Conditional_21_Template_select_ngModelChange_3_listener($event) { i0.ɵɵrestoreView(_r16); const ctx_r0 = i0.ɵɵnextContext(4); i0.ɵɵtwoWayBindingSet(ctx_r0.customScholarshipType, $event) || (ctx_r0.customScholarshipType = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementStart(4, "option", 87);
    i0.ɵɵtext(5, "Percentage");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "option", 88);
    i0.ɵɵtext(7, "Fixed amount");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(8, "label")(9, "span");
    i0.ɵɵtext(10);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(11, "input", 89);
    i0.ɵɵtwoWayListener("ngModelChange", function StudentScholarshipsComponent_Conditional_8_Conditional_20_Conditional_40_Conditional_21_Template_input_ngModelChange_11_listener($event) { i0.ɵɵrestoreView(_r16); const ctx_r0 = i0.ɵɵnextContext(4); i0.ɵɵtwoWayBindingSet(ctx_r0.customScholarshipValue, $event) || (ctx_r0.customScholarshipValue = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(4);
    i0.ɵɵadvance(3);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r0.customScholarshipType);
    i0.ɵɵadvance(7);
    i0.ɵɵtextInterpolate(ctx_r0.customScholarshipType === "percentage" ? "Percentage" : "Amount");
    i0.ɵɵadvance();
    i0.ɵɵproperty("max", ctx_r0.customScholarshipType === "percentage" ? 100 : 1000000000);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r0.customScholarshipValue);
} }
function StudentScholarshipsComponent_Conditional_8_Conditional_20_Conditional_40_Conditional_30_For_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 84);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ledger_r18 = ctx.$implicit;
    i0.ɵɵproperty("value", ledger_r18._id);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate2(" ", ledger_r18.periodLabel, " \u00B7 ", ledger_r18.academicSession, " ");
} }
function StudentScholarshipsComponent_Conditional_8_Conditional_20_Conditional_40_Conditional_30_Template(rf, ctx) { if (rf & 1) {
    const _r17 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "label")(1, "span");
    i0.ɵɵtext(2, "Fee period");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "select", 82);
    i0.ɵɵtwoWayListener("ngModelChange", function StudentScholarshipsComponent_Conditional_8_Conditional_20_Conditional_40_Conditional_30_Template_select_ngModelChange_3_listener($event) { i0.ɵɵrestoreView(_r17); const ctx_r0 = i0.ɵɵnextContext(4); i0.ɵɵtwoWayBindingSet(ctx_r0.scholarshipLedgerId, $event) || (ctx_r0.scholarshipLedgerId = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementStart(4, "option", 83);
    i0.ɵɵtext(5, "Select fee period");
    i0.ɵɵelementEnd();
    i0.ɵɵrepeaterCreate(6, StudentScholarshipsComponent_Conditional_8_Conditional_20_Conditional_40_Conditional_30_For_7_Template, 2, 3, "option", 84, _forTrack0);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(4);
    i0.ɵɵadvance(3);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r0.scholarshipLedgerId);
    i0.ɵɵadvance(3);
    i0.ɵɵrepeater(ctx_r0.ledgers());
} }
function StudentScholarshipsComponent_Conditional_8_Conditional_20_Conditional_40_Template(rf, ctx) { if (rf & 1) {
    const _r14 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "section", 68)(1, "header", 76)(2, "div", 77)(3, "span", 78);
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(4, "svg", 79);
    i0.ɵɵelementEnd();
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(5, "div")(6, "h2");
    i0.ɵɵtext(7, "Assign scholarship");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "p");
    i0.ɵɵtext(9, "Choose an active scheme and apply it to this student.");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(10, "button", 80);
    i0.ɵɵlistener("click", function StudentScholarshipsComponent_Conditional_8_Conditional_20_Conditional_40_Template_button_click_10_listener() { i0.ɵɵrestoreView(_r14); const ctx_r0 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r0.scholarshipPanelOpen.set(false)); });
    i0.ɵɵtext(11, " \u00D7 ");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(12, "div", 81)(13, "label")(14, "span");
    i0.ɵɵtext(15, "Scholarship scheme");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(16, "select", 82);
    i0.ɵɵlistener("ngModelChange", function StudentScholarshipsComponent_Conditional_8_Conditional_20_Conditional_40_Template_select_ngModelChange_16_listener($event) { i0.ɵɵrestoreView(_r14); const ctx_r0 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r0.scholarshipId.set($event)); });
    i0.ɵɵelementStart(17, "option", 83);
    i0.ɵɵtext(18, "Select an active scheme");
    i0.ɵɵelementEnd();
    i0.ɵɵrepeaterCreate(19, StudentScholarshipsComponent_Conditional_8_Conditional_20_Conditional_40_For_20_Template, 3, 8, "option", 84, _forTrack0);
    i0.ɵɵelementEnd()();
    i0.ɵɵconditionalCreate(21, StudentScholarshipsComponent_Conditional_8_Conditional_20_Conditional_40_Conditional_21_Template, 12, 4);
    i0.ɵɵelementStart(22, "label")(23, "span");
    i0.ɵɵtext(24, "Application");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(25, "select", 82);
    i0.ɵɵtwoWayListener("ngModelChange", function StudentScholarshipsComponent_Conditional_8_Conditional_20_Conditional_40_Template_select_ngModelChange_25_listener($event) { i0.ɵɵrestoreView(_r14); const ctx_r0 = i0.ɵɵnextContext(3); i0.ɵɵtwoWayBindingSet(ctx_r0.scholarshipRecurring, $event) || (ctx_r0.scholarshipRecurring = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementStart(26, "option", 85);
    i0.ɵɵtext(27, "Recurring \u00B7 carry forward");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(28, "option", 85);
    i0.ɵɵtext(29, "One-time only");
    i0.ɵɵelementEnd()()();
    i0.ɵɵconditionalCreate(30, StudentScholarshipsComponent_Conditional_8_Conditional_20_Conditional_40_Conditional_30_Template, 8, 1, "label");
    i0.ɵɵelementStart(31, "button", 86);
    i0.ɵɵlistener("click", function StudentScholarshipsComponent_Conditional_8_Conditional_20_Conditional_40_Template_button_click_31_listener() { i0.ɵɵrestoreView(_r14); const ctx_r0 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r0.assign()); });
    i0.ɵɵtext(32);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    let tmp_6_0;
    const ctx_r0 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(16);
    i0.ɵɵproperty("ngModel", ctx_r0.scholarshipId());
    i0.ɵɵadvance(3);
    i0.ɵɵrepeater(ctx_r0.availableScholarships());
    i0.ɵɵadvance(2);
    i0.ɵɵconditional(((tmp_6_0 = ctx_r0.selectedScholarship()) == null ? null : tmp_6_0.valueMode) === "custom" ? 21 : -1);
    i0.ɵɵadvance(4);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r0.scholarshipRecurring);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngValue", true);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngValue", false);
    i0.ɵɵadvance(2);
    i0.ɵɵconditional(!ctx_r0.scholarshipRecurring ? 30 : -1);
    i0.ɵɵadvance();
    i0.ɵɵproperty("disabled", ctx_r0.saving() || !ctx_r0.scholarshipId());
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r0.saving() ? "Applying\u2026" : "Assign scholarship", " ");
} }
function StudentScholarshipsComponent_Conditional_8_Conditional_20_Conditional_41_Template(rf, ctx) { if (rf & 1) {
    const _r19 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "section", 69);
    i0.ɵɵelement(1, "img", 58);
    i0.ɵɵelementStart(2, "div")(3, "strong");
    i0.ɵɵtext(4, "Need to apply another scholarship?");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "p");
    i0.ɵɵtext(6, " Assign an active scholarship scheme to this student to provide tuition fee concessions. ");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(7, "button", 38);
    i0.ɵɵlistener("click", function StudentScholarshipsComponent_Conditional_8_Conditional_20_Conditional_41_Template_button_click_7_listener() { i0.ɵɵrestoreView(_r19); const ctx_r0 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r0.scholarshipPanelOpen.set(true)); });
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(8, "svg", 67);
    i0.ɵɵtext(9, " Assign scholarship ");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance();
    i0.ɵɵproperty("src", ctx_r0.assets.feeWallet, i0.ɵɵsanitizeUrl);
} }
function StudentScholarshipsComponent_Conditional_8_Conditional_20_Template(rf, ctx) { if (rf & 1) {
    const _r11 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "section", 60)(1, "div", 61)(2, "div")(3, "h2");
    i0.ɵɵtext(4, " Assigned scholarships ");
    i0.ɵɵelementStart(5, "small");
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(7, "p");
    i0.ɵɵtext(8, "Recurring concessions currently applied to this student.");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(9, "div", 62)(10, "label", 63);
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(11, "svg", 64);
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(12, "input", 65);
    i0.ɵɵlistener("ngModelChange", function StudentScholarshipsComponent_Conditional_8_Conditional_20_Template_input_ngModelChange_12_listener($event) { i0.ɵɵrestoreView(_r11); const ctx_r0 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r0.scholarshipSearch.set($event)); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(13, "button", 66);
    i0.ɵɵlistener("click", function StudentScholarshipsComponent_Conditional_8_Conditional_20_Template_button_click_13_listener() { i0.ɵɵrestoreView(_r11); const ctx_r0 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r0.scholarshipPanelOpen.set(true)); });
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(14, "svg", 67);
    i0.ɵɵtext(15, " Assign scholarship ");
    i0.ɵɵelementEnd()()();
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(16, "div", 40)(17, "table")(18, "thead")(19, "tr")(20, "th");
    i0.ɵɵtext(21, "Scholarship scheme");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(22, "th");
    i0.ɵɵtext(23, "Benefit");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(24, "th");
    i0.ɵɵtext(25, "Application");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(26, "th");
    i0.ɵɵtext(27, "Effective from");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(28, "th");
    i0.ɵɵtext(29, "Assigned on");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(30, "th");
    i0.ɵɵtext(31, "Status");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(32, "th", 41);
    i0.ɵɵtext(33, "Actions");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(34, "tbody");
    i0.ɵɵrepeaterCreate(35, StudentScholarshipsComponent_Conditional_8_Conditional_20_For_36_Template, 32, 20, "tr", null, _forTrack0, false, StudentScholarshipsComponent_Conditional_8_Conditional_20_ForEmpty_37_Template, 8, 3, "tr");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(38, "footer", 42);
    i0.ɵɵtext(39);
    i0.ɵɵelementEnd()();
    i0.ɵɵconditionalCreate(40, StudentScholarshipsComponent_Conditional_8_Conditional_20_Conditional_40_Template, 33, 8, "section", 68)(41, StudentScholarshipsComponent_Conditional_8_Conditional_20_Conditional_41_Template, 10, 1, "section", 69);
    i0.ɵɵelementStart(42, "section", 49)(43, "span", 50);
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(44, "svg", 51);
    i0.ɵɵelementEnd();
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(45, "div")(46, "strong");
    i0.ɵɵtext(47, "How it works");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(48, "p");
    i0.ɵɵtext(49, " Recurring scholarships apply to tuition fee and carry forward to future unpaid periods. Removing a scholarship does not affect periods that are already paid. ");
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(6);
    i0.ɵɵtextInterpolate(ctx_r0.assignments().length);
    i0.ɵɵadvance(6);
    i0.ɵɵproperty("ngModel", ctx_r0.scholarshipSearch());
    i0.ɵɵadvance(23);
    i0.ɵɵrepeater(ctx_r0.filteredAssignments());
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate2(" Showing ", ctx_r0.filteredAssignments().length, " of ", ctx_r0.assignments().length, " scholarships ");
    i0.ɵɵadvance();
    i0.ɵɵconditional(ctx_r0.scholarshipPanelOpen() ? 40 : 41);
} }
function StudentScholarshipsComponent_Conditional_8_Conditional_21_For_76_Template(rf, ctx) { if (rf & 1) {
    const _r21 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "tr")(1, "td")(2, "span", 102)(3, "span", 71);
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(4, "svg", 103);
    i0.ɵɵelementEnd();
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(5, "span")(6, "strong");
    i0.ɵɵtext(7);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "small");
    i0.ɵɵtext(9, "Approved by Accounts");
    i0.ɵɵelementEnd()()()();
    i0.ɵɵelementStart(10, "td")(11, "strong");
    i0.ɵɵtext(12);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(13, "small");
    i0.ɵɵtext(14);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(15, "td")(16, "span", 72);
    i0.ɵɵtext(17);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(18, "td")(19, "strong", 52);
    i0.ɵɵtext(20);
    i0.ɵɵpipe(21, "currency");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(22, "td")(23, "span", 104);
    i0.ɵɵtext(24);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(25, "td");
    i0.ɵɵtext(26);
    i0.ɵɵpipe(27, "date");
    i0.ɵɵelementStart(28, "small");
    i0.ɵɵtext(29);
    i0.ɵɵpipe(30, "date");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(31, "td")(32, "span", 72);
    i0.ɵɵtext(33, "Active");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(34, "td", 41)(35, "erp-compact-action-menu", 73);
    i0.ɵɵlistener("selected", function StudentScholarshipsComponent_Conditional_8_Conditional_21_For_76_Template_erp_compact_action_menu_selected_35_listener($event) { const discount_r22 = i0.ɵɵrestoreView(_r21).$implicit; const ctx_r0 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r0.handleDiscountAction($event, discount_r22)); });
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const discount_r22 = ctx.$implicit;
    const ctx_r0 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(7);
    i0.ɵɵtextInterpolate(discount_r22.name);
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(discount_r22.targetPeriodLabel);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(discount_r22.academicSession);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(discount_r22.type === "percentage" ? "Percentage" : "Fixed amount");
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(ctx_r0.discountValueLabel(discount_r22) ?? i0.ɵɵpipeBind4(21, 9, discount_r22.value, "INR", "symbol", "1.0-2"));
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(discount_r22.internalRemark);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind2(27, 14, discount_r22.createdAt, "dd MMM yyyy"));
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind2(30, 17, discount_r22.createdAt, "h:mm a"));
    i0.ɵɵadvance(6);
    i0.ɵɵproperty("items", ctx_r0.discountRemoveActions);
} }
function StudentScholarshipsComponent_Conditional_8_Conditional_21_ForEmpty_77_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "tr")(1, "td", 105)(2, "div", 75);
    i0.ɵɵelement(3, "img", 58);
    i0.ɵɵelementStart(4, "strong");
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "span");
    i0.ɵɵtext(7);
    i0.ɵɵelementEnd()()()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("src", ctx_r0.discountSearch() ? ctx_r0.assets.noResults : ctx_r0.assets.discountTicket, i0.ɵɵsanitizeUrl);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r0.discountSearch() ? "No discounts match your search" : "No one-time discounts applied");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r0.discountSearch() ? "Try a different search term." : "Add an approved exception for a specific fee period.");
} }
function StudentScholarshipsComponent_Conditional_8_Conditional_21_Conditional_88_For_24_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 84);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ledger_r24 = ctx.$implicit;
    i0.ɵɵproperty("value", ledger_r24._id);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate2(" ", ledger_r24.periodLabel, " \u00B7 ", ledger_r24.academicSession, " ");
} }
function StudentScholarshipsComponent_Conditional_8_Conditional_21_Conditional_88_Template(rf, ctx) { if (rf & 1) {
    const _r23 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "section", 99)(1, "header", 106)(2, "div", 77)(3, "span", 78);
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(4, "svg", 107);
    i0.ɵɵelementEnd();
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(5, "div")(6, "h2");
    i0.ɵɵtext(7, "Add one-time discount");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "p");
    i0.ɵɵtext(9, "Apply an approved exception to one fee period.");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(10, "button", 108);
    i0.ɵɵlistener("click", function StudentScholarshipsComponent_Conditional_8_Conditional_21_Conditional_88_Template_button_click_10_listener() { i0.ɵɵrestoreView(_r23); const ctx_r0 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r0.discountPanelOpen.set(false)); });
    i0.ɵɵtext(11, " \u00D7 ");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(12, "div", 109)(13, "label")(14, "span");
    i0.ɵɵtext(15, "Discount name");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(16, "input", 110);
    i0.ɵɵtwoWayListener("ngModelChange", function StudentScholarshipsComponent_Conditional_8_Conditional_21_Conditional_88_Template_input_ngModelChange_16_listener($event) { i0.ɵɵrestoreView(_r23); const ctx_r0 = i0.ɵɵnextContext(3); i0.ɵɵtwoWayBindingSet(ctx_r0.discountName, $event) || (ctx_r0.discountName = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(17, "label")(18, "span");
    i0.ɵɵtext(19, "Fee period");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(20, "select", 82);
    i0.ɵɵtwoWayListener("ngModelChange", function StudentScholarshipsComponent_Conditional_8_Conditional_21_Conditional_88_Template_select_ngModelChange_20_listener($event) { i0.ɵɵrestoreView(_r23); const ctx_r0 = i0.ɵɵnextContext(3); i0.ɵɵtwoWayBindingSet(ctx_r0.discountLedgerId, $event) || (ctx_r0.discountLedgerId = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementStart(21, "option", 83);
    i0.ɵɵtext(22, "Select fee period");
    i0.ɵɵelementEnd();
    i0.ɵɵrepeaterCreate(23, StudentScholarshipsComponent_Conditional_8_Conditional_21_Conditional_88_For_24_Template, 2, 3, "option", 84, _forTrack0);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(25, "label")(26, "span");
    i0.ɵɵtext(27, "Calculation method");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(28, "select", 82);
    i0.ɵɵtwoWayListener("ngModelChange", function StudentScholarshipsComponent_Conditional_8_Conditional_21_Conditional_88_Template_select_ngModelChange_28_listener($event) { i0.ɵɵrestoreView(_r23); const ctx_r0 = i0.ɵɵnextContext(3); i0.ɵɵtwoWayBindingSet(ctx_r0.discountType, $event) || (ctx_r0.discountType = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementStart(29, "option", 88);
    i0.ɵɵtext(30, "Fixed amount");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(31, "option", 87);
    i0.ɵɵtext(32, "Percentage");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(33, "label")(34, "span");
    i0.ɵɵtext(35);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(36, "input", 89);
    i0.ɵɵtwoWayListener("ngModelChange", function StudentScholarshipsComponent_Conditional_8_Conditional_21_Conditional_88_Template_input_ngModelChange_36_listener($event) { i0.ɵɵrestoreView(_r23); const ctx_r0 = i0.ɵɵnextContext(3); i0.ɵɵtwoWayBindingSet(ctx_r0.discountValue, $event) || (ctx_r0.discountValue = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(37, "label", 111)(38, "span");
    i0.ɵɵtext(39, "Approval note");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(40, "textarea", 112);
    i0.ɵɵtwoWayListener("ngModelChange", function StudentScholarshipsComponent_Conditional_8_Conditional_21_Conditional_88_Template_textarea_ngModelChange_40_listener($event) { i0.ɵɵrestoreView(_r23); const ctx_r0 = i0.ɵɵnextContext(3); i0.ɵɵtwoWayBindingSet(ctx_r0.discountRemark, $event) || (ctx_r0.discountRemark = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(41, "small");
    i0.ɵɵtext(42, "Internal admin record only.");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(43, "footer")(44, "button", 86);
    i0.ɵɵlistener("click", function StudentScholarshipsComponent_Conditional_8_Conditional_21_Conditional_88_Template_button_click_44_listener() { i0.ɵɵrestoreView(_r23); const ctx_r0 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r0.createDiscount()); });
    i0.ɵɵtext(45);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(16);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r0.discountName);
    i0.ɵɵadvance(4);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r0.discountLedgerId);
    i0.ɵɵadvance(3);
    i0.ɵɵrepeater(ctx_r0.ledgers());
    i0.ɵɵadvance(5);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r0.discountType);
    i0.ɵɵadvance(7);
    i0.ɵɵtextInterpolate(ctx_r0.discountType === "percentage" ? "Percentage" : "Discount amount");
    i0.ɵɵadvance();
    i0.ɵɵproperty("max", ctx_r0.discountType === "percentage" ? 100 : 1000000000);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r0.discountValue);
    i0.ɵɵadvance(4);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r0.discountRemark);
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("disabled", ctx_r0.saving() || !ctx_r0.ledgers().length);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r0.saving() ? "Applying\u2026" : "Apply discount", " ");
} }
function StudentScholarshipsComponent_Conditional_8_Conditional_21_Conditional_89_Template(rf, ctx) { if (rf & 1) {
    const _r25 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "section", 100);
    i0.ɵɵelement(1, "img", 58);
    i0.ɵɵelementStart(2, "div")(3, "strong");
    i0.ɵɵtext(4, "Need to add a new one-time discount?");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "p");
    i0.ɵɵtext(6, "Apply an approved discount to a specific fee period.");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(7, "button", 38);
    i0.ɵɵlistener("click", function StudentScholarshipsComponent_Conditional_8_Conditional_21_Conditional_89_Template_button_click_7_listener() { i0.ɵɵrestoreView(_r25); const ctx_r0 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r0.discountPanelOpen.set(true)); });
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(8, "svg", 67);
    i0.ɵɵtext(9, " Add one-time discount ");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance();
    i0.ɵɵproperty("src", ctx_r0.assets.discountTicket, i0.ɵɵsanitizeUrl);
} }
function StudentScholarshipsComponent_Conditional_8_Conditional_21_Template(rf, ctx) { if (rf & 1) {
    const _r20 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "section", 90)(1, "div")(2, "span", 23);
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(3, "svg", 48);
    i0.ɵɵelementEnd();
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(4, "p")(5, "strong");
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "small");
    i0.ɵɵtext(8, "Active discounts");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(9, "div")(10, "span", 26);
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(11, "svg", 91);
    i0.ɵɵelementEnd();
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(12, "p")(13, "strong", 52);
    i0.ɵɵtext(14);
    i0.ɵɵpipe(15, "currency");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(16, "small");
    i0.ɵɵtext(17, "Total discount amount");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(18, "div")(19, "span", 29);
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(20, "svg", 92);
    i0.ɵɵelementEnd();
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(21, "p")(22, "strong");
    i0.ɵɵtext(23);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(24, "small");
    i0.ɵɵtext(25, "Fee periods affected");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(26, "div")(27, "span", 23);
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(28, "svg", 93);
    i0.ɵɵelementEnd();
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(29, "p")(30, "small");
    i0.ɵɵtext(31, "Last applied");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(32, "strong");
    i0.ɵɵtext(33);
    i0.ɵɵpipe(34, "date");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(35, "small");
    i0.ɵɵtext(36);
    i0.ɵɵpipe(37, "date");
    i0.ɵɵelementEnd()()()();
    i0.ɵɵelementStart(38, "section", 60)(39, "div", 61)(40, "div")(41, "h2");
    i0.ɵɵtext(42, " Active one-time discounts ");
    i0.ɵɵelementStart(43, "small");
    i0.ɵɵtext(44);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(45, "p");
    i0.ɵɵtext(46, "Approved exceptions applied to a specific fee period.");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(47, "div", 62)(48, "label", 63);
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(49, "svg", 64);
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(50, "input", 94);
    i0.ɵɵlistener("ngModelChange", function StudentScholarshipsComponent_Conditional_8_Conditional_21_Template_input_ngModelChange_50_listener($event) { i0.ɵɵrestoreView(_r20); const ctx_r0 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r0.discountSearch.set($event)); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(51, "button", 66);
    i0.ɵɵlistener("click", function StudentScholarshipsComponent_Conditional_8_Conditional_21_Template_button_click_51_listener() { i0.ɵɵrestoreView(_r20); const ctx_r0 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r0.discountPanelOpen.set(true)); });
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(52, "svg", 67);
    i0.ɵɵtext(53, " Add discount ");
    i0.ɵɵelementEnd()()();
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(54, "div", 40)(55, "table")(56, "thead")(57, "tr")(58, "th");
    i0.ɵɵtext(59, "Discount name");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(60, "th");
    i0.ɵɵtext(61, "Fee period");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(62, "th");
    i0.ɵɵtext(63, "Method");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(64, "th");
    i0.ɵɵtext(65, "Discount value");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(66, "th");
    i0.ɵɵtext(67, "Approval note");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(68, "th");
    i0.ɵɵtext(69, "Applied on");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(70, "th");
    i0.ɵɵtext(71, "Status");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(72, "th", 41);
    i0.ɵɵtext(73, "Actions");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(74, "tbody");
    i0.ɵɵrepeaterCreate(75, StudentScholarshipsComponent_Conditional_8_Conditional_21_For_76_Template, 36, 20, "tr", null, _forTrack0, false, StudentScholarshipsComponent_Conditional_8_Conditional_21_ForEmpty_77_Template, 8, 3, "tr");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(78, "footer", 95)(79, "span");
    i0.ɵɵtext(80);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(81, "span", 96)(82, "button", 97);
    i0.ɵɵtext(83, "\u2039");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(84, "b");
    i0.ɵɵtext(85, "1");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(86, "button", 98);
    i0.ɵɵtext(87, "\u203A");
    i0.ɵɵelementEnd()()()();
    i0.ɵɵconditionalCreate(88, StudentScholarshipsComponent_Conditional_8_Conditional_21_Conditional_88_Template, 46, 9, "section", 99)(89, StudentScholarshipsComponent_Conditional_8_Conditional_21_Conditional_89_Template, 10, 1, "section", 100);
    i0.ɵɵelementStart(90, "section", 49)(91, "span", 50);
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(92, "svg", 51);
    i0.ɵɵelementEnd();
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(93, "div")(94, "strong");
    i0.ɵɵtext(95, "How one-time discounts work");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(96, "p");
    i0.ɵɵtext(97, " One-time discounts apply only to the selected fee period and do not carry forward. If the fee period already has payments, discount removal may be restricted. ");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(98, "button", 101);
    i0.ɵɵtext(99, " Learn more ");
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(100, "svg", 59);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(6);
    i0.ɵɵtextInterpolate(ctx_r0.discounts().length);
    i0.ɵɵadvance(8);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind4(15, 11, ctx_r0.oneTimeDiscountTotal(), "INR", "symbol", "1.0-2"));
    i0.ɵɵadvance(9);
    i0.ɵɵtextInterpolate(ctx_r0.discountAffectedPeriods());
    i0.ɵɵadvance(10);
    i0.ɵɵtextInterpolate(ctx_r0.lastDiscountApplied() ? i0.ɵɵpipeBind2(34, 16, ctx_r0.lastDiscountApplied(), "dd MMM yyyy") : "Not yet");
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(ctx_r0.lastDiscountApplied() ? i0.ɵɵpipeBind2(37, 19, ctx_r0.lastDiscountApplied(), "h:mm a") : "No discount recorded");
    i0.ɵɵadvance(8);
    i0.ɵɵtextInterpolate(ctx_r0.discounts().length);
    i0.ɵɵadvance(6);
    i0.ɵɵproperty("ngModel", ctx_r0.discountSearch());
    i0.ɵɵadvance(25);
    i0.ɵɵrepeater(ctx_r0.filteredDiscounts());
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate2("Showing ", ctx_r0.filteredDiscounts().length, " of ", ctx_r0.discounts().length, " discounts");
    i0.ɵɵadvance(8);
    i0.ɵɵconditional(ctx_r0.discountPanelOpen() ? 88 : 89);
} }
function StudentScholarshipsComponent_Conditional_8_Conditional_22_For_76_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 84);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ledger_r27 = ctx.$implicit;
    i0.ɵɵproperty("value", ledger_r27._id);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate2(" ", ledger_r27.periodLabel, " (", ledger_r27.academicSession, ") ");
} }
function StudentScholarshipsComponent_Conditional_8_Conditional_22_Conditional_80_For_2_Conditional_32_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "th", 146);
    i0.ɵɵtext(1, " Scholarships ");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(5);
    i0.ɵɵattribute("colspan", ctx_r0.assignments().length);
} }
function StudentScholarshipsComponent_Conditional_8_Conditional_22_Conditional_80_For_2_Conditional_33_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "th", 147);
    i0.ɵɵtext(1, " One-time discount ");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(5);
    i0.ɵɵattribute("colspan", ctx_r0.discounts().length);
} }
function StudentScholarshipsComponent_Conditional_8_Conditional_22_Conditional_80_For_2_For_44_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "th", 148);
    i0.ɵɵtext(1);
    i0.ɵɵelementStart(2, "small");
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const assignment_r28 = ctx.$implicit;
    const ctx_r0 = i0.ɵɵnextContext(5);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", assignment_r28.scholarshipName, " ");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1("(", ctx_r0.assignmentValue(assignment_r28) ?? "Fixed", ")");
} }
function StudentScholarshipsComponent_Conditional_8_Conditional_22_Conditional_80_For_2_For_46_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "th", 149);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const discount_r29 = ctx.$implicit;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", discount_r29.name, " ");
} }
function StudentScholarshipsComponent_Conditional_8_Conditional_22_Conditional_80_For_2_For_49_For_11_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td", 52);
    i0.ɵɵtext(1);
    i0.ɵɵpipe(2, "currency");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const assignment_r30 = ctx.$implicit;
    const entry_r31 = i0.ɵɵnextContext().$implicit;
    const ledger_r32 = i0.ɵɵnextContext().$implicit;
    const ctx_r0 = i0.ɵɵnextContext(4);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r0.scholarshipImpact(ledger_r32, assignment_r30, entry_r31.feeHeadName) ? "\u2212 " + i0.ɵɵpipeBind4(2, 1, ctx_r0.scholarshipImpact(ledger_r32, assignment_r30, entry_r31.feeHeadName), "INR", "symbol", "1.0-2") : "\u2014", " ");
} }
function StudentScholarshipsComponent_Conditional_8_Conditional_22_Conditional_80_For_2_For_49_For_13_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td", 150);
    i0.ɵɵtext(1);
    i0.ɵɵpipe(2, "currency");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const discount_r33 = ctx.$implicit;
    const entry_r31 = i0.ɵɵnextContext().$implicit;
    const ledger_r32 = i0.ɵɵnextContext().$implicit;
    const ctx_r0 = i0.ɵɵnextContext(4);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r0.discountImpact(ledger_r32, discount_r33, entry_r31.feeHeadName) ? "\u2212 " + i0.ɵɵpipeBind4(2, 1, ctx_r0.discountImpact(ledger_r32, discount_r33, entry_r31.feeHeadName), "INR", "symbol", "1.0-2") : "\u2014", " ");
} }
function StudentScholarshipsComponent_Conditional_8_Conditional_22_Conditional_80_For_2_For_49_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "tr")(1, "td")(2, "span", 152);
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(3, "svg", 153);
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(4, "strong");
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(6, "td")(7, "strong");
    i0.ɵɵtext(8);
    i0.ɵɵpipe(9, "currency");
    i0.ɵɵelementEnd()();
    i0.ɵɵrepeaterCreate(10, StudentScholarshipsComponent_Conditional_8_Conditional_22_Conditional_80_For_2_For_49_For_11_Template, 3, 6, "td", 52, _forTrack0);
    i0.ɵɵrepeaterCreate(12, StudentScholarshipsComponent_Conditional_8_Conditional_22_Conditional_80_For_2_For_49_For_13_Template, 3, 6, "td", 150, _forTrack0);
    i0.ɵɵelementStart(14, "td")(15, "strong", 53);
    i0.ɵɵtext(16);
    i0.ɵɵpipe(17, "currency");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(18, "td");
    i0.ɵɵtext(19);
    i0.ɵɵpipe(20, "currency");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(21, "td");
    i0.ɵɵtext(22);
    i0.ɵɵpipe(23, "currency");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(24, "td")(25, "span", 54);
    i0.ɵɵtext(26);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const entry_r31 = ctx.$implicit;
    const ctx_r0 = i0.ɵɵnextContext(5);
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(entry_r31.feeHeadName);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind4(9, 12, entry_r31.amount, "INR", "symbol", "1.0-2"));
    i0.ɵɵadvance(2);
    i0.ɵɵrepeater(ctx_r0.assignments());
    i0.ɵɵadvance(2);
    i0.ɵɵrepeater(ctx_r0.discounts());
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind4(17, 17, ctx_r0.feeHeadNetAmount(entry_r31), "INR", "symbol", "1.0-2"));
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind4(20, 22, entry_r31.paidAmount, "INR", "symbol", "1.0-2"));
    i0.ɵɵadvance(2);
    i0.ɵɵclassProp("amount-due", entry_r31.balanceAmount > 0);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind4(23, 27, entry_r31.balanceAmount, "INR", "symbol", "1.0-2"), " ");
    i0.ɵɵadvance(3);
    i0.ɵɵclassProp("fee-status--paid", entry_r31.status === "paid")("fee-status--partial", entry_r31.status === "partial");
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r0.statusLabel(entry_r31.status));
} }
function StudentScholarshipsComponent_Conditional_8_Conditional_22_Conditional_80_For_2_ForEmpty_50_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "tr")(1, "td", 154);
    i0.ɵɵtext(2, " No fee-head entries exist for this period. ");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(5);
    i0.ɵɵadvance();
    i0.ɵɵattribute("colspan", 6 + ctx_r0.assignments().length + ctx_r0.discounts().length);
} }
function StudentScholarshipsComponent_Conditional_8_Conditional_22_Conditional_80_For_2_For_59_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "th", 52);
    i0.ɵɵtext(1);
    i0.ɵɵpipe(2, "currency");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const assignment_r34 = ctx.$implicit;
    const ledger_r32 = i0.ɵɵnextContext().$implicit;
    const ctx_r0 = i0.ɵɵnextContext(4);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" \u2212 ", i0.ɵɵpipeBind4(2, 1, ctx_r0.scholarshipImpact(ledger_r32, assignment_r34, "Tuition Fee"), "INR", "symbol", "1.0-2"), " ");
} }
function StudentScholarshipsComponent_Conditional_8_Conditional_22_Conditional_80_For_2_For_61_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "th", 150);
    i0.ɵɵtext(1);
    i0.ɵɵpipe(2, "currency");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const discount_r35 = ctx.$implicit;
    const ledger_r32 = i0.ɵɵnextContext().$implicit;
    const ctx_r0 = i0.ɵɵnextContext(4);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" \u2212 ", i0.ɵɵpipeBind4(2, 1, ctx_r0.discountImpact(ledger_r32, discount_r35, "Tuition Fee"), "INR", "symbol", "1.0-2"), " ");
} }
function StudentScholarshipsComponent_Conditional_8_Conditional_22_Conditional_80_For_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "section", 138)(1, "header", 139)(2, "div", 140)(3, "span", 78);
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(4, "svg", 141);
    i0.ɵɵelementEnd();
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(5, "div")(6, "h2");
    i0.ɵɵtext(7);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "p");
    i0.ɵɵtext(9);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(10, "div", 142)(11, "span");
    i0.ɵɵtext(12, "Payable");
    i0.ɵɵelementStart(13, "strong");
    i0.ɵɵtext(14);
    i0.ɵɵpipe(15, "currency");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(16, "span");
    i0.ɵɵtext(17, "Outstanding");
    i0.ɵɵelementStart(18, "strong");
    i0.ɵɵtext(19);
    i0.ɵɵpipe(20, "currency");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(21, "span", 54);
    i0.ɵɵtext(22);
    i0.ɵɵpipe(23, "titlecase");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(24, "div", 40)(25, "table", 143)(26, "thead", 144)(27, "tr")(28, "th", 145);
    i0.ɵɵtext(29, "Fee head");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(30, "th", 145);
    i0.ɵɵtext(31, "Gross amount");
    i0.ɵɵelementEnd();
    i0.ɵɵconditionalCreate(32, StudentScholarshipsComponent_Conditional_8_Conditional_22_Conditional_80_For_2_Conditional_32_Template, 2, 1, "th", 146);
    i0.ɵɵconditionalCreate(33, StudentScholarshipsComponent_Conditional_8_Conditional_22_Conditional_80_For_2_Conditional_33_Template, 2, 1, "th", 147);
    i0.ɵɵelementStart(34, "th", 145);
    i0.ɵɵtext(35, "Net impact");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(36, "th", 145);
    i0.ɵɵtext(37, "Paid");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(38, "th", 145);
    i0.ɵɵtext(39, "Balance");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(40, "th", 145);
    i0.ɵɵtext(41, "Status");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(42, "tr");
    i0.ɵɵrepeaterCreate(43, StudentScholarshipsComponent_Conditional_8_Conditional_22_Conditional_80_For_2_For_44_Template, 4, 2, "th", 148, _forTrack0);
    i0.ɵɵrepeaterCreate(45, StudentScholarshipsComponent_Conditional_8_Conditional_22_Conditional_80_For_2_For_46_Template, 2, 1, "th", 149, _forTrack0);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(47, "tbody");
    i0.ɵɵrepeaterCreate(48, StudentScholarshipsComponent_Conditional_8_Conditional_22_Conditional_80_For_2_For_49_Template, 27, 32, "tr", null, _forTrack1, false, StudentScholarshipsComponent_Conditional_8_Conditional_22_Conditional_80_For_2_ForEmpty_50_Template, 3, 1, "tr");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(51, "tfoot")(52, "tr")(53, "th");
    i0.ɵɵtext(54);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(55, "th");
    i0.ɵɵtext(56);
    i0.ɵɵpipe(57, "currency");
    i0.ɵɵelementEnd();
    i0.ɵɵrepeaterCreate(58, StudentScholarshipsComponent_Conditional_8_Conditional_22_Conditional_80_For_2_For_59_Template, 3, 6, "th", 52, _forTrack0);
    i0.ɵɵrepeaterCreate(60, StudentScholarshipsComponent_Conditional_8_Conditional_22_Conditional_80_For_2_For_61_Template, 3, 6, "th", 150, _forTrack0);
    i0.ɵɵelementStart(62, "th", 53);
    i0.ɵɵtext(63);
    i0.ɵɵpipe(64, "currency");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(65, "th");
    i0.ɵɵtext(66);
    i0.ɵɵpipe(67, "currency");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(68, "th", 151);
    i0.ɵɵtext(69);
    i0.ɵɵpipe(70, "currency");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(71, "th")(72, "span", 54);
    i0.ɵɵtext(73);
    i0.ɵɵelementEnd()()()()()()();
} if (rf & 2) {
    const ledger_r32 = ctx.$implicit;
    const ctx_r0 = i0.ɵɵnextContext(4);
    i0.ɵɵadvance(7);
    i0.ɵɵtextInterpolate(ledger_r32.periodLabel);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate3(" ", ledger_r32.academicSession, " \u00B7 ", ledger_r32.feeBookCode, " \u00B7 ", ledger_r32.name, " ");
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind4(15, 22, ledger_r32.totalAmount, "INR", "symbol", "1.0-2"));
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind4(20, 27, ledger_r32.balanceAmount, "INR", "symbol", "1.0-2"));
    i0.ɵɵadvance(2);
    i0.ɵɵclassProp("fee-status--paid", ledger_r32.paymentStatus === "paid")("fee-status--partial", ledger_r32.paymentStatus === "partial");
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ledger_r32.paymentStatus === "partial" ? "Part paid" : i0.ɵɵpipeBind1(23, 32, ledger_r32.paymentStatus));
    i0.ɵɵadvance(10);
    i0.ɵɵconditional(ctx_r0.assignments().length ? 32 : -1);
    i0.ɵɵadvance();
    i0.ɵɵconditional(ctx_r0.discounts().length ? 33 : -1);
    i0.ɵɵadvance(10);
    i0.ɵɵrepeater(ctx_r0.assignments());
    i0.ɵɵadvance(2);
    i0.ɵɵrepeater(ctx_r0.discounts());
    i0.ɵɵadvance(3);
    i0.ɵɵrepeater(ctx_r0.feeHeadEntries(ledger_r32));
    i0.ɵɵadvance(6);
    i0.ɵɵtextInterpolate1("Total (", ledger_r32.periodLabel, ")");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind4(57, 34, ledger_r32.chargeAmount, "INR", "symbol", "1.0-2"), " ");
    i0.ɵɵadvance(2);
    i0.ɵɵrepeater(ctx_r0.assignments());
    i0.ɵɵadvance(2);
    i0.ɵɵrepeater(ctx_r0.discounts());
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind4(64, 39, ledger_r32.totalAmount, "INR", "symbol", "1.0-2"), " ");
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind4(67, 44, ledger_r32.paidAmount, "INR", "symbol", "1.0-2"));
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind4(70, 49, ledger_r32.balanceAmount, "INR", "symbol", "1.0-2"), " ");
    i0.ɵɵadvance(3);
    i0.ɵɵclassProp("fee-status--paid", ledger_r32.paymentStatus === "paid");
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ledger_r32.paymentStatus === "paid" ? "Paid" : "Due");
} }
function StudentScholarshipsComponent_Conditional_8_Conditional_22_Conditional_80_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 125);
    i0.ɵɵrepeaterCreate(1, StudentScholarshipsComponent_Conditional_8_Conditional_22_Conditional_80_For_2_Template, 74, 54, "section", 138, _forTrack0);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance();
    i0.ɵɵrepeater(ctx_r0.visibleImpactLedgers());
} }
function StudentScholarshipsComponent_Conditional_8_Conditional_22_Conditional_81_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 126);
    i0.ɵɵelement(1, "img", 58);
    i0.ɵɵelementStart(2, "strong");
    i0.ɵɵtext(3, "No academic fee ledger yet");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "span");
    i0.ɵɵtext(5, "Fee impact will appear when the student's fee period is generated.");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance();
    i0.ɵɵproperty("src", ctx_r0.assets.campusUnavailable, i0.ɵɵsanitizeUrl);
} }
function StudentScholarshipsComponent_Conditional_8_Conditional_22_Template(rf, ctx) { if (rf & 1) {
    const _r26 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "section", 113)(1, "div")(2, "span", 23);
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(3, "svg", 24);
    i0.ɵɵelementEnd();
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(4, "span");
    i0.ɵɵtext(5, "Total fees (Gross)");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "strong");
    i0.ɵɵtext(7);
    i0.ɵɵpipe(8, "currency");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(9, "small");
    i0.ɵɵtext(10, "Before concessions");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(11, "div", 114)(12, "span", 26);
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(13, "svg", 27);
    i0.ɵɵelementEnd();
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(14, "span");
    i0.ɵɵtext(15, "Total concessions");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(16, "strong");
    i0.ɵɵtext(17);
    i0.ɵɵpipe(18, "currency");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(19, "small");
    i0.ɵɵtext(20, "Scholarships & discounts");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(21, "div")(22, "span", 23);
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(23, "svg", 28);
    i0.ɵɵelementEnd();
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(24, "span");
    i0.ɵɵtext(25, "Net payable");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(26, "strong");
    i0.ɵɵtext(27);
    i0.ɵɵpipe(28, "currency");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(29, "small");
    i0.ɵɵtext(30, "After concessions");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(31, "div")(32, "span", 29);
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(33, "svg", 30);
    i0.ɵɵelementEnd();
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(34, "span");
    i0.ɵɵtext(35, "Paid amount");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(36, "strong");
    i0.ɵɵtext(37);
    i0.ɵɵpipe(38, "currency");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(39, "small");
    i0.ɵɵtext(40, "Total payments made");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(41, "div", 115)(42, "span", 32);
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(43, "svg", 24);
    i0.ɵɵelementEnd();
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(44, "span");
    i0.ɵɵtext(45, "Outstanding");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(46, "strong");
    i0.ɵɵtext(47);
    i0.ɵɵpipe(48, "currency");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(49, "small");
    i0.ɵɵtext(50, "Current balance");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(51, "div")(52, "span", 23);
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(53, "svg", 116);
    i0.ɵɵelementEnd();
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(54, "span");
    i0.ɵɵtext(55, "Last recalculated");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(56, "strong");
    i0.ɵɵtext(57);
    i0.ɵɵpipe(58, "date");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(59, "small");
    i0.ɵɵtext(60);
    i0.ɵɵpipe(61, "date");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(62, "div", 117)(63, "div", 118)(64, "section", 119)(65, "div", 37)(66, "div")(67, "h2");
    i0.ɵɵtext(68, "Fee head impact breakdown");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(69, "p");
    i0.ɵɵtext(70, "Detailed impact of each fee head after applying scholarships and discounts.");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(71, "div", 62)(72, "label", 120);
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(73, "svg", 121);
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(74, "select", 122);
    i0.ɵɵlistener("ngModelChange", function StudentScholarshipsComponent_Conditional_8_Conditional_22_Template_select_ngModelChange_74_listener($event) { i0.ɵɵrestoreView(_r26); const ctx_r0 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r0.selectedImpactLedgerId.set($event)); });
    i0.ɵɵrepeaterCreate(75, StudentScholarshipsComponent_Conditional_8_Conditional_22_For_76_Template, 2, 3, "option", 84, _forTrack0);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(77, "button", 123);
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(78, "svg", 124);
    i0.ɵɵtext(79, " Export ");
    i0.ɵɵelementEnd()()();
    i0.ɵɵconditionalCreate(80, StudentScholarshipsComponent_Conditional_8_Conditional_22_Conditional_80_Template, 3, 0, "div", 125)(81, StudentScholarshipsComponent_Conditional_8_Conditional_22_Conditional_81_Template, 6, 1, "div", 126);
    i0.ɵɵelementEnd();
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(82, "section", 127)(83, "span", 50);
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(84, "svg", 51);
    i0.ɵɵelementEnd();
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(85, "div")(86, "p");
    i0.ɵɵtext(87, "Concessions apply to future and unpaid periods. Paid amounts remain unchanged.");
    i0.ɵɵelementEnd()()()();
    i0.ɵɵelementStart(88, "aside", 128)(89, "section", 129)(90, "header")(91, "h2");
    i0.ɵɵtext(92, "Key insights");
    i0.ɵɵelementEnd();
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(93, "svg", 130);
    i0.ɵɵelementEnd();
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(94, "div", 131)(95, "span");
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(96, "svg", 30);
    i0.ɵɵelementEnd();
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(97, "div")(98, "strong");
    i0.ɵɵtext(99, "Concessions applied");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(100, "small");
    i0.ɵɵtext(101);
    i0.ɵɵpipe(102, "currency");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(103, "div", 132)(104, "span");
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(105, "svg", 24);
    i0.ɵɵelementEnd();
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(106, "div")(107, "strong");
    i0.ɵɵtext(108, "Next due");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(109, "small");
    i0.ɵɵtext(110);
    i0.ɵɵpipe(111, "currency");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(112, "div", 133)(113, "span");
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(114, "svg", 28);
    i0.ɵɵelementEnd();
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(115, "div")(116, "strong");
    i0.ɵɵtext(117, "Most impact");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(118, "small");
    i0.ɵɵtext(119);
    i0.ɵɵpipe(120, "currency");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(121, "div", 134)(122, "span");
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(123, "svg", 34);
    i0.ɵɵelementEnd();
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(124, "div")(125, "strong");
    i0.ɵɵtext(126, "Periods affected");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(127, "small");
    i0.ɵɵtext(128);
    i0.ɵɵelementEnd()()()();
    i0.ɵɵelementStart(129, "section", 135)(130, "div")(131, "h2");
    i0.ɵɵtext(132, "Need to recalculate?");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(133, "p");
    i0.ɵɵtext(134, "Recalculate fee impact if any scholarship or discount changes.");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(135, "button", 136);
    i0.ɵɵlistener("click", function StudentScholarshipsComponent_Conditional_8_Conditional_22_Template_button_click_135_listener() { i0.ɵɵrestoreView(_r26); const ctx_r0 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r0.load()); });
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(136, "svg", 137);
    i0.ɵɵtext(137);
    i0.ɵɵelementEnd()()()();
} if (rf & 2) {
    let tmp_15_0;
    let tmp_16_0;
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(7);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind4(8, 17, ctx_r0.totalCharges(), "INR", "symbol", "1.0-2"));
    i0.ɵɵadvance(10);
    i0.ɵɵtextInterpolate1("\u2212 ", i0.ɵɵpipeBind4(18, 22, ctx_r0.totalDiscounts(), "INR", "symbol", "1.0-2"));
    i0.ɵɵadvance(10);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind4(28, 27, ctx_r0.totalPayable(), "INR", "symbol", "1.0-2"));
    i0.ɵɵadvance(10);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind4(38, 32, ctx_r0.totalPaid(), "INR", "symbol", "1.0-2"));
    i0.ɵɵadvance(10);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind4(48, 37, ctx_r0.totalBalance(), "INR", "symbol", "1.0-2"));
    i0.ɵɵadvance(10);
    i0.ɵɵtextInterpolate(ctx_r0.lastRecalculated() ? i0.ɵɵpipeBind2(58, 42, ctx_r0.lastRecalculated(), "dd MMM yyyy") : "Not yet");
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(ctx_r0.lastRecalculated() ? i0.ɵɵpipeBind2(61, 45, ctx_r0.lastRecalculated(), "h:mm a") : "Awaiting ledger");
    i0.ɵɵadvance(14);
    i0.ɵɵproperty("ngModel", ctx_r0.selectedImpactLedgerId());
    i0.ɵɵadvance();
    i0.ɵɵrepeater(ctx_r0.ledgers());
    i0.ɵɵadvance(5);
    i0.ɵɵconditional(ctx_r0.visibleImpactLedgers().length ? 80 : 81);
    i0.ɵɵadvance(21);
    i0.ɵɵtextInterpolate1("", i0.ɵɵpipeBind4(102, 48, ctx_r0.totalDiscounts(), "INR", "symbol", "1.0-2"), " saved from total fees");
    i0.ɵɵadvance(9);
    i0.ɵɵtextInterpolate1("", i0.ɵɵpipeBind4(111, 53, ctx_r0.totalBalance(), "INR", "symbol", "1.0-2"), " is due");
    i0.ɵɵadvance(9);
    i0.ɵɵtextInterpolate1("Tuition Fee \u00B7 ", i0.ɵɵpipeBind4(120, 58, (tmp_15_0 = ctx_r0.mostImpactfulLedger()) == null ? null : tmp_15_0.discountAmount, "INR", "symbol", "1.0-2"), " total concession");
    i0.ɵɵadvance(9);
    i0.ɵɵtextInterpolate3("", ctx_r0.affectedPeriods(), " fee period", ctx_r0.affectedPeriods() === 1 ? "" : "s", " \u00B7 ", ((tmp_16_0 = ctx_r0.mostImpactfulLedger()) == null ? null : tmp_16_0.periodLabel) || "No period");
    i0.ɵɵadvance(7);
    i0.ɵɵproperty("disabled", ctx_r0.loading());
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", ctx_r0.loading() ? "Recalculating\u2026" : "Recalculate now", " ");
} }
function StudentScholarshipsComponent_Conditional_8_Template(rf, ctx) { if (rf & 1) {
    const _r2 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "nav", 9)(1, "button", 10);
    i0.ɵɵlistener("click", function StudentScholarshipsComponent_Conditional_8_Template_button_click_1_listener() { i0.ɵɵrestoreView(_r2); const ctx_r0 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r0.activeTab.set("overview")); });
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(2, "svg", 11);
    i0.ɵɵtext(3, " Overview ");
    i0.ɵɵelementEnd();
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(4, "button", 10);
    i0.ɵɵlistener("click", function StudentScholarshipsComponent_Conditional_8_Template_button_click_4_listener() { i0.ɵɵrestoreView(_r2); const ctx_r0 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r0.activeTab.set("scholarships")); });
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(5, "svg", 12);
    i0.ɵɵtext(6, " Scholarships ");
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(7, "small");
    i0.ɵɵtext(8);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(9, "button", 10);
    i0.ɵɵlistener("click", function StudentScholarshipsComponent_Conditional_8_Template_button_click_9_listener() { i0.ɵɵrestoreView(_r2); const ctx_r0 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r0.activeTab.set("discounts")); });
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(10, "svg", 13);
    i0.ɵɵtext(11, " One-time discounts ");
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(12, "small");
    i0.ɵɵtext(13);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(14, "button", 10);
    i0.ɵɵlistener("click", function StudentScholarshipsComponent_Conditional_8_Template_button_click_14_listener() { i0.ɵɵrestoreView(_r2); const ctx_r0 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r0.activeTab.set("impact")); });
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(15, "svg", 14);
    i0.ɵɵtext(16, " Fee impact ");
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(17, "small");
    i0.ɵɵtext(18);
    i0.ɵɵelementEnd()()();
    i0.ɵɵconditionalCreate(19, StudentScholarshipsComponent_Conditional_8_Conditional_19_Template, 166, 47);
    i0.ɵɵconditionalCreate(20, StudentScholarshipsComponent_Conditional_8_Conditional_20_Template, 50, 6);
    i0.ɵɵconditionalCreate(21, StudentScholarshipsComponent_Conditional_8_Conditional_21_Template, 101, 22);
    i0.ɵɵconditionalCreate(22, StudentScholarshipsComponent_Conditional_8_Conditional_22_Template, 138, 63);
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵclassProp("is-active", ctx_r0.activeTab() === "overview");
    i0.ɵɵadvance(3);
    i0.ɵɵclassProp("is-active", ctx_r0.activeTab() === "scholarships");
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(ctx_r0.assignments().length);
    i0.ɵɵadvance();
    i0.ɵɵclassProp("is-active", ctx_r0.activeTab() === "discounts");
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(ctx_r0.discounts().length);
    i0.ɵɵadvance();
    i0.ɵɵclassProp("is-active", ctx_r0.activeTab() === "impact");
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(ctx_r0.ledgers().length);
    i0.ɵɵadvance();
    i0.ɵɵconditional(ctx_r0.activeTab() === "overview" ? 19 : -1);
    i0.ɵɵadvance();
    i0.ɵɵconditional(ctx_r0.activeTab() === "scholarships" ? 20 : -1);
    i0.ɵɵadvance();
    i0.ɵɵconditional(ctx_r0.activeTab() === "discounts" ? 21 : -1);
    i0.ɵɵadvance();
    i0.ɵɵconditional(ctx_r0.activeTab() === "impact" ? 22 : -1);
} }
function StudentScholarshipsComponent_Conditional_9_Template(rf, ctx) { if (rf & 1) {
    const _r36 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "erp-confirm-dialog", 155);
    i0.ɵɵlistener("cancelled", function StudentScholarshipsComponent_Conditional_9_Template_erp_confirm_dialog_cancelled_0_listener() { i0.ɵɵrestoreView(_r36); const ctx_r0 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r0.cancelRemove()); })("confirmed", function StudentScholarshipsComponent_Conditional_9_Template_erp_confirm_dialog_confirmed_0_listener() { const assignment_r37 = i0.ɵɵrestoreView(_r36); const ctx_r0 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r0.remove(assignment_r37)); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    i0.ɵɵproperty("message", "Remove " + ctx.scholarshipName + " from future and unpaid fee periods? Paid records are preserved.");
} }
function StudentScholarshipsComponent_Conditional_10_Template(rf, ctx) { if (rf & 1) {
    const _r38 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "erp-confirm-dialog", 156);
    i0.ɵɵlistener("cancelled", function StudentScholarshipsComponent_Conditional_10_Template_erp_confirm_dialog_cancelled_0_listener() { i0.ɵɵrestoreView(_r38); const ctx_r0 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r0.cancelDiscountRemove()); })("confirmed", function StudentScholarshipsComponent_Conditional_10_Template_erp_confirm_dialog_confirmed_0_listener() { const discount_r39 = i0.ɵɵrestoreView(_r38); const ctx_r0 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r0.removeDiscount(discount_r39)); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const discount_r39 = ctx;
    i0.ɵɵproperty("message", "Remove " + discount_r39.name + " from " + discount_r39.targetPeriodLabel + "? Paid records are preserved.");
} }
export class StudentScholarshipsComponent {
    api = inject(ApiService);
    route = inject(ActivatedRoute);
    student = signal(null, ...(ngDevMode ? [{ debugName: "student" }] : /* istanbul ignore next */ []));
    assignments = signal([], ...(ngDevMode ? [{ debugName: "assignments" }] : /* istanbul ignore next */ []));
    scholarships = signal([], ...(ngDevMode ? [{ debugName: "scholarships" }] : /* istanbul ignore next */ []));
    discounts = signal([], ...(ngDevMode ? [{ debugName: "discounts" }] : /* istanbul ignore next */ []));
    ledgers = signal([], ...(ngDevMode ? [{ debugName: "ledgers" }] : /* istanbul ignore next */ []));
    loading = signal(true, ...(ngDevMode ? [{ debugName: "loading" }] : /* istanbul ignore next */ []));
    saving = signal(false, ...(ngDevMode ? [{ debugName: "saving" }] : /* istanbul ignore next */ []));
    error = signal('', ...(ngDevMode ? [{ debugName: "error" }] : /* istanbul ignore next */ []));
    message = signal('', ...(ngDevMode ? [{ debugName: "message" }] : /* istanbul ignore next */ []));
    removingId = signal(null, ...(ngDevMode ? [{ debugName: "removingId" }] : /* istanbul ignore next */ []));
    removingDiscountId = signal(null, ...(ngDevMode ? [{ debugName: "removingDiscountId" }] : /* istanbul ignore next */ []));
    activeTab = signal('overview', ...(ngDevMode ? [{ debugName: "activeTab" }] : /* istanbul ignore next */ []));
    scholarshipPanelOpen = signal(false, ...(ngDevMode ? [{ debugName: "scholarshipPanelOpen" }] : /* istanbul ignore next */ []));
    discountPanelOpen = signal(false, ...(ngDevMode ? [{ debugName: "discountPanelOpen" }] : /* istanbul ignore next */ []));
    scholarshipSearch = signal('', ...(ngDevMode ? [{ debugName: "scholarshipSearch" }] : /* istanbul ignore next */ []));
    discountSearch = signal('', ...(ngDevMode ? [{ debugName: "discountSearch" }] : /* istanbul ignore next */ []));
    selectedImpactLedgerId = signal('', ...(ngDevMode ? [{ debugName: "selectedImpactLedgerId" }] : /* istanbul ignore next */ []));
    pageTitle = computed(() => this.activeTab() === 'impact' ? 'Fee impact' : 'Scholarships & discounts', ...(ngDevMode ? [{ debugName: "pageTitle" }] : /* istanbul ignore next */ []));
    pageDescription = computed(() => {
        if (this.activeTab() === 'impact')
            return "See how scholarships and discounts affect the student's fee account.";
        if (this.activeTab() === 'discounts')
            return 'Manage approved one-time discounts and review their impact on the student fee account.';
        return 'Manage tuition concessions and review their impact on the student fee account.';
    }, ...(ngDevMode ? [{ debugName: "pageDescription" }] : /* istanbul ignore next */ []));
    assets = {
        feeWallet: '/assets/images/scholarships/illustration-fee-wallet.png',
        campusUnavailable: '/assets/images/scholarships/illustration-campus-unavailable.png',
        noResults: '/assets/images/scholarships/illustration-no-results.png',
        pendingReview: '/assets/images/scholarships/illustration-pending-review.png',
        emptyScholarships: '/assets/images/scholarships/illustration-empty-scholarships.png',
        addStudent: '/assets/images/scholarships/illustration-add-student.png',
        discountTicket: '/assets/images/scholarships/illustration-discount-ticket.png',
    };
    removeActions = [
        { id: 'remove', label: 'Remove assignment', icon: 'delete', destructive: true },
    ];
    discountRemoveActions = [
        { id: 'remove', label: 'Remove discount', icon: 'delete', destructive: true },
    ];
    availableScholarships = computed(() => {
        const assigned = new Set(this.assignments().map((item) => item.scholarshipId));
        return this.scholarships().filter((item) => item.isActive &&
            (item.valueMode === 'custom' || Number(item.value || 0) > 0) &&
            !assigned.has(item._id));
    }, ...(ngDevMode ? [{ debugName: "availableScholarships" }] : /* istanbul ignore next */ []));
    selectedScholarship() {
        return this.availableScholarships().find((item) => item._id === this.scholarshipId());
    }
    removingAssignment = computed(() => this.assignments().find((item) => item._id === this.removingId()), ...(ngDevMode ? [{ debugName: "removingAssignment" }] : /* istanbul ignore next */ []));
    removingDiscount = computed(() => this.discounts().find((item) => item._id === this.removingDiscountId()), ...(ngDevMode ? [{ debugName: "removingDiscount" }] : /* istanbul ignore next */ []));
    totalCharges = computed(() => this.ledgers().reduce((sum, ledger) => sum + Number(ledger.chargeAmount || 0), 0), ...(ngDevMode ? [{ debugName: "totalCharges" }] : /* istanbul ignore next */ []));
    totalDiscounts = computed(() => this.ledgers().reduce((sum, ledger) => sum + Number(ledger.discountAmount || 0), 0), ...(ngDevMode ? [{ debugName: "totalDiscounts" }] : /* istanbul ignore next */ []));
    totalPayable = computed(() => this.ledgers().reduce((sum, ledger) => sum + Number(ledger.totalAmount || 0), 0), ...(ngDevMode ? [{ debugName: "totalPayable" }] : /* istanbul ignore next */ []));
    totalPaid = computed(() => this.ledgers().reduce((sum, ledger) => sum + Number(ledger.paidAmount || 0), 0), ...(ngDevMode ? [{ debugName: "totalPaid" }] : /* istanbul ignore next */ []));
    totalBalance = computed(() => this.ledgers().reduce((sum, ledger) => sum + Number(ledger.balanceAmount || 0), 0), ...(ngDevMode ? [{ debugName: "totalBalance" }] : /* istanbul ignore next */ []));
    oneTimeDiscountTotal = computed(() => this.ledgers().reduce((sum, ledger) => sum + this.oneTimeDiscountAmount(ledger), 0), ...(ngDevMode ? [{ debugName: "oneTimeDiscountTotal" }] : /* istanbul ignore next */ []));
    discountAffectedPeriods = computed(() => this.ledgers().filter((ledger) => this.oneTimeDiscountAmount(ledger) > 0).length, ...(ngDevMode ? [{ debugName: "discountAffectedPeriods" }] : /* istanbul ignore next */ []));
    lastDiscountApplied = computed(() => {
        const dates = this.discounts()
            .map((discount) => discount.createdAt)
            .filter(Boolean)
            .sort();
        return dates[dates.length - 1] || '';
    }, ...(ngDevMode ? [{ debugName: "lastDiscountApplied" }] : /* istanbul ignore next */ []));
    filteredAssignments = computed(() => {
        const query = this.scholarshipSearch().trim().toLowerCase();
        if (!query)
            return this.assignments();
        return this.assignments().filter((item) => [item.scholarshipName, item.type, item.recurring ? 'recurring' : 'one-time']
            .join(' ')
            .toLowerCase()
            .includes(query));
    }, ...(ngDevMode ? [{ debugName: "filteredAssignments" }] : /* istanbul ignore next */ []));
    filteredDiscounts = computed(() => {
        const query = this.discountSearch().trim().toLowerCase();
        if (!query)
            return this.discounts();
        return this.discounts().filter((item) => [item.name, item.type, item.targetPeriodLabel, item.internalRemark]
            .join(' ')
            .toLowerCase()
            .includes(query));
    }, ...(ngDevMode ? [{ debugName: "filteredDiscounts" }] : /* istanbul ignore next */ []));
    lastRecalculated = computed(() => {
        const dates = this.ledgers()
            .map((ledger) => ledger.createdAt)
            .filter(Boolean)
            .sort();
        return dates[dates.length - 1] || '';
    }, ...(ngDevMode ? [{ debugName: "lastRecalculated" }] : /* istanbul ignore next */ []));
    mostImpactfulLedger = computed(() => this.ledgers().reduce((selected, ledger) => !selected || Number(ledger.discountAmount || 0) > Number(selected.discountAmount || 0)
        ? ledger
        : selected, null), ...(ngDevMode ? [{ debugName: "mostImpactfulLedger" }] : /* istanbul ignore next */ []));
    affectedPeriods = computed(() => this.ledgers().filter((ledger) => Number(ledger.discountAmount || 0) > 0).length, ...(ngDevMode ? [{ debugName: "affectedPeriods" }] : /* istanbul ignore next */ []));
    visibleImpactLedgers = computed(() => {
        const selectedId = this.selectedImpactLedgerId();
        if (!selectedId)
            return this.ledgers();
        const selected = this.ledgers().find((ledger) => ledger._id === selectedId);
        return selected ? [selected] : this.ledgers();
    }, ...(ngDevMode ? [{ debugName: "visibleImpactLedgers" }] : /* istanbul ignore next */ []));
    studentAdmissionId = this.route.snapshot.paramMap.get('admissionId') || '';
    scholarshipId = signal('', ...(ngDevMode ? [{ debugName: "scholarshipId" }] : /* istanbul ignore next */ []));
    customScholarshipType = 'percentage';
    customScholarshipValue = null;
    scholarshipRecurring = true;
    scholarshipLedgerId = '';
    discountName = '';
    discountType = 'fixed';
    discountValue = null;
    discountLedgerId = '';
    discountRemark = '';
    constructor() {
        this.load();
    }
    load() {
        this.loading.set(true);
        this.error.set('');
        this.api.studentScholarships(this.studentAdmissionId).subscribe({
            next: ({ student, assignments, discounts, scholarships, ledgers }) => {
                this.student.set(student);
                this.assignments.set(assignments);
                this.scholarships.set(scholarships);
                this.discounts.set(discounts);
                this.ledgers.set(ledgers);
                if (!ledgers.some((ledger) => ledger._id === this.selectedImpactLedgerId())) {
                    this.selectedImpactLedgerId.set(ledgers[0]?._id || '');
                }
                if (!this.availableScholarships().some((item) => item._id === this.scholarshipId()))
                    this.scholarshipId.set('');
                if (!ledgers.some((ledger) => ledger._id === this.discountLedgerId))
                    this.discountLedgerId = this.defaultLedgerId(student, ledgers);
                if (!ledgers.some((ledger) => ledger._id === this.scholarshipLedgerId))
                    this.scholarshipLedgerId = this.defaultLedgerId(student, ledgers);
                this.loading.set(false);
            },
            error: (error) => {
                this.error.set(error.error?.message || 'Could not load student scholarship details.');
                this.loading.set(false);
            },
        });
    }
    assign() {
        if (!this.scholarshipId() || this.saving())
            return;
        const customValue = this.selectedScholarship()?.valueMode === 'custom';
        const value = Number(this.customScholarshipValue || 0);
        if (customValue &&
            (value <= 0 || (this.customScholarshipType === 'percentage' && value > 100))) {
            this.error.set('Enter a valid custom scholarship percentage or fixed amount.');
            return;
        }
        if (!this.scholarshipRecurring && !this.scholarshipLedgerId) {
            this.error.set('Select the fee period for the one-time scholarship.');
            return;
        }
        this.saving.set(true);
        this.error.set('');
        this.message.set('');
        this.api
            .assignStudentScholarship(this.studentAdmissionId, {
            scholarshipId: this.scholarshipId(),
            type: customValue ? this.customScholarshipType : undefined,
            value: customValue ? value : undefined,
            recurring: this.scholarshipRecurring,
            targetLedgerId: this.scholarshipRecurring ? undefined : this.scholarshipLedgerId,
        })
            .subscribe({
            next: () => {
                this.message.set('Scholarship assigned and Tuition Fee updated.');
                this.scholarshipId.set('');
                this.customScholarshipType = 'percentage';
                this.customScholarshipValue = null;
                this.scholarshipRecurring = true;
                this.saving.set(false);
                this.scholarshipPanelOpen.set(false);
                this.load();
            },
            error: (error) => {
                this.error.set(error.error?.message || 'Could not assign the scholarship.');
                this.saving.set(false);
            },
        });
    }
    remove(item) {
        if (this.saving())
            return;
        if (this.removingId() !== item._id) {
            this.removingId.set(item._id);
            return;
        }
        this.saving.set(true);
        this.error.set('');
        this.message.set('');
        this.api.removeStudentScholarship(this.studentAdmissionId, item._id).subscribe({
            next: () => {
                this.message.set(`${item.scholarshipName} removed from future and unpaid fee periods. Paid records were preserved.`);
                this.saving.set(false);
                this.removingId.set(null);
                this.load();
            },
            error: (error) => {
                this.error.set(error.error?.message || 'Could not remove the scholarship.');
                this.saving.set(false);
                this.removingId.set(null);
            },
        });
    }
    cancelRemove() {
        this.removingId.set(null);
    }
    createDiscount() {
        if (this.saving())
            return;
        const name = this.discountName.trim();
        const value = Number(this.discountValue || 0);
        const internalRemark = this.discountRemark.trim();
        if (!name || !this.discountLedgerId || value <= 0 || internalRemark.length < 3) {
            this.error.set('Enter the discount name, fee period, value, and an internal remark.');
            return;
        }
        if (this.discountType === 'percentage' && value > 100) {
            this.error.set('Percentage discount cannot exceed 100%.');
            return;
        }
        this.saving.set(true);
        this.error.set('');
        this.message.set('');
        this.api
            .createStudentDiscount(this.studentAdmissionId, {
            name,
            type: this.discountType,
            value,
            targetLedgerId: this.discountLedgerId,
            internalRemark,
        })
            .subscribe({
            next: () => {
                this.message.set('One-time Tuition Fee discount applied to the selected fee period.');
                this.discountName = '';
                this.discountType = 'fixed';
                this.discountValue = null;
                this.discountRemark = '';
                this.saving.set(false);
                this.discountPanelOpen.set(false);
                this.load();
            },
            error: (error) => {
                this.error.set(error.error?.message || 'Could not apply the one-time discount.');
                this.saving.set(false);
            },
        });
    }
    removeDiscount(item) {
        if (this.saving())
            return;
        if (this.removingDiscountId() !== item._id) {
            this.removingDiscountId.set(item._id);
            return;
        }
        this.saving.set(true);
        this.error.set('');
        this.message.set('');
        this.api.removeStudentDiscount(this.studentAdmissionId, item._id).subscribe({
            next: () => {
                this.message.set(`${item.name} removed from ${item.targetPeriodLabel}.`);
                this.removingDiscountId.set(null);
                this.saving.set(false);
                this.load();
            },
            error: (error) => {
                this.error.set(error.error?.message || 'Could not remove the one-time discount.');
                this.removingDiscountId.set(null);
                this.saving.set(false);
            },
        });
    }
    cancelDiscountRemove() {
        this.removingDiscountId.set(null);
    }
    handleAssignmentAction(action, item) {
        if (action === 'remove')
            this.remove(item);
    }
    handleDiscountAction(action, item) {
        if (action === 'remove')
            this.removeDiscount(item);
    }
    tuitionAmount(ledger) {
        return ledger.entries
            .filter((entry) => entry.category === 'fee' && /\btuition\b/i.test(entry.feeHeadName || ''))
            .reduce((sum, entry) => sum + Number(entry.amount || 0), 0);
    }
    scholarshipAmount(ledger) {
        return ledger.entries
            .filter((entry) => entry.isScholarship)
            .reduce((sum, entry) => sum + Number(entry.amount || 0), 0);
    }
    oneTimeDiscountAmount(ledger) {
        return ledger.entries
            .filter((entry) => entry.isOneTimeDiscount)
            .reduce((sum, entry) => sum + Number(entry.amount || 0), 0);
    }
    feeHeadEntries(ledger) {
        return ledger.entries.filter((entry) => entry.category === 'fee' && !entry.isScholarship && !entry.isOneTimeDiscount);
    }
    scholarshipImpact(ledger, assignment, feeHeadName) {
        if (!/\btuition\b/i.test(feeHeadName))
            return 0;
        return ledger.entries
            .filter((entry) => entry.isScholarship && entry.scholarshipAssignmentId === assignment._id)
            .reduce((sum, entry) => sum + Number(entry.amount || 0), 0);
    }
    discountImpact(ledger, discount, feeHeadName) {
        if (!/\btuition\b/i.test(feeHeadName))
            return 0;
        return ledger.entries
            .filter((entry) => entry.isOneTimeDiscount && entry.customDiscountId === discount._id)
            .reduce((sum, entry) => sum + Number(entry.amount || 0), 0);
    }
    feeHeadNetAmount(entry) {
        return Math.max(0, Number(entry.amount || 0) - Number(entry.discountAmount || 0));
    }
    entryType(entry) {
        if (entry.isScholarship)
            return 'Recurring scholarship';
        if (entry.isOneTimeDiscount)
            return 'One-time discount';
        if (entry.category === 'payment-option')
            return 'Payment option';
        return 'Fee head';
    }
    entryNetAmount(entry) {
        if (entry.isScholarship || entry.isOneTimeDiscount)
            return -Number(entry.amount || 0);
        return Math.max(0, Number(entry.amount || 0) - Number(entry.discountAmount || 0));
    }
    statusLabel(status) {
        return status === 'paid' ? 'Paid' : status === 'partial' ? 'Part paid' : 'Due';
    }
    assignmentValue(item) {
        return item.type === 'percentage' ? `${item.value}%` : null;
    }
    discountValueLabel(item) {
        return item.type === 'percentage' ? `${item.value}%` : null;
    }
    initials(name) {
        const parts = name.trim().split(/\s+/).filter(Boolean);
        const value = parts.length > 1 ? `${parts[0][0]}${parts[parts.length - 1][0]}` : name.slice(0, 2);
        return value.toUpperCase();
    }
    defaultLedgerId(student, ledgers) {
        const current = ledgers.find((ledger) => student.feeFrequency === 'semester'
            ? ledger.currentSemester === student.currentSemester
            : ledger.currentAcademicYear === student.currentAcademicYear &&
                ledger.feeFrequency === 'year');
        return current?._id || ledgers[0]?._id || '';
    }
    static ɵfac = function StudentScholarshipsComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || StudentScholarshipsComponent)(); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: StudentScholarshipsComponent, selectors: [["erp-student-scholarships"]], decls: 11, vars: 7, consts: [["variant", "module", 3, "title", "description"], ["page-actions", ""], ["routerLink", "/admin/admissions/approved", 1, "erp-button", "erp-button--secondary"], ["lucideArrowLeft", "", "size", "16", "aria-hidden", "true"], [1, "erp-notice", "erp-notice--success"], [1, "erp-notice", "erp-notice--error"], [1, "erp-card", "erp-card--padded"], ["title", "Remove scholarship?", "confirmLabel", "Remove scholarship", 3, "message"], ["title", "Remove one-time discount?", "confirmLabel", "Remove discount", 3, "message"], ["aria-label", "Scholarship review sections", 1, "scholarship-tabs"], ["type", "button", 3, "click"], ["lucideWalletCards", "", "size", "16", "aria-hidden", "true"], ["lucideGraduationCap", "", "size", "16", "aria-hidden", "true"], ["lucideBadgePercent", "", "size", "16", "aria-hidden", "true"], ["lucideReceiptText", "", "size", "16", "aria-hidden", "true"], ["aria-label", "Student context", 1, "erp-card", "student-context"], [1, "student-context__identity"], [1, "student-context__avatar"], [1, "student-context__name-line"], [1, "erp-status"], [1, "student-context__facts"], ["aria-label", "Financial summary", 1, "financial-summary", "financial-summary--overview"], ["type", "button", 1, "financial-summary__item", 3, "click"], [1, "metric-icon", "metric-icon--blue"], ["lucideReceiptText", "", "size", "17", "aria-hidden", "true"], ["type", "button", 1, "financial-summary__item", "financial-summary__item--discount", 3, "click"], [1, "metric-icon", "metric-icon--green"], ["lucideGraduationCap", "", "size", "17", "aria-hidden", "true"], ["lucideWalletCards", "", "size", "17", "aria-hidden", "true"], [1, "metric-icon", "metric-icon--violet"], ["lucideCheckCircle2", "", "size", "17", "aria-hidden", "true"], ["type", "button", 1, "financial-summary__item", "financial-summary__item--balance", 3, "click"], [1, "metric-icon", "metric-icon--red"], [1, "financial-summary__item", "financial-summary__item--status"], ["lucideCalendarDays", "", "size", "17", "aria-hidden", "true"], [1, "overview-grid"], [1, "erp-card", "erp-table-shell", "overview-periods"], [1, "erp-table-toolbar"], ["type", "button", 1, "erp-button", "erp-button--secondary", 3, "click"], ["lucideArrowRight", "", "size", "15", "aria-hidden", "true"], [1, "erp-table-shell__scroll"], [1, "erp-table-shell__actions"], [1, "table-result-footer"], [1, "overview-side-stack"], [1, "erp-card", "support-panel"], ["lucideGraduationCap", "", "size", "18", "aria-hidden", "true"], [1, "support-record"], [1, "support-empty", "support-empty--illustrated"], ["lucideBadgePercent", "", "size", "18", "aria-hidden", "true"], [1, "erp-card", "page-info-banner", "page-info-banner--plain"], [1, "page-info-banner__icon"], ["lucideInfo", "", "size", "17", "aria-hidden", "true"], [1, "amount-discount"], [1, "amount-primary"], [1, "fee-status"], ["type", "button", "aria-label", "View fee impact", 1, "table-icon-button", 3, "click"], ["lucideEye", "", "size", "16", "aria-hidden", "true"], ["colspan", "8", 1, "erp-empty-state"], ["alt", "", "loading", "lazy", 3, "src"], ["lucideArrowRight", "", "size", "14", "aria-hidden", "true"], [1, "erp-card", "erp-table-shell", "section-card"], [1, "erp-table-toolbar", "section-card__toolbar"], [1, "section-card__actions"], [1, "inline-search"], ["lucideSearch", "", "size", "15", "aria-hidden", "true"], ["aria-label", "Search scholarships", "placeholder", "Search scholarships\u2026", 3, "ngModelChange", "ngModel"], ["type", "button", 1, "erp-button", "erp-button--primary", 3, "click"], ["lucidePlus", "", "size", "16", "aria-hidden", "true"], [1, "erp-card", "action-workspace", "action-workspace--panel"], [1, "erp-card", "action-cta"], [1, "scheme-cell"], [1, "scheme-cell__icon"], [1, "fee-status", "fee-status--paid"], [3, "selected", "items"], ["colspan", "7"], [1, "table-empty"], [1, "workspace-header"], [1, "action-workspace__intro"], [1, "section-icon"], ["lucideGraduationCap", "", "size", "20", "aria-hidden", "true"], ["type", "button", "aria-label", "Close assign scholarship", 1, "icon-button", 3, "click"], [1, "action-workspace__controls"], [1, "erp-control", 3, "ngModelChange", "ngModel"], ["value", ""], [3, "value"], [3, "ngValue"], ["type", "button", 1, "erp-button", "erp-button--primary", 3, "click", "disabled"], ["value", "percentage"], ["value", "fixed"], ["type", "number", "min", "0.01", "step", "0.01", 1, "erp-control", 3, "ngModelChange", "max", "ngModel"], ["aria-label", "One-time discount summary", 1, "discount-summary"], ["lucideArrowDown", "", "size", "18", "aria-hidden", "true"], ["lucideCalendarDays", "", "size", "18", "aria-hidden", "true"], ["lucideRefreshCw", "", "size", "18", "aria-hidden", "true"], ["aria-label", "Search discounts", "placeholder", "Search discounts\u2026", 3, "ngModelChange", "ngModel"], [1, "table-result-footer", "table-result-footer--pagination"], [1, "table-pagination"], ["type", "button", "aria-label", "Previous page", "disabled", ""], ["type", "button", "aria-label", "Next page", "disabled", ""], [1, "erp-card", "discount-workspace", "discount-workspace--panel"], [1, "erp-card", "action-cta", "action-cta--dashed"], ["type", "button", 1, "text-link"], [1, "scheme-cell", "scheme-cell--discount"], ["lucideBadgePercent", "", "size", "17", "aria-hidden", "true"], [1, "private-remark"], ["colspan", "8"], [1, "discount-workspace__header"], ["lucideBadgePercent", "", "size", "20", "aria-hidden", "true"], ["type", "button", "aria-label", "Close add discount", 1, "icon-button", 3, "click"], [1, "discount-form__grid"], ["maxlength", "120", "placeholder", "e.g. Special approval discount", 1, "erp-control", 3, "ngModelChange", "ngModel"], [1, "discount-form__remark"], ["maxlength", "1000", "rows", "3", "placeholder", "Reason, approver and reference number", 1, "erp-control", 3, "ngModelChange", "ngModel"], ["aria-label", "Combined fee impact", 1, "impact-summary"], [1, "impact-summary__discount"], [1, "impact-summary__balance"], ["lucideRefreshCw", "", "size", "17", "aria-hidden", "true"], [1, "impact-layout"], [1, "impact-main"], [1, "erp-card", "erp-table-shell", "impact-breakdown-card"], [1, "compact-select"], ["lucideCalendarDays", "", "size", "15", "aria-hidden", "true"], ["aria-label", "Select fee period", 3, "ngModelChange", "ngModel"], ["type", "button", 1, "erp-button", "erp-button--secondary"], ["lucideDownload", "", "size", "15", "aria-hidden", "true"], [1, "fee-impact-list"], [1, "illustration-empty-state"], [1, "erp-card", "page-info-banner", "page-info-banner--plain", "impact-note"], [1, "impact-aside"], [1, "erp-card", "insights-card"], ["lucideInfo", "", "size", "16", "aria-hidden", "true"], [1, "insight-card", "insight-card--success"], [1, "insight-card", "insight-card--warning"], [1, "insight-card", "insight-card--blue"], [1, "insight-card", "insight-card--violet"], [1, "erp-card", "recalculate-card"], ["type", "button", 1, "erp-button", "erp-button--secondary", 3, "click", "disabled"], ["lucideRefreshCw", "", "size", "15", "aria-hidden", "true"], [1, "fee-ledger"], [1, "fee-ledger__header"], [1, "fee-ledger__title"], ["lucideReceiptText", "", "size", "19", "aria-hidden", "true"], [1, "fee-ledger__totals"], [1, "fee-head-table"], [1, "fee-impact-table__head"], ["rowspan", "2"], [1, "fee-impact-group", "fee-impact-group--scholarship"], [1, "fee-impact-group", "fee-impact-group--discount"], [1, "fee-impact-subhead", "fee-impact-subhead--scholarship"], [1, "fee-impact-subhead", "fee-impact-subhead--discount"], [1, "amount-one-time"], [1, "amount-due"], [1, "fee-head-name"], ["lucideReceiptText", "", "size", "15", "aria-hidden", "true"], [1, "erp-empty-state"], ["title", "Remove scholarship?", "confirmLabel", "Remove scholarship", 3, "cancelled", "confirmed", "message"], ["title", "Remove one-time discount?", "confirmLabel", "Remove discount", 3, "cancelled", "confirmed", "message"]], template: function StudentScholarshipsComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "erp-admin-page", 0)(1, "div", 1)(2, "a", 2);
            i0.ɵɵnamespaceSVG();
            i0.ɵɵelement(3, "svg", 3);
            i0.ɵɵtext(4, " Back to approved students ");
            i0.ɵɵelementEnd()();
            i0.ɵɵconditionalCreate(5, StudentScholarshipsComponent_Conditional_5_Template, 2, 1, "p", 4);
            i0.ɵɵconditionalCreate(6, StudentScholarshipsComponent_Conditional_6_Template, 2, 1, "p", 5);
            i0.ɵɵconditionalCreate(7, StudentScholarshipsComponent_Conditional_7_Template, 2, 0, "section", 6)(8, StudentScholarshipsComponent_Conditional_8_Template, 23, 15);
            i0.ɵɵelementEnd();
            i0.ɵɵconditionalCreate(9, StudentScholarshipsComponent_Conditional_9_Template, 1, 1, "erp-confirm-dialog", 7);
            i0.ɵɵconditionalCreate(10, StudentScholarshipsComponent_Conditional_10_Template, 1, 1, "erp-confirm-dialog", 8);
        } if (rf & 2) {
            let tmp_4_0;
            let tmp_5_0;
            let tmp_6_0;
            i0.ɵɵproperty("title", ctx.pageTitle())("description", ctx.pageDescription());
            i0.ɵɵadvance(5);
            i0.ɵɵconditional(ctx.message() ? 5 : -1);
            i0.ɵɵadvance();
            i0.ɵɵconditional(ctx.error() ? 6 : -1);
            i0.ɵɵadvance();
            i0.ɵɵconditional(ctx.loading() ? 7 : (tmp_4_0 = ctx.student()) ? 8 : -1, tmp_4_0);
            i0.ɵɵadvance(2);
            i0.ɵɵconditional((tmp_5_0 = ctx.removingAssignment()) ? 9 : -1, tmp_5_0);
            i0.ɵɵadvance();
            i0.ɵɵconditional((tmp_6_0 = ctx.removingDiscount()) ? 10 : -1, tmp_6_0);
        } }, dependencies: [AdminPageComponent,
            CompactActionMenuComponent,
            ConfirmDialogComponent,
            FormsModule, i1.NgSelectOption, i1.ɵNgSelectMultipleOption, i1.DefaultValueAccessor, i1.NumberValueAccessor, i1.SelectControlValueAccessor, i1.NgControlStatus, i1.MaxLengthValidator, i1.MinValidator, i1.MaxValidator, i1.NgModel, LucideArrowLeft,
            LucideArrowDown,
            LucideArrowRight,
            LucideBadgePercent,
            LucideCalendarDays,
            LucideCheckCircle2,
            LucideDownload,
            LucideEye,
            LucideGraduationCap,
            LucideInfo,
            LucidePlus,
            LucideRefreshCw,
            LucideReceiptText,
            LucideSearch,
            LucideWalletCards,
            RouterLink,
            CurrencyPipe,
            DatePipe,
            TitleCasePipe], styles: ["\n[_nghost-%COMP%] {\n  display: block;\n}\n\n.student-context[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: minmax(17rem, 1fr) minmax(34rem, 1.4fr);\n  align-items: center;\n  gap: var(--erp-space-5);\n  padding: var(--erp-space-4);\n  margin-bottom: var(--erp-space-3);\n}\n\n.student-context__identity[_ngcontent-%COMP%], \n.student-context__name-line[_ngcontent-%COMP%], \n.student-context__facts[_ngcontent-%COMP%], \n.student-context__facts[_ngcontent-%COMP%]   div[_ngcontent-%COMP%], \n.support-panel[_ngcontent-%COMP%]   header[_ngcontent-%COMP%], \n.support-panel[_ngcontent-%COMP%]   header[_ngcontent-%COMP%]   div[_ngcontent-%COMP%], \n.support-record[_ngcontent-%COMP%], \n.action-workspace[_ngcontent-%COMP%], \n.action-workspace__intro[_ngcontent-%COMP%], \n.fee-ledger__header[_ngcontent-%COMP%], \n.fee-ledger__title[_ngcontent-%COMP%], \n.fee-ledger__totals[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n\n.student-context__identity[_ngcontent-%COMP%] {\n  min-width: 0;\n  gap: var(--erp-space-3);\n}\n\n.student-context__avatar[_ngcontent-%COMP%], \n.section-icon[_ngcontent-%COMP%] {\n  display: inline-grid;\n  flex: 0 0 auto;\n  place-items: center;\n  color: var(--erp-blue-700);\n  background: var(--erp-blue-50);\n  border: 1px solid var(--erp-blue-100);\n  border-radius: var(--erp-radius-compact);\n}\n\n.student-context__avatar[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  border-radius: var(--erp-radius-avatar);\n  font-size: var(--erp-font-size-sm);\n  font-weight: var(--erp-weight-bold);\n}\n\n.student-context__name-line[_ngcontent-%COMP%] {\n  gap: var(--erp-space-2);\n}\n\n.student-context[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], \n.student-context[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], \n.support-panel[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], \n.action-workspace[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], \n.action-workspace[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], \n.discount-workspace[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], \n.discount-workspace[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], \n.fee-ledger[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], \n.fee-ledger[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n}\n\n.student-context[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  overflow: hidden;\n  color: var(--erp-text-heading);\n  font-size: var(--erp-font-size-lg);\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n\n.student-context[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin-top: 2px;\n  color: var(--erp-text-muted);\n  font-size: var(--erp-font-size-xs);\n}\n\n.student-context__facts[_ngcontent-%COMP%] {\n  justify-content: flex-end;\n  margin: 0;\n}\n\n.student-context__facts[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  min-width: 0;\n  flex: 1 1 8rem;\n  align-items: flex-start;\n  flex-direction: column;\n  gap: 2px;\n  padding: 0 var(--erp-space-4);\n  border-left: 1px solid var(--erp-border-subtle);\n}\n\n.student-context__facts[_ngcontent-%COMP%]   dt[_ngcontent-%COMP%] {\n  color: var(--erp-text-muted);\n  font-size: var(--erp-font-size-2xs);\n}\n\n.student-context__facts[_ngcontent-%COMP%]   dd[_ngcontent-%COMP%] {\n  max-width: 100%;\n  overflow: hidden;\n  margin: 0;\n  color: var(--erp-text-heading);\n  font-size: var(--erp-font-size-xs);\n  font-weight: var(--erp-weight-semibold);\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n\n.scholarship-tabs[_ngcontent-%COMP%] {\n  display: flex;\n  gap: var(--erp-space-1);\n  padding: var(--erp-space-1);\n  margin-bottom: var(--erp-space-4);\n  overflow-x: auto;\n  background: var(--erp-surface-detail);\n  border: 1px solid var(--erp-border-subtle);\n  border-radius: var(--erp-radius-compact);\n}\n\n.scholarship-tabs[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  display: inline-flex;\n  min-height: var(--erp-control-height);\n  align-items: center;\n  gap: var(--erp-space-2);\n  padding: 0 var(--erp-space-3);\n  white-space: nowrap;\n  color: var(--erp-text-muted);\n  font-size: var(--erp-font-size-xs);\n  font-weight: var(--erp-weight-semibold);\n  background: transparent;\n  border: 1px solid transparent;\n  border-radius: var(--erp-radius-control);\n  cursor: pointer;\n  transition: var(--erp-control-transition);\n}\n\n.scholarship-tabs[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  color: var(--erp-text-heading);\n  background: var(--erp-surface-hover);\n}\n\n.scholarship-tabs[_ngcontent-%COMP%]   button.is-active[_ngcontent-%COMP%] {\n  color: var(--erp-blue-700);\n  background: var(--erp-surface);\n  border-color: var(--erp-border-default);\n  box-shadow: var(--erp-shadow-card);\n}\n\n.scholarship-tabs[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  display: inline-grid;\n  min-width: 19px;\n  height: 19px;\n  place-items: center;\n  font-size: var(--erp-font-size-2xs);\n  background: var(--erp-surface-neutral);\n  border-radius: var(--erp-radius-pill);\n}\n\n.financial-summary[_ngcontent-%COMP%], \n.impact-summary[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(5, minmax(0, 1fr));\n  overflow: hidden;\n  margin-bottom: var(--erp-space-4);\n  background: var(--erp-surface);\n  border: 1px solid var(--erp-border-default);\n  border-radius: var(--erp-radius-card);\n  box-shadow: var(--erp-shadow-card);\n}\n\n.financial-summary__item[_ngcontent-%COMP%], \n.impact-summary[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  display: grid;\n  min-width: 0;\n  gap: var(--erp-space-1);\n  padding: var(--erp-space-4);\n  text-align: left;\n  background: transparent;\n  border: 0;\n  border-right: 1px solid var(--erp-border-subtle);\n}\n\n.financial-summary__item[_ngcontent-%COMP%] {\n  color: inherit;\n  cursor: pointer;\n}\n\n.financial-summary__item[_ngcontent-%COMP%]:last-child, \n.impact-summary[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:last-child {\n  border-right: 0;\n}\n\n.financial-summary__item[_ngcontent-%COMP%]:hover {\n  background: var(--erp-surface-hover);\n}\n\n.financial-summary[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], \n.impact-summary[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: var(--erp-text-muted);\n  font-size: var(--erp-font-size-2xs);\n  font-weight: var(--erp-weight-semibold);\n}\n\n.financial-summary[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%], \n.impact-summary[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  overflow: hidden;\n  color: var(--erp-text-heading);\n  font-size: var(--erp-font-size-lg);\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n\n.financial-summary[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  color: var(--erp-text-light);\n  font-size: var(--erp-font-size-2xs);\n}\n\n.financial-summary__item--discount[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%], \n.impact-summary__discount[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%], \n.amount-discount[_ngcontent-%COMP%] {\n  color: var(--erp-success-text);\n}\n\n.financial-summary__item--balance[_ngcontent-%COMP%], \n.impact-summary__balance[_ngcontent-%COMP%] {\n  background: var(--erp-blue-50);\n}\n\n.overview-periods[_ngcontent-%COMP%] {\n  margin-bottom: var(--erp-space-4);\n}\n\n.erp-table-shell[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]    > small[_ngcontent-%COMP%] {\n  display: block;\n  margin-top: 2px;\n  color: var(--erp-text-muted);\n  font-size: var(--erp-font-size-2xs);\n}\n\n.support-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n  gap: var(--erp-space-4);\n}\n\n.support-panel[_ngcontent-%COMP%] {\n  overflow: hidden;\n}\n\n.support-panel[_ngcontent-%COMP%]   header[_ngcontent-%COMP%] {\n  justify-content: space-between;\n  padding: var(--erp-space-3) var(--erp-space-4);\n  background: var(--erp-surface-detail-soft);\n  border-bottom: 1px solid var(--erp-border-subtle);\n}\n\n.support-panel[_ngcontent-%COMP%]   header[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  gap: var(--erp-space-2);\n  color: var(--erp-blue-700);\n}\n\n.support-panel[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  color: var(--erp-text-heading);\n  font-size: var(--erp-font-label);\n}\n\n.support-panel[_ngcontent-%COMP%]   header[_ngcontent-%COMP%]   button[_ngcontent-%COMP%], \n.support-empty[_ngcontent-%COMP%] {\n  color: var(--erp-text-link);\n  font-size: var(--erp-font-size-xs);\n  font-weight: var(--erp-weight-semibold);\n  background: none;\n  border: 0;\n  cursor: pointer;\n}\n\n.support-record[_ngcontent-%COMP%] {\n  justify-content: space-between;\n  gap: var(--erp-space-4);\n  padding: var(--erp-space-3) var(--erp-space-4);\n  border-bottom: 1px solid var(--erp-border-subtle);\n}\n\n.support-record[_ngcontent-%COMP%]:last-child {\n  border-bottom: 0;\n}\n\n.support-record[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%], \n.support-record[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  display: block;\n}\n\n.support-record[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  margin-top: 2px;\n  color: var(--erp-text-muted);\n  font-size: var(--erp-font-size-2xs);\n}\n\n.support-record[_ngcontent-%COMP%]   b[_ngcontent-%COMP%] {\n  color: var(--erp-success-text);\n  font-size: var(--erp-font-size-sm);\n}\n\n.support-empty[_ngcontent-%COMP%] {\n  width: 100%;\n  min-height: 78px;\n  text-align: center;\n}\n\n.action-workspace[_ngcontent-%COMP%] {\n  justify-content: space-between;\n  gap: var(--erp-space-5);\n  padding: var(--erp-space-4);\n  margin-bottom: var(--erp-space-4);\n}\n\n.action-workspace__intro[_ngcontent-%COMP%] {\n  gap: var(--erp-space-3);\n}\n\n.section-icon[_ngcontent-%COMP%] {\n  width: 38px;\n  height: 38px;\n}\n\n.action-workspace[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], \n.discount-workspace[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], \n.fee-ledger[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  color: var(--erp-text-heading);\n  font-size: var(--erp-font-label);\n}\n\n.action-workspace[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], \n.discount-workspace[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], \n.fee-ledger[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin-top: 2px;\n  color: var(--erp-text-muted);\n  font-size: var(--erp-font-size-2xs);\n}\n\n.action-workspace__controls[_ngcontent-%COMP%] {\n  display: grid;\n  min-width: min(100%, 36rem);\n  grid-template-columns: minmax(16rem, 1fr) auto;\n  align-items: end;\n  gap: var(--erp-space-3);\n}\n\n.action-workspace__controls[_ngcontent-%COMP%]   label[_ngcontent-%COMP%], \n.discount-form__grid[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: grid;\n  gap: var(--erp-space-2);\n  color: var(--erp-text-body);\n  font-size: var(--erp-font-size-xs);\n  font-weight: var(--erp-weight-semibold);\n}\n\n.discount-workspace[_ngcontent-%COMP%] {\n  padding: var(--erp-space-4);\n  margin-bottom: var(--erp-space-4);\n}\n\n.discount-workspace__header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: var(--erp-space-3);\n  padding-bottom: var(--erp-space-4);\n  border-bottom: 1px solid var(--erp-border-subtle);\n}\n\n.discount-form__grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(4, minmax(0, 1fr));\n  gap: var(--erp-space-4);\n  padding-top: var(--erp-space-4);\n}\n\n.discount-form__remark[_ngcontent-%COMP%] {\n  grid-column: 1 / -1;\n}\n\n.discount-form__remark[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n  min-height: 72px;\n  resize: vertical;\n}\n\n.discount-form__remark[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  color: var(--erp-text-muted);\n  font-size: var(--erp-font-size-2xs);\n  font-weight: var(--erp-weight-regular);\n}\n\n.discount-workspace[_ngcontent-%COMP%]   footer[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  padding-top: var(--erp-space-4);\n}\n\n.private-remark[_ngcontent-%COMP%] {\n  display: block;\n  min-width: 12rem;\n  max-width: 28rem;\n  white-space: normal;\n}\n\n.fee-status[_ngcontent-%COMP%], \n.entry-type[_ngcontent-%COMP%] {\n  display: inline-flex;\n  width: max-content;\n  align-items: center;\n  padding: 3px var(--erp-space-2);\n  color: var(--erp-danger-text);\n  font-size: var(--erp-font-size-2xs);\n  font-weight: var(--erp-weight-semibold);\n  white-space: nowrap;\n  background: var(--erp-danger-bg);\n  border-radius: var(--erp-radius-pill);\n}\n\n.fee-status--paid[_ngcontent-%COMP%] {\n  color: var(--erp-success-text);\n  background: var(--erp-success-bg);\n}\n\n.fee-status--partial[_ngcontent-%COMP%] {\n  color: var(--erp-warning-text);\n  background: var(--erp-warning-bg);\n}\n\n.entry-type[_ngcontent-%COMP%] {\n  color: var(--erp-text-body);\n  background: var(--erp-surface-neutral);\n}\n\n.entry-type--discount[_ngcontent-%COMP%] {\n  color: var(--erp-success-text);\n  background: var(--erp-success-bg);\n}\n\n.fee-impact-list[_ngcontent-%COMP%] {\n  display: grid;\n  gap: var(--erp-space-4);\n}\n\n.fee-ledger__header[_ngcontent-%COMP%] {\n  justify-content: space-between;\n  gap: var(--erp-space-5);\n  padding: var(--erp-space-3) var(--erp-space-4);\n  background: var(--erp-surface-detail-soft);\n  border-bottom: 1px solid var(--erp-border-default);\n}\n\n.fee-ledger__title[_ngcontent-%COMP%] {\n  gap: var(--erp-space-3);\n}\n\n.fee-ledger__totals[_ngcontent-%COMP%] {\n  gap: var(--erp-space-5);\n}\n\n.fee-ledger__totals[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%]:not(.fee-status) {\n  display: grid;\n  gap: 2px;\n  color: var(--erp-text-muted);\n  font-size: var(--erp-font-size-2xs);\n}\n\n.fee-ledger__totals[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: var(--erp-text-heading);\n  font-size: var(--erp-font-size-xs);\n}\n\n.fee-head-table[_ngcontent-%COMP%] {\n  min-width: 1120px;\n}\n\n.fee-head-table__adjustment[_ngcontent-%COMP%] {\n  background: var(--erp-surface-detail-soft);\n}\n\n.fee-head-table[_ngcontent-%COMP%]   tfoot[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  color: var(--erp-text-heading);\n  background: var(--erp-blue-50);\n  border-top: 1px solid var(--erp-blue-100);\n}\n\n@media (max-width: 1180px) {\n  .student-context[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n\n  .student-context__facts[_ngcontent-%COMP%] {\n    justify-content: flex-start;\n  }\n\n  .student-context__facts[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:first-child {\n    padding-left: 0;\n    border-left: 0;\n  }\n\n  .financial-summary[_ngcontent-%COMP%], \n   .impact-summary[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(3, minmax(0, 1fr));\n  }\n\n  .financial-summary__item[_ngcontent-%COMP%]:nth-child(3), \n   .impact-summary[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:nth-child(3) {\n    border-right: 0;\n  }\n\n  .financial-summary__item[_ngcontent-%COMP%]:nth-child(n + 4), \n   .impact-summary[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:nth-child(n + 4) {\n    border-top: 1px solid var(--erp-border-subtle);\n  }\n\n  .discount-form__grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n  }\n}\n\n@media (max-width: 820px) {\n  .action-workspace[_ngcontent-%COMP%], \n   .fee-ledger__header[_ngcontent-%COMP%] {\n    align-items: stretch;\n    flex-direction: column;\n  }\n\n  .action-workspace__controls[_ngcontent-%COMP%] {\n    width: 100%;\n    min-width: 0;\n  }\n\n  .support-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n\n  .fee-ledger__totals[_ngcontent-%COMP%] {\n    justify-content: space-between;\n  }\n}\n\n@media (max-width: 640px) {\n  .student-context__facts[_ngcontent-%COMP%] {\n    display: grid;\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n    gap: var(--erp-space-3);\n  }\n\n  .student-context__facts[_ngcontent-%COMP%]   div[_ngcontent-%COMP%], \n   .student-context__facts[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:first-child {\n    padding: 0;\n    border-left: 0;\n  }\n\n  .financial-summary[_ngcontent-%COMP%], \n   .impact-summary[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr 1fr;\n  }\n\n  .financial-summary__item[_ngcontent-%COMP%], \n   .impact-summary[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%], \n   .financial-summary__item[_ngcontent-%COMP%]:nth-child(3), \n   .impact-summary[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:nth-child(3) {\n    border-right: 1px solid var(--erp-border-subtle);\n    border-top: 1px solid var(--erp-border-subtle);\n  }\n\n  .financial-summary__item[_ngcontent-%COMP%]:nth-child(odd), \n   .impact-summary[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:nth-child(odd) {\n    border-right: 0;\n  }\n\n  .financial-summary__item[_ngcontent-%COMP%]:first-child, \n   .financial-summary__item[_ngcontent-%COMP%]:nth-child(2), \n   .impact-summary[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:first-child, \n   .impact-summary[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:nth-child(2) {\n    border-top: 0;\n  }\n\n  .action-workspace__controls[_ngcontent-%COMP%], \n   .discount-form__grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n\n  .discount-form__remark[_ngcontent-%COMP%] {\n    grid-column: auto;\n  }\n\n  .fee-ledger__totals[_ngcontent-%COMP%] {\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    gap: var(--erp-space-3);\n  }\n}\n\n\n.student-context[_ngcontent-%COMP%] {\n  min-height: 100px;\n  margin-bottom: var(--erp-space-3);\n  padding-inline: var(--erp-space-5);\n  border-color: var(--erp-blue-100);\n}\n\n.student-context__avatar[_ngcontent-%COMP%] {\n  width: 48px;\n  height: 48px;\n}\n\n.scholarship-tabs[_ngcontent-%COMP%] {\n  min-height: 56px;\n  align-items: stretch;\n  padding: 0 var(--erp-space-2);\n  background: var(--erp-surface);\n  border-color: var(--erp-blue-100);\n  border-radius: var(--erp-radius-card);\n}\n\n.scholarship-tabs[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  position: relative;\n  min-height: 56px;\n  padding-inline: var(--erp-space-4);\n  border-radius: 0;\n}\n\n.scholarship-tabs[_ngcontent-%COMP%]   button.is-active[_ngcontent-%COMP%] {\n  color: var(--erp-blue-700);\n  background: transparent;\n  border-color: transparent;\n  box-shadow: none;\n}\n\n.scholarship-tabs[_ngcontent-%COMP%]   button.is-active[_ngcontent-%COMP%]::after {\n  position: absolute;\n  right: var(--erp-space-3);\n  bottom: -1px;\n  left: var(--erp-space-3);\n  height: 3px;\n  content: '';\n  background: var(--erp-blue-600);\n  border-radius: var(--erp-radius-pill) var(--erp-radius-pill) 0 0;\n}\n\n.financial-summary[_ngcontent-%COMP%], \n.impact-summary[_ngcontent-%COMP%] {\n  grid-template-columns: repeat(6, minmax(0, 1fr));\n}\n\n.financial-summary__item[_ngcontent-%COMP%], \n.impact-summary[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  position: relative;\n  min-height: 128px;\n  gap: 3px;\n  padding: var(--erp-space-3);\n}\n\n.financial-summary__item[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%]:not(.metric-icon), \n.impact-summary[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%]:not(.metric-icon) {\n  margin-top: 5px;\n}\n\n.metric-icon[_ngcontent-%COMP%] {\n  display: inline-grid;\n  width: 30px;\n  height: 30px;\n  place-items: center;\n  color: var(--erp-blue-700);\n  background: var(--erp-blue-50);\n  border: 1px solid var(--erp-blue-100);\n  border-radius: var(--erp-radius-avatar);\n}\n\n.metric-icon--green[_ngcontent-%COMP%] {\n  color: var(--erp-success-text);\n  background: var(--erp-success-bg);\n  border-color: var(--erp-success-border);\n}\n\n.metric-icon--red[_ngcontent-%COMP%] {\n  color: var(--erp-danger-text);\n  background: var(--erp-danger-bg);\n  border-color: var(--erp-danger-border-soft, var(--erp-border-default));\n}\n\n.metric-icon--violet[_ngcontent-%COMP%] {\n  color: var(--erp-purple-700, var(--erp-blue-700));\n  background: var(--erp-purple-50, var(--erp-blue-50));\n  border-color: var(--erp-purple-100, var(--erp-blue-100));\n}\n\n.financial-summary__item--status[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: var(--erp-danger-text);\n}\n\n.overview-grid[_ngcontent-%COMP%], \n.impact-layout[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: minmax(0, 1.65fr) minmax(18rem, 0.85fr);\n  gap: var(--erp-space-4);\n  align-items: start;\n}\n\n.overview-periods[_ngcontent-%COMP%], \n.impact-breakdown-card[_ngcontent-%COMP%] {\n  min-width: 0;\n}\n\n.overview-periods[_ngcontent-%COMP%]   .erp-table-toolbar[_ngcontent-%COMP%], \n.impact-breakdown-card[_ngcontent-%COMP%]    > .erp-table-toolbar[_ngcontent-%COMP%] {\n  min-height: 70px;\n}\n\n.erp-table-toolbar[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], \n.erp-table-toolbar[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n}\n\n.erp-table-toolbar[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin-top: 3px;\n  color: var(--erp-text-muted);\n  font-size: var(--erp-font-size-2xs);\n}\n\n.overview-side-stack[_ngcontent-%COMP%], \n.impact-aside[_ngcontent-%COMP%] {\n  display: grid;\n  gap: var(--erp-space-4);\n  min-width: 0;\n}\n\n.support-panel[_ngcontent-%COMP%] {\n  min-width: 0;\n}\n\n.support-empty--illustrated[_ngcontent-%COMP%] {\n  display: grid;\n  min-height: 155px;\n  justify-items: center;\n  gap: 3px;\n  padding: var(--erp-space-4);\n  text-align: center;\n}\n\n.support-empty--illustrated[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 66px;\n  height: 54px;\n  object-fit: contain;\n}\n\n.support-empty--illustrated[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: var(--erp-text-heading);\n  font-size: var(--erp-font-size-xs);\n}\n\n.support-empty--illustrated[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  color: var(--erp-text-muted);\n  font-size: var(--erp-font-size-2xs);\n}\n\n.support-empty--illustrated[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  margin-top: var(--erp-space-2);\n  color: var(--erp-text-link);\n  font-size: var(--erp-font-size-2xs);\n  font-weight: var(--erp-weight-semibold);\n  background: none;\n  border: 0;\n  cursor: pointer;\n}\n\n.page-info-banner[_ngcontent-%COMP%], \n.action-cta[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: var(--erp-space-4);\n  padding: var(--erp-space-3) var(--erp-space-4);\n  margin-top: var(--erp-space-4);\n  border-color: var(--erp-blue-100);\n  background: var(--erp-blue-50);\n}\n\n.page-info-banner[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 46px;\n  height: 42px;\n  object-fit: contain;\n}\n\n.page-info-banner[_ngcontent-%COMP%]   div[_ngcontent-%COMP%], \n.action-cta[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  min-width: 0;\n  flex: 1;\n}\n\n.page-info-banner[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%], \n.action-cta[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: var(--erp-text-heading);\n  font-size: var(--erp-font-size-xs);\n}\n\n.page-info-banner[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], \n.action-cta[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 3px 0 0;\n  color: var(--erp-text-muted);\n  font-size: var(--erp-font-size-2xs);\n}\n\n.action-cta[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 72px;\n  height: 58px;\n  object-fit: contain;\n}\n\n.section-card[_ngcontent-%COMP%] {\n  overflow: visible;\n}\n\n.section-card[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding-block: var(--erp-space-5);\n}\n\n.section-card__toolbar[_ngcontent-%COMP%] {\n  min-height: 72px;\n}\n\n.section-card__actions[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n  gap: var(--erp-space-2);\n  flex-wrap: wrap;\n}\n\n.inline-search[_ngcontent-%COMP%], \n.compact-select[_ngcontent-%COMP%] {\n  display: inline-flex;\n  min-height: var(--erp-control-height);\n  align-items: center;\n  gap: var(--erp-space-2);\n  padding-inline: var(--erp-space-3);\n  color: var(--erp-text-muted);\n  background: var(--erp-surface);\n  border: 1px solid var(--erp-border-default);\n  border-radius: var(--erp-radius-control);\n}\n\n.inline-search[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], \n.compact-select[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n  min-width: 11rem;\n  height: 30px;\n  color: var(--erp-text-body);\n  font: inherit;\n  background: transparent;\n  border: 0;\n  outline: 0;\n}\n\n.compact-select[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n  min-width: 10rem;\n}\n\n.inline-search[_ngcontent-%COMP%]:focus-within, \n.compact-select[_ngcontent-%COMP%]:focus-within {\n  border-color: var(--erp-blue-500);\n  box-shadow: var(--erp-focus-ring);\n}\n\n.table-empty[_ngcontent-%COMP%], \n.illustration-empty-state[_ngcontent-%COMP%] {\n  display: grid;\n  min-height: 178px;\n  justify-items: center;\n  align-content: center;\n  gap: var(--erp-space-2);\n  padding: var(--erp-space-5);\n  color: var(--erp-text-muted);\n  text-align: center;\n}\n\n.table-empty[_ngcontent-%COMP%]   img[_ngcontent-%COMP%], \n.illustration-empty-state[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 94px;\n  height: 76px;\n  object-fit: contain;\n}\n\n.table-empty[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%], \n.illustration-empty-state[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: var(--erp-text-heading);\n  font-size: var(--erp-font-size-sm);\n}\n\n.table-empty[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], \n.illustration-empty-state[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: var(--erp-font-size-xs);\n}\n\n.action-workspace--panel[_ngcontent-%COMP%], \n.discount-workspace--panel[_ngcontent-%COMP%] {\n  display: block;\n  padding: var(--erp-space-4);\n  margin-top: var(--erp-space-4);\n  border-color: var(--erp-blue-200, var(--erp-border-default));\n}\n\n.workspace-header[_ngcontent-%COMP%], \n.discount-workspace__header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding-bottom: var(--erp-space-3);\n  border-bottom: 1px solid var(--erp-border-subtle);\n}\n\n.icon-button[_ngcontent-%COMP%] {\n  display: inline-grid;\n  width: 30px;\n  height: 30px;\n  place-items: center;\n  color: var(--erp-text-muted);\n  font-size: 22px;\n  line-height: 1;\n  background: transparent;\n  border: 0;\n  border-radius: var(--erp-radius-control);\n  cursor: pointer;\n}\n\n.icon-button[_ngcontent-%COMP%]:hover {\n  color: var(--erp-text-heading);\n  background: var(--erp-surface-hover);\n}\n\n.impact-breakdown-card[_ngcontent-%COMP%] {\n  overflow: hidden;\n}\n\n.impact-breakdown-card[_ngcontent-%COMP%]   .fee-impact-list[_ngcontent-%COMP%] {\n  padding: 0 var(--erp-space-3) var(--erp-space-3);\n}\n\n.insights-card[_ngcontent-%COMP%], \n.recalculate-card[_ngcontent-%COMP%] {\n  padding: var(--erp-space-4);\n}\n\n.insights-card[_ngcontent-%COMP%]    > header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding-bottom: var(--erp-space-3);\n  color: var(--erp-text-muted);\n  border-bottom: 1px solid var(--erp-border-subtle);\n}\n\n.insights-card[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], \n.recalculate-card[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0;\n  color: var(--erp-text-heading);\n  font-size: var(--erp-font-label);\n}\n\n.insight-card[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: var(--erp-space-2);\n  padding: var(--erp-space-3);\n  margin-top: var(--erp-space-2);\n  border-radius: var(--erp-radius-control);\n}\n\n.insight-card[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  display: inline-grid;\n  width: 28px;\n  height: 28px;\n  flex: 0 0 auto;\n  place-items: center;\n  border-radius: var(--erp-radius-avatar);\n}\n\n.insight-card[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 2px;\n}\n\n.insight-card[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: var(--erp-text-heading);\n  font-size: var(--erp-font-size-xs);\n}\n\n.insight-card[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  color: var(--erp-text-muted);\n  font-size: var(--erp-font-size-2xs);\n}\n\n.insight-card--success[_ngcontent-%COMP%] {\n  background: var(--erp-success-bg);\n}\n.insight-card--success[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  color: var(--erp-success-text);\n  background: var(--erp-surface);\n}\n.insight-card--warning[_ngcontent-%COMP%] {\n  background: var(--erp-warning-bg);\n}\n.insight-card--warning[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  color: var(--erp-warning-text);\n  background: var(--erp-surface);\n}\n.insight-card--blue[_ngcontent-%COMP%] {\n  background: var(--erp-blue-50);\n}\n.insight-card--blue[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  color: var(--erp-blue-700);\n  background: var(--erp-surface);\n}\n.insight-card--violet[_ngcontent-%COMP%] {\n  background: var(--erp-purple-50, var(--erp-blue-50));\n}\n.insight-card--violet[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  color: var(--erp-purple-700, var(--erp-blue-700));\n  background: var(--erp-surface);\n}\n\n.recalculate-card[_ngcontent-%COMP%] {\n  display: grid;\n  gap: var(--erp-space-2);\n}\n\n.recalculate-card[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 54px;\n  height: 42px;\n  object-fit: contain;\n}\n\n.recalculate-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  color: var(--erp-text-muted);\n  font-size: var(--erp-font-size-xs);\n  line-height: 1.5;\n}\n\n@media (max-width: 1180px) {\n  .financial-summary[_ngcontent-%COMP%], \n   .impact-summary[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(3, minmax(0, 1fr));\n  }\n\n  .overview-grid[_ngcontent-%COMP%], \n   .impact-layout[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n\n  .overview-side-stack[_ngcontent-%COMP%], \n   .impact-aside[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n  }\n}\n\n@media (max-width: 760px) {\n  .section-card__toolbar[_ngcontent-%COMP%], \n   .page-info-banner[_ngcontent-%COMP%], \n   .action-cta[_ngcontent-%COMP%] {\n    align-items: stretch;\n    flex-direction: column;\n  }\n\n  .section-card__actions[_ngcontent-%COMP%] {\n    justify-content: stretch;\n  }\n\n  .inline-search[_ngcontent-%COMP%], \n   .section-card__actions[_ngcontent-%COMP%]   .erp-button[_ngcontent-%COMP%] {\n    flex: 1 1 100%;\n  }\n\n  .inline-search[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n    min-width: 0;\n    flex: 1;\n  }\n\n  .overview-side-stack[_ngcontent-%COMP%], \n   .impact-aside[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n\n\n.scholarship-tabs[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]    + button[_ngcontent-%COMP%]::before {\n  position: absolute;\n  top: 15px;\n  bottom: 15px;\n  left: 0;\n  width: 1px;\n  content: '';\n  background: var(--erp-border-subtle);\n}\n\n.financial-summary__item[_ngcontent-%COMP%], \n.impact-summary[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  grid-template-columns: 40px minmax(0, 1fr);\n  align-content: center;\n  column-gap: var(--erp-space-3);\n  padding-inline: var(--erp-space-4);\n}\n\n.financial-summary__item[_ngcontent-%COMP%]   .metric-icon[_ngcontent-%COMP%], \n.impact-summary[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]   .metric-icon[_ngcontent-%COMP%] {\n  grid-row: 1 / 4;\n  align-self: center;\n}\n\n.financial-summary__item[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%]:not(.metric-icon), \n.impact-summary[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%]:not(.metric-icon), \n.financial-summary__item[_ngcontent-%COMP%]    > strong[_ngcontent-%COMP%], \n.impact-summary[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]    > strong[_ngcontent-%COMP%], \n.financial-summary__item[_ngcontent-%COMP%]    > small[_ngcontent-%COMP%], \n.impact-summary[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]    > small[_ngcontent-%COMP%] {\n  grid-column: 2;\n  margin-top: 0;\n}\n\n.financial-summary--overview[_ngcontent-%COMP%]    > [_ngcontent-%COMP%]:nth-child(2)::before, \n.impact-summary[_ngcontent-%COMP%]    > [_ngcontent-%COMP%]:nth-child(2)::before, \n.financial-summary--overview[_ngcontent-%COMP%]    > [_ngcontent-%COMP%]:nth-child(3)::before, \n.impact-summary[_ngcontent-%COMP%]    > [_ngcontent-%COMP%]:nth-child(3)::before {\n  position: absolute;\n  top: 50%;\n  left: -7px;\n  z-index: 1;\n  display: grid;\n  width: 14px;\n  height: 20px;\n  place-items: center;\n  color: var(--erp-text-heading);\n  font-weight: var(--erp-weight-bold);\n  content: '\u2212';\n  background: var(--erp-surface);\n  transform: translateY(-50%);\n}\n\n.financial-summary--overview[_ngcontent-%COMP%]    > [_ngcontent-%COMP%]:nth-child(3)::before, \n.impact-summary[_ngcontent-%COMP%]    > [_ngcontent-%COMP%]:nth-child(3)::before {\n  content: '=';\n}\n\n.financial-summary__item--balance[_ngcontent-%COMP%], \n.impact-summary__balance[_ngcontent-%COMP%] {\n  background: transparent;\n}\n\n.financial-summary__item--status[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  width: max-content;\n  padding: 3px var(--erp-space-2);\n  font-size: var(--erp-font-size-xs);\n  background: var(--erp-danger-bg);\n  border-radius: var(--erp-radius-pill);\n}\n\n.overview-grid[_ngcontent-%COMP%] {\n  grid-template-columns: minmax(0, 1.72fr) minmax(0, 2fr);\n}\n\n.overview-side-stack[_ngcontent-%COMP%] {\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n  align-items: stretch;\n}\n\n.overview-periods[_ngcontent-%COMP%] {\n  margin-bottom: 0;\n}\n\n.overview-periods[_ngcontent-%COMP%], \n.overview-side-stack[_ngcontent-%COMP%], \n.overview-side-stack[_ngcontent-%COMP%]   .support-panel[_ngcontent-%COMP%] {\n  min-height: 286px;\n}\n\n.overview-side-stack[_ngcontent-%COMP%]   .support-panel[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n\n.overview-side-stack[_ngcontent-%COMP%]   .support-empty[_ngcontent-%COMP%], \n.overview-side-stack[_ngcontent-%COMP%]   .support-empty--illustrated[_ngcontent-%COMP%] {\n  flex: 1;\n}\n\n.table-icon-button[_ngcontent-%COMP%] {\n  display: inline-grid;\n  width: 32px;\n  height: 32px;\n  place-items: center;\n  color: var(--erp-blue-700);\n  background: var(--erp-blue-50);\n  border: 1px solid var(--erp-blue-100);\n  border-radius: var(--erp-radius-control);\n  cursor: pointer;\n}\n\n.amount-primary[_ngcontent-%COMP%] {\n  color: var(--erp-blue-700) !important;\n}\n\n.amount-due[_ngcontent-%COMP%] {\n  color: var(--erp-danger-text) !important;\n  font-weight: var(--erp-weight-semibold);\n}\n\n.scheme-cell[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: var(--erp-space-3);\n}\n\n.scheme-cell[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%]:last-child, \n.scheme-cell[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%], \n.scheme-cell[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  display: block;\n}\n\n.scheme-cell__icon[_ngcontent-%COMP%] {\n  display: inline-grid;\n  width: 36px;\n  height: 36px;\n  flex: 0 0 auto;\n  place-items: center;\n  color: var(--erp-success-text);\n  background: var(--erp-success-bg);\n  border-radius: var(--erp-radius-avatar);\n}\n\n.scheme-cell--discount[_ngcontent-%COMP%]   .scheme-cell__icon[_ngcontent-%COMP%] {\n  color: var(--erp-kpi-purple-text, var(--erp-blue-700));\n  background: var(--erp-kpi-purple-bg, var(--erp-blue-50));\n}\n\n.amount-one-time[_ngcontent-%COMP%] {\n  color: var(--erp-kpi-purple-text, var(--erp-blue-700)) !important;\n}\n\n.table-result-footer[_ngcontent-%COMP%] {\n  display: flex;\n  min-height: 52px;\n  align-items: center;\n  justify-content: center;\n  padding: var(--erp-space-2) var(--erp-space-4);\n  color: var(--erp-text-muted);\n  font-size: var(--erp-font-size-xs);\n  border-top: 1px solid var(--erp-border-subtle);\n}\n\n.table-result-footer--pagination[_ngcontent-%COMP%] {\n  justify-content: space-between;\n}\n\n.table-pagination[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: var(--erp-space-2);\n}\n\n.table-pagination[_ngcontent-%COMP%]   button[_ngcontent-%COMP%], \n.table-pagination[_ngcontent-%COMP%]   b[_ngcontent-%COMP%] {\n  display: inline-grid;\n  width: 30px;\n  height: 30px;\n  place-items: center;\n  color: var(--erp-text-muted);\n  background: var(--erp-surface);\n  border: 1px solid var(--erp-border-default);\n  border-radius: var(--erp-radius-control);\n}\n\n.table-pagination[_ngcontent-%COMP%]   b[_ngcontent-%COMP%] {\n  color: var(--erp-text-on-primary);\n  background: var(--erp-blue-600);\n  border-color: var(--erp-blue-600);\n}\n\n.discount-summary[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(4, minmax(0, 1fr));\n  min-height: 132px;\n  margin-bottom: var(--erp-space-4);\n  overflow: hidden;\n  background: var(--erp-surface);\n  border: 1px solid var(--erp-blue-100);\n  border-radius: var(--erp-radius-card);\n  box-shadow: var(--erp-shadow-card);\n}\n\n.discount-summary[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  display: flex;\n  min-width: 0;\n  align-items: center;\n  gap: var(--erp-space-4);\n  padding: var(--erp-space-5);\n  border-right: 1px solid var(--erp-border-subtle);\n}\n\n.discount-summary[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:last-child {\n  border-right: 0;\n}\n\n.discount-summary[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 3px;\n  margin: 0;\n}\n\n.discount-summary[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%], \n.discount-summary[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  display: block;\n}\n\n.discount-summary[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: var(--erp-text-heading);\n  font-size: var(--erp-font-size-lg);\n}\n\n.discount-summary[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  color: var(--erp-text-muted);\n  font-size: var(--erp-font-size-2xs);\n}\n\n.action-cta--dashed[_ngcontent-%COMP%] {\n  border-style: dashed;\n  background: var(--erp-surface);\n}\n\n.page-info-banner--plain[_ngcontent-%COMP%] {\n  min-height: 74px;\n  background: var(--erp-blue-50);\n}\n\n.page-info-banner__icon[_ngcontent-%COMP%] {\n  display: inline-grid;\n  width: 30px;\n  height: 30px;\n  flex: 0 0 auto;\n  place-items: center;\n  color: var(--erp-text-on-primary);\n  background: var(--erp-blue-600);\n  border-radius: var(--erp-radius-avatar);\n}\n\n.text-link[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: var(--erp-space-1);\n  color: var(--erp-text-link);\n  font-size: var(--erp-font-size-xs);\n  font-weight: var(--erp-weight-semibold);\n  background: transparent;\n  border: 0;\n  cursor: pointer;\n}\n\n.impact-layout[_ngcontent-%COMP%] {\n  grid-template-columns: minmax(0, 4.4fr) minmax(16rem, 1.15fr);\n}\n\n.impact-breakdown-card[_ngcontent-%COMP%]   .fee-ledger__header[_ngcontent-%COMP%] {\n  display: none;\n}\n\n.impact-breakdown-card[_ngcontent-%COMP%]   .fee-impact-list[_ngcontent-%COMP%] {\n  padding: 0 var(--erp-space-3) var(--erp-space-3);\n}\n\n.fee-ledger[_ngcontent-%COMP%] {\n  border: 1px solid var(--erp-border-subtle);\n  border-radius: var(--erp-radius-control);\n}\n\n.fee-head-table[_ngcontent-%COMP%] {\n  min-width: max(860px, 100%);\n}\n\n.fee-impact-table__head[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  color: var(--erp-text-on-primary);\n  text-align: center;\n  background: var(--erp-blue-900);\n  border-color: var(--erp-blue-800);\n}\n\n.fee-impact-table__head[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:first-child {\n  text-align: left;\n}\n\n.fee-impact-table__head[_ngcontent-%COMP%]   .fee-impact-subhead[_ngcontent-%COMP%] {\n  font-size: var(--erp-font-size-2xs);\n}\n\n.fee-impact-table__head[_ngcontent-%COMP%]   .fee-impact-subhead[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  display: inline;\n  color: inherit;\n}\n\n.fee-impact-table__head[_ngcontent-%COMP%]   .fee-impact-subhead--scholarship[_ngcontent-%COMP%] {\n  color: var(--erp-success-bg);\n}\n\n.fee-impact-table__head[_ngcontent-%COMP%]   .fee-impact-subhead--discount[_ngcontent-%COMP%] {\n  color: var(--erp-blue-100);\n}\n\n.fee-head-name[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: var(--erp-space-2);\n  color: var(--erp-text-heading);\n}\n\n.fee-head-name[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  color: var(--erp-blue-700);\n}\n\n.fee-head-table[_ngcontent-%COMP%]   tfoot[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  white-space: nowrap;\n  background: var(--erp-blue-50);\n}\n\n.impact-note[_ngcontent-%COMP%] {\n  margin-top: var(--erp-space-2);\n}\n\n@media (max-width: 1180px) {\n  .overview-grid[_ngcontent-%COMP%], \n   .impact-layout[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n\n  .overview-side-stack[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n  }\n\n  .discount-summary[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n  }\n\n  .discount-summary[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:nth-child(2) {\n    border-right: 0;\n  }\n\n  .discount-summary[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:nth-child(n + 3) {\n    border-top: 1px solid var(--erp-border-subtle);\n  }\n}\n\n@media (max-width: 640px) {\n  .discount-summary[_ngcontent-%COMP%], \n   .overview-side-stack[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n\n  .discount-summary[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n    border-right: 0;\n    border-bottom: 1px solid var(--erp-border-subtle);\n  }\n\n  .discount-summary[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:last-child {\n    border-bottom: 0;\n  }\n}"], changeDetection: 0 });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(StudentScholarshipsComponent, [{
        type: Component,
        args: [{ selector: 'erp-student-scholarships', imports: [
                    AdminPageComponent,
                    CompactActionMenuComponent,
                    ConfirmDialogComponent,
                    CurrencyPipe,
                    DatePipe,
                    FormsModule,
                    LucideArrowLeft,
                    LucideArrowDown,
                    LucideArrowRight,
                    LucideBadgePercent,
                    LucideCalendarDays,
                    LucideCheckCircle2,
                    LucideDownload,
                    LucideEye,
                    LucideGraduationCap,
                    LucideInfo,
                    LucidePlus,
                    LucideRefreshCw,
                    LucideReceiptText,
                    LucideSearch,
                    LucideWalletCards,
                    RouterLink,
                    TitleCasePipe,
                ], changeDetection: ChangeDetectionStrategy.OnPush, template: "<erp-admin-page [title]=\"pageTitle()\" [description]=\"pageDescription()\" variant=\"module\">\n  <div page-actions>\n    <a class=\"erp-button erp-button--secondary\" routerLink=\"/admin/admissions/approved\">\n      <svg lucideArrowLeft size=\"16\" aria-hidden=\"true\"></svg>\n      Back to approved students\n    </a>\n  </div>\n\n  @if (message()) {\n    <p class=\"erp-notice erp-notice--success\">{{ message() }}</p>\n  }\n  @if (error()) {\n    <p class=\"erp-notice erp-notice--error\">{{ error() }}</p>\n  }\n\n  @if (loading()) {\n    <section class=\"erp-card erp-card--padded\">Loading scholarship record\u2026</section>\n  } @else if (student(); as item) {\n    <nav class=\"scholarship-tabs\" aria-label=\"Scholarship review sections\">\n      <button\n        type=\"button\"\n        [class.is-active]=\"activeTab() === 'overview'\"\n        (click)=\"activeTab.set('overview')\"\n      >\n        <svg lucideWalletCards size=\"16\" aria-hidden=\"true\"></svg> Overview\n      </button>\n      <button\n        type=\"button\"\n        [class.is-active]=\"activeTab() === 'scholarships'\"\n        (click)=\"activeTab.set('scholarships')\"\n      >\n        <svg lucideGraduationCap size=\"16\" aria-hidden=\"true\"></svg> Scholarships\n        <small>{{ assignments().length }}</small>\n      </button>\n      <button\n        type=\"button\"\n        [class.is-active]=\"activeTab() === 'discounts'\"\n        (click)=\"activeTab.set('discounts')\"\n      >\n        <svg lucideBadgePercent size=\"16\" aria-hidden=\"true\"></svg> One-time discounts\n        <small>{{ discounts().length }}</small>\n      </button>\n      <button\n        type=\"button\"\n        [class.is-active]=\"activeTab() === 'impact'\"\n        (click)=\"activeTab.set('impact')\"\n      >\n        <svg lucideReceiptText size=\"16\" aria-hidden=\"true\"></svg> Fee impact\n        <small>{{ ledgers().length }}</small>\n      </button>\n    </nav>\n\n    @if (activeTab() === 'overview') {\n      <section class=\"erp-card student-context\" aria-label=\"Student context\">\n        <div class=\"student-context__identity\">\n          <span class=\"student-context__avatar\">{{ initials(item.studentName || 'Student') }}</span>\n          <div>\n            <div class=\"student-context__name-line\">\n              <h2>{{ item.studentName || 'Student record' }}</h2>\n              <span class=\"erp-status\">{{\n                item.status === 'approved' ? 'Active' : item.status\n              }}</span>\n            </div>\n            <p>\n              {{ item.studentId || 'ID pending' }} \u00B7 {{ item.courseName || 'Programme not mapped' }}\n            </p>\n          </div>\n        </div>\n        <dl class=\"student-context__facts\">\n          <div>\n            <dt>Session</dt>\n            <dd>{{ item.academicSession || '\u2014' }}</dd>\n          </div>\n          <div>\n            <dt>Current period</dt>\n            <dd>\n              {{\n                item.feeFrequency === 'semester'\n                  ? 'Semester ' + item.currentSemester\n                  : 'Year ' + item.currentAcademicYear\n              }}\n            </dd>\n          </div>\n          <div>\n            <dt>Billing cycle</dt>\n            <dd>{{ item.feeFrequency === 'semester' ? 'Semester-wise' : 'Annual' }}</dd>\n          </div>\n          <div>\n            <dt>College</dt>\n            <dd>{{ item.collegeName || '\u2014' }}</dd>\n          </div>\n        </dl>\n      </section>\n\n      <section class=\"financial-summary financial-summary--overview\" aria-label=\"Financial summary\">\n        <button type=\"button\" class=\"financial-summary__item\" (click)=\"activeTab.set('impact')\">\n          <span class=\"metric-icon metric-icon--blue\"\n            ><svg lucideReceiptText size=\"17\" aria-hidden=\"true\"></svg></span\n          ><span>Gross fees</span\n          ><strong>{{ totalCharges() | currency: 'INR' : 'symbol' : '1.0-2' }}</strong\n          ><small>Before concessions</small>\n        </button>\n        <button\n          type=\"button\"\n          class=\"financial-summary__item financial-summary__item--discount\"\n          (click)=\"activeTab.set('impact')\"\n        >\n          <span class=\"metric-icon metric-icon--green\"\n            ><svg lucideGraduationCap size=\"17\" aria-hidden=\"true\"></svg></span\n          ><span>Total concessions</span\n          ><strong>\u2212 {{ totalDiscounts() | currency: 'INR' : 'symbol' : '1.0-2' }}</strong\n          ><small>Scholarships & discounts</small>\n        </button>\n        <button type=\"button\" class=\"financial-summary__item\" (click)=\"activeTab.set('impact')\">\n          <span class=\"metric-icon metric-icon--blue\"\n            ><svg lucideWalletCards size=\"17\" aria-hidden=\"true\"></svg></span\n          ><span>Net payable</span\n          ><strong>{{ totalPayable() | currency: 'INR' : 'symbol' : '1.0-2' }}</strong\n          ><small>After concessions</small>\n        </button>\n        <button type=\"button\" class=\"financial-summary__item\" (click)=\"activeTab.set('impact')\">\n          <span class=\"metric-icon metric-icon--violet\"\n            ><svg lucideCheckCircle2 size=\"17\" aria-hidden=\"true\"></svg></span\n          ><span>Paid amount</span\n          ><strong>{{ totalPaid() | currency: 'INR' : 'symbol' : '1.0-2' }}</strong\n          ><small>Total payments made</small>\n        </button>\n        <button\n          type=\"button\"\n          class=\"financial-summary__item financial-summary__item--balance\"\n          (click)=\"activeTab.set('impact')\"\n        >\n          <span class=\"metric-icon metric-icon--red\"\n            ><svg lucideReceiptText size=\"17\" aria-hidden=\"true\"></svg></span\n          ><span>Outstanding</span\n          ><strong>{{ totalBalance() | currency: 'INR' : 'symbol' : '1.0-2' }}</strong\n          ><small>Current balance</small>\n        </button>\n        <div class=\"financial-summary__item financial-summary__item--status\">\n          <span class=\"metric-icon metric-icon--blue\"\n            ><svg lucideCalendarDays size=\"17\" aria-hidden=\"true\"></svg></span\n          ><span>Account status</span><strong>{{ totalBalance() > 0 ? 'Due' : 'Paid' }}</strong\n          ><small>{{ ledgers().length }} fee periods</small>\n        </div>\n      </section>\n\n      <div class=\"overview-grid\">\n        <section class=\"erp-card erp-table-shell overview-periods\">\n          <div class=\"erp-table-toolbar\">\n            <div>\n              <h2>\n                Fee period summary <small>{{ ledgers().length }}</small>\n              </h2>\n              <p>Summary of all academic periods for this admission.</p>\n            </div>\n            <button\n              class=\"erp-button erp-button--secondary\"\n              type=\"button\"\n              (click)=\"activeTab.set('impact')\"\n            >\n              View full fee impact <svg lucideArrowRight size=\"15\" aria-hidden=\"true\"></svg>\n            </button>\n          </div>\n          <div class=\"erp-table-shell__scroll\">\n            <table>\n              <thead>\n                <tr>\n                  <th>Fee period</th>\n                  <th>Gross fees</th>\n                  <th>Concessions</th>\n                  <th>Net payable</th>\n                  <th>Paid</th>\n                  <th>Balance</th>\n                  <th>Status</th>\n                  <th class=\"erp-table-shell__actions\">Action</th>\n                </tr>\n              </thead>\n              <tbody>\n                @for (ledger of ledgers(); track ledger._id) {\n                  <tr>\n                    <td>\n                      <strong>{{ ledger.periodLabel }}</strong\n                      ><small>{{ ledger.academicSession }}</small>\n                    </td>\n                    <td>{{ ledger.chargeAmount | currency: 'INR' : 'symbol' : '1.0-2' }}</td>\n                    <td class=\"amount-discount\">\n                      \u2212 {{ ledger.discountAmount | currency: 'INR' : 'symbol' : '1.0-2' }}\n                    </td>\n                    <td>\n                      <strong class=\"amount-primary\">{{\n                        ledger.totalAmount | currency: 'INR' : 'symbol' : '1.0-2'\n                      }}</strong>\n                    </td>\n                    <td>{{ ledger.paidAmount | currency: 'INR' : 'symbol' : '1.0-2' }}</td>\n                    <td>\n                      <strong>{{\n                        ledger.balanceAmount | currency: 'INR' : 'symbol' : '1.0-2'\n                      }}</strong>\n                    </td>\n                    <td>\n                      <span\n                        class=\"fee-status\"\n                        [class.fee-status--paid]=\"ledger.paymentStatus === 'paid'\"\n                        [class.fee-status--partial]=\"ledger.paymentStatus === 'partial'\"\n                        >{{\n                          ledger.paymentStatus === 'partial'\n                            ? 'Part paid'\n                            : (ledger.paymentStatus | titlecase)\n                        }}</span\n                      >\n                    </td>\n                    <td class=\"erp-table-shell__actions\">\n                      <button\n                        type=\"button\"\n                        class=\"table-icon-button\"\n                        aria-label=\"View fee impact\"\n                        (click)=\"selectedImpactLedgerId.set(ledger._id); activeTab.set('impact')\"\n                      >\n                        <svg lucideEye size=\"16\" aria-hidden=\"true\"></svg>\n                      </button>\n                    </td>\n                  </tr>\n                } @empty {\n                  <tr>\n                    <td colspan=\"8\" class=\"erp-empty-state\">\n                      No fee ledger has been generated for this student.\n                    </td>\n                  </tr>\n                }\n              </tbody>\n            </table>\n          </div>\n          <footer class=\"table-result-footer\">\n            Showing {{ ledgers().length }} of {{ ledgers().length }} periods\n          </footer>\n        </section>\n\n        <div class=\"overview-side-stack\">\n          <article class=\"erp-card support-panel\">\n            <header>\n              <div>\n                <svg lucideGraduationCap size=\"18\" aria-hidden=\"true\"></svg>\n                <h2>Active scholarships</h2>\n              </div>\n              <button type=\"button\" (click)=\"activeTab.set('scholarships')\">Manage all</button>\n            </header>\n            @for (assignment of assignments(); track assignment._id) {\n              <div class=\"support-record\">\n                <div>\n                  <strong>{{ assignment.scholarshipName }}</strong\n                  ><small\n                    >From\n                    {{\n                      assignment.startSemester\n                        ? 'Semester ' + assignment.startSemester\n                        : 'Year ' + assignment.startAcademicYear\n                    }}</small\n                  >\n                </div>\n                <b>{{\n                  assignmentValue(assignment) ??\n                    (assignment.value | currency: 'INR' : 'symbol' : '1.0-2')\n                }}</b>\n              </div>\n            } @empty {\n              <div class=\"support-empty support-empty--illustrated\">\n                <img [src]=\"assets.emptyScholarships\" alt=\"\" loading=\"lazy\" /><strong\n                  >No scholarships applied</strong\n                ><small>Assign an approved scholarship scheme.</small\n                ><button\n                  type=\"button\"\n                  (click)=\"activeTab.set('scholarships'); scholarshipPanelOpen.set(true)\"\n                >\n                  Assign scholarship <svg lucideArrowRight size=\"14\" aria-hidden=\"true\"></svg>\n                </button>\n              </div>\n            }\n          </article>\n          <article class=\"erp-card support-panel\">\n            <header>\n              <div>\n                <svg lucideBadgePercent size=\"18\" aria-hidden=\"true\"></svg>\n                <h2>Active one-time discounts</h2>\n              </div>\n              <button type=\"button\" (click)=\"activeTab.set('discounts')\">Add discount</button>\n            </header>\n            @for (discount of discounts(); track discount._id) {\n              <div class=\"support-record\">\n                <div>\n                  <strong>{{ discount.name }}</strong\n                  ><small>{{ discount.targetPeriodLabel }} \u00B7 {{ discount.academicSession }}</small>\n                </div>\n                <b>{{\n                  discountValueLabel(discount) ??\n                    (discount.value | currency: 'INR' : 'symbol' : '1.0-2')\n                }}</b>\n              </div>\n            } @empty {\n              <div class=\"support-empty support-empty--illustrated\">\n                <img [src]=\"assets.discountTicket\" alt=\"\" loading=\"lazy\" /><strong\n                  >No one-time discounts applied</strong\n                ><small>Add an approved exception for a specific fee period.</small\n                ><button\n                  type=\"button\"\n                  (click)=\"activeTab.set('discounts'); discountPanelOpen.set(true)\"\n                >\n                  Add one-time discount <svg lucideArrowRight size=\"14\" aria-hidden=\"true\"></svg>\n                </button>\n              </div>\n            }\n          </article>\n        </div>\n      </div>\n      <section class=\"erp-card page-info-banner page-info-banner--plain\">\n        <span class=\"page-info-banner__icon\"\n          ><svg lucideInfo size=\"17\" aria-hidden=\"true\"></svg\n        ></span>\n        <div>\n          <strong>Changes reflect automatically</strong>\n          <p>Any new scholarship or discount updates the fee impact instantly.</p>\n        </div>\n        <button\n          type=\"button\"\n          class=\"erp-button erp-button--secondary\"\n          (click)=\"activeTab.set('impact')\"\n        >\n          Go to fee impact <svg lucideArrowRight size=\"15\" aria-hidden=\"true\"></svg>\n        </button>\n      </section>\n    }\n\n    @if (activeTab() === 'scholarships') {\n      <section class=\"erp-card erp-table-shell section-card\">\n        <div class=\"erp-table-toolbar section-card__toolbar\">\n          <div>\n            <h2>\n              Assigned scholarships <small>{{ assignments().length }}</small>\n            </h2>\n            <p>Recurring concessions currently applied to this student.</p>\n          </div>\n          <div class=\"section-card__actions\">\n            <label class=\"inline-search\"\n              ><svg lucideSearch size=\"15\" aria-hidden=\"true\"></svg\n              ><input\n                aria-label=\"Search scholarships\"\n                placeholder=\"Search scholarships\u2026\"\n                [ngModel]=\"scholarshipSearch()\"\n                (ngModelChange)=\"scholarshipSearch.set($event)\" /></label\n            ><button\n              class=\"erp-button erp-button--primary\"\n              type=\"button\"\n              (click)=\"scholarshipPanelOpen.set(true)\"\n            >\n              <svg lucidePlus size=\"16\" aria-hidden=\"true\"></svg> Assign scholarship\n            </button>\n          </div>\n        </div>\n        <div class=\"erp-table-shell__scroll\">\n          <table>\n            <thead>\n              <tr>\n                <th>Scholarship scheme</th>\n                <th>Benefit</th>\n                <th>Application</th>\n                <th>Effective from</th>\n                <th>Assigned on</th>\n                <th>Status</th>\n                <th class=\"erp-table-shell__actions\">Actions</th>\n              </tr>\n            </thead>\n            <tbody>\n              @for (assignment of filteredAssignments(); track assignment._id) {\n                <tr>\n                  <td>\n                    <span class=\"scheme-cell\"\n                      ><span class=\"scheme-cell__icon\"\n                        ><svg lucideGraduationCap size=\"17\" aria-hidden=\"true\"></svg></span\n                      ><span\n                        ><strong>{{ assignment.scholarshipName }}</strong\n                        ><small>{{\n                          assignment.recurring\n                            ? 'Recurring tuition concession'\n                            : 'One-time tuition concession'\n                        }}</small></span\n                      ></span\n                    >\n                  </td>\n                  <td>\n                    <strong class=\"amount-discount\">{{\n                      assignmentValue(assignment) ??\n                        (assignment.value | currency: 'INR' : 'symbol' : '1.0-2')\n                    }}</strong>\n                  </td>\n                  <td>\n                    <span class=\"fee-status fee-status--paid\">{{\n                      assignment.recurring ? 'Recurring' : 'One-time'\n                    }}</span\n                    ><small>{{ assignment.recurring ? 'Carry forward' : 'Selected period' }}</small>\n                  </td>\n                  <td>\n                    {{\n                      assignment.recurring\n                        ? assignment.startSemester\n                          ? 'From Semester ' + assignment.startSemester\n                          : 'From Year ' + assignment.startAcademicYear\n                        : assignment.targetPeriodLabel\n                    }}\n                  </td>\n                  <td>\n                    {{ assignment.assignedAt | date: 'dd MMM yyyy'\n                    }}<small>{{ assignment.assignedAt | date: 'h:mm a' }}</small>\n                  </td>\n                  <td><span class=\"fee-status fee-status--paid\">Active</span></td>\n                  <td class=\"erp-table-shell__actions\">\n                    <erp-compact-action-menu\n                      [items]=\"removeActions\"\n                      (selected)=\"handleAssignmentAction($event, assignment)\"\n                    />\n                  </td>\n                </tr>\n              } @empty {\n                <tr>\n                  <td colspan=\"7\">\n                    <div class=\"table-empty\">\n                      <img\n                        [src]=\"scholarshipSearch() ? assets.noResults : assets.addStudent\"\n                        alt=\"\"\n                        loading=\"lazy\"\n                      /><strong>{{\n                        scholarshipSearch()\n                          ? 'No scholarships match your search'\n                          : 'No scholarships assigned'\n                      }}</strong\n                      ><span>{{\n                        scholarshipSearch()\n                          ? 'Try a different search term.'\n                          : 'Assign an active scholarship scheme to provide a tuition concession.'\n                      }}</span>\n                    </div>\n                  </td>\n                </tr>\n              }\n            </tbody>\n          </table>\n        </div>\n        <footer class=\"table-result-footer\">\n          Showing {{ filteredAssignments().length }} of {{ assignments().length }} scholarships\n        </footer>\n      </section>\n      @if (scholarshipPanelOpen()) {\n        <section class=\"erp-card action-workspace action-workspace--panel\">\n          <header class=\"workspace-header\">\n            <div class=\"action-workspace__intro\">\n              <span class=\"section-icon\"\n                ><svg lucideGraduationCap size=\"20\" aria-hidden=\"true\"></svg\n              ></span>\n              <div>\n                <h2>Assign scholarship</h2>\n                <p>Choose an active scheme and apply it to this student.</p>\n              </div>\n            </div>\n            <button\n              type=\"button\"\n              class=\"icon-button\"\n              aria-label=\"Close assign scholarship\"\n              (click)=\"scholarshipPanelOpen.set(false)\"\n            >\n              \u00D7\n            </button>\n          </header>\n          <div class=\"action-workspace__controls\">\n            <label\n              ><span>Scholarship scheme</span\n              ><select\n                class=\"erp-control\"\n                [ngModel]=\"scholarshipId()\"\n                (ngModelChange)=\"scholarshipId.set($event)\"\n              >\n                <option value=\"\">Select an active scheme</option>\n                @for (scholarship of availableScholarships(); track scholarship._id) {\n                  <option [value]=\"scholarship._id\">\n                    {{ scholarship.name }} \u00B7\n                    {{\n                      scholarship.valueMode === 'custom'\n                        ? 'Custom value'\n                        : scholarship.type === 'percentage'\n                          ? scholarship.value + '%'\n                          : (scholarship.value | currency: 'INR' : 'symbol' : '1.0-2')\n                    }}\n                  </option>\n                }\n              </select></label\n            >\n            @if (selectedScholarship()?.valueMode === 'custom') {\n              <label\n                ><span>Calculation</span\n                ><select class=\"erp-control\" [(ngModel)]=\"customScholarshipType\">\n                  <option value=\"percentage\">Percentage</option>\n                  <option value=\"fixed\">Fixed amount</option>\n                </select></label\n              ><label\n                ><span>{{ customScholarshipType === 'percentage' ? 'Percentage' : 'Amount' }}</span\n                ><input\n                  class=\"erp-control\"\n                  type=\"number\"\n                  min=\"0.01\"\n                  step=\"0.01\"\n                  [max]=\"customScholarshipType === 'percentage' ? 100 : 1000000000\"\n                  [(ngModel)]=\"customScholarshipValue\"\n              /></label>\n            }\n            <label\n              ><span>Application</span\n              ><select class=\"erp-control\" [(ngModel)]=\"scholarshipRecurring\">\n                <option [ngValue]=\"true\">Recurring \u00B7 carry forward</option>\n                <option [ngValue]=\"false\">One-time only</option>\n              </select></label\n            >\n            @if (!scholarshipRecurring) {\n              <label\n                ><span>Fee period</span\n                ><select class=\"erp-control\" [(ngModel)]=\"scholarshipLedgerId\">\n                  <option value=\"\">Select fee period</option>\n                  @for (ledger of ledgers(); track ledger._id) {\n                    <option [value]=\"ledger._id\">\n                      {{ ledger.periodLabel }} \u00B7 {{ ledger.academicSession }}\n                    </option>\n                  }\n                </select></label\n              >\n            }\n            <button\n              class=\"erp-button erp-button--primary\"\n              type=\"button\"\n              [disabled]=\"saving() || !scholarshipId()\"\n              (click)=\"assign()\"\n            >\n              {{ saving() ? 'Applying\u2026' : 'Assign scholarship' }}\n            </button>\n          </div>\n        </section>\n      } @else {\n        <section class=\"erp-card action-cta\">\n          <img [src]=\"assets.feeWallet\" alt=\"\" loading=\"lazy\" />\n          <div>\n            <strong>Need to apply another scholarship?</strong>\n            <p>\n              Assign an active scholarship scheme to this student to provide tuition fee\n              concessions.\n            </p>\n          </div>\n          <button\n            class=\"erp-button erp-button--secondary\"\n            type=\"button\"\n            (click)=\"scholarshipPanelOpen.set(true)\"\n          >\n            <svg lucidePlus size=\"16\" aria-hidden=\"true\"></svg> Assign scholarship\n          </button>\n        </section>\n      }\n      <section class=\"erp-card page-info-banner page-info-banner--plain\">\n        <span class=\"page-info-banner__icon\"\n          ><svg lucideInfo size=\"17\" aria-hidden=\"true\"></svg\n        ></span>\n        <div>\n          <strong>How it works</strong>\n          <p>\n            Recurring scholarships apply to tuition fee and carry forward to future unpaid periods.\n            Removing a scholarship does not affect periods that are already paid.\n          </p>\n        </div>\n      </section>\n    }\n\n    @if (activeTab() === 'discounts') {\n      <section class=\"discount-summary\" aria-label=\"One-time discount summary\">\n        <div>\n          <span class=\"metric-icon metric-icon--blue\"\n            ><svg lucideBadgePercent size=\"18\" aria-hidden=\"true\"></svg\n          ></span>\n          <p>\n            <strong>{{ discounts().length }}</strong\n            ><small>Active discounts</small>\n          </p>\n        </div>\n        <div>\n          <span class=\"metric-icon metric-icon--green\"\n            ><svg lucideArrowDown size=\"18\" aria-hidden=\"true\"></svg\n          ></span>\n          <p>\n            <strong class=\"amount-discount\">{{\n              oneTimeDiscountTotal() | currency: 'INR' : 'symbol' : '1.0-2'\n            }}</strong\n            ><small>Total discount amount</small>\n          </p>\n        </div>\n        <div>\n          <span class=\"metric-icon metric-icon--violet\"\n            ><svg lucideCalendarDays size=\"18\" aria-hidden=\"true\"></svg\n          ></span>\n          <p>\n            <strong>{{ discountAffectedPeriods() }}</strong\n            ><small>Fee periods affected</small>\n          </p>\n        </div>\n        <div>\n          <span class=\"metric-icon metric-icon--blue\"\n            ><svg lucideRefreshCw size=\"18\" aria-hidden=\"true\"></svg\n          ></span>\n          <p>\n            <small>Last applied</small\n            ><strong>{{\n              lastDiscountApplied() ? (lastDiscountApplied() | date: 'dd MMM yyyy') : 'Not yet'\n            }}</strong\n            ><small>{{\n              lastDiscountApplied()\n                ? (lastDiscountApplied() | date: 'h:mm a')\n                : 'No discount recorded'\n            }}</small>\n          </p>\n        </div>\n      </section>\n      <section class=\"erp-card erp-table-shell section-card\">\n        <div class=\"erp-table-toolbar section-card__toolbar\">\n          <div>\n            <h2>\n              Active one-time discounts <small>{{ discounts().length }}</small>\n            </h2>\n            <p>Approved exceptions applied to a specific fee period.</p>\n          </div>\n          <div class=\"section-card__actions\">\n            <label class=\"inline-search\"\n              ><svg lucideSearch size=\"15\" aria-hidden=\"true\"></svg\n              ><input\n                aria-label=\"Search discounts\"\n                placeholder=\"Search discounts\u2026\"\n                [ngModel]=\"discountSearch()\"\n                (ngModelChange)=\"discountSearch.set($event)\" /></label\n            ><button\n              class=\"erp-button erp-button--primary\"\n              type=\"button\"\n              (click)=\"discountPanelOpen.set(true)\"\n            >\n              <svg lucidePlus size=\"16\" aria-hidden=\"true\"></svg> Add discount\n            </button>\n          </div>\n        </div>\n        <div class=\"erp-table-shell__scroll\">\n          <table>\n            <thead>\n              <tr>\n                <th>Discount name</th>\n                <th>Fee period</th>\n                <th>Method</th>\n                <th>Discount value</th>\n                <th>Approval note</th>\n                <th>Applied on</th>\n                <th>Status</th>\n                <th class=\"erp-table-shell__actions\">Actions</th>\n              </tr>\n            </thead>\n            <tbody>\n              @for (discount of filteredDiscounts(); track discount._id) {\n                <tr>\n                  <td>\n                    <span class=\"scheme-cell scheme-cell--discount\"\n                      ><span class=\"scheme-cell__icon\"\n                        ><svg lucideBadgePercent size=\"17\" aria-hidden=\"true\"></svg></span\n                      ><span\n                        ><strong>{{ discount.name }}</strong\n                        ><small>Approved by Accounts</small></span\n                      ></span\n                    >\n                  </td>\n                  <td>\n                    <strong>{{ discount.targetPeriodLabel }}</strong\n                    ><small>{{ discount.academicSession }}</small>\n                  </td>\n                  <td>\n                    <span class=\"fee-status fee-status--paid\">{{\n                      discount.type === 'percentage' ? 'Percentage' : 'Fixed amount'\n                    }}</span>\n                  </td>\n                  <td>\n                    <strong class=\"amount-discount\">{{\n                      discountValueLabel(discount) ??\n                        (discount.value | currency: 'INR' : 'symbol' : '1.0-2')\n                    }}</strong>\n                  </td>\n                  <td>\n                    <span class=\"private-remark\">{{ discount.internalRemark }}</span>\n                  </td>\n                  <td>\n                    {{ discount.createdAt | date: 'dd MMM yyyy'\n                    }}<small>{{ discount.createdAt | date: 'h:mm a' }}</small>\n                  </td>\n                  <td><span class=\"fee-status fee-status--paid\">Active</span></td>\n                  <td class=\"erp-table-shell__actions\">\n                    <erp-compact-action-menu\n                      [items]=\"discountRemoveActions\"\n                      (selected)=\"handleDiscountAction($event, discount)\"\n                    />\n                  </td>\n                </tr>\n              } @empty {\n                <tr>\n                  <td colspan=\"8\">\n                    <div class=\"table-empty\">\n                      <img\n                        [src]=\"discountSearch() ? assets.noResults : assets.discountTicket\"\n                        alt=\"\"\n                        loading=\"lazy\"\n                      /><strong>{{\n                        discountSearch()\n                          ? 'No discounts match your search'\n                          : 'No one-time discounts applied'\n                      }}</strong\n                      ><span>{{\n                        discountSearch()\n                          ? 'Try a different search term.'\n                          : 'Add an approved exception for a specific fee period.'\n                      }}</span>\n                    </div>\n                  </td>\n                </tr>\n              }\n            </tbody>\n          </table>\n        </div>\n        <footer class=\"table-result-footer table-result-footer--pagination\">\n          <span>Showing {{ filteredDiscounts().length }} of {{ discounts().length }} discounts</span\n          ><span class=\"table-pagination\"\n            ><button type=\"button\" aria-label=\"Previous page\" disabled>\u2039</button><b>1</b\n            ><button type=\"button\" aria-label=\"Next page\" disabled>\u203A</button></span\n          >\n        </footer>\n      </section>\n      @if (discountPanelOpen()) {\n        <section class=\"erp-card discount-workspace discount-workspace--panel\">\n          <header class=\"discount-workspace__header\">\n            <div class=\"action-workspace__intro\">\n              <span class=\"section-icon\"\n                ><svg lucideBadgePercent size=\"20\" aria-hidden=\"true\"></svg\n              ></span>\n              <div>\n                <h2>Add one-time discount</h2>\n                <p>Apply an approved exception to one fee period.</p>\n              </div>\n            </div>\n            <button\n              type=\"button\"\n              class=\"icon-button\"\n              aria-label=\"Close add discount\"\n              (click)=\"discountPanelOpen.set(false)\"\n            >\n              \u00D7\n            </button>\n          </header>\n          <div class=\"discount-form__grid\">\n            <label\n              ><span>Discount name</span\n              ><input\n                class=\"erp-control\"\n                maxlength=\"120\"\n                [(ngModel)]=\"discountName\"\n                placeholder=\"e.g. Special approval discount\" /></label\n            ><label\n              ><span>Fee period</span\n              ><select class=\"erp-control\" [(ngModel)]=\"discountLedgerId\">\n                <option value=\"\">Select fee period</option>\n                @for (ledger of ledgers(); track ledger._id) {\n                  <option [value]=\"ledger._id\">\n                    {{ ledger.periodLabel }} \u00B7 {{ ledger.academicSession }}\n                  </option>\n                }\n              </select></label\n            ><label\n              ><span>Calculation method</span\n              ><select class=\"erp-control\" [(ngModel)]=\"discountType\">\n                <option value=\"fixed\">Fixed amount</option>\n                <option value=\"percentage\">Percentage</option>\n              </select></label\n            ><label\n              ><span>{{ discountType === 'percentage' ? 'Percentage' : 'Discount amount' }}</span\n              ><input\n                class=\"erp-control\"\n                type=\"number\"\n                min=\"0.01\"\n                [max]=\"discountType === 'percentage' ? 100 : 1000000000\"\n                step=\"0.01\"\n                [(ngModel)]=\"discountValue\" /></label\n            ><label class=\"discount-form__remark\"\n              ><span>Approval note</span\n              ><textarea\n                class=\"erp-control\"\n                maxlength=\"1000\"\n                rows=\"3\"\n                [(ngModel)]=\"discountRemark\"\n                placeholder=\"Reason, approver and reference number\"\n              ></textarea\n              ><small>Internal admin record only.</small></label\n            >\n          </div>\n          <footer>\n            <button\n              class=\"erp-button erp-button--primary\"\n              type=\"button\"\n              [disabled]=\"saving() || !ledgers().length\"\n              (click)=\"createDiscount()\"\n            >\n              {{ saving() ? 'Applying\u2026' : 'Apply discount' }}\n            </button>\n          </footer>\n        </section>\n      } @else {\n        <section class=\"erp-card action-cta action-cta--dashed\">\n          <img [src]=\"assets.discountTicket\" alt=\"\" loading=\"lazy\" />\n          <div>\n            <strong>Need to add a new one-time discount?</strong>\n            <p>Apply an approved discount to a specific fee period.</p>\n          </div>\n          <button\n            class=\"erp-button erp-button--secondary\"\n            type=\"button\"\n            (click)=\"discountPanelOpen.set(true)\"\n          >\n            <svg lucidePlus size=\"16\" aria-hidden=\"true\"></svg> Add one-time discount\n          </button>\n        </section>\n      }\n      <section class=\"erp-card page-info-banner page-info-banner--plain\">\n        <span class=\"page-info-banner__icon\"\n          ><svg lucideInfo size=\"17\" aria-hidden=\"true\"></svg\n        ></span>\n        <div>\n          <strong>How one-time discounts work</strong>\n          <p>\n            One-time discounts apply only to the selected fee period and do not carry forward. If\n            the fee period already has payments, discount removal may be restricted.\n          </p>\n        </div>\n        <button type=\"button\" class=\"text-link\">\n          Learn more <svg lucideArrowRight size=\"14\" aria-hidden=\"true\"></svg>\n        </button>\n      </section>\n    }\n\n    @if (activeTab() === 'impact') {\n      <section class=\"impact-summary\" aria-label=\"Combined fee impact\">\n        <div>\n          <span class=\"metric-icon metric-icon--blue\"\n            ><svg lucideReceiptText size=\"17\" aria-hidden=\"true\"></svg></span\n          ><span>Total fees (Gross)</span\n          ><strong>{{ totalCharges() | currency: 'INR' : 'symbol' : '1.0-2' }}</strong\n          ><small>Before concessions</small>\n        </div>\n        <div class=\"impact-summary__discount\">\n          <span class=\"metric-icon metric-icon--green\"\n            ><svg lucideGraduationCap size=\"17\" aria-hidden=\"true\"></svg></span\n          ><span>Total concessions</span\n          ><strong>\u2212 {{ totalDiscounts() | currency: 'INR' : 'symbol' : '1.0-2' }}</strong\n          ><small>Scholarships & discounts</small>\n        </div>\n        <div>\n          <span class=\"metric-icon metric-icon--blue\"\n            ><svg lucideWalletCards size=\"17\" aria-hidden=\"true\"></svg></span\n          ><span>Net payable</span\n          ><strong>{{ totalPayable() | currency: 'INR' : 'symbol' : '1.0-2' }}</strong\n          ><small>After concessions</small>\n        </div>\n        <div>\n          <span class=\"metric-icon metric-icon--violet\"\n            ><svg lucideCheckCircle2 size=\"17\" aria-hidden=\"true\"></svg></span\n          ><span>Paid amount</span\n          ><strong>{{ totalPaid() | currency: 'INR' : 'symbol' : '1.0-2' }}</strong\n          ><small>Total payments made</small>\n        </div>\n        <div class=\"impact-summary__balance\">\n          <span class=\"metric-icon metric-icon--red\"\n            ><svg lucideReceiptText size=\"17\" aria-hidden=\"true\"></svg></span\n          ><span>Outstanding</span\n          ><strong>{{ totalBalance() | currency: 'INR' : 'symbol' : '1.0-2' }}</strong\n          ><small>Current balance</small>\n        </div>\n        <div>\n          <span class=\"metric-icon metric-icon--blue\"\n            ><svg lucideRefreshCw size=\"17\" aria-hidden=\"true\"></svg></span\n          ><span>Last recalculated</span\n          ><strong>{{\n            lastRecalculated() ? (lastRecalculated() | date: 'dd MMM yyyy') : 'Not yet'\n          }}</strong\n          ><small>{{\n            lastRecalculated() ? (lastRecalculated() | date: 'h:mm a') : 'Awaiting ledger'\n          }}</small>\n        </div>\n      </section>\n      <div class=\"impact-layout\">\n        <div class=\"impact-main\">\n          <section class=\"erp-card erp-table-shell impact-breakdown-card\">\n            <div class=\"erp-table-toolbar\">\n              <div>\n                <h2>Fee head impact breakdown</h2>\n                <p>Detailed impact of each fee head after applying scholarships and discounts.</p>\n              </div>\n              <div class=\"section-card__actions\">\n                <label class=\"compact-select\"\n                  ><svg lucideCalendarDays size=\"15\" aria-hidden=\"true\"></svg\n                  ><select\n                    aria-label=\"Select fee period\"\n                    [ngModel]=\"selectedImpactLedgerId()\"\n                    (ngModelChange)=\"selectedImpactLedgerId.set($event)\"\n                  >\n                    @for (ledger of ledgers(); track ledger._id) {\n                      <option [value]=\"ledger._id\">\n                        {{ ledger.periodLabel }} ({{ ledger.academicSession }})\n                      </option>\n                    }\n                  </select></label\n                ><button class=\"erp-button erp-button--secondary\" type=\"button\">\n                  <svg lucideDownload size=\"15\" aria-hidden=\"true\"></svg> Export\n                </button>\n              </div>\n            </div>\n            @if (visibleImpactLedgers().length) {\n              <div class=\"fee-impact-list\">\n                @for (ledger of visibleImpactLedgers(); track ledger._id) {\n                  <section class=\"fee-ledger\">\n                    <header class=\"fee-ledger__header\">\n                      <div class=\"fee-ledger__title\">\n                        <span class=\"section-icon\"\n                          ><svg lucideReceiptText size=\"19\" aria-hidden=\"true\"></svg\n                        ></span>\n                        <div>\n                          <h2>{{ ledger.periodLabel }}</h2>\n                          <p>\n                            {{ ledger.academicSession }} \u00B7 {{ ledger.feeBookCode }} \u00B7\n                            {{ ledger.name }}\n                          </p>\n                        </div>\n                      </div>\n                      <div class=\"fee-ledger__totals\">\n                        <span\n                          >Payable<strong>{{\n                            ledger.totalAmount | currency: 'INR' : 'symbol' : '1.0-2'\n                          }}</strong></span\n                        ><span\n                          >Outstanding<strong>{{\n                            ledger.balanceAmount | currency: 'INR' : 'symbol' : '1.0-2'\n                          }}</strong></span\n                        ><span\n                          class=\"fee-status\"\n                          [class.fee-status--paid]=\"ledger.paymentStatus === 'paid'\"\n                          [class.fee-status--partial]=\"ledger.paymentStatus === 'partial'\"\n                          >{{\n                            ledger.paymentStatus === 'partial'\n                              ? 'Part paid'\n                              : (ledger.paymentStatus | titlecase)\n                          }}</span\n                        >\n                      </div>\n                    </header>\n                    <div class=\"erp-table-shell__scroll\">\n                      <table class=\"fee-head-table\">\n                        <thead class=\"fee-impact-table__head\">\n                          <tr>\n                            <th rowspan=\"2\">Fee head</th>\n                            <th rowspan=\"2\">Gross amount</th>\n                            @if (assignments().length) {\n                              <th\n                                class=\"fee-impact-group fee-impact-group--scholarship\"\n                                [attr.colspan]=\"assignments().length\"\n                              >\n                                Scholarships\n                              </th>\n                            }\n                            @if (discounts().length) {\n                              <th\n                                class=\"fee-impact-group fee-impact-group--discount\"\n                                [attr.colspan]=\"discounts().length\"\n                              >\n                                One-time discount\n                              </th>\n                            }\n                            <th rowspan=\"2\">Net impact</th>\n                            <th rowspan=\"2\">Paid</th>\n                            <th rowspan=\"2\">Balance</th>\n                            <th rowspan=\"2\">Status</th>\n                          </tr>\n                          <tr>\n                            @for (assignment of assignments(); track assignment._id) {\n                              <th class=\"fee-impact-subhead fee-impact-subhead--scholarship\">\n                                {{ assignment.scholarshipName }}\n                                <small>({{ assignmentValue(assignment) ?? 'Fixed' }})</small>\n                              </th>\n                            }\n                            @for (discount of discounts(); track discount._id) {\n                              <th class=\"fee-impact-subhead fee-impact-subhead--discount\">\n                                {{ discount.name }}\n                              </th>\n                            }\n                          </tr>\n                        </thead>\n                        <tbody>\n                          @for (\n                            entry of feeHeadEntries(ledger);\n                            track entry.feeHeadId + entry.feeHeadName + entry.category\n                          ) {\n                            <tr>\n                              <td>\n                                <span class=\"fee-head-name\"\n                                  ><svg lucideReceiptText size=\"15\" aria-hidden=\"true\"></svg\n                                  ><strong>{{ entry.feeHeadName }}</strong></span\n                                >\n                              </td>\n                              <td>\n                                <strong>{{\n                                  entry.amount | currency: 'INR' : 'symbol' : '1.0-2'\n                                }}</strong>\n                              </td>\n                              @for (assignment of assignments(); track assignment._id) {\n                                <td class=\"amount-discount\">\n                                  {{\n                                    scholarshipImpact(ledger, assignment, entry.feeHeadName)\n                                      ? '\u2212 ' +\n                                        (scholarshipImpact(ledger, assignment, entry.feeHeadName)\n                                          | currency: 'INR' : 'symbol' : '1.0-2')\n                                      : '\u2014'\n                                  }}\n                                </td>\n                              }\n                              @for (discount of discounts(); track discount._id) {\n                                <td class=\"amount-one-time\">\n                                  {{\n                                    discountImpact(ledger, discount, entry.feeHeadName)\n                                      ? '\u2212 ' +\n                                        (discountImpact(ledger, discount, entry.feeHeadName)\n                                          | currency: 'INR' : 'symbol' : '1.0-2')\n                                      : '\u2014'\n                                  }}\n                                </td>\n                              }\n                              <td>\n                                <strong class=\"amount-primary\">{{\n                                  feeHeadNetAmount(entry) | currency: 'INR' : 'symbol' : '1.0-2'\n                                }}</strong>\n                              </td>\n                              <td>{{ entry.paidAmount | currency: 'INR' : 'symbol' : '1.0-2' }}</td>\n                              <td [class.amount-due]=\"entry.balanceAmount > 0\">\n                                {{ entry.balanceAmount | currency: 'INR' : 'symbol' : '1.0-2' }}\n                              </td>\n                              <td>\n                                <span\n                                  class=\"fee-status\"\n                                  [class.fee-status--paid]=\"entry.status === 'paid'\"\n                                  [class.fee-status--partial]=\"entry.status === 'partial'\"\n                                  >{{ statusLabel(entry.status) }}</span\n                                >\n                              </td>\n                            </tr>\n                          } @empty {\n                            <tr>\n                              <td\n                                [attr.colspan]=\"6 + assignments().length + discounts().length\"\n                                class=\"erp-empty-state\"\n                              >\n                                No fee-head entries exist for this period.\n                              </td>\n                            </tr>\n                          }\n                        </tbody>\n                        <tfoot>\n                          <tr>\n                            <th>Total ({{ ledger.periodLabel }})</th>\n                            <th>\n                              {{ ledger.chargeAmount | currency: 'INR' : 'symbol' : '1.0-2' }}\n                            </th>\n                            @for (assignment of assignments(); track assignment._id) {\n                              <th class=\"amount-discount\">\n                                \u2212\n                                {{\n                                  scholarshipImpact(ledger, assignment, 'Tuition Fee')\n                                    | currency: 'INR' : 'symbol' : '1.0-2'\n                                }}\n                              </th>\n                            }\n                            @for (discount of discounts(); track discount._id) {\n                              <th class=\"amount-one-time\">\n                                \u2212\n                                {{\n                                  discountImpact(ledger, discount, 'Tuition Fee')\n                                    | currency: 'INR' : 'symbol' : '1.0-2'\n                                }}\n                              </th>\n                            }\n                            <th class=\"amount-primary\">\n                              {{ ledger.totalAmount | currency: 'INR' : 'symbol' : '1.0-2' }}\n                            </th>\n                            <th>{{ ledger.paidAmount | currency: 'INR' : 'symbol' : '1.0-2' }}</th>\n                            <th class=\"amount-due\">\n                              {{ ledger.balanceAmount | currency: 'INR' : 'symbol' : '1.0-2' }}\n                            </th>\n                            <th>\n                              <span\n                                class=\"fee-status\"\n                                [class.fee-status--paid]=\"ledger.paymentStatus === 'paid'\"\n                                >{{ ledger.paymentStatus === 'paid' ? 'Paid' : 'Due' }}</span\n                              >\n                            </th>\n                          </tr>\n                        </tfoot>\n                      </table>\n                    </div>\n                  </section>\n                }\n              </div>\n            } @else {\n              <div class=\"illustration-empty-state\">\n                <img [src]=\"assets.campusUnavailable\" alt=\"\" loading=\"lazy\" /><strong\n                  >No academic fee ledger yet</strong\n                ><span>Fee impact will appear when the student's fee period is generated.</span>\n              </div>\n            }\n          </section>\n          <section class=\"erp-card page-info-banner page-info-banner--plain impact-note\">\n            <span class=\"page-info-banner__icon\"\n              ><svg lucideInfo size=\"17\" aria-hidden=\"true\"></svg\n            ></span>\n            <div>\n              <p>Concessions apply to future and unpaid periods. Paid amounts remain unchanged.</p>\n            </div>\n          </section>\n        </div>\n        <aside class=\"impact-aside\">\n          <section class=\"erp-card insights-card\">\n            <header>\n              <h2>Key insights</h2>\n              <svg lucideInfo size=\"16\" aria-hidden=\"true\"></svg>\n            </header>\n            <div class=\"insight-card insight-card--success\">\n              <span><svg lucideCheckCircle2 size=\"17\" aria-hidden=\"true\"></svg></span>\n              <div>\n                <strong>Concessions applied</strong\n                ><small\n                  >{{ totalDiscounts() | currency: 'INR' : 'symbol' : '1.0-2' }} saved from total\n                  fees</small\n                >\n              </div>\n            </div>\n            <div class=\"insight-card insight-card--warning\">\n              <span><svg lucideReceiptText size=\"17\" aria-hidden=\"true\"></svg></span>\n              <div>\n                <strong>Next due</strong\n                ><small>{{ totalBalance() | currency: 'INR' : 'symbol' : '1.0-2' }} is due</small>\n              </div>\n            </div>\n            <div class=\"insight-card insight-card--blue\">\n              <span><svg lucideWalletCards size=\"17\" aria-hidden=\"true\"></svg></span>\n              <div>\n                <strong>Most impact</strong\n                ><small\n                  >Tuition Fee \u00B7\n                  {{\n                    mostImpactfulLedger()?.discountAmount | currency: 'INR' : 'symbol' : '1.0-2'\n                  }}\n                  total concession</small\n                >\n              </div>\n            </div>\n            <div class=\"insight-card insight-card--violet\">\n              <span><svg lucideCalendarDays size=\"17\" aria-hidden=\"true\"></svg></span>\n              <div>\n                <strong>Periods affected</strong\n                ><small\n                  >{{ affectedPeriods() }} fee period{{ affectedPeriods() === 1 ? '' : 's' }} \u00B7\n                  {{ mostImpactfulLedger()?.periodLabel || 'No period' }}</small\n                >\n              </div>\n            </div>\n          </section>\n          <section class=\"erp-card recalculate-card\">\n            <div>\n              <h2>Need to recalculate?</h2>\n              <p>Recalculate fee impact if any scholarship or discount changes.</p>\n            </div>\n            <button\n              class=\"erp-button erp-button--secondary\"\n              type=\"button\"\n              [disabled]=\"loading()\"\n              (click)=\"load()\"\n            >\n              <svg lucideRefreshCw size=\"15\" aria-hidden=\"true\"></svg>\n              {{ loading() ? 'Recalculating\u2026' : 'Recalculate now' }}\n            </button>\n          </section>\n        </aside>\n      </div>\n    }\n  }\n</erp-admin-page>\n\n@if (removingAssignment(); as assignment) {\n  <erp-confirm-dialog\n    title=\"Remove scholarship?\"\n    [message]=\"\n      'Remove ' +\n      assignment.scholarshipName +\n      ' from future and unpaid fee periods? Paid records are preserved.'\n    \"\n    confirmLabel=\"Remove scholarship\"\n    (cancelled)=\"cancelRemove()\"\n    (confirmed)=\"remove(assignment)\"\n  />\n}\n@if (removingDiscount(); as discount) {\n  <erp-confirm-dialog\n    title=\"Remove one-time discount?\"\n    [message]=\"\n      'Remove ' +\n      discount.name +\n      ' from ' +\n      discount.targetPeriodLabel +\n      '? Paid records are preserved.'\n    \"\n    confirmLabel=\"Remove discount\"\n    (cancelled)=\"cancelDiscountRemove()\"\n    (confirmed)=\"removeDiscount(discount)\"\n  />\n}\n", styles: ["/* ERP-LOCAL-STYLE: Full-width scholarship review workspace needs dense financial summaries, support management forms, and fee-head comparison tables. */\n:host {\n  display: block;\n}\n\n.student-context {\n  display: grid;\n  grid-template-columns: minmax(17rem, 1fr) minmax(34rem, 1.4fr);\n  align-items: center;\n  gap: var(--erp-space-5);\n  padding: var(--erp-space-4);\n  margin-bottom: var(--erp-space-3);\n}\n\n.student-context__identity,\n.student-context__name-line,\n.student-context__facts,\n.student-context__facts div,\n.support-panel header,\n.support-panel header div,\n.support-record,\n.action-workspace,\n.action-workspace__intro,\n.fee-ledger__header,\n.fee-ledger__title,\n.fee-ledger__totals {\n  display: flex;\n  align-items: center;\n}\n\n.student-context__identity {\n  min-width: 0;\n  gap: var(--erp-space-3);\n}\n\n.student-context__avatar,\n.section-icon {\n  display: inline-grid;\n  flex: 0 0 auto;\n  place-items: center;\n  color: var(--erp-blue-700);\n  background: var(--erp-blue-50);\n  border: 1px solid var(--erp-blue-100);\n  border-radius: var(--erp-radius-compact);\n}\n\n.student-context__avatar {\n  width: 40px;\n  height: 40px;\n  border-radius: var(--erp-radius-avatar);\n  font-size: var(--erp-font-size-sm);\n  font-weight: var(--erp-weight-bold);\n}\n\n.student-context__name-line {\n  gap: var(--erp-space-2);\n}\n\n.student-context h2,\n.student-context p,\n.support-panel h2,\n.action-workspace h2,\n.action-workspace p,\n.discount-workspace h2,\n.discount-workspace p,\n.fee-ledger h2,\n.fee-ledger p {\n  margin: 0;\n}\n\n.student-context h2 {\n  overflow: hidden;\n  color: var(--erp-text-heading);\n  font-size: var(--erp-font-size-lg);\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n\n.student-context p {\n  margin-top: 2px;\n  color: var(--erp-text-muted);\n  font-size: var(--erp-font-size-xs);\n}\n\n.student-context__facts {\n  justify-content: flex-end;\n  margin: 0;\n}\n\n.student-context__facts div {\n  min-width: 0;\n  flex: 1 1 8rem;\n  align-items: flex-start;\n  flex-direction: column;\n  gap: 2px;\n  padding: 0 var(--erp-space-4);\n  border-left: 1px solid var(--erp-border-subtle);\n}\n\n.student-context__facts dt {\n  color: var(--erp-text-muted);\n  font-size: var(--erp-font-size-2xs);\n}\n\n.student-context__facts dd {\n  max-width: 100%;\n  overflow: hidden;\n  margin: 0;\n  color: var(--erp-text-heading);\n  font-size: var(--erp-font-size-xs);\n  font-weight: var(--erp-weight-semibold);\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n\n.scholarship-tabs {\n  display: flex;\n  gap: var(--erp-space-1);\n  padding: var(--erp-space-1);\n  margin-bottom: var(--erp-space-4);\n  overflow-x: auto;\n  background: var(--erp-surface-detail);\n  border: 1px solid var(--erp-border-subtle);\n  border-radius: var(--erp-radius-compact);\n}\n\n.scholarship-tabs button {\n  display: inline-flex;\n  min-height: var(--erp-control-height);\n  align-items: center;\n  gap: var(--erp-space-2);\n  padding: 0 var(--erp-space-3);\n  white-space: nowrap;\n  color: var(--erp-text-muted);\n  font-size: var(--erp-font-size-xs);\n  font-weight: var(--erp-weight-semibold);\n  background: transparent;\n  border: 1px solid transparent;\n  border-radius: var(--erp-radius-control);\n  cursor: pointer;\n  transition: var(--erp-control-transition);\n}\n\n.scholarship-tabs button:hover {\n  color: var(--erp-text-heading);\n  background: var(--erp-surface-hover);\n}\n\n.scholarship-tabs button.is-active {\n  color: var(--erp-blue-700);\n  background: var(--erp-surface);\n  border-color: var(--erp-border-default);\n  box-shadow: var(--erp-shadow-card);\n}\n\n.scholarship-tabs small {\n  display: inline-grid;\n  min-width: 19px;\n  height: 19px;\n  place-items: center;\n  font-size: var(--erp-font-size-2xs);\n  background: var(--erp-surface-neutral);\n  border-radius: var(--erp-radius-pill);\n}\n\n.financial-summary,\n.impact-summary {\n  display: grid;\n  grid-template-columns: repeat(5, minmax(0, 1fr));\n  overflow: hidden;\n  margin-bottom: var(--erp-space-4);\n  background: var(--erp-surface);\n  border: 1px solid var(--erp-border-default);\n  border-radius: var(--erp-radius-card);\n  box-shadow: var(--erp-shadow-card);\n}\n\n.financial-summary__item,\n.impact-summary > div {\n  display: grid;\n  min-width: 0;\n  gap: var(--erp-space-1);\n  padding: var(--erp-space-4);\n  text-align: left;\n  background: transparent;\n  border: 0;\n  border-right: 1px solid var(--erp-border-subtle);\n}\n\n.financial-summary__item {\n  color: inherit;\n  cursor: pointer;\n}\n\n.financial-summary__item:last-child,\n.impact-summary > div:last-child {\n  border-right: 0;\n}\n\n.financial-summary__item:hover {\n  background: var(--erp-surface-hover);\n}\n\n.financial-summary span,\n.impact-summary span {\n  color: var(--erp-text-muted);\n  font-size: var(--erp-font-size-2xs);\n  font-weight: var(--erp-weight-semibold);\n}\n\n.financial-summary strong,\n.impact-summary strong {\n  overflow: hidden;\n  color: var(--erp-text-heading);\n  font-size: var(--erp-font-size-lg);\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n\n.financial-summary small {\n  color: var(--erp-text-light);\n  font-size: var(--erp-font-size-2xs);\n}\n\n.financial-summary__item--discount strong,\n.impact-summary__discount strong,\n.amount-discount {\n  color: var(--erp-success-text);\n}\n\n.financial-summary__item--balance,\n.impact-summary__balance {\n  background: var(--erp-blue-50);\n}\n\n.overview-periods {\n  margin-bottom: var(--erp-space-4);\n}\n\n.erp-table-shell td > small {\n  display: block;\n  margin-top: 2px;\n  color: var(--erp-text-muted);\n  font-size: var(--erp-font-size-2xs);\n}\n\n.support-grid {\n  display: grid;\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n  gap: var(--erp-space-4);\n}\n\n.support-panel {\n  overflow: hidden;\n}\n\n.support-panel header {\n  justify-content: space-between;\n  padding: var(--erp-space-3) var(--erp-space-4);\n  background: var(--erp-surface-detail-soft);\n  border-bottom: 1px solid var(--erp-border-subtle);\n}\n\n.support-panel header div {\n  gap: var(--erp-space-2);\n  color: var(--erp-blue-700);\n}\n\n.support-panel h2 {\n  color: var(--erp-text-heading);\n  font-size: var(--erp-font-label);\n}\n\n.support-panel header button,\n.support-empty {\n  color: var(--erp-text-link);\n  font-size: var(--erp-font-size-xs);\n  font-weight: var(--erp-weight-semibold);\n  background: none;\n  border: 0;\n  cursor: pointer;\n}\n\n.support-record {\n  justify-content: space-between;\n  gap: var(--erp-space-4);\n  padding: var(--erp-space-3) var(--erp-space-4);\n  border-bottom: 1px solid var(--erp-border-subtle);\n}\n\n.support-record:last-child {\n  border-bottom: 0;\n}\n\n.support-record strong,\n.support-record small {\n  display: block;\n}\n\n.support-record small {\n  margin-top: 2px;\n  color: var(--erp-text-muted);\n  font-size: var(--erp-font-size-2xs);\n}\n\n.support-record b {\n  color: var(--erp-success-text);\n  font-size: var(--erp-font-size-sm);\n}\n\n.support-empty {\n  width: 100%;\n  min-height: 78px;\n  text-align: center;\n}\n\n.action-workspace {\n  justify-content: space-between;\n  gap: var(--erp-space-5);\n  padding: var(--erp-space-4);\n  margin-bottom: var(--erp-space-4);\n}\n\n.action-workspace__intro {\n  gap: var(--erp-space-3);\n}\n\n.section-icon {\n  width: 38px;\n  height: 38px;\n}\n\n.action-workspace h2,\n.discount-workspace h2,\n.fee-ledger h2 {\n  color: var(--erp-text-heading);\n  font-size: var(--erp-font-label);\n}\n\n.action-workspace p,\n.discount-workspace p,\n.fee-ledger p {\n  margin-top: 2px;\n  color: var(--erp-text-muted);\n  font-size: var(--erp-font-size-2xs);\n}\n\n.action-workspace__controls {\n  display: grid;\n  min-width: min(100%, 36rem);\n  grid-template-columns: minmax(16rem, 1fr) auto;\n  align-items: end;\n  gap: var(--erp-space-3);\n}\n\n.action-workspace__controls label,\n.discount-form__grid label {\n  display: grid;\n  gap: var(--erp-space-2);\n  color: var(--erp-text-body);\n  font-size: var(--erp-font-size-xs);\n  font-weight: var(--erp-weight-semibold);\n}\n\n.discount-workspace {\n  padding: var(--erp-space-4);\n  margin-bottom: var(--erp-space-4);\n}\n\n.discount-workspace__header {\n  display: flex;\n  align-items: center;\n  gap: var(--erp-space-3);\n  padding-bottom: var(--erp-space-4);\n  border-bottom: 1px solid var(--erp-border-subtle);\n}\n\n.discount-form__grid {\n  display: grid;\n  grid-template-columns: repeat(4, minmax(0, 1fr));\n  gap: var(--erp-space-4);\n  padding-top: var(--erp-space-4);\n}\n\n.discount-form__remark {\n  grid-column: 1 / -1;\n}\n\n.discount-form__remark textarea {\n  min-height: 72px;\n  resize: vertical;\n}\n\n.discount-form__remark small {\n  color: var(--erp-text-muted);\n  font-size: var(--erp-font-size-2xs);\n  font-weight: var(--erp-weight-regular);\n}\n\n.discount-workspace footer {\n  display: flex;\n  justify-content: flex-end;\n  padding-top: var(--erp-space-4);\n}\n\n.private-remark {\n  display: block;\n  min-width: 12rem;\n  max-width: 28rem;\n  white-space: normal;\n}\n\n.fee-status,\n.entry-type {\n  display: inline-flex;\n  width: max-content;\n  align-items: center;\n  padding: 3px var(--erp-space-2);\n  color: var(--erp-danger-text);\n  font-size: var(--erp-font-size-2xs);\n  font-weight: var(--erp-weight-semibold);\n  white-space: nowrap;\n  background: var(--erp-danger-bg);\n  border-radius: var(--erp-radius-pill);\n}\n\n.fee-status--paid {\n  color: var(--erp-success-text);\n  background: var(--erp-success-bg);\n}\n\n.fee-status--partial {\n  color: var(--erp-warning-text);\n  background: var(--erp-warning-bg);\n}\n\n.entry-type {\n  color: var(--erp-text-body);\n  background: var(--erp-surface-neutral);\n}\n\n.entry-type--discount {\n  color: var(--erp-success-text);\n  background: var(--erp-success-bg);\n}\n\n.fee-impact-list {\n  display: grid;\n  gap: var(--erp-space-4);\n}\n\n.fee-ledger__header {\n  justify-content: space-between;\n  gap: var(--erp-space-5);\n  padding: var(--erp-space-3) var(--erp-space-4);\n  background: var(--erp-surface-detail-soft);\n  border-bottom: 1px solid var(--erp-border-default);\n}\n\n.fee-ledger__title {\n  gap: var(--erp-space-3);\n}\n\n.fee-ledger__totals {\n  gap: var(--erp-space-5);\n}\n\n.fee-ledger__totals > span:not(.fee-status) {\n  display: grid;\n  gap: 2px;\n  color: var(--erp-text-muted);\n  font-size: var(--erp-font-size-2xs);\n}\n\n.fee-ledger__totals strong {\n  color: var(--erp-text-heading);\n  font-size: var(--erp-font-size-xs);\n}\n\n.fee-head-table {\n  min-width: 1120px;\n}\n\n.fee-head-table__adjustment {\n  background: var(--erp-surface-detail-soft);\n}\n\n.fee-head-table tfoot th {\n  color: var(--erp-text-heading);\n  background: var(--erp-blue-50);\n  border-top: 1px solid var(--erp-blue-100);\n}\n\n@media (max-width: 1180px) {\n  .student-context {\n    grid-template-columns: 1fr;\n  }\n\n  .student-context__facts {\n    justify-content: flex-start;\n  }\n\n  .student-context__facts div:first-child {\n    padding-left: 0;\n    border-left: 0;\n  }\n\n  .financial-summary,\n  .impact-summary {\n    grid-template-columns: repeat(3, minmax(0, 1fr));\n  }\n\n  .financial-summary__item:nth-child(3),\n  .impact-summary > div:nth-child(3) {\n    border-right: 0;\n  }\n\n  .financial-summary__item:nth-child(n + 4),\n  .impact-summary > div:nth-child(n + 4) {\n    border-top: 1px solid var(--erp-border-subtle);\n  }\n\n  .discount-form__grid {\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n  }\n}\n\n@media (max-width: 820px) {\n  .action-workspace,\n  .fee-ledger__header {\n    align-items: stretch;\n    flex-direction: column;\n  }\n\n  .action-workspace__controls {\n    width: 100%;\n    min-width: 0;\n  }\n\n  .support-grid {\n    grid-template-columns: 1fr;\n  }\n\n  .fee-ledger__totals {\n    justify-content: space-between;\n  }\n}\n\n@media (max-width: 640px) {\n  .student-context__facts {\n    display: grid;\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n    gap: var(--erp-space-3);\n  }\n\n  .student-context__facts div,\n  .student-context__facts div:first-child {\n    padding: 0;\n    border-left: 0;\n  }\n\n  .financial-summary,\n  .impact-summary {\n    grid-template-columns: 1fr 1fr;\n  }\n\n  .financial-summary__item,\n  .impact-summary > div,\n  .financial-summary__item:nth-child(3),\n  .impact-summary > div:nth-child(3) {\n    border-right: 1px solid var(--erp-border-subtle);\n    border-top: 1px solid var(--erp-border-subtle);\n  }\n\n  .financial-summary__item:nth-child(odd),\n  .impact-summary > div:nth-child(odd) {\n    border-right: 0;\n  }\n\n  .financial-summary__item:first-child,\n  .financial-summary__item:nth-child(2),\n  .impact-summary > div:first-child,\n  .impact-summary > div:nth-child(2) {\n    border-top: 0;\n  }\n\n  .action-workspace__controls,\n  .discount-form__grid {\n    grid-template-columns: 1fr;\n  }\n\n  .discount-form__remark {\n    grid-column: auto;\n  }\n\n  .fee-ledger__totals {\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    gap: var(--erp-space-3);\n  }\n}\n\n/* Reference-aligned scholarship workspace: compact cards, quiet borders and clear hierarchy. */\n.student-context {\n  min-height: 100px;\n  margin-bottom: var(--erp-space-3);\n  padding-inline: var(--erp-space-5);\n  border-color: var(--erp-blue-100);\n}\n\n.student-context__avatar {\n  width: 48px;\n  height: 48px;\n}\n\n.scholarship-tabs {\n  min-height: 56px;\n  align-items: stretch;\n  padding: 0 var(--erp-space-2);\n  background: var(--erp-surface);\n  border-color: var(--erp-blue-100);\n  border-radius: var(--erp-radius-card);\n}\n\n.scholarship-tabs button {\n  position: relative;\n  min-height: 56px;\n  padding-inline: var(--erp-space-4);\n  border-radius: 0;\n}\n\n.scholarship-tabs button.is-active {\n  color: var(--erp-blue-700);\n  background: transparent;\n  border-color: transparent;\n  box-shadow: none;\n}\n\n.scholarship-tabs button.is-active::after {\n  position: absolute;\n  right: var(--erp-space-3);\n  bottom: -1px;\n  left: var(--erp-space-3);\n  height: 3px;\n  content: '';\n  background: var(--erp-blue-600);\n  border-radius: var(--erp-radius-pill) var(--erp-radius-pill) 0 0;\n}\n\n.financial-summary,\n.impact-summary {\n  grid-template-columns: repeat(6, minmax(0, 1fr));\n}\n\n.financial-summary__item,\n.impact-summary > div {\n  position: relative;\n  min-height: 128px;\n  gap: 3px;\n  padding: var(--erp-space-3);\n}\n\n.financial-summary__item > span:not(.metric-icon),\n.impact-summary > div > span:not(.metric-icon) {\n  margin-top: 5px;\n}\n\n.metric-icon {\n  display: inline-grid;\n  width: 30px;\n  height: 30px;\n  place-items: center;\n  color: var(--erp-blue-700);\n  background: var(--erp-blue-50);\n  border: 1px solid var(--erp-blue-100);\n  border-radius: var(--erp-radius-avatar);\n}\n\n.metric-icon--green {\n  color: var(--erp-success-text);\n  background: var(--erp-success-bg);\n  border-color: var(--erp-success-border);\n}\n\n.metric-icon--red {\n  color: var(--erp-danger-text);\n  background: var(--erp-danger-bg);\n  border-color: var(--erp-danger-border-soft, var(--erp-border-default));\n}\n\n.metric-icon--violet {\n  color: var(--erp-purple-700, var(--erp-blue-700));\n  background: var(--erp-purple-50, var(--erp-blue-50));\n  border-color: var(--erp-purple-100, var(--erp-blue-100));\n}\n\n.financial-summary__item--status strong {\n  color: var(--erp-danger-text);\n}\n\n.overview-grid,\n.impact-layout {\n  display: grid;\n  grid-template-columns: minmax(0, 1.65fr) minmax(18rem, 0.85fr);\n  gap: var(--erp-space-4);\n  align-items: start;\n}\n\n.overview-periods,\n.impact-breakdown-card {\n  min-width: 0;\n}\n\n.overview-periods .erp-table-toolbar,\n.impact-breakdown-card > .erp-table-toolbar {\n  min-height: 70px;\n}\n\n.erp-table-toolbar h2,\n.erp-table-toolbar p {\n  margin: 0;\n}\n\n.erp-table-toolbar p {\n  margin-top: 3px;\n  color: var(--erp-text-muted);\n  font-size: var(--erp-font-size-2xs);\n}\n\n.overview-side-stack,\n.impact-aside {\n  display: grid;\n  gap: var(--erp-space-4);\n  min-width: 0;\n}\n\n.support-panel {\n  min-width: 0;\n}\n\n.support-empty--illustrated {\n  display: grid;\n  min-height: 155px;\n  justify-items: center;\n  gap: 3px;\n  padding: var(--erp-space-4);\n  text-align: center;\n}\n\n.support-empty--illustrated img {\n  width: 66px;\n  height: 54px;\n  object-fit: contain;\n}\n\n.support-empty--illustrated strong {\n  color: var(--erp-text-heading);\n  font-size: var(--erp-font-size-xs);\n}\n\n.support-empty--illustrated small {\n  color: var(--erp-text-muted);\n  font-size: var(--erp-font-size-2xs);\n}\n\n.support-empty--illustrated button {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  margin-top: var(--erp-space-2);\n  color: var(--erp-text-link);\n  font-size: var(--erp-font-size-2xs);\n  font-weight: var(--erp-weight-semibold);\n  background: none;\n  border: 0;\n  cursor: pointer;\n}\n\n.page-info-banner,\n.action-cta {\n  display: flex;\n  align-items: center;\n  gap: var(--erp-space-4);\n  padding: var(--erp-space-3) var(--erp-space-4);\n  margin-top: var(--erp-space-4);\n  border-color: var(--erp-blue-100);\n  background: var(--erp-blue-50);\n}\n\n.page-info-banner img {\n  width: 46px;\n  height: 42px;\n  object-fit: contain;\n}\n\n.page-info-banner div,\n.action-cta > div {\n  min-width: 0;\n  flex: 1;\n}\n\n.page-info-banner strong,\n.action-cta strong {\n  color: var(--erp-text-heading);\n  font-size: var(--erp-font-size-xs);\n}\n\n.page-info-banner p,\n.action-cta p {\n  margin: 3px 0 0;\n  color: var(--erp-text-muted);\n  font-size: var(--erp-font-size-2xs);\n}\n\n.action-cta img {\n  width: 72px;\n  height: 58px;\n  object-fit: contain;\n}\n\n.section-card {\n  overflow: visible;\n}\n\n.section-card tbody td {\n  padding-block: var(--erp-space-5);\n}\n\n.section-card__toolbar {\n  min-height: 72px;\n}\n\n.section-card__actions {\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n  gap: var(--erp-space-2);\n  flex-wrap: wrap;\n}\n\n.inline-search,\n.compact-select {\n  display: inline-flex;\n  min-height: var(--erp-control-height);\n  align-items: center;\n  gap: var(--erp-space-2);\n  padding-inline: var(--erp-space-3);\n  color: var(--erp-text-muted);\n  background: var(--erp-surface);\n  border: 1px solid var(--erp-border-default);\n  border-radius: var(--erp-radius-control);\n}\n\n.inline-search input,\n.compact-select select {\n  min-width: 11rem;\n  height: 30px;\n  color: var(--erp-text-body);\n  font: inherit;\n  background: transparent;\n  border: 0;\n  outline: 0;\n}\n\n.compact-select select {\n  min-width: 10rem;\n}\n\n.inline-search:focus-within,\n.compact-select:focus-within {\n  border-color: var(--erp-blue-500);\n  box-shadow: var(--erp-focus-ring);\n}\n\n.table-empty,\n.illustration-empty-state {\n  display: grid;\n  min-height: 178px;\n  justify-items: center;\n  align-content: center;\n  gap: var(--erp-space-2);\n  padding: var(--erp-space-5);\n  color: var(--erp-text-muted);\n  text-align: center;\n}\n\n.table-empty img,\n.illustration-empty-state img {\n  width: 94px;\n  height: 76px;\n  object-fit: contain;\n}\n\n.table-empty strong,\n.illustration-empty-state strong {\n  color: var(--erp-text-heading);\n  font-size: var(--erp-font-size-sm);\n}\n\n.table-empty span,\n.illustration-empty-state span {\n  font-size: var(--erp-font-size-xs);\n}\n\n.action-workspace--panel,\n.discount-workspace--panel {\n  display: block;\n  padding: var(--erp-space-4);\n  margin-top: var(--erp-space-4);\n  border-color: var(--erp-blue-200, var(--erp-border-default));\n}\n\n.workspace-header,\n.discount-workspace__header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding-bottom: var(--erp-space-3);\n  border-bottom: 1px solid var(--erp-border-subtle);\n}\n\n.icon-button {\n  display: inline-grid;\n  width: 30px;\n  height: 30px;\n  place-items: center;\n  color: var(--erp-text-muted);\n  font-size: 22px;\n  line-height: 1;\n  background: transparent;\n  border: 0;\n  border-radius: var(--erp-radius-control);\n  cursor: pointer;\n}\n\n.icon-button:hover {\n  color: var(--erp-text-heading);\n  background: var(--erp-surface-hover);\n}\n\n.impact-breakdown-card {\n  overflow: hidden;\n}\n\n.impact-breakdown-card .fee-impact-list {\n  padding: 0 var(--erp-space-3) var(--erp-space-3);\n}\n\n.insights-card,\n.recalculate-card {\n  padding: var(--erp-space-4);\n}\n\n.insights-card > header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding-bottom: var(--erp-space-3);\n  color: var(--erp-text-muted);\n  border-bottom: 1px solid var(--erp-border-subtle);\n}\n\n.insights-card h2,\n.recalculate-card h2 {\n  margin: 0;\n  color: var(--erp-text-heading);\n  font-size: var(--erp-font-label);\n}\n\n.insight-card {\n  display: flex;\n  align-items: flex-start;\n  gap: var(--erp-space-2);\n  padding: var(--erp-space-3);\n  margin-top: var(--erp-space-2);\n  border-radius: var(--erp-radius-control);\n}\n\n.insight-card > span {\n  display: inline-grid;\n  width: 28px;\n  height: 28px;\n  flex: 0 0 auto;\n  place-items: center;\n  border-radius: var(--erp-radius-avatar);\n}\n\n.insight-card > div {\n  display: grid;\n  gap: 2px;\n}\n\n.insight-card strong {\n  color: var(--erp-text-heading);\n  font-size: var(--erp-font-size-xs);\n}\n\n.insight-card small {\n  color: var(--erp-text-muted);\n  font-size: var(--erp-font-size-2xs);\n}\n\n.insight-card--success {\n  background: var(--erp-success-bg);\n}\n.insight-card--success > span {\n  color: var(--erp-success-text);\n  background: var(--erp-surface);\n}\n.insight-card--warning {\n  background: var(--erp-warning-bg);\n}\n.insight-card--warning > span {\n  color: var(--erp-warning-text);\n  background: var(--erp-surface);\n}\n.insight-card--blue {\n  background: var(--erp-blue-50);\n}\n.insight-card--blue > span {\n  color: var(--erp-blue-700);\n  background: var(--erp-surface);\n}\n.insight-card--violet {\n  background: var(--erp-purple-50, var(--erp-blue-50));\n}\n.insight-card--violet > span {\n  color: var(--erp-purple-700, var(--erp-blue-700));\n  background: var(--erp-surface);\n}\n\n.recalculate-card {\n  display: grid;\n  gap: var(--erp-space-2);\n}\n\n.recalculate-card img {\n  width: 54px;\n  height: 42px;\n  object-fit: contain;\n}\n\n.recalculate-card p {\n  margin: 0;\n  color: var(--erp-text-muted);\n  font-size: var(--erp-font-size-xs);\n  line-height: 1.5;\n}\n\n@media (max-width: 1180px) {\n  .financial-summary,\n  .impact-summary {\n    grid-template-columns: repeat(3, minmax(0, 1fr));\n  }\n\n  .overview-grid,\n  .impact-layout {\n    grid-template-columns: 1fr;\n  }\n\n  .overview-side-stack,\n  .impact-aside {\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n  }\n}\n\n@media (max-width: 760px) {\n  .section-card__toolbar,\n  .page-info-banner,\n  .action-cta {\n    align-items: stretch;\n    flex-direction: column;\n  }\n\n  .section-card__actions {\n    justify-content: stretch;\n  }\n\n  .inline-search,\n  .section-card__actions .erp-button {\n    flex: 1 1 100%;\n  }\n\n  .inline-search input {\n    min-width: 0;\n    flex: 1;\n  }\n\n  .overview-side-stack,\n  .impact-aside {\n    grid-template-columns: 1fr;\n  }\n}\n\n/* Pixel-aligned refinements from the four approved scholarship references. */\n.scholarship-tabs button + button::before {\n  position: absolute;\n  top: 15px;\n  bottom: 15px;\n  left: 0;\n  width: 1px;\n  content: '';\n  background: var(--erp-border-subtle);\n}\n\n.financial-summary__item,\n.impact-summary > div {\n  grid-template-columns: 40px minmax(0, 1fr);\n  align-content: center;\n  column-gap: var(--erp-space-3);\n  padding-inline: var(--erp-space-4);\n}\n\n.financial-summary__item .metric-icon,\n.impact-summary > div .metric-icon {\n  grid-row: 1 / 4;\n  align-self: center;\n}\n\n.financial-summary__item > span:not(.metric-icon),\n.impact-summary > div > span:not(.metric-icon),\n.financial-summary__item > strong,\n.impact-summary > div > strong,\n.financial-summary__item > small,\n.impact-summary > div > small {\n  grid-column: 2;\n  margin-top: 0;\n}\n\n.financial-summary--overview > :nth-child(2)::before,\n.impact-summary > :nth-child(2)::before,\n.financial-summary--overview > :nth-child(3)::before,\n.impact-summary > :nth-child(3)::before {\n  position: absolute;\n  top: 50%;\n  left: -7px;\n  z-index: 1;\n  display: grid;\n  width: 14px;\n  height: 20px;\n  place-items: center;\n  color: var(--erp-text-heading);\n  font-weight: var(--erp-weight-bold);\n  content: '\u2212';\n  background: var(--erp-surface);\n  transform: translateY(-50%);\n}\n\n.financial-summary--overview > :nth-child(3)::before,\n.impact-summary > :nth-child(3)::before {\n  content: '=';\n}\n\n.financial-summary__item--balance,\n.impact-summary__balance {\n  background: transparent;\n}\n\n.financial-summary__item--status strong {\n  width: max-content;\n  padding: 3px var(--erp-space-2);\n  font-size: var(--erp-font-size-xs);\n  background: var(--erp-danger-bg);\n  border-radius: var(--erp-radius-pill);\n}\n\n.overview-grid {\n  grid-template-columns: minmax(0, 1.72fr) minmax(0, 2fr);\n}\n\n.overview-side-stack {\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n  align-items: stretch;\n}\n\n.overview-periods {\n  margin-bottom: 0;\n}\n\n.overview-periods,\n.overview-side-stack,\n.overview-side-stack .support-panel {\n  min-height: 286px;\n}\n\n.overview-side-stack .support-panel {\n  display: flex;\n  flex-direction: column;\n}\n\n.overview-side-stack .support-empty,\n.overview-side-stack .support-empty--illustrated {\n  flex: 1;\n}\n\n.table-icon-button {\n  display: inline-grid;\n  width: 32px;\n  height: 32px;\n  place-items: center;\n  color: var(--erp-blue-700);\n  background: var(--erp-blue-50);\n  border: 1px solid var(--erp-blue-100);\n  border-radius: var(--erp-radius-control);\n  cursor: pointer;\n}\n\n.amount-primary {\n  color: var(--erp-blue-700) !important;\n}\n\n.amount-due {\n  color: var(--erp-danger-text) !important;\n  font-weight: var(--erp-weight-semibold);\n}\n\n.scheme-cell {\n  display: inline-flex;\n  align-items: center;\n  gap: var(--erp-space-3);\n}\n\n.scheme-cell > span:last-child,\n.scheme-cell strong,\n.scheme-cell small {\n  display: block;\n}\n\n.scheme-cell__icon {\n  display: inline-grid;\n  width: 36px;\n  height: 36px;\n  flex: 0 0 auto;\n  place-items: center;\n  color: var(--erp-success-text);\n  background: var(--erp-success-bg);\n  border-radius: var(--erp-radius-avatar);\n}\n\n.scheme-cell--discount .scheme-cell__icon {\n  color: var(--erp-kpi-purple-text, var(--erp-blue-700));\n  background: var(--erp-kpi-purple-bg, var(--erp-blue-50));\n}\n\n.amount-one-time {\n  color: var(--erp-kpi-purple-text, var(--erp-blue-700)) !important;\n}\n\n.table-result-footer {\n  display: flex;\n  min-height: 52px;\n  align-items: center;\n  justify-content: center;\n  padding: var(--erp-space-2) var(--erp-space-4);\n  color: var(--erp-text-muted);\n  font-size: var(--erp-font-size-xs);\n  border-top: 1px solid var(--erp-border-subtle);\n}\n\n.table-result-footer--pagination {\n  justify-content: space-between;\n}\n\n.table-pagination {\n  display: inline-flex;\n  align-items: center;\n  gap: var(--erp-space-2);\n}\n\n.table-pagination button,\n.table-pagination b {\n  display: inline-grid;\n  width: 30px;\n  height: 30px;\n  place-items: center;\n  color: var(--erp-text-muted);\n  background: var(--erp-surface);\n  border: 1px solid var(--erp-border-default);\n  border-radius: var(--erp-radius-control);\n}\n\n.table-pagination b {\n  color: var(--erp-text-on-primary);\n  background: var(--erp-blue-600);\n  border-color: var(--erp-blue-600);\n}\n\n.discount-summary {\n  display: grid;\n  grid-template-columns: repeat(4, minmax(0, 1fr));\n  min-height: 132px;\n  margin-bottom: var(--erp-space-4);\n  overflow: hidden;\n  background: var(--erp-surface);\n  border: 1px solid var(--erp-blue-100);\n  border-radius: var(--erp-radius-card);\n  box-shadow: var(--erp-shadow-card);\n}\n\n.discount-summary > div {\n  display: flex;\n  min-width: 0;\n  align-items: center;\n  gap: var(--erp-space-4);\n  padding: var(--erp-space-5);\n  border-right: 1px solid var(--erp-border-subtle);\n}\n\n.discount-summary > div:last-child {\n  border-right: 0;\n}\n\n.discount-summary p {\n  display: grid;\n  gap: 3px;\n  margin: 0;\n}\n\n.discount-summary strong,\n.discount-summary small {\n  display: block;\n}\n\n.discount-summary strong {\n  color: var(--erp-text-heading);\n  font-size: var(--erp-font-size-lg);\n}\n\n.discount-summary small {\n  color: var(--erp-text-muted);\n  font-size: var(--erp-font-size-2xs);\n}\n\n.action-cta--dashed {\n  border-style: dashed;\n  background: var(--erp-surface);\n}\n\n.page-info-banner--plain {\n  min-height: 74px;\n  background: var(--erp-blue-50);\n}\n\n.page-info-banner__icon {\n  display: inline-grid;\n  width: 30px;\n  height: 30px;\n  flex: 0 0 auto;\n  place-items: center;\n  color: var(--erp-text-on-primary);\n  background: var(--erp-blue-600);\n  border-radius: var(--erp-radius-avatar);\n}\n\n.text-link {\n  display: inline-flex;\n  align-items: center;\n  gap: var(--erp-space-1);\n  color: var(--erp-text-link);\n  font-size: var(--erp-font-size-xs);\n  font-weight: var(--erp-weight-semibold);\n  background: transparent;\n  border: 0;\n  cursor: pointer;\n}\n\n.impact-layout {\n  grid-template-columns: minmax(0, 4.4fr) minmax(16rem, 1.15fr);\n}\n\n.impact-breakdown-card .fee-ledger__header {\n  display: none;\n}\n\n.impact-breakdown-card .fee-impact-list {\n  padding: 0 var(--erp-space-3) var(--erp-space-3);\n}\n\n.fee-ledger {\n  border: 1px solid var(--erp-border-subtle);\n  border-radius: var(--erp-radius-control);\n}\n\n.fee-head-table {\n  min-width: max(860px, 100%);\n}\n\n.fee-impact-table__head th {\n  color: var(--erp-text-on-primary);\n  text-align: center;\n  background: var(--erp-blue-900);\n  border-color: var(--erp-blue-800);\n}\n\n.fee-impact-table__head th:first-child {\n  text-align: left;\n}\n\n.fee-impact-table__head .fee-impact-subhead {\n  font-size: var(--erp-font-size-2xs);\n}\n\n.fee-impact-table__head .fee-impact-subhead small {\n  display: inline;\n  color: inherit;\n}\n\n.fee-impact-table__head .fee-impact-subhead--scholarship {\n  color: var(--erp-success-bg);\n}\n\n.fee-impact-table__head .fee-impact-subhead--discount {\n  color: var(--erp-blue-100);\n}\n\n.fee-head-name {\n  display: inline-flex;\n  align-items: center;\n  gap: var(--erp-space-2);\n  color: var(--erp-text-heading);\n}\n\n.fee-head-name svg {\n  color: var(--erp-blue-700);\n}\n\n.fee-head-table tfoot th {\n  white-space: nowrap;\n  background: var(--erp-blue-50);\n}\n\n.impact-note {\n  margin-top: var(--erp-space-2);\n}\n\n@media (max-width: 1180px) {\n  .overview-grid,\n  .impact-layout {\n    grid-template-columns: 1fr;\n  }\n\n  .overview-side-stack {\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n  }\n\n  .discount-summary {\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n  }\n\n  .discount-summary > div:nth-child(2) {\n    border-right: 0;\n  }\n\n  .discount-summary > div:nth-child(n + 3) {\n    border-top: 1px solid var(--erp-border-subtle);\n  }\n}\n\n@media (max-width: 640px) {\n  .discount-summary,\n  .overview-side-stack {\n    grid-template-columns: 1fr;\n  }\n\n  .discount-summary > div {\n    border-right: 0;\n    border-bottom: 1px solid var(--erp-border-subtle);\n  }\n\n  .discount-summary > div:last-child {\n    border-bottom: 0;\n  }\n}\n"] }]
    }], () => [], null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(StudentScholarshipsComponent, { className: "StudentScholarshipsComponent", filePath: "frontend/src/app/features/admin/student-scholarships/student-scholarships.component.ts", lineNumber: 68 }); })();
