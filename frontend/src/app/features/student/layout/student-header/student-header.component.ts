import { DatePipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, DestroyRef, inject, signal } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { NavigationEnd, Router, RouterLink } from '@angular/router';
import {
  LucideAlertTriangle,
  LucideBell,
  LucideCalendarDays,
  LucideCheck,
  LucideCheckCheck,
  LucideChevronDown,
  LucideChevronRight,
  LucideClock3,
  LucideInfo,
  LucideMenu,
  LucideSearch,
  LucideSettings,
  LucideX,
} from '@lucide/angular';
import { ApiService } from '../../../../core/api.service';
import { StudentNotification, StudentNotificationFeed } from '../../../../core/models';
import { StudentLayoutStateService } from '../../shared/services/student-layout-state.service';
import { StudentSessionService } from '../../shared/services/student-session.service';
import { StudentProfileMenuComponent } from '../student-profile-menu/student-profile-menu.component';
import { filter } from 'rxjs';

@Component({
  selector: 'erp-student-header',
  imports: [
    LucideBell,
    DatePipe,
    RouterLink,
    LucideAlertTriangle,
    LucideCalendarDays,
    LucideCheck,
    LucideCheckCheck,
    LucideChevronDown,
    LucideChevronRight,
    LucideClock3,
    LucideInfo,
    LucideMenu,
    LucideSearch,
    LucideSettings,
    LucideX,
    StudentProfileMenuComponent,
  ],
  templateUrl: './student-header.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StudentHeaderComponent {
  readonly layoutState = inject(StudentLayoutStateService);
  readonly session = inject(StudentSessionService);
  readonly pageTitle = signal('Dashboard');
  readonly notificationOpen = signal(false);
  readonly notifications = signal<StudentNotificationFeed | null>(null);
  readonly notificationsLoading = signal(false);
  private readonly api = inject(ApiService);
  private readonly router = inject(Router);
  private readonly destroyRef = inject(DestroyRef);

  constructor() {
    this.updatePageTitle(this.router.url);
    this.loadNotifications();
    this.router.events
      .pipe(
        filter((event): event is NavigationEnd => event instanceof NavigationEnd),
        takeUntilDestroyed(this.destroyRef),
      )
      .subscribe((event) => this.updatePageTitle(event.urlAfterRedirects));
  }
  openMobileNavigation(trigger: EventTarget | null): void {
    if (trigger instanceof HTMLElement) this.layoutState.openMobileNavigation(trigger);
  }

  toggleProfileMenu(trigger: EventTarget | null): void {
    if (trigger instanceof HTMLElement) this.layoutState.toggleProfileMenu(trigger);
  }

  toggleNotifications(): void {
    this.notificationOpen.update((open) => !open);
    if (this.notificationOpen()) this.loadNotifications();
  }

  closeNotifications(): void { this.notificationOpen.set(false); }

  markAllNotificationsRead(): void {
    const token = this.session.token();
    if (!token || !this.notifications()?.counts.unread) return;
    this.api.markStudentAttendanceAlertsRead(token, { all: true }).subscribe({ next: () => this.loadNotifications() });
  }

  openNotification(item: StudentNotification): void {
    const token = this.session.token();
    const navigate = () => {
      this.closeNotifications();
      void this.router.navigate(item.subjectId ? ['/student/attendance/shortage', item.subjectId] : ['/student/attendance/alerts']);
    };
    if (!token || item.read) { navigate(); return; }
    this.api.markStudentAttendanceAlertsRead(token, { ids: [item.id] }).subscribe({ next: navigate, error: navigate });
  }

  private loadNotifications(): void {
    const token = this.session.token();
    if (!token || this.notificationsLoading()) return;
    this.notificationsLoading.set(true);
    this.api.studentAttendanceAlerts(token).subscribe({
      next: (feed) => { this.notifications.set(feed); this.notificationsLoading.set(false); },
      error: () => this.notificationsLoading.set(false),
    });
  }

  private updatePageTitle(url: string): void {
    this.pageTitle.set(
      url.startsWith('/student/profile')
        ? 'Student Profile'
        : url.startsWith('/student/fees')
          ? 'Fees'
          : 'Dashboard',
    );
  }
}
