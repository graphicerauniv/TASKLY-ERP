import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { forkJoin } from 'rxjs';
import { ApiService } from '../../../core/api.service';
import { AdminDrawerComponent } from '../../../shared/ui/admin-drawer/admin-drawer.component';
import { AdminIllustrationComponent } from '../../../shared/ui/admin-illustration/admin-illustration.component';
import { AdminPageComponent } from '../../../shared/ui/admin-page/admin-page.component';
import { CompactActionMenuComponent, } from '../../../shared/ui/compact-action-menu/compact-action-menu.component';
import { ConfirmDialogComponent } from '../../../shared/ui/confirm-dialog/confirm-dialog.component';
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
const _forTrack0 = ($index, $item) => $item._id;
const _forTrack1 = ($index, $item) => $item.value;
function ExamSchedulesComponent_Conditional_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 2);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r0.message());
} }
function ExamSchedulesComponent_Conditional_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 3);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r0.error());
} }
function ExamSchedulesComponent_For_37_Template(rf, ctx) { if (rf & 1) {
    const _r2 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "tr")(1, "td")(2, "strong");
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(4, "td");
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "td")(7, "strong");
    i0.ɵɵtext(8);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(9, "small");
    i0.ɵɵtext(10);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(11, "td");
    i0.ɵɵtext(12);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(13, "td");
    i0.ɵɵtext(14);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(15, "td");
    i0.ɵɵtext(16);
    i0.ɵɵelementStart(17, "small");
    i0.ɵɵtext(18);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(19, "td")(20, "span", 26);
    i0.ɵɵtext(21);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(22, "td", 8)(23, "erp-compact-action-menu", 27);
    i0.ɵɵlistener("selected", function ExamSchedulesComponent_For_37_Template_erp_compact_action_menu_selected_23_listener($event) { const item_r3 = i0.ɵɵrestoreView(_r2).$implicit; const ctx_r0 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r0.handleAction($event, item_r3)); });
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const item_r3 = ctx.$implicit;
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(item_r3.caption);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(item_r3.academicSession);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(item_r3.collegeName);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(item_r3.universityName);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(item_r3.semesterParity === "odd" ? "Odd" : "Even");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(item_r3.examTypeName);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" Theory: ", item_r3.theoryQuestionViewCount, " ");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1("Practical: ", item_r3.practicalQuestionViewCount);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(item_r3.isActive ? "Active" : "Inactive");
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("items", ctx_r0.rowActions());
} }
function ExamSchedulesComponent_ForEmpty_38_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "tr")(1, "td", 28);
    i0.ɵɵelement(2, "erp-admin-illustration", 29);
    i0.ɵɵelementStart(3, "p");
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(ctx_r0.loading() ? "Loading exam schedules\u2026" : "No exam schedules found.");
} }
function ExamSchedulesComponent_Conditional_40_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 3);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r0.error());
} }
function ExamSchedulesComponent_For_50_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 14);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r4 = ctx.$implicit;
    i0.ɵɵproperty("value", item_r4._id);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(item_r4.name);
} }
function ExamSchedulesComponent_For_58_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 14);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r5 = ctx.$implicit;
    i0.ɵɵproperty("value", item_r5._id);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(item_r5.name);
} }
function ExamSchedulesComponent_For_66_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 14);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r6 = ctx.$implicit;
    i0.ɵɵproperty("value", item_r6._id);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(item_r6.name);
} }
function ExamSchedulesComponent_For_82_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 14);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r7 = ctx.$implicit;
    i0.ɵɵproperty("value", item_r7.value);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(item_r7.label);
} }
function apiMessage(error, fallback) {
    if (typeof error === 'object' && error && 'error' in error) {
        const message = error.error?.message;
        if (typeof message === 'string')
            return message;
    }
    return fallback;
}
export class ExamSchedulesComponent {
    api = inject(ApiService);
    schedules = signal([], ...(ngDevMode ? [{ debugName: "schedules" }] : /* istanbul ignore next */ []));
    masters = signal([], ...(ngDevMode ? [{ debugName: "masters" }] : /* istanbul ignore next */ []));
    loading = signal(true, ...(ngDevMode ? [{ debugName: "loading" }] : /* istanbul ignore next */ []));
    saving = signal(false, ...(ngDevMode ? [{ debugName: "saving" }] : /* istanbul ignore next */ []));
    drawerOpen = signal(false, ...(ngDevMode ? [{ debugName: "drawerOpen" }] : /* istanbul ignore next */ []));
    editingId = signal(null, ...(ngDevMode ? [{ debugName: "editingId" }] : /* istanbul ignore next */ []));
    deleteTarget = signal(null, ...(ngDevMode ? [{ debugName: "deleteTarget" }] : /* istanbul ignore next */ []));
    error = signal('', ...(ngDevMode ? [{ debugName: "error" }] : /* istanbul ignore next */ []));
    message = signal('', ...(ngDevMode ? [{ debugName: "message" }] : /* istanbul ignore next */ []));
    examTypes = [
        { value: 'sessional', label: 'Sessional' },
        { value: 'internal_practical', label: 'Internal/Practical' },
        { value: 'teacher_assessment', label: 'Teacher Assessment' },
        { value: 'end_term', label: 'End-Term' },
        { value: 'end_term_practical', label: 'End-Term/Practical' },
        { value: 'mid_term', label: 'Mid-Term' },
    ];
    search = '';
    academicSessionId = '';
    universityId = '';
    collegeId = '';
    semesterParity = 'odd';
    examType = '';
    caption = '';
    theoryQuestionViewCount = null;
    practicalQuestionViewCount = null;
    isActive = true;
    constructor() {
        this.load();
    }
    master(typeSlug) {
        return this.masters().filter((item) => item.typeSlug === typeSlug && item.isActive);
    }
    collegeOptions() {
        return this.master('college').filter((college) => college.parentId === this.universityId);
    }
    visibleSchedules() {
        const query = this.search.trim().toLowerCase();
        if (!query)
            return this.schedules();
        return this.schedules().filter((item) => [
            item.caption,
            item.academicSession,
            item.universityName,
            item.collegeName,
            item.examTypeName,
            item.semesterParity,
        ].some((value) => value.toLowerCase().includes(query)));
    }
    load() {
        this.loading.set(true);
        this.error.set('');
        forkJoin({
            schedules: this.api.examSchedules(),
            masters: this.api.formMappingOptions(),
        }).subscribe({
            next: ({ schedules, masters }) => {
                this.schedules.set(schedules.items);
                this.masters.set(masters.items.filter((item) => item.isActive));
                this.loading.set(false);
            },
            error: (error) => {
                this.error.set(apiMessage(error, 'Could not load exam schedules.'));
                this.loading.set(false);
            },
        });
    }
    openCreate() {
        this.resetForm();
        this.error.set('');
        this.message.set('');
        this.drawerOpen.set(true);
    }
    edit(item) {
        this.editingId.set(item._id);
        this.academicSessionId = item.academicSessionId;
        this.universityId = item.universityId;
        this.collegeId = item.collegeId;
        this.semesterParity = item.semesterParity;
        this.examType = item.examType;
        this.caption = item.caption;
        this.theoryQuestionViewCount = item.theoryQuestionViewCount;
        this.practicalQuestionViewCount = item.practicalQuestionViewCount;
        this.isActive = item.isActive;
        this.error.set('');
        this.drawerOpen.set(true);
    }
    closeDrawer() {
        if (this.saving())
            return;
        this.drawerOpen.set(false);
        this.resetForm();
    }
    universityChanged() {
        if (!this.collegeOptions().some((college) => college._id === this.collegeId))
            this.collegeId = '';
    }
    save() {
        if (this.saving())
            return;
        if (!this.academicSessionId ||
            !this.universityId ||
            !this.collegeId ||
            !this.examType ||
            !this.caption.trim() ||
            this.theoryQuestionViewCount === null ||
            this.practicalQuestionViewCount === null) {
            this.error.set('Complete all required exam schedule fields.');
            return;
        }
        if (this.theoryQuestionViewCount < 0 || this.practicalQuestionViewCount < 0) {
            this.error.set('Question counts cannot be negative.');
            return;
        }
        const body = {
            academicSessionId: this.academicSessionId,
            universityId: this.universityId,
            collegeId: this.collegeId,
            semesterParity: this.semesterParity,
            examType: this.examType,
            caption: this.caption.trim(),
            theoryQuestionViewCount: Number(this.theoryQuestionViewCount),
            practicalQuestionViewCount: Number(this.practicalQuestionViewCount),
            isActive: this.isActive,
        };
        this.saving.set(true);
        this.error.set('');
        const request = this.editingId()
            ? this.api.updateExamSchedule(this.editingId(), body)
            : this.api.createExamSchedule(body);
        request.subscribe({
            next: () => {
                this.message.set(this.editingId() ? 'Exam schedule updated.' : 'Exam schedule created.');
                this.saving.set(false);
                this.drawerOpen.set(false);
                this.resetForm();
                this.load();
            },
            error: (error) => {
                this.error.set(apiMessage(error, 'Could not save the exam schedule.'));
                this.saving.set(false);
            },
        });
    }
    rowActions() {
        return [
            { id: 'edit', label: 'Edit schedule', icon: 'edit' },
            { id: 'delete', label: 'Delete schedule', icon: 'delete', destructive: true },
        ];
    }
    handleAction(action, item) {
        if (action === 'edit')
            this.edit(item);
        if (action === 'delete')
            this.deleteTarget.set(item);
    }
    deleteSchedule() {
        const item = this.deleteTarget();
        if (!item || this.saving())
            return;
        this.saving.set(true);
        this.api.deleteExamSchedule(item._id).subscribe({
            next: () => {
                this.schedules.update((items) => items.filter((entry) => entry._id !== item._id));
                this.message.set('Exam schedule deleted.');
                this.deleteTarget.set(null);
                this.saving.set(false);
            },
            error: (error) => {
                this.error.set(apiMessage(error, 'Could not delete the exam schedule.'));
                this.deleteTarget.set(null);
                this.saving.set(false);
            },
        });
    }
    resetForm() {
        this.editingId.set(null);
        this.academicSessionId = '';
        this.universityId = '';
        this.collegeId = '';
        this.semesterParity = 'odd';
        this.examType = '';
        this.caption = '';
        this.theoryQuestionViewCount = null;
        this.practicalQuestionViewCount = null;
        this.isActive = true;
    }
    static ɵfac = function ExamSchedulesComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || ExamSchedulesComponent)(); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ExamSchedulesComponent, selectors: [["erp-exam-schedules"]], decls: 102, vars: 24, consts: [["eyebrow", "Exam", "title", "Exam schedule", "description", "Create and manage examination definitions for each academic session and college.", "variant", "compact", "layout", "collection"], ["page-actions", "", "type", "button", 1, "erp-button", "erp-button--primary", 3, "click"], [1, "erp-notice", "erp-notice--success"], ["role", "alert", 1, "erp-notice", "erp-notice--error"], [1, "erp-card", "erp-table-shell"], [1, "erp-table-toolbar"], ["type", "search", "placeholder", "Search schedules", "aria-label", "Search exam schedules", 1, "erp-control", "schedule-search", 3, "ngModelChange", "ngModel"], [1, "erp-table-shell__scroll"], [1, "erp-table-shell__actions"], ["eyebrow", "Exam", "description", "Select the academic scope and configure the exam definition.", "illustration", "taskSchedule", 3, "closed", "open", "title", "busy"], [1, "erp-card", "erp-card--padded"], [1, "erp-form-grid"], [1, "erp-control", 3, "ngModelChange", "ngModel"], ["value", ""], [3, "value"], [1, "erp-control", 3, "ngModelChange", "ngModel", "disabled"], ["value", "odd"], ["value", "even"], [1, "field-wide"], ["type", "text", "maxlength", "240", "placeholder", "Enter exam schedule title", 1, "erp-control", 3, "ngModelChange", "ngModel"], ["type", "number", "min", "0", "max", "10000", "step", "1", "placeholder", "Enter theory question count", 1, "erp-control", 3, "ngModelChange", "ngModel"], ["type", "number", "min", "0", "max", "10000", "step", "1", "placeholder", "Enter practical question count", 1, "erp-control", 3, "ngModelChange", "ngModel"], [1, "status-control"], ["type", "checkbox", 3, "ngModelChange", "ngModel"], ["drawer-actions", "", "type", "button", 1, "erp-button", "erp-button--primary", 3, "click", "disabled"], ["eyebrow", "Exam schedule", "title", "Delete this exam schedule?", "confirmLabel", "Delete schedule", 3, "confirmed", "cancelled", "open", "message", "destructive"], [1, "erp-status"], [3, "selected", "items"], ["colspan", "8", 1, "erp-empty-state"], ["kind", "taskSchedule", "size", "compact"]], template: function ExamSchedulesComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "erp-admin-page", 0)(1, "button", 1);
            i0.ɵɵlistener("click", function ExamSchedulesComponent_Template_button_click_1_listener() { return ctx.openCreate(); });
            i0.ɵɵtext(2, " Create exam schedule ");
            i0.ɵɵelementEnd();
            i0.ɵɵconditionalCreate(3, ExamSchedulesComponent_Conditional_3_Template, 2, 1, "p", 2);
            i0.ɵɵconditionalCreate(4, ExamSchedulesComponent_Conditional_4_Template, 2, 1, "p", 3);
            i0.ɵɵelementStart(5, "section", 4)(6, "div", 5)(7, "div")(8, "h2");
            i0.ɵɵtext(9, " Saved schedules ");
            i0.ɵɵelementStart(10, "small");
            i0.ɵɵtext(11);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(12, "p");
            i0.ɵɵtext(13, "Exam definitions are available for later paper, seating and examination workflows.");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(14, "input", 6);
            i0.ɵɵtwoWayListener("ngModelChange", function ExamSchedulesComponent_Template_input_ngModelChange_14_listener($event) { i0.ɵɵtwoWayBindingSet(ctx.search, $event) || (ctx.search = $event); return $event; });
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(15, "div", 7)(16, "table")(17, "thead")(18, "tr")(19, "th");
            i0.ɵɵtext(20, "Caption");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(21, "th");
            i0.ɵɵtext(22, "Session");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(23, "th");
            i0.ɵɵtext(24, "University / College");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(25, "th");
            i0.ɵɵtext(26, "Semester");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(27, "th");
            i0.ɵɵtext(28, "Exam type");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(29, "th");
            i0.ɵɵtext(30, "Questions to view");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(31, "th");
            i0.ɵɵtext(32, "Status");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(33, "th", 8);
            i0.ɵɵtext(34, "Actions");
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(35, "tbody");
            i0.ɵɵrepeaterCreate(36, ExamSchedulesComponent_For_37_Template, 24, 10, "tr", null, _forTrack0, false, ExamSchedulesComponent_ForEmpty_38_Template, 5, 1, "tr");
            i0.ɵɵelementEnd()()()()();
            i0.ɵɵelementStart(39, "erp-admin-drawer", 9);
            i0.ɵɵlistener("closed", function ExamSchedulesComponent_Template_erp_admin_drawer_closed_39_listener() { return ctx.closeDrawer(); });
            i0.ɵɵconditionalCreate(40, ExamSchedulesComponent_Conditional_40_Template, 2, 1, "p", 3);
            i0.ɵɵelementStart(41, "section", 10)(42, "div", 11)(43, "label")(44, "span");
            i0.ɵɵtext(45, "Academic session *");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(46, "select", 12);
            i0.ɵɵtwoWayListener("ngModelChange", function ExamSchedulesComponent_Template_select_ngModelChange_46_listener($event) { i0.ɵɵtwoWayBindingSet(ctx.academicSessionId, $event) || (ctx.academicSessionId = $event); return $event; });
            i0.ɵɵelementStart(47, "option", 13);
            i0.ɵɵtext(48, "Select academic session");
            i0.ɵɵelementEnd();
            i0.ɵɵrepeaterCreate(49, ExamSchedulesComponent_For_50_Template, 2, 2, "option", 14, _forTrack0);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(51, "label")(52, "span");
            i0.ɵɵtext(53, "University *");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(54, "select", 12);
            i0.ɵɵtwoWayListener("ngModelChange", function ExamSchedulesComponent_Template_select_ngModelChange_54_listener($event) { i0.ɵɵtwoWayBindingSet(ctx.universityId, $event) || (ctx.universityId = $event); return $event; });
            i0.ɵɵlistener("ngModelChange", function ExamSchedulesComponent_Template_select_ngModelChange_54_listener() { return ctx.universityChanged(); });
            i0.ɵɵelementStart(55, "option", 13);
            i0.ɵɵtext(56, "Select university");
            i0.ɵɵelementEnd();
            i0.ɵɵrepeaterCreate(57, ExamSchedulesComponent_For_58_Template, 2, 2, "option", 14, _forTrack0);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(59, "label")(60, "span");
            i0.ɵɵtext(61, "College *");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(62, "select", 15);
            i0.ɵɵtwoWayListener("ngModelChange", function ExamSchedulesComponent_Template_select_ngModelChange_62_listener($event) { i0.ɵɵtwoWayBindingSet(ctx.collegeId, $event) || (ctx.collegeId = $event); return $event; });
            i0.ɵɵelementStart(63, "option", 13);
            i0.ɵɵtext(64, "Select college");
            i0.ɵɵelementEnd();
            i0.ɵɵrepeaterCreate(65, ExamSchedulesComponent_For_66_Template, 2, 2, "option", 14, _forTrack0);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(67, "label")(68, "span");
            i0.ɵɵtext(69, "Odd / Even *");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(70, "select", 12);
            i0.ɵɵtwoWayListener("ngModelChange", function ExamSchedulesComponent_Template_select_ngModelChange_70_listener($event) { i0.ɵɵtwoWayBindingSet(ctx.semesterParity, $event) || (ctx.semesterParity = $event); return $event; });
            i0.ɵɵelementStart(71, "option", 16);
            i0.ɵɵtext(72, "Odd");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(73, "option", 17);
            i0.ɵɵtext(74, "Even");
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(75, "label")(76, "span");
            i0.ɵɵtext(77, "Exam type *");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(78, "select", 12);
            i0.ɵɵtwoWayListener("ngModelChange", function ExamSchedulesComponent_Template_select_ngModelChange_78_listener($event) { i0.ɵɵtwoWayBindingSet(ctx.examType, $event) || (ctx.examType = $event); return $event; });
            i0.ɵɵelementStart(79, "option", 13);
            i0.ɵɵtext(80, "Select exam type");
            i0.ɵɵelementEnd();
            i0.ɵɵrepeaterCreate(81, ExamSchedulesComponent_For_82_Template, 2, 2, "option", 14, _forTrack1);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(83, "label", 18)(84, "span");
            i0.ɵɵtext(85, "Caption *");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(86, "input", 19);
            i0.ɵɵtwoWayListener("ngModelChange", function ExamSchedulesComponent_Template_input_ngModelChange_86_listener($event) { i0.ɵɵtwoWayBindingSet(ctx.caption, $event) || (ctx.caption = $event); return $event; });
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(87, "label")(88, "span");
            i0.ɵɵtext(89, "No. of Question To View (Theory Subject) *");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(90, "input", 20);
            i0.ɵɵtwoWayListener("ngModelChange", function ExamSchedulesComponent_Template_input_ngModelChange_90_listener($event) { i0.ɵɵtwoWayBindingSet(ctx.theoryQuestionViewCount, $event) || (ctx.theoryQuestionViewCount = $event); return $event; });
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(91, "label")(92, "span");
            i0.ɵɵtext(93, "No. of Question To View (Practical Subject) *");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(94, "input", 21);
            i0.ɵɵtwoWayListener("ngModelChange", function ExamSchedulesComponent_Template_input_ngModelChange_94_listener($event) { i0.ɵɵtwoWayBindingSet(ctx.practicalQuestionViewCount, $event) || (ctx.practicalQuestionViewCount = $event); return $event; });
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(95, "label", 22)(96, "input", 23);
            i0.ɵɵtwoWayListener("ngModelChange", function ExamSchedulesComponent_Template_input_ngModelChange_96_listener($event) { i0.ɵɵtwoWayBindingSet(ctx.isActive, $event) || (ctx.isActive = $event); return $event; });
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(97, "span");
            i0.ɵɵtext(98, "Active schedule");
            i0.ɵɵelementEnd()()()();
            i0.ɵɵelementStart(99, "button", 24);
            i0.ɵɵlistener("click", function ExamSchedulesComponent_Template_button_click_99_listener() { return ctx.save(); });
            i0.ɵɵtext(100);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(101, "erp-confirm-dialog", 25);
            i0.ɵɵlistener("confirmed", function ExamSchedulesComponent_Template_erp_confirm_dialog_confirmed_101_listener() { return ctx.deleteSchedule(); })("cancelled", function ExamSchedulesComponent_Template_erp_confirm_dialog_cancelled_101_listener() { return ctx.deleteTarget.set(null); });
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵadvance(3);
            i0.ɵɵconditional(ctx.message() ? 3 : -1);
            i0.ɵɵadvance();
            i0.ɵɵconditional(ctx.error() && !ctx.drawerOpen() ? 4 : -1);
            i0.ɵɵadvance(7);
            i0.ɵɵtextInterpolate(ctx.schedules().length);
            i0.ɵɵadvance(3);
            i0.ɵɵtwoWayProperty("ngModel", ctx.search);
            i0.ɵɵadvance(22);
            i0.ɵɵrepeater(ctx.visibleSchedules());
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("open", ctx.drawerOpen())("title", ctx.editingId() ? "Edit exam schedule" : "Create exam schedule")("busy", ctx.saving());
            i0.ɵɵadvance();
            i0.ɵɵconditional(ctx.error() ? 40 : -1);
            i0.ɵɵadvance(6);
            i0.ɵɵtwoWayProperty("ngModel", ctx.academicSessionId);
            i0.ɵɵadvance(3);
            i0.ɵɵrepeater(ctx.master("academic"));
            i0.ɵɵadvance(5);
            i0.ɵɵtwoWayProperty("ngModel", ctx.universityId);
            i0.ɵɵadvance(3);
            i0.ɵɵrepeater(ctx.master("university"));
            i0.ɵɵadvance(5);
            i0.ɵɵtwoWayProperty("ngModel", ctx.collegeId);
            i0.ɵɵproperty("disabled", !ctx.universityId);
            i0.ɵɵadvance(3);
            i0.ɵɵrepeater(ctx.collegeOptions());
            i0.ɵɵadvance(5);
            i0.ɵɵtwoWayProperty("ngModel", ctx.semesterParity);
            i0.ɵɵadvance(8);
            i0.ɵɵtwoWayProperty("ngModel", ctx.examType);
            i0.ɵɵadvance(3);
            i0.ɵɵrepeater(ctx.examTypes);
            i0.ɵɵadvance(5);
            i0.ɵɵtwoWayProperty("ngModel", ctx.caption);
            i0.ɵɵadvance(4);
            i0.ɵɵtwoWayProperty("ngModel", ctx.theoryQuestionViewCount);
            i0.ɵɵadvance(4);
            i0.ɵɵtwoWayProperty("ngModel", ctx.practicalQuestionViewCount);
            i0.ɵɵadvance(2);
            i0.ɵɵtwoWayProperty("ngModel", ctx.isActive);
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("disabled", ctx.saving());
            i0.ɵɵadvance();
            i0.ɵɵtextInterpolate1(" ", ctx.saving() ? "Saving\u2026" : "Save schedule", " ");
            i0.ɵɵadvance();
            i0.ɵɵproperty("open", !!ctx.deleteTarget())("message", "This permanently removes the selected exam definition.")("destructive", true);
        } }, dependencies: [FormsModule, i1.NgSelectOption, i1.ɵNgSelectMultipleOption, i1.DefaultValueAccessor, i1.NumberValueAccessor, i1.CheckboxControlValueAccessor, i1.SelectControlValueAccessor, i1.NgControlStatus, i1.MaxLengthValidator, i1.MinValidator, i1.MaxValidator, i1.NgModel, AdminDrawerComponent,
            AdminIllustrationComponent,
            AdminPageComponent,
            CompactActionMenuComponent,
            ConfirmDialogComponent], styles: ["\n[_nghost-%COMP%] {\n  display: block;\n}\n\n.schedule-search[_ngcontent-%COMP%] {\n  width: min(22rem, 100%);\n}\n\n.field-wide[_ngcontent-%COMP%] {\n  grid-column: 1 / -1;\n}\n\n.status-control[_ngcontent-%COMP%] {\n  align-items: center;\n  display: flex;\n  flex-direction: row;\n  gap: var(--space-2);\n}\n\n@media (max-width: 48rem) {\n  .schedule-search[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}"], changeDetection: 0 });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ExamSchedulesComponent, [{
        type: Component,
        args: [{ selector: 'erp-exam-schedules', imports: [
                    FormsModule,
                    AdminDrawerComponent,
                    AdminIllustrationComponent,
                    AdminPageComponent,
                    CompactActionMenuComponent,
                    ConfirmDialogComponent,
                ], changeDetection: ChangeDetectionStrategy.OnPush, template: "<erp-admin-page\n  eyebrow=\"Exam\"\n  title=\"Exam schedule\"\n  description=\"Create and manage examination definitions for each academic session and college.\"\n  variant=\"compact\"\n  layout=\"collection\"\n>\n  <button page-actions class=\"erp-button erp-button--primary\" type=\"button\" (click)=\"openCreate()\">\n    Create exam schedule\n  </button>\n\n  @if (message()) {\n    <p class=\"erp-notice erp-notice--success\">{{ message() }}</p>\n  }\n  @if (error() && !drawerOpen()) {\n    <p class=\"erp-notice erp-notice--error\" role=\"alert\">{{ error() }}</p>\n  }\n\n  <section class=\"erp-card erp-table-shell\">\n    <div class=\"erp-table-toolbar\">\n      <div>\n        <h2>\n          Saved schedules <small>{{ schedules().length }}</small>\n        </h2>\n        <p>Exam definitions are available for later paper, seating and examination workflows.</p>\n      </div>\n      <input\n        class=\"erp-control schedule-search\"\n        type=\"search\"\n        placeholder=\"Search schedules\"\n        aria-label=\"Search exam schedules\"\n        [(ngModel)]=\"search\"\n      />\n    </div>\n    <div class=\"erp-table-shell__scroll\">\n      <table>\n        <thead>\n          <tr>\n            <th>Caption</th>\n            <th>Session</th>\n            <th>University / College</th>\n            <th>Semester</th>\n            <th>Exam type</th>\n            <th>Questions to view</th>\n            <th>Status</th>\n            <th class=\"erp-table-shell__actions\">Actions</th>\n          </tr>\n        </thead>\n        <tbody>\n          @for (item of visibleSchedules(); track item._id) {\n            <tr>\n              <td>\n                <strong>{{ item.caption }}</strong>\n              </td>\n              <td>{{ item.academicSession }}</td>\n              <td>\n                <strong>{{ item.collegeName }}</strong\n                ><small>{{ item.universityName }}</small>\n              </td>\n              <td>{{ item.semesterParity === 'odd' ? 'Odd' : 'Even' }}</td>\n              <td>{{ item.examTypeName }}</td>\n              <td>\n                Theory: {{ item.theoryQuestionViewCount }}\n                <small>Practical: {{ item.practicalQuestionViewCount }}</small>\n              </td>\n              <td>\n                <span class=\"erp-status\">{{ item.isActive ? 'Active' : 'Inactive' }}</span>\n              </td>\n              <td class=\"erp-table-shell__actions\">\n                <erp-compact-action-menu\n                  [items]=\"rowActions()\"\n                  (selected)=\"handleAction($event, item)\"\n                />\n              </td>\n            </tr>\n          } @empty {\n            <tr>\n              <td colspan=\"8\" class=\"erp-empty-state\">\n                <erp-admin-illustration kind=\"taskSchedule\" size=\"compact\" />\n                <p>{{ loading() ? 'Loading exam schedules\u2026' : 'No exam schedules found.' }}</p>\n              </td>\n            </tr>\n          }\n        </tbody>\n      </table>\n    </div>\n  </section>\n</erp-admin-page>\n\n<erp-admin-drawer\n  [open]=\"drawerOpen()\"\n  [title]=\"editingId() ? 'Edit exam schedule' : 'Create exam schedule'\"\n  eyebrow=\"Exam\"\n  description=\"Select the academic scope and configure the exam definition.\"\n  illustration=\"taskSchedule\"\n  [busy]=\"saving()\"\n  (closed)=\"closeDrawer()\"\n>\n  @if (error()) {\n    <p class=\"erp-notice erp-notice--error\" role=\"alert\">{{ error() }}</p>\n  }\n  <section class=\"erp-card erp-card--padded\">\n    <div class=\"erp-form-grid\">\n      <label>\n        <span>Academic session *</span>\n        <select class=\"erp-control\" [(ngModel)]=\"academicSessionId\">\n          <option value=\"\">Select academic session</option>\n          @for (item of master('academic'); track item._id) {\n            <option [value]=\"item._id\">{{ item.name }}</option>\n          }\n        </select>\n      </label>\n      <label>\n        <span>University *</span>\n        <select\n          class=\"erp-control\"\n          [(ngModel)]=\"universityId\"\n          (ngModelChange)=\"universityChanged()\"\n        >\n          <option value=\"\">Select university</option>\n          @for (item of master('university'); track item._id) {\n            <option [value]=\"item._id\">{{ item.name }}</option>\n          }\n        </select>\n      </label>\n      <label>\n        <span>College *</span>\n        <select class=\"erp-control\" [(ngModel)]=\"collegeId\" [disabled]=\"!universityId\">\n          <option value=\"\">Select college</option>\n          @for (item of collegeOptions(); track item._id) {\n            <option [value]=\"item._id\">{{ item.name }}</option>\n          }\n        </select>\n      </label>\n      <label>\n        <span>Odd / Even *</span>\n        <select class=\"erp-control\" [(ngModel)]=\"semesterParity\">\n          <option value=\"odd\">Odd</option>\n          <option value=\"even\">Even</option>\n        </select>\n      </label>\n      <label>\n        <span>Exam type *</span>\n        <select class=\"erp-control\" [(ngModel)]=\"examType\">\n          <option value=\"\">Select exam type</option>\n          @for (item of examTypes; track item.value) {\n            <option [value]=\"item.value\">{{ item.label }}</option>\n          }\n        </select>\n      </label>\n      <label class=\"field-wide\">\n        <span>Caption *</span>\n        <input\n          class=\"erp-control\"\n          type=\"text\"\n          maxlength=\"240\"\n          placeholder=\"Enter exam schedule title\"\n          [(ngModel)]=\"caption\"\n        />\n      </label>\n      <label>\n        <span>No. of Question To View (Theory Subject) *</span>\n        <input\n          class=\"erp-control\"\n          type=\"number\"\n          min=\"0\"\n          max=\"10000\"\n          step=\"1\"\n          placeholder=\"Enter theory question count\"\n          [(ngModel)]=\"theoryQuestionViewCount\"\n        />\n      </label>\n      <label>\n        <span>No. of Question To View (Practical Subject) *</span>\n        <input\n          class=\"erp-control\"\n          type=\"number\"\n          min=\"0\"\n          max=\"10000\"\n          step=\"1\"\n          placeholder=\"Enter practical question count\"\n          [(ngModel)]=\"practicalQuestionViewCount\"\n        />\n      </label>\n      <label class=\"status-control\">\n        <input type=\"checkbox\" [(ngModel)]=\"isActive\" />\n        <span>Active schedule</span>\n      </label>\n    </div>\n  </section>\n  <button\n    drawer-actions\n    class=\"erp-button erp-button--primary\"\n    type=\"button\"\n    [disabled]=\"saving()\"\n    (click)=\"save()\"\n  >\n    {{ saving() ? 'Saving\u2026' : 'Save schedule' }}\n  </button>\n</erp-admin-drawer>\n\n<erp-confirm-dialog\n  [open]=\"!!deleteTarget()\"\n  eyebrow=\"Exam schedule\"\n  title=\"Delete this exam schedule?\"\n  [message]=\"'This permanently removes the selected exam definition.'\"\n  confirmLabel=\"Delete schedule\"\n  [destructive]=\"true\"\n  (confirmed)=\"deleteSchedule()\"\n  (cancelled)=\"deleteTarget.set(null)\"\n/>\n", styles: ["/* ERP-LOCAL-STYLE: unique responsive geometry for the schedule directory filter and editor fields. */\n:host {\n  display: block;\n}\n\n.schedule-search {\n  width: min(22rem, 100%);\n}\n\n.field-wide {\n  grid-column: 1 / -1;\n}\n\n.status-control {\n  align-items: center;\n  display: flex;\n  flex-direction: row;\n  gap: var(--space-2);\n}\n\n@media (max-width: 48rem) {\n  .schedule-search {\n    width: 100%;\n  }\n}\n"] }]
    }], () => [], null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(ExamSchedulesComponent, { className: "ExamSchedulesComponent", filePath: "frontend/src/app/features/admin/exams/exam-schedules.component.ts", lineNumber: 39 }); })();
