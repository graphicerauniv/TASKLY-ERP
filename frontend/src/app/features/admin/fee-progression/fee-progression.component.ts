import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { ApiService } from '../../../core/api.service';
import { FeeProgressionCandidate } from '../../../core/models';
import { AdminPageComponent } from '../../../shared/ui/admin-page/admin-page.component';

@Component({
  selector: 'erp-fee-progression',
  imports: [AdminPageComponent],
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
    this.message.set(
      mode === 'semester'
        ? 'Showing students eligible for their next semester. Select students or use the row action.'
        : 'Showing students eligible for their next academic year. Select students or use the row action.',
    );
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
    if (this.saving()) return;
    if (!this.selected().size) {
      this.error.set('Select at least one eligible student before creating the next fee period.');
      return;
    }
    this.saving.set(true);
    this.error.set('');
    this.api
      .progressStudentFees({
        mode: this.mode,
        studentAdmissionIds: [...this.selected()],
        penalty: { enabled: false },
      })
      .subscribe({
        next: ({ created, promotionsCreated, studentsProcessed, results }) => {
          const failures = results
            .flatMap((result) => [result.reason, ...result.skippedKinds.map((item) => item.reason)])
            .filter(Boolean);
          const resultMessage = `${created} next-period ledger(s) and ${promotionsCreated} pending promotion record(s) prepared for ${studentsProcessed} student(s).${failures.length ? ` ${failures.join(' ')}` : ''}`;
          if (created || promotionsCreated) this.message.set(resultMessage);
          else this.error.set(resultMessage);
          this.saving.set(false);
          if (created || promotionsCreated) this.load();
        },
        error: (error) => {
          this.error.set(error.error?.message || 'Could not create the next-period fees.');
          this.saving.set(false);
        },
      });
  }

  createFor(item: FeeProgressionCandidate) {
    if (this.saving()) return;
    this.selected.set(new Set([item._id]));
    this.createFees();
  }
}
