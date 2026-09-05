import { CdkTrapFocus } from '@angular/cdk/a11y';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { LucideDynamicIcon, LucideLogOut, LucideUserRound, LucideX } from '@lucide/angular';
import { STUDENT_NAVIGATION, studentNavigationIcon, } from '../../shared/config/student-navigation.config';
import { StudentLayoutStateService } from '../../shared/services/student-layout-state.service';
import { StudentSessionService } from '../../shared/services/student-session.service';
import * as i0 from "@angular/core";
const _c0 = () => ({ exact: true });
const _forTrack0 = ($index, $item) => $item.id;
function StudentMobileDrawerComponent_Conditional_0_For_16_Conditional_1_Template(rf, ctx) { if (rf & 1) {
    const _r3 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "a", 19);
    i0.ɵɵlistener("click", function StudentMobileDrawerComponent_Conditional_0_For_16_Conditional_1_Template_a_click_0_listener() { i0.ɵɵrestoreView(_r3); const ctx_r1 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r1.close()); });
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(1, "svg", 20);
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(2, "span");
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const item_r4 = i0.ɵɵnextContext().$implicit;
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("routerLink", item_r4.route)("routerLinkActiveOptions", i0.ɵɵpureFunction0(5, _c0));
    i0.ɵɵattribute("aria-label", item_r4.ariaLabel);
    i0.ɵɵadvance();
    i0.ɵɵproperty("lucideIcon", ctx_r1.navigationIcon(item_r4.icon));
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(item_r4.label);
} }
function StudentMobileDrawerComponent_Conditional_0_For_16_Conditional_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "button", 18);
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(1, "svg", 20);
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(2, "span");
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "small");
    i0.ɵɵtext(5, "Soon");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const item_r4 = i0.ɵɵnextContext().$implicit;
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵattribute("aria-label", item_r4.label + " \u2014 coming soon");
    i0.ɵɵadvance();
    i0.ɵɵproperty("lucideIcon", ctx_r1.navigationIcon(item_r4.icon));
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(item_r4.label);
} }
function StudentMobileDrawerComponent_Conditional_0_For_16_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "li");
    i0.ɵɵconditionalCreate(1, StudentMobileDrawerComponent_Conditional_0_For_16_Conditional_1_Template, 4, 6, "a", 17)(2, StudentMobileDrawerComponent_Conditional_0_For_16_Conditional_2_Template, 6, 3, "button", 18);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r4 = ctx.$implicit;
    i0.ɵɵadvance();
    i0.ɵɵconditional(item_r4.enabled ? 1 : 2);
} }
function StudentMobileDrawerComponent_Conditional_0_Template(rf, ctx) { if (rf & 1) {
    const _r1 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 0)(1, "button", 1);
    i0.ɵɵlistener("click", function StudentMobileDrawerComponent_Conditional_0_Template_button_click_1_listener() { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.close()); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(2, "aside", 2)(3, "header", 3)(4, "a", 4);
    i0.ɵɵlistener("click", function StudentMobileDrawerComponent_Conditional_0_Template_a_click_4_listener() { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.close()); });
    i0.ɵɵelement(5, "img", 5);
    i0.ɵɵelementStart(6, "span")(7, "strong");
    i0.ɵɵtext(8, "GEU ERP");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(9, "small");
    i0.ɵɵtext(10, "Student Portal");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(11, "button", 6);
    i0.ɵɵlistener("click", function StudentMobileDrawerComponent_Conditional_0_Template_button_click_11_listener() { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.close()); });
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(12, "svg", 7);
    i0.ɵɵelementEnd()();
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(13, "nav", 8)(14, "ul");
    i0.ɵɵrepeaterCreate(15, StudentMobileDrawerComponent_Conditional_0_For_16_Template, 3, 1, "li", null, _forTrack0);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(17, "footer", 9)(18, "div", 10)(19, "span", 11);
    i0.ɵɵtext(20);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(21, "span")(22, "strong");
    i0.ɵɵtext(23);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(24, "small");
    i0.ɵɵtext(25);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(26, "div", 12)(27, "a", 13);
    i0.ɵɵlistener("click", function StudentMobileDrawerComponent_Conditional_0_Template_a_click_27_listener() { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.close()); });
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(28, "svg", 14);
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(29, "span");
    i0.ɵɵtext(30, "Profile");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(31, "a", 15);
    i0.ɵɵlistener("click", function StudentMobileDrawerComponent_Conditional_0_Template_a_click_31_listener() { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.signOut()); });
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(32, "svg", 16);
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(33, "span");
    i0.ɵɵtext(34, "Sign out");
    i0.ɵɵelementEnd()()()()()();
} if (rf & 2) {
    let tmp_4_0;
    let tmp_5_0;
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("cdkTrapFocusAutoCapture", true);
    i0.ɵɵadvance(13);
    i0.ɵɵrepeater(ctx_r1.navigation);
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(ctx_r1.session.initials());
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(((tmp_4_0 = ctx_r1.session.profile()) == null ? null : tmp_4_0.name) || "Student");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1("Student ID ", ((tmp_5_0 = ctx_r1.session.profile()) == null ? null : tmp_5_0.studentId) || "Unavailable");
} }
export class StudentMobileDrawerComponent {
    layoutState = inject(StudentLayoutStateService);
    session = inject(StudentSessionService);
    navigation = STUDENT_NAVIGATION;
    navigationIcon = studentNavigationIcon;
    close(restoreFocus = true) {
        this.layoutState.closeMobileNavigation(restoreFocus);
    }
    signOut() {
        this.session.clear();
        this.close(false);
    }
    static ɵfac = function StudentMobileDrawerComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || StudentMobileDrawerComponent)(); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: StudentMobileDrawerComponent, selectors: [["erp-student-mobile-drawer"]], decls: 1, vars: 1, consts: [[1, "student-mobile-drawer-layer"], ["type", "button", "aria-label", "Close student navigation", 1, "student-mobile-drawer__backdrop", 3, "click"], ["id", "student-mobile-drawer", "aria-label", "Mobile student navigation", "cdkTrapFocus", "", 1, "student-mobile-drawer", 3, "cdkTrapFocusAutoCapture"], [1, "student-mobile-drawer__header"], ["routerLink", "/student/dashboard", "aria-label", "GEU ERP student portal", 3, "click"], ["src", "/assets/images/brand/graphic-era-mark.png", "width", "44", "height", "44", "alt", "Graphic Era University"], ["type", "button", "aria-label", "Close student navigation", 1, "student-icon-button", 3, "click"], ["lucideX", "", "size", "21", "aria-hidden", "true"], ["aria-label", "Primary student navigation", 1, "student-mobile-navigation"], [1, "student-mobile-drawer__profile"], [1, "student-mobile-drawer__student"], [1, "student-avatar"], [1, "student-mobile-drawer__profile-actions"], ["routerLink", "/student/profile", 3, "click"], ["lucideUserRound", "", "size", "17", "aria-hidden", "true"], ["routerLink", "/student/login", 3, "click"], ["lucideLogOut", "", "size", "17", "aria-hidden", "true"], ["routerLinkActive", "student-mobile-navigation__item--active", "ariaCurrentWhenActive", "page", 3, "routerLink", "routerLinkActiveOptions"], ["type", "button", "disabled", ""], ["routerLinkActive", "student-mobile-navigation__item--active", "ariaCurrentWhenActive", "page", 3, "click", "routerLink", "routerLinkActiveOptions"], ["size", "20", "aria-hidden", "true", 3, "lucideIcon"]], template: function StudentMobileDrawerComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵconditionalCreate(0, StudentMobileDrawerComponent_Conditional_0_Template, 35, 4, "div", 0);
        } if (rf & 2) {
            i0.ɵɵconditional(ctx.layoutState.mobileNavigationOpen() ? 0 : -1);
        } }, dependencies: [CdkTrapFocus,
            LucideDynamicIcon,
            LucideLogOut,
            LucideUserRound,
            LucideX,
            RouterLink,
            RouterLinkActive], encapsulation: 2, changeDetection: 0 });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(StudentMobileDrawerComponent, [{
        type: Component,
        args: [{ selector: 'erp-student-mobile-drawer', imports: [
                    CdkTrapFocus,
                    LucideDynamicIcon,
                    LucideLogOut,
                    LucideUserRound,
                    LucideX,
                    RouterLink,
                    RouterLinkActive,
                ], changeDetection: ChangeDetectionStrategy.OnPush, template: "@if (layoutState.mobileNavigationOpen()) {\n  <div class=\"student-mobile-drawer-layer\">\n    <button\n      class=\"student-mobile-drawer__backdrop\"\n      type=\"button\"\n      aria-label=\"Close student navigation\"\n      (click)=\"close()\"\n    ></button>\n    <aside\n      id=\"student-mobile-drawer\"\n      class=\"student-mobile-drawer\"\n      aria-label=\"Mobile student navigation\"\n      cdkTrapFocus\n      [cdkTrapFocusAutoCapture]=\"true\"\n    >\n      <header class=\"student-mobile-drawer__header\">\n        <a routerLink=\"/student/dashboard\" aria-label=\"GEU ERP student portal\" (click)=\"close()\">\n          <img\n            src=\"/assets/images/brand/graphic-era-mark.png\"\n            width=\"44\"\n            height=\"44\"\n            alt=\"Graphic Era University\"\n          />\n          <span><strong>GEU ERP</strong><small>Student Portal</small></span>\n        </a>\n        <button\n          class=\"student-icon-button\"\n          type=\"button\"\n          aria-label=\"Close student navigation\"\n          (click)=\"close()\"\n        >\n          <svg lucideX size=\"21\" aria-hidden=\"true\"></svg>\n        </button>\n      </header>\n\n      <nav class=\"student-mobile-navigation\" aria-label=\"Primary student navigation\">\n        <ul>\n          @for (item of navigation; track item.id) {\n            <li>\n              @if (item.enabled) {\n                <a\n                  [routerLink]=\"item.route\"\n                  routerLinkActive=\"student-mobile-navigation__item--active\"\n                  [routerLinkActiveOptions]=\"{ exact: true }\"\n                  ariaCurrentWhenActive=\"page\"\n                  [attr.aria-label]=\"item.ariaLabel\"\n                  (click)=\"close()\"\n                >\n                  <svg [lucideIcon]=\"navigationIcon(item.icon)\" size=\"20\" aria-hidden=\"true\"></svg>\n                  <span>{{ item.label }}</span>\n                </a>\n              } @else {\n                <button type=\"button\" disabled [attr.aria-label]=\"item.label + ' \u2014 coming soon'\">\n                  <svg [lucideIcon]=\"navigationIcon(item.icon)\" size=\"20\" aria-hidden=\"true\"></svg>\n                  <span>{{ item.label }}</span>\n                  <small>Soon</small>\n                </button>\n              }\n            </li>\n          }\n        </ul>\n      </nav>\n\n      <footer class=\"student-mobile-drawer__profile\">\n        <div class=\"student-mobile-drawer__student\">\n          <span class=\"student-avatar\">{{ session.initials() }}</span>\n          <span\n            ><strong>{{ session.profile()?.name || 'Student' }}</strong\n            ><small>Student ID {{ session.profile()?.studentId || 'Unavailable' }}</small></span\n          >\n        </div>\n        <div class=\"student-mobile-drawer__profile-actions\">\n          <a routerLink=\"/student/profile\" (click)=\"close()\">\n            <svg lucideUserRound size=\"17\" aria-hidden=\"true\"></svg><span>Profile</span>\n          </a>\n          <a routerLink=\"/student/login\" (click)=\"signOut()\">\n            <svg lucideLogOut size=\"17\" aria-hidden=\"true\"></svg><span>Sign out</span>\n          </a>\n        </div>\n      </footer>\n    </aside>\n  </div>\n}\n" }]
    }], null, null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(StudentMobileDrawerComponent, { className: "StudentMobileDrawerComponent", filePath: "frontend/src/app/features/student/layout/student-mobile-drawer/student-mobile-drawer.component.ts", lineNumber: 26 }); })();
