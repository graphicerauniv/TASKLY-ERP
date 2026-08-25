import { ChangeDetectionStrategy, Component, input } from '@angular/core';

type BuilderPageHeaderVariant = 'compact' | 'minimal';

@Component({
  selector: 'erp-builder-page-header',
  template: `
    <header
      class="builder-page-header"
      [class.builder-page-header--compact]="variant() === 'compact'"
      [class.builder-page-header--minimal]="variant() === 'minimal'"
    >
      <div class="builder-page-header__copy">
        @if (eyebrow() && variant() !== 'minimal') {
          <span class="builder-page-header__eyebrow">{{ eyebrow() }}</span>
        }
        <h1>{{ title() }}</h1>
        @if (description() && variant() !== 'minimal') {
          <p>{{ description() }}</p>
        }
      </div>
      <div class="builder-page-header__actions">
        <span class="builder-save-state" aria-live="polite">{{ saveState() }}</span>
        <ng-content />
      </div>
    </header>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BuilderPageHeaderComponent {
  readonly eyebrow = input('Admission');
  readonly title = input('Dynamic Form Builder');
  readonly description = input('Configure admission sections and fields.');
  readonly saveState = input('Saved just now');
  readonly variant = input<BuilderPageHeaderVariant>('minimal');
}
