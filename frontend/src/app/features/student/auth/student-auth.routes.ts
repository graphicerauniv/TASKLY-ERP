import { Routes } from '@angular/router';

export const STUDENT_AUTH_ROUTES: Routes = [
  {
    path: 'login',
    title: 'Student sign in | Taskly ERP',
    loadComponent: () =>
      import('./pages/student-login/student-login.component').then(
        (component) => component.StudentLoginComponent,
      ),
  },
  { path: '', pathMatch: 'full', redirectTo: 'login' },
];
