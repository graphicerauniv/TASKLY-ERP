import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { DashboardModuleCardComponent } from '../dashboard-module-card/dashboard-module-card.component';
import { StudentDashboardModule } from '../../models/student-dashboard-module.model';

@Component({
  selector: 'erp-dashboard-module-grid',
  imports: [DashboardModuleCardComponent],
  templateUrl: './dashboard-module-grid.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboardModuleGridComponent {
  readonly modules = input.required<readonly StudentDashboardModule[]>();
}
