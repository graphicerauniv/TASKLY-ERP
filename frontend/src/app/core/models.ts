export interface MasterType {
  _id: string;
  name: string;
  slug: string;
  parentTypeSlug: string | null;
  isCustom: boolean;
  isActive: boolean;
}
export interface MasterValue {
  _id: string;
  name: string;
  label?: string;
  parentId: string | null;
  isActive: boolean;
  metadata?: Record<string, unknown>;
}
export interface FieldOption {
  label: string;
  value: string;
}
export interface VisibilityCondition {
  fieldId: string;
  operator: string;
  value: unknown;
}
export interface FormField {
  id: string;
  name: string;
  type: string;
  isRequired: boolean;
  isActive: boolean;
  order: number;
  placeholder: string;
  defaultValue: unknown;
  helpText: string;
  options: FieldOption[];
  dataSource: {
    kind: 'master';
    masterTypeSlug: string;
    parentFieldId: string | null;
    labelField: string;
    valueField: string;
  } | null;
  searchable: boolean;
  searchConfig: Record<string, unknown> | null;
  validation: {
    min?: number | null;
    max?: number | null;
    minLength?: number | null;
    maxLength?: number | null;
    pattern?: string;
    message?: string;
  };
  uploadConfig?: {
    maxSizeMb: number;
    allowedTypes: Array<'image' | 'pdf' | 'word'>;
  } | null;
  visibilityCondition: VisibilityCondition | null;
}
export interface FormSubsection {
  id: string;
  name: string;
  description: string;
  isActive: boolean;
  isRepeatable: boolean;
  minEntries: number;
  maxEntries: number | null;
  order: number;
  visibilityCondition: VisibilityCondition | null;
  fields: FormField[];
}
export interface FormSection {
  id: string;
  name: string;
  description: string;
  isActive: boolean;
  order: number;
  subsections: FormSubsection[];
}
export interface AdmissionForm {
  _id?: string;
  name: string;
  slug?: string;
  description: string;
  status: 'draft' | 'published' | 'archived';
  isActive: boolean;
  version?: number;
  sections: FormSection[];
}
export interface Admission {
  _id: string;
  applicationNumber: string;
  status: string;
  currentSectionId: string | null;
  formVersion?: number;
  formSnapshot: AdmissionForm;
  responses: Record<string, unknown>;
  repeatableResponses: Record<string, Record<string, unknown>[]>;
  createdAt: string;
  submittedAt?: string;
}

export interface Hostel {
  _id: string;
  name: string;
  code: string;
  type: 'boys' | 'girls' | 'co-ed';
  blockCount: number;
  floorCount: number;
  plannedRoomCount: number;
  roomCount: number;
  bedCount: number;
  occupiedBeds: number;
  isActive: boolean;
}

export interface HostelBlock {
  _id: string;
  hostelId: string;
  hostelName: string;
  name: string;
  sortOrder: number;
}

export interface HostelFloor {
  _id: string;
  hostelId: string;
  name: string;
  sortOrder: number;
}

export interface HostelRoom {
  _id: string;
  hostelId: string;
  hostelName: string;
  blockId?: string;
  blockIndex: number;
  blockName: string;
  floorId?: string;
  floorIndex: number;
  floorName: string;
  roomIndex: number;
  roomNumber: string;
  roomType: string;
  seater: string;
  capacity: number;
  beds: number[];
  occupiedBeds: number[];
  configuredForSession?: boolean;
  isActive: boolean;
}

export interface HostelStudentOption {
  _id: string;
  applicationNumber: string;
  name: string;
}

export interface HostelAllocation {
  _id: string;
  studentAdmissionId: string;
  studentApplicationNumber: string;
  studentName: string;
  academicSession: string;
  hostelId: string;
  hostelName: string;
  roomId: string;
  blockId?: string;
  blockName: string;
  floorId?: string;
  floorName: string;
  roomNumber: string;
  bedNumber: number;
  status: 'active' | 'vacated';
  allocatedAt: string;
  vacatedAt?: string;
  history: Array<Record<string, unknown>>;
}

export interface HostelOverview {
  totals: { hostels: number; rooms: number; beds: number; occupied: number; available: number };
  byHostel: Array<{
    hostelId: string;
    hostelName: string;
    type: Hostel['type'];
    rooms: number;
    beds: number;
    occupied: number;
    available: number;
  }>;
}

export type FeeFrequency = 'one-time' | 'semester' | 'half-yearly' | 'yearly';

export interface FeeBook {
  _id: string;
  collegeId: string;
  collegeName: string;
  startDate: string;
  endDate: string;
  academicSession: string;
  code: string;
  frequency: 'semester' | 'year';
  isActive: boolean;
}

export interface FeeHead {
  _id: string;
  bookId: string;
  bookCode: string;
  name: string;
  category: 'fee' | 'discount' | 'payment-option';
  priority: number;
  isActive: boolean;
}

export interface HostelFee {
  _id: string;
  bookId: string;
  bookCode: string;
  hostelId: string;
  hostelName: string;
  seater: number;
  roomType: string;
  feeHeadId: string;
  feeHeadName: string;
  frequency: FeeFrequency;
  amount: number;
}

export interface CourseFee {
  _id: string;
  bookId: string;
  bookCode: string;
  courseId: string;
  courseName: string;
  domicileId: string;
  domicileName: string;
  studentTypeId: string;
  studentTypeName: string;
  countryId: string | null;
  countryName: string | null;
  feeHeadId: string;
  feeHeadName: string;
  category: FeeHead['category'];
  academicId: string | null;
  academicName: string | null;
  academicYear: number | null;
  semester: number | null;
  frequency: FeeFrequency;
  eligibilityBand: string;
  amount: number;
  source: 'manual' | 'excel';
  sourceSheet?: string;
}

export interface FeeImportSheet {
  sheetName: string;
  courseTitle: string;
  subtitle: string;
  programNames: string[];
  intakeYear: number | null;
  lineCount: number;
  sourceHeads: string[];
  warnings: string[];
  match: {
    status: 'matched' | 'ambiguous' | 'unmatched';
    courseId: string | null;
    courseName: string | null;
    candidates: Array<{ courseId: string; courseName: string; score: number }>;
  };
}

export interface FeeImportPreview {
  _id: string;
  bookId: string;
  bookCode: string;
  domicileId: string;
  domicileName: string;
  studentTypeId: string;
  studentTypeName: string;
  countryId: string | null;
  countryName: string | null;
  fileName: string;
  sheets: FeeImportSheet[];
  headMappings: Array<{
    sourceHead: string;
    status: 'matched' | 'ambiguous' | 'unmatched';
    feeHeadId: string | null;
    feeHeadName: string | null;
  }>;
}
