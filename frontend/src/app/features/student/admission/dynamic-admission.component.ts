import { ChangeDetectionStrategy, Component, inject, input, OnInit, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LucideAlertTriangle, LucideCheck } from '@lucide/angular';
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
import { AdmissionJourneyRailComponent } from '../../../shared/ui/admission-journey-rail/admission-journey-rail.component';
import { DynamicFieldRendererComponent } from '../../../shared/ui/dynamic-field-renderer/dynamic-field-renderer.component';
import { DynamicSectionRendererComponent } from '../../../shared/ui/dynamic-section-renderer/dynamic-section-renderer.component';
import { FormActionBarComponent } from '../../../shared/ui/form-action-bar/form-action-bar.component';
import { FormProgressHeaderComponent } from '../../../shared/ui/form-progress-header/form-progress-header.component';
import { FormSubGroupComponent } from '../../../shared/ui/form-sub-group/form-sub-group.component';
import { FormSectionNavigationItem } from '../../../shared/ui/form-workflow.models';
import { MobileSectionNavigatorSheetComponent } from '../../../shared/ui/mobile-section-navigator-sheet/mobile-section-navigator-sheet.component';

@Component({
  selector: 'erp-dynamic-admission',
  imports: [
    RouterLink,
    LucideCheck,
    LucideAlertTriangle,
    AdmissionJourneyRailComponent,
    DynamicFieldRendererComponent,
    DynamicSectionRendererComponent,
    FormActionBarComponent,
    FormProgressHeaderComponent,
    FormSubGroupComponent,
    MobileSectionNavigatorSheetComponent,
  ],
  templateUrl: './dynamic-admission.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { '[class.embedded]': 'embedded()' },
})
export class DynamicAdmissionComponent implements OnInit {
  readonly embedded = input(false);
  readonly admissionId = input('');
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
  readonly reviewMode = signal(false);
  private accessKey = '';
  ngOnInit() {
    this.initialize();
  }
  private initialize() {
    if (this.admissionId()) {
      this.api.admission(this.admissionId()).subscribe({
        next: ({ item }) => this.acceptAdmission(item),
        error: (e) => this.fail(e),
      });
      return;
    }
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
              this.storageKey(),
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
            if (
              field.isActive &&
              this.visible(field, entry) &&
              this.hasValue(this.value(field, entry))
            ) {
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
          if (
            field.isActive &&
            field.isRequired &&
            this.visible(field, entry) &&
            !this.hasValue(entry[field.id])
          ) {
            missing += 1;
          }
        }
      }
    }
    return missing;
  }
  requiredFieldTotal(section = this.section()) {
    if (!section) return 0;
    let total = 0;
    for (const sub of section.subsections) {
      if (!this.matches(sub.visibilityCondition, this.admission()?.responses || {})) continue;
      const multiplier = sub.isRepeatable ? Math.max(1, this.entries(sub).length) : 1;
      total += sub.fields.filter((field) => field.isActive && field.isRequired).length * multiplier;
    }
    return total;
  }
  completedRequiredFields(section = this.section()) {
    return Math.max(0, this.requiredFieldTotal(section) - this.requiredMissingFields(section));
  }
  subsectionRequiredMissing(sub: FormSubsection) {
    let missing = 0;
    const entries = sub.isRepeatable ? this.entries(sub) : [this.admission()?.responses || {}];
    for (const entry of entries.length ? entries : [{}]) {
      for (const field of sub.fields) {
        if (
          field.isActive &&
          field.isRequired &&
          this.visible(field, entry) &&
          !this.hasValue(entry[field.id])
        ) {
          missing += 1;
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
    if (
      currentSection &&
      this.requiredMissingFields(currentSection) &&
      index < this.activeIndex()
    ) {
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
    if (this.reviewMode()) return this.embedded() ? 'Save Student Record' : 'Submit Application';
    const finalSection = this.activeIndex() === (this.form()?.sections.length || 1) - 1;
    return finalSection ? 'Review Application' : 'Save & Continue';
  }
  primaryAction() {
    if (this.reviewMode()) {
      if (!this.applicationMissingRequired()) this.submit();
      return;
    }
    const missing = this.requiredMissingFields();
    if (missing) {
      this.error.set(`Complete ${missing} required field${missing === 1 ? '' : 's'} to continue.`);
      const firstIncomplete = this.visibleSubsections().find(
        (sub) => this.subsectionRequiredMissing(sub) > 0,
      );
      if (firstIncomplete) this.openSubsectionIds.set(new Set([firstIncomplete.id]));
      return;
    }
    this.error.set('');
    const finalSection = this.activeIndex() === (this.form()?.sections.length || 1) - 1;
    if (finalSection) this.reviewMode.set(true);
    else this.save(true);
  }
  applicationMissingRequired() {
    return (this.form()?.sections || []).reduce(
      (total, section) => total + this.requiredMissingFields(section),
      0,
    );
  }
  backAction() {
    if (this.reviewMode()) {
      this.reviewMode.set(false);
      return;
    }
    this.previous();
  }
  value(field: FormField, entry?: Record<string, unknown>) {
    return (entry || this.admission()?.responses || {})[field.id];
  }
  setValue(field: FormField, value: unknown, entry?: Record<string, unknown>, entryIndex?: number) {
    const normalizedValue =
      field.type === 'dropdown' && Array.isArray(value) ? (value[0] ?? '') : value;
    if (entry) entry[field.id] = normalizedValue;
    else {
      const admission = this.admission();
      if (admission) admission.responses[field.id] = normalizedValue;
    }
    this.admission.update((v) => (v ? structuredClone(v) : v));
    this.dirty.set(true);
    this.message.set('');
    if (field.dataSource?.masterTypeSlug === 'course')
      this.applyCourseAcademicYear(String(normalizedValue || ''));
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
      .subscribe(({ items }) => {
        this.optionsState.update((v) => ({ ...v, [this.optionKey(field, index)]: items }));
        if (field.dataSource?.masterTypeSlug === 'course') {
          const selected = (entry || this.admission()?.responses || {})[field.id];
          if (selected) this.applyCourseAcademicYear(String(selected), false);
        }
      });
  }
  searchOptions(field: FormField, query: string, entry?: Record<string, unknown>, index?: number) {
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
    const request = this.admissionId()
      ? this.api.uploadAdminAdmission(admission._id, field.id, file)
      : this.api.upload(admission._id, this.accessKey, field.id, file);
    request.subscribe({
      next: ({ file: stored }) => this.setValue(field, stored, entry, index),
      error: (e) => this.fail(e),
    });
  }
  acceptFor(field: FormField) {
    const categories =
      field.uploadConfig?.allowedTypes ||
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
    const request = this.admissionId()
      ? this.api.updateAdmission(admission)
      : this.api.saveAdmission(admission, this.accessKey);
    request.subscribe({
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
    const saveRequest = this.admissionId()
      ? this.api.updateAdmission(admission)
      : this.api.saveAdmission(admission, this.accessKey);
    saveRequest.subscribe({
      next: () =>
        (this.admissionId()
          ? this.api.submitAdminAdmission(admission._id)
          : this.api.submitAdmission(admission._id, this.accessKey)
        ).subscribe({
          next: ({ item }) => {
            this.admission.set(item);
            this.message.set(
              this.admissionId()
                ? 'Student record updated successfully.'
                : 'Application submitted successfully.',
            );
            localStorage.removeItem(this.storageKey());
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
    localStorage.removeItem(this.storageKey());
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
    this.reviewMode.set(false);
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
    return (
      value !== null &&
      value !== undefined &&
      value !== '' &&
      (!Array.isArray(value) || value.length > 0)
    );
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
    const visible = this.visibleSubsections();
    const first =
      visible.find((sub) => this.subsectionRequiredMissing(sub) > 0)?.id || visible[0]?.id;
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
  private applyCourseAcademicYear(courseId: string, useConfiguredDefault = true) {
    const courseField = (this.form()?.sections || [])
      .flatMap((section) => section.subsections)
      .flatMap((subsection) => subsection.fields)
      .find((field) => field.dataSource?.masterTypeSlug === 'course');
    if (!courseField) return;
    const course = Object.entries(this.optionsState())
      .filter(([key]) => key.startsWith(`${courseField.id}:`))
      .flatMap(([, options]) => options)
      .find((option) => option._id === courseId);
    if (!course) return;
    const duration = Math.max(1, Number(course.metadata?.['durationYears'] || 1));
    const defaultYear = Math.min(
      duration,
      Math.max(1, Number(course.metadata?.['defaultAcademicYear'] || 1)),
    );
    const yearField = (this.form()?.sections || [])
      .flatMap((section) => section.subsections)
      .flatMap((subsection) => subsection.fields)
      .find((candidate) =>
        [
          'current academic year',
          'current year',
          'admission year of study',
          'year of study',
        ].includes(candidate.name.trim().toLocaleLowerCase()),
      );
    const admission = this.admission();
    if (!yearField || !admission) return;
    yearField.type = 'dropdown';
    yearField.options = Array.from({ length: duration }, (_, index) => ({
      label: `Year ${index + 1}`,
      value: String(index + 1),
    }));
    const savedYear = Number(admission.responses[yearField.id] || admission.currentAcademicYear);
    const selectedYear =
      !useConfiguredDefault && Number.isInteger(savedYear) && savedYear >= 1 && savedYear <= duration
        ? savedYear
        : defaultYear;
    admission.responses[yearField.id] = String(selectedYear);
    admission.currentAcademicYear = selectedYear;
    this.form.update((form) => (form ? structuredClone(form) : form));
    this.admission.set(structuredClone(admission));
  }
  private allowedUploadMimeTypes(field: FormField) {
    return this.acceptFor(field).split(',');
  }
  private readStored(): { id: string; key: string } | null {
    try {
      return JSON.parse(localStorage.getItem(this.storageKey()) || 'null');
    } catch {
      return null;
    }
  }
  private storageKey() {
    return this.embedded() ? 'taskly_admin_admission' : 'taskly_admission';
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
