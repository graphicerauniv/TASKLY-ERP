import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { LucideBookOpen, LucideHome, LucideLayoutGrid, LucideUserRound } from '@lucide/angular';
import * as i0 from "@angular/core";
const _c0 = () => ({ exact: true });
export class StudentMobileBottomNavComponent {
    static ɵfac = function StudentMobileBottomNavComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || StudentMobileBottomNavComponent)(); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: StudentMobileBottomNavComponent, selectors: [["erp-student-mobile-bottom-nav"]], decls: 17, vars: 2, consts: [["aria-label", "Student dashboard shortcuts", 1, "student-mobile-bottom-nav"], ["routerLink", "/student/dashboard", "routerLinkActive", "student-mobile-bottom-nav__item--active", 3, "routerLinkActiveOptions"], ["lucideHome", "", "size", "22", "aria-hidden", "true"], ["type", "button", "disabled", "", "aria-label", "Academics \u2014 coming soon"], ["lucideBookOpen", "", "size", "22", "aria-hidden", "true"], ["routerLink", "/student/fees", "routerLinkActive", "student-mobile-bottom-nav__item--active"], ["lucideLayoutGrid", "", "size", "22", "aria-hidden", "true"], ["routerLink", "/student/profile", "routerLinkActive", "student-mobile-bottom-nav__item--active", "aria-label", "Open student profile"], ["lucideUserRound", "", "size", "22", "aria-hidden", "true"]], template: function StudentMobileBottomNavComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "nav", 0)(1, "a", 1);
            i0.ɵɵnamespaceSVG();
            i0.ɵɵelement(2, "svg", 2);
            i0.ɵɵnamespaceHTML();
            i0.ɵɵelementStart(3, "span");
            i0.ɵɵtext(4, "Home");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(5, "button", 3);
            i0.ɵɵnamespaceSVG();
            i0.ɵɵelement(6, "svg", 4);
            i0.ɵɵnamespaceHTML();
            i0.ɵɵelementStart(7, "span");
            i0.ɵɵtext(8, "Academics");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(9, "a", 5);
            i0.ɵɵnamespaceSVG();
            i0.ɵɵelement(10, "svg", 6);
            i0.ɵɵnamespaceHTML();
            i0.ɵɵelementStart(11, "span");
            i0.ɵɵtext(12, "Services");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(13, "a", 7);
            i0.ɵɵnamespaceSVG();
            i0.ɵɵelement(14, "svg", 8);
            i0.ɵɵnamespaceHTML();
            i0.ɵɵelementStart(15, "span");
            i0.ɵɵtext(16, "Profile");
            i0.ɵɵelementEnd()()();
        } if (rf & 2) {
            i0.ɵɵadvance();
            i0.ɵɵproperty("routerLinkActiveOptions", i0.ɵɵpureFunction0(1, _c0));
        } }, dependencies: [RouterLink,
            RouterLinkActive,
            LucideBookOpen,
            LucideHome,
            LucideLayoutGrid,
            LucideUserRound], encapsulation: 2, changeDetection: 0 });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(StudentMobileBottomNavComponent, [{
        type: Component,
        args: [{ selector: 'erp-student-mobile-bottom-nav', imports: [
                    RouterLink,
                    RouterLinkActive,
                    LucideBookOpen,
                    LucideHome,
                    LucideLayoutGrid,
                    LucideUserRound,
                ], changeDetection: ChangeDetectionStrategy.OnPush, template: "<nav class=\"student-mobile-bottom-nav\" aria-label=\"Student dashboard shortcuts\">\n  <a routerLink=\"/student/dashboard\" routerLinkActive=\"student-mobile-bottom-nav__item--active\" [routerLinkActiveOptions]=\"{ exact: true }\">\n    <svg lucideHome size=\"22\" aria-hidden=\"true\"></svg><span>Home</span>\n  </a>\n  <button type=\"button\" disabled aria-label=\"Academics \u2014 coming soon\">\n    <svg lucideBookOpen size=\"22\" aria-hidden=\"true\"></svg><span>Academics</span>\n  </button>\n  <a routerLink=\"/student/fees\" routerLinkActive=\"student-mobile-bottom-nav__item--active\">\n    <svg lucideLayoutGrid size=\"22\" aria-hidden=\"true\"></svg><span>Services</span>\n  </a>\n  <a routerLink=\"/student/profile\" routerLinkActive=\"student-mobile-bottom-nav__item--active\" aria-label=\"Open student profile\">\n    <svg lucideUserRound size=\"22\" aria-hidden=\"true\"></svg><span>Profile</span>\n  </a>\n</nav>\n" }]
    }], null, null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(StudentMobileBottomNavComponent, { className: "StudentMobileBottomNavComponent", filePath: "frontend/src/app/features/student/dashboard/components/student-mobile-bottom-nav/student-mobile-bottom-nav.component.ts", lineNumber: 18 }); })();
