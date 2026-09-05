/**
 * Canonical illustration catalogue for the admin application.
 *
 * Feature pages should reference a semantic key from this registry instead of
 * embedding an asset path. This keeps empty, loading, finance and operational
 * states visually consistent across the platform.
 */
export const ADMIN_ILLUSTRATIONS = {
  applicationForm: '/assets/images/admin-illustrations/application-form.webp',
  taskSchedule: '/assets/images/admin-illustrations/task-schedule.webp',
  analyticsSearch: '/assets/images/admin-illustrations/analytics-search.webp',
  activityHistory: '/assets/images/admin-illustrations/activity-history.webp',
  roomUnavailable: '/assets/images/admin-illustrations/room-unavailable.webp',
  documentUpload: '/assets/images/admin-illustrations/document-upload.webp',
  dataConfiguration: '/assets/images/admin-illustrations/data-configuration.webp',
  feeConfiguration: '/assets/images/admin-illustrations/fee-configuration.webp',
  feeWallet: '/assets/images/admin-illustrations/fee-wallet.webp',
  campusUnavailable: '/assets/images/admin-illustrations/campus-unavailable.webp',
  noResults: '/assets/images/admin-illustrations/no-results.webp',
  pendingReview: '/assets/images/admin-illustrations/pending-review.webp',
  scholarshipEmpty: '/assets/images/admin-illustrations/scholarship-empty.webp',
  addStudent: '/assets/images/admin-illustrations/add-student.webp',
  discountTicket: '/assets/images/admin-illustrations/discount-ticket.webp',
} as const;

export type AdminIllustrationKind = keyof typeof ADMIN_ILLUSTRATIONS;

export function adminIllustrationPath(kind: AdminIllustrationKind): string {
  return ADMIN_ILLUSTRATIONS[kind];
}
