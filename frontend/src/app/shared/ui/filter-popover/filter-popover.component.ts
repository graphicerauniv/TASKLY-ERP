import {
  ChangeDetectionStrategy,
  Component,
  HostListener,
  computed,
  input,
  output,
  signal,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LucideCheck, LucideFilter, LucideX } from '@lucide/angular';

export interface FilterPopoverOption {
  readonly label: string;
  readonly value: string;
}

export interface FilterPopoverField {
  readonly id: string;
  readonly label: string;
  readonly placeholder?: string;
  readonly type?: 'text' | 'select';
  readonly options?: readonly FilterPopoverOption[];
}

let nextFilterPopoverId = 0;

@Component({
  selector: 'erp-filter-popover',
  imports: [FormsModule, LucideCheck, LucideFilter, LucideX],
  templateUrl: './filter-popover.component.html',
  styleUrl: './filter-popover.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FilterPopoverComponent {
  readonly label = input('Filters');
  readonly value = input('all');
  readonly resetValue = input('all');
  readonly options = input<readonly FilterPopoverOption[]>([]);
  readonly fields = input<readonly FilterPopoverField[]>([]);
  readonly values = input<Readonly<Record<string, string>>>({});
  readonly valueChange = output<string>();
  readonly filtersChange = output<Readonly<Record<string, string>>>();
  readonly open = signal(false);
  readonly draftValues = signal<Record<string, string>>({});
  readonly activeCount = computed(() =>
    this.fields().length
      ? Object.values(this.values()).filter((value) => String(value || '').trim()).length
      : this.value() !== this.resetValue()
        ? 1
        : 0,
  );
  readonly panelId = `erp-filter-popover-${++nextFilterPopoverId}`;

  select(value: string): void {
    this.valueChange.emit(value);
    this.open.set(false);
  }

  toggle(): void {
    if (!this.open()) this.draftValues.set({ ...this.values() });
    this.open.update((current) => !current);
  }

  updateDraft(id: string, value: string): void {
    this.draftValues.update((current) => ({ ...current, [id]: value }));
  }

  apply(): void {
    this.filtersChange.emit(
      Object.fromEntries(
        Object.entries(this.draftValues()).map(([key, value]) => [key, String(value || '').trim()]),
      ),
    );
    this.open.set(false);
  }

  reset(): void {
    if (!this.fields().length) {
      this.select(this.resetValue());
      return;
    }
    const cleared = Object.fromEntries(this.fields().map((field) => [field.id, '']));
    this.draftValues.set(cleared);
    this.filtersChange.emit(cleared);
    this.open.set(false);
  }

  @HostListener('document:keydown.escape')
  close(): void {
    this.open.set(false);
  }
}
