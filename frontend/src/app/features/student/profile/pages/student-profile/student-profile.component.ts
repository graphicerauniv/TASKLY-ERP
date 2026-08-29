import { CdkTrapFocus } from '@angular/cdk/a11y';
import { DatePipe } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  computed,
  DestroyRef,
  HostListener,
  inject,
  signal,
} from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { ActivatedRoute } from '@angular/router';
import {
  LucideCheck,
  LucideChevronDown,
  LucideChevronRight,
  LucideDownload,
  LucideEye,
  LucideGraduationCap,
  LucideInfo,
  LucideShieldCheck,
  LucideUserRound,
  LucideX,
} from '@lucide/angular';
import { take } from 'rxjs';
import { StudentMobileBottomNavComponent } from '../../../dashboard/components/student-mobile-bottom-nav/student-mobile-bottom-nav.component';
import { StudentSessionService } from '../../../shared/services/student-session.service';
import { StudentProfileFacade } from '../../data-access/student-profile.facade';
import {
  StudentProfileField,
  StudentProfileService,
  StudentProfileServiceId,
  StudentProfileViewModel,
} from '../../models/student-profile.model';

const ASSET = '/assets/student/profile-icons';

@Component({
  selector: 'erp-student-profile-page',
  imports: [
    CdkTrapFocus,
    DatePipe,
    StudentMobileBottomNavComponent,
    LucideCheck,
    LucideChevronDown,
    LucideChevronRight,
    LucideDownload,
    LucideEye,
    LucideGraduationCap,
    LucideInfo,
    LucideShieldCheck,
    LucideUserRound,
    LucideX,
  ],
  templateUrl: './student-profile.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StudentProfileComponent {
  private readonly facade = inject(StudentProfileFacade);
  private readonly session = inject(StudentSessionService);
  private readonly route = inject(ActivatedRoute);
  private readonly destroyRef = inject(DestroyRef);

  readonly viewModel = signal<StudentProfileViewModel>(this.facade.loading(this.session.profile()));
  readonly selectedServiceId = signal<StudentProfileServiceId | null>(null);
  readonly expandedSections = signal<Record<string, boolean>>({ personal: true, academic: true, contact: true });
  readonly services: readonly StudentProfileService[] = [
    { id: 'digital-id', title: 'Digital ID', description: 'View or download', image: `${ASSET}/digital-id.webp`, tone: 'blue' },
    { id: 'personal', title: 'Personal Details', description: 'Identity & contact', image: `${ASSET}/personal-details.webp`, tone: 'teal' },
    { id: 'academic', title: 'Academic Profile', description: 'Program & semester', image: `${ASSET}/academic-profile.webp`, tone: 'blue' },
    { id: 'education', title: 'Education Records', description: 'School qualifications', image: `${ASSET}/education-records.webp`, tone: 'violet' },
    { id: 'documents', title: 'Documents', description: 'Verified documents', image: `${ASSET}/documents.webp`, tone: 'blue' },
    { id: 'security', title: 'Security & Support', description: 'Account assistance', image: `${ASSET}/security-support.webp`, tone: 'green' },
  ];
  readonly activeService = computed(() => this.services.find((item) => item.id === this.selectedServiceId()) ?? null);
  readonly profile = computed(() => this.viewModel().profile);
  readonly personalFields = computed<readonly StudentProfileField[]>(() => [
    { label: 'Date of Birth', value: this.present(this.profile().personal.dateOfBirth) },
    { label: 'Father Name', value: this.present(this.profile().personal.fatherName) },
    { label: 'Mother Name', value: this.present(this.profile().personal.motherName) },
  ]);
  readonly academicFields = computed<readonly StudentProfileField[]>(() => [
    { label: 'College', value: this.present(this.profile().academic.college) },
    { label: 'Course', value: this.present(this.profile().academic.course) },
    { label: 'Branch', value: this.present(this.profile().academic.branch) },
    { label: 'Semester', value: String(this.profile().academic.semester || 'Not provided') },
    { label: 'Section', value: this.present(this.profile().academic.section) },
    { label: 'Specialization', value: this.present(this.profile().academic.specialization) },
  ]);
  readonly contactFields = computed<readonly StudentProfileField[]>(() => [
    { label: 'Official Email', value: this.present(this.profile().contact.officialEmail) },
    { label: 'Personal Email', value: this.present(this.profile().contact.personalEmail) },
    { label: 'Mobile Number', value: this.present(this.profile().contact.mobile) },
  ]);

  constructor() {
    this.load();
    this.route.queryParamMap.pipe(takeUntilDestroyed(this.destroyRef)).subscribe((params) => {
      const requested = params.get('view');
      if (requested && this.services.some((service) => service.id === requested))
        this.openService(requested as StudentProfileServiceId);
    });
  }

  load(): void {
    const token = this.session.token();
    if (!token) {
      this.viewModel.set({ ...this.facade.loading(this.session.profile()), state: 'loaded' });
      return;
    }
    this.facade.load(token, this.session.profile()).pipe(take(1)).subscribe((value) => this.viewModel.set(value));
  }

  openService(id: StudentProfileServiceId): void {
    this.selectedServiceId.set(id);
    document.body.style.overflow = 'hidden';
  }

  closeService(): void {
    if (!this.selectedServiceId()) return;
    this.selectedServiceId.set(null);
    document.body.style.overflow = '';
  }

  toggleSection(id: string): void {
    this.expandedSections.update((current) => ({ ...current, [id]: !current[id] }));
  }

  downloadId(): void {
    const profile = this.profile();
    const content = `<svg xmlns="http://www.w3.org/2000/svg" width="1000" height="620" viewBox="0 0 1000 620"><defs><linearGradient id="g" x2="1" y2="1"><stop stop-color="midnightblue"/><stop offset="1" stop-color="royalblue"/></linearGradient></defs><rect width="1000" height="620" rx="34" fill="url(#g)"/><rect x="24" y="24" width="952" height="572" rx="26" fill="none" stroke="gold" stroke-width="4"/><text x="70" y="105" fill="white" font-family="Arial" font-size="56" font-weight="700">GEHU</text><text x="70" y="146" fill="white" font-family="Arial" font-size="24">Graphic Era (Deemed to be University)</text><line x1="70" y1="170" x2="610" y2="170" stroke="gold" stroke-width="3"/><text x="70" y="255" fill="white" font-family="Arial" font-size="42" font-weight="700">${escapeXml(profile.identity.name)}</text><text x="70" y="318" fill="white" font-family="Arial" font-size="28">Student ID  <tspan fill="gold" font-weight="700">${escapeXml(profile.identity.studentId)}</tspan></text><text x="70" y="374" fill="white" font-family="Arial" font-size="25">${escapeXml(profile.academic.branch)} · Semester ${profile.academic.semester} · ${escapeXml(profile.academic.section)}</text><text x="70" y="430" fill="white" font-family="Arial" font-size="23">${escapeXml(profile.academic.campus)}</text><circle cx="820" cy="200" r="88" fill="white" opacity=".16"/><text x="820" y="222" text-anchor="middle" fill="white" font-family="Arial" font-size="52" font-weight="700">${escapeXml(this.initials())}</text><circle cx="120" cy="520" r="36" fill="gold"/><path d="M103 520l12 13 24-29" fill="none" stroke="midnightblue" stroke-width="10"/><text x="175" y="531" fill="gold" font-family="Arial" font-size="26" font-weight="700">UNIVERSITY VERIFIED</text></svg>`;
    const url = URL.createObjectURL(new Blob([content], { type: 'image/svg+xml' }));
    const link = document.createElement('a');
    link.href = url;
    link.download = `${profile.identity.studentId || 'student'}-digital-id.svg`;
    link.click();
    URL.revokeObjectURL(url);
  }

  initials(): string {
    return this.profile().identity.name.split(/\s+/).slice(0, 2).map((part) => part[0]?.toUpperCase()).join('') || 'ST';
  }

  present(value: string | null | undefined): string {
    return value?.trim() || 'Not provided';
  }

  @HostListener('document:keydown.escape')
  closeOnEscape(): void {
    this.closeService();
  }
}

function escapeXml(value: string): string {
  return String(value).replace(/[<>&'"]/g, (character) => ({ '<': '&lt;', '>': '&gt;', '&': '&amp;', "'": '&apos;', '"': '&quot;' })[character] || character);
}
