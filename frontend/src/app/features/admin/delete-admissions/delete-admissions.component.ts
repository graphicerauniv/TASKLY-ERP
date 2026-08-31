import { DatePipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LucideSearch, LucideTriangleAlert } from '@lucide/angular';
import { ApiService } from '../../../core/api.service';
import { ERP_PAGINATION } from '../../../core/config/data-view.constants';
import { Admission } from '../../../core/models';
import { AdminPageComponent } from '../../../shared/ui/admin-page/admin-page.component';
import { AdmissionWorkspaceNavComponent } from '../../../shared/ui/admission-workspace-nav/admission-workspace-nav.component';
import {
  CompactActionItem,
  CompactActionMenuComponent,
} from '../../../shared/ui/compact-action-menu/compact-action-menu.component';
import { ConfirmDialogComponent } from '../../../shared/ui/confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'erp-delete-admissions',
  imports: [
    AdminPageComponent,
    AdmissionWorkspaceNavComponent,
    CompactActionMenuComponent,
    ConfirmDialogComponent,
    DatePipe,
    FormsModule,
    LucideSearch,
    LucideTriangleAlert,
  ],
  templateUrl: './delete-admissions.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DeleteAdmissionsComponent {
  private readonly api = inject(ApiService);
  readonly items = signal<Admission[]>([]);
  readonly query = signal('');
  readonly loading = signal(true);
  readonly deleting = signal(false);
  readonly deleteTarget = signal<Admission | null>(null);
  readonly message = signal('');
  readonly error = signal('');
  readonly rowActions: CompactActionItem[] = [
    { id: 'delete', label: 'Delete record', icon: 'delete', destructive: true },
  ];
  readonly total = signal(0);
  readonly pages = signal(1);
  readonly pageSizeOptions = ERP_PAGINATION.pageSizeOptions;
  page = 1;
  pageSize = ERP_PAGINATION.defaultPageSize;

  constructor() {
    this.load();
  }

  load() {
    this.loading.set(true);
    this.api
      .admissions({ search: this.query().trim(), page: this.page, limit: this.pageSize })
      .subscribe({
        next: ({ items, pagination }) => {
          this.items.set(items);
          this.total.set(pagination.total);
          this.pages.set(Math.max(1, pagination.pages));
          this.loading.set(false);
        },
        error: (error) => {
          this.error.set(error.error?.message || 'Unable to load admission records.');
          this.loading.set(false);
        },
      });
  }

  updateQuery(event: Event) {
    this.query.set((event.target as HTMLInputElement).value);
  }

  searchRecords() {
    this.page = 1;
    this.load();
  }

  changePage(page: number) {
    if (page < 1 || page > this.pages()) return;
    this.page = page;
    this.load();
  }

  changePageSize() {
    this.page = 1;
    this.load();
  }

  requestDelete(item: Admission) {
    this.message.set('');
    this.error.set('');
    this.deleteTarget.set(item);
  }

  handleRowAction(action: string, item: Admission) {
    if (action === 'delete') this.requestDelete(item);
  }

  cancelDelete() {
    if (!this.deleting()) this.deleteTarget.set(null);
  }

  confirmDelete() {
    const item = this.deleteTarget();
    if (!item || this.deleting()) return;
    this.deleting.set(true);
    this.api.deleteAdmission(item._id).subscribe({
      next: () => {
        this.items.update((items) => items.filter((current) => current._id !== item._id));
        this.total.update((total) => Math.max(0, total - 1));
        this.message.set(
          `Admission for ${item.studentName || item.studentId || 'student'} was permanently deleted.`,
        );
        this.deleteTarget.set(null);
        this.deleting.set(false);
      },
      error: (error) => {
        this.error.set(error.error?.message || 'Unable to delete the admission.');
        this.deleteTarget.set(null);
        this.deleting.set(false);
      },
    });
  }
}
