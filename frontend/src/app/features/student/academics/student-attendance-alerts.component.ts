import { DatePipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import {
  LucideAlertTriangle,
  LucideBell,
  LucideCheck,
  LucideCheckCheck,
  LucideChevronRight,
  LucideCircleAlert,
  LucideClock3,
  LucideInfo,
  LucideSearch,
  LucideSettings,
} from '@lucide/angular';
import { ApiService } from '../../../core/api.service';
import { StudentNotification, StudentNotificationFeed, StudentNotificationType } from '../../../core/models';
import { StudentSessionService } from '../shared/services/student-session.service';

type AlertFilter = 'all' | 'unread' | 'critical' | 'updates';

@Component({
  selector: 'erp-student-attendance-alerts',
  imports: [
    DatePipe,
    RouterLink,
    LucideAlertTriangle,
    LucideBell,
    LucideCheck,
    LucideCheckCheck,
    LucideChevronRight,
    LucideCircleAlert,
    LucideClock3,
    LucideInfo,
    LucideSearch,
    LucideSettings,
  ],
  templateUrl: './student-attendance-alerts.component.html',
  styleUrl: './student-attendance-alerts.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StudentAttendanceAlertsComponent {
  private readonly api = inject(ApiService);
  private readonly session = inject(StudentSessionService);
  private readonly router = inject(Router);
  readonly feed = signal<StudentNotificationFeed | null>(null);
  readonly loading = signal(true);
  readonly error = signal('');
  readonly search = signal('');
  readonly filter = signal<AlertFilter>('all');
  readonly filteredItems = computed(() => {
    const query = this.search().trim().toLowerCase();
    return (this.feed()?.items || []).filter((item) => {
      const searchMatch = !query || `${item.title} ${item.message}`.toLowerCase().includes(query);
      const filterMatch =
        this.filter() === 'all' ||
        (this.filter() === 'unread' && !item.read) ||
        (this.filter() === 'critical' && ['critical', 'risk'].includes(item.type)) ||
        (this.filter() === 'updates' && ['pending', 'correction', 'on-track'].includes(item.type));
      return searchMatch && filterMatch;
    });
  });
  readonly groups = computed(() => {
    const now = new Date();
    const today = new Date(now.getFullYear(), now.getMonth(), now.getDate()).getTime();
    const yesterday = today - 86_400_000;
    const result = [
      { label: 'Today', items: [] as StudentNotification[] },
      { label: 'Yesterday', items: [] as StudentNotification[] },
      { label: 'Earlier', items: [] as StudentNotification[] },
    ];
    for (const item of this.filteredItems()) {
      const date = new Date(item.createdAt);
      const day = new Date(date.getFullYear(), date.getMonth(), date.getDate()).getTime();
      (day >= today ? result[0] : day >= yesterday ? result[1] : result[2]).items.push(item);
    }
    return result.filter((group) => group.items.length);
  });

  constructor() { this.load(); }

  setSearch(value: string): void { this.search.set(value); }
  setFilter(filter: AlertFilter): void { this.filter.set(filter); }

  markAllRead(): void {
    const token = this.session.token();
    if (!token || !this.feed()?.counts.unread) return;
    this.api.markStudentAttendanceAlertsRead(token, { all: true }).subscribe({ next: () => this.load() });
  }

  open(item: StudentNotification): void {
    const token = this.session.token();
    const target = item.subjectId
      ? ['/student/attendance/shortage', item.subjectId]
      : ['/student/attendance/alerts'];
    if (!token || item.read) { void this.router.navigate(target); return; }
    this.api.markStudentAttendanceAlertsRead(token, { ids: [item.id] }).subscribe({
      next: () => void this.router.navigate(target),
      error: () => void this.router.navigate(target),
    });
  }

  typeLabel(type: StudentNotificationType): string {
    return { critical: 'Critical', risk: 'At risk', pending: 'Update', correction: 'Resolved', 'on-track': 'On track' }[type];
  }

  private load(): void {
    const token = this.session.token();
    if (!token) { this.error.set('Your student session is unavailable.'); this.loading.set(false); return; }
    this.loading.set(true);
    this.api.studentAttendanceAlerts(token).subscribe({
      next: (feed) => { this.feed.set(feed); this.loading.set(false); },
      error: () => { this.error.set('Attendance alerts are temporarily unavailable.'); this.loading.set(false); },
    });
  }
}
