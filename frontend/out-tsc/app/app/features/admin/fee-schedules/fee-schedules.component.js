import { AdminIllustrationComponent } from '../../../shared/ui/admin-illustration/admin-illustration.component';
import { AdminDrawerComponent } from '../../../shared/ui/admin-drawer/admin-drawer.component';
import { CompactActionMenuComponent, } from '../../../shared/ui/compact-action-menu/compact-action-menu.component';
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
function FeeSchedulesComponent_Conditional_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 2);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r0.message());
} }
function FeeSchedulesComponent_Conditional_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 3);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r0.error());
} }
function FeeSchedulesComponent_For_36_Template(rf, ctx) { if (rf & 1) {
    const _r2 = i0.ɵɵgetCurrentView();
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
    i0.ɵɵelementStart(25, "td", 22)(26, "erp-compact-action-menu", 23);
    i0.ɵɵlistener("selected", function FeeSchedulesComponent_For_36_Template_erp_compact_action_menu_selected_26_listener($event) { const item_r3 = i0.ɵɵrestoreView(_r2).$implicit; const ctx_r0 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r0.handleRowAction($event, item_r3)); });
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const item_r3 = ctx.$implicit;
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(item_r3.collegeName);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(item_r3.universityName);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(item_r3.academicSession);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(item_r3.mode === "semester" ? "Next semester" : "Next academic year");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind2(12, 10, item_r3.publishAt, "medium"));
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind2(15, 13, item_r3.nextPeriodDeadline, "medium"));
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind2(18, 16, item_r3.dailyFineAmount, "INR"), " / day");
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1("Cap ", i0.ɵɵpipeBind2(21, 19, item_r3.maxFineAmount, "INR"));
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(item_r3.isActive ? "Active" : "Inactive");
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("items", ctx_r0.rowActions(item_r3));
} }
function FeeSchedulesComponent_ForEmpty_37_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "tr")(1, "td", 24);
    i0.ɵɵelement(2, "erp-admin-illustration", 25);
    i0.ɵɵelementStart(3, "p");
    i0.ɵɵtext(4, "No fee publication schedules configured.");
    i0.ɵɵelementEnd()()();
} }
function FeeSchedulesComponent_Conditional_40_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 9);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r0.error());
} }
function FeeSchedulesComponent_For_56_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 15);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r4 = ctx.$implicit;
    i0.ɵɵproperty("value", item_r4._id);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(item_r4.name);
} }
function FeeSchedulesComponent_For_64_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 15);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r5 = ctx.$implicit;
    i0.ɵɵproperty("value", item_r5._id);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(item_r5.name);
} }
function FeeSchedulesComponent_For_72_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 15);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r6 = ctx.$implicit;
    i0.ɵɵproperty("value", item_r6.name);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(item_r6.name);
} }
export class FeeSchedulesComponent {
    api = inject(ApiService);
    drawerOpen = signal(false, ...(ngDevMode ? [{ debugName: "drawerOpen" }] : /* istanbul ignore next */ []));
    openCreate() {
        this.resetForm();
        this.error.set('');
        this.drawerOpen.set(true);
    }
    closeDrawer() {
        if (!this.saving()) {
            this.drawerOpen.set(false);
            this.resetForm();
        }
    }
    rowActions(item) {
        return [
            { id: 'edit', label: 'Edit schedule', icon: 'edit' },
            {
                id: 'toggle',
                label: item.isActive ? 'Disable schedule' : 'Enable schedule',
                icon: 'check',
                disabled: !!this.publishingId() || this.saving(),
            },
            ...(item.mode === 'year' && item.isActive
                ? [
                    {
                        id: 'publish',
                        label: 'Change year & show fee',
                        icon: 'transfer',
                        disabled: !!this.publishingId() || this.saving(),
                    },
                ]
                : []),
            {
                id: 'delete',
                label: 'Delete schedule',
                icon: 'delete',
                destructive: true,
                disabled: this.saving(),
            },
        ];
    }
    handleRowAction(action, item) {
        if (action === 'edit')
            this.edit(item);
        else if (action === 'toggle')
            this.toggle(item);
        else if (action === 'publish')
            this.publish(item, true);
        else if (action === 'delete')
            this.requestDelete(item);
    }
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
                this.drawerOpen.set(false);
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
        this.drawerOpen.set(true);
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
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: FeeSchedulesComponent, selectors: [["erp-fee-schedules"]], decls: 99, vars: 21, consts: [["eyebrow", "Fee Management", "title", "Fee Change & Publication", "description", "Publish upcoming fees without changing the student's academic semester or year.", "variant", "compact", "layout", "collection"], ["page-actions", "", "type", "button", 1, "erp-button", "erp-button--primary", 3, "click"], [1, "erp-notice", "erp-notice--success"], [1, "erp-notice", "erp-notice--error"], [1, "erp-card", "erp-table-shell"], [1, "erp-table-toolbar"], [1, "erp-table-shell__scroll"], ["eyebrow", "Fee publication", "title", "Delete this publication schedule?", "confirmLabel", "Delete schedule", 3, "confirmed", "cancelled", "open", "message", "destructive"], ["eyebrow", "Fee publication", "description", "Set the publication time, deadline and fine rules.", "illustration", "taskSchedule", 3, "closed", "open", "title", "busy"], ["role", "alert", 1, "erp-notice", "erp-notice--error"], [1, "erp-card", "erp-card--padded"], [1, "erp-card__header"], [1, "erp-form-grid"], [1, "erp-control", 3, "ngModelChange", "ngModel"], ["value", ""], [3, "value"], ["value", "semester"], ["value", "year"], ["type", "datetime-local", 1, "erp-control", 3, "ngModelChange", "ngModel"], ["type", "number", "min", "0", 1, "erp-control", 3, "ngModelChange", "ngModel"], ["drawer-actions", "", "type", "button", 1, "erp-button", "erp-button--primary", 3, "click", "disabled"], [1, "erp-status"], [1, "erp-table-shell__actions"], [3, "selected", "items"], ["colspan", "8", 1, "erp-empty-state"], ["kind", "feeWallet", "size", "compact"]], template: function FeeSchedulesComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "erp-admin-page", 0)(1, "button", 1);
            i0.ɵɵlistener("click", function FeeSchedulesComponent_Template_button_click_1_listener() { return ctx.openCreate(); });
            i0.ɵɵtext(2, " Create schedule ");
            i0.ɵɵelementEnd();
            i0.ɵɵconditionalCreate(3, FeeSchedulesComponent_Conditional_3_Template, 2, 1, "p", 2);
            i0.ɵɵconditionalCreate(4, FeeSchedulesComponent_Conditional_4_Template, 2, 1, "p", 3);
            i0.ɵɵelementStart(5, "section", 4)(6, "div", 5)(7, "div")(8, "h2");
            i0.ɵɵtext(9, " Publication schedules ");
            i0.ɵɵelementStart(10, "small");
            i0.ɵɵtext(11);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(12, "p");
            i0.ɵɵtext(13, " Publication prepares the next ledger, reveals it at the visibility time, and applies its fine rule after the next-fee deadline. ");
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(14, "div", 6)(15, "table")(16, "thead")(17, "tr")(18, "th");
            i0.ɵɵtext(19, "University / College");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(20, "th");
            i0.ɵɵtext(21, "Session");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(22, "th");
            i0.ɵɵtext(23, "Target");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(24, "th");
            i0.ɵɵtext(25, "Visible from");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(26, "th");
            i0.ɵɵtext(27, "Previous deadline");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(28, "th");
            i0.ɵɵtext(29, "Fine");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(30, "th");
            i0.ɵɵtext(31, "Status");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(32, "th");
            i0.ɵɵtext(33, "Actions");
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(34, "tbody");
            i0.ɵɵrepeaterCreate(35, FeeSchedulesComponent_For_36_Template, 27, 22, "tr", null, _forTrack0, false, FeeSchedulesComponent_ForEmpty_37_Template, 5, 0, "tr");
            i0.ɵɵelementEnd()()()()();
            i0.ɵɵelementStart(38, "erp-confirm-dialog", 7);
            i0.ɵɵlistener("confirmed", function FeeSchedulesComponent_Template_erp_confirm_dialog_confirmed_38_listener() { return ctx.deleteSchedule(); })("cancelled", function FeeSchedulesComponent_Template_erp_confirm_dialog_cancelled_38_listener() { return ctx.deleteTarget.set(null); });
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(39, "erp-admin-drawer", 8);
            i0.ɵɵlistener("closed", function FeeSchedulesComponent_Template_erp_admin_drawer_closed_39_listener() { return ctx.closeDrawer(); });
            i0.ɵɵconditionalCreate(40, FeeSchedulesComponent_Conditional_40_Template, 2, 1, "p", 9);
            i0.ɵɵelementStart(41, "section", 10)(42, "div", 11)(43, "div")(44, "h2");
            i0.ɵɵtext(45, "Configure common deadline");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(46, "p");
            i0.ɵɵtext(47, "One university/college schedule applies to every course in the selected session.");
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(48, "div", 12)(49, "label")(50, "span");
            i0.ɵɵtext(51, "University *");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(52, "select", 13);
            i0.ɵɵtwoWayListener("ngModelChange", function FeeSchedulesComponent_Template_select_ngModelChange_52_listener($event) { i0.ɵɵtwoWayBindingSet(ctx.universityId, $event) || (ctx.universityId = $event); return $event; });
            i0.ɵɵlistener("ngModelChange", function FeeSchedulesComponent_Template_select_ngModelChange_52_listener() { return ctx.changeUniversity(); });
            i0.ɵɵelementStart(53, "option", 14);
            i0.ɵɵtext(54, "Select university");
            i0.ɵɵelementEnd();
            i0.ɵɵrepeaterCreate(55, FeeSchedulesComponent_For_56_Template, 2, 2, "option", 15, _forTrack0);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(57, "label")(58, "span");
            i0.ɵɵtext(59, "College *");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(60, "select", 13);
            i0.ɵɵtwoWayListener("ngModelChange", function FeeSchedulesComponent_Template_select_ngModelChange_60_listener($event) { i0.ɵɵtwoWayBindingSet(ctx.collegeId, $event) || (ctx.collegeId = $event); return $event; });
            i0.ɵɵelementStart(61, "option", 14);
            i0.ɵɵtext(62, "Select college");
            i0.ɵɵelementEnd();
            i0.ɵɵrepeaterCreate(63, FeeSchedulesComponent_For_64_Template, 2, 2, "option", 15, _forTrack0);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(65, "label")(66, "span");
            i0.ɵɵtext(67, "Academic session *");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(68, "select", 13);
            i0.ɵɵtwoWayListener("ngModelChange", function FeeSchedulesComponent_Template_select_ngModelChange_68_listener($event) { i0.ɵɵtwoWayBindingSet(ctx.academicSession, $event) || (ctx.academicSession = $event); return $event; });
            i0.ɵɵelementStart(69, "option", 14);
            i0.ɵɵtext(70, "Select session");
            i0.ɵɵelementEnd();
            i0.ɵɵrepeaterCreate(71, FeeSchedulesComponent_For_72_Template, 2, 2, "option", 15, _forTrack0);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(73, "label")(74, "span");
            i0.ɵɵtext(75, "Transition type *");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(76, "select", 13);
            i0.ɵɵtwoWayListener("ngModelChange", function FeeSchedulesComponent_Template_select_ngModelChange_76_listener($event) { i0.ɵɵtwoWayBindingSet(ctx.mode, $event) || (ctx.mode = $event); return $event; });
            i0.ɵɵelementStart(77, "option", 16);
            i0.ɵɵtext(78, "Next semester");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(79, "option", 17);
            i0.ɵɵtext(80, "Next academic year");
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(81, "label")(82, "span");
            i0.ɵɵtext(83, "Upcoming fee visible from *");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(84, "input", 18);
            i0.ɵɵtwoWayListener("ngModelChange", function FeeSchedulesComponent_Template_input_ngModelChange_84_listener($event) { i0.ɵɵtwoWayBindingSet(ctx.publishAt, $event) || (ctx.publishAt = $event); return $event; });
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(85, "label")(86, "span");
            i0.ɵɵtext(87, "Next fee deadline *");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(88, "input", 18);
            i0.ɵɵtwoWayListener("ngModelChange", function FeeSchedulesComponent_Template_input_ngModelChange_88_listener($event) { i0.ɵɵtwoWayBindingSet(ctx.nextPeriodDeadline, $event) || (ctx.nextPeriodDeadline = $event); return $event; });
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(89, "label")(90, "span");
            i0.ɵɵtext(91, "Daily fine after deadline");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(92, "input", 19);
            i0.ɵɵtwoWayListener("ngModelChange", function FeeSchedulesComponent_Template_input_ngModelChange_92_listener($event) { i0.ɵɵtwoWayBindingSet(ctx.dailyFineAmount, $event) || (ctx.dailyFineAmount = $event); return $event; });
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(93, "label")(94, "span");
            i0.ɵɵtext(95, "Maximum fine");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(96, "input", 19);
            i0.ɵɵtwoWayListener("ngModelChange", function FeeSchedulesComponent_Template_input_ngModelChange_96_listener($event) { i0.ɵɵtwoWayBindingSet(ctx.maxFineAmount, $event) || (ctx.maxFineAmount = $event); return $event; });
            i0.ɵɵelementEnd()()()();
            i0.ɵɵelementStart(97, "button", 20);
            i0.ɵɵlistener("click", function FeeSchedulesComponent_Template_button_click_97_listener() { return ctx.save(); });
            i0.ɵɵtext(98);
            i0.ɵɵelementEnd()();
        } if (rf & 2) {
            i0.ɵɵadvance(3);
            i0.ɵɵconditional(ctx.message() ? 3 : -1);
            i0.ɵɵadvance();
            i0.ɵɵconditional(ctx.error() ? 4 : -1);
            i0.ɵɵadvance(7);
            i0.ɵɵtextInterpolate(ctx.items().length);
            i0.ɵɵadvance(24);
            i0.ɵɵrepeater(ctx.items());
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("open", !!ctx.deleteTarget())("message", "This removes the schedule rule. Existing ledgers, payments and receipts will be preserved.")("destructive", true);
            i0.ɵɵadvance();
            i0.ɵɵproperty("open", ctx.drawerOpen())("title", ctx.editingId() ? "Edit publication schedule" : "Create publication schedule")("busy", ctx.saving());
            i0.ɵɵadvance();
            i0.ɵɵconditional(ctx.error() ? 40 : -1);
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
            i0.ɵɵadvance();
            i0.ɵɵproperty("disabled", ctx.saving());
            i0.ɵɵadvance();
            i0.ɵɵtextInterpolate1(" ", ctx.saving() ? "Saving\u2026" : "Save schedule", " ");
        } }, dependencies: [AdminIllustrationComponent,
            AdminDrawerComponent,
            CompactActionMenuComponent,
            AdminPageComponent,
            ConfirmDialogComponent,
            FormsModule, i1.NgSelectOption, i1.ɵNgSelectMultipleOption, i1.DefaultValueAccessor, i1.NumberValueAccessor, i1.SelectControlValueAccessor, i1.NgControlStatus, i1.MinValidator, i1.NgModel, CurrencyPipe,
            DatePipe], encapsulation: 2, changeDetection: 0 });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(FeeSchedulesComponent, [{
        type: Component,
        args: [{ selector: 'erp-fee-schedules', imports: [
                    AdminIllustrationComponent,
                    AdminDrawerComponent,
                    CompactActionMenuComponent,
                    AdminPageComponent,
                    ConfirmDialogComponent,
                    CurrencyPipe,
                    DatePipe,
                    FormsModule,
                ], changeDetection: ChangeDetectionStrategy.OnPush, template: "<erp-admin-page\n  eyebrow=\"Fee Management\"\n  title=\"Fee Change & Publication\"\n  description=\"Publish upcoming fees without changing the student's academic semester or year.\"\n  variant=\"compact\"\n  layout=\"collection\"\n>\n  <button page-actions class=\"erp-button erp-button--primary\" type=\"button\" (click)=\"openCreate()\">\n    Create schedule\n  </button>\n  @if (message()) {\n    <p class=\"erp-notice erp-notice--success\">{{ message() }}</p>\n  }\n  @if (error()) {\n    <p class=\"erp-notice erp-notice--error\">{{ error() }}</p>\n  }\n  <section class=\"erp-card erp-table-shell\">\n    <div class=\"erp-table-toolbar\">\n      <div>\n        <h2>\n          Publication schedules <small>{{ items().length }}</small>\n        </h2>\n        <p>\n          Publication prepares the next ledger, reveals it at the visibility time, and applies its\n          fine rule after the next-fee deadline.\n        </p>\n      </div>\n    </div>\n    <div class=\"erp-table-shell__scroll\">\n      <table>\n        <thead>\n          <tr>\n            <th>University / College</th>\n            <th>Session</th>\n            <th>Target</th>\n            <th>Visible from</th>\n            <th>Previous deadline</th>\n            <th>Fine</th>\n            <th>Status</th>\n            <th>Actions</th>\n          </tr>\n        </thead>\n        <tbody>\n          @for (item of items(); track item._id) {\n            <tr>\n              <td>\n                <strong>{{ item.collegeName }}</strong\n                ><small>{{ item.universityName }}</small>\n              </td>\n              <td>{{ item.academicSession }}</td>\n              <td>{{ item.mode === 'semester' ? 'Next semester' : 'Next academic year' }}</td>\n              <td>{{ item.publishAt | date: 'medium' }}</td>\n              <td>{{ item.nextPeriodDeadline | date: 'medium' }}</td>\n              <td>\n                {{ item.dailyFineAmount | currency: 'INR' }} / day<small\n                  >Cap {{ item.maxFineAmount | currency: 'INR' }}</small\n                >\n              </td>\n              <td>\n                <span class=\"erp-status\">{{ item.isActive ? 'Active' : 'Inactive' }}</span>\n              </td>\n              <td class=\"erp-table-shell__actions\">\n                <erp-compact-action-menu\n                  [items]=\"rowActions(item)\"\n                  (selected)=\"handleRowAction($event, item)\"\n                />\n              </td>\n            </tr>\n          } @empty {\n            <tr>\n              <td colspan=\"8\" class=\"erp-empty-state\">\n                <erp-admin-illustration kind=\"feeWallet\" size=\"compact\" />\n                <p>No fee publication schedules configured.</p>\n              </td>\n            </tr>\n          }\n        </tbody>\n      </table>\n    </div>\n  </section>\n</erp-admin-page>\n\n<erp-confirm-dialog\n  [open]=\"!!deleteTarget()\"\n  eyebrow=\"Fee publication\"\n  title=\"Delete this publication schedule?\"\n  [message]=\"'This removes the schedule rule. Existing ledgers, payments and receipts will be preserved.'\"\n  confirmLabel=\"Delete schedule\"\n  [destructive]=\"true\"\n  (confirmed)=\"deleteSchedule()\"\n  (cancelled)=\"deleteTarget.set(null)\"\n/>\n<erp-admin-drawer\n  [open]=\"drawerOpen()\"\n  [title]=\"editingId() ? 'Edit publication schedule' : 'Create publication schedule'\"\n  eyebrow=\"Fee publication\"\n  description=\"Set the publication time, deadline and fine rules.\"\n  illustration=\"taskSchedule\"\n  [busy]=\"saving()\"\n  (closed)=\"closeDrawer()\"\n>\n  @if (error()) {\n    <p class=\"erp-notice erp-notice--error\" role=\"alert\">{{ error() }}</p>\n  }\n  <section class=\"erp-card erp-card--padded\">\n    <div class=\"erp-card__header\">\n      <div>\n        <h2>Configure common deadline</h2>\n        <p>One university/college schedule applies to every course in the selected session.</p>\n      </div>\n    </div>\n    <div class=\"erp-form-grid\">\n      <label\n        ><span>University *</span\n        ><select\n          class=\"erp-control\"\n          [(ngModel)]=\"universityId\"\n          (ngModelChange)=\"changeUniversity()\"\n        >\n          <option value=\"\">Select university</option>\n          @for (item of universities(); track item._id) {\n            <option [value]=\"item._id\">{{ item.name }}</option>\n          }\n        </select></label\n      >\n      <label\n        ><span>College *</span\n        ><select class=\"erp-control\" [(ngModel)]=\"collegeId\">\n          <option value=\"\">Select college</option>\n          @for (item of collegeOptions(); track item._id) {\n            <option [value]=\"item._id\">{{ item.name }}</option>\n          }\n        </select></label\n      >\n      <label\n        ><span>Academic session *</span\n        ><select class=\"erp-control\" [(ngModel)]=\"academicSession\">\n          <option value=\"\">Select session</option>\n          @for (item of academicSessions(); track item._id) {\n            <option [value]=\"item.name\">{{ item.name }}</option>\n          }\n        </select></label\n      >\n      <label\n        ><span>Transition type *</span\n        ><select class=\"erp-control\" [(ngModel)]=\"mode\">\n          <option value=\"semester\">Next semester</option>\n          <option value=\"year\">Next academic year</option>\n        </select></label\n      >\n      <label\n        ><span>Upcoming fee visible from *</span\n        ><input class=\"erp-control\" type=\"datetime-local\" [(ngModel)]=\"publishAt\"\n      /></label>\n      <label\n        ><span>Next fee deadline *</span\n        ><input class=\"erp-control\" type=\"datetime-local\" [(ngModel)]=\"nextPeriodDeadline\"\n      /></label>\n      <label\n        ><span>Daily fine after deadline</span\n        ><input class=\"erp-control\" type=\"number\" min=\"0\" [(ngModel)]=\"dailyFineAmount\"\n      /></label>\n      <label\n        ><span>Maximum fine</span\n        ><input class=\"erp-control\" type=\"number\" min=\"0\" [(ngModel)]=\"maxFineAmount\"\n      /></label>\n    </div>\n  </section>\n\n  <button\n    drawer-actions\n    class=\"erp-button erp-button--primary\"\n    type=\"button\"\n    [disabled]=\"saving()\"\n    (click)=\"save()\"\n  >\n    {{ saving() ? 'Saving\u2026' : 'Save schedule' }}\n  </button>\n</erp-admin-drawer>\n" }]
    }], () => [], null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(FeeSchedulesComponent, { className: "FeeSchedulesComponent", filePath: "frontend/src/app/features/admin/fee-schedules/fee-schedules.component.ts", lineNumber: 31 }); })();
