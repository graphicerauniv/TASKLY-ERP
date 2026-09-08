import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { LucideCalendarCheck, LucideClipboardCheck } from '@lucide/angular';
import * as i0 from "@angular/core";
function FacultyFeatureComponent_Conditional_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(0, "svg", 1);
} }
function FacultyFeatureComponent_Conditional_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(0, "svg", 2);
} }
export class FacultyFeatureComponent {
    feature = inject(ActivatedRoute).snapshot.data['feature'];
    static ɵfac = function FacultyFeatureComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || FacultyFeatureComponent)(); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: FacultyFeatureComponent, selectors: [["erp-faculty-feature"]], decls: 11, vars: 3, consts: [[1, "student-dashboard-placeholder"], ["lucideCalendarCheck", "", "size", "42", "aria-hidden", "true"], ["lucideClipboardCheck", "", "size", "42", "aria-hidden", "true"], [1, "student-dashboard-placeholder__eyebrow"], ["routerLink", "/faculty/dashboard"]], template: function FacultyFeatureComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "section", 0);
            i0.ɵɵconditionalCreate(1, FacultyFeatureComponent_Conditional_1_Template, 1, 0, ":svg:svg", 1)(2, FacultyFeatureComponent_Conditional_2_Template, 1, 0, ":svg:svg", 2);
            i0.ɵɵelementStart(3, "p", 3);
            i0.ɵɵtext(4, "Faculty portal");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(5, "h1");
            i0.ɵɵtext(6);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(7, "p");
            i0.ɵɵtext(8);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(9, "a", 4);
            i0.ɵɵtext(10, "Back to dashboard");
            i0.ɵɵelementEnd()();
        } if (rf & 2) {
            i0.ɵɵadvance();
            i0.ɵɵconditional(ctx.feature === "attendance" ? 1 : 2);
            i0.ɵɵadvance(5);
            i0.ɵɵtextInterpolate(ctx.feature === "attendance" ? "Attendance" : "Exams");
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate1(" ", ctx.feature === "attendance" ? "Faculty attendance tools are ready for the next implementation phase." : "Faculty examination tools are ready for the next implementation phase.", " ");
        } }, dependencies: [RouterLink, LucideCalendarCheck, LucideClipboardCheck], encapsulation: 2, changeDetection: 0 });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(FacultyFeatureComponent, [{
        type: Component,
        args: [{
                selector: 'erp-faculty-feature',
                imports: [RouterLink, LucideCalendarCheck, LucideClipboardCheck],
                template: `
    <section class="student-dashboard-placeholder">
      @if (feature === 'attendance') {
        <svg lucideCalendarCheck size="42" aria-hidden="true"></svg>
      } @else {
        <svg lucideClipboardCheck size="42" aria-hidden="true"></svg>
      }
      <p class="student-dashboard-placeholder__eyebrow">Faculty portal</p>
      <h1>{{ feature === 'attendance' ? 'Attendance' : 'Exams' }}</h1>
      <p>
        {{
          feature === 'attendance'
            ? 'Faculty attendance tools are ready for the next implementation phase.'
            : 'Faculty examination tools are ready for the next implementation phase.'
        }}
      </p>
      <a routerLink="/faculty/dashboard">Back to dashboard</a>
    </section>
  `,
                changeDetection: ChangeDetectionStrategy.OnPush,
            }]
    }], null, null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(FacultyFeatureComponent, { className: "FacultyFeatureComponent", filePath: "frontend/src/app/features/faculty/pages/faculty-feature.component.ts", lineNumber: 29 }); })();
