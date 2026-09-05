import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ApiService } from '../../../core/api.service';
import { AdminPageComponent } from '../../../shared/ui/admin-page/admin-page.component';
import { CompactActionMenuComponent, } from '../../../shared/ui/compact-action-menu/compact-action-menu.component';
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
const _forTrack0 = ($index, $item) => $item._id;
function StudentPromotionsComponent_Conditional_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 3);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r0.message());
} }
function StudentPromotionsComponent_Conditional_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 4);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r0.error());
} }
function StudentPromotionsComponent_For_37_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 15);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const course_r2 = ctx.$implicit;
    i0.ɵɵproperty("value", course_r2._id);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(course_r2.name);
} }
function StudentPromotionsComponent_For_45_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 16);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const year_r3 = ctx.$implicit;
    i0.ɵɵproperty("ngValue", year_r3);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1("Year ", year_r3);
} }
function StudentPromotionsComponent_Conditional_46_For_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 16);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const semester_r5 = ctx.$implicit;
    i0.ɵɵproperty("ngValue", semester_r5);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1("Semester ", semester_r5);
} }
function StudentPromotionsComponent_Conditional_46_Template(rf, ctx) { if (rf & 1) {
    const _r4 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "label")(1, "span");
    i0.ɵɵtext(2, "Current semester");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "select", 8);
    i0.ɵɵtwoWayListener("ngModelChange", function StudentPromotionsComponent_Conditional_46_Template_select_ngModelChange_3_listener($event) { i0.ɵɵrestoreView(_r4); const ctx_r0 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r0.currentSemester, $event) || (ctx_r0.currentSemester = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementStart(4, "option", 16);
    i0.ɵɵtext(5, "All semesters");
    i0.ɵɵelementEnd();
    i0.ɵɵrepeaterCreate(6, StudentPromotionsComponent_Conditional_46_For_7_Template, 2, 2, "option", 16, i0.ɵɵrepeaterTrackByIdentity);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(3);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r0.currentSemester);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngValue", null);
    i0.ɵɵadvance(2);
    i0.ɵɵrepeater(ctx_r0.semesters);
} }
function StudentPromotionsComponent_Conditional_61_Template(rf, ctx) { if (rf & 1) {
    const _r6 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 25);
    i0.ɵɵlistener("click", function StudentPromotionsComponent_Conditional_61_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r6); const ctx_r0 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r0.promoteSelected()); });
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵproperty("disabled", ctx_r0.saving());
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r0.saving() ? "Promoting\u2026" : "Promote selected", " ");
} }
function StudentPromotionsComponent_For_84_Conditional_2_Template(rf, ctx) { if (rf & 1) {
    const _r7 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "input", 30);
    i0.ɵɵlistener("change", function StudentPromotionsComponent_For_84_Conditional_2_Template_input_change_0_listener($event) { i0.ɵɵrestoreView(_r7); const item_r8 = i0.ɵɵnextContext().$implicit; const ctx_r0 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r0.toggle(item_r8._id, $event.target.checked)); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r8 = i0.ɵɵnextContext().$implicit;
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵproperty("checked", ctx_r0.selected().has(item_r8._id));
    i0.ɵɵattribute("aria-label", "Select " + item_r8.studentName);
} }
function StudentPromotionsComponent_For_84_Conditional_21_Template(rf, ctx) { if (rf & 1) {
    const _r9 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "erp-compact-action-menu", 31);
    i0.ɵɵlistener("selected", function StudentPromotionsComponent_For_84_Conditional_21_Template_erp_compact_action_menu_selected_0_listener($event) { i0.ɵɵrestoreView(_r9); const item_r8 = i0.ɵɵnextContext().$implicit; const ctx_r0 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r0.handleRowAction($event, item_r8)); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("items", ctx_r0.pendingActions);
} }
function StudentPromotionsComponent_For_84_Conditional_22_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtext(0, " \u2014 ");
} }
function StudentPromotionsComponent_For_84_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "tr")(1, "td");
    i0.ɵɵconditionalCreate(2, StudentPromotionsComponent_For_84_Conditional_2_Template, 1, 2, "input", 26);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "td")(4, "strong");
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "small");
    i0.ɵɵtext(7);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(8, "td");
    i0.ɵɵtext(9);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(10, "td");
    i0.ɵɵtext(11);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(12, "td");
    i0.ɵɵtext(13);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(14, "td")(15, "span", 27);
    i0.ɵɵtext(16);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(17, "td")(18, "span", 27);
    i0.ɵɵtext(19);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(20, "td", 28);
    i0.ɵɵconditionalCreate(21, StudentPromotionsComponent_For_84_Conditional_21_Template, 1, 1, "erp-compact-action-menu", 29)(22, StudentPromotionsComponent_For_84_Conditional_22_Template, 1, 0);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const item_r8 = ctx.$implicit;
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵconditional(item_r8.status === "pending" ? 2 : -1);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(item_r8.studentName);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(item_r8.studentId);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(item_r8.courseName);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(item_r8.academicSession);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r0.currentPeriod(item_r8));
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(item_r8.targetPeriodLabel);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(item_r8.status);
    i0.ɵɵadvance(2);
    i0.ɵɵconditional(item_r8.status === "pending" ? 21 : 22);
} }
function StudentPromotionsComponent_ForEmpty_85_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "tr")(1, "td", 32);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", ctx_r0.loading() ? "Loading student promotions\u2026" : "No matching student promotions.", " ");
} }
export class StudentPromotionsComponent {
    api = inject(ApiService);
    items = signal([], ...(ngDevMode ? [{ debugName: "items" }] : /* istanbul ignore next */ []));
    courses = signal([], ...(ngDevMode ? [{ debugName: "courses" }] : /* istanbul ignore next */ []));
    selected = signal(new Set(), ...(ngDevMode ? [{ debugName: "selected" }] : /* istanbul ignore next */ []));
    loading = signal(false, ...(ngDevMode ? [{ debugName: "loading" }] : /* istanbul ignore next */ []));
    saving = signal(false, ...(ngDevMode ? [{ debugName: "saving" }] : /* istanbul ignore next */ []));
    message = signal('', ...(ngDevMode ? [{ debugName: "message" }] : /* istanbul ignore next */ []));
    error = signal('', ...(ngDevMode ? [{ debugName: "error" }] : /* istanbul ignore next */ []));
    pendingActions = [
        { id: 'promote', label: 'Promote student', icon: 'transfer' },
    ];
    mode = 'semester';
    status = 'pending';
    search = '';
    academicSession = '';
    courseId = '';
    currentAcademicYear = null;
    currentSemester = null;
    academicYears = Array.from({ length: 10 }, (_, index) => index + 1);
    semesters = Array.from({ length: 20 }, (_, index) => index + 1);
    constructor() {
        this.api.feeCourseOptions().subscribe(({ items }) => this.courses.set(items));
        this.load();
    }
    load() {
        this.loading.set(true);
        this.error.set('');
        this.selected.set(new Set());
        this.api
            .studentPromotions({
            mode: this.mode,
            status: this.status,
            search: this.search.trim(),
            academicSession: this.academicSession.trim(),
            courseId: this.courseId,
            currentAcademicYear: this.currentAcademicYear,
            currentSemester: this.mode === 'semester' ? this.currentSemester : null,
        })
            .subscribe({
            next: ({ items }) => {
                this.items.set(items);
                this.loading.set(false);
            },
            error: (error) => {
                this.error.set(error.error?.message || 'Could not load student promotions.');
                this.loading.set(false);
            },
        });
    }
    changeMode(mode) {
        this.mode = mode;
        if (mode === 'year')
            this.currentSemester = null;
        this.load();
    }
    resetFilters() {
        this.search = '';
        this.academicSession = '';
        this.courseId = '';
        this.currentAcademicYear = null;
        this.currentSemester = null;
        this.status = 'pending';
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
        const pending = this.items().filter((item) => item.status === 'pending');
        this.selected.set(new Set(checked ? pending.map((item) => item._id) : []));
    }
    promoteOne(item) {
        this.promote([item._id]);
    }
    handleRowAction(action, item) {
        if (action === 'promote')
            this.promoteOne(item);
    }
    promoteSelected() {
        if (!this.selected().size) {
            this.error.set('Select at least one pending student promotion.');
            return;
        }
        this.promote([...this.selected()]);
    }
    currentPeriod(item) {
        return item.mode === 'semester'
            ? `Semester ${item.fromSemester}`
            : `Year ${item.fromAcademicYear}`;
    }
    promote(progressionIds) {
        if (this.saving())
            return;
        this.saving.set(true);
        this.error.set('');
        this.api.promoteStudents(progressionIds).subscribe({
            next: ({ promoted, requested, results }) => {
                const failures = results.filter((result) => !result.success).map((result) => result.reason);
                if (promoted)
                    this.message.set(`${promoted} of ${requested} student(s) promoted.${failures.length ? ` ${failures.join(' ')}` : ''}`);
                else
                    this.error.set(failures.join(' ') || 'No students were promoted.');
                this.saving.set(false);
                if (promoted)
                    this.load();
            },
            error: (error) => {
                this.error.set(error.error?.message || 'Could not promote the selected students.');
                this.saving.set(false);
            },
        });
    }
    static ɵfac = function StudentPromotionsComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || StudentPromotionsComponent)(); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: StudentPromotionsComponent, selectors: [["erp-student-promotions"]], decls: 86, vars: 21, consts: [["eyebrow", "Admissions", "title", "Student Promotion", "description", "Promote students only after their next semester or year fee period has been prepared.", "variant", "minimal", "layout", "collection"], ["page-actions", "", 1, "erp-table-toolbar__actions"], ["type", "button", 1, "erp-button", 3, "click"], [1, "erp-notice", "erp-notice--success"], [1, "erp-notice", "erp-notice--error"], [1, "erp-card", "erp-card--padded"], [1, "erp-form-grid"], ["type", "search", "placeholder", "Student name or ID", 1, "erp-control", 3, "ngModelChange", "ngModel"], [1, "erp-control", 3, "ngModelChange", "ngModel"], ["value", "pending"], ["value", "promoted"], ["value", "cancelled"], ["value", "all"], ["placeholder", "e.g. 2026-2027", 1, "erp-control", 3, "ngModelChange", "ngModel"], ["value", ""], [3, "value"], [3, "ngValue"], [1, "erp-table-toolbar__actions"], ["type", "button", 1, "erp-button", "erp-button--primary", 3, "click"], ["type", "button", 1, "erp-button", "erp-button--secondary", 3, "click"], [1, "erp-card", "erp-table-shell"], [1, "erp-table-toolbar"], ["type", "button", 1, "erp-button", "erp-button--primary", 3, "disabled"], [1, "erp-table-shell__scroll"], ["type", "checkbox", "aria-label", "Select all pending promotions", 3, "change", "checked"], ["type", "button", 1, "erp-button", "erp-button--primary", 3, "click", "disabled"], ["type", "checkbox", 3, "checked"], [1, "erp-status"], [1, "erp-table-shell__actions"], [3, "items"], ["type", "checkbox", 3, "change", "checked"], [3, "selected", "items"], ["colspan", "8", 1, "erp-empty-state"]], template: function StudentPromotionsComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "erp-admin-page", 0)(1, "div", 1)(2, "button", 2);
            i0.ɵɵlistener("click", function StudentPromotionsComponent_Template_button_click_2_listener() { return ctx.changeMode("semester"); });
            i0.ɵɵtext(3, " Semester-wise ");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(4, "button", 2);
            i0.ɵɵlistener("click", function StudentPromotionsComponent_Template_button_click_4_listener() { return ctx.changeMode("year"); });
            i0.ɵɵtext(5, " Year-wise ");
            i0.ɵɵelementEnd()();
            i0.ɵɵconditionalCreate(6, StudentPromotionsComponent_Conditional_6_Template, 2, 1, "p", 3);
            i0.ɵɵconditionalCreate(7, StudentPromotionsComponent_Conditional_7_Template, 2, 1, "p", 4);
            i0.ɵɵelementStart(8, "section", 5)(9, "div", 6)(10, "label")(11, "span");
            i0.ɵɵtext(12, "Search");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(13, "input", 7);
            i0.ɵɵtwoWayListener("ngModelChange", function StudentPromotionsComponent_Template_input_ngModelChange_13_listener($event) { i0.ɵɵtwoWayBindingSet(ctx.search, $event) || (ctx.search = $event); return $event; });
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(14, "label")(15, "span");
            i0.ɵɵtext(16, "Status");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(17, "select", 8);
            i0.ɵɵtwoWayListener("ngModelChange", function StudentPromotionsComponent_Template_select_ngModelChange_17_listener($event) { i0.ɵɵtwoWayBindingSet(ctx.status, $event) || (ctx.status = $event); return $event; });
            i0.ɵɵelementStart(18, "option", 9);
            i0.ɵɵtext(19, "Pending");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(20, "option", 10);
            i0.ɵɵtext(21, "Promoted");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(22, "option", 11);
            i0.ɵɵtext(23, "Cancelled");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(24, "option", 12);
            i0.ɵɵtext(25, "All");
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(26, "label")(27, "span");
            i0.ɵɵtext(28, "Session");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(29, "input", 13);
            i0.ɵɵtwoWayListener("ngModelChange", function StudentPromotionsComponent_Template_input_ngModelChange_29_listener($event) { i0.ɵɵtwoWayBindingSet(ctx.academicSession, $event) || (ctx.academicSession = $event); return $event; });
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(30, "label")(31, "span");
            i0.ɵɵtext(32, "Course");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(33, "select", 8);
            i0.ɵɵtwoWayListener("ngModelChange", function StudentPromotionsComponent_Template_select_ngModelChange_33_listener($event) { i0.ɵɵtwoWayBindingSet(ctx.courseId, $event) || (ctx.courseId = $event); return $event; });
            i0.ɵɵelementStart(34, "option", 14);
            i0.ɵɵtext(35, "All courses");
            i0.ɵɵelementEnd();
            i0.ɵɵrepeaterCreate(36, StudentPromotionsComponent_For_37_Template, 2, 2, "option", 15, _forTrack0);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(38, "label")(39, "span");
            i0.ɵɵtext(40, "Current year");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(41, "select", 8);
            i0.ɵɵtwoWayListener("ngModelChange", function StudentPromotionsComponent_Template_select_ngModelChange_41_listener($event) { i0.ɵɵtwoWayBindingSet(ctx.currentAcademicYear, $event) || (ctx.currentAcademicYear = $event); return $event; });
            i0.ɵɵelementStart(42, "option", 16);
            i0.ɵɵtext(43, "All years");
            i0.ɵɵelementEnd();
            i0.ɵɵrepeaterCreate(44, StudentPromotionsComponent_For_45_Template, 2, 2, "option", 16, i0.ɵɵrepeaterTrackByIdentity);
            i0.ɵɵelementEnd()();
            i0.ɵɵconditionalCreate(46, StudentPromotionsComponent_Conditional_46_Template, 8, 2, "label");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(47, "div", 17)(48, "button", 18);
            i0.ɵɵlistener("click", function StudentPromotionsComponent_Template_button_click_48_listener() { return ctx.load(); });
            i0.ɵɵtext(49, " Apply filters ");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(50, "button", 19);
            i0.ɵɵlistener("click", function StudentPromotionsComponent_Template_button_click_50_listener() { return ctx.resetFilters(); });
            i0.ɵɵtext(51, " Reset ");
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(52, "section", 20)(53, "div", 21)(54, "div")(55, "h2");
            i0.ɵɵtext(56, " Student records ");
            i0.ɵɵelementStart(57, "small");
            i0.ɵɵtext(58);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(59, "p");
            i0.ɵɵtext(60, "Creating a fee does not change the academic period. Promotion happens only here.");
            i0.ɵɵelementEnd()();
            i0.ɵɵconditionalCreate(61, StudentPromotionsComponent_Conditional_61_Template, 2, 2, "button", 22);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(62, "div", 23)(63, "table")(64, "thead")(65, "tr")(66, "th")(67, "input", 24);
            i0.ɵɵlistener("change", function StudentPromotionsComponent_Template_input_change_67_listener($event) { return ctx.toggleAll($event.target.checked); });
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(68, "th");
            i0.ɵɵtext(69, "Student");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(70, "th");
            i0.ɵɵtext(71, "Course");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(72, "th");
            i0.ɵɵtext(73, "Session");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(74, "th");
            i0.ɵɵtext(75, "Current period");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(76, "th");
            i0.ɵɵtext(77, "Prepared fee period");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(78, "th");
            i0.ɵɵtext(79, "Status");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(80, "th");
            i0.ɵɵtext(81, "Action");
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(82, "tbody");
            i0.ɵɵrepeaterCreate(83, StudentPromotionsComponent_For_84_Template, 23, 9, "tr", null, _forTrack0, false, StudentPromotionsComponent_ForEmpty_85_Template, 3, 1, "tr");
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
            i0.ɵɵadvance(6);
            i0.ɵɵtwoWayProperty("ngModel", ctx.search);
            i0.ɵɵadvance(4);
            i0.ɵɵtwoWayProperty("ngModel", ctx.status);
            i0.ɵɵadvance(12);
            i0.ɵɵtwoWayProperty("ngModel", ctx.academicSession);
            i0.ɵɵadvance(4);
            i0.ɵɵtwoWayProperty("ngModel", ctx.courseId);
            i0.ɵɵadvance(3);
            i0.ɵɵrepeater(ctx.courses());
            i0.ɵɵadvance(5);
            i0.ɵɵtwoWayProperty("ngModel", ctx.currentAcademicYear);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngValue", null);
            i0.ɵɵadvance(2);
            i0.ɵɵrepeater(ctx.academicYears);
            i0.ɵɵadvance(2);
            i0.ɵɵconditional(ctx.mode === "semester" ? 46 : -1);
            i0.ɵɵadvance(12);
            i0.ɵɵtextInterpolate(ctx.items().length);
            i0.ɵɵadvance(3);
            i0.ɵɵconditional(ctx.status === "pending" || ctx.status === "all" ? 61 : -1);
            i0.ɵɵadvance(6);
            i0.ɵɵproperty("checked", ctx.selected().size > 0 && ctx.selected().size === ctx.items().length);
            i0.ɵɵadvance(16);
            i0.ɵɵrepeater(ctx.items());
        } }, dependencies: [AdminPageComponent,
            CompactActionMenuComponent,
            FormsModule, i1.NgSelectOption, i1.ɵNgSelectMultipleOption, i1.DefaultValueAccessor, i1.SelectControlValueAccessor, i1.NgControlStatus, i1.NgModel], encapsulation: 2, changeDetection: 0 });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(StudentPromotionsComponent, [{
        type: Component,
        args: [{ selector: 'erp-student-promotions', imports: [
                    AdminPageComponent,
                    CompactActionMenuComponent,
                    FormsModule,
                ], changeDetection: ChangeDetectionStrategy.OnPush, template: "<erp-admin-page\n  eyebrow=\"Admissions\"\n  title=\"Student Promotion\"\n  description=\"Promote students only after their next semester or year fee period has been prepared.\"\n  variant=\"minimal\"\n  layout=\"collection\"\n>\n  <div page-actions class=\"erp-table-toolbar__actions\">\n    <button\n      class=\"erp-button\"\n      [class.erp-button--primary]=\"mode === 'semester'\"\n      [class.erp-button--secondary]=\"mode !== 'semester'\"\n      type=\"button\"\n      (click)=\"changeMode('semester')\"\n    >\n      Semester-wise\n    </button>\n    <button\n      class=\"erp-button\"\n      [class.erp-button--primary]=\"mode === 'year'\"\n      [class.erp-button--secondary]=\"mode !== 'year'\"\n      type=\"button\"\n      (click)=\"changeMode('year')\"\n    >\n      Year-wise\n    </button>\n  </div>\n\n  @if (message()) {\n    <p class=\"erp-notice erp-notice--success\">{{ message() }}</p>\n  }\n  @if (error()) {\n    <p class=\"erp-notice erp-notice--error\">{{ error() }}</p>\n  }\n\n  <section class=\"erp-card erp-card--padded\">\n    <div class=\"erp-form-grid\">\n      <label\n        ><span>Search</span\n        ><input\n          class=\"erp-control\"\n          type=\"search\"\n          placeholder=\"Student name or ID\"\n          [(ngModel)]=\"search\"\n      /></label>\n      <label\n        ><span>Status</span\n        ><select class=\"erp-control\" [(ngModel)]=\"status\">\n          <option value=\"pending\">Pending</option>\n          <option value=\"promoted\">Promoted</option>\n          <option value=\"cancelled\">Cancelled</option>\n          <option value=\"all\">All</option>\n        </select></label\n      >\n      <label\n        ><span>Session</span\n        ><input class=\"erp-control\" placeholder=\"e.g. 2026-2027\" [(ngModel)]=\"academicSession\"\n      /></label>\n      <label\n        ><span>Course</span\n        ><select class=\"erp-control\" [(ngModel)]=\"courseId\">\n          <option value=\"\">All courses</option>\n          @for (course of courses(); track course._id) {\n            <option [value]=\"course._id\">{{ course.name }}</option>\n          }\n        </select></label\n      >\n      <label\n        ><span>Current year</span\n        ><select class=\"erp-control\" [(ngModel)]=\"currentAcademicYear\">\n          <option [ngValue]=\"null\">All years</option>\n          @for (year of academicYears; track year) {\n            <option [ngValue]=\"year\">Year {{ year }}</option>\n          }\n        </select></label\n      >\n      @if (mode === 'semester') {\n        <label\n          ><span>Current semester</span\n          ><select class=\"erp-control\" [(ngModel)]=\"currentSemester\">\n            <option [ngValue]=\"null\">All semesters</option>\n            @for (semester of semesters; track semester) {\n              <option [ngValue]=\"semester\">Semester {{ semester }}</option>\n            }\n          </select></label\n        >\n      }\n    </div>\n    <div class=\"erp-table-toolbar__actions\">\n      <button class=\"erp-button erp-button--primary\" type=\"button\" (click)=\"load()\">\n        Apply filters\n      </button>\n      <button class=\"erp-button erp-button--secondary\" type=\"button\" (click)=\"resetFilters()\">\n        Reset\n      </button>\n    </div>\n  </section>\n\n  <section class=\"erp-card erp-table-shell\">\n    <div class=\"erp-table-toolbar\">\n      <div>\n        <h2>\n          Student records <small>{{ items().length }}</small>\n        </h2>\n        <p>Creating a fee does not change the academic period. Promotion happens only here.</p>\n      </div>\n      @if (status === 'pending' || status === 'all') {\n        <button\n          class=\"erp-button erp-button--primary\"\n          type=\"button\"\n          [disabled]=\"saving()\"\n          (click)=\"promoteSelected()\"\n        >\n          {{ saving() ? 'Promoting\u2026' : 'Promote selected' }}\n        </button>\n      }\n    </div>\n    <div class=\"erp-table-shell__scroll\">\n      <table>\n        <thead>\n          <tr>\n            <th>\n              <input\n                type=\"checkbox\"\n                aria-label=\"Select all pending promotions\"\n                [checked]=\"selected().size > 0 && selected().size === items().length\"\n                (change)=\"toggleAll($any($event.target).checked)\"\n              />\n            </th>\n            <th>Student</th>\n            <th>Course</th>\n            <th>Session</th>\n            <th>Current period</th>\n            <th>Prepared fee period</th>\n            <th>Status</th>\n            <th>Action</th>\n          </tr>\n        </thead>\n        <tbody>\n          @for (item of items(); track item._id) {\n            <tr>\n              <td>\n                @if (item.status === 'pending') {\n                  <input\n                    type=\"checkbox\"\n                    [checked]=\"selected().has(item._id)\"\n                    [attr.aria-label]=\"'Select ' + item.studentName\"\n                    (change)=\"toggle(item._id, $any($event.target).checked)\"\n                  />\n                }\n              </td>\n              <td>\n                <strong>{{ item.studentName }}</strong\n                ><small>{{ item.studentId }}</small>\n              </td>\n              <td>{{ item.courseName }}</td>\n              <td>{{ item.academicSession }}</td>\n              <td>{{ currentPeriod(item) }}</td>\n              <td>\n                <span class=\"erp-status\">{{ item.targetPeriodLabel }}</span>\n              </td>\n              <td>\n                <span class=\"erp-status\">{{ item.status }}</span>\n              </td>\n              <td class=\"erp-table-shell__actions\">\n                @if (item.status === 'pending') {\n                  <erp-compact-action-menu\n                    [items]=\"pendingActions\"\n                    (selected)=\"handleRowAction($event, item)\"\n                  />\n                } @else {\n                  \u2014\n                }\n              </td>\n            </tr>\n          } @empty {\n            <tr>\n              <td colspan=\"8\" class=\"erp-empty-state\">\n                {{ loading() ? 'Loading student promotions\u2026' : 'No matching student promotions.' }}\n              </td>\n            </tr>\n          }\n        </tbody>\n      </table>\n    </div>\n  </section>\n</erp-admin-page>\n" }]
    }], () => [], null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(StudentPromotionsComponent, { className: "StudentPromotionsComponent", filePath: "frontend/src/app/features/admin/student-promotions/student-promotions.component.ts", lineNumber: 21 }); })();
