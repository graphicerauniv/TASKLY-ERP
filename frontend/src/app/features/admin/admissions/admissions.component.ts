import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { Observable } from 'rxjs';
import { ApiService } from '../../../core/api.service';
import { ERP_PAGINATION } from '../../../core/config/data-view.constants';
import { Admission, FormField, FormSubsection } from '../../../core/models';
import { AdminPageComponent } from '../../../shared/ui/admin-page/admin-page.component';
import {
  CompactActionItem,
  CompactActionMenuComponent,
} from '../../../shared/ui/compact-action-menu/compact-action-menu.component';
import { ConfirmDialogComponent } from '../../../shared/ui/confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'erp-admissions',
  imports: [
    AdminPageComponent,
    CompactActionMenuComponent,
    ConfirmDialogComponent,
    FormsModule,
    RouterLink,
  ],
  templateUrl: './admissions.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AdmissionsComponent {
  private readonly api = inject(ApiService);
  private readonly router = inject(Router);
  private readonly route = inject(ActivatedRoute);
  readonly items = signal<Admission[]>([]);
  readonly selected = signal<Admission | null>(null);
  readonly masterLabels = signal<Record<string, string>>({});
  readonly loading = signal(false);
  readonly loadingDetails = signal(false);
  readonly message = signal('');
  readonly error = signal('');
  readonly credentialStudent = signal<Admission | null>(null);
  readonly credentialAction = signal<'approve' | 'reset'>('approve');
  readonly credentialSaving = signal(false);
  readonly selectedStudentIds = signal<Set<string>>(new Set());
  readonly feeSaving = signal(false);
  readonly feeDeleteStudent = signal<Admission | null>(null);
  readonly pageSizeOptions = ERP_PAGINATION.pageSizeOptions;
  readonly status = signal<'draft' | 'pending_approval' | 'approved'>('approved');
  readonly title = signal('Approved Students');
  readonly description = signal('Students whose admission records have been approved.');
  readonly total = signal(0);
  readonly pages = signal(1);
  readonly viewActions: CompactActionItem[] = [{ id: 'view', label: 'View details', icon: 'view' }];
  readonly approvedActions: CompactActionItem[] = [
    { id: 'create-fees', label: 'Create Ledger & Due Card', icon: 'edit' },
    { id: 'delete-fees', label: 'Delete Ledger & Due Card', icon: 'delete', destructive: true },
    { id: 'edit', label: 'Edit admission data', icon: 'edit' },
    { id: 'password', label: 'Set or reset password', icon: 'edit' },
    { id: 'view', label: 'View details', icon: 'view' },
  ];
  readonly draftActions: CompactActionItem[] = [
    { id: 'edit', label: 'Edit admission', icon: 'edit' },
    { id: 'view', label: 'View details', icon: 'view' },
  ];
  readonly pendingActions: CompactActionItem[] = [
    { id: 'edit', label: 'Edit admission', icon: 'edit' },
    { id: 'approve', label: 'Approve student', icon: 'check' },
    { id: 'view', label: 'View details', icon: 'view' },
  ];
  search = '';
  page = 1;
  pageSize = 25;
  passwordMode: 'student-id' | 'manual' = 'student-id';
  manualPassword = '';
  confirmPassword = '';
  currentAcademicYear = 1;
  readonly academicYearOptions = Array.from({ length: 10 }, (_, index) => index + 1);

  constructor() {
    this.route.data.subscribe((data) => {
      this.status.set(data['status'] || 'approved');
      this.title.set(data['title'] || 'Approved Students');
      this.description.set(data['description'] || 'Student admission records.');
      this.page = 1;
      this.load();
    });
  }

  load() {
    this.loading.set(true);
    this.error.set('');
    this.api
      .admissions({
        status: this.status(),
        search: this.search.trim(),
        page: this.page,
        limit: this.pageSize,
      })
      .subscribe({
        next: ({ items, pagination }) => {
          this.items.set(items);
          this.total.set(pagination.total);
          this.pages.set(Math.max(1, pagination.pages));
          this.loading.set(false);
        },
        error: (error) => {
          this.error.set(error.error?.message || 'Could not load student records.');
          this.loading.set(false);
        },
      });
  }

  searchRecords() {
    this.page = 1;
    this.load();
  }

  searchHelp() {
    return this.status() === 'draft'
      ? 'Search drafts by student name.'
      : 'Search by student name, Student ID, course, or session.';
  }

  changePage(nextPage: number) {
    if (nextPage < 1 || nextPage > this.pages()) return;
    this.page = nextPage;
    this.load();
  }

  changePageSize() {
    this.page = 1;
    this.load();
  }

  view(item: Admission) {
    this.loadingDetails.set(true);
    this.api.admission(item._id).subscribe({
      next: ({ item: detail, masterLabels }) => {
        this.selected.set(detail);
        this.masterLabels.set(masterLabels);
        this.loadingDetails.set(false);
      },
      error: () => this.loadingDetails.set(false),
    });
  }

  actionsFor(item: Admission) {
    if (item.status === 'draft') return this.draftActions;
    if (item.status === 'pending_approval' || item.status === 'submitted')
      return this.pendingActions;
    return this.approvedActions;
  }

  handleRowAction(action: string, item: Admission) {
    if (action === 'view') this.view(item);
    if (action === 'edit') void this.router.navigate(['/admin/admissions', item._id, 'edit']);
    if (action === 'approve') this.approve(item);
    if (action === 'password') this.openCredentials(item, 'reset');
    if (action === 'create-fees') this.createFees([item._id]);
    if (action === 'delete-fees') this.feeDeleteStudent.set(item);
  }

  isSelected(item: Admission) {
    return this.selectedStudentIds().has(item._id);
  }

  toggleStudent(item: Admission, selected: boolean) {
    this.selectedStudentIds.update((current) => {
      const next = new Set(current);
      if (selected) next.add(item._id);
      else next.delete(item._id);
      return next;
    });
  }

  togglePage(selected: boolean) {
    this.selectedStudentIds.set(new Set(selected ? this.items().map((item) => item._id) : []));
  }

  createSelectedFees() {
    this.createFees([...this.selectedStudentIds()]);
  }

  setAcademicYear(item: Admission, value: number | string) {
    const currentAcademicYear = Number(value);
    if (!Number.isInteger(currentAcademicYear) || this.feeSaving()) return;
    this.feeSaving.set(true);
    this.error.set('');
    this.api.setAdmissionAcademicYear(item._id, currentAcademicYear).subscribe({
      next: () => {
        item.currentAcademicYear = currentAcademicYear;
        this.items.update((items) => [...items]);
        this.feeSaving.set(false);
        this.createFees([item._id]);
      },
      error: (error) => {
        this.error.set(error.error?.message || 'Could not update the current academic year.');
        this.feeSaving.set(false);
      },
    });
  }

  createFees(studentAdmissionIds: string[]) {
    if (!studentAdmissionIds.length || this.feeSaving()) return;
    this.feeSaving.set(true);
    this.error.set('');
    this.api.generateStudentFees(studentAdmissionIds).subscribe({
      next: ({ created, studentsProcessed, results }) => {
        const failures = results
          .flatMap((result) =>
            result.reason
              ? [`${result.studentName || result.studentId || 'Student'}: ${result.reason}`]
              : result.skippedKinds.map(
                  (item) =>
                    `${result.studentName || result.studentId || 'Student'} ${item.kind}: ${item.reason}`,
                ),
          )
          .filter((reason) => !reason.includes('already created'));
        this.message.set(
          `${created} fee ledger(s) created for ${studentsProcessed} student(s).${failures.length ? ` ${failures.join(' ')}` : ''}`,
        );
        this.selectedStudentIds.set(new Set());
        this.feeSaving.set(false);
        this.load();
      },
      error: (error) => {
        this.error.set(error.error?.message || 'Could not create student fees.');
        this.feeSaving.set(false);
      },
    });
  }

  deleteFees(item: Admission) {
    if (this.feeSaving()) return;
    this.feeSaving.set(true);
    this.error.set('');
    this.api.deleteStudentFees(item._id).subscribe({
      next: ({ deleted }) => {
        this.message.set(
          `${deleted} fee ledger(s) deleted for ${item.studentName || item.studentId}.`,
        );
        this.feeSaving.set(false);
        this.feeDeleteStudent.set(null);
        this.load();
      },
      error: (error) => {
        this.error.set(error.error?.message || 'Could not delete student fees.');
        this.feeSaving.set(false);
      },
    });
  }

  confirmFeeDeletion() {
    const student = this.feeDeleteStudent();
    if (student) this.deleteFees(student);
  }

  feeStatus(item: Admission) {
    const kinds = item.feeLedgerKinds || [];
    if (!kinds.length) return 'Not created';
    return kinds.map((kind) => (kind === 'academic' ? 'Academic' : 'Hostel')).join(' + ');
  }

  approve(item: Admission) {
    this.openCredentials(item, 'approve');
  }

  openCredentials(item: Admission, action: 'approve' | 'reset') {
    this.credentialStudent.set(item);
    this.credentialAction.set(action);
    this.passwordMode = 'student-id';
    this.manualPassword = '';
    this.confirmPassword = '';
    this.currentAcademicYear = item.currentAcademicYear || 1;
    this.error.set('');
  }

  closeCredentials() {
    if (!this.credentialSaving()) this.credentialStudent.set(null);
  }

  saveCredentials() {
    const item = this.credentialStudent();
    if (!item) return;
    this.error.set('');
    if (
      this.passwordMode === 'manual' &&
      (this.manualPassword.length < 8 || this.manualPassword !== this.confirmPassword)
    ) {
      this.error.set('Manual passwords must match and contain at least 8 characters.');
      return;
    }
    this.credentialSaving.set(true);
    const passwordBody = {
      passwordMode: this.passwordMode,
      password: this.passwordMode === 'manual' ? this.manualPassword : undefined,
    } as const;
    const request: Observable<unknown> =
      this.credentialAction() === 'approve'
        ? this.api.approveAdmission(item._id, {
            ...passwordBody,
            currentAcademicYear: this.currentAcademicYear,
          })
        : this.api.resetStudentPassword(item._id, passwordBody);
    request.subscribe({
      next: () => {
        const action =
          this.credentialAction() === 'approve' ? 'approved and activated' : 'password reset';
        this.message.set(
          `${item.studentName || item.studentId || 'Student'} ${action} successfully.`,
        );
        this.credentialSaving.set(false);
        this.credentialStudent.set(null);
        this.load();
      },
      error: (error: { error?: { message?: string } }) => {
        this.error.set(error.error?.message || 'Could not update this student account.');
        this.credentialSaving.set(false);
      },
    });
  }

  displayStatusLabel(item: Admission) {
    return (
      {
        draft: 'Unfilled',
        submitted: 'Not approved',
        pending_approval: 'Not approved',
        approved: item.isActive ? 'Active' : 'Approved',
      }[item.status] || item.status
    );
  }

  createdLabel(item: Admission) {
    const createdAt = new Date(item.createdAt);
    return Number.isNaN(createdAt.getTime())
      ? 'Date unavailable'
      : new Intl.DateTimeFormat('en-IN', {
          dateStyle: 'medium',
          timeStyle: 'short',
        }).format(createdAt);
  }

  close() {
    this.selected.set(null);
    this.masterLabels.set({});
  }

  value(field: FormField, responses: Record<string, unknown>) {
    return this.displayValue(responses[field.id]);
  }

  entries(admission: Admission, subsection: FormSubsection) {
    return admission.repeatableResponses[subsection.id] || [];
  }

  displayValue(value: unknown): string {
    if (value === null || value === undefined || value === '') return '—';
    if (Array.isArray(value)) return value.map((item) => this.displayValue(item)).join(', ');
    if (typeof value === 'object') {
      const file = value as { name?: string; url?: string };
      return file.name || file.url || 'Uploaded file';
    }
    if (typeof value === 'boolean') return value ? 'Yes' : 'No';
    return this.masterLabels()[String(value)] || String(value);
  }
}
