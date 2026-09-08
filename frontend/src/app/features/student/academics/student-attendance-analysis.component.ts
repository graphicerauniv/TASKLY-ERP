import { DatePipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import {
  LucideAlertTriangle,
  LucideBookOpen,
  LucideCheck,
  LucideChevronDown,
  LucideChevronRight,
  LucideGraduationCap,
  LucideInfo,
  LucideMinus,
  LucidePlus,
  LucideRefreshCw,
  LucideSearch,
  LucideTarget,
  LucideUserRound,
  LucideUsersRound,
  LucideX,
} from '@lucide/angular';
import { ApiService } from '../../../core/api.service';
import {
  StudentAttendanceAnalytics,
  StudentAttendanceAnalyticsSubject,
} from '../../../core/models';
import { StudentSessionService } from '../shared/services/student-session.service';

type AnalysisFilter = 'all' | 'on-track' | 'attention';
type AnalysisSort = 'lowest' | 'highest' | 'subject';

interface SubjectProjection {
  readonly futureTotal: number;
  readonly alreadyReached: boolean;
  readonly classesRequired: number | null;
  readonly reachable: boolean;
  readonly projectedPercentage: number;
  readonly bestPossiblePercentage: number;
  readonly classesBeyondSchedule: number | null;
}

@Component({
  selector: 'erp-student-attendance-analysis',
  imports: [
    DatePipe,
    FormsModule,
    RouterLink,
    LucideAlertTriangle,
    LucideBookOpen,
    LucideCheck,
    LucideChevronDown,
    LucideChevronRight,
    LucideGraduationCap,
    LucideInfo,
    LucideMinus,
    LucidePlus,
    LucideRefreshCw,
    LucideSearch,
    LucideTarget,
    LucideUserRound,
    LucideUsersRound,
    LucideX,
  ],
  templateUrl: './student-attendance-analysis.component.html',
  styleUrl: './student-attendance-analysis.component-local.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StudentAttendanceAnalysisComponent {
  private readonly api = inject(ApiService);
  private readonly router = inject(Router);
  private readonly session = inject(StudentSessionService);

  readonly requiredAttendance = 75;
  readonly data = signal<StudentAttendanceAnalytics | null>(null);
  readonly loading = signal(true);
  readonly refreshing = signal(false);
  readonly error = signal('');
  readonly search = signal('');
  readonly filter = signal<AnalysisFilter>('all');
  readonly sort = signal<AnalysisSort>('lowest');
  readonly selectedSubjectIds = signal<readonly string[]>([]);
  readonly plannerSubject = signal<StudentAttendanceAnalyticsSubject | null>(null);
  readonly compareOpen = signal(false);
  readonly target = signal(80);

  readonly subjects = computed(() => this.data()?.subjects ?? []);
  readonly overall = computed(
    () =>
      this.data()?.overall ?? {
        totalLectures: 0,
        presentLectures: 0,
        absentLectures: 0,
        attendancePercentage: 0,
      },
  );
  readonly filteredSubjects = computed(() => {
    const query = this.search().trim().toLocaleLowerCase();
    const status = this.filter();
    const items = this.subjects().filter((subject) => {
      const matchesSearch =
        !query ||
        `${subject.subjectName} ${subject.subjectCode} ${subject.facultyNames.join(' ')}`
          .toLocaleLowerCase()
          .includes(query);
      const matchesStatus =
        status === 'all' ||
        (status === 'on-track' && subject.attendancePercentage >= this.requiredAttendance) ||
        (status === 'attention' && subject.attendancePercentage < this.requiredAttendance);
      return matchesSearch && matchesStatus;
    });
    return [...items].sort((left, right) => {
      if (this.sort() === 'highest') return right.attendancePercentage - left.attendancePercentage;
      if (this.sort() === 'subject') return left.subjectName.localeCompare(right.subjectName);
      return left.attendancePercentage - right.attendancePercentage;
    });
  });
  readonly selectedSubjects = computed(() => {
    const ids = new Set(this.selectedSubjectIds());
    return this.subjects().filter((subject) => ids.has(subject.subjectId));
  });
  readonly plannerProjection = computed<SubjectProjection | null>(() => {
    const subject = this.plannerSubject();
    return subject ? this.projectionFor(subject) : null;
  });

  constructor() {
    this.load();
  }

  refresh(): void {
    if (this.loading() || this.refreshing()) return;
    this.refreshing.set(true);
    this.load(true);
  }

  updateSearch(value: string): void {
    this.search.set(value);
  }

  updateFilter(value: string): void {
    this.filter.set(value as AnalysisFilter);
  }

  updateSort(value: string): void {
    this.sort.set(value as AnalysisSort);
  }

  toggleSubject(subjectId: string): void {
    const current = this.selectedSubjectIds();
    this.selectedSubjectIds.set(
      current.includes(subjectId)
        ? current.filter((id) => id !== subjectId)
        : current.length < 4
          ? [...current, subjectId]
          : current,
    );
  }

  isSelected(subjectId: string): boolean {
    return this.selectedSubjectIds().includes(subjectId);
  }

  openPlanner(subject: StudentAttendanceAnalyticsSubject): void {
    this.compareOpen.set(false);
    this.target.set(80);
    this.plannerSubject.set(subject);
  }

  closePlanner(): void {
    this.plannerSubject.set(null);
  }

  openComparison(): void {
    if (this.selectedSubjects().length < 2) return;
    this.target.set(80);
    this.compareOpen.set(true);
  }

  closeComparison(): void {
    this.compareOpen.set(false);
  }

  adjustTarget(delta: number): void {
    this.setTarget(this.target() + delta);
  }

  setTarget(value: number | string): void {
    const parsed = Number(value);
    this.target.set(Math.min(100, Math.max(50, Number.isFinite(parsed) ? parsed : 80)));
  }

  resetPlanner(): void {
    this.target.set(80);
  }

  projectionFor(subject: StudentAttendanceAnalyticsSubject): SubjectProjection {
    const upcoming = Math.max(0, subject.upcomingLectures);
    const futureTotal = subject.totalLectures + upcoming;
    const alreadyReached =
      subject.totalLectures > 0 && subject.attendancePercentage >= this.target();
    let classesRequired: number | null;
    if (alreadyReached) classesRequired = 0;
    else if (!subject.totalLectures) classesRequired = 1;
    else if (this.target() >= 100) classesRequired = null;
    else {
      classesRequired = Math.max(
        1,
        Math.ceil(
          (this.target() * subject.totalLectures - 100 * subject.presentLectures) /
            (100 - this.target()),
        ),
      );
    }
    const reachable =
      alreadyReached || (classesRequired !== null && classesRequired <= upcoming);
    const projectedTotal = subject.totalLectures + (classesRequired || 0);
    const projectedPresent = subject.presentLectures + (classesRequired || 0);
    return {
      futureTotal,
      alreadyReached,
      classesRequired,
      reachable,
      projectedPercentage: alreadyReached
        ? subject.attendancePercentage
        : projectedTotal
          ? Number(((projectedPresent / projectedTotal) * 100).toFixed(1))
          : 0,
      bestPossiblePercentage: futureTotal
        ? Number((((subject.presentLectures + upcoming) / futureTotal) * 100).toFixed(1))
        : 0,
      classesBeyondSchedule:
        classesRequired === null ? null : Math.max(0, classesRequired - upcoming),
    };
  }

  openSubject(subject: StudentAttendanceAnalyticsSubject): void {
    this.closePlanner();
    this.closeComparison();
    void this.router.navigate(['/student/attendance/subjects', subject.subjectId]);
  }

  formatPercentage(value: number): string {
    return new Intl.NumberFormat('en-IN', { maximumFractionDigits: 1 }).format(value);
  }

  statusLabel(
    subject: StudentAttendanceAnalyticsSubject,
    threshold = this.requiredAttendance,
  ): string {
    return subject.attendancePercentage >= threshold
      ? threshold === this.requiredAttendance
        ? 'On track'
        : 'On target'
      : 'Below target';
  }

  private load(isRefresh = false): void {
    const token = this.session.token();
    if (!token) {
      this.error.set('Your student session is unavailable. Sign in again to continue.');
      this.loading.set(false);
      this.refreshing.set(false);
      return;
    }
    if (!isRefresh) this.loading.set(true);
    this.error.set('');
    this.api.studentAttendanceAnalytics(token).subscribe({
      next: (result) => {
        this.data.set(result);
        this.loading.set(false);
        this.refreshing.set(false);
      },
      error: () => {
        this.error.set('Attendance analysis is temporarily unavailable.');
        this.loading.set(false);
        this.refreshing.set(false);
      },
    });
  }
}
