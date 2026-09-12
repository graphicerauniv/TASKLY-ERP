import { CurrencyPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ApiService } from '../../../core/api.service';
import { AdminIllustrationComponent } from '../../../shared/ui/admin-illustration/admin-illustration.component';
import { AdminPageComponent } from '../../../shared/ui/admin-page/admin-page.component';
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
const _forTrack0 = ($index, $item) => $item._id;
const _forTrack1 = ($index, $item) => $item.studentAdmissionId;
function ExamEligibilityComponent_Conditional_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 1);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r0.error());
} }
function ExamEligibilityComponent_For_11_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 6);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r2 = ctx.$implicit;
    i0.ɵɵproperty("value", item_r2._id);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate5(" ", item_r2.subjectName, " \u00B7 ", item_r2.courseName, " \u00B7 Semester ", item_r2.semester, " \u00B7 ", item_r2.examDate, " \u00B7 Shift ", item_r2.shiftSerial, " ");
} }
function ExamEligibilityComponent_Conditional_12_For_44_Conditional_19_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "small");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const student_r4 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(student_r4.reasons.join(" "));
} }
function ExamEligibilityComponent_Conditional_12_For_44_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "tr")(1, "td")(2, "strong");
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "small");
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(6, "td")(7, "span", 13);
    i0.ɵɵtext(8);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(9, "td");
    i0.ɵɵtext(10);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(11, "td");
    i0.ɵɵtext(12);
    i0.ɵɵpipe(13, "currency");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(14, "td");
    i0.ɵɵtext(15);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(16, "td")(17, "span", 13);
    i0.ɵɵtext(18);
    i0.ɵɵelementEnd();
    i0.ɵɵconditionalCreate(19, ExamEligibilityComponent_Conditional_12_For_44_Conditional_19_Template, 2, 1, "small");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const student_r4 = ctx.$implicit;
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(student_r4.studentName);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(student_r4.studentId || "Student ID unavailable");
    i0.ɵɵadvance(2);
    i0.ɵɵclassProp("erp-status--draft", !student_r4.semesterRegistered);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", student_r4.semesterRegistered ? "Completed" : "Incomplete", " ");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(student_r4.subjectAssigned ? "Assigned" : "Not assigned");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind4(13, 12, student_r4.outstandingBalance, "INR", "symbol", "1.0-2"));
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(student_r4.backlogCount);
    i0.ɵɵadvance(2);
    i0.ɵɵclassProp("erp-status--draft", !student_r4.eligible);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", student_r4.eligible ? "Eligible" : "Ineligible", " ");
    i0.ɵɵadvance();
    i0.ɵɵconditional(student_r4.reasons.length ? 19 : -1);
} }
function ExamEligibilityComponent_Conditional_12_ForEmpty_45_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "tr")(1, "td", 14);
    i0.ɵɵelement(2, "erp-admin-illustration", 15);
    i0.ɵɵelementStart(3, "p");
    i0.ɵɵtext(4, "No students match this eligibility view.");
    i0.ɵɵelementEnd()()();
} }
function ExamEligibilityComponent_Conditional_12_Template(rf, ctx) { if (rf & 1) {
    const _r3 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "section", 8)(1, "button", 9);
    i0.ɵɵlistener("click", function ExamEligibilityComponent_Conditional_12_Template_button_click_1_listener() { i0.ɵɵrestoreView(_r3); const ctx_r0 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r0.setFilter("all")); });
    i0.ɵɵelementStart(2, "span")(3, "small");
    i0.ɵɵtext(4, "Evaluated");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "strong");
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(7, "button", 9);
    i0.ɵɵlistener("click", function ExamEligibilityComponent_Conditional_12_Template_button_click_7_listener() { i0.ɵɵrestoreView(_r3); const ctx_r0 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r0.setFilter("eligible")); });
    i0.ɵɵelementStart(8, "span")(9, "small");
    i0.ɵɵtext(10, "Eligible");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(11, "strong");
    i0.ɵɵtext(12);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(13, "button", 9);
    i0.ɵɵlistener("click", function ExamEligibilityComponent_Conditional_12_Template_button_click_13_listener() { i0.ɵɵrestoreView(_r3); const ctx_r0 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r0.setFilter("ineligible")); });
    i0.ɵɵelementStart(14, "span")(15, "small");
    i0.ɵɵtext(16, "Ineligible");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(17, "strong");
    i0.ɵɵtext(18);
    i0.ɵɵelementEnd()()()();
    i0.ɵɵelementStart(19, "section", 10)(20, "div", 11)(21, "div")(22, "h2");
    i0.ɵɵtext(23);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(24, "p");
    i0.ɵɵtext(25);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(26, "div", 12)(27, "table")(28, "thead")(29, "tr")(30, "th");
    i0.ɵɵtext(31, "Student");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(32, "th");
    i0.ɵɵtext(33, "Semester registration");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(34, "th");
    i0.ɵɵtext(35, "Assigned subject");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(36, "th");
    i0.ɵɵtext(37, "Fee balance");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(38, "th");
    i0.ɵɵtext(39, "Backlogs");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(40, "th");
    i0.ɵɵtext(41, "Eligibility");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(42, "tbody");
    i0.ɵɵrepeaterCreate(43, ExamEligibilityComponent_Conditional_12_For_44_Template, 20, 17, "tr", null, _forTrack1, false, ExamEligibilityComponent_Conditional_12_ForEmpty_45_Template, 5, 0, "tr");
    i0.ɵɵelementEnd()()()();
} if (rf & 2) {
    const data_r5 = ctx;
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(6);
    i0.ɵɵtextInterpolate(data_r5.summary.total);
    i0.ɵɵadvance(6);
    i0.ɵɵtextInterpolate(data_r5.summary.eligible);
    i0.ɵɵadvance(6);
    i0.ɵɵtextInterpolate(data_r5.summary.ineligible);
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(data_r5.schedule.subjectName);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate3(" ", data_r5.schedule.courseName, " \u00B7 Semester ", data_r5.schedule.semester, " \u00B7 ", data_r5.schedule.examDate, " ");
    i0.ɵɵadvance(2);
    i0.ɵɵattribute("aria-busy", ctx_r0.checking());
    i0.ɵɵadvance(16);
    i0.ɵɵrepeater(ctx_r0.visibleStudents());
} }
function ExamEligibilityComponent_Conditional_13_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "section", 7);
    i0.ɵɵelement(1, "erp-admin-illustration", 16);
    i0.ɵɵelementStart(2, "p");
    i0.ɵɵtext(3, "Select a scheduled subject to determine eligible students.");
    i0.ɵɵelementEnd()();
} }
function apiMessage(error, fallback) {
    if (typeof error === 'object' && error && 'error' in error) {
        const message = error.error?.message;
        if (typeof message === 'string')
            return message;
    }
    return fallback;
}
export class ExamEligibilityComponent {
    api = inject(ApiService);
    schedules = signal([], ...(ngDevMode ? [{ debugName: "schedules" }] : /* istanbul ignore next */ []));
    result = signal(null, ...(ngDevMode ? [{ debugName: "result" }] : /* istanbul ignore next */ []));
    loading = signal(true, ...(ngDevMode ? [{ debugName: "loading" }] : /* istanbul ignore next */ []));
    checking = signal(false, ...(ngDevMode ? [{ debugName: "checking" }] : /* istanbul ignore next */ []));
    error = signal('', ...(ngDevMode ? [{ debugName: "error" }] : /* istanbul ignore next */ []));
    filter = signal('all', ...(ngDevMode ? [{ debugName: "filter" }] : /* istanbul ignore next */ []));
    visibleStudents = computed(() => {
        const items = this.result()?.items || [];
        if (this.filter() === 'eligible')
            return items.filter((item) => item.eligible);
        if (this.filter() === 'ineligible')
            return items.filter((item) => !item.eligible);
        return items;
    }, ...(ngDevMode ? [{ debugName: "visibleStudents" }] : /* istanbul ignore next */ []));
    subjectScheduleId = '';
    constructor() {
        this.api.examSubjectSchedules().subscribe({
            next: ({ items }) => {
                this.schedules.set(items.filter((item) => item.isActive));
                this.loading.set(false);
            },
            error: (error) => {
                this.error.set(apiMessage(error, 'Could not load scheduled subjects.'));
                this.loading.set(false);
            },
        });
    }
    checkEligibility() {
        if (!this.subjectScheduleId) {
            this.result.set(null);
            return;
        }
        this.checking.set(true);
        this.error.set('');
        this.api.examEligibleStudents(this.subjectScheduleId).subscribe({
            next: (result) => {
                this.result.set(result);
                this.filter.set('all');
                this.checking.set(false);
            },
            error: (error) => {
                this.error.set(apiMessage(error, 'Could not determine student eligibility.'));
                this.checking.set(false);
            },
        });
    }
    setFilter(filter) {
        this.filter.set(filter);
    }
    static ɵfac = function ExamEligibilityComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || ExamEligibilityComponent)(); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ExamEligibilityComponent, selectors: [["erp-exam-eligibility"]], decls: 14, vars: 4, consts: [["eyebrow", "Exam", "title", "Eligible students", "description", "Determine eligibility from semester registration, assigned subjects, fee balance and active backlogs.", "variant", "compact", "layout", "collection"], ["role", "alert", 1, "erp-notice", "erp-notice--error"], [1, "erp-card", "erp-card--padded"], [1, "erp-form-grid"], [1, "erp-control", 3, "ngModelChange", "ngModel", "disabled"], ["value", ""], [3, "value"], [1, "erp-card", "erp-empty-state"], ["aria-label", "Eligibility summary", 1, "erp-academic-metric-strip", "erp-academic-metric-strip--three"], ["type", "button", 1, "erp-academic-metric", 3, "click"], [1, "erp-card", "erp-table-shell"], [1, "erp-table-toolbar"], [1, "erp-table-shell__scroll"], [1, "erp-status"], ["colspan", "6", 1, "erp-empty-state"], ["kind", "noResults", "size", "compact"], ["kind", "taskSchedule", "size", "compact"]], template: function ExamEligibilityComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "erp-admin-page", 0);
            i0.ɵɵconditionalCreate(1, ExamEligibilityComponent_Conditional_1_Template, 2, 1, "p", 1);
            i0.ɵɵelementStart(2, "section", 2)(3, "div", 3)(4, "label")(5, "span");
            i0.ɵɵtext(6, "Scheduled subject *");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(7, "select", 4);
            i0.ɵɵtwoWayListener("ngModelChange", function ExamEligibilityComponent_Template_select_ngModelChange_7_listener($event) { i0.ɵɵtwoWayBindingSet(ctx.subjectScheduleId, $event) || (ctx.subjectScheduleId = $event); return $event; });
            i0.ɵɵlistener("ngModelChange", function ExamEligibilityComponent_Template_select_ngModelChange_7_listener() { return ctx.checkEligibility(); });
            i0.ɵɵelementStart(8, "option", 5);
            i0.ɵɵtext(9, "Select scheduled subject");
            i0.ɵɵelementEnd();
            i0.ɵɵrepeaterCreate(10, ExamEligibilityComponent_For_11_Template, 2, 6, "option", 6, _forTrack0);
            i0.ɵɵelementEnd()()()();
            i0.ɵɵconditionalCreate(12, ExamEligibilityComponent_Conditional_12_Template, 46, 9)(13, ExamEligibilityComponent_Conditional_13_Template, 4, 0, "section", 7);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            let tmp_4_0;
            i0.ɵɵadvance();
            i0.ɵɵconditional(ctx.error() ? 1 : -1);
            i0.ɵɵadvance(6);
            i0.ɵɵtwoWayProperty("ngModel", ctx.subjectScheduleId);
            i0.ɵɵproperty("disabled", ctx.loading() || ctx.checking());
            i0.ɵɵadvance(3);
            i0.ɵɵrepeater(ctx.schedules());
            i0.ɵɵadvance(2);
            i0.ɵɵconditional((tmp_4_0 = ctx.result()) ? 12 : !ctx.loading() && !ctx.checking() ? 13 : -1, tmp_4_0);
        } }, dependencies: [AdminIllustrationComponent, AdminPageComponent, FormsModule, i1.NgSelectOption, i1.ɵNgSelectMultipleOption, i1.SelectControlValueAccessor, i1.NgControlStatus, i1.NgModel, CurrencyPipe], encapsulation: 2, changeDetection: 0 });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ExamEligibilityComponent, [{
        type: Component,
        args: [{ selector: 'erp-exam-eligibility', imports: [AdminIllustrationComponent, AdminPageComponent, CurrencyPipe, FormsModule], changeDetection: ChangeDetectionStrategy.OnPush, template: "<erp-admin-page\n  eyebrow=\"Exam\"\n  title=\"Eligible students\"\n  description=\"Determine eligibility from semester registration, assigned subjects, fee balance and active backlogs.\"\n  variant=\"compact\"\n  layout=\"collection\"\n>\n  @if (error()) {\n    <p class=\"erp-notice erp-notice--error\" role=\"alert\">{{ error() }}</p>\n  }\n\n  <section class=\"erp-card erp-card--padded\">\n    <div class=\"erp-form-grid\">\n      <label>\n        <span>Scheduled subject *</span>\n        <select\n          class=\"erp-control\"\n          [(ngModel)]=\"subjectScheduleId\"\n          [disabled]=\"loading() || checking()\"\n          (ngModelChange)=\"checkEligibility()\"\n        >\n          <option value=\"\">Select scheduled subject</option>\n          @for (item of schedules(); track item._id) {\n            <option [value]=\"item._id\">\n              {{ item.subjectName }} \u00B7 {{ item.courseName }} \u00B7 Semester {{ item.semester }} \u00B7\n              {{ item.examDate }} \u00B7 Shift {{ item.shiftSerial }}\n            </option>\n          }\n        </select>\n      </label>\n    </div>\n  </section>\n\n  @if (result(); as data) {\n    <section\n      class=\"erp-academic-metric-strip erp-academic-metric-strip--three\"\n      aria-label=\"Eligibility summary\"\n    >\n      <button class=\"erp-academic-metric\" type=\"button\" (click)=\"setFilter('all')\">\n        <span\n          ><small>Evaluated</small><strong>{{ data.summary.total }}</strong></span\n        >\n      </button>\n      <button class=\"erp-academic-metric\" type=\"button\" (click)=\"setFilter('eligible')\">\n        <span\n          ><small>Eligible</small><strong>{{ data.summary.eligible }}</strong></span\n        >\n      </button>\n      <button class=\"erp-academic-metric\" type=\"button\" (click)=\"setFilter('ineligible')\">\n        <span\n          ><small>Ineligible</small><strong>{{ data.summary.ineligible }}</strong></span\n        >\n      </button>\n    </section>\n\n    <section class=\"erp-card erp-table-shell\">\n      <div class=\"erp-table-toolbar\">\n        <div>\n          <h2>{{ data.schedule.subjectName }}</h2>\n          <p>\n            {{ data.schedule.courseName }} \u00B7 Semester {{ data.schedule.semester }} \u00B7\n            {{ data.schedule.examDate }}\n          </p>\n        </div>\n      </div>\n      <div class=\"erp-table-shell__scroll\">\n        <table [attr.aria-busy]=\"checking()\">\n          <thead>\n            <tr>\n              <th>Student</th>\n              <th>Semester registration</th>\n              <th>Assigned subject</th>\n              <th>Fee balance</th>\n              <th>Backlogs</th>\n              <th>Eligibility</th>\n            </tr>\n          </thead>\n          <tbody>\n            @for (student of visibleStudents(); track student.studentAdmissionId) {\n              <tr>\n                <td>\n                  <strong>{{ student.studentName }}</strong>\n                  <small>{{ student.studentId || 'Student ID unavailable' }}</small>\n                </td>\n                <td>\n                  <span class=\"erp-status\" [class.erp-status--draft]=\"!student.semesterRegistered\">\n                    {{ student.semesterRegistered ? 'Completed' : 'Incomplete' }}\n                  </span>\n                </td>\n                <td>{{ student.subjectAssigned ? 'Assigned' : 'Not assigned' }}</td>\n                <td>{{ student.outstandingBalance | currency: 'INR' : 'symbol' : '1.0-2' }}</td>\n                <td>{{ student.backlogCount }}</td>\n                <td>\n                  <span class=\"erp-status\" [class.erp-status--draft]=\"!student.eligible\">\n                    {{ student.eligible ? 'Eligible' : 'Ineligible' }}\n                  </span>\n                  @if (student.reasons.length) {\n                    <small>{{ student.reasons.join(' ') }}</small>\n                  }\n                </td>\n              </tr>\n            } @empty {\n              <tr>\n                <td colspan=\"6\" class=\"erp-empty-state\">\n                  <erp-admin-illustration kind=\"noResults\" size=\"compact\" />\n                  <p>No students match this eligibility view.</p>\n                </td>\n              </tr>\n            }\n          </tbody>\n        </table>\n      </div>\n    </section>\n  } @else if (!loading() && !checking()) {\n    <section class=\"erp-card erp-empty-state\">\n      <erp-admin-illustration kind=\"taskSchedule\" size=\"compact\" />\n      <p>Select a scheduled subject to determine eligible students.</p>\n    </section>\n  }\n</erp-admin-page>\n" }]
    }], () => [], null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(ExamEligibilityComponent, { className: "ExamEligibilityComponent", filePath: "frontend/src/app/features/admin/exams/exam-eligibility.component.ts", lineNumber: 25 }); })();
