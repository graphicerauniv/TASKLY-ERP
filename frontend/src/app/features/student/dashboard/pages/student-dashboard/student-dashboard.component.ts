import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { DashboardHeroComponent } from '../../components/dashboard-hero/dashboard-hero.component';
import { DashboardModuleGridComponent } from '../../components/dashboard-module-grid/dashboard-module-grid.component';
import { DashboardOperationalGridComponent } from '../../components/dashboard-operational-grid/dashboard-operational-grid.component';
import { STUDENT_DASHBOARD_MODULES } from '../../config/student-dashboard-modules.config';
import { StudentDashboardFacade } from '../../data-access/student-dashboard.facade';
import { StudentDashboardViewModel } from '../../models/student-dashboard-module.model';

@Component({
  selector: 'erp-student-dashboard',
  imports: [
    DashboardHeroComponent,
    DashboardModuleGridComponent,
    DashboardOperationalGridComponent,
  ],
  templateUrl: './student-dashboard.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StudentDashboardComponent {
  readonly facade = inject(StudentDashboardFacade);
  readonly viewModel = computed<StudentDashboardViewModel>(() => ({
    firstName: this.facade.identity().data?.firstName ?? null,
  }));

  readonly modules = STUDENT_DASHBOARD_MODULES;
}
