import {
  ChangeDetectionStrategy,
  Component,
  HostListener,
  computed,
  inject,
  signal,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
  LucideCheck,
  LucideCopy,
  LucideListTree,
  LucideSave,
  LucideSend,
  LucideSettings2,
  LucideTrash2,
} from '@lucide/angular';
import { ApiService } from '../../../core/api.service';
import {
  AdmissionForm,
  FormField,
  FormSection,
  FormSubsection,
  MasterType,
} from '../../../core/models';
import { SettingsModalComponent } from '../../../shared/ui/settings-modal/settings-modal.component';
import { BuilderPageHeaderComponent } from './components/builder-page-header.component';
import { FormBuilderToolbarComponent } from './components/form-builder-toolbar.component';
import {
  FormStructurePanelComponent,
  StructureFieldActionEvent,
  StructureFieldEvent,
  StructureSectionActionEvent,
  StructureSubsectionActionEvent,
  StructureSubsectionEvent,
} from './components/form-structure-panel.component';
import { CanvasFieldActionEvent, FormCanvasComponent } from './components/form-canvas.component';

const FIELD_TYPES = [
  ['text', 'Text'],
  ['number', 'Number'],
  ['email', 'Email'],
  ['mobile', 'Mobile Number'],
  ['date', 'Date'],
  ['textarea', 'Textarea'],
  ['dropdown', 'Dropdown'],
  ['radio', 'Radio Button'],
  ['checkbox', 'Checkbox'],
  ['multi-select', 'Multi Select'],
  ['file', 'File Upload'],
  ['image', 'Image Upload'],
  ['signature', 'Signature'],
];

type NameDialog = {
  kind: 'section' | 'subsection';
  mode: 'add' | 'edit';
  targetId?: string;
};

type DeleteDialog = {
  kind: 'form' | 'section' | 'subsection' | 'field';
  targetId: string;
  title: string;
  message: string;
};

