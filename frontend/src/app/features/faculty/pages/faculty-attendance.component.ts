import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ApiService } from '../../../core/api.service';
import { AttendanceStudent, FacultyAttendanceClass } from '../../../core/models';
import { FacultySessionService } from '../shared/faculty-session.service';

@Component({
  selector: 'erp-faculty-attendance',
  imports: [CommonModule, FormsModule],
  templateUrl: './faculty-attendance.component.html',
  styleUrl: './faculty-attendance.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FacultyAttendanceComponent {
  private readonly api = inject(ApiService);
  private readonly session = inject(FacultySessionService);
  readonly classes = signal<FacultyAttendanceClass[]>([]);
  readonly students = signal<AttendanceStudent[]>([]);
  readonly selectedClass = signal<FacultyAttendanceClass | null>(null);
  readonly loading = signal(false);
  readonly saving = signal(false);
  readonly mapped = signal(true);
  readonly error = signal('');
  readonly message = signal('');
  date = localDate();

  constructor() {
    this.loadClasses();
  }

  loadClasses(): void {
    const token = this.session.token();
    if (!token) return;
    this.loading.set(true);
    this.error.set('');
    this.api.facultyAttendanceClasses(token, this.date).subscribe({
      next: (result) => {
        this.classes.set(result.items);
        this.mapped.set(result.facultyMapped);
        this.selectedClass.set(null);
        this.students.set([]);
        this.loading.set(false);
      },
      error: () => {
        this.error.set('Attendance classes could not be loaded.');
        this.loading.set(false);
      },
    });
  }

  openClass(item: FacultyAttendanceClass): void {
    const token = this.session.token();
    if (!token) return;
    this.loading.set(true);
    this.api.facultyAttendanceRoster(token, item._id, this.date).subscribe({
      next: (result) => {
        this.selectedClass.set(item);
        this.students.set(result.students);
        this.loading.set(false);
      },
      error: () => {
        this.error.set('The student roster could not be loaded.');
        this.loading.set(false);
      },
    });
  }

  setAll(status: 'present' | 'absent'): void {
    this.students.update((items) => items.map((student) => ({ ...student, status })));
  }

  save(): void {
    const token = this.session.token();
    const entry = this.selectedClass();
    if (!token || !entry || !this.students().length) return;
    this.saving.set(true);
    this.api
      .saveFacultyAttendance(
        token,
        entry._id,
        this.date,
        this.students().map((student) => ({
          studentAdmissionId: student.admissionId,
          status: student.status,
        })),
      )
      .subscribe({
        next: () => {
          this.message.set('Attendance saved successfully.');
          this.saving.set(false);
          this.loadClasses();
        },
        error: () => {
          this.error.set('Attendance could not be saved.');
          this.saving.set(false);
        },
      });
  }
}

function localDate(): string {
  const now = new Date();
  return `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')}`;
}
