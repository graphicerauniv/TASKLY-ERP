import { CdkTrapFocus } from '@angular/cdk/a11y';
import { CommonModule, DOCUMENT } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  HostListener,
  computed,
  effect,
  inject,
  signal,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import {
  LucideBookOpen,
  LucideBuilding2,
  LucideCalendarDays,
  LucideChevronLeft,
  LucideChevronRight,
  LucideClipboardList,
  LucideClock3,
  LucideColumns3,
  LucideDatabase,
  LucideEye,
  LucideFileText,
  LucideFilter,
  LucideFlaskConical,
  LucideGraduationCap,
  LucideMapPin,
  LucidePlus,
  LucideSearch,
  LucideStar,
  LucideUsersRound,
  LucideX,
} from '@lucide/angular';
import { forkJoin } from 'rxjs';

import { ApiService } from '../../../core/api.service';
import { ERP_PAGINATION } from '../../../core/config/data-view.constants';
import { AcademicFaculty, AcademicRoom, AcademicSubject, MasterValue } from '../../../core/models';
import { AdminIllustrationComponent } from '../../../shared/ui/admin-illustration/admin-illustration.component';
import { AdminPageComponent } from '../../../shared/ui/admin-page/admin-page.component';
import {
  CompactActionItem,
  CompactActionMenuComponent,
} from '../../../shared/ui/compact-action-menu/compact-action-menu.component';
import { FormActionBarComponent } from '../../../shared/ui/form-action-bar/form-action-bar.component';
import { FormSectionNavigatorComponent } from '../../../shared/ui/form-section-navigator/form-section-navigator.component';
import { FormSectionNavigationItem } from '../../../shared/ui/form-workflow.models';
import { MobileSectionNavigatorSheetComponent } from '../../../shared/ui/mobile-section-navigator-sheet/mobile-section-navigator-sheet.component';
import {
  MultiSelectDropdownComponent,
  MultiSelectOption,
} from '../../../shared/ui/multi-select-dropdown/multi-select-dropdown.component';

type ResourceSection = 'subjects' | 'faculties' | 'rooms';
type ResourceRecord = AcademicSubject | AcademicFaculty | AcademicRoom;

function apiMessage(error: unknown, fallback: string): string {
  if (typeof error === 'object' && error && 'error' in error) {
    const response = (error as { error?: { message?: unknown } }).error;
    if (typeof response?.message === 'string') return response.message;
  }
  return fallback;
}

