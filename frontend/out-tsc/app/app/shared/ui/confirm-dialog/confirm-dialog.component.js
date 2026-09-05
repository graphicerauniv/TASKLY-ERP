import { CdkTrapFocus } from '@angular/cdk/a11y';
import { ChangeDetectionStrategy, Component, HostListener, input, output } from '@angular/core';
import * as i0 from "@angular/core";
function ConfirmDialogComponent_Conditional_0_Template(rf, ctx) { if (rf & 1) {
    const _r1 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 0)(1, "button", 1);
    i0.ɵɵlistener("click", function ConfirmDialogComponent_Conditional_0_Template_button_click_1_listener() { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.cancelled.emit()); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(2, "section", 2)(3, "header", 3)(4, "div")(5, "small");
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "h2", 4);
    i0.ɵɵtext(8);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(9, "button", 5);
    i0.ɵɵlistener("click", function ConfirmDialogComponent_Conditional_0_Template_button_click_9_listener() { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.cancelled.emit()); });
    i0.ɵɵtext(10, "x");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(11, "div", 6)(12, "p", 7);
    i0.ɵɵtext(13);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(14, "footer", 8)(15, "button", 9);
    i0.ɵɵlistener("click", function ConfirmDialogComponent_Conditional_0_Template_button_click_15_listener() { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.cancelled.emit()); });
    i0.ɵɵtext(16);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(17, "button", 10);
    i0.ɵɵlistener("click", function ConfirmDialogComponent_Conditional_0_Template_button_click_17_listener() { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.confirmed.emit()); });
    i0.ɵɵtext(18);
    i0.ɵɵelementEnd()()()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵattribute("aria-label", ctx_r1.cancelLabel());
    i0.ɵɵadvance();
    i0.ɵɵproperty("cdkTrapFocusAutoCapture", true);
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(ctx_r1.eyebrow());
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r1.title());
    i0.ɵɵadvance();
    i0.ɵɵattribute("aria-label", ctx_r1.cancelLabel());
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(ctx_r1.message());
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1(" ", ctx_r1.cancelLabel(), " ");
    i0.ɵɵadvance();
    i0.ɵɵclassProp("erp-button--danger", ctx_r1.destructive())("erp-button--primary", !ctx_r1.destructive());
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r1.confirmLabel(), " ");
} }
export class ConfirmDialogComponent {
    open = input(false, ...(ngDevMode ? [{ debugName: "open" }] : /* istanbul ignore next */ []));
    eyebrow = input('Confirmation', ...(ngDevMode ? [{ debugName: "eyebrow" }] : /* istanbul ignore next */ []));
    title = input('Are you sure?', ...(ngDevMode ? [{ debugName: "title" }] : /* istanbul ignore next */ []));
    message = input('Please confirm this action.', ...(ngDevMode ? [{ debugName: "message" }] : /* istanbul ignore next */ []));
    confirmLabel = input('Confirm', ...(ngDevMode ? [{ debugName: "confirmLabel" }] : /* istanbul ignore next */ []));
    cancelLabel = input('Cancel', ...(ngDevMode ? [{ debugName: "cancelLabel" }] : /* istanbul ignore next */ []));
    destructive = input(false, ...(ngDevMode ? [{ debugName: "destructive" }] : /* istanbul ignore next */ []));
    confirmed = output();
    cancelled = output();
    closeOnEscape() {
        if (this.open())
            this.cancelled.emit();
    }
    static ɵfac = function ConfirmDialogComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || ConfirmDialogComponent)(); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ConfirmDialogComponent, selectors: [["erp-confirm-dialog"]], hostBindings: function ConfirmDialogComponent_HostBindings(rf, ctx) { if (rf & 1) {
            i0.ɵɵlistener("keydown.escape", function ConfirmDialogComponent_keydown_escape_HostBindingHandler() { return ctx.closeOnEscape(); }, i0.ɵɵresolveDocument);
        } }, inputs: { open: [1, "open"], eyebrow: [1, "eyebrow"], title: [1, "title"], message: [1, "message"], confirmLabel: [1, "confirmLabel"], cancelLabel: [1, "cancelLabel"], destructive: [1, "destructive"] }, outputs: { confirmed: "confirmed", cancelled: "cancelled" }, decls: 1, vars: 1, consts: [[1, "dialog-layer"], ["type", "button", 1, "dialog-backdrop", 3, "click"], ["role", "alertdialog", "aria-modal", "true", "aria-labelledby", "erp-confirm-title", "aria-describedby", "erp-confirm-message", "cdkTrapFocus", "", 1, "dialog", "erp-confirm-dialog", 3, "cdkTrapFocusAutoCapture"], [1, "dialog__header"], ["id", "erp-confirm-title"], ["type", "button", 3, "click"], [1, "dialog__body", "erp-confirm-dialog__body"], ["id", "erp-confirm-message"], [1, "dialog__footer"], ["type", "button", 1, "erp-button", "erp-button--secondary", 3, "click"], ["type", "button", 1, "erp-button", 3, "click"]], template: function ConfirmDialogComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵconditionalCreate(0, ConfirmDialogComponent_Conditional_0_Template, 19, 12, "div", 0);
        } if (rf & 2) {
            i0.ɵɵconditional(ctx.open() ? 0 : -1);
        } }, dependencies: [CdkTrapFocus], encapsulation: 2, changeDetection: 0 });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ConfirmDialogComponent, [{
        type: Component,
        args: [{
                selector: 'erp-confirm-dialog',
                imports: [CdkTrapFocus],
                template: `
    @if (open()) {
      <div class="dialog-layer">
        <button
          class="dialog-backdrop"
          type="button"
          [attr.aria-label]="cancelLabel()"
          (click)="cancelled.emit()"
        ></button>
        <section
          class="dialog erp-confirm-dialog"
          role="alertdialog"
          aria-modal="true"
          aria-labelledby="erp-confirm-title"
          aria-describedby="erp-confirm-message"
          cdkTrapFocus
          [cdkTrapFocusAutoCapture]="true"
        >
          <header class="dialog__header">
            <div>
              <small>{{ eyebrow() }}</small>
              <h2 id="erp-confirm-title">{{ title() }}</h2>
            </div>
            <button type="button" [attr.aria-label]="cancelLabel()" (click)="cancelled.emit()">x</button>
          </header>
          <div class="dialog__body erp-confirm-dialog__body">
            <p id="erp-confirm-message">{{ message() }}</p>
          </div>
          <footer class="dialog__footer">
            <button class="erp-button erp-button--secondary" type="button" (click)="cancelled.emit()">
              {{ cancelLabel() }}
            </button>
            <button
              class="erp-button"
              [class.erp-button--danger]="destructive()"
              [class.erp-button--primary]="!destructive()"
              type="button"
              (click)="confirmed.emit()"
            >
              {{ confirmLabel() }}
            </button>
          </footer>
        </section>
      </div>
    }
  `,
                changeDetection: ChangeDetectionStrategy.OnPush,
            }]
    }], null, { open: [{ type: i0.Input, args: [{ isSignal: true, alias: "open", required: false }] }], eyebrow: [{ type: i0.Input, args: [{ isSignal: true, alias: "eyebrow", required: false }] }], title: [{ type: i0.Input, args: [{ isSignal: true, alias: "title", required: false }] }], message: [{ type: i0.Input, args: [{ isSignal: true, alias: "message", required: false }] }], confirmLabel: [{ type: i0.Input, args: [{ isSignal: true, alias: "confirmLabel", required: false }] }], cancelLabel: [{ type: i0.Input, args: [{ isSignal: true, alias: "cancelLabel", required: false }] }], destructive: [{ type: i0.Input, args: [{ isSignal: true, alias: "destructive", required: false }] }], confirmed: [{ type: i0.Output, args: ["confirmed"] }], cancelled: [{ type: i0.Output, args: ["cancelled"] }], closeOnEscape: [{
            type: HostListener,
            args: ['document:keydown.escape']
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(ConfirmDialogComponent, { className: "ConfirmDialogComponent", filePath: "frontend/src/app/shared/ui/confirm-dialog/confirm-dialog.component.ts", lineNumber: 55 }); })();
