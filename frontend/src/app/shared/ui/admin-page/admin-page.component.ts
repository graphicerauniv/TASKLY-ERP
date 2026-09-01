import { ChangeDetectionStrategy, Component, input } from '@angular/core';

export type AdminPageHeaderVariant = 'module' | 'compact' | 'minimal';
export type AdminPageLayout = 'default' | 'collection';

/**
 * Global route-page frame for the admin application.
 * Feature pages provide only their unique content and optional `[page-actions]` controls.
 */
@Component({
  selector: 'erp-admin-page',
  template: `
    <section
      class="erp-page"
      [class.erp-page--module]="variant() === 'module'"
      [class.erp-page--compact]="variant() === 'compact'"
      [class.erp-page--minimal]="variant() === 'minimal'"
      [class.erp-page--collection]="layout() === 'collection'"
    >
      <header
        class="erp-page-header"
        [class.erp-page-header--module]="variant() === 'module'"
        [class.erp-page-header--compact]="variant() === 'compact'"
        [class.erp-page-header--minimal]="variant() === 'minimal'"
      >
        <div>
          @if (eyebrow() && variant() !== 'minimal') {
            <span class="erp-page-header__eyebrow">{{ eyebrow() }}</span>
          }
          <h1>{{ title() }}</h1>
          @if (description() && variant() !== 'minimal') {
            <p>{{ description() }}</p>
          }
        </div>
        <ng-content select="[page-actions]" />
      </header>
      <ng-content />
    </section>
  `,
  styles: `
    :host {
      display: block;
      min-width: 0;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AdminPageComponent {
  readonly eyebrow = input('');
  readonly title = input.required<string>();
  readonly description = input('');
  readonly variant = input<AdminPageHeaderVariant>('minimal');
  readonly layout = input<AdminPageLayout>('default');
}
