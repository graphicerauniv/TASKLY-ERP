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
  newFormName = '';
  optionText = '';
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
    const name = prompt('Super Section name');
    if (!name) return;
    const section: FormSection = {
      id: this.uid('sec'),
      name,
      description: '',
      isActive: true,
      order: 0,
      subsections: [],
    };
    this.change((f) => f.sections.push(section));
    this.selectedSectionId.set(section.id);
    this.selectedSubsectionId.set('');
  }
  renameSection(section: FormSection) {
    const name = prompt('Super Section name', section.name);
    if (name) this.change(() => (section.name = name));
  }
  removeSection(section: FormSection) {
    if (confirm(`Delete ${section.name} and all its fields?`))
      this.change((f) => {
        f.sections = f.sections.filter((s) => s.id !== section.id);
        this.selectedSectionId.set(f.sections[0]?.id || '');
        this.selectedSubsectionId.set(f.sections[0]?.subsections[0]?.id || '');
      });
  }
  addSubsection() {
    const section = this.section();
    if (!section) return;
    const name = prompt('Sub Section name');
    if (!name) return;
    const sub: FormSubsection = {
      id: this.uid('sub'),
      name,
      description: '',
      isActive: true,
      isRepeatable: false,
      minEntries: 0,
      maxEntries: null,
      order: 0,
      visibilityCondition: null,
      fields: [],
    };
    this.change(() => section.subsections.push(sub));
    this.selectedSubsectionId.set(sub.id);
  }
  renameSubsection(sub: FormSubsection) {
    const name = prompt('Sub Section name', sub.name);
    if (name) this.change(() => (sub.name = name));
  }
  removeSubsection(sub: FormSubsection) {
    if (confirm(`Delete ${sub.name}?`))
      this.change(() => {
        const section = this.section();
        if (section) section.subsections = section.subsections.filter((s) => s.id !== sub.id);
        this.selectedSubsectionId.set(this.section()?.subsections[0]?.id || '');
      });
  }
  addField() {
    const sub = this.subsection();
    if (!sub) return;
    const field: FormField = {
      id: this.uid('fld'),
      name: 'New Field',
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
      visibilityCondition: null,
    };
    this.change(() => sub.fields.push(field));
    this.selectedFieldId.set(field.id);
    this.optionText = '';
  }
  selectField(field: FormField) {
    this.selectedFieldId.set(field.id);
    this.optionText = field.options.map((o) => o.label).join('\n');
  }
  removeField(field: FormField) {
    if (confirm(`Delete ${field.name}?`))
      this.change(() => {
        const sub = this.subsection();
        if (sub) sub.fields = sub.fields.filter((f) => f.id !== field.id);
        this.selectedFieldId.set('');
      });
  }
  move<T>(items: T[], index: number, direction: number) {
    const target = index + direction;
    if (target < 0 || target >= items.length) return;
    this.change(() => {
      [items[index], items[target]] = [items[target], items[index]];
    });
  }
  updateOptions() {
    const field = this.field();
    if (!field) return;
    this.change(
      () =>
        (field.options = this.optionText
          .split('\n')
          .map((v) => v.trim())
          .filter(Boolean)
          .map((v) => ({ label: v, value: v }))),
    );
  }
  sourceChanged() {
    const field = this.field();
    if (!field) return;
    this.change(() => {
      if (!field.dataSource?.masterTypeSlug) field.dataSource = null;
    });
  }
  searchableChanged() {
    const field = this.field();
    if (!field) return;
    this.change(
      () =>
        (field.searchConfig = field.searchable
          ? { searchField: String(field.searchConfig?.['searchField'] || 'name') }
          : null),
    );
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
        this.message.set(publish ? 'Form published.' : 'Form saved.');
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
