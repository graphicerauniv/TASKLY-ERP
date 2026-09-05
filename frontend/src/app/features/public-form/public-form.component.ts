import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../../core/api.service';
import {
  AdmissionForm,
  FormField,
  FormSubmission,
  FormSubsection,
  MasterValue,
} from '../../core/models';
import { DynamicFieldRendererComponent } from '../../shared/ui/dynamic-field-renderer/dynamic-field-renderer.component';

@Component({
  selector: 'erp-admin-form-entry',
  imports: [DynamicFieldRendererComponent],
  templateUrl: './public-form.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PublicFormComponent {
  private readonly api = inject(ApiService);
  private readonly route = inject(ActivatedRoute);
  readonly form = signal<AdmissionForm | null>(null);
  readonly responses = signal<Record<string, unknown>>({});
  readonly repeatableResponses = signal<Record<string, Record<string, unknown>[]>>({});
  readonly options = signal<Record<string, MasterValue[]>>({});
  readonly loading = signal(true);
  readonly submitting = signal(false);
  readonly submission = signal<FormSubmission | null>(null);
  readonly error = signal('');
  readonly editing = signal(false);
  private submissionPurpose = '';
  private submissionId = '';

  constructor() {
    this.submissionPurpose = this.route.snapshot.paramMap.get('purpose') || '';
    this.submissionId = this.route.snapshot.paramMap.get('submissionId') || '';
    if (this.submissionId) {
      this.editing.set(true);
      this.api.formSubmission(this.submissionPurpose, this.submissionId).subscribe({
        next: ({ item }) => {
          this.form.set(item.formSnapshot || null);
          this.responses.set({ ...(item.responses || {}) });
          this.repeatableResponses.set(structuredClone(item.repeatableResponses || {}));
          this.initializeOptions();
          this.loading.set(false);
        },
        error: (error) => {
          this.error.set(error.error?.message || 'This submitted record is unavailable.');
          this.loading.set(false);
        },
      });
      return;
    }
    this.api.form(this.route.snapshot.paramMap.get('formId') || '').subscribe({
      next: ({ item }) => {
        if (
          (item.purpose || 'admission') === 'admission' ||
          item.status !== 'published' ||
          !item.isActive
        ) {
          this.error.set('This data-entry form is unavailable.');
          this.loading.set(false);
          return;
        }
        this.form.set(item);
        const defaults: Record<string, unknown> = {};
        for (const field of this.fields(item)) {
          if (field.defaultValue !== undefined && field.defaultValue !== null)
            defaults[field.id] = field.defaultValue;
        }
        this.responses.set(defaults);
        this.initializeOptions();
        this.loading.set(false);
      },
      error: (error) => {
        this.error.set(error.error?.message || 'This application form is unavailable.');
        this.loading.set(false);
      },
    });
  }

  activeSubsections() {
    return (this.form()?.sections || [])
      .filter((section) => section.isActive)
      .map((section) => ({
        ...section,
        subsections: section.subsections.filter(
          (subsection) =>
            subsection.isActive !== false &&
            this.matches(subsection.visibilityCondition, this.responses()),
        ),
      }));
  }
  value(field: FormField, entry?: Record<string, unknown>) {
    return (entry || this.responses())[field.id];
  }
  setValue(field: FormField, value: unknown, entry?: Record<string, unknown>) {
    if (entry) entry[field.id] = value;
    else this.responses.update((current) => ({ ...current, [field.id]: value }));
    for (const dependent of this.fields(this.form()))
      if (dependent.dataSource?.parentFieldId === field.id) {
        if (entry) entry[dependent.id] = '';
        else this.responses.update((current) => ({ ...current, [dependent.id]: '' }));
        this.loadOptions(dependent, value ? String(value) : undefined);
      }
  }
  visible(field: FormField, entry?: Record<string, unknown>) {
    return field.isActive && this.matches(field.visibilityCondition, entry || this.responses());
  }
  private matches(condition: FormField['visibilityCondition'], values: Record<string, unknown>) {
    if (!condition) return true;
    const current = values[condition.fieldId];
    const selected = Array.isArray(current) ? current : [current];
    const candidates = selected.flatMap((value) => {
      const option = Object.values(this.options())
        .flat()
        .find((item) => item._id === String(value ?? ''));
      return option ? [value, option.name, option.label] : [value];
    });
    const expected = String(condition.value ?? '')
      .trim()
      .toLowerCase();
    if (condition.operator === 'is-empty') return current == null || current === '';
    if (condition.operator === 'is-not-empty') return current != null && current !== '';
    if (condition.operator === 'not-equals')
      return !candidates.some(
        (value) =>
          String(value ?? '')
            .trim()
            .toLowerCase() === expected,
      );
    if (condition.operator === 'contains')
      return candidates.some((value) =>
        String(value ?? '')
          .trim()
          .toLowerCase()
          .includes(expected),
      );
    return candidates.some(
      (value) =>
        String(value ?? '')
          .trim()
          .toLowerCase() === expected,
    );
  }
  fieldOptions(field: FormField) {
    return this.options()[field.id] || [];
  }
  searchOptions(field: FormField, search: string) {
    this.loadOptions(field, this.parentValue(field), search);
  }
  entries(subsection: FormSubsection) {
    return this.repeatableResponses()[subsection.id] || [];
  }
  addEntry(subsection: FormSubsection) {
    if (subsection.maxEntries && this.entries(subsection).length >= subsection.maxEntries) return;
    this.repeatableResponses.update((current) => ({
      ...current,
      [subsection.id]: [...(current[subsection.id] || []), {}],
    }));
  }
  removeEntry(subsection: FormSubsection, index: number) {
    this.repeatableResponses.update((current) => ({
      ...current,
      [subsection.id]: (current[subsection.id] || []).filter((_, itemIndex) => itemIndex !== index),
    }));
  }
  upload(field: FormField, file: File, entry?: Record<string, unknown>) {
    const form = this.form();
    if (!form?._id) return;
    this.api.uploadAdminForm(form._id, field.id, file).subscribe({
      next: ({ file: stored }) => this.setValue(field, stored, entry),
      error: (error) => this.error.set(error.error?.message || 'The file could not be uploaded.'),
    });
  }
  submit() {
    const form = this.form();
    if (!form?._id || this.submitting()) return;
    this.submitting.set(true);
    this.error.set('');
    const request = this.editing()
      ? this.api.updateFormSubmission(
          this.submissionPurpose,
          this.submissionId,
          this.responses(),
          this.repeatableResponses(),
        )
      : this.api.submitAdminForm(form._id, this.responses(), this.repeatableResponses());
    request.subscribe({
      next: ({ item }) => {
        this.submission.set(item);
        this.submitting.set(false);
      },
      error: (error) => {
        this.error.set(
          error.error?.errors?.map((item: { message: string }) => item.message).join(' ') ||
            error.error?.message ||
            'The form could not be submitted.',
        );
        this.submitting.set(false);
      },
    });
  }
  startAnother() {
    const form = this.form();
    if (!form || this.editing()) return;
    const defaults: Record<string, unknown> = {};
    for (const field of this.fields(form))
      if (field.defaultValue !== undefined && field.defaultValue !== null)
        defaults[field.id] = field.defaultValue;
    this.responses.set(defaults);
    this.repeatableResponses.set({});
    this.submission.set(null);
    this.error.set('');
  }
  private initializeOptions() {
    for (const field of this.fields(this.form()))
      if (field.dataSource)
        this.loadOptions(
          field,
          field.dataSource.parentFieldId ? this.parentValue(field) : undefined,
        );
  }
  private loadOptions(field: FormField, parentId?: string, search = '') {
    if (!field.dataSource) return;
    this.api.publicOptions(field.dataSource.masterTypeSlug, parentId, search).subscribe({
      next: ({ items }) => this.options.update((current) => ({ ...current, [field.id]: items })),
    });
  }
  private parentValue(field: FormField) {
    const parentFieldId = field.dataSource?.parentFieldId;
    return parentFieldId ? String(this.responses()[parentFieldId] || '') : undefined;
  }
  private fields(form: AdmissionForm | null) {
    return (form?.sections || [])
      .flatMap((section) => section.subsections)
      .flatMap((subsection) => subsection.fields)
      .filter((field) => field.isActive);
  }
}
