import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { AttendanceOverviewCardComponent } from '../attendance-overview-card/attendance-overview-card.component';
import { DashboardQuickUpdatesComponent } from '../dashboard-quick-updates/dashboard-quick-updates.component';
import { DashboardQuickActionsComponent } from '../dashboard-quick-actions/dashboard-quick-actions.component';
import { FeeStatusCardComponent } from '../fee-status-card/fee-status-card.component';
import { NoticesUpdatesCardComponent } from '../notices-updates-card/notices-updates-card.component';
import { UpcomingScheduleCardComponent } from '../upcoming-schedule-card/upcoming-schedule-card.component';
import { StudentDashboardOperationalState } from '../../models/student-dashboard-operational.model';

@Component({
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
})
export class DashboardOperationalGridComponent {
  readonly state = input.required<StudentDashboardOperationalState>();
}
