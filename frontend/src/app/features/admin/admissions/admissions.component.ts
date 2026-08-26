import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { ApiService } from '../../../core/api.service';
import { ERP_PAGINATION } from '../../../core/config/data-view.constants';
import { Admission, FormField, FormSubsection } from '../../../core/models';
import { AdminPageComponent } from '../../../shared/ui/admin-page/admin-page.component';
import {
  CompactActionItem,
  CompactActionMenuComponent,
} from '../../../shared/ui/compact-action-menu/compact-action-menu.component';

@Component({
  selector: 'erp-admissions',
  imports: [AdminPageComponent, CompactActionMenuComponent, FormsModule, RouterLink],
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
  readonly pageSizeOptions = ERP_PAGINATION.pageSizeOptions;
  readonly status = signal<'draft' | 'pending_approval' | 'approved'>('approved');
  readonly title = signal('Approved Students');
  readonly description = signal('Students whose admission records have been approved.');
  readonly total = signal(0);
  readonly pages = signal(1);
  readonly viewActions: CompactActionItem[] = [{ id: 'view', label: 'View details', icon: 'view' }];
  readonly draftActions: CompactActionItem[] = [
    { id: 'edit', label: 'Edit admission', icon: 'edit' },
    { id: 'view', label: 'View details', icon: 'view' },
  ];
  readonly pendingActions: CompactActionItem[] = [
    { id: 'approve', label: 'Approve student', icon: 'check' },
    { id: 'view', label: 'View details', icon: 'view' },
  ];
  search = '';
  page = 1;
  pageSize = 25;

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
    return this.viewActions;
  }

  handleRowAction(action: string, item: Admission) {
    if (action === 'view') this.view(item);
    if (action === 'edit') void this.router.navigate(['/admin/admissions', item._id, 'edit']);
    if (action === 'approve') this.approve(item);
  }

  approve(item: Admission) {
    this.error.set('');
    this.api.approveAdmission(item._id).subscribe({
      next: () => {
        this.message.set(
          `${item.studentName || item.studentId || 'Student'} approved successfully.`,
        );
        this.load();
      },
      error: (error) => this.error.set(error.error?.message || 'Could not approve this student.'),
    });
  }

  displayStatusLabel(item: Admission) {
    return (
      {
        draft: 'Unfilled',
        submitted: 'Not approved',
        pending_approval: 'Not approved',
        approved: 'Approved',
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
