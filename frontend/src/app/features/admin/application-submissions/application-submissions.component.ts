import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../../../core/api.service';
import { AdmissionForm, FormSubmission } from '../../../core/models';
import { AdminPageComponent } from '../../../shared/ui/admin-page/admin-page.component';
import {
  CompactActionItem,
  CompactActionMenuComponent,
} from '../../../shared/ui/compact-action-menu/compact-action-menu.component';

@Component({
  selector: 'erp-application-submissions',
  imports: [CommonModule, FormsModule, AdminPageComponent, CompactActionMenuComponent],
  templateUrl: './application-submissions.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ApplicationSubmissionsComponent {
  private readonly api = inject(ApiService);
  private readonly route = inject(ActivatedRoute);
  private readonly router = inject(Router);
  readonly form = signal<AdmissionForm | null>(null);
  readonly section = signal<{ id: string; name: string } | null>(null);
  readonly items = signal<FormSubmission[]>([]);
  readonly loading = signal(true);
  readonly error = signal('');
  readonly selected = signal<FormSubmission | null>(null);
  readonly actions: readonly CompactActionItem[] = [
    { id: 'view', label: 'View', icon: 'view' },
    { id: 'edit', label: 'Edit', icon: 'edit' },
  ];
  search = '';
  readonly filtered = computed(() => {
    const query = this.search.trim().toLowerCase();
    return this.items().filter(
      (item) => !query || JSON.stringify(item).toLowerCase().includes(query),
    );
  });

  constructor() {
    this.route.paramMap.pipe(takeUntilDestroyed()).subscribe((params) => {
      const sectionId = params.get('sectionId') || '';
      if (sectionId) this.loadDatabase(sectionId);
      else this.load(params.get('purpose') || '', params.get('formId') || '');
    });
  }
  loadDatabase(sectionId: string) {
    this.loading.set(true);
    this.error.set('');
    this.api.databaseSubmissions(sectionId).subscribe({
      next: ({ items, section }) => {
        this.items.set(items);
        this.section.set(section);
        this.form.set(null);
        this.loading.set(false);
      },
      error: (error) => {
        this.error.set(error.error?.message || 'Database records could not be loaded.');
        this.loading.set(false);
      },
    });
  }
  load(purpose: string, formId: string) {
    this.loading.set(true);
    this.error.set('');
    this.api.applicationSubmissions(purpose, formId).subscribe({
      next: ({ items, form }) => {
        this.items.set(items);
        this.form.set(form);
        this.loading.set(false);
      },
      error: (error) => {
        this.error.set(error.error?.message || 'Application submissions could not be loaded.');
        this.loading.set(false);
      },
    });
  }
  handleAction(action: string, item: FormSubmission) {
    if (action === 'view') this.selected.set(item);
    if (action === 'edit' && this.section())
      void this.router.navigate([
        '/admin/database',
        this.section()!.id,
        item.purpose,
        item._id,
        'edit',
      ]);
  }
  purposeLabel(value: string) {
    return { faculty: 'Faculty', employee: 'Employee', general: 'Other' }[value] || value;
  }
  responseRows(item: FormSubmission) {
    const labels = new Map<string, string>();
    const subsectionLabels = new Map<string, string>();
    for (const section of item.formSnapshot?.sections || [])
      for (const subsection of section.subsections) {
        subsectionLabels.set(subsection.id, subsection.name);
        for (const field of subsection.fields) labels.set(field.id, field.name);
      }
    const rows = Object.entries(item.responses || {}).map(([fieldId, value]) => ({
      label: labels.get(fieldId) || fieldId,
      value: this.displayValue(value),
    }));
    for (const [subsectionId, entries] of Object.entries(item.repeatableResponses || {}))
      entries.forEach((entry, index) =>
        Object.entries(entry).forEach(([fieldId, value]) =>
          rows.push({
            label: `${subsectionLabels.get(subsectionId) || 'Record'} ${index + 1} · ${labels.get(fieldId) || fieldId}`,
            value: this.displayValue(value),
          }),
        ),
      );
    return rows;
  }
  private displayValue(value: unknown) {
    return Array.isArray(value)
      ? value.join(', ')
      : typeof value === 'object' && value
        ? JSON.stringify(value)
        : String(value ?? '—');
  }
}
