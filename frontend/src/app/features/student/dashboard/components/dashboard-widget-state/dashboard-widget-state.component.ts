import { ChangeDetectionStrategy, Component, input, output } from '@angular/core';
import { LucideInfo } from '@lucide/angular';
import { DashboardWidgetStatus } from '../../models/student-dashboard-operational.model';

@Component({
  selector: 'erp-dashboard-widget-state',
  imports: [LucideInfo],
  template: `
    <div class="student-widget-state" [attr.data-status]="status()" role="status">
      <span class="student-widget-state__icon" aria-hidden="true">
        <svg lucideInfo size="18"></svg>
      </span>
      <span>
        <strong>{{ title() }}</strong>
        <small>{{ message() }}</small>
      </span>
      @if (status() === 'error' && retryable()) {
        <button type="button" (click)="retry.emit()">Retry</button>
      }
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboardWidgetStateComponent {
  readonly status = input.required<DashboardWidgetStatus>();
  readonly title = input.required<string>();
  readonly message = input.required<string>();
  readonly retryable = input(false);
  readonly retry = output<void>();
}
