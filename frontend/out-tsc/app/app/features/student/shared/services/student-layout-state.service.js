import { DOCUMENT } from '@angular/common';
import { Injectable, computed, effect, inject, signal } from '@angular/core';
import * as i0 from "@angular/core";
export class StudentLayoutStateService {
    document = inject(DOCUMENT);
    overlay = signal(null, ...(ngDevMode ? [{ debugName: "overlay" }] : /* istanbul ignore next */ []));
    mobileMenuTrigger = null;
    profileTrigger = null;
    desktopSidebarExpanded = signal(true, ...(ngDevMode ? [{ debugName: "desktopSidebarExpanded" }] : /* istanbul ignore next */ []));
    activeOverlay = this.overlay.asReadonly();
    mobileNavigationOpen = computed(() => this.overlay() === 'mobile-navigation', ...(ngDevMode ? [{ debugName: "mobileNavigationOpen" }] : /* istanbul ignore next */ []));
    profileMenuOpen = computed(() => this.overlay() === 'profile', ...(ngDevMode ? [{ debugName: "profileMenuOpen" }] : /* istanbul ignore next */ []));
    notificationPanelOpen = computed(() => this.overlay() === 'notifications', ...(ngDevMode ? [{ debugName: "notificationPanelOpen" }] : /* istanbul ignore next */ []));
    constructor() {
        effect((onCleanup) => {
            if (!this.mobileNavigationOpen())
                return;
            const body = this.document.body;
            const previousOverflow = body.style.overflow;
            body.style.overflow = 'hidden';
            onCleanup(() => {
                body.style.overflow = previousOverflow;
            });
        });
    }
    setDesktopSidebarExpanded(expanded) {
        this.desktopSidebarExpanded.set(expanded);
    }
    openMobileNavigation(trigger) {
        this.mobileMenuTrigger = trigger;
        this.overlay.set('mobile-navigation');
    }
    closeMobileNavigation(restoreFocus = true) {
        if (!this.mobileNavigationOpen())
            return;
        this.overlay.set(null);
        if (restoreFocus)
            this.restoreFocus(this.mobileMenuTrigger);
    }
    toggleProfileMenu(trigger) {
        if (trigger)
            this.profileTrigger = trigger;
        this.overlay.update((current) => (current === 'profile' ? null : 'profile'));
    }
    openProfileMenu() {
        this.overlay.set('profile');
    }
    closeProfileMenu(restoreFocus = false) {
        if (!this.profileMenuOpen())
            return;
        this.overlay.set(null);
        if (restoreFocus)
            this.restoreFocus(this.profileTrigger);
    }
    isProfileTrigger(target) {
        return Boolean(this.profileTrigger?.contains(target));
    }
    toggleNotificationPanel() {
        this.overlay.update((current) => (current === 'notifications' ? null : 'notifications'));
    }
    closeTransientOverlays(restoreFocus = false) {
        const current = this.overlay();
        this.overlay.set(null);
        this.desktopSidebarExpanded.set(false);
        if (!restoreFocus)
            return;
        if (current === 'mobile-navigation')
            this.restoreFocus(this.mobileMenuTrigger);
        if (current === 'profile')
            this.restoreFocus(this.profileTrigger);
    }
    restoreFocus(element) {
        setTimeout(() => element?.focus());
    }
    static ɵfac = function StudentLayoutStateService_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || StudentLayoutStateService)(); };
    static ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: StudentLayoutStateService, factory: StudentLayoutStateService.ɵfac, providedIn: 'root' });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(StudentLayoutStateService, [{
        type: Injectable,
        args: [{ providedIn: 'root' }]
    }], () => [], null); })();
