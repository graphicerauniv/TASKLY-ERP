import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LucideCalendarDays, LucideChevronRight, LucideMapPin } from '@lucide/angular';
import { DashboardWidgetStateComponent } from '../dashboard-widget-state/dashboard-widget-state.component';
import {
  DashboardWidgetState,
  StudentScheduleItem,
} from '../../models/student-dashboard-operational.model';

@Component({
  selector: 'erp-upcoming-schedule-card',
  imports: [
    DashboardWidgetStateComponent,
    RouterLink,
    LucideCalendarDays,
    LucideChevronRight,
    LucideMapPin,
  ],
  template: `
    <article class="student-operational-card student-operational-card--schedule">
      <header class="student-operational-card__header">
        <span
          ><svg lucideCalendarDays size="18" aria-hidden="true"></svg><strong>Up next</strong></span
        >
        <button type="button" routerLink="/student/academics" aria-label="View timetable">
          View timetable
        </button>
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
                <span
                  ><svg lucideMapPin size="14" aria-hidden="true"></svg
                  >{{ nextClass.location }}</span
                >
              </p>
              <div
                class="student-schedule-mobile__timeline"
                [attr.aria-label]="nextClass.relativeLabel"
              >
                <span>Scheduled</span><span>{{ nextClass.relativeLabel }}</span
                ><span>Completed</span>
              </div>
            </div>
            <button type="button" routerLink="/student/academics" aria-label="Open timetable">
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
            <button type="button" routerLink="/student/academics">View full schedule</button>
          </div>
        } @else {
          <erp-dashboard-widget-state
            status="empty"
            title="No more classes today"
            message="Your next configured class will appear here on its scheduled day."
          />
        }
      } @else {
        <erp-dashboard-widget-state
          [status]="state().status"
          title="Schedule unavailable"
          [message]="state().errorMessage || 'Your timetable is currently unavailable.'"
        />
      }
    </article>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UpcomingScheduleCardComponent {
  readonly state = input.required<DashboardWidgetState<readonly StudentScheduleItem[]>>();
}
