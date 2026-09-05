import {
  ChangeDetectionStrategy,
  Component,
  input,
  output,
} from '@angular/core';
import {
  LucideAlertTriangle,
  LucideCheck,
  LucideListTree,
} from '@lucide/angular';
import { FormSectionNavigationItem } from '../form-workflow.models';

@Component({
  selector: 'erp-admission-journey-rail',
  imports: [
    LucideAlertTriangle,
    LucideCheck,
    LucideListTree,
  ],
  templateUrl: './admission-journey-rail.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AdmissionJourneyRailComponent {
  readonly items = input<readonly FormSectionNavigationItem[]>([]);
  readonly currentIndex = input(0);
  readonly progress = input(0);
  readonly currentProgress = input('');
  readonly sectionSelected = output<number>();
  readonly allSectionsRequested = output<void>();

  sectionNumber(index: number) {
    return String(index + 1).padStart(2, '0');
  }
}
