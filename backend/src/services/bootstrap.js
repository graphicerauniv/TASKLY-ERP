import argon2 from 'argon2';
import { config } from '../config.js';
import { db } from '../db.js';

export const BUILTIN_MASTERS = [
  ['academic', 'Academic', null],
  ['university', 'University', null],
  ['college', 'College', 'university'],
  ['department', 'Department', 'college'],
  ['level', 'Level', 'department'],
  ['course', 'Course', 'level'],
  ['course-specialization', 'Course Specialization', 'course'],
  ['country', 'Country', null],
  ['state', 'State', 'country'],
  ['district', 'District', 'state'],
  ['city', 'City', 'district'],
];

export async function bootstrap() {
  const now = new Date();
  await Promise.all(
    BUILTIN_MASTERS.map(([slug, name, parentTypeSlug], order) =>
      db()
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
        ),
    ),
  );
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
