import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ApiService } from '../../../core/api.service';
import { FeeProgressionCandidate } from '../../../core/models';
import { AdminPageComponent } from '../../../shared/ui/admin-page/admin-page.component';

@Component({
  selector: 'erp-fee-progression',
  imports: [AdminPageComponent, FormsModule],
  templateUrl: './fee-progression.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FeeProgressionComponent {
  private readonly api = inject(ApiService);
  readonly items = signal<FeeProgressionCandidate[]>([]);
  readonly selected = signal(new Set<string>());
  readonly loading = signal(false);
  readonly saving = signal(false);
  readonly message = signal('');
  readonly error = signal('');
  mode: 'semester' | 'year' = 'semester';
  penaltyEnabled = false;
  penaltyDueDate = '';
  penaltyDailyAmount: number | null = null;
  penaltyMaxAmount: number | null = null;

  constructor() {
    this.load();
  }

  load() {
    this.loading.set(true);
    this.error.set('');
    this.selected.set(new Set());
    this.api.feeProgressionCandidates(this.mode).subscribe({
      next: ({ items }) => {
        this.items.set(items);
        this.loading.set(false);
      },
      error: (error) => {
        this.error.set(error.error?.message || 'Could not load eligible students.');
        this.loading.set(false);
      },
    });
  }

  changeMode(mode: 'semester' | 'year') {
    this.mode = mode;
    this.message.set('');
    this.load();
  }

  toggle(id: string, checked: boolean) {
    this.selected.update((current) => {
      const next = new Set(current);
      if (checked) next.add(id);
      else next.delete(id);
      return next;
    });
  }

  toggleAll(checked: boolean) {
    this.selected.set(new Set(checked ? this.items().map((item) => item._id) : []));
  }

  createFees() {
    if (!this.selected().size || this.saving()) return;
    if (
      this.penaltyEnabled &&
      (!this.penaltyDueDate || !this.penaltyDailyAmount || !this.penaltyMaxAmount)
    ) {
      this.error.set('Enter the due date, daily penalty and maximum penalty.');
      return;
    }
    this.saving.set(true);
    this.error.set('');
    this.api
      .progressStudentFees({
        mode: this.mode,
        studentAdmissionIds: [...this.selected()],
        penalty: {
          enabled: this.penaltyEnabled,
          dueDate: this.penaltyDueDate || undefined,
          dailyAmount: Number(this.penaltyDailyAmount || 0),
          maxAmount: Number(this.penaltyMaxAmount || 0),
        },
      })
      .subscribe({
        next: ({ created, studentsProcessed, results }) => {
          const failures = results
            .flatMap((result) => [result.reason, ...result.skippedKinds.map((item) => item.reason)])
            .filter(Boolean);
          this.message.set(
            `${created} next-period ledger(s) created for ${studentsProcessed} student(s).${failures.length ? ` ${failures.join(' ')}` : ''}`,
          );
          this.saving.set(false);
          this.load();
        },
        error: (error) => {
          this.error.set(error.error?.message || 'Could not create the next-period fees.');
          this.saving.set(false);
        },
      });
  }
}
