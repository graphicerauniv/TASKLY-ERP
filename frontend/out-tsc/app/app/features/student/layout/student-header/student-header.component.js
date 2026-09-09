import { DatePipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, DestroyRef, inject, signal } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { NavigationEnd, Router, RouterLink } from '@angular/router';
import { LucideAlertTriangle, LucideBell, LucideCalendarDays, LucideCheck, LucideCheckCheck, LucideChevronDown, LucideChevronRight, LucideClock3, LucideInfo, LucideMenu, LucideSearch, LucideSettings, LucideX, } from '@lucide/angular';
import { ApiService } from '../../../../core/api.service';
import { StudentLayoutStateService } from '../../shared/services/student-layout-state.service';
import { StudentSessionService } from '../../shared/services/student-session.service';
import { StudentProfileMenuComponent } from '../student-profile-menu/student-profile-menu.component';
import { filter } from 'rxjs';
import * as i0 from "@angular/core";
const _c0 = () => [];
const _forTrack0 = ($index, $item) => $item.id;
function StudentHeaderComponent_Conditional_19_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 15);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const unread_r1 = ctx;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(unread_r1 > 99 ? "99+" : unread_r1);
} }
function StudentHeaderComponent_Conditional_28_Conditional_17_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 29);
    i0.ɵɵtext(1, "Loading notifications\u2026");
    i0.ɵɵelementEnd();
} }
function StudentHeaderComponent_Conditional_28_For_19_Case_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(0, "svg", 37);
} }
function StudentHeaderComponent_Conditional_28_For_19_Case_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(0, "svg", 37);
} }
function StudentHeaderComponent_Conditional_28_For_19_Case_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(0, "svg", 38);
} }
function StudentHeaderComponent_Conditional_28_For_19_Case_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(0, "svg", 39);
} }
function StudentHeaderComponent_Conditional_28_For_19_Case_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(0, "svg", 40);
} }
function StudentHeaderComponent_Conditional_28_For_19_Conditional_15_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "i", 42);
} }
function StudentHeaderComponent_Conditional_28_For_19_Template(rf, ctx) { if (rf & 1) {
    const _r4 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 35);
    i0.ɵɵlistener("click", function StudentHeaderComponent_Conditional_28_For_19_Template_button_click_0_listener() { const item_r5 = i0.ɵɵrestoreView(_r4).$implicit; const ctx_r2 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r2.openNotification(item_r5)); });
    i0.ɵɵelementStart(1, "span", 36);
    i0.ɵɵconditionalCreate(2, StudentHeaderComponent_Conditional_28_For_19_Case_2_Template, 1, 0, ":svg:svg", 37)(3, StudentHeaderComponent_Conditional_28_For_19_Case_3_Template, 1, 0, ":svg:svg", 37)(4, StudentHeaderComponent_Conditional_28_For_19_Case_4_Template, 1, 0, ":svg:svg", 38)(5, StudentHeaderComponent_Conditional_28_For_19_Case_5_Template, 1, 0, ":svg:svg", 39)(6, StudentHeaderComponent_Conditional_28_For_19_Case_6_Template, 1, 0, ":svg:svg", 40);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "span", 41)(8, "strong");
    i0.ɵɵtext(9);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(10, "small");
    i0.ɵɵtext(11);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(12, "time");
    i0.ɵɵtext(13);
    i0.ɵɵpipe(14, "date");
    i0.ɵɵelementEnd()();
    i0.ɵɵconditionalCreate(15, StudentHeaderComponent_Conditional_28_For_19_Conditional_15_Template, 1, 0, "i", 42);
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(16, "svg", 43);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    let tmp_13_0;
    const item_r5 = ctx.$implicit;
    i0.ɵɵclassProp("is-unread", !item_r5.read);
    i0.ɵɵattribute("data-type", item_r5.type);
    i0.ɵɵadvance(2);
    i0.ɵɵconditional((tmp_13_0 = item_r5.type) === "critical" ? 2 : tmp_13_0 === "risk" ? 3 : tmp_13_0 === "pending" ? 4 : tmp_13_0 === "correction" ? 5 : 6);
    i0.ɵɵadvance(7);
    i0.ɵɵtextInterpolate(item_r5.title);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(item_r5.message);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind2(14, 8, item_r5.createdAt, "dd MMM, h:mm a"));
    i0.ɵɵadvance(2);
    i0.ɵɵconditional(!item_r5.read ? 15 : -1);
} }
function StudentHeaderComponent_Conditional_28_ForEmpty_20_Conditional_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 44);
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(1, "svg", 45);
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(2, "strong");
    i0.ɵɵtext(3, "You\u2019re all caught up");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "p");
    i0.ɵɵtext(5, "No notifications are available.");
    i0.ɵɵelementEnd()();
} }
function StudentHeaderComponent_Conditional_28_ForEmpty_20_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵconditionalCreate(0, StudentHeaderComponent_Conditional_28_ForEmpty_20_Conditional_0_Template, 6, 0, "div", 44);
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext(2);
    i0.ɵɵconditional(!ctx_r2.notificationsLoading() ? 0 : -1);
} }
function StudentHeaderComponent_Conditional_28_Template(rf, ctx) { if (rf & 1) {
    const _r2 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 21);
    i0.ɵɵlistener("click", function StudentHeaderComponent_Conditional_28_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r2); const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.closeNotifications()); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(1, "aside", 22)(2, "header")(3, "div")(4, "h2");
    i0.ɵɵtext(5, "Notifications");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "p");
    i0.ɵɵtext(7, "Attendance, corrections, and important updates");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(8, "button", 23);
    i0.ɵɵlistener("click", function StudentHeaderComponent_Conditional_28_Template_button_click_8_listener() { i0.ɵɵrestoreView(_r2); const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.closeNotifications()); });
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(9, "svg", 24);
    i0.ɵɵelementEnd()();
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(10, "div", 25)(11, "span");
    i0.ɵɵtext(12);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(13, "button", 26);
    i0.ɵɵlistener("click", function StudentHeaderComponent_Conditional_28_Template_button_click_13_listener() { i0.ɵɵrestoreView(_r2); const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.markAllNotificationsRead()); });
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(14, "svg", 27);
    i0.ɵɵtext(15, " Mark all read");
    i0.ɵɵelementEnd()();
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(16, "div", 28);
    i0.ɵɵconditionalCreate(17, StudentHeaderComponent_Conditional_28_Conditional_17_Template, 2, 0, "p", 29);
    i0.ɵɵrepeaterCreate(18, StudentHeaderComponent_Conditional_28_For_19_Template, 17, 11, "button", 30, _forTrack0, false, StudentHeaderComponent_Conditional_28_ForEmpty_20_Template, 1, 1);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(21, "footer")(22, "a", 31);
    i0.ɵɵlistener("click", function StudentHeaderComponent_Conditional_28_Template_a_click_22_listener() { i0.ɵɵrestoreView(_r2); const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.closeNotifications()); });
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(23, "svg", 32);
    i0.ɵɵtext(24, " View all alerts");
    i0.ɵɵelementEnd();
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(25, "a", 33);
    i0.ɵɵlistener("click", function StudentHeaderComponent_Conditional_28_Template_a_click_25_listener() { i0.ɵɵrestoreView(_r2); const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.closeNotifications()); });
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(26, "svg", 34);
    i0.ɵɵtext(27, " Preferences");
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    let tmp_1_0;
    let tmp_2_0;
    let tmp_4_0;
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance(12);
    i0.ɵɵtextInterpolate1("", ((tmp_1_0 = ctx_r2.notifications()) == null ? null : tmp_1_0.counts == null ? null : tmp_1_0.counts.unread) || 0, " unread");
    i0.ɵɵadvance();
    i0.ɵɵproperty("disabled", !((tmp_2_0 = ctx_r2.notifications()) == null ? null : tmp_2_0.counts == null ? null : tmp_2_0.counts.unread));
    i0.ɵɵadvance(4);
    i0.ɵɵconditional(ctx_r2.notificationsLoading() && !ctx_r2.notifications() ? 17 : -1);
    i0.ɵɵadvance();
    i0.ɵɵrepeater(((tmp_4_0 = ctx_r2.notifications()) == null ? null : tmp_4_0.items == null ? null : tmp_4_0.items.slice(0, 12)) || i0.ɵɵpureFunction0(4, _c0));
} }
export class StudentHeaderComponent {
    layoutState = inject(StudentLayoutStateService);
    session = inject(StudentSessionService);
    pageTitle = signal('Dashboard', ...(ngDevMode ? [{ debugName: "pageTitle" }] : /* istanbul ignore next */ []));
    notificationOpen = signal(false, ...(ngDevMode ? [{ debugName: "notificationOpen" }] : /* istanbul ignore next */ []));
    notifications = signal(null, ...(ngDevMode ? [{ debugName: "notifications" }] : /* istanbul ignore next */ []));
    notificationsLoading = signal(false, ...(ngDevMode ? [{ debugName: "notificationsLoading" }] : /* istanbul ignore next */ []));
    api = inject(ApiService);
    router = inject(Router);
    destroyRef = inject(DestroyRef);
    constructor() {
        this.updatePageTitle(this.router.url);
        this.loadNotifications();
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
    toggleNotifications() {
        this.notificationOpen.update((open) => !open);
        if (this.notificationOpen())
            this.loadNotifications();
    }
    closeNotifications() { this.notificationOpen.set(false); }
    markAllNotificationsRead() {
        const token = this.session.token();
        if (!token || !this.notifications()?.counts.unread)
            return;
        this.api.markStudentAttendanceAlertsRead(token, { all: true }).subscribe({ next: () => this.loadNotifications() });
    }
    openNotification(item) {
        const token = this.session.token();
        const navigate = () => {
            this.closeNotifications();
            void this.router.navigate(item.subjectId ? ['/student/attendance/shortage', item.subjectId] : ['/student/attendance/alerts']);
        };
        if (!token || item.read) {
            navigate();
            return;
        }
        this.api.markStudentAttendanceAlertsRead(token, { ids: [item.id] }).subscribe({ next: navigate, error: navigate });
    }
    loadNotifications() {
        const token = this.session.token();
        if (!token || this.notificationsLoading())
            return;
        this.notificationsLoading.set(true);
        this.api.studentAttendanceAlerts(token).subscribe({
            next: (feed) => { this.notifications.set(feed); this.notificationsLoading.set(false); },
            error: () => this.notificationsLoading.set(false),
        });
    }
    updatePageTitle(url) {
        this.pageTitle.set(url.startsWith('/student/profile')
            ? 'Student Profile'
            : url.startsWith('/student/fees')
                ? 'Fees'
                : 'Dashboard');
    }
    static ɵfac = function StudentHeaderComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || StudentHeaderComponent)(); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: StudentHeaderComponent, selectors: [["erp-student-header"]], decls: 29, vars: 9, consts: [[1, "student-header"], [1, "student-header__mobile-brand"], ["type", "button", "aria-label", "Open student navigation", "aria-controls", "student-mobile-drawer", 1, "student-icon-button", "student-header__menu-button", 3, "click"], ["lucideMenu", "", "size", "21", "aria-hidden", "true"], ["src", "/assets/images/brand/graphic-era-mark.png", "width", "38", "height", "38", "alt", "Graphic Era University"], [1, "student-header__title"], [1, "student-header__search"], [1, "student-visually-hidden"], ["lucideSearch", "", "size", "18", "aria-hidden", "true"], ["type", "search", "placeholder", "Search anything...", "autocomplete", "off"], [1, "student-header__actions"], ["type", "button", "aria-label", "Open calendar \u2014 coming soon", "disabled", "", 1, "student-icon-button", "student-header__calendar"], ["lucideCalendarDays", "", "size", "20", "aria-hidden", "true"], ["type", "button", "aria-label", "Open notifications", "aria-controls", "student-notification-drawer", 1, "student-icon-button", "student-notification-button", 3, "click"], ["lucideBell", "", "size", "20", "aria-hidden", "true"], [1, "student-notification-button__badge"], [1, "student-header__profile-area"], ["type", "button", "aria-controls", "student-profile-menu", 1, "student-header__profile-trigger", 3, "click"], [1, "student-avatar"], [1, "student-header__profile-name"], ["lucideChevronDown", "", "size", "16", "aria-hidden", "true", 1, "student-header__profile-chevron"], ["type", "button", "aria-label", "Close notifications", 1, "student-notification-backdrop", 3, "click"], ["id", "student-notification-drawer", "aria-label", "Notifications", 1, "student-notification-drawer"], ["type", "button", "aria-label", "Close notifications", 1, "student-icon-button", 3, "click"], ["lucideX", "", "size", "21"], [1, "student-notification-drawer__actions"], ["type", "button", 3, "click", "disabled"], ["lucideCheckCheck", "", "size", "17"], [1, "student-notification-drawer__list"], [1, "student-notification-drawer__state"], ["type", "button", 3, "is-unread"], ["routerLink", "/student/attendance/alerts", 3, "click"], ["lucideBell", "", "size", "18"], ["routerLink", "/student/attendance/alerts/preferences", 3, "click"], ["lucideSettings", "", "size", "18"], ["type", "button", 3, "click"], [1, "student-notification-drawer__icon"], ["lucideAlertTriangle", "", "size", "19"], ["lucideClock3", "", "size", "19"], ["lucideCheck", "", "size", "19"], ["lucideInfo", "", "size", "19"], [1, "student-notification-drawer__copy"], ["aria-label", "Unread"], ["lucideChevronRight", "", "size", "18", "aria-hidden", "true"], [1, "student-notification-drawer__empty"], ["lucideCheck", "", "size", "25"]], template: function StudentHeaderComponent_Template(rf, ctx) { if (rf & 1) {
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
            i0.ɵɵlistener("click", function StudentHeaderComponent_Template_button_click_17_listener() { return ctx.toggleNotifications(); });
            i0.ɵɵnamespaceSVG();
            i0.ɵɵelement(18, "svg", 14);
            i0.ɵɵconditionalCreate(19, StudentHeaderComponent_Conditional_19_Template, 2, 1, "span", 15);
            i0.ɵɵelementEnd();
            i0.ɵɵnamespaceHTML();
            i0.ɵɵelementStart(20, "div", 16)(21, "button", 17);
            i0.ɵɵlistener("click", function StudentHeaderComponent_Template_button_click_21_listener($event) { return ctx.toggleProfileMenu($event.currentTarget); });
            i0.ɵɵelementStart(22, "span", 18);
            i0.ɵɵtext(23);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(24, "span", 19);
            i0.ɵɵtext(25);
            i0.ɵɵelementEnd();
            i0.ɵɵnamespaceSVG();
            i0.ɵɵelement(26, "svg", 20);
            i0.ɵɵelementEnd();
            i0.ɵɵnamespaceHTML();
            i0.ɵɵelement(27, "erp-student-profile-menu");
            i0.ɵɵelementEnd()()();
            i0.ɵɵconditionalCreate(28, StudentHeaderComponent_Conditional_28_Template, 28, 5);
        } if (rf & 2) {
            let tmp_3_0;
            let tmp_4_0;
            let tmp_7_0;
            i0.ɵɵadvance(2);
            i0.ɵɵattribute("aria-expanded", ctx.layoutState.mobileNavigationOpen());
            i0.ɵɵadvance(6);
            i0.ɵɵtextInterpolate(ctx.pageTitle());
            i0.ɵɵadvance(9);
            i0.ɵɵattribute("aria-expanded", ctx.notificationOpen());
            i0.ɵɵadvance(2);
            i0.ɵɵconditional((tmp_3_0 = (tmp_3_0 = ctx.notifications()) == null ? null : tmp_3_0.counts == null ? null : tmp_3_0.counts.unread) ? 19 : -1, tmp_3_0);
            i0.ɵɵadvance(2);
            i0.ɵɵattribute("aria-label", "Open " + (((tmp_4_0 = ctx.session.profile()) == null ? null : tmp_4_0.name) || "student") + " account menu")("aria-expanded", ctx.layoutState.profileMenuOpen());
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate(ctx.session.initials());
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate(((tmp_7_0 = ctx.session.profile()) == null ? null : tmp_7_0.name) || "Student");
            i0.ɵɵadvance(3);
            i0.ɵɵconditional(ctx.notificationOpen() ? 28 : -1);
        } }, dependencies: [LucideBell,
            RouterLink,
            LucideAlertTriangle,
            LucideCalendarDays,
            LucideCheck,
            LucideCheckCheck,
            LucideChevronDown,
            LucideChevronRight,
            LucideClock3,
            LucideInfo,
            LucideMenu,
            LucideSearch,
            LucideSettings,
            LucideX,
            StudentProfileMenuComponent,
            DatePipe], encapsulation: 2, changeDetection: 0 });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(StudentHeaderComponent, [{
        type: Component,
        args: [{ selector: 'erp-student-header', imports: [
                    LucideBell,
                    DatePipe,
                    RouterLink,
                    LucideAlertTriangle,
                    LucideCalendarDays,
                    LucideCheck,
                    LucideCheckCheck,
                    LucideChevronDown,
                    LucideChevronRight,
                    LucideClock3,
                    LucideInfo,
                    LucideMenu,
                    LucideSearch,
                    LucideSettings,
                    LucideX,
                    StudentProfileMenuComponent,
                ], changeDetection: ChangeDetectionStrategy.OnPush, template: "<header class=\"student-header\">\n  <div class=\"student-header__mobile-brand\">\n    <button\n      class=\"student-icon-button student-header__menu-button\"\n      type=\"button\"\n      aria-label=\"Open student navigation\"\n      [attr.aria-expanded]=\"layoutState.mobileNavigationOpen()\"\n      aria-controls=\"student-mobile-drawer\"\n      (click)=\"openMobileNavigation($event.currentTarget)\"\n    >\n      <svg lucideMenu size=\"21\" aria-hidden=\"true\"></svg>\n    </button>\n    <img\n      src=\"/assets/images/brand/graphic-era-mark.png\"\n      width=\"38\"\n      height=\"38\"\n      alt=\"Graphic Era University\"\n    />\n    <span>GEU ERP</span>\n  </div>\n\n  <h1 class=\"student-header__title\">{{ pageTitle() }}</h1>\n\n  <label class=\"student-header__search\">\n    <span class=\"student-visually-hidden\">Search student portal</span>\n    <svg lucideSearch size=\"18\" aria-hidden=\"true\"></svg>\n    <input type=\"search\" placeholder=\"Search anything...\" autocomplete=\"off\" />\n  </label>\n\n  <div class=\"student-header__actions\">\n    <button\n      class=\"student-icon-button student-header__calendar\"\n      type=\"button\"\n      aria-label=\"Open calendar \u2014 coming soon\"\n      disabled\n    >\n      <svg lucideCalendarDays size=\"20\" aria-hidden=\"true\"></svg>\n    </button>\n    <button\n      class=\"student-icon-button student-notification-button\"\n      type=\"button\"\n      aria-label=\"Open notifications\"\n      [attr.aria-expanded]=\"notificationOpen()\"\n      aria-controls=\"student-notification-drawer\"\n      (click)=\"toggleNotifications()\"\n    >\n      <svg lucideBell size=\"20\" aria-hidden=\"true\"></svg>\n      @if (notifications()?.counts?.unread; as unread) {\n        <span class=\"student-notification-button__badge\">{{ unread > 99 ? '99+' : unread }}</span>\n      }\n    </button>\n\n    <div class=\"student-header__profile-area\">\n      <button\n        class=\"student-header__profile-trigger\"\n        type=\"button\"\n        [attr.aria-label]=\"'Open ' + (session.profile()?.name || 'student') + ' account menu'\"\n        [attr.aria-expanded]=\"layoutState.profileMenuOpen()\"\n        aria-controls=\"student-profile-menu\"\n        (click)=\"toggleProfileMenu($event.currentTarget)\"\n      >\n        <span class=\"student-avatar\">{{ session.initials() }}</span>\n        <span class=\"student-header__profile-name\">{{ session.profile()?.name || 'Student' }}</span>\n        <svg\n          class=\"student-header__profile-chevron\"\n          lucideChevronDown\n          size=\"16\"\n          aria-hidden=\"true\"\n        ></svg>\n      </button>\n      <erp-student-profile-menu />\n    </div>\n  </div>\n</header>\n\n@if (notificationOpen()) {\n  <button class=\"student-notification-backdrop\" type=\"button\" aria-label=\"Close notifications\" (click)=\"closeNotifications()\"></button>\n  <aside id=\"student-notification-drawer\" class=\"student-notification-drawer\" aria-label=\"Notifications\">\n    <header>\n      <div><h2>Notifications</h2><p>Attendance, corrections, and important updates</p></div>\n      <button class=\"student-icon-button\" type=\"button\" aria-label=\"Close notifications\" (click)=\"closeNotifications()\"><svg lucideX size=\"21\"></svg></button>\n    </header>\n    <div class=\"student-notification-drawer__actions\">\n      <span>{{ notifications()?.counts?.unread || 0 }} unread</span>\n      <button type=\"button\" (click)=\"markAllNotificationsRead()\" [disabled]=\"!notifications()?.counts?.unread\"><svg lucideCheckCheck size=\"17\"></svg> Mark all read</button>\n    </div>\n    <div class=\"student-notification-drawer__list\">\n      @if (notificationsLoading() && !notifications()) { <p class=\"student-notification-drawer__state\">Loading notifications\u2026</p> }\n      @for (item of notifications()?.items?.slice(0, 12) || []; track item.id) {\n        <button type=\"button\" [attr.data-type]=\"item.type\" [class.is-unread]=\"!item.read\" (click)=\"openNotification(item)\">\n          <span class=\"student-notification-drawer__icon\">\n            @switch (item.type) {\n              @case ('critical') { <svg lucideAlertTriangle size=\"19\"></svg> }\n              @case ('risk') { <svg lucideAlertTriangle size=\"19\"></svg> }\n              @case ('pending') { <svg lucideClock3 size=\"19\"></svg> }\n              @case ('correction') { <svg lucideCheck size=\"19\"></svg> }\n              @default { <svg lucideInfo size=\"19\"></svg> }\n            }\n          </span>\n          <span class=\"student-notification-drawer__copy\"><strong>{{ item.title }}</strong><small>{{ item.message }}</small><time>{{ item.createdAt | date: 'dd MMM, h:mm a' }}</time></span>\n          @if (!item.read) { <i aria-label=\"Unread\"></i> }\n          <svg lucideChevronRight size=\"18\" aria-hidden=\"true\"></svg>\n        </button>\n      } @empty {\n        @if (!notificationsLoading()) { <div class=\"student-notification-drawer__empty\"><svg lucideCheck size=\"25\"></svg><strong>You\u2019re all caught up</strong><p>No notifications are available.</p></div> }\n      }\n    </div>\n    <footer><a routerLink=\"/student/attendance/alerts\" (click)=\"closeNotifications()\"><svg lucideBell size=\"18\"></svg> View all alerts</a><a routerLink=\"/student/attendance/alerts/preferences\" (click)=\"closeNotifications()\"><svg lucideSettings size=\"18\"></svg> Preferences</a></footer>\n  </aside>\n}\n" }]
    }], () => [], null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(StudentHeaderComponent, { className: "StudentHeaderComponent", filePath: "frontend/src/app/features/student/layout/student-header/student-header.component.ts", lineNumber: 50 }); })();
