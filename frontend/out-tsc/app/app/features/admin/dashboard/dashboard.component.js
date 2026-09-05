import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { LucideCircleCheck, LucideClock3, LucideDatabase, LucideFileText } from '@lucide/angular';
import { ApiService } from '../../../core/api.service';
import { AdminPageComponent } from '../../../shared/ui/admin-page/admin-page.component';
import * as i0 from "@angular/core";
function DashboardComponent_Conditional_1_Template(rf, ctx) { if (rf & 1) {
    const _r1 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 1);
    i0.ɵɵtext(1);
    i0.ɵɵelementStart(2, "button", 14);
    i0.ɵɵlistener("click", function DashboardComponent_Conditional_1_Template_button_click_2_listener() { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.load()); });
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
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: DashboardComponent, selectors: [["erp-dashboard"]], decls: 51, vars: 5, consts: [["eyebrow", "Overview", "title", "Admin Dashboard", "description", "Manage master data, admission forms, and student applications.", "variant", "module"], ["role", "alert", 1, "erp-notice", "erp-notice--error"], [1, "erp-kpi-grid"], [1, "erp-kpi-card"], [1, "erp-kpi-card__icon"], ["lucideDatabase", "", "size", "20", "aria-hidden", "true"], [1, "erp-kpi-card__icon", "erp-kpi-card__icon--purple"], ["lucideFileText", "", "size", "20", "aria-hidden", "true"], [1, "erp-kpi-card__icon", "erp-kpi-card__icon--orange"], ["lucideClock3", "", "size", "20", "aria-hidden", "true"], [1, "erp-kpi-card__icon", "erp-kpi-card__icon--green"], ["lucideCircleCheck", "", "size", "20", "aria-hidden", "true"], [1, "welcome"], [1, "flow"], ["type", "button", 1, "erp-button", "erp-button--secondary", "erp-button--compact", 3, "click"]], template: function DashboardComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "erp-admin-page", 0);
            i0.ɵɵconditionalCreate(1, DashboardComponent_Conditional_1_Template, 4, 1, "div", 1);
            i0.ɵɵelementStart(2, "section", 2)(3, "article", 3)(4, "span", 4);
            i0.ɵɵnamespaceSVG();
            i0.ɵɵelement(5, "svg", 5);
            i0.ɵɵelementEnd();
            i0.ɵɵnamespaceHTML();
            i0.ɵɵelementStart(6, "div")(7, "small");
            i0.ɵɵtext(8, "Master values");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(9, "strong");
            i0.ɵɵtext(10);
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(11, "article", 3)(12, "span", 6);
            i0.ɵɵnamespaceSVG();
            i0.ɵɵelement(13, "svg", 7);
            i0.ɵɵelementEnd();
            i0.ɵɵnamespaceHTML();
            i0.ɵɵelementStart(14, "div")(15, "small");
            i0.ɵɵtext(16, "Admission forms");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(17, "strong");
            i0.ɵɵtext(18);
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(19, "article", 3)(20, "span", 8);
            i0.ɵɵnamespaceSVG();
            i0.ɵɵelement(21, "svg", 9);
            i0.ɵɵelementEnd();
            i0.ɵɵnamespaceHTML();
            i0.ɵɵelementStart(22, "div")(23, "small");
            i0.ɵɵtext(24, "Draft applications");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(25, "strong");
            i0.ɵɵtext(26);
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(27, "article", 3)(28, "span", 10);
            i0.ɵɵnamespaceSVG();
            i0.ɵɵelement(29, "svg", 11);
            i0.ɵɵelementEnd();
            i0.ɵɵnamespaceHTML();
            i0.ɵɵelementStart(30, "div")(31, "small");
            i0.ɵɵtext(32, "Submitted");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(33, "strong");
            i0.ɵɵtext(34);
            i0.ɵɵelementEnd()()()();
            i0.ɵɵelementStart(35, "section", 12)(36, "div")(37, "span");
            i0.ɵɵtext(38, "Database-driven admission");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(39, "h2");
            i0.ɵɵtext(40, "Your complete form is controlled from one workspace.");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(41, "p");
            i0.ɵɵtext(42, " Update master values, arrange fields, publish a form, and students see it immediately\u2014without changing frontend code. ");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(43, "div", 13);
            i0.ɵɵtext(44, "Master Data ");
            i0.ɵɵelementStart(45, "b");
            i0.ɵɵtext(46, "\u2192");
            i0.ɵɵelementEnd();
            i0.ɵɵtext(47, " Form Builder ");
            i0.ɵɵelementStart(48, "b");
            i0.ɵɵtext(49, "\u2192");
            i0.ɵɵelementEnd();
            i0.ɵɵtext(50, " Student Admission");
            i0.ɵɵelementEnd()()();
        } if (rf & 2) {
            i0.ɵɵadvance();
            i0.ɵɵconditional(ctx.error() ? 1 : -1);
            i0.ɵɵadvance(9);
            i0.ɵɵtextInterpolate(ctx.stats()["masterValues"]);
            i0.ɵɵadvance(8);
            i0.ɵɵtextInterpolate(ctx.stats()["forms"]);
            i0.ɵɵadvance(8);
            i0.ɵɵtextInterpolate(ctx.stats()["drafts"]);
            i0.ɵɵadvance(8);
            i0.ɵɵtextInterpolate(ctx.stats()["submitted"]);
        } }, dependencies: [AdminPageComponent, LucideCircleCheck, LucideClock3, LucideDatabase, LucideFileText], encapsulation: 2, changeDetection: 0 });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(DashboardComponent, [{
        type: Component,
        args: [{ selector: 'erp-dashboard', imports: [AdminPageComponent, LucideCircleCheck, LucideClock3, LucideDatabase, LucideFileText], changeDetection: ChangeDetectionStrategy.OnPush, template: "<erp-admin-page\n  eyebrow=\"Overview\"\n  title=\"Admin Dashboard\"\n  description=\"Manage master data, admission forms, and student applications.\"\n  variant=\"module\"\n>\n  @if (error()) {\n    <div class=\"erp-notice erp-notice--error\" role=\"alert\">\n      {{ error() }}\n      <button\n        class=\"erp-button erp-button--secondary erp-button--compact\"\n        type=\"button\"\n        (click)=\"load()\"\n      >\n        Try again\n      </button>\n    </div>\n  }\n  <section class=\"erp-kpi-grid\">\n    <article class=\"erp-kpi-card\">\n      <span class=\"erp-kpi-card__icon\"\n        ><svg lucideDatabase size=\"20\" aria-hidden=\"true\"></svg\n      ></span>\n      <div>\n        <small>Master values</small><strong>{{ stats()['masterValues'] }}</strong>\n      </div>\n    </article>\n    <article class=\"erp-kpi-card\">\n      <span class=\"erp-kpi-card__icon erp-kpi-card__icon--purple\"\n        ><svg lucideFileText size=\"20\" aria-hidden=\"true\"></svg\n      ></span>\n      <div>\n        <small>Admission forms</small><strong>{{ stats()['forms'] }}</strong>\n      </div>\n    </article>\n    <article class=\"erp-kpi-card\">\n      <span class=\"erp-kpi-card__icon erp-kpi-card__icon--orange\"\n        ><svg lucideClock3 size=\"20\" aria-hidden=\"true\"></svg\n      ></span>\n      <div>\n        <small>Draft applications</small><strong>{{ stats()['drafts'] }}</strong>\n      </div>\n    </article>\n    <article class=\"erp-kpi-card\">\n      <span class=\"erp-kpi-card__icon erp-kpi-card__icon--green\"\n        ><svg lucideCircleCheck size=\"20\" aria-hidden=\"true\"></svg\n      ></span>\n      <div>\n        <small>Submitted</small><strong>{{ stats()['submitted'] }}</strong>\n      </div>\n    </article>\n  </section>\n  <section class=\"welcome\">\n    <div>\n      <span>Database-driven admission</span>\n      <h2>Your complete form is controlled from one workspace.</h2>\n      <p>\n        Update master values, arrange fields, publish a form, and students see it\n        immediately\u2014without changing frontend code.\n      </p>\n    </div>\n    <div class=\"flow\">Master Data <b>\u2192</b> Form Builder <b>\u2192</b> Student Admission</div>\n  </section>\n</erp-admin-page>\n" }]
    }], () => [], null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(DashboardComponent, { className: "DashboardComponent", filePath: "frontend/src/app/features/admin/dashboard/dashboard.component.ts", lineNumber: 11 }); })();
