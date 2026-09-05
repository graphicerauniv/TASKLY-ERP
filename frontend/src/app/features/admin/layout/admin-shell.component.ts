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
  LucideCircleCheck,
  LucideDynamicIcon,
  LucideLifeBuoy,
  LucideLogOut,
  LucideMenu,
  LucideX,
} from '@lucide/angular';
import { filter } from 'rxjs';

import { AuthService } from '../../../core/auth.service';
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
    LucideCircleCheck,
    LucideDynamicIcon,
    LucideLifeBuoy,
    LucideLogOut,
    LucideMenu,
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

  readonly auth = inject(AuthService);
  readonly navigation = ADMIN_NAVIGATION;
  readonly matchesAdminRoute = matchesAdminRoute;
  readonly currentUrl = signal(this.router.url);
  readonly desktopCollapsed = signal(false);
  readonly mobileOpen = signal(false);
  readonly expandedSectionId = signal<string | null>(null);
  readonly expandedSubgroupId = signal<string | null>(null);
  readonly desktopFlyoutTop = signal(72);
  readonly desktopFlyoutMaxHeight = signal(480);
  readonly pageContext = signal(resolveAdminPageContext(this.router.url));
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
    const maximumTop = Math.max(viewportPadding, window.innerHeight - minimumHeight - viewportPadding);
    const top = Math.min(preferredTop, maximumTop);
    this.desktopFlyoutTop.set(top);
    this.desktopFlyoutMaxHeight.set(Math.max(minimumHeight, window.innerHeight - top - viewportPadding));
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
