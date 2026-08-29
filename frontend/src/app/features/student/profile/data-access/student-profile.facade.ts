import { inject, Injectable } from '@angular/core';
import { catchError, map, of } from 'rxjs';
import { ApiService } from '../../../../core/api.service';
import { StudentSession } from '../../../../core/models';
import { StudentProfile, StudentProfileViewModel } from '../models/student-profile.model';

@Injectable({ providedIn: 'root' })
export class StudentProfileFacade {
  private readonly api = inject(ApiService);

  loading(session: StudentSession | null): StudentProfileViewModel {
    return { state: 'loading', profile: fallbackProfile(session), source: 'fallback' };
  }

  load(token: string, session: StudentSession | null) {
    return this.api.studentProfile(token).pipe(
      map(({ profile }) => ({ state: 'loaded', profile: mergeProfile(profile, session), source: 'backend' }) as StudentProfileViewModel),
      catchError(() => of({ state: 'loaded', profile: fallbackProfile(session), source: 'fallback' } as StudentProfileViewModel)),
    );
  }
}

function mergeProfile(profile: StudentProfile, session: StudentSession | null): StudentProfile {
  const fallback = fallbackProfile(session);
  return {
    ...fallback,
    ...profile,
    identity: { ...fallback.identity, ...profile.identity, photoUrl: profile.identity.photoUrl || fallback.identity.photoUrl },
    personal: fillMissing(fallback.personal, profile.personal),
    academic: fillMissing(fallback.academic, profile.academic),
    contact: fillMissing(fallback.contact, profile.contact),
    educationRecords: profile.educationRecords.length ? profile.educationRecords : fallback.educationRecords,
    documents: profile.documents,
    digitalId: { ...fallback.digitalId, ...profile.digitalId },
    security: { ...fallback.security, ...profile.security },
  };
}

function fillMissing<T extends object>(fallback: T, value: T): T {
  return Object.fromEntries(
    Object.entries(fallback).map(([key, defaultValue]) => [key, Object.prototype.hasOwnProperty.call(value, key) && value[key as keyof T] !== '' ? value[key as keyof T] : defaultValue]),
  ) as T;
}

function fallbackProfile(session: StudentSession | null): StudentProfile {
  const studentId = session?.studentId || '23011672';
  return {
    identity: {
      id: session?.id || 'student-preview',
      studentId,
      name: session?.name || 'Vivek Sharma',
      status: 'active',
      photoUrl: '',
      verified: true,
      readOnly: true,
    },
    personal: {
      dateOfBirth: '22 Apr 2004',
      gender: 'Not provided',
      fatherName: 'Dinesh Chander Semwal',
      motherName: 'Shashi Devi',
      guardianName: 'Not provided',
      bloodGroup: 'Not provided',
      address: 'Not provided',
    },
    academic: {
      college: 'GEHU Dehradun Campus',
      department: 'Computer Science and Engineering',
      course: session?.courseName || 'Bachelor of Technology',
      branch: session?.courseName || 'B.Tech (CSE)',
      academicSession: session?.academicSession || '2026–27',
      academicYear: session?.currentAcademicYear || 4,
      semester: session?.currentSemester || 7,
      section: 'C1',
      specialization: 'Not provided',
      campus: 'GEHU Dehradun Campus',
    },
    contact: {
      officialEmail: `vivek.${studentId}@gehu.ac.in`,
      personalEmail: '422semwalvivek@gmail.com',
      mobile: '7508669870',
      alternateMobile: 'Not provided',
      emergencyContact: 'Not provided',
    },
    educationRecords: [
      { id: 'preview-xii', title: 'Senior Secondary (Class XII)', fields: [{ label: 'Board', value: 'CBSE' }, { label: 'Status', value: 'Verified' }] },
      { id: 'preview-x', title: 'Secondary (Class X)', fields: [{ label: 'Board', value: 'CBSE' }, { label: 'Status', value: 'Verified' }] },
    ],
    documents: [],
    digitalId: { issued: true, verified: true, issuedAt: null },
    security: { accountActive: true, passwordUpdatedAt: null, lastLoginAt: null, supportStatus: 'available' },
    syncedAt: new Date().toISOString(),
  };
}
