import express from 'express';
import argon2 from 'argon2';
import { SignJWT } from 'jose';
import { z } from 'zod';
import { config } from '../config.js';
import { db, serialize } from '../db.js';
import { asyncHandler } from '../lib/async-handler.js';
import { requireAdmin } from '../middleware/auth.js';

export const authRouter = express.Router();
const loginSchema = z.object({
  email: z.email().transform((v) => v.toLowerCase()),
  password: z.string().min(1),
});

authRouter.post(
  '/login',
  asyncHandler(async (request, response) => {
    const parsed = loginSchema.safeParse(request.body);
    if (!parsed.success)
      return response.status(400).json({ message: 'Enter a valid email and password.' });
    const admin = await db()
      .collection('admins')
      .findOne({ email: parsed.data.email, isActive: true });
    if (!admin || !(await argon2.verify(admin.passwordHash, parsed.data.password))) {
      return response.status(401).json({ message: 'The email or password is incorrect.' });
    }
    const token = await new SignJWT({ role: admin.role, email: admin.email })
      .setProtectedHeader({ alg: 'HS256' })
      .setSubject(admin._id.toString())
      .setIssuer('taskly-erp')
      .setIssuedAt()
      .setExpirationTime(config.jwtTtl)
      .sign(new TextEncoder().encode(config.jwtSecret));
    await db()
      .collection('admins')
      .updateOne({ _id: admin._id }, { $set: { lastLoginAt: new Date() } });
    response.json({ token, admin: publicAdmin(admin) });
  }),
);

authRouter.get('/me', requireAdmin, (request, response) =>
  response.json({ admin: publicAdmin(request.admin) }),
);

function publicAdmin(admin) {
  const value = serialize(admin);
  return { id: value._id, email: value.email, name: value.name, role: value.role };
}
