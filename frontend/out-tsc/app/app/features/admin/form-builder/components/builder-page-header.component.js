import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import * as i0 from "@angular/core";
const _c0 = ["*"];
function BuilderPageHeaderComponent_Conditional_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵdomElementStart(0, "span", 2);
    i0.ɵɵtext(1);
    i0.ɵɵdomElementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r0.eyebrow());
} }
function BuilderPageHeaderComponent_Conditional_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵdomElementStart(0, "p");
    i0.ɵɵtext(1);
    i0.ɵɵdomElementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r0.description());
} }
export class BuilderPageHeaderComponent {
    eyebrow = input('Admission', ...(ngDevMode ? [{ debugName: "eyebrow" }] : /* istanbul ignore next */ []));
    title = input('Dynamic Form Builder', ...(ngDevMode ? [{ debugName: "title" }] : /* istanbul ignore next */ []));
    description = input('Configure admission sections and fields.', ...(ngDevMode ? [{ debugName: "description" }] : /* istanbul ignore next */ []));
    saveState = input('Saved just now', ...(ngDevMode ? [{ debugName: "saveState" }] : /* istanbul ignore next */ []));
    variant = input('minimal', ...(ngDevMode ? [{ debugName: "variant" }] : /* istanbul ignore next */ []));
    static ɵfac = function BuilderPageHeaderComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || BuilderPageHeaderComponent)(); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: BuilderPageHeaderComponent, selectors: [["erp-builder-page-header"]], inputs: { eyebrow: [1, "eyebrow"], title: [1, "title"], description: [1, "description"], saveState: [1, "saveState"], variant: [1, "variant"] }, ngContentSelectors: _c0, decls: 10, vars: 8, consts: [[1, "builder-page-header"], [1, "builder-page-header__copy"], [1, "builder-page-header__eyebrow"], [1, "builder-page-header__actions"], ["aria-live", "polite", 1, "builder-save-state"]], template: function BuilderPageHeaderComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵprojectionDef();
            i0.ɵɵdomElementStart(0, "header", 0)(1, "div", 1);
            i0.ɵɵconditionalCreate(2, BuilderPageHeaderComponent_Conditional_2_Template, 2, 1, "span", 2);
            i0.ɵɵdomElementStart(3, "h1");
            i0.ɵɵtext(4);
            i0.ɵɵdomElementEnd();
            i0.ɵɵconditionalCreate(5, BuilderPageHeaderComponent_Conditional_5_Template, 2, 1, "p");
            i0.ɵɵdomElementEnd();
            i0.ɵɵdomElementStart(6, "div", 3)(7, "span", 4);
            i0.ɵɵtext(8);
            i0.ɵɵdomElementEnd();
            i0.ɵɵprojection(9);
            i0.ɵɵdomElementEnd()();
        } if (rf & 2) {
            i0.ɵɵclassProp("builder-page-header--compact", ctx.variant() === "compact")("builder-page-header--minimal", ctx.variant() === "minimal");
            i0.ɵɵadvance(2);
            i0.ɵɵconditional(ctx.eyebrow() && ctx.variant() !== "minimal" ? 2 : -1);
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate(ctx.title());
            i0.ɵɵadvance();
            i0.ɵɵconditional(ctx.description() && ctx.variant() !== "minimal" ? 5 : -1);
            i0.ɵɵadvance(3);
            i0.ɵɵtextInterpolate(ctx.saveState());
        } }, encapsulation: 2, changeDetection: 0 });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(BuilderPageHeaderComponent, [{
        type: Component,
        args: [{
                selector: 'erp-builder-page-header',
                template: `
    <header
      class="builder-page-header"
      [class.builder-page-header--compact]="variant() === 'compact'"
      [class.builder-page-header--minimal]="variant() === 'minimal'"
    >
      <div class="builder-page-header__copy">
        @if (eyebrow() && variant() !== 'minimal') {
          <span class="builder-page-header__eyebrow">{{ eyebrow() }}</span>
        }
        <h1>{{ title() }}</h1>
        @if (description() && variant() !== 'minimal') {
          <p>{{ description() }}</p>
        }
      </div>
      <div class="builder-page-header__actions">
        <span class="builder-save-state" aria-live="polite">{{ saveState() }}</span>
        <ng-content />
      </div>
    </header>
  `,
                changeDetection: ChangeDetectionStrategy.OnPush,
            }]
    }], null, { eyebrow: [{ type: i0.Input, args: [{ isSignal: true, alias: "eyebrow", required: false }] }], title: [{ type: i0.Input, args: [{ isSignal: true, alias: "title", required: false }] }], description: [{ type: i0.Input, args: [{ isSignal: true, alias: "description", required: false }] }], saveState: [{ type: i0.Input, args: [{ isSignal: true, alias: "saveState", required: false }] }], variant: [{ type: i0.Input, args: [{ isSignal: true, alias: "variant", required: false }] }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(BuilderPageHeaderComponent, { className: "BuilderPageHeaderComponent", filePath: "frontend/src/app/features/admin/form-builder/components/builder-page-header.component.ts", lineNumber: 30 }); })();
