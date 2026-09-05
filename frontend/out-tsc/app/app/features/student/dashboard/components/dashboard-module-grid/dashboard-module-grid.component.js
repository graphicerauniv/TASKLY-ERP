import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { DashboardModuleCardComponent } from '../dashboard-module-card/dashboard-module-card.component';
import * as i0 from "@angular/core";
const _forTrack0 = ($index, $item) => $item.id;
function DashboardModuleGridComponent_For_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "li");
    i0.ɵɵelement(1, "erp-dashboard-module-card", 1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const module_r1 = ctx.$implicit;
    i0.ɵɵadvance();
    i0.ɵɵproperty("module", module_r1);
} }
export class DashboardModuleGridComponent {
    modules = input.required(...(ngDevMode ? [{ debugName: "modules" }] : /* istanbul ignore next */ []));
    static ɵfac = function DashboardModuleGridComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || DashboardModuleGridComponent)(); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: DashboardModuleGridComponent, selectors: [["erp-dashboard-module-grid"]], inputs: { modules: [1, "modules"] }, decls: 4, vars: 0, consts: [["aria-label", "Student ERP modules", 1, "student-dashboard-modules"], [3, "module"]], template: function DashboardModuleGridComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "nav", 0)(1, "ul");
            i0.ɵɵrepeaterCreate(2, DashboardModuleGridComponent_For_3_Template, 2, 1, "li", null, _forTrack0);
            i0.ɵɵelementEnd()();
        } if (rf & 2) {
            i0.ɵɵadvance(2);
            i0.ɵɵrepeater(ctx.modules());
        } }, dependencies: [DashboardModuleCardComponent], encapsulation: 2, changeDetection: 0 });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(DashboardModuleGridComponent, [{
        type: Component,
        args: [{ selector: 'erp-dashboard-module-grid', imports: [DashboardModuleCardComponent], changeDetection: ChangeDetectionStrategy.OnPush, template: "<nav class=\"student-dashboard-modules\" aria-label=\"Student ERP modules\">\n  <ul>\n    @for (module of modules(); track module.id) {\n      <li>\n        <erp-dashboard-module-card [module]=\"module\" />\n      </li>\n    }\n  </ul>\n</nav>\n" }]
    }], null, { modules: [{ type: i0.Input, args: [{ isSignal: true, alias: "modules", required: true }] }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(DashboardModuleGridComponent, { className: "DashboardModuleGridComponent", filePath: "frontend/src/app/features/student/dashboard/components/dashboard-module-grid/dashboard-module-grid.component.ts", lineNumber: 11 }); })();
