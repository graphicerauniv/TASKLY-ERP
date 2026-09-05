import { ChangeDetectionStrategy, Component, HostListener, input, output } from '@angular/core';
import { CdkTrapFocus } from '@angular/cdk/a11y';
import { LucideX } from '@lucide/angular';
import { FormSectionNavigatorComponent } from '../form-section-navigator/form-section-navigator.component';
import * as i0 from "@angular/core";
function MobileSectionNavigatorSheetComponent_Conditional_0_Template(rf, ctx) { if (rf & 1) {
    const _r1 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 0)(1, "button", 1);
    i0.ɵɵlistener("click", function MobileSectionNavigatorSheetComponent_Conditional_0_Template_button_click_1_listener() { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.closed.emit()); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(2, "section", 2);
    i0.ɵɵelement(3, "div", 3);
    i0.ɵɵelementStart(4, "button", 4);
    i0.ɵɵlistener("click", function MobileSectionNavigatorSheetComponent_Conditional_0_Template_button_click_4_listener() { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.closed.emit()); });
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(5, "svg", 5);
    i0.ɵɵelementEnd();
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(6, "erp-form-section-navigator", 6);
    i0.ɵɵlistener("sectionSelected", function MobileSectionNavigatorSheetComponent_Conditional_0_Template_erp_form_section_navigator_sectionSelected_6_listener($event) { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.choose($event)); });
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("cdkTrapFocusAutoCapture", true);
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("items", ctx_r1.items())("completedCount", ctx_r1.completedCount())("totalCount", ctx_r1.totalCount());
} }
export class MobileSectionNavigatorSheetComponent {
    open = input(false, ...(ngDevMode ? [{ debugName: "open" }] : /* istanbul ignore next */ []));
    items = input([], ...(ngDevMode ? [{ debugName: "items" }] : /* istanbul ignore next */ []));
    completedCount = input(0, ...(ngDevMode ? [{ debugName: "completedCount" }] : /* istanbul ignore next */ []));
    totalCount = input(0, ...(ngDevMode ? [{ debugName: "totalCount" }] : /* istanbul ignore next */ []));
    closed = output();
    sectionSelected = output();
    choose(index) {
        this.sectionSelected.emit(index);
        this.closed.emit();
    }
    closeOnEscape() {
        if (this.open())
            this.closed.emit();
    }
    static ɵfac = function MobileSectionNavigatorSheetComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || MobileSectionNavigatorSheetComponent)(); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: MobileSectionNavigatorSheetComponent, selectors: [["erp-mobile-section-navigator-sheet"]], hostBindings: function MobileSectionNavigatorSheetComponent_HostBindings(rf, ctx) { if (rf & 1) {
            i0.ɵɵlistener("keydown.escape", function MobileSectionNavigatorSheetComponent_keydown_escape_HostBindingHandler() { return ctx.closeOnEscape(); }, i0.ɵɵresolveDocument);
        } }, inputs: { open: [1, "open"], items: [1, "items"], completedCount: [1, "completedCount"], totalCount: [1, "totalCount"] }, outputs: { closed: "closed", sectionSelected: "sectionSelected" }, decls: 1, vars: 1, consts: [["role", "dialog", "aria-modal", "true", "aria-label", "Application sections", 1, "erp-mobile-section-sheet"], ["type", "button", "aria-label", "Close sections", 1, "erp-mobile-section-sheet__backdrop", 3, "click"], ["cdkTrapFocus", "", 1, "erp-mobile-section-sheet__panel", 3, "cdkTrapFocusAutoCapture"], ["aria-hidden", "true", 1, "erp-mobile-section-sheet__handle"], ["type", "button", "aria-label", "Close sections", 1, "erp-mobile-section-sheet__close", 3, "click"], ["lucideX", "", "size", "18", "aria-hidden", "true"], ["panelId", "mobile-application-sections", 3, "sectionSelected", "items", "completedCount", "totalCount"]], template: function MobileSectionNavigatorSheetComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵconditionalCreate(0, MobileSectionNavigatorSheetComponent_Conditional_0_Template, 7, 4, "div", 0);
        } if (rf & 2) {
            i0.ɵɵconditional(ctx.open() ? 0 : -1);
        } }, dependencies: [CdkTrapFocus, FormSectionNavigatorComponent, LucideX], encapsulation: 2, changeDetection: 0 });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MobileSectionNavigatorSheetComponent, [{
        type: Component,
        args: [{ selector: 'erp-mobile-section-navigator-sheet', imports: [CdkTrapFocus, FormSectionNavigatorComponent, LucideX], changeDetection: ChangeDetectionStrategy.OnPush, template: "@if (open()) {\n  <div class=\"erp-mobile-section-sheet\" role=\"dialog\" aria-modal=\"true\" aria-label=\"Application sections\">\n    <button\n      class=\"erp-mobile-section-sheet__backdrop\"\n      type=\"button\"\n      aria-label=\"Close sections\"\n      (click)=\"closed.emit()\"\n    ></button>\n    <section\n      class=\"erp-mobile-section-sheet__panel\"\n      cdkTrapFocus\n      [cdkTrapFocusAutoCapture]=\"true\"\n    >\n      <div class=\"erp-mobile-section-sheet__handle\" aria-hidden=\"true\"></div>\n      <button\n        class=\"erp-mobile-section-sheet__close\"\n        type=\"button\"\n        aria-label=\"Close sections\"\n        (click)=\"closed.emit()\"\n      >\n        <svg lucideX size=\"18\" aria-hidden=\"true\"></svg>\n      </button>\n      <erp-form-section-navigator\n        panelId=\"mobile-application-sections\"\n        [items]=\"items()\"\n        [completedCount]=\"completedCount()\"\n        [totalCount]=\"totalCount()\"\n        (sectionSelected)=\"choose($event)\"\n      />\n    </section>\n  </div>\n}\n" }]
    }], null, { open: [{ type: i0.Input, args: [{ isSignal: true, alias: "open", required: false }] }], items: [{ type: i0.Input, args: [{ isSignal: true, alias: "items", required: false }] }], completedCount: [{ type: i0.Input, args: [{ isSignal: true, alias: "completedCount", required: false }] }], totalCount: [{ type: i0.Input, args: [{ isSignal: true, alias: "totalCount", required: false }] }], closed: [{ type: i0.Output, args: ["closed"] }], sectionSelected: [{ type: i0.Output, args: ["sectionSelected"] }], closeOnEscape: [{
            type: HostListener,
            args: ['document:keydown.escape']
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(MobileSectionNavigatorSheetComponent, { className: "MobileSectionNavigatorSheetComponent", filePath: "frontend/src/app/shared/ui/mobile-section-navigator-sheet/mobile-section-navigator-sheet.component.ts", lineNumber: 13 }); })();
