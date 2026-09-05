import { ChangeDetectionStrategy, Component, computed, input, output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UploadFieldComponent } from '../upload-field/upload-field.component';
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
const _c0 = () => ["file", "image", "signature"];
const _forTrack0 = ($index, $item) => $item._id;
const _forTrack1 = ($index, $item) => $item.value;
function DynamicFieldRendererComponent_Conditional_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "b", 7);
    i0.ɵɵtext(1, "*");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(2, "span", 8);
    i0.ɵɵtext(3, "required");
    i0.ɵɵelementEnd();
} }
function DynamicFieldRendererComponent_Conditional_3_Template(rf, ctx) { if (rf & 1) {
    const _r1 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "textarea", 9);
    i0.ɵɵlistener("ngModelChange", function DynamicFieldRendererComponent_Conditional_3_Template_textarea_ngModelChange_0_listener($event) { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.modelChanged.emit($event)); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵproperty("id", ctx_r1.controlId())("placeholder", ctx_r1.field().placeholder)("ngModel", ctx_r1.modelValue());
    i0.ɵɵattribute("aria-label", ctx_r1.field().name);
} }
function DynamicFieldRendererComponent_Conditional_4_Conditional_0_Template(rf, ctx) { if (rf & 1) {
    const _r4 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "input", 13);
    i0.ɵɵlistener("input", function DynamicFieldRendererComponent_Conditional_4_Conditional_0_Template_input_input_0_listener($event) { i0.ɵɵrestoreView(_r4); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.requestSearch($event)); });
    i0.ɵɵelementEnd();
} }
function DynamicFieldRendererComponent_Conditional_4_Conditional_4_For_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 14);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const option_r5 = ctx.$implicit;
    i0.ɵɵproperty("value", option_r5._id);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(option_r5.label || option_r5.name);
} }
function DynamicFieldRendererComponent_Conditional_4_Conditional_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵrepeaterCreate(0, DynamicFieldRendererComponent_Conditional_4_Conditional_4_For_1_Template, 2, 2, "option", 14, _forTrack0);
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵrepeater(ctx_r1.options());
} }
function DynamicFieldRendererComponent_Conditional_4_Conditional_5_For_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 14);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const option_r6 = ctx.$implicit;
    i0.ɵɵproperty("value", option_r6.value);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(option_r6.label);
} }
function DynamicFieldRendererComponent_Conditional_4_Conditional_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵrepeaterCreate(0, DynamicFieldRendererComponent_Conditional_4_Conditional_5_For_1_Template, 2, 2, "option", 14, _forTrack1);
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵrepeater(ctx_r1.field().options);
} }
function DynamicFieldRendererComponent_Conditional_4_Template(rf, ctx) { if (rf & 1) {
    const _r3 = i0.ɵɵgetCurrentView();
    i0.ɵɵconditionalCreate(0, DynamicFieldRendererComponent_Conditional_4_Conditional_0_Template, 1, 0, "input", 10);
    i0.ɵɵelementStart(1, "select", 11);
    i0.ɵɵlistener("ngModelChange", function DynamicFieldRendererComponent_Conditional_4_Template_select_ngModelChange_1_listener($event) { i0.ɵɵrestoreView(_r3); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.modelChanged.emit($event)); });
    i0.ɵɵelementStart(2, "option", 12);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵconditionalCreate(4, DynamicFieldRendererComponent_Conditional_4_Conditional_4_Template, 2, 0)(5, DynamicFieldRendererComponent_Conditional_4_Conditional_5_Template, 2, 0);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵconditional(ctx_r1.field().searchable ? 0 : -1);
    i0.ɵɵadvance();
    i0.ɵɵproperty("id", ctx_r1.controlId())("ngModel", ctx_r1.modelValue());
    i0.ɵɵattribute("aria-label", ctx_r1.field().name);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1("Select ", ctx_r1.field().name);
    i0.ɵɵadvance();
    i0.ɵɵconditional(ctx_r1.field().dataSource ? 4 : 5);
} }
function DynamicFieldRendererComponent_Conditional_5_Conditional_0_Template(rf, ctx) { if (rf & 1) {
    const _r8 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "input", 13);
    i0.ɵɵlistener("input", function DynamicFieldRendererComponent_Conditional_5_Conditional_0_Template_input_input_0_listener($event) { i0.ɵɵrestoreView(_r8); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.requestSearch($event)); });
    i0.ɵɵelementEnd();
} }
function DynamicFieldRendererComponent_Conditional_5_Conditional_2_For_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 14);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const option_r9 = ctx.$implicit;
    i0.ɵɵproperty("value", option_r9._id);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(option_r9.label || option_r9.name);
} }
function DynamicFieldRendererComponent_Conditional_5_Conditional_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵrepeaterCreate(0, DynamicFieldRendererComponent_Conditional_5_Conditional_2_For_1_Template, 2, 2, "option", 14, _forTrack0);
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵrepeater(ctx_r1.options());
} }
function DynamicFieldRendererComponent_Conditional_5_Conditional_3_For_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 14);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const option_r10 = ctx.$implicit;
    i0.ɵɵproperty("value", option_r10.value);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(option_r10.label);
} }
function DynamicFieldRendererComponent_Conditional_5_Conditional_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵrepeaterCreate(0, DynamicFieldRendererComponent_Conditional_5_Conditional_3_For_1_Template, 2, 2, "option", 14, _forTrack1);
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵrepeater(ctx_r1.field().options);
} }
function DynamicFieldRendererComponent_Conditional_5_Template(rf, ctx) { if (rf & 1) {
    const _r7 = i0.ɵɵgetCurrentView();
    i0.ɵɵconditionalCreate(0, DynamicFieldRendererComponent_Conditional_5_Conditional_0_Template, 1, 0, "input", 10);
    i0.ɵɵelementStart(1, "select", 15);
    i0.ɵɵlistener("ngModelChange", function DynamicFieldRendererComponent_Conditional_5_Template_select_ngModelChange_1_listener($event) { i0.ɵɵrestoreView(_r7); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.modelChanged.emit($event)); });
    i0.ɵɵconditionalCreate(2, DynamicFieldRendererComponent_Conditional_5_Conditional_2_Template, 2, 0)(3, DynamicFieldRendererComponent_Conditional_5_Conditional_3_Template, 2, 0);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵconditional(ctx_r1.field().searchable ? 0 : -1);
    i0.ɵɵadvance();
    i0.ɵɵproperty("id", ctx_r1.controlId())("ngModel", ctx_r1.modelValue());
    i0.ɵɵattribute("aria-label", ctx_r1.field().name);
    i0.ɵɵadvance();
    i0.ɵɵconditional(ctx_r1.field().dataSource ? 2 : 3);
} }
function DynamicFieldRendererComponent_Conditional_6_For_2_Template(rf, ctx) { if (rf & 1) {
    const _r11 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "label")(1, "input", 16);
    i0.ɵɵlistener("ngModelChange", function DynamicFieldRendererComponent_Conditional_6_For_2_Template_input_ngModelChange_1_listener($event) { i0.ɵɵrestoreView(_r11); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.modelChanged.emit($event)); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(2, "span");
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const option_r12 = ctx.$implicit;
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵproperty("name", ctx_r1.field().id + "-" + ctx_r1.entryKey())("value", option_r12.value)("ngModel", ctx_r1.modelValue());
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(option_r12.label);
} }
function DynamicFieldRendererComponent_Conditional_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 2);
    i0.ɵɵrepeaterCreate(1, DynamicFieldRendererComponent_Conditional_6_For_2_Template, 4, 4, "label", null, _forTrack1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵattribute("aria-label", ctx_r1.field().name);
    i0.ɵɵadvance();
    i0.ɵɵrepeater(ctx_r1.field().options);
} }
function DynamicFieldRendererComponent_Conditional_7_For_2_Template(rf, ctx) { if (rf & 1) {
    const _r13 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "label")(1, "input", 17);
    i0.ɵɵlistener("change", function DynamicFieldRendererComponent_Conditional_7_For_2_Template_input_change_1_listener($event) { const option_r14 = i0.ɵɵrestoreView(_r13).$implicit; const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.toggleChoice(option_r14.value, $event.target.checked)); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(2, "span");
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const option_r14 = ctx.$implicit;
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵproperty("checked", ctx_r1.isChecked(option_r14.value));
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(option_r14.label);
} }
function DynamicFieldRendererComponent_Conditional_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 3);
    i0.ɵɵrepeaterCreate(1, DynamicFieldRendererComponent_Conditional_7_For_2_Template, 4, 2, "label", null, _forTrack1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵattribute("aria-label", ctx_r1.field().name);
    i0.ɵɵadvance();
    i0.ɵɵrepeater(ctx_r1.field().options);
} }
function DynamicFieldRendererComponent_Conditional_8_Template(rf, ctx) { if (rf & 1) {
    const _r15 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "erp-upload-field", 18);
    i0.ɵɵlistener("fileSelected", function DynamicFieldRendererComponent_Conditional_8_Template_erp_upload_field_fileSelected_0_listener($event) { i0.ɵɵrestoreView(_r15); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.fileSelected.emit($event)); })("removed", function DynamicFieldRendererComponent_Conditional_8_Template_erp_upload_field_removed_0_listener() { i0.ɵɵrestoreView(_r15); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.uploadRemoved.emit()); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵproperty("field", ctx_r1.field())("value", ctx_r1.modelValue());
} }
function DynamicFieldRendererComponent_Conditional_9_Template(rf, ctx) { if (rf & 1) {
    const _r16 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "input", 19);
    i0.ɵɵlistener("ngModelChange", function DynamicFieldRendererComponent_Conditional_9_Template_input_ngModelChange_0_listener($event) { i0.ɵɵrestoreView(_r16); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.modelChanged.emit($event)); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵproperty("id", ctx_r1.controlId())("type", ctx_r1.field().type === "mobile" ? "tel" : ctx_r1.field().type)("placeholder", ctx_r1.field().placeholder)("ngModel", ctx_r1.modelValue());
    i0.ɵɵattribute("aria-label", ctx_r1.field().name)("min", ctx_r1.field().validation.min)("max", ctx_r1.field().validation.max)("minlength", ctx_r1.field().validation.minLength)("maxlength", ctx_r1.field().validation.maxLength)("pattern", ctx_r1.field().validation.pattern || null);
} }
function DynamicFieldRendererComponent_Conditional_10_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "small", 6);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r1.field().helpText);
} }
export class DynamicFieldRendererComponent {
    field = input.required(...(ngDevMode ? [{ debugName: "field" }] : /* istanbul ignore next */ []));
    modelValue = input(...(ngDevMode ? [undefined, { debugName: "modelValue" }] : /* istanbul ignore next */ []));
    options = input([], ...(ngDevMode ? [{ debugName: "options" }] : /* istanbul ignore next */ []));
    entryKey = input('single', ...(ngDevMode ? [{ debugName: "entryKey" }] : /* istanbul ignore next */ []));
    modelChanged = output();
    optionSearch = output();
    fileSelected = output();
    uploadRemoved = output();
    wide = computed(() => this.field().type === 'textarea', ...(ngDevMode ? [{ debugName: "wide" }] : /* istanbul ignore next */ []));
    controlId = computed(() => `field-${this.field().id}-${this.entryKey()}`, ...(ngDevMode ? [{ debugName: "controlId" }] : /* istanbul ignore next */ []));
    isChecked(option) {
        const current = this.modelValue();
        return Array.isArray(current) && current.includes(option);
    }
    toggleChoice(option, checked) {
        const value = this.modelValue();
        const current = Array.isArray(value) ? [...value] : [];
        const next = checked
            ? [...new Set([...current, option])]
            : current.filter((value) => value !== option);
        this.modelChanged.emit(next);
    }
    requestSearch(event) {
        this.optionSearch.emit(event.target.value);
    }
    static ɵfac = function DynamicFieldRendererComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || DynamicFieldRendererComponent)(); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: DynamicFieldRendererComponent, selectors: [["erp-dynamic-field-renderer"]], hostAttrs: [1, "erp-dynamic-field"], hostVars: 2, hostBindings: function DynamicFieldRendererComponent_HostBindings(rf, ctx) { if (rf & 2) {
            i0.ɵɵclassProp("erp-dynamic-field--wide", ctx.wide());
        } }, inputs: { field: [1, "field"], modelValue: [1, "modelValue"], options: [1, "options"], entryKey: [1, "entryKey"] }, outputs: { modelChanged: "modelChanged", optionSearch: "optionSearch", fileSelected: "fileSelected", uploadRemoved: "uploadRemoved" }, decls: 11, vars: 5, consts: [[1, "erp-dynamic-field__label"], ["rows", "4", 3, "id", "placeholder", "ngModel"], ["role", "radiogroup", 1, "erp-choice-group"], [1, "erp-choice-group"], [3, "field", "value"], [3, "id", "type", "placeholder", "ngModel"], [1, "erp-dynamic-field__help"], ["aria-hidden", "true"], [1, "erp-sr-only"], ["rows", "4", 3, "ngModelChange", "id", "placeholder", "ngModel"], ["type", "search", "placeholder", "Search options...", "aria-label", "Search options", 1, "erp-dynamic-field__option-search"], [3, "ngModelChange", "id", "ngModel"], ["value", ""], ["type", "search", "placeholder", "Search options...", "aria-label", "Search options", 1, "erp-dynamic-field__option-search", 3, "input"], [3, "value"], ["multiple", "", 3, "ngModelChange", "id", "ngModel"], ["type", "radio", 3, "ngModelChange", "name", "value", "ngModel"], ["type", "checkbox", 3, "change", "checked"], [3, "fileSelected", "removed", "field", "value"], [3, "ngModelChange", "id", "type", "placeholder", "ngModel"]], template: function DynamicFieldRendererComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "span", 0);
            i0.ɵɵtext(1);
            i0.ɵɵconditionalCreate(2, DynamicFieldRendererComponent_Conditional_2_Template, 4, 0);
            i0.ɵɵelementEnd();
            i0.ɵɵconditionalCreate(3, DynamicFieldRendererComponent_Conditional_3_Template, 1, 4, "textarea", 1)(4, DynamicFieldRendererComponent_Conditional_4_Template, 6, 6)(5, DynamicFieldRendererComponent_Conditional_5_Template, 4, 5)(6, DynamicFieldRendererComponent_Conditional_6_Template, 3, 1, "div", 2)(7, DynamicFieldRendererComponent_Conditional_7_Template, 3, 1, "div", 3)(8, DynamicFieldRendererComponent_Conditional_8_Template, 1, 2, "erp-upload-field", 4)(9, DynamicFieldRendererComponent_Conditional_9_Template, 1, 10, "input", 5);
            i0.ɵɵconditionalCreate(10, DynamicFieldRendererComponent_Conditional_10_Template, 2, 1, "small", 6);
        } if (rf & 2) {
            i0.ɵɵadvance();
            i0.ɵɵtextInterpolate1(" ", ctx.field().name, " ");
            i0.ɵɵadvance();
            i0.ɵɵconditional(ctx.field().isRequired ? 2 : -1);
            i0.ɵɵadvance();
            i0.ɵɵconditional(ctx.field().type === "textarea" ? 3 : ctx.field().type === "dropdown" ? 4 : ctx.field().type === "multi-select" ? 5 : ctx.field().type === "radio" ? 6 : ctx.field().type === "checkbox" ? 7 : i0.ɵɵpureFunction0(4, _c0).includes(ctx.field().type) ? 8 : 9);
            i0.ɵɵadvance(7);
            i0.ɵɵconditional(ctx.field().helpText ? 10 : -1);
        } }, dependencies: [FormsModule, i1.NgSelectOption, i1.ɵNgSelectMultipleOption, i1.DefaultValueAccessor, i1.SelectControlValueAccessor, i1.SelectMultipleControlValueAccessor, i1.RadioControlValueAccessor, i1.NgControlStatus, i1.NgModel, UploadFieldComponent], encapsulation: 2, changeDetection: 0 });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(DynamicFieldRendererComponent, [{
        type: Component,
        args: [{ selector: 'erp-dynamic-field-renderer', imports: [FormsModule, UploadFieldComponent], changeDetection: ChangeDetectionStrategy.OnPush, host: {
                    class: 'erp-dynamic-field',
                    '[class.erp-dynamic-field--wide]': 'wide()',
                }, template: "<span class=\"erp-dynamic-field__label\">\n  {{ field().name }}\n  @if (field().isRequired) {\n    <b aria-hidden=\"true\">*</b>\n    <span class=\"erp-sr-only\">required</span>\n  }\n</span>\n\n@if (field().type === 'textarea') {\n  <textarea\n    [id]=\"controlId()\"\n    [attr.aria-label]=\"field().name\"\n    rows=\"4\"\n    [placeholder]=\"field().placeholder\"\n    [ngModel]=\"modelValue()\"\n    (ngModelChange)=\"modelChanged.emit($event)\"\n  ></textarea>\n} @else if (field().type === 'dropdown') {\n  @if (field().searchable) {\n    <input\n      class=\"erp-dynamic-field__option-search\"\n      type=\"search\"\n      placeholder=\"Search options...\"\n      aria-label=\"Search options\"\n      (input)=\"requestSearch($event)\"\n    />\n  }\n  <select\n    [id]=\"controlId()\"\n    [attr.aria-label]=\"field().name\"\n    [ngModel]=\"modelValue()\"\n    (ngModelChange)=\"modelChanged.emit($event)\"\n  >\n    <option value=\"\">Select {{ field().name }}</option>\n    @if (field().dataSource) {\n      @for (option of options(); track option._id) {\n        <option [value]=\"option._id\">{{ option.label || option.name }}</option>\n      }\n    } @else {\n      @for (option of field().options; track option.value) {\n        <option [value]=\"option.value\">{{ option.label }}</option>\n      }\n    }\n  </select>\n} @else if (field().type === 'multi-select') {\n  @if (field().searchable) {\n    <input\n      class=\"erp-dynamic-field__option-search\"\n      type=\"search\"\n      placeholder=\"Search options...\"\n      aria-label=\"Search options\"\n      (input)=\"requestSearch($event)\"\n    />\n  }\n  <select\n    multiple\n    [id]=\"controlId()\"\n    [attr.aria-label]=\"field().name\"\n    [ngModel]=\"modelValue()\"\n    (ngModelChange)=\"modelChanged.emit($event)\"\n  >\n    @if (field().dataSource) {\n      @for (option of options(); track option._id) {\n        <option [value]=\"option._id\">{{ option.label || option.name }}</option>\n      }\n    } @else {\n      @for (option of field().options; track option.value) {\n        <option [value]=\"option.value\">{{ option.label }}</option>\n      }\n    }\n  </select>\n} @else if (field().type === 'radio') {\n  <div class=\"erp-choice-group\" role=\"radiogroup\" [attr.aria-label]=\"field().name\">\n    @for (option of field().options; track option.value) {\n      <label>\n        <input\n          type=\"radio\"\n          [name]=\"field().id + '-' + entryKey()\"\n          [value]=\"option.value\"\n          [ngModel]=\"modelValue()\"\n          (ngModelChange)=\"modelChanged.emit($event)\"\n        />\n        <span>{{ option.label }}</span>\n      </label>\n    }\n  </div>\n} @else if (field().type === 'checkbox') {\n  <div class=\"erp-choice-group\" [attr.aria-label]=\"field().name\">\n    @for (option of field().options; track option.value) {\n      <label>\n        <input\n          type=\"checkbox\"\n          [checked]=\"isChecked(option.value)\"\n          (change)=\"toggleChoice(option.value, $any($event.target).checked)\"\n        />\n        <span>{{ option.label }}</span>\n      </label>\n    }\n  </div>\n} @else if (['file', 'image', 'signature'].includes(field().type)) {\n  <erp-upload-field\n    [field]=\"field()\"\n    [value]=\"modelValue()\"\n    (fileSelected)=\"fileSelected.emit($event)\"\n    (removed)=\"uploadRemoved.emit()\"\n  />\n} @else {\n  <input\n    [id]=\"controlId()\"\n    [attr.aria-label]=\"field().name\"\n    [type]=\"field().type === 'mobile' ? 'tel' : field().type\"\n    [placeholder]=\"field().placeholder\"\n    [ngModel]=\"modelValue()\"\n    (ngModelChange)=\"modelChanged.emit($event)\"\n    [attr.min]=\"field().validation.min\"\n    [attr.max]=\"field().validation.max\"\n    [attr.minlength]=\"field().validation.minLength\"\n    [attr.maxlength]=\"field().validation.maxLength\"\n    [attr.pattern]=\"field().validation.pattern || null\"\n  />\n}\n\n@if (field().helpText) {\n  <small class=\"erp-dynamic-field__help\">{{ field().helpText }}</small>\n}\n" }]
    }], null, { field: [{ type: i0.Input, args: [{ isSignal: true, alias: "field", required: true }] }], modelValue: [{ type: i0.Input, args: [{ isSignal: true, alias: "modelValue", required: false }] }], options: [{ type: i0.Input, args: [{ isSignal: true, alias: "options", required: false }] }], entryKey: [{ type: i0.Input, args: [{ isSignal: true, alias: "entryKey", required: false }] }], modelChanged: [{ type: i0.Output, args: ["modelChanged"] }], optionSearch: [{ type: i0.Output, args: ["optionSearch"] }], fileSelected: [{ type: i0.Output, args: ["fileSelected"] }], uploadRemoved: [{ type: i0.Output, args: ["uploadRemoved"] }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(DynamicFieldRendererComponent, { className: "DynamicFieldRendererComponent", filePath: "frontend/src/app/shared/ui/dynamic-field-renderer/dynamic-field-renderer.component.ts", lineNumber: 16 }); })();
