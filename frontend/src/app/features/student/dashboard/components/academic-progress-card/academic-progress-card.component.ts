import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { LucideGraduationCap } from '@lucide/angular';
import { DashboardWidgetStateComponent } from '../dashboard-widget-state/dashboard-widget-state.component';
import { AcademicProgressViewModel, DashboardWidgetState } from '../../models/student-dashboard-operational.model';

@Component({
  selector: 'erp-academic-progress-card',
  imports: [DashboardWidgetStateComponent, LucideGraduationCap],
  template: `
    <article class="student-operational-card student-operational-card--secondary">
      <header class="student-operational-card__header"><span><svg lucideGraduationCap size="18" aria-hidden="true"></svg><strong>Academic progress</strong></span></header>
      <erp-dashboard-widget-state [status]="state().status" title="Academic progress unavailable" message="Official academic results are not connected yet." />
    </article>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AcademicProgressCardComponent {
  readonly state = input.required<DashboardWidgetState<AcademicProgressViewModel>>();
}
