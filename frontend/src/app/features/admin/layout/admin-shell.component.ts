import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';
import { Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import {
  LucideBookOpen,
  LucideBookOpenCheck,
  LucideBuilding2,
  LucideChevronRight,
  LucideClipboardList,
  LucideDatabase,
  LucideGlobe,
  LucideGraduationCap,
  LucideLandmark,
  LucideLayers,
  LucideLayoutDashboard,
  LucideMap,
  LucideMapPinned,
  LucideNetwork,
  LucideFilePenLine,
  LucidePlus,
  LucideUniversity,
  LucideUserPlus,
  LucideUsersRound,
} from '@lucide/angular';
import { AuthService } from '../../../core/auth.service';
import { MasterDataStore } from '../../../core/master-data.store';
import { MasterType } from '../../../core/models';

@Component({
  selector: 'erp-admin-shell',
  imports: [
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
    LucideBookOpen,
    LucideBookOpenCheck,
    LucideBuilding2,
    LucideChevronRight,
    LucideClipboardList,
    LucideDatabase,
    LucideGlobe,
    LucideGraduationCap,
    LucideLandmark,
    LucideLayers,
    LucideLayoutDashboard,
    LucideMap,
    LucideMapPinned,
    LucideNetwork,
    LucideFilePenLine,
    LucidePlus,
    LucideUniversity,
    LucideUserPlus,
    LucideUsersRound,
  ],
  templateUrl: './admin-shell.component.html',
  styleUrl: './admin-shell.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AdminShellComponent {
  private readonly masterDataStore = inject(MasterDataStore);
  readonly auth = inject(AuthService);
  private readonly router = inject(Router);
  readonly masterTypes = this.masterDataStore.types;
  readonly menuOpen = signal(false);
  readonly masterMenuOpen = signal(false);
  readonly admissionMenuOpen = signal(false);
  readonly masterGroups = computed(() => {
    const types = this.masterTypes();
    const bySlug = new Map(types.map((type) => [type.slug, type]));
    const group = (title: string, slugs: string[]) => ({
      title,
      items: slugs.map((slug) => bySlug.get(slug)).filter((item): item is MasterType => !!item),
    });
    return [
      group('Academic Masters', [
        'academic',
        'university',
        'college',
        'department',
        'level',
        'course',
        'course-specialization',
      ]),
      group('Location Masters', ['country', 'state', 'district', 'city']),
      {
        title: 'Custom Masters',
        items: types.filter((type) => type.isCustom),
      },
    ];
  });
  constructor() {
    this.masterDataStore.load().subscribe();
  }
  logout() {
    this.auth.clear();
    void this.router.navigate(['/admin/login']);
  }
  toggleMasterMenu() {
    this.admissionMenuOpen.set(false);
    this.masterMenuOpen.update((open) => !open);
  }
  toggleAdmissionMenu() {
    this.masterMenuOpen.set(false);
    this.admissionMenuOpen.update((open) => !open);
  }
  closeNavigation() {
    this.masterMenuOpen.set(false);
    this.admissionMenuOpen.set(false);
    this.menuOpen.set(false);
  }
  isMasterRoute() {
    return this.router.url.startsWith('/admin/master-data/');
  }
  isAdmissionRoute() {
    return (
      this.router.url.startsWith('/admin/admission/') || this.router.url === '/admin/form-builder'
    );
  }
}
