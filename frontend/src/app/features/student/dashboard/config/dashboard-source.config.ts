import { DashboardWidgetSourceConfig } from '../models/student-dashboard-operational.model';

/**
 * Dashboard source policy. Backend mode is used only for capabilities that exist today.
 * Approved reference content uses preview mode until student-authorized endpoints replace it.
 * Hidden sections reserve no dashboard space.
 */
export const STUDENT_DASHBOARD_SOURCE_CONFIG = Object.freeze({
  profile: 'backend',
  notifications: 'hidden',
  timetable: 'preview',
  attendance: 'preview',
  fees: 'preview',
  examinations: 'preview',
  hostel: 'hidden',
  notices: 'preview',
  documents: 'hidden',
  academicProgress: 'hidden',
} as const satisfies DashboardWidgetSourceConfig);
