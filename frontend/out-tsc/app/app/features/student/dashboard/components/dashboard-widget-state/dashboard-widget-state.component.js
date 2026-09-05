import { ChangeDetectionStrategy, Component, input, output } from '@angular/core';
import { LucideInfo } from '@lucide/angular';
import * as i0 from "@angular/core";
function DashboardWidgetStateComponent_Conditional_8_Template(rf, ctx) { if (rf & 1) {
    const _r1 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 4);
    i0.ɵɵlistener("click", function DashboardWidgetStateComponent_Conditional_8_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.retry.emit()); });
    i0.ɵɵtext(1, "Retry");
    i0.ɵɵelementEnd();
} }
export class DashboardWidgetStateComponent {
    status = input.required(...(ngDevMode ? [{ debugName: "status" }] : /* istanbul ignore next */ []));
    title = input.required(...(ngDevMode ? [{ debugName: "title" }] : /* istanbul ignore next */ []));
    message = input.required(...(ngDevMode ? [{ debugName: "message" }] : /* istanbul ignore next */ []));
    retryable = input(false, ...(ngDevMode ? [{ debugName: "retryable" }] : /* istanbul ignore next */ []));
    retry = output();
    static ɵfac = function DashboardWidgetStateComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || DashboardWidgetStateComponent)(); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: DashboardWidgetStateComponent, selectors: [["erp-dashboard-widget-state"]], inputs: { status: [1, "status"], title: [1, "title"], message: [1, "message"], retryable: [1, "retryable"] }, outputs: { retry: "retry" }, decls: 9, vars: 4, consts: [["role", "status", 1, "student-widget-state"], ["aria-hidden", "true", 1, "student-widget-state__icon"], ["lucideInfo", "", "size", "18"], ["type", "button"], ["type", "button", 3, "click"]], template: function DashboardWidgetStateComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0)(1, "span", 1);
            i0.ɵɵnamespaceSVG();
            i0.ɵɵelement(2, "svg", 2);
            i0.ɵɵelementEnd();
            i0.ɵɵnamespaceHTML();
            i0.ɵɵelementStart(3, "span")(4, "strong");
            i0.ɵɵtext(5);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(6, "small");
            i0.ɵɵtext(7);
            i0.ɵɵelementEnd()();
            i0.ɵɵconditionalCreate(8, DashboardWidgetStateComponent_Conditional_8_Template, 2, 0, "button", 3);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵattribute("data-status", ctx.status());
            i0.ɵɵadvance(5);
            i0.ɵɵtextInterpolate(ctx.title());
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate(ctx.message());
            i0.ɵɵadvance();
            i0.ɵɵconditional(ctx.status() === "error" && ctx.retryable() ? 8 : -1);
        } }, dependencies: [LucideInfo], encapsulation: 2, changeDetection: 0 });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(DashboardWidgetStateComponent, [{
        type: Component,
        args: [{
                selector: 'erp-dashboard-widget-state',
                imports: [LucideInfo],
                template: `
    <div class="student-widget-state" [attr.data-status]="status()" role="status">
      <span class="student-widget-state__icon" aria-hidden="true">
        <svg lucideInfo size="18"></svg>
      </span>
      <span>
        <strong>{{ title() }}</strong>
        <small>{{ message() }}</small>
      </span>
      @if (status() === 'error' && retryable()) {
        <button type="button" (click)="retry.emit()">Retry</button>
      }
    </div>
  `,
                changeDetection: ChangeDetectionStrategy.OnPush,
            }]
    }], null, { status: [{ type: i0.Input, args: [{ isSignal: true, alias: "status", required: true }] }], title: [{ type: i0.Input, args: [{ isSignal: true, alias: "title", required: true }] }], message: [{ type: i0.Input, args: [{ isSignal: true, alias: "message", required: true }] }], retryable: [{ type: i0.Input, args: [{ isSignal: true, alias: "retryable", required: false }] }], retry: [{ type: i0.Output, args: ["retry"] }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(DashboardWidgetStateComponent, { className: "DashboardWidgetStateComponent", filePath: "frontend/src/app/features/student/dashboard/components/dashboard-widget-state/dashboard-widget-state.component.ts", lineNumber: 24 }); })();
