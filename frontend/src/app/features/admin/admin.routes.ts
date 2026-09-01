import { Routes } from '@angular/router';
import { authGuard } from '../../core/auth.guard';
import { unsavedChangesGuard } from './admissions/application-editor/unsaved-changes.guard';

/**
 * Admin routes share one shell and one router outlet. Page components are loaded
 * at their route boundary so each domain can migrate independently.
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
    loadComponent: () =>
      import('./layout/admin-shell.component').then((component) => component.AdminShellComponent),
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
        loadComponent: () =>
          import('./hostel-management/hostel-management.component').then(
            (component) => component.HostelManagementComponent,
          ),
        data: { section },
      })),
      {
        path: 'fees',
        pathMatch: 'full',
        redirectTo: 'fees/books/create',
      },
      {
        path: 'fees/progression',
        loadComponent: () =>
          import('./fee-progression/fee-progression.component').then(
            (component) => component.FeeProgressionComponent,
          ),
      },
      {
        path: 'fees/schedules',
        loadComponent: () =>
          import('./fee-schedules/fee-schedules.component').then(
            (component) => component.FeeSchedulesComponent,
          ),
      },
      { path: 'fees/scholarships', pathMatch: 'full', redirectTo: 'fees/scholarships/view' },
      {
        path: 'fees/scholarships/view',
        loadComponent: () =>
          import('./scholarships/scholarships.component').then(
            (component) => component.ScholarshipsComponent,
          ),
        data: { mode: 'view' },
      },
      {
        path: 'fees/scholarships/create',
        loadComponent: () =>
          import('./scholarships/scholarships.component').then(
            (component) => component.ScholarshipsComponent,
          ),
        data: { mode: 'create' },
      },
      {
        path: 'fees/scholarships/:id/edit',
        loadComponent: () =>
          import('./scholarships/scholarships.component').then(
            (component) => component.ScholarshipsComponent,
          ),
        data: { mode: 'edit' },
      },
      {
        path: 'accounts',
        loadComponent: () =>
          import('./accounts/accounts.component').then((component) => component.AccountsComponent),
      },
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
        loadComponent: () =>
          import('./fee-management/fee-management.component').then(
            (component) => component.FeeManagementComponent,
          ),
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
        loadComponent: () =>
          import('./master-data/master-data.component').then(
            (component) => component.MasterDataComponent,
          ),
        data: { mode },
      })),
      {
        path: 'master-data/:typeSlug',
        pathMatch: 'full',
        redirectTo: 'master-data/:typeSlug/view',
      },
      {
        path: 'form-builder',
        loadComponent: () =>
          import('./form-builder/form-builder.component').then(
            (component) => component.FormBuilderComponent,
          ),
      },
      {
        path: 'admission/student',
        data: { embedded: true },
        loadComponent: () =>
          import('../student/admission/dynamic-admission.component').then(
            (component) => component.DynamicAdmissionComponent,
          ),
      },
      {
        path: 'admissions/forms/:formId/edit',
        title: 'Edit admission form',
        loadComponent: () =>
          import('./form-builder/form-builder.component').then(
            (component) => component.FormBuilderComponent,
          ),
      },
      {
        path: 'admissions/forms',
        title: 'Admission forms',
        loadComponent: () =>
          import('./admissions/forms-library/forms-library.component').then(
            (component) => component.FormsLibraryComponent,
          ),
      },
      {
        path: 'admissions/:admissionId/scholarships',
        loadComponent: () =>
          import('./student-scholarships/student-scholarships.component').then(
            (component) => component.StudentScholarshipsComponent,
          ),
      },
      {
        path: 'admissions/:admissionId/offline-payment',
        title: 'Make offline payment',
        loadComponent: () =>
          import('./offline-payment/offline-payment.component').then(
            (component) => component.OfflinePaymentComponent,
          ),
      },
      {
        path: 'admissions/:admissionId/edit',
        title: 'Edit application',
        canDeactivate: [unsavedChangesGuard],
        loadComponent: () =>
          import('./admissions/application-editor/application-editor.component').then(
            (component) => component.ApplicationEditorComponent,
          ),
      },
      {
        path: 'admissions/applications/:admissionId/review',
        title: 'Application review',
        loadComponent: () =>
          import('./admissions/application-review/application-review.component').then(
            (component) => component.ApplicationReviewComponent,
          ),
      },
      {
        path: 'admissions/applications/:admissionId',
        title: 'Application record',
        loadComponent: () =>
          import('./admissions/application-record/application-record.component').then(
            (component) => component.ApplicationRecordComponent,
          ),
      },
      {
        path: 'admissions/applications',
        title: 'Applications',
        loadComponent: () =>
          import('./admissions/admissions.component').then(
            (component) => component.AdmissionsComponent,
          ),
      },
      {
        path: 'admissions/unfilled',
        loadComponent: () =>
          import('./admissions/admissions.component').then(
            (component) => component.AdmissionsComponent,
          ),
        data: {
          status: 'draft',
          title: 'Applications',
        },
      },
      {
        path: 'admissions/not-approved',
        loadComponent: () =>
          import('./admissions/admissions.component').then(
            (component) => component.AdmissionsComponent,
          ),
        data: {
          status: 'pending_approval',
          title: 'Applications',
        },
      },
      {
        path: 'admissions/approved',
        loadComponent: () =>
          import('./admissions/admissions.component').then(
            (component) => component.AdmissionsComponent,
          ),
        data: {
          status: 'approved',
          title: 'Applications',
        },
      },
      {
        path: 'admissions/promotions',
        loadComponent: () =>
          import('./student-promotions/student-promotions.component').then(
            (component) => component.StudentPromotionsComponent,
          ),
      },
      {
        path: 'admissions',
        pathMatch: 'full',
        redirectTo: 'admissions/applications',
      },
      {
        path: 'delete-admissions',
        loadComponent: () =>
          import('./delete-admissions/delete-admissions.component').then(
            (component) => component.DeleteAdmissionsComponent,
          ),
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
