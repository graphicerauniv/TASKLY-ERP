import { CurrencyPipe, DatePipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { forkJoin } from 'rxjs';
import { ApiService } from '../../../core/api.service';
import { FeeSchedule, MasterValue } from '../../../core/models';
import { AdminPageComponent } from '../../../shared/ui/admin-page/admin-page.component';
import { ConfirmDialogComponent } from '../../../shared/ui/confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'erp-fee-schedules',
  imports: [AdminPageComponent, ConfirmDialogComponent, CurrencyPipe, DatePipe, FormsModule],
  templateUrl: './fee-schedules.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FeeSchedulesComponent {
  private readonly api = inject(ApiService);
  readonly items = signal<FeeSchedule[]>([]);
  readonly universities = signal<MasterValue[]>([]);
  readonly colleges = signal<MasterValue[]>([]);
  readonly academicSessions = signal<MasterValue[]>([]);
  readonly saving = signal(false);
  readonly publishingId = signal<string | null>(null);
  readonly editingId = signal<string | null>(null);
  readonly error = signal('');
  readonly message = signal('');
  readonly deleteTarget = signal<FeeSchedule | null>(null);
  universityId = '';
  collegeId = '';
  academicSession = '';
  mode: 'semester' | 'year' = 'semester';
  publishAt = '';
  nextPeriodDeadline = '';
  dailyFineAmount: number | null = null;
  maxFineAmount: number | null = null;

  constructor() {
    this.load();
  }

  readonly collegeOptions = () =>
    this.universityId
      ? this.colleges().filter((college) => college.parentId === this.universityId)
      : [];

  changeUniversity() {
    if (!this.collegeOptions().some((college) => college._id === this.collegeId))
      this.collegeId = '';
  }

  load() {
    forkJoin({
      schedules: this.api.feeSchedules(),
      universities: this.api.masterValues('university', { active: true }),
      colleges: this.api.masterValues('college', { active: true }),
      academicSessions: this.api.masterValues('academic', { active: true }),
    }).subscribe({
      next: ({ schedules, universities, colleges, academicSessions }) => {
        this.items.set(schedules.items);
        this.universities.set(universities.items);
        this.colleges.set(colleges.items);
        this.academicSessions.set(academicSessions.items);
      },
      error: (error) => this.error.set(error.error?.message || 'Could not load fee schedules.'),
    });
  }

  save() {
    if (this.saving()) return;
    if (
      !this.universityId ||
      !this.collegeId ||
      !this.academicSession.trim() ||
      !this.publishAt ||
      !this.nextPeriodDeadline
    ) {
      this.error.set(
        'University, college, session, visibility time and next-fee deadline are required.',
      );
      return;
    }
    this.saving.set(true);
    this.error.set('');
    const body = {
      universityId: this.universityId,
      collegeId: this.collegeId,
      academicSession: this.academicSession.trim(),
      mode: this.mode,
      publishAt: new Date(this.publishAt).toISOString(),
      nextPeriodDeadline: new Date(this.nextPeriodDeadline).toISOString(),
      dailyFineAmount: Number(this.dailyFineAmount || 0),
      maxFineAmount: Number(this.maxFineAmount || 0),
      isActive: true,
    };
    const request = this.editingId()
      ? this.api.updateFeeSchedule(this.editingId()!, body)
      : this.api.createFeeSchedule(body);
    request.subscribe({
      next: () => {
        this.message.set(
          this.editingId()
            ? 'Fee publication schedule updated.'
            : 'Fee publication schedule created.',
        );
        this.saving.set(false);
        this.resetForm();
        this.load();
      },
      error: (error) => {
        this.error.set(error.error?.message || 'Could not create fee schedule.');
        this.saving.set(false);
      },
    });
  }

  edit(item: FeeSchedule) {
    this.editingId.set(item._id);
    this.universityId = item.universityId;
    this.collegeId = item.collegeId;
    this.academicSession = item.academicSession;
    this.mode = item.mode;
    this.publishAt = this.localDateTime(item.publishAt);
    this.nextPeriodDeadline = this.localDateTime(item.nextPeriodDeadline);
    this.dailyFineAmount = item.dailyFineAmount;
    this.maxFineAmount = item.maxFineAmount;
    this.error.set('');
    this.message.set('Editing the selected publication schedule.');
  }

  resetForm() {
    this.editingId.set(null);
    this.academicSession = '';
    this.mode = 'semester';
    this.publishAt = '';
    this.nextPeriodDeadline = '';
    this.dailyFineAmount = null;
    this.maxFineAmount = null;
  }

  publish(item: FeeSchedule, force = false) {
    if (this.publishingId()) return;
    this.publishingId.set(item._id);
    this.error.set('');
    this.api.publishFeeSchedule(item._id, force).subscribe({
      next: ({ studentsProcessed, published, alreadyPublished, scheduled }) => {
        this.message.set(
          force
            ? `${published} next-year fee ledger(s) are now visible; ${studentsProcessed} students checked.`
            : `${published} fee ledger(s) newly visible; ${scheduled} scheduled for the configured visibility time; ${alreadyPublished} were already visible (${studentsProcessed} students checked). Academic semesters and years were not changed.`,
        );
        this.publishingId.set(null);
      },
      error: (error) => {
        this.error.set(error.error?.message || 'Could not publish scheduled fees.');
        this.publishingId.set(null);
      },
    });
  }

  toggle(item: FeeSchedule) {
    this.api.updateFeeSchedule(item._id, { isActive: !item.isActive }).subscribe({
      next: () => this.load(),
      error: (error) => this.error.set(error.error?.message || 'Could not update fee schedule.'),
    });
  }

  requestDelete(item: FeeSchedule) {
    this.deleteTarget.set(item);
  }

  deleteSchedule() {
    const item = this.deleteTarget();
    if (!item || this.saving()) return;
    this.deleteTarget.set(null);
    this.saving.set(true);
    this.api.deleteFeeSchedule(item._id).subscribe({
      next: () => {
        this.message.set(
          'Publication schedule deleted. Existing ledgers and payments were preserved.',
        );
        this.saving.set(false);
        this.load();
      },
      error: (error) => {
        this.error.set(error.error?.message || 'Could not delete publication schedule.');
        this.saving.set(false);
      },
    });
  }

  private localDateTime(value: string) {
    const date = new Date(value);
    const shifted = new Date(date.getTime() - date.getTimezoneOffset() * 60_000);
    return shifted.toISOString().slice(0, 16);
  }
}
