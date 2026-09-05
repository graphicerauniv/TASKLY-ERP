import { ChangeDetectionStrategy, Component, HostListener, computed, input, output, signal, } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LucideCheck, LucideFilter, LucideX } from '@lucide/angular';
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
const _c0 = () => [];
const _forTrack0 = ($index, $item) => $item.id;
const _forTrack1 = ($index, $item) => $item.value;
function FilterPopoverComponent_Conditional_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "small");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r0.activeCount());
} }
function FilterPopoverComponent_Conditional_6_Conditional_7_For_7_Conditional_3_For_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 17);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const option_r5 = ctx.$implicit;
    i0.ɵɵproperty("value", option_r5.value);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(option_r5.label);
} }
function FilterPopoverComponent_Conditional_6_Conditional_7_For_7_Conditional_3_Template(rf, ctx) { if (rf & 1) {
    const _r3 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "select", 15);
    i0.ɵɵlistener("ngModelChange", function FilterPopoverComponent_Conditional_6_Conditional_7_For_7_Conditional_3_Template_select_ngModelChange_0_listener($event) { i0.ɵɵrestoreView(_r3); const field_r4 = i0.ɵɵnextContext().$implicit; const ctx_r0 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r0.updateDraft(field_r4.id, $event)); });
    i0.ɵɵelementStart(1, "option", 16);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵrepeaterCreate(3, FilterPopoverComponent_Conditional_6_Conditional_7_For_7_Conditional_3_For_4_Template, 2, 2, "option", 17, _forTrack1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const field_r4 = i0.ɵɵnextContext().$implicit;
    const ctx_r0 = i0.ɵɵnextContext(3);
    i0.ɵɵproperty("id", "erp-filter-" + field_r4.id)("ngModel", ctx_r0.draftValues()[field_r4.id] || ctx_r0.values()[field_r4.id] || "");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1("All ", field_r4.label.toLowerCase());
    i0.ɵɵadvance();
    i0.ɵɵrepeater(field_r4.options || i0.ɵɵpureFunction0(3, _c0));
} }
function FilterPopoverComponent_Conditional_6_Conditional_7_For_7_Conditional_4_Template(rf, ctx) { if (rf & 1) {
    const _r6 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "input", 18);
    i0.ɵɵlistener("ngModelChange", function FilterPopoverComponent_Conditional_6_Conditional_7_For_7_Conditional_4_Template_input_ngModelChange_0_listener($event) { i0.ɵɵrestoreView(_r6); const field_r4 = i0.ɵɵnextContext().$implicit; const ctx_r0 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r0.updateDraft(field_r4.id, $event)); })("keydown.enter", function FilterPopoverComponent_Conditional_6_Conditional_7_For_7_Conditional_4_Template_input_keydown_enter_0_listener() { i0.ɵɵrestoreView(_r6); const ctx_r0 = i0.ɵɵnextContext(4); return i0.ɵɵresetView(ctx_r0.apply()); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const field_r4 = i0.ɵɵnextContext().$implicit;
    const ctx_r0 = i0.ɵɵnextContext(3);
    i0.ɵɵproperty("id", "erp-filter-" + field_r4.id)("placeholder", field_r4.placeholder || "Enter " + field_r4.label.toLowerCase())("ngModel", ctx_r0.draftValues()[field_r4.id] || ctx_r0.values()[field_r4.id] || "");
} }
function FilterPopoverComponent_Conditional_6_Conditional_7_For_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "label", 12)(1, "span");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵconditionalCreate(3, FilterPopoverComponent_Conditional_6_Conditional_7_For_7_Conditional_3_Template, 5, 4, "select", 13)(4, FilterPopoverComponent_Conditional_6_Conditional_7_For_7_Conditional_4_Template, 1, 3, "input", 14);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const field_r4 = ctx.$implicit;
    i0.ɵɵproperty("for", "erp-filter-" + field_r4.id);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(field_r4.label);
    i0.ɵɵadvance();
    i0.ɵɵconditional(field_r4.type === "select" ? 3 : 4);
} }
function FilterPopoverComponent_Conditional_6_Conditional_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 10)(1, "strong");
    i0.ɵɵtext(2, "Refine results");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "span");
    i0.ɵɵtext(4, "Use one or more fields to narrow this list.");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(5, "div", 11);
    i0.ɵɵrepeaterCreate(6, FilterPopoverComponent_Conditional_6_Conditional_7_For_7_Template, 5, 3, "label", 12, _forTrack0);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(6);
    i0.ɵɵrepeater(ctx_r0.fields());
} }
function FilterPopoverComponent_Conditional_6_Conditional_8_For_2_Conditional_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(0, "svg", 21);
} }
function FilterPopoverComponent_Conditional_6_Conditional_8_For_2_Template(rf, ctx) { if (rf & 1) {
    const _r7 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 20);
    i0.ɵɵlistener("click", function FilterPopoverComponent_Conditional_6_Conditional_8_For_2_Template_button_click_0_listener() { const option_r8 = i0.ɵɵrestoreView(_r7).$implicit; const ctx_r0 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r0.select(option_r8.value)); });
    i0.ɵɵelementStart(1, "span");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵconditionalCreate(3, FilterPopoverComponent_Conditional_6_Conditional_8_For_2_Conditional_3_Template, 1, 0, ":svg:svg", 21);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const option_r8 = ctx.$implicit;
    const ctx_r0 = i0.ɵɵnextContext(3);
    i0.ɵɵclassProp("is-active", ctx_r0.value() === option_r8.value);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(option_r8.label);
    i0.ɵɵadvance();
    i0.ɵɵconditional(ctx_r0.value() === option_r8.value ? 3 : -1);
} }
function FilterPopoverComponent_Conditional_6_Conditional_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 7);
    i0.ɵɵrepeaterCreate(1, FilterPopoverComponent_Conditional_6_Conditional_8_For_2_Template, 4, 4, "button", 19, _forTrack1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵrepeater(ctx_r0.options());
} }
function FilterPopoverComponent_Conditional_6_Conditional_12_Template(rf, ctx) { if (rf & 1) {
    const _r9 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "span", 9)(1, "button", 22);
    i0.ɵɵlistener("click", function FilterPopoverComponent_Conditional_6_Conditional_12_Template_button_click_1_listener() { i0.ɵɵrestoreView(_r9); const ctx_r0 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r0.open.set(false)); });
    i0.ɵɵtext(2, "Cancel");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "button", 23);
    i0.ɵɵlistener("click", function FilterPopoverComponent_Conditional_6_Conditional_12_Template_button_click_3_listener() { i0.ɵɵrestoreView(_r9); const ctx_r0 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r0.apply()); });
    i0.ɵɵtext(4, "Apply filters");
    i0.ɵɵelementEnd()();
} }
function FilterPopoverComponent_Conditional_6_Template(rf, ctx) { if (rf & 1) {
    const _r2 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 3);
    i0.ɵɵlistener("click", function FilterPopoverComponent_Conditional_6_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r2); const ctx_r0 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r0.open.set(false)); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(1, "section", 4)(2, "header")(3, "strong");
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "button", 5);
    i0.ɵɵlistener("click", function FilterPopoverComponent_Conditional_6_Template_button_click_5_listener() { i0.ɵɵrestoreView(_r2); const ctx_r0 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r0.open.set(false)); });
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(6, "svg", 6);
    i0.ɵɵelementEnd()();
    i0.ɵɵconditionalCreate(7, FilterPopoverComponent_Conditional_6_Conditional_7_Template, 8, 0)(8, FilterPopoverComponent_Conditional_6_Conditional_8_Template, 3, 0, "div", 7);
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(9, "footer")(10, "button", 8);
    i0.ɵɵlistener("click", function FilterPopoverComponent_Conditional_6_Template_button_click_10_listener() { i0.ɵɵrestoreView(_r2); const ctx_r0 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r0.reset()); });
    i0.ɵɵtext(11, " Clear all ");
    i0.ɵɵelementEnd();
    i0.ɵɵconditionalCreate(12, FilterPopoverComponent_Conditional_6_Conditional_12_Template, 5, 0, "span", 9);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵproperty("id", ctx_r0.panelId);
    i0.ɵɵattribute("aria-label", ctx_r0.label());
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(ctx_r0.label());
    i0.ɵɵadvance(3);
    i0.ɵɵconditional(ctx_r0.fields().length ? 7 : 8);
    i0.ɵɵadvance(5);
    i0.ɵɵconditional(ctx_r0.fields().length ? 12 : -1);
} }
let nextFilterPopoverId = 0;
export class FilterPopoverComponent {
    label = input('Filters', ...(ngDevMode ? [{ debugName: "label" }] : /* istanbul ignore next */ []));
    value = input('all', ...(ngDevMode ? [{ debugName: "value" }] : /* istanbul ignore next */ []));
    resetValue = input('all', ...(ngDevMode ? [{ debugName: "resetValue" }] : /* istanbul ignore next */ []));
    options = input([], ...(ngDevMode ? [{ debugName: "options" }] : /* istanbul ignore next */ []));
    fields = input([], ...(ngDevMode ? [{ debugName: "fields" }] : /* istanbul ignore next */ []));
    values = input({}, ...(ngDevMode ? [{ debugName: "values" }] : /* istanbul ignore next */ []));
    valueChange = output();
    filtersChange = output();
    open = signal(false, ...(ngDevMode ? [{ debugName: "open" }] : /* istanbul ignore next */ []));
    draftValues = signal({}, ...(ngDevMode ? [{ debugName: "draftValues" }] : /* istanbul ignore next */ []));
    activeCount = computed(() => this.fields().length
        ? Object.values(this.values()).filter((value) => String(value || '').trim()).length
        : this.value() !== this.resetValue()
            ? 1
            : 0, ...(ngDevMode ? [{ debugName: "activeCount" }] : /* istanbul ignore next */ []));
    panelId = `erp-filter-popover-${++nextFilterPopoverId}`;
    select(value) {
        this.valueChange.emit(value);
        this.open.set(false);
    }
    toggle() {
        if (!this.open())
            this.draftValues.set({ ...this.values() });
        this.open.update((current) => !current);
    }
    updateDraft(id, value) {
        this.draftValues.update((current) => ({ ...current, [id]: value }));
    }
    apply() {
        this.filtersChange.emit(Object.fromEntries(Object.entries(this.draftValues()).map(([key, value]) => [key, String(value || '').trim()])));
        this.open.set(false);
    }
    reset() {
        if (!this.fields().length) {
            this.select(this.resetValue());
            return;
        }
        const cleared = Object.fromEntries(this.fields().map((field) => [field.id, '']));
        this.draftValues.set(cleared);
        this.filtersChange.emit(cleared);
        this.open.set(false);
    }
    close() {
        this.open.set(false);
    }
    static ɵfac = function FilterPopoverComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || FilterPopoverComponent)(); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: FilterPopoverComponent, selectors: [["erp-filter-popover"]], hostBindings: function FilterPopoverComponent_HostBindings(rf, ctx) { if (rf & 1) {
            i0.ɵɵlistener("keydown.escape", function FilterPopoverComponent_keydown_escape_HostBindingHandler() { return ctx.close(); }, i0.ɵɵresolveDocument);
        } }, inputs: { label: [1, "label"], value: [1, "value"], resetValue: [1, "resetValue"], options: [1, "options"], fields: [1, "fields"], values: [1, "values"] }, outputs: { valueChange: "valueChange", filtersChange: "filtersChange" }, decls: 7, vars: 7, consts: [[1, "filter-popover"], ["type", "button", 1, "erp-button", "erp-button--secondary", "erp-button--compact", "filter-popover__trigger", 3, "click"], ["lucideFilter", "", "size", "15", "aria-hidden", "true"], ["type", "button", "tabindex", "-1", "aria-label", "Close filters", 1, "filter-popover__backdrop", 3, "click"], ["role", "dialog", "aria-modal", "true", 1, "filter-popover__panel", 3, "id"], ["type", "button", "aria-label", "Close filters", 3, "click"], ["lucideX", "", "size", "16", "aria-hidden", "true"], [1, "filter-popover__options"], ["type", "button", 1, "erp-button", "erp-button--ghost", "erp-button--compact", 3, "click"], [1, "filter-popover__footer-actions"], [1, "filter-popover__intro"], [1, "filter-popover__fields"], [3, "for"], [1, "erp-control", 3, "id", "ngModel"], ["type", "text", 1, "erp-control", 3, "id", "placeholder", "ngModel"], [1, "erp-control", 3, "ngModelChange", "id", "ngModel"], ["value", ""], [3, "value"], ["type", "text", 1, "erp-control", 3, "ngModelChange", "keydown.enter", "id", "placeholder", "ngModel"], ["type", "button", 3, "is-active"], ["type", "button", 3, "click"], ["lucideCheck", "", "size", "16", "aria-hidden", "true"], ["type", "button", 1, "erp-button", "erp-button--secondary", "erp-button--compact", 3, "click"], ["type", "button", 1, "erp-button", "erp-button--primary", "erp-button--compact", 3, "click"]], template: function FilterPopoverComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0)(1, "button", 1);
            i0.ɵɵlistener("click", function FilterPopoverComponent_Template_button_click_1_listener() { return ctx.toggle(); });
            i0.ɵɵnamespaceSVG();
            i0.ɵɵelement(2, "svg", 2);
            i0.ɵɵnamespaceHTML();
            i0.ɵɵelementStart(3, "span");
            i0.ɵɵtext(4);
            i0.ɵɵelementEnd();
            i0.ɵɵconditionalCreate(5, FilterPopoverComponent_Conditional_5_Template, 2, 1, "small");
            i0.ɵɵelementEnd();
            i0.ɵɵconditionalCreate(6, FilterPopoverComponent_Conditional_6_Template, 13, 5);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵadvance();
            i0.ɵɵclassProp("is-active", ctx.activeCount() > 0);
            i0.ɵɵattribute("aria-controls", ctx.panelId)("aria-expanded", ctx.open());
            i0.ɵɵadvance(3);
            i0.ɵɵtextInterpolate(ctx.label());
            i0.ɵɵadvance();
            i0.ɵɵconditional(ctx.activeCount() ? 5 : -1);
            i0.ɵɵadvance();
            i0.ɵɵconditional(ctx.open() ? 6 : -1);
        } }, dependencies: [FormsModule, i1.NgSelectOption, i1.ɵNgSelectMultipleOption, i1.DefaultValueAccessor, i1.SelectControlValueAccessor, i1.NgControlStatus, i1.NgModel, LucideCheck, LucideFilter, LucideX], styles: ["\n[_nghost-%COMP%] {\n  display: inline-block;\n}\n\n.filter-popover[_ngcontent-%COMP%] {\n  position: relative;\n}\n\n.filter-popover__trigger.is-active[_ngcontent-%COMP%] {\n  color: var(--erp-blue-700);\n  background: var(--erp-blue-50);\n  border-color: var(--erp-blue-200);\n}\n\n.filter-popover__trigger[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  display: inline-grid;\n  min-width: 18px;\n  height: 18px;\n  place-items: center;\n  border-radius: var(--erp-radius-pill);\n  color: var(--erp-text-on-primary);\n  background: var(--erp-blue-600);\n  font-size: var(--erp-font-size-2xs);\n}\n\n.filter-popover__backdrop[_ngcontent-%COMP%] {\n  position: fixed;\n  z-index: var(--erp-z-dropdown);\n  inset: 0;\n  padding: 0;\n  border: 0;\n  background: transparent;\n}\n\n.filter-popover__panel[_ngcontent-%COMP%] {\n  position: absolute;\n  display: flex;\n  flex-direction: column;\n  z-index: calc(var(--erp-z-dropdown) + 1);\n  top: calc(100% + var(--erp-space-2));\n  right: 0;\n  width: min(var(--erp-filter-popover-width), calc(100vw - 24px));\n  max-height: min(var(--erp-filter-popover-max-height), calc(100dvh - var(--erp-space-10)));\n  overflow: hidden;\n  border: 1px solid var(--erp-border-default);\n  border-radius: var(--erp-radius-overlay);\n  background: var(--erp-surface-overlay);\n  box-shadow: var(--erp-shadow-overlay);\n}\n\n.filter-popover__panel[_ngcontent-%COMP%]:not(:has(.filter-popover__fields)) {\n  width: min(260px, calc(100vw - 24px));\n}\n\n.filter-popover__panel[_ngcontent-%COMP%]   header[_ngcontent-%COMP%], \n.filter-popover__panel[_ngcontent-%COMP%]   footer[_ngcontent-%COMP%] {\n  display: flex;\n  min-height: 42px;\n  align-items: center;\n  justify-content: space-between;\n  gap: var(--erp-space-2);\n  padding: var(--erp-space-2) var(--erp-space-3);\n  flex: 0 0 auto;\n}\n\n.filter-popover__panel[_ngcontent-%COMP%]   header[_ngcontent-%COMP%] {\n  border-bottom: 1px solid var(--erp-border-subtle);\n}\n\n.filter-popover__panel[_ngcontent-%COMP%]   header[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: var(--erp-text-heading);\n  font-size: var(--erp-font-label);\n}\n\n.filter-popover__panel[_ngcontent-%COMP%]   header[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  display: inline-grid;\n  width: 28px;\n  height: 28px;\n  place-items: center;\n  padding: 0;\n  border: 0;\n  border-radius: var(--erp-radius-control);\n  color: var(--erp-text-muted);\n  background: transparent;\n}\n\n.filter-popover__options[_ngcontent-%COMP%] {\n  display: grid;\n  gap: var(--erp-space-1);\n  padding: var(--erp-space-2);\n}\n\n.filter-popover__intro[_ngcontent-%COMP%] {\n  display: grid;\n  gap: var(--erp-space-1);\n  padding: var(--erp-space-3) var(--erp-space-4) var(--erp-space-1);\n}\n\n.filter-popover__intro[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%], \n.filter-popover__fields[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  color: var(--erp-text-heading);\n  font-size: var(--erp-font-label);\n  font-weight: var(--erp-weight-semibold);\n}\n\n.filter-popover__intro[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: var(--erp-text-muted);\n  font-size: var(--erp-font-caption);\n}\n\n.filter-popover__fields[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, minmax(0, 1fr));\n  gap: var(--erp-space-3) var(--erp-space-3);\n  max-height: min(55vh, 420px);\n  overflow-y: auto;\n  padding: var(--erp-space-3) var(--erp-space-4) var(--erp-space-4);\n  min-height: 0;\n  flex: 1 1 auto;\n}\n\n.filter-popover__fields[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: grid;\n  gap: var(--erp-space-1);\n  min-width: 0;\n}\n\n.filter-popover__fields[_ngcontent-%COMP%]   .erp-control[_ngcontent-%COMP%] {\n  width: 100%;\n  min-height: var(--erp-control-height-compact);\n  padding: 5px 9px;\n  font-size: var(--erp-font-size-xs);\n}\n\n.filter-popover__footer-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: var(--erp-space-2);\n}\n\n@media (max-width: 520px) {\n  .filter-popover__panel[_ngcontent-%COMP%] {\n    position: fixed;\n    inset: auto var(--erp-space-3) var(--erp-space-3);\n    width: auto;\n  }\n\n  .filter-popover__fields[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n\n@media (max-width: 760px) {\n  .filter-popover__fields[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n  }\n}\n\n@media (max-width: 520px) {\n  .filter-popover__fields[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n\n.filter-popover__options[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  display: flex;\n  min-height: 36px;\n  align-items: center;\n  justify-content: space-between;\n  gap: var(--erp-space-2);\n  padding: 0 var(--erp-space-2);\n  border: 1px solid transparent;\n  border-radius: var(--erp-radius-control);\n  color: var(--erp-text-body);\n  background: transparent;\n  font-size: var(--erp-font-size-xs);\n  text-align: left;\n}\n\n.filter-popover__options[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover, \n.filter-popover__options[_ngcontent-%COMP%]   button.is-active[_ngcontent-%COMP%] {\n  color: var(--erp-blue-700);\n  background: var(--erp-blue-50);\n  border-color: var(--erp-blue-100);\n}\n\n.filter-popover__panel[_ngcontent-%COMP%]   footer[_ngcontent-%COMP%] {\n  justify-content: flex-end;\n  border-top: 1px solid var(--erp-border-subtle);\n}"], changeDetection: 0 });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(FilterPopoverComponent, [{
        type: Component,
        args: [{ selector: 'erp-filter-popover', imports: [FormsModule, LucideCheck, LucideFilter, LucideX], changeDetection: ChangeDetectionStrategy.OnPush, template: "<div class=\"filter-popover\">\n  <button\n    class=\"erp-button erp-button--secondary erp-button--compact filter-popover__trigger\"\n    type=\"button\"\n    [class.is-active]=\"activeCount() > 0\"\n    [attr.aria-controls]=\"panelId\"\n    [attr.aria-expanded]=\"open()\"\n    (click)=\"toggle()\"\n  >\n    <svg lucideFilter size=\"15\" aria-hidden=\"true\"></svg>\n    <span>{{ label() }}</span>\n    @if (activeCount()) {\n      <small>{{ activeCount() }}</small>\n    }\n  </button>\n\n  @if (open()) {\n    <button\n      class=\"filter-popover__backdrop\"\n      type=\"button\"\n      tabindex=\"-1\"\n      aria-label=\"Close filters\"\n      (click)=\"open.set(false)\"\n    ></button>\n    <section\n      class=\"filter-popover__panel\"\n      [id]=\"panelId\"\n      role=\"dialog\"\n      aria-modal=\"true\"\n      [attr.aria-label]=\"label()\"\n    >\n      <header>\n        <strong>{{ label() }}</strong>\n        <button type=\"button\" aria-label=\"Close filters\" (click)=\"open.set(false)\">\n          <svg lucideX size=\"16\" aria-hidden=\"true\"></svg>\n        </button>\n      </header>\n      @if (fields().length) {\n        <div class=\"filter-popover__intro\">\n          <strong>Refine results</strong>\n          <span>Use one or more fields to narrow this list.</span>\n        </div>\n        <div class=\"filter-popover__fields\">\n          @for (field of fields(); track field.id) {\n            <label [for]=\"'erp-filter-' + field.id\">\n              <span>{{ field.label }}</span>\n              @if (field.type === 'select') {\n                <select\n                  class=\"erp-control\"\n                  [id]=\"'erp-filter-' + field.id\"\n                  [ngModel]=\"draftValues()[field.id] || values()[field.id] || ''\"\n                  (ngModelChange)=\"updateDraft(field.id, $event)\"\n                >\n                  <option value=\"\">All {{ field.label.toLowerCase() }}</option>\n                  @for (option of field.options || []; track option.value) {\n                    <option [value]=\"option.value\">{{ option.label }}</option>\n                  }\n                </select>\n              } @else {\n                <input\n                  class=\"erp-control\"\n                  [id]=\"'erp-filter-' + field.id\"\n                  type=\"text\"\n                  [placeholder]=\"field.placeholder || 'Enter ' + field.label.toLowerCase()\"\n                  [ngModel]=\"draftValues()[field.id] || values()[field.id] || ''\"\n                  (ngModelChange)=\"updateDraft(field.id, $event)\"\n                  (keydown.enter)=\"apply()\"\n                />\n              }\n            </label>\n          }\n        </div>\n      } @else {\n        <div class=\"filter-popover__options\">\n          @for (option of options(); track option.value) {\n          <button\n            type=\"button\"\n            [class.is-active]=\"value() === option.value\"\n            (click)=\"select(option.value)\"\n          >\n            <span>{{ option.label }}</span>\n            @if (value() === option.value) {\n              <svg lucideCheck size=\"16\" aria-hidden=\"true\"></svg>\n            }\n          </button>\n          }\n        </div>\n      }\n      <footer>\n        <button\n          class=\"erp-button erp-button--ghost erp-button--compact\"\n          type=\"button\"\n          (click)=\"reset()\"\n        >\n          Clear all\n        </button>\n        @if (fields().length) {\n          <span class=\"filter-popover__footer-actions\">\n            <button class=\"erp-button erp-button--secondary erp-button--compact\" type=\"button\" (click)=\"open.set(false)\">Cancel</button>\n            <button class=\"erp-button erp-button--primary erp-button--compact\" type=\"button\" (click)=\"apply()\">Apply filters</button>\n          </span>\n        }\n      </footer>\n    </section>\n  }\n</div>\n", styles: ["/* ERP-LOCAL-STYLE: Reusable compact filter trigger owns its anchored popover geometry and dismissal layer. */\n:host {\n  display: inline-block;\n}\n\n.filter-popover {\n  position: relative;\n}\n\n.filter-popover__trigger.is-active {\n  color: var(--erp-blue-700);\n  background: var(--erp-blue-50);\n  border-color: var(--erp-blue-200);\n}\n\n.filter-popover__trigger small {\n  display: inline-grid;\n  min-width: 18px;\n  height: 18px;\n  place-items: center;\n  border-radius: var(--erp-radius-pill);\n  color: var(--erp-text-on-primary);\n  background: var(--erp-blue-600);\n  font-size: var(--erp-font-size-2xs);\n}\n\n.filter-popover__backdrop {\n  position: fixed;\n  z-index: var(--erp-z-dropdown);\n  inset: 0;\n  padding: 0;\n  border: 0;\n  background: transparent;\n}\n\n.filter-popover__panel {\n  position: absolute;\n  display: flex;\n  flex-direction: column;\n  z-index: calc(var(--erp-z-dropdown) + 1);\n  top: calc(100% + var(--erp-space-2));\n  right: 0;\n  width: min(var(--erp-filter-popover-width), calc(100vw - 24px));\n  max-height: min(var(--erp-filter-popover-max-height), calc(100dvh - var(--erp-space-10)));\n  overflow: hidden;\n  border: 1px solid var(--erp-border-default);\n  border-radius: var(--erp-radius-overlay);\n  background: var(--erp-surface-overlay);\n  box-shadow: var(--erp-shadow-overlay);\n}\n\n.filter-popover__panel:not(:has(.filter-popover__fields)) {\n  width: min(260px, calc(100vw - 24px));\n}\n\n.filter-popover__panel header,\n.filter-popover__panel footer {\n  display: flex;\n  min-height: 42px;\n  align-items: center;\n  justify-content: space-between;\n  gap: var(--erp-space-2);\n  padding: var(--erp-space-2) var(--erp-space-3);\n  flex: 0 0 auto;\n}\n\n.filter-popover__panel header {\n  border-bottom: 1px solid var(--erp-border-subtle);\n}\n\n.filter-popover__panel header strong {\n  color: var(--erp-text-heading);\n  font-size: var(--erp-font-label);\n}\n\n.filter-popover__panel header button {\n  display: inline-grid;\n  width: 28px;\n  height: 28px;\n  place-items: center;\n  padding: 0;\n  border: 0;\n  border-radius: var(--erp-radius-control);\n  color: var(--erp-text-muted);\n  background: transparent;\n}\n\n.filter-popover__options {\n  display: grid;\n  gap: var(--erp-space-1);\n  padding: var(--erp-space-2);\n}\n\n.filter-popover__intro {\n  display: grid;\n  gap: var(--erp-space-1);\n  padding: var(--erp-space-3) var(--erp-space-4) var(--erp-space-1);\n}\n\n.filter-popover__intro strong,\n.filter-popover__fields label > span {\n  color: var(--erp-text-heading);\n  font-size: var(--erp-font-label);\n  font-weight: var(--erp-weight-semibold);\n}\n\n.filter-popover__intro span {\n  color: var(--erp-text-muted);\n  font-size: var(--erp-font-caption);\n}\n\n.filter-popover__fields {\n  display: grid;\n  grid-template-columns: repeat(3, minmax(0, 1fr));\n  gap: var(--erp-space-3) var(--erp-space-3);\n  max-height: min(55vh, 420px);\n  overflow-y: auto;\n  padding: var(--erp-space-3) var(--erp-space-4) var(--erp-space-4);\n  min-height: 0;\n  flex: 1 1 auto;\n}\n\n.filter-popover__fields label {\n  display: grid;\n  gap: var(--erp-space-1);\n  min-width: 0;\n}\n\n.filter-popover__fields .erp-control {\n  width: 100%;\n  min-height: var(--erp-control-height-compact);\n  padding: 5px 9px;\n  font-size: var(--erp-font-size-xs);\n}\n\n.filter-popover__footer-actions {\n  display: flex;\n  gap: var(--erp-space-2);\n}\n\n@media (max-width: 520px) {\n  .filter-popover__panel {\n    position: fixed;\n    inset: auto var(--erp-space-3) var(--erp-space-3);\n    width: auto;\n  }\n\n  .filter-popover__fields {\n    grid-template-columns: 1fr;\n  }\n}\n\n@media (max-width: 760px) {\n  .filter-popover__fields {\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n  }\n}\n\n@media (max-width: 520px) {\n  .filter-popover__fields {\n    grid-template-columns: 1fr;\n  }\n}\n\n.filter-popover__options button {\n  display: flex;\n  min-height: 36px;\n  align-items: center;\n  justify-content: space-between;\n  gap: var(--erp-space-2);\n  padding: 0 var(--erp-space-2);\n  border: 1px solid transparent;\n  border-radius: var(--erp-radius-control);\n  color: var(--erp-text-body);\n  background: transparent;\n  font-size: var(--erp-font-size-xs);\n  text-align: left;\n}\n\n.filter-popover__options button:hover,\n.filter-popover__options button.is-active {\n  color: var(--erp-blue-700);\n  background: var(--erp-blue-50);\n  border-color: var(--erp-blue-100);\n}\n\n.filter-popover__panel footer {\n  justify-content: flex-end;\n  border-top: 1px solid var(--erp-border-subtle);\n}\n"] }]
    }], null, { label: [{ type: i0.Input, args: [{ isSignal: true, alias: "label", required: false }] }], value: [{ type: i0.Input, args: [{ isSignal: true, alias: "value", required: false }] }], resetValue: [{ type: i0.Input, args: [{ isSignal: true, alias: "resetValue", required: false }] }], options: [{ type: i0.Input, args: [{ isSignal: true, alias: "options", required: false }] }], fields: [{ type: i0.Input, args: [{ isSignal: true, alias: "fields", required: false }] }], values: [{ type: i0.Input, args: [{ isSignal: true, alias: "values", required: false }] }], valueChange: [{ type: i0.Output, args: ["valueChange"] }], filtersChange: [{ type: i0.Output, args: ["filtersChange"] }], close: [{
            type: HostListener,
            args: ['document:keydown.escape']
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(FilterPopoverComponent, { className: "FilterPopoverComponent", filePath: "frontend/src/app/shared/ui/filter-popover/filter-popover.component.ts", lineNumber: 35 }); })();
