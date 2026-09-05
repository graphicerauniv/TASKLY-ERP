import { ChangeDetectionStrategy, Component, input, output } from '@angular/core';
import { LucideArrowLeft, LucideArrowRight, LucideSave } from '@lucide/angular';
import * as i0 from "@angular/core";
function FormActionBarComponent_Conditional_2_Template(rf, ctx) { if (rf & 1) {
    const _r1 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 8);
    i0.ɵɵlistener("click", function FormActionBarComponent_Conditional_2_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.back.emit()); });
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(1, "svg", 9);
    i0.ɵɵtext(2, " Previous section ");
    i0.ɵɵelementEnd();
} }
function FormActionBarComponent_Conditional_6_Template(rf, ctx) { if (rf & 1) {
    const _r3 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 10);
    i0.ɵɵlistener("click", function FormActionBarComponent_Conditional_6_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r3); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.saveDraft.emit()); });
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(1, "svg", 11);
    i0.ɵɵtext(2, " Save draft ");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵproperty("disabled", ctx_r1.saving());
} }
export class FormActionBarComponent {
    saveStatus = input('Draft saved', ...(ngDevMode ? [{ debugName: "saveStatus" }] : /* istanbul ignore next */ []));
    showBack = input(false, ...(ngDevMode ? [{ debugName: "showBack" }] : /* istanbul ignore next */ []));
    showSaveDraft = input(true, ...(ngDevMode ? [{ debugName: "showSaveDraft" }] : /* istanbul ignore next */ []));
    saving = input(false, ...(ngDevMode ? [{ debugName: "saving" }] : /* istanbul ignore next */ []));
    primaryLabel = input('Save & Continue', ...(ngDevMode ? [{ debugName: "primaryLabel" }] : /* istanbul ignore next */ []));
    primaryDisabled = input(false, ...(ngDevMode ? [{ debugName: "primaryDisabled" }] : /* istanbul ignore next */ []));
    back = output();
    saveDraft = output();
    primary = output();
    static ɵfac = function FormActionBarComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || FormActionBarComponent)(); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: FormActionBarComponent, selectors: [["erp-form-action-bar"]], inputs: { saveStatus: [1, "saveStatus"], showBack: [1, "showBack"], showSaveDraft: [1, "showSaveDraft"], saving: [1, "saving"], primaryLabel: [1, "primaryLabel"], primaryDisabled: [1, "primaryDisabled"] }, outputs: { back: "back", saveDraft: "saveDraft", primary: "primary" }, decls: 10, vars: 5, consts: [[1, "erp-form-action-bar"], [1, "erp-form-action-bar__previous"], ["type", "button", 1, "erp-button", "erp-button--secondary"], ["aria-live", "polite", 1, "erp-form-action-bar__status"], [1, "erp-form-action-bar__actions"], ["type", "button", 1, "erp-button", "erp-button--secondary", 3, "disabled"], ["type", "button", 1, "erp-button", "erp-button--primary", 3, "click", "disabled"], ["lucideArrowRight", "", "size", "16", "aria-hidden", "true"], ["type", "button", 1, "erp-button", "erp-button--secondary", 3, "click"], ["lucideArrowLeft", "", "size", "16", "aria-hidden", "true"], ["type", "button", 1, "erp-button", "erp-button--secondary", 3, "click", "disabled"], ["lucideSave", "", "size", "16", "aria-hidden", "true"]], template: function FormActionBarComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "footer", 0)(1, "div", 1);
            i0.ɵɵconditionalCreate(2, FormActionBarComponent_Conditional_2_Template, 3, 0, "button", 2);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(3, "span", 3);
            i0.ɵɵtext(4);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(5, "div", 4);
            i0.ɵɵconditionalCreate(6, FormActionBarComponent_Conditional_6_Template, 3, 1, "button", 5);
            i0.ɵɵelementStart(7, "button", 6);
            i0.ɵɵlistener("click", function FormActionBarComponent_Template_button_click_7_listener() { return ctx.primary.emit(); });
            i0.ɵɵtext(8);
            i0.ɵɵnamespaceSVG();
            i0.ɵɵelement(9, "svg", 7);
            i0.ɵɵelementEnd()()();
        } if (rf & 2) {
            i0.ɵɵadvance(2);
            i0.ɵɵconditional(ctx.showBack() ? 2 : -1);
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate(ctx.saveStatus());
            i0.ɵɵadvance(2);
            i0.ɵɵconditional(ctx.showSaveDraft() ? 6 : -1);
            i0.ɵɵadvance();
            i0.ɵɵproperty("disabled", ctx.saving() || ctx.primaryDisabled());
            i0.ɵɵadvance();
            i0.ɵɵtextInterpolate1(" ", ctx.primaryLabel(), " ");
        } }, dependencies: [LucideArrowLeft, LucideArrowRight, LucideSave], encapsulation: 2, changeDetection: 0 });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(FormActionBarComponent, [{
        type: Component,
        args: [{ selector: 'erp-form-action-bar', imports: [LucideArrowLeft, LucideArrowRight, LucideSave], changeDetection: ChangeDetectionStrategy.OnPush, template: "<footer class=\"erp-form-action-bar\">\n  <div class=\"erp-form-action-bar__previous\">\n    @if (showBack()) {\n      <button class=\"erp-button erp-button--secondary\" type=\"button\" (click)=\"back.emit()\">\n        <svg lucideArrowLeft size=\"16\" aria-hidden=\"true\"></svg>\n        Previous section\n      </button>\n    }\n  </div>\n  <span class=\"erp-form-action-bar__status\" aria-live=\"polite\">{{ saveStatus() }}</span>\n  <div class=\"erp-form-action-bar__actions\">\n    @if (showSaveDraft()) {\n      <button\n        class=\"erp-button erp-button--secondary\"\n        type=\"button\"\n        [disabled]=\"saving()\"\n        (click)=\"saveDraft.emit()\"\n      >\n        <svg lucideSave size=\"16\" aria-hidden=\"true\"></svg>\n        Save draft\n      </button>\n    }\n    <button\n      class=\"erp-button erp-button--primary\"\n      type=\"button\"\n      [disabled]=\"saving() || primaryDisabled()\"\n      (click)=\"primary.emit()\"\n    >\n      {{ primaryLabel() }}\n      <svg lucideArrowRight size=\"16\" aria-hidden=\"true\"></svg>\n    </button>\n  </div>\n</footer>\n" }]
    }], null, { saveStatus: [{ type: i0.Input, args: [{ isSignal: true, alias: "saveStatus", required: false }] }], showBack: [{ type: i0.Input, args: [{ isSignal: true, alias: "showBack", required: false }] }], showSaveDraft: [{ type: i0.Input, args: [{ isSignal: true, alias: "showSaveDraft", required: false }] }], saving: [{ type: i0.Input, args: [{ isSignal: true, alias: "saving", required: false }] }], primaryLabel: [{ type: i0.Input, args: [{ isSignal: true, alias: "primaryLabel", required: false }] }], primaryDisabled: [{ type: i0.Input, args: [{ isSignal: true, alias: "primaryDisabled", required: false }] }], back: [{ type: i0.Output, args: ["back"] }], saveDraft: [{ type: i0.Output, args: ["saveDraft"] }], primary: [{ type: i0.Output, args: ["primary"] }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(FormActionBarComponent, { className: "FormActionBarComponent", filePath: "frontend/src/app/shared/ui/form-action-bar/form-action-bar.component.ts", lineNumber: 10 }); })();
