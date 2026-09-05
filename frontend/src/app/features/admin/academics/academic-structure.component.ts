import { CdkTrapFocus } from '@angular/cdk/a11y';
import { CommonModule, DOCUMENT } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  HostListener,
  effect,
  inject,
  signal,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import {
  LucideArrowRight,
  LucideBookOpen,
  LucideBuilding2,
  LucideCalendarDays,
  LucideChevronLeft,
  LucideChevronRight,
  LucideColumns3,
  LucideFilter,
  LucideGraduationCap,
  LucideLayers3,
  LucideNetwork,
  LucidePlus,
  LucideSearch,
  LucideUsersRound,
  LucideX,
} from '@lucide/angular';
import { forkJoin } from 'rxjs';

import { ApiService } from '../../../core/api.service';
import { ERP_PAGINATION } from '../../../core/config/data-view.constants';
import { AcademicGroup, AcademicSection, AcademicSet, MasterValue } from '../../../core/models';
import { AdminIllustrationComponent } from '../../../shared/ui/admin-illustration/admin-illustration.component';
import { AdminPageComponent } from '../../../shared/ui/admin-page/admin-page.component';
import {
  CompactActionItem,
  CompactActionMenuComponent,
} from '../../../shared/ui/compact-action-menu/compact-action-menu.component';
import {
  MultiSelectDropdownComponent,
  MultiSelectOption,
} from '../../../shared/ui/multi-select-dropdown/multi-select-dropdown.component';

type StructureSection = 'groups' | 'sections' | 'sets';
type StructureRecord = AcademicGroup | AcademicSection | AcademicSet;

function apiMessage(error: unknown, fallback: string): string {
  if (typeof error === 'object' && error && 'error' in error) {
    const response = (error as { error?: { message?: unknown } }).error;
    if (typeof response?.message === 'string') return response.message;
  }
  return fallback;
}

