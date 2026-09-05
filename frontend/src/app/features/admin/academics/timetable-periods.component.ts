import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
  LucideArrowRight,
  LucideCalendarDays,
  LucideCheck,
  LucideChevronLeft,
  LucideChevronRight,
  LucideClock3,
  LucideEllipsisVertical,
  LucideFilter,
  LucideInfo,
  LucideLandmark,
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
import { TimetableMaster, TimetablePeriod, TimetableStructure } from '../../../core/models';
import { AdminPageComponent } from '../../../shared/ui/admin-page/admin-page.component';

type PeriodFilter = 'all' | 'configured' | 'unconfigured';
type PeriodDrawer = 'configure' | 'detail' | null;

function apiMessage(error: unknown, fallback: string): string {
  if (typeof error === 'object' && error && 'error' in error) {
    const response = (error as { error?: { message?: unknown } }).error;
    if (typeof response?.message === 'string') return response.message;
  }
  return fallback;
}

@Component({
  selector: 'erp-timetable-periods',
  imports: [
    CommonModule,
    FormsModule,
    AdminPageComponent,
    LucideArrowRight,
    LucideCalendarDays,
    LucideCheck,
    LucideChevronLeft,
    LucideChevronRight,
    LucideClock3,
    LucideEllipsisVertical,
    LucideFilter,
    LucideInfo,
    LucideLandmark,
    LucidePencil,
    LucidePlus,
    LucideRefreshCw,
    LucideSearch,
    LucideTrash2,
    LucideX,
  ],
  templateUrl: './timetable-periods.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TimetablePeriodsComponent {
  private readonly api = inject(ApiService);
  private readonly route = inject(ActivatedRoute);
  private readonly router = inject(Router);

  readonly loading = signal(false);
  readonly saving = signal(false);
  readonly error = signal('');
  readonly message = signal('');
  readonly masters = signal<TimetableMaster[]>([]);
  readonly structures = signal<TimetableStructure[]>([]);
  readonly periods = signal<TimetablePeriod[]>([]);
  readonly selected = signal<TimetablePeriod | null>(null);
  readonly drawer = signal<PeriodDrawer>(null);
  readonly filter = signal<PeriodFilter>('all');
  readonly page = signal(1);
  readonly pageSize = signal(25);
  readonly pageSizeOptions = ERP_PAGINATION.pageSizeOptions;
  readonly durationOptions = [30, 40, 45, 50, 55, 60, 75, 90, 120];

  timetableMasterId = '';
  timetableStructureId = '';
  search = '';
  periodType: 'lecture' | 'break' = 'lecture';
  startTime = '';
  durationMinutes = 50;

  readonly selectedMaster = computed(
    () => this.masters().find((item) => item._id === this.timetableMasterId) || null,
  );
  readonly selectedStructure = computed(
    () => this.structures().find((item) => item._id === this.timetableStructureId) || null,
  );
  readonly structuresForMaster = computed(() =>
    this.structures().filter(
      (item) => item.timetableMasterId === this.timetableMasterId && item.isActive,
    ),
  );
  readonly scopedPeriods = computed(() =>
    this.periods()
      .filter((item) => item.timetableStructureId === this.timetableStructureId)
      .sort((left, right) => left.periodNumber - right.periodNumber),
  );
  readonly configuredCount = computed(
    () => this.scopedPeriods().filter((item) => item.isConfigured).length,
  );
  readonly unconfiguredCount = computed(() => this.scopedPeriods().length - this.configuredCount());

  constructor() {
    this.timetableMasterId = this.route.snapshot.queryParamMap.get('masterId') || '';
    this.timetableStructureId = this.route.snapshot.queryParamMap.get('structureId') || '';
    this.load();
  }

  load(): void {
    this.loading.set(true);
    this.error.set('');
    forkJoin({
      masters: this.api.academicRecords<TimetableMaster>('timetable-masters'),
      structures: this.api.academicRecords<TimetableStructure>('timetable-structures'),
      periods: this.api.academicRecords<TimetablePeriod>('timetable-periods'),
    }).subscribe({
      next: ({ masters, structures, periods }) => {
        this.masters.set(masters.items);
        this.structures.set(structures.items);
        this.periods.set(periods.items);
        if (!masters.items.some((item) => item._id === this.timetableMasterId))
          this.timetableMasterId = masters.items[0]?._id || '';
        const available = structures.items.filter(
          (item) => item.timetableMasterId === this.timetableMasterId,
        );
        if (!available.some((item) => item._id === this.timetableStructureId))
          this.timetableStructureId = available[0]?._id || '';
        this.syncQuery();
        this.loading.set(false);
      },
      error: (error) => {
        this.error.set(apiMessage(error, 'Could not load timetable periods.'));
        this.loading.set(false);
      },
    });
  }

  changeMaster(masterId: string): void {
    this.timetableMasterId = masterId;
    this.timetableStructureId = this.structuresForMaster()[0]?._id || '';
    this.scopeChanged();
  }

  changeStructure(structureId: string): void {
    this.timetableStructureId = structureId;
    this.scopeChanged();
  }

  filteredPeriods(): TimetablePeriod[] {
    const query = this.search.trim().toLowerCase();
    return this.scopedPeriods().filter((period) => {
      const matchesFilter =
        this.filter() === 'all' ||
        (this.filter() === 'configured' ? period.isConfigured : !period.isConfigured);
      const label = `${this.structureName()} period ${period.periodNumber}`.toLowerCase();
      return matchesFilter && (!query || label.includes(query));
    });
  }

  totalPages(): number {
    return Math.max(1, Math.ceil(this.filteredPeriods().length / this.pageSize()));
  }

  pagedPeriods(): TimetablePeriod[] {
    const current = Math.min(this.page(), this.totalPages());
    return this.filteredPeriods().slice((current - 1) * this.pageSize(), current * this.pageSize());
  }

  rangeEnd(): number {
    return Math.min(this.page() * this.pageSize(), this.filteredPeriods().length);
  }

  setFilter(filter: PeriodFilter): void {
    this.filter.set(filter);
    this.page.set(1);
  }

  openPrimaryConfigure(): void {
    const period =
      this.scopedPeriods().find((item) => !item.isConfigured) || this.scopedPeriods()[0];
    if (period) this.openPeriod(period, true);
  }

  openPeriod(period: TimetablePeriod, forceEdit = false): void {
    this.selected.set(period);
    if (forceEdit || !period.isConfigured) {
      this.periodType = period.periodType || 'lecture';
      this.startTime = period.startTime || '';
      this.durationMinutes = period.durationMinutes || 50;
      this.drawer.set('configure');
    } else {
      this.drawer.set('detail');
    }
  }

  editSelected(): void {
    const period = this.selected();
    if (period) this.openPeriod(period, true);
  }

  closeDrawer(): void {
    this.drawer.set(null);
    this.selected.set(null);
    this.error.set('');
  }

  calculatedEndTime(): string {
    if (!/^([01]\d|2[0-3]):[0-5]\d$/.test(this.startTime)) return '—';
    const [hours, minutes] = this.startTime.split(':').map(Number);
    const total = hours * 60 + minutes + Number(this.durationMinutes);
    if (total >= 1440) return 'Invalid';
    return `${String(Math.floor(total / 60)).padStart(2, '0')}:${String(total % 60).padStart(2, '0')}`;
  }

  formValid(): boolean {
    return Boolean(
      this.selected() &&
      this.startTime &&
      this.calculatedEndTime() !== 'Invalid' &&
      this.calculatedEndTime() !== '—',
    );
  }

  save(): void {
    const period = this.selected();
    if (!period || !this.formValid() || this.saving()) return;
    this.saving.set(true);
    this.error.set('');
    this.api
      .updateAcademicRecord<TimetablePeriod>('timetable-periods', period._id, {
        periodType: this.periodType,
        startTime: this.startTime,
        durationMinutes: Number(this.durationMinutes),
      })
      .subscribe({
        next: () => {
          this.message.set(`Period ${period.periodNumber} configured successfully.`);
          this.saving.set(false);
          this.closeDrawer();
          this.load();
        },
        error: (error) => {
          this.error.set(apiMessage(error, 'Could not save the period configuration.'));
          this.saving.set(false);
        },
      });
  }

  clearSelected(): void {
    const period = this.selected();
    if (!period || this.saving()) return;
    if (!confirm(`Clear Period ${period.periodNumber} configuration?`)) return;
    this.saving.set(true);
    this.api
      .updateAcademicRecord<TimetablePeriod>('timetable-periods', period._id, {
        clearConfiguration: true,
      })
      .subscribe({
        next: () => {
          this.message.set(`Period ${period.periodNumber} configuration cleared.`);
          this.saving.set(false);
          this.closeDrawer();
          this.load();
        },
        error: (error) => {
          this.error.set(apiMessage(error, 'Could not clear the period configuration.'));
          this.saving.set(false);
        },
      });
  }

  masterName(): string {
    return this.selectedMaster()?.name || 'Select timetable';
  }

  structureName(): string {
    return this.selectedStructure()?.name || 'Select structure';
  }

  private scopeChanged(): void {
    this.page.set(1);
    this.search = '';
    this.filter.set('all');
    this.closeDrawer();
    this.syncQuery();
  }

  private syncQuery(): void {
    void this.router.navigate([], {
      relativeTo: this.route,
      queryParams: {
        masterId: this.timetableMasterId || null,
        structureId: this.timetableStructureId || null,
      },
      queryParamsHandling: 'merge',
      replaceUrl: true,
    });
  }
}
