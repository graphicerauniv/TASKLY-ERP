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
  AcademicGroup,
  AcademicSection,
  AcademicSet,
  AcademicSubject,
  AcademicFaculty,
  AcademicRoom,
  AcademicTimetableEntry,
  AcademicAllocationInput,
  AcademicGroupSubject,
  TimetableMaster,
  TimetableStructure,
  TimetablePeriod,
  StudentTimetableReminder,
  StudentTimetablePreferences,
  FormSubmission,
  FacultySession,
  FacultyAttendanceClass,
  AttendanceStudent,
  StudentAttendanceSubject,
  StudentAttendanceAnalytics,
  StudentAttendanceDetail,
  AttendanceCorrectionRequest,
  AttendanceCorrectionRecord,
  AttendanceCorrectionFeed,
  StudentAttendanceRisk,
  StudentNotificationFeed,
  StudentNotificationPreferences,
  AttendanceReport,
  AttendanceReportConfig,
  AttendanceReportFeed,
  AttendanceReportPreview,
  ExamSchedule,
  ExamEligibilityResult,
  ExamShiftSchedule,
  ExamSubjectSchedule,
  SemesterRegistrationContext,
  StudentSemesterRegistration,
} from './models';
import type { StudentProfile } from '../features/student/profile/models/student-profile.model';

