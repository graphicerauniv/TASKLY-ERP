import { computed, Injectable, signal } from '@angular/core';

export interface AdminIdentity {
  name: string;
  email: string;
}

@Injectable({ providedIn: 'root' })
export class AuthService {
  private readonly tokenState = signal(readStorage('taskly_admin_token'));
  readonly admin = signal<AdminIdentity | null>(readAdminIdentity());
  readonly isAuthenticated = computed(() => Boolean(this.tokenState()));

  token() {
    return this.tokenState();
  }

  save(token: string, admin: AdminIdentity) {
    writeStorage('taskly_admin_token', token);
    writeStorage('taskly_admin', JSON.stringify(admin));
    this.tokenState.set(token);
    this.admin.set(admin);
  }

  clear() {
    removeStorage('taskly_admin_token');
    removeStorage('taskly_admin');
    this.tokenState.set(null);
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
