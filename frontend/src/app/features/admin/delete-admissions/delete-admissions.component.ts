import { DatePipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';
import { LucideSearch, LucideTrash2, LucideTriangleAlert, LucideX } from '@lucide/angular';
import { ApiService } from '../../../core/api.service';
import { Admission } from '../../../core/models';

@Component({
  selector: 'erp-delete-admissions',
  imports: [DatePipe, LucideSearch, LucideTrash2, LucideTriangleAlert, LucideX],
  templateUrl: './delete-admissions.component.html',
  styleUrl: './delete-admissions.component.scss',
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
  readonly filteredItems = computed(() => {
    const query = this.query().trim().toLowerCase();
    if (!query) return this.items();
    return this.items().filter(
      (item) =>
        item.applicationNumber.toLowerCase().includes(query) ||
        item.status.toLowerCase().includes(query),
    );
  });

  constructor() {
    this.api.admissions().subscribe({
      next: ({ items }) => {
        this.items.set(items);
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

  requestDelete(item: Admission) {
    this.message.set('');
    this.error.set('');
    this.deleteTarget.set(item);
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
        this.message.set(`Admission ${item.applicationNumber} was permanently deleted.`);
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
