import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgTemplateOutlet } from '@angular/common';
import { ApiService } from '../../../core/api.service';
import {
  Admission,
  AdmissionForm,
  FormField,
  FormSubsection,
  MasterValue,
  VisibilityCondition,
} from '../../../core/models';

@Component({
  selector: 'erp-dynamic-admission',
  imports: [FormsModule, NgTemplateOutlet],
  templateUrl: './dynamic-admission.component.html',
  styleUrl: './dynamic-admission.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DynamicAdmissionComponent {
  private readonly api = inject(ApiService);
  readonly form = signal<AdmissionForm | null>(null);
  readonly admission = signal<Admission | null>(null);
  readonly activeIndex = signal(0);
  readonly optionsState = signal<Record<string, MasterValue[]>>({});
  readonly loading = signal(true);
  readonly saving = signal(false);
  readonly message = signal('');
  readonly error = signal('');
  private accessKey = '';
  constructor() {
    this.initialize();
  }
  private initialize() {
    const stored = this.readStored();
    if (stored) {
      this.accessKey = stored.key;
      this.api
        .getAdmission(stored.id, stored.key)
        .subscribe({ next: ({ item }) => this.acceptAdmission(item), error: () => this.loadNew() });
    } else this.loadNew();
  }
  private loadNew() {
    this.api.activeForm().subscribe({
      next: ({ item }) => {
        this.form.set(item);
        this.api.startAdmission(item._id).subscribe({
          next: ({ item: admission, accessKey }) => {
            this.accessKey = accessKey;
            localStorage.setItem(
              'taskly_admission',
              JSON.stringify({ id: admission._id, key: accessKey }),
            );
            this.acceptAdmission(admission);
          },
          error: (e) => this.fail(e),
        });
      },
      error: (e) => this.fail(e),
    });
  }
  private acceptAdmission(item: Admission) {
    this.admission.set(item);
    this.form.set(item.formSnapshot);
    const index = item.formSnapshot.sections.findIndex(
      (section) => section.id === item.currentSectionId,
    );
    this.activeIndex.set(Math.max(0, index));
    this.loading.set(false);
    this.loadSectionOptions();
  }
  section() {
    return this.form()?.sections[this.activeIndex()];
  }
  visibleSubsections() {
    return (this.section()?.subsections || []).filter((sub) =>
      this.matches(sub.visibilityCondition, this.admission()?.responses || {}),
    );
  }
  value(field: FormField, entry?: Record<string, unknown>) {
    return (entry || this.admission()?.responses || {})[field.id];
  }
  setValue(field: FormField, value: unknown, entry?: Record<string, unknown>, entryIndex?: number) {
    if (entry) entry[field.id] = value;
    else {
      const admission = this.admission();
      if (admission) admission.responses[field.id] = value;
    }
    this.admission.update((v) => (v ? structuredClone(v) : v));
    this.reloadDependents(field.id, entry, entryIndex);
  }
  checked(field: FormField, option: string, entry?: Record<string, unknown>) {
    const current = this.value(field, entry);
    return Array.isArray(current) && current.includes(option);
  }
  toggleChoice(
    field: FormField,
    option: string,
    checked: boolean,
    entry?: Record<string, unknown>,
    entryIndex?: number,
  ) {
    const current = Array.isArray(this.value(field, entry))
      ? [...(this.value(field, entry) as unknown[])]
      : [];
    const next = checked ? [...new Set([...current, option])] : current.filter((v) => v !== option);
    this.setValue(field, next, entry, entryIndex);
  }
  entries(sub: FormSubsection) {
    return this.admission()?.repeatableResponses[sub.id] || [];
  }
  addEntry(sub: FormSubsection) {
    const admission = this.admission();
    if (!admission) return;
    const entries = (admission.repeatableResponses[sub.id] ||= []);
    if (sub.maxEntries && entries.length >= sub.maxEntries) return;
    const entry: Record<string, unknown> = {};
    for (const field of sub.fields)
      if (field.defaultValue != null) entry[field.id] = field.defaultValue;
    entries.push(entry);
    this.admission.set(structuredClone(admission));
    this.loadSubsectionOptions(sub, entries.length - 1, entry);
  }
  removeEntry(sub: FormSubsection, index: number) {
    const admission = this.admission();
    if (!admission) return;
    admission.repeatableResponses[sub.id]?.splice(index, 1);
    this.admission.set(structuredClone(admission));
  }
  matches(condition: VisibilityCondition | null, values: Record<string, unknown>) {
    if (!condition) return true;
    const current = values[condition.fieldId];
    if (condition.operator === 'not-equals')
      return String(current ?? '') !== String(condition.value ?? '');
    if (condition.operator === 'contains')
      return Array.isArray(current)
        ? current.includes(condition.value)
        : String(current ?? '').includes(String(condition.value));
    if (condition.operator === 'is-empty')
      return current == null || current === '' || (Array.isArray(current) && !current.length);
    if (condition.operator === 'is-not-empty')
      return current != null && current !== '' && (!Array.isArray(current) || current.length > 0);
    return String(current ?? '') === String(condition.value ?? '');
  }
  visible(field: FormField, entry?: Record<string, unknown>) {
    return (
      field.isActive &&
      this.matches(field.visibilityCondition, entry || this.admission()?.responses || {})
    );
  }
  fieldOptions(field: FormField, index?: number) {
    return this.optionsState()[this.optionKey(field, index)] || [];
  }
  loadOptions(field: FormField, entry?: Record<string, unknown>, index?: number, search = '') {
    if (!field.dataSource) return;
    const parent = field.dataSource.parentFieldId
      ? (entry || this.admission()?.responses || {})[field.dataSource.parentFieldId]
      : undefined;
    if (field.dataSource.parentFieldId && !parent) {
      this.optionsState.update((v) => ({ ...v, [this.optionKey(field, index)]: [] }));
      return;
    }
    this.api
      .publicOptions(
        field.dataSource.masterTypeSlug,
        parent ? String(parent) : undefined,
        search,
        String(field.searchConfig?.['searchField'] || 'name'),
        field.dataSource.labelField,
      )
      .subscribe(({ items }) =>
        this.optionsState.update((v) => ({ ...v, [this.optionKey(field, index)]: items })),
      );
  }
  search(field: FormField, event: Event, entry?: Record<string, unknown>, index?: number) {
    this.loadOptions(field, entry, index, (event.target as HTMLInputElement).value);
  }
  upload(field: FormField, event: Event, entry?: Record<string, unknown>, index?: number) {
    const file = (event.target as HTMLInputElement).files?.[0],
      admission = this.admission();
    if (!file || !admission) return;
    this.api.upload(admission._id, this.accessKey, file).subscribe({
      next: ({ file: stored }) => this.setValue(field, stored, entry, index),
      error: (e) => this.fail(e),
    });
  }
  save(next = false) {
    const admission = this.admission(),
      section = this.section();
    if (!admission || !section) return;
    this.saving.set(true);
    admission.currentSectionId = section.id;
    this.api.saveAdmission(admission, this.accessKey).subscribe({
      next: ({ item }) => {
        this.admission.set(item);
        this.message.set('Progress saved.');
        this.saving.set(false);
        if (next && this.activeIndex() < (this.form()?.sections.length || 1) - 1) {
          this.activeIndex.update((v) => v + 1);
          const current = this.section();
          if (current) item.currentSectionId = current.id;
          window.scrollTo({ top: 0, behavior: 'smooth' });
          this.loadSectionOptions();
        }
      },
      error: (e) => {
        this.fail(e);
        this.saving.set(false);
      },
    });
  }
  previous() {
    if (this.activeIndex() > 0) {
      this.activeIndex.update((v) => v - 1);
      this.loadSectionOptions();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }
  submit() {
    const admission = this.admission();
    if (!admission) return;
    this.saving.set(true);
    this.api.saveAdmission(admission, this.accessKey).subscribe({
      next: () =>
        this.api.submitAdmission(admission._id, this.accessKey).subscribe({
          next: ({ item }) => {
            this.admission.set(item);
            this.message.set('Application submitted successfully.');
            localStorage.removeItem('taskly_admission');
            this.saving.set(false);
          },
          error: (e) => {
            this.fail(e);
            this.saving.set(false);
          },
        }),
      error: (e) => {
        this.fail(e);
        this.saving.set(false);
      },
    });
  }
  newApplication() {
    localStorage.removeItem('taskly_admission');
    location.reload();
  }
  loadSectionOptions() {
    for (const sub of this.section()?.subsections || []) {
      if (sub.isRepeatable)
        this.entries(sub).forEach((entry, index) => this.loadSubsectionOptions(sub, index, entry));
      else this.loadSubsectionOptions(sub, undefined, undefined);
    }
  }
  private loadSubsectionOptions(
    sub: FormSubsection,
    index?: number,
    entry?: Record<string, unknown>,
  ) {
    for (const field of sub.fields) if (field.dataSource) this.loadOptions(field, entry, index);
  }
  private reloadDependents(parentFieldId: string, entry?: Record<string, unknown>, index?: number) {
    for (const sub of this.section()?.subsections || [])
      for (const field of sub.fields)
        if (field.dataSource?.parentFieldId === parentFieldId) {
          this.setValue(field, '', entry, index);
          this.loadOptions(field, entry, index);
        }
  }
  private optionKey(field: FormField, index?: number) {
    return `${field.id}:${index ?? 'single'}`;
  }
  private readStored(): { id: string; key: string } | null {
    try {
      return JSON.parse(localStorage.getItem('taskly_admission') || 'null');
    } catch {
      return null;
    }
  }
  private fail(error: { error?: { message?: string; errors?: { message: string }[] } }) {
    this.error.set(
      error.error?.errors?.map((e) => e.message).join(' ') ||
        error.error?.message ||
        'Something went wrong.',
    );
    this.loading.set(false);
  }
}
