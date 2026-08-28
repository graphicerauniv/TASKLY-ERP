import { DatePipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit, computed, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { take } from 'rxjs';
import { StudentMobileBottomNavComponent } from '../../../dashboard/components/student-mobile-bottom-nav/student-mobile-bottom-nav.component';
import { StudentSessionService } from '../../../shared/services/student-session.service';
import { StudentFeesFacade } from '../../data-access/student-fees.facade';
import { FeeLedgerDetailViewModel, StudentFeeWorkspaceViewModel } from '../../models/student-fee-dashboard.models';

@Component({
  selector: 'erp-fee-challan',
  standalone: true,
  imports: [DatePipe, RouterLink, StudentMobileBottomNavComponent],
  templateUrl: './fee-challan.component.html',
  styleUrl: '../../../styles/_student-fees.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FeeChallanComponent implements OnInit {
  private readonly fees = inject(StudentFeesFacade);
  private readonly session = inject(StudentSessionService);

  readonly workspace = signal<StudentFeeWorkspaceViewModel>(this.fees.workspaceLoading(this.session.profile()));
  readonly selectedKind = signal<'academic' | 'hostel'>('academic');
  readonly selectedLedgerId = signal('');
  readonly bankChallan = signal('HDFC Bank Challan');
  readonly reviewed = signal(false);
  readonly generated = signal(false);

  readonly ledgersForKind = computed(() => this.workspace().ledgers.filter((ledger) => ledger.kind === this.selectedKind()));
  readonly selectedLedger = computed(() => this.ledgersForKind().find((ledger) => ledger.id === this.selectedLedgerId()) ?? this.ledgersForKind()[0] ?? null);
  readonly canGenerate = computed(() => Boolean(this.selectedLedger() && this.reviewed()));

  ngOnInit(): void {
    this.load();
  }

  selectKind(kind: 'academic' | 'hostel'): void {
    this.selectedKind.set(kind);
    this.selectedLedgerId.set('');
    this.generated.set(false);
  }

  onLedger(event: Event): void {
    this.selectedLedgerId.set((event.target as HTMLSelectElement).value);
    this.generated.set(false);
  }

  onBank(event: Event): void {
    this.bankChallan.set((event.target as HTMLSelectElement).value);
  }

  onReviewed(event: Event): void {
    this.reviewed.set((event.target as HTMLInputElement).checked);
  }

  generateChallan(): void {
    if (this.canGenerate()) this.generated.set(true);
  }

  printChallan(): void {
    window.print();
  }

  private load(): void {
    const token = this.session.token();
    if (!token) {
      this.workspace.set(this.fees.workspaceLoading(this.session.profile(), 'error', 'Please sign in again to access fees.'));
      return;
    }
    this.workspace.set(this.fees.workspaceLoading(this.session.profile()));
    this.fees.loadWorkspace(token, this.session.profile()).pipe(take(1)).subscribe((workspace) => {
      this.workspace.set(workspace);
      const firstAcademic = workspace.ledgers.find((ledger) => ledger.kind === 'academic' && ledger.isPayable) ?? workspace.ledgers.find((ledger) => ledger.kind === 'academic');
      const firstLedger = firstAcademic ?? workspace.ledgers[0];
      if (firstLedger) {
        this.selectedKind.set(firstLedger.kind);
        this.selectedLedgerId.set(firstLedger.id);
      }
    });
  }
}
