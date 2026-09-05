import { HttpClient } from '@angular/common/http';
import { computed, inject, Injectable, signal } from '@angular/core';
import { finalize, map, Observable, shareReplay, tap, throwError } from 'rxjs';
import { API_BASE_URL } from './runtime-config';

export interface AdminIdentity {
  name: string;
  email: string;
}

@Injectable({ providedIn: 'root' })
export class AuthService {
  private readonly http = inject(HttpClient);
  private readonly tokenState = signal(readStorage('taskly_admin_token'));
  private readonly refreshTokenState = signal(readStorage('taskly_admin_refresh_token'));
  private refreshRequest: Observable<string> | null = null;
  readonly admin = signal<AdminIdentity | null>(readAdminIdentity());
  readonly isAuthenticated = computed(() => Boolean(this.tokenState()));

  token() {
    return this.tokenState();
  }

  save(token: string, admin: AdminIdentity, refreshToken?: string) {
    writeStorage('taskly_admin_token', token);
    writeStorage('taskly_admin', JSON.stringify(admin));
    if (refreshToken) {
      writeStorage('taskly_admin_refresh_token', refreshToken);
      this.refreshTokenState.set(refreshToken);
    }
    this.tokenState.set(token);
    this.admin.set(admin);
  }

  refreshAccessToken(): Observable<string> {
    const refreshToken = this.refreshTokenState();
    if (!refreshToken) return throwError(() => new Error('No renewable admin session exists.'));
    if (this.refreshRequest) return this.refreshRequest;

    this.refreshRequest = this.http
      .post<{ token: string; refreshToken: string; admin: AdminIdentity }>(
        `${API_BASE_URL}/auth/refresh`,
        { refreshToken },
      )
      .pipe(
        tap((session) => this.save(session.token, session.admin, session.refreshToken)),
        map((session) => session.token),
        finalize(() => {
          this.refreshRequest = null;
        }),
        shareReplay({ bufferSize: 1, refCount: false }),
      );
    return this.refreshRequest;
  }

  clear() {
    removeStorage('taskly_admin_token');
    removeStorage('taskly_admin_refresh_token');
    removeStorage('taskly_admin');
    this.tokenState.set(null);
    this.refreshTokenState.set(null);
    this.admin.set(null);
  }
}

function readAdminIdentity(): AdminIdentity | null {
  const stored = readStorage('taskly_admin');
  if (!stored) return null;
  try {
    const value = JSON.parse(stored) as Partial<AdminIdentity> | null;
    if (!value || typeof value.name !== 'string' || typeof value.email !== 'string') {
      removeStorage('taskly_admin');
      return null;
    }
    return { name: value.name, email: value.email };
  } catch {
    removeStorage('taskly_admin');
    return null;
  }
}

function readStorage(key: string): string | null {
  try {
    return globalThis.localStorage?.getItem(key) || null;
  } catch {
    return null;
  }
}

function writeStorage(key: string, value: string): void {
  try {
    globalThis.localStorage?.setItem(key, value);
  } catch {
    // Authentication state remains available for the current tab when storage is restricted.
  }
}

function removeStorage(key: string): void {
  try {
    globalThis.localStorage?.removeItem(key);
  } catch {
    // Restricted storage should not prevent logout or application bootstrap.
  }
}
