import { CurrencyPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ApiService } from '../../../core/api.service';
import { ExamEligibilityResult, ExamSubjectSchedule } from '../../../core/models';
import { AdminIllustrationComponent } from '../../../shared/ui/admin-illustration/admin-illustration.component';
import { AdminPageComponent } from '../../../shared/ui/admin-page/admin-page.component';

type EligibilityFilter = 'all' | 'eligible' | 'ineligible';

function apiMessage(error: unknown, fallback: string): string {
  if (typeof error === 'object' && error && 'error' in error) {
    const message = (error as { error?: { message?: unknown } }).error?.message;
    if (typeof message === 'string') return message;
  }
  return fallback;
}

@Component({
  selector: 'erp-exam-eligibility',
  imports: [AdminIllustrationComponent, AdminPageComponent, CurrencyPipe, FormsModule],
  templateUrl: './exam-eligibility.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExamEligibilityComponent {
  private readonly api = inject(ApiService);

  readonly schedules = signal<ExamSubjectSchedule[]>([]);
  readonly result = signal<ExamEligibilityResult | null>(null);
  readonly loading = signal(true);
  readonly checking = signal(false);
  readonly error = signal('');
  readonly filter = signal<EligibilityFilter>('all');
  readonly visibleStudents = computed(() => {
    const items = this.result()?.items || [];
    if (this.filter() === 'eligible') return items.filter((item) => item.eligible);
    if (this.filter() === 'ineligible') return items.filter((item) => !item.eligible);
    return items;
  });

  subjectScheduleId = '';

  constructor() {
    this.api.examSubjectSchedules().subscribe({
      next: ({ items }) => {
        this.schedules.set(items.filter((item) => item.isActive));
        this.loading.set(false);
      },
      error: (error) => {
        this.error.set(apiMessage(error, 'Could not load scheduled subjects.'));
        this.loading.set(false);
      },
    });
  }

  checkEligibility(): void {
    if (!this.subjectScheduleId) {
      this.result.set(null);
      return;
    }
    this.checking.set(true);
    this.error.set('');
    this.api.examEligibleStudents(this.subjectScheduleId).subscribe({
      next: (result) => {
        this.result.set(result);
        this.filter.set('all');
        this.checking.set(false);
      },
      error: (error) => {
        this.error.set(apiMessage(error, 'Could not determine student eligibility.'));
        this.checking.set(false);
      },
    });
  }

  setFilter(filter: EligibilityFilter): void {
    this.filter.set(filter);
  }
}
