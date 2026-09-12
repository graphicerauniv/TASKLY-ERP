import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { forkJoin } from 'rxjs';
import { ApiService } from '../../../core/api.service';
import { ExamSchedule, ExamShiftSchedule, MasterValue } from '../../../core/models';
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
  selector: 'erp-exam-shifts',
  imports: [
    FormsModule,
    AdminDrawerComponent,
    AdminIllustrationComponent,
    AdminPageComponent,
    CompactActionMenuComponent,
    ConfirmDialogComponent,
  ],
  templateUrl: './exam-shifts.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExamShiftsComponent {
  private readonly api = inject(ApiService);

  readonly shifts = signal<ExamShiftSchedule[]>([]);
  readonly schedules = signal<ExamSchedule[]>([]);
  readonly masters = signal<MappingMaster[]>([]);
  readonly loading = signal(true);
  readonly saving = signal(false);
  readonly drawerOpen = signal(false);
  readonly editingId = signal<string | null>(null);
  readonly deleteTarget = signal<ExamShiftSchedule | null>(null);
  readonly error = signal('');
  readonly message = signal('');
  readonly shiftSerials = Array.from({ length: 20 }, (_, index) => index + 1);

  search = '';
  academicSessionId = '';
  universityId = '';
  examScheduleId = '';
  caption = '';
  shiftSerial = 1;
  timeFrom = '';
  timeFromMeridiem: 'AM' | 'PM' = 'AM';
  timeTo = '';
  timeToMeridiem: 'AM' | 'PM' = 'AM';
  isActive = true;

  constructor() {
    this.load();
  }

  master(typeSlug: string): MappingMaster[] {
    return this.masters().filter((item) => item.typeSlug === typeSlug && item.isActive);
  }

  scheduleOptions(): ExamSchedule[] {
    return this.schedules().filter(
      (item) =>
        item.isActive &&
        item.academicSessionId === this.academicSessionId &&
        item.universityId === this.universityId,
    );
  }

  visibleShifts(): ExamShiftSchedule[] {
    const query = this.search.trim().toLowerCase();
    if (!query) return this.shifts();
    return this.shifts().filter((item) =>
      [
        item.caption,
        item.examScheduleCaption,
        item.academicSession,
        item.universityName,
        item.collegeName,
        `shift ${item.shiftSerial}`,
      ].some((value) => value.toLowerCase().includes(query)),
    );
  }

  load(): void {
    this.loading.set(true);
    this.error.set('');
    forkJoin({
      shifts: this.api.examShiftSchedules(),
      schedules: this.api.examSchedules(),
      masters: this.api.formMappingOptions(),
    }).subscribe({
      next: ({ shifts, schedules, masters }) => {
        this.shifts.set(shifts.items);
        this.schedules.set(schedules.items);
        this.masters.set(masters.items.filter((item) => item.isActive));
        this.loading.set(false);
      },
      error: (error) => {
        this.error.set(apiMessage(error, 'Could not load exam shifts.'));
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

  edit(item: ExamShiftSchedule): void {
    this.editingId.set(item._id);
    this.academicSessionId = item.academicSessionId;
    this.universityId = item.universityId;
    this.examScheduleId = item.examScheduleId;
    this.caption = item.caption;
    this.shiftSerial = item.shiftSerial;
    this.timeFrom = item.timeFrom;
    this.timeFromMeridiem = item.timeFromMeridiem;
    this.timeTo = item.timeTo;
    this.timeToMeridiem = item.timeToMeridiem;
    this.isActive = item.isActive;
    this.error.set('');
    this.drawerOpen.set(true);
  }

  scopeChanged(): void {
    if (!this.scheduleOptions().some((item) => item._id === this.examScheduleId))
      this.examScheduleId = '';
  }

  closeDrawer(): void {
    if (this.saving()) return;
    this.drawerOpen.set(false);
    this.resetForm();
  }

  save(): void {
    if (this.saving()) return;
    if (
      !this.academicSessionId ||
      !this.universityId ||
      !this.examScheduleId ||
      !this.caption.trim() ||
      !this.timeFrom ||
      !this.timeTo
    ) {
      this.error.set('Complete all required shift schedule fields.');
      return;
    }
    const body = {
      academicSessionId: this.academicSessionId,
      universityId: this.universityId,
      examScheduleId: this.examScheduleId,
      caption: this.caption.trim(),
      shiftSerial: Number(this.shiftSerial),
      timeFrom: this.timeFrom,
      timeFromMeridiem: this.timeFromMeridiem,
      timeTo: this.timeTo,
      timeToMeridiem: this.timeToMeridiem,
      isActive: this.isActive,
    };
    this.saving.set(true);
    this.error.set('');
    const request = this.editingId()
      ? this.api.updateExamShiftSchedule(this.editingId()!, body)
      : this.api.createExamShiftSchedule(body);
    request.subscribe({
      next: () => {
        this.message.set(this.editingId() ? 'Shift schedule updated.' : 'Shift schedule created.');
        this.saving.set(false);
        this.drawerOpen.set(false);
        this.resetForm();
        this.load();
      },
      error: (error) => {
        this.error.set(apiMessage(error, 'Could not save the shift schedule.'));
        this.saving.set(false);
      },
    });
  }

  rowActions(): CompactActionItem[] {
    return [
      { id: 'edit', label: 'Edit shift', icon: 'edit' },
      { id: 'delete', label: 'Delete shift', icon: 'delete', destructive: true },
    ];
  }

  handleAction(action: string, item: ExamShiftSchedule): void {
    if (action === 'edit') this.edit(item);
    if (action === 'delete') this.deleteTarget.set(item);
  }

  deleteShift(): void {
    const item = this.deleteTarget();
    if (!item || this.saving()) return;
    this.saving.set(true);
    this.api.deleteExamShiftSchedule(item._id).subscribe({
      next: () => {
        this.shifts.update((items) => items.filter((entry) => entry._id !== item._id));
        this.deleteTarget.set(null);
        this.message.set('Shift schedule deleted.');
        this.saving.set(false);
      },
      error: (error) => {
        this.error.set(apiMessage(error, 'Could not delete the shift schedule.'));
        this.deleteTarget.set(null);
        this.saving.set(false);
      },
    });
  }

  resetForm(): void {
    this.editingId.set(null);
    this.academicSessionId = '';
    this.universityId = '';
    this.examScheduleId = '';
    this.caption = '';
    this.shiftSerial = 1;
    this.timeFrom = '';
    this.timeFromMeridiem = 'AM';
    this.timeTo = '';
    this.timeToMeridiem = 'AM';
    this.isActive = true;
  }
}
