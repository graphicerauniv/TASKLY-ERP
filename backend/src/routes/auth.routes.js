import express from 'express';
import argon2 from 'argon2';
import { SignJWT, jwtVerify } from 'jose';
import { z } from 'zod';
import { config } from '../config.js';
import { db, id, serialize } from '../db.js';
import { asyncHandler } from '../lib/async-handler.js';
import { requireAdmin, requireFaculty, requireStudent } from '../middleware/auth.js';
import { refreshStudentPenalties, studentCreditBalance } from '../services/fee-payments.js';
import { ensureStudentScheduledFees, isStudentVisibleLedger } from '../services/fee-visibility.js';
import { studentProfile } from '../services/student-profile.js';
import { previewStudentFeeModes } from '../services/student-fee-ledger.js';

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
const facultyLoginSchema = z.object({
  employeeId: z
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
const refreshSchema = z.object({ refreshToken: z.string().min(1) });

function adminAccessToken(admin) {
  return new SignJWT({ role: admin.role, email: admin.email, tokenUse: 'access' })
    .setProtectedHeader({ alg: 'HS256' })
    .setSubject(admin._id.toString())
    .setIssuer('taskly-erp')
    .setIssuedAt()
    .setExpirationTime(config.jwtTtl)
    .sign(new TextEncoder().encode(config.jwtSecret));
}

function adminRefreshToken(admin) {
  return new SignJWT({ role: admin.role, tokenUse: 'refresh' })
    .setProtectedHeader({ alg: 'HS256' })
    .setSubject(admin._id.toString())
    .setIssuer('taskly-erp')
    .setAudience('taskly-erp-refresh')
    .setIssuedAt()
    .setExpirationTime(config.jwtRefreshTtl)
    .sign(new TextEncoder().encode(config.jwtSecret));
}

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
    const [token, refreshToken] = await Promise.all([
      adminAccessToken(admin),
      adminRefreshToken(admin),
    ]);
    await db()
      .collection('admins')
      .updateOne({ _id: admin._id }, { $set: { lastLoginAt: new Date() } });
    response.json({ token, refreshToken, admin: publicAdmin(admin) });
  }),
);

authRouter.post(
  '/refresh',
  asyncHandler(async (request, response) => {
    const parsed = refreshSchema.safeParse(request.body);
    if (!parsed.success)
      return response.status(401).json({ message: 'A renewable session is required.' });
    try {
      const { payload } = await jwtVerify(
        parsed.data.refreshToken,
        new TextEncoder().encode(config.jwtSecret),
        { issuer: 'taskly-erp', audience: 'taskly-erp-refresh' },
      );
      if (payload.tokenUse !== 'refresh') throw new Error('Invalid token use');
      const admin = await db()
        .collection('admins')
        .findOne({ _id: id(payload.sub), isActive: true });
      if (!admin) return response.status(401).json({ message: 'Account is unavailable.' });
      const [token, refreshToken] = await Promise.all([
        adminAccessToken(admin),
        adminRefreshToken(admin),
      ]);
      return response.json({ token, refreshToken, admin: publicAdmin(admin) });
    } catch {
      return response.status(401).json({ message: 'Your renewable session is invalid.' });
    }
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
    const [token, refreshToken] = await Promise.all([
      studentToken(student),
      studentRefreshToken(student),
    ]);
    await db()
      .collection('admissions')
      .updateOne({ _id: student._id }, { $set: { lastLoginAt: new Date() } });
    response.json({ token, refreshToken, student: publicStudent(student) });
  }),
);

authRouter.post(
  '/student/refresh',
  asyncHandler(async (request, response) => {
    const parsed = refreshSchema.safeParse(request.body);
    if (!parsed.success)
      return response.status(401).json({ message: 'A renewable student session is required.' });
    try {
      const { payload } = await jwtVerify(
        parsed.data.refreshToken,
        new TextEncoder().encode(config.jwtSecret),
        { issuer: 'taskly-erp', audience: 'taskly-erp-student-refresh' },
      );
      if (payload.role !== 'student' || payload.tokenUse !== 'refresh')
        throw new Error('Invalid student refresh token');
      const student = await db()
        .collection('admissions')
        .findOne({ _id: id(payload.sub), status: 'approved', isActive: true });
      if (!student)
        return response.status(401).json({ message: 'Student account is unavailable.' });
      const [token, refreshToken] = await Promise.all([
        studentToken(student),
        studentRefreshToken(student),
      ]);
      return response.json({ token, refreshToken, student: publicStudent(student) });
    } catch {
      return response.status(401).json({ message: 'Your renewable student session is invalid.' });
    }
  }),
);

