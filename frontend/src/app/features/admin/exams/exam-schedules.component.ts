import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { forkJoin } from 'rxjs';
import { ApiService } from '../../../core/api.service';
import { ExamSchedule, ExamType, MasterValue } from '../../../core/models';
import { AdminDrawerComponent } from '../../../shared/ui/admin-drawer/admin-drawer.component';
import { AdminIllustrationComponent } from '../../../shared/ui/admin-illustration/admin-illustration.component';
import { AdminPageComponent } from '../../../shared/ui/admin-page/admin-page.component';
import {
  CompactActionItem,
  CompactActionMenuComponent,
} from '../../../shared/ui/compact-action-menu/compact-action-menu.component';
import { ConfirmDialogComponent } from '../../../shared/ui/confirm-dialog/confirm-dialog.component';

type MappingMaster = MasterValue & { typeSlug: string };

function apiMessage(error: unknown, fallback: string): string {
  if (typeof error === 'object' && error && 'error' in error) {
    const message = (error as { error?: { message?: unknown } }).error?.message;
    if (typeof message === 'string') return message;
  }
  return fallback;
}

@Component({
  selector: 'erp-exam-schedules',
  imports: [
    FormsModule,
    AdminDrawerComponent,
    AdminIllustrationComponent,
    AdminPageComponent,
    CompactActionMenuComponent,
    ConfirmDialogComponent,
  ],
  templateUrl: './exam-schedules.component.html',
  styleUrl: './exam-schedules.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExamSchedulesComponent {
  private readonly api = inject(ApiService);

  readonly schedules = signal<ExamSchedule[]>([]);
  readonly masters = signal<MappingMaster[]>([]);
  readonly loading = signal(true);
  readonly saving = signal(false);
  readonly drawerOpen = signal(false);
  readonly editingId = signal<string | null>(null);
  readonly deleteTarget = signal<ExamSchedule | null>(null);
  readonly error = signal('');
  readonly message = signal('');

  readonly examTypes: ReadonlyArray<{ value: ExamType; label: string }> = [
    { value: 'sessional', label: 'Sessional' },
    { value: 'internal_practical', label: 'Internal/Practical' },
    { value: 'teacher_assessment', label: 'Teacher Assessment' },
    { value: 'end_term', label: 'End-Term' },
    { value: 'end_term_practical', label: 'End-Term/Practical' },
    { value: 'mid_term', label: 'Mid-Term' },
  ];

  search = '';
  academicSessionId = '';
  universityId = '';
  collegeId = '';
  semesterParity: 'odd' | 'even' = 'odd';
  examType: ExamType | '' = '';
  caption = '';
  theoryQuestionViewCount: number | null = null;
  practicalQuestionViewCount: number | null = null;
  isActive = true;

  constructor() {
    this.load();
  }

  master(typeSlug: string): MappingMaster[] {
    return this.masters().filter((item) => item.typeSlug === typeSlug && item.isActive);
  }

  collegeOptions(): MappingMaster[] {
    return this.master('college').filter((college) => college.parentId === this.universityId);
  }

  visibleSchedules(): ExamSchedule[] {
    const query = this.search.trim().toLowerCase();
    if (!query) return this.schedules();
    return this.schedules().filter((item) =>
      [
        item.caption,
        item.academicSession,
        item.universityName,
        item.collegeName,
        item.examTypeName,
        item.semesterParity,
      ].some((value) => value.toLowerCase().includes(query)),
    );
  }

  load(): void {
    this.loading.set(true);
    this.error.set('');
    forkJoin({
      schedules: this.api.examSchedules(),
      masters: this.api.formMappingOptions(),
    }).subscribe({
      next: ({ schedules, masters }) => {
        this.schedules.set(schedules.items);
        this.masters.set(masters.items.filter((item) => item.isActive));
        this.loading.set(false);
      },
      error: (error) => {
        this.error.set(apiMessage(error, 'Could not load exam schedules.'));
        this.loading.set(false);
      },
    });
  }

  openCreate(): void {
    this.resetForm();
    this.error.set('');
    this.message.set('');
    this.drawerOpen.set(true);
  }

  edit(item: ExamSchedule): void {
    this.editingId.set(item._id);
    this.academicSessionId = item.academicSessionId;
    this.universityId = item.universityId;
    this.collegeId = item.collegeId;
    this.semesterParity = item.semesterParity;
    this.examType = item.examType;
    this.caption = item.caption;
    this.theoryQuestionViewCount = item.theoryQuestionViewCount;
    this.practicalQuestionViewCount = item.practicalQuestionViewCount;
    this.isActive = item.isActive;
    this.error.set('');
    this.drawerOpen.set(true);
  }

  closeDrawer(): void {
    if (this.saving()) return;
    this.drawerOpen.set(false);
    this.resetForm();
  }

  universityChanged(): void {
    if (!this.collegeOptions().some((college) => college._id === this.collegeId))
      this.collegeId = '';
  }

  save(): void {
    if (this.saving()) return;
    if (
      !this.academicSessionId ||
      !this.universityId ||
      !this.collegeId ||
      !this.examType ||
      !this.caption.trim() ||
      this.theoryQuestionViewCount === null ||
      this.practicalQuestionViewCount === null
    ) {
      this.error.set('Complete all required exam schedule fields.');
      return;
    }
    if (this.theoryQuestionViewCount < 0 || this.practicalQuestionViewCount < 0) {
      this.error.set('Question counts cannot be negative.');
      return;
    }
    const body = {
      academicSessionId: this.academicSessionId,
      universityId: this.universityId,
      collegeId: this.collegeId,
      semesterParity: this.semesterParity,
      examType: this.examType,
      caption: this.caption.trim(),
      theoryQuestionViewCount: Number(this.theoryQuestionViewCount),
      practicalQuestionViewCount: Number(this.practicalQuestionViewCount),
      isActive: this.isActive,
    };
    this.saving.set(true);
    this.error.set('');
    const request = this.editingId()
      ? this.api.updateExamSchedule(this.editingId()!, body)
      : this.api.createExamSchedule(body);
    request.subscribe({
      next: () => {
        this.message.set(this.editingId() ? 'Exam schedule updated.' : 'Exam schedule created.');
        this.saving.set(false);
        this.drawerOpen.set(false);
        this.resetForm();
        this.load();
      },
      error: (error) => {
        this.error.set(apiMessage(error, 'Could not save the exam schedule.'));
        this.saving.set(false);
      },
    });
  }

  rowActions(): CompactActionItem[] {
    return [
      { id: 'edit', label: 'Edit schedule', icon: 'edit' },
      { id: 'delete', label: 'Delete schedule', icon: 'delete', destructive: true },
    ];
  }

  handleAction(action: string, item: ExamSchedule): void {
    if (action === 'edit') this.edit(item);
    if (action === 'delete') this.deleteTarget.set(item);
  }

  deleteSchedule(): void {
    const item = this.deleteTarget();
    if (!item || this.saving()) return;
    this.saving.set(true);
    this.api.deleteExamSchedule(item._id).subscribe({
      next: () => {
        this.schedules.update((items) => items.filter((entry) => entry._id !== item._id));
        this.message.set('Exam schedule deleted.');
        this.deleteTarget.set(null);
        this.saving.set(false);
      },
      error: (error) => {
        this.error.set(apiMessage(error, 'Could not delete the exam schedule.'));
        this.deleteTarget.set(null);
        this.saving.set(false);
      },
    });
  }

  private resetForm(): void {
    this.editingId.set(null);
    this.academicSessionId = '';
    this.universityId = '';
    this.collegeId = '';
    this.semesterParity = 'odd';
    this.examType = '';
    this.caption = '';
    this.theoryQuestionViewCount = null;
    this.practicalQuestionViewCount = null;
    this.isActive = true;
  }
}
