import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { forkJoin, Observable } from 'rxjs';
import { ApiService } from '../../../core/api.service';
import {
  AcademicFaculty,
  AcademicAllocationInput,
  AcademicGroup,
  AcademicGroupSubject,
  AcademicRoom,
  AcademicSection,
  AcademicSet,
  AcademicSubject,
  Admission,
  MasterValue,
  TimetableMaster,
  TimetablePeriod,
  TimetableStructure,
} from '../../../core/models';
import { AdminPageComponent } from '../../../shared/ui/admin-page/admin-page.component';
import {
  CompactActionItem,
  CompactActionMenuComponent,
} from '../../../shared/ui/compact-action-menu/compact-action-menu.component';
import {
  MultiSelectDropdownComponent,
  MultiSelectOption,
} from '../../../shared/ui/multi-select-dropdown/multi-select-dropdown.component';

type Section =
  | 'groups'
  | 'sections'
  | 'sets'
  | 'subjects'
  | 'faculties'
  | 'rooms'
  | 'allocations'
  | 'subject-assignments'
  | 'timetable-masters'
  | 'timetable-structures'
  | 'timetable-periods'
  | 'timetables';
interface AcademicRecord {
  _id: string;
  name?: string;
  code?: string;
  academicSession?: string;
  semester?: number;
  subjectName?: string;
  studentName?: string;
  groupName?: string;
  studentId?: string;
  subjectCode?: string;
  day?: string;
  startTime?: string;
  endTime?: string;
  departmentNames?: string[];
  requirement?: string;
  status?: string;
  universityId?: string;
  collegeId?: string;
  levelId?: string;
  departmentIds?: string[];
  courseIds?: string[];
  branchIds?: string[];
  groupIds?: string[];
  groupId?: string;
  sectionId?: string;
  hindiName?: string;
  subjectType?: string;
  subjectOption?: string;
  evaluationType?: string;
  credits?: number;
  lectureHours?: number;
  tutorialHours?: number;
  labHours?: number;
  maxMarks?: number;
  passMarks?: number;
  internalMarks?: number;
  externalMarks?: number;
  midTermMarks?: number;
  email?: string;
  weeklyLimit?: number;
  availableDays?: string[];
  subjectIds?: string[];
  building?: string;
  floor?: string;
  roomType?: string;
  capacity?: number;
  flags?: Record<string, boolean>;
  visibility?: Record<string, boolean>;
  timetableMasterId?: string;
  timetableStructureId?: string;
  timetablePeriodId?: string;
  periodCount?: number;
  periodNumber?: number;
  periodType?: 'lecture' | 'break' | null;
  durationMinutes?: number | null;
  workingDays?: string[];
  isConfigured?: boolean;
  timetableName?: string;
  structureName?: string;
}
function apiMessage(error: unknown, fallback: string): string {
  if (typeof error === 'object' && error && 'error' in error) {
    const response = (error as { error?: { message?: unknown } }).error;
    if (typeof response?.message === 'string') return response.message;
  }
  return fallback;
}

