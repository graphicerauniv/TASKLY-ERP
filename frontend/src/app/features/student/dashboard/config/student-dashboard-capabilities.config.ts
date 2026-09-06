export interface StudentDashboardCapability {
  readonly endpoint: string | null;
  readonly available: boolean;
  readonly reason: string;
}

export const STUDENT_DASHBOARD_CAPABILITIES = Object.freeze({
  identity: {
    endpoint: '/api/v1/auth/student/login',
    available: true,
    reason: 'Authenticated student identity is returned by the existing login response.',
  },
  schedule: {
    endpoint: '/api/v1/student-academics/timetable',
    available: true,
    reason: 'The student-authorized timetable endpoint provides the current weekly schedule.',
  },
  attendance: {
    endpoint: '/api/v1/student-attendance',
    available: true,
    reason: 'The student-authorized attendance endpoint provides subject and overall totals.',
  },
  academics: {
    endpoint: null,
    available: false,
    reason: 'No student-authorized academic progress endpoint exists.',
  },
  fees: {
    endpoint: null,
    available: false,
    reason: 'Existing fee endpoints are admin-only and are not a student ledger API.',
  },
  hostel: {
    endpoint: null,
    available: false,
    reason: 'Existing hostel allocation endpoints are admin-only.',
  },
  notices: {
    endpoint: null,
    available: false,
    reason: 'No student notice endpoint exists.',
  },
  documents: {
    endpoint: null,
    available: false,
    reason: 'No student-authorized document listing or download endpoint exists.',
  },
  notifications: {
    endpoint: null,
    available: false,
    reason: 'No student notification endpoint or unread-count capability exists.',
  },
} as const satisfies Record<string, StudentDashboardCapability>);
