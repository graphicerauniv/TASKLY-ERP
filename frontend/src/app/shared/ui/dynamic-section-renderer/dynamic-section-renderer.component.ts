import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import {
  LucideCreditCard,
  LucideFileText,
  LucideGraduationCap,
  LucideMapPin,
  LucideShieldCheck,
} from '@lucide/angular';

@Component({
  selector: 'erp-dynamic-section-renderer',
  imports: [
    LucideCreditCard,
    LucideFileText,
    LucideGraduationCap,
    LucideMapPin,
    LucideShieldCheck,
  ],
  templateUrl: './dynamic-section-renderer.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DynamicSectionRendererComponent {
  readonly sectionNumber = input('01');
  readonly title = input.required<string>();
  readonly description = input('Complete this section carefully.');
  readonly icon = input('personal');
  readonly completedFields = input(0);
  readonly totalFields = input(0);
}
