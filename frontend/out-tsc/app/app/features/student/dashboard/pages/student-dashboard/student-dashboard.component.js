import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { DashboardHeroComponent } from '../../components/dashboard-hero/dashboard-hero.component';
import { DashboardModuleGridComponent } from '../../components/dashboard-module-grid/dashboard-module-grid.component';
import { DashboardOperationalGridComponent } from '../../components/dashboard-operational-grid/dashboard-operational-grid.component';
import { StudentDashboardFacade } from '../../data-access/student-dashboard.facade';
import { StudentMobileBottomNavComponent } from '../../components/student-mobile-bottom-nav/student-mobile-bottom-nav.component';
import * as i0 from "@angular/core";
export class StudentDashboardComponent {
    facade = inject(StudentDashboardFacade);
    viewModel = this.facade.viewModel;
    static ɵfac = function StudentDashboardComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || StudentDashboardComponent)(); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: StudentDashboardComponent, selectors: [["erp-student-dashboard"]], decls: 8, vars: 3, consts: [["aria-label", "Student dashboard", 1, "student-dashboard"], [3, "viewModel"], ["aria-labelledby", "campus-modules-title", 1, "student-dashboard-modules-section"], ["id", "campus-modules-title"], [3, "modules"], [3, "state"]], template: function StudentDashboardComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0);
            i0.ɵɵelement(1, "erp-dashboard-hero", 1);
            i0.ɵɵelementStart(2, "section", 2)(3, "h2", 3);
            i0.ɵɵtext(4, "Explore your campus");
            i0.ɵɵelementEnd();
            i0.ɵɵelement(5, "erp-dashboard-module-grid", 4);
            i0.ɵɵelementEnd();
            i0.ɵɵelement(6, "erp-dashboard-operational-grid", 5)(7, "erp-student-mobile-bottom-nav");
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵadvance();
            i0.ɵɵproperty("viewModel", ctx.viewModel());
            i0.ɵɵadvance(4);
            i0.ɵɵproperty("modules", ctx.viewModel().modules);
            i0.ɵɵadvance();
            i0.ɵɵproperty("state", ctx.viewModel().operational);
        } }, dependencies: [DashboardHeroComponent,
            DashboardModuleGridComponent,
            DashboardOperationalGridComponent,
            StudentMobileBottomNavComponent], encapsulation: 2, changeDetection: 0 });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(StudentDashboardComponent, [{
        type: Component,
        args: [{ selector: 'erp-student-dashboard', imports: [
                    DashboardHeroComponent,
                    DashboardModuleGridComponent,
                    DashboardOperationalGridComponent,
                    StudentMobileBottomNavComponent,
                ], changeDetection: ChangeDetectionStrategy.OnPush, template: "<div class=\"student-dashboard\" aria-label=\"Student dashboard\">\n  <erp-dashboard-hero [viewModel]=\"viewModel()\" />\n\n  <section class=\"student-dashboard-modules-section\" aria-labelledby=\"campus-modules-title\">\n    <h2 id=\"campus-modules-title\">Explore your campus</h2>\n    <erp-dashboard-module-grid [modules]=\"viewModel().modules\" />\n  </section>\n\n  <erp-dashboard-operational-grid [state]=\"viewModel().operational\" />\n  <erp-student-mobile-bottom-nav />\n</div>\n" }]
    }], null, null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(StudentDashboardComponent, { className: "StudentDashboardComponent", filePath: "frontend/src/app/features/student/dashboard/pages/student-dashboard/student-dashboard.component.ts", lineNumber: 19 }); })();
