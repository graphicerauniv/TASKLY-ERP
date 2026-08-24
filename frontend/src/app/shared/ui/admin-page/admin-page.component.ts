import { ChangeDetectionStrategy, Component, input } from '@angular/core';

/**
 * Global route-page frame for the admin application.
 * Feature pages provide only their unique content and optional `[page-actions]` controls.
 */
@Component({
  selector: 'erp-admin-page',
  template: `
    <section class="erp-page">
      <header class="erp-page-header">
        <div>
          @if (eyebrow()) {
            <span class="erp-page-header__eyebrow">{{ eyebrow() }}</span>
          }
          <h1>{{ title() }}</h1>
          @if (description()) {
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
}
