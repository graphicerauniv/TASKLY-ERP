import { computed, inject, Injectable } from '@angular/core';
import { StudentSessionService } from '../../shared/services/student-session.service';
import {
  AcademicProgressViewModel,
  AttendanceDashboardViewModel,
  DashboardQuickAction,
  DashboardWidgetState,
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

const QUICK_ACTIONS: readonly DashboardQuickAction[] = Object.freeze([
  { id: 'fees', label: 'Pay fees', icon: 'wallet-cards', route: null, available: false },
  { id: 'id-card', label: 'Download ID', icon: 'badge-id', route: null, available: false },
  { id: 'certificate', label: 'Certificate', icon: 'file-check', route: null, available: false },
  { id: 'leave', label: 'Apply leave', icon: 'calendar-plus', route: null, available: false },
]);

@Injectable({ providedIn: 'root' })
export class StudentDashboardFacade {
  private readonly session = inject(StudentSessionService);

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
    identity: this.identity(),
    schedule: unavailable<readonly StudentScheduleItem[]>(),
    attendance: unavailable<AttendanceDashboardViewModel>(),
    academics: unavailable<AcademicProgressViewModel>(),
    fees: unavailable<FeeStatusViewModel>(),
    hostel: unavailable<HostelSummaryViewModel>(),
    notices: unavailable<readonly NoticeViewModel[]>(),
    documents: unavailable<readonly StudentDocumentViewModel[]>(),
    notifications: unavailable<readonly StudentNotificationViewModel[]>(),
    quickActions: QUICK_ACTIONS,
  }));
}
