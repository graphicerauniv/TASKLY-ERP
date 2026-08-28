import { DOCUMENT } from '@angular/common';
import { Injectable, computed, effect, inject, signal } from '@angular/core';

export type StudentOverlay = 'mobile-navigation' | 'profile' | 'notifications' | null;

@Injectable({ providedIn: 'root' })
export class StudentLayoutStateService {
  private readonly document = inject(DOCUMENT);
  private readonly overlay = signal<StudentOverlay>(null);
  private mobileMenuTrigger: HTMLElement | null = null;
  private profileTrigger: HTMLElement | null = null;

  readonly desktopSidebarExpanded = signal(true);
  readonly activeOverlay = this.overlay.asReadonly();
  readonly mobileNavigationOpen = computed(() => this.overlay() === 'mobile-navigation');
  readonly profileMenuOpen = computed(() => this.overlay() === 'profile');
  readonly notificationPanelOpen = computed(() => this.overlay() === 'notifications');

  constructor() {
    effect((onCleanup) => {
      if (!this.mobileNavigationOpen()) return;

      const body = this.document.body;
      const previousOverflow = body.style.overflow;
      body.style.overflow = 'hidden';
      onCleanup(() => {
        body.style.overflow = previousOverflow;
      });
    });
  }

  setDesktopSidebarExpanded(expanded: boolean): void {
    this.desktopSidebarExpanded.set(expanded);
  }

  openMobileNavigation(trigger: HTMLElement): void {
    this.mobileMenuTrigger = trigger;
    this.overlay.set('mobile-navigation');
  }

  closeMobileNavigation(restoreFocus = true): void {
    if (!this.mobileNavigationOpen()) return;
    this.overlay.set(null);
    if (restoreFocus) this.restoreFocus(this.mobileMenuTrigger);
  }

  toggleProfileMenu(trigger?: HTMLElement): void {
    if (trigger) this.profileTrigger = trigger;
    this.overlay.update((current) => (current === 'profile' ? null : 'profile'));
  }

  openProfileMenu(): void {
    this.overlay.set('profile');
  }

  closeProfileMenu(restoreFocus = false): void {
    if (!this.profileMenuOpen()) return;
    this.overlay.set(null);
    if (restoreFocus) this.restoreFocus(this.profileTrigger);
  }

  isProfileTrigger(target: Node): boolean {
    return Boolean(this.profileTrigger?.contains(target));
  }

  toggleNotificationPanel(): void {
    this.overlay.update((current) => (current === 'notifications' ? null : 'notifications'));
  }

  closeTransientOverlays(restoreFocus = false): void {
    const current = this.overlay();
    this.overlay.set(null);
    this.desktopSidebarExpanded.set(false);

    if (!restoreFocus) return;
    if (current === 'mobile-navigation') this.restoreFocus(this.mobileMenuTrigger);
    if (current === 'profile') this.restoreFocus(this.profileTrigger);
  }

  private restoreFocus(element: HTMLElement | null): void {
    setTimeout(() => element?.focus());
  }
}
