import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';
import { ADMIN_ILLUSTRATIONS, AdminIllustrationKind } from './admin-illustration.registry';

export type AdminIllustrationSize = 'compact' | 'default' | 'hero';

/** Reusable, accessible renderer for the global admin illustration library. */
@Component({
  selector: 'erp-admin-illustration',
  template: `
    <img
      [src]="source()"
      [alt]="alt()"
      [attr.aria-hidden]="alt() ? null : 'true'"
      [attr.fetchpriority]="priority() ? 'high' : null"
      [loading]="priority() ? 'eager' : 'lazy'"
      decoding="async"
      width="768"
      height="768"
    />
  `,
  styles: `
    :host {
      display: inline-grid;
      width: var(--admin-illustration-size, 9rem);
      max-width: 100%;
      aspect-ratio: 1;
      place-items: center;
      line-height: 0;
    }

    :host([size='compact']) {
      --admin-illustration-size: 5rem;
    }

    :host([size='hero']) {
      --admin-illustration-size: 15rem;
    }

    img {
      display: block;
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AdminIllustrationComponent {
  readonly kind = input.required<AdminIllustrationKind>();
  readonly alt = input('');
  readonly size = input<AdminIllustrationSize>('default');
  readonly priority = input(false);
  readonly source = computed(() => ADMIN_ILLUSTRATIONS[this.kind()]);
}
