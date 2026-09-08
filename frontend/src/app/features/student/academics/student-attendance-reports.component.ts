import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import {
  LucideAlertTriangle,
  LucideArrowLeft,
  LucideArrowRight,
  LucideBarChart3,
  LucideCalendarDays,
  LucideCheck,
  LucideClock3,
  LucideDownload,
  LucideEllipsisVertical,
  LucideFileSpreadsheet,
  LucideFileText,
  LucideFilter,
  LucideInfo,
  LucidePlus,
  LucideRefreshCw,
  LucideSearch,
  LucideUsersRound,
  LucideX,
} from '@lucide/angular';
import { finalize } from 'rxjs';
import { ApiService } from '../../../core/api.service';
import {
  AttendanceReport,
  AttendanceReportConfig,
  AttendanceReportPreview,
  AttendanceReportStatus,
  StudentAttendanceSubject,
} from '../../../core/models';
import { StudentSessionService } from '../shared/services/student-session.service';

@Component({
  selector: 'erp-student-attendance-reports',
  imports: [
    CommonModule,
    FormsModule,
    RouterLink,
    LucideAlertTriangle,
    LucideArrowLeft,
    LucideArrowRight,
    LucideBarChart3,
    LucideCalendarDays,
    LucideCheck,
    LucideClock3,
    LucideDownload,
    LucideEllipsisVertical,
    LucideFileSpreadsheet,
    LucideFileText,
    LucideFilter,
    LucideInfo,
    LucidePlus,
    LucideRefreshCw,
    LucideSearch,
    LucideUsersRound,
    LucideX,
  ],
  templateUrl: './student-attendance-reports.component.html',
  styleUrl: './student-attendance-reports.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StudentAttendanceReportsComponent {
  private readonly api = inject(ApiService);
  private readonly session = inject(StudentSessionService);
  readonly items = signal<AttendanceReport[]>([]);
  readonly subjects = signal<StudentAttendanceSubject[]>([]);
  readonly preview = signal<AttendanceReportPreview | null>(null);
  readonly loading = signal(true);
  readonly busy = signal(false);
  readonly error = signal('');
  readonly drawerOpen = signal(false);
  readonly step = signal<1 | 2>(1);
  readonly search = signal('');
  readonly status = signal<'all' | AttendanceReportStatus>('all');
  readonly config = signal<AttendanceReportConfig>({
    reportType: 'detailed',
    coverage: 'all',
    subjectIds: [],
    period: 'semester',
    format: 'pdf',
    includeLectureDetails: true,
    includeSummaryPage: true,
  });
  readonly filtered = computed(() => {
    const term = this.search().trim().toLowerCase();
    return this.items().filter(
      (item) =>
        (this.status() === 'all' || item.status === this.status()) &&
        (!term ||
          `${item.reportNumber} ${item.reportType} ${item.format}`.toLowerCase().includes(term)),
    );
  });
  readonly counts = computed(() => ({
    all: this.items().length,
    ready: this.items().filter((item) => item.status === 'ready').length,
    generating: this.items().filter((item) => item.status === 'generating').length,
    expired: this.items().filter((item) => item.status === 'expired').length,
    failed: this.items().filter((item) => item.status === 'failed').length,
  }));

  constructor() {
    this.load();
    const token = this.session.token();
    if (token)
      this.api
        .studentAttendance(token)
        .subscribe({ next: (value) => this.subjects.set(value.subjects) });
  }

  openCreate(): void {
    this.step.set(1);
    this.preview.set(null);
    this.drawerOpen.set(true);
    document.body.classList.add('report-drawer-open');
  }

  close(): void {
    if (this.busy()) return;
    this.drawerOpen.set(false);
    document.body.classList.remove('report-drawer-open');
  }

  update(patch: Partial<AttendanceReportConfig>): void {
    this.config.update((value) => ({ ...value, ...patch }));
  }

  selectSubject(subjectId: string): void {
    const selected = new Set(this.config().subjectIds);
    selected.has(subjectId) ? selected.delete(subjectId) : selected.add(subjectId);
    this.update({ subjectIds: [...selected] });
  }

  toPreview(): void {
    const token = this.session.token();
    if (!token) return;
    if (this.config().coverage === 'selected' && !this.config().subjectIds.length) {
      this.error.set('Choose at least one subject for this report.');
      return;
    }
    this.busy.set(true);
    this.error.set('');
    this.api
      .previewStudentAttendanceReport(token, this.config())
      .pipe(finalize(() => this.busy.set(false)))
      .subscribe({
        next: ({ preview }) => {
          this.preview.set(preview);
          this.step.set(2);
        },
        error: (error) =>
          this.error.set(error?.error?.message || 'Report preview could not be created.'),
      });
  }

  generate(): void {
    const token = this.session.token();
    if (!token) return;
    this.busy.set(true);
    this.api
      .createStudentAttendanceReport(token, this.config())
      .pipe(finalize(() => this.busy.set(false)))
      .subscribe({
        next: ({ item }) => {
          this.items.update((items) => [item, ...items]);
          this.close();
          this.download(item);
        },
        error: (error) => this.error.set(error?.error?.message || 'Report generation failed.'),
      });
  }

  download(item: AttendanceReport): void {
    const token = this.session.token();
    if (!token || item.status !== 'ready') return;
    this.api.downloadStudentAttendanceReport(token, item._id).subscribe({
      next: (blob) => {
        const url = URL.createObjectURL(blob);
        const anchor = document.createElement('a');
        anchor.href = url;
        anchor.download = item.fileName;
        anchor.click();
        URL.revokeObjectURL(url);
      },
      error: (error) => this.error.set(error?.error?.message || 'Report download failed.'),
    });
  }

  regenerate(item: AttendanceReport): void {
    const token = this.session.token();
    if (!token) return;
    this.busy.set(true);
    this.api
      .regenerateStudentAttendanceReport(token, item._id)
      .pipe(finalize(() => this.busy.set(false)))
      .subscribe({
        next: () => this.load(),
        error: (error) =>
          this.error.set(error?.error?.message || 'Report could not be regenerated.'),
      });
  }

  label(type: AttendanceReport['reportType']): string {
    return {
      detailed: 'Detailed attendance',
      summary: 'Subject summary',
      monthly: 'Monthly attendance',
    }[type];
  }

  private load(): void {
    const token = this.session.token();
    if (!token) return;
    this.loading.set(true);
    this.api
      .studentAttendanceReports(token)
      .pipe(finalize(() => this.loading.set(false)))
      .subscribe({
        next: (feed) => this.items.set(feed.items),
        error: (error) => this.error.set(error?.error?.message || 'Reports could not be loaded.'),
      });
  }
}
