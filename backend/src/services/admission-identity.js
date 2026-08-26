import crypto from 'node:crypto';
import { ObjectId } from 'mongodb';

export function admissionContext(form, responses = {}) {
  const fields = allFields(form);
  const sessionField = fields.find((field) => field.dataSource?.masterTypeSlug === 'academic');
  const courseField = fields.find((field) => field.dataSource?.masterTypeSlug === 'course');
  return {
    sessionValueId: objectIdValue(responses[sessionField?.id]),
    courseValueId: objectIdValue(responses[courseField?.id]),
    studentName: studentName(fields, responses),
  };
}

export async function syncAdmissionIdentity(
  database,
  admission,
  responses = admission.responses || {},
) {
  const context = admissionContext(admission.formSnapshot, responses);
  const values = [context.sessionValueId, context.courseValueId].filter(Boolean);
  const masterValues = values.length
    ? await database
        .collection('masterValues')
        .find({ _id: { $in: values } })
        .project({ name: 1, typeSlug: 1, metadata: 1 })
        .toArray()
    : [];
  const session = masterValues.find(
    (value) => value.typeSlug === 'academic' && value._id.equals(context.sessionValueId),
  );
  const course = masterValues.find(
    (value) => value.typeSlug === 'course' && value._id.equals(context.courseValueId),
  );
  const identity = {
    studentName: context.studentName || '',
    academicSessionId: session?._id || null,
    academicSession: session?.name || '',
    courseId: course?._id || null,
    courseName: course?.name || '',
    updatedAt: new Date(),
  };
  await database.collection('admissions').updateOne({ _id: admission._id }, { $set: identity });

  if (admission.studentId || !session || !course)
    return { ...identity, studentId: admission.studentId };
  const sessionCode = sessionYearCode(session.name);
  const courseCode = normalizeCourseCode(course.metadata?.courseCode);
  if (!sessionCode || !courseCode) return identity;

  for (let attempt = 0; attempt < 30; attempt += 1) {
    const studentId = `${sessionCode}${courseCode}${crypto.randomInt(0, 10_000).toString().padStart(4, '0')}`;
    try {
      const result = await database
        .collection('admissions')
        .updateOne(
          { _id: admission._id, studentId: { $exists: false } },
          { $set: { studentId, studentIdGeneratedAt: new Date() } },
        );
      if (result.modifiedCount) return { ...identity, studentId };
      const current = await database
        .collection('admissions')
        .findOne({ _id: admission._id }, { projection: { studentId: 1 } });
      return { ...identity, studentId: current?.studentId };
    } catch (error) {
      if (error?.code !== 11000) throw error;
    }
  }
  throw Object.assign(new Error('Could not generate a unique Student ID. Please save again.'), {
    status: 503,
  });
}

export function sessionYearCode(value) {
  const match = String(value || '').match(/(?:19|20)(\d{2})/);
  return match?.[1] || '';
}

export function normalizeCourseCode(value) {
  return String(value || '')
    .trim()
    .toUpperCase()
    .replace(/[^A-Z0-9]/g, '');
}

function allFields(form) {
  return (form?.sections || []).flatMap((section) =>
    (section.subsections || []).flatMap((subsection) => subsection.fields || []),
  );
}

function objectIdValue(value) {
  return typeof value === 'string' && ObjectId.isValid(value) ? new ObjectId(value) : null;
}

function studentName(fields, responses) {
  const candidates = fields.filter((field) => {
    const name = String(field.name || '')
      .trim()
      .toLocaleLowerCase();
    const belongsToStudent = ['student', 'applicant', 'candidate'].some((word) =>
      name.includes(word),
    );
    const belongsToSomeoneElse = ['father', 'mother', 'guardian', 'parent', 'spouse'].some((word) =>
      name.includes(word),
    );
    return (
      ['student name', 'applicant name', 'candidate name', 'full name', 'name of student'].includes(
        name,
      ) ||
      (!belongsToSomeoneElse && belongsToStudent && name.includes('name')) ||
      (!belongsToSomeoneElse &&
        ['first name', 'middle name', 'last name', 'surname'].some((part) => name.includes(part)))
    );
  });
  const exact = candidates.find((field) => {
    const name = String(field.name || '')
      .trim()
      .toLocaleLowerCase();
    return (
      ['student name', 'applicant name', 'candidate name', 'full name', 'name of student'].includes(
        name,
      ) ||
      (name.includes('full name') &&
        ['student', 'applicant', 'candidate'].some((word) => name.includes(word)))
    );
  });
  if (exact && primitiveText(responses[exact.id])) return primitiveText(responses[exact.id]);
  return candidates
    .map((field) => primitiveText(responses[field.id]))
    .filter(Boolean)
    .join(' ')
    .replace(/\s+/g, ' ')
    .trim();
}

function primitiveText(value) {
  return ['string', 'number'].includes(typeof value) ? String(value).trim() : '';
}
