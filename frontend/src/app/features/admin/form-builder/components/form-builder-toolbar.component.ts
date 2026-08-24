import { ChangeDetectionStrategy, Component, input, output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LucidePlus } from '@lucide/angular';
import { AdmissionForm } from '../../../../core/models';

@Component({
  selector: 'erp-form-builder-toolbar',
  imports: [FormsModule, LucidePlus],
  template: `
    <section class="toolbar" aria-label="Form builder toolbar">
      <label>
        <span class="erp-sr-only">Admission form</span>
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
      }
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
  styles: `
    :host {
      display: block;
    }
    .toolbar {
      display: flex;
      min-height: 56px;
      align-items: center;
      justify-content: space-between;
      gap: 10px;
      margin-bottom: var(--erp-admin-section-gap);
      padding: 8px 10px;
      border-block: 1px solid var(--erp-border-default);
      background: var(--erp-surface-translucent);
    }
    label {
      width: min(420px, 100%);
    }
    .toolbar__spacer {
      flex: 1;
    }
    @media (max-width: 767px) {
      .toolbar {
        align-items: stretch;
        flex-wrap: wrap;
      }
      label {
        width: calc(100% - 82px);
        flex: 1 1 220px;
      }
      .toolbar__spacer {
        display: none;
      }
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormBuilderToolbarComponent {
  readonly forms = input<AdmissionForm[]>([]);
  readonly form = input<AdmissionForm | null>(null);
  readonly formSelected = output<string>();
  readonly createRequested = output<void>();
}
