import { ChangeDetectionStrategy, Component, input, output } from '@angular/core';
import { LucideArrowLeft, LucideArrowRight, LucideSave } from '@lucide/angular';

@Component({
  selector: 'erp-form-action-bar',
  imports: [LucideArrowLeft, LucideArrowRight, LucideSave],
  templateUrl: './form-action-bar.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormActionBarComponent {
  readonly saveStatus = input('Draft saved');
  readonly showBack = input(false);
  readonly showSaveDraft = input(true);
  readonly saving = input(false);
  readonly primaryLabel = input('Save & Continue');
  readonly back = output<void>();
  readonly saveDraft = output<void>();
  readonly primary = output<void>();
}
