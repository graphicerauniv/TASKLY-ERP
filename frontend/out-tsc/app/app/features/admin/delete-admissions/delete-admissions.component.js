import { DatePipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LucideSearch, LucideTriangleAlert } from '@lucide/angular';
import { ApiService } from '../../../core/api.service';
import { ERP_PAGINATION } from '../../../core/config/data-view.constants';
import { AdminPageComponent } from '../../../shared/ui/admin-page/admin-page.component';
import { CompactActionMenuComponent, } from '../../../shared/ui/compact-action-menu/compact-action-menu.component';
import { ConfirmDialogComponent } from '../../../shared/ui/confirm-dialog/confirm-dialog.component';
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
const _forTrack0 = ($index, $item) => $item._id;
function DeleteAdmissionsComponent_Conditional_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 4);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r0.message());
} }
function DeleteAdmissionsComponent_Conditional_10_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 5);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r0.error());
} }
function DeleteAdmissionsComponent_Conditional_23_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 12);
    i0.ɵɵelement(1, "span", 14);
    i0.ɵɵelementStart(2, "p");
    i0.ɵɵtext(3, "Loading admission records\u2026");
    i0.ɵɵelementEnd()();
} }
function DeleteAdmissionsComponent_Conditional_24_For_14_Template(rf, ctx) { if (rf & 1) {
    const _r3 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "tr")(1, "td")(2, "strong");
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "small");
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "small");
    i0.ɵɵtext(7);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(8, "td");
    i0.ɵɵtext(9);
    i0.ɵɵpipe(10, "date");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(11, "td")(12, "span", 24);
    i0.ɵɵtext(13);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(14, "td", 16)(15, "erp-compact-action-menu", 25);
    i0.ɵɵlistener("selected", function DeleteAdmissionsComponent_Conditional_24_For_14_Template_erp_compact_action_menu_selected_15_listener($event) { const item_r4 = i0.ɵɵrestoreView(_r3).$implicit; const ctx_r0 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r0.handleRowAction($event, item_r4)); });
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const item_r4 = ctx.$implicit;
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(item_r4.studentName || "Name not entered");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(item_r4.studentId || "Student ID not generated");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1("Form v", item_r4.formVersion || "\u2014");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind2(10, 8, item_r4.createdAt, "medium"));
    i0.ɵɵadvance(3);
    i0.ɵɵclassProp("erp-status--warning", item_r4.status !== "submitted");
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", item_r4.status, " ");
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("items", ctx_r0.rowActions);
} }
function DeleteAdmissionsComponent_Conditional_24_ForEmpty_15_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "tr")(1, "td", 26);
    i0.ɵɵtext(2, "No admission records match your search.");
    i0.ɵɵelementEnd()();
} }
function DeleteAdmissionsComponent_Conditional_24_For_22_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 20);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const size_r5 = ctx.$implicit;
    i0.ɵɵproperty("ngValue", size_r5);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1("", size_r5, " / page");
} }
function DeleteAdmissionsComponent_Conditional_24_Template(rf, ctx) { if (rf & 1) {
    const _r2 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 15)(1, "table")(2, "thead")(3, "tr")(4, "th");
    i0.ɵɵtext(5, "Student");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "th");
    i0.ɵɵtext(7, "Created");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "th");
    i0.ɵɵtext(9, "Status");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(10, "th", 16);
    i0.ɵɵtext(11, "Delete record");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(12, "tbody");
    i0.ɵɵrepeaterCreate(13, DeleteAdmissionsComponent_Conditional_24_For_14_Template, 16, 11, "tr", null, _forTrack0, false, DeleteAdmissionsComponent_Conditional_24_ForEmpty_15_Template, 3, 0, "tr");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(16, "div", 17)(17, "span");
    i0.ɵɵtext(18);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(19, "div", 18)(20, "select", 19);
    i0.ɵɵtwoWayListener("ngModelChange", function DeleteAdmissionsComponent_Conditional_24_Template_select_ngModelChange_20_listener($event) { i0.ɵɵrestoreView(_r2); const ctx_r0 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r0.pageSize, $event) || (ctx_r0.pageSize = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵlistener("ngModelChange", function DeleteAdmissionsComponent_Conditional_24_Template_select_ngModelChange_20_listener() { i0.ɵɵrestoreView(_r2); const ctx_r0 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r0.changePageSize()); });
    i0.ɵɵrepeaterCreate(21, DeleteAdmissionsComponent_Conditional_24_For_22_Template, 2, 2, "option", 20, i0.ɵɵrepeaterTrackByIdentity);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(23, "button", 21);
    i0.ɵɵlistener("click", function DeleteAdmissionsComponent_Conditional_24_Template_button_click_23_listener() { i0.ɵɵrestoreView(_r2); const ctx_r0 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r0.changePage(ctx_r0.page - 1)); });
    i0.ɵɵtext(24, " \u2039 ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(25, "button", 22);
    i0.ɵɵtext(26);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(27, "button", 23);
    i0.ɵɵlistener("click", function DeleteAdmissionsComponent_Conditional_24_Template_button_click_27_listener() { i0.ɵɵrestoreView(_r2); const ctx_r0 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r0.changePage(ctx_r0.page + 1)); });
    i0.ɵɵtext(28, " \u203A ");
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(13);
    i0.ɵɵrepeater(ctx_r0.items());
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate4("Showing ", ctx_r0.items().length, " of ", ctx_r0.total(), " records \u00B7 Page ", ctx_r0.page, " of ", ctx_r0.pages());
    i0.ɵɵadvance(2);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r0.pageSize);
    i0.ɵɵadvance();
    i0.ɵɵrepeater(ctx_r0.pageSizeOptions);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("disabled", ctx_r0.page <= 1);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1(" ", ctx_r0.page, " ");
    i0.ɵɵadvance();
    i0.ɵɵproperty("disabled", ctx_r0.page >= ctx_r0.pages());
} }
function DeleteAdmissionsComponent_Conditional_25_Template(rf, ctx) { if (rf & 1) {
    const _r6 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "erp-confirm-dialog", 27);
    i0.ɵɵlistener("cancelled", function DeleteAdmissionsComponent_Conditional_25_Template_erp_confirm_dialog_cancelled_0_listener() { i0.ɵɵrestoreView(_r6); const ctx_r0 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r0.cancelDelete()); })("confirmed", function DeleteAdmissionsComponent_Conditional_25_Template_erp_confirm_dialog_confirmed_0_listener() { i0.ɵɵrestoreView(_r6); const ctx_r0 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r0.confirmDelete()); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r7 = ctx;
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵproperty("open", true)("message", "You are permanently deleting " + (item_r7.studentName || item_r7.studentId || "this student record") + ". This cannot be undone.")("confirmLabel", ctx_r0.deleting() ? "Deleting\u2026" : "Delete permanently")("destructive", true);
} }
export class DeleteAdmissionsComponent {
    api = inject(ApiService);
    items = signal([], ...(ngDevMode ? [{ debugName: "items" }] : /* istanbul ignore next */ []));
    query = signal('', ...(ngDevMode ? [{ debugName: "query" }] : /* istanbul ignore next */ []));
    loading = signal(true, ...(ngDevMode ? [{ debugName: "loading" }] : /* istanbul ignore next */ []));
    deleting = signal(false, ...(ngDevMode ? [{ debugName: "deleting" }] : /* istanbul ignore next */ []));
    deleteTarget = signal(null, ...(ngDevMode ? [{ debugName: "deleteTarget" }] : /* istanbul ignore next */ []));
    message = signal('', ...(ngDevMode ? [{ debugName: "message" }] : /* istanbul ignore next */ []));
    error = signal('', ...(ngDevMode ? [{ debugName: "error" }] : /* istanbul ignore next */ []));
    rowActions = [
        { id: 'delete', label: 'Delete record', icon: 'delete', destructive: true },
    ];
    total = signal(0, ...(ngDevMode ? [{ debugName: "total" }] : /* istanbul ignore next */ []));
    pages = signal(1, ...(ngDevMode ? [{ debugName: "pages" }] : /* istanbul ignore next */ []));
    pageSizeOptions = ERP_PAGINATION.pageSizeOptions;
    page = 1;
    pageSize = ERP_PAGINATION.defaultPageSize;
    constructor() {
        this.load();
    }
    load() {
        this.loading.set(true);
        this.api
            .admissions({ search: this.query().trim(), page: this.page, limit: this.pageSize })
            .subscribe({
            next: ({ items, pagination }) => {
                this.items.set(items);
                this.total.set(pagination.total);
                this.pages.set(Math.max(1, pagination.pages));
                this.loading.set(false);
            },
            error: (error) => {
                this.error.set(error.error?.message || 'Unable to load admission records.');
                this.loading.set(false);
            },
        });
    }
    updateQuery(event) {
        this.query.set(event.target.value);
    }
    searchRecords() {
        this.page = 1;
        this.load();
    }
    changePage(page) {
        if (page < 1 || page > this.pages())
            return;
        this.page = page;
        this.load();
    }
    changePageSize() {
        this.page = 1;
        this.load();
    }
    requestDelete(item) {
        this.message.set('');
        this.error.set('');
        this.deleteTarget.set(item);
    }
    handleRowAction(action, item) {
        if (action === 'delete')
            this.requestDelete(item);
    }
    cancelDelete() {
        if (!this.deleting())
            this.deleteTarget.set(null);
    }
    confirmDelete() {
        const item = this.deleteTarget();
        if (!item || this.deleting())
            return;
        this.deleting.set(true);
        this.api.deleteAdmission(item._id).subscribe({
            next: () => {
                this.items.update((items) => items.filter((current) => current._id !== item._id));
                this.total.update((total) => Math.max(0, total - 1));
                this.message.set(`Admission for ${item.studentName || item.studentId || 'student'} was permanently deleted.`);
                this.deleteTarget.set(null);
                this.deleting.set(false);
            },
            error: (error) => {
                this.error.set(error.error?.message || 'Unable to delete the admission.');
                this.deleteTarget.set(null);
                this.deleting.set(false);
            },
        });
    }
    static ɵfac = function DeleteAdmissionsComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || DeleteAdmissionsComponent)(); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: DeleteAdmissionsComponent, selectors: [["erp-delete-admissions"]], decls: 26, vars: 6, consts: [["eyebrow", "Admission management", "title", "Delete Admission", "description", "Find and permanently remove an incorrect or unwanted admission record.", "variant", "minimal", "layout", "collection"], [1, "erp-warning-panel"], [1, "erp-warning-panel__icon"], ["lucideTriangleAlert", "", "aria-hidden", "true"], ["role", "status", 1, "erp-notice", "erp-notice--success"], ["role", "alert", 1, "erp-notice", "erp-notice--error"], [1, "erp-card", "erp-table-shell"], [1, "erp-table-toolbar"], [1, "erp-search-control"], ["lucideSearch", "", "size", "18", "aria-hidden", "true"], ["type", "search", "placeholder", "Search student name, Student ID, or status", 3, "input", "keyup.enter", "value"], ["type", "button", 1, "erp-button", "erp-button--secondary", 3, "click"], [1, "erp-loading-state"], ["eyebrow", "Admission record", "title", "Delete this admission?", 3, "open", "message", "confirmLabel", "destructive"], [1, "erp-spinner"], [1, "erp-table-shell__scroll"], [1, "erp-table-shell__actions"], [1, "erp-pagination"], [1, "erp-pagination__pages"], ["aria-label", "Rows per page", 1, "erp-control", "erp-pagination__size", 3, "ngModelChange", "ngModel"], [3, "ngValue"], ["type", "button", "aria-label", "Previous page", 1, "erp-pagination__button", 3, "click", "disabled"], ["type", "button", "aria-current", "page", 1, "erp-pagination__button", "erp-pagination__button--active"], ["type", "button", "aria-label", "Next page", 1, "erp-pagination__button", 3, "click", "disabled"], [1, "erp-status"], [3, "selected", "items"], ["colspan", "4", 1, "erp-empty-state"], ["eyebrow", "Admission record", "title", "Delete this admission?", 3, "cancelled", "confirmed", "open", "message", "confirmLabel", "destructive"]], template: function DeleteAdmissionsComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "erp-admin-page", 0)(1, "section", 1)(2, "span", 2);
            i0.ɵɵnamespaceSVG();
            i0.ɵɵelement(3, "svg", 3);
            i0.ɵɵelementEnd();
            i0.ɵɵnamespaceHTML();
            i0.ɵɵelementStart(4, "div")(5, "strong");
            i0.ɵɵtext(6, "Permanent action");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(7, "p");
            i0.ɵɵtext(8, "Deleted student records cannot be restored. Check the student details carefully.");
            i0.ɵɵelementEnd()()();
            i0.ɵɵconditionalCreate(9, DeleteAdmissionsComponent_Conditional_9_Template, 2, 1, "p", 4);
            i0.ɵɵconditionalCreate(10, DeleteAdmissionsComponent_Conditional_10_Template, 2, 1, "p", 5);
            i0.ɵɵelementStart(11, "section", 6)(12, "header", 7)(13, "div")(14, "h2");
            i0.ɵɵtext(15, "Admission records");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(16, "p");
            i0.ɵɵtext(17);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(18, "label", 8);
            i0.ɵɵnamespaceSVG();
            i0.ɵɵelement(19, "svg", 9);
            i0.ɵɵnamespaceHTML();
            i0.ɵɵelementStart(20, "input", 10);
            i0.ɵɵlistener("input", function DeleteAdmissionsComponent_Template_input_input_20_listener($event) { return ctx.updateQuery($event); })("keyup.enter", function DeleteAdmissionsComponent_Template_input_keyup_enter_20_listener() { return ctx.searchRecords(); });
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(21, "button", 11);
            i0.ɵɵlistener("click", function DeleteAdmissionsComponent_Template_button_click_21_listener() { return ctx.searchRecords(); });
            i0.ɵɵtext(22, " Search ");
            i0.ɵɵelementEnd()();
            i0.ɵɵconditionalCreate(23, DeleteAdmissionsComponent_Conditional_23_Template, 4, 0, "div", 12)(24, DeleteAdmissionsComponent_Conditional_24_Template, 29, 9);
            i0.ɵɵelementEnd()();
            i0.ɵɵconditionalCreate(25, DeleteAdmissionsComponent_Conditional_25_Template, 1, 4, "erp-confirm-dialog", 13);
        } if (rf & 2) {
            let tmp_5_0;
            i0.ɵɵadvance(9);
            i0.ɵɵconditional(ctx.message() ? 9 : -1);
            i0.ɵɵadvance();
            i0.ɵɵconditional(ctx.error() ? 10 : -1);
            i0.ɵɵadvance(7);
            i0.ɵɵtextInterpolate1("", ctx.total(), " total records");
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("value", ctx.query());
            i0.ɵɵadvance(3);
            i0.ɵɵconditional(ctx.loading() ? 23 : 24);
            i0.ɵɵadvance(2);
            i0.ɵɵconditional((tmp_5_0 = ctx.deleteTarget()) ? 25 : -1, tmp_5_0);
        } }, dependencies: [AdminPageComponent,
            CompactActionMenuComponent,
            ConfirmDialogComponent,
            FormsModule, i1.NgSelectOption, i1.ɵNgSelectMultipleOption, i1.SelectControlValueAccessor, i1.NgControlStatus, i1.NgModel, LucideSearch,
            LucideTriangleAlert,
            DatePipe], encapsulation: 2, changeDetection: 0 });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(DeleteAdmissionsComponent, [{
        type: Component,
        args: [{ selector: 'erp-delete-admissions', imports: [
                    AdminPageComponent,
                    CompactActionMenuComponent,
                    ConfirmDialogComponent,
                    DatePipe,
                    FormsModule,
                    LucideSearch,
                    LucideTriangleAlert,
                ], changeDetection: ChangeDetectionStrategy.OnPush, template: "<erp-admin-page\n  eyebrow=\"Admission management\"\n  title=\"Delete Admission\"\n  description=\"Find and permanently remove an incorrect or unwanted admission record.\"\n  variant=\"minimal\"\n  layout=\"collection\"\n>\n  <section class=\"erp-warning-panel\">\n    <span class=\"erp-warning-panel__icon\"><svg lucideTriangleAlert aria-hidden=\"true\"></svg></span>\n    <div>\n      <strong>Permanent action</strong>\n      <p>Deleted student records cannot be restored. Check the student details carefully.</p>\n    </div>\n  </section>\n\n  @if (message()) {\n    <p class=\"erp-notice erp-notice--success\" role=\"status\">{{ message() }}</p>\n  }\n  @if (error()) {\n    <p class=\"erp-notice erp-notice--error\" role=\"alert\">{{ error() }}</p>\n  }\n\n  <section class=\"erp-card erp-table-shell\">\n    <header class=\"erp-table-toolbar\">\n      <div>\n        <h2>Admission records</h2>\n        <p>{{ total() }} total records</p>\n      </div>\n      <label class=\"erp-search-control\">\n        <svg lucideSearch size=\"18\" aria-hidden=\"true\"></svg>\n        <input\n          type=\"search\"\n          placeholder=\"Search student name, Student ID, or status\"\n          [value]=\"query()\"\n          (input)=\"updateQuery($event)\"\n          (keyup.enter)=\"searchRecords()\"\n        />\n      </label>\n      <button class=\"erp-button erp-button--secondary\" type=\"button\" (click)=\"searchRecords()\">\n        Search\n      </button>\n    </header>\n\n    @if (loading()) {\n      <div class=\"erp-loading-state\">\n        <span class=\"erp-spinner\"></span>\n        <p>Loading admission records\u2026</p>\n      </div>\n    } @else {\n      <div class=\"erp-table-shell__scroll\">\n        <table>\n          <thead>\n            <tr>\n              <th>Student</th>\n              <th>Created</th>\n              <th>Status</th>\n              <th class=\"erp-table-shell__actions\">Delete record</th>\n            </tr>\n          </thead>\n          <tbody>\n            @for (item of items(); track item._id) {\n              <tr>\n                <td>\n                  <strong>{{ item.studentName || 'Name not entered' }}</strong\n                  ><small>{{ item.studentId || 'Student ID not generated' }}</small\n                  ><small>Form v{{ item.formVersion || '\u2014' }}</small>\n                </td>\n                <td>{{ item.createdAt | date: 'medium' }}</td>\n                <td>\n                  <span\n                    class=\"erp-status\"\n                    [class.erp-status--warning]=\"item.status !== 'submitted'\"\n                  >\n                    {{ item.status }}\n                  </span>\n                </td>\n                <td class=\"erp-table-shell__actions\">\n                  <erp-compact-action-menu\n                    [items]=\"rowActions\"\n                    (selected)=\"handleRowAction($event, item)\"\n                  />\n                </td>\n              </tr>\n            } @empty {\n              <tr>\n                <td class=\"erp-empty-state\" colspan=\"4\">No admission records match your search.</td>\n              </tr>\n            }\n          </tbody>\n        </table>\n      </div>\n      <div class=\"erp-pagination\">\n        <span\n          >Showing {{ items().length }} of {{ total() }} records \u00B7 Page {{ page }} of\n          {{ pages() }}</span\n        >\n        <div class=\"erp-pagination__pages\">\n          <select\n            class=\"erp-control erp-pagination__size\"\n            aria-label=\"Rows per page\"\n            [(ngModel)]=\"pageSize\"\n            (ngModelChange)=\"changePageSize()\"\n          >\n            @for (size of pageSizeOptions; track size) {\n              <option [ngValue]=\"size\">{{ size }} / page</option>\n            }\n          </select>\n          <button\n            class=\"erp-pagination__button\"\n            type=\"button\"\n            aria-label=\"Previous page\"\n            [disabled]=\"page <= 1\"\n            (click)=\"changePage(page - 1)\"\n          >\n            \u2039\n          </button>\n          <button\n            class=\"erp-pagination__button erp-pagination__button--active\"\n            type=\"button\"\n            aria-current=\"page\"\n          >\n            {{ page }}\n          </button>\n          <button\n            class=\"erp-pagination__button\"\n            type=\"button\"\n            aria-label=\"Next page\"\n            [disabled]=\"page >= pages()\"\n            (click)=\"changePage(page + 1)\"\n          >\n            \u203A\n          </button>\n        </div>\n      </div>\n    }\n  </section>\n</erp-admin-page>\n\n@if (deleteTarget(); as item) {\n  <erp-confirm-dialog\n    [open]=\"true\"\n    eyebrow=\"Admission record\"\n    title=\"Delete this admission?\"\n    [message]=\"\n      'You are permanently deleting ' +\n      (item.studentName || item.studentId || 'this student record') +\n      '. This cannot be undone.'\n    \"\n    [confirmLabel]=\"deleting() ? 'Deleting\u2026' : 'Delete permanently'\"\n    [destructive]=\"true\"\n    (cancelled)=\"cancelDelete()\"\n    (confirmed)=\"confirmDelete()\"\n  />\n}\n" }]
    }], () => [], null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(DeleteAdmissionsComponent, { className: "DeleteAdmissionsComponent", filePath: "frontend/src/app/features/admin/delete-admissions/delete-admissions.component.ts", lineNumber: 29 }); })();
