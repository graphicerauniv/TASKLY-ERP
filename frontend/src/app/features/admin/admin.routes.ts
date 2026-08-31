import { Routes } from '@angular/router';
import { authGuard } from '../../core/auth.guard';
import { DynamicAdmissionComponent } from '../student/admission/dynamic-admission.component';
import { AdmissionsComponent } from './admissions/admissions.component';
import { DeleteAdmissionsComponent } from './delete-admissions/delete-admissions.component';
import { FormBuilderComponent } from './form-builder/form-builder.component';
import { AdminShellComponent } from './layout/admin-shell.component';
import { MasterDataComponent } from './master-data/master-data.component';
import { HostelManagementComponent } from './hostel-management/hostel-management.component';
import { FeeManagementComponent } from './fee-management/fee-management.component';
import { FeeProgressionComponent } from './fee-progression/fee-progression.component';
import { AccountsComponent } from './accounts/accounts.component';
import { StudentPromotionsComponent } from './student-promotions/student-promotions.component';
import { ScholarshipsComponent } from './scholarships/scholarships.component';
import { StudentScholarshipsComponent } from './student-scholarships/student-scholarships.component';

/**
 * Admin routes share one shell and one router outlet.
 * Only Dashboard is intentionally lazy loaded; ERP feature routes stay statically imported.
 */
export const ADMIN_ROUTES: Routes = [
  {
    path: 'login',
    pathMatch: 'full',
    redirectTo: '/login',
  },
  {
    path: '',
    canActivate: [authGuard],
    component: AdminShellComponent,
    children: [
      {
        path: 'dashboard',
        loadComponent: () =>
          import('./dashboard/dashboard.component').then(
            (component) => component.DashboardComponent,
          ),
      },
      {
        path: 'master-data',
        pathMatch: 'full',
        redirectTo: 'master-data/custom',
      },
      {
        path: 'master-data/hostel',
        pathMatch: 'full',
        redirectTo: 'master-data/hostel/details',
      },
      ...[
        ['details', 'details'],
        ['structure', 'structure'],
        ['rooms', 'rooms'],
        ['capacity', 'capacity'],
        ['allocation', 'allocation'],
        ['overview', 'overview'],
      ].map(([path, section]) => ({
        path: `master-data/hostel/${path}`,
        component: HostelManagementComponent,
        data: { section },
      })),
      {
        path: 'fees',
        pathMatch: 'full',
        redirectTo: 'fees/books/create',
      },
      { path: 'fees/progression', component: FeeProgressionComponent },
      { path: 'fees/scholarships', pathMatch: 'full', redirectTo: 'fees/scholarships/view' },
      { path: 'fees/scholarships/view', component: ScholarshipsComponent, data: { mode: 'view' } },
      {
        path: 'fees/scholarships/create',
        component: ScholarshipsComponent,
        data: { mode: 'create' },
      },
      {
        path: 'fees/scholarships/:id/edit',
        component: ScholarshipsComponent,
        data: { mode: 'edit' },
      },
      { path: 'accounts', component: AccountsComponent },
      ...[
        ['books/create', 'books', 'create'],
        ['books/view', 'books', 'view'],
        ['books/:id/edit', 'books', 'create'],
        ['heads/create', 'heads', 'create'],
        ['heads/view', 'heads', 'view'],
        ['heads/:id/edit', 'heads', 'create'],
        ['hostel-fees/create', 'hostel-fees', 'create'],
        ['hostel-fees/view', 'hostel-fees', 'view'],
        ['course-fees/create', 'course-fees', 'create'],
        ['course-fees/import', 'course-fees', 'import'],
        ['course-fees/drafts', 'course-fees', 'drafts'],
        ['course-fees/view', 'course-fee-view', 'view'],
      ].map(([path, section, mode]) => ({
        path: `fees/${path}`,
        component: FeeManagementComponent,
        data: { section, mode },
      })),
      ...[
        ['books', 'books/create'],
        ['heads', 'heads/create'],
        ['hostel-fees', 'hostel-fees/create'],
        ['course-fees', 'course-fees/create'],
        ['course-fee-view', 'course-fees/view'],
      ].map(([path, redirectTo]) => ({
        path: `fees/${path}`,
        pathMatch: 'full' as const,
        redirectTo: `fees/${redirectTo}`,
      })),
      ...[
        [':typeSlug/create', 'create'],
        [':typeSlug/view', 'view'],
        [':typeSlug/:id/edit', 'create'],
      ].map(([path, mode]) => ({
        path: `master-data/${path}`,
        component: MasterDataComponent,
        data: { mode },
      })),
      {
        path: 'master-data/:typeSlug',
        pathMatch: 'full',
        redirectTo: 'master-data/:typeSlug/view',
      },
      {
        path: 'form-builder',
        component: FormBuilderComponent,
      },
      {
        path: 'admission/student',
        data: { embedded: true },
        component: DynamicAdmissionComponent,
      },
      {
        path: 'admissions/:admissionId/scholarships',
        component: StudentScholarshipsComponent,
      },
      {
        path: 'admissions/:admissionId/edit',
        data: { embedded: true },
        component: DynamicAdmissionComponent,
      },
      {
        path: 'admissions/unfilled',
        component: AdmissionsComponent,
        data: {
          status: 'draft',
          title: 'Admission Unfilled Data',
          description: 'Saved admission forms that still need required information.',
        },
      },
      {
        path: 'admissions/not-approved',
        component: AdmissionsComponent,
        data: {
          status: 'pending_approval',
          title: 'Not Approved Students',
          description: 'Completed admissions waiting for approval.',
        },
      },
      {
        path: 'admissions/approved',
        component: AdmissionsComponent,
        data: {
          status: 'approved',
          title: 'Approved Students',
          description: 'Students whose completed admission records have been approved.',
        },
      },
      {
        path: 'admissions/promotions',
        component: StudentPromotionsComponent,
      },
      {
        path: 'admissions',
        pathMatch: 'full',
        redirectTo: 'admissions/approved',
      },
      {
        path: 'delete-admissions',
        component: DeleteAdmissionsComponent,
      },
      {
        path: 'admission/database',
        pathMatch: 'full',
        redirectTo: 'admissions',
      },
      {
        path: 'admission/delete',
        pathMatch: 'full',
        redirectTo: 'delete-admissions',
      },
      {
        path: 'admission',
        pathMatch: 'full',
        redirectTo: 'admission/student',
      },
      { path: '', pathMatch: 'full', redirectTo: 'dashboard' },
    ],
  },
];
