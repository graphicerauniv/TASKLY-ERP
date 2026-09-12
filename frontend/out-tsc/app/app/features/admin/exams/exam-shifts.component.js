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
function ExamShiftsComponent_Conditional_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 2);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r0.message());
} }
function ExamShiftsComponent_Conditional_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 3);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r0.error());
} }
function ExamShiftsComponent_For_37_Template(rf, ctx) { if (rf & 1) {
    const _r2 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "tr")(1, "td")(2, "strong");
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(4, "td");
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "td");
    i0.ɵɵtext(7);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "td");
    i0.ɵɵtext(9);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(10, "td")(11, "strong");
    i0.ɵɵtext(12);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(13, "small");
    i0.ɵɵtext(14);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(15, "td");
    i0.ɵɵtext(16);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(17, "td")(18, "span", 25);
    i0.ɵɵtext(19);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(20, "td", 8)(21, "erp-compact-action-menu", 26);
    i0.ɵɵlistener("selected", function ExamShiftsComponent_For_37_Template_erp_compact_action_menu_selected_21_listener($event) { const item_r3 = i0.ɵɵrestoreView(_r2).$implicit; const ctx_r0 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r0.handleAction($event, item_r3)); });
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const item_r3 = ctx.$implicit;
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1("Shift ", item_r3.shiftSerial);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(item_r3.caption);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(item_r3.examScheduleCaption);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(item_r3.academicSession);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(item_r3.collegeName);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(item_r3.universityName);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate4(" ", item_r3.timeFrom, " ", item_r3.timeFromMeridiem, " \u2013 ", item_r3.timeTo, " ", item_r3.timeToMeridiem, " ");
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(item_r3.isActive ? "Active" : "Inactive");
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("items", ctx_r0.rowActions());
} }
function ExamShiftsComponent_ForEmpty_38_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "tr")(1, "td", 27);
    i0.ɵɵelement(2, "erp-admin-illustration", 28);
    i0.ɵɵelementStart(3, "p");
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(ctx_r0.loading() ? "Loading shift schedules\u2026" : "No shift schedules found.");
} }
function ExamShiftsComponent_Conditional_40_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 3);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r0.error());
} }
function ExamShiftsComponent_For_50_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 14);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r4 = ctx.$implicit;
    i0.ɵɵproperty("value", item_r4._id);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(item_r4.name);
} }
function ExamShiftsComponent_For_58_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 14);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r5 = ctx.$implicit;
    i0.ɵɵproperty("value", item_r5._id);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(item_r5.name);
} }
function ExamShiftsComponent_For_66_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 14);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r6 = ctx.$implicit;
    i0.ɵɵproperty("value", item_r6._id);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate2("", item_r6.caption, " \u00B7 ", item_r6.collegeName);
} }
function ExamShiftsComponent_For_76_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 17);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const serial_r7 = ctx.$implicit;
    i0.ɵɵproperty("ngValue", serial_r7);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(serial_r7);
} }
function ExamShiftsComponent_Conditional_105_Template(rf, ctx) { if (rf & 1) {
    const _r8 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 29);
    i0.ɵɵlistener("click", function ExamShiftsComponent_Conditional_105_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r8); const ctx_r0 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r0.resetForm()); });
    i0.ɵɵtext(1, " Reset ");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵproperty("disabled", ctx_r0.saving());
} }
function apiMessage(error, fallback) {
    if (typeof error === 'object' && error && 'error' in error) {
        const message = error.error?.message;
        if (typeof message === 'string')
            return message;
    }
    return fallback;
}
export class ExamShiftsComponent {
    api = inject(ApiService);
    shifts = signal([], ...(ngDevMode ? [{ debugName: "shifts" }] : /* istanbul ignore next */ []));
    schedules = signal([], ...(ngDevMode ? [{ debugName: "schedules" }] : /* istanbul ignore next */ []));
    masters = signal([], ...(ngDevMode ? [{ debugName: "masters" }] : /* istanbul ignore next */ []));
    loading = signal(true, ...(ngDevMode ? [{ debugName: "loading" }] : /* istanbul ignore next */ []));
    saving = signal(false, ...(ngDevMode ? [{ debugName: "saving" }] : /* istanbul ignore next */ []));
    drawerOpen = signal(false, ...(ngDevMode ? [{ debugName: "drawerOpen" }] : /* istanbul ignore next */ []));
    editingId = signal(null, ...(ngDevMode ? [{ debugName: "editingId" }] : /* istanbul ignore next */ []));
    deleteTarget = signal(null, ...(ngDevMode ? [{ debugName: "deleteTarget" }] : /* istanbul ignore next */ []));
    error = signal('', ...(ngDevMode ? [{ debugName: "error" }] : /* istanbul ignore next */ []));
    message = signal('', ...(ngDevMode ? [{ debugName: "message" }] : /* istanbul ignore next */ []));
    shiftSerials = Array.from({ length: 20 }, (_, index) => index + 1);
    search = '';
    academicSessionId = '';
    universityId = '';
    examScheduleId = '';
    caption = '';
    shiftSerial = 1;
    timeFrom = '';
    timeFromMeridiem = 'AM';
    timeTo = '';
    timeToMeridiem = 'AM';
    isActive = true;
    constructor() {
        this.load();
    }
    master(typeSlug) {
        return this.masters().filter((item) => item.typeSlug === typeSlug && item.isActive);
    }
    scheduleOptions() {
        return this.schedules().filter((item) => item.isActive &&
            item.academicSessionId === this.academicSessionId &&
            item.universityId === this.universityId);
    }
    visibleShifts() {
        const query = this.search.trim().toLowerCase();
        if (!query)
            return this.shifts();
        return this.shifts().filter((item) => [
            item.caption,
            item.examScheduleCaption,
            item.academicSession,
            item.universityName,
            item.collegeName,
            `shift ${item.shiftSerial}`,
        ].some((value) => value.toLowerCase().includes(query)));
    }
    load() {
        this.loading.set(true);
        this.error.set('');
        forkJoin({
            shifts: this.api.examShiftSchedules(),
            schedules: this.api.examSchedules(),
            masters: this.api.formMappingOptions(),
        }).subscribe({
            next: ({ shifts, schedules, masters }) => {
                this.shifts.set(shifts.items);
                this.schedules.set(schedules.items);
                this.masters.set(masters.items.filter((item) => item.isActive));
                this.loading.set(false);
            },
            error: (error) => {
                this.error.set(apiMessage(error, 'Could not load exam shifts.'));
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
        this.examScheduleId = item.examScheduleId;
        this.caption = item.caption;
        this.shiftSerial = item.shiftSerial;
        this.timeFrom = item.timeFrom;
        this.timeFromMeridiem = item.timeFromMeridiem;
        this.timeTo = item.timeTo;
        this.timeToMeridiem = item.timeToMeridiem;
        this.isActive = item.isActive;
        this.error.set('');
        this.drawerOpen.set(true);
    }
    scopeChanged() {
        if (!this.scheduleOptions().some((item) => item._id === this.examScheduleId))
            this.examScheduleId = '';
    }
    closeDrawer() {
        if (this.saving())
            return;
        this.drawerOpen.set(false);
        this.resetForm();
    }
    save() {
        if (this.saving())
            return;
        if (!this.academicSessionId ||
            !this.universityId ||
            !this.examScheduleId ||
            !this.caption.trim() ||
            !this.timeFrom ||
            !this.timeTo) {
            this.error.set('Complete all required shift schedule fields.');
            return;
        }
        const body = {
            academicSessionId: this.academicSessionId,
            universityId: this.universityId,
            examScheduleId: this.examScheduleId,
            caption: this.caption.trim(),
            shiftSerial: Number(this.shiftSerial),
            timeFrom: this.timeFrom,
            timeFromMeridiem: this.timeFromMeridiem,
            timeTo: this.timeTo,
            timeToMeridiem: this.timeToMeridiem,
            isActive: this.isActive,
        };
        this.saving.set(true);
        this.error.set('');
        const request = this.editingId()
            ? this.api.updateExamShiftSchedule(this.editingId(), body)
            : this.api.createExamShiftSchedule(body);
        request.subscribe({
            next: () => {
                this.message.set(this.editingId() ? 'Shift schedule updated.' : 'Shift schedule created.');
                this.saving.set(false);
                this.drawerOpen.set(false);
                this.resetForm();
                this.load();
            },
            error: (error) => {
                this.error.set(apiMessage(error, 'Could not save the shift schedule.'));
                this.saving.set(false);
            },
        });
    }
    rowActions() {
        return [
            { id: 'edit', label: 'Edit shift', icon: 'edit' },
            { id: 'delete', label: 'Delete shift', icon: 'delete', destructive: true },
        ];
    }
    handleAction(action, item) {
        if (action === 'edit')
            this.edit(item);
        if (action === 'delete')
            this.deleteTarget.set(item);
    }
    deleteShift() {
        const item = this.deleteTarget();
        if (!item || this.saving())
            return;
        this.saving.set(true);
        this.api.deleteExamShiftSchedule(item._id).subscribe({
            next: () => {
                this.shifts.update((items) => items.filter((entry) => entry._id !== item._id));
                this.deleteTarget.set(null);
                this.message.set('Shift schedule deleted.');
                this.saving.set(false);
            },
            error: (error) => {
                this.error.set(apiMessage(error, 'Could not delete the shift schedule.'));
                this.deleteTarget.set(null);
                this.saving.set(false);
            },
        });
    }
    resetForm() {
        this.editingId.set(null);
        this.academicSessionId = '';
        this.universityId = '';
        this.examScheduleId = '';
        this.caption = '';
        this.shiftSerial = 1;
        this.timeFrom = '';
        this.timeFromMeridiem = 'AM';
        this.timeTo = '';
        this.timeToMeridiem = 'AM';
        this.isActive = true;
    }
    static ɵfac = function ExamShiftsComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || ExamShiftsComponent)(); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ExamShiftsComponent, selectors: [["erp-exam-shifts"]], decls: 109, vars: 26, consts: [["eyebrow", "Exam", "title", "Shift schedule", "description", "Define the timing of each shift within an exam schedule.", "variant", "compact", "layout", "collection"], ["page-actions", "", "type", "button", 1, "erp-button", "erp-button--primary", 3, "click"], [1, "erp-notice", "erp-notice--success"], ["role", "alert", 1, "erp-notice", "erp-notice--error"], [1, "erp-card", "erp-table-shell"], [1, "erp-table-toolbar"], ["type", "search", "placeholder", "Search shifts", "aria-label", "Search exam shifts", 1, "erp-control", 3, "ngModelChange", "ngModel"], [1, "erp-table-shell__scroll"], [1, "erp-table-shell__actions"], ["eyebrow", "Exam", "description", "Choose the exam schedule, shift number and working time.", "illustration", "taskSchedule", 3, "closed", "open", "title", "busy"], [1, "erp-card", "erp-card--padded"], [1, "erp-form-grid"], [1, "erp-control", 3, "ngModelChange", "ngModel"], ["value", ""], [3, "value"], [1, "erp-control", 3, "ngModelChange", "ngModel", "disabled"], ["type", "text", "maxlength", "240", "placeholder", "Enter shift caption", 1, "erp-control", 3, "ngModelChange", "ngModel"], [3, "ngValue"], ["type", "text", "inputmode", "numeric", "maxlength", "5", "placeholder", "HH:MM", 1, "erp-control", 3, "ngModelChange", "ngModel"], ["value", "AM"], ["value", "PM"], ["type", "checkbox", 3, "ngModelChange", "ngModel"], ["type", "button", 1, "erp-button", "erp-button--secondary", 3, "disabled"], ["drawer-actions", "", "type", "button", 1, "erp-button", "erp-button--primary", 3, "click", "disabled"], ["eyebrow", "Exam shift", "title", "Delete this shift schedule?", "confirmLabel", "Delete shift", 3, "confirmed", "cancelled", "open", "message", "destructive"], [1, "erp-status"], [3, "selected", "items"], ["colspan", "8", 1, "erp-empty-state"], ["kind", "taskSchedule", "size", "compact"], ["type", "button", 1, "erp-button", "erp-button--secondary", 3, "click", "disabled"]], template: function ExamShiftsComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "erp-admin-page", 0)(1, "button", 1);
            i0.ɵɵlistener("click", function ExamShiftsComponent_Template_button_click_1_listener() { return ctx.openCreate(); });
            i0.ɵɵtext(2, " Create shift ");
            i0.ɵɵelementEnd();
            i0.ɵɵconditionalCreate(3, ExamShiftsComponent_Conditional_3_Template, 2, 1, "p", 2);
            i0.ɵɵconditionalCreate(4, ExamShiftsComponent_Conditional_4_Template, 2, 1, "p", 3);
            i0.ɵɵelementStart(5, "section", 4)(6, "div", 5)(7, "div")(8, "h2");
            i0.ɵɵtext(9, " Saved shifts ");
            i0.ɵɵelementStart(10, "small");
            i0.ɵɵtext(11);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(12, "p");
            i0.ɵɵtext(13, "Each shift belongs to one configured exam schedule.");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(14, "input", 6);
            i0.ɵɵtwoWayListener("ngModelChange", function ExamShiftsComponent_Template_input_ngModelChange_14_listener($event) { i0.ɵɵtwoWayBindingSet(ctx.search, $event) || (ctx.search = $event); return $event; });
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(15, "div", 7)(16, "table")(17, "thead")(18, "tr")(19, "th");
            i0.ɵɵtext(20, "Shift");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(21, "th");
            i0.ɵɵtext(22, "Caption");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(23, "th");
            i0.ɵɵtext(24, "Exam schedule");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(25, "th");
            i0.ɵɵtext(26, "Session");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(27, "th");
            i0.ɵɵtext(28, "University / College");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(29, "th");
            i0.ɵɵtext(30, "Time");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(31, "th");
            i0.ɵɵtext(32, "Status");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(33, "th", 8);
            i0.ɵɵtext(34, "Actions");
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(35, "tbody");
            i0.ɵɵrepeaterCreate(36, ExamShiftsComponent_For_37_Template, 22, 12, "tr", null, _forTrack0, false, ExamShiftsComponent_ForEmpty_38_Template, 5, 1, "tr");
            i0.ɵɵelementEnd()()()()();
            i0.ɵɵelementStart(39, "erp-admin-drawer", 9);
            i0.ɵɵlistener("closed", function ExamShiftsComponent_Template_erp_admin_drawer_closed_39_listener() { return ctx.closeDrawer(); });
            i0.ɵɵconditionalCreate(40, ExamShiftsComponent_Conditional_40_Template, 2, 1, "p", 3);
            i0.ɵɵelementStart(41, "section", 10)(42, "div", 11)(43, "label")(44, "span");
            i0.ɵɵtext(45, "Session *");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(46, "select", 12);
            i0.ɵɵtwoWayListener("ngModelChange", function ExamShiftsComponent_Template_select_ngModelChange_46_listener($event) { i0.ɵɵtwoWayBindingSet(ctx.academicSessionId, $event) || (ctx.academicSessionId = $event); return $event; });
            i0.ɵɵlistener("ngModelChange", function ExamShiftsComponent_Template_select_ngModelChange_46_listener() { return ctx.scopeChanged(); });
            i0.ɵɵelementStart(47, "option", 13);
            i0.ɵɵtext(48, "Select session");
            i0.ɵɵelementEnd();
            i0.ɵɵrepeaterCreate(49, ExamShiftsComponent_For_50_Template, 2, 2, "option", 14, _forTrack0);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(51, "label")(52, "span");
            i0.ɵɵtext(53, "University *");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(54, "select", 12);
            i0.ɵɵtwoWayListener("ngModelChange", function ExamShiftsComponent_Template_select_ngModelChange_54_listener($event) { i0.ɵɵtwoWayBindingSet(ctx.universityId, $event) || (ctx.universityId = $event); return $event; });
            i0.ɵɵlistener("ngModelChange", function ExamShiftsComponent_Template_select_ngModelChange_54_listener() { return ctx.scopeChanged(); });
            i0.ɵɵelementStart(55, "option", 13);
            i0.ɵɵtext(56, "Select university");
            i0.ɵɵelementEnd();
            i0.ɵɵrepeaterCreate(57, ExamShiftsComponent_For_58_Template, 2, 2, "option", 14, _forTrack0);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(59, "label")(60, "span");
            i0.ɵɵtext(61, "Exam schedule *");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(62, "select", 15);
            i0.ɵɵtwoWayListener("ngModelChange", function ExamShiftsComponent_Template_select_ngModelChange_62_listener($event) { i0.ɵɵtwoWayBindingSet(ctx.examScheduleId, $event) || (ctx.examScheduleId = $event); return $event; });
            i0.ɵɵelementStart(63, "option", 13);
            i0.ɵɵtext(64, "Select exam schedule");
            i0.ɵɵelementEnd();
            i0.ɵɵrepeaterCreate(65, ExamShiftsComponent_For_66_Template, 2, 3, "option", 14, _forTrack0);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(67, "label")(68, "span");
            i0.ɵɵtext(69, "Shift caption *");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(70, "input", 16);
            i0.ɵɵtwoWayListener("ngModelChange", function ExamShiftsComponent_Template_input_ngModelChange_70_listener($event) { i0.ɵɵtwoWayBindingSet(ctx.caption, $event) || (ctx.caption = $event); return $event; });
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(71, "label")(72, "span");
            i0.ɵɵtext(73, "Shift serial *");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(74, "select", 12);
            i0.ɵɵtwoWayListener("ngModelChange", function ExamShiftsComponent_Template_select_ngModelChange_74_listener($event) { i0.ɵɵtwoWayBindingSet(ctx.shiftSerial, $event) || (ctx.shiftSerial = $event); return $event; });
            i0.ɵɵrepeaterCreate(75, ExamShiftsComponent_For_76_Template, 2, 2, "option", 17, i0.ɵɵrepeaterTrackByIdentity);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(77, "label")(78, "span");
            i0.ɵɵtext(79, "Time from *");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(80, "input", 18);
            i0.ɵɵtwoWayListener("ngModelChange", function ExamShiftsComponent_Template_input_ngModelChange_80_listener($event) { i0.ɵɵtwoWayBindingSet(ctx.timeFrom, $event) || (ctx.timeFrom = $event); return $event; });
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(81, "label")(82, "span");
            i0.ɵɵtext(83, "From AM/PM *");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(84, "select", 12);
            i0.ɵɵtwoWayListener("ngModelChange", function ExamShiftsComponent_Template_select_ngModelChange_84_listener($event) { i0.ɵɵtwoWayBindingSet(ctx.timeFromMeridiem, $event) || (ctx.timeFromMeridiem = $event); return $event; });
            i0.ɵɵelementStart(85, "option", 19);
            i0.ɵɵtext(86, "AM");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(87, "option", 20);
            i0.ɵɵtext(88, "PM");
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(89, "label")(90, "span");
            i0.ɵɵtext(91, "Time to *");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(92, "input", 18);
            i0.ɵɵtwoWayListener("ngModelChange", function ExamShiftsComponent_Template_input_ngModelChange_92_listener($event) { i0.ɵɵtwoWayBindingSet(ctx.timeTo, $event) || (ctx.timeTo = $event); return $event; });
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(93, "label")(94, "span");
            i0.ɵɵtext(95, "To AM/PM *");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(96, "select", 12);
            i0.ɵɵtwoWayListener("ngModelChange", function ExamShiftsComponent_Template_select_ngModelChange_96_listener($event) { i0.ɵɵtwoWayBindingSet(ctx.timeToMeridiem, $event) || (ctx.timeToMeridiem = $event); return $event; });
            i0.ɵɵelementStart(97, "option", 19);
            i0.ɵɵtext(98, "AM");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(99, "option", 20);
            i0.ɵɵtext(100, "PM");
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(101, "label")(102, "input", 21);
            i0.ɵɵtwoWayListener("ngModelChange", function ExamShiftsComponent_Template_input_ngModelChange_102_listener($event) { i0.ɵɵtwoWayBindingSet(ctx.isActive, $event) || (ctx.isActive = $event); return $event; });
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(103, "span");
            i0.ɵɵtext(104, "Active shift");
            i0.ɵɵelementEnd()()();
            i0.ɵɵconditionalCreate(105, ExamShiftsComponent_Conditional_105_Template, 2, 1, "button", 22);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(106, "button", 23);
            i0.ɵɵlistener("click", function ExamShiftsComponent_Template_button_click_106_listener() { return ctx.save(); });
            i0.ɵɵtext(107);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(108, "erp-confirm-dialog", 24);
            i0.ɵɵlistener("confirmed", function ExamShiftsComponent_Template_erp_confirm_dialog_confirmed_108_listener() { return ctx.deleteShift(); })("cancelled", function ExamShiftsComponent_Template_erp_confirm_dialog_cancelled_108_listener() { return ctx.deleteTarget.set(null); });
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵadvance(3);
            i0.ɵɵconditional(ctx.message() ? 3 : -1);
            i0.ɵɵadvance();
            i0.ɵɵconditional(ctx.error() && !ctx.drawerOpen() ? 4 : -1);
            i0.ɵɵadvance(7);
            i0.ɵɵtextInterpolate(ctx.shifts().length);
            i0.ɵɵadvance(3);
            i0.ɵɵtwoWayProperty("ngModel", ctx.search);
            i0.ɵɵadvance(22);
            i0.ɵɵrepeater(ctx.visibleShifts());
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("open", ctx.drawerOpen())("title", ctx.editingId() ? "Edit shift schedule" : "Create shift schedule")("busy", ctx.saving());
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
            i0.ɵɵtwoWayProperty("ngModel", ctx.examScheduleId);
            i0.ɵɵproperty("disabled", !ctx.academicSessionId || !ctx.universityId);
            i0.ɵɵadvance(3);
            i0.ɵɵrepeater(ctx.scheduleOptions());
            i0.ɵɵadvance(5);
            i0.ɵɵtwoWayProperty("ngModel", ctx.caption);
            i0.ɵɵadvance(4);
            i0.ɵɵtwoWayProperty("ngModel", ctx.shiftSerial);
            i0.ɵɵadvance();
            i0.ɵɵrepeater(ctx.shiftSerials);
            i0.ɵɵadvance(5);
            i0.ɵɵtwoWayProperty("ngModel", ctx.timeFrom);
            i0.ɵɵadvance(4);
            i0.ɵɵtwoWayProperty("ngModel", ctx.timeFromMeridiem);
            i0.ɵɵadvance(8);
            i0.ɵɵtwoWayProperty("ngModel", ctx.timeTo);
            i0.ɵɵadvance(4);
            i0.ɵɵtwoWayProperty("ngModel", ctx.timeToMeridiem);
            i0.ɵɵadvance(6);
            i0.ɵɵtwoWayProperty("ngModel", ctx.isActive);
            i0.ɵɵadvance(3);
            i0.ɵɵconditional(!ctx.editingId() ? 105 : -1);
            i0.ɵɵadvance();
            i0.ɵɵproperty("disabled", ctx.saving());
            i0.ɵɵadvance();
            i0.ɵɵtextInterpolate1(" ", ctx.saving() ? "Saving\u2026" : "Save shift", " ");
            i0.ɵɵadvance();
            i0.ɵɵproperty("open", !!ctx.deleteTarget())("message", "This permanently removes the selected shift from its exam schedule.")("destructive", true);
        } }, dependencies: [FormsModule, i1.NgSelectOption, i1.ɵNgSelectMultipleOption, i1.DefaultValueAccessor, i1.CheckboxControlValueAccessor, i1.SelectControlValueAccessor, i1.NgControlStatus, i1.MaxLengthValidator, i1.NgModel, AdminDrawerComponent,
            AdminIllustrationComponent,
            AdminPageComponent,
            CompactActionMenuComponent,
            ConfirmDialogComponent], encapsulation: 2, changeDetection: 0 });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ExamShiftsComponent, [{
        type: Component,
        args: [{ selector: 'erp-exam-shifts', imports: [
                    FormsModule,
                    AdminDrawerComponent,
                    AdminIllustrationComponent,
                    AdminPageComponent,
                    CompactActionMenuComponent,
                    ConfirmDialogComponent,
                ], changeDetection: ChangeDetectionStrategy.OnPush, template: "<erp-admin-page\n  eyebrow=\"Exam\"\n  title=\"Shift schedule\"\n  description=\"Define the timing of each shift within an exam schedule.\"\n  variant=\"compact\"\n  layout=\"collection\"\n>\n  <button page-actions class=\"erp-button erp-button--primary\" type=\"button\" (click)=\"openCreate()\">\n    Create shift\n  </button>\n\n  @if (message()) {\n    <p class=\"erp-notice erp-notice--success\">{{ message() }}</p>\n  }\n  @if (error() && !drawerOpen()) {\n    <p class=\"erp-notice erp-notice--error\" role=\"alert\">{{ error() }}</p>\n  }\n\n  <section class=\"erp-card erp-table-shell\">\n    <div class=\"erp-table-toolbar\">\n      <div>\n        <h2>\n          Saved shifts <small>{{ shifts().length }}</small>\n        </h2>\n        <p>Each shift belongs to one configured exam schedule.</p>\n      </div>\n      <input\n        class=\"erp-control\"\n        type=\"search\"\n        placeholder=\"Search shifts\"\n        aria-label=\"Search exam shifts\"\n        [(ngModel)]=\"search\"\n      />\n    </div>\n    <div class=\"erp-table-shell__scroll\">\n      <table>\n        <thead>\n          <tr>\n            <th>Shift</th>\n            <th>Caption</th>\n            <th>Exam schedule</th>\n            <th>Session</th>\n            <th>University / College</th>\n            <th>Time</th>\n            <th>Status</th>\n            <th class=\"erp-table-shell__actions\">Actions</th>\n          </tr>\n        </thead>\n        <tbody>\n          @for (item of visibleShifts(); track item._id) {\n            <tr>\n              <td>\n                <strong>Shift {{ item.shiftSerial }}</strong>\n              </td>\n              <td>{{ item.caption }}</td>\n              <td>{{ item.examScheduleCaption }}</td>\n              <td>{{ item.academicSession }}</td>\n              <td>\n                <strong>{{ item.collegeName }}</strong\n                ><small>{{ item.universityName }}</small>\n              </td>\n              <td>\n                {{ item.timeFrom }} {{ item.timeFromMeridiem }} \u2013 {{ item.timeTo }}\n                {{ item.timeToMeridiem }}\n              </td>\n              <td>\n                <span class=\"erp-status\">{{ item.isActive ? 'Active' : 'Inactive' }}</span>\n              </td>\n              <td class=\"erp-table-shell__actions\">\n                <erp-compact-action-menu\n                  [items]=\"rowActions()\"\n                  (selected)=\"handleAction($event, item)\"\n                />\n              </td>\n            </tr>\n          } @empty {\n            <tr>\n              <td colspan=\"8\" class=\"erp-empty-state\">\n                <erp-admin-illustration kind=\"taskSchedule\" size=\"compact\" />\n                <p>{{ loading() ? 'Loading shift schedules\u2026' : 'No shift schedules found.' }}</p>\n              </td>\n            </tr>\n          }\n        </tbody>\n      </table>\n    </div>\n  </section>\n</erp-admin-page>\n\n<erp-admin-drawer\n  [open]=\"drawerOpen()\"\n  [title]=\"editingId() ? 'Edit shift schedule' : 'Create shift schedule'\"\n  eyebrow=\"Exam\"\n  description=\"Choose the exam schedule, shift number and working time.\"\n  illustration=\"taskSchedule\"\n  [busy]=\"saving()\"\n  (closed)=\"closeDrawer()\"\n>\n  @if (error()) {\n    <p class=\"erp-notice erp-notice--error\" role=\"alert\">{{ error() }}</p>\n  }\n  <section class=\"erp-card erp-card--padded\">\n    <div class=\"erp-form-grid\">\n      <label>\n        <span>Session *</span>\n        <select\n          class=\"erp-control\"\n          [(ngModel)]=\"academicSessionId\"\n          (ngModelChange)=\"scopeChanged()\"\n        >\n          <option value=\"\">Select session</option>\n          @for (item of master('academic'); track item._id) {\n            <option [value]=\"item._id\">{{ item.name }}</option>\n          }\n        </select>\n      </label>\n      <label>\n        <span>University *</span>\n        <select class=\"erp-control\" [(ngModel)]=\"universityId\" (ngModelChange)=\"scopeChanged()\">\n          <option value=\"\">Select university</option>\n          @for (item of master('university'); track item._id) {\n            <option [value]=\"item._id\">{{ item.name }}</option>\n          }\n        </select>\n      </label>\n      <label>\n        <span>Exam schedule *</span>\n        <select\n          class=\"erp-control\"\n          [(ngModel)]=\"examScheduleId\"\n          [disabled]=\"!academicSessionId || !universityId\"\n        >\n          <option value=\"\">Select exam schedule</option>\n          @for (item of scheduleOptions(); track item._id) {\n            <option [value]=\"item._id\">{{ item.caption }} \u00B7 {{ item.collegeName }}</option>\n          }\n        </select>\n      </label>\n      <label>\n        <span>Shift caption *</span>\n        <input\n          class=\"erp-control\"\n          type=\"text\"\n          maxlength=\"240\"\n          placeholder=\"Enter shift caption\"\n          [(ngModel)]=\"caption\"\n        />\n      </label>\n      <label>\n        <span>Shift serial *</span>\n        <select class=\"erp-control\" [(ngModel)]=\"shiftSerial\">\n          @for (serial of shiftSerials; track serial) {\n            <option [ngValue]=\"serial\">{{ serial }}</option>\n          }\n        </select>\n      </label>\n      <label>\n        <span>Time from *</span>\n        <input\n          class=\"erp-control\"\n          type=\"text\"\n          inputmode=\"numeric\"\n          maxlength=\"5\"\n          placeholder=\"HH:MM\"\n          [(ngModel)]=\"timeFrom\"\n        />\n      </label>\n      <label>\n        <span>From AM/PM *</span>\n        <select class=\"erp-control\" [(ngModel)]=\"timeFromMeridiem\">\n          <option value=\"AM\">AM</option>\n          <option value=\"PM\">PM</option>\n        </select>\n      </label>\n      <label>\n        <span>Time to *</span>\n        <input\n          class=\"erp-control\"\n          type=\"text\"\n          inputmode=\"numeric\"\n          maxlength=\"5\"\n          placeholder=\"HH:MM\"\n          [(ngModel)]=\"timeTo\"\n        />\n      </label>\n      <label>\n        <span>To AM/PM *</span>\n        <select class=\"erp-control\" [(ngModel)]=\"timeToMeridiem\">\n          <option value=\"AM\">AM</option>\n          <option value=\"PM\">PM</option>\n        </select>\n      </label>\n      <label>\n        <input type=\"checkbox\" [(ngModel)]=\"isActive\" />\n        <span>Active shift</span>\n      </label>\n    </div>\n    @if (!editingId()) {\n      <button\n        class=\"erp-button erp-button--secondary\"\n        type=\"button\"\n        [disabled]=\"saving()\"\n        (click)=\"resetForm()\"\n      >\n        Reset\n      </button>\n    }\n  </section>\n  <button\n    drawer-actions\n    class=\"erp-button erp-button--primary\"\n    type=\"button\"\n    [disabled]=\"saving()\"\n    (click)=\"save()\"\n  >\n    {{ saving() ? 'Saving\u2026' : 'Save shift' }}\n  </button>\n</erp-admin-drawer>\n\n<erp-confirm-dialog\n  [open]=\"!!deleteTarget()\"\n  eyebrow=\"Exam shift\"\n  title=\"Delete this shift schedule?\"\n  [message]=\"'This permanently removes the selected shift from its exam schedule.'\"\n  confirmLabel=\"Delete shift\"\n  [destructive]=\"true\"\n  (confirmed)=\"deleteShift()\"\n  (cancelled)=\"deleteTarget.set(null)\"\n/>\n" }]
    }], () => [], null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(ExamShiftsComponent, { className: "ExamShiftsComponent", filePath: "frontend/src/app/features/admin/exams/exam-shifts.component.ts", lineNumber: 38 }); })();
