import { Routes } from '@angular/router';

export const appRoutes: Routes = [
  {
    path: 'admin',
    loadChildren: () =>
      import('./features/admin/auth/admin-auth.routes').then((routes) => routes.ADMIN_AUTH_ROUTES),
  },
  {
    path: 'student',
    loadChildren: () =>
      import('./features/student/auth/student-auth.routes').then(
        (routes) => routes.STUDENT_AUTH_ROUTES,
      ),
  },
  { path: '', pathMatch: 'full', redirectTo: 'admin/login' },
  { path: '**', redirectTo: 'admin/login' },
];
