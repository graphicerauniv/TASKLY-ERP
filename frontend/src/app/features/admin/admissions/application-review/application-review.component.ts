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
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, RouterLink } from '@angular/router';
import {
  LucideArrowLeft,
  LucideBadgeCheck,
  LucideCircleAlert,
  LucideClipboardCheck,
  LucideFileCheck2,
  LucideFileText,
  LucideKeyRound,
  LucidePencil,
  LucideRefreshCw,
  LucideShieldCheck,
  LucideUserRound,
  LucideX,
} from '@lucide/angular';
import { ApiService } from '../../../../core/api.service';
import { Admission, FormField } from '../../../../core/models';
import { AdminPageComponent } from '../../../../shared/ui/admin-page/admin-page.component';
import {
  admissionDateLabel,
  admissionDisplayValue,
  admissionReference,
  admissionStatusLabel,
} from '../admission-presentation';
import { admissionValidationIssues, hasAdmissionValue } from '../admission-form-validation';

interface ReviewCheck {
  id: string;
  label: string;
  detail: string;
  state: 'pass' | 'attention' | 'blocker';
}

interface DocumentEvidence {
  id: string;
  label: string;
  value: string;
  provided: boolean;
}

@Component({
  selector: 'erp-application-review',
  imports: [
    AdminPageComponent,
    CdkTrapFocus,
    FormsModule,
    LucideArrowLeft,
    LucideBadgeCheck,
    LucideCircleAlert,
    LucideClipboardCheck,
    LucideFileCheck2,
    LucideFileText,
    LucideKeyRound,
    LucidePencil,
    LucideRefreshCw,
    LucideShieldCheck,
    LucideUserRound,
    LucideX,
    RouterLink,
  ],
  templateUrl: './application-review.component.html',
  styleUrl: './application-review.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ApplicationReviewComponent {
  private readonly api = inject(ApiService);
  private readonly route = inject(ActivatedRoute);
  private readonly destroyRef = inject(DestroyRef);
  private readonly document = inject(DOCUMENT);
  private activationReturnFocus?: HTMLElement;

  readonly admissionId = signal('');
  readonly item = signal<Admission | null>(null);
  readonly masterLabels = signal<Record<string, string>>({});
  readonly loading = signal(true);
  readonly error = signal('');
  readonly resultMessage = signal('');
  readonly activationOpen = signal(false);
  readonly activationSaving = signal(false);
  readonly activationError = signal('');
  readonly submissionSaving = signal(false);
  readonly submissionError = signal('');
  readonly missingRequired = computed(() =>
    admissionValidationIssues(this.item()).map((issue) => issue.path),
  );
  readonly documents = computed(() => this.documentEvidence(this.item()));
  readonly reviewChecks = computed<ReviewCheck[]>(() => {
    const item = this.item();
    if (!item) return [];
    const identityReady = Boolean(item.studentName && item.courseName && item.academicSession);
    const requiredGaps = this.missingRequired();
    const documents = this.documents();
    const suppliedDocuments = documents.filter((document) => document.provided).length;
    const submitted = item.status === 'pending_approval' || item.status === 'submitted';

    return [
      {
        id: 'workflow',
        label: 'Workflow stage',
        detail: submitted
          ? 'The application is submitted and ready for an administrative decision.'
          : item.status === 'approved'
            ? 'This application has already been approved.'
            : 'The application must be submitted before it can be activated.',
        state:
          submitted || item.status === 'approved'
            ? 'pass'
            : item.status === 'draft'
              ? 'attention'
              : 'blocker',
      },
      {
        id: 'identity',
        label: 'Identity and programme',
        detail: identityReady
          ? 'Applicant name, programme, and academic session are available.'
          : 'Applicant name, programme, or academic session is missing.',
        state: identityReady ? 'pass' : 'blocker',
      },
      {
        id: 'required',
        label: 'Required responses',
        detail: requiredGaps.length
          ? `${requiredGaps.length} required response${requiredGaps.length === 1 ? ' is' : 's are'} missing.`
          : 'All required responses in the saved form snapshot are present.',
        state: requiredGaps.length ? 'blocker' : 'pass',
      },
      {
        id: 'documents',
        label: 'Document evidence',
        detail: documents.length
          ? `${suppliedDocuments} of ${documents.length} configured document field${documents.length === 1 ? '' : 's'} supplied.`
          : 'No document fields are configured in this form snapshot.',
        state: documents.length && suppliedDocuments < documents.length ? 'attention' : 'pass',
      },
    ];
  });
  readonly blockerCount = computed(
    () => this.reviewChecks().filter((check) => check.state === 'blocker').length,
  );
  readonly canActivate = computed(() => {
    const item = this.item();
    return Boolean(
      item &&
      (item.status === 'pending_approval' || item.status === 'submitted') &&
      this.blockerCount() === 0,
    );
  });
  readonly canSubmit = computed(() => {
    const item = this.item();
    return Boolean(
      item &&
      item.status === 'draft' &&
      this.missingRequired().length === 0 &&
      item.studentName &&
      item.courseName &&
      item.academicSession,
    );
  });

  passwordMode: 'student-id' | 'manual' = 'student-id';
  manualPassword = '';
  confirmPassword = '';
  currentAcademicYear = 1;
  currentSemester = 1;
  feeFrequency: 'year' | 'semester' = 'year';
  readonly academicYearOptions = Array.from({ length: 10 }, (_, index) => index + 1);
  readonly semesterOptions = Array.from({ length: 20 }, (_, index) => index + 1);

  constructor() {
    this.route.paramMap.pipe(takeUntilDestroyed(this.destroyRef)).subscribe((params) => {
      const id = params.get('admissionId') || '';
      if (!id || id === this.admissionId()) return;
      this.admissionId.set(id);
      this.load();
    });

    effect((onCleanup) => {
      if (!this.activationOpen()) return;
      const previousOverflow = this.document.body.style.overflow;
      this.document.body.style.overflow = 'hidden';
      onCleanup(() => {
        this.document.body.style.overflow = previousOverflow;
      });
    });
  }

  load() {
    if (!this.admissionId()) return;
    this.loading.set(true);
    this.error.set('');
    this.api
      .admission(this.admissionId())
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe({
        next: ({ item, masterLabels }) => {
          this.item.set(item);
          this.masterLabels.set(masterLabels);
          this.loading.set(false);
        },
        error: (error) => {
          this.error.set(
            error.error?.message || 'This application could not be loaded for review.',
          );
          this.loading.set(false);
        },
      });
  }

  openActivation(event: Event) {
    const item = this.item();
    if (!item || !this.canActivate()) return;
    if (event.currentTarget instanceof HTMLElement)
      this.activationReturnFocus = event.currentTarget;
    this.passwordMode = 'student-id';
    this.manualPassword = '';
    this.confirmPassword = '';
    this.currentAcademicYear = Number(item.currentAcademicYear || 1);
    this.currentSemester = Number(item.currentSemester || this.currentAcademicYear * 2 - 1);
    this.feeFrequency = item.feeFrequency || 'year';
    this.activationError.set('');
    this.activationOpen.set(true);
  }

  closeActivation(restoreFocus = true) {
    if (this.activationSaving()) return;
    this.activationOpen.set(false);
    this.activationError.set('');
    if (restoreFocus) setTimeout(() => this.activationReturnFocus?.focus());
  }

  activate() {
    const item = this.item();
    if (!item || !this.canActivate() || this.activationSaving()) return;
    this.activationError.set('');
    if (
      this.passwordMode === 'manual' &&
      (this.manualPassword.length < 8 || this.manualPassword !== this.confirmPassword)
    ) {
      this.activationError.set('Manual passwords must match and contain at least 8 characters.');
      return;
    }

    this.activationSaving.set(true);
    this.api
      .approveAdmission(item._id, {
        passwordMode: this.passwordMode,
        password: this.passwordMode === 'manual' ? this.manualPassword : undefined,
        currentAcademicYear:
          this.feeFrequency === 'semester'
            ? this.yearForSemester(this.currentSemester)
            : this.currentAcademicYear,
        currentSemester: this.currentSemester,
        feeFrequency: this.feeFrequency,
      })
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe({
        next: ({ item: updated }) => {
          this.item.set({ ...item, ...updated });
          this.activationSaving.set(false);
          this.activationOpen.set(false);
          this.resultMessage.set(
            `${item.studentName || admissionReference(item)} was approved and activated successfully.`,
          );
        },
        error: (error) => {
          this.activationError.set(
            error.error?.message || 'The application could not be activated.',
          );
          this.activationSaving.set(false);
        },
      });
  }

  submitForReview() {
    const item = this.item();
    if (!item || !this.canSubmit() || this.submissionSaving()) return;
    this.submissionError.set('');
    this.submissionSaving.set(true);
    this.api
      .submitAdminAdmission(item._id)
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe({
        next: ({ item: updated }) => {
          this.item.set({ ...item, ...updated });
          this.submissionSaving.set(false);
          this.resultMessage.set('Application submitted for administrative review.');
        },
        error: (error) => {
          this.submissionError.set(
            error.error?.message || 'The application could not be submitted for review.',
          );
          this.submissionSaving.set(false);
        },
      });
  }

  reference(item: Admission) {
    return admissionReference(item);
  }

  statusLabel(item: Admission) {
    return admissionStatusLabel(item);
  }

  dateLabel(value?: string) {
    return admissionDateLabel(value);
  }

  yearForSemester(value: number | string) {
    return Math.ceil(Number(value) / 2);
  }

  @HostListener('document:keydown.escape')
  onEscape() {
    if (this.activationOpen()) this.closeActivation();
  }

  private documentEvidence(item: Admission | null): DocumentEvidence[] {
    if (!item) return [];
    return item.formSnapshot.sections.flatMap((section) =>
      section.subsections.flatMap((subsection) =>
        subsection.fields
          .filter((field) => field.isActive && isDocumentField(field))
          .map((field) => {
            const rawValue = item.responses[field.id];
            return {
              id: field.id,
              label: field.name,
              value: admissionDisplayValue(rawValue, this.masterLabels()),
              provided: hasAdmissionValue(rawValue),
            };
          }),
      ),
    );
  }
}

function isDocumentField(field: FormField) {
  return field.type === 'file' || field.type === 'image' || field.type === 'signature';
}
