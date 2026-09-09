import { DatePipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, DestroyRef, computed, inject, signal } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { LucideAlertTriangle, LucideBell, LucideCalculator, LucideCheck, LucideChevronDown, LucideChevronLeft, LucideChevronRight, LucideClock3, LucideInfo, LucideListFilter, LucideRefreshCw, LucideSearch, } from '@lucide/angular';
import { ApiService } from '../../../core/api.service';
import { StudentSubjectIconComponent } from '../shared/components/student-subject-icon/student-subject-icon.component';
import { StudentSessionService } from '../shared/services/student-session.service';
import * as i0 from "@angular/core";
const _c0 = a0 => ["/student/attendance/subjects", a0];
const _c1 = () => [];
const _c2 = a0 => ["/student/attendance/shortage", a0];
const _forTrack0 = ($index, $item) => $item.recordId;
const _forTrack1 = ($index, $item) => $item.subjectId;
function StudentAttendanceShortageComponent_Conditional_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 3);
    i0.ɵɵelement(1, "span");
    i0.ɵɵtext(2, "Calculating attendance risk\u2026");
    i0.ɵɵelementEnd();
} }
function StudentAttendanceShortageComponent_Conditional_2_Template(rf, ctx) { if (rf & 1) {
    const _r1 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 4)(1, "p");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "button", 5);
    i0.ɵɵlistener("click", function StudentAttendanceShortageComponent_Conditional_2_Template_button_click_3_listener() { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.refresh()); });
    i0.ɵɵtext(4, "Try again");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r1.error());
} }
function StudentAttendanceShortageComponent_Conditional_3_Conditional_43_Conditional_22_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtext(0, " The published schedule has enough classes to reach the minimum. ");
} }
function StudentAttendanceShortageComponent_Conditional_3_Conditional_43_Conditional_23_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtext(0);
} if (rf & 2) {
    const subject_r3 = i0.ɵɵnextContext(2);
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵtextInterpolate1(" Even perfect attendance reaches ", ctx_r1.formatPercent(subject_r3.bestPossibleAttendance), " within the current published schedule. ");
} }
function StudentAttendanceShortageComponent_Conditional_3_Conditional_43_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 25)(1, "span")(2, "strong");
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "small");
    i0.ɵɵtext(5, "Current");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(6, "b");
    i0.ɵɵtext(7, "+");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "span")(9, "strong");
    i0.ɵɵtext(10);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(11, "small");
    i0.ɵɵtext(12, "Next classes present");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(13, "b");
    i0.ɵɵtext(14, "=");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(15, "span", 26)(16, "strong");
    i0.ɵɵtext(17);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(18, "small");
    i0.ɵɵtext(19);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(20, "p", 27);
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(21, "svg", 28);
    i0.ɵɵconditionalCreate(22, StudentAttendanceShortageComponent_Conditional_3_Conditional_43_Conditional_22_Template, 1, 0)(23, StudentAttendanceShortageComponent_Conditional_3_Conditional_43_Conditional_23_Template, 1, 1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const subject_r3 = i0.ɵɵnextContext();
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate2("", subject_r3.presentLectures, " / ", subject_r3.totalLectures);
    i0.ɵɵadvance(7);
    i0.ɵɵtextInterpolate2("", subject_r3.classesToTarget, " / ", subject_r3.classesToTarget);
    i0.ɵɵadvance(7);
    i0.ɵɵtextInterpolate2("", subject_r3.presentLectures + (subject_r3.classesToTarget || 0), " / ", subject_r3.totalLectures + (subject_r3.classesToTarget || 0));
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1("", subject_r3.requiredAttendance, "% target");
    i0.ɵɵadvance(3);
    i0.ɵɵconditional(subject_r3.canReachTarget ? 22 : 23);
} }
function StudentAttendanceShortageComponent_Conditional_3_Conditional_44_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 16);
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(1, "svg", 29);
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(2, "div")(3, "strong");
    i0.ɵɵtext(4, "Waiting for the first saved attendance");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "p");
    i0.ɵɵtext(6, "No shortage is calculated until faculty records a class.");
    i0.ɵɵelementEnd()()();
} }
function StudentAttendanceShortageComponent_Conditional_3_Conditional_45_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 16);
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(1, "svg", 30);
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(2, "div")(3, "strong");
    i0.ɵɵtext(4, "Target reached");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "p");
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const subject_r3 = i0.ɵɵnextContext();
    i0.ɵɵadvance(6);
    i0.ɵɵtextInterpolate(subject_r3.message);
} }
function StudentAttendanceShortageComponent_Conditional_3_For_55_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div")(1, "span");
    i0.ɵɵtext(2);
    i0.ɵɵpipe(3, "date");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "span");
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "em");
    i0.ɵɵtext(7);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const record_r4 = ctx.$implicit;
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind2(3, 4, record_r4.date, "dd MMM yyyy"));
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(record_r4.startTime || "Time not set");
    i0.ɵɵadvance();
    i0.ɵɵattribute("data-status", record_r4.status);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(record_r4.status === "present" ? "Present" : "Absent");
} }
function StudentAttendanceShortageComponent_Conditional_3_ForEmpty_56_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p");
    i0.ɵɵtext(1, "No attendance records have been saved for this subject.");
    i0.ɵɵelementEnd();
} }
function StudentAttendanceShortageComponent_Conditional_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "a", 6);
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(1, "svg", 7);
    i0.ɵɵtext(2, " Back to Shortage & Risk ");
    i0.ɵɵelementEnd();
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(3, "header", 8);
    i0.ɵɵelement(4, "erp-student-subject-icon", 9);
    i0.ɵɵelementStart(5, "div")(6, "h1");
    i0.ɵɵtext(7);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "p");
    i0.ɵɵtext(9);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(10, "span", 10);
    i0.ɵɵtext(11);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(12, "section", 11)(13, "div")(14, "strong");
    i0.ɵɵtext(15);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(16, "span");
    i0.ɵɵtext(17, "Classes attended");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(18, "div")(19, "strong");
    i0.ɵɵtext(20);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(21, "span");
    i0.ɵɵtext(22, "Classes held");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(23, "div")(24, "strong");
    i0.ɵɵtext(25);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(26, "span");
    i0.ɵɵtext(27, "Current attendance");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(28, "div")(29, "strong");
    i0.ɵɵtext(30);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(31, "span");
    i0.ɵɵtext(32, "University minimum");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(33, "div", 12)(34, "div", 13)(35, "section", 14)(36, "header");
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(37, "svg", 15);
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(38, "div")(39, "h2");
    i0.ɵɵtext(40, "Shortage calculation");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(41, "p");
    i0.ɵɵtext(42);
    i0.ɵɵelementEnd()()();
    i0.ɵɵconditionalCreate(43, StudentAttendanceShortageComponent_Conditional_3_Conditional_43_Template, 24, 8)(44, StudentAttendanceShortageComponent_Conditional_3_Conditional_44_Template, 7, 0, "div", 16)(45, StudentAttendanceShortageComponent_Conditional_3_Conditional_45_Template, 7, 1, "div", 16);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(46, "section", 17)(47, "header")(48, "h2");
    i0.ɵɵtext(49, "Recent attendance");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(50, "a", 18);
    i0.ɵɵtext(51, "View all attendance ");
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(52, "svg", 19);
    i0.ɵɵelementEnd()();
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(53, "div", 20);
    i0.ɵɵrepeaterCreate(54, StudentAttendanceShortageComponent_Conditional_3_For_55_Template, 8, 7, "div", null, _forTrack0, false, StudentAttendanceShortageComponent_Conditional_3_ForEmpty_56_Template, 2, 0, "p");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(57, "aside", 21)(58, "h2");
    i0.ɵɵtext(59, "What you can do");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(60, "ol")(61, "li")(62, "span");
    i0.ɵɵtext(63, "1");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(64, "div")(65, "strong");
    i0.ɵɵtext(66, "Attend upcoming classes");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(67, "p");
    i0.ɵɵtext(68, "Be present in the next scheduled lectures.");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(69, "li")(70, "span");
    i0.ɵɵtext(71, "2");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(72, "div")(73, "strong");
    i0.ɵɵtext(74, "Review saved attendance");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(75, "p");
    i0.ɵɵtext(76, "Check the lecture records already marked.");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(77, "li")(78, "span");
    i0.ɵɵtext(79, "3");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(80, "div")(81, "strong");
    i0.ɵɵtext(82, "Report an incorrect record");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(83, "p");
    i0.ɵɵtext(84, "Open the subject record and submit a correction.");
    i0.ɵɵelementEnd()()()();
    i0.ɵɵelementStart(85, "a", 22);
    i0.ɵɵtext(86, "View subject attendance ");
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(87, "svg", 23);
    i0.ɵɵelementEnd();
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(88, "div", 24)(89, "strong");
    i0.ɵɵtext(90, "Next scheduled classes");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(91, "span");
    i0.ɵɵtext(92);
    i0.ɵɵelementEnd()()()();
} if (rf & 2) {
    let tmp_16_0;
    const subject_r3 = ctx;
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("subject", subject_r3.subjectName)("size", 38)("boxSize", 72);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1("", subject_r3.subjectName, " shortage");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(subject_r3.subjectCode || "Current subject");
    i0.ɵɵadvance();
    i0.ɵɵattribute("data-status", subject_r3.status);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r1.statusLabel(subject_r3.status));
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(subject_r3.presentLectures);
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(subject_r3.totalLectures);
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(ctx_r1.formatPercent(subject_r3.attendancePercentage));
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate1("", subject_r3.requiredAttendance, "%");
    i0.ɵɵadvance(12);
    i0.ɵɵtextInterpolate(subject_r3.message);
    i0.ɵɵadvance();
    i0.ɵɵconditional(subject_r3.status === "critical" ? 43 : subject_r3.status === "pending" ? 44 : 45);
    i0.ɵɵadvance(7);
    i0.ɵɵproperty("routerLink", i0.ɵɵpureFunction1(17, _c0, subject_r3.subjectId));
    i0.ɵɵadvance(4);
    i0.ɵɵrepeater(((tmp_16_0 = ctx_r1.detail()) == null ? null : tmp_16_0.records == null ? null : tmp_16_0.records.slice(0, 6)) || i0.ɵɵpureFunction0(19, _c1));
    i0.ɵɵadvance(31);
    i0.ɵɵproperty("routerLink", i0.ɵɵpureFunction1(20, _c0, subject_r3.subjectId));
    i0.ɵɵadvance(7);
    i0.ɵɵtextInterpolate1("", subject_r3.upcomingLectures, " published in the current schedule window");
} }
function StudentAttendanceShortageComponent_Conditional_4_For_106_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "article", 67)(1, "div", 70);
    i0.ɵɵelement(2, "erp-student-subject-icon", 71);
    i0.ɵɵelementStart(3, "span")(4, "strong");
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "small");
    i0.ɵɵtext(7);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(8, "span", 72);
    i0.ɵɵtext(9);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(10, "strong", 73);
    i0.ɵɵtext(11);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(12, "span", 74);
    i0.ɵɵtext(13);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(14, "p", 75);
    i0.ɵɵtext(15);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(16, "span", 10);
    i0.ɵɵtext(17);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(18, "a", 18);
    i0.ɵɵtext(19, "View details ");
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(20, "svg", 19);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const subject_r8 = ctx.$implicit;
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("subject", subject_r8.subjectName);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(subject_r8.subjectName);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(subject_r8.subjectCode || "Subject");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(subject_r8.totalLectures ? subject_r8.presentLectures + " / " + subject_r8.totalLectures : "Not started");
    i0.ɵɵadvance();
    i0.ɵɵattribute("data-status", subject_r8.status);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(subject_r8.totalLectures ? ctx_r1.formatPercent(subject_r8.attendancePercentage) : "\u2014");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1("", subject_r8.requiredAttendance, "%");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(subject_r8.message);
    i0.ɵɵadvance();
    i0.ɵɵattribute("data-status", subject_r8.status);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r1.statusLabel(subject_r8.status));
    i0.ɵɵadvance();
    i0.ɵɵproperty("routerLink", i0.ɵɵpureFunction1(12, _c2, subject_r8.subjectId));
    i0.ɵɵattribute("aria-label", "View shortage details for " + subject_r8.subjectName);
} }
function StudentAttendanceShortageComponent_Conditional_4_ForEmpty_107_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 68);
    i0.ɵɵtext(1, "No subjects match the current search and status filter.");
    i0.ɵɵelementEnd();
} }
function StudentAttendanceShortageComponent_Conditional_4_Conditional_108_Template(rf, ctx) { if (rf & 1) {
    const _r9 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 76);
    i0.ɵɵlistener("click", function StudentAttendanceShortageComponent_Conditional_4_Conditional_108_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r9); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.loadMore()); });
    i0.ɵɵtext(1);
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(2, "svg", 77);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate2("Load more (", ctx_r1.visibleSubjects().length, " of ", ctx_r1.filteredSubjects().length, ") ");
} }
function StudentAttendanceShortageComponent_Conditional_4_Template(rf, ctx) { if (rf & 1) {
    const _r5 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "section", 31)(1, "header", 32)(2, "div", 33);
    i0.ɵɵelement(3, "img", 34);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "div")(5, "nav")(6, "a", 35);
    i0.ɵɵtext(7, "Attendance");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "span");
    i0.ɵɵtext(9, "/");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(10, "Shortage & Risk");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(11, "h1");
    i0.ɵɵtext(12, "Shortage & Risk");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(13, "p");
    i0.ɵɵtext(14, "Subjects needing your attention.");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(15, "a", 36);
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(16, "svg", 37);
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(17, "span");
    i0.ɵɵtext(18, "View alerts");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(19, "b");
    i0.ɵɵtext(20);
    i0.ɵɵelementEnd();
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(21, "svg", 19);
    i0.ɵɵelementEnd()();
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(22, "section", 38)(23, "div", 39)(24, "span");
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(25, "svg", 40);
    i0.ɵɵelementEnd();
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(26, "strong");
    i0.ɵɵtext(27);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(28, "p");
    i0.ɵɵtext(29, "Below minimum");
    i0.ɵɵelementStart(30, "small");
    i0.ɵɵtext(31);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(32, "div", 41)(33, "span");
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(34, "svg", 40);
    i0.ɵɵelementEnd();
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(35, "strong");
    i0.ɵɵtext(36);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(37, "p");
    i0.ɵɵtext(38, "At risk");
    i0.ɵɵelementStart(39, "small");
    i0.ɵɵtext(40, "Close to the minimum");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(41, "div", 42)(42, "span");
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(43, "svg", 43);
    i0.ɵɵelementEnd();
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(44, "strong");
    i0.ɵɵtext(45);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(46, "p");
    i0.ɵɵtext(47, "Pending");
    i0.ɵɵelementStart(48, "small");
    i0.ɵɵtext(49, "Attendance not recorded");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(50, "div", 44)(51, "span");
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(52, "svg", 45);
    i0.ɵɵelementEnd();
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(53, "strong");
    i0.ɵɵtext(54);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(55, "p");
    i0.ɵɵtext(56, "On track");
    i0.ɵɵelementStart(57, "small");
    i0.ɵɵtext(58, "Safe for now");
    i0.ɵɵelementEnd()()()()();
    i0.ɵɵelementStart(59, "section", 46)(60, "div", 47)(61, "a", 48);
    i0.ɵɵtext(62, "Overview");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(63, "a", 49);
    i0.ɵɵtext(64, "Alerts");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(65, "div", 50)(66, "label");
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(67, "svg", 51);
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(68, "input", 52, 0);
    i0.ɵɵlistener("input", function StudentAttendanceShortageComponent_Conditional_4_Template_input_input_68_listener() { i0.ɵɵrestoreView(_r5); const searchInput_r6 = i0.ɵɵreference(69); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.setSearch(searchInput_r6.value)); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(70, "label", 53);
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(71, "svg", 54);
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(72, "select", 55, 1);
    i0.ɵɵlistener("change", function StudentAttendanceShortageComponent_Conditional_4_Template_select_change_72_listener() { i0.ɵɵrestoreView(_r5); const statusSelect_r7 = i0.ɵɵreference(73); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.setFilter(statusSelect_r7.value)); });
    i0.ɵɵelementStart(74, "option", 56);
    i0.ɵɵtext(75, "All statuses");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(76, "option", 57);
    i0.ɵɵtext(77, "Critical");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(78, "option", 58);
    i0.ɵɵtext(79, "At risk");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(80, "option", 59);
    i0.ɵɵtext(81, "Watch");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(82, "option", 60);
    i0.ɵɵtext(83, "Pending");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(84, "option", 61);
    i0.ɵɵtext(85, "On track");
    i0.ɵɵelementEnd()();
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(86, "svg", 62);
    i0.ɵɵelementEnd();
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(87, "button", 63);
    i0.ɵɵlistener("click", function StudentAttendanceShortageComponent_Conditional_4_Template_button_click_87_listener() { i0.ɵɵrestoreView(_r5); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.refresh()); });
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(88, "svg", 64);
    i0.ɵɵelementEnd()();
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(89, "div", 65)(90, "div", 66)(91, "span");
    i0.ɵɵtext(92, "Subject");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(93, "span");
    i0.ɵɵtext(94, "Attended / held");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(95, "span");
    i0.ɵɵtext(96, "Current");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(97, "span");
    i0.ɵɵtext(98, "Minimum");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(99, "span");
    i0.ɵɵtext(100, "What it means");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(101, "span");
    i0.ɵɵtext(102, "Status");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(103, "span");
    i0.ɵɵtext(104, "Action");
    i0.ɵɵelementEnd()();
    i0.ɵɵrepeaterCreate(105, StudentAttendanceShortageComponent_Conditional_4_For_106_Template, 21, 14, "article", 67, _forTrack1, false, StudentAttendanceShortageComponent_Conditional_4_ForEmpty_107_Template, 2, 0, "div", 68);
    i0.ɵɵelementEnd();
    i0.ɵɵconditionalCreate(108, StudentAttendanceShortageComponent_Conditional_4_Conditional_108_Template, 3, 2, "button", 69);
    i0.ɵɵelementStart(109, "footer");
    i0.ɵɵtext(110);
    i0.ɵɵpipe(111, "date");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const data_r10 = ctx;
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(20);
    i0.ɵɵtextInterpolate(data_r10.summary.belowMinimum + data_r10.summary.atRisk + data_r10.summary.pending);
    i0.ɵɵadvance(7);
    i0.ɵɵtextInterpolate(data_r10.summary.belowMinimum);
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate1("< ", data_r10.requiredAttendance, "% attendance");
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(data_r10.summary.atRisk);
    i0.ɵɵadvance(9);
    i0.ɵɵtextInterpolate(data_r10.summary.pending);
    i0.ɵɵadvance(9);
    i0.ɵɵtextInterpolate(data_r10.summary.onTrack);
    i0.ɵɵadvance(14);
    i0.ɵɵproperty("value", ctx_r1.search());
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("value", ctx_r1.filter());
    i0.ɵɵadvance(33);
    i0.ɵɵrepeater(ctx_r1.visibleSubjects());
    i0.ɵɵadvance(3);
    i0.ɵɵconditional(ctx_r1.visibleSubjects().length < ctx_r1.filteredSubjects().length ? 108 : -1);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1("Last synced ", i0.ɵɵpipeBind2(111, 11, data_r10.syncedAt, "medium"));
} }
export class StudentAttendanceShortageComponent {
    api = inject(ApiService);
    session = inject(StudentSessionService);
    route = inject(ActivatedRoute);
    destroyRef = inject(DestroyRef);
    risk = signal(null, ...(ngDevMode ? [{ debugName: "risk" }] : /* istanbul ignore next */ []));
    detail = signal(null, ...(ngDevMode ? [{ debugName: "detail" }] : /* istanbul ignore next */ []));
    loading = signal(true, ...(ngDevMode ? [{ debugName: "loading" }] : /* istanbul ignore next */ []));
    error = signal('', ...(ngDevMode ? [{ debugName: "error" }] : /* istanbul ignore next */ []));
    search = signal('', ...(ngDevMode ? [{ debugName: "search" }] : /* istanbul ignore next */ []));
    filter = signal('all', ...(ngDevMode ? [{ debugName: "filter" }] : /* istanbul ignore next */ []));
    visibleCount = signal(10, ...(ngDevMode ? [{ debugName: "visibleCount" }] : /* istanbul ignore next */ []));
    subjectId = signal(null, ...(ngDevMode ? [{ debugName: "subjectId" }] : /* istanbul ignore next */ []));
    selectedSubject = computed(() => this.risk()?.subjects.find((subject) => subject.subjectId === this.subjectId()), ...(ngDevMode ? [{ debugName: "selectedSubject" }] : /* istanbul ignore next */ []));
    filteredSubjects = computed(() => {
        const query = this.search().trim().toLowerCase();
        return (this.risk()?.subjects || []).filter((subject) => {
            const matchesQuery = !query || `${subject.subjectName} ${subject.subjectCode}`.toLowerCase().includes(query);
            const matchesFilter = this.filter() === 'all' || subject.status === this.filter();
            return matchesQuery && matchesFilter;
        });
    }, ...(ngDevMode ? [{ debugName: "filteredSubjects" }] : /* istanbul ignore next */ []));
    visibleSubjects = computed(() => this.filteredSubjects().slice(0, this.visibleCount()), ...(ngDevMode ? [{ debugName: "visibleSubjects" }] : /* istanbul ignore next */ []));
    constructor() {
        this.route.paramMap.pipe(takeUntilDestroyed(this.destroyRef)).subscribe((params) => {
            this.subjectId.set(params.get('subjectId'));
            this.detail.set(null);
            this.load();
        });
    }
    setSearch(value) {
        this.search.set(value);
        this.visibleCount.set(10);
    }
    setFilter(value) {
        this.filter.set(value);
        this.visibleCount.set(10);
    }
    loadMore() {
        this.visibleCount.update((count) => count + 10);
    }
    refresh() {
        if (!this.loading())
            this.load();
    }
    statusLabel(status) {
        return {
            critical: 'Critical',
            'at-risk': 'At risk',
            watch: 'Watch',
            pending: 'Pending',
            'on-track': 'On track',
        }[status];
    }
    formatPercent(value) {
        if (value === null)
            return '—';
        return `${new Intl.NumberFormat('en-IN', { maximumFractionDigits: 1 }).format(value)}%`;
    }
    load() {
        const token = this.session.token();
        if (!token) {
            this.error.set('Your student session is unavailable. Sign in again to continue.');
            this.loading.set(false);
            return;
        }
        this.loading.set(true);
        this.error.set('');
        this.api.studentAttendanceRisk(token).subscribe({
            next: (risk) => {
                this.risk.set(risk);
                const subjectId = this.subjectId();
                if (!subjectId) {
                    this.loading.set(false);
                    return;
                }
                this.api.studentSubjectAttendance(token, subjectId).subscribe({
                    next: (detail) => {
                        this.detail.set(detail);
                        this.loading.set(false);
                    },
                    error: () => {
                        this.error.set('This subject shortage detail is temporarily unavailable.');
                        this.loading.set(false);
                    },
                });
            },
            error: () => {
                this.error.set('Attendance shortage information is temporarily unavailable.');
                this.loading.set(false);
            },
        });
    }
    static ɵfac = function StudentAttendanceShortageComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || StudentAttendanceShortageComponent)(); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: StudentAttendanceShortageComponent, selectors: [["erp-student-attendance-shortage"]], decls: 5, vars: 1, consts: [["searchInput", ""], ["statusSelect", ""], [1, "risk-page"], ["role", "status", 1, "risk-state"], ["role", "alert", 1, "risk-state", "risk-state--error"], ["type", "button", 3, "click"], ["routerLink", "/student/attendance/shortage", 1, "risk-back"], ["lucideChevronLeft", "", "size", "18", "aria-hidden", "true"], [1, "risk-detail-heading"], [3, "subject", "size", "boxSize"], [1, "risk-status"], ["aria-label", "Subject attendance summary", 1, "risk-detail-metrics"], [1, "risk-detail-grid"], [1, "risk-detail-main"], [1, "risk-calculation"], ["lucideCalculator", "", "size", "22", "aria-hidden", "true"], [1, "risk-positive"], [1, "risk-records"], [3, "routerLink"], ["lucideChevronRight", "", "size", "17"], [1, "risk-records__table"], [1, "risk-actions"], [1, "risk-primary-link", 3, "routerLink"], ["lucideChevronRight", "", "size", "18"], [1, "risk-upcoming"], [1, "risk-equation"], [1, "risk-equation__result"], [1, "risk-note"], ["lucideInfo", "", "size", "17", "aria-hidden", "true"], ["lucideClock3", "", "size", "26", "aria-hidden", "true"], ["lucideCheck", "", "size", "28", "aria-hidden", "true"], [1, "risk-overview-hero"], [1, "risk-heading"], [1, "risk-heading__icon"], ["src", "/assets/student/attendance/shortage-alerts.webp", "width", "128", "height", "128", "alt", "", "aria-hidden", "true"], ["routerLink", "/student/attendance"], ["routerLink", "/student/attendance/alerts", 1, "risk-alert-link"], ["lucideBell", "", "size", "19"], ["aria-label", "Attendance risk summary", 1, "risk-summary"], ["data-tone", "danger"], ["lucideAlertTriangle", "", "size", "22"], ["data-tone", "warning"], ["data-tone", "pending"], ["lucideClock3", "", "size", "22"], ["data-tone", "success"], ["lucideCheck", "", "size", "22"], [1, "risk-panel"], [1, "risk-tabs"], ["routerLink", "/student/attendance/shortage", 1, "is-active"], ["routerLink", "/student/attendance/alerts"], [1, "risk-toolbar"], ["lucideSearch", "", "size", "18"], ["type", "search", "placeholder", "Search subject or code", 3, "input", "value"], [1, "risk-filter"], ["lucideListFilter", "", "size", "18"], [3, "change", "value"], ["value", "all"], ["value", "critical"], ["value", "at-risk"], ["value", "watch"], ["value", "pending"], ["value", "on-track"], ["lucideChevronDown", "", "size", "16"], ["type", "button", "aria-label", "Refresh attendance risk", 3, "click"], ["lucideRefreshCw", "", "size", "18"], ["role", "list", 1, "risk-list"], ["aria-hidden", "true", 1, "risk-list__head"], ["role", "listitem"], [1, "risk-empty"], ["type", "button", 1, "risk-load-more"], [1, "risk-subject"], [3, "subject"], [1, "risk-held"], [1, "risk-percent"], [1, "risk-minimum"], [1, "risk-meaning"], ["type", "button", 1, "risk-load-more", 3, "click"], ["lucideChevronDown", "", "size", "18"]], template: function StudentAttendanceShortageComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 2);
            i0.ɵɵconditionalCreate(1, StudentAttendanceShortageComponent_Conditional_1_Template, 3, 0, "div", 3)(2, StudentAttendanceShortageComponent_Conditional_2_Template, 5, 1, "div", 4)(3, StudentAttendanceShortageComponent_Conditional_3_Template, 93, 22)(4, StudentAttendanceShortageComponent_Conditional_4_Template, 112, 14);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            let tmp_0_0;
            i0.ɵɵadvance();
            i0.ɵɵconditional(ctx.loading() ? 1 : ctx.error() ? 2 : (tmp_0_0 = ctx.subjectId() && ctx.selectedSubject()) ? 3 : (tmp_0_0 = ctx.risk()) ? 4 : -1, tmp_0_0);
        } }, dependencies: [RouterLink,
            LucideAlertTriangle,
            LucideBell,
            LucideCalculator,
            LucideCheck,
            LucideChevronDown,
            LucideChevronLeft,
            LucideChevronRight,
            LucideClock3,
            LucideInfo,
            LucideListFilter,
            LucideRefreshCw,
            LucideSearch,
            StudentSubjectIconComponent,
            DatePipe], styles: ["[_nghost-%COMP%] { display: block; }\n.risk-page[_ngcontent-%COMP%] { display: grid; gap: var(--student-space-4); min-height: calc(100dvh - var(--student-header-height)); color: var(--student-color-text); }\n.risk-page[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%], .risk-page[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], .risk-page[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] { margin: 0; }\n.risk-page[_ngcontent-%COMP%]   button[_ngcontent-%COMP%], .risk-page[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .risk-page[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] { font: inherit; }\n.risk-overview-hero[_ngcontent-%COMP%] { display: contents; }\n.risk-heading[_ngcontent-%COMP%], .risk-detail-heading[_ngcontent-%COMP%] { display: flex; align-items: center; gap: var(--student-space-4); }\n.risk-heading__icon[_ngcontent-%COMP%], .risk-detail-heading[_ngcontent-%COMP%]   erp-student-subject-icon[_ngcontent-%COMP%] { flex: 0 0 auto; }\n.risk-heading__icon[_ngcontent-%COMP%] { display: grid; width: 76px; height: 76px; place-items: center; }\n.risk-heading__icon[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] { width: 76px; height: 76px; object-fit: contain; filter: drop-shadow(var(--student-shadow-card)); }\n.risk-heading[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%] { display: flex; gap: var(--student-space-2); margin-bottom: var(--student-space-1); color: var(--student-color-text-secondary); font-size: var(--student-text-caption); }\n.risk-heading[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], .risk-back[_ngcontent-%COMP%] { color: var(--student-color-primary-pressed); text-decoration: none; }\n.risk-heading[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%], .risk-detail-heading[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] { font-size: clamp(26px,3vw,38px); line-height: 1.08; }\n.risk-heading[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], .risk-detail-heading[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] { margin-top: var(--student-space-1); color: var(--student-color-text-secondary); }\n.risk-alert-link[_ngcontent-%COMP%] { display: flex; min-height: 44px; align-items: center; gap: var(--student-space-2); margin-left: auto; padding: 0 var(--student-space-4); border: 1px solid var(--student-color-border-strong); border-radius: var(--student-radius-control); color: var(--student-color-primary-pressed); background: var(--student-color-surface); text-decoration: none; font-weight: 750; }\n.risk-alert-link[_ngcontent-%COMP%]   b[_ngcontent-%COMP%] { display: grid; min-width: 22px; height: 22px; place-items: center; border-radius: var(--student-radius-pill); color: var(--student-color-text-inverse); background: var(--student-color-danger); font-size: var(--student-text-caption); }\n.risk-summary[_ngcontent-%COMP%] { display: grid; grid-template-columns: repeat(4,minmax(0,1fr)); overflow: hidden; border: 1px solid var(--student-color-border); border-radius: var(--student-radius-card); background: var(--student-color-surface); box-shadow: var(--student-attendance-shadow); }\n.risk-summary[_ngcontent-%COMP%] > div[_ngcontent-%COMP%] { display: grid; grid-template-columns: auto auto 1fr; align-items: center; gap: var(--student-space-3); min-height: 92px; padding: var(--student-space-4) var(--student-space-5); }\n.risk-summary[_ngcontent-%COMP%] > div[_ngcontent-%COMP%] + div[_ngcontent-%COMP%] { border-left: 1px solid var(--student-color-divider); }\n.risk-summary[_ngcontent-%COMP%] > div[_ngcontent-%COMP%] > span[_ngcontent-%COMP%] { display: grid; width: 44px; height: 44px; place-items: center; border-radius: var(--student-radius-pill); }\n.risk-summary[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] { font-size: 28px; }\n.risk-summary[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] { font-weight: 800; }\n.risk-summary[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] { display: block; margin-top: 2px; color: var(--student-color-text-secondary); font-size: var(--student-text-caption); font-weight: 500; }\n.risk-summary[_ngcontent-%COMP%]   [data-tone='danger'][_ngcontent-%COMP%] > span[_ngcontent-%COMP%], .risk-status[data-status='critical'][_ngcontent-%COMP%], .risk-percent[data-status='critical'][_ngcontent-%COMP%] { color: var(--student-color-danger); background: var(--student-color-danger-soft); }\n.risk-summary[_ngcontent-%COMP%]   [data-tone='warning'][_ngcontent-%COMP%] > span[_ngcontent-%COMP%], .risk-status[data-status='at-risk'][_ngcontent-%COMP%], .risk-status[data-status='watch'][_ngcontent-%COMP%], .risk-percent[data-status='at-risk'][_ngcontent-%COMP%], .risk-percent[data-status='watch'][_ngcontent-%COMP%] { color: var(--student-color-warning); background: var(--student-color-warning-soft); }\n.risk-summary[_ngcontent-%COMP%]   [data-tone='pending'][_ngcontent-%COMP%] > span[_ngcontent-%COMP%], .risk-status[data-status='pending'][_ngcontent-%COMP%], .risk-percent[data-status='pending'][_ngcontent-%COMP%] { color: var(--student-color-text-secondary); background: var(--student-fee-neutral-soft); }\n.risk-summary[_ngcontent-%COMP%]   [data-tone='success'][_ngcontent-%COMP%] > span[_ngcontent-%COMP%], .risk-status[data-status='on-track'][_ngcontent-%COMP%], .risk-percent[data-status='on-track'][_ngcontent-%COMP%] { color: var(--student-color-success); background: var(--student-color-success-soft); }\n.risk-panel[_ngcontent-%COMP%], .risk-calculation[_ngcontent-%COMP%], .risk-records[_ngcontent-%COMP%], .risk-actions[_ngcontent-%COMP%], .risk-detail-metrics[_ngcontent-%COMP%] { border: 1px solid var(--student-color-border); border-radius: var(--student-radius-card); background: var(--student-color-surface); box-shadow: var(--student-attendance-shadow); }\n.risk-tabs[_ngcontent-%COMP%] { display: flex; width: max-content; padding: var(--student-space-2) var(--student-space-3) 0; }\n.risk-tabs[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] { min-width: 110px; padding: var(--student-space-3) var(--student-space-5); border-bottom: 3px solid transparent; color: var(--student-color-text-secondary); text-align: center; text-decoration: none; font-weight: 750; }\n.risk-tabs[_ngcontent-%COMP%]   a.is-active[_ngcontent-%COMP%] { border-color: var(--student-color-primary); color: var(--student-color-primary-pressed); }\n.risk-toolbar[_ngcontent-%COMP%] { display: grid; grid-template-columns: minmax(240px,1fr) minmax(190px,240px) 44px; gap: var(--student-space-3); padding: var(--student-space-3); border-top: 1px solid var(--student-color-divider); }\n.risk-toolbar[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] { display: flex; height: 42px; align-items: center; gap: var(--student-space-2); padding: 0 var(--student-space-3); border: 1px solid var(--student-color-border); border-radius: var(--student-radius-control); color: var(--student-color-text-secondary); background: var(--student-color-surface-raised); }\n.risk-toolbar[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .risk-toolbar[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] { width: 100%; min-width: 0; border: 0; outline: 0; color: var(--student-color-text); background: transparent; }\n.risk-toolbar[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] { display: grid; border: 1px solid var(--student-color-border); border-radius: var(--student-radius-control); color: var(--student-color-primary-pressed); background: var(--student-color-surface-raised); place-items: center; cursor: pointer; }\n.risk-filter[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] { appearance: none; }\n.risk-list[_ngcontent-%COMP%] { border-top: 1px solid var(--student-color-divider); }\n.risk-list__head[_ngcontent-%COMP%], .risk-list[_ngcontent-%COMP%]   article[_ngcontent-%COMP%] { display: grid; grid-template-columns: 1.5fr .75fr .55fr .55fr 1.8fr .75fr .7fr; align-items: center; gap: var(--student-space-3); padding: var(--student-space-3) var(--student-space-4); }\n.risk-list__head[_ngcontent-%COMP%] { color: var(--student-color-text-secondary); background: var(--student-color-surface-soft); font-size: var(--student-text-caption); font-weight: 750; }\n.risk-list[_ngcontent-%COMP%]   article[_ngcontent-%COMP%] + article[_ngcontent-%COMP%] { border-top: 1px solid var(--student-color-divider); }\n.risk-subject[_ngcontent-%COMP%] { display: flex; min-width: 0; align-items: center; gap: var(--student-space-3); }\n.risk-subject[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] { min-width: 0; }\n.risk-subject[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%], .risk-subject[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] { display: block; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }\n.risk-subject[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] { margin-top: 2px; color: var(--student-color-text-secondary); font-size: var(--student-text-caption); }\n.student-subject-icon[_ngcontent-%COMP%] { display: grid; width: 42px; height: 42px; place-items: center; border-radius: var(--student-radius-control); color: var(--student-color-primary-pressed); background: var(--student-color-primary-soft); }\n.student-subject-icon[data-tone='data'][_ngcontent-%COMP%], .student-subject-icon[data-tone='science'][_ngcontent-%COMP%] { color: var(--student-color-success); background: var(--student-color-success-soft); }\n.student-subject-icon[data-tone='math'][_ngcontent-%COMP%], .student-subject-icon[data-tone='language'][_ngcontent-%COMP%] { color: var(--student-color-warning); background: var(--student-color-warning-soft); }\n.risk-percent[_ngcontent-%COMP%] { width: max-content; padding: 3px 7px; border-radius: var(--student-radius-pill); }\n.risk-meaning[_ngcontent-%COMP%] { color: var(--student-color-text-secondary); font-size: var(--student-text-label); }\n.risk-status[_ngcontent-%COMP%] { width: max-content; padding: 5px 10px; border-radius: var(--student-radius-pill); font-size: var(--student-text-caption); font-style: normal; font-weight: 750; }\n.risk-list[_ngcontent-%COMP%]   article[_ngcontent-%COMP%] > a[_ngcontent-%COMP%], .risk-records[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] { display: inline-flex; align-items: center; gap: var(--student-space-1); color: var(--student-color-primary-pressed); text-decoration: none; font-size: var(--student-text-label); font-weight: 750; }\n.risk-panel[_ngcontent-%COMP%]   footer[_ngcontent-%COMP%] { padding: var(--student-space-3) var(--student-space-4); border-top: 1px solid var(--student-color-divider); color: var(--student-color-text-muted); font-size: var(--student-text-caption); text-align: right; }\n.risk-empty[_ngcontent-%COMP%], .risk-state[_ngcontent-%COMP%] { padding: var(--student-space-8); color: var(--student-color-text-secondary); text-align: center; }\n.risk-load-more[_ngcontent-%COMP%] { display: none; }\n.risk-state[_ngcontent-%COMP%] { display: flex; min-height: 280px; align-items: center; justify-content: center; gap: var(--student-space-3); border: 1px solid var(--student-color-border); border-radius: var(--student-radius-card); background: var(--student-color-surface); }\n.risk-state[_ngcontent-%COMP%] > span[_ngcontent-%COMP%] { width: 24px; height: 24px; border: 3px solid var(--student-color-border); border-top-color: var(--student-color-primary); border-radius: 50%; animation: _ngcontent-%COMP%_risk-spin .8s linear infinite; }\n.risk-state--error[_ngcontent-%COMP%] { flex-direction: column; color: var(--student-color-danger); }\n.risk-state[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] { padding: var(--student-space-2) var(--student-space-4); border: 0; border-radius: var(--student-radius-control); color: var(--student-color-text-inverse); background: var(--student-color-primary); }\n@keyframes _ngcontent-%COMP%_risk-spin { to { transform: rotate(360deg); } }\n.risk-back[_ngcontent-%COMP%] { display: inline-flex; width: max-content; align-items: center; gap: var(--student-space-1); font-weight: 750; }\n.risk-detail-heading[_ngcontent-%COMP%]   .risk-status[_ngcontent-%COMP%] { margin-left: auto; }\n.risk-detail-metrics[_ngcontent-%COMP%] { display: grid; grid-template-columns: repeat(4,1fr); overflow: hidden; }\n.risk-detail-metrics[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] { display: grid; gap: var(--student-space-1); min-height: 94px; place-content: center; text-align: center; }\n.risk-detail-metrics[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] + div[_ngcontent-%COMP%] { border-left: 1px solid var(--student-color-divider); }\n.risk-detail-metrics[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] { font-size: 28px; }\n.risk-detail-metrics[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] { color: var(--student-color-text-secondary); }\n.risk-detail-grid[_ngcontent-%COMP%] { display: grid; grid-template-columns: minmax(0,1.8fr) minmax(300px,.8fr); gap: var(--student-space-4); align-items: start; }\n.risk-detail-main[_ngcontent-%COMP%] { display: grid; gap: var(--student-space-4); }\n.risk-calculation[_ngcontent-%COMP%], .risk-records[_ngcontent-%COMP%], .risk-actions[_ngcontent-%COMP%] { padding: var(--student-space-4); }\n.risk-calculation[_ngcontent-%COMP%] > header[_ngcontent-%COMP%] { display: flex; gap: var(--student-space-3); }\n.risk-calculation[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], .risk-records[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], .risk-actions[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] { font-size: var(--student-text-h2); }\n.risk-calculation[_ngcontent-%COMP%]   header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] { margin-top: 3px; color: var(--student-color-text-secondary); }\n.risk-equation[_ngcontent-%COMP%] { display: grid; grid-template-columns: 1fr auto 1fr auto 1fr; align-items: center; gap: var(--student-space-4); margin-top: var(--student-space-4); }\n.risk-equation[_ngcontent-%COMP%] > span[_ngcontent-%COMP%] { display: grid; min-height: 94px; place-content: center; border-radius: var(--student-radius-control); background: var(--student-color-surface-soft); text-align: center; }\n.risk-equation[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] { font-size: 24px; }\n.risk-equation[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] { margin-top: var(--student-space-1); color: var(--student-color-text-secondary); }\n.risk-equation__result[_ngcontent-%COMP%] { color: var(--student-color-success); background: var(--student-color-success-soft)!important; }\n.risk-note[_ngcontent-%COMP%] { display: flex; align-items: center; gap: var(--student-space-2); margin-top: var(--student-space-3)!important; padding: var(--student-space-3); border-radius: var(--student-radius-control); color: var(--student-color-text-secondary); background: var(--student-color-primary-subtle); }\n.risk-positive[_ngcontent-%COMP%] { display: flex; align-items: center; gap: var(--student-space-4); margin-top: var(--student-space-4); padding: var(--student-space-5); border-radius: var(--student-radius-control); color: var(--student-color-success); background: var(--student-color-success-soft); }\n.risk-positive[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] { margin-top: 3px; color: var(--student-color-text-secondary); }\n.risk-records[_ngcontent-%COMP%]   header[_ngcontent-%COMP%] { display: flex; align-items: center; justify-content: space-between; gap: var(--student-space-3); }\n.risk-records__table[_ngcontent-%COMP%] { margin-top: var(--student-space-3); border: 1px solid var(--student-color-divider); border-radius: var(--student-radius-control); overflow: hidden; }\n.risk-records__table[_ngcontent-%COMP%] > div[_ngcontent-%COMP%] { display: grid; grid-template-columns: 1fr 1fr .7fr; align-items: center; padding: var(--student-space-3); }\n.risk-records__table[_ngcontent-%COMP%] > div[_ngcontent-%COMP%] + div[_ngcontent-%COMP%] { border-top: 1px solid var(--student-color-divider); }\n.risk-records__table[_ngcontent-%COMP%]   em[_ngcontent-%COMP%] { width: max-content; padding: 4px 10px; border-radius: var(--student-radius-pill); font-style: normal; }\n.risk-records__table[_ngcontent-%COMP%]   em[data-status='present'][_ngcontent-%COMP%] { color: var(--student-color-success); background: var(--student-color-success-soft); }\n.risk-records__table[_ngcontent-%COMP%]   em[data-status='absent'][_ngcontent-%COMP%] { color: var(--student-color-danger); background: var(--student-color-danger-soft); }\n.risk-actions[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%] { display: grid; gap: var(--student-space-4); margin: var(--student-space-4) 0; padding: 0; list-style: none; }\n.risk-actions[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] { display: flex; gap: var(--student-space-3); }\n.risk-actions[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] > span[_ngcontent-%COMP%] { display: grid; width: 34px; height: 34px; flex: 0 0 auto; place-items: center; border-radius: var(--student-radius-pill); color: var(--student-color-primary-pressed); background: var(--student-color-primary-soft); font-weight: 800; }\n.risk-actions[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] { margin-top: 2px; color: var(--student-color-text-secondary); font-size: var(--student-text-label); }\n.risk-primary-link[_ngcontent-%COMP%] { display: flex; min-height: 44px; align-items: center; justify-content: center; gap: var(--student-space-2); border-radius: var(--student-radius-control); color: var(--student-color-text-inverse); background: var(--student-color-primary); text-decoration: none; font-weight: 800; }\n.risk-upcoming[_ngcontent-%COMP%] { display: grid; gap: 3px; margin-top: var(--student-space-4); padding-top: var(--student-space-4); border-top: 1px solid var(--student-color-divider); }\n.risk-upcoming[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] { color: var(--student-color-text-secondary); font-size: var(--student-text-label); }\n\n@media (max-width: 1100px) { .risk-list__head[_ngcontent-%COMP%], .risk-list[_ngcontent-%COMP%]   article[_ngcontent-%COMP%] { grid-template-columns: 1.5fr .75fr .6fr 1.5fr .7fr; }.risk-minimum[_ngcontent-%COMP%], .risk-list__head[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(4), .risk-status[_ngcontent-%COMP%], .risk-list__head[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(6){display:none}.risk-detail-grid[_ngcontent-%COMP%]{grid-template-columns:1fr} }\n@media (max-width: 700px) {\n  .risk-page[_ngcontent-%COMP%] { min-height: calc(100dvh - var(--student-mobile-header-height)); gap: var(--student-space-3); }\n  .risk-heading[_ngcontent-%COMP%] { align-items: flex-start; flex-wrap: wrap; }.risk-heading__icon[_ngcontent-%COMP%]{width:52px;height:52px}.risk-heading[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%], .risk-detail-heading[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-size:26px}.risk-heading[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:var(--student-text-label)}.risk-alert-link[_ngcontent-%COMP%]{width:100%;justify-content:center;margin:0}\n  .risk-summary[_ngcontent-%COMP%] { grid-template-columns: repeat(2,1fr); }.risk-summary[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{grid-template-columns:auto 1fr;min-height:86px;padding:var(--student-space-3)}.risk-summary[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(3){border-left:0;border-top:1px solid var(--student-color-divider)}.risk-summary[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(4){border-top:1px solid var(--student-color-divider)}.risk-summary[_ngcontent-%COMP%] > div[_ngcontent-%COMP%] > span[_ngcontent-%COMP%]{grid-row:1/3}.risk-summary[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{font-size:24px}.risk-summary[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:var(--student-text-label)}\n  .risk-tabs[_ngcontent-%COMP%] { width:100%;padding:0 }.risk-tabs[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{flex:1}.risk-toolbar[_ngcontent-%COMP%]{grid-template-columns:1fr 52px}.risk-toolbar[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]:first-child{grid-column:1/-1}.risk-toolbar[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{min-height:44px}\n  .risk-list__head[_ngcontent-%COMP%]{display:none}.risk-list[_ngcontent-%COMP%]{display:grid;gap:var(--student-space-3);padding:var(--student-space-3);border-top:1px solid var(--student-color-divider);background:var(--student-color-page-accent)}.risk-list[_ngcontent-%COMP%]   article[_ngcontent-%COMP%]{position:relative;grid-template-columns:1fr auto;gap:var(--student-space-2);padding:var(--student-space-4);border:1px solid var(--student-color-border)!important;border-radius:var(--student-radius-card);background:var(--student-color-surface)}.risk-subject[_ngcontent-%COMP%]{grid-column:1/-1}.risk-held[_ngcontent-%COMP%]{grid-column:1}.risk-percent[_ngcontent-%COMP%]{grid-column:2;grid-row:2}.risk-meaning[_ngcontent-%COMP%]{grid-column:1/-1}.risk-list[_ngcontent-%COMP%]   article[_ngcontent-%COMP%] > a[_ngcontent-%COMP%]{grid-column:1/-1;justify-content:flex-end;padding-top:var(--student-space-2);border-top:1px solid var(--student-color-divider)}.risk-load-more[_ngcontent-%COMP%]{display:flex;width:calc(100% - 24px);min-height:46px;align-items:center;justify-content:center;gap:var(--student-space-2);margin:0 auto var(--student-space-3);border:1px solid var(--student-color-border-strong);border-radius:var(--student-radius-control);color:var(--student-color-primary-pressed);background:var(--student-color-surface);font-weight:800}.risk-panel[_ngcontent-%COMP%]   footer[_ngcontent-%COMP%]{text-align:left}\n  .risk-detail-heading[_ngcontent-%COMP%]{align-items:flex-start}.risk-detail-heading[_ngcontent-%COMP%]   .risk-status[_ngcontent-%COMP%]{margin-left:0}.risk-detail-heading[_ngcontent-%COMP%]{display:grid;grid-template-columns:auto 1fr}.risk-detail-heading[_ngcontent-%COMP%] > .risk-status[_ngcontent-%COMP%]{grid-column:2}.risk-detail-metrics[_ngcontent-%COMP%]{grid-template-columns:repeat(2,1fr)}.risk-detail-metrics[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(3){border-left:0;border-top:1px solid var(--student-color-divider)}.risk-detail-metrics[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(4){border-top:1px solid var(--student-color-divider)}.risk-detail-metrics[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{font-size:24px}.risk-equation[_ngcontent-%COMP%]{grid-template-columns:1fr auto 1fr}.risk-equation[_ngcontent-%COMP%] > b[_ngcontent-%COMP%]:nth-of-type(2){display:none}.risk-equation__result[_ngcontent-%COMP%]{grid-column:1/-1}.risk-records[_ngcontent-%COMP%]   header[_ngcontent-%COMP%]{align-items:flex-start;flex-direction:column}.risk-records__table[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{grid-template-columns:1fr auto}.risk-records__table[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(2){display:none}\n}\n\n@media (max-width: 700px) {\n  .risk-heading[_ngcontent-%COMP%] { display: grid; grid-template-columns: auto minmax(0, 1fr); align-items: start; }\n  .risk-alert-link[_ngcontent-%COMP%] { grid-column: 1 / -1; }\n  .risk-detail-heading[_ngcontent-%COMP%]    > .risk-status[_ngcontent-%COMP%] { display: inline-flex; }\n}\n\n\n@media (max-width: 700px) {\n  .risk-overview-hero[_ngcontent-%COMP%] {\n    display: grid;\n    gap: var(--student-space-4);\n    padding: var(--student-space-4);\n    border: 1px solid var(--student-color-border);\n    border-radius: var(--student-radius-card);\n    background: var(--student-color-surface);\n    box-shadow: var(--student-attendance-shadow);\n  }\n\n  .risk-overview-hero[_ngcontent-%COMP%]   .risk-heading[_ngcontent-%COMP%] {\n    grid-template-columns: 78px minmax(0, 1fr) 56px;\n    align-items: center;\n    gap: var(--student-space-3);\n  }\n\n  .risk-heading__icon[_ngcontent-%COMP%], \n   .risk-heading__icon[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 78px;\n    height: 78px;\n  }\n\n  .risk-heading[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%] { display: none; }\n\n  .risk-overview-hero[_ngcontent-%COMP%]   .risk-alert-link[_ngcontent-%COMP%] {\n    position: relative;\n    display: grid;\n    width: 56px;\n    height: 64px;\n    min-height: 0;\n    grid-column: auto;\n    grid-template-columns: 1fr;\n    place-items: center;\n    gap: 0;\n    margin: 0;\n    padding: var(--student-space-1);\n  }\n\n  .risk-alert-link[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%], \n   .risk-alert-link[_ngcontent-%COMP%]    > svg[_ngcontent-%COMP%]:last-child { display: none; }\n  .risk-alert-link[_ngcontent-%COMP%]   b[_ngcontent-%COMP%] { position: absolute; top: -8px; right: -8px; }\n\n  .risk-overview-hero[_ngcontent-%COMP%]   .risk-summary[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(4, minmax(0, 1fr));\n    border: 0;\n    border-radius: 0;\n    box-shadow: none;\n  }\n\n  .risk-overview-hero[_ngcontent-%COMP%]   .risk-summary[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n    display: grid;\n    min-height: 96px;\n    grid-template-columns: 1fr;\n    place-content: center;\n    gap: var(--student-space-1);\n    padding: var(--student-space-2);\n    text-align: center;\n  }\n\n  .risk-overview-hero[_ngcontent-%COMP%]   .risk-summary[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]    + div[_ngcontent-%COMP%] { border-left: 1px solid var(--student-color-divider); }\n  .risk-overview-hero[_ngcontent-%COMP%]   .risk-summary[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:nth-child(3), \n   .risk-overview-hero[_ngcontent-%COMP%]   .risk-summary[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:nth-child(4) { border-top: 0; }\n  .risk-overview-hero[_ngcontent-%COMP%]   .risk-summary[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%], \n   .risk-overview-hero[_ngcontent-%COMP%]   .risk-summary[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] { display: none; }\n  .risk-overview-hero[_ngcontent-%COMP%]   .risk-summary[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] { font-size: 24px; }\n  .risk-overview-hero[_ngcontent-%COMP%]   .risk-summary[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] { font-size: var(--student-text-caption); }\n\n  .risk-detail-metrics[_ngcontent-%COMP%] { grid-template-columns: repeat(4, minmax(0, 1fr)); }\n  .risk-detail-metrics[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] { min-height: 108px; padding: var(--student-space-2); }\n  .risk-detail-metrics[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(3), \n   .risk-detail-metrics[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(4) { border-top: 0; }\n  .risk-detail-metrics[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] { font-size: 22px; }\n  .risk-detail-metrics[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] { font-size: var(--student-text-caption); }\n}\n\n@media (max-width: 430px) {\n  .risk-overview-hero[_ngcontent-%COMP%] { padding: var(--student-space-3); }\n  .risk-overview-hero[_ngcontent-%COMP%]   .risk-heading[_ngcontent-%COMP%] { grid-template-columns: 64px minmax(0, 1fr) 48px; }\n  .risk-heading__icon[_ngcontent-%COMP%], \n   .risk-heading__icon[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] { width: 64px; height: 64px; }\n  .risk-overview-hero[_ngcontent-%COMP%]   .risk-alert-link[_ngcontent-%COMP%] { width: 48px; height: 54px; }\n  .risk-overview-hero[_ngcontent-%COMP%]   .risk-summary[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] { font-size: 21px; }\n  .risk-detail-metrics[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] { font-size: 19px; }\n}"], changeDetection: 0 });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(StudentAttendanceShortageComponent, [{
        type: Component,
        args: [{ selector: 'erp-student-attendance-shortage', imports: [
                    DatePipe,
                    RouterLink,
                    LucideAlertTriangle,
                    LucideBell,
                    LucideCalculator,
                    LucideCheck,
                    LucideChevronDown,
                    LucideChevronLeft,
                    LucideChevronRight,
                    LucideClock3,
                    LucideInfo,
                    LucideListFilter,
                    LucideRefreshCw,
                    LucideSearch,
                    StudentSubjectIconComponent,
                ], changeDetection: ChangeDetectionStrategy.OnPush, template: "<div class=\"risk-page\">\n  @if (loading()) {\n    <div class=\"risk-state\" role=\"status\"><span></span>Calculating attendance risk\u2026</div>\n  } @else if (error()) {\n    <div class=\"risk-state risk-state--error\" role=\"alert\">\n      <p>{{ error() }}</p><button type=\"button\" (click)=\"refresh()\">Try again</button>\n    </div>\n  } @else if (subjectId() && selectedSubject(); as subject) {\n    <a class=\"risk-back\" routerLink=\"/student/attendance/shortage\">\n      <svg lucideChevronLeft size=\"18\" aria-hidden=\"true\"></svg> Back to Shortage & Risk\n    </a>\n    <header class=\"risk-detail-heading\">\n      <erp-student-subject-icon [subject]=\"subject.subjectName\" [size]=\"38\" [boxSize]=\"72\" />\n      <div><h1>{{ subject.subjectName }} shortage</h1><p>{{ subject.subjectCode || 'Current subject' }}</p></div>\n      <span class=\"risk-status\" [attr.data-status]=\"subject.status\">{{ statusLabel(subject.status) }}</span>\n    </header>\n\n    <section class=\"risk-detail-metrics\" aria-label=\"Subject attendance summary\">\n      <div><strong>{{ subject.presentLectures }}</strong><span>Classes attended</span></div>\n      <div><strong>{{ subject.totalLectures }}</strong><span>Classes held</span></div>\n      <div><strong>{{ formatPercent(subject.attendancePercentage) }}</strong><span>Current attendance</span></div>\n      <div><strong>{{ subject.requiredAttendance }}%</strong><span>University minimum</span></div>\n    </section>\n\n    <div class=\"risk-detail-grid\">\n      <div class=\"risk-detail-main\">\n        <section class=\"risk-calculation\">\n          <header><svg lucideCalculator size=\"22\" aria-hidden=\"true\"></svg><div><h2>Shortage calculation</h2><p>{{ subject.message }}</p></div></header>\n          @if (subject.status === 'critical') {\n            <div class=\"risk-equation\">\n              <span><strong>{{ subject.presentLectures }} / {{ subject.totalLectures }}</strong><small>Current</small></span>\n              <b>+</b>\n              <span><strong>{{ subject.classesToTarget }} / {{ subject.classesToTarget }}</strong><small>Next classes present</small></span>\n              <b>=</b>\n              <span class=\"risk-equation__result\"><strong>{{ subject.presentLectures + (subject.classesToTarget || 0) }} / {{ subject.totalLectures + (subject.classesToTarget || 0) }}</strong><small>{{ subject.requiredAttendance }}% target</small></span>\n            </div>\n            <p class=\"risk-note\"><svg lucideInfo size=\"17\" aria-hidden=\"true\"></svg>\n              @if (subject.canReachTarget) { The published schedule has enough classes to reach the minimum. }\n              @else { Even perfect attendance reaches {{ formatPercent(subject.bestPossibleAttendance) }} within the current published schedule. }\n            </p>\n          } @else if (subject.status === 'pending') {\n            <div class=\"risk-positive\"><svg lucideClock3 size=\"26\" aria-hidden=\"true\"></svg><div><strong>Waiting for the first saved attendance</strong><p>No shortage is calculated until faculty records a class.</p></div></div>\n          } @else {\n            <div class=\"risk-positive\"><svg lucideCheck size=\"28\" aria-hidden=\"true\"></svg><div><strong>Target reached</strong><p>{{ subject.message }}</p></div></div>\n          }\n        </section>\n\n        <section class=\"risk-records\">\n          <header><h2>Recent attendance</h2><a [routerLink]=\"['/student/attendance/subjects', subject.subjectId]\">View all attendance <svg lucideChevronRight size=\"17\"></svg></a></header>\n          <div class=\"risk-records__table\">\n            @for (record of detail()?.records?.slice(0, 6) || []; track record.recordId) {\n              <div><span>{{ record.date | date: 'dd MMM yyyy' }}</span><span>{{ record.startTime || 'Time not set' }}</span><em [attr.data-status]=\"record.status\">{{ record.status === 'present' ? 'Present' : 'Absent' }}</em></div>\n            } @empty { <p>No attendance records have been saved for this subject.</p> }\n          </div>\n        </section>\n      </div>\n\n      <aside class=\"risk-actions\">\n        <h2>What you can do</h2>\n        <ol>\n          <li><span>1</span><div><strong>Attend upcoming classes</strong><p>Be present in the next scheduled lectures.</p></div></li>\n          <li><span>2</span><div><strong>Review saved attendance</strong><p>Check the lecture records already marked.</p></div></li>\n          <li><span>3</span><div><strong>Report an incorrect record</strong><p>Open the subject record and submit a correction.</p></div></li>\n        </ol>\n        <a class=\"risk-primary-link\" [routerLink]=\"['/student/attendance/subjects', subject.subjectId]\">View subject attendance <svg lucideChevronRight size=\"18\"></svg></a>\n        <div class=\"risk-upcoming\"><strong>Next scheduled classes</strong><span>{{ subject.upcomingLectures }} published in the current schedule window</span></div>\n      </aside>\n    </div>\n  } @else if (risk(); as data) {\n    <section class=\"risk-overview-hero\">\n      <header class=\"risk-heading\">\n        <div class=\"risk-heading__icon\"><img src=\"/assets/student/attendance/shortage-alerts.webp\" width=\"128\" height=\"128\" alt=\"\" aria-hidden=\"true\" /></div>\n        <div><nav><a routerLink=\"/student/attendance\">Attendance</a><span>/</span>Shortage & Risk</nav><h1>Shortage & Risk</h1><p>Subjects needing your attention.</p></div>\n        <a class=\"risk-alert-link\" routerLink=\"/student/attendance/alerts\"><svg lucideBell size=\"19\"></svg><span>View alerts</span><b>{{ data.summary.belowMinimum + data.summary.atRisk + data.summary.pending }}</b><svg lucideChevronRight size=\"17\"></svg></a>\n      </header>\n\n      <section class=\"risk-summary\" aria-label=\"Attendance risk summary\">\n        <div data-tone=\"danger\"><span><svg lucideAlertTriangle size=\"22\"></svg></span><strong>{{ data.summary.belowMinimum }}</strong><p>Below minimum<small>&lt; {{ data.requiredAttendance }}% attendance</small></p></div>\n        <div data-tone=\"warning\"><span><svg lucideAlertTriangle size=\"22\"></svg></span><strong>{{ data.summary.atRisk }}</strong><p>At risk<small>Close to the minimum</small></p></div>\n        <div data-tone=\"pending\"><span><svg lucideClock3 size=\"22\"></svg></span><strong>{{ data.summary.pending }}</strong><p>Pending<small>Attendance not recorded</small></p></div>\n        <div data-tone=\"success\"><span><svg lucideCheck size=\"22\"></svg></span><strong>{{ data.summary.onTrack }}</strong><p>On track<small>Safe for now</small></p></div>\n      </section>\n    </section>\n\n    <section class=\"risk-panel\">\n      <div class=\"risk-tabs\"><a class=\"is-active\" routerLink=\"/student/attendance/shortage\">Overview</a><a routerLink=\"/student/attendance/alerts\">Alerts</a></div>\n      <div class=\"risk-toolbar\">\n        <label><svg lucideSearch size=\"18\"></svg><input #searchInput type=\"search\" placeholder=\"Search subject or code\" [value]=\"search()\" (input)=\"setSearch(searchInput.value)\" /></label>\n        <label class=\"risk-filter\"><svg lucideListFilter size=\"18\"></svg><select #statusSelect [value]=\"filter()\" (change)=\"setFilter(statusSelect.value)\"><option value=\"all\">All statuses</option><option value=\"critical\">Critical</option><option value=\"at-risk\">At risk</option><option value=\"watch\">Watch</option><option value=\"pending\">Pending</option><option value=\"on-track\">On track</option></select><svg lucideChevronDown size=\"16\"></svg></label>\n        <button type=\"button\" aria-label=\"Refresh attendance risk\" (click)=\"refresh()\"><svg lucideRefreshCw size=\"18\"></svg></button>\n      </div>\n\n      <div class=\"risk-list\" role=\"list\">\n        <div class=\"risk-list__head\" aria-hidden=\"true\"><span>Subject</span><span>Attended / held</span><span>Current</span><span>Minimum</span><span>What it means</span><span>Status</span><span>Action</span></div>\n        @for (subject of visibleSubjects(); track subject.subjectId) {\n          <article role=\"listitem\">\n            <div class=\"risk-subject\"><erp-student-subject-icon [subject]=\"subject.subjectName\" /><span><strong>{{ subject.subjectName }}</strong><small>{{ subject.subjectCode || 'Subject' }}</small></span></div>\n            <span class=\"risk-held\">{{ subject.totalLectures ? subject.presentLectures + ' / ' + subject.totalLectures : 'Not started' }}</span>\n            <strong class=\"risk-percent\" [attr.data-status]=\"subject.status\">{{ subject.totalLectures ? formatPercent(subject.attendancePercentage) : '\u2014' }}</strong>\n            <span class=\"risk-minimum\">{{ subject.requiredAttendance }}%</span>\n            <p class=\"risk-meaning\">{{ subject.message }}</p>\n            <span class=\"risk-status\" [attr.data-status]=\"subject.status\">{{ statusLabel(subject.status) }}</span>\n            <a [routerLink]=\"['/student/attendance/shortage', subject.subjectId]\" [attr.aria-label]=\"'View shortage details for ' + subject.subjectName\">View details <svg lucideChevronRight size=\"17\"></svg></a>\n          </article>\n        } @empty { <div class=\"risk-empty\">No subjects match the current search and status filter.</div> }\n      </div>\n      @if (visibleSubjects().length < filteredSubjects().length) { <button class=\"risk-load-more\" type=\"button\" (click)=\"loadMore()\">Load more ({{ visibleSubjects().length }} of {{ filteredSubjects().length }}) <svg lucideChevronDown size=\"18\"></svg></button> }\n      <footer>Last synced {{ data.syncedAt | date: 'medium' }}</footer>\n    </section>\n  }\n</div>\n", styles: [":host { display: block; }\n.risk-page { display: grid; gap: var(--student-space-4); min-height: calc(100dvh - var(--student-header-height)); color: var(--student-color-text); }\n.risk-page h1,.risk-page h2,.risk-page p { margin: 0; }\n.risk-page button,.risk-page input,.risk-page select { font: inherit; }\n.risk-overview-hero { display: contents; }\n.risk-heading,.risk-detail-heading { display: flex; align-items: center; gap: var(--student-space-4); }\n.risk-heading__icon,.risk-detail-heading erp-student-subject-icon { flex: 0 0 auto; }\n.risk-heading__icon { display: grid; width: 76px; height: 76px; place-items: center; }\n.risk-heading__icon img { width: 76px; height: 76px; object-fit: contain; filter: drop-shadow(var(--student-shadow-card)); }\n.risk-heading nav { display: flex; gap: var(--student-space-2); margin-bottom: var(--student-space-1); color: var(--student-color-text-secondary); font-size: var(--student-text-caption); }\n.risk-heading nav a,.risk-back { color: var(--student-color-primary-pressed); text-decoration: none; }\n.risk-heading h1,.risk-detail-heading h1 { font-size: clamp(26px,3vw,38px); line-height: 1.08; }\n.risk-heading p,.risk-detail-heading p { margin-top: var(--student-space-1); color: var(--student-color-text-secondary); }\n.risk-alert-link { display: flex; min-height: 44px; align-items: center; gap: var(--student-space-2); margin-left: auto; padding: 0 var(--student-space-4); border: 1px solid var(--student-color-border-strong); border-radius: var(--student-radius-control); color: var(--student-color-primary-pressed); background: var(--student-color-surface); text-decoration: none; font-weight: 750; }\n.risk-alert-link b { display: grid; min-width: 22px; height: 22px; place-items: center; border-radius: var(--student-radius-pill); color: var(--student-color-text-inverse); background: var(--student-color-danger); font-size: var(--student-text-caption); }\n.risk-summary { display: grid; grid-template-columns: repeat(4,minmax(0,1fr)); overflow: hidden; border: 1px solid var(--student-color-border); border-radius: var(--student-radius-card); background: var(--student-color-surface); box-shadow: var(--student-attendance-shadow); }\n.risk-summary>div { display: grid; grid-template-columns: auto auto 1fr; align-items: center; gap: var(--student-space-3); min-height: 92px; padding: var(--student-space-4) var(--student-space-5); }\n.risk-summary>div+div { border-left: 1px solid var(--student-color-divider); }\n.risk-summary>div>span { display: grid; width: 44px; height: 44px; place-items: center; border-radius: var(--student-radius-pill); }\n.risk-summary strong { font-size: 28px; }\n.risk-summary p { font-weight: 800; }\n.risk-summary small { display: block; margin-top: 2px; color: var(--student-color-text-secondary); font-size: var(--student-text-caption); font-weight: 500; }\n.risk-summary [data-tone='danger']>span,.risk-status[data-status='critical'],.risk-percent[data-status='critical'] { color: var(--student-color-danger); background: var(--student-color-danger-soft); }\n.risk-summary [data-tone='warning']>span,.risk-status[data-status='at-risk'],.risk-status[data-status='watch'],.risk-percent[data-status='at-risk'],.risk-percent[data-status='watch'] { color: var(--student-color-warning); background: var(--student-color-warning-soft); }\n.risk-summary [data-tone='pending']>span,.risk-status[data-status='pending'],.risk-percent[data-status='pending'] { color: var(--student-color-text-secondary); background: var(--student-fee-neutral-soft); }\n.risk-summary [data-tone='success']>span,.risk-status[data-status='on-track'],.risk-percent[data-status='on-track'] { color: var(--student-color-success); background: var(--student-color-success-soft); }\n.risk-panel,.risk-calculation,.risk-records,.risk-actions,.risk-detail-metrics { border: 1px solid var(--student-color-border); border-radius: var(--student-radius-card); background: var(--student-color-surface); box-shadow: var(--student-attendance-shadow); }\n.risk-tabs { display: flex; width: max-content; padding: var(--student-space-2) var(--student-space-3) 0; }\n.risk-tabs a { min-width: 110px; padding: var(--student-space-3) var(--student-space-5); border-bottom: 3px solid transparent; color: var(--student-color-text-secondary); text-align: center; text-decoration: none; font-weight: 750; }\n.risk-tabs a.is-active { border-color: var(--student-color-primary); color: var(--student-color-primary-pressed); }\n.risk-toolbar { display: grid; grid-template-columns: minmax(240px,1fr) minmax(190px,240px) 44px; gap: var(--student-space-3); padding: var(--student-space-3); border-top: 1px solid var(--student-color-divider); }\n.risk-toolbar label { display: flex; height: 42px; align-items: center; gap: var(--student-space-2); padding: 0 var(--student-space-3); border: 1px solid var(--student-color-border); border-radius: var(--student-radius-control); color: var(--student-color-text-secondary); background: var(--student-color-surface-raised); }\n.risk-toolbar input,.risk-toolbar select { width: 100%; min-width: 0; border: 0; outline: 0; color: var(--student-color-text); background: transparent; }\n.risk-toolbar button { display: grid; border: 1px solid var(--student-color-border); border-radius: var(--student-radius-control); color: var(--student-color-primary-pressed); background: var(--student-color-surface-raised); place-items: center; cursor: pointer; }\n.risk-filter select { appearance: none; }\n.risk-list { border-top: 1px solid var(--student-color-divider); }\n.risk-list__head,.risk-list article { display: grid; grid-template-columns: 1.5fr .75fr .55fr .55fr 1.8fr .75fr .7fr; align-items: center; gap: var(--student-space-3); padding: var(--student-space-3) var(--student-space-4); }\n.risk-list__head { color: var(--student-color-text-secondary); background: var(--student-color-surface-soft); font-size: var(--student-text-caption); font-weight: 750; }\n.risk-list article+article { border-top: 1px solid var(--student-color-divider); }\n.risk-subject { display: flex; min-width: 0; align-items: center; gap: var(--student-space-3); }\n.risk-subject span { min-width: 0; }\n.risk-subject strong,.risk-subject small { display: block; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }\n.risk-subject small { margin-top: 2px; color: var(--student-color-text-secondary); font-size: var(--student-text-caption); }\n.student-subject-icon { display: grid; width: 42px; height: 42px; place-items: center; border-radius: var(--student-radius-control); color: var(--student-color-primary-pressed); background: var(--student-color-primary-soft); }\n.student-subject-icon[data-tone='data'],.student-subject-icon[data-tone='science'] { color: var(--student-color-success); background: var(--student-color-success-soft); }\n.student-subject-icon[data-tone='math'],.student-subject-icon[data-tone='language'] { color: var(--student-color-warning); background: var(--student-color-warning-soft); }\n.risk-percent { width: max-content; padding: 3px 7px; border-radius: var(--student-radius-pill); }\n.risk-meaning { color: var(--student-color-text-secondary); font-size: var(--student-text-label); }\n.risk-status { width: max-content; padding: 5px 10px; border-radius: var(--student-radius-pill); font-size: var(--student-text-caption); font-style: normal; font-weight: 750; }\n.risk-list article>a,.risk-records a { display: inline-flex; align-items: center; gap: var(--student-space-1); color: var(--student-color-primary-pressed); text-decoration: none; font-size: var(--student-text-label); font-weight: 750; }\n.risk-panel footer { padding: var(--student-space-3) var(--student-space-4); border-top: 1px solid var(--student-color-divider); color: var(--student-color-text-muted); font-size: var(--student-text-caption); text-align: right; }\n.risk-empty,.risk-state { padding: var(--student-space-8); color: var(--student-color-text-secondary); text-align: center; }\n.risk-load-more { display: none; }\n.risk-state { display: flex; min-height: 280px; align-items: center; justify-content: center; gap: var(--student-space-3); border: 1px solid var(--student-color-border); border-radius: var(--student-radius-card); background: var(--student-color-surface); }\n.risk-state>span { width: 24px; height: 24px; border: 3px solid var(--student-color-border); border-top-color: var(--student-color-primary); border-radius: 50%; animation: risk-spin .8s linear infinite; }\n.risk-state--error { flex-direction: column; color: var(--student-color-danger); }\n.risk-state button { padding: var(--student-space-2) var(--student-space-4); border: 0; border-radius: var(--student-radius-control); color: var(--student-color-text-inverse); background: var(--student-color-primary); }\n@keyframes risk-spin { to { transform: rotate(360deg); } }\n.risk-back { display: inline-flex; width: max-content; align-items: center; gap: var(--student-space-1); font-weight: 750; }\n.risk-detail-heading .risk-status { margin-left: auto; }\n.risk-detail-metrics { display: grid; grid-template-columns: repeat(4,1fr); overflow: hidden; }\n.risk-detail-metrics div { display: grid; gap: var(--student-space-1); min-height: 94px; place-content: center; text-align: center; }\n.risk-detail-metrics div+div { border-left: 1px solid var(--student-color-divider); }\n.risk-detail-metrics strong { font-size: 28px; }\n.risk-detail-metrics span { color: var(--student-color-text-secondary); }\n.risk-detail-grid { display: grid; grid-template-columns: minmax(0,1.8fr) minmax(300px,.8fr); gap: var(--student-space-4); align-items: start; }\n.risk-detail-main { display: grid; gap: var(--student-space-4); }\n.risk-calculation,.risk-records,.risk-actions { padding: var(--student-space-4); }\n.risk-calculation>header { display: flex; gap: var(--student-space-3); }\n.risk-calculation h2,.risk-records h2,.risk-actions h2 { font-size: var(--student-text-h2); }\n.risk-calculation header p { margin-top: 3px; color: var(--student-color-text-secondary); }\n.risk-equation { display: grid; grid-template-columns: 1fr auto 1fr auto 1fr; align-items: center; gap: var(--student-space-4); margin-top: var(--student-space-4); }\n.risk-equation>span { display: grid; min-height: 94px; place-content: center; border-radius: var(--student-radius-control); background: var(--student-color-surface-soft); text-align: center; }\n.risk-equation strong { font-size: 24px; }\n.risk-equation small { margin-top: var(--student-space-1); color: var(--student-color-text-secondary); }\n.risk-equation__result { color: var(--student-color-success); background: var(--student-color-success-soft)!important; }\n.risk-note { display: flex; align-items: center; gap: var(--student-space-2); margin-top: var(--student-space-3)!important; padding: var(--student-space-3); border-radius: var(--student-radius-control); color: var(--student-color-text-secondary); background: var(--student-color-primary-subtle); }\n.risk-positive { display: flex; align-items: center; gap: var(--student-space-4); margin-top: var(--student-space-4); padding: var(--student-space-5); border-radius: var(--student-radius-control); color: var(--student-color-success); background: var(--student-color-success-soft); }\n.risk-positive p { margin-top: 3px; color: var(--student-color-text-secondary); }\n.risk-records header { display: flex; align-items: center; justify-content: space-between; gap: var(--student-space-3); }\n.risk-records__table { margin-top: var(--student-space-3); border: 1px solid var(--student-color-divider); border-radius: var(--student-radius-control); overflow: hidden; }\n.risk-records__table>div { display: grid; grid-template-columns: 1fr 1fr .7fr; align-items: center; padding: var(--student-space-3); }\n.risk-records__table>div+div { border-top: 1px solid var(--student-color-divider); }\n.risk-records__table em { width: max-content; padding: 4px 10px; border-radius: var(--student-radius-pill); font-style: normal; }\n.risk-records__table em[data-status='present'] { color: var(--student-color-success); background: var(--student-color-success-soft); }\n.risk-records__table em[data-status='absent'] { color: var(--student-color-danger); background: var(--student-color-danger-soft); }\n.risk-actions ol { display: grid; gap: var(--student-space-4); margin: var(--student-space-4) 0; padding: 0; list-style: none; }\n.risk-actions li { display: flex; gap: var(--student-space-3); }\n.risk-actions li>span { display: grid; width: 34px; height: 34px; flex: 0 0 auto; place-items: center; border-radius: var(--student-radius-pill); color: var(--student-color-primary-pressed); background: var(--student-color-primary-soft); font-weight: 800; }\n.risk-actions li p { margin-top: 2px; color: var(--student-color-text-secondary); font-size: var(--student-text-label); }\n.risk-primary-link { display: flex; min-height: 44px; align-items: center; justify-content: center; gap: var(--student-space-2); border-radius: var(--student-radius-control); color: var(--student-color-text-inverse); background: var(--student-color-primary); text-decoration: none; font-weight: 800; }\n.risk-upcoming { display: grid; gap: 3px; margin-top: var(--student-space-4); padding-top: var(--student-space-4); border-top: 1px solid var(--student-color-divider); }\n.risk-upcoming span { color: var(--student-color-text-secondary); font-size: var(--student-text-label); }\n\n@media (max-width: 1100px) { .risk-list__head,.risk-list article { grid-template-columns: 1.5fr .75fr .6fr 1.5fr .7fr; }.risk-minimum,.risk-list__head span:nth-child(4),.risk-status,.risk-list__head span:nth-child(6){display:none}.risk-detail-grid{grid-template-columns:1fr} }\n@media (max-width: 700px) {\n  .risk-page { min-height: calc(100dvh - var(--student-mobile-header-height)); gap: var(--student-space-3); }\n  .risk-heading { align-items: flex-start; flex-wrap: wrap; }.risk-heading__icon{width:52px;height:52px}.risk-heading h1,.risk-detail-heading h1{font-size:26px}.risk-heading p{font-size:var(--student-text-label)}.risk-alert-link{width:100%;justify-content:center;margin:0}\n  .risk-summary { grid-template-columns: repeat(2,1fr); }.risk-summary>div{grid-template-columns:auto 1fr;min-height:86px;padding:var(--student-space-3)}.risk-summary>div:nth-child(3){border-left:0;border-top:1px solid var(--student-color-divider)}.risk-summary>div:nth-child(4){border-top:1px solid var(--student-color-divider)}.risk-summary>div>span{grid-row:1/3}.risk-summary strong{font-size:24px}.risk-summary p{font-size:var(--student-text-label)}\n  .risk-tabs { width:100%;padding:0 }.risk-tabs a{flex:1}.risk-toolbar{grid-template-columns:1fr 52px}.risk-toolbar label:first-child{grid-column:1/-1}.risk-toolbar button{min-height:44px}\n  .risk-list__head{display:none}.risk-list{display:grid;gap:var(--student-space-3);padding:var(--student-space-3);border-top:1px solid var(--student-color-divider);background:var(--student-color-page-accent)}.risk-list article{position:relative;grid-template-columns:1fr auto;gap:var(--student-space-2);padding:var(--student-space-4);border:1px solid var(--student-color-border)!important;border-radius:var(--student-radius-card);background:var(--student-color-surface)}.risk-subject{grid-column:1/-1}.risk-held{grid-column:1}.risk-percent{grid-column:2;grid-row:2}.risk-meaning{grid-column:1/-1}.risk-list article>a{grid-column:1/-1;justify-content:flex-end;padding-top:var(--student-space-2);border-top:1px solid var(--student-color-divider)}.risk-load-more{display:flex;width:calc(100% - 24px);min-height:46px;align-items:center;justify-content:center;gap:var(--student-space-2);margin:0 auto var(--student-space-3);border:1px solid var(--student-color-border-strong);border-radius:var(--student-radius-control);color:var(--student-color-primary-pressed);background:var(--student-color-surface);font-weight:800}.risk-panel footer{text-align:left}\n  .risk-detail-heading{align-items:flex-start}.risk-detail-heading .risk-status{margin-left:0}.risk-detail-heading{display:grid;grid-template-columns:auto 1fr}.risk-detail-heading>.risk-status{grid-column:2}.risk-detail-metrics{grid-template-columns:repeat(2,1fr)}.risk-detail-metrics div:nth-child(3){border-left:0;border-top:1px solid var(--student-color-divider)}.risk-detail-metrics div:nth-child(4){border-top:1px solid var(--student-color-divider)}.risk-detail-metrics strong{font-size:24px}.risk-equation{grid-template-columns:1fr auto 1fr}.risk-equation>b:nth-of-type(2){display:none}.risk-equation__result{grid-column:1/-1}.risk-records header{align-items:flex-start;flex-direction:column}.risk-records__table>div{grid-template-columns:1fr auto}.risk-records__table>div span:nth-child(2){display:none}\n}\n\n@media (max-width: 700px) {\n  .risk-heading { display: grid; grid-template-columns: auto minmax(0, 1fr); align-items: start; }\n  .risk-alert-link { grid-column: 1 / -1; }\n  .risk-detail-heading > .risk-status { display: inline-flex; }\n}\n\n/* Reference-aligned responsive hierarchy. */\n@media (max-width: 700px) {\n  .risk-overview-hero {\n    display: grid;\n    gap: var(--student-space-4);\n    padding: var(--student-space-4);\n    border: 1px solid var(--student-color-border);\n    border-radius: var(--student-radius-card);\n    background: var(--student-color-surface);\n    box-shadow: var(--student-attendance-shadow);\n  }\n\n  .risk-overview-hero .risk-heading {\n    grid-template-columns: 78px minmax(0, 1fr) 56px;\n    align-items: center;\n    gap: var(--student-space-3);\n  }\n\n  .risk-heading__icon,\n  .risk-heading__icon img {\n    width: 78px;\n    height: 78px;\n  }\n\n  .risk-heading nav { display: none; }\n\n  .risk-overview-hero .risk-alert-link {\n    position: relative;\n    display: grid;\n    width: 56px;\n    height: 64px;\n    min-height: 0;\n    grid-column: auto;\n    grid-template-columns: 1fr;\n    place-items: center;\n    gap: 0;\n    margin: 0;\n    padding: var(--student-space-1);\n  }\n\n  .risk-alert-link > span,\n  .risk-alert-link > svg:last-child { display: none; }\n  .risk-alert-link b { position: absolute; top: -8px; right: -8px; }\n\n  .risk-overview-hero .risk-summary {\n    grid-template-columns: repeat(4, minmax(0, 1fr));\n    border: 0;\n    border-radius: 0;\n    box-shadow: none;\n  }\n\n  .risk-overview-hero .risk-summary > div {\n    display: grid;\n    min-height: 96px;\n    grid-template-columns: 1fr;\n    place-content: center;\n    gap: var(--student-space-1);\n    padding: var(--student-space-2);\n    text-align: center;\n  }\n\n  .risk-overview-hero .risk-summary > div + div { border-left: 1px solid var(--student-color-divider); }\n  .risk-overview-hero .risk-summary > div:nth-child(3),\n  .risk-overview-hero .risk-summary > div:nth-child(4) { border-top: 0; }\n  .risk-overview-hero .risk-summary > div > span,\n  .risk-overview-hero .risk-summary small { display: none; }\n  .risk-overview-hero .risk-summary strong { font-size: 24px; }\n  .risk-overview-hero .risk-summary p { font-size: var(--student-text-caption); }\n\n  .risk-detail-metrics { grid-template-columns: repeat(4, minmax(0, 1fr)); }\n  .risk-detail-metrics div { min-height: 108px; padding: var(--student-space-2); }\n  .risk-detail-metrics div:nth-child(3),\n  .risk-detail-metrics div:nth-child(4) { border-top: 0; }\n  .risk-detail-metrics strong { font-size: 22px; }\n  .risk-detail-metrics span { font-size: var(--student-text-caption); }\n}\n\n@media (max-width: 430px) {\n  .risk-overview-hero { padding: var(--student-space-3); }\n  .risk-overview-hero .risk-heading { grid-template-columns: 64px minmax(0, 1fr) 48px; }\n  .risk-heading__icon,\n  .risk-heading__icon img { width: 64px; height: 64px; }\n  .risk-overview-hero .risk-alert-link { width: 48px; height: 54px; }\n  .risk-overview-hero .risk-summary strong { font-size: 21px; }\n  .risk-detail-metrics strong { font-size: 19px; }\n}\n"] }]
    }], () => [], null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(StudentAttendanceShortageComponent, { className: "StudentAttendanceShortageComponent", filePath: "frontend/src/app/features/student/academics/student-attendance-shortage.component.ts", lineNumber: 54 }); })();
