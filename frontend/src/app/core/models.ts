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
  applicationNumber?: string;
  studentId?: string;
  studentName?: string;
  academicSession?: string;
  currentAcademicYear?: number;
  currentSemester?: number;
  feeFrequency?: 'year' | 'semester';
  academicSessionId?: string | null;
  courseName?: string;
  courseId?: string | null;
  collegeName?: string;
  departmentName?: string;
  levelName?: string;
  domicileName?: string;
  studentTypeName?: string;
  countryName?: string;
  feeLedgerKinds?: Array<'academic' | 'hostel'>;
  status: 'draft' | 'pending_approval' | 'approved' | 'submitted';
  currentSectionId: string | null;
  formVersion?: number;
  formSnapshot: AdmissionForm;
  responses: Record<string, unknown>;
  repeatableResponses: Record<string, Record<string, unknown>[]>;
  createdAt: string;
  submittedAt?: string;
  approvedAt?: string;
  isActive?: boolean;
  mustChangePassword?: boolean;
}

export interface StudentSession {
  id: string;
  studentId: string;
  name: string;
  mustChangePassword: boolean;
  academicSession?: string;
  courseName?: string;
  currentAcademicYear?: number;
  currentSemester?: number;
  feeFrequency?: 'year' | 'semester';
}

export interface StudentFeeEntry {
  feeHeadId: string;
  feeHeadName: string;
  category: 'fee' | 'discount' | 'payment-option';
  priority: number;
  frequency: FeeFrequency;
  academicYear: number | null;
  semester: number | null;
  periodLabel: string;
  amount: number;
  paidAmount: number;
  balanceAmount: number;
  discountAmount?: number;
  dueDate: string;
  status: 'due' | 'paid' | 'partial';
  isScholarship?: boolean;
  isOneTimeDiscount?: boolean;
  adjustmentKind?: 'scholarship' | 'discount';
  customDiscountId?: string;
  scholarshipAssignmentId?: string;
  scholarshipId?: string;
  scholarshipType?: 'percentage' | 'fixed';
  scholarshipValue?: number;
}

export interface StudentFeeLedger {
  _id: string;
  studentAdmissionId: string;
  studentId: string;
  studentName: string;
  feeBookId: string;
  feeBookCode: string;
  academicSession: string;
  currentAcademicYear: number;
  currentSemester?: number | null;
  feeFrequency: 'year' | 'semester';
  periodKey: string;
  periodLabel: string;
  kind: 'academic' | 'hostel';
  name: 'Academic Fee' | 'Hostel Fee';
  entries: StudentFeeEntry[];
  chargeAmount: number;
  discountAmount: number;
  totalAmount: number;
  paidAmount: number;
  balanceAmount: number;
  status: 'active';
  paymentStatus: 'due' | 'partial' | 'paid';
  penaltyAmount?: number;
  hostelName?: string;
  roomNumber?: string;
  createdAt: string;
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
  divideSemesterWise: boolean;
  isActive: boolean;
}

export interface Scholarship {
  _id: string;
  name: string;
  type: 'percentage' | 'fixed';
  value: number;
  recurring: true;
  appliesTo: 'tuition';
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface StudentScholarship {
  _id: string;
  studentAdmissionId: string;
  studentId: string;
  studentName: string;
  scholarshipId: string;
  scholarshipName: string;
  type: 'percentage' | 'fixed';
  value: number;
  startAcademicYear: number;
  startSemester?: number | null;
  recurring: true;
  status: 'active' | 'removed';
  assignedAt: string;
}

export interface StudentDiscount {
  _id: string;
  studentAdmissionId: string;
  studentId: string;
  studentName: string;
  name: string;
  type: 'percentage' | 'fixed';
  value: number;
  targetLedgerId: string;
  targetPeriodKey: string;
  targetPeriodLabel: string;
  academicSession: string;
  academicYear: number;
  semester?: number | null;
  feeFrequency: 'year' | 'semester';
  internalRemark: string;
  recurring: false;
  status: 'active' | 'removed';
  createdAt: string;
}

export interface CourseFeeDraft {
  _id: string;
  bookId: string;
  bookCode: string;
  collegeName: string;
  academicSession: string;
  departmentId: string;
  levelId: string;
  courseId: string;
  courseName: string;
  domicileId: string;
  studentTypeId: string;
  feeTypeId: string;
  countryId: string;
  selectedFeeHeadIds: string[];
  matrixAmounts: Record<string, number | null>;
  status: 'draft';
  createdAt: string;
  updatedAt: string;
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
  feeTypeId: string;
  feeTypeName: string;
  periodType: 'year' | 'semester';
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

export interface FeeProgressionCandidate extends Admission {
  nextAcademicYear: number;
  nextSemester: number | null;
  nextPeriodLabel: string;
}

export interface StudentPromotion {
  _id: string;
  studentAdmissionId: string;
  studentId: string;
  studentName: string;
  courseId: string;
  courseName: string;
  academicSession: string;
  mode: 'semester' | 'year';
  fromAcademicYear: number;
  fromSemester: number;
  toAcademicYear: number;
  toSemester: number | null;
  targetPeriodLabel: string;
  feeLedgerId: string;
  status: 'pending' | 'promoting' | 'promoted' | 'cancelled';
  createdAt: string;
  promotedAt?: string;
}

export interface FeePaymentAllocation {
  ledgerId: string;
  ledgerKind: 'academic' | 'hostel';
  feeHeadId: string;
  feeHeadName: string;
  isPenalty: boolean;
  amount: number;
}

export interface FeePayment {
  _id: string;
  receiptNumber?: string;
  studentAdmissionId: string;
  studentId: string;
  studentName: string;
  razorpayOrderId: string;
  razorpayPaymentId?: string;
  targetLedgerId?: string;
  targetPeriodLabel?: string;
  amount: number;
  currency: 'INR';
  method?: string;
  status: 'created' | 'processing' | 'paid' | 'failed' | 'refunded';
  allocations?: FeePaymentAllocation[];
  createdAt: string;
  paidAt?: string;
  outstandingBalance?: number;
}
