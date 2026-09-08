import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';
import { DatePipe } from '@angular/common';
import { RouterLink } from '@angular/router';
import {
  LucideAlertTriangle,
  LucideCheck,
  LucideChevronRight,
  LucideRefreshCw,
} from '@lucide/angular';
import { ApiService } from '../../../core/api.service';
import { StudentAttendanceSubject } from '../../../core/models';
import { StudentSessionService } from '../shared/services/student-session.service';
import { StudentSubjectIconComponent } from '../shared/components/student-subject-icon/student-subject-icon.component';

interface AttendanceTool {
  readonly id:
    | 'overview'
    | 'subjects'
    | 'analysis'
    | 'alerts'
    | 'corrections'
    | 'reports';
  readonly title: string;
  readonly description: string;
  readonly image: string;
  readonly tone: string;
  readonly route?: string[];
}

@Component({
  selector: 'erp-student-attendance',
  imports: [
    DatePipe,
    LucideAlertTriangle,
    LucideCheck,
    LucideChevronRight,
    LucideRefreshCw,
    RouterLink,
    StudentSubjectIconComponent,
  ],
  templateUrl: './student-attendance.component.html',
  styleUrl: './student-attendance.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StudentAttendanceComponent {
  private readonly api = inject(ApiService);
  readonly session = inject(StudentSessionService);
  readonly subjects = signal<StudentAttendanceSubject[]>([]);
  readonly overall = signal({
    totalLectures: 0,
    presentLectures: 0,
    absentLectures: 0,
    attendancePercentage: 0,
  });
  readonly loading = signal(true);
  readonly refreshing = signal(false);
  readonly error = signal('');
  readonly lastUpdated = signal<Date | null>(null);
  readonly toolNotice = signal('');
  readonly requiredAttendance = 75;
  readonly attendanceTools: readonly AttendanceTool[] = [
    {
      id: 'overview',
      title: 'Overview',
      description: 'Current attendance summary',
      image: '/assets/student/attendance/overview.webp',
      tone: 'overview',
    },
    {
      id: 'subjects',
      title: 'Subject Attendance',
      description: 'View subject-wise records',
      image: '/assets/student/attendance/subject-attendance.webp',
      tone: 'subject',
      route: ['/student/attendance/subjects'],
    },
    {
      id: 'analysis',
      title: 'Analyze Attendance',
      description: 'Understand performance patterns',
      image: '/assets/student/attendance/analyze-attendance.webp',
      tone: 'analysis',
      route: ['/student/attendance/analyze'],
    },
    {
      id: 'alerts',
      title: 'Shortage & Alerts',
      description: 'Subjects needing attention',
      image: '/assets/student/attendance/shortage-alerts.webp',
      tone: 'alerts',
      route: ['/student/attendance/shortage'],
    },
    {
      id: 'corrections',
      title: 'Correction Requests',
      description: 'Report an incorrect record',
      image: '/assets/student/attendance/correction-requests.webp',
      tone: 'corrections',
      route: ['/student/attendance/corrections'],
    },
    {
      id: 'reports',
      title: 'Reports & Downloads',
      description: 'Download attendance reports',
      image: '/assets/student/attendance/reports-downloads.webp',
      tone: 'reports',
    },
  ];

  readonly percentage = computed(() =>
    Math.min(100, Math.max(0, this.overall().attendancePercentage || 0)),
  );
  readonly status = computed<'unknown' | 'safe' | 'warning' | 'critical'>(() => {
    if (!this.overall().totalLectures) return 'unknown';
    if (this.percentage() >= this.requiredAttendance) return 'safe';
    if (this.percentage() >= this.requiredAttendance - 10) return 'warning';
    return 'critical';
  });
  readonly statusLabel = computed(() => {
    const labels = {
      unknown: 'Not started',
      safe: 'On track',
      warning: 'Needs attention',
      critical: 'Critical shortage',
    } as const;
    return labels[this.status()];
  });
  readonly requirementMessage = computed(() => {
    if (!this.overall().totalLectures) return 'Attendance will update after the first lecture.';
    const difference = Math.abs(this.percentage() - this.requiredAttendance);
    if (this.percentage() >= this.requiredAttendance) {
      return `You are ${this.formatPercentage(difference)}% above the requirement.`;
    }
    return `You are ${this.formatPercentage(difference)}% below the requirement.`;
  });
  readonly needsAttention = computed(() =>
    this.subjects()
      .filter(
        (subject) =>
          subject.totalLectures > 0 && subject.attendancePercentage < this.requiredAttendance,
      )
      .sort((left, right) => left.attendancePercentage - right.attendancePercentage),
  );

  constructor() {
    this.loadAttendance();
  }

  refresh(): void {
    if (this.refreshing() || this.loading()) return;
    this.refreshing.set(true);
    this.loadAttendance(true);
  }

  activateTool(tool: AttendanceTool): void {
    if (tool.id === 'overview') {
      document.querySelector('.student-attendance-hero')?.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
      });
      this.toolNotice.set('You are viewing the current attendance overview.');
      return;
    }
    this.toolNotice.set(
      `${tool.title} will open when its detailed page is added in the next phase.`,
    );
  }

  openAlerts(): void {
    this.toolNotice.set('Opening your live shortage and attendance alerts.');
  }

  formatPercentage(value: number): string {
    return new Intl.NumberFormat('en-IN', { maximumFractionDigits: 1 }).format(value);
  }

  private loadAttendance(isRefresh = false): void {
    const token = this.session.token();
    if (!token) {
      this.error.set('Your student session is unavailable. Sign in again to continue.');
      this.loading.set(false);
      this.refreshing.set(false);
      return;
    }
    if (!isRefresh) this.loading.set(true);
    this.error.set('');
    this.api.studentAttendance(token).subscribe({
      next: (result) => {
        this.subjects.set(result.subjects);
        this.overall.set(result.overall);
        this.lastUpdated.set(new Date());
        this.loading.set(false);
        this.refreshing.set(false);
      },
      error: () => {
        this.error.set('Your attendance is temporarily unavailable.');
        this.loading.set(false);
        this.refreshing.set(false);
      },
    });
  }
}