@Component({
  selector: 'erp-academic-workspace',
  imports: [
    CommonModule,
    FormsModule,
    AdminPageComponent,
    CompactActionMenuComponent,
    MultiSelectDropdownComponent,
  ],
  templateUrl: './academic-workspace.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AcademicWorkspaceComponent {
  private readonly api = inject(ApiService);
  private readonly route = inject(ActivatedRoute);
  readonly section = signal<Section>('groups');
  readonly loading = signal(false);
  readonly saving = signal(false);
  readonly error = signal('');
  readonly message = signal('');
  readonly records = signal<AcademicRecord[]>([]);
  readonly editingId = signal<string | null>(null);
  readonly masters = signal<Array<MasterValue & { typeSlug: string }>>([]);
  readonly students = signal<Admission[]>([]);
  readonly groups = signal<AcademicGroup[]>([]);
  readonly sections = signal<AcademicSection[]>([]);
  readonly sets = signal<AcademicSet[]>([]);
  readonly subjects = signal<AcademicSubject[]>([]);
  readonly faculties = signal<AcademicFaculty[]>([]);
  readonly rooms = signal<AcademicRoom[]>([]);
  readonly groupSubjects = signal<AcademicGroupSubject[]>([]);
  readonly timetableMasters = signal<TimetableMaster[]>([]);
  readonly timetableStructures = signal<TimetableStructure[]>([]);
  readonly timetablePeriods = signal<TimetablePeriod[]>([]);
  readonly previewRows = signal<
    Array<{ row: number; data: AcademicAllocationInput; error: string | null }>
  >([]);
  name = '';
  code = '';
  session = '';
  semester = 1;
  universityId = '';
  collegeId = '';
  levelId = '';
  departmentIds: string[] = [];
  courseIds: string[] = [];
  branchIds: string[] = [];
  groupIds: string[] = [];
  groupId = '';
  sectionId = '';
  setId = '';
  subjectIds: string[] = [];
  studentAdmissionId = '';
  hindiName = '';
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
  email = '';
  weeklyLimit = 40;
  availableDays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
  building = '';
  floor = '';
  roomType = 'classroom';
  capacity = 1;
  requirement = 'required';
  facultyId = '';
  roomId = '';
  setIds: string[] = [];
  day = 'Monday';
  startTime = '09:00';
  endTime = '10:00';
  classType = 'lecture';
  effectiveFrom = '';
  effectiveTo = '';
  timetableMasterId = '';
  timetableStructureId = '';
  timetablePeriodId = '';
  periodCount = 8;
  periodType: 'lecture' | 'break' = 'lecture';
  durationMinutes = 50;
  workingDays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
  search = '';
  readonly page = signal(1);
  readonly pageSize = 25;

  readonly titles: Record<Section, string> = {
    groups: 'Groups',
    sections: 'Sections',
    sets: 'Sets',
    subjects: 'Subjects',
    faculties: 'Faculty',
    rooms: 'Rooms and labs',
    allocations: 'Student allocation',
    'subject-assignments': 'Bulk subject assignment',
    'timetable-masters': 'Timetable masters',
    'timetable-structures': 'Timetable structures',
    'timetable-periods': 'Period configuration',
    timetables: 'Timetable',
  };
  readonly dayOptions: readonly MultiSelectOption[] = [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
    'Sunday',
  ].map((label) => ({ label, value: label }));
  readonly resources: Partial<Record<Section, string>> = {
    groups: 'groups',
    sections: 'sections',
    sets: 'sets',
    subjects: 'subjects',
    faculties: 'faculties',
    rooms: 'rooms',
    allocations: 'allocations',
    'subject-assignments': 'group-subjects',
    'timetable-masters': 'timetable-masters',
    'timetable-structures': 'timetable-structures',
    'timetable-periods': 'timetable-periods',
    timetables: 'timetables',
  };
  readonly periodCountOptions = Array.from({ length: 30 }, (_, index) => index + 1);
  readonly durationOptions = Array.from({ length: 40 }, (_, index) => (index + 1) * 5);
  readonly editActions: readonly CompactActionItem[] = [
    { id: 'edit', label: 'Edit', icon: 'edit' },
    { id: 'delete', label: 'Delete', icon: 'delete', destructive: true },
  ];
  readonly deleteActions: readonly CompactActionItem[] = [
    { id: 'delete', label: 'Delete', icon: 'delete', destructive: true },
  ];
  readonly editOnlyActions: readonly CompactActionItem[] = [
    { id: 'edit', label: 'Configure', icon: 'edit' },
  ];

  constructor() {
    this.route.data.subscribe((data) => {
      this.section.set(data['section'] || 'groups');
      this.reset();
      this.load();
    });
  }
  title() {
    return this.titles[this.section()];
  }
  master(type: string) {
    return this.masters().filter((item) => item.typeSlug === type);
  }
  scopedMaster(type: string, parentIds: string[]) {
    const items = this.master(type);
    return parentIds.length
      ? items.filter((item) => !item.parentId || parentIds.includes(item.parentId))
      : items;
  }
  label(type: string, value: string) {
    return this.master(type).find((item) => item._id === value)?.name || '';
  }
  labels(type: string, values: string[]) {
    return values.map((value) => this.label(type, value)).filter(Boolean);
  }
  options(
    items: readonly { _id: string; name: string; code?: string }[],
    showCode = true,
  ): MultiSelectOption[] {
    return items.map((item) => ({
      value: item._id,
      label: showCode && item.code ? `${item.code} · ${item.name}` : item.name,
    }));
  }
  sectionUsesCode() {
    return ['subjects', 'faculties', 'rooms'].includes(this.section());
  }
  filteredRecords() {
    const query = this.search.trim().toLowerCase();
    return this.records().filter(
      (item) => !query || JSON.stringify(item).toLowerCase().includes(query),
    );
  }
  totalPages() {
    return Math.max(1, Math.ceil(this.filteredRecords().length / this.pageSize));
  }
  pagedRecords() {
    const page = Math.min(this.page(), this.totalPages());
    return this.filteredRecords().slice((page - 1) * this.pageSize, page * this.pageSize);
  }
  availableSections() {
    return this.sections().filter(
      (item) =>
        item.academicSession === this.session &&
        item.semester === Number(this.semester) &&
        (!this.groupId || item.groupIds.includes(this.groupId)),
    );
  }
  groupsForPeriod() {
    return this.groups().filter(
      (item) => item.academicSession === this.session && item.semester === Number(this.semester),
    );
  }
  availableSets() {
    return this.sets().filter(
      (item) =>
        item.groupId === this.groupId &&
        item.sectionId === this.sectionId &&
        item.semester === Number(this.semester),
    );
  }
  structuresForMaster() {
    return this.timetableStructures().filter(
      (item) => item.timetableMasterId === this.timetableMasterId && item.isActive,
    );
  }
  periodsForStructure() {
    return this.timetablePeriods()
      .filter((item) => item.timetableStructureId === this.timetableStructureId)
      .sort((left, right) => left.periodNumber - right.periodNumber);
  }
  configuredLecturePeriods() {
    return this.periodsForStructure().filter(
      (item) => item.isConfigured && item.periodType === 'lecture',
    );
  }
  calculatedEndTime() {
    const [hours, minutes] = this.startTime.split(':').map(Number);
    if (!Number.isFinite(hours) || !Number.isFinite(minutes)) return '—';
    const total = hours * 60 + minutes + Number(this.durationMinutes);
    if (total >= 1440) return 'Invalid';
    return `${String(Math.floor(total / 60)).padStart(2, '0')}:${String(total % 60).padStart(2, '0')}`;
  }
  selectPeriod(periodId: string) {
    this.timetablePeriodId = periodId;
    const period = this.timetablePeriods().find((item) => item._id === periodId);
    if (!period) return;
    this.periodType = period.periodType || 'lecture';
    this.startTime = period.startTime || '09:00';
    this.durationMinutes = period.durationMinutes || 50;
  }
  availableSubjects() {
    let subjects = this.subjects().filter(
      (item) => item.academicSession === this.session && item.semester === Number(this.semester),
    );
    const group = this.groups().find((item) => item._id === this.groupId);
    if (group)
      subjects = subjects.filter(
        (subject) =>
          !subject.departmentIds.length ||
          subject.departmentIds.some((value) => group.departmentIds.includes(value)),
      );
    if (this.section() !== 'timetables' || !this.groupId) return subjects;
    const assignedIds = new Set(
      this.groupSubjects()
        .filter(
          (item) =>
            item.groupId === this.groupId &&
            item.academicSession === this.session &&
            item.semester === Number(this.semester) &&
            item.status === 'active',
        )
        .map((item) => item.subjectId),
    );
    return subjects.filter((item) => assignedIds.has(item._id));
  }

  load() {
    this.loading.set(true);
    this.error.set('');
    forkJoin({
      bootstrap: this.api.academicBootstrap(),
      list: this.api.academicRecords<AcademicRecord>(
        this.resources[this.section()] || this.section(),
      ),
    }).subscribe({
      next: ({ bootstrap, list }) => {
        this.page.set(1);
        this.masters.set(bootstrap.masters);
        this.students.set(bootstrap.students);
        this.groups.set(bootstrap.groups);
        this.sections.set(bootstrap.sections);
        this.sets.set(bootstrap.sets);
        this.subjects.set(bootstrap.subjects);
        this.faculties.set(bootstrap.faculties);
        this.rooms.set(bootstrap.rooms);
        this.groupSubjects.set(bootstrap.groupSubjects);
        this.timetableMasters.set(bootstrap.timetableMasters);
        this.timetableStructures.set(bootstrap.timetableStructures);
        this.timetablePeriods.set(bootstrap.timetablePeriods);
        this.records.set(list.items);
        this.loading.set(false);
      },
      error: (error) => {
        this.error.set(apiMessage(error, 'Could not load academic setup.'));
        this.loading.set(false);
      },
    });
  }

  save() {
    const section = this.section();
    this.error.set('');
    this.message.set('');
    this.saving.set(true);
    let request: Observable<{ assigned?: number; item?: unknown }>;
    if (section === 'timetable-periods') {
      if (!this.timetablePeriodId) {
        this.error.set('Select a generated period to configure.');
        this.saving.set(false);
        return;
      }
      request = this.api.updateAcademicRecord<AcademicRecord>(
        'timetable-periods',
        this.timetablePeriodId,
        this.body(section),
      );
    } else if (section === 'allocations')
      request = this.api.bulkAcademicAllocations([this.allocationBody()]);
    else if (section === 'subject-assignments')
      request = this.api.bulkAssignSubjects({
        groupId: this.groupId,
        subjectIds: this.subjectIds,
        academicSession: this.session,
        semester: this.semester,
        requirement: this.requirement,
      });
    else
      request = this.editingId()
        ? this.api.updateAcademicRecord<AcademicRecord>(
            this.resources[section]!,
            this.editingId()!,
            this.body(section),
          )
        : this.api.createAcademicRecord<AcademicRecord>(
            this.resources[section]!,
            this.body(section),
          );
    request.subscribe({
      next: (result) => {
        this.message.set(
          result.assigned !== undefined
            ? `${result.assigned} record(s) assigned.`
            : 'Record saved.',
        );
        this.saving.set(false);
        this.reset(false);
        this.load();
      },
      error: (error: unknown) => {
        this.error.set(apiMessage(error, 'Could not save this record.'));
        this.saving.set(false);
      },
    });
  }

  body(section: Section) {
    const scope = {
      academicSession: this.session,
      semester: Number(this.semester),
      universityId: this.universityId,
      universityName: this.label('university', this.universityId),
      collegeId: this.collegeId,
      collegeName: this.label('college', this.collegeId),
    };
    if (section === 'timetable-masters')
      return {
        name: this.name,
        academicSession: this.session,
        universityId: this.universityId,
        universityName: this.label('university', this.universityId),
        collegeId: this.collegeId,
        collegeName: this.label('college', this.collegeId),
        isActive: true,
      };
    if (section === 'timetable-structures')
      return {
        timetableMasterId: this.timetableMasterId,
        name: this.name,
        periodCount: Number(this.periodCount),
        workingDays: this.workingDays,
        isActive: true,
      };
    if (section === 'timetable-periods')
      return {
        periodType: this.periodType,
        startTime: this.startTime,
        durationMinutes: Number(this.durationMinutes),
      };
    if (section === 'groups')
      return {
        ...scope,
        name: this.name,
        levelId: this.levelId || null,
        levelName: this.label('level', this.levelId),
        departmentIds: this.departmentIds,
        departmentNames: this.labels('department', this.departmentIds),
        courseIds: this.courseIds,
        courseNames: this.labels('course', this.courseIds),
        branchIds: this.branchIds,
        branchNames: this.labels('branch', this.branchIds),
        isActive: true,
      };
    if (section === 'sections')
      return {
        name: this.name,
        academicSession: this.session,
        semester: Number(this.semester),
        groupIds: this.groupIds,
        isActive: true,
      };
    if (section === 'sets')
      return {
        name: this.name,
        academicSession: this.session,
        semester: Number(this.semester),
        groupId: this.groupId,
        sectionId: this.sectionId,
        isActive: true,
      };
    if (section === 'subjects')
      return {
        ...scope,
        name: this.name,
        hindiName: this.hindiName,
        code: this.code,
        departmentIds: this.departmentIds,
        departmentNames: this.labels('department', this.departmentIds),
        courseIds: this.courseIds,
        courseNames: this.labels('course', this.courseIds),
        branchIds: this.branchIds,
        branchNames: this.labels('branch', this.branchIds),
        subjectType: this.subjectType,
        subjectOption: this.subjectOption,
        evaluationType: this.evaluationType,
        credits: this.credits,
        subjectCounter: this.subjectCounter,
        lectureHours: this.lectureHours,
        tutorialHours: this.tutorialHours,
        labHours: this.labHours,
        maxMarks: this.maxMarks,
        passMarks: this.passMarks,
        internalMarks: this.internalMarks,
        externalMarks: this.externalMarks,
        midTermMarks: this.midTermMarks,
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
    if (section === 'faculties')
      return {
        name: this.name,
        code: this.code,
        email: this.email,
        universityId: this.universityId,
        collegeId: this.collegeId,
        departmentIds: this.departmentIds,
        subjectIds: this.subjectIds,
        weeklyLimit: this.weeklyLimit,
        availableDays: this.availableDays,
        isActive: true,
      };
    if (section === 'rooms')
      return {
        name: this.name,
        code: this.code,
        universityId: this.universityId,
        collegeId: this.collegeId,
        building: this.building,
        floor: this.floor,
        roomType: this.roomType,
        capacity: this.capacity,
        subjectIds: this.subjectIds,
        isActive: true,
      };
    return {
      timetableMasterId: this.timetableMasterId,
      timetableStructureId: this.timetableStructureId,
      timetablePeriodId: this.timetablePeriodId,
      academicSession: this.session,
      semester: Number(this.semester),
      groupId: this.groupId,
      sectionId: this.sectionId,
      setIds: this.setIds,
      subjectId: this.subjectIds[0],
      facultyId: this.facultyId,
      roomId: this.roomId,
      day: this.day,
      classType: this.classType,
      effectiveFrom: this.effectiveFrom || null,
      effectiveTo: this.effectiveTo || null,
      isActive: true,
    };
  }
  allocationBody() {
    return {
      studentAdmissionId: this.studentAdmissionId,
      groupId: this.groupId,
      sectionId: this.sectionId,
      setId: this.setId,
      academicSession: this.session,
      semester: Number(this.semester),
    };
  }

  downloadTemplate() {
    const csv =
      'studentId,academicSession,semester,groupName,sectionName,setName\n26CSE0001,2026-2027,1,First Year,Section A,G1\n';
    const link = document.createElement('a');
    link.href = URL.createObjectURL(new Blob([csv], { type: 'text/csv' }));
    link.download = 'student-academic-assignment-template.csv';
    link.click();
    URL.revokeObjectURL(link.href);
  }
  readCsv(event: Event) {
    const file = (event.target as HTMLInputElement).files?.[0];
    if (!file) return;
    file.text().then((text) => this.previewCsv(text));
  }
  previewCsv(text: string) {
    const lines = text.split(/\r?\n/).filter(Boolean);
    const headers = (lines.shift() || '').split(',').map((value) => value.trim());
    const rows = lines.map((line) => {
      const values = line.split(',').map((value) => value.trim());
      const row = Object.fromEntries(headers.map((header, index) => [header, values[index] || '']));
      const student = this.students().find((item) => item.studentId === row['studentId']);
      const group = this.groups().find(
        (item) => item.name === row['groupName'] && item.academicSession === row['academicSession'],
      );
      const section = this.sections().find(
        (item) =>
          item.name === row['sectionName'] && item.academicSession === row['academicSession'],
      );
      const set = this.sets().find(
        (item) =>
          item.name === row['setName'] &&
          item.academicSession === row['academicSession'] &&
          item.groupId === group?._id &&
          item.sectionId === section?._id,
      );
      return {
        studentAdmissionId: student?._id || '',
        groupId: group?._id || '',
        sectionId: section?._id || '',
        setId: set?._id || '',
        academicSession: row['academicSession'],
        semester: Number(row['semester']),
      };
    });
    this.api.previewAcademicAllocations(rows).subscribe({
      next: (result) => this.previewRows.set(result.rows),
      error: (error) => this.error.set(apiMessage(error, 'CSV preview failed.')),
    });
  }
  importPreview() {
    const valid = this.previewRows()
      .filter((row) => !row.error)
      .map((row) => row.data);
    if (!valid.length) return;
    this.api.bulkAcademicAllocations(valid).subscribe({
      next: (result) => {
        this.message.set(`${result.assigned} student(s) assigned.`);
        this.previewRows.set([]);
        this.load();
      },
      error: (error) => this.error.set(apiMessage(error, 'CSV import failed.')),
    });
  }
  actionsFor(): readonly CompactActionItem[] {
    if (this.section() === 'timetable-periods') return this.editOnlyActions;
    return [
      'groups',
      'sections',
      'sets',
      'subjects',
      'faculties',
      'rooms',
      'timetable-masters',
      'timetable-structures',
    ].includes(this.section())
      ? this.editActions
      : this.deleteActions;
  }
  handleAction(action: string, item: AcademicRecord) {
    if (action === 'edit') this.edit(item);
    else if (action === 'delete') this.remove(item);
  }
  edit(item: AcademicRecord) {
    this.editingId.set(item._id);
    this.name = item.name || '';
    this.code = item.code || '';
    this.session = item.academicSession || '';
    this.semester = Number(item.semester || 1);
    this.universityId = item.universityId || '';
    this.collegeId = item.collegeId || '';
    this.levelId = item.levelId || '';
    this.departmentIds = (item.departmentIds || []).map(String);
    this.courseIds = (item.courseIds || []).map(String);
    this.branchIds = (item.branchIds || []).map(String);
    this.groupIds = (item.groupIds || []).map(String);
    this.groupId = item.groupId || '';
    this.sectionId = item.sectionId || '';
    this.hindiName = item.hindiName || '';
    this.subjectType = item.subjectType || 'theory';
    this.subjectOption = item.subjectOption || 'required';
    this.evaluationType = item.evaluationType || 'marks';
    this.credits = Number(item.credits || 0);
    this.lectureHours = Number(item.lectureHours || 0);
    this.tutorialHours = Number(item.tutorialHours || 0);
    this.labHours = Number(item.labHours || 0);
    this.maxMarks = Number(item.maxMarks || 0);
    this.passMarks = Number(item.passMarks || 0);
    this.internalMarks = Number(item.internalMarks || 0);
    this.externalMarks = Number(item.externalMarks || 0);
    this.midTermMarks = Number(item.midTermMarks || 0);
    this.isPaper = Boolean(item.flags?.['isPaper']);
    this.isOpenElective = Boolean(item.flags?.['isOpenElective']);
    this.isFoundation = Boolean(item.flags?.['isFoundation']);
    this.isGroupSubject = Boolean(item.flags?.['isGroupSubject']);
    this.allowMidMarksEntry = Boolean(item.flags?.['allowMidMarksEntry']);
    this.allowExternalMarksEntry = Boolean(item.flags?.['allowExternalMarksEntry']);
    this.showAlternativeGrade = Boolean(item.visibility?.['showAlternativeGrade']);
    this.showAlternativeGradePoint = Boolean(item.visibility?.['showAlternativeGradePoint']);
    this.showAlternativeSubjectCredit = Boolean(item.visibility?.['showAlternativeSubjectCredit']);
    this.hideInternalMarks = Boolean(item.visibility?.['hideInternalMarks']);
    this.hideExternalMarks = Boolean(item.visibility?.['hideExternalMarks']);
    this.hideMidTermMarks = Boolean(item.visibility?.['hideMidTermMarks']);
    this.hideTotalMarks = Boolean(item.visibility?.['hideTotalMarks']);
    this.email = item.email || '';
    this.weeklyLimit = Number(item.weeklyLimit || 40);
    this.availableDays = item.availableDays || [
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
    ];
    this.subjectIds = (item.subjectIds || []).map(String);
    this.building = item.building || '';
    this.floor = item.floor || '';
    this.roomType = item.roomType || 'classroom';
    this.capacity = Number(item.capacity || 1);
    this.timetableMasterId = item.timetableMasterId || '';
    this.timetableStructureId = item.timetableStructureId || '';
    this.timetablePeriodId = item.timetablePeriodId || '';
    this.periodCount = Number(item.periodCount || 8);
    this.workingDays = item.workingDays || this.workingDays;
    this.periodType = item.periodType || 'lecture';
    this.durationMinutes = Number(item.durationMinutes || 50);
    this.startTime = item.startTime || '09:00';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
  remove(item: AcademicRecord) {
    if (!confirm(`Delete ${item.name || item.code || 'this record'}?`)) return;
    this.api.deleteAcademicRecord(this.resources[this.section()]!, item._id).subscribe({
      next: () => this.load(),
      error: (error) => this.error.set(apiMessage(error, 'Could not delete record.')),
    });
  }
  reset(clearMessages = true) {
    this.editingId.set(null);
    this.name = '';
    this.code = '';
    this.departmentIds = [];
    this.courseIds = [];
    this.branchIds = [];
    this.groupIds = [];
    this.groupId = '';
    this.sectionId = '';
    this.setId = '';
    this.subjectIds = [];
    this.studentAdmissionId = '';
    this.timetableMasterId = '';
    this.timetableStructureId = '';
    this.timetablePeriodId = '';
    this.periodCount = 8;
    this.periodType = 'lecture';
    this.durationMinutes = 50;
    this.startTime = '09:00';
    this.workingDays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
    this.hindiName = '';
    this.isPaper = false;
    this.isOpenElective = false;
    this.isFoundation = false;
    this.isGroupSubject = false;
    this.allowMidMarksEntry = false;
    this.allowExternalMarksEntry = false;
    this.showAlternativeGrade = false;
    this.showAlternativeGradePoint = false;
    this.showAlternativeSubjectCredit = false;
    this.hideInternalMarks = false;
    this.hideExternalMarks = false;
    this.hideMidTermMarks = false;
    this.hideTotalMarks = false;
    this.availableDays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
    if (clearMessages) {
      this.error.set('');
      this.message.set('');
    }
  }
}
