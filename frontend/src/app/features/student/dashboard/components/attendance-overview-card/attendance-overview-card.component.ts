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
})
export class AttendanceOverviewCardComponent {
  readonly state = input.required<DashboardWidgetState<AttendanceDashboardViewModel>>();
}
