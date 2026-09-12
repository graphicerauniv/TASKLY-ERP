import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';
import { DatePipe } from '@angular/common';
import { RouterLink } from '@angular/router';
import { retry, throwError, timer } from 'rxjs';
import { LucideAlertTriangle, LucideCheck, LucideChevronRight, LucideRefreshCw, } from '@lucide/angular';
import { ApiService } from '../../../core/api.service';
import { StudentSessionService } from '../shared/services/student-session.service';
import { StudentSubjectIconComponent } from '../shared/components/student-subject-icon/student-subject-icon.component';
import * as i0 from "@angular/core";
const _c0 = a0 => ["/student/attendance/shortage", a0];
const _forTrack0 = ($index, $item) => $item.id;
const _forTrack1 = ($index, $item) => $item.subjectId;
function StudentAttendanceComponent_Conditional_20_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "small");
    i0.ɵɵtext(1);
    i0.ɵɵpipe(2, "date");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1("Updated ", i0.ɵɵpipeBind2(2, 1, ctx, "shortTime"));
} }
function StudentAttendanceComponent_Conditional_21_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "section", 8);
    i0.ɵɵelement(1, "span", 10);
    i0.ɵɵelementStart(2, "strong");
    i0.ɵɵtext(3, "Loading your attendance");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "p");
    i0.ɵɵtext(5, "Preparing your current academic summary\u2026");
    i0.ɵɵelementEnd()();
} }
function StudentAttendanceComponent_Conditional_22_Template(rf, ctx) { if (rf & 1) {
    const _r1 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "section", 9);
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(1, "svg", 11);
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(2, "strong");
    i0.ɵɵtext(3, "Attendance could not be loaded");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "p");
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "button", 12);
    i0.ɵɵlistener("click", function StudentAttendanceComponent_Conditional_22_Template_button_click_6_listener() { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.refresh()); });
    i0.ɵɵtext(7, "Try again");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(ctx_r1.error());
} }
function StudentAttendanceComponent_Conditional_23_Conditional_53_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(0, "svg", 26);
} }
function StudentAttendanceComponent_Conditional_23_Conditional_54_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(0, "svg", 27);
} }
function StudentAttendanceComponent_Conditional_23_For_65_Conditional_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "a", 40);
    i0.ɵɵelement(1, "img", 41);
    i0.ɵɵelementStart(2, "span")(3, "strong");
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "small");
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(7, "i", 42);
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(8, "svg", 43);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const tool_r3 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵclassMap("student-attendance-tool student-attendance-tool--" + tool_r3.tone);
    i0.ɵɵproperty("routerLink", ctx);
    i0.ɵɵadvance();
    i0.ɵɵproperty("src", tool_r3.image, i0.ɵɵsanitizeUrl);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(tool_r3.title);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(tool_r3.description);
} }
function StudentAttendanceComponent_Conditional_23_For_65_Conditional_1_Template(rf, ctx) { if (rf & 1) {
    const _r4 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 12);
    i0.ɵɵlistener("click", function StudentAttendanceComponent_Conditional_23_For_65_Conditional_1_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r4); const tool_r3 = i0.ɵɵnextContext().$implicit; const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.activateTool(tool_r3)); });
    i0.ɵɵelement(1, "img", 41);
    i0.ɵɵelementStart(2, "span")(3, "strong");
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "small");
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(7, "i", 42);
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(8, "svg", 43);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const tool_r3 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵclassMap("student-attendance-tool student-attendance-tool--" + tool_r3.tone);
    i0.ɵɵadvance();
    i0.ɵɵproperty("src", tool_r3.image, i0.ɵɵsanitizeUrl);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(tool_r3.title);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(tool_r3.description);
} }
function StudentAttendanceComponent_Conditional_23_For_65_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵconditionalCreate(0, StudentAttendanceComponent_Conditional_23_For_65_Conditional_0_Template, 9, 6, "a", 38)(1, StudentAttendanceComponent_Conditional_23_For_65_Conditional_1_Template, 9, 5, "button", 39);
} if (rf & 2) {
    let tmp_11_0;
    const tool_r3 = ctx.$implicit;
    i0.ɵɵconditional((tmp_11_0 = tool_r3.route) ? 0 : 1, tmp_11_0);
} }
function StudentAttendanceComponent_Conditional_23_For_81_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "article")(1, "div", 44)(2, "span", 45);
    i0.ɵɵelement(3, "erp-student-subject-icon", 46);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "span", 47)(5, "strong");
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "small");
    i0.ɵɵtext(8);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(9, "span", 48);
    i0.ɵɵelement(10, "i");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(11, "b");
    i0.ɵɵtext(12);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(13, "em");
    i0.ɵɵtext(14);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(15, "a", 40);
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(16, "svg", 49);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const subject_r5 = ctx.$implicit;
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("subject", subject_r5.subjectName)("size", 20);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(subject_r5.subjectName);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(subject_r5.subjectCode || "Subject");
    i0.ɵɵadvance(2);
    i0.ɵɵstyleProp("width", subject_r5.attendancePercentage + "%");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1("", ctx_r1.formatPercentage(subject_r5.attendancePercentage), "%");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(subject_r5.attendancePercentage >= ctx_r1.requiredAttendance - 10 ? "At risk" : "Critical");
    i0.ɵɵadvance();
    i0.ɵɵproperty("routerLink", i0.ɵɵpureFunction1(10, _c0, subject_r5.subjectId));
    i0.ɵɵattribute("aria-label", "View attendance alert for " + subject_r5.subjectName);
} }
function StudentAttendanceComponent_Conditional_23_ForEmpty_82_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 37)(1, "span");
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(2, "svg", 26);
    i0.ɵɵelementEnd();
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(3, "p")(4, "strong");
    i0.ɵɵtext(5, "No attendance shortage");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(6, " All conducted subjects meet the requirement. ");
    i0.ɵɵelementEnd()();
} }
function StudentAttendanceComponent_Conditional_23_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "section", 13)(1, "div", 14)(2, "div", 15)(3, "span")(4, "strong");
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "small");
    i0.ɵɵtext(7, "Overall attendance");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(8, "em", 16);
    i0.ɵɵtext(9);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(10, "div", 17)(11, "h2", 18)(12, "strong");
    i0.ɵɵtext(13);
    i0.ɵɵelementEnd();
    i0.ɵɵtext(14, " present from ");
    i0.ɵɵelementStart(15, "b");
    i0.ɵɵtext(16);
    i0.ɵɵelementEnd();
    i0.ɵɵtext(17, " conducted lectures ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(18, "h2", 19)(19, "strong");
    i0.ɵɵtext(20);
    i0.ɵɵelementEnd();
    i0.ɵɵtext(21, " of ");
    i0.ɵɵelementStart(22, "b");
    i0.ɵɵtext(23);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(24, "span");
    i0.ɵɵtext(25, "lectures attended");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(26, "div", 20);
    i0.ɵɵelement(27, "span")(28, "i");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(29, "small");
    i0.ɵɵtext(30);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(31, "dl")(32, "div")(33, "dt");
    i0.ɵɵtext(34, "Present");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(35, "dd", 21);
    i0.ɵɵtext(36);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(37, "div")(38, "dt");
    i0.ɵɵtext(39, "Absent");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(40, "dd", 22);
    i0.ɵɵtext(41);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(42, "div")(43, "dt");
    i0.ɵɵtext(44, "Conducted");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(45, "dd");
    i0.ɵɵtext(46);
    i0.ɵɵelementEnd()()()();
    i0.ɵɵelementStart(47, "div", 23);
    i0.ɵɵelement(48, "img", 24);
    i0.ɵɵelementStart(49, "strong");
    i0.ɵɵtext(50);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(51, "div", 25)(52, "span");
    i0.ɵɵconditionalCreate(53, StudentAttendanceComponent_Conditional_23_Conditional_53_Template, 1, 0, ":svg:svg", 26)(54, StudentAttendanceComponent_Conditional_23_Conditional_54_Template, 1, 0, ":svg:svg", 27);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(55, "strong");
    i0.ɵɵtext(56);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(57, "section", 28)(58, "header")(59, "h2", 29);
    i0.ɵɵtext(60, "Attendance tools");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(61, "p");
    i0.ɵɵtext(62, "Open a feature to view complete details");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(63, "div", 30);
    i0.ɵɵrepeaterCreate(64, StudentAttendanceComponent_Conditional_23_For_65_Template, 2, 1, null, null, _forTrack0);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(66, "p", 31);
    i0.ɵɵtext(67);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(68, "section", 32)(69, "header")(70, "span");
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(71, "svg", 33);
    i0.ɵɵelementEnd();
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(72, "div")(73, "h2", 34);
    i0.ɵɵtext(74, "Needs attention");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(75, "p");
    i0.ɵɵtext(76);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(77, "a", 35);
    i0.ɵɵtext(78, " View alerts ");
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(79, "svg", 36);
    i0.ɵɵelementEnd()();
    i0.ɵɵrepeaterCreate(80, StudentAttendanceComponent_Conditional_23_For_81_Template, 17, 12, "article", null, _forTrack1, false, StudentAttendanceComponent_Conditional_23_ForEmpty_82_Template, 7, 0, "div", 37);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵstyleProp("--student-attendance-progress", ctx_r1.percentage() + "%");
    i0.ɵɵclassProp("student-attendance-hero--safe", ctx_r1.status() === "safe")("student-attendance-hero--warning", ctx_r1.status() === "warning")("student-attendance-hero--critical", ctx_r1.status() === "critical")("student-attendance-hero--unknown", ctx_r1.status() === "unknown");
    i0.ɵɵadvance(2);
    i0.ɵɵattribute("aria-label", ctx_r1.formatPercentage(ctx_r1.percentage()) + "% overall attendance, " + ctx_r1.statusLabel());
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1("", ctx_r1.formatPercentage(ctx_r1.percentage()), "%");
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(ctx_r1.statusLabel());
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(ctx_r1.overall().presentLectures);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(ctx_r1.overall().totalLectures);
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(ctx_r1.overall().presentLectures);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(ctx_r1.overall().totalLectures);
    i0.ɵɵadvance(5);
    i0.ɵɵstyleProp("left", ctx_r1.requiredAttendance + "%");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1("Required ", ctx_r1.requiredAttendance, "%");
    i0.ɵɵadvance(6);
    i0.ɵɵtextInterpolate(ctx_r1.overall().presentLectures);
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(ctx_r1.overall().absentLectures);
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(ctx_r1.overall().totalLectures);
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(ctx_r1.requirementMessage());
    i0.ɵɵadvance(3);
    i0.ɵɵconditional(ctx_r1.status() === "safe" ? 53 : 54);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(ctx_r1.statusLabel());
    i0.ɵɵadvance(8);
    i0.ɵɵrepeater(ctx_r1.attendanceTools);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(ctx_r1.toolNotice());
    i0.ɵɵadvance(9);
    i0.ɵɵtextInterpolate1("Subjects below required attendance (", ctx_r1.requiredAttendance, "%)");
    i0.ɵɵadvance(4);
    i0.ɵɵrepeater(ctx_r1.needsAttention());
} }
export class StudentAttendanceComponent {
    api = inject(ApiService);
    session = inject(StudentSessionService);
    subjects = signal([], ...(ngDevMode ? [{ debugName: "subjects" }] : /* istanbul ignore next */ []));
    overall = signal({
        totalLectures: 0,
        presentLectures: 0,
        absentLectures: 0,
        attendancePercentage: 0,
    }, ...(ngDevMode ? [{ debugName: "overall" }] : /* istanbul ignore next */ []));
    loading = signal(true, ...(ngDevMode ? [{ debugName: "loading" }] : /* istanbul ignore next */ []));
    refreshing = signal(false, ...(ngDevMode ? [{ debugName: "refreshing" }] : /* istanbul ignore next */ []));
    error = signal('', ...(ngDevMode ? [{ debugName: "error" }] : /* istanbul ignore next */ []));
    lastUpdated = signal(null, ...(ngDevMode ? [{ debugName: "lastUpdated" }] : /* istanbul ignore next */ []));
    toolNotice = signal('', ...(ngDevMode ? [{ debugName: "toolNotice" }] : /* istanbul ignore next */ []));
    requiredAttendance = 75;
    attendanceTools = [
        {
            id: 'overview',
            title: 'Overview',
            description: 'Current attendance summary',
            image: '/assets/student/attendance/overview.webp',
            tone: 'overview',
        },
        {
            id: 'subjects',
            title: 'Subject Attendance',
            description: 'View subject-wise records',
            image: '/assets/student/attendance/subject-attendance.webp',
            tone: 'subject',
            route: ['/student/attendance/subjects'],
        },
        {
            id: 'analysis',
            title: 'Analyze Attendance',
            description: 'Understand performance patterns',
            image: '/assets/student/attendance/analyze-attendance.webp',
            tone: 'analysis',
            route: ['/student/attendance/analyze'],
        },
        {
            id: 'alerts',
            title: 'Shortage & Alerts',
            description: 'Subjects needing attention',
            image: '/assets/student/attendance/shortage-alerts.webp',
            tone: 'alerts',
            route: ['/student/attendance/shortage'],
        },
        {
            id: 'corrections',
            title: 'Correction Requests',
            description: 'Report an incorrect record',
            image: '/assets/student/attendance/correction-requests.webp',
            tone: 'corrections',
            route: ['/student/attendance/corrections'],
        },
        {
            id: 'reports',
            title: 'Reports & Downloads',
            description: 'Download attendance reports',
            image: '/assets/student/attendance/reports-downloads.webp',
            tone: 'reports',
            route: ['/student/attendance/reports'],
        },
    ];
    percentage = computed(() => Math.min(100, Math.max(0, this.overall().attendancePercentage || 0)), ...(ngDevMode ? [{ debugName: "percentage" }] : /* istanbul ignore next */ []));
    status = computed(() => {
        if (!this.overall().totalLectures)
            return 'unknown';
        if (this.percentage() >= this.requiredAttendance)
            return 'safe';
        if (this.percentage() >= this.requiredAttendance - 10)
            return 'warning';
        return 'critical';
    }, ...(ngDevMode ? [{ debugName: "status" }] : /* istanbul ignore next */ []));
    statusLabel = computed(() => {
        const labels = {
            unknown: 'Not started',
            safe: 'On track',
            warning: 'Needs attention',
            critical: 'Critical shortage',
        };
        return labels[this.status()];
    }, ...(ngDevMode ? [{ debugName: "statusLabel" }] : /* istanbul ignore next */ []));
    requirementMessage = computed(() => {
        if (!this.overall().totalLectures)
            return 'Attendance will update after the first lecture.';
        const difference = Math.abs(this.percentage() - this.requiredAttendance);
        if (this.percentage() >= this.requiredAttendance) {
            return `You are ${this.formatPercentage(difference)}% above the requirement.`;
        }
        return `You are ${this.formatPercentage(difference)}% below the requirement.`;
    }, ...(ngDevMode ? [{ debugName: "requirementMessage" }] : /* istanbul ignore next */ []));
    needsAttention = computed(() => this.subjects()
        .filter((subject) => subject.totalLectures > 0 && subject.attendancePercentage < this.requiredAttendance)
        .sort((left, right) => left.attendancePercentage - right.attendancePercentage), ...(ngDevMode ? [{ debugName: "needsAttention" }] : /* istanbul ignore next */ []));
    constructor() {
        this.loadAttendance();
    }
    refresh() {
        if (this.refreshing() || this.loading())
            return;
        this.refreshing.set(true);
        this.loadAttendance(true);
    }
    activateTool(tool) {
        if (tool.id === 'overview') {
            document.querySelector('.student-attendance-hero')?.scrollIntoView({
                behavior: 'smooth',
                block: 'center',
            });
            this.toolNotice.set('You are viewing the current attendance overview.');
            return;
        }
        this.toolNotice.set(`${tool.title} will open when its detailed page is added in the next phase.`);
    }
    openAlerts() {
        this.toolNotice.set('Opening your live shortage and attendance alerts.');
    }
    formatPercentage(value) {
        return new Intl.NumberFormat('en-IN', { maximumFractionDigits: 1 }).format(value);
    }
    loadAttendance(isRefresh = false) {
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
        this.api
            .studentAttendance(token)
            .pipe(retry({
            count: 2,
            delay: (requestError, retryCount) => requestError.status === 0 || requestError.status >= 500
                ? timer(retryCount * 600)
                : throwError(() => requestError),
        }))
            .subscribe({
            next: (result) => {
                this.subjects.set(result.subjects);
                this.overall.set(result.overall);
                this.lastUpdated.set(new Date());
                this.loading.set(false);
                this.refreshing.set(false);
            },
            error: (requestError) => {
                this.error.set(requestError.status === 401
                    ? 'Your student session has expired. Sign in again to continue.'
                    : requestError.status === 0
                        ? 'The attendance service could not be reached. Check the API connection and try again.'
                        : requestError.error?.message || 'Your attendance is temporarily unavailable.');
                this.loading.set(false);
                this.refreshing.set(false);
            },
        });
    }
    static ɵfac = function StudentAttendanceComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || StudentAttendanceComponent)(); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: StudentAttendanceComponent, selectors: [["erp-student-attendance"]], decls: 24, vars: 5, consts: [["aria-labelledby", "student-attendance-title", 1, "student-attendance-page"], [1, "student-attendance-heading"], ["aria-label", "Breadcrumb"], ["id", "student-attendance-title"], [1, "student-attendance-heading__mobile-copy"], ["aria-label", "Attendance actions", 1, "student-attendance-context"], ["type", "button", "aria-label", "Refresh attendance", 1, "student-attendance-refresh", 3, "click", "disabled"], ["lucideRefreshCw", "", "size", "19", "aria-hidden", "true"], ["role", "status", "aria-live", "polite", 1, "student-attendance-state"], ["role", "alert", 1, "student-attendance-state", "student-attendance-state--error"], ["aria-hidden", "true", 1, "student-attendance-state__spinner"], ["lucideAlertTriangle", "", "size", "28", "aria-hidden", "true"], ["type", "button", 3, "click"], ["aria-labelledby", "attendance-overall-heading", 1, "student-attendance-hero"], [1, "student-attendance-ring-group"], ["role", "img", 1, "student-attendance-page__ring"], [1, "student-attendance-ring-status"], [1, "student-attendance-hero__summary"], ["id", "attendance-overall-heading", 1, "student-attendance-hero__desktop-copy"], ["aria-hidden", "true", 1, "student-attendance-hero__mobile-copy"], ["aria-hidden", "true", 1, "student-attendance-progress"], [1, "is-present"], [1, "is-absent"], [1, "student-attendance-hero__visual"], ["src", "/assets/student/attendance/attendance-hero.webp", "width", "520", "height", "459", "alt", "", "aria-hidden", "true", "decoding", "async"], ["aria-label", "Attendance status", 1, "student-attendance-status"], ["lucideCheck", "", "size", "18", "aria-hidden", "true"], ["lucideAlertTriangle", "", "size", "17", "aria-hidden", "true"], ["aria-labelledby", "attendance-tools-heading", 1, "student-attendance-tools"], ["id", "attendance-tools-heading"], [1, "student-attendance-tools__grid"], ["aria-live", "polite", 1, "student-attendance-tool-notice"], ["aria-labelledby", "attendance-alerts-heading", 1, "student-attendance-alerts"], ["lucideAlertTriangle", "", "size", "20", "aria-hidden", "true"], ["id", "attendance-alerts-heading"], ["routerLink", "/student/attendance/alerts"], ["lucideChevronRight", "", "size", "17", "aria-hidden", "true"], [1, "student-attendance-alerts__empty"], [3, "routerLink", "class"], ["type", "button", 3, "class"], [3, "routerLink"], ["width", "320", "height", "320", "alt", "", "aria-hidden", "true", "loading", "lazy", "decoding", "async", 3, "src"], ["aria-hidden", "true"], ["lucideChevronRight", "", "size", "20"], [1, "student-attendance-alerts__subject"], ["aria-hidden", "true", 1, "student-attendance-alerts__subject-icon"], [3, "subject", "size"], [1, "student-attendance-alerts__subject-copy"], ["aria-hidden", "true", 1, "student-attendance-alerts__progress"], ["lucideChevronRight", "", "size", "18", "aria-hidden", "true"]], template: function StudentAttendanceComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0)(1, "header", 1)(2, "div")(3, "nav", 2)(4, "span");
            i0.ɵɵtext(5, "Academics");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(6, "b");
            i0.ɵɵtext(7, "/");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(8, "strong");
            i0.ɵɵtext(9, "Attendance");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(10, "h1", 3);
            i0.ɵɵtext(11, "Attendance");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(12, "p")(13, "span");
            i0.ɵɵtext(14, "Track, understand and improve your attendance.");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(15, "span", 4);
            i0.ɵɵtext(16, " Track and improve your attendance ");
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(17, "div", 5)(18, "button", 6);
            i0.ɵɵlistener("click", function StudentAttendanceComponent_Template_button_click_18_listener() { return ctx.refresh(); });
            i0.ɵɵnamespaceSVG();
            i0.ɵɵelement(19, "svg", 7);
            i0.ɵɵelementEnd();
            i0.ɵɵconditionalCreate(20, StudentAttendanceComponent_Conditional_20_Template, 3, 4, "small");
            i0.ɵɵelementEnd()();
            i0.ɵɵconditionalCreate(21, StudentAttendanceComponent_Conditional_21_Template, 6, 0, "section", 8)(22, StudentAttendanceComponent_Conditional_22_Template, 8, 1, "section", 9)(23, StudentAttendanceComponent_Conditional_23_Template, 83, 29);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            let tmp_2_0;
            i0.ɵɵadvance(18);
            i0.ɵɵproperty("disabled", ctx.loading() || ctx.refreshing());
            i0.ɵɵadvance();
            i0.ɵɵclassProp("is-spinning", ctx.refreshing());
            i0.ɵɵadvance();
            i0.ɵɵconditional((tmp_2_0 = ctx.lastUpdated()) ? 20 : -1, tmp_2_0);
            i0.ɵɵadvance();
            i0.ɵɵconditional(ctx.loading() ? 21 : ctx.error() ? 22 : 23);
        } }, dependencies: [LucideAlertTriangle,
            LucideCheck,
            LucideChevronRight,
            LucideRefreshCw,
            RouterLink,
            StudentSubjectIconComponent,
            DatePipe], styles: ["\n[_nghost-%COMP%] {\n  display: block;\n  min-width: 0;\n}\n\n.student-attendance-page[_ngcontent-%COMP%] {\n  display: grid;\n  min-width: 0;\n  gap: var(--student-space-4);\n  padding-bottom: var(--student-space-4);\n  color: var(--student-color-text);\n}\n\n.student-attendance-heading[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-end;\n  justify-content: space-between;\n  gap: var(--student-space-6);\n}\n\n.student-attendance-heading[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: var(--student-space-2);\n  margin-bottom: var(--student-space-2);\n  color: var(--student-color-text-secondary);\n  font-size: var(--student-text-label);\n}\n\n.student-attendance-heading[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: var(--student-color-primary-pressed);\n}\n\n.student-attendance-heading[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%], \n.student-attendance-heading[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], \n.student-attendance-tools[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], \n.student-attendance-tools[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], \n.student-attendance-alerts[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], \n.student-attendance-alerts[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n}\n\n.student-attendance-heading[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: clamp(var(--student-text-display), 2.4vw, var(--student-space-10));\n  letter-spacing: -0.045em;\n  line-height: 1;\n}\n\n.student-attendance-heading[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:first-child    > p[_ngcontent-%COMP%] {\n  margin-top: var(--student-space-2);\n  color: var(--student-color-text-secondary);\n  font-size: var(--student-text-body);\n}\n\n.student-attendance-heading__mobile-copy[_ngcontent-%COMP%] {\n  display: none;\n}\n\n.student-attendance-context[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n  gap: var(--student-space-2);\n  flex-wrap: wrap;\n}\n\n.student-attendance-context[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  color: var(--student-color-text-secondary);\n  font-size: var(--student-text-caption);\n}\n\n.student-attendance-refresh[_ngcontent-%COMP%], \n.student-attendance-state[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  display: inline-grid;\n  min-width: 44px;\n  min-height: 44px;\n  place-items: center;\n  border: 1px solid var(--student-color-border);\n  border-radius: var(--student-radius-control);\n  color: var(--student-color-primary-pressed);\n  background: var(--student-color-surface-raised);\n  cursor: pointer;\n}\n\n.student-attendance-refresh[_ngcontent-%COMP%]:disabled {\n  color: var(--student-color-text-muted);\n  cursor: wait;\n}\n\n.student-attendance-refresh[_ngcontent-%COMP%]   .is-spinning[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_student-attendance-spin 700ms linear infinite;\n}\n\n.student-attendance-state[_ngcontent-%COMP%] {\n  display: grid;\n  min-height: 320px;\n  place-content: center;\n  justify-items: center;\n  gap: var(--student-space-2);\n  padding: var(--student-space-8);\n  border: 1px solid var(--student-color-border);\n  border-radius: var(--student-radius-card);\n  background: var(--student-color-surface);\n  box-shadow: var(--student-shadow-card);\n  text-align: center;\n}\n\n.student-attendance-state[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  color: var(--student-color-text-secondary);\n}\n\n.student-attendance-state--error[_ngcontent-%COMP%]    > svg[_ngcontent-%COMP%] {\n  color: var(--student-color-warning);\n}\n\n.student-attendance-state[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  min-width: 110px;\n  margin-top: var(--student-space-2);\n  padding-inline: var(--student-space-4);\n  font-weight: 700;\n}\n\n.student-attendance-state__spinner[_ngcontent-%COMP%] {\n  width: var(--student-space-8);\n  height: var(--student-space-8);\n  border: var(--student-space-1) solid var(--student-attendance-ring-track);\n  border-top-color: var(--student-color-primary);\n  border-radius: var(--student-radius-pill);\n  animation: _ngcontent-%COMP%_student-attendance-spin 700ms linear infinite;\n}\n\n.student-attendance-hero[_ngcontent-%COMP%] {\n  position: relative;\n  display: grid;\n  min-height: 190px;\n  grid-template-columns: minmax(180px, 0.72fr) minmax(340px, 2fr) minmax(200px, 0.9fr);\n  align-items: center;\n  gap: var(--student-space-6);\n  overflow: hidden;\n  padding: var(--student-space-4) var(--student-space-6);\n  border: 1px solid var(--student-color-border);\n  border-radius: var(--student-radius-card);\n  background: linear-gradient(\n    115deg,\n    var(--student-attendance-hero-start),\n    var(--student-attendance-hero-end)\n  );\n  box-shadow: var(--student-attendance-shadow);\n}\n\n.student-attendance-hero[_ngcontent-%COMP%]::before, \n.student-attendance-hero[_ngcontent-%COMP%]::after {\n  position: absolute;\n  border-radius: var(--student-radius-pill);\n  background: var(--student-color-primary-soft);\n  content: '';\n  opacity: 0.72;\n  pointer-events: none;\n}\n\n.student-attendance-hero[_ngcontent-%COMP%]::before {\n  width: 170px;\n  height: 170px;\n  right: -70px;\n  top: -65px;\n}\n\n.student-attendance-hero[_ngcontent-%COMP%]::after {\n  width: 145px;\n  height: 145px;\n  bottom: -80px;\n  left: -60px;\n}\n\n.student-attendance-ring-group[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 1;\n  display: grid;\n  min-width: 0;\n  justify-items: center;\n  gap: var(--student-space-2);\n}\n\n.student-attendance-page__ring[_ngcontent-%COMP%] {\n  position: relative;\n  display: grid;\n  width: 144px;\n  height: 144px;\n  place-items: center;\n  border-radius: var(--student-radius-pill);\n  background: conic-gradient(\n    var(--student-color-primary) var(--student-attendance-progress),\n    var(--student-attendance-ring-track) 0\n  );\n  box-shadow: inset 0 0 0 1px var(--student-color-border);\n  transform: translateY(calc(var(--student-space-3) * -1));\n}\n\n.student-attendance-page__ring[_ngcontent-%COMP%]::before {\n  position: absolute;\n  inset: var(--student-space-3);\n  border-radius: inherit;\n  background: var(--student-color-surface);\n  content: '';\n}\n\n.student-attendance-page__ring[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 1;\n  display: grid;\n  justify-items: center;\n  gap: var(--student-space-1);\n}\n\n.student-attendance-page__ring[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  font-size: clamp(var(--student-text-h1), 2.4vw, var(--student-space-8));\n  letter-spacing: -0.05em;\n}\n\n.student-attendance-page__ring[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  color: var(--student-color-text-secondary);\n  font-size: var(--student-text-caption);\n}\n\n.student-attendance-ring-status[_ngcontent-%COMP%] {\n  display: none;\n  color: var(--student-color-success);\n  font-size: var(--student-text-caption);\n  font-style: normal;\n  font-weight: 800;\n  line-height: 1.2;\n  text-align: center;\n}\n\n.student-attendance-hero--warning[_ngcontent-%COMP%]   .student-attendance-ring-status[_ngcontent-%COMP%] {\n  color: var(--student-color-warning);\n}\n\n.student-attendance-hero--critical[_ngcontent-%COMP%]   .student-attendance-ring-status[_ngcontent-%COMP%] {\n  color: var(--student-color-danger);\n}\n\n.student-attendance-hero--unknown[_ngcontent-%COMP%]   .student-attendance-ring-status[_ngcontent-%COMP%] {\n  color: var(--student-color-text-muted);\n}\n\n.student-attendance-hero__summary[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 1;\n  min-width: 0;\n}\n\n.student-attendance-hero__summary[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: clamp(var(--student-text-h3), 2vw, var(--student-text-h2));\n  font-weight: 600;\n  line-height: 1.35;\n}\n\n.student-attendance-hero__summary[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: var(--student-color-primary-pressed);\n  font-size: clamp(var(--student-text-h1), 2.4vw, var(--student-space-8));\n}\n\n.student-attendance-hero__summary[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]   b[_ngcontent-%COMP%] {\n  font-size: 1.2em;\n}\n\n.student-attendance-hero__mobile-copy[_ngcontent-%COMP%] {\n  display: none;\n}\n\n.student-attendance-progress[_ngcontent-%COMP%] {\n  position: relative;\n  height: var(--student-space-3);\n  margin-top: var(--student-space-4);\n  overflow: visible;\n  border-radius: var(--student-radius-pill);\n  background: var(--student-attendance-progress-track);\n}\n\n.student-attendance-progress[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: block;\n  width: var(--student-attendance-progress);\n  height: 100%;\n  border-radius: inherit;\n  background: linear-gradient(\n    90deg,\n    var(--student-color-primary-pressed),\n    var(--student-color-primary)\n  );\n}\n\n.student-attendance-progress[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  position: absolute;\n  top: calc(var(--student-space-2) * -0.5);\n  width: 3px;\n  height: var(--student-space-5);\n  border-radius: var(--student-radius-pill);\n  background: var(--student-color-text);\n}\n\n.student-attendance-hero__summary[_ngcontent-%COMP%]    > small[_ngcontent-%COMP%] {\n  display: block;\n  margin-top: var(--student-space-2);\n  color: var(--student-color-text-secondary);\n  text-align: right;\n}\n\n.student-attendance-hero[_ngcontent-%COMP%]   dl[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, minmax(0, 1fr));\n  margin: var(--student-space-4) 0 0;\n}\n\n.student-attendance-hero[_ngcontent-%COMP%]   dl[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  padding-inline: var(--student-space-4);\n  border-left: 1px solid var(--student-color-divider);\n}\n\n.student-attendance-hero[_ngcontent-%COMP%]   dl[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:first-child {\n  padding-left: 0;\n  border-left: 0;\n}\n\n.student-attendance-hero[_ngcontent-%COMP%]   dt[_ngcontent-%COMP%] {\n  color: var(--student-color-text-secondary);\n  font-size: var(--student-text-caption);\n}\n\n.student-attendance-hero[_ngcontent-%COMP%]   dd[_ngcontent-%COMP%] {\n  margin: var(--student-space-1) 0 0;\n  font-size: var(--student-text-h2);\n  font-weight: 800;\n}\n\n.student-attendance-hero[_ngcontent-%COMP%]   dd.is-present[_ngcontent-%COMP%] {\n  color: var(--student-color-success);\n}\n\n.student-attendance-hero[_ngcontent-%COMP%]   dd.is-absent[_ngcontent-%COMP%] {\n  color: var(--student-color-danger);\n}\n\n.student-attendance-hero__visual[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 1;\n  display: grid;\n  justify-items: center;\n  text-align: center;\n}\n\n.student-attendance-hero__visual[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: min(160px, 100%);\n  height: 122px;\n  object-fit: contain;\n  filter: drop-shadow(var(--student-shadow-card));\n}\n\n.student-attendance-hero__visual[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: var(--student-color-primary-pressed);\n  font-size: var(--student-text-label);\n}\n\n.student-attendance-status[_ngcontent-%COMP%] {\n  position: absolute;\n  z-index: 2;\n  bottom: var(--student-space-3);\n  left: calc(var(--student-space-6) + 42px);\n  display: flex;\n  align-items: center;\n  gap: var(--student-space-2);\n  color: var(--student-color-success);\n}\n\n.student-attendance-status[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: grid;\n  width: var(--student-space-6);\n  height: var(--student-space-6);\n  place-items: center;\n  border-radius: var(--student-radius-pill);\n  color: var(--student-color-text-inverse);\n  background: currentColor;\n}\n\n.student-attendance-status[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  color: var(--student-color-text-inverse);\n}\n\n.student-attendance-hero--warning[_ngcontent-%COMP%]   .student-attendance-status[_ngcontent-%COMP%] {\n  color: var(--student-color-warning);\n}\n\n.student-attendance-hero--critical[_ngcontent-%COMP%]   .student-attendance-status[_ngcontent-%COMP%] {\n  color: var(--student-color-danger);\n}\n\n.student-attendance-hero--unknown[_ngcontent-%COMP%]   .student-attendance-status[_ngcontent-%COMP%] {\n  color: var(--student-color-text-muted);\n}\n\n.student-attendance-tools[_ngcontent-%COMP%] {\n  min-width: 0;\n}\n\n.student-attendance-tools[_ngcontent-%COMP%]    > header[_ngcontent-%COMP%], \n.student-attendance-alerts[_ngcontent-%COMP%]    > header[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  display: grid;\n  gap: var(--student-space-1);\n}\n\n.student-attendance-tools[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], \n.student-attendance-alerts[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: var(--student-text-h2);\n}\n\n.student-attendance-tools[_ngcontent-%COMP%]   header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], \n.student-attendance-alerts[_ngcontent-%COMP%]   header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: var(--student-color-text-secondary);\n  font-size: var(--student-text-label);\n}\n\n.student-attendance-tools__grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, minmax(0, 1fr));\n  gap: var(--student-space-3);\n  margin-top: var(--student-space-2);\n}\n\n.student-attendance-tool[_ngcontent-%COMP%] {\n  --student-attendance-card-tone: var(--student-attendance-tool-overview);\n\n  position: relative;\n  display: grid;\n  min-width: 0;\n  min-height: 86px;\n  grid-template-columns: 68px minmax(0, 1fr) var(--student-space-8);\n  align-items: center;\n  gap: var(--student-space-3);\n  padding: var(--student-space-2) var(--student-space-3) var(--student-space-2)\n    var(--student-space-2);\n  overflow: hidden;\n  border: 1px solid\n    color-mix(in srgb, var(--student-attendance-card-tone) 70%, var(--student-color-border));\n  border-radius: var(--student-radius-card);\n  color: var(--student-color-text);\n  background: linear-gradient(\n    135deg,\n    var(--student-attendance-card-tone),\n    color-mix(in srgb, var(--student-attendance-card-tone) 76%, var(--student-color-surface-raised))\n  );\n  box-shadow: var(--student-shadow-card);\n  text-decoration: none;\n  text-align: left;\n  cursor: pointer;\n  transition:\n    transform var(--student-motion-standard) var(--student-ease-standard),\n    box-shadow var(--student-motion-standard) var(--student-ease-standard),\n    border-color var(--student-motion-standard) var(--student-ease-standard);\n}\n\n.student-attendance-tool[_ngcontent-%COMP%]::before {\n  position: absolute;\n  top: -58px;\n  left: -42px;\n  width: 118px;\n  height: 118px;\n  border-radius: var(--student-radius-pill);\n  background: var(--student-color-surface-raised);\n  content: '';\n  opacity: 0.34;\n  pointer-events: none;\n}\n\n.student-attendance-tool[_ngcontent-%COMP%]::after {\n  position: absolute;\n  right: -62px;\n  bottom: -74px;\n  width: 132px;\n  height: 132px;\n  border-radius: var(--student-radius-pill);\n  background: var(--student-color-surface-raised);\n  content: '';\n  opacity: 0.22;\n  pointer-events: none;\n}\n\n.student-attendance-tool[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n  border-color: var(--student-color-border-strong);\n  box-shadow: var(--student-attendance-shadow);\n}\n\n.student-attendance-tool--subject[_ngcontent-%COMP%] {\n  --student-attendance-card-tone: var(--student-attendance-tool-subject);\n}\n\n.student-attendance-tool--analysis[_ngcontent-%COMP%] {\n  --student-attendance-card-tone: var(--student-attendance-tool-analysis);\n}\n\n.student-attendance-tool--alerts[_ngcontent-%COMP%] {\n  --student-attendance-card-tone: var(--student-attendance-tool-alerts);\n}\n\n.student-attendance-tool--corrections[_ngcontent-%COMP%] {\n  --student-attendance-card-tone: var(--student-attendance-tool-corrections);\n}\n\n.student-attendance-tool--reports[_ngcontent-%COMP%] {\n  --student-attendance-card-tone: var(--student-attendance-tool-reports);\n}\n\n.student-attendance-tool[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 1;\n  width: 64px;\n  height: 64px;\n  object-fit: contain;\n  filter: drop-shadow(var(--student-shadow-card));\n}\n\n.student-attendance-tool[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 1;\n  display: grid;\n  min-width: 0;\n  gap: var(--student-space-1);\n}\n\n.student-attendance-tool[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  font-size: var(--student-text-label);\n}\n\n.student-attendance-tool[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  color: var(--student-color-text-secondary);\n  font-size: var(--student-text-caption);\n  line-height: 1.35;\n}\n\n.student-attendance-tool[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 1;\n  display: grid;\n  width: var(--student-space-8);\n  height: var(--student-space-8);\n  place-items: center;\n  border-radius: var(--student-radius-pill);\n  color: var(--student-color-primary-pressed);\n  background: var(--student-color-surface-raised);\n}\n\n.student-attendance-tool-notice[_ngcontent-%COMP%] {\n  min-height: var(--student-space-5);\n  margin-top: var(--student-space-2) !important;\n  color: var(--student-color-text-secondary);\n  font-size: var(--student-text-caption);\n}\n\n.student-attendance-alerts[_ngcontent-%COMP%] {\n  overflow: hidden;\n  border: 1px solid var(--student-color-border);\n  border-radius: var(--student-radius-card);\n  background: var(--student-color-surface-raised);\n  box-shadow: var(--student-shadow-card);\n}\n\n.student-attendance-alerts[_ngcontent-%COMP%]    > header[_ngcontent-%COMP%] {\n  display: grid;\n  min-height: 62px;\n  grid-template-columns: var(--student-space-8) minmax(0, 1fr) auto;\n  align-items: center;\n  gap: var(--student-space-3);\n  padding: var(--student-space-2) var(--student-space-4);\n  border-bottom: 1px solid var(--student-color-divider);\n}\n\n.student-attendance-alerts[_ngcontent-%COMP%]    > header[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  display: grid;\n  width: var(--student-space-8);\n  height: var(--student-space-8);\n  place-items: center;\n  border-radius: var(--student-radius-control);\n  color: var(--student-color-warning);\n  background: var(--student-color-warning-soft);\n}\n\n.student-attendance-alerts[_ngcontent-%COMP%]    > header[_ngcontent-%COMP%]   button[_ngcontent-%COMP%], \n.student-attendance-alerts[_ngcontent-%COMP%]    > header[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], \n.student-attendance-alerts[_ngcontent-%COMP%]   article[_ngcontent-%COMP%]    > button[_ngcontent-%COMP%], \n.student-attendance-alerts[_ngcontent-%COMP%]   article[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%] {\n  display: inline-flex;\n  min-height: 40px;\n  align-items: center;\n  justify-content: center;\n  gap: var(--student-space-1);\n  border: 1px solid var(--student-color-border);\n  border-radius: var(--student-radius-control);\n  color: var(--student-color-primary-pressed);\n  background: var(--student-color-surface-raised);\n  font-weight: 700;\n  text-decoration: none;\n  cursor: pointer;\n}\n\n.student-attendance-alerts[_ngcontent-%COMP%]    > header[_ngcontent-%COMP%]   button[_ngcontent-%COMP%], \n.student-attendance-alerts[_ngcontent-%COMP%]    > header[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  padding-inline: var(--student-space-4);\n}\n\n.student-attendance-alerts[_ngcontent-%COMP%]   article[_ngcontent-%COMP%] {\n  display: grid;\n  min-height: 54px;\n  grid-template-columns: minmax(220px, 1.2fr) minmax(160px, 0.8fr) 64px 86px 44px;\n  align-items: center;\n  gap: var(--student-space-4);\n  padding: var(--student-space-2) var(--student-space-4);\n  border-bottom: 1px solid var(--student-color-divider);\n}\n\n.student-attendance-alerts[_ngcontent-%COMP%]   article[_ngcontent-%COMP%]:last-child {\n  border-bottom: 0;\n}\n\n.student-attendance-alerts[_ngcontent-%COMP%]   article[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  display: grid;\n  min-width: 0;\n  gap: 2px;\n}\n\n.student-attendance-alerts__subject-icon[_ngcontent-%COMP%] {\n  display: none;\n}\n\n.student-attendance-alerts__subject-copy[_ngcontent-%COMP%] {\n  display: grid;\n  min-width: 0;\n  gap: 2px;\n}\n\n.student-attendance-alerts[_ngcontent-%COMP%]   article[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%], \n.student-attendance-alerts[_ngcontent-%COMP%]   article[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n\n.student-attendance-alerts[_ngcontent-%COMP%]   article[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  color: var(--student-color-text-secondary);\n  font-size: var(--student-text-caption);\n}\n\n.student-attendance-alerts__progress[_ngcontent-%COMP%] {\n  height: var(--student-space-2);\n  overflow: hidden;\n  border-radius: var(--student-radius-pill);\n  background: var(--student-attendance-progress-track);\n}\n\n.student-attendance-alerts__progress[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  display: block;\n  height: 100%;\n  border-radius: inherit;\n  background: var(--student-color-danger);\n}\n\n.student-attendance-alerts[_ngcontent-%COMP%]   article[_ngcontent-%COMP%]    > b[_ngcontent-%COMP%] {\n  color: var(--student-color-danger);\n  text-align: right;\n}\n\n.student-attendance-alerts[_ngcontent-%COMP%]   article[_ngcontent-%COMP%]    > em[_ngcontent-%COMP%] {\n  justify-self: center;\n  padding: var(--student-space-1) var(--student-space-2);\n  border-radius: var(--student-radius-pill);\n  color: var(--student-color-danger);\n  background: var(--student-color-danger-soft);\n  font-size: var(--student-text-caption);\n  font-style: normal;\n  font-weight: 700;\n}\n\n.student-attendance-alerts[_ngcontent-%COMP%]   article[_ngcontent-%COMP%]    > button[_ngcontent-%COMP%], \n.student-attendance-alerts[_ngcontent-%COMP%]   article[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%] {\n  width: 40px;\n  padding: 0;\n  border-color: transparent;\n}\n\n.student-attendance-alerts__empty[_ngcontent-%COMP%] {\n  display: flex;\n  min-height: 64px;\n  align-items: center;\n  gap: var(--student-space-3);\n  padding: var(--student-space-3) var(--student-space-4);\n}\n\n.student-attendance-alerts__empty[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  display: grid;\n  width: var(--student-space-8);\n  height: var(--student-space-8);\n  flex: 0 0 var(--student-space-8);\n  place-items: center;\n  border-radius: var(--student-radius-pill);\n  color: var(--student-color-text-inverse);\n  background: var(--student-color-success);\n}\n\n.student-attendance-alerts__empty[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: var(--student-color-text-secondary);\n}\n\n.student-attendance-alerts__empty[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: var(--student-color-text);\n}\n\n@keyframes _ngcontent-%COMP%_student-attendance-spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n\n@media (max-width: 1199px) {\n  .student-attendance-hero[_ngcontent-%COMP%] {\n    grid-template-columns: 170px minmax(300px, 1fr) 175px;\n    gap: var(--student-space-5);\n    padding-inline: var(--student-space-5);\n  }\n\n  .student-attendance-status[_ngcontent-%COMP%] {\n    left: 62px;\n  }\n\n  .student-attendance-tools__grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(3, minmax(0, 1fr));\n  }\n}\n\n@media (max-width: 767px) {\n  [_nghost-%COMP%] {\n    position: relative;\n    isolation: isolate;\n  }\n\n  [_nghost-%COMP%]::before {\n    position: absolute;\n    z-index: -1;\n    inset: calc(var(--student-space-4) * -1);\n    background:\n      radial-gradient(\n        circle at 108% 12%,\n        var(--student-color-primary-soft) 0 72px,\n        transparent 73px\n      ),\n      radial-gradient(\n        circle at 112% 88%,\n        var(--student-color-primary-soft) 0 112px,\n        transparent 113px\n      ),\n      linear-gradient(\n        155deg,\n        var(--student-color-primary-subtle),\n        var(--student-color-surface-soft)\n      );\n    content: '';\n    pointer-events: none;\n  }\n\n  .student-attendance-page[_ngcontent-%COMP%] {\n    gap: var(--student-space-4);\n    padding-bottom: var(--student-space-4);\n  }\n\n  .student-attendance-heading[_ngcontent-%COMP%] {\n    display: grid;\n    grid-template-columns: minmax(0, 1fr) auto;\n    align-items: start;\n    gap: var(--student-space-2);\n  }\n\n  .student-attendance-heading[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%] {\n    display: none;\n  }\n\n  .student-attendance-heading[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: clamp(26px, 7vw, var(--student-text-display));\n    line-height: 1.08;\n  }\n\n  .student-attendance-heading[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:first-child    > p[_ngcontent-%COMP%] {\n    margin-top: var(--student-space-1);\n    font-size: var(--student-text-body);\n    line-height: 1.35;\n  }\n\n  .student-attendance-heading[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:first-child    > p[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%]:first-child {\n    display: none;\n  }\n\n  .student-attendance-heading__mobile-copy[_ngcontent-%COMP%] {\n    display: inline;\n    white-space: normal;\n  }\n\n  .student-attendance-context[_ngcontent-%COMP%] {\n    display: flex;\n    flex-wrap: nowrap;\n    align-self: start;\n    justify-content: flex-end;\n  }\n\n  .student-attendance-context[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n    display: none;\n  }\n\n  .student-attendance-refresh[_ngcontent-%COMP%] {\n    min-width: 40px;\n    min-height: 40px;\n  }\n\n  .student-attendance-hero[_ngcontent-%COMP%] {\n    min-height: 190px;\n    grid-template-columns: minmax(104px, 128px) minmax(0, 1fr);\n    grid-template-rows: 1fr;\n    align-items: center;\n    gap: var(--student-space-3);\n    padding: var(--student-space-4);\n    border-radius: var(--student-radius-card);\n  }\n\n  .student-attendance-hero[_ngcontent-%COMP%]::before {\n    top: -38px;\n    right: -38px;\n    width: 96px;\n    height: 96px;\n  }\n\n  .student-attendance-hero[_ngcontent-%COMP%]::after {\n    bottom: -54px;\n    left: -48px;\n    width: 100px;\n    height: 100px;\n  }\n\n  .student-attendance-ring-group[_ngcontent-%COMP%] {\n    grid-column: 1;\n    gap: 6px;\n  }\n\n  .student-attendance-page__ring[_ngcontent-%COMP%] {\n    width: clamp(104px, 25vw, 128px);\n    height: clamp(104px, 25vw, 128px);\n    transform: none;\n  }\n\n  .student-attendance-page__ring[_ngcontent-%COMP%]::before {\n    inset: 10px;\n  }\n\n  .student-attendance-page__ring[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n    font-size: var(--student-text-h1);\n  }\n\n  .student-attendance-page__ring[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n    display: none;\n  }\n\n  .student-attendance-ring-status[_ngcontent-%COMP%] {\n    display: block;\n    max-width: 100%;\n    padding: 4px var(--student-space-2);\n    overflow: hidden;\n    border: 1px solid currentColor;\n    border-radius: var(--student-radius-pill);\n    background: var(--student-color-surface-raised);\n    text-overflow: ellipsis;\n    white-space: nowrap;\n  }\n\n  .student-attendance-hero__desktop-copy[_ngcontent-%COMP%] {\n    display: none;\n  }\n\n  .student-attendance-hero__summary[_ngcontent-%COMP%] {\n    grid-column: 2;\n    align-self: center;\n  }\n\n  .student-attendance-hero__mobile-copy[_ngcontent-%COMP%] {\n    display: block;\n    max-width: none;\n    padding-right: 0;\n    font-size: var(--student-text-label);\n    line-height: 1.2;\n  }\n\n  .student-attendance-hero__mobile-copy[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n    display: inline-block;\n    font-size: var(--student-text-h2);\n  }\n\n  .student-attendance-hero__mobile-copy[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    display: block;\n    margin-top: 2px;\n    color: var(--student-color-text-secondary);\n    font-weight: 600;\n  }\n\n  .student-attendance-progress[_ngcontent-%COMP%] {\n    width: 100%;\n    height: 6px;\n    margin-top: var(--student-space-2);\n  }\n\n  .student-attendance-progress[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n    top: -4px;\n    height: var(--student-space-4);\n  }\n\n  .student-attendance-hero[_ngcontent-%COMP%]   dl[_ngcontent-%COMP%] {\n    width: 100%;\n    grid-template-columns: 1fr 1fr;\n    gap: var(--student-space-2);\n    margin-top: var(--student-space-2);\n  }\n\n  .student-attendance-hero[_ngcontent-%COMP%]   dl[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n    display: grid;\n    min-width: 0;\n    padding: 6px var(--student-space-2);\n    border: 0;\n    border-radius: var(--student-radius-control);\n    background: var(--student-color-surface-raised);\n  }\n\n  .student-attendance-hero[_ngcontent-%COMP%]   dl[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:last-child {\n    display: none;\n  }\n\n  .student-attendance-hero[_ngcontent-%COMP%]   dt[_ngcontent-%COMP%] {\n    font-size: var(--student-text-overline);\n    white-space: nowrap;\n  }\n\n  .student-attendance-hero[_ngcontent-%COMP%]   dt[_ngcontent-%COMP%]::before {\n    content: none;\n  }\n\n  .student-attendance-hero[_ngcontent-%COMP%]   dd[_ngcontent-%COMP%] {\n    margin-top: 0;\n    font-size: var(--student-text-h3);\n  }\n\n  .student-attendance-hero__summary[_ngcontent-%COMP%]    > small[_ngcontent-%COMP%] {\n    width: 100%;\n    margin-top: var(--student-space-1);\n    font-size: var(--student-text-overline);\n    white-space: nowrap;\n  }\n\n  .student-attendance-hero__visual[_ngcontent-%COMP%] {\n    display: none;\n  }\n\n  .student-attendance-status[_ngcontent-%COMP%] {\n    display: none;\n  }\n\n  .student-attendance-tools[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], \n   .student-attendance-alerts[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: var(--student-text-h2);\n  }\n\n  .student-attendance-tools[_ngcontent-%COMP%]    > header[_ngcontent-%COMP%]    > p[_ngcontent-%COMP%] {\n    display: none;\n  }\n\n  .student-attendance-tools__grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n    gap: var(--student-space-3);\n  }\n\n  .student-attendance-tool[_ngcontent-%COMP%] {\n    min-height: 92px;\n    grid-template-columns: 52px minmax(0, 1fr) 18px;\n    gap: var(--student-space-2);\n    padding: 10px var(--student-space-3);\n    border-radius: var(--student-radius-card);\n    text-align: left;\n  }\n\n  .student-attendance-tool[_ngcontent-%COMP%]::before {\n    top: -72px;\n    left: -50px;\n    opacity: 0.2;\n  }\n\n  .student-attendance-tool[_ngcontent-%COMP%]::after {\n    right: -76px;\n    bottom: -88px;\n    opacity: 0.08;\n  }\n\n  .student-attendance-tool[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 52px;\n    height: 58px;\n  }\n\n  .student-attendance-tool[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n    font-size: var(--student-text-label);\n    line-height: 1.3;\n    overflow-wrap: break-word;\n  }\n\n  .student-attendance-tool[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n    display: none;\n  }\n\n  .student-attendance-tool[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n    width: 16px;\n    height: var(--student-space-6);\n    background: transparent;\n  }\n\n  .student-attendance-tool[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n    width: var(--student-space-4);\n    height: var(--student-space-4);\n  }\n\n  .student-attendance-tool-notice[_ngcontent-%COMP%] {\n    min-height: 0;\n  }\n\n  .student-attendance-tool-notice[_ngcontent-%COMP%]:empty {\n    display: none;\n  }\n\n  .student-attendance-alerts[_ngcontent-%COMP%]    > header[_ngcontent-%COMP%] {\n    min-height: 68px;\n    grid-template-columns: 38px minmax(0, 1fr);\n    padding: var(--student-space-3) var(--student-space-4);\n  }\n\n  .student-attendance-alerts[_ngcontent-%COMP%] {\n    border-radius: var(--student-radius-card);\n  }\n\n  .student-attendance-alerts[_ngcontent-%COMP%]    > header[_ngcontent-%COMP%]   button[_ngcontent-%COMP%], \n   .student-attendance-alerts[_ngcontent-%COMP%]    > header[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    display: none;\n  }\n\n  .student-attendance-alerts[_ngcontent-%COMP%]   article[_ngcontent-%COMP%] {\n    min-height: 66px;\n    grid-template-columns: minmax(0, 1fr) auto auto auto;\n    gap: var(--student-space-2);\n    padding: var(--student-space-3) var(--student-space-4);\n  }\n\n  .student-attendance-alerts[_ngcontent-%COMP%]   article[_ngcontent-%COMP%]:nth-of-type(n + 2) {\n    display: none;\n  }\n\n  .student-attendance-alerts__subject[_ngcontent-%COMP%] {\n    grid-template-columns: 40px minmax(0, 1fr);\n    align-items: center;\n    gap: var(--student-space-2);\n  }\n\n  .student-attendance-alerts__subject-icon[_ngcontent-%COMP%] {\n    display: grid;\n    width: 40px;\n    height: 40px;\n    place-items: center;\n    border-radius: 10px;\n    color: var(--student-color-primary-pressed);\n    background: var(--student-color-primary-soft);\n  }\n\n  .student-attendance-alerts__subject-copy[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n    display: none;\n  }\n\n  .student-attendance-alerts__progress[_ngcontent-%COMP%] {\n    display: none;\n  }\n\n  .student-attendance-alerts[_ngcontent-%COMP%]   article[_ngcontent-%COMP%]    > b[_ngcontent-%COMP%] {\n    color: var(--student-color-danger);\n    font-size: var(--student-text-body);\n  }\n\n  .student-attendance-alerts[_ngcontent-%COMP%]   article[_ngcontent-%COMP%]    > button[_ngcontent-%COMP%], \n   .student-attendance-alerts[_ngcontent-%COMP%]   article[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%] {\n    width: auto;\n    gap: var(--student-space-1);\n    padding-inline: var(--student-space-1);\n    white-space: nowrap;\n  }\n\n  .student-attendance-alerts[_ngcontent-%COMP%]   article[_ngcontent-%COMP%]    > button[_ngcontent-%COMP%]::before, \n   .student-attendance-alerts[_ngcontent-%COMP%]   article[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]::before {\n    content: 'View alerts';\n  }\n}\n\n@media (max-width: 460px) {\n  .student-attendance-hero[_ngcontent-%COMP%] {\n    grid-template-columns: minmax(104px, 112px) minmax(0, 1fr);\n  }\n\n  .student-attendance-tool[_ngcontent-%COMP%] {\n    min-height: 88px;\n    grid-template-columns: 44px minmax(0, 1fr) 16px;\n    padding-inline: var(--student-space-2);\n  }\n\n  .student-attendance-tool[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 44px;\n    height: 50px;\n  }\n}\n\n@media (max-width: 389px) {\n  .student-attendance-hero__mobile-copy[_ngcontent-%COMP%] {\n    padding-right: 0;\n  }\n\n  .student-attendance-alerts[_ngcontent-%COMP%]   article[_ngcontent-%COMP%] {\n    grid-template-columns: minmax(0, 1fr) auto auto;\n  }\n\n  .student-attendance-alerts[_ngcontent-%COMP%]   article[_ngcontent-%COMP%]    > em[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n\n@media (prefers-reduced-motion: reduce) {\n  .student-attendance-refresh[_ngcontent-%COMP%]   .is-spinning[_ngcontent-%COMP%], \n   .student-attendance-state__spinner[_ngcontent-%COMP%] {\n    animation: none;\n  }\n}"], changeDetection: 0 });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(StudentAttendanceComponent, [{
        type: Component,
        args: [{ selector: 'erp-student-attendance', imports: [
                    DatePipe,
                    LucideAlertTriangle,
                    LucideCheck,
                    LucideChevronRight,
                    LucideRefreshCw,
                    RouterLink,
                    StudentSubjectIconComponent,
                ], changeDetection: ChangeDetectionStrategy.OnPush, template: "<div class=\"student-attendance-page\" aria-labelledby=\"student-attendance-title\">\n  <header class=\"student-attendance-heading\">\n    <div>\n      <nav aria-label=\"Breadcrumb\"><span>Academics</span><b>/</b><strong>Attendance</strong></nav>\n      <h1 id=\"student-attendance-title\">Attendance</h1>\n      <p>\n        <span>Track, understand and improve your attendance.</span>\n        <span class=\"student-attendance-heading__mobile-copy\">\n          Track and improve your attendance\n        </span>\n      </p>\n    </div>\n    <div class=\"student-attendance-context\" aria-label=\"Attendance actions\">\n      <button\n        class=\"student-attendance-refresh\"\n        type=\"button\"\n        [disabled]=\"loading() || refreshing()\"\n        (click)=\"refresh()\"\n        aria-label=\"Refresh attendance\"\n      >\n        <svg lucideRefreshCw size=\"19\" [class.is-spinning]=\"refreshing()\" aria-hidden=\"true\"></svg>\n      </button>\n      @if (lastUpdated(); as updated) {\n        <small>Updated {{ updated | date: 'shortTime' }}</small>\n      }\n    </div>\n  </header>\n\n  @if (loading()) {\n    <section class=\"student-attendance-state\" role=\"status\" aria-live=\"polite\">\n      <span class=\"student-attendance-state__spinner\" aria-hidden=\"true\"></span>\n      <strong>Loading your attendance</strong>\n      <p>Preparing your current academic summary\u2026</p>\n    </section>\n  } @else if (error()) {\n    <section class=\"student-attendance-state student-attendance-state--error\" role=\"alert\">\n      <svg lucideAlertTriangle size=\"28\" aria-hidden=\"true\"></svg>\n      <strong>Attendance could not be loaded</strong>\n      <p>{{ error() }}</p>\n      <button type=\"button\" (click)=\"refresh()\">Try again</button>\n    </section>\n  } @else {\n    <section\n      class=\"student-attendance-hero\"\n      [class.student-attendance-hero--safe]=\"status() === 'safe'\"\n      [class.student-attendance-hero--warning]=\"status() === 'warning'\"\n      [class.student-attendance-hero--critical]=\"status() === 'critical'\"\n      [class.student-attendance-hero--unknown]=\"status() === 'unknown'\"\n      [style.--student-attendance-progress]=\"percentage() + '%'\"\n      aria-labelledby=\"attendance-overall-heading\"\n    >\n      <div class=\"student-attendance-ring-group\">\n        <div\n          class=\"student-attendance-page__ring\"\n          role=\"img\"\n          [attr.aria-label]=\"\n            formatPercentage(percentage()) + '% overall attendance, ' + statusLabel()\n          \"\n        >\n          <span>\n            <strong>{{ formatPercentage(percentage()) }}%</strong>\n            <small>Overall attendance</small>\n          </span>\n        </div>\n        <em class=\"student-attendance-ring-status\">{{ statusLabel() }}</em>\n      </div>\n\n      <div class=\"student-attendance-hero__summary\">\n        <h2 id=\"attendance-overall-heading\" class=\"student-attendance-hero__desktop-copy\">\n          <strong>{{ overall().presentLectures }}</strong> present from\n          <b>{{ overall().totalLectures }}</b> conducted lectures\n        </h2>\n        <h2 class=\"student-attendance-hero__mobile-copy\" aria-hidden=\"true\">\n          <strong>{{ overall().presentLectures }}</strong> of\n          <b>{{ overall().totalLectures }}</b>\n          <span>lectures attended</span>\n        </h2>\n        <div class=\"student-attendance-progress\" aria-hidden=\"true\">\n          <span></span><i [style.left]=\"requiredAttendance + '%'\"></i>\n        </div>\n        <small>Required {{ requiredAttendance }}%</small>\n        <dl>\n          <div>\n            <dt>Present</dt>\n            <dd class=\"is-present\">{{ overall().presentLectures }}</dd>\n          </div>\n          <div>\n            <dt>Absent</dt>\n            <dd class=\"is-absent\">{{ overall().absentLectures }}</dd>\n          </div>\n          <div>\n            <dt>Conducted</dt>\n            <dd>{{ overall().totalLectures }}</dd>\n          </div>\n        </dl>\n      </div>\n\n      <div class=\"student-attendance-hero__visual\">\n        <img\n          src=\"/assets/student/attendance/attendance-hero.webp\"\n          width=\"520\"\n          height=\"459\"\n          alt=\"\"\n          aria-hidden=\"true\"\n          decoding=\"async\"\n        />\n        <strong>{{ requirementMessage() }}</strong>\n      </div>\n\n      <div class=\"student-attendance-status\" aria-label=\"Attendance status\">\n        <span>\n          @if (status() === 'safe') {\n            <svg lucideCheck size=\"18\" aria-hidden=\"true\"></svg>\n          } @else {\n            <svg lucideAlertTriangle size=\"17\" aria-hidden=\"true\"></svg>\n          }\n        </span>\n        <strong>{{ statusLabel() }}</strong>\n      </div>\n    </section>\n\n    <section class=\"student-attendance-tools\" aria-labelledby=\"attendance-tools-heading\">\n      <header>\n        <h2 id=\"attendance-tools-heading\">Attendance tools</h2>\n        <p>Open a feature to view complete details</p>\n      </header>\n      <div class=\"student-attendance-tools__grid\">\n        @for (tool of attendanceTools; track tool.id) {\n          @if (tool.route; as route) {\n            <a\n              [routerLink]=\"route\"\n              [class]=\"'student-attendance-tool student-attendance-tool--' + tool.tone\"\n            >\n              <img\n                [src]=\"tool.image\"\n                width=\"320\"\n                height=\"320\"\n                alt=\"\"\n                aria-hidden=\"true\"\n                loading=\"lazy\"\n                decoding=\"async\"\n              />\n              <span>\n                <strong>{{ tool.title }}</strong>\n                <small>{{ tool.description }}</small>\n              </span>\n              <i aria-hidden=\"true\"><svg lucideChevronRight size=\"20\"></svg></i>\n            </a>\n          } @else {\n            <button\n              type=\"button\"\n              [class]=\"'student-attendance-tool student-attendance-tool--' + tool.tone\"\n              (click)=\"activateTool(tool)\"\n            >\n              <img\n                [src]=\"tool.image\"\n                width=\"320\"\n                height=\"320\"\n                alt=\"\"\n                aria-hidden=\"true\"\n                loading=\"lazy\"\n                decoding=\"async\"\n              />\n              <span>\n                <strong>{{ tool.title }}</strong>\n                <small>{{ tool.description }}</small>\n              </span>\n              <i aria-hidden=\"true\"><svg lucideChevronRight size=\"20\"></svg></i>\n            </button>\n          }\n        }\n      </div>\n      <p class=\"student-attendance-tool-notice\" aria-live=\"polite\">{{ toolNotice() }}</p>\n    </section>\n\n    <section class=\"student-attendance-alerts\" aria-labelledby=\"attendance-alerts-heading\">\n      <header>\n        <span><svg lucideAlertTriangle size=\"20\" aria-hidden=\"true\"></svg></span>\n        <div>\n          <h2 id=\"attendance-alerts-heading\">Needs attention</h2>\n          <p>Subjects below required attendance ({{ requiredAttendance }}%)</p>\n        </div>\n        <a routerLink=\"/student/attendance/alerts\">\n          View alerts <svg lucideChevronRight size=\"17\" aria-hidden=\"true\"></svg>\n        </a>\n      </header>\n\n      @for (subject of needsAttention(); track subject.subjectId) {\n        <article>\n          <div class=\"student-attendance-alerts__subject\">\n            <span class=\"student-attendance-alerts__subject-icon\" aria-hidden=\"true\">\n              <erp-student-subject-icon [subject]=\"subject.subjectName\" [size]=\"20\" />\n            </span>\n            <span class=\"student-attendance-alerts__subject-copy\">\n              <strong>{{ subject.subjectName }}</strong>\n              <small>{{ subject.subjectCode || 'Subject' }}</small>\n            </span>\n          </div>\n          <span class=\"student-attendance-alerts__progress\" aria-hidden=\"true\">\n            <i [style.width]=\"subject.attendancePercentage + '%'\"></i>\n          </span>\n          <b>{{ formatPercentage(subject.attendancePercentage) }}%</b>\n          <em>{{\n            subject.attendancePercentage >= requiredAttendance - 10 ? 'At risk' : 'Critical'\n          }}</em>\n          <a\n            [routerLink]=\"['/student/attendance/shortage', subject.subjectId]\"\n            [attr.aria-label]=\"'View attendance alert for ' + subject.subjectName\"\n          >\n            <svg lucideChevronRight size=\"18\" aria-hidden=\"true\"></svg>\n          </a>\n        </article>\n      } @empty {\n        <div class=\"student-attendance-alerts__empty\">\n          <span><svg lucideCheck size=\"18\" aria-hidden=\"true\"></svg></span>\n          <p>\n            <strong>No attendance shortage</strong> All conducted subjects meet the requirement.\n          </p>\n        </div>\n      }\n    </section>\n  }\n</div>\n", styles: ["/* ERP-LOCAL-STYLE: unique attendance dashboard, progress-ring, tool-grid and responsive alert geometry. */\n:host {\n  display: block;\n  min-width: 0;\n}\n\n.student-attendance-page {\n  display: grid;\n  min-width: 0;\n  gap: var(--student-space-4);\n  padding-bottom: var(--student-space-4);\n  color: var(--student-color-text);\n}\n\n.student-attendance-heading {\n  display: flex;\n  align-items: flex-end;\n  justify-content: space-between;\n  gap: var(--student-space-6);\n}\n\n.student-attendance-heading nav {\n  display: flex;\n  align-items: center;\n  gap: var(--student-space-2);\n  margin-bottom: var(--student-space-2);\n  color: var(--student-color-text-secondary);\n  font-size: var(--student-text-label);\n}\n\n.student-attendance-heading nav span {\n  color: var(--student-color-primary-pressed);\n}\n\n.student-attendance-heading h1,\n.student-attendance-heading p,\n.student-attendance-tools h2,\n.student-attendance-tools p,\n.student-attendance-alerts h2,\n.student-attendance-alerts p {\n  margin: 0;\n}\n\n.student-attendance-heading h1 {\n  font-size: clamp(var(--student-text-display), 2.4vw, var(--student-space-10));\n  letter-spacing: -0.045em;\n  line-height: 1;\n}\n\n.student-attendance-heading > div:first-child > p {\n  margin-top: var(--student-space-2);\n  color: var(--student-color-text-secondary);\n  font-size: var(--student-text-body);\n}\n\n.student-attendance-heading__mobile-copy {\n  display: none;\n}\n\n.student-attendance-context {\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n  gap: var(--student-space-2);\n  flex-wrap: wrap;\n}\n\n.student-attendance-context small {\n  color: var(--student-color-text-secondary);\n  font-size: var(--student-text-caption);\n}\n\n.student-attendance-refresh,\n.student-attendance-state button {\n  display: inline-grid;\n  min-width: 44px;\n  min-height: 44px;\n  place-items: center;\n  border: 1px solid var(--student-color-border);\n  border-radius: var(--student-radius-control);\n  color: var(--student-color-primary-pressed);\n  background: var(--student-color-surface-raised);\n  cursor: pointer;\n}\n\n.student-attendance-refresh:disabled {\n  color: var(--student-color-text-muted);\n  cursor: wait;\n}\n\n.student-attendance-refresh .is-spinning {\n  animation: student-attendance-spin 700ms linear infinite;\n}\n\n.student-attendance-state {\n  display: grid;\n  min-height: 320px;\n  place-content: center;\n  justify-items: center;\n  gap: var(--student-space-2);\n  padding: var(--student-space-8);\n  border: 1px solid var(--student-color-border);\n  border-radius: var(--student-radius-card);\n  background: var(--student-color-surface);\n  box-shadow: var(--student-shadow-card);\n  text-align: center;\n}\n\n.student-attendance-state p {\n  margin: 0;\n  color: var(--student-color-text-secondary);\n}\n\n.student-attendance-state--error > svg {\n  color: var(--student-color-warning);\n}\n\n.student-attendance-state button {\n  min-width: 110px;\n  margin-top: var(--student-space-2);\n  padding-inline: var(--student-space-4);\n  font-weight: 700;\n}\n\n.student-attendance-state__spinner {\n  width: var(--student-space-8);\n  height: var(--student-space-8);\n  border: var(--student-space-1) solid var(--student-attendance-ring-track);\n  border-top-color: var(--student-color-primary);\n  border-radius: var(--student-radius-pill);\n  animation: student-attendance-spin 700ms linear infinite;\n}\n\n.student-attendance-hero {\n  position: relative;\n  display: grid;\n  min-height: 190px;\n  grid-template-columns: minmax(180px, 0.72fr) minmax(340px, 2fr) minmax(200px, 0.9fr);\n  align-items: center;\n  gap: var(--student-space-6);\n  overflow: hidden;\n  padding: var(--student-space-4) var(--student-space-6);\n  border: 1px solid var(--student-color-border);\n  border-radius: var(--student-radius-card);\n  background: linear-gradient(\n    115deg,\n    var(--student-attendance-hero-start),\n    var(--student-attendance-hero-end)\n  );\n  box-shadow: var(--student-attendance-shadow);\n}\n\n.student-attendance-hero::before,\n.student-attendance-hero::after {\n  position: absolute;\n  border-radius: var(--student-radius-pill);\n  background: var(--student-color-primary-soft);\n  content: '';\n  opacity: 0.72;\n  pointer-events: none;\n}\n\n.student-attendance-hero::before {\n  width: 170px;\n  height: 170px;\n  right: -70px;\n  top: -65px;\n}\n\n.student-attendance-hero::after {\n  width: 145px;\n  height: 145px;\n  bottom: -80px;\n  left: -60px;\n}\n\n.student-attendance-ring-group {\n  position: relative;\n  z-index: 1;\n  display: grid;\n  min-width: 0;\n  justify-items: center;\n  gap: var(--student-space-2);\n}\n\n.student-attendance-page__ring {\n  position: relative;\n  display: grid;\n  width: 144px;\n  height: 144px;\n  place-items: center;\n  border-radius: var(--student-radius-pill);\n  background: conic-gradient(\n    var(--student-color-primary) var(--student-attendance-progress),\n    var(--student-attendance-ring-track) 0\n  );\n  box-shadow: inset 0 0 0 1px var(--student-color-border);\n  transform: translateY(calc(var(--student-space-3) * -1));\n}\n\n.student-attendance-page__ring::before {\n  position: absolute;\n  inset: var(--student-space-3);\n  border-radius: inherit;\n  background: var(--student-color-surface);\n  content: '';\n}\n\n.student-attendance-page__ring span {\n  position: relative;\n  z-index: 1;\n  display: grid;\n  justify-items: center;\n  gap: var(--student-space-1);\n}\n\n.student-attendance-page__ring strong {\n  font-size: clamp(var(--student-text-h1), 2.4vw, var(--student-space-8));\n  letter-spacing: -0.05em;\n}\n\n.student-attendance-page__ring small {\n  color: var(--student-color-text-secondary);\n  font-size: var(--student-text-caption);\n}\n\n.student-attendance-ring-status {\n  display: none;\n  color: var(--student-color-success);\n  font-size: var(--student-text-caption);\n  font-style: normal;\n  font-weight: 800;\n  line-height: 1.2;\n  text-align: center;\n}\n\n.student-attendance-hero--warning .student-attendance-ring-status {\n  color: var(--student-color-warning);\n}\n\n.student-attendance-hero--critical .student-attendance-ring-status {\n  color: var(--student-color-danger);\n}\n\n.student-attendance-hero--unknown .student-attendance-ring-status {\n  color: var(--student-color-text-muted);\n}\n\n.student-attendance-hero__summary {\n  position: relative;\n  z-index: 1;\n  min-width: 0;\n}\n\n.student-attendance-hero__summary h2 {\n  margin: 0;\n  font-size: clamp(var(--student-text-h3), 2vw, var(--student-text-h2));\n  font-weight: 600;\n  line-height: 1.35;\n}\n\n.student-attendance-hero__summary h2 strong {\n  color: var(--student-color-primary-pressed);\n  font-size: clamp(var(--student-text-h1), 2.4vw, var(--student-space-8));\n}\n\n.student-attendance-hero__summary h2 b {\n  font-size: 1.2em;\n}\n\n.student-attendance-hero__mobile-copy {\n  display: none;\n}\n\n.student-attendance-progress {\n  position: relative;\n  height: var(--student-space-3);\n  margin-top: var(--student-space-4);\n  overflow: visible;\n  border-radius: var(--student-radius-pill);\n  background: var(--student-attendance-progress-track);\n}\n\n.student-attendance-progress span {\n  display: block;\n  width: var(--student-attendance-progress);\n  height: 100%;\n  border-radius: inherit;\n  background: linear-gradient(\n    90deg,\n    var(--student-color-primary-pressed),\n    var(--student-color-primary)\n  );\n}\n\n.student-attendance-progress i {\n  position: absolute;\n  top: calc(var(--student-space-2) * -0.5);\n  width: 3px;\n  height: var(--student-space-5);\n  border-radius: var(--student-radius-pill);\n  background: var(--student-color-text);\n}\n\n.student-attendance-hero__summary > small {\n  display: block;\n  margin-top: var(--student-space-2);\n  color: var(--student-color-text-secondary);\n  text-align: right;\n}\n\n.student-attendance-hero dl {\n  display: grid;\n  grid-template-columns: repeat(3, minmax(0, 1fr));\n  margin: var(--student-space-4) 0 0;\n}\n\n.student-attendance-hero dl div {\n  padding-inline: var(--student-space-4);\n  border-left: 1px solid var(--student-color-divider);\n}\n\n.student-attendance-hero dl div:first-child {\n  padding-left: 0;\n  border-left: 0;\n}\n\n.student-attendance-hero dt {\n  color: var(--student-color-text-secondary);\n  font-size: var(--student-text-caption);\n}\n\n.student-attendance-hero dd {\n  margin: var(--student-space-1) 0 0;\n  font-size: var(--student-text-h2);\n  font-weight: 800;\n}\n\n.student-attendance-hero dd.is-present {\n  color: var(--student-color-success);\n}\n\n.student-attendance-hero dd.is-absent {\n  color: var(--student-color-danger);\n}\n\n.student-attendance-hero__visual {\n  position: relative;\n  z-index: 1;\n  display: grid;\n  justify-items: center;\n  text-align: center;\n}\n\n.student-attendance-hero__visual img {\n  width: min(160px, 100%);\n  height: 122px;\n  object-fit: contain;\n  filter: drop-shadow(var(--student-shadow-card));\n}\n\n.student-attendance-hero__visual strong {\n  color: var(--student-color-primary-pressed);\n  font-size: var(--student-text-label);\n}\n\n.student-attendance-status {\n  position: absolute;\n  z-index: 2;\n  bottom: var(--student-space-3);\n  left: calc(var(--student-space-6) + 42px);\n  display: flex;\n  align-items: center;\n  gap: var(--student-space-2);\n  color: var(--student-color-success);\n}\n\n.student-attendance-status span {\n  display: grid;\n  width: var(--student-space-6);\n  height: var(--student-space-6);\n  place-items: center;\n  border-radius: var(--student-radius-pill);\n  color: var(--student-color-text-inverse);\n  background: currentColor;\n}\n\n.student-attendance-status svg {\n  color: var(--student-color-text-inverse);\n}\n\n.student-attendance-hero--warning .student-attendance-status {\n  color: var(--student-color-warning);\n}\n\n.student-attendance-hero--critical .student-attendance-status {\n  color: var(--student-color-danger);\n}\n\n.student-attendance-hero--unknown .student-attendance-status {\n  color: var(--student-color-text-muted);\n}\n\n.student-attendance-tools {\n  min-width: 0;\n}\n\n.student-attendance-tools > header,\n.student-attendance-alerts > header > div {\n  display: grid;\n  gap: var(--student-space-1);\n}\n\n.student-attendance-tools h2,\n.student-attendance-alerts h2 {\n  font-size: var(--student-text-h2);\n}\n\n.student-attendance-tools header p,\n.student-attendance-alerts header p {\n  color: var(--student-color-text-secondary);\n  font-size: var(--student-text-label);\n}\n\n.student-attendance-tools__grid {\n  display: grid;\n  grid-template-columns: repeat(3, minmax(0, 1fr));\n  gap: var(--student-space-3);\n  margin-top: var(--student-space-2);\n}\n\n.student-attendance-tool {\n  --student-attendance-card-tone: var(--student-attendance-tool-overview);\n\n  position: relative;\n  display: grid;\n  min-width: 0;\n  min-height: 86px;\n  grid-template-columns: 68px minmax(0, 1fr) var(--student-space-8);\n  align-items: center;\n  gap: var(--student-space-3);\n  padding: var(--student-space-2) var(--student-space-3) var(--student-space-2)\n    var(--student-space-2);\n  overflow: hidden;\n  border: 1px solid\n    color-mix(in srgb, var(--student-attendance-card-tone) 70%, var(--student-color-border));\n  border-radius: var(--student-radius-card);\n  color: var(--student-color-text);\n  background: linear-gradient(\n    135deg,\n    var(--student-attendance-card-tone),\n    color-mix(in srgb, var(--student-attendance-card-tone) 76%, var(--student-color-surface-raised))\n  );\n  box-shadow: var(--student-shadow-card);\n  text-decoration: none;\n  text-align: left;\n  cursor: pointer;\n  transition:\n    transform var(--student-motion-standard) var(--student-ease-standard),\n    box-shadow var(--student-motion-standard) var(--student-ease-standard),\n    border-color var(--student-motion-standard) var(--student-ease-standard);\n}\n\n.student-attendance-tool::before {\n  position: absolute;\n  top: -58px;\n  left: -42px;\n  width: 118px;\n  height: 118px;\n  border-radius: var(--student-radius-pill);\n  background: var(--student-color-surface-raised);\n  content: '';\n  opacity: 0.34;\n  pointer-events: none;\n}\n\n.student-attendance-tool::after {\n  position: absolute;\n  right: -62px;\n  bottom: -74px;\n  width: 132px;\n  height: 132px;\n  border-radius: var(--student-radius-pill);\n  background: var(--student-color-surface-raised);\n  content: '';\n  opacity: 0.22;\n  pointer-events: none;\n}\n\n.student-attendance-tool:hover {\n  transform: translateY(-2px);\n  border-color: var(--student-color-border-strong);\n  box-shadow: var(--student-attendance-shadow);\n}\n\n.student-attendance-tool--subject {\n  --student-attendance-card-tone: var(--student-attendance-tool-subject);\n}\n\n.student-attendance-tool--analysis {\n  --student-attendance-card-tone: var(--student-attendance-tool-analysis);\n}\n\n.student-attendance-tool--alerts {\n  --student-attendance-card-tone: var(--student-attendance-tool-alerts);\n}\n\n.student-attendance-tool--corrections {\n  --student-attendance-card-tone: var(--student-attendance-tool-corrections);\n}\n\n.student-attendance-tool--reports {\n  --student-attendance-card-tone: var(--student-attendance-tool-reports);\n}\n\n.student-attendance-tool img {\n  position: relative;\n  z-index: 1;\n  width: 64px;\n  height: 64px;\n  object-fit: contain;\n  filter: drop-shadow(var(--student-shadow-card));\n}\n\n.student-attendance-tool > span {\n  position: relative;\n  z-index: 1;\n  display: grid;\n  min-width: 0;\n  gap: var(--student-space-1);\n}\n\n.student-attendance-tool strong {\n  font-size: var(--student-text-label);\n}\n\n.student-attendance-tool small {\n  color: var(--student-color-text-secondary);\n  font-size: var(--student-text-caption);\n  line-height: 1.35;\n}\n\n.student-attendance-tool i {\n  position: relative;\n  z-index: 1;\n  display: grid;\n  width: var(--student-space-8);\n  height: var(--student-space-8);\n  place-items: center;\n  border-radius: var(--student-radius-pill);\n  color: var(--student-color-primary-pressed);\n  background: var(--student-color-surface-raised);\n}\n\n.student-attendance-tool-notice {\n  min-height: var(--student-space-5);\n  margin-top: var(--student-space-2) !important;\n  color: var(--student-color-text-secondary);\n  font-size: var(--student-text-caption);\n}\n\n.student-attendance-alerts {\n  overflow: hidden;\n  border: 1px solid var(--student-color-border);\n  border-radius: var(--student-radius-card);\n  background: var(--student-color-surface-raised);\n  box-shadow: var(--student-shadow-card);\n}\n\n.student-attendance-alerts > header {\n  display: grid;\n  min-height: 62px;\n  grid-template-columns: var(--student-space-8) minmax(0, 1fr) auto;\n  align-items: center;\n  gap: var(--student-space-3);\n  padding: var(--student-space-2) var(--student-space-4);\n  border-bottom: 1px solid var(--student-color-divider);\n}\n\n.student-attendance-alerts > header > span {\n  display: grid;\n  width: var(--student-space-8);\n  height: var(--student-space-8);\n  place-items: center;\n  border-radius: var(--student-radius-control);\n  color: var(--student-color-warning);\n  background: var(--student-color-warning-soft);\n}\n\n.student-attendance-alerts > header button,\n.student-attendance-alerts > header a,\n.student-attendance-alerts article > button,\n.student-attendance-alerts article > a {\n  display: inline-flex;\n  min-height: 40px;\n  align-items: center;\n  justify-content: center;\n  gap: var(--student-space-1);\n  border: 1px solid var(--student-color-border);\n  border-radius: var(--student-radius-control);\n  color: var(--student-color-primary-pressed);\n  background: var(--student-color-surface-raised);\n  font-weight: 700;\n  text-decoration: none;\n  cursor: pointer;\n}\n\n.student-attendance-alerts > header button,\n.student-attendance-alerts > header a {\n  padding-inline: var(--student-space-4);\n}\n\n.student-attendance-alerts article {\n  display: grid;\n  min-height: 54px;\n  grid-template-columns: minmax(220px, 1.2fr) minmax(160px, 0.8fr) 64px 86px 44px;\n  align-items: center;\n  gap: var(--student-space-4);\n  padding: var(--student-space-2) var(--student-space-4);\n  border-bottom: 1px solid var(--student-color-divider);\n}\n\n.student-attendance-alerts article:last-child {\n  border-bottom: 0;\n}\n\n.student-attendance-alerts article > div {\n  display: grid;\n  min-width: 0;\n  gap: 2px;\n}\n\n.student-attendance-alerts__subject-icon {\n  display: none;\n}\n\n.student-attendance-alerts__subject-copy {\n  display: grid;\n  min-width: 0;\n  gap: 2px;\n}\n\n.student-attendance-alerts article > div strong,\n.student-attendance-alerts article > div small {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n\n.student-attendance-alerts article small {\n  color: var(--student-color-text-secondary);\n  font-size: var(--student-text-caption);\n}\n\n.student-attendance-alerts__progress {\n  height: var(--student-space-2);\n  overflow: hidden;\n  border-radius: var(--student-radius-pill);\n  background: var(--student-attendance-progress-track);\n}\n\n.student-attendance-alerts__progress i {\n  display: block;\n  height: 100%;\n  border-radius: inherit;\n  background: var(--student-color-danger);\n}\n\n.student-attendance-alerts article > b {\n  color: var(--student-color-danger);\n  text-align: right;\n}\n\n.student-attendance-alerts article > em {\n  justify-self: center;\n  padding: var(--student-space-1) var(--student-space-2);\n  border-radius: var(--student-radius-pill);\n  color: var(--student-color-danger);\n  background: var(--student-color-danger-soft);\n  font-size: var(--student-text-caption);\n  font-style: normal;\n  font-weight: 700;\n}\n\n.student-attendance-alerts article > button,\n.student-attendance-alerts article > a {\n  width: 40px;\n  padding: 0;\n  border-color: transparent;\n}\n\n.student-attendance-alerts__empty {\n  display: flex;\n  min-height: 64px;\n  align-items: center;\n  gap: var(--student-space-3);\n  padding: var(--student-space-3) var(--student-space-4);\n}\n\n.student-attendance-alerts__empty > span {\n  display: grid;\n  width: var(--student-space-8);\n  height: var(--student-space-8);\n  flex: 0 0 var(--student-space-8);\n  place-items: center;\n  border-radius: var(--student-radius-pill);\n  color: var(--student-color-text-inverse);\n  background: var(--student-color-success);\n}\n\n.student-attendance-alerts__empty p {\n  color: var(--student-color-text-secondary);\n}\n\n.student-attendance-alerts__empty strong {\n  color: var(--student-color-text);\n}\n\n@keyframes student-attendance-spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n\n@media (max-width: 1199px) {\n  .student-attendance-hero {\n    grid-template-columns: 170px minmax(300px, 1fr) 175px;\n    gap: var(--student-space-5);\n    padding-inline: var(--student-space-5);\n  }\n\n  .student-attendance-status {\n    left: 62px;\n  }\n\n  .student-attendance-tools__grid {\n    grid-template-columns: repeat(3, minmax(0, 1fr));\n  }\n}\n\n@media (max-width: 767px) {\n  :host {\n    position: relative;\n    isolation: isolate;\n  }\n\n  :host::before {\n    position: absolute;\n    z-index: -1;\n    inset: calc(var(--student-space-4) * -1);\n    background:\n      radial-gradient(\n        circle at 108% 12%,\n        var(--student-color-primary-soft) 0 72px,\n        transparent 73px\n      ),\n      radial-gradient(\n        circle at 112% 88%,\n        var(--student-color-primary-soft) 0 112px,\n        transparent 113px\n      ),\n      linear-gradient(\n        155deg,\n        var(--student-color-primary-subtle),\n        var(--student-color-surface-soft)\n      );\n    content: '';\n    pointer-events: none;\n  }\n\n  .student-attendance-page {\n    gap: var(--student-space-4);\n    padding-bottom: var(--student-space-4);\n  }\n\n  .student-attendance-heading {\n    display: grid;\n    grid-template-columns: minmax(0, 1fr) auto;\n    align-items: start;\n    gap: var(--student-space-2);\n  }\n\n  .student-attendance-heading nav {\n    display: none;\n  }\n\n  .student-attendance-heading h1 {\n    font-size: clamp(26px, 7vw, var(--student-text-display));\n    line-height: 1.08;\n  }\n\n  .student-attendance-heading > div:first-child > p {\n    margin-top: var(--student-space-1);\n    font-size: var(--student-text-body);\n    line-height: 1.35;\n  }\n\n  .student-attendance-heading > div:first-child > p > span:first-child {\n    display: none;\n  }\n\n  .student-attendance-heading__mobile-copy {\n    display: inline;\n    white-space: normal;\n  }\n\n  .student-attendance-context {\n    display: flex;\n    flex-wrap: nowrap;\n    align-self: start;\n    justify-content: flex-end;\n  }\n\n  .student-attendance-context small {\n    display: none;\n  }\n\n  .student-attendance-refresh {\n    min-width: 40px;\n    min-height: 40px;\n  }\n\n  .student-attendance-hero {\n    min-height: 190px;\n    grid-template-columns: minmax(104px, 128px) minmax(0, 1fr);\n    grid-template-rows: 1fr;\n    align-items: center;\n    gap: var(--student-space-3);\n    padding: var(--student-space-4);\n    border-radius: var(--student-radius-card);\n  }\n\n  .student-attendance-hero::before {\n    top: -38px;\n    right: -38px;\n    width: 96px;\n    height: 96px;\n  }\n\n  .student-attendance-hero::after {\n    bottom: -54px;\n    left: -48px;\n    width: 100px;\n    height: 100px;\n  }\n\n  .student-attendance-ring-group {\n    grid-column: 1;\n    gap: 6px;\n  }\n\n  .student-attendance-page__ring {\n    width: clamp(104px, 25vw, 128px);\n    height: clamp(104px, 25vw, 128px);\n    transform: none;\n  }\n\n  .student-attendance-page__ring::before {\n    inset: 10px;\n  }\n\n  .student-attendance-page__ring strong {\n    font-size: var(--student-text-h1);\n  }\n\n  .student-attendance-page__ring small {\n    display: none;\n  }\n\n  .student-attendance-ring-status {\n    display: block;\n    max-width: 100%;\n    padding: 4px var(--student-space-2);\n    overflow: hidden;\n    border: 1px solid currentColor;\n    border-radius: var(--student-radius-pill);\n    background: var(--student-color-surface-raised);\n    text-overflow: ellipsis;\n    white-space: nowrap;\n  }\n\n  .student-attendance-hero__desktop-copy {\n    display: none;\n  }\n\n  .student-attendance-hero__summary {\n    grid-column: 2;\n    align-self: center;\n  }\n\n  .student-attendance-hero__mobile-copy {\n    display: block;\n    max-width: none;\n    padding-right: 0;\n    font-size: var(--student-text-label);\n    line-height: 1.2;\n  }\n\n  .student-attendance-hero__mobile-copy strong {\n    display: inline-block;\n    font-size: var(--student-text-h2);\n  }\n\n  .student-attendance-hero__mobile-copy span {\n    display: block;\n    margin-top: 2px;\n    color: var(--student-color-text-secondary);\n    font-weight: 600;\n  }\n\n  .student-attendance-progress {\n    width: 100%;\n    height: 6px;\n    margin-top: var(--student-space-2);\n  }\n\n  .student-attendance-progress i {\n    top: -4px;\n    height: var(--student-space-4);\n  }\n\n  .student-attendance-hero dl {\n    width: 100%;\n    grid-template-columns: 1fr 1fr;\n    gap: var(--student-space-2);\n    margin-top: var(--student-space-2);\n  }\n\n  .student-attendance-hero dl div {\n    display: grid;\n    min-width: 0;\n    padding: 6px var(--student-space-2);\n    border: 0;\n    border-radius: var(--student-radius-control);\n    background: var(--student-color-surface-raised);\n  }\n\n  .student-attendance-hero dl div:last-child {\n    display: none;\n  }\n\n  .student-attendance-hero dt {\n    font-size: var(--student-text-overline);\n    white-space: nowrap;\n  }\n\n  .student-attendance-hero dt::before {\n    content: none;\n  }\n\n  .student-attendance-hero dd {\n    margin-top: 0;\n    font-size: var(--student-text-h3);\n  }\n\n  .student-attendance-hero__summary > small {\n    width: 100%;\n    margin-top: var(--student-space-1);\n    font-size: var(--student-text-overline);\n    white-space: nowrap;\n  }\n\n  .student-attendance-hero__visual {\n    display: none;\n  }\n\n  .student-attendance-status {\n    display: none;\n  }\n\n  .student-attendance-tools h2,\n  .student-attendance-alerts h2 {\n    font-size: var(--student-text-h2);\n  }\n\n  .student-attendance-tools > header > p {\n    display: none;\n  }\n\n  .student-attendance-tools__grid {\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n    gap: var(--student-space-3);\n  }\n\n  .student-attendance-tool {\n    min-height: 92px;\n    grid-template-columns: 52px minmax(0, 1fr) 18px;\n    gap: var(--student-space-2);\n    padding: 10px var(--student-space-3);\n    border-radius: var(--student-radius-card);\n    text-align: left;\n  }\n\n  .student-attendance-tool::before {\n    top: -72px;\n    left: -50px;\n    opacity: 0.2;\n  }\n\n  .student-attendance-tool::after {\n    right: -76px;\n    bottom: -88px;\n    opacity: 0.08;\n  }\n\n  .student-attendance-tool img {\n    width: 52px;\n    height: 58px;\n  }\n\n  .student-attendance-tool strong {\n    font-size: var(--student-text-label);\n    line-height: 1.3;\n    overflow-wrap: break-word;\n  }\n\n  .student-attendance-tool small {\n    display: none;\n  }\n\n  .student-attendance-tool i {\n    width: 16px;\n    height: var(--student-space-6);\n    background: transparent;\n  }\n\n  .student-attendance-tool i svg {\n    width: var(--student-space-4);\n    height: var(--student-space-4);\n  }\n\n  .student-attendance-tool-notice {\n    min-height: 0;\n  }\n\n  .student-attendance-tool-notice:empty {\n    display: none;\n  }\n\n  .student-attendance-alerts > header {\n    min-height: 68px;\n    grid-template-columns: 38px minmax(0, 1fr);\n    padding: var(--student-space-3) var(--student-space-4);\n  }\n\n  .student-attendance-alerts {\n    border-radius: var(--student-radius-card);\n  }\n\n  .student-attendance-alerts > header button,\n  .student-attendance-alerts > header a {\n    display: none;\n  }\n\n  .student-attendance-alerts article {\n    min-height: 66px;\n    grid-template-columns: minmax(0, 1fr) auto auto auto;\n    gap: var(--student-space-2);\n    padding: var(--student-space-3) var(--student-space-4);\n  }\n\n  .student-attendance-alerts article:nth-of-type(n + 2) {\n    display: none;\n  }\n\n  .student-attendance-alerts__subject {\n    grid-template-columns: 40px minmax(0, 1fr);\n    align-items: center;\n    gap: var(--student-space-2);\n  }\n\n  .student-attendance-alerts__subject-icon {\n    display: grid;\n    width: 40px;\n    height: 40px;\n    place-items: center;\n    border-radius: 10px;\n    color: var(--student-color-primary-pressed);\n    background: var(--student-color-primary-soft);\n  }\n\n  .student-attendance-alerts__subject-copy small {\n    display: none;\n  }\n\n  .student-attendance-alerts__progress {\n    display: none;\n  }\n\n  .student-attendance-alerts article > b {\n    color: var(--student-color-danger);\n    font-size: var(--student-text-body);\n  }\n\n  .student-attendance-alerts article > button,\n  .student-attendance-alerts article > a {\n    width: auto;\n    gap: var(--student-space-1);\n    padding-inline: var(--student-space-1);\n    white-space: nowrap;\n  }\n\n  .student-attendance-alerts article > button::before,\n  .student-attendance-alerts article > a::before {\n    content: 'View alerts';\n  }\n}\n\n@media (max-width: 460px) {\n  .student-attendance-hero {\n    grid-template-columns: minmax(104px, 112px) minmax(0, 1fr);\n  }\n\n  .student-attendance-tool {\n    min-height: 88px;\n    grid-template-columns: 44px minmax(0, 1fr) 16px;\n    padding-inline: var(--student-space-2);\n  }\n\n  .student-attendance-tool img {\n    width: 44px;\n    height: 50px;\n  }\n}\n\n@media (max-width: 389px) {\n  .student-attendance-hero__mobile-copy {\n    padding-right: 0;\n  }\n\n  .student-attendance-alerts article {\n    grid-template-columns: minmax(0, 1fr) auto auto;\n  }\n\n  .student-attendance-alerts article > em {\n    display: none;\n  }\n}\n\n@media (prefers-reduced-motion: reduce) {\n  .student-attendance-refresh .is-spinning,\n  .student-attendance-state__spinner {\n    animation: none;\n  }\n}\n"] }]
    }], () => [], null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(StudentAttendanceComponent, { className: "StudentAttendanceComponent", filePath: "frontend/src/app/features/student/academics/student-attendance.component.ts", lineNumber: 41 }); })();
