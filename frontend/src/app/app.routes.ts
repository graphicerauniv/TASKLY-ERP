import { Routes } from '@angular/router';
import { authGuard } from './core/auth.guard';

export const appRoutes: Routes = [
  {
    path: 'admin',
    children: [
      {
        path: 'login',
        loadComponent: () =>
          import('./features/admin/auth/pages/admin-login/admin-login.component').then(
            (c) => c.AdminLoginComponent,
          ),
      },
      {
        path: '',
        canActivate: [authGuard],
        loadComponent: () =>
          import('./features/admin/layout/admin-shell.component').then(
            (c) => c.AdminShellComponent,
          ),
        children: [
          {
            path: 'dashboard',
            loadComponent: () =>
              import('./features/admin/dashboard/dashboard.component').then(
                (c) => c.DashboardComponent,
              ),
          },
          {
            path: 'master-data/:typeSlug',
            loadComponent: () =>
              import('./features/admin/master-data/master-data.component').then(
                (c) => c.MasterDataComponent,
              ),
          },
          {
            path: 'form-builder',
            loadComponent: () =>
              import('./features/admin/form-builder/form-builder.component').then(
                (c) => c.FormBuilderComponent,
              ),
          },
          {
            path: 'admission/student',
            data: { embedded: true },
            loadComponent: () =>
              import('./features/student/admission/dynamic-admission.component').then(
                (c) => c.DynamicAdmissionComponent,
              ),
          },
          {
            path: 'admission/database',
            loadComponent: () =>
              import('./features/admin/admissions/admissions.component').then(
                (c) => c.AdmissionsComponent,
              ),
          },
          { path: 'admission', redirectTo: 'admission/student', pathMatch: 'full' },
          { path: 'admissions', redirectTo: 'admission/database', pathMatch: 'full' },
          { path: '', pathMatch: 'full', redirectTo: 'dashboard' },
        ],
      },
    ],
  },
  {
    path: 'student',
    loadChildren: () =>
      import('./features/student/auth').then((routes) => routes.STUDENT_AUTH_ROUTES),
  },
  { path: '', pathMatch: 'full', redirectTo: 'admin/login' },
  { path: '**', redirectTo: 'admin/login' },
];
