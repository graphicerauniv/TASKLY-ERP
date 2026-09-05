import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
  LucideArrowLeft,
  LucideArrowRight,
  LucideBookOpen,
  LucideCalendarDays,
  LucideCheck,
  LucideChevronLeft,
  LucideChevronRight,
  LucideColumns3,
  LucideFilter,
  LucideGraduationCap,
  LucideHistory,
  LucideLink2,
  LucideMoreVertical,
  LucidePencil,
  LucideRefreshCw,
  LucideSearch,
  LucideTrash2,
  LucideUsersRound,
} from '@lucide/angular';
import { concatMap, forkJoin, from, toArray } from 'rxjs';

import { ApiService } from '../../../core/api.service';
import { ERP_PAGINATION } from '../../../core/config/data-view.constants';
import { AcademicGroup, AcademicGroupSubject, AcademicSubject } from '../../../core/models';
import { AdminIllustrationComponent } from '../../../shared/ui/admin-illustration/admin-illustration.component';
import { AdminPageComponent } from '../../../shared/ui/admin-page/admin-page.component';

interface AssignmentSubject extends AcademicSubject {
  departmentName?: string;
  assigned: boolean;
  assignedRequirement?: 'required' | 'elective' | null;
}

interface AssignmentHistory extends AcademicGroupSubject {
  groupName?: string;
  subjectName?: string;
  subjectCode?: string;
  updatedAt?: string;
  createdAt?: string;
}

function apiMessage(error: unknown, fallback: string): string {
  if (typeof error === 'object' && error && 'error' in error) {
    const response = (error as { error?: { message?: unknown } }).error;
    if (typeof response?.message === 'string') return response.message;
  }
  return fallback;
}

