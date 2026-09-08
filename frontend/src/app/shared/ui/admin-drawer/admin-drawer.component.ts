import { CdkTrapFocus } from '@angular/cdk/a11y';
import { Overlay } from '@angular/cdk/overlay';
import { ChangeDetectionStrategy, Component, effect, inject, input, output } from '@angular/core';
import { LucideX } from '@lucide/angular';
import { AdminIllustrationComponent } from '../admin-illustration/admin-illustration.component';
import { AdminIllustrationKind } from '../admin-illustration/admin-illustration.registry';

/** Shared record and editing surface, styled from the Academics workspace tokens. */
@Component({
  selector: 'erp-admin-drawer',
  imports: [CdkTrapFocus, LucideX, AdminIllustrationComponent],
  template: `
    @if (open()) {
      <div class="erp-drawer-layer">
        <button
          class="erp-drawer-backdrop"
          type="button"
          [attr.aria-label]="'Close ' + title()"
          [disabled]="busy()"
          (click)="close()"
        ></button>
        <aside
          class="erp-drawer erp-crm-drawer"
          role="dialog"
          aria-modal="true"
          [attr.aria-label]="title()"
          cdkTrapFocus
          [cdkTrapFocusAutoCapture]="true"
          (keydown.escape)="$event.stopPropagation(); close()"
        >
          <header class="erp-drawer__header">
            <div class="erp-crm-drawer__heading">
              <erp-admin-illustration [kind]="illustration()" size="compact" />
              <div>
                <small>{{ eyebrow() }}</small>
                <h2>{{ title() }}</h2>
                @if (description()) {
                  <p>{{ description() }}</p>
                }
              </div>
            </div>
            <button
              class="erp-icon-button"
              type="button"
              cdkFocusInitial
              [disabled]="busy()"
              aria-label="Close drawer"
              (click)="close()"
            >
              <svg lucideX size="20" aria-hidden="true"></svg>
            </button>
          </header>
          <div class="erp-drawer__body"><ng-content /></div>
          <footer class="erp-drawer__footer">
            <button
              class="erp-button erp-button--secondary"
              type="button"
              [disabled]="busy()"
              (click)="close()"
            >
              Close
            </button>
            <ng-content select="[drawer-actions]" />
          </footer>
        </aside>
      </div>
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AdminDrawerComponent {
  readonly open = input(false);
  readonly title = input.required<string>();
  readonly eyebrow = input('Record workspace');
  readonly description = input('');
  readonly illustration = input<AdminIllustrationKind>('applicationForm');
  readonly busy = input(false);
  readonly closed = output<void>();
  private readonly scroll = inject(Overlay).scrollStrategies.block();

  constructor() {
    effect((onCleanup) => {
      if (this.open()) this.scroll.enable();
      onCleanup(() => this.scroll.disable());
    });
  }

  close() {
    if (!this.busy()) this.closed.emit();
  }
}
