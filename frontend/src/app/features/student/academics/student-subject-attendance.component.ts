import { DatePipe } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
  computed,
  inject,
  signal,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { ActivatedRoute, Router } from '@angular/router';
import {
  LucideAlertCircle,
  LucideArrowDownToLine,
  LucideArrowLeft,
  LucideBookOpen,
  LucideCalendarDays,
  LucideCheck,
  LucideChevronDown,
  LucideChevronLeft,
  LucideChevronRight,
  LucideCircleMinus,
  LucideClock3,
  LucideFilter,
  LucideInfo,
  LucideMapPin,
  LucideMonitor,
  LucideRefreshCw,
  LucideSearch,
  LucideUserRound,
  LucideX,
} from '@lucide/angular';
import { ApiService } from '../../../core/api.service';
import {
  StudentAttendanceDetail,
  StudentAttendanceRecord,
  StudentAttendanceSchedule,
  StudentAttendanceSubject,
} from '../../../core/models';
import { StudentSessionService } from '../shared/services/student-session.service';
import { StudentSubjectIconComponent } from '../shared/components/student-subject-icon/student-subject-icon.component';

type AttendanceView = 'month' | 'week' | 'list';
type AttendanceFilter = 'all' | 'safe' | 'attention' | 'critical';
type DayStatus = 'present' | 'absent' | 'no_class' | 'empty';

interface CalendarCell {
  readonly date: Date;
  readonly key: string;
  readonly day: number;
  readonly outside: boolean;
  readonly status: DayStatus;
  readonly record: StudentAttendanceRecord | null;
}

interface WeekDay extends CalendarCell {
  readonly label: string;
  readonly shortLabel: string;
  readonly schedule: StudentAttendanceSchedule | null;
}

