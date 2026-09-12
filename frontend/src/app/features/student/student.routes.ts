import { Routes } from '@angular/router';
import { FeeDetailsComponent } from './fees/pages/fee-details/fee-details.component';
import { FeeDashboardComponent } from './fees/pages/fee-dashboard/fee-dashboard.component';
import { PayFeesComponent } from './fees/pages/pay-fees/pay-fees.component';
import { FeeChallanComponent } from './fees/pages/fee-challan/fee-challan.component';
import { PaymentHistoryComponent } from './fees/pages/payment-history/payment-history.component';
import { PaymentReceiptsComponent } from './fees/pages/payment-receipts/payment-receipts.component';
import { FeeInstallmentsComponent } from './fees/pages/fee-installments/fee-installments.component';
import { ScholarshipDetailsComponent } from './fees/pages/scholarship-details/scholarship-details.component';
import { FeeSupportComponent } from './fees/pages/fee-support/fee-support.component';
import { FeeModeComparisonComponent } from './fees/pages/fee-mode-comparison/fee-mode-comparison.component';
import { StudentShellComponent } from './layout/student-shell/student-shell.component';
import { StudentProfileComponent } from './profile/pages/student-profile/student-profile.component';

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
        path: 'profile',
        title: 'Student Profile | GEU ERP',
        component: StudentProfileComponent,
      },
      {
        path: 'academics/timetable',
        title: 'My Timetable | GEU ERP',
        loadComponent: () =>
          import('./academics/student-timetable.component').then(
            (component) => component.StudentTimetableComponent,
          ),
      },
      {
        path: 'academics/semester-registration',
        title: 'Semester Registration | GEU ERP',
        loadComponent: () =>
          import('./academics/student-semester-registration.component').then(
            (component) => component.StudentSemesterRegistrationComponent,
          ),
      },
      {
        path: 'academics/service/:serviceId',
        title: 'Academic Service | GEU ERP',
        loadComponent: () =>
          import('./academics/student-academic-service.component').then(
            (component) => component.StudentAcademicServiceComponent,
          ),
      },
      {
        path: 'academics',
        title: 'Academics | GEU ERP',
        loadComponent: () =>
          import('./academics/student-academics-dashboard.component').then(
            (component) => component.StudentAcademicsDashboardComponent,
          ),
      },
      {
        path: 'attendance/reports',
        title: 'Attendance Reports & Downloads | GEU ERP',
        loadComponent: () =>
          import('./academics/student-attendance-reports.component').then(
            (component) => component.StudentAttendanceReportsComponent,
          ),
      },
      {
        path: 'attendance/corrections',
        title: 'Attendance Correction Requests | GEU ERP',
        loadComponent: () =>
          import('./academics/student-attendance-corrections.component').then(
            (component) => component.StudentAttendanceCorrectionsComponent,
          ),
      },
      {
        path: 'attendance/alerts/preferences',
        title: 'Attendance Alert Preferences | GEU ERP',
        loadComponent: () =>
          import('./academics/student-attendance-alert-preferences.component').then(
            (component) => component.StudentAttendanceAlertPreferencesComponent,
          ),
      },
      {
        path: 'attendance/alerts',
        title: 'Attendance Alerts | GEU ERP',
        loadComponent: () =>
          import('./academics/student-attendance-alerts.component').then(
            (component) => component.StudentAttendanceAlertsComponent,
          ),
      },
      {
        path: 'attendance/shortage/:subjectId',
        title: 'Subject Attendance Shortage | GEU ERP',
        loadComponent: () =>
          import('./academics/student-attendance-shortage.component').then(
            (component) => component.StudentAttendanceShortageComponent,
          ),
      },
      {
        path: 'attendance/shortage',
        title: 'Attendance Shortage & Risk | GEU ERP',
        loadComponent: () =>
          import('./academics/student-attendance-shortage.component').then(
            (component) => component.StudentAttendanceShortageComponent,
          ),
      },
      {
        path: 'attendance/analyze',
        title: 'Analyze Attendance | GEU ERP',
        loadComponent: () =>
          import('./academics/student-attendance-analysis.component').then(
            (component) => component.StudentAttendanceAnalysisComponent,
          ),
      },
      {
        path: 'attendance/subjects/:subjectId',
        title: 'Subject Attendance History | GEU ERP',
        loadComponent: () =>
          import('./academics/student-subject-attendance.component').then(
            (component) => component.StudentSubjectAttendanceComponent,
          ),
      },
      {
        path: 'attendance/subjects',
        title: 'Subject Attendance | GEU ERP',
        loadComponent: () =>
          import('./academics/student-subject-attendance.component').then(
            (component) => component.StudentSubjectAttendanceComponent,
          ),
      },
      {
        path: 'attendance',
        title: 'My Attendance | GEU ERP',
        loadComponent: () =>
          import('./academics/student-attendance.component').then(
            (component) => component.StudentAttendanceComponent,
          ),
      },
      {
        path: 'fees/pay',
        title: 'Pay Fees | GEU ERP',
        component: PayFeesComponent,
      },
      {
        path: 'fees/details',
        title: 'Fee Details | GEU ERP',
        component: FeeDetailsComponent,
      },
      {
        path: 'fees/receipts',
        title: 'Payment Receipts | GEU ERP',
        component: PaymentReceiptsComponent,
      },
      {
        path: 'fees/history',
        title: 'Payment History | GEU ERP',
        component: PaymentHistoryComponent,
      },
      {
        path: 'fees/challan',
        title: 'Fee Challan | GEU ERP',
        component: FeeChallanComponent,
      },
      {
        path: 'fees/installments',
        title: 'Fee Installments | GEU ERP',
        component: FeeInstallmentsComponent,
      },
      {
        path: 'fees/scholarships',
        title: 'Scholarship Details | GEU ERP',
        component: ScholarshipDetailsComponent,
      },
      { path: 'fees/support', title: 'Fee Support | GEU ERP', component: FeeSupportComponent },
      {
        path: 'fees/compare',
        title: 'Compare Fee Modes | GEU ERP',
        component: FeeModeComparisonComponent,
      },
      {
        path: 'fees',
        title: 'Fees | GEU ERP',
        component: FeeDashboardComponent,
      },
      { path: '', pathMatch: 'full', redirectTo: 'dashboard' },
      { path: '**', redirectTo: 'dashboard' },
    ],
  },
];
