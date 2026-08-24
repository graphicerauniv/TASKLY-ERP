import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  ViewChild,
  computed,
  input,
  output,
} from '@angular/core';
import {
  LucideAlertTriangle,
  LucideCheck,
  LucideChevronLeft,
  LucideChevronRight,
  LucideListTree,
} from '@lucide/angular';
import { FormSectionNavigationItem } from '../form-workflow.models';

@Component({
  selector: 'erp-admission-journey-rail',
  imports: [
    LucideAlertTriangle,
    LucideCheck,
    LucideChevronLeft,
    LucideChevronRight,
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

  @ViewChild('railViewport') private railViewport?: ElementRef<HTMLElement>;

  readonly displayedItems = computed(() => {
    const items = this.items();
    if (items.length <= 12) return items;
    const start = Math.max(0, Math.min(this.currentIndex() - 2, items.length - 5));
    return items.slice(start, start + 5);
  });

  scroll(direction: number) {
    this.railViewport?.nativeElement.scrollBy({ left: direction * 320, behavior: 'smooth' });
  }

  sectionNumber(index: number) {
    return String(index + 1).padStart(2, '0');
  }
}
