import { computed, inject, Injectable, signal } from '@angular/core';
import { ApiService } from '../../../../core/api.service';
import { AcademicTimetableEntry } from '../../../../core/models';
import { StudentSessionService } from '../../shared/services/student-session.service';
import { STUDENT_DASHBOARD_SOURCE_CONFIG } from '../config/dashboard-source.config';
import { STUDENT_DASHBOARD_MODULES } from '../config/student-dashboard-modules.config';
import { STUDENT_DASHBOARD_PREVIEW_DATA } from './student-dashboard-preview-data';
import { StudentDashboardViewModel } from '../models/student-dashboard-module.model';
import {
  AcademicProgressViewModel,
  AttendanceDashboardViewModel,
  DashboardWidgetState,
  ExaminationSummaryViewModel,
  FeeStatusViewModel,
  HostelSummaryViewModel,
  NoticeViewModel,
  StudentDashboardOperationalState,
  StudentDocumentViewModel,
  StudentIdentityViewModel,
  StudentNotificationViewModel,
  StudentScheduleItem,
} from '../models/student-dashboard-operational.model';

function unavailable<T>(): DashboardWidgetState<T> {
  return { status: 'unavailable', data: null, errorMessage: null };
}

function loaded<T>(data: T): DashboardWidgetState<T> {
  return { status: 'loaded', data, errorMessage: null };
}

@Injectable({ providedIn: 'root' })
export class StudentDashboardFacade {
  private readonly session = inject(StudentSessionService);
  private readonly api = inject(ApiService);
  private readonly scheduleState = signal<DashboardWidgetState<readonly StudentScheduleItem[]>>({
    status: 'loading',
    data: null,
    errorMessage: null,
  });
  private readonly attendanceState = signal<DashboardWidgetState<AttendanceDashboardViewModel>>({
    status: 'loading',
    data: null,
    errorMessage: null,
  });

  constructor() {
    this.loadOperationalData();
  }

  readonly identity = computed<DashboardWidgetState<StudentIdentityViewModel>>(() => {
    const profile = this.session.profile();
    const firstName = this.session.firstName();
    if (!profile || !firstName) return unavailable<StudentIdentityViewModel>();
    return {
      status: 'loaded',
      data: {
        id: profile.id,
        studentId: profile.studentId,
        displayName: profile.name,
        firstName,
        initials: this.session.initials(),
      },
      errorMessage: null,
    };
  });

  readonly state = computed<StudentDashboardOperationalState>(() => ({
    sourceStatus: STUDENT_DASHBOARD_SOURCE_CONFIG,
    identity: this.identity(),
    schedule: this.scheduleState(),
    attendance: this.attendanceState(),
    academics: unavailable<AcademicProgressViewModel>(),
    fees: loaded<FeeStatusViewModel>(STUDENT_DASHBOARD_PREVIEW_DATA.fees),
    examinations: loaded<ExaminationSummaryViewModel>(STUDENT_DASHBOARD_PREVIEW_DATA.examination),
    hostel: unavailable<HostelSummaryViewModel>(),
    notices: loaded<readonly NoticeViewModel[]>(STUDENT_DASHBOARD_PREVIEW_DATA.notices),
    documents: unavailable<readonly StudentDocumentViewModel[]>(),
    notifications: unavailable<readonly StudentNotificationViewModel[]>(),
    quickActions: STUDENT_DASHBOARD_PREVIEW_DATA.quickActions,
  }));

  /** One normalized source consumed by both desktop and mobile dashboard presentation. */
  readonly viewModel = computed<StudentDashboardViewModel>(() => ({
    firstName: this.identity().data?.firstName ?? null,
    modules: STUDENT_DASHBOARD_MODULES,
    operational: this.state(),
  }));

  private loadOperationalData(): void {
    const token = this.session.token();
    if (!token) {
      this.scheduleState.set(unavailable());
      this.attendanceState.set(unavailable());
      return;
    }
    this.api.studentTimetable(token).subscribe({
      next: (result) => {
        const schedule = todaysSchedule(result.items || []);
        this.scheduleState.set({
          status: schedule.length ? 'loaded' : 'empty',
          data: schedule,
          errorMessage: null,
          lastUpdatedAt: new Date().toISOString(),
        });
      },
      error: () =>
        this.scheduleState.set({
          status: 'error',
          data: null,
          errorMessage: 'Your timetable could not be loaded.',
        }),
    });
    this.api.studentAttendance(token).subscribe({
      next: ({ overall }) =>
        this.attendanceState.set(
          loaded({
            percentage: overall.attendancePercentage,
            attendedClasses: overall.presentLectures,
            totalClasses: overall.totalLectures,
            absentClasses: overall.absentLectures,
            minimumRequired: 75,
            trendPercentage: null,
            status:
              overall.totalLectures === 0
                ? 'unknown'
                : overall.attendancePercentage >= 75
                  ? 'safe'
                  : overall.attendancePercentage >= 65
                    ? 'warning'
                    : 'critical',
          }),
        ),
      error: () =>
        this.attendanceState.set({
          status: 'error',
          data: null,
          errorMessage: 'Your attendance could not be loaded.',
        }),
    });
  }
}

function todaysSchedule(entries: AcademicTimetableEntry[]): readonly StudentScheduleItem[] {
  const now = new Date();
  const currentDay = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'][
    now.getDay()
  ];
  const currentMinutes = now.getHours() * 60 + now.getMinutes();
  return entries
    .filter((entry) => entry.day === currentDay && timeMinutes(entry.endTime) >= currentMinutes)
    .sort((left, right) => left.startTime.localeCompare(right.startTime))
    .slice(0, 3)
    .map((entry) => {
      const start = timeMinutes(entry.startTime);
      const end = timeMinutes(entry.endTime);
      return {
        id: entry._id,
        title: entry.subjectName || 'Scheduled class',
        startTime: displayTime(entry.startTime),
        endTime: displayTime(entry.endTime),
        location: entry.roomName || 'Room not assigned',
        faculty: entry.facultyName || null,
        relativeLabel:
          currentMinutes >= start && currentMinutes < end
            ? 'Now'
            : relativeTime(Math.max(0, start - currentMinutes)),
        type: entry.classType === 'lab' ? 'lab' : 'class',
        status: currentMinutes >= start && currentMinutes < end ? 'ongoing' : 'upcoming',
      } satisfies StudentScheduleItem;
    });
}

function timeMinutes(value: string): number {
  const [hours, minutes] = String(value || '00:00')
    .split(':')
    .map(Number);
  return hours * 60 + minutes;
}

function displayTime(value: string): string {
  const [hours, minutes] = String(value || '00:00')
    .split(':')
    .map(Number);
  const suffix = hours >= 12 ? 'PM' : 'AM';
  return `${String(hours % 12 || 12).padStart(2, '0')}:${String(minutes).padStart(2, '0')} ${suffix}`;
}

function relativeTime(minutes: number): string {
  if (minutes < 60) return `In ${minutes} min`;
  const hours = Math.floor(minutes / 60);
  const remainder = minutes % 60;
  return `In ${hours}h${remainder ? ` ${remainder}m` : ''}`;
}
