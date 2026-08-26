import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { LucideChartNoAxesCombined } from '@lucide/angular';
import { DashboardWidgetStateComponent } from '../dashboard-widget-state/dashboard-widget-state.component';
import {
  AttendanceDashboardViewModel,
  DashboardWidgetState,
} from '../../models/student-dashboard-operational.model';

@Component({
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
      <erp-dashboard-widget-state
        [status]="state().status"
        title="Attendance unavailable"
        message="Attendance data will appear after the official student endpoint is available."
      />
    </article>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AttendanceOverviewCardComponent {
  readonly state = input.required<DashboardWidgetState<AttendanceDashboardViewModel>>();
}
