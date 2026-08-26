import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { NgTemplateOutlet } from '@angular/common';
import { RouterLink } from '@angular/router';
import { StudentDashboardModule } from '../../models/student-dashboard-module.model';

@Component({
  selector: 'erp-dashboard-module-card',
  imports: [NgTemplateOutlet, RouterLink],
  templateUrl: './dashboard-module-card.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboardModuleCardComponent {
  readonly module = input.required<StudentDashboardModule>();
}
