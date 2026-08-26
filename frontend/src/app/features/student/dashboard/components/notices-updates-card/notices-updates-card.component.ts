import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { LucideMegaphone } from '@lucide/angular';
import { DashboardWidgetStateComponent } from '../dashboard-widget-state/dashboard-widget-state.component';
import {
  DashboardWidgetState,
  NoticeViewModel,
} from '../../models/student-dashboard-operational.model';

@Component({
  selector: 'erp-notices-updates-card',
  imports: [DashboardWidgetStateComponent, LucideMegaphone],
  template: `
    <article class="student-operational-card student-operational-card--notices">
      <header class="student-operational-card__header">
        <span
          ><svg lucideMegaphone size="18" aria-hidden="true"></svg
          ><strong><span class="student-notices__desktop-title">Notices & updates</span><span class="student-notices__mobile-title">Announcements</span></strong></span
        >
        <button type="button" disabled>View all</button>
      </header>
      @if (state().data; as notices) {
        <div class="student-notices-list">
          @for (notice of notices; track notice.id; let index = $index) {
            <article class="student-notice" [class.student-notice--featured]="index === 0">
              <span class="student-notice__marker" aria-hidden="true"></span>
              <span class="student-notice__copy">
                <strong>{{ notice.title }}</strong>
                @if (index === 0) {
                  <small>Check your exam schedule in Exams section.</small>
                }
              </span>
              <time>{{ index === 0 ? '2h ago' : notice.publishedAt }}</time>
            </article>
          }
        </div>
        <div class="student-notices__pagination" aria-hidden="true">
          <span class="student-notices__pagination-dot--active"></span><span></span><span></span><span></span>
        </div>
      } @else {
        <erp-dashboard-widget-state
          [status]="state().status"
          title="Notices unavailable"
          message="Relevant campus notices will appear when the student notice service is connected."
        />
      }
    </article>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NoticesUpdatesCardComponent {
  readonly state = input.required<DashboardWidgetState<readonly NoticeViewModel[]>>();
}
