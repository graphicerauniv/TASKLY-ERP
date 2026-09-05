import argon2 from 'argon2';
import { config } from '../config.js';
import { db } from '../db.js';
import { syncAdmissionIdentity } from './admission-identity.js';

export const BUILTIN_MASTERS = [
  ['academic', 'Academic', null],
  ['university', 'University', null],
  ['college', 'College', 'university'],
  ['department', 'Department', 'college'],
  ['level', 'Level', 'department'],
  ['course', 'Course', 'level'],
  ['domicile', 'Domicile', null],
  ['student-type', 'Student Type', null],
  ['fee-type', 'Fee Type', null],
  ['country', 'Country', null],
  ['state', 'State', 'country'],
  ['district', 'District', 'state'],
  ['city', 'City', 'district'],
];

const BOOTSTRAP_MIGRATION_VERSION = 'bootstrap-data-2026-08-27-v2';
const UNIVERSITY_IDENTITY_MIGRATION_VERSION = 'admission-university-identity-2026-09-05-v1';

export async function bootstrap() {
  const now = new Date();
  if (!(await db().hasRuntimeMigration(BOOTSTRAP_MIGRATION_VERSION))) {
    await db()
      .collection('admissions')
      .updateMany({ applicationNumber: { $exists: true } }, { $unset: { applicationNumber: '' } });
    await db()
      .collection('admissions')
      .updateMany(
        { status: 'submitted' },
        { $set: { status: 'pending_approval', updatedAt: now } },
      );
    await db()
      .collection('admissions')
      .updateMany(
        { status: 'draft', hasSavedData: { $exists: false } },
        { $set: { hasSavedData: true } },
      );
    await db()
      .collection('admissions')
      .updateMany(
        { status: 'draft', studentId: { $exists: true } },
        { $unset: { studentId: '', studentIdGeneratedAt: '' } },
      );
    await migrateAdmissionIdentities();
    for (const [order, [slug, name, parentTypeSlug]] of BUILTIN_MASTERS.entries())
      await db()
        .collection('masterTypes')
        .updateOne(
          { slug },
          {
            $setOnInsert: {
              name,
              slug,
              parentTypeSlug,
              isCustom: false,
              isActive: true,
              order,
              createdAt: now,
              updatedAt: now,
            },
          },
          { upsert: true },
        );
    await ensureDefaultFeeTypes(now);
    await migrateSpecializationsToCourses(now);
    await migrateFormSpecializationSources(now);
    await db().markRuntimeMigration(BOOTSTRAP_MIGRATION_VERSION);
  }
  if (!(await db().hasRuntimeMigration(UNIVERSITY_IDENTITY_MIGRATION_VERSION))) {
    await migrateAdmissionUniversities();
    await db().markRuntimeMigration(UNIVERSITY_IDENTITY_MIGRATION_VERSION);
  }
  const { email, password, name } = config.bootstrapAdmin;
  if (email && password && !(await db().collection('admins').findOne({ email }))) {
    await db()
      .collection('admins')
      .insertOne({
        email,
        name,
        passwordHash: await argon2.hash(password),
        role: 'super-admin',
        isActive: true,
        createdAt: now,
        updatedAt: now,
      });
    console.log(`Created bootstrap Super Admin: ${email}`);
  }
}

async function migrateAdmissionIdentities() {
  const admissions = await db()
    .collection('admissions')
    .find({ identityVersion: { $ne: 5 } })
    .toArray();
  for (const admission of admissions)
    await syncAdmissionIdentity(db(), admission, admission.responses || {}, {
      generateStudentId: admission.status !== 'draft',
    });
}

async function migrateAdmissionUniversities() {
  const admissions = await db()
    .collection('admissions')
    .find({ universityName: { $exists: false } })
    .toArray();
  for (const admission of admissions)
    await syncAdmissionIdentity(db(), admission, admission.responses || {}, {
      generateStudentId: false,
    });
}

async function ensureDefaultFeeTypes(now) {
  const defaults = [
    { name: 'Yearly', order: 1, metadata: { periodType: 'year' } },
    { name: 'Semester', order: 2, metadata: { periodType: 'semester' } },
  ];
  for (const value of defaults)
    await db()
      .collection('masterValues')
      .updateOne(
        { typeSlug: 'fee-type', name: value.name, parentId: null },
        {
          $setOnInsert: {
            ...value,
            typeSlug: 'fee-type',
            parentId: null,
            isActive: true,
            createdAt: now,
            updatedAt: now,
          },
        },
        { upsert: true },
      );
}

async function migrateSpecializationsToCourses(now) {
  const legacyType = await db()
    .collection('masterTypes')
    .findOne({ slug: 'course-specialization' });
  if (!legacyType) return;
  const specializations = await db()
    .collection('masterValues')
    .find({ typeSlug: 'course-specialization' })
    .toArray();
  for (const specialization of specializations) {
    const parentCourse = specialization.parentId
      ? await db()
          .collection('masterValues')
          .findOne({ _id: specialization.parentId, typeSlug: 'course' })
      : null;
    const migratedName =
      parentCourse &&
      !specialization.name.toLocaleLowerCase().includes(parentCourse.name.toLocaleLowerCase())
        ? `${parentCourse.name} - ${specialization.name}`
        : specialization.name;
    await db()
      .collection('masterValues')
      .updateOne(
        { typeSlug: 'course', name: migratedName, parentId: parentCourse?.parentId || null },
        {
          $setOnInsert: {
            typeSlug: 'course',
            name: migratedName,
            parentId: parentCourse?.parentId || null,
            order: specialization.order || 0,
            isActive: specialization.isActive ?? true,
            metadata: {
              ...(specialization.metadata || {}),
              migratedFromSpecialization: String(specialization._id),
              baseCourseId: parentCourse ? String(parentCourse._id) : null,
            },
            createdAt: now,
            updatedAt: now,
          },
        },
        { upsert: true },
      );
  }
  await db()
    .collection('masterTypes')
    .updateOne(
      { _id: legacyType._id },
      { $set: { isActive: false, legacy: true, updatedAt: now } },
    );
}

async function migrateFormSpecializationSources(now) {
  const forms = await db()
    .collection('forms')
    .find({
      'sections.subsections.fields.dataSource.masterTypeSlug': 'course-specialization',
    })
    .toArray();
  for (const form of forms) {
    let changed = false;
    for (const section of form.sections || []) {
      for (const subsection of section.subsections || []) {
        for (const field of subsection.fields || []) {
          if (field.dataSource?.masterTypeSlug === 'course-specialization') {
            field.dataSource.masterTypeSlug = 'course';
            changed = true;
          }
        }
      }
    }
    if (changed)
      await db()
        .collection('forms')
        .updateOne({ _id: form._id }, { $set: { sections: form.sections, updatedAt: now } });
  }
}
