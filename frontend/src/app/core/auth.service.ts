import { computed, Injectable, signal } from '@angular/core';
@Injectable({ providedIn: 'root' })
export class AuthService {
  private readonly tokenState = signal(localStorage.getItem('taskly_admin_token'));
  readonly admin = signal<{ name: string; email: string } | null>(
    JSON.parse(localStorage.getItem('taskly_admin') || 'null'),
  );
  readonly isAuthenticated = computed(() => Boolean(this.tokenState()));
  token() {
    return this.tokenState();
  }
  save(token: string, admin: { name: string; email: string }) {
    localStorage.setItem('taskly_admin_token', token);
    localStorage.setItem('taskly_admin', JSON.stringify(admin));
    this.tokenState.set(token);
    this.admin.set(admin);
  }
  clear() {
    localStorage.removeItem('taskly_admin_token');
    localStorage.removeItem('taskly_admin');
    this.tokenState.set(null);
    this.admin.set(null);
  }
}
