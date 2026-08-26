import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';
import { LucideIndianRupee } from '@lucide/angular';
import { DashboardWidgetStateComponent } from '../dashboard-widget-state/dashboard-widget-state.component';
import {
  DashboardWidgetState,
  FeeStatusViewModel,
} from '../../models/student-dashboard-operational.model';

@Component({
  selector: 'erp-fee-status-card',
  imports: [DashboardWidgetStateComponent, LucideIndianRupee],
  template: `
    <article class="student-operational-card student-operational-card--compact">
      <header class="student-operational-card__header">
        <span
          ><svg lucideIndianRupee size="18" aria-hidden="true"></svg
          ><strong>Fee status</strong></span
        >
      </header>
      @if (state().data; as fees) {
        <div class="student-fee-summary">
          <div>
            <small>Total fees</small>
            <strong>{{ fees.totalBilled }}</strong>
            <span class="student-fee-summary__progress" aria-hidden="true">
              <i [style.width.%]="paidPercentage()"></i>
            </span>
            <small class="student-fee-summary__due">Due {{ fees.currentDue }}</small>
          </div>
          <div>
            <small>Paid</small>
            <strong>{{ fees.totalPaid }}</strong>
            <button type="button" disabled>View details</button>
          </div>
        </div>
      } @else {
        <erp-dashboard-widget-state
          [status]="state().status"
          title="Fee status unavailable"
          message="A student-authorized ledger summary is not connected yet."
        />
      }
    </article>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FeeStatusCardComponent {
  readonly state = input.required<DashboardWidgetState<FeeStatusViewModel>>();
  readonly paidPercentage = computed(() => {
    const fees = this.state().data;
    if (!fees?.totalBilled || !fees.totalPaid) return 0;
    const billed = Number(fees.totalBilled.replace(/[^\d.]/g, ''));
    const paid = Number(fees.totalPaid.replace(/[^\d.]/g, ''));
    return billed > 0 ? Math.min(100, Math.round((paid / billed) * 100)) : 0;
  });
}
