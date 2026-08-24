import { ChangeDetectionStrategy, Component, input, output } from '@angular/core';
import { LucideAlertTriangle, LucideCheck, LucideChevronDown } from '@lucide/angular';

@Component({
  selector: 'erp-form-sub-group',
  imports: [LucideAlertTriangle, LucideCheck, LucideChevronDown],
  templateUrl: './form-sub-group.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'erp-form-subgroup',
    '[class.erp-form-subgroup--open]': 'open()',
  },
})
export class FormSubGroupComponent {
  readonly title = input.required<string>();
  readonly description = input('');
  readonly fieldCount = input(0);
  readonly requiredCount = input(0);
  readonly remainingRequired = input(0);
  readonly complete = input(false);
  readonly open = input(false);
  readonly toggled = output<void>();
}
