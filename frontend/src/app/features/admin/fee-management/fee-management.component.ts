import { CurrencyPipe, DatePipe } from '@angular/common';
import { CdkTrapFocus } from '@angular/cdk/a11y';
import {
  ChangeDetectionStrategy,
  Component,
  HostListener,
  OnDestroy,
  computed,
  effect,
  inject,
  signal,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LucideFilter, LucideX } from '@lucide/angular';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { map } from 'rxjs';
import { ApiService } from '../../../core/api.service';
import { ERP_PAGINATION } from '../../../core/config/data-view.constants';
import {
  CourseFee,
  CourseFeeDraft,
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
import { ConfirmDialogComponent } from '../../../shared/ui/confirm-dialog/confirm-dialog.component';
import {
  FilterPopoverComponent,
  FilterPopoverOption,
} from '../../../shared/ui/filter-popover/filter-popover.component';

type FeeSection = 'books' | 'heads' | 'hostel-fees' | 'course-fees' | 'course-fee-view';
type FeePageMode = 'create' | 'view' | 'import' | 'drafts';

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

interface FeeViewMatrixCell {
  amounts: number[];
  conflict: boolean;
  sources: string[];
}

interface FeeViewMatrixColumn {
  key: string;
  label: string;
  helper: string;
  order: number;
  total: number;
}

interface FeeViewMatrixRow {
  key: string;
  feeHeadName: string;
  category: FeeHead['category'];
  eligibilityBand: string;
  priority: number;
  total: number;
  cells: Record<string, FeeViewMatrixCell>;
}

interface FeeViewMatrix {
  key: string;
  title: string;
  description: string;
  columns: FeeViewMatrixColumn[];
  rows: FeeViewMatrixRow[];
  grandTotal: number;
}

interface CourseFeePeriod {
  key: string;
  type: 'year' | 'semester';
  number: number;
  label: string;
}

interface ConfirmDialogState {
  eyebrow: string;
  title: string;
  message: string;
  confirmLabel: string;
  destructive: boolean;
  action: () => void;
}

@Component({
  selector: 'erp-fee-management',
  imports: [
    AdminPageComponent,
    CdkTrapFocus,
    CompactActionMenuComponent,
    ConfirmDialogComponent,
    FilterPopoverComponent,
    FormsModule,
    CurrencyPipe,
    DatePipe,
    RouterLink,
    LucideFilter,
    LucideX,
  ],
  templateUrl: './fee-management.component.html',
  styleUrl: './fee-management.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FeeManagementComponent implements OnDestroy {
  private readonly api = inject(ApiService);
  private readonly route = inject(ActivatedRoute);
  private readonly router = inject(Router);
  readonly section = toSignal(
    this.route.data.pipe(map((data) => (data['section'] || 'books') as FeeSection)),
    { initialValue: 'books' as FeeSection },
  );
  readonly mode = toSignal(
    this.route.data.pipe(map((data) => (data['mode'] || 'create') as FeePageMode)),
    { initialValue: 'create' as FeePageMode },
  );
  readonly requestedCourseFeeDraftId = toSignal(
    this.route.queryParamMap.pipe(map((params) => params.get('draft') || '')),
    { initialValue: '' },
  );
  readonly isCreatePage = computed(() => this.mode() === 'create');
  readonly isViewPage = computed(() => this.mode() === 'view');
  readonly isImportPage = computed(() => this.mode() === 'import');
  readonly isDraftPage = computed(() => this.mode() === 'drafts');
  readonly createRoute = computed(
    () =>
      ({
        books: '/admin/fees/books/create',
        heads: '/admin/fees/heads/create',
        'hostel-fees': '/admin/fees/hostel-fees/create',
        'course-fees': '/admin/fees/course-fees/create',
        'course-fee-view': '/admin/fees/course-fees/create',
      })[this.section()],
  );
  readonly viewRoute = computed(
    () =>
      ({
        books: '/admin/fees/books/view',
        heads: '/admin/fees/heads/view',
        'hostel-fees': '/admin/fees/hostel-fees/view',
        'course-fees': '/admin/fees/course-fees/view',
        'course-fee-view': '/admin/fees/course-fees/view',
      })[this.section()],
  );
  readonly pageTitle = computed(
    () =>
      ({
        books: this.isViewPage() ? 'Fee Books' : 'Create Fee Book',
        heads: this.isViewPage() ? 'Fee Heads' : 'Create Fee Head',
        'hostel-fees': this.isViewPage() ? 'Hostel Fees' : 'Create Hostel Fee',
        'course-fees': this.isImportPage()
          ? 'Import Course Fees'
          : this.isDraftPage()
            ? 'Course Fee Drafts'
            : 'Create Course Fee',
        'course-fee-view': 'Course Fee View',
      })[this.section()],
  );
  readonly pageDescription = computed(
    () =>
      ({
        books: this.isViewPage()
          ? 'Search, review and manage configured fee books.'
          : 'Create a college and academic-session fee book.',
        heads: this.isViewPage()
          ? 'Review and manage fee heads for the selected book.'
          : 'Create a reusable payable, discount or payment-option head.',
        'hostel-fees': this.isViewPage()
          ? 'Review configured hostel charges by fee book.'
          : 'Set a hostel charge by seater, room type and frequency.',
        'course-fees': this.isImportPage()
          ? 'Upload, review and map the GEU fee workbook.'
          : this.isDraftPage()
            ? 'Continue incomplete course-fee work without losing entered amounts.'
            : 'Configure an individual course fee.',
        'course-fee-view': 'Review a selected course in a clear year-wise fee-head matrix.',
      })[this.section()],
  );
  readonly books = signal<FeeBook[]>([]);
  readonly heads = signal<FeeHead[]>([]);
  readonly hostelFees = signal<HostelFee[]>([]);
  readonly courseFeeViewRecords = signal<CourseFee[]>([]);
  readonly courseFeeDrafts = signal<CourseFeeDraft[]>([]);
  readonly universities = signal<MasterValue[]>([]);
  readonly colleges = signal<MasterValue[]>([]);
  readonly academicSessions = signal<MasterValue[]>([]);
  readonly departments = signal<MasterValue[]>([]);
  readonly levels = signal<MasterValue[]>([]);
  readonly courses = signal<MasterValue[]>([]);
  readonly domiciles = signal<MasterValue[]>([]);
  readonly studentTypes = signal<MasterValue[]>([]);
  readonly feeTypes = signal<MasterValue[]>([]);
  readonly countries = signal<MasterValue[]>([]);
  readonly hostels = signal<Hostel[]>([]);
  readonly preview = signal<FeeImportPreview | null>(null);
  readonly loading = signal(false);
  readonly saving = signal(false);
  readonly message = signal('');
  readonly error = signal('');
  readonly bookSelectorOpen = signal(false);
  readonly feeHeadPickerOpen = signal(false);
  readonly feeHeadPickerSearch = signal('');
  readonly selectedCourseFeeHeadIds = signal<string[]>([]);
  readonly feeMatrixAmounts = signal<Record<string, number | null>>({});
  readonly activeMatrixCell = signal('');
  readonly courseFeeDraftStatus = signal<'idle' | 'saving' | 'saved' | 'error'>('idle');
  readonly courseFeeDraftSavedAt = signal('');
  readonly courseFeeDraftResumePending = signal(false);
  readonly confirmDialog = signal<ConfirmDialogState | null>(null);
  readonly courseViewFiltersOpen = signal(false);
  private readonly courseFeeContextVersion = signal(0);
  readonly creationSuccess = signal('');
  readonly listSearch = signal('');
  readonly listStatus = signal<'all' | 'active' | 'disabled'>('all');
  readonly hostelFrequencyFilter = signal<'all' | FeeFrequency>('all');
  readonly listPage = signal<number>(ERP_PAGINATION.defaultPage);
  readonly listPageSize = signal<number>(ERP_PAGINATION.defaultPageSize);
  readonly pageSizeOptions = ERP_PAGINATION.pageSizeOptions;
  readonly statusFilterOptions: readonly FilterPopoverOption[] = [
    { label: 'All statuses', value: 'all' },
    { label: 'Active', value: 'active' },
    { label: 'Disabled', value: 'disabled' },
  ];
  readonly frequencyFilterOptions: readonly FilterPopoverOption[] = [
    { label: 'All frequencies', value: 'all' },
    { label: 'One-time', value: 'one-time' },
    { label: 'Semester wise', value: 'semester' },
    { label: 'Half-yearly', value: 'half-yearly' },
    { label: 'Yearly', value: 'yearly' },
  ];
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
  readonly draftActions: CompactActionItem[] = [
    { id: 'edit', label: 'Continue draft', icon: 'edit' },
    { id: 'delete', label: 'Delete draft', icon: 'delete', destructive: true, separator: true },
  ];

  selectedBookId = '';
  bookPickerUniversityId = '';
  bookPickerCollegeId = '';
  bookPickerSession = '';
  bookCollegeId = '';
  bookStartDate = '';
  bookEndDate = '';
  bookSession = '';
  bookCode = '';
  bookFrequency: 'semester' | 'year' = 'semester';
  headName = '';
  headCategory: FeeHead['category'] = 'fee';
  headPriority = 1;
  headDivideSemesterWise = false;
  hostelId = '';
  hostelSeater = 2;
  hostelRoomType = 'Non AC';
  hostelFeeHeadId = '';
  hostelFrequency: FeeFrequency = 'yearly';
  hostelAmount: number | null = null;
  departmentId = '';
  levelId = '';
  courseId = '';
  courseDomicileId = '';
  courseStudentTypeId = '';
  courseFeeTypeId = '';
  courseCountryId = '';
  replaceExisting = true;
  importDomicileId = '';
  importStudentTypeId = '';
  importCountryId = '';
  viewCollegeId = '';
  viewDepartmentId = '';
  viewLevelId = '';
  viewCourseId = '';
  viewDomicileId = '';
  viewStudentTypeId = '';
  viewCountryId = '';
  currentCourseFeeDraftId = '';
  previewPage = 1;
  previewPageSize = 10;
  previewCourseToAdd: Record<string, string> = {};
  sheetMappings: Record<string, string[]> = {};
  headMappings: Record<string, string> = {};
  private courseFeeDraftTimer: ReturnType<typeof setTimeout> | null = null;
  private courseFeeDraftDirty = false;
  private courseFeeDraftRequestActive = false;
  private restoringCourseFeeDraft = false;
  private componentDestroyed = false;

  readonly currentBook = () => this.books().find((book) => book._id === this.selectedBookId);
  readonly bookPickerCollegeOptions = () =>
    this.bookPickerUniversityId
      ? this.colleges().filter((college) => college.parentId === this.bookPickerUniversityId)
      : [];
  readonly bookPickerBooks = () => {
    if (!this.bookPickerUniversityId || !this.bookPickerCollegeId || !this.bookPickerSession)
      return [];
    return this.books().filter(
      (book) =>
        book.collegeId === this.bookPickerCollegeId &&
        book.academicSession.trim().toLocaleLowerCase() ===
          this.bookPickerSession.trim().toLocaleLowerCase(),
    );
  };
  readonly bookHeads = () => this.heads().filter((head) => head.bookId === this.selectedBookId);
  readonly visibleCourseFeeDrafts = computed(() =>
    this.selectedBookId
      ? this.courseFeeDrafts().filter((draft) => draft.bookId === this.selectedBookId)
      : this.courseFeeDrafts(),
  );
  readonly filteredBooks = computed(() => {
    const query = this.listSearch().trim().toLocaleLowerCase();
    const status = this.listStatus();
    return this.books().filter(
      (book) =>
        (!query ||
          [book.code, book.collegeName, book.academicSession].some((value) =>
            value.toLocaleLowerCase().includes(query),
          )) &&
        (status === 'all' || (status === 'active' ? book.isActive : !book.isActive)),
    );
  });
  readonly orderedBookHeads = computed(() =>
    [...this.bookHeads()].sort(
      (left, right) =>
        (left.priority || 9999) - (right.priority || 9999) || left.name.localeCompare(right.name),
    ),
  );
  readonly filteredHeads = computed(() => {
    const query = this.listSearch().trim().toLocaleLowerCase();
    const status = this.listStatus();
    return this.orderedBookHeads().filter(
      (head) =>
        (!query ||
          [head.name, head.category, head.bookCode].some((value) =>
            value.toLocaleLowerCase().includes(query),
          )) &&
        (status === 'all' || (status === 'active' ? head.isActive : !head.isActive)),
    );
  });
  readonly filteredHostelFees = computed(() => {
    const query = this.listSearch().trim().toLocaleLowerCase();
    const frequency = this.hostelFrequencyFilter();
    return this.hostelFees().filter(
      (fee) =>
        (!query ||
          [fee.hostelName, fee.roomType, fee.feeHeadName, String(fee.seater)].some((value) =>
            value.toLocaleLowerCase().includes(query),
          )) &&
        (frequency === 'all' || fee.frequency === frequency),
    );
  });
  readonly activeListCount = computed(() => {
    if (this.section() === 'books') return this.filteredBooks().length;
    if (this.section() === 'heads') return this.filteredHeads().length;
    if (this.section() === 'hostel-fees') return this.filteredHostelFees().length;
    return 0;
  });
  readonly listTotalPages = computed(() =>
    Math.max(1, Math.ceil(this.activeListCount() / this.listPageSize())),
  );
  readonly safeListPage = computed(() => Math.min(this.listPage(), this.listTotalPages()));
  readonly pagedBooks = computed(() => this.pageSlice(this.filteredBooks()));
  readonly pagedHeads = computed(() => this.pageSlice(this.filteredHeads()));
  readonly pagedHostelFees = computed(() => this.pageSlice(this.filteredHostelFees()));
  readonly departmentOptions = () => {
    const collegeId = this.currentBook()?.collegeId;
    return collegeId ? this.departments().filter((item) => item.parentId === collegeId) : [];
  };
  readonly levelOptions = () => this.levels().filter((item) => item.parentId === this.departmentId);
  readonly courseOptions = () => this.courses().filter((item) => item.parentId === this.levelId);
  readonly selectedCourse = () => this.courses().find((course) => course._id === this.courseId);
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
  readonly selectedCourseStudentType = () =>
    this.studentTypes().find((studentType) => studentType._id === this.courseStudentTypeId);
  readonly selectedCourseDomicile = () =>
    this.domiciles().find((domicile) => domicile._id === this.courseDomicileId);
  readonly selectedCourseFeeType = () =>
    this.feeTypes().find((feeType) => feeType._id === this.courseFeeTypeId);
  readonly selectedImportStudentType = () =>
    this.studentTypes().find((studentType) => studentType._id === this.importStudentTypeId);
  readonly selectedImportDomicile = () =>
    this.domiciles().find((domicile) => domicile._id === this.importDomicileId);
  readonly selectedViewStudentType = () =>
    this.studentTypes().find((studentType) => studentType._id === this.viewStudentTypeId);
  readonly selectedViewDomicile = () =>
    this.domiciles().find((domicile) => domicile._id === this.viewDomicileId);
  readonly courseRequiresCountry = () =>
    this.requiresCountry(this.selectedCourseStudentType(), this.selectedCourseDomicile());
  readonly importRequiresCountry = () =>
    this.requiresCountry(this.selectedImportStudentType(), this.selectedImportDomicile());
  readonly viewRequiresCountry = () =>
    this.requiresCountry(this.selectedViewStudentType(), this.selectedViewDomicile());
  readonly selectedCourseFeeHeads = computed(() => {
    const selectedIds = new Set(this.selectedCourseFeeHeadIds());
    return this.orderedBookHeads().filter((head) => selectedIds.has(head._id));
  });
  readonly activeCourseFeeHeads = computed(() =>
    this.orderedBookHeads().filter((head) => head.isActive),
  );
  readonly courseFeePeriodType = computed<'year' | 'semester' | null>(() => {
    this.courseFeeContextVersion();
    const feeType = this.selectedCourseFeeType();
    if (!feeType) return null;
    if (/semester|sem/i.test(feeType.name)) return 'semester';
    if (/year|annual/i.test(feeType.name)) return 'year';
    const configured = feeType.metadata?.['periodType'];
    if (configured === 'year' || configured === 'semester') return configured;
    return null;
  });
  readonly courseFeePeriods = computed<CourseFeePeriod[]>(() => {
    this.courseFeeContextVersion();
    const metadata = this.selectedCourse()?.metadata || {};
    const feePattern = this.courseFeePeriodType();
    if (!feePattern) return [];
    const configuredCount =
      feePattern === 'year'
        ? Number(metadata['durationYears'] || 4)
        : Number(metadata['totalSemesters'] || Number(metadata['durationYears'] || 4) * 2);
    const count = Math.max(1, Math.min(20, configuredCount || 1));
    return Array.from({ length: count }, (_, index) => {
      const number = index + 1;
      return {
        key: `${feePattern}-${number}`,
        type: feePattern,
        number,
        label: feePattern === 'year' ? `${this.ordinal(number)} Year` : `Sem ${number}`,
      };
    });
  });
  readonly allCourseFeeHeadsSelected = computed(
    () =>
      !!this.activeCourseFeeHeads().length &&
      this.selectedCourseFeeHeadIds().length === this.activeCourseFeeHeads().length,
  );
  readonly populatedMatrixCellCount = computed(
    () => Object.values(this.feeMatrixAmounts()).filter((value) => Number(value) > 0).length,
  );
  readonly matrixGrandTotal = computed(() =>
    Object.values(this.feeMatrixAmounts()).reduce<number>(
      (total, value) => total + Math.max(0, Number(value) || 0),
      0,
    ),
  );
  readonly courseFeeHeadPickerLabel = computed(() => {
    const selected = this.selectedCourseFeeHeads();
    if (!selected.length) return 'Select fee heads';
    if (this.allCourseFeeHeadsSelected()) return 'All active fee heads';
    if (selected.length === 1) return selected[0].name;
    return `${selected.length} fee heads selected`;
  });
  readonly courseFeeHeadPickerHint = computed(() => {
    const selected = this.selectedCourseFeeHeads();
    if (!selected.length) return 'Choose one, multiple, or all heads';
    if (this.allCourseFeeHeadsSelected()) return `${selected.length} heads will be applied`;
    return selected.map((head) => head.name).join(', ');
  });
  readonly filteredCourseFeeHeads = computed(() => {
    const query = this.feeHeadPickerSearch().trim().toLocaleLowerCase();
    return this.activeCourseFeeHeads().filter(
      (head) =>
        !query ||
        [head.name, head.category].some((value) => value.toLocaleLowerCase().includes(query)),
    );
  });
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
    const headPriority = new Map(this.heads().map((head) => [head._id, head.priority || 9999]));
    const groups = new Map<
      string,
      { label: string; description: string; order: number; fees: CourseFee[] }
    >();
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
        const eligibilityBands = [
          ...new Set(group.fees.map((fee) => fee.eligibilityBand || 'All candidates')),
        ].sort(
          (left, right) =>
            Number(left !== 'All candidates') - Number(right !== 'All candidates') ||
            left.localeCompare(right),
        );
        const rowGroups = new Map<string, CourseFee[]>();
        for (const fee of group.fees) {
          const rowKey = `${fee.feeHeadId}|${fee.frequency}|${fee.semester || ''}`;
          rowGroups.set(rowKey, [...(rowGroups.get(rowKey) || []), fee]);
        }
        const rows = [...rowGroups.entries()]
          .map(([rowKey, fees]) => {
            const first = fees[0];
            return {
              key: rowKey,
              feeHeadName: first.feeHeadName,
              category: first.category,
              frequency: first.frequency,
              semester: first.semester,
              cells: eligibilityBands.map((eligibilityBand) => {
                const amounts = [
                  ...new Set(
                    fees
                      .filter(
                        (fee) => (fee.eligibilityBand || 'All candidates') === eligibilityBand,
                      )
                      .map((fee) => fee.amount),
                  ),
                ].sort((a, b) => a - b);
                return { eligibilityBand, amounts, conflict: amounts.length > 1 };
              }),
              sources: [
                ...new Set(
                  fees.map((fee) =>
                    fee.source === 'excel' ? `Excel: ${fee.sourceSheet}` : 'Manual',
                  ),
                ),
              ],
            } satisfies FeeViewRow;
          })
          .sort(
            (left, right) =>
              Number(left.category === 'discount') - Number(right.category === 'discount') ||
              (headPriority.get(left.key.split('|')[0]) || 9999) -
                (headPriority.get(right.key.split('|')[0]) || 9999) ||
              left.feeHeadName.localeCompare(right.feeHeadName),
          );
        return { key, ...group, eligibilityBands, rows };
      })
      .sort((left, right) => left.order - right.order);
  });
  readonly feeViewMatrices = computed<FeeViewMatrix[]>(() => {
    const records = this.courseFeeViewRecords();
    const headPriority = new Map(this.heads().map((head) => [head._id, head.priority || 9999]));
    const matrixBuckets = new Map<CourseFee['periodType'], CourseFee[]>();
    for (const fee of records) {
      matrixBuckets.set(fee.periodType, [...(matrixBuckets.get(fee.periodType) || []), fee]);
    }

    return [...matrixBuckets.entries()]
      .map(([periodType, fees]) => {
        const columns = new Map<string, FeeViewMatrixColumn>();
        const rows = new Map<string, FeeViewMatrixRow>();

        for (const fee of fees) {
          const columnKey =
            periodType === 'semester'
              ? `semester-${fee.semester || fee.academicYear || 0}`
              : `year-${fee.academicYear || fee.semester || fee.academicName || 'one-time'}`;
          const periodNumber =
            periodType === 'semester'
              ? fee.semester || fee.academicYear || 0
              : fee.academicYear || fee.semester || 0;
          const columnLabel =
            periodType === 'semester'
              ? `Sem ${periodNumber || '—'}`
              : fee.academicYear
                ? `Year ${fee.academicYear}`
                : fee.academicName || 'One-time';
          const columnHelper = periodType === 'semester' ? 'Semester fee' : 'Academic year fee';
          columns.set(
            columnKey,
            columns.get(columnKey) || {
              key: columnKey,
              label: columnLabel,
              helper: columnHelper,
              order: periodNumber || 999,
              total: 0,
            },
          );

          const eligibilityBand = fee.eligibilityBand || 'All candidates';
          const rowKey = `${fee.feeHeadId}|${eligibilityBand}`;
          const row = rows.get(rowKey) || {
            key: rowKey,
            feeHeadName: fee.feeHeadName,
            category: fee.category,
            eligibilityBand,
            priority: headPriority.get(fee.feeHeadId) || 9999,
            total: 0,
            cells: {},
          };
          const cell = row.cells[columnKey] || { amounts: [], conflict: false, sources: [] };
          if (!cell.amounts.includes(fee.amount)) cell.amounts.push(fee.amount);
          const source =
            fee.source === 'excel'
              ? `Excel${fee.sourceSheet ? `: ${fee.sourceSheet}` : ''}`
              : 'Manual';
          if (!cell.sources.includes(source)) cell.sources.push(source);
          cell.amounts.sort((left, right) => left - right);
          cell.conflict = cell.amounts.length > 1;
          row.cells[columnKey] = cell;
          rows.set(rowKey, row);
        }

        const sortedColumns = [...columns.values()].sort(
          (left, right) => left.order - right.order || left.label.localeCompare(right.label),
        );
        const sortedRows = [...rows.values()]
          .map((row) => ({
            ...row,
            total: sortedColumns.reduce(
              (total, column) =>
                total +
                (row.cells[column.key]?.amounts || []).reduce((sum, amount) => sum + amount, 0),
              0,
            ),
          }))
          .sort(
            (left, right) =>
              Number(left.category === 'discount') - Number(right.category === 'discount') ||
              left.priority - right.priority ||
              left.feeHeadName.localeCompare(right.feeHeadName) ||
              left.eligibilityBand.localeCompare(right.eligibilityBand),
          );

        const columnsWithTotals = sortedColumns.map((column) => ({
          ...column,
          total: sortedRows.reduce(
            (total, row) =>
              total +
              (row.cells[column.key]?.amounts || []).reduce((sum, amount) => sum + amount, 0),
            0,
          ),
        }));

        return {
          key: periodType,
          title:
            periodType === 'semester' ? 'Semester-wise fee structure' : 'Year-wise fee structure',
          description:
            periodType === 'semester'
              ? 'Compare every fee head across semesters in one horizontal matrix.'
              : 'Compare every fee head across academic years in one horizontal matrix.',
          columns: columnsWithTotals,
          rows: sortedRows,
          grandTotal: sortedRows.reduce((total, row) => total + row.total, 0),
        } satisfies FeeViewMatrix;
      })
      .sort((left, right) => Number(left.key === 'semester') - Number(right.key === 'semester'));
  });

  constructor() {
    effect(() => {
      this.section();
      this.mode();
      const requestedDraftId = this.requestedCourseFeeDraftId();
      const shouldResumeDraft =
        this.section() === 'course-fees' && this.isCreatePage() && !!requestedDraftId;
      if (!shouldResumeDraft) this.courseFeeDraftResumePending.set(false);
      if (shouldResumeDraft && requestedDraftId !== this.currentCourseFeeDraftId) {
        this.courseFeeDraftResumePending.set(true);
        const cachedDraft = this.takeCachedCourseFeeDraft(requestedDraftId);
        if (cachedDraft) this.restoreCourseFeeDraft(cachedDraft);
      }
      this.listSearch.set('');
      this.listStatus.set('all');
      this.hostelFrequencyFilter.set('all');
      this.listPage.set(1);
      this.loadReferenceData();
    });
  }

  ngOnDestroy() {
    this.componentDestroyed = true;
    if (this.courseFeeDraftTimer) clearTimeout(this.courseFeeDraftTimer);
    if (this.courseFeeDraftDirty) this.saveCourseFeeDraftNow();
  }

  loadReferenceData() {
    this.clearNotices();
    this.loading.set(true);
    this.api.feeBooks().subscribe({
      next: ({ items }) => {
        this.books.set(items);
        const editBookId = this.route.snapshot.paramMap.get('id');
        if (this.section() === 'books' && editBookId) {
          const editBook = items.find((book) => book._id === editBookId);
          if (editBook) this.beginBookEdit(editBook);
        }
        this.loadSectionData();
        if (this.section() === 'course-fees' || this.section() === 'course-fee-view') {
          this.loadCourseFeeDrafts();
        }
      },
      error: (error) => this.fail(error),
    });
    this.api
      .masterValues('university', { active: true })
      .subscribe(({ items }) => this.universities.set(items));
    this.api
      .masterValues('college', { active: true })
      .subscribe(({ items }) => this.colleges.set(items));
    this.api
      .masterValues('academic', { active: true })
      .subscribe(({ items }) => this.academicSessions.set(items));
    this.api
      .masterValues('department', { active: true })
      .subscribe(({ items }) => this.departments.set(items));
    this.api
      .masterValues('level', { active: true })
      .subscribe(({ items }) => this.levels.set(items));
    this.api
      .masterValues('domicile', { active: true })
      .subscribe(({ items }) => this.domiciles.set(items));
    this.api
      .masterValues('student-type', { active: true })
      .subscribe(({ items }) => this.studentTypes.set(items));
    this.loadFeeTypes();
    this.api
      .masterValues('country', { active: true })
      .subscribe(({ items }) => this.countries.set(items));
    this.api.feeCourseOptions().subscribe(({ items }) => this.courses.set(items));
    if (this.section() === 'hostel-fees')
      this.api.hostels().subscribe(({ items }) => this.hostels.set(items));
  }

  loadSectionData() {
    this.api.feeHeads().subscribe({
      next: ({ items }) => {
        this.heads.set(items);
        const editHeadId = this.route.snapshot.paramMap.get('id');
        if (this.section() === 'heads' && editHeadId) {
          const editHead = items.find((head) => head._id === editHeadId);
          if (editHead) this.beginHeadEdit(editHead);
        }
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

  loadCourseFeeDrafts() {
    this.api.courseFeeDrafts().subscribe({
      next: ({ items }) => {
        this.courseFeeDrafts.set(items);
        const requestedDraftId = this.requestedCourseFeeDraftId();
        if (
          requestedDraftId &&
          this.section() === 'course-fees' &&
          this.isCreatePage() &&
          requestedDraftId !== this.currentCourseFeeDraftId
        ) {
          const draft = items.find((item) => item._id === requestedDraftId);
          if (draft) this.restoreCourseFeeDraft(draft);
          else this.loadCourseFeeDraft(requestedDraftId);
        } else if (requestedDraftId && requestedDraftId === this.currentCourseFeeDraftId) {
          this.courseFeeDraftResumePending.set(false);
        }
      },
      error: (error) => this.fail(error),
    });
  }

  loadCourseFeeDraft(draftId: string) {
    this.api.courseFeeDraft(draftId).subscribe({
      next: ({ item }) => this.restoreCourseFeeDraft(item),
      error: (error) => {
        this.courseFeeDraftResumePending.set(false);
        this.fail(error);
      },
    });
  }

  requestConfirmation(options: ConfirmDialogState) {
    this.confirmDialog.set(options);
  }

  cancelConfirmation() {
    this.confirmDialog.set(null);
  }

  confirmRequestedAction() {
    const dialog = this.confirmDialog();
    if (!dialog) return;
    this.confirmDialog.set(null);
    dialog.action();
  }

  bookChanged() {
    this.listPage.set(1);
    this.preview.set(null);
    this.sheetMappings = {};
    this.headMappings = {};
    this.departmentId = '';
    this.levelId = '';
    this.courseId = '';
    this.courseDomicileId = '';
    this.courseStudentTypeId = '';
    this.courseFeeTypeId = '';
    this.courseCountryId = '';
    this.refreshCourseFeeContext();
    this.clearCourseFeeHead();
    if (this.section() === 'heads' && !this.editingHead())
      this.headPriority = this.orderedBookHeads().length + 1;
    if (this.section() === 'course-fee-view') this.viewBookChanged();
    if (this.section() === 'hostel-fees') this.loadHostelFees();
    this.scheduleCourseFeeDraftSave();
  }

  selectFeeBook(bookId: string) {
    this.selectedBookId = bookId;
    this.bookSelectorOpen.set(false);
    this.bookChanged();
  }

  openBookSelector() {
    const current = this.currentBook();
    const college = current ? this.colleges().find((item) => item._id === current.collegeId) : null;
    this.bookPickerUniversityId = college?.parentId || '';
    this.bookPickerCollegeId = current?.collegeId || '';
    this.bookPickerSession = current?.academicSession || '';
    this.bookSelectorOpen.set(true);
  }

  bookPickerUniversityChanged() {
    this.bookPickerCollegeId = '';
    this.bookPickerSession = '';
  }

  bookPickerCollegeChanged() {
    this.bookPickerSession = '';
  }

  resumeCourseFeeDraft(draft: CourseFeeDraft) {
    this.courseFeeDraftResumePending.set(true);
    this.cacheCourseFeeDraft(draft);
    this.restoreCourseFeeDraft(draft);
    this.bookSelectorOpen.set(false);
    this.feeHeadPickerOpen.set(false);
    this.clearNotices();
    this.router.navigate(['/admin/fees/course-fees/create'], {
      queryParams: { draft: draft._id },
      state: { courseFeeDraft: draft },
    });
  }

  handleCourseFeeDraftAction(action: string, draft: CourseFeeDraft) {
    if (action === 'edit') {
      this.resumeCourseFeeDraft(draft);
      return;
    }
    if (action === 'delete') {
      this.requestConfirmation({
        eyebrow: 'Fee Management',
        title: 'Delete draft?',
        message: `Delete draft for ${draft.courseName || draft.bookCode}? This cannot be undone.`,
        confirmLabel: 'Delete draft',
        destructive: true,
        action: () => {
          this.api.deleteCourseFeeDraft(draft._id).subscribe({
            next: () => {
              this.courseFeeDrafts.update((items) =>
                items.filter((item) => item._id !== draft._id),
              );
              this.saved('Course-fee draft deleted.');
            },
            error: (error) => this.fail(error),
          });
        },
      });
    }
  }

  draftAmountCount(draft: CourseFeeDraft) {
    return Object.values(draft.matrixAmounts || {}).filter((value) => Number(value) > 0).length;
  }

  scheduleCourseFeeDraftSave() {
    if (
      this.restoringCourseFeeDraft ||
      this.section() !== 'course-fees' ||
      !this.isCreatePage() ||
      !this.selectedBookId
    )
      return;
    this.courseFeeDraftDirty = true;
    this.courseFeeDraftStatus.set('saving');
    if (this.courseFeeDraftTimer) clearTimeout(this.courseFeeDraftTimer);
    this.courseFeeDraftTimer = setTimeout(() => this.saveCourseFeeDraftNow(), 700);
  }

  private saveCourseFeeDraftNow() {
    if (!this.selectedBookId || this.courseFeeDraftRequestActive || !this.courseFeeDraftDirty)
      return;
    this.courseFeeDraftDirty = false;
    this.courseFeeDraftRequestActive = true;
    if (!this.componentDestroyed) this.courseFeeDraftStatus.set('saving');
    const payload = {
      bookId: this.selectedBookId,
      departmentId: this.departmentId,
      levelId: this.levelId,
      courseId: this.courseId,
      domicileId: this.courseDomicileId,
      studentTypeId: this.courseStudentTypeId,
      feeTypeId: this.courseFeeTypeId,
      countryId: this.courseCountryId,
      selectedFeeHeadIds: this.selectedCourseFeeHeadIds(),
      matrixAmounts: this.feeMatrixAmounts(),
    };
    const request = this.currentCourseFeeDraftId
      ? this.api.updateCourseFeeDraft(this.currentCourseFeeDraftId, payload)
      : this.api.createCourseFeeDraft(payload);
    request.subscribe({
      next: ({ item }) => {
        this.currentCourseFeeDraftId = item._id;
        this.courseFeeDraftRequestActive = false;
        this.courseFeeDrafts.update((items) => [
          item,
          ...items.filter((draft) => draft._id !== item._id),
        ]);
        if (!this.componentDestroyed) {
          this.courseFeeDraftStatus.set('saved');
          this.courseFeeDraftSavedAt.set(item.updatedAt);
          if (this.route.snapshot.queryParamMap.get('draft') !== item._id) {
            this.router.navigate([], {
              relativeTo: this.route,
              queryParams: { draft: item._id },
              queryParamsHandling: 'merge',
              replaceUrl: true,
            });
          }
        }
        if (this.courseFeeDraftDirty) this.scheduleCourseFeeDraftSave();
      },
      error: () => {
        this.courseFeeDraftRequestActive = false;
        this.courseFeeDraftDirty = true;
        if (!this.componentDestroyed) this.courseFeeDraftStatus.set('error');
      },
    });
  }

  private refreshCourseFeeContext() {
    this.courseFeeContextVersion.update((version) => version + 1);
  }

  private restoreCourseFeeDraft(draft: CourseFeeDraft) {
    this.restoringCourseFeeDraft = true;
    this.currentCourseFeeDraftId = draft._id;
    this.selectedBookId = draft.bookId;
    this.bookSelectorOpen.set(false);
    this.feeHeadPickerOpen.set(false);
    this.departmentId = draft.departmentId || '';
    this.levelId = draft.levelId || '';
    this.courseId = draft.courseId || '';
    this.courseDomicileId = draft.domicileId || '';
    this.courseStudentTypeId = draft.studentTypeId || '';
    this.courseFeeTypeId = draft.feeTypeId || '';
    this.courseCountryId = draft.countryId || '';
    this.selectedCourseFeeHeadIds.set(draft.selectedFeeHeadIds || []);
    this.feeMatrixAmounts.set(draft.matrixAmounts || {});
    this.courseFeeDraftStatus.set('saved');
    this.courseFeeDraftSavedAt.set(draft.updatedAt);
    this.refreshCourseFeeContext();
    this.courseFeeDraftResumePending.set(false);
    this.restoringCourseFeeDraft = false;
  }

  private cacheCourseFeeDraft(draft: CourseFeeDraft) {
    try {
      sessionStorage.setItem(`erp-course-fee-draft:${draft._id}`, JSON.stringify(draft));
    } catch {
      // Draft resume still works through the API if browser storage is unavailable.
    }
  }

  private takeCachedCourseFeeDraft(draftId: string) {
    try {
      const rawDraft = sessionStorage.getItem(`erp-course-fee-draft:${draftId}`);
      if (!rawDraft) return null;
      sessionStorage.removeItem(`erp-course-fee-draft:${draftId}`);
      return JSON.parse(rawDraft) as CourseFeeDraft;
    } catch {
      return null;
    }
  }

  openFeeHeadPicker() {
    if (!this.selectedBookId) {
      this.error.set('Select a fee book before choosing a fee head.');
      return;
    }
    this.feeHeadPickerSearch.set('');
    this.feeHeadPickerOpen.set(true);
  }

  selectCourseFeeHead(headId: string) {
    const selected = new Set(this.selectedCourseFeeHeadIds());
    if (selected.has(headId)) selected.delete(headId);
    else selected.add(headId);
    this.selectedCourseFeeHeadIds.set([...selected]);
    this.scheduleCourseFeeDraftSave();
  }

  selectAllCourseFeeHeads() {
    const activeIds = this.activeCourseFeeHeads().map((head) => head._id);
    this.selectedCourseFeeHeadIds.set(this.allCourseFeeHeadsSelected() ? [] : activeIds);
    this.scheduleCourseFeeDraftSave();
  }

  clearCourseFeeHead() {
    this.selectedCourseFeeHeadIds.set([]);
  }

  feeHeadSelected(headId: string) {
    return this.selectedCourseFeeHeadIds().includes(headId);
  }

  updateListSearch(value: string) {
    this.listSearch.set(value);
    this.listPage.set(1);
  }

  updateListStatus(value: 'all' | 'active' | 'disabled') {
    this.listStatus.set(value);
    this.listPage.set(1);
  }

  updateHostelFrequency(value: 'all' | FeeFrequency) {
    this.hostelFrequencyFilter.set(value);
    this.listPage.set(1);
  }

  updateListPageSize(value: number | string) {
    this.listPageSize.set(Number(value));
    this.listPage.set(1);
  }

  setListPage(page: number) {
    this.listPage.set(Math.min(Math.max(1, page), this.listTotalPages()));
  }

  @HostListener('document:keydown.escape')
  closeBookSelector() {
    this.bookSelectorOpen.set(false);
    this.feeHeadPickerOpen.set(false);
  }

  saveBook() {
    if (
      !this.bookCollegeId ||
      !this.bookStartDate ||
      !this.bookEndDate ||
      !this.bookSession.trim() ||
      !this.bookCode.trim()
    )
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
        this.completedCreation('Fee book saved successfully.');
      },
      error: (error) => this.fail(error),
    });
  }

  handleBookAction(action: string, book: FeeBook) {
    if (action === 'edit') {
      void this.router.navigate(['/admin/fees/books', book._id, 'edit']);
    } else if (action === 'delete') {
      this.requestConfirmation({
        eyebrow: 'Fee Management',
        title: 'Delete fee book?',
        message: `Delete fee book ${book.code}? Related records may depend on this book.`,
        confirmLabel: 'Delete book',
        destructive: true,
        action: () => {
          this.api.deleteFeeBook(book._id).subscribe({
            next: () => this.saved('Fee book deleted.'),
            error: (error) => this.fail(error),
          });
        },
      });
    }
  }

  private beginBookEdit(book: FeeBook) {
    this.editingBook.set(book);
    this.bookCollegeId = book.collegeId;
    this.bookStartDate = book.startDate;
    this.bookEndDate = book.endDate;
    this.bookSession = book.academicSession;
    this.bookCode = book.code;
    this.bookFrequency = book.frequency;
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
    if (!this.selectedBookId || !this.headName.trim())
      return this.error.set('Select a fee book and enter the fee-head name.');
    if (!Number.isInteger(Number(this.headPriority)) || Number(this.headPriority) < 1)
      return this.error.set('Priority must be a whole number starting from 1.');
    this.startSaving();
    const request = this.editingHead()
      ? this.api.updateFeeHead(this.editingHead()!._id, {
          name: this.headName.trim(),
          category: this.headCategory,
          priority: Number(this.headPriority),
          divideSemesterWise: this.headDivideSemesterWise,
        })
      : this.api.createFeeHead({
          bookId: this.selectedBookId,
          name: this.headName.trim(),
          category: this.headCategory,
          priority: Number(this.headPriority),
          divideSemesterWise: this.headDivideSemesterWise,
        });
    request.subscribe({
      next: () => {
        this.resetHead();
        this.completedCreation('Fee head saved successfully.');
      },
      error: (error) => this.fail(error),
    });
  }

  handleHeadAction(action: string, head: FeeHead) {
    if (action === 'edit') {
      void this.router.navigate(['/admin/fees/heads', head._id, 'edit']);
    } else if (action === 'delete') {
      this.requestConfirmation({
        eyebrow: 'Fee Management',
        title: 'Delete fee head?',
        message: `Delete ${head.name}? This fee head will no longer be available for future fee setup.`,
        confirmLabel: 'Delete head',
        destructive: true,
        action: () => {
          this.api.deleteFeeHead(head._id).subscribe({
            next: () => this.saved('Fee head deleted.'),
            error: (error) => this.fail(error),
          });
        },
      });
    }
  }

  private beginHeadEdit(head: FeeHead) {
    this.editingHead.set(head);
    this.selectedBookId = head.bookId;
    this.headName = head.name;
    this.headCategory = head.category;
    this.headPriority = Number(head.priority || 1);
    this.headDivideSemesterWise = Boolean(head.divideSemesterWise);
  }

  resetHead() {
    this.editingHead.set(null);
    this.headName = '';
    this.headCategory = 'fee';
    this.headPriority = this.orderedBookHeads().length + 1;
    this.headDivideSemesterWise = false;
  }

  saveHostelFee() {
    if (!this.selectedBookId || !this.hostelId || !this.hostelFeeHeadId || !this.hostelAmount)
      return this.error.set('Complete all required hostel-fee fields.');
    this.startSaving();
    this.api
      .createHostelFee({
        bookId: this.selectedBookId,
        hostelId: this.hostelId,
        seater: Number(this.hostelSeater),
        roomType: this.hostelRoomType.trim(),
        feeHeadId: this.hostelFeeHeadId,
        frequency: this.hostelFrequency,
        amount: Number(this.hostelAmount),
      })
      .subscribe({
        next: () => {
          this.hostelAmount = null;
          this.completedCreation('Hostel fee saved successfully.');
        },
        error: (error) => this.fail(error),
      });
  }

  deleteHostelFee(action: string, fee: HostelFee) {
    if (action === 'delete') {
      this.requestConfirmation({
        eyebrow: 'Fee Management',
        title: 'Delete hostel fee?',
        message: `Delete the ${fee.feeHeadName} charge for ${fee.hostelName}?`,
        confirmLabel: 'Delete fee',
        destructive: true,
        action: () => {
          this.api.deleteHostelFee(fee._id).subscribe({
            next: () => this.saved('Hostel fee deleted.'),
            error: (error) => this.fail(error),
          });
        },
      });
    }
  }

  saveCourseFee() {
    if (
      !this.selectedBookId ||
      !this.courseId ||
      !this.courseDomicileId ||
      !this.courseStudentTypeId ||
      !this.courseFeeTypeId ||
      (this.courseRequiresCountry() && !this.courseCountryId)
    )
      return this.error.set(
        'Select department, level, course, domicile, student type, fee type and required country.',
      );
    if (!this.courseFeePeriodType())
      return this.error.set('Selected fee type must represent Yearly or Semester fees.');
    const rows = this.selectedCourseFeeHeadIds()
      .map((feeHeadId) => ({
        feeHeadId,
        amounts: this.courseFeePeriods()
          .map((period) => ({
            periodType: period.type,
            periodNumber: period.number,
            amount: Number(this.feeMatrixAmounts()[this.feeMatrixKey(feeHeadId, period.key)] || 0),
          }))
          .filter((cell) => cell.amount > 0),
      }))
      .filter((row) => row.amounts.length);
    if (!rows.length)
      return this.error.set('Select at least one fee head and enter an amount in the matrix.');
    if (this.courseFeeDraftStatus() === 'saving')
      return this.error.set('Please wait for the current draft save to finish.');
    if (this.courseFeeDraftTimer) clearTimeout(this.courseFeeDraftTimer);
    this.courseFeeDraftDirty = false;
    this.startSaving();
    this.api
      .saveCourseFeeMatrix({
        bookId: this.selectedBookId,
        courseId: this.courseId,
        domicileId: this.courseDomicileId,
        studentTypeId: this.courseStudentTypeId,
        feeTypeId: this.courseFeeTypeId,
        countryId: this.courseRequiresCountry() ? this.courseCountryId : null,
        replaceExisting: true,
        rows,
      })
      .subscribe({
        next: ({ saved }) => this.completeCourseFeePublish(saved),
        error: (error) => this.fail(error),
      });
  }

  private completeCourseFeePublish(saved: number) {
    const finish = () => {
      this.currentCourseFeeDraftId = '';
      this.courseFeeDraftStatus.set('idle');
      this.courseFeeDraftSavedAt.set('');
      void this.router
        .navigate([], {
          relativeTo: this.route,
          queryParams: { draft: null },
          queryParamsHandling: 'merge',
          replaceUrl: true,
        })
        .then(() => this.completedCreation(`${saved} course-fee amount(s) saved successfully.`));
    };
    if (!this.currentCourseFeeDraftId) return finish();
    this.api.deleteCourseFeeDraft(this.currentCourseFeeDraftId).subscribe({
      next: finish,
      error: finish,
    });
  }

  previewWorkbook(event: Event) {
    const file = (event.target as HTMLInputElement).files?.[0];
    if (
      !file ||
      !this.selectedBookId ||
      !this.importDomicileId ||
      !this.importStudentTypeId ||
      (this.importRequiresCountry() && !this.importCountryId)
    )
      return this.error.set(
        'Select a fee book, domicile, student type and required country, then choose an .xlsx file.',
      );
    this.startSaving();
    this.api
      .previewCourseFeeImport(
        this.selectedBookId,
        this.importDomicileId,
        this.importStudentTypeId,
        this.importRequiresCountry() ? this.importCountryId : '',
        file,
      )
      .subscribe({
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
          this.headMappings = Object.fromEntries(
            preview.headMappings.map((head) => [head.sourceHead, head.feeHeadId || '']),
          );
          this.message.set(`Workbook analysed: ${preview.sheets.length} sheets found.`);
          this.saving.set(false);
        },
        error: (error) => this.fail(error),
      });
  }

  commitImport() {
    const preview = this.preview();
    if (!preview) return;
    const mappedSheets = Object.values(this.sheetMappings).filter(
      (courseIds) => courseIds.length,
    ).length;
    const mappedHeads = Object.values(this.headMappings).filter(Boolean).length;
    if (!mappedSheets || !mappedHeads)
      return this.error.set('Map at least one course sheet and one fee head before importing.');
    this.startSaving();
    this.api
      .commitCourseFeeImport({
        previewId: preview._id,
        sheetMappings: preview.sheets.map((sheet) => ({
          sheetName: sheet.sheetName,
          courseIds: this.sheetMappings[sheet.sheetName] || [],
        })),
        headMappings: preview.headMappings.map((head) => ({
          sourceHead: head.sourceHead,
          feeHeadId: this.headMappings[head.sourceHead] || null,
        })),
        replaceExisting: this.replaceExisting,
      })
      .subscribe({
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
    this.api.hostelFees(this.selectedBookId).subscribe({
      next: ({ items }) => {
        this.hostelFees.set(items);
        this.loading.set(false);
      },
      error: (error) => this.fail(error),
    });
  }

  departmentChanged() {
    this.levelId = '';
    this.courseId = '';
    this.refreshCourseFeeContext();
    this.clearCourseFeeMatrix();
    this.scheduleCourseFeeDraftSave();
  }

  levelChanged() {
    this.courseId = '';
    this.refreshCourseFeeContext();
    this.clearCourseFeeMatrix();
    this.scheduleCourseFeeDraftSave();
  }

  courseChanged() {
    this.refreshCourseFeeContext();
    this.clearCourseFeeMatrix();
    this.scheduleCourseFeeDraftSave();
  }

  courseFeeTypeChanged() {
    this.refreshCourseFeeContext();
    this.clearCourseFeeMatrix();
    this.scheduleCourseFeeDraftSave();
  }

  loadFeeTypes() {
    this.api.masterValues('fee-type', { active: true }).subscribe({
      next: ({ items }) => this.feeTypes.set(items),
      error: (error) => this.fail(error),
    });
  }

  feeMatrixKey(headId: string, periodKey: string) {
    return `${headId}__${periodKey}`;
  }

  matrixCellKey(headId: string, periodKey: string) {
    return this.feeMatrixKey(headId, periodKey);
  }

  feeMatrixValue(headId: string, periodKey: string) {
    return this.feeMatrixAmounts()[this.feeMatrixKey(headId, periodKey)] ?? null;
  }

  updateFeeMatrixAmount(headId: string, periodKey: string, value: string | number) {
    const amount = value === '' || value === null ? null : Number(value);
    this.feeMatrixAmounts.update((amounts) => ({
      ...amounts,
      [this.feeMatrixKey(headId, periodKey)]: Number.isFinite(amount as number) ? amount : null,
    }));
    if (Number(amount) > 0 && !this.feeHeadSelected(headId)) this.selectCourseFeeHead(headId);
    this.scheduleCourseFeeDraftSave();
  }

  fillRowFromCell(headId: string, periodKey: string) {
    const value = this.feeMatrixValue(headId, periodKey);
    if (!Number(value)) return;
    this.feeMatrixAmounts.update((amounts) => {
      const next = { ...amounts };
      for (const period of this.courseFeePeriods()) {
        next[this.feeMatrixKey(headId, period.key)] = Number(value);
      }
      return next;
    });
    if (!this.feeHeadSelected(headId)) this.selectCourseFeeHead(headId);
    this.scheduleCourseFeeDraftSave();
  }

  fillColumnFromCell(headId: string, periodKey: string) {
    const value = this.feeMatrixValue(headId, periodKey);
    if (!Number(value)) return;
    const selected = this.selectedCourseFeeHeadIds();
    const targetHeadIds =
      selected.length > 1 ? selected : this.activeCourseFeeHeads().map((head) => head._id);
    this.feeMatrixAmounts.update((amounts) => {
      const next = { ...amounts };
      for (const targetHeadId of targetHeadIds) {
        next[this.feeMatrixKey(targetHeadId, periodKey)] = Number(value);
      }
      return next;
    });
    this.selectedCourseFeeHeadIds.set([...new Set([...selected, ...targetHeadIds])]);
    this.scheduleCourseFeeDraftSave();
  }

  fillMatrixFromCell(event: MouseEvent, headId: string, periodKey: string) {
    event.preventDefault();
    if (event.shiftKey) this.fillColumnFromCell(headId, periodKey);
    else this.fillRowFromCell(headId, periodKey);
  }

  handleMatrixKeydown(
    event: KeyboardEvent,
    rowIndex: number,
    columnIndex: number,
    headId: string,
    periodKey: string,
  ) {
    if ((event.ctrlKey || event.metaKey) && event.key.toLocaleLowerCase() === 'r') {
      event.preventDefault();
      this.fillRowFromCell(headId, periodKey);
      return;
    }
    if ((event.ctrlKey || event.metaKey) && event.key.toLocaleLowerCase() === 'd') {
      event.preventDefault();
      this.fillColumnFromCell(headId, periodKey);
      return;
    }
    const movement: Record<string, [number, number]> = {
      ArrowUp: [-1, 0],
      ArrowDown: [1, 0],
      ArrowLeft: [0, -1],
      ArrowRight: [0, 1],
      Enter: [event.shiftKey ? -1 : 1, 0],
    };
    const direction = movement[event.key];
    if (!direction) return;
    event.preventDefault();
    const nextRow = Math.max(
      0,
      Math.min(this.activeCourseFeeHeads().length - 1, rowIndex + direction[0]),
    );
    const nextColumn = Math.max(
      0,
      Math.min(this.courseFeePeriods().length - 1, columnIndex + direction[1]),
    );
    const table = (event.currentTarget as HTMLElement).closest('table');
    const target = table?.querySelector<HTMLInputElement>(
      `[data-matrix-row="${nextRow}"][data-matrix-column="${nextColumn}"]`,
    );
    target?.focus();
    target?.select();
  }

  pasteMatrixValues(event: ClipboardEvent, startRow: number, startColumn: number) {
    const clipboard = event.clipboardData?.getData('text/plain').trim();
    if (!clipboard) return;
    const rows = clipboard.split(/\r?\n/).map((row) => row.split('\t'));
    const heads = this.activeCourseFeeHeads();
    const periods = this.courseFeePeriods();
    const updates: Record<string, number> = {};
    const touchedHeads = new Set<string>();

    rows.forEach((row, rowOffset) => {
      const head = heads[startRow + rowOffset];
      if (!head) return;
      row.forEach((rawValue, columnOffset) => {
        const period = periods[startColumn + columnOffset];
        if (!period) return;
        const normalized = rawValue.replace(/,/g, '').replace(/[^\d.-]/g, '');
        const amount = Number(normalized);
        if (!normalized || !Number.isFinite(amount) || amount < 0) return;
        updates[this.feeMatrixKey(head._id, period.key)] = amount;
        touchedHeads.add(head._id);
      });
    });

    if (!Object.keys(updates).length) return;
    event.preventDefault();
    this.feeMatrixAmounts.update((amounts) => ({ ...amounts, ...updates }));
    this.selectedCourseFeeHeadIds.update((selected) => [
      ...new Set([...selected, ...touchedHeads]),
    ]);
    this.scheduleCourseFeeDraftSave();
  }

  selectMatrixValue(event: FocusEvent) {
    (event.target as HTMLInputElement | null)?.select();
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
    this.viewStudentTypeId = '';
    this.viewCountryId = '';
    this.courseFeeViewRecords.set([]);
  }

  viewCollegeChanged() {
    this.viewDepartmentId = '';
    this.viewLevelId = '';
    this.viewCourseId = '';
    this.viewDomicileId = '';
    this.viewStudentTypeId = '';
    this.viewCountryId = '';
    this.courseFeeViewRecords.set([]);
  }

  viewDepartmentChanged() {
    this.viewLevelId = '';
    this.viewCourseId = '';
    this.viewDomicileId = '';
    this.viewStudentTypeId = '';
    this.viewCountryId = '';
    this.courseFeeViewRecords.set([]);
  }

  viewLevelChanged() {
    this.viewCourseId = '';
    this.courseFeeViewRecords.set([]);
  }

  viewDomicileChanged() {
    this.courseFeeViewRecords.set([]);
  }

  viewStudentTypeChanged() {
    this.viewCountryId = '';
    this.courseFeeViewRecords.set([]);
  }

  courseStudentTypeChanged() {
    this.courseCountryId = '';
    this.scheduleCourseFeeDraftSave();
  }

  importStudentTypeChanged() {
    this.importCountryId = '';
    this.preview.set(null);
  }

  viewCountryChanged() {
    this.courseFeeViewRecords.set([]);
  }

  loadCourseFeeView() {
    if (
      !this.selectedBookId ||
      !this.viewCollegeId ||
      !this.viewDepartmentId ||
      !this.viewLevelId ||
      !this.viewCourseId ||
      !this.viewDomicileId ||
      !this.viewStudentTypeId ||
      (this.viewRequiresCountry() && !this.viewCountryId)
    )
      return this.error.set(
        'Select the book, college, department, level, course, domicile, student type and required country.',
      );
    this.clearNotices();
    this.loading.set(true);
    this.api
      .courseFees(
        this.selectedBookId,
        this.viewCourseId,
        this.viewDomicileId,
        this.viewStudentTypeId,
        this.viewRequiresCountry() ? this.viewCountryId : '',
      )
      .subscribe({
        next: ({ items }) => {
          this.courseFeeViewRecords.set(items);
          this.courseViewFiltersOpen.set(false);
          this.loading.set(false);
          if (!items.length)
            this.message.set('No fees are configured for the selected course and book.');
        },
        error: (error) => this.fail(error),
      });
  }

  private saved(message: string) {
    this.creationSuccess.set('');
    this.message.set(message);
    this.saving.set(false);
    this.loadReferenceData();
  }

  private completedCreation(message: string) {
    this.creationSuccess.set(message);
    this.message.set('');
    this.saving.set(false);
    this.loadReferenceData();
    this.creationSuccess.set(message);
  }

  private pageSlice<T>(items: T[]) {
    const start = (this.safeListPage() - 1) * this.listPageSize();
    return items.slice(start, start + this.listPageSize());
  }

  private startSaving() {
    this.clearNotices();
    this.creationSuccess.set('');
    this.saving.set(true);
  }

  private clearNotices() {
    this.message.set('');
    this.error.set('');
  }

  private requiresCountry(studentType?: MasterValue, domicile?: MasterValue) {
    return /foreign|international|nri/i.test(`${studentType?.name || ''} ${domicile?.name || ''}`);
  }

  private clearCourseFeeMatrix() {
    this.selectedCourseFeeHeadIds.set([]);
    this.feeMatrixAmounts.set({});
    this.activeMatrixCell.set('');
  }

  private ordinal(value: number) {
    const suffix = value === 1 ? 'st' : value === 2 ? 'nd' : value === 3 ? 'rd' : 'th';
    return `${value}${suffix}`;
  }

  private fail(error: { error?: { message?: string }; message?: string }) {
    this.error.set(
      error?.error?.message || error?.message || 'The request could not be completed.',
    );
    this.loading.set(false);
    this.saving.set(false);
  }
}
