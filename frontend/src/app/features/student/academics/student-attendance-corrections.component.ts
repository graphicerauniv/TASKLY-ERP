import { DatePipe, TitleCasePipe } from '@angular/common';
import { HttpErrorResponse } from '@angular/common/http';
import {
  ChangeDetectionStrategy,
  Component,
  computed,
  inject,
  signal,
} from '@angular/core';
import { RouterLink } from '@angular/router';
import {
  LucideArrowLeft,
  LucideArrowRight,
  LucideBuilding2,
  LucideCalendarDays,
  LucideCheck,
  LucideChevronRight,
  LucideCircleAlert,
  LucideClock3,
  LucideEllipsisVertical,
  LucideFileText,
  LucideFilter,
  LucideFolderOpen,
  LucideMessageSquare,
  LucidePaperclip,
  LucidePencil,
  LucidePlus,
  LucideSearch,
  LucideSend,
  LucideTrash2,
  LucideUpload,
  LucideX,
} from '@lucide/angular';
import { forkJoin } from 'rxjs';
import { ApiService } from '../../../core/api.service';
import {
  AttendanceCorrectionFeed,
  AttendanceCorrectionReasonType,
  AttendanceCorrectionRecord,
  AttendanceCorrectionRequest,
  AttendanceCorrectionStatus,
} from '../../../core/models';
import { StudentSessionService } from '../shared/services/student-session.service';

type CorrectionFilter = 'all' | 'open' | 'needs-reply' | 'approved' | 'rejected';
type DrawerMode = 'create' | 'detail' | null;

