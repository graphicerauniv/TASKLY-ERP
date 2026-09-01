import { Admission, FormField } from '../../../core/models';

export function admissionReference(item: Admission): string {
  return item.applicationNumber || item.studentId || `APP-${item._id.slice(-8).toUpperCase()}`;
}

export function admissionStatusLabel(item: Admission): string {
  if (item.status === 'draft') return 'Draft';
  if (item.status === 'pending_approval' || item.status === 'submitted') return 'Awaiting review';
  return item.isActive === false ? 'Approved' : 'Active';
}

export function admissionLastActivity(item: Admission): string {
  return item.approvedAt || item.submittedAt || item.createdAt;
}

export function admissionDateLabel(value?: string): string {
  if (!value) return 'Not available';
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return 'Not available';
  return new Intl.DateTimeFormat('en-IN', {
    dateStyle: 'medium',
    timeStyle: 'short',
  }).format(date);
}

export function admissionInitials(item: Admission): string {
  const source = item.studentName || item.studentId || 'Application';
  return source
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0])
    .join('')
    .toUpperCase();
}

export function admissionDisplayValue(
  value: unknown,
  masterLabels: Record<string, string>,
): string {
  if (value === null || value === undefined || value === '') return 'Not provided';
  if (Array.isArray(value)) {
    if (!value.length) return 'Not provided';
    return value.map((entry) => admissionDisplayValue(entry, masterLabels)).join(', ');
  }
  if (typeof value === 'object') {
    const file = value as { name?: string; url?: string };
    return file.name || file.url || 'Uploaded file';
  }
  if (typeof value === 'boolean') return value ? 'Yes' : 'No';
  return masterLabels[String(value)] || String(value);
}

export function admissionFieldValue(
  field: FormField,
  responses: Record<string, unknown>,
  masterLabels: Record<string, string>,
): string {
  return admissionDisplayValue(responses[field.id], masterLabels);
}

export function admissionCaptureStats(item: Admission): { answered: number; total: number } {
  const fields = (item.formSnapshot?.sections || []).flatMap((section) =>
    section.subsections.flatMap((subsection) =>
      subsection.fields.filter((field) => field.isActive),
    ),
  );
  const answered = fields.filter((field) => hasAdmissionValue(item.responses[field.id])).length;
  return { answered, total: fields.length };
}

function hasAdmissionValue(value: unknown): boolean {
  if (value === null || value === undefined || value === '') return false;
  if (Array.isArray(value)) return value.length > 0;
  return true;
}
