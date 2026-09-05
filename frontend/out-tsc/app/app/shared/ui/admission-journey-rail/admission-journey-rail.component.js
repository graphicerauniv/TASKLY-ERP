import { ChangeDetectionStrategy, Component, input, output, } from '@angular/core';
import { LucideAlertTriangle, LucideCheck, LucideListTree, } from '@lucide/angular';
import * as i0 from "@angular/core";
const _forTrack0 = ($index, $item) => $item.id;
function AdmissionJourneyRailComponent_For_9_Conditional_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(0, "svg", 14);
} }
function AdmissionJourneyRailComponent_For_9_Conditional_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(0, "svg", 15);
} }
function AdmissionJourneyRailComponent_For_9_Conditional_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtext(0);
} if (rf & 2) {
    const item_r2 = i0.ɵɵnextContext().$implicit;
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵtextInterpolate1(" ", ctx_r2.sectionNumber(item_r2.index), " ");
} }
function AdmissionJourneyRailComponent_For_9_Template(rf, ctx) { if (rf & 1) {
    const _r1 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 12);
    i0.ɵɵlistener("click", function AdmissionJourneyRailComponent_For_9_Template_button_click_0_listener() { const item_r2 = i0.ɵɵrestoreView(_r1).$implicit; const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.sectionSelected.emit(item_r2.index)); });
    i0.ɵɵelementStart(1, "span", 13);
    i0.ɵɵconditionalCreate(2, AdmissionJourneyRailComponent_For_9_Conditional_2_Template, 1, 0, ":svg:svg", 14)(3, AdmissionJourneyRailComponent_For_9_Conditional_3_Template, 1, 0, ":svg:svg", 15)(4, AdmissionJourneyRailComponent_For_9_Conditional_4_Template, 1, 1);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "span", 16)(6, "strong");
    i0.ɵɵtext(7);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "small");
    i0.ɵɵtext(9);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const item_r2 = ctx.$implicit;
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵclassProp("erp-journey-step--complete", item_r2.state === "complete")("erp-journey-step--current", item_r2.state === "current")("erp-journey-step--attention", item_r2.state === "attention");
    i0.ɵɵattribute("aria-current", item_r2.state === "current" ? "step" : null);
    i0.ɵɵadvance(2);
    i0.ɵɵconditional(item_r2.state === "complete" ? 2 : item_r2.state === "attention" ? 3 : 4);
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(item_r2.title);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(item_r2.state === "current" && ctx_r2.currentProgress() ? ctx_r2.currentProgress() : item_r2.status);
} }
function AdmissionJourneyRailComponent_ForEmpty_10_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 5);
    i0.ɵɵtext(1, "No form sections configured.");
    i0.ɵɵelementEnd();
} }
export class AdmissionJourneyRailComponent {
    items = input([], ...(ngDevMode ? [{ debugName: "items" }] : /* istanbul ignore next */ []));
    currentIndex = input(0, ...(ngDevMode ? [{ debugName: "currentIndex" }] : /* istanbul ignore next */ []));
    progress = input(0, ...(ngDevMode ? [{ debugName: "progress" }] : /* istanbul ignore next */ []));
    currentProgress = input('', ...(ngDevMode ? [{ debugName: "currentProgress" }] : /* istanbul ignore next */ []));
    sectionSelected = output();
    allSectionsRequested = output();
    sectionNumber(index) {
        return String(index + 1).padStart(2, '0');
    }
    static ɵfac = function AdmissionJourneyRailComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || AdmissionJourneyRailComponent)(); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: AdmissionJourneyRailComponent, selectors: [["erp-admission-journey-rail"]], inputs: { items: [1, "items"], currentIndex: [1, "currentIndex"], progress: [1, "progress"], currentProgress: [1, "currentProgress"] }, outputs: { sectionSelected: "sectionSelected", allSectionsRequested: "allSectionsRequested" }, decls: 32, vars: 13, consts: [["aria-label", "Guided application path", 1, "erp-journey"], [1, "erp-journey__desktop"], [1, "erp-journey__header"], [1, "erp-journey__list"], ["type", "button", 1, "erp-journey-step", 3, "erp-journey-step--complete", "erp-journey-step--current", "erp-journey-step--attention"], [1, "erp-journey__empty"], [1, "erp-journey__summary"], ["aria-hidden", "true", 1, "erp-journey__summary-track"], [1, "erp-journey__mobile"], ["role", "progressbar", 1, "erp-journey__mobile-progress"], ["type", "button", 1, "erp-button", "erp-button--secondary", 3, "click"], ["lucideListTree", "", "size", "17", "aria-hidden", "true"], ["type", "button", 1, "erp-journey-step", 3, "click"], [1, "erp-journey-step__node"], ["lucideCheck", "", "size", "15", "aria-hidden", "true"], ["lucideAlertTriangle", "", "size", "14", "aria-hidden", "true"], [1, "erp-journey-step__body"]], template: function AdmissionJourneyRailComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "section", 0)(1, "div", 1)(2, "header", 2)(3, "strong");
            i0.ɵɵtext(4, "FORM SECTIONS");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(5, "span");
            i0.ɵɵtext(6);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(7, "div", 3);
            i0.ɵɵrepeaterCreate(8, AdmissionJourneyRailComponent_For_9_Template, 10, 10, "button", 4, _forTrack0, false, AdmissionJourneyRailComponent_ForEmpty_10_Template, 2, 0, "p", 5);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(11, "div", 6)(12, "div")(13, "strong");
            i0.ɵɵtext(14, "Overall progress");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(15, "b");
            i0.ɵɵtext(16);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(17, "span", 7);
            i0.ɵɵelement(18, "span");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(19, "small");
            i0.ɵɵtext(20);
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(21, "div", 8)(22, "div")(23, "strong");
            i0.ɵɵtext(24);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(25, "span");
            i0.ɵɵtext(26);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(27, "div", 9);
            i0.ɵɵelement(28, "span");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(29, "button", 10);
            i0.ɵɵlistener("click", function AdmissionJourneyRailComponent_Template_button_click_29_listener() { return ctx.allSectionsRequested.emit(); });
            i0.ɵɵnamespaceSVG();
            i0.ɵɵelement(30, "svg", 11);
            i0.ɵɵtext(31, " All sections ");
            i0.ɵɵelementEnd()()();
        } if (rf & 2) {
            i0.ɵɵadvance(6);
            i0.ɵɵtextInterpolate2("", ctx.items().length, " section", ctx.items().length === 1 ? "" : "s");
            i0.ɵɵadvance(2);
            i0.ɵɵrepeater(ctx.items());
            i0.ɵɵadvance(8);
            i0.ɵɵtextInterpolate1("", ctx.progress(), "%");
            i0.ɵɵadvance(2);
            i0.ɵɵstyleProp("width", ctx.progress(), "%");
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate(ctx.currentProgress() || "Complete the required fields to continue.");
            i0.ɵɵadvance(4);
            i0.ɵɵtextInterpolate2("Section ", ctx.currentIndex() + 1, " of ", ctx.items().length);
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate1("", ctx.progress(), "% complete");
            i0.ɵɵadvance();
            i0.ɵɵattribute("aria-valuenow", ctx.progress());
            i0.ɵɵadvance();
            i0.ɵɵstyleProp("width", ctx.progress(), "%");
        } }, dependencies: [LucideAlertTriangle,
            LucideCheck,
            LucideListTree], encapsulation: 2, changeDetection: 0 });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AdmissionJourneyRailComponent, [{
        type: Component,
        args: [{ selector: 'erp-admission-journey-rail', imports: [
                    LucideAlertTriangle,
                    LucideCheck,
                    LucideListTree,
                ], changeDetection: ChangeDetectionStrategy.OnPush, template: "<section class=\"erp-journey\" aria-label=\"Guided application path\">\n  <div class=\"erp-journey__desktop\">\n    <header class=\"erp-journey__header\">\n      <strong>FORM SECTIONS</strong>\n      <span>{{ items().length }} section{{ items().length === 1 ? '' : 's' }}</span>\n    </header>\n    <div class=\"erp-journey__list\">\n      @for (item of items(); track item.id) {\n        <button\n          class=\"erp-journey-step\"\n          type=\"button\"\n          [class.erp-journey-step--complete]=\"item.state === 'complete'\"\n          [class.erp-journey-step--current]=\"item.state === 'current'\"\n          [class.erp-journey-step--attention]=\"item.state === 'attention'\"\n          [attr.aria-current]=\"item.state === 'current' ? 'step' : null\"\n          (click)=\"sectionSelected.emit(item.index)\"\n        >\n          <span class=\"erp-journey-step__node\">\n            @if (item.state === 'complete') {\n              <svg lucideCheck size=\"15\" aria-hidden=\"true\"></svg>\n            } @else if (item.state === 'attention') {\n              <svg lucideAlertTriangle size=\"14\" aria-hidden=\"true\"></svg>\n            } @else {\n              {{ sectionNumber(item.index) }}\n            }\n          </span>\n          <span class=\"erp-journey-step__body\">\n            <strong>{{ item.title }}</strong>\n            <small>{{ item.state === 'current' && currentProgress() ? currentProgress() : item.status }}</small>\n          </span>\n        </button>\n      } @empty {\n        <p class=\"erp-journey__empty\">No form sections configured.</p>\n      }\n    </div>\n    <div class=\"erp-journey__summary\">\n      <div>\n        <strong>Overall progress</strong>\n        <b>{{ progress() }}%</b>\n      </div>\n      <span class=\"erp-journey__summary-track\" aria-hidden=\"true\">\n        <span [style.width.%]=\"progress()\"></span>\n      </span>\n      <small>{{ currentProgress() || 'Complete the required fields to continue.' }}</small>\n    </div>\n  </div>\n\n  <div class=\"erp-journey__mobile\">\n    <div>\n      <strong>Section {{ currentIndex() + 1 }} of {{ items().length }}</strong>\n      <span>{{ progress() }}% complete</span>\n    </div>\n    <div class=\"erp-journey__mobile-progress\" role=\"progressbar\" [attr.aria-valuenow]=\"progress()\">\n      <span [style.width.%]=\"progress()\"></span>\n    </div>\n    <button\n      class=\"erp-button erp-button--secondary\"\n      type=\"button\"\n      (click)=\"allSectionsRequested.emit()\"\n    >\n      <svg lucideListTree size=\"17\" aria-hidden=\"true\"></svg>\n      All sections\n    </button>\n  </div>\n\n</section>\n" }]
    }], null, { items: [{ type: i0.Input, args: [{ isSignal: true, alias: "items", required: false }] }], currentIndex: [{ type: i0.Input, args: [{ isSignal: true, alias: "currentIndex", required: false }] }], progress: [{ type: i0.Input, args: [{ isSignal: true, alias: "progress", required: false }] }], currentProgress: [{ type: i0.Input, args: [{ isSignal: true, alias: "currentProgress", required: false }] }], sectionSelected: [{ type: i0.Output, args: ["sectionSelected"] }], allSectionsRequested: [{ type: i0.Output, args: ["allSectionsRequested"] }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(AdmissionJourneyRailComponent, { className: "AdmissionJourneyRailComponent", filePath: "frontend/src/app/shared/ui/admission-journey-rail/admission-journey-rail.component.ts", lineNumber: 24 }); })();
