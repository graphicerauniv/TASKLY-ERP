export type FeeDueState = 'overdue' | 'due-soon' | 'upcoming' | 'paid' | 'unknown';
export type FeeLoadState = 'loading' | 'ready' | 'error';
export type FeeValueSource = 'backend' | 'derived' | 'static-ui' | 'unavailable';

export interface MoneyValue {
  amount: number;
  formatted: string;
}

export interface FeeServiceCardViewModel {
  id: string;
  title: string;
  description: string;
  image: string;
  tone: string;
  route: string | null;
}

export interface FeeStatusViewModel {
  kind: 'academic' | 'hostel';
  title: string;
  context: string;
  status: 'due' | 'partial' | 'paid' | 'not-assigned';
  amount: MoneyValue | null;
  image: string;
}

export interface FeeActivityViewModel {
  id: string;
  label: string;
  date: string | null;
  state: 'success' | 'warning' | 'danger' | 'info';
}

export interface StudentFeeDashboardViewModel {
  student: {
    name: string | null;
    studentId: string | null;
    courseName: string | null;
    academicSession: string | null;
    currentPeriod: string | null;
  };
  summary: {
    totalFee: MoneyValue | null;
    paidAmount: MoneyValue | null;
    outstandingAmount: MoneyValue | null;
    nextDueDate: string | null;
    dueState: FeeDueState;
  };
  services: FeeServiceCardViewModel[];
  academicFee: FeeStatusViewModel | null;
  hostelFee: FeeStatusViewModel | null;
  recentActivity: FeeActivityViewModel[];
  feeState: FeeLoadState;
  activityState: FeeLoadState;
  lastUpdatedAt: string | null;
}

export interface StudentFeeContextViewModel {
  name: string | null;
  studentId: string | null;
  courseName: string | null;
  academicSession: string | null;
  currentPeriod: string | null;
}

export interface FeeHeadDetailViewModel {
  id: string;
  name: string;
  category: 'fee' | 'discount' | 'payment-option';
  priority: number;
  periodLabel: string;
  dueDate: string | null;
  charge: MoneyValue | null;
  discount: MoneyValue | null;
  paid: MoneyValue | null;
  balance: MoneyValue | null;
  status: 'due' | 'partial' | 'paid';
  source: FeeValueSource;
}

export interface FeeLedgerDetailViewModel {
  id: string;
  kind: 'academic' | 'hostel';
  title: string;
  periodLabel: string;
  academicSession: string | null;
  feeFrequency: 'year' | 'semester';
  currentAcademicYear: number | null;
  currentSemester: number | null;
  dueDate: string | null;
  charge: MoneyValue | null;
  discount: MoneyValue | null;
  paid: MoneyValue | null;
  balance: MoneyValue | null;
  penalty: MoneyValue | null;
  paymentStatus: 'due' | 'partial' | 'paid';
  rows: FeeHeadDetailViewModel[];
  isPayable: boolean;
  source: FeeValueSource;
}

export type StudentPaymentStatus = 'successful' | 'pending' | 'failed' | 'refunded';
export type StudentPaymentFeeType = 'academic' | 'hostel' | 'mixed' | 'unknown';

export interface StudentPaymentRecordViewModel {
  id: string;
  receiptNumber: string | null;
  orderReference: string;
  paymentId: string | null;
  amount: MoneyValue;
  feeType: StudentPaymentFeeType;
  feePeriodLabel: string;
  status: StudentPaymentStatus;
  rawStatus: 'created' | 'processing' | 'paid' | 'failed' | 'refunded';
  createdAt: string | null;
  paidAt: string | null;
  method: string | null;
  downloadable: boolean;
}

export interface StudentFeeWorkspaceViewModel {
  state: FeeLoadState;
  errorMessage: string | null;
  student: StudentFeeContextViewModel;
  ledgers: FeeLedgerDetailViewModel[];
  payments: StudentPaymentRecordViewModel[];
  razorpayEnabled: boolean;
  source: FeeValueSource;
  loadedAt: string | null;
}
