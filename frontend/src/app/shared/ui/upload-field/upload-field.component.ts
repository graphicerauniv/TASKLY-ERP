import { ChangeDetectionStrategy, Component, computed, input, output } from '@angular/core';
import { LucideImage, LucidePaperclip, LucideRefreshCw, LucideX } from '@lucide/angular';
import { FormField } from '../../../core/models';

@Component({
  selector: 'erp-upload-field',
  imports: [LucideImage, LucidePaperclip, LucideRefreshCw, LucideX],
  templateUrl: './upload-field.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UploadFieldComponent {
  readonly field = input.required<FormField>();
  readonly value = input<unknown>();
  readonly fileSelected = output<File>();
  readonly removed = output<void>();

  readonly accept = computed(() => {
    const categories =
      this.field().uploadConfig?.allowedTypes ||
      (this.field().type === 'file' ? ['image', 'pdf', 'word'] : ['image']);
    return categories
      .flatMap((type) =>
        type === 'image'
          ? ['image/jpeg', 'image/png', 'image/webp']
          : type === 'pdf'
            ? ['application/pdf']
            : [
                'application/msword',
                'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
              ],
      )
      .join(',');
  });

  readonly helpText = computed(() => {
    const categories =
      this.field().uploadConfig?.allowedTypes ||
      (this.field().type === 'file' ? ['image', 'pdf', 'word'] : ['image']);
    const labels = categories
      .map((type) => ({ image: 'JPG / PNG / WebP', pdf: 'PDF', word: 'DOC / DOCX' })[type])
      .join(' · ');
    return `${labels} · Maximum ${this.field().uploadConfig?.maxSizeMb || 5} MB`;
  });

  choose(event: Event) {
    const input = event.target as HTMLInputElement;
    const file = input.files?.[0];
    if (file) this.fileSelected.emit(file);
    input.value = '';
  }

  fileName() {
    const value = this.value() as { name?: string } | null | undefined;
    return value?.name || 'Uploaded file';
  }
}
