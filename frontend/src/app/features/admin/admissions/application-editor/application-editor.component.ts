import { CdkTrapFocus } from '@angular/cdk/a11y';
import { DOCUMENT } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
  HostListener,
  computed,
  effect,
  inject,
  signal,
} from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import {
  LucideArrowLeft,
  LucideArrowRight,
  LucideCheck,
  LucideCircleAlert,
  LucideClipboardCheck,
  LucideClock3,
  LucideFileText,
  LucideRefreshCw,
  LucideSave,
  LucideShieldCheck,
  LucideTrash2,
  LucideX,
} from '@lucide/angular';
import { firstValueFrom } from 'rxjs';
import { ApiService } from '../../../../core/api.service';
import {
  Admission,
  FormField,
  FormSection,
  FormSubsection,
  MasterValue,
} from '../../../../core/models';
import { AdminPageComponent } from '../../../../shared/ui/admin-page/admin-page.component';
import { DynamicFieldRendererComponent } from '../../../../shared/ui/dynamic-field-renderer/dynamic-field-renderer.component';
import { admissionReference, admissionStatusLabel } from '../admission-presentation';
import {
  AdmissionValidationIssue,
  admissionSectionIssues,
  admissionValidationIssues,
  hasAdmissionValue,
  matchesAdmissionVisibility,
} from '../admission-form-validation';
import { UnsavedChangesAware } from './unsaved-changes.guard';

