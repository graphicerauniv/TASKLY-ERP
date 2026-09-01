import { CurrencyPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import {
  LucideGraduationCap,
  LucideHeadset,
  LucideInfo,
  LucideShieldCheck,
  LucideWalletCards,
} from '@lucide/angular';
import { take } from 'rxjs';
import { StudentMobileBottomNavComponent } from '../../../dashboard/components/student-mobile-bottom-nav/student-mobile-bottom-nav.component';
import { StudentSessionService } from '../../../shared/services/student-session.service';
import { StudentFeesFacade } from '../../data-access/student-fees.facade';
import {
  FeeHeadDetailViewModel,
  StudentFeeWorkspaceViewModel,
} from '../../models/student-fee-dashboard.models';

interface ScholarshipLedgerRow {
  row: FeeHeadDetailViewModel;
  ledgerId: string;
  periodLabel: string;
  academicSession: string | null;
}

@Component({
  selector: 'erp-scholarship-details',
  imports: [
    CurrencyPipe,
    RouterLink,
    StudentMobileBottomNavComponent,
    LucideGraduationCap,
    LucideHeadset,
    LucideInfo,
    LucideShieldCheck,
    LucideWalletCards,
  ],
  templateUrl: './scholarship-details.component.html',
  styleUrl: '../../../styles/_student-fee-final-pages.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScholarshipDetailsComponent {
  private readonly facade = inject(StudentFeesFacade);
  private readonly session = inject(StudentSessionService);

  readonly workspace = signal<StudentFeeWorkspaceViewModel>(
    this.facade.workspaceLoading(this.session.profile()),
  );
  readonly scholarships = computed<ScholarshipLedgerRow[]>(() =>
    this.workspace()
      .ledgers.filter((ledger) => ledger.kind === 'academic')
      .flatMap((ledger) =>
        ledger.rows
          .filter((row) => row.isScholarship)
          .map((row) => ({
            row,
            ledgerId: ledger.id,
            periodLabel: ledger.periodLabel,
            academicSession: ledger.academicSession,
          })),
      ),
  );
  readonly totalBenefit = computed(() =>
    this.scholarships().reduce((sum, item) => sum + Number(item.row.discount?.amount || 0), 0),
  );
  readonly schemeCount = computed(
    () => new Set(this.scholarships().map((item) => `${item.row.id}:${item.row.name}`)).size,
  );
  readonly periodCount = computed(
    () => new Set(this.scholarships().map((item) => item.ledgerId)).size,
  );

  constructor() {
    this.load();
  }

  load() {
    const token = this.session.token();
    if (!token) {
      this.workspace.set(
        this.facade.workspaceLoading(
          this.session.profile(),
          'error',
          'Please sign in again to access scholarships.',
        ),
      );
      return;
    }
    this.facade
      .loadWorkspace(token, this.session.profile())
      .pipe(take(1))
      .subscribe((workspace) => this.workspace.set(workspace));
  }

  configuredValue(row: FeeHeadDetailViewModel) {
    if (row.scholarshipType === 'percentage') return `${row.scholarshipValue ?? 0}%`;
    return row.scholarshipValue === null
      ? 'Configured by Accounts'
      : new Intl.NumberFormat('en-IN', {
          style: 'currency',
          currency: 'INR',
          maximumFractionDigits: 2,
        }).format(row.scholarshipValue);
  }
}
