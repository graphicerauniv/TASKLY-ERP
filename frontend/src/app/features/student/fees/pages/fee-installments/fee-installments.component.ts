import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LucideCalendarDays, LucideCircleAlert, LucideGraduationCap, LucideInfo, LucideList, LucideShieldCheck } from '@lucide/angular';
import { take } from 'rxjs';
import { StudentMobileBottomNavComponent } from '../../../dashboard/components/student-mobile-bottom-nav/student-mobile-bottom-nav.component';
import { StudentSessionService } from '../../../shared/services/student-session.service';
import { StudentFeesFacade } from '../../data-access/student-fees.facade';
import { FeeLedgerDetailViewModel, StudentFeeWorkspaceViewModel } from '../../models/student-fee-dashboard.models';

@Component({ selector: 'erp-fee-installments', imports: [RouterLink, StudentMobileBottomNavComponent, LucideCalendarDays, LucideCircleAlert, LucideGraduationCap, LucideInfo, LucideList, LucideShieldCheck], templateUrl: './fee-installments.component.html', styleUrl: '../../../styles/_student-fee-final-pages.scss', changeDetection: ChangeDetectionStrategy.OnPush })
export class FeeInstallmentsComponent {
  private readonly facade = inject(StudentFeesFacade); private readonly session = inject(StudentSessionService);
  readonly workspace = signal<StudentFeeWorkspaceViewModel>(this.facade.workspaceLoading(this.session.profile()));
  readonly kind = signal<'academic'|'hostel'>('academic'); readonly selectedId = signal<string|null>(null);
  readonly ledgers = computed(() => this.workspace().ledgers.filter((item) => item.kind === this.kind()));
  readonly selected = computed(() => this.workspace().ledgers.find((item) => item.id === this.selectedId()) ?? null);
  readonly activeCount = signal(0);
  constructor() { this.load(); }
  load(): void { const token = this.session.token(); if (!token) { this.workspace.set(this.facade.workspaceLoading(this.session.profile(), 'error', 'Please sign in again to access fees.')); return; } this.facade.loadWorkspace(token, this.session.profile()).pipe(take(1)).subscribe((value) => { this.workspace.set(value); const ledger = value.ledgers.find((x) => x.kind === 'academic') ?? value.ledgers[0]; this.kind.set(ledger?.kind ?? 'academic'); this.selectedId.set(ledger?.id ?? null); }); }
  selectKind(value: 'academic'|'hostel'): void { this.kind.set(value); this.selectedId.set(this.ledgers()[0]?.id ?? null); }
  selectId(event: Event): void { this.selectedId.set((event.target as HTMLSelectElement).value); }
  status(ledger: FeeLedgerDetailViewModel|null): string { return ledger ? 'Not assigned' : 'Unavailable'; }
}
