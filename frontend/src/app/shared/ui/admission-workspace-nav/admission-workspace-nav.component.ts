import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'erp-admission-workspace-nav',
  imports: [RouterLink, RouterLinkActive],
  template: `
    <nav class="admission-workspace-nav" aria-label="Admission workspace">
      <a routerLink="/admin/admissions/approved" routerLinkActive="is-active"
        ><span>Students</span><small>Approved directory</small></a
      >
      <a routerLink="/admin/admissions/not-approved" routerLinkActive="is-active"
        ><span>Approval queue</span><small>Submitted records</small></a
      >
      <a routerLink="/admin/admissions/unfilled" routerLinkActive="is-active"
        ><span>Unfilled</span><small>Incomplete forms</small></a
      >
      <a routerLink="/admin/admissions/promotions" routerLinkActive="is-active"
        ><span>Promotions</span><small>Academic progression</small></a
      >
      <a routerLink="/admin/admission/student" routerLinkActive="is-active"
        ><span>New admission</span><small>Create student record</small></a
      >
    </nav>
  `,
  styles: `
    :host {
      display: block;
    }
    .admission-workspace-nav {
      display: flex;
      gap: var(--erp-space-2);
      margin-bottom: var(--erp-space-4);
      padding: var(--erp-space-1);
      overflow-x: auto;
      background: var(--erp-surface-page-panel);
      border: 1px solid var(--erp-border-subtle);
      border-radius: var(--erp-radius-compact);
    }
    .admission-workspace-nav a {
      display: grid;
      min-width: 9.5rem;
      gap: 2px;
      padding: var(--erp-space-2) var(--erp-space-3);
      color: var(--erp-text-muted);
      text-decoration: none;
      border-radius: var(--erp-radius-control);
    }
    .admission-workspace-nav a:hover,
    .admission-workspace-nav a.is-active {
      color: var(--erp-blue-700);
      background: var(--erp-blue-50);
    }
    .admission-workspace-nav span {
      font-size: var(--erp-font-size-xs);
      font-weight: var(--erp-weight-bold);
    }
    .admission-workspace-nav small {
      font-size: var(--erp-font-size-2xs);
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AdmissionWorkspaceNavComponent {}
