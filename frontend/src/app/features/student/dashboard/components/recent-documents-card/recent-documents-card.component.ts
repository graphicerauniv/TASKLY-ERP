import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { LucideFolderOpen } from '@lucide/angular';
import { DashboardWidgetStateComponent } from '../dashboard-widget-state/dashboard-widget-state.component';
import { DashboardWidgetState, StudentDocumentViewModel } from '../../models/student-dashboard-operational.model';

@Component({
  selector: 'erp-recent-documents-card',
  imports: [DashboardWidgetStateComponent, LucideFolderOpen],
  template: `
    <article class="student-operational-card student-operational-card--secondary">
      <header class="student-operational-card__header"><span><svg lucideFolderOpen size="18" aria-hidden="true"></svg><strong>Recent documents</strong></span></header>
      <erp-dashboard-widget-state [status]="state().status" title="Documents unavailable" message="Secure document downloads are not connected yet." />
    </article>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RecentDocumentsCardComponent {
  readonly state = input.required<DashboardWidgetState<readonly StudentDocumentViewModel[]>>();
}
