import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AdminIllustrationComponent } from '../admin-illustration/admin-illustration.component';
import { resolveAdminWorkspace } from './admin-workspace.registry';

@Component({
  selector: 'erp-admin-workspace-navigation',
  imports: [RouterLink, AdminIllustrationComponent],
  template: `
    @if (workspace(); as context) {
      <section class="erp-workspace-bar" aria-label="Workspace navigation">
        <div class="erp-workspace-bar__identity">
          <erp-admin-illustration [kind]="context.illustration" size="compact" />
          <div>
            <small>{{ context.module }}</small
            ><strong>{{ context.title }}</strong>
          </div>
        </div>
        <nav class="erp-workspace-tabs" [attr.aria-label]="context.title + ' pages'">
          @for (link of context.links; track link.route) {
            <a
              [routerLink]="link.route"
              [class.is-active]="link.active"
              [attr.aria-current]="link.active ? 'page' : null"
              >{{ link.label }}</a
            >
          }
        </nav>
      </section>
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AdminWorkspaceNavigationComponent {
  readonly url = input.required<string>();
  readonly workspace = computed(() => resolveAdminWorkspace(this.url()));
}
