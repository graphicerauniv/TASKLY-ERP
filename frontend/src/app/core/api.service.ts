import { HttpClient, HttpParams } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API_BASE_URL } from './runtime-config';
import { Admission, AdmissionForm, MasterType, MasterValue } from './models';

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
  admissions() {
    return this.http.get<{ items: Admission[] }>(`${API_BASE_URL}/admissions`);
  }
  activeForm() {
    return this.http.get<{ item: AdmissionForm }>(`${API_BASE_URL}/public/forms/active`);
  }
  publicOptions(
    slug: string,
    parentId?: string,
    search?: string,
    searchField?: string,
    labelField?: string,
  ) {
    let params = new HttpParams();
    if (parentId) params = params.set('parentId', parentId);
    if (search) params = params.set('search', search);
    if (searchField) params = params.set('searchField', searchField);
    if (labelField) params = params.set('labelField', labelField);
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
  upload(id: string, key: string, file: File): Observable<{ file: { name: string; url: string } }> {
    const data = new FormData();
    data.append('file', file);
    return this.http.post<{ file: { name: string; url: string } }>(
      `${API_BASE_URL}/public/admissions/${id}/upload`,
      data,
      { headers: { 'x-admission-key': key } },
    );
  }
}
