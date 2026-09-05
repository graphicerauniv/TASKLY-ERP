import { ChangeDetectionStrategy, Component, input, output } from '@angular/core';
import { LucideAlertTriangle, LucideCheck, LucideChevronDown } from '@lucide/angular';
import * as i0 from "@angular/core";
const _c0 = ["*"];
function FormSubGroupComponent_Conditional_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "small");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r0.description());
} }
function FormSubGroupComponent_Conditional_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(0, "svg", 4);
    i0.ɵɵtext(1, " Complete ");
} }
function FormSubGroupComponent_Conditional_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(0, "svg", 5);
    i0.ɵɵtext(1);
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r0.remainingRequired(), " required remaining ");
} }
function FormSubGroupComponent_Conditional_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtext(0);
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵtextInterpolate1(" ", ctx_r0.requiredCount(), " required ");
} }
function FormSubGroupComponent_Conditional_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtext(0);
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵtextInterpolate1(" ", ctx_r0.fieldCount(), " fields ");
} }
function FormSubGroupComponent_Conditional_11_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 3);
    i0.ɵɵprojection(1);
    i0.ɵɵelementEnd();
} }
export class FormSubGroupComponent {
    title = input.required(...(ngDevMode ? [{ debugName: "title" }] : /* istanbul ignore next */ []));
    description = input('', ...(ngDevMode ? [{ debugName: "description" }] : /* istanbul ignore next */ []));
    fieldCount = input(0, ...(ngDevMode ? [{ debugName: "fieldCount" }] : /* istanbul ignore next */ []));
    requiredCount = input(0, ...(ngDevMode ? [{ debugName: "requiredCount" }] : /* istanbul ignore next */ []));
    remainingRequired = input(0, ...(ngDevMode ? [{ debugName: "remainingRequired" }] : /* istanbul ignore next */ []));
    complete = input(false, ...(ngDevMode ? [{ debugName: "complete" }] : /* istanbul ignore next */ []));
    open = input(false, ...(ngDevMode ? [{ debugName: "open" }] : /* istanbul ignore next */ []));
    toggled = output();
    static ɵfac = function FormSubGroupComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || FormSubGroupComponent)(); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: FormSubGroupComponent, selectors: [["erp-form-sub-group"]], hostAttrs: [1, "erp-form-subgroup"], hostVars: 2, hostBindings: function FormSubGroupComponent_HostBindings(rf, ctx) { if (rf & 2) {
            i0.ɵɵclassProp("erp-form-subgroup--open", ctx.open());
        } }, inputs: { title: [1, "title"], description: [1, "description"], fieldCount: [1, "fieldCount"], requiredCount: [1, "requiredCount"], remainingRequired: [1, "remainingRequired"], complete: [1, "complete"], open: [1, "open"] }, outputs: { toggled: "toggled" }, ngContentSelectors: _c0, decls: 12, vars: 5, consts: [["type", "button", 1, "erp-form-subgroup__header", 3, "click"], [1, "erp-form-subgroup__meta"], ["lucideChevronDown", "", "size", "17", "aria-hidden", "true"], [1, "erp-form-subgroup__body"], ["lucideCheck", "", "size", "16", "aria-hidden", "true"], ["lucideAlertTriangle", "", "size", "15", "aria-hidden", "true"]], template: function FormSubGroupComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵprojectionDef();
            i0.ɵɵelementStart(0, "button", 0);
            i0.ɵɵlistener("click", function FormSubGroupComponent_Template_button_click_0_listener() { return ctx.toggled.emit(); });
            i0.ɵɵelementStart(1, "span")(2, "strong");
            i0.ɵɵtext(3);
            i0.ɵɵelementEnd();
            i0.ɵɵconditionalCreate(4, FormSubGroupComponent_Conditional_4_Template, 2, 1, "small");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(5, "span", 1);
            i0.ɵɵconditionalCreate(6, FormSubGroupComponent_Conditional_6_Template, 2, 0)(7, FormSubGroupComponent_Conditional_7_Template, 2, 1)(8, FormSubGroupComponent_Conditional_8_Template, 1, 1)(9, FormSubGroupComponent_Conditional_9_Template, 1, 1);
            i0.ɵɵnamespaceSVG();
            i0.ɵɵelement(10, "svg", 2);
            i0.ɵɵelementEnd()();
            i0.ɵɵconditionalCreate(11, FormSubGroupComponent_Conditional_11_Template, 2, 0, "div", 3);
        } if (rf & 2) {
            i0.ɵɵattribute("aria-expanded", ctx.open());
            i0.ɵɵadvance(3);
            i0.ɵɵtextInterpolate(ctx.title());
            i0.ɵɵadvance();
            i0.ɵɵconditional(ctx.description() ? 4 : -1);
            i0.ɵɵadvance(2);
            i0.ɵɵconditional(ctx.complete() ? 6 : ctx.remainingRequired() ? 7 : ctx.requiredCount() ? 8 : 9);
            i0.ɵɵadvance(5);
            i0.ɵɵconditional(ctx.open() ? 11 : -1);
        } }, dependencies: [LucideAlertTriangle, LucideCheck, LucideChevronDown], encapsulation: 2, changeDetection: 0 });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(FormSubGroupComponent, [{
        type: Component,
        args: [{ selector: 'erp-form-sub-group', imports: [LucideAlertTriangle, LucideCheck, LucideChevronDown], changeDetection: ChangeDetectionStrategy.OnPush, host: {
                    class: 'erp-form-subgroup',
                    '[class.erp-form-subgroup--open]': 'open()',
                }, template: "<button\n  class=\"erp-form-subgroup__header\"\n  type=\"button\"\n  [attr.aria-expanded]=\"open()\"\n  (click)=\"toggled.emit()\"\n>\n  <span>\n    <strong>{{ title() }}</strong>\n    @if (description()) {\n      <small>{{ description() }}</small>\n    }\n  </span>\n  <span class=\"erp-form-subgroup__meta\">\n    @if (complete()) {\n      <svg lucideCheck size=\"16\" aria-hidden=\"true\"></svg>\n      Complete\n    } @else if (remainingRequired()) {\n      <svg lucideAlertTriangle size=\"15\" aria-hidden=\"true\"></svg>\n      {{ remainingRequired() }} required remaining\n    } @else if (requiredCount()) {\n      {{ requiredCount() }} required\n    } @else {\n      {{ fieldCount() }} fields\n    }\n    <svg lucideChevronDown size=\"17\" aria-hidden=\"true\"></svg>\n  </span>\n</button>\n\n@if (open()) {\n  <div class=\"erp-form-subgroup__body\">\n    <ng-content />\n  </div>\n}\n" }]
    }], null, { title: [{ type: i0.Input, args: [{ isSignal: true, alias: "title", required: true }] }], description: [{ type: i0.Input, args: [{ isSignal: true, alias: "description", required: false }] }], fieldCount: [{ type: i0.Input, args: [{ isSignal: true, alias: "fieldCount", required: false }] }], requiredCount: [{ type: i0.Input, args: [{ isSignal: true, alias: "requiredCount", required: false }] }], remainingRequired: [{ type: i0.Input, args: [{ isSignal: true, alias: "remainingRequired", required: false }] }], complete: [{ type: i0.Input, args: [{ isSignal: true, alias: "complete", required: false }] }], open: [{ type: i0.Input, args: [{ isSignal: true, alias: "open", required: false }] }], toggled: [{ type: i0.Output, args: ["toggled"] }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(FormSubGroupComponent, { className: "FormSubGroupComponent", filePath: "frontend/src/app/shared/ui/form-sub-group/form-sub-group.component.ts", lineNumber: 14 }); })();
