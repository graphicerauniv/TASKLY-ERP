import { CdkTrapFocus } from '@angular/cdk/a11y';
import { DOCUMENT, NgTemplateOutlet } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  HostListener,
  ViewChild,
  computed,
  effect,
  inject,
  signal,
} from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { ActivatedRoute, NavigationEnd, Router, RouterLink, RouterOutlet } from '@angular/router';
import {
  LucideChevronDown,
  LucideChevronLeft,
  LucideChevronRight,
  LucideBell,
  LucideBuilding2,
  LucideCalendarDays,
  LucideClock3,
  LucideFilter,
  LucideGraduationCap,
  LucideLandmark,
  LucideUserRound,
  LucideCircleHelp,
  LucideDynamicIcon,
  LucideLifeBuoy,
  LucideLogOut,
  LucideMenu,
  LucideSearch,
  LucideX,
} from '@lucide/angular';
import { filter, forkJoin } from 'rxjs';

import { AuthService } from '../../../core/auth.service';
import { ApiService } from '../../../core/api.service';
import { Admission, AdmissionForm, MasterValue } from '../../../core/models';
import { AdminWorkspaceNavigationComponent } from '../../../shared/ui/admin-workspace/admin-workspace-navigation.component';
import {
  ADMIN_NAVIGATION,
  AdminNavigationEntry,
  AdminNavigationLink,
  AdminNavigationSection,
  adminNavigationIcon,
  matchesAdminRoute,
  resolveAdminPageContext,
} from './navigation/admin-navigation.config';

interface GlobalSearchResult {
  id: string;
  title: string;
  meta: string;
  type: 'module' | 'student' | 'workflow' | 'record';
  route: string;
}

