import crypto from 'node:crypto';
import { ObjectId } from 'bson';

export function admissionContext(form, responses = {}) {
  const fields = allFields(form);
  const valueId = (slug) => {
    const field = fields.find((candidate) => candidate.dataSource?.masterTypeSlug === slug);
    return objectIdValue(responses[field?.id]);
  };
  return {
    sessionValueId: valueId('academic'),
    universityValueId: valueId('university'),
    collegeValueId: valueId('college'),
    departmentValueId: valueId('department'),
    levelValueId: valueId('level'),
    courseValueId: valueId('course'),
    domicileValueId: valueId('domicile'),
    studentTypeValueId: valueId('student-type'),
    countryValueId: valueId('country'),
    feeTypeValueId: valueId('fee-type'),
    studentName: studentName(fields, responses),
    currentAcademicYear: academicYear(fields, responses),
  };
}

export async function syncAdmissionIdentity(
  database,
  admission,
  responses = admission.responses || {},
  { generateStudentId = false } = {},
) {
  const context = admissionContext(admission.formSnapshot, responses);
  const values = [
    context.sessionValueId,
    context.universityValueId,
    context.collegeValueId,
    context.departmentValueId,
    context.levelValueId,
    context.courseValueId,
    context.domicileValueId,
    context.studentTypeValueId,
    context.countryValueId,
    context.feeTypeValueId,
  ].filter(Boolean);
  const masterValues = values.length
    ? await database
        .collection('masterValues')
        .find({ _id: { $in: values } })
        .project({ name: 1, typeSlug: 1, metadata: 1, parentId: 1 })
        .toArray()
    : [];
  const session = masterValues.find(
    (value) => value.typeSlug === 'academic' && value._id.equals(context.sessionValueId),
  );
  const course = masterValues.find(
    (value) => value.typeSlug === 'course' && value._id.equals(context.courseValueId),
  );
  const master = (slug, valueId) =>
    masterValues.find((value) => value.typeSlug === slug && value._id.equals(valueId));
  const college = master('college', context.collegeValueId);
  let university = master('university', context.universityValueId);
  if (!university && college?.parentId) {
    university = await database
      .collection('masterValues')
      .findOne({ _id: college.parentId, typeSlug: 'university' }, { projection: { name: 1 } });
  }
  const department = master('department', context.departmentValueId);
  const level = master('level', context.levelValueId);
  const domicile = master('domicile', context.domicileValueId);
  const studentType = master('student-type', context.studentTypeValueId);
  const country = master('country', context.countryValueId);
  const feeType = master('fee-type', context.feeTypeValueId);
  const feeFrequencyChoice = feeFrequencyForMasterValue(feeType);
  const identity = {
    studentName: context.studentName || '',
    academicSessionId: session?._id || null,
    academicSession: session?.name || '',
    universityId: university?._id || college?.parentId || null,
    universityName: university?.name || '',
    collegeId: college?._id || null,
    collegeName: college?.name || '',
    departmentId: department?._id || null,
    departmentName: department?.name || '',
    levelId: level?._id || null,
    levelName: level?.name || '',
    courseId: course?._id || null,
    courseName: course?.name || '',
    domicileId: domicile?._id || null,
    domicileName: domicile?.name || '',
    studentTypeId: studentType?._id || null,
    studentTypeName: studentType?.name || '',
    countryId: country?._id || null,
    countryName: country?.name || '',
    feeTypeId: feeType?._id || null,
    feeTypeName: feeType?.name || '',
    currentAcademicYear: Number(
      context.currentAcademicYear ||
        admission.currentAcademicYear ||
        course?.metadata?.defaultAcademicYear ||
        1,
    ),
    identityVersion: 5,
    identitySyncedAt: new Date(),
    updatedAt: new Date(),
  };
  identity.currentSemester = Number(
    admission.currentSemester || Math.max(1, identity.currentAcademicYear * 2 - 1),
  );
  identity.feeFrequencyChoice =
    feeFrequencyChoice ||
    (['year', 'semester'].includes(admission.feeFrequencyChoice)
      ? admission.feeFrequencyChoice
      : null);
  identity.feeFrequency =
    identity.feeFrequencyChoice || (admission.feeFrequency === 'semester' ? 'semester' : 'year');
  await database.collection('admissions').updateOne({ _id: admission._id }, { $set: identity });

  if (admission.studentId || !generateStudentId || !session || !course)
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

export function feeFrequencyForMasterValue(value) {
  const configured = value?.metadata?.periodType;
  if (configured === 'year' || configured === 'semester') return configured;
  if (/semester|sem/i.test(value?.name || '')) return 'semester';
  if (/year|annual/i.test(value?.name || '')) return 'year';
  return null;
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
  const candidate = Array.isArray(value) ? value[0] : value;
  return typeof candidate === 'string' && ObjectId.isValid(candidate)
    ? new ObjectId(candidate)
    : null;
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

function academicYear(fields, responses) {
  const field = fields.find((candidate) => {
    const name = String(candidate.name || '')
      .trim()
      .toLocaleLowerCase();
    return [
      'current academic year',
      'current year',
      'admission year of study',
      'year of study',
    ].includes(name);
  });
  const value = Number(
    Array.isArray(responses[field?.id]) ? responses[field?.id]?.[0] : responses[field?.id],
  );
  return Number.isInteger(value) && value >= 1 && value <= 10 ? value : null;
}
