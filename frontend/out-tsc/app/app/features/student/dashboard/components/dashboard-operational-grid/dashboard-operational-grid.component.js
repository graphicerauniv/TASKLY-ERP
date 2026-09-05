import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { AttendanceOverviewCardComponent } from '../attendance-overview-card/attendance-overview-card.component';
import { DashboardQuickUpdatesComponent } from '../dashboard-quick-updates/dashboard-quick-updates.component';
import { DashboardQuickActionsComponent } from '../dashboard-quick-actions/dashboard-quick-actions.component';
import { FeeStatusCardComponent } from '../fee-status-card/fee-status-card.component';
import { NoticesUpdatesCardComponent } from '../notices-updates-card/notices-updates-card.component';
import { UpcomingScheduleCardComponent } from '../upcoming-schedule-card/upcoming-schedule-card.component';
import * as i0 from "@angular/core";
export class DashboardOperationalGridComponent {
    state = input.required(...(ngDevMode ? [{ debugName: "state" }] : /* istanbul ignore next */ []));
    static ɵfac = function DashboardOperationalGridComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || DashboardOperationalGridComponent)(); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: DashboardOperationalGridComponent, selectors: [["erp-dashboard-operational-grid"]], inputs: { state: [1, "state"] }, decls: 9, vars: 8, consts: [["aria-label", "Student dashboard overview", 1, "student-dashboard-operational"], [1, "student-dashboard-operational__primary"], [3, "state"], [1, "student-dashboard-operational__utility"], [3, "actions"], [3, "attendance", "fees", "examination"]], template: function DashboardOperationalGridComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "section", 0)(1, "div", 1);
            i0.ɵɵelement(2, "erp-upcoming-schedule-card", 2)(3, "erp-attendance-overview-card", 2);
            i0.ɵɵelementStart(4, "div", 3);
            i0.ɵɵelement(5, "erp-fee-status-card", 2)(6, "erp-dashboard-quick-actions", 4);
            i0.ɵɵelementEnd()();
            i0.ɵɵelement(7, "erp-dashboard-quick-updates", 5)(8, "erp-notices-updates-card", 2);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("state", ctx.state().schedule);
            i0.ɵɵadvance();
            i0.ɵɵproperty("state", ctx.state().attendance);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("state", ctx.state().fees);
            i0.ɵɵadvance();
            i0.ɵɵproperty("actions", ctx.state().quickActions);
            i0.ɵɵadvance();
            i0.ɵɵproperty("attendance", ctx.state().attendance)("fees", ctx.state().fees)("examination", ctx.state().examinations);
            i0.ɵɵadvance();
            i0.ɵɵproperty("state", ctx.state().notices);
        } }, dependencies: [AttendanceOverviewCardComponent,
            DashboardQuickUpdatesComponent,
            DashboardQuickActionsComponent,
            FeeStatusCardComponent,
            NoticesUpdatesCardComponent,
            UpcomingScheduleCardComponent], encapsulation: 2, changeDetection: 0 });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(DashboardOperationalGridComponent, [{
        type: Component,
        args: [{
                selector: 'erp-dashboard-operational-grid',
                imports: [
                    AttendanceOverviewCardComponent,
                    DashboardQuickUpdatesComponent,
                    DashboardQuickActionsComponent,
                    FeeStatusCardComponent,
                    NoticesUpdatesCardComponent,
                    UpcomingScheduleCardComponent,
                ],
                template: `
    <section class="student-dashboard-operational" aria-label="Student dashboard overview">
      <div class="student-dashboard-operational__primary">
        <erp-upcoming-schedule-card [state]="state().schedule" />
        <erp-attendance-overview-card [state]="state().attendance" />
        <div class="student-dashboard-operational__utility">
          <erp-fee-status-card [state]="state().fees" />
          <erp-dashboard-quick-actions [actions]="state().quickActions" />
        </div>
      </div>
      <erp-dashboard-quick-updates
        [attendance]="state().attendance"
        [fees]="state().fees"
        [examination]="state().examinations"
      />
      <erp-notices-updates-card [state]="state().notices" />
    </section>
  `,
                changeDetection: ChangeDetectionStrategy.OnPush,
            }]
    }], null, { state: [{ type: i0.Input, args: [{ isSignal: true, alias: "state", required: true }] }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(DashboardOperationalGridComponent, { className: "DashboardOperationalGridComponent", filePath: "frontend/src/app/features/student/dashboard/components/dashboard-operational-grid/dashboard-operational-grid.component.ts", lineNumber: 40 }); })();
