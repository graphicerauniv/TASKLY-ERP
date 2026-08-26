import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { DashboardHeroComponent } from '../../components/dashboard-hero/dashboard-hero.component';
import { DashboardModuleGridComponent } from '../../components/dashboard-module-grid/dashboard-module-grid.component';
import { DashboardOperationalGridComponent } from '../../components/dashboard-operational-grid/dashboard-operational-grid.component';
import { StudentDashboardFacade } from '../../data-access/student-dashboard.facade';
import { StudentMobileBottomNavComponent } from '../../components/student-mobile-bottom-nav/student-mobile-bottom-nav.component';

@Component({
  selector: 'erp-student-dashboard',
  imports: [
    DashboardHeroComponent,
    DashboardModuleGridComponent,
    DashboardOperationalGridComponent,
    StudentMobileBottomNavComponent,
  ],
  templateUrl: './student-dashboard.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StudentDashboardComponent {
  readonly facade = inject(StudentDashboardFacade);
  readonly viewModel = this.facade.viewModel;
}
