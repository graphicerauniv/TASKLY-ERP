export function admissionReference(item) {
    return item.applicationNumber || item.studentId || `APP-${item._id.slice(-8).toUpperCase()}`;
}
export function admissionStatusLabel(item) {
    if (item.status === 'draft')
        return 'Draft';
    if (item.status === 'pending_approval' || item.status === 'submitted')
        return 'Awaiting review';
    return item.isActive === false ? 'Approved' : 'Active';
}
export function admissionLastActivity(item) {
    return item.approvedAt || item.submittedAt || item.createdAt;
}
export function admissionDateLabel(value) {
    if (!value)
        return 'Not available';
    const date = new Date(value);
    if (Number.isNaN(date.getTime()))
        return 'Not available';
    return new Intl.DateTimeFormat('en-IN', {
        dateStyle: 'medium',
        timeStyle: 'short',
    }).format(date);
}
export function admissionInitials(item) {
    const source = item.studentName || item.studentId || 'Application';
    return source
        .split(/\s+/)
        .filter(Boolean)
        .slice(0, 2)
        .map((part) => part[0])
        .join('')
        .toUpperCase();
}
export function admissionDisplayValue(value, masterLabels) {
    if (value === null || value === undefined || value === '')
        return 'Not provided';
    if (Array.isArray(value)) {
        if (!value.length)
            return 'Not provided';
        return value.map((entry) => admissionDisplayValue(entry, masterLabels)).join(', ');
    }
    if (typeof value === 'object') {
        const file = value;
        return file.name || file.url || 'Uploaded file';
    }
    if (typeof value === 'boolean')
        return value ? 'Yes' : 'No';
    return masterLabels[String(value)] || String(value);
}
export function admissionFieldValue(field, responses, masterLabels) {
    return admissionDisplayValue(responses[field.id], masterLabels);
}
export function admissionCaptureStats(item) {
    const fields = (item.formSnapshot?.sections || []).flatMap((section) => section.subsections.flatMap((subsection) => subsection.fields.filter((field) => field.isActive)));
    const answered = fields.filter((field) => hasAdmissionValue(item.responses[field.id])).length;
    return { answered, total: fields.length };
}
function hasAdmissionValue(value) {
    if (value === null || value === undefined || value === '')
        return false;
    if (Array.isArray(value))
        return value.length > 0;
    return true;
}
