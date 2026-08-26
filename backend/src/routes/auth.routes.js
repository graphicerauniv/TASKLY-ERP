import express from 'express';
import argon2 from 'argon2';
import { jwtVerify, SignJWT } from 'jose';
import { z } from 'zod';
import { config } from '../config.js';
import { db, id, serialize } from '../db.js';
import { asyncHandler } from '../lib/async-handler.js';
import { requireAdmin } from '../middleware/auth.js';

export const authRouter = express.Router();
const loginSchema = z.object({
  email: z.email().transform((v) => v.toLowerCase()),
  password: z.string().min(1),
});
const studentLoginSchema = z.object({
  studentId: z
    .string()
    .trim()
    .min(1)
    .transform((value) => value.toUpperCase()),
  password: z.string().min(1),
});
const strongPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[^A-Za-z0-9]).{8,}$/;
const studentPasswordSchema = z.object({
  password: z
    .string()
    .regex(
      strongPassword,
      'Password must contain at least 8 characters, one uppercase letter, one lowercase letter, and one symbol.',
    ),
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

authRouter.post(
  '/student/login',
  asyncHandler(async (request, response) => {
    const parsed = studentLoginSchema.safeParse(request.body);
    if (!parsed.success)
      return response.status(400).json({ message: 'Enter a valid Student ID and password.' });
    const student = await db().collection('admissions').findOne({
      studentId: parsed.data.studentId,
      status: 'approved',
      isActive: true,
    });
    if (
      !student?.passwordHash ||
      !(await argon2.verify(student.passwordHash, parsed.data.password))
    )
      return response.status(401).json({ message: 'The Student ID or password is incorrect.' });
    const token = await studentToken(student);
    await db()
      .collection('admissions')
      .updateOne({ _id: student._id }, { $set: { lastLoginAt: new Date() } });
    response.json({ token, student: publicStudent(student) });
  }),
);

authRouter.post(
  '/student/change-password',
  requireStudent,
  asyncHandler(async (request, response) => {
    const data = studentPasswordSchema.parse(request.body);
    if (
      request.student.passwordHash &&
      (await argon2.verify(request.student.passwordHash, data.password))
    )
      return response
        .status(422)
        .json({ message: 'Your new password must be different from the temporary password.' });
    await db()
      .collection('admissions')
      .updateOne(
        { _id: request.student._id },
        {
          $set: {
            passwordHash: await argon2.hash(data.password),
            mustChangePassword: false,
            passwordUpdatedAt: new Date(),
            updatedAt: new Date(),
          },
        },
      );
    const student = { ...request.student, mustChangePassword: false };
    response.json({ token: await studentToken(student), student: publicStudent(student) });
  }),
);

function publicAdmin(admin) {
  const value = serialize(admin);
  return { id: value._id, email: value.email, name: value.name, role: value.role };
}

async function requireStudent(request, response, next) {
  try {
    const token = request.headers.authorization?.replace(/^Bearer\s+/i, '');
    if (!token) return response.status(401).json({ message: 'Student authentication required.' });
    const { payload } = await jwtVerify(token, new TextEncoder().encode(config.jwtSecret), {
      issuer: 'taskly-erp',
    });
    if (payload.role !== 'student') throw new Error('Invalid role');
    const student = await db()
      .collection('admissions')
      .findOne({
        _id: id(payload.sub),
        status: 'approved',
        isActive: true,
      });
    if (!student) return response.status(401).json({ message: 'Student account is unavailable.' });
    request.student = student;
    next();
  } catch {
    response.status(401).json({ message: 'Your student session is invalid or expired.' });
  }
}

function studentToken(student) {
  return new SignJWT({ role: 'student', studentId: student.studentId })
    .setProtectedHeader({ alg: 'HS256' })
    .setSubject(student._id.toString())
    .setIssuer('taskly-erp')
    .setIssuedAt()
    .setExpirationTime(config.jwtTtl)
    .sign(new TextEncoder().encode(config.jwtSecret));
}

function publicStudent(student) {
  return {
    id: String(student._id),
    studentId: student.studentId,
    name: student.studentName || 'Student',
    mustChangePassword: student.mustChangePassword !== false,
  };
}
