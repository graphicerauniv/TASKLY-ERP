import {
  ChangeDetectionStrategy,
  Component,
  HostListener,
  input,
  output,
  signal,
} from '@angular/core';
import { LucideCheck, LucideChevronDown, LucideX } from '@lucide/angular';

export interface MultiSelectOption {
  readonly value: string;
  readonly label: string;
}
let nextMultiSelectId = 0;

@Component({
  selector: 'erp-multi-select-dropdown',
  imports: [LucideCheck, LucideChevronDown, LucideX],
  templateUrl: './multi-select-dropdown.component.html',
  styleUrl: './multi-select-dropdown.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MultiSelectDropdownComponent {
  readonly options = input.required<readonly MultiSelectOption[]>();
  readonly value = input<readonly string[]>([]);
  readonly placeholder = input('Select options');
  readonly disabled = input(false);
  readonly valueChange = output<string[]>();
  readonly open = signal(false);
  readonly panelId = `erp-multi-select-${++nextMultiSelectId}`;

  summary(): string {
    const selected = this.options().filter((option) => this.value().includes(option.value));
    if (!selected.length) return this.placeholder();
    if (selected.length <= 2) return selected.map((option) => option.label).join(', ');
    return `${selected[0].label}, ${selected[1].label} +${selected.length - 2}`;
  }
  toggle(value: string): void {
    const current = [...this.value()];
    this.valueChange.emit(
      current.includes(value) ? current.filter((item) => item !== value) : [...current, value],
    );
  }
  clear(): void {
    this.valueChange.emit([]);
  }
  @HostListener('document:keydown.escape') close(): void {
    this.open.set(false);
  }
}
