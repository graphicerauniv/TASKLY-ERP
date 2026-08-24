import { ChangeDetectionStrategy, Component, input, output } from '@angular/core';
import {
  LucideCheck,
  LucideCircle,
  LucideCircleDot,
  LucideTriangleAlert,
} from '@lucide/angular';
import { FormSectionNavigationItem } from '../form-workflow.models';

@Component({
  selector: 'erp-form-section-nav-item',
  imports: [LucideCheck, LucideCircle, LucideCircleDot, LucideTriangleAlert],
  templateUrl: './form-section-nav-item.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormSectionNavItemComponent {
  readonly item = input.required<FormSectionNavigationItem>();
  readonly selected = output<number>();
}