@Component({
  selector: 'erp-application-editor',
  imports: [
    AdminPageComponent,
    CdkTrapFocus,
    DynamicFieldRendererComponent,
    LucideArrowLeft,
    LucideArrowRight,
    LucideCheck,
    LucideCircleAlert,
    LucideClipboardCheck,
    LucideClock3,
    LucideFileText,
    LucideRefreshCw,
    LucideSave,
    LucideShieldCheck,
    LucideTrash2,
    LucideX,
    RouterLink,
  ],
  templateUrl: './application-editor.component.html',
  styleUrl: './application-editor.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ApplicationEditorComponent implements UnsavedChangesAware {
  private readonly api = inject(ApiService);
  private readonly route = inject(ActivatedRoute);
  private readonly router = inject(Router);
  private readonly destroyRef = inject(DestroyRef);
  private readonly document = inject(DOCUMENT);
  private autosaveTimer?: number;
  private activeSave: Promise<boolean> | null = null;
  private changeVersion = 0;
  private leaveResolver?: (allow: boolean) => void;
  private leaveReturnFocus?: HTMLElement;

  readonly admissionId = signal('');
  readonly item = signal<Admission | null>(null);
  readonly activeIndex = signal(0);
  readonly optionsState = signal<Record<string, MasterValue[]>>({});
  readonly loading = signal(true);
  readonly loadError = signal('');
  readonly saveError = signal('');
  readonly notice = signal('');
  readonly dirty = signal(false);
  readonly saving = signal(false);
  readonly lastSavedAt = signal<Date | null>(null);
  readonly leaveDialogOpen = signal(false);

  readonly sections = computed(() =>
    (this.item()?.formSnapshot.sections || []).filter((section) => section.isActive),
  );
  readonly activeSection = computed(() => this.sections()[this.activeIndex()] || null);
  readonly validationIssues = computed(() => admissionValidationIssues(this.item()));
  readonly activeIssues = computed(() => {
    const section = this.activeSection();
    return section ? admissionSectionIssues(this.item(), section.id) : [];
  });
  readonly completedSections = computed(
    () =>
      this.sections().filter(
        (section) => admissionSectionIssues(this.item(), section.id).length === 0,
      ).length,
  );
  readonly progress = computed(() => {
    const sections = this.sections();
    return sections.length ? Math.round((this.completedSections() / sections.length) * 100) : 0;
  });
  readonly editable = computed(() => {
    const status = this.item()?.status;
    return status === 'draft' || status === 'pending_approval' || status === 'approved';
  });
  readonly saveState = computed(() => {
    if (this.saving()) return 'Saving changes…';
    if (this.dirty()) return 'Unsaved changes';
    if (this.saveError()) return 'Save failed';
    if (this.lastSavedAt()) return 'All changes saved';
    return 'Saved application';
  });

  constructor() {
    this.route.paramMap.pipe(takeUntilDestroyed(this.destroyRef)).subscribe((params) => {
      const id = params.get('admissionId') || '';
      if (!id || id === this.admissionId()) return;
      this.admissionId.set(id);
      this.load();
    });

    effect((onCleanup) => {
      if (!this.leaveDialogOpen()) return;
      const previousOverflow = this.document.body.style.overflow;
      this.document.body.style.overflow = 'hidden';
      onCleanup(() => {
        this.document.body.style.overflow = previousOverflow;
      });
    });

    this.destroyRef.onDestroy(() => {
      if (this.autosaveTimer) window.clearTimeout(this.autosaveTimer);
      this.leaveResolver?.(false);
    });
  }

  load() {
    if (!this.admissionId()) return;
    this.loading.set(true);
    this.loadError.set('');
    this.api
      .admission(this.admissionId())
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe({
        next: ({ item }) => this.acceptLoaded(item),
        error: (error) => {
          this.loadError.set(error.error?.message || 'This application could not be loaded.');
          this.loading.set(false);
        },
      });
  }

  reference(item: Admission) {
    return admissionReference(item);
  }

  statusLabel(item: Admission) {
    return admissionStatusLabel(item);
  }

  sectionIssues(section: FormSection) {
    return admissionSectionIssues(this.item(), section.id);
  }

  sectionState(section: FormSection, index: number): 'current' | 'complete' | 'attention' {
    if (index === this.activeIndex()) return 'current';
    return this.sectionIssues(section).length ? 'attention' : 'complete';
  }

  visibleSubsections() {
    const responses = this.item()?.responses || {};
    return (this.activeSection()?.subsections || []).filter(
      (subsection) =>
        subsection.isActive &&
        matchesAdmissionVisibility(subsection.visibilityCondition, responses),
    );
  }

  visible(field: FormField, entry?: Record<string, unknown>) {
    return (
      field.isActive &&
      matchesAdmissionVisibility(field.visibilityCondition, entry || this.item()?.responses || {})
    );
  }

  value(field: FormField, entry?: Record<string, unknown>) {
    return (entry || this.item()?.responses || {})[field.id];
  }

  setValue(field: FormField, value: unknown, entry?: Record<string, unknown>, entryIndex?: number) {
    if (!this.editable()) return;
    const item = this.item();
    if (!item) return;
    const normalizedValue =
      field.type === 'dropdown' && Array.isArray(value) ? (value[0] ?? '') : value;
    if (entry) entry[field.id] = normalizedValue;
    else item.responses[field.id] = normalizedValue;
    this.item.set(structuredClone(item));
    this.markDirty();
    if (field.dataSource?.masterTypeSlug === 'course') {
      this.applyCourseAcademicYear(String(normalizedValue || ''));
    }
    this.reloadDependents(field.id, entry, entryIndex);
  }

  entries(subsection: FormSubsection) {
    return this.item()?.repeatableResponses[subsection.id] || [];
  }

  addEntry(subsection: FormSubsection) {
    if (!this.editable()) return;
    const item = this.item();
    if (!item) return;
    const entries = (item.repeatableResponses[subsection.id] ||= []);
    if (subsection.maxEntries && entries.length >= subsection.maxEntries) return;
    const entry: Record<string, unknown> = {};
    for (const field of subsection.fields) {
      if (field.defaultValue != null) entry[field.id] = field.defaultValue;
    }
    entries.push(entry);
    this.item.set(structuredClone(item));
    this.markDirty();
    this.loadSubsectionOptions(subsection, entries.length - 1, entry);
  }

  removeEntry(subsection: FormSubsection, index: number) {
    if (!this.editable()) return;
    const item = this.item();
    if (!item) return;
    item.repeatableResponses[subsection.id]?.splice(index, 1);
    this.item.set(structuredClone(item));
    this.markDirty();
  }

  fieldOptions(field: FormField, index?: number) {
    return this.optionsState()[this.optionKey(field, index)] || [];
  }

  searchOptions(field: FormField, query: string, entry?: Record<string, unknown>, index?: number) {
    this.loadOptions(field, entry, index, query);
  }

  upload(field: FormField, file: File, entry?: Record<string, unknown>, index?: number) {
    const item = this.item();
    if (!item || !this.editable()) return;
    const maxSizeMb = field.uploadConfig?.maxSizeMb || 5;
    if (file.size > maxSizeMb * 1024 * 1024) {
      this.saveError.set(`${field.name} must be ${maxSizeMb} MB or smaller.`);
      return;
    }
    if (!this.allowedUploadMimeTypes(field).includes(file.type)) {
      this.saveError.set(`The selected file type is not allowed for ${field.name}.`);
      return;
    }
    this.saveError.set('');
    this.api
      .uploadAdminAdmission(item._id, field.id, file)
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe({
        next: ({ file: stored }) => this.setValue(field, stored, entry, index),
        error: (error) =>
          this.saveError.set(error.error?.message || `${field.name} could not be uploaded.`),
      });
  }

  goToSection(index: number) {
    const sections = this.sections();
    if (index < 0 || index >= sections.length || index === this.activeIndex()) return;
    this.activeIndex.set(index);
    const item = this.item();
    if (item) {
      item.currentSectionId = sections[index].id;
      this.item.set(structuredClone(item));
      this.markDirty();
    }
    void this.router.navigate([], {
      relativeTo: this.route,
      queryParams: { section: sections[index].id },
      queryParamsHandling: 'merge',
      replaceUrl: true,
    });
    this.loadSectionOptions();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  focusIssue(issue: AdmissionValidationIssue) {
    const index = this.sections().findIndex((section) => section.id === issue.sectionId);
    if (index >= 0) this.goToSection(index);
    setTimeout(() => {
      const field = issue.fieldId
        ? this.document.getElementById(
            `field-${issue.fieldId}-${
              issue.entryIndex === undefined
                ? issue.subsectionId
                : `${issue.subsectionId}-${issue.entryIndex}`
            }`,
          )
        : null;
      field?.focus();
    });
  }

  async saveManually() {
    await this.persist(true);
  }

  async saveAndContinue() {
    const saved = await this.persist(true);
    if (!saved) return;
    if (this.activeIndex() < this.sections().length - 1) {
      this.goToSection(this.activeIndex() + 1);
      return;
    }
    await this.openReview();
  }

  async openReview() {
    const saved = await this.persist(false);
    if (!saved) return;
    await this.router.navigate(['/admin/admissions/applications', this.admissionId(), 'review']);
  }

  canDeactivate(): boolean | Promise<boolean> {
    if (!this.dirty() && !this.saving()) return true;
    if (this.leaveDialogOpen()) return false;
    this.leaveReturnFocus =
      this.document.activeElement instanceof HTMLElement ? this.document.activeElement : undefined;
    this.leaveDialogOpen.set(true);
    return new Promise<boolean>((resolve) => {
      this.leaveResolver = resolve;
    });
  }

  resolveLeave(allow: boolean) {
    if (allow) {
      if (this.autosaveTimer) window.clearTimeout(this.autosaveTimer);
      this.dirty.set(false);
    }
    this.leaveDialogOpen.set(false);
    const resolver = this.leaveResolver;
    this.leaveResolver = undefined;
    resolver?.(allow);
    if (!allow) setTimeout(() => this.leaveReturnFocus?.focus());
  }

  @HostListener('window:beforeunload', ['$event'])
  beforeUnload(event: BeforeUnloadEvent) {
    if (!this.dirty() && !this.saving()) return;
    event.preventDefault();
    event.returnValue = '';
  }

  @HostListener('document:keydown.escape')
  onEscape() {
    if (this.leaveDialogOpen()) this.resolveLeave(false);
  }

  private acceptLoaded(item: Admission) {
    this.item.set(item);
    const requestedSection = this.route.snapshot.queryParamMap.get('section');
    const sections = item.formSnapshot.sections.filter((section) => section.isActive);
    const index = sections.findIndex(
      (section) => section.id === (requestedSection || item.currentSectionId),
    );
    this.activeIndex.set(Math.max(0, index));
    this.loading.set(false);
    this.dirty.set(false);
    this.saving.set(false);
    this.loadSectionOptions();
  }

  private markDirty() {
    this.changeVersion += 1;
    this.dirty.set(true);
    this.notice.set('');
    this.saveError.set('');
    if (this.autosaveTimer) window.clearTimeout(this.autosaveTimer);
    this.autosaveTimer = window.setTimeout(() => void this.persist(false), 1600);
  }

  private persist(showNotice: boolean): Promise<boolean> {
    if (!this.dirty()) return Promise.resolve(true);
    if (this.activeSave) {
      return this.activeSave.then((saved) => {
        if (!saved) return false;
        return this.dirty() ? this.persist(showNotice) : true;
      });
    }
    const item = this.item();
    if (!item || !this.editable()) return Promise.resolve(false);
    if (this.autosaveTimer) window.clearTimeout(this.autosaveTimer);
    const payload = structuredClone(item);
    const versionAtStart = this.changeVersion;
    this.saving.set(true);
    this.saveError.set('');
    this.activeSave = firstValueFrom(this.api.updateAdmission(payload))
      .then(({ item: saved }) => {
        const live = this.item();
        if (this.changeVersion === versionAtStart) {
          this.item.set(saved);
          this.dirty.set(false);
        } else if (live) {
          this.item.set({
            ...saved,
            currentSectionId: live.currentSectionId,
            responses: live.responses,
            repeatableResponses: live.repeatableResponses,
          });
          this.autosaveTimer = window.setTimeout(() => void this.persist(false), 500);
        }
        this.lastSavedAt.set(new Date());
        if (showNotice) this.notice.set('Application changes saved.');
        return true;
      })
      .catch((error) => {
        this.saveError.set(error.error?.message || 'Changes could not be saved. Try again.');
        return false;
      })
      .finally(() => {
        this.saving.set(false);
        this.activeSave = null;
      });
    return this.activeSave;
  }

  private loadSectionOptions() {
    for (const subsection of this.visibleSubsections()) {
      if (subsection.isRepeatable) {
        this.entries(subsection).forEach((entry, index) =>
          this.loadSubsectionOptions(subsection, index, entry),
        );
      } else {
        this.loadSubsectionOptions(subsection);
      }
    }
  }

  private loadSubsectionOptions(
    subsection: FormSubsection,
    index?: number,
    entry?: Record<string, unknown>,
  ) {
    for (const field of subsection.fields) {
      if (field.dataSource) this.loadOptions(field, entry, index);
    }
  }

  private loadOptions(
    field: FormField,
    entry?: Record<string, unknown>,
    index?: number,
    search = '',
  ) {
    if (!field.dataSource) return;
    const values = entry || this.item()?.responses || {};
    const parent = field.dataSource.parentFieldId
      ? values[field.dataSource.parentFieldId]
      : undefined;
    if (field.dataSource.parentFieldId && !parent) {
      this.optionsState.update((state) => ({ ...state, [this.optionKey(field, index)]: [] }));
      return;
    }
    this.api
      .publicOptions(field.dataSource.masterTypeSlug, parent ? String(parent) : undefined, search)
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe(({ items }) => {
        this.optionsState.update((state) => ({
          ...state,
          [this.optionKey(field, index)]: items,
        }));
        if (field.dataSource?.masterTypeSlug === 'course') {
          const selected = values[field.id];
          if (selected) this.applyCourseAcademicYear(String(selected), false);
        }
      });
  }

  private reloadDependents(parentFieldId: string, entry?: Record<string, unknown>, index?: number) {
    for (const subsection of this.activeSection()?.subsections || []) {
      for (const field of subsection.fields) {
        if (field.dataSource?.parentFieldId !== parentFieldId) continue;
        const values = entry || this.item()?.responses || {};
        values[field.id] = '';
        this.loadOptions(field, entry, index);
      }
    }
    this.item.update((item) => (item ? structuredClone(item) : item));
  }

  private optionKey(field: FormField, index?: number) {
    return `${field.id}:${index ?? 'single'}`;
  }

  private applyCourseAcademicYear(courseId: string, useConfiguredDefault = true) {
    const item = this.item();
    if (!item) return;
    const courseField = item.formSnapshot.sections
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
    const yearField = item.formSnapshot.sections
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
    if (!yearField) return;
    yearField.type = 'dropdown';
    yearField.options = Array.from({ length: duration }, (_, index) => ({
      label: `Year ${index + 1}`,
      value: String(index + 1),
    }));
    const savedYear = Number(item.responses[yearField.id] || item.currentAcademicYear);
    const selectedYear =
      !useConfiguredDefault &&
      Number.isInteger(savedYear) &&
      savedYear >= 1 &&
      savedYear <= duration
        ? savedYear
        : defaultYear;
    item.responses[yearField.id] = String(selectedYear);
    item.currentAcademicYear = selectedYear;
    this.item.set(structuredClone(item));
  }

  private allowedUploadMimeTypes(field: FormField) {
    const categories =
      field.uploadConfig?.allowedTypes ||
      (field.type === 'file' ? ['image', 'pdf', 'word'] : ['image']);
    return categories.flatMap((type) =>
      type === 'image'
        ? ['image/jpeg', 'image/png', 'image/webp']
        : type === 'pdf'
          ? ['application/pdf']
          : [
              'application/msword',
              'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
            ],
    );
  }

  protected readonly hasAdmissionValue = hasAdmissionValue;
}
