import {
  DashboardQuickAction,
  ExaminationSummaryViewModel,
  FeeStatusViewModel,
  NoticeViewModel,
} from '../models/student-dashboard-operational.model';

/**
 * Approved dashboard-only preview content.
 * Replace each section with its student-authorized backend endpoint when that capability exists.
 * This file is never used as an HTTP service and is shared by desktop and mobile presentation.
 */
export const STUDENT_DASHBOARD_PREVIEW_DATA = Object.freeze({
  // Replace with the future student ledger summary endpoint.
  fees: {
    totalBilled: '₹1,20,000',
    totalPaid: '₹90,000',
    currentDue: '₹30,000',
    overdueAmount: null,
    dueDate: '28 Aug 2025',
    currency: 'INR',
    paymentStatus: 'Due',
  } as const satisfies FeeStatusViewModel,

  // Replace with the future student examination summary endpoint.
  examination: {
    title: 'Discrete Mathematics',
    date: '05 Sep',
    relativeLabel: 'Upcoming exam',
  } as const satisfies ExaminationSummaryViewModel,

  // Replace with the future student notices endpoint.
  notices: [
    {
      id: 'preview-notice-mid-sem',
      title: 'Mid-Sem Exam Timetable Released',
      publishedAt: '12 May 2025',
      category: 'Examinations',
      unread: true,
    },
    {
      id: 'preview-notice-workshop',
      title: 'Workshop on “AI & ML Basics” on 18th May at Seminar Hall.',
      publishedAt: '10 May 2025',
      category: 'Workshop',
      unread: false,
    },
    {
      id: 'preview-notice-internship',
      title: 'Last date to apply for Summer Internship Program is 25th May 2025.',
      publishedAt: '08 May 2025',
      category: 'Placement',
      unread: false,
    },
  ] as const satisfies readonly NoticeViewModel[],

  quickActions: [
    {
      id: 'fees',
      label: 'Pay fees',
      icon: 'wallet-cards',
      route: '/student/fees',
      available: true,
    },
    { id: 'id-card', label: 'Download ID', icon: 'badge-id', route: null, available: false },
    { id: 'certificate', label: 'Certificate', icon: 'file-check', route: null, available: false },
    { id: 'leave', label: 'Apply leave', icon: 'calendar-plus', route: null, available: false },
  ] as const satisfies readonly DashboardQuickAction[],
});
