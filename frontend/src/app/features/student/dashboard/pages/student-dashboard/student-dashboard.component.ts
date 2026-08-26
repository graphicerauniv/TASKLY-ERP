import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DashboardHeroComponent } from '../../components/dashboard-hero/dashboard-hero.component';
import { DashboardModuleGridComponent } from '../../components/dashboard-module-grid/dashboard-module-grid.component';
import { STUDENT_DASHBOARD_MODULES } from '../../config/student-dashboard-modules.config';
import { StudentDashboardViewModel } from '../../models/student-dashboard-module.model';

@Component({
  selector: 'erp-student-dashboard',
  imports: [DashboardHeroComponent, DashboardModuleGridComponent],
  templateUrl: './student-dashboard.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StudentDashboardComponent {
  readonly viewModel: StudentDashboardViewModel = {
    firstName: 'Vivek',
  };

  readonly modules = STUDENT_DASHBOARD_MODULES;
}
