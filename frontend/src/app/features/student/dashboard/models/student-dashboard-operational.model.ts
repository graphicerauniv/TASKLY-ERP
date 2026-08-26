export type DashboardWidgetStatus =
  'idle' | 'loading' | 'refreshing' | 'loaded' | 'empty' | 'error' | 'unavailable';

export interface DashboardWidgetState<T> {
  readonly status: DashboardWidgetStatus;
  readonly data: T | null;
  readonly errorMessage: string | null;
  readonly lastUpdatedAt?: string | null;
}

export interface StudentIdentityViewModel {
  readonly id: string;
  readonly studentId: string;
  readonly displayName: string;
  readonly firstName: string;
  readonly initials: string;
}

export interface StudentScheduleItem {
  readonly id: string;
  readonly title: string;
  readonly startTime: string;
  readonly endTime: string;
  readonly location: string | null;
  readonly faculty: string | null;
  readonly type: 'class' | 'lab' | 'exam' | 'meeting' | 'event' | 'unknown';
  readonly status: 'upcoming' | 'ongoing' | 'completed' | 'cancelled';
}

export interface AttendanceDashboardViewModel {
  readonly percentage: number | null;
  readonly attendedClasses: number | null;
  readonly totalClasses: number | null;
  readonly absentClasses: number | null;
  readonly minimumRequired: number | null;
  readonly trendPercentage: number | null;
  readonly status: 'safe' | 'warning' | 'critical' | 'unknown';
}

export interface AcademicProgressViewModel {
  readonly semester: string | null;
  readonly sgpa: string | null;
  readonly cgpa: string | null;
  readonly completedCredits: number | null;
}

export interface FeeStatusViewModel {
  readonly totalBilled: string | null;
  readonly totalPaid: string | null;
  readonly currentDue: string | null;
  readonly overdueAmount: string | null;
  readonly dueDate: string | null;
  readonly currency: string | null;
  readonly paymentStatus: string | null;
}

export interface HostelSummaryViewModel {
  readonly hostelName: string | null;
  readonly block: string | null;
  readonly floor: string | null;
  readonly room: string | null;
  readonly bed: string | null;
  readonly allocationStatus: string | null;
}

export interface NoticeViewModel {
  readonly id: string;
  readonly title: string;
  readonly publishedAt: string;
  readonly category: string | null;
  readonly unread: boolean | null;
}

export interface StudentDocumentViewModel {
  readonly id: string;
  readonly fileName: string;
  readonly type: string | null;
  readonly size: number | null;
  readonly createdAt: string;
  readonly downloadUrl: string | null;
}

export interface StudentNotificationViewModel {
  readonly id: string;
  readonly title: string;
  readonly createdAt: string;
  readonly read: boolean | null;
  readonly category: string | null;
}

export interface DashboardQuickAction {
  readonly id: 'fees' | 'id-card' | 'certificate' | 'leave';
  readonly label: string;
  readonly icon: 'wallet-cards' | 'badge-id' | 'file-check' | 'calendar-plus';
  readonly route: string | null;
  readonly available: boolean;
}

export interface StudentDashboardOperationalState {
  readonly identity: DashboardWidgetState<StudentIdentityViewModel>;
  readonly schedule: DashboardWidgetState<readonly StudentScheduleItem[]>;
  readonly attendance: DashboardWidgetState<AttendanceDashboardViewModel>;
  readonly academics: DashboardWidgetState<AcademicProgressViewModel>;
  readonly fees: DashboardWidgetState<FeeStatusViewModel>;
  readonly hostel: DashboardWidgetState<HostelSummaryViewModel>;
  readonly notices: DashboardWidgetState<readonly NoticeViewModel[]>;
  readonly documents: DashboardWidgetState<readonly StudentDocumentViewModel[]>;
  readonly notifications: DashboardWidgetState<readonly StudentNotificationViewModel[]>;
  readonly quickActions: readonly DashboardQuickAction[];
}
