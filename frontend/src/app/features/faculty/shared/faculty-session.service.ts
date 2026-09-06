import { computed, Injectable, signal } from '@angular/core';
import { FacultySession } from '../../../core/models';

const FACULTY_TOKEN_KEY = 'taskly_faculty_token';
const FACULTY_PROFILE_KEY = 'taskly_faculty_profile';

@Injectable({ providedIn: 'root' })
export class FacultySessionService {
  private readonly tokenState = signal(readStorage(FACULTY_TOKEN_KEY));
  private readonly profileState = signal<FacultySession | null>(readProfile());

  readonly token = this.tokenState.asReadonly();
  readonly profile = this.profileState.asReadonly();
  readonly isAuthenticated = computed(() => Boolean(this.tokenState() && this.profileState()));
  readonly firstName = computed(() => this.profileState()?.name.trim().split(/\s+/)[0] || null);
  readonly initials = computed(() => {
    const name = this.profileState()?.name.trim();
    if (!name) return 'FC';
    return name
      .split(/\s+/)
      .slice(0, 2)
      .map((part) => part.charAt(0).toUpperCase())
      .join('');
  });

  save(token: string, profile: FacultySession): void {
    localStorage.setItem(FACULTY_TOKEN_KEY, token);
    localStorage.setItem(FACULTY_PROFILE_KEY, JSON.stringify(profile));
    this.tokenState.set(token);
    this.profileState.set(profile);
  }

  clear(): void {
    localStorage.removeItem(FACULTY_TOKEN_KEY);
    localStorage.removeItem(FACULTY_PROFILE_KEY);
    this.tokenState.set(null);
    this.profileState.set(null);
  }
}

function readProfile(): FacultySession | null {
  try {
    const value = JSON.parse(readStorage(FACULTY_PROFILE_KEY) || 'null') as FacultySession | null;
    return value?.id && value.employeeId && value.name ? value : null;
  } catch {
    localStorage.removeItem(FACULTY_PROFILE_KEY);
    return null;
  }
}

function readStorage(key: string): string | null {
  try {
    return localStorage.getItem(key);
  } catch {
    return null;
  }
}
