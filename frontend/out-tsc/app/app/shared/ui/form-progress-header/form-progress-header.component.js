import { ChangeDetectionStrategy, Component, computed, input, output } from '@angular/core';
import { LucideSearch } from '@lucide/angular';
import * as i0 from "@angular/core";
const _c0 = ["*"];
function FormProgressHeaderComponent_Conditional_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r0.eyebrow());
} }
export class FormProgressHeaderComponent {
    eyebrow = input('Workflow', ...(ngDevMode ? [{ debugName: "eyebrow" }] : /* istanbul ignore next */ []));
    title = input.required(...(ngDevMode ? [{ debugName: "title" }] : /* istanbul ignore next */ []));
    description = input('Complete each section to continue.', ...(ngDevMode ? [{ debugName: "description" }] : /* istanbul ignore next */ []));
    currentSection = input(1, ...(ngDevMode ? [{ debugName: "currentSection" }] : /* istanbul ignore next */ []));
    totalSections = input(1, ...(ngDevMode ? [{ debugName: "totalSections" }] : /* istanbul ignore next */ []));
    progress = input(0, ...(ngDevMode ? [{ debugName: "progress" }] : /* istanbul ignore next */ []));
    progressLabel = input('', ...(ngDevMode ? [{ debugName: "progressLabel" }] : /* istanbul ignore next */ []));
    saveStatus = input('Draft saved', ...(ngDevMode ? [{ debugName: "saveStatus" }] : /* istanbul ignore next */ []));
    sectionsRequested = output();
    boundedProgress = computed(() => Math.min(100, Math.max(0, this.progress())), ...(ngDevMode ? [{ debugName: "boundedProgress" }] : /* istanbul ignore next */ []));
    static ɵfac = function FormProgressHeaderComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || FormProgressHeaderComponent)(); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: FormProgressHeaderComponent, selectors: [["erp-form-progress-header"]], inputs: { eyebrow: [1, "eyebrow"], title: [1, "title"], description: [1, "description"], currentSection: [1, "currentSection"], totalSections: [1, "totalSections"], progress: [1, "progress"], progressLabel: [1, "progressLabel"], saveStatus: [1, "saveStatus"] }, outputs: { sectionsRequested: "sectionsRequested" }, ngContentSelectors: _c0, decls: 19, vars: 11, consts: [[1, "erp-form-progress-header"], [1, "erp-form-progress-header__heading"], [1, "erp-form-progress-header__tools"], [1, "erp-form-progress-header__progress"], ["type", "button", 1, "erp-form-progress-header__section-button", 3, "click"], ["lucideSearch", "", "size", "17", "aria-hidden", "true"], [1, "erp-form-progress-header__progress-label"], ["role", "progressbar", "aria-valuemin", "0", "aria-valuemax", "100", 1, "erp-form-progress-header__progress-track"]], template: function FormProgressHeaderComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵprojectionDef();
            i0.ɵɵelementStart(0, "header", 0)(1, "div", 1);
            i0.ɵɵconditionalCreate(2, FormProgressHeaderComponent_Conditional_2_Template, 2, 1, "span");
            i0.ɵɵelementStart(3, "h1");
            i0.ɵɵtext(4);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(5, "p");
            i0.ɵɵtext(6);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(7, "div", 2);
            i0.ɵɵprojection(8);
            i0.ɵɵelementStart(9, "div", 3)(10, "button", 4);
            i0.ɵɵlistener("click", function FormProgressHeaderComponent_Template_button_click_10_listener() { return ctx.sectionsRequested.emit(); });
            i0.ɵɵnamespaceSVG();
            i0.ɵɵelement(11, "svg", 5);
            i0.ɵɵtext(12);
            i0.ɵɵelementEnd();
            i0.ɵɵnamespaceHTML();
            i0.ɵɵelementStart(13, "span", 6);
            i0.ɵɵtext(14);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(15, "span", 7);
            i0.ɵɵelement(16, "span");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(17, "strong");
            i0.ɵɵtext(18);
            i0.ɵɵelementEnd()()()();
        } if (rf & 2) {
            i0.ɵɵadvance(2);
            i0.ɵɵconditional(ctx.eyebrow() ? 2 : -1);
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate(ctx.title());
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate(ctx.description());
            i0.ɵɵadvance(6);
            i0.ɵɵtextInterpolate2(" Section ", ctx.currentSection(), " of ", ctx.totalSections(), " ");
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate1(" ", ctx.progressLabel() || ctx.progress() + "% complete", " ");
            i0.ɵɵadvance();
            i0.ɵɵattribute("aria-valuenow", ctx.boundedProgress())("aria-label", ctx.progressLabel() || "Form completion");
            i0.ɵɵadvance();
            i0.ɵɵstyleProp("width", ctx.boundedProgress(), "%");
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate1("", ctx.boundedProgress(), "%");
        } }, dependencies: [LucideSearch], encapsulation: 2, changeDetection: 0 });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(FormProgressHeaderComponent, [{
        type: Component,
        args: [{ selector: 'erp-form-progress-header', imports: [LucideSearch], changeDetection: ChangeDetectionStrategy.OnPush, template: "<header class=\"erp-form-progress-header\">\n  <div class=\"erp-form-progress-header__heading\">\n    @if (eyebrow()) {\n      <span>{{ eyebrow() }}</span>\n    }\n    <h1>{{ title() }}</h1>\n    <p>{{ description() }}</p>\n  </div>\n  <div class=\"erp-form-progress-header__tools\">\n    <ng-content></ng-content>\n    <div class=\"erp-form-progress-header__progress\">\n      <button\n        class=\"erp-form-progress-header__section-button\"\n        type=\"button\"\n        (click)=\"sectionsRequested.emit()\"\n      >\n        <svg lucideSearch size=\"17\" aria-hidden=\"true\"></svg>\n        Section {{ currentSection() }} of {{ totalSections() }}\n      </button>\n      <span class=\"erp-form-progress-header__progress-label\">\n        {{ progressLabel() || (progress() + '% complete') }}\n      </span>\n      <span\n        class=\"erp-form-progress-header__progress-track\"\n        role=\"progressbar\"\n        [attr.aria-valuenow]=\"boundedProgress()\"\n        aria-valuemin=\"0\"\n        aria-valuemax=\"100\"\n        [attr.aria-label]=\"progressLabel() || 'Form completion'\"\n      >\n        <span [style.width.%]=\"boundedProgress()\"></span>\n      </span>\n      <strong>{{ boundedProgress() }}%</strong>\n    </div>\n  </div>\n</header>\n" }]
    }], null, { eyebrow: [{ type: i0.Input, args: [{ isSignal: true, alias: "eyebrow", required: false }] }], title: [{ type: i0.Input, args: [{ isSignal: true, alias: "title", required: true }] }], description: [{ type: i0.Input, args: [{ isSignal: true, alias: "description", required: false }] }], currentSection: [{ type: i0.Input, args: [{ isSignal: true, alias: "currentSection", required: false }] }], totalSections: [{ type: i0.Input, args: [{ isSignal: true, alias: "totalSections", required: false }] }], progress: [{ type: i0.Input, args: [{ isSignal: true, alias: "progress", required: false }] }], progressLabel: [{ type: i0.Input, args: [{ isSignal: true, alias: "progressLabel", required: false }] }], saveStatus: [{ type: i0.Input, args: [{ isSignal: true, alias: "saveStatus", required: false }] }], sectionsRequested: [{ type: i0.Output, args: ["sectionsRequested"] }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(FormProgressHeaderComponent, { className: "FormProgressHeaderComponent", filePath: "frontend/src/app/shared/ui/form-progress-header/form-progress-header.component.ts", lineNumber: 10 }); })();
