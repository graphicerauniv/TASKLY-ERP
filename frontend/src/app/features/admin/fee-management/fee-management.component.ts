import { CurrencyPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, effect, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { RouterLink } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { map } from 'rxjs';
import { ApiService } from '../../../core/api.service';
import {
  CourseFee,
  FeeBook,
  FeeFrequency,
  FeeHead,
  FeeImportPreview,
  Hostel,
  HostelFee,
  MasterValue,
} from '../../../core/models';
import { AdminPageComponent } from '../../../shared/ui/admin-page/admin-page.component';
import {
  CompactActionItem,
  CompactActionMenuComponent,
} from '../../../shared/ui/compact-action-menu/compact-action-menu.component';

type FeeSection =
  | 'books'
  | 'heads'
  | 'hostel-fees'
  | 'course-fees'
  | 'course-fee-view';

interface FeeViewCell {
  eligibilityBand: string;
  amounts: number[];
  conflict: boolean;
}

interface FeeViewRow {
  key: string;
  feeHeadName: string;
  category: FeeHead['category'];
  frequency: FeeFrequency;
  semester: number | null;
  cells: FeeViewCell[];
  sources: string[];
}

interface FeeViewGroup {
  key: string;
  label: string;
  description: string;
  order: number;
  eligibilityBands: string[];
  rows: FeeViewRow[];
}

@Component({
  selector: 'erp-fee-management',
  imports: [AdminPageComponent, CompactActionMenuComponent, FormsModule, CurrencyPipe, RouterLink],
  templateUrl: './fee-management.component.html',
  styleUrl: './fee-management.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FeeManagementComponent {
  private readonly api = inject(ApiService);
  readonly section = toSignal(
    inject(ActivatedRoute).data.pipe(map((data) => (data['section'] || 'books') as FeeSection)),
    { initialValue: 'books' as FeeSection },
  );
  readonly pageTitle = computed(() => ({
    books: 'Book Creation',
    heads: 'Fee Head',
    'hostel-fees': 'Hostel Fee',
    'course-fees': 'Course Wise Fee',
    'course-fee-view': 'Course Fee View',
  })[this.section()]);
  readonly pageDescription = computed(() => ({
    books: 'Create college and academic-session fee books.',
    heads: 'Create reusable payable, discount and payment-option heads for a fee book.',
    'hostel-fees': 'Set hostel charges by hostel, seater, room type and frequency.',
    'course-fees': 'Set course fees manually or import and map the GEU fee workbook.',
    'course-fee-view': 'Review a selected course in a clear year-wise fee-head matrix.',
  })[this.section()]);
  readonly books = signal<FeeBook[]>([]);
  readonly heads = signal<FeeHead[]>([]);
  readonly hostelFees = signal<HostelFee[]>([]);
  readonly courseFeeViewRecords = signal<CourseFee[]>([]);
  readonly colleges = signal<MasterValue[]>([]);
  readonly academicSessions = signal<MasterValue[]>([]);
  readonly departments = signal<MasterValue[]>([]);
  readonly levels = signal<MasterValue[]>([]);
  readonly courses = signal<MasterValue[]>([]);
  readonly domiciles = signal<MasterValue[]>([]);
  readonly hostels = signal<Hostel[]>([]);
  readonly preview = signal<FeeImportPreview | null>(null);
  readonly loading = signal(false);
  readonly saving = signal(false);
  readonly message = signal('');
  readonly error = signal('');
  readonly editingBook = signal<FeeBook | null>(null);
  readonly editingHead = signal<FeeHead | null>(null);
  readonly showOnlyNeedsMapping = signal(false);
  readonly rowActions: CompactActionItem[] = [
    { id: 'edit', label: 'Edit', icon: 'edit' },
    { id: 'delete', label: 'Delete', icon: 'delete', destructive: true, separator: true },
  ];
  readonly deleteActions: CompactActionItem[] = [
    { id: 'delete', label: 'Delete', icon: 'delete', destructive: true },
  ];

  selectedBookId = '';
  bookCollegeId = '';
  bookStartDate = '';
  bookEndDate = '';
  bookSession = '';
  bookCode = '';
  bookFrequency: 'semester' | 'year' = 'semester';
  headName = '';
  headCategory: FeeHead['category'] = 'fee';
  hostelId = '';
  hostelSeater = 2;
  hostelRoomType = 'Non AC';
  hostelFeeHeadId = '';
  hostelFrequency: FeeFrequency = 'yearly';
  hostelAmount: number | null = null;
  departmentId = '';
  levelId = '';
  courseId = '';
  courseFeeHeadId = '';
  courseDomicileId = '';
  courseAcademicId = '';
  courseSemester: number | null = null;
  courseFrequency: FeeFrequency = 'semester';
  courseEligibility = 'All candidates';
  courseAmount: number | null = null;
  replaceExisting = true;
  importDomicileId = '';
  viewCollegeId = '';
  viewDepartmentId = '';
  viewLevelId = '';
  viewCourseId = '';
  viewDomicileId = '';
  previewPage = 1;
  previewPageSize = 10;
  previewCourseToAdd: Record<string, string> = {};
  sheetMappings: Record<string, string[]> = {};
  headMappings: Record<string, string> = {};

  readonly currentBook = () => this.books().find((book) => book._id === this.selectedBookId);
  readonly bookHeads = () => this.heads().filter((head) => head.bookId === this.selectedBookId);
  readonly departmentOptions = () => {
    const collegeId = this.currentBook()?.collegeId;
    return collegeId ? this.departments().filter((item) => item.parentId === collegeId) : [];
  };
  readonly levelOptions = () => this.levels().filter((item) => item.parentId === this.departmentId);
  readonly courseOptions = () => this.courses().filter((item) => item.parentId === this.levelId);
  readonly filteredPreviewSheets = () => {
    const preview = this.preview();
    if (!preview) return [];
    if (!this.showOnlyNeedsMapping()) return preview.sheets;
    return preview.sheets.filter((sheet) => !this.sheetMappings[sheet.sheetName]?.length);
  };
  readonly pagedPreviewSheets = () => {
    const start = (this.previewPage - 1) * this.previewPageSize;
    return this.filteredPreviewSheets().slice(start, start + this.previewPageSize);
  };
  readonly previewTotalPages = () =>
    Math.max(1, Math.ceil(this.filteredPreviewSheets().length / this.previewPageSize));
  readonly previewCounts = () => {
    const sheets = this.preview()?.sheets || [];
    return {
      total: sheets.length,
      mapped: sheets.filter((sheet) => !!this.sheetMappings[sheet.sheetName]?.length).length,
      needsMapping: sheets.filter((sheet) => !this.sheetMappings[sheet.sheetName]?.length).length,
      lines: sheets.reduce((sum, sheet) => sum + sheet.lineCount, 0),
    };
  };
  readonly viewDepartmentOptions = () =>
    this.viewCollegeId
      ? this.departments().filter((item) => item.parentId === this.viewCollegeId)
      : [];
  readonly viewCollegeOptions = () => {
    const collegeId = this.currentBook()?.collegeId;
    return collegeId ? this.colleges().filter((college) => college._id === collegeId) : [];
  };
  readonly viewLevelOptions = () =>
    this.levels().filter((item) => item.parentId === this.viewDepartmentId);
  readonly viewCourseOptions = () =>
    this.courses().filter((item) => item.parentId === this.viewLevelId);
  readonly selectedViewCourse = () =>
    this.courses().find((course) => course._id === this.viewCourseId);
  readonly feeViewSummary = computed(() => {
    const records = this.courseFeeViewRecords();
    return {
      records: records.length,
      heads: new Set(records.map((fee) => fee.feeHeadId)).size,
      years: new Set(records.map((fee) => fee.academicYear).filter(Boolean)).size,
      eligibilityBands: new Set(records.map((fee) => fee.eligibilityBand || 'All candidates')).size,
    };
  });
  readonly feeViewGroups = computed<FeeViewGroup[]>(() => {
    const records = this.courseFeeViewRecords();
    const groups = new Map<string, { label: string; description: string; order: number; fees: CourseFee[] }>();
    for (const fee of records) {
      let key = 'recurring';
      let label = 'Recurring and other charges';
      let description = 'Charges that apply independently of a particular academic year.';
      let order = 900;
      if (fee.frequency === 'one-time') {
        key = 'one-time';
        label = 'One-time charges';
        description = 'Admission-time charges collected once for this course.';
        order = 0;
      } else if (fee.academicYear) {
        key = `year-${fee.academicYear}`;
        label = `Academic Year ${fee.academicYear}`;
        description = `All configured fees and payment options for year ${fee.academicYear}.`;
        order = fee.academicYear * 10;
      } else if (fee.academicName) {
        key = `academic-${fee.academicId || fee.academicName}`;
        label = fee.academicName;
        description = `Fees configured manually for academic year ${fee.academicName}.`;
        order = 500;
      }
      const group = groups.get(key) || { label, description, order, fees: [] };
      group.fees.push(fee);
      groups.set(key, group);
    }
    return [...groups.entries()]
      .map(([key, group]) => {
        const eligibilityBands = [...new Set(group.fees.map((fee) => fee.eligibilityBand || 'All candidates'))]
          .sort((left, right) => Number(left !== 'All candidates') - Number(right !== 'All candidates') || left.localeCompare(right));
        const rowGroups = new Map<string, CourseFee[]>();
        for (const fee of group.fees) {
          const rowKey = `${fee.feeHeadId}|${fee.frequency}|${fee.semester || ''}`;
          rowGroups.set(rowKey, [...(rowGroups.get(rowKey) || []), fee]);
        }
        const rows = [...rowGroups.entries()].map(([rowKey, fees]) => {
          const first = fees[0];
          return {
            key: rowKey,
            feeHeadName: first.feeHeadName,
            category: first.category,
            frequency: first.frequency,
            semester: first.semester,
            cells: eligibilityBands.map((eligibilityBand) => {
              const amounts = [...new Set(fees.filter((fee) => (fee.eligibilityBand || 'All candidates') === eligibilityBand).map((fee) => fee.amount))].sort((a, b) => a - b);
              return { eligibilityBand, amounts, conflict: amounts.length > 1 };
            }),
            sources: [...new Set(fees.map((fee) => fee.source === 'excel' ? `Excel: ${fee.sourceSheet}` : 'Manual'))],
          } satisfies FeeViewRow;
        }).sort((left, right) =>
          Number(left.category === 'discount') - Number(right.category === 'discount') ||
          left.feeHeadName.localeCompare(right.feeHeadName),
        );
        return { key, ...group, eligibilityBands, rows };
      })
      .sort((left, right) => left.order - right.order);
  });

  constructor() {
    effect(() => {
      this.section();
      this.loadReferenceData();
    });
  }

  loadReferenceData() {
    this.clearNotices();
    this.loading.set(true);
    this.api.feeBooks().subscribe({
      next: ({ items }) => {
        this.books.set(items);
        if (!this.selectedBookId && items.length) this.selectedBookId = items[0]._id;
        this.loadSectionData();
      },
      error: (error) => this.fail(error),
    });
    this.api.masterValues('college', { active: true }).subscribe(({ items }) => this.colleges.set(items));
    this.api.masterValues('academic', { active: true }).subscribe(({ items }) => this.academicSessions.set(items));
    this.api.masterValues('department', { active: true }).subscribe(({ items }) => this.departments.set(items));
    this.api.masterValues('level', { active: true }).subscribe(({ items }) => this.levels.set(items));
    this.api.masterValues('domicile', { active: true }).subscribe(({ items }) => this.domiciles.set(items));
    this.api.feeCourseOptions().subscribe(({ items }) => this.courses.set(items));
    if (this.section() === 'hostel-fees') this.api.hostels().subscribe(({ items }) => this.hostels.set(items));
  }

  loadSectionData() {
    this.api.feeHeads().subscribe({
      next: ({ items }) => {
        this.heads.set(items);
        if (this.section() === 'heads') this.loading.set(false);
      },
      error: (error) => this.fail(error),
    });
    if (this.section() === 'books') this.loading.set(false);
    if (this.section() === 'hostel-fees') this.loadHostelFees();
    if (this.section() === 'course-fees') this.loading.set(false);
    if (this.section() === 'course-fee-view') {
      this.viewBookChanged();
      this.loading.set(false);
    }
  }

  bookChanged() {
    this.preview.set(null);
    this.sheetMappings = {};
    this.headMappings = {};
    this.departmentId = '';
    this.levelId = '';
    this.courseId = '';
    if (this.section() === 'course-fee-view') this.viewBookChanged();
    if (this.section() === 'hostel-fees') this.loadHostelFees();
  }

  saveBook() {
    if (!this.bookCollegeId || !this.bookStartDate || !this.bookEndDate || !this.bookSession.trim() || !this.bookCode.trim())
      return this.error.set('Complete all required book fields.');
    this.startSaving();
    const body = {
      collegeId: this.bookCollegeId,
      startDate: this.bookStartDate,
      endDate: this.bookEndDate,
      academicSession: this.bookSession.trim(),
      code: this.bookCode.trim(),
      frequency: this.bookFrequency,
      isActive: this.editingBook()?.isActive ?? true,
    };
    const request = this.editingBook()
      ? this.api.updateFeeBook(this.editingBook()!._id, body)
      : this.api.createFeeBook(body);
    request.subscribe({
      next: () => {
        this.resetBook();
        this.saved('Fee book saved successfully.');
      },
      error: (error) => this.fail(error),
    });
  }

  handleBookAction(action: string, book: FeeBook) {
    if (action === 'edit') {
      this.editingBook.set(book);
      this.bookCollegeId = book.collegeId;
      this.bookStartDate = book.startDate;
      this.bookEndDate = book.endDate;
      this.bookSession = book.academicSession;
      this.bookCode = book.code;
      this.bookFrequency = book.frequency;
    } else if (action === 'delete' && confirm(`Delete fee book ${book.code}?`)) {
      this.api.deleteFeeBook(book._id).subscribe({ next: () => this.saved('Fee book deleted.'), error: (error) => this.fail(error) });
    }
  }

  resetBook() {
    this.editingBook.set(null);
    this.bookCollegeId = '';
    this.bookStartDate = '';
    this.bookEndDate = '';
    this.bookSession = '';
    this.bookCode = '';
    this.bookFrequency = 'semester';
  }

  saveHead() {
    if (!this.selectedBookId || !this.headName.trim()) return this.error.set('Select a fee book and enter the fee-head name.');
    this.startSaving();
    const request = this.editingHead()
      ? this.api.updateFeeHead(this.editingHead()!._id, { name: this.headName.trim(), category: this.headCategory })
      : this.api.createFeeHead({ bookId: this.selectedBookId, name: this.headName.trim(), category: this.headCategory });
    request.subscribe({ next: () => { this.resetHead(); this.saved('Fee head saved.'); }, error: (error) => this.fail(error) });
  }

  handleHeadAction(action: string, head: FeeHead) {
    if (action === 'edit') {
      this.editingHead.set(head);
      this.selectedBookId = head.bookId;
      this.headName = head.name;
      this.headCategory = head.category;
    } else if (action === 'delete' && confirm(`Delete ${head.name}?`)) {
      this.api.deleteFeeHead(head._id).subscribe({ next: () => this.saved('Fee head deleted.'), error: (error) => this.fail(error) });
    }
  }

  resetHead() {
    this.editingHead.set(null);
    this.headName = '';
    this.headCategory = 'fee';
  }

  saveHostelFee() {
    if (!this.selectedBookId || !this.hostelId || !this.hostelFeeHeadId || !this.hostelAmount)
      return this.error.set('Complete all required hostel-fee fields.');
    this.startSaving();
    this.api.createHostelFee({
      bookId: this.selectedBookId,
      hostelId: this.hostelId,
      seater: Number(this.hostelSeater),
      roomType: this.hostelRoomType.trim(),
      feeHeadId: this.hostelFeeHeadId,
      frequency: this.hostelFrequency,
      amount: Number(this.hostelAmount),
    }).subscribe({ next: () => { this.hostelAmount = null; this.saved('Hostel fee saved.'); }, error: (error) => this.fail(error) });
  }

  deleteHostelFee(action: string, fee: HostelFee) {
    if (action === 'delete' && confirm(`Delete the ${fee.feeHeadName} charge for ${fee.hostelName}?`))
      this.api.deleteHostelFee(fee._id).subscribe({ next: () => this.saved('Hostel fee deleted.'), error: (error) => this.fail(error) });
  }

  saveCourseFee() {
    if (
      !this.selectedBookId ||
      !this.courseId ||
      !this.courseFeeHeadId ||
      !this.courseDomicileId ||
      !this.courseAcademicId ||
      !this.courseAmount
    )
      return this.error.set('Complete all required course-fee fields.');
    this.startSaving();
    this.api.createCourseFee({
      bookId: this.selectedBookId,
      courseId: this.courseId,
      feeHeadId: this.courseFeeHeadId,
      domicileId: this.courseDomicileId,
      academicId: this.courseAcademicId || null,
      academicYear: null,
      semester: this.courseSemester,
      frequency: this.courseFrequency,
      eligibilityBand: this.courseEligibility.trim() || 'All candidates',
      amount: Number(this.courseAmount),
    }).subscribe({ next: () => { this.courseAmount = null; this.saved('Course fee saved.'); }, error: (error) => this.fail(error) });
  }

  previewWorkbook(event: Event) {
    const file = (event.target as HTMLInputElement).files?.[0];
    if (!file || !this.selectedBookId || !this.importDomicileId)
      return this.error.set('Select a fee book and domicile, then choose an .xlsx file.');
    this.startSaving();
    this.api.previewCourseFeeImport(this.selectedBookId, this.importDomicileId, file).subscribe({
      next: ({ preview }) => {
        this.preview.set(preview);
        this.sheetMappings = Object.fromEntries(
          preview.sheets.map((sheet) => [
            sheet.sheetName,
            sheet.match.courseId ? [sheet.match.courseId] : [],
          ]),
        );
        this.previewPage = 1;
        this.previewPageSize = 10;
        this.previewCourseToAdd = {};
        this.headMappings = Object.fromEntries(preview.headMappings.map((head) => [head.sourceHead, head.feeHeadId || '']));
        this.message.set(`Workbook analysed: ${preview.sheets.length} sheets found.`);
        this.saving.set(false);
      },
      error: (error) => this.fail(error),
    });
  }

  commitImport() {
    const preview = this.preview();
    if (!preview) return;
    const mappedSheets = Object.values(this.sheetMappings).filter((courseIds) => courseIds.length).length;
    const mappedHeads = Object.values(this.headMappings).filter(Boolean).length;
    if (!mappedSheets || !mappedHeads) return this.error.set('Map at least one course sheet and one fee head before importing.');
    this.startSaving();
    this.api.commitCourseFeeImport({
      previewId: preview._id,
      sheetMappings: preview.sheets.map((sheet) => ({ sheetName: sheet.sheetName, courseIds: this.sheetMappings[sheet.sheetName] || [] })),
      headMappings: preview.headMappings.map((head) => ({ sourceHead: head.sourceHead, feeHeadId: this.headMappings[head.sourceHead] || null })),
      replaceExisting: this.replaceExisting,
    }).subscribe({
      next: ({ imported, mappedSheets }) => {
        this.preview.set(null);
        this.sheetMappings = {};
        this.headMappings = {};
        this.message.set(`${imported} fee rows imported from ${mappedSheets} course sheets.`);
        this.saving.set(false);
      },
      error: (error) => this.fail(error),
    });
  }

  loadHostelFees() {
    this.api.hostelFees(this.selectedBookId).subscribe({ next: ({ items }) => { this.hostelFees.set(items); this.loading.set(false); }, error: (error) => this.fail(error) });
  }

  departmentChanged() {
    this.levelId = '';
    this.courseId = '';
  }

  levelChanged() {
    this.courseId = '';
  }

  addPreviewCourse(sheetName: string) {
    const courseId = this.previewCourseToAdd[sheetName];
    if (!courseId) return;
    const current = this.sheetMappings[sheetName] || [];
    if (!current.includes(courseId)) this.sheetMappings[sheetName] = [...current, courseId];
    this.previewCourseToAdd[sheetName] = '';
  }

  removePreviewCourse(sheetName: string, courseId: string) {
    this.sheetMappings[sheetName] = (this.sheetMappings[sheetName] || []).filter(
      (value) => value !== courseId,
    );
  }

  previewMappingStatus(sheet: FeeImportPreview['sheets'][number]) {
    const selected = this.sheetMappings[sheet.sheetName] || [];
    if (!selected.length) return sheet.match.status === 'ambiguous' ? 'Ambiguous' : 'Unmapped';
    if (selected.length === 1 && selected[0] === sheet.match.courseId) return 'Auto-mapped';
    return 'Manually mapped';
  }

  courseName(courseId: string) {
    return this.courses().find((course) => course._id === courseId)?.name || 'Unknown course';
  }

  setPreviewPageSize(value: number) {
    this.previewPageSize = Number(value);
    this.previewPage = 1;
  }

  setPreviewPage(page: number) {
    this.previewPage = Math.min(Math.max(1, page), this.previewTotalPages());
  }

  viewBookChanged() {
    this.viewCollegeId = this.currentBook()?.collegeId || '';
    this.viewDepartmentId = '';
    this.viewLevelId = '';
    this.viewCourseId = '';
    this.viewDomicileId = '';
    this.courseFeeViewRecords.set([]);
  }

  viewCollegeChanged() {
    this.viewDepartmentId = '';
    this.viewLevelId = '';
    this.viewCourseId = '';
    this.courseFeeViewRecords.set([]);
  }

  viewDepartmentChanged() {
    this.viewLevelId = '';
    this.viewCourseId = '';
    this.courseFeeViewRecords.set([]);
  }

  viewLevelChanged() {
    this.viewCourseId = '';
    this.courseFeeViewRecords.set([]);
  }

  viewDomicileChanged() {
    this.courseFeeViewRecords.set([]);
  }

  loadCourseFeeView() {
    if (!this.selectedBookId || !this.viewCollegeId || !this.viewDepartmentId || !this.viewLevelId || !this.viewCourseId || !this.viewDomicileId)
      return this.error.set('Select the book, college, department, level, course and domicile.');
    this.clearNotices();
    this.loading.set(true);
    this.api.courseFees(this.selectedBookId, this.viewCourseId, this.viewDomicileId).subscribe({
      next: ({ items }) => {
        this.courseFeeViewRecords.set(items);
        this.loading.set(false);
        if (!items.length) this.message.set('No fees are configured for the selected course and book.');
      },
      error: (error) => this.fail(error),
    });
  }

  private saved(message: string) {
    this.message.set(message);
    this.saving.set(false);
    this.loadReferenceData();
  }

  private startSaving() {
    this.clearNotices();
    this.saving.set(true);
  }

  private clearNotices() {
    this.message.set('');
    this.error.set('');
  }

  private fail(error: { error?: { message?: string }; message?: string }) {
    this.error.set(error?.error?.message || error?.message || 'The request could not be completed.');
    this.loading.set(false);
    this.saving.set(false);
  }
}
