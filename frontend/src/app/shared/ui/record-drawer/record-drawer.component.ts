import { ChangeDetectionStrategy, Component, input, output } from '@angular/core';
import { AdminDrawerComponent } from '../admin-drawer/admin-drawer.component';
import { AdminIllustrationComponent } from '../admin-illustration/admin-illustration.component';
import { AdminIllustrationKind } from '../admin-illustration/admin-illustration.registry';

export interface RecordDetailField { label: string; value: string | number | null | undefined; }

@Component({
  selector: 'erp-record-drawer',
  imports: [AdminDrawerComponent, AdminIllustrationComponent],
  template: `
    <erp-admin-drawer [open]="open()" [title]="title()" [description]="description()" [busy]="busy()" (closed)="closed.emit()">
      <dl class="erp-crm-detail-list">
        @for (field of fields(); track field.label) {
          <div><dt>{{ field.label }}</dt><dd>{{ field.value ?? '—' }}</dd></div>
        }
      </dl>
      @if (guidance()) {
        <div class="erp-crm-guidance"><erp-admin-illustration [kind]="illustration()" size="compact" /><p>{{ guidance() }}</p></div>
      }
      <ng-content />
      <ng-container drawer-actions><ng-content select="[drawer-actions]" /></ng-container>
    </erp-admin-drawer>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RecordDrawerComponent {
  readonly open = input(false);
  readonly title = input.required<string>();
  readonly description = input('');
  readonly fields = input.required<readonly RecordDetailField[]>();
  readonly guidance = input('');
  readonly illustration = input<AdminIllustrationKind>('applicationForm');
  readonly busy = input(false);
  readonly closed = output<void>();
}
