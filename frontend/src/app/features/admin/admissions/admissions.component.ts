import { CdkTrapFocus } from '@angular/cdk/a11y';
import { DOCUMENT } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
  HostListener,
  computed,
  inject,
  signal,
} from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import {
  LucideChevronLeft,
  LucideChevronRight,
  LucideCircleAlert,
  LucideInbox,
  LucidePlus,
  LucideRefreshCw,
  LucideSearch,
  LucideUserRound,
  LucideX,
} from '@lucide/angular';
import { Subscription, combineLatest } from 'rxjs';
import { ApiService } from '../../../core/api.service';
import { ERP_PAGINATION } from '../../../core/config/data-view.constants';
import { Admission } from '../../../core/models';
import { AdminPageComponent } from '../../../shared/ui/admin-page/admin-page.component';
import {
  CompactActionItem,
  CompactActionMenuComponent,
} from '../../../shared/ui/compact-action-menu/compact-action-menu.component';
import { ConfirmDialogComponent } from '../../../shared/ui/confirm-dialog/confirm-dialog.component';
import { FilterPopoverComponent } from '../../../shared/ui/filter-popover/filter-popover.component';
import {
  admissionCaptureStats,
  admissionDateLabel,
  admissionInitials,
  admissionLastActivity,
  admissionReference,
  admissionStatusLabel,
} from './admission-presentation';

type WorkbenchView = 'all' | 'draft' | 'review' | 'approved';

interface SavedView {
  id: WorkbenchView;
  label: string;
  description: string;
  status?: 'draft' | 'pending_approval' | 'approved';
}

interface FeePeriodDraft {
  currentAcademicYear: number;
  currentSemester: number;
  feeFrequency: 'year' | 'semester';
}

const SAVED_VIEWS: SavedView[] = [
  {
    id: 'all',
    label: 'All applications',
    description: 'Every application stage',
  },
  {
    id: 'draft',
    label: 'Drafts',
    description: 'Started but not submitted',
    status: 'draft',
  },
  {
    id: 'review',
    label: 'Awaiting review',
    description: 'Submitted for an admin decision',
    status: 'pending_approval',
  },
  {
    id: 'approved',
    label: 'Approved',
    description: 'Activated student records',
    status: 'approved',
  },
];

