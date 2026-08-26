import { CdkTrapFocus } from '@angular/cdk/a11y';
import { ChangeDetectionStrategy, Component, HostListener, input, output } from '@angular/core';

@Component({
  selector: 'erp-confirm-dialog',
  imports: [CdkTrapFocus],
  template: `
    @if (open()) {
      <div class="dialog-layer">
        <button
          class="dialog-backdrop"
          type="button"
          [attr.aria-label]="cancelLabel()"
          (click)="cancelled.emit()"
        ></button>
        <section
          class="dialog erp-confirm-dialog"
          role="alertdialog"
          aria-modal="true"
          aria-labelledby="erp-confirm-title"
          aria-describedby="erp-confirm-message"
          cdkTrapFocus
          [cdkTrapFocusAutoCapture]="true"
        >
          <header class="dialog__header">
            <div>
              <small>{{ eyebrow() }}</small>
              <h2 id="erp-confirm-title">{{ title() }}</h2>
            </div>
            <button type="button" [attr.aria-label]="cancelLabel()" (click)="cancelled.emit()">x</button>
          </header>
          <div class="dialog__body erp-confirm-dialog__body">
            <p id="erp-confirm-message">{{ message() }}</p>
          </div>
          <footer class="dialog__footer">
            <button class="erp-button erp-button--secondary" type="button" (click)="cancelled.emit()">
              {{ cancelLabel() }}
            </button>
            <button
              class="erp-button"
              [class.erp-button--danger]="destructive()"
              [class.erp-button--primary]="!destructive()"
              type="button"
              (click)="confirmed.emit()"
            >
              {{ confirmLabel() }}
            </button>
          </footer>
        </section>
      </div>
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ConfirmDialogComponent {
  readonly open = input(false);
  readonly eyebrow = input('Confirmation');
  readonly title = input('Are you sure?');
  readonly message = input('Please confirm this action.');
  readonly confirmLabel = input('Confirm');
  readonly cancelLabel = input('Cancel');
  readonly destructive = input(false);
  readonly confirmed = output<void>();
  readonly cancelled = output<void>();

  @HostListener('document:keydown.escape')
  closeOnEscape() {
    if (this.open()) this.cancelled.emit();
  }
}
