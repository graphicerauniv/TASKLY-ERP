import { ChangeDetectionStrategy, Component, input, output } from '@angular/core';
import { LucideGripVertical, LucideListTree, LucidePlus, LucideRows3, LucideTextCursorInput, } from '@lucide/angular';
import { CompactActionMenuComponent, } from '../../../../shared/ui/compact-action-menu/compact-action-menu.component';
import { FieldTypeIconComponent } from '../../../../shared/ui/field-type-icon/field-type-icon.component';
import * as i0 from "@angular/core";
const _forTrack0 = ($index, $item) => $item.id;
function FormCanvasComponent_Conditional_1_Conditional_13_Template(rf, ctx) { if (rf & 1) {
    const _r2 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 13);
    i0.ɵɵlistener("click", function FormCanvasComponent_Conditional_1_Conditional_13_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r2); const ctx_r2 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r2.structureRequested.emit()); });
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(1, "svg", 18);
    i0.ɵɵtext(2, " Structure ");
    i0.ɵɵelementEnd();
} }
function FormCanvasComponent_Conditional_1_For_29_Template(rf, ctx) { if (rf & 1) {
    const _r5 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 19)(1, "span", 20);
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(2, "svg", 21);
    i0.ɵɵelementEnd();
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(3, "span", 22);
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "span", 23);
    i0.ɵɵelement(6, "erp-field-type-icon", 24);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "button", 25);
    i0.ɵɵlistener("click", function FormCanvasComponent_Conditional_1_For_29_Template_button_click_7_listener() { const field_r6 = i0.ɵɵrestoreView(_r5).$implicit; const ctx_r2 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r2.fieldSelected.emit(field_r6)); });
    i0.ɵɵelementStart(8, "strong");
    i0.ɵɵtext(9);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(10, "small");
    i0.ɵɵtext(11);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(12, "span", 26);
    i0.ɵɵtext(13);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(14, "erp-compact-action-menu", 10);
    i0.ɵɵlistener("selected", function FormCanvasComponent_Conditional_1_For_29_Template_erp_compact_action_menu_selected_14_listener($event) { const ctx_r6 = i0.ɵɵrestoreView(_r5); const field_r6 = ctx_r6.$implicit; const ɵ$index_57_r8 = ctx_r6.$index; const ctx_r2 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r2.fieldAction.emit({ action: $event, field: field_r6, index: ɵ$index_57_r8 })); });
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const field_r6 = ctx.$implicit;
    const ɵ$index_57_r8 = ctx.$index;
    const ctx_r2 = i0.ɵɵnextContext(2);
    i0.ɵɵclassProp("selected", field_r6.id === ctx_r2.selectedFieldId());
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate((ɵ$index_57_r8 + 1).toString().padStart(2, "0"));
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("type", field_r6.type)("size", 17);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(field_r6.name);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate2("", field_r6.type, "", field_r6.isRequired ? " \u00B7 Required" : "");
    i0.ɵɵadvance();
    i0.ɵɵclassProp("erp-status--warning", !field_r6.isActive);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", field_r6.isActive ? "Active" : "Hidden", " ");
    i0.ɵɵadvance();
    i0.ɵɵproperty("items", ctx_r2.fieldActions);
} }
function FormCanvasComponent_Conditional_1_ForEmpty_30_Template(rf, ctx) { if (rf & 1) {
    const _r4 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 17);
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(1, "svg", 27);
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(2, "strong");
    i0.ɵɵtext(3, "No fields yet");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "p");
    i0.ɵɵtext(5, "Add the first field to this section.");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "button", 13);
    i0.ɵɵlistener("click", function FormCanvasComponent_Conditional_1_ForEmpty_30_Template_button_click_6_listener() { i0.ɵɵrestoreView(_r4); const ctx_r2 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r2.addFieldRequested.emit()); });
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(7, "svg", 14);
    i0.ɵɵtext(8, " Add field ");
    i0.ɵɵelementEnd()();
} }
function FormCanvasComponent_Conditional_1_Template(rf, ctx) { if (rf & 1) {
    const _r1 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "section", 1)(1, "header", 3)(2, "div", 4)(3, "span", 5);
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(4, "svg", 6);
    i0.ɵɵelementEnd();
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(5, "div")(6, "small");
    i0.ɵɵtext(7);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "h2");
    i0.ɵɵtext(9);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(10, "p");
    i0.ɵɵtext(11);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(12, "div", 7);
    i0.ɵɵconditionalCreate(13, FormCanvasComponent_Conditional_1_Conditional_13_Template, 3, 0, "button", 8);
    i0.ɵɵelementStart(14, "span", 9);
    i0.ɵɵtext(15);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(16, "erp-compact-action-menu", 10);
    i0.ɵɵlistener("selected", function FormCanvasComponent_Conditional_1_Template_erp_compact_action_menu_selected_16_listener($event) { i0.ɵɵrestoreView(_r1); const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.sectionAction.emit($event)); });
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(17, "section", 11)(18, "header", 12)(19, "div")(20, "h2");
    i0.ɵɵtext(21, "Fields");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(22, "p");
    i0.ɵɵtext(23);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(24, "button", 13);
    i0.ɵɵlistener("click", function FormCanvasComponent_Conditional_1_Template_button_click_24_listener() { i0.ɵɵrestoreView(_r1); const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.addFieldRequested.emit()); });
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(25, "svg", 14);
    i0.ɵɵtext(26, " Add field ");
    i0.ɵɵelementEnd()();
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(27, "div", 15);
    i0.ɵɵrepeaterCreate(28, FormCanvasComponent_Conditional_1_For_29_Template, 15, 12, "div", 16, _forTrack0, false, FormCanvasComponent_Conditional_1_ForEmpty_30_Template, 9, 0, "div", 17);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    let tmp_2_0;
    const activeSubsection_r9 = ctx;
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance(7);
    i0.ɵɵtextInterpolate2("", (tmp_2_0 = ctx_r2.section()) == null ? null : tmp_2_0.name, " / ", activeSubsection_r9.name);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(activeSubsection_r9.name);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(activeSubsection_r9.description || "Configure fields for this section.");
    i0.ɵɵadvance(2);
    i0.ɵɵconditional(!ctx_r2.structureVisible() ? 13 : -1);
    i0.ɵɵadvance();
    i0.ɵɵclassProp("erp-status--warning", !activeSubsection_r9.isActive);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", activeSubsection_r9.isActive ? "Enabled" : "Disabled", " ");
    i0.ɵɵadvance();
    i0.ɵɵproperty("items", ctx_r2.sectionActions);
    i0.ɵɵadvance(7);
    i0.ɵɵtextInterpolate1("", activeSubsection_r9.fields.length, " configured");
    i0.ɵɵadvance(5);
    i0.ɵɵrepeater(activeSubsection_r9.fields);
} }
function FormCanvasComponent_Conditional_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "section", 2);
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(1, "svg", 28);
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(2, "strong");
    i0.ɵɵtext(3, "Select a section");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "p");
    i0.ɵɵtext(5, "Choose a section from the structure panel to configure its fields.");
    i0.ɵɵelementEnd()();
} }
export class FormCanvasComponent {
    section = input(undefined, ...(ngDevMode ? [{ debugName: "section" }] : /* istanbul ignore next */ []));
    subsection = input(undefined, ...(ngDevMode ? [{ debugName: "subsection" }] : /* istanbul ignore next */ []));
    selectedFieldId = input('', ...(ngDevMode ? [{ debugName: "selectedFieldId" }] : /* istanbul ignore next */ []));
    structureVisible = input(true, ...(ngDevMode ? [{ debugName: "structureVisible" }] : /* istanbul ignore next */ []));
    structureRequested = output();
    addFieldRequested = output();
    fieldSelected = output();
    fieldAction = output();
    sectionAction = output();
    sectionActions = [
        { id: 'rename', label: 'Edit section', icon: 'edit' },
        { id: 'duplicate', label: 'Duplicate', icon: 'duplicate' },
        { id: 'delete', label: 'Delete', icon: 'delete', destructive: true, separator: true },
    ];
    fieldActions = [
        { id: 'edit', label: 'Edit settings', icon: 'edit' },
        { id: 'duplicate', label: 'Duplicate', icon: 'duplicate' },
        { id: 'up', label: 'Move up', icon: 'up' },
        { id: 'down', label: 'Move down', icon: 'down' },
        { id: 'disable', label: 'Disable', icon: 'view' },
        { id: 'delete', label: 'Delete', icon: 'delete', destructive: true, separator: true },
    ];
    static ɵfac = function FormCanvasComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || FormCanvasComponent)(); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: FormCanvasComponent, selectors: [["erp-form-canvas"]], inputs: { section: [1, "section"], subsection: [1, "subsection"], selectedFieldId: [1, "selectedFieldId"], structureVisible: [1, "structureVisible"] }, outputs: { structureRequested: "structureRequested", addFieldRequested: "addFieldRequested", fieldSelected: "fieldSelected", fieldAction: "fieldAction", sectionAction: "sectionAction" }, decls: 3, vars: 1, consts: [[1, "canvas"], [1, "builder-workspace"], [1, "erp-card", "compact-empty", "canvas-empty"], [1, "canvas-heading"], [1, "canvas-heading__identity"], [1, "canvas-heading__icon"], ["lucideRows3", "", "size", "19", "aria-hidden", "true"], [1, "canvas-heading__actions"], ["type", "button", 1, "erp-button", "erp-button--secondary", "erp-button--compact"], [1, "erp-status"], [3, "selected", "items"], [1, "fields-panel"], [1, "panel-header"], ["type", "button", 1, "erp-button", "erp-button--secondary", "erp-button--compact", 3, "click"], ["lucidePlus", "", "size", "16", "aria-hidden", "true"], [1, "field-list"], [1, "field-row", 3, "selected"], [1, "compact-empty"], ["lucideListTree", "", "size", "17", "aria-hidden", "true"], [1, "field-row"], ["aria-hidden", "true", 1, "drag-handle"], ["lucideGripVertical", "", "size", "17"], [1, "field-order"], [1, "field-icon"], [3, "type", "size"], ["type", "button", 1, "field-row__content", 3, "click"], [1, "erp-status", "field-status"], ["lucideTextCursorInput", "", "size", "24", "aria-hidden", "true"], ["lucideRows3", "", "size", "28", "aria-hidden", "true"]], template: function FormCanvasComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "main", 0);
            i0.ɵɵconditionalCreate(1, FormCanvasComponent_Conditional_1_Template, 31, 11, "section", 1)(2, FormCanvasComponent_Conditional_2_Template, 6, 0, "section", 2);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            let tmp_0_0;
            i0.ɵɵadvance();
            i0.ɵɵconditional((tmp_0_0 = ctx.subsection()) ? 1 : 2, tmp_0_0);
        } }, dependencies: [CompactActionMenuComponent,
            FieldTypeIconComponent,
            LucideGripVertical,
            LucideListTree,
            LucidePlus,
            LucideRows3,
            LucideTextCursorInput], encapsulation: 2, changeDetection: 0 });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(FormCanvasComponent, [{
        type: Component,
        args: [{ selector: 'erp-form-canvas', imports: [
                    CompactActionMenuComponent,
                    FieldTypeIconComponent,
                    LucideGripVertical,
                    LucideListTree,
                    LucidePlus,
                    LucideRows3,
                    LucideTextCursorInput,
                ], changeDetection: ChangeDetectionStrategy.OnPush, template: "<main class=\"canvas\">\n  @if (subsection(); as activeSubsection) {\n    <section class=\"builder-workspace\">\n      <header class=\"canvas-heading\">\n        <div class=\"canvas-heading__identity\">\n          <span class=\"canvas-heading__icon\">\n            <svg lucideRows3 size=\"19\" aria-hidden=\"true\"></svg>\n          </span>\n          <div>\n            <small>{{ section()?.name }} / {{ activeSubsection.name }}</small>\n            <h2>{{ activeSubsection.name }}</h2>\n            <p>{{ activeSubsection.description || 'Configure fields for this section.' }}</p>\n          </div>\n        </div>\n        <div class=\"canvas-heading__actions\">\n          @if (!structureVisible()) {\n            <button\n              class=\"erp-button erp-button--secondary erp-button--compact\"\n              type=\"button\"\n              (click)=\"structureRequested.emit()\"\n            >\n              <svg lucideListTree size=\"17\" aria-hidden=\"true\"></svg>\n              Structure\n            </button>\n          }\n          <span class=\"erp-status\" [class.erp-status--warning]=\"!activeSubsection.isActive\">\n            {{ activeSubsection.isActive ? 'Enabled' : 'Disabled' }}\n          </span>\n          <erp-compact-action-menu\n            [items]=\"sectionActions\"\n            (selected)=\"sectionAction.emit($event)\"\n          />\n        </div>\n      </header>\n\n      <section class=\"fields-panel\">\n        <header class=\"panel-header\">\n          <div>\n            <h2>Fields</h2>\n            <p>{{ activeSubsection.fields.length }} configured</p>\n          </div>\n          <button\n            class=\"erp-button erp-button--secondary erp-button--compact\"\n            type=\"button\"\n            (click)=\"addFieldRequested.emit()\"\n          >\n            <svg lucidePlus size=\"16\" aria-hidden=\"true\"></svg>\n            Add field\n          </button>\n        </header>\n\n        <div class=\"field-list\">\n          @for (field of activeSubsection.fields; track field.id; let fieldIndex = $index) {\n            <div class=\"field-row\" [class.selected]=\"field.id === selectedFieldId()\">\n              <span class=\"drag-handle\" aria-hidden=\"true\">\n                <svg lucideGripVertical size=\"17\"></svg>\n              </span>\n              <span class=\"field-order\">{{ (fieldIndex + 1).toString().padStart(2, '0') }}</span>\n              <span class=\"field-icon\">\n                <erp-field-type-icon [type]=\"field.type\" [size]=\"17\" />\n              </span>\n              <button class=\"field-row__content\" type=\"button\" (click)=\"fieldSelected.emit(field)\">\n                <strong>{{ field.name }}</strong>\n                <small>{{ field.type }}{{ field.isRequired ? ' \u00B7 Required' : '' }}</small>\n              </button>\n              <span class=\"erp-status field-status\" [class.erp-status--warning]=\"!field.isActive\">\n                {{ field.isActive ? 'Active' : 'Hidden' }}\n              </span>\n              <erp-compact-action-menu\n                [items]=\"fieldActions\"\n                (selected)=\"fieldAction.emit({ action: $event, field, index: fieldIndex })\"\n              />\n            </div>\n          } @empty {\n            <div class=\"compact-empty\">\n              <svg lucideTextCursorInput size=\"24\" aria-hidden=\"true\"></svg>\n              <strong>No fields yet</strong>\n              <p>Add the first field to this section.</p>\n              <button\n                class=\"erp-button erp-button--secondary erp-button--compact\"\n                type=\"button\"\n                (click)=\"addFieldRequested.emit()\"\n              >\n                <svg lucidePlus size=\"16\" aria-hidden=\"true\"></svg>\n                Add field\n              </button>\n            </div>\n          }\n        </div>\n      </section>\n    </section>\n  } @else {\n    <section class=\"erp-card compact-empty canvas-empty\">\n      <svg lucideRows3 size=\"28\" aria-hidden=\"true\"></svg>\n      <strong>Select a section</strong>\n      <p>Choose a section from the structure panel to configure its fields.</p>\n    </section>\n  }\n</main>\n" }]
    }], null, { section: [{ type: i0.Input, args: [{ isSignal: true, alias: "section", required: false }] }], subsection: [{ type: i0.Input, args: [{ isSignal: true, alias: "subsection", required: false }] }], selectedFieldId: [{ type: i0.Input, args: [{ isSignal: true, alias: "selectedFieldId", required: false }] }], structureVisible: [{ type: i0.Input, args: [{ isSignal: true, alias: "structureVisible", required: false }] }], structureRequested: [{ type: i0.Output, args: ["structureRequested"] }], addFieldRequested: [{ type: i0.Output, args: ["addFieldRequested"] }], fieldSelected: [{ type: i0.Output, args: ["fieldSelected"] }], fieldAction: [{ type: i0.Output, args: ["fieldAction"] }], sectionAction: [{ type: i0.Output, args: ["sectionAction"] }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(FormCanvasComponent, { className: "FormCanvasComponent", filePath: "frontend/src/app/features/admin/form-builder/components/form-canvas.component.ts", lineNumber: 36 }); })();
