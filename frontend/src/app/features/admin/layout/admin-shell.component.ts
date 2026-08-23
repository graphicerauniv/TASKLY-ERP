import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  HostListener,
  computed,
  inject,
  signal,
} from '@angular/core';
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
  LucideLifeBuoy,
  LucideLogOut,
  LucideMap,
  LucideMapPinned,
  LucideMenu,
  LucideNetwork,
  LucidePanelLeftClose,
  LucidePanelLeftOpen,
  LucideFilePenLine,
  LucidePlus,
  LucideSearch,
  LucideUniversity,
  LucideUserPlus,
  LucideUsersRound,
  LucideX,
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
    LucideLifeBuoy,
    LucideLogOut,
    LucideMap,
    LucideMapPinned,
    LucideMenu,
    LucideNetwork,
    LucidePanelLeftClose,
    LucidePanelLeftOpen,
    LucideFilePenLine,
    LucidePlus,
    LucideSearch,
    LucideUniversity,
    LucideUserPlus,
    LucideUsersRound,
    LucideX,
  ],
  templateUrl: './admin-shell.component.html',
  styleUrl: './admin-shell.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AdminShellComponent {
  private readonly host: ElementRef<HTMLElement> = inject(ElementRef);
  private readonly masterDataStore = inject(MasterDataStore);
  readonly auth = inject(AuthService);
  private readonly router = inject(Router);
  readonly masterTypes = this.masterDataStore.types;
  readonly menuOpen = signal(false);
  readonly sidebarCollapsed = signal(false);
  readonly navigationSearch = signal('');
  readonly masterMenuOpen = signal(false);
  readonly admissionMenuOpen = signal(false);
  readonly masterSearch = signal('');
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
  readonly filteredMasterGroups = computed(() => {
    const query = this.masterSearch().trim().toLocaleLowerCase();
    return this.masterGroups()
      .map((group) => ({
        ...group,
        items: query
          ? group.items.filter((item) => item.name.toLocaleLowerCase().includes(query))
          : group.items,
      }))
      .filter((group) => group.items.length > 0 || group.title === 'Custom Masters');
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
    if (!this.masterMenuOpen()) this.masterSearch.set('');
    if (this.masterMenuOpen()) {
      setTimeout(() =>
        this.host.nativeElement.querySelector<HTMLInputElement>('.master-search input')?.focus(),
      );
    }
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
  closeFlyouts() {
    this.masterMenuOpen.set(false);
    this.admissionMenuOpen.set(false);
    this.masterSearch.set('');
  }
  matchesNavigation(label: string) {
    const query = this.navigationSearch().trim().toLocaleLowerCase();
    return !query || label.toLocaleLowerCase().includes(query);
  }
  @HostListener('document:keydown.escape')
  closeOnEscape() {
    if (this.masterMenuOpen() || this.admissionMenuOpen() || this.menuOpen()) {
      this.closeNavigation();
      this.masterSearch.set('');
    }
  }
  @HostListener('document:keydown.tab', ['$event'])
  keepFocusInOpenPanel(event: Event) {
    const keyboardEvent = event as KeyboardEvent;
    if (!this.masterMenuOpen() && !this.admissionMenuOpen()) return;
    const panel = this.host.nativeElement.querySelector<HTMLElement>('.master-flyout');
    const focusable = Array.from(
      panel?.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled]), input:not([disabled]), [tabindex]:not([tabindex="-1"])',
      ) || [],
    );
    if (!focusable.length) return;
    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    if (keyboardEvent.shiftKey && document.activeElement === first) {
      keyboardEvent.preventDefault();
      last.focus();
    } else if (!keyboardEvent.shiftKey && document.activeElement === last) {
      keyboardEvent.preventDefault();
      first.focus();
    }
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
