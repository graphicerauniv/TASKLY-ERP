import { CurrencyPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { ApiService } from '../../../core/api.service';
import { Scholarship } from '../../../core/models';
import { AdminPageComponent } from '../../../shared/ui/admin-page/admin-page.component';
import {
  FilterPopoverComponent,
  FilterPopoverOption,
} from '../../../shared/ui/filter-popover/filter-popover.component';
import {
  CompactActionItem,
  CompactActionMenuComponent,
} from '../../../shared/ui/compact-action-menu/compact-action-menu.component';

@Component({
  selector: 'erp-scholarships',
  imports: [
    AdminPageComponent,
    CompactActionMenuComponent,
    CurrencyPipe,
    FilterPopoverComponent,
    FormsModule,
    RouterLink,
  ],
  templateUrl: './scholarships.component.html',
  styleUrl: './scholarships.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScholarshipsComponent {
  private readonly api = inject(ApiService);
  private readonly route = inject(ActivatedRoute);
  private readonly router = inject(Router);
  readonly items = signal<Scholarship[]>([]);
  readonly loading = signal(false);
  readonly saving = signal(false);
  readonly error = signal('');
  readonly message = signal('');
  readonly editingId = signal<string | null>(null);
  readonly statusFilter = signal<'all' | 'active' | 'inactive'>('all');
  readonly mode = signal<'view' | 'create' | 'edit'>('view');
  readonly statusFilterOptions: readonly FilterPopoverOption[] = [
    { label: 'All statuses', value: 'all' },
    { label: 'Available', value: 'active' },
    { label: 'Inactive', value: 'inactive' },
  ];
  search = '';

  name = '';
  priority = 9999;
  valueMode: 'preconfigured' | 'custom' = 'preconfigured';
  type: 'percentage' | 'fixed' = 'percentage';
  value: number | null = null;
  isActive = true;

  filteredItems() {
    const query = this.search.trim().toLocaleLowerCase();
    return this.items().filter((item) => {
      const matchesSearch = !query || item.name.toLocaleLowerCase().includes(query);
      const matchesStatus =
        this.statusFilter() === 'all' ||
        (this.statusFilter() === 'active' ? item.isActive : !item.isActive);
      return matchesSearch && matchesStatus;
    });
  }

  activeCount() {
    return this.items().filter((item) => item.isActive).length;
  }

  actionsFor(item: Scholarship): CompactActionItem[] {
    return [
      { id: 'edit', label: 'Edit scholarship', icon: 'edit' },
      {
        id: 'toggle',
        label: item.isActive ? 'Make inactive' : 'Make available',
        icon: item.isActive ? 'delete' : 'check',
        separator: true,
      },
    ];
  }

  handleAction(action: string, item: Scholarship) {
    if (action === 'edit') this.edit(item);
    if (action === 'toggle') this.toggle(item);
  }

  constructor() {
    this.route.data.subscribe((data) => {
      this.mode.set(data['mode'] || 'view');
      this.resetForm();
      this.load();
    });
  }

  load() {
    this.loading.set(true);
    this.error.set('');
    this.api.scholarships().subscribe({
      next: ({ items }) => {
        this.items.set(items);
        const editId = this.route.snapshot.paramMap.get('id');
        if (this.mode() === 'edit' && editId) {
          const item = items.find((scholarship) => scholarship._id === editId);
          if (item) this.populateForm(item);
          else this.error.set('Scholarship not found.');
        }
        this.loading.set(false);
      },
      error: (error) => {
        this.error.set(error.error?.message || 'Could not load scholarships.');
        this.loading.set(false);
      },
    });
  }

  save() {
    if (this.saving()) return;
    const name = this.name.trim();
    if (!name) {
      this.error.set('Enter the scholarship head name.');
      return;
    }
    const value = Number(this.value || 0);
    if (
      this.valueMode === 'preconfigured' &&
      (value <= 0 || (this.type === 'percentage' && value > 100))
    ) {
      this.error.set('Enter a valid percentage or fixed scholarship amount.');
      return;
    }
    this.saving.set(true);
    this.error.set('');
    this.message.set('');
    const body = {
      name,
      priority: Number(this.priority || 9999),
      valueMode: this.valueMode,
      type: this.valueMode === 'preconfigured' ? this.type : null,
      value: this.valueMode === 'preconfigured' ? value : null,
      isActive: this.isActive,
    };
    const request = this.editingId()
      ? this.api.updateScholarship(this.editingId()!, body)
      : this.api.createScholarship(body);
    request.subscribe({
      next: () => {
        this.message.set(this.editingId() ? 'Scholarship updated.' : 'Scholarship created.');
        this.resetForm();
        this.saving.set(false);
        void this.router.navigate(['/admin/fees/scholarships/view']);
      },
      error: (error) => {
        this.error.set(error.error?.message || 'Could not save the scholarship.');
        this.saving.set(false);
      },
    });
  }

  edit(item: Scholarship) {
    void this.router.navigate(['/admin/fees/scholarships', item._id, 'edit']);
  }

  private populateForm(item: Scholarship) {
    this.editingId.set(item._id);
    this.name = item.name;
    this.priority = Number(item.priority || 9999);
    this.valueMode = item.valueMode || 'preconfigured';
    this.type = item.type || 'percentage';
    this.value = Number(item.value || 0) || null;
    this.isActive = item.isActive;
    this.error.set('');
    this.message.set('');
  }

  toggle(item: Scholarship) {
    this.api.updateScholarship(item._id, { isActive: !item.isActive }).subscribe({
      next: () => {
        this.message.set(item.isActive ? 'Scholarship disabled.' : 'Scholarship enabled.');
        this.load();
      },
      error: (error) => this.error.set(error.error?.message || 'Could not update the scholarship.'),
    });
  }

  cancelForm() {
    void this.router.navigate(['/admin/fees/scholarships/view']);
  }

  private resetForm() {
    this.editingId.set(null);
    this.name = '';
    this.priority = 9999;
    this.valueMode = 'preconfigured';
    this.type = 'percentage';
    this.value = null;
    this.isActive = true;
  }
}
