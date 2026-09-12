import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { forkJoin } from 'rxjs';
import { ApiService } from '../../../core/api.service';
import {
  AcademicSubject,
  ExamSchedule,
  ExamShiftSchedule,
  ExamSubjectSchedule,
  MasterValue,
} from '../../../core/models';
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
  selector: 'erp-exam-subject-schedules',
  imports: [
    FormsModule,
    AdminDrawerComponent,
    AdminIllustrationComponent,
    AdminPageComponent,
    CompactActionMenuComponent,
    ConfirmDialogComponent,
  ],
  templateUrl: './exam-subject-schedules.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExamSubjectSchedulesComponent {
  private readonly api = inject(ApiService);

  readonly items = signal<ExamSubjectSchedule[]>([]);
  readonly schedules = signal<ExamSchedule[]>([]);
  readonly shifts = signal<ExamShiftSchedule[]>([]);
  readonly subjects = signal<AcademicSubject[]>([]);
  readonly masters = signal<MappingMaster[]>([]);
  readonly loading = signal(true);
  readonly loadingSubjects = signal(false);
  readonly uploading = signal(false);
  readonly saving = signal(false);
  readonly drawerOpen = signal(false);
  readonly editingId = signal<string | null>(null);
  readonly deleteTarget = signal<ExamSubjectSchedule | null>(null);
  readonly error = signal('');
  readonly message = signal('');
  readonly semesters = Array.from({ length: 20 }, (_, index) => index + 1);

  search = '';
  academicSessionId = '';
  universityId = '';
  collegeId = '';
  examScheduleId = '';
  departmentId = '';
  levelId = '';
  courseId = '';
  semester: number | null = null;
  subjectId = '';
  examDate = '';
  shiftId = '';
  isActive = true;

  constructor() {
    this.load();
  }

  master(typeSlug: string): MappingMaster[] {
    return this.masters().filter((item) => item.typeSlug === typeSlug && item.isActive);
  }

  scopedMaster(typeSlug: string, parentId: string): MappingMaster[] {
    const items = this.master(typeSlug);
    return parentId ? items.filter((item) => !item.parentId || item.parentId === parentId) : [];
  }

  scheduleOptions(): ExamSchedule[] {
    const parity = this.semester ? (Number(this.semester) % 2 === 0 ? 'even' : 'odd') : null;
    return this.schedules().filter(
      (item) =>
        item.isActive &&
        item.academicSessionId === this.academicSessionId &&
        item.universityId === this.universityId &&
        item.collegeId === this.collegeId &&
        (!parity || item.semesterParity === parity),
    );
  }

  shiftOptions(): ExamShiftSchedule[] {
    return this.shifts().filter(
      (item) => item.isActive && item.examScheduleId === this.examScheduleId,
    );
  }

  visibleItems(): ExamSubjectSchedule[] {
    const query = this.search.trim().toLowerCase();
    if (!query) return this.items();
    return this.items().filter((item) =>
      [
        item.subjectName,
        item.subjectCode,
        item.courseName,
        item.departmentName,
        item.examScheduleCaption,
        item.examDate,
      ].some((value) => value.toLowerCase().includes(query)),
    );
  }

  load(): void {
    this.loading.set(true);
    this.error.set('');
    forkJoin({
      items: this.api.examSubjectSchedules(),
      schedules: this.api.examSchedules(),
      shifts: this.api.examShiftSchedules(),
      masters: this.api.formMappingOptions(),
    }).subscribe({
      next: ({ items, schedules, shifts, masters }) => {
        this.items.set(items.items);
        this.schedules.set(schedules.items);
        this.shifts.set(shifts.items);
        this.masters.set(masters.items.filter((item) => item.isActive));
        this.loading.set(false);
      },
      error: (error) => {
        this.error.set(apiMessage(error, 'Could not load subject schedules.'));
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

  downloadTemplate(): void {
    const csv = [
      [
        'academicSession',
        'university',
        'college',
        'examSchedule',
        'department',
        'level',
        'course',
        'semester',
        'subjectCode',
        'examDate',
        'shiftSerial',
        'isActive',
      ].join(','),
      [
        '2026-2027',
        'Graphic Era Deemed to be University',
        'Graphic Era Deemed to be University',
        'ODD',
        'Computer Science & Eng',
        'UG',
        'B.Tech CSE',
        '1',
        'TCS101',
        '2026-12-01',
        '1',
        'true',
      ]
        .map((value) => `"${value.replaceAll('"', '""')}"`)
        .join(','),
    ].join('\n');
    const link = document.createElement('a');
    link.href = URL.createObjectURL(new Blob([csv], { type: 'text/csv;charset=utf-8' }));
    link.download = 'exam-subject-schedule-template.csv';
    link.click();
    URL.revokeObjectURL(link.href);
  }

  uploadCsv(event: Event): void {
    const input = event.target as HTMLInputElement;
    const file = input.files?.[0];
    input.value = '';
    if (!file || this.uploading()) return;
    this.uploading.set(true);
    this.error.set('');
    this.message.set('');
    this.api.importExamSubjectSchedules(file).subscribe({
      next: ({ imported, failed, errors }) => {
        this.uploading.set(false);
        if (imported)
          this.message.set(
            `${imported} subject schedule${imported === 1 ? '' : 's'} imported successfully.`,
          );
        if (failed)
          this.error.set(
            `${failed} row${failed === 1 ? '' : 's'} could not be imported. ${errors
              .slice(0, 3)
              .map((item) => `Row ${item.row}: ${item.message}`)
              .join(' ')}`,
          );
        this.load();
      },
      error: (error) => {
        this.error.set(apiMessage(error, 'Could not upload the subject schedule CSV.'));
        this.uploading.set(false);
      },
    });
  }

  edit(item: ExamSubjectSchedule): void {
    this.editingId.set(item._id);
    this.academicSessionId = item.academicSessionId;
    this.universityId = item.universityId;
    this.collegeId = item.collegeId;
    this.examScheduleId = item.examScheduleId;
    this.departmentId = item.departmentId;
    this.levelId = item.levelId;
    this.courseId = item.courseId;
    this.semester = item.semester;
    this.subjectId = item.subjectId;
    this.examDate = item.examDate;
    this.shiftId = item.shiftId;
    this.isActive = item.isActive;
    this.error.set('');
    this.drawerOpen.set(true);
    this.loadSubjects(item.subjectId);
  }

  closeDrawer(): void {
    if (this.saving()) return;
    this.drawerOpen.set(false);
    this.resetForm();
  }

  universityChanged(): void {
    this.collegeId = '';
    this.collegeChanged();
  }

  collegeChanged(): void {
    this.departmentId = '';
    this.departmentChanged();
    this.examScheduleId = '';
    this.shiftId = '';
  }

  departmentChanged(): void {
    this.levelId = '';
    this.levelChanged();
  }

  levelChanged(): void {
    this.courseId = '';
    this.subjectId = '';
    this.subjects.set([]);
  }

  scheduleScopeChanged(): void {
    if (!this.scheduleOptions().some((item) => item._id === this.examScheduleId)) {
      this.examScheduleId = '';
      this.shiftId = '';
    }
    this.subjectId = '';
    this.subjects.set([]);
    this.loadSubjects();
  }

  examScheduleChanged(): void {
    if (!this.shiftOptions().some((item) => item._id === this.shiftId)) this.shiftId = '';
  }

  loadSubjects(selectedSubjectId = ''): void {
    if (
      !this.academicSessionId ||
      !this.universityId ||
      !this.collegeId ||
      !this.departmentId ||
      !this.levelId ||
      !this.courseId ||
      !this.semester
    )
      return;
    this.loadingSubjects.set(true);
    this.api
      .examSubjectOptions({
        academicSessionId: this.academicSessionId,
        universityId: this.universityId,
        collegeId: this.collegeId,
        departmentId: this.departmentId,
        levelId: this.levelId,
        courseId: this.courseId,
        semester: Number(this.semester),
      })
      .subscribe({
        next: ({ items }) => {
          this.subjects.set(items);
          if (selectedSubjectId && items.some((item) => item._id === selectedSubjectId))
            this.subjectId = selectedSubjectId;
          this.loadingSubjects.set(false);
        },
        error: (error) => {
          this.error.set(apiMessage(error, 'Could not load mapped subjects.'));
          this.loadingSubjects.set(false);
        },
      });
  }

  save(): void {
    if (this.saving()) return;
    if (
      !this.academicSessionId ||
      !this.universityId ||
      !this.collegeId ||
      !this.examScheduleId ||
      !this.departmentId ||
      !this.levelId ||
      !this.courseId ||
      !this.semester ||
      !this.subjectId ||
      !this.examDate ||
      !this.shiftId
    ) {
      this.error.set('Complete all required subject schedule fields.');
      return;
    }
    const body = {
      academicSessionId: this.academicSessionId,
      universityId: this.universityId,
      collegeId: this.collegeId,
      examScheduleId: this.examScheduleId,
      departmentId: this.departmentId,
      levelId: this.levelId,
      courseId: this.courseId,
      semester: Number(this.semester),
      subjectId: this.subjectId,
      examDate: this.examDate,
      shiftId: this.shiftId,
      isActive: this.isActive,
    };
    this.saving.set(true);
    this.error.set('');
    const request = this.editingId()
      ? this.api.updateExamSubjectSchedule(this.editingId()!, body)
      : this.api.createExamSubjectSchedule(body);
    request.subscribe({
      next: () => {
        this.message.set(this.editingId() ? 'Subject schedule updated.' : 'Subject scheduled.');
        this.saving.set(false);
        this.drawerOpen.set(false);
        this.resetForm();
        this.load();
      },
      error: (error) => {
        this.error.set(apiMessage(error, 'Could not save the subject schedule.'));
        this.saving.set(false);
      },
    });
  }

  rowActions(): CompactActionItem[] {
    return [
      { id: 'edit', label: 'Edit subject schedule', icon: 'edit' },
      { id: 'delete', label: 'Delete subject schedule', icon: 'delete', destructive: true },
    ];
  }

  handleAction(action: string, item: ExamSubjectSchedule): void {
    if (action === 'edit') this.edit(item);
    if (action === 'delete') this.deleteTarget.set(item);
  }

  deleteItem(): void {
    const item = this.deleteTarget();
    if (!item || this.saving()) return;
    this.saving.set(true);
    this.api.deleteExamSubjectSchedule(item._id).subscribe({
      next: () => {
        this.items.update((items) => items.filter((entry) => entry._id !== item._id));
        this.deleteTarget.set(null);
        this.message.set('Subject schedule deleted.');
        this.saving.set(false);
      },
      error: (error) => {
        this.error.set(apiMessage(error, 'Could not delete the subject schedule.'));
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
    this.examScheduleId = '';
    this.departmentId = '';
    this.levelId = '';
    this.courseId = '';
    this.semester = null;
    this.subjectId = '';
    this.examDate = '';
    this.shiftId = '';
    this.isActive = true;
    this.subjects.set([]);
  }
}
