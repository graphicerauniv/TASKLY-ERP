import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { AcademicProgressCardComponent } from '../academic-progress-card/academic-progress-card.component';
import { AttendanceOverviewCardComponent } from '../attendance-overview-card/attendance-overview-card.component';
import { DashboardQuickActionsComponent } from '../dashboard-quick-actions/dashboard-quick-actions.component';
import { FeeStatusCardComponent } from '../fee-status-card/fee-status-card.component';
import { HostelCampusSummaryCardComponent } from '../hostel-campus-summary-card/hostel-campus-summary-card.component';
import { NoticesUpdatesCardComponent } from '../notices-updates-card/notices-updates-card.component';
import { RecentDocumentsCardComponent } from '../recent-documents-card/recent-documents-card.component';
import { UpcomingScheduleCardComponent } from '../upcoming-schedule-card/upcoming-schedule-card.component';
import { StudentDashboardOperationalState } from '../../models/student-dashboard-operational.model';

@Component({
  selector: 'erp-dashboard-operational-grid',
  imports: [
    AcademicProgressCardComponent,
    AttendanceOverviewCardComponent,
    DashboardQuickActionsComponent,
    FeeStatusCardComponent,
    HostelCampusSummaryCardComponent,
    NoticesUpdatesCardComponent,
    RecentDocumentsCardComponent,
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
      <div class="student-dashboard-operational__secondary">
        <erp-academic-progress-card [state]="state().academics" />
        <erp-hostel-campus-summary-card [state]="state().hostel" />
        <erp-notices-updates-card [state]="state().notices" />
        <erp-recent-documents-card [state]="state().documents" />
      </div>
    </section>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboardOperationalGridComponent {
  readonly state = input.required<StudentDashboardOperationalState>();
}
