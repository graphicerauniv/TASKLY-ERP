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
  TimetableAudience,
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
  readonly editorMode = signal<'subject' | 'faculty' | 'room' | 'all'>('all');
  readonly combinedOpen = signal(false);
  readonly copiedEntry = signal<AcademicTimetableEntry | null>(null);
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
  audienceDraft: TimetableAudience[] = [];
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
    const timetable = this.timetableMasters().find((item) => item._id === this.timetableMasterId);
    return this.groups().filter(
      (item) =>
        item.academicSession === this.session &&
        item.semester === Number(this.semester) &&
        (!timetable ||
          (item.universityId === timetable.universityId && item.collegeId === timetable.collegeId)),
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
    const timetable = this.timetableMasters().find((item) => item._id === this.timetableMasterId);
    return this.subjects().filter(
      (item) =>
        item.isActive &&
        (!item.universityId || item.universityId === timetable?.universityId) &&
        (!item.collegeId || item.collegeId === timetable?.collegeId) &&
        (!item.academicSession || item.academicSession === this.session) &&
        (!item.semester || item.semester === Number(this.semester)),
    );
  }
  availableFaculty() {
    const timetable = this.timetableMasters().find((item) => item._id === this.timetableMasterId);
    return this.faculties().filter(
      (item) =>
        item.isActive &&
        (!item.universityId || item.universityId === timetable?.universityId) &&
        (!item.collegeId || item.collegeId === timetable?.collegeId) &&
        (!this.subjectId || !item.subjectIds.length || item.subjectIds.includes(this.subjectId)),
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
      y: Math.min(event.clientY, window.innerHeight - 440),
      day,
      period,
      entry: this.entryFor(day, period),
    });
  }
  editSlot(mode: 'subject' | 'faculty' | 'room' | 'all' = 'all') {
    const context = this.context();
    if (!context) return;
    this.editingEntry.set(context.entry);
    this.activeDay.set(context.day);
    this.activePeriod.set(context.period);
    this.subjectId = context.entry?.subjectId || '';
    this.facultyId = context.entry?.facultyId || '';
    this.roomId = context.entry?.roomId || '';
    this.classType = context.entry?.classType || 'lecture';
    this.editorMode.set(mode);
    this.editorOpen.set(true);
    this.context.set(null);
  }
  closeEditor() {
    this.editorOpen.set(false);
    this.editingEntry.set(null);
  }
  openCombinedClass() {
    const context = this.context();
    if (!context) return;
    this.editingEntry.set(context.entry);
    this.activeDay.set(context.day);
    this.activePeriod.set(context.period);
    this.audienceDraft = context.entry?.audiences?.length
      ? context.entry.audiences.map((item) => ({
          groupId: item.groupId,
          sectionIds: [...item.sectionIds],
          setIds: [...(item.setIds || [])],
        }))
      : [{ groupId: this.groupId, sectionIds: [this.sectionId], setIds: [] }];
    this.combinedOpen.set(true);
    this.context.set(null);
  }
  audienceFor(groupId: string) {
    return this.audienceDraft.find((item) => item.groupId === groupId);
  }
  sectionsForGroup(groupId: string) {
    return this.sections().filter(
      (item) =>
        item.academicSession === this.session &&
        item.semester === Number(this.semester) &&
        item.groupIds.includes(groupId),
    );
  }
  toggleAudienceGroup(groupId: string) {
    const existing = this.audienceFor(groupId);
    if (existing) this.audienceDraft = this.audienceDraft.filter((item) => item !== existing);
    else this.audienceDraft = [...this.audienceDraft, { groupId, sectionIds: [], setIds: [] }];
  }
  toggleAudienceSection(groupId: string, sectionId: string) {
    const audience = this.audienceFor(groupId);
    if (!audience) return;
    audience.sectionIds = audience.sectionIds.includes(sectionId)
      ? audience.sectionIds.filter((value) => value !== sectionId)
      : [...audience.sectionIds, sectionId];
    this.audienceDraft = [...this.audienceDraft];
  }
  saveCombinedClass() {
    const validAudiences = this.audienceDraft.filter((item) => item.sectionIds.length);
    const period = this.activePeriod();
    if (!period || !validAudiences.length) {
      this.error.set('Select at least one group and section for the combined class.');
      return;
    }
    this.saving.set(true);
    const current = this.editingEntry();
    const request = current
      ? this.api.timetableAction<AcademicTimetableEntry>(current._id, 'update', {
          audiences: validAudiences,
        })
      : this.api.createAcademicRecord<AcademicTimetableEntry>('timetables', {
          academicSession: this.session,
          semester: Number(this.semester),
          timetableMasterId: this.timetableMasterId,
          timetableStructureId: this.timetableStructureId,
          timetablePeriodId: period._id,
          groupId: validAudiences[0].groupId,
          sectionId: validAudiences[0].sectionIds[0],
          audiences: validAudiences,
          setIds: [],
          subjectId: '',
          facultyId: '',
          roomId: '',
          day: this.activeDay(),
          classType: 'lecture',
          isActive: true,
        });
    request.subscribe({
      next: () => {
        this.message.set('Combined class audience saved.');
        this.saving.set(false);
        this.combinedOpen.set(false);
        this.openTimetable();
      },
      error: (error) => {
        this.error.set(apiMessage(error, 'Could not save the combined class.'));
        this.saving.set(false);
      },
    });
  }
  subjectChanged() {
    if (!this.availableFaculty().some((item) => item._id === this.facultyId)) this.facultyId = '';
    if (!this.availableRooms().some((item) => item._id === this.roomId)) this.roomId = '';
  }
  saveSlot() {
    const period = this.activePeriod();
    const mode = this.editorMode();
    if (
      !period ||
      (mode === 'subject' && !this.subjectId) ||
      (mode === 'faculty' && !this.facultyId) ||
      (mode === 'room' && !this.roomId) ||
      (mode === 'all' && (!this.subjectId || !this.facultyId))
    ) {
      this.error.set('Select the requested timetable assignment.');
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
  copySlot() {
    const entry = this.context()?.entry;
    if (!entry) return;
    this.copiedEntry.set(entry);
    this.context.set(null);
    this.message.set('Timetable slot copied. Right-click another slot to paste it.');
  }
  pasteSlot() {
    const source = this.copiedEntry();
    const target = this.context();
    if (!source || !target || target.entry) return;
    this.context.set(null);
    this.saving.set(true);
    this.api
      .createAcademicRecord<AcademicTimetableEntry>('timetables', {
        academicSession: this.session,
        semester: Number(this.semester),
        timetableMasterId: this.timetableMasterId,
        timetableStructureId: this.timetableStructureId,
        timetablePeriodId: target.period._id,
        groupId: source.groupId,
        sectionId: source.sectionId,
        audiences: source.audiences || [],
        setIds: source.setIds || [],
        subjectId: source.subjectId || '',
        facultyId: source.facultyId || '',
        roomId: source.roomId || '',
        day: target.day,
        classType: source.classType || 'lecture',
        isActive: true,
      })
      .subscribe({
        next: () => {
          this.message.set('Copied timetable details pasted.');
          this.saving.set(false);
          this.openTimetable();
        },
        error: (error) => {
          this.error.set(apiMessage(error, 'Could not paste this timetable slot.'));
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
