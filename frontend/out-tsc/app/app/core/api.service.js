import { HttpClient, HttpParams } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { API_BASE_URL } from './runtime-config';
import * as i0 from "@angular/core";
export class ApiService {
    http = inject(HttpClient);
    login(email, password) {
        return this.http.post(`${API_BASE_URL}/auth/login`, { email, password });
    }
    summary() {
        return this.http.get(`${API_BASE_URL}/dashboard/summary`);
    }
    academicBootstrap() {
        return this.http.get(`${API_BASE_URL}/academics/bootstrap`);
    }
    academicRecords(resource, options = {}) {
        let params = new HttpParams();
        for (const [key, value] of Object.entries(options))
            if (value !== '')
                params = params.set(key, String(value));
        return this.http.get(`${API_BASE_URL}/academics/${resource}`, { params });
    }
    createAcademicRecord(resource, body) {
        return this.http.post(`${API_BASE_URL}/academics/${resource}`, body);
    }
    updateAcademicRecord(resource, itemId, body) {
        return this.http.patch(`${API_BASE_URL}/academics/${resource}/${itemId}`, body);
    }
    deleteAcademicRecord(resource, itemId) {
        return this.http.delete(`${API_BASE_URL}/academics/${resource}/${itemId}`);
    }
    timetableAction(entryId, action, body = {}) {
        return this.http.post(`${API_BASE_URL}/academics/timetables/${entryId}/${action}`, body);
    }
    publishTimetable(body) {
        return this.http.post(`${API_BASE_URL}/academics/timetables/publish`, body);
    }
    previewAcademicAllocations(rows) {
        return this.http.post(`${API_BASE_URL}/academics/allocations/preview`, { rows });
    }
    bulkAcademicAllocations(rows) {
        return this.http.post(`${API_BASE_URL}/academics/allocations/bulk`, { rows });
    }
    bulkAssignSubjects(body) {
        return this.http.post(`${API_BASE_URL}/academics/group-subjects/bulk`, body);
    }
    studentTimetable() {
        return this.http.get(`${API_BASE_URL}/student-academics/timetable`);
    }
    masterTypes() {
        return this.http.get(`${API_BASE_URL}/master-data/types`);
    }
    createMasterType(body) {
        return this.http.post(`${API_BASE_URL}/master-data/types`, body);
    }
    masterValues(slug, options = {}) {
        let params = new HttpParams().set('limit', 100);
        for (const [key, value] of Object.entries(options))
            if (value !== undefined && value !== '')
                params = params.set(key, String(value));
        return this.http.get(`${API_BASE_URL}/master-data/${slug}/values`, { params });
    }
    createMasterValue(slug, body) {
        return this.http.post(`${API_BASE_URL}/master-data/${slug}/values`, body);
    }
    updateMasterValue(slug, id, body) {
        return this.http.patch(`${API_BASE_URL}/master-data/${slug}/values/${id}`, body);
    }
    deleteMasterValue(slug, id) {
        return this.http.delete(`${API_BASE_URL}/master-data/${slug}/values/${id}`);
    }
    importMasterValues(slug, file) {
        const data = new FormData();
        data.append('file', file);
        return this.http.post(`${API_BASE_URL}/master-data/${slug}/import`, data);
    }
    forms() {
        return this.http.get(`${API_BASE_URL}/forms`);
    }
    form(id) {
        return this.http.get(`${API_BASE_URL}/forms/${id}`);
    }
    formMappingOptions() {
        return this.http.get(`${API_BASE_URL}/forms/mapping-options`);
    }
    createForm(body) {
        return this.http.post(`${API_BASE_URL}/forms`, body);
    }
    saveForm(form) {
        return this.http.put(`${API_BASE_URL}/forms/${form._id}`, form);
    }
    deleteForm(id) {
        return this.http.delete(`${API_BASE_URL}/forms/${id}`);
    }
    applicationSubmissions(purpose, formId) {
        return this.http.get(`${API_BASE_URL}/forms/submissions/${encodeURIComponent(purpose)}/${encodeURIComponent(formId)}`);
    }
    databaseSubmissions(sectionId) {
        return this.http.get(`${API_BASE_URL}/forms/database/${encodeURIComponent(sectionId)}`);
    }
    formSubmission(purpose, submissionId) {
        return this.http.get(`${API_BASE_URL}/forms/submission/${encodeURIComponent(purpose)}/${encodeURIComponent(submissionId)}`);
    }
    updateFormSubmission(purpose, submissionId, responses, repeatableResponses) {
        return this.http.patch(`${API_BASE_URL}/forms/submission/${encodeURIComponent(purpose)}/${encodeURIComponent(submissionId)}`, { responses, repeatableResponses });
    }
    submitAdminForm(formId, responses, repeatableResponses) {
        return this.http.post(`${API_BASE_URL}/forms/${encodeURIComponent(formId)}/submissions`, { responses, repeatableResponses });
    }
    uploadAdminForm(formId, fieldId, file) {
        const data = new FormData();
        data.append('fieldId', fieldId);
        data.append('file', file);
        return this.http.post(`${API_BASE_URL}/forms/${encodeURIComponent(formId)}/upload`, data);
    }
    admissions(options = {}) {
        let params = new HttpParams();
        for (const [key, value] of Object.entries(options))
            if (value !== undefined && value !== '')
                params = params.set(key, String(value));
        return this.http.get(`${API_BASE_URL}/admissions`, { params });
    }
    admission(id) {
        return this.http.get(`${API_BASE_URL}/admissions/${id}`);
    }
    deleteAdmission(id) {
        return this.http.delete(`${API_BASE_URL}/admissions/${id}`);
    }
    updateAdmission(admission) {
        return this.http.patch(`${API_BASE_URL}/admissions/${admission._id}`, {
            currentSectionId: admission.currentSectionId,
            currentAcademicYear: admission.currentAcademicYear,
            currentSemester: admission.currentSemester,
            feeFrequency: admission.feeFrequency,
            responses: admission.responses,
            repeatableResponses: admission.repeatableResponses,
        });
    }
    submitAdminAdmission(id) {
        return this.http.post(`${API_BASE_URL}/admissions/${id}/submit`, {});
    }
    approveAdmission(id, body) {
        return this.http.post(`${API_BASE_URL}/admissions/${id}/approve`, body);
    }
    setAdmissionFeePeriod(id, body) {
        return this.http.patch(`${API_BASE_URL}/admissions/${id}`, {
            ...body,
        });
    }
    resetStudentPassword(id, body) {
        return this.http.post(`${API_BASE_URL}/admissions/${id}/password`, body);
    }
    studentLogin(studentId, password) {
        return this.http.post(`${API_BASE_URL}/auth/student/login`, { studentId, password });
    }
    changeStudentPassword(token, password) {
        return this.http.post(`${API_BASE_URL}/auth/student/change-password`, { password }, { headers: { Authorization: `Bearer ${token}` } });
    }
    studentFees(token) {
        return this.http.get(`${API_BASE_URL}/auth/student/fees`, { headers: { Authorization: `Bearer ${token}` } });
    }
    studentProfile(token) {
        return this.http.get(`${API_BASE_URL}/auth/student/profile`, {
            headers: { Authorization: `Bearer ${token}` },
        });
    }
    studentPaymentHistory(token) {
        return this.http.get(`${API_BASE_URL}/payments/student/history`, { headers: { Authorization: `Bearer ${token}` } });
    }
    createStudentPaymentOrder(token, amount, ledgerId, kind = 'academic') {
        return this.http.post(`${API_BASE_URL}/payments/student/orders`, { amount, ledgerId, kind }, { headers: { Authorization: `Bearer ${token}` } });
    }
    verifyStudentPayment(token, body) {
        return this.http.post(`${API_BASE_URL}/payments/student/verify`, body, {
            headers: { Authorization: `Bearer ${token}` },
        });
    }
    downloadStudentReceipt(token, paymentId) {
        return this.http.get(`${API_BASE_URL}/payments/student/receipt/${paymentId}`, {
            headers: { Authorization: `Bearer ${token}` },
            responseType: 'blob',
        });
    }
    generateStudentFees(studentAdmissionIds) {
        return this.http.post(`${API_BASE_URL}/fees/student-ledgers/generate`, { studentAdmissionIds });
    }
    recalculateStudentFees(studentAdmissionIds) {
        return this.http.post(`${API_BASE_URL}/fees/student-ledgers/recalculate`, { studentAdmissionIds });
    }
    feeProgressionCandidates(mode) {
        return this.http.get(`${API_BASE_URL}/fees/student-ledgers/progression-candidates`, { params: { mode } });
    }
    progressStudentFees(body) {
        return this.http.post(`${API_BASE_URL}/fees/student-ledgers/progress`, body);
    }
    studentPromotions(filters) {
        let params = new HttpParams();
        for (const [key, value] of Object.entries(filters))
            if (value !== undefined && value !== null && value !== '')
                params = params.set(key, value);
        return this.http.get(`${API_BASE_URL}/fees/student-promotions`, {
            params,
        });
    }
    promoteStudents(progressionIds) {
        return this.http.post(`${API_BASE_URL}/fees/student-promotions/promote`, { progressionIds });
    }
    accounts(search = '', status = '') {
        let params = new HttpParams();
        if (search)
            params = params.set('search', search);
        if (status)
            params = params.set('status', status);
        return this.http.get(`${API_BASE_URL}/payments/admin/accounts`, { params });
    }
    downloadAdminReceipt(paymentId) {
        return this.http.get(`${API_BASE_URL}/payments/admin/accounts/${paymentId}/receipt`, {
            responseType: 'blob',
        });
    }
    offlinePaymentWorkspace(studentAdmissionId) {
        return this.http.get(`${API_BASE_URL}/payments/admin/offline/${studentAdmissionId}`);
    }
    createOfflinePayment(studentAdmissionId, body) {
        return this.http.post(`${API_BASE_URL}/payments/admin/offline/${studentAdmissionId}`, body);
    }
    deleteStudentFees(studentAdmissionId) {
        return this.http.delete(`${API_BASE_URL}/fees/student-ledgers/student/${studentAdmissionId}`);
    }
    uploadAdminAdmission(id, fieldId, file) {
        const data = new FormData();
        data.append('fieldId', fieldId);
        data.append('file', file);
        return this.http.post(`${API_BASE_URL}/admissions/${id}/upload`, data);
    }
    activeForm(options = {}) {
        let params = new HttpParams();
        for (const [key, value] of Object.entries(options))
            if (value)
                params = params.set(key, value);
        return this.http.get(`${API_BASE_URL}/public/forms/active`, {
            params,
        });
    }
    publicOptions(slug, parentId, search) {
        let params = new HttpParams();
        if (parentId)
            params = params.set('parentId', parentId);
        if (search)
            params = params.set('search', search);
        return this.http.get(`${API_BASE_URL}/public/master-data/${slug}/options`, { params });
    }
    startAdmission(formId) {
        return this.http.post(`${API_BASE_URL}/public/admissions`, { formId });
    }
    getAdmission(id, key) {
        return this.http.get(`${API_BASE_URL}/public/admissions/${id}`, {
            headers: { 'x-admission-key': key },
        });
    }
    saveAdmission(admission, key) {
        return this.http.patch(`${API_BASE_URL}/public/admissions/${admission._id}`, {
            currentSectionId: admission.currentSectionId,
            responses: admission.responses,
            repeatableResponses: admission.repeatableResponses,
        }, { headers: { 'x-admission-key': key } });
    }
    submitAdmission(id, key) {
        return this.http.post(`${API_BASE_URL}/public/admissions/${id}/submit`, {}, { headers: { 'x-admission-key': key } });
    }
    upload(id, key, fieldId, file) {
        const data = new FormData();
        data.append('fieldId', fieldId);
        data.append('file', file);
        return this.http.post(`${API_BASE_URL}/public/admissions/${id}/upload`, data, { headers: { 'x-admission-key': key } });
    }
    hostels(session = '') {
        return this.http.get(`${API_BASE_URL}/hostels`, {
            params: session ? { session } : {},
        });
    }
    createHostel(body) {
        return this.http.post(`${API_BASE_URL}/hostels`, body);
    }
    updateHostel(id, body) {
        return this.http.patch(`${API_BASE_URL}/hostels/${id}`, body);
    }
    deleteHostel(id) {
        return this.http.delete(`${API_BASE_URL}/hostels/${id}`);
    }
    hostelStructure(hostelId) {
        return this.http.get(`${API_BASE_URL}/hostels/structure/list`, { params: { hostelId } });
    }
    createHostelBlock(body) {
        return this.http.post(`${API_BASE_URL}/hostels/blocks`, body);
    }
    updateHostelBlock(id, name) {
        return this.http.patch(`${API_BASE_URL}/hostels/blocks/${id}`, { name });
    }
    deleteHostelBlock(id) {
        return this.http.delete(`${API_BASE_URL}/hostels/blocks/${id}`);
    }
    createHostelFloor(body) {
        return this.http.post(`${API_BASE_URL}/hostels/floors`, body);
    }
    updateHostelFloor(id, name) {
        return this.http.patch(`${API_BASE_URL}/hostels/floors/${id}`, { name });
    }
    deleteHostelFloor(id) {
        return this.http.delete(`${API_BASE_URL}/hostels/floors/${id}`);
    }
    hostelRooms(options) {
        let params = new HttpParams();
        for (const [key, value] of Object.entries(options))
            if (value)
                params = params.set(key, value);
        return this.http.get(`${API_BASE_URL}/hostels/rooms/options`, {
            params,
        });
    }
    updateHostelRoom(id, body) {
        return this.http.patch(`${API_BASE_URL}/hostels/rooms/${id}`, body);
    }
    createHostelRoom(body) {
        return this.http.post(`${API_BASE_URL}/hostels/rooms/manual`, body);
    }
    generateHostelRooms(body) {
        return this.http.post(`${API_BASE_URL}/hostels/rooms/generate`, body);
    }
    updateHostelRoomDetails(id, body) {
        return this.http.patch(`${API_BASE_URL}/hostels/rooms/${id}/details`, body);
    }
    deleteHostelRoom(id) {
        return this.http.delete(`${API_BASE_URL}/hostels/rooms/${id}`);
    }
    hostelCapacityOptions() {
        return this.http.get(`${API_BASE_URL}/hostels/capacity/options`);
    }
    saveHostelRoomCapacity(id, body) {
        return this.http.put(`${API_BASE_URL}/hostels/rooms/${id}/capacity`, body);
    }
    hostelStudents() {
        return this.http.get(`${API_BASE_URL}/hostels/students/options`);
    }
    hostelAllocations(options) {
        let params = new HttpParams();
        for (const [key, value] of Object.entries(options))
            if (value)
                params = params.set(key, value);
        return this.http.get(`${API_BASE_URL}/hostels/allocations/list`, { params });
    }
    createHostelAllocation(body) {
        return this.http.post(`${API_BASE_URL}/hostels/allocations`, body);
    }
    vacateHostelAllocation(id, reason) {
        return this.http.patch(`${API_BASE_URL}/hostels/allocations/${id}/vacate`, { reason });
    }
    transferHostelAllocation(id, body) {
        return this.http.patch(`${API_BASE_URL}/hostels/allocations/${id}/transfer`, body);
    }
    hostelOverview(session) {
        return this.http.get(`${API_BASE_URL}/hostels/overview/summary`, {
            params: session ? { session } : {},
        });
    }
    feeBooks() {
        return this.http.get(`${API_BASE_URL}/fees/books`);
    }
    feeCourseOptions() {
        return this.http.get(`${API_BASE_URL}/fees/course-options`);
    }
    createFeeBook(body) {
        return this.http.post(`${API_BASE_URL}/fees/books`, body);
    }
    updateFeeBook(id, body) {
        return this.http.patch(`${API_BASE_URL}/fees/books/${id}`, body);
    }
    deleteFeeBook(id) {
        return this.http.delete(`${API_BASE_URL}/fees/books/${id}`);
    }
    feeHeads(bookId = '') {
        return this.http.get(`${API_BASE_URL}/fees/heads`, {
            params: bookId ? { bookId } : {},
        });
    }
    createFeeHead(body) {
        return this.http.post(`${API_BASE_URL}/fees/heads`, body);
    }
    updateFeeHead(id, body) {
        return this.http.patch(`${API_BASE_URL}/fees/heads/${id}`, body);
    }
    deleteFeeHead(id) {
        return this.http.delete(`${API_BASE_URL}/fees/heads/${id}`);
    }
    scholarships(activeOnly = false) {
        return this.http.get(`${API_BASE_URL}/fees/scholarships`, {
            params: activeOnly ? { active: 'true' } : {},
        });
    }
    feeSchedules() {
        return this.http.get(`${API_BASE_URL}/fees/fee-schedules`);
    }
    createFeeSchedule(body) {
        return this.http.post(`${API_BASE_URL}/fees/fee-schedules`, body);
    }
    updateFeeSchedule(id, body) {
        return this.http.patch(`${API_BASE_URL}/fees/fee-schedules/${id}`, body);
    }
    deleteFeeSchedule(id) {
        return this.http.delete(`${API_BASE_URL}/fees/fee-schedules/${id}`);
    }
    publishFeeSchedule(id, force = false) {
        return this.http.post(`${API_BASE_URL}/fees/fee-schedules/${id}/publish`, { force });
    }
    createScholarship(body) {
        return this.http.post(`${API_BASE_URL}/fees/scholarships`, body);
    }
    updateScholarship(id, body) {
        return this.http.patch(`${API_BASE_URL}/fees/scholarships/${id}`, body);
    }
    deleteScholarship(id) {
        return this.http.delete(`${API_BASE_URL}/fees/scholarships/${id}`);
    }
    studentScholarships(studentAdmissionId) {
        return this.http.get(`${API_BASE_URL}/fees/student-scholarships/${studentAdmissionId}`);
    }
    assignStudentScholarship(studentAdmissionId, body) {
        return this.http.post(`${API_BASE_URL}/fees/student-scholarships/${studentAdmissionId}`, body);
    }
    removeStudentScholarship(studentAdmissionId, assignmentId) {
        return this.http.delete(`${API_BASE_URL}/fees/student-scholarships/${studentAdmissionId}/${assignmentId}`);
    }
    createStudentDiscount(studentAdmissionId, body) {
        return this.http.post(`${API_BASE_URL}/fees/student-discounts/${studentAdmissionId}`, body);
    }
    removeStudentDiscount(studentAdmissionId, discountId) {
        return this.http.delete(`${API_BASE_URL}/fees/student-discounts/${studentAdmissionId}/${discountId}`);
    }
    hostelFees(bookId = '') {
        return this.http.get(`${API_BASE_URL}/fees/hostel-fees`, {
            params: bookId ? { bookId } : {},
        });
    }
    createHostelFee(body) {
        return this.http.post(`${API_BASE_URL}/fees/hostel-fees`, body);
    }
    deleteHostelFee(id) {
        return this.http.delete(`${API_BASE_URL}/fees/hostel-fees/${id}`);
    }
    courseFees(bookId = '', courseId = '', domicileId = '', studentTypeId = '', countryId = '') {
        let params = new HttpParams();
        if (bookId)
            params = params.set('bookId', bookId);
        if (courseId)
            params = params.set('courseId', courseId);
        if (domicileId)
            params = params.set('domicileId', domicileId);
        if (studentTypeId)
            params = params.set('studentTypeId', studentTypeId);
        if (countryId)
            params = params.set('countryId', countryId);
        return this.http.get(`${API_BASE_URL}/fees/course-fees`, { params });
    }
    createCourseFee(body) {
        return this.http.post(`${API_BASE_URL}/fees/course-fees`, body);
    }
    saveCourseFeeMatrix(body) {
        return this.http.post(`${API_BASE_URL}/fees/course-fees/matrix`, body);
    }
    courseFeeDrafts(bookId = '') {
        const params = bookId ? new HttpParams().set('bookId', bookId) : undefined;
        return this.http.get(`${API_BASE_URL}/fees/course-fee-drafts`, {
            params,
        });
    }
    courseFeeDraft(id) {
        return this.http.get(`${API_BASE_URL}/fees/course-fee-drafts/${id}`);
    }
    createCourseFeeDraft(body) {
        return this.http.post(`${API_BASE_URL}/fees/course-fee-drafts`, body);
    }
    updateCourseFeeDraft(id, body) {
        return this.http.put(`${API_BASE_URL}/fees/course-fee-drafts/${id}`, body);
    }
    deleteCourseFeeDraft(id) {
        return this.http.delete(`${API_BASE_URL}/fees/course-fee-drafts/${id}`);
    }
    deleteCourseFee(id) {
        return this.http.delete(`${API_BASE_URL}/fees/course-fees/${id}`);
    }
    previewCourseFeeImport(bookId, domicileId, studentTypeId, countryId, file) {
        const data = new FormData();
        data.append('bookId', bookId);
        data.append('domicileId', domicileId);
        data.append('studentTypeId', studentTypeId);
        if (countryId)
            data.append('countryId', countryId);
        data.append('file', file);
        return this.http.post(`${API_BASE_URL}/fees/course-fees/import/preview`, data);
    }
    commitCourseFeeImport(body) {
        return this.http.post(`${API_BASE_URL}/fees/course-fees/import/commit`, body);
    }
    static ɵfac = function ApiService_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || ApiService)(); };
    static ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: ApiService, factory: ApiService.ɵfac, providedIn: 'root' });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ApiService, [{
        type: Injectable,
        args: [{ providedIn: 'root' }]
    }], null, null); })();
