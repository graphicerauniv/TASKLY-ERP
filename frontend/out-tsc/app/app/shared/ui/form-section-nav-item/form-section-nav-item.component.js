import { ChangeDetectionStrategy, Component, input, output } from '@angular/core';
import { LucideCheck, LucideCircle, LucideCircleDot, LucideTriangleAlert, } from '@lucide/angular';
import * as i0 from "@angular/core";
function FormSectionNavItemComponent_Case_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(0, "svg", 2);
} }
function FormSectionNavItemComponent_Case_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(0, "svg", 3);
} }
function FormSectionNavItemComponent_Case_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(0, "svg", 4);
} }
function FormSectionNavItemComponent_Case_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(0, "svg", 5);
} }
export class FormSectionNavItemComponent {
    item = input.required(...(ngDevMode ? [{ debugName: "item" }] : /* istanbul ignore next */ []));
    selected = output();
    static ɵfac = function FormSectionNavItemComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || FormSectionNavItemComponent)(); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: FormSectionNavItemComponent, selectors: [["erp-form-section-nav-item"]], inputs: { item: [1, "item"] }, outputs: { selected: "selected" }, decls: 13, vars: 11, consts: [["type", "button", 1, "erp-section-nav-item", 3, "click"], ["aria-hidden", "true", 1, "erp-section-nav-item__status"], ["lucideCheck", "", "size", "12"], ["lucideCircleDot", "", "size", "14"], ["lucideTriangleAlert", "", "size", "13"], ["lucideCircle", "", "size", "12"], [1, "erp-section-nav-item__number"], [1, "erp-section-nav-item__body"]], template: function FormSectionNavItemComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "button", 0);
            i0.ɵɵlistener("click", function FormSectionNavItemComponent_Template_button_click_0_listener() { return ctx.selected.emit(ctx.item().index); });
            i0.ɵɵelementStart(1, "span", 1);
            i0.ɵɵconditionalCreate(2, FormSectionNavItemComponent_Case_2_Template, 1, 0, ":svg:svg", 2)(3, FormSectionNavItemComponent_Case_3_Template, 1, 0, ":svg:svg", 3)(4, FormSectionNavItemComponent_Case_4_Template, 1, 0, ":svg:svg", 4)(5, FormSectionNavItemComponent_Case_5_Template, 1, 0, ":svg:svg", 5);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(6, "span", 6);
            i0.ɵɵtext(7);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(8, "span", 7)(9, "strong");
            i0.ɵɵtext(10);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(11, "small");
            i0.ɵɵtext(12);
            i0.ɵɵelementEnd()()();
        } if (rf & 2) {
            let tmp_4_0;
            i0.ɵɵclassProp("erp-section-nav-item--complete", ctx.item().state === "complete")("erp-section-nav-item--current", ctx.item().state === "current")("erp-section-nav-item--attention", ctx.item().state === "attention");
            i0.ɵɵattribute("aria-current", ctx.item().state === "current" ? "step" : null);
            i0.ɵɵadvance(2);
            i0.ɵɵconditional((tmp_4_0 = ctx.item().state) === "complete" ? 2 : tmp_4_0 === "current" ? 3 : tmp_4_0 === "attention" ? 4 : 5);
            i0.ɵɵadvance(5);
            i0.ɵɵtextInterpolate1(" ", ctx.item().index + 1 < 10 ? "0" + (ctx.item().index + 1) : ctx.item().index + 1, " ");
            i0.ɵɵadvance(3);
            i0.ɵɵtextInterpolate(ctx.item().title);
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate(ctx.item().status);
        } }, dependencies: [LucideCheck, LucideCircle, LucideCircleDot, LucideTriangleAlert], encapsulation: 2, changeDetection: 0 });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(FormSectionNavItemComponent, [{
        type: Component,
        args: [{ selector: 'erp-form-section-nav-item', imports: [LucideCheck, LucideCircle, LucideCircleDot, LucideTriangleAlert], changeDetection: ChangeDetectionStrategy.OnPush, template: "<button\n  class=\"erp-section-nav-item\"\n  type=\"button\"\n  [class.erp-section-nav-item--complete]=\"item().state === 'complete'\"\n  [class.erp-section-nav-item--current]=\"item().state === 'current'\"\n  [class.erp-section-nav-item--attention]=\"item().state === 'attention'\"\n  [attr.aria-current]=\"item().state === 'current' ? 'step' : null\"\n  (click)=\"selected.emit(item().index)\"\n>\n  <span class=\"erp-section-nav-item__status\" aria-hidden=\"true\">\n    @switch (item().state) {\n      @case ('complete') {\n        <svg lucideCheck size=\"12\"></svg>\n      }\n      @case ('current') {\n        <svg lucideCircleDot size=\"14\"></svg>\n      }\n      @case ('attention') {\n        <svg lucideTriangleAlert size=\"13\"></svg>\n      }\n      @default {\n        <svg lucideCircle size=\"12\"></svg>\n      }\n    }\n  </span>\n  <span class=\"erp-section-nav-item__number\">\n    {{ item().index + 1 < 10 ? '0' + (item().index + 1) : item().index + 1 }}\n  </span>\n  <span class=\"erp-section-nav-item__body\">\n    <strong>{{ item().title }}</strong>\n    <small>{{ item().status }}</small>\n  </span>\n</button>\n" }]
    }], null, { item: [{ type: i0.Input, args: [{ isSignal: true, alias: "item", required: true }] }], selected: [{ type: i0.Output, args: ["selected"] }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(FormSectionNavItemComponent, { className: "FormSectionNavItemComponent", filePath: "frontend/src/app/shared/ui/form-section-nav-item/form-section-nav-item.component.ts", lineNumber: 16 }); })();
