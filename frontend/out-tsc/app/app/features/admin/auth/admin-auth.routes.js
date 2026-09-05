export const ADMIN_AUTH_ROUTES = [
    {
        path: '',
        title: 'Admin sign in | Taskly ERP',
        loadComponent: () => import('./pages/admin-login/admin-login.component').then((component) => component.AdminLoginComponent),
    },
];
