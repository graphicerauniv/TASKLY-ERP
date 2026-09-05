import { ChangeDetectionStrategy, Component, HostListener, computed, input, output, signal, } from '@angular/core';
import { LucideCheck, LucideColumns3, LucideX } from '@lucide/angular';
import * as i0 from "@angular/core";
const _forTrack0 = ($index, $item) => $item.id;
function ColumnVisibilityPopoverComponent_Conditional_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "small");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r0.hiddenCount());
} }
function ColumnVisibilityPopoverComponent_Conditional_6_For_12_Conditional_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(0, "svg", 12);
} }
function ColumnVisibilityPopoverComponent_Conditional_6_For_12_Template(rf, ctx) { if (rf & 1) {
    const _r3 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 10);
    i0.ɵɵlistener("click", function ColumnVisibilityPopoverComponent_Conditional_6_For_12_Template_button_click_0_listener() { const option_r4 = i0.ɵɵrestoreView(_r3).$implicit; const ctx_r0 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r0.toggle(option_r4.id)); });
    i0.ɵɵelementStart(1, "span");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "span", 11);
    i0.ɵɵconditionalCreate(4, ColumnVisibilityPopoverComponent_Conditional_6_For_12_Conditional_4_Template, 1, 0, ":svg:svg", 12);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const option_r4 = ctx.$implicit;
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵclassProp("is-active", ctx_r0.visible().includes(option_r4.id));
    i0.ɵɵattribute("aria-pressed", ctx_r0.visible().includes(option_r4.id));
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(option_r4.label);
    i0.ɵɵadvance(2);
    i0.ɵɵconditional(ctx_r0.visible().includes(option_r4.id) ? 4 : -1);
} }
function ColumnVisibilityPopoverComponent_Conditional_6_Template(rf, ctx) { if (rf & 1) {
    const _r2 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 3);
    i0.ɵɵlistener("click", function ColumnVisibilityPopoverComponent_Conditional_6_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r2); const ctx_r0 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r0.open.set(false)); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(1, "section", 4)(2, "header")(3, "div")(4, "strong");
    i0.ɵɵtext(5, "Table columns");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "span");
    i0.ɵɵtext(7, "Choose the details shown");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(8, "button", 5);
    i0.ɵɵlistener("click", function ColumnVisibilityPopoverComponent_Conditional_6_Template_button_click_8_listener() { i0.ɵɵrestoreView(_r2); const ctx_r0 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r0.open.set(false)); });
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(9, "svg", 6);
    i0.ɵɵelementEnd()();
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(10, "div", 7);
    i0.ɵɵrepeaterCreate(11, ColumnVisibilityPopoverComponent_Conditional_6_For_12_Template, 5, 5, "button", 8, _forTrack0);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(13, "footer")(14, "button", 9);
    i0.ɵɵlistener("click", function ColumnVisibilityPopoverComponent_Conditional_6_Template_button_click_14_listener() { i0.ɵɵrestoreView(_r2); const ctx_r0 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r0.reset()); });
    i0.ɵɵtext(15, " Reset columns ");
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵproperty("id", ctx_r0.panelId);
    i0.ɵɵadvance(10);
    i0.ɵɵrepeater(ctx_r0.options());
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("disabled", ctx_r0.hiddenCount() === 0);
} }
let nextColumnPopoverId = 0;
export class ColumnVisibilityPopoverComponent {
    options = input.required(...(ngDevMode ? [{ debugName: "options" }] : /* istanbul ignore next */ []));
    visible = input.required(...(ngDevMode ? [{ debugName: "visible" }] : /* istanbul ignore next */ []));
    visibleChange = output();
    open = signal(false, ...(ngDevMode ? [{ debugName: "open" }] : /* istanbul ignore next */ []));
    panelId = `erp-column-visibility-${++nextColumnPopoverId}`;
    hiddenCount = computed(() => this.options().filter((option) => !this.visible().includes(option.id)).length, ...(ngDevMode ? [{ debugName: "hiddenCount" }] : /* istanbul ignore next */ []));
    toggle(id) {
        const current = this.visible();
        if (current.includes(id)) {
            if (current.length === 1)
                return;
            this.visibleChange.emit(current.filter((column) => column !== id));
            return;
        }
        this.visibleChange.emit([...current, id]);
    }
    reset() {
        this.visibleChange.emit(this.options().map((option) => option.id));
    }
    close() {
        this.open.set(false);
    }
    static ɵfac = function ColumnVisibilityPopoverComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || ColumnVisibilityPopoverComponent)(); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ColumnVisibilityPopoverComponent, selectors: [["erp-column-visibility-popover"]], hostBindings: function ColumnVisibilityPopoverComponent_HostBindings(rf, ctx) { if (rf & 1) {
            i0.ɵɵlistener("keydown.escape", function ColumnVisibilityPopoverComponent_keydown_escape_HostBindingHandler() { return ctx.close(); }, i0.ɵɵresolveDocument);
        } }, inputs: { options: [1, "options"], visible: [1, "visible"] }, outputs: { visibleChange: "visibleChange" }, decls: 7, vars: 6, consts: [[1, "column-popover"], ["type", "button", 1, "erp-button", "erp-button--secondary", "erp-button--compact", "column-popover__trigger", 3, "click"], ["lucideColumns3", "", "size", "15", "aria-hidden", "true"], ["type", "button", "tabindex", "-1", "aria-label", "Close columns", 1, "column-popover__backdrop", 3, "click"], ["role", "dialog", "aria-label", "Columns", 1, "column-popover__panel", 3, "id"], ["type", "button", "aria-label", "Close columns", 3, "click"], ["lucideX", "", "size", "16", "aria-hidden", "true"], [1, "column-popover__options"], ["type", "button", 3, "is-active"], ["type", "button", 1, "erp-button", "erp-button--ghost", "erp-button--compact", 3, "click", "disabled"], ["type", "button", 3, "click"], [1, "column-popover__check"], ["lucideCheck", "", "size", "14", "aria-hidden", "true"]], template: function ColumnVisibilityPopoverComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0)(1, "button", 1);
            i0.ɵɵlistener("click", function ColumnVisibilityPopoverComponent_Template_button_click_1_listener() { return ctx.open.update(current => !current); });
            i0.ɵɵnamespaceSVG();
            i0.ɵɵelement(2, "svg", 2);
            i0.ɵɵnamespaceHTML();
            i0.ɵɵelementStart(3, "span");
            i0.ɵɵtext(4, "Columns");
            i0.ɵɵelementEnd();
            i0.ɵɵconditionalCreate(5, ColumnVisibilityPopoverComponent_Conditional_5_Template, 2, 1, "small");
            i0.ɵɵelementEnd();
            i0.ɵɵconditionalCreate(6, ColumnVisibilityPopoverComponent_Conditional_6_Template, 16, 2);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵadvance();
            i0.ɵɵclassProp("is-active", ctx.hiddenCount() > 0);
            i0.ɵɵattribute("aria-controls", ctx.panelId)("aria-expanded", ctx.open());
            i0.ɵɵadvance(4);
            i0.ɵɵconditional(ctx.hiddenCount() ? 5 : -1);
            i0.ɵɵadvance();
            i0.ɵɵconditional(ctx.open() ? 6 : -1);
        } }, dependencies: [LucideCheck, LucideColumns3, LucideX], styles: ["\n[_nghost-%COMP%] {\n  display: inline-block;\n}\n\n.column-popover[_ngcontent-%COMP%] {\n  position: relative;\n}\n\n.column-popover__trigger.is-active[_ngcontent-%COMP%] {\n  color: var(--erp-blue-700);\n  background: var(--erp-blue-50);\n  border-color: var(--erp-blue-200);\n}\n\n.column-popover__trigger[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  display: inline-grid;\n  min-width: 18px;\n  height: 18px;\n  place-items: center;\n  color: var(--erp-text-on-primary);\n  background: var(--erp-blue-600);\n  border-radius: var(--erp-radius-pill);\n  font-size: var(--erp-font-size-2xs);\n}\n\n.column-popover__backdrop[_ngcontent-%COMP%] {\n  position: fixed;\n  z-index: var(--erp-z-dropdown);\n  inset: 0;\n  padding: 0;\n  background: transparent;\n  border: 0;\n}\n\n.column-popover__panel[_ngcontent-%COMP%] {\n  position: absolute;\n  z-index: calc(var(--erp-z-dropdown) + 1);\n  top: calc(100% + var(--erp-space-2));\n  right: 0;\n  width: min(270px, calc(100vw - 24px));\n  overflow: hidden;\n  background: var(--erp-surface-overlay);\n  border: 1px solid var(--erp-border-default);\n  border-radius: var(--erp-radius-overlay);\n  box-shadow: var(--erp-shadow-overlay);\n}\n\n.column-popover__panel[_ngcontent-%COMP%]   header[_ngcontent-%COMP%], \n.column-popover__panel[_ngcontent-%COMP%]   footer[_ngcontent-%COMP%] {\n  display: flex;\n  min-height: 42px;\n  align-items: center;\n  justify-content: space-between;\n  gap: var(--erp-space-2);\n  padding: var(--erp-space-2) var(--erp-space-3);\n}\n\n.column-popover__panel[_ngcontent-%COMP%]   header[_ngcontent-%COMP%] {\n  border-bottom: 1px solid var(--erp-border-subtle);\n}\n\n.column-popover__panel[_ngcontent-%COMP%]   header[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 1px;\n}\n\n.column-popover__panel[_ngcontent-%COMP%]   header[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: var(--erp-text-heading);\n  font-size: var(--erp-font-label);\n}\n\n.column-popover__panel[_ngcontent-%COMP%]   header[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: var(--erp-text-muted);\n  font-size: var(--erp-font-size-2xs);\n}\n\n.column-popover__panel[_ngcontent-%COMP%]   header[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  display: inline-grid;\n  width: 28px;\n  height: 28px;\n  place-items: center;\n  padding: 0;\n  color: var(--erp-text-muted);\n  background: transparent;\n  border: 0;\n  border-radius: var(--erp-radius-control);\n}\n\n.column-popover__options[_ngcontent-%COMP%] {\n  display: grid;\n  gap: var(--erp-space-1);\n  padding: var(--erp-space-2);\n}\n\n.column-popover__options[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  display: flex;\n  min-height: 36px;\n  align-items: center;\n  justify-content: space-between;\n  gap: var(--erp-space-2);\n  padding: 0 var(--erp-space-2);\n  color: var(--erp-text-body);\n  background: transparent;\n  border: 1px solid transparent;\n  border-radius: var(--erp-radius-control);\n  font-size: var(--erp-font-size-xs);\n  text-align: left;\n}\n\n.column-popover__options[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover, \n.column-popover__options[_ngcontent-%COMP%]   button.is-active[_ngcontent-%COMP%] {\n  color: var(--erp-blue-700);\n  background: var(--erp-blue-50);\n  border-color: var(--erp-blue-100);\n}\n\n.column-popover__check[_ngcontent-%COMP%] {\n  display: inline-grid;\n  width: 18px;\n  height: 18px;\n  place-items: center;\n  color: var(--erp-text-on-primary);\n  background: var(--erp-blue-600);\n  border: 1px solid var(--erp-blue-300);\n  border-radius: var(--erp-radius-control);\n}\n\n.column-popover__panel[_ngcontent-%COMP%]   footer[_ngcontent-%COMP%] {\n  justify-content: flex-end;\n  border-top: 1px solid var(--erp-border-subtle);\n}"], changeDetection: 0 });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ColumnVisibilityPopoverComponent, [{
        type: Component,
        args: [{ selector: 'erp-column-visibility-popover', imports: [LucideCheck, LucideColumns3, LucideX], changeDetection: ChangeDetectionStrategy.OnPush, template: "<div class=\"column-popover\">\n  <button\n    class=\"erp-button erp-button--secondary erp-button--compact column-popover__trigger\"\n    type=\"button\"\n    [class.is-active]=\"hiddenCount() > 0\"\n    [attr.aria-controls]=\"panelId\"\n    [attr.aria-expanded]=\"open()\"\n    (click)=\"open.update((current) => !current)\"\n  >\n    <svg lucideColumns3 size=\"15\" aria-hidden=\"true\"></svg>\n    <span>Columns</span>\n    @if (hiddenCount()) {\n      <small>{{ hiddenCount() }}</small>\n    }\n  </button>\n\n  @if (open()) {\n    <button\n      class=\"column-popover__backdrop\"\n      type=\"button\"\n      tabindex=\"-1\"\n      aria-label=\"Close columns\"\n      (click)=\"open.set(false)\"\n    ></button>\n    <section class=\"column-popover__panel\" [id]=\"panelId\" role=\"dialog\" aria-label=\"Columns\">\n      <header>\n        <div>\n          <strong>Table columns</strong>\n          <span>Choose the details shown</span>\n        </div>\n        <button type=\"button\" aria-label=\"Close columns\" (click)=\"open.set(false)\">\n          <svg lucideX size=\"16\" aria-hidden=\"true\"></svg>\n        </button>\n      </header>\n      <div class=\"column-popover__options\">\n        @for (option of options(); track option.id) {\n          <button\n            type=\"button\"\n            [class.is-active]=\"visible().includes(option.id)\"\n            [attr.aria-pressed]=\"visible().includes(option.id)\"\n            (click)=\"toggle(option.id)\"\n          >\n            <span>{{ option.label }}</span>\n            <span class=\"column-popover__check\">\n              @if (visible().includes(option.id)) {\n                <svg lucideCheck size=\"14\" aria-hidden=\"true\"></svg>\n              }\n            </span>\n          </button>\n        }\n      </div>\n      <footer>\n        <button\n          class=\"erp-button erp-button--ghost erp-button--compact\"\n          type=\"button\"\n          [disabled]=\"hiddenCount() === 0\"\n          (click)=\"reset()\"\n        >\n          Reset columns\n        </button>\n      </footer>\n    </section>\n  }\n</div>\n", styles: ["/* ERP-LOCAL-STYLE: Reusable column chooser owns its anchored multi-select popover geometry. */\n:host {\n  display: inline-block;\n}\n\n.column-popover {\n  position: relative;\n}\n\n.column-popover__trigger.is-active {\n  color: var(--erp-blue-700);\n  background: var(--erp-blue-50);\n  border-color: var(--erp-blue-200);\n}\n\n.column-popover__trigger small {\n  display: inline-grid;\n  min-width: 18px;\n  height: 18px;\n  place-items: center;\n  color: var(--erp-text-on-primary);\n  background: var(--erp-blue-600);\n  border-radius: var(--erp-radius-pill);\n  font-size: var(--erp-font-size-2xs);\n}\n\n.column-popover__backdrop {\n  position: fixed;\n  z-index: var(--erp-z-dropdown);\n  inset: 0;\n  padding: 0;\n  background: transparent;\n  border: 0;\n}\n\n.column-popover__panel {\n  position: absolute;\n  z-index: calc(var(--erp-z-dropdown) + 1);\n  top: calc(100% + var(--erp-space-2));\n  right: 0;\n  width: min(270px, calc(100vw - 24px));\n  overflow: hidden;\n  background: var(--erp-surface-overlay);\n  border: 1px solid var(--erp-border-default);\n  border-radius: var(--erp-radius-overlay);\n  box-shadow: var(--erp-shadow-overlay);\n}\n\n.column-popover__panel header,\n.column-popover__panel footer {\n  display: flex;\n  min-height: 42px;\n  align-items: center;\n  justify-content: space-between;\n  gap: var(--erp-space-2);\n  padding: var(--erp-space-2) var(--erp-space-3);\n}\n\n.column-popover__panel header {\n  border-bottom: 1px solid var(--erp-border-subtle);\n}\n\n.column-popover__panel header > div {\n  display: grid;\n  gap: 1px;\n}\n\n.column-popover__panel header strong {\n  color: var(--erp-text-heading);\n  font-size: var(--erp-font-label);\n}\n\n.column-popover__panel header span {\n  color: var(--erp-text-muted);\n  font-size: var(--erp-font-size-2xs);\n}\n\n.column-popover__panel header button {\n  display: inline-grid;\n  width: 28px;\n  height: 28px;\n  place-items: center;\n  padding: 0;\n  color: var(--erp-text-muted);\n  background: transparent;\n  border: 0;\n  border-radius: var(--erp-radius-control);\n}\n\n.column-popover__options {\n  display: grid;\n  gap: var(--erp-space-1);\n  padding: var(--erp-space-2);\n}\n\n.column-popover__options button {\n  display: flex;\n  min-height: 36px;\n  align-items: center;\n  justify-content: space-between;\n  gap: var(--erp-space-2);\n  padding: 0 var(--erp-space-2);\n  color: var(--erp-text-body);\n  background: transparent;\n  border: 1px solid transparent;\n  border-radius: var(--erp-radius-control);\n  font-size: var(--erp-font-size-xs);\n  text-align: left;\n}\n\n.column-popover__options button:hover,\n.column-popover__options button.is-active {\n  color: var(--erp-blue-700);\n  background: var(--erp-blue-50);\n  border-color: var(--erp-blue-100);\n}\n\n.column-popover__check {\n  display: inline-grid;\n  width: 18px;\n  height: 18px;\n  place-items: center;\n  color: var(--erp-text-on-primary);\n  background: var(--erp-blue-600);\n  border: 1px solid var(--erp-blue-300);\n  border-radius: var(--erp-radius-control);\n}\n\n.column-popover__panel footer {\n  justify-content: flex-end;\n  border-top: 1px solid var(--erp-border-subtle);\n}\n"] }]
    }], null, { options: [{ type: i0.Input, args: [{ isSignal: true, alias: "options", required: true }] }], visible: [{ type: i0.Input, args: [{ isSignal: true, alias: "visible", required: true }] }], visibleChange: [{ type: i0.Output, args: ["visibleChange"] }], close: [{
            type: HostListener,
            args: ['document:keydown.escape']
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(ColumnVisibilityPopoverComponent, { className: "ColumnVisibilityPopoverComponent", filePath: "frontend/src/app/shared/ui/column-visibility-popover/column-visibility-popover.component.ts", lineNumber: 26 }); })();
