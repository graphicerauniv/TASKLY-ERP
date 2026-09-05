import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { LucideCreditCard, LucideFileText, LucideGraduationCap, LucideMapPin, LucideShieldCheck, } from '@lucide/angular';
import * as i0 from "@angular/core";
const _c0 = ["*"];
function DynamicSectionRendererComponent_Case_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(0, "svg", 2);
} }
function DynamicSectionRendererComponent_Case_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(0, "svg", 3);
} }
function DynamicSectionRendererComponent_Case_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(0, "svg", 4);
} }
function DynamicSectionRendererComponent_Case_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(0, "svg", 5);
} }
function DynamicSectionRendererComponent_Case_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(0, "svg", 6);
} }
export class DynamicSectionRendererComponent {
    sectionNumber = input('01', ...(ngDevMode ? [{ debugName: "sectionNumber" }] : /* istanbul ignore next */ []));
    title = input.required(...(ngDevMode ? [{ debugName: "title" }] : /* istanbul ignore next */ []));
    description = input('Complete this section carefully.', ...(ngDevMode ? [{ debugName: "description" }] : /* istanbul ignore next */ []));
    icon = input('personal', ...(ngDevMode ? [{ debugName: "icon" }] : /* istanbul ignore next */ []));
    completedFields = input(0, ...(ngDevMode ? [{ debugName: "completedFields" }] : /* istanbul ignore next */ []));
    totalFields = input(0, ...(ngDevMode ? [{ debugName: "totalFields" }] : /* istanbul ignore next */ []));
    static ɵfac = function DynamicSectionRendererComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || DynamicSectionRendererComponent)(); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: DynamicSectionRendererComponent, selectors: [["erp-dynamic-section-renderer"]], inputs: { sectionNumber: [1, "sectionNumber"], title: [1, "title"], description: [1, "description"], icon: [1, "icon"], completedFields: [1, "completedFields"], totalFields: [1, "totalFields"] }, ngContentSelectors: _c0, decls: 16, vars: 6, consts: [[1, "erp-current-section__header"], [1, "erp-current-section__icon"], ["lucideGraduationCap", "", "size", "20", "aria-hidden", "true"], ["lucideFileText", "", "size", "20", "aria-hidden", "true"], ["lucideMapPin", "", "size", "20", "aria-hidden", "true"], ["lucideCreditCard", "", "size", "20", "aria-hidden", "true"], ["lucideShieldCheck", "", "size", "20", "aria-hidden", "true"], [1, "erp-current-section__copy"], [1, "erp-current-section__state"], [1, "erp-form-surface"]], template: function DynamicSectionRendererComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵprojectionDef();
            i0.ɵɵelementStart(0, "header", 0)(1, "span", 1);
            i0.ɵɵconditionalCreate(2, DynamicSectionRendererComponent_Case_2_Template, 1, 0, ":svg:svg", 2)(3, DynamicSectionRendererComponent_Case_3_Template, 1, 0, ":svg:svg", 3)(4, DynamicSectionRendererComponent_Case_4_Template, 1, 0, ":svg:svg", 4)(5, DynamicSectionRendererComponent_Case_5_Template, 1, 0, ":svg:svg", 5)(6, DynamicSectionRendererComponent_Case_6_Template, 1, 0, ":svg:svg", 6);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(7, "div", 7)(8, "h2");
            i0.ɵɵtext(9);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(10, "p");
            i0.ɵɵtext(11);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(12, "span", 8);
            i0.ɵɵtext(13);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(14, "section", 9);
            i0.ɵɵprojection(15);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            let tmp_0_0;
            i0.ɵɵadvance(2);
            i0.ɵɵconditional((tmp_0_0 = ctx.icon()) === "graduation" ? 2 : tmp_0_0 === "document" ? 3 : tmp_0_0 === "address" ? 4 : tmp_0_0 === "payment" ? 5 : 6);
            i0.ɵɵadvance(7);
            i0.ɵɵtextInterpolate2("Section ", ctx.sectionNumber(), " \u2014 ", ctx.title());
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate(ctx.description());
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate2(" ", ctx.completedFields(), " of ", ctx.totalFields(), " fields completed ");
        } }, dependencies: [LucideCreditCard,
            LucideFileText,
            LucideGraduationCap,
            LucideMapPin,
            LucideShieldCheck], encapsulation: 2, changeDetection: 0 });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(DynamicSectionRendererComponent, [{
        type: Component,
        args: [{ selector: 'erp-dynamic-section-renderer', imports: [
                    LucideCreditCard,
                    LucideFileText,
                    LucideGraduationCap,
                    LucideMapPin,
                    LucideShieldCheck,
                ], changeDetection: ChangeDetectionStrategy.OnPush, template: "<header class=\"erp-current-section__header\">\n  <span class=\"erp-current-section__icon\">\n    @switch (icon()) {\n      @case ('graduation') {\n        <svg lucideGraduationCap size=\"20\" aria-hidden=\"true\"></svg>\n      }\n      @case ('document') {\n        <svg lucideFileText size=\"20\" aria-hidden=\"true\"></svg>\n      }\n      @case ('address') {\n        <svg lucideMapPin size=\"20\" aria-hidden=\"true\"></svg>\n      }\n      @case ('payment') {\n        <svg lucideCreditCard size=\"20\" aria-hidden=\"true\"></svg>\n      }\n      @default {\n        <svg lucideShieldCheck size=\"20\" aria-hidden=\"true\"></svg>\n      }\n    }\n  </span>\n  <div class=\"erp-current-section__copy\">\n    <h2>Section {{ sectionNumber() }} \u2014 {{ title() }}</h2>\n    <p>{{ description() }}</p>\n  </div>\n  <span class=\"erp-current-section__state\">\n    {{ completedFields() }} of {{ totalFields() }} fields completed\n  </span>\n</header>\n\n<section class=\"erp-form-surface\">\n  <ng-content />\n</section>\n" }]
    }], null, { sectionNumber: [{ type: i0.Input, args: [{ isSignal: true, alias: "sectionNumber", required: false }] }], title: [{ type: i0.Input, args: [{ isSignal: true, alias: "title", required: true }] }], description: [{ type: i0.Input, args: [{ isSignal: true, alias: "description", required: false }] }], icon: [{ type: i0.Input, args: [{ isSignal: true, alias: "icon", required: false }] }], completedFields: [{ type: i0.Input, args: [{ isSignal: true, alias: "completedFields", required: false }] }], totalFields: [{ type: i0.Input, args: [{ isSignal: true, alias: "totalFields", required: false }] }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(DynamicSectionRendererComponent, { className: "DynamicSectionRendererComponent", filePath: "frontend/src/app/shared/ui/dynamic-section-renderer/dynamic-section-renderer.component.ts", lineNumber: 22 }); })();
