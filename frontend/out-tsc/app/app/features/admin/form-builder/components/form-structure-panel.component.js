import { ChangeDetectionStrategy, Component, input, output } from '@angular/core';
import { LucideChevronRight, LucideFileText, LucideListTree, LucidePlus, LucideRows3, LucideX, } from '@lucide/angular';
import { CompactActionMenuComponent, } from '../../../../shared/ui/compact-action-menu/compact-action-menu.component';
import * as i0 from "@angular/core";
const _forTrack0 = ($index, $item) => $item.id;
function FormStructurePanelComponent_For_13_Conditional_9_For_2_Template(rf, ctx) { if (rf & 1) {
    const _r7 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 19)(1, "button", 12);
    i0.ɵɵlistener("click", function FormStructurePanelComponent_For_13_Conditional_9_For_2_Template_button_click_1_listener() { const subsection_r8 = i0.ɵɵrestoreView(_r7).$implicit; const section_r2 = i0.ɵɵnextContext(2).$implicit; const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.subsectionSelected.emit({ section: section_r2, subsection: subsection_r8 })); });
    i0.ɵɵelement(2, "span", 20);
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(3, "svg", 21);
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(4, "span");
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(6, "erp-compact-action-menu", 14);
    i0.ɵɵlistener("selected", function FormStructurePanelComponent_For_13_Conditional_9_For_2_Template_erp_compact_action_menu_selected_6_listener($event) { const ctx_r8 = i0.ɵɵrestoreView(_r7); const subsection_r8 = ctx_r8.$implicit; const ɵ$index_44_r10 = ctx_r8.$index; const section_r2 = i0.ɵɵnextContext(2).$implicit; const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.subsectionAction.emit({ action: $event, section: section_r2, subsection: subsection_r8, index: ɵ$index_44_r10 })); });
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const subsection_r8 = ctx.$implicit;
    const ctx_r2 = i0.ɵɵnextContext(3);
    i0.ɵɵclassProp("selected", subsection_r8.id === ctx_r2.selectedSubsectionId());
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(subsection_r8.name);
    i0.ɵɵadvance();
    i0.ɵɵproperty("items", ctx_r2.subsectionActions);
} }
function FormStructurePanelComponent_For_13_Conditional_9_Template(rf, ctx) { if (rf & 1) {
    const _r6 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 15);
    i0.ɵɵrepeaterCreate(1, FormStructurePanelComponent_For_13_Conditional_9_For_2_Template, 7, 4, "div", 16, _forTrack0);
    i0.ɵɵelementStart(3, "button", 17);
    i0.ɵɵlistener("click", function FormStructurePanelComponent_For_13_Conditional_9_Template_button_click_3_listener() { i0.ɵɵrestoreView(_r6); const section_r2 = i0.ɵɵnextContext().$implicit; const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.addSubsectionRequested.emit(section_r2)); });
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(4, "svg", 18);
    i0.ɵɵtext(5, " Add sub section ");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const section_r2 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance();
    i0.ɵɵrepeater(section_r2.subsections);
} }
function FormStructurePanelComponent_For_13_Template(rf, ctx) { if (rf & 1) {
    const _r1 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 7)(1, "div", 9)(2, "button", 10);
    i0.ɵɵlistener("click", function FormStructurePanelComponent_For_13_Template_button_click_2_listener() { const section_r2 = i0.ɵɵrestoreView(_r1).$implicit; const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.sectionToggled.emit(section_r2)); });
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(3, "svg", 11);
    i0.ɵɵelementEnd();
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(4, "button", 12);
    i0.ɵɵlistener("click", function FormStructurePanelComponent_For_13_Template_button_click_4_listener() { const section_r2 = i0.ɵɵrestoreView(_r1).$implicit; const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.sectionSelected.emit(section_r2)); });
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(5, "svg", 13);
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(6, "span");
    i0.ɵɵtext(7);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(8, "erp-compact-action-menu", 14);
    i0.ɵɵlistener("selected", function FormStructurePanelComponent_For_13_Template_erp_compact_action_menu_selected_8_listener($event) { const ctx_r3 = i0.ɵɵrestoreView(_r1); const section_r2 = ctx_r3.$implicit; const ɵ$index_23_r5 = ctx_r3.$index; const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.sectionAction.emit({ action: $event, section: section_r2, index: ɵ$index_23_r5 })); });
    i0.ɵɵelementEnd()();
    i0.ɵɵconditionalCreate(9, FormStructurePanelComponent_For_13_Conditional_9_Template, 6, 0, "div", 15);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const section_r2 = ctx.$implicit;
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵclassProp("selected", section_r2.id === ctx_r2.selectedSectionId());
    i0.ɵɵadvance();
    i0.ɵɵattribute("aria-expanded", ctx_r2.sectionExpanded(section_r2.id));
    i0.ɵɵadvance();
    i0.ɵɵclassProp("open", ctx_r2.sectionExpanded(section_r2.id));
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(section_r2.name);
    i0.ɵɵadvance();
    i0.ɵɵproperty("items", ctx_r2.sectionActions);
    i0.ɵɵadvance();
    i0.ɵɵconditional(ctx_r2.sectionExpanded(section_r2.id) ? 9 : -1);
} }
function FormStructurePanelComponent_ForEmpty_14_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 8);
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(1, "svg", 22);
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(2, "p");
    i0.ɵɵtext(3, "Add a tab to begin structuring this form.");
    i0.ɵɵelementEnd()();
} }
export class FormStructurePanelComponent {
    form = input.required(...(ngDevMode ? [{ debugName: "form" }] : /* istanbul ignore next */ []));
    open = input(true, ...(ngDevMode ? [{ debugName: "open" }] : /* istanbul ignore next */ []));
    selectedSectionId = input('', ...(ngDevMode ? [{ debugName: "selectedSectionId" }] : /* istanbul ignore next */ []));
    selectedSubsectionId = input('', ...(ngDevMode ? [{ debugName: "selectedSubsectionId" }] : /* istanbul ignore next */ []));
    selectedFieldId = input('', ...(ngDevMode ? [{ debugName: "selectedFieldId" }] : /* istanbul ignore next */ []));
    expandedSectionIds = input(new Set(), ...(ngDevMode ? [{ debugName: "expandedSectionIds" }] : /* istanbul ignore next */ []));
    closeRequested = output();
    addRequested = output();
    sectionToggled = output();
    sectionSelected = output();
    subsectionSelected = output();
    fieldSelected = output();
    addSubsectionRequested = output();
    sectionAction = output();
    subsectionAction = output();
    fieldAction = output();
    addActions = [
        { id: 'add-tab', label: 'Add tab', icon: 'add-tab' },
        { id: 'add-section', label: 'Add section', icon: 'add-section' },
        { id: 'add-field', label: 'Add field', icon: 'add-field' },
    ];
    sectionActions = [
        { id: 'rename', label: 'Rename', icon: 'rename' },
        { id: 'duplicate', label: 'Duplicate', icon: 'duplicate' },
        { id: 'up', label: 'Move up', icon: 'up' },
        { id: 'down', label: 'Move down', icon: 'down' },
        { id: 'add-child', label: 'Add sub section', icon: 'add-child' },
        { id: 'delete', label: 'Delete', icon: 'delete', destructive: true, separator: true },
    ];
    subsectionActions = [
        { id: 'rename', label: 'Rename', icon: 'rename' },
        { id: 'duplicate', label: 'Duplicate', icon: 'duplicate' },
        { id: 'up', label: 'Move up', icon: 'up' },
        { id: 'down', label: 'Move down', icon: 'down' },
        { id: 'add-child', label: 'Add field', icon: 'add-child' },
        { id: 'delete', label: 'Delete', icon: 'delete', destructive: true, separator: true },
    ];
    fieldActions = [
        { id: 'edit', label: 'Edit settings', icon: 'edit' },
        { id: 'duplicate', label: 'Duplicate', icon: 'duplicate' },
        { id: 'up', label: 'Move up', icon: 'up' },
        { id: 'down', label: 'Move down', icon: 'down' },
        { id: 'delete', label: 'Delete', icon: 'delete', destructive: true, separator: true },
    ];
    sectionExpanded(sectionId) {
        return this.expandedSectionIds().has(sectionId);
    }
    static ɵfac = function FormStructurePanelComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || FormStructurePanelComponent)(); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: FormStructurePanelComponent, selectors: [["erp-form-structure-panel"]], hostVars: 2, hostBindings: function FormStructurePanelComponent_HostBindings(rf, ctx) { if (rf & 2) {
            i0.ɵɵclassProp("structure-panel--open", ctx.open());
        } }, inputs: { form: [1, "form"], open: [1, "open"], selectedSectionId: [1, "selectedSectionId"], selectedSubsectionId: [1, "selectedSubsectionId"], selectedFieldId: [1, "selectedFieldId"], expandedSectionIds: [1, "expandedSectionIds"] }, outputs: { closeRequested: "closeRequested", addRequested: "addRequested", sectionToggled: "sectionToggled", sectionSelected: "sectionSelected", subsectionSelected: "subsectionSelected", fieldSelected: "fieldSelected", addSubsectionRequested: "addSubsectionRequested", sectionAction: "sectionAction", subsectionAction: "subsectionAction", fieldAction: "fieldAction" }, decls: 15, vars: 2, consts: [["aria-label", "Form structure", 1, "structure-panel"], [1, "panel-header"], [1, "panel-header__actions"], ["variant", "add", 3, "selected", "items"], ["type", "button", "aria-label", "Close form structure", 1, "structure-close", 3, "click"], ["lucideX", "", "size", "18", "aria-hidden", "true"], ["role", "tree", "aria-label", "Form structure hierarchy", 1, "tree"], [1, "tree-group"], [1, "compact-empty"], [1, "tree-row", "tree-row--section"], ["type", "button", "aria-label", "Toggle section", 1, "tree-row__toggle", 3, "click"], ["lucideChevronRight", "", "size", "15", "aria-hidden", "true", 1, "tree-row__chevron"], ["type", "button", 1, "tree-row__main", 3, "click"], ["lucideFileText", "", "size", "17", "aria-hidden", "true"], [3, "selected", "items"], [1, "tree-children"], [1, "tree-row", "tree-row--sub", 3, "selected"], ["type", "button", 1, "tree-add", 3, "click"], ["lucidePlus", "", "size", "15", "aria-hidden", "true"], [1, "tree-row", "tree-row--sub"], ["aria-hidden", "true", 1, "tree-connector"], ["lucideRows3", "", "size", "16", "aria-hidden", "true"], ["lucideListTree", "", "size", "22", "aria-hidden", "true"]], template: function FormStructurePanelComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "aside", 0)(1, "header", 1)(2, "div")(3, "h2");
            i0.ɵɵtext(4, "Form structure");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(5, "p");
            i0.ɵɵtext(6, "Tabs & sections");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(7, "div", 2)(8, "erp-compact-action-menu", 3);
            i0.ɵɵlistener("selected", function FormStructurePanelComponent_Template_erp_compact_action_menu_selected_8_listener($event) { return ctx.addRequested.emit($event); });
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(9, "button", 4);
            i0.ɵɵlistener("click", function FormStructurePanelComponent_Template_button_click_9_listener() { return ctx.closeRequested.emit(); });
            i0.ɵɵnamespaceSVG();
            i0.ɵɵelement(10, "svg", 5);
            i0.ɵɵelementEnd()()();
            i0.ɵɵnamespaceHTML();
            i0.ɵɵelementStart(11, "div", 6);
            i0.ɵɵrepeaterCreate(12, FormStructurePanelComponent_For_13_Template, 10, 8, "div", 7, _forTrack0, false, FormStructurePanelComponent_ForEmpty_14_Template, 4, 0, "div", 8);
            i0.ɵɵelementEnd()();
        } if (rf & 2) {
            i0.ɵɵadvance(8);
            i0.ɵɵproperty("items", ctx.addActions);
            i0.ɵɵadvance(4);
            i0.ɵɵrepeater(ctx.form().sections);
        } }, dependencies: [CompactActionMenuComponent,
            LucideChevronRight,
            LucideFileText,
            LucideListTree,
            LucidePlus,
            LucideRows3,
            LucideX], encapsulation: 2, changeDetection: 0 });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(FormStructurePanelComponent, [{
        type: Component,
        args: [{ selector: 'erp-form-structure-panel', imports: [
                    CompactActionMenuComponent,
                    LucideChevronRight,
                    LucideFileText,
                    LucideListTree,
                    LucidePlus,
                    LucideRows3,
                    LucideX,
                ], host: {
                    '[class.structure-panel--open]': 'open()',
                }, changeDetection: ChangeDetectionStrategy.OnPush, template: "<aside class=\"structure-panel\" aria-label=\"Form structure\">\n  <header class=\"panel-header\">\n    <div>\n      <h2>Form structure</h2>\n      <p>Tabs &amp; sections</p>\n    </div>\n    <div class=\"panel-header__actions\">\n      <erp-compact-action-menu\n        variant=\"add\"\n        [items]=\"addActions\"\n        (selected)=\"addRequested.emit($event)\"\n      />\n      <button\n        class=\"structure-close\"\n        type=\"button\"\n        aria-label=\"Close form structure\"\n        (click)=\"closeRequested.emit()\"\n      >\n        <svg lucideX size=\"18\" aria-hidden=\"true\"></svg>\n      </button>\n    </div>\n  </header>\n\n  <div class=\"tree\" role=\"tree\" aria-label=\"Form structure hierarchy\">\n    @for (section of form().sections; track section.id; let sectionIndex = $index) {\n      <div class=\"tree-group\">\n        <div\n          class=\"tree-row tree-row--section\"\n          [class.selected]=\"section.id === selectedSectionId()\"\n        >\n          <button\n            class=\"tree-row__toggle\"\n            type=\"button\"\n            aria-label=\"Toggle section\"\n            [attr.aria-expanded]=\"sectionExpanded(section.id)\"\n            (click)=\"sectionToggled.emit(section)\"\n          >\n            <svg\n              class=\"tree-row__chevron\"\n              [class.open]=\"sectionExpanded(section.id)\"\n              lucideChevronRight\n              size=\"15\"\n              aria-hidden=\"true\"\n            ></svg>\n          </button>\n          <button class=\"tree-row__main\" type=\"button\" (click)=\"sectionSelected.emit(section)\">\n            <svg lucideFileText size=\"17\" aria-hidden=\"true\"></svg>\n            <span>{{ section.name }}</span>\n          </button>\n          <erp-compact-action-menu\n            [items]=\"sectionActions\"\n            (selected)=\"\n              sectionAction.emit({ action: $event, section: section, index: sectionIndex })\n            \"\n          />\n        </div>\n\n        @if (sectionExpanded(section.id)) {\n          <div class=\"tree-children\">\n            @for (subsection of section.subsections; track subsection.id; let subIndex = $index) {\n              <div\n                class=\"tree-row tree-row--sub\"\n                [class.selected]=\"subsection.id === selectedSubsectionId()\"\n              >\n                <button\n                  class=\"tree-row__main\"\n                  type=\"button\"\n                  (click)=\"subsectionSelected.emit({ section, subsection })\"\n                >\n                  <span class=\"tree-connector\" aria-hidden=\"true\"></span>\n                  <svg lucideRows3 size=\"16\" aria-hidden=\"true\"></svg>\n                  <span>{{ subsection.name }}</span>\n                </button>\n                <erp-compact-action-menu\n                  [items]=\"subsectionActions\"\n                  (selected)=\"\n                    subsectionAction.emit({\n                      action: $event,\n                      section,\n                      subsection,\n                      index: subIndex,\n                    })\n                  \"\n                />\n              </div>\n            }\n            <button class=\"tree-add\" type=\"button\" (click)=\"addSubsectionRequested.emit(section)\">\n              <svg lucidePlus size=\"15\" aria-hidden=\"true\"></svg>\n              Add sub section\n            </button>\n          </div>\n        }\n      </div>\n    } @empty {\n      <div class=\"compact-empty\">\n        <svg lucideListTree size=\"22\" aria-hidden=\"true\"></svg>\n        <p>Add a tab to begin structuring this form.</p>\n      </div>\n    }\n  </div>\n</aside>\n" }]
    }], null, { form: [{ type: i0.Input, args: [{ isSignal: true, alias: "form", required: true }] }], open: [{ type: i0.Input, args: [{ isSignal: true, alias: "open", required: false }] }], selectedSectionId: [{ type: i0.Input, args: [{ isSignal: true, alias: "selectedSectionId", required: false }] }], selectedSubsectionId: [{ type: i0.Input, args: [{ isSignal: true, alias: "selectedSubsectionId", required: false }] }], selectedFieldId: [{ type: i0.Input, args: [{ isSignal: true, alias: "selectedFieldId", required: false }] }], expandedSectionIds: [{ type: i0.Input, args: [{ isSignal: true, alias: "expandedSectionIds", required: false }] }], closeRequested: [{ type: i0.Output, args: ["closeRequested"] }], addRequested: [{ type: i0.Output, args: ["addRequested"] }], sectionToggled: [{ type: i0.Output, args: ["sectionToggled"] }], sectionSelected: [{ type: i0.Output, args: ["sectionSelected"] }], subsectionSelected: [{ type: i0.Output, args: ["subsectionSelected"] }], fieldSelected: [{ type: i0.Output, args: ["fieldSelected"] }], addSubsectionRequested: [{ type: i0.Output, args: ["addSubsectionRequested"] }], sectionAction: [{ type: i0.Output, args: ["sectionAction"] }], subsectionAction: [{ type: i0.Output, args: ["subsectionAction"] }], fieldAction: [{ type: i0.Output, args: ["fieldAction"] }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(FormStructurePanelComponent, { className: "FormStructurePanelComponent", filePath: "frontend/src/app/features/admin/form-builder/components/form-structure-panel.component.ts", lineNumber: 58 }); })();
