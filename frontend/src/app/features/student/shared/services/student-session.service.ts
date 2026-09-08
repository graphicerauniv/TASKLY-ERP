import { HttpClient } from '@angular/common/http';
import { computed, inject, Injectable, signal } from '@angular/core';
import { map, tap, throwError } from 'rxjs';
import { StudentSession } from '../../../../core/models';
import { API_BASE_URL } from '../../../../core/runtime-config';

const STUDENT_TOKEN_KEY = 'taskly_student_token';
const STUDENT_PROFILE_KEY = 'taskly_student_profile';
const STUDENT_REFRESH_TOKEN_KEY = 'taskly_student_refresh_token';

@Injectable({ providedIn: 'root' })
export class StudentSessionService {
  private readonly http = inject(HttpClient);
  private readonly tokenState = signal(localStorage.getItem(STUDENT_TOKEN_KEY));
  private readonly refreshTokenState = signal(localStorage.getItem(STUDENT_REFRESH_TOKEN_KEY));
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

  save(token: string, profile: StudentSession, refreshToken?: string): void {
    localStorage.setItem(STUDENT_TOKEN_KEY, token);
    localStorage.setItem(STUDENT_PROFILE_KEY, JSON.stringify(profile));
    if (refreshToken) {
      localStorage.setItem(STUDENT_REFRESH_TOKEN_KEY, refreshToken);
      this.refreshTokenState.set(refreshToken);
    }
    this.tokenState.set(token);
    this.profileState.set(profile);
  }

  refreshAccessToken() {
    const refreshToken = this.refreshTokenState();
    if (!refreshToken) return throwError(() => new Error('No renewable student session exists.'));
    return this.http
      .post<{ token: string; refreshToken: string; student: StudentSession }>(
        `${API_BASE_URL}/auth/student/refresh`,
        { refreshToken },
      )
      .pipe(
        tap((session) => this.save(session.token, session.student, session.refreshToken)),
        map((session) => session.token),
      );
  }

  clear(): void {
    localStorage.removeItem(STUDENT_TOKEN_KEY);
    localStorage.removeItem(STUDENT_PROFILE_KEY);
    localStorage.removeItem(STUDENT_REFRESH_TOKEN_KEY);
    this.tokenState.set(null);
    this.refreshTokenState.set(null);
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
        academicSession: value.academicSession,
        courseName: value.courseName,
        currentAcademicYear: value.currentAcademicYear,
        currentSemester: value.currentSemester,
        feeFrequency: value.feeFrequency,
      };
    } catch {
      localStorage.removeItem(STUDENT_PROFILE_KEY);
      return null;
    }
  }
}