@Component({
  selector: 'erp-admin-shell',
  standalone: true,
  imports: [
    CdkTrapFocus,
    FormsModule,
    NgTemplateOutlet,
    RouterLink,
    RouterOutlet,
    AdminWorkspaceNavigationComponent,
    LucideChevronDown,
    LucideChevronLeft,
    LucideChevronRight,
    LucideBell,
    LucideBuilding2,
    LucideCalendarDays,
    LucideClock3,
    LucideFilter,
    LucideGraduationCap,
    LucideLandmark,
    LucideUserRound,
    LucideCircleHelp,
    LucideDynamicIcon,
    LucideLifeBuoy,
    LucideLogOut,
    LucideMenu,
    LucideSearch,
    LucideX,
  ],
  templateUrl: './admin-shell.component.html',
  styleUrl: './admin-shell.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AdminShellComponent {
  private readonly router = inject(Router);
  private readonly activatedRoute = inject(ActivatedRoute);
  private readonly document = inject(DOCUMENT);
  private readonly api = inject(ApiService);

  readonly auth = inject(AuthService);
  readonly navigation = signal<readonly AdminNavigationSection[]>(ADMIN_NAVIGATION);
  readonly matchesAdminRoute = matchesAdminRoute;
  readonly currentUrl = signal(this.router.url);
  // Desktop navigation starts compact; hovering/focusing the rail reveals its labels.
  readonly desktopCollapsed = signal(true);
  readonly mobileOpen = signal(false);
  readonly expandedSectionId = signal<string | null>(null);
  readonly closingSectionId = signal<string | null>(null);
  readonly flyoutClosing = computed(() => this.closingSectionId() !== null);
  readonly expandedSubgroupId = signal<string | null>(null);
  readonly pageContext = signal(resolveAdminPageContext(this.router.url));
  readonly desktopModuleOpen = computed(
    () => this.expandedSectionId() !== null || this.closingSectionId() !== null,
  );
  readonly isScholarshipWorkspace = computed(() =>
    /^\/admin\/admissions\/[^/]+\/scholarships\/?(?:\?|$)/.test(this.currentUrl()),
  );
  readonly showWorkspaceHeader = computed(
    () => this.isScholarshipWorkspace() || this.currentUrl().startsWith('/admin/academics'),
  );
  readonly workspaceSearchPlaceholder = computed(() =>
    this.currentUrl().startsWith('/admin/academics')
      ? 'Search students, admissions, academics…'
      : 'Search by name, ID, programme…',
  );
  readonly headerSaveStatus = computed(() =>
    /\/admission\/student|\/admissions\/[^/]+\/edit/.test(this.currentUrl())
      ? 'Draft saved just now'
      : 'Saved just now',
  );
  readonly forms = signal<AdmissionForm[]>([]);
  readonly campusOptions = signal<MasterValue[]>([]);
  readonly sessionOptions = signal<MasterValue[]>([]);
  readonly searchOpen = signal(false);
  readonly searchClosing = signal(false);
  readonly filterOpen = signal(false);
  readonly recentOpen = signal(false);
  readonly notificationsOpen = signal(false);
  readonly profileOpen = signal(false);
  readonly searchLoading = signal(false);
  readonly searchResults = signal<GlobalSearchResult[]>([]);
  readonly recentPages = signal<Array<{ title: string; route: string }>>([]);
  readonly enabledSearchTypes = signal<Array<GlobalSearchResult['type']>>([
    'module',
    'student',
    'workflow',
    'record',
  ]);
  readonly unreadNotifications = signal(3);
  globalSearchQuery = '';
  selectedCampus = '';
  selectedSession = '';
  selectedSearchStatus = '';
  readonly adminInitials = computed(() => {
    const name = this.auth.admin()?.name?.trim() || 'Administrator';
    return name
      .split(/\s+/)
      .slice(0, 2)
      .map((part) => part[0]?.toUpperCase())
      .join('');
  });

  @ViewChild('mobileMenuButton') private mobileMenuButton?: ElementRef<HTMLButtonElement>;
  @ViewChild('mobileCloseButton') private mobileCloseButton?: ElementRef<HTMLButtonElement>;
  @ViewChild('pageTitle') private pageTitle?: ElementRef<HTMLElement>;
  @ViewChild('globalSearchInput') private globalSearchInput?: ElementRef<HTMLInputElement>;
  private desktopFlyoutAnchor: HTMLElement | null = null;
  private flyoutCloseTimer: ReturnType<typeof window.setTimeout> | null = null;
  private globalSearchTimer: ReturnType<typeof window.setTimeout> | null = null;
  private headerSearchCloseTimer: ReturnType<typeof window.setTimeout> | null = null;

  constructor() {
    this.syncNavigation(this.router.url);
    this.loadFormNavigation();
    this.loadHeaderContext();

    this.router.events
      .pipe(
        filter((event): event is NavigationEnd => event instanceof NavigationEnd),
        takeUntilDestroyed(),
      )
      .subscribe((event) => {
        this.syncNavigation(event.urlAfterRedirects);
        this.rememberRecentPage(event.urlAfterRedirects);
        this.closeMobileNavigation(false);
        window.setTimeout(() => this.pageTitle?.nativeElement.focus(), 0);
      });

    effect((onCleanup) => {
      const body = this.document.body;
      const previousOverflow = body.style.overflow;
      body.style.overflow = this.mobileOpen() ? 'hidden' : previousOverflow;
      onCleanup(() => {
        body.style.overflow = previousOverflow;
      });
    });
  }

  @HostListener('window:tasklyFormsChanged')
  reloadFormNavigation(): void {
    this.loadFormNavigation();
  }

  iconFor = adminNavigationIcon;

  toggleHeaderPanel(panel: 'search' | 'filter' | 'recent' | 'notifications' | 'profile'): void {
    if (panel === 'search') {
      if (this.searchOpen()) {
        this.closeHeaderPanels();
        return;
      }
      this.closeHeaderPanels(false);
      this.searchOpen.set(true);
      this.searchClosing.set(false);
      window.setTimeout(() => this.globalSearchInput?.nativeElement.focus(), 0);
      return;
    }
    const next = !this.headerPanelOpen(panel);
    this.closeHeaderPanels();
    if (panel === 'filter') this.filterOpen.set(next);
    else if (panel === 'recent') this.recentOpen.set(next);
    else if (panel === 'notifications') this.notificationsOpen.set(next);
    else this.profileOpen.set(next);
  }

  headerPanelOpen(panel: 'search' | 'filter' | 'recent' | 'notifications' | 'profile'): boolean {
    return {
      search: this.searchOpen(),
      filter: this.filterOpen(),
      recent: this.recentOpen(),
      notifications: this.notificationsOpen(),
      profile: this.profileOpen(),
    }[panel];
  }

  closeHeaderPanels(animateSearch = true): void {
    if (this.headerSearchCloseTimer !== null) window.clearTimeout(this.headerSearchCloseTimer);
    if (animateSearch && this.searchOpen()) {
      this.searchClosing.set(true);
      this.headerSearchCloseTimer = window.setTimeout(() => {
        this.searchOpen.set(false);
        this.searchClosing.set(false);
        this.headerSearchCloseTimer = null;
      }, 180);
    } else {
      this.searchOpen.set(false);
      this.searchClosing.set(false);
    }
    this.filterOpen.set(false);
    this.recentOpen.set(false);
    this.notificationsOpen.set(false);
    this.profileOpen.set(false);
  }

  onGlobalSearch(value: string): void {
    this.globalSearchQuery = value;
    if (this.globalSearchTimer !== null) window.clearTimeout(this.globalSearchTimer);
    const query = value.trim();
    if (query.length < 2) {
      this.searchResults.set([]);
      this.searchLoading.set(false);
      return;
    }
    this.searchLoading.set(true);
    this.globalSearchTimer = window.setTimeout(() => this.executeGlobalSearch(query), 220);
  }

  toggleSearchType(type: GlobalSearchResult['type']): void {
    this.enabledSearchTypes.update((types) =>
      types.includes(type) ? types.filter((item) => item !== type) : [...types, type],
    );
    if (this.globalSearchQuery.trim().length >= 2) this.onGlobalSearch(this.globalSearchQuery);
  }

  searchTypeEnabled(type: GlobalSearchResult['type']): boolean {
    return this.enabledSearchTypes().includes(type);
  }

  applyGlobalFilters(): void {
    this.filterOpen.set(false);
    this.searchOpen.set(true);
    if (this.globalSearchQuery.trim().length >= 2) this.onGlobalSearch(this.globalSearchQuery);
    window.setTimeout(() => this.globalSearchInput?.nativeElement.focus(), 0);
  }

  resetGlobalFilters(): void {
    this.enabledSearchTypes.set(['module', 'student', 'workflow', 'record']);
    this.selectedSearchStatus = '';
    this.selectedCampus = '';
    this.selectedSession = '';
  }

  openGlobalResult(result: GlobalSearchResult): void {
    this.closeHeaderPanels();
    this.globalSearchQuery = '';
    this.searchResults.set([]);
    void this.router.navigateByUrl(result.route);
  }

  openRecent(route: string): void {
    this.closeHeaderPanels();
    void this.router.navigateByUrl(route);
  }

  markNotificationsRead(): void {
    this.unreadNotifications.set(0);
  }

  toggleDesktopSidebar(): void {
    this.desktopCollapsed.update((collapsed) => !collapsed);
  }

  openMobileNavigation(): void {
    this.mobileOpen.set(true);
    window.setTimeout(() => this.mobileCloseButton?.nativeElement.focus(), 0);
  }

  closeMobileNavigation(restoreFocus = true): void {
    if (!this.mobileOpen()) return;
    this.mobileOpen.set(false);
    if (restoreFocus) {
      window.setTimeout(() => this.mobileMenuButton?.nativeElement.focus(), 0);
    }
  }

  toggleSection(section: AdminNavigationSection, event?: Event, mobile = false): void {
    if (!section.children?.length) return;
    if (mobile) {
      const opening = this.expandedSectionId() !== section.id;
      this.expandedSectionId.set(opening ? section.id : null);
      if (!opening) this.expandedSubgroupId.set(null);
      return;
    }

    if (this.expandedSectionId() === section.id) {
      this.closeDesktopFlyout();
      return;
    }
    this.cancelFlyoutClose();
    const opening = this.expandedSectionId() !== section.id;
    this.expandedSectionId.set(opening ? section.id : null);
    if (!opening) this.expandedSubgroupId.set(null);

    if (opening) {
      this.desktopFlyoutAnchor = event?.currentTarget as HTMLElement | null;
    } else {
      this.desktopFlyoutAnchor = null;
    }
  }

  closeDesktopFlyout(): void {
    const sectionId = this.expandedSectionId();
    if (!sectionId || this.flyoutClosing()) return;
    this.closingSectionId.set(sectionId);
    this.expandedSectionId.set(null);
    this.expandedSubgroupId.set(null);
    const anchor = this.desktopFlyoutAnchor;
    this.flyoutCloseTimer = window.setTimeout(() => {
      this.closingSectionId.set(null);
      anchor?.focus();
      this.desktopFlyoutAnchor = null;
      this.flyoutCloseTimer = null;
    }, 220);
  }

  toggleSubgroup(entry: AdminNavigationEntry): void {
    this.expandedSubgroupId.update((current) => (current === entry.id ? null : entry.id));
  }

  isSectionExpanded(section: AdminNavigationSection): boolean {
    return this.expandedSectionId() === section.id;
  }

  isSectionVisible(section: AdminNavigationSection, mobile: boolean): boolean {
    return (
      this.expandedSectionId() === section.id || (!mobile && this.closingSectionId() === section.id)
    );
  }

  moduleTitle(section: AdminNavigationSection): string {
    return section.id === 'academics' ? 'Academic workspace' : `${section.label} workspace`;
  }

  sectionDescription(section: AdminNavigationSection): string {
    return section.description || `Access and manage ${section.label.toLowerCase()} tools.`;
  }

  entryDescription(entry: AdminNavigationEntry): string {
    if (entry.description) return entry.description;
    if (entry.children?.length) return `Manage ${entry.label.toLowerCase()} options`;
    return `Open ${entry.label.toLowerCase()}`;
  }

  isSubgroupExpanded(entry: AdminNavigationEntry): boolean {
    return this.expandedSubgroupId() === entry.id;
  }

  isSectionActive(section: AdminNavigationSection): boolean {
    return matchesAdminRoute(section.activeWhen, this.currentUrl());
  }

  isEntryActive(entry: AdminNavigationEntry): boolean {
    if (matchesAdminRoute(entry.activeWhen, this.currentUrl())) return true;
    return (
      entry.children?.some((link) => matchesAdminRoute(link.activeWhen, this.currentUrl())) ?? false
    );
  }

  showNavigationGroup(entries: readonly AdminNavigationEntry[], index: number): boolean {
    const group = entries[index]?.group || 'Tools';
    const previousGroup = index > 0 ? entries[index - 1]?.group || 'Tools' : '';
    return index === 0 || previousGroup !== group;
  }

  navigationGroupLabel(entries: readonly AdminNavigationEntry[], index: number): string {
    return entries[index]?.group || 'Tools';
  }

  selectNavigation(event: Event, route: string, mobile: boolean): void {
    if (mobile) {
      this.closeMobileNavigation(false);
      return;
    }
    if (!this.expandedSectionId()) return;
    event.preventDefault();
    this.closeDesktopFlyout();
    window.setTimeout(() => void this.router.navigateByUrl(route), 220);
  }

  logout(): void {
    this.closeMobileNavigation(false);
    this.auth.clear();
    void this.router.navigate(['/login']);
  }

  @HostListener('document:keydown.escape')
  onEscape(): void {
    if (
      this.searchOpen() ||
      this.filterOpen() ||
      this.recentOpen() ||
      this.notificationsOpen() ||
      this.profileOpen()
    ) {
      this.closeHeaderPanels();
      return;
    }
    if (this.mobileOpen()) {
      this.closeMobileNavigation();
      return;
    }
    this.closeDesktopFlyout();
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent): void {
    const target = event.target as HTMLElement | null;
    if (this.expandedSectionId() && !target?.closest('.admin-sidebar--desktop')) {
      this.closeDesktopFlyout();
    }
    if (!target?.closest('.admin-header__interactive')) this.closeHeaderPanels();
  }

  @HostListener('window:resize')
  onWindowResize(): void {
    const width = window.innerWidth;
    if (width > 767) this.closeMobileNavigation(false);
    if (width <= 1080 && width > 767) this.desktopCollapsed.set(true);
  }

  private syncNavigation(url: string): void {
    this.cancelFlyoutClose();
    this.currentUrl.set(url);
    this.expandedSectionId.set(null);
    this.closingSectionId.set(null);
    this.expandedSubgroupId.set(null);
    this.desktopFlyoutAnchor = null;
    this.pageContext.set(resolveAdminPageContext(url, this.deepestRouteTitle()));
  }

  private loadHeaderContext(): void {
    forkJoin({
      campuses: this.api.masterValues('university', { active: true }),
      sessions: this.api.masterValues('academic', { active: true }),
    }).subscribe({
      next: ({ campuses, sessions }) => {
        this.campusOptions.set(campuses.items);
        this.sessionOptions.set(sessions.items);
        if (!this.selectedCampus && campuses.items.length === 1) {
          this.selectedCampus = campuses.items[0].name;
        }
        if (!this.selectedSession && sessions.items.length) {
          this.selectedSession = sessions.items[0].name;
        }
      },
    });
  }

  private executeGlobalSearch(query: string): void {
    const normalised = query.toLowerCase();
    const localResults: GlobalSearchResult[] = [];
    if (
      this.searchTypeEnabled('module') ||
      this.searchTypeEnabled('workflow') ||
      this.searchTypeEnabled('record')
    ) {
      for (const section of this.navigation()) {
        if (section.route && section.label.toLowerCase().includes(normalised)) {
          localResults.push({
            id: `section-${section.id}`,
            title: section.label,
            meta: 'Module',
            type: 'module',
            route: section.route,
          });
        }
        for (const entry of section.children || []) {
          if (entry.route && entry.label.toLowerCase().includes(normalised)) {
            localResults.push({
              id: `entry-${entry.id}`,
              title: entry.label,
              meta: section.label,
              type:
                section.id === 'workflows'
                  ? 'workflow'
                  : section.id === 'records'
                    ? 'record'
                    : 'module',
              route: entry.route,
            });
          }
          for (const link of entry.children || []) {
            if (!link.label.toLowerCase().includes(normalised)) continue;
            localResults.push({
              id: `link-${link.id}`,
              title: link.label,
              meta: `${section.label} · ${entry.label}`,
              type:
                section.id === 'workflows'
                  ? 'workflow'
                  : section.id === 'records'
                    ? 'record'
                    : 'module',
              route: link.route,
            });
          }
        }
      }
    }

    const filteredLocalResults = localResults.filter((result) =>
      this.searchTypeEnabled(result.type),
    );

    if (!this.searchTypeEnabled('student')) {
      this.searchResults.set(filteredLocalResults.slice(0, 20));
      this.searchLoading.set(false);
      return;
    }

    this.api
      .admissions({
        search: query,
        page: 1,
        limit: 12,
        status: this.selectedSearchStatus || undefined,
        university: this.selectedCampus || undefined,
        session: this.selectedSession || undefined,
      })
      .subscribe({
        next: ({ items }) => {
          if (this.globalSearchQuery.trim() !== query) return;
          this.searchResults.set([
            ...filteredLocalResults.slice(0, 8),
            ...items.map((student) => this.studentSearchResult(student)),
          ]);
          this.searchLoading.set(false);
        },
        error: () => {
          this.searchResults.set(filteredLocalResults.slice(0, 20));
          this.searchLoading.set(false);
        },
      });
  }

  private studentSearchResult(student: Admission): GlobalSearchResult {
    return {
      id: `student-${student._id}`,
      title: student.studentName || student.applicationNumber || 'Student application',
      meta: [student.studentId || student.applicationNumber, student.courseName, student.status]
        .filter(Boolean)
        .join(' · '),
      type: 'student',
      route: `/admin/admissions/applications/${student._id}`,
    };
  }

  private rememberRecentPage(route: string): void {
    const title = resolveAdminPageContext(route, this.deepestRouteTitle()).title;
    this.recentPages.update((items) =>
      [{ title, route }, ...items.filter((item) => item.route !== route)].slice(0, 6),
    );
  }

  private cancelFlyoutClose(): void {
    if (this.flyoutCloseTimer !== null) window.clearTimeout(this.flyoutCloseTimer);
    this.flyoutCloseTimer = null;
    this.closingSectionId.set(null);
  }

  private loadFormNavigation(): void {
    this.api.forms().subscribe({
      next: ({ items }) => {
        this.forms.set(items);
        this.navigation.set(this.navigationForForms(items));
      },
    });
  }

  private navigationForForms(forms: AdmissionForm[]): readonly AdminNavigationSection[] {
    const published = forms.filter(
      (form) => form.status === 'published' && form.isActive && form._id,
    );
    const navigation: AdminNavigationSection[] = ADMIN_NAVIGATION.map((section) => ({
      ...section,
      children: section.children ? [...section.children] : undefined,
    }));

    const admissionsIndex = navigation.findIndex((section) => section.id === 'admissions');
    if (admissionsIndex >= 0) {
      const admissions = navigation[admissionsIndex];
      const admissionForms = published.filter(
        (form) => (form.purpose || 'admission') === 'admission',
      );
      navigation[admissionsIndex] = {
        ...admissions,
        children: [
          ...(admissions.children || []),
          ...(admissionForms.length
            ? [
                {
                  id: 'admission-workflows',
                  label: 'Application workflows',
                  description: 'Open published admission processes',
                  group: 'Application management',
                  icon: 'records' as const,
                  children: admissionForms.map((form) =>
                    this.formNavigationEntry(form, 'admission'),
                  ),
                },
              ]
            : []),
        ],
      };
    }

    const operationalForms = published.filter(
      (form) => (form.purpose || 'admission') !== 'admission',
    );
    if (operationalForms.length) {
      const workflowGroups: Array<{
        id: 'employee' | 'faculty' | 'general';
        label: string;
        description: string;
        icon: 'records' | 'students';
        forms: AdmissionForm[];
      }> = [
        {
          id: 'employee',
          label: 'Employee workflows',
          description: 'Employee onboarding and service forms',
          icon: 'records',
          forms: operationalForms.filter((form) => form.purpose === 'employee'),
        },
        {
          id: 'faculty',
          label: 'Faculty workflows',
          description: 'Faculty onboarding and academic forms',
          icon: 'students',
          forms: operationalForms.filter((form) => form.purpose === 'faculty'),
        },
        {
          id: 'general',
          label: 'Other workflows',
          description: 'General organisation processes',
          icon: 'records',
          forms: operationalForms.filter((form) => form.purpose === 'general'),
        },
      ];
      const workflowEntries: AdminNavigationEntry[] = workflowGroups
        .filter((group) => group.forms.length)
        .map((group) => ({
          id: `workflow-${group.id}`,
          label: group.label,
          description: group.description,
          group: 'Published workflows',
          icon: group.icon,
          children: group.forms.map((form) => this.formNavigationEntry(form, group.id)),
        }));
      const academicsPosition = navigation.findIndex((section) => section.id === 'academics');
      navigation.splice(Math.max(1, academicsPosition), 0, {
        id: 'workflows',
        label: 'Workflows',
        description: 'Open published employee, faculty and organisation forms.',
        icon: 'approval',
        activeWhen: operationalForms.map((form) => new RegExp(`^/admin/forms/${form._id}/fill/?$`)),
        children: workflowEntries,
      });
    }

    const databaseSections = new Map<string, string>();
    for (const form of forms.filter(
      (item) => item.purpose !== 'admission' && item.destination?.databaseSectionId,
    )) {
      const fallback = this.workflowPurpose(form.purpose);
      databaseSections.set(
        form.destination?.databaseSectionId || fallback.id,
        form.destination?.databaseSectionName || fallback.label,
      );
    }

    const academicsPosition = navigation.findIndex((section) => section.id === 'academics');
    navigation.splice(Math.max(1, academicsPosition + 1), 0, {
      id: 'records',
      label: 'Records',
      description: 'Search student and workflow submission records.',
      icon: 'database',
      activeWhen: [new RegExp('^/admin/database(?:/|$)')],
      children: [
        {
          id: 'database-students',
          label: 'Student records',
          description: 'Search submitted student data',
          group: 'Core records',
          route: '/admin/database/students',
          icon: 'students',
          activeWhen: [new RegExp('^/admin/database/students/?$')],
        },
        ...[...databaseSections].map(([sectionId, label]) => ({
          id: `database-${sectionId}`,
          label: `${label} records`,
          description: `Browse ${label.toLowerCase()} submissions`,
          group: 'Workflow records',
          route: `/admin/database/${sectionId}`,
          icon: 'records' as const,
          activeWhen: [new RegExp(`^/admin/database/${sectionId}(?:/|$)`)],
        })),
      ],
    });

    return navigation;
  }

  private formNavigationEntry(
    form: AdmissionForm,
    purpose: 'admission' | 'faculty' | 'employee' | 'general',
  ): AdminNavigationLink {
    const route =
      purpose === 'admission'
        ? `/admin/admissions/forms/${form._id}/applications`
        : `/admin/forms/${form._id}/fill`;
    return {
      id: `${purpose}-form-${form._id}`,
      label: form.destination?.menuName || form.name,
      route,
      icon: 'records',
      activeWhen: [new RegExp(`^${route.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}/?$`)],
    };
  }

  private workflowPurpose(purpose: AdmissionForm['purpose']) {
    return {
      faculty: { id: 'faculty', label: 'Faculty' },
      employee: { id: 'employees', label: 'Employees' },
      general: { id: 'other-applications', label: 'Other applications' },
      admission: { id: 'admissions', label: 'Admissions' },
    }[purpose || 'general'];
  }

  private deepestRouteTitle(): string {
    let route: ActivatedRoute | null | undefined = this.activatedRoute;
    let title = '';
    while (route) {
      const snapshot = route.snapshot;
      if (!snapshot) {
        route = route.firstChild;
        continue;
      }
      const candidate = snapshot.title ?? snapshot.data?.['title'];
      if (typeof candidate === 'string' && candidate.trim()) title = candidate.trim();
      route = route.firstChild ?? null;
    }
    return title;
  }
}
