import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';
import {
  LucideAlignLeft,
  LucideAtSign,
  LucideCalendarDays,
  LucideCheckSquare2,
  LucideCircleDot,
  LucideDynamicIcon,
  LucideFileUp,
  LucideHash,
  LucideImage,
  LucideListChecks,
  LucidePenTool,
  LucideSmartphone,
  LucideTextCursorInput,
} from '@lucide/angular';

const FIELD_TYPE_ICONS = {
  number: LucideHash,
  email: LucideAtSign,
  mobile: LucideSmartphone,
  date: LucideCalendarDays,
  textarea: LucideAlignLeft,
  dropdown: LucideListChecks,
  radio: LucideCircleDot,
  checkbox: LucideCheckSquare2,
  'multi-select': LucideListChecks,
  file: LucideFileUp,
  image: LucideImage,
  signature: LucidePenTool,
} as const;

@Component({
  selector: 'erp-field-type-icon',
  imports: [LucideDynamicIcon],
  template: `<svg [lucideIcon]="icon()" [size]="size()" aria-hidden="true"></svg>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FieldTypeIconComponent {
  readonly type = input('text');
  readonly size = input(16);
  readonly icon = computed(
    () => FIELD_TYPE_ICONS[this.type() as keyof typeof FIELD_TYPE_ICONS] ?? LucideTextCursorInput,
  );
}
