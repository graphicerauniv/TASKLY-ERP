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
  CourseFee,
  FeeBook,
  FeeHead,
  FeeImportPreview,
  HostelFee,
} from './models';

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
  admissions() {
    return this.http.get<{ items: Admission[] }>(`${API_BASE_URL}/admissions`);
  }
  admission(id: string) {
    return this.http.get<{ item: Admission; masterLabels: Record<string, string> }>(
      `${API_BASE_URL}/admissions/${id}`,
    );
  }
  deleteAdmission(id: string) {
    return this.http.delete<void>(`${API_BASE_URL}/admissions/${id}`);
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
  createFeeHead(body: { bookId: string; name: string; category: FeeHead['category'] }) {
    return this.http.post<{ item: FeeHead }>(`${API_BASE_URL}/fees/heads`, body);
  }
  updateFeeHead(id: string, body: Partial<FeeHead>) {
    return this.http.patch<{ item: FeeHead }>(`${API_BASE_URL}/fees/heads/${id}`, body);
  }
  deleteFeeHead(id: string) {
    return this.http.delete<void>(`${API_BASE_URL}/fees/heads/${id}`);
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
  courseFees(bookId = '', courseId = '', domicileId = '') {
    let params = new HttpParams();
    if (bookId) params = params.set('bookId', bookId);
    if (courseId) params = params.set('courseId', courseId);
    if (domicileId) params = params.set('domicileId', domicileId);
    return this.http.get<{ items: CourseFee[] }>(`${API_BASE_URL}/fees/course-fees`, { params });
  }
  createCourseFee(body: Omit<CourseFee, '_id' | 'bookCode' | 'courseName' | 'domicileName' | 'feeHeadName' | 'academicName' | 'category' | 'source' | 'sourceSheet'>) {
    return this.http.post<{ item: CourseFee }>(`${API_BASE_URL}/fees/course-fees`, body);
  }
  deleteCourseFee(id: string) {
    return this.http.delete<void>(`${API_BASE_URL}/fees/course-fees/${id}`);
  }
  previewCourseFeeImport(bookId: string, domicileId: string, file: File) {
    const data = new FormData();
    data.append('bookId', bookId);
    data.append('domicileId', domicileId);
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
