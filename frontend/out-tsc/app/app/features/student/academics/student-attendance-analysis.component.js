import { DatePipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { LucideAlertTriangle, LucideBookOpen, LucideCheck, LucideChevronDown, LucideChevronRight, LucideGraduationCap, LucideInfo, LucideMinus, LucidePlus, LucideRefreshCw, LucideSearch, LucideTarget, LucideUserRound, LucideUsersRound, LucideX, } from '@lucide/angular';
import { ApiService } from '../../../core/api.service';
import { StudentSessionService } from '../shared/services/student-session.service';
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
const _forTrack0 = ($index, $item) => $item.subjectId;
function StudentAttendanceAnalysisComponent_Conditional_20_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "section", 9);
    i0.ɵɵelement(1, "span", 12);
    i0.ɵɵelementStart(2, "strong");
    i0.ɵɵtext(3, "Building your attendance analysis");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "p");
    i0.ɵɵtext(5, "Calculating subject performance and timetable projections\u2026");
    i0.ɵɵelementEnd()();
} }
function StudentAttendanceAnalysisComponent_Conditional_21_Template(rf, ctx) { if (rf & 1) {
    const _r1 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "section", 10);
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(1, "svg", 13);
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(2, "strong");
    i0.ɵɵtext(3, "Analysis could not be loaded");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "p");
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "button", 14);
    i0.ɵɵlistener("click", function StudentAttendanceAnalysisComponent_Conditional_21_Template_button_click_6_listener() { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.refresh()); });
    i0.ɵɵtext(7, "Try again");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(ctx_r1.error());
} }
function StudentAttendanceAnalysisComponent_Conditional_22_Conditional_81_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "b");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r1.selectedSubjects().length);
} }
function StudentAttendanceAnalysisComponent_Conditional_22_For_100_Conditional_13_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "b");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const subject_r5 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(subject_r5.presentLectures);
} }
function StudentAttendanceAnalysisComponent_Conditional_22_For_100_Conditional_15_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "b");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const subject_r5 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(subject_r5.absentLectures);
} }
function StudentAttendanceAnalysisComponent_Conditional_22_For_100_Template(rf, ctx) { if (rf & 1) {
    const _r4 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "article", 52)(1, "label", 55)(2, "input", 56);
    i0.ɵɵlistener("change", function StudentAttendanceAnalysisComponent_Conditional_22_For_100_Template_input_change_2_listener() { const subject_r5 = i0.ɵɵrestoreView(_r4).$implicit; const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.toggleSubject(subject_r5.subjectId)); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "span");
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(4, "svg", 57);
    i0.ɵɵelementEnd()();
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(5, "div", 58)(6, "strong");
    i0.ɵɵtext(7);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "small");
    i0.ɵɵtext(9);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(10, "div", 59)(11, "span", 60)(12, "i", 45);
    i0.ɵɵconditionalCreate(13, StudentAttendanceAnalysisComponent_Conditional_22_For_100_Conditional_13_Template, 2, 1, "b");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(14, "i", 46);
    i0.ɵɵconditionalCreate(15, StudentAttendanceAnalysisComponent_Conditional_22_For_100_Conditional_15_Template, 2, 1, "b");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(16, "small");
    i0.ɵɵtext(17);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(18, "div", 61)(19, "strong");
    i0.ɵɵtext(20);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(21, "small");
    i0.ɵɵtext(22);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(23, "button", 62);
    i0.ɵɵlistener("click", function StudentAttendanceAnalysisComponent_Conditional_22_For_100_Template_button_click_23_listener() { const subject_r5 = i0.ɵɵrestoreView(_r4).$implicit; const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.openPlanner(subject_r5)); });
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(24, "svg", 63);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const subject_r5 = ctx.$implicit;
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("checked", ctx_r1.isSelected(subject_r5.subjectId));
    i0.ɵɵattribute("aria-label", "Select " + subject_r5.subjectName + " for comparison");
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(subject_r5.subjectName);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(subject_r5.subjectCode || "Subject");
    i0.ɵɵadvance(3);
    i0.ɵɵstyleProp("width", subject_r5.attendancePercentage, "%");
    i0.ɵɵadvance();
    i0.ɵɵconditional(subject_r5.presentLectures ? 13 : -1);
    i0.ɵɵadvance();
    i0.ɵɵstyleProp("width", 100 - subject_r5.attendancePercentage, "%");
    i0.ɵɵadvance();
    i0.ɵɵconditional(subject_r5.absentLectures ? 15 : -1);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate2("", subject_r5.presentLectures, " attended \u00B7 ", subject_r5.absentLectures, " absent");
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1("", ctx_r1.formatPercentage(subject_r5.attendancePercentage), "%");
    i0.ɵɵadvance();
    i0.ɵɵclassProp("is-alert", subject_r5.attendancePercentage < ctx_r1.requiredAttendance);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r1.statusLabel(subject_r5), " ");
    i0.ɵɵadvance();
    i0.ɵɵattribute("aria-label", "Analyze " + subject_r5.subjectName);
} }
function StudentAttendanceAnalysisComponent_Conditional_22_ForEmpty_101_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 53);
    i0.ɵɵelement(1, "img", 64);
    i0.ɵɵelementStart(2, "strong");
    i0.ɵɵtext(3, "No matching subjects");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "p");
    i0.ɵɵtext(5, "Change the search or filter to see more attendance records.");
    i0.ɵɵelementEnd()();
} }
function StudentAttendanceAnalysisComponent_Conditional_22_Conditional_106_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵelement(1, "i");
    i0.ɵɵtext(2);
    i0.ɵɵpipe(3, "date");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" Last synced: ", i0.ɵɵpipeBind2(3, 1, ctx, "mediumTime"));
} }
function StudentAttendanceAnalysisComponent_Conditional_22_Template(rf, ctx) { if (rf & 1) {
    const _r3 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "section", 15)(1, "article", 16)(2, "span");
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(3, "svg", 17);
    i0.ɵɵelementEnd();
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(4, "div")(5, "small");
    i0.ɵɵtext(6, "Attended");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "strong");
    i0.ɵɵtext(8);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(9, "p");
    i0.ɵɵtext(10, "Lectures attended");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(11, "article", 18)(12, "span");
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(13, "svg", 19);
    i0.ɵɵelementEnd();
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(14, "div")(15, "small");
    i0.ɵɵtext(16, "Conducted");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(17, "strong");
    i0.ɵɵtext(18);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(19, "p");
    i0.ɵɵtext(20, "Total lectures conducted");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(21, "article", 20)(22, "span");
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(23, "svg", 21);
    i0.ɵɵelementEnd();
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(24, "div")(25, "small");
    i0.ɵɵtext(26, "Absent");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(27, "strong");
    i0.ɵɵtext(28);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(29, "p");
    i0.ɵɵtext(30, "Lectures missed");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(31, "article", 22);
    i0.ɵɵelement(32, "span", 23);
    i0.ɵɵelementStart(33, "div")(34, "small");
    i0.ɵɵtext(35, "Overall Attendance");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(36, "strong");
    i0.ɵɵtext(37);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(38, "p");
    i0.ɵɵtext(39, "Across all subjects");
    i0.ɵɵelementEnd()()()();
    i0.ɵɵelementStart(40, "section", 24)(41, "header", 25)(42, "div")(43, "h2", 26);
    i0.ɵɵtext(44);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(45, "p");
    i0.ɵɵtext(46, "Attendance breakdown for each enrolled subject.");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(47, "span");
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(48, "svg", 27);
    i0.ɵɵtext(49, " Select subjects to compare");
    i0.ɵɵelementEnd()();
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(50, "div", 28)(51, "label", 29);
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(52, "svg", 30);
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(53, "span", 31);
    i0.ɵɵtext(54, "Search subjects");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(55, "input", 32);
    i0.ɵɵlistener("ngModelChange", function StudentAttendanceAnalysisComponent_Conditional_22_Template_input_ngModelChange_55_listener($event) { i0.ɵɵrestoreView(_r3); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.updateSearch($event)); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(56, "label", 33)(57, "span", 31);
    i0.ɵɵtext(58, "Filter subjects");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(59, "select", 34);
    i0.ɵɵlistener("ngModelChange", function StudentAttendanceAnalysisComponent_Conditional_22_Template_select_ngModelChange_59_listener($event) { i0.ɵɵrestoreView(_r3); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.updateFilter($event)); });
    i0.ɵɵelementStart(60, "option", 35);
    i0.ɵɵtext(61, "All subjects");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(62, "option", 36);
    i0.ɵɵtext(63, "On track");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(64, "option", 37);
    i0.ɵɵtext(65, "Below target");
    i0.ɵɵelementEnd()();
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(66, "svg", 38);
    i0.ɵɵelementEnd();
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(67, "label", 33)(68, "span", 31);
    i0.ɵɵtext(69, "Sort subjects");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(70, "select", 34);
    i0.ɵɵlistener("ngModelChange", function StudentAttendanceAnalysisComponent_Conditional_22_Template_select_ngModelChange_70_listener($event) { i0.ɵɵrestoreView(_r3); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.updateSort($event)); });
    i0.ɵɵelementStart(71, "option", 39);
    i0.ɵɵtext(72, "Lowest attendance");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(73, "option", 40);
    i0.ɵɵtext(74, "Highest attendance");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(75, "option", 41);
    i0.ɵɵtext(76, "Subject name");
    i0.ɵɵelementEnd()();
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(77, "svg", 38);
    i0.ɵɵelementEnd();
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(78, "button", 42);
    i0.ɵɵlistener("click", function StudentAttendanceAnalysisComponent_Conditional_22_Template_button_click_78_listener() { i0.ɵɵrestoreView(_r3); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.openComparison()); });
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(79, "svg", 43);
    i0.ɵɵtext(80, " Compare selected ");
    i0.ɵɵconditionalCreate(81, StudentAttendanceAnalysisComponent_Conditional_22_Conditional_81_Template, 2, 1, "b");
    i0.ɵɵelementEnd()();
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(82, "div", 44)(83, "span");
    i0.ɵɵelement(84, "i", 45);
    i0.ɵɵtext(85, "Attended");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(86, "span");
    i0.ɵɵelement(87, "i", 46);
    i0.ɵɵtext(88, "Absent");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(89, "div", 47)(90, "div", 48);
    i0.ɵɵelement(91, "span", 49);
    i0.ɵɵelementStart(92, "span", 50);
    i0.ɵɵtext(93, "Subject");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(94, "span", 50);
    i0.ɵɵtext(95, "Attendance split");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(96, "span", 50);
    i0.ɵɵtext(97, "Current");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(98, "span", 51);
    i0.ɵɵelementEnd();
    i0.ɵɵrepeaterCreate(99, StudentAttendanceAnalysisComponent_Conditional_22_For_100_Template, 25, 17, "article", 52, _forTrack0, false, StudentAttendanceAnalysisComponent_Conditional_22_ForEmpty_101_Template, 6, 0, "div", 53);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(102, "footer", 54)(103, "span");
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(104, "svg", 27);
    i0.ɵɵtext(105, " Tap a subject to analyze its attendance plan.");
    i0.ɵɵelementEnd();
    i0.ɵɵconditionalCreate(106, StudentAttendanceAnalysisComponent_Conditional_22_Conditional_106_Template, 4, 4, "span");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    let tmp_12_0;
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(8);
    i0.ɵɵtextInterpolate(ctx_r1.overall().presentLectures);
    i0.ɵɵadvance(10);
    i0.ɵɵtextInterpolate(ctx_r1.overall().totalLectures);
    i0.ɵɵadvance(10);
    i0.ɵɵtextInterpolate(ctx_r1.overall().absentLectures);
    i0.ɵɵadvance(9);
    i0.ɵɵtextInterpolate1("", ctx_r1.formatPercentage(ctx_r1.overall().attendancePercentage), "%");
    i0.ɵɵadvance(7);
    i0.ɵɵtextInterpolate1("Subject analysis \u00B7 ", ctx_r1.subjects().length);
    i0.ɵɵadvance(11);
    i0.ɵɵproperty("ngModel", ctx_r1.search());
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("ngModel", ctx_r1.filter());
    i0.ɵɵadvance(11);
    i0.ɵɵproperty("ngModel", ctx_r1.sort());
    i0.ɵɵadvance(8);
    i0.ɵɵproperty("disabled", ctx_r1.selectedSubjects().length < 2);
    i0.ɵɵadvance(3);
    i0.ɵɵconditional(ctx_r1.selectedSubjects().length ? 81 : -1);
    i0.ɵɵadvance(18);
    i0.ɵɵrepeater(ctx_r1.filteredSubjects());
    i0.ɵɵadvance(7);
    i0.ɵɵconditional((tmp_12_0 = (tmp_12_0 = ctx_r1.data()) == null ? null : tmp_12_0.syncedAt) ? 106 : -1, tmp_12_0);
} }
function StudentAttendanceAnalysisComponent_Conditional_23_Conditional_42_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtext(0);
    i0.ɵɵpipe(1, "date");
} if (rf & 2) {
    const subject_r7 = i0.ɵɵnextContext();
    i0.ɵɵtextInterpolate1(" Scheduled through ", i0.ɵɵpipeBind3(1, 1, subject_r7.upcomingThrough, "mediumDate", "UTC"), " ");
} }
function StudentAttendanceAnalysisComponent_Conditional_23_Conditional_43_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtext(0);
} if (rf & 2) {
    let tmp_3_0;
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵtextInterpolate1(" Next ", (tmp_3_0 = ctx_r1.data()) == null ? null : tmp_3_0.planningWindowDays, " days ");
} }
function StudentAttendanceAnalysisComponent_Conditional_23_Conditional_70_Conditional_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(0, "svg", 94);
} }
function StudentAttendanceAnalysisComponent_Conditional_23_Conditional_70_Conditional_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(0, "svg", 95);
} }
function StudentAttendanceAnalysisComponent_Conditional_23_Conditional_70_Conditional_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "h3");
    i0.ɵɵtext(1, "Target already achieved");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(2, "p");
    i0.ɵɵtext(3, "Your attendance is ");
    i0.ɵɵelementStart(4, "strong");
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd();
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const subject_r7 = i0.ɵɵnextContext(2);
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate1("", ctx_r1.formatPercentage(subject_r7.attendancePercentage), "%");
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(", which has cleared the ", ctx_r1.target(), "% target.");
} }
function StudentAttendanceAnalysisComponent_Conditional_23_Conditional_70_Conditional_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "h3");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(2, "p");
    i0.ɵɵtext(3, "You will reach approximately ");
    i0.ɵɵelementStart(4, "strong");
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd();
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const projection_r8 = i0.ɵɵnextContext();
    const subject_r7 = i0.ɵɵnextContext();
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1("Attend the next ", projection_r8.classesRequired, " classes");
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate1("", ctx_r1.formatPercentage(projection_r8.projectedPercentage), "%");
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate2(" after ", subject_r7.presentLectures + (projection_r8.classesRequired || 0), " / ", subject_r7.totalLectures + (projection_r8.classesRequired || 0), " attended.");
} }
function StudentAttendanceAnalysisComponent_Conditional_23_Conditional_70_Conditional_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "h3");
    i0.ɵɵtext(1, "Not enough scheduled classes");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(2, "p");
    i0.ɵɵtext(3, "You need ");
    i0.ɵɵelementStart(4, "strong");
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd();
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const projection_r8 = i0.ɵɵnextContext();
    const subject_r7 = i0.ɵɵnextContext();
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate1("", projection_r8.classesRequired, " consecutive classes");
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(", but only ", subject_r7.upcomingLectures, " are currently scheduled.");
} }
function StudentAttendanceAnalysisComponent_Conditional_23_Conditional_70_Conditional_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "h3");
    i0.ɵɵtext(1, "This target is not reachable");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(2, "p");
    i0.ɵɵtext(3, "A 100% target cannot be restored because an absence is already recorded.");
    i0.ɵɵelementEnd();
} }
function StudentAttendanceAnalysisComponent_Conditional_23_Conditional_70_Conditional_10_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "small");
    i0.ɵɵtext(1, "Status");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(2, "strong");
    i0.ɵɵtext(3, "Target reached");
    i0.ɵɵelementEnd();
} }
function StudentAttendanceAnalysisComponent_Conditional_23_Conditional_70_Conditional_11_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "small");
    i0.ɵɵtext(1, "Classes available");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(2, "strong");
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const subject_r7 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1("", subject_r7.upcomingLectures, " scheduled");
} }
function StudentAttendanceAnalysisComponent_Conditional_23_Conditional_70_Conditional_12_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "small");
    i0.ɵɵtext(1, "Best possible");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(2, "strong");
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const projection_r8 = i0.ɵɵnextContext();
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1("", ctx_r1.formatPercentage(projection_r8.bestPossiblePercentage), "%");
} }
function StudentAttendanceAnalysisComponent_Conditional_23_Conditional_70_Conditional_15_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p")(1, "strong");
    i0.ɵɵtext(2, "You have reached your selected target.");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(3, "br");
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate1("Keep your attendance at or above ", ctx_r1.target(), "% in future classes.");
} }
function StudentAttendanceAnalysisComponent_Conditional_23_Conditional_70_Conditional_16_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p")(1, "strong");
    i0.ɵɵtext(2, "Calculated automatically from saved attendance and the timetable.");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(3, "br");
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const projection_r8 = i0.ɵɵnextContext();
    const subject_r7 = i0.ɵɵnextContext();
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate1("", subject_r7.upcomingLectures - (projection_r8.classesRequired || 0), " scheduled classes remain after the earliest point you can reach the target.");
} }
function StudentAttendanceAnalysisComponent_Conditional_23_Conditional_70_Conditional_17_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p")(1, "strong");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelement(3, "br");
    i0.ɵɵtext(4, "The result will update automatically when more classes are scheduled.");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const projection_r8 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1("", projection_r8.classesBeyondSchedule, " more classes are required beyond the current timetable.");
} }
function StudentAttendanceAnalysisComponent_Conditional_23_Conditional_70_Conditional_18_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p")(1, "strong");
    i0.ɵɵtext(2, "Choose a target below 100% for a reachable plan.");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(3, "br");
    i0.ɵɵtext(4, "All calculations use faculty-saved attendance only.");
    i0.ɵɵelementEnd();
} }
function StudentAttendanceAnalysisComponent_Conditional_23_Conditional_70_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "section", 93)(1, "span");
    i0.ɵɵconditionalCreate(2, StudentAttendanceAnalysisComponent_Conditional_23_Conditional_70_Conditional_2_Template, 1, 0, ":svg:svg", 94)(3, StudentAttendanceAnalysisComponent_Conditional_23_Conditional_70_Conditional_3_Template, 1, 0, ":svg:svg", 95);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "div");
    i0.ɵɵconditionalCreate(5, StudentAttendanceAnalysisComponent_Conditional_23_Conditional_70_Conditional_5_Template, 7, 2)(6, StudentAttendanceAnalysisComponent_Conditional_23_Conditional_70_Conditional_6_Template, 7, 4)(7, StudentAttendanceAnalysisComponent_Conditional_23_Conditional_70_Conditional_7_Template, 7, 2)(8, StudentAttendanceAnalysisComponent_Conditional_23_Conditional_70_Conditional_8_Template, 4, 0);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(9, "aside");
    i0.ɵɵconditionalCreate(10, StudentAttendanceAnalysisComponent_Conditional_23_Conditional_70_Conditional_10_Template, 4, 0)(11, StudentAttendanceAnalysisComponent_Conditional_23_Conditional_70_Conditional_11_Template, 4, 1)(12, StudentAttendanceAnalysisComponent_Conditional_23_Conditional_70_Conditional_12_Template, 4, 1);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(13, "section", 96);
    i0.ɵɵelement(14, "img", 64);
    i0.ɵɵconditionalCreate(15, StudentAttendanceAnalysisComponent_Conditional_23_Conditional_70_Conditional_15_Template, 5, 1, "p")(16, StudentAttendanceAnalysisComponent_Conditional_23_Conditional_70_Conditional_16_Template, 5, 1, "p")(17, StudentAttendanceAnalysisComponent_Conditional_23_Conditional_70_Conditional_17_Template, 5, 1, "p")(18, StudentAttendanceAnalysisComponent_Conditional_23_Conditional_70_Conditional_18_Template, 5, 0, "p");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const projection_r8 = ctx;
    i0.ɵɵclassProp("student-analysis-result--warning", !projection_r8.reachable);
    i0.ɵɵadvance(2);
    i0.ɵɵconditional(projection_r8.reachable ? 2 : 3);
    i0.ɵɵadvance(3);
    i0.ɵɵconditional(projection_r8.alreadyReached ? 5 : projection_r8.reachable ? 6 : projection_r8.classesRequired !== null ? 7 : 8);
    i0.ɵɵadvance(5);
    i0.ɵɵconditional(projection_r8.alreadyReached ? 10 : projection_r8.reachable ? 11 : 12);
    i0.ɵɵadvance(5);
    i0.ɵɵconditional(projection_r8.alreadyReached ? 15 : projection_r8.reachable ? 16 : projection_r8.classesBeyondSchedule !== null ? 17 : 18);
} }
function StudentAttendanceAnalysisComponent_Conditional_23_Template(rf, ctx) { if (rf & 1) {
    const _r6 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 65);
    i0.ɵɵlistener("mousedown", function StudentAttendanceAnalysisComponent_Conditional_23_Template_div_mousedown_0_listener() { i0.ɵɵrestoreView(_r6); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.closePlanner()); });
    i0.ɵɵelementStart(1, "section", 66);
    i0.ɵɵlistener("mousedown", function StudentAttendanceAnalysisComponent_Conditional_23_Template_section_mousedown_1_listener($event) { return $event.stopPropagation(); });
    i0.ɵɵelement(2, "span", 67);
    i0.ɵɵelementStart(3, "header", 68);
    i0.ɵɵelement(4, "img", 69);
    i0.ɵɵelementStart(5, "div")(6, "h2", 70);
    i0.ɵɵtext(7);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "p");
    i0.ɵɵtext(9);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(10, "span", 71);
    i0.ɵɵtext(11, "Live data");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(12, "button", 72);
    i0.ɵɵlistener("click", function StudentAttendanceAnalysisComponent_Conditional_23_Template_button_click_12_listener() { i0.ɵɵrestoreView(_r6); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.closePlanner()); });
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(13, "svg", 73);
    i0.ɵɵelementEnd()();
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(14, "dl", 74)(15, "div")(16, "dt");
    i0.ɵɵtext(17);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(18, "dd");
    i0.ɵɵtext(19, "Current attendance");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(20, "div")(21, "dt", 75);
    i0.ɵɵtext(22);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(23, "dd");
    i0.ɵɵtext(24, "Attended");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(25, "div")(26, "dt", 76);
    i0.ɵɵtext(27);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(28, "dd");
    i0.ɵɵtext(29, "Absent");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(30, "div")(31, "dt");
    i0.ɵɵtext(32);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(33, "dd");
    i0.ɵɵtext(34, "Conducted");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(35, "div", 77);
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(36, "svg", 78);
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(37, "strong");
    i0.ɵɵtext(38);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(39, "span");
    i0.ɵɵtext(40, "\u00B7 From timetable");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(41, "small");
    i0.ɵɵconditionalCreate(42, StudentAttendanceAnalysisComponent_Conditional_23_Conditional_42_Template, 2, 5)(43, StudentAttendanceAnalysisComponent_Conditional_23_Conditional_43_Template, 1, 1);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(44, "div", 79)(45, "span", 80);
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(46, "svg", 81);
    i0.ɵɵelementEnd();
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(47, "div", 82)(48, "h3");
    i0.ɵɵtext(49, "My target");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(50, "p");
    i0.ɵɵtext(51, "Set your personal attendance target");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(52, "div", 83)(53, "button", 84);
    i0.ɵɵlistener("click", function StudentAttendanceAnalysisComponent_Conditional_23_Template_button_click_53_listener() { i0.ɵɵrestoreView(_r6); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.adjustTarget(-1)); });
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(54, "svg", 85);
    i0.ɵɵelementEnd();
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(55, "strong");
    i0.ɵɵtext(56);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(57, "span");
    i0.ɵɵtext(58, "%");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(59, "button", 86);
    i0.ɵɵlistener("click", function StudentAttendanceAnalysisComponent_Conditional_23_Template_button_click_59_listener() { i0.ɵɵrestoreView(_r6); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.adjustTarget(1)); });
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(60, "svg", 87);
    i0.ɵɵelementEnd()();
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(61, "label", 88)(62, "span", 31);
    i0.ɵɵtext(63, "Target attendance percentage");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(64, "input", 89);
    i0.ɵɵlistener("ngModelChange", function StudentAttendanceAnalysisComponent_Conditional_23_Template_input_ngModelChange_64_listener($event) { i0.ɵɵrestoreView(_r6); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.setTarget($event)); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(65, "small")(66, "b");
    i0.ɵɵtext(67, "50%");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(68, "b");
    i0.ɵɵtext(69, "100%");
    i0.ɵɵelementEnd()()()();
    i0.ɵɵconditionalCreate(70, StudentAttendanceAnalysisComponent_Conditional_23_Conditional_70_Template, 19, 6);
    i0.ɵɵelementStart(71, "footer", 90)(72, "button", 91);
    i0.ɵɵlistener("click", function StudentAttendanceAnalysisComponent_Conditional_23_Template_button_click_72_listener() { i0.ɵɵrestoreView(_r6); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.resetPlanner()); });
    i0.ɵɵtext(73, "Reset");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(74, "button", 92);
    i0.ɵɵlistener("click", function StudentAttendanceAnalysisComponent_Conditional_23_Template_button_click_74_listener() { i0.ɵɵrestoreView(_r6); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.closePlanner()); });
    i0.ɵɵtext(75, "Done");
    i0.ɵɵelementEnd()()()();
} if (rf & 2) {
    let tmp_12_0;
    const subject_r7 = ctx;
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(7);
    i0.ɵɵtextInterpolate(subject_r7.subjectName);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(subject_r7.subjectCode || "Subject");
    i0.ɵɵadvance(8);
    i0.ɵɵtextInterpolate1("", ctx_r1.formatPercentage(subject_r7.attendancePercentage), "%");
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(subject_r7.presentLectures);
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(subject_r7.absentLectures);
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(subject_r7.totalLectures);
    i0.ɵɵadvance(6);
    i0.ɵɵtextInterpolate1("", subject_r7.upcomingLectures, " upcoming");
    i0.ɵɵadvance(4);
    i0.ɵɵconditional(subject_r7.upcomingSource === "configured-timetable" && subject_r7.upcomingThrough ? 42 : 43);
    i0.ɵɵadvance(14);
    i0.ɵɵtextInterpolate(ctx_r1.target());
    i0.ɵɵadvance(8);
    i0.ɵɵproperty("ngModel", ctx_r1.target());
    i0.ɵɵadvance(6);
    i0.ɵɵconditional((tmp_12_0 = ctx_r1.plannerProjection()) ? 70 : -1, tmp_12_0);
} }
function StudentAttendanceAnalysisComponent_Conditional_24_For_18_Template(rf, ctx) { if (rf & 1) {
    const _r10 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 14);
    i0.ɵɵlistener("click", function StudentAttendanceAnalysisComponent_Conditional_24_For_18_Template_button_click_0_listener() { const subject_r11 = i0.ɵɵrestoreView(_r10).$implicit; const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.toggleSubject(subject_r11.subjectId)); });
    i0.ɵɵtext(1);
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(2, "svg", 113);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const subject_r11 = ctx.$implicit;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1("", subject_r11.subjectName, " ");
} }
function StudentAttendanceAnalysisComponent_Conditional_24_For_45_Template(rf, ctx) { if (rf & 1) {
    const _r12 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "article", 109)(1, "div")(2, "strong");
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "small");
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(6, "div")(7, "strong");
    i0.ɵɵtext(8);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(9, "small");
    i0.ɵɵtext(10);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(11, "div")(12, "strong");
    i0.ɵɵtext(13);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(14, "small");
    i0.ɵɵtext(15, "scheduled");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(16, "div")(17, "strong");
    i0.ɵɵtext(18);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(19, "small");
    i0.ɵɵtext(20);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(21, "div")(22, "strong", 75);
    i0.ɵɵtext(23);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(24, "small");
    i0.ɵɵtext(25, "attend all");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(26, "button", 14);
    i0.ɵɵlistener("click", function StudentAttendanceAnalysisComponent_Conditional_24_For_45_Template_button_click_26_listener() { const subject_r13 = i0.ɵɵrestoreView(_r12).$implicit; const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.openPlanner(subject_r13)); });
    i0.ɵɵtext(27, "Analyze ");
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(28, "svg", 114);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const subject_r13 = ctx.$implicit;
    const ctx_r1 = i0.ɵɵnextContext(2);
    const projection_r14 = ctx_r1.projectionFor(subject_r13);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(subject_r13.subjectName);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(subject_r13.subjectCode);
    i0.ɵɵadvance(2);
    i0.ɵɵclassProp("is-danger", subject_r13.attendancePercentage < ctx_r1.target());
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1("", ctx_r1.formatPercentage(subject_r13.attendancePercentage), "%");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r1.statusLabel(subject_r13, ctx_r1.target()));
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(subject_r13.upcomingLectures);
    i0.ɵɵadvance(4);
    i0.ɵɵclassProp("is-danger", !projection_r14.reachable);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(projection_r14.alreadyReached ? "Reached" : projection_r14.reachable ? projection_r14.classesRequired + " classes" : "Not reachable");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1("to reach ", ctx_r1.target(), "%");
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1("", ctx_r1.formatPercentage(projection_r14.bestPossiblePercentage), "%");
} }
function StudentAttendanceAnalysisComponent_Conditional_24_Conditional_46_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "section", 110);
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(1, "svg", 115);
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(2, "p");
    i0.ɵɵtext(3, "Select at least two subjects to continue comparing.");
    i0.ɵɵelementEnd()();
} }
function StudentAttendanceAnalysisComponent_Conditional_24_Conditional_47_For_1_Conditional_0_Conditional_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtext(0);
} if (rf & 2) {
    const subject_r15 = i0.ɵɵnextContext(2).$implicit;
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵtextInterpolate1(" It needs ", ctx_r1.projectionFor(subject_r15).classesRequired, " consecutive classes. ");
} }
function StudentAttendanceAnalysisComponent_Conditional_24_Conditional_47_For_1_Conditional_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "section", 110);
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(1, "svg", 115);
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(2, "p")(3, "strong");
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵtext(5);
    i0.ɵɵconditionalCreate(6, StudentAttendanceAnalysisComponent_Conditional_24_Conditional_47_For_1_Conditional_0_Conditional_6_Template, 1, 1);
    i0.ɵɵtext(7);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const subject_r15 = i0.ɵɵnextContext().$implicit;
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate2("", subject_r15.subjectName, " cannot reach ", ctx_r1.target(), "%");
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" within ", subject_r15.upcomingLectures, " scheduled classes. ");
    i0.ɵɵadvance();
    i0.ɵɵconditional(ctx_r1.projectionFor(subject_r15).classesRequired !== null ? 6 : -1);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" Best possible is ", ctx_r1.formatPercentage(ctx_r1.projectionFor(subject_r15).bestPossiblePercentage), "%.");
} }
function StudentAttendanceAnalysisComponent_Conditional_24_Conditional_47_For_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵconditionalCreate(0, StudentAttendanceAnalysisComponent_Conditional_24_Conditional_47_For_1_Conditional_0_Template, 8, 5, "section", 110);
} if (rf & 2) {
    const subject_r15 = ctx.$implicit;
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵconditional(!ctx_r1.projectionFor(subject_r15).reachable ? 0 : -1);
} }
function StudentAttendanceAnalysisComponent_Conditional_24_Conditional_47_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵrepeaterCreate(0, StudentAttendanceAnalysisComponent_Conditional_24_Conditional_47_For_1_Template, 1, 1, null, null, _forTrack0);
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵrepeater(ctx_r1.selectedSubjects());
} }
function StudentAttendanceAnalysisComponent_Conditional_24_Template(rf, ctx) { if (rf & 1) {
    const _r9 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 65);
    i0.ɵɵlistener("mousedown", function StudentAttendanceAnalysisComponent_Conditional_24_Template_div_mousedown_0_listener() { i0.ɵɵrestoreView(_r9); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.closeComparison()); });
    i0.ɵɵelementStart(1, "section", 97);
    i0.ɵɵlistener("mousedown", function StudentAttendanceAnalysisComponent_Conditional_24_Template_section_mousedown_1_listener($event) { return $event.stopPropagation(); });
    i0.ɵɵelement(2, "span", 67);
    i0.ɵɵelementStart(3, "header", 68);
    i0.ɵɵelement(4, "img", 64);
    i0.ɵɵelementStart(5, "div")(6, "h2", 98);
    i0.ɵɵtext(7, "Compare subjects");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "p");
    i0.ɵɵtext(9, "See how your subjects perform against your target.");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(10, "button", 99);
    i0.ɵɵlistener("click", function StudentAttendanceAnalysisComponent_Conditional_24_Template_button_click_10_listener() { i0.ɵɵrestoreView(_r9); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.closeComparison()); });
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(11, "svg", 100);
    i0.ɵɵelementEnd()();
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(12, "div", 101)(13, "div")(14, "strong");
    i0.ɵɵtext(15);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(16, "div", 102);
    i0.ɵɵrepeaterCreate(17, StudentAttendanceAnalysisComponent_Conditional_24_For_18_Template, 3, 1, "button", 103, _forTrack0);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(19, "div")(20, "strong");
    i0.ɵɵtext(21, "My target attendance");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(22, "div", 104)(23, "button", 105);
    i0.ɵɵlistener("click", function StudentAttendanceAnalysisComponent_Conditional_24_Template_button_click_23_listener() { i0.ɵɵrestoreView(_r9); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.adjustTarget(-1)); });
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(24, "svg", 85);
    i0.ɵɵelementEnd();
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(25, "strong");
    i0.ɵɵtext(26);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(27, "span");
    i0.ɵɵtext(28, "%");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(29, "button", 106);
    i0.ɵɵlistener("click", function StudentAttendanceAnalysisComponent_Conditional_24_Template_button_click_29_listener() { i0.ɵɵrestoreView(_r9); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.adjustTarget(1)); });
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(30, "svg", 87);
    i0.ɵɵelementEnd()()()();
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(31, "div", 107)(32, "div", 108)(33, "span");
    i0.ɵɵtext(34, "Subject");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(35, "span");
    i0.ɵɵtext(36, "Current");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(37, "span");
    i0.ɵɵtext(38, "Upcoming");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(39, "span");
    i0.ɵɵtext(40, "Need to attend");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(41, "span");
    i0.ɵɵtext(42, "Best possible");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(43, "span");
    i0.ɵɵelementEnd();
    i0.ɵɵrepeaterCreate(44, StudentAttendanceAnalysisComponent_Conditional_24_For_45_Template, 29, 12, "article", 109, _forTrack0);
    i0.ɵɵelementEnd();
    i0.ɵɵconditionalCreate(46, StudentAttendanceAnalysisComponent_Conditional_24_Conditional_46_Template, 4, 0, "section", 110)(47, StudentAttendanceAnalysisComponent_Conditional_24_Conditional_47_Template, 2, 0);
    i0.ɵɵelementStart(48, "footer", 111)(49, "p");
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(50, "svg", 112);
    i0.ɵɵtext(51, " Each subject is calculated separately.");
    i0.ɵɵelementEnd();
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(52, "button", 92);
    i0.ɵɵlistener("click", function StudentAttendanceAnalysisComponent_Conditional_24_Template_button_click_52_listener() { i0.ɵɵrestoreView(_r9); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.closeComparison()); });
    i0.ɵɵtext(53, "Done");
    i0.ɵɵelementEnd()()()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(15);
    i0.ɵɵtextInterpolate1("Selected subjects (", ctx_r1.selectedSubjects().length, ")");
    i0.ɵɵadvance(2);
    i0.ɵɵrepeater(ctx_r1.selectedSubjects());
    i0.ɵɵadvance(9);
    i0.ɵɵtextInterpolate(ctx_r1.target());
    i0.ɵɵadvance(18);
    i0.ɵɵrepeater(ctx_r1.selectedSubjects());
    i0.ɵɵadvance(2);
    i0.ɵɵconditional(ctx_r1.selectedSubjects().length < 2 ? 46 : 47);
} }
export class StudentAttendanceAnalysisComponent {
    api = inject(ApiService);
    router = inject(Router);
    session = inject(StudentSessionService);
    requiredAttendance = 75;
    data = signal(null, ...(ngDevMode ? [{ debugName: "data" }] : /* istanbul ignore next */ []));
    loading = signal(true, ...(ngDevMode ? [{ debugName: "loading" }] : /* istanbul ignore next */ []));
    refreshing = signal(false, ...(ngDevMode ? [{ debugName: "refreshing" }] : /* istanbul ignore next */ []));
    error = signal('', ...(ngDevMode ? [{ debugName: "error" }] : /* istanbul ignore next */ []));
    search = signal('', ...(ngDevMode ? [{ debugName: "search" }] : /* istanbul ignore next */ []));
    filter = signal('all', ...(ngDevMode ? [{ debugName: "filter" }] : /* istanbul ignore next */ []));
    sort = signal('lowest', ...(ngDevMode ? [{ debugName: "sort" }] : /* istanbul ignore next */ []));
    selectedSubjectIds = signal([], ...(ngDevMode ? [{ debugName: "selectedSubjectIds" }] : /* istanbul ignore next */ []));
    plannerSubject = signal(null, ...(ngDevMode ? [{ debugName: "plannerSubject" }] : /* istanbul ignore next */ []));
    compareOpen = signal(false, ...(ngDevMode ? [{ debugName: "compareOpen" }] : /* istanbul ignore next */ []));
    target = signal(80, ...(ngDevMode ? [{ debugName: "target" }] : /* istanbul ignore next */ []));
    subjects = computed(() => this.data()?.subjects ?? [], ...(ngDevMode ? [{ debugName: "subjects" }] : /* istanbul ignore next */ []));
    overall = computed(() => this.data()?.overall ?? {
        totalLectures: 0,
        presentLectures: 0,
        absentLectures: 0,
        attendancePercentage: 0,
    }, ...(ngDevMode ? [{ debugName: "overall" }] : /* istanbul ignore next */ []));
    filteredSubjects = computed(() => {
        const query = this.search().trim().toLocaleLowerCase();
        const status = this.filter();
        const items = this.subjects().filter((subject) => {
            const matchesSearch = !query ||
                `${subject.subjectName} ${subject.subjectCode} ${subject.facultyNames.join(' ')}`
                    .toLocaleLowerCase()
                    .includes(query);
            const matchesStatus = status === 'all' ||
                (status === 'on-track' && subject.attendancePercentage >= this.requiredAttendance) ||
                (status === 'attention' && subject.attendancePercentage < this.requiredAttendance);
            return matchesSearch && matchesStatus;
        });
        return [...items].sort((left, right) => {
            if (this.sort() === 'highest')
                return right.attendancePercentage - left.attendancePercentage;
            if (this.sort() === 'subject')
                return left.subjectName.localeCompare(right.subjectName);
            return left.attendancePercentage - right.attendancePercentage;
        });
    }, ...(ngDevMode ? [{ debugName: "filteredSubjects" }] : /* istanbul ignore next */ []));
    selectedSubjects = computed(() => {
        const ids = new Set(this.selectedSubjectIds());
        return this.subjects().filter((subject) => ids.has(subject.subjectId));
    }, ...(ngDevMode ? [{ debugName: "selectedSubjects" }] : /* istanbul ignore next */ []));
    plannerProjection = computed(() => {
        const subject = this.plannerSubject();
        return subject ? this.projectionFor(subject) : null;
    }, ...(ngDevMode ? [{ debugName: "plannerProjection" }] : /* istanbul ignore next */ []));
    constructor() {
        this.load();
    }
    refresh() {
        if (this.loading() || this.refreshing())
            return;
        this.refreshing.set(true);
        this.load(true);
    }
    updateSearch(value) {
        this.search.set(value);
    }
    updateFilter(value) {
        this.filter.set(value);
    }
    updateSort(value) {
        this.sort.set(value);
    }
    toggleSubject(subjectId) {
        const current = this.selectedSubjectIds();
        this.selectedSubjectIds.set(current.includes(subjectId)
            ? current.filter((id) => id !== subjectId)
            : current.length < 4
                ? [...current, subjectId]
                : current);
    }
    isSelected(subjectId) {
        return this.selectedSubjectIds().includes(subjectId);
    }
    openPlanner(subject) {
        this.compareOpen.set(false);
        this.target.set(80);
        this.plannerSubject.set(subject);
    }
    closePlanner() {
        this.plannerSubject.set(null);
    }
    openComparison() {
        if (this.selectedSubjects().length < 2)
            return;
        this.target.set(80);
        this.compareOpen.set(true);
    }
    closeComparison() {
        this.compareOpen.set(false);
    }
    adjustTarget(delta) {
        this.setTarget(this.target() + delta);
    }
    setTarget(value) {
        const parsed = Number(value);
        this.target.set(Math.min(100, Math.max(50, Number.isFinite(parsed) ? parsed : 80)));
    }
    resetPlanner() {
        this.target.set(80);
    }
    projectionFor(subject) {
        const upcoming = Math.max(0, subject.upcomingLectures);
        const futureTotal = subject.totalLectures + upcoming;
        const alreadyReached = subject.totalLectures > 0 && subject.attendancePercentage >= this.target();
        let classesRequired;
        if (alreadyReached)
            classesRequired = 0;
        else if (!subject.totalLectures)
            classesRequired = 1;
        else if (this.target() >= 100)
            classesRequired = null;
        else {
            classesRequired = Math.max(1, Math.ceil((this.target() * subject.totalLectures - 100 * subject.presentLectures) /
                (100 - this.target())));
        }
        const reachable = alreadyReached || (classesRequired !== null && classesRequired <= upcoming);
        const projectedTotal = subject.totalLectures + (classesRequired || 0);
        const projectedPresent = subject.presentLectures + (classesRequired || 0);
        return {
            futureTotal,
            alreadyReached,
            classesRequired,
            reachable,
            projectedPercentage: alreadyReached
                ? subject.attendancePercentage
                : projectedTotal
                    ? Number(((projectedPresent / projectedTotal) * 100).toFixed(1))
                    : 0,
            bestPossiblePercentage: futureTotal
                ? Number((((subject.presentLectures + upcoming) / futureTotal) * 100).toFixed(1))
                : 0,
            classesBeyondSchedule: classesRequired === null ? null : Math.max(0, classesRequired - upcoming),
        };
    }
    openSubject(subject) {
        this.closePlanner();
        this.closeComparison();
        void this.router.navigate(['/student/attendance/subjects', subject.subjectId]);
    }
    formatPercentage(value) {
        return new Intl.NumberFormat('en-IN', { maximumFractionDigits: 1 }).format(value);
    }
    statusLabel(subject, threshold = this.requiredAttendance) {
        return subject.attendancePercentage >= threshold
            ? threshold === this.requiredAttendance
                ? 'On track'
                : 'On target'
            : 'Below target';
    }
    load(isRefresh = false) {
        const token = this.session.token();
        if (!token) {
            this.error.set('Your student session is unavailable. Sign in again to continue.');
            this.loading.set(false);
            this.refreshing.set(false);
            return;
        }
        if (!isRefresh)
            this.loading.set(true);
        this.error.set('');
        this.api.studentAttendanceAnalytics(token).subscribe({
            next: (result) => {
                this.data.set(result);
                this.loading.set(false);
                this.refreshing.set(false);
            },
            error: () => {
                this.error.set('Attendance analysis is temporarily unavailable.');
                this.loading.set(false);
                this.refreshing.set(false);
            },
        });
    }
    static ɵfac = function StudentAttendanceAnalysisComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || StudentAttendanceAnalysisComponent)(); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: StudentAttendanceAnalysisComponent, selectors: [["erp-student-attendance-analysis"]], decls: 25, vars: 6, consts: [["aria-labelledby", "student-analysis-title", 1, "student-analysis-page"], [1, "student-analysis-heading"], ["aria-label", "Breadcrumb"], ["routerLink", "/student/attendance"], [1, "student-analysis-heading__title"], ["src", "/assets/student/attendance/analyze-attendance.webp", "width", "320", "height", "320", "alt", "", "aria-hidden", "true"], ["id", "student-analysis-title"], ["type", "button", 1, "student-analysis-refresh", 3, "click", "disabled"], ["lucideRefreshCw", "", "size", "18", "aria-hidden", "true"], ["role", "status", "aria-live", "polite", 1, "student-analysis-state"], ["role", "alert", 1, "student-analysis-state", "student-analysis-state--error"], ["role", "presentation", 1, "student-analysis-overlay"], ["aria-hidden", "true", 1, "student-analysis-state__spinner"], ["lucideAlertTriangle", "", "size", "28", "aria-hidden", "true"], ["type", "button", 3, "click"], ["aria-label", "Attendance summary", 1, "student-analysis-summary"], [1, "student-analysis-summary__card", "student-analysis-summary__card--attended"], ["lucideGraduationCap", "", "size", "26", "aria-hidden", "true"], [1, "student-analysis-summary__card", "student-analysis-summary__card--conducted"], ["lucideBookOpen", "", "size", "25", "aria-hidden", "true"], [1, "student-analysis-summary__card", "student-analysis-summary__card--absent"], ["lucideUserRound", "", "size", "25", "aria-hidden", "true"], [1, "student-analysis-summary__card", "student-analysis-summary__card--overall"], ["aria-hidden", "true", 1, "student-analysis-summary__donut"], ["aria-labelledby", "student-analysis-subjects-title", 1, "student-analysis-workspace"], [1, "student-analysis-workspace__header"], ["id", "student-analysis-subjects-title"], ["lucideInfo", "", "size", "17", "aria-hidden", "true"], [1, "student-analysis-toolbar"], [1, "student-analysis-search"], ["lucideSearch", "", "size", "19", "aria-hidden", "true"], [1, "student-analysis-visually-hidden"], ["type", "search", "placeholder", "Search subjects\u2026", 3, "ngModelChange", "ngModel"], [1, "student-analysis-select"], [3, "ngModelChange", "ngModel"], ["value", "all"], ["value", "on-track"], ["value", "attention"], ["lucideChevronDown", "", "size", "16", "aria-hidden", "true"], ["value", "lowest"], ["value", "highest"], ["value", "subject"], ["type", "button", 1, "student-analysis-compare", 3, "click", "disabled"], ["lucideUsersRound", "", "size", "18", "aria-hidden", "true"], ["aria-label", "Chart legend", 1, "student-analysis-legend"], [1, "is-attended"], [1, "is-absent"], ["role", "table", "aria-label", "Subject attendance analysis", 1, "student-analysis-table"], ["role", "row", 1, "student-analysis-table__head"], ["role", "columnheader", "aria-label", "Select"], ["role", "columnheader"], ["role", "columnheader", "aria-label", "Open"], ["role", "row", 1, "student-analysis-row"], [1, "student-analysis-empty"], [1, "student-analysis-workspace__footer"], ["role", "cell", 1, "student-analysis-check"], ["type", "checkbox", 3, "change", "checked"], ["lucideCheck", "", "size", "14", "aria-hidden", "true"], ["role", "cell", 1, "student-analysis-row__subject"], ["role", "cell", 1, "student-analysis-row__chart"], ["aria-hidden", "true", 1, "student-analysis-row__bar"], ["role", "cell", 1, "student-analysis-row__current"], ["type", "button", "role", "cell", 1, "student-analysis-row__open", 3, "click"], ["lucideChevronRight", "", "size", "20", "aria-hidden", "true"], ["src", "/assets/student/attendance/analyze-attendance.webp", "alt", "", "aria-hidden", "true"], ["role", "presentation", 1, "student-analysis-overlay", 3, "mousedown"], ["role", "dialog", "aria-modal", "true", "aria-labelledby", "student-planner-title", 1, "student-analysis-dialog", "student-analysis-dialog--planner", 3, "mousedown"], ["aria-hidden", "true", 1, "student-analysis-dialog__handle"], [1, "student-analysis-dialog__header"], ["src", "/assets/student/attendance/subject-attendance.webp", "alt", "", "aria-hidden", "true"], ["id", "student-planner-title"], [1, "student-analysis-live-chip"], ["type", "button", "aria-label", "Close attendance planner", 3, "click"], ["lucideX", "", "size", "23", "aria-hidden", "true"], [1, "student-analysis-dialog__stats"], [1, "is-success"], [1, "is-danger"], [1, "student-analysis-upcoming"], ["lucideBookOpen", "", "size", "20", "aria-hidden", "true"], [1, "student-analysis-planner-control"], [1, "student-analysis-planner-control__icon"], ["lucideTarget", "", "size", "25", "aria-hidden", "true"], [1, "student-analysis-planner-control__copy"], ["aria-label", "Target attendance percentage", 1, "student-analysis-stepper"], ["type", "button", "aria-label", "Decrease target", 3, "click"], ["lucideMinus", "", "size", "17"], ["type", "button", "aria-label", "Increase target", 3, "click"], ["lucidePlus", "", "size", "17"], [1, "student-analysis-range"], ["type", "range", "min", "50", "max", "100", "step", "1", 3, "ngModelChange", "ngModel"], [1, "student-analysis-dialog__actions"], ["type", "button", 1, "is-secondary", 3, "click"], ["type", "button", 1, "is-primary", 3, "click"], [1, "student-analysis-result"], ["lucideCheck", "", "size", "25", "aria-hidden", "true"], ["lucideAlertTriangle", "", "size", "25", "aria-hidden", "true"], [1, "student-analysis-insight"], ["role", "dialog", "aria-modal", "true", "aria-labelledby", "student-compare-title", 1, "student-analysis-dialog", "student-analysis-dialog--compare", 3, "mousedown"], ["id", "student-compare-title"], ["type", "button", "aria-label", "Close subject comparison", 3, "click"], ["lucideX", "", "size", "23"], [1, "student-analysis-compare-controls"], [1, "student-analysis-chips"], ["type", "button"], [1, "student-analysis-stepper"], ["type", "button", "aria-label", "Decrease comparison target", 3, "click"], ["type", "button", "aria-label", "Increase comparison target", 3, "click"], ["role", "table", "aria-label", "Selected subject projections", 1, "student-analysis-comparison-table"], ["role", "row", 1, "student-analysis-comparison-table__head"], ["role", "row"], [1, "student-analysis-warning"], [1, "student-analysis-dialog__actions", "student-analysis-dialog__actions--compare"], ["lucideInfo", "", "size", "17"], ["lucideX", "", "size", "14"], ["lucideChevronRight", "", "size", "17"], ["lucideAlertTriangle", "", "size", "21"]], template: function StudentAttendanceAnalysisComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0)(1, "header", 1)(2, "nav", 2)(3, "a", 3);
            i0.ɵɵtext(4, "Attendance");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(5, "b");
            i0.ɵɵtext(6, "/");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(7, "strong");
            i0.ɵɵtext(8, "Analyze");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(9, "div", 4);
            i0.ɵɵelement(10, "img", 5);
            i0.ɵɵelementStart(11, "span")(12, "h1", 6);
            i0.ɵɵtext(13, "Analyze Attendance");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(14, "p");
            i0.ɵɵtext(15, "Understand your attendance, subject by subject.");
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(16, "button", 7);
            i0.ɵɵlistener("click", function StudentAttendanceAnalysisComponent_Template_button_click_16_listener() { return ctx.refresh(); });
            i0.ɵɵnamespaceSVG();
            i0.ɵɵelement(17, "svg", 8);
            i0.ɵɵnamespaceHTML();
            i0.ɵɵelementStart(18, "span");
            i0.ɵɵtext(19, "Live data");
            i0.ɵɵelementEnd()()();
            i0.ɵɵconditionalCreate(20, StudentAttendanceAnalysisComponent_Conditional_20_Template, 6, 0, "section", 9)(21, StudentAttendanceAnalysisComponent_Conditional_21_Template, 8, 1, "section", 10)(22, StudentAttendanceAnalysisComponent_Conditional_22_Template, 107, 12);
            i0.ɵɵelementEnd();
            i0.ɵɵconditionalCreate(23, StudentAttendanceAnalysisComponent_Conditional_23_Template, 76, 11, "div", 11);
            i0.ɵɵconditionalCreate(24, StudentAttendanceAnalysisComponent_Conditional_24_Template, 54, 3, "div", 11);
        } if (rf & 2) {
            let tmp_3_0;
            i0.ɵɵadvance(16);
            i0.ɵɵproperty("disabled", ctx.loading() || ctx.refreshing());
            i0.ɵɵadvance();
            i0.ɵɵclassProp("is-spinning", ctx.refreshing());
            i0.ɵɵadvance(3);
            i0.ɵɵconditional(ctx.loading() ? 20 : ctx.error() ? 21 : 22);
            i0.ɵɵadvance(3);
            i0.ɵɵconditional((tmp_3_0 = ctx.plannerSubject()) ? 23 : -1, tmp_3_0);
            i0.ɵɵadvance();
            i0.ɵɵconditional(ctx.compareOpen() ? 24 : -1);
        } }, dependencies: [FormsModule, i1.NgSelectOption, i1.ɵNgSelectMultipleOption, i1.DefaultValueAccessor, i1.RangeValueAccessor, i1.SelectControlValueAccessor, i1.NgControlStatus, i1.NgModel, RouterLink,
            LucideAlertTriangle,
            LucideBookOpen,
            LucideCheck,
            LucideChevronDown,
            LucideChevronRight,
            LucideGraduationCap,
            LucideInfo,
            LucideMinus,
            LucidePlus,
            LucideRefreshCw,
            LucideSearch,
            LucideTarget,
            LucideUserRound,
            LucideUsersRound,
            LucideX,
            DatePipe], styles: ["\n[_nghost-%COMP%] {\n  display: block;\n}"], changeDetection: 0 });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(StudentAttendanceAnalysisComponent, [{
        type: Component,
        args: [{ selector: 'erp-student-attendance-analysis', imports: [
                    DatePipe,
                    FormsModule,
                    RouterLink,
                    LucideAlertTriangle,
                    LucideBookOpen,
                    LucideCheck,
                    LucideChevronDown,
                    LucideChevronRight,
                    LucideGraduationCap,
                    LucideInfo,
                    LucideMinus,
                    LucidePlus,
                    LucideRefreshCw,
                    LucideSearch,
                    LucideTarget,
                    LucideUserRound,
                    LucideUsersRound,
                    LucideX,
                ], changeDetection: ChangeDetectionStrategy.OnPush, template: "<div class=\"student-analysis-page\" aria-labelledby=\"student-analysis-title\">\n  <header class=\"student-analysis-heading\">\n    <nav aria-label=\"Breadcrumb\">\n      <a routerLink=\"/student/attendance\">Attendance</a><b>/</b><strong>Analyze</strong>\n    </nav>\n    <div class=\"student-analysis-heading__title\">\n      <img\n        src=\"/assets/student/attendance/analyze-attendance.webp\"\n        width=\"320\"\n        height=\"320\"\n        alt=\"\"\n        aria-hidden=\"true\"\n      />\n      <span>\n        <h1 id=\"student-analysis-title\">Analyze Attendance</h1>\n        <p>Understand your attendance, subject by subject.</p>\n      </span>\n    </div>\n    <button\n      type=\"button\"\n      class=\"student-analysis-refresh\"\n      [disabled]=\"loading() || refreshing()\"\n      (click)=\"refresh()\"\n    >\n      <svg lucideRefreshCw size=\"18\" [class.is-spinning]=\"refreshing()\" aria-hidden=\"true\"></svg>\n      <span>Live data</span>\n    </button>\n  </header>\n\n  @if (loading()) {\n    <section class=\"student-analysis-state\" role=\"status\" aria-live=\"polite\">\n      <span class=\"student-analysis-state__spinner\" aria-hidden=\"true\"></span>\n      <strong>Building your attendance analysis</strong>\n      <p>Calculating subject performance and timetable projections\u2026</p>\n    </section>\n  } @else if (error()) {\n    <section class=\"student-analysis-state student-analysis-state--error\" role=\"alert\">\n      <svg lucideAlertTriangle size=\"28\" aria-hidden=\"true\"></svg>\n      <strong>Analysis could not be loaded</strong>\n      <p>{{ error() }}</p>\n      <button type=\"button\" (click)=\"refresh()\">Try again</button>\n    </section>\n  } @else {\n    <section class=\"student-analysis-summary\" aria-label=\"Attendance summary\">\n      <article class=\"student-analysis-summary__card student-analysis-summary__card--attended\">\n        <span><svg lucideGraduationCap size=\"26\" aria-hidden=\"true\"></svg></span>\n        <div><small>Attended</small><strong>{{ overall().presentLectures }}</strong><p>Lectures attended</p></div>\n      </article>\n      <article class=\"student-analysis-summary__card student-analysis-summary__card--conducted\">\n        <span><svg lucideBookOpen size=\"25\" aria-hidden=\"true\"></svg></span>\n        <div><small>Conducted</small><strong>{{ overall().totalLectures }}</strong><p>Total lectures conducted</p></div>\n      </article>\n      <article class=\"student-analysis-summary__card student-analysis-summary__card--absent\">\n        <span><svg lucideUserRound size=\"25\" aria-hidden=\"true\"></svg></span>\n        <div><small>Absent</small><strong>{{ overall().absentLectures }}</strong><p>Lectures missed</p></div>\n      </article>\n      <article class=\"student-analysis-summary__card student-analysis-summary__card--overall\">\n        <span class=\"student-analysis-summary__donut\" aria-hidden=\"true\"></span>\n        <div><small>Overall Attendance</small><strong>{{ formatPercentage(overall().attendancePercentage) }}%</strong><p>Across all subjects</p></div>\n      </article>\n    </section>\n\n    <section class=\"student-analysis-workspace\" aria-labelledby=\"student-analysis-subjects-title\">\n      <header class=\"student-analysis-workspace__header\">\n        <div>\n          <h2 id=\"student-analysis-subjects-title\">Subject analysis \u00B7 {{ subjects().length }}</h2>\n          <p>Attendance breakdown for each enrolled subject.</p>\n        </div>\n        <span><svg lucideInfo size=\"17\" aria-hidden=\"true\"></svg> Select subjects to compare</span>\n      </header>\n\n      <div class=\"student-analysis-toolbar\">\n        <label class=\"student-analysis-search\">\n          <svg lucideSearch size=\"19\" aria-hidden=\"true\"></svg>\n          <span class=\"student-analysis-visually-hidden\">Search subjects</span>\n          <input\n            type=\"search\"\n            placeholder=\"Search subjects\u2026\"\n            [ngModel]=\"search()\"\n            (ngModelChange)=\"updateSearch($event)\"\n          />\n        </label>\n        <label class=\"student-analysis-select\">\n          <span class=\"student-analysis-visually-hidden\">Filter subjects</span>\n          <select [ngModel]=\"filter()\" (ngModelChange)=\"updateFilter($event)\">\n            <option value=\"all\">All subjects</option>\n            <option value=\"on-track\">On track</option>\n            <option value=\"attention\">Below target</option>\n          </select>\n          <svg lucideChevronDown size=\"16\" aria-hidden=\"true\"></svg>\n        </label>\n        <label class=\"student-analysis-select\">\n          <span class=\"student-analysis-visually-hidden\">Sort subjects</span>\n          <select [ngModel]=\"sort()\" (ngModelChange)=\"updateSort($event)\">\n            <option value=\"lowest\">Lowest attendance</option>\n            <option value=\"highest\">Highest attendance</option>\n            <option value=\"subject\">Subject name</option>\n          </select>\n          <svg lucideChevronDown size=\"16\" aria-hidden=\"true\"></svg>\n        </label>\n        <button\n          type=\"button\"\n          class=\"student-analysis-compare\"\n          [disabled]=\"selectedSubjects().length < 2\"\n          (click)=\"openComparison()\"\n        >\n          <svg lucideUsersRound size=\"18\" aria-hidden=\"true\"></svg>\n          Compare selected\n          @if (selectedSubjects().length) { <b>{{ selectedSubjects().length }}</b> }\n        </button>\n      </div>\n\n      <div class=\"student-analysis-legend\" aria-label=\"Chart legend\">\n        <span><i class=\"is-attended\"></i>Attended</span>\n        <span><i class=\"is-absent\"></i>Absent</span>\n      </div>\n\n      <div class=\"student-analysis-table\" role=\"table\" aria-label=\"Subject attendance analysis\">\n        <div class=\"student-analysis-table__head\" role=\"row\">\n          <span role=\"columnheader\" aria-label=\"Select\"></span>\n          <span role=\"columnheader\">Subject</span>\n          <span role=\"columnheader\">Attendance split</span>\n          <span role=\"columnheader\">Current</span>\n          <span role=\"columnheader\" aria-label=\"Open\"></span>\n        </div>\n        @for (subject of filteredSubjects(); track subject.subjectId) {\n          <article class=\"student-analysis-row\" role=\"row\">\n            <label class=\"student-analysis-check\" role=\"cell\">\n              <input\n                type=\"checkbox\"\n                [checked]=\"isSelected(subject.subjectId)\"\n                (change)=\"toggleSubject(subject.subjectId)\"\n                [attr.aria-label]=\"'Select ' + subject.subjectName + ' for comparison'\"\n              />\n              <span><svg lucideCheck size=\"14\" aria-hidden=\"true\"></svg></span>\n            </label>\n            <div class=\"student-analysis-row__subject\" role=\"cell\">\n              <strong>{{ subject.subjectName }}</strong>\n              <small>{{ subject.subjectCode || 'Subject' }}</small>\n            </div>\n            <div class=\"student-analysis-row__chart\" role=\"cell\">\n              <span class=\"student-analysis-row__bar\" aria-hidden=\"true\">\n                <i class=\"is-attended\" [style.width.%]=\"subject.attendancePercentage\">\n                  @if (subject.presentLectures) { <b>{{ subject.presentLectures }}</b> }\n                </i>\n                <i class=\"is-absent\" [style.width.%]=\"100 - subject.attendancePercentage\">\n                  @if (subject.absentLectures) { <b>{{ subject.absentLectures }}</b> }\n                </i>\n              </span>\n              <small>{{ subject.presentLectures }} attended \u00B7 {{ subject.absentLectures }} absent</small>\n            </div>\n            <div class=\"student-analysis-row__current\" role=\"cell\">\n              <strong>{{ formatPercentage(subject.attendancePercentage) }}%</strong>\n              <small [class.is-alert]=\"subject.attendancePercentage < requiredAttendance\">\n                {{ statusLabel(subject) }}\n              </small>\n            </div>\n            <button\n              type=\"button\"\n              class=\"student-analysis-row__open\"\n              role=\"cell\"\n              (click)=\"openPlanner(subject)\"\n              [attr.aria-label]=\"'Analyze ' + subject.subjectName\"\n            >\n              <svg lucideChevronRight size=\"20\" aria-hidden=\"true\"></svg>\n            </button>\n          </article>\n        } @empty {\n          <div class=\"student-analysis-empty\">\n            <img src=\"/assets/student/attendance/analyze-attendance.webp\" alt=\"\" aria-hidden=\"true\" />\n            <strong>No matching subjects</strong>\n            <p>Change the search or filter to see more attendance records.</p>\n          </div>\n        }\n      </div>\n\n      <footer class=\"student-analysis-workspace__footer\">\n        <span><svg lucideInfo size=\"17\" aria-hidden=\"true\"></svg> Tap a subject to analyze its attendance plan.</span>\n        @if (data()?.syncedAt; as syncedAt) {\n          <span><i></i> Last synced: {{ syncedAt | date: 'mediumTime' }}</span>\n        }\n      </footer>\n    </section>\n  }\n</div>\n\n@if (plannerSubject(); as subject) {\n  <div class=\"student-analysis-overlay\" role=\"presentation\" (mousedown)=\"closePlanner()\">\n    <section\n      class=\"student-analysis-dialog student-analysis-dialog--planner\"\n      role=\"dialog\"\n      aria-modal=\"true\"\n      aria-labelledby=\"student-planner-title\"\n      (mousedown)=\"$event.stopPropagation()\"\n    >\n      <span class=\"student-analysis-dialog__handle\" aria-hidden=\"true\"></span>\n      <header class=\"student-analysis-dialog__header\">\n        <img src=\"/assets/student/attendance/subject-attendance.webp\" alt=\"\" aria-hidden=\"true\" />\n        <div><h2 id=\"student-planner-title\">{{ subject.subjectName }}</h2><p>{{ subject.subjectCode || 'Subject' }}</p></div>\n        <span class=\"student-analysis-live-chip\">Live data</span>\n        <button type=\"button\" (click)=\"closePlanner()\" aria-label=\"Close attendance planner\">\n          <svg lucideX size=\"23\" aria-hidden=\"true\"></svg>\n        </button>\n      </header>\n\n      <dl class=\"student-analysis-dialog__stats\">\n        <div><dt>{{ formatPercentage(subject.attendancePercentage) }}%</dt><dd>Current attendance</dd></div>\n        <div><dt class=\"is-success\">{{ subject.presentLectures }}</dt><dd>Attended</dd></div>\n        <div><dt class=\"is-danger\">{{ subject.absentLectures }}</dt><dd>Absent</dd></div>\n        <div><dt>{{ subject.totalLectures }}</dt><dd>Conducted</dd></div>\n      </dl>\n\n      <div class=\"student-analysis-upcoming\">\n        <svg lucideBookOpen size=\"20\" aria-hidden=\"true\"></svg>\n        <strong>{{ subject.upcomingLectures }} upcoming</strong><span>\u00B7 From timetable</span>\n        <small>\n          @if (subject.upcomingSource === 'configured-timetable' && subject.upcomingThrough) {\n            Scheduled through {{ subject.upcomingThrough | date: 'mediumDate' : 'UTC' }}\n          } @else {\n            Next {{ data()?.planningWindowDays }} days\n          }\n        </small>\n      </div>\n\n      <div class=\"student-analysis-planner-control\">\n        <span class=\"student-analysis-planner-control__icon\"><svg lucideTarget size=\"25\" aria-hidden=\"true\"></svg></span>\n        <div class=\"student-analysis-planner-control__copy\"><h3>My target</h3><p>Set your personal attendance target</p></div>\n        <div class=\"student-analysis-stepper\" aria-label=\"Target attendance percentage\">\n          <button type=\"button\" (click)=\"adjustTarget(-1)\" aria-label=\"Decrease target\"><svg lucideMinus size=\"17\"></svg></button>\n          <strong>{{ target() }}</strong><span>%</span>\n          <button type=\"button\" (click)=\"adjustTarget(1)\" aria-label=\"Increase target\"><svg lucidePlus size=\"17\"></svg></button>\n        </div>\n        <label class=\"student-analysis-range\">\n          <span class=\"student-analysis-visually-hidden\">Target attendance percentage</span>\n          <input type=\"range\" min=\"50\" max=\"100\" step=\"1\" [ngModel]=\"target()\" (ngModelChange)=\"setTarget($event)\" />\n          <small><b>50%</b><b>100%</b></small>\n        </label>\n      </div>\n\n      @if (plannerProjection(); as projection) {\n        <section\n          class=\"student-analysis-result\"\n          [class.student-analysis-result--warning]=\"!projection.reachable\"\n        >\n          <span>\n            @if (projection.reachable) { <svg lucideCheck size=\"25\" aria-hidden=\"true\"></svg> }\n            @else { <svg lucideAlertTriangle size=\"25\" aria-hidden=\"true\"></svg> }\n          </span>\n          <div>\n            @if (projection.alreadyReached) {\n              <h3>Target already achieved</h3>\n              <p>Your attendance is <strong>{{ formatPercentage(subject.attendancePercentage) }}%</strong>, which has cleared the {{ target() }}% target.</p>\n            } @else if (projection.reachable) {\n              <h3>Attend the next {{ projection.classesRequired }} classes</h3>\n              <p>You will reach approximately <strong>{{ formatPercentage(projection.projectedPercentage) }}%</strong> after {{ subject.presentLectures + (projection.classesRequired || 0) }} / {{ subject.totalLectures + (projection.classesRequired || 0) }} attended.</p>\n            } @else if (projection.classesRequired !== null) {\n              <h3>Not enough scheduled classes</h3>\n              <p>You need <strong>{{ projection.classesRequired }} consecutive classes</strong>, but only {{ subject.upcomingLectures }} are currently scheduled.</p>\n            } @else {\n              <h3>This target is not reachable</h3>\n              <p>A 100% target cannot be restored because an absence is already recorded.</p>\n            }\n          </div>\n          <aside>\n            @if (projection.alreadyReached) {\n              <small>Status</small><strong>Target reached</strong>\n            } @else if (projection.reachable) {\n              <small>Classes available</small><strong>{{ subject.upcomingLectures }} scheduled</strong>\n            } @else {\n              <small>Best possible</small><strong>{{ formatPercentage(projection.bestPossiblePercentage) }}%</strong>\n            }\n          </aside>\n        </section>\n        <section class=\"student-analysis-insight\">\n          <img src=\"/assets/student/attendance/analyze-attendance.webp\" alt=\"\" aria-hidden=\"true\" />\n          @if (projection.alreadyReached) {\n            <p><strong>You have reached your selected target.</strong><br />Keep your attendance at or above {{ target() }}% in future classes.</p>\n          } @else if (projection.reachable) {\n            <p><strong>Calculated automatically from saved attendance and the timetable.</strong><br />{{ subject.upcomingLectures - (projection.classesRequired || 0) }} scheduled classes remain after the earliest point you can reach the target.</p>\n          } @else if (projection.classesBeyondSchedule !== null) {\n            <p><strong>{{ projection.classesBeyondSchedule }} more classes are required beyond the current timetable.</strong><br />The result will update automatically when more classes are scheduled.</p>\n          } @else {\n            <p><strong>Choose a target below 100% for a reachable plan.</strong><br />All calculations use faculty-saved attendance only.</p>\n          }\n        </section>\n      }\n\n      <footer class=\"student-analysis-dialog__actions\">\n        <button type=\"button\" class=\"is-secondary\" (click)=\"resetPlanner()\">Reset</button>\n        <button type=\"button\" class=\"is-primary\" (click)=\"closePlanner()\">Done</button>\n      </footer>\n    </section>\n  </div>\n}\n\n@if (compareOpen()) {\n  <div class=\"student-analysis-overlay\" role=\"presentation\" (mousedown)=\"closeComparison()\">\n    <section\n      class=\"student-analysis-dialog student-analysis-dialog--compare\"\n      role=\"dialog\"\n      aria-modal=\"true\"\n      aria-labelledby=\"student-compare-title\"\n      (mousedown)=\"$event.stopPropagation()\"\n    >\n      <span class=\"student-analysis-dialog__handle\" aria-hidden=\"true\"></span>\n      <header class=\"student-analysis-dialog__header\">\n        <img src=\"/assets/student/attendance/analyze-attendance.webp\" alt=\"\" aria-hidden=\"true\" />\n        <div><h2 id=\"student-compare-title\">Compare subjects</h2><p>See how your subjects perform against your target.</p></div>\n        <button type=\"button\" (click)=\"closeComparison()\" aria-label=\"Close subject comparison\"><svg lucideX size=\"23\"></svg></button>\n      </header>\n\n      <div class=\"student-analysis-compare-controls\">\n        <div>\n          <strong>Selected subjects ({{ selectedSubjects().length }})</strong>\n          <div class=\"student-analysis-chips\">\n            @for (subject of selectedSubjects(); track subject.subjectId) {\n              <button type=\"button\" (click)=\"toggleSubject(subject.subjectId)\">{{ subject.subjectName }} <svg lucideX size=\"14\"></svg></button>\n            }\n          </div>\n        </div>\n        <div>\n          <strong>My target attendance</strong>\n          <div class=\"student-analysis-stepper\">\n            <button type=\"button\" (click)=\"adjustTarget(-1)\" aria-label=\"Decrease comparison target\"><svg lucideMinus size=\"17\"></svg></button>\n            <strong>{{ target() }}</strong><span>%</span>\n            <button type=\"button\" (click)=\"adjustTarget(1)\" aria-label=\"Increase comparison target\"><svg lucidePlus size=\"17\"></svg></button>\n          </div>\n        </div>\n      </div>\n\n      <div class=\"student-analysis-comparison-table\" role=\"table\" aria-label=\"Selected subject projections\">\n        <div class=\"student-analysis-comparison-table__head\" role=\"row\">\n          <span>Subject</span><span>Current</span><span>Upcoming</span><span>Need to attend</span><span>Best possible</span><span></span>\n        </div>\n        @for (subject of selectedSubjects(); track subject.subjectId) {\n          @let projection = projectionFor(subject);\n          <article role=\"row\">\n            <div><strong>{{ subject.subjectName }}</strong><small>{{ subject.subjectCode }}</small></div>\n            <div><strong [class.is-danger]=\"subject.attendancePercentage < target()\">{{ formatPercentage(subject.attendancePercentage) }}%</strong><small>{{ statusLabel(subject, target()) }}</small></div>\n            <div><strong>{{ subject.upcomingLectures }}</strong><small>scheduled</small></div>\n            <div><strong [class.is-danger]=\"!projection.reachable\">{{ projection.alreadyReached ? 'Reached' : projection.reachable ? projection.classesRequired + ' classes' : 'Not reachable' }}</strong><small>to reach {{ target() }}%</small></div>\n            <div><strong class=\"is-success\">{{ formatPercentage(projection.bestPossiblePercentage) }}%</strong><small>attend all</small></div>\n            <button type=\"button\" (click)=\"openPlanner(subject)\">Analyze <svg lucideChevronRight size=\"17\"></svg></button>\n          </article>\n        }\n      </div>\n\n      @if (selectedSubjects().length < 2) {\n        <section class=\"student-analysis-warning\"><svg lucideAlertTriangle size=\"21\"></svg><p>Select at least two subjects to continue comparing.</p></section>\n      } @else {\n        @for (subject of selectedSubjects(); track subject.subjectId) {\n          @if (!projectionFor(subject).reachable) {\n            <section class=\"student-analysis-warning\"><svg lucideAlertTriangle size=\"21\"></svg><p><strong>{{ subject.subjectName }} cannot reach {{ target() }}%</strong> within {{ subject.upcomingLectures }} scheduled classes. @if (projectionFor(subject).classesRequired !== null) { It needs {{ projectionFor(subject).classesRequired }} consecutive classes. } Best possible is {{ formatPercentage(projectionFor(subject).bestPossiblePercentage) }}%.</p></section>\n          }\n        }\n      }\n\n      <footer class=\"student-analysis-dialog__actions student-analysis-dialog__actions--compare\">\n        <p><svg lucideInfo size=\"17\"></svg> Each subject is calculated separately.</p>\n        <button type=\"button\" class=\"is-primary\" (click)=\"closeComparison()\">Done</button>\n      </footer>\n    </section>\n  </div>\n}\n", styles: ["/* ERP-LOCAL-STYLE: analysis host boundary; visual system is included by student-theme */\n:host {\n  display: block;\n}\n"] }]
    }], () => [], null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(StudentAttendanceAnalysisComponent, { className: "StudentAttendanceAnalysisComponent", filePath: "frontend/src/app/features/student/academics/student-attendance-analysis.component.ts", lineNumber: 68 }); })();
