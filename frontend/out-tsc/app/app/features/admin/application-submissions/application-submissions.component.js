import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../../../core/api.service';
import { AdminPageComponent } from '../../../shared/ui/admin-page/admin-page.component';
import { RecordDrawerComponent } from '../../../shared/ui/record-drawer/record-drawer.component';
import { AdminIllustrationComponent } from '../../../shared/ui/admin-illustration/admin-illustration.component';
import { CompactActionMenuComponent, } from '../../../shared/ui/compact-action-menu/compact-action-menu.component';
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
import * as i2 from "@angular/common";
const _c0 = a0 => [a0];
const _forTrack0 = ($index, $item) => $item._id;
function ApplicationSubmissionsComponent_Conditional_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 1);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r0.error());
} }
function ApplicationSubmissionsComponent_For_30_Conditional_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "small");
    i0.ɵɵtext(1, "Employee ID \u00B7 initial password is the same ID");
    i0.ɵɵelementEnd();
} }
function ApplicationSubmissionsComponent_For_30_Template(rf, ctx) { if (rf & 1) {
    const _r2 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "tr")(1, "td")(2, "strong");
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵconditionalCreate(4, ApplicationSubmissionsComponent_For_30_Conditional_4_Template, 2, 0, "small");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "td");
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "td");
    i0.ɵɵtext(8);
    i0.ɵɵpipe(9, "date");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(10, "td");
    i0.ɵɵtext(11);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(12, "td")(13, "span", 8);
    i0.ɵɵtext(14);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(15, "td", 6)(16, "erp-compact-action-menu", 9);
    i0.ɵɵlistener("selected", function ApplicationSubmissionsComponent_For_30_Template_erp_compact_action_menu_selected_16_listener($event) { const item_r3 = i0.ɵɵrestoreView(_r2).$implicit; const ctx_r0 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r0.handleAction($event, item_r3)); });
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const item_r3 = ctx.$implicit;
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(item_r3.applicationCode || "Not generated");
    i0.ɵɵadvance();
    i0.ɵɵconditional(item_r3.purpose === "faculty" ? 4 : -1);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(item_r3.formName);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind2(9, 7, item_r3.submittedAt, "medium"));
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1("v", item_r3.formVersion);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(item_r3.status);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("items", ctx_r0.section() ? ctx_r0.actions : i0.ɵɵpureFunction1(10, _c0, ctx_r0.actions[0]));
} }
function ApplicationSubmissionsComponent_ForEmpty_31_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "tr")(1, "td", 10);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", ctx_r0.loading() ? "Loading applications\u2026" : "No applications submitted for this form.", " ");
} }
function ApplicationSubmissionsComponent_Conditional_32_Conditional_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 12);
    i0.ɵɵelement(1, "erp-admin-illustration", 14);
    i0.ɵɵelementStart(2, "h3");
    i0.ɵɵtext(3, "No submitted responses");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "p");
    i0.ɵɵtext(5, "This record does not contain any response values.");
    i0.ɵɵelementEnd()();
} }
function ApplicationSubmissionsComponent_Conditional_32_Conditional_2_Template(rf, ctx) { if (rf & 1) {
    const _r5 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 15);
    i0.ɵɵlistener("click", function ApplicationSubmissionsComponent_Conditional_32_Conditional_2_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r5); const item_r6 = i0.ɵɵnextContext(); const ctx_r0 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r0.handleAction("edit", item_r6)); });
    i0.ɵɵtext(1, " Edit record ");
    i0.ɵɵelementEnd();
} }
function ApplicationSubmissionsComponent_Conditional_32_Template(rf, ctx) { if (rf & 1) {
    const _r4 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "erp-record-drawer", 11);
    i0.ɵɵlistener("closed", function ApplicationSubmissionsComponent_Conditional_32_Template_erp_record_drawer_closed_0_listener() { i0.ɵɵrestoreView(_r4); const ctx_r0 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r0.selected.set(null)); });
    i0.ɵɵconditionalCreate(1, ApplicationSubmissionsComponent_Conditional_32_Conditional_1_Template, 6, 0, "div", 12);
    i0.ɵɵconditionalCreate(2, ApplicationSubmissionsComponent_Conditional_32_Conditional_2_Template, 2, 0, "button", 13);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r6 = ctx;
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵproperty("open", true)("title", item_r6.formName)("description", item_r6.applicationCode || ctx_r0.purposeLabel(item_r6.purpose) + " application")("fields", ctx_r0.responseRows(item_r6));
    i0.ɵɵadvance();
    i0.ɵɵconditional(!ctx_r0.responseRows(item_r6).length ? 1 : -1);
    i0.ɵɵadvance();
    i0.ɵɵconditional(ctx_r0.section() ? 2 : -1);
} }
export class ApplicationSubmissionsComponent {
    api = inject(ApiService);
    route = inject(ActivatedRoute);
    router = inject(Router);
    form = signal(null, ...(ngDevMode ? [{ debugName: "form" }] : /* istanbul ignore next */ []));
    section = signal(null, ...(ngDevMode ? [{ debugName: "section" }] : /* istanbul ignore next */ []));
    items = signal([], ...(ngDevMode ? [{ debugName: "items" }] : /* istanbul ignore next */ []));
    loading = signal(true, ...(ngDevMode ? [{ debugName: "loading" }] : /* istanbul ignore next */ []));
    error = signal('', ...(ngDevMode ? [{ debugName: "error" }] : /* istanbul ignore next */ []));
    selected = signal(null, ...(ngDevMode ? [{ debugName: "selected" }] : /* istanbul ignore next */ []));
    actions = [
        { id: 'view', label: 'View', icon: 'view' },
        { id: 'edit', label: 'Edit', icon: 'edit' },
    ];
    search = signal('', ...(ngDevMode ? [{ debugName: "search" }] : /* istanbul ignore next */ []));
    filtered = computed(() => {
        const query = this.search().trim().toLowerCase();
        return this.items().filter((item) => !query || JSON.stringify(item).toLowerCase().includes(query));
    }, ...(ngDevMode ? [{ debugName: "filtered" }] : /* istanbul ignore next */ []));
    constructor() {
        this.route.paramMap.pipe(takeUntilDestroyed()).subscribe((params) => {
            const sectionId = params.get('sectionId') || '';
            if (sectionId)
                this.loadDatabase(sectionId);
            else
                this.load(params.get('purpose') || '', params.get('formId') || '');
        });
    }
    loadDatabase(sectionId) {
        this.loading.set(true);
        this.error.set('');
        this.api.databaseSubmissions(sectionId).subscribe({
            next: ({ items, section }) => {
                this.items.set(items);
                this.section.set(section);
                this.form.set(null);
                this.loading.set(false);
            },
            error: (error) => {
                this.error.set(error.error?.message || 'Database records could not be loaded.');
                this.loading.set(false);
            },
        });
    }
    load(purpose, formId) {
        this.loading.set(true);
        this.error.set('');
        this.api.applicationSubmissions(purpose, formId).subscribe({
            next: ({ items, form }) => {
                this.items.set(items);
                this.form.set(form);
                this.loading.set(false);
            },
            error: (error) => {
                this.error.set(error.error?.message || 'Application submissions could not be loaded.');
                this.loading.set(false);
            },
        });
    }
    handleAction(action, item) {
        if (action === 'view')
            this.selected.set(item);
        if (action === 'edit' && this.section())
            void this.router.navigate([
                '/admin/database',
                this.section().id,
                item.purpose,
                item._id,
                'edit',
            ]);
    }
    purposeLabel(value) {
        return { faculty: 'Faculty', employee: 'Employee', general: 'Other' }[value] || value;
    }
    responseRows(item) {
        const labels = new Map();
        const subsectionLabels = new Map();
        for (const section of item.formSnapshot?.sections || [])
            for (const subsection of section.subsections) {
                subsectionLabels.set(subsection.id, subsection.name);
                for (const field of subsection.fields)
                    labels.set(field.id, field.name);
            }
        const rows = Object.entries(item.responses || {}).map(([fieldId, value]) => ({
            label: labels.get(fieldId) || fieldId,
            value: this.displayValue(value),
        }));
        for (const [subsectionId, entries] of Object.entries(item.repeatableResponses || {}))
            entries.forEach((entry, index) => Object.entries(entry).forEach(([fieldId, value]) => rows.push({
                label: `${subsectionLabels.get(subsectionId) || 'Record'} ${index + 1} · ${labels.get(fieldId) || fieldId}`,
                value: this.displayValue(value),
            })));
        return rows;
    }
    displayValue(value) {
        return Array.isArray(value)
            ? value.join(', ')
            : typeof value === 'object' && value
                ? JSON.stringify(value)
                : String(value ?? '—');
    }
    static ɵfac = function ApplicationSubmissionsComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || ApplicationSubmissionsComponent)(); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ApplicationSubmissionsComponent, selectors: [["erp-application-submissions"]], decls: 33, vars: 7, consts: [["description", "Search, review and edit submitted records.", "variant", "compact", "layout", "collection", 3, "eyebrow", "title"], ["role", "alert", 1, "erp-alert", "erp-alert--error"], [1, "erp-card", "erp-table-shell"], [1, "erp-table-toolbar"], ["type", "search", "placeholder", "Search name, code or response", 1, "erp-control", 3, "ngModelChange", "ngModel"], [1, "erp-table-shell__scroll"], [1, "erp-table-shell__actions"], [3, "open", "title", "description", "fields"], [1, "erp-status"], [3, "selected", "items"], ["colspan", "6", 1, "erp-empty-state"], [3, "closed", "open", "title", "description", "fields"], [1, "erp-empty-panel"], ["drawer-actions", "", "type", "button", 1, "erp-button", "erp-button--primary"], ["kind", "applicationForm"], ["drawer-actions", "", "type", "button", 1, "erp-button", "erp-button--primary", 3, "click"]], template: function ApplicationSubmissionsComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "erp-admin-page", 0);
            i0.ɵɵconditionalCreate(1, ApplicationSubmissionsComponent_Conditional_1_Template, 2, 1, "div", 1);
            i0.ɵɵelementStart(2, "section", 2)(3, "div", 3)(4, "div")(5, "h2");
            i0.ɵɵtext(6, " Saved records ");
            i0.ɵɵelementStart(7, "small");
            i0.ɵɵtext(8);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(9, "p");
            i0.ɵɵtext(10, "Every record remains connected to its source form and published version.");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(11, "input", 4);
            i0.ɵɵlistener("ngModelChange", function ApplicationSubmissionsComponent_Template_input_ngModelChange_11_listener($event) { return ctx.search.set($event); });
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(12, "div", 5)(13, "table")(14, "thead")(15, "tr")(16, "th");
            i0.ɵɵtext(17, "Record ID");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(18, "th");
            i0.ɵɵtext(19, "Source form");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(20, "th");
            i0.ɵɵtext(21, "Submitted");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(22, "th");
            i0.ɵɵtext(23, "Form version");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(24, "th");
            i0.ɵɵtext(25, "Status");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(26, "th", 6);
            i0.ɵɵtext(27, "Actions");
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(28, "tbody");
            i0.ɵɵrepeaterCreate(29, ApplicationSubmissionsComponent_For_30_Template, 17, 12, "tr", null, _forTrack0, false, ApplicationSubmissionsComponent_ForEmpty_31_Template, 3, 1, "tr");
            i0.ɵɵelementEnd()()()()();
            i0.ɵɵconditionalCreate(32, ApplicationSubmissionsComponent_Conditional_32_Template, 3, 6, "erp-record-drawer", 7);
        } if (rf & 2) {
            let tmp_0_0;
            let tmp_1_0;
            let tmp_6_0;
            i0.ɵɵproperty("eyebrow", ctx.section() ? "Database" : ctx.purposeLabel(((tmp_0_0 = ctx.form()) == null ? null : tmp_0_0.purpose) || "") + " applications")("title", ((tmp_1_0 = ctx.section()) == null ? null : tmp_1_0.name) || ((tmp_1_0 = ctx.form()) == null ? null : tmp_1_0.name) || "Application submissions");
            i0.ɵɵadvance();
            i0.ɵɵconditional(ctx.error() ? 1 : -1);
            i0.ɵɵadvance(7);
            i0.ɵɵtextInterpolate(ctx.filtered().length);
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("ngModel", ctx.search());
            i0.ɵɵadvance(18);
            i0.ɵɵrepeater(ctx.filtered());
            i0.ɵɵadvance(3);
            i0.ɵɵconditional((tmp_6_0 = ctx.selected()) ? 32 : -1, tmp_6_0);
        } }, dependencies: [CommonModule,
            FormsModule, i1.DefaultValueAccessor, i1.NgControlStatus, i1.NgModel, AdminPageComponent,
            CompactActionMenuComponent,
            RecordDrawerComponent,
            AdminIllustrationComponent, i2.DatePipe], encapsulation: 2, changeDetection: 0 });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ApplicationSubmissionsComponent, [{
        type: Component,
        args: [{ selector: 'erp-application-submissions', imports: [
                    CommonModule,
                    FormsModule,
                    AdminPageComponent,
                    CompactActionMenuComponent,
                    RecordDrawerComponent,
                    AdminIllustrationComponent,
                ], changeDetection: ChangeDetectionStrategy.OnPush, template: "<erp-admin-page\n  [eyebrow]=\"section() ? 'Database' : purposeLabel(form()?.purpose || '') + ' applications'\"\n  [title]=\"section()?.name || form()?.name || 'Application submissions'\"\n  description=\"Search, review and edit submitted records.\"\n  variant=\"compact\"\n  layout=\"collection\"\n>\n  @if (error()) {\n    <div class=\"erp-alert erp-alert--error\" role=\"alert\">{{ error() }}</div>\n  }\n  <section class=\"erp-card erp-table-shell\">\n    <div class=\"erp-table-toolbar\">\n      <div>\n        <h2>\n          Saved records <small>{{ filtered().length }}</small>\n        </h2>\n        <p>Every record remains connected to its source form and published version.</p>\n      </div>\n      <input\n        class=\"erp-control\"\n        type=\"search\"\n        [ngModel]=\"search()\"\n        (ngModelChange)=\"search.set($event)\"\n        placeholder=\"Search name, code or response\"\n      />\n    </div>\n    <div class=\"erp-table-shell__scroll\">\n      <table>\n        <thead>\n          <tr>\n            <th>Record ID</th>\n            <th>Source form</th>\n            <th>Submitted</th>\n            <th>Form version</th>\n            <th>Status</th>\n            <th class=\"erp-table-shell__actions\">Actions</th>\n          </tr>\n        </thead>\n        <tbody>\n          @for (item of filtered(); track item._id) {\n            <tr>\n              <td>\n                <strong>{{ item.applicationCode || 'Not generated' }}</strong>\n                @if (item.purpose === 'faculty') {\n                  <small>Employee ID \u00B7 initial password is the same ID</small>\n                }\n              </td>\n              <td>{{ item.formName }}</td>\n              <td>{{ item.submittedAt | date: 'medium' }}</td>\n              <td>v{{ item.formVersion }}</td>\n              <td>\n                <span class=\"erp-status\">{{ item.status }}</span>\n              </td>\n              <td class=\"erp-table-shell__actions\">\n                <erp-compact-action-menu\n                  [items]=\"section() ? actions : [actions[0]]\"\n                  (selected)=\"handleAction($event, item)\"\n                />\n              </td>\n            </tr>\n          } @empty {\n            <tr>\n              <td colspan=\"6\" class=\"erp-empty-state\">\n                {{\n                  loading() ? 'Loading applications\u2026' : 'No applications submitted for this form.'\n                }}\n              </td>\n            </tr>\n          }\n        </tbody>\n      </table>\n    </div>\n  </section>\n</erp-admin-page>\n\n@if (selected(); as item) {\n  <erp-record-drawer\n    [open]=\"true\"\n    [title]=\"item.formName\"\n    [description]=\"item.applicationCode || purposeLabel(item.purpose) + ' application'\"\n    [fields]=\"responseRows(item)\"\n    (closed)=\"selected.set(null)\"\n  >\n    @if (!responseRows(item).length) {\n      <div class=\"erp-empty-panel\">\n        <erp-admin-illustration kind=\"applicationForm\" />\n        <h3>No submitted responses</h3>\n        <p>This record does not contain any response values.</p>\n      </div>\n    }\n    @if (section()) {\n      <button\n        drawer-actions\n        class=\"erp-button erp-button--primary\"\n        type=\"button\"\n        (click)=\"handleAction('edit', item)\"\n      >\n        Edit record\n      </button>\n    }\n  </erp-record-drawer>\n}\n" }]
    }], () => [], null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(ApplicationSubmissionsComponent, { className: "ApplicationSubmissionsComponent", filePath: "frontend/src/app/features/admin/application-submissions/application-submissions.component.ts", lineNumber: 29 }); })();
