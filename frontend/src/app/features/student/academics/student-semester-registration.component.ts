import { DatePipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import {
  LucideArrowLeft,
  LucideBookOpen,
  LucideCheck,
  LucideCircleAlert,
  LucideGraduationCap,
  LucideRefreshCw,
} from '@lucide/angular';
import { ApiService } from '../../../core/api.service';
import { SemesterRegistrationContext } from '../../../core/models';
import { StudentSessionService } from '../shared/services/student-session.service';

function apiMessage(error: unknown, fallback: string): string {
  if (typeof error === 'object' && error && 'error' in error) {
    const message = (error as { error?: { message?: unknown } }).error?.message;
    if (typeof message === 'string') return message;
  }
  return fallback;
}

@Component({
  selector: 'erp-student-semester-registration',
  imports: [
    DatePipe,
    RouterLink,
    LucideArrowLeft,
    LucideBookOpen,
    LucideCheck,
    LucideCircleAlert,
    LucideGraduationCap,
    LucideRefreshCw,
  ],
  templateUrl: './student-semester-registration.component.html',
  styleUrl: './student-semester-registration.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StudentSemesterRegistrationComponent {
  private readonly api = inject(ApiService);
  private readonly session = inject(StudentSessionService);

  readonly context = signal<SemesterRegistrationContext | null>(null);
  readonly loading = signal(true);
  readonly registering = signal(false);
  readonly error = signal('');
  readonly message = signal('');

  constructor() {
    this.load();
  }

  load(): void {
    const token = this.session.token();
    if (!token) {
      this.error.set('Your student session is unavailable. Please sign in again.');
      this.loading.set(false);
      return;
    }
    this.loading.set(true);
    this.error.set('');
    this.api.studentSemesterRegistration(token).subscribe({
      next: (context) => {
        this.context.set(context);
        this.loading.set(false);
      },
      error: (error) => {
        this.error.set(apiMessage(error, 'Semester registration details could not be loaded.'));
        this.loading.set(false);
      },
    });
  }

  register(): void {
    const token = this.session.token();
    const context = this.context();
    if (!token || !context?.eligible || this.registering()) return;
    this.registering.set(true);
    this.error.set('');
    this.message.set('');
    this.api.registerStudentSemester(token).subscribe({
      next: ({ item, alreadyRegistered }) => {
        this.context.update((value) =>
          value
            ? {
                ...value,
                registration: item,
                history: value.history.some((entry) => entry._id === item._id)
                  ? value.history
                  : [item, ...value.history],
                eligible: false,
              }
            : value,
        );
        this.message.set(
          alreadyRegistered
            ? 'This semester was already registered.'
            : 'Semester registration completed successfully.',
        );
        this.registering.set(false);
      },
      error: (error) => {
        this.error.set(apiMessage(error, 'Semester registration could not be completed.'));
        this.registering.set(false);
      },
    });
  }
}
