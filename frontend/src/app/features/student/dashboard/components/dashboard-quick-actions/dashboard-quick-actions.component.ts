import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { LucideBadgeIndianRupee, LucideCalendarPlus, LucideFileCheck2, LucideIdCard } from '@lucide/angular';
import { DashboardQuickAction } from '../../models/student-dashboard-operational.model';

@Component({
  selector: 'erp-dashboard-quick-actions',
  imports: [LucideBadgeIndianRupee, LucideCalendarPlus, LucideFileCheck2, LucideIdCard],
  template: `
    <article class="student-operational-card student-operational-card--quick-actions">
      <header class="student-operational-card__header"><strong>Quick actions</strong></header>
      <div class="student-quick-actions" aria-label="Student quick actions">
        @for (action of actions(); track action.id) {
          <button type="button" disabled [attr.aria-label]="action.label + ' — unavailable'">
            <span aria-hidden="true">
              @switch (action.id) {
                @case ('fees') { <svg lucideBadgeIndianRupee size="21"></svg> }
                @case ('id-card') { <svg lucideIdCard size="21"></svg> }
                @case ('certificate') { <svg lucideFileCheck2 size="21"></svg> }
                @case ('leave') { <svg lucideCalendarPlus size="21"></svg> }
              }
            </span>
            <small>{{ action.label }}</small>
          </button>
        }
      </div>
    </article>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboardQuickActionsComponent {
  readonly actions = input.required<readonly DashboardQuickAction[]>();
}
