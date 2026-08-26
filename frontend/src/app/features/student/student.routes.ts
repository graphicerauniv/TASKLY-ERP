import { Routes } from '@angular/router';
import { StudentShellComponent } from './layout/student-shell/student-shell.component';

export const STUDENT_ROUTES: Routes = [
  {
    path: '',
    component: StudentShellComponent,
    children: [
      {
        path: 'dashboard',
        title: 'Student Dashboard | GEU ERP',
        loadComponent: () =>
          import('./dashboard/pages/student-dashboard/student-dashboard.component').then(
            (component) => component.StudentDashboardComponent,
          ),
      },
      {
        path: 'fees',
        title: 'Fees | GEU ERP',
        loadComponent: () =>
          import('./auth/pages/student-portal/student-portal.component').then(
            (component) => component.StudentPortalComponent,
          ),
      },
      { path: '', pathMatch: 'full', redirectTo: 'dashboard' },
      { path: '**', redirectTo: 'dashboard' },
    ],
  },
];
