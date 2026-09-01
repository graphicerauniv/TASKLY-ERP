import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { inject } from '@angular/core';
import { ApiService } from '../../../../../core/api.service';
import { AuthService } from '../../../../../core/auth.service';
import {
  LucideEye,
  LucideEyeOff,
  LucideLockKeyhole,
  LucideMail,
  LucideShieldCheck,
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
  ],
  templateUrl: './admin-login.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AdminLoginComponent {
  private readonly api = inject(ApiService);
  private readonly auth = inject(AuthService);
  private readonly router = inject(Router);
  private readonly route = inject(ActivatedRoute);
  readonly showPassword = signal(false);
  readonly loading = signal(false);
  readonly error = signal(
    this.route.snapshot.queryParamMap.get('reason') === 'session-expired'
      ? 'Your admin session expired. Sign in again to continue.'
      : '',
  );

  readonly form = new FormGroup({
    email: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required, Validators.email],
    }),
    password: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required],
    }),
    rememberMe: new FormControl(false, { nonNullable: true }),
  });

  togglePassword(): void {
    this.showPassword.update((visible) => !visible);
  }

  submit(): void {
    this.error.set('');
    this.form.markAllAsTouched();
    if (this.form.invalid || this.loading()) return;
    this.loading.set(true);
    const { email, password } = this.form.getRawValue();
    this.api.login(email, password).subscribe({
      next: ({ token, admin }) => {
        this.auth.save(token, admin);
        void this.router.navigate(['/admin/dashboard']);
      },
      error: (error) => {
        this.error.set(error.error?.message || 'Unable to sign in.');
        this.loading.set(false);
      },
    });
  }
}
