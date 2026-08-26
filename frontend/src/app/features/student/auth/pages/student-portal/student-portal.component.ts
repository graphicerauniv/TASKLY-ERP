import { CurrencyPipe, DatePipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { Router } from '@angular/router';
import { LucideUserRound } from '@lucide/angular';
import { ApiService } from '../../../../../core/api.service';
import { StudentFeeLedger, StudentSession } from '../../../../../core/models';

@Component({
  selector: 'erp-student-portal',
  imports: [CurrencyPipe, DatePipe, LucideUserRound],
  templateUrl: './student-portal.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StudentPortalComponent {
  private readonly api = inject(ApiService);
  private readonly router = inject(Router);
  readonly student = signal<StudentSession | null>(this.readStudent());
  readonly feeLedgers = signal<StudentFeeLedger[]>([]);
  readonly loadingFees = signal(false);
  readonly feeError = signal('');
  readonly activeKind = signal<'academic' | 'hostel'>('academic');

  constructor() {
    const token = localStorage.getItem('taskly_student_token');
    if (!token || !this.student()?.studentId) {
      void this.router.navigate(['/student/login']);
      return;
    }
    this.loadFees(token);
  }

  ledger(kind: 'academic' | 'hostel') {
    return this.feeLedgers().find((item) => item.kind === kind) || null;
  }

  entryAmount(entry: StudentFeeLedger['entries'][number]) {
    return entry.category === 'discount' ? -entry.amount : entry.amount;
  }

  private loadFees(token: string) {
    this.loadingFees.set(true);
    this.feeError.set('');
    this.api.studentFees(token).subscribe({
      next: ({ items }) => {
        this.feeLedgers.set(items);
        this.loadingFees.set(false);
      },
      error: (error) => {
        this.feeError.set(error.error?.message || 'Could not load your fees.');
        this.loadingFees.set(false);
      },
    });
  }

  private readStudent(): StudentSession | null {
    try {
      return JSON.parse(localStorage.getItem('taskly_student_profile') || 'null');
    } catch {
      return null;
    }
  }
}
