import { ChangeDetectionStrategy, Component, input, output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LucidePlus } from '@lucide/angular';
import { AdmissionForm } from '../../../../core/models';
import {
  CompactActionItem,
  CompactActionMenuComponent,
} from '../../../../shared/ui/compact-action-menu/compact-action-menu.component';

@Component({
  selector: 'erp-form-builder-toolbar',
  imports: [FormsModule, LucidePlus, CompactActionMenuComponent],
  template: `
    <section class="toolbar" aria-label="Form builder toolbar">
      <div class="toolbar__selector-group">
        <label>
          <span>Admission form</span>
          <select
            class="erp-control"
            [ngModel]="form()?._id"
            (ngModelChange)="formSelected.emit($event)"
          >
            @for (item of forms(); track item._id) {
              <option [value]="item._id">
                {{ item.name }} · {{ item.status }} · v{{ item.version }}
              </option>
            }
          </select>
        </label>
        @if (form(); as activeForm) {
          <span class="erp-status" [class.erp-status--draft]="activeForm.status !== 'published'">
            {{ activeForm.status }}
          </span>
          <erp-compact-action-menu [items]="formActions" (selected)="formAction.emit($event)" />
        }
      </div>
      <span class="toolbar__spacer"></span>
      <button
        class="erp-button erp-button--secondary"
        type="button"
        (click)="createRequested.emit()"
      >
        <svg lucidePlus size="16" aria-hidden="true"></svg>
        Create form
      </button>
    </section>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormBuilderToolbarComponent {
  readonly forms = input<AdmissionForm[]>([]);
  readonly form = input<AdmissionForm | null>(null);
  readonly formSelected = output<string>();
  readonly createRequested = output<void>();
  readonly formAction = output<string>();

  readonly formActions: CompactActionItem[] = [
    {
      id: 'delete',
      label: 'Delete form',
      icon: 'delete',
      destructive: true,
    },
  ];
}
