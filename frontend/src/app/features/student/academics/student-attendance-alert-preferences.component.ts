import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import {
  LucideAlertTriangle,
  LucideCheck,
  LucideChevronLeft,
  LucideClock3,
  LucideFileCheck2,
  LucideInfo,
  LucideRotateCcw,
  LucideSave,
} from '@lucide/angular';
import { ApiService } from '../../../core/api.service';
import { StudentNotificationPreferences } from '../../../core/models';
import { StudentSessionService } from '../shared/services/student-session.service';

const DEFAULTS: StudentNotificationPreferences = {
  enabled: true, critical: true, risk: true, pending: true, correction: true, onTrack: true,
};

@Component({
  selector: 'erp-student-attendance-alert-preferences',
  imports: [RouterLink, LucideAlertTriangle, LucideCheck, LucideChevronLeft, LucideClock3, LucideFileCheck2, LucideInfo, LucideRotateCcw, LucideSave],
  templateUrl: './student-attendance-alert-preferences.component.html',
  styleUrl: './student-attendance-alert-preferences.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StudentAttendanceAlertPreferencesComponent {
  private readonly api = inject(ApiService);
  private readonly session = inject(StudentSessionService);
  readonly preferences = signal<StudentNotificationPreferences>({ ...DEFAULTS });
  readonly loading = signal(true);
  readonly saving = signal(false);
  readonly saved = signal(false);
  readonly error = signal('');

  constructor() {
    const token = this.session.token();
    if (!token) { this.error.set('Your student session is unavailable.'); this.loading.set(false); return; }
    this.api.studentAttendanceAlertPreferences(token).subscribe({
      next: ({ preferences }) => { this.preferences.set(preferences); this.loading.set(false); },
      error: () => { this.error.set('Notification preferences are temporarily unavailable.'); this.loading.set(false); },
    });
  }

  toggle(key: keyof StudentNotificationPreferences): void {
    if (key === 'critical') return;
    this.saved.set(false);
    this.preferences.update((value) => ({ ...value, [key]: !value[key] }));
  }

  reset(): void { this.preferences.set({ ...DEFAULTS }); this.saved.set(false); }

  save(): void {
    const token = this.session.token();
    if (!token || this.saving()) return;
    this.saving.set(true); this.error.set('');
    this.api.saveStudentAttendanceAlertPreferences(token, this.preferences()).subscribe({
      next: ({ preferences }) => { this.preferences.set(preferences); this.saving.set(false); this.saved.set(true); },
      error: () => { this.error.set('Preferences could not be saved. Try again.'); this.saving.set(false); },
    });
  }
}
