import { Routes } from '@angular/router';
import { ADMIN_ROUTES } from './features/admin/admin.routes';

export const appRoutes: Routes = [
  {
    path: 'login',
    loadChildren: () =>
      import('./features/admin/auth/admin-auth.routes').then((routes) => routes.ADMIN_AUTH_ROUTES),
  },
  {
    path: 'admin',
    children: ADMIN_ROUTES,
  },
  {
    path: 'student',
    loadChildren: () =>
      import('./features/student/auth').then((routes) => routes.STUDENT_AUTH_ROUTES),
  },
  { path: '', pathMatch: 'full', redirectTo: 'login' },
  { path: '**', redirectTo: 'login' },
];
