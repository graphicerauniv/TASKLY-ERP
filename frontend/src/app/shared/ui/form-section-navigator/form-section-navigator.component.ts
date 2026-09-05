import { ChangeDetectionStrategy, Component, computed, input, output, signal } from '@angular/core';
import { LucideChevronDown, LucideSearch } from '@lucide/angular';
import { FormSectionNavItemComponent } from '../form-section-nav-item/form-section-nav-item.component';
import { FormSectionNavigationItem } from '../form-workflow.models';

@Component({
  selector: 'erp-form-section-navigator',
  imports: [FormSectionNavItemComponent, LucideChevronDown, LucideSearch],
  templateUrl: './form-section-navigator.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'erp-section-navigator',
    '[class.erp-section-navigator--collapsed]': 'collapsed()',
    '[attr.id]': 'panelId()',
    tabindex: '-1',
  },
})
export class FormSectionNavigatorComponent {
  readonly items = input<readonly FormSectionNavigationItem[]>([]);
  readonly completedCount = input(0);
  readonly totalCount = input(0);
  readonly heading = input('Application sections');
  readonly panelId = input('application-sections');
  readonly sectionSelected = output<number>();
  readonly collapsed = signal(false);
  readonly query = signal('');

  readonly filteredItems = computed(() => {
    const query = this.query().trim().toLocaleLowerCase();
    if (!query) return this.items();
    return this.items().filter((item) =>
      `${item.index + 1} ${item.title} ${item.status} ${item.group || ''}`
        .toLocaleLowerCase()
        .includes(query),
    );
  });

  readonly groupedItems = computed(() => {
    const groups = new Map<string, FormSectionNavigationItem[]>();
    for (const item of this.filteredItems()) {
      const group = item.group?.trim() || '';
      groups.set(group, [...(groups.get(group) || []), item]);
    }
    return [...groups].map(([title, items]) => ({ title, items }));
  });

  setQuery(event: Event) {
    this.query.set((event.target as HTMLInputElement).value);
  }
}
