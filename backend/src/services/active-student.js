export async function syncActiveStudent(database, admission) {
  if (!admission || admission.status !== 'approved' || admission.isActive !== true) return null;
  const now = new Date();
  const document = {
    admissionId: admission._id,
    studentId: admission.studentId,
    studentName: admission.studentName,
    status: 'active',
    isActive: true,
    formId: admission.formId,
    formVersion: admission.formVersion,
    academicSession: admission.academicSession,
    academicSessionId: admission.academicSessionId,
    currentAcademicYear: admission.currentAcademicYear,
    currentSemester: admission.currentSemester,
    universityId: admission.universityId,
    universityName: admission.universityName,
    collegeId: admission.collegeId,
    collegeName: admission.collegeName,
    departmentId: admission.departmentId,
    departmentName: admission.departmentName,
    levelId: admission.levelId,
    levelName: admission.levelName,
    courseId: admission.courseId,
    courseName: admission.courseName,
    studentTypeId: admission.studentTypeId,
    studentTypeName: admission.studentTypeName,
    domicileId: admission.domicileId,
    domicileName: admission.domicileName,
    countryId: admission.countryId,
    countryName: admission.countryName,
    feeFrequency: admission.feeFrequency,
    responses: admission.responses || {},
    repeatableResponses: admission.repeatableResponses || {},
    approvedAt: admission.approvedAt,
    updatedAt: now,
  };
  await database.collection('students').updateOne(
    { admissionId: admission._id },
    {
      $set: document,
      $setOnInsert: { createdAt: now },
    },
    { upsert: true },
  );
  return database.collection('students').findOne({ admissionId: admission._id });
}
