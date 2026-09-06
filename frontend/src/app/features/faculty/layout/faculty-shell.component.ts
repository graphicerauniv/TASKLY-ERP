import { ChangeDetectionStrategy, Component, DestroyRef, inject, signal } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { NavigationEnd, Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import {
  LucideCalendarCheck,
  LucideClipboardCheck,
  LucideLayoutDashboard,
  LucideLogOut,
} from '@lucide/angular';
import { filter } from 'rxjs';
import { FacultySessionService } from '../shared/faculty-session.service';

@Component({
  selector: 'erp-faculty-shell',
  imports: [
    RouterLink,
    RouterLinkActive,
    RouterOutlet,
    LucideCalendarCheck,
    LucideClipboardCheck,
    LucideLayoutDashboard,
    LucideLogOut,
  ],
  templateUrl: './faculty-shell.component.html',
  styleUrl: './faculty-shell.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FacultyShellComponent {
  readonly session = inject(FacultySessionService);
  readonly pageTitle = signal('Dashboard');
  private readonly router = inject(Router);
  private readonly destroyRef = inject(DestroyRef);

  constructor() {
    const profile = this.session.profile();
    if (!this.session.isAuthenticated() || profile?.mustChangePassword) {
      this.session.clear();
      void this.router.navigate(['/login']);
      return;
    }
    this.setPageTitle(this.router.url);
    this.router.events
      .pipe(
        filter((event): event is NavigationEnd => event instanceof NavigationEnd),
        takeUntilDestroyed(this.destroyRef),
      )
      .subscribe((event) => this.setPageTitle(event.urlAfterRedirects));
  }

  signOut(): void {
    this.session.clear();
    void this.router.navigate(['/login']);
  }

  private setPageTitle(url: string): void {
    this.pageTitle.set(
      url.includes('/attendance') ? 'Attendance' : url.includes('/exams') ? 'Exams' : 'Dashboard',
    );
  }
}
