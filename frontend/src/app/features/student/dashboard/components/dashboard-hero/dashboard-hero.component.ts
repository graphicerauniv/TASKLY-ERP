import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { StudentDashboardViewModel } from '../../models/student-dashboard-module.model';

@Component({
  selector: 'erp-dashboard-hero',
  templateUrl: './dashboard-hero.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboardHeroComponent {
  readonly viewModel = input.required<StudentDashboardViewModel>();
}
