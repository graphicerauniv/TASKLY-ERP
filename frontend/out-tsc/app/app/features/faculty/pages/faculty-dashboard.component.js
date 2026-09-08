import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { DashboardModuleGridComponent } from '../../student/dashboard/components/dashboard-module-grid/dashboard-module-grid.component';
import { FacultySessionService } from '../shared/faculty-session.service';
import * as i0 from "@angular/core";
function FacultyDashboardComponent_Conditional_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtext(0, " , ");
    i0.ɵɵelementStart(1, "span");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx);
} }
const FACULTY_MODULES = [
    {
        id: 'attendance',
        label: 'Attendance',
        imagePath: '/assets/student/dashboard/modules/attendance.webp',
        route: '/faculty/attendance',
        ariaLabel: 'Open faculty attendance',
        background: 'var(--student-module-attendance)',
        enabled: true,
        order: 1,
        imageWidth: 384,
        imageHeight: 384,
    },
    {
        id: 'exams',
        label: 'Exams',
        imagePath: '/assets/student/dashboard/modules/exams.webp',
        route: '/faculty/exams',
        ariaLabel: 'Open faculty exams',
        background: 'var(--student-module-exams)',
        enabled: true,
        order: 2,
        imageWidth: 384,
        imageHeight: 384,
    },
];
export class FacultyDashboardComponent {
    session = inject(FacultySessionService);
    modules = FACULTY_MODULES;
    static ɵfac = function FacultyDashboardComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || FacultyDashboardComponent)(); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: FacultyDashboardComponent, selectors: [["erp-faculty-dashboard"]], decls: 17, vars: 2, consts: [["aria-label", "Faculty dashboard", 1, "student-dashboard"], ["aria-labelledby", "faculty-dashboard-greeting", 1, "student-dashboard-hero"], [1, "student-dashboard-hero__copy"], ["id", "faculty-dashboard-greeting"], ["src", "/assets/student/dashboard/hero/day-illustration.webp", "alt", "", "width", "1774", "height", "887", "decoding", "async", 1, "student-dashboard-hero__art"], ["aria-labelledby", "faculty-modules-title", 1, "student-dashboard-modules-section"], ["id", "faculty-modules-title"], [3, "modules"]], template: function FacultyDashboardComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0)(1, "section", 1)(2, "div", 2)(3, "h2", 3);
            i0.ɵɵtext(4, " Ready for your day ");
            i0.ɵɵconditionalCreate(5, FacultyDashboardComponent_Conditional_5_Template, 3, 1);
            i0.ɵɵtext(6, " ? ");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(7, "p");
            i0.ɵɵtext(8, "Your faculty workspace starts with ");
            i0.ɵɵelementStart(9, "strong");
            i0.ɵɵtext(10, "attendance and examinations");
            i0.ɵɵelementEnd();
            i0.ɵɵtext(11, ".");
            i0.ɵɵelementEnd()();
            i0.ɵɵelement(12, "img", 4);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(13, "section", 5)(14, "h2", 6);
            i0.ɵɵtext(15, "Faculty services");
            i0.ɵɵelementEnd();
            i0.ɵɵelement(16, "erp-dashboard-module-grid", 7);
            i0.ɵɵelementEnd()();
        } if (rf & 2) {
            let tmp_0_0;
            i0.ɵɵadvance(5);
            i0.ɵɵconditional((tmp_0_0 = ctx.session.firstName()) ? 5 : -1, tmp_0_0);
            i0.ɵɵadvance(11);
            i0.ɵɵproperty("modules", ctx.modules);
        } }, dependencies: [DashboardModuleGridComponent], encapsulation: 2, changeDetection: 0 });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(FacultyDashboardComponent, [{
        type: Component,
        args: [{ selector: 'erp-faculty-dashboard', imports: [DashboardModuleGridComponent], changeDetection: ChangeDetectionStrategy.OnPush, template: "<div class=\"student-dashboard\" aria-label=\"Faculty dashboard\">\n  <section class=\"student-dashboard-hero\" aria-labelledby=\"faculty-dashboard-greeting\">\n    <div class=\"student-dashboard-hero__copy\">\n      <h2 id=\"faculty-dashboard-greeting\">\n        Ready for your day\n        @if (session.firstName(); as firstName) {\n          , <span>{{ firstName }}</span>\n        }\n        ?\n      </h2>\n      <p>Your faculty workspace starts with <strong>attendance and examinations</strong>.</p>\n    </div>\n    <img\n      class=\"student-dashboard-hero__art\"\n      src=\"/assets/student/dashboard/hero/day-illustration.webp\"\n      alt=\"\"\n      width=\"1774\"\n      height=\"887\"\n      decoding=\"async\"\n    />\n  </section>\n  <section class=\"student-dashboard-modules-section\" aria-labelledby=\"faculty-modules-title\">\n    <h2 id=\"faculty-modules-title\">Faculty services</h2>\n    <erp-dashboard-module-grid [modules]=\"modules\" />\n  </section>\n</div>\n" }]
    }], null, null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(FacultyDashboardComponent, { className: "FacultyDashboardComponent", filePath: "frontend/src/app/features/faculty/pages/faculty-dashboard.component.ts", lineNumber: 39 }); })();
