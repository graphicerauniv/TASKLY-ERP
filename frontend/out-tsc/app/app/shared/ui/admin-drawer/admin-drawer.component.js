import { CdkTrapFocus } from '@angular/cdk/a11y';
import { Overlay } from '@angular/cdk/overlay';
import { ChangeDetectionStrategy, Component, effect, inject, input, output } from '@angular/core';
import { LucideX } from '@lucide/angular';
import { AdminIllustrationComponent } from '../admin-illustration/admin-illustration.component';
import * as i0 from "@angular/core";
const _c0 = ["*", [["", "drawer-actions", ""]]];
const _c1 = ["*", "[drawer-actions]"];
function AdminDrawerComponent_Conditional_0_Conditional_11_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r1.description());
} }
function AdminDrawerComponent_Conditional_0_Template(rf, ctx) { if (rf & 1) {
    const _r1 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 0)(1, "button", 1);
    i0.ɵɵlistener("click", function AdminDrawerComponent_Conditional_0_Template_button_click_1_listener() { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.close()); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(2, "aside", 2);
    i0.ɵɵlistener("keydown.escape", function AdminDrawerComponent_Conditional_0_Template_aside_keydown_escape_2_listener($event) { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(); $event.stopPropagation(); return i0.ɵɵresetView(ctx_r1.close()); });
    i0.ɵɵelementStart(3, "header", 3)(4, "div", 4);
    i0.ɵɵelement(5, "erp-admin-illustration", 5);
    i0.ɵɵelementStart(6, "div")(7, "small");
    i0.ɵɵtext(8);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(9, "h2");
    i0.ɵɵtext(10);
    i0.ɵɵelementEnd();
    i0.ɵɵconditionalCreate(11, AdminDrawerComponent_Conditional_0_Conditional_11_Template, 2, 1, "p");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(12, "button", 6);
    i0.ɵɵlistener("click", function AdminDrawerComponent_Conditional_0_Template_button_click_12_listener() { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.close()); });
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(13, "svg", 7);
    i0.ɵɵelementEnd()();
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(14, "div", 8);
    i0.ɵɵprojection(15);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(16, "footer", 9)(17, "button", 10);
    i0.ɵɵlistener("click", function AdminDrawerComponent_Conditional_0_Template_button_click_17_listener() { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.close()); });
    i0.ɵɵtext(18, " Close ");
    i0.ɵɵelementEnd();
    i0.ɵɵprojection(19, 1);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵproperty("disabled", ctx_r1.busy());
    i0.ɵɵattribute("aria-label", "Close " + ctx_r1.title());
    i0.ɵɵadvance();
    i0.ɵɵproperty("cdkTrapFocusAutoCapture", true);
    i0.ɵɵattribute("aria-label", ctx_r1.title());
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("kind", ctx_r1.illustration());
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(ctx_r1.eyebrow());
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r1.title());
    i0.ɵɵadvance();
    i0.ɵɵconditional(ctx_r1.description() ? 11 : -1);
    i0.ɵɵadvance();
    i0.ɵɵproperty("disabled", ctx_r1.busy());
    i0.ɵɵadvance(5);
    i0.ɵɵproperty("disabled", ctx_r1.busy());
} }
/** Shared record and editing surface, styled from the Academics workspace tokens. */
export class AdminDrawerComponent {
    open = input(false, ...(ngDevMode ? [{ debugName: "open" }] : /* istanbul ignore next */ []));
    title = input.required(...(ngDevMode ? [{ debugName: "title" }] : /* istanbul ignore next */ []));
    eyebrow = input('Record workspace', ...(ngDevMode ? [{ debugName: "eyebrow" }] : /* istanbul ignore next */ []));
    description = input('', ...(ngDevMode ? [{ debugName: "description" }] : /* istanbul ignore next */ []));
    illustration = input('applicationForm', ...(ngDevMode ? [{ debugName: "illustration" }] : /* istanbul ignore next */ []));
    busy = input(false, ...(ngDevMode ? [{ debugName: "busy" }] : /* istanbul ignore next */ []));
    closed = output();
    scroll = inject(Overlay).scrollStrategies.block();
    constructor() {
        effect((onCleanup) => {
            if (this.open())
                this.scroll.enable();
            onCleanup(() => this.scroll.disable());
        });
    }
    close() {
        if (!this.busy())
            this.closed.emit();
    }
    static ɵfac = function AdminDrawerComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || AdminDrawerComponent)(); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: AdminDrawerComponent, selectors: [["erp-admin-drawer"]], inputs: { open: [1, "open"], title: [1, "title"], eyebrow: [1, "eyebrow"], description: [1, "description"], illustration: [1, "illustration"], busy: [1, "busy"] }, outputs: { closed: "closed" }, ngContentSelectors: _c1, decls: 1, vars: 1, consts: [[1, "erp-drawer-layer"], ["type", "button", 1, "erp-drawer-backdrop", 3, "click", "disabled"], ["role", "dialog", "aria-modal", "true", "cdkTrapFocus", "", 1, "erp-drawer", "erp-crm-drawer", 3, "keydown.escape", "cdkTrapFocusAutoCapture"], [1, "erp-drawer__header"], [1, "erp-crm-drawer__heading"], ["size", "compact", 3, "kind"], ["type", "button", "cdkFocusInitial", "", "aria-label", "Close drawer", 1, "erp-icon-button", 3, "click", "disabled"], ["lucideX", "", "size", "20", "aria-hidden", "true"], [1, "erp-drawer__body"], [1, "erp-drawer__footer"], ["type", "button", 1, "erp-button", "erp-button--secondary", 3, "click", "disabled"]], template: function AdminDrawerComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵprojectionDef(_c0);
            i0.ɵɵconditionalCreate(0, AdminDrawerComponent_Conditional_0_Template, 20, 10, "div", 0);
        } if (rf & 2) {
            i0.ɵɵconditional(ctx.open() ? 0 : -1);
        } }, dependencies: [CdkTrapFocus, LucideX, AdminIllustrationComponent], encapsulation: 2, changeDetection: 0 });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AdminDrawerComponent, [{
        type: Component,
        args: [{
                selector: 'erp-admin-drawer',
                imports: [CdkTrapFocus, LucideX, AdminIllustrationComponent],
                template: `
    @if (open()) {
      <div class="erp-drawer-layer">
        <button
          class="erp-drawer-backdrop"
          type="button"
          [attr.aria-label]="'Close ' + title()"
          [disabled]="busy()"
          (click)="close()"
        ></button>
        <aside
          class="erp-drawer erp-crm-drawer"
          role="dialog"
          aria-modal="true"
          [attr.aria-label]="title()"
          cdkTrapFocus
          [cdkTrapFocusAutoCapture]="true"
          (keydown.escape)="$event.stopPropagation(); close()"
        >
          <header class="erp-drawer__header">
            <div class="erp-crm-drawer__heading">
              <erp-admin-illustration [kind]="illustration()" size="compact" />
              <div>
                <small>{{ eyebrow() }}</small>
                <h2>{{ title() }}</h2>
                @if (description()) {
                  <p>{{ description() }}</p>
                }
              </div>
            </div>
            <button
              class="erp-icon-button"
              type="button"
              cdkFocusInitial
              [disabled]="busy()"
              aria-label="Close drawer"
              (click)="close()"
            >
              <svg lucideX size="20" aria-hidden="true"></svg>
            </button>
          </header>
          <div class="erp-drawer__body"><ng-content /></div>
          <footer class="erp-drawer__footer">
            <button
              class="erp-button erp-button--secondary"
              type="button"
              [disabled]="busy()"
              (click)="close()"
            >
              Close
            </button>
            <ng-content select="[drawer-actions]" />
          </footer>
        </aside>
      </div>
    }
  `,
                changeDetection: ChangeDetectionStrategy.OnPush,
            }]
    }], () => [], { open: [{ type: i0.Input, args: [{ isSignal: true, alias: "open", required: false }] }], title: [{ type: i0.Input, args: [{ isSignal: true, alias: "title", required: true }] }], eyebrow: [{ type: i0.Input, args: [{ isSignal: true, alias: "eyebrow", required: false }] }], description: [{ type: i0.Input, args: [{ isSignal: true, alias: "description", required: false }] }], illustration: [{ type: i0.Input, args: [{ isSignal: true, alias: "illustration", required: false }] }], busy: [{ type: i0.Input, args: [{ isSignal: true, alias: "busy", required: false }] }], closed: [{ type: i0.Output, args: ["closed"] }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(AdminDrawerComponent, { className: "AdminDrawerComponent", filePath: "frontend/src/app/shared/ui/admin-drawer/admin-drawer.component.ts", lineNumber: 71 }); })();