@Component({
  selector: 'erp-subject-assignment',
  imports: [
    CommonModule,
    FormsModule,
    AdminIllustrationComponent,
    AdminPageComponent,
    LucideArrowLeft,
    LucideArrowRight,
    LucideBookOpen,
    LucideCalendarDays,
    LucideCheck,
    LucideChevronLeft,
    LucideChevronRight,
    LucideColumns3,
    LucideFilter,
    LucideGraduationCap,
    LucideHistory,
    LucideLink2,
    LucideMoreVertical,
    LucidePencil,
    LucideRefreshCw,
    LucideSearch,
    LucideTrash2,
    LucideUsersRound,
  ],
  templateUrl: './subject-assignment.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SubjectAssignmentComponent {
  private readonly api = inject(ApiService);

  readonly step = signal<1 | 2 | 3>(1);
  readonly loading = signal(false);
  readonly saving = signal(false);
  readonly error = signal('');
  readonly message = signal('');
  readonly groups = signal<AcademicGroup[]>([]);
  readonly history = signal<AssignmentHistory[]>([]);
  readonly subjects = signal<AssignmentSubject[]>([]);
  readonly selected = signal<Map<string, AssignmentSubject>>(new Map());
  readonly requirements = signal<Map<string, 'required' | 'elective'>>(new Map());
  readonly page = signal(1);
  readonly pageSize = signal(25);
  readonly total = signal(0);
  readonly pages = signal(1);
  readonly confirmation = signal(false);
  readonly pageSizeOptions = ERP_PAGINATION.pageSizeOptions;

  session = '';
  semester = 1;
  groupId = '';
  search = '';
  typeFilter = '';

  readonly sessions = computed(() => [
    ...new Set(
      this.groups()
        .filter((item) => item.isActive)
        .map((item) => item.academicSession),
    ),
  ]);
  readonly selectedCount = computed(() => this.selected().size);
  readonly selectedSubjects = computed(() => [...this.selected().values()]);
  readonly warningSubjects = computed(() =>
    this.selectedSubjects().filter((subject) => subject.assigned),
  );
  readonly readySubjects = computed(() =>
    this.selectedSubjects().filter((subject) => !subject.assigned),
  );
  readonly requiredCount = computed(
    () =>
      this.selectedSubjects().filter((subject) => this.requirementFor(subject._id) === 'required')
        .length,
  );
  readonly electiveCount = computed(() => this.selectedCount() - this.requiredCount());

  constructor() {
    this.loadSetup();
  }

  availableGroups(): AcademicGroup[] {
    return this.groups().filter(
      (item) =>
        item.isActive &&
        item.academicSession === this.session &&
        Number(item.semester) === Number(this.semester),
    );
  }

  groupName(): string {
    return this.groups().find((item) => item._id === this.groupId)?.name || '—';
  }

  scopeValid(): boolean {
    return Boolean(this.session && this.semester && this.groupId);
  }

  scopeHistory(): AssignmentHistory[] {
    if (!this.scopeValid()) return [];
    return this.history().filter(
      (item) =>
        String(item.groupId) === this.groupId &&
        item.academicSession === this.session &&
        Number(item.semester) === Number(this.semester),
    );
  }

  loadSetup(): void {
    this.loading.set(true);
    forkJoin({
      groups: this.api.academicRecords<AcademicGroup>('groups', { isActive: true }),
      history: this.api.academicRecords<AssignmentHistory>('group-subjects', { status: 'active' }),
    }).subscribe({
      next: ({ groups, history }) => {
        this.groups.set(groups.items);
        this.history.set(history.items);
        this.loading.set(false);
      },
      error: (error) => {
        this.error.set(apiMessage(error, 'Could not load subject assignment setup.'));
        this.loading.set(false);
      },
    });
  }

  resetScope(fromSession = false): void {
    if (fromSession) this.groupId = '';
    this.clearSelection();
  }

  openLibrary(): void {
    if (!this.scopeValid()) return;
    this.step.set(2);
    this.page.set(1);
    this.loadSubjects();
  }

  loadSubjects(): void {
    if (!this.scopeValid()) return;
    this.loading.set(true);
    this.error.set('');
    this.api
      .assignableAcademicSubjects({
        academicSession: this.session,
        semester: Number(this.semester),
        groupId: this.groupId,
        search: this.search.trim(),
        subjectType: this.typeFilter,
        page: this.page(),
        limit: this.pageSize(),
      })
      .subscribe({
        next: ({ items, pagination }) => {
          this.subjects.set(items);
          this.total.set(pagination.total);
          this.pages.set(Math.max(1, pagination.pages));
          this.loading.set(false);
        },
        error: (error) => {
          this.error.set(apiMessage(error, 'Could not load the subject library.'));
          this.loading.set(false);
        },
      });
  }

  setTypeFilter(value: string): void {
    this.typeFilter = value;
    this.page.set(1);
    this.loadSubjects();
  }

  isSelected(id: string): boolean {
    return this.selected().has(id);
  }

  allVisibleSelected(): boolean {
    return (
      Boolean(this.subjects().length) && this.subjects().every((item) => this.isSelected(item._id))
    );
  }

  toggleSubject(subject: AssignmentSubject): void {
    const next = new Map(this.selected());
    const requirements = new Map(this.requirements());
    if (next.has(subject._id)) {
      next.delete(subject._id);
      requirements.delete(subject._id);
    } else {
      next.set(subject._id, subject);
      requirements.set(
        subject._id,
        subject.assignedRequirement ||
          (subject.subjectOption?.toLowerCase() === 'elective' ? 'elective' : 'required'),
      );
    }
    this.selected.set(next);
    this.requirements.set(requirements);
  }

  toggleVisible(): void {
    const select = !this.subjects().every((subject) => this.isSelected(subject._id));
    for (const subject of this.subjects()) {
      if (select && !this.isSelected(subject._id)) this.toggleSubject(subject);
      if (!select && this.isSelected(subject._id)) this.toggleSubject(subject);
    }
  }

  requirementFor(id: string): 'required' | 'elective' {
    return this.requirements().get(id) || 'required';
  }

  setRequirement(id: string, value: 'required' | 'elective'): void {
    const next = new Map(this.requirements());
    next.set(id, value);
    this.requirements.set(next);
  }

  setAllRequirements(value: 'required' | 'elective'): void {
    const next = new Map(this.requirements());
    for (const subject of this.selectedSubjects()) next.set(subject._id, value);
    this.requirements.set(next);
  }

  clearSelection(): void {
    this.selected.set(new Map());
    this.requirements.set(new Map());
    this.confirmation.set(false);
  }

  removeSelected(): void {
    this.clearSelection();
    this.step.set(2);
  }

  changePage(value: number): void {
    this.page.set(Math.min(this.pages(), Math.max(1, value)));
    this.loadSubjects();
  }

  rangeEnd(): number {
    return Math.min(this.page() * this.pageSize(), this.total());
  }

  totalCredits(): number {
    return this.selectedSubjects().reduce((sum, item) => sum + Number(item.credits || 0), 0);
  }

  openReview(): void {
    if (!this.selectedCount()) return;
    this.step.set(3);
    this.confirmation.set(false);
  }

  saveDraft(): void {
    const draft = {
      session: this.session,
      semester: this.semester,
      groupId: this.groupId,
      subjects: this.selectedSubjects().map((subject) => ({
        id: subject._id,
        requirement: this.requirementFor(subject._id),
      })),
    };
    localStorage.setItem('erp-subject-assignment-draft', JSON.stringify(draft));
    this.message.set('Subject assignment draft saved in this browser.');
  }

  assignReady(): void {
    if (!this.confirmation() || !this.readySubjects().length || this.saving()) return;
    const batches = (['required', 'elective'] as const)
      .map((requirement) => ({
        requirement,
        subjectIds: this.readySubjects()
          .filter((subject) => this.requirementFor(subject._id) === requirement)
          .map((subject) => subject._id),
      }))
      .filter((batch) => batch.subjectIds.length);
    this.saving.set(true);
    this.error.set('');
    from(batches)
      .pipe(
        concatMap((batch) =>
          this.api.bulkAssignSubjects({
            groupId: this.groupId,
            subjectIds: batch.subjectIds,
            academicSession: this.session,
            semester: Number(this.semester),
            requirement: batch.requirement,
          }),
        ),
        toArray(),
      )
      .subscribe({
        next: (results) => {
          const assigned = results.reduce((sum, result) => sum + result.assigned, 0);
          this.message.set(
            `${assigned} subject${assigned === 1 ? '' : 's'} assigned successfully.`,
          );
          this.saving.set(false);
          this.clearSelection();
          this.step.set(1);
          this.loadSetup();
        },
        error: (error) => {
          this.error.set(apiMessage(error, 'Subjects could not be assigned.'));
          this.saving.set(false);
        },
      });
  }

  changeScope(): void {
    this.step.set(1);
    this.clearSelection();
  }

  scrollToHistory(): void {
    document.querySelector('#subject-assignment-history')?.scrollIntoView({ behavior: 'smooth' });
  }
}
