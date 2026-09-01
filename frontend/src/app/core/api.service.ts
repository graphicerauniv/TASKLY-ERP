import { HttpClient, HttpParams } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API_BASE_URL } from './runtime-config';
import {
  Admission,
  AdmissionForm,
  Hostel,
  HostelAllocation,
  HostelBlock,
  HostelFloor,
  HostelOverview,
  HostelRoom,
  HostelStudentOption,
  MasterType,
  MasterValue,
  StudentSession,
  StudentFeeLedger,
  StudentFeeComparison,
  CourseFee,
  CourseFeeDraft,
  FeeBook,
  FeeHead,
  FeeImportPreview,
  HostelFee,
  FeePayment,
  FeeCredit,
  FeeProgressionCandidate,
  StudentPromotion,
  Scholarship,
  StudentScholarship,
  StudentDiscount,
  FeeSchedule,
  OfflinePaymentStudent,
} from './models';
import type { StudentProfile } from '../features/student/profile/models/student-profile.model';

@Injectable({ providedIn: 'root' })
export class ApiService {
  private readonly http = inject(HttpClient);
  login(email: string, password: string) {
    return this.http.post<{ token: string; admin: { name: string; email: string } }>(
      `${API_BASE_URL}/auth/login`,
      { email, password },
    );
  }
  summary() {
    return this.http.get<Record<string, number>>(`${API_BASE_URL}/dashboard/summary`);
  }
  masterTypes() {
    return this.http.get<{ items: MasterType[] }>(`${API_BASE_URL}/master-data/types`);
  }
  createMasterType(body: { name: string; parentTypeSlug?: string | null }) {
    return this.http.post<{ item: MasterType }>(`${API_BASE_URL}/master-data/types`, body);
  }
  masterValues(
    slug: string,
    options: { search?: string; parentId?: string; active?: boolean } = {},
  ) {
    let params = new HttpParams().set('limit', 100);
    for (const [key, value] of Object.entries(options))
      if (value !== undefined && value !== '') params = params.set(key, String(value));
    return this.http.get<{ items: MasterValue[] }>(`${API_BASE_URL}/master-data/${slug}/values`, {
      params,
    });
  }
  createMasterValue(slug: string, body: Partial<MasterValue>) {
    return this.http.post<{ item: MasterValue }>(
      `${API_BASE_URL}/master-data/${slug}/values`,
      body,
    );
  }
  updateMasterValue(slug: string, id: string, body: Partial<MasterValue>) {
    return this.http.patch<{ item: MasterValue }>(
      `${API_BASE_URL}/master-data/${slug}/values/${id}`,
      body,
    );
  }
  deleteMasterValue(slug: string, id: string) {
    return this.http.delete<void>(`${API_BASE_URL}/master-data/${slug}/values/${id}`);
  }
  importMasterValues(slug: string, file: File) {
    const data = new FormData();
    data.append('file', file);
    return this.http.post<{ imported: number }>(`${API_BASE_URL}/master-data/${slug}/import`, data);
  }
  forms() {
    return this.http.get<{ items: AdmissionForm[] }>(`${API_BASE_URL}/forms`);
  }
  createForm(body: Partial<AdmissionForm>) {
    return this.http.post<{ item: AdmissionForm }>(`${API_BASE_URL}/forms`, body);
  }
  saveForm(form: AdmissionForm) {
    return this.http.put<{ item: AdmissionForm }>(`${API_BASE_URL}/forms/${form._id}`, form);
  }
  deleteForm(id: string) {
    return this.http.delete<void>(`${API_BASE_URL}/forms/${id}`);
  }
  admissions(options: { status?: string; search?: string; page?: number; limit?: number } = {}) {
    let params = new HttpParams();
    for (const [key, value] of Object.entries(options))
      if (value !== undefined && value !== '') params = params.set(key, String(value));
    return this.http.get<{
      items: Admission[];
      pagination: { page: number; limit: number; total: number; pages: number };
    }>(`${API_BASE_URL}/admissions`, { params });
  }
  admission(id: string) {
    return this.http.get<{ item: Admission; masterLabels: Record<string, string> }>(
      `${API_BASE_URL}/admissions/${id}`,
    );
  }
  deleteAdmission(id: string) {
    return this.http.delete<void>(`${API_BASE_URL}/admissions/${id}`);
  }
  updateAdmission(admission: Admission) {
    return this.http.patch<{ item: Admission }>(`${API_BASE_URL}/admissions/${admission._id}`, {
      currentSectionId: admission.currentSectionId,
      currentAcademicYear: admission.currentAcademicYear,
      currentSemester: admission.currentSemester,
      feeFrequency: admission.feeFrequency,
      feeFrequencyChoice: admission.feeFrequencyChoice,
      responses: admission.responses,
      repeatableResponses: admission.repeatableResponses,
    });
  }
  submitAdminAdmission(id: string) {
    return this.http.post<{ item: Admission }>(`${API_BASE_URL}/admissions/${id}/submit`, {});
  }
  approveAdmission(
    id: string,
    body: {
      passwordMode: 'student-id' | 'manual';
      password?: string;
      currentAcademicYear: number;
      currentSemester?: number;
      feeFrequency?: 'year' | 'semester';
    },
  ) {
    return this.http.post<{ item: Admission }>(`${API_BASE_URL}/admissions/${id}/approve`, body);
  }
  setAdmissionFeePeriod(
    id: string,
    body: {
      currentAcademicYear?: number;
      currentSemester?: number;
      feeFrequency?: 'year' | 'semester';
    },
  ) {
    return this.http.patch<{ item: Admission }>(`${API_BASE_URL}/admissions/${id}`, {
      ...body,
    });
  }
  resetStudentPassword(
    id: string,
    body: { passwordMode: 'student-id' | 'manual'; password?: string },
  ) {
    return this.http.post<{ message: string }>(`${API_BASE_URL}/admissions/${id}/password`, body);
  }
  studentLogin(studentId: string, password: string) {
    return this.http.post<{ token: string; student: StudentSession }>(
      `${API_BASE_URL}/auth/student/login`,
      { studentId, password },
    );
  }
  changeStudentPassword(token: string, password: string) {
    return this.http.post<{ token: string; student: StudentSession }>(
      `${API_BASE_URL}/auth/student/change-password`,
      { password },
      { headers: { Authorization: `Bearer ${token}` } },
    );
  }
  studentFees(token: string) {
    return this.http.get<{
      items: StudentFeeLedger[];
      student: StudentSession;
      excessCreditBalance: number;
      feeComparison: StudentFeeComparison;
    }>(`${API_BASE_URL}/auth/student/fees`, { headers: { Authorization: `Bearer ${token}` } });
  }
  studentProfile(token: string) {
    return this.http.get<{ profile: StudentProfile }>(`${API_BASE_URL}/auth/student/profile`, {
      headers: { Authorization: `Bearer ${token}` },
    });
  }
  studentPaymentHistory(token: string) {
    return this.http.get<{ items: FeePayment[]; razorpayEnabled: boolean }>(
      `${API_BASE_URL}/payments/student/history`,
      { headers: { Authorization: `Bearer ${token}` } },
    );
  }
  createStudentPaymentOrder(
    token: string,
    amount: number,
    ledgerId: string | null,
    kind: 'academic' | 'hostel' = 'academic',
  ) {
    return this.http.post<{
      keyId: string;
      orderId: string;
      amountPaise: number;
      currency: string;
      student: { name: string; studentId: string };
    }>(
      `${API_BASE_URL}/payments/student/orders`,
      { amount, ledgerId, kind },
      { headers: { Authorization: `Bearer ${token}` } },
    );
  }
  verifyStudentPayment(
    token: string,
    body: { razorpay_order_id: string; razorpay_payment_id: string; razorpay_signature: string },
  ) {
    return this.http.post<{ item: FeePayment }>(`${API_BASE_URL}/payments/student/verify`, body, {
      headers: { Authorization: `Bearer ${token}` },
    });
  }
  downloadStudentReceipt(token: string, paymentId: string) {
    return this.http.get(`${API_BASE_URL}/payments/student/receipt/${paymentId}`, {
      headers: { Authorization: `Bearer ${token}` },
      responseType: 'blob',
    });
  }
  generateStudentFees(studentAdmissionIds: string[]) {
    return this.http.post<{
      created: number;
      studentsProcessed: number;
      results: Array<{
        studentAdmissionId: string;
        studentId?: string;
        studentName?: string;
        success: boolean;
        createdKinds: Array<'academic' | 'hostel'>;
        skippedKinds: Array<{ kind: 'academic' | 'hostel'; reason: string }>;
        reason?: string;
      }>;
    }>(`${API_BASE_URL}/fees/student-ledgers/generate`, { studentAdmissionIds });
  }
  recalculateStudentFees(studentAdmissionIds: string[]) {
    return this.http.post<{
      created: number;
      studentsProcessed: number;
      results: Array<{
        studentAdmissionId: string;
        studentId?: string;
        studentName?: string;
        success: boolean;
        createdKinds: Array<'academic'>;
        skippedKinds: Array<{ kind: 'academic'; reason: string }>;
        reason?: string;
      }>;
    }>(`${API_BASE_URL}/fees/student-ledgers/recalculate`, { studentAdmissionIds });
  }
  feeProgressionCandidates(mode: 'semester' | 'year') {
    return this.http.get<{ items: FeeProgressionCandidate[] }>(
      `${API_BASE_URL}/fees/student-ledgers/progression-candidates`,
      { params: { mode } },
    );
  }
  progressStudentFees(body: {
    mode: 'semester' | 'year';
    studentAdmissionIds: string[];
    penalty: { enabled: boolean; dueDate?: string; dailyAmount?: number; maxAmount?: number };
  }) {
    return this.http.post<{
      created: number;
      promotionsCreated: number;
      studentsProcessed: number;
      results: Array<{
        studentName?: string;
        createdKinds: string[];
        reason?: string;
        promotionCreated?: boolean;
        targetPeriodLabel?: string;
        skippedKinds: Array<{ reason: string }>;
      }>;
    }>(`${API_BASE_URL}/fees/student-ledgers/progress`, body);
  }
  studentPromotions(filters: {
    mode?: 'semester' | 'year';
    status?: string;
    search?: string;
    academicSession?: string;
    courseId?: string;
    currentAcademicYear?: number | null;
    currentSemester?: number | null;
  }) {
    let params = new HttpParams();
    for (const [key, value] of Object.entries(filters))
      if (value !== undefined && value !== null && value !== '') params = params.set(key, value);
    return this.http.get<{ items: StudentPromotion[] }>(`${API_BASE_URL}/fees/student-promotions`, {
      params,
    });
  }
  promoteStudents(progressionIds: string[]) {
    return this.http.post<{
      promoted: number;
      requested: number;
      results: Array<{ progressionId: string; success: boolean; reason?: string }>;
    }>(`${API_BASE_URL}/fees/student-promotions/promote`, { progressionIds });
  }
  accounts(search = '', status = '') {
    let params = new HttpParams();
    if (search) params = params.set('search', search);
    if (status) params = params.set('status', status);
    return this.http.get<{
      items: FeePayment[];
      discounts: StudentDiscount[];
      credits: FeeCredit[];
      summary: {
        successfulPayments: number;
        collectedAmount: number;
        pendingPayments: number;
        availableCredit: number;
      };
    }>(`${API_BASE_URL}/payments/admin/accounts`, { params });
  }
  downloadAdminReceipt(paymentId: string) {
    return this.http.get(`${API_BASE_URL}/payments/admin/accounts/${paymentId}/receipt`, {
      responseType: 'blob',
    });
  }
  offlinePaymentWorkspace(studentAdmissionId: string) {
    return this.http.get<{
      student: OfflinePaymentStudent;
      ledgers: StudentFeeLedger[];
      payments: FeePayment[];
      excessCreditBalance: number;
    }>(`${API_BASE_URL}/payments/admin/offline/${studentAdmissionId}`);
  }
  createOfflinePayment(
    studentAdmissionId: string,
    body: {
      amount: number;
      kind: 'academic' | 'hostel';
      targetLedgerId: string | null;
      method: 'cash' | 'upi' | 'bank_transfer' | 'cheque' | 'card' | 'demand_draft' | 'other';
      referenceNumber: string;
      paymentDate: string;
      internalRemark: string;
      idempotencyKey: string;
    },
  ) {
    return this.http.post<{
      item: FeePayment;
      duplicate: boolean;
      ledgers: StudentFeeLedger[];
      excessCreditBalance: number;
    }>(`${API_BASE_URL}/payments/admin/offline/${studentAdmissionId}`, body);
  }
  deleteStudentFees(studentAdmissionId: string) {
    return this.http.delete<{ deleted: number }>(
      `${API_BASE_URL}/fees/student-ledgers/student/${studentAdmissionId}`,
    );
  }
  uploadAdminAdmission(id: string, fieldId: string, file: File) {
    const data = new FormData();
    data.append('fieldId', fieldId);
    data.append('file', file);
    return this.http.post<{ file: { name: string; key: string; url: string } }>(
      `${API_BASE_URL}/admissions/${id}/upload`,
      data,
    );
  }
  activeForm() {
    return this.http.get<{ item: AdmissionForm }>(`${API_BASE_URL}/public/forms/active`);
  }
  publicOptions(slug: string, parentId?: string, search?: string) {
    let params = new HttpParams();
    if (parentId) params = params.set('parentId', parentId);
    if (search) params = params.set('search', search);
    return this.http.get<{ items: MasterValue[] }>(
      `${API_BASE_URL}/public/master-data/${slug}/options`,
      { params },
    );
  }
  startAdmission(formId?: string) {
    return this.http.post<{ item: Admission; accessKey: string }>(
      `${API_BASE_URL}/public/admissions`,
      { formId },
    );
  }
  getAdmission(id: string, key: string) {
    return this.http.get<{ item: Admission }>(`${API_BASE_URL}/public/admissions/${id}`, {
      headers: { 'x-admission-key': key },
    });
  }
  saveAdmission(admission: Admission, key: string) {
    return this.http.patch<{ item: Admission }>(
      `${API_BASE_URL}/public/admissions/${admission._id}`,
      {
        currentSectionId: admission.currentSectionId,
        responses: admission.responses,
        repeatableResponses: admission.repeatableResponses,
        feeFrequencyChoice: admission.feeFrequencyChoice,
      },
      { headers: { 'x-admission-key': key } },
    );
  }
  submitAdmission(id: string, key: string) {
    return this.http.post<{ item: Admission }>(
      `${API_BASE_URL}/public/admissions/${id}/submit`,
      {},
      { headers: { 'x-admission-key': key } },
    );
  }
  upload(
    id: string,
    key: string,
    fieldId: string,
    file: File,
  ): Observable<{ file: { name: string; key: string; url: string } }> {
    const data = new FormData();
    data.append('fieldId', fieldId);
    data.append('file', file);
    return this.http.post<{ file: { name: string; key: string; url: string } }>(
      `${API_BASE_URL}/public/admissions/${id}/upload`,
      data,
      { headers: { 'x-admission-key': key } },
    );
  }
  hostels(session = '') {
    return this.http.get<{ items: Hostel[] }>(`${API_BASE_URL}/hostels`, {
      params: session ? { session } : {},
    });
  }
  createHostel(body: {
    name: string;
    type: Hostel['type'];
    blockCount: number;
    floorCount: number;
    plannedRoomCount: number;
  }) {
    return this.http.post<{ item: Hostel }>(`${API_BASE_URL}/hostels`, body);
  }
  updateHostel(
    id: string,
    body: Partial<
      Pick<Hostel, 'name' | 'type' | 'blockCount' | 'floorCount' | 'plannedRoomCount' | 'isActive'>
    >,
  ) {
    return this.http.patch<{ item: Hostel }>(`${API_BASE_URL}/hostels/${id}`, body);
  }
  deleteHostel(id: string) {
    return this.http.delete<void>(`${API_BASE_URL}/hostels/${id}`);
  }
  hostelStructure(hostelId: string) {
    return this.http.get<{ items: HostelBlock[]; floors: HostelFloor[] }>(
      `${API_BASE_URL}/hostels/structure/list`,
      { params: { hostelId } },
    );
  }
  createHostelBlock(body: { hostelId: string; name: string }) {
    return this.http.post<{ item: HostelBlock }>(`${API_BASE_URL}/hostels/blocks`, body);
  }
  updateHostelBlock(id: string, name: string) {
    return this.http.patch<{ item: HostelBlock }>(`${API_BASE_URL}/hostels/blocks/${id}`, { name });
  }
  deleteHostelBlock(id: string) {
    return this.http.delete<void>(`${API_BASE_URL}/hostels/blocks/${id}`);
  }
  createHostelFloor(body: { hostelId: string; name: string }) {
    return this.http.post<{ item: HostelFloor }>(`${API_BASE_URL}/hostels/floors`, body);
  }
  updateHostelFloor(id: string, name: string) {
    return this.http.patch<{ item: HostelFloor }>(`${API_BASE_URL}/hostels/floors/${id}`, { name });
  }
  deleteHostelFloor(id: string) {
    return this.http.delete<void>(`${API_BASE_URL}/hostels/floors/${id}`);
  }
  hostelRooms(options: {
    hostelId?: string;
    blockId?: string;
    floorId?: string;
    block?: string;
    floor?: string;
    session?: string;
  }) {
    let params = new HttpParams();
    for (const [key, value] of Object.entries(options)) if (value) params = params.set(key, value);
    return this.http.get<{ items: HostelRoom[] }>(`${API_BASE_URL}/hostels/rooms/options`, {
      params,
    });
  }
  updateHostelRoom(id: string, body: { roomType: string; capacity: number; isActive?: boolean }) {
    return this.http.patch<{ item: HostelRoom }>(`${API_BASE_URL}/hostels/rooms/${id}`, body);
  }
  createHostelRoom(body: {
    hostelId: string;
    blockId: string;
    floorId: string;
    roomNumber: string;
  }) {
    return this.http.post<{ item: HostelRoom }>(`${API_BASE_URL}/hostels/rooms/manual`, body);
  }
  generateHostelRooms(body: {
    hostelId: string;
    blockId: string;
    floorId: string;
    prefix: string;
    startNumber: number;
    count: number;
  }) {
    return this.http.post<{ items: HostelRoom[] }>(`${API_BASE_URL}/hostels/rooms/generate`, body);
  }
  updateHostelRoomDetails(id: string, body: { roomNumber?: string; isActive?: boolean }) {
    return this.http.patch<{ item: HostelRoom }>(
      `${API_BASE_URL}/hostels/rooms/${id}/details`,
      body,
    );
  }
  deleteHostelRoom(id: string) {
    return this.http.delete<void>(`${API_BASE_URL}/hostels/rooms/${id}`);
  }
  hostelCapacityOptions() {
    return this.http.get<{ seaters: number[]; roomTypes: string[] }>(
      `${API_BASE_URL}/hostels/capacity/options`,
    );
  }
  saveHostelRoomCapacity(
    id: string,
    body: { academicSession: string; capacity: number; roomType: string },
  ) {
    return this.http.put<{ item: HostelRoom }>(
      `${API_BASE_URL}/hostels/rooms/${id}/capacity`,
      body,
    );
  }
  hostelStudents() {
    return this.http.get<{ items: HostelStudentOption[] }>(
      `${API_BASE_URL}/hostels/students/options`,
    );
  }
  hostelAllocations(options: { session?: string; hostelId?: string; status?: string }) {
    let params = new HttpParams();
    for (const [key, value] of Object.entries(options)) if (value) params = params.set(key, value);
    return this.http.get<{ items: HostelAllocation[] }>(
      `${API_BASE_URL}/hostels/allocations/list`,
      { params },
    );
  }
  createHostelAllocation(body: {
    studentAdmissionId: string;
    academicSession: string;
    roomId: string;
    bedNumber: number;
  }) {
    return this.http.post<{ item: HostelAllocation }>(`${API_BASE_URL}/hostels/allocations`, body);
  }
  vacateHostelAllocation(id: string, reason: string) {
    return this.http.patch<{ item: HostelAllocation }>(
      `${API_BASE_URL}/hostels/allocations/${id}/vacate`,
      { reason },
    );
  }
  transferHostelAllocation(
    id: string,
    body: { roomId: string; bedNumber: number; reason: string },
  ) {
    return this.http.patch<{ item: HostelAllocation }>(
      `${API_BASE_URL}/hostels/allocations/${id}/transfer`,
      body,
    );
  }
  hostelOverview(session: string) {
    return this.http.get<HostelOverview>(`${API_BASE_URL}/hostels/overview/summary`, {
      params: session ? { session } : {},
    });
  }
  feeBooks() {
    return this.http.get<{ items: FeeBook[] }>(`${API_BASE_URL}/fees/books`);
  }
  feeCourseOptions() {
    return this.http.get<{ items: MasterValue[] }>(`${API_BASE_URL}/fees/course-options`);
  }
  createFeeBook(body: Omit<FeeBook, '_id' | 'collegeName'>) {
    return this.http.post<{ item: FeeBook }>(`${API_BASE_URL}/fees/books`, body);
  }
  updateFeeBook(id: string, body: Partial<FeeBook>) {
    return this.http.patch<{ item: FeeBook }>(`${API_BASE_URL}/fees/books/${id}`, body);
  }
  deleteFeeBook(id: string) {
    return this.http.delete<void>(`${API_BASE_URL}/fees/books/${id}`);
  }
  feeHeads(bookId = '') {
    return this.http.get<{ items: FeeHead[] }>(`${API_BASE_URL}/fees/heads`, {
      params: bookId ? { bookId } : {},
    });
  }
  createFeeHead(body: {
    bookId: string;
    name: string;
    category: FeeHead['category'];
    priority?: number;
    placement?: string;
    referenceHeadId?: string;
    divideSemesterWise?: boolean;
  }) {
    return this.http.post<{ item: FeeHead }>(`${API_BASE_URL}/fees/heads`, body);
  }
  updateFeeHead(
    id: string,
    body: Partial<FeeHead> & { placement?: string; referenceHeadId?: string },
  ) {
    return this.http.patch<{ item: FeeHead }>(`${API_BASE_URL}/fees/heads/${id}`, body);
  }
  deleteFeeHead(id: string) {
    return this.http.delete<void>(`${API_BASE_URL}/fees/heads/${id}`);
  }
  scholarships(activeOnly = false) {
    return this.http.get<{ items: Scholarship[] }>(`${API_BASE_URL}/fees/scholarships`, {
      params: activeOnly ? { active: 'true' } : {},
    });
  }
  feeSchedules() {
    return this.http.get<{ items: FeeSchedule[] }>(`${API_BASE_URL}/fees/fee-schedules`);
  }
  createFeeSchedule(
    body: Omit<FeeSchedule, '_id' | 'universityName' | 'collegeName' | 'createdAt'>,
  ) {
    return this.http.post<{ item: FeeSchedule }>(`${API_BASE_URL}/fees/fee-schedules`, body);
  }
  updateFeeSchedule(id: string, body: Partial<FeeSchedule>) {
    return this.http.patch<{ item: FeeSchedule }>(`${API_BASE_URL}/fees/fee-schedules/${id}`, body);
  }
  publishFeeSchedule(id: string) {
    return this.http.post<{
      studentsProcessed: number;
      published: number;
      alreadyPublished: number;
    }>(`${API_BASE_URL}/fees/fee-schedules/${id}/publish`, {});
  }
  createScholarship(body: Pick<Scholarship, 'name' | 'valueMode' | 'type' | 'value' | 'isActive'>) {
    return this.http.post<{ item: Scholarship }>(`${API_BASE_URL}/fees/scholarships`, body);
  }
  updateScholarship(id: string, body: Partial<Scholarship>) {
    return this.http.patch<{ item: Scholarship }>(`${API_BASE_URL}/fees/scholarships/${id}`, body);
  }
  deleteScholarship(id: string) {
    return this.http.delete<void>(`${API_BASE_URL}/fees/scholarships/${id}`);
  }
  studentScholarships(studentAdmissionId: string) {
    return this.http.get<{
      student: Admission;
      assignments: StudentScholarship[];
      discounts: StudentDiscount[];
      ledgers: StudentFeeLedger[];
      scholarships: Scholarship[];
    }>(`${API_BASE_URL}/fees/student-scholarships/${studentAdmissionId}`);
  }
  assignStudentScholarship(
    studentAdmissionId: string,
    body: {
      scholarshipId: string;
      type?: 'percentage' | 'fixed';
      value?: number;
      recurring: boolean;
      targetLedgerId?: string;
    },
  ) {
    return this.http.post<{ item: StudentScholarship; ledgers: StudentFeeLedger[] }>(
      `${API_BASE_URL}/fees/student-scholarships/${studentAdmissionId}`,
      body,
    );
  }
  removeStudentScholarship(studentAdmissionId: string, assignmentId: string) {
    return this.http.delete<{ removed: boolean; ledgers: StudentFeeLedger[] }>(
      `${API_BASE_URL}/fees/student-scholarships/${studentAdmissionId}/${assignmentId}`,
    );
  }
  createStudentDiscount(
    studentAdmissionId: string,
    body: {
      name: string;
      type: 'percentage' | 'fixed';
      value: number;
      targetLedgerId: string;
      internalRemark: string;
    },
  ) {
    return this.http.post<{ item: StudentDiscount; ledgers: StudentFeeLedger[] }>(
      `${API_BASE_URL}/fees/student-discounts/${studentAdmissionId}`,
      body,
    );
  }
  removeStudentDiscount(studentAdmissionId: string, discountId: string) {
    return this.http.delete<{ removed: boolean; ledgers: StudentFeeLedger[] }>(
      `${API_BASE_URL}/fees/student-discounts/${studentAdmissionId}/${discountId}`,
    );
  }
  hostelFees(bookId = '') {
    return this.http.get<{ items: HostelFee[] }>(`${API_BASE_URL}/fees/hostel-fees`, {
      params: bookId ? { bookId } : {},
    });
  }
  createHostelFee(body: Omit<HostelFee, '_id' | 'bookCode' | 'hostelName' | 'feeHeadName'>) {
    return this.http.post<{ item: HostelFee }>(`${API_BASE_URL}/fees/hostel-fees`, body);
  }
  deleteHostelFee(id: string) {
    return this.http.delete<void>(`${API_BASE_URL}/fees/hostel-fees/${id}`);
  }
  courseFees(bookId = '', courseId = '', domicileId = '', studentTypeId = '', countryId = '') {
    let params = new HttpParams();
    if (bookId) params = params.set('bookId', bookId);
    if (courseId) params = params.set('courseId', courseId);
    if (domicileId) params = params.set('domicileId', domicileId);
    if (studentTypeId) params = params.set('studentTypeId', studentTypeId);
    if (countryId) params = params.set('countryId', countryId);
    return this.http.get<{ items: CourseFee[] }>(`${API_BASE_URL}/fees/course-fees`, { params });
  }
  createCourseFee(
    body: Omit<
      CourseFee,
      | '_id'
      | 'bookCode'
      | 'courseName'
      | 'domicileName'
      | 'studentTypeName'
      | 'countryName'
      | 'feeHeadName'
      | 'academicName'
      | 'category'
      | 'source'
      | 'sourceSheet'
    >,
  ) {
    return this.http.post<{ item: CourseFee }>(`${API_BASE_URL}/fees/course-fees`, body);
  }
  saveCourseFeeMatrix(body: {
    bookId: string;
    courseId: string;
    domicileId: string;
    studentTypeId: string;
    feeTypeId: string;
    countryId?: string | null;
    replaceExisting: boolean;
    rows: Array<{
      feeHeadId: string;
      amounts: Array<{ periodType: 'year' | 'semester'; periodNumber: number; amount: number }>;
    }>;
  }) {
    return this.http.post<{ saved: number }>(`${API_BASE_URL}/fees/course-fees/matrix`, body);
  }
  courseFeeDrafts(bookId = '') {
    const params = bookId ? new HttpParams().set('bookId', bookId) : undefined;
    return this.http.get<{ items: CourseFeeDraft[] }>(`${API_BASE_URL}/fees/course-fee-drafts`, {
      params,
    });
  }
  courseFeeDraft(id: string) {
    return this.http.get<{ item: CourseFeeDraft }>(`${API_BASE_URL}/fees/course-fee-drafts/${id}`);
  }
  createCourseFeeDraft(
    body: Omit<
      CourseFeeDraft,
      | '_id'
      | 'bookCode'
      | 'collegeName'
      | 'academicSession'
      | 'courseName'
      | 'status'
      | 'createdAt'
      | 'updatedAt'
    >,
  ) {
    return this.http.post<{ item: CourseFeeDraft }>(`${API_BASE_URL}/fees/course-fee-drafts`, body);
  }
  updateCourseFeeDraft(
    id: string,
    body: Omit<
      CourseFeeDraft,
      | '_id'
      | 'bookCode'
      | 'collegeName'
      | 'academicSession'
      | 'courseName'
      | 'status'
      | 'createdAt'
      | 'updatedAt'
    >,
  ) {
    return this.http.put<{ item: CourseFeeDraft }>(
      `${API_BASE_URL}/fees/course-fee-drafts/${id}`,
      body,
    );
  }
  deleteCourseFeeDraft(id: string) {
    return this.http.delete<void>(`${API_BASE_URL}/fees/course-fee-drafts/${id}`);
  }
  deleteCourseFee(id: string) {
    return this.http.delete<void>(`${API_BASE_URL}/fees/course-fees/${id}`);
  }
  previewCourseFeeImport(
    bookId: string,
    domicileId: string,
    studentTypeId: string,
    countryId: string,
    file: File,
  ) {
    const data = new FormData();
    data.append('bookId', bookId);
    data.append('domicileId', domicileId);
    data.append('studentTypeId', studentTypeId);
    if (countryId) data.append('countryId', countryId);
    data.append('file', file);
    return this.http.post<{ preview: FeeImportPreview }>(
      `${API_BASE_URL}/fees/course-fees/import/preview`,
      data,
    );
  }
  commitCourseFeeImport(body: {
    previewId: string;
    sheetMappings: Array<{ sheetName: string; courseIds: string[] }>;
    headMappings: Array<{ sourceHead: string; feeHeadId: string | null }>;
    replaceExisting: boolean;
  }) {
    return this.http.post<{ imported: number; mappedSheets: number }>(
      `${API_BASE_URL}/fees/course-fees/import/commit`,
      body,
    );
  }
}