@Component({
  selector: 'erp-student-attendance-corrections',
  imports: [
    DatePipe,
    TitleCasePipe,
    RouterLink,
    LucideArrowLeft,
    LucideArrowRight,
    LucideBuilding2,
    LucideCalendarDays,
    LucideCheck,
    LucideChevronRight,
    LucideCircleAlert,
    LucideClock3,
    LucideEllipsisVertical,
    LucideFileText,
    LucideFilter,
    LucideFolderOpen,
    LucideMessageSquare,
    LucidePaperclip,
    LucidePencil,
    LucidePlus,
    LucideSearch,
    LucideSend,
    LucideTrash2,
    LucideUpload,
    LucideX,
  ],
  templateUrl: './student-attendance-corrections.component.html',
  styleUrl: './student-attendance-corrections.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StudentAttendanceCorrectionsComponent {
  private readonly api = inject(ApiService);
  private readonly session = inject(StudentSessionService);

  readonly feed = signal<AttendanceCorrectionFeed | null>(null);
  readonly records = signal<AttendanceCorrectionRecord[]>([]);
  readonly loading = signal(true);
  readonly error = signal('');
  readonly search = signal('');
  readonly recordSearch = signal('');
  readonly filter = signal<CorrectionFilter>('all');
  readonly drawer = signal<DrawerMode>(null);
  readonly step = signal(1);
  readonly selectedRecord = signal<AttendanceCorrectionRecord | null>(null);
  readonly selectedRequest = signal<AttendanceCorrectionRequest | null>(null);
  readonly reasonType = signal<AttendanceCorrectionReasonType>('marked-absent');
  readonly note = signal('');
  readonly attachment = signal<File | null>(null);
  readonly responseMessage = signal('');
  readonly responseAttachment = signal<File | null>(null);
  readonly submitting = signal(false);
  readonly formError = signal('');
  readonly successMessage = signal('');

  readonly reasons: Array<{
    id: AttendanceCorrectionReasonType;
    label: string;
    mark: string;
  }> = [
    { id: 'marked-absent', label: 'Marked absent', mark: 'A' },
    { id: 'not-updated', label: 'Not updated', mark: '–' },
    { id: 'class-cancelled', label: 'Class cancelled', mark: 'C' },
    { id: 'wrong-status', label: 'Wrong status', mark: '↔' },
    { id: 'duplicate', label: 'Duplicate record', mark: '2' },
    { id: 'other', label: 'Other', mark: '•••' },
  ];

  readonly filteredRequests = computed(() => {
    const query = this.search().trim().toLowerCase();
    const activeFilter = this.filter();
    return (this.feed()?.items || []).filter((item) => {
      const matchesSearch =
        !query ||
        `${item.requestNumber} ${item.subjectName} ${item.subjectCode}`
          .toLowerCase()
          .includes(query);
      const matchesFilter =
        activeFilter === 'all' ||
        (activeFilter === 'open' &&
          ['submitted', 'reviewing', 'needs-reply'].includes(item.status)) ||
        item.status === activeFilter;
      return matchesSearch && matchesFilter;
    });
  });

  readonly filteredRecords = computed(() => {
    const query = this.recordSearch().trim().toLowerCase();
    return this.records().filter(
      (record) =>
        !query ||
        `${record.subjectName} ${record.subjectCode} ${record.date}`.toLowerCase().includes(query),
    );
  });

  constructor() {
    this.load();
  }

  setSearch(value: string): void {
    this.search.set(value);
  }

  setRecordSearch(value: string): void {
    this.recordSearch.set(value);
  }

  setFilter(filter: CorrectionFilter): void {
    this.filter.set(filter);
  }

  openCreate(): void {
    this.step.set(1);
    this.selectedRecord.set(null);
    this.reasonType.set('marked-absent');
    this.note.set('');
    this.attachment.set(null);
    this.formError.set('');
    this.successMessage.set('');
    this.drawer.set('create');
  }

  openRequest(request: AttendanceCorrectionRequest): void {
    this.drawer.set('detail');
    this.selectedRequest.set(request);
    this.responseMessage.set('');
    this.responseAttachment.set(null);
    this.formError.set('');
    const token = this.session.token();
    if (!token) return;
    this.api.studentAttendanceCorrectionRequest(token, request._id).subscribe({
      next: ({ item }) => this.selectedRequest.set(item),
      error: () => this.formError.set('The latest request details could not be loaded.'),
    });
  }

  closeDrawer(): void {
    if (this.submitting()) return;
    this.drawer.set(null);
    this.formError.set('');
  }

  chooseRecord(record: AttendanceCorrectionRecord): void {
    this.selectedRecord.set(record);
    this.reasonType.set(record.status === 'absent' ? 'marked-absent' : 'wrong-status');
    this.formError.set('');
  }

  chooseReason(reason: AttendanceCorrectionReasonType): void {
    this.reasonType.set(reason);
  }

  setNote(value: string): void {
    this.note.set(value.slice(0, 300));
  }

  setResponse(value: string): void {
    this.responseMessage.set(value.slice(0, 1000));
  }

  chooseAttachment(event: Event, response = false): void {
    const input = event.target as HTMLInputElement;
    const file = input.files?.[0] || null;
    if (!file) return;
    if (!['application/pdf', 'image/png', 'image/jpeg'].includes(file.type)) {
      this.formError.set('Choose a PDF, PNG, or JPG file.');
      input.value = '';
      return;
    }
    if (file.size > 5 * 1024 * 1024) {
      this.formError.set('The proof file must be 5 MB or smaller.');
      input.value = '';
      return;
    }
    this.formError.set('');
    (response ? this.responseAttachment : this.attachment).set(file);
  }

  removeAttachment(response = false): void {
    (response ? this.responseAttachment : this.attachment).set(null);
  }

  nextStep(): void {
    if (this.step() === 1 && !this.selectedRecord()) {
      this.formError.set('Select the attendance record you want corrected.');
      return;
    }
    if (this.step() === 2 && this.note().trim().length < 10) {
      this.formError.set('Add a short note of at least 10 characters.');
      return;
    }
    this.formError.set('');
    this.step.update((value) => Math.min(3, value + 1));
  }

  previousStep(): void {
    this.formError.set('');
    this.step.update((value) => Math.max(1, value - 1));
  }

  submitRequest(): void {
    const token = this.session.token();
    const record = this.selectedRecord();
    if (!token || !record || this.note().trim().length < 10) return;
    const body = new FormData();
    body.set('recordId', record.recordId);
    body.set('reasonType', this.reasonType());
    body.set('requestedStatus', record.status === 'absent' ? 'present' : 'absent');
    body.set('note', this.note().trim());
    if (this.attachment()) body.set('attachment', this.attachment()!);
    this.submitting.set(true);
    this.formError.set('');
    this.api.createStudentAttendanceCorrection(token, body).subscribe({
      next: ({ item }) => {
        this.submitting.set(false);
        this.drawer.set('detail');
        this.selectedRequest.set(item);
        this.successMessage.set('Correction request submitted successfully.');
        this.load(false);
      },
      error: (error: HttpErrorResponse) => {
        this.submitting.set(false);
        this.formError.set(error.error?.message || 'The correction request could not be submitted.');
      },
    });
  }

  submitResponse(): void {
    const token = this.session.token();
    const request = this.selectedRequest();
    if (!token || !request) return;
    if (!this.responseMessage().trim() && !this.responseAttachment()) {
      this.formError.set('Add a reply or supporting proof.');
      return;
    }
    const body = new FormData();
    body.set('message', this.responseMessage().trim());
    if (this.responseAttachment()) body.set('attachment', this.responseAttachment()!);
    this.submitting.set(true);
    this.api.respondStudentAttendanceCorrection(token, request._id, body).subscribe({
      next: ({ item }) => {
        this.submitting.set(false);
        this.selectedRequest.set(item);
        this.responseMessage.set('');
        this.responseAttachment.set(null);
        this.successMessage.set('Your response was sent to the Academic Office.');
        this.load(false);
      },
      error: (error: HttpErrorResponse) => {
        this.submitting.set(false);
        this.formError.set(error.error?.message || 'Your response could not be sent.');
      },
    });
  }

  withdraw(): void {
    const token = this.session.token();
    const request = this.selectedRequest();
    if (!token || !request || !this.isOpen(request.status)) return;
    this.submitting.set(true);
    this.api.withdrawStudentAttendanceCorrection(token, request._id).subscribe({
      next: () => {
        this.submitting.set(false);
        this.drawer.set(null);
        this.successMessage.set('Correction request withdrawn.');
        this.load(false);
      },
      error: (error: HttpErrorResponse) => {
        this.submitting.set(false);
        this.formError.set(error.error?.message || 'The request could not be withdrawn.');
      },
    });
  }

  statusLabel(status: AttendanceCorrectionStatus): string {
    return {
      submitted: 'Submitted',
      reviewing: 'Under review',
      'needs-reply': 'Needs reply',
      approved: 'Approved',
      rejected: 'Rejected',
      withdrawn: 'Withdrawn',
    }[status];
  }

  reasonLabel(reason: AttendanceCorrectionReasonType): string {
    return this.reasons.find((item) => item.id === reason)?.label || 'Other';
  }

  requestedStatus(record: AttendanceCorrectionRecord): string {
    return record.status === 'absent' ? 'Present' : 'Absent';
  }

  isOpen(status: AttendanceCorrectionStatus): boolean {
    return ['submitted', 'reviewing', 'needs-reply'].includes(status);
  }

  formatBytes(bytes: number): string {
    return bytes < 1024 * 1024 ? `${Math.max(1, Math.round(bytes / 1024))} KB` : `${(bytes / 1024 / 1024).toFixed(1)} MB`;
  }

  private load(showLoading = true): void {
    const token = this.session.token();
    if (!token) {
      this.error.set('Your student session is unavailable.');
      this.loading.set(false);
      return;
    }
    if (showLoading) this.loading.set(true);
    forkJoin({
      feed: this.api.studentAttendanceCorrectionRequests(token),
      records: this.api.studentAttendanceCorrectionRecords(token),
    }).subscribe({
      next: ({ feed, records }) => {
        this.feed.set(feed);
        this.records.set(records.items);
        this.loading.set(false);
        this.error.set('');
      },
      error: () => {
        this.loading.set(false);
        this.error.set('Correction requests are temporarily unavailable.');
      },
    });
  }
}