@Component({
  selector: 'erp-admissions',
  imports: [
    AdminPageComponent,
    CdkTrapFocus,
    CompactActionMenuComponent,
    ConfirmDialogComponent,
    FilterPopoverComponent,
    FormsModule,
    LucideChevronLeft,
    LucideChevronRight,
    LucideCircleAlert,
    LucideInbox,
    LucidePlus,
    LucideRefreshCw,
    LucideSearch,
    LucideUserRound,
    LucideX,
    RouterLink,
  ],
  templateUrl: './admissions.component.html',
  styleUrl: './admissions.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AdmissionsComponent {
  private readonly api = inject(ApiService);
  private readonly router = inject(Router);
  private readonly route = inject(ActivatedRoute);
  private readonly destroyRef = inject(DestroyRef);
  private readonly document = inject(DOCUMENT);
  private listRequest?: Subscription;
  private previewRequest?: Subscription;
  private previewReturnFocus?: HTMLElement;

  readonly savedViews = SAVED_VIEWS;
  readonly view = signal<WorkbenchView>('all');
  readonly activeView = computed(
    () => SAVED_VIEWS.find((savedView) => savedView.id === this.view()) || SAVED_VIEWS[0],
  );
  readonly items = signal<Admission[]>([]);
  readonly loading = signal(false);
  readonly listError = signal('');
  readonly actionError = signal('');
  readonly message = signal('');
  readonly total = signal(0);
  readonly pages = signal(1);
  readonly appliedSearch = signal('');
  readonly selectedStudentIds = signal<Set<string>>(new Set());

  readonly previewOpen = signal(false);
  readonly preview = signal<Admission | null>(null);
  readonly previewLoading = signal(false);
  readonly previewError = signal('');
  readonly masterLabels = signal<Record<string, string>>({});

  readonly credentialStudent = signal<Admission | null>(null);
  readonly credentialSaving = signal(false);
  readonly credentialError = signal('');
  readonly feeSaving = signal(false);
  readonly feePeriodDrafts = signal<Record<string, FeePeriodDraft>>({});
  readonly feeDeleteStudent = signal<Admission | null>(null);
  readonly feeGenerationIds = signal<string[]>([]);

  readonly pageSizeOptions = ERP_PAGINATION.pageSizeOptions;
  readonly pageSizeFilterOptions = ERP_PAGINATION.pageSizeOptions.map((option) => ({
    label: `${option} rows`,
    value: String(option),
  }));
  readonly academicYearOptions = Array.from({ length: 10 }, (_, index) => index + 1);
  readonly semesterOptions = Array.from({ length: 20 }, (_, index) => index + 1);
  readonly eligibleOnPage = computed(() =>
    this.items().filter((item) => item.status === 'approved'),
  );
  readonly allEligibleSelected = computed(() => {
    const eligible = this.eligibleOnPage();
    return eligible.length > 0 && eligible.every((item) => this.selectedStudentIds().has(item._id));
  });
  readonly someEligibleSelected = computed(() => {
    const selected = this.selectedStudentIds();
    const selectedOnPage = this.eligibleOnPage().filter((item) => selected.has(item._id)).length;
    return selectedOnPage > 0 && selectedOnPage < this.eligibleOnPage().length;
  });

  search = '';
  page: number = ERP_PAGINATION.defaultPage;
  pageSize: number = ERP_PAGINATION.defaultPageSize;
  passwordMode: 'student-id' | 'manual' = 'student-id';
  manualPassword = '';
  confirmPassword = '';

  constructor() {
    combineLatest([this.route.data, this.route.queryParamMap])
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe(([data, params]) => {
        const fallbackView = viewFromStatus(data['status']);
        this.view.set(normaliseView(params.get('view')) || fallbackView);
        this.search = params.get('q') || '';
        this.appliedSearch.set(this.search);
        this.page = positiveInteger(params.get('page'), ERP_PAGINATION.defaultPage);
        this.pageSize = allowedPageSize(params.get('size'));
        this.clearSelection();
        this.closePreview(false);
        this.load();
      });
  }

  setView(view: WorkbenchView) {
    this.updateUrl({ view, page: 1 });
  }

  searchRecords() {
    this.updateUrl({ search: this.search.trim(), page: 1 });
  }

  clearSearch() {
    this.search = '';
    this.updateUrl({ search: '', page: 1 });
  }

  resetFilters() {
    this.search = '';
    this.updateUrl({
      view: 'all',
      search: '',
      page: ERP_PAGINATION.defaultPage,
      pageSize: ERP_PAGINATION.defaultPageSize,
    });
  }

  changePage(nextPage: number) {
    if (nextPage < 1 || nextPage > this.pages() || nextPage === this.page) return;
    this.updateUrl({ page: nextPage });
  }

  changePageSize(nextPageSize: number) {
    this.updateUrl({ pageSize: Number(nextPageSize), page: 1 });
  }

  changePageSizeFromFilter(nextPageSize: string) {
    this.changePageSize(Number(nextPageSize));
  }

  load() {
    this.listRequest?.unsubscribe();
    this.loading.set(true);
    this.listError.set('');
    this.listRequest = this.api
      .admissions({
        status: this.activeView().status,
        search: this.appliedSearch(),
        page: this.page,
        limit: this.pageSize,
      })
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe({
        next: ({ items, pagination }) => {
          this.items.set(items);
          this.feePeriodDrafts.set(
            Object.fromEntries(items.map((item) => [item._id, feePeriodFromAdmission(item)])),
          );
          this.total.set(pagination.total);
          this.pages.set(Math.max(1, pagination.pages));
          this.page = pagination.page || this.page;
          this.loading.set(false);
        },
        error: (error) => {
          this.listError.set(error.error?.message || 'Applications could not be loaded.');
          this.loading.set(false);
        },
      });
  }

  rowActions(item: Admission): CompactActionItem[] {
    const actions: CompactActionItem[] = [{ id: 'preview', label: 'Quick preview', icon: 'view' }];
    if (item.status === 'pending_approval' || item.status === 'submitted') {
      actions.push({ id: 'review', label: 'Review application', icon: 'check' });
    }
    actions.push({ id: 'edit', label: 'Edit application', icon: 'edit' });
    if (item.status === 'approved') {
      actions.push({
        id: 'offline-payment',
        label: 'Make offline payment',
        icon: 'fees',
      });
      if (item.feeLedgerKinds?.length) {
        actions.push({
          id: 'delete-due',
          label: 'Delete due',
          icon: 'delete',
          destructive: true,
        });
      }
      actions.push({
        id: 'scholarships',
        label: 'Scholarships & discounts',
        icon: 'scholarship',
      });
    }
    return actions;
  }

  handleRowAction(action: string, item: Admission) {
    if (action === 'preview') this.openPreview(item);
    if (action === 'review') {
      void this.router.navigate(['/admin/admissions/applications', item._id, 'review']);
    }
    if (action === 'edit') void this.router.navigate(['/admin/admissions', item._id, 'edit']);
    if (action === 'scholarships') {
      void this.router.navigate(['/admin/admissions', item._id, 'scholarships']);
    }
    if (action === 'offline-payment') {
      void this.router.navigate(['/admin/admissions', item._id, 'offline-payment']);
    }
    if (action === 'delete-due') this.requestFeeDeletion(item);
  }

  openPreview(item: Admission, event?: Event) {
    const trigger = event?.currentTarget || this.document.activeElement;
    if (trigger instanceof HTMLElement) this.previewReturnFocus = trigger;
    this.previewRequest?.unsubscribe();
    this.previewOpen.set(true);
    this.preview.set(null);
    this.previewLoading.set(true);
    this.previewError.set('');
    this.masterLabels.set({});
    this.previewRequest = this.api
      .admission(item._id)
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe({
        next: ({ item: detail, masterLabels }) => {
          const merged = { ...detail, feeLedgerKinds: item.feeLedgerKinds };
          this.preview.set(merged);
          this.masterLabels.set(masterLabels);
          this.feePeriodDrafts.update((drafts) => ({
            ...drafts,
            [merged._id]: feePeriodFromAdmission(merged),
          }));
          this.previewLoading.set(false);
        },
        error: (error) => {
          this.previewError.set(error.error?.message || 'This application could not be opened.');
          this.previewLoading.set(false);
        },
      });
  }

  retryPreview(item: Admission) {
    this.openPreview(item);
  }

  closePreview(restoreFocus = true) {
    if (!this.previewOpen()) return;
    this.previewRequest?.unsubscribe();
    this.previewOpen.set(false);
    this.preview.set(null);
    this.previewLoading.set(false);
    this.previewError.set('');
    this.masterLabels.set({});
    if (restoreFocus) {
      const target = this.previewReturnFocus;
      setTimeout(() => target?.focus());
    }
  }

  isSelected(item: Admission) {
    return this.selectedStudentIds().has(item._id);
  }

  bulkEligible(item: Admission) {
    return item.status === 'approved';
  }

  toggleStudent(item: Admission, selected: boolean) {
    if (!this.bulkEligible(item)) return;
    this.selectedStudentIds.update((current) => {
      const next = new Set(current);
      if (selected) next.add(item._id);
      else next.delete(item._id);
      return next;
    });
  }

  togglePage(selected: boolean) {
    this.selectedStudentIds.set(
      new Set(selected ? this.eligibleOnPage().map((item) => item._id) : []),
    );
  }

  clearSelection() {
    this.selectedStudentIds.set(new Set());
  }

  requestSelectedFeeGeneration() {
    this.feeGenerationIds.set([...this.selectedStudentIds()]);
  }

  requestFeeGeneration(item: Admission) {
    this.feeGenerationIds.set([item._id]);
  }

  feeGenerationMessage() {
    const ids = this.feeGenerationIds();
    if (ids.length === 1) {
      const item = this.preview() || this.items().find((entry) => entry._id === ids[0]);
      return `Create any missing fee ledgers for ${item?.studentName || item?.studentId || 'this student'} using the currently saved fee period? Existing ledgers will not be duplicated.`;
    }
    return `Create missing fee ledgers for ${ids.length} approved applications selected on this page? Existing ledgers will not be duplicated.`;
  }

  confirmFeeGeneration() {
    const ids = this.feeGenerationIds();
    this.feeGenerationIds.set([]);
    this.createFees(ids);
  }

  createFees(studentAdmissionIds: string[]) {
    if (!studentAdmissionIds.length || this.feeSaving()) return;
    this.feeSaving.set(true);
    this.actionError.set('');
    this.api
      .generateStudentFees(studentAdmissionIds)
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe({
        next: ({ created, studentsProcessed, results }) => {
          const failures = results
            .flatMap((result) =>
              result.reason
                ? [`${result.studentName || result.studentId || 'Student'}: ${result.reason}`]
                : result.skippedKinds.map(
                    (entry) =>
                      `${result.studentName || result.studentId || 'Student'} ${entry.kind}: ${entry.reason}`,
                  ),
            )
            .filter((reason) => !reason.includes('already created'));
          this.message.set(
            `${created} fee ledger(s) created for ${studentsProcessed} student(s).${failures.length ? ` ${failures.join(' ')}` : ''}`,
          );
          this.feeSaving.set(false);
          this.clearSelection();
          this.closePreview(false);
          this.load();
        },
        error: (error) => {
          this.actionError.set(error.error?.message || 'Fee ledgers could not be created.');
          this.feeSaving.set(false);
        },
      });
  }

  feePeriodDraft(item: Admission) {
    return this.feePeriodDrafts()[item._id] || feePeriodFromAdmission(item);
  }

  updateFeePeriodDraft(item: Admission, changes: Partial<FeePeriodDraft>) {
    const current = this.feePeriodDraft(item);
    const next = { ...current, ...changes };
    if (changes.feeFrequency === 'semester' && current.feeFrequency !== 'semester') {
      next.currentSemester = Math.max(1, next.currentAcademicYear * 2 - 1);
    }
    if (changes.currentAcademicYear !== undefined && next.feeFrequency === 'semester') {
      next.currentSemester = Math.max(1, Number(changes.currentAcademicYear) * 2 - 1);
    }
    if (changes.currentSemester !== undefined) {
      next.currentAcademicYear = this.yearForSemester(changes.currentSemester);
    }
    this.feePeriodDrafts.update((drafts) => ({ ...drafts, [item._id]: next }));
  }

  feePeriodDirty(item: Admission) {
    const draft = this.feePeriodDraft(item);
    return (
      draft.feeFrequency !== (item.feeFrequency || 'year') ||
      draft.currentAcademicYear !== Number(item.currentAcademicYear || 1) ||
      (draft.feeFrequency === 'semester' &&
        draft.currentSemester !==
          Number(item.currentSemester || Number(item.currentAcademicYear || 1) * 2 - 1))
    );
  }

  saveFeePeriod(item: Admission) {
    if (this.feeSaving()) return;
    this.feeSaving.set(true);
    this.actionError.set('');
    const draft = this.feePeriodDraft(item);
    this.api
      .setAdmissionFeePeriod(item._id, draft)
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe({
        next: ({ item: updated }) => {
          const merged = { ...item, ...updated };
          this.preview.set(merged);
          this.items.update((items) =>
            items.map((entry) => (entry._id === merged._id ? { ...entry, ...updated } : entry)),
          );
          this.feePeriodDrafts.update((drafts) => ({
            ...drafts,
            [item._id]: feePeriodFromAdmission(merged),
          }));
          this.message.set(
            `Fee period saved for ${item.studentName || item.studentId || 'the student'}. Apply it when you are ready to refresh the unpaid academic ledger.`,
          );
          this.feeSaving.set(false);
        },
        error: (error) => {
          this.actionError.set(error.error?.message || 'The fee period could not be saved.');
          this.feeSaving.set(false);
        },
      });
  }

  applyFeePeriod(item: Admission) {
    if (this.feeSaving()) return;
    if (this.feePeriodDirty(item)) {
      this.actionError.set('Save the fee period before refreshing the ledger.');
      return;
    }
    this.feeSaving.set(true);
    this.actionError.set('');
    this.api
      .recalculateStudentFees([item._id])
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe({
        next: ({ created, results }) => {
          const result = results[0];
          const reason =
            result?.reason || result?.skippedKinds.map((entry) => entry.reason).join(' ');
          if (created) {
            this.message.set(
              `The saved fee period was applied to ${item.studentName || item.studentId || 'the student'}.`,
            );
            this.feeSaving.set(false);
            this.closePreview(false);
            this.load();
            return;
          }
          this.actionError.set(reason || 'The academic fee ledger could not be refreshed.');
          this.feeSaving.set(false);
        },
        error: (error) => {
          this.actionError.set(
            error.error?.message || 'The saved fee period could not be applied.',
          );
          this.feeSaving.set(false);
        },
      });
  }

  requestFeeDeletion(item: Admission) {
    this.feeDeleteStudent.set(item);
  }

  confirmFeeDeletion() {
    const item = this.feeDeleteStudent();
    this.feeDeleteStudent.set(null);
    if (!item || this.feeSaving()) return;
    this.feeSaving.set(true);
    this.actionError.set('');
    this.api
      .deleteStudentFees(item._id)
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe({
        next: ({ deleted }) => {
          this.message.set(
            `${deleted} fee ledger(s) deleted for ${item.studentName || item.studentId || 'the student'}.`,
          );
          this.feeSaving.set(false);
          this.closePreview(false);
          this.load();
        },
        error: (error) => {
          this.actionError.set(error.error?.message || 'The fee ledgers could not be deleted.');
          this.feeSaving.set(false);
        },
      });
  }

  openCredentials(item: Admission) {
    this.credentialStudent.set(item);
    this.passwordMode = 'student-id';
    this.manualPassword = '';
    this.confirmPassword = '';
    this.credentialError.set('');
  }

  closeCredentials() {
    if (this.credentialSaving()) return;
    this.credentialStudent.set(null);
    this.credentialError.set('');
  }

  saveCredentials() {
    const item = this.credentialStudent();
    if (!item || this.credentialSaving()) return;
    this.credentialError.set('');
    if (
      this.passwordMode === 'manual' &&
      (this.manualPassword.length < 8 || this.manualPassword !== this.confirmPassword)
    ) {
      this.credentialError.set('Manual passwords must match and contain at least 8 characters.');
      return;
    }
    this.credentialSaving.set(true);
    const passwordBody = {
      passwordMode: this.passwordMode,
      password: this.passwordMode === 'manual' ? this.manualPassword : undefined,
    } as const;
    this.api
      .resetStudentPassword(item._id, passwordBody)
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe({
        next: () => {
          this.message.set(
            `${item.studentName || item.studentId || 'Student'} password reset successfully.`,
          );
          this.credentialSaving.set(false);
          this.credentialStudent.set(null);
          this.closePreview(false);
          this.load();
        },
        error: (error: { error?: { message?: string } }) => {
          this.credentialError.set(
            error.error?.message || 'The student account could not be updated.',
          );
          this.credentialSaving.set(false);
        },
      });
  }

  statusLabel(item: Admission) {
    return admissionStatusLabel(item);
  }

  reference(item: Admission) {
    return admissionReference(item);
  }

  initials(item: Admission) {
    return admissionInitials(item);
  }

  activityLabel(item: Admission) {
    return admissionDateLabel(admissionLastActivity(item));
  }

  createdLabel(item: Admission) {
    return admissionDateLabel(item.createdAt);
  }

  submittedLabel(item: Admission) {
    return admissionDateLabel(item.submittedAt);
  }

  approvedLabel(item: Admission) {
    return admissionDateLabel(item.approvedAt);
  }

  captureLabel(item: Admission) {
    const stats = admissionCaptureStats(item);
    if (!stats.total) return 'No form snapshot';
    return `${stats.answered} of ${stats.total} fields captured`;
  }

  feeStatus(item: Admission) {
    const kinds = item.feeLedgerKinds || [];
    if (!kinds.length) return 'No fee ledger';
    return kinds.map((kind) => (kind === 'academic' ? 'Academic' : 'Hostel')).join(' + ');
  }

  yearForSemester(value: number | string) {
    return Math.ceil(Number(value) / 2);
  }

  firstResult() {
    return this.total() ? (this.page - 1) * this.pageSize + 1 : 0;
  }

  lastResult() {
    return Math.min(this.page * this.pageSize, this.total());
  }

  emptyTitle() {
    return this.appliedSearch()
      ? 'No matching applications'
      : `No ${this.activeView().label.toLowerCase()}`;
  }

  emptyDescription() {
    return this.appliedSearch()
      ? 'Try a broader name, student ID, programme, or session search.'
      : 'Applications will appear here when they reach this workflow stage.';
  }

  private updateUrl(
    changes: Partial<{
      view: WorkbenchView;
      search: string;
      page: number;
      pageSize: number;
    }>,
  ) {
    const nextView = changes.view ?? this.view();
    const nextSearch = changes.search ?? this.search.trim();
    const nextPage = changes.page ?? this.page;
    const nextPageSize = changes.pageSize ?? this.pageSize;
    this.message.set('');
    this.actionError.set('');
    const unchanged =
      nextView === this.view() &&
      nextSearch === this.appliedSearch() &&
      nextPage === this.page &&
      nextPageSize === this.pageSize;
    if (unchanged) {
      this.load();
      return;
    }
    void this.router.navigate([], {
      relativeTo: this.route,
      queryParams: {
        view: nextView,
        q: nextSearch || null,
        page: nextPage > 1 ? nextPage : null,
        size: nextPageSize !== ERP_PAGINATION.defaultPageSize ? nextPageSize : null,
      },
      replaceUrl: true,
    });
  }

  @HostListener('document:keydown.escape')
  closeLayerOnEscape() {
    if (this.credentialStudent() || this.feeDeleteStudent() || this.feeGenerationIds().length) {
      return;
    }
    if (this.previewOpen()) this.closePreview();
  }
}

function feePeriodFromAdmission(item: Admission): FeePeriodDraft {
  const currentAcademicYear = Number(item.currentAcademicYear || 1);
  return {
    currentAcademicYear,
    currentSemester: Number(item.currentSemester || currentAcademicYear * 2 - 1),
    feeFrequency: item.feeFrequency === 'semester' ? 'semester' : 'year',
  };
}

function viewFromStatus(value: unknown): WorkbenchView {
  if (value === 'draft') return 'draft';
  if (value === 'pending_approval' || value === 'submitted') return 'review';
  if (value === 'approved') return 'approved';
  return 'all';
}

function normaliseView(value: string | null): WorkbenchView | null {
  return SAVED_VIEWS.some((view) => view.id === value) ? (value as WorkbenchView) : null;
}

function positiveInteger(value: string | null, fallback: number): number {
  const parsed = Number(value);
  return Number.isInteger(parsed) && parsed > 0 ? parsed : fallback;
}

function allowedPageSize(value: string | null): number {
  const parsed = Number(value);
  return ERP_PAGINATION.pageSizeOptions.some((option) => option === parsed)
    ? parsed
    : ERP_PAGINATION.defaultPageSize;
}
