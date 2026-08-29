import express from 'express';
import argon2 from 'argon2';
import { SignJWT } from 'jose';
import { z } from 'zod';
import { config } from '../config.js';
import { db, serialize } from '../db.js';
import { asyncHandler } from '../lib/async-handler.js';
import { requireAdmin, requireStudent } from '../middleware/auth.js';
import { refreshStudentPenalties } from '../services/fee-payments.js';
import { studentProfile } from '../services/student-profile.js';

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

authRouter.get(
  '/student/profile',
  requireStudent,
  asyncHandler(async (request, response) => {
    response.json({ profile: await studentProfile(db(), request.student) });
  }),
);

authRouter.get(
  '/student/fees',
  requireStudent,
  asyncHandler(async (request, response) => {
    const items = await refreshStudentPenalties(db(), request.student._id);
    items.sort(
      (left, right) =>
        left.kind.localeCompare(right.kind) || new Date(right.createdAt) - new Date(left.createdAt),
    );
    response.json({ items: items.map(serialize), student: publicStudent(request.student) });
  }),
);

function publicAdmin(admin) {
  const value = serialize(admin);
  return { id: value._id, email: value.email, name: value.name, role: value.role };
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
    academicSession: student.academicSession || '',
    courseName: student.courseName || '',
    currentAcademicYear: Number(student.currentAcademicYear || 1),
    currentSemester: Number(
      student.currentSemester || Number(student.currentAcademicYear || 1) * 2 - 1,
    ),
    feeFrequency: student.feeFrequency === 'semester' ? 'semester' : 'year',
  };
}
