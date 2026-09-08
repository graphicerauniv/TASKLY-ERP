import {
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
  HostListener,
  computed,
  inject,
  signal,
} from '@angular/core';
import { TitleCasePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import {
  LucideArrowLeft,
  LucideBell,
  LucideBookOpen,
  LucideCalendarCheck,
  LucideChevronLeft,
  LucideChevronRight,
  LucideClock3,
  LucideCoffee,
  LucideDownload,
  LucideGraduationCap,
  LucideInfo,
  LucideMapPin,
  LucideSearch,
  LucideRefreshCw,
  LucideSlidersHorizontal,
  LucideUserRound,
  LucideX,
} from '@lucide/angular';
import { ApiService } from '../../../core/api.service';
import {
  AcademicSubject,
  AcademicTimetableEntry,
  StudentTimetableReminder,
  StudentTimetablePreferences,
  TimetablePeriod,
  TimetableStructure,
} from '../../../core/models';
import { StudentMobileBottomNavComponent } from '../dashboard/components/student-mobile-bottom-nav/student-mobile-bottom-nav.component';
import { StudentSessionService } from '../shared/services/student-session.service';

type TimetableView = 'today' | 'week';
interface DatedDay {
  name: string;
  short: string;
  date: Date;
}

@Component({
  selector: 'erp-student-timetable',
  imports: [
    FormsModule,
    TitleCasePipe,
    RouterLink,
    StudentMobileBottomNavComponent,
    LucideArrowLeft,
    LucideBell,
    LucideBookOpen,
    LucideCalendarCheck,
    LucideChevronLeft,
    LucideChevronRight,
    LucideClock3,
    LucideCoffee,
    LucideDownload,
    LucideGraduationCap,
    LucideInfo,
    LucideMapPin,
    LucideRefreshCw,
    LucideSearch,
    LucideSlidersHorizontal,
    LucideUserRound,
    LucideX,
  ],
  templateUrl: './student-timetable.component.html',
  styleUrl: './student-timetable.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StudentTimetableComponent {
  private readonly api = inject(ApiService);
  private readonly destroyRef = inject(DestroyRef);
  private preferencesInitialized = false;
  readonly session = inject(StudentSessionService);
  readonly items = signal<AcademicTimetableEntry[]>([]);
  readonly subjects = signal<AcademicSubject[]>([]);
  readonly structure = signal<TimetableStructure | null>(null);
  readonly periods = signal<TimetablePeriod[]>([]);
  readonly reminders = signal<StudentTimetableReminder[]>([]);
  readonly publishedAt = signal<string | null>(null);
  readonly loading = signal(true);
  readonly refreshing = signal(false);
  readonly error = signal('');
  readonly now = signal(new Date());
  readonly lastSyncedAt = signal<Date | null>(null);
  readonly view = signal<TimetableView>(
    typeof window !== 'undefined' && window.innerWidth < 768 ? 'today' : 'week',
  );
  readonly selectedDate = signal(this.startOfDay(new Date()));
  readonly selectedEntry = signal<AcademicTimetableEntry | null>(null);
  readonly subjectsOpen = signal(false);
  readonly customizeOpen = signal(false);
  readonly downloadOpen = signal(false);
  readonly subjectSearch = signal('');
  readonly downloadBusy = signal(false);
  readonly savingPreferences = signal(false);
  readonly actionMessage = signal('');
  readonly includeDetails = signal(true);
  readonly weekDayNames = [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
    'Sunday',
  ];
  readonly reminderMinuteOptions = [5, 10, 15, 30, 60];
  readonly preferences = signal<StudentTimetablePreferences>({
    defaultView: 'auto',
    showFaculty: true,
    showRooms: true,
    compactMode: false,
    reminderMinutes: 15,
  });
  readonly preferencesDraft = signal<StudentTimetablePreferences>({ ...this.preferences() });

  readonly weekStart = computed(() => this.startOfWeek(this.selectedDate()));
  readonly weekDays = computed<DatedDay[]>(() => {
    const configured = this.workingDays();
    return configured.map((name) => {
      const date = new Date(this.weekStart());
      const index = Math.max(0, this.weekDayNames.indexOf(name));
      date.setDate(date.getDate() + index);
      return { name, short: name.slice(0, 3), date };
    });
  });
  readonly selectedDay = computed(
    () =>
      this.weekDays().find((day) => this.dateKey(day.date) === this.dateKey(this.selectedDate())) ||
      this.weekDays()[0],
  );
  readonly gridDays = computed(() =>
    this.view() === 'today' && this.selectedDay() ? [this.selectedDay()!] : this.weekDays(),
  );
  readonly filteredSubjects = computed(() => {
    const query = this.subjectSearch().trim().toLowerCase();
    return this.subjects().filter(
      (subject) => !query || `${subject.name} ${subject.code}`.toLowerCase().includes(query),
    );
  });
  readonly nextClass = computed(() => {
    const now = this.now();
    const candidates: Array<{ entry: AcademicTimetableEntry; starts: Date }> = [];
    for (let offset = 0; offset < 14; offset += 1) {
      const date = new Date(now);
      date.setDate(now.getDate() + offset);
      const dayName = date.toLocaleDateString('en-US', { weekday: 'long' });
      for (const entry of this.items().filter((item) => item.day === dayName)) {
        const starts = this.atTime(date, entry.startTime);
        if (starts > now && this.entryApplies(entry, date)) candidates.push({ entry, starts });
      }
    }
    return (
      candidates.sort((left, right) => left.starts.getTime() - right.starts.getTime())[0]?.entry ||
      null
    );
  });

  constructor() {
    this.load();
    if (typeof window !== 'undefined') {
      const clock = window.setInterval(() => this.now.set(new Date()), 30_000);
      const refresh = window.setInterval(() => this.load(true), 60_000);
      const refetch = () => this.load(true);
      window.addEventListener('focus', refetch);
      this.destroyRef.onDestroy(() => {
        window.clearInterval(clock);
        window.clearInterval(refresh);
        window.removeEventListener('focus', refetch);
      });
    }
  }

  @HostListener('document:keydown.escape')
  closeOverlays(): void {
    this.selectedEntry.set(null);
    this.subjectsOpen.set(false);
    this.customizeOpen.set(false);
    this.downloadOpen.set(false);
  }

  load(silent = false): void {
    const token = this.session.token();
    if (!token) {
      this.error.set('Please sign in again to view your timetable.');
      this.loading.set(false);
      return;
    }
    if (silent) {
      if (this.refreshing()) return;
      this.refreshing.set(true);
    } else {
      this.loading.set(true);
      this.error.set('');
    }
    this.api.studentTimetable(token).subscribe({
      next: (result) => {
        this.items.set(result.items || []);
        this.subjects.set(result.subjects || []);
        this.structure.set(result.structure || null);
        this.periods.set(result.periods || []);
        this.reminders.set(result.reminders || []);
        this.publishedAt.set(result.publishedAt || null);
        if (result.preferences) {
          this.preferences.set(result.preferences);
          if (!this.customizeOpen()) this.preferencesDraft.set({ ...result.preferences });
          if (!this.preferencesInitialized) {
            this.view.set(this.preferredView(result.preferences.defaultView));
            this.preferencesInitialized = true;
          }
        }
        this.lastSyncedAt.set(new Date(result.serverTime || Date.now()));
        this.loading.set(false);
        this.refreshing.set(false);
      },
      error: () => {
        if (!silent) this.error.set('Your timetable is temporarily unavailable.');
        else this.actionMessage.set('Could not refresh the timetable. Please try again.');
        this.loading.set(false);
        this.refreshing.set(false);
      },
    });
  }

  workingDays(): string[] {
    const days =
      this.structure()?.workingDays?.filter((day) => this.weekDayNames.includes(day)) || [];
    return days.length ? days : this.weekDayNames.slice(0, 6);
  }

  entryFor(day: DatedDay, period: TimetablePeriod): AcademicTimetableEntry | null {
    return (
      this.items().find(
        (entry) =>
          entry.day === day.name &&
          (entry.timetablePeriodIds?.[0] || entry.timetablePeriodId) === period._id &&
          this.entryApplies(entry, day.date),
      ) || null
    );
  }

  covered(day: DatedDay, period: TimetablePeriod): boolean {
    return this.items().some(
      (entry) =>
        entry.day === day.name &&
        (entry.timetablePeriodIds || []).slice(1).includes(period._id) &&
        this.entryApplies(entry, day.date),
    );
  }

  span(entry: AcademicTimetableEntry | null): number {
    return Math.max(1, entry?.timetablePeriodIds?.length || 1);
  }

  isNext(entry: AcademicTimetableEntry | null): boolean {
    return Boolean(entry && this.nextClass()?._id === entry._id);
  }

  isLive(entry: AcademicTimetableEntry | null, day: DatedDay): boolean {
    if (!entry || !this.entryApplies(entry, day.date)) return false;
    const now = this.now();
    return (
      now >= this.atTime(day.date, entry.startTime) && now < this.atTime(day.date, entry.endTime)
    );
  }

  hasReminder(entry: AcademicTimetableEntry | null): boolean {
    return Boolean(
      entry &&
      this.reminders().some((item) => item.timetableEntryId === entry._id && item.isActive),
    );
  }

  toggleReminder(entry: AcademicTimetableEntry): void {
    const token = this.session.token();
    if (!token) return;
    this.actionMessage.set('');
    if (this.hasReminder(entry)) {
      this.api.deleteStudentTimetableReminder(token, entry._id).subscribe({
        next: () => {
          this.reminders.set(
            this.reminders().filter((item) => item.timetableEntryId !== entry._id),
          );
          this.actionMessage.set('Reminder removed.');
        },
        error: () => this.actionMessage.set('Could not update the reminder. Please try again.'),
      });
      return;
    }
    this.api
      .saveStudentTimetableReminder(token, entry._id, this.preferences().reminderMinutes)
      .subscribe({
        next: ({ reminder }) => {
          this.reminders.set([
            ...this.reminders().filter((item) => item.timetableEntryId !== entry._id),
            reminder,
          ]);
          this.actionMessage.set(
            `Reminder set for ${this.preferences().reminderMinutes} minutes before class.`,
          );
        },
        error: () => this.actionMessage.set('Could not save the reminder. Please try again.'),
      });
  }

  changeWeek(offset: number): void {
    const date = new Date(this.selectedDate());
    date.setDate(date.getDate() + offset * 7);
    this.selectedDate.set(date);
  }

  goToCurrentWeek(): void {
    this.selectedDate.set(this.startOfDay(new Date()));
  }

  selectDay(day: DatedDay): void {
    this.selectedDate.set(day.date);
    this.view.set('today');
  }

  isCurrentWeek(): boolean {
    return this.dateKey(this.weekStart()) === this.dateKey(this.startOfWeek(new Date()));
  }

  weekLabel(): string {
    const days = this.weekDays();
    if (!days.length) return '';
    const start = days[0].date;
    const end = days[days.length - 1].date;
    const startMonth = start.toLocaleDateString('en-GB', { month: 'short' });
    const endMonth = end.toLocaleDateString('en-GB', { month: 'short' });
    return startMonth === endMonth
      ? `${start.getDate()} - ${end.getDate()} ${end.toLocaleDateString('en-GB', { month: 'long' })}`
      : `${start.getDate()} ${startMonth} - ${end.getDate()} ${endMonth}`;
  }

  dayNumber(date: Date): number {
    return date.getDate();
  }

  monthShort(date: Date): string {
    return date.toLocaleDateString('en-GB', { month: 'short' });
  }

  isToday(date: Date): boolean {
    return this.dateKey(date) === this.dateKey(new Date());
  }

  hasClasses(day: DatedDay): boolean {
    return this.items().some(
      (entry) => entry.day === day.name && this.entryApplies(entry, day.date),
    );
  }

  openClass(entry: AcademicTimetableEntry): void {
    this.actionMessage.set('');
    this.selectedEntry.set(entry);
  }

  openSubjects(): void {
    this.subjectSearch.set('');
    this.subjectsOpen.set(true);
  }

  openCustomize(): void {
    this.preferencesDraft.set({ ...this.preferences() });
    this.customizeOpen.set(true);
  }

  updatePreference<K extends keyof StudentTimetablePreferences>(
    key: K,
    value: StudentTimetablePreferences[K],
  ): void {
    this.preferencesDraft.update((current) => ({ ...current, [key]: value }));
  }

  savePreferences(): void {
    const token = this.session.token();
    if (!token || this.savingPreferences()) return;
    this.savingPreferences.set(true);
    this.api.saveStudentTimetablePreferences(token, this.preferencesDraft()).subscribe({
      next: ({ preferences }) => {
        this.preferences.set(preferences);
        this.view.set(this.preferredView(preferences.defaultView));
        this.customizeOpen.set(false);
        this.savingPreferences.set(false);
        this.actionMessage.set('Timetable preferences saved.');
      },
      error: () => {
        this.savingPreferences.set(false);
        this.actionMessage.set('Could not save timetable preferences.');
      },
    });
  }

  lastSyncedLabel(): string {
    const value = this.lastSyncedAt();
    return value
      ? `Updated ${value.toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit' })}`
      : 'Checking for updates';
  }

  private preferredView(value: StudentTimetablePreferences['defaultView']): TimetableView {
    if (value !== 'auto') return value;
    return typeof window !== 'undefined' && window.innerWidth < 768 ? 'today' : 'week';
  }

  viewRelatedSubject(entry: AcademicTimetableEntry): void {
    this.selectedEntry.set(null);
    this.subjectSearch.set(entry.subjectName);
    this.subjectsOpen.set(true);
  }

  subjectFaculty(subject: AcademicSubject): string {
    return (
      [
        ...new Set(
          this.items()
            .filter((entry) => entry.subjectId === subject._id)
            .map((entry) => entry.facultyName),
        ),
      ]
        .filter(Boolean)
        .join(', ') || 'Faculty to be announced'
    );
  }

  downloadPdf(): void {
    const token = this.session.token();
    if (!token) return;
    this.downloadBusy.set(true);
    this.actionMessage.set('');
    this.api
      .studentTimetablePdf(token, this.dateKey(this.weekStart()), this.includeDetails())
      .subscribe({
        next: (file) => {
          const link = document.createElement('a');
          link.href = URL.createObjectURL(file);
          link.download = `GEU_Timetable_Sem${this.session.profile()?.currentSemester || 1}.pdf`;
          link.click();
          setTimeout(() => URL.revokeObjectURL(link.href), 1000);
          this.downloadBusy.set(false);
          this.downloadOpen.set(false);
          this.actionMessage.set('Timetable PDF downloaded.');
        },
        error: () => {
          this.downloadBusy.set(false);
          this.actionMessage.set('Could not generate the PDF. Please try again.');
        },
      });
  }

  updatedLabel(): string {
    if (!this.publishedAt()) return 'Latest published timetable';
    return new Date(this.publishedAt()!).toLocaleString('en-IN', {
      dateStyle: 'medium',
      timeStyle: 'short',
    });
  }

  private entryApplies(entry: AcademicTimetableEntry, date: Date): boolean {
    const key = this.dateKey(date);
    return (
      (!entry.effectiveFrom || key >= entry.effectiveFrom.slice(0, 10)) &&
      (!entry.effectiveTo || key <= entry.effectiveTo.slice(0, 10))
    );
  }

  private startOfDay(value: Date): Date {
    return new Date(value.getFullYear(), value.getMonth(), value.getDate());
  }

  private startOfWeek(value: Date): Date {
    const date = this.startOfDay(value);
    const day = date.getDay();
    date.setDate(date.getDate() - (day === 0 ? 6 : day - 1));
    return date;
  }

  private atTime(date: Date, time: string): Date {
    const [hours, minutes] = time.split(':').map(Number);
    return new Date(date.getFullYear(), date.getMonth(), date.getDate(), hours || 0, minutes || 0);
  }

  private dateKey(value: Date): string {
    const year = value.getFullYear();
    const month = String(value.getMonth() + 1).padStart(2, '0');
    const day = String(value.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  }
}
