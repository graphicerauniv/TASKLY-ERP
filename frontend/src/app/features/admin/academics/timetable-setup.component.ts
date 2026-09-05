import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
  LucideCalendarDays,
  LucideCheck,
  LucideChevronDown,
  LucideChevronLeft,
  LucideChevronRight,
  LucideClock3,
  LucideColumns3,
  LucideEllipsisVertical,
  LucideFilter,
  LucideInfo,
  LucideLayers3,
  LucidePencil,
  LucidePlus,
  LucideRefreshCw,
  LucideSearch,
  LucideTrash2,
  LucideX,
} from '@lucide/angular';
import { ActivatedRoute, Router } from '@angular/router';
import { forkJoin } from 'rxjs';

import { ApiService } from '../../../core/api.service';
import { ERP_PAGINATION } from '../../../core/config/data-view.constants';
import {
  AcademicGroup,
  MasterValue,
  TimetableMaster,
  TimetableStructure,
} from '../../../core/models';
import { AdminIllustrationComponent } from '../../../shared/ui/admin-illustration/admin-illustration.component';
import { AdminPageComponent } from '../../../shared/ui/admin-page/admin-page.component';
import {
  MultiSelectDropdownComponent,
  MultiSelectOption,
} from '../../../shared/ui/multi-select-dropdown/multi-select-dropdown.component';

type TimetableSetupMode = 'masters' | 'structures';
type DrawerMode = 'create' | 'detail' | null;
type SetupRecord = TimetableMaster | TimetableStructure;

function apiMessage(error: unknown, fallback: string): string {
  if (typeof error === 'object' && error && 'error' in error) {
    const response = (error as { error?: { message?: unknown } }).error;
    if (typeof response?.message === 'string') return response.message;
  }
  return fallback;
}

