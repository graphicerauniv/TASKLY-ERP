import argon2 from 'argon2';
import { connectDatabase, closeDatabase, db } from '../db.js';

const email = (process.argv[2] || process.env.SUPER_ADMIN_EMAIL || '').trim().toLowerCase();
const password = process.argv[3] || process.env.SUPER_ADMIN_PASSWORD || '';
const name = process.argv[4] || process.env.SUPER_ADMIN_NAME || 'Super Admin';
if (!email || password.length < 8) {
  console.error('Usage: npm run create:admin -- admin@example.com "strong-password" "Admin Name"');
  process.exit(1);
}
await connectDatabase();
await db()
  .collection('admins')
  .updateOne(
    { email },
    {
      $set: {
        name,
        passwordHash: await argon2.hash(password),
        role: 'super-admin',
        isActive: true,
        updatedAt: new Date(),
      },
      $setOnInsert: { createdAt: new Date() },
    },
    { upsert: true },
  );
console.log(`Super Admin saved in MongoDB: ${email}`);
await closeDatabase();
