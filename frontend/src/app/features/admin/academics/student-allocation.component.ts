import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
  LucideAlertTriangle,
  LucideArrowRight,
  LucideCheck,
  LucideChevronLeft,
  LucideChevronRight,
  LucideColumns3,
  LucideDownload,
  LucideFilter,
  LucideGraduationCap,
  LucideHistory,
  LucideRefreshCw,
  LucideSearch,
  LucideUpload,
  LucideUserRound,
  LucideUsersRound,
} from '@lucide/angular';
import { concatMap, forkJoin, from, toArray } from 'rxjs';

import { ApiService } from '../../../core/api.service';
import { ERP_PAGINATION } from '../../../core/config/data-view.constants';
import {
  AcademicAllocationInput,
  AcademicGroup,
  AcademicSection,
  AcademicSet,
} from '../../../core/models';
import { AdminIllustrationComponent } from '../../../shared/ui/admin-illustration/admin-illustration.component';
import { AdminPageComponent } from '../../../shared/ui/admin-page/admin-page.component';

interface AllocationCandidate {
  _id: string;
  studentName?: string;
  studentId?: string;
  applicationNumber?: string;
  courseName?: string;
  currentAllocation?: string;
  validation: 'ready' | 'warning';
}

interface ReviewCandidate extends AllocationCandidate {
  error: string | null;
}

function apiMessage(error: unknown, fallback: string): string {
  if (typeof error === 'object' && error && 'error' in error) {
    const response = (error as { error?: { message?: unknown } }).error;
    if (typeof response?.message === 'string') return response.message;
  }
  return fallback;
}

