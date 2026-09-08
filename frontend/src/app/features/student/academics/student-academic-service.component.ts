import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import {
  LucideArrowLeft,
  LucideCalendarDays,
  LucideCheck,
  LucideDownload,
  LucideFileText,
  LucideInfo,
  LucideSend,
  LucideUpload,
} from '@lucide/angular';
import { StudentSessionService } from '../shared/services/student-session.service';

type ServiceMode = 'form' | 'upload' | 'download' | 'catalog' | 'identity';
interface ServiceDefinition {
  title: string;
  description: string;
  icon: string;
  eyebrow: string;
  mode: ServiceMode;
  action: string;
  helper: string;
  options?: readonly string[];
}

const ASSET_ROOT = '/assets/student/academics';
const SERVICES: Readonly<Record<string, ServiceDefinition>> = {
  assignments: {
    title: 'Assignments',
    description: 'View upcoming work and submit your assignments.',
    icon: `${ASSET_ROOT}/assignment.png`,
    eyebrow: 'Learning & Schedule',
    mode: 'upload',
    action: 'Submit assignment',
    helper: 'Attach your completed PDF or document before submitting.',
  },
  feedback: {
    title: 'Student Feedback',
    description: 'Share feedback about your academic experience.',
    icon: `${ASSET_ROOT}/feedback.png`,
    eyebrow: 'Learning & Schedule',
    mode: 'form',
    action: 'Send feedback',
    helper: 'Your feedback is reviewed by the academic office.',
  },
  subjects: {
    title: 'Current Subjects',
    description: 'Review subjects registered for your current semester.',
    icon: `${ASSET_ROOT}/current-subjects.png`,
    eyebrow: 'Learning & Schedule',
    mode: 'catalog',
    action: 'View timetable',
    helper: 'Subject details reflect your current academic registration.',
    options: [
      'Computer Networks',
      'Operating Systems',
      'Data Structures',
      'Database Management Systems',
    ],
  },
  minor: {
    title: 'Minor / Specialization Course',
    description: 'Explore and apply for an additional specialization.',
    icon: `${ASSET_ROOT}/minor-specialization.png`,
    eyebrow: 'Registration & Programmes',
    mode: 'catalog',
    action: 'Save preference',
    helper: 'Availability depends on eligibility and seat capacity.',
    options: ['Artificial Intelligence', 'Cyber Security', 'Cloud Computing', 'Data Analytics'],
  },
  'semester-registration': {
    title: 'Semester Registration',
    description: 'Complete registration for your next semester.',
    icon: `${ASSET_ROOT}/semester-registration.png`,
    eyebrow: 'Registration & Programmes',
    mode: 'form',
    action: 'Submit registration',
    helper: 'Verify your details before submitting the registration.',
  },
  enrollment: {
    title: 'Enrollment Form',
    description: 'Complete and submit your academic enrollment details.',
    icon: `${ASSET_ROOT}/enrollment-form.png`,
    eyebrow: 'Registration & Programmes',
    mode: 'form',
    action: 'Submit enrollment',
    helper: 'All required fields must match your official student record.',
  },
  electives: {
    title: 'Elective Subject Options',
    description: 'Choose preferred elective subjects for the semester.',
    icon: `${ASSET_ROOT}/elective-subjects.png`,
    eyebrow: 'Registration & Programmes',
    mode: 'catalog',
    action: 'Confirm selection',
    helper: 'Final allocation is subject to timetable and seat availability.',
    options: ['Machine Learning', 'Internet of Things', 'Information Security', 'Mobile Computing'],
  },
  thesis: {
    title: 'Submit Thesis and Subject',
    description: 'Provide your thesis topic and supporting document.',
    icon: `${ASSET_ROOT}/thesis-submission.png`,
    eyebrow: 'Registration & Programmes',
    mode: 'upload',
    action: 'Submit thesis',
    helper: 'Upload a PDF document with the approved title and synopsis.',
  },
  'international-document': {
    title: 'International Document',
    description: 'Apply for transcripts and documents for international use.',
    icon: `${ASSET_ROOT}/international-document.png`,
    eyebrow: 'Records & Services',
    mode: 'form',
    action: 'Submit application',
    helper: 'The academic office will verify your request before processing.',
  },
  'abc-account': {
    title: 'ABC Account Number',
    description: 'View and link your Academic Bank of Credits ID.',
    icon: `${ASSET_ROOT}/abc-account.png`,
    eyebrow: 'Records & Services',
    mode: 'identity',
    action: 'Save ABC ID',
    helper: 'Enter the 12-digit ABC ID linked to your DigiLocker account.',
  },
  'vehicle-registration': {
    title: 'Vehicle Registration',
    description: 'Register a vehicle for campus access.',
    icon: `${ASSET_ROOT}/vehicle-registration.png`,
    eyebrow: 'Records & Services',
    mode: 'form',
    action: 'Register vehicle',
    helper: 'Keep the registration certificate available for verification.',
  },
  'document-upload': {
    title: 'Document Upload',
    description: 'Upload academic and identity documents securely.',
    icon: `${ASSET_ROOT}/document-upload.png`,
    eyebrow: 'Records & Services',
    mode: 'upload',
    action: 'Upload document',
    helper: 'PDF, JPG and PNG files up to 10 MB are supported.',
  },
  'document-download': {
    title: 'Student Document Download',
    description: 'Access available student documents and letters.',
    icon: `${ASSET_ROOT}/document-download.png`,
    eyebrow: 'Records & Services',
    mode: 'download',
    action: 'Download',
    helper: 'Documents are generated using your current student record.',
    options: ['Bonafide Certificate', 'Enrollment Letter', 'Student Profile Summary'],
  },
};

