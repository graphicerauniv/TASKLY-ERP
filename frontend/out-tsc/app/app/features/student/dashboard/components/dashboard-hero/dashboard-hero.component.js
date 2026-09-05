import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import * as i0 from "@angular/core";
function DashboardHeroComponent_Conditional_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtext(0, " Ready for your day, ");
    i0.ɵɵdomElementStart(1, "span");
    i0.ɵɵtext(2);
    i0.ɵɵdomElementEnd();
} if (rf & 2) {
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1("", ctx, "?");
} }
function DashboardHeroComponent_Conditional_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtext(0, " Ready for your day? ");
} }
export class DashboardHeroComponent {
    viewModel = input.required(...(ngDevMode ? [{ debugName: "viewModel" }] : /* istanbul ignore next */ []));
    static ɵfac = function DashboardHeroComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || DashboardHeroComponent)(); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: DashboardHeroComponent, selectors: [["erp-dashboard-hero"]], inputs: { viewModel: [1, "viewModel"] }, decls: 13, vars: 1, consts: [["aria-labelledby", "student-dashboard-greeting", 1, "student-dashboard-hero"], [1, "student-dashboard-hero__copy"], ["id", "student-dashboard-greeting"], ["aria-hidden", "true"], ["src", "/assets/student/dashboard/hero/day-illustration.webp", "alt", "", "width", "1774", "height", "887", "decoding", "async", "fetchpriority", "high", 1, "student-dashboard-hero__art"]], template: function DashboardHeroComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵdomElementStart(0, "section", 0)(1, "div", 1)(2, "h2", 2);
            i0.ɵɵconditionalCreate(3, DashboardHeroComponent_Conditional_3_Template, 3, 1)(4, DashboardHeroComponent_Conditional_4_Template, 1, 0);
            i0.ɵɵdomElementEnd();
            i0.ɵɵdomElementStart(5, "p");
            i0.ɵɵtext(6, "Let\u2019s ");
            i0.ɵɵdomElementStart(7, "strong");
            i0.ɵɵtext(8, "make today");
            i0.ɵɵdomElementEnd();
            i0.ɵɵtext(9, " count. ");
            i0.ɵɵdomElementStart(10, "span", 3);
            i0.ɵɵtext(11, "\u2726");
            i0.ɵɵdomElementEnd()()();
            i0.ɵɵdomElement(12, "img", 4);
            i0.ɵɵdomElementEnd();
        } if (rf & 2) {
            let tmp_0_0;
            i0.ɵɵadvance(3);
            i0.ɵɵconditional((tmp_0_0 = ctx.viewModel().firstName) ? 3 : 4, tmp_0_0);
        } }, encapsulation: 2, changeDetection: 0 });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(DashboardHeroComponent, [{
        type: Component,
        args: [{ selector: 'erp-dashboard-hero', changeDetection: ChangeDetectionStrategy.OnPush, template: "<section class=\"student-dashboard-hero\" aria-labelledby=\"student-dashboard-greeting\">\n  <div class=\"student-dashboard-hero__copy\">\n    <h2 id=\"student-dashboard-greeting\">\n      @if (viewModel().firstName; as firstName) {\n        Ready for your day, <span>{{ firstName }}?</span>\n      } @else {\n        Ready for your day?\n      }\n    </h2>\n    <p>Let\u2019s <strong>make today</strong> count. <span aria-hidden=\"true\">\u2726</span></p>\n  </div>\n\n  <img\n    class=\"student-dashboard-hero__art\"\n    src=\"/assets/student/dashboard/hero/day-illustration.webp\"\n    alt=\"\"\n    width=\"1774\"\n    height=\"887\"\n    decoding=\"async\"\n    fetchpriority=\"high\"\n  />\n</section>\n" }]
    }], null, { viewModel: [{ type: i0.Input, args: [{ isSignal: true, alias: "viewModel", required: true }] }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(DashboardHeroComponent, { className: "DashboardHeroComponent", filePath: "frontend/src/app/features/student/dashboard/components/dashboard-hero/dashboard-hero.component.ts", lineNumber: 9 }); })();
