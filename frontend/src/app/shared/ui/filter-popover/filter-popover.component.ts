import {
  ChangeDetectionStrategy,
  Component,
  HostListener,
  input,
  output,
  signal,
} from '@angular/core';
import { LucideCheck, LucideFilter, LucideX } from '@lucide/angular';

export interface FilterPopoverOption {
  readonly label: string;
  readonly value: string;
}

let nextFilterPopoverId = 0;

@Component({
  selector: 'erp-filter-popover',
  imports: [LucideCheck, LucideFilter, LucideX],
  templateUrl: './filter-popover.component.html',
  styleUrl: './filter-popover.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FilterPopoverComponent {
  readonly label = input('Filters');
  readonly value = input('all');
  readonly resetValue = input('all');
  readonly options = input.required<readonly FilterPopoverOption[]>();
  readonly valueChange = output<string>();
  readonly open = signal(false);
  readonly panelId = `erp-filter-popover-${++nextFilterPopoverId}`;

  select(value: string): void {
    this.valueChange.emit(value);
    this.open.set(false);
  }

  reset(): void {
    this.select(this.resetValue());
  }

  @HostListener('document:keydown.escape')
  close(): void {
    this.open.set(false);
  }
}
