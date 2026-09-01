import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ApiService } from '../../../core/api.service';
import { MasterValue, StudentPromotion } from '../../../core/models';
import { AdminPageComponent } from '../../../shared/ui/admin-page/admin-page.component';
import {
  CompactActionItem,
  CompactActionMenuComponent,
} from '../../../shared/ui/compact-action-menu/compact-action-menu.component';

@Component({
  selector: 'erp-student-promotions',
  imports: [
    AdminPageComponent,
    CompactActionMenuComponent,
    FormsModule,
  ],
  templateUrl: './student-promotions.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StudentPromotionsComponent {
  private readonly api = inject(ApiService);
  readonly items = signal<StudentPromotion[]>([]);
  readonly courses = signal<MasterValue[]>([]);
  readonly selected = signal(new Set<string>());
  readonly loading = signal(false);
  readonly saving = signal(false);
  readonly message = signal('');
  readonly error = signal('');
  readonly pendingActions: CompactActionItem[] = [
    { id: 'promote', label: 'Promote student', icon: 'transfer' },
  ];
  mode: 'semester' | 'year' = 'semester';
  status = 'pending';
  search = '';
  academicSession = '';
  courseId = '';
  currentAcademicYear: number | null = null;
  currentSemester: number | null = null;
  readonly academicYears = Array.from({ length: 10 }, (_, index) => index + 1);
  readonly semesters = Array.from({ length: 20 }, (_, index) => index + 1);

  constructor() {
    this.api.feeCourseOptions().subscribe(({ items }) => this.courses.set(items));
    this.load();
  }

  load() {
    this.loading.set(true);
    this.error.set('');
    this.selected.set(new Set());
    this.api
      .studentPromotions({
        mode: this.mode,
        status: this.status,
        search: this.search.trim(),
        academicSession: this.academicSession.trim(),
        courseId: this.courseId,
        currentAcademicYear: this.currentAcademicYear,
        currentSemester: this.mode === 'semester' ? this.currentSemester : null,
      })
      .subscribe({
        next: ({ items }) => {
          this.items.set(items);
          this.loading.set(false);
        },
        error: (error) => {
          this.error.set(error.error?.message || 'Could not load student promotions.');
          this.loading.set(false);
        },
      });
  }

  changeMode(mode: 'semester' | 'year') {
    this.mode = mode;
    if (mode === 'year') this.currentSemester = null;
    this.load();
  }

  resetFilters() {
    this.search = '';
    this.academicSession = '';
    this.courseId = '';
    this.currentAcademicYear = null;
    this.currentSemester = null;
    this.status = 'pending';
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
    const pending = this.items().filter((item) => item.status === 'pending');
    this.selected.set(new Set(checked ? pending.map((item) => item._id) : []));
  }

  promoteOne(item: StudentPromotion) {
    this.promote([item._id]);
  }

  handleRowAction(action: string, item: StudentPromotion) {
    if (action === 'promote') this.promoteOne(item);
  }

  promoteSelected() {
    if (!this.selected().size) {
      this.error.set('Select at least one pending student promotion.');
      return;
    }
    this.promote([...this.selected()]);
  }

  currentPeriod(item: StudentPromotion) {
    return item.mode === 'semester'
      ? `Semester ${item.fromSemester}`
      : `Year ${item.fromAcademicYear}`;
  }

  private promote(progressionIds: string[]) {
    if (this.saving()) return;
    this.saving.set(true);
    this.error.set('');
    this.api.promoteStudents(progressionIds).subscribe({
      next: ({ promoted, requested, results }) => {
        const failures = results.filter((result) => !result.success).map((result) => result.reason);
        if (promoted)
          this.message.set(
            `${promoted} of ${requested} student(s) promoted.${failures.length ? ` ${failures.join(' ')}` : ''}`,
          );
        else this.error.set(failures.join(' ') || 'No students were promoted.');
        this.saving.set(false);
        if (promoted) this.load();
      },
      error: (error) => {
        this.error.set(error.error?.message || 'Could not promote the selected students.');
        this.saving.set(false);
      },
    });
  }
}
