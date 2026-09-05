import {
  ChangeDetectionStrategy,
  Component,
  HostListener,
  computed,
  input,
  output,
  signal,
} from '@angular/core';
import { LucideCheck, LucideColumns3, LucideX } from '@lucide/angular';

export interface ColumnVisibilityOption {
  readonly id: string;
  readonly label: string;
}

let nextColumnPopoverId = 0;

@Component({
  selector: 'erp-column-visibility-popover',
  imports: [LucideCheck, LucideColumns3, LucideX],
  templateUrl: './column-visibility-popover.component.html',
  styleUrl: './column-visibility-popover.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ColumnVisibilityPopoverComponent {
  readonly options = input.required<readonly ColumnVisibilityOption[]>();
  readonly visible = input.required<readonly string[]>();
  readonly visibleChange = output<readonly string[]>();
  readonly open = signal(false);
  readonly panelId = `erp-column-visibility-${++nextColumnPopoverId}`;
  readonly hiddenCount = computed(() =>
    this.options().filter((option) => !this.visible().includes(option.id)).length,
  );

  toggle(id: string): void {
    const current = this.visible();
    if (current.includes(id)) {
      if (current.length === 1) return;
      this.visibleChange.emit(current.filter((column) => column !== id));
      return;
    }
    this.visibleChange.emit([...current, id]);
  }

  reset(): void {
    this.visibleChange.emit(this.options().map((option) => option.id));
  }

  @HostListener('document:keydown.escape')
  close(): void {
    this.open.set(false);
  }
}
