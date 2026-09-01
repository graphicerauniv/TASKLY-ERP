import { CurrencyPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LucideInfo, LucideScale, LucideShieldCheck } from '@lucide/angular';
import { take } from 'rxjs';
import { StudentMobileBottomNavComponent } from '../../../dashboard/components/student-mobile-bottom-nav/student-mobile-bottom-nav.component';
import { StudentSessionService } from '../../../shared/services/student-session.service';
import { StudentFeesFacade } from '../../data-access/student-fees.facade';
import { StudentFeeWorkspaceViewModel } from '../../models/student-fee-dashboard.models';

@Component({
  selector: 'erp-fee-mode-comparison',
  imports: [
    CurrencyPipe,
    RouterLink,
    StudentMobileBottomNavComponent,
    LucideInfo,
    LucideScale,
    LucideShieldCheck,
  ],
  templateUrl: './fee-mode-comparison.component.html',
  styleUrl: '../../../styles/_student-fee-final-pages.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FeeModeComparisonComponent {
  private readonly facade = inject(StudentFeesFacade);
  private readonly session = inject(StudentSessionService);
  readonly workspace = signal<StudentFeeWorkspaceViewModel>(
    this.facade.workspaceLoading(this.session.profile()),
  );

  constructor() {
    this.load();
  }

  load() {
    const token = this.session.token();
    if (!token) {
      this.workspace.set(
        this.facade.workspaceLoading(this.session.profile(), 'error', 'Please sign in again.'),
      );
      return;
    }
    this.facade
      .loadWorkspace(token, this.session.profile())
      .pipe(take(1))
      .subscribe((workspace) => this.workspace.set(workspace));
  }
}
