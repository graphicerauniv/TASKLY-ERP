import { ChangeDetectionStrategy, Component, computed, input, output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FormField, MasterValue } from '../../../core/models';
import { UploadFieldComponent } from '../upload-field/upload-field.component';

@Component({
  selector: 'erp-dynamic-field-renderer',
  imports: [FormsModule, UploadFieldComponent],
  templateUrl: './dynamic-field-renderer.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'erp-dynamic-field',
    '[class.erp-dynamic-field--wide]': 'wide()',
  },
})
export class DynamicFieldRendererComponent {
  readonly field = input.required<FormField>();
  readonly modelValue = input<unknown>();
  readonly options = input<readonly MasterValue[]>([]);
  readonly entryKey = input('single');
  readonly modelChanged = output<unknown>();
  readonly optionSearch = output<string>();
  readonly fileSelected = output<File>();
  readonly uploadRemoved = output<void>();

  readonly wide = computed(() => this.field().type === 'textarea');
  readonly controlId = computed(() => `field-${this.field().id}-${this.entryKey()}`);

  isChecked(option: string) {
    const current = this.modelValue();
    return Array.isArray(current) && current.includes(option);
  }

  toggleChoice(option: string, checked: boolean) {
    const value = this.modelValue();
    const current = Array.isArray(value) ? [...value] : [];
    const next = checked
      ? [...new Set([...current, option])]
      : current.filter((value) => value !== option);
    this.modelChanged.emit(next);
  }

  requestSearch(event: Event) {
    this.optionSearch.emit((event.target as HTMLInputElement).value);
  }
}
