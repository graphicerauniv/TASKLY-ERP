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
  LucideBookPlus,
  LucideBell,
  LucideBuilding2,
  LucideChevronRight,
  LucideClipboardList,
  LucideDatabase,
  LucideDoorOpen,
  LucideGlobe,
  LucideHouse,
  LucideLandmark,
  LucideLayers,
  LucideLayoutDashboard,
  LucideLifeBuoy,
  LucideLogOut,
  LucideMap,
  LucideMapPinned,
  LucideMenu,
  LucideFilePenLine,
  LucidePlus,
  LucideReceiptIndianRupee,
  LucideSearch,
  LucideUniversity,
  LucideUserPlus,
  LucideUsersRound,
  LucideX,
  LucideTags,
  LucideTableProperties,
  LucideWalletCards,
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
    LucideBookPlus,
    LucideBell,
    LucideBuilding2,
    LucideChevronRight,
    LucideClipboardList,
    LucideDatabase,
    LucideDoorOpen,
    LucideGlobe,
    LucideHouse,
    LucideLandmark,
    LucideLayers,
    LucideLayoutDashboard,
    LucideLifeBuoy,
    LucideLogOut,
    LucideMap,
    LucideMapPinned,
    LucideMenu,
    LucideFilePenLine,
    LucidePlus,
    LucideReceiptIndianRupee,
    LucideSearch,
    LucideUniversity,
    LucideUserPlus,
    LucideUsersRound,
    LucideX,
    LucideTags,
    LucideTableProperties,
    LucideWalletCards,
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
  readonly feeMenuOpen = signal(false);
  readonly feeGroupOpen = signal<'books' | 'heads' | 'hostel' | 'course' | null>(null);
  readonly masterGroupOpen = signal<string | null>(null);
  readonly masterTypeOpen = signal<string | null>(null);
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
        'domicile',
        'student-type',
        'fee-type',
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
    this.feeMenuOpen.set(false);
    this.feeGroupOpen.set(null);
    this.hostelMenuOpen.set(false);
    this.masterMenuOpen.set(true);
    this.masterDataStore.load().subscribe();
    setTimeout(() =>
      this.host.nativeElement.querySelector<HTMLInputElement>('.master-search input')?.focus(),
    );
  }
  toggleAdmissionMenu() {
    this.masterMenuOpen.set(false);
    this.hostelMenuOpen.set(false);
    this.feeMenuOpen.set(false);
    this.feeGroupOpen.set(null);
    this.admissionMenuOpen.update((open) => !open);
  }
  closeNavigation() {
    this.masterMenuOpen.set(false);
    this.hostelMenuOpen.set(false);
    this.admissionMenuOpen.set(false);
    this.feeMenuOpen.set(false);
    this.feeGroupOpen.set(null);
    this.menuOpen.set(false);
    this.masterSearch.set('');
    this.masterGroupOpen.set(null);
    this.masterTypeOpen.set(null);
  }
  closeFlyouts() {
    const restoreMasterFocus = this.masterMenuOpen();
    this.masterMenuOpen.set(false);
    this.hostelMenuOpen.set(false);
    this.admissionMenuOpen.set(false);
    this.feeMenuOpen.set(false);
    this.feeGroupOpen.set(null);
    this.masterSearch.set('');
    this.masterGroupOpen.set(null);
    this.masterTypeOpen.set(null);
    if (restoreMasterFocus) setTimeout(() => this.masterMenuTrigger?.focus());
  }
  closeMasterMenu(restoreFocus = true) {
    this.masterMenuOpen.set(false);
    this.hostelMenuOpen.set(false);
    this.masterSearch.set('');
    this.masterGroupOpen.set(null);
    this.masterTypeOpen.set(null);
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
  toggleFeeMenu() {
    this.masterMenuOpen.set(false);
    this.hostelMenuOpen.set(false);
    this.admissionMenuOpen.set(false);
    const nextOpen = !this.feeMenuOpen();
    this.feeMenuOpen.set(nextOpen);
    if (!nextOpen) this.feeGroupOpen.set(null);
  }
  toggleFeeGroup(group: 'books' | 'heads' | 'hostel' | 'course') {
    this.feeGroupOpen.update((open) => open === group ? null : group);
  }
  toggleMasterGroup(group: string) {
    this.masterGroupOpen.update((open) => open === group ? null : group);
    this.masterTypeOpen.set(null);
  }
  isMasterGroupExpanded(group: string) {
    return this.masterSearch().trim().length > 0 || this.masterGroupOpen() === group;
  }
  toggleMasterType(slug: string) {
    this.masterTypeOpen.update((open) => open === slug ? null : slug);
  }
  isMasterTypeExpanded(slug: string) {
    return this.masterSearch().trim().length > 0 || this.masterTypeOpen() === slug;
  }
  isMasterGroupRoute(group: { items: MasterType[] }) {
    return group.items.some((type) => this.router.url.startsWith(`/admin/master-data/${type.slug}`));
  }
  matchesNavigation(label: string) {
    const query = this.navigationSearch().trim().toLocaleLowerCase();
    return !query || label.toLocaleLowerCase().includes(query);
  }
  @HostListener('document:keydown.escape')
  closeOnEscape() {
    if (this.hostelMenuOpen()) {
      this.closeHostelMenu();
      return;
    }
    if (this.masterMenuOpen()) {
      this.closeMasterMenu();
      return;
    }
    if (this.admissionMenuOpen()) {
      this.admissionMenuOpen.set(false);
      return;
    }
    if (this.feeMenuOpen()) {
      this.feeMenuOpen.set(false);
      this.feeGroupOpen.set(null);
      return;
    }
    if (this.menuOpen()) {
      this.closeNavigation();
      this.masterSearch.set('');
    }
  }
  @HostListener('document:keydown.tab', ['$event'])
  keepFocusInOpenPanel(event: Event) {
    const keyboardEvent = event as KeyboardEvent;
    if (!this.masterMenuOpen() && !this.admissionMenuOpen() && !this.feeMenuOpen()) return;
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
  isFeeRoute() {
    return this.router.url.startsWith('/admin/fees/');
  }
  isFeeGroupRoute(group: 'books' | 'heads' | 'hostel' | 'course') {
    const path = ({
      books: '/admin/fees/books/',
      heads: '/admin/fees/heads/',
      hostel: '/admin/fees/hostel-fees/',
      course: '/admin/fees/course-fees/',
    })[group];
    return this.router.url.startsWith(path);
  }
  private updateCurrentModule(url: string) {
    if (url.includes('/fees/')) this.currentModule.set('Fee Management');
    else if (url.includes('/master-data/')) this.currentModule.set('Master Data');
    else if (url.includes('/form-builder')) this.currentModule.set('Dynamic Form Builder');
    else if (url.includes('/admissions')) this.currentModule.set('Student Database');
    else if (url.includes('/delete-admissions')) this.currentModule.set('Delete Admission');
    else if (url.includes('/admission/student')) this.currentModule.set('Student Admission');
    else this.currentModule.set('Dashboard');
  }
}
