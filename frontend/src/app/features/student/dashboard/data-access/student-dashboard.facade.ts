import { computed, inject, Injectable } from '@angular/core';
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
    schedule: loaded<readonly StudentScheduleItem[]>(STUDENT_DASHBOARD_PREVIEW_DATA.schedule),
    attendance: loaded<AttendanceDashboardViewModel>(STUDENT_DASHBOARD_PREVIEW_DATA.attendance),
    academics: unavailable<AcademicProgressViewModel>(),
    fees: loaded<FeeStatusViewModel>(STUDENT_DASHBOARD_PREVIEW_DATA.fees),
    examinations: loaded<ExaminationSummaryViewModel>(
      STUDENT_DASHBOARD_PREVIEW_DATA.examination,
    ),
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
}
