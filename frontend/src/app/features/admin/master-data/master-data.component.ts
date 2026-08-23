import { ChangeDetectionStrategy, Component, effect, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { map } from 'rxjs';
import { ApiService } from '../../../core/api.service';
import { MasterType, MasterValue } from '../../../core/models';

@Component({
  selector: 'erp-master-data',
  imports: [FormsModule],
  templateUrl: './master-data.component.html',
  styleUrl: './master-data.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MasterDataComponent {
  private readonly api = inject(ApiService);
  readonly slug = toSignal(
    inject(ActivatedRoute).paramMap.pipe(map((params) => params.get('typeSlug') || '')),
    { initialValue: '' },
  );
  readonly types = signal<MasterType[]>([]);
  readonly values = signal<MasterValue[]>([]);
  readonly parents = signal<MasterValue[]>([]);
  readonly loading = signal(false);
  readonly message = signal('');
  readonly error = signal('');
  readonly editingId = signal<string | null>(null);
  name = '';
  code = '';
  parentId = '';
  search = '';
  customName = '';
  customParent = '';
  readonly currentType = () => this.types().find((type) => type.slug === this.slug());
  constructor() {
    effect(() => {
      const slug = this.slug();
      this.loadTypes(() => {
        if (slug !== 'custom') this.loadValues();
      });
    });
  }
  loadTypes(done?: () => void) {
    this.api.masterTypes().subscribe(({ items }) => {
      this.types.set(items);
      done?.();
    });
  }
  loadValues() {
    const type = this.currentType();
    if (!type) return;
    this.loading.set(true);
    this.api.masterValues(type.slug, { search: this.search }).subscribe({
      next: ({ items }) => {
        this.values.set(items);
        this.loading.set(false);
      },
      error: (e) => this.fail(e),
    });
    if (type.parentTypeSlug)
      this.api
        .masterValues(type.parentTypeSlug, { active: true })
        .subscribe(({ items }) => this.parents.set(items));
    else this.parents.set([]);
  }
  save() {
    if (!this.name.trim()) return;
    const body = { name: this.name, code: this.code, parentId: this.parentId || null };
    const request = this.editingId()
      ? this.api.updateMasterValue(this.slug(), this.editingId()!, body)
      : this.api.createMasterValue(this.slug(), body);
    request.subscribe({
      next: () => {
        this.reset();
        this.message.set('Value saved successfully.');
        this.loadValues();
      },
      error: (e) => this.fail(e),
    });
  }
  edit(item: MasterValue) {
    this.editingId.set(item._id);
    this.name = item.name;
    this.code = item.code || '';
    this.parentId = item.parentId || '';
  }
  reset() {
    this.editingId.set(null);
    this.name = '';
    this.code = '';
    this.parentId = '';
  }
  toggle(item: MasterValue) {
    this.api
      .updateMasterValue(this.slug(), item._id, { isActive: !item.isActive })
      .subscribe(() => this.loadValues());
  }
  remove(item: MasterValue) {
    if (!confirm(`Delete ${item.name}?`)) return;
    this.api
      .deleteMasterValue(this.slug(), item._id)
      .subscribe({ next: () => this.loadValues(), error: (e) => this.fail(e) });
  }
  importFile(event: Event) {
    const file = (event.target as HTMLInputElement).files?.[0];
    if (!file) return;
    this.api.importMasterValues(this.slug(), file).subscribe({
      next: ({ imported }) => {
        this.message.set(`${imported} row(s) imported.`);
        this.loadValues();
      },
      error: (e) => this.fail(e),
    });
  }
  createCustom() {
    if (!this.customName.trim()) return;
    this.api
      .createMasterType({ name: this.customName, parentTypeSlug: this.customParent || null })
      .subscribe({
        next: () => {
          this.customName = '';
          this.customParent = '';
          this.message.set('Custom master created.');
          this.loadTypes();
        },
        error: (e) => this.fail(e),
      });
  }
  private fail(error: { error?: { message?: string } }) {
    this.error.set(error.error?.message || 'The operation failed.');
    this.loading.set(false);
  }
}
