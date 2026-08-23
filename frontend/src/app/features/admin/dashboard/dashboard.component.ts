import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { ApiService } from '../../../core/api.service';
@Component({
  selector: 'erp-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboardComponent {
  readonly stats = signal<Record<string, number>>({
    masterValues: 0,
    forms: 0,
    drafts: 0,
    submitted: 0,
  });
  constructor() {
    inject(ApiService)
      .summary()
      .subscribe((value) => this.stats.set(value));
  }
}
