import { DatePipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { take } from 'rxjs';
import { StudentMobileBottomNavComponent } from '../../../dashboard/components/student-mobile-bottom-nav/student-mobile-bottom-nav.component';
import { StudentSessionService } from '../../../shared/services/student-session.service';
import { StudentFeesFacade } from '../../data-access/student-fees.facade';
import { FeeLedgerDetailViewModel, StudentFeeWorkspaceViewModel } from '../../models/student-fee-dashboard.models';

@Component({
  selector: 'erp-fee-details',
  imports: [DatePipe, RouterLink, StudentMobileBottomNavComponent],
  templateUrl: './fee-details.component.html',
  styleUrl: '../../../styles/_student-fees.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FeeDetailsComponent {
  private readonly fees = inject(StudentFeesFacade);
  private readonly session = inject(StudentSessionService);
  private readonly router = inject(Router);

  readonly workspace = signal<StudentFeeWorkspaceViewModel>(this.fees.workspaceLoading(this.session.profile()));
  readonly selectedKind = signal<'academic' | 'hostel'>('academic');
  readonly selectedLedgerId = signal<string | null>(null);
  readonly selectedLedger = computed(() => this.workspace().ledgers.find((ledger) => ledger.id === this.selectedLedgerId()) ?? null);
  readonly ledgersForKind = computed(() => this.workspace().ledgers.filter((ledger) => ledger.kind === this.selectedKind()));

  constructor() { this.load(); }

  selectKind(kind: 'academic' | 'hostel'): void {
    this.selectedKind.set(kind);
    this.selectedLedgerId.set(this.workspace().ledgers.find((ledger) => ledger.kind === kind)?.id ?? null);
  }

  selectLedger(id: string): void { this.selectedLedgerId.set(id); }

  onLedgerChange(event: Event): void {
    this.selectLedger((event.target as HTMLSelectElement).value);
  }

  paySelected(): void {
    const id = this.selectedLedger()?.id;
    if (id) void this.router.navigate(['/student/fees/pay'], { queryParams: { ledger: id } });
  }

  load(): void {
    const token = this.session.token();
    if (!token) { this.workspace.set(this.fees.workspaceLoading(this.session.profile(), 'error', 'Please sign in again to access fees.')); return; }
    this.workspace.set(this.fees.workspaceLoading(this.session.profile()));
    this.fees.loadWorkspace(token, this.session.profile()).pipe(take(1)).subscribe((workspace) => {
      this.workspace.set(workspace);
      const ledger = workspace.ledgers.find((item) => item.kind === 'academic') ?? workspace.ledgers[0] ?? null;
      if (ledger) { this.selectedKind.set(ledger.kind); this.selectedLedgerId.set(ledger.id); }
    });
  }

  trackLedger(_: number, ledger: FeeLedgerDetailViewModel): string { return ledger.id; }
}