@Component({
  selector: 'erp-form-builder',
  imports: [
    BuilderPageHeaderComponent,
    FormBuilderToolbarComponent,
    FormStructurePanelComponent,
    FormCanvasComponent,
    FormsModule,
    SettingsModalComponent,
    LucideCheck,
    LucideCopy,
    LucideListTree,
    LucideSave,
    LucideSend,
    LucideSettings2,
    LucideTrash2,
  ],
  templateUrl: './form-builder.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormBuilderComponent {
  private readonly api = inject(ApiService);
  private compactStructureLayout = false;
  readonly forms = signal<AdmissionForm[]>([]);
  readonly form = signal<AdmissionForm | null>(null);
  readonly types = signal<MasterType[]>([]);
  readonly selectedSectionId = signal('');
  readonly selectedSubsectionId = signal('');
  readonly selectedFieldId = signal('');
  readonly expandedSectionIds = signal<Set<string>>(new Set());
  readonly fieldTypes = FIELD_TYPES;
  readonly saving = signal(false);
  readonly dirty = signal(false);
  readonly message = signal('');
  readonly error = signal('');
  readonly nameDialog = signal<NameDialog | null>(null);
  readonly fieldDialog = signal<{ mode: 'add' | 'edit'; draft: FormField } | null>(null);
  readonly deleteDialog = signal<DeleteDialog | null>(null);
  readonly deleting = signal(false);
  readonly deleteError = signal('');
  readonly createFormDialog = signal(false);
  readonly creatingForm = signal(false);
  readonly createFormError = signal('');
  readonly inspectorVisible = signal(false);
  readonly structureVisible = signal(true);
  readonly saveStateText = computed(() => {
    if (this.saving()) return 'Saving changes…';
    if (this.dirty()) return 'Unsaved changes';
    return 'Saved just now';
  });
  readonly inspectorTitle = computed(() => {
    const dialog = this.fieldDialog();
    if (dialog)
      return dialog.mode === 'add' ? 'New field' : dialog.draft.name || 'Field properties';
    return this.subsection()?.name || this.section()?.name || 'Properties';
  });
  readonly inspectorEyebrow = computed(() => {
    if (this.fieldDialog()) return 'Field settings';
    if (this.subsection()) return 'Section settings';
    if (this.section()) return 'Tab settings';
    return 'Configuration';
  });
  newFormName = '';
  dialogName = '';
  dialogDescription = '';
  dialogOptionText = '';
  constructor() {
    if (typeof window !== 'undefined') {
      this.compactStructureLayout = window.innerWidth < 1440;
      if (this.compactStructureLayout) this.structureVisible.set(false);
    }
    this.load();
    this.api
      .masterTypes()
      .subscribe(({ items }) => this.types.set(items.filter((t) => t.isActive)));
  }
  @HostListener('window:resize')
  handleViewportResize() {
    const compact = window.innerWidth < 1440;
    if (compact === this.compactStructureLayout) return;
    this.compactStructureLayout = compact;
    this.structureVisible.set(!compact);
  }
  load() {
    this.api.forms().subscribe(({ items }) => {
      this.forms.set(items);
      if (!this.form() && items.length) this.choose(items[0]);
    });
  }
  chooseForm(id: string) {
    const item = this.forms().find((candidate) => candidate._id === id);
    if (item) this.choose(item);
  }
  choose(form: AdmissionForm) {
    this.form.set(structuredClone(form));
    this.selectedSectionId.set(form.sections[0]?.id || '');
    this.selectedSubsectionId.set(form.sections[0]?.subsections[0]?.id || '');
    this.selectedFieldId.set('');
    this.expandedSectionIds.set(new Set());
    this.fieldDialog.set(null);
    this.inspectorVisible.set(false);
    this.dirty.set(false);
  }
  createForm() {
    const name = this.newFormName.trim();
    if (!name || this.creatingForm()) return;
    this.creatingForm.set(true);
    this.createFormError.set('');
    this.api
      .createForm({
        name,
        description: '',
        status: 'draft',
        isActive: true,
        sections: [],
      })
      .subscribe({
        next: ({ item }) => {
          this.newFormName = '';
          this.createFormDialog.set(false);
          this.forms.update((v) => [item, ...v]);
          this.choose(item);
          this.creatingForm.set(false);
        },
        error: (error) => {
          this.createFormError.set(error.error?.message || 'Unable to create form. Try again.');
          this.creatingForm.set(false);
        },
      });
  }
  openCreateFormDialog() {
    this.newFormName = '';
    this.createFormError.set('');
    this.createFormDialog.set(true);
  }
  closeCreateFormDialog() {
    if (this.creatingForm()) return;
    this.createFormDialog.set(false);
    this.createFormError.set('');
  }
  handleFormAction(action: string) {
    if (action !== 'delete') return;
    const form = this.form();
    if (!form) return;
    this.deleteError.set('');
    this.deleteDialog.set({
      kind: 'form',
      targetId: form._id,
      title: 'Delete admission form?',
      message: `${form.name} and its complete form structure will be permanently deleted.`,
    });
  }
  section() {
    return this.form()?.sections.find((s) => s.id === this.selectedSectionId());
  }
  subsection() {
    return this.section()?.subsections.find((s) => s.id === this.selectedSubsectionId());
  }
  field() {
    return this.subsection()?.fields.find((f) => f.id === this.selectedFieldId());
  }
  allFields() {
    return (this.form()?.sections || []).flatMap((s) => s.subsections).flatMap((s) => s.fields);
  }
  addSection() {
    this.dialogName = '';
    this.dialogDescription = '';
    this.nameDialog.set({ kind: 'section', mode: 'add' });
  }
  selectSection(section: FormSection) {
    this.selectedSectionId.set(section.id);
    this.selectedSubsectionId.set('');
    this.selectedFieldId.set('');
    this.fieldDialog.set(null);
    this.inspectorVisible.set(false);
    this.closeStructureOnCompactScreen();
  }
  sectionExpanded(sectionId: string) {
    return this.expandedSectionIds().has(sectionId);
  }
  toggleSectionExpansion(section: FormSection) {
    this.expandedSectionIds.update((ids) => {
      const next = new Set(ids);
      if (next.has(section.id)) next.delete(section.id);
      else next.add(section.id);
      return next;
    });
  }
  renameSection(section: FormSection) {
    this.dialogName = section.name;
    this.dialogDescription = section.description;
    this.nameDialog.set({ kind: 'section', mode: 'edit', targetId: section.id });
  }
  removeSection(section: FormSection) {
    this.deleteDialog.set({
      kind: 'section',
      targetId: section.id,
      title: 'Delete Super Section?',
      message: `${section.name} and all of its Sub Sections and fields will be removed.`,
    });
  }
  addSubsection() {
    if (!this.section()) return;
    this.dialogName = '';
    this.dialogDescription = '';
    this.nameDialog.set({ kind: 'subsection', mode: 'add' });
  }
  selectSubsection(section: FormSection, subsection: FormSubsection) {
    this.selectedSectionId.set(section.id);
    this.selectedSubsectionId.set(subsection.id);
    this.selectedFieldId.set('');
    this.fieldDialog.set(null);
    this.inspectorVisible.set(false);
    this.closeStructureOnCompactScreen();
  }
  renameSubsection(sub: FormSubsection) {
    this.dialogName = sub.name;
    this.dialogDescription = sub.description;
    this.nameDialog.set({ kind: 'subsection', mode: 'edit', targetId: sub.id });
  }
  removeSubsection(sub: FormSubsection) {
    this.deleteDialog.set({
      kind: 'subsection',
      targetId: sub.id,
      title: 'Delete Sub Section?',
      message: `${sub.name} and all fields inside it will be removed.`,
    });
  }
  addField() {
    const sub = this.subsection();
    if (!sub) return;
    const draft: FormField = {
      id: this.uid('fld'),
      name: '',
      type: 'text',
      isRequired: false,
      isActive: true,
      order: sub.fields.length,
      placeholder: '',
      defaultValue: null,
      helpText: '',
      options: [],
      dataSource: null,
      searchable: false,
      searchConfig: null,
      validation: {},
      uploadConfig: null,
      visibilityCondition: null,
    };
    this.selectedFieldId.set(draft.id);
    this.dialogOptionText = '';
    this.fieldDialog.set({ mode: 'add', draft });
    this.inspectorVisible.set(true);
  }
  selectField(field: FormField) {
    this.selectedFieldId.set(field.id);
    this.dialogOptionText = field.options.map((option) => option.label).join('\n');
    const draft = structuredClone(field);
    this.configureUpload(draft);
    this.fieldDialog.set({ mode: 'edit', draft });
    this.inspectorVisible.set(true);
  }
  selectFieldFromTree(section: FormSection, subsection: FormSubsection, field: FormField) {
    this.selectedSectionId.set(section.id);
    this.selectedSubsectionId.set(subsection.id);
    this.selectField(field);
    this.closeStructureOnCompactScreen();
  }
  removeField(field: FormField) {
    this.deleteDialog.set({
      kind: 'field',
      targetId: field.id,
      title: 'Delete Field?',
      message: `${field.name} will be removed from this form configuration.`,
    });
  }
  move<T>(items: T[], index: number, direction: number) {
    const target = index + direction;
    if (target < 0 || target >= items.length) return;
    this.change(() => {
      [items[index], items[target]] = [items[target], items[index]];
    });
  }
  saveNameDialog() {
    const dialog = this.nameDialog();
    const name = this.dialogName.trim();
    if (!dialog || !name) return;
    if (dialog.kind === 'section') {
      if (dialog.mode === 'add') {
        const section: FormSection = {
          id: this.uid('sec'),
          name,
          description: this.dialogDescription.trim(),
          isActive: true,
          order: this.form()?.sections.length || 0,
          subsections: [],
        };
        this.change((form) => form.sections.push(section));
        this.selectedSectionId.set(section.id);
        this.selectedSubsectionId.set('');
      } else {
        this.change((form) => {
          const section = form.sections.find((item) => item.id === dialog.targetId);
          if (section) {
            section.name = name;
            section.description = this.dialogDescription.trim();
          }
        });
      }
    } else {
      const section = this.section();
      if (!section) return;
      if (dialog.mode === 'add') {
        const subsection: FormSubsection = {
          id: this.uid('sub'),
          name,
          description: this.dialogDescription.trim(),
          isActive: true,
          isRepeatable: false,
          minEntries: 0,
          maxEntries: null,
          order: section.subsections.length,
          visibilityCondition: null,
          fields: [],
        };
        this.change(() => section.subsections.push(subsection));
        this.selectedSubsectionId.set(subsection.id);
      } else {
        this.change(() => {
          const subsection = section.subsections.find((item) => item.id === dialog.targetId);
          if (subsection) {
            subsection.name = name;
            subsection.description = this.dialogDescription.trim();
          }
        });
      }
    }
    this.nameDialog.set(null);
  }
  saveFieldDialog() {
    const dialog = this.fieldDialog();
    const subsection = this.subsection();
    if (!dialog || !subsection || !dialog.draft.name.trim()) return;
    dialog.draft.name = dialog.draft.name.trim();
    this.updateDialogOptions();
    this.change(() => {
      const index = subsection.fields.findIndex((field) => field.id === dialog.draft.id);
      if (index >= 0) subsection.fields[index] = structuredClone(dialog.draft);
      else subsection.fields.push(structuredClone(dialog.draft));
    });
    this.selectedFieldId.set(dialog.draft.id);
    this.fieldDialog.set(null);
    this.inspectorVisible.set(false);
  }
  closeFieldDialog() {
    this.fieldDialog.set(null);
    this.selectedFieldId.set('');
    this.inspectorVisible.set(false);
  }
  closeInspector() {
    if (this.fieldDialog()?.mode === 'add') this.selectedFieldId.set('');
    this.fieldDialog.set(null);
    this.inspectorVisible.set(false);
  }
  openInspector() {
    const selected = this.field();
    if (selected) this.selectField(selected);
    this.inspectorVisible.set(true);
  }
  toggleStructure() {
    this.structureVisible.update((visible) => !visible);
  }
  handleStructureAdd(action: string) {
    if (action === 'add-tab') this.addSection();
    if (action === 'add-section') {
      if (!this.section() && this.form()?.sections[0])
        this.selectedSectionId.set(this.form()!.sections[0].id);
      this.addSubsection();
    }
    if (action === 'add-field') this.addField();
  }
  handleStructureSectionSelected(section: FormSection) {
    this.selectSection(section);
  }
  handleStructureSubsectionSelected(event: StructureSubsectionEvent) {
    this.selectSubsection(event.section, event.subsection);
  }
  handleStructureFieldSelected(event: StructureFieldEvent) {
    this.selectFieldFromTree(event.section, event.subsection, event.field);
  }
  handleStructureAddSubsection(section: FormSection) {
    this.selectSection(section);
    this.addSubsection();
  }
  handleStructureSectionAction(event: StructureSectionActionEvent) {
    this.handleSectionAction(event.action, event.section, event.index);
  }
  handleStructureSubsectionAction(event: StructureSubsectionActionEvent) {
    this.handleSubsectionAction(event.action, event.section, event.subsection, event.index);
  }
  handleStructureFieldAction(event: StructureFieldActionEvent) {
    this.selectedSectionId.set(event.section.id);
    this.selectedSubsectionId.set(event.subsection.id);
    this.handleFieldAction(event.action, event.field, event.index);
  }
  handleCanvasFieldAction(event: CanvasFieldActionEvent) {
    this.handleFieldAction(event.action, event.field, event.index);
  }
  handleCanvasSectionAction(action: string) {
    const section = this.section();
    const subsection = this.subsection();
    if (!section || !subsection) return;
    this.handleSubsectionAction(
      action,
      section,
      subsection,
      section.subsections.indexOf(subsection),
    );
  }
  duplicateCurrentSelection() {
    const dialog = this.fieldDialog();
    const subsection = this.subsection();
    if (dialog && subsection && dialog.mode === 'edit') {
      const index = subsection.fields.findIndex((field) => field.id === dialog.draft.id);
      if (index >= 0) this.duplicateField(subsection, dialog.draft, index);
      this.closeInspector();
      return;
    }
    const selectedSubsection = this.subsection();
    const selectedSection = this.section();
    if (selectedSubsection && selectedSection) {
      const index = selectedSection.subsections.findIndex(
        (item) => item.id === selectedSubsection.id,
      );
      this.duplicateSubsection(selectedSection, selectedSubsection, index);
    } else if (selectedSection && this.form()) {
      const index = this.form()!.sections.findIndex((item) => item.id === selectedSection.id);
      this.duplicateSection(selectedSection, index);
    }
    this.closeInspector();
  }
  deleteCurrentSelection() {
    const dialog = this.fieldDialog();
    if (dialog?.mode === 'edit') this.removeField(dialog.draft);
    else if (this.subsection()) this.removeSubsection(this.subsection()!);
    else if (this.section()) this.removeSection(this.section()!);
    this.inspectorVisible.set(false);
  }
  handleSectionAction(action: string, section: FormSection, index: number) {
    if (action === 'rename') this.renameSection(section);
    if (action === 'duplicate') this.duplicateSection(section, index);
    if (action === 'up') this.move(this.form()?.sections || [], index, -1);
    if (action === 'down') this.move(this.form()?.sections || [], index, 1);
    if (action === 'add-child') {
      this.selectSection(section);
      this.addSubsection();
    }
    if (action === 'delete') this.removeSection(section);
  }
  handleSubsectionAction(
    action: string,
    section: FormSection,
    subsection: FormSubsection,
    index: number,
  ) {
    this.selectedSectionId.set(section.id);
    if (action === 'rename') this.renameSubsection(subsection);
    if (action === 'duplicate') this.duplicateSubsection(section, subsection, index);
    if (action === 'up') this.move(section.subsections, index, -1);
    if (action === 'down') this.move(section.subsections, index, 1);
    if (action === 'add-child') {
      this.selectSubsection(section, subsection);
      this.addField();
    }
    if (action === 'delete') this.removeSubsection(subsection);
  }
  handleFieldAction(action: string, field: FormField, index: number) {
    const subsection = this.subsection();
    if (!subsection) return;
    if (action === 'edit') this.selectField(field);
    if (action === 'duplicate') this.duplicateField(subsection, field, index);
    if (action === 'up') this.move(subsection.fields, index, -1);
    if (action === 'down') this.move(subsection.fields, index, 1);
    if (action === 'disable') this.change(() => (field.isActive = !field.isActive));
    if (action === 'delete') this.removeField(field);
  }
  private duplicateSection(section: FormSection, index: number) {
    const copy = structuredClone(section);
    copy.id = this.uid('sec');
    copy.name = `${section.name} copy`;
    copy.subsections = copy.subsections.map((subsection) => ({
      ...subsection,
      id: this.uid('sub'),
      fields: subsection.fields.map((field) => ({ ...field, id: this.uid('fld') })),
    }));
    this.change((form) => form.sections.splice(index + 1, 0, copy));
  }
  private duplicateSubsection(section: FormSection, subsection: FormSubsection, index: number) {
    const copy = structuredClone(subsection);
    copy.id = this.uid('sub');
    copy.name = `${subsection.name} copy`;
    copy.fields = copy.fields.map((field) => ({ ...field, id: this.uid('fld') }));
    this.change(() => section.subsections.splice(index + 1, 0, copy));
  }
  private duplicateField(subsection: FormSubsection, field: FormField, index: number) {
    const copy = structuredClone(field);
    copy.id = this.uid('fld');
    copy.name = `${field.name} copy`;
    this.change(() => subsection.fields.splice(index + 1, 0, copy));
  }
  private closeStructureOnCompactScreen() {
    if (typeof window !== 'undefined' && window.innerWidth < 1440) {
      this.structureVisible.set(false);
    }
  }
  updateDialogOptions() {
    const field = this.fieldDialog()?.draft;
    if (!field) return;
    field.options = this.dialogOptionText
      .split('\n')
      .map((value) => value.trim())
      .filter(Boolean)
      .map((value) => ({ label: value, value }));
  }
  dialogSearchableChanged() {
    const field = this.fieldDialog()?.draft;
    if (!field) return;
    field.searchConfig = field.searchable ? { searchField: 'name' } : null;
  }
  configureUpload(field: FormField) {
    if (!['file', 'image', 'signature'].includes(field.type)) {
      field.uploadConfig = null;
      return;
    }
    const allowedTypes =
      field.type === 'file'
        ? field.uploadConfig?.allowedTypes?.length
          ? field.uploadConfig.allowedTypes
          : (['image', 'pdf', 'word'] as Array<'image' | 'pdf' | 'word'>)
        : (['image'] as Array<'image'>);
    field.uploadConfig = {
      maxSizeMb: field.uploadConfig?.maxSizeMb || 5,
      allowedTypes,
    };
  }
  uploadTypeEnabled(field: FormField, type: 'image' | 'pdf' | 'word') {
    return field.uploadConfig?.allowedTypes.includes(type) || false;
  }
  toggleUploadType(field: FormField, type: 'image' | 'pdf' | 'word', enabled: boolean) {
    if (!field.uploadConfig) this.configureUpload(field);
    if (!field.uploadConfig) return;
    field.uploadConfig.allowedTypes = enabled
      ? [...new Set([...field.uploadConfig.allowedTypes, type])]
      : field.uploadConfig.allowedTypes.filter((candidate) => candidate !== type);
  }
  toggleDialogCondition(enabled: boolean) {
    const field = this.fieldDialog()?.draft;
    if (!field) return;
    field.visibilityCondition = enabled ? { fieldId: '', operator: 'equals', value: '' } : null;
  }
  confirmDelete() {
    const dialog = this.deleteDialog();
    if (!dialog) return;
    if (dialog.kind === 'form') {
      if (this.deleting()) return;
      this.deleting.set(true);
      this.deleteError.set('');
      this.api.deleteForm(dialog.targetId).subscribe({
        next: () => {
          const remaining = this.forms().filter((form) => form._id !== dialog.targetId);
          this.forms.set(remaining);
          this.deleteDialog.set(null);
          this.deleting.set(false);
          if (remaining[0]) this.choose(remaining[0]);
          else {
            this.form.set(null);
            this.selectedSectionId.set('');
            this.selectedSubsectionId.set('');
            this.selectedFieldId.set('');
          }
        },
        error: (error) => {
          this.deleteError.set(
            error.error?.message || 'Unable to delete this form. Try again.',
          );
          this.deleting.set(false);
        },
      });
      return;
    }
    if (dialog.kind === 'section') {
      this.change((form) => {
        form.sections = form.sections.filter((section) => section.id !== dialog.targetId);
        this.selectedSectionId.set(form.sections[0]?.id || '');
        this.selectedSubsectionId.set(form.sections[0]?.subsections[0]?.id || '');
      });
    } else if (dialog.kind === 'subsection') {
      this.change(() => {
        const section = this.section();
        if (section)
          section.subsections = section.subsections.filter(
            (subsection) => subsection.id !== dialog.targetId,
          );
        this.selectedSubsectionId.set(this.section()?.subsections[0]?.id || '');
      });
    } else {
      this.change(() => {
        const subsection = this.subsection();
        if (subsection)
          subsection.fields = subsection.fields.filter((field) => field.id !== dialog.targetId);
        this.selectedFieldId.set('');
      });
    }
    this.deleteDialog.set(null);
  }
  conditionToggle(target: FormField | FormSubsection, enabled: boolean) {
    this.change(
      () =>
        (target.visibilityCondition = enabled
          ? { fieldId: '', operator: 'equals', value: '' }
          : null),
    );
  }
  save(publish = false) {
    const form = this.form();
    if (!form) return;
    if (publish) {
      form.status = 'published';
      form.isActive = true;
    }
    this.saving.set(true);
    this.api.saveForm(form).subscribe({
      next: ({ item }) => {
        this.form.set(item);
        this.forms.update((items) => items.map((f) => (f._id === item._id ? item : f)));
        this.message.set(
          publish
            ? 'Form published. The latest structure is now available in Student Admission.'
            : item.status === 'published'
              ? 'Live form changes saved. Draft admissions will refresh to this structure.'
              : 'Draft saved.',
        );
        this.dirty.set(false);
        this.saving.set(false);
      },
      error: (e) => {
        this.error.set(e.error?.message || 'Unable to save form.');
        this.saving.set(false);
      },
    });
  }
  private change(action: (form: AdmissionForm) => void) {
    const form = this.form();
    if (!form) return;
    action(form);
    this.form.set(structuredClone(form));
    this.dirty.set(true);
  }
  private uid(prefix: string) {
    return `${prefix}_${crypto.randomUUID()}`;
  }
}
