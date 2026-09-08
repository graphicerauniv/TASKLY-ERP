import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';
import { ADMIN_ILLUSTRATIONS } from './admin-illustration.registry';
import * as i0 from "@angular/core";
/** Reusable, accessible renderer for the global admin illustration library. */
export class AdminIllustrationComponent {
    kind = input.required(...(ngDevMode ? [{ debugName: "kind" }] : /* istanbul ignore next */ []));
    alt = input('', ...(ngDevMode ? [{ debugName: "alt" }] : /* istanbul ignore next */ []));
    size = input('default', ...(ngDevMode ? [{ debugName: "size" }] : /* istanbul ignore next */ []));
    priority = input(false, ...(ngDevMode ? [{ debugName: "priority" }] : /* istanbul ignore next */ []));
    source = computed(() => ADMIN_ILLUSTRATIONS[this.kind()], ...(ngDevMode ? [{ debugName: "source" }] : /* istanbul ignore next */ []));
    static ɵfac = function AdminIllustrationComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || AdminIllustrationComponent)(); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: AdminIllustrationComponent, selectors: [["erp-admin-illustration"]], inputs: { kind: [1, "kind"], alt: [1, "alt"], size: [1, "size"], priority: [1, "priority"] }, decls: 1, vars: 5, consts: [["decoding", "async", "width", "768", "height", "768", 3, "src", "alt", "loading"]], template: function AdminIllustrationComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵdomElement(0, "img", 0);
        } if (rf & 2) {
            i0.ɵɵdomProperty("src", ctx.source(), i0.ɵɵsanitizeUrl)("alt", ctx.alt())("loading", ctx.priority() ? "eager" : "lazy");
            i0.ɵɵattribute("aria-hidden", ctx.alt() ? null : "true")("fetchpriority", ctx.priority() ? "high" : null);
        } }, styles: ["[_nghost-%COMP%] {\n      display: inline-grid;\n      width: var(--admin-illustration-size, 9rem);\n      max-width: 100%;\n      aspect-ratio: 1;\n      place-items: center;\n      line-height: 0;\n    }\n\n    [size='compact'][_nghost-%COMP%] {\n      --admin-illustration-size: 5rem;\n    }\n\n    [size='hero'][_nghost-%COMP%] {\n      --admin-illustration-size: 15rem;\n    }\n\n    img[_ngcontent-%COMP%] {\n      display: block;\n      width: 100%;\n      height: 100%;\n      object-fit: contain;\n    }"], changeDetection: 0 });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AdminIllustrationComponent, [{
        type: Component,
        args: [{ selector: 'erp-admin-illustration', template: `
    <img
      [src]="source()"
      [alt]="alt()"
      [attr.aria-hidden]="alt() ? null : 'true'"
      [attr.fetchpriority]="priority() ? 'high' : null"
      [loading]="priority() ? 'eager' : 'lazy'"
      decoding="async"
      width="768"
      height="768"
    />
  `, changeDetection: ChangeDetectionStrategy.OnPush, styles: ["\n    :host {\n      display: inline-grid;\n      width: var(--admin-illustration-size, 9rem);\n      max-width: 100%;\n      aspect-ratio: 1;\n      place-items: center;\n      line-height: 0;\n    }\n\n    :host([size='compact']) {\n      --admin-illustration-size: 5rem;\n    }\n\n    :host([size='hero']) {\n      --admin-illustration-size: 15rem;\n    }\n\n    img {\n      display: block;\n      width: 100%;\n      height: 100%;\n      object-fit: contain;\n    }\n  "] }]
    }], null, { kind: [{ type: i0.Input, args: [{ isSignal: true, alias: "kind", required: true }] }], alt: [{ type: i0.Input, args: [{ isSignal: true, alias: "alt", required: false }] }], size: [{ type: i0.Input, args: [{ isSignal: true, alias: "size", required: false }] }], priority: [{ type: i0.Input, args: [{ isSignal: true, alias: "priority", required: false }] }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(AdminIllustrationComponent, { className: "AdminIllustrationComponent", filePath: "frontend/src/app/shared/ui/admin-illustration/admin-illustration.component.ts", lineNumber: 48 }); })();
