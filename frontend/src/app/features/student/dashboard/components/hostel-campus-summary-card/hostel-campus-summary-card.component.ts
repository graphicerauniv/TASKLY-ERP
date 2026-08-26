import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { LucideBuilding2 } from '@lucide/angular';
import { DashboardWidgetStateComponent } from '../dashboard-widget-state/dashboard-widget-state.component';
import { DashboardWidgetState, HostelSummaryViewModel } from '../../models/student-dashboard-operational.model';

@Component({
  selector: 'erp-hostel-campus-summary-card',
  imports: [DashboardWidgetStateComponent, LucideBuilding2],
  template: `
    <article class="student-operational-card student-operational-card--secondary">
      <header class="student-operational-card__header"><span><svg lucideBuilding2 size="18" aria-hidden="true"></svg><strong>Hostel & campus</strong></span></header>
      <erp-dashboard-widget-state [status]="state().status" title="Hostel allocation unavailable" message="Your room allocation will appear after secure student access is available." />
    </article>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HostelCampusSummaryCardComponent {
  readonly state = input.required<DashboardWidgetState<HostelSummaryViewModel>>();
}
