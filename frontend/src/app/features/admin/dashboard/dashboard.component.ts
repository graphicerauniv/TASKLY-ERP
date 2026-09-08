import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { ApiService } from '../../../core/api.service';
import { RouterLink } from '@angular/router';
import { AdminIllustrationComponent } from '../../../shared/ui/admin-illustration/admin-illustration.component';
import { AdminPageComponent } from '../../../shared/ui/admin-page/admin-page.component';
@Component({
  selector: 'erp-dashboard',
  imports: [AdminPageComponent, RouterLink, AdminIllustrationComponent],
  templateUrl: './dashboard.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboardComponent {
  private readonly api = inject(ApiService);
  readonly stats = signal<Record<string, number>>({
    masterValues: 0,
    forms: 0,
    drafts: 0,
    submitted: 0,
  });
  readonly loading = signal(true);
  readonly error = signal('');

  constructor() {
    this.load();
  }

  load() {
    this.loading.set(true);
    this.error.set('');
    this.api.summary().subscribe({
      next: (value) => {
        this.stats.set(value);
        this.loading.set(false);
      },
      error: (error) => {
        if (error.status !== 401) {
          this.error.set('Dashboard metrics are temporarily unavailable.');
        }
        this.loading.set(false);
      },
    });
  }
}
