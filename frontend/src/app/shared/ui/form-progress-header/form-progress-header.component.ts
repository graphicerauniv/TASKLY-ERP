import { ChangeDetectionStrategy, Component, computed, input, output } from '@angular/core';

@Component({
  selector: 'erp-form-progress-header',
  templateUrl: './form-progress-header.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormProgressHeaderComponent {
  readonly eyebrow = input('Workflow');
  readonly title = input.required<string>();
  readonly description = input('Complete each section to continue.');
  readonly currentSection = input(1);
  readonly totalSections = input(1);
  readonly progress = input(0);
  readonly saveStatus = input('Draft saved');
  readonly sectionsRequested = output<void>();

  readonly boundedProgress = computed(() => Math.min(100, Math.max(0, this.progress())));
}
