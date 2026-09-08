import { ChangeDetectionStrategy, Component, DestroyRef, inject, signal } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { NavigationEnd, Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { LucideCalendarCheck, LucideClipboardCheck, LucideLayoutDashboard, LucideLogOut, } from '@lucide/angular';
import { filter } from 'rxjs';
import { FacultySessionService } from '../shared/faculty-session.service';
import * as i0 from "@angular/core";
export class FacultyShellComponent {
    session = inject(FacultySessionService);
    pageTitle = signal('Dashboard', ...(ngDevMode ? [{ debugName: "pageTitle" }] : /* istanbul ignore next */ []));
    router = inject(Router);
    destroyRef = inject(DestroyRef);
    constructor() {
        const profile = this.session.profile();
        if (!this.session.isAuthenticated() || profile?.mustChangePassword) {
            this.session.clear();
            void this.router.navigate(['/login']);
            return;
        }
        this.setPageTitle(this.router.url);
        this.router.events
            .pipe(filter((event) => event instanceof NavigationEnd), takeUntilDestroyed(this.destroyRef))
            .subscribe((event) => this.setPageTitle(event.urlAfterRedirects));
    }
    signOut() {
        this.session.clear();
        void this.router.navigate(['/login']);
    }
    setPageTitle(url) {
        this.pageTitle.set(url.includes('/attendance') ? 'Attendance' : url.includes('/exams') ? 'Exams' : 'Dashboard');
    }
    static ɵfac = function FacultyShellComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || FacultyShellComponent)(); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: FacultyShellComponent, selectors: [["erp-faculty-shell"]], decls: 69, vars: 6, consts: [["data-portal", "student", 1, "student-shell", "faculty-shell"], ["aria-label", "Faculty portal navigation", 1, "student-sidebar", "faculty-sidebar"], ["aria-hidden", "true", 1, "student-sidebar__decoration"], ["routerLink", "/faculty/dashboard", "aria-label", "GEU ERP faculty portal", 1, "student-sidebar__brand"], ["src", "/assets/images/brand/graphic-era-mark.png", "width", "44", "height", "44", "alt", "Graphic Era University"], [1, "student-sidebar__brand-copy"], ["aria-label", "Primary faculty navigation", 1, "student-navigation"], ["routerLink", "/faculty/dashboard", "routerLinkActive", "student-navigation__item--active", 1, "student-navigation__item"], [1, "student-navigation__icon"], ["lucideLayoutDashboard", "", "size", "21", "aria-hidden", "true"], [1, "student-navigation__label"], ["routerLink", "/faculty/attendance", "routerLinkActive", "student-navigation__item--active", 1, "student-navigation__item"], ["lucideCalendarCheck", "", "size", "21", "aria-hidden", "true"], ["routerLink", "/faculty/exams", "routerLinkActive", "student-navigation__item--active", 1, "student-navigation__item"], ["lucideClipboardCheck", "", "size", "21", "aria-hidden", "true"], [1, "student-sidebar__profile"], [1, "student-sidebar__profile-summary"], [1, "student-avatar"], [1, "student-sidebar__profile-copy"], [1, "student-sidebar__profile-actions"], ["type", "button", 3, "click"], ["lucideLogOut", "", "size", "17", "aria-hidden", "true"], [1, "student-header", "faculty-header"], [1, "student-header__mobile-brand"], ["src", "/assets/images/brand/graphic-era-mark.png", "width", "38", "height", "38", "alt", "Graphic Era University"], [1, "student-header__title"], [1, "faculty-mobile-links"], ["routerLink", "/faculty/dashboard", "aria-label", "Dashboard"], ["lucideLayoutDashboard", "", "size", "20"], ["routerLink", "/faculty/attendance", "aria-label", "Attendance"], ["lucideCalendarCheck", "", "size", "20"], ["routerLink", "/faculty/exams", "aria-label", "Exams"], ["lucideClipboardCheck", "", "size", "20"], [1, "student-header__actions"], [1, "student-header__profile-trigger", "faculty-profile-summary"], [1, "student-header__profile-name"], ["type", "button", "aria-label", "Sign out", 1, "student-icon-button", 3, "click"], ["lucideLogOut", "", "size", "20"], ["id", "faculty-main-content", "tabindex", "-1", 1, "student-page"], [1, "student-page__container"]], template: function FacultyShellComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0)(1, "aside", 1);
            i0.ɵɵelement(2, "div", 2);
            i0.ɵɵelementStart(3, "a", 3);
            i0.ɵɵelement(4, "img", 4);
            i0.ɵɵelementStart(5, "span", 5)(6, "strong");
            i0.ɵɵtext(7, "GEU ERP");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(8, "small");
            i0.ɵɵtext(9, "Faculty Portal");
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(10, "nav", 6)(11, "ul")(12, "li")(13, "a", 7)(14, "span", 8);
            i0.ɵɵnamespaceSVG();
            i0.ɵɵelement(15, "svg", 9);
            i0.ɵɵelementEnd();
            i0.ɵɵnamespaceHTML();
            i0.ɵɵelementStart(16, "span", 10);
            i0.ɵɵtext(17, "Dashboard");
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(18, "li")(19, "a", 11)(20, "span", 8);
            i0.ɵɵnamespaceSVG();
            i0.ɵɵelement(21, "svg", 12);
            i0.ɵɵelementEnd();
            i0.ɵɵnamespaceHTML();
            i0.ɵɵelementStart(22, "span", 10);
            i0.ɵɵtext(23, "Attendance");
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(24, "li")(25, "a", 13)(26, "span", 8);
            i0.ɵɵnamespaceSVG();
            i0.ɵɵelement(27, "svg", 14);
            i0.ɵɵelementEnd();
            i0.ɵɵnamespaceHTML();
            i0.ɵɵelementStart(28, "span", 10);
            i0.ɵɵtext(29, "Exams");
            i0.ɵɵelementEnd()()()()();
            i0.ɵɵelementStart(30, "div", 15)(31, "div", 16)(32, "span", 17);
            i0.ɵɵtext(33);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(34, "span", 18)(35, "strong");
            i0.ɵɵtext(36);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(37, "small");
            i0.ɵɵtext(38);
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(39, "div", 19)(40, "button", 20);
            i0.ɵɵlistener("click", function FacultyShellComponent_Template_button_click_40_listener() { return ctx.signOut(); });
            i0.ɵɵnamespaceSVG();
            i0.ɵɵelement(41, "svg", 21);
            i0.ɵɵnamespaceHTML();
            i0.ɵɵelementStart(42, "span");
            i0.ɵɵtext(43, "Sign out");
            i0.ɵɵelementEnd()()()()();
            i0.ɵɵelementStart(44, "header", 22)(45, "div", 23);
            i0.ɵɵelement(46, "img", 24);
            i0.ɵɵelementStart(47, "span");
            i0.ɵɵtext(48, "Faculty Portal");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(49, "h1", 25);
            i0.ɵɵtext(50);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(51, "div", 26)(52, "a", 27);
            i0.ɵɵnamespaceSVG();
            i0.ɵɵelement(53, "svg", 28);
            i0.ɵɵelementEnd();
            i0.ɵɵnamespaceHTML();
            i0.ɵɵelementStart(54, "a", 29);
            i0.ɵɵnamespaceSVG();
            i0.ɵɵelement(55, "svg", 30);
            i0.ɵɵelementEnd();
            i0.ɵɵnamespaceHTML();
            i0.ɵɵelementStart(56, "a", 31);
            i0.ɵɵnamespaceSVG();
            i0.ɵɵelement(57, "svg", 32);
            i0.ɵɵelementEnd()();
            i0.ɵɵnamespaceHTML();
            i0.ɵɵelementStart(58, "div", 33)(59, "div", 34)(60, "span", 17);
            i0.ɵɵtext(61);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(62, "span", 35);
            i0.ɵɵtext(63);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(64, "button", 36);
            i0.ɵɵlistener("click", function FacultyShellComponent_Template_button_click_64_listener() { return ctx.signOut(); });
            i0.ɵɵnamespaceSVG();
            i0.ɵɵelement(65, "svg", 37);
            i0.ɵɵelementEnd()()();
            i0.ɵɵnamespaceHTML();
            i0.ɵɵelementStart(66, "main", 38)(67, "div", 39);
            i0.ɵɵelement(68, "router-outlet");
            i0.ɵɵelementEnd()()();
        } if (rf & 2) {
            let tmp_1_0;
            let tmp_2_0;
            let tmp_5_0;
            i0.ɵɵadvance(33);
            i0.ɵɵtextInterpolate(ctx.session.initials());
            i0.ɵɵadvance(3);
            i0.ɵɵtextInterpolate(((tmp_1_0 = ctx.session.profile()) == null ? null : tmp_1_0.name) || "Faculty");
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate1("Employee ID ", (tmp_2_0 = ctx.session.profile()) == null ? null : tmp_2_0.employeeId);
            i0.ɵɵadvance(12);
            i0.ɵɵtextInterpolate(ctx.pageTitle());
            i0.ɵɵadvance(11);
            i0.ɵɵtextInterpolate(ctx.session.initials());
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate(((tmp_5_0 = ctx.session.profile()) == null ? null : tmp_5_0.name) || "Faculty");
        } }, dependencies: [RouterLink,
            RouterLinkActive,
            RouterOutlet,
            LucideCalendarCheck,
            LucideClipboardCheck,
            LucideLayoutDashboard,
            LucideLogOut], styles: ["[_nghost-%COMP%] {\n  display: contents;\n}\n.faculty-sidebar[_ngcontent-%COMP%]:hover {\n  width: var(--student-sidebar-expanded-width);\n}\n.faculty-sidebar[_ngcontent-%COMP%]:hover   .student-sidebar__brand-copy[_ngcontent-%COMP%], \n.faculty-sidebar[_ngcontent-%COMP%]:hover   .student-navigation__label[_ngcontent-%COMP%], \n.faculty-sidebar[_ngcontent-%COMP%]:hover   .student-sidebar__profile-copy[_ngcontent-%COMP%], \n.faculty-sidebar[_ngcontent-%COMP%]:hover   .student-sidebar__profile-actions[_ngcontent-%COMP%] {\n  opacity: 1;\n  visibility: visible;\n}\n.faculty-profile-summary[_ngcontent-%COMP%] {\n  cursor: default;\n}\n.faculty-mobile-links[_ngcontent-%COMP%] {\n  display: none;\n}\n.student-sidebar__profile-actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  display: flex;\n  width: 100%;\n  align-items: center;\n  gap: var(--student-space-2);\n  padding: var(--student-space-2);\n  border: 0;\n  color: var(--student-color-danger);\n  background: transparent;\n  cursor: pointer;\n}\n@media (max-width: 1023px) {\n  .faculty-mobile-links[_ngcontent-%COMP%] {\n    display: flex;\n    gap: 4px;\n  }\n  .faculty-mobile-links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    display: grid;\n    width: 38px;\n    height: 38px;\n    place-items: center;\n    border-radius: 10px;\n    color: var(--student-color-primary-pressed);\n    background: var(--student-color-primary-subtle);\n  }\n  .faculty-header[_ngcontent-%COMP%] {\n    grid-template-columns: minmax(0, 1fr) auto auto !important;\n  }\n}"], changeDetection: 0 });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(FacultyShellComponent, [{
        type: Component,
        args: [{ selector: 'erp-faculty-shell', imports: [
                    RouterLink,
                    RouterLinkActive,
                    RouterOutlet,
                    LucideCalendarCheck,
                    LucideClipboardCheck,
                    LucideLayoutDashboard,
                    LucideLogOut,
                ], changeDetection: ChangeDetectionStrategy.OnPush, template: "<div class=\"student-shell faculty-shell\" data-portal=\"student\">\n  <aside class=\"student-sidebar faculty-sidebar\" aria-label=\"Faculty portal navigation\">\n    <div class=\"student-sidebar__decoration\" aria-hidden=\"true\"></div>\n    <a\n      class=\"student-sidebar__brand\"\n      routerLink=\"/faculty/dashboard\"\n      aria-label=\"GEU ERP faculty portal\"\n    >\n      <img\n        src=\"/assets/images/brand/graphic-era-mark.png\"\n        width=\"44\"\n        height=\"44\"\n        alt=\"Graphic Era University\"\n      />\n      <span class=\"student-sidebar__brand-copy\"\n        ><strong>GEU ERP</strong><small>Faculty Portal</small></span\n      >\n    </a>\n    <nav class=\"student-navigation\" aria-label=\"Primary faculty navigation\">\n      <ul>\n        <li>\n          <a\n            class=\"student-navigation__item\"\n            routerLink=\"/faculty/dashboard\"\n            routerLinkActive=\"student-navigation__item--active\"\n            ><span class=\"student-navigation__icon\"\n              ><svg lucideLayoutDashboard size=\"21\" aria-hidden=\"true\"></svg></span\n            ><span class=\"student-navigation__label\">Dashboard</span></a\n          >\n        </li>\n        <li>\n          <a\n            class=\"student-navigation__item\"\n            routerLink=\"/faculty/attendance\"\n            routerLinkActive=\"student-navigation__item--active\"\n            ><span class=\"student-navigation__icon\"\n              ><svg lucideCalendarCheck size=\"21\" aria-hidden=\"true\"></svg></span\n            ><span class=\"student-navigation__label\">Attendance</span></a\n          >\n        </li>\n        <li>\n          <a\n            class=\"student-navigation__item\"\n            routerLink=\"/faculty/exams\"\n            routerLinkActive=\"student-navigation__item--active\"\n            ><span class=\"student-navigation__icon\"\n              ><svg lucideClipboardCheck size=\"21\" aria-hidden=\"true\"></svg></span\n            ><span class=\"student-navigation__label\">Exams</span></a\n          >\n        </li>\n      </ul>\n    </nav>\n    <div class=\"student-sidebar__profile\">\n      <div class=\"student-sidebar__profile-summary\">\n        <span class=\"student-avatar\">{{ session.initials() }}</span>\n        <span class=\"student-sidebar__profile-copy\"\n          ><strong>{{ session.profile()?.name || 'Faculty' }}</strong\n          ><small>Employee ID {{ session.profile()?.employeeId }}</small></span\n        >\n      </div>\n      <div class=\"student-sidebar__profile-actions\">\n        <button type=\"button\" (click)=\"signOut()\">\n          <svg lucideLogOut size=\"17\" aria-hidden=\"true\"></svg><span>Sign out</span>\n        </button>\n      </div>\n    </div>\n  </aside>\n\n  <header class=\"student-header faculty-header\">\n    <div class=\"student-header__mobile-brand\">\n      <img\n        src=\"/assets/images/brand/graphic-era-mark.png\"\n        width=\"38\"\n        height=\"38\"\n        alt=\"Graphic Era University\"\n      />\n      <span>Faculty Portal</span>\n    </div>\n    <h1 class=\"student-header__title\">{{ pageTitle() }}</h1>\n    <div class=\"faculty-mobile-links\">\n      <a routerLink=\"/faculty/dashboard\" aria-label=\"Dashboard\"\n        ><svg lucideLayoutDashboard size=\"20\"></svg\n      ></a>\n      <a routerLink=\"/faculty/attendance\" aria-label=\"Attendance\"\n        ><svg lucideCalendarCheck size=\"20\"></svg\n      ></a>\n      <a routerLink=\"/faculty/exams\" aria-label=\"Exams\"\n        ><svg lucideClipboardCheck size=\"20\"></svg\n      ></a>\n    </div>\n    <div class=\"student-header__actions\">\n      <div class=\"student-header__profile-trigger faculty-profile-summary\">\n        <span class=\"student-avatar\">{{ session.initials() }}</span>\n        <span class=\"student-header__profile-name\">{{ session.profile()?.name || 'Faculty' }}</span>\n      </div>\n      <button class=\"student-icon-button\" type=\"button\" aria-label=\"Sign out\" (click)=\"signOut()\">\n        <svg lucideLogOut size=\"20\"></svg>\n      </button>\n    </div>\n  </header>\n\n  <main id=\"faculty-main-content\" class=\"student-page\" tabindex=\"-1\">\n    <div class=\"student-page__container\"><router-outlet /></div>\n  </main>\n</div>\n", styles: [":host {\n  display: contents;\n}\n.faculty-sidebar:hover {\n  width: var(--student-sidebar-expanded-width);\n}\n.faculty-sidebar:hover .student-sidebar__brand-copy,\n.faculty-sidebar:hover .student-navigation__label,\n.faculty-sidebar:hover .student-sidebar__profile-copy,\n.faculty-sidebar:hover .student-sidebar__profile-actions {\n  opacity: 1;\n  visibility: visible;\n}\n.faculty-profile-summary {\n  cursor: default;\n}\n.faculty-mobile-links {\n  display: none;\n}\n.student-sidebar__profile-actions button {\n  display: flex;\n  width: 100%;\n  align-items: center;\n  gap: var(--student-space-2);\n  padding: var(--student-space-2);\n  border: 0;\n  color: var(--student-color-danger);\n  background: transparent;\n  cursor: pointer;\n}\n@media (max-width: 1023px) {\n  .faculty-mobile-links {\n    display: flex;\n    gap: 4px;\n  }\n  .faculty-mobile-links a {\n    display: grid;\n    width: 38px;\n    height: 38px;\n    place-items: center;\n    border-radius: 10px;\n    color: var(--student-color-primary-pressed);\n    background: var(--student-color-primary-subtle);\n  }\n  .faculty-header {\n    grid-template-columns: minmax(0, 1fr) auto auto !important;\n  }\n}\n"] }]
    }], () => [], null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(FacultyShellComponent, { className: "FacultyShellComponent", filePath: "frontend/src/app/features/faculty/layout/faculty-shell.component.ts", lineNumber: 28 }); })();
