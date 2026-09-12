import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { ApiService } from '../../../core/api.service';
import { RouterLink } from '@angular/router';
import { AdminIllustrationComponent } from '../../../shared/ui/admin-illustration/admin-illustration.component';
import { AdminPageComponent } from '../../../shared/ui/admin-page/admin-page.component';
import * as i0 from "@angular/core";
function DashboardComponent_Conditional_3_Template(rf, ctx) { if (rf & 1) {
    const _r1 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 2);
    i0.ɵɵtext(1);
    i0.ɵɵelementStart(2, "button", 23);
    i0.ɵɵlistener("click", function DashboardComponent_Conditional_3_Template_button_click_2_listener() { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.load()); });
    i0.ɵɵtext(3, " Try again ");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r1.error(), " ");
} }
export class DashboardComponent {
    api = inject(ApiService);
    stats = signal({
        masterValues: 0,
        forms: 0,
        drafts: 0,
        submitted: 0,
    }, ...(ngDevMode ? [{ debugName: "stats" }] : /* istanbul ignore next */ []));
    loading = signal(true, ...(ngDevMode ? [{ debugName: "loading" }] : /* istanbul ignore next */ []));
    error = signal('', ...(ngDevMode ? [{ debugName: "error" }] : /* istanbul ignore next */ []));
    constructor() {
        this.load();
    }
    load() {
        this.loading.set(true);
        this.error.set('');
        this.api.summary().subscribe({
            next: (value) => {
                this.stats.set(value);
                this.loading.set(false);
            },
            error: (error) => {
                if (error.status !== 401) {
                    this.error.set('Dashboard metrics are temporarily unavailable.');
                }
                this.loading.set(false);
            },
        });
    }
    static ɵfac = function DashboardComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || DashboardComponent)(); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: DashboardComponent, selectors: [["erp-dashboard"]], decls: 92, vars: 5, consts: [["eyebrow", "Overview", "title", "Administration overview", "description", "Your admissions, student records and campus operations in one workspace.", "variant", "compact"], ["page-actions", "", "routerLink", "/admin/admission/student", 1, "erp-button", "erp-button--primary"], ["role", "alert", 1, "erp-notice", "erp-notice--error"], [1, "erp-kpi-grid"], [1, "erp-kpi-card"], ["kind", "dataConfiguration", "size", "compact"], ["kind", "applicationForm", "size", "compact"], ["kind", "activityHistory", "size", "compact"], ["kind", "pendingReview", "size", "compact"], [1, "erp-card", "erp-card--padded"], [1, "erp-card__header"], ["aria-label", "Administrative workspaces", 1, "erp-crm-workspace-links"], ["routerLink", "/admin/admissions/not-approved"], ["routerLink", "/admin/database/students"], ["kind", "addStudent", "size", "compact"], ["routerLink", "/admin/admissions/forms"], ["routerLink", "/admin/master-data/custom/view"], ["routerLink", "/admin/accounts"], ["kind", "feeWallet", "size", "compact"], ["routerLink", "/admin/master-data/hostel/overview"], ["kind", "roomUnavailable", "size", "compact"], [1, "erp-crm-guidance"], ["routerLink", "/admin/admissions/applications", 1, "erp-button", "erp-button--secondary"], ["type", "button", 1, "erp-button", "erp-button--secondary", "erp-button--compact", 3, "click"]], template: function DashboardComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "erp-admin-page", 0)(1, "a", 1);
            i0.ɵɵtext(2, "New application");
            i0.ɵɵelementEnd();
            i0.ɵɵconditionalCreate(3, DashboardComponent_Conditional_3_Template, 4, 1, "div", 2);
            i0.ɵɵelementStart(4, "section", 3)(5, "article", 4);
            i0.ɵɵelement(6, "erp-admin-illustration", 5);
            i0.ɵɵelementStart(7, "div")(8, "small");
            i0.ɵɵtext(9, "Master values");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(10, "strong");
            i0.ɵɵtext(11);
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(12, "article", 4);
            i0.ɵɵelement(13, "erp-admin-illustration", 6);
            i0.ɵɵelementStart(14, "div")(15, "small");
            i0.ɵɵtext(16, "Admission forms");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(17, "strong");
            i0.ɵɵtext(18);
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(19, "article", 4);
            i0.ɵɵelement(20, "erp-admin-illustration", 7);
            i0.ɵɵelementStart(21, "div")(22, "small");
            i0.ɵɵtext(23, "Draft applications");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(24, "strong");
            i0.ɵɵtext(25);
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(26, "article", 4);
            i0.ɵɵelement(27, "erp-admin-illustration", 8);
            i0.ɵɵelementStart(28, "div")(29, "small");
            i0.ɵɵtext(30, "Submitted");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(31, "strong");
            i0.ɵɵtext(32);
            i0.ɵɵelementEnd()()()();
            i0.ɵɵelementStart(33, "section", 9)(34, "header", 10)(35, "div")(36, "h2");
            i0.ɵɵtext(37, "Continue your work");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(38, "p");
            i0.ɵɵtext(39, "Open a directory to review records and manage the next action.");
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(40, "nav", 11)(41, "a", 12);
            i0.ɵɵelement(42, "erp-admin-illustration", 8);
            i0.ɵɵelementStart(43, "span")(44, "strong");
            i0.ɵɵtext(45, "Admission reviews");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(46, "small");
            i0.ɵɵtext(47, "Review submitted applications and approve students");
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(48, "a", 13);
            i0.ɵɵelement(49, "erp-admin-illustration", 14);
            i0.ɵɵelementStart(50, "span")(51, "strong");
            i0.ɵɵtext(52, "Student directory");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(53, "small");
            i0.ɵɵtext(54, "Find approved students and open their records");
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(55, "a", 15);
            i0.ɵɵelement(56, "erp-admin-illustration", 6);
            i0.ɵɵelementStart(57, "span")(58, "strong");
            i0.ɵɵtext(59, "Admission forms");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(60, "small");
            i0.ɵɵtext(61, "Configure forms and manage publishing");
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(62, "a", 16);
            i0.ɵɵelement(63, "erp-admin-illustration", 5);
            i0.ɵɵelementStart(64, "span")(65, "strong");
            i0.ɵɵtext(66, "Master data");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(67, "small");
            i0.ɵɵtext(68, "Maintain the records used across your institution");
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(69, "a", 17);
            i0.ɵɵelement(70, "erp-admin-illustration", 18);
            i0.ɵɵelementStart(71, "span")(72, "strong");
            i0.ɵɵtext(73, "Payments & accounts");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(74, "small");
            i0.ɵɵtext(75, "Inspect transactions, allocations and receipts");
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(76, "a", 19);
            i0.ɵɵelement(77, "erp-admin-illustration", 20);
            i0.ɵɵelementStart(78, "span")(79, "strong");
            i0.ɵɵtext(80, "Hostel operations");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(81, "small");
            i0.ɵɵtext(82, "Review capacity, rooms and student allocations");
            i0.ɵɵelementEnd()()()()();
            i0.ɵɵelementStart(83, "section", 21);
            i0.ɵɵelement(84, "erp-admin-illustration", 8);
            i0.ɵɵelementStart(85, "div")(86, "h2");
            i0.ɵɵtext(87, "Keep admissions moving");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(88, "p");
            i0.ɵɵtext(89, " Start with applications awaiting review, then use the student directory for approved records. ");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(90, "a", 22);
            i0.ɵɵtext(91, "Open applications");
            i0.ɵɵelementEnd()()();
        } if (rf & 2) {
            i0.ɵɵadvance(3);
            i0.ɵɵconditional(ctx.error() ? 3 : -1);
            i0.ɵɵadvance(8);
            i0.ɵɵtextInterpolate(ctx.loading() ? "\u2026" : ctx.stats()["masterValues"]);
            i0.ɵɵadvance(7);
            i0.ɵɵtextInterpolate(ctx.loading() ? "\u2026" : ctx.stats()["forms"]);
            i0.ɵɵadvance(7);
            i0.ɵɵtextInterpolate(ctx.loading() ? "\u2026" : ctx.stats()["drafts"]);
            i0.ɵɵadvance(7);
            i0.ɵɵtextInterpolate(ctx.loading() ? "\u2026" : ctx.stats()["submitted"]);
        } }, dependencies: [AdminPageComponent, RouterLink, AdminIllustrationComponent], encapsulation: 2, changeDetection: 0 });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(DashboardComponent, [{
        type: Component,
        args: [{ selector: 'erp-dashboard', imports: [AdminPageComponent, RouterLink, AdminIllustrationComponent], changeDetection: ChangeDetectionStrategy.OnPush, template: "<erp-admin-page\n  eyebrow=\"Overview\"\n  title=\"Administration overview\"\n  description=\"Your admissions, student records and campus operations in one workspace.\"\n  variant=\"compact\"\n>\n  <a page-actions class=\"erp-button erp-button--primary\" routerLink=\"/admin/admission/student\"\n    >New application</a\n  >\n  @if (error()) {\n    <div class=\"erp-notice erp-notice--error\" role=\"alert\">\n      {{ error() }}\n      <button\n        class=\"erp-button erp-button--secondary erp-button--compact\"\n        type=\"button\"\n        (click)=\"load()\"\n      >\n        Try again\n      </button>\n    </div>\n  }\n  <section class=\"erp-kpi-grid\">\n    <article class=\"erp-kpi-card\">\n      <erp-admin-illustration kind=\"dataConfiguration\" size=\"compact\" />\n      <div>\n        <small>Master values</small><strong>{{ loading() ? '\u2026' : stats()['masterValues'] }}</strong>\n      </div>\n    </article>\n    <article class=\"erp-kpi-card\">\n      <erp-admin-illustration kind=\"applicationForm\" size=\"compact\" />\n      <div>\n        <small>Admission forms</small><strong>{{ loading() ? '\u2026' : stats()['forms'] }}</strong>\n      </div>\n    </article>\n    <article class=\"erp-kpi-card\">\n      <erp-admin-illustration kind=\"activityHistory\" size=\"compact\" />\n      <div>\n        <small>Draft applications</small><strong>{{ loading() ? '\u2026' : stats()['drafts'] }}</strong>\n      </div>\n    </article>\n    <article class=\"erp-kpi-card\">\n      <erp-admin-illustration kind=\"pendingReview\" size=\"compact\" />\n      <div>\n        <small>Submitted</small><strong>{{ loading() ? '\u2026' : stats()['submitted'] }}</strong>\n      </div>\n    </article>\n  </section>\n  <section class=\"erp-card erp-card--padded\">\n    <header class=\"erp-card__header\">\n      <div>\n        <h2>Continue your work</h2>\n        <p>Open a directory to review records and manage the next action.</p>\n      </div>\n    </header>\n    <nav class=\"erp-crm-workspace-links\" aria-label=\"Administrative workspaces\">\n      <a routerLink=\"/admin/admissions/not-approved\">\n        <erp-admin-illustration kind=\"pendingReview\" size=\"compact\" />\n        <span\n          ><strong>Admission reviews</strong\n          ><small>Review submitted applications and approve students</small></span\n        >\n      </a>\n      <a routerLink=\"/admin/database/students\">\n        <erp-admin-illustration kind=\"addStudent\" size=\"compact\" />\n        <span\n          ><strong>Student directory</strong\n          ><small>Find approved students and open their records</small></span\n        >\n      </a>\n      <a routerLink=\"/admin/admissions/forms\">\n        <erp-admin-illustration kind=\"applicationForm\" size=\"compact\" />\n        <span\n          ><strong>Admission forms</strong\n          ><small>Configure forms and manage publishing</small></span\n        >\n      </a>\n      <a routerLink=\"/admin/master-data/custom/view\">\n        <erp-admin-illustration kind=\"dataConfiguration\" size=\"compact\" />\n        <span\n          ><strong>Master data</strong\n          ><small>Maintain the records used across your institution</small></span\n        >\n      </a>\n      <a routerLink=\"/admin/accounts\">\n        <erp-admin-illustration kind=\"feeWallet\" size=\"compact\" />\n        <span\n          ><strong>Payments &amp; accounts</strong\n          ><small>Inspect transactions, allocations and receipts</small></span\n        >\n      </a>\n      <a routerLink=\"/admin/master-data/hostel/overview\">\n        <erp-admin-illustration kind=\"roomUnavailable\" size=\"compact\" />\n        <span\n          ><strong>Hostel operations</strong\n          ><small>Review capacity, rooms and student allocations</small></span\n        >\n      </a>\n    </nav>\n  </section>\n  <section class=\"erp-crm-guidance\">\n    <erp-admin-illustration kind=\"pendingReview\" size=\"compact\" />\n    <div>\n      <h2>Keep admissions moving</h2>\n      <p>\n        Start with applications awaiting review, then use the student directory for approved\n        records.\n      </p>\n    </div>\n    <a class=\"erp-button erp-button--secondary\" routerLink=\"/admin/admissions/applications\"\n      >Open applications</a\n    >\n  </section>\n</erp-admin-page>\n" }]
    }], () => [], null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(DashboardComponent, { className: "DashboardComponent", filePath: "frontend/src/app/features/admin/dashboard/dashboard.component.ts", lineNumber: 12 }); })();
