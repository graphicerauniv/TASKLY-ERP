import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {
  LucideEye,
  LucideEyeOff,
  LucideLockKeyhole,
  LucideShieldCheck,
  LucideUserRound,
} from '@lucide/angular';
import { ApiService } from '../../../../../core/api.service';
import { StudentSessionService } from '../../../shared/services/student-session.service';

@Component({
  selector: 'erp-student-login',
  imports: [
    ReactiveFormsModule,
    LucideEye,
    LucideEyeOff,
    LucideLockKeyhole,
    LucideShieldCheck,
    LucideUserRound,
  ],
  templateUrl: './student-login.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StudentLoginComponent {
  private readonly api = inject(ApiService);
  private readonly router = inject(Router);
  private readonly session = inject(StudentSessionService);
  readonly showPassword = signal(false);
  readonly showNewPassword = signal(false);
  readonly changeRequired = signal(false);
  readonly loading = signal(false);
  readonly error = signal('');
  private studentToken = '';

  readonly form = new FormGroup({
    studentId: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required, Validators.minLength(4)],
    }),
    password: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required, Validators.minLength(8)],
    }),
    rememberMe: new FormControl(false, { nonNullable: true }),
  });
  readonly changeForm = new FormGroup({
    password: new FormControl('', {
      nonNullable: true,
      validators: [
        Validators.required,
        Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[^A-Za-z0-9]).{8,}$/),
      ],
    }),
    confirmPassword: new FormControl('', { nonNullable: true, validators: [Validators.required] }),
  });

  togglePassword(): void {
    this.showPassword.update((visible) => !visible);
  }

  toggleNewPassword(): void {
    this.showNewPassword.update((visible) => !visible);
  }

  submit(): void {
    this.form.markAllAsTouched();
    if (this.form.invalid || this.loading()) return;
    this.loading.set(true);
    this.error.set('');
    const { studentId, password } = this.form.getRawValue();
    this.api.studentLogin(studentId, password).subscribe({
      next: ({ token, student }) => {
        this.studentToken = token;
        this.saveSession(token, student);
        this.loading.set(false);
        if (student.mustChangePassword) this.changeRequired.set(true);
        else void this.router.navigate(['/student/dashboard']);
      },
      error: (error) => {
        this.error.set(error.error?.message || 'Unable to sign in.');
        this.loading.set(false);
      },
    });
  }

  changePassword(): void {
    this.changeForm.markAllAsTouched();
    const { password, confirmPassword } = this.changeForm.getRawValue();
    if (this.changeForm.invalid || password !== confirmPassword || this.loading()) {
      if (password !== confirmPassword) this.error.set('The passwords do not match.');
      return;
    }
    this.loading.set(true);
    this.error.set('');
    this.api.changeStudentPassword(this.studentToken, password).subscribe({
      next: ({ token, student }) => {
        this.saveSession(token, student);
        this.loading.set(false);
        void this.router.navigate(['/student/dashboard']);
      },
      error: (error) => {
        this.error.set(error.error?.message || 'Unable to change the password.');
        this.loading.set(false);
      },
    });
  }

  private saveSession(token: string, student: import('../../../../../core/models').StudentSession) {
    this.session.save(token, student);
  }
}
