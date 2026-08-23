import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import {
  LucideEye,
  LucideEyeOff,
  LucideLockKeyhole,
  LucideShieldCheck,
  LucideUserRound,
} from '@lucide/angular';

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
  styleUrl: './student-login.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StudentLoginComponent {
  readonly showPassword = signal(false);
  readonly frontendValidated = signal(false);

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

  togglePassword(): void {
    this.showPassword.update((visible) => !visible);
  }

  submit(): void {
    this.frontendValidated.set(false);
    this.form.markAllAsTouched();
    this.frontendValidated.set(this.form.valid);
  }
}
