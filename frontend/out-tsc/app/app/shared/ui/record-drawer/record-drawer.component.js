import { ChangeDetectionStrategy, Component, input, output } from '@angular/core';
import { AdminDrawerComponent } from '../admin-drawer/admin-drawer.component';
import { AdminIllustrationComponent } from '../admin-illustration/admin-illustration.component';
import * as i0 from "@angular/core";
const _c0 = ["*", [["", "drawer-actions", ""]]];
const _c1 = ["*", "[drawer-actions]"];
const _forTrack0 = ($index, $item) => $item.label;
function RecordDrawerComponent_For_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div")(1, "dt");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "dd");
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const field_r1 = ctx.$implicit;
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(field_r1.label);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(field_r1.value ?? "\u2014");
} }
function RecordDrawerComponent_Conditional_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 2);
    i0.ɵɵelement(1, "erp-admin-illustration", 4);
    i0.ɵɵelementStart(2, "p");
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵproperty("kind", ctx_r1.illustration());
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r1.guidance());
} }
export class RecordDrawerComponent {
    open = input(false, ...(ngDevMode ? [{ debugName: "open" }] : /* istanbul ignore next */ []));
    title = input.required(...(ngDevMode ? [{ debugName: "title" }] : /* istanbul ignore next */ []));
    description = input('', ...(ngDevMode ? [{ debugName: "description" }] : /* istanbul ignore next */ []));
    fields = input.required(...(ngDevMode ? [{ debugName: "fields" }] : /* istanbul ignore next */ []));
    guidance = input('', ...(ngDevMode ? [{ debugName: "guidance" }] : /* istanbul ignore next */ []));
    illustration = input('applicationForm', ...(ngDevMode ? [{ debugName: "illustration" }] : /* istanbul ignore next */ []));
    busy = input(false, ...(ngDevMode ? [{ debugName: "busy" }] : /* istanbul ignore next */ []));
    closed = output();
    static ɵfac = function RecordDrawerComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || RecordDrawerComponent)(); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: RecordDrawerComponent, selectors: [["erp-record-drawer"]], inputs: { open: [1, "open"], title: [1, "title"], description: [1, "description"], fields: [1, "fields"], guidance: [1, "guidance"], illustration: [1, "illustration"], busy: [1, "busy"] }, outputs: { closed: "closed" }, ngContentSelectors: _c1, decls: 8, vars: 6, consts: [[3, "closed", "open", "title", "description", "illustration", "busy"], [1, "erp-crm-detail-list"], [1, "erp-crm-guidance"], ["drawer-actions", ""], ["size", "compact", 3, "kind"]], template: function RecordDrawerComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵprojectionDef(_c0);
            i0.ɵɵelementStart(0, "erp-admin-drawer", 0);
            i0.ɵɵlistener("closed", function RecordDrawerComponent_Template_erp_admin_drawer_closed_0_listener() { return ctx.closed.emit(); });
            i0.ɵɵelementStart(1, "dl", 1);
            i0.ɵɵrepeaterCreate(2, RecordDrawerComponent_For_3_Template, 5, 2, "div", null, _forTrack0);
            i0.ɵɵelementEnd();
            i0.ɵɵconditionalCreate(4, RecordDrawerComponent_Conditional_4_Template, 4, 2, "div", 2);
            i0.ɵɵprojection(5);
            i0.ɵɵelementContainerStart(6, 3);
            i0.ɵɵprojection(7, 1);
            i0.ɵɵelementContainerEnd();
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵproperty("open", ctx.open())("title", ctx.title())("description", ctx.description())("illustration", ctx.illustration())("busy", ctx.busy());
            i0.ɵɵadvance(2);
            i0.ɵɵrepeater(ctx.fields());
            i0.ɵɵadvance(2);
            i0.ɵɵconditional(ctx.guidance() ? 4 : -1);
        } }, dependencies: [AdminDrawerComponent, AdminIllustrationComponent], encapsulation: 2, changeDetection: 0 });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(RecordDrawerComponent, [{
        type: Component,
        args: [{
                selector: 'erp-record-drawer',
                imports: [AdminDrawerComponent, AdminIllustrationComponent],
                template: `
    <erp-admin-drawer
      [open]="open()"
      [title]="title()"
      [description]="description()"
      [illustration]="illustration()"
      [busy]="busy()"
      (closed)="closed.emit()"
    >
      <dl class="erp-crm-detail-list">
        @for (field of fields(); track field.label) {
          <div>
            <dt>{{ field.label }}</dt>
            <dd>{{ field.value ?? '—' }}</dd>
          </div>
        }
      </dl>
      @if (guidance()) {
        <div class="erp-crm-guidance">
          <erp-admin-illustration [kind]="illustration()" size="compact" />
          <p>{{ guidance() }}</p>
        </div>
      }
      <ng-content />
      <ng-container drawer-actions><ng-content select="[drawer-actions]" /></ng-container>
    </erp-admin-drawer>
  `,
                changeDetection: ChangeDetectionStrategy.OnPush,
            }]
    }], null, { open: [{ type: i0.Input, args: [{ isSignal: true, alias: "open", required: false }] }], title: [{ type: i0.Input, args: [{ isSignal: true, alias: "title", required: true }] }], description: [{ type: i0.Input, args: [{ isSignal: true, alias: "description", required: false }] }], fields: [{ type: i0.Input, args: [{ isSignal: true, alias: "fields", required: true }] }], guidance: [{ type: i0.Input, args: [{ isSignal: true, alias: "guidance", required: false }] }], illustration: [{ type: i0.Input, args: [{ isSignal: true, alias: "illustration", required: false }] }], busy: [{ type: i0.Input, args: [{ isSignal: true, alias: "busy", required: false }] }], closed: [{ type: i0.Output, args: ["closed"] }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(RecordDrawerComponent, { className: "RecordDrawerComponent", filePath: "frontend/src/app/shared/ui/record-drawer/record-drawer.component.ts", lineNumber: 43 }); })();
