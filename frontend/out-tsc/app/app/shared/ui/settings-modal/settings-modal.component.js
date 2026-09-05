import { ChangeDetectionStrategy, Component, HostListener, input, output } from '@angular/core';
import { CdkTrapFocus } from '@angular/cdk/a11y';
import { LucideSlidersHorizontal, LucideX } from '@lucide/angular';
import * as i0 from "@angular/core";
const _c0 = ["*"];
function SettingsModalComponent_Conditional_0_Template(rf, ctx) { if (rf & 1) {
    const _r1 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 0)(1, "button", 1);
    i0.ɵɵlistener("click", function SettingsModalComponent_Conditional_0_Template_button_click_1_listener() { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.closed.emit()); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(2, "section", 2)(3, "header", 3)(4, "span", 4);
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(5, "svg", 5);
    i0.ɵɵelementEnd();
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(6, "div")(7, "small");
    i0.ɵɵtext(8);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(9, "h2", 6);
    i0.ɵɵtext(10);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(11, "button", 7);
    i0.ɵɵlistener("click", function SettingsModalComponent_Conditional_0_Template_button_click_11_listener() { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.closed.emit()); });
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(12, "svg", 8);
    i0.ɵɵelementEnd()();
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(13, "div", 9);
    i0.ɵɵprojection(14);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("cdkTrapFocusAutoCapture", true);
    i0.ɵɵadvance(6);
    i0.ɵɵtextInterpolate(ctx_r1.eyebrow());
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r1.title());
} }
export class SettingsModalComponent {
    title = input('Settings', ...(ngDevMode ? [{ debugName: "title" }] : /* istanbul ignore next */ []));
    eyebrow = input('Configuration', ...(ngDevMode ? [{ debugName: "eyebrow" }] : /* istanbul ignore next */ []));
    open = input(true, ...(ngDevMode ? [{ debugName: "open" }] : /* istanbul ignore next */ []));
    closed = output();
    closeOnEscape() {
        if (this.open())
            this.closed.emit();
    }
    static ɵfac = function SettingsModalComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || SettingsModalComponent)(); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: SettingsModalComponent, selectors: [["erp-settings-modal"]], hostBindings: function SettingsModalComponent_HostBindings(rf, ctx) { if (rf & 1) {
            i0.ɵɵlistener("keydown.escape", function SettingsModalComponent_keydown_escape_HostBindingHandler() { return ctx.closeOnEscape(); }, i0.ɵɵresolveDocument);
        } }, inputs: { title: [1, "title"], eyebrow: [1, "eyebrow"], open: [1, "open"] }, outputs: { closed: "closed" }, ngContentSelectors: _c0, decls: 1, vars: 1, consts: [[1, "settings-layer"], ["type", "button", "aria-label", "Close settings", 1, "settings-backdrop", 3, "click"], ["role", "dialog", "aria-modal", "true", "aria-labelledby", "settings-modal-title", "cdkTrapFocus", "", 1, "settings-modal", 3, "cdkTrapFocusAutoCapture"], [1, "settings-modal__header"], [1, "settings-modal__icon"], ["lucideSlidersHorizontal", "", "size", "20", "aria-hidden", "true"], ["id", "settings-modal-title"], ["type", "button", "aria-label", "Close settings", 3, "click"], ["lucideX", "", "size", "19", "aria-hidden", "true"], [1, "settings-modal__body"]], template: function SettingsModalComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵprojectionDef();
            i0.ɵɵconditionalCreate(0, SettingsModalComponent_Conditional_0_Template, 15, 3, "div", 0);
        } if (rf & 2) {
            i0.ɵɵconditional(ctx.open() ? 0 : -1);
        } }, dependencies: [CdkTrapFocus, LucideSlidersHorizontal, LucideX], encapsulation: 2, changeDetection: 0 });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(SettingsModalComponent, [{
        type: Component,
        args: [{
                selector: 'erp-settings-modal',
                imports: [CdkTrapFocus, LucideSlidersHorizontal, LucideX],
                template: `
    @if (open()) {
      <div class="settings-layer">
        <button
          class="settings-backdrop"
          type="button"
          aria-label="Close settings"
          (click)="closed.emit()"
        ></button>
        <section
          class="settings-modal"
          role="dialog"
          aria-modal="true"
          aria-labelledby="settings-modal-title"
          cdkTrapFocus
          [cdkTrapFocusAutoCapture]="true"
        >
          <header class="settings-modal__header">
            <span class="settings-modal__icon">
              <svg lucideSlidersHorizontal size="20" aria-hidden="true"></svg>
            </span>
            <div>
              <small>{{ eyebrow() }}</small>
              <h2 id="settings-modal-title">{{ title() }}</h2>
            </div>
            <button type="button" aria-label="Close settings" (click)="closed.emit()">
              <svg lucideX size="19" aria-hidden="true"></svg>
            </button>
          </header>
          <div class="settings-modal__body"><ng-content /></div>
        </section>
      </div>
    }
  `,
                changeDetection: ChangeDetectionStrategy.OnPush,
            }]
    }], null, { title: [{ type: i0.Input, args: [{ isSignal: true, alias: "title", required: false }] }], eyebrow: [{ type: i0.Input, args: [{ isSignal: true, alias: "eyebrow", required: false }] }], open: [{ type: i0.Input, args: [{ isSignal: true, alias: "open", required: false }] }], closed: [{ type: i0.Output, args: ["closed"] }], closeOnEscape: [{
            type: HostListener,
            args: ['document:keydown.escape']
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(SettingsModalComponent, { className: "SettingsModalComponent", filePath: "frontend/src/app/shared/ui/settings-modal/settings-modal.component.ts", lineNumber: 44 }); })();
