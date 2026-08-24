import {
  ChangeDetectionStrategy,
  Component,
  computed,
  effect,
  inject,
  signal,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { map } from 'rxjs';
import { ApiService } from '../../../core/api.service';
import { MasterDataStore } from '../../../core/master-data.store';
import { MasterValue } from '../../../core/models';
import { AdminPageComponent } from '../../../shared/ui/admin-page/admin-page.component';
import {
  CompactActionItem,
  CompactActionMenuComponent,
} from '../../../shared/ui/compact-action-menu/compact-action-menu.component';

const DEPENDENCY_CHAINS: Record<string, string[]> = {
  level: ['college', 'department'],
  course: ['college', 'department', 'level'],
  'course-specialization': ['college', 'department', 'level', 'course'],
  state: ['country'],
  district: ['country', 'state'],
  city: ['country', 'state', 'district'],
};

@Component({
  selector: 'erp-master-data',
  imports: [AdminPageComponent, CompactActionMenuComponent, FormsModule],
  templateUrl: './master-data.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MasterDataComponent {
  private readonly api = inject(ApiService);
  private readonly masterDataStore = inject(MasterDataStore);
  readonly slug = toSignal(
    inject(ActivatedRoute).paramMap.pipe(map((params) => params.get('typeSlug') || '')),
    { initialValue: '' },
  );
  readonly types = this.masterDataStore.types;
  readonly customTypeCount = computed(() => this.types().filter((type) => type.isCustom).length);
  readonly values = signal<MasterValue[]>([]);
  readonly dependencyValues = signal<Record<string, MasterValue[]>>({});
  readonly loading = signal(false);
  readonly message = signal('');
  readonly error = signal('');
  readonly editingId = signal<string | null>(null);
  readonly rowActions: CompactActionItem[] = [
    { id: 'edit', label: 'Edit', icon: 'edit' },
    { id: 'delete', label: 'Delete', icon: 'delete', destructive: true, separator: true },
  ];
  name = '';
  selectedDependencies: Record<string, string> = {};
  search = '';
  customName = '';
  customParent = '';
  private editingValue: MasterValue | null = null;
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
    this.masterDataStore.load().subscribe(() => {
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
    this.selectedDependencies = {};
    this.dependencyValues.set({});
    for (const dependencySlug of this.dependencySlugs()) {
      this.api.masterValues(dependencySlug, { active: true }).subscribe(({ items }) => {
        this.dependencyValues.update((values) => ({ ...values, [dependencySlug]: items }));
        this.resolveEditingDependencies();
      });
    }
  }
  save() {
    if (!this.name.trim()) return;
    const dependencies = this.dependencySlugs();
    if (dependencies.some((slug) => !this.selectedDependencies[slug])) {
      this.error.set('Select every required dependency before saving.');
      return;
    }
    const parentId = dependencies.length ? this.selectedDependencies[dependencies.at(-1)!] : null;
    const body = { name: this.name, parentId };
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
    this.editingValue = item;
    this.resolveEditingDependencies();
  }
  reset() {
    this.editingId.set(null);
    this.editingValue = null;
    this.name = '';
    this.selectedDependencies = {};
  }
  dependencySlugs(): string[] {
    const type = this.currentType();
    if (!type) return [];
    return DEPENDENCY_CHAINS[type.slug] || (type.parentTypeSlug ? [type.parentTypeSlug] : []);
  }
  dependencyLabel(slug: string): string {
    return this.types().find((type) => type.slug === slug)?.name || slug;
  }
  dependencyOptions(index: number): MasterValue[] {
    const chain = this.dependencySlugs();
    const slug = chain[index];
    const values = this.dependencyValues()[slug] || [];
    if (index === 0) return values;
    const parentId = this.selectedDependencies[chain[index - 1]];
    return parentId ? values.filter((value) => value.parentId === parentId) : [];
  }
  dependencyChanged(index: number) {
    const chain = this.dependencySlugs();
    for (let next = index + 1; next < chain.length; next += 1)
      this.selectedDependencies[chain[next]] = '';
  }
  parentPath(item: MasterValue): string {
    const chain = this.dependencySlugs();
    const names: string[] = [];
    let parentId = item.parentId;
    for (let index = chain.length - 1; index >= 0 && parentId; index -= 1) {
      const value = this.dependencyValues()[chain[index]]?.find(
        (candidate) => candidate._id === parentId,
      );
      if (!value) break;
      names.unshift(value.name);
      parentId = value.parentId;
    }
    return names.join(' → ') || '—';
  }
  toggle(item: MasterValue) {
    this.api
      .updateMasterValue(this.slug(), item._id, { isActive: !item.isActive })
      .subscribe(() => this.loadValues());
  }
  handleRowAction(action: string, item: MasterValue) {
    if (action === 'edit') this.edit(item);
    if (action === 'delete') this.remove(item);
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
  private resolveEditingDependencies() {
    if (!this.editingValue) return;
    const chain = this.dependencySlugs();
    let parentId = this.editingValue.parentId;
    const selected: Record<string, string> = {};
    for (let index = chain.length - 1; index >= 0 && parentId; index -= 1) {
      selected[chain[index]] = parentId;
      parentId =
        this.dependencyValues()[chain[index]]?.find((value) => value._id === parentId)?.parentId ||
        null;
    }
    this.selectedDependencies = selected;
  }
}
