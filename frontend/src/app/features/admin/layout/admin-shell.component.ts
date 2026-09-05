import { CdkTrapFocus } from '@angular/cdk/a11y';
import { DOCUMENT, NgTemplateOutlet } from '@angular/common';
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
  LucideCircleHelp,
  LucideCircleCheck,
  LucideDynamicIcon,
  LucideLifeBuoy,
  LucideLogOut,
  LucideMenu,
  LucideSearch,
  LucideX,
} from '@lucide/angular';
import { filter } from 'rxjs';

import { AuthService } from '../../../core/auth.service';
import { ApiService } from '../../../core/api.service';
import { AdmissionForm } from '../../../core/models';
import {
  ADMIN_NAVIGATION,
  AdminNavigationEntry,
  AdminNavigationSection,
  adminNavigationIcon,
  matchesAdminRoute,
  resolveAdminPageContext,
} from './navigation/admin-navigation.config';

@Component({
  selector: 'erp-admin-shell',
  standalone: true,
  imports: [
    CdkTrapFocus,
    NgTemplateOutlet,
    RouterLink,
    RouterOutlet,
    LucideChevronDown,
    LucideChevronLeft,
    LucideChevronRight,
    LucideBell,
    LucideCircleHelp,
    LucideCircleCheck,
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
  readonly expandedSubgroupId = signal<string | null>(null);
  readonly desktopFlyoutTop = signal(72);
  readonly desktopFlyoutMaxHeight = signal(480);
  readonly pageContext = signal(resolveAdminPageContext(this.router.url));
  readonly desktopModuleOpen = computed(() => this.expandedSectionId() !== null);
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
  private desktopFlyoutAnchor: HTMLElement | null = null;

  constructor() {
    this.syncNavigation(this.router.url);
    this.loadFormNavigation();

    this.router.events
      .pipe(
        filter((event): event is NavigationEnd => event instanceof NavigationEnd),
        takeUntilDestroyed(),
      )
      .subscribe((event) => {
        this.syncNavigation(event.urlAfterRedirects);
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
    const opening = this.expandedSectionId() !== section.id;
    this.expandedSectionId.set(opening ? section.id : null);
    if (!opening) this.expandedSubgroupId.set(null);

    if (!mobile && opening) {
      this.desktopFlyoutAnchor = event?.currentTarget as HTMLElement | null;
      window.requestAnimationFrame(() => this.repositionDesktopFlyout());
    } else if (!mobile) {
      this.desktopFlyoutAnchor = null;
    }
  }

  repositionDesktopFlyout(): void {
    if (!this.desktopFlyoutAnchor || !this.expandedSectionId()) return;
    const rect = this.desktopFlyoutAnchor.getBoundingClientRect();
    const viewportPadding = 12;
    const minimumHeight = 220;
    const preferredTop = Math.max(viewportPadding, rect.top - 8);
    const maximumTop = Math.max(
      viewportPadding,
      window.innerHeight - minimumHeight - viewportPadding,
    );
    const top = Math.min(preferredTop, maximumTop);
    this.desktopFlyoutTop.set(top);
    this.desktopFlyoutMaxHeight.set(
      Math.max(minimumHeight, window.innerHeight - top - viewportPadding),
    );
  }

  closeDesktopFlyout(): void {
    this.expandedSectionId.set(null);
    this.expandedSubgroupId.set(null);
    this.desktopFlyoutAnchor?.focus();
    this.desktopFlyoutAnchor = null;
  }

  toggleSubgroup(entry: AdminNavigationEntry): void {
    this.expandedSubgroupId.update((current) => (current === entry.id ? null : entry.id));
  }

  isSectionExpanded(section: AdminNavigationSection): boolean {
    return this.expandedSectionId() === section.id;
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
    const group = entries[index]?.group;
    return Boolean(group && (index === 0 || entries[index - 1]?.group !== group));
  }

  selectNavigation(): void {
    this.closeMobileNavigation(false);
  }

  logout(): void {
    this.closeMobileNavigation(false);
    this.auth.clear();
    void this.router.navigate(['/login']);
  }

  @HostListener('document:keydown.escape')
  onEscape(): void {
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
      this.expandedSectionId.set(null);
      this.expandedSubgroupId.set(null);
      this.desktopFlyoutAnchor = null;
    }
  }

  @HostListener('window:resize')
  onWindowResize(): void {
    const width = window.innerWidth;
    if (width > 767) this.closeMobileNavigation(false);
    if (width <= 1080 && width > 767) this.desktopCollapsed.set(true);
    this.repositionDesktopFlyout();
  }

  private syncNavigation(url: string): void {
    this.currentUrl.set(url);
    this.expandedSectionId.set(null);
    this.expandedSubgroupId.set(null);
    this.desktopFlyoutAnchor = null;
    this.pageContext.set(resolveAdminPageContext(url, this.deepestRouteTitle()));
  }

  private loadFormNavigation(): void {
    this.api.forms().subscribe({
      next: ({ items }) => this.navigation.set(this.navigationForForms(items)),
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
          ...admissionForms.map((form) => this.formNavigationEntry(form, 'admission')),
        ],
      };
    }
    const destinationGroups = new Map<string, { label: string; forms: AdmissionForm[] }>();
    for (const form of published.filter((item) => item.purpose !== 'admission')) {
      const fallback = this.purposeSection(form.purpose);
      const sectionId = form.destination?.navigationSectionId || fallback.id;
      const current = destinationGroups.get(sectionId) || {
        label: form.destination?.navigationSectionName || fallback.label,
        forms: [],
      };
      current.forms.push(form);
      destinationGroups.set(sectionId, current);
    }
    for (const [sectionId, group] of destinationGroups) {
      navigation.splice(
        Math.max(
          1,
          navigation.findIndex((section) => section.id === 'academics'),
        ),
        0,
        {
          id: `forms-${sectionId}`,
          label: group.label,
          icon: 'records',
          activeWhen: group.forms.map((form) => new RegExp(`^/admin/forms/${form._id}/fill/?$`)),
          children: group.forms.map((form) =>
            this.formNavigationEntry(form, form.purpose || 'general'),
          ),
        },
      );
    }
    const databaseSections = new Map<string, string>();
    for (const form of forms.filter(
      (item) => item.purpose !== 'admission' && item.destination?.databaseSectionId,
    )) {
      const fallback = this.purposeSection(form.purpose);
      databaseSections.set(
        form.destination?.databaseSectionId || fallback.id,
        form.destination?.databaseSectionName || fallback.label,
      );
    }
    navigation.splice(
      Math.max(
        1,
        navigation.findIndex((section) => section.id === 'academics'),
      ),
      0,
      {
        id: 'database',
        label: 'Database',
        icon: 'database',
        activeWhen: [new RegExp('^/admin/database(?:/|$)')],
        children: [
          {
            id: 'database-students',
            label: 'Students',
            route: '/admin/database/students',
            icon: 'students',
            activeWhen: [new RegExp('^/admin/database/students/?$')],
          },
          ...[...databaseSections].map(([sectionId, label]) => ({
            id: `database-${sectionId}`,
            label,
            route: `/admin/database/${sectionId}`,
            icon: 'records' as const,
            activeWhen: [new RegExp(`^/admin/database/${sectionId}(?:/|$)`)],
          })),
        ],
      },
    );
    return navigation;
  }

  private formNavigationEntry(
    form: AdmissionForm,
    purpose: 'admission' | 'faculty' | 'employee' | 'general',
  ): AdminNavigationEntry {
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

  private purposeSection(purpose: AdmissionForm['purpose']) {
    return {
      faculty: { id: 'faculty', label: 'Faculty' },
      employee: { id: 'employees', label: 'Employees' },
      general: { id: 'other-applications', label: 'Other Applications' },
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
