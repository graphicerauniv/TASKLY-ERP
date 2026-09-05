import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { NgTemplateOutlet } from '@angular/common';
import { RouterLink } from '@angular/router';
import * as i0 from "@angular/core";
function DashboardModuleCardComponent_Conditional_0_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
function DashboardModuleCardComponent_Conditional_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "a", 3);
    i0.ɵɵtemplate(1, DashboardModuleCardComponent_Conditional_0_ng_container_1_Template, 1, 0, "ng-container", 4);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    const moduleContent_r2 = i0.ɵɵreference(3);
    i0.ɵɵstyleProp("--student-module-background", ctx_r0.module().background)("--student-module-accent", ctx_r0.module().accent || ctx_r0.module().background);
    i0.ɵɵproperty("routerLink", ctx_r0.module().route);
    i0.ɵɵattribute("aria-label", ctx_r0.module().ariaLabel);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngTemplateOutlet", moduleContent_r2);
} }
function DashboardModuleCardComponent_Conditional_1_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
function DashboardModuleCardComponent_Conditional_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 5);
    i0.ɵɵtemplate(1, DashboardModuleCardComponent_Conditional_1_ng_container_1_Template, 1, 0, "ng-container", 4);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    const moduleContent_r2 = i0.ɵɵreference(3);
    i0.ɵɵstyleProp("--student-module-background", ctx_r0.module().background)("--student-module-accent", ctx_r0.module().accent || ctx_r0.module().background);
    i0.ɵɵattribute("aria-label", ctx_r0.module().label + " \u2014 coming soon");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngTemplateOutlet", moduleContent_r2);
} }
function DashboardModuleCardComponent_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 6);
    i0.ɵɵelement(1, "img", 7);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(2, "span", 8);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵproperty("src", ctx_r0.module().imagePath, i0.ɵɵsanitizeUrl)("width", ctx_r0.module().imageWidth || 384)("height", ctx_r0.module().imageHeight || 384);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r0.module().label);
} }
export class DashboardModuleCardComponent {
    module = input.required(...(ngDevMode ? [{ debugName: "module" }] : /* istanbul ignore next */ []));
    static ɵfac = function DashboardModuleCardComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || DashboardModuleCardComponent)(); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: DashboardModuleCardComponent, selectors: [["erp-dashboard-module-card"]], inputs: { module: [1, "module"] }, decls: 4, vars: 1, consts: [["moduleContent", ""], [1, "student-module-card", 3, "routerLink", "--student-module-background", "--student-module-accent"], ["role", "link", "aria-disabled", "true", 1, "student-module-card", "student-module-card--disabled", 3, "--student-module-background", "--student-module-accent"], [1, "student-module-card", 3, "routerLink"], [4, "ngTemplateOutlet"], ["role", "link", "aria-disabled", "true", 1, "student-module-card", "student-module-card--disabled"], ["aria-hidden", "true", 1, "student-module-card__image-box"], ["alt", "", "loading", "eager", "decoding", "async", 3, "src", "width", "height"], [1, "student-module-card__label"]], template: function DashboardModuleCardComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵconditionalCreate(0, DashboardModuleCardComponent_Conditional_0_Template, 2, 7, "a", 1)(1, DashboardModuleCardComponent_Conditional_1_Template, 2, 6, "div", 2);
            i0.ɵɵtemplate(2, DashboardModuleCardComponent_ng_template_2_Template, 4, 4, "ng-template", null, 0, i0.ɵɵtemplateRefExtractor);
        } if (rf & 2) {
            i0.ɵɵconditional(ctx.module().enabled ? 0 : 1);
        } }, dependencies: [NgTemplateOutlet, RouterLink], encapsulation: 2, changeDetection: 0 });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(DashboardModuleCardComponent, [{
        type: Component,
        args: [{ selector: 'erp-dashboard-module-card', imports: [NgTemplateOutlet, RouterLink], changeDetection: ChangeDetectionStrategy.OnPush, template: "@if (module().enabled) {\n  <a\n    class=\"student-module-card\"\n    [routerLink]=\"module().route\"\n    [attr.aria-label]=\"module().ariaLabel\"\n    [style.--student-module-background]=\"module().background\"\n    [style.--student-module-accent]=\"module().accent || module().background\"\n  >\n    <ng-container *ngTemplateOutlet=\"moduleContent\" />\n  </a>\n} @else {\n  <div\n    class=\"student-module-card student-module-card--disabled\"\n    role=\"link\"\n    aria-disabled=\"true\"\n    [attr.aria-label]=\"module().label + ' \u2014 coming soon'\"\n    [style.--student-module-background]=\"module().background\"\n    [style.--student-module-accent]=\"module().accent || module().background\"\n  >\n    <ng-container *ngTemplateOutlet=\"moduleContent\" />\n  </div>\n}\n\n<ng-template #moduleContent>\n  <span class=\"student-module-card__image-box\" aria-hidden=\"true\">\n    <img\n      [src]=\"module().imagePath\"\n      alt=\"\"\n      [width]=\"module().imageWidth || 384\"\n      [height]=\"module().imageHeight || 384\"\n      loading=\"eager\"\n      decoding=\"async\"\n    />\n  </span>\n  <span class=\"student-module-card__label\">{{ module().label }}</span>\n</ng-template>\n" }]
    }], null, { module: [{ type: i0.Input, args: [{ isSignal: true, alias: "module", required: true }] }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(DashboardModuleCardComponent, { className: "DashboardModuleCardComponent", filePath: "frontend/src/app/features/student/dashboard/components/dashboard-module-card/dashboard-module-card.component.ts", lineNumber: 12 }); })();
