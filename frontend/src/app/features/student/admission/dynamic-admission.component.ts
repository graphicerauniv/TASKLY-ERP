import { ChangeDetectionStrategy, Component, inject, input, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LucideCheck } from '@lucide/angular';
import { ApiService } from '../../../core/api.service';
import {
  Admission,
  AdmissionForm,
  FormField,
  FormSection,
  FormSubsection,
  MasterValue,
  VisibilityCondition,
} from '../../../core/models';
import { AdmissionFormWorkspaceComponent } from '../../../shared/ui/admission-form-workspace/admission-form-workspace.component';
import { DynamicFieldRendererComponent } from '../../../shared/ui/dynamic-field-renderer/dynamic-field-renderer.component';
import { DynamicSectionRendererComponent } from '../../../shared/ui/dynamic-section-renderer/dynamic-section-renderer.component';
import { FormActionBarComponent } from '../../../shared/ui/form-action-bar/form-action-bar.component';
import { FormProgressHeaderComponent } from '../../../shared/ui/form-progress-header/form-progress-header.component';
import { FormSectionNavigatorComponent } from '../../../shared/ui/form-section-navigator/form-section-navigator.component';
import { FormSubGroupComponent } from '../../../shared/ui/form-sub-group/form-sub-group.component';
import { FormSectionNavigationItem } from '../../../shared/ui/form-workflow.models';
import { MobileSectionNavigatorSheetComponent } from '../../../shared/ui/mobile-section-navigator-sheet/mobile-section-navigator-sheet.component';

