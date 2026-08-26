import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { Router } from '@angular/router';
import { LucideLogOut, LucideShieldCheck, LucideUserRound } from '@lucide/angular';
import { StudentSession } from '../../../../../core/models';

@Component({
  selector: 'erp-student-portal',
  imports: [LucideLogOut, LucideShieldCheck, LucideUserRound],
  templateUrl: './student-portal.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StudentPortalComponent {
  private readonly router = inject(Router);
  readonly student = signal<StudentSession | null>(this.readStudent());

  constructor() {
    if (!localStorage.getItem('taskly_student_token') || !this.student()?.studentId)
      void this.router.navigate(['/student/login']);
  }

  logout() {
    localStorage.removeItem('taskly_student_token');
    localStorage.removeItem('taskly_student_profile');
    void this.router.navigate(['/student/login']);
  }

  private readStudent(): StudentSession | null {
    try {
      return JSON.parse(localStorage.getItem('taskly_student_profile') || 'null');
    } catch {
      return null;
    }
  }
}
