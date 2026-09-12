import { AdminIllustrationComponent } from '../../../shared/ui/admin-illustration/admin-illustration.component';
import { ChangeDetectionStrategy, Component, HostListener, inject, signal } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { ConfirmDialogComponent } from '../../../shared/ui/confirm-dialog/confirm-dialog.component';
import { ApiService } from '../../../core/api.service';
import { AdminPageComponent } from '../../../shared/ui/admin-page/admin-page.component';
import { RecordDrawerComponent, } from '../../../shared/ui/record-drawer/record-drawer.component';
import { CompactActionMenuComponent, } from '../../../shared/ui/compact-action-menu/compact-action-menu.component';
import * as i0 from "@angular/core";
const _forTrack0 = ($index, $item) => $item._id;
function FeeProgressionComponent_Conditional_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 4);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r0.message());
} }
function FeeProgressionComponent_Conditional_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 5);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r0.error());
} }
function FeeProgressionComponent_Conditional_11_Template(rf, ctx) { if (rf & 1) {
    const _r2 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 7)(1, "div")(2, "strong");
    i0.ɵɵtext(3, "Preparing selected fees");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "p");
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd();
    i0.ɵɵelement(6, "progress", 14);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "button", 2);
    i0.ɵɵlistener("click", function FeeProgressionComponent_Conditional_11_Template_button_click_7_listener() { i0.ɵɵrestoreView(_r2); const ctx_r0 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r0.stopRequested.set(true)); });
    i0.ɵɵtext(8);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate2(" ", ctx_r0.batchProgress().completed, " of ", ctx_r0.batchProgress().total, " students completed. Navigation is paused while a batch is running. ");
    i0.ɵɵadvance();
    i0.ɵɵproperty("value", ctx_r0.batchProgress().completed)("max", ctx_r0.batchProgress().total);
    i0.ɵɵadvance();
    i0.ɵɵproperty("disabled", ctx_r0.stopRequested());
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r0.stopRequested() ? "Stopping after this batch\u2026" : "Stop after current batch", " ");
} }
function FeeProgressionComponent_For_44_Template(rf, ctx) { if (rf & 1) {
    const _r3 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "tr")(1, "td")(2, "input", 15);
    i0.ɵɵlistener("change", function FeeProgressionComponent_For_44_Template_input_change_2_listener($event) { const item_r4 = i0.ɵɵrestoreView(_r3).$implicit; const ctx_r0 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r0.toggle(item_r4._id, $event.target.checked)); });
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
    i0.ɵɵelementStart(12, "td")(13, "span", 16);
    i0.ɵɵtext(14);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(15, "td");
    i0.ɵɵtext(16);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(17, "td")(18, "erp-compact-action-menu", 17);
    i0.ɵɵlistener("selected", function FeeProgressionComponent_For_44_Template_erp_compact_action_menu_selected_18_listener() { const item_r4 = i0.ɵɵrestoreView(_r3).$implicit; const ctx_r0 = i0.ɵɵnextContext(); return i0.ɵɵresetView(!ctx_r0.saving() && ctx_r0.preview.set(item_r4)); });
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const item_r4 = ctx.$implicit;
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("disabled", ctx_r0.saving())("checked", ctx_r0.selected().has(item_r4._id));
    i0.ɵɵattribute("aria-label", "Select " + item_r4.studentName);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(item_r4.studentName);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(item_r4.studentId);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(item_r4.courseName);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", ctx_r0.mode === "semester" ? "Semester " + item_r4.currentSemester : "Year " + item_r4.currentAcademicYear, " ");
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(item_r4.nextPeriodLabel);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(item_r4.academicSession);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("items", ctx_r0.rowActions);
} }
function FeeProgressionComponent_ForEmpty_45_Conditional_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "erp-admin-illustration", 19);
} }
function FeeProgressionComponent_ForEmpty_45_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "tr")(1, "td", 18);
    i0.ɵɵconditionalCreate(2, FeeProgressionComponent_ForEmpty_45_Conditional_2_Template, 1, 0, "erp-admin-illustration", 19);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵconditional(!ctx_r0.loading() ? 2 : -1);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r0.loading() ? "Loading eligible students\u2026" : "No students are currently eligible for this progression.", " ");
} }
function FeeProgressionComponent_Conditional_47_Conditional_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 21);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r0.error());
} }
function FeeProgressionComponent_Conditional_47_Template(rf, ctx) { if (rf & 1) {
    const _r5 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "erp-record-drawer", 20);
    i0.ɵɵlistener("closed", function FeeProgressionComponent_Conditional_47_Template_erp_record_drawer_closed_0_listener() { i0.ɵɵrestoreView(_r5); const ctx_r0 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r0.preview.set(null)); });
    i0.ɵɵconditionalCreate(1, FeeProgressionComponent_Conditional_47_Conditional_1_Template, 2, 1, "p", 21);
    i0.ɵɵelementStart(2, "button", 22);
    i0.ɵɵlistener("click", function FeeProgressionComponent_Conditional_47_Template_button_click_2_listener() { const item_r6 = i0.ɵɵrestoreView(_r5); const ctx_r0 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r0.createFor(item_r6)); });
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const item_r6 = ctx;
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵproperty("open", true)("title", item_r6.studentName || "Student fee period")("fields", ctx_r0.detailFields(item_r6))("busy", ctx_r0.saving());
    i0.ɵɵadvance();
    i0.ɵɵconditional(ctx_r0.error() ? 1 : -1);
    i0.ɵɵadvance();
    i0.ɵɵproperty("disabled", ctx_r0.saving());
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r0.saving() ? "Preparing\u2026" : "Create " + item_r6.nextPeriodLabel, " ");
} }
export class FeeProgressionComponent {
    api = inject(ApiService);
    items = signal([], ...(ngDevMode ? [{ debugName: "items" }] : /* istanbul ignore next */ []));
    confirmOpen = signal(false, ...(ngDevMode ? [{ debugName: "confirmOpen" }] : /* istanbul ignore next */ []));
    batchProgress = signal({ completed: 0, total: 0 }, ...(ngDevMode ? [{ debugName: "batchProgress" }] : /* istanbul ignore next */ []));
    stopRequested = signal(false, ...(ngDevMode ? [{ debugName: "stopRequested" }] : /* istanbul ignore next */ []));
    protectRunningBatch(event) {
        if (this.saving()) {
            event.preventDefault();
            event.returnValue = '';
        }
    }
    preview = signal(null, ...(ngDevMode ? [{ debugName: "preview" }] : /* istanbul ignore next */ []));
    rowActions = [
        { id: 'preview', label: 'Review next fee period', icon: 'view' },
    ];
    detailFields(item) {
        return [
            { label: 'Student ID', value: item.studentId },
            { label: 'Programme', value: item.courseName },
            { label: 'Academic session', value: item.academicSession },
            {
                label: 'Current period',
                value: this.mode === 'semester'
                    ? 'Semester ' + item.currentSemester
                    : 'Year ' + item.currentAcademicYear,
            },
            { label: 'Next fee period', value: item.nextPeriodLabel },
        ];
    }
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
        if (this.saving())
            return;
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
        if (this.saving())
            return;
        this.mode = mode;
        this.message.set(mode === 'semester'
            ? 'Showing students eligible for their next semester. Select students or use the row action.'
            : 'Showing students eligible for their next academic year. Select students or use the row action.');
        this.load();
    }
    toggle(id, checked) {
        if (this.saving())
            return;
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
        if (this.saving())
            return;
        this.selected.set(new Set(checked ? this.items().map((item) => item._id) : []));
    }
    async createFees() {
        if (this.saving() || !this.selected().size)
            return;
        const ids = [...this.selected()];
        this.saving.set(true);
        this.error.set('');
        this.message.set('');
        this.stopRequested.set(false);
        this.batchProgress.set({ completed: 0, total: ids.length });
        let created = 0, promotions = 0, processed = 0;
        const failures = [];
        try {
            // Bounded sequential requests respect the API's 500-student maximum.
            // Never retry an uncertain financial operation automatically.
            for (let offset = 0; offset < ids.length && !this.stopRequested(); offset += 100) {
                const result = await firstValueFrom(this.api.progressStudentFees({
                    mode: this.mode,
                    studentAdmissionIds: ids.slice(offset, offset + 100),
                    penalty: { enabled: false },
                }));
                created += result.created;
                promotions += result.promotionsCreated;
                processed += result.studentsProcessed;
                for (const item of result.results) {
                    if (item.reason)
                        failures.push(item.reason);
                    failures.push(...item.skippedKinds.map((item) => item.reason));
                }
                this.batchProgress.set({
                    completed: Math.min(offset + 100, ids.length),
                    total: ids.length,
                });
            }
            const outcome = created +
                ' ledgers and ' +
                promotions +
                ' pending promotions prepared; ' +
                processed +
                ' students processed.';
            this.message.set((this.stopRequested() ? 'Stopped after the current batch. ' : '') + outcome);
            if (failures.length)
                this.error.set(failures.slice(0, 5).join(' ') +
                    (failures.length > 5
                        ? ' Further records were skipped; review eligibility before continuing.'
                        : ''));
        }
        catch {
            this.error.set('Processing stopped. A request failed and its final result may be uncertain. Review the fee records before retrying; completed batches were not rolled back.');
            this.message.set(created +
                ' ledgers confirmed from completed batches; ' +
                processed +
                ' students processed.');
        }
        finally {
            this.saving.set(false);
            this.preview.set(null);
            this.selected.set(new Set());
        }
    }
    createFor(item) {
        if (this.saving())
            return;
        this.selected.set(new Set([item._id]));
        this.createFees();
    }
    static ɵfac = function FeeProgressionComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || FeeProgressionComponent)(); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: FeeProgressionComponent, selectors: [["erp-fee-progression"]], hostBindings: function FeeProgressionComponent_HostBindings(rf, ctx) { if (rf & 1) {
            i0.ɵɵlistener("beforeunload", function FeeProgressionComponent_beforeunload_HostBindingHandler($event) { return ctx.protectRunningBatch($event); }, i0.ɵɵresolveWindow);
        } }, decls: 48, vars: 24, consts: [["eyebrow", "Fee Management", "title", "Next Semester / Year Fee", "description", "Prepare the next hidden fee period for eligible students. Publication and fines are controlled by Fee change & publication.", "variant", "compact", "layout", "collection"], ["page-actions", "", 1, "erp-table-toolbar__actions"], ["type", "button", 1, "erp-button", "erp-button--secondary", 3, "click", "disabled"], ["type", "button", 1, "erp-button", 3, "click", "disabled"], [1, "erp-notice", "erp-notice--success"], [1, "erp-notice", "erp-notice--error"], [1, "erp-card", "erp-table-shell"], ["role", "status", "aria-live", "polite", 1, "erp-finance-progress"], [1, "erp-table-toolbar"], ["type", "button", 1, "erp-button", "erp-button--primary", 3, "click", "disabled"], [1, "erp-table-shell__scroll"], ["type", "checkbox", "aria-label", "Select all", 3, "change", "disabled", "checked"], ["eyebrow", "Bulk fee preparation", "title", "Prepare the selected student fees?", "confirmLabel", "Prepare fees", 3, "confirmed", "cancelled", "open", "message"], ["description", "Review the next fee period before preparing it.", "illustration", "feeConfiguration", "guidance", "Preparing fees creates the next fee ledger. Publication controls when it becomes visible to the student.", 3, "open", "title", "fields", "busy"], ["aria-label", "Fee preparation progress", 3, "value", "max"], ["type", "checkbox", 3, "change", "disabled", "checked"], [1, "erp-status"], [3, "selected", "items"], ["colspan", "8", 1, "erp-empty-state"], ["kind", "addStudent", "size", "compact"], ["description", "Review the next fee period before preparing it.", "illustration", "feeConfiguration", "guidance", "Preparing fees creates the next fee ledger. Publication controls when it becomes visible to the student.", 3, "closed", "open", "title", "fields", "busy"], ["role", "alert", 1, "erp-notice", "erp-notice--error"], ["drawer-actions", "", "type", "button", 1, "erp-button", "erp-button--primary", 3, "click", "disabled"]], template: function FeeProgressionComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "erp-admin-page", 0)(1, "div", 1)(2, "button", 2);
            i0.ɵɵlistener("click", function FeeProgressionComponent_Template_button_click_2_listener() { return ctx.load(); });
            i0.ɵɵtext(3, " Refresh eligibility ");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(4, "button", 3);
            i0.ɵɵlistener("click", function FeeProgressionComponent_Template_button_click_4_listener() { return ctx.changeMode("semester"); });
            i0.ɵɵtext(5, " Semester-wise students ");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(6, "button", 3);
            i0.ɵɵlistener("click", function FeeProgressionComponent_Template_button_click_6_listener() { return ctx.changeMode("year"); });
            i0.ɵɵtext(7, " Full-year students ");
            i0.ɵɵelementEnd()();
            i0.ɵɵconditionalCreate(8, FeeProgressionComponent_Conditional_8_Template, 2, 1, "p", 4);
            i0.ɵɵconditionalCreate(9, FeeProgressionComponent_Conditional_9_Template, 2, 1, "p", 5);
            i0.ɵɵelementStart(10, "section", 6);
            i0.ɵɵconditionalCreate(11, FeeProgressionComponent_Conditional_11_Template, 9, 6, "div", 7);
            i0.ɵɵelementStart(12, "div", 8)(13, "div")(14, "h2");
            i0.ɵɵtext(15);
            i0.ɵɵelementStart(16, "small");
            i0.ɵɵtext(17);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(18, "p");
            i0.ɵɵtext(19, "Only students with another configured course period are listed.");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(20, "button", 9);
            i0.ɵɵlistener("click", function FeeProgressionComponent_Template_button_click_20_listener() { return ctx.confirmOpen.set(true); });
            i0.ɵɵtext(21);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(22, "div", 10)(23, "table")(24, "thead")(25, "tr")(26, "th")(27, "input", 11);
            i0.ɵɵlistener("change", function FeeProgressionComponent_Template_input_change_27_listener($event) { return ctx.toggleAll($event.target.checked); });
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(28, "th");
            i0.ɵɵtext(29, "Student");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(30, "th");
            i0.ɵɵtext(31, "Student ID");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(32, "th");
            i0.ɵɵtext(33, "Course");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(34, "th");
            i0.ɵɵtext(35, "Current period");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(36, "th");
            i0.ɵɵtext(37, "Next period");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(38, "th");
            i0.ɵɵtext(39, "Session");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(40, "th");
            i0.ɵɵtext(41, "Action");
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(42, "tbody");
            i0.ɵɵrepeaterCreate(43, FeeProgressionComponent_For_44_Template, 19, 10, "tr", null, _forTrack0, false, FeeProgressionComponent_ForEmpty_45_Template, 4, 2, "tr");
            i0.ɵɵelementEnd()()()()();
            i0.ɵɵelementStart(46, "erp-confirm-dialog", 12);
            i0.ɵɵlistener("confirmed", function FeeProgressionComponent_Template_erp_confirm_dialog_confirmed_46_listener() { ctx.confirmOpen.set(false); return ctx.createFees(); })("cancelled", function FeeProgressionComponent_Template_erp_confirm_dialog_cancelled_46_listener() { return ctx.confirmOpen.set(false); });
            i0.ɵɵelementEnd();
            i0.ɵɵconditionalCreate(47, FeeProgressionComponent_Conditional_47_Template, 4, 7, "erp-record-drawer", 13);
        } if (rf & 2) {
            let tmp_19_0;
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("disabled", ctx.loading() || ctx.saving());
            i0.ɵɵadvance(2);
            i0.ɵɵclassProp("erp-button--primary", ctx.mode === "semester")("erp-button--secondary", ctx.mode !== "semester");
            i0.ɵɵproperty("disabled", ctx.saving());
            i0.ɵɵadvance(2);
            i0.ɵɵclassProp("erp-button--primary", ctx.mode === "year")("erp-button--secondary", ctx.mode !== "year");
            i0.ɵɵproperty("disabled", ctx.saving());
            i0.ɵɵadvance(2);
            i0.ɵɵconditional(ctx.message() ? 8 : -1);
            i0.ɵɵadvance();
            i0.ɵɵconditional(ctx.error() ? 9 : -1);
            i0.ɵɵadvance(2);
            i0.ɵɵconditional(ctx.saving() ? 11 : -1);
            i0.ɵɵadvance(4);
            i0.ɵɵtextInterpolate1(" ", ctx.mode === "semester" ? "Semester-wise students" : "Full-year students", " ");
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate(ctx.items().length);
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("disabled", ctx.saving() || ctx.loading() || !ctx.selected().size);
            i0.ɵɵadvance();
            i0.ɵɵtextInterpolate1(" ", ctx.saving() ? "Preparing fees\u2026" : "Review " + ctx.selected().size + " selected", " ");
            i0.ɵɵadvance(6);
            i0.ɵɵproperty("disabled", ctx.saving() || ctx.loading())("checked", ctx.items().length > 0 && ctx.selected().size === ctx.items().length);
            i0.ɵɵadvance(16);
            i0.ɵɵrepeater(ctx.items());
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("open", ctx.confirmOpen())("message", ctx.selected().size + " students will be processed sequentially in batches of up to 100. This prepares hidden fee ledgers; it does not collect payments or publish fees. Keep this page open until processing ends.");
            i0.ɵɵadvance();
            i0.ɵɵconditional((tmp_19_0 = ctx.preview()) ? 47 : -1, tmp_19_0);
        } }, dependencies: [AdminIllustrationComponent,
            AdminPageComponent,
            RecordDrawerComponent,
            CompactActionMenuComponent,
            ConfirmDialogComponent], encapsulation: 2, changeDetection: 0 });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(FeeProgressionComponent, [{
        type: Component,
        args: [{ selector: 'erp-fee-progression', imports: [
                    AdminIllustrationComponent,
                    AdminPageComponent,
                    RecordDrawerComponent,
                    CompactActionMenuComponent,
                    ConfirmDialogComponent,
                ], changeDetection: ChangeDetectionStrategy.OnPush, template: "<erp-admin-page\n  eyebrow=\"Fee Management\"\n  title=\"Next Semester / Year Fee\"\n  description=\"Prepare the next hidden fee period for eligible students. Publication and fines are controlled by Fee change & publication.\"\n  variant=\"compact\"\n  layout=\"collection\"\n>\n  <div page-actions class=\"erp-table-toolbar__actions\">\n    <button\n      class=\"erp-button erp-button--secondary\"\n      type=\"button\"\n      [disabled]=\"loading() || saving()\"\n      (click)=\"load()\"\n    >\n      Refresh eligibility\n    </button>\n    <button\n      class=\"erp-button\"\n      [class.erp-button--primary]=\"mode === 'semester'\"\n      [class.erp-button--secondary]=\"mode !== 'semester'\"\n      type=\"button\"\n      [disabled]=\"saving()\"\n      (click)=\"changeMode('semester')\"\n    >\n      Semester-wise students\n    </button>\n    <button\n      class=\"erp-button\"\n      [class.erp-button--primary]=\"mode === 'year'\"\n      [class.erp-button--secondary]=\"mode !== 'year'\"\n      type=\"button\"\n      [disabled]=\"saving()\"\n      (click)=\"changeMode('year')\"\n    >\n      Full-year students\n    </button>\n  </div>\n\n  @if (message()) {\n    <p class=\"erp-notice erp-notice--success\">{{ message() }}</p>\n  }\n  @if (error()) {\n    <p class=\"erp-notice erp-notice--error\">{{ error() }}</p>\n  }\n\n  <section class=\"erp-card erp-table-shell\">\n    @if (saving()) {\n      <div class=\"erp-finance-progress\" role=\"status\" aria-live=\"polite\">\n        <div>\n          <strong>Preparing selected fees</strong>\n          <p>\n            {{ batchProgress().completed }} of {{ batchProgress().total }} students completed.\n            Navigation is paused while a batch is running.\n          </p>\n          <progress\n            [value]=\"batchProgress().completed\"\n            [max]=\"batchProgress().total\"\n            aria-label=\"Fee preparation progress\"\n          ></progress>\n        </div>\n        <button\n          class=\"erp-button erp-button--secondary\"\n          type=\"button\"\n          [disabled]=\"stopRequested()\"\n          (click)=\"stopRequested.set(true)\"\n        >\n          {{ stopRequested() ? 'Stopping after this batch\u2026' : 'Stop after current batch' }}\n        </button>\n      </div>\n    }\n    <div class=\"erp-table-toolbar\">\n      <div>\n        <h2>\n          {{ mode === 'semester' ? 'Semester-wise students' : 'Full-year students' }}\n          <small>{{ items().length }}</small>\n        </h2>\n        <p>Only students with another configured course period are listed.</p>\n      </div>\n      <button\n        class=\"erp-button erp-button--primary\"\n        type=\"button\"\n        [disabled]=\"saving() || loading() || !selected().size\"\n        (click)=\"confirmOpen.set(true)\"\n      >\n        {{ saving() ? 'Preparing fees\u2026' : 'Review ' + selected().size + ' selected' }}\n      </button>\n    </div>\n    <div class=\"erp-table-shell__scroll\">\n      <table>\n        <thead>\n          <tr>\n            <th>\n              <input\n                type=\"checkbox\"\n                aria-label=\"Select all\"\n                [disabled]=\"saving() || loading()\"\n                [checked]=\"items().length > 0 && selected().size === items().length\"\n                (change)=\"toggleAll($any($event.target).checked)\"\n              />\n            </th>\n            <th>Student</th>\n            <th>Student ID</th>\n            <th>Course</th>\n            <th>Current period</th>\n            <th>Next period</th>\n            <th>Session</th>\n            <th>Action</th>\n          </tr>\n        </thead>\n        <tbody>\n          @for (item of items(); track item._id) {\n            <tr>\n              <td>\n                <input\n                  type=\"checkbox\"\n                  [disabled]=\"saving()\"\n                  [checked]=\"selected().has(item._id)\"\n                  [attr.aria-label]=\"'Select ' + item.studentName\"\n                  (change)=\"toggle(item._id, $any($event.target).checked)\"\n                />\n              </td>\n              <td>\n                <strong>{{ item.studentName }}</strong>\n              </td>\n              <td>{{ item.studentId }}</td>\n              <td>{{ item.courseName }}</td>\n              <td>\n                {{\n                  mode === 'semester'\n                    ? 'Semester ' + item.currentSemester\n                    : 'Year ' + item.currentAcademicYear\n                }}\n              </td>\n              <td>\n                <span class=\"erp-status\">{{ item.nextPeriodLabel }}</span>\n              </td>\n              <td>{{ item.academicSession }}</td>\n              <td>\n                <erp-compact-action-menu\n                  [items]=\"rowActions\"\n                  (selected)=\"!saving() && preview.set(item)\"\n                />\n              </td>\n            </tr>\n          } @empty {\n            <tr>\n              <td colspan=\"8\" class=\"erp-empty-state\">\n                @if (!loading()) {\n                  <erp-admin-illustration kind=\"addStudent\" size=\"compact\" />\n                }\n                {{\n                  loading()\n                    ? 'Loading eligible students\u2026'\n                    : 'No students are currently eligible for this progression.'\n                }}\n              </td>\n            </tr>\n          }\n        </tbody>\n      </table>\n    </div>\n  </section>\n</erp-admin-page>\n\n<erp-confirm-dialog\n  [open]=\"confirmOpen()\"\n  eyebrow=\"Bulk fee preparation\"\n  title=\"Prepare the selected student fees?\"\n  [message]=\"\n    selected().size +\n    ' students will be processed sequentially in batches of up to 100. This prepares hidden fee ledgers; it does not collect payments or publish fees. Keep this page open until processing ends.'\n  \"\n  confirmLabel=\"Prepare fees\"\n  (confirmed)=\"confirmOpen.set(false); createFees()\"\n  (cancelled)=\"confirmOpen.set(false)\"\n/>\n\n@if (preview(); as item) {\n  <erp-record-drawer\n    [open]=\"true\"\n    [title]=\"item.studentName || 'Student fee period'\"\n    description=\"Review the next fee period before preparing it.\"\n    [fields]=\"detailFields(item)\"\n    [busy]=\"saving()\"\n    illustration=\"feeConfiguration\"\n    guidance=\"Preparing fees creates the next fee ledger. Publication controls when it becomes visible to the student.\"\n    (closed)=\"preview.set(null)\"\n  >\n    @if (error()) {\n      <p class=\"erp-notice erp-notice--error\" role=\"alert\">{{ error() }}</p>\n    }\n    <button\n      drawer-actions\n      class=\"erp-button erp-button--primary\"\n      type=\"button\"\n      [disabled]=\"saving()\"\n      (click)=\"createFor(item)\"\n    >\n      {{ saving() ? 'Preparing\u2026' : 'Create ' + item.nextPeriodLabel }}\n    </button>\n  </erp-record-drawer>\n}\n" }]
    }], () => [], { protectRunningBatch: [{
            type: HostListener,
            args: ['window:beforeunload', ['$event']]
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(FeeProgressionComponent, { className: "FeeProgressionComponent", filePath: "frontend/src/app/features/admin/fee-progression/fee-progression.component.ts", lineNumber: 29 }); })();
