import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { LucideMegaphone } from '@lucide/angular';
import { DashboardWidgetStateComponent } from '../dashboard-widget-state/dashboard-widget-state.component';
import { DashboardWidgetState, NoticeViewModel } from '../../models/student-dashboard-operational.model';

@Component({
  selector: 'erp-notices-updates-card',
  imports: [DashboardWidgetStateComponent, LucideMegaphone],
  template: `
    <article class="student-operational-card student-operational-card--secondary">
      <header class="student-operational-card__header"><span><svg lucideMegaphone size="18" aria-hidden="true"></svg><strong>Notices & updates</strong></span></header>
      <erp-dashboard-widget-state [status]="state().status" title="Notices unavailable" message="Relevant campus notices will appear when the student notice service is connected." />
    </article>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NoticesUpdatesCardComponent {
  readonly state = input.required<DashboardWidgetState<readonly NoticeViewModel[]>>();
}
