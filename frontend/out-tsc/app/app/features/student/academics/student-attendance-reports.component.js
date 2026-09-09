import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { LucideAlertTriangle, LucideArrowLeft, LucideArrowRight, LucideBarChart3, LucideCalendarDays, LucideCheck, LucideClock3, LucideDownload, LucideEllipsisVertical, LucideFileSpreadsheet, LucideFileText, LucideFilter, LucideInfo, LucidePlus, LucideRefreshCw, LucideSearch, LucideUsersRound, LucideX, } from '@lucide/angular';
import { finalize } from 'rxjs';
import { ApiService } from '../../../core/api.service';
import { StudentSessionService } from '../shared/services/student-session.service';
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
import * as i2 from "@angular/common";
const _forTrack0 = ($index, $item) => $item._id;
const _forTrack1 = ($index, $item) => $item.subjectId;
function StudentAttendanceReportsComponent_Conditional_20_Template(rf, ctx) { if (rf & 1) {
    const _r1 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 7);
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(1, "svg", 13);
    i0.ɵɵtext(2);
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(3, "button", 9);
    i0.ɵɵlistener("click", function StudentAttendanceReportsComponent_Conditional_20_Template_button_click_3_listener() { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.error.set("")); });
    i0.ɵɵtext(4, "Dismiss");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r1.error());
} }
function StudentAttendanceReportsComponent_Conditional_63_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 21);
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(1, "svg", 23);
    i0.ɵɵtext(2, "Loading reports...");
    i0.ɵɵelementEnd();
} }
function StudentAttendanceReportsComponent_Conditional_64_Template(rf, ctx) { if (rf & 1) {
    const _r3 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 21);
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(1, "svg", 10);
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(2, "strong");
    i0.ɵɵtext(3, "No reports yet");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "span");
    i0.ɵɵtext(5, "Create your first attendance report when you need it.");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "button", 24);
    i0.ɵɵlistener("click", function StudentAttendanceReportsComponent_Conditional_64_Template_button_click_6_listener() { i0.ɵɵrestoreView(_r3); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.openCreate()); });
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(7, "svg", 6);
    i0.ɵɵtext(8, "Create report");
    i0.ɵɵelementEnd()();
} }
function StudentAttendanceReportsComponent_Conditional_65_For_14_Conditional_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(0, "svg", 28);
} }
function StudentAttendanceReportsComponent_Conditional_65_For_14_Conditional_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(0, "svg", 10);
} }
function StudentAttendanceReportsComponent_Conditional_65_For_14_Conditional_28_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(0, "svg", 11);
} }
function StudentAttendanceReportsComponent_Conditional_65_For_14_Conditional_29_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(0, "svg", 13);
} }
function StudentAttendanceReportsComponent_Conditional_65_For_14_Conditional_30_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(0, "svg", 12);
} }
function StudentAttendanceReportsComponent_Conditional_65_For_14_Conditional_33_Template(rf, ctx) { if (rf & 1) {
    const _r4 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 36);
    i0.ɵɵlistener("click", function StudentAttendanceReportsComponent_Conditional_65_For_14_Conditional_33_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r4); const item_r5 = i0.ɵɵnextContext().$implicit; const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.download(item_r5)); });
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(1, "svg", 37);
    i0.ɵɵelementEnd();
} }
function StudentAttendanceReportsComponent_Conditional_65_For_14_Conditional_34_Template(rf, ctx) { if (rf & 1) {
    const _r6 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 38);
    i0.ɵɵlistener("click", function StudentAttendanceReportsComponent_Conditional_65_For_14_Conditional_34_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r6); const item_r5 = i0.ɵɵnextContext().$implicit; const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.regenerate(item_r5)); });
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(1, "svg", 39);
    i0.ɵɵelementEnd();
} }
function StudentAttendanceReportsComponent_Conditional_65_For_14_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "article", 26)(1, "div", 27)(2, "span");
    i0.ɵɵconditionalCreate(3, StudentAttendanceReportsComponent_Conditional_65_For_14_Conditional_3_Template, 1, 0, ":svg:svg", 28)(4, StudentAttendanceReportsComponent_Conditional_65_For_14_Conditional_4_Template, 1, 0, ":svg:svg", 10);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "div")(6, "strong");
    i0.ɵɵtext(7);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "small");
    i0.ɵɵtext(9);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(10, "div")(11, "strong");
    i0.ɵɵtext(12);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(13, "small");
    i0.ɵɵtext(14);
    i0.ɵɵpipe(15, "date");
    i0.ɵɵpipe(16, "date");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(17, "div")(18, "strong");
    i0.ɵɵtext(19);
    i0.ɵɵpipe(20, "date");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(21, "small");
    i0.ɵɵtext(22);
    i0.ɵɵpipe(23, "date");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(24, "div", 29);
    i0.ɵɵtext(25);
    i0.ɵɵpipe(26, "uppercase");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(27, "span", 30);
    i0.ɵɵconditionalCreate(28, StudentAttendanceReportsComponent_Conditional_65_For_14_Conditional_28_Template, 1, 0, ":svg:svg", 11)(29, StudentAttendanceReportsComponent_Conditional_65_For_14_Conditional_29_Template, 1, 0, ":svg:svg", 13)(30, StudentAttendanceReportsComponent_Conditional_65_For_14_Conditional_30_Template, 1, 0, ":svg:svg", 12);
    i0.ɵɵtext(31);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(32, "div", 31);
    i0.ɵɵconditionalCreate(33, StudentAttendanceReportsComponent_Conditional_65_For_14_Conditional_33_Template, 2, 0, "button", 32)(34, StudentAttendanceReportsComponent_Conditional_65_For_14_Conditional_34_Template, 2, 0, "button", 33);
    i0.ɵɵelementStart(35, "button", 34);
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(36, "svg", 35);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const item_r5 = ctx.$implicit;
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(2);
    i0.ɵɵattribute("data-format", item_r5.format);
    i0.ɵɵadvance();
    i0.ɵɵconditional(item_r5.format === "csv" ? 3 : 4);
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(item_r5.reportNumber);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r1.label(item_r5.reportType));
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(item_r5.coverage === "all" ? "All subjects" : item_r5.subjectCount + " subjects");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate2("", i0.ɵɵpipeBind2(15, 14, item_r5.startDate, "dd MMM"), " - ", i0.ɵɵpipeBind2(16, 17, item_r5.endDate, "dd MMM yyyy"));
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind2(20, 20, item_r5.createdAt, "dd MMM yyyy"));
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind2(23, 23, item_r5.createdAt, "shortTime"));
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(26, 26, item_r5.format));
    i0.ɵɵadvance(2);
    i0.ɵɵattribute("data-status", item_r5.status);
    i0.ɵɵadvance();
    i0.ɵɵconditional(item_r5.status === "ready" ? 28 : item_r5.status === "failed" ? 29 : 30);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1(" ", item_r5.status);
    i0.ɵɵadvance(2);
    i0.ɵɵconditional(item_r5.status === "ready" ? 33 : item_r5.status === "expired" || item_r5.status === "failed" ? 34 : -1);
} }
function StudentAttendanceReportsComponent_Conditional_65_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 25)(1, "span");
    i0.ɵɵtext(2, "Report");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "span");
    i0.ɵɵtext(4, "Coverage");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "span");
    i0.ɵɵtext(6, "Created");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "span");
    i0.ɵɵtext(8, "Format");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(9, "span");
    i0.ɵɵtext(10, "Status");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(11, "span");
    i0.ɵɵtext(12, "Action");
    i0.ɵɵelementEnd()();
    i0.ɵɵrepeaterCreate(13, StudentAttendanceReportsComponent_Conditional_65_For_14_Template, 37, 28, "article", 26, _forTrack0);
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(13);
    i0.ɵɵrepeater(ctx_r1.filtered());
} }
function StudentAttendanceReportsComponent_Conditional_72_Conditional_18_Conditional_31_For_2_Template(rf, ctx) { if (rf & 1) {
    const _r9 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "label")(1, "input", 54);
    i0.ɵɵlistener("change", function StudentAttendanceReportsComponent_Conditional_72_Conditional_18_Conditional_31_For_2_Template_input_change_1_listener() { const subject_r10 = i0.ɵɵrestoreView(_r9).$implicit; const ctx_r1 = i0.ɵɵnextContext(4); return i0.ɵɵresetView(ctx_r1.selectSubject(subject_r10.subjectId)); });
    i0.ɵɵelementEnd();
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const subject_r10 = ctx.$implicit;
    const ctx_r1 = i0.ɵɵnextContext(4);
    i0.ɵɵadvance();
    i0.ɵɵproperty("checked", ctx_r1.config().subjectIds.includes(subject_r10.subjectId));
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(subject_r10.subjectName);
} }
function StudentAttendanceReportsComponent_Conditional_72_Conditional_18_Conditional_31_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 49);
    i0.ɵɵrepeaterCreate(1, StudentAttendanceReportsComponent_Conditional_72_Conditional_18_Conditional_31_For_2_Template, 3, 2, "label", null, _forTrack1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance();
    i0.ɵɵrepeater(ctx_r1.subjects());
} }
function StudentAttendanceReportsComponent_Conditional_72_Conditional_18_Conditional_42_Template(rf, ctx) { if (rf & 1) {
    const _r11 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 51)(1, "label");
    i0.ɵɵtext(2, "From");
    i0.ɵɵelementStart(3, "input", 57);
    i0.ɵɵlistener("ngModelChange", function StudentAttendanceReportsComponent_Conditional_72_Conditional_18_Conditional_42_Template_input_ngModelChange_3_listener($event) { i0.ɵɵrestoreView(_r11); const ctx_r1 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r1.update({ startDate: $event })); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(4, "label");
    i0.ɵɵtext(5, "To");
    i0.ɵɵelementStart(6, "input", 57);
    i0.ɵɵlistener("ngModelChange", function StudentAttendanceReportsComponent_Conditional_72_Conditional_18_Conditional_42_Template_input_ngModelChange_6_listener($event) { i0.ɵɵrestoreView(_r11); const ctx_r1 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r1.update({ endDate: $event })); });
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngModel", ctx_r1.config().startDate);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngModel", ctx_r1.config().endDate);
} }
function StudentAttendanceReportsComponent_Conditional_72_Conditional_18_Template(rf, ctx) { if (rf & 1) {
    const _r8 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 45)(1, "section")(2, "h3");
    i0.ɵɵtext(3, "Report type");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "div", 46)(5, "button", 9);
    i0.ɵɵlistener("click", function StudentAttendanceReportsComponent_Conditional_72_Conditional_18_Template_button_click_5_listener() { i0.ɵɵrestoreView(_r8); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.update({ reportType: "detailed" })); });
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(6, "svg", 10);
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(7, "strong");
    i0.ɵɵtext(8, "Detailed attendance");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(9, "small");
    i0.ɵɵtext(10, "Full attendance breakdown");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(11, "button", 9);
    i0.ɵɵlistener("click", function StudentAttendanceReportsComponent_Conditional_72_Conditional_18_Template_button_click_11_listener() { i0.ɵɵrestoreView(_r8); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.update({ reportType: "summary" })); });
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(12, "svg", 28);
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(13, "strong");
    i0.ɵɵtext(14, "Subject summary");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(15, "small");
    i0.ɵɵtext(16, "Totals by subject");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(17, "button", 9);
    i0.ɵɵlistener("click", function StudentAttendanceReportsComponent_Conditional_72_Conditional_18_Template_button_click_17_listener() { i0.ɵɵrestoreView(_r8); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.update({ reportType: "monthly" })); });
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(18, "svg", 47);
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(19, "strong");
    i0.ɵɵtext(20, "Monthly report");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(21, "small");
    i0.ɵɵtext(22, "Month-wise attendance");
    i0.ɵɵelementEnd()()()();
    i0.ɵɵelementStart(23, "section")(24, "h3");
    i0.ɵɵtext(25, "Coverage");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(26, "div", 48)(27, "button", 9);
    i0.ɵɵlistener("click", function StudentAttendanceReportsComponent_Conditional_72_Conditional_18_Template_button_click_27_listener() { i0.ɵɵrestoreView(_r8); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.update({ coverage: "all" })); });
    i0.ɵɵtext(28, " All subjects");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(29, "button", 9);
    i0.ɵɵlistener("click", function StudentAttendanceReportsComponent_Conditional_72_Conditional_18_Template_button_click_29_listener() { i0.ɵɵrestoreView(_r8); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.update({ coverage: "selected" })); });
    i0.ɵɵtext(30, " Choose subjects ");
    i0.ɵɵelementEnd()();
    i0.ɵɵconditionalCreate(31, StudentAttendanceReportsComponent_Conditional_72_Conditional_18_Conditional_31_Template, 3, 0, "div", 49);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(32, "section")(33, "h3");
    i0.ɵɵtext(34, "Period");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(35, "div", 50)(36, "button", 9);
    i0.ɵɵlistener("click", function StudentAttendanceReportsComponent_Conditional_72_Conditional_18_Template_button_click_36_listener() { i0.ɵɵrestoreView(_r8); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.update({ period: "semester", startDate: undefined, endDate: undefined })); });
    i0.ɵɵtext(37, " Semester to date");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(38, "button", 9);
    i0.ɵɵlistener("click", function StudentAttendanceReportsComponent_Conditional_72_Conditional_18_Template_button_click_38_listener() { i0.ɵɵrestoreView(_r8); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.update({ period: "month", startDate: undefined, endDate: undefined })); });
    i0.ɵɵtext(39, " This month");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(40, "button", 9);
    i0.ɵɵlistener("click", function StudentAttendanceReportsComponent_Conditional_72_Conditional_18_Template_button_click_40_listener() { i0.ɵɵrestoreView(_r8); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.update({ period: "custom" })); });
    i0.ɵɵtext(41, " Custom ");
    i0.ɵɵelementEnd()();
    i0.ɵɵconditionalCreate(42, StudentAttendanceReportsComponent_Conditional_72_Conditional_18_Conditional_42_Template, 7, 2, "div", 51);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(43, "section")(44, "h3");
    i0.ɵɵtext(45, "Format");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(46, "div", 52)(47, "button", 9);
    i0.ɵɵlistener("click", function StudentAttendanceReportsComponent_Conditional_72_Conditional_18_Template_button_click_47_listener() { i0.ɵɵrestoreView(_r8); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.update({ format: "pdf" })); });
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(48, "svg", 10);
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(49, "strong");
    i0.ɵɵtext(50, "PDF");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(51, "small");
    i0.ɵɵtext(52, "Best for printing and sharing");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(53, "button", 9);
    i0.ɵɵlistener("click", function StudentAttendanceReportsComponent_Conditional_72_Conditional_18_Template_button_click_53_listener() { i0.ɵɵrestoreView(_r8); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.update({ format: "csv" })); });
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(54, "svg", 28);
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(55, "strong");
    i0.ɵɵtext(56, "CSV");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(57, "small");
    i0.ɵɵtext(58, "For data analysis");
    i0.ɵɵelementEnd()()()();
    i0.ɵɵelementStart(59, "section", 53)(60, "label")(61, "span")(62, "strong");
    i0.ɵɵtext(63, "Include lecture details");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(64, "small");
    i0.ɵɵtext(65, "Include date, status and faculty");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(66, "input", 54);
    i0.ɵɵlistener("change", function StudentAttendanceReportsComponent_Conditional_72_Conditional_18_Template_input_change_66_listener() { i0.ɵɵrestoreView(_r8); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.update({ includeLectureDetails: !ctx_r1.config().includeLectureDetails })); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(67, "label")(68, "span")(69, "strong");
    i0.ɵɵtext(70, "Summary page");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(71, "small");
    i0.ɵɵtext(72, "Add an overview and key statistics");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(73, "input", 54);
    i0.ɵɵlistener("change", function StudentAttendanceReportsComponent_Conditional_72_Conditional_18_Template_input_change_73_listener() { i0.ɵɵrestoreView(_r8); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.update({ includeSummaryPage: !ctx_r1.config().includeSummaryPage })); });
    i0.ɵɵelementEnd()()()();
    i0.ɵɵelementStart(74, "footer")(75, "button", 9);
    i0.ɵɵlistener("click", function StudentAttendanceReportsComponent_Conditional_72_Conditional_18_Template_button_click_75_listener() { i0.ɵɵrestoreView(_r8); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.close()); });
    i0.ɵɵtext(76, "Cancel");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(77, "button", 55);
    i0.ɵɵlistener("click", function StudentAttendanceReportsComponent_Conditional_72_Conditional_18_Template_button_click_77_listener() { i0.ɵɵrestoreView(_r8); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.toPreview()); });
    i0.ɵɵtext(78);
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(79, "svg", 56);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(5);
    i0.ɵɵclassProp("selected", ctx_r1.config().reportType === "detailed");
    i0.ɵɵadvance(6);
    i0.ɵɵclassProp("selected", ctx_r1.config().reportType === "summary");
    i0.ɵɵadvance(6);
    i0.ɵɵclassProp("selected", ctx_r1.config().reportType === "monthly");
    i0.ɵɵadvance(10);
    i0.ɵɵclassProp("selected", ctx_r1.config().coverage === "all");
    i0.ɵɵadvance(2);
    i0.ɵɵclassProp("selected", ctx_r1.config().coverage === "selected");
    i0.ɵɵadvance(2);
    i0.ɵɵconditional(ctx_r1.config().coverage === "selected" ? 31 : -1);
    i0.ɵɵadvance(5);
    i0.ɵɵclassProp("selected", ctx_r1.config().period === "semester");
    i0.ɵɵadvance(2);
    i0.ɵɵclassProp("selected", ctx_r1.config().period === "month");
    i0.ɵɵadvance(2);
    i0.ɵɵclassProp("selected", ctx_r1.config().period === "custom");
    i0.ɵɵadvance(2);
    i0.ɵɵconditional(ctx_r1.config().period === "custom" ? 42 : -1);
    i0.ɵɵadvance(5);
    i0.ɵɵclassProp("selected", ctx_r1.config().format === "pdf");
    i0.ɵɵadvance(6);
    i0.ɵɵclassProp("selected", ctx_r1.config().format === "csv");
    i0.ɵɵadvance(13);
    i0.ɵɵproperty("checked", ctx_r1.config().includeLectureDetails);
    i0.ɵɵadvance(7);
    i0.ɵɵproperty("checked", ctx_r1.config().includeSummaryPage);
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("disabled", ctx_r1.busy());
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r1.busy() ? "Preparing..." : "Preview report");
} }
function StudentAttendanceReportsComponent_Conditional_72_Conditional_19_Conditional_1_For_67_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "tr")(1, "td");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "td");
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "td");
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "td");
    i0.ɵɵtext(8);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(9, "td");
    i0.ɵɵtext(10);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const subject_r13 = ctx.$implicit;
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(subject_r13.subjectName);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(subject_r13.presentLectures);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(subject_r13.absentLectures);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(subject_r13.totalLectures);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1("", subject_r13.attendancePercentage, "%");
} }
function StudentAttendanceReportsComponent_Conditional_72_Conditional_19_Conditional_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 59)(1, "article", 60)(2, "header")(3, "strong");
    i0.ɵɵtext(4, "GEU");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "span");
    i0.ɵɵtext(6, "GRAPHIC ERA UNIVERSITY");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(7, "h2");
    i0.ɵɵtext(8, "Detailed Attendance Report");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(9, "p");
    i0.ɵɵtext(10, "Semester to date");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(11, "dl")(12, "div")(13, "dt");
    i0.ɵɵtext(14, "Student Name");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(15, "dd");
    i0.ɵɵtext(16);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(17, "div")(18, "dt");
    i0.ɵɵtext(19, "Student ID");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(20, "dd");
    i0.ɵɵtext(21);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(22, "div")(23, "dt");
    i0.ɵɵtext(24, "Period");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(25, "dd");
    i0.ɵɵtext(26);
    i0.ɵɵpipe(27, "date");
    i0.ɵɵpipe(28, "date");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(29, "div", 61)(30, "span")(31, "small");
    i0.ɵɵtext(32, "Overall Attendance");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(33, "strong");
    i0.ɵɵtext(34);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(35, "span")(36, "small");
    i0.ɵɵtext(37, "Present");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(38, "strong");
    i0.ɵɵtext(39);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(40, "span")(41, "small");
    i0.ɵɵtext(42, "Absent");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(43, "strong");
    i0.ɵɵtext(44);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(45, "span")(46, "small");
    i0.ɵɵtext(47, "Conducted");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(48, "strong");
    i0.ɵɵtext(49);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(50, "h3");
    i0.ɵɵtext(51, "Subject-wise Attendance");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(52, "table")(53, "thead")(54, "tr")(55, "th");
    i0.ɵɵtext(56, "Subject");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(57, "th");
    i0.ɵɵtext(58, "Present");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(59, "th");
    i0.ɵɵtext(60, "Absent");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(61, "th");
    i0.ɵɵtext(62, "Conducted");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(63, "th");
    i0.ɵɵtext(64, "Attendance");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(65, "tbody");
    i0.ɵɵrepeaterCreate(66, StudentAttendanceReportsComponent_Conditional_72_Conditional_19_Conditional_1_For_67_Template, 11, 5, "tr", null, _forTrack1);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(68, "footer");
    i0.ɵɵtext(69, "Graphic Era University ");
    i0.ɵɵelementStart(70, "span");
    i0.ɵɵtext(71, "Page 1");
    i0.ɵɵelementEnd()()()();
    i0.ɵɵelementStart(72, "section", 62)(73, "h3");
    i0.ɵɵtext(74, "Report settings");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(75, "p");
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(76, "svg", 10);
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(77, "span")(78, "small");
    i0.ɵɵtext(79, "Format");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(80, "strong");
    i0.ɵɵtext(81);
    i0.ɵɵpipe(82, "uppercase");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(83, "p");
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(84, "svg", 63);
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(85, "span")(86, "small");
    i0.ɵɵtext(87, "Subjects");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(88, "strong");
    i0.ɵɵtext(89);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(90, "p");
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(91, "svg", 20);
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(92, "span")(93, "small");
    i0.ɵɵtext(94, "Period");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(95, "strong");
    i0.ɵɵtext(96);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(97, "div");
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(98, "svg", 11);
    i0.ɵɵtext(99);
    i0.ɵɵpipe(100, "date");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const data_r14 = ctx;
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(16);
    i0.ɵɵtextInterpolate(data_r14.student.name);
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(data_r14.student.studentId);
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate2(" ", i0.ɵɵpipeBind2(27, 13, data_r14.startDate, "dd MMM yyyy"), " - ", i0.ɵɵpipeBind2(28, 16, data_r14.endDate, "dd MMM yyyy"), " ");
    i0.ɵɵadvance(8);
    i0.ɵɵtextInterpolate1("", data_r14.overall.attendancePercentage, "%");
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(data_r14.overall.presentLectures);
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(data_r14.overall.absentLectures);
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(data_r14.overall.totalLectures);
    i0.ɵɵadvance(17);
    i0.ɵɵrepeater(data_r14.subjects);
    i0.ɵɵadvance(15);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(82, 19, ctx_r1.config().format));
    i0.ɵɵadvance(8);
    i0.ɵɵtextInterpolate(ctx_r1.config().coverage === "all" ? "All subjects" : ctx_r1.config().subjectIds.length + " selected");
    i0.ɵɵadvance(7);
    i0.ɵɵtextInterpolate2("", data_r14.startDate, " - ", data_r14.endDate);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1("Data updated ", i0.ɵɵpipeBind2(100, 21, data_r14.generatedAt, "dd MMM, shortTime"), " ");
} }
function StudentAttendanceReportsComponent_Conditional_72_Conditional_19_Template(rf, ctx) { if (rf & 1) {
    const _r12 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 58);
    i0.ɵɵconditionalCreate(1, StudentAttendanceReportsComponent_Conditional_72_Conditional_19_Conditional_1_Template, 101, 24);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(2, "footer")(3, "button", 9);
    i0.ɵɵlistener("click", function StudentAttendanceReportsComponent_Conditional_72_Conditional_19_Template_button_click_3_listener() { i0.ɵɵrestoreView(_r12); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.step.set(1)); });
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(4, "svg", 4);
    i0.ɵɵtext(5, "Back");
    i0.ɵɵelementEnd();
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(6, "button", 55);
    i0.ɵɵlistener("click", function StudentAttendanceReportsComponent_Conditional_72_Conditional_19_Template_button_click_6_listener() { i0.ɵɵrestoreView(_r12); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.generate()); });
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(7, "svg", 37);
    i0.ɵɵtext(8);
    i0.ɵɵelement(9, "svg", 56);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    let tmp_2_0;
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵconditional((tmp_2_0 = ctx_r1.preview()) ? 1 : -1, tmp_2_0);
    i0.ɵɵadvance(5);
    i0.ɵɵproperty("disabled", ctx_r1.busy());
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r1.busy() ? "Generating..." : "Generate & download");
} }
function StudentAttendanceReportsComponent_Conditional_72_Template(rf, ctx) { if (rf & 1) {
    const _r7 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 40);
    i0.ɵɵlistener("click", function StudentAttendanceReportsComponent_Conditional_72_Template_div_click_0_listener() { i0.ɵɵrestoreView(_r7); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.close()); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(1, "aside", 41)(2, "header")(3, "button", 42);
    i0.ɵɵlistener("click", function StudentAttendanceReportsComponent_Conditional_72_Template_button_click_3_listener() { i0.ɵɵrestoreView(_r7); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.close()); });
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(4, "svg", 43);
    i0.ɵɵelementEnd();
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(5, "div")(6, "h2");
    i0.ɵɵtext(7);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "div", 44)(9, "b");
    i0.ɵɵtext(10);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(11, "span");
    i0.ɵɵtext(12, "Configure");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(13, "i");
    i0.ɵɵelementStart(14, "b");
    i0.ɵɵtext(15, "2");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(16, "span");
    i0.ɵɵtext(17, "Preview");
    i0.ɵɵelementEnd()()()();
    i0.ɵɵconditionalCreate(18, StudentAttendanceReportsComponent_Conditional_72_Conditional_18_Template, 80, 26)(19, StudentAttendanceReportsComponent_Conditional_72_Conditional_19_Template, 10, 3);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(7);
    i0.ɵɵtextInterpolate(ctx_r1.step() === 1 ? "Create attendance report" : "Preview report");
    i0.ɵɵadvance(2);
    i0.ɵɵclassProp("done", ctx_r1.step() === 2);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r1.step() === 2 ? "\u2713" : "1");
    i0.ɵɵadvance(4);
    i0.ɵɵclassProp("active", ctx_r1.step() === 2);
    i0.ɵɵadvance(4);
    i0.ɵɵconditional(ctx_r1.step() === 1 ? 18 : 19);
} }
export class StudentAttendanceReportsComponent {
    api = inject(ApiService);
    session = inject(StudentSessionService);
    items = signal([], ...(ngDevMode ? [{ debugName: "items" }] : /* istanbul ignore next */ []));
    subjects = signal([], ...(ngDevMode ? [{ debugName: "subjects" }] : /* istanbul ignore next */ []));
    preview = signal(null, ...(ngDevMode ? [{ debugName: "preview" }] : /* istanbul ignore next */ []));
    loading = signal(true, ...(ngDevMode ? [{ debugName: "loading" }] : /* istanbul ignore next */ []));
    busy = signal(false, ...(ngDevMode ? [{ debugName: "busy" }] : /* istanbul ignore next */ []));
    error = signal('', ...(ngDevMode ? [{ debugName: "error" }] : /* istanbul ignore next */ []));
    drawerOpen = signal(false, ...(ngDevMode ? [{ debugName: "drawerOpen" }] : /* istanbul ignore next */ []));
    step = signal(1, ...(ngDevMode ? [{ debugName: "step" }] : /* istanbul ignore next */ []));
    search = signal('', ...(ngDevMode ? [{ debugName: "search" }] : /* istanbul ignore next */ []));
    status = signal('all', ...(ngDevMode ? [{ debugName: "status" }] : /* istanbul ignore next */ []));
    config = signal({
        reportType: 'detailed',
        coverage: 'all',
        subjectIds: [],
        period: 'semester',
        format: 'pdf',
        includeLectureDetails: true,
        includeSummaryPage: true,
    }, ...(ngDevMode ? [{ debugName: "config" }] : /* istanbul ignore next */ []));
    filtered = computed(() => {
        const term = this.search().trim().toLowerCase();
        return this.items().filter((item) => (this.status() === 'all' || item.status === this.status()) &&
            (!term ||
                `${item.reportNumber} ${item.reportType} ${item.format}`.toLowerCase().includes(term)));
    }, ...(ngDevMode ? [{ debugName: "filtered" }] : /* istanbul ignore next */ []));
    counts = computed(() => ({
        all: this.items().length,
        ready: this.items().filter((item) => item.status === 'ready').length,
        generating: this.items().filter((item) => item.status === 'generating').length,
        expired: this.items().filter((item) => item.status === 'expired').length,
        failed: this.items().filter((item) => item.status === 'failed').length,
    }), ...(ngDevMode ? [{ debugName: "counts" }] : /* istanbul ignore next */ []));
    constructor() {
        this.load();
        const token = this.session.token();
        if (token)
            this.api
                .studentAttendance(token)
                .subscribe({ next: (value) => this.subjects.set(value.subjects) });
    }
    openCreate() {
        this.step.set(1);
        this.preview.set(null);
        this.drawerOpen.set(true);
        document.body.classList.add('report-drawer-open');
    }
    close() {
        if (this.busy())
            return;
        this.drawerOpen.set(false);
        document.body.classList.remove('report-drawer-open');
    }
    update(patch) {
        this.config.update((value) => ({ ...value, ...patch }));
    }
    selectSubject(subjectId) {
        const selected = new Set(this.config().subjectIds);
        selected.has(subjectId) ? selected.delete(subjectId) : selected.add(subjectId);
        this.update({ subjectIds: [...selected] });
    }
    toPreview() {
        const token = this.session.token();
        if (!token)
            return;
        if (this.config().coverage === 'selected' && !this.config().subjectIds.length) {
            this.error.set('Choose at least one subject for this report.');
            return;
        }
        this.busy.set(true);
        this.error.set('');
        this.api
            .previewStudentAttendanceReport(token, this.config())
            .pipe(finalize(() => this.busy.set(false)))
            .subscribe({
            next: ({ preview }) => {
                this.preview.set(preview);
                this.step.set(2);
            },
            error: (error) => this.error.set(error?.error?.message || 'Report preview could not be created.'),
        });
    }
    generate() {
        const token = this.session.token();
        if (!token)
            return;
        this.busy.set(true);
        this.api
            .createStudentAttendanceReport(token, this.config())
            .pipe(finalize(() => this.busy.set(false)))
            .subscribe({
            next: ({ item }) => {
                this.items.update((items) => [item, ...items]);
                this.close();
                this.download(item);
            },
            error: (error) => this.error.set(error?.error?.message || 'Report generation failed.'),
        });
    }
    download(item) {
        const token = this.session.token();
        if (!token || item.status !== 'ready')
            return;
        this.api.downloadStudentAttendanceReport(token, item._id).subscribe({
            next: (blob) => {
                const url = URL.createObjectURL(blob);
                const anchor = document.createElement('a');
                anchor.href = url;
                anchor.download = item.fileName;
                anchor.click();
                URL.revokeObjectURL(url);
            },
            error: (error) => this.error.set(error?.error?.message || 'Report download failed.'),
        });
    }
    regenerate(item) {
        const token = this.session.token();
        if (!token)
            return;
        this.busy.set(true);
        this.api
            .regenerateStudentAttendanceReport(token, item._id)
            .pipe(finalize(() => this.busy.set(false)))
            .subscribe({
            next: () => this.load(),
            error: (error) => this.error.set(error?.error?.message || 'Report could not be regenerated.'),
        });
    }
    label(type) {
        return {
            detailed: 'Detailed attendance',
            summary: 'Subject summary',
            monthly: 'Monthly attendance',
        }[type];
    }
    load() {
        const token = this.session.token();
        if (!token)
            return;
        this.loading.set(true);
        this.api
            .studentAttendanceReports(token)
            .pipe(finalize(() => this.loading.set(false)))
            .subscribe({
            next: (feed) => this.items.set(feed.items),
            error: (error) => this.error.set(error?.error?.message || 'Reports could not be loaded.'),
        });
    }
    static ɵfac = function StudentAttendanceReportsComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || StudentAttendanceReportsComponent)(); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: StudentAttendanceReportsComponent, selectors: [["erp-student-attendance-reports"]], decls: 73, vars: 19, consts: [[1, "reports-page"], [1, "reports-heading"], ["routerLink", "/student/attendance"], ["routerLink", "/student/attendance", "aria-label", "Back", 1, "mobile-back"], ["lucideArrowLeft", ""], ["type", "button", 1, "primary", 3, "click"], ["lucidePlus", ""], [1, "message", "message--error"], ["aria-label", "Report status filters", 1, "report-stats"], [3, "click"], ["lucideFileText", ""], ["lucideCheck", ""], ["lucideClock3", ""], ["lucideAlertTriangle", ""], [1, "reports-card"], [1, "reports-toolbar"], ["lucideSearch", ""], ["placeholder", "Search reports...", 3, "ngModelChange", "ngModel"], ["type", "button"], ["lucideFilter", ""], ["lucideCalendarDays", ""], [1, "empty"], ["lucideInfo", ""], ["lucideRefreshCw", "", 1, "spin"], [1, "primary", 3, "click"], [1, "report-table", "report-table--head"], [1, "report-table"], [1, "report-name"], ["lucideFileSpreadsheet", ""], [1, "format"], [1, "status"], [1, "actions"], ["title", "Download"], ["title", "Regenerate"], ["title", "More options"], ["lucideEllipsisVertical", ""], ["title", "Download", 3, "click"], ["lucideDownload", ""], ["title", "Regenerate", 3, "click"], ["lucideRefreshCw", ""], [1, "drawer-backdrop", 3, "click"], ["role", "dialog", "aria-modal", "true", "aria-label", "Create attendance report", 1, "report-drawer"], ["type", "button", 3, "click"], ["lucideX", ""], [1, "steps"], [1, "drawer-body", "configure"], [1, "choice-grid", "three"], ["lucideBarChart3", ""], [1, "segmented"], [1, "subject-picker"], [1, "segmented", "three"], [1, "dates"], [1, "choice-grid", "two"], [1, "toggles"], ["type", "checkbox", 3, "change", "checked"], [1, "primary", 3, "click", "disabled"], ["lucideArrowRight", ""], ["type", "date", 3, "ngModelChange", "ngModel"], [1, "drawer-body", "preview-layout"], [1, "paper-wrap"], [1, "paper"], [1, "paper-stats"], [1, "preview-settings"], ["lucideUsersRound", ""]], template: function StudentAttendanceReportsComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "main", 0)(1, "header", 1)(2, "div")(3, "nav")(4, "a", 2);
            i0.ɵɵtext(5, "Attendance");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(6, "span");
            i0.ɵɵtext(7, "/");
            i0.ɵɵelementEnd();
            i0.ɵɵtext(8, "Reports & Downloads ");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(9, "a", 3);
            i0.ɵɵnamespaceSVG();
            i0.ɵɵelement(10, "svg", 4);
            i0.ɵɵelementEnd();
            i0.ɵɵnamespaceHTML();
            i0.ɵɵelementStart(11, "h1");
            i0.ɵɵtext(12, "Reports ");
            i0.ɵɵelementStart(13, "span");
            i0.ɵɵtext(14, "& Downloads");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(15, "p");
            i0.ɵɵtext(16, "Create and access your attendance reports.");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(17, "button", 5);
            i0.ɵɵlistener("click", function StudentAttendanceReportsComponent_Template_button_click_17_listener() { return ctx.openCreate(); });
            i0.ɵɵnamespaceSVG();
            i0.ɵɵelement(18, "svg", 6);
            i0.ɵɵtext(19, "Create report ");
            i0.ɵɵelementEnd()();
            i0.ɵɵconditionalCreate(20, StudentAttendanceReportsComponent_Conditional_20_Template, 5, 1, "div", 7);
            i0.ɵɵnamespaceHTML();
            i0.ɵɵelementStart(21, "section", 8)(22, "button", 9);
            i0.ɵɵlistener("click", function StudentAttendanceReportsComponent_Template_button_click_22_listener() { return ctx.status.set("all"); });
            i0.ɵɵnamespaceSVG();
            i0.ɵɵelement(23, "svg", 10);
            i0.ɵɵnamespaceHTML();
            i0.ɵɵelementStart(24, "span");
            i0.ɵɵtext(25, "All");
            i0.ɵɵelementStart(26, "strong");
            i0.ɵɵtext(27);
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(28, "button", 9);
            i0.ɵɵlistener("click", function StudentAttendanceReportsComponent_Template_button_click_28_listener() { return ctx.status.set("ready"); });
            i0.ɵɵnamespaceSVG();
            i0.ɵɵelement(29, "svg", 11);
            i0.ɵɵnamespaceHTML();
            i0.ɵɵelementStart(30, "span");
            i0.ɵɵtext(31, "Ready");
            i0.ɵɵelementStart(32, "strong");
            i0.ɵɵtext(33);
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(34, "button", 9);
            i0.ɵɵlistener("click", function StudentAttendanceReportsComponent_Template_button_click_34_listener() { return ctx.status.set("generating"); });
            i0.ɵɵnamespaceSVG();
            i0.ɵɵelement(35, "svg", 12);
            i0.ɵɵnamespaceHTML();
            i0.ɵɵelementStart(36, "span");
            i0.ɵɵtext(37, "Generating");
            i0.ɵɵelementStart(38, "strong");
            i0.ɵɵtext(39);
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(40, "button", 9);
            i0.ɵɵlistener("click", function StudentAttendanceReportsComponent_Template_button_click_40_listener() { return ctx.status.set("expired"); });
            i0.ɵɵnamespaceSVG();
            i0.ɵɵelement(41, "svg", 12);
            i0.ɵɵnamespaceHTML();
            i0.ɵɵelementStart(42, "span");
            i0.ɵɵtext(43, "Expired");
            i0.ɵɵelementStart(44, "strong");
            i0.ɵɵtext(45);
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(46, "button", 9);
            i0.ɵɵlistener("click", function StudentAttendanceReportsComponent_Template_button_click_46_listener() { return ctx.status.set("failed"); });
            i0.ɵɵnamespaceSVG();
            i0.ɵɵelement(47, "svg", 13);
            i0.ɵɵnamespaceHTML();
            i0.ɵɵelementStart(48, "span");
            i0.ɵɵtext(49, "Failed");
            i0.ɵɵelementStart(50, "strong");
            i0.ɵɵtext(51);
            i0.ɵɵelementEnd()()()();
            i0.ɵɵelementStart(52, "section", 14)(53, "div", 15)(54, "label");
            i0.ɵɵnamespaceSVG();
            i0.ɵɵelement(55, "svg", 16);
            i0.ɵɵnamespaceHTML();
            i0.ɵɵelementStart(56, "input", 17);
            i0.ɵɵlistener("ngModelChange", function StudentAttendanceReportsComponent_Template_input_ngModelChange_56_listener($event) { return ctx.search.set($event); });
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(57, "button", 18);
            i0.ɵɵnamespaceSVG();
            i0.ɵɵelement(58, "svg", 19);
            i0.ɵɵtext(59, "All types");
            i0.ɵɵelementEnd();
            i0.ɵɵnamespaceHTML();
            i0.ɵɵelementStart(60, "button", 18);
            i0.ɵɵnamespaceSVG();
            i0.ɵɵelement(61, "svg", 20);
            i0.ɵɵtext(62, "All time");
            i0.ɵɵelementEnd()();
            i0.ɵɵconditionalCreate(63, StudentAttendanceReportsComponent_Conditional_63_Template, 3, 0, "div", 21)(64, StudentAttendanceReportsComponent_Conditional_64_Template, 9, 0, "div", 21)(65, StudentAttendanceReportsComponent_Conditional_65_Template, 15, 0);
            i0.ɵɵnamespaceHTML();
            i0.ɵɵelementStart(66, "footer")(67, "span");
            i0.ɵɵtext(68, "Reports are retained for 180 days.");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(69, "span");
            i0.ɵɵnamespaceSVG();
            i0.ɵɵelement(70, "svg", 22);
            i0.ɵɵtext(71, " Secure, student-only downloads");
            i0.ɵɵelementEnd()()()();
            i0.ɵɵconditionalCreate(72, StudentAttendanceReportsComponent_Conditional_72_Template, 20, 7);
        } if (rf & 2) {
            i0.ɵɵadvance(20);
            i0.ɵɵconditional(ctx.error() ? 20 : -1);
            i0.ɵɵadvance(2);
            i0.ɵɵclassProp("active", ctx.status() === "all");
            i0.ɵɵadvance(5);
            i0.ɵɵtextInterpolate(ctx.counts().all);
            i0.ɵɵadvance();
            i0.ɵɵclassProp("active", ctx.status() === "ready");
            i0.ɵɵadvance(5);
            i0.ɵɵtextInterpolate(ctx.counts().ready);
            i0.ɵɵadvance();
            i0.ɵɵclassProp("active", ctx.status() === "generating");
            i0.ɵɵadvance(5);
            i0.ɵɵtextInterpolate(ctx.counts().generating);
            i0.ɵɵadvance();
            i0.ɵɵclassProp("active", ctx.status() === "expired");
            i0.ɵɵadvance(5);
            i0.ɵɵtextInterpolate(ctx.counts().expired);
            i0.ɵɵadvance();
            i0.ɵɵclassProp("active", ctx.status() === "failed");
            i0.ɵɵadvance(5);
            i0.ɵɵtextInterpolate(ctx.counts().failed);
            i0.ɵɵadvance(5);
            i0.ɵɵproperty("ngModel", ctx.search());
            i0.ɵɵadvance(7);
            i0.ɵɵconditional(ctx.loading() ? 63 : !ctx.filtered().length ? 64 : 65);
            i0.ɵɵadvance(9);
            i0.ɵɵconditional(ctx.drawerOpen() ? 72 : -1);
        } }, dependencies: [CommonModule,
            FormsModule, i1.DefaultValueAccessor, i1.NgControlStatus, i1.NgModel, RouterLink,
            LucideAlertTriangle,
            LucideArrowLeft,
            LucideArrowRight,
            LucideBarChart3,
            LucideCalendarDays,
            LucideCheck,
            LucideClock3,
            LucideDownload,
            LucideEllipsisVertical,
            LucideFileSpreadsheet,
            LucideFileText,
            LucideFilter,
            LucideInfo,
            LucidePlus,
            LucideRefreshCw,
            LucideSearch,
            LucideUsersRound,
            LucideX, i2.UpperCasePipe, i2.DatePipe], styles: ["[_nghost-%COMP%] {\n  display: block;\n}\n.reports-page[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 18px;\n  color: #071b43;\n}\n.reports-page[_ngcontent-%COMP%]   button[_ngcontent-%COMP%], \n.reports-page[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], \n.report-drawer[_ngcontent-%COMP%]   button[_ngcontent-%COMP%], \n.report-drawer[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  font: inherit;\n}\n.reports-heading[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: end;\n  justify-content: space-between;\n}\n.reports-heading[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 10px;\n  margin-bottom: 12px;\n  color: #5e7199;\n  font-size: 13px;\n}\n.reports-heading[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #087cf0;\n  text-decoration: none;\n}\n.reports-heading[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: clamp(30px, 3vw, 42px);\n  line-height: 1;\n}\n.reports-heading[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 9px 0 0;\n  color: #6578a0;\n}\n.primary[_ngcontent-%COMP%] {\n  display: flex;\n  min-height: 48px;\n  align-items: center;\n  justify-content: center;\n  gap: 9px;\n  padding: 0 22px;\n  border: 0;\n  border-radius: 10px;\n  color: #fff;\n  background: linear-gradient(135deg, #087cf0, #006be8);\n  box-shadow: 0 8px 18px rgba(0, 117, 236, 0.18);\n  cursor: pointer;\n  font-weight: 800;\n}\n.mobile-back[_ngcontent-%COMP%] {\n  display: none;\n}\n.message[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 12px 16px;\n  border-radius: 10px;\n}\n.message--error[_ngcontent-%COMP%] {\n  color: #c71d34;\n  background: #ffedf0;\n}\n.message[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  margin-left: auto;\n  border: 0;\n  color: inherit;\n  background: transparent;\n}\n.report-stats[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(5, 1fr);\n  border: 1px solid #d8e6f4;\n  border-radius: 14px;\n  background: #fff;\n  box-shadow: 0 10px 30px rgba(33, 90, 130, 0.06);\n}\n.report-stats[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  display: flex;\n  min-height: 92px;\n  align-items: center;\n  justify-content: center;\n  gap: 14px;\n  border: 0;\n  border-right: 1px solid #d8e6f4;\n  color: #58709d;\n  background: transparent;\n  cursor: pointer;\n}\n.report-stats[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:last-child {\n  border-right: 0;\n}\n.report-stats[_ngcontent-%COMP%]   button.active[_ngcontent-%COMP%] {\n  color: #087cf0;\n  background: #f0f7ff;\n  box-shadow: inset 0 -3px #087cf0;\n}\n.report-stats[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 30px;\n  height: 30px;\n}\n.report-stats[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], \n.report-stats[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  display: block;\n}\n.report-stats[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  margin-top: 2px;\n  color: #071b53;\n  font-size: 25px;\n}\n.reports-card[_ngcontent-%COMP%] {\n  overflow: hidden;\n  border: 1px solid #d8e6f4;\n  border-radius: 14px;\n  background: #fff;\n  box-shadow: 0 12px 35px rgba(33, 90, 130, 0.07);\n}\n.reports-toolbar[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 12px;\n  padding: 16px;\n}\n.reports-toolbar[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: flex;\n  height: 46px;\n  align-items: center;\n  gap: 10px;\n  min-width: 340px;\n  padding: 0 14px;\n  border: 1px solid #cddff1;\n  border-radius: 10px;\n  color: #61749a;\n}\n.reports-toolbar[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 100%;\n  border: 0;\n  outline: 0;\n  color: #071b43;\n  background: transparent;\n}\n.reports-toolbar[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  margin-left: auto;\n  padding: 0 18px;\n  border: 1px solid #cddff1;\n  border-radius: 10px;\n  color: #263e70;\n  background: #fff;\n}\n.reports-toolbar[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]    + button[_ngcontent-%COMP%] {\n  margin-left: 0;\n}\n.report-table[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1.5fr 1.1fr 0.85fr 0.55fr 0.75fr 0.65fr;\n  align-items: center;\n  gap: 16px;\n  min-height: 76px;\n  padding: 10px 18px;\n  border-top: 1px solid #dce7f3;\n}\n.report-table--head[_ngcontent-%COMP%] {\n  min-height: 44px;\n  color: #2c4576;\n  background: #eff6fc;\n  font-size: 13px;\n  font-weight: 800;\n}\n.report-table[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  min-width: 0;\n}\n.report-table[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%], \n.report-table[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  display: block;\n}\n.report-table[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  margin-top: 3px;\n  color: #6377a0;\n}\n.report-name[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 14px;\n}\n.report-name[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  display: grid;\n  width: 40px;\n  height: 45px;\n  place-items: center;\n  border-radius: 8px;\n  color: #e42a3b;\n  background: #fff0f2;\n}\n.report-name[_ngcontent-%COMP%]    > span[data-format='csv'][_ngcontent-%COMP%] {\n  color: #089450;\n  background: #e8f8ef;\n}\n.status[_ngcontent-%COMP%] {\n  display: flex;\n  width: max-content;\n  align-items: center;\n  gap: 6px;\n  padding: 7px 12px;\n  border-radius: 999px;\n  text-transform: capitalize;\n  font-weight: 750;\n}\n.status[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 17px;\n}\n.status[data-status='ready'][_ngcontent-%COMP%] {\n  color: #078b4d;\n  background: #e2f8ec;\n}\n.status[data-status='generating'][_ngcontent-%COMP%] {\n  color: #087cf0;\n  background: #e9f4ff;\n}\n.status[data-status='expired'][_ngcontent-%COMP%] {\n  color: #e48b00;\n  background: #fff3d9;\n}\n.status[data-status='failed'][_ngcontent-%COMP%] {\n  color: #df2339;\n  background: #ffe8eb;\n}\n.actions[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n}\n.actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  display: grid;\n  width: 38px;\n  height: 38px;\n  place-items: center;\n  border: 0;\n  color: #0b62c5;\n  background: transparent;\n  cursor: pointer;\n}\n.reports-card[_ngcontent-%COMP%]    > footer[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  padding: 14px 18px;\n  color: #7183a5;\n  font-size: 13px;\n}\n.reports-card[_ngcontent-%COMP%]    > footer[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:last-child {\n  display: flex;\n  align-items: center;\n  gap: 7px;\n}\n.empty[_ngcontent-%COMP%] {\n  display: grid;\n  min-height: 290px;\n  place-content: center;\n  justify-items: center;\n  gap: 10px;\n  color: #687ba1;\n  text-align: center;\n}\n.empty[_ngcontent-%COMP%]    > svg[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n}\n.empty[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: #071b43;\n  font-size: 18px;\n}\n.spin[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_spin 1s linear infinite;\n}\n@keyframes _ngcontent-%COMP%_spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n.drawer-backdrop[_ngcontent-%COMP%] {\n  position: fixed;\n  z-index: 1200;\n  inset: 0;\n  background: rgba(5, 26, 55, 0.58);\n  backdrop-filter: blur(2px);\n}\n.report-drawer[_ngcontent-%COMP%] {\n  position: fixed;\n  z-index: 1201;\n  top: 0;\n  right: 0;\n  display: grid;\n  width: min(840px, 90vw);\n  height: 100dvh;\n  grid-template-rows: auto 1fr auto;\n  color: #071b53;\n  background: #fff;\n  box-shadow: -20px 0 50px rgba(5, 30, 65, 0.2);\n}\n.report-drawer[_ngcontent-%COMP%]    > header[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 16px;\n  padding: 24px 28px;\n  border-bottom: 1px solid #d9e6f2;\n}\n.report-drawer[_ngcontent-%COMP%]    > header[_ngcontent-%COMP%]    > button[_ngcontent-%COMP%] {\n  align-self: start;\n  border: 0;\n  color: #071b53;\n  background: transparent;\n  cursor: pointer;\n}\n.report-drawer[_ngcontent-%COMP%]    > header[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  display: flex;\n  min-width: 0;\n  flex: 1;\n  align-items: center;\n  justify-content: space-between;\n  gap: 30px;\n}\n.report-drawer[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], \n.report-drawer[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0;\n}\n.report-drawer[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 28px;\n}\n.steps[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 9px;\n  color: #5e729b;\n}\n.steps[_ngcontent-%COMP%]   b[_ngcontent-%COMP%] {\n  display: grid;\n  width: 34px;\n  height: 34px;\n  place-items: center;\n  border: 1px solid #9fb5d3;\n  border-radius: 50%;\n}\n.steps[_ngcontent-%COMP%]   b.active[_ngcontent-%COMP%], \n.steps[_ngcontent-%COMP%]   b.done[_ngcontent-%COMP%] {\n  border-color: #087cf0;\n  color: #fff;\n  background: #087cf0;\n}\n.steps[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  width: 86px;\n  border-top: 2px solid #c8d8ea;\n}\n.drawer-body[_ngcontent-%COMP%] {\n  overflow: auto;\n  padding: 24px 28px;\n}\n.configure[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 24px;\n}\n.configure[_ngcontent-%COMP%]   section[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 10px;\n}\n.choice-grid[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 10px;\n}\n.choice-grid.three[_ngcontent-%COMP%] {\n  grid-template-columns: repeat(3, 1fr);\n}\n.choice-grid.two[_ngcontent-%COMP%] {\n  grid-template-columns: repeat(2, 1fr);\n}\n.choice-grid[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  display: grid;\n  min-height: 122px;\n  place-items: center;\n  padding: 14px;\n  border: 1px solid #cddff1;\n  border-radius: 10px;\n  color: #071b53;\n  background: #fff;\n  cursor: pointer;\n  text-align: center;\n}\n.choice-grid[_ngcontent-%COMP%]   button.selected[_ngcontent-%COMP%] {\n  border: 2px solid #087cf0;\n  background: #f0f7ff;\n}\n.choice-grid[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 32px;\n  height: 32px;\n  color: #087cf0;\n}\n.choice-grid[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%], \n.choice-grid[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  display: block;\n}\n.choice-grid[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  color: #6a7da3;\n}\n.segmented[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  overflow: hidden;\n  border: 1px solid #cddff1;\n  border-radius: 10px;\n}\n.segmented.three[_ngcontent-%COMP%] {\n  grid-template-columns: repeat(3, 1fr);\n}\n.segmented[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  min-height: 46px;\n  border: 0;\n  color: #425a84;\n  background: #fff;\n  cursor: pointer;\n}\n.segmented[_ngcontent-%COMP%]   button.selected[_ngcontent-%COMP%] {\n  color: #fff;\n  background: #087cf0;\n  font-weight: 800;\n}\n.subject-picker[_ngcontent-%COMP%] {\n  display: grid;\n  max-height: 140px;\n  grid-template-columns: repeat(2, 1fr);\n  gap: 8px;\n  overflow: auto;\n  padding: 10px;\n  border: 1px solid #d8e6f4;\n  border-radius: 9px;\n}\n.subject-picker[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n}\n.dates[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 10px;\n}\n.dates[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 5px;\n  color: #5d7199;\n  font-size: 13px;\n}\n.dates[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  height: 42px;\n  padding: 0 10px;\n  border: 1px solid #cddff1;\n  border-radius: 8px;\n}\n.toggles[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 12px 0;\n  border-top: 1px solid #dce8f4;\n}\n.toggles[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%], \n.toggles[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  display: block;\n}\n.toggles[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  margin-top: 3px;\n  color: #6a7da3;\n}\n.toggles[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 48px;\n  height: 26px;\n  accent-color: #087cf0;\n}\n.report-drawer[_ngcontent-%COMP%]    > footer[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  gap: 12px;\n  padding: 16px 24px;\n  border-top: 1px solid #d9e6f2;\n  background: #fff;\n}\n.report-drawer[_ngcontent-%COMP%]    > footer[_ngcontent-%COMP%]    > button[_ngcontent-%COMP%] {\n  display: flex;\n  min-height: 48px;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n  padding: 0 24px;\n  border: 1px solid #cbddef;\n  border-radius: 10px;\n  color: #17356c;\n  background: #fff;\n  cursor: pointer;\n  font-weight: 800;\n}\n.report-drawer[_ngcontent-%COMP%]    > footer[_ngcontent-%COMP%]   .primary[_ngcontent-%COMP%] {\n  min-width: 220px;\n  border: 0;\n  color: #fff;\n  background: #087cf0;\n}\n.report-drawer[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:disabled {\n  cursor: wait;\n  opacity: 0.65;\n}\n.preview-layout[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: minmax(0, 1fr) 260px;\n  gap: 16px;\n  background: #edf3f9;\n}\n.paper-wrap[_ngcontent-%COMP%] {\n  overflow: auto;\n  padding: 12px;\n  border-radius: 10px;\n  background: #dfe8f1;\n}\n.paper[_ngcontent-%COMP%] {\n  min-width: 500px;\n  aspect-ratio: 1/1.414;\n  padding: 34px;\n  color: #071b53;\n  background: #fff;\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);\n}\n.paper[_ngcontent-%COMP%]    > header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding-bottom: 15px;\n  border-bottom: 1px solid #98add0;\n}\n.paper[_ngcontent-%COMP%]    > header[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  font-size: 25px;\n}\n.paper[_ngcontent-%COMP%]    > header[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 11px;\n}\n.paper[_ngcontent-%COMP%]    > h2[_ngcontent-%COMP%] {\n  margin: 22px 0 2px;\n  font-size: 22px;\n}\n.paper[_ngcontent-%COMP%]    > p[_ngcontent-%COMP%] {\n  margin: 0 0 18px;\n  color: #5d7199;\n}\n.paper[_ngcontent-%COMP%]   dl[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 5px;\n}\n.paper[_ngcontent-%COMP%]   dl[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 120px 1fr;\n}\n.paper[_ngcontent-%COMP%]   dt[_ngcontent-%COMP%] {\n  color: #6579a0;\n}\n.paper[_ngcontent-%COMP%]   dd[_ngcontent-%COMP%] {\n  margin: 0;\n  font-weight: 700;\n}\n.paper-stats[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  margin: 22px 0;\n  padding: 16px;\n  border-radius: 8px;\n  background: #f0f6fc;\n}\n.paper-stats[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  padding: 0 8px;\n  border-right: 1px solid #bfd1e6;\n}\n.paper-stats[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:last-child {\n  border: 0;\n}\n.paper-stats[_ngcontent-%COMP%]   small[_ngcontent-%COMP%], \n.paper-stats[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  display: block;\n}\n.paper-stats[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  margin-top: 6px;\n  color: #087cf0;\n  font-size: 24px;\n}\n.paper[_ngcontent-%COMP%]   table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n  font-size: 10px;\n}\n.paper[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], \n.paper[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 8px;\n  border: 1px solid #cdddec;\n  text-align: center;\n}\n.paper[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:first-child, \n.paper[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:first-child {\n  text-align: left;\n}\n.paper[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  background: #edf5fc;\n}\n.paper[_ngcontent-%COMP%]    > footer[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  margin-top: 35px;\n  padding-top: 10px;\n  border-top: 1px solid #cbdcef;\n  color: #6b7ca0;\n  font-size: 9px;\n}\n.preview-settings[_ngcontent-%COMP%] {\n  align-self: start;\n  padding: 18px;\n  border: 1px solid #caddef;\n  border-radius: 10px;\n  background: #fff;\n}\n.preview-settings[_ngcontent-%COMP%]    > p[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 11px 0;\n}\n.preview-settings[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  color: #16458f;\n}\n.preview-settings[_ngcontent-%COMP%]   small[_ngcontent-%COMP%], \n.preview-settings[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  display: block;\n}\n.preview-settings[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  color: #7586a7;\n}\n.preview-settings[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  margin-top: 20px;\n  padding-top: 20px;\n  border-top: 1px solid #dce7f3;\n  color: #078b4d;\n}\n@media (max-width: 760px) {\n  .reports-page[_ngcontent-%COMP%] {\n    gap: 14px;\n  }\n  .reports-heading[_ngcontent-%COMP%] {\n    align-items: start;\n  }\n  .reports-heading[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .reports-heading[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    display: inline;\n    font-size: 30px;\n  }\n  .reports-heading[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .reports-heading[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    margin-left: 0;\n  }\n  .mobile-back[_ngcontent-%COMP%] {\n    display: inline-flex;\n    margin-right: 12px;\n    color: #071b53;\n    vertical-align: middle;\n  }\n  .reports-heading[_ngcontent-%COMP%]   .primary[_ngcontent-%COMP%] {\n    position: absolute;\n    top: 148px;\n    right: 20px;\n  }\n  .report-stats[_ngcontent-%COMP%] {\n    margin-top: 70px;\n    grid-template-columns: repeat(4, minmax(120px, 1fr));\n    overflow: auto;\n  }\n  .report-stats[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    min-height: 84px;\n  }\n  .report-stats[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:last-child {\n    display: none;\n  }\n  .reports-toolbar[_ngcontent-%COMP%] {\n    padding: 12px;\n  }\n  .reports-toolbar[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n    min-width: 0;\n    flex: 1;\n  }\n  .reports-toolbar[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .report-table--head[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .report-table[_ngcontent-%COMP%] {\n    grid-template-columns: minmax(0, 1fr) auto auto;\n    gap: 10px;\n    padding: 18px;\n  }\n  .report-table[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:nth-child(2) {\n    grid-column: 1;\n  }\n  .report-table[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:nth-child(3), \n   .format[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .report-table[_ngcontent-%COMP%]   .status[_ngcontent-%COMP%] {\n    grid-row: 1;\n    grid-column: 2;\n  }\n  .actions[_ngcontent-%COMP%] {\n    grid-row: 1/3;\n    grid-column: 3;\n  }\n  .reports-card[_ngcontent-%COMP%]    > footer[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:last-child {\n    display: none;\n  }\n  .report-drawer[_ngcontent-%COMP%] {\n    width: 100vw;\n  }\n  .report-drawer[_ngcontent-%COMP%]    > header[_ngcontent-%COMP%] {\n    padding: 20px;\n  }\n  .report-drawer[_ngcontent-%COMP%]    > header[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n    display: block;\n  }\n  .report-drawer[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 28px;\n  }\n  .steps[_ngcontent-%COMP%] {\n    margin-top: 16px;\n  }\n  .drawer-body[_ngcontent-%COMP%] {\n    padding: 20px;\n  }\n  .choice-grid.three[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(3, 1fr);\n  }\n  .choice-grid[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    min-height: 130px;\n    padding: 10px;\n  }\n  .subject-picker[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .report-drawer[_ngcontent-%COMP%]    > footer[_ngcontent-%COMP%] {\n    padding: 14px;\n  }\n  .report-drawer[_ngcontent-%COMP%]    > footer[_ngcontent-%COMP%]    > button[_ngcontent-%COMP%] {\n    flex: 1;\n    padding: 0 12px;\n  }\n  .report-drawer[_ngcontent-%COMP%]    > footer[_ngcontent-%COMP%]   .primary[_ngcontent-%COMP%] {\n    min-width: 0;\n  }\n  .preview-layout[_ngcontent-%COMP%] {\n    display: block;\n  }\n  .preview-settings[_ngcontent-%COMP%] {\n    margin-top: 14px;\n  }\n  .paper-wrap[_ngcontent-%COMP%] {\n    padding: 7px;\n  }\n  .paper[_ngcontent-%COMP%] {\n    transform-origin: top left;\n  }\n  .steps[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n    flex: 1;\n    width: auto;\n  }\n}\n@media (max-width: 480px) {\n  .choice-grid.three[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .choice-grid[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    min-height: 92px;\n  }\n  .paper[_ngcontent-%COMP%] {\n    min-width: 470px;\n  }\n  .preview-layout[_ngcontent-%COMP%] {\n    padding: 10px;\n  }\n  .report-drawer[_ngcontent-%COMP%]    > header[_ngcontent-%COMP%] {\n    padding: 16px;\n  }\n  .steps[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    font-size: 13px;\n  }\n}"], changeDetection: 0 });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(StudentAttendanceReportsComponent, [{
        type: Component,
        args: [{ selector: 'erp-student-attendance-reports', imports: [
                    CommonModule,
                    FormsModule,
                    RouterLink,
                    LucideAlertTriangle,
                    LucideArrowLeft,
                    LucideArrowRight,
                    LucideBarChart3,
                    LucideCalendarDays,
                    LucideCheck,
                    LucideClock3,
                    LucideDownload,
                    LucideEllipsisVertical,
                    LucideFileSpreadsheet,
                    LucideFileText,
                    LucideFilter,
                    LucideInfo,
                    LucidePlus,
                    LucideRefreshCw,
                    LucideSearch,
                    LucideUsersRound,
                    LucideX,
                ], changeDetection: ChangeDetectionStrategy.OnPush, template: "<main class=\"reports-page\">\n  <header class=\"reports-heading\">\n    <div>\n      <nav>\n        <a routerLink=\"/student/attendance\">Attendance</a><span>/</span>Reports &amp; Downloads\n      </nav>\n      <a class=\"mobile-back\" routerLink=\"/student/attendance\" aria-label=\"Back\"\n        ><svg lucideArrowLeft></svg\n      ></a>\n      <h1>Reports <span>&amp; Downloads</span></h1>\n      <p>Create and access your attendance reports.</p>\n    </div>\n    <button class=\"primary\" type=\"button\" (click)=\"openCreate()\">\n      <svg lucidePlus></svg>Create report\n    </button>\n  </header>\n\n  @if (error()) {\n    <div class=\"message message--error\">\n      <svg lucideAlertTriangle></svg>{{ error() }}<button (click)=\"error.set('')\">Dismiss</button>\n    </div>\n  }\n\n  <section class=\"report-stats\" aria-label=\"Report status filters\">\n    <button [class.active]=\"status() === 'all'\" (click)=\"status.set('all')\">\n      <svg lucideFileText></svg\n      ><span\n        >All<strong>{{ counts().all }}</strong></span\n      >\n    </button>\n    <button [class.active]=\"status() === 'ready'\" (click)=\"status.set('ready')\">\n      <svg lucideCheck></svg\n      ><span\n        >Ready<strong>{{ counts().ready }}</strong></span\n      >\n    </button>\n    <button [class.active]=\"status() === 'generating'\" (click)=\"status.set('generating')\">\n      <svg lucideClock3></svg\n      ><span\n        >Generating<strong>{{ counts().generating }}</strong></span\n      >\n    </button>\n    <button [class.active]=\"status() === 'expired'\" (click)=\"status.set('expired')\">\n      <svg lucideClock3></svg\n      ><span\n        >Expired<strong>{{ counts().expired }}</strong></span\n      >\n    </button>\n    <button [class.active]=\"status() === 'failed'\" (click)=\"status.set('failed')\">\n      <svg lucideAlertTriangle></svg\n      ><span\n        >Failed<strong>{{ counts().failed }}</strong></span\n      >\n    </button>\n  </section>\n\n  <section class=\"reports-card\">\n    <div class=\"reports-toolbar\">\n      <label\n        ><svg lucideSearch></svg\n        ><input\n          placeholder=\"Search reports...\"\n          [ngModel]=\"search()\"\n          (ngModelChange)=\"search.set($event)\"\n      /></label>\n      <button type=\"button\"><svg lucideFilter></svg>All types</button>\n      <button type=\"button\"><svg lucideCalendarDays></svg>All time</button>\n    </div>\n    @if (loading()) {\n      <div class=\"empty\"><svg lucideRefreshCw class=\"spin\"></svg>Loading reports...</div>\n    } @else if (!filtered().length) {\n      <div class=\"empty\">\n        <svg lucideFileText></svg><strong>No reports yet</strong\n        ><span>Create your first attendance report when you need it.</span\n        ><button class=\"primary\" (click)=\"openCreate()\"><svg lucidePlus></svg>Create report</button>\n      </div>\n    } @else {\n      <div class=\"report-table report-table--head\">\n        <span>Report</span><span>Coverage</span><span>Created</span><span>Format</span\n        ><span>Status</span><span>Action</span>\n      </div>\n      @for (item of filtered(); track item._id) {\n        <article class=\"report-table\">\n          <div class=\"report-name\">\n            <span [attr.data-format]=\"item.format\">\n              @if (item.format === 'csv') {\n                <svg lucideFileSpreadsheet></svg>\n              } @else {\n                <svg lucideFileText></svg>\n              }\n            </span>\n            <div>\n              <strong>{{ item.reportNumber }}</strong\n              ><small>{{ label(item.reportType) }}</small>\n            </div>\n          </div>\n          <div>\n            <strong>{{\n              item.coverage === 'all' ? 'All subjects' : item.subjectCount + ' subjects'\n            }}</strong\n            ><small\n              >{{ item.startDate | date: 'dd MMM' }} -\n              {{ item.endDate | date: 'dd MMM yyyy' }}</small\n            >\n          </div>\n          <div>\n            <strong>{{ item.createdAt | date: 'dd MMM yyyy' }}</strong\n            ><small>{{ item.createdAt | date: 'shortTime' }}</small>\n          </div>\n          <div class=\"format\">{{ item.format | uppercase }}</div>\n          <span class=\"status\" [attr.data-status]=\"item.status\">\n            @if (item.status === 'ready') {\n              <svg lucideCheck></svg>\n            } @else if (item.status === 'failed') {\n              <svg lucideAlertTriangle></svg>\n            } @else {\n              <svg lucideClock3></svg>\n            }\n            {{ item.status }}</span\n          >\n          <div class=\"actions\">\n            @if (item.status === 'ready') {\n              <button title=\"Download\" (click)=\"download(item)\"><svg lucideDownload></svg></button>\n            } @else if (item.status === 'expired' || item.status === 'failed') {\n              <button title=\"Regenerate\" (click)=\"regenerate(item)\">\n                <svg lucideRefreshCw></svg>\n              </button>\n            }\n            <button title=\"More options\"><svg lucideEllipsisVertical></svg></button>\n          </div>\n        </article>\n      }\n    }\n    <footer>\n      <span>Reports are retained for 180 days.</span\n      ><span><svg lucideInfo></svg> Secure, student-only downloads</span>\n    </footer>\n  </section>\n</main>\n\n@if (drawerOpen()) {\n  <div class=\"drawer-backdrop\" (click)=\"close()\"></div>\n  <aside\n    class=\"report-drawer\"\n    role=\"dialog\"\n    aria-modal=\"true\"\n    aria-label=\"Create attendance report\"\n  >\n    <header>\n      <button type=\"button\" (click)=\"close()\"><svg lucideX></svg></button>\n      <div>\n        <h2>{{ step() === 1 ? 'Create attendance report' : 'Preview report' }}</h2>\n        <div class=\"steps\">\n          <b [class.done]=\"step() === 2\">{{ step() === 2 ? '\u2713' : '1' }}</b\n          ><span>Configure</span><i></i><b [class.active]=\"step() === 2\">2</b><span>Preview</span>\n        </div>\n      </div>\n    </header>\n    @if (step() === 1) {\n      <div class=\"drawer-body configure\">\n        <section>\n          <h3>Report type</h3>\n          <div class=\"choice-grid three\">\n            <button\n              [class.selected]=\"config().reportType === 'detailed'\"\n              (click)=\"update({ reportType: 'detailed' })\"\n            >\n              <svg lucideFileText></svg><strong>Detailed attendance</strong\n              ><small>Full attendance breakdown</small>\n            </button>\n            <button\n              [class.selected]=\"config().reportType === 'summary'\"\n              (click)=\"update({ reportType: 'summary' })\"\n            >\n              <svg lucideFileSpreadsheet></svg><strong>Subject summary</strong\n              ><small>Totals by subject</small>\n            </button>\n            <button\n              [class.selected]=\"config().reportType === 'monthly'\"\n              (click)=\"update({ reportType: 'monthly' })\"\n            >\n              <svg lucideBarChart3></svg><strong>Monthly report</strong\n              ><small>Month-wise attendance</small>\n            </button>\n          </div>\n        </section>\n        <section>\n          <h3>Coverage</h3>\n          <div class=\"segmented\">\n            <button\n              [class.selected]=\"config().coverage === 'all'\"\n              (click)=\"update({ coverage: 'all' })\"\n            >\n              All subjects</button\n            ><button\n              [class.selected]=\"config().coverage === 'selected'\"\n              (click)=\"update({ coverage: 'selected' })\"\n            >\n              Choose subjects\n            </button>\n          </div>\n          @if (config().coverage === 'selected') {\n            <div class=\"subject-picker\">\n              @for (subject of subjects(); track subject.subjectId) {\n                <label\n                  ><input\n                    type=\"checkbox\"\n                    [checked]=\"config().subjectIds.includes(subject.subjectId)\"\n                    (change)=\"selectSubject(subject.subjectId)\"\n                  />{{ subject.subjectName }}</label\n                >\n              }\n            </div>\n          }\n        </section>\n        <section>\n          <h3>Period</h3>\n          <div class=\"segmented three\">\n            <button\n              [class.selected]=\"config().period === 'semester'\"\n              (click)=\"update({ period: 'semester', startDate: undefined, endDate: undefined })\"\n            >\n              Semester to date</button\n            ><button\n              [class.selected]=\"config().period === 'month'\"\n              (click)=\"update({ period: 'month', startDate: undefined, endDate: undefined })\"\n            >\n              This month</button\n            ><button\n              [class.selected]=\"config().period === 'custom'\"\n              (click)=\"update({ period: 'custom' })\"\n            >\n              Custom\n            </button>\n          </div>\n          @if (config().period === 'custom') {\n            <div class=\"dates\">\n              <label\n                >From<input\n                  type=\"date\"\n                  [ngModel]=\"config().startDate\"\n                  (ngModelChange)=\"update({ startDate: $event })\" /></label\n              ><label\n                >To<input\n                  type=\"date\"\n                  [ngModel]=\"config().endDate\"\n                  (ngModelChange)=\"update({ endDate: $event })\"\n              /></label>\n            </div>\n          }\n        </section>\n        <section>\n          <h3>Format</h3>\n          <div class=\"choice-grid two\">\n            <button\n              [class.selected]=\"config().format === 'pdf'\"\n              (click)=\"update({ format: 'pdf' })\"\n            >\n              <svg lucideFileText></svg><strong>PDF</strong\n              ><small>Best for printing and sharing</small></button\n            ><button\n              [class.selected]=\"config().format === 'csv'\"\n              (click)=\"update({ format: 'csv' })\"\n            >\n              <svg lucideFileSpreadsheet></svg><strong>CSV</strong><small>For data analysis</small>\n            </button>\n          </div>\n        </section>\n        <section class=\"toggles\">\n          <label\n            ><span\n              ><strong>Include lecture details</strong\n              ><small>Include date, status and faculty</small></span\n            ><input\n              type=\"checkbox\"\n              [checked]=\"config().includeLectureDetails\"\n              (change)=\"\n                update({ includeLectureDetails: !config().includeLectureDetails })\n              \" /></label\n          ><label\n            ><span\n              ><strong>Summary page</strong><small>Add an overview and key statistics</small></span\n            ><input\n              type=\"checkbox\"\n              [checked]=\"config().includeSummaryPage\"\n              (change)=\"update({ includeSummaryPage: !config().includeSummaryPage })\"\n          /></label>\n        </section>\n      </div>\n      <footer>\n        <button (click)=\"close()\">Cancel</button\n        ><button class=\"primary\" [disabled]=\"busy()\" (click)=\"toPreview()\">\n          {{ busy() ? 'Preparing...' : 'Preview report' }}<svg lucideArrowRight></svg>\n        </button>\n      </footer>\n    } @else {\n      <div class=\"drawer-body preview-layout\">\n        @if (preview(); as data) {\n          <div class=\"paper-wrap\">\n            <article class=\"paper\">\n              <header><strong>GEU</strong><span>GRAPHIC ERA UNIVERSITY</span></header>\n              <h2>Detailed Attendance Report</h2>\n              <p>Semester to date</p>\n              <dl>\n                <div>\n                  <dt>Student Name</dt>\n                  <dd>{{ data.student.name }}</dd>\n                </div>\n                <div>\n                  <dt>Student ID</dt>\n                  <dd>{{ data.student.studentId }}</dd>\n                </div>\n                <div>\n                  <dt>Period</dt>\n                  <dd>\n                    {{ data.startDate | date: 'dd MMM yyyy' }} -\n                    {{ data.endDate | date: 'dd MMM yyyy' }}\n                  </dd>\n                </div>\n              </dl>\n              <div class=\"paper-stats\">\n                <span\n                  ><small>Overall Attendance</small\n                  ><strong>{{ data.overall.attendancePercentage }}%</strong></span\n                ><span\n                  ><small>Present</small><strong>{{ data.overall.presentLectures }}</strong></span\n                ><span\n                  ><small>Absent</small><strong>{{ data.overall.absentLectures }}</strong></span\n                ><span\n                  ><small>Conducted</small><strong>{{ data.overall.totalLectures }}</strong></span\n                >\n              </div>\n              <h3>Subject-wise Attendance</h3>\n              <table>\n                <thead>\n                  <tr>\n                    <th>Subject</th>\n                    <th>Present</th>\n                    <th>Absent</th>\n                    <th>Conducted</th>\n                    <th>Attendance</th>\n                  </tr>\n                </thead>\n                <tbody>\n                  @for (subject of data.subjects; track subject.subjectId) {\n                    <tr>\n                      <td>{{ subject.subjectName }}</td>\n                      <td>{{ subject.presentLectures }}</td>\n                      <td>{{ subject.absentLectures }}</td>\n                      <td>{{ subject.totalLectures }}</td>\n                      <td>{{ subject.attendancePercentage }}%</td>\n                    </tr>\n                  }\n                </tbody>\n              </table>\n              <footer>Graphic Era University <span>Page 1</span></footer>\n            </article>\n          </div>\n          <section class=\"preview-settings\">\n            <h3>Report settings</h3>\n            <p>\n              <svg lucideFileText></svg\n              ><span\n                ><small>Format</small><strong>{{ config().format | uppercase }}</strong></span\n              >\n            </p>\n            <p>\n              <svg lucideUsersRound></svg\n              ><span\n                ><small>Subjects</small\n                ><strong>{{\n                  config().coverage === 'all'\n                    ? 'All subjects'\n                    : config().subjectIds.length + ' selected'\n                }}</strong></span\n              >\n            </p>\n            <p>\n              <svg lucideCalendarDays></svg\n              ><span\n                ><small>Period</small\n                ><strong>{{ data.startDate }} - {{ data.endDate }}</strong></span\n              >\n            </p>\n            <div>\n              <svg lucideCheck></svg>Data updated {{ data.generatedAt | date: 'dd MMM, shortTime' }}\n            </div>\n          </section>\n        }\n      </div>\n      <footer>\n        <button (click)=\"step.set(1)\"><svg lucideArrowLeft></svg>Back</button\n        ><button class=\"primary\" [disabled]=\"busy()\" (click)=\"generate()\">\n          <svg lucideDownload></svg>{{ busy() ? 'Generating...' : 'Generate & download'\n          }}<svg lucideArrowRight></svg>\n        </button>\n      </footer>\n    }\n  </aside>\n}\n", styles: [":host {\n  display: block;\n}\n.reports-page {\n  display: grid;\n  gap: 18px;\n  color: #071b43;\n}\n.reports-page button,\n.reports-page input,\n.report-drawer button,\n.report-drawer input {\n  font: inherit;\n}\n.reports-heading {\n  display: flex;\n  align-items: end;\n  justify-content: space-between;\n}\n.reports-heading nav {\n  display: flex;\n  gap: 10px;\n  margin-bottom: 12px;\n  color: #5e7199;\n  font-size: 13px;\n}\n.reports-heading nav a {\n  color: #087cf0;\n  text-decoration: none;\n}\n.reports-heading h1 {\n  margin: 0;\n  font-size: clamp(30px, 3vw, 42px);\n  line-height: 1;\n}\n.reports-heading p {\n  margin: 9px 0 0;\n  color: #6578a0;\n}\n.primary {\n  display: flex;\n  min-height: 48px;\n  align-items: center;\n  justify-content: center;\n  gap: 9px;\n  padding: 0 22px;\n  border: 0;\n  border-radius: 10px;\n  color: #fff;\n  background: linear-gradient(135deg, #087cf0, #006be8);\n  box-shadow: 0 8px 18px rgba(0, 117, 236, 0.18);\n  cursor: pointer;\n  font-weight: 800;\n}\n.mobile-back {\n  display: none;\n}\n.message {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 12px 16px;\n  border-radius: 10px;\n}\n.message--error {\n  color: #c71d34;\n  background: #ffedf0;\n}\n.message button {\n  margin-left: auto;\n  border: 0;\n  color: inherit;\n  background: transparent;\n}\n.report-stats {\n  display: grid;\n  grid-template-columns: repeat(5, 1fr);\n  border: 1px solid #d8e6f4;\n  border-radius: 14px;\n  background: #fff;\n  box-shadow: 0 10px 30px rgba(33, 90, 130, 0.06);\n}\n.report-stats button {\n  display: flex;\n  min-height: 92px;\n  align-items: center;\n  justify-content: center;\n  gap: 14px;\n  border: 0;\n  border-right: 1px solid #d8e6f4;\n  color: #58709d;\n  background: transparent;\n  cursor: pointer;\n}\n.report-stats button:last-child {\n  border-right: 0;\n}\n.report-stats button.active {\n  color: #087cf0;\n  background: #f0f7ff;\n  box-shadow: inset 0 -3px #087cf0;\n}\n.report-stats svg {\n  width: 30px;\n  height: 30px;\n}\n.report-stats span,\n.report-stats strong {\n  display: block;\n}\n.report-stats strong {\n  margin-top: 2px;\n  color: #071b53;\n  font-size: 25px;\n}\n.reports-card {\n  overflow: hidden;\n  border: 1px solid #d8e6f4;\n  border-radius: 14px;\n  background: #fff;\n  box-shadow: 0 12px 35px rgba(33, 90, 130, 0.07);\n}\n.reports-toolbar {\n  display: flex;\n  gap: 12px;\n  padding: 16px;\n}\n.reports-toolbar label {\n  display: flex;\n  height: 46px;\n  align-items: center;\n  gap: 10px;\n  min-width: 340px;\n  padding: 0 14px;\n  border: 1px solid #cddff1;\n  border-radius: 10px;\n  color: #61749a;\n}\n.reports-toolbar input {\n  width: 100%;\n  border: 0;\n  outline: 0;\n  color: #071b43;\n  background: transparent;\n}\n.reports-toolbar button {\n  margin-left: auto;\n  padding: 0 18px;\n  border: 1px solid #cddff1;\n  border-radius: 10px;\n  color: #263e70;\n  background: #fff;\n}\n.reports-toolbar button + button {\n  margin-left: 0;\n}\n.report-table {\n  display: grid;\n  grid-template-columns: 1.5fr 1.1fr 0.85fr 0.55fr 0.75fr 0.65fr;\n  align-items: center;\n  gap: 16px;\n  min-height: 76px;\n  padding: 10px 18px;\n  border-top: 1px solid #dce7f3;\n}\n.report-table--head {\n  min-height: 44px;\n  color: #2c4576;\n  background: #eff6fc;\n  font-size: 13px;\n  font-weight: 800;\n}\n.report-table > div {\n  min-width: 0;\n}\n.report-table strong,\n.report-table small {\n  display: block;\n}\n.report-table small {\n  margin-top: 3px;\n  color: #6377a0;\n}\n.report-name {\n  display: flex;\n  align-items: center;\n  gap: 14px;\n}\n.report-name > span {\n  display: grid;\n  width: 40px;\n  height: 45px;\n  place-items: center;\n  border-radius: 8px;\n  color: #e42a3b;\n  background: #fff0f2;\n}\n.report-name > span[data-format='csv'] {\n  color: #089450;\n  background: #e8f8ef;\n}\n.status {\n  display: flex;\n  width: max-content;\n  align-items: center;\n  gap: 6px;\n  padding: 7px 12px;\n  border-radius: 999px;\n  text-transform: capitalize;\n  font-weight: 750;\n}\n.status svg {\n  width: 17px;\n}\n.status[data-status='ready'] {\n  color: #078b4d;\n  background: #e2f8ec;\n}\n.status[data-status='generating'] {\n  color: #087cf0;\n  background: #e9f4ff;\n}\n.status[data-status='expired'] {\n  color: #e48b00;\n  background: #fff3d9;\n}\n.status[data-status='failed'] {\n  color: #df2339;\n  background: #ffe8eb;\n}\n.actions {\n  display: flex;\n  justify-content: flex-end;\n}\n.actions button {\n  display: grid;\n  width: 38px;\n  height: 38px;\n  place-items: center;\n  border: 0;\n  color: #0b62c5;\n  background: transparent;\n  cursor: pointer;\n}\n.reports-card > footer {\n  display: flex;\n  justify-content: space-between;\n  padding: 14px 18px;\n  color: #7183a5;\n  font-size: 13px;\n}\n.reports-card > footer span:last-child {\n  display: flex;\n  align-items: center;\n  gap: 7px;\n}\n.empty {\n  display: grid;\n  min-height: 290px;\n  place-content: center;\n  justify-items: center;\n  gap: 10px;\n  color: #687ba1;\n  text-align: center;\n}\n.empty > svg {\n  width: 40px;\n  height: 40px;\n}\n.empty strong {\n  color: #071b43;\n  font-size: 18px;\n}\n.spin {\n  animation: spin 1s linear infinite;\n}\n@keyframes spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n.drawer-backdrop {\n  position: fixed;\n  z-index: 1200;\n  inset: 0;\n  background: rgba(5, 26, 55, 0.58);\n  backdrop-filter: blur(2px);\n}\n.report-drawer {\n  position: fixed;\n  z-index: 1201;\n  top: 0;\n  right: 0;\n  display: grid;\n  width: min(840px, 90vw);\n  height: 100dvh;\n  grid-template-rows: auto 1fr auto;\n  color: #071b53;\n  background: #fff;\n  box-shadow: -20px 0 50px rgba(5, 30, 65, 0.2);\n}\n.report-drawer > header {\n  display: flex;\n  gap: 16px;\n  padding: 24px 28px;\n  border-bottom: 1px solid #d9e6f2;\n}\n.report-drawer > header > button {\n  align-self: start;\n  border: 0;\n  color: #071b53;\n  background: transparent;\n  cursor: pointer;\n}\n.report-drawer > header > div {\n  display: flex;\n  min-width: 0;\n  flex: 1;\n  align-items: center;\n  justify-content: space-between;\n  gap: 30px;\n}\n.report-drawer h2,\n.report-drawer h3 {\n  margin: 0;\n}\n.report-drawer h2 {\n  font-size: 28px;\n}\n.steps {\n  display: flex;\n  align-items: center;\n  gap: 9px;\n  color: #5e729b;\n}\n.steps b {\n  display: grid;\n  width: 34px;\n  height: 34px;\n  place-items: center;\n  border: 1px solid #9fb5d3;\n  border-radius: 50%;\n}\n.steps b.active,\n.steps b.done {\n  border-color: #087cf0;\n  color: #fff;\n  background: #087cf0;\n}\n.steps i {\n  width: 86px;\n  border-top: 2px solid #c8d8ea;\n}\n.drawer-body {\n  overflow: auto;\n  padding: 24px 28px;\n}\n.configure {\n  display: grid;\n  gap: 24px;\n}\n.configure section {\n  display: grid;\n  gap: 10px;\n}\n.choice-grid {\n  display: grid;\n  gap: 10px;\n}\n.choice-grid.three {\n  grid-template-columns: repeat(3, 1fr);\n}\n.choice-grid.two {\n  grid-template-columns: repeat(2, 1fr);\n}\n.choice-grid button {\n  display: grid;\n  min-height: 122px;\n  place-items: center;\n  padding: 14px;\n  border: 1px solid #cddff1;\n  border-radius: 10px;\n  color: #071b53;\n  background: #fff;\n  cursor: pointer;\n  text-align: center;\n}\n.choice-grid button.selected {\n  border: 2px solid #087cf0;\n  background: #f0f7ff;\n}\n.choice-grid svg {\n  width: 32px;\n  height: 32px;\n  color: #087cf0;\n}\n.choice-grid strong,\n.choice-grid small {\n  display: block;\n}\n.choice-grid small {\n  color: #6a7da3;\n}\n.segmented {\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  overflow: hidden;\n  border: 1px solid #cddff1;\n  border-radius: 10px;\n}\n.segmented.three {\n  grid-template-columns: repeat(3, 1fr);\n}\n.segmented button {\n  min-height: 46px;\n  border: 0;\n  color: #425a84;\n  background: #fff;\n  cursor: pointer;\n}\n.segmented button.selected {\n  color: #fff;\n  background: #087cf0;\n  font-weight: 800;\n}\n.subject-picker {\n  display: grid;\n  max-height: 140px;\n  grid-template-columns: repeat(2, 1fr);\n  gap: 8px;\n  overflow: auto;\n  padding: 10px;\n  border: 1px solid #d8e6f4;\n  border-radius: 9px;\n}\n.subject-picker label {\n  display: flex;\n  gap: 8px;\n}\n.dates {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 10px;\n}\n.dates label {\n  display: grid;\n  gap: 5px;\n  color: #5d7199;\n  font-size: 13px;\n}\n.dates input {\n  height: 42px;\n  padding: 0 10px;\n  border: 1px solid #cddff1;\n  border-radius: 8px;\n}\n.toggles label {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 12px 0;\n  border-top: 1px solid #dce8f4;\n}\n.toggles strong,\n.toggles small {\n  display: block;\n}\n.toggles small {\n  margin-top: 3px;\n  color: #6a7da3;\n}\n.toggles input {\n  width: 48px;\n  height: 26px;\n  accent-color: #087cf0;\n}\n.report-drawer > footer {\n  display: flex;\n  justify-content: flex-end;\n  gap: 12px;\n  padding: 16px 24px;\n  border-top: 1px solid #d9e6f2;\n  background: #fff;\n}\n.report-drawer > footer > button {\n  display: flex;\n  min-height: 48px;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n  padding: 0 24px;\n  border: 1px solid #cbddef;\n  border-radius: 10px;\n  color: #17356c;\n  background: #fff;\n  cursor: pointer;\n  font-weight: 800;\n}\n.report-drawer > footer .primary {\n  min-width: 220px;\n  border: 0;\n  color: #fff;\n  background: #087cf0;\n}\n.report-drawer button:disabled {\n  cursor: wait;\n  opacity: 0.65;\n}\n.preview-layout {\n  display: grid;\n  grid-template-columns: minmax(0, 1fr) 260px;\n  gap: 16px;\n  background: #edf3f9;\n}\n.paper-wrap {\n  overflow: auto;\n  padding: 12px;\n  border-radius: 10px;\n  background: #dfe8f1;\n}\n.paper {\n  min-width: 500px;\n  aspect-ratio: 1/1.414;\n  padding: 34px;\n  color: #071b53;\n  background: #fff;\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);\n}\n.paper > header {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding-bottom: 15px;\n  border-bottom: 1px solid #98add0;\n}\n.paper > header strong {\n  font-size: 25px;\n}\n.paper > header span {\n  font-size: 11px;\n}\n.paper > h2 {\n  margin: 22px 0 2px;\n  font-size: 22px;\n}\n.paper > p {\n  margin: 0 0 18px;\n  color: #5d7199;\n}\n.paper dl {\n  display: grid;\n  gap: 5px;\n}\n.paper dl div {\n  display: grid;\n  grid-template-columns: 120px 1fr;\n}\n.paper dt {\n  color: #6579a0;\n}\n.paper dd {\n  margin: 0;\n  font-weight: 700;\n}\n.paper-stats {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  margin: 22px 0;\n  padding: 16px;\n  border-radius: 8px;\n  background: #f0f6fc;\n}\n.paper-stats span {\n  padding: 0 8px;\n  border-right: 1px solid #bfd1e6;\n}\n.paper-stats span:last-child {\n  border: 0;\n}\n.paper-stats small,\n.paper-stats strong {\n  display: block;\n}\n.paper-stats strong {\n  margin-top: 6px;\n  color: #087cf0;\n  font-size: 24px;\n}\n.paper table {\n  width: 100%;\n  border-collapse: collapse;\n  font-size: 10px;\n}\n.paper th,\n.paper td {\n  padding: 8px;\n  border: 1px solid #cdddec;\n  text-align: center;\n}\n.paper th:first-child,\n.paper td:first-child {\n  text-align: left;\n}\n.paper th {\n  background: #edf5fc;\n}\n.paper > footer {\n  display: flex;\n  justify-content: space-between;\n  margin-top: 35px;\n  padding-top: 10px;\n  border-top: 1px solid #cbdcef;\n  color: #6b7ca0;\n  font-size: 9px;\n}\n.preview-settings {\n  align-self: start;\n  padding: 18px;\n  border: 1px solid #caddef;\n  border-radius: 10px;\n  background: #fff;\n}\n.preview-settings > p {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 11px 0;\n}\n.preview-settings p svg {\n  color: #16458f;\n}\n.preview-settings small,\n.preview-settings strong {\n  display: block;\n}\n.preview-settings small {\n  color: #7586a7;\n}\n.preview-settings > div {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  margin-top: 20px;\n  padding-top: 20px;\n  border-top: 1px solid #dce7f3;\n  color: #078b4d;\n}\n@media (max-width: 760px) {\n  .reports-page {\n    gap: 14px;\n  }\n  .reports-heading {\n    align-items: start;\n  }\n  .reports-heading nav {\n    display: none;\n  }\n  .reports-heading h1 {\n    display: inline;\n    font-size: 30px;\n  }\n  .reports-heading h1 span {\n    display: none;\n  }\n  .reports-heading p {\n    margin-left: 0;\n  }\n  .mobile-back {\n    display: inline-flex;\n    margin-right: 12px;\n    color: #071b53;\n    vertical-align: middle;\n  }\n  .reports-heading .primary {\n    position: absolute;\n    top: 148px;\n    right: 20px;\n  }\n  .report-stats {\n    margin-top: 70px;\n    grid-template-columns: repeat(4, minmax(120px, 1fr));\n    overflow: auto;\n  }\n  .report-stats button {\n    min-height: 84px;\n  }\n  .report-stats button:last-child {\n    display: none;\n  }\n  .reports-toolbar {\n    padding: 12px;\n  }\n  .reports-toolbar label {\n    min-width: 0;\n    flex: 1;\n  }\n  .reports-toolbar button {\n    display: none;\n  }\n  .report-table--head {\n    display: none;\n  }\n  .report-table {\n    grid-template-columns: minmax(0, 1fr) auto auto;\n    gap: 10px;\n    padding: 18px;\n  }\n  .report-table > div:nth-child(2) {\n    grid-column: 1;\n  }\n  .report-table > div:nth-child(3),\n  .format {\n    display: none;\n  }\n  .report-table .status {\n    grid-row: 1;\n    grid-column: 2;\n  }\n  .actions {\n    grid-row: 1/3;\n    grid-column: 3;\n  }\n  .reports-card > footer span:last-child {\n    display: none;\n  }\n  .report-drawer {\n    width: 100vw;\n  }\n  .report-drawer > header {\n    padding: 20px;\n  }\n  .report-drawer > header > div {\n    display: block;\n  }\n  .report-drawer h2 {\n    font-size: 28px;\n  }\n  .steps {\n    margin-top: 16px;\n  }\n  .drawer-body {\n    padding: 20px;\n  }\n  .choice-grid.three {\n    grid-template-columns: repeat(3, 1fr);\n  }\n  .choice-grid button {\n    min-height: 130px;\n    padding: 10px;\n  }\n  .subject-picker {\n    grid-template-columns: 1fr;\n  }\n  .report-drawer > footer {\n    padding: 14px;\n  }\n  .report-drawer > footer > button {\n    flex: 1;\n    padding: 0 12px;\n  }\n  .report-drawer > footer .primary {\n    min-width: 0;\n  }\n  .preview-layout {\n    display: block;\n  }\n  .preview-settings {\n    margin-top: 14px;\n  }\n  .paper-wrap {\n    padding: 7px;\n  }\n  .paper {\n    transform-origin: top left;\n  }\n  .steps i {\n    flex: 1;\n    width: auto;\n  }\n}\n@media (max-width: 480px) {\n  .choice-grid.three {\n    grid-template-columns: 1fr;\n  }\n  .choice-grid button {\n    min-height: 92px;\n  }\n  .paper {\n    min-width: 470px;\n  }\n  .preview-layout {\n    padding: 10px;\n  }\n  .report-drawer > header {\n    padding: 16px;\n  }\n  .steps span {\n    font-size: 13px;\n  }\n}\n"] }]
    }], () => [], null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(StudentAttendanceReportsComponent, { className: "StudentAttendanceReportsComponent", filePath: "frontend/src/app/features/student/academics/student-attendance-reports.component.ts", lineNumber: 65 }); })();
