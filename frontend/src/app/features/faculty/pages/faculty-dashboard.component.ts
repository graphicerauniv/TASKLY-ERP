import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { DashboardModuleGridComponent } from '../../student/dashboard/components/dashboard-module-grid/dashboard-module-grid.component';
import { StudentDashboardModule } from '../../student/dashboard/models/student-dashboard-module.model';
import { FacultySessionService } from '../shared/faculty-session.service';

const FACULTY_MODULES: readonly StudentDashboardModule[] = [
  {
    id: 'attendance',
    label: 'Attendance',
    imagePath: '/assets/student/dashboard/modules/attendance.webp',
    route: '/faculty/attendance',
    ariaLabel: 'Open faculty attendance',
    background: 'var(--student-module-attendance)',
    enabled: true,
    order: 1,
    imageWidth: 384,
    imageHeight: 384,
  },
  {
    id: 'exams',
    label: 'Exams',
    imagePath: '/assets/student/dashboard/modules/exams.webp',
    route: '/faculty/exams',
    ariaLabel: 'Open faculty exams',
    background: 'var(--student-module-exams)',
    enabled: true,
    order: 2,
    imageWidth: 384,
    imageHeight: 384,
  },
];

@Component({
  selector: 'erp-faculty-dashboard',
  imports: [DashboardModuleGridComponent],
  templateUrl: './faculty-dashboard.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FacultyDashboardComponent {
  readonly session = inject(FacultySessionService);
  readonly modules = FACULTY_MODULES;
}
