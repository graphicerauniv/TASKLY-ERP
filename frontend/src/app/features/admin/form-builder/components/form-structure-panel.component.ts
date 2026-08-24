import { ChangeDetectionStrategy, Component, input, output } from '@angular/core';
import {
  LucideChevronRight,
  LucideFileText,
  LucideListTree,
  LucidePlus,
  LucideRows3,
  LucideX,
} from '@lucide/angular';
import { AdmissionForm, FormField, FormSection, FormSubsection } from '../../../../core/models';
import {
  CompactActionItem,
  CompactActionMenuComponent,
} from '../../../../shared/ui/compact-action-menu/compact-action-menu.component';

export interface StructureSubsectionEvent {
  section: FormSection;
  subsection: FormSubsection;
}

export interface StructureFieldEvent extends StructureSubsectionEvent {
  field: FormField;
}

export interface StructureSectionActionEvent {
  action: string;
  section: FormSection;
  index: number;
}

export interface StructureSubsectionActionEvent extends StructureSubsectionEvent {
  action: string;
  index: number;
}

export interface StructureFieldActionEvent extends StructureFieldEvent {
  action: string;
  index: number;
}

@Component({
  selector: 'erp-form-structure-panel',
  imports: [
    CompactActionMenuComponent,
    LucideChevronRight,
    LucideFileText,
    LucideListTree,
    LucidePlus,
    LucideRows3,
    LucideX,
  ],
  templateUrl: './form-structure-panel.component.html',
  host: {
    '[class.structure-panel--open]': 'open()',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormStructurePanelComponent {
  readonly form = input.required<AdmissionForm>();
  readonly open = input(true);
  readonly selectedSectionId = input('');
  readonly selectedSubsectionId = input('');
  readonly selectedFieldId = input('');
  readonly expandedSectionIds = input<ReadonlySet<string>>(new Set());

  readonly closeRequested = output<void>();
  readonly addRequested = output<string>();
  readonly sectionToggled = output<FormSection>();
  readonly sectionSelected = output<FormSection>();
  readonly subsectionSelected = output<StructureSubsectionEvent>();
  readonly fieldSelected = output<StructureFieldEvent>();
  readonly addSubsectionRequested = output<FormSection>();
  readonly sectionAction = output<StructureSectionActionEvent>();
  readonly subsectionAction = output<StructureSubsectionActionEvent>();
  readonly fieldAction = output<StructureFieldActionEvent>();

  readonly addActions: CompactActionItem[] = [
    { id: 'add-tab', label: 'Add tab', icon: 'add-tab' },
    { id: 'add-section', label: 'Add section', icon: 'add-section' },
    { id: 'add-field', label: 'Add field', icon: 'add-field' },
  ];
  readonly sectionActions: CompactActionItem[] = [
    { id: 'rename', label: 'Rename', icon: 'rename' },
    { id: 'duplicate', label: 'Duplicate', icon: 'duplicate' },
    { id: 'up', label: 'Move up', icon: 'up' },
    { id: 'down', label: 'Move down', icon: 'down' },
    { id: 'add-child', label: 'Add sub section', icon: 'add-child' },
    { id: 'delete', label: 'Delete', icon: 'delete', destructive: true, separator: true },
  ];
  readonly subsectionActions: CompactActionItem[] = [
    { id: 'rename', label: 'Rename', icon: 'rename' },
    { id: 'duplicate', label: 'Duplicate', icon: 'duplicate' },
    { id: 'up', label: 'Move up', icon: 'up' },
    { id: 'down', label: 'Move down', icon: 'down' },
    { id: 'add-child', label: 'Add field', icon: 'add-child' },
    { id: 'delete', label: 'Delete', icon: 'delete', destructive: true, separator: true },
  ];
  readonly fieldActions: CompactActionItem[] = [
    { id: 'edit', label: 'Edit settings', icon: 'edit' },
    { id: 'duplicate', label: 'Duplicate', icon: 'duplicate' },
    { id: 'up', label: 'Move up', icon: 'up' },
    { id: 'down', label: 'Move down', icon: 'down' },
    { id: 'delete', label: 'Delete', icon: 'delete', destructive: true, separator: true },
  ];

  sectionExpanded(sectionId: string) {
    return this.expandedSectionIds().has(sectionId);
  }
}