@Injectable({ providedIn: 'root' })
export class ApiService {
  private readonly http = inject(HttpClient);
  login(email: string, password: string) {
    return this.http.post<{
      token: string;
      refreshToken: string;
      admin: { name: string; email: string };
    }>(`${API_BASE_URL}/auth/login`, { email, password });
  }
  summary() {
    return this.http.get<Record<string, number>>(`${API_BASE_URL}/dashboard/summary`);
  }
  academicBootstrap() {
    return this.http.get<{
      masters: Array<MasterValue & { typeSlug: string }>;
      students: Admission[];
      groups: AcademicGroup[];
      sections: AcademicSection[];
      sets: AcademicSet[];
      subjects: AcademicSubject[];
      faculties: AcademicFaculty[];
      rooms: AcademicRoom[];
      groupSubjects: AcademicGroupSubject[];
      timetableMasters: TimetableMaster[];
      timetableStructures: TimetableStructure[];
      timetablePeriods: TimetablePeriod[];
    }>(`${API_BASE_URL}/academics/bootstrap`);
  }
  academicRecords<T>(resource: string, options: Record<string, string | number | boolean> = {}) {
    let params = new HttpParams();
    for (const [key, value] of Object.entries(options))
      if (value !== '') params = params.set(key, String(value));
    return this.http.get<{ items: T[] }>(`${API_BASE_URL}/academics/${resource}`, { params });
  }
  createAcademicRecord<T>(resource: string, body: unknown) {
    return this.http.post<{ item: T }>(`${API_BASE_URL}/academics/${resource}`, body);
  }
  updateAcademicRecord<T>(resource: string, itemId: string, body: unknown) {
    return this.http.patch<{ item: T }>(`${API_BASE_URL}/academics/${resource}/${itemId}`, body);
  }
  deleteAcademicRecord(resource: string, itemId: string) {
    return this.http.delete<{ deleted: boolean }>(
      `${API_BASE_URL}/academics/${resource}/${itemId}`,
    );
  }
  timetableAction<T>(
    entryId: string,
    action: 'update' | 'merge' | 'split' | 'remove-assignment',
    body: unknown = {},
  ) {
    return this.http.post<{ item: T }>(
      `${API_BASE_URL}/academics/timetables/${entryId}/${action}`,
      body,
    );
  }
  publishTimetable(body: unknown) {
    return this.http.post<{ published: number; publishedAt: string }>(
      `${API_BASE_URL}/academics/timetables/publish`,
      body,
    );
  }
  previewAcademicAllocations(rows: AcademicAllocationInput[]) {
    return this.http.post<{
      rows: Array<{ row: number; data: AcademicAllocationInput; error: string | null }>;
      valid: number;
      invalid: number;
    }>(`${API_BASE_URL}/academics/allocations/preview`, { rows });
  }
  eligibleAcademicStudents(options: {
    academicSession: string;
    semester: number;
    groupId: string;
    search?: string;
    page: number;
    limit: number;
  }) {
    return this.http.get<{
      items: Array<{
        _id: string;
        studentName?: string;
        studentId?: string;
        applicationNumber?: string;
        courseName?: string;
        currentAllocation?: string;
        validation: 'ready' | 'warning';
      }>;
      pagination: { page: number; limit: number; total: number; pages: number };
    }>(`${API_BASE_URL}/academics/allocations/students`, { params: { ...options } });
  }
  resolveAcademicStudents(studentIds: string[]) {
    return this.http.post<{
      items: Array<{
        _id: string;
        studentName?: string;
        studentId?: string;
        applicationNumber?: string;
        courseName?: string;
        currentAllocation?: string;
        validation: 'ready' | 'warning';
      }>;
      unresolved: string[];
    }>(`${API_BASE_URL}/academics/allocations/resolve-students`, { studentIds });
  }
  assignableAcademicSubjects(options: {
    academicSession: string;
    semester: number;
    groupId: string;
    search?: string;
    subjectType?: string;
    page: number;
    limit: number;
  }) {
    return this.http.get<{
      items: Array<
        AcademicSubject & {
          departmentName?: string;
          assigned: boolean;
          assignedRequirement?: 'required' | 'elective' | null;
        }
      >;
      pagination: { page: number; limit: number; total: number; pages: number };
    }>(`${API_BASE_URL}/academics/subject-assignments/subjects`, {
      params: { ...options },
    });
  }
  bulkAcademicAllocations(rows: unknown[]) {
    return this.http.post<{ assigned: number; errors: Array<{ row: number; message: string }> }>(
      `${API_BASE_URL}/academics/allocations/bulk`,
      { rows },
    );
  }
  bulkAssignSubjects(body: unknown) {
    return this.http.post<{ assigned: number }>(
      `${API_BASE_URL}/academics/group-subjects/bulk`,
      body,
    );
  }
  studentTimetable(token?: string | null) {
    return this.http.get<{
      assignment: unknown;
      subjects?: AcademicSubject[];
      structure?: TimetableStructure | null;
      periods?: TimetablePeriod[];
      items: AcademicTimetableEntry[];
      reminders?: StudentTimetableReminder[];
      preferences?: StudentTimetablePreferences;
      publishedAt?: string | null;
      serverTime?: string;
    }>(`${API_BASE_URL}/student-academics/timetable`, {
      ...(token ? { headers: { Authorization: `Bearer ${token}` } } : {}),
    });
  }
  studentSemesterRegistration(token: string) {
    return this.http.get<SemesterRegistrationContext>(
      `${API_BASE_URL}/student-academics/semester-registration`,
      { headers: { Authorization: `Bearer ${token}` } },
    );
  }
  registerStudentSemester(token: string) {
    return this.http.post<{
      item: StudentSemesterRegistration;
      alreadyRegistered: boolean;
    }>(
      `${API_BASE_URL}/student-academics/semester-registration`,
      {},
      { headers: { Authorization: `Bearer ${token}` } },
    );
  }
  studentTimetablePdf(token: string, weekStart: string, includeDetails = true) {
    return this.http.get(`${API_BASE_URL}/student-academics/timetable.pdf`, {
      params: { weekStart, includeDetails },
      headers: { Authorization: `Bearer ${token}` },
      responseType: 'blob',
    });
  }
  saveStudentTimetableReminder(token: string, entryId: string, minutesBefore = 15) {
    return this.http.put<{ reminder: StudentTimetableReminder }>(
      `${API_BASE_URL}/student-academics/timetable/reminders/${entryId}`,
      { minutesBefore },
      { headers: { Authorization: `Bearer ${token}` } },
    );
  }
  deleteStudentTimetableReminder(token: string, entryId: string) {
    return this.http.delete(`${API_BASE_URL}/student-academics/timetable/reminders/${entryId}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
  }
  saveStudentTimetablePreferences(token: string, preferences: StudentTimetablePreferences) {
    return this.http.put<{ preferences: StudentTimetablePreferences }>(
      `${API_BASE_URL}/student-academics/timetable/preferences`,
      preferences,
      { headers: { Authorization: `Bearer ${token}` } },
    );
  }
  facultyAttendanceClasses(token: string, date: string) {
    return this.http.get<{ facultyMapped: boolean; date: string; items: FacultyAttendanceClass[] }>(
      `${API_BASE_URL}/faculty-attendance/classes`,
      { params: { date }, headers: { Authorization: `Bearer ${token}` } },
    );
  }
  facultyAttendanceRoster(token: string, entryId: string, date: string) {
    return this.http.get<{ item: AcademicTimetableEntry; students: AttendanceStudent[] }>(
      `${API_BASE_URL}/faculty-attendance/classes/${entryId}`,
      { params: { date }, headers: { Authorization: `Bearer ${token}` } },
    );
  }
  saveFacultyAttendance(
    token: string,
    entryId: string,
    date: string,
    rows: Array<{ studentAdmissionId: string; status: 'present' | 'absent' }>,
  ) {
    return this.http.put<{ saved: number; sessionId: string }>(
      `${API_BASE_URL}/faculty-attendance/classes/${entryId}`,
      { date, rows },
      { headers: { Authorization: `Bearer ${token}` } },
    );
  }
  studentAttendance(token: string) {
    return this.http.get<{
      subjects: StudentAttendanceSubject[];
      overall: {
        totalLectures: number;
        presentLectures: number;
        absentLectures: number;
        attendancePercentage: number;
      };
    }>(`${API_BASE_URL}/student-attendance`, {
      headers: { Authorization: `Bearer ${token}` },
    });
  }
  studentAttendanceAnalytics(token: string) {
    return this.http.get<StudentAttendanceAnalytics>(
      `${API_BASE_URL}/student-attendance/analytics`,
      {
        headers: { Authorization: `Bearer ${token}` },
      },
    );
  }
  studentAttendanceRisk(token: string) {
    return this.http.get<StudentAttendanceRisk>(`${API_BASE_URL}/student-attendance/risk`, {
      headers: { Authorization: `Bearer ${token}` },
    });
  }
  studentAttendanceAlerts(token: string) {
    return this.http.get<StudentNotificationFeed>(`${API_BASE_URL}/student-attendance/alerts`, {
      headers: { Authorization: `Bearer ${token}` },
    });
  }
  markStudentAttendanceAlertsRead(token: string, body: { ids?: string[]; all?: boolean }) {
    return this.http.post<{ readIds: string[] }>(
      `${API_BASE_URL}/student-attendance/alerts/read`,
      body,
      { headers: { Authorization: `Bearer ${token}` } },
    );
  }
  studentAttendanceAlertPreferences(token: string) {
    return this.http.get<{ preferences: StudentNotificationPreferences }>(
      `${API_BASE_URL}/student-attendance/alert-preferences`,
      { headers: { Authorization: `Bearer ${token}` } },
    );
  }
  saveStudentAttendanceAlertPreferences(
    token: string,
    preferences: StudentNotificationPreferences,
  ) {
    return this.http.put<{ preferences: StudentNotificationPreferences }>(
      `${API_BASE_URL}/student-attendance/alert-preferences`,
      preferences,
      { headers: { Authorization: `Bearer ${token}` } },
    );
  }
  studentSubjectAttendance(token: string, subjectId: string) {
    return this.http.get<StudentAttendanceDetail>(
      `${API_BASE_URL}/student-attendance/subjects/${subjectId}`,
      { headers: { Authorization: `Bearer ${token}` } },
    );
  }
  createAttendanceCorrectionRequest(token: string, recordId: string, reason: string) {
    return this.http.post<{ item: AttendanceCorrectionRequest }>(
      `${API_BASE_URL}/student-attendance/correction-requests`,
      { recordId, reason },
      { headers: { Authorization: `Bearer ${token}` } },
    );
  }
  studentAttendanceCorrectionRecords(token: string) {
    return this.http.get<{ items: AttendanceCorrectionRecord[] }>(
      `${API_BASE_URL}/student-attendance/correction-records`,
      { headers: { Authorization: `Bearer ${token}` } },
    );
  }
  studentAttendanceCorrectionRequests(token: string) {
    return this.http.get<AttendanceCorrectionFeed>(
      `${API_BASE_URL}/student-attendance/correction-requests`,
      { headers: { Authorization: `Bearer ${token}` } },
    );
  }
  studentAttendanceCorrectionRequest(token: string, requestId: string) {
    return this.http.get<{ item: AttendanceCorrectionRequest }>(
      `${API_BASE_URL}/student-attendance/correction-requests/${requestId}`,
      { headers: { Authorization: `Bearer ${token}` } },
    );
  }
  studentAttendanceCorrectionAttachment(token: string, requestId: string, key: string) {
    return this.http.get(
      `${API_BASE_URL}/student-attendance/correction-requests/${requestId}/attachment`,
      {
        params: { key },
        headers: { Authorization: `Bearer ${token}` },
        responseType: 'blob',
      },
    );
  }
  createStudentAttendanceCorrection(token: string, body: FormData) {
    return this.http.post<{ item: AttendanceCorrectionRequest }>(
      `${API_BASE_URL}/student-attendance/correction-requests`,
      body,
      { headers: { Authorization: `Bearer ${token}` } },
    );
  }
  respondStudentAttendanceCorrection(token: string, requestId: string, body: FormData) {
    return this.http.post<{ item: AttendanceCorrectionRequest }>(
      `${API_BASE_URL}/student-attendance/correction-requests/${requestId}/respond`,
      body,
      { headers: { Authorization: `Bearer ${token}` } },
    );
  }
  withdrawStudentAttendanceCorrection(token: string, requestId: string) {
    return this.http.post<{ message: string }>(
      `${API_BASE_URL}/student-attendance/correction-requests/${requestId}/withdraw`,
      {},
      { headers: { Authorization: `Bearer ${token}` } },
    );
  }
  studentAttendanceReports(token: string) {
    return this.http.get<AttendanceReportFeed>(`${API_BASE_URL}/student-attendance/reports`, {
      headers: { Authorization: `Bearer ${token}` },
    });
  }
  previewStudentAttendanceReport(token: string, body: AttendanceReportConfig) {
    return this.http.post<{ preview: AttendanceReportPreview }>(
      `${API_BASE_URL}/student-attendance/reports/preview`,
      body,
      { headers: { Authorization: `Bearer ${token}` } },
    );
  }
  createStudentAttendanceReport(token: string, body: AttendanceReportConfig) {
    return this.http.post<{ item: AttendanceReport }>(
      `${API_BASE_URL}/student-attendance/reports`,
      body,
      { headers: { Authorization: `Bearer ${token}` } },
    );
  }
  downloadStudentAttendanceReport(token: string, reportId: string) {
    return this.http.get(`${API_BASE_URL}/student-attendance/reports/${reportId}/download`, {
      headers: { Authorization: `Bearer ${token}` },
      responseType: 'blob',
    });
  }
  regenerateStudentAttendanceReport(token: string, reportId: string) {
    return this.http.post<{ message: string }>(
      `${API_BASE_URL}/student-attendance/reports/${reportId}/regenerate`,
      {},
      { headers: { Authorization: `Bearer ${token}` } },
    );
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
    return this.http.get<{
      items: MasterValue[];
      pagination: { page: number; limit: number; total: number; pages: number };
    }>(`${API_BASE_URL}/master-data/${slug}/values`, { params });
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
  form(id: string) {
    return this.http.get<{ item: AdmissionForm }>(`${API_BASE_URL}/forms/${id}`);
  }
  formMappingOptions() {
    return this.http.get<{ items: Array<MasterValue & { typeSlug: string }> }>(
      `${API_BASE_URL}/forms/mapping-options`,
    );
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
  applicationSubmissions(purpose: string, formId: string) {
    return this.http.get<{ items: FormSubmission[]; form: AdmissionForm }>(
      `${API_BASE_URL}/forms/submissions/${encodeURIComponent(purpose)}/${encodeURIComponent(formId)}`,
    );
  }
  databaseSubmissions(sectionId: string) {
    return this.http.get<{
      section: { id: string; name: string };
      items: FormSubmission[];
    }>(`${API_BASE_URL}/forms/database/${encodeURIComponent(sectionId)}`);
  }
  formSubmission(purpose: string, submissionId: string) {
    return this.http.get<{ item: FormSubmission }>(
      `${API_BASE_URL}/forms/submission/${encodeURIComponent(purpose)}/${encodeURIComponent(submissionId)}`,
    );
  }
  updateFormSubmission(
    purpose: string,
    submissionId: string,
    responses: Record<string, unknown>,
    repeatableResponses: Record<string, Record<string, unknown>[]>,
  ) {
    return this.http.patch<{ item: FormSubmission }>(
      `${API_BASE_URL}/forms/submission/${encodeURIComponent(purpose)}/${encodeURIComponent(submissionId)}`,
      { responses, repeatableResponses },
    );
  }
  submitAdminForm(
    formId: string,
    responses: Record<string, unknown>,
    repeatableResponses: Record<string, Record<string, unknown>[]>,
  ) {
    return this.http.post<{ item: FormSubmission }>(
      `${API_BASE_URL}/forms/${encodeURIComponent(formId)}/submissions`,
      { responses, repeatableResponses },
    );
  }
  uploadAdminForm(formId: string, fieldId: string, file: File) {
    const data = new FormData();
    data.append('fieldId', fieldId);
    data.append('file', file);
    return this.http.post<{ file: { name: string; key: string; url: string } }>(
      `${API_BASE_URL}/forms/${encodeURIComponent(formId)}/upload`,
      data,
    );
  }
  admissions(
    options: {
      status?: string;
      search?: string;
      page?: number;
      limit?: number;
      application?: string;
      studentId?: string;
      studentName?: string;
      university?: string;
      college?: string;
      branch?: string;
      course?: string;
      session?: string;
      formId?: string;
      isActive?: boolean;
    } = {},
  ) {
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
    return this.http.post<{
      item: Admission;
      feeGeneration: {
        success: boolean;
        createdKinds: Array<'academic' | 'hostel'>;
        skippedKinds: Array<{ kind: 'academic' | 'hostel'; reason: string }>;
        reason?: string;
        preparedNextPeriod?: string | null;
      };
    }>(`${API_BASE_URL}/admissions/${id}/approve`, body);
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
    return this.http.post<{ token: string; refreshToken: string; student: StudentSession }>(
      `${API_BASE_URL}/auth/student/login`,
      { studentId, password },
    );
  }
  facultyLogin(employeeId: string, password: string) {
    return this.http.post<{ token: string; faculty: FacultySession }>(
      `${API_BASE_URL}/auth/faculty/login`,
      { employeeId, password },
    );
  }
  changeFacultyPassword(token: string, password: string) {
    return this.http.post<{ token: string; faculty: FacultySession }>(
      `${API_BASE_URL}/auth/faculty/change-password`,
      { password },
      { headers: { Authorization: `Bearer ${token}` } },
    );
  }
  facultyProfile(token: string) {
    return this.http.get<{ faculty: FacultySession }>(`${API_BASE_URL}/auth/faculty/profile`, {
      headers: { Authorization: `Bearer ${token}` },
    });
  }
  changeStudentPassword(token: string, password: string) {
    return this.http.post<{ token: string; refreshToken: string; student: StudentSession }>(
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
  financeDirectory(
    section: 'payments' | 'credits' | 'discounts',
    options: {
      page: number;
      pageSize: number;
      search: string;
      status: string;
      channel: string;
    },
  ) {
    const params = new HttpParams({ fromObject: { section, ...options } });
    return this.http.get<{
      items: Array<FeePayment | FeeCredit | StudentDiscount>;
      pagination: { page: number; pageSize: number; total: number; totalPages: number };
    }>(`${API_BASE_URL}/payments/admin/accounts/directory`, { params });
  }
  financeSummary() {
    return this.http.get<{
      successfulPayments: number;
      collectedAmount: number;
      pendingPayments: number;
      availableCredit: number;
    }>(`${API_BASE_URL}/payments/admin/accounts/summary`);
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
  activeForm(
    options: {
      purpose?: AdmissionForm['purpose'];
      academicSessionId?: string;
      universityId?: string;
      collegeId?: string;
      departmentId?: string;
      levelId?: string;
    } = {},
  ) {
    let params = new HttpParams();
    for (const [key, value] of Object.entries(options)) if (value) params = params.set(key, value);
    return this.http.get<{ item: AdmissionForm }>(`${API_BASE_URL}/public/forms/active`, {
      params,
    });
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
  deleteFeeSchedule(id: string) {
    return this.http.delete<{ deleted: boolean }>(`${API_BASE_URL}/fees/fee-schedules/${id}`);
  }
  publishFeeSchedule(id: string, force = false) {
    return this.http.post<{
      studentsProcessed: number;
      published: number;
      alreadyPublished: number;
      scheduled: number;
      completed: boolean;
      promoted: number;
    }>(`${API_BASE_URL}/fees/fee-schedules/${id}/publish`, { force });
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

  examMasterBootstrap() {
    return this.http.get<{
      buildings: import('./models').ExamBuilding[];
      floors: import('./models').ExamFloor[];
      rooms: import('./models').ExamRoom[];
    }>(`${API_BASE_URL}/exam-master/bootstrap`);
  }
  examMasterRecords<T>(resource: string) {
    return this.http.get<{ items: T[] }>(`${API_BASE_URL}/exam-master/${resource}`);
  }
  createExamMasterRecord<T>(resource: string, body: unknown) {
    return this.http.post<{ item: T }>(`${API_BASE_URL}/exam-master/${resource}`, body);
  }
  updateExamMasterRecord<T>(resource: string, itemId: string, body: unknown) {
    return this.http.patch<{ item: T }>(`${API_BASE_URL}/exam-master/${resource}/${itemId}`, body);
  }
  deleteExamMasterRecord(resource: string, itemId: string) {
    return this.http.delete<{ deleted: boolean }>(
      `${API_BASE_URL}/exam-master/${resource}/${itemId}`,
    );
  }
  examSchedules() {
    return this.http.get<{ items: ExamSchedule[] }>(`${API_BASE_URL}/exams/schedules`);
  }
  createExamSchedule(
    body: Omit<
      ExamSchedule,
      '_id' | 'academicSession' | 'universityName' | 'collegeName' | 'examTypeName'
    >,
  ) {
    return this.http.post<{ item: ExamSchedule }>(`${API_BASE_URL}/exams/schedules`, body);
  }
  updateExamSchedule(scheduleId: string, body: Partial<ExamSchedule>) {
    return this.http.patch<{ item: ExamSchedule }>(
      `${API_BASE_URL}/exams/schedules/${scheduleId}`,
      body,
    );
  }
  deleteExamSchedule(scheduleId: string) {
    return this.http.delete<{ deleted: boolean }>(`${API_BASE_URL}/exams/schedules/${scheduleId}`);
  }
  examShiftSchedules() {
    return this.http.get<{ items: ExamShiftSchedule[] }>(`${API_BASE_URL}/exams/shifts`);
  }
  createExamShiftSchedule(body: Partial<ExamShiftSchedule>) {
    return this.http.post<{ item: ExamShiftSchedule }>(`${API_BASE_URL}/exams/shifts`, body);
  }
  updateExamShiftSchedule(shiftId: string, body: Partial<ExamShiftSchedule>) {
    return this.http.patch<{ item: ExamShiftSchedule }>(
      `${API_BASE_URL}/exams/shifts/${shiftId}`,
      body,
    );
  }
  deleteExamShiftSchedule(shiftId: string) {
    return this.http.delete<{ deleted: boolean }>(`${API_BASE_URL}/exams/shifts/${shiftId}`);
  }
  examSubjectOptions(options: {
    academicSessionId: string;
    universityId: string;
    collegeId: string;
    departmentId: string;
    levelId: string;
    courseId: string;
    semester: number;
  }) {
    return this.http.get<{ items: AcademicSubject[] }>(`${API_BASE_URL}/exams/subject-options`, {
      params: { ...options },
    });
  }
  examSubjectSchedules() {
    return this.http.get<{ items: ExamSubjectSchedule[] }>(
      `${API_BASE_URL}/exams/subject-schedules`,
    );
  }
  importExamSubjectSchedules(file: File) {
    const data = new FormData();
    data.append('file', file);
    return this.http.post<{
      imported: number;
      failed: number;
      errors: Array<{ row: number; message: string }>;
    }>(`${API_BASE_URL}/exams/subject-schedules/import`, data);
  }
  examEligibleStudents(subjectScheduleId: string) {
    return this.http.get<ExamEligibilityResult>(`${API_BASE_URL}/exams/eligibility`, {
      params: { subjectScheduleId },
    });
  }
  createExamSubjectSchedule(body: Partial<ExamSubjectSchedule>) {
    return this.http.post<{ item: ExamSubjectSchedule }>(
      `${API_BASE_URL}/exams/subject-schedules`,
      body,
    );
  }
  updateExamSubjectSchedule(itemId: string, body: Partial<ExamSubjectSchedule>) {
    return this.http.patch<{ item: ExamSubjectSchedule }>(
      `${API_BASE_URL}/exams/subject-schedules/${itemId}`,
      body,
    );
  }
  deleteExamSubjectSchedule(itemId: string) {
    return this.http.delete<{ deleted: boolean }>(
      `${API_BASE_URL}/exams/subject-schedules/${itemId}`,
    );
  }
}
