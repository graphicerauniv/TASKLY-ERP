const EMPTY = '';

export async function studentProfile(database, admission) {
  const fields = fieldEntries(admission.formSnapshot);
  const responses = admission.responses || {};
  const repeatableResponses = admission.repeatableResponses || {};
  const masterLabels = await resolveMasterLabels(database, fields, responses, repeatableResponses);
  const value = (...aliases) => displayValue(responseFor(fields, responses, aliases), masterLabels);
  const raw = (...aliases) => responseFor(fields, responses, aliases);

  const currentSemester = Number(
    admission.currentSemester || Math.max(1, Number(admission.currentAcademicYear || 1) * 2 - 1),
  );

  return {
    identity: {
      id: String(admission._id),
      studentId: admission.studentId || EMPTY,
      name: admission.studentName || value('student name', 'applicant name', 'full name') || 'Student',
      status: admission.isActive === false ? 'inactive' : 'active',
      photoUrl: fileUrl(raw('student photo', 'applicant photo', 'passport photo', 'profile photo')),
      verified: admission.status === 'approved',
      readOnly: true,
    },
    personal: {
      dateOfBirth: value('date of birth', 'dob', 'birth date'),
      gender: value('gender', 'sex'),
      fatherName: value("father's name", 'father name'),
      motherName: value("mother's name", 'mother name'),
      guardianName: value('guardian name', "guardian's name"),
      bloodGroup: value('blood group'),
      address: value('permanent address', 'residential address', 'address'),
    },
    academic: {
      college: admission.collegeName || value('college', 'college name'),
      department: admission.departmentName || value('department', 'department name'),
      course: admission.courseName || value('course', 'course name', 'program', 'programme'),
      branch:
        value('branch', 'stream', 'discipline') ||
        admission.departmentName ||
        admission.courseName ||
        EMPTY,
      academicSession: admission.academicSession || value('academic session', 'session'),
      academicYear: Number(admission.currentAcademicYear || 1),
      semester: currentSemester,
      section: value('section', 'class section', 'current section'),
      specialization: value('specialization', 'specialisation', 'major'),
      campus: value('campus', 'campus name') || admission.collegeName || EMPTY,
    },
    contact: {
      officialEmail: value('official email', 'university email', 'institutional email'),
      personalEmail: value('personal email', 'email address', 'email'),
      mobile: value('mobile number', 'phone number', 'mobile', 'phone'),
      alternateMobile: value('alternate mobile', 'alternate phone'),
      emergencyContact: value('emergency contact', 'emergency mobile'),
    },
    educationRecords: educationRecords(fields, repeatableResponses, masterLabels),
    documents: documents(fields, responses),
    digitalId: {
      issued: Boolean(admission.studentId),
      verified: admission.status === 'approved',
      issuedAt: admission.approvedAt || admission.studentIdGeneratedAt || null,
    },
    security: {
      accountActive: admission.isActive !== false,
      passwordUpdatedAt: admission.passwordUpdatedAt || null,
      lastLoginAt: admission.lastLoginAt || null,
      supportStatus: 'available',
    },
    syncedAt: admission.updatedAt || admission.identitySyncedAt || new Date(),
  };
}

function fieldEntries(form) {
  return (form?.sections || []).flatMap((section) =>
    (section.subsections || []).flatMap((subsection) =>
      (subsection.fields || []).map((field) => ({
        ...field,
        sectionName: section.name || '',
        subsectionId: subsection.id || '',
        subsectionName: subsection.name || '',
        normalizedName: normalize(field.name),
      })),
    ),
  );
}

function responseFor(fields, responses, aliases) {
  const normalizedAliases = aliases.map(normalize);
  const exact = fields.find((field) => normalizedAliases.includes(field.normalizedName));
  if (exact && hasValue(responses[exact.id])) return responses[exact.id];
  const partial = fields.find(
    (field) =>
      normalizedAliases.some(
        (alias) => field.normalizedName.includes(alias) || alias.includes(field.normalizedName),
      ) && hasValue(responses[field.id]),
  );
  return partial ? responses[partial.id] : null;
}

async function resolveMasterLabels(database, fields, responses, repeatableResponses) {
  const ids = new Set();
  const collect = (value) => {
    if (Array.isArray(value)) return value.forEach(collect);
    if (value && typeof value === 'object') return Object.values(value).forEach(collect);
    if (typeof value === 'string' && /^[a-f\d]{24}$/i.test(value)) ids.add(value);
  };
  fields.filter((field) => field.dataSource?.kind === 'master').forEach((field) => collect(responses[field.id]));
  Object.values(repeatableResponses).forEach(collect);
  if (!ids.size) return new Map();
  const { ObjectId } = await import('bson');
  const items = await database
    .collection('masterValues')
    .find({ _id: { $in: [...ids].map((id) => new ObjectId(id)) } })
    .project({ name: 1, label: 1 })
    .toArray();
  return new Map(items.map((item) => [String(item._id), item.label || item.name || '']));
}

function educationRecords(fields, repeatableResponses, masterLabels) {
  return Object.entries(repeatableResponses)
    .flatMap(([subsectionId, rows]) => {
      const related = fields.filter((field) => field.subsectionId === subsectionId);
      const subsectionName = related[0]?.subsectionName || '';
      if (!/(education|qualification|academic|school|exam)/i.test(subsectionName)) return [];
      return (Array.isArray(rows) ? rows : []).map((row, index) => ({
        id: `${subsectionId}-${index}`,
        title:
          displayValue(findRowValue(related, row, ['qualification', 'exam', 'degree', 'course']), masterLabels) ||
          `${subsectionName || 'Education'} ${index + 1}`,
        fields: related
          .map((field) => ({ label: field.name, value: displayValue(row?.[field.id], masterLabels) }))
          .filter((item) => item.value),
      }));
    })
    .filter((record) => record.fields.length);
}

function findRowValue(fields, row, aliases) {
  const normalizedAliases = aliases.map(normalize);
  const field = fields.find((candidate) =>
    normalizedAliases.some((alias) => candidate.normalizedName.includes(alias)),
  );
  return field ? row?.[field.id] : null;
}

function documents(fields, responses) {
  return fields
    .filter((field) => field.type === 'file' || field.type === 'upload')
    .flatMap((field) => normalizeFiles(responses[field.id]).map((file, index) => ({
      id: `${field.id}-${index}`,
      name: file.name || field.name,
      category: field.name,
      url: file.url || '',
      verified: true,
    })))
    .filter((file) => file.url);
}

function normalizeFiles(value) {
  if (!value) return [];
  if (Array.isArray(value)) return value.flatMap(normalizeFiles);
  if (typeof value === 'string') return [{ name: value.split('/').pop(), url: value }];
  if (typeof value === 'object' && (value.url || value.key))
    return [{ name: value.name || value.fileName, url: value.url || `/uploads/${value.key}` }];
  return [];
}

function fileUrl(value) {
  return normalizeFiles(value)[0]?.url || '';
}

function displayValue(value, masterLabels) {
  if (Array.isArray(value)) return value.map((item) => displayValue(item, masterLabels)).filter(Boolean).join(', ');
  if (value === null || value === undefined || value === '') return '';
  if (typeof value === 'object') return value.label || value.name || value.value || '';
  const text = String(value).trim();
  return masterLabels.get(text) || text;
}

function hasValue(value) {
  return value !== null && value !== undefined && value !== '' && (!Array.isArray(value) || value.length > 0);
}

function normalize(value) {
  return String(value || '')
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, ' ')
    .replace(/\s+/g, ' ');
}