@Component({
  selector: 'erp-student-allocation',
  imports: [
    CommonModule,
    FormsModule,
    AdminIllustrationComponent,
    AdminPageComponent,
    LucideAlertTriangle,
    LucideArrowRight,
    LucideCheck,
    LucideChevronLeft,
    LucideChevronRight,
    LucideColumns3,
    LucideDownload,
    LucideFilter,
    LucideGraduationCap,
    LucideHistory,
    LucideRefreshCw,
    LucideSearch,
    LucideUpload,
    LucideUserRound,
    LucideUsersRound,
  ],
  templateUrl: './student-allocation.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StudentAllocationComponent {
  private readonly api = inject(ApiService);

  readonly step = signal<1 | 2 | 3>(1);
  readonly loading = signal(false);
  readonly saving = signal(false);
  readonly error = signal('');
  readonly message = signal('');
  readonly groups = signal<AcademicGroup[]>([]);
  readonly sections = signal<AcademicSection[]>([]);
  readonly sets = signal<AcademicSet[]>([]);
  readonly students = signal<AllocationCandidate[]>([]);
  readonly selected = signal<Map<string, AllocationCandidate>>(new Map());
  readonly reviewRows = signal<ReviewCandidate[]>([]);
  readonly page = signal(1);
  readonly pageSize = signal(25);
  readonly total = signal(0);
  readonly pages = signal(1);
  readonly activeReviewTab = signal<'all' | 'ready' | 'warning'>('all');
  readonly confirmation = signal(false);
  readonly pageSizeOptions = ERP_PAGINATION.pageSizeOptions;

  session = '';
  semester = 1;
  groupId = '';
  sectionId = '';
  setId = '';
  search = '';

  readonly sessions = computed(() => [
    ...new Set(
      this.groups()
        .filter((item) => item.isActive)
        .map((item) => item.academicSession),
    ),
  ]);
  availableGroups(): AcademicGroup[] {
    return this.groups().filter(
      (item) =>
        item.isActive &&
        item.academicSession === this.session &&
        Number(item.semester) === Number(this.semester),
    );
  }

  availableSections(): AcademicSection[] {
    return this.sections().filter(
      (item) =>
        item.isActive &&
        item.academicSession === this.session &&
        Number(item.semester) === Number(this.semester) &&
        item.groupIds.some((value) => String(value) === this.groupId),
    );
  }

  availableSets(): AcademicSet[] {
    return this.sets().filter(
      (item) =>
        item.isActive &&
        item.academicSession === this.session &&
        Number(item.semester) === Number(this.semester) &&
        String(item.groupId) === this.groupId &&
        String(item.sectionId) === this.sectionId,
    );
  }

  scopeValid(): boolean {
    return Boolean(this.session && this.semester && this.groupId && this.sectionId && this.setId);
  }
  readonly selectedCount = computed(() => this.selected().size);
  readonly readyRows = computed(() =>
    this.reviewRows().filter((item) => !item.error && item.validation === 'ready'),
  );
  readonly warningRows = computed(() =>
    this.reviewRows().filter((item) => item.error || item.validation === 'warning'),
  );
  readonly visibleReviewRows = computed(() =>
    this.activeReviewTab() === 'all'
      ? this.reviewRows()
      : this.activeReviewTab() === 'ready'
        ? this.readyRows()
        : this.warningRows(),
  );

  constructor() {
    this.loadSetup();
  }

  loadSetup(): void {
    this.loading.set(true);
    forkJoin({
      groups: this.api.academicRecords<AcademicGroup>('groups', { isActive: true }),
      sections: this.api.academicRecords<AcademicSection>('sections', { isActive: true }),
      sets: this.api.academicRecords<AcademicSet>('sets', { isActive: true }),
    }).subscribe({
      next: ({ groups, sections, sets }) => {
        this.groups.set(groups.items);
        this.sections.set(sections.items);
        this.sets.set(sets.items);
        this.loading.set(false);
      },
      error: (error) => {
        this.error.set(apiMessage(error, 'Could not load allocation setup.'));
        this.loading.set(false);
      },
    });
  }

  selectSession(): void {
    this.groupId = '';
    this.sectionId = '';
    this.setId = '';
    this.clearSelection();
  }

  selectGroup(): void {
    this.sectionId = '';
    this.setId = '';
    this.clearSelection();
  }

  selectSection(): void {
    this.setId = '';
    this.clearSelection();
  }

  openStudents(): void {
    if (!this.scopeValid()) return;
    this.step.set(2);
    this.page.set(1);
    this.loadStudents();
  }

  loadStudents(): void {
    if (!this.scopeValid()) return;
    this.loading.set(true);
    this.error.set('');
    this.api
      .eligibleAcademicStudents({
        academicSession: this.session,
        semester: Number(this.semester),
        groupId: this.groupId,
        search: this.search.trim(),
        page: this.page(),
        limit: this.pageSize(),
      })
      .subscribe({
        next: ({ items, pagination }) => {
          this.students.set(items);
          this.total.set(pagination.total);
          this.pages.set(Math.max(1, pagination.pages));
          this.loading.set(false);
        },
        error: (error) => {
          this.error.set(apiMessage(error, 'Could not load eligible students.'));
          this.loading.set(false);
        },
      });
  }

  isSelected(id: string): boolean {
    return this.selected().has(id);
  }

  toggleStudent(student: AllocationCandidate): void {
    const next = new Map(this.selected());
    if (next.has(student._id)) next.delete(student._id);
    else next.set(student._id, student);
    this.selected.set(next);
  }

  allVisibleSelected(): boolean {
    return (
      Boolean(this.students().length) && this.students().every((item) => this.isSelected(item._id))
    );
  }

  toggleVisible(): void {
    const next = new Map(this.selected());
    const shouldSelect = !this.allVisibleSelected();
    for (const student of this.students()) {
      if (shouldSelect) next.set(student._id, student);
      else next.delete(student._id);
    }
    this.selected.set(next);
  }

  clearSelection(): void {
    this.selected.set(new Map());
    this.reviewRows.set([]);
    this.confirmation.set(false);
  }

  changePage(page: number): void {
    this.page.set(Math.min(this.pages(), Math.max(1, page)));
    this.loadStudents();
  }

  rangeEnd(): number {
    return Math.min(this.page() * this.pageSize(), this.total());
  }

  review(): void {
    const candidates = [...this.selected().values()];
    if (!candidates.length) return;
    const chunks: AllocationCandidate[][] = [];
    for (let index = 0; index < candidates.length; index += 5000)
      chunks.push(candidates.slice(index, index + 5000));
    this.loading.set(true);
    this.error.set('');
    from(chunks)
      .pipe(
        concatMap((chunk) =>
          this.api.previewAcademicAllocations(chunk.map((item) => this.allocationBody(item._id))),
        ),
        toArray(),
      )
      .subscribe({
        next: (results) => {
          const validations = results.flatMap((result) => result.rows);
          const reviewRows = candidates.map((candidate, index) => ({
            ...candidate,
            error:
              validations[index]?.error ||
              (candidate.currentAllocation ? 'Student already has an active allocation.' : null),
          }));
          this.reviewRows.set(reviewRows);
          this.activeReviewTab.set('all');
          this.step.set(3);
          this.loading.set(false);
        },
        error: (error) => {
          this.error.set(apiMessage(error, 'Could not validate the selected students.'));
          this.loading.set(false);
        },
      });
  }

  assignReady(): void {
    if (!this.confirmation() || !this.readyRows().length || this.saving()) return;
    const rows = this.readyRows().map((item) => this.allocationBody(item._id));
    const chunks: AcademicAllocationInput[][] = [];
    for (let index = 0; index < rows.length; index += 5000)
      chunks.push(rows.slice(index, index + 5000));
    this.saving.set(true);
    this.error.set('');
    from(chunks)
      .pipe(
        concatMap((chunk) => this.api.bulkAcademicAllocations(chunk)),
        toArray(),
      )
      .subscribe({
        next: (results) => {
          const assigned = results.reduce((sum, result) => sum + result.assigned, 0);
          this.message.set(
            `${assigned} student${assigned === 1 ? '' : 's'} assigned successfully.`,
          );
          this.saving.set(false);
          this.clearSelection();
          this.step.set(1);
        },
        error: (error) => {
          this.error.set(apiMessage(error, 'Student allocation could not be completed.'));
          this.saving.set(false);
        },
      });
  }

  changeScope(): void {
    this.step.set(1);
    this.clearSelection();
  }

  downloadTemplate(): void {
    const csv = 'studentId\n26CSE0001\n';
    const link = document.createElement('a');
    link.href = URL.createObjectURL(new Blob([csv], { type: 'text/csv' }));
    link.download = 'student-allocation-template.csv';
    link.click();
    URL.revokeObjectURL(link.href);
  }

  saveDraft(): void {
    localStorage.setItem(
      'erp-student-allocation-draft',
      JSON.stringify({
        session: this.session,
        semester: this.semester,
        groupId: this.groupId,
        sectionId: this.sectionId,
        setId: this.setId,
        studentIds: [...this.selected().keys()],
      }),
    );
    this.message.set('Student allocation draft saved in this browser.');
  }

  readCsv(event: Event): void {
    const input = event.target as HTMLInputElement;
    const file = input.files?.[0];
    input.value = '';
    if (!file) return;
    file.text().then((text) => {
      const lines = text
        .split(/\r?\n/)
        .map((value) => value.trim())
        .filter(Boolean);
      const studentIds = (lines[0]?.toLowerCase() === 'studentid' ? lines.slice(1) : lines)
        .map((line) => line.split(',')[0]?.trim())
        .filter(Boolean) as string[];
      if (!studentIds.length) return this.error.set('The CSV does not contain any Student IDs.');
      const uniqueStudentIds = [...new Set(studentIds)];
      const chunks: string[][] = [];
      for (let index = 0; index < uniqueStudentIds.length; index += 5000)
        chunks.push(uniqueStudentIds.slice(index, index + 5000));
      this.loading.set(true);
      this.error.set('');
      from(chunks)
        .pipe(
          concatMap((chunk) => this.api.resolveAcademicStudents(chunk)),
          toArray(),
        )
        .subscribe({
          next: (results) => {
            const items = results.flatMap((result) => result.items);
            const unresolved = results.flatMap((result) => result.unresolved);
            const next = new Map(this.selected());
            for (const item of items) next.set(item._id, item);
            this.selected.set(next);
            this.message.set(
              `${items.length} students selected from CSV${unresolved.length ? `; ${unresolved.length} IDs were not found` : ''}.`,
            );
            if (this.scopeValid()) {
              this.step.set(2);
              this.loadStudents();
            } else this.loading.set(false);
          },
          error: (error) => {
            this.error.set(apiMessage(error, 'Could not read students from the CSV.'));
            this.loading.set(false);
          },
        });
    });
  }

  groupName(): string {
    return this.groups().find((item) => item._id === this.groupId)?.name || '—';
  }

  sectionName(): string {
    return this.sections().find((item) => item._id === this.sectionId)?.name || '—';
  }

  setName(): string {
    return this.sets().find((item) => item._id === this.setId)?.name || '—';
  }

  private allocationBody(studentAdmissionId: string): AcademicAllocationInput {
    return {
      studentAdmissionId,
      groupId: this.groupId,
      sectionId: this.sectionId,
      setId: this.setId,
      academicSession: this.session,
      semester: Number(this.semester),
    };
  }
}
