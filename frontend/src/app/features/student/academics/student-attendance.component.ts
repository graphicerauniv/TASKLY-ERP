import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { ApiService } from '../../../core/api.service';
import { StudentAttendanceSubject } from '../../../core/models';
import { StudentSessionService } from '../shared/services/student-session.service';

@Component({
  selector: 'erp-student-attendance',
  templateUrl: './student-attendance.component.html',
  styleUrls: ['../styles/_student-fees.scss', './student-timetable.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StudentAttendanceComponent {
  private readonly api = inject(ApiService);
  private readonly session = inject(StudentSessionService);
  readonly subjects = signal<StudentAttendanceSubject[]>([]);
  readonly overall = signal({
    totalLectures: 0,
    presentLectures: 0,
    absentLectures: 0,
    attendancePercentage: 0,
  });
  readonly loading = signal(true);
  readonly error = signal('');

  constructor() {
    const token = this.session.token();
    if (!token) return;
    this.api.studentAttendance(token).subscribe({
      next: (result) => {
        this.subjects.set(result.subjects);
        this.overall.set(result.overall);
        this.loading.set(false);
      },
      error: () => {
        this.error.set('Your attendance is temporarily unavailable.');
        this.loading.set(false);
      },
    });
  }
}
