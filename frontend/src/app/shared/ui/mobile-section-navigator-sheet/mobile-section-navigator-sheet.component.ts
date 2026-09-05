import { ChangeDetectionStrategy, Component, HostListener, input, output } from '@angular/core';
import { CdkTrapFocus } from '@angular/cdk/a11y';
import { LucideX } from '@lucide/angular';
import { FormSectionNavigatorComponent } from '../form-section-navigator/form-section-navigator.component';
import { FormSectionNavigationItem } from '../form-workflow.models';

@Component({
  selector: 'erp-mobile-section-navigator-sheet',
  imports: [CdkTrapFocus, FormSectionNavigatorComponent, LucideX],
  templateUrl: './mobile-section-navigator-sheet.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MobileSectionNavigatorSheetComponent {
  readonly open = input(false);
  readonly items = input<readonly FormSectionNavigationItem[]>([]);
  readonly completedCount = input(0);
  readonly totalCount = input(0);
  readonly heading = input('Application sections');
  readonly closed = output<void>();
  readonly sectionSelected = output<number>();

  choose(index: number) {
    this.sectionSelected.emit(index);
    this.closed.emit();
  }

  @HostListener('document:keydown.escape')
  closeOnEscape() {
    if (this.open()) this.closed.emit();
  }
}
