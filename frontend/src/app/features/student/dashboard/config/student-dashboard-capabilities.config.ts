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
    endpoint: null,
    available: false,
    reason: 'No student-authorized timetable or schedule endpoint exists.',
  },
  attendance: {
    endpoint: null,
    available: false,
    reason: 'No student-authorized attendance endpoint exists.',
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
