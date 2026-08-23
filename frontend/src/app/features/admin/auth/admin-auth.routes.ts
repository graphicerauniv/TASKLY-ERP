import { Routes } from '@angular/router';

export const ADMIN_AUTH_ROUTES: Routes = [
  {
    path: 'login',
    title: 'Admin sign in | Taskly ERP',
    loadComponent: () =>
      import('./pages/admin-login/admin-login.component').then(
        (component) => component.AdminLoginComponent,
      ),
  },
  { path: '', pathMatch: 'full', redirectTo: 'login' },
];
