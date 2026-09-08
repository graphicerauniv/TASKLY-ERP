import { AdminIllustrationComponent } from '../../../shared/ui/admin-illustration/admin-illustration.component';
import { ChangeDetectionStrategy, Component, HostListener, inject, signal } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { ConfirmDialogComponent } from '../../../shared/ui/confirm-dialog/confirm-dialog.component';
import { ApiService } from '../../../core/api.service';
import { FeeProgressionCandidate } from '../../../core/models';
import { AdminPageComponent } from '../../../shared/ui/admin-page/admin-page.component';
import {
  RecordDrawerComponent,
  RecordDetailField,
} from '../../../shared/ui/record-drawer/record-drawer.component';
import {
  CompactActionMenuComponent,
  CompactActionItem,
} from '../../../shared/ui/compact-action-menu/compact-action-menu.component';

@Component({
  selector: 'erp-fee-progression',
  imports: [
    AdminIllustrationComponent,
    AdminPageComponent,
    RecordDrawerComponent,
    CompactActionMenuComponent,
    ConfirmDialogComponent,
  ],
  templateUrl: './fee-progression.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FeeProgressionComponent {
  private readonly api = inject(ApiService);
  readonly items = signal<FeeProgressionCandidate[]>([]);
  readonly confirmOpen = signal(false);
  readonly batchProgress = signal({ completed: 0, total: 0 });
  readonly stopRequested = signal(false);
  @HostListener('window:beforeunload', ['$event'])
  protectRunningBatch(event: BeforeUnloadEvent) {
    if (this.saving()) {
      event.preventDefault();
      event.returnValue = '';
    }
  }
  readonly preview = signal<FeeProgressionCandidate | null>(null);
  readonly rowActions: CompactActionItem[] = [
    { id: 'preview', label: 'Review next fee period', icon: 'view' },
  ];
  detailFields(item: FeeProgressionCandidate): RecordDetailField[] {
    return [
      { label: 'Student ID', value: item.studentId },
      { label: 'Programme', value: item.courseName },
      { label: 'Academic session', value: item.academicSession },
      {
        label: 'Current period',
        value:
          this.mode === 'semester'
            ? 'Semester ' + item.currentSemester
            : 'Year ' + item.currentAcademicYear,
      },
      { label: 'Next fee period', value: item.nextPeriodLabel },
    ];
  }
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
    if (this.saving()) return;
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
    if (this.saving()) return;
    this.mode = mode;
    this.message.set(
      mode === 'semester'
        ? 'Showing students eligible for their next semester. Select students or use the row action.'
        : 'Showing students eligible for their next academic year. Select students or use the row action.',
    );
    this.load();
  }

  toggle(id: string, checked: boolean) {
    if (this.saving()) return;
    this.selected.update((current) => {
      const next = new Set(current);
      if (checked) next.add(id);
      else next.delete(id);
      return next;
    });
  }

  toggleAll(checked: boolean) {
    if (this.saving()) return;
    this.selected.set(new Set(checked ? this.items().map((item) => item._id) : []));
  }

  async createFees() {
    if (this.saving() || !this.selected().size) return;
    const ids = [...this.selected()];
    this.saving.set(true);
    this.error.set('');
    this.message.set('');
    this.stopRequested.set(false);
    this.batchProgress.set({ completed: 0, total: ids.length });
    let created = 0,
      promotions = 0,
      processed = 0;
    const failures: string[] = [];
    try {
      // Bounded sequential requests respect the API's 500-student maximum.
      // Never retry an uncertain financial operation automatically.
      for (let offset = 0; offset < ids.length && !this.stopRequested(); offset += 100) {
        const result = await firstValueFrom(
          this.api.progressStudentFees({
            mode: this.mode,
            studentAdmissionIds: ids.slice(offset, offset + 100),
            penalty: { enabled: false },
          }),
        );
        created += result.created;
        promotions += result.promotionsCreated;
        processed += result.studentsProcessed;
        for (const item of result.results) {
          if (item.reason) failures.push(item.reason);
          failures.push(...item.skippedKinds.map((item) => item.reason));
        }
        this.batchProgress.set({
          completed: Math.min(offset + 100, ids.length),
          total: ids.length,
        });
      }
      const outcome =
        created +
        ' ledgers and ' +
        promotions +
        ' pending promotions prepared; ' +
        processed +
        ' students processed.';
      this.message.set((this.stopRequested() ? 'Stopped after the current batch. ' : '') + outcome);
      if (failures.length)
        this.error.set(
          failures.slice(0, 5).join(' ') +
            (failures.length > 5
              ? ' Further records were skipped; review eligibility before continuing.'
              : ''),
        );
    } catch {
      this.error.set(
        'Processing stopped. A request failed and its final result may be uncertain. Review the fee records before retrying; completed batches were not rolled back.',
      );
      this.message.set(
        created +
          ' ledgers confirmed from completed batches; ' +
          processed +
          ' students processed.',
      );
    } finally {
      this.saving.set(false);
      this.preview.set(null);
      this.selected.set(new Set());
    }
  }

  createFor(item: FeeProgressionCandidate) {
    if (this.saving()) return;
    this.selected.set(new Set([item._id]));
    this.createFees();
  }
}