@Component({
  selector: 'erp-academic-structure',
  imports: [
    CdkTrapFocus,
    CommonModule,
    FormsModule,
    AdminIllustrationComponent,
    AdminPageComponent,
    CompactActionMenuComponent,
    MultiSelectDropdownComponent,
    LucideArrowRight,
    LucideBookOpen,
    LucideBuilding2,
    LucideCalendarDays,
    LucideChevronLeft,
    LucideChevronRight,
    LucideColumns3,
    LucideFilter,
    LucideGraduationCap,
    LucideLayers3,
    LucideNetwork,
    LucidePlus,
    LucideSearch,
    LucideUsersRound,
    LucideX,
  ],
  templateUrl: './academic-structure.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AcademicStructureComponent {
  private readonly api = inject(ApiService);
  private readonly route = inject(ActivatedRoute);
  private readonly document = inject(DOCUMENT);

  readonly section = signal<StructureSection>('groups');
  readonly records = signal<StructureRecord[]>([]);
  readonly groups = signal<AcademicGroup[]>([]);
  readonly sections = signal<AcademicSection[]>([]);
  readonly masters = signal<Array<MasterValue & { typeSlug: string }>>([]);
  readonly loading = signal(false);
  readonly saving = signal(false);
  readonly drawerOpen = signal(false);
  readonly editingId = signal<string | null>(null);
  readonly error = signal('');
  readonly message = signal('');
  readonly page = signal(1);
  readonly pageSize = signal<number>(ERP_PAGINATION.defaultPageSize);
  readonly statusFilter = signal<'all' | 'active' | 'inactive'>('all');
  readonly filterOpen = signal(false);
  readonly columnsOpen = signal(false);
  readonly showPeriodColumn = signal(true);
  readonly showContextColumn = signal(true);
  readonly showStatusColumn = signal(true);
  readonly pageSizeOptions = ERP_PAGINATION.pageSizeOptions;

  search = '';
  name = '';
  session = '';
  semester = 1;
  universityId = '';
  collegeId = '';
  levelId = '';
  departmentIds: string[] = [];
  courseIds: string[] = [];
  branchIds: string[] = [];
  groupIds: string[] = [];
  groupId = '';
  sectionId = '';

  readonly rowActions: readonly CompactActionItem[] = [
    { id: 'edit', label: 'Edit', icon: 'edit' },
    { id: 'delete', label: 'Delete', icon: 'delete', destructive: true },
  ];

  constructor() {
    this.route.data.subscribe((data) => {
      this.section.set((data['section'] as StructureSection) || 'groups');
      this.closeDrawer();
      this.search = '';
      this.page.set(1);
      this.load();
    });

    effect((onCleanup) => {
      if (!this.drawerOpen()) return;
      const previousOverflow = this.document.body.style.overflow;
      this.document.body.style.overflow = 'hidden';
      onCleanup(() => {
        this.document.body.style.overflow = previousOverflow;
      });
    });
  }

  title(): string {
    return { groups: 'Groups', sections: 'Sections', sets: 'Sets' }[this.section()];
  }

  singular(): string {
    return { groups: 'group', sections: 'section', sets: 'set' }[this.section()];
  }

  description(): string {
    return {
      groups: 'Organise students by institution, session and semester.',
      sections: 'Create teachable sections and map them to academic groups.',
      sets: 'Create smaller teaching groups within a section.',
    }[this.section()];
  }

  drawerDescription(): string {
    return {
      groups: 'Create the academic hierarchy used for student organisation.',
      sections: 'A section can serve multiple compatible groups.',
      sets: 'Create a smaller teaching group within a section.',
    }[this.section()];
  }

  load(): void {
    this.loading.set(true);
    this.error.set('');
    forkJoin({
      bootstrap: this.api.academicBootstrap(),
      list: this.api.academicRecords<StructureRecord>(this.section()),
    }).subscribe({
      next: ({ bootstrap, list }) => {
        this.masters.set(bootstrap.masters);
        this.groups.set(bootstrap.groups);
        this.sections.set(bootstrap.sections);
        this.records.set(list.items);
        this.loading.set(false);
      },
      error: (error) => {
        this.error.set(apiMessage(error, `Could not load ${this.title().toLowerCase()}.`));
        this.loading.set(false);
      },
    });
  }

  master(type: string): Array<MasterValue & { typeSlug: string }> {
    return this.masters().filter((item) => item.typeSlug === type);
  }

  scopedMaster(type: string, parentIds: string[]): Array<MasterValue & { typeSlug: string }> {
    const items = this.master(type);
    return parentIds.length
      ? items.filter((item) => !item.parentId || parentIds.includes(item.parentId))
      : items;
  }

  label(type: string, value: string): string {
    return this.master(type).find((item) => item._id === value)?.name || '';
  }

  labels(type: string, values: string[]): string[] {
    return values.map((value) => this.label(type, value)).filter(Boolean);
  }

  options(items: readonly { _id: string; name: string; code?: string }[]): MultiSelectOption[] {
    return items.map((item) => ({ value: item._id, label: item.name }));
  }

  groupsForPeriod(): AcademicGroup[] {
    return this.groups().filter(
      (item) => item.academicSession === this.session && item.semester === Number(this.semester),
    );
  }

  sectionsForGroup(): AcademicSection[] {
    return this.sections().filter(
      (item) =>
        item.academicSession === this.session &&
        item.semester === Number(this.semester) &&
        item.groupIds.includes(this.groupId),
    );
  }

  groupName(id: string): string {
    return this.groups().find((item) => item._id === id)?.name || '—';
  }

  sectionName(id: string): string {
    return this.sections().find((item) => item._id === id)?.name || '—';
  }

  groupNames(ids: string[]): string {
    const names = ids.map((id) => this.groupName(id)).filter((name) => name !== '—');
    return names.length ? names.join(', ') : '—';
  }

  activeSessionCount(): number {
    return new Set(
      this.records()
        .map((item) => item.academicSession)
        .filter(Boolean),
    ).size;
  }

  departmentCount(): number {
    const ids = (this.records() as AcademicGroup[]).flatMap((item) => item.departmentIds || []);
    return new Set(ids).size;
  }

  summarySession(): string {
    return this.session || this.records()[0]?.academicSession || '—';
  }

  summarySemester(): string {
    return String(this.semester || this.records()[0]?.semester || '—');
  }

  filteredRecords(): StructureRecord[] {
    const query = this.search.trim().toLowerCase();
    const status = this.statusFilter();
    return this.records().filter((item) => {
      const matchesSearch = !query || JSON.stringify(item).toLowerCase().includes(query);
      const matchesStatus =
        status === 'all' || (status === 'active' ? item.isActive : !item.isActive);
      return matchesSearch && matchesStatus;
    });
  }

  totalPages(): number {
    return Math.max(1, Math.ceil(this.filteredRecords().length / this.pageSize()));
  }

  pagedRecords(): StructureRecord[] {
    const current = Math.min(this.page(), this.totalPages());
    return this.filteredRecords().slice((current - 1) * this.pageSize(), current * this.pageSize());
  }

  resultRange(): string {
    const total = this.filteredRecords().length;
    if (!total) return 'Showing 0 results';
    const first = (this.page() - 1) * this.pageSize() + 1;
    const last = Math.min(this.page() * this.pageSize(), total);
    return `Showing ${first}–${last} of ${total} ${total === 1 ? 'result' : 'results'}`;
  }

  tableColspan(): number {
    return (
      2 +
      Number(this.showPeriodColumn()) +
      Number(this.showContextColumn()) +
      Number(this.showStatusColumn())
    );
  }

  openCreate(): void {
    this.resetForm();
    this.drawerOpen.set(true);
  }

  closeDrawer(): void {
    this.drawerOpen.set(false);
    this.resetForm();
  }

  edit(item: StructureRecord): void {
    this.resetForm();
    this.editingId.set(item._id);
    this.name = item.name;
    this.session = item.academicSession;
    this.semester = Number(item.semester || 1);
    if (this.section() === 'groups') {
      const group = item as AcademicGroup;
      this.universityId = group.universityId || '';
      this.collegeId = group.collegeId || '';
      this.levelId = group.levelId || '';
      this.departmentIds = [...(group.departmentIds || [])];
      this.courseIds = [...(group.courseIds || [])];
      this.branchIds = [...(group.branchIds || [])];
    } else if (this.section() === 'sections') {
      this.groupIds = [...((item as AcademicSection).groupIds || [])];
    } else {
      this.groupId = (item as AcademicSet).groupId || '';
      this.sectionId = (item as AcademicSet).sectionId || '';
    }
    this.drawerOpen.set(true);
  }

  handleAction(action: string, item: StructureRecord): void {
    if (action === 'edit') this.edit(item);
    if (action === 'delete') this.remove(item);
  }

  remove(item: StructureRecord): void {
    if (!confirm(`Delete ${item.name}?`)) return;
    this.api.deleteAcademicRecord(this.section(), item._id).subscribe({
      next: () => {
        this.message.set(`${item.name} deleted.`);
        this.load();
      },
      error: (error) => this.error.set(apiMessage(error, `Could not delete ${item.name}.`)),
    });
  }

  formValid(): boolean {
    if (!this.name.trim() || !this.session || !this.semester) return false;
    if (this.section() === 'groups')
      return Boolean(this.universityId && this.collegeId && this.departmentIds.length);
    if (this.section() === 'sections') return this.groupIds.length > 0;
    return Boolean(this.groupId && this.sectionId);
  }

  save(): void {
    if (!this.formValid()) return;
    this.saving.set(true);
    this.error.set('');
    const id = this.editingId();
    const request = id
      ? this.api.updateAcademicRecord<StructureRecord>(this.section(), id, this.body())
      : this.api.createAcademicRecord<StructureRecord>(this.section(), this.body());
    request.subscribe({
      next: () => {
        this.message.set(`${this.singular()} ${id ? 'updated' : 'created'} successfully.`);
        this.saving.set(false);
        this.closeDrawer();
        this.load();
      },
      error: (error) => {
        this.error.set(apiMessage(error, `Could not save this ${this.singular()}.`));
        this.saving.set(false);
      },
    });
  }

  private body(): Record<string, unknown> {
    if (this.section() === 'groups') {
      return {
        name: this.name.trim(),
        academicSession: this.session,
        semester: Number(this.semester),
        universityId: this.universityId,
        universityName: this.label('university', this.universityId),
        collegeId: this.collegeId,
        collegeName: this.label('college', this.collegeId),
        levelId: this.levelId || null,
        levelName: this.label('level', this.levelId),
        departmentIds: this.departmentIds,
        departmentNames: this.labels('department', this.departmentIds),
        courseIds: this.courseIds,
        courseNames: this.labels('course', this.courseIds),
        branchIds: this.branchIds,
        branchNames: this.labels('branch', this.branchIds),
        isActive: true,
      };
    }
    if (this.section() === 'sections') {
      return {
        name: this.name.trim(),
        academicSession: this.session,
        semester: Number(this.semester),
        groupIds: this.groupIds,
        isActive: true,
      };
    }
    return {
      name: this.name.trim(),
      academicSession: this.session,
      semester: Number(this.semester),
      groupId: this.groupId,
      sectionId: this.sectionId,
      isActive: true,
    };
  }

  private resetForm(): void {
    this.editingId.set(null);
    this.name = '';
    this.session = '';
    this.semester = 1;
    this.universityId = '';
    this.collegeId = '';
    this.levelId = '';
    this.departmentIds = [];
    this.courseIds = [];
    this.branchIds = [];
    this.groupIds = [];
    this.groupId = '';
    this.sectionId = '';
  }

  @HostListener('document:keydown.escape')
  closeOverlays(): void {
    if (this.drawerOpen()) this.closeDrawer();
    this.filterOpen.set(false);
    this.columnsOpen.set(false);
  }
}
