import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { LucideCalendarDays } from '@lucide/angular';
import { DashboardWidgetStateComponent } from '../dashboard-widget-state/dashboard-widget-state.component';
import {
  DashboardWidgetState,
  StudentScheduleItem,
} from '../../models/student-dashboard-operational.model';

@Component({
  selector: 'erp-upcoming-schedule-card',
  imports: [DashboardWidgetStateComponent, LucideCalendarDays],
  template: `
    <article class="student-operational-card student-operational-card--schedule">
      <header class="student-operational-card__header">
        <span
          ><svg lucideCalendarDays size="18" aria-hidden="true"></svg><strong>Up next</strong></span
        >
      </header>
      <erp-dashboard-widget-state
        [status]="state().status"
        title="Schedule unavailable"
        message="Your timetable will appear here when the student schedule service is connected."
      />
    </article>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UpcomingScheduleCardComponent {
  readonly state = input.required<DashboardWidgetState<readonly StudentScheduleItem[]>>();
}