@Component({
  selector: 'erp-dynamic-admission',
  imports: [
    RouterLink,
    LucideCheck,
    AdmissionFormWorkspaceComponent,
    DynamicFieldRendererComponent,
    DynamicSectionRendererComponent,
    FormActionBarComponent,
    FormProgressHeaderComponent,
    FormSectionNavigatorComponent,
    FormSubGroupComponent,
    MobileSectionNavigatorSheetComponent,
  ],
  templateUrl: './dynamic-admission.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { '[class.embedded]': 'embedded()' },
})
export class DynamicAdmissionComponent {
  readonly embedded = input(false);
  private readonly api = inject(ApiService);
  readonly form = signal<AdmissionForm | null>(null);
  readonly admission = signal<Admission | null>(null);
  readonly activeIndex = signal(0);
  readonly optionsState = signal<Record<string, MasterValue[]>>({});
  readonly openSubsectionIds = signal<Set<string>>(new Set());
  readonly loading = signal(true);
  readonly saving = signal(false);
  readonly message = signal('');
  readonly error = signal('');
  readonly dirty = signal(false);
  readonly mobileNavigatorOpen = signal(false);
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
    this.dirty.set(false);
    this.loadSectionOptions();
    this.resetOpenSubsections();
  }
  section() {
    return this.form()?.sections[this.activeIndex()];
  }
  visibleSubsections() {
    return (this.section()?.subsections || []).filter((sub) =>
      this.matches(sub.visibilityCondition, this.admission()?.responses || {}),
    );
  }
  progressPercent() {
    const sections = this.form()?.sections || [];
    if (!sections.length) return 0;
    const progress = sections.reduce((sum, section) => {
      const total = this.totalFields(section);
      if (!total) return sum;
      return sum + Math.min(1, this.completedFields(section) / total);
    }, 0);
    return Math.round((progress / sections.length) * 100);
  }
  completedSectionCount() {
    return (this.form()?.sections || []).filter(
      (section, index) => this.sectionState(index, section) === 'complete',
    ).length;
  }
  activeSectionNumber() {
    return String(this.activeIndex() + 1).padStart(2, '0');
  }
  completedFields(section = this.section()) {
    if (!section) return 0;
    let completed = 0;
    for (const sub of section.subsections) {
      if (!this.matches(sub.visibilityCondition, this.admission()?.responses || {})) continue;
      if (sub.isRepeatable) {
        const entries = this.entries(sub);
        for (const entry of entries) {
          for (const field of sub.fields) {
            if (field.isActive && this.visible(field, entry) && this.hasValue(this.value(field, entry))) {
              completed += 1;
            }
          }
        }
      } else {
        for (const field of sub.fields) {
          if (field.isActive && this.visible(field) && this.hasValue(this.value(field))) {
            completed += 1;
          }
        }
      }
    }
    return completed;
  }
  totalFields(section = this.section()) {
    if (!section) return 0;
    return section.subsections.reduce(
      (count, sub) =>
        count +
        (this.matches(sub.visibilityCondition, this.admission()?.responses || {})
          ? sub.fields.filter((field) => field.isActive).length
          : 0),
      0,
    );
  }
  requiredMissingFields(section = this.section()) {
    if (!section) return 0;
    let missing = 0;
    for (const sub of section.subsections) {
      if (!this.matches(sub.visibilityCondition, this.admission()?.responses || {})) continue;
      const entries = sub.isRepeatable ? this.entries(sub) : [this.admission()?.responses || {}];
      for (const entry of entries.length ? entries : [{}]) {
        for (const field of sub.fields) {
          if (field.isActive && field.isRequired && this.visible(field, entry) && !this.hasValue(entry[field.id])) {
            missing += 1;
          }
        }
      }
    }
    return missing;
  }
  sectionStatus(index: number, section?: FormSection) {
    const currentSection = section || this.form()?.sections[index];
    if (!currentSection) return 'Not started';
    const missing = this.requiredMissingFields(currentSection);
    if (index < this.activeIndex()) return missing ? `${missing} required` : 'Complete';
    if (index === this.activeIndex()) return missing ? `${missing} required` : 'In progress';
    return 'Not started';
  }
  sectionState(index: number, section?: FormSection) {
    const currentSection = section || this.form()?.sections[index];
    if (index === this.activeIndex()) return 'current';
    if (currentSection && this.requiredMissingFields(currentSection) && index < this.activeIndex()) {
      return 'attention';
    }
    if (index < this.activeIndex()) return 'complete';
    return 'upcoming';
  }
  sectionNavigationItems(): FormSectionNavigationItem[] {
    return (this.form()?.sections || []).map((section, index) => ({
      id: section.id,
      index,
      title: section.name,
      status: this.sectionStatus(index, section),
      state: this.sectionState(index, section),
    }));
  }
  requestSections() {
    this.openMobileNavigator();
  }
  openMobileNavigator() {
    this.mobileNavigatorOpen.set(true);
  }
  closeMobileNavigator() {
    this.mobileNavigatorOpen.set(false);
  }
  saveStatusText() {
    if (this.saving()) return 'Saving...';
    if (this.dirty()) return 'Unsaved changes';
    return this.message() || 'Draft saved just now';
  }
  primaryActionLabel() {
    const finalSection = this.activeIndex() === (this.form()?.sections.length || 1) - 1;
    if (!finalSection) return 'Save & Continue';
    return this.embedded() ? 'Save Student Record' : 'Submit Application';
  }
  primaryAction() {
    const finalSection = this.activeIndex() === (this.form()?.sections.length || 1) - 1;
    if (finalSection) this.submit();
    else this.save(true);
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
    this.dirty.set(true);
    this.message.set('');
    this.reloadDependents(field.id, entry, entryIndex);
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
    this.dirty.set(true);
    this.message.set('');
    this.loadSubsectionOptions(sub, entries.length - 1, entry);
  }
  removeEntry(sub: FormSubsection, index: number) {
    const admission = this.admission();
    if (!admission) return;
    admission.repeatableResponses[sub.id]?.splice(index, 1);
    this.admission.set(structuredClone(admission));
    this.dirty.set(true);
    this.message.set('');
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
      .publicOptions(field.dataSource.masterTypeSlug, parent ? String(parent) : undefined, search)
      .subscribe(({ items }) =>
        this.optionsState.update((v) => ({ ...v, [this.optionKey(field, index)]: items })),
      );
  }
  searchOptions(
    field: FormField,
    query: string,
    entry?: Record<string, unknown>,
    index?: number,
  ) {
    this.loadOptions(field, entry, index, query);
  }
  upload(field: FormField, file: File, entry?: Record<string, unknown>, index?: number) {
    const admission = this.admission();
    if (!admission) return;
    const maxSizeMb = field.uploadConfig?.maxSizeMb || 5;
    if (file.size > maxSizeMb * 1024 * 1024) {
      this.error.set(`${field.name} must be ${maxSizeMb} MB or smaller.`);
      return;
    }
    if (!this.allowedUploadMimeTypes(field).includes(file.type)) {
      this.error.set(`The selected file type is not allowed for ${field.name}.`);
      return;
    }
    this.error.set('');
    this.api.upload(admission._id, this.accessKey, field.id, file).subscribe({
      next: ({ file: stored }) => this.setValue(field, stored, entry, index),
      error: (e) => this.fail(e),
    });
  }
  acceptFor(field: FormField) {
    const categories = field.uploadConfig?.allowedTypes ||
      (field.type === 'file' ? ['image', 'pdf', 'word'] : ['image']);
    return categories
      .flatMap((type) =>
        type === 'image'
          ? ['image/jpeg', 'image/png', 'image/webp']
          : type === 'pdf'
            ? ['application/pdf']
            : [
                'application/msword',
                'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
              ],
      )
      .join(',');
  }
  save(next = false) {
    const admission = this.admission(),
      section = this.section();
    if (!admission || !section) return;
    this.saving.set(true);
    admission.currentSectionId = section.id;
    this.api.saveAdmission(admission, this.accessKey).subscribe({
      next: ({ item }) => {
        this.acceptAdmission(item);
        this.message.set('Progress saved.');
        this.saving.set(false);
        if (next && this.activeIndex() < (this.form()?.sections.length || 1) - 1) {
          this.activeIndex.update((v) => v + 1);
          const current = this.section();
          if (current) item.currentSectionId = current.id;
          window.scrollTo({ top: 0, behavior: 'smooth' });
          this.loadSectionOptions();
          this.resetOpenSubsections();
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
      this.resetOpenSubsections();
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
  goToStep(index: number) {
    if (index === this.activeIndex()) return;
    this.activeIndex.set(index);
    this.closeMobileNavigator();
    this.loadSectionOptions();
    this.resetOpenSubsections();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
  stepStatus(index: number) {
    if (index < this.activeIndex()) return 'Complete';
    if (index === this.activeIndex()) return 'In progress';
    return 'Not started';
  }
  stepIconName(name: string) {
    const normalized = name.toLowerCase();
    if (normalized.includes('qualification') || normalized.includes('education'))
      return 'graduation';
    if (normalized.includes('document')) return 'document';
    if (normalized.includes('address')) return 'address';
    if (normalized.includes('payment') || normalized.includes('fee')) return 'payment';
    if (normalized.includes('review') || normalized.includes('submit')) return 'review';
    return 'personal';
  }
  fieldCount(sub: FormSubsection) {
    return sub.fields.filter((field) => field.isActive).length;
  }
  requiredFieldCount(sub: FormSubsection) {
    return sub.fields.filter((field) => field.isActive && field.isRequired).length;
  }
  private hasValue(value: unknown) {
    return value !== null && value !== undefined && value !== '' && (!Array.isArray(value) || value.length > 0);
  }
  subsectionOpen(id: string) {
    return this.openSubsectionIds().has(id);
  }
  toggleSubsection(id: string) {
    this.openSubsectionIds.update((ids) => {
      const next = new Set(ids);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  }
  private resetOpenSubsections() {
    const first = this.visibleSubsections()[0]?.id;
    this.openSubsectionIds.set(new Set(first ? [first] : []));
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
  private allowedUploadMimeTypes(field: FormField) {
    return this.acceptFor(field).split(',');
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