@Component({
  selector: 'erp-student-academic-service',
  imports: [
    FormsModule,
    RouterLink,
    LucideArrowLeft,
    LucideCalendarDays,
    LucideCheck,
    LucideDownload,
    LucideFileText,
    LucideInfo,
    LucideSend,
    LucideUpload,
  ],
  templateUrl: './student-academic-service.component.html',
  styleUrl: './student-academic-service.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StudentAcademicServiceComponent {
  private readonly route = inject(ActivatedRoute);
  private readonly router = inject(Router);
  readonly session = inject(StudentSessionService);
  readonly service = signal<ServiceDefinition>(SERVICES['assignments']);
  readonly selectedOption = signal('');
  readonly note = signal('');
  readonly reference = signal('');
  readonly fileName = signal('');
  readonly submitted = signal(false);
  readonly period = computed(
    () =>
      `${this.session.profile()?.academicSession || 'Current session'} · Semester ${this.session.profile()?.currentSemester || 1}`,
  );

  constructor() {
    this.route.paramMap.subscribe((params) => {
      const definition = SERVICES[params.get('serviceId') || ''];
      if (!definition) {
        void this.router.navigateByUrl('/student/academics');
        return;
      }
      this.service.set(definition);
      this.selectedOption.set(definition.options?.[0] || '');
      this.note.set('');
      this.reference.set('');
      this.fileName.set('');
      this.submitted.set(false);
    });
  }

  selectFile(event: Event): void {
    const file = (event.target as HTMLInputElement).files?.[0];
    this.fileName.set(file?.name || '');
    this.submitted.set(false);
  }

  submit(): void {
    this.submitted.set(true);
  }

  download(name: string): void {
    const profile = this.session.profile();
    const content = `${name}\n\nStudent: ${profile?.name || 'Student'}\nStudent ID: ${profile?.studentId || ''}\nAcademic period: ${this.period()}\n`;
    const link = document.createElement('a');
    link.href = URL.createObjectURL(new Blob([content], { type: 'text/plain' }));
    link.download = `${name.toLowerCase().replace(/\s+/g, '-')}.txt`;
    link.click();
    URL.revokeObjectURL(link.href);
  }
}
