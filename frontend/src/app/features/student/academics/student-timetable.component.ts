import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { ApiService } from '../../../core/api.service';
import {
  AcademicSubject,
  AcademicTimetableEntry,
  TimetablePeriod,
  TimetableStructure,
} from '../../../core/models';

@Component({
  selector: 'erp-student-timetable',
  templateUrl: './student-timetable.component.html',
  styleUrls: ['../styles/_student-fees.scss', './student-timetable.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StudentTimetableComponent {
  private readonly api = inject(ApiService);
  readonly items = signal<AcademicTimetableEntry[]>([]);
  readonly subjects = signal<AcademicSubject[]>([]);
  readonly structure = signal<TimetableStructure | null>(null);
  readonly periods = signal<TimetablePeriod[]>([]);
  readonly loading = signal(true);
  readonly error = signal('');
  readonly days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  constructor() {
    this.api.studentTimetable().subscribe({
      next: (result) => {
        this.items.set(result.items);
        this.subjects.set(result.subjects || []);
        this.structure.set(result.structure || null);
        this.periods.set(result.periods || []);
        this.loading.set(false);
      },
      error: () => {
        this.error.set('Your timetable is temporarily unavailable.');
        this.loading.set(false);
      },
    });
  }
  entries(day: string) {
    return this.items()
      .filter((item) => item.day === day)
      .sort((left, right) => left.startTime.localeCompare(right.startTime));
  }
  workingDays() {
    return this.structure()?.workingDays || this.days;
  }
  entryFor(day: string, period: TimetablePeriod) {
    return (
      this.items().find((entry) => {
        const ids = entry.timetablePeriodIds?.length
          ? entry.timetablePeriodIds
          : [entry.timetablePeriodId];
        return entry.day === day && ids[0] === period._id;
      }) || null
    );
  }
  covered(day: string, period: TimetablePeriod) {
    return this.items().some((entry) => {
      const ids = entry.timetablePeriodIds?.length
        ? entry.timetablePeriodIds
        : [entry.timetablePeriodId];
      return entry.day === day && ids.slice(1).includes(period._id);
    });
  }
  span(entry: AcademicTimetableEntry | null) {
    return Math.max(1, entry?.timetablePeriodIds?.length || 1);
  }
}
