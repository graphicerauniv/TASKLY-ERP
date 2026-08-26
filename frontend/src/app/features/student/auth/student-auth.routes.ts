import { Routes } from '@angular/router';
import { StudentPortalComponent } from './pages/student-portal/student-portal.component';

export const STUDENT_AUTH_ROUTES: Routes = [
  {
    path: '',
    title: 'Student sign in | Taskly ERP',
    loadComponent: () =>
      import('./pages/student-login/student-login.component').then(
        (component) => component.StudentLoginComponent,
      ),
  },
  {
    path: 'portal',
    title: 'Student Portal | Taskly ERP',
    component: StudentPortalComponent,
  },
];
