import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { ApiService } from '../../../core/api.service';
import { AdminPageComponent } from '../../../shared/ui/admin-page/admin-page.component';
import * as i0 from "@angular/core";
const _forTrack0 = ($index, $item) => $item._id;
function FeeProgressionComponent_Conditional_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 3);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r0.message());
} }
function FeeProgressionComponent_Conditional_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 4);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r0.error());
} }
function FeeProgressionComponent_For_41_Template(rf, ctx) { if (rf & 1) {
    const _r2 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "tr")(1, "td")(2, "input", 10);
    i0.ɵɵlistener("change", function FeeProgressionComponent_For_41_Template_input_change_2_listener($event) { const item_r3 = i0.ɵɵrestoreView(_r2).$implicit; const ctx_r0 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r0.toggle(item_r3._id, $event.target.checked)); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(3, "td")(4, "strong");
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
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(12, "td")(13, "span", 11);
    i0.ɵɵtext(14);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(15, "td");
    i0.ɵɵtext(16);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(17, "td")(18, "button", 7);
    i0.ɵɵlistener("click", function FeeProgressionComponent_For_41_Template_button_click_18_listener() { const item_r3 = i0.ɵɵrestoreView(_r2).$implicit; const ctx_r0 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r0.createFor(item_r3)); });
    i0.ɵɵtext(19);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const item_r3 = ctx.$implicit;
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("checked", ctx_r0.selected().has(item_r3._id));
    i0.ɵɵattribute("aria-label", "Select " + item_r3.studentName);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(item_r3.studentName);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(item_r3.studentId);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(item_r3.courseName);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", ctx_r0.mode === "semester" ? "Semester " + item_r3.currentSemester : "Year " + item_r3.currentAcademicYear, " ");
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(item_r3.nextPeriodLabel);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(item_r3.academicSession);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("disabled", ctx_r0.saving());
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" Create ", item_r3.nextPeriodLabel, " ");
} }
function FeeProgressionComponent_ForEmpty_42_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "tr")(1, "td", 12);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", ctx_r0.loading() ? "Loading eligible students\u2026" : "No students are currently eligible for this progression.", " ");
} }
export class FeeProgressionComponent {
    api = inject(ApiService);
    items = signal([], ...(ngDevMode ? [{ debugName: "items" }] : /* istanbul ignore next */ []));
    selected = signal(new Set(), ...(ngDevMode ? [{ debugName: "selected" }] : /* istanbul ignore next */ []));
    loading = signal(false, ...(ngDevMode ? [{ debugName: "loading" }] : /* istanbul ignore next */ []));
    saving = signal(false, ...(ngDevMode ? [{ debugName: "saving" }] : /* istanbul ignore next */ []));
    message = signal('', ...(ngDevMode ? [{ debugName: "message" }] : /* istanbul ignore next */ []));
    error = signal('', ...(ngDevMode ? [{ debugName: "error" }] : /* istanbul ignore next */ []));
    mode = 'semester';
    constructor() {
        this.load();
    }
    load() {
        this.loading.set(true);
        this.error.set('');
        this.selected.set(new Set());
        this.api.feeProgressionCandidates(this.mode).subscribe({
            next: ({ items }) => {
                this.items.set(items);
                this.loading.set(false);
            },
            error: (error) => {
                this.error.set(error.error?.message || 'Could not load eligible students.');
                this.loading.set(false);
            },
        });
    }
    changeMode(mode) {
        this.mode = mode;
        this.message.set(mode === 'semester'
            ? 'Showing students eligible for their next semester. Select students or use the row action.'
            : 'Showing students eligible for their next academic year. Select students or use the row action.');
        this.load();
    }
    toggle(id, checked) {
        this.selected.update((current) => {
            const next = new Set(current);
            if (checked)
                next.add(id);
            else
                next.delete(id);
            return next;
        });
    }
    toggleAll(checked) {
        this.selected.set(new Set(checked ? this.items().map((item) => item._id) : []));
    }
    createFees() {
        if (this.saving())
            return;
        if (!this.selected().size) {
            this.error.set('Select at least one eligible student before creating the next fee period.');
            return;
        }
        this.saving.set(true);
        this.error.set('');
        this.api
            .progressStudentFees({
            mode: this.mode,
            studentAdmissionIds: [...this.selected()],
            penalty: { enabled: false },
        })
            .subscribe({
            next: ({ created, promotionsCreated, studentsProcessed, results }) => {
                const failures = results
                    .flatMap((result) => [result.reason, ...result.skippedKinds.map((item) => item.reason)])
                    .filter(Boolean);
                const resultMessage = `${created} next-period ledger(s) and ${promotionsCreated} pending promotion record(s) prepared for ${studentsProcessed} student(s).${failures.length ? ` ${failures.join(' ')}` : ''}`;
                if (created || promotionsCreated)
                    this.message.set(resultMessage);
                else
                    this.error.set(resultMessage);
                this.saving.set(false);
                if (created || promotionsCreated)
                    this.load();
            },
            error: (error) => {
                this.error.set(error.error?.message || 'Could not create the next-period fees.');
                this.saving.set(false);
            },
        });
    }
    createFor(item) {
        if (this.saving())
            return;
        this.selected.set(new Set([item._id]));
        this.createFees();
    }
    static ɵfac = function FeeProgressionComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || FeeProgressionComponent)(); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: FeeProgressionComponent, selectors: [["erp-fee-progression"]], decls: 43, vars: 16, consts: [["eyebrow", "Fee Management", "title", "Next Semester / Year Fee", "description", "Prepare the next hidden fee period for eligible students. Publication and fines are controlled by Fee change & publication.", "variant", "minimal", "layout", "collection"], ["page-actions", "", 1, "erp-table-toolbar__actions"], ["type", "button", 1, "erp-button", 3, "click"], [1, "erp-notice", "erp-notice--success"], [1, "erp-notice", "erp-notice--error"], [1, "erp-card", "erp-table-shell"], [1, "erp-table-toolbar"], ["type", "button", 1, "erp-button", "erp-button--primary", 3, "click", "disabled"], [1, "erp-table-shell__scroll"], ["type", "checkbox", "aria-label", "Select all", 3, "change", "checked"], ["type", "checkbox", 3, "change", "checked"], [1, "erp-status"], ["colspan", "8", 1, "erp-empty-state"]], template: function FeeProgressionComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "erp-admin-page", 0)(1, "div", 1)(2, "button", 2);
            i0.ɵɵlistener("click", function FeeProgressionComponent_Template_button_click_2_listener() { return ctx.changeMode("semester"); });
            i0.ɵɵtext(3, " Semester-wise students ");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(4, "button", 2);
            i0.ɵɵlistener("click", function FeeProgressionComponent_Template_button_click_4_listener() { return ctx.changeMode("year"); });
            i0.ɵɵtext(5, " Full-year students ");
            i0.ɵɵelementEnd()();
            i0.ɵɵconditionalCreate(6, FeeProgressionComponent_Conditional_6_Template, 2, 1, "p", 3);
            i0.ɵɵconditionalCreate(7, FeeProgressionComponent_Conditional_7_Template, 2, 1, "p", 4);
            i0.ɵɵelementStart(8, "section", 5)(9, "div", 6)(10, "div")(11, "h2");
            i0.ɵɵtext(12);
            i0.ɵɵelementStart(13, "small");
            i0.ɵɵtext(14);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(15, "p");
            i0.ɵɵtext(16, "Only students with another configured course period are listed.");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(17, "button", 7);
            i0.ɵɵlistener("click", function FeeProgressionComponent_Template_button_click_17_listener() { return ctx.createFees(); });
            i0.ɵɵtext(18);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(19, "div", 8)(20, "table")(21, "thead")(22, "tr")(23, "th")(24, "input", 9);
            i0.ɵɵlistener("change", function FeeProgressionComponent_Template_input_change_24_listener($event) { return ctx.toggleAll($event.target.checked); });
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(25, "th");
            i0.ɵɵtext(26, "Student");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(27, "th");
            i0.ɵɵtext(28, "Student ID");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(29, "th");
            i0.ɵɵtext(30, "Course");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(31, "th");
            i0.ɵɵtext(32, "Current period");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(33, "th");
            i0.ɵɵtext(34, "Next period");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(35, "th");
            i0.ɵɵtext(36, "Session");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(37, "th");
            i0.ɵɵtext(38, "Action");
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(39, "tbody");
            i0.ɵɵrepeaterCreate(40, FeeProgressionComponent_For_41_Template, 20, 10, "tr", null, _forTrack0, false, FeeProgressionComponent_ForEmpty_42_Template, 3, 1, "tr");
            i0.ɵɵelementEnd()()()()();
        } if (rf & 2) {
            i0.ɵɵadvance(2);
            i0.ɵɵclassProp("erp-button--primary", ctx.mode === "semester")("erp-button--secondary", ctx.mode !== "semester");
            i0.ɵɵadvance(2);
            i0.ɵɵclassProp("erp-button--primary", ctx.mode === "year")("erp-button--secondary", ctx.mode !== "year");
            i0.ɵɵadvance(2);
            i0.ɵɵconditional(ctx.message() ? 6 : -1);
            i0.ɵɵadvance();
            i0.ɵɵconditional(ctx.error() ? 7 : -1);
            i0.ɵɵadvance(5);
            i0.ɵɵtextInterpolate1(" ", ctx.mode === "semester" ? "Semester-wise students" : "Full-year students", " ");
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate(ctx.items().length);
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("disabled", ctx.saving());
            i0.ɵɵadvance();
            i0.ɵɵtextInterpolate1(" ", ctx.saving() ? "Creating\u2026" : ctx.mode === "semester" ? "Create next semester for selected" : "Create next year for selected", " ");
            i0.ɵɵadvance(6);
            i0.ɵɵproperty("checked", ctx.items().length > 0 && ctx.selected().size === ctx.items().length);
            i0.ɵɵadvance(16);
            i0.ɵɵrepeater(ctx.items());
        } }, dependencies: [AdminPageComponent], encapsulation: 2, changeDetection: 0 });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(FeeProgressionComponent, [{
        type: Component,
        args: [{ selector: 'erp-fee-progression', imports: [AdminPageComponent], changeDetection: ChangeDetectionStrategy.OnPush, template: "<erp-admin-page\n  eyebrow=\"Fee Management\"\n  title=\"Next Semester / Year Fee\"\n  description=\"Prepare the next hidden fee period for eligible students. Publication and fines are controlled by Fee change & publication.\"\n  variant=\"minimal\"\n  layout=\"collection\"\n>\n  <div page-actions class=\"erp-table-toolbar__actions\">\n    <button\n      class=\"erp-button\"\n      [class.erp-button--primary]=\"mode === 'semester'\"\n      [class.erp-button--secondary]=\"mode !== 'semester'\"\n      type=\"button\"\n      (click)=\"changeMode('semester')\"\n    >\n      Semester-wise students\n    </button>\n    <button\n      class=\"erp-button\"\n      [class.erp-button--primary]=\"mode === 'year'\"\n      [class.erp-button--secondary]=\"mode !== 'year'\"\n      type=\"button\"\n      (click)=\"changeMode('year')\"\n    >\n      Full-year students\n    </button>\n  </div>\n\n  @if (message()) {\n    <p class=\"erp-notice erp-notice--success\">{{ message() }}</p>\n  }\n  @if (error()) {\n    <p class=\"erp-notice erp-notice--error\">{{ error() }}</p>\n  }\n\n  <section class=\"erp-card erp-table-shell\">\n    <div class=\"erp-table-toolbar\">\n      <div>\n        <h2>\n          {{ mode === 'semester' ? 'Semester-wise students' : 'Full-year students' }}\n          <small>{{ items().length }}</small>\n        </h2>\n        <p>Only students with another configured course period are listed.</p>\n      </div>\n      <button\n        class=\"erp-button erp-button--primary\"\n        type=\"button\"\n        [disabled]=\"saving()\"\n        (click)=\"createFees()\"\n      >\n        {{\n          saving()\n            ? 'Creating\u2026'\n            : mode === 'semester'\n              ? 'Create next semester for selected'\n              : 'Create next year for selected'\n        }}\n      </button>\n    </div>\n    <div class=\"erp-table-shell__scroll\">\n      <table>\n        <thead>\n          <tr>\n            <th>\n              <input\n                type=\"checkbox\"\n                aria-label=\"Select all\"\n                [checked]=\"items().length > 0 && selected().size === items().length\"\n                (change)=\"toggleAll($any($event.target).checked)\"\n              />\n            </th>\n            <th>Student</th>\n            <th>Student ID</th>\n            <th>Course</th>\n            <th>Current period</th>\n            <th>Next period</th>\n            <th>Session</th>\n            <th>Action</th>\n          </tr>\n        </thead>\n        <tbody>\n          @for (item of items(); track item._id) {\n            <tr>\n              <td>\n                <input\n                  type=\"checkbox\"\n                  [checked]=\"selected().has(item._id)\"\n                  [attr.aria-label]=\"'Select ' + item.studentName\"\n                  (change)=\"toggle(item._id, $any($event.target).checked)\"\n                />\n              </td>\n              <td>\n                <strong>{{ item.studentName }}</strong>\n              </td>\n              <td>{{ item.studentId }}</td>\n              <td>{{ item.courseName }}</td>\n              <td>\n                {{\n                  mode === 'semester'\n                    ? 'Semester ' + item.currentSemester\n                    : 'Year ' + item.currentAcademicYear\n                }}\n              </td>\n              <td>\n                <span class=\"erp-status\">{{ item.nextPeriodLabel }}</span>\n              </td>\n              <td>{{ item.academicSession }}</td>\n              <td>\n                <button\n                  class=\"erp-button erp-button--primary\"\n                  type=\"button\"\n                  [disabled]=\"saving()\"\n                  (click)=\"createFor(item)\"\n                >\n                  Create {{ item.nextPeriodLabel }}\n                </button>\n              </td>\n            </tr>\n          } @empty {\n            <tr>\n              <td colspan=\"8\" class=\"erp-empty-state\">\n                {{\n                  loading()\n                    ? 'Loading eligible students\u2026'\n                    : 'No students are currently eligible for this progression.'\n                }}\n              </td>\n            </tr>\n          }\n        </tbody>\n      </table>\n    </div>\n  </section>\n</erp-admin-page>\n" }]
    }], () => [], null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(FeeProgressionComponent, { className: "FeeProgressionComponent", filePath: "frontend/src/app/features/admin/fee-progression/fee-progression.component.ts", lineNumber: 12 }); })();
