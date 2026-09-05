export const STUDENT_AUTH_ROUTES = [
    {
        path: '',
        title: 'Student sign in | Taskly ERP',
        loadComponent: () => import('./pages/student-login/student-login.component').then((component) => component.StudentLoginComponent),
    },
];
