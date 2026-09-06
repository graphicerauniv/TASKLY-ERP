import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { inject } from '@angular/core';
import { ApiService } from '../../../../../core/api.service';
import { AuthService } from '../../../../../core/auth.service';
import { FacultySessionService } from '../../../../faculty/shared/faculty-session.service';
import {
  LucideEye,
  LucideEyeOff,
  LucideLockKeyhole,
  LucideMail,
  LucideShieldCheck,
  LucideUserRound,
} from '@lucide/angular';

@Component({
  selector: 'erp-admin-login',
  imports: [
    ReactiveFormsModule,
    RouterLink,
    LucideEye,
    LucideEyeOff,
    LucideLockKeyhole,
    LucideMail,
    LucideShieldCheck,
    LucideUserRound,
  ],
  templateUrl: './admin-login.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AdminLoginComponent {
  private readonly api = inject(ApiService);
  private readonly auth = inject(AuthService);
  private readonly router = inject(Router);
  private readonly route = inject(ActivatedRoute);
  private readonly facultySession = inject(FacultySessionService);
  readonly mode = signal<'admin' | 'faculty'>('admin');
  readonly showPassword = signal(false);
  readonly showNewPassword = signal(false);
  readonly changeRequired = signal(false);
  readonly loading = signal(false);
  readonly error = signal(
    this.route.snapshot.queryParamMap.get('reason') === 'session-expired'
      ? 'Your admin session expired. Sign in again to continue.'
      : '',
  );

  readonly form = new FormGroup({
    identifier: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required],
    }),
    password: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required],
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
  private facultyToken = '';

  setMode(mode: 'admin' | 'faculty'): void {
    if (this.loading() || this.changeRequired()) return;
    this.mode.set(mode);
    this.form.reset({ identifier: '', password: '', rememberMe: false });
    this.error.set('');
  }

  togglePassword(): void {
    this.showPassword.update((visible) => !visible);
  }

  toggleNewPassword(): void {
    this.showNewPassword.update((visible) => !visible);
  }

  submit(): void {
    this.error.set('');
    this.form.markAllAsTouched();
    if (this.form.invalid || this.loading()) return;
    this.loading.set(true);
    const { identifier, password } = this.form.getRawValue();
    if (this.mode() === 'faculty') {
      this.api.facultyLogin(identifier, password).subscribe({
        next: ({ token, faculty }) => {
          this.facultyToken = token;
          this.facultySession.save(token, faculty);
          this.loading.set(false);
          if (faculty.mustChangePassword) this.changeRequired.set(true);
          else void this.router.navigate(['/faculty/dashboard']);
        },
        error: (error) => {
          this.error.set(error.error?.message || 'Unable to sign in.');
          this.loading.set(false);
        },
      });
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(identifier)) {
      this.error.set('Enter a valid official email.');
      this.loading.set(false);
      return;
    }
    this.api.login(identifier, password).subscribe({
      next: ({ token, refreshToken, admin }) => {
        this.auth.save(token, admin, refreshToken);
        void this.router.navigate(['/admin/dashboard']);
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
    this.api.changeFacultyPassword(this.facultyToken, password).subscribe({
      next: ({ token, faculty }) => {
        this.facultySession.save(token, faculty);
        this.loading.set(false);
        void this.router.navigate(['/faculty/dashboard']);
      },
      error: (error) => {
        this.error.set(error.error?.message || 'Unable to change the password.');
        this.loading.set(false);
      },
    });
  }
}
