import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';
import {
  LucideArrowRight,
  LucideEye,
  LucideEyeOff,
  LucideLockKeyhole,
  LucideShieldCheck,
  LucideUserRound,
} from '@lucide/angular';

@Component({
  selector: 'erp-admin-login',
  imports: [
    ReactiveFormsModule,
    RouterLink,
    LucideArrowRight,
    LucideEye,
    LucideEyeOff,
    LucideLockKeyhole,
    LucideShieldCheck,
    LucideUserRound,
  ],
  templateUrl: './admin-login.component.html',
  styleUrl: './admin-login.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AdminLoginComponent {
  readonly showPassword = signal(false);
  readonly frontendValidated = signal(false);

  readonly form = new FormGroup({
    email: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required, Validators.email],
    }),
    password: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required, Validators.minLength(8)],
    }),
    rememberMe: new FormControl(false, { nonNullable: true }),
  });

  togglePassword(): void {
    this.showPassword.update((visible) => !visible);
  }

  submit(): void {
    this.frontendValidated.set(false);
    this.form.markAllAsTouched();
    this.frontendValidated.set(this.form.valid);
  }
}
