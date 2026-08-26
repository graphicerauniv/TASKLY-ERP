export async function promoteStudentProgression(database, progressionId, promotedBy) {
  const progression = await database
    .collection('studentProgressions')
    .findOneAndUpdate(
      { _id: progressionId, status: 'pending' },
      { $set: { status: 'promoting', updatedAt: new Date() } },
      { returnDocument: 'after' },
    );
  if (!progression) {
    const error = new Error('This student promotion is no longer pending.');
    error.status = 409;
    throw error;
  }
  try {
    const admission = await database
      .collection('admissions')
      .findOne({ _id: progression.studentAdmissionId, status: 'approved', isActive: true });
    if (!admission) {
      const error = new Error('The approved active student record was not found.');
      error.status = 404;
      throw error;
    }
    const currentYear = Number(admission.currentAcademicYear || 1);
    const currentSemester = Number(admission.currentSemester || currentYear * 2 - 1);
    const fromMatches =
      currentYear === Number(progression.fromAcademicYear) &&
      (progression.mode !== 'semester' ||
        currentSemester === Number(progression.fromSemester));
    const alreadyPromoted =
      currentYear === Number(progression.toAcademicYear) &&
      (progression.mode !== 'semester' || currentSemester === Number(progression.toSemester));
    if (!fromMatches && !alreadyPromoted) {
      const error = new Error(
        'The student academic period changed after this promotion was prepared. Review the record before promoting.',
      );
      error.status = 409;
      throw error;
    }
    if (!alreadyPromoted)
      await database.collection('admissions').updateOne(
        { _id: admission._id },
        {
          $set: {
            currentAcademicYear: Number(progression.toAcademicYear),
            currentSemester:
              progression.mode === 'semester'
                ? Number(progression.toSemester)
                : Number(progression.toAcademicYear) * 2 - 1,
            updatedAt: new Date(),
          },
        },
      );
    const promotedAt = new Date();
    const updated = await database
      .collection('studentProgressions')
      .findOneAndUpdate(
        { _id: progression._id, status: 'promoting' },
        {
          $set: {
            status: 'promoted',
            promotedBy,
            promotedAt,
            updatedAt: promotedAt,
          },
        },
        { returnDocument: 'after' },
      );
    return updated || { ...progression, status: 'promoted', promotedBy, promotedAt };
  } catch (error) {
    await database
      .collection('studentProgressions')
      .updateOne(
        { _id: progression._id, status: 'promoting' },
        { $set: { status: 'pending', updatedAt: new Date() } },
      );
    throw error;
  }
}
