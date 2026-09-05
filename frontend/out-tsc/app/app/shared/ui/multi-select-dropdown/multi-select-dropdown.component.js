import { ChangeDetectionStrategy, Component, HostListener, input, output, signal, } from '@angular/core';
import { LucideCheck, LucideChevronDown, LucideX } from '@lucide/angular';
import * as i0 from "@angular/core";
const _forTrack0 = ($index, $item) => $item.value;
function MultiSelectDropdownComponent_Conditional_5_For_9_Conditional_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(0, "svg", 12);
} }
function MultiSelectDropdownComponent_Conditional_5_For_9_Template(rf, ctx) { if (rf & 1) {
    const _r3 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 11);
    i0.ɵɵlistener("click", function MultiSelectDropdownComponent_Conditional_5_For_9_Template_button_click_0_listener() { const option_r4 = i0.ɵɵrestoreView(_r3).$implicit; const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.toggle(option_r4.value)); });
    i0.ɵɵelementStart(1, "span");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵconditionalCreate(3, MultiSelectDropdownComponent_Conditional_5_For_9_Conditional_3_Template, 1, 0, ":svg:svg", 12);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const option_r4 = ctx.$implicit;
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵclassProp("is-selected", ctx_r1.value().includes(option_r4.value));
    i0.ɵɵattribute("aria-selected", ctx_r1.value().includes(option_r4.value));
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(option_r4.label);
    i0.ɵɵadvance();
    i0.ɵɵconditional(ctx_r1.value().includes(option_r4.value) ? 3 : -1);
} }
function MultiSelectDropdownComponent_Conditional_5_ForEmpty_10_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p");
    i0.ɵɵtext(1, "No options available.");
    i0.ɵɵelementEnd();
} }
function MultiSelectDropdownComponent_Conditional_5_Template(rf, ctx) { if (rf & 1) {
    const _r1 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 3);
    i0.ɵɵlistener("click", function MultiSelectDropdownComponent_Conditional_5_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.open.set(false)); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(1, "section", 4)(2, "header")(3, "strong");
    i0.ɵɵtext(4, "Select options");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "button", 5);
    i0.ɵɵlistener("click", function MultiSelectDropdownComponent_Conditional_5_Template_button_click_5_listener() { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.open.set(false)); });
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(6, "svg", 6);
    i0.ɵɵelementEnd()();
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(7, "div", 7);
    i0.ɵɵrepeaterCreate(8, MultiSelectDropdownComponent_Conditional_5_For_9_Template, 4, 5, "button", 8, _forTrack0, false, MultiSelectDropdownComponent_Conditional_5_ForEmpty_10_Template, 2, 0, "p");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(11, "footer")(12, "button", 9);
    i0.ɵɵlistener("click", function MultiSelectDropdownComponent_Conditional_5_Template_button_click_12_listener() { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.clear()); });
    i0.ɵɵtext(13, " Clear");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(14, "button", 10);
    i0.ɵɵlistener("click", function MultiSelectDropdownComponent_Conditional_5_Template_button_click_14_listener() { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.open.set(false)); });
    i0.ɵɵtext(15, " Done ");
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵproperty("id", ctx_r1.panelId);
    i0.ɵɵadvance(7);
    i0.ɵɵrepeater(ctx_r1.options());
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("disabled", !ctx_r1.value().length);
} }
let nextMultiSelectId = 0;
export class MultiSelectDropdownComponent {
    options = input.required(...(ngDevMode ? [{ debugName: "options" }] : /* istanbul ignore next */ []));
    value = input([], ...(ngDevMode ? [{ debugName: "value" }] : /* istanbul ignore next */ []));
    placeholder = input('Select options', ...(ngDevMode ? [{ debugName: "placeholder" }] : /* istanbul ignore next */ []));
    disabled = input(false, ...(ngDevMode ? [{ debugName: "disabled" }] : /* istanbul ignore next */ []));
    valueChange = output();
    open = signal(false, ...(ngDevMode ? [{ debugName: "open" }] : /* istanbul ignore next */ []));
    panelId = `erp-multi-select-${++nextMultiSelectId}`;
    summary() {
        const selected = this.options().filter((option) => this.value().includes(option.value));
        if (!selected.length)
            return this.placeholder();
        if (selected.length <= 2)
            return selected.map((option) => option.label).join(', ');
        return `${selected[0].label}, ${selected[1].label} +${selected.length - 2}`;
    }
    toggle(value) {
        const current = [...this.value()];
        this.valueChange.emit(current.includes(value) ? current.filter((item) => item !== value) : [...current, value]);
    }
    clear() {
        this.valueChange.emit([]);
    }
    close() {
        this.open.set(false);
    }
    static ɵfac = function MultiSelectDropdownComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || MultiSelectDropdownComponent)(); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: MultiSelectDropdownComponent, selectors: [["erp-multi-select-dropdown"]], hostBindings: function MultiSelectDropdownComponent_HostBindings(rf, ctx) { if (rf & 1) {
            i0.ɵɵlistener("keydown.escape", function MultiSelectDropdownComponent_keydown_escape_HostBindingHandler() { return ctx.close(); }, i0.ɵɵresolveDocument);
        } }, inputs: { options: [1, "options"], value: [1, "value"], placeholder: [1, "placeholder"], disabled: [1, "disabled"] }, outputs: { valueChange: "valueChange" }, decls: 6, vars: 7, consts: [[1, "multi-select-dropdown"], ["type", "button", 1, "erp-control", "multi-select-dropdown__trigger", 3, "click", "disabled"], ["lucideChevronDown", "", "size", "17", "aria-hidden", "true"], ["type", "button", "tabindex", "-1", "aria-label", "Close options", 1, "multi-select-dropdown__backdrop", 3, "click"], ["role", "listbox", "aria-multiselectable", "true", 1, "multi-select-dropdown__panel", 3, "id"], ["type", "button", "aria-label", "Close options", 3, "click"], ["lucideX", "", "size", "16", "aria-hidden", "true"], [1, "multi-select-dropdown__options"], ["type", "button", "role", "option", 3, "is-selected"], ["type", "button", 1, "erp-button", "erp-button--ghost", "erp-button--compact", 3, "click", "disabled"], ["type", "button", 1, "erp-button", "erp-button--primary", "erp-button--compact", 3, "click"], ["type", "button", "role", "option", 3, "click"], ["lucideCheck", "", "size", "16", "aria-hidden", "true"]], template: function MultiSelectDropdownComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0)(1, "button", 1);
            i0.ɵɵlistener("click", function MultiSelectDropdownComponent_Template_button_click_1_listener() { return ctx.open.update(value => !value); });
            i0.ɵɵelementStart(2, "span");
            i0.ɵɵtext(3);
            i0.ɵɵelementEnd();
            i0.ɵɵnamespaceSVG();
            i0.ɵɵelement(4, "svg", 2);
            i0.ɵɵelementEnd();
            i0.ɵɵconditionalCreate(5, MultiSelectDropdownComponent_Conditional_5_Template, 16, 3);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵadvance();
            i0.ɵɵproperty("disabled", ctx.disabled());
            i0.ɵɵattribute("aria-expanded", ctx.open())("aria-controls", ctx.panelId);
            i0.ɵɵadvance();
            i0.ɵɵclassProp("is-placeholder", !ctx.value().length);
            i0.ɵɵadvance();
            i0.ɵɵtextInterpolate(ctx.summary());
            i0.ɵɵadvance(2);
            i0.ɵɵconditional(ctx.open() ? 5 : -1);
        } }, dependencies: [LucideCheck, LucideChevronDown, LucideX], styles: ["\n[_nghost-%COMP%] {\n  display: block;\n  min-width: 0;\n}\n.multi-select-dropdown[_ngcontent-%COMP%] {\n  position: relative;\n}\n.multi-select-dropdown__trigger[_ngcontent-%COMP%] {\n  display: flex;\n  width: 100%;\n  align-items: center;\n  justify-content: space-between;\n  gap: var(--erp-space-2);\n  text-align: left;\n}\n.multi-select-dropdown__trigger[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.multi-select-dropdown__trigger[_ngcontent-%COMP%]   span.is-placeholder[_ngcontent-%COMP%] {\n  color: var(--erp-text-muted);\n}\n.multi-select-dropdown__backdrop[_ngcontent-%COMP%] {\n  position: fixed;\n  z-index: var(--erp-z-dropdown);\n  inset: 0;\n  padding: 0;\n  border: 0;\n  background: transparent;\n}\n.multi-select-dropdown__panel[_ngcontent-%COMP%] {\n  position: absolute;\n  z-index: calc(var(--erp-z-dropdown) + 1);\n  top: calc(100% + var(--erp-space-1));\n  left: 0;\n  width: max(100%, 280px);\n  max-width: min(420px, calc(100vw - 24px));\n  overflow: hidden;\n  border: 1px solid var(--erp-border-default);\n  border-radius: var(--erp-radius-overlay);\n  background: var(--erp-surface-overlay);\n  box-shadow: var(--erp-shadow-overlay);\n}\n.multi-select-dropdown__panel[_ngcontent-%COMP%]   header[_ngcontent-%COMP%], \n.multi-select-dropdown__panel[_ngcontent-%COMP%]   footer[_ngcontent-%COMP%] {\n  display: flex;\n  min-height: 42px;\n  align-items: center;\n  justify-content: space-between;\n  gap: var(--erp-space-2);\n  padding: var(--erp-space-2) var(--erp-space-3);\n}\n.multi-select-dropdown__panel[_ngcontent-%COMP%]   header[_ngcontent-%COMP%] {\n  border-bottom: 1px solid var(--erp-border-subtle);\n}\n.multi-select-dropdown__panel[_ngcontent-%COMP%]   header[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  display: inline-grid;\n  width: 28px;\n  height: 28px;\n  place-items: center;\n  padding: 0;\n  border: 0;\n  background: transparent;\n  color: var(--erp-text-muted);\n}\n.multi-select-dropdown__options[_ngcontent-%COMP%] {\n  display: grid;\n  max-height: 260px;\n  gap: var(--erp-space-1);\n  overflow: auto;\n  padding: var(--erp-space-2);\n}\n.multi-select-dropdown__options[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  display: flex;\n  min-height: 38px;\n  align-items: center;\n  justify-content: space-between;\n  gap: var(--erp-space-2);\n  padding: 0 var(--erp-space-2);\n  border: 1px solid transparent;\n  border-radius: var(--erp-radius-control);\n  color: var(--erp-text-body);\n  background: transparent;\n  text-align: left;\n}\n.multi-select-dropdown__options[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover, \n.multi-select-dropdown__options[_ngcontent-%COMP%]   button.is-selected[_ngcontent-%COMP%] {\n  color: var(--erp-blue-700);\n  border-color: var(--erp-blue-100);\n  background: var(--erp-blue-50);\n}\n.multi-select-dropdown__options[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: var(--erp-space-3);\n  color: var(--erp-text-muted);\n}\n.multi-select-dropdown__panel[_ngcontent-%COMP%]   footer[_ngcontent-%COMP%] {\n  justify-content: flex-end;\n  border-top: 1px solid var(--erp-border-subtle);\n}"], changeDetection: 0 });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MultiSelectDropdownComponent, [{
        type: Component,
        args: [{ selector: 'erp-multi-select-dropdown', imports: [LucideCheck, LucideChevronDown, LucideX], changeDetection: ChangeDetectionStrategy.OnPush, template: "<div class=\"multi-select-dropdown\">\n  <button\n    class=\"erp-control multi-select-dropdown__trigger\"\n    type=\"button\"\n    [disabled]=\"disabled()\"\n    [attr.aria-expanded]=\"open()\"\n    [attr.aria-controls]=\"panelId\"\n    (click)=\"open.update((value) => !value)\"\n  >\n    <span [class.is-placeholder]=\"!value().length\">{{ summary() }}</span\n    ><svg lucideChevronDown size=\"17\" aria-hidden=\"true\"></svg>\n  </button>\n  @if (open()) {\n    <button\n      class=\"multi-select-dropdown__backdrop\"\n      type=\"button\"\n      tabindex=\"-1\"\n      aria-label=\"Close options\"\n      (click)=\"open.set(false)\"\n    ></button>\n    <section\n      class=\"multi-select-dropdown__panel\"\n      [id]=\"panelId\"\n      role=\"listbox\"\n      aria-multiselectable=\"true\"\n    >\n      <header>\n        <strong>Select options</strong\n        ><button type=\"button\" aria-label=\"Close options\" (click)=\"open.set(false)\">\n          <svg lucideX size=\"16\" aria-hidden=\"true\"></svg>\n        </button>\n      </header>\n      <div class=\"multi-select-dropdown__options\">\n        @for (option of options(); track option.value) {\n          <button\n            type=\"button\"\n            role=\"option\"\n            [attr.aria-selected]=\"value().includes(option.value)\"\n            [class.is-selected]=\"value().includes(option.value)\"\n            (click)=\"toggle(option.value)\"\n          >\n            <span>{{ option.label }}</span>\n            @if (value().includes(option.value)) {\n              <svg lucideCheck size=\"16\" aria-hidden=\"true\"></svg>\n            }\n          </button>\n        } @empty {\n          <p>No options available.</p>\n        }\n      </div>\n      <footer>\n        <button\n          class=\"erp-button erp-button--ghost erp-button--compact\"\n          type=\"button\"\n          [disabled]=\"!value().length\"\n          (click)=\"clear()\"\n        >\n          Clear</button\n        ><button\n          class=\"erp-button erp-button--primary erp-button--compact\"\n          type=\"button\"\n          (click)=\"open.set(false)\"\n        >\n          Done\n        </button>\n      </footer>\n    </section>\n  }\n</div>\n", styles: ["/* ERP-LOCAL-STYLE: Reusable multi-select owns its anchored dropdown panel geometry. */\n:host {\n  display: block;\n  min-width: 0;\n}\n.multi-select-dropdown {\n  position: relative;\n}\n.multi-select-dropdown__trigger {\n  display: flex;\n  width: 100%;\n  align-items: center;\n  justify-content: space-between;\n  gap: var(--erp-space-2);\n  text-align: left;\n}\n.multi-select-dropdown__trigger span {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.multi-select-dropdown__trigger span.is-placeholder {\n  color: var(--erp-text-muted);\n}\n.multi-select-dropdown__backdrop {\n  position: fixed;\n  z-index: var(--erp-z-dropdown);\n  inset: 0;\n  padding: 0;\n  border: 0;\n  background: transparent;\n}\n.multi-select-dropdown__panel {\n  position: absolute;\n  z-index: calc(var(--erp-z-dropdown) + 1);\n  top: calc(100% + var(--erp-space-1));\n  left: 0;\n  width: max(100%, 280px);\n  max-width: min(420px, calc(100vw - 24px));\n  overflow: hidden;\n  border: 1px solid var(--erp-border-default);\n  border-radius: var(--erp-radius-overlay);\n  background: var(--erp-surface-overlay);\n  box-shadow: var(--erp-shadow-overlay);\n}\n.multi-select-dropdown__panel header,\n.multi-select-dropdown__panel footer {\n  display: flex;\n  min-height: 42px;\n  align-items: center;\n  justify-content: space-between;\n  gap: var(--erp-space-2);\n  padding: var(--erp-space-2) var(--erp-space-3);\n}\n.multi-select-dropdown__panel header {\n  border-bottom: 1px solid var(--erp-border-subtle);\n}\n.multi-select-dropdown__panel header button {\n  display: inline-grid;\n  width: 28px;\n  height: 28px;\n  place-items: center;\n  padding: 0;\n  border: 0;\n  background: transparent;\n  color: var(--erp-text-muted);\n}\n.multi-select-dropdown__options {\n  display: grid;\n  max-height: 260px;\n  gap: var(--erp-space-1);\n  overflow: auto;\n  padding: var(--erp-space-2);\n}\n.multi-select-dropdown__options button {\n  display: flex;\n  min-height: 38px;\n  align-items: center;\n  justify-content: space-between;\n  gap: var(--erp-space-2);\n  padding: 0 var(--erp-space-2);\n  border: 1px solid transparent;\n  border-radius: var(--erp-radius-control);\n  color: var(--erp-text-body);\n  background: transparent;\n  text-align: left;\n}\n.multi-select-dropdown__options button:hover,\n.multi-select-dropdown__options button.is-selected {\n  color: var(--erp-blue-700);\n  border-color: var(--erp-blue-100);\n  background: var(--erp-blue-50);\n}\n.multi-select-dropdown__options p {\n  margin: var(--erp-space-3);\n  color: var(--erp-text-muted);\n}\n.multi-select-dropdown__panel footer {\n  justify-content: flex-end;\n  border-top: 1px solid var(--erp-border-subtle);\n}\n"] }]
    }], null, { options: [{ type: i0.Input, args: [{ isSignal: true, alias: "options", required: true }] }], value: [{ type: i0.Input, args: [{ isSignal: true, alias: "value", required: false }] }], placeholder: [{ type: i0.Input, args: [{ isSignal: true, alias: "placeholder", required: false }] }], disabled: [{ type: i0.Input, args: [{ isSignal: true, alias: "disabled", required: false }] }], valueChange: [{ type: i0.Output, args: ["valueChange"] }], close: [{
            type: HostListener,
            args: ['document:keydown.escape']
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(MultiSelectDropdownComponent, { className: "MultiSelectDropdownComponent", filePath: "frontend/src/app/shared/ui/multi-select-dropdown/multi-select-dropdown.component.ts", lineNumber: 24 }); })();