authRouter.post(
  '/faculty/login',
  asyncHandler(async (request, response) => {
    const parsed = facultyLoginSchema.safeParse(request.body);
    if (!parsed.success)
      return response.status(400).json({ message: 'Enter a valid Employee ID and password.' });
    const faculty = await db()
      .collection('facultyApplications')
      .findOne({ applicationCode: parsed.data.employeeId });
    if (!faculty || faculty.status !== 'submitted' || faculty.isActive === false)
      return response.status(401).json({ message: 'The Employee ID or password is incorrect.' });

    const temporaryLogin = !faculty.passwordHash && parsed.data.password === parsed.data.employeeId;
    const passwordMatches =
      temporaryLogin ||
      (faculty.passwordHash && (await argon2.verify(faculty.passwordHash, parsed.data.password)));
    if (!passwordMatches)
      return response.status(401).json({ message: 'The Employee ID or password is incorrect.' });

    if (temporaryLogin) {
      faculty.passwordHash = await argon2.hash(parsed.data.employeeId);
      faculty.mustChangePassword = true;
    }
    faculty.employeeId = faculty.employeeId || faculty.applicationCode;
    await db()
      .collection('facultyApplications')
      .updateOne(
        { _id: faculty._id },
        {
          $set: {
            employeeId: faculty.employeeId,
            passwordHash: faculty.passwordHash,
            mustChangePassword: faculty.mustChangePassword !== false,
            isActive: true,
            lastLoginAt: new Date(),
            updatedAt: new Date(),
          },
        },
      );
    response.json({ token: await facultyToken(faculty), faculty: publicFaculty(faculty) });
  }),
);

authRouter.post(
  '/faculty/change-password',
  requireFaculty,
  asyncHandler(async (request, response) => {
    const data = studentPasswordSchema.parse(request.body);
    if (
      request.faculty.passwordHash &&
      (await argon2.verify(request.faculty.passwordHash, data.password))
    )
      return response
        .status(422)
        .json({ message: 'Your new password must be different from the temporary password.' });
    await db()
      .collection('facultyApplications')
      .updateOne(
        { _id: request.faculty._id },
        {
          $set: {
            passwordHash: await argon2.hash(data.password),
            mustChangePassword: false,
            passwordUpdatedAt: new Date(),
            updatedAt: new Date(),
          },
        },
      );
    const faculty = { ...request.faculty, mustChangePassword: false };
    response.json({ token: await facultyToken(faculty), faculty: publicFaculty(faculty) });
  }),
);

authRouter.get('/faculty/profile', requireFaculty, (request, response) =>
  response.json({ faculty: publicFaculty(request.faculty) }),
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
    const [token, refreshToken] = await Promise.all([
      studentToken(student),
      studentRefreshToken(student),
    ]);
    response.json({ token, refreshToken, student: publicStudent(student) });
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
    await ensureStudentScheduledFees(db(), request.student);
    const items = (await refreshStudentPenalties(db(), request.student._id)).filter(
      isStudentVisibleLedger,
    );
    items.sort(
      (left, right) =>
        left.kind.localeCompare(right.kind) || new Date(right.createdAt) - new Date(left.createdAt),
    );
    response.json({
      items: items.map(serialize),
      student: publicStudent(request.student),
      excessCreditBalance: await studentCreditBalance(db(), request.student._id),
      feeComparison: await previewStudentFeeModes(db(), request.student),
    });
  }),
);

function publicAdmin(admin) {
  const value = serialize(admin);
  return { id: value._id, email: value.email, name: value.name, role: value.role };
}

function studentToken(student) {
  return new SignJWT({ role: 'student', studentId: student.studentId, tokenUse: 'access' })
    .setProtectedHeader({ alg: 'HS256' })
    .setSubject(student._id.toString())
    .setIssuer('taskly-erp')
    .setIssuedAt()
    .setExpirationTime(config.jwtTtl)
    .sign(new TextEncoder().encode(config.jwtSecret));
}

function studentRefreshToken(student) {
  return new SignJWT({ role: 'student', tokenUse: 'refresh' })
    .setProtectedHeader({ alg: 'HS256' })
    .setSubject(student._id.toString())
    .setIssuer('taskly-erp')
    .setAudience('taskly-erp-student-refresh')
    .setIssuedAt()
    .setExpirationTime(config.jwtRefreshTtl)
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

function facultyToken(faculty) {
  return new SignJWT({ role: 'faculty', employeeId: faculty.employeeId || faculty.applicationCode })
    .setProtectedHeader({ alg: 'HS256' })
    .setSubject(faculty._id.toString())
    .setIssuer('taskly-erp')
    .setIssuedAt()
    .setExpirationTime(config.jwtTtl)
    .sign(new TextEncoder().encode(config.jwtSecret));
}

function publicFaculty(faculty) {
  return {
    id: String(faculty._id),
    employeeId: faculty.employeeId || faculty.applicationCode,
    name: facultyDisplayName(faculty),
    mustChangePassword: faculty.mustChangePassword !== false,
    formName: faculty.formName || '',
  };
}

function facultyDisplayName(faculty) {
  const fields = (faculty.formSnapshot?.sections || [])
    .flatMap((section) => section.subsections || [])
    .flatMap((subsection) => subsection.fields || []);
  const responseFor = (pattern) => {
    const field = fields.find((candidate) => pattern.test(String(candidate.name || '').trim()));
    const value = faculty.responses?.[field?.id];
    return typeof value === 'string' ? value.trim() : '';
  };
  const completeName = responseFor(/^(faculty\s*)?(full\s*)?name$/i);
  if (completeName) return completeName;
  const firstName = responseFor(/^first\s*name$/i);
  const lastName = responseFor(/^last\s*name$/i);
  return [firstName, lastName].filter(Boolean).join(' ') || 'Faculty';
}
