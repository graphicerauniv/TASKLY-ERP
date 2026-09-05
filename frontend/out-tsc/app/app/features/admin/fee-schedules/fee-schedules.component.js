import { CurrencyPipe, DatePipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { forkJoin } from 'rxjs';
import { ApiService } from '../../../core/api.service';
import { AdminPageComponent } from '../../../shared/ui/admin-page/admin-page.component';
import { ConfirmDialogComponent } from '../../../shared/ui/confirm-dialog/confirm-dialog.component';
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
const _forTrack0 = ($index, $item) => $item._id;
function FeeSchedulesComponent_Conditional_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 1);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r0.message());
} }
function FeeSchedulesComponent_Conditional_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 2);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r0.error());
} }
function FeeSchedulesComponent_For_18_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 8);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r2 = ctx.$implicit;
    i0.ɵɵproperty("value", item_r2._id);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(item_r2.name);
} }
function FeeSchedulesComponent_For_26_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 8);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r3 = ctx.$implicit;
    i0.ɵɵproperty("value", item_r3._id);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(item_r3.name);
} }
function FeeSchedulesComponent_For_34_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 8);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r4 = ctx.$implicit;
    i0.ɵɵproperty("value", item_r4.name);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(item_r4.name);
} }
function FeeSchedulesComponent_Conditional_62_Template(rf, ctx) { if (rf & 1) {
    const _r5 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 20);
    i0.ɵɵlistener("click", function FeeSchedulesComponent_Conditional_62_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r5); const ctx_r0 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r0.resetForm()); });
    i0.ɵɵtext(1, " Cancel ");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵproperty("disabled", ctx_r0.saving());
} }
function FeeSchedulesComponent_For_94_Conditional_32_Template(rf, ctx) { if (rf & 1) {
    const _r8 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 14);
    i0.ɵɵlistener("click", function FeeSchedulesComponent_For_94_Conditional_32_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r8); const item_r7 = i0.ɵɵnextContext().$implicit; const ctx_r0 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r0.publish(item_r7, true)); });
    i0.ɵɵtext(1, " Change year & show fee ");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("disabled", ctx_r0.publishingId());
} }
function FeeSchedulesComponent_For_94_Template(rf, ctx) { if (rf & 1) {
    const _r6 = i0.ɵɵgetCurrentView();
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
    i0.ɵɵpipe(12, "date");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(13, "td");
    i0.ɵɵtext(14);
    i0.ɵɵpipe(15, "date");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(16, "td");
    i0.ɵɵtext(17);
    i0.ɵɵpipe(18, "currency");
    i0.ɵɵelementStart(19, "small");
    i0.ɵɵtext(20);
    i0.ɵɵpipe(21, "currency");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(22, "td")(23, "span", 21);
    i0.ɵɵtext(24);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(25, "td")(26, "button", 22);
    i0.ɵɵlistener("click", function FeeSchedulesComponent_For_94_Template_button_click_26_listener() { const item_r7 = i0.ɵɵrestoreView(_r6).$implicit; const ctx_r0 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r0.edit(item_r7)); });
    i0.ɵɵtext(27, " Edit");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(28, "button", 22);
    i0.ɵɵlistener("click", function FeeSchedulesComponent_For_94_Template_button_click_28_listener() { const item_r7 = i0.ɵɵrestoreView(_r6).$implicit; const ctx_r0 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r0.toggle(item_r7)); });
    i0.ɵɵtext(29);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(30, "button", 23);
    i0.ɵɵlistener("click", function FeeSchedulesComponent_For_94_Template_button_click_30_listener() { const item_r7 = i0.ɵɵrestoreView(_r6).$implicit; const ctx_r0 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r0.requestDelete(item_r7)); });
    i0.ɵɵtext(31, " Delete schedule ");
    i0.ɵɵelementEnd();
    i0.ɵɵconditionalCreate(32, FeeSchedulesComponent_For_94_Conditional_32_Template, 2, 1, "button", 24);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const item_r7 = ctx.$implicit;
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(item_r7.collegeName);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(item_r7.universityName);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(item_r7.academicSession);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(item_r7.mode === "semester" ? "Next semester" : "Next academic year");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind2(12, 11, item_r7.publishAt, "medium"));
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind2(15, 14, item_r7.nextPeriodDeadline, "medium"));
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind2(18, 17, item_r7.dailyFineAmount, "INR"), " / day");
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1("Cap ", i0.ɵɵpipeBind2(21, 20, item_r7.maxFineAmount, "INR"));
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(item_r7.isActive ? "Active" : "Inactive");
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate1(" ", item_r7.isActive ? "Disable" : "Enable", " ");
    i0.ɵɵadvance(3);
    i0.ɵɵconditional(item_r7.mode === "year" && item_r7.isActive ? 32 : -1);
} }
function FeeSchedulesComponent_ForEmpty_95_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "tr")(1, "td", 25);
    i0.ɵɵtext(2, "No fee publication schedules configured.");
    i0.ɵɵelementEnd()();
} }
export class FeeSchedulesComponent {
    api = inject(ApiService);
    items = signal([], ...(ngDevMode ? [{ debugName: "items" }] : /* istanbul ignore next */ []));
    universities = signal([], ...(ngDevMode ? [{ debugName: "universities" }] : /* istanbul ignore next */ []));
    colleges = signal([], ...(ngDevMode ? [{ debugName: "colleges" }] : /* istanbul ignore next */ []));
    academicSessions = signal([], ...(ngDevMode ? [{ debugName: "academicSessions" }] : /* istanbul ignore next */ []));
    saving = signal(false, ...(ngDevMode ? [{ debugName: "saving" }] : /* istanbul ignore next */ []));
    publishingId = signal(null, ...(ngDevMode ? [{ debugName: "publishingId" }] : /* istanbul ignore next */ []));
    editingId = signal(null, ...(ngDevMode ? [{ debugName: "editingId" }] : /* istanbul ignore next */ []));
    error = signal('', ...(ngDevMode ? [{ debugName: "error" }] : /* istanbul ignore next */ []));
    message = signal('', ...(ngDevMode ? [{ debugName: "message" }] : /* istanbul ignore next */ []));
    deleteTarget = signal(null, ...(ngDevMode ? [{ debugName: "deleteTarget" }] : /* istanbul ignore next */ []));
    universityId = '';
    collegeId = '';
    academicSession = '';
    mode = 'semester';
    publishAt = '';
    nextPeriodDeadline = '';
    dailyFineAmount = null;
    maxFineAmount = null;
    constructor() {
        this.load();
    }
    collegeOptions = () => this.universityId
        ? this.colleges().filter((college) => college.parentId === this.universityId)
        : [];
    changeUniversity() {
        if (!this.collegeOptions().some((college) => college._id === this.collegeId))
            this.collegeId = '';
    }
    load() {
        forkJoin({
            schedules: this.api.feeSchedules(),
            universities: this.api.masterValues('university', { active: true }),
            colleges: this.api.masterValues('college', { active: true }),
            academicSessions: this.api.masterValues('academic', { active: true }),
        }).subscribe({
            next: ({ schedules, universities, colleges, academicSessions }) => {
                this.items.set(schedules.items);
                this.universities.set(universities.items);
                this.colleges.set(colleges.items);
                this.academicSessions.set(academicSessions.items);
            },
            error: (error) => this.error.set(error.error?.message || 'Could not load fee schedules.'),
        });
    }
    save() {
        if (this.saving())
            return;
        if (!this.universityId ||
            !this.collegeId ||
            !this.academicSession.trim() ||
            !this.publishAt ||
            !this.nextPeriodDeadline) {
            this.error.set('University, college, session, visibility time and next-fee deadline are required.');
            return;
        }
        this.saving.set(true);
        this.error.set('');
        const body = {
            universityId: this.universityId,
            collegeId: this.collegeId,
            academicSession: this.academicSession.trim(),
            mode: this.mode,
            publishAt: new Date(this.publishAt).toISOString(),
            nextPeriodDeadline: new Date(this.nextPeriodDeadline).toISOString(),
            dailyFineAmount: Number(this.dailyFineAmount || 0),
            maxFineAmount: Number(this.maxFineAmount || 0),
            isActive: true,
        };
        const request = this.editingId()
            ? this.api.updateFeeSchedule(this.editingId(), body)
            : this.api.createFeeSchedule(body);
        request.subscribe({
            next: () => {
                this.message.set(this.editingId()
                    ? 'Fee publication schedule updated.'
                    : 'Fee publication schedule created.');
                this.saving.set(false);
                this.resetForm();
                this.load();
            },
            error: (error) => {
                this.error.set(error.error?.message || 'Could not create fee schedule.');
                this.saving.set(false);
            },
        });
    }
    edit(item) {
        this.editingId.set(item._id);
        this.universityId = item.universityId;
        this.collegeId = item.collegeId;
        this.academicSession = item.academicSession;
        this.mode = item.mode;
        this.publishAt = this.localDateTime(item.publishAt);
        this.nextPeriodDeadline = this.localDateTime(item.nextPeriodDeadline);
        this.dailyFineAmount = item.dailyFineAmount;
        this.maxFineAmount = item.maxFineAmount;
        this.error.set('');
        this.message.set('Editing the selected publication schedule.');
    }
    resetForm() {
        this.editingId.set(null);
        this.academicSession = '';
        this.mode = 'semester';
        this.publishAt = '';
        this.nextPeriodDeadline = '';
        this.dailyFineAmount = null;
        this.maxFineAmount = null;
    }
    publish(item, force = false) {
        if (this.publishingId())
            return;
        this.publishingId.set(item._id);
        this.error.set('');
        this.api.publishFeeSchedule(item._id, force).subscribe({
            next: ({ studentsProcessed, published, alreadyPublished, scheduled, promoted }) => {
                this.message.set(force
                    ? `${published} next-year fee ledger(s) are now visible and ${promoted} student(s) moved to the next academic year; ${studentsProcessed} students checked.`
                    : `${published} fee ledger(s) newly visible; ${scheduled} scheduled for the configured visibility time; ${alreadyPublished} were already visible (${studentsProcessed} students checked). Academic semesters and years were not changed.`);
                this.publishingId.set(null);
            },
            error: (error) => {
                this.error.set(error.error?.message || 'Could not publish scheduled fees.');
                this.publishingId.set(null);
            },
        });
    }
    toggle(item) {
        this.api.updateFeeSchedule(item._id, { isActive: !item.isActive }).subscribe({
            next: () => this.load(),
            error: (error) => this.error.set(error.error?.message || 'Could not update fee schedule.'),
        });
    }
    requestDelete(item) {
        this.deleteTarget.set(item);
    }
    deleteSchedule() {
        const item = this.deleteTarget();
        if (!item || this.saving())
            return;
        this.deleteTarget.set(null);
        this.saving.set(true);
        this.api.deleteFeeSchedule(item._id).subscribe({
            next: () => {
                this.message.set('Publication schedule deleted. Existing ledgers and payments were preserved.');
                this.saving.set(false);
                this.load();
            },
            error: (error) => {
                this.error.set(error.error?.message || 'Could not delete publication schedule.');
                this.saving.set(false);
            },
        });
    }
    localDateTime(value) {
        const date = new Date(value);
        const shifted = new Date(date.getTime() - date.getTimezoneOffset() * 60_000);
        return shifted.toISOString().slice(0, 16);
    }
    static ɵfac = function FeeSchedulesComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || FeeSchedulesComponent)(); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: FeeSchedulesComponent, selectors: [["erp-fee-schedules"]], decls: 97, vars: 18, consts: [["eyebrow", "Fee Management", "title", "Fee Change & Publication", "description", "Publish upcoming fees without changing the student's academic semester or year.", "variant", "minimal"], [1, "erp-notice", "erp-notice--success"], [1, "erp-notice", "erp-notice--error"], [1, "erp-card", "erp-card--padded"], [1, "erp-card__header"], [1, "erp-form-grid"], [1, "erp-control", 3, "ngModelChange", "ngModel"], ["value", ""], [3, "value"], ["value", "semester"], ["value", "year"], ["type", "datetime-local", 1, "erp-control", 3, "ngModelChange", "ngModel"], ["type", "number", "min", "0", 1, "erp-control", 3, "ngModelChange", "ngModel"], [1, "erp-form-actions"], ["type", "button", 1, "erp-button", "erp-button--primary", 3, "click", "disabled"], ["type", "button", 1, "erp-button", "erp-button--secondary", 3, "disabled"], [1, "erp-card", "erp-table-shell"], [1, "erp-table-toolbar"], [1, "erp-table-shell__scroll"], ["eyebrow", "Fee publication", "title", "Delete this publication schedule?", "confirmLabel", "Delete schedule", 3, "confirmed", "cancelled", "open", "message", "destructive"], ["type", "button", 1, "erp-button", "erp-button--secondary", 3, "click", "disabled"], [1, "erp-status"], ["type", "button", 1, "erp-button", "erp-button--secondary", 3, "click"], ["type", "button", 1, "erp-button", "erp-button--danger", 3, "click"], ["type", "button", 1, "erp-button", "erp-button--primary", 3, "disabled"], ["colspan", "8", 1, "erp-empty-state"]], template: function FeeSchedulesComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "erp-admin-page", 0);
            i0.ɵɵconditionalCreate(1, FeeSchedulesComponent_Conditional_1_Template, 2, 1, "p", 1);
            i0.ɵɵconditionalCreate(2, FeeSchedulesComponent_Conditional_2_Template, 2, 1, "p", 2);
            i0.ɵɵelementStart(3, "section", 3)(4, "div", 4)(5, "div")(6, "h2");
            i0.ɵɵtext(7, "Configure common deadline");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(8, "p");
            i0.ɵɵtext(9, "One university/college schedule applies to every course in the selected session.");
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(10, "div", 5)(11, "label")(12, "span");
            i0.ɵɵtext(13, "University *");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(14, "select", 6);
            i0.ɵɵtwoWayListener("ngModelChange", function FeeSchedulesComponent_Template_select_ngModelChange_14_listener($event) { i0.ɵɵtwoWayBindingSet(ctx.universityId, $event) || (ctx.universityId = $event); return $event; });
            i0.ɵɵlistener("ngModelChange", function FeeSchedulesComponent_Template_select_ngModelChange_14_listener() { return ctx.changeUniversity(); });
            i0.ɵɵelementStart(15, "option", 7);
            i0.ɵɵtext(16, "Select university");
            i0.ɵɵelementEnd();
            i0.ɵɵrepeaterCreate(17, FeeSchedulesComponent_For_18_Template, 2, 2, "option", 8, _forTrack0);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(19, "label")(20, "span");
            i0.ɵɵtext(21, "College *");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(22, "select", 6);
            i0.ɵɵtwoWayListener("ngModelChange", function FeeSchedulesComponent_Template_select_ngModelChange_22_listener($event) { i0.ɵɵtwoWayBindingSet(ctx.collegeId, $event) || (ctx.collegeId = $event); return $event; });
            i0.ɵɵelementStart(23, "option", 7);
            i0.ɵɵtext(24, "Select college");
            i0.ɵɵelementEnd();
            i0.ɵɵrepeaterCreate(25, FeeSchedulesComponent_For_26_Template, 2, 2, "option", 8, _forTrack0);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(27, "label")(28, "span");
            i0.ɵɵtext(29, "Academic session *");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(30, "select", 6);
            i0.ɵɵtwoWayListener("ngModelChange", function FeeSchedulesComponent_Template_select_ngModelChange_30_listener($event) { i0.ɵɵtwoWayBindingSet(ctx.academicSession, $event) || (ctx.academicSession = $event); return $event; });
            i0.ɵɵelementStart(31, "option", 7);
            i0.ɵɵtext(32, "Select session");
            i0.ɵɵelementEnd();
            i0.ɵɵrepeaterCreate(33, FeeSchedulesComponent_For_34_Template, 2, 2, "option", 8, _forTrack0);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(35, "label")(36, "span");
            i0.ɵɵtext(37, "Transition type *");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(38, "select", 6);
            i0.ɵɵtwoWayListener("ngModelChange", function FeeSchedulesComponent_Template_select_ngModelChange_38_listener($event) { i0.ɵɵtwoWayBindingSet(ctx.mode, $event) || (ctx.mode = $event); return $event; });
            i0.ɵɵelementStart(39, "option", 9);
            i0.ɵɵtext(40, "Next semester");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(41, "option", 10);
            i0.ɵɵtext(42, "Next academic year");
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(43, "label")(44, "span");
            i0.ɵɵtext(45, "Upcoming fee visible from *");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(46, "input", 11);
            i0.ɵɵtwoWayListener("ngModelChange", function FeeSchedulesComponent_Template_input_ngModelChange_46_listener($event) { i0.ɵɵtwoWayBindingSet(ctx.publishAt, $event) || (ctx.publishAt = $event); return $event; });
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(47, "label")(48, "span");
            i0.ɵɵtext(49, "Next fee deadline *");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(50, "input", 11);
            i0.ɵɵtwoWayListener("ngModelChange", function FeeSchedulesComponent_Template_input_ngModelChange_50_listener($event) { i0.ɵɵtwoWayBindingSet(ctx.nextPeriodDeadline, $event) || (ctx.nextPeriodDeadline = $event); return $event; });
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(51, "label")(52, "span");
            i0.ɵɵtext(53, "Daily fine after deadline");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(54, "input", 12);
            i0.ɵɵtwoWayListener("ngModelChange", function FeeSchedulesComponent_Template_input_ngModelChange_54_listener($event) { i0.ɵɵtwoWayBindingSet(ctx.dailyFineAmount, $event) || (ctx.dailyFineAmount = $event); return $event; });
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(55, "label")(56, "span");
            i0.ɵɵtext(57, "Maximum fine");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(58, "input", 12);
            i0.ɵɵtwoWayListener("ngModelChange", function FeeSchedulesComponent_Template_input_ngModelChange_58_listener($event) { i0.ɵɵtwoWayBindingSet(ctx.maxFineAmount, $event) || (ctx.maxFineAmount = $event); return $event; });
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(59, "div", 13)(60, "button", 14);
            i0.ɵɵlistener("click", function FeeSchedulesComponent_Template_button_click_60_listener() { return ctx.save(); });
            i0.ɵɵtext(61);
            i0.ɵɵelementEnd();
            i0.ɵɵconditionalCreate(62, FeeSchedulesComponent_Conditional_62_Template, 2, 1, "button", 15);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(63, "section", 16)(64, "div", 17)(65, "div")(66, "h2");
            i0.ɵɵtext(67, " Publication schedules ");
            i0.ɵɵelementStart(68, "small");
            i0.ɵɵtext(69);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(70, "p");
            i0.ɵɵtext(71, " Publication prepares the next ledger, reveals it at the visibility time, and applies its fine rule after the next-fee deadline. ");
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(72, "div", 18)(73, "table")(74, "thead")(75, "tr")(76, "th");
            i0.ɵɵtext(77, "University / College");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(78, "th");
            i0.ɵɵtext(79, "Session");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(80, "th");
            i0.ɵɵtext(81, "Target");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(82, "th");
            i0.ɵɵtext(83, "Visible from");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(84, "th");
            i0.ɵɵtext(85, "Previous deadline");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(86, "th");
            i0.ɵɵtext(87, "Fine");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(88, "th");
            i0.ɵɵtext(89, "Status");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(90, "th");
            i0.ɵɵtext(91, "Actions");
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(92, "tbody");
            i0.ɵɵrepeaterCreate(93, FeeSchedulesComponent_For_94_Template, 33, 23, "tr", null, _forTrack0, false, FeeSchedulesComponent_ForEmpty_95_Template, 3, 0, "tr");
            i0.ɵɵelementEnd()()()()();
            i0.ɵɵelementStart(96, "erp-confirm-dialog", 19);
            i0.ɵɵlistener("confirmed", function FeeSchedulesComponent_Template_erp_confirm_dialog_confirmed_96_listener() { return ctx.deleteSchedule(); })("cancelled", function FeeSchedulesComponent_Template_erp_confirm_dialog_cancelled_96_listener() { return ctx.deleteTarget.set(null); });
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵadvance();
            i0.ɵɵconditional(ctx.message() ? 1 : -1);
            i0.ɵɵadvance();
            i0.ɵɵconditional(ctx.error() ? 2 : -1);
            i0.ɵɵadvance(12);
            i0.ɵɵtwoWayProperty("ngModel", ctx.universityId);
            i0.ɵɵadvance(3);
            i0.ɵɵrepeater(ctx.universities());
            i0.ɵɵadvance(5);
            i0.ɵɵtwoWayProperty("ngModel", ctx.collegeId);
            i0.ɵɵadvance(3);
            i0.ɵɵrepeater(ctx.collegeOptions());
            i0.ɵɵadvance(5);
            i0.ɵɵtwoWayProperty("ngModel", ctx.academicSession);
            i0.ɵɵadvance(3);
            i0.ɵɵrepeater(ctx.academicSessions());
            i0.ɵɵadvance(5);
            i0.ɵɵtwoWayProperty("ngModel", ctx.mode);
            i0.ɵɵadvance(8);
            i0.ɵɵtwoWayProperty("ngModel", ctx.publishAt);
            i0.ɵɵadvance(4);
            i0.ɵɵtwoWayProperty("ngModel", ctx.nextPeriodDeadline);
            i0.ɵɵadvance(4);
            i0.ɵɵtwoWayProperty("ngModel", ctx.dailyFineAmount);
            i0.ɵɵadvance(4);
            i0.ɵɵtwoWayProperty("ngModel", ctx.maxFineAmount);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("disabled", ctx.saving());
            i0.ɵɵadvance();
            i0.ɵɵtextInterpolate1(" ", ctx.saving() ? "Saving\u2026" : ctx.editingId() ? "Save schedule" : "Create schedule", " ");
            i0.ɵɵadvance();
            i0.ɵɵconditional(ctx.editingId() ? 62 : -1);
            i0.ɵɵadvance(7);
            i0.ɵɵtextInterpolate(ctx.items().length);
            i0.ɵɵadvance(24);
            i0.ɵɵrepeater(ctx.items());
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("open", !!ctx.deleteTarget())("message", "This removes the schedule rule. Existing ledgers, payments and receipts will be preserved.")("destructive", true);
        } }, dependencies: [AdminPageComponent, ConfirmDialogComponent, FormsModule, i1.NgSelectOption, i1.ɵNgSelectMultipleOption, i1.DefaultValueAccessor, i1.NumberValueAccessor, i1.SelectControlValueAccessor, i1.NgControlStatus, i1.MinValidator, i1.NgModel, CurrencyPipe, DatePipe], encapsulation: 2, changeDetection: 0 });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(FeeSchedulesComponent, [{
        type: Component,
        args: [{ selector: 'erp-fee-schedules', imports: [AdminPageComponent, ConfirmDialogComponent, CurrencyPipe, DatePipe, FormsModule], changeDetection: ChangeDetectionStrategy.OnPush, template: "<erp-admin-page\n  eyebrow=\"Fee Management\"\n  title=\"Fee Change & Publication\"\n  description=\"Publish upcoming fees without changing the student's academic semester or year.\"\n  variant=\"minimal\"\n>\n  @if (message()) {\n    <p class=\"erp-notice erp-notice--success\">{{ message() }}</p>\n  }\n  @if (error()) {\n    <p class=\"erp-notice erp-notice--error\">{{ error() }}</p>\n  }\n  <section class=\"erp-card erp-card--padded\">\n    <div class=\"erp-card__header\">\n      <div>\n        <h2>Configure common deadline</h2>\n        <p>One university/college schedule applies to every course in the selected session.</p>\n      </div>\n    </div>\n    <div class=\"erp-form-grid\">\n      <label\n        ><span>University *</span\n        ><select\n          class=\"erp-control\"\n          [(ngModel)]=\"universityId\"\n          (ngModelChange)=\"changeUniversity()\"\n        >\n          <option value=\"\">Select university</option>\n          @for (item of universities(); track item._id) {\n            <option [value]=\"item._id\">{{ item.name }}</option>\n          }\n        </select></label\n      >\n      <label\n        ><span>College *</span\n        ><select class=\"erp-control\" [(ngModel)]=\"collegeId\">\n          <option value=\"\">Select college</option>\n          @for (item of collegeOptions(); track item._id) {\n            <option [value]=\"item._id\">{{ item.name }}</option>\n          }\n        </select></label\n      >\n      <label\n        ><span>Academic session *</span\n        ><select class=\"erp-control\" [(ngModel)]=\"academicSession\">\n          <option value=\"\">Select session</option>\n          @for (item of academicSessions(); track item._id) {\n            <option [value]=\"item.name\">{{ item.name }}</option>\n          }\n        </select></label\n      >\n      <label\n        ><span>Transition type *</span\n        ><select class=\"erp-control\" [(ngModel)]=\"mode\">\n          <option value=\"semester\">Next semester</option>\n          <option value=\"year\">Next academic year</option>\n        </select></label\n      >\n      <label\n        ><span>Upcoming fee visible from *</span\n        ><input class=\"erp-control\" type=\"datetime-local\" [(ngModel)]=\"publishAt\"\n      /></label>\n      <label\n        ><span>Next fee deadline *</span\n        ><input class=\"erp-control\" type=\"datetime-local\" [(ngModel)]=\"nextPeriodDeadline\"\n      /></label>\n      <label\n        ><span>Daily fine after deadline</span\n        ><input class=\"erp-control\" type=\"number\" min=\"0\" [(ngModel)]=\"dailyFineAmount\"\n      /></label>\n      <label\n        ><span>Maximum fine</span\n        ><input class=\"erp-control\" type=\"number\" min=\"0\" [(ngModel)]=\"maxFineAmount\"\n      /></label>\n    </div>\n    <div class=\"erp-form-actions\">\n      <button\n        class=\"erp-button erp-button--primary\"\n        type=\"button\"\n        [disabled]=\"saving()\"\n        (click)=\"save()\"\n      >\n        {{ saving() ? 'Saving\u2026' : editingId() ? 'Save schedule' : 'Create schedule' }}\n      </button>\n      @if (editingId()) {\n        <button\n          class=\"erp-button erp-button--secondary\"\n          type=\"button\"\n          [disabled]=\"saving()\"\n          (click)=\"resetForm()\"\n        >\n          Cancel\n        </button>\n      }\n    </div>\n  </section>\n  <section class=\"erp-card erp-table-shell\">\n    <div class=\"erp-table-toolbar\">\n      <div>\n        <h2>\n          Publication schedules <small>{{ items().length }}</small>\n        </h2>\n        <p>\n          Publication prepares the next ledger, reveals it at the visibility time, and applies its\n          fine rule after the next-fee deadline.\n        </p>\n      </div>\n    </div>\n    <div class=\"erp-table-shell__scroll\">\n      <table>\n        <thead>\n          <tr>\n            <th>University / College</th>\n            <th>Session</th>\n            <th>Target</th>\n            <th>Visible from</th>\n            <th>Previous deadline</th>\n            <th>Fine</th>\n            <th>Status</th>\n            <th>Actions</th>\n          </tr>\n        </thead>\n        <tbody>\n          @for (item of items(); track item._id) {\n            <tr>\n              <td>\n                <strong>{{ item.collegeName }}</strong\n                ><small>{{ item.universityName }}</small>\n              </td>\n              <td>{{ item.academicSession }}</td>\n              <td>{{ item.mode === 'semester' ? 'Next semester' : 'Next academic year' }}</td>\n              <td>{{ item.publishAt | date: 'medium' }}</td>\n              <td>{{ item.nextPeriodDeadline | date: 'medium' }}</td>\n              <td>\n                {{ item.dailyFineAmount | currency: 'INR' }} / day<small\n                  >Cap {{ item.maxFineAmount | currency: 'INR' }}</small\n                >\n              </td>\n              <td>\n                <span class=\"erp-status\">{{ item.isActive ? 'Active' : 'Inactive' }}</span>\n              </td>\n              <td>\n                <button class=\"erp-button erp-button--secondary\" type=\"button\" (click)=\"edit(item)\">\n                  Edit</button\n                ><button\n                  class=\"erp-button erp-button--secondary\"\n                  type=\"button\"\n                  (click)=\"toggle(item)\"\n                >\n                  {{ item.isActive ? 'Disable' : 'Enable' }}\n                </button>\n                <button\n                  class=\"erp-button erp-button--danger\"\n                  type=\"button\"\n                  (click)=\"requestDelete(item)\"\n                >\n                  Delete schedule\n                </button>\n                @if (item.mode === 'year' && item.isActive) {\n                  <button\n                    class=\"erp-button erp-button--primary\"\n                    type=\"button\"\n                    [disabled]=\"publishingId()\"\n                    (click)=\"publish(item, true)\"\n                  >\n                    Change year & show fee\n                  </button>\n                }\n              </td>\n            </tr>\n          } @empty {\n            <tr>\n              <td colspan=\"8\" class=\"erp-empty-state\">No fee publication schedules configured.</td>\n            </tr>\n          }\n        </tbody>\n      </table>\n    </div>\n  </section>\n</erp-admin-page>\n\n<erp-confirm-dialog\n  [open]=\"!!deleteTarget()\"\n  eyebrow=\"Fee publication\"\n  title=\"Delete this publication schedule?\"\n  [message]=\"'This removes the schedule rule. Existing ledgers, payments and receipts will be preserved.'\"\n  confirmLabel=\"Delete schedule\"\n  [destructive]=\"true\"\n  (confirmed)=\"deleteSchedule()\"\n  (cancelled)=\"deleteTarget.set(null)\"\n/>\n" }]
    }], () => [], null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(FeeSchedulesComponent, { className: "FeeSchedulesComponent", filePath: "frontend/src/app/features/admin/fee-schedules/fee-schedules.component.ts", lineNumber: 16 }); })();
