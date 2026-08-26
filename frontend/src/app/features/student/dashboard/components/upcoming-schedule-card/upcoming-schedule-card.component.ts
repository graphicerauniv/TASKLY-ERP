import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { LucideCalendarDays, LucideChevronRight, LucideMapPin } from '@lucide/angular';
import { DashboardWidgetStateComponent } from '../dashboard-widget-state/dashboard-widget-state.component';
import {
  DashboardWidgetState,
  StudentScheduleItem,
} from '../../models/student-dashboard-operational.model';

@Component({
  selector: 'erp-upcoming-schedule-card',
  imports: [DashboardWidgetStateComponent, LucideCalendarDays, LucideChevronRight, LucideMapPin],
  template: `
    <article class="student-operational-card student-operational-card--schedule">
      <header class="student-operational-card__header">
        <span
          ><svg lucideCalendarDays size="18" aria-hidden="true"></svg><strong>Up next</strong></span
        >
        <button type="button" disabled aria-label="View calendar — coming soon">View calendar</button>
      </header>
      @if (state().data; as schedule) {
        @if (schedule[0]; as nextClass) {
          <div class="student-schedule-mobile">
            <div class="student-schedule-mobile__time">
              <strong>{{ nextClass.startTime.split(' ')[0] }}</strong>
              <span>{{ nextClass.startTime.split(' ')[1] }}</span>
              <small>{{ nextClass.relativeLabel }}</small>
            </div>
            <div class="student-schedule-mobile__content">
              <strong>{{ nextClass.title }}</strong>
              <p>
                <span>{{ nextClass.faculty }}</span>
                <span><svg lucideMapPin size="14" aria-hidden="true"></svg>{{ nextClass.location }}</span>
              </p>
              <div class="student-schedule-mobile__timeline" aria-label="Class starts in 25 minutes">
                <span>Scheduled</span><span>{{ nextClass.relativeLabel }}</span><span>Completed</span>
              </div>
            </div>
            <button type="button" disabled aria-label="Open upcoming class — coming soon">
              <svg lucideChevronRight size="22" aria-hidden="true"></svg>
            </button>
          </div>

          <div class="student-schedule-desktop">
            @for (item of schedule; track item.id) {
              <div class="student-schedule-row">
                <time>{{ item.startTime }}</time>
                <span class="student-schedule-row__marker" aria-hidden="true"></span>
                <span class="student-schedule-row__details">
                  <strong>{{ item.title }}</strong>
                  <small>{{ item.faculty }} · {{ item.location }}</small>
                </span>
                <small class="student-schedule-row__relative">{{ item.relativeLabel }}</small>
              </div>
            }
            <button type="button" disabled>View full schedule</button>
          </div>
        }
      } @else {
        <erp-dashboard-widget-state
          [status]="state().status"
          title="Schedule unavailable"
          message="Your timetable will appear here when the student schedule service is connected."
        />
      }
    </article>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UpcomingScheduleCardComponent {
  readonly state = input.required<DashboardWidgetState<readonly StudentScheduleItem[]>>();
}
