import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, HostListener, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Observable } from 'rxjs';
import { ApiService } from '../../../core/api.service';
import {
  AcademicFaculty,
  AcademicGroup,
  AcademicGroupSubject,
  AcademicRoom,
  AcademicSection,
  AcademicSubject,
  AcademicTimetableEntry,
  MasterValue,
  TimetableMaster,
  TimetablePeriod,
  TimetableStructure,
} from '../../../core/models';
import { AdminPageComponent } from '../../../shared/ui/admin-page/admin-page.component';

interface SlotContext {
  x: number;
  y: number;
  day: string;
  period: TimetablePeriod;
  entry: AcademicTimetableEntry | null;
}

function apiMessage(error: unknown, fallback: string) {
  if (typeof error === 'object' && error && 'error' in error) {
    const value = (error as { error?: { message?: unknown } }).error?.message;
    if (typeof value === 'string') return value;
  }
  return fallback;
}

@Component({
  selector: 'erp-timetable-builder',
  imports: [CommonModule, FormsModule, AdminPageComponent],
  templateUrl: './timetable-builder.component.html',
  styleUrl: './timetable-builder.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TimetableBuilderComponent {
  private readonly api = inject(ApiService);
  readonly loading = signal(true);
  readonly saving = signal(false);
  readonly gridOpen = signal(false);
  readonly error = signal('');
  readonly message = signal('');
  readonly masters = signal<Array<MasterValue & { typeSlug: string }>>([]);
  readonly groups = signal<AcademicGroup[]>([]);
  readonly sections = signal<AcademicSection[]>([]);
  readonly subjects = signal<AcademicSubject[]>([]);
  readonly faculties = signal<AcademicFaculty[]>([]);
  readonly rooms = signal<AcademicRoom[]>([]);
  readonly groupSubjects = signal<AcademicGroupSubject[]>([]);
  readonly timetableMasters = signal<TimetableMaster[]>([]);
  readonly timetableStructures = signal<TimetableStructure[]>([]);
  readonly timetablePeriods = signal<TimetablePeriod[]>([]);
  readonly entries = signal<AcademicTimetableEntry[]>([]);
  readonly context = signal<SlotContext | null>(null);
  readonly editorOpen = signal(false);
  readonly editingEntry = signal<AcademicTimetableEntry | null>(null);
  readonly activeDay = signal('');
  readonly activePeriod = signal<TimetablePeriod | null>(null);

  session = '';
  semester = 1;
  groupId = '';
  sectionId = '';
  timetableMasterId = '';
  timetableStructureId = '';
  subjectId = '';
  facultyId = '';
  roomId = '';
  classType = 'lecture';
  readonly semesterOptions = Array.from({ length: 20 }, (_, index) => index + 1);

  constructor() {
    this.loadBootstrap();
  }

  @HostListener('document:click')
  closeContext() {
    this.context.set(null);
  }

  master(type: string) {
    return this.masters().filter((item) => item.typeSlug === type);
  }
  availableGroups() {
    return this.groups().filter(
      (item) => item.academicSession === this.session && item.semester === Number(this.semester),
    );
  }
  availableSections() {
    return this.sections().filter(
      (item) =>
        item.academicSession === this.session &&
        item.semester === Number(this.semester) &&
        item.groupIds.includes(this.groupId),
    );
  }
  availableTimetables() {
    const group = this.groups().find((item) => item._id === this.groupId);
    return this.timetableMasters().filter(
      (item) =>
        item.isActive &&
        item.academicSession === this.session &&
        (!group ||
          (item.universityId === group.universityId && item.collegeId === group.collegeId)),
    );
  }
  availableStructures() {
    return this.timetableStructures().filter(
      (item) => item.isActive && item.timetableMasterId === this.timetableMasterId,
    );
  }
  selectedStructure() {
    return this.timetableStructures().find((item) => item._id === this.timetableStructureId);
  }
  periods() {
    return this.timetablePeriods()
      .filter(
        (item) => item.timetableStructureId === this.timetableStructureId && item.isConfigured,
      )
      .sort((left, right) => left.periodNumber - right.periodNumber);
  }
  workingDays() {
    return this.selectedStructure()?.workingDays || [];
  }
  availableSubjects() {
    const ids = new Set(
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
    return this.subjects().filter((item) => ids.has(item._id) && item.isActive);
  }
  availableFaculty() {
    return this.faculties().filter(
      (item) =>
        item.isActive && (!item.subjectIds.length || item.subjectIds.includes(this.subjectId)),
    );
  }
  availableRooms() {
    return this.rooms().filter(
      (item) =>
        item.isActive && (!item.subjectIds.length || item.subjectIds.includes(this.subjectId)),
    );
  }

  resetAfter(level: 'session' | 'semester' | 'group' | 'section' | 'master') {
    this.gridOpen.set(false);
    if (level === 'session' || level === 'semester') this.groupId = '';
    if (['session', 'semester', 'group'].includes(level)) this.sectionId = '';
    if (['session', 'semester', 'group', 'section'].includes(level)) this.timetableMasterId = '';
    if (level !== 'master') this.timetableStructureId = '';
    else this.timetableStructureId = '';
  }

  loadBootstrap() {
    this.loading.set(true);
    this.api.academicBootstrap().subscribe({
      next: (data) => {
        this.masters.set(data.masters);
        this.groups.set(data.groups);
        this.sections.set(data.sections);
        this.subjects.set(data.subjects);
        this.faculties.set(data.faculties);
        this.rooms.set(data.rooms);
        this.groupSubjects.set(data.groupSubjects);
        this.timetableMasters.set(data.timetableMasters);
        this.timetableStructures.set(data.timetableStructures);
        this.timetablePeriods.set(data.timetablePeriods);
        this.loading.set(false);
      },
      error: (error) => {
        this.error.set(apiMessage(error, 'Could not load timetable setup.'));
        this.loading.set(false);
      },
    });
  }

  openTimetable() {
    if (
      !this.session ||
      !this.groupId ||
      !this.sectionId ||
      !this.timetableMasterId ||
      !this.timetableStructureId
    ) {
      this.error.set('Select the session, semester, group, section, timetable and structure.');
      return;
    }
    if (!this.periods().length) {
      this.error.set('Configure the timetable periods before opening the timetable.');
      return;
    }
    this.error.set('');
    this.loading.set(true);
    this.api
      .academicRecords<AcademicTimetableEntry>('timetables', {
        academicSession: this.session,
        semester: this.semester,
        groupId: this.groupId,
        sectionId: this.sectionId,
        timetableMasterId: this.timetableMasterId,
        timetableStructureId: this.timetableStructureId,
      })
      .subscribe({
        next: ({ items }) => {
          this.entries.set(items);
          this.gridOpen.set(true);
          this.loading.set(false);
        },
        error: (error) => {
          this.error.set(apiMessage(error, 'Could not open the timetable.'));
          this.loading.set(false);
        },
      });
  }

  entryFor(day: string, period: TimetablePeriod) {
    return (
      this.entries().find((entry) => {
        const ids = entry.timetablePeriodIds?.length
          ? entry.timetablePeriodIds
          : [entry.timetablePeriodId];
        return entry.day === day && ids[0] === period._id;
      }) || null
    );
  }
  covered(day: string, period: TimetablePeriod) {
    return this.entries().some((entry) => {
      const ids = entry.timetablePeriodIds?.length
        ? entry.timetablePeriodIds
        : [entry.timetablePeriodId];
      return entry.day === day && ids.slice(1).includes(period._id);
    });
  }
  span(entry: AcademicTimetableEntry | null) {
    return Math.max(1, entry?.timetablePeriodIds?.length || 1);
  }
  hasDraftChanges() {
    return this.entries().some((entry) => entry.status !== 'published');
  }

  showContext(event: MouseEvent, day: string, period: TimetablePeriod) {
    event.preventDefault();
    event.stopPropagation();
    if (period.periodType === 'break') return;
    this.context.set({
      x: Math.min(event.clientX, window.innerWidth - 230),
      y: Math.min(event.clientY, window.innerHeight - 300),
      day,
      period,
      entry: this.entryFor(day, period),
    });
  }
  editSlot() {
    const context = this.context();
    if (!context) return;
    this.editingEntry.set(context.entry);
    this.activeDay.set(context.day);
    this.activePeriod.set(context.period);
    this.subjectId = context.entry?.subjectId || '';
    this.facultyId = context.entry?.facultyId || '';
    this.roomId = context.entry?.roomId || '';
    this.classType = context.entry?.classType || 'lecture';
    this.editorOpen.set(true);
    this.context.set(null);
  }
  closeEditor() {
    this.editorOpen.set(false);
    this.editingEntry.set(null);
  }
  subjectChanged() {
    if (!this.availableFaculty().some((item) => item._id === this.facultyId)) this.facultyId = '';
    if (!this.availableRooms().some((item) => item._id === this.roomId)) this.roomId = '';
  }
  saveSlot() {
    const period = this.activePeriod();
    if (!period || !this.subjectId || !this.facultyId || !this.roomId) {
      this.error.set('Select a subject, faculty and room.');
      return;
    }
    this.saving.set(true);
    this.error.set('');
    const current = this.editingEntry();
    const request = current
      ? this.api.timetableAction<AcademicTimetableEntry>(current._id, 'update', {
          subjectId: this.subjectId,
          facultyId: this.facultyId,
          roomId: this.roomId,
          classType: this.classType,
        })
      : this.api.createAcademicRecord<AcademicTimetableEntry>('timetables', {
          academicSession: this.session,
          semester: Number(this.semester),
          timetableMasterId: this.timetableMasterId,
          timetableStructureId: this.timetableStructureId,
          timetablePeriodId: period._id,
          groupId: this.groupId,
          sectionId: this.sectionId,
          setIds: [],
          subjectId: this.subjectId,
          facultyId: this.facultyId,
          roomId: this.roomId,
          day: this.activeDay(),
          classType: this.classType,
          effectiveFrom: null,
          effectiveTo: null,
          isActive: true,
        });
    request.subscribe({
      next: () => {
        this.message.set(current ? 'Timetable slot updated.' : 'Timetable slot assigned.');
        this.saving.set(false);
        this.closeEditor();
        this.openTimetable();
      },
      error: (error) => {
        this.error.set(apiMessage(error, 'Could not save this timetable slot.'));
        this.saving.set(false);
      },
    });
  }
  mergeSlot() {
    const entry = this.context()?.entry;
    if (!entry) return;
    this.runAction(this.api.timetableAction(entry._id, 'merge'), 'Columns merged.');
  }
  splitSlot() {
    const entry = this.context()?.entry;
    if (!entry) return;
    this.runAction(this.api.timetableAction(entry._id, 'split'), 'Columns split.');
  }
  removeAssignment() {
    const entry = this.context()?.entry;
    if (!entry || !confirm('Remove the subject and teacher from this slot?')) return;
    this.runAction(
      this.api.timetableAction(entry._id, 'remove-assignment'),
      'Subject and teacher removed.',
    );
  }
  clearSlot() {
    const entry = this.context()?.entry;
    if (!entry || !confirm('Remove the subject, faculty and room from this slot?')) return;
    this.runAction(this.api.deleteAcademicRecord('timetables', entry._id), 'Slot cleared.');
  }
  publish() {
    if (!this.entries().length || !confirm('Publish this timetable to the assigned students?'))
      return;
    this.saving.set(true);
    this.error.set('');
    this.api
      .publishTimetable({
        academicSession: this.session,
        semester: Number(this.semester),
        groupId: this.groupId,
        sectionId: this.sectionId,
        timetableMasterId: this.timetableMasterId,
        timetableStructureId: this.timetableStructureId,
      })
      .subscribe({
        next: (result) => {
          this.message.set(`${result.published} timetable slot(s) published to students.`);
          this.saving.set(false);
          this.openTimetable();
        },
        error: (error) => {
          this.error.set(apiMessage(error, 'Could not publish this timetable.'));
          this.saving.set(false);
        },
      });
  }
  private runAction(request: Observable<unknown>, message: string) {
    this.context.set(null);
    this.saving.set(true);
    request.subscribe({
      next: () => {
        this.message.set(message);
        this.saving.set(false);
        this.openTimetable();
      },
      error: (error) => {
        this.error.set(apiMessage(error, 'Timetable action failed.'));
        this.saving.set(false);
      },
    });
  }
}
