import { Routes } from '@angular/router';
import { STUDENT_ROUTES } from './features/student/student.routes';

export const appRoutes: Routes = [
  {
    path: 'login',
    loadChildren: () =>
      import('./features/admin/auth/admin-auth.routes').then((routes) => routes.ADMIN_AUTH_ROUTES),
  },
  {
    path: 'admin',
    loadChildren: () =>
      import('./features/admin/admin.routes').then((routes) => routes.ADMIN_ROUTES),
  },
  {
    path: 'student',
    children: [
      {
        path: 'login',
        loadChildren: () =>
          import('./features/student/auth').then((routes) => routes.STUDENT_AUTH_ROUTES),
      },
      {
        path: 'portal',
        pathMatch: 'full',
        redirectTo: 'dashboard',
      },
      ...STUDENT_ROUTES,
    ],
  },
  { path: '', pathMatch: 'full', redirectTo: 'login' },
  { path: '**', redirectTo: 'login' },
];
