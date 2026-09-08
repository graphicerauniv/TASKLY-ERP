import { DatePipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, DestroyRef, computed, inject, signal } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { ActivatedRoute, RouterLink } from '@angular/router';
import {
  LucideAlertTriangle,
  LucideBell,
  LucideCalculator,
  LucideCheck,
  LucideChevronDown,
  LucideChevronLeft,
  LucideChevronRight,
  LucideClock3,
  LucideInfo,
  LucideListFilter,
  LucideRefreshCw,
  LucideSearch,
} from '@lucide/angular';
import { ApiService } from '../../../core/api.service';
import {
  StudentAttendanceDetail,
  StudentAttendanceRisk,
  StudentAttendanceRiskStatus,
  StudentAttendanceRiskSubject,
} from '../../../core/models';
import { StudentSubjectIconComponent } from '../shared/components/student-subject-icon/student-subject-icon.component';
import { StudentSessionService } from '../shared/services/student-session.service';

type RiskFilter = 'all' | StudentAttendanceRiskStatus;

@Component({
  selector: 'erp-student-attendance-shortage',
  imports: [
    DatePipe,
    RouterLink,
    LucideAlertTriangle,
    LucideBell,
    LucideCalculator,
    LucideCheck,
    LucideChevronDown,
    LucideChevronLeft,
    LucideChevronRight,
    LucideClock3,
    LucideInfo,
    LucideListFilter,
    LucideRefreshCw,
    LucideSearch,
    StudentSubjectIconComponent,
  ],
  templateUrl: './student-attendance-shortage.component.html',
  styleUrl: './student-attendance-shortage.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StudentAttendanceShortageComponent {
  private readonly api = inject(ApiService);
  private readonly session = inject(StudentSessionService);
  private readonly route = inject(ActivatedRoute);
  private readonly destroyRef = inject(DestroyRef);
  readonly risk = signal<StudentAttendanceRisk | null>(null);
  readonly detail = signal<StudentAttendanceDetail | null>(null);
  readonly loading = signal(true);
  readonly error = signal('');
  readonly search = signal('');
  readonly filter = signal<RiskFilter>('all');
  readonly visibleCount = signal(10);
  readonly subjectId = signal<string | null>(null);
  readonly selectedSubject = computed(() =>
    this.risk()?.subjects.find((subject) => subject.subjectId === this.subjectId()),
  );
  readonly filteredSubjects = computed(() => {
    const query = this.search().trim().toLowerCase();
    return (this.risk()?.subjects || []).filter((subject) => {
      const matchesQuery =
        !query || `${subject.subjectName} ${subject.subjectCode}`.toLowerCase().includes(query);
      const matchesFilter = this.filter() === 'all' || subject.status === this.filter();
      return matchesQuery && matchesFilter;
    });
  });
  readonly visibleSubjects = computed(() => this.filteredSubjects().slice(0, this.visibleCount()));

  constructor() {
    this.route.paramMap.pipe(takeUntilDestroyed(this.destroyRef)).subscribe((params) => {
      this.subjectId.set(params.get('subjectId'));
      this.detail.set(null);
      this.load();
    });
  }

  setSearch(value: string): void {
    this.search.set(value);
    this.visibleCount.set(10);
  }

  setFilter(value: string): void {
    this.filter.set(value as RiskFilter);
    this.visibleCount.set(10);
  }

  loadMore(): void {
    this.visibleCount.update((count) => count + 10);
  }

  refresh(): void {
    if (!this.loading()) this.load();
  }

  statusLabel(status: StudentAttendanceRiskStatus): string {
    return {
      critical: 'Critical',
      'at-risk': 'At risk',
      watch: 'Watch',
      pending: 'Pending',
      'on-track': 'On track',
    }[status];
  }

  formatPercent(value: number | null): string {
    if (value === null) return '—';
    return `${new Intl.NumberFormat('en-IN', { maximumFractionDigits: 1 }).format(value)}%`;
  }

  private load(): void {
    const token = this.session.token();
    if (!token) {
      this.error.set('Your student session is unavailable. Sign in again to continue.');
      this.loading.set(false);
      return;
    }
    this.loading.set(true);
    this.error.set('');
    this.api.studentAttendanceRisk(token).subscribe({
      next: (risk) => {
        this.risk.set(risk);
        const subjectId = this.subjectId();
        if (!subjectId) {
          this.loading.set(false);
          return;
        }
        this.api.studentSubjectAttendance(token, subjectId).subscribe({
          next: (detail) => {
            this.detail.set(detail);
            this.loading.set(false);
          },
          error: () => {
            this.error.set('This subject shortage detail is temporarily unavailable.');
            this.loading.set(false);
          },
        });
      },
      error: () => {
        this.error.set('Attendance shortage information is temporarily unavailable.');
        this.loading.set(false);
      },
    });
  }
}
