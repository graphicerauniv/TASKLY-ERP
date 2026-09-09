import { DatePipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, DestroyRef, computed, inject, signal, } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { ActivatedRoute, Router } from '@angular/router';
import { LucideAlertCircle, LucideArrowDownToLine, LucideArrowLeft, LucideBookOpen, LucideCalendarDays, LucideCheck, LucideChevronDown, LucideChevronLeft, LucideChevronRight, LucideCircleMinus, LucideClock3, LucideFilter, LucideInfo, LucideMapPin, LucideMonitor, LucideRefreshCw, LucideSearch, LucideUserRound, LucideX, } from '@lucide/angular';
import { ApiService } from '../../../core/api.service';
import { StudentSessionService } from '../shared/services/student-session.service';
import { StudentSubjectIconComponent } from '../shared/components/student-subject-icon/student-subject-icon.component';
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
const _c0 = () => ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
const _c1 = () => ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const _forTrack0 = ($index, $item) => $item.subjectId;
const _forTrack1 = ($index, $item) => $item.key;
const _forTrack2 = ($index, $item) => $item.recordId;
function StudentSubjectAttendanceComponent_Conditional_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "section", 1);
    i0.ɵɵelement(1, "span");
    i0.ɵɵelementStart(2, "strong");
    i0.ɵɵtext(3, "Loading subject attendance");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "p");
    i0.ɵɵtext(5, "Preparing your lecture records\u2026");
    i0.ɵɵelementEnd()();
} }
function StudentSubjectAttendanceComponent_Conditional_2_Template(rf, ctx) { if (rf & 1) {
    const _r1 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "section", 2);
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(1, "svg", 3);
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(2, "strong");
    i0.ɵɵtext(3, "Attendance could not be loaded");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "p");
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "button", 4);
    i0.ɵɵlistener("click", function StudentSubjectAttendanceComponent_Conditional_2_Template_button_click_6_listener() { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.goBack()); });
    i0.ɵɵtext(7, "Back to attendance");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(ctx_r1.error());
} }
function StudentSubjectAttendanceComponent_Conditional_3_For_127_Template(rf, ctx) { if (rf & 1) {
    const _r4 = i0.ɵɵgetCurrentView();
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
    i0.ɵɵelementStart(10, "td", 44);
    i0.ɵɵtext(11);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(12, "td", 45);
    i0.ɵɵtext(13);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(14, "td")(15, "div")(16, "span");
    i0.ɵɵelement(17, "i");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(18, "b");
    i0.ɵɵtext(19);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(20, "em");
    i0.ɵɵtext(21);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(22, "td")(23, "button", 4);
    i0.ɵɵlistener("click", function StudentSubjectAttendanceComponent_Conditional_3_For_127_Template_button_click_23_listener() { const subject_r5 = i0.ɵɵrestoreView(_r4).$implicit; const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.openSubject(subject_r5)); });
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(24, "svg", 46);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const subject_r5 = ctx.$implicit;
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(subject_r5.subjectName);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(subject_r5.subjectCode);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(subject_r5.facultyNames.join(", ") || "Faculty not assigned");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(subject_r5.totalLectures);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(subject_r5.presentLectures);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(subject_r5.absentLectures);
    i0.ɵɵadvance(2);
    i0.ɵɵclassMap("subject-attendance-table-progress is-" + ctx_r1.subjectStatus(subject_r5.attendancePercentage));
    i0.ɵɵadvance(2);
    i0.ɵɵstyleProp("width", subject_r5.attendancePercentage + "%");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1("", ctx_r1.formatPercentage(subject_r5.attendancePercentage), "%");
    i0.ɵɵadvance();
    i0.ɵɵclassMap("is-" + ctx_r1.subjectStatus(subject_r5.attendancePercentage));
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r1.statusLabel(subject_r5.attendancePercentage));
    i0.ɵɵadvance(2);
    i0.ɵɵattribute("aria-label", "Open " + subject_r5.subjectName);
} }
function StudentSubjectAttendanceComponent_Conditional_3_For_130_Conditional_13_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(0, "svg", 50);
} }
function StudentSubjectAttendanceComponent_Conditional_3_For_130_Conditional_14_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(0, "svg", 51);
} }
function StudentSubjectAttendanceComponent_Conditional_3_For_130_Template(rf, ctx) { if (rf & 1) {
    const _r6 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 4);
    i0.ɵɵlistener("click", function StudentSubjectAttendanceComponent_Conditional_3_For_130_Template_button_click_0_listener() { const subject_r7 = i0.ɵɵrestoreView(_r6).$implicit; const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.openSubject(subject_r7)); });
    i0.ɵɵelement(1, "erp-student-subject-icon", 47);
    i0.ɵɵelementStart(2, "span", 48)(3, "strong");
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "small");
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "i");
    i0.ɵɵelement(8, "b");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(9, "span", 49)(10, "strong");
    i0.ɵɵtext(11);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(12, "small");
    i0.ɵɵconditionalCreate(13, StudentSubjectAttendanceComponent_Conditional_3_For_130_Conditional_13_Template, 1, 0, ":svg:svg", 50)(14, StudentSubjectAttendanceComponent_Conditional_3_For_130_Conditional_14_Template, 1, 0, ":svg:svg", 51);
    i0.ɵɵtext(15);
    i0.ɵɵelementEnd()();
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(16, "svg", 52);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const subject_r7 = ctx.$implicit;
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵproperty("subject", subject_r7.subjectName)("size", 25);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(subject_r7.subjectName);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate2("", subject_r7.subjectCode, " \u00B7 ", subject_r7.facultyNames[0] || "Faculty not assigned");
    i0.ɵɵadvance(2);
    i0.ɵɵstyleProp("width", subject_r7.attendancePercentage + "%");
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1("", ctx_r1.formatPercentage(subject_r7.attendancePercentage), "%");
    i0.ɵɵadvance();
    i0.ɵɵclassMap("is-" + ctx_r1.subjectStatus(subject_r7.attendancePercentage));
    i0.ɵɵadvance();
    i0.ɵɵconditional(ctx_r1.subjectStatus(subject_r7.attendancePercentage) === "safe" ? 13 : 14);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", ctx_r1.statusLabel(subject_r7.attendancePercentage), " ");
} }
function StudentSubjectAttendanceComponent_Conditional_3_ForEmpty_131_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 39);
    i0.ɵɵtext(1, "No subjects match your search or filter.");
    i0.ɵɵelementEnd();
} }
function StudentSubjectAttendanceComponent_Conditional_3_Template(rf, ctx) { if (rf & 1) {
    const _r3 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "header", 5)(1, "nav", 6)(2, "span");
    i0.ɵɵtext(3, "Academics");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "b");
    i0.ɵɵtext(5, "/");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "span");
    i0.ɵɵtext(7, "Attendance");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "b");
    i0.ɵɵtext(9, "/");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(10, "strong");
    i0.ɵɵtext(11, "Subject Attendance");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(12, "div")(13, "button", 7);
    i0.ɵɵlistener("click", function StudentSubjectAttendanceComponent_Conditional_3_Template_button_click_13_listener() { i0.ɵɵrestoreView(_r3); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.goBack()); });
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(14, "svg", 8);
    i0.ɵɵelementEnd();
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(15, "div")(16, "h1");
    i0.ɵɵtext(17, "Subject Attendance");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(18, "p");
    i0.ɵɵtext(19, "Review attendance across every enrolled subject.");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(20, "div", 9)(21, "button", 10);
    i0.ɵɵlistener("click", function StudentSubjectAttendanceComponent_Conditional_3_Template_button_click_21_listener() { i0.ɵɵrestoreView(_r3); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.loadSubjects()); });
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(22, "svg", 11);
    i0.ɵɵelementEnd()()()();
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(23, "section", 12)(24, "div", 13)(25, "strong");
    i0.ɵɵtext(26);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(27, "div")(28, "strong");
    i0.ɵɵtext(29, "Overall");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(30, "span");
    i0.ɵɵtext(31);
    i0.ɵɵelementEnd()();
    i0.ɵɵelement(32, "i");
    i0.ɵɵelementStart(33, "div", 14)(34, "span");
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(35, "svg", 15);
    i0.ɵɵelementEnd();
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(36, "strong");
    i0.ɵɵtext(37);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(38, "b");
    i0.ɵɵtext(39, "Present");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(40, "small");
    i0.ɵɵtext(41, "classes attended");
    i0.ɵɵelementEnd()();
    i0.ɵɵelement(42, "i");
    i0.ɵɵelementStart(43, "div", 16)(44, "span");
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(45, "svg", 17);
    i0.ɵɵelementEnd();
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(46, "strong");
    i0.ɵɵtext(47);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(48, "b");
    i0.ɵɵtext(49, "Absent");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(50, "small");
    i0.ɵɵtext(51, "classes missed");
    i0.ɵɵelementEnd()();
    i0.ɵɵelement(52, "i");
    i0.ɵɵelementStart(53, "div", 18)(54, "span");
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(55, "svg", 19);
    i0.ɵɵelementEnd();
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(56, "strong");
    i0.ɵɵtext(57);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(58, "b");
    i0.ɵɵtext(59, "Conducted");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(60, "small");
    i0.ɵɵtext(61, "total classes");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(62, "section", 20)(63, "div")(64, "strong");
    i0.ɵɵtext(65);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(66, "span");
    i0.ɵɵtext(67, "Overall attendance");
    i0.ɵɵelementEnd()();
    i0.ɵɵelement(68, "i", 21);
    i0.ɵɵelementStart(69, "div")(70, "p")(71, "strong");
    i0.ɵɵtext(72);
    i0.ɵɵelementEnd();
    i0.ɵɵtext(73);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(74, "span", 22);
    i0.ɵɵelement(75, "i")(76, "b");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(77, "small");
    i0.ɵɵtext(78);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(79, "section", 23)(80, "header")(81, "label");
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(82, "svg", 24);
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(83, "input", 25);
    i0.ɵɵlistener("ngModelChange", function StudentSubjectAttendanceComponent_Conditional_3_Template_input_ngModelChange_83_listener($event) { i0.ɵɵrestoreView(_r3); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.setSearch($event)); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(84, "div", 26)(85, "button", 4);
    i0.ɵɵlistener("click", function StudentSubjectAttendanceComponent_Conditional_3_Template_button_click_85_listener() { i0.ɵɵrestoreView(_r3); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.cycleSubjectFilter()); });
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(86, "svg", 27);
    i0.ɵɵtext(87);
    i0.ɵɵelement(88, "svg", 28);
    i0.ɵɵelementEnd();
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(89, "button", 4);
    i0.ɵɵlistener("click", function StudentSubjectAttendanceComponent_Conditional_3_Template_button_click_89_listener() { i0.ɵɵrestoreView(_r3); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.cycleSubjectSort()); });
    i0.ɵɵtext(90);
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(91, "svg", 28);
    i0.ɵɵelementEnd()()();
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(92, "div", 29)(93, "button", 4);
    i0.ɵɵlistener("click", function StudentSubjectAttendanceComponent_Conditional_3_Template_button_click_93_listener() { i0.ɵɵrestoreView(_r3); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.setSubjectFilter("all")); });
    i0.ɵɵtext(94, " All ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(95, "button", 4);
    i0.ɵɵlistener("click", function StudentSubjectAttendanceComponent_Conditional_3_Template_button_click_95_listener() { i0.ɵɵrestoreView(_r3); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.setSubjectFilter("safe")); });
    i0.ɵɵelementStart(96, "span", 30);
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(97, "svg", 31);
    i0.ɵɵelementEnd();
    i0.ɵɵtext(98, " On track ");
    i0.ɵɵelementEnd();
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(99, "button", 4);
    i0.ɵɵlistener("click", function StudentSubjectAttendanceComponent_Conditional_3_Template_button_click_99_listener() { i0.ɵɵrestoreView(_r3); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.setSubjectFilter("attention")); });
    i0.ɵɵelementStart(100, "span", 32);
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(101, "svg", 33);
    i0.ɵɵelementEnd();
    i0.ɵɵtext(102, " Attention ");
    i0.ɵɵelementEnd();
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(103, "button", 4);
    i0.ɵɵlistener("click", function StudentSubjectAttendanceComponent_Conditional_3_Template_button_click_103_listener() { i0.ɵɵrestoreView(_r3); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.setSubjectFilter("critical")); });
    i0.ɵɵelementStart(104, "span", 34);
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(105, "svg", 35);
    i0.ɵɵelementEnd();
    i0.ɵɵtext(106, " Critical ");
    i0.ɵɵelementEnd()();
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(107, "div", 36)(108, "table")(109, "thead")(110, "tr")(111, "th");
    i0.ɵɵtext(112, "Subject");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(113, "th");
    i0.ɵɵtext(114, "Faculty");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(115, "th");
    i0.ɵɵtext(116, "Conducted");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(117, "th");
    i0.ɵɵtext(118, "Present");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(119, "th");
    i0.ɵɵtext(120, "Absent");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(121, "th");
    i0.ɵɵtext(122, "Attendance");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(123, "th");
    i0.ɵɵtext(124, "Action");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(125, "tbody");
    i0.ɵɵrepeaterCreate(126, StudentSubjectAttendanceComponent_Conditional_3_For_127_Template, 25, 15, "tr", null, _forTrack0);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(128, "div", 37);
    i0.ɵɵrepeaterCreate(129, StudentSubjectAttendanceComponent_Conditional_3_For_130_Template, 17, 12, "button", 38, _forTrack0, false, StudentSubjectAttendanceComponent_Conditional_3_ForEmpty_131_Template, 2, 0, "p", 39);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(132, "footer")(133, "span");
    i0.ɵɵtext(134);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(135, "nav", 40)(136, "button", 41);
    i0.ɵɵlistener("click", function StudentSubjectAttendanceComponent_Conditional_3_Template_button_click_136_listener() { i0.ɵɵrestoreView(_r3); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.subjectPage.set(ctx_r1.subjectPage() - 1)); });
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(137, "svg", 42);
    i0.ɵɵelementEnd();
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(138, "b");
    i0.ɵɵtext(139);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(140, "button", 41);
    i0.ɵɵlistener("click", function StudentSubjectAttendanceComponent_Conditional_3_Template_button_click_140_listener() { i0.ɵɵrestoreView(_r3); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.subjectPage.set(ctx_r1.subjectPage() + 1)); });
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(141, "svg", 43);
    i0.ɵɵelementEnd()()()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(24);
    i0.ɵɵstyleProp("--subject-progress", ctx_r1.overall().attendancePercentage + "%");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1("", ctx_r1.formatPercentage(ctx_r1.overall().attendancePercentage), "%");
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate2("", ctx_r1.overall().presentLectures, " of ", ctx_r1.overall().totalLectures, " classes");
    i0.ɵɵadvance(6);
    i0.ɵɵtextInterpolate(ctx_r1.overall().presentLectures);
    i0.ɵɵadvance(10);
    i0.ɵɵtextInterpolate(ctx_r1.overall().absentLectures);
    i0.ɵɵadvance(10);
    i0.ɵɵtextInterpolate(ctx_r1.overall().totalLectures);
    i0.ɵɵadvance(8);
    i0.ɵɵtextInterpolate1("", ctx_r1.formatPercentage(ctx_r1.overall().attendancePercentage), "%");
    i0.ɵɵadvance(7);
    i0.ɵɵtextInterpolate(ctx_r1.overall().presentLectures);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" of ", ctx_r1.overall().totalLectures, " lectures ");
    i0.ɵɵadvance(2);
    i0.ɵɵstyleProp("width", ctx_r1.overall().attendancePercentage + "%");
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1("Required ", ctx_r1.requiredAttendance, "%");
    i0.ɵɵadvance(5);
    i0.ɵɵproperty("ngModel", ctx_r1.search());
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate1(" ", ctx_r1.desktopFilterLabel(), " ");
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1(" ", ctx_r1.desktopSortLabel(), " ");
    i0.ɵɵadvance(3);
    i0.ɵɵclassProp("is-active", ctx_r1.subjectFilter() === "all");
    i0.ɵɵadvance(2);
    i0.ɵɵclassProp("is-active", ctx_r1.subjectFilter() === "safe");
    i0.ɵɵadvance(4);
    i0.ɵɵclassProp("is-active", ctx_r1.subjectFilter() === "attention");
    i0.ɵɵadvance(4);
    i0.ɵɵclassProp("is-active", ctx_r1.subjectFilter() === "critical");
    i0.ɵɵadvance(23);
    i0.ɵɵrepeater(ctx_r1.pagedSubjects());
    i0.ɵɵadvance(3);
    i0.ɵɵrepeater(ctx_r1.filteredSubjects());
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate3("", ctx_r1.subjectRangeStart(), "\u2013", ctx_r1.subjectRangeEnd(), " of ", ctx_r1.filteredSubjects().length, " subjects");
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("disabled", ctx_r1.subjectPage() === 1);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(ctx_r1.subjectPage());
    i0.ɵɵadvance();
    i0.ɵɵproperty("disabled", ctx_r1.subjectPage() === ctx_r1.subjectPages());
} }
function StudentSubjectAttendanceComponent_Conditional_4_Conditional_48_Template(rf, ctx) { if (rf & 1) {
    const _r9 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "header", 58)(1, "button", 72);
    i0.ɵɵlistener("click", function StudentSubjectAttendanceComponent_Conditional_4_Conditional_48_Template_button_click_1_listener() { i0.ɵɵrestoreView(_r9); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.goBack()); });
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(2, "svg", 55);
    i0.ɵɵelementEnd();
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(3, "div")(4, "h1");
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "p");
    i0.ɵɵtext(7);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(8, "aside")(9, "strong");
    i0.ɵɵtext(10);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(11, "span");
    i0.ɵɵtext(12);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const attendance_r10 = i0.ɵɵnextContext();
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(attendance_r10.subject.subjectName);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate2("", attendance_r10.subject.subjectCode, " \u00B7 Semester ", ctx_r1.semester());
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1("", ctx_r1.formatPercentage(attendance_r10.subject.attendancePercentage), "%");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r1.statusLabel(attendance_r10.subject.attendancePercentage));
} }
function StudentSubjectAttendanceComponent_Conditional_4_Conditional_49_Conditional_1_Template(rf, ctx) { if (rf & 1) {
    const _r11 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 72);
    i0.ɵɵlistener("click", function StudentSubjectAttendanceComponent_Conditional_4_Conditional_49_Conditional_1_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r11); const ctx_r1 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r1.goBack()); });
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(1, "svg", 55);
    i0.ɵɵelementEnd();
} }
function StudentSubjectAttendanceComponent_Conditional_4_Conditional_49_Conditional_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p");
    i0.ɵɵtext(1, "Track your attendance for each subject");
    i0.ɵɵelementEnd();
} }
function StudentSubjectAttendanceComponent_Conditional_4_Conditional_49_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "header", 73);
    i0.ɵɵconditionalCreate(1, StudentSubjectAttendanceComponent_Conditional_4_Conditional_49_Conditional_1_Template, 2, 0, "button", 74);
    i0.ɵɵelementStart(2, "div")(3, "h1");
    i0.ɵɵtext(4, "Subject Attendance");
    i0.ɵɵelementEnd();
    i0.ɵɵconditionalCreate(5, StudentSubjectAttendanceComponent_Conditional_4_Conditional_49_Conditional_5_Template, 2, 0, "p");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(6, "section", 75)(7, "span");
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(8, "svg", 76);
    i0.ɵɵelementEnd();
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(9, "div")(10, "strong");
    i0.ɵɵtext(11);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(12, "small");
    i0.ɵɵtext(13);
    i0.ɵɵelementEnd()();
    i0.ɵɵelement(14, "i", 21);
    i0.ɵɵelementStart(15, "aside")(16, "strong");
    i0.ɵɵtext(17);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(18, "small");
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(19, "svg", 77);
    i0.ɵɵtext(20);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const attendance_r10 = i0.ɵɵnextContext();
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵconditional(ctx_r1.view() === "list" ? 1 : -1);
    i0.ɵɵadvance(4);
    i0.ɵɵconditional(ctx_r1.view() === "week" ? 5 : -1);
    i0.ɵɵadvance(6);
    i0.ɵɵtextInterpolate(attendance_r10.subject.subjectName);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate2("", attendance_r10.subject.subjectCode, " \u00B7 ", attendance_r10.subject.facultyNames[0] || "Faculty not assigned");
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate1("", ctx_r1.formatPercentage(attendance_r10.subject.attendancePercentage), "%");
    i0.ɵɵadvance();
    i0.ɵɵclassMap("is-" + ctx_r1.subjectStatus(attendance_r10.subject.attendancePercentage));
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", ctx_r1.statusLabel(attendance_r10.subject.attendancePercentage), " ");
} }
function StudentSubjectAttendanceComponent_Conditional_4_Conditional_74_For_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const day_r13 = ctx.$implicit;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(day_r13);
} }
function StudentSubjectAttendanceComponent_Conditional_4_Conditional_74_For_6_Conditional_3_Conditional_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(0, "svg", 87);
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(1, "i");
    i0.ɵɵtext(2, "P");
    i0.ɵɵelementEnd();
} }
function StudentSubjectAttendanceComponent_Conditional_4_Conditional_74_For_6_Conditional_3_Conditional_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(0, "svg", 88);
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(1, "i");
    i0.ɵɵtext(2, "A");
    i0.ɵɵelementEnd();
} }
function StudentSubjectAttendanceComponent_Conditional_4_Conditional_74_For_6_Conditional_3_Conditional_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(0, "svg", 89);
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(1, "i");
    i0.ɵɵtext(2, "No class");
    i0.ɵɵelementEnd();
} }
function StudentSubjectAttendanceComponent_Conditional_4_Conditional_74_For_6_Conditional_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵconditionalCreate(1, StudentSubjectAttendanceComponent_Conditional_4_Conditional_74_For_6_Conditional_3_Conditional_1_Template, 3, 0)(2, StudentSubjectAttendanceComponent_Conditional_4_Conditional_74_For_6_Conditional_3_Conditional_2_Template, 3, 0)(3, StudentSubjectAttendanceComponent_Conditional_4_Conditional_74_For_6_Conditional_3_Conditional_3_Template, 3, 0);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const cell_r15 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵclassMap("is-" + cell_r15.status);
    i0.ɵɵadvance();
    i0.ɵɵconditional(cell_r15.status === "present" ? 1 : cell_r15.status === "absent" ? 2 : 3);
} }
function StudentSubjectAttendanceComponent_Conditional_4_Conditional_74_For_6_Template(rf, ctx) { if (rf & 1) {
    const _r14 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 41);
    i0.ɵɵlistener("click", function StudentSubjectAttendanceComponent_Conditional_4_Conditional_74_For_6_Template_button_click_0_listener() { const cell_r15 = i0.ɵɵrestoreView(_r14).$implicit; const ctx_r1 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r1.selectCell(cell_r15)); });
    i0.ɵɵelementStart(1, "b");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵconditionalCreate(3, StudentSubjectAttendanceComponent_Conditional_4_Conditional_74_For_6_Conditional_3_Template, 4, 3, "span", 86);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    let tmp_14_0;
    const cell_r15 = ctx.$implicit;
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵclassProp("is-outside", cell_r15.outside)("is-selected", ((tmp_14_0 = ctx_r1.selectedRecord()) == null ? null : tmp_14_0.date) === cell_r15.key);
    i0.ɵɵproperty("disabled", !cell_r15.record);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(cell_r15.day);
    i0.ɵɵadvance();
    i0.ɵɵconditional(cell_r15.status !== "empty" ? 3 : -1);
} }
function StudentSubjectAttendanceComponent_Conditional_4_Conditional_74_For_17_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const day_r16 = ctx.$implicit;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(day_r16);
} }
function StudentSubjectAttendanceComponent_Conditional_4_Conditional_74_For_20_Conditional_3_Conditional_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(0, "svg", 87);
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(1, "i");
    i0.ɵɵtext(2, "P");
    i0.ɵɵelementEnd();
} }
function StudentSubjectAttendanceComponent_Conditional_4_Conditional_74_For_20_Conditional_3_Conditional_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(0, "svg", 88);
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(1, "i");
    i0.ɵɵtext(2, "A");
    i0.ɵɵelementEnd();
} }
function StudentSubjectAttendanceComponent_Conditional_4_Conditional_74_For_20_Conditional_3_Conditional_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(0, "svg", 89);
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(1, "i");
    i0.ɵɵtext(2, "-");
    i0.ɵɵelementEnd();
} }
function StudentSubjectAttendanceComponent_Conditional_4_Conditional_74_For_20_Conditional_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵconditionalCreate(1, StudentSubjectAttendanceComponent_Conditional_4_Conditional_74_For_20_Conditional_3_Conditional_1_Template, 3, 0)(2, StudentSubjectAttendanceComponent_Conditional_4_Conditional_74_For_20_Conditional_3_Conditional_2_Template, 3, 0)(3, StudentSubjectAttendanceComponent_Conditional_4_Conditional_74_For_20_Conditional_3_Conditional_3_Template, 3, 0);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const cell_r18 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵclassMap("is-" + cell_r18.status);
    i0.ɵɵadvance();
    i0.ɵɵconditional(cell_r18.status === "present" ? 1 : cell_r18.status === "absent" ? 2 : 3);
} }
function StudentSubjectAttendanceComponent_Conditional_4_Conditional_74_For_20_Template(rf, ctx) { if (rf & 1) {
    const _r17 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 41);
    i0.ɵɵlistener("click", function StudentSubjectAttendanceComponent_Conditional_4_Conditional_74_For_20_Template_button_click_0_listener() { const cell_r18 = i0.ɵɵrestoreView(_r17).$implicit; const ctx_r1 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r1.selectCell(cell_r18)); });
    i0.ɵɵelementStart(1, "b");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵconditionalCreate(3, StudentSubjectAttendanceComponent_Conditional_4_Conditional_74_For_20_Conditional_3_Template, 4, 3, "span", 86);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    let tmp_14_0;
    const cell_r18 = ctx.$implicit;
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵclassProp("is-outside", cell_r18.outside)("is-selected", ((tmp_14_0 = ctx_r1.selectedRecord()) == null ? null : tmp_14_0.date) === cell_r18.key);
    i0.ɵɵproperty("disabled", !cell_r18.record);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(cell_r18.day);
    i0.ɵɵadvance();
    i0.ɵɵconditional(cell_r18.status !== "empty" ? 3 : -1);
} }
function StudentSubjectAttendanceComponent_Conditional_4_Conditional_74_Template(rf, ctx) { if (rf & 1) {
    const _r12 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 78)(1, "div", 79);
    i0.ɵɵrepeaterCreate(2, StudentSubjectAttendanceComponent_Conditional_4_Conditional_74_For_3_Template, 2, 1, "span", null, i0.ɵɵrepeaterTrackByIdentity);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "div", 80);
    i0.ɵɵrepeaterCreate(5, StudentSubjectAttendanceComponent_Conditional_4_Conditional_74_For_6_Template, 4, 7, "button", 81, _forTrack1);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(7, "div", 82)(8, "header")(9, "button", 4);
    i0.ɵɵlistener("click", function StudentSubjectAttendanceComponent_Conditional_4_Conditional_74_Template_button_click_9_listener() { i0.ɵɵrestoreView(_r12); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.changeMonth(-1)); });
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(10, "svg", 83);
    i0.ɵɵelementEnd();
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(11, "strong");
    i0.ɵɵtext(12);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(13, "button", 4);
    i0.ɵɵlistener("click", function StudentSubjectAttendanceComponent_Conditional_4_Conditional_74_Template_button_click_13_listener() { i0.ɵɵrestoreView(_r12); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.changeMonth(1)); });
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(14, "svg", 84);
    i0.ɵɵelementEnd()();
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(15, "div", 79);
    i0.ɵɵrepeaterCreate(16, StudentSubjectAttendanceComponent_Conditional_4_Conditional_74_For_17_Template, 2, 1, "span", null, i0.ɵɵrepeaterTrackByIdentity);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(18, "div", 80);
    i0.ɵɵrepeaterCreate(19, StudentSubjectAttendanceComponent_Conditional_4_Conditional_74_For_20_Template, 4, 7, "button", 81, _forTrack1);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(21, "div", 85)(22, "span")(23, "strong");
    i0.ɵɵtext(24);
    i0.ɵɵelementEnd();
    i0.ɵɵtext(25, "Present");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(26, "span")(27, "strong");
    i0.ɵɵtext(28);
    i0.ɵɵelementEnd();
    i0.ɵɵtext(29, "Absent");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(30, "span")(31, "strong");
    i0.ɵɵtext(32);
    i0.ɵɵelementEnd();
    i0.ɵɵtext(33, "Required");
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const attendance_r10 = i0.ɵɵnextContext();
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵrepeater(i0.ɵɵpureFunction0(4, _c0));
    i0.ɵɵadvance(3);
    i0.ɵɵrepeater(ctx_r1.desktopCalendar());
    i0.ɵɵadvance(7);
    i0.ɵɵtextInterpolate(ctx_r1.monthLabel());
    i0.ɵɵadvance(4);
    i0.ɵɵrepeater(i0.ɵɵpureFunction0(5, _c1));
    i0.ɵɵadvance(3);
    i0.ɵɵrepeater(ctx_r1.mobileCalendar());
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(attendance_r10.subject.presentLectures);
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(attendance_r10.subject.absentLectures);
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate1("", ctx_r1.requiredAttendance, "%");
} }
function StudentSubjectAttendanceComponent_Conditional_4_Conditional_75_For_10_Template(rf, ctx) { if (rf & 1) {
    const _r20 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 4);
    i0.ɵɵlistener("click", function StudentSubjectAttendanceComponent_Conditional_4_Conditional_75_For_10_Template_button_click_0_listener() { const day_r21 = i0.ɵɵrestoreView(_r20).$implicit; const ctx_r1 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r1.selectCell(day_r21)); });
    i0.ɵɵelementStart(1, "span");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "strong");
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const day_r21 = ctx.$implicit;
    i0.ɵɵclassProp("is-active", day_r21.record);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(day_r21.label);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(day_r21.day);
} }
function StudentSubjectAttendanceComponent_Conditional_4_Conditional_75_For_13_Conditional_6_Conditional_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(0, "svg", 31);
    i0.ɵɵtext(1, " Present ");
} }
function StudentSubjectAttendanceComponent_Conditional_4_Conditional_75_For_13_Conditional_6_Conditional_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(0, "svg", 35);
    i0.ɵɵtext(1, " Absent ");
} }
function StudentSubjectAttendanceComponent_Conditional_4_Conditional_75_For_13_Conditional_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(2, "em");
    i0.ɵɵconditionalCreate(3, StudentSubjectAttendanceComponent_Conditional_4_Conditional_75_For_13_Conditional_6_Conditional_3_Template, 2, 0)(4, StudentSubjectAttendanceComponent_Conditional_4_Conditional_75_For_13_Conditional_6_Conditional_4_Template, 2, 0);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "small");
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(6, "svg", 94);
    i0.ɵɵtext(7);
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelement(8, "br");
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(9, "svg", 95);
    i0.ɵɵtext(10);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const record_r24 = ctx;
    const attendance_r10 = i0.ɵɵnextContext(3);
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate2("", ctx_r1.formatTime(record_r24.startTime), " \u2013 ", ctx_r1.formatTime(record_r24.endTime));
    i0.ɵɵadvance();
    i0.ɵɵclassMap("is-" + record_r24.status);
    i0.ɵɵadvance();
    i0.ɵɵconditional(record_r24.status === "present" ? 3 : 4);
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(record_r24.roomName || "Venue unavailable");
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(attendance_r10.subject.subjectName);
} }
function StudentSubjectAttendanceComponent_Conditional_4_Conditional_75_For_13_Conditional_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p");
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(1, "svg", 96);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const day_r23 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1("", day_r23.schedule ? "Attendance not saved" : "No class scheduled", " ");
} }
function StudentSubjectAttendanceComponent_Conditional_4_Conditional_75_For_13_Template(rf, ctx) { if (rf & 1) {
    const _r22 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "article", 93);
    i0.ɵɵlistener("click", function StudentSubjectAttendanceComponent_Conditional_4_Conditional_75_For_13_Template_article_click_0_listener() { const day_r23 = i0.ɵɵrestoreView(_r22).$implicit; const ctx_r1 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(day_r23.record && ctx_r1.openRecord(day_r23.record)); });
    i0.ɵɵelementStart(1, "time")(2, "strong");
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "span");
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd()();
    i0.ɵɵconditionalCreate(6, StudentSubjectAttendanceComponent_Conditional_4_Conditional_75_For_13_Conditional_6_Template, 11, 7)(7, StudentSubjectAttendanceComponent_Conditional_4_Conditional_75_For_13_Conditional_7_Template, 3, 1, "p");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    let tmp_16_0;
    const day_r23 = ctx.$implicit;
    i0.ɵɵclassProp("has-record", day_r23.record);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(day_r23.label);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(day_r23.shortLabel);
    i0.ɵɵadvance();
    i0.ɵɵconditional((tmp_16_0 = day_r23.record) ? 6 : 7, tmp_16_0);
} }
function StudentSubjectAttendanceComponent_Conditional_4_Conditional_75_Template(rf, ctx) { if (rf & 1) {
    const _r19 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 66)(1, "header")(2, "button", 4);
    i0.ɵɵlistener("click", function StudentSubjectAttendanceComponent_Conditional_4_Conditional_75_Template_button_click_2_listener() { i0.ɵɵrestoreView(_r19); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.changeWeek(-1)); });
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(3, "svg", 83);
    i0.ɵɵelementEnd();
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(4, "strong");
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "button", 4);
    i0.ɵɵlistener("click", function StudentSubjectAttendanceComponent_Conditional_4_Conditional_75_Template_button_click_6_listener() { i0.ɵɵrestoreView(_r19); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.changeWeek(1)); });
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(7, "svg", 84);
    i0.ɵɵelementEnd()();
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(8, "nav");
    i0.ɵɵrepeaterCreate(9, StudentSubjectAttendanceComponent_Conditional_4_Conditional_75_For_10_Template, 5, 4, "button", 90, _forTrack1);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(11, "div");
    i0.ɵɵrepeaterCreate(12, StudentSubjectAttendanceComponent_Conditional_4_Conditional_75_For_13_Template, 8, 5, "article", 91, _forTrack1);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(14, "footer")(15, "button", 4);
    i0.ɵɵlistener("click", function StudentSubjectAttendanceComponent_Conditional_4_Conditional_75_Template_button_click_15_listener() { i0.ɵɵrestoreView(_r19); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.changeWeek(-1)); });
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(16, "svg", 63);
    i0.ɵɵtext(17, "Previous week");
    i0.ɵɵelementEnd();
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(18, "button", 38);
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(19, "svg", 92);
    i0.ɵɵtext(20, "This week");
    i0.ɵɵelementEnd();
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(21, "button", 4);
    i0.ɵɵlistener("click", function StudentSubjectAttendanceComponent_Conditional_4_Conditional_75_Template_button_click_21_listener() { i0.ɵɵrestoreView(_r19); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.changeWeek(1)); });
    i0.ɵɵtext(22, " Next week");
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(23, "svg", 46);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(ctx_r1.weekLabel());
    i0.ɵɵadvance(4);
    i0.ɵɵrepeater(ctx_r1.weekDays());
    i0.ɵɵadvance(3);
    i0.ɵɵrepeater(ctx_r1.weekDays());
} }
function StudentSubjectAttendanceComponent_Conditional_4_Conditional_76_For_36_Conditional_17_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(0, "svg", 109);
    i0.ɵɵtext(1, " Present (P) ");
} }
function StudentSubjectAttendanceComponent_Conditional_4_Conditional_76_For_36_Conditional_18_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(0, "svg", 110);
    i0.ɵɵtext(1, " Absent (A) ");
} }
function StudentSubjectAttendanceComponent_Conditional_4_Conditional_76_For_36_Template(rf, ctx) { if (rf & 1) {
    const _r26 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "tr", 93);
    i0.ɵɵlistener("click", function StudentSubjectAttendanceComponent_Conditional_4_Conditional_76_For_36_Template_tr_click_0_listener() { const record_r27 = i0.ɵɵrestoreView(_r26).$implicit; const ctx_r1 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r1.openRecord(record_r27)); });
    i0.ɵɵelementStart(1, "td");
    i0.ɵɵtext(2);
    i0.ɵɵpipe(3, "date");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "td");
    i0.ɵɵtext(5);
    i0.ɵɵpipe(6, "date");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "td");
    i0.ɵɵtext(8);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(9, "td");
    i0.ɵɵtext(10);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(11, "td");
    i0.ɵɵtext(12);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(13, "td");
    i0.ɵɵtext(14);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(15, "td")(16, "em");
    i0.ɵɵconditionalCreate(17, StudentSubjectAttendanceComponent_Conditional_4_Conditional_76_For_36_Conditional_17_Template, 2, 0)(18, StudentSubjectAttendanceComponent_Conditional_4_Conditional_76_For_36_Conditional_18_Template, 2, 0);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const record_r27 = ctx.$implicit;
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind2(3, 10, ctx_r1.parseDate(record_r27.date), "dd MMM yyyy"));
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind2(6, 13, ctx_r1.parseDate(record_r27.date), "EEE"));
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate2("", ctx_r1.formatTime(record_r27.startTime), " \u2013 ", ctx_r1.formatTime(record_r27.endTime));
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(record_r27.classType);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(record_r27.facultyName);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(record_r27.roomName || "\u2014");
    i0.ɵɵadvance(2);
    i0.ɵɵclassMap("is-" + record_r27.status);
    i0.ɵɵadvance();
    i0.ɵɵconditional(record_r27.status === "present" ? 17 : 18);
} }
function StudentSubjectAttendanceComponent_Conditional_4_Conditional_76_For_39_Conditional_15_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(0, "svg", 109);
    i0.ɵɵtext(1, "Present ");
} }
function StudentSubjectAttendanceComponent_Conditional_4_Conditional_76_For_39_Conditional_16_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(0, "svg", 110);
    i0.ɵɵtext(1, "Absent ");
} }
function StudentSubjectAttendanceComponent_Conditional_4_Conditional_76_For_39_Template(rf, ctx) { if (rf & 1) {
    const _r28 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 4);
    i0.ɵɵlistener("click", function StudentSubjectAttendanceComponent_Conditional_4_Conditional_76_For_39_Template_button_click_0_listener() { const record_r29 = i0.ɵɵrestoreView(_r28).$implicit; const ctx_r1 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r1.openRecord(record_r29)); });
    i0.ɵɵelementStart(1, "time")(2, "strong");
    i0.ɵɵtext(3);
    i0.ɵɵpipe(4, "date");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "span");
    i0.ɵɵtext(6);
    i0.ɵɵpipe(7, "date");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(8, "span")(9, "strong");
    i0.ɵɵtext(10);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(11, "small");
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(12, "svg", 111);
    i0.ɵɵtext(13);
    i0.ɵɵelementEnd()();
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(14, "em");
    i0.ɵɵconditionalCreate(15, StudentSubjectAttendanceComponent_Conditional_4_Conditional_76_For_39_Conditional_15_Template, 2, 0)(16, StudentSubjectAttendanceComponent_Conditional_4_Conditional_76_For_39_Conditional_16_Template, 2, 0);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const record_r29 = ctx.$implicit;
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind2(4, 8, ctx_r1.parseDate(record_r29.date), "dd"));
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind2(7, 11, ctx_r1.parseDate(record_r29.date), "EEE"));
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate2("", ctx_r1.formatTime(record_r29.startTime), " \u2013 ", ctx_r1.formatTime(record_r29.endTime));
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(record_r29.roomName || "Venue unavailable");
    i0.ɵɵadvance();
    i0.ɵɵclassMap("is-" + record_r29.status);
    i0.ɵɵadvance();
    i0.ɵɵconditional(record_r29.status === "present" ? 15 : 16);
} }
function StudentSubjectAttendanceComponent_Conditional_4_Conditional_76_ForEmpty_40_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 39);
    i0.ɵɵtext(1, "No saved attendance records match this filter.");
    i0.ɵɵelementEnd();
} }
function StudentSubjectAttendanceComponent_Conditional_4_Conditional_76_Conditional_44_Template(rf, ctx) { if (rf & 1) {
    const _r30 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 112);
    i0.ɵɵlistener("click", function StudentSubjectAttendanceComponent_Conditional_4_Conditional_76_Conditional_44_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r30); const ctx_r1 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r1.loadMore()); });
    i0.ɵɵtext(1, " Load more ");
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(2, "svg", 113);
    i0.ɵɵelementEnd();
} }
function StudentSubjectAttendanceComponent_Conditional_4_Conditional_76_Template(rf, ctx) { if (rf & 1) {
    const _r25 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 97)(1, "span");
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(2, "svg", 92);
    i0.ɵɵtext(3);
    i0.ɵɵelement(4, "svg", 64);
    i0.ɵɵelementEnd();
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(5, "label");
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(6, "svg", 98);
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(7, "select", 99);
    i0.ɵɵlistener("ngModelChange", function StudentSubjectAttendanceComponent_Conditional_4_Conditional_76_Template_select_ngModelChange_7_listener($event) { i0.ɵɵrestoreView(_r25); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.recordFilter.set($event)); });
    i0.ɵɵelementStart(8, "option", 100);
    i0.ɵɵtext(9, "All records");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(10, "option", 101);
    i0.ɵɵtext(11, "Present");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(12, "option", 102);
    i0.ɵɵtext(13, "Absent");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(14, "button", 103);
    i0.ɵɵlistener("click", function StudentSubjectAttendanceComponent_Conditional_4_Conditional_76_Template_button_click_14_listener() { i0.ɵɵrestoreView(_r25); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.downloadCsv()); });
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(15, "svg", 104);
    i0.ɵɵelementEnd()();
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(16, "div", 105)(17, "table")(18, "thead")(19, "tr")(20, "th");
    i0.ɵɵtext(21, "Date");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(22, "th");
    i0.ɵɵtext(23, "Day");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(24, "th");
    i0.ɵɵtext(25, "Time");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(26, "th");
    i0.ɵɵtext(27, "Type");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(28, "th");
    i0.ɵɵtext(29, "Faculty");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(30, "th");
    i0.ɵɵtext(31, "Venue");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(32, "th");
    i0.ɵɵtext(33, "Status");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(34, "tbody");
    i0.ɵɵrepeaterCreate(35, StudentSubjectAttendanceComponent_Conditional_4_Conditional_76_For_36_Template, 19, 16, "tr", null, _forTrack2);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(37, "div", 106);
    i0.ɵɵrepeaterCreate(38, StudentSubjectAttendanceComponent_Conditional_4_Conditional_76_For_39_Template, 17, 14, "button", 38, _forTrack2, false, StudentSubjectAttendanceComponent_Conditional_4_Conditional_76_ForEmpty_40_Template, 2, 0, "p", 39);
    i0.ɵɵelementStart(41, "footer", 107)(42, "span");
    i0.ɵɵtext(43);
    i0.ɵɵelementEnd();
    i0.ɵɵconditionalCreate(44, StudentSubjectAttendanceComponent_Conditional_4_Conditional_76_Conditional_44_Template, 3, 0, "button", 108);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(ctx_r1.monthLabel());
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("ngModel", ctx_r1.recordFilter());
    i0.ɵɵadvance(28);
    i0.ɵɵrepeater(ctx_r1.monthRecords());
    i0.ɵɵadvance(3);
    i0.ɵɵrepeater(ctx_r1.visibleRecords());
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate2("Showing ", ctx_r1.visibleRecords().length, " of ", ctx_r1.monthRecords().length, " records");
    i0.ɵɵadvance();
    i0.ɵɵconditional(ctx_r1.visibleRecords().length < ctx_r1.monthRecords().length ? 44 : -1);
} }
function StudentSubjectAttendanceComponent_Conditional_4_Template(rf, ctx) { if (rf & 1) {
    const _r8 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "header", 53)(1, "nav", 6)(2, "span");
    i0.ɵɵtext(3, "Academics");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "b");
    i0.ɵɵtext(5, "/");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "span");
    i0.ɵɵtext(7, "Attendance");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "b");
    i0.ɵɵtext(9, "/");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(10, "strong");
    i0.ɵɵtext(11);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(12, "div")(13, "button", 54);
    i0.ɵɵlistener("click", function StudentSubjectAttendanceComponent_Conditional_4_Template_button_click_13_listener() { i0.ɵɵrestoreView(_r8); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.goBack()); });
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(14, "svg", 55);
    i0.ɵɵelementEnd();
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(15, "section")(16, "h1");
    i0.ɵɵtext(17);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(18, "p");
    i0.ɵɵtext(19);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(20, "div", 56)(21, "span")(22, "strong");
    i0.ɵɵtext(23);
    i0.ɵɵelementEnd();
    i0.ɵɵtext(24, " Present");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(25, "i");
    i0.ɵɵtext(26, "\u00B7");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(27, "span")(28, "strong");
    i0.ɵɵtext(29);
    i0.ɵɵelementEnd();
    i0.ɵɵtext(30, " Absent");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(31, "i");
    i0.ɵɵtext(32, "\u00B7");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(33, "span")(34, "strong");
    i0.ɵɵtext(35);
    i0.ɵɵelementEnd();
    i0.ɵɵtext(36, " Conducted");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(37, "i");
    i0.ɵɵtext(38, "\u00B7");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(39, "span")(40, "strong");
    i0.ɵɵtext(41);
    i0.ɵɵelementEnd()()()();
    i0.ɵɵelementStart(42, "aside")(43, "strong");
    i0.ɵɵtext(44);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(45, "span");
    i0.ɵɵtext(46);
    i0.ɵɵelementEnd()()()();
    i0.ɵɵelementStart(47, "section", 57);
    i0.ɵɵconditionalCreate(48, StudentSubjectAttendanceComponent_Conditional_4_Conditional_48_Template, 13, 5, "header", 58)(49, StudentSubjectAttendanceComponent_Conditional_4_Conditional_49_Template, 21, 9);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(50, "section", 59)(51, "header")(52, "div")(53, "h2");
    i0.ɵɵtext(54, "Attendance history");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(55, "p");
    i0.ɵɵtext(56, "View your attendance for this subject.");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(57, "nav", 60)(58, "button", 4);
    i0.ɵɵlistener("click", function StudentSubjectAttendanceComponent_Conditional_4_Template_button_click_58_listener() { i0.ɵɵrestoreView(_r8); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.setView("month")); });
    i0.ɵɵtext(59, " Month");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(60, "button", 4);
    i0.ɵɵlistener("click", function StudentSubjectAttendanceComponent_Conditional_4_Template_button_click_60_listener() { i0.ɵɵrestoreView(_r8); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.setView("week")); });
    i0.ɵɵtext(61, " Week");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(62, "button", 4);
    i0.ɵɵlistener("click", function StudentSubjectAttendanceComponent_Conditional_4_Template_button_click_62_listener() { i0.ɵɵrestoreView(_r8); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.setView("list")); });
    i0.ɵɵtext(63, " List ");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(64, "div", 61)(65, "button", 62);
    i0.ɵɵlistener("click", function StudentSubjectAttendanceComponent_Conditional_4_Template_button_click_65_listener() { i0.ɵɵrestoreView(_r8); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.changeMonth(-1)); });
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(66, "svg", 63);
    i0.ɵɵelementEnd();
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(67, "span");
    i0.ɵɵtext(68);
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(69, "svg", 64);
    i0.ɵɵelementEnd();
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(70, "button", 65);
    i0.ɵɵlistener("click", function StudentSubjectAttendanceComponent_Conditional_4_Template_button_click_70_listener() { i0.ɵɵrestoreView(_r8); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.changeMonth(1)); });
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(71, "svg", 46);
    i0.ɵɵelementEnd();
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(72, "button", 4);
    i0.ɵɵlistener("click", function StudentSubjectAttendanceComponent_Conditional_4_Template_button_click_72_listener() { i0.ɵɵrestoreView(_r8); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.goToday()); });
    i0.ɵɵtext(73, "Today");
    i0.ɵɵelementEnd()()();
    i0.ɵɵconditionalCreate(74, StudentSubjectAttendanceComponent_Conditional_4_Conditional_74_Template, 34, 6)(75, StudentSubjectAttendanceComponent_Conditional_4_Conditional_75_Template, 24, 1, "div", 66)(76, StudentSubjectAttendanceComponent_Conditional_4_Conditional_76_Template, 45, 6);
    i0.ɵɵelementStart(77, "footer", 67)(78, "span")(79, "i", 14);
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(80, "svg", 50);
    i0.ɵɵelementEnd();
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(81, "b");
    i0.ɵɵtext(82, "P");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(83, "Present");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(84, "span")(85, "i", 16);
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(86, "svg", 68);
    i0.ɵɵelementEnd();
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(87, "b");
    i0.ɵɵtext(88, "A");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(89, "Absent");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(90, "span")(91, "i", 69);
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(92, "svg", 70);
    i0.ɵɵelementEnd();
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(93, "b");
    i0.ɵɵtext(94, "-");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(95, "No class");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(96, "p");
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(97, "svg", 71);
    i0.ɵɵtext(98, "Only faculty-saved lectures are included.");
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const attendance_r10 = ctx;
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵclassProp("is-drawer-open", ctx_r1.selectedRecord());
    i0.ɵɵadvance(11);
    i0.ɵɵtextInterpolate(attendance_r10.subject.subjectName);
    i0.ɵɵadvance(6);
    i0.ɵɵtextInterpolate(attendance_r10.subject.subjectName);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate3(" ", attendance_r10.subject.subjectCode, " \u00B7 Semester ", ctx_r1.semester(), " \u00B7 ", attendance_r10.subject.facultyNames[0] || "Faculty not assigned", " ");
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(attendance_r10.subject.presentLectures);
    i0.ɵɵadvance(6);
    i0.ɵɵtextInterpolate(attendance_r10.subject.absentLectures);
    i0.ɵɵadvance(6);
    i0.ɵɵtextInterpolate(attendance_r10.subject.totalLectures);
    i0.ɵɵadvance(6);
    i0.ɵɵtextInterpolate1("", ctx_r1.formatPercentage(attendance_r10.subject.attendancePercentage), "%");
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1("", ctx_r1.formatPercentage(attendance_r10.subject.attendancePercentage), "%");
    i0.ɵɵadvance();
    i0.ɵɵclassMap("is-" + ctx_r1.subjectStatus(attendance_r10.subject.attendancePercentage));
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r1.statusLabel(attendance_r10.subject.attendancePercentage));
    i0.ɵɵadvance(2);
    i0.ɵɵconditional(ctx_r1.view() === "month" ? 48 : 49);
    i0.ɵɵadvance(10);
    i0.ɵɵclassProp("is-active", ctx_r1.view() === "month");
    i0.ɵɵadvance(2);
    i0.ɵɵclassProp("is-active", ctx_r1.view() === "week");
    i0.ɵɵadvance(2);
    i0.ɵɵclassProp("is-active", ctx_r1.view() === "list");
    i0.ɵɵadvance(6);
    i0.ɵɵtextInterpolate1("", ctx_r1.monthLabel(), " ");
    i0.ɵɵadvance(6);
    i0.ɵɵconditional(ctx_r1.view() === "month" ? 74 : ctx_r1.view() === "week" ? 75 : 76);
} }
function StudentSubjectAttendanceComponent_Conditional_5_Conditional_13_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(1, "svg", 127);
    i0.ɵɵelementEnd();
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(2, "div")(3, "strong");
    i0.ɵɵtext(4, "Present");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "small");
    i0.ɵɵtext(6, "You were marked present for this lecture.");
    i0.ɵɵelementEnd()();
} }
function StudentSubjectAttendanceComponent_Conditional_5_Conditional_14_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(1, "svg", 128);
    i0.ɵɵelementEnd();
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(2, "div")(3, "strong");
    i0.ɵɵtext(4, "Absent");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "small");
    i0.ɵɵtext(6, "You were marked absent for this lecture.");
    i0.ɵɵelementEnd()();
} }
function StudentSubjectAttendanceComponent_Conditional_5_Conditional_47_Template(rf, ctx) { if (rf & 1) {
    const _r32 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "form", 129);
    i0.ɵɵlistener("submit", function StudentSubjectAttendanceComponent_Conditional_5_Conditional_47_Template_form_submit_0_listener($event) { i0.ɵɵrestoreView(_r32); const ctx_r1 = i0.ɵɵnextContext(2); $event.preventDefault(); return i0.ɵɵresetView(ctx_r1.submitCorrection()); });
    i0.ɵɵelementStart(1, "label", 130);
    i0.ɵɵtext(2, "What should be corrected?");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "textarea", 131);
    i0.ɵɵlistener("ngModelChange", function StudentSubjectAttendanceComponent_Conditional_5_Conditional_47_Template_textarea_ngModelChange_3_listener($event) { i0.ɵɵrestoreView(_r32); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.correctionReason.set($event)); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "button", 132);
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngModel", ctx_r1.correctionReason());
    i0.ɵɵadvance();
    i0.ɵɵproperty("disabled", ctx_r1.correctionSubmitting());
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r1.correctionSubmitting() ? "Submitting\u2026" : "Submit request", " ");
} }
function StudentSubjectAttendanceComponent_Conditional_5_Conditional_48_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 126);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r1.correctionMessage(), " ");
} }
function StudentSubjectAttendanceComponent_Conditional_5_Template(rf, ctx) { if (rf & 1) {
    const _r31 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 114);
    i0.ɵɵlistener("click", function StudentSubjectAttendanceComponent_Conditional_5_Template_div_click_0_listener() { i0.ɵɵrestoreView(_r31); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.closeRecord()); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(1, "aside", 115);
    i0.ɵɵelement(2, "span", 116);
    i0.ɵɵelementStart(3, "header")(4, "div")(5, "h2", 117);
    i0.ɵɵtext(6, "Lecture details");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "p");
    i0.ɵɵtext(8);
    i0.ɵɵpipe(9, "date");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(10, "button", 118);
    i0.ɵɵlistener("click", function StudentSubjectAttendanceComponent_Conditional_5_Template_button_click_10_listener() { i0.ɵɵrestoreView(_r31); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.closeRecord()); });
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(11, "svg", 119);
    i0.ɵɵelementEnd()();
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(12, "section", 120);
    i0.ɵɵconditionalCreate(13, StudentSubjectAttendanceComponent_Conditional_5_Conditional_13_Template, 7, 0)(14, StudentSubjectAttendanceComponent_Conditional_5_Conditional_14_Template, 7, 0);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(15, "dl")(16, "div")(17, "dt");
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(18, "svg", 121);
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(19, "span");
    i0.ɵɵtext(20, "Time");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(21, "dd");
    i0.ɵɵtext(22);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(23, "div")(24, "dt");
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(25, "svg", 122);
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(26, "span");
    i0.ɵɵtext(27, "Subject");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(28, "dd");
    i0.ɵɵtext(29);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(30, "div")(31, "dt");
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(32, "svg", 123);
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(33, "span");
    i0.ɵɵtext(34, "Faculty");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(35, "dd");
    i0.ɵɵtext(36);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(37, "div")(38, "dt");
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(39, "svg", 124);
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(40, "span");
    i0.ɵɵtext(41, "Venue");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(42, "dd");
    i0.ɵɵtext(43);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(44, "p", 125);
    i0.ɵɵtext(45);
    i0.ɵɵpipe(46, "date");
    i0.ɵɵelementEnd();
    i0.ɵɵconditionalCreate(47, StudentSubjectAttendanceComponent_Conditional_5_Conditional_47_Template, 6, 3, "form");
    i0.ɵɵconditionalCreate(48, StudentSubjectAttendanceComponent_Conditional_5_Conditional_48_Template, 2, 1, "p", 126);
    i0.ɵɵelementStart(49, "footer")(50, "button", 4);
    i0.ɵɵlistener("click", function StudentSubjectAttendanceComponent_Conditional_5_Template_button_click_50_listener() { i0.ɵɵrestoreView(_r31); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.closeRecord()); });
    i0.ɵɵtext(51, "Close");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(52, "button", 4);
    i0.ɵɵlistener("click", function StudentSubjectAttendanceComponent_Conditional_5_Template_button_click_52_listener() { i0.ɵɵrestoreView(_r31); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.correctionOpen.set(!ctx_r1.correctionOpen())); });
    i0.ɵɵtext(53, " Request correction ");
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    let tmp_6_0;
    const record_r33 = ctx;
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(8);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind2(9, 13, ctx_r1.parseDate(record_r33.date), "dd MMMM yyyy, EEEE"));
    i0.ɵɵadvance(4);
    i0.ɵɵclassMap("subject-attendance-sheet__status is-" + record_r33.status);
    i0.ɵɵadvance();
    i0.ɵɵconditional(record_r33.status === "present" ? 13 : 14);
    i0.ɵɵadvance(9);
    i0.ɵɵtextInterpolate2("", ctx_r1.formatTime(record_r33.startTime), " \u2013 ", ctx_r1.formatTime(record_r33.endTime));
    i0.ɵɵadvance(7);
    i0.ɵɵtextInterpolate2("", (tmp_6_0 = ctx_r1.detail()) == null ? null : tmp_6_0.subject == null ? null : tmp_6_0.subject.subjectName, " \u00B7 ", (tmp_6_0 = ctx_r1.detail()) == null ? null : tmp_6_0.subject == null ? null : tmp_6_0.subject.subjectCode);
    i0.ɵɵadvance(7);
    i0.ɵɵtextInterpolate(record_r33.facultyName || "Faculty");
    i0.ɵɵadvance(7);
    i0.ɵɵtextInterpolate(record_r33.roomName || "Venue unavailable");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" Updated ", i0.ɵɵpipeBind2(46, 16, record_r33.updatedAt, "shortTime"), " \u00B7 Marked by faculty ");
    i0.ɵɵadvance(2);
    i0.ɵɵconditional(ctx_r1.correctionOpen() ? 47 : -1);
    i0.ɵɵadvance();
    i0.ɵɵconditional(ctx_r1.correctionMessage() ? 48 : -1);
} }
export class StudentSubjectAttendanceComponent {
    api = inject(ApiService);
    route = inject(ActivatedRoute);
    router = inject(Router);
    session = inject(StudentSessionService);
    destroyRef = inject(DestroyRef);
    requiredAttendance = 75;
    subjects = signal([], ...(ngDevMode ? [{ debugName: "subjects" }] : /* istanbul ignore next */ []));
    overall = signal({
        totalLectures: 0,
        presentLectures: 0,
        absentLectures: 0,
        attendancePercentage: 0,
    }, ...(ngDevMode ? [{ debugName: "overall" }] : /* istanbul ignore next */ []));
    detail = signal(null, ...(ngDevMode ? [{ debugName: "detail" }] : /* istanbul ignore next */ []));
    loading = signal(true, ...(ngDevMode ? [{ debugName: "loading" }] : /* istanbul ignore next */ []));
    error = signal('', ...(ngDevMode ? [{ debugName: "error" }] : /* istanbul ignore next */ []));
    search = signal('', ...(ngDevMode ? [{ debugName: "search" }] : /* istanbul ignore next */ []));
    subjectFilter = signal('all', ...(ngDevMode ? [{ debugName: "subjectFilter" }] : /* istanbul ignore next */ []));
    subjectSort = signal('high', ...(ngDevMode ? [{ debugName: "subjectSort" }] : /* istanbul ignore next */ []));
    subjectPage = signal(1, ...(ngDevMode ? [{ debugName: "subjectPage" }] : /* istanbul ignore next */ []));
    view = signal('month', ...(ngDevMode ? [{ debugName: "view" }] : /* istanbul ignore next */ []));
    recordFilter = signal('all', ...(ngDevMode ? [{ debugName: "recordFilter" }] : /* istanbul ignore next */ []));
    selectedMonth = signal(this.monthStart(new Date()), ...(ngDevMode ? [{ debugName: "selectedMonth" }] : /* istanbul ignore next */ []));
    selectedRecord = signal(null, ...(ngDevMode ? [{ debugName: "selectedRecord" }] : /* istanbul ignore next */ []));
    correctionOpen = signal(false, ...(ngDevMode ? [{ debugName: "correctionOpen" }] : /* istanbul ignore next */ []));
    correctionReason = signal('', ...(ngDevMode ? [{ debugName: "correctionReason" }] : /* istanbul ignore next */ []));
    correctionSubmitting = signal(false, ...(ngDevMode ? [{ debugName: "correctionSubmitting" }] : /* istanbul ignore next */ []));
    correctionMessage = signal('', ...(ngDevMode ? [{ debugName: "correctionMessage" }] : /* istanbul ignore next */ []));
    visibleRecordCount = signal(7, ...(ngDevMode ? [{ debugName: "visibleRecordCount" }] : /* istanbul ignore next */ []));
    subjectId = computed(() => this.detail()?.subject.subjectId || '', ...(ngDevMode ? [{ debugName: "subjectId" }] : /* istanbul ignore next */ []));
    isDetail = computed(() => Boolean(this.route.snapshot.paramMap.get('subjectId')), ...(ngDevMode ? [{ debugName: "isDetail" }] : /* istanbul ignore next */ []));
    semester = computed(() => this.session.profile()?.currentSemester || 1, ...(ngDevMode ? [{ debugName: "semester" }] : /* istanbul ignore next */ []));
    filteredSubjects = computed(() => {
        const query = this.search().trim().toLocaleLowerCase();
        const subjects = this.subjects().filter((subject) => {
            const status = this.subjectStatus(subject.attendancePercentage);
            return ((this.subjectFilter() === 'all' || status === this.subjectFilter()) &&
                (!query ||
                    subject.subjectName.toLocaleLowerCase().includes(query) ||
                    subject.subjectCode.toLocaleLowerCase().includes(query) ||
                    subject.facultyNames.some((name) => name.toLocaleLowerCase().includes(query))));
        });
        return subjects.sort((left, right) => {
            if (this.subjectSort() === 'name')
                return left.subjectName.localeCompare(right.subjectName);
            return this.subjectSort() === 'high'
                ? right.attendancePercentage - left.attendancePercentage
                : left.attendancePercentage - right.attendancePercentage;
        });
    }, ...(ngDevMode ? [{ debugName: "filteredSubjects" }] : /* istanbul ignore next */ []));
    subjectPages = computed(() => Math.max(1, Math.ceil(this.filteredSubjects().length / 5)), ...(ngDevMode ? [{ debugName: "subjectPages" }] : /* istanbul ignore next */ []));
    subjectRangeStart = computed(() => this.filteredSubjects().length ? (this.subjectPage() - 1) * 5 + 1 : 0, ...(ngDevMode ? [{ debugName: "subjectRangeStart" }] : /* istanbul ignore next */ []));
    subjectRangeEnd = computed(() => Math.min(this.subjectPage() * 5, this.filteredSubjects().length), ...(ngDevMode ? [{ debugName: "subjectRangeEnd" }] : /* istanbul ignore next */ []));
    pagedSubjects = computed(() => {
        const start = (this.subjectPage() - 1) * 5;
        return this.filteredSubjects().slice(start, start + 5);
    }, ...(ngDevMode ? [{ debugName: "pagedSubjects" }] : /* istanbul ignore next */ []));
    recordMap = computed(() => new Map((this.detail()?.records || []).map((record) => [record.date, record])), ...(ngDevMode ? [{ debugName: "recordMap" }] : /* istanbul ignore next */ []));
    monthRecords = computed(() => {
        const selected = this.selectedMonth();
        return (this.detail()?.records || [])
            .filter((record) => {
            const date = this.parseDate(record.date);
            return (date.getFullYear() === selected.getFullYear() &&
                date.getMonth() === selected.getMonth() &&
                (this.recordFilter() === 'all' || record.status === this.recordFilter()));
        })
            .sort((left, right) => right.date.localeCompare(left.date));
    }, ...(ngDevMode ? [{ debugName: "monthRecords" }] : /* istanbul ignore next */ []));
    mobileRecords = computed(() => [...this.monthRecords()].sort((left, right) => left.date.localeCompare(right.date)), ...(ngDevMode ? [{ debugName: "mobileRecords" }] : /* istanbul ignore next */ []));
    visibleRecords = computed(() => this.mobileRecords().slice(0, this.visibleRecordCount()), ...(ngDevMode ? [{ debugName: "visibleRecords" }] : /* istanbul ignore next */ []));
    desktopCalendar = computed(() => this.buildCalendar(true), ...(ngDevMode ? [{ debugName: "desktopCalendar" }] : /* istanbul ignore next */ []));
    mobileCalendar = computed(() => this.buildCalendar(false), ...(ngDevMode ? [{ debugName: "mobileCalendar" }] : /* istanbul ignore next */ []));
    weekDays = computed(() => this.buildWeek(), ...(ngDevMode ? [{ debugName: "weekDays" }] : /* istanbul ignore next */ []));
    monthLabel = computed(() => new Intl.DateTimeFormat('en-IN', { month: 'long', year: 'numeric' }).format(this.selectedMonth()), ...(ngDevMode ? [{ debugName: "monthLabel" }] : /* istanbul ignore next */ []));
    weekLabel = computed(() => {
        const days = this.weekDays();
        if (!days.length)
            return '';
        const first = days[0].date;
        const last = days[6].date;
        return `${this.two(first.getDate())} – ${this.two(last.getDate())} ${new Intl.DateTimeFormat('en-IN', { month: 'short', year: 'numeric' }).format(last)}`;
    }, ...(ngDevMode ? [{ debugName: "weekLabel" }] : /* istanbul ignore next */ []));
    constructor() {
        this.route.paramMap.pipe(takeUntilDestroyed(this.destroyRef)).subscribe((params) => {
            const subjectId = params.get('subjectId');
            if (subjectId)
                this.loadDetail(subjectId);
            else
                this.loadSubjects();
        });
    }
    setSearch(value) {
        this.search.set(value);
        this.subjectPage.set(1);
    }
    setSubjectFilter(filter) {
        this.subjectFilter.set(filter);
        this.subjectPage.set(1);
    }
    cycleSubjectFilter() {
        const values = ['all', 'safe', 'attention', 'critical'];
        this.setSubjectFilter(values[(values.indexOf(this.subjectFilter()) + 1) % values.length]);
    }
    cycleSubjectSort() {
        const values = ['high', 'low', 'name'];
        this.subjectSort.set(values[(values.indexOf(this.subjectSort()) + 1) % values.length]);
        this.subjectPage.set(1);
    }
    desktopFilterLabel() {
        const labels = {
            all: 'All status',
            safe: 'On track',
            attention: 'Attention',
            critical: 'Critical',
        };
        return labels[this.subjectFilter()];
    }
    desktopSortLabel() {
        return this.subjectSort() === 'high'
            ? 'Attendance: high to low'
            : this.subjectSort() === 'low'
                ? 'Attendance: low to high'
                : 'Subject: A to Z';
    }
    openSubject(subject) {
        void this.router.navigate(['/student/attendance/subjects', subject.subjectId]);
    }
    goBack() {
        if (this.isDetail())
            void this.router.navigate(['/student/attendance/subjects']);
        else
            void this.router.navigate(['/student/attendance']);
    }
    setView(view) {
        this.view.set(view);
        this.visibleRecordCount.set(7);
    }
    changeMonth(offset) {
        const value = this.selectedMonth();
        this.selectedMonth.set(new Date(value.getFullYear(), value.getMonth() + offset, 1));
        this.visibleRecordCount.set(7);
    }
    goToday() {
        this.selectedMonth.set(new Date());
    }
    changeWeek(offset) {
        const value = this.selectedMonth();
        this.selectedMonth.set(new Date(value.getFullYear(), value.getMonth(), value.getDate() + offset * 7));
    }
    selectCell(cell) {
        if (cell.record)
            this.openRecord(cell.record);
    }
    openRecord(record) {
        this.selectedRecord.set(record);
        this.correctionOpen.set(false);
        this.correctionReason.set('');
        this.correctionMessage.set('');
    }
    closeRecord() {
        this.selectedRecord.set(null);
        this.correctionOpen.set(false);
    }
    loadMore() {
        this.visibleRecordCount.update((value) => value + 7);
    }
    submitCorrection() {
        const token = this.session.token();
        const record = this.selectedRecord();
        const reason = this.correctionReason().trim();
        if (!token || !record || reason.length < 10) {
            this.correctionMessage.set('Please provide at least 10 characters explaining the issue.');
            return;
        }
        this.correctionSubmitting.set(true);
        this.correctionMessage.set('');
        this.api.createAttendanceCorrectionRequest(token, record.recordId, reason).subscribe({
            next: () => {
                this.correctionSubmitting.set(false);
                this.correctionOpen.set(false);
                this.correctionMessage.set('Correction request submitted for faculty review.');
            },
            error: (error) => {
                this.correctionSubmitting.set(false);
                this.correctionMessage.set(error?.error?.message || 'The request could not be submitted.');
            },
        });
    }
    downloadCsv() {
        const subject = this.detail()?.subject;
        if (!subject)
            return;
        const rows = [
            ['Date', 'Status', 'Start time', 'End time', 'Faculty', 'Venue'],
            ...this.monthRecords().map((record) => [
                record.date,
                record.status,
                record.startTime,
                record.endTime,
                record.facultyName,
                record.roomName,
            ]),
        ];
        const csv = rows
            .map((row) => row.map((value) => `"${String(value).replaceAll('"', '""')}"`).join(','))
            .join('\n');
        const url = URL.createObjectURL(new Blob([csv], { type: 'text/csv;charset=utf-8' }));
        const anchor = document.createElement('a');
        anchor.href = url;
        anchor.download = `${subject.subjectCode || 'subject'}-attendance.csv`;
        anchor.click();
        URL.revokeObjectURL(url);
    }
    subjectStatus(percentage) {
        if (percentage >= this.requiredAttendance)
            return 'safe';
        if (percentage >= 65)
            return 'attention';
        return 'critical';
    }
    statusLabel(percentage) {
        const status = this.subjectStatus(percentage);
        return status === 'safe' ? 'On track' : status === 'attention' ? 'Attention' : 'Critical';
    }
    formatPercentage(value) {
        return new Intl.NumberFormat('en-IN', { maximumFractionDigits: 1 }).format(value);
    }
    formatTime(value) {
        if (!value)
            return 'Time unavailable';
        const [hours, minutes] = value.split(':').map(Number);
        return new Intl.DateTimeFormat('en-IN', { hour: '2-digit', minute: '2-digit' }).format(new Date(2000, 0, 1, hours, minutes));
    }
    loadSubjects() {
        const token = this.session.token();
        if (!token)
            return this.fail('Your student session is unavailable.');
        this.loading.set(true);
        this.api.studentAttendance(token).subscribe({
            next: (result) => {
                this.subjects.set(result.subjects);
                this.overall.set(result.overall);
                this.loading.set(false);
            },
            error: () => this.fail('Subject attendance could not be loaded.'),
        });
    }
    loadDetail(subjectId) {
        const token = this.session.token();
        if (!token)
            return this.fail('Your student session is unavailable.');
        this.loading.set(true);
        this.api.studentSubjectAttendance(token, subjectId).subscribe({
            next: (result) => {
                this.detail.set(result);
                const latest = result.records[0]?.date;
                if (latest)
                    this.selectedMonth.set(this.parseDate(latest));
                this.loading.set(false);
            },
            error: () => this.fail('Attendance history for this subject could not be loaded.'),
        });
    }
    fail(message) {
        this.error.set(message);
        this.loading.set(false);
    }
    buildCalendar(mondayFirst) {
        const selected = this.selectedMonth();
        const first = new Date(selected.getFullYear(), selected.getMonth(), 1);
        const dayOffset = mondayFirst ? (first.getDay() + 6) % 7 : first.getDay();
        const start = new Date(first.getFullYear(), first.getMonth(), 1 - dayOffset);
        const daysInMonth = new Date(selected.getFullYear(), selected.getMonth() + 1, 0).getDate();
        const cellCount = Math.ceil((dayOffset + daysInMonth) / 7) * 7;
        return Array.from({ length: cellCount }, (_, index) => {
            const date = new Date(start.getFullYear(), start.getMonth(), start.getDate() + index);
            return this.calendarCell(date, date.getMonth() !== selected.getMonth());
        });
    }
    buildWeek() {
        const selected = this.selectedMonth();
        const offset = (selected.getDay() + 6) % 7;
        const start = new Date(selected.getFullYear(), selected.getMonth(), selected.getDate() - offset);
        return Array.from({ length: 7 }, (_, index) => {
            const date = new Date(start.getFullYear(), start.getMonth(), start.getDate() + index);
            const cell = this.calendarCell(date, false);
            return {
                ...cell,
                label: new Intl.DateTimeFormat('en-IN', { weekday: 'short' }).format(date),
                shortLabel: `${this.two(date.getDate())} ${new Intl.DateTimeFormat('en-IN', { month: 'short' }).format(date)}`,
                schedule: this.scheduleFor(date),
            };
        });
    }
    calendarCell(date, outside) {
        const key = this.dateKey(date);
        const record = this.recordMap().get(key) || null;
        return {
            date,
            key,
            day: date.getDate(),
            outside,
            status: record?.status || 'no_class',
            record,
        };
    }
    scheduleFor(date) {
        const day = new Intl.DateTimeFormat('en-US', { weekday: 'long' }).format(date);
        return this.detail()?.schedule.find((entry) => entry.day === day) || null;
    }
    monthStart(date) {
        return new Date(date.getFullYear(), date.getMonth(), 1);
    }
    parseDate(value) {
        const [year, month, day] = value.split('-').map(Number);
        return new Date(year, month - 1, day);
    }
    dateKey(date) {
        return `${date.getFullYear()}-${this.two(date.getMonth() + 1)}-${this.two(date.getDate())}`;
    }
    two(value) {
        return String(value).padStart(2, '0');
    }
    static ɵfac = function StudentSubjectAttendanceComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || StudentSubjectAttendanceComponent)(); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: StudentSubjectAttendanceComponent, selectors: [["erp-student-subject-attendance"]], decls: 6, vars: 2, consts: [[1, "subject-attendance-page"], ["role", "status", 1, "subject-attendance-state"], ["role", "alert", 1, "subject-attendance-state", "subject-attendance-state--error"], ["lucideAlertCircle", "", "size", "30", "aria-hidden", "true"], ["type", "button", 3, "click"], [1, "subject-attendance-heading"], ["aria-label", "Breadcrumb"], ["type", "button", "aria-label", "Back to attendance", 1, "subject-attendance-back", "subject-attendance-back--mobile", 3, "click"], ["lucideArrowLeft", "", "size", "22", "aria-hidden", "true"], [1, "subject-attendance-heading__controls"], ["type", "button", "aria-label", "Refresh subject attendance", 3, "click"], ["lucideRefreshCw", "", "size", "18"], ["aria-label", "Overall subject attendance summary", 1, "subject-attendance-overall", "subject-attendance-overall--desktop"], [1, "subject-attendance-overall__ring"], [1, "is-present"], ["lucideCheck", "", "size", "21", "aria-hidden", "true"], [1, "is-absent"], ["lucideX", "", "size", "21", "aria-hidden", "true"], [1, "is-conducted"], ["lucideCircleMinus", "", "size", "21", "aria-hidden", "true"], ["aria-label", "Overall subject attendance summary", 1, "subject-attendance-mobile-summary"], ["aria-hidden", "true"], [1, "subject-attendance-mobile-summary__progress"], [1, "subject-attendance-directory"], ["lucideSearch", "", "size", "20", "aria-hidden", "true"], ["type", "search", "placeholder", "Search subject or code\u2026", 3, "ngModelChange", "ngModel"], [1, "subject-attendance-directory__desktop-filters"], ["lucideFilter", "", "size", "18", "aria-hidden", "true"], ["lucideChevronDown", "", "size", "15", "aria-hidden", "true"], ["aria-label", "Filter subjects by attendance status", 1, "subject-attendance-filter-pills"], [1, "is-safe"], ["lucideCheck", "", "size", "16"], [1, "is-attention"], ["lucideAlertCircle", "", "size", "16"], [1, "is-critical"], ["lucideX", "", "size", "16"], [1, "subject-attendance-table-wrap"], [1, "subject-attendance-mobile-list"], ["type", "button"], [1, "subject-attendance-empty"], ["aria-label", "Subject result pages"], ["type", "button", 3, "click", "disabled"], ["lucideChevronLeft", "", "size", "17"], ["lucideChevronRight", "", "size", "17"], [1, "is-present-text"], [1, "is-absent-text"], ["lucideChevronRight", "", "size", "18"], [1, "subject-attendance-subject-icon", 3, "subject", "size"], [1, "subject-attendance-mobile-list__copy"], [1, "subject-attendance-mobile-list__score"], ["lucideCheck", "", "size", "14"], ["lucideAlertCircle", "", "size", "14"], ["lucideChevronRight", "", "size", "18", "aria-hidden", "true"], [1, "subject-attendance-detail-heading", "subject-attendance-detail-heading--desktop"], ["type", "button", "aria-label", "Back to subject attendance", 1, "subject-attendance-back", 3, "click"], ["lucideArrowLeft", "", "size", "22"], [1, "subject-attendance-detail-heading__stats"], [1, "subject-attendance-mobile-detail"], [1, "subject-attendance-mobile-detail__month-heading"], [1, "subject-attendance-history"], ["aria-label", "Attendance history view"], [1, "subject-attendance-history__controls"], ["type", "button", "aria-label", "Previous month", 3, "click"], ["lucideChevronLeft", "", "size", "18"], ["lucideChevronDown", "", "size", "15"], ["type", "button", "aria-label", "Next month", 3, "click"], [1, "subject-attendance-week"], [1, "subject-attendance-legend"], ["lucideX", "", "size", "14"], [1, "is-no_class"], ["lucideCircleMinus", "", "size", "14"], ["lucideInfo", "", "size", "17"], ["type", "button", "aria-label", "Back to subject attendance", 3, "click"], [1, "subject-attendance-mobile-detail__page-heading"], ["type", "button", "aria-label", "Back to subject attendance"], [1, "subject-attendance-mobile-detail__subject-card"], ["lucideMonitor", "", "size", "29"], ["lucideAlertCircle", "", "size", "15"], [1, "subject-attendance-calendar", "subject-attendance-calendar--desktop"], [1, "subject-attendance-calendar__weekdays"], [1, "subject-attendance-calendar__grid"], ["type", "button", 3, "is-outside", "is-selected", "disabled"], [1, "subject-attendance-calendar", "subject-attendance-calendar--mobile"], ["lucideChevronLeft", "", "size", "20"], ["lucideChevronRight", "", "size", "20"], [1, "subject-attendance-calendar__summary"], [3, "class"], ["lucideCheck", "", "size", "13"], ["lucideX", "", "size", "13"], ["lucideCircleMinus", "", "size", "13"], ["type", "button", 3, "is-active"], [3, "has-record"], ["lucideCalendarDays", "", "size", "18"], [3, "click"], ["lucideMapPin", "", "size", "16"], ["lucideBookOpen", "", "size", "16"], ["lucideCircleMinus", "", "size", "16"], [1, "subject-attendance-record-toolbar"], ["lucideFilter", "", "size", "17"], [3, "ngModelChange", "ngModel"], ["value", "all"], ["value", "present"], ["value", "absent"], ["type", "button", "aria-label", "Download attendance CSV", 3, "click"], ["lucideArrowDownToLine", "", "size", "18"], [1, "subject-attendance-record-table"], [1, "subject-attendance-record-list"], [1, "subject-attendance-record-list__footer"], ["type", "button", 1, "subject-attendance-load-more"], ["lucideCheck", "", "size", "15"], ["lucideX", "", "size", "15"], ["lucideMapPin", "", "size", "15"], ["type", "button", 1, "subject-attendance-load-more", 3, "click"], ["lucideChevronDown", "", "size", "17"], [1, "subject-attendance-sheet-backdrop", 3, "click"], ["role", "dialog", "aria-modal", "true", "aria-labelledby", "lecture-detail-title", 1, "subject-attendance-sheet"], ["aria-hidden", "true", 1, "subject-attendance-sheet__handle"], ["id", "lecture-detail-title"], ["type", "button", "aria-label", "Close lecture details", 3, "click"], ["lucideX", "", "size", "23"], [1, "subject-attendance-sheet__status"], ["lucideClock3", "", "size", "21"], ["lucideBookOpen", "", "size", "21"], ["lucideUserRound", "", "size", "21"], ["lucideMapPin", "", "size", "21"], [1, "subject-attendance-sheet__updated"], ["aria-live", "polite", 1, "subject-attendance-sheet__message"], ["lucideCheck", "", "size", "22"], ["lucideX", "", "size", "22"], [3, "submit"], ["for", "correction-reason"], ["id", "correction-reason", "rows", "3", "maxlength", "500", "placeholder", "Explain what is incorrect in this attendance record\u2026", "name", "reason", 3, "ngModelChange", "ngModel"], ["type", "submit", 3, "disabled"]], template: function StudentSubjectAttendanceComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0);
            i0.ɵɵconditionalCreate(1, StudentSubjectAttendanceComponent_Conditional_1_Template, 6, 0, "section", 1)(2, StudentSubjectAttendanceComponent_Conditional_2_Template, 8, 1, "section", 2)(3, StudentSubjectAttendanceComponent_Conditional_3_Template, 142, 32)(4, StudentSubjectAttendanceComponent_Conditional_4_Template, 99, 24);
            i0.ɵɵconditionalCreate(5, StudentSubjectAttendanceComponent_Conditional_5_Template, 54, 19);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            let tmp_0_0;
            let tmp_1_0;
            i0.ɵɵadvance();
            i0.ɵɵconditional(ctx.loading() ? 1 : ctx.error() ? 2 : !ctx.isDetail() ? 3 : (tmp_0_0 = ctx.detail()) ? 4 : -1, tmp_0_0);
            i0.ɵɵadvance(4);
            i0.ɵɵconditional((tmp_1_0 = ctx.selectedRecord()) ? 5 : -1, tmp_1_0);
        } }, dependencies: [FormsModule, i1.ɵNgNoValidate, i1.NgSelectOption, i1.ɵNgSelectMultipleOption, i1.DefaultValueAccessor, i1.SelectControlValueAccessor, i1.NgControlStatus, i1.NgControlStatusGroup, i1.MaxLengthValidator, i1.NgModel, i1.NgForm, LucideAlertCircle,
            LucideArrowDownToLine,
            LucideArrowLeft,
            LucideBookOpen,
            LucideCalendarDays,
            LucideCheck,
            LucideChevronDown,
            LucideChevronLeft,
            LucideChevronRight,
            LucideCircleMinus,
            LucideClock3,
            LucideFilter,
            LucideInfo,
            LucideMapPin,
            LucideMonitor,
            LucideRefreshCw,
            LucideSearch,
            LucideUserRound,
            LucideX,
            StudentSubjectIconComponent,
            DatePipe], styles: ["\n[_nghost-%COMP%] {\n  display: block;\n}"], changeDetection: 0 });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(StudentSubjectAttendanceComponent, [{
        type: Component,
        args: [{ selector: 'erp-student-subject-attendance', imports: [
                    DatePipe,
                    FormsModule,
                    LucideAlertCircle,
                    LucideArrowDownToLine,
                    LucideArrowLeft,
                    LucideBookOpen,
                    LucideCalendarDays,
                    LucideCheck,
                    LucideChevronDown,
                    LucideChevronLeft,
                    LucideChevronRight,
                    LucideCircleMinus,
                    LucideClock3,
                    LucideFilter,
                    LucideInfo,
                    LucideMapPin,
                    LucideMonitor,
                    LucideRefreshCw,
                    LucideSearch,
                    LucideUserRound,
                    LucideX,
                    StudentSubjectIconComponent,
                ], changeDetection: ChangeDetectionStrategy.OnPush, template: "<div class=\"subject-attendance-page\">\n  @if (loading()) {\n    <section class=\"subject-attendance-state\" role=\"status\">\n      <span></span>\n      <strong>Loading subject attendance</strong>\n      <p>Preparing your lecture records\u2026</p>\n    </section>\n  } @else if (error()) {\n    <section class=\"subject-attendance-state subject-attendance-state--error\" role=\"alert\">\n      <svg lucideAlertCircle size=\"30\" aria-hidden=\"true\"></svg>\n      <strong>Attendance could not be loaded</strong>\n      <p>{{ error() }}</p>\n      <button type=\"button\" (click)=\"goBack()\">Back to attendance</button>\n    </section>\n  } @else if (!isDetail()) {\n    <header class=\"subject-attendance-heading\">\n      <nav aria-label=\"Breadcrumb\">\n        <span>Academics</span><b>/</b><span>Attendance</span><b>/</b\n        ><strong>Subject Attendance</strong>\n      </nav>\n      <div>\n        <button\n          type=\"button\"\n          class=\"subject-attendance-back subject-attendance-back--mobile\"\n          (click)=\"goBack()\"\n          aria-label=\"Back to attendance\"\n        >\n          <svg lucideArrowLeft size=\"22\" aria-hidden=\"true\"></svg>\n        </button>\n        <div>\n          <h1>Subject Attendance</h1>\n          <p>Review attendance across every enrolled subject.</p>\n        </div>\n        <div class=\"subject-attendance-heading__controls\">\n          <button type=\"button\" aria-label=\"Refresh subject attendance\" (click)=\"loadSubjects()\">\n            <svg lucideRefreshCw size=\"18\"></svg>\n          </button>\n        </div>\n      </div>\n    </header>\n\n    <section\n      class=\"subject-attendance-overall subject-attendance-overall--desktop\"\n      aria-label=\"Overall subject attendance summary\"\n    >\n      <div\n        class=\"subject-attendance-overall__ring\"\n        [style.--subject-progress]=\"overall().attendancePercentage + '%'\"\n      >\n        <strong>{{ formatPercentage(overall().attendancePercentage) }}%</strong>\n      </div>\n      <div>\n        <strong>Overall</strong\n        ><span>{{ overall().presentLectures }} of {{ overall().totalLectures }} classes</span>\n      </div>\n      <i></i>\n      <div class=\"is-present\">\n        <span><svg lucideCheck size=\"21\" aria-hidden=\"true\"></svg></span\n        ><strong>{{ overall().presentLectures }}</strong\n        ><b>Present</b><small>classes attended</small>\n      </div>\n      <i></i>\n      <div class=\"is-absent\">\n        <span><svg lucideX size=\"21\" aria-hidden=\"true\"></svg></span\n        ><strong>{{ overall().absentLectures }}</strong\n        ><b>Absent</b><small>classes missed</small>\n      </div>\n      <i></i>\n      <div class=\"is-conducted\">\n        <span><svg lucideCircleMinus size=\"21\" aria-hidden=\"true\"></svg></span\n        ><strong>{{ overall().totalLectures }}</strong\n        ><b>Conducted</b><small>total classes</small>\n      </div>\n    </section>\n\n    <section\n      class=\"subject-attendance-mobile-summary\"\n      aria-label=\"Overall subject attendance summary\"\n    >\n      <div>\n        <strong>{{ formatPercentage(overall().attendancePercentage) }}%</strong>\n        <span>Overall attendance</span>\n      </div>\n      <i aria-hidden=\"true\"></i>\n      <div>\n        <p>\n          <strong>{{ overall().presentLectures }}</strong> of {{ overall().totalLectures }} lectures\n        </p>\n        <span class=\"subject-attendance-mobile-summary__progress\"\n          ><i [style.width]=\"overall().attendancePercentage + '%'\"> </i><b></b\n        ></span>\n        <small>Required {{ requiredAttendance }}%</small>\n      </div>\n    </section>\n\n    <section class=\"subject-attendance-directory\">\n      <header>\n        <label>\n          <svg lucideSearch size=\"20\" aria-hidden=\"true\"></svg>\n          <input\n            type=\"search\"\n            placeholder=\"Search subject or code\u2026\"\n            [ngModel]=\"search()\"\n            (ngModelChange)=\"setSearch($event)\"\n          />\n        </label>\n        <div class=\"subject-attendance-directory__desktop-filters\">\n          <button type=\"button\" (click)=\"cycleSubjectFilter()\">\n            <svg lucideFilter size=\"18\" aria-hidden=\"true\"></svg> {{ desktopFilterLabel() }}\n            <svg lucideChevronDown size=\"15\" aria-hidden=\"true\"></svg>\n          </button>\n          <button type=\"button\" (click)=\"cycleSubjectSort()\">\n            {{ desktopSortLabel() }} <svg lucideChevronDown size=\"15\" aria-hidden=\"true\"></svg>\n          </button>\n        </div>\n      </header>\n      <div\n        class=\"subject-attendance-filter-pills\"\n        aria-label=\"Filter subjects by attendance status\"\n      >\n        <button\n          type=\"button\"\n          [class.is-active]=\"subjectFilter() === 'all'\"\n          (click)=\"setSubjectFilter('all')\"\n        >\n          All\n        </button>\n        <button\n          type=\"button\"\n          [class.is-active]=\"subjectFilter() === 'safe'\"\n          (click)=\"setSubjectFilter('safe')\"\n        >\n          <span class=\"is-safe\"><svg lucideCheck size=\"16\"></svg></span> On track\n        </button>\n        <button\n          type=\"button\"\n          [class.is-active]=\"subjectFilter() === 'attention'\"\n          (click)=\"setSubjectFilter('attention')\"\n        >\n          <span class=\"is-attention\"><svg lucideAlertCircle size=\"16\"></svg></span> Attention\n        </button>\n        <button\n          type=\"button\"\n          [class.is-active]=\"subjectFilter() === 'critical'\"\n          (click)=\"setSubjectFilter('critical')\"\n        >\n          <span class=\"is-critical\"><svg lucideX size=\"16\"></svg></span> Critical\n        </button>\n      </div>\n\n      <div class=\"subject-attendance-table-wrap\">\n        <table>\n          <thead>\n            <tr>\n              <th>Subject</th>\n              <th>Faculty</th>\n              <th>Conducted</th>\n              <th>Present</th>\n              <th>Absent</th>\n              <th>Attendance</th>\n              <th>Action</th>\n            </tr>\n          </thead>\n          <tbody>\n            @for (subject of pagedSubjects(); track subject.subjectId) {\n              <tr>\n                <td>\n                  <strong>{{ subject.subjectName }}</strong\n                  ><small>{{ subject.subjectCode }}</small>\n                </td>\n                <td>{{ subject.facultyNames.join(', ') || 'Faculty not assigned' }}</td>\n                <td>{{ subject.totalLectures }}</td>\n                <td class=\"is-present-text\">{{ subject.presentLectures }}</td>\n                <td class=\"is-absent-text\">{{ subject.absentLectures }}</td>\n                <td>\n                  <div\n                    [class]=\"\n                      'subject-attendance-table-progress is-' +\n                      subjectStatus(subject.attendancePercentage)\n                    \"\n                  >\n                    <span><i [style.width]=\"subject.attendancePercentage + '%'\"></i></span\n                    ><b>{{ formatPercentage(subject.attendancePercentage) }}%</b\n                    ><em [class]=\"'is-' + subjectStatus(subject.attendancePercentage)\">{{\n                      statusLabel(subject.attendancePercentage)\n                    }}</em>\n                  </div>\n                </td>\n                <td>\n                  <button\n                    type=\"button\"\n                    (click)=\"openSubject(subject)\"\n                    [attr.aria-label]=\"'Open ' + subject.subjectName\"\n                  >\n                    <svg lucideChevronRight size=\"18\"></svg>\n                  </button>\n                </td>\n              </tr>\n            }\n          </tbody>\n        </table>\n      </div>\n\n      <div class=\"subject-attendance-mobile-list\">\n        @for (subject of filteredSubjects(); track subject.subjectId) {\n          <button type=\"button\" (click)=\"openSubject(subject)\">\n            <erp-student-subject-icon class=\"subject-attendance-subject-icon\" [subject]=\"subject.subjectName\" [size]=\"25\" />\n            <span class=\"subject-attendance-mobile-list__copy\"\n              ><strong>{{ subject.subjectName }}</strong\n              ><small\n                >{{ subject.subjectCode }} \u00B7\n                {{ subject.facultyNames[0] || 'Faculty not assigned' }}</small\n              ><i><b [style.width]=\"subject.attendancePercentage + '%'\"></b></i\n            ></span>\n            <span class=\"subject-attendance-mobile-list__score\"\n              ><strong>{{ formatPercentage(subject.attendancePercentage) }}%</strong\n              ><small [class]=\"'is-' + subjectStatus(subject.attendancePercentage)\">\n                @if (subjectStatus(subject.attendancePercentage) === 'safe') {\n                  <svg lucideCheck size=\"14\"></svg>\n                } @else {\n                  <svg lucideAlertCircle size=\"14\"></svg>\n                }\n                {{ statusLabel(subject.attendancePercentage) }}\n              </small></span\n            >\n            <svg lucideChevronRight size=\"18\" aria-hidden=\"true\"></svg>\n          </button>\n        } @empty {\n          <p class=\"subject-attendance-empty\">No subjects match your search or filter.</p>\n        }\n      </div>\n\n      <footer>\n        <span\n          >{{ subjectRangeStart() }}\u2013{{ subjectRangeEnd() }} of\n          {{ filteredSubjects().length }} subjects</span\n        >\n        <nav aria-label=\"Subject result pages\">\n          <button\n            type=\"button\"\n            [disabled]=\"subjectPage() === 1\"\n            (click)=\"subjectPage.set(subjectPage() - 1)\"\n          >\n            <svg lucideChevronLeft size=\"17\"></svg></button\n          ><b>{{ subjectPage() }}</b\n          ><button\n            type=\"button\"\n            [disabled]=\"subjectPage() === subjectPages()\"\n            (click)=\"subjectPage.set(subjectPage() + 1)\"\n          >\n            <svg lucideChevronRight size=\"17\"></svg>\n          </button>\n        </nav>\n      </footer>\n    </section>\n  } @else if (detail(); as attendance) {\n    <header\n      class=\"subject-attendance-detail-heading subject-attendance-detail-heading--desktop\"\n      [class.is-drawer-open]=\"selectedRecord()\"\n    >\n      <nav aria-label=\"Breadcrumb\">\n        <span>Academics</span><b>/</b><span>Attendance</span><b>/</b\n        ><strong>{{ attendance.subject.subjectName }}</strong>\n      </nav>\n      <div>\n        <button\n          type=\"button\"\n          class=\"subject-attendance-back\"\n          (click)=\"goBack()\"\n          aria-label=\"Back to subject attendance\"\n        >\n          <svg lucideArrowLeft size=\"22\"></svg>\n        </button>\n        <section>\n          <h1>{{ attendance.subject.subjectName }}</h1>\n          <p>\n            {{ attendance.subject.subjectCode }} \u00B7 Semester {{ semester() }} \u00B7\n            {{ attendance.subject.facultyNames[0] || 'Faculty not assigned' }}\n          </p>\n          <div class=\"subject-attendance-detail-heading__stats\">\n            <span\n              ><strong>{{ attendance.subject.presentLectures }}</strong> Present</span\n            ><i>\u00B7</i>\n            <span\n              ><strong>{{ attendance.subject.absentLectures }}</strong> Absent</span\n            ><i>\u00B7</i>\n            <span\n              ><strong>{{ attendance.subject.totalLectures }}</strong> Conducted</span\n            ><i>\u00B7</i>\n            <span\n              ><strong\n                >{{ formatPercentage(attendance.subject.attendancePercentage) }}%</strong\n              ></span\n            >\n          </div>\n        </section>\n        <aside>\n          <strong>{{ formatPercentage(attendance.subject.attendancePercentage) }}%</strong\n          ><span [class]=\"'is-' + subjectStatus(attendance.subject.attendancePercentage)\">{{\n            statusLabel(attendance.subject.attendancePercentage)\n          }}</span>\n        </aside>\n      </div>\n    </header>\n\n    <section class=\"subject-attendance-mobile-detail\">\n      @if (view() === 'month') {\n        <header class=\"subject-attendance-mobile-detail__month-heading\">\n          <button type=\"button\" (click)=\"goBack()\" aria-label=\"Back to subject attendance\">\n            <svg lucideArrowLeft size=\"22\"></svg>\n          </button>\n          <div>\n            <h1>{{ attendance.subject.subjectName }}</h1>\n            <p>{{ attendance.subject.subjectCode }} \u00B7 Semester {{ semester() }}</p>\n          </div>\n          <aside>\n            <strong>{{ formatPercentage(attendance.subject.attendancePercentage) }}%</strong>\n            <span>{{ statusLabel(attendance.subject.attendancePercentage) }}</span>\n          </aside>\n        </header>\n      } @else {\n        <header class=\"subject-attendance-mobile-detail__page-heading\">\n          @if (view() === 'list') {\n            <button type=\"button\" (click)=\"goBack()\" aria-label=\"Back to subject attendance\">\n              <svg lucideArrowLeft size=\"22\"></svg>\n            </button>\n          }\n          <div>\n            <h1>Subject Attendance</h1>\n            @if (view() === 'week') {\n              <p>Track your attendance for each subject</p>\n            }\n          </div>\n        </header>\n        <section class=\"subject-attendance-mobile-detail__subject-card\">\n          <span><svg lucideMonitor size=\"29\"></svg></span>\n          <div>\n            <strong>{{ attendance.subject.subjectName }}</strong>\n            <small\n              >{{ attendance.subject.subjectCode }} \u00B7\n              {{ attendance.subject.facultyNames[0] || 'Faculty not assigned' }}</small\n            >\n          </div>\n          <i aria-hidden=\"true\"></i>\n          <aside>\n            <strong>{{ formatPercentage(attendance.subject.attendancePercentage) }}%</strong>\n            <small [class]=\"'is-' + subjectStatus(attendance.subject.attendancePercentage)\">\n              <svg lucideAlertCircle size=\"15\"></svg>\n              {{ statusLabel(attendance.subject.attendancePercentage) }}\n            </small>\n          </aside>\n        </section>\n      }\n    </section>\n\n    <section class=\"subject-attendance-history\">\n      <header>\n        <div>\n          <h2>Attendance history</h2>\n          <p>View your attendance for this subject.</p>\n        </div>\n        <nav aria-label=\"Attendance history view\">\n          <button type=\"button\" [class.is-active]=\"view() === 'month'\" (click)=\"setView('month')\">\n            Month</button\n          ><button type=\"button\" [class.is-active]=\"view() === 'week'\" (click)=\"setView('week')\">\n            Week</button\n          ><button type=\"button\" [class.is-active]=\"view() === 'list'\" (click)=\"setView('list')\">\n            List\n          </button>\n        </nav>\n        <div class=\"subject-attendance-history__controls\">\n          <button type=\"button\" (click)=\"changeMonth(-1)\" aria-label=\"Previous month\">\n            <svg lucideChevronLeft size=\"18\"></svg></button\n          ><span>{{ monthLabel() }} <svg lucideChevronDown size=\"15\"></svg></span\n          ><button type=\"button\" (click)=\"changeMonth(1)\" aria-label=\"Next month\">\n            <svg lucideChevronRight size=\"18\"></svg></button\n          ><button type=\"button\" (click)=\"goToday()\">Today</button>\n        </div>\n      </header>\n\n      @if (view() === 'month') {\n        <div class=\"subject-attendance-calendar subject-attendance-calendar--desktop\">\n          <div class=\"subject-attendance-calendar__weekdays\">\n            @for (day of ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']; track day) {\n              <span>{{ day }}</span>\n            }\n          </div>\n          <div class=\"subject-attendance-calendar__grid\">\n            @for (cell of desktopCalendar(); track cell.key) {\n              <button\n                type=\"button\"\n                [class.is-outside]=\"cell.outside\"\n                [class.is-selected]=\"selectedRecord()?.date === cell.key\"\n                [disabled]=\"!cell.record\"\n                (click)=\"selectCell(cell)\"\n              >\n                <b>{{ cell.day }}</b>\n                @if (cell.status !== 'empty') {\n                  <span [class]=\"'is-' + cell.status\">\n                    @if (cell.status === 'present') {\n                      <svg lucideCheck size=\"13\"></svg><i>P</i>\n                    } @else if (cell.status === 'absent') {\n                      <svg lucideX size=\"13\"></svg><i>A</i>\n                    } @else {\n                      <svg lucideCircleMinus size=\"13\"></svg><i>No class</i>\n                    }\n                  </span>\n                }\n              </button>\n            }\n          </div>\n        </div>\n        <div class=\"subject-attendance-calendar subject-attendance-calendar--mobile\">\n          <header>\n            <button type=\"button\" (click)=\"changeMonth(-1)\">\n              <svg lucideChevronLeft size=\"20\"></svg></button\n            ><strong>{{ monthLabel() }}</strong\n            ><button type=\"button\" (click)=\"changeMonth(1)\">\n              <svg lucideChevronRight size=\"20\"></svg>\n            </button>\n          </header>\n          <div class=\"subject-attendance-calendar__weekdays\">\n            @for (day of ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']; track day) {\n              <span>{{ day }}</span>\n            }\n          </div>\n          <div class=\"subject-attendance-calendar__grid\">\n            @for (cell of mobileCalendar(); track cell.key) {\n              <button\n                type=\"button\"\n                [class.is-outside]=\"cell.outside\"\n                [class.is-selected]=\"selectedRecord()?.date === cell.key\"\n                [disabled]=\"!cell.record\"\n                (click)=\"selectCell(cell)\"\n              >\n                <b>{{ cell.day }}</b>\n                @if (cell.status !== 'empty') {\n                  <span [class]=\"'is-' + cell.status\">\n                    @if (cell.status === 'present') {\n                      <svg lucideCheck size=\"13\"></svg><i>P</i>\n                    } @else if (cell.status === 'absent') {\n                      <svg lucideX size=\"13\"></svg><i>A</i>\n                    } @else {\n                      <svg lucideCircleMinus size=\"13\"></svg><i>-</i>\n                    }\n                  </span>\n                }\n              </button>\n            }\n          </div>\n          <div class=\"subject-attendance-calendar__summary\">\n            <span\n              ><strong>{{ attendance.subject.presentLectures }}</strong\n              >Present</span\n            ><span\n              ><strong>{{ attendance.subject.absentLectures }}</strong\n              >Absent</span\n            ><span\n              ><strong>{{ requiredAttendance }}%</strong>Required</span\n            >\n          </div>\n        </div>\n      } @else if (view() === 'week') {\n        <div class=\"subject-attendance-week\">\n          <header>\n            <button type=\"button\" (click)=\"changeWeek(-1)\">\n              <svg lucideChevronLeft size=\"20\"></svg></button\n            ><strong>{{ weekLabel() }}</strong\n            ><button type=\"button\" (click)=\"changeWeek(1)\">\n              <svg lucideChevronRight size=\"20\"></svg>\n            </button>\n          </header>\n          <nav>\n            @for (day of weekDays(); track day.key) {\n              <button type=\"button\" [class.is-active]=\"day.record\" (click)=\"selectCell(day)\">\n                <span>{{ day.label }}</span\n                ><strong>{{ day.day }}</strong>\n              </button>\n            }\n          </nav>\n          <div>\n            @for (day of weekDays(); track day.key) {\n              <article\n                [class.has-record]=\"day.record\"\n                (click)=\"day.record && openRecord(day.record)\"\n              >\n                <time\n                  ><strong>{{ day.label }}</strong\n                  ><span>{{ day.shortLabel }}</span></time\n                >\n                @if (day.record; as record) {\n                  <span>{{ formatTime(record.startTime) }} \u2013 {{ formatTime(record.endTime) }}</span\n                  ><em [class]=\"'is-' + record.status\">\n                    @if (record.status === 'present') {\n                      <svg lucideCheck size=\"16\"></svg> Present\n                    } @else {\n                      <svg lucideX size=\"16\"></svg> Absent\n                    }</em\n                  ><small\n                    ><svg lucideMapPin size=\"16\"></svg>{{ record.roomName || 'Venue unavailable'\n                    }}<br /><svg lucideBookOpen size=\"16\"></svg\n                    >{{ attendance.subject.subjectName }}</small\n                  >\n                } @else {\n                  <p>\n                    <svg lucideCircleMinus size=\"16\"></svg\n                    >{{ day.schedule ? 'Attendance not saved' : 'No class scheduled' }}\n                  </p>\n                }\n              </article>\n            }\n          </div>\n          <footer>\n            <button type=\"button\" (click)=\"changeWeek(-1)\">\n              <svg lucideChevronLeft size=\"18\"></svg>Previous week</button\n            ><button type=\"button\"><svg lucideCalendarDays size=\"18\"></svg>This week</button\n            ><button type=\"button\" (click)=\"changeWeek(1)\">\n              Next week<svg lucideChevronRight size=\"18\"></svg>\n            </button>\n          </footer>\n        </div>\n      } @else {\n        <div class=\"subject-attendance-record-toolbar\">\n          <span\n            ><svg lucideCalendarDays size=\"18\"></svg>{{ monthLabel()\n            }}<svg lucideChevronDown size=\"15\"></svg></span\n          ><label\n            ><svg lucideFilter size=\"17\"></svg\n            ><select [ngModel]=\"recordFilter()\" (ngModelChange)=\"recordFilter.set($event)\">\n              <option value=\"all\">All records</option>\n              <option value=\"present\">Present</option>\n              <option value=\"absent\">Absent</option>\n            </select></label\n          ><button type=\"button\" (click)=\"downloadCsv()\" aria-label=\"Download attendance CSV\">\n            <svg lucideArrowDownToLine size=\"18\"></svg>\n          </button>\n        </div>\n        <div class=\"subject-attendance-record-table\">\n          <table>\n            <thead>\n              <tr>\n                <th>Date</th>\n                <th>Day</th>\n                <th>Time</th>\n                <th>Type</th>\n                <th>Faculty</th>\n                <th>Venue</th>\n                <th>Status</th>\n              </tr>\n            </thead>\n            <tbody>\n              @for (record of monthRecords(); track record.recordId) {\n                <tr (click)=\"openRecord(record)\">\n                  <td>{{ parseDate(record.date) | date: 'dd MMM yyyy' }}</td>\n                  <td>{{ parseDate(record.date) | date: 'EEE' }}</td>\n                  <td>{{ formatTime(record.startTime) }} \u2013 {{ formatTime(record.endTime) }}</td>\n                  <td>{{ record.classType }}</td>\n                  <td>{{ record.facultyName }}</td>\n                  <td>{{ record.roomName || '\u2014' }}</td>\n                  <td>\n                    <em [class]=\"'is-' + record.status\">\n                      @if (record.status === 'present') {\n                        <svg lucideCheck size=\"15\"></svg> Present (P)\n                      } @else {\n                        <svg lucideX size=\"15\"></svg> Absent (A)\n                      }\n                    </em>\n                  </td>\n                </tr>\n              }\n            </tbody>\n          </table>\n        </div>\n        <div class=\"subject-attendance-record-list\">\n          @for (record of visibleRecords(); track record.recordId) {\n            <button type=\"button\" (click)=\"openRecord(record)\">\n              <time\n                ><strong>{{ parseDate(record.date) | date: 'dd' }}</strong\n                ><span>{{ parseDate(record.date) | date: 'EEE' }}</span></time\n              ><span\n                ><strong\n                  >{{ formatTime(record.startTime) }} \u2013 {{ formatTime(record.endTime) }}</strong\n                ><small\n                  ><svg lucideMapPin size=\"15\"></svg\n                  >{{ record.roomName || 'Venue unavailable' }}</small\n                ></span\n              ><em [class]=\"'is-' + record.status\">\n                @if (record.status === 'present') {\n                  <svg lucideCheck size=\"15\"></svg>Present\n                } @else {\n                  <svg lucideX size=\"15\"></svg>Absent\n                }\n              </em>\n            </button>\n          } @empty {\n            <p class=\"subject-attendance-empty\">No saved attendance records match this filter.</p>\n          }\n          <footer class=\"subject-attendance-record-list__footer\">\n            <span\n              >Showing {{ visibleRecords().length }} of {{ monthRecords().length }} records</span\n            >\n            @if (visibleRecords().length < monthRecords().length) {\n              <button class=\"subject-attendance-load-more\" type=\"button\" (click)=\"loadMore()\">\n                Load more <svg lucideChevronDown size=\"17\"></svg>\n              </button>\n            }\n          </footer>\n        </div>\n      }\n\n      <footer class=\"subject-attendance-legend\">\n        <span\n          ><i class=\"is-present\"><svg lucideCheck size=\"14\"></svg></i><b>P</b>Present</span\n        ><span\n          ><i class=\"is-absent\"><svg lucideX size=\"14\"></svg></i><b>A</b>Absent</span\n        ><span\n          ><i class=\"is-no_class\"><svg lucideCircleMinus size=\"14\"></svg></i><b>-</b>No class</span\n        >\n        <p><svg lucideInfo size=\"17\"></svg>Only faculty-saved lectures are included.</p>\n      </footer>\n    </section>\n  }\n\n  @if (selectedRecord(); as record) {\n    <div class=\"subject-attendance-sheet-backdrop\" (click)=\"closeRecord()\"></div>\n    <aside\n      class=\"subject-attendance-sheet\"\n      role=\"dialog\"\n      aria-modal=\"true\"\n      aria-labelledby=\"lecture-detail-title\"\n    >\n      <span class=\"subject-attendance-sheet__handle\" aria-hidden=\"true\"></span>\n      <header>\n        <div>\n          <h2 id=\"lecture-detail-title\">Lecture details</h2>\n          <p>{{ parseDate(record.date) | date: 'dd MMMM yyyy, EEEE' }}</p>\n        </div>\n        <button type=\"button\" (click)=\"closeRecord()\" aria-label=\"Close lecture details\">\n          <svg lucideX size=\"23\"></svg>\n        </button>\n      </header>\n      <section\n        class=\"subject-attendance-sheet__status\"\n        [class]=\"'subject-attendance-sheet__status is-' + record.status\"\n      >\n        @if (record.status === 'present') {\n          <span><svg lucideCheck size=\"22\"></svg></span>\n          <div>\n            <strong>Present</strong><small>You were marked present for this lecture.</small>\n          </div>\n        } @else {\n          <span><svg lucideX size=\"22\"></svg></span>\n          <div><strong>Absent</strong><small>You were marked absent for this lecture.</small></div>\n        }\n      </section>\n      <dl>\n        <div>\n          <dt><svg lucideClock3 size=\"21\"></svg><span>Time</span></dt>\n          <dd>{{ formatTime(record.startTime) }} \u2013 {{ formatTime(record.endTime) }}</dd>\n        </div>\n        <div>\n          <dt><svg lucideBookOpen size=\"21\"></svg><span>Subject</span></dt>\n          <dd>{{ detail()?.subject?.subjectName }} \u00B7 {{ detail()?.subject?.subjectCode }}</dd>\n        </div>\n        <div>\n          <dt><svg lucideUserRound size=\"21\"></svg><span>Faculty</span></dt>\n          <dd>{{ record.facultyName || 'Faculty' }}</dd>\n        </div>\n        <div>\n          <dt><svg lucideMapPin size=\"21\"></svg><span>Venue</span></dt>\n          <dd>{{ record.roomName || 'Venue unavailable' }}</dd>\n        </div>\n      </dl>\n      <p class=\"subject-attendance-sheet__updated\">\n        Updated {{ record.updatedAt | date: 'shortTime' }} \u00B7 Marked by faculty\n      </p>\n      @if (correctionOpen()) {\n        <form (submit)=\"$event.preventDefault(); submitCorrection()\">\n          <label for=\"correction-reason\">What should be corrected?</label\n          ><textarea\n            id=\"correction-reason\"\n            rows=\"3\"\n            maxlength=\"500\"\n            placeholder=\"Explain what is incorrect in this attendance record\u2026\"\n            [ngModel]=\"correctionReason()\"\n            (ngModelChange)=\"correctionReason.set($event)\"\n            name=\"reason\"\n          ></textarea\n          ><button type=\"submit\" [disabled]=\"correctionSubmitting()\">\n            {{ correctionSubmitting() ? 'Submitting\u2026' : 'Submit request' }}\n          </button>\n        </form>\n      }\n      @if (correctionMessage()) {\n        <p class=\"subject-attendance-sheet__message\" aria-live=\"polite\">\n          {{ correctionMessage() }}\n        </p>\n      }\n      <footer>\n        <button type=\"button\" (click)=\"closeRecord()\">Close</button\n        ><button type=\"button\" (click)=\"correctionOpen.set(!correctionOpen())\">\n          Request correction\n        </button>\n      </footer>\n    </aside>\n  }\n</div>\n", styles: ["/* ERP-LOCAL-STYLE: subject-attendance host boundary; visual system is included by student-theme */\n:host {\n  display: block;\n}\n"] }]
    }], () => [], null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(StudentSubjectAttendanceComponent, { className: "StudentSubjectAttendanceComponent", filePath: "frontend/src/app/features/student/academics/student-subject-attendance.component.ts", lineNumber: 93 }); })();
