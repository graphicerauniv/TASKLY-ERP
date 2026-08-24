import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { LucideCircleCheck, LucideClock3, LucideDatabase, LucideFileText } from '@lucide/angular';
import { ApiService } from '../../../core/api.service';
import { AdminPageComponent } from '../../../shared/ui/admin-page/admin-page.component';
@Component({
  selector: 'erp-dashboard',
  imports: [AdminPageComponent, LucideCircleCheck, LucideClock3, LucideDatabase, LucideFileText],
  templateUrl: './dashboard.component.html',
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
