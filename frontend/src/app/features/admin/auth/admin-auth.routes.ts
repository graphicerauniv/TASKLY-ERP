import { Routes } from '@angular/router';

export const ADMIN_AUTH_ROUTES: Routes = [
  {
    path: '',
    title: 'Admin sign in | Taskly ERP',
    loadComponent: () =>
      import('./pages/admin-login/admin-login.component').then(
        (component) => component.AdminLoginComponent,
      ),
  },
];
