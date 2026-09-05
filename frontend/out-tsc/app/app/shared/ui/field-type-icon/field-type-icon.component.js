import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';
import { LucideAlignLeft, LucideAtSign, LucideCalendarDays, LucideCheckSquare2, LucideCircleDot, LucideDynamicIcon, LucideFileUp, LucideHash, LucideImage, LucideListChecks, LucidePenTool, LucideSmartphone, LucideTextCursorInput, } from '@lucide/angular';
import * as i0 from "@angular/core";
const FIELD_TYPE_ICONS = {
    number: LucideHash,
    email: LucideAtSign,
    mobile: LucideSmartphone,
    date: LucideCalendarDays,
    textarea: LucideAlignLeft,
    dropdown: LucideListChecks,
    radio: LucideCircleDot,
    checkbox: LucideCheckSquare2,
    'multi-select': LucideListChecks,
    file: LucideFileUp,
    image: LucideImage,
    signature: LucidePenTool,
};
export class FieldTypeIconComponent {
    type = input('text', ...(ngDevMode ? [{ debugName: "type" }] : /* istanbul ignore next */ []));
    size = input(16, ...(ngDevMode ? [{ debugName: "size" }] : /* istanbul ignore next */ []));
    icon = computed(() => FIELD_TYPE_ICONS[this.type()] ?? LucideTextCursorInput, ...(ngDevMode ? [{ debugName: "icon" }] : /* istanbul ignore next */ []));
    static ɵfac = function FieldTypeIconComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || FieldTypeIconComponent)(); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: FieldTypeIconComponent, selectors: [["erp-field-type-icon"]], inputs: { type: [1, "type"], size: [1, "size"] }, decls: 1, vars: 2, consts: [["aria-hidden", "true", 3, "lucideIcon", "size"]], template: function FieldTypeIconComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵnamespaceSVG();
            i0.ɵɵelement(0, "svg", 0);
        } if (rf & 2) {
            i0.ɵɵproperty("lucideIcon", ctx.icon())("size", ctx.size());
        } }, dependencies: [LucideDynamicIcon], encapsulation: 2, changeDetection: 0 });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(FieldTypeIconComponent, [{
        type: Component,
        args: [{
                selector: 'erp-field-type-icon',
                imports: [LucideDynamicIcon],
                template: `<svg [lucideIcon]="icon()" [size]="size()" aria-hidden="true"></svg>`,
                changeDetection: ChangeDetectionStrategy.OnPush,
            }]
    }], null, { type: [{ type: i0.Input, args: [{ isSignal: true, alias: "type", required: false }] }], size: [{ type: i0.Input, args: [{ isSignal: true, alias: "size", required: false }] }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(FieldTypeIconComponent, { className: "FieldTypeIconComponent", filePath: "frontend/src/app/shared/ui/field-type-icon/field-type-icon.component.ts", lineNumber: 39 }); })();