@Component({
  selector: 'erp-student-subject-attendance',
  imports: [
    DatePipe,
    FormsModule,
    LucideAlertCircle,
    LucideArrowDownToLine,
    LucideArrowLeft,
    LucideBookOpen,
    LucideCalendarDays,
    LucideCheck,
    LucideChevronDown,
    LucideChevronLeft,
    LucideChevronRight,
    LucideCircleMinus,
    LucideClock3,
    LucideFilter,
    LucideInfo,
    LucideMapPin,
    LucideMonitor,
    LucideRefreshCw,
    LucideSearch,
    LucideUserRound,
    LucideX,
    StudentSubjectIconComponent,
  ],
  templateUrl: './student-subject-attendance.component.html',
  styleUrl: './student-subject-attendance.component-local.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StudentSubjectAttendanceComponent {
  private readonly api = inject(ApiService);
  private readonly route = inject(ActivatedRoute);
  private readonly router = inject(Router);
  private readonly session = inject(StudentSessionService);
  private readonly destroyRef = inject(DestroyRef);

  readonly requiredAttendance = 75;
  readonly subjects = signal<StudentAttendanceSubject[]>([]);
  readonly overall = signal({
    totalLectures: 0,
    presentLectures: 0,
    absentLectures: 0,
    attendancePercentage: 0,
  });
  readonly detail = signal<StudentAttendanceDetail | null>(null);
  readonly loading = signal(true);
  readonly error = signal('');
  readonly search = signal('');
  readonly subjectFilter = signal<AttendanceFilter>('all');
  readonly subjectSort = signal<'high' | 'low' | 'name'>('high');
  readonly subjectPage = signal(1);
  readonly view = signal<AttendanceView>('month');
  readonly recordFilter = signal<'all' | 'present' | 'absent'>('all');
  readonly selectedMonth = signal(this.monthStart(new Date()));
  readonly selectedRecord = signal<StudentAttendanceRecord | null>(null);
  readonly correctionOpen = signal(false);
  readonly correctionReason = signal('');
  readonly correctionSubmitting = signal(false);
  readonly correctionMessage = signal('');
  readonly visibleRecordCount = signal(7);

  readonly subjectId = computed(() => this.detail()?.subject.subjectId || '');
  readonly isDetail = computed(() => Boolean(this.route.snapshot.paramMap.get('subjectId')));
  readonly semester = computed(() => this.session.profile()?.currentSemester || 1);
  readonly filteredSubjects = computed(() => {
    const query = this.search().trim().toLocaleLowerCase();
    const subjects = this.subjects().filter((subject) => {
      const status = this.subjectStatus(subject.attendancePercentage);
      return (
        (this.subjectFilter() === 'all' || status === this.subjectFilter()) &&
        (!query ||
          subject.subjectName.toLocaleLowerCase().includes(query) ||
          subject.subjectCode.toLocaleLowerCase().includes(query) ||
          subject.facultyNames.some((name) => name.toLocaleLowerCase().includes(query)))
      );
    });
    return subjects.sort((left, right) => {
      if (this.subjectSort() === 'name') return left.subjectName.localeCompare(right.subjectName);
      return this.subjectSort() === 'high'
        ? right.attendancePercentage - left.attendancePercentage
        : left.attendancePercentage - right.attendancePercentage;
    });
  });
  readonly subjectPages = computed(() =>
    Math.max(1, Math.ceil(this.filteredSubjects().length / 5)),
  );
  readonly subjectRangeStart = computed(() =>
    this.filteredSubjects().length ? (this.subjectPage() - 1) * 5 + 1 : 0,
  );
  readonly subjectRangeEnd = computed(() =>
    Math.min(this.subjectPage() * 5, this.filteredSubjects().length),
  );
  readonly pagedSubjects = computed(() => {
    const start = (this.subjectPage() - 1) * 5;
    return this.filteredSubjects().slice(start, start + 5);
  });
  readonly recordMap = computed(
    () => new Map((this.detail()?.records || []).map((record) => [record.date, record])),
  );
  readonly monthRecords = computed(() => {
    const selected = this.selectedMonth();
    return (this.detail()?.records || [])
      .filter((record) => {
        const date = this.parseDate(record.date);
        return (
          date.getFullYear() === selected.getFullYear() &&
          date.getMonth() === selected.getMonth() &&
          (this.recordFilter() === 'all' || record.status === this.recordFilter())
        );
      })
      .sort((left, right) => right.date.localeCompare(left.date));
  });
  readonly mobileRecords = computed(() =>
    [...this.monthRecords()].sort((left, right) => left.date.localeCompare(right.date)),
  );
  readonly visibleRecords = computed(() =>
    this.mobileRecords().slice(0, this.visibleRecordCount()),
  );
  readonly desktopCalendar = computed(() => this.buildCalendar(true));
  readonly mobileCalendar = computed(() => this.buildCalendar(false));
  readonly weekDays = computed(() => this.buildWeek());
  readonly monthLabel = computed(() =>
    new Intl.DateTimeFormat('en-IN', { month: 'long', year: 'numeric' }).format(
      this.selectedMonth(),
    ),
  );
  readonly weekLabel = computed(() => {
    const days = this.weekDays();
    if (!days.length) return '';
    const first = days[0].date;
    const last = days[6].date;
    return `${this.two(first.getDate())} – ${this.two(last.getDate())} ${new Intl.DateTimeFormat(
      'en-IN',
      { month: 'short', year: 'numeric' },
    ).format(last)}`;
  });

  constructor() {
    this.route.paramMap.pipe(takeUntilDestroyed(this.destroyRef)).subscribe((params) => {
      const subjectId = params.get('subjectId');
      if (subjectId) this.loadDetail(subjectId);
      else this.loadSubjects();
    });
  }

  setSearch(value: string): void {
    this.search.set(value);
    this.subjectPage.set(1);
  }

  setSubjectFilter(filter: AttendanceFilter): void {
    this.subjectFilter.set(filter);
    this.subjectPage.set(1);
  }

  cycleSubjectFilter(): void {
    const values: AttendanceFilter[] = ['all', 'safe', 'attention', 'critical'];
    this.setSubjectFilter(values[(values.indexOf(this.subjectFilter()) + 1) % values.length]);
  }

  cycleSubjectSort(): void {
    const values: Array<'high' | 'low' | 'name'> = ['high', 'low', 'name'];
    this.subjectSort.set(values[(values.indexOf(this.subjectSort()) + 1) % values.length]);
    this.subjectPage.set(1);
  }

  desktopFilterLabel(): string {
    const labels: Record<AttendanceFilter, string> = {
      all: 'All status',
      safe: 'On track',
      attention: 'Attention',
      critical: 'Critical',
    };
    return labels[this.subjectFilter()];
  }

  desktopSortLabel(): string {
    return this.subjectSort() === 'high'
      ? 'Attendance: high to low'
      : this.subjectSort() === 'low'
        ? 'Attendance: low to high'
        : 'Subject: A to Z';
  }

  openSubject(subject: StudentAttendanceSubject): void {
    void this.router.navigate(['/student/attendance/subjects', subject.subjectId]);
  }

  goBack(): void {
    if (this.isDetail()) void this.router.navigate(['/student/attendance/subjects']);
    else void this.router.navigate(['/student/attendance']);
  }

  setView(view: AttendanceView): void {
    this.view.set(view);
    this.visibleRecordCount.set(7);
  }

  changeMonth(offset: number): void {
    const value = this.selectedMonth();
    this.selectedMonth.set(new Date(value.getFullYear(), value.getMonth() + offset, 1));
    this.visibleRecordCount.set(7);
  }

  goToday(): void {
    this.selectedMonth.set(new Date());
  }

  changeWeek(offset: number): void {
    const value = this.selectedMonth();
    this.selectedMonth.set(
      new Date(value.getFullYear(), value.getMonth(), value.getDate() + offset * 7),
    );
  }

  selectCell(cell: CalendarCell): void {
    if (cell.record) this.openRecord(cell.record);
  }

  openRecord(record: StudentAttendanceRecord): void {
    this.selectedRecord.set(record);
    this.correctionOpen.set(false);
    this.correctionReason.set('');
    this.correctionMessage.set('');
  }

  closeRecord(): void {
    this.selectedRecord.set(null);
    this.correctionOpen.set(false);
  }

  loadMore(): void {
    this.visibleRecordCount.update((value) => value + 7);
  }

  submitCorrection(): void {
    const token = this.session.token();
    const record = this.selectedRecord();
    const reason = this.correctionReason().trim();
    if (!token || !record || reason.length < 10) {
      this.correctionMessage.set('Please provide at least 10 characters explaining the issue.');
      return;
    }
    this.correctionSubmitting.set(true);
    this.correctionMessage.set('');
    this.api.createAttendanceCorrectionRequest(token, record.recordId, reason).subscribe({
      next: () => {
        this.correctionSubmitting.set(false);
        this.correctionOpen.set(false);
        this.correctionMessage.set('Correction request submitted for faculty review.');
      },
      error: (error) => {
        this.correctionSubmitting.set(false);
        this.correctionMessage.set(error?.error?.message || 'The request could not be submitted.');
      },
    });
  }

  downloadCsv(): void {
    const subject = this.detail()?.subject;
    if (!subject) return;
    const rows = [
      ['Date', 'Status', 'Start time', 'End time', 'Faculty', 'Venue'],
      ...this.monthRecords().map((record) => [
        record.date,
        record.status,
        record.startTime,
        record.endTime,
        record.facultyName,
        record.roomName,
      ]),
    ];
    const csv = rows
      .map((row) => row.map((value) => `"${String(value).replaceAll('"', '""')}"`).join(','))
      .join('\n');
    const url = URL.createObjectURL(new Blob([csv], { type: 'text/csv;charset=utf-8' }));
    const anchor = document.createElement('a');
    anchor.href = url;
    anchor.download = `${subject.subjectCode || 'subject'}-attendance.csv`;
    anchor.click();
    URL.revokeObjectURL(url);
  }

  subjectStatus(percentage: number): Exclude<AttendanceFilter, 'all'> {
    if (percentage >= this.requiredAttendance) return 'safe';
    if (percentage >= 65) return 'attention';
    return 'critical';
  }

  statusLabel(percentage: number): string {
    const status = this.subjectStatus(percentage);
    return status === 'safe' ? 'On track' : status === 'attention' ? 'Attention' : 'Critical';
  }

  formatPercentage(value: number): string {
    return new Intl.NumberFormat('en-IN', { maximumFractionDigits: 1 }).format(value);
  }

  formatTime(value: string): string {
    if (!value) return 'Time unavailable';
    const [hours, minutes] = value.split(':').map(Number);
    return new Intl.DateTimeFormat('en-IN', { hour: '2-digit', minute: '2-digit' }).format(
      new Date(2000, 0, 1, hours, minutes),
    );
  }

  loadSubjects(): void {
    const token = this.session.token();
    if (!token) return this.fail('Your student session is unavailable.');
    this.loading.set(true);
    this.api.studentAttendance(token).subscribe({
      next: (result) => {
        this.subjects.set(result.subjects);
        this.overall.set(result.overall);
        this.loading.set(false);
      },
      error: () => this.fail('Subject attendance could not be loaded.'),
    });
  }

  private loadDetail(subjectId: string): void {
    const token = this.session.token();
    if (!token) return this.fail('Your student session is unavailable.');
    this.loading.set(true);
    this.api.studentSubjectAttendance(token, subjectId).subscribe({
      next: (result) => {
        this.detail.set(result);
        const latest = result.records[0]?.date;
        if (latest) this.selectedMonth.set(this.parseDate(latest));
        this.loading.set(false);
      },
      error: () => this.fail('Attendance history for this subject could not be loaded.'),
    });
  }

  private fail(message: string): void {
    this.error.set(message);
    this.loading.set(false);
  }

  private buildCalendar(mondayFirst: boolean): CalendarCell[] {
    const selected = this.selectedMonth();
    const first = new Date(selected.getFullYear(), selected.getMonth(), 1);
    const dayOffset = mondayFirst ? (first.getDay() + 6) % 7 : first.getDay();
    const start = new Date(first.getFullYear(), first.getMonth(), 1 - dayOffset);
    const daysInMonth = new Date(selected.getFullYear(), selected.getMonth() + 1, 0).getDate();
    const cellCount = Math.ceil((dayOffset + daysInMonth) / 7) * 7;
    return Array.from({ length: cellCount }, (_, index) => {
      const date = new Date(start.getFullYear(), start.getMonth(), start.getDate() + index);
      return this.calendarCell(date, date.getMonth() !== selected.getMonth());
    });
  }

  private buildWeek(): WeekDay[] {
    const selected = this.selectedMonth();
    const offset = (selected.getDay() + 6) % 7;
    const start = new Date(
      selected.getFullYear(),
      selected.getMonth(),
      selected.getDate() - offset,
    );
    return Array.from({ length: 7 }, (_, index) => {
      const date = new Date(start.getFullYear(), start.getMonth(), start.getDate() + index);
      const cell = this.calendarCell(date, false);
      return {
        ...cell,
        label: new Intl.DateTimeFormat('en-IN', { weekday: 'short' }).format(date),
        shortLabel: `${this.two(date.getDate())} ${new Intl.DateTimeFormat('en-IN', { month: 'short' }).format(date)}`,
        schedule: this.scheduleFor(date),
      };
    });
  }

  private calendarCell(date: Date, outside: boolean): CalendarCell {
    const key = this.dateKey(date);
    const record = this.recordMap().get(key) || null;
    return {
      date,
      key,
      day: date.getDate(),
      outside,
      status: record?.status || 'no_class',
      record,
    };
  }

  private scheduleFor(date: Date): StudentAttendanceSchedule | null {
    const day = new Intl.DateTimeFormat('en-US', { weekday: 'long' }).format(date);
    return this.detail()?.schedule.find((entry) => entry.day === day) || null;
  }

  private monthStart(date: Date): Date {
    return new Date(date.getFullYear(), date.getMonth(), 1);
  }

  parseDate(value: string): Date {
    const [year, month, day] = value.split('-').map(Number);
    return new Date(year, month - 1, day);
  }

  private dateKey(date: Date): string {
    return `${date.getFullYear()}-${this.two(date.getMonth() + 1)}-${this.two(date.getDate())}`;
  }

  private two(value: number): string {
    return String(value).padStart(2, '0');
  }
}
