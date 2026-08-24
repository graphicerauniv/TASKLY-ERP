import { ChangeDetectionStrategy, Component, HostListener, input, output } from '@angular/core';
import { CdkTrapFocus } from '@angular/cdk/a11y';
import { LucideSlidersHorizontal, LucideX } from '@lucide/angular';

@Component({
  selector: 'erp-settings-modal',
  imports: [CdkTrapFocus, LucideSlidersHorizontal, LucideX],
  template: `
    @if (open()) {
      <div class="settings-layer">
        <button
          class="settings-backdrop"
          type="button"
          aria-label="Close settings"
          (click)="closed.emit()"
        ></button>
        <section
          class="settings-modal"
          role="dialog"
          aria-modal="true"
          aria-labelledby="settings-modal-title"
          cdkTrapFocus
          [cdkTrapFocusAutoCapture]="true"
        >
          <header class="settings-modal__header">
            <span class="settings-modal__icon">
              <svg lucideSlidersHorizontal size="20" aria-hidden="true"></svg>
            </span>
            <div>
              <small>{{ eyebrow() }}</small>
              <h2 id="settings-modal-title">{{ title() }}</h2>
            </div>
            <button type="button" aria-label="Close settings" (click)="closed.emit()">
              <svg lucideX size="19" aria-hidden="true"></svg>
            </button>
          </header>
          <div class="settings-modal__body"><ng-content /></div>
        </section>
      </div>
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SettingsModalComponent {
  readonly title = input('Settings');
  readonly eyebrow = input('Configuration');
  readonly open = input(true);
  readonly closed = output<void>();

  @HostListener('document:keydown.escape')
  closeOnEscape() {
    if (this.open()) this.closed.emit();
  }
}
