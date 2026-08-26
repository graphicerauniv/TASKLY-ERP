import { Routes } from '@angular/router';

export const STUDENT_AUTH_ROUTES: Routes = [
  {
    path: '',
    title: 'Student sign in | Taskly ERP',
    loadComponent: () =>
      import('./pages/student-login/student-login.component').then(
        (component) => component.StudentLoginComponent,
      ),
  },
];