@Component({
  selector: 'erp-timetable-setup',
  imports: [
    CommonModule,
    FormsModule,
    AdminIllustrationComponent,
    AdminPageComponent,
    MultiSelectDropdownComponent,
    LucideCalendarDays,
    LucideCheck,
    LucideChevronDown,
    LucideChevronLeft,
    LucideChevronRight,
    LucideClock3,
    LucideColumns3,
    LucideEllipsisVertical,
    LucideFilter,
    LucideInfo,
    LucideLayers3,
    LucidePencil,
    LucidePlus,
    LucideRefreshCw,
    LucideSearch,
    LucideTrash2,
    LucideX,
  ],
  templateUrl: './timetable-setup.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TimetableSetupComponent {
  private readonly api = inject(ApiService);
  private readonly route = inject(ActivatedRoute);
  private readonly router = inject(Router);

  readonly mode = signal<TimetableSetupMode>('masters');
  readonly loading = signal(false);
  readonly saving = signal(false);
  readonly error = signal('');
  readonly message = signal('');
  readonly drawer = signal<DrawerMode>(null);
  readonly editingId = signal<string | null>(null);
  readonly selected = signal<SetupRecord | null>(null);
  readonly masters = signal<TimetableMaster[]>([]);
  readonly structures = signal<TimetableStructure[]>([]);
  readonly groups = signal<AcademicGroup[]>([]);
  readonly universities = signal<MasterValue[]>([]);
  readonly colleges = signal<MasterValue[]>([]);
  readonly page = signal(1);
  readonly pageSize = signal(25);
  readonly pageSizeOptions = ERP_PAGINATION.pageSizeOptions;
  readonly workingDayOptions: MultiSelectOption[] = [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
    'Sunday',
  ].map((day) => ({ value: day, label: day }));

  search = '';
  selectedMasterId = '';
  name = '';
  session = '';
  universityId = '';
  collegeId = '';
  timetableMasterId = '';
  workingDays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
  periodCount = 8;

  readonly sessions = computed(() => [
    ...new Set([
      ...this.groups().map((item) => item.academicSession),
      ...this.masters().map((item) => item.academicSession),
      this.currentAcademicSession(),
    ]),
  ]);

  constructor() {
    this.route.data.subscribe((data) => {
      this.mode.set(data['section'] === 'timetable-structures' ? 'structures' : 'masters');
      this.selectedMasterId = this.route.snapshot.queryParamMap.get('masterId') || '';
      this.closeDrawer();
      this.load();
    });
  }

  isMasterMode(): boolean {
    return this.mode() === 'masters';
  }

  title(): string {
    return this.isMasterMode() ? 'Timetable masters' : 'Timetable structures';
  }

  description(): string {
    return this.isMasterMode()
      ? 'Define the academic scope used to build timetable structures.'
      : 'Define working days and period capacity for each timetable.';
  }

  load(): void {
    this.loading.set(true);
    this.error.set('');
    forkJoin({
      masters: this.api.academicRecords<TimetableMaster>('timetable-masters'),
      structures: this.api.academicRecords<TimetableStructure>('timetable-structures'),
      groups: this.api.academicRecords<AcademicGroup>('groups', { isActive: true }),
      universities: this.api.masterValues('university', { active: true }),
    }).subscribe({
      next: ({ masters, structures, groups, universities }) => {
        this.masters.set(masters.items);
        this.structures.set(structures.items);
        this.groups.set(groups.items);
        this.universities.set(universities.items);
        if (!this.selectedMasterId && masters.items.length)
          this.selectedMasterId = masters.items[0]._id;
        this.loading.set(false);
      },
      error: (error) => {
        this.error.set(apiMessage(error, 'Could not load timetable setup.'));
        this.loading.set(false);
      },
    });
  }

  masterName(masterId = this.selectedMasterId): string {
    return this.masters().find((item) => item._id === masterId)?.name || 'Select timetable master';
  }

  filteredRecords(): SetupRecord[] {
    const query = this.search.trim().toLowerCase();
    const records: SetupRecord[] = this.isMasterMode()
      ? this.masters()
      : this.structures().filter(
          (item) => !this.selectedMasterId || item.timetableMasterId === this.selectedMasterId,
        );
    return records.filter((item) => !query || JSON.stringify(item).toLowerCase().includes(query));
  }

  totalPages(): number {
    return Math.max(1, Math.ceil(this.filteredRecords().length / this.pageSize()));
  }

  pagedRecords(): SetupRecord[] {
    const current = Math.min(this.page(), this.totalPages());
    return this.filteredRecords().slice((current - 1) * this.pageSize(), current * this.pageSize());
  }

  rangeEnd(): number {
    return Math.min(this.page() * this.pageSize(), this.filteredRecords().length);
  }

  openCreate(): void {
    this.resetForm();
    if (!this.isMasterMode()) this.timetableMasterId = this.selectedMasterId;
    this.drawer.set('create');
  }

  openDetail(record: SetupRecord): void {
    this.selected.set(record);
    this.drawer.set('detail');
  }

  openEdit(): void {
    const record = this.selected();
    if (!record) return;
    this.editingId.set(record._id);
    this.name = record.name;
    if (this.isMaster(record)) {
      this.session = record.academicSession;
      this.universityId = record.universityId || '';
      if (this.universityId) this.loadColleges(record.collegeId || '');
    } else {
      this.timetableMasterId = record.timetableMasterId;
      this.workingDays = [...record.workingDays];
      this.periodCount = record.periodCount;
    }
    this.drawer.set('create');
  }

  closeDrawer(): void {
    this.drawer.set(null);
    this.selected.set(null);
    this.editingId.set(null);
  }

  resetForm(): void {
    this.editingId.set(null);
    this.name = '';
    this.session = '';
    this.universityId = '';
    this.collegeId = '';
    this.colleges.set([]);
    this.timetableMasterId = '';
    this.workingDays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
    this.periodCount = 8;
  }

  loadColleges(selectedCollegeId = ''): void {
    this.collegeId = selectedCollegeId;
    if (!this.universityId) return this.colleges.set([]);
    this.api
      .masterValues('college', { active: true, parentId: this.universityId })
      .subscribe(({ items }) => {
        this.colleges.set(items);
        this.collegeId = items.some((item) => item._id === selectedCollegeId)
          ? selectedCollegeId
          : '';
      });
  }

  formValid(): boolean {
    return this.isMasterMode()
      ? Boolean(this.name.trim() && this.session && this.universityId && this.collegeId)
      : Boolean(
          this.name.trim() && this.timetableMasterId && this.workingDays.length && this.periodCount,
        );
  }

  save(): void {
    if (!this.formValid() || this.saving()) return;
    this.saving.set(true);
    this.error.set('');
    const resource = this.isMasterMode() ? 'timetable-masters' : 'timetable-structures';
    const body = this.isMasterMode()
      ? {
          name: this.name.trim(),
          academicSession: this.session,
          universityId: this.universityId,
          collegeId: this.collegeId,
          isActive: true,
        }
      : {
          timetableMasterId: this.timetableMasterId,
          name: this.name.trim(),
          workingDays: this.workingDays,
          periodCount: Number(this.periodCount),
          isActive: true,
        };
    const request = this.editingId()
      ? this.api.updateAcademicRecord<SetupRecord>(resource, this.editingId()!, body)
      : this.api.createAcademicRecord<SetupRecord>(resource, body);
    request.subscribe({
      next: () => {
        this.message.set(
          `${this.isMasterMode() ? 'Timetable master' : 'Timetable structure'} saved successfully.`,
        );
        this.saving.set(false);
        this.closeDrawer();
        this.load();
      },
      error: (error) => {
        this.error.set(apiMessage(error, 'Could not save timetable setup.'));
        this.saving.set(false);
      },
    });
  }

  deleteSelected(): void {
    const record = this.selected();
    if (!record || this.saving()) return;
    const label = this.isMaster(record) ? 'timetable master' : 'timetable structure';
    if (!confirm(`Delete ${label} ${record.name}? This action cannot be undone.`)) return;
    this.saving.set(true);
    this.api
      .deleteAcademicRecord(
        this.isMasterMode() ? 'timetable-masters' : 'timetable-structures',
        record._id,
      )
      .subscribe({
        next: () => {
          this.message.set(`${this.isMasterMode() ? 'Master' : 'Structure'} deleted.`);
          this.saving.set(false);
          this.closeDrawer();
          this.load();
        },
        error: (error) => {
          this.error.set(apiMessage(error, 'Could not delete this record.'));
          this.saving.set(false);
        },
      });
  }

  chooseMaster(masterId: string): void {
    this.selectedMasterId = masterId;
    this.page.set(1);
    void this.router.navigate([], {
      relativeTo: this.route,
      queryParams: { masterId: masterId || null },
      queryParamsHandling: 'merge',
    });
  }

  openStructures(masterId: string): void {
    void this.router.navigate(['/admin/academics/timetable-structures'], {
      queryParams: { masterId },
    });
  }

  configurePeriods(structure: TimetableStructure): void {
    void this.router.navigate(['/admin/academics/timetable-periods'], {
      queryParams: {
        masterId: structure.timetableMasterId,
        structureId: structure._id,
      },
    });
  }

  isMaster(record: SetupRecord): record is TimetableMaster {
    return !('timetableMasterId' in record);
  }

  asStructure(record: SetupRecord): TimetableStructure {
    return record as TimetableStructure;
  }

  private currentAcademicSession(): string {
    const today = new Date();
    const startYear = today.getMonth() >= 6 ? today.getFullYear() : today.getFullYear() - 1;
    return `${startYear}-${startYear + 1}`;
  }
}
