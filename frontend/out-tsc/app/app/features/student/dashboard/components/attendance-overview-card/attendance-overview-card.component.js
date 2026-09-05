import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { LucideChartNoAxesCombined } from '@lucide/angular';
import { DashboardWidgetStateComponent } from '../dashboard-widget-state/dashboard-widget-state.component';
import * as i0 from "@angular/core";
function AttendanceOverviewCardComponent_Conditional_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 3)(1, "div", 5)(2, "span")(3, "strong");
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "small");
    i0.ɵɵtext(6, "Overall");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(7, "dl")(8, "div")(9, "dt");
    i0.ɵɵtext(10, "Classes attended");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(11, "dd");
    i0.ɵɵtext(12);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(13, "div")(14, "dt");
    i0.ɵɵtext(15, "Classes held");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(16, "dd");
    i0.ɵɵtext(17);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(18, "button", 6);
    i0.ɵɵtext(19, "View attendance");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const attendance_r1 = ctx;
    i0.ɵɵadvance();
    i0.ɵɵstyleProp("--student-attendance-progress", (attendance_r1.percentage || 0) + "%");
    i0.ɵɵattribute("aria-label", (attendance_r1.percentage || 0) + "% attendance");
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1("", attendance_r1.percentage, "%");
    i0.ɵɵadvance(8);
    i0.ɵɵtextInterpolate(attendance_r1.attendedClasses);
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(attendance_r1.totalClasses);
} }
function AttendanceOverviewCardComponent_Conditional_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "erp-dashboard-widget-state", 4);
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵproperty("status", ctx_r1.state().status);
} }
export class AttendanceOverviewCardComponent {
    state = input.required(...(ngDevMode ? [{ debugName: "state" }] : /* istanbul ignore next */ []));
    static ɵfac = function AttendanceOverviewCardComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || AttendanceOverviewCardComponent)(); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: AttendanceOverviewCardComponent, selectors: [["erp-attendance-overview-card"]], inputs: { state: [1, "state"] }, decls: 8, vars: 1, consts: [[1, "student-operational-card", "student-operational-card--attendance"], [1, "student-operational-card__header"], ["lucideChartNoAxesCombined", "", "size", "18", "aria-hidden", "true"], [1, "student-attendance-summary"], ["title", "Attendance unavailable", "message", "Attendance data will appear after the official student endpoint is available.", 3, "status"], ["role", "img", 1, "student-attendance-ring"], ["type", "button", "disabled", ""]], template: function AttendanceOverviewCardComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "article", 0)(1, "header", 1)(2, "span");
            i0.ɵɵnamespaceSVG();
            i0.ɵɵelement(3, "svg", 2);
            i0.ɵɵnamespaceHTML();
            i0.ɵɵelementStart(4, "strong");
            i0.ɵɵtext(5, "Attendance");
            i0.ɵɵelementEnd()()();
            i0.ɵɵconditionalCreate(6, AttendanceOverviewCardComponent_Conditional_6_Template, 20, 6, "div", 3)(7, AttendanceOverviewCardComponent_Conditional_7_Template, 1, 1, "erp-dashboard-widget-state", 4);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            let tmp_0_0;
            i0.ɵɵadvance(6);
            i0.ɵɵconditional((tmp_0_0 = ctx.state().data) ? 6 : 7, tmp_0_0);
        } }, dependencies: [DashboardWidgetStateComponent, LucideChartNoAxesCombined], encapsulation: 2, changeDetection: 0 });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AttendanceOverviewCardComponent, [{
        type: Component,
        args: [{
                selector: 'erp-attendance-overview-card',
                imports: [DashboardWidgetStateComponent, LucideChartNoAxesCombined],
                template: `
    <article class="student-operational-card student-operational-card--attendance">
      <header class="student-operational-card__header">
        <span
          ><svg lucideChartNoAxesCombined size="18" aria-hidden="true"></svg
          ><strong>Attendance</strong></span
        >
      </header>
      @if (state().data; as attendance) {
        <div class="student-attendance-summary">
          <div
            class="student-attendance-ring"
            [style.--student-attendance-progress]="(attendance.percentage || 0) + '%'"
            role="img"
            [attr.aria-label]="(attendance.percentage || 0) + '% attendance'"
          >
            <span><strong>{{ attendance.percentage }}%</strong><small>Overall</small></span>
          </div>
          <dl>
            <div><dt>Classes attended</dt><dd>{{ attendance.attendedClasses }}</dd></div>
            <div><dt>Classes held</dt><dd>{{ attendance.totalClasses }}</dd></div>
          </dl>
          <button type="button" disabled>View attendance</button>
        </div>
      } @else {
        <erp-dashboard-widget-state
          [status]="state().status"
          title="Attendance unavailable"
          message="Attendance data will appear after the official student endpoint is available."
        />
      }
    </article>
  `,
                changeDetection: ChangeDetectionStrategy.OnPush,
            }]
    }], null, { state: [{ type: i0.Input, args: [{ isSignal: true, alias: "state", required: true }] }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(AttendanceOverviewCardComponent, { className: "AttendanceOverviewCardComponent", filePath: "frontend/src/app/features/student/dashboard/components/attendance-overview-card/attendance-overview-card.component.ts", lineNumber: 47 }); })();
