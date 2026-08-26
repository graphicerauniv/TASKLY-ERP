import { jwtVerify } from 'jose';
import { config } from '../config.js';
import { db, id, serialize } from '../db.js';
import { asyncHandler } from '../lib/async-handler.js';

export const requireAdmin = asyncHandler(async (request, response, next) => {
  const token = request.headers.authorization?.replace(/^Bearer\s+/i, '');
  if (!token) return response.status(401).json({ message: 'Authentication required.' });
  try {
    const { payload } = await jwtVerify(token, new TextEncoder().encode(config.jwtSecret), {
      issuer: 'taskly-erp',
    });
    const admin = await db()
      .collection('admins')
      .findOne({ _id: id(payload.sub), isActive: true });
    if (!admin) return response.status(401).json({ message: 'Account is unavailable.' });
    request.admin = serialize(admin);
    next();
  } catch {
    response.status(401).json({ message: 'Your session is invalid or expired.' });
  }
});

export const requireStudent = asyncHandler(async (request, response, next) => {
  const token = request.headers.authorization?.replace(/^Bearer\s+/i, '');
  if (!token) return response.status(401).json({ message: 'Student authentication required.' });
  try {
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
});
