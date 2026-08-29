export interface StudentProfileField {
  readonly label: string;
  readonly value: string;
}

export interface StudentEducationRecord {
  readonly id: string;
  readonly title: string;
  readonly fields: readonly StudentProfileField[];
}

export interface StudentProfileDocument {
  readonly id: string;
  readonly name: string;
  readonly category: string;
  readonly url: string;
  readonly verified: boolean;
}

export interface StudentProfile {
  readonly identity: {
    readonly id: string;
    readonly studentId: string;
    readonly name: string;
    readonly status: 'active' | 'inactive';
    readonly photoUrl: string;
    readonly verified: boolean;
    readonly readOnly: boolean;
  };
  readonly personal: {
    readonly dateOfBirth: string;
    readonly gender: string;
    readonly fatherName: string;
    readonly motherName: string;
    readonly guardianName: string;
    readonly bloodGroup: string;
    readonly address: string;
  };
  readonly academic: {
    readonly college: string;
    readonly department: string;
    readonly course: string;
    readonly branch: string;
    readonly academicSession: string;
    readonly academicYear: number;
    readonly semester: number;
    readonly section: string;
    readonly specialization: string;
    readonly campus: string;
  };
  readonly contact: {
    readonly officialEmail: string;
    readonly personalEmail: string;
    readonly mobile: string;
    readonly alternateMobile: string;
    readonly emergencyContact: string;
  };
  readonly educationRecords: readonly StudentEducationRecord[];
  readonly documents: readonly StudentProfileDocument[];
  readonly digitalId: {
    readonly issued: boolean;
    readonly verified: boolean;
    readonly issuedAt: string | null;
  };
  readonly security: {
    readonly accountActive: boolean;
    readonly passwordUpdatedAt: string | null;
    readonly lastLoginAt: string | null;
    readonly supportStatus: string;
  };
  readonly syncedAt: string;
}

export type StudentProfileSource = 'backend' | 'fallback';

export interface StudentProfileViewModel {
  readonly state: 'loading' | 'loaded';
  readonly profile: StudentProfile;
  readonly source: StudentProfileSource;
}

export type StudentProfileServiceId =
  | 'digital-id'
  | 'personal'
  | 'academic'
  | 'education'
  | 'documents'
  | 'security';

export interface StudentProfileService {
  readonly id: StudentProfileServiceId;
  readonly title: string;
  readonly description: string;
  readonly image: string;
  readonly tone: 'blue' | 'teal' | 'violet' | 'green';
}
