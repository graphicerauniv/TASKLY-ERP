import { ChangeDetectionStrategy, Component, HostListener, inject, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { LucideDynamicIcon, LucideLogOut, LucideUserRound } from '@lucide/angular';
import { STUDENT_NAVIGATION, studentNavigationIcon, } from '../../shared/config/student-navigation.config';
import { StudentLayoutStateService } from '../../shared/services/student-layout-state.service';
import { StudentSessionService } from '../../shared/services/student-session.service';
import * as i0 from "@angular/core";
const _c0 = () => ({ exact: true });
const _forTrack0 = ($index, $item) => $item.id;
function StudentSidebarComponent_For_12_Conditional_1_Conditional_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 25);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r2 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(item_r2.badge);
} }
function StudentSidebarComponent_For_12_Conditional_1_Template(rf, ctx) { if (rf & 1) {
    const _r4 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "a", 21);
    i0.ɵɵlistener("click", function StudentSidebarComponent_For_12_Conditional_1_Template_a_click_0_listener() { i0.ɵɵrestoreView(_r4); const ctx_r2 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r2.selectNavigation()); });
    i0.ɵɵelementStart(1, "span", 22);
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(2, "svg", 23);
    i0.ɵɵelementEnd();
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(3, "span", 24);
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵconditionalCreate(5, StudentSidebarComponent_For_12_Conditional_1_Conditional_5_Template, 2, 1, "span", 25);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r2 = i0.ɵɵnextContext().$implicit;
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵproperty("routerLink", item_r2.route)("routerLinkActiveOptions", i0.ɵɵpureFunction0(6, _c0));
    i0.ɵɵattribute("aria-label", item_r2.ariaLabel);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("lucideIcon", ctx_r2.navigationIcon(item_r2.icon));
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(item_r2.label);
    i0.ɵɵadvance();
    i0.ɵɵconditional(item_r2.badge ? 5 : -1);
} }
function StudentSidebarComponent_For_12_Conditional_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "button", 20)(1, "span", 22);
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(2, "svg", 23);
    i0.ɵɵelementEnd();
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(3, "span", 24);
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "span", 26);
    i0.ɵɵtext(6, "Soon");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const item_r2 = i0.ɵɵnextContext().$implicit;
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵattribute("aria-label", item_r2.label + " \u2014 coming soon");
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("lucideIcon", ctx_r2.navigationIcon(item_r2.icon));
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(item_r2.label);
} }
function StudentSidebarComponent_For_12_Template(rf, ctx) { if (rf & 1) {
    const _r1 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "li", 18);
    i0.ɵɵlistener("pointerenter", function StudentSidebarComponent_For_12_Template_li_pointerenter_0_listener($event) { const item_r2 = i0.ɵɵrestoreView(_r1).$implicit; const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.showTooltip(item_r2.label, $event)); })("pointerleave", function StudentSidebarComponent_For_12_Template_li_pointerleave_0_listener() { i0.ɵɵrestoreView(_r1); const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.hideTooltip()); });
    i0.ɵɵconditionalCreate(1, StudentSidebarComponent_For_12_Conditional_1_Template, 6, 7, "a", 19)(2, StudentSidebarComponent_For_12_Conditional_2_Template, 7, 3, "button", 20);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r2 = ctx.$implicit;
    i0.ɵɵadvance();
    i0.ɵɵconditional(item_r2.enabled ? 1 : 2);
} }
function StudentSidebarComponent_Conditional_13_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 27);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵstyleProp("top", ctx_r2.tooltipTop(), "px");
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r2.tooltipLabel());
} }
export class StudentSidebarComponent {
    navigation = STUDENT_NAVIGATION;
    layoutState = inject(StudentLayoutStateService);
    session = inject(StudentSessionService);
    navigationIcon = studentNavigationIcon;
    tooltipLabel = signal('', ...(ngDevMode ? [{ debugName: "tooltipLabel" }] : /* istanbul ignore next */ []));
    tooltipTop = signal(0, ...(ngDevMode ? [{ debugName: "tooltipTop" }] : /* istanbul ignore next */ []));
    collapseTimer = null;
    expand() {
        this.cancelCollapse();
        this.layoutState.setDesktopSidebarExpanded(true);
    }
    scheduleCollapse() {
        this.cancelCollapse();
        this.collapseTimer = setTimeout(() => {
            this.layoutState.setDesktopSidebarExpanded(false);
        }, 160);
    }
    expandForKeyboard() {
        this.expand();
    }
    collapseAfterFocus(event) {
        const nextTarget = event.relatedTarget;
        if (!(nextTarget instanceof Node) ||
            !event.currentTarget.contains(nextTarget)) {
            this.scheduleCollapse();
        }
    }
    selectNavigation() {
        this.cancelCollapse();
        this.layoutState.setDesktopSidebarExpanded(false);
    }
    signOut() {
        this.session.clear();
    }
    showTooltip(label, event) {
        if (this.layoutState.desktopSidebarExpanded())
            return;
        const target = event.currentTarget;
        if (!(target instanceof HTMLElement))
            return;
        const bounds = target.getBoundingClientRect();
        this.tooltipLabel.set(label);
        this.tooltipTop.set(bounds.top + bounds.height / 2);
    }
    hideTooltip() {
        this.tooltipLabel.set('');
    }
    cancelCollapse() {
        if (this.collapseTimer)
            clearTimeout(this.collapseTimer);
        this.collapseTimer = null;
    }
    static ɵfac = function StudentSidebarComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || StudentSidebarComponent)(); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: StudentSidebarComponent, selectors: [["erp-student-sidebar"]], hostBindings: function StudentSidebarComponent_HostBindings(rf, ctx) { if (rf & 1) {
            i0.ɵɵlistener("pointerenter", function StudentSidebarComponent_pointerenter_HostBindingHandler() { return ctx.expand(); })("pointerleave", function StudentSidebarComponent_pointerleave_HostBindingHandler() { return ctx.scheduleCollapse(); })("focusin", function StudentSidebarComponent_focusin_HostBindingHandler() { return ctx.expandForKeyboard(); })("focusout", function StudentSidebarComponent_focusout_HostBindingHandler($event) { return ctx.collapseAfterFocus($event); });
        } }, decls: 34, vars: 8, consts: [["aria-label", "Student portal navigation", 1, "student-sidebar"], ["aria-hidden", "true", 1, "student-sidebar__decoration"], ["routerLink", "/student/dashboard", "aria-label", "GEU ERP student portal", 1, "student-sidebar__brand"], ["src", "/assets/images/brand/graphic-era-mark.png", "width", "44", "height", "44", "alt", "Graphic Era University"], [1, "student-sidebar__brand-copy"], ["aria-label", "Primary student navigation", 1, "student-navigation"], [1, "student-navigation__item-wrap"], ["role", "tooltip", 1, "student-sidebar__floating-tooltip", 3, "top"], [1, "student-sidebar__profile"], ["routerLink", "/student/profile", 1, "student-sidebar__profile-summary", 3, "click"], [1, "student-avatar"], [1, "student-sidebar__profile-copy"], [1, "student-sidebar__profile-actions"], ["routerLink", "/student/profile", "aria-label", "Open my profile", 3, "click"], ["lucideUserRound", "", "size", "17", "aria-hidden", "true"], ["routerLink", "/student/login", "aria-label", "Sign out of the student portal", 3, "click"], ["lucideLogOut", "", "size", "17", "aria-hidden", "true"], ["role", "tooltip", 1, "student-sidebar__profile-tooltip"], [1, "student-navigation__item-wrap", 3, "pointerenter", "pointerleave"], ["routerLinkActive", "student-navigation__item--active", "ariaCurrentWhenActive", "page", 1, "student-navigation__item", 3, "routerLink", "routerLinkActiveOptions"], ["type", "button", "disabled", "", 1, "student-navigation__item", "student-navigation__item--disabled"], ["routerLinkActive", "student-navigation__item--active", "ariaCurrentWhenActive", "page", 1, "student-navigation__item", 3, "click", "routerLink", "routerLinkActiveOptions"], [1, "student-navigation__icon"], ["size", "21", "aria-hidden", "true", 3, "lucideIcon"], [1, "student-navigation__label"], [1, "student-navigation__badge"], [1, "student-navigation__soon"], ["role", "tooltip", 1, "student-sidebar__floating-tooltip"]], template: function StudentSidebarComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "aside", 0);
            i0.ɵɵelement(1, "div", 1);
            i0.ɵɵelementStart(2, "a", 2);
            i0.ɵɵelement(3, "img", 3);
            i0.ɵɵelementStart(4, "span", 4)(5, "strong");
            i0.ɵɵtext(6, "GEU ERP");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(7, "small");
            i0.ɵɵtext(8, "Student Portal");
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(9, "nav", 5)(10, "ul");
            i0.ɵɵrepeaterCreate(11, StudentSidebarComponent_For_12_Template, 3, 1, "li", 6, _forTrack0);
            i0.ɵɵelementEnd()();
            i0.ɵɵconditionalCreate(13, StudentSidebarComponent_Conditional_13_Template, 2, 3, "span", 7);
            i0.ɵɵelementStart(14, "div", 8)(15, "a", 9);
            i0.ɵɵlistener("click", function StudentSidebarComponent_Template_a_click_15_listener() { return ctx.selectNavigation(); });
            i0.ɵɵelementStart(16, "span", 10);
            i0.ɵɵtext(17);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(18, "span", 11)(19, "strong");
            i0.ɵɵtext(20);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(21, "small");
            i0.ɵɵtext(22);
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(23, "div", 12)(24, "a", 13);
            i0.ɵɵlistener("click", function StudentSidebarComponent_Template_a_click_24_listener() { return ctx.selectNavigation(); });
            i0.ɵɵnamespaceSVG();
            i0.ɵɵelement(25, "svg", 14);
            i0.ɵɵnamespaceHTML();
            i0.ɵɵelementStart(26, "span");
            i0.ɵɵtext(27, "Profile");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(28, "a", 15);
            i0.ɵɵlistener("click", function StudentSidebarComponent_Template_a_click_28_listener() { return ctx.signOut(); });
            i0.ɵɵnamespaceSVG();
            i0.ɵɵelement(29, "svg", 16);
            i0.ɵɵnamespaceHTML();
            i0.ɵɵelementStart(30, "span");
            i0.ɵɵtext(31, "Sign out");
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(32, "span", 17);
            i0.ɵɵtext(33);
            i0.ɵɵelementEnd()()();
        } if (rf & 2) {
            let tmp_3_0;
            let tmp_5_0;
            let tmp_6_0;
            let tmp_7_0;
            i0.ɵɵclassProp("student-sidebar--expanded", ctx.layoutState.desktopSidebarExpanded());
            i0.ɵɵadvance(11);
            i0.ɵɵrepeater(ctx.navigation);
            i0.ɵɵadvance(2);
            i0.ɵɵconditional(!ctx.layoutState.desktopSidebarExpanded() && ctx.tooltipLabel() ? 13 : -1);
            i0.ɵɵadvance(2);
            i0.ɵɵattribute("aria-label", "Student profile for " + (((tmp_3_0 = ctx.session.profile()) == null ? null : tmp_3_0.name) || "student"));
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate(ctx.session.initials());
            i0.ɵɵadvance(3);
            i0.ɵɵtextInterpolate(((tmp_5_0 = ctx.session.profile()) == null ? null : tmp_5_0.name) || "Student");
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate1("Student ID ", ((tmp_6_0 = ctx.session.profile()) == null ? null : tmp_6_0.studentId) || "Unavailable");
            i0.ɵɵadvance(11);
            i0.ɵɵtextInterpolate(((tmp_7_0 = ctx.session.profile()) == null ? null : tmp_7_0.name) || "Student");
        } }, dependencies: [LucideDynamicIcon, LucideLogOut, LucideUserRound, RouterLink, RouterLinkActive], encapsulation: 2, changeDetection: 0 });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(StudentSidebarComponent, [{
        type: Component,
        args: [{ selector: 'erp-student-sidebar', imports: [LucideDynamicIcon, LucideLogOut, LucideUserRound, RouterLink, RouterLinkActive], changeDetection: ChangeDetectionStrategy.OnPush, template: "<aside\n  class=\"student-sidebar\"\n  [class.student-sidebar--expanded]=\"layoutState.desktopSidebarExpanded()\"\n  aria-label=\"Student portal navigation\"\n>\n  <div class=\"student-sidebar__decoration\" aria-hidden=\"true\"></div>\n\n  <a\n    class=\"student-sidebar__brand\"\n    routerLink=\"/student/dashboard\"\n    aria-label=\"GEU ERP student portal\"\n  >\n    <img\n      src=\"/assets/images/brand/graphic-era-mark.png\"\n      width=\"44\"\n      height=\"44\"\n      alt=\"Graphic Era University\"\n    />\n    <span class=\"student-sidebar__brand-copy\">\n      <strong>GEU ERP</strong>\n      <small>Student Portal</small>\n    </span>\n  </a>\n\n  <nav class=\"student-navigation\" aria-label=\"Primary student navigation\">\n    <ul>\n      @for (item of navigation; track item.id) {\n        <li\n          class=\"student-navigation__item-wrap\"\n          (pointerenter)=\"showTooltip(item.label, $event)\"\n          (pointerleave)=\"hideTooltip()\"\n        >\n          @if (item.enabled) {\n            <a\n              class=\"student-navigation__item\"\n              [routerLink]=\"item.route\"\n              routerLinkActive=\"student-navigation__item--active\"\n              [routerLinkActiveOptions]=\"{ exact: true }\"\n              ariaCurrentWhenActive=\"page\"\n              [attr.aria-label]=\"item.ariaLabel\"\n              (click)=\"selectNavigation()\"\n            >\n              <span class=\"student-navigation__icon\">\n                <svg [lucideIcon]=\"navigationIcon(item.icon)\" size=\"21\" aria-hidden=\"true\"></svg>\n              </span>\n              <span class=\"student-navigation__label\">{{ item.label }}</span>\n              @if (item.badge) {\n                <span class=\"student-navigation__badge\">{{ item.badge }}</span>\n              }\n            </a>\n          } @else {\n            <button\n              class=\"student-navigation__item student-navigation__item--disabled\"\n              type=\"button\"\n              disabled\n              [attr.aria-label]=\"item.label + ' \u2014 coming soon'\"\n            >\n              <span class=\"student-navigation__icon\">\n                <svg [lucideIcon]=\"navigationIcon(item.icon)\" size=\"21\" aria-hidden=\"true\"></svg>\n              </span>\n              <span class=\"student-navigation__label\">{{ item.label }}</span>\n              <span class=\"student-navigation__soon\">Soon</span>\n            </button>\n          }\n        </li>\n      }\n    </ul>\n  </nav>\n\n  @if (!layoutState.desktopSidebarExpanded() && tooltipLabel()) {\n    <span class=\"student-sidebar__floating-tooltip\" role=\"tooltip\" [style.top.px]=\"tooltipTop()\">{{\n      tooltipLabel()\n    }}</span>\n  }\n\n  <div class=\"student-sidebar__profile\">\n    <a\n      class=\"student-sidebar__profile-summary\"\n      routerLink=\"/student/profile\"\n      [attr.aria-label]=\"'Student profile for ' + (session.profile()?.name || 'student')\"\n      (click)=\"selectNavigation()\"\n    >\n      <span class=\"student-avatar\">{{ session.initials() }}</span>\n      <span class=\"student-sidebar__profile-copy\">\n        <strong>{{ session.profile()?.name || 'Student' }}</strong>\n        <small>Student ID {{ session.profile()?.studentId || 'Unavailable' }}</small>\n      </span>\n    </a>\n    <div class=\"student-sidebar__profile-actions\">\n      <a routerLink=\"/student/profile\" aria-label=\"Open my profile\" (click)=\"selectNavigation()\">\n        <svg lucideUserRound size=\"17\" aria-hidden=\"true\"></svg>\n        <span>Profile</span>\n      </a>\n      <a\n        routerLink=\"/student/login\"\n        aria-label=\"Sign out of the student portal\"\n        (click)=\"signOut()\"\n      >\n        <svg lucideLogOut size=\"17\" aria-hidden=\"true\"></svg>\n        <span>Sign out</span>\n      </a>\n    </div>\n    <span class=\"student-sidebar__profile-tooltip\" role=\"tooltip\">{{\n      session.profile()?.name || 'Student'\n    }}</span>\n  </div>\n</aside>\n" }]
    }], null, { expand: [{
            type: HostListener,
            args: ['pointerenter']
        }], scheduleCollapse: [{
            type: HostListener,
            args: ['pointerleave']
        }], expandForKeyboard: [{
            type: HostListener,
            args: ['focusin']
        }], collapseAfterFocus: [{
            type: HostListener,
            args: ['focusout', ['$event']]
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(StudentSidebarComponent, { className: "StudentSidebarComponent", filePath: "frontend/src/app/features/student/layout/student-sidebar/student-sidebar.component.ts", lineNumber: 17 }); })();
