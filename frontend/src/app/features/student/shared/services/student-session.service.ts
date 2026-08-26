import { computed, Injectable, signal } from '@angular/core';
import { StudentSession } from '../../../../core/models';

const STUDENT_TOKEN_KEY = 'taskly_student_token';
const STUDENT_PROFILE_KEY = 'taskly_student_profile';

@Injectable({ providedIn: 'root' })
export class StudentSessionService {
  private readonly tokenState = signal(localStorage.getItem(STUDENT_TOKEN_KEY));
  private readonly profileState = signal<StudentSession | null>(this.readStoredProfile());

  readonly token = this.tokenState.asReadonly();
  readonly profile = this.profileState.asReadonly();
  readonly isAuthenticated = computed(() => Boolean(this.tokenState() && this.profileState()));
  readonly firstName = computed(() => this.profileState()?.name.trim().split(/\s+/)[0] || null);
  readonly initials = computed(() => {
    const name = this.profileState()?.name.trim();
    if (!name) return 'ST';
    return name
      .split(/\s+/)
      .slice(0, 2)
      .map((part) => part.charAt(0).toUpperCase())
      .join('');
  });

  save(token: string, profile: StudentSession): void {
    localStorage.setItem(STUDENT_TOKEN_KEY, token);
    localStorage.setItem(STUDENT_PROFILE_KEY, JSON.stringify(profile));
    this.tokenState.set(token);
    this.profileState.set(profile);
  }

  clear(): void {
    localStorage.removeItem(STUDENT_TOKEN_KEY);
    localStorage.removeItem(STUDENT_PROFILE_KEY);
    this.tokenState.set(null);
    this.profileState.set(null);
  }

  private readStoredProfile(): StudentSession | null {
    try {
      const stored = localStorage.getItem(STUDENT_PROFILE_KEY);
      if (!stored) return null;
      const value = JSON.parse(stored) as Partial<StudentSession>;
      if (!value.id || !value.studentId || !value.name) return null;
      return {
        id: value.id,
        studentId: value.studentId,
        name: value.name,
        mustChangePassword: value.mustChangePassword !== false,
      };
    } catch {
      localStorage.removeItem(STUDENT_PROFILE_KEY);
      return null;
    }
  }
}
