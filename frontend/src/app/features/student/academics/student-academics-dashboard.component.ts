import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { LucideSearch } from '@lucide/angular';

type AcademicCategory = 'learning' | 'registration' | 'records';
interface AcademicService {
  id: string;
  title: string;
  description: string;
  icon: string;
  route: string;
}
interface AcademicGroup {
  id: AcademicCategory;
  shortTitle: string;
  title: string;
  description: string;
  items: readonly AcademicService[];
}

const ASSET_ROOT = '/assets/student/academics';

@Component({
  selector: 'erp-student-academics-dashboard',
  imports: [FormsModule, RouterLink, LucideSearch],
  templateUrl: './student-academics-dashboard.component.html',
  styleUrl: './student-academics-dashboard.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StudentAcademicsDashboardComponent {
  readonly activeCategory = signal<AcademicCategory>('learning');
  readonly search = signal('');
  readonly groups: readonly AcademicGroup[] = [
    {
      id: 'learning',
      shortTitle: 'Learning',
      title: 'Learning & Schedule',
      description: 'Manage your classes, schedule and learning activities.',
      items: [
        {
          id: 'attendance',
          title: 'Attendance',
          description: 'View your attendance',
          icon: `${ASSET_ROOT}/attendance.png`,
          route: '/student/attendance',
        },
        {
          id: 'timetable',
          title: 'Timetable',
          description: 'View class schedule',
          icon: `${ASSET_ROOT}/timetable.png`,
          route: '/student/academics/timetable',
        },
        {
          id: 'assignments',
          title: 'Assignments',
          description: 'View and submit work',
          icon: `${ASSET_ROOT}/assignment.png`,
          route: '/student/academics/service/assignments',
        },
        {
          id: 'feedback',
          title: 'Feedback',
          description: 'Share your feedback',
          icon: `${ASSET_ROOT}/feedback.png`,
          route: '/student/academics/service/feedback',
        },
        {
          id: 'subjects',
          title: 'Current Subjects',
          description: 'View subject details',
          icon: `${ASSET_ROOT}/current-subjects.png`,
          route: '/student/academics/service/subjects',
        },
      ],
    },
    {
      id: 'registration',
      shortTitle: 'Registration',
      title: 'Registration & Programmes',
      description: 'Explore course options and manage your registrations.',
      items: [
        {
          id: 'minor',
          title: 'Minor / Specialization Course',
          description: 'Explore additional courses',
          icon: `${ASSET_ROOT}/minor-specialization.png`,
          route: '/student/academics/service/minor',
        },
        {
          id: 'semester-registration',
          title: 'Semester Registration',
          description: 'Register for next semester',
          icon: `${ASSET_ROOT}/semester-registration.png`,
          route: '/student/academics/semester-registration',
        },
        {
          id: 'enrollment',
          title: 'Enrollment Form',
          description: 'Fill and submit form',
          icon: `${ASSET_ROOT}/enrollment-form.png`,
          route: '/student/academics/service/enrollment',
        },
        {
          id: 'electives',
          title: 'Elective Subject Options',
          description: 'Choose your electives',
          icon: `${ASSET_ROOT}/elective-subjects.png`,
          route: '/student/academics/service/electives',
        },
        {
          id: 'thesis',
          title: 'Submit Thesis and Subject',
          description: 'Submit your thesis',
          icon: `${ASSET_ROOT}/thesis-submission.png`,
          route: '/student/academics/service/thesis',
        },
      ],
    },
    {
      id: 'records',
      shortTitle: 'Records',
      title: 'Records & Services',
      description: 'Access important documents and student services.',
      items: [
        {
          id: 'international-document',
          title: 'International Document',
          description: 'Apply for international documents',
          icon: `${ASSET_ROOT}/international-document.png`,
          route: '/student/academics/service/international-document',
        },
        {
          id: 'abc-account',
          title: 'ABC Account Number',
          description: 'View your ABC ID',
          icon: `${ASSET_ROOT}/abc-account.png`,
          route: '/student/academics/service/abc-account',
        },
        {
          id: 'vehicle-registration',
          title: 'Vehicle Registration',
          description: 'Register your vehicle',
          icon: `${ASSET_ROOT}/vehicle-registration.png`,
          route: '/student/academics/service/vehicle-registration',
        },
        {
          id: 'document-upload',
          title: 'Document Upload',
          description: 'Upload your documents',
          icon: `${ASSET_ROOT}/document-upload.png`,
          route: '/student/academics/service/document-upload',
        },
        {
          id: 'document-download',
          title: 'Student Document Download',
          description: 'Download your documents',
          icon: `${ASSET_ROOT}/document-download.png`,
          route: '/student/academics/service/document-download',
        },
      ],
    },
  ];
  readonly visibleGroups = computed(() => {
    const term = this.search().trim().toLowerCase();
    return this.groups.map((group) => ({
      ...group,
      items: group.items.filter(
        (item) => !term || `${item.title} ${item.description}`.toLowerCase().includes(term),
      ),
    }));
  });
}
