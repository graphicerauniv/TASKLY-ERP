import { DatePipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ApiService } from '../../../core/api.service';
import { Admission, FormField, FormSubsection } from '../../../core/models';

@Component({
  selector: 'erp-admissions',
  imports: [DatePipe, RouterLink],
  templateUrl: './admissions.component.html',
  styleUrl: './admissions.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AdmissionsComponent {
  private readonly api = inject(ApiService);
  readonly items = signal<Admission[]>([]);
  readonly selected = signal<Admission | null>(null);
  readonly masterLabels = signal<Record<string, string>>({});
  readonly loadingDetails = signal(false);

  constructor() {
    this.api.admissions().subscribe(({ items }) => this.items.set(items));
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
