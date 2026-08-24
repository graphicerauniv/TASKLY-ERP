import { Routes } from '@angular/router';
import { authGuard } from '../../core/auth.guard';
import { DynamicAdmissionComponent } from '../student/admission/dynamic-admission.component';
import { AdmissionsComponent } from './admissions/admissions.component';
import { DeleteAdmissionsComponent } from './delete-admissions/delete-admissions.component';
import { FormBuilderComponent } from './form-builder/form-builder.component';
import { AdminShellComponent } from './layout/admin-shell.component';
import { MasterDataComponent } from './master-data/master-data.component';
import { HostelManagementComponent } from './hostel-management/hostel-management.component';

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
        path: 'master-data/:typeSlug',
        component: MasterDataComponent,
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
        path: 'admissions',
        component: AdmissionsComponent,
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
