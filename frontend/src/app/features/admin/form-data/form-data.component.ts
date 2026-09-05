import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ApiService } from '../../../core/api.service';
import { FormSubmission } from '../../../core/models';
import { AdminPageComponent } from '../../../shared/ui/admin-page/admin-page.component';
import {
  CompactActionItem,
  CompactActionMenuComponent,
} from '../../../shared/ui/compact-action-menu/compact-action-menu.component';

@Component({
  selector: 'erp-form-data',
  imports: [CommonModule, FormsModule, AdminPageComponent, CompactActionMenuComponent],
  templateUrl: './form-data.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormDataComponent {
  private readonly api = inject(ApiService);
  readonly items = signal<FormSubmission[]>([]);
  readonly loading = signal(true);
  readonly error = signal('');
  readonly selected = signal<FormSubmission | null>(null);
  readonly actions: readonly CompactActionItem[] = [{ id: 'view', label: 'View', icon: 'view' }];
  search = '';
  purpose = '';
  readonly filtered = computed(() => {
    const query = this.search.trim().toLowerCase();
    return this.items().filter(
      (item) =>
        (!this.purpose || item.purpose === this.purpose) &&
        (!query || JSON.stringify(item).toLowerCase().includes(query)),
    );
  });

  constructor() {
    this.load();
  }
  load() {
    this.loading.set(true);
    this.api.formSubmissions().subscribe({
      next: ({ items }) => {
        this.items.set(items);
        this.loading.set(false);
      },
      error: (error) => {
        this.error.set(error.error?.message || 'Form submissions could not be loaded.');
        this.loading.set(false);
      },
    });
  }
  handleAction(action: string, item: FormSubmission) {
    if (action === 'view') this.selected.set(item);
  }
  purposeLabel(value: string) {
    return (
      {
        admission: 'Student admission',
        faculty: 'Faculty',
        employee: 'Employee',
        general: 'General',
      }[value] || value
    );
  }
  responseRows(item: FormSubmission) {
    const labels = new Map<string, string>();
    for (const section of item.formSnapshot?.sections || [])
      for (const subsection of section.subsections)
        for (const field of subsection.fields) labels.set(field.id, field.name);
    return Object.entries(item.responses || {}).map(([fieldId, value]) => ({
      label: labels.get(fieldId) || fieldId,
      value: Array.isArray(value)
        ? value.join(', ')
        : typeof value === 'object' && value
          ? JSON.stringify(value)
          : String(value ?? '—'),
    }));
  }
}
