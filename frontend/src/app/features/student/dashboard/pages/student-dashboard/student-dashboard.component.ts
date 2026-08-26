import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'erp-student-dashboard',
  templateUrl: './student-dashboard.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StudentDashboardComponent {}
