import { DatePipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LucideArrowLeft, LucideBookOpen, LucideCheck, LucideCircleAlert, LucideGraduationCap, LucideRefreshCw, } from '@lucide/angular';
import { ApiService } from '../../../core/api.service';
import { StudentSessionService } from '../shared/services/student-session.service';
import * as i0 from "@angular/core";
const _forTrack0 = ($index, $item) => $item._id;
function StudentSemesterRegistrationComponent_Conditional_13_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 5);
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(1, "svg", 8);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", ctx_r0.message(), " ");
} }
function StudentSemesterRegistrationComponent_Conditional_14_Template(rf, ctx) { if (rf & 1) {
    const _r2 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 6);
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(1, "svg", 9);
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(2, "span");
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "button", 10);
    i0.ɵɵlistener("click", function StudentSemesterRegistrationComponent_Conditional_14_Template_button_click_4_listener() { i0.ɵɵrestoreView(_r2); const ctx_r0 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r0.load()); });
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(5, "svg", 11);
    i0.ɵɵtext(6, "Try again");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(ctx_r0.error());
} }
function StudentSemesterRegistrationComponent_Conditional_15_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "section", 7);
    i0.ɵɵelement(1, "span", 12);
    i0.ɵɵelementStart(2, "h2");
    i0.ɵɵtext(3, "Loading semester details");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "p");
    i0.ɵɵtext(5, "We are checking your current academic allocation and subjects.");
    i0.ɵɵelementEnd()();
} }
function StudentSemesterRegistrationComponent_Conditional_16_Conditional_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(0, "svg", 8);
} }
function StudentSemesterRegistrationComponent_Conditional_16_Conditional_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(0, "svg", 14);
} }
function StudentSemesterRegistrationComponent_Conditional_16_Conditional_10_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtext(0);
    i0.ɵɵpipe(1, "date");
} if (rf & 2) {
    const data_r4 = i0.ɵɵnextContext();
    i0.ɵɵtextInterpolate1(" Registered on ", i0.ɵɵpipeBind2(1, 1, data_r4.registration.registeredAt, "medium"), " ");
} }
function StudentSemesterRegistrationComponent_Conditional_16_Conditional_11_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtext(0);
} if (rf & 2) {
    const data_r4 = i0.ɵɵnextContext();
    i0.ɵɵtextInterpolate2(" Semester ", data_r4.student.semester, " \u00B7 ", data_r4.student.academicSession, " ");
} }
function StudentSemesterRegistrationComponent_Conditional_16_For_105_Template(rf, ctx) { if (rf & 1) {
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
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const subject_r5 = ctx.$implicit;
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(subject_r5.name);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(subject_r5.code || "No code");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(subject_r5.subjectType || "\u2014");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(subject_r5.requirement === "elective" ? "Elective" : "Required");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(subject_r5.credits);
} }
function StudentSemesterRegistrationComponent_Conditional_16_ForEmpty_106_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "tr")(1, "td", 25);
    i0.ɵɵtext(2, "No subjects are assigned for this semester.");
    i0.ɵɵelementEnd()();
} }
function StudentSemesterRegistrationComponent_Conditional_16_Conditional_112_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p");
    i0.ɵɵtext(1, " Your current semester is registered. The saved subject snapshot cannot be submitted again. ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(2, "dl")(3, "div")(4, "dt");
    i0.ɵɵtext(5, "Semester");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "dd");
    i0.ɵɵtext(7);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(8, "div")(9, "dt");
    i0.ɵɵtext(10, "Subjects");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(11, "dd");
    i0.ɵɵtext(12);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(13, "div")(14, "dt");
    i0.ɵɵtext(15, "Status");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(16, "dd");
    i0.ɵɵtext(17, "Registered");
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const data_r4 = i0.ɵɵnextContext();
    i0.ɵɵadvance(7);
    i0.ɵɵtextInterpolate(data_r4.registration.semester);
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(data_r4.registration.subjectCount);
} }
function StudentSemesterRegistrationComponent_Conditional_16_Conditional_113_For_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "li");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const blocker_r6 = ctx.$implicit;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(blocker_r6);
} }
function StudentSemesterRegistrationComponent_Conditional_16_Conditional_113_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p");
    i0.ɵɵtext(1, "Registration cannot be completed until the following requirements are resolved:");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(2, "ul");
    i0.ɵɵrepeaterCreate(3, StudentSemesterRegistrationComponent_Conditional_16_Conditional_113_For_4_Template, 2, 1, "li", null, i0.ɵɵrepeaterTrackByIdentity);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const data_r4 = i0.ɵɵnextContext();
    i0.ɵɵadvance(3);
    i0.ɵɵrepeater(data_r4.blockers);
} }
function StudentSemesterRegistrationComponent_Conditional_16_Conditional_114_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p");
    i0.ɵɵtext(1, "By registering, you confirm the academic details and subjects shown on this page.");
    i0.ɵɵelementEnd();
} }
function StudentSemesterRegistrationComponent_Conditional_16_Template(rf, ctx) { if (rf & 1) {
    const _r3 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "section", 13)(1, "span");
    i0.ɵɵconditionalCreate(2, StudentSemesterRegistrationComponent_Conditional_16_Conditional_2_Template, 1, 0, ":svg:svg", 8)(3, StudentSemesterRegistrationComponent_Conditional_16_Conditional_3_Template, 1, 0, ":svg:svg", 14);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "div")(5, "small");
    i0.ɵɵtext(6, "Current status");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "h2");
    i0.ɵɵtext(8);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(9, "p");
    i0.ɵɵconditionalCreate(10, StudentSemesterRegistrationComponent_Conditional_16_Conditional_10_Template, 2, 4)(11, StudentSemesterRegistrationComponent_Conditional_16_Conditional_11_Template, 1, 2);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(12, "div", 15)(13, "div", 16)(14, "section", 17)(15, "header")(16, "div")(17, "small");
    i0.ɵɵtext(18, "Student record");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(19, "h2");
    i0.ɵɵtext(20, "Academic details");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(21, "dl", 18)(22, "div")(23, "dt");
    i0.ɵɵtext(24, "Student name");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(25, "dd");
    i0.ɵɵtext(26);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(27, "div")(28, "dt");
    i0.ɵɵtext(29, "Student ID");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(30, "dd");
    i0.ɵɵtext(31);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(32, "div")(33, "dt");
    i0.ɵɵtext(34, "Academic session");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(35, "dd");
    i0.ɵɵtext(36);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(37, "div")(38, "dt");
    i0.ɵɵtext(39, "Current semester");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(40, "dd");
    i0.ɵɵtext(41);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(42, "div")(43, "dt");
    i0.ɵɵtext(44, "University");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(45, "dd");
    i0.ɵɵtext(46);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(47, "div")(48, "dt");
    i0.ɵɵtext(49, "College");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(50, "dd");
    i0.ɵɵtext(51);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(52, "div")(53, "dt");
    i0.ɵɵtext(54, "Department");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(55, "dd");
    i0.ɵɵtext(56);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(57, "div")(58, "dt");
    i0.ɵɵtext(59, "Level");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(60, "dd");
    i0.ɵɵtext(61);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(62, "div")(63, "dt");
    i0.ɵɵtext(64, "Course");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(65, "dd");
    i0.ɵɵtext(66);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(67, "div")(68, "dt");
    i0.ɵɵtext(69, "Academic year");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(70, "dd");
    i0.ɵɵtext(71);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(72, "div")(73, "dt");
    i0.ɵɵtext(74, "Group");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(75, "dd");
    i0.ɵɵtext(76);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(77, "div")(78, "dt");
    i0.ɵɵtext(79, "Section / Set");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(80, "dd");
    i0.ɵɵtext(81);
    i0.ɵɵelementEnd()()()();
    i0.ɵɵelementStart(82, "section", 17)(83, "header", 19)(84, "div")(85, "small");
    i0.ɵɵtext(86, "Current semester");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(87, "h2");
    i0.ɵɵtext(88, "Assigned subjects");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(89, "strong");
    i0.ɵɵtext(90);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(91, "div", 20)(92, "table")(93, "thead")(94, "tr")(95, "th");
    i0.ɵɵtext(96, "Subject");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(97, "th");
    i0.ɵɵtext(98, "Type");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(99, "th");
    i0.ɵɵtext(100, "Requirement");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(101, "th");
    i0.ɵɵtext(102, "Credits");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(103, "tbody");
    i0.ɵɵrepeaterCreate(104, StudentSemesterRegistrationComponent_Conditional_16_For_105_Template, 12, 5, "tr", null, _forTrack0, false, StudentSemesterRegistrationComponent_Conditional_16_ForEmpty_106_Template, 3, 0, "tr");
    i0.ɵɵelementEnd()()()()();
    i0.ɵɵelementStart(107, "aside", 21)(108, "span", 22);
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(109, "svg", 23);
    i0.ɵɵelementEnd();
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(110, "h2");
    i0.ɵɵtext(111, "Complete registration");
    i0.ɵɵelementEnd();
    i0.ɵɵconditionalCreate(112, StudentSemesterRegistrationComponent_Conditional_16_Conditional_112_Template, 18, 2)(113, StudentSemesterRegistrationComponent_Conditional_16_Conditional_113_Template, 5, 0)(114, StudentSemesterRegistrationComponent_Conditional_16_Conditional_114_Template, 2, 0, "p");
    i0.ɵɵelementStart(115, "button", 24);
    i0.ɵɵlistener("click", function StudentSemesterRegistrationComponent_Conditional_16_Template_button_click_115_listener() { i0.ɵɵrestoreView(_r3); const ctx_r0 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r0.register()); });
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(116, "svg", 8);
    i0.ɵɵtext(117);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const data_r4 = ctx;
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵclassProp("is-complete", !!data_r4.registration);
    i0.ɵɵadvance(2);
    i0.ɵɵconditional(data_r4.registration ? 2 : 3);
    i0.ɵɵadvance(6);
    i0.ɵɵtextInterpolate(data_r4.registration ? "Semester Registration Completed" : "Ready for review");
    i0.ɵɵadvance(2);
    i0.ɵɵconditional(data_r4.registration ? 10 : 11);
    i0.ɵɵadvance(16);
    i0.ɵɵtextInterpolate(data_r4.student.studentName);
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(data_r4.student.studentId);
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(data_r4.student.academicSession);
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate1("Semester ", data_r4.student.semester);
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(data_r4.student.universityName || "\u2014");
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(data_r4.student.collegeName || "\u2014");
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(data_r4.student.departmentName || "\u2014");
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(data_r4.student.levelName || "\u2014");
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(data_r4.student.courseName || "\u2014");
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate1("Year ", data_r4.student.currentAcademicYear);
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate((data_r4.assignment == null ? null : data_r4.assignment.groupName) || "Not assigned");
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate1(" ", data_r4.assignment ? data_r4.assignment.sectionName + " / " + data_r4.assignment.setName : "Not assigned", " ");
    i0.ɵɵadvance(9);
    i0.ɵɵtextInterpolate1("", data_r4.subjects.length, " subjects");
    i0.ɵɵadvance(14);
    i0.ɵɵrepeater(data_r4.subjects);
    i0.ɵɵadvance(8);
    i0.ɵɵconditional(data_r4.registration ? 112 : data_r4.blockers.length ? 113 : 114);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("disabled", !data_r4.eligible || ctx_r0.registering());
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", ctx_r0.registering() ? "Registering\u2026" : data_r4.registration ? "Already registered" : "Register Semester", " ");
} }
function apiMessage(error, fallback) {
    if (typeof error === 'object' && error && 'error' in error) {
        const message = error.error?.message;
        if (typeof message === 'string')
            return message;
    }
    return fallback;
}
export class StudentSemesterRegistrationComponent {
    api = inject(ApiService);
    session = inject(StudentSessionService);
    context = signal(null, ...(ngDevMode ? [{ debugName: "context" }] : /* istanbul ignore next */ []));
    loading = signal(true, ...(ngDevMode ? [{ debugName: "loading" }] : /* istanbul ignore next */ []));
    registering = signal(false, ...(ngDevMode ? [{ debugName: "registering" }] : /* istanbul ignore next */ []));
    error = signal('', ...(ngDevMode ? [{ debugName: "error" }] : /* istanbul ignore next */ []));
    message = signal('', ...(ngDevMode ? [{ debugName: "message" }] : /* istanbul ignore next */ []));
    constructor() {
        this.load();
    }
    load() {
        const token = this.session.token();
        if (!token) {
            this.error.set('Your student session is unavailable. Please sign in again.');
            this.loading.set(false);
            return;
        }
        this.loading.set(true);
        this.error.set('');
        this.api.studentSemesterRegistration(token).subscribe({
            next: (context) => {
                this.context.set(context);
                this.loading.set(false);
            },
            error: (error) => {
                this.error.set(apiMessage(error, 'Semester registration details could not be loaded.'));
                this.loading.set(false);
            },
        });
    }
    register() {
        const token = this.session.token();
        const context = this.context();
        if (!token || !context?.eligible || this.registering())
            return;
        this.registering.set(true);
        this.error.set('');
        this.message.set('');
        this.api.registerStudentSemester(token).subscribe({
            next: ({ item, alreadyRegistered }) => {
                this.context.update((value) => value
                    ? {
                        ...value,
                        registration: item,
                        history: value.history.some((entry) => entry._id === item._id)
                            ? value.history
                            : [item, ...value.history],
                        eligible: false,
                    }
                    : value);
                this.message.set(alreadyRegistered
                    ? 'This semester was already registered.'
                    : 'Semester registration completed successfully.');
                this.registering.set(false);
            },
            error: (error) => {
                this.error.set(apiMessage(error, 'Semester registration could not be completed.'));
                this.registering.set(false);
            },
        });
    }
    static ɵfac = function StudentSemesterRegistrationComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || StudentSemesterRegistrationComponent)(); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: StudentSemesterRegistrationComponent, selectors: [["erp-student-semester-registration"]], decls: 17, vars: 3, consts: [[1, "semester-registration-page"], ["routerLink", "/student/academics", 1, "back-link"], ["lucideArrowLeft", "", "aria-hidden", "true"], [1, "registration-hero"], ["src", "/assets/student/academics/semester-registration.png", "width", "240", "height", "200", "alt", "", "aria-hidden", "true"], ["aria-live", "polite", 1, "registration-notice", "registration-notice--success"], ["role", "alert", 1, "registration-notice", "registration-notice--error"], ["aria-live", "polite", 1, "registration-state"], ["lucideCheck", "", "aria-hidden", "true"], ["lucideCircleAlert", "", "aria-hidden", "true"], ["type", "button", 3, "click"], ["lucideRefreshCw", ""], [1, "registration-loader"], [1, "registration-status"], ["lucideGraduationCap", "", "aria-hidden", "true"], [1, "registration-layout"], [1, "registration-main"], [1, "registration-card"], [1, "detail-grid"], [1, "subjects-heading"], [1, "subjects-table"], [1, "registration-card", "registration-action-card"], [1, "action-icon"], ["lucideBookOpen", "", "aria-hidden", "true"], ["type", "button", 1, "registration-button", 3, "click", "disabled"], ["colspan", "4"]], template: function StudentSemesterRegistrationComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "main", 0)(1, "a", 1);
            i0.ɵɵnamespaceSVG();
            i0.ɵɵelement(2, "svg", 2);
            i0.ɵɵtext(3, " Back to Academics ");
            i0.ɵɵelementEnd();
            i0.ɵɵnamespaceHTML();
            i0.ɵɵelementStart(4, "header", 3)(5, "div")(6, "small");
            i0.ɵɵtext(7, "Registration & Programmes");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(8, "h1");
            i0.ɵɵtext(9, "Semester Registration");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(10, "p");
            i0.ɵɵtext(11, "Review your academic allocation and assigned subjects before registering.");
            i0.ɵɵelementEnd()();
            i0.ɵɵelement(12, "img", 4);
            i0.ɵɵelementEnd();
            i0.ɵɵconditionalCreate(13, StudentSemesterRegistrationComponent_Conditional_13_Template, 3, 1, "div", 5);
            i0.ɵɵconditionalCreate(14, StudentSemesterRegistrationComponent_Conditional_14_Template, 7, 1, "div", 6);
            i0.ɵɵconditionalCreate(15, StudentSemesterRegistrationComponent_Conditional_15_Template, 6, 0, "section", 7)(16, StudentSemesterRegistrationComponent_Conditional_16_Template, 118, 22);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            let tmp_2_0;
            i0.ɵɵadvance(13);
            i0.ɵɵconditional(ctx.message() ? 13 : -1);
            i0.ɵɵadvance();
            i0.ɵɵconditional(ctx.error() ? 14 : -1);
            i0.ɵɵadvance();
            i0.ɵɵconditional(ctx.loading() ? 15 : (tmp_2_0 = ctx.context()) ? 16 : -1, tmp_2_0);
        } }, dependencies: [RouterLink,
            LucideArrowLeft,
            LucideBookOpen,
            LucideCheck,
            LucideCircleAlert,
            LucideGraduationCap,
            LucideRefreshCw,
            DatePipe], styles: ["[_nghost-%COMP%] {\n  display: block;\n}\n\n.semester-registration-page[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 18px;\n  color: var(--student-color-text);\n}\n\n.back-link[_ngcontent-%COMP%] {\n  display: flex;\n  width: max-content;\n  align-items: center;\n  gap: 8px;\n  color: var(--student-color-primary);\n  font-weight: 750;\n  text-decoration: none;\n}\n\n.back-link[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%], \n.registration-notice[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%], \n.registration-button[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 19px;\n}\n\n.registration-hero[_ngcontent-%COMP%] {\n  display: flex;\n  min-height: 190px;\n  align-items: center;\n  justify-content: space-between;\n  overflow: hidden;\n  padding: 26px 40px;\n  border: 1px solid var(--student-color-border);\n  border-radius: 22px;\n  background: linear-gradient(\n    135deg,\n    var(--student-color-surface),\n    var(--student-color-primary-soft)\n  );\n  box-shadow: var(--student-shadow-card);\n}\n\n.registration-hero[_ngcontent-%COMP%]   small[_ngcontent-%COMP%], \n.registration-card[_ngcontent-%COMP%]   header[_ngcontent-%COMP%]   small[_ngcontent-%COMP%], \n.registration-status[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  color: var(--student-color-primary);\n  font-weight: 800;\n}\n\n.registration-hero[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  margin: 8px 0;\n  font-size: clamp(30px, 4vw, 44px);\n  letter-spacing: -0.035em;\n}\n\n.registration-hero[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], \n.registration-status[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], \n.registration-action-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], \n.registration-state[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  color: var(--student-color-text-secondary);\n  line-height: 1.55;\n}\n\n.registration-hero[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 180px;\n  height: 150px;\n  object-fit: contain;\n}\n\n.registration-notice[_ngcontent-%COMP%] {\n  display: flex;\n  min-height: 48px;\n  align-items: center;\n  gap: 10px;\n  padding: 0 16px;\n  border: 1px solid var(--student-color-border);\n  border-radius: 12px;\n}\n\n.registration-notice--success[_ngcontent-%COMP%] {\n  color: var(--student-color-success);\n  background: var(--student-color-success-soft);\n}\n\n.registration-notice--error[_ngcontent-%COMP%] {\n  color: var(--student-color-danger);\n  background: var(--student-color-danger-soft);\n}\n\n.registration-notice[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  margin-left: auto;\n  border: 0;\n  color: inherit;\n  background: transparent;\n  font: inherit;\n  font-weight: 750;\n}\n\n.registration-status[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 16px;\n  padding: 20px 24px;\n  border: 1px solid var(--student-color-border);\n  border-radius: 18px;\n  background: var(--student-color-surface);\n  box-shadow: var(--student-shadow-card);\n}\n\n.registration-status[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%], \n.action-icon[_ngcontent-%COMP%] {\n  display: grid;\n  width: 52px;\n  height: 52px;\n  flex: 0 0 auto;\n  place-items: center;\n  border-radius: 14px;\n  color: var(--student-color-primary);\n  background: var(--student-color-primary-soft);\n}\n\n.registration-status.is-complete[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  color: var(--student-color-success);\n  background: var(--student-color-success-soft);\n}\n\n.registration-status[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%], \n.action-icon[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 25px;\n}\n\n.registration-status[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], \n.registration-card[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 4px 0;\n  font-size: 21px;\n}\n\n.registration-layout[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: minmax(0, 2fr) minmax(280px, 0.8fr);\n  align-items: start;\n  gap: 18px;\n}\n\n.registration-main[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 18px;\n}\n\n.registration-card[_ngcontent-%COMP%], \n.registration-state[_ngcontent-%COMP%] {\n  padding: 24px;\n  border: 1px solid var(--student-color-border);\n  border-radius: 18px;\n  background: var(--student-color-surface);\n  box-shadow: var(--student-shadow-card);\n}\n\n.detail-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 0 24px;\n  margin: 18px 0 0;\n}\n\n.detail-grid[_ngcontent-%COMP%]   div[_ngcontent-%COMP%], \n.registration-action-card[_ngcontent-%COMP%]   dl[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  padding: 13px 0;\n  border-bottom: 1px solid var(--student-color-divider);\n}\n\ndt[_ngcontent-%COMP%] {\n  color: var(--student-color-text-secondary);\n  font-size: 13px;\n}\n\ndd[_ngcontent-%COMP%] {\n  margin: 5px 0 0;\n  font-weight: 750;\n}\n\n.subjects-heading[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 16px;\n}\n\n.subjects-heading[_ngcontent-%COMP%]    > strong[_ngcontent-%COMP%] {\n  color: var(--student-color-primary);\n}\n\n.subjects-table[_ngcontent-%COMP%] {\n  overflow-x: auto;\n  margin-top: 16px;\n}\n\ntable[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n}\n\nth[_ngcontent-%COMP%], \ntd[_ngcontent-%COMP%] {\n  padding: 13px 12px;\n  border-bottom: 1px solid var(--student-color-divider);\n  text-align: left;\n}\n\nth[_ngcontent-%COMP%] {\n  color: var(--student-color-text-secondary);\n  font-size: 12px;\n  text-transform: uppercase;\n}\n\ntd[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%], \ntd[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  display: block;\n}\n\ntd[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  margin-top: 4px;\n  color: var(--student-color-text-secondary);\n}\n\n.registration-action-card[_ngcontent-%COMP%] {\n  position: sticky;\n  top: 18px;\n}\n\n.registration-action-card[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin-top: 16px;\n}\n\n.registration-action-card[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  padding-left: 20px;\n  color: var(--student-color-danger);\n}\n\n.registration-button[_ngcontent-%COMP%] {\n  display: flex;\n  width: 100%;\n  min-height: 48px;\n  align-items: center;\n  justify-content: center;\n  gap: 9px;\n  margin-top: 20px;\n  border: 0;\n  border-radius: 12px;\n  color: var(--student-color-text-inverse);\n  background: var(--student-color-primary);\n  font: inherit;\n  font-weight: 800;\n  cursor: pointer;\n}\n\n.registration-button[_ngcontent-%COMP%]:disabled {\n  cursor: not-allowed;\n  opacity: 0.55;\n}\n\n.registration-state[_ngcontent-%COMP%] {\n  display: grid;\n  min-height: 280px;\n  align-content: center;\n  justify-items: center;\n  text-align: center;\n}\n\n.registration-loader[_ngcontent-%COMP%] {\n  width: 38px;\n  height: 38px;\n  border: 3px solid var(--student-color-border);\n  border-top-color: var(--student-color-primary);\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_registration-spin 0.8s linear infinite;\n}\n\n@keyframes _ngcontent-%COMP%_registration-spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n\n@media (max-width: 850px) {\n  .registration-layout[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n\n  .registration-action-card[_ngcontent-%COMP%] {\n    position: static;\n  }\n}\n\n@media (max-width: 600px) {\n  .registration-hero[_ngcontent-%COMP%] {\n    min-height: 160px;\n    padding: 20px;\n  }\n\n  .registration-hero[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 100px;\n    height: 100px;\n  }\n\n  .registration-hero[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 29px;\n  }\n\n  .detail-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n\n  .registration-card[_ngcontent-%COMP%], \n   .registration-state[_ngcontent-%COMP%] {\n    padding: 18px;\n  }\n}"], changeDetection: 0 });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(StudentSemesterRegistrationComponent, [{
        type: Component,
        args: [{ selector: 'erp-student-semester-registration', imports: [
                    DatePipe,
                    RouterLink,
                    LucideArrowLeft,
                    LucideBookOpen,
                    LucideCheck,
                    LucideCircleAlert,
                    LucideGraduationCap,
                    LucideRefreshCw,
                ], changeDetection: ChangeDetectionStrategy.OnPush, template: "<main class=\"semester-registration-page\">\n  <a class=\"back-link\" routerLink=\"/student/academics\">\n    <svg lucideArrowLeft aria-hidden=\"true\"></svg>\n    Back to Academics\n  </a>\n\n  <header class=\"registration-hero\">\n    <div>\n      <small>Registration &amp; Programmes</small>\n      <h1>Semester Registration</h1>\n      <p>Review your academic allocation and assigned subjects before registering.</p>\n    </div>\n    <img\n      src=\"/assets/student/academics/semester-registration.png\"\n      width=\"240\"\n      height=\"200\"\n      alt=\"\"\n      aria-hidden=\"true\"\n    />\n  </header>\n\n  @if (message()) {\n    <div class=\"registration-notice registration-notice--success\" aria-live=\"polite\">\n      <svg lucideCheck aria-hidden=\"true\"></svg>\n      {{ message() }}\n    </div>\n  }\n  @if (error()) {\n    <div class=\"registration-notice registration-notice--error\" role=\"alert\">\n      <svg lucideCircleAlert aria-hidden=\"true\"></svg>\n      <span>{{ error() }}</span>\n      <button type=\"button\" (click)=\"load()\"><svg lucideRefreshCw></svg>Try again</button>\n    </div>\n  }\n\n  @if (loading()) {\n    <section class=\"registration-state\" aria-live=\"polite\">\n      <span class=\"registration-loader\"></span>\n      <h2>Loading semester details</h2>\n      <p>We are checking your current academic allocation and subjects.</p>\n    </section>\n  } @else if (context(); as data) {\n    <section class=\"registration-status\" [class.is-complete]=\"!!data.registration\">\n      <span>\n        @if (data.registration) {\n          <svg lucideCheck aria-hidden=\"true\"></svg>\n        } @else {\n          <svg lucideGraduationCap aria-hidden=\"true\"></svg>\n        }\n      </span>\n      <div>\n        <small>Current status</small>\n        <h2>{{ data.registration ? 'Semester Registration Completed' : 'Ready for review' }}</h2>\n        <p>\n          @if (data.registration) {\n            Registered on {{ data.registration.registeredAt | date: 'medium' }}\n          } @else {\n            Semester {{ data.student.semester }} \u00B7 {{ data.student.academicSession }}\n          }\n        </p>\n      </div>\n    </section>\n\n    <div class=\"registration-layout\">\n      <div class=\"registration-main\">\n        <section class=\"registration-card\">\n          <header>\n            <div>\n              <small>Student record</small>\n              <h2>Academic details</h2>\n            </div>\n          </header>\n          <dl class=\"detail-grid\">\n            <div>\n              <dt>Student name</dt>\n              <dd>{{ data.student.studentName }}</dd>\n            </div>\n            <div>\n              <dt>Student ID</dt>\n              <dd>{{ data.student.studentId }}</dd>\n            </div>\n            <div>\n              <dt>Academic session</dt>\n              <dd>{{ data.student.academicSession }}</dd>\n            </div>\n            <div>\n              <dt>Current semester</dt>\n              <dd>Semester {{ data.student.semester }}</dd>\n            </div>\n            <div>\n              <dt>University</dt>\n              <dd>{{ data.student.universityName || '\u2014' }}</dd>\n            </div>\n            <div>\n              <dt>College</dt>\n              <dd>{{ data.student.collegeName || '\u2014' }}</dd>\n            </div>\n            <div>\n              <dt>Department</dt>\n              <dd>{{ data.student.departmentName || '\u2014' }}</dd>\n            </div>\n            <div>\n              <dt>Level</dt>\n              <dd>{{ data.student.levelName || '\u2014' }}</dd>\n            </div>\n            <div>\n              <dt>Course</dt>\n              <dd>{{ data.student.courseName || '\u2014' }}</dd>\n            </div>\n            <div>\n              <dt>Academic year</dt>\n              <dd>Year {{ data.student.currentAcademicYear }}</dd>\n            </div>\n            <div>\n              <dt>Group</dt>\n              <dd>{{ data.assignment?.groupName || 'Not assigned' }}</dd>\n            </div>\n            <div>\n              <dt>Section / Set</dt>\n              <dd>\n                {{\n                  data.assignment\n                    ? data.assignment.sectionName + ' / ' + data.assignment.setName\n                    : 'Not assigned'\n                }}\n              </dd>\n            </div>\n          </dl>\n        </section>\n\n        <section class=\"registration-card\">\n          <header class=\"subjects-heading\">\n            <div>\n              <small>Current semester</small>\n              <h2>Assigned subjects</h2>\n            </div>\n            <strong>{{ data.subjects.length }} subjects</strong>\n          </header>\n          <div class=\"subjects-table\">\n            <table>\n              <thead>\n                <tr>\n                  <th>Subject</th>\n                  <th>Type</th>\n                  <th>Requirement</th>\n                  <th>Credits</th>\n                </tr>\n              </thead>\n              <tbody>\n                @for (subject of data.subjects; track subject._id) {\n                  <tr>\n                    <td>\n                      <strong>{{ subject.name }}</strong\n                      ><small>{{ subject.code || 'No code' }}</small>\n                    </td>\n                    <td>{{ subject.subjectType || '\u2014' }}</td>\n                    <td>{{ subject.requirement === 'elective' ? 'Elective' : 'Required' }}</td>\n                    <td>{{ subject.credits }}</td>\n                  </tr>\n                } @empty {\n                  <tr>\n                    <td colspan=\"4\">No subjects are assigned for this semester.</td>\n                  </tr>\n                }\n              </tbody>\n            </table>\n          </div>\n        </section>\n      </div>\n\n      <aside class=\"registration-card registration-action-card\">\n        <span class=\"action-icon\"><svg lucideBookOpen aria-hidden=\"true\"></svg></span>\n        <h2>Complete registration</h2>\n        @if (data.registration) {\n          <p>\n            Your current semester is registered. The saved subject snapshot cannot be submitted\n            again.\n          </p>\n          <dl>\n            <div>\n              <dt>Semester</dt>\n              <dd>{{ data.registration.semester }}</dd>\n            </div>\n            <div>\n              <dt>Subjects</dt>\n              <dd>{{ data.registration.subjectCount }}</dd>\n            </div>\n            <div>\n              <dt>Status</dt>\n              <dd>Registered</dd>\n            </div>\n          </dl>\n        } @else if (data.blockers.length) {\n          <p>Registration cannot be completed until the following requirements are resolved:</p>\n          <ul>\n            @for (blocker of data.blockers; track blocker) {\n              <li>{{ blocker }}</li>\n            }\n          </ul>\n        } @else {\n          <p>By registering, you confirm the academic details and subjects shown on this page.</p>\n        }\n        <button\n          class=\"registration-button\"\n          type=\"button\"\n          [disabled]=\"!data.eligible || registering()\"\n          (click)=\"register()\"\n        >\n          <svg lucideCheck aria-hidden=\"true\"></svg>\n          {{\n            registering()\n              ? 'Registering\u2026'\n              : data.registration\n                ? 'Already registered'\n                : 'Register Semester'\n          }}\n        </button>\n      </aside>\n    </div>\n  }\n</main>\n", styles: [":host {\n  display: block;\n}\n\n.semester-registration-page {\n  display: grid;\n  gap: 18px;\n  color: var(--student-color-text);\n}\n\n.back-link {\n  display: flex;\n  width: max-content;\n  align-items: center;\n  gap: 8px;\n  color: var(--student-color-primary);\n  font-weight: 750;\n  text-decoration: none;\n}\n\n.back-link svg,\n.registration-notice svg,\n.registration-button svg {\n  width: 19px;\n}\n\n.registration-hero {\n  display: flex;\n  min-height: 190px;\n  align-items: center;\n  justify-content: space-between;\n  overflow: hidden;\n  padding: 26px 40px;\n  border: 1px solid var(--student-color-border);\n  border-radius: 22px;\n  background: linear-gradient(\n    135deg,\n    var(--student-color-surface),\n    var(--student-color-primary-soft)\n  );\n  box-shadow: var(--student-shadow-card);\n}\n\n.registration-hero small,\n.registration-card header small,\n.registration-status small {\n  color: var(--student-color-primary);\n  font-weight: 800;\n}\n\n.registration-hero h1 {\n  margin: 8px 0;\n  font-size: clamp(30px, 4vw, 44px);\n  letter-spacing: -0.035em;\n}\n\n.registration-hero p,\n.registration-status p,\n.registration-action-card p,\n.registration-state p {\n  margin: 0;\n  color: var(--student-color-text-secondary);\n  line-height: 1.55;\n}\n\n.registration-hero img {\n  width: 180px;\n  height: 150px;\n  object-fit: contain;\n}\n\n.registration-notice {\n  display: flex;\n  min-height: 48px;\n  align-items: center;\n  gap: 10px;\n  padding: 0 16px;\n  border: 1px solid var(--student-color-border);\n  border-radius: 12px;\n}\n\n.registration-notice--success {\n  color: var(--student-color-success);\n  background: var(--student-color-success-soft);\n}\n\n.registration-notice--error {\n  color: var(--student-color-danger);\n  background: var(--student-color-danger-soft);\n}\n\n.registration-notice button {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  margin-left: auto;\n  border: 0;\n  color: inherit;\n  background: transparent;\n  font: inherit;\n  font-weight: 750;\n}\n\n.registration-status {\n  display: flex;\n  align-items: center;\n  gap: 16px;\n  padding: 20px 24px;\n  border: 1px solid var(--student-color-border);\n  border-radius: 18px;\n  background: var(--student-color-surface);\n  box-shadow: var(--student-shadow-card);\n}\n\n.registration-status > span,\n.action-icon {\n  display: grid;\n  width: 52px;\n  height: 52px;\n  flex: 0 0 auto;\n  place-items: center;\n  border-radius: 14px;\n  color: var(--student-color-primary);\n  background: var(--student-color-primary-soft);\n}\n\n.registration-status.is-complete > span {\n  color: var(--student-color-success);\n  background: var(--student-color-success-soft);\n}\n\n.registration-status svg,\n.action-icon svg {\n  width: 25px;\n}\n\n.registration-status h2,\n.registration-card h2 {\n  margin: 4px 0;\n  font-size: 21px;\n}\n\n.registration-layout {\n  display: grid;\n  grid-template-columns: minmax(0, 2fr) minmax(280px, 0.8fr);\n  align-items: start;\n  gap: 18px;\n}\n\n.registration-main {\n  display: grid;\n  gap: 18px;\n}\n\n.registration-card,\n.registration-state {\n  padding: 24px;\n  border: 1px solid var(--student-color-border);\n  border-radius: 18px;\n  background: var(--student-color-surface);\n  box-shadow: var(--student-shadow-card);\n}\n\n.detail-grid {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 0 24px;\n  margin: 18px 0 0;\n}\n\n.detail-grid div,\n.registration-action-card dl div {\n  padding: 13px 0;\n  border-bottom: 1px solid var(--student-color-divider);\n}\n\ndt {\n  color: var(--student-color-text-secondary);\n  font-size: 13px;\n}\n\ndd {\n  margin: 5px 0 0;\n  font-weight: 750;\n}\n\n.subjects-heading {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 16px;\n}\n\n.subjects-heading > strong {\n  color: var(--student-color-primary);\n}\n\n.subjects-table {\n  overflow-x: auto;\n  margin-top: 16px;\n}\n\ntable {\n  width: 100%;\n  border-collapse: collapse;\n}\n\nth,\ntd {\n  padding: 13px 12px;\n  border-bottom: 1px solid var(--student-color-divider);\n  text-align: left;\n}\n\nth {\n  color: var(--student-color-text-secondary);\n  font-size: 12px;\n  text-transform: uppercase;\n}\n\ntd strong,\ntd small {\n  display: block;\n}\n\ntd small {\n  margin-top: 4px;\n  color: var(--student-color-text-secondary);\n}\n\n.registration-action-card {\n  position: sticky;\n  top: 18px;\n}\n\n.registration-action-card h2 {\n  margin-top: 16px;\n}\n\n.registration-action-card ul {\n  padding-left: 20px;\n  color: var(--student-color-danger);\n}\n\n.registration-button {\n  display: flex;\n  width: 100%;\n  min-height: 48px;\n  align-items: center;\n  justify-content: center;\n  gap: 9px;\n  margin-top: 20px;\n  border: 0;\n  border-radius: 12px;\n  color: var(--student-color-text-inverse);\n  background: var(--student-color-primary);\n  font: inherit;\n  font-weight: 800;\n  cursor: pointer;\n}\n\n.registration-button:disabled {\n  cursor: not-allowed;\n  opacity: 0.55;\n}\n\n.registration-state {\n  display: grid;\n  min-height: 280px;\n  align-content: center;\n  justify-items: center;\n  text-align: center;\n}\n\n.registration-loader {\n  width: 38px;\n  height: 38px;\n  border: 3px solid var(--student-color-border);\n  border-top-color: var(--student-color-primary);\n  border-radius: 50%;\n  animation: registration-spin 0.8s linear infinite;\n}\n\n@keyframes registration-spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n\n@media (max-width: 850px) {\n  .registration-layout {\n    grid-template-columns: 1fr;\n  }\n\n  .registration-action-card {\n    position: static;\n  }\n}\n\n@media (max-width: 600px) {\n  .registration-hero {\n    min-height: 160px;\n    padding: 20px;\n  }\n\n  .registration-hero img {\n    width: 100px;\n    height: 100px;\n  }\n\n  .registration-hero h1 {\n    font-size: 29px;\n  }\n\n  .detail-grid {\n    grid-template-columns: 1fr;\n  }\n\n  .registration-card,\n  .registration-state {\n    padding: 18px;\n  }\n}\n"] }]
    }], () => [], null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(StudentSemesterRegistrationComponent, { className: "StudentSemesterRegistrationComponent", filePath: "frontend/src/app/features/student/academics/student-semester-registration.component.ts", lineNumber: 40 }); })();
