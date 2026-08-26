import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { LucideIndianRupee } from '@lucide/angular';
import { DashboardWidgetStateComponent } from '../dashboard-widget-state/dashboard-widget-state.component';
import { DashboardWidgetState, FeeStatusViewModel } from '../../models/student-dashboard-operational.model';

@Component({
  selector: 'erp-fee-status-card',
  imports: [DashboardWidgetStateComponent, LucideIndianRupee],
  template: `
    <article class="student-operational-card student-operational-card--compact">
      <header class="student-operational-card__header">
        <span><svg lucideIndianRupee size="18" aria-hidden="true"></svg><strong>Fee status</strong></span>
      </header>
      <erp-dashboard-widget-state
        [status]="state().status"
        title="Fee status unavailable"
        message="A student-authorized ledger summary is not connected yet."
      />
    </article>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FeeStatusCardComponent {
  readonly state = input.required<DashboardWidgetState<FeeStatusViewModel>>();
}
