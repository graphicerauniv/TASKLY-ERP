import { CurrencyPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ApiService } from '../../../core/api.service';
import { Scholarship } from '../../../core/models';
import { AdminPageComponent } from '../../../shared/ui/admin-page/admin-page.component';

@Component({
  selector: 'erp-scholarships',
  imports: [AdminPageComponent, CurrencyPipe, FormsModule],
  templateUrl: './scholarships.component.html',
  styleUrl: './scholarships.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScholarshipsComponent {
  private readonly api = inject(ApiService);
  readonly items = signal<Scholarship[]>([]);
  readonly loading = signal(false);
  readonly saving = signal(false);
  readonly error = signal('');
  readonly message = signal('');
  readonly editingId = signal<string | null>(null);

  name = '';
  type: Scholarship['type'] = 'percentage';
  value: number | null = null;
  isActive = true;

  constructor() {
    this.load();
  }

  load() {
    this.loading.set(true);
    this.error.set('');
    this.api.scholarships().subscribe({
      next: ({ items }) => {
        this.items.set(items);
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
    const value = Number(this.value || 0);
    if (!name || value <= 0) {
      this.error.set('Enter the scholarship name and a value greater than zero.');
      return;
    }
    if (this.type === 'percentage' && value > 100) {
      this.error.set('Percentage scholarship cannot exceed 100%.');
      return;
    }
    this.saving.set(true);
    this.error.set('');
    this.message.set('');
    const body = { name, type: this.type, value, isActive: this.isActive };
    const request = this.editingId()
      ? this.api.updateScholarship(this.editingId()!, body)
      : this.api.createScholarship(body);
    request.subscribe({
      next: () => {
        this.message.set(this.editingId() ? 'Scholarship updated.' : 'Scholarship created.');
        this.reset();
        this.saving.set(false);
        this.load();
      },
      error: (error) => {
        this.error.set(error.error?.message || 'Could not save the scholarship.');
        this.saving.set(false);
      },
    });
  }

  edit(item: Scholarship) {
    this.editingId.set(item._id);
    this.name = item.name;
    this.type = item.type;
    this.value = item.value;
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
      error: (error) =>
        this.error.set(error.error?.message || 'Could not update the scholarship.'),
    });
  }

  reset() {
    this.editingId.set(null);
    this.name = '';
    this.type = 'percentage';
    this.value = null;
    this.isActive = true;
  }

  displayValue(item: Scholarship) {
    return item.type === 'percentage' ? `${item.value}%` : null;
  }
}
