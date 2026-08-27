import { DatePipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { Router } from '@angular/router';
import { take } from 'rxjs';
import { StudentMobileBottomNavComponent } from '../../../dashboard/components/student-mobile-bottom-nav/student-mobile-bottom-nav.component';
import { StudentSessionService } from '../../../shared/services/student-session.service';
import { StudentFeesFacade } from '../../data-access/student-fees.facade';
import { FeeServiceCardViewModel, StudentFeeDashboardViewModel } from '../../models/student-fee-dashboard.models';

@Component({
  selector: 'erp-student-fee-dashboard',
  imports: [DatePipe, StudentMobileBottomNavComponent],
  templateUrl: './fee-dashboard.component.html',
  styleUrl: '../../../styles/_student-fees.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FeeDashboardComponent {
  private readonly facade = inject(StudentFeesFacade);
  private readonly session = inject(StudentSessionService);
  private readonly router = inject(Router);

  readonly viewModel = signal<StudentFeeDashboardViewModel>(this.facade.loading(this.session.profile()));

  constructor() {
    this.load();
  }

  retry(): void {
    this.load();
  }

  serviceLabel(card: FeeServiceCardViewModel): string {
    return card.route ? card.title : `${card.title} — coming soon`;
  }

  openService(card: FeeServiceCardViewModel): void {
    if (card.route) void this.router.navigateByUrl(card.route);
  }

  private load(): void {
    const token = this.session.token();
    if (!token) {
      this.viewModel.update((value) => ({ ...value, feeState: 'error', activityState: 'error' }));
      return;
    }
    this.viewModel.set(this.facade.loading(this.session.profile()));
    this.facade.load(token, this.session.profile()).pipe(take(1)).subscribe((value) => this.viewModel.set(value));
  }
}
