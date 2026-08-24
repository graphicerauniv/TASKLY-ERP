import { ChangeDetectionStrategy, Component, input, output } from '@angular/core';
import {
  LucideGripVertical,
  LucideListTree,
  LucidePlus,
  LucideRows3,
  LucideTextCursorInput,
} from '@lucide/angular';
import { FormField, FormSection, FormSubsection } from '../../../../core/models';
import {
  CompactActionItem,
  CompactActionMenuComponent,
} from '../../../../shared/ui/compact-action-menu/compact-action-menu.component';
import { FieldTypeIconComponent } from '../../../../shared/ui/field-type-icon/field-type-icon.component';

export interface CanvasFieldActionEvent {
  action: string;
  field: FormField;
  index: number;
}

@Component({
  selector: 'erp-form-canvas',
  imports: [
    CompactActionMenuComponent,
    FieldTypeIconComponent,
    LucideGripVertical,
    LucideListTree,
    LucidePlus,
    LucideRows3,
    LucideTextCursorInput,
  ],
  templateUrl: './form-canvas.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormCanvasComponent {
  readonly section = input<FormSection | undefined>(undefined);
  readonly subsection = input<FormSubsection | undefined>(undefined);
  readonly selectedFieldId = input('');
  readonly structureVisible = input(true);

  readonly structureRequested = output<void>();
  readonly addFieldRequested = output<void>();
  readonly fieldSelected = output<FormField>();
  readonly fieldAction = output<CanvasFieldActionEvent>();
  readonly sectionAction = output<string>();

  readonly sectionActions: CompactActionItem[] = [
    { id: 'rename', label: 'Edit section', icon: 'edit' },
    { id: 'duplicate', label: 'Duplicate', icon: 'duplicate' },
    { id: 'delete', label: 'Delete', icon: 'delete', destructive: true, separator: true },
  ];

  readonly fieldActions: CompactActionItem[] = [
    { id: 'edit', label: 'Edit settings', icon: 'edit' },
    { id: 'duplicate', label: 'Duplicate', icon: 'duplicate' },
    { id: 'up', label: 'Move up', icon: 'up' },
    { id: 'down', label: 'Move down', icon: 'down' },
    { id: 'disable', label: 'Disable', icon: 'view' },
    { id: 'delete', label: 'Delete', icon: 'delete', destructive: true, separator: true },
  ];
}