@Component({
  selector: 'erp-academic-resources',
  imports: [
    CdkTrapFocus,
    CommonModule,
    FormsModule,
    AdminIllustrationComponent,
    AdminPageComponent,
    CompactActionMenuComponent,
    FormActionBarComponent,
    FormSectionNavigatorComponent,
    MobileSectionNavigatorSheetComponent,
    MultiSelectDropdownComponent,
    LucideBookOpen,
    LucideBuilding2,
    LucideCalendarDays,
    LucideChevronLeft,
    LucideChevronRight,
    LucideClipboardList,
    LucideClock3,
    LucideColumns3,
    LucideDatabase,
    LucideEye,
    LucideFileText,
    LucideFilter,
    LucideFlaskConical,
    LucideGraduationCap,
    LucideMapPin,
    LucidePlus,
    LucideSearch,
    LucideStar,
    LucideUsersRound,
    LucideX,
  ],
  templateUrl: './academic-resources.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AcademicResourcesComponent {
  private readonly api = inject(ApiService);
  private readonly route = inject(ActivatedRoute);
  private readonly document = inject(DOCUMENT);

  readonly section = signal<ResourceSection>('subjects');
  readonly records = signal<ResourceRecord[]>([]);
  readonly subjects = signal<AcademicSubject[]>([]);
  readonly masters = signal<Array<MasterValue & { typeSlug: string }>>([]);
  readonly loading = signal(false);
  readonly saving = signal(false);
  readonly drawerOpen = signal(false);
  readonly editingId = signal<string | null>(null);
  readonly error = signal('');
  readonly message = signal('');
  readonly page = signal(1);
  readonly pageSize = signal<number>(ERP_PAGINATION.defaultPageSize);
  readonly statusFilter = signal<'all' | 'active' | 'inactive'>('all');
  readonly filterOpen = signal(false);
  readonly columnsOpen = signal(false);
  readonly showDetailOne = signal(true);
  readonly showDetailTwo = signal(true);
  readonly showStatus = signal(true);
  readonly subjectStep = signal(0);
  readonly mobileNavigatorOpen = signal(false);
  readonly pageSizeOptions = ERP_PAGINATION.pageSizeOptions;

  search = '';
  name = '';
  code = '';
  email = '';
  universityId = '';
  collegeId = '';
  departmentIds: string[] = [];
  subjectIds: string[] = [];
  availableDays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
  weeklyLimit = 40;
  building = '';
  floor = '';
  roomType = 'classroom';
  capacity = 1;
  session = '';
  semester = 1;
  hindiName = '';
  levelId = '';
  courseIds: string[] = [];
  branchIds: string[] = [];
  subjectType = 'theory';
  subjectOption = 'required';
  evaluationType = 'marks';
  credits = 0;
  subjectCounter = 0;
  lectureHours = 0;
  tutorialHours = 0;
  labHours = 0;
  maxMarks = 0;
  passMarks = 0;
  internalMarks = 0;
  externalMarks = 0;
  midTermMarks = 0;
  isPaper = false;
  isOpenElective = false;
  isFoundation = false;
  isGroupSubject = false;
  allowMidMarksEntry = false;
  allowExternalMarksEntry = false;
  showAlternativeGrade = false;
  showAlternativeGradePoint = false;
  showAlternativeSubjectCredit = false;
  hideInternalMarks = false;
  hideExternalMarks = false;
  hideMidTermMarks = false;
  hideTotalMarks = false;

  readonly rowActions: readonly CompactActionItem[] = [
    { id: 'edit', label: 'Edit', icon: 'edit' },
    { id: 'delete', label: 'Delete', icon: 'delete', destructive: true },
  ];

  readonly subjectSections = computed<FormSectionNavigationItem[]>(() => {
    const current = this.subjectStep();
    return [
      ['basic', 'Basic information', 'Identity and type'],
      ['mapping', 'Academic mapping', 'Academic scope'],
      ['load', 'Teaching load & credits', 'Credits and hours'],
      ['marks', 'Evaluation & marks', 'Marks structure'],
      ['permissions', 'Faculty permissions', 'Teaching controls'],
      ['visibility', 'Student visibility', 'Result visibility'],
    ].map(([id, title, status], index) => ({
      id,
      index,
      title,
      status,
      state: index < current ? 'complete' : index === current ? 'current' : 'upcoming',
    }));
  });

  constructor() {
    this.route.data.subscribe((data) => {
      this.section.set((data['section'] as ResourceSection) || 'subjects');
      this.closeDrawer();
      this.search = '';
      this.page.set(1);
      this.load();
    });
    effect((onCleanup) => {
      if (!this.drawerOpen()) return;
      const previous = this.document.body.style.overflow;
      this.document.body.style.overflow = 'hidden';
      onCleanup(() => {
        this.document.body.style.overflow = previous;
      });
    });
  }

  title(): string {
    return { subjects: 'Subjects', faculties: 'Faculty', rooms: 'Rooms and labs' }[this.section()];
  }

  singular(): string {
    return { subjects: 'subject', faculties: 'faculty member', rooms: 'room or lab' }[
      this.section()
    ];
  }

  description(): string {
    return {
      subjects: 'Manage curriculum, teaching load, evaluation and student visibility.',
      faculties: 'Manage teaching scope, subject capability and weekly availability.',
      rooms: 'Manage teaching spaces, capacity and subject requirements.',
    }[this.section()];
  }

  drawerEyebrow(): string {
    return {
      subjects: 'CURRICULUM CONFIGURATION',
      faculties: 'TEACHING RESOURCE',
      rooms: 'TEACHING SPACE',
    }[this.section()];
  }

  drawerDescription(): string {
    return {
      subjects: 'Configure curriculum, teaching load, marks and visibility.',
      faculties: 'Define academic scope, subjects and weekly availability.',
      rooms: 'Define location, capacity and supported subjects.',
    }[this.section()];
  }

  emptyIllustration(): 'dataConfiguration' | 'addStudent' | 'roomUnavailable' | 'noResults' {
    if (this.search || this.statusFilter() !== 'all') return 'noResults';
    return { subjects: 'dataConfiguration', faculties: 'addStudent', rooms: 'roomUnavailable' }[
      this.section()
    ] as 'dataConfiguration' | 'addStudent' | 'roomUnavailable';
  }

  load(): void {
    this.loading.set(true);
    this.error.set('');
    forkJoin({
      bootstrap: this.api.academicBootstrap(),
      list: this.api.academicRecords<ResourceRecord>(this.section()),
    }).subscribe({
      next: ({ bootstrap, list }) => {
        this.masters.set(bootstrap.masters);
        this.subjects.set(bootstrap.subjects);
        this.records.set(list.items);
        this.loading.set(false);
      },
      error: (error) => {
        this.error.set(apiMessage(error, `Could not load ${this.title().toLowerCase()}.`));
        this.loading.set(false);
      },
    });
  }

  master(type: string): Array<MasterValue & { typeSlug: string }> {
    return this.masters().filter((item) => item.typeSlug === type);
  }

  scopedMaster(type: string, parentIds: string[]): Array<MasterValue & { typeSlug: string }> {
    const items = this.master(type);
    return parentIds.length
      ? items.filter((item) => !item.parentId || parentIds.includes(item.parentId))
      : items;
  }

  options(items: readonly { _id: string; name: string; code?: string }[]): MultiSelectOption[] {
    return items.map((item) => ({
      value: item._id,
      label: item.code ? `${item.code} · ${item.name}` : item.name,
    }));
  }

  label(type: string, id: string): string {
    return this.master(type).find((item) => item._id === id)?.name || '';
  }

  labels(type: string, ids: string[]): string[] {
    return ids.map((id) => this.label(type, id)).filter(Boolean);
  }

  filteredRecords(): ResourceRecord[] {
    const query = this.search.trim().toLowerCase();
    const status = this.statusFilter();
    return this.records().filter((item) => {
      const matchesQuery = !query || JSON.stringify(item).toLowerCase().includes(query);
      const matchesStatus =
        status === 'all' || (status === 'active' ? item.isActive : !item.isActive);
      return matchesQuery && matchesStatus;
    });
  }

  totalPages(): number {
    return Math.max(1, Math.ceil(this.filteredRecords().length / this.pageSize()));
  }

  pagedRecords(): ResourceRecord[] {
    return this.filteredRecords().slice(
      (this.page() - 1) * this.pageSize(),
      this.page() * this.pageSize(),
    );
  }

  resultRange(): string {
    const total = this.filteredRecords().length;
    if (!total) return 'Showing 0 results';
    const first = (this.page() - 1) * this.pageSize() + 1;
    const last = Math.min(this.page() * this.pageSize(), total);
    return `Showing ${first}–${last} of ${total} ${total === 1 ? 'result' : 'results'}`;
  }

  summary(index: number): string | number {
    if (index === 0) return this.records().length;
    if (this.section() === 'subjects') {
      const subjects = this.records() as AcademicSubject[];
      if (index === 1) return subjects.filter((item) => item.subjectType === 'theory').length;
      if (index === 2)
        return subjects.filter((item) => ['practical', 'lab'].includes(item.subjectType)).length;
      return subjects.filter((item) => item.subjectOption === 'elective').length;
    }
    if (this.section() === 'faculties') {
      if (index === 1) return '40 hrs default';
      return (this.records() as AcademicFaculty[]).reduce(
        (total, item) => total + (item.subjectIds?.length || 0),
        0,
      );
    }
    const rooms = this.records() as AcademicRoom[];
    if (index === 1) return rooms.filter((item) => item.roomType === 'classroom').length;
    if (index === 2) return rooms.filter((item) => item.roomType === 'lab').length;
    return rooms.reduce((total, item) => total + Number(item.capacity || 0), 0);
  }

  summaryLabels(): string[] {
    return {
      subjects: ['Total subjects', 'Theory', 'Practical / lab', 'Electives'],
      faculties: ['Faculty members', 'Weekly limit', 'Subjects assigned'],
      rooms: ['Total spaces', 'Classrooms', 'Labs', 'Total capacity'],
    }[this.section()];
  }

  tableColspan(): number {
    return (
      2 + Number(this.showDetailOne()) + Number(this.showDetailTwo()) + Number(this.showStatus())
    );
  }

  openCreate(): void {
    this.resetForm();
    this.drawerOpen.set(true);
  }

  closeDrawer(): void {
    this.drawerOpen.set(false);
    this.mobileNavigatorOpen.set(false);
    this.resetForm();
  }

  handleAction(action: string, item: ResourceRecord): void {
    if (action === 'edit') this.edit(item);
    if (action === 'delete') this.remove(item);
  }

  edit(item: ResourceRecord): void {
    this.resetForm();
    this.editingId.set(item._id);
    this.name = item.name;
    this.code = item.code || '';
    const scopedItem = item as ResourceRecord & { universityId?: string; collegeId?: string };
    this.universityId = scopedItem.universityId || '';
    this.collegeId = scopedItem.collegeId || '';
    if (this.section() === 'subjects') this.editSubject(item as AcademicSubject);
    if (this.section() === 'faculties') this.editFaculty(item as AcademicFaculty);
    if (this.section() === 'rooms') this.editRoom(item as AcademicRoom);
    this.drawerOpen.set(true);
  }

  private editSubject(item: AcademicSubject): void {
    const subject = item as AcademicSubject & {
      branchIds?: string[];
      lectureHours?: number;
      tutorialHours?: number;
      labHours?: number;
      maxMarks?: number;
      passMarks?: number;
      internalMarks?: number;
      externalMarks?: number;
      midTermMarks?: number;
      flags?: Record<string, boolean>;
      visibility?: Record<string, boolean>;
    };
    this.session = item.academicSession;
    this.semester = item.semester;
    this.hindiName = item.hindiName || '';
    this.subjectType = item.subjectType;
    this.subjectOption = item.subjectOption;
    this.evaluationType = item.evaluationType;
    this.credits = item.credits;
    this.departmentIds = [...(item.departmentIds || [])];
    this.courseIds = [...(item.courseIds || [])];
    this.branchIds = [...(subject.branchIds || [])];
    this.lectureHours = subject.lectureHours || 0;
    this.tutorialHours = subject.tutorialHours || 0;
    this.labHours = subject.labHours || 0;
    this.maxMarks = subject.maxMarks || 0;
    this.passMarks = subject.passMarks || 0;
    this.internalMarks = subject.internalMarks || 0;
    this.externalMarks = subject.externalMarks || 0;
    this.midTermMarks = subject.midTermMarks || 0;
    const flags = subject.flags || {};
    const visibility = subject.visibility || {};
    this.isPaper = Boolean(flags['isPaper']);
    this.isOpenElective = Boolean(flags['isOpenElective']);
    this.isFoundation = Boolean(flags['isFoundation']);
    this.isGroupSubject = Boolean(flags['isGroupSubject']);
    this.allowMidMarksEntry = Boolean(flags['allowMidMarksEntry']);
    this.allowExternalMarksEntry = Boolean(flags['allowExternalMarksEntry']);
    this.showAlternativeGrade = Boolean(visibility['showAlternativeGrade']);
    this.showAlternativeGradePoint = Boolean(visibility['showAlternativeGradePoint']);
    this.showAlternativeSubjectCredit = Boolean(visibility['showAlternativeSubjectCredit']);
    this.hideInternalMarks = Boolean(visibility['hideInternalMarks']);
    this.hideExternalMarks = Boolean(visibility['hideExternalMarks']);
    this.hideMidTermMarks = Boolean(visibility['hideMidTermMarks']);
    this.hideTotalMarks = Boolean(visibility['hideTotalMarks']);
  }

  private editFaculty(item: AcademicFaculty): void {
    this.email = item.email;
    this.weeklyLimit = item.weeklyLimit;
    this.departmentIds = [...(item.departmentIds || [])];
    this.subjectIds = [...(item.subjectIds || [])];
    this.availableDays = [...(item.availableDays || [])];
  }

  private editRoom(item: AcademicRoom): void {
    this.building = item.building || '';
    this.floor = item.floor || '';
    this.roomType = item.roomType;
    this.capacity = item.capacity;
    this.subjectIds = [...(item.subjectIds || [])];
  }

  remove(item: ResourceRecord): void {
    if (!confirm(`Delete ${item.name}?`)) return;
    this.api.deleteAcademicRecord(this.section(), item._id).subscribe({
      next: () => {
        this.message.set(`${item.name} deleted.`);
        this.load();
      },
      error: (error) => this.error.set(apiMessage(error, `Could not delete ${item.name}.`)),
    });
  }

  formValid(): boolean {
    if (!this.name.trim() || !this.code.trim()) return false;
    if (this.section() === 'subjects')
      return Boolean(this.session && this.universityId && this.collegeId);
    if (!this.universityId || !this.collegeId) return false;
    if (this.section() === 'faculties') return Boolean(this.email && this.departmentIds.length);
    return this.capacity > 0;
  }

  nextSubjectStep(): void {
    if (this.subjectStep() < this.subjectSections().length - 1)
      this.subjectStep.update((value) => value + 1);
    else this.save();
  }

  save(): void {
    if (!this.formValid()) return;
    this.saving.set(true);
    const id = this.editingId();
    const request = id
      ? this.api.updateAcademicRecord<ResourceRecord>(this.section(), id, this.body())
      : this.api.createAcademicRecord<ResourceRecord>(this.section(), this.body());
    request.subscribe({
      next: () => {
        this.message.set(`${this.singular()} ${id ? 'updated' : 'added'} successfully.`);
        this.saving.set(false);
        this.closeDrawer();
        this.load();
      },
      error: (error) => {
        this.error.set(apiMessage(error, `Could not save this ${this.singular()}.`));
        this.saving.set(false);
      },
    });
  }

  private body(): Record<string, unknown> {
    const institution = {
      universityId: this.universityId,
      universityName: this.label('university', this.universityId),
      collegeId: this.collegeId,
      collegeName: this.label('college', this.collegeId),
    };
    if (this.section() === 'faculties')
      return {
        name: this.name.trim(),
        code: this.code.trim(),
        email: this.email,
        ...institution,
        departmentIds: this.departmentIds,
        subjectIds: this.subjectIds,
        weeklyLimit: Number(this.weeklyLimit),
        availableDays: this.availableDays,
        isActive: true,
      };
    if (this.section() === 'rooms')
      return {
        name: this.name.trim(),
        code: this.code.trim(),
        ...institution,
        building: this.building,
        floor: this.floor,
        roomType: this.roomType,
        capacity: Number(this.capacity),
        subjectIds: this.subjectIds,
        isActive: true,
      };
    return {
      name: this.name.trim(),
      hindiName: this.hindiName,
      code: this.code.trim(),
      academicSession: this.session,
      semester: Number(this.semester),
      ...institution,
      departmentIds: this.departmentIds,
      departmentNames: this.labels('department', this.departmentIds),
      courseIds: this.courseIds,
      courseNames: this.labels('course', this.courseIds),
      branchIds: this.branchIds,
      branchNames: this.labels('branch', this.branchIds),
      subjectType: this.subjectType,
      subjectOption: this.subjectOption,
      evaluationType: this.evaluationType,
      credits: Number(this.credits),
      subjectCounter: Number(this.subjectCounter),
      lectureHours: Number(this.lectureHours),
      tutorialHours: Number(this.tutorialHours),
      labHours: Number(this.labHours),
      maxMarks: Number(this.maxMarks),
      passMarks: Number(this.passMarks),
      internalMarks: Number(this.internalMarks),
      externalMarks: Number(this.externalMarks),
      midTermMarks: Number(this.midTermMarks),
      flags: {
        isPaper: this.isPaper,
        isOpenElective: this.isOpenElective,
        isFoundation: this.isFoundation,
        isGroupSubject: this.isGroupSubject,
        allowMidMarksEntry: this.allowMidMarksEntry,
        allowExternalMarksEntry: this.allowExternalMarksEntry,
      },
      visibility: {
        showAlternativeGrade: this.showAlternativeGrade,
        showAlternativeGradePoint: this.showAlternativeGradePoint,
        showAlternativeSubjectCredit: this.showAlternativeSubjectCredit,
        hideInternalMarks: this.hideInternalMarks,
        hideExternalMarks: this.hideExternalMarks,
        hideMidTermMarks: this.hideMidTermMarks,
        hideTotalMarks: this.hideTotalMarks,
      },
      isActive: true,
    };
  }

  toggleDay(day: string): void {
    this.availableDays = this.availableDays.includes(day)
      ? this.availableDays.filter((item) => item !== day)
      : [...this.availableDays, day];
  }

  private resetForm(): void {
    this.editingId.set(null);
    this.subjectStep.set(0);
    this.name = '';
    this.code = '';
    this.email = '';
    this.universityId = '';
    this.collegeId = '';
    this.departmentIds = [];
    this.subjectIds = [];
    this.availableDays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
    this.weeklyLimit = 40;
    this.building = '';
    this.floor = '';
    this.roomType = 'classroom';
    this.capacity = 1;
    this.session = '';
    this.semester = 1;
    this.hindiName = '';
    this.levelId = '';
    this.courseIds = [];
    this.branchIds = [];
    this.subjectType = 'theory';
    this.subjectOption = 'required';
    this.evaluationType = 'marks';
    this.credits = this.subjectCounter = this.lectureHours = this.tutorialHours = this.labHours = 0;
    this.maxMarks =
      this.passMarks =
      this.internalMarks =
      this.externalMarks =
      this.midTermMarks =
        0;
    this.isPaper = this.isOpenElective = this.isFoundation = this.isGroupSubject = false;
    this.allowMidMarksEntry = this.allowExternalMarksEntry = false;
    this.showAlternativeGrade = this.showAlternativeGradePoint = false;
    this.showAlternativeSubjectCredit = false;
    this.hideInternalMarks =
      this.hideExternalMarks =
      this.hideMidTermMarks =
      this.hideTotalMarks =
        false;
  }

  @HostListener('document:keydown.escape')
  closeOverlays(): void {
    if (this.mobileNavigatorOpen()) this.mobileNavigatorOpen.set(false);
    else if (this.drawerOpen()) this.closeDrawer();
    this.filterOpen.set(false);
    this.columnsOpen.set(false);
  }
}
