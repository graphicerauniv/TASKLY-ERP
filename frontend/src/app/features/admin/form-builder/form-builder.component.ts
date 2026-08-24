import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ApiService } from '../../../core/api.service';
import {
  AdmissionForm,
  FormField,
  FormSection,
  FormSubsection,
  MasterType,
} from '../../../core/models';

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
  kind: 'section' | 'subsection' | 'field';
  targetId: string;
  title: string;
  message: string;
};

@Component({
  selector: 'erp-form-builder',
  imports: [FormsModule],
  templateUrl: './form-builder.component.html',
  styleUrl: './form-builder.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormBuilderComponent {
  private readonly api = inject(ApiService);
  readonly forms = signal<AdmissionForm[]>([]);
  readonly form = signal<AdmissionForm | null>(null);
  readonly types = signal<MasterType[]>([]);
  readonly selectedSectionId = signal('');
  readonly selectedSubsectionId = signal('');
  readonly selectedFieldId = signal('');
  readonly fieldTypes = FIELD_TYPES;
  readonly saving = signal(false);
  readonly message = signal('');
  readonly error = signal('');
  readonly nameDialog = signal<NameDialog | null>(null);
  readonly fieldDialog = signal<{ mode: 'add' | 'edit'; draft: FormField } | null>(null);
  readonly deleteDialog = signal<DeleteDialog | null>(null);
  newFormName = '';
  dialogName = '';
  dialogDescription = '';
  dialogOptionText = '';
  constructor() {
    this.load();
    this.api
      .masterTypes()
      .subscribe(({ items }) => this.types.set(items.filter((t) => t.isActive)));
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
  }
  createForm() {
    if (!this.newFormName.trim()) return;
    this.api
      .createForm({
        name: this.newFormName,
        description: '',
        status: 'draft',
        isActive: true,
        sections: [],
      })
      .subscribe(({ item }) => {
        this.newFormName = '';
        this.forms.update((v) => [item, ...v]);
        this.choose(item);
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
  }
  selectField(field: FormField) {
    this.selectedFieldId.set(field.id);
    this.dialogOptionText = field.options.map((option) => option.label).join('\n');
    const draft = structuredClone(field);
    this.configureUpload(draft);
    this.fieldDialog.set({ mode: 'edit', draft });
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
  }
  closeFieldDialog() {
    this.fieldDialog.set(null);
    this.selectedFieldId.set('');
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
  }
  private uid(prefix: string) {
    return `${prefix}_${crypto.randomUUID()}`;
  }
}
