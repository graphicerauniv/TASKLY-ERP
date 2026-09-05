import { ChangeDetectionStrategy, Component, computed, input, output, signal } from '@angular/core';
import { LucideChevronDown, LucideSearch } from '@lucide/angular';
import { FormSectionNavItemComponent } from '../form-section-nav-item/form-section-nav-item.component';
import * as i0 from "@angular/core";
const _forTrack0 = ($index, $item) => $item.title;
const _forTrack1 = ($index, $item) => $item.id;
function FormSectionNavigatorComponent_Conditional_8_Conditional_0_Template(rf, ctx) { if (rf & 1) {
    const _r1 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "label", 3);
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(1, "svg", 6);
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(2, "input", 7);
    i0.ɵɵlistener("input", function FormSectionNavigatorComponent_Conditional_8_Conditional_0_Template_input_input_2_listener($event) { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.setQuery($event)); });
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("value", ctx_r1.query());
} }
function FormSectionNavigatorComponent_Conditional_8_For_3_Conditional_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 8);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const group_r3 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(group_r3.title);
} }
function FormSectionNavigatorComponent_Conditional_8_For_3_For_2_Template(rf, ctx) { if (rf & 1) {
    const _r4 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "erp-form-section-nav-item", 10);
    i0.ɵɵlistener("selected", function FormSectionNavigatorComponent_Conditional_8_For_3_For_2_Template_erp_form_section_nav_item_selected_0_listener($event) { i0.ɵɵrestoreView(_r4); const ctx_r1 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r1.sectionSelected.emit($event)); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r5 = ctx.$implicit;
    i0.ɵɵproperty("item", item_r5);
} }
function FormSectionNavigatorComponent_Conditional_8_For_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵconditionalCreate(0, FormSectionNavigatorComponent_Conditional_8_For_3_Conditional_0_Template, 2, 1, "p", 8);
    i0.ɵɵrepeaterCreate(1, FormSectionNavigatorComponent_Conditional_8_For_3_For_2_Template, 1, 1, "erp-form-section-nav-item", 9, _forTrack1);
} if (rf & 2) {
    const group_r3 = ctx.$implicit;
    i0.ɵɵconditional(group_r3.title ? 0 : -1);
    i0.ɵɵadvance();
    i0.ɵɵrepeater(group_r3.items);
} }
function FormSectionNavigatorComponent_Conditional_8_ForEmpty_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 5);
    i0.ɵɵtext(1, "No sections found.");
    i0.ɵɵelementEnd();
} }
function FormSectionNavigatorComponent_Conditional_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵconditionalCreate(0, FormSectionNavigatorComponent_Conditional_8_Conditional_0_Template, 3, 1, "label", 3);
    i0.ɵɵelementStart(1, "div", 4);
    i0.ɵɵrepeaterCreate(2, FormSectionNavigatorComponent_Conditional_8_For_3_Template, 3, 1, null, null, _forTrack0, false, FormSectionNavigatorComponent_Conditional_8_ForEmpty_4_Template, 2, 0, "p", 5);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵconditional(ctx_r1.items().length > 10 ? 0 : -1);
    i0.ɵɵadvance(2);
    i0.ɵɵrepeater(ctx_r1.groupedItems());
} }
export class FormSectionNavigatorComponent {
    items = input([], ...(ngDevMode ? [{ debugName: "items" }] : /* istanbul ignore next */ []));
    completedCount = input(0, ...(ngDevMode ? [{ debugName: "completedCount" }] : /* istanbul ignore next */ []));
    totalCount = input(0, ...(ngDevMode ? [{ debugName: "totalCount" }] : /* istanbul ignore next */ []));
    panelId = input('application-sections', ...(ngDevMode ? [{ debugName: "panelId" }] : /* istanbul ignore next */ []));
    sectionSelected = output();
    collapsed = signal(false, ...(ngDevMode ? [{ debugName: "collapsed" }] : /* istanbul ignore next */ []));
    query = signal('', ...(ngDevMode ? [{ debugName: "query" }] : /* istanbul ignore next */ []));
    filteredItems = computed(() => {
        const query = this.query().trim().toLocaleLowerCase();
        if (!query)
            return this.items();
        return this.items().filter((item) => `${item.index + 1} ${item.title} ${item.status} ${item.group || ''}`
            .toLocaleLowerCase()
            .includes(query));
    }, ...(ngDevMode ? [{ debugName: "filteredItems" }] : /* istanbul ignore next */ []));
    groupedItems = computed(() => {
        const groups = new Map();
        for (const item of this.filteredItems()) {
            const group = item.group?.trim() || '';
            groups.set(group, [...(groups.get(group) || []), item]);
        }
        return [...groups].map(([title, items]) => ({ title, items }));
    }, ...(ngDevMode ? [{ debugName: "groupedItems" }] : /* istanbul ignore next */ []));
    setQuery(event) {
        this.query.set(event.target.value);
    }
    static ɵfac = function FormSectionNavigatorComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || FormSectionNavigatorComponent)(); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: FormSectionNavigatorComponent, selectors: [["erp-form-section-navigator"]], hostAttrs: ["tabindex", "-1", 1, "erp-section-navigator"], hostVars: 3, hostBindings: function FormSectionNavigatorComponent_HostBindings(rf, ctx) { if (rf & 2) {
            i0.ɵɵattribute("id", ctx.panelId());
            i0.ɵɵclassProp("erp-section-navigator--collapsed", ctx.collapsed());
        } }, inputs: { items: [1, "items"], completedCount: [1, "completedCount"], totalCount: [1, "totalCount"], panelId: [1, "panelId"] }, outputs: { sectionSelected: "sectionSelected" }, decls: 9, vars: 5, consts: [[1, "erp-section-navigator__header"], ["type", "button", 1, "erp-section-navigator__collapse", 3, "click"], ["lucideChevronDown", "", "size", "16", "aria-hidden", "true"], [1, "erp-section-navigator__search"], [1, "erp-section-navigator__list"], [1, "erp-section-navigator__empty"], ["lucideSearch", "", "size", "15", "aria-hidden", "true"], ["type", "search", "placeholder", "Find a section", "aria-label", "Find a section", 3, "input", "value"], [1, "erp-section-navigator__group"], [3, "item"], [3, "selected", "item"]], template: function FormSectionNavigatorComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "header", 0)(1, "div")(2, "strong");
            i0.ɵɵtext(3, "Application sections");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(4, "small");
            i0.ɵɵtext(5);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(6, "button", 1);
            i0.ɵɵlistener("click", function FormSectionNavigatorComponent_Template_button_click_6_listener() { return ctx.collapsed.update(value => !value); });
            i0.ɵɵnamespaceSVG();
            i0.ɵɵelement(7, "svg", 2);
            i0.ɵɵelementEnd()();
            i0.ɵɵconditionalCreate(8, FormSectionNavigatorComponent_Conditional_8_Template, 5, 2);
        } if (rf & 2) {
            i0.ɵɵadvance(5);
            i0.ɵɵtextInterpolate2("", ctx.completedCount(), " of ", ctx.totalCount(), " complete");
            i0.ɵɵadvance();
            i0.ɵɵattribute("aria-expanded", !ctx.collapsed())("aria-label", ctx.collapsed() ? "Expand section navigator" : "Collapse section navigator");
            i0.ɵɵadvance(2);
            i0.ɵɵconditional(!ctx.collapsed() ? 8 : -1);
        } }, dependencies: [FormSectionNavItemComponent, LucideChevronDown, LucideSearch], encapsulation: 2, changeDetection: 0 });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(FormSectionNavigatorComponent, [{
        type: Component,
        args: [{ selector: 'erp-form-section-navigator', imports: [FormSectionNavItemComponent, LucideChevronDown, LucideSearch], changeDetection: ChangeDetectionStrategy.OnPush, host: {
                    class: 'erp-section-navigator',
                    '[class.erp-section-navigator--collapsed]': 'collapsed()',
                    '[attr.id]': 'panelId()',
                    tabindex: '-1',
                }, template: "<header class=\"erp-section-navigator__header\">\n  <div>\n    <strong>Application sections</strong>\n    <small>{{ completedCount() }} of {{ totalCount() }} complete</small>\n  </div>\n  <button\n    class=\"erp-section-navigator__collapse\"\n    type=\"button\"\n    [attr.aria-expanded]=\"!collapsed()\"\n    [attr.aria-label]=\"collapsed() ? 'Expand section navigator' : 'Collapse section navigator'\"\n    (click)=\"collapsed.update((value) => !value)\"\n  >\n    <svg lucideChevronDown size=\"16\" aria-hidden=\"true\"></svg>\n  </button>\n</header>\n\n@if (!collapsed()) {\n  @if (items().length > 10) {\n    <label class=\"erp-section-navigator__search\">\n      <svg lucideSearch size=\"15\" aria-hidden=\"true\"></svg>\n      <input\n        type=\"search\"\n        placeholder=\"Find a section\"\n        aria-label=\"Find a section\"\n        [value]=\"query()\"\n        (input)=\"setQuery($event)\"\n      />\n    </label>\n  }\n\n  <div class=\"erp-section-navigator__list\">\n    @for (group of groupedItems(); track group.title) {\n      @if (group.title) {\n        <p class=\"erp-section-navigator__group\">{{ group.title }}</p>\n      }\n      @for (item of group.items; track item.id) {\n        <erp-form-section-nav-item\n          [item]=\"item\"\n          (selected)=\"sectionSelected.emit($event)\"\n        />\n      }\n    } @empty {\n      <p class=\"erp-section-navigator__empty\">No sections found.</p>\n    }\n  </div>\n}\n" }]
    }], null, { items: [{ type: i0.Input, args: [{ isSignal: true, alias: "items", required: false }] }], completedCount: [{ type: i0.Input, args: [{ isSignal: true, alias: "completedCount", required: false }] }], totalCount: [{ type: i0.Input, args: [{ isSignal: true, alias: "totalCount", required: false }] }], panelId: [{ type: i0.Input, args: [{ isSignal: true, alias: "panelId", required: false }] }], sectionSelected: [{ type: i0.Output, args: ["sectionSelected"] }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(FormSectionNavigatorComponent, { className: "FormSectionNavigatorComponent", filePath: "frontend/src/app/shared/ui/form-section-navigator/form-section-navigator.component.ts", lineNumber: 18 }); })();
