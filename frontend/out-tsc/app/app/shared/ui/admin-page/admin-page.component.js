import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import * as i0 from "@angular/core";
const _c0 = [[["", "page-actions", ""]], "*"];
const _c1 = ["[page-actions]", "*"];
function AdminPageComponent_Conditional_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵdomElementStart(0, "span", 2);
    i0.ɵɵtext(1);
    i0.ɵɵdomElementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r0.eyebrow());
} }
function AdminPageComponent_Conditional_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵdomElementStart(0, "span", 4);
    i0.ɵɵtext(1);
    i0.ɵɵdomElementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r0.badge());
} }
function AdminPageComponent_Conditional_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵdomElementStart(0, "p");
    i0.ɵɵtext(1);
    i0.ɵɵdomElementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r0.description());
} }
/**
 * Global route-page frame for the admin application.
 * Feature pages provide only their unique content and optional `[page-actions]` controls.
 */
export class AdminPageComponent {
    eyebrow = input('', ...(ngDevMode ? [{ debugName: "eyebrow" }] : /* istanbul ignore next */ []));
    title = input.required(...(ngDevMode ? [{ debugName: "title" }] : /* istanbul ignore next */ []));
    badge = input(null, ...(ngDevMode ? [{ debugName: "badge" }] : /* istanbul ignore next */ []));
    description = input('', ...(ngDevMode ? [{ debugName: "description" }] : /* istanbul ignore next */ []));
    variant = input('minimal', ...(ngDevMode ? [{ debugName: "variant" }] : /* istanbul ignore next */ []));
    layout = input('default', ...(ngDevMode ? [{ debugName: "layout" }] : /* istanbul ignore next */ []));
    static ɵfac = function AdminPageComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || AdminPageComponent)(); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: AdminPageComponent, selectors: [["erp-admin-page"]], inputs: { eyebrow: [1, "eyebrow"], title: [1, "title"], badge: [1, "badge"], description: [1, "description"], variant: [1, "variant"], layout: [1, "layout"] }, ngContentSelectors: _c1, decls: 11, vars: 18, consts: [[1, "erp-page"], [1, "erp-page-header"], [1, "erp-page-header__eyebrow"], [1, "erp-page-header__title"], [1, "erp-page-header__badge"]], template: function AdminPageComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵprojectionDef(_c0);
            i0.ɵɵdomElementStart(0, "section", 0)(1, "header", 1)(2, "div");
            i0.ɵɵconditionalCreate(3, AdminPageComponent_Conditional_3_Template, 2, 1, "span", 2);
            i0.ɵɵdomElementStart(4, "div", 3)(5, "h1");
            i0.ɵɵtext(6);
            i0.ɵɵdomElementEnd();
            i0.ɵɵconditionalCreate(7, AdminPageComponent_Conditional_7_Template, 2, 1, "span", 4);
            i0.ɵɵdomElementEnd();
            i0.ɵɵconditionalCreate(8, AdminPageComponent_Conditional_8_Template, 2, 1, "p");
            i0.ɵɵdomElementEnd();
            i0.ɵɵprojection(9);
            i0.ɵɵdomElementEnd();
            i0.ɵɵprojection(10, 1);
            i0.ɵɵdomElementEnd();
        } if (rf & 2) {
            i0.ɵɵclassProp("erp-page--module", ctx.variant() === "module")("erp-page--compact", ctx.variant() === "compact")("erp-page--minimal", ctx.variant() === "minimal")("erp-page--collection", ctx.layout() === "collection");
            i0.ɵɵadvance();
            i0.ɵɵclassProp("erp-page-header--module", ctx.variant() === "module")("erp-page-header--compact", ctx.variant() === "compact")("erp-page-header--minimal", ctx.variant() === "minimal");
            i0.ɵɵadvance(2);
            i0.ɵɵconditional(ctx.eyebrow() && ctx.variant() !== "minimal" ? 3 : -1);
            i0.ɵɵadvance(3);
            i0.ɵɵtextInterpolate(ctx.title());
            i0.ɵɵadvance();
            i0.ɵɵconditional(ctx.badge() !== null && ctx.badge() !== "" ? 7 : -1);
            i0.ɵɵadvance();
            i0.ɵɵconditional(ctx.description() && ctx.variant() !== "minimal" ? 8 : -1);
        } }, styles: ["[_nghost-%COMP%] {\n      display: block;\n      min-width: 0;\n    }"], changeDetection: 0 });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AdminPageComponent, [{
        type: Component,
        args: [{ selector: 'erp-admin-page', template: `
    <section
      class="erp-page"
      [class.erp-page--module]="variant() === 'module'"
      [class.erp-page--compact]="variant() === 'compact'"
      [class.erp-page--minimal]="variant() === 'minimal'"
      [class.erp-page--collection]="layout() === 'collection'"
    >
      <header
        class="erp-page-header"
        [class.erp-page-header--module]="variant() === 'module'"
        [class.erp-page-header--compact]="variant() === 'compact'"
        [class.erp-page-header--minimal]="variant() === 'minimal'"
      >
        <div>
          @if (eyebrow() && variant() !== 'minimal') {
            <span class="erp-page-header__eyebrow">{{ eyebrow() }}</span>
          }
          <div class="erp-page-header__title">
            <h1>{{ title() }}</h1>
            @if (badge() !== null && badge() !== '') {
              <span class="erp-page-header__badge">{{ badge() }}</span>
            }
          </div>
          @if (description() && variant() !== 'minimal') {
            <p>{{ description() }}</p>
          }
        </div>
        <ng-content select="[page-actions]" />
      </header>
      <ng-content />
    </section>
  `, changeDetection: ChangeDetectionStrategy.OnPush, styles: ["\n    :host {\n      display: block;\n      min-width: 0;\n    }\n  "] }]
    }], null, { eyebrow: [{ type: i0.Input, args: [{ isSignal: true, alias: "eyebrow", required: false }] }], title: [{ type: i0.Input, args: [{ isSignal: true, alias: "title", required: true }] }], badge: [{ type: i0.Input, args: [{ isSignal: true, alias: "badge", required: false }] }], description: [{ type: i0.Input, args: [{ isSignal: true, alias: "description", required: false }] }], variant: [{ type: i0.Input, args: [{ isSignal: true, alias: "variant", required: false }] }], layout: [{ type: i0.Input, args: [{ isSignal: true, alias: "layout", required: false }] }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(AdminPageComponent, { className: "AdminPageComponent", filePath: "frontend/src/app/shared/ui/admin-page/admin-page.component.ts", lineNumber: 53 }); })();
