import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  HostListener,
  computed,
  inject,
  signal,
} from '@angular/core';
import { NavigationEnd, Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import {
  LucideArrowLeft,
  LucideBedDouble,
  LucideBookOpen,
  LucideBookOpenCheck,
  LucideBell,
  LucideBuilding2,
  LucideChevronRight,
  LucideClipboardList,
  LucideDatabase,
  LucideDoorOpen,
  LucideGlobe,
  LucideGraduationCap,
  LucideHouse,
  LucideLandmark,
  LucideLayers,
  LucideLayoutDashboard,
  LucideLifeBuoy,
  LucideLogOut,
  LucideMap,
  LucideMapPinned,
  LucideMenu,
  LucideNetwork,
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
import { filter } from 'rxjs';

@Component({
  selector: 'erp-admin-shell',
  imports: [
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
    LucideArrowLeft,
    LucideBedDouble,
    LucideBookOpen,
    LucideBookOpenCheck,
    LucideBell,
    LucideBuilding2,
    LucideChevronRight,
    LucideClipboardList,
    LucideDatabase,
    LucideDoorOpen,
    LucideGlobe,
    LucideGraduationCap,
    LucideHouse,
    LucideLandmark,
    LucideLayers,
    LucideLayoutDashboard,
    LucideLifeBuoy,
    LucideLogOut,
    LucideMap,
    LucideMapPinned,
    LucideMenu,
    LucideNetwork,
    LucideFilePenLine,
    LucidePlus,
    LucideSearch,
    LucideUniversity,
    LucideUserPlus,
    LucideUsersRound,
    LucideX,
  ],
  templateUrl: './admin-shell.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AdminShellComponent {
  private readonly host: ElementRef<HTMLElement> = inject(ElementRef);
  private readonly masterDataStore = inject(MasterDataStore);
  readonly auth = inject(AuthService);
  private readonly router = inject(Router);
  readonly masterTypes = this.masterDataStore.types;
  readonly menuOpen = signal(false);
  readonly navigationSearch = signal('');
  readonly masterMenuOpen = signal(false);
  readonly hostelMenuOpen = signal(false);
  readonly admissionMenuOpen = signal(false);
  readonly masterSearch = signal('');
  readonly currentModule = signal('Dashboard');
  private masterMenuTrigger: HTMLElement | null = null;
  private hostelMenuTrigger: HTMLElement | null = null;
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
    this.updateCurrentModule(this.router.url);
    this.router.events
      .pipe(filter((event): event is NavigationEnd => event instanceof NavigationEnd))
      .subscribe((event) => this.updateCurrentModule(event.urlAfterRedirects));
    this.masterDataStore.load().subscribe();
  }
  logout() {
    this.auth.clear();
    void this.router.navigate(['/login']);
  }
  toggleMasterMenu(event?: Event) {
    this.masterMenuTrigger = (event?.currentTarget as HTMLElement | null) || this.masterMenuTrigger;
    if (this.masterMenuOpen()) {
      this.closeMasterMenu();
      return;
    }
    this.admissionMenuOpen.set(false);
    this.hostelMenuOpen.set(false);
    this.masterMenuOpen.set(true);
    setTimeout(() =>
      this.host.nativeElement.querySelector<HTMLInputElement>('.master-search input')?.focus(),
    );
  }
  toggleAdmissionMenu() {
    this.masterMenuOpen.set(false);
    this.hostelMenuOpen.set(false);
    this.admissionMenuOpen.update((open) => !open);
  }
  closeNavigation() {
    this.masterMenuOpen.set(false);
    this.hostelMenuOpen.set(false);
    this.admissionMenuOpen.set(false);
    this.menuOpen.set(false);
    this.masterSearch.set('');
  }
  closeFlyouts() {
    const restoreMasterFocus = this.masterMenuOpen();
    this.masterMenuOpen.set(false);
    this.hostelMenuOpen.set(false);
    this.admissionMenuOpen.set(false);
    this.masterSearch.set('');
    if (restoreMasterFocus) setTimeout(() => this.masterMenuTrigger?.focus());
  }
  closeMasterMenu(restoreFocus = true) {
    this.masterMenuOpen.set(false);
    this.hostelMenuOpen.set(false);
    this.masterSearch.set('');
    if (restoreFocus) setTimeout(() => this.masterMenuTrigger?.focus());
  }
  toggleHostelMenu(event?: Event) {
    this.hostelMenuTrigger = (event?.currentTarget as HTMLElement | null) || this.hostelMenuTrigger;
    if (this.hostelMenuOpen()) {
      this.closeHostelMenu();
      return;
    }
    this.hostelMenuOpen.set(true);
    setTimeout(() =>
      this.host.nativeElement
        .querySelector<HTMLElement>('.hostel-flyout a')
        ?.focus(),
    );
  }
  closeHostelMenu(restoreFocus = true) {
    this.hostelMenuOpen.set(false);
    if (restoreFocus) setTimeout(() => this.hostelMenuTrigger?.focus());
  }
  matchesNavigation(label: string) {
    const query = this.navigationSearch().trim().toLocaleLowerCase();
    return !query || label.toLocaleLowerCase().includes(query);
  }
  @HostListener('document:keydown.escape')
  closeOnEscape() {
    if (this.hostelMenuOpen()) return this.closeHostelMenu();
    if (this.masterMenuOpen()) return this.closeMasterMenu();
    if (this.admissionMenuOpen()) {
      this.admissionMenuOpen.set(false);
      return;
    }
    if (this.menuOpen()) this.menuOpen.set(false);
  }
  @HostListener('document:keydown.tab', ['$event'])
  keepFocusInOpenPanel(event: Event) {
    const keyboardEvent = event as KeyboardEvent;
    if (!this.masterMenuOpen() && !this.admissionMenuOpen()) return;
    const panel = this.host.nativeElement.querySelector<HTMLElement>(
      this.hostelMenuOpen() ? '.hostel-flyout' : '.master-flyout',
    );
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
  isHostelRoute() {
    return this.router.url.startsWith('/admin/master-data/hostel/');
  }
  isAdmissionRoute() {
    return (
      this.router.url.startsWith('/admin/admission/') ||
      this.router.url === '/admin/admissions' ||
      this.router.url === '/admin/delete-admissions' ||
      this.router.url === '/admin/form-builder'
    );
  }
  private updateCurrentModule(url: string) {
    if (url.includes('/master-data/')) this.currentModule.set('Master Data');
    else if (url.includes('/form-builder')) this.currentModule.set('Dynamic Form Builder');
    else if (url.includes('/admissions')) this.currentModule.set('Student Database');
    else if (url.includes('/delete-admissions')) this.currentModule.set('Delete Admission');
    else if (url.includes('/admission/student')) this.currentModule.set('Student Admission');
    else this.currentModule.set('Dashboard');
  }
}
