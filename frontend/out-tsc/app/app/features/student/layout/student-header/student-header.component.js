import { ChangeDetectionStrategy, Component, DestroyRef, inject, signal } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { NavigationEnd, Router } from '@angular/router';
import { LucideBell, LucideCalendarDays, LucideChevronDown, LucideMenu, LucideSearch, } from '@lucide/angular';
import { StudentLayoutStateService } from '../../shared/services/student-layout-state.service';
import { StudentSessionService } from '../../shared/services/student-session.service';
import { StudentProfileMenuComponent } from '../student-profile-menu/student-profile-menu.component';
import { filter } from 'rxjs';
import * as i0 from "@angular/core";
export class StudentHeaderComponent {
    layoutState = inject(StudentLayoutStateService);
    session = inject(StudentSessionService);
    pageTitle = signal('Dashboard', ...(ngDevMode ? [{ debugName: "pageTitle" }] : /* istanbul ignore next */ []));
    router = inject(Router);
    destroyRef = inject(DestroyRef);
    constructor() {
        this.updatePageTitle(this.router.url);
        this.router.events
            .pipe(filter((event) => event instanceof NavigationEnd), takeUntilDestroyed(this.destroyRef))
            .subscribe((event) => this.updatePageTitle(event.urlAfterRedirects));
    }
    openMobileNavigation(trigger) {
        if (trigger instanceof HTMLElement)
            this.layoutState.openMobileNavigation(trigger);
    }
    toggleProfileMenu(trigger) {
        if (trigger instanceof HTMLElement)
            this.layoutState.toggleProfileMenu(trigger);
    }
    updatePageTitle(url) {
        this.pageTitle.set(url.startsWith('/student/profile')
            ? 'Student Profile'
            : url.startsWith('/student/fees')
                ? 'Fees'
                : 'Dashboard');
    }
    static ɵfac = function StudentHeaderComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || StudentHeaderComponent)(); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: StudentHeaderComponent, selectors: [["erp-student-header"]], decls: 27, vars: 6, consts: [[1, "student-header"], [1, "student-header__mobile-brand"], ["type", "button", "aria-label", "Open student navigation", "aria-controls", "student-mobile-drawer", 1, "student-icon-button", "student-header__menu-button", 3, "click"], ["lucideMenu", "", "size", "21", "aria-hidden", "true"], ["src", "/assets/images/brand/graphic-era-mark.png", "width", "38", "height", "38", "alt", "Graphic Era University"], [1, "student-header__title"], [1, "student-header__search"], [1, "student-visually-hidden"], ["lucideSearch", "", "size", "18", "aria-hidden", "true"], ["type", "search", "placeholder", "Search anything...", "autocomplete", "off"], [1, "student-header__actions"], ["type", "button", "aria-label", "Open calendar \u2014 coming soon", "disabled", "", 1, "student-icon-button", "student-header__calendar"], ["lucideCalendarDays", "", "size", "20", "aria-hidden", "true"], ["type", "button", "aria-label", "Notifications \u2014 coming in a later phase", "disabled", "", 1, "student-icon-button", "student-notification-button"], ["lucideBell", "", "size", "20", "aria-hidden", "true"], [1, "student-header__profile-area"], ["type", "button", "aria-controls", "student-profile-menu", 1, "student-header__profile-trigger", 3, "click"], [1, "student-avatar"], [1, "student-header__profile-name"], ["lucideChevronDown", "", "size", "16", "aria-hidden", "true", 1, "student-header__profile-chevron"]], template: function StudentHeaderComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "header", 0)(1, "div", 1)(2, "button", 2);
            i0.ɵɵlistener("click", function StudentHeaderComponent_Template_button_click_2_listener($event) { return ctx.openMobileNavigation($event.currentTarget); });
            i0.ɵɵnamespaceSVG();
            i0.ɵɵelement(3, "svg", 3);
            i0.ɵɵelementEnd();
            i0.ɵɵnamespaceHTML();
            i0.ɵɵelement(4, "img", 4);
            i0.ɵɵelementStart(5, "span");
            i0.ɵɵtext(6, "GEU ERP");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(7, "h1", 5);
            i0.ɵɵtext(8);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(9, "label", 6)(10, "span", 7);
            i0.ɵɵtext(11, "Search student portal");
            i0.ɵɵelementEnd();
            i0.ɵɵnamespaceSVG();
            i0.ɵɵelement(12, "svg", 8);
            i0.ɵɵnamespaceHTML();
            i0.ɵɵelement(13, "input", 9);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(14, "div", 10)(15, "button", 11);
            i0.ɵɵnamespaceSVG();
            i0.ɵɵelement(16, "svg", 12);
            i0.ɵɵelementEnd();
            i0.ɵɵnamespaceHTML();
            i0.ɵɵelementStart(17, "button", 13);
            i0.ɵɵnamespaceSVG();
            i0.ɵɵelement(18, "svg", 14);
            i0.ɵɵelementEnd();
            i0.ɵɵnamespaceHTML();
            i0.ɵɵelementStart(19, "div", 15)(20, "button", 16);
            i0.ɵɵlistener("click", function StudentHeaderComponent_Template_button_click_20_listener($event) { return ctx.toggleProfileMenu($event.currentTarget); });
            i0.ɵɵelementStart(21, "span", 17);
            i0.ɵɵtext(22);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(23, "span", 18);
            i0.ɵɵtext(24);
            i0.ɵɵelementEnd();
            i0.ɵɵnamespaceSVG();
            i0.ɵɵelement(25, "svg", 19);
            i0.ɵɵelementEnd();
            i0.ɵɵnamespaceHTML();
            i0.ɵɵelement(26, "erp-student-profile-menu");
            i0.ɵɵelementEnd()()();
        } if (rf & 2) {
            let tmp_2_0;
            let tmp_5_0;
            i0.ɵɵadvance(2);
            i0.ɵɵattribute("aria-expanded", ctx.layoutState.mobileNavigationOpen());
            i0.ɵɵadvance(6);
            i0.ɵɵtextInterpolate(ctx.pageTitle());
            i0.ɵɵadvance(12);
            i0.ɵɵattribute("aria-label", "Open " + (((tmp_2_0 = ctx.session.profile()) == null ? null : tmp_2_0.name) || "student") + " account menu")("aria-expanded", ctx.layoutState.profileMenuOpen());
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate(ctx.session.initials());
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate(((tmp_5_0 = ctx.session.profile()) == null ? null : tmp_5_0.name) || "Student");
        } }, dependencies: [LucideBell,
            LucideCalendarDays,
            LucideChevronDown,
            LucideMenu,
            LucideSearch,
            StudentProfileMenuComponent], encapsulation: 2, changeDetection: 0 });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(StudentHeaderComponent, [{
        type: Component,
        args: [{ selector: 'erp-student-header', imports: [
                    LucideBell,
                    LucideCalendarDays,
                    LucideChevronDown,
                    LucideMenu,
                    LucideSearch,
                    StudentProfileMenuComponent,
                ], changeDetection: ChangeDetectionStrategy.OnPush, template: "<header class=\"student-header\">\n  <div class=\"student-header__mobile-brand\">\n    <button\n      class=\"student-icon-button student-header__menu-button\"\n      type=\"button\"\n      aria-label=\"Open student navigation\"\n      [attr.aria-expanded]=\"layoutState.mobileNavigationOpen()\"\n      aria-controls=\"student-mobile-drawer\"\n      (click)=\"openMobileNavigation($event.currentTarget)\"\n    >\n      <svg lucideMenu size=\"21\" aria-hidden=\"true\"></svg>\n    </button>\n    <img\n      src=\"/assets/images/brand/graphic-era-mark.png\"\n      width=\"38\"\n      height=\"38\"\n      alt=\"Graphic Era University\"\n    />\n    <span>GEU ERP</span>\n  </div>\n\n  <h1 class=\"student-header__title\">{{ pageTitle() }}</h1>\n\n  <label class=\"student-header__search\">\n    <span class=\"student-visually-hidden\">Search student portal</span>\n    <svg lucideSearch size=\"18\" aria-hidden=\"true\"></svg>\n    <input type=\"search\" placeholder=\"Search anything...\" autocomplete=\"off\" />\n  </label>\n\n  <div class=\"student-header__actions\">\n    <button\n      class=\"student-icon-button student-header__calendar\"\n      type=\"button\"\n      aria-label=\"Open calendar \u2014 coming soon\"\n      disabled\n    >\n      <svg lucideCalendarDays size=\"20\" aria-hidden=\"true\"></svg>\n    </button>\n    <button\n      class=\"student-icon-button student-notification-button\"\n      type=\"button\"\n      aria-label=\"Notifications \u2014 coming in a later phase\"\n      disabled\n    >\n      <svg lucideBell size=\"20\" aria-hidden=\"true\"></svg>\n    </button>\n\n    <div class=\"student-header__profile-area\">\n      <button\n        class=\"student-header__profile-trigger\"\n        type=\"button\"\n        [attr.aria-label]=\"'Open ' + (session.profile()?.name || 'student') + ' account menu'\"\n        [attr.aria-expanded]=\"layoutState.profileMenuOpen()\"\n        aria-controls=\"student-profile-menu\"\n        (click)=\"toggleProfileMenu($event.currentTarget)\"\n      >\n        <span class=\"student-avatar\">{{ session.initials() }}</span>\n        <span class=\"student-header__profile-name\">{{ session.profile()?.name || 'Student' }}</span>\n        <svg\n          class=\"student-header__profile-chevron\"\n          lucideChevronDown\n          size=\"16\"\n          aria-hidden=\"true\"\n        ></svg>\n      </button>\n      <erp-student-profile-menu />\n    </div>\n  </div>\n</header>\n" }]
    }], () => [], null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(StudentHeaderComponent, { className: "StudentHeaderComponent", filePath: "frontend/src/app/features/student/layout/student-header/student-header.component.ts", lineNumber: 29 }); })();
