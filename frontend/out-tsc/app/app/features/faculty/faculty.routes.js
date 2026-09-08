import { FacultyShellComponent } from './layout/faculty-shell.component';
export const FACULTY_ROUTES = [
    {
        path: '',
        component: FacultyShellComponent,
        children: [
            {
                path: 'dashboard',
                title: 'Faculty Dashboard | GEU ERP',
                loadComponent: () => import('./pages/faculty-dashboard.component').then((component) => component.FacultyDashboardComponent),
            },
            {
                path: 'attendance',
                title: 'Faculty Attendance | GEU ERP',
                loadComponent: () => import('./pages/faculty-attendance.component').then((component) => component.FacultyAttendanceComponent),
            },
            {
                path: 'exams',
                title: 'Faculty Exams | GEU ERP',
                loadComponent: () => import('./pages/faculty-feature.component').then((component) => component.FacultyFeatureComponent),
                data: { feature: 'exams' },
            },
            { path: '', pathMatch: 'full', redirectTo: 'dashboard' },
            { path: '**', redirectTo: 'dashboard' },
        ],
    },
];
