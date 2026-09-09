import { DatePipe, TitleCasePipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LucideArrowLeft, LucideArrowRight, LucideBuilding2, LucideCalendarDays, LucideCheck, LucideChevronRight, LucideCircleAlert, LucideClock3, LucideEllipsisVertical, LucideFileText, LucideFilter, LucideFolderOpen, LucideMessageSquare, LucidePaperclip, LucidePencil, LucidePlus, LucideSearch, LucideSend, LucideTrash2, LucideUpload, LucideX, } from '@lucide/angular';
import { forkJoin } from 'rxjs';
import { ApiService } from '../../../core/api.service';
import { StudentSessionService } from '../shared/services/student-session.service';
import * as i0 from "@angular/core";
const _c0 = () => ["approved", "rejected"];
const _c1 = a0 => ["/student/attendance/subjects", a0];
const _forTrack0 = ($index, $item) => $item._id;
const _forTrack1 = ($index, $item) => $item.recordId;
const _forTrack2 = ($index, $item) => $item.id;
const _forTrack3 = ($index, $item) => $item.key;
const _forTrack4 = ($index, $item) => $item.createdAt;
function StudentAttendanceCorrectionsComponent_Conditional_21_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 15);
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(1, "svg", 18);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1("", ctx_r0.successMessage(), " ");
} }
function StudentAttendanceCorrectionsComponent_Conditional_22_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 16);
    i0.ɵɵtext(1, "Loading correction requests\u2026");
    i0.ɵɵelementEnd();
} }
function StudentAttendanceCorrectionsComponent_Conditional_23_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 17);
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(1, "svg", 19);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1("", ctx_r0.error(), " ");
} }
function StudentAttendanceCorrectionsComponent_Conditional_24_For_60_Conditional_22_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(0, "svg", 49);
} }
function StudentAttendanceCorrectionsComponent_Conditional_24_For_60_Conditional_23_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(0, "svg", 50);
} }
function StudentAttendanceCorrectionsComponent_Conditional_24_For_60_Conditional_24_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(0, "svg", 51);
} }
function StudentAttendanceCorrectionsComponent_Conditional_24_For_60_Conditional_25_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(0, "svg", 52);
} }
function StudentAttendanceCorrectionsComponent_Conditional_24_For_60_Template(rf, ctx) { if (rf & 1) {
    const _r4 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 41);
    i0.ɵɵlistener("click", function StudentAttendanceCorrectionsComponent_Conditional_24_For_60_Template_button_click_0_listener() { const request_r5 = i0.ɵɵrestoreView(_r4).$implicit; const ctx_r0 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r0.openRequest(request_r5)); });
    i0.ɵɵelementStart(1, "span", 42)(2, "i");
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(3, "svg", 43);
    i0.ɵɵelementEnd();
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(4, "strong");
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(6, "span", 44)(7, "strong");
    i0.ɵɵtext(8);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(9, "small");
    i0.ɵɵtext(10);
    i0.ɵɵpipe(11, "date");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(12, "span", 45)(13, "em");
    i0.ɵɵtext(14);
    i0.ɵɵelementEnd();
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(15, "svg", 46);
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(16, "em");
    i0.ɵɵtext(17);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(18, "span", 47);
    i0.ɵɵtext(19);
    i0.ɵɵpipe(20, "date");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(21, "span", 48);
    i0.ɵɵconditionalCreate(22, StudentAttendanceCorrectionsComponent_Conditional_24_For_60_Conditional_22_Template, 1, 0, ":svg:svg", 49)(23, StudentAttendanceCorrectionsComponent_Conditional_24_For_60_Conditional_23_Template, 1, 0, ":svg:svg", 50)(24, StudentAttendanceCorrectionsComponent_Conditional_24_For_60_Conditional_24_Template, 1, 0, ":svg:svg", 51)(25, StudentAttendanceCorrectionsComponent_Conditional_24_For_60_Conditional_25_Template, 1, 0, ":svg:svg", 52);
    i0.ɵɵtext(26);
    i0.ɵɵelementEnd();
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(27, "svg", 53);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const request_r5 = ctx.$implicit;
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(request_r5.requestNumber);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(request_r5.subjectName);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate2("", i0.ɵɵpipeBind2(11, 12, request_r5.attendanceDate, "dd MMM"), " \u00B7 ", request_r5.startTime || "Time unavailable");
    i0.ɵɵadvance(3);
    i0.ɵɵattribute("data-status", request_r5.recordedStatus);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(request_r5.recordedStatus === "present" ? "P" : "A");
    i0.ɵɵadvance(2);
    i0.ɵɵattribute("data-status", request_r5.requestedStatus);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(request_r5.requestedStatus === "present" ? "P" : "A");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind2(20, 15, request_r5.createdAt, "dd MMM yyyy"));
    i0.ɵɵadvance(2);
    i0.ɵɵattribute("data-status", request_r5.status);
    i0.ɵɵadvance();
    i0.ɵɵconditional(request_r5.status === "approved" ? 22 : request_r5.status === "rejected" ? 23 : request_r5.status === "needs-reply" ? 24 : 25);
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate1(" ", ctx_r0.statusLabel(request_r5.status), " ");
} }
function StudentAttendanceCorrectionsComponent_Conditional_24_ForEmpty_61_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 40);
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(1, "svg", 54);
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(2, "strong");
    i0.ɵɵtext(3, "No correction requests found");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "p");
    i0.ɵɵtext(5, "Change the filter or create a new request.");
    i0.ɵɵelementEnd()();
} }
function StudentAttendanceCorrectionsComponent_Conditional_24_Template(rf, ctx) { if (rf & 1) {
    const _r2 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "section", 20)(1, "button", 21);
    i0.ɵɵlistener("click", function StudentAttendanceCorrectionsComponent_Conditional_24_Template_button_click_1_listener() { i0.ɵɵrestoreView(_r2); const ctx_r0 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r0.setFilter("all")); });
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(2, "svg", 22);
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(3, "span");
    i0.ɵɵtext(4, "All");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "b");
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(7, "button", 21);
    i0.ɵɵlistener("click", function StudentAttendanceCorrectionsComponent_Conditional_24_Template_button_click_7_listener() { i0.ɵɵrestoreView(_r2); const ctx_r0 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r0.setFilter("open")); });
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(8, "svg", 23);
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(9, "span");
    i0.ɵɵtext(10, "Open");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(11, "b");
    i0.ɵɵtext(12);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(13, "button", 24);
    i0.ɵɵlistener("click", function StudentAttendanceCorrectionsComponent_Conditional_24_Template_button_click_13_listener() { i0.ɵɵrestoreView(_r2); const ctx_r0 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r0.setFilter("needs-reply")); });
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(14, "svg", 25);
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(15, "span");
    i0.ɵɵtext(16, "Needs reply");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(17, "b");
    i0.ɵɵtext(18);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(19, "button", 26);
    i0.ɵɵlistener("click", function StudentAttendanceCorrectionsComponent_Conditional_24_Template_button_click_19_listener() { i0.ɵɵrestoreView(_r2); const ctx_r0 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r0.setFilter("approved")); });
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(20, "svg", 27);
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(21, "span");
    i0.ɵɵtext(22, "Approved");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(23, "b");
    i0.ɵɵtext(24);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(25, "button", 28);
    i0.ɵɵlistener("click", function StudentAttendanceCorrectionsComponent_Conditional_24_Template_button_click_25_listener() { i0.ɵɵrestoreView(_r2); const ctx_r0 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r0.setFilter("rejected")); });
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(26, "svg", 29);
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(27, "span");
    i0.ɵɵtext(28, "Rejected");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(29, "b");
    i0.ɵɵtext(30);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(31, "section", 30)(32, "div", 31)(33, "label");
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(34, "svg", 32);
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(35, "input", 33, 0);
    i0.ɵɵlistener("input", function StudentAttendanceCorrectionsComponent_Conditional_24_Template_input_input_35_listener() { i0.ɵɵrestoreView(_r2); const requestSearch_r3 = i0.ɵɵreference(36); const ctx_r0 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r0.setSearch(requestSearch_r3.value)); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(37, "div")(38, "button", 34);
    i0.ɵɵtext(39, "All statuses ");
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(40, "svg", 35);
    i0.ɵɵelementEnd();
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(41, "button", 34);
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(42, "svg", 36);
    i0.ɵɵtext(43, "All dates");
    i0.ɵɵelementEnd();
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(44, "button", 34);
    i0.ɵɵtext(45, "Newest first");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(46, "div", 37)(47, "div", 38)(48, "span");
    i0.ɵɵtext(49, "Request");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(50, "span");
    i0.ɵɵtext(51, "Lecture");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(52, "span");
    i0.ɵɵtext(53, "Correction");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(54, "span");
    i0.ɵɵtext(55, "Submitted");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(56, "span");
    i0.ɵɵtext(57, "Status");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(58, "span");
    i0.ɵɵelementEnd();
    i0.ɵɵrepeaterCreate(59, StudentAttendanceCorrectionsComponent_Conditional_24_For_60_Template, 28, 18, "button", 39, _forTrack0, false, StudentAttendanceCorrectionsComponent_Conditional_24_ForEmpty_61_Template, 6, 0, "div", 40);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(62, "footer");
    i0.ɵɵtext(63);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const data_r6 = ctx;
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵclassProp("is-active", ctx_r0.filter() === "all");
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(data_r6.counts.all);
    i0.ɵɵadvance();
    i0.ɵɵclassProp("is-active", ctx_r0.filter() === "open");
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(data_r6.counts.open);
    i0.ɵɵadvance();
    i0.ɵɵclassProp("is-active", ctx_r0.filter() === "needs-reply");
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(data_r6.counts.needsReply);
    i0.ɵɵadvance();
    i0.ɵɵclassProp("is-active", ctx_r0.filter() === "approved");
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(data_r6.counts.approved);
    i0.ɵɵadvance();
    i0.ɵɵclassProp("is-active", ctx_r0.filter() === "rejected");
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(data_r6.counts.rejected);
    i0.ɵɵadvance(29);
    i0.ɵɵrepeater(ctx_r0.filteredRequests());
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate2("Showing ", ctx_r0.filteredRequests().length, " of ", data_r6.counts.all, " requests");
} }
function StudentAttendanceCorrectionsComponent_Conditional_25_Conditional_2_Conditional_10_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(0, "svg", 18);
} }
function StudentAttendanceCorrectionsComponent_Conditional_25_Conditional_2_Conditional_11_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtext(0, " 1 ");
} }
function StudentAttendanceCorrectionsComponent_Conditional_25_Conditional_2_Conditional_16_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(0, "svg", 18);
} }
function StudentAttendanceCorrectionsComponent_Conditional_25_Conditional_2_Conditional_17_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtext(0, " 2 ");
} }
function StudentAttendanceCorrectionsComponent_Conditional_25_Conditional_2_Conditional_26_For_15_Conditional_12_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(0, "svg", 18);
} }
function StudentAttendanceCorrectionsComponent_Conditional_25_Conditional_2_Conditional_26_For_15_Template(rf, ctx) { if (rf & 1) {
    const _r11 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 21);
    i0.ɵɵlistener("click", function StudentAttendanceCorrectionsComponent_Conditional_25_Conditional_2_Conditional_26_For_15_Template_button_click_0_listener() { const record_r12 = i0.ɵɵrestoreView(_r11).$implicit; const ctx_r0 = i0.ɵɵnextContext(4); return i0.ɵɵresetView(ctx_r0.chooseRecord(record_r12)); });
    i0.ɵɵelementStart(1, "i");
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(2, "svg", 77);
    i0.ɵɵelementEnd();
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(3, "span")(4, "strong");
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "small");
    i0.ɵɵtext(7);
    i0.ɵɵpipe(8, "date");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(9, "em");
    i0.ɵɵtext(10);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(11, "b");
    i0.ɵɵconditionalCreate(12, StudentAttendanceCorrectionsComponent_Conditional_25_Conditional_2_Conditional_26_For_15_Conditional_12_Template, 1, 0, ":svg:svg", 18);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    let tmp_14_0;
    let tmp_19_0;
    const record_r12 = ctx.$implicit;
    const ctx_r0 = i0.ɵɵnextContext(4);
    i0.ɵɵclassProp("is-selected", ((tmp_14_0 = ctx_r0.selectedRecord()) == null ? null : tmp_14_0.recordId) === record_r12.recordId);
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(record_r12.subjectName);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate2("", i0.ɵɵpipeBind2(8, 8, record_r12.date, "dd MMM"), " \u00B7 ", record_r12.startTime || "Time unavailable");
    i0.ɵɵadvance(2);
    i0.ɵɵattribute("data-status", record_r12.status);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(record_r12.status === "present" ? "Present" : "Absent");
    i0.ɵɵadvance(2);
    i0.ɵɵconditional(((tmp_19_0 = ctx_r0.selectedRecord()) == null ? null : tmp_19_0.recordId) === record_r12.recordId ? 12 : -1);
} }
function StudentAttendanceCorrectionsComponent_Conditional_25_Conditional_2_Conditional_26_ForEmpty_16_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 76);
    i0.ɵɵtext(1, "No attendance records match your search.");
    i0.ɵɵelementEnd();
} }
function StudentAttendanceCorrectionsComponent_Conditional_25_Conditional_2_Conditional_26_Template(rf, ctx) { if (rf & 1) {
    const _r9 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "section", 62)(1, "div", 69)(2, "div")(3, "h3");
    i0.ɵɵtext(4, "Select a lecture");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "p");
    i0.ɵɵtext(6, "Choose the record that needs correction.");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(7, "button", 70);
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(8, "svg", 71);
    i0.ɵɵelementEnd()();
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(9, "label", 72);
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(10, "svg", 32);
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(11, "input", 73, 1);
    i0.ɵɵlistener("input", function StudentAttendanceCorrectionsComponent_Conditional_25_Conditional_2_Conditional_26_Template_input_input_11_listener() { i0.ɵɵrestoreView(_r9); const lectureSearch_r10 = i0.ɵɵreference(12); const ctx_r0 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r0.setRecordSearch(lectureSearch_r10.value)); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(13, "div", 74);
    i0.ɵɵrepeaterCreate(14, StudentAttendanceCorrectionsComponent_Conditional_25_Conditional_2_Conditional_26_For_15_Template, 13, 11, "button", 75, _forTrack1, false, StudentAttendanceCorrectionsComponent_Conditional_25_Conditional_2_Conditional_26_ForEmpty_16_Template, 2, 0, "div", 76);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(14);
    i0.ɵɵrepeater(ctx_r0.filteredRecords());
} }
function StudentAttendanceCorrectionsComponent_Conditional_25_Conditional_2_Conditional_27_Conditional_1_For_16_Conditional_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(0, "svg", 91);
} }
function StudentAttendanceCorrectionsComponent_Conditional_25_Conditional_2_Conditional_27_Conditional_1_For_16_Template(rf, ctx) { if (rf & 1) {
    const _r14 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 21);
    i0.ɵɵlistener("click", function StudentAttendanceCorrectionsComponent_Conditional_25_Conditional_2_Conditional_27_Conditional_1_For_16_Template_button_click_0_listener() { const reason_r15 = i0.ɵɵrestoreView(_r14).$implicit; const ctx_r0 = i0.ɵɵnextContext(5); return i0.ɵɵresetView(ctx_r0.chooseReason(reason_r15.id)); });
    i0.ɵɵelementStart(1, "i");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "span");
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "b");
    i0.ɵɵconditionalCreate(6, StudentAttendanceCorrectionsComponent_Conditional_25_Conditional_2_Conditional_27_Conditional_1_For_16_Conditional_6_Template, 1, 0, ":svg:svg", 91);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const reason_r15 = ctx.$implicit;
    const ctx_r0 = i0.ɵɵnextContext(5);
    i0.ɵɵclassProp("is-selected", ctx_r0.reasonType() === reason_r15.id);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(reason_r15.mark);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(reason_r15.label);
    i0.ɵɵadvance(2);
    i0.ɵɵconditional(ctx_r0.reasonType() === reason_r15.id ? 6 : -1);
} }
function StudentAttendanceCorrectionsComponent_Conditional_25_Conditional_2_Conditional_27_Conditional_1_Conditional_46_Template(rf, ctx) { if (rf & 1) {
    const _r17 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 89);
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(1, "svg", 92);
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(2, "span")(3, "strong");
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "small");
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(7, "button", 93);
    i0.ɵɵlistener("click", function StudentAttendanceCorrectionsComponent_Conditional_25_Conditional_2_Conditional_27_Conditional_1_Conditional_46_Template_button_click_7_listener() { i0.ɵɵrestoreView(_r17); const ctx_r0 = i0.ɵɵnextContext(5); return i0.ɵɵresetView(ctx_r0.removeAttachment()); });
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(8, "svg", 94);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const file_r18 = ctx;
    const ctx_r0 = i0.ɵɵnextContext(5);
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(file_r18.name);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r0.formatBytes(file_r18.size));
} }
function StudentAttendanceCorrectionsComponent_Conditional_25_Conditional_2_Conditional_27_Conditional_1_Template(rf, ctx) { if (rf & 1) {
    const _r13 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 78)(1, "i");
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(2, "svg", 79);
    i0.ɵɵelementEnd();
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(3, "span")(4, "strong");
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "small");
    i0.ɵɵtext(7);
    i0.ɵɵpipe(8, "date");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(9, "button", 21);
    i0.ɵɵlistener("click", function StudentAttendanceCorrectionsComponent_Conditional_25_Conditional_2_Conditional_27_Conditional_1_Template_button_click_9_listener() { i0.ɵɵrestoreView(_r13); const ctx_r0 = i0.ɵɵnextContext(4); return i0.ɵɵresetView(ctx_r0.previousStep()); });
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(10, "svg", 80);
    i0.ɵɵtext(11, "Edit ");
    i0.ɵɵelementEnd()();
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(12, "h3");
    i0.ɵɵtext(13, "What needs correction?");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(14, "div", 81);
    i0.ɵɵrepeaterCreate(15, StudentAttendanceCorrectionsComponent_Conditional_25_Conditional_2_Conditional_27_Conditional_1_For_16_Template, 7, 5, "button", 75, _forTrack2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(17, "div", 82)(18, "strong");
    i0.ɵɵtext(19, "Current status \u2192 Requested status");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(20, "div")(21, "em");
    i0.ɵɵtext(22);
    i0.ɵɵpipe(23, "titlecase");
    i0.ɵɵelementEnd();
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(24, "svg", 83);
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(25, "em");
    i0.ɵɵtext(26);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(27, "label", 84)(28, "strong");
    i0.ɵɵtext(29, "Add a short note");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(30, "textarea", 85, 2);
    i0.ɵɵlistener("input", function StudentAttendanceCorrectionsComponent_Conditional_25_Conditional_2_Conditional_27_Conditional_1_Template_textarea_input_30_listener() { i0.ɵɵrestoreView(_r13); const noteInput_r16 = i0.ɵɵreference(31); const ctx_r0 = i0.ɵɵnextContext(4); return i0.ɵɵresetView(ctx_r0.setNote(noteInput_r16.value)); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(32, "small");
    i0.ɵɵtext(33);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(34, "div", 86)(35, "strong");
    i0.ɵɵtext(36, "Add proof ");
    i0.ɵɵelementStart(37, "span");
    i0.ɵɵtext(38, "(optional)");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(39, "label");
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(40, "svg", 87);
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(41, "b");
    i0.ɵɵtext(42, "Add proof");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(43, "small");
    i0.ɵɵtext(44, "PDF, JPG or PNG \u00B7 Max 5 MB");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(45, "input", 88);
    i0.ɵɵlistener("change", function StudentAttendanceCorrectionsComponent_Conditional_25_Conditional_2_Conditional_27_Conditional_1_Template_input_change_45_listener($event) { i0.ɵɵrestoreView(_r13); const ctx_r0 = i0.ɵɵnextContext(4); return i0.ɵɵresetView(ctx_r0.chooseAttachment($event)); });
    i0.ɵɵelementEnd()()();
    i0.ɵɵconditionalCreate(46, StudentAttendanceCorrectionsComponent_Conditional_25_Conditional_2_Conditional_27_Conditional_1_Conditional_46_Template, 9, 2, "div", 89);
    i0.ɵɵelementStart(47, "div", 90);
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(48, "svg", 18);
    i0.ɵɵtext(49, "No open request found for this lecture ");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    let tmp_15_0;
    const record_r19 = ctx;
    const ctx_r0 = i0.ɵɵnextContext(4);
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(record_r19.subjectName);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate2("", i0.ɵɵpipeBind2(8, 10, record_r19.date, "dd MMM"), " \u00B7 ", record_r19.startTime);
    i0.ɵɵadvance(8);
    i0.ɵɵrepeater(ctx_r0.reasons);
    i0.ɵɵadvance(6);
    i0.ɵɵattribute("data-status", record_r19.status);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(23, 13, record_r19.status));
    i0.ɵɵadvance(3);
    i0.ɵɵattribute("data-status", record_r19.status === "absent" ? "present" : "absent");
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r0.requestedStatus(record_r19));
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("value", ctx_r0.note());
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1("", ctx_r0.note().length, "/300");
    i0.ɵɵadvance(13);
    i0.ɵɵconditional((tmp_15_0 = ctx_r0.attachment()) ? 46 : -1, tmp_15_0);
} }
function StudentAttendanceCorrectionsComponent_Conditional_25_Conditional_2_Conditional_27_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "section", 63);
    i0.ɵɵconditionalCreate(1, StudentAttendanceCorrectionsComponent_Conditional_25_Conditional_2_Conditional_27_Conditional_1_Template, 50, 15);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    let tmp_3_0;
    const ctx_r0 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance();
    i0.ɵɵconditional((tmp_3_0 = ctx_r0.selectedRecord()) ? 1 : -1, tmp_3_0);
} }
function StudentAttendanceCorrectionsComponent_Conditional_25_Conditional_2_Conditional_28_Conditional_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "section", 95)(1, "div", 96)(2, "span");
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(3, "svg", 97);
    i0.ɵɵelementEnd();
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(4, "h3");
    i0.ɵɵtext(5, "Ready to submit");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "p");
    i0.ɵɵtext(7, "Review the details before sending your request.");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(8, "div", 98)(9, "h3");
    i0.ɵɵtext(10);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(11, "p");
    i0.ɵɵtext(12);
    i0.ɵɵpipe(13, "date");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(14, "div", 99)(15, "em");
    i0.ɵɵtext(16);
    i0.ɵɵpipe(17, "titlecase");
    i0.ɵɵelementEnd();
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(18, "svg", 100);
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(19, "em");
    i0.ɵɵtext(20);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(21, "dl")(22, "div")(23, "dt");
    i0.ɵɵtext(24, "Reason");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(25, "dd");
    i0.ɵɵtext(26);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(27, "div")(28, "dt");
    i0.ɵɵtext(29, "Note");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(30, "dd");
    i0.ɵɵtext(31);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(32, "div")(33, "dt");
    i0.ɵɵtext(34, "Proof");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(35, "dd");
    i0.ɵɵtext(36);
    i0.ɵɵelementEnd()()()()();
} if (rf & 2) {
    let tmp_13_0;
    const record_r20 = ctx;
    const ctx_r0 = i0.ɵɵnextContext(4);
    i0.ɵɵadvance(10);
    i0.ɵɵtextInterpolate(record_r20.subjectName);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate3(" ", record_r20.subjectCode, " \u00B7 ", i0.ɵɵpipeBind2(13, 11, record_r20.date, "dd MMM yyyy"), " \u00B7 ", record_r20.startTime, " ");
    i0.ɵɵadvance(3);
    i0.ɵɵattribute("data-status", record_r20.status);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(17, 14, record_r20.status));
    i0.ɵɵadvance(3);
    i0.ɵɵattribute("data-status", record_r20.status === "absent" ? "present" : "absent");
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r0.requestedStatus(record_r20));
    i0.ɵɵadvance(6);
    i0.ɵɵtextInterpolate(ctx_r0.reasonLabel(ctx_r0.reasonType()));
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(ctx_r0.note());
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(((tmp_13_0 = ctx_r0.attachment()) == null ? null : tmp_13_0.name) || "No attachment");
} }
function StudentAttendanceCorrectionsComponent_Conditional_25_Conditional_2_Conditional_28_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵconditionalCreate(0, StudentAttendanceCorrectionsComponent_Conditional_25_Conditional_2_Conditional_28_Conditional_0_Template, 37, 16, "section", 95);
} if (rf & 2) {
    let tmp_3_0;
    const ctx_r0 = i0.ɵɵnextContext(3);
    i0.ɵɵconditional((tmp_3_0 = ctx_r0.selectedRecord()) ? 0 : -1, tmp_3_0);
} }
function StudentAttendanceCorrectionsComponent_Conditional_25_Conditional_2_Conditional_29_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 64);
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(1, "svg", 101);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r0.formError());
} }
function StudentAttendanceCorrectionsComponent_Conditional_25_Conditional_2_Conditional_31_Template(rf, ctx) { if (rf & 1) {
    const _r21 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 102);
    i0.ɵɵlistener("click", function StudentAttendanceCorrectionsComponent_Conditional_25_Conditional_2_Conditional_31_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r21); const ctx_r0 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r0.closeDrawer()); });
    i0.ɵɵtext(1, "Cancel");
    i0.ɵɵelementEnd();
} }
function StudentAttendanceCorrectionsComponent_Conditional_25_Conditional_2_Conditional_32_Template(rf, ctx) { if (rf & 1) {
    const _r22 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 102);
    i0.ɵɵlistener("click", function StudentAttendanceCorrectionsComponent_Conditional_25_Conditional_2_Conditional_32_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r22); const ctx_r0 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r0.previousStep()); });
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(1, "svg", 103);
    i0.ɵɵtext(2, "Back ");
    i0.ɵɵelementEnd();
} }
function StudentAttendanceCorrectionsComponent_Conditional_25_Conditional_2_Conditional_33_Template(rf, ctx) { if (rf & 1) {
    const _r23 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 13);
    i0.ɵɵlistener("click", function StudentAttendanceCorrectionsComponent_Conditional_25_Conditional_2_Conditional_33_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r23); const ctx_r0 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r0.nextStep()); });
    i0.ɵɵtext(1, " Continue");
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(2, "svg", 104);
    i0.ɵɵelementEnd();
} }
function StudentAttendanceCorrectionsComponent_Conditional_25_Conditional_2_Conditional_34_Template(rf, ctx) { if (rf & 1) {
    const _r24 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 105);
    i0.ɵɵlistener("click", function StudentAttendanceCorrectionsComponent_Conditional_25_Conditional_2_Conditional_34_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r24); const ctx_r0 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r0.submitRequest()); });
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(1, "svg", 106);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(3);
    i0.ɵɵproperty("disabled", ctx_r0.submitting());
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1("", ctx_r0.submitting() ? "Submitting\u2026" : "Submit request", " ");
} }
function StudentAttendanceCorrectionsComponent_Conditional_25_Conditional_2_Template(rf, ctx) { if (rf & 1) {
    const _r8 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "header", 57)(1, "button", 58);
    i0.ɵɵlistener("click", function StudentAttendanceCorrectionsComponent_Conditional_25_Conditional_2_Template_button_click_1_listener() { i0.ɵɵrestoreView(_r8); const ctx_r0 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r0.closeDrawer()); });
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(2, "svg", 59);
    i0.ɵɵelementEnd();
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(3, "h2");
    i0.ɵɵtext(4, "New correction request");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "span");
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(7, "div", 60)(8, "div")(9, "i");
    i0.ɵɵconditionalCreate(10, StudentAttendanceCorrectionsComponent_Conditional_25_Conditional_2_Conditional_10_Template, 1, 0, ":svg:svg", 18)(11, StudentAttendanceCorrectionsComponent_Conditional_25_Conditional_2_Conditional_11_Template, 1, 0);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(12, "span");
    i0.ɵɵtext(13, "Select");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(14, "div")(15, "i");
    i0.ɵɵconditionalCreate(16, StudentAttendanceCorrectionsComponent_Conditional_25_Conditional_2_Conditional_16_Template, 1, 0, ":svg:svg", 18)(17, StudentAttendanceCorrectionsComponent_Conditional_25_Conditional_2_Conditional_17_Template, 1, 0);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(18, "span");
    i0.ɵɵtext(19, "Explain");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(20, "div")(21, "i");
    i0.ɵɵtext(22, "3");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(23, "span");
    i0.ɵɵtext(24, "Review");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(25, "div", 61);
    i0.ɵɵconditionalCreate(26, StudentAttendanceCorrectionsComponent_Conditional_25_Conditional_2_Conditional_26_Template, 17, 1, "section", 62)(27, StudentAttendanceCorrectionsComponent_Conditional_25_Conditional_2_Conditional_27_Template, 2, 1, "section", 63)(28, StudentAttendanceCorrectionsComponent_Conditional_25_Conditional_2_Conditional_28_Template, 1, 1);
    i0.ɵɵelementEnd();
    i0.ɵɵconditionalCreate(29, StudentAttendanceCorrectionsComponent_Conditional_25_Conditional_2_Conditional_29_Template, 3, 1, "div", 64);
    i0.ɵɵelementStart(30, "footer", 65);
    i0.ɵɵconditionalCreate(31, StudentAttendanceCorrectionsComponent_Conditional_25_Conditional_2_Conditional_31_Template, 2, 0, "button", 66)(32, StudentAttendanceCorrectionsComponent_Conditional_25_Conditional_2_Conditional_32_Template, 3, 0, "button", 66);
    i0.ɵɵconditionalCreate(33, StudentAttendanceCorrectionsComponent_Conditional_25_Conditional_2_Conditional_33_Template, 3, 0, "button", 67)(34, StudentAttendanceCorrectionsComponent_Conditional_25_Conditional_2_Conditional_34_Template, 3, 2, "button", 68);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(6);
    i0.ɵɵtextInterpolate1("", ctx_r0.step(), " of 3");
    i0.ɵɵadvance(2);
    i0.ɵɵclassProp("is-done", ctx_r0.step() > 1)("is-active", ctx_r0.step() === 1);
    i0.ɵɵadvance(2);
    i0.ɵɵconditional(ctx_r0.step() > 1 ? 10 : 11);
    i0.ɵɵadvance(4);
    i0.ɵɵclassProp("is-done", ctx_r0.step() > 2)("is-active", ctx_r0.step() === 2);
    i0.ɵɵadvance(2);
    i0.ɵɵconditional(ctx_r0.step() > 2 ? 16 : 17);
    i0.ɵɵadvance(4);
    i0.ɵɵclassProp("is-active", ctx_r0.step() === 3);
    i0.ɵɵadvance(6);
    i0.ɵɵconditional(ctx_r0.step() === 1 ? 26 : ctx_r0.step() === 2 ? 27 : 28);
    i0.ɵɵadvance(3);
    i0.ɵɵconditional(ctx_r0.formError() ? 29 : -1);
    i0.ɵɵadvance(2);
    i0.ɵɵconditional(ctx_r0.step() === 1 ? 31 : 32);
    i0.ɵɵadvance(2);
    i0.ɵɵconditional(ctx_r0.step() < 3 ? 33 : 34);
} }
function StudentAttendanceCorrectionsComponent_Conditional_25_Conditional_3_Conditional_12_Template(rf, ctx) { if (rf & 1) {
    const _r26 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 115);
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(1, "svg", 130);
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(2, "strong");
    i0.ɵɵtext(3, "Add proof or reply to continue");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "button", 21);
    i0.ɵɵlistener("click", function StudentAttendanceCorrectionsComponent_Conditional_25_Conditional_3_Conditional_12_Template_button_click_4_listener() { i0.ɵɵrestoreView(_r26); const ctx_r0 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r0.scrollToResponse()); });
    i0.ɵɵtext(5, " Respond");
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(6, "svg", 131);
    i0.ɵɵelementEnd()();
} }
function StudentAttendanceCorrectionsComponent_Conditional_25_Conditional_3_Conditional_41_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(0, "svg", 91);
} }
function StudentAttendanceCorrectionsComponent_Conditional_25_Conditional_3_Conditional_42_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtext(0, " 2 ");
} }
function StudentAttendanceCorrectionsComponent_Conditional_25_Conditional_3_For_71_Template(rf, ctx) { if (rf & 1) {
    const _r27 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 132);
    i0.ɵɵlistener("click", function StudentAttendanceCorrectionsComponent_Conditional_25_Conditional_3_For_71_Template_button_click_0_listener() { const file_r28 = i0.ɵɵrestoreView(_r27).$implicit; const request_r29 = i0.ɵɵnextContext(); const ctx_r0 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r0.openAttachment(request_r29._id, file_r28.key, file_r28.name)); });
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(1, "svg", 133);
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(2, "span")(3, "strong");
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "small");
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd()();
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(7, "svg", 131);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const file_r28 = ctx.$implicit;
    const ctx_r0 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(file_r28.name);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r0.formatBytes(file_r28.size));
} }
function StudentAttendanceCorrectionsComponent_Conditional_25_Conditional_3_For_77_For_9_Template(rf, ctx) { if (rf & 1) {
    const _r30 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 21);
    i0.ɵɵlistener("click", function StudentAttendanceCorrectionsComponent_Conditional_25_Conditional_3_For_77_For_9_Template_button_click_0_listener() { const file_r31 = i0.ɵɵrestoreView(_r30).$implicit; const request_r29 = i0.ɵɵnextContext(2); const ctx_r0 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r0.openAttachment(request_r29._id, file_r31.key, file_r31.name)); });
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(1, "svg", 134);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const file_r31 = ctx.$implicit;
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1("", file_r31.name, " ");
} }
function StudentAttendanceCorrectionsComponent_Conditional_25_Conditional_3_For_77_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "article", 124)(1, "strong");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "time");
    i0.ɵɵtext(4);
    i0.ɵɵpipe(5, "date");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "p");
    i0.ɵɵtext(7);
    i0.ɵɵelementEnd();
    i0.ɵɵrepeaterCreate(8, StudentAttendanceCorrectionsComponent_Conditional_25_Conditional_3_For_77_For_9_Template, 3, 1, "button", 34, _forTrack3);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const message_r32 = ctx.$implicit;
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(message_r32.authorName);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind2(5, 3, message_r32.createdAt, "dd MMM, h:mm a"));
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(message_r32.message);
    i0.ɵɵadvance();
    i0.ɵɵrepeater(message_r32.attachments);
} }
function StudentAttendanceCorrectionsComponent_Conditional_25_Conditional_3_ForEmpty_78_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 125);
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(1, "svg", 25);
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(2, "p");
    i0.ɵɵtext(3, "Your request is in the Academic Office queue. Updates will appear here.");
    i0.ɵɵelementEnd()();
} }
function StudentAttendanceCorrectionsComponent_Conditional_25_Conditional_3_Conditional_79_Conditional_11_Template(rf, ctx) { if (rf & 1) {
    const _r35 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵtext(1);
    i0.ɵɵelementStart(2, "button", 21);
    i0.ɵɵlistener("click", function StudentAttendanceCorrectionsComponent_Conditional_25_Conditional_3_Conditional_79_Conditional_11_Template_button_click_2_listener() { i0.ɵɵrestoreView(_r35); const ctx_r0 = i0.ɵɵnextContext(4); return i0.ɵɵresetView(ctx_r0.removeAttachment(true)); });
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(3, "svg", 138);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx.name);
} }
function StudentAttendanceCorrectionsComponent_Conditional_25_Conditional_3_Conditional_79_Template(rf, ctx) { if (rf & 1) {
    const _r33 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "section", 126, 3)(2, "h3");
    i0.ɵɵtext(3, "Send your response");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "textarea", 135, 4);
    i0.ɵɵlistener("input", function StudentAttendanceCorrectionsComponent_Conditional_25_Conditional_3_Conditional_79_Template_textarea_input_4_listener() { i0.ɵɵrestoreView(_r33); const responseInput_r34 = i0.ɵɵreference(5); const ctx_r0 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r0.setResponse(responseInput_r34.value)); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "div")(7, "label");
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(8, "svg", 136);
    i0.ɵɵtext(9, "Add proof");
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(10, "input", 88);
    i0.ɵɵlistener("change", function StudentAttendanceCorrectionsComponent_Conditional_25_Conditional_3_Conditional_79_Template_input_change_10_listener($event) { i0.ɵɵrestoreView(_r33); const ctx_r0 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r0.chooseAttachment($event, true)); });
    i0.ɵɵelementEnd()();
    i0.ɵɵconditionalCreate(11, StudentAttendanceCorrectionsComponent_Conditional_25_Conditional_3_Conditional_79_Conditional_11_Template, 4, 1, "span");
    i0.ɵɵelementStart(12, "button", 105);
    i0.ɵɵlistener("click", function StudentAttendanceCorrectionsComponent_Conditional_25_Conditional_3_Conditional_79_Template_button_click_12_listener() { i0.ɵɵrestoreView(_r33); const ctx_r0 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r0.submitResponse()); });
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(13, "svg", 137);
    i0.ɵɵtext(14, "Send response ");
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    let tmp_7_0;
    const ctx_r0 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("value", ctx_r0.responseMessage());
    i0.ɵɵadvance(7);
    i0.ɵɵconditional((tmp_7_0 = ctx_r0.responseAttachment()) ? 11 : -1, tmp_7_0);
    i0.ɵɵadvance();
    i0.ɵɵproperty("disabled", ctx_r0.submitting());
} }
function StudentAttendanceCorrectionsComponent_Conditional_25_Conditional_3_Conditional_80_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 64);
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(1, "svg", 101);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r0.formError());
} }
function StudentAttendanceCorrectionsComponent_Conditional_25_Conditional_3_Conditional_85_Template(rf, ctx) { if (rf & 1) {
    const _r36 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 139);
    i0.ɵɵlistener("click", function StudentAttendanceCorrectionsComponent_Conditional_25_Conditional_3_Conditional_85_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r36); const ctx_r0 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r0.withdraw()); });
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(1, "svg", 140);
    i0.ɵɵtext(2, "Withdraw request ");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(3);
    i0.ɵɵproperty("disabled", ctx_r0.submitting());
} }
function StudentAttendanceCorrectionsComponent_Conditional_25_Conditional_3_Template(rf, ctx) { if (rf & 1) {
    const _r25 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "header", 107)(1, "button", 108);
    i0.ɵɵlistener("click", function StudentAttendanceCorrectionsComponent_Conditional_25_Conditional_3_Template_button_click_1_listener() { i0.ɵɵrestoreView(_r25); const ctx_r0 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r0.closeDrawer()); });
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(2, "svg", 109);
    i0.ɵɵelementEnd();
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(3, "h2");
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "span", 48);
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "button", 110);
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(8, "svg", 111);
    i0.ɵɵelementEnd();
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(9, "button", 112);
    i0.ɵɵlistener("click", function StudentAttendanceCorrectionsComponent_Conditional_25_Conditional_3_Template_button_click_9_listener() { i0.ɵɵrestoreView(_r25); const ctx_r0 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r0.closeDrawer()); });
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(10, "svg", 113);
    i0.ɵɵelementEnd()();
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(11, "div", 114);
    i0.ɵɵconditionalCreate(12, StudentAttendanceCorrectionsComponent_Conditional_25_Conditional_3_Conditional_12_Template, 7, 0, "div", 115);
    i0.ɵɵelementStart(13, "section", 116)(14, "i");
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(15, "svg", 77);
    i0.ɵɵelementEnd();
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(16, "span")(17, "strong");
    i0.ɵɵtext(18);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(19, "small");
    i0.ɵɵtext(20);
    i0.ɵɵpipe(21, "date");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(22, "div")(23, "em");
    i0.ɵɵtext(24);
    i0.ɵɵpipe(25, "titlecase");
    i0.ɵɵelementEnd();
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(26, "svg", 104);
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(27, "em");
    i0.ɵɵtext(28);
    i0.ɵɵpipe(29, "titlecase");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(30, "section", 117)(31, "div", 118)(32, "i");
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(33, "svg", 91);
    i0.ɵɵelementEnd();
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(34, "span");
    i0.ɵɵtext(35, "Submitted");
    i0.ɵɵelementStart(36, "small");
    i0.ɵɵtext(37);
    i0.ɵɵpipe(38, "date");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(39, "div")(40, "i");
    i0.ɵɵconditionalCreate(41, StudentAttendanceCorrectionsComponent_Conditional_25_Conditional_3_Conditional_41_Template, 1, 0, ":svg:svg", 91)(42, StudentAttendanceCorrectionsComponent_Conditional_25_Conditional_3_Conditional_42_Template, 1, 0);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(43, "span");
    i0.ɵɵtext(44, "Review");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(45, "div")(46, "i");
    i0.ɵɵtext(47, "3");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(48, "span");
    i0.ɵɵtext(49, "Reply");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(50, "div")(51, "i");
    i0.ɵɵtext(52, "4");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(53, "span");
    i0.ɵɵtext(54, "Decision");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(55, "div", 119)(56, "section", 120)(57, "h3");
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(58, "svg", 121);
    i0.ɵɵtext(59, "Your request");
    i0.ɵɵelementEnd();
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(60, "p");
    i0.ɵɵtext(61);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(62, "div", 99)(63, "em");
    i0.ɵɵtext(64);
    i0.ɵɵpipe(65, "titlecase");
    i0.ɵɵelementEnd();
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(66, "svg", 104);
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(67, "em");
    i0.ɵɵtext(68);
    i0.ɵɵpipe(69, "titlecase");
    i0.ɵɵelementEnd()();
    i0.ɵɵrepeaterCreate(70, StudentAttendanceCorrectionsComponent_Conditional_25_Conditional_3_For_71_Template, 8, 2, "button", 122, _forTrack3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(72, "section", 120)(73, "h3");
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(74, "svg", 123);
    i0.ɵɵtext(75, "Academic Office");
    i0.ɵɵelementEnd();
    i0.ɵɵrepeaterCreate(76, StudentAttendanceCorrectionsComponent_Conditional_25_Conditional_3_For_77_Template, 10, 6, "article", 124, _forTrack4, false, StudentAttendanceCorrectionsComponent_Conditional_25_Conditional_3_ForEmpty_78_Template, 4, 0, "div", 125);
    i0.ɵɵelementEnd()();
    i0.ɵɵconditionalCreate(79, StudentAttendanceCorrectionsComponent_Conditional_25_Conditional_3_Conditional_79_Template, 15, 3, "section", 126);
    i0.ɵɵconditionalCreate(80, StudentAttendanceCorrectionsComponent_Conditional_25_Conditional_3_Conditional_80_Template, 3, 1, "div", 64);
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(81, "div", 127)(82, "a", 128);
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(83, "svg", 43);
    i0.ɵɵtext(84, "Attendance record");
    i0.ɵɵelementEnd();
    i0.ɵɵconditionalCreate(85, StudentAttendanceCorrectionsComponent_Conditional_25_Conditional_3_Conditional_85_Template, 3, 1, "button", 129);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const request_r29 = ctx;
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(request_r29.requestNumber);
    i0.ɵɵadvance();
    i0.ɵɵattribute("data-status", request_r29.status);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r0.statusLabel(request_r29.status));
    i0.ɵɵadvance(6);
    i0.ɵɵconditional(request_r29.status === "needs-reply" ? 12 : -1);
    i0.ɵɵadvance(6);
    i0.ɵɵtextInterpolate(request_r29.subjectName);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate2("", i0.ɵɵpipeBind2(21, 31, request_r29.attendanceDate, "dd MMM"), " \u00B7 ", request_r29.startTime);
    i0.ɵɵadvance(3);
    i0.ɵɵattribute("data-status", request_r29.recordedStatus);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(25, 34, request_r29.recordedStatus));
    i0.ɵɵadvance(3);
    i0.ɵɵattribute("data-status", request_r29.requestedStatus);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(29, 36, request_r29.requestedStatus));
    i0.ɵɵadvance(9);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind2(38, 38, request_r29.createdAt, "dd MMM"));
    i0.ɵɵadvance(2);
    i0.ɵɵclassProp("is-done", request_r29.status !== "submitted");
    i0.ɵɵadvance(2);
    i0.ɵɵconditional(request_r29.status !== "submitted" ? 41 : 42);
    i0.ɵɵadvance(4);
    i0.ɵɵclassProp("is-active", request_r29.status === "needs-reply")("is-done", i0.ɵɵpureFunction0(45, _c0).includes(request_r29.status));
    i0.ɵɵadvance(5);
    i0.ɵɵclassProp("is-done", i0.ɵɵpureFunction0(46, _c0).includes(request_r29.status));
    i0.ɵɵadvance(11);
    i0.ɵɵtextInterpolate(request_r29.note);
    i0.ɵɵadvance(2);
    i0.ɵɵattribute("data-status", request_r29.recordedStatus);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(65, 41, request_r29.recordedStatus));
    i0.ɵɵadvance(3);
    i0.ɵɵattribute("data-status", request_r29.requestedStatus);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(69, 43, request_r29.requestedStatus));
    i0.ɵɵadvance(2);
    i0.ɵɵrepeater(request_r29.attachments);
    i0.ɵɵadvance(6);
    i0.ɵɵrepeater(request_r29.messages);
    i0.ɵɵadvance(3);
    i0.ɵɵconditional(request_r29.status === "needs-reply" ? 79 : -1);
    i0.ɵɵadvance();
    i0.ɵɵconditional(ctx_r0.formError() ? 80 : -1);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("routerLink", i0.ɵɵpureFunction1(47, _c1, request_r29.subjectId));
    i0.ɵɵadvance(3);
    i0.ɵɵconditional(ctx_r0.isOpen(request_r29.status) ? 85 : -1);
} }
function StudentAttendanceCorrectionsComponent_Conditional_25_Template(rf, ctx) { if (rf & 1) {
    const _r7 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 55);
    i0.ɵɵlistener("click", function StudentAttendanceCorrectionsComponent_Conditional_25_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r7); const ctx_r0 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r0.closeDrawer()); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(1, "aside", 56);
    i0.ɵɵconditionalCreate(2, StudentAttendanceCorrectionsComponent_Conditional_25_Conditional_2_Template, 35, 17)(3, StudentAttendanceCorrectionsComponent_Conditional_25_Conditional_3_Template, 86, 49);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    let tmp_3_0;
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵclassProp("correction-drawer--detail", ctx_r0.drawer() === "detail");
    i0.ɵɵattribute("aria-label", ctx_r0.drawer() === "create" ? "New correction request" : "Correction request details");
    i0.ɵɵadvance();
    i0.ɵɵconditional(ctx_r0.drawer() === "create" ? 2 : (tmp_3_0 = ctx_r0.selectedRequest()) ? 3 : -1, tmp_3_0);
} }
export class StudentAttendanceCorrectionsComponent {
    api = inject(ApiService);
    session = inject(StudentSessionService);
    feed = signal(null, ...(ngDevMode ? [{ debugName: "feed" }] : /* istanbul ignore next */ []));
    records = signal([], ...(ngDevMode ? [{ debugName: "records" }] : /* istanbul ignore next */ []));
    loading = signal(true, ...(ngDevMode ? [{ debugName: "loading" }] : /* istanbul ignore next */ []));
    error = signal('', ...(ngDevMode ? [{ debugName: "error" }] : /* istanbul ignore next */ []));
    search = signal('', ...(ngDevMode ? [{ debugName: "search" }] : /* istanbul ignore next */ []));
    recordSearch = signal('', ...(ngDevMode ? [{ debugName: "recordSearch" }] : /* istanbul ignore next */ []));
    filter = signal('all', ...(ngDevMode ? [{ debugName: "filter" }] : /* istanbul ignore next */ []));
    drawer = signal(null, ...(ngDevMode ? [{ debugName: "drawer" }] : /* istanbul ignore next */ []));
    step = signal(1, ...(ngDevMode ? [{ debugName: "step" }] : /* istanbul ignore next */ []));
    selectedRecord = signal(null, ...(ngDevMode ? [{ debugName: "selectedRecord" }] : /* istanbul ignore next */ []));
    selectedRequest = signal(null, ...(ngDevMode ? [{ debugName: "selectedRequest" }] : /* istanbul ignore next */ []));
    reasonType = signal('marked-absent', ...(ngDevMode ? [{ debugName: "reasonType" }] : /* istanbul ignore next */ []));
    note = signal('', ...(ngDevMode ? [{ debugName: "note" }] : /* istanbul ignore next */ []));
    attachment = signal(null, ...(ngDevMode ? [{ debugName: "attachment" }] : /* istanbul ignore next */ []));
    responseMessage = signal('', ...(ngDevMode ? [{ debugName: "responseMessage" }] : /* istanbul ignore next */ []));
    responseAttachment = signal(null, ...(ngDevMode ? [{ debugName: "responseAttachment" }] : /* istanbul ignore next */ []));
    submitting = signal(false, ...(ngDevMode ? [{ debugName: "submitting" }] : /* istanbul ignore next */ []));
    formError = signal('', ...(ngDevMode ? [{ debugName: "formError" }] : /* istanbul ignore next */ []));
    successMessage = signal('', ...(ngDevMode ? [{ debugName: "successMessage" }] : /* istanbul ignore next */ []));
    reasons = [
        { id: 'marked-absent', label: 'Marked absent', mark: 'A' },
        { id: 'not-updated', label: 'Not updated', mark: '–' },
        { id: 'class-cancelled', label: 'Class cancelled', mark: 'C' },
        { id: 'wrong-status', label: 'Wrong status', mark: '↔' },
        { id: 'duplicate', label: 'Duplicate record', mark: '2' },
        { id: 'other', label: 'Other', mark: '•••' },
    ];
    filteredRequests = computed(() => {
        const query = this.search().trim().toLowerCase();
        const activeFilter = this.filter();
        return (this.feed()?.items || []).filter((item) => {
            const matchesSearch = !query ||
                `${item.requestNumber} ${item.subjectName} ${item.subjectCode}`
                    .toLowerCase()
                    .includes(query);
            const matchesFilter = activeFilter === 'all' ||
                (activeFilter === 'open' &&
                    ['submitted', 'reviewing', 'needs-reply'].includes(item.status)) ||
                item.status === activeFilter;
            return matchesSearch && matchesFilter;
        });
    }, ...(ngDevMode ? [{ debugName: "filteredRequests" }] : /* istanbul ignore next */ []));
    filteredRecords = computed(() => {
        const query = this.recordSearch().trim().toLowerCase();
        return this.records().filter((record) => !query ||
            `${record.subjectName} ${record.subjectCode} ${record.date}`.toLowerCase().includes(query));
    }, ...(ngDevMode ? [{ debugName: "filteredRecords" }] : /* istanbul ignore next */ []));
    constructor() {
        this.load();
    }
    setSearch(value) {
        this.search.set(value);
    }
    setRecordSearch(value) {
        this.recordSearch.set(value);
    }
    setFilter(filter) {
        this.filter.set(filter);
    }
    openCreate() {
        this.step.set(1);
        this.selectedRecord.set(null);
        this.reasonType.set('marked-absent');
        this.note.set('');
        this.attachment.set(null);
        this.formError.set('');
        this.successMessage.set('');
        this.drawer.set('create');
    }
    openRequest(request) {
        this.drawer.set('detail');
        this.selectedRequest.set(request);
        this.responseMessage.set('');
        this.responseAttachment.set(null);
        this.formError.set('');
        const token = this.session.token();
        if (!token)
            return;
        this.api.studentAttendanceCorrectionRequest(token, request._id).subscribe({
            next: ({ item }) => this.selectedRequest.set(item),
            error: () => this.formError.set('The latest request details could not be loaded.'),
        });
    }
    closeDrawer() {
        if (this.submitting())
            return;
        this.drawer.set(null);
        this.formError.set('');
    }
    chooseRecord(record) {
        this.selectedRecord.set(record);
        this.reasonType.set(record.status === 'absent' ? 'marked-absent' : 'wrong-status');
        this.formError.set('');
    }
    chooseReason(reason) {
        this.reasonType.set(reason);
    }
    setNote(value) {
        this.note.set(value.slice(0, 300));
    }
    setResponse(value) {
        this.responseMessage.set(value.slice(0, 1000));
    }
    scrollToResponse() {
        document
            .querySelector('.response-box')
            ?.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
    chooseAttachment(event, response = false) {
        const input = event.target;
        const file = input.files?.[0] || null;
        if (!file)
            return;
        if (!['application/pdf', 'image/png', 'image/jpeg'].includes(file.type)) {
            this.formError.set('Choose a PDF, PNG, or JPG file.');
            input.value = '';
            return;
        }
        if (file.size > 5 * 1024 * 1024) {
            this.formError.set('The proof file must be 5 MB or smaller.');
            input.value = '';
            return;
        }
        this.formError.set('');
        (response ? this.responseAttachment : this.attachment).set(file);
    }
    removeAttachment(response = false) {
        (response ? this.responseAttachment : this.attachment).set(null);
    }
    nextStep() {
        if (this.step() === 1 && !this.selectedRecord()) {
            this.formError.set('Select the attendance record you want corrected.');
            return;
        }
        if (this.step() === 2 && this.note().trim().length < 10) {
            this.formError.set('Add a short note of at least 10 characters.');
            return;
        }
        this.formError.set('');
        this.step.update((value) => Math.min(3, value + 1));
    }
    previousStep() {
        this.formError.set('');
        this.step.update((value) => Math.max(1, value - 1));
    }
    submitRequest() {
        const token = this.session.token();
        const record = this.selectedRecord();
        if (!token || !record || this.note().trim().length < 10)
            return;
        const body = new FormData();
        body.set('recordId', record.recordId);
        body.set('reasonType', this.reasonType());
        body.set('requestedStatus', record.status === 'absent' ? 'present' : 'absent');
        body.set('note', this.note().trim());
        if (this.attachment())
            body.set('attachment', this.attachment());
        this.submitting.set(true);
        this.formError.set('');
        this.api.createStudentAttendanceCorrection(token, body).subscribe({
            next: ({ item }) => {
                this.submitting.set(false);
                this.drawer.set('detail');
                this.selectedRequest.set(item);
                this.successMessage.set('Correction request submitted successfully.');
                this.load(false);
            },
            error: (error) => {
                this.submitting.set(false);
                this.formError.set(error.error?.message || 'The correction request could not be submitted.');
            },
        });
    }
    submitResponse() {
        const token = this.session.token();
        const request = this.selectedRequest();
        if (!token || !request)
            return;
        if (!this.responseMessage().trim() && !this.responseAttachment()) {
            this.formError.set('Add a reply or supporting proof.');
            return;
        }
        const body = new FormData();
        body.set('message', this.responseMessage().trim());
        if (this.responseAttachment())
            body.set('attachment', this.responseAttachment());
        this.submitting.set(true);
        this.api.respondStudentAttendanceCorrection(token, request._id, body).subscribe({
            next: ({ item }) => {
                this.submitting.set(false);
                this.selectedRequest.set(item);
                this.responseMessage.set('');
                this.responseAttachment.set(null);
                this.successMessage.set('Your response was sent to the Academic Office.');
                this.load(false);
            },
            error: (error) => {
                this.submitting.set(false);
                this.formError.set(error.error?.message || 'Your response could not be sent.');
            },
        });
    }
    withdraw() {
        const token = this.session.token();
        const request = this.selectedRequest();
        if (!token || !request || !this.isOpen(request.status))
            return;
        this.submitting.set(true);
        this.api.withdrawStudentAttendanceCorrection(token, request._id).subscribe({
            next: () => {
                this.submitting.set(false);
                this.drawer.set(null);
                this.successMessage.set('Correction request withdrawn.');
                this.load(false);
            },
            error: (error) => {
                this.submitting.set(false);
                this.formError.set(error.error?.message || 'The request could not be withdrawn.');
            },
        });
    }
    openAttachment(requestId, key, name) {
        const token = this.session.token();
        if (!token)
            return;
        this.api.studentAttendanceCorrectionAttachment(token, requestId, key).subscribe({
            next: (blob) => {
                const url = URL.createObjectURL(blob);
                const link = document.createElement('a');
                link.href = url;
                link.target = '_blank';
                link.rel = 'noopener';
                link.download = name;
                link.click();
                window.setTimeout(() => URL.revokeObjectURL(url), 1000);
            },
            error: () => this.formError.set('The proof file could not be opened.'),
        });
    }
    statusLabel(status) {
        return {
            submitted: 'Submitted',
            reviewing: 'Under review',
            'needs-reply': 'Needs reply',
            approved: 'Approved',
            rejected: 'Rejected',
            withdrawn: 'Withdrawn',
        }[status];
    }
    reasonLabel(reason) {
        return this.reasons.find((item) => item.id === reason)?.label || 'Other';
    }
    requestedStatus(record) {
        return record.status === 'absent' ? 'Present' : 'Absent';
    }
    isOpen(status) {
        return ['submitted', 'reviewing', 'needs-reply'].includes(status);
    }
    formatBytes(bytes) {
        return bytes < 1024 * 1024
            ? `${Math.max(1, Math.round(bytes / 1024))} KB`
            : `${(bytes / 1024 / 1024).toFixed(1)} MB`;
    }
    load(showLoading = true) {
        const token = this.session.token();
        if (!token) {
            this.error.set('Your student session is unavailable.');
            this.loading.set(false);
            return;
        }
        if (showLoading)
            this.loading.set(true);
        forkJoin({
            feed: this.api.studentAttendanceCorrectionRequests(token),
            records: this.api.studentAttendanceCorrectionRecords(token),
        }).subscribe({
            next: ({ feed, records }) => {
                this.feed.set(feed);
                this.records.set(records.items);
                this.loading.set(false);
                this.error.set('');
            },
            error: () => {
                this.loading.set(false);
                this.error.set('Correction requests are temporarily unavailable.');
            },
        });
    }
    static ɵfac = function StudentAttendanceCorrectionsComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || StudentAttendanceCorrectionsComponent)(); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: StudentAttendanceCorrectionsComponent, selectors: [["erp-student-attendance-corrections"]], decls: 26, vars: 3, consts: [["requestSearch", ""], ["lectureSearch", ""], ["noteInput", ""], ["responseBox", ""], ["responseInput", ""], [1, "corrections-page"], [1, "corrections-heading"], ["routerLink", "/student/attendance"], [1, "corrections-actions"], ["type", "button", "aria-label", "Search requests", 1, "icon-button"], ["lucideSearch", "", "size", "21"], ["type", "button", "aria-label", "Filter requests", 1, "icon-button"], ["lucideFilter", "", "size", "21"], ["type", "button", 1, "primary-button", 3, "click"], ["lucidePlus", "", "size", "21"], [1, "page-message", "page-message--success"], [1, "page-state"], [1, "page-state", "page-state--error"], ["lucideCheck", "", "size", "18"], ["lucideCircleAlert", "", "size", "26"], ["aria-label", "Correction request status", 1, "status-tabs"], ["type", "button", 3, "click"], ["lucideFileText", "", "size", "21"], ["lucideFolderOpen", "", "size", "21"], ["type", "button", "data-tone", "warning", 3, "click"], ["lucideClock3", "", "size", "21"], ["type", "button", "data-tone", "success", 3, "click"], ["lucideCheck", "", "size", "21"], ["type", "button", "data-tone", "danger", 3, "click"], ["lucideX", "", "size", "21"], [1, "requests-card"], [1, "requests-toolbar"], ["lucideSearch", "", "size", "20"], ["type", "search", "placeholder", "Search ID or subject\u2026", 3, "input"], ["type", "button"], ["lucideChevronRight", "", "size", "16"], ["lucideCalendarDays", "", "size", "17"], ["role", "table", "aria-label", "Correction requests", 1, "request-table"], ["role", "row", 1, "request-table__head"], ["type", "button", "role", "row", 1, "request-row"], [1, "requests-empty"], ["type", "button", "role", "row", 1, "request-row", 3, "click"], [1, "request-number"], ["lucideFileText", "", "size", "19"], [1, "request-subject"], [1, "status-change"], ["lucideArrowRight", "", "size", "17"], [1, "submitted-date"], [1, "status-pill"], ["lucideCheck", "", "size", "16"], ["lucideX", "", "size", "16"], ["lucideCircleAlert", "", "size", "16"], ["lucideClock3", "", "size", "16"], ["lucideChevronRight", "", "size", "19"], ["lucideFileText", "", "size", "30"], ["type", "button", "aria-label", "Close correction request panel", 1, "drawer-backdrop", 3, "click"], ["role", "dialog", "aria-modal", "true", 1, "correction-drawer"], [1, "drawer-header"], ["type", "button", "aria-label", "Close", 3, "click"], ["lucideX", "", "size", "24"], [1, "step-rail"], [1, "drawer-content"], [1, "select-step"], [1, "explain-step"], [1, "drawer-error"], [1, "drawer-footer"], ["type", "button", 1, "secondary-button"], ["type", "button", 1, "primary-button"], ["type", "button", 1, "primary-button", 3, "disabled"], [1, "drawer-section-heading"], ["type", "button", "aria-label", "Filter lectures"], ["lucideFilter", "", "size", "19"], [1, "drawer-search"], ["type", "search", "placeholder", "Search lectures\u2026", 3, "input"], [1, "lecture-list"], ["type", "button", 3, "is-selected"], [1, "drawer-empty"], ["lucideFileText", "", "size", "23"], [1, "selected-lecture"], ["lucideFileText", "", "size", "22"], ["lucidePencil", "", "size", "17"], [1, "reason-grid"], [1, "correction-preview"], ["lucideArrowRight", "", "size", "22"], [1, "note-field"], ["rows", "4", "maxlength", "300", "placeholder", "e.g. I was present in class\u2026", 3, "input", "value"], [1, "proof-field"], ["lucideUpload", "", "size", "25"], ["type", "file", "accept", "application/pdf,image/png,image/jpeg", 3, "change"], [1, "file-chip"], [1, "duplicate-check"], ["lucideCheck", "", "size", "17"], ["lucidePaperclip", "", "size", "21"], ["type", "button", "aria-label", "Remove file", 3, "click"], ["lucideX", "", "size", "18"], [1, "review-step"], [1, "review-hero"], ["lucideCheck", "", "size", "26"], [1, "review-card"], [1, "status-change", "status-change--large"], ["lucideArrowRight", "", "size", "20"], ["lucideCircleAlert", "", "size", "17"], ["type", "button", 1, "secondary-button", 3, "click"], ["lucideArrowLeft", "", "size", "18"], ["lucideArrowRight", "", "size", "18"], ["type", "button", 1, "primary-button", 3, "click", "disabled"], ["lucideSend", "", "size", "18"], [1, "drawer-header", "drawer-header--detail"], ["type", "button", "aria-label", "Back", 3, "click"], ["lucideArrowLeft", "", "size", "23"], ["type", "button", "aria-label", "More actions"], ["lucideEllipsisVertical", "", "size", "22"], ["type", "button", "aria-label", "Close", 1, "desktop-close", 3, "click"], ["lucideX", "", "size", "23"], [1, "detail-content"], [1, "reply-banner"], [1, "detail-lecture"], ["aria-label", "Request progress", 1, "timeline"], [1, "is-done"], [1, "detail-grid"], [1, "detail-card"], ["lucideMessageSquare", "", "size", "20"], ["type", "button", 1, "file-chip"], ["lucideBuilding2", "", "size", "20"], [1, "office-message"], [1, "office-empty"], [1, "response-box"], [1, "detail-actions"], [3, "routerLink"], ["type", "button", 3, "disabled"], ["lucideCircleAlert", "", "size", "23"], ["lucideChevronRight", "", "size", "18"], ["type", "button", 1, "file-chip", 3, "click"], ["lucidePaperclip", "", "size", "20"], ["lucidePaperclip", "", "size", "17"], ["rows", "3", "maxlength", "1000", "placeholder", "Write a reply for the Academic Office\u2026", 3, "input", "value"], ["lucideUpload", "", "size", "18"], ["lucideSend", "", "size", "17"], ["lucideX", "", "size", "15"], ["type", "button", 3, "click", "disabled"], ["lucideTrash2", "", "size", "19"]], template: function StudentAttendanceCorrectionsComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 5)(1, "header", 6)(2, "div")(3, "nav")(4, "a", 7);
            i0.ɵɵtext(5, "Attendance");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(6, "i");
            i0.ɵɵtext(7, "/");
            i0.ɵɵelementEnd();
            i0.ɵɵtext(8, "Correction Requests");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(9, "h1");
            i0.ɵɵtext(10, "Correction Requests");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(11, "p");
            i0.ɵɵtext(12, "Report an incorrect attendance record and track every update.");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(13, "div", 8)(14, "button", 9);
            i0.ɵɵnamespaceSVG();
            i0.ɵɵelement(15, "svg", 10);
            i0.ɵɵelementEnd();
            i0.ɵɵnamespaceHTML();
            i0.ɵɵelementStart(16, "button", 11);
            i0.ɵɵnamespaceSVG();
            i0.ɵɵelement(17, "svg", 12);
            i0.ɵɵelementEnd();
            i0.ɵɵnamespaceHTML();
            i0.ɵɵelementStart(18, "button", 13);
            i0.ɵɵlistener("click", function StudentAttendanceCorrectionsComponent_Template_button_click_18_listener() { return ctx.openCreate(); });
            i0.ɵɵnamespaceSVG();
            i0.ɵɵelement(19, "svg", 14);
            i0.ɵɵtext(20, "New request ");
            i0.ɵɵelementEnd()()();
            i0.ɵɵconditionalCreate(21, StudentAttendanceCorrectionsComponent_Conditional_21_Template, 3, 1, "div", 15);
            i0.ɵɵconditionalCreate(22, StudentAttendanceCorrectionsComponent_Conditional_22_Template, 2, 0, "div", 16)(23, StudentAttendanceCorrectionsComponent_Conditional_23_Template, 3, 1, "div", 17)(24, StudentAttendanceCorrectionsComponent_Conditional_24_Template, 64, 18);
            i0.ɵɵelementEnd();
            i0.ɵɵconditionalCreate(25, StudentAttendanceCorrectionsComponent_Conditional_25_Template, 4, 4);
        } if (rf & 2) {
            let tmp_1_0;
            i0.ɵɵadvance(21);
            i0.ɵɵconditional(ctx.successMessage() ? 21 : -1);
            i0.ɵɵadvance();
            i0.ɵɵconditional(ctx.loading() ? 22 : ctx.error() ? 23 : (tmp_1_0 = ctx.feed()) ? 24 : -1, tmp_1_0);
            i0.ɵɵadvance(3);
            i0.ɵɵconditional(ctx.drawer() ? 25 : -1);
        } }, dependencies: [RouterLink,
            LucideArrowLeft,
            LucideArrowRight,
            LucideBuilding2,
            LucideCalendarDays,
            LucideCheck,
            LucideChevronRight,
            LucideCircleAlert,
            LucideClock3,
            LucideEllipsisVertical,
            LucideFileText,
            LucideFilter,
            LucideFolderOpen,
            LucideMessageSquare,
            LucidePaperclip,
            LucidePencil,
            LucidePlus,
            LucideSearch,
            LucideSend,
            LucideTrash2,
            LucideUpload,
            LucideX,
            DatePipe,
            TitleCasePipe], styles: ["[_nghost-%COMP%] {\n  display: block;\n}\n\n.corrections-page[_ngcontent-%COMP%] {\n  display: grid;\n  gap: var(--student-space-4);\n  min-height: calc(100dvh - var(--student-header-height));\n  color: var(--student-color-text);\n}\n\nh1[_ngcontent-%COMP%], \nh2[_ngcontent-%COMP%], \nh3[_ngcontent-%COMP%], \np[_ngcontent-%COMP%] {\n  margin: 0;\n}\nbutton[_ngcontent-%COMP%], \ninput[_ngcontent-%COMP%], \ntextarea[_ngcontent-%COMP%] {\n  font: inherit;\n}\nbutton[_ngcontent-%COMP%] {\n  color: inherit;\n}\n\n.corrections-heading[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: end;\n  justify-content: space-between;\n  gap: var(--student-space-4);\n}\n\n.corrections-heading[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%] {\n  display: flex;\n  gap: var(--student-space-2);\n  margin-bottom: var(--student-space-2);\n  color: var(--student-color-text-secondary);\n  font-size: var(--student-text-caption);\n}\n\n.corrections-heading[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: var(--student-color-primary);\n  text-decoration: none;\n}\n.corrections-heading[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-style: normal;\n}\n.corrections-heading[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: clamp(29px, 3.5vw, 42px);\n  line-height: 1.05;\n}\n.corrections-heading[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin-top: var(--student-space-2);\n  color: var(--student-color-text-secondary);\n}\n.corrections-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: var(--student-space-2);\n}\n\n.icon-button[_ngcontent-%COMP%], \n.primary-button[_ngcontent-%COMP%], \n.secondary-button[_ngcontent-%COMP%] {\n  display: inline-flex;\n  min-height: 46px;\n  align-items: center;\n  justify-content: center;\n  gap: var(--student-space-2);\n  padding: 0 var(--student-space-4);\n  border: 1px solid var(--student-color-border);\n  border-radius: var(--student-radius-control);\n  background: var(--student-color-surface);\n  cursor: pointer;\n  font-weight: 800;\n}\n\n.icon-button[_ngcontent-%COMP%] {\n  width: 46px;\n  padding: 0;\n}\n.primary-button[_ngcontent-%COMP%] {\n  border-color: var(--student-color-primary);\n  color: var(--student-color-text-inverse);\n  background: var(--student-color-primary);\n  box-shadow: var(--student-shadow-card);\n}\n.secondary-button[_ngcontent-%COMP%] {\n  color: var(--student-color-primary);\n  background: var(--student-color-surface);\n}\n.primary-button[_ngcontent-%COMP%]:disabled, \n.secondary-button[_ngcontent-%COMP%]:disabled {\n  cursor: default;\n  opacity: 0.55;\n}\n\n.page-message[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: var(--student-space-2);\n  padding: var(--student-space-3) var(--student-space-4);\n  border: 1px solid var(--student-color-success);\n  border-radius: var(--student-radius-control);\n  color: var(--student-color-success);\n  background: var(--student-color-success-soft);\n  font-weight: 700;\n}\n\n.page-state[_ngcontent-%COMP%] {\n  display: grid;\n  min-height: 340px;\n  place-content: center;\n  gap: var(--student-space-2);\n  border: 1px solid var(--student-color-border);\n  border-radius: var(--student-radius-card);\n  color: var(--student-color-text-secondary);\n  background: var(--student-color-surface);\n  text-align: center;\n}\n.page-state--error[_ngcontent-%COMP%] {\n  color: var(--student-color-danger);\n}\n\n.status-tabs[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(5, 1fr);\n  border: 1px solid var(--student-color-border);\n  border-radius: var(--student-radius-card);\n  overflow: hidden;\n  background: var(--student-color-surface);\n  box-shadow: var(--student-attendance-shadow);\n}\n\n.status-tabs[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  min-height: 72px;\n  align-items: center;\n  justify-content: center;\n  gap: var(--student-space-3);\n  border: 0;\n  border-bottom: 4px solid transparent;\n  background: transparent;\n  cursor: pointer;\n  font-weight: 750;\n}\n.status-tabs[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]    + button[_ngcontent-%COMP%] {\n  border-left: 1px solid var(--student-color-divider);\n}\n.status-tabs[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   b[_ngcontent-%COMP%] {\n  color: var(--student-color-primary);\n  font-size: 21px;\n}\n.status-tabs[_ngcontent-%COMP%]   button[data-tone='warning'][_ngcontent-%COMP%]   svg[_ngcontent-%COMP%], \n.status-tabs[_ngcontent-%COMP%]   button[data-tone='warning'][_ngcontent-%COMP%]   b[_ngcontent-%COMP%] {\n  color: var(--student-color-warning);\n}\n.status-tabs[_ngcontent-%COMP%]   button[data-tone='success'][_ngcontent-%COMP%]   svg[_ngcontent-%COMP%], \n.status-tabs[_ngcontent-%COMP%]   button[data-tone='success'][_ngcontent-%COMP%]   b[_ngcontent-%COMP%] {\n  color: var(--student-color-success);\n}\n.status-tabs[_ngcontent-%COMP%]   button[data-tone='danger'][_ngcontent-%COMP%]   svg[_ngcontent-%COMP%], \n.status-tabs[_ngcontent-%COMP%]   button[data-tone='danger'][_ngcontent-%COMP%]   b[_ngcontent-%COMP%] {\n  color: var(--student-color-danger);\n}\n.status-tabs[_ngcontent-%COMP%]   button.is-active[_ngcontent-%COMP%] {\n  border-bottom-color: var(--student-color-primary);\n  background: var(--student-color-primary-subtle);\n}\n\n.requests-card[_ngcontent-%COMP%] {\n  border: 1px solid var(--student-color-border);\n  border-radius: var(--student-radius-card);\n  overflow: hidden;\n  background: var(--student-color-surface);\n  box-shadow: var(--student-attendance-shadow);\n}\n\n.requests-toolbar[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: var(--student-space-4);\n  padding: var(--student-space-4);\n}\n.requests-toolbar[_ngcontent-%COMP%]    > label[_ngcontent-%COMP%], \n.drawer-search[_ngcontent-%COMP%] {\n  display: flex;\n  width: min(420px, 100%);\n  min-height: 46px;\n  align-items: center;\n  gap: var(--student-space-2);\n  padding: 0 var(--student-space-3);\n  border: 1px solid var(--student-color-border);\n  border-radius: var(--student-radius-control);\n  color: var(--student-color-text-secondary);\n  background: var(--student-color-surface);\n}\n.requests-toolbar[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], \n.drawer-search[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 100%;\n  min-width: 0;\n  border: 0;\n  outline: 0;\n  color: var(--student-color-text);\n  background: transparent;\n}\n.requests-toolbar[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  display: flex;\n  gap: var(--student-space-2);\n}\n.requests-toolbar[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  display: flex;\n  min-height: 42px;\n  align-items: center;\n  gap: var(--student-space-2);\n  padding: 0 var(--student-space-3);\n  border: 1px solid var(--student-color-border);\n  border-radius: var(--student-radius-control);\n  background: var(--student-color-surface);\n  cursor: pointer;\n}\n\n.request-table__head[_ngcontent-%COMP%], \n.request-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1.05fr 1.6fr 1.15fr 0.95fr 1.15fr 24px;\n  align-items: center;\n  gap: var(--student-space-3);\n}\n.request-table__head[_ngcontent-%COMP%] {\n  padding: var(--student-space-3) var(--student-space-4);\n  color: var(--student-color-text-secondary);\n  background: var(--student-color-primary-subtle);\n  font-size: var(--student-text-caption);\n  font-weight: 800;\n}\n.request-row[_ngcontent-%COMP%] {\n  width: 100%;\n  min-height: 68px;\n  padding: var(--student-space-3) var(--student-space-4);\n  border: 0;\n  border-top: 1px solid var(--student-color-divider);\n  background: var(--student-color-surface);\n  text-align: left;\n  cursor: pointer;\n}\n.request-row[_ngcontent-%COMP%]:hover {\n  background: var(--student-color-surface-soft);\n}\n.request-number[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: var(--student-space-3);\n}\n.request-number[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  display: grid;\n  width: 38px;\n  height: 38px;\n  place-items: center;\n  border-radius: 10px;\n  color: var(--student-color-primary);\n  background: var(--student-color-primary-subtle);\n}\n.request-number[_ngcontent-%COMP%]   i[_ngcontent-%COMP%], \n.status-change[_ngcontent-%COMP%]   em[_ngcontent-%COMP%] {\n  font-style: normal;\n}\n.request-subject[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%], \n.request-subject[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  display: block;\n}\n.request-subject[_ngcontent-%COMP%]   small[_ngcontent-%COMP%], \n.submitted-date[_ngcontent-%COMP%] {\n  margin-top: 2px;\n  color: var(--student-color-text-secondary);\n  font-size: var(--student-text-caption);\n}\n.status-change[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: var(--student-space-2);\n}\n.status-change[_ngcontent-%COMP%]   em[_ngcontent-%COMP%], \n.detail-lecture[_ngcontent-%COMP%]   em[_ngcontent-%COMP%], \n.correction-preview[_ngcontent-%COMP%]   em[_ngcontent-%COMP%] {\n  display: inline-flex;\n  min-width: 38px;\n  min-height: 34px;\n  align-items: center;\n  justify-content: center;\n  padding: 0 12px;\n  border-radius: var(--student-radius-pill);\n  font-style: normal;\n  font-weight: 850;\n}\n[data-status='present'][_ngcontent-%COMP%] {\n  color: var(--student-color-success);\n  background: var(--student-color-success-soft);\n}\n[data-status='absent'][_ngcontent-%COMP%], \n[data-status='rejected'][_ngcontent-%COMP%] {\n  color: var(--student-color-danger);\n  background: var(--student-color-danger-soft);\n}\n[data-status='submitted'][_ngcontent-%COMP%], \n[data-status='reviewing'][_ngcontent-%COMP%] {\n  color: var(--student-color-primary);\n  background: var(--student-color-primary-subtle);\n}\n[data-status='needs-reply'][_ngcontent-%COMP%] {\n  color: var(--student-color-warning);\n  background: var(--student-color-warning-soft);\n}\n[data-status='approved'][_ngcontent-%COMP%] {\n  color: var(--student-color-success);\n  background: var(--student-color-success-soft);\n}\n[data-status='withdrawn'][_ngcontent-%COMP%] {\n  color: var(--student-color-text-secondary);\n  background: var(--student-color-surface-soft);\n}\n.status-pill[_ngcontent-%COMP%] {\n  display: inline-flex;\n  width: max-content;\n  min-height: 34px;\n  align-items: center;\n  gap: var(--student-space-2);\n  padding: 0 12px;\n  border-radius: var(--student-radius-pill);\n  font-size: var(--student-text-caption);\n  font-weight: 800;\n}\n.requests-card[_ngcontent-%COMP%]    > footer[_ngcontent-%COMP%] {\n  padding: var(--student-space-3) var(--student-space-4);\n  border-top: 1px solid var(--student-color-divider);\n  color: var(--student-color-text-secondary);\n  font-size: var(--student-text-caption);\n}\n.requests-empty[_ngcontent-%COMP%] {\n  display: grid;\n  min-height: 260px;\n  place-content: center;\n  gap: var(--student-space-2);\n  color: var(--student-color-text-secondary);\n  text-align: center;\n}\n\n.drawer-backdrop[_ngcontent-%COMP%] {\n  position: fixed;\n  z-index: 70;\n  inset: 0;\n  width: 100%;\n  border: 0;\n  background: var(--student-color-overlay);\n  backdrop-filter: blur(2px);\n}\n.correction-drawer[_ngcontent-%COMP%] {\n  position: fixed;\n  z-index: 71;\n  top: 0;\n  right: 0;\n  display: grid;\n  grid-template-rows: auto auto minmax(0, 1fr) auto auto;\n  width: min(800px, 100vw);\n  height: 100dvh;\n  color: var(--student-color-text);\n  background: var(--student-color-surface);\n  box-shadow: var(--student-shadow-overlay);\n}\n.correction-drawer--detail[_ngcontent-%COMP%] {\n  grid-template-rows: auto minmax(0, 1fr);\n  width: min(820px, 100vw);\n}\n.drawer-header[_ngcontent-%COMP%] {\n  display: flex;\n  min-height: 78px;\n  align-items: center;\n  gap: var(--student-space-3);\n  padding: 0 var(--student-space-5);\n  border-bottom: 1px solid var(--student-color-divider);\n}\n.drawer-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  min-width: 0;\n  flex: 1;\n  font-size: 25px;\n}\n.drawer-header[_ngcontent-%COMP%]    > button[_ngcontent-%COMP%] {\n  display: grid;\n  width: 42px;\n  height: 42px;\n  place-items: center;\n  border: 0;\n  border-radius: var(--student-radius-control);\n  background: transparent;\n  cursor: pointer;\n}\n.drawer-header[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%]:not(.status-pill) {\n  color: var(--student-color-text-secondary);\n}\n.drawer-header--detail[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  flex: 0 1 auto;\n}\n.drawer-header--detail[_ngcontent-%COMP%]   .status-pill[_ngcontent-%COMP%] {\n  margin-right: auto;\n}\n.desktop-close[_ngcontent-%COMP%] {\n  border-left: 1px solid var(--student-color-divider) !important;\n  border-radius: 0 !important;\n}\n\n.step-rail[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  padding: var(--student-space-4) var(--student-space-5);\n  border-bottom: 1px solid var(--student-color-divider);\n}\n.step-rail[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  align-items: center;\n  gap: var(--student-space-2);\n  color: var(--student-color-text-secondary);\n  font-weight: 750;\n}\n.step-rail[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:not(:last-child)::after {\n  content: '';\n  height: 2px;\n  flex: 1;\n  margin: 0 var(--student-space-3);\n  background: var(--student-color-divider);\n}\n.step-rail[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  display: grid;\n  width: 38px;\n  height: 38px;\n  place-items: center;\n  border: 2px solid var(--student-color-border-strong);\n  border-radius: 50%;\n  font-style: normal;\n}\n.step-rail[_ngcontent-%COMP%]   .is-active[_ngcontent-%COMP%] {\n  color: var(--student-color-primary);\n}\n.step-rail[_ngcontent-%COMP%]   .is-active[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  border-color: var(--student-color-primary);\n  color: var(--student-color-text-inverse);\n  background: var(--student-color-primary);\n}\n.step-rail[_ngcontent-%COMP%]   .is-done[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  border-color: var(--student-color-primary);\n  color: var(--student-color-primary);\n  background: var(--student-color-primary-subtle);\n}\n.step-rail[_ngcontent-%COMP%]   .is-done[_ngcontent-%COMP%]::after {\n  background: var(--student-color-primary) !important;\n}\n\n.drawer-content[_ngcontent-%COMP%], \n.detail-content[_ngcontent-%COMP%] {\n  min-height: 0;\n  overflow: auto;\n  padding: var(--student-space-5);\n}\n.drawer-section-heading[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: var(--student-space-3);\n}\n.drawer-section-heading[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], \n.explain-step[_ngcontent-%COMP%]    > h3[_ngcontent-%COMP%] {\n  font-size: 21px;\n}\n.drawer-section-heading[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin-top: 4px;\n  color: var(--student-color-text-secondary);\n}\n.drawer-section-heading[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  display: grid;\n  width: 42px;\n  height: 42px;\n  place-items: center;\n  border: 1px solid var(--student-color-border);\n  border-radius: var(--student-radius-control);\n  background: var(--student-color-surface);\n}\n.drawer-search[_ngcontent-%COMP%] {\n  width: 100%;\n  margin: var(--student-space-4) 0;\n}\n.lecture-list[_ngcontent-%COMP%] {\n  border: 1px solid var(--student-color-border);\n  border-radius: var(--student-radius-card);\n  overflow: hidden;\n}\n.lecture-list[_ngcontent-%COMP%]    > button[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: auto minmax(0, 1fr) auto auto;\n  width: 100%;\n  min-height: 78px;\n  align-items: center;\n  gap: var(--student-space-3);\n  padding: var(--student-space-3) var(--student-space-4);\n  border: 0;\n  background: var(--student-color-surface);\n  text-align: left;\n  cursor: pointer;\n}\n.lecture-list[_ngcontent-%COMP%]    > button[_ngcontent-%COMP%]    + button[_ngcontent-%COMP%] {\n  border-top: 1px solid var(--student-color-divider);\n}\n.lecture-list[_ngcontent-%COMP%]    > button.is-selected[_ngcontent-%COMP%] {\n  background: var(--student-color-primary-subtle);\n}\n.lecture-list[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: var(--student-color-primary);\n}\n.lecture-list[_ngcontent-%COMP%]   i[_ngcontent-%COMP%], \n.lecture-list[_ngcontent-%COMP%]   em[_ngcontent-%COMP%] {\n  font-style: normal;\n}\n.lecture-list[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%], \n.lecture-list[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  display: block;\n}\n.lecture-list[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  margin-top: 3px;\n  color: var(--student-color-text-secondary);\n}\n.lecture-list[_ngcontent-%COMP%]   em[_ngcontent-%COMP%] {\n  padding: 7px 12px;\n  border-radius: var(--student-radius-pill);\n  font-size: var(--student-text-caption);\n  font-weight: 800;\n}\n.lecture-list[_ngcontent-%COMP%]   b[_ngcontent-%COMP%] {\n  display: grid;\n  width: 31px;\n  height: 31px;\n  place-items: center;\n  border: 2px solid var(--student-color-border-strong);\n  border-radius: 50%;\n}\n.lecture-list[_ngcontent-%COMP%]   .is-selected[_ngcontent-%COMP%]   b[_ngcontent-%COMP%] {\n  border-color: var(--student-color-primary);\n  color: var(--student-color-text-inverse);\n  background: var(--student-color-primary);\n}\n.drawer-empty[_ngcontent-%COMP%] {\n  padding: 70px 20px;\n  color: var(--student-color-text-secondary);\n  text-align: center;\n}\n\n.selected-lecture[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: var(--student-space-3);\n  margin-bottom: var(--student-space-5);\n  padding: var(--student-space-3) var(--student-space-4);\n  border: 1px solid var(--student-color-border);\n  border-radius: var(--student-radius-control);\n  background: var(--student-color-primary-subtle);\n}\n.selected-lecture[_ngcontent-%COMP%]    > i[_ngcontent-%COMP%] {\n  display: grid;\n  width: 42px;\n  height: 42px;\n  place-items: center;\n  border-radius: 10px;\n  color: var(--student-color-primary);\n  background: var(--student-color-surface);\n}\n.selected-lecture[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-style: normal;\n}\n.selected-lecture[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  min-width: 0;\n  flex: 1;\n}\n.selected-lecture[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%], \n.selected-lecture[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  display: block;\n}\n.selected-lecture[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  margin-top: 3px;\n  color: var(--student-color-text-secondary);\n}\n.selected-lecture[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: var(--student-space-2);\n  padding: 9px 12px;\n  border: 0;\n  border-radius: var(--student-radius-pill);\n  color: var(--student-color-primary);\n  background: var(--student-color-surface);\n  cursor: pointer;\n  font-weight: 750;\n}\n.reason-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: var(--student-space-3);\n  margin: var(--student-space-3) 0 var(--student-space-5);\n}\n.reason-grid[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: auto 1fr auto;\n  min-height: 80px;\n  align-items: center;\n  gap: var(--student-space-3);\n  padding: var(--student-space-3);\n  border: 1px solid var(--student-color-border);\n  border-radius: var(--student-radius-control);\n  background: var(--student-color-surface);\n  text-align: left;\n  cursor: pointer;\n  font-weight: 750;\n}\n.reason-grid[_ngcontent-%COMP%]   button.is-selected[_ngcontent-%COMP%] {\n  border: 2px solid var(--student-color-primary);\n  background: var(--student-color-primary-subtle);\n}\n.reason-grid[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  display: grid;\n  width: 44px;\n  height: 44px;\n  place-items: center;\n  border-radius: 50%;\n  color: var(--student-color-text-secondary);\n  background: var(--student-color-surface-soft);\n  font-size: 18px;\n  font-style: normal;\n  font-weight: 850;\n}\n.reason-grid[_ngcontent-%COMP%]   .is-selected[_ngcontent-%COMP%]   i[_ngcontent-%COMP%], \n.reason-grid[_ngcontent-%COMP%]   .is-selected[_ngcontent-%COMP%]   b[_ngcontent-%COMP%] {\n  color: var(--student-color-text-inverse);\n  background: var(--student-color-primary);\n}\n.reason-grid[_ngcontent-%COMP%]   b[_ngcontent-%COMP%] {\n  display: grid;\n  width: 31px;\n  height: 31px;\n  place-items: center;\n  border: 2px solid var(--student-color-border-strong);\n  border-radius: 50%;\n}\n.correction-preview[_ngcontent-%COMP%] {\n  margin-bottom: var(--student-space-4);\n}\n.correction-preview[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-around;\n  margin-top: var(--student-space-3);\n  padding: var(--student-space-3);\n  border-radius: var(--student-radius-control);\n  background: var(--student-color-surface-soft);\n}\n.status-change--large[_ngcontent-%COMP%]   em[_ngcontent-%COMP%] {\n  min-width: 94px;\n}\n.note-field[_ngcontent-%COMP%] {\n  position: relative;\n  display: block;\n}\n.note-field[_ngcontent-%COMP%]    > strong[_ngcontent-%COMP%], \n.proof-field[_ngcontent-%COMP%]    > strong[_ngcontent-%COMP%] {\n  display: block;\n  margin-bottom: var(--student-space-2);\n}\n.note-field[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%], \n.response-box[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n  width: 100%;\n  resize: vertical;\n  padding: var(--student-space-3);\n  border: 1px solid var(--student-color-border);\n  border-radius: var(--student-radius-control);\n  outline: 0;\n  color: var(--student-color-text);\n  background: var(--student-color-surface);\n}\n.note-field[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]:focus, \n.response-box[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]:focus {\n  border-color: var(--student-color-primary);\n  box-shadow: 0 0 0 3px var(--student-color-primary-subtle);\n}\n.note-field[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 12px;\n  bottom: 10px;\n  color: var(--student-color-text-secondary);\n}\n.proof-field[_ngcontent-%COMP%] {\n  margin-top: var(--student-space-4);\n}\n.proof-field[_ngcontent-%COMP%]    > strong[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: var(--student-color-text-secondary);\n  font-weight: 500;\n}\n.proof-field[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: grid;\n  min-height: 104px;\n  place-content: center;\n  gap: 3px;\n  border: 1px dashed var(--student-color-primary);\n  border-radius: var(--student-radius-control);\n  color: var(--student-color-primary);\n  text-align: center;\n  cursor: pointer;\n}\n.proof-field[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  margin: auto;\n}\n.proof-field[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  color: var(--student-color-text-secondary);\n}\n.proof-field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], \n.response-box[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  display: none;\n}\n.file-chip[_ngcontent-%COMP%] {\n  display: flex;\n  width: 100%;\n  align-items: center;\n  gap: var(--student-space-3);\n  margin-top: var(--student-space-3);\n  padding: var(--student-space-3);\n  border-radius: var(--student-radius-control);\n  border: 0;\n  color: var(--student-color-primary);\n  background: var(--student-color-primary-subtle);\n  text-align: left;\n  text-decoration: none;\n  cursor: pointer;\n}\n.file-chip[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  min-width: 0;\n  flex: 1;\n}\n.file-chip[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%], \n.file-chip[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  display: block;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.file-chip[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  margin-top: 2px;\n  color: var(--student-color-text-secondary);\n}\n.file-chip[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  display: grid;\n  width: 32px;\n  height: 32px;\n  place-items: center;\n  border: 0;\n  border-radius: 50%;\n  background: var(--student-color-surface-soft);\n  cursor: pointer;\n}\n.duplicate-check[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: var(--student-space-2);\n  margin-top: var(--student-space-4);\n  padding: var(--student-space-3);\n  border-radius: var(--student-radius-control);\n  color: var(--student-color-success);\n  background: var(--student-color-success-soft);\n  font-weight: 700;\n}\n.review-hero[_ngcontent-%COMP%] {\n  padding: var(--student-space-5);\n  text-align: center;\n}\n.review-hero[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  display: grid;\n  width: 58px;\n  height: 58px;\n  margin: 0 auto var(--student-space-3);\n  place-items: center;\n  border-radius: 50%;\n  color: var(--student-color-text-inverse);\n  background: var(--student-color-success);\n}\n.review-hero[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin-top: var(--student-space-2);\n  color: var(--student-color-text-secondary);\n}\n.review-card[_ngcontent-%COMP%] {\n  padding: var(--student-space-5);\n  border: 1px solid var(--student-color-border);\n  border-radius: var(--student-radius-card);\n  background: var(--student-color-surface-soft);\n}\n.review-card[_ngcontent-%COMP%]    > p[_ngcontent-%COMP%] {\n  margin-top: var(--student-space-1);\n  color: var(--student-color-text-secondary);\n}\n.review-card[_ngcontent-%COMP%]   .status-change[_ngcontent-%COMP%] {\n  margin: var(--student-space-4) 0;\n}\n.review-card[_ngcontent-%COMP%]   dl[_ngcontent-%COMP%] {\n  display: grid;\n  gap: var(--student-space-3);\n  margin: 0;\n}\n.review-card[_ngcontent-%COMP%]   dl[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  padding-top: var(--student-space-3);\n  border-top: 1px solid var(--student-color-divider);\n}\n.review-card[_ngcontent-%COMP%]   dt[_ngcontent-%COMP%] {\n  color: var(--student-color-text-secondary);\n  font-size: var(--student-text-caption);\n}\n.review-card[_ngcontent-%COMP%]   dd[_ngcontent-%COMP%] {\n  margin: var(--student-space-1) 0 0;\n}\n.drawer-error[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: var(--student-space-2);\n  margin: 0 var(--student-space-5);\n  padding: var(--student-space-3);\n  border-radius: var(--student-radius-control);\n  color: var(--student-color-danger);\n  background: var(--student-color-danger-soft);\n}\n.drawer-footer[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: var(--student-space-3);\n  padding: var(--student-space-4) var(--student-space-5);\n  border-top: 1px solid var(--student-color-divider);\n  background: var(--student-color-surface);\n}\n\n.detail-content[_ngcontent-%COMP%] {\n  display: grid;\n  align-content: start;\n  gap: var(--student-space-3);\n}\n.reply-banner[_ngcontent-%COMP%] {\n  display: flex;\n  min-height: 72px;\n  align-items: center;\n  gap: var(--student-space-3);\n  padding: var(--student-space-3) var(--student-space-4);\n  border: 1px solid var(--student-color-warning);\n  border-radius: var(--student-radius-control);\n  color: var(--student-color-warning);\n  background: var(--student-color-warning-soft);\n}\n.reply-banner[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.reply-banner[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  display: flex;\n  min-height: 42px;\n  align-items: center;\n  gap: var(--student-space-2);\n  padding: 0 var(--student-space-3);\n  border: 0;\n  border-radius: var(--student-radius-control);\n  color: var(--student-color-text-inverse);\n  background: var(--student-color-warning);\n  cursor: pointer;\n  font-weight: 800;\n}\n.detail-lecture[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: var(--student-space-3);\n  padding: var(--student-space-4);\n  border: 1px solid var(--student-color-border);\n  border-radius: var(--student-radius-control);\n}\n.detail-lecture[_ngcontent-%COMP%]    > i[_ngcontent-%COMP%] {\n  display: grid;\n  width: 48px;\n  height: 48px;\n  place-items: center;\n  border-radius: var(--student-radius-control);\n  color: var(--student-color-primary);\n  background: var(--student-color-primary-subtle);\n}\n.detail-lecture[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-style: normal;\n}\n.detail-lecture[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  min-width: 0;\n  flex: 1;\n}\n.detail-lecture[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%], \n.detail-lecture[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  display: block;\n}\n.detail-lecture[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  margin-top: 3px;\n  color: var(--student-color-text-secondary);\n}\n.detail-lecture[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: var(--student-space-2);\n}\n.timeline[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  padding: var(--student-space-4);\n  border: 1px solid var(--student-color-border);\n  border-radius: var(--student-radius-control);\n}\n.timeline[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  position: relative;\n  display: grid;\n  justify-items: center;\n  gap: var(--student-space-2);\n  color: var(--student-color-text-secondary);\n  text-align: center;\n}\n.timeline[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:not(:last-child)::after {\n  content: '';\n  position: absolute;\n  top: 17px;\n  left: calc(50% + 21px);\n  width: calc(100% - 42px);\n  height: 2px;\n  background: var(--student-color-divider);\n}\n.timeline[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 1;\n  display: grid;\n  width: 35px;\n  height: 35px;\n  place-items: center;\n  border: 2px solid var(--student-color-border-strong);\n  border-radius: 50%;\n  background: var(--student-color-surface);\n  font-style: normal;\n}\n.timeline[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-weight: 750;\n}\n.timeline[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  display: block;\n  margin-top: 2px;\n  font-size: 11px;\n  font-weight: 500;\n}\n.timeline[_ngcontent-%COMP%]   .is-done[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  border-color: var(--student-color-success);\n  color: var(--student-color-text-inverse);\n  background: var(--student-color-success);\n}\n.timeline[_ngcontent-%COMP%]   .is-done[_ngcontent-%COMP%]:not(:last-child)::after {\n  background: var(--student-color-success);\n}\n.timeline[_ngcontent-%COMP%]   .is-active[_ngcontent-%COMP%] {\n  color: var(--student-color-warning);\n}\n.timeline[_ngcontent-%COMP%]   .is-active[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  border-color: var(--student-color-warning);\n  background: var(--student-color-warning-soft);\n}\n.detail-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: var(--student-space-3);\n}\n.detail-card[_ngcontent-%COMP%] {\n  min-width: 0;\n  padding: var(--student-space-4);\n  border: 1px solid var(--student-color-border);\n  border-radius: var(--student-radius-control);\n}\n.detail-card[_ngcontent-%COMP%]    > h3[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: var(--student-space-2);\n}\n.detail-card[_ngcontent-%COMP%]    > p[_ngcontent-%COMP%] {\n  margin: var(--student-space-3) 0;\n  color: var(--student-color-text-secondary);\n}\n.office-message[_ngcontent-%COMP%] {\n  position: relative;\n  margin-top: var(--student-space-3);\n  padding: var(--student-space-3);\n  border-radius: var(--student-radius-control);\n  background: var(--student-color-primary-subtle);\n}\n.office-message[_ngcontent-%COMP%]   time[_ngcontent-%COMP%] {\n  float: right;\n  color: var(--student-color-text-secondary);\n  font-size: 11px;\n}\n.office-message[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin-top: var(--student-space-2);\n  color: var(--student-color-text-secondary);\n}\n.office-message[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], \n.office-message[_ngcontent-%COMP%]    > button[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: var(--student-space-2);\n  margin-top: var(--student-space-2);\n  border: 0;\n  color: var(--student-color-primary);\n  background: transparent;\n  cursor: pointer;\n}\n.office-empty[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: var(--student-space-3);\n  margin-top: var(--student-space-3);\n  color: var(--student-color-text-secondary);\n}\n.response-box[_ngcontent-%COMP%] {\n  padding: var(--student-space-4);\n  border: 1px solid var(--student-color-border);\n  border-radius: var(--student-radius-control);\n}\n.response-box[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n  margin-top: var(--student-space-3);\n}\n.response-box[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: var(--student-space-2);\n  margin-top: var(--student-space-3);\n}\n.response-box[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: var(--student-space-2);\n  padding: 10px 12px;\n  border-radius: var(--student-radius-control);\n  color: var(--student-color-primary);\n  background: var(--student-color-primary-subtle);\n  cursor: pointer;\n  font-weight: 750;\n}\n.response-box[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  display: flex;\n  min-width: 0;\n  align-items: center;\n  gap: var(--student-space-2);\n  overflow: hidden;\n  color: var(--student-color-text-secondary);\n  font-size: var(--student-text-caption);\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.response-box[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  display: grid;\n  border: 0;\n  background: transparent;\n  cursor: pointer;\n}\n.response-box[_ngcontent-%COMP%]   .primary-button[_ngcontent-%COMP%] {\n  margin-left: auto;\n}\n.detail-actions[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: var(--student-space-5);\n  padding: var(--student-space-3) 0;\n  border-top: 1px solid var(--student-color-divider);\n}\n.detail-actions[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], \n.detail-actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: var(--student-space-2);\n  border: 0;\n  color: var(--student-color-primary);\n  background: transparent;\n  text-decoration: none;\n  cursor: pointer;\n  font-weight: 750;\n}\n.detail-actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  color: var(--student-color-danger);\n}\n\n@media (max-width: 1100px) {\n  .request-table__head[_ngcontent-%COMP%], \n   .request-row[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr 1.5fr 1fr 1.1fr 24px;\n  }\n  .request-table__head[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(4), \n   .submitted-date[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .requests-toolbar[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:nth-child(n + 2) {\n    display: none;\n  }\n}\n\n@media (max-width: 700px) {\n  .corrections-page[_ngcontent-%COMP%] {\n    gap: var(--student-space-3);\n    min-height: calc(100dvh - var(--student-mobile-header-height));\n  }\n  .corrections-heading[_ngcontent-%COMP%] {\n    align-items: center;\n  }\n  .corrections-heading[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%], \n   .corrections-heading[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], \n   .corrections-actions[_ngcontent-%COMP%]   .icon-button[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .corrections-heading[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 30px;\n  }\n  .corrections-actions[_ngcontent-%COMP%]   .primary-button[_ngcontent-%COMP%] {\n    min-height: 44px;\n    padding: 0 var(--student-space-3);\n  }\n  .status-tabs[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(5, minmax(115px, 1fr));\n    overflow-x: auto;\n  }\n  .status-tabs[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    min-height: 66px;\n    gap: var(--student-space-2);\n    white-space: nowrap;\n  }\n  .requests-card[_ngcontent-%COMP%] {\n    border: 0;\n    overflow: visible;\n    background: transparent;\n    box-shadow: none;\n  }\n  .requests-toolbar[_ngcontent-%COMP%] {\n    padding: 0 0 var(--student-space-2);\n  }\n  .requests-toolbar[_ngcontent-%COMP%]    > label[_ngcontent-%COMP%] {\n    width: 100%;\n    background: var(--student-color-surface);\n  }\n  .requests-toolbar[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .request-table__head[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .request-table[_ngcontent-%COMP%] {\n    display: grid;\n    gap: var(--student-space-3);\n  }\n  .request-row[_ngcontent-%COMP%] {\n    grid-template-columns: auto minmax(0, 1fr) auto;\n    min-height: 112px;\n    padding: var(--student-space-4);\n    border: 1px solid var(--student-color-border);\n    border-radius: var(--student-radius-card);\n    box-shadow: var(--student-shadow-card);\n  }\n  .request-number[_ngcontent-%COMP%] {\n    grid-row: 1 / 3;\n  }\n  .request-number[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n    position: absolute;\n    margin: -47px 0 0 54px;\n  }\n  .request-subject[_ngcontent-%COMP%] {\n    padding-top: 24px;\n  }\n  .status-change[_ngcontent-%COMP%] {\n    grid-column: 2;\n  }\n  .request-row[_ngcontent-%COMP%]    > .status-pill[_ngcontent-%COMP%] {\n    grid-column: 3;\n    grid-row: 1 / 3;\n  }\n  .request-row[_ngcontent-%COMP%]    > svg[_ngcontent-%COMP%] {\n    grid-column: 3;\n    grid-row: 3;\n    justify-self: end;\n  }\n  .requests-card[_ngcontent-%COMP%]    > footer[_ngcontent-%COMP%] {\n    border: 0;\n    padding-left: 0;\n  }\n  .correction-drawer[_ngcontent-%COMP%], \n   .correction-drawer--detail[_ngcontent-%COMP%] {\n    inset: 0;\n    width: 100vw;\n  }\n  .drawer-header[_ngcontent-%COMP%] {\n    min-height: 68px;\n    padding: 0 var(--student-space-3);\n  }\n  .drawer-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 24px;\n  }\n  .step-rail[_ngcontent-%COMP%] {\n    padding: var(--student-space-3);\n  }\n  .step-rail[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n    justify-content: center;\n  }\n  .step-rail[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:not(:last-child)::after {\n    position: absolute;\n    top: 18px;\n    left: calc(50% + 21px);\n    width: calc(100% - 42px);\n    margin: 0;\n  }\n  .step-rail[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .drawer-content[_ngcontent-%COMP%], \n   .detail-content[_ngcontent-%COMP%] {\n    padding: var(--student-space-3);\n  }\n  .drawer-footer[_ngcontent-%COMP%] {\n    padding: var(--student-space-3);\n  }\n  .reason-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr 1fr;\n    gap: var(--student-space-2);\n  }\n  .reason-grid[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    min-height: 78px;\n    padding: var(--student-space-2);\n  }\n  .reason-grid[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n    width: 38px;\n    height: 38px;\n  }\n  .detail-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .desktop-close[_ngcontent-%COMP%] {\n    display: none !important;\n  }\n  .detail-lecture[_ngcontent-%COMP%] {\n    align-items: flex-start;\n    flex-wrap: wrap;\n  }\n  .detail-lecture[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n    width: 100%;\n    justify-content: flex-end;\n  }\n  .timeline[_ngcontent-%COMP%] {\n    padding: var(--student-space-3) var(--student-space-1);\n  }\n  .timeline[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    font-size: 12px;\n  }\n  .response-box[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n    flex-wrap: wrap;\n  }\n  .response-box[_ngcontent-%COMP%]   .primary-button[_ngcontent-%COMP%] {\n    width: 100%;\n    margin: var(--student-space-2) 0 0;\n  }\n}\n\n@media (max-width: 430px) {\n  .corrections-heading[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 26px;\n  }\n  .corrections-actions[_ngcontent-%COMP%]   .primary-button[_ngcontent-%COMP%] {\n    font-size: var(--student-text-caption);\n  }\n  .status-tabs[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(5, 105px);\n  }\n  .status-tabs[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .request-row[_ngcontent-%COMP%] {\n    grid-template-columns: auto minmax(0, 1fr);\n  }\n  .request-row[_ngcontent-%COMP%]    > .status-pill[_ngcontent-%COMP%] {\n    grid-column: 2;\n    grid-row: 3;\n  }\n  .request-row[_ngcontent-%COMP%]    > svg[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .reason-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .reason-grid[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    min-height: 65px;\n  }\n  .drawer-header--detail[_ngcontent-%COMP%]   .status-pill[_ngcontent-%COMP%] {\n    font-size: 0;\n    min-width: 12px;\n    min-height: 12px;\n    padding: 0;\n  }\n}"], changeDetection: 0 });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(StudentAttendanceCorrectionsComponent, [{
        type: Component,
        args: [{ selector: 'erp-student-attendance-corrections', imports: [
                    DatePipe,
                    TitleCasePipe,
                    RouterLink,
                    LucideArrowLeft,
                    LucideArrowRight,
                    LucideBuilding2,
                    LucideCalendarDays,
                    LucideCheck,
                    LucideChevronRight,
                    LucideCircleAlert,
                    LucideClock3,
                    LucideEllipsisVertical,
                    LucideFileText,
                    LucideFilter,
                    LucideFolderOpen,
                    LucideMessageSquare,
                    LucidePaperclip,
                    LucidePencil,
                    LucidePlus,
                    LucideSearch,
                    LucideSend,
                    LucideTrash2,
                    LucideUpload,
                    LucideX,
                ], changeDetection: ChangeDetectionStrategy.OnPush, template: "<div class=\"corrections-page\">\n  <header class=\"corrections-heading\">\n    <div>\n      <nav><a routerLink=\"/student/attendance\">Attendance</a><i>/</i>Correction Requests</nav>\n      <h1>Correction Requests</h1>\n      <p>Report an incorrect attendance record and track every update.</p>\n    </div>\n    <div class=\"corrections-actions\">\n      <button class=\"icon-button\" type=\"button\" aria-label=\"Search requests\">\n        <svg lucideSearch size=\"21\"></svg>\n      </button>\n      <button class=\"icon-button\" type=\"button\" aria-label=\"Filter requests\">\n        <svg lucideFilter size=\"21\"></svg>\n      </button>\n      <button class=\"primary-button\" type=\"button\" (click)=\"openCreate()\">\n        <svg lucidePlus size=\"21\"></svg>New request\n      </button>\n    </div>\n  </header>\n\n  @if (successMessage()) {\n    <div class=\"page-message page-message--success\">\n      <svg lucideCheck size=\"18\"></svg>{{ successMessage() }}\n    </div>\n  }\n\n  @if (loading()) {\n    <div class=\"page-state\">Loading correction requests\u2026</div>\n  } @else if (error()) {\n    <div class=\"page-state page-state--error\">\n      <svg lucideCircleAlert size=\"26\"></svg>{{ error() }}\n    </div>\n  } @else if (feed(); as data) {\n    <section class=\"status-tabs\" aria-label=\"Correction request status\">\n      <button type=\"button\" [class.is-active]=\"filter() === 'all'\" (click)=\"setFilter('all')\">\n        <svg lucideFileText size=\"21\"></svg><span>All</span><b>{{ data.counts.all }}</b>\n      </button>\n      <button type=\"button\" [class.is-active]=\"filter() === 'open'\" (click)=\"setFilter('open')\">\n        <svg lucideFolderOpen size=\"21\"></svg><span>Open</span><b>{{ data.counts.open }}</b>\n      </button>\n      <button\n        type=\"button\"\n        data-tone=\"warning\"\n        [class.is-active]=\"filter() === 'needs-reply'\"\n        (click)=\"setFilter('needs-reply')\"\n      >\n        <svg lucideClock3 size=\"21\"></svg><span>Needs reply</span\n        ><b>{{ data.counts.needsReply }}</b>\n      </button>\n      <button\n        type=\"button\"\n        data-tone=\"success\"\n        [class.is-active]=\"filter() === 'approved'\"\n        (click)=\"setFilter('approved')\"\n      >\n        <svg lucideCheck size=\"21\"></svg><span>Approved</span><b>{{ data.counts.approved }}</b>\n      </button>\n      <button\n        type=\"button\"\n        data-tone=\"danger\"\n        [class.is-active]=\"filter() === 'rejected'\"\n        (click)=\"setFilter('rejected')\"\n      >\n        <svg lucideX size=\"21\"></svg><span>Rejected</span><b>{{ data.counts.rejected }}</b>\n      </button>\n    </section>\n\n    <section class=\"requests-card\">\n      <div class=\"requests-toolbar\">\n        <label\n          ><svg lucideSearch size=\"20\"></svg\n          ><input\n            #requestSearch\n            type=\"search\"\n            placeholder=\"Search ID or subject\u2026\"\n            (input)=\"setSearch(requestSearch.value)\"\n        /></label>\n        <div>\n          <button type=\"button\">All statuses <svg lucideChevronRight size=\"16\"></svg></button\n          ><button type=\"button\"><svg lucideCalendarDays size=\"17\"></svg>All dates</button\n          ><button type=\"button\">Newest first</button>\n        </div>\n      </div>\n\n      <div class=\"request-table\" role=\"table\" aria-label=\"Correction requests\">\n        <div class=\"request-table__head\" role=\"row\">\n          <span>Request</span><span>Lecture</span><span>Correction</span><span>Submitted</span\n          ><span>Status</span><span></span>\n        </div>\n        @for (request of filteredRequests(); track request._id) {\n          <button class=\"request-row\" type=\"button\" role=\"row\" (click)=\"openRequest(request)\">\n            <span class=\"request-number\"\n              ><i><svg lucideFileText size=\"19\"></svg></i\n              ><strong>{{ request.requestNumber }}</strong></span\n            >\n            <span class=\"request-subject\"\n              ><strong>{{ request.subjectName }}</strong\n              ><small\n                >{{ request.attendanceDate | date: 'dd MMM' }} \u00B7\n                {{ request.startTime || 'Time unavailable' }}</small\n              ></span\n            >\n            <span class=\"status-change\"\n              ><em [attr.data-status]=\"request.recordedStatus\">{{\n                request.recordedStatus === 'present' ? 'P' : 'A'\n              }}</em\n              ><svg lucideArrowRight size=\"17\"></svg\n              ><em [attr.data-status]=\"request.requestedStatus\">{{\n                request.requestedStatus === 'present' ? 'P' : 'A'\n              }}</em></span\n            >\n            <span class=\"submitted-date\">{{ request.createdAt | date: 'dd MMM yyyy' }}</span>\n            <span class=\"status-pill\" [attr.data-status]=\"request.status\">\n              @if (request.status === 'approved') {\n                <svg lucideCheck size=\"16\"></svg>\n              } @else if (request.status === 'rejected') {\n                <svg lucideX size=\"16\"></svg>\n              } @else if (request.status === 'needs-reply') {\n                <svg lucideCircleAlert size=\"16\"></svg>\n              } @else {\n                <svg lucideClock3 size=\"16\"></svg>\n              }\n              {{ statusLabel(request.status) }}\n            </span>\n            <svg lucideChevronRight size=\"19\"></svg>\n          </button>\n        } @empty {\n          <div class=\"requests-empty\">\n            <svg lucideFileText size=\"30\"></svg><strong>No correction requests found</strong>\n            <p>Change the filter or create a new request.</p>\n          </div>\n        }\n      </div>\n      <footer>Showing {{ filteredRequests().length }} of {{ data.counts.all }} requests</footer>\n    </section>\n  }\n</div>\n\n@if (drawer()) {\n  <button\n    class=\"drawer-backdrop\"\n    type=\"button\"\n    aria-label=\"Close correction request panel\"\n    (click)=\"closeDrawer()\"\n  ></button>\n  <aside\n    class=\"correction-drawer\"\n    [class.correction-drawer--detail]=\"drawer() === 'detail'\"\n    role=\"dialog\"\n    aria-modal=\"true\"\n    [attr.aria-label]=\"\n      drawer() === 'create' ? 'New correction request' : 'Correction request details'\n    \"\n  >\n    @if (drawer() === 'create') {\n      <header class=\"drawer-header\">\n        <button type=\"button\" (click)=\"closeDrawer()\" aria-label=\"Close\">\n          <svg lucideX size=\"24\"></svg>\n        </button>\n        <h2>New correction request</h2>\n        <span>{{ step() }} of 3</span>\n      </header>\n      <div class=\"step-rail\">\n        <div [class.is-done]=\"step() > 1\" [class.is-active]=\"step() === 1\">\n          <i>\n            @if (step() > 1) {\n              <svg lucideCheck size=\"18\"></svg>\n            } @else {\n              1\n            }</i\n          ><span>Select</span>\n        </div>\n        <div [class.is-done]=\"step() > 2\" [class.is-active]=\"step() === 2\">\n          <i>\n            @if (step() > 2) {\n              <svg lucideCheck size=\"18\"></svg>\n            } @else {\n              2\n            }</i\n          ><span>Explain</span>\n        </div>\n        <div [class.is-active]=\"step() === 3\"><i>3</i><span>Review</span></div>\n      </div>\n\n      <div class=\"drawer-content\">\n        @if (step() === 1) {\n          <section class=\"select-step\">\n            <div class=\"drawer-section-heading\">\n              <div>\n                <h3>Select a lecture</h3>\n                <p>Choose the record that needs correction.</p>\n              </div>\n              <button type=\"button\" aria-label=\"Filter lectures\">\n                <svg lucideFilter size=\"19\"></svg>\n              </button>\n            </div>\n            <label class=\"drawer-search\"\n              ><svg lucideSearch size=\"20\"></svg\n              ><input\n                #lectureSearch\n                type=\"search\"\n                placeholder=\"Search lectures\u2026\"\n                (input)=\"setRecordSearch(lectureSearch.value)\"\n            /></label>\n            <div class=\"lecture-list\">\n              @for (record of filteredRecords(); track record.recordId) {\n                <button\n                  type=\"button\"\n                  [class.is-selected]=\"selectedRecord()?.recordId === record.recordId\"\n                  (click)=\"chooseRecord(record)\"\n                >\n                  <i><svg lucideFileText size=\"23\"></svg></i>\n                  <span\n                    ><strong>{{ record.subjectName }}</strong\n                    ><small\n                      >{{ record.date | date: 'dd MMM' }} \u00B7\n                      {{ record.startTime || 'Time unavailable' }}</small\n                    ></span\n                  >\n                  <em [attr.data-status]=\"record.status\">{{\n                    record.status === 'present' ? 'Present' : 'Absent'\n                  }}</em>\n                  <b>\n                    @if (selectedRecord()?.recordId === record.recordId) {\n                      <svg lucideCheck size=\"18\"></svg>\n                    }\n                  </b>\n                </button>\n              } @empty {\n                <div class=\"drawer-empty\">No attendance records match your search.</div>\n              }\n            </div>\n          </section>\n        } @else if (step() === 2) {\n          <section class=\"explain-step\">\n            @if (selectedRecord(); as record) {\n              <div class=\"selected-lecture\">\n                <i><svg lucideFileText size=\"22\"></svg></i\n                ><span\n                  ><strong>{{ record.subjectName }}</strong\n                  ><small>{{ record.date | date: 'dd MMM' }} \u00B7 {{ record.startTime }}</small></span\n                ><button type=\"button\" (click)=\"previousStep()\">\n                  <svg lucidePencil size=\"17\"></svg>Edit\n                </button>\n              </div>\n              <h3>What needs correction?</h3>\n              <div class=\"reason-grid\">\n                @for (reason of reasons; track reason.id) {\n                  <button\n                    type=\"button\"\n                    [class.is-selected]=\"reasonType() === reason.id\"\n                    (click)=\"chooseReason(reason.id)\"\n                  >\n                    <i>{{ reason.mark }}</i\n                    ><span>{{ reason.label }}</span\n                    ><b>\n                      @if (reasonType() === reason.id) {\n                        <svg lucideCheck size=\"17\"></svg>\n                      }\n                    </b>\n                  </button>\n                }\n              </div>\n              <div class=\"correction-preview\">\n                <strong>Current status \u2192 Requested status</strong>\n                <div>\n                  <em [attr.data-status]=\"record.status\">{{ record.status | titlecase }}</em\n                  ><svg lucideArrowRight size=\"22\"></svg\n                  ><em [attr.data-status]=\"record.status === 'absent' ? 'present' : 'absent'\">{{\n                    requestedStatus(record)\n                  }}</em>\n                </div>\n              </div>\n              <label class=\"note-field\"\n                ><strong>Add a short note</strong\n                ><textarea\n                  #noteInput\n                  rows=\"4\"\n                  maxlength=\"300\"\n                  placeholder=\"e.g. I was present in class\u2026\"\n                  [value]=\"note()\"\n                  (input)=\"setNote(noteInput.value)\"\n                ></textarea\n                ><small>{{ note().length }}/300</small></label\n              >\n              <div class=\"proof-field\">\n                <strong>Add proof <span>(optional)</span></strong\n                ><label\n                  ><svg lucideUpload size=\"25\"></svg><b>Add proof</b\n                  ><small>PDF, JPG or PNG \u00B7 Max 5 MB</small\n                  ><input\n                    type=\"file\"\n                    accept=\"application/pdf,image/png,image/jpeg\"\n                    (change)=\"chooseAttachment($event)\"\n                /></label>\n              </div>\n              @if (attachment(); as file) {\n                <div class=\"file-chip\">\n                  <svg lucidePaperclip size=\"21\"></svg\n                  ><span\n                    ><strong>{{ file.name }}</strong\n                    ><small>{{ formatBytes(file.size) }}</small></span\n                  ><button type=\"button\" (click)=\"removeAttachment()\" aria-label=\"Remove file\">\n                    <svg lucideX size=\"18\"></svg>\n                  </button>\n                </div>\n              }\n              <div class=\"duplicate-check\">\n                <svg lucideCheck size=\"18\"></svg>No open request found for this lecture\n              </div>\n            }\n          </section>\n        } @else {\n          @if (selectedRecord(); as record) {\n            <section class=\"review-step\">\n              <div class=\"review-hero\">\n                <span><svg lucideCheck size=\"26\"></svg></span>\n                <h3>Ready to submit</h3>\n                <p>Review the details before sending your request.</p>\n              </div>\n              <div class=\"review-card\">\n                <h3>{{ record.subjectName }}</h3>\n                <p>\n                  {{ record.subjectCode }} \u00B7 {{ record.date | date: 'dd MMM yyyy' }} \u00B7\n                  {{ record.startTime }}\n                </p>\n                <div class=\"status-change status-change--large\">\n                  <em [attr.data-status]=\"record.status\">{{ record.status | titlecase }}</em\n                  ><svg lucideArrowRight size=\"20\"></svg\n                  ><em [attr.data-status]=\"record.status === 'absent' ? 'present' : 'absent'\">{{\n                    requestedStatus(record)\n                  }}</em>\n                </div>\n                <dl>\n                  <div>\n                    <dt>Reason</dt>\n                    <dd>{{ reasonLabel(reasonType()) }}</dd>\n                  </div>\n                  <div>\n                    <dt>Note</dt>\n                    <dd>{{ note() }}</dd>\n                  </div>\n                  <div>\n                    <dt>Proof</dt>\n                    <dd>{{ attachment()?.name || 'No attachment' }}</dd>\n                  </div>\n                </dl>\n              </div>\n            </section>\n          }\n        }\n      </div>\n\n      @if (formError()) {\n        <div class=\"drawer-error\"><svg lucideCircleAlert size=\"17\"></svg>{{ formError() }}</div>\n      }\n      <footer class=\"drawer-footer\">\n        @if (step() === 1) {\n          <button class=\"secondary-button\" type=\"button\" (click)=\"closeDrawer()\">Cancel</button>\n        } @else {\n          <button class=\"secondary-button\" type=\"button\" (click)=\"previousStep()\">\n            <svg lucideArrowLeft size=\"18\"></svg>Back\n          </button>\n        }\n        @if (step() < 3) {\n          <button class=\"primary-button\" type=\"button\" (click)=\"nextStep()\">\n            Continue<svg lucideArrowRight size=\"18\"></svg>\n          </button>\n        } @else {\n          <button\n            class=\"primary-button\"\n            type=\"button\"\n            [disabled]=\"submitting()\"\n            (click)=\"submitRequest()\"\n          >\n            <svg lucideSend size=\"18\"></svg>{{ submitting() ? 'Submitting\u2026' : 'Submit request' }}\n          </button>\n        }\n      </footer>\n    } @else if (selectedRequest(); as request) {\n      <header class=\"drawer-header drawer-header--detail\">\n        <button type=\"button\" (click)=\"closeDrawer()\" aria-label=\"Back\">\n          <svg lucideArrowLeft size=\"23\"></svg>\n        </button>\n        <h2>{{ request.requestNumber }}</h2>\n        <span class=\"status-pill\" [attr.data-status]=\"request.status\">{{\n          statusLabel(request.status)\n        }}</span>\n        <button type=\"button\" aria-label=\"More actions\">\n          <svg lucideEllipsisVertical size=\"22\"></svg>\n        </button>\n        <button class=\"desktop-close\" type=\"button\" (click)=\"closeDrawer()\" aria-label=\"Close\">\n          <svg lucideX size=\"23\"></svg>\n        </button>\n      </header>\n      <div class=\"detail-content\">\n        @if (request.status === 'needs-reply') {\n          <div class=\"reply-banner\">\n            <svg lucideCircleAlert size=\"23\"></svg><strong>Add proof or reply to continue</strong\n            ><button type=\"button\" (click)=\"scrollToResponse()\">\n              Respond<svg lucideChevronRight size=\"18\"></svg>\n            </button>\n          </div>\n        }\n        <section class=\"detail-lecture\">\n          <i><svg lucideFileText size=\"23\"></svg></i\n          ><span\n            ><strong>{{ request.subjectName }}</strong\n            ><small\n              >{{ request.attendanceDate | date: 'dd MMM' }} \u00B7 {{ request.startTime }}</small\n            ></span\n          >\n          <div>\n            <em [attr.data-status]=\"request.recordedStatus\">{{\n              request.recordedStatus | titlecase\n            }}</em\n            ><svg lucideArrowRight size=\"18\"></svg\n            ><em [attr.data-status]=\"request.requestedStatus\">{{\n              request.requestedStatus | titlecase\n            }}</em>\n          </div>\n        </section>\n        <section class=\"timeline\" aria-label=\"Request progress\">\n          <div class=\"is-done\">\n            <i><svg lucideCheck size=\"17\"></svg></i\n            ><span\n              >Submitted<small>{{ request.createdAt | date: 'dd MMM' }}</small></span\n            >\n          </div>\n          <div [class.is-done]=\"request.status !== 'submitted'\">\n            <i>\n              @if (request.status !== 'submitted') {\n                <svg lucideCheck size=\"17\"></svg>\n              } @else {\n                2\n              }</i\n            ><span>Review</span>\n          </div>\n          <div\n            [class.is-active]=\"request.status === 'needs-reply'\"\n            [class.is-done]=\"['approved', 'rejected'].includes(request.status)\"\n          >\n            <i>3</i><span>Reply</span>\n          </div>\n          <div [class.is-done]=\"['approved', 'rejected'].includes(request.status)\">\n            <i>4</i><span>Decision</span>\n          </div>\n        </section>\n        <div class=\"detail-grid\">\n          <section class=\"detail-card\">\n            <h3><svg lucideMessageSquare size=\"20\"></svg>Your request</h3>\n            <p>{{ request.note }}</p>\n            <div class=\"status-change status-change--large\">\n              <em [attr.data-status]=\"request.recordedStatus\">{{\n                request.recordedStatus | titlecase\n              }}</em\n              ><svg lucideArrowRight size=\"18\"></svg\n              ><em [attr.data-status]=\"request.requestedStatus\">{{\n                request.requestedStatus | titlecase\n              }}</em>\n            </div>\n            @for (file of request.attachments; track file.key) {\n              <button\n                class=\"file-chip\"\n                type=\"button\"\n                (click)=\"openAttachment(request._id, file.key, file.name)\"\n              >\n                <svg lucidePaperclip size=\"20\"></svg\n                ><span\n                  ><strong>{{ file.name }}</strong\n                  ><small>{{ formatBytes(file.size) }}</small></span\n                ><svg lucideChevronRight size=\"18\"></svg>\n              </button>\n            }\n          </section>\n          <section class=\"detail-card\">\n            <h3><svg lucideBuilding2 size=\"20\"></svg>Academic Office</h3>\n            @for (message of request.messages; track message.createdAt) {\n              <article class=\"office-message\">\n                <strong>{{ message.authorName }}</strong\n                ><time>{{ message.createdAt | date: 'dd MMM, h:mm a' }}</time>\n                <p>{{ message.message }}</p>\n                @for (file of message.attachments; track file.key) {\n                  <button type=\"button\" (click)=\"openAttachment(request._id, file.key, file.name)\">\n                    <svg lucidePaperclip size=\"17\"></svg>{{ file.name }}\n                  </button>\n                }\n              </article>\n            } @empty {\n              <div class=\"office-empty\">\n                <svg lucideClock3 size=\"21\"></svg>\n                <p>Your request is in the Academic Office queue. Updates will appear here.</p>\n              </div>\n            }\n          </section>\n        </div>\n        @if (request.status === 'needs-reply') {\n          <section #responseBox class=\"response-box\">\n            <h3>Send your response</h3>\n            <textarea\n              #responseInput\n              rows=\"3\"\n              maxlength=\"1000\"\n              placeholder=\"Write a reply for the Academic Office\u2026\"\n              [value]=\"responseMessage()\"\n              (input)=\"setResponse(responseInput.value)\"\n            ></textarea>\n            <div>\n              <label\n                ><svg lucideUpload size=\"18\"></svg>Add proof<input\n                  type=\"file\"\n                  accept=\"application/pdf,image/png,image/jpeg\"\n                  (change)=\"chooseAttachment($event, true)\"\n              /></label>\n              @if (responseAttachment(); as file) {\n                <span\n                  >{{ file.name\n                  }}<button type=\"button\" (click)=\"removeAttachment(true)\">\n                    <svg lucideX size=\"15\"></svg></button\n                ></span>\n              }\n              <button\n                class=\"primary-button\"\n                type=\"button\"\n                [disabled]=\"submitting()\"\n                (click)=\"submitResponse()\"\n              >\n                <svg lucideSend size=\"17\"></svg>Send response\n              </button>\n            </div>\n          </section>\n        }\n        @if (formError()) {\n          <div class=\"drawer-error\"><svg lucideCircleAlert size=\"17\"></svg>{{ formError() }}</div>\n        }\n        <div class=\"detail-actions\">\n          <a [routerLink]=\"['/student/attendance/subjects', request.subjectId]\"\n            ><svg lucideFileText size=\"19\"></svg>Attendance record</a\n          >\n          @if (isOpen(request.status)) {\n            <button type=\"button\" [disabled]=\"submitting()\" (click)=\"withdraw()\">\n              <svg lucideTrash2 size=\"19\"></svg>Withdraw request\n            </button>\n          }\n        </div>\n      </div>\n    }\n  </aside>\n}\n", styles: [":host {\n  display: block;\n}\n\n.corrections-page {\n  display: grid;\n  gap: var(--student-space-4);\n  min-height: calc(100dvh - var(--student-header-height));\n  color: var(--student-color-text);\n}\n\nh1,\nh2,\nh3,\np {\n  margin: 0;\n}\nbutton,\ninput,\ntextarea {\n  font: inherit;\n}\nbutton {\n  color: inherit;\n}\n\n.corrections-heading {\n  display: flex;\n  align-items: end;\n  justify-content: space-between;\n  gap: var(--student-space-4);\n}\n\n.corrections-heading nav {\n  display: flex;\n  gap: var(--student-space-2);\n  margin-bottom: var(--student-space-2);\n  color: var(--student-color-text-secondary);\n  font-size: var(--student-text-caption);\n}\n\n.corrections-heading nav a {\n  color: var(--student-color-primary);\n  text-decoration: none;\n}\n.corrections-heading nav i {\n  font-style: normal;\n}\n.corrections-heading h1 {\n  font-size: clamp(29px, 3.5vw, 42px);\n  line-height: 1.05;\n}\n.corrections-heading p {\n  margin-top: var(--student-space-2);\n  color: var(--student-color-text-secondary);\n}\n.corrections-actions {\n  display: flex;\n  gap: var(--student-space-2);\n}\n\n.icon-button,\n.primary-button,\n.secondary-button {\n  display: inline-flex;\n  min-height: 46px;\n  align-items: center;\n  justify-content: center;\n  gap: var(--student-space-2);\n  padding: 0 var(--student-space-4);\n  border: 1px solid var(--student-color-border);\n  border-radius: var(--student-radius-control);\n  background: var(--student-color-surface);\n  cursor: pointer;\n  font-weight: 800;\n}\n\n.icon-button {\n  width: 46px;\n  padding: 0;\n}\n.primary-button {\n  border-color: var(--student-color-primary);\n  color: var(--student-color-text-inverse);\n  background: var(--student-color-primary);\n  box-shadow: var(--student-shadow-card);\n}\n.secondary-button {\n  color: var(--student-color-primary);\n  background: var(--student-color-surface);\n}\n.primary-button:disabled,\n.secondary-button:disabled {\n  cursor: default;\n  opacity: 0.55;\n}\n\n.page-message {\n  display: flex;\n  align-items: center;\n  gap: var(--student-space-2);\n  padding: var(--student-space-3) var(--student-space-4);\n  border: 1px solid var(--student-color-success);\n  border-radius: var(--student-radius-control);\n  color: var(--student-color-success);\n  background: var(--student-color-success-soft);\n  font-weight: 700;\n}\n\n.page-state {\n  display: grid;\n  min-height: 340px;\n  place-content: center;\n  gap: var(--student-space-2);\n  border: 1px solid var(--student-color-border);\n  border-radius: var(--student-radius-card);\n  color: var(--student-color-text-secondary);\n  background: var(--student-color-surface);\n  text-align: center;\n}\n.page-state--error {\n  color: var(--student-color-danger);\n}\n\n.status-tabs {\n  display: grid;\n  grid-template-columns: repeat(5, 1fr);\n  border: 1px solid var(--student-color-border);\n  border-radius: var(--student-radius-card);\n  overflow: hidden;\n  background: var(--student-color-surface);\n  box-shadow: var(--student-attendance-shadow);\n}\n\n.status-tabs button {\n  position: relative;\n  display: flex;\n  min-height: 72px;\n  align-items: center;\n  justify-content: center;\n  gap: var(--student-space-3);\n  border: 0;\n  border-bottom: 4px solid transparent;\n  background: transparent;\n  cursor: pointer;\n  font-weight: 750;\n}\n.status-tabs button + button {\n  border-left: 1px solid var(--student-color-divider);\n}\n.status-tabs button b {\n  color: var(--student-color-primary);\n  font-size: 21px;\n}\n.status-tabs button[data-tone='warning'] svg,\n.status-tabs button[data-tone='warning'] b {\n  color: var(--student-color-warning);\n}\n.status-tabs button[data-tone='success'] svg,\n.status-tabs button[data-tone='success'] b {\n  color: var(--student-color-success);\n}\n.status-tabs button[data-tone='danger'] svg,\n.status-tabs button[data-tone='danger'] b {\n  color: var(--student-color-danger);\n}\n.status-tabs button.is-active {\n  border-bottom-color: var(--student-color-primary);\n  background: var(--student-color-primary-subtle);\n}\n\n.requests-card {\n  border: 1px solid var(--student-color-border);\n  border-radius: var(--student-radius-card);\n  overflow: hidden;\n  background: var(--student-color-surface);\n  box-shadow: var(--student-attendance-shadow);\n}\n\n.requests-toolbar {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: var(--student-space-4);\n  padding: var(--student-space-4);\n}\n.requests-toolbar > label,\n.drawer-search {\n  display: flex;\n  width: min(420px, 100%);\n  min-height: 46px;\n  align-items: center;\n  gap: var(--student-space-2);\n  padding: 0 var(--student-space-3);\n  border: 1px solid var(--student-color-border);\n  border-radius: var(--student-radius-control);\n  color: var(--student-color-text-secondary);\n  background: var(--student-color-surface);\n}\n.requests-toolbar input,\n.drawer-search input {\n  width: 100%;\n  min-width: 0;\n  border: 0;\n  outline: 0;\n  color: var(--student-color-text);\n  background: transparent;\n}\n.requests-toolbar > div {\n  display: flex;\n  gap: var(--student-space-2);\n}\n.requests-toolbar > div button {\n  display: flex;\n  min-height: 42px;\n  align-items: center;\n  gap: var(--student-space-2);\n  padding: 0 var(--student-space-3);\n  border: 1px solid var(--student-color-border);\n  border-radius: var(--student-radius-control);\n  background: var(--student-color-surface);\n  cursor: pointer;\n}\n\n.request-table__head,\n.request-row {\n  display: grid;\n  grid-template-columns: 1.05fr 1.6fr 1.15fr 0.95fr 1.15fr 24px;\n  align-items: center;\n  gap: var(--student-space-3);\n}\n.request-table__head {\n  padding: var(--student-space-3) var(--student-space-4);\n  color: var(--student-color-text-secondary);\n  background: var(--student-color-primary-subtle);\n  font-size: var(--student-text-caption);\n  font-weight: 800;\n}\n.request-row {\n  width: 100%;\n  min-height: 68px;\n  padding: var(--student-space-3) var(--student-space-4);\n  border: 0;\n  border-top: 1px solid var(--student-color-divider);\n  background: var(--student-color-surface);\n  text-align: left;\n  cursor: pointer;\n}\n.request-row:hover {\n  background: var(--student-color-surface-soft);\n}\n.request-number {\n  display: flex;\n  align-items: center;\n  gap: var(--student-space-3);\n}\n.request-number i {\n  display: grid;\n  width: 38px;\n  height: 38px;\n  place-items: center;\n  border-radius: 10px;\n  color: var(--student-color-primary);\n  background: var(--student-color-primary-subtle);\n}\n.request-number i,\n.status-change em {\n  font-style: normal;\n}\n.request-subject strong,\n.request-subject small {\n  display: block;\n}\n.request-subject small,\n.submitted-date {\n  margin-top: 2px;\n  color: var(--student-color-text-secondary);\n  font-size: var(--student-text-caption);\n}\n.status-change {\n  display: flex;\n  align-items: center;\n  gap: var(--student-space-2);\n}\n.status-change em,\n.detail-lecture em,\n.correction-preview em {\n  display: inline-flex;\n  min-width: 38px;\n  min-height: 34px;\n  align-items: center;\n  justify-content: center;\n  padding: 0 12px;\n  border-radius: var(--student-radius-pill);\n  font-style: normal;\n  font-weight: 850;\n}\n[data-status='present'] {\n  color: var(--student-color-success);\n  background: var(--student-color-success-soft);\n}\n[data-status='absent'],\n[data-status='rejected'] {\n  color: var(--student-color-danger);\n  background: var(--student-color-danger-soft);\n}\n[data-status='submitted'],\n[data-status='reviewing'] {\n  color: var(--student-color-primary);\n  background: var(--student-color-primary-subtle);\n}\n[data-status='needs-reply'] {\n  color: var(--student-color-warning);\n  background: var(--student-color-warning-soft);\n}\n[data-status='approved'] {\n  color: var(--student-color-success);\n  background: var(--student-color-success-soft);\n}\n[data-status='withdrawn'] {\n  color: var(--student-color-text-secondary);\n  background: var(--student-color-surface-soft);\n}\n.status-pill {\n  display: inline-flex;\n  width: max-content;\n  min-height: 34px;\n  align-items: center;\n  gap: var(--student-space-2);\n  padding: 0 12px;\n  border-radius: var(--student-radius-pill);\n  font-size: var(--student-text-caption);\n  font-weight: 800;\n}\n.requests-card > footer {\n  padding: var(--student-space-3) var(--student-space-4);\n  border-top: 1px solid var(--student-color-divider);\n  color: var(--student-color-text-secondary);\n  font-size: var(--student-text-caption);\n}\n.requests-empty {\n  display: grid;\n  min-height: 260px;\n  place-content: center;\n  gap: var(--student-space-2);\n  color: var(--student-color-text-secondary);\n  text-align: center;\n}\n\n.drawer-backdrop {\n  position: fixed;\n  z-index: 70;\n  inset: 0;\n  width: 100%;\n  border: 0;\n  background: var(--student-color-overlay);\n  backdrop-filter: blur(2px);\n}\n.correction-drawer {\n  position: fixed;\n  z-index: 71;\n  top: 0;\n  right: 0;\n  display: grid;\n  grid-template-rows: auto auto minmax(0, 1fr) auto auto;\n  width: min(800px, 100vw);\n  height: 100dvh;\n  color: var(--student-color-text);\n  background: var(--student-color-surface);\n  box-shadow: var(--student-shadow-overlay);\n}\n.correction-drawer--detail {\n  grid-template-rows: auto minmax(0, 1fr);\n  width: min(820px, 100vw);\n}\n.drawer-header {\n  display: flex;\n  min-height: 78px;\n  align-items: center;\n  gap: var(--student-space-3);\n  padding: 0 var(--student-space-5);\n  border-bottom: 1px solid var(--student-color-divider);\n}\n.drawer-header h2 {\n  min-width: 0;\n  flex: 1;\n  font-size: 25px;\n}\n.drawer-header > button {\n  display: grid;\n  width: 42px;\n  height: 42px;\n  place-items: center;\n  border: 0;\n  border-radius: var(--student-radius-control);\n  background: transparent;\n  cursor: pointer;\n}\n.drawer-header > span:not(.status-pill) {\n  color: var(--student-color-text-secondary);\n}\n.drawer-header--detail h2 {\n  flex: 0 1 auto;\n}\n.drawer-header--detail .status-pill {\n  margin-right: auto;\n}\n.desktop-close {\n  border-left: 1px solid var(--student-color-divider) !important;\n  border-radius: 0 !important;\n}\n\n.step-rail {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  padding: var(--student-space-4) var(--student-space-5);\n  border-bottom: 1px solid var(--student-color-divider);\n}\n.step-rail > div {\n  position: relative;\n  display: flex;\n  align-items: center;\n  gap: var(--student-space-2);\n  color: var(--student-color-text-secondary);\n  font-weight: 750;\n}\n.step-rail > div:not(:last-child)::after {\n  content: '';\n  height: 2px;\n  flex: 1;\n  margin: 0 var(--student-space-3);\n  background: var(--student-color-divider);\n}\n.step-rail i {\n  display: grid;\n  width: 38px;\n  height: 38px;\n  place-items: center;\n  border: 2px solid var(--student-color-border-strong);\n  border-radius: 50%;\n  font-style: normal;\n}\n.step-rail .is-active {\n  color: var(--student-color-primary);\n}\n.step-rail .is-active i {\n  border-color: var(--student-color-primary);\n  color: var(--student-color-text-inverse);\n  background: var(--student-color-primary);\n}\n.step-rail .is-done i {\n  border-color: var(--student-color-primary);\n  color: var(--student-color-primary);\n  background: var(--student-color-primary-subtle);\n}\n.step-rail .is-done::after {\n  background: var(--student-color-primary) !important;\n}\n\n.drawer-content,\n.detail-content {\n  min-height: 0;\n  overflow: auto;\n  padding: var(--student-space-5);\n}\n.drawer-section-heading {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: var(--student-space-3);\n}\n.drawer-section-heading h3,\n.explain-step > h3 {\n  font-size: 21px;\n}\n.drawer-section-heading p {\n  margin-top: 4px;\n  color: var(--student-color-text-secondary);\n}\n.drawer-section-heading button {\n  display: grid;\n  width: 42px;\n  height: 42px;\n  place-items: center;\n  border: 1px solid var(--student-color-border);\n  border-radius: var(--student-radius-control);\n  background: var(--student-color-surface);\n}\n.drawer-search {\n  width: 100%;\n  margin: var(--student-space-4) 0;\n}\n.lecture-list {\n  border: 1px solid var(--student-color-border);\n  border-radius: var(--student-radius-card);\n  overflow: hidden;\n}\n.lecture-list > button {\n  display: grid;\n  grid-template-columns: auto minmax(0, 1fr) auto auto;\n  width: 100%;\n  min-height: 78px;\n  align-items: center;\n  gap: var(--student-space-3);\n  padding: var(--student-space-3) var(--student-space-4);\n  border: 0;\n  background: var(--student-color-surface);\n  text-align: left;\n  cursor: pointer;\n}\n.lecture-list > button + button {\n  border-top: 1px solid var(--student-color-divider);\n}\n.lecture-list > button.is-selected {\n  background: var(--student-color-primary-subtle);\n}\n.lecture-list i {\n  color: var(--student-color-primary);\n}\n.lecture-list i,\n.lecture-list em {\n  font-style: normal;\n}\n.lecture-list span strong,\n.lecture-list span small {\n  display: block;\n}\n.lecture-list span small {\n  margin-top: 3px;\n  color: var(--student-color-text-secondary);\n}\n.lecture-list em {\n  padding: 7px 12px;\n  border-radius: var(--student-radius-pill);\n  font-size: var(--student-text-caption);\n  font-weight: 800;\n}\n.lecture-list b {\n  display: grid;\n  width: 31px;\n  height: 31px;\n  place-items: center;\n  border: 2px solid var(--student-color-border-strong);\n  border-radius: 50%;\n}\n.lecture-list .is-selected b {\n  border-color: var(--student-color-primary);\n  color: var(--student-color-text-inverse);\n  background: var(--student-color-primary);\n}\n.drawer-empty {\n  padding: 70px 20px;\n  color: var(--student-color-text-secondary);\n  text-align: center;\n}\n\n.selected-lecture {\n  display: flex;\n  align-items: center;\n  gap: var(--student-space-3);\n  margin-bottom: var(--student-space-5);\n  padding: var(--student-space-3) var(--student-space-4);\n  border: 1px solid var(--student-color-border);\n  border-radius: var(--student-radius-control);\n  background: var(--student-color-primary-subtle);\n}\n.selected-lecture > i {\n  display: grid;\n  width: 42px;\n  height: 42px;\n  place-items: center;\n  border-radius: 10px;\n  color: var(--student-color-primary);\n  background: var(--student-color-surface);\n}\n.selected-lecture i {\n  font-style: normal;\n}\n.selected-lecture > span {\n  min-width: 0;\n  flex: 1;\n}\n.selected-lecture strong,\n.selected-lecture small {\n  display: block;\n}\n.selected-lecture small {\n  margin-top: 3px;\n  color: var(--student-color-text-secondary);\n}\n.selected-lecture button {\n  display: flex;\n  align-items: center;\n  gap: var(--student-space-2);\n  padding: 9px 12px;\n  border: 0;\n  border-radius: var(--student-radius-pill);\n  color: var(--student-color-primary);\n  background: var(--student-color-surface);\n  cursor: pointer;\n  font-weight: 750;\n}\n.reason-grid {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: var(--student-space-3);\n  margin: var(--student-space-3) 0 var(--student-space-5);\n}\n.reason-grid button {\n  display: grid;\n  grid-template-columns: auto 1fr auto;\n  min-height: 80px;\n  align-items: center;\n  gap: var(--student-space-3);\n  padding: var(--student-space-3);\n  border: 1px solid var(--student-color-border);\n  border-radius: var(--student-radius-control);\n  background: var(--student-color-surface);\n  text-align: left;\n  cursor: pointer;\n  font-weight: 750;\n}\n.reason-grid button.is-selected {\n  border: 2px solid var(--student-color-primary);\n  background: var(--student-color-primary-subtle);\n}\n.reason-grid i {\n  display: grid;\n  width: 44px;\n  height: 44px;\n  place-items: center;\n  border-radius: 50%;\n  color: var(--student-color-text-secondary);\n  background: var(--student-color-surface-soft);\n  font-size: 18px;\n  font-style: normal;\n  font-weight: 850;\n}\n.reason-grid .is-selected i,\n.reason-grid .is-selected b {\n  color: var(--student-color-text-inverse);\n  background: var(--student-color-primary);\n}\n.reason-grid b {\n  display: grid;\n  width: 31px;\n  height: 31px;\n  place-items: center;\n  border: 2px solid var(--student-color-border-strong);\n  border-radius: 50%;\n}\n.correction-preview {\n  margin-bottom: var(--student-space-4);\n}\n.correction-preview > div {\n  display: flex;\n  align-items: center;\n  justify-content: space-around;\n  margin-top: var(--student-space-3);\n  padding: var(--student-space-3);\n  border-radius: var(--student-radius-control);\n  background: var(--student-color-surface-soft);\n}\n.status-change--large em {\n  min-width: 94px;\n}\n.note-field {\n  position: relative;\n  display: block;\n}\n.note-field > strong,\n.proof-field > strong {\n  display: block;\n  margin-bottom: var(--student-space-2);\n}\n.note-field textarea,\n.response-box textarea {\n  width: 100%;\n  resize: vertical;\n  padding: var(--student-space-3);\n  border: 1px solid var(--student-color-border);\n  border-radius: var(--student-radius-control);\n  outline: 0;\n  color: var(--student-color-text);\n  background: var(--student-color-surface);\n}\n.note-field textarea:focus,\n.response-box textarea:focus {\n  border-color: var(--student-color-primary);\n  box-shadow: 0 0 0 3px var(--student-color-primary-subtle);\n}\n.note-field small {\n  position: absolute;\n  right: 12px;\n  bottom: 10px;\n  color: var(--student-color-text-secondary);\n}\n.proof-field {\n  margin-top: var(--student-space-4);\n}\n.proof-field > strong span {\n  color: var(--student-color-text-secondary);\n  font-weight: 500;\n}\n.proof-field label {\n  display: grid;\n  min-height: 104px;\n  place-content: center;\n  gap: 3px;\n  border: 1px dashed var(--student-color-primary);\n  border-radius: var(--student-radius-control);\n  color: var(--student-color-primary);\n  text-align: center;\n  cursor: pointer;\n}\n.proof-field label svg {\n  margin: auto;\n}\n.proof-field label small {\n  color: var(--student-color-text-secondary);\n}\n.proof-field input,\n.response-box input {\n  display: none;\n}\n.file-chip {\n  display: flex;\n  width: 100%;\n  align-items: center;\n  gap: var(--student-space-3);\n  margin-top: var(--student-space-3);\n  padding: var(--student-space-3);\n  border-radius: var(--student-radius-control);\n  border: 0;\n  color: var(--student-color-primary);\n  background: var(--student-color-primary-subtle);\n  text-align: left;\n  text-decoration: none;\n  cursor: pointer;\n}\n.file-chip > span {\n  min-width: 0;\n  flex: 1;\n}\n.file-chip strong,\n.file-chip small {\n  display: block;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.file-chip small {\n  margin-top: 2px;\n  color: var(--student-color-text-secondary);\n}\n.file-chip button {\n  display: grid;\n  width: 32px;\n  height: 32px;\n  place-items: center;\n  border: 0;\n  border-radius: 50%;\n  background: var(--student-color-surface-soft);\n  cursor: pointer;\n}\n.duplicate-check {\n  display: flex;\n  align-items: center;\n  gap: var(--student-space-2);\n  margin-top: var(--student-space-4);\n  padding: var(--student-space-3);\n  border-radius: var(--student-radius-control);\n  color: var(--student-color-success);\n  background: var(--student-color-success-soft);\n  font-weight: 700;\n}\n.review-hero {\n  padding: var(--student-space-5);\n  text-align: center;\n}\n.review-hero > span {\n  display: grid;\n  width: 58px;\n  height: 58px;\n  margin: 0 auto var(--student-space-3);\n  place-items: center;\n  border-radius: 50%;\n  color: var(--student-color-text-inverse);\n  background: var(--student-color-success);\n}\n.review-hero p {\n  margin-top: var(--student-space-2);\n  color: var(--student-color-text-secondary);\n}\n.review-card {\n  padding: var(--student-space-5);\n  border: 1px solid var(--student-color-border);\n  border-radius: var(--student-radius-card);\n  background: var(--student-color-surface-soft);\n}\n.review-card > p {\n  margin-top: var(--student-space-1);\n  color: var(--student-color-text-secondary);\n}\n.review-card .status-change {\n  margin: var(--student-space-4) 0;\n}\n.review-card dl {\n  display: grid;\n  gap: var(--student-space-3);\n  margin: 0;\n}\n.review-card dl > div {\n  padding-top: var(--student-space-3);\n  border-top: 1px solid var(--student-color-divider);\n}\n.review-card dt {\n  color: var(--student-color-text-secondary);\n  font-size: var(--student-text-caption);\n}\n.review-card dd {\n  margin: var(--student-space-1) 0 0;\n}\n.drawer-error {\n  display: flex;\n  align-items: center;\n  gap: var(--student-space-2);\n  margin: 0 var(--student-space-5);\n  padding: var(--student-space-3);\n  border-radius: var(--student-radius-control);\n  color: var(--student-color-danger);\n  background: var(--student-color-danger-soft);\n}\n.drawer-footer {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: var(--student-space-3);\n  padding: var(--student-space-4) var(--student-space-5);\n  border-top: 1px solid var(--student-color-divider);\n  background: var(--student-color-surface);\n}\n\n.detail-content {\n  display: grid;\n  align-content: start;\n  gap: var(--student-space-3);\n}\n.reply-banner {\n  display: flex;\n  min-height: 72px;\n  align-items: center;\n  gap: var(--student-space-3);\n  padding: var(--student-space-3) var(--student-space-4);\n  border: 1px solid var(--student-color-warning);\n  border-radius: var(--student-radius-control);\n  color: var(--student-color-warning);\n  background: var(--student-color-warning-soft);\n}\n.reply-banner strong {\n  flex: 1;\n}\n.reply-banner button {\n  display: flex;\n  min-height: 42px;\n  align-items: center;\n  gap: var(--student-space-2);\n  padding: 0 var(--student-space-3);\n  border: 0;\n  border-radius: var(--student-radius-control);\n  color: var(--student-color-text-inverse);\n  background: var(--student-color-warning);\n  cursor: pointer;\n  font-weight: 800;\n}\n.detail-lecture {\n  display: flex;\n  align-items: center;\n  gap: var(--student-space-3);\n  padding: var(--student-space-4);\n  border: 1px solid var(--student-color-border);\n  border-radius: var(--student-radius-control);\n}\n.detail-lecture > i {\n  display: grid;\n  width: 48px;\n  height: 48px;\n  place-items: center;\n  border-radius: var(--student-radius-control);\n  color: var(--student-color-primary);\n  background: var(--student-color-primary-subtle);\n}\n.detail-lecture i {\n  font-style: normal;\n}\n.detail-lecture > span {\n  min-width: 0;\n  flex: 1;\n}\n.detail-lecture strong,\n.detail-lecture small {\n  display: block;\n}\n.detail-lecture small {\n  margin-top: 3px;\n  color: var(--student-color-text-secondary);\n}\n.detail-lecture > div {\n  display: flex;\n  align-items: center;\n  gap: var(--student-space-2);\n}\n.timeline {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  padding: var(--student-space-4);\n  border: 1px solid var(--student-color-border);\n  border-radius: var(--student-radius-control);\n}\n.timeline > div {\n  position: relative;\n  display: grid;\n  justify-items: center;\n  gap: var(--student-space-2);\n  color: var(--student-color-text-secondary);\n  text-align: center;\n}\n.timeline > div:not(:last-child)::after {\n  content: '';\n  position: absolute;\n  top: 17px;\n  left: calc(50% + 21px);\n  width: calc(100% - 42px);\n  height: 2px;\n  background: var(--student-color-divider);\n}\n.timeline i {\n  position: relative;\n  z-index: 1;\n  display: grid;\n  width: 35px;\n  height: 35px;\n  place-items: center;\n  border: 2px solid var(--student-color-border-strong);\n  border-radius: 50%;\n  background: var(--student-color-surface);\n  font-style: normal;\n}\n.timeline span {\n  font-weight: 750;\n}\n.timeline small {\n  display: block;\n  margin-top: 2px;\n  font-size: 11px;\n  font-weight: 500;\n}\n.timeline .is-done i {\n  border-color: var(--student-color-success);\n  color: var(--student-color-text-inverse);\n  background: var(--student-color-success);\n}\n.timeline .is-done:not(:last-child)::after {\n  background: var(--student-color-success);\n}\n.timeline .is-active {\n  color: var(--student-color-warning);\n}\n.timeline .is-active i {\n  border-color: var(--student-color-warning);\n  background: var(--student-color-warning-soft);\n}\n.detail-grid {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: var(--student-space-3);\n}\n.detail-card {\n  min-width: 0;\n  padding: var(--student-space-4);\n  border: 1px solid var(--student-color-border);\n  border-radius: var(--student-radius-control);\n}\n.detail-card > h3 {\n  display: flex;\n  align-items: center;\n  gap: var(--student-space-2);\n}\n.detail-card > p {\n  margin: var(--student-space-3) 0;\n  color: var(--student-color-text-secondary);\n}\n.office-message {\n  position: relative;\n  margin-top: var(--student-space-3);\n  padding: var(--student-space-3);\n  border-radius: var(--student-radius-control);\n  background: var(--student-color-primary-subtle);\n}\n.office-message time {\n  float: right;\n  color: var(--student-color-text-secondary);\n  font-size: 11px;\n}\n.office-message p {\n  margin-top: var(--student-space-2);\n  color: var(--student-color-text-secondary);\n}\n.office-message a,\n.office-message > button {\n  display: flex;\n  align-items: center;\n  gap: var(--student-space-2);\n  margin-top: var(--student-space-2);\n  border: 0;\n  color: var(--student-color-primary);\n  background: transparent;\n  cursor: pointer;\n}\n.office-empty {\n  display: flex;\n  align-items: center;\n  gap: var(--student-space-3);\n  margin-top: var(--student-space-3);\n  color: var(--student-color-text-secondary);\n}\n.response-box {\n  padding: var(--student-space-4);\n  border: 1px solid var(--student-color-border);\n  border-radius: var(--student-radius-control);\n}\n.response-box textarea {\n  margin-top: var(--student-space-3);\n}\n.response-box > div {\n  display: flex;\n  align-items: center;\n  gap: var(--student-space-2);\n  margin-top: var(--student-space-3);\n}\n.response-box label {\n  display: flex;\n  align-items: center;\n  gap: var(--student-space-2);\n  padding: 10px 12px;\n  border-radius: var(--student-radius-control);\n  color: var(--student-color-primary);\n  background: var(--student-color-primary-subtle);\n  cursor: pointer;\n  font-weight: 750;\n}\n.response-box > div > span {\n  display: flex;\n  min-width: 0;\n  align-items: center;\n  gap: var(--student-space-2);\n  overflow: hidden;\n  color: var(--student-color-text-secondary);\n  font-size: var(--student-text-caption);\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.response-box > div > span button {\n  display: grid;\n  border: 0;\n  background: transparent;\n  cursor: pointer;\n}\n.response-box .primary-button {\n  margin-left: auto;\n}\n.detail-actions {\n  display: flex;\n  align-items: center;\n  gap: var(--student-space-5);\n  padding: var(--student-space-3) 0;\n  border-top: 1px solid var(--student-color-divider);\n}\n.detail-actions a,\n.detail-actions button {\n  display: flex;\n  align-items: center;\n  gap: var(--student-space-2);\n  border: 0;\n  color: var(--student-color-primary);\n  background: transparent;\n  text-decoration: none;\n  cursor: pointer;\n  font-weight: 750;\n}\n.detail-actions button {\n  color: var(--student-color-danger);\n}\n\n@media (max-width: 1100px) {\n  .request-table__head,\n  .request-row {\n    grid-template-columns: 1fr 1.5fr 1fr 1.1fr 24px;\n  }\n  .request-table__head span:nth-child(4),\n  .submitted-date {\n    display: none;\n  }\n  .requests-toolbar > div button:nth-child(n + 2) {\n    display: none;\n  }\n}\n\n@media (max-width: 700px) {\n  .corrections-page {\n    gap: var(--student-space-3);\n    min-height: calc(100dvh - var(--student-mobile-header-height));\n  }\n  .corrections-heading {\n    align-items: center;\n  }\n  .corrections-heading nav,\n  .corrections-heading p,\n  .corrections-actions .icon-button {\n    display: none;\n  }\n  .corrections-heading h1 {\n    font-size: 30px;\n  }\n  .corrections-actions .primary-button {\n    min-height: 44px;\n    padding: 0 var(--student-space-3);\n  }\n  .status-tabs {\n    grid-template-columns: repeat(5, minmax(115px, 1fr));\n    overflow-x: auto;\n  }\n  .status-tabs button {\n    min-height: 66px;\n    gap: var(--student-space-2);\n    white-space: nowrap;\n  }\n  .requests-card {\n    border: 0;\n    overflow: visible;\n    background: transparent;\n    box-shadow: none;\n  }\n  .requests-toolbar {\n    padding: 0 0 var(--student-space-2);\n  }\n  .requests-toolbar > label {\n    width: 100%;\n    background: var(--student-color-surface);\n  }\n  .requests-toolbar > div {\n    display: none;\n  }\n  .request-table__head {\n    display: none;\n  }\n  .request-table {\n    display: grid;\n    gap: var(--student-space-3);\n  }\n  .request-row {\n    grid-template-columns: auto minmax(0, 1fr) auto;\n    min-height: 112px;\n    padding: var(--student-space-4);\n    border: 1px solid var(--student-color-border);\n    border-radius: var(--student-radius-card);\n    box-shadow: var(--student-shadow-card);\n  }\n  .request-number {\n    grid-row: 1 / 3;\n  }\n  .request-number strong {\n    position: absolute;\n    margin: -47px 0 0 54px;\n  }\n  .request-subject {\n    padding-top: 24px;\n  }\n  .status-change {\n    grid-column: 2;\n  }\n  .request-row > .status-pill {\n    grid-column: 3;\n    grid-row: 1 / 3;\n  }\n  .request-row > svg {\n    grid-column: 3;\n    grid-row: 3;\n    justify-self: end;\n  }\n  .requests-card > footer {\n    border: 0;\n    padding-left: 0;\n  }\n  .correction-drawer,\n  .correction-drawer--detail {\n    inset: 0;\n    width: 100vw;\n  }\n  .drawer-header {\n    min-height: 68px;\n    padding: 0 var(--student-space-3);\n  }\n  .drawer-header h2 {\n    font-size: 24px;\n  }\n  .step-rail {\n    padding: var(--student-space-3);\n  }\n  .step-rail > div {\n    justify-content: center;\n  }\n  .step-rail > div:not(:last-child)::after {\n    position: absolute;\n    top: 18px;\n    left: calc(50% + 21px);\n    width: calc(100% - 42px);\n    margin: 0;\n  }\n  .step-rail span {\n    display: none;\n  }\n  .drawer-content,\n  .detail-content {\n    padding: var(--student-space-3);\n  }\n  .drawer-footer {\n    padding: var(--student-space-3);\n  }\n  .reason-grid {\n    grid-template-columns: 1fr 1fr;\n    gap: var(--student-space-2);\n  }\n  .reason-grid button {\n    min-height: 78px;\n    padding: var(--student-space-2);\n  }\n  .reason-grid i {\n    width: 38px;\n    height: 38px;\n  }\n  .detail-grid {\n    grid-template-columns: 1fr;\n  }\n  .desktop-close {\n    display: none !important;\n  }\n  .detail-lecture {\n    align-items: flex-start;\n    flex-wrap: wrap;\n  }\n  .detail-lecture > div {\n    width: 100%;\n    justify-content: flex-end;\n  }\n  .timeline {\n    padding: var(--student-space-3) var(--student-space-1);\n  }\n  .timeline span {\n    font-size: 12px;\n  }\n  .response-box > div {\n    flex-wrap: wrap;\n  }\n  .response-box .primary-button {\n    width: 100%;\n    margin: var(--student-space-2) 0 0;\n  }\n}\n\n@media (max-width: 430px) {\n  .corrections-heading h1 {\n    font-size: 26px;\n  }\n  .corrections-actions .primary-button {\n    font-size: var(--student-text-caption);\n  }\n  .status-tabs {\n    grid-template-columns: repeat(5, 105px);\n  }\n  .status-tabs button span {\n    display: none;\n  }\n  .request-row {\n    grid-template-columns: auto minmax(0, 1fr);\n  }\n  .request-row > .status-pill {\n    grid-column: 2;\n    grid-row: 3;\n  }\n  .request-row > svg {\n    display: none;\n  }\n  .reason-grid {\n    grid-template-columns: 1fr;\n  }\n  .reason-grid button {\n    min-height: 65px;\n  }\n  .drawer-header--detail .status-pill {\n    font-size: 0;\n    min-width: 12px;\n    min-height: 12px;\n    padding: 0;\n  }\n}\n"] }]
    }], () => [], null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(StudentAttendanceCorrectionsComponent, { className: "StudentAttendanceCorrectionsComponent", filePath: "frontend/src/app/features/student/academics/student-attendance-corrections.component.ts", lineNumber: 74 }); })();
