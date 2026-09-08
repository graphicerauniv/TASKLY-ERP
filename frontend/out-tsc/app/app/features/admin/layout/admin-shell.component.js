import { CdkTrapFocus } from '@angular/cdk/a11y';
import { DOCUMENT, NgTemplateOutlet } from '@angular/common';
import { ChangeDetectionStrategy, Component, HostListener, ViewChild, computed, effect, inject, signal, } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { ActivatedRoute, NavigationEnd, Router, RouterLink, RouterOutlet } from '@angular/router';
import { LucideChevronDown, LucideChevronLeft, LucideChevronRight, LucideBell, LucideCircleHelp, LucideCircleCheck, LucideDynamicIcon, LucideLifeBuoy, LucideLogOut, LucideMenu, LucideSearch, LucideX, } from '@lucide/angular';
import { filter } from 'rxjs';
import { AuthService } from '../../../core/auth.service';
import { ApiService } from '../../../core/api.service';
import { ADMIN_NAVIGATION, adminNavigationIcon, matchesAdminRoute, resolveAdminPageContext, } from './navigation/admin-navigation.config';
import * as i0 from "@angular/core";
const _c0 = ["mobileMenuButton"];
const _c1 = ["mobileCloseButton"];
const _c2 = ["pageTitle"];
const _c3 = () => ({ mobile: false });
const _c4 = () => ({ mobile: true });
const _c5 = () => [];
const _forTrack0 = ($index, $item) => $item.id;
function AdminShellComponent_For_13_Conditional_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(0, "svg", 14);
} }
function AdminShellComponent_For_13_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "li");
    i0.ɵɵconditionalCreate(1, AdminShellComponent_For_13_Conditional_1_Template, 1, 0, ":svg:svg", 14);
    i0.ɵɵelementStart(2, "span");
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const breadcrumb_r1 = ctx.$implicit;
    const ɵ$index_22_r2 = ctx.$index;
    i0.ɵɵadvance();
    i0.ɵɵconditional(!(ɵ$index_22_r2 === 0) ? 1 : -1);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(breadcrumb_r1);
} }
function AdminShellComponent_Conditional_19_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 15)(1, "label", 19);
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(2, "svg", 20);
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelement(3, "input", 21);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "button", 22);
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(5, "svg", 23);
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(6, "small");
    i0.ɵɵtext(7, "12");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(8, "button", 24);
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(9, "svg", 25);
    i0.ɵɵelementEnd();
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(10, "span", 26);
    i0.ɵɵtext(11);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(12, "strong", 27);
    i0.ɵɵtext(13);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(14, "button", 28);
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(15, "svg", 29);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    let tmp_6_0;
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("placeholder", ctx_r2.workspaceSearchPlaceholder());
    i0.ɵɵadvance(8);
    i0.ɵɵtextInterpolate(ctx_r2.adminInitials());
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(((tmp_6_0 = ctx_r2.auth.admin()) == null ? null : tmp_6_0.name) || "Super Admin");
} }
function AdminShellComponent_Conditional_20_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 16);
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(1, "svg", 30);
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(2, "span");
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelement(4, "span", 31);
    i0.ɵɵelementStart(5, "button", 32);
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(6, "svg", 33);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(ctx_r2.headerSaveStatus());
} }
function AdminShellComponent_Conditional_23_Template(rf, ctx) { if (rf & 1) {
    const _r4 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 34);
    i0.ɵɵlistener("click", function AdminShellComponent_Conditional_23_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r4); const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.closeDesktopFlyout()); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵclassProp("is-closing", ctx_r2.flyoutClosing());
} }
function AdminShellComponent_Conditional_24_Template(rf, ctx) { if (rf & 1) {
    const _r5 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 35);
    i0.ɵɵlistener("click", function AdminShellComponent_Conditional_24_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r5); const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.closeMobileNavigation()); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(1, "aside", 36);
    i0.ɵɵelementContainer(2, 7);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    i0.ɵɵnextContext();
    const navigationContent_r6 = i0.ɵɵreference(26);
    i0.ɵɵadvance();
    i0.ɵɵproperty("cdkTrapFocusAutoCapture", true);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngTemplateOutlet", navigationContent_r6)("ngTemplateOutletContext", i0.ɵɵpureFunction0(3, _c4));
} }
function AdminShellComponent_ng_template_25_Conditional_8_Template(rf, ctx) { if (rf & 1) {
    const _r8 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 54, 3);
    i0.ɵɵlistener("click", function AdminShellComponent_ng_template_25_Conditional_8_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r8); const ctx_r2 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r2.closeMobileNavigation()); });
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(2, "svg", 55);
    i0.ɵɵelementEnd();
} }
function AdminShellComponent_ng_template_25_Conditional_9_Conditional_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(0, "svg", 57);
} }
function AdminShellComponent_ng_template_25_Conditional_9_Conditional_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(0, "svg", 58);
} }
function AdminShellComponent_ng_template_25_Conditional_9_Template(rf, ctx) { if (rf & 1) {
    const _r9 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 56);
    i0.ɵɵlistener("click", function AdminShellComponent_ng_template_25_Conditional_9_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r9); const ctx_r2 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r2.toggleDesktopSidebar()); });
    i0.ɵɵconditionalCreate(1, AdminShellComponent_ng_template_25_Conditional_9_Conditional_1_Template, 1, 0, ":svg:svg", 57)(2, AdminShellComponent_ng_template_25_Conditional_9_Conditional_2_Template, 1, 0, ":svg:svg", 58);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext(2);
    i0.ɵɵattribute("aria-label", ctx_r2.desktopCollapsed() ? "Expand admin navigation" : "Collapse admin navigation")("aria-expanded", !ctx_r2.desktopCollapsed());
    i0.ɵɵadvance();
    i0.ɵɵconditional(ctx_r2.desktopCollapsed() ? 1 : 2);
} }
function AdminShellComponent_ng_template_25_For_13_Conditional_1_Conditional_6_For_26_Conditional_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "li", 77)(1, "span");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelement(3, "i", 79);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ɵ$index_188_r14 = i0.ɵɵnextContext().$index;
    const section_r11 = i0.ɵɵnextContext(3).$implicit;
    const ctx_r2 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r2.navigationGroupLabel(section_r11.children || i0.ɵɵpureFunction0(1, _c5), ɵ$index_188_r14));
} }
function AdminShellComponent_ng_template_25_For_13_Conditional_1_Conditional_6_For_26_Conditional_2_Conditional_8_For_2_Template(rf, ctx) { if (rf & 1) {
    const _r17 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "li")(1, "a", 85);
    i0.ɵɵlistener("click", function AdminShellComponent_ng_template_25_For_13_Conditional_1_Conditional_6_For_26_Conditional_2_Conditional_8_For_2_Template_a_click_1_listener($event) { const link_r18 = i0.ɵɵrestoreView(_r17).$implicit; const mobile_r12 = i0.ɵɵnextContext(7).mobile; const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.selectNavigation($event, link_r18.route, mobile_r12)); });
    i0.ɵɵelementStart(2, "span", 61);
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(3, "svg", 86);
    i0.ɵɵelementEnd();
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(4, "span", 63);
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const link_r18 = ctx.$implicit;
    const ctx_r2 = i0.ɵɵnextContext(8);
    i0.ɵɵadvance();
    i0.ɵɵclassProp("is-active", ctx_r2.matchesAdminRoute(link_r18.activeWhen, ctx_r2.currentUrl()));
    i0.ɵɵproperty("routerLink", link_r18.route);
    i0.ɵɵattribute("aria-current", ctx_r2.matchesAdminRoute(link_r18.activeWhen, ctx_r2.currentUrl()) ? "page" : null);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("lucideIcon", ctx_r2.iconFor(link_r18.icon));
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(link_r18.label);
} }
function AdminShellComponent_ng_template_25_For_13_Conditional_1_Conditional_6_For_26_Conditional_2_Conditional_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "ul", 84);
    i0.ɵɵrepeaterCreate(1, AdminShellComponent_ng_template_25_For_13_Conditional_1_Conditional_6_For_26_Conditional_2_Conditional_8_For_2_Template, 6, 6, "li", null, _forTrack0);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const entry_r16 = i0.ɵɵnextContext(2).$implicit;
    const mobile_r12 = i0.ɵɵnextContext(4).mobile;
    i0.ɵɵproperty("id", (mobile_r12 ? "mobile-" : "desktop-") + entry_r16.id + "-navigation");
    i0.ɵɵadvance();
    i0.ɵɵrepeater(entry_r16.children || i0.ɵɵpureFunction0(1, _c5));
} }
function AdminShellComponent_ng_template_25_For_13_Conditional_1_Conditional_6_For_26_Conditional_2_Template(rf, ctx) { if (rf & 1) {
    const _r15 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 80);
    i0.ɵɵlistener("click", function AdminShellComponent_ng_template_25_For_13_Conditional_1_Conditional_6_For_26_Conditional_2_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r15); const entry_r16 = i0.ɵɵnextContext().$implicit; const ctx_r2 = i0.ɵɵnextContext(5); return i0.ɵɵresetView(ctx_r2.toggleSubgroup(entry_r16)); });
    i0.ɵɵelementStart(1, "span", 61);
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(2, "svg", 81);
    i0.ɵɵelementEnd();
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(3, "span", 63);
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "small", 82);
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd();
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(7, "svg", 83);
    i0.ɵɵelementEnd();
    i0.ɵɵconditionalCreate(8, AdminShellComponent_ng_template_25_For_13_Conditional_1_Conditional_6_For_26_Conditional_2_Conditional_8_Template, 3, 2, "ul", 84);
} if (rf & 2) {
    const entry_r16 = i0.ɵɵnextContext().$implicit;
    const mobile_r12 = i0.ɵɵnextContext(4).mobile;
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵclassProp("is-active", ctx_r2.isEntryActive(entry_r16));
    i0.ɵɵattribute("aria-controls", (mobile_r12 ? "mobile-" : "desktop-") + entry_r16.id + "-navigation")("aria-expanded", ctx_r2.isSubgroupExpanded(entry_r16));
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("lucideIcon", ctx_r2.iconFor(entry_r16.icon));
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(entry_r16.label);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r2.entryDescription(entry_r16));
    i0.ɵɵadvance();
    i0.ɵɵclassProp("is-open", ctx_r2.isSubgroupExpanded(entry_r16));
    i0.ɵɵadvance();
    i0.ɵɵconditional(ctx_r2.isSubgroupExpanded(entry_r16) ? 8 : -1);
} }
function AdminShellComponent_ng_template_25_For_13_Conditional_1_Conditional_6_For_26_Conditional_3_Template(rf, ctx) { if (rf & 1) {
    const _r19 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "a", 87);
    i0.ɵɵlistener("click", function AdminShellComponent_ng_template_25_For_13_Conditional_1_Conditional_6_For_26_Conditional_3_Template_a_click_0_listener($event) { i0.ɵɵrestoreView(_r19); const entry_r16 = i0.ɵɵnextContext().$implicit; const mobile_r12 = i0.ɵɵnextContext(4).mobile; const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.selectNavigation($event, entry_r16.route || "/admin/dashboard", mobile_r12)); });
    i0.ɵɵelementStart(1, "span", 61);
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(2, "svg", 81);
    i0.ɵɵelementEnd();
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(3, "span", 63);
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "small", 82);
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd();
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(7, "svg", 88);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const entry_r16 = i0.ɵɵnextContext().$implicit;
    const ctx_r2 = i0.ɵɵnextContext(5);
    i0.ɵɵclassProp("is-active", ctx_r2.isEntryActive(entry_r16));
    i0.ɵɵproperty("routerLink", entry_r16.route || "/admin/dashboard");
    i0.ɵɵattribute("aria-current", ctx_r2.isEntryActive(entry_r16) ? "page" : null);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("lucideIcon", ctx_r2.iconFor(entry_r16.icon));
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(entry_r16.label);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r2.entryDescription(entry_r16));
} }
function AdminShellComponent_ng_template_25_For_13_Conditional_1_Conditional_6_For_26_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵconditionalCreate(0, AdminShellComponent_ng_template_25_For_13_Conditional_1_Conditional_6_For_26_Conditional_0_Template, 4, 2, "li", 77);
    i0.ɵɵelementStart(1, "li");
    i0.ɵɵconditionalCreate(2, AdminShellComponent_ng_template_25_For_13_Conditional_1_Conditional_6_For_26_Conditional_2_Template, 9, 10)(3, AdminShellComponent_ng_template_25_For_13_Conditional_1_Conditional_6_For_26_Conditional_3_Template, 8, 7, "a", 78);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const entry_r16 = ctx.$implicit;
    const ɵ$index_188_r14 = ctx.$index;
    const section_r11 = i0.ɵɵnextContext(3).$implicit;
    const ctx_r2 = i0.ɵɵnextContext(2);
    i0.ɵɵconditional(ctx_r2.showNavigationGroup(section_r11.children || i0.ɵɵpureFunction0(2, _c5), ɵ$index_188_r14) ? 0 : -1);
    i0.ɵɵadvance(2);
    i0.ɵɵconditional((entry_r16.children == null ? null : entry_r16.children.length) ? 2 : 3);
} }
function AdminShellComponent_ng_template_25_For_13_Conditional_1_Conditional_6_Conditional_31_Template(rf, ctx) { if (rf & 1) {
    const _r20 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "a", 89);
    i0.ɵɵlistener("click", function AdminShellComponent_ng_template_25_For_13_Conditional_1_Conditional_6_Conditional_31_Template_a_click_0_listener($event) { const firstRoute_r21 = i0.ɵɵrestoreView(_r20); const mobile_r12 = i0.ɵɵnextContext(4).mobile; const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.selectNavigation($event, firstRoute_r21, mobile_r12)); });
    i0.ɵɵtext(1, " Open first ");
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(2, "svg", 90);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    i0.ɵɵproperty("routerLink", ctx);
} }
function AdminShellComponent_ng_template_25_For_13_Conditional_1_Conditional_6_Template(rf, ctx) { if (rf & 1) {
    const _r13 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "ul", 66)(1, "li", 67)(2, "div")(3, "small");
    i0.ɵɵtext(4, "Module navigation");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "strong");
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(7, "button", 68);
    i0.ɵɵlistener("click", function AdminShellComponent_ng_template_25_For_13_Conditional_1_Conditional_6_Template_button_click_7_listener() { i0.ɵɵrestoreView(_r13); const ctx_r2 = i0.ɵɵnextContext(4); return i0.ɵɵresetView(ctx_r2.closeDesktopFlyout()); });
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(8, "svg", 69);
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(9, "small");
    i0.ɵɵtext(10, "Esc");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(11, "li", 70)(12, "span", 71);
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(13, "svg", 72);
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(14, "small");
    i0.ɵɵtext(15, "\u2713");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(16, "span", 73)(17, "strong");
    i0.ɵɵtext(18);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(19, "span");
    i0.ɵɵtext(20);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(21, "small");
    i0.ɵɵtext(22);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(23, "span", 74);
    i0.ɵɵtext(24, "\u2726");
    i0.ɵɵelementEnd()();
    i0.ɵɵrepeaterCreate(25, AdminShellComponent_ng_template_25_For_13_Conditional_1_Conditional_6_For_26_Template, 4, 3, null, null, _forTrack0);
    i0.ɵɵelementStart(27, "li", 75);
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(28, "svg", 25);
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(29, "strong");
    i0.ɵɵtext(30);
    i0.ɵɵelementEnd();
    i0.ɵɵconditionalCreate(31, AdminShellComponent_ng_template_25_For_13_Conditional_1_Conditional_6_Conditional_31_Template, 3, 1, "a", 76);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    let tmp_29_0;
    const section_r11 = i0.ɵɵnextContext(2).$implicit;
    const mobile_r12 = i0.ɵɵnextContext().mobile;
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵclassProp("is-closing", !mobile_r12 && ctx_r2.closingSectionId() === section_r11.id);
    i0.ɵɵproperty("id", (mobile_r12 ? "mobile-" : "desktop-") + section_r11.id + "-navigation");
    i0.ɵɵattribute("role", !mobile_r12 ? "dialog" : null)("aria-modal", !mobile_r12 ? "true" : null)("aria-label", section_r11.label + " module navigation");
    i0.ɵɵadvance(6);
    i0.ɵɵtextInterpolate(section_r11.label);
    i0.ɵɵadvance(7);
    i0.ɵɵproperty("lucideIcon", ctx_r2.iconFor(section_r11.icon));
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(ctx_r2.moduleTitle(section_r11));
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r2.sectionDescription(section_r11));
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1("", (section_r11.children == null ? null : section_r11.children.length) || 0, " tools");
    i0.ɵɵadvance(3);
    i0.ɵɵrepeater(section_r11.children || i0.ɵɵpureFunction0(13, _c5));
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate1("", section_r11.label, " tools");
    i0.ɵɵadvance();
    i0.ɵɵconditional((tmp_29_0 = section_r11.children == null ? null : section_r11.children[0] == null ? null : section_r11.children[0].route) ? 31 : -1, tmp_29_0);
} }
function AdminShellComponent_ng_template_25_For_13_Conditional_1_Template(rf, ctx) { if (rf & 1) {
    const _r10 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 60);
    i0.ɵɵlistener("click", function AdminShellComponent_ng_template_25_For_13_Conditional_1_Template_button_click_0_listener($event) { i0.ɵɵrestoreView(_r10); const section_r11 = i0.ɵɵnextContext().$implicit; const mobile_r12 = i0.ɵɵnextContext().mobile; const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.toggleSection(section_r11, $event, mobile_r12)); });
    i0.ɵɵelementStart(1, "span", 61);
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(2, "svg", 62);
    i0.ɵɵelementEnd();
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(3, "span", 63);
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(5, "svg", 64);
    i0.ɵɵelementEnd();
    i0.ɵɵconditionalCreate(6, AdminShellComponent_ng_template_25_For_13_Conditional_1_Conditional_6_Template, 32, 14, "ul", 65);
} if (rf & 2) {
    const section_r11 = i0.ɵɵnextContext().$implicit;
    const mobile_r12 = i0.ɵɵnextContext().mobile;
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵclassProp("is-active", ctx_r2.isSectionActive(section_r11));
    i0.ɵɵattribute("title", ctx_r2.desktopCollapsed() && !mobile_r12 ? section_r11.label : null)("aria-controls", (mobile_r12 ? "mobile-" : "desktop-") + section_r11.id + "-navigation")("aria-expanded", ctx_r2.isSectionExpanded(section_r11));
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("lucideIcon", ctx_r2.iconFor(section_r11.icon));
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(section_r11.label);
    i0.ɵɵadvance();
    i0.ɵɵclassProp("is-open", ctx_r2.isSectionExpanded(section_r11));
    i0.ɵɵadvance();
    i0.ɵɵconditional(ctx_r2.isSectionVisible(section_r11, mobile_r12) ? 6 : -1);
} }
function AdminShellComponent_ng_template_25_For_13_Conditional_2_Template(rf, ctx) { if (rf & 1) {
    const _r22 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "a", 91);
    i0.ɵɵlistener("click", function AdminShellComponent_ng_template_25_For_13_Conditional_2_Template_a_click_0_listener() { i0.ɵɵrestoreView(_r22); const mobile_r12 = i0.ɵɵnextContext(2).mobile; const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(mobile_r12 ? ctx_r2.closeMobileNavigation(false) : null); });
    i0.ɵɵelementStart(1, "span", 61);
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(2, "svg", 62);
    i0.ɵɵelementEnd();
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(3, "span", 63);
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const section_r11 = i0.ɵɵnextContext().$implicit;
    const mobile_r12 = i0.ɵɵnextContext().mobile;
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵclassProp("is-active", ctx_r2.isSectionActive(section_r11));
    i0.ɵɵproperty("routerLink", section_r11.route || "/admin/dashboard");
    i0.ɵɵattribute("title", ctx_r2.desktopCollapsed() && !mobile_r12 ? section_r11.label : null)("aria-current", ctx_r2.isSectionActive(section_r11) ? "page" : null);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("lucideIcon", ctx_r2.iconFor(section_r11.icon));
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(section_r11.label);
} }
function AdminShellComponent_ng_template_25_For_13_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "li", 45);
    i0.ɵɵconditionalCreate(1, AdminShellComponent_ng_template_25_For_13_Conditional_1_Template, 7, 10)(2, AdminShellComponent_ng_template_25_For_13_Conditional_2_Template, 5, 7, "a", 59);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const section_r11 = ctx.$implicit;
    i0.ɵɵadvance();
    i0.ɵɵconditional((section_r11.children == null ? null : section_r11.children.length) ? 1 : 2);
} }
function AdminShellComponent_ng_template_25_Template(rf, ctx) { if (rf & 1) {
    const _r7 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 37)(1, "span", 38);
    i0.ɵɵelement(2, "img", 39);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "span", 40)(4, "strong");
    i0.ɵɵtext(5, "GEU ERP");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "small");
    i0.ɵɵtext(7, "Admin console");
    i0.ɵɵelementEnd()();
    i0.ɵɵconditionalCreate(8, AdminShellComponent_ng_template_25_Conditional_8_Template, 3, 0, "button", 41)(9, AdminShellComponent_ng_template_25_Conditional_9_Template, 3, 3, "button", 42);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(10, "nav", 43)(11, "ul", 44);
    i0.ɵɵrepeaterCreate(12, AdminShellComponent_ng_template_25_For_13_Template, 3, 1, "li", 45, _forTrack0);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(14, "footer", 46)(15, "a", 47);
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(16, "svg", 48);
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(17, "span");
    i0.ɵɵtext(18, "Support");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(19, "div", 49)(20, "span", 50);
    i0.ɵɵtext(21);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(22, "span", 51)(23, "strong");
    i0.ɵɵtext(24);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(25, "small");
    i0.ɵɵtext(26);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(27, "button", 52);
    i0.ɵɵlistener("click", function AdminShellComponent_ng_template_25_Template_button_click_27_listener() { i0.ɵɵrestoreView(_r7); const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.logout()); });
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(28, "svg", 53);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    let tmp_9_0;
    let tmp_10_0;
    const mobile_r12 = ctx.mobile;
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance(8);
    i0.ɵɵconditional(mobile_r12 ? 8 : 9);
    i0.ɵɵadvance(2);
    i0.ɵɵattribute("aria-label", mobile_r12 ? "Mobile admin navigation" : "Primary admin navigation");
    i0.ɵɵadvance(2);
    i0.ɵɵrepeater(ctx_r2.navigation());
    i0.ɵɵadvance(9);
    i0.ɵɵtextInterpolate(ctx_r2.adminInitials());
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(((tmp_9_0 = ctx_r2.auth.admin()) == null ? null : tmp_9_0.name) || "Administrator");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(((tmp_10_0 = ctx_r2.auth.admin()) == null ? null : tmp_10_0.email) || "Admin account");
} }
export class AdminShellComponent {
    router = inject(Router);
    activatedRoute = inject(ActivatedRoute);
    document = inject(DOCUMENT);
    api = inject(ApiService);
    auth = inject(AuthService);
    navigation = signal(ADMIN_NAVIGATION, ...(ngDevMode ? [{ debugName: "navigation" }] : /* istanbul ignore next */ []));
    matchesAdminRoute = matchesAdminRoute;
    currentUrl = signal(this.router.url, ...(ngDevMode ? [{ debugName: "currentUrl" }] : /* istanbul ignore next */ []));
    // Desktop navigation starts compact; hovering/focusing the rail reveals its labels.
    desktopCollapsed = signal(true, ...(ngDevMode ? [{ debugName: "desktopCollapsed" }] : /* istanbul ignore next */ []));
    mobileOpen = signal(false, ...(ngDevMode ? [{ debugName: "mobileOpen" }] : /* istanbul ignore next */ []));
    expandedSectionId = signal(null, ...(ngDevMode ? [{ debugName: "expandedSectionId" }] : /* istanbul ignore next */ []));
    closingSectionId = signal(null, ...(ngDevMode ? [{ debugName: "closingSectionId" }] : /* istanbul ignore next */ []));
    flyoutClosing = computed(() => this.closingSectionId() !== null, ...(ngDevMode ? [{ debugName: "flyoutClosing" }] : /* istanbul ignore next */ []));
    expandedSubgroupId = signal(null, ...(ngDevMode ? [{ debugName: "expandedSubgroupId" }] : /* istanbul ignore next */ []));
    pageContext = signal(resolveAdminPageContext(this.router.url), ...(ngDevMode ? [{ debugName: "pageContext" }] : /* istanbul ignore next */ []));
    desktopModuleOpen = computed(() => this.expandedSectionId() !== null || this.closingSectionId() !== null, ...(ngDevMode ? [{ debugName: "desktopModuleOpen" }] : /* istanbul ignore next */ []));
    isScholarshipWorkspace = computed(() => /^\/admin\/admissions\/[^/]+\/scholarships\/?(?:\?|$)/.test(this.currentUrl()), ...(ngDevMode ? [{ debugName: "isScholarshipWorkspace" }] : /* istanbul ignore next */ []));
    showWorkspaceHeader = computed(() => this.isScholarshipWorkspace() || this.currentUrl().startsWith('/admin/academics'), ...(ngDevMode ? [{ debugName: "showWorkspaceHeader" }] : /* istanbul ignore next */ []));
    workspaceSearchPlaceholder = computed(() => this.currentUrl().startsWith('/admin/academics')
        ? 'Search students, admissions, academics…'
        : 'Search by name, ID, programme…', ...(ngDevMode ? [{ debugName: "workspaceSearchPlaceholder" }] : /* istanbul ignore next */ []));
    headerSaveStatus = computed(() => /\/admission\/student|\/admissions\/[^/]+\/edit/.test(this.currentUrl())
        ? 'Draft saved just now'
        : 'Saved just now', ...(ngDevMode ? [{ debugName: "headerSaveStatus" }] : /* istanbul ignore next */ []));
    adminInitials = computed(() => {
        const name = this.auth.admin()?.name?.trim() || 'Administrator';
        return name
            .split(/\s+/)
            .slice(0, 2)
            .map((part) => part[0]?.toUpperCase())
            .join('');
    }, ...(ngDevMode ? [{ debugName: "adminInitials" }] : /* istanbul ignore next */ []));
    mobileMenuButton;
    mobileCloseButton;
    pageTitle;
    desktopFlyoutAnchor = null;
    flyoutCloseTimer = null;
    constructor() {
        this.syncNavigation(this.router.url);
        this.loadFormNavigation();
        this.router.events
            .pipe(filter((event) => event instanceof NavigationEnd), takeUntilDestroyed())
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
    reloadFormNavigation() {
        this.loadFormNavigation();
    }
    iconFor = adminNavigationIcon;
    toggleDesktopSidebar() {
        this.desktopCollapsed.update((collapsed) => !collapsed);
    }
    openMobileNavigation() {
        this.mobileOpen.set(true);
        window.setTimeout(() => this.mobileCloseButton?.nativeElement.focus(), 0);
    }
    closeMobileNavigation(restoreFocus = true) {
        if (!this.mobileOpen())
            return;
        this.mobileOpen.set(false);
        if (restoreFocus) {
            window.setTimeout(() => this.mobileMenuButton?.nativeElement.focus(), 0);
        }
    }
    toggleSection(section, event, mobile = false) {
        if (!section.children?.length)
            return;
        if (mobile) {
            const opening = this.expandedSectionId() !== section.id;
            this.expandedSectionId.set(opening ? section.id : null);
            if (!opening)
                this.expandedSubgroupId.set(null);
            return;
        }
        if (this.expandedSectionId() === section.id) {
            this.closeDesktopFlyout();
            return;
        }
        this.cancelFlyoutClose();
        const opening = this.expandedSectionId() !== section.id;
        this.expandedSectionId.set(opening ? section.id : null);
        if (!opening)
            this.expandedSubgroupId.set(null);
        if (opening) {
            this.desktopFlyoutAnchor = event?.currentTarget;
        }
        else {
            this.desktopFlyoutAnchor = null;
        }
    }
    closeDesktopFlyout() {
        const sectionId = this.expandedSectionId();
        if (!sectionId || this.flyoutClosing())
            return;
        this.closingSectionId.set(sectionId);
        this.expandedSectionId.set(null);
        this.expandedSubgroupId.set(null);
        const anchor = this.desktopFlyoutAnchor;
        this.flyoutCloseTimer = window.setTimeout(() => {
            this.closingSectionId.set(null);
            anchor?.focus();
            this.desktopFlyoutAnchor = null;
            this.flyoutCloseTimer = null;
        }, 220);
    }
    toggleSubgroup(entry) {
        this.expandedSubgroupId.update((current) => (current === entry.id ? null : entry.id));
    }
    isSectionExpanded(section) {
        return this.expandedSectionId() === section.id;
    }
    isSectionVisible(section, mobile) {
        return (this.expandedSectionId() === section.id || (!mobile && this.closingSectionId() === section.id));
    }
    moduleTitle(section) {
        return section.id === 'academics' ? 'Academic workspace' : `${section.label} workspace`;
    }
    sectionDescription(section) {
        return section.description || `Access and manage ${section.label.toLowerCase()} tools.`;
    }
    entryDescription(entry) {
        if (entry.description)
            return entry.description;
        if (entry.children?.length)
            return `Manage ${entry.label.toLowerCase()} options`;
        return `Open ${entry.label.toLowerCase()}`;
    }
    isSubgroupExpanded(entry) {
        return this.expandedSubgroupId() === entry.id;
    }
    isSectionActive(section) {
        return matchesAdminRoute(section.activeWhen, this.currentUrl());
    }
    isEntryActive(entry) {
        if (matchesAdminRoute(entry.activeWhen, this.currentUrl()))
            return true;
        return (entry.children?.some((link) => matchesAdminRoute(link.activeWhen, this.currentUrl())) ?? false);
    }
    showNavigationGroup(entries, index) {
        const group = entries[index]?.group || 'Tools';
        const previousGroup = index > 0 ? entries[index - 1]?.group || 'Tools' : '';
        return index === 0 || previousGroup !== group;
    }
    navigationGroupLabel(entries, index) {
        return entries[index]?.group || 'Tools';
    }
    selectNavigation(event, route, mobile) {
        if (mobile) {
            this.closeMobileNavigation(false);
            return;
        }
        if (!this.expandedSectionId())
            return;
        event.preventDefault();
        this.closeDesktopFlyout();
        window.setTimeout(() => void this.router.navigateByUrl(route), 220);
    }
    logout() {
        this.closeMobileNavigation(false);
        this.auth.clear();
        void this.router.navigate(['/login']);
    }
    onEscape() {
        if (this.mobileOpen()) {
            this.closeMobileNavigation();
            return;
        }
        this.closeDesktopFlyout();
    }
    onDocumentClick(event) {
        const target = event.target;
        if (this.expandedSectionId() && !target?.closest('.admin-sidebar--desktop')) {
            this.closeDesktopFlyout();
        }
    }
    onWindowResize() {
        const width = window.innerWidth;
        if (width > 767)
            this.closeMobileNavigation(false);
        if (width <= 1080 && width > 767)
            this.desktopCollapsed.set(true);
    }
    syncNavigation(url) {
        this.cancelFlyoutClose();
        this.currentUrl.set(url);
        this.expandedSectionId.set(null);
        this.closingSectionId.set(null);
        this.expandedSubgroupId.set(null);
        this.desktopFlyoutAnchor = null;
        this.pageContext.set(resolveAdminPageContext(url, this.deepestRouteTitle()));
    }
    cancelFlyoutClose() {
        if (this.flyoutCloseTimer !== null)
            window.clearTimeout(this.flyoutCloseTimer);
        this.flyoutCloseTimer = null;
        this.closingSectionId.set(null);
    }
    loadFormNavigation() {
        this.api.forms().subscribe({
            next: ({ items }) => this.navigation.set(this.navigationForForms(items)),
        });
    }
    navigationForForms(forms) {
        const published = forms.filter((form) => form.status === 'published' && form.isActive && form._id);
        const navigation = ADMIN_NAVIGATION.map((section) => ({
            ...section,
            children: section.children ? [...section.children] : undefined,
        }));
        const admissionsIndex = navigation.findIndex((section) => section.id === 'admissions');
        if (admissionsIndex >= 0) {
            const admissions = navigation[admissionsIndex];
            const admissionForms = published.filter((form) => (form.purpose || 'admission') === 'admission');
            navigation[admissionsIndex] = {
                ...admissions,
                children: [
                    ...(admissions.children || []),
                    ...admissionForms.map((form) => this.formNavigationEntry(form, 'admission')),
                ],
            };
        }
        const destinationGroups = new Map();
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
            navigation.splice(Math.max(1, navigation.findIndex((section) => section.id === 'academics')), 0, {
                id: `forms-${sectionId}`,
                label: group.label,
                icon: 'records',
                activeWhen: group.forms.map((form) => new RegExp(`^/admin/forms/${form._id}/fill/?$`)),
                children: group.forms.map((form) => this.formNavigationEntry(form, form.purpose || 'general')),
            });
        }
        const databaseSections = new Map();
        for (const form of forms.filter((item) => item.purpose !== 'admission' && item.destination?.databaseSectionId)) {
            const fallback = this.purposeSection(form.purpose);
            databaseSections.set(form.destination?.databaseSectionId || fallback.id, form.destination?.databaseSectionName || fallback.label);
        }
        navigation.splice(Math.max(1, navigation.findIndex((section) => section.id === 'academics')), 0, {
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
                    icon: 'records',
                    activeWhen: [new RegExp(`^/admin/database/${sectionId}(?:/|$)`)],
                })),
            ],
        });
        return navigation;
    }
    formNavigationEntry(form, purpose) {
        const route = purpose === 'admission'
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
    purposeSection(purpose) {
        return {
            faculty: { id: 'faculty', label: 'Faculty' },
            employee: { id: 'employees', label: 'Employees' },
            general: { id: 'other-applications', label: 'Other Applications' },
            admission: { id: 'admissions', label: 'Admissions' },
        }[purpose || 'general'];
    }
    deepestRouteTitle() {
        let route = this.activatedRoute;
        let title = '';
        while (route) {
            const snapshot = route.snapshot;
            if (!snapshot) {
                route = route.firstChild;
                continue;
            }
            const candidate = snapshot.title ?? snapshot.data?.['title'];
            if (typeof candidate === 'string' && candidate.trim())
                title = candidate.trim();
            route = route.firstChild ?? null;
        }
        return title;
    }
    static ɵfac = function AdminShellComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || AdminShellComponent)(); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: AdminShellComponent, selectors: [["erp-admin-shell"]], viewQuery: function AdminShellComponent_Query(rf, ctx) { if (rf & 1) {
            i0.ɵɵviewQuery(_c0, 5)(_c1, 5)(_c2, 5);
        } if (rf & 2) {
            let _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.mobileMenuButton = _t.first);
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.mobileCloseButton = _t.first);
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.pageTitle = _t.first);
        } }, hostBindings: function AdminShellComponent_HostBindings(rf, ctx) { if (rf & 1) {
            i0.ɵɵlistener("tasklyFormsChanged", function AdminShellComponent_tasklyFormsChanged_HostBindingHandler() { return ctx.reloadFormNavigation(); }, i0.ɵɵresolveWindow)("keydown.escape", function AdminShellComponent_keydown_escape_HostBindingHandler() { return ctx.onEscape(); }, i0.ɵɵresolveDocument)("click", function AdminShellComponent_click_HostBindingHandler($event) { return ctx.onDocumentClick($event); }, i0.ɵɵresolveDocument)("resize", function AdminShellComponent_resize_HostBindingHandler() { return ctx.onWindowResize(); }, i0.ɵɵresolveWindow);
        } }, decls: 27, vars: 10, consts: [["mobileMenuButton", ""], ["pageTitle", ""], ["navigationContent", ""], ["mobileCloseButton", ""], ["href", "#admin-main", 1, "admin-skip-link"], [1, "admin-shell"], ["aria-label", "Admin navigation", 1, "admin-sidebar", "admin-sidebar--desktop"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "admin-header"], ["type", "button", "aria-label", "Open admin navigation", "aria-controls", "admin-mobile-navigation", 1, "admin-icon-button", "admin-header__menu", 3, "click"], ["lucideMenu", "", "size", "20", "aria-hidden", "true"], [1, "admin-header__context"], ["aria-label", "Breadcrumb", 1, "admin-breadcrumbs"], ["tabindex", "-1", "aria-current", "page", 1, "admin-breadcrumbs__current"], ["lucideChevronRight", "", "size", "12", "aria-hidden", "true"], [1, "admin-header__tools"], ["aria-live", "polite", 1, "admin-header__status"], ["id", "admin-main", "tabindex", "-1", 1, "content", "admin-main"], ["type", "button", "tabindex", "-1", "aria-label", "Close module navigation", 1, "admin-module-backdrop", 3, "is-closing"], [1, "admin-header__search"], ["lucideSearch", "", "size", "17", "aria-hidden", "true"], ["aria-label", "Search students and programmes", 3, "placeholder"], ["type", "button", "aria-label", "Notifications", 1, "admin-icon-button", "admin-header__notification"], ["lucideBell", "", "size", "19", "aria-hidden", "true"], ["type", "button", "aria-label", "Help", 1, "admin-icon-button"], ["lucideCircleHelp", "", "size", "19", "aria-hidden", "true"], [1, "admin-header__avatar"], [1, "admin-header__admin-name"], ["type", "button", "aria-label", "Open profile menu", 1, "admin-icon-button"], ["lucideChevronDown", "", "size", "17", "aria-hidden", "true"], ["lucideCircleCheck", "", "size", "20", "aria-hidden", "true"], ["aria-hidden", "true", 1, "admin-header__status-divider"], ["type", "button", "aria-label", "Open header options", 1, "admin-icon-button"], ["lucideChevronDown", "", "size", "18", "aria-hidden", "true"], ["type", "button", "tabindex", "-1", "aria-label", "Close module navigation", 1, "admin-module-backdrop", 3, "click"], ["type", "button", "tabindex", "-1", "aria-label", "Close admin navigation", 1, "admin-drawer-backdrop", 3, "click"], ["id", "admin-mobile-navigation", "role", "dialog", "aria-modal", "true", "aria-label", "Admin navigation", "cdkTrapFocus", "", 1, "admin-sidebar", "admin-sidebar--mobile", 3, "cdkTrapFocusAutoCapture"], [1, "admin-brand"], ["aria-hidden", "true", 1, "admin-brand__mark"], ["src", "assets/images/brand/graphic-era-mark.png", "alt", ""], [1, "admin-brand__copy"], ["type", "button", "aria-label", "Close admin navigation", 1, "admin-icon-button", "admin-brand__control"], ["type", "button", 1, "admin-icon-button", "admin-brand__control"], [1, "admin-navigation"], [1, "admin-navigation__list"], [1, "admin-navigation__section"], [1, "admin-sidebar__footer"], ["href", "mailto:support@geu.ac.in", 1, "admin-sidebar__support"], ["lucideLifeBuoy", "", "size", "17", "aria-hidden", "true"], [1, "admin-user"], ["aria-hidden", "true", 1, "admin-user__avatar"], [1, "admin-user__copy"], ["type", "button", "aria-label", "Sign out", 1, "admin-icon-button", "admin-user__logout", 3, "click"], ["lucideLogOut", "", "size", "17", "aria-hidden", "true"], ["type", "button", "aria-label", "Close admin navigation", 1, "admin-icon-button", "admin-brand__control", 3, "click"], ["lucideX", "", "size", "18", "aria-hidden", "true"], ["type", "button", 1, "admin-icon-button", "admin-brand__control", 3, "click"], ["lucideChevronRight", "", "size", "18", "aria-hidden", "true"], ["lucideChevronLeft", "", "size", "18", "aria-hidden", "true"], [1, "admin-navigation__item", "admin-navigation__item--section", 3, "is-active", "routerLink"], ["type", "button", 1, "admin-navigation__item", "admin-navigation__item--section", 3, "click"], [1, "admin-navigation__icon"], ["size", "18", "aria-hidden", "true", 3, "lucideIcon"], [1, "admin-navigation__label"], ["lucideChevronDown", "", "size", "15", "aria-hidden", "true", 1, "admin-navigation__chevron"], [1, "admin-navigation__children", "admin-navigation__children--module", 3, "is-closing", "id"], [1, "admin-navigation__children", "admin-navigation__children--module", 3, "id"], [1, "admin-navigation__flyout-header"], ["type", "button", "aria-label", "Close navigation popup", 3, "click"], ["lucideX", "", "size", "19", "aria-hidden", "true"], [1, "admin-navigation__module-summary"], ["aria-hidden", "true", 1, "admin-navigation__module-icon"], ["size", "42", 3, "lucideIcon"], [1, "admin-navigation__module-copy"], ["aria-hidden", "true", 1, "admin-navigation__module-spark"], [1, "admin-navigation__guidance"], [3, "routerLink"], [1, "admin-navigation__group-heading"], [1, "admin-navigation__item", "admin-navigation__item--child", 3, "is-active", "routerLink"], ["aria-hidden", "true"], ["type", "button", 1, "admin-navigation__item", "admin-navigation__item--child", 3, "click"], ["size", "16", "aria-hidden", "true", 3, "lucideIcon"], [1, "admin-navigation__description"], ["lucideChevronDown", "", "size", "14", "aria-hidden", "true", 1, "admin-navigation__chevron"], [1, "admin-navigation__subgroup", 3, "id"], [1, "admin-navigation__item", "admin-navigation__item--leaf", 3, "click", "routerLink"], ["size", "15", "aria-hidden", "true", 3, "lucideIcon"], [1, "admin-navigation__item", "admin-navigation__item--child", 3, "click", "routerLink"], ["lucideChevronRight", "", "size", "16", "aria-hidden", "true", 1, "admin-navigation__entry-arrow"], [3, "click", "routerLink"], ["lucideChevronRight", "", "size", "15", "aria-hidden", "true"], [1, "admin-navigation__item", "admin-navigation__item--section", 3, "click", "routerLink"]], template: function AdminShellComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "a", 4);
            i0.ɵɵtext(1, "Skip to main content");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(2, "div", 5)(3, "aside", 6);
            i0.ɵɵelementContainer(4, 7);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(5, "header", 8)(6, "button", 9, 0);
            i0.ɵɵlistener("click", function AdminShellComponent_Template_button_click_6_listener() { return ctx.openMobileNavigation(); });
            i0.ɵɵnamespaceSVG();
            i0.ɵɵelement(8, "svg", 10);
            i0.ɵɵelementEnd();
            i0.ɵɵnamespaceHTML();
            i0.ɵɵelementStart(9, "div", 11)(10, "nav", 12)(11, "ol");
            i0.ɵɵrepeaterCreate(12, AdminShellComponent_For_13_Template, 4, 2, "li", null, i0.ɵɵrepeaterTrackByIndex);
            i0.ɵɵelementStart(14, "li", 13, 1);
            i0.ɵɵnamespaceSVG();
            i0.ɵɵelement(16, "svg", 14);
            i0.ɵɵnamespaceHTML();
            i0.ɵɵelementStart(17, "span");
            i0.ɵɵtext(18);
            i0.ɵɵelementEnd()()()()();
            i0.ɵɵconditionalCreate(19, AdminShellComponent_Conditional_19_Template, 16, 3, "div", 15)(20, AdminShellComponent_Conditional_20_Template, 7, 1, "div", 16);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(21, "main", 17);
            i0.ɵɵelement(22, "router-outlet");
            i0.ɵɵelementEnd()();
            i0.ɵɵconditionalCreate(23, AdminShellComponent_Conditional_23_Template, 1, 2, "button", 18);
            i0.ɵɵconditionalCreate(24, AdminShellComponent_Conditional_24_Template, 3, 4);
            i0.ɵɵtemplate(25, AdminShellComponent_ng_template_25_Template, 29, 5, "ng-template", null, 2, i0.ɵɵtemplateRefExtractor);
        } if (rf & 2) {
            const navigationContent_r6 = i0.ɵɵreference(26);
            i0.ɵɵadvance(2);
            i0.ɵɵclassProp("admin-shell--collapsed", ctx.desktopCollapsed());
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngTemplateOutlet", navigationContent_r6)("ngTemplateOutletContext", i0.ɵɵpureFunction0(9, _c3));
            i0.ɵɵadvance(2);
            i0.ɵɵattribute("aria-expanded", ctx.mobileOpen());
            i0.ɵɵadvance(6);
            i0.ɵɵrepeater(ctx.pageContext().breadcrumbs);
            i0.ɵɵadvance(6);
            i0.ɵɵtextInterpolate(ctx.pageContext().title);
            i0.ɵɵadvance();
            i0.ɵɵconditional(ctx.showWorkspaceHeader() ? 19 : 20);
            i0.ɵɵadvance(4);
            i0.ɵɵconditional(ctx.desktopModuleOpen() ? 23 : -1);
            i0.ɵɵadvance();
            i0.ɵɵconditional(ctx.mobileOpen() ? 24 : -1);
        } }, dependencies: [CdkTrapFocus,
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
            LucideX], styles: ["\n[_nghost-%COMP%] {\n  display: block;\n  height: 100dvh;\n  min-height: 0;\n  overflow: hidden;\n  min-width: 0;\n}\n\n*[_ngcontent-%COMP%], \n*[_ngcontent-%COMP%]::before, \n*[_ngcontent-%COMP%]::after {\n  box-sizing: border-box;\n}\n\nbutton[_ngcontent-%COMP%], \na[_ngcontent-%COMP%] {\n  font: inherit;\n}\n\n.admin-shell[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: var(--erp-sidebar-width) minmax(0, 1fr);\n  grid-template-rows: var(--erp-header-height) minmax(0, 1fr);\n  height: 100dvh;\n  min-height: 0;\n  overflow: hidden;\n  background: var(--erp-canvas);\n  transition: grid-template-columns var(--erp-sidebar-expand-transition);\n}\n\n.admin-shell--collapsed[_ngcontent-%COMP%] {\n  grid-template-columns: var(--erp-sidebar-collapsed-width) minmax(0, 1fr);\n}\n\n.admin-sidebar[_ngcontent-%COMP%] {\n  display: flex;\n  min-width: 0;\n  flex-direction: column;\n  background:\n    linear-gradient(var(--erp-sidebar-pattern) 1px, transparent 1px),\n    linear-gradient(90deg, var(--erp-sidebar-pattern) 1px, transparent 1px),\n    radial-gradient(circle at top left, var(--erp-sidebar-glow), transparent 42%),\n    var(--erp-sidebar-surface);\n  background-size:\n    24px 24px,\n    24px 24px,\n    auto,\n    auto;\n  color: var(--erp-sidebar-text);\n}\n\n.admin-sidebar--desktop[_ngcontent-%COMP%] {\n  position: fixed;\n  z-index: var(--erp-z-sidebar);\n  inset: 0 auto 0 0;\n  width: var(--erp-sidebar-width);\n  height: 100dvh;\n  overflow: visible;\n  border-right: 1px solid var(--erp-sidebar-divider);\n  transition:\n    width var(--erp-sidebar-expand-duration) var(--erp-sidebar-expand-easing),\n    box-shadow var(--erp-sidebar-expand-duration) var(--erp-sidebar-expand-easing);\n}\n\n.admin-sidebar--mobile[_ngcontent-%COMP%] {\n  position: fixed;\n  z-index: var(--erp-z-drawer);\n  inset: 0 auto 0 0;\n  width: min(var(--erp-sidebar-mobile-width), calc(100vw - var(--erp-space-8)));\n  box-shadow: var(--erp-shadow-overlay);\n  animation: _ngcontent-%COMP%_admin-drawer-enter var(--erp-drawer-enter-duration) var(--erp-ease-enter);\n}\n\n.admin-brand[_ngcontent-%COMP%] {\n  display: flex;\n  min-height: var(--erp-header-height);\n  align-items: center;\n  gap: var(--erp-space-2);\n  padding: 0 var(--erp-space-3);\n  border-bottom: 1px solid var(--erp-sidebar-divider);\n  background: var(--erp-sidebar-panel-surface);\n  backdrop-filter: blur(12px);\n}\n\n.admin-brand__mark[_ngcontent-%COMP%] {\n  display: grid;\n  width: 28px;\n  height: 28px;\n  flex: 0 0 28px;\n  place-items: center;\n  padding: 2px;\n  border: 1px solid var(--erp-sidebar-divider);\n  border-radius: var(--erp-radius-compact);\n  background: var(--erp-surface-raised);\n  box-shadow: var(--erp-shadow-card);\n}\n\n.admin-brand__mark[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  display: block;\n  width: 100%;\n  height: 100%;\n  object-fit: contain;\n}\n\n.admin-brand__copy[_ngcontent-%COMP%], \n.admin-user__copy[_ngcontent-%COMP%] {\n  min-width: 0;\n}\n\n.admin-brand__copy[_ngcontent-%COMP%] {\n  display: flex;\n  flex: 1;\n  flex-direction: column;\n  line-height: var(--erp-line-caption);\n}\n\n.admin-brand__copy[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  overflow: hidden;\n  color: var(--erp-text-heading);\n  font-size: var(--erp-font-size-sm);\n  font-weight: var(--erp-weight-semibold);\n  letter-spacing: var(--erp-letter-tight);\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n\n.admin-brand__copy[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  overflow: hidden;\n  color: var(--erp-text-muted);\n  font-size: var(--erp-font-size-2xs);\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n\n.admin-icon-button[_ngcontent-%COMP%] {\n  display: inline-grid;\n  width: 32px;\n  height: 32px;\n  flex: 0 0 auto;\n  place-items: center;\n  padding: 0;\n  border: 1px solid transparent;\n  border-radius: var(--erp-radius-control);\n  background: transparent;\n  color: var(--erp-text-muted);\n  cursor: pointer;\n  transition:\n    background var(--erp-control-transition),\n    border-color var(--erp-control-transition),\n    color var(--erp-control-transition);\n}\n\n.admin-icon-button[_ngcontent-%COMP%]:hover {\n  border-color: var(--erp-border-subtle);\n  background: var(--erp-surface-hover);\n  color: var(--erp-text-heading);\n}\n\n.admin-brand__control[_ngcontent-%COMP%] {\n  margin-left: auto;\n}\n\n.admin-navigation[_ngcontent-%COMP%] {\n  position: relative;\n  min-height: 0;\n  flex: 1;\n  overflow-x: hidden;\n  overflow-y: auto;\n  overscroll-behavior: contain;\n  padding: var(--erp-space-2);\n  scrollbar-width: thin;\n}\n\n.admin-navigation__list[_ngcontent-%COMP%], \n.admin-navigation__children[_ngcontent-%COMP%], \n.admin-navigation__subgroup[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n  list-style: none;\n}\n\n.admin-navigation__section[_ngcontent-%COMP%]    + .admin-navigation__section[_ngcontent-%COMP%] {\n  margin-top: 4px;\n}\n\n.admin-navigation__section[_ngcontent-%COMP%], \n.admin-navigation__section[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%] {\n  position: relative;\n}\n\n.admin-navigation__item[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  width: 100%;\n  min-width: 0;\n  align-items: center;\n  gap: var(--erp-space-2);\n  border: 0;\n  outline: 1px solid transparent;\n  border-radius: var(--erp-sidebar-item-radius);\n  background: transparent;\n  color: var(--erp-sidebar-text);\n  text-align: left;\n  text-decoration: none;\n  cursor: pointer;\n  transition:\n    background var(--erp-nav-active-transition),\n    color var(--erp-nav-active-transition),\n    outline-color var(--erp-nav-active-transition),\n    box-shadow var(--erp-nav-active-transition),\n    transform var(--erp-nav-active-transition);\n}\n\n.admin-navigation__item--section[_ngcontent-%COMP%] {\n  min-height: var(--erp-sidebar-item-height);\n  padding: 0 var(--erp-space-2);\n  font-size: var(--erp-font-size-xs);\n  font-weight: var(--erp-weight-medium);\n}\n\n.admin-navigation__item--child[_ngcontent-%COMP%] {\n  min-height: 36px;\n  padding: 0 var(--erp-space-2);\n  font-size: var(--erp-font-size-xs);\n}\n\n.admin-navigation__item--leaf[_ngcontent-%COMP%] {\n  min-height: 34px;\n  padding: 0 var(--erp-space-2) 0 var(--erp-space-5);\n  color: var(--erp-text-muted);\n  font-size: var(--erp-font-size-xs);\n}\n\n.admin-navigation__item[_ngcontent-%COMP%]:hover {\n  background: var(--erp-sidebar-hover-bg);\n  color: var(--erp-text-heading);\n  outline-color: var(--erp-sidebar-divider);\n  \n  transform: none;\n}\n\n.admin-navigation__item.is-active[_ngcontent-%COMP%] {\n  background: var(--erp-sidebar-active-bg);\n  outline-color: var(--erp-sidebar-divider);\n  box-shadow:\n    inset 3px 0 0 var(--erp-sidebar-active-edge),\n    var(--erp-shadow-card);\n  color: var(--erp-blue-700);\n  font-weight: var(--erp-weight-medium);\n}\n\n.admin-navigation__icon[_ngcontent-%COMP%] {\n  display: inline-grid;\n  width: 24px;\n  height: 22px;\n  flex: 0 0 24px;\n  place-items: center;\n  border-radius: var(--erp-radius-control);\n  background: transparent;\n  color: var(--erp-text-muted);\n  transition:\n    color var(--erp-nav-active-transition),\n    background var(--erp-nav-active-transition);\n}\n\n.admin-navigation__item.is-active[_ngcontent-%COMP%]   .admin-navigation__icon[_ngcontent-%COMP%] {\n  background: var(--erp-blue-50);\n  color: var(--erp-icon-active-colour);\n}\n\n.admin-navigation__label[_ngcontent-%COMP%] {\n  min-width: 0;\n  flex: 1;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n\n.admin-navigation__chevron[_ngcontent-%COMP%] {\n  flex: 0 0 auto;\n  color: var(--erp-text-light);\n  transition: transform var(--erp-standard-transition);\n}\n\n.admin-navigation__chevron.is-open[_ngcontent-%COMP%] {\n  transform: rotate(180deg);\n}\n\n.admin-navigation__children[_ngcontent-%COMP%] {\n  margin: var(--erp-space-1) 0 var(--erp-space-2) 20px;\n  padding: var(--erp-space-1) var(--erp-space-1) var(--erp-space-1) var(--erp-space-2);\n  border-left: 1px solid var(--erp-blue-200);\n  border-radius: 0 var(--erp-radius-compact) var(--erp-radius-compact) 0;\n  background: var(--erp-sidebar-panel-surface);\n}\n\n.admin-sidebar--desktop[_ngcontent-%COMP%]   .admin-navigation[_ngcontent-%COMP%] {\n  overflow-x: hidden;\n  overflow-y: auto;\n}\n\n.admin-sidebar--desktop[_ngcontent-%COMP%]   .admin-navigation__children[_ngcontent-%COMP%] {\n  position: fixed;\n  z-index: var(--erp-z-dropdown);\n  left: calc(var(--erp-sidebar-width) + var(--erp-space-2));\n  width: min(\n    var(--erp-sidebar-panel-width),\n    calc(100vw - var(--erp-sidebar-width) - var(--erp-space-8))\n  );\n  margin: 0;\n  padding: var(--erp-space-1);\n  overflow-y: auto;\n  overscroll-behavior: contain;\n  border: 1px solid var(--erp-border-default);\n  border-radius: var(--erp-radius-compact);\n  background:\n    linear-gradient(var(--erp-sidebar-pattern) 1px, transparent 1px),\n    linear-gradient(90deg, var(--erp-sidebar-pattern) 1px, transparent 1px),\n    var(--erp-surface-overlay);\n  background-size:\n    24px 24px,\n    24px 24px,\n    auto;\n  box-shadow: var(--erp-shadow-sidebar-flyout);\n  animation: _ngcontent-%COMP%_admin-flyout-enter 150ms var(--erp-ease-enter);\n  scrollbar-width: thin;\n}\n\n.admin-sidebar--desktop[_ngcontent-%COMP%]   .admin-navigation__children[_ngcontent-%COMP%]::before {\n  display: none;\n}\n\n.admin-sidebar--desktop[_ngcontent-%COMP%]   .admin-navigation__children[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 1;\n}\n\n.admin-sidebar--desktop[_ngcontent-%COMP%]   .admin-navigation__item--child[_ngcontent-%COMP%] {\n  min-height: 36px;\n  padding: 0 var(--erp-space-2);\n}\n\n.admin-navigation__flyout-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: var(--erp-space-3);\n  margin: calc(-1 * var(--erp-space-1)) calc(-1 * var(--erp-space-1)) var(--erp-space-1);\n  padding: var(--erp-space-2) var(--erp-space-3);\n  border-bottom: 1px solid var(--erp-border-subtle);\n  background: var(--erp-surface-detail-soft);\n}\n\n.admin-navigation__flyout-header[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 2px;\n}\n\n.admin-navigation__flyout-header[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  color: var(--erp-text-muted);\n  font-size: var(--erp-font-size-2xs);\n  font-weight: var(--erp-weight-medium);\n  text-transform: uppercase;\n  letter-spacing: var(--erp-letter-wide);\n}\n\n.admin-navigation__flyout-header[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: var(--erp-text-heading);\n  font-size: var(--erp-font-size-sm);\n  font-weight: var(--erp-weight-semibold);\n}\n\n.admin-navigation__flyout-header[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  display: inline-grid;\n  width: 30px;\n  height: 30px;\n  flex: 0 0 auto;\n  place-items: center;\n  padding: 0;\n  color: var(--erp-text-muted);\n  background: transparent;\n  border: 1px solid transparent;\n  border-radius: var(--erp-radius-control);\n  cursor: pointer;\n}\n\n.admin-navigation__flyout-header[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  color: var(--erp-text-heading);\n  background: var(--erp-surface-hover);\n  border-color: var(--erp-border-subtle);\n}\n\n.admin-navigation__subgroup[_ngcontent-%COMP%] {\n  margin: var(--erp-space-1) 0 var(--erp-space-2) 12px;\n  padding: var(--erp-space-1) 0 var(--erp-space-1) var(--erp-space-2);\n  border-left: 1px solid var(--erp-blue-200);\n}\n\n.admin-sidebar--desktop[_ngcontent-%COMP%]   .admin-navigation__subgroup[_ngcontent-%COMP%] {\n  margin: 2px 0 var(--erp-space-1) var(--erp-space-4);\n  padding: 2px 0 2px var(--erp-space-2);\n}\n\n.admin-sidebar__footer[_ngcontent-%COMP%] {\n  flex: 0 0 auto;\n  padding: var(--erp-space-1) var(--erp-space-2);\n  border-top: 1px solid var(--erp-sidebar-divider);\n  background: var(--erp-sidebar-panel-surface);\n  backdrop-filter: blur(12px);\n}\n\n.admin-sidebar__support[_ngcontent-%COMP%] {\n  display: flex;\n  min-height: 36px;\n  align-items: center;\n  gap: var(--erp-space-2);\n  padding: 0 var(--erp-space-2);\n  border-radius: var(--erp-radius-control);\n  color: var(--erp-text-muted);\n  font-size: var(--erp-font-size-xs);\n  text-decoration: none;\n}\n\n.admin-sidebar__support[_ngcontent-%COMP%]:hover {\n  background: var(--erp-surface-hover);\n  color: var(--erp-text-heading);\n}\n\n.admin-user[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 32px minmax(0, 1fr) 32px;\n  align-items: center;\n  gap: var(--erp-space-2);\n  margin-top: var(--erp-space-1);\n  padding-top: var(--erp-space-2);\n  border-top: 1px solid var(--erp-border-subtle);\n}\n\n.admin-user__avatar[_ngcontent-%COMP%] {\n  display: grid;\n  width: 32px;\n  height: 32px;\n  place-items: center;\n  border: 1px solid var(--erp-blue-200);\n  border-radius: var(--erp-radius-avatar);\n  background: var(--erp-blue-50);\n  color: var(--erp-blue-700);\n  font-size: var(--erp-font-size-2xs);\n  font-weight: var(--erp-weight-semibold);\n}\n\n.admin-user__copy[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  line-height: var(--erp-line-caption);\n}\n\n.admin-user__copy[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%], \n.admin-user__copy[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n\n.admin-user__copy[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: var(--erp-text-strong);\n  font-size: var(--erp-font-size-xs);\n  font-weight: var(--erp-weight-medium);\n}\n\n.admin-user__copy[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  color: var(--erp-text-light);\n  font-size: var(--erp-font-size-2xs);\n}\n\n.admin-user__logout[_ngcontent-%COMP%] {\n  width: 32px;\n  height: 32px;\n}\n\n.admin-header[_ngcontent-%COMP%] {\n  position: sticky;\n  z-index: var(--erp-z-header);\n  top: 0;\n  grid-column: 2;\n  grid-row: 1;\n  display: flex;\n  min-width: 0;\n  height: var(--erp-header-height);\n  align-items: center;\n  gap: var(--erp-space-2);\n  padding: 0 var(--erp-header-padding-inline);\n  border-bottom: 1px solid var(--erp-header-border);\n  background: var(--erp-header-bg);\n  box-shadow: var(--erp-shadow-header);\n  backdrop-filter: blur(12px);\n}\n\n.admin-header__menu[_ngcontent-%COMP%] {\n  display: none;\n}\n\n.admin-header__context[_ngcontent-%COMP%] {\n  min-width: 0;\n  flex: 1;\n}\n\n.admin-header__status[_ngcontent-%COMP%] {\n  display: flex;\n  min-width: max-content;\n  align-items: center;\n  gap: var(--erp-space-2);\n  color: var(--erp-text-muted);\n  font-size: var(--erp-font-size-xs);\n  white-space: nowrap;\n}\n\n.admin-header__status[_ngcontent-%COMP%]    > svg[_ngcontent-%COMP%] {\n  flex: 0 0 auto;\n  color: var(--erp-blue-700);\n}\n\n.admin-header__status-divider[_ngcontent-%COMP%] {\n  width: 1px;\n  height: 24px;\n  margin-inline: var(--erp-space-3);\n  background: var(--erp-border-subtle);\n}\n\n.admin-header__status[_ngcontent-%COMP%]   .admin-icon-button[_ngcontent-%COMP%] {\n  flex: 0 0 32px;\n  color: var(--erp-blue-700);\n}\n\n.admin-header__tools[_ngcontent-%COMP%] {\n  display: flex;\n  min-width: 0;\n  align-items: center;\n  gap: var(--erp-space-2);\n  color: var(--erp-text-heading);\n}\n\n.admin-header__search[_ngcontent-%COMP%] {\n  display: flex;\n  width: min(320px, 25vw);\n  min-height: 36px;\n  align-items: center;\n  gap: var(--erp-space-2);\n  padding-inline: var(--erp-space-3);\n  color: var(--erp-text-muted);\n  background: var(--erp-surface);\n  border: 1px solid var(--erp-border-default);\n  border-radius: var(--erp-radius-control);\n}\n\n.admin-header__search[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 100%;\n  min-width: 0;\n  color: var(--erp-text-body);\n  background: transparent;\n  border: 0;\n  outline: 0;\n}\n\n.admin-header__notification[_ngcontent-%COMP%] {\n  position: relative;\n}\n\n.admin-header__notification[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  position: absolute;\n  top: -3px;\n  right: -3px;\n  display: grid;\n  min-width: 16px;\n  height: 16px;\n  place-items: center;\n  padding-inline: 3px;\n  color: var(--erp-text-on-primary);\n  font-size: 9px;\n  line-height: 1;\n  background: var(--erp-danger-600, var(--erp-danger-text));\n  border: 2px solid var(--erp-surface);\n  border-radius: var(--erp-radius-pill);\n}\n\n.admin-header__avatar[_ngcontent-%COMP%] {\n  display: inline-grid;\n  width: 34px;\n  height: 34px;\n  flex: 0 0 auto;\n  place-items: center;\n  color: var(--erp-blue-700);\n  font-size: var(--erp-font-size-xs);\n  font-weight: var(--erp-weight-bold);\n  background: var(--erp-blue-50);\n  border-radius: var(--erp-radius-avatar);\n}\n\n.admin-header__admin-name[_ngcontent-%COMP%] {\n  max-width: 9rem;\n  overflow: hidden;\n  font-size: var(--erp-font-size-xs);\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n\n.admin-breadcrumbs[_ngcontent-%COMP%] {\n  min-width: 0;\n}\n\n.admin-breadcrumbs[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%] {\n  display: flex;\n  min-width: 0;\n  align-items: center;\n  gap: var(--erp-space-1);\n  margin: 0;\n  padding: 0;\n  color: var(--erp-text-muted);\n  font-size: var(--erp-font-size-xs);\n  list-style: none;\n  white-space: nowrap;\n}\n\n.admin-breadcrumbs[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  display: flex;\n  min-width: 0;\n  align-items: center;\n  gap: var(--erp-space-1);\n}\n\n.admin-breadcrumbs[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\n.admin-breadcrumbs__current[_ngcontent-%COMP%] {\n  overflow: hidden;\n  color: var(--erp-text-heading);\n  font-weight: var(--erp-weight-semibold);\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n\n.admin-breadcrumbs__current[_ngcontent-%COMP%]:focus {\n  outline: none;\n}\n\n.admin-main[_ngcontent-%COMP%] {\n  grid-column: 2;\n  grid-row: 2;\n  align-self: stretch;\n  height: 100%;\n  min-height: 0;\n  margin: 0;\n  overflow-x: hidden;\n  overflow-y: auto;\n  overscroll-behavior: contain;\n  scrollbar-gutter: stable;\n}\n\n.admin-main[_ngcontent-%COMP%]:has(erp-dynamic-admission.embedded) {\n  overflow: hidden;\n}\n\n.admin-drawer-backdrop[_ngcontent-%COMP%] {\n  position: fixed;\n  z-index: calc(var(--erp-z-drawer) - 1);\n  inset: 0;\n  width: 100%;\n  height: 100%;\n  padding: 0;\n  border: 0;\n  background: var(--erp-backdrop);\n  cursor: default;\n  animation: _ngcontent-%COMP%_admin-backdrop-enter var(--erp-drawer-enter-duration) var(--erp-ease-standard);\n}\n\n.admin-module-backdrop[_ngcontent-%COMP%] {\n  position: fixed;\n  z-index: calc(var(--erp-z-sidebar) - 1);\n  inset: 0;\n  width: 100%;\n  height: 100%;\n  padding: 0;\n  border: 0;\n  background: var(--erp-backdrop);\n  cursor: default;\n  animation: _ngcontent-%COMP%_admin-backdrop-enter 240ms cubic-bezier(0.22, 1, 0.36, 1);\n}\n\n.admin-module-backdrop.is-closing[_ngcontent-%COMP%] {\n  pointer-events: none;\n  animation: _ngcontent-%COMP%_admin-backdrop-exit 220ms cubic-bezier(0.4, 0, 1, 1) forwards;\n}\n\n.admin-sidebar--desktop[_ngcontent-%COMP%]   .admin-navigation__children--module[_ngcontent-%COMP%] {\n  top: 0;\n  bottom: 0;\n  left: var(--erp-sidebar-width);\n  display: flex;\n  width: min(var(--erp-sidebar-module-panel-width), calc(100vw - var(--erp-sidebar-width)));\n  height: 100dvh;\n  max-height: none;\n  flex-direction: column;\n  gap: 0;\n  padding: 0 var(--erp-space-3) var(--erp-space-2);\n  border-block: 0;\n  border-left: 2px solid var(--erp-blue-500);\n  border-radius: 0;\n  background: var(--erp-surface-overlay);\n  background-image: none;\n  box-shadow: var(--erp-shadow-sidebar-flyout);\n  animation: _ngcontent-%COMP%_admin-module-enter 240ms cubic-bezier(0.22, 1, 0.36, 1);\n  will-change: transform, opacity;\n}\n\n.admin-sidebar--desktop[_ngcontent-%COMP%]   .admin-navigation__children--module.is-closing[_ngcontent-%COMP%] {\n  pointer-events: none;\n  animation: _ngcontent-%COMP%_admin-module-exit 220ms cubic-bezier(0.4, 0, 1, 1) forwards;\n}\n\n.admin-sidebar--desktop[_ngcontent-%COMP%]   .admin-navigation__children--module[_ngcontent-%COMP%]   .admin-navigation__flyout-header[_ngcontent-%COMP%] {\n  min-height: 58px;\n  margin: 0 calc(-1 * var(--erp-space-3)) var(--erp-space-2);\n  padding: var(--erp-space-1) var(--erp-space-3);\n  background: var(--erp-surface);\n}\n\n.admin-sidebar--desktop[_ngcontent-%COMP%]   .admin-navigation__children--module[_ngcontent-%COMP%]   .admin-navigation__flyout-header[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  color: var(--erp-blue-600);\n}\n\n.admin-sidebar--desktop\n[_ngcontent-%COMP%]   .admin-navigation__children--module\n[_ngcontent-%COMP%]   .admin-navigation__flyout-header\n[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  font-size: var(--erp-font-size-lg);\n  line-height: var(--erp-line-section-title);\n}\n\n.admin-navigation__children--module[_ngcontent-%COMP%]   .admin-navigation__flyout-header[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  width: 32px;\n  height: 42px;\n  grid-template-rows: 20px 12px;\n  color: var(--erp-text-heading);\n}\n\n.admin-navigation__children--module[_ngcontent-%COMP%]   .admin-navigation__flyout-header[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  color: var(--erp-text-muted);\n  font-size: var(--erp-font-size-2xs);\n  font-weight: var(--erp-weight-regular);\n  letter-spacing: var(--erp-letter-normal);\n  text-transform: none;\n}\n\n.admin-navigation__module-summary[_ngcontent-%COMP%] {\n  position: relative;\n  display: grid;\n  grid-template-columns: 56px minmax(0, 1fr);\n  min-height: 88px;\n  align-items: center;\n  gap: var(--erp-space-2);\n  padding: var(--erp-space-2);\n  border: 1px solid var(--erp-blue-200);\n  border-radius: var(--erp-radius-card);\n  background: var(--erp-blue-50);\n}\n\n.admin-navigation__module-icon[_ngcontent-%COMP%] {\n  position: relative;\n  display: grid;\n  width: 52px;\n  height: 52px;\n  place-items: center;\n  border-radius: var(--erp-radius-avatar);\n  background: var(--erp-blue-100);\n  color: var(--erp-blue-600);\n}\n\n.admin-navigation__module-icon[_ngcontent-%COMP%]    > svg[_ngcontent-%COMP%] {\n  width: 30px;\n  height: 30px;\n}\n\n.admin-navigation__module-icon[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 2px;\n  right: 0;\n  display: grid;\n  width: 19px;\n  height: 19px;\n  place-items: center;\n  border: 2px solid var(--erp-surface);\n  border-radius: var(--erp-radius-avatar);\n  background: var(--erp-blue-500);\n  color: var(--erp-text-on-primary);\n  font-size: var(--erp-font-size-2xs);\n  font-weight: var(--erp-weight-bold);\n}\n\n.admin-navigation__module-copy[_ngcontent-%COMP%] {\n  display: grid;\n  min-width: 0;\n  gap: 2px;\n}\n\n.admin-navigation__module-copy[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: var(--erp-text-heading);\n  font-size: var(--erp-font-size-sm);\n  font-weight: var(--erp-weight-semibold);\n}\n\n.admin-navigation__module-copy[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  color: var(--erp-text-body);\n  font-size: var(--erp-font-size-2xs);\n  line-height: var(--erp-line-caption);\n}\n\n.admin-navigation__module-copy[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  justify-self: start;\n  margin-top: 2px;\n  padding: 1px var(--erp-space-2);\n  border-radius: var(--erp-radius-pill);\n  background: var(--erp-blue-100);\n  color: var(--erp-blue-700);\n  font-size: var(--erp-font-size-2xs);\n  font-weight: var(--erp-weight-semibold);\n}\n\n.admin-navigation__module-spark[_ngcontent-%COMP%] {\n  position: absolute;\n  top: var(--erp-space-2);\n  right: var(--erp-space-2);\n  color: var(--erp-kpi-orange-text);\n  font-size: var(--erp-font-size-sm);\n}\n\n.admin-navigation__group-heading[_ngcontent-%COMP%] {\n  display: flex;\n  min-height: 28px;\n  align-items: center;\n  gap: var(--erp-space-2);\n  padding: var(--erp-space-1) var(--erp-space-1) 2px;\n  color: var(--erp-text-muted);\n  font-size: var(--erp-font-size-2xs);\n  font-weight: var(--erp-weight-medium);\n  letter-spacing: var(--erp-letter-wide);\n  text-transform: uppercase;\n}\n\n.admin-navigation__group-heading[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  height: 1px;\n  flex: 1;\n  background: var(--erp-border-subtle);\n}\n\n.admin-sidebar--desktop[_ngcontent-%COMP%]   .admin-navigation__children--module[_ngcontent-%COMP%]   .admin-navigation__item--child[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 32px minmax(0, 1fr) 16px;\n  grid-template-rows: auto auto;\n  min-height: 42px;\n  column-gap: var(--erp-space-1);\n  padding: 3px var(--erp-space-1);\n}\n\n.admin-navigation__children--module[_ngcontent-%COMP%]   .admin-navigation__item--child[_ngcontent-%COMP%]::before {\n  position: absolute;\n  inset: 0 auto 0 0;\n  width: 3px;\n  border-radius: 0 var(--erp-radius-xs) var(--erp-radius-xs) 0;\n  background: transparent;\n  content: '';\n}\n\n.admin-navigation__children--module[_ngcontent-%COMP%]   .admin-navigation__item--child.is-active[_ngcontent-%COMP%]::before {\n  background: var(--erp-blue-500);\n}\n\n.admin-navigation__children--module[_ngcontent-%COMP%]   .admin-navigation__item--child[_ngcontent-%COMP%]   .admin-navigation__icon[_ngcontent-%COMP%] {\n  grid-row: 1 / 3;\n  width: 32px;\n  height: 32px;\n  align-self: center;\n  color: var(--erp-text-muted);\n}\n\n.admin-navigation__children--module\n[_ngcontent-%COMP%]   .admin-navigation__item--child.is-active\n[_ngcontent-%COMP%]   .admin-navigation__icon[_ngcontent-%COMP%] {\n  background: transparent;\n  color: var(--erp-blue-600);\n}\n\n.admin-navigation__children--module[_ngcontent-%COMP%]   .admin-navigation__item--child[_ngcontent-%COMP%]   .admin-navigation__label[_ngcontent-%COMP%] {\n  grid-column: 2;\n  align-self: end;\n  color: var(--erp-text-strong);\n  font-size: var(--erp-font-size-xs);\n  font-weight: var(--erp-weight-semibold);\n}\n\n.admin-navigation__description[_ngcontent-%COMP%] {\n  grid-column: 2;\n  align-self: start;\n  overflow: hidden;\n  color: var(--erp-text-muted);\n  font-size: var(--erp-font-size-2xs);\n  line-height: var(--erp-line-caption);\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n\n.admin-navigation__entry-arrow[_ngcontent-%COMP%] {\n  grid-column: 3;\n  grid-row: 1 / 3;\n  align-self: center;\n  color: var(--erp-text-muted);\n}\n\n.admin-navigation__guidance[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 20px minmax(0, 1fr) auto;\n  min-height: 42px;\n  align-items: center;\n  gap: var(--erp-space-2);\n  margin-top: auto;\n  padding: var(--erp-space-1) var(--erp-space-2);\n  border: 1px solid var(--erp-blue-200);\n  border-radius: var(--erp-radius-compact);\n  background: var(--erp-blue-50);\n  color: var(--erp-blue-600);\n}\n\n.admin-navigation__guidance[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%], \n.admin-navigation__guidance[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  font-size: var(--erp-font-size-2xs);\n}\n\n.admin-navigation__guidance[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: var(--erp-text-strong);\n  font-weight: var(--erp-weight-semibold);\n}\n\n.admin-navigation__guidance[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: var(--erp-space-1);\n  color: var(--erp-text-link);\n  text-decoration: none;\n}\n\n.admin-skip-link[_ngcontent-%COMP%] {\n  position: fixed;\n  z-index: var(--erp-z-toast);\n  top: var(--erp-space-2);\n  left: var(--erp-space-2);\n  padding: var(--erp-space-2) var(--erp-space-3);\n  border-radius: var(--erp-radius-control);\n  background: var(--erp-text-heading);\n  color: var(--erp-text-on-primary);\n  font-size: var(--erp-font-size-xs);\n  font-weight: var(--erp-weight-semibold);\n  text-decoration: none;\n  transform: translateY(calc(-100% - var(--erp-space-3)));\n  transition: transform var(--erp-standard-transition);\n}\n\n.admin-skip-link[_ngcontent-%COMP%]:focus {\n  transform: translateY(0);\n}\n\n.admin-icon-button[_ngcontent-%COMP%]:focus-visible, \n.admin-navigation__item[_ngcontent-%COMP%]:focus-visible, \n.admin-sidebar__support[_ngcontent-%COMP%]:focus-visible, \n.admin-skip-link[_ngcontent-%COMP%]:focus-visible {\n  outline: var(--erp-focus-ring-width) solid var(--erp-focus-outline);\n  outline-offset: var(--erp-focus-ring-offset);\n}\n\n.admin-shell--collapsed[_ngcontent-%COMP%]   .admin-sidebar--desktop[_ngcontent-%COMP%]   .admin-brand[_ngcontent-%COMP%] {\n  gap: var(--erp-space-1);\n  justify-content: center;\n  padding: 0 var(--erp-space-1);\n}\n\n.admin-shell--collapsed[_ngcontent-%COMP%]   .admin-sidebar--desktop[_ngcontent-%COMP%]   .admin-brand__mark[_ngcontent-%COMP%] {\n  width: 24px;\n  height: 24px;\n  flex-basis: 24px;\n}\n\n.admin-shell--collapsed[_ngcontent-%COMP%]   .admin-sidebar--desktop[_ngcontent-%COMP%] {\n  width: var(--erp-sidebar-collapsed-width);\n  overflow: visible;\n}\n\n.admin-shell--collapsed[_ngcontent-%COMP%]   .admin-sidebar--desktop[_ngcontent-%COMP%]:hover, \n.admin-shell--collapsed[_ngcontent-%COMP%]   .admin-sidebar--desktop[_ngcontent-%COMP%]:focus-within {\n  width: var(--erp-sidebar-width);\n  box-shadow: var(--erp-shadow-sidebar);\n}\n\n.admin-shell--collapsed[_ngcontent-%COMP%]   .admin-sidebar--desktop[_ngcontent-%COMP%]   .admin-brand__copy[_ngcontent-%COMP%], \n.admin-shell--collapsed[_ngcontent-%COMP%]   .admin-sidebar--desktop[_ngcontent-%COMP%]   .admin-navigation__label[_ngcontent-%COMP%], \n.admin-shell--collapsed[_ngcontent-%COMP%]   .admin-sidebar--desktop[_ngcontent-%COMP%]   .admin-navigation__chevron[_ngcontent-%COMP%], \n.admin-shell--collapsed[_ngcontent-%COMP%]   .admin-sidebar--desktop[_ngcontent-%COMP%]   .admin-sidebar__support[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], \n.admin-shell--collapsed[_ngcontent-%COMP%]   .admin-sidebar--desktop[_ngcontent-%COMP%]   .admin-user__copy[_ngcontent-%COMP%] {\n  max-width: 0;\n  overflow: hidden;\n  visibility: hidden;\n  opacity: 0;\n  pointer-events: none;\n  transform: translateX(-6px);\n  transition:\n    max-width var(--erp-sidebar-expand-duration) var(--erp-sidebar-expand-easing),\n    opacity var(--erp-sidebar-expand-duration) var(--erp-sidebar-expand-easing),\n    transform var(--erp-sidebar-expand-duration) var(--erp-sidebar-expand-easing),\n    visibility 0s linear var(--erp-sidebar-collapse-duration);\n}\n\n.admin-shell--collapsed[_ngcontent-%COMP%]   .admin-sidebar--desktop[_ngcontent-%COMP%]   .admin-navigation__children[_ngcontent-%COMP%], \n.admin-shell--collapsed[_ngcontent-%COMP%]   .admin-sidebar--desktop[_ngcontent-%COMP%]   .admin-user__avatar[_ngcontent-%COMP%] {\n  display: none;\n}\n\n.admin-shell--collapsed[_ngcontent-%COMP%]   .admin-sidebar--desktop[_ngcontent-%COMP%]   .admin-brand__control[_ngcontent-%COMP%] {\n  width: 24px;\n  height: 24px;\n  margin-left: 0;\n}\n\n.admin-shell--collapsed[_ngcontent-%COMP%]   .admin-sidebar--desktop[_ngcontent-%COMP%]   .admin-navigation__item--section[_ngcontent-%COMP%] {\n  width: 100%;\n  min-height: var(--erp-sidebar-item-height);\n  justify-content: flex-start;\n  margin-inline: 0;\n  padding: 0 12px;\n}\n\n.admin-shell--collapsed[_ngcontent-%COMP%]   .admin-sidebar--desktop[_ngcontent-%COMP%]   .admin-navigation__icon[_ngcontent-%COMP%] {\n  width: 24px;\n  flex-basis: 24px;\n}\n\n.admin-shell--collapsed[_ngcontent-%COMP%]   .admin-sidebar--desktop[_ngcontent-%COMP%]   .admin-sidebar__support[_ngcontent-%COMP%] {\n  justify-content: flex-start;\n  padding-inline: 12px;\n}\n\n.admin-shell--collapsed[_ngcontent-%COMP%]   .admin-sidebar--desktop[_ngcontent-%COMP%]   .admin-user[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n}\n\n.admin-shell--collapsed[_ngcontent-%COMP%]   .admin-sidebar--desktop[_ngcontent-%COMP%]:hover   .admin-brand[_ngcontent-%COMP%], \n.admin-shell--collapsed[_ngcontent-%COMP%]   .admin-sidebar--desktop[_ngcontent-%COMP%]:focus-within   .admin-brand[_ngcontent-%COMP%] {\n  justify-content: flex-start;\n  gap: var(--erp-space-2);\n  padding: 0 var(--erp-space-3);\n}\n\n.admin-shell--collapsed[_ngcontent-%COMP%]   .admin-sidebar--desktop[_ngcontent-%COMP%]:hover   .admin-brand__mark[_ngcontent-%COMP%], \n.admin-shell--collapsed[_ngcontent-%COMP%]   .admin-sidebar--desktop[_ngcontent-%COMP%]:focus-within   .admin-brand__mark[_ngcontent-%COMP%] {\n  width: 24px;\n  height: 24px;\n  flex-basis: 24px;\n}\n\n.admin-shell--collapsed[_ngcontent-%COMP%]   .admin-sidebar--desktop[_ngcontent-%COMP%]:hover   .admin-brand__copy[_ngcontent-%COMP%], \n.admin-shell--collapsed[_ngcontent-%COMP%]   .admin-sidebar--desktop[_ngcontent-%COMP%]:focus-within   .admin-brand__copy[_ngcontent-%COMP%] {\n  display: flex;\n  max-width: 10rem;\n  visibility: visible;\n  opacity: 1;\n  pointer-events: auto;\n  transform: translateX(0);\n  transition-delay: var(--erp-sidebar-expand-delay);\n}\n\n.admin-shell--collapsed[_ngcontent-%COMP%]   .admin-sidebar--desktop[_ngcontent-%COMP%]:hover   .admin-brand__control[_ngcontent-%COMP%], \n.admin-shell--collapsed[_ngcontent-%COMP%]   .admin-sidebar--desktop[_ngcontent-%COMP%]:focus-within   .admin-brand__control[_ngcontent-%COMP%] {\n  width: 32px;\n  height: 32px;\n  margin-left: auto;\n}\n\n.admin-shell--collapsed[_ngcontent-%COMP%]   .admin-sidebar--desktop[_ngcontent-%COMP%]:hover   .admin-navigation__item--section[_ngcontent-%COMP%], \n.admin-shell--collapsed[_ngcontent-%COMP%]   .admin-sidebar--desktop[_ngcontent-%COMP%]:focus-within   .admin-navigation__item--section[_ngcontent-%COMP%] {\n  width: 100%;\n  justify-content: flex-start;\n  margin-inline: 0;\n  \n  padding: 0 12px;\n}\n\n.admin-shell--collapsed[_ngcontent-%COMP%]   .admin-sidebar--desktop[_ngcontent-%COMP%]:hover   .admin-navigation__label[_ngcontent-%COMP%], \n.admin-shell--collapsed[_ngcontent-%COMP%]   .admin-sidebar--desktop[_ngcontent-%COMP%]:focus-within   .admin-navigation__label[_ngcontent-%COMP%] {\n  max-width: 7.5rem;\n  flex: 1;\n  visibility: visible;\n  opacity: 1;\n  pointer-events: auto;\n  transform: translateX(0);\n  transition-delay: var(--erp-sidebar-expand-delay);\n}\n\n.admin-shell--collapsed[_ngcontent-%COMP%]   .admin-sidebar--desktop[_ngcontent-%COMP%]:hover   .admin-navigation__chevron[_ngcontent-%COMP%], \n.admin-shell--collapsed[_ngcontent-%COMP%]   .admin-sidebar--desktop[_ngcontent-%COMP%]:focus-within   .admin-navigation__chevron[_ngcontent-%COMP%] {\n  max-width: 1.25rem;\n  visibility: visible;\n  opacity: 1;\n  pointer-events: auto;\n  transform: translateX(0);\n  transition-delay: var(--erp-sidebar-expand-delay);\n}\n\n.admin-shell--collapsed[_ngcontent-%COMP%]   .admin-sidebar--desktop[_ngcontent-%COMP%]:hover   .admin-navigation__chevron.is-open[_ngcontent-%COMP%], \n.admin-shell--collapsed[_ngcontent-%COMP%]   .admin-sidebar--desktop[_ngcontent-%COMP%]:focus-within   .admin-navigation__chevron.is-open[_ngcontent-%COMP%] {\n  transform: rotate(180deg);\n}\n\n.admin-shell--collapsed[_ngcontent-%COMP%]   .admin-sidebar--desktop[_ngcontent-%COMP%]:hover   .admin-navigation__children[_ngcontent-%COMP%], \n.admin-shell--collapsed[_ngcontent-%COMP%]   .admin-sidebar--desktop[_ngcontent-%COMP%]:focus-within   .admin-navigation__children[_ngcontent-%COMP%] {\n  display: block;\n}\n\n.admin-shell--collapsed[_ngcontent-%COMP%]   .admin-sidebar--desktop[_ngcontent-%COMP%]:hover   .admin-sidebar__support[_ngcontent-%COMP%], \n.admin-shell--collapsed[_ngcontent-%COMP%]   .admin-sidebar--desktop[_ngcontent-%COMP%]:focus-within   .admin-sidebar__support[_ngcontent-%COMP%] {\n  justify-content: flex-start;\n  \n  padding-inline: 12px;\n}\n\n.admin-shell--collapsed[_ngcontent-%COMP%]   .admin-sidebar--desktop[_ngcontent-%COMP%]:hover   .admin-sidebar__support[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], \n.admin-shell--collapsed[_ngcontent-%COMP%]   .admin-sidebar--desktop[_ngcontent-%COMP%]:focus-within   .admin-sidebar__support[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  max-width: 8rem;\n  visibility: visible;\n  opacity: 1;\n  pointer-events: auto;\n  transform: translateX(0);\n  transition-delay: var(--erp-sidebar-expand-delay);\n}\n\n.admin-shell--collapsed[_ngcontent-%COMP%]   .admin-sidebar--desktop[_ngcontent-%COMP%]:hover   .admin-user[_ngcontent-%COMP%], \n.admin-shell--collapsed[_ngcontent-%COMP%]   .admin-sidebar--desktop[_ngcontent-%COMP%]:focus-within   .admin-user[_ngcontent-%COMP%] {\n  display: grid;\n  justify-content: initial;\n}\n\n.admin-shell--collapsed[_ngcontent-%COMP%]   .admin-sidebar--desktop[_ngcontent-%COMP%]:hover   .admin-user__avatar[_ngcontent-%COMP%], \n.admin-shell--collapsed[_ngcontent-%COMP%]   .admin-sidebar--desktop[_ngcontent-%COMP%]:focus-within   .admin-user__avatar[_ngcontent-%COMP%] {\n  display: grid;\n}\n\n.admin-shell--collapsed[_ngcontent-%COMP%]   .admin-sidebar--desktop[_ngcontent-%COMP%]:hover   .admin-user__copy[_ngcontent-%COMP%], \n.admin-shell--collapsed[_ngcontent-%COMP%]   .admin-sidebar--desktop[_ngcontent-%COMP%]:focus-within   .admin-user__copy[_ngcontent-%COMP%] {\n  display: flex;\n  max-width: 9rem;\n  visibility: visible;\n  opacity: 1;\n  pointer-events: auto;\n  transform: translateX(0);\n  transition-delay: var(--erp-sidebar-expand-delay);\n}\n\n@keyframes _ngcontent-%COMP%_admin-drawer-enter {\n  from {\n    transform: translateX(calc(-1 * var(--erp-drawer-enter-shift)));\n    opacity: 0;\n  }\n}\n\n@keyframes _ngcontent-%COMP%_admin-flyout-enter {\n  from {\n    transform: translateX(-6px);\n    opacity: 0;\n  }\n}\n\n@keyframes _ngcontent-%COMP%_admin-module-enter {\n  from {\n    transform: translateX(-28px);\n    opacity: 0;\n  }\n}\n\n@keyframes _ngcontent-%COMP%_admin-module-exit {\n  to {\n    transform: translateX(-24px);\n    opacity: 0;\n  }\n}\n\n@keyframes _ngcontent-%COMP%_admin-backdrop-enter {\n  from {\n    opacity: 0;\n  }\n}\n\n@keyframes _ngcontent-%COMP%_admin-backdrop-exit {\n  to {\n    opacity: 0;\n  }\n}\n\n@media (max-width: 767px) {\n  .admin-module-backdrop[_ngcontent-%COMP%] {\n    display: none;\n  }\n\n  .admin-shell[_ngcontent-%COMP%], \n   .admin-shell--collapsed[_ngcontent-%COMP%] {\n    grid-template-columns: minmax(0, 1fr);\n  }\n\n  .admin-sidebar--desktop[_ngcontent-%COMP%] {\n    display: none;\n  }\n\n  .admin-header[_ngcontent-%COMP%], \n   .admin-main[_ngcontent-%COMP%] {\n    grid-column: 1;\n  }\n\n  .admin-header[_ngcontent-%COMP%] {\n    gap: var(--erp-space-2);\n    padding: 0 var(--erp-page-padding-mobile);\n  }\n\n  .admin-header__menu[_ngcontent-%COMP%] {\n    display: inline-grid;\n    width: 36px;\n    height: 36px;\n  }\n\n  .admin-header__context[_ngcontent-%COMP%] {\n    display: block;\n  }\n\n  .admin-header__status[_ngcontent-%COMP%], \n   .admin-header__tools[_ngcontent-%COMP%] {\n    display: none;\n  }\n\n  .admin-breadcrumbs[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:not(.admin-breadcrumbs__current) {\n    display: none;\n  }\n\n  .admin-breadcrumbs__current[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n    display: none;\n  }\n\n  .admin-sidebar--mobile[_ngcontent-%COMP%]   .admin-brand[_ngcontent-%COMP%] {\n    padding-inline: var(--erp-space-3);\n  }\n\n  .admin-sidebar--mobile[_ngcontent-%COMP%]   .admin-navigation[_ngcontent-%COMP%] {\n    overflow-x: hidden;\n    overflow-y: auto;\n  }\n\n  .admin-sidebar--mobile[_ngcontent-%COMP%]   .admin-navigation__children[_ngcontent-%COMP%] {\n    position: static;\n    width: auto;\n    max-height: none;\n    margin: var(--erp-space-1) 0 var(--erp-space-2) 20px;\n    padding: var(--erp-space-1) var(--erp-space-1) var(--erp-space-1) var(--erp-space-2);\n    overflow: visible;\n    border: 0;\n    border-left: 1px solid var(--erp-blue-200);\n    border-radius: 0 var(--erp-radius-compact) var(--erp-radius-compact) 0;\n    background: var(--erp-sidebar-panel-surface);\n    box-shadow: none;\n    animation: none;\n  }\n\n  .admin-sidebar--mobile[_ngcontent-%COMP%]   .admin-navigation__children[_ngcontent-%COMP%]::before {\n    display: none;\n  }\n\n  .admin-sidebar--mobile[_ngcontent-%COMP%]   .admin-navigation__flyout-header[_ngcontent-%COMP%] {\n    display: none;\n  }\n\n  .admin-sidebar--mobile[_ngcontent-%COMP%]   .admin-navigation__module-summary[_ngcontent-%COMP%], \n   .admin-sidebar--mobile[_ngcontent-%COMP%]   .admin-navigation__group-heading[_ngcontent-%COMP%], \n   .admin-sidebar--mobile[_ngcontent-%COMP%]   .admin-navigation__guidance[_ngcontent-%COMP%], \n   .admin-sidebar--mobile[_ngcontent-%COMP%]   .admin-navigation__description[_ngcontent-%COMP%], \n   .admin-sidebar--mobile[_ngcontent-%COMP%]   .admin-navigation__entry-arrow[_ngcontent-%COMP%] {\n    display: none;\n  }\n\n  .admin-sidebar--mobile[_ngcontent-%COMP%]   .admin-navigation__item--section[_ngcontent-%COMP%], \n   .admin-sidebar--mobile[_ngcontent-%COMP%]   .admin-navigation__item--child[_ngcontent-%COMP%], \n   .admin-sidebar--mobile[_ngcontent-%COMP%]   .admin-sidebar__support[_ngcontent-%COMP%] {\n    min-height: var(--erp-control-height-mobile);\n  }\n\n  .admin-sidebar--mobile[_ngcontent-%COMP%]   .admin-navigation__item--leaf[_ngcontent-%COMP%] {\n    min-height: 40px;\n  }\n\n  .admin-sidebar--mobile[_ngcontent-%COMP%]   .admin-user__logout[_ngcontent-%COMP%] {\n    width: var(--erp-control-height-mobile);\n    height: var(--erp-control-height-mobile);\n  }\n}\n\n@media (prefers-reduced-motion: reduce) {\n  .admin-shell[_ngcontent-%COMP%], \n   .admin-navigation__chevron[_ngcontent-%COMP%], \n   .admin-drawer-backdrop[_ngcontent-%COMP%], \n   .admin-module-backdrop[_ngcontent-%COMP%], \n   .admin-sidebar--mobile[_ngcontent-%COMP%], \n   .admin-skip-link[_ngcontent-%COMP%] {\n    animation-duration: 1ms;\n    transition-duration: 1ms;\n  }\n}"], changeDetection: 0 });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AdminShellComponent, [{
        type: Component,
        args: [{ selector: 'erp-admin-shell', standalone: true, imports: [
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
                ], changeDetection: ChangeDetectionStrategy.OnPush, template: "<a class=\"admin-skip-link\" href=\"#admin-main\">Skip to main content</a>\n\n<div class=\"admin-shell\" [class.admin-shell--collapsed]=\"desktopCollapsed()\">\n  <aside class=\"admin-sidebar admin-sidebar--desktop\" aria-label=\"Admin navigation\">\n    <ng-container\n      [ngTemplateOutlet]=\"navigationContent\"\n      [ngTemplateOutletContext]=\"{ mobile: false }\"\n    ></ng-container>\n  </aside>\n\n  <header class=\"admin-header\">\n    <button\n      #mobileMenuButton\n      class=\"admin-icon-button admin-header__menu\"\n      type=\"button\"\n      aria-label=\"Open admin navigation\"\n      aria-controls=\"admin-mobile-navigation\"\n      [attr.aria-expanded]=\"mobileOpen()\"\n      (click)=\"openMobileNavigation()\"\n    >\n      <svg lucideMenu size=\"20\" aria-hidden=\"true\"></svg>\n    </button>\n\n    <div class=\"admin-header__context\">\n      <nav class=\"admin-breadcrumbs\" aria-label=\"Breadcrumb\">\n        <ol>\n          @for (breadcrumb of pageContext().breadcrumbs; track $index; let first = $first) {\n            <li>\n              @if (!first) {\n                <svg lucideChevronRight size=\"12\" aria-hidden=\"true\"></svg>\n              }\n              <span>{{ breadcrumb }}</span>\n            </li>\n          }\n          <li #pageTitle class=\"admin-breadcrumbs__current\" tabindex=\"-1\" aria-current=\"page\">\n            <svg lucideChevronRight size=\"12\" aria-hidden=\"true\"></svg>\n            <span>{{ pageContext().title }}</span>\n          </li>\n        </ol>\n      </nav>\n    </div>\n\n    @if (showWorkspaceHeader()) {\n      <div class=\"admin-header__tools\">\n        <label class=\"admin-header__search\"\n          ><svg lucideSearch size=\"17\" aria-hidden=\"true\"></svg\n          ><input\n            aria-label=\"Search students and programmes\"\n            [placeholder]=\"workspaceSearchPlaceholder()\"\n        /></label>\n        <button\n          class=\"admin-icon-button admin-header__notification\"\n          type=\"button\"\n          aria-label=\"Notifications\"\n        >\n          <svg lucideBell size=\"19\" aria-hidden=\"true\"></svg><small>12</small>\n        </button>\n        <button class=\"admin-icon-button\" type=\"button\" aria-label=\"Help\">\n          <svg lucideCircleHelp size=\"19\" aria-hidden=\"true\"></svg>\n        </button>\n        <span class=\"admin-header__avatar\">{{ adminInitials() }}</span>\n        <strong class=\"admin-header__admin-name\">{{ auth.admin()?.name || 'Super Admin' }}</strong>\n        <button class=\"admin-icon-button\" type=\"button\" aria-label=\"Open profile menu\">\n          <svg lucideChevronDown size=\"17\" aria-hidden=\"true\"></svg>\n        </button>\n      </div>\n    } @else {\n      <div class=\"admin-header__status\" aria-live=\"polite\">\n        <svg lucideCircleCheck size=\"20\" aria-hidden=\"true\"></svg>\n        <span>{{ headerSaveStatus() }}</span>\n        <span class=\"admin-header__status-divider\" aria-hidden=\"true\"></span>\n        <button class=\"admin-icon-button\" type=\"button\" aria-label=\"Open header options\">\n          <svg lucideChevronDown size=\"18\" aria-hidden=\"true\"></svg>\n        </button>\n      </div>\n    }\n  </header>\n\n  <main id=\"admin-main\" class=\"content admin-main\" tabindex=\"-1\">\n    <router-outlet />\n  </main>\n</div>\n\n@if (desktopModuleOpen()) {\n  <button\n    class=\"admin-module-backdrop\"\n    [class.is-closing]=\"flyoutClosing()\"\n    type=\"button\"\n    tabindex=\"-1\"\n    aria-label=\"Close module navigation\"\n    (click)=\"closeDesktopFlyout()\"\n  ></button>\n}\n\n@if (mobileOpen()) {\n  <button\n    class=\"admin-drawer-backdrop\"\n    type=\"button\"\n    tabindex=\"-1\"\n    aria-label=\"Close admin navigation\"\n    (click)=\"closeMobileNavigation()\"\n  ></button>\n  <aside\n    id=\"admin-mobile-navigation\"\n    class=\"admin-sidebar admin-sidebar--mobile\"\n    role=\"dialog\"\n    aria-modal=\"true\"\n    aria-label=\"Admin navigation\"\n    cdkTrapFocus\n    [cdkTrapFocusAutoCapture]=\"true\"\n  >\n    <ng-container\n      [ngTemplateOutlet]=\"navigationContent\"\n      [ngTemplateOutletContext]=\"{ mobile: true }\"\n    ></ng-container>\n  </aside>\n}\n\n<ng-template #navigationContent let-mobile=\"mobile\">\n  <div class=\"admin-brand\">\n    <span class=\"admin-brand__mark\" aria-hidden=\"true\">\n      <img src=\"assets/images/brand/graphic-era-mark.png\" alt=\"\" />\n    </span>\n    <span class=\"admin-brand__copy\">\n      <strong>GEU ERP</strong>\n      <small>Admin console</small>\n    </span>\n\n    @if (mobile) {\n      <button\n        #mobileCloseButton\n        class=\"admin-icon-button admin-brand__control\"\n        type=\"button\"\n        aria-label=\"Close admin navigation\"\n        (click)=\"closeMobileNavigation()\"\n      >\n        <svg lucideX size=\"18\" aria-hidden=\"true\"></svg>\n      </button>\n    } @else {\n      <button\n        class=\"admin-icon-button admin-brand__control\"\n        type=\"button\"\n        [attr.aria-label]=\"\n          desktopCollapsed() ? 'Expand admin navigation' : 'Collapse admin navigation'\n        \"\n        [attr.aria-expanded]=\"!desktopCollapsed()\"\n        (click)=\"toggleDesktopSidebar()\"\n      >\n        @if (desktopCollapsed()) {\n          <svg lucideChevronRight size=\"18\" aria-hidden=\"true\"></svg>\n        } @else {\n          <svg lucideChevronLeft size=\"18\" aria-hidden=\"true\"></svg>\n        }\n      </button>\n    }\n  </div>\n\n  <nav\n    class=\"admin-navigation\"\n    [attr.aria-label]=\"mobile ? 'Mobile admin navigation' : 'Primary admin navigation'\"\n  >\n    <ul class=\"admin-navigation__list\">\n      @for (section of navigation(); track section.id) {\n        <li class=\"admin-navigation__section\">\n          @if (section.children?.length) {\n            <button\n              class=\"admin-navigation__item admin-navigation__item--section\"\n              type=\"button\"\n              [class.is-active]=\"isSectionActive(section)\"\n              [attr.title]=\"desktopCollapsed() && !mobile ? section.label : null\"\n              [attr.aria-controls]=\"(mobile ? 'mobile-' : 'desktop-') + section.id + '-navigation'\"\n              [attr.aria-expanded]=\"isSectionExpanded(section)\"\n              (click)=\"toggleSection(section, $event, mobile)\"\n            >\n              <span class=\"admin-navigation__icon\">\n                <svg [lucideIcon]=\"iconFor(section.icon)\" size=\"18\" aria-hidden=\"true\"></svg>\n              </span>\n              <span class=\"admin-navigation__label\">{{ section.label }}</span>\n              <svg\n                class=\"admin-navigation__chevron\"\n                [class.is-open]=\"isSectionExpanded(section)\"\n                lucideChevronDown\n                size=\"15\"\n                aria-hidden=\"true\"\n              ></svg>\n            </button>\n\n            @if (isSectionVisible(section, mobile)) {\n              <ul\n                class=\"admin-navigation__children admin-navigation__children--module\"\n                [class.is-closing]=\"!mobile && closingSectionId() === section.id\"\n                [id]=\"(mobile ? 'mobile-' : 'desktop-') + section.id + '-navigation'\"\n                [attr.role]=\"!mobile ? 'dialog' : null\"\n                [attr.aria-modal]=\"!mobile ? 'true' : null\"\n                [attr.aria-label]=\"section.label + ' module navigation'\"\n              >\n                <li class=\"admin-navigation__flyout-header\">\n                  <div>\n                    <small>Module navigation</small>\n                    <strong>{{ section.label }}</strong>\n                  </div>\n                  <button\n                    type=\"button\"\n                    aria-label=\"Close navigation popup\"\n                    (click)=\"closeDesktopFlyout()\"\n                  >\n                    <svg lucideX size=\"19\" aria-hidden=\"true\"></svg>\n                    <small>Esc</small>\n                  </button>\n                </li>\n\n                <li class=\"admin-navigation__module-summary\">\n                  <span class=\"admin-navigation__module-icon\" aria-hidden=\"true\">\n                    <svg [lucideIcon]=\"iconFor(section.icon)\" size=\"42\"></svg>\n                    <small>\u2713</small>\n                  </span>\n                  <span class=\"admin-navigation__module-copy\">\n                    <strong>{{ moduleTitle(section) }}</strong>\n                    <span>{{ sectionDescription(section) }}</span>\n                    <small>{{ section.children?.length || 0 }} tools</small>\n                  </span>\n                  <span class=\"admin-navigation__module-spark\" aria-hidden=\"true\">\u2726</span>\n                </li>\n\n                @for (entry of section.children || []; track entry.id; let entryIndex = $index) {\n                  @if (showNavigationGroup(section.children || [], entryIndex)) {\n                    <li class=\"admin-navigation__group-heading\">\n                      <span>{{ navigationGroupLabel(section.children || [], entryIndex) }}</span>\n                      <i aria-hidden=\"true\"></i>\n                    </li>\n                  }\n                  <li>\n                    @if (entry.children?.length) {\n                      <button\n                        class=\"admin-navigation__item admin-navigation__item--child\"\n                        type=\"button\"\n                        [class.is-active]=\"isEntryActive(entry)\"\n                        [attr.aria-controls]=\"\n                          (mobile ? 'mobile-' : 'desktop-') + entry.id + '-navigation'\n                        \"\n                        [attr.aria-expanded]=\"isSubgroupExpanded(entry)\"\n                        (click)=\"toggleSubgroup(entry)\"\n                      >\n                        <span class=\"admin-navigation__icon\">\n                          <svg\n                            [lucideIcon]=\"iconFor(entry.icon)\"\n                            size=\"16\"\n                            aria-hidden=\"true\"\n                          ></svg>\n                        </span>\n                        <span class=\"admin-navigation__label\">{{ entry.label }}</span>\n                        <small class=\"admin-navigation__description\">{{\n                          entryDescription(entry)\n                        }}</small>\n                        <svg\n                          class=\"admin-navigation__chevron\"\n                          [class.is-open]=\"isSubgroupExpanded(entry)\"\n                          lucideChevronDown\n                          size=\"14\"\n                          aria-hidden=\"true\"\n                        ></svg>\n                      </button>\n\n                      @if (isSubgroupExpanded(entry)) {\n                        <ul\n                          class=\"admin-navigation__subgroup\"\n                          [id]=\"(mobile ? 'mobile-' : 'desktop-') + entry.id + '-navigation'\"\n                        >\n                          @for (link of entry.children || []; track link.id) {\n                            <li>\n                              <a\n                                class=\"admin-navigation__item admin-navigation__item--leaf\"\n                                [class.is-active]=\"matchesAdminRoute(link.activeWhen, currentUrl())\"\n                                [attr.aria-current]=\"\n                                  matchesAdminRoute(link.activeWhen, currentUrl()) ? 'page' : null\n                                \"\n                                [routerLink]=\"link.route\"\n                                (click)=\"selectNavigation($event, link.route, mobile)\"\n                              >\n                                <span class=\"admin-navigation__icon\">\n                                  <svg\n                                    [lucideIcon]=\"iconFor(link.icon)\"\n                                    size=\"15\"\n                                    aria-hidden=\"true\"\n                                  ></svg>\n                                </span>\n                                <span class=\"admin-navigation__label\">{{ link.label }}</span>\n                              </a>\n                            </li>\n                          }\n                        </ul>\n                      }\n                    } @else {\n                      <a\n                        class=\"admin-navigation__item admin-navigation__item--child\"\n                        [class.is-active]=\"isEntryActive(entry)\"\n                        [attr.aria-current]=\"isEntryActive(entry) ? 'page' : null\"\n                        [routerLink]=\"entry.route || '/admin/dashboard'\"\n                        (click)=\"\n                          selectNavigation($event, entry.route || '/admin/dashboard', mobile)\n                        \"\n                      >\n                        <span class=\"admin-navigation__icon\">\n                          <svg\n                            [lucideIcon]=\"iconFor(entry.icon)\"\n                            size=\"16\"\n                            aria-hidden=\"true\"\n                          ></svg>\n                        </span>\n                        <span class=\"admin-navigation__label\">{{ entry.label }}</span>\n                        <small class=\"admin-navigation__description\">{{\n                          entryDescription(entry)\n                        }}</small>\n                        <svg\n                          class=\"admin-navigation__entry-arrow\"\n                          lucideChevronRight\n                          size=\"16\"\n                          aria-hidden=\"true\"\n                        ></svg>\n                      </a>\n                    }\n                  </li>\n                }\n\n                <li class=\"admin-navigation__guidance\">\n                  <svg lucideCircleHelp size=\"19\" aria-hidden=\"true\"></svg>\n                  <strong>{{ section.label }} tools</strong>\n                  @if (section.children?.[0]?.route; as firstRoute) {\n                    <a\n                      [routerLink]=\"firstRoute\"\n                      (click)=\"selectNavigation($event, firstRoute, mobile)\"\n                    >\n                      Open first\n                      <svg lucideChevronRight size=\"15\" aria-hidden=\"true\"></svg>\n                    </a>\n                  }\n                </li>\n              </ul>\n            }\n          } @else {\n            <a\n              class=\"admin-navigation__item admin-navigation__item--section\"\n              [class.is-active]=\"isSectionActive(section)\"\n              [attr.title]=\"desktopCollapsed() && !mobile ? section.label : null\"\n              [attr.aria-current]=\"isSectionActive(section) ? 'page' : null\"\n              [routerLink]=\"section.route || '/admin/dashboard'\"\n              (click)=\"mobile ? closeMobileNavigation(false) : null\"\n            >\n              <span class=\"admin-navigation__icon\">\n                <svg [lucideIcon]=\"iconFor(section.icon)\" size=\"18\" aria-hidden=\"true\"></svg>\n              </span>\n              <span class=\"admin-navigation__label\">{{ section.label }}</span>\n            </a>\n          }\n        </li>\n      }\n    </ul>\n  </nav>\n\n  <footer class=\"admin-sidebar__footer\">\n    <a class=\"admin-sidebar__support\" href=\"mailto:support@geu.ac.in\">\n      <svg lucideLifeBuoy size=\"17\" aria-hidden=\"true\"></svg>\n      <span>Support</span>\n    </a>\n    <div class=\"admin-user\">\n      <span class=\"admin-user__avatar\" aria-hidden=\"true\">{{ adminInitials() }}</span>\n      <span class=\"admin-user__copy\">\n        <strong>{{ auth.admin()?.name || 'Administrator' }}</strong>\n        <small>{{ auth.admin()?.email || 'Admin account' }}</small>\n      </span>\n      <button\n        class=\"admin-icon-button admin-user__logout\"\n        type=\"button\"\n        aria-label=\"Sign out\"\n        (click)=\"logout()\"\n      >\n        <svg lucideLogOut size=\"17\" aria-hidden=\"true\"></svg>\n      </button>\n    </div>\n  </footer>\n</ng-template>\n", styles: ["/* ERP-LOCAL-STYLE: Admin shell geometry, responsive composition, and navigation states are owned by this component. */\n:host {\n  display: block;\n  height: 100dvh;\n  min-height: 0;\n  overflow: hidden;\n  min-width: 0;\n}\n\n*,\n*::before,\n*::after {\n  box-sizing: border-box;\n}\n\nbutton,\na {\n  font: inherit;\n}\n\n.admin-shell {\n  display: grid;\n  grid-template-columns: var(--erp-sidebar-width) minmax(0, 1fr);\n  grid-template-rows: var(--erp-header-height) minmax(0, 1fr);\n  height: 100dvh;\n  min-height: 0;\n  overflow: hidden;\n  background: var(--erp-canvas);\n  transition: grid-template-columns var(--erp-sidebar-expand-transition);\n}\n\n.admin-shell--collapsed {\n  grid-template-columns: var(--erp-sidebar-collapsed-width) minmax(0, 1fr);\n}\n\n.admin-sidebar {\n  display: flex;\n  min-width: 0;\n  flex-direction: column;\n  background:\n    linear-gradient(var(--erp-sidebar-pattern) 1px, transparent 1px),\n    linear-gradient(90deg, var(--erp-sidebar-pattern) 1px, transparent 1px),\n    radial-gradient(circle at top left, var(--erp-sidebar-glow), transparent 42%),\n    var(--erp-sidebar-surface);\n  background-size:\n    24px 24px,\n    24px 24px,\n    auto,\n    auto;\n  color: var(--erp-sidebar-text);\n}\n\n.admin-sidebar--desktop {\n  position: fixed;\n  z-index: var(--erp-z-sidebar);\n  inset: 0 auto 0 0;\n  width: var(--erp-sidebar-width);\n  height: 100dvh;\n  overflow: visible;\n  border-right: 1px solid var(--erp-sidebar-divider);\n  transition:\n    width var(--erp-sidebar-expand-duration) var(--erp-sidebar-expand-easing),\n    box-shadow var(--erp-sidebar-expand-duration) var(--erp-sidebar-expand-easing);\n}\n\n.admin-sidebar--mobile {\n  position: fixed;\n  z-index: var(--erp-z-drawer);\n  inset: 0 auto 0 0;\n  width: min(var(--erp-sidebar-mobile-width), calc(100vw - var(--erp-space-8)));\n  box-shadow: var(--erp-shadow-overlay);\n  animation: admin-drawer-enter var(--erp-drawer-enter-duration) var(--erp-ease-enter);\n}\n\n.admin-brand {\n  display: flex;\n  min-height: var(--erp-header-height);\n  align-items: center;\n  gap: var(--erp-space-2);\n  padding: 0 var(--erp-space-3);\n  border-bottom: 1px solid var(--erp-sidebar-divider);\n  background: var(--erp-sidebar-panel-surface);\n  backdrop-filter: blur(12px);\n}\n\n.admin-brand__mark {\n  display: grid;\n  width: 28px;\n  height: 28px;\n  flex: 0 0 28px;\n  place-items: center;\n  padding: 2px;\n  border: 1px solid var(--erp-sidebar-divider);\n  border-radius: var(--erp-radius-compact);\n  background: var(--erp-surface-raised);\n  box-shadow: var(--erp-shadow-card);\n}\n\n.admin-brand__mark img {\n  display: block;\n  width: 100%;\n  height: 100%;\n  object-fit: contain;\n}\n\n.admin-brand__copy,\n.admin-user__copy {\n  min-width: 0;\n}\n\n.admin-brand__copy {\n  display: flex;\n  flex: 1;\n  flex-direction: column;\n  line-height: var(--erp-line-caption);\n}\n\n.admin-brand__copy strong {\n  overflow: hidden;\n  color: var(--erp-text-heading);\n  font-size: var(--erp-font-size-sm);\n  font-weight: var(--erp-weight-semibold);\n  letter-spacing: var(--erp-letter-tight);\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n\n.admin-brand__copy small {\n  overflow: hidden;\n  color: var(--erp-text-muted);\n  font-size: var(--erp-font-size-2xs);\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n\n.admin-icon-button {\n  display: inline-grid;\n  width: 32px;\n  height: 32px;\n  flex: 0 0 auto;\n  place-items: center;\n  padding: 0;\n  border: 1px solid transparent;\n  border-radius: var(--erp-radius-control);\n  background: transparent;\n  color: var(--erp-text-muted);\n  cursor: pointer;\n  transition:\n    background var(--erp-control-transition),\n    border-color var(--erp-control-transition),\n    color var(--erp-control-transition);\n}\n\n.admin-icon-button:hover {\n  border-color: var(--erp-border-subtle);\n  background: var(--erp-surface-hover);\n  color: var(--erp-text-heading);\n}\n\n.admin-brand__control {\n  margin-left: auto;\n}\n\n.admin-navigation {\n  position: relative;\n  min-height: 0;\n  flex: 1;\n  overflow-x: hidden;\n  overflow-y: auto;\n  overscroll-behavior: contain;\n  padding: var(--erp-space-2);\n  scrollbar-width: thin;\n}\n\n.admin-navigation__list,\n.admin-navigation__children,\n.admin-navigation__subgroup {\n  margin: 0;\n  padding: 0;\n  list-style: none;\n}\n\n.admin-navigation__section + .admin-navigation__section {\n  margin-top: 4px;\n}\n\n.admin-navigation__section,\n.admin-navigation__section > li {\n  position: relative;\n}\n\n.admin-navigation__item {\n  position: relative;\n  display: flex;\n  width: 100%;\n  min-width: 0;\n  align-items: center;\n  gap: var(--erp-space-2);\n  border: 0;\n  outline: 1px solid transparent;\n  border-radius: var(--erp-sidebar-item-radius);\n  background: transparent;\n  color: var(--erp-sidebar-text);\n  text-align: left;\n  text-decoration: none;\n  cursor: pointer;\n  transition:\n    background var(--erp-nav-active-transition),\n    color var(--erp-nav-active-transition),\n    outline-color var(--erp-nav-active-transition),\n    box-shadow var(--erp-nav-active-transition),\n    transform var(--erp-nav-active-transition);\n}\n\n.admin-navigation__item--section {\n  min-height: var(--erp-sidebar-item-height);\n  padding: 0 var(--erp-space-2);\n  font-size: var(--erp-font-size-xs);\n  font-weight: var(--erp-weight-medium);\n}\n\n.admin-navigation__item--child {\n  min-height: 36px;\n  padding: 0 var(--erp-space-2);\n  font-size: var(--erp-font-size-xs);\n}\n\n.admin-navigation__item--leaf {\n  min-height: 34px;\n  padding: 0 var(--erp-space-2) 0 var(--erp-space-5);\n  color: var(--erp-text-muted);\n  font-size: var(--erp-font-size-xs);\n}\n\n.admin-navigation__item:hover {\n  background: var(--erp-sidebar-hover-bg);\n  color: var(--erp-text-heading);\n  outline-color: var(--erp-sidebar-divider);\n  /* Keep the icon column anchored while the rail expands and on item hover. */\n  transform: none;\n}\n\n.admin-navigation__item.is-active {\n  background: var(--erp-sidebar-active-bg);\n  outline-color: var(--erp-sidebar-divider);\n  box-shadow:\n    inset 3px 0 0 var(--erp-sidebar-active-edge),\n    var(--erp-shadow-card);\n  color: var(--erp-blue-700);\n  font-weight: var(--erp-weight-medium);\n}\n\n.admin-navigation__icon {\n  display: inline-grid;\n  width: 24px;\n  height: 22px;\n  flex: 0 0 24px;\n  place-items: center;\n  border-radius: var(--erp-radius-control);\n  background: transparent;\n  color: var(--erp-text-muted);\n  transition:\n    color var(--erp-nav-active-transition),\n    background var(--erp-nav-active-transition);\n}\n\n.admin-navigation__item.is-active .admin-navigation__icon {\n  background: var(--erp-blue-50);\n  color: var(--erp-icon-active-colour);\n}\n\n.admin-navigation__label {\n  min-width: 0;\n  flex: 1;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n\n.admin-navigation__chevron {\n  flex: 0 0 auto;\n  color: var(--erp-text-light);\n  transition: transform var(--erp-standard-transition);\n}\n\n.admin-navigation__chevron.is-open {\n  transform: rotate(180deg);\n}\n\n.admin-navigation__children {\n  margin: var(--erp-space-1) 0 var(--erp-space-2) 20px;\n  padding: var(--erp-space-1) var(--erp-space-1) var(--erp-space-1) var(--erp-space-2);\n  border-left: 1px solid var(--erp-blue-200);\n  border-radius: 0 var(--erp-radius-compact) var(--erp-radius-compact) 0;\n  background: var(--erp-sidebar-panel-surface);\n}\n\n.admin-sidebar--desktop .admin-navigation {\n  overflow-x: hidden;\n  overflow-y: auto;\n}\n\n.admin-sidebar--desktop .admin-navigation__children {\n  position: fixed;\n  z-index: var(--erp-z-dropdown);\n  left: calc(var(--erp-sidebar-width) + var(--erp-space-2));\n  width: min(\n    var(--erp-sidebar-panel-width),\n    calc(100vw - var(--erp-sidebar-width) - var(--erp-space-8))\n  );\n  margin: 0;\n  padding: var(--erp-space-1);\n  overflow-y: auto;\n  overscroll-behavior: contain;\n  border: 1px solid var(--erp-border-default);\n  border-radius: var(--erp-radius-compact);\n  background:\n    linear-gradient(var(--erp-sidebar-pattern) 1px, transparent 1px),\n    linear-gradient(90deg, var(--erp-sidebar-pattern) 1px, transparent 1px),\n    var(--erp-surface-overlay);\n  background-size:\n    24px 24px,\n    24px 24px,\n    auto;\n  box-shadow: var(--erp-shadow-sidebar-flyout);\n  animation: admin-flyout-enter 150ms var(--erp-ease-enter);\n  scrollbar-width: thin;\n}\n\n.admin-sidebar--desktop .admin-navigation__children::before {\n  display: none;\n}\n\n.admin-sidebar--desktop .admin-navigation__children > li {\n  position: relative;\n  z-index: 1;\n}\n\n.admin-sidebar--desktop .admin-navigation__item--child {\n  min-height: 36px;\n  padding: 0 var(--erp-space-2);\n}\n\n.admin-navigation__flyout-header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: var(--erp-space-3);\n  margin: calc(-1 * var(--erp-space-1)) calc(-1 * var(--erp-space-1)) var(--erp-space-1);\n  padding: var(--erp-space-2) var(--erp-space-3);\n  border-bottom: 1px solid var(--erp-border-subtle);\n  background: var(--erp-surface-detail-soft);\n}\n\n.admin-navigation__flyout-header div {\n  display: grid;\n  gap: 2px;\n}\n\n.admin-navigation__flyout-header small {\n  color: var(--erp-text-muted);\n  font-size: var(--erp-font-size-2xs);\n  font-weight: var(--erp-weight-medium);\n  text-transform: uppercase;\n  letter-spacing: var(--erp-letter-wide);\n}\n\n.admin-navigation__flyout-header strong {\n  color: var(--erp-text-heading);\n  font-size: var(--erp-font-size-sm);\n  font-weight: var(--erp-weight-semibold);\n}\n\n.admin-navigation__flyout-header button {\n  display: inline-grid;\n  width: 30px;\n  height: 30px;\n  flex: 0 0 auto;\n  place-items: center;\n  padding: 0;\n  color: var(--erp-text-muted);\n  background: transparent;\n  border: 1px solid transparent;\n  border-radius: var(--erp-radius-control);\n  cursor: pointer;\n}\n\n.admin-navigation__flyout-header button:hover {\n  color: var(--erp-text-heading);\n  background: var(--erp-surface-hover);\n  border-color: var(--erp-border-subtle);\n}\n\n.admin-navigation__subgroup {\n  margin: var(--erp-space-1) 0 var(--erp-space-2) 12px;\n  padding: var(--erp-space-1) 0 var(--erp-space-1) var(--erp-space-2);\n  border-left: 1px solid var(--erp-blue-200);\n}\n\n.admin-sidebar--desktop .admin-navigation__subgroup {\n  margin: 2px 0 var(--erp-space-1) var(--erp-space-4);\n  padding: 2px 0 2px var(--erp-space-2);\n}\n\n.admin-sidebar__footer {\n  flex: 0 0 auto;\n  padding: var(--erp-space-1) var(--erp-space-2);\n  border-top: 1px solid var(--erp-sidebar-divider);\n  background: var(--erp-sidebar-panel-surface);\n  backdrop-filter: blur(12px);\n}\n\n.admin-sidebar__support {\n  display: flex;\n  min-height: 36px;\n  align-items: center;\n  gap: var(--erp-space-2);\n  padding: 0 var(--erp-space-2);\n  border-radius: var(--erp-radius-control);\n  color: var(--erp-text-muted);\n  font-size: var(--erp-font-size-xs);\n  text-decoration: none;\n}\n\n.admin-sidebar__support:hover {\n  background: var(--erp-surface-hover);\n  color: var(--erp-text-heading);\n}\n\n.admin-user {\n  display: grid;\n  grid-template-columns: 32px minmax(0, 1fr) 32px;\n  align-items: center;\n  gap: var(--erp-space-2);\n  margin-top: var(--erp-space-1);\n  padding-top: var(--erp-space-2);\n  border-top: 1px solid var(--erp-border-subtle);\n}\n\n.admin-user__avatar {\n  display: grid;\n  width: 32px;\n  height: 32px;\n  place-items: center;\n  border: 1px solid var(--erp-blue-200);\n  border-radius: var(--erp-radius-avatar);\n  background: var(--erp-blue-50);\n  color: var(--erp-blue-700);\n  font-size: var(--erp-font-size-2xs);\n  font-weight: var(--erp-weight-semibold);\n}\n\n.admin-user__copy {\n  display: flex;\n  flex-direction: column;\n  line-height: var(--erp-line-caption);\n}\n\n.admin-user__copy strong,\n.admin-user__copy small {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n\n.admin-user__copy strong {\n  color: var(--erp-text-strong);\n  font-size: var(--erp-font-size-xs);\n  font-weight: var(--erp-weight-medium);\n}\n\n.admin-user__copy small {\n  color: var(--erp-text-light);\n  font-size: var(--erp-font-size-2xs);\n}\n\n.admin-user__logout {\n  width: 32px;\n  height: 32px;\n}\n\n.admin-header {\n  position: sticky;\n  z-index: var(--erp-z-header);\n  top: 0;\n  grid-column: 2;\n  grid-row: 1;\n  display: flex;\n  min-width: 0;\n  height: var(--erp-header-height);\n  align-items: center;\n  gap: var(--erp-space-2);\n  padding: 0 var(--erp-header-padding-inline);\n  border-bottom: 1px solid var(--erp-header-border);\n  background: var(--erp-header-bg);\n  box-shadow: var(--erp-shadow-header);\n  backdrop-filter: blur(12px);\n}\n\n.admin-header__menu {\n  display: none;\n}\n\n.admin-header__context {\n  min-width: 0;\n  flex: 1;\n}\n\n.admin-header__status {\n  display: flex;\n  min-width: max-content;\n  align-items: center;\n  gap: var(--erp-space-2);\n  color: var(--erp-text-muted);\n  font-size: var(--erp-font-size-xs);\n  white-space: nowrap;\n}\n\n.admin-header__status > svg {\n  flex: 0 0 auto;\n  color: var(--erp-blue-700);\n}\n\n.admin-header__status-divider {\n  width: 1px;\n  height: 24px;\n  margin-inline: var(--erp-space-3);\n  background: var(--erp-border-subtle);\n}\n\n.admin-header__status .admin-icon-button {\n  flex: 0 0 32px;\n  color: var(--erp-blue-700);\n}\n\n.admin-header__tools {\n  display: flex;\n  min-width: 0;\n  align-items: center;\n  gap: var(--erp-space-2);\n  color: var(--erp-text-heading);\n}\n\n.admin-header__search {\n  display: flex;\n  width: min(320px, 25vw);\n  min-height: 36px;\n  align-items: center;\n  gap: var(--erp-space-2);\n  padding-inline: var(--erp-space-3);\n  color: var(--erp-text-muted);\n  background: var(--erp-surface);\n  border: 1px solid var(--erp-border-default);\n  border-radius: var(--erp-radius-control);\n}\n\n.admin-header__search input {\n  width: 100%;\n  min-width: 0;\n  color: var(--erp-text-body);\n  background: transparent;\n  border: 0;\n  outline: 0;\n}\n\n.admin-header__notification {\n  position: relative;\n}\n\n.admin-header__notification small {\n  position: absolute;\n  top: -3px;\n  right: -3px;\n  display: grid;\n  min-width: 16px;\n  height: 16px;\n  place-items: center;\n  padding-inline: 3px;\n  color: var(--erp-text-on-primary);\n  font-size: 9px;\n  line-height: 1;\n  background: var(--erp-danger-600, var(--erp-danger-text));\n  border: 2px solid var(--erp-surface);\n  border-radius: var(--erp-radius-pill);\n}\n\n.admin-header__avatar {\n  display: inline-grid;\n  width: 34px;\n  height: 34px;\n  flex: 0 0 auto;\n  place-items: center;\n  color: var(--erp-blue-700);\n  font-size: var(--erp-font-size-xs);\n  font-weight: var(--erp-weight-bold);\n  background: var(--erp-blue-50);\n  border-radius: var(--erp-radius-avatar);\n}\n\n.admin-header__admin-name {\n  max-width: 9rem;\n  overflow: hidden;\n  font-size: var(--erp-font-size-xs);\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n\n.admin-breadcrumbs {\n  min-width: 0;\n}\n\n.admin-breadcrumbs ol {\n  display: flex;\n  min-width: 0;\n  align-items: center;\n  gap: var(--erp-space-1);\n  margin: 0;\n  padding: 0;\n  color: var(--erp-text-muted);\n  font-size: var(--erp-font-size-xs);\n  list-style: none;\n  white-space: nowrap;\n}\n\n.admin-breadcrumbs li {\n  display: flex;\n  min-width: 0;\n  align-items: center;\n  gap: var(--erp-space-1);\n}\n\n.admin-breadcrumbs span {\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\n.admin-breadcrumbs__current {\n  overflow: hidden;\n  color: var(--erp-text-heading);\n  font-weight: var(--erp-weight-semibold);\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n\n.admin-breadcrumbs__current:focus {\n  outline: none;\n}\n\n.admin-main {\n  grid-column: 2;\n  grid-row: 2;\n  align-self: stretch;\n  height: 100%;\n  min-height: 0;\n  margin: 0;\n  overflow-x: hidden;\n  overflow-y: auto;\n  overscroll-behavior: contain;\n  scrollbar-gutter: stable;\n}\n\n.admin-main:has(erp-dynamic-admission.embedded) {\n  overflow: hidden;\n}\n\n.admin-drawer-backdrop {\n  position: fixed;\n  z-index: calc(var(--erp-z-drawer) - 1);\n  inset: 0;\n  width: 100%;\n  height: 100%;\n  padding: 0;\n  border: 0;\n  background: var(--erp-backdrop);\n  cursor: default;\n  animation: admin-backdrop-enter var(--erp-drawer-enter-duration) var(--erp-ease-standard);\n}\n\n.admin-module-backdrop {\n  position: fixed;\n  z-index: calc(var(--erp-z-sidebar) - 1);\n  inset: 0;\n  width: 100%;\n  height: 100%;\n  padding: 0;\n  border: 0;\n  background: var(--erp-backdrop);\n  cursor: default;\n  animation: admin-backdrop-enter 240ms cubic-bezier(0.22, 1, 0.36, 1);\n}\n\n.admin-module-backdrop.is-closing {\n  pointer-events: none;\n  animation: admin-backdrop-exit 220ms cubic-bezier(0.4, 0, 1, 1) forwards;\n}\n\n.admin-sidebar--desktop .admin-navigation__children--module {\n  top: 0;\n  bottom: 0;\n  left: var(--erp-sidebar-width);\n  display: flex;\n  width: min(var(--erp-sidebar-module-panel-width), calc(100vw - var(--erp-sidebar-width)));\n  height: 100dvh;\n  max-height: none;\n  flex-direction: column;\n  gap: 0;\n  padding: 0 var(--erp-space-3) var(--erp-space-2);\n  border-block: 0;\n  border-left: 2px solid var(--erp-blue-500);\n  border-radius: 0;\n  background: var(--erp-surface-overlay);\n  background-image: none;\n  box-shadow: var(--erp-shadow-sidebar-flyout);\n  animation: admin-module-enter 240ms cubic-bezier(0.22, 1, 0.36, 1);\n  will-change: transform, opacity;\n}\n\n.admin-sidebar--desktop .admin-navigation__children--module.is-closing {\n  pointer-events: none;\n  animation: admin-module-exit 220ms cubic-bezier(0.4, 0, 1, 1) forwards;\n}\n\n.admin-sidebar--desktop .admin-navigation__children--module .admin-navigation__flyout-header {\n  min-height: 58px;\n  margin: 0 calc(-1 * var(--erp-space-3)) var(--erp-space-2);\n  padding: var(--erp-space-1) var(--erp-space-3);\n  background: var(--erp-surface);\n}\n\n.admin-sidebar--desktop .admin-navigation__children--module .admin-navigation__flyout-header small {\n  color: var(--erp-blue-600);\n}\n\n.admin-sidebar--desktop\n  .admin-navigation__children--module\n  .admin-navigation__flyout-header\n  strong {\n  font-size: var(--erp-font-size-lg);\n  line-height: var(--erp-line-section-title);\n}\n\n.admin-navigation__children--module .admin-navigation__flyout-header button {\n  width: 32px;\n  height: 42px;\n  grid-template-rows: 20px 12px;\n  color: var(--erp-text-heading);\n}\n\n.admin-navigation__children--module .admin-navigation__flyout-header button small {\n  color: var(--erp-text-muted);\n  font-size: var(--erp-font-size-2xs);\n  font-weight: var(--erp-weight-regular);\n  letter-spacing: var(--erp-letter-normal);\n  text-transform: none;\n}\n\n.admin-navigation__module-summary {\n  position: relative;\n  display: grid;\n  grid-template-columns: 56px minmax(0, 1fr);\n  min-height: 88px;\n  align-items: center;\n  gap: var(--erp-space-2);\n  padding: var(--erp-space-2);\n  border: 1px solid var(--erp-blue-200);\n  border-radius: var(--erp-radius-card);\n  background: var(--erp-blue-50);\n}\n\n.admin-navigation__module-icon {\n  position: relative;\n  display: grid;\n  width: 52px;\n  height: 52px;\n  place-items: center;\n  border-radius: var(--erp-radius-avatar);\n  background: var(--erp-blue-100);\n  color: var(--erp-blue-600);\n}\n\n.admin-navigation__module-icon > svg {\n  width: 30px;\n  height: 30px;\n}\n\n.admin-navigation__module-icon small {\n  position: absolute;\n  top: 2px;\n  right: 0;\n  display: grid;\n  width: 19px;\n  height: 19px;\n  place-items: center;\n  border: 2px solid var(--erp-surface);\n  border-radius: var(--erp-radius-avatar);\n  background: var(--erp-blue-500);\n  color: var(--erp-text-on-primary);\n  font-size: var(--erp-font-size-2xs);\n  font-weight: var(--erp-weight-bold);\n}\n\n.admin-navigation__module-copy {\n  display: grid;\n  min-width: 0;\n  gap: 2px;\n}\n\n.admin-navigation__module-copy strong {\n  color: var(--erp-text-heading);\n  font-size: var(--erp-font-size-sm);\n  font-weight: var(--erp-weight-semibold);\n}\n\n.admin-navigation__module-copy > span {\n  color: var(--erp-text-body);\n  font-size: var(--erp-font-size-2xs);\n  line-height: var(--erp-line-caption);\n}\n\n.admin-navigation__module-copy small {\n  justify-self: start;\n  margin-top: 2px;\n  padding: 1px var(--erp-space-2);\n  border-radius: var(--erp-radius-pill);\n  background: var(--erp-blue-100);\n  color: var(--erp-blue-700);\n  font-size: var(--erp-font-size-2xs);\n  font-weight: var(--erp-weight-semibold);\n}\n\n.admin-navigation__module-spark {\n  position: absolute;\n  top: var(--erp-space-2);\n  right: var(--erp-space-2);\n  color: var(--erp-kpi-orange-text);\n  font-size: var(--erp-font-size-sm);\n}\n\n.admin-navigation__group-heading {\n  display: flex;\n  min-height: 28px;\n  align-items: center;\n  gap: var(--erp-space-2);\n  padding: var(--erp-space-1) var(--erp-space-1) 2px;\n  color: var(--erp-text-muted);\n  font-size: var(--erp-font-size-2xs);\n  font-weight: var(--erp-weight-medium);\n  letter-spacing: var(--erp-letter-wide);\n  text-transform: uppercase;\n}\n\n.admin-navigation__group-heading i {\n  height: 1px;\n  flex: 1;\n  background: var(--erp-border-subtle);\n}\n\n.admin-sidebar--desktop .admin-navigation__children--module .admin-navigation__item--child {\n  display: grid;\n  grid-template-columns: 32px minmax(0, 1fr) 16px;\n  grid-template-rows: auto auto;\n  min-height: 42px;\n  column-gap: var(--erp-space-1);\n  padding: 3px var(--erp-space-1);\n}\n\n.admin-navigation__children--module .admin-navigation__item--child::before {\n  position: absolute;\n  inset: 0 auto 0 0;\n  width: 3px;\n  border-radius: 0 var(--erp-radius-xs) var(--erp-radius-xs) 0;\n  background: transparent;\n  content: '';\n}\n\n.admin-navigation__children--module .admin-navigation__item--child.is-active::before {\n  background: var(--erp-blue-500);\n}\n\n.admin-navigation__children--module .admin-navigation__item--child .admin-navigation__icon {\n  grid-row: 1 / 3;\n  width: 32px;\n  height: 32px;\n  align-self: center;\n  color: var(--erp-text-muted);\n}\n\n.admin-navigation__children--module\n  .admin-navigation__item--child.is-active\n  .admin-navigation__icon {\n  background: transparent;\n  color: var(--erp-blue-600);\n}\n\n.admin-navigation__children--module .admin-navigation__item--child .admin-navigation__label {\n  grid-column: 2;\n  align-self: end;\n  color: var(--erp-text-strong);\n  font-size: var(--erp-font-size-xs);\n  font-weight: var(--erp-weight-semibold);\n}\n\n.admin-navigation__description {\n  grid-column: 2;\n  align-self: start;\n  overflow: hidden;\n  color: var(--erp-text-muted);\n  font-size: var(--erp-font-size-2xs);\n  line-height: var(--erp-line-caption);\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n\n.admin-navigation__entry-arrow {\n  grid-column: 3;\n  grid-row: 1 / 3;\n  align-self: center;\n  color: var(--erp-text-muted);\n}\n\n.admin-navigation__guidance {\n  display: grid;\n  grid-template-columns: 20px minmax(0, 1fr) auto;\n  min-height: 42px;\n  align-items: center;\n  gap: var(--erp-space-2);\n  margin-top: auto;\n  padding: var(--erp-space-1) var(--erp-space-2);\n  border: 1px solid var(--erp-blue-200);\n  border-radius: var(--erp-radius-compact);\n  background: var(--erp-blue-50);\n  color: var(--erp-blue-600);\n}\n\n.admin-navigation__guidance strong,\n.admin-navigation__guidance a {\n  font-size: var(--erp-font-size-2xs);\n}\n\n.admin-navigation__guidance strong {\n  color: var(--erp-text-strong);\n  font-weight: var(--erp-weight-semibold);\n}\n\n.admin-navigation__guidance a {\n  display: inline-flex;\n  align-items: center;\n  gap: var(--erp-space-1);\n  color: var(--erp-text-link);\n  text-decoration: none;\n}\n\n.admin-skip-link {\n  position: fixed;\n  z-index: var(--erp-z-toast);\n  top: var(--erp-space-2);\n  left: var(--erp-space-2);\n  padding: var(--erp-space-2) var(--erp-space-3);\n  border-radius: var(--erp-radius-control);\n  background: var(--erp-text-heading);\n  color: var(--erp-text-on-primary);\n  font-size: var(--erp-font-size-xs);\n  font-weight: var(--erp-weight-semibold);\n  text-decoration: none;\n  transform: translateY(calc(-100% - var(--erp-space-3)));\n  transition: transform var(--erp-standard-transition);\n}\n\n.admin-skip-link:focus {\n  transform: translateY(0);\n}\n\n.admin-icon-button:focus-visible,\n.admin-navigation__item:focus-visible,\n.admin-sidebar__support:focus-visible,\n.admin-skip-link:focus-visible {\n  outline: var(--erp-focus-ring-width) solid var(--erp-focus-outline);\n  outline-offset: var(--erp-focus-ring-offset);\n}\n\n.admin-shell--collapsed .admin-sidebar--desktop .admin-brand {\n  gap: var(--erp-space-1);\n  justify-content: center;\n  padding: 0 var(--erp-space-1);\n}\n\n.admin-shell--collapsed .admin-sidebar--desktop .admin-brand__mark {\n  width: 24px;\n  height: 24px;\n  flex-basis: 24px;\n}\n\n.admin-shell--collapsed .admin-sidebar--desktop {\n  width: var(--erp-sidebar-collapsed-width);\n  overflow: visible;\n}\n\n.admin-shell--collapsed .admin-sidebar--desktop:hover,\n.admin-shell--collapsed .admin-sidebar--desktop:focus-within {\n  width: var(--erp-sidebar-width);\n  box-shadow: var(--erp-shadow-sidebar);\n}\n\n.admin-shell--collapsed .admin-sidebar--desktop .admin-brand__copy,\n.admin-shell--collapsed .admin-sidebar--desktop .admin-navigation__label,\n.admin-shell--collapsed .admin-sidebar--desktop .admin-navigation__chevron,\n.admin-shell--collapsed .admin-sidebar--desktop .admin-sidebar__support span,\n.admin-shell--collapsed .admin-sidebar--desktop .admin-user__copy {\n  max-width: 0;\n  overflow: hidden;\n  visibility: hidden;\n  opacity: 0;\n  pointer-events: none;\n  transform: translateX(-6px);\n  transition:\n    max-width var(--erp-sidebar-expand-duration) var(--erp-sidebar-expand-easing),\n    opacity var(--erp-sidebar-expand-duration) var(--erp-sidebar-expand-easing),\n    transform var(--erp-sidebar-expand-duration) var(--erp-sidebar-expand-easing),\n    visibility 0s linear var(--erp-sidebar-collapse-duration);\n}\n\n.admin-shell--collapsed .admin-sidebar--desktop .admin-navigation__children,\n.admin-shell--collapsed .admin-sidebar--desktop .admin-user__avatar {\n  display: none;\n}\n\n.admin-shell--collapsed .admin-sidebar--desktop .admin-brand__control {\n  width: 24px;\n  height: 24px;\n  margin-left: 0;\n}\n\n.admin-shell--collapsed .admin-sidebar--desktop .admin-navigation__item--section {\n  width: 100%;\n  min-height: var(--erp-sidebar-item-height);\n  justify-content: flex-start;\n  margin-inline: 0;\n  padding: 0 12px;\n}\n\n.admin-shell--collapsed .admin-sidebar--desktop .admin-navigation__icon {\n  width: 24px;\n  flex-basis: 24px;\n}\n\n.admin-shell--collapsed .admin-sidebar--desktop .admin-sidebar__support {\n  justify-content: flex-start;\n  padding-inline: 12px;\n}\n\n.admin-shell--collapsed .admin-sidebar--desktop .admin-user {\n  display: flex;\n  justify-content: center;\n}\n\n.admin-shell--collapsed .admin-sidebar--desktop:hover .admin-brand,\n.admin-shell--collapsed .admin-sidebar--desktop:focus-within .admin-brand {\n  justify-content: flex-start;\n  gap: var(--erp-space-2);\n  padding: 0 var(--erp-space-3);\n}\n\n.admin-shell--collapsed .admin-sidebar--desktop:hover .admin-brand__mark,\n.admin-shell--collapsed .admin-sidebar--desktop:focus-within .admin-brand__mark {\n  width: 24px;\n  height: 24px;\n  flex-basis: 24px;\n}\n\n.admin-shell--collapsed .admin-sidebar--desktop:hover .admin-brand__copy,\n.admin-shell--collapsed .admin-sidebar--desktop:focus-within .admin-brand__copy {\n  display: flex;\n  max-width: 10rem;\n  visibility: visible;\n  opacity: 1;\n  pointer-events: auto;\n  transform: translateX(0);\n  transition-delay: var(--erp-sidebar-expand-delay);\n}\n\n.admin-shell--collapsed .admin-sidebar--desktop:hover .admin-brand__control,\n.admin-shell--collapsed .admin-sidebar--desktop:focus-within .admin-brand__control {\n  width: 32px;\n  height: 32px;\n  margin-left: auto;\n}\n\n.admin-shell--collapsed .admin-sidebar--desktop:hover .admin-navigation__item--section,\n.admin-shell--collapsed .admin-sidebar--desktop:focus-within .admin-navigation__item--section {\n  width: 100%;\n  justify-content: flex-start;\n  margin-inline: 0;\n  /* The same 12px inset keeps the 24px icon slot fixed as the rail widens. */\n  padding: 0 12px;\n}\n\n.admin-shell--collapsed .admin-sidebar--desktop:hover .admin-navigation__label,\n.admin-shell--collapsed .admin-sidebar--desktop:focus-within .admin-navigation__label {\n  max-width: 7.5rem;\n  flex: 1;\n  visibility: visible;\n  opacity: 1;\n  pointer-events: auto;\n  transform: translateX(0);\n  transition-delay: var(--erp-sidebar-expand-delay);\n}\n\n.admin-shell--collapsed .admin-sidebar--desktop:hover .admin-navigation__chevron,\n.admin-shell--collapsed .admin-sidebar--desktop:focus-within .admin-navigation__chevron {\n  max-width: 1.25rem;\n  visibility: visible;\n  opacity: 1;\n  pointer-events: auto;\n  transform: translateX(0);\n  transition-delay: var(--erp-sidebar-expand-delay);\n}\n\n.admin-shell--collapsed .admin-sidebar--desktop:hover .admin-navigation__chevron.is-open,\n.admin-shell--collapsed .admin-sidebar--desktop:focus-within .admin-navigation__chevron.is-open {\n  transform: rotate(180deg);\n}\n\n.admin-shell--collapsed .admin-sidebar--desktop:hover .admin-navigation__children,\n.admin-shell--collapsed .admin-sidebar--desktop:focus-within .admin-navigation__children {\n  display: block;\n}\n\n.admin-shell--collapsed .admin-sidebar--desktop:hover .admin-sidebar__support,\n.admin-shell--collapsed .admin-sidebar--desktop:focus-within .admin-sidebar__support {\n  justify-content: flex-start;\n  /* Keep the support icon in the same column as the collapsed rail. */\n  padding-inline: 12px;\n}\n\n.admin-shell--collapsed .admin-sidebar--desktop:hover .admin-sidebar__support span,\n.admin-shell--collapsed .admin-sidebar--desktop:focus-within .admin-sidebar__support span {\n  max-width: 8rem;\n  visibility: visible;\n  opacity: 1;\n  pointer-events: auto;\n  transform: translateX(0);\n  transition-delay: var(--erp-sidebar-expand-delay);\n}\n\n.admin-shell--collapsed .admin-sidebar--desktop:hover .admin-user,\n.admin-shell--collapsed .admin-sidebar--desktop:focus-within .admin-user {\n  display: grid;\n  justify-content: initial;\n}\n\n.admin-shell--collapsed .admin-sidebar--desktop:hover .admin-user__avatar,\n.admin-shell--collapsed .admin-sidebar--desktop:focus-within .admin-user__avatar {\n  display: grid;\n}\n\n.admin-shell--collapsed .admin-sidebar--desktop:hover .admin-user__copy,\n.admin-shell--collapsed .admin-sidebar--desktop:focus-within .admin-user__copy {\n  display: flex;\n  max-width: 9rem;\n  visibility: visible;\n  opacity: 1;\n  pointer-events: auto;\n  transform: translateX(0);\n  transition-delay: var(--erp-sidebar-expand-delay);\n}\n\n@keyframes admin-drawer-enter {\n  from {\n    transform: translateX(calc(-1 * var(--erp-drawer-enter-shift)));\n    opacity: 0;\n  }\n}\n\n@keyframes admin-flyout-enter {\n  from {\n    transform: translateX(-6px);\n    opacity: 0;\n  }\n}\n\n@keyframes admin-module-enter {\n  from {\n    transform: translateX(-28px);\n    opacity: 0;\n  }\n}\n\n@keyframes admin-module-exit {\n  to {\n    transform: translateX(-24px);\n    opacity: 0;\n  }\n}\n\n@keyframes admin-backdrop-enter {\n  from {\n    opacity: 0;\n  }\n}\n\n@keyframes admin-backdrop-exit {\n  to {\n    opacity: 0;\n  }\n}\n\n@media (max-width: 767px) {\n  .admin-module-backdrop {\n    display: none;\n  }\n\n  .admin-shell,\n  .admin-shell--collapsed {\n    grid-template-columns: minmax(0, 1fr);\n  }\n\n  .admin-sidebar--desktop {\n    display: none;\n  }\n\n  .admin-header,\n  .admin-main {\n    grid-column: 1;\n  }\n\n  .admin-header {\n    gap: var(--erp-space-2);\n    padding: 0 var(--erp-page-padding-mobile);\n  }\n\n  .admin-header__menu {\n    display: inline-grid;\n    width: 36px;\n    height: 36px;\n  }\n\n  .admin-header__context {\n    display: block;\n  }\n\n  .admin-header__status,\n  .admin-header__tools {\n    display: none;\n  }\n\n  .admin-breadcrumbs li:not(.admin-breadcrumbs__current) {\n    display: none;\n  }\n\n  .admin-breadcrumbs__current svg {\n    display: none;\n  }\n\n  .admin-sidebar--mobile .admin-brand {\n    padding-inline: var(--erp-space-3);\n  }\n\n  .admin-sidebar--mobile .admin-navigation {\n    overflow-x: hidden;\n    overflow-y: auto;\n  }\n\n  .admin-sidebar--mobile .admin-navigation__children {\n    position: static;\n    width: auto;\n    max-height: none;\n    margin: var(--erp-space-1) 0 var(--erp-space-2) 20px;\n    padding: var(--erp-space-1) var(--erp-space-1) var(--erp-space-1) var(--erp-space-2);\n    overflow: visible;\n    border: 0;\n    border-left: 1px solid var(--erp-blue-200);\n    border-radius: 0 var(--erp-radius-compact) var(--erp-radius-compact) 0;\n    background: var(--erp-sidebar-panel-surface);\n    box-shadow: none;\n    animation: none;\n  }\n\n  .admin-sidebar--mobile .admin-navigation__children::before {\n    display: none;\n  }\n\n  .admin-sidebar--mobile .admin-navigation__flyout-header {\n    display: none;\n  }\n\n  .admin-sidebar--mobile .admin-navigation__module-summary,\n  .admin-sidebar--mobile .admin-navigation__group-heading,\n  .admin-sidebar--mobile .admin-navigation__guidance,\n  .admin-sidebar--mobile .admin-navigation__description,\n  .admin-sidebar--mobile .admin-navigation__entry-arrow {\n    display: none;\n  }\n\n  .admin-sidebar--mobile .admin-navigation__item--section,\n  .admin-sidebar--mobile .admin-navigation__item--child,\n  .admin-sidebar--mobile .admin-sidebar__support {\n    min-height: var(--erp-control-height-mobile);\n  }\n\n  .admin-sidebar--mobile .admin-navigation__item--leaf {\n    min-height: 40px;\n  }\n\n  .admin-sidebar--mobile .admin-user__logout {\n    width: var(--erp-control-height-mobile);\n    height: var(--erp-control-height-mobile);\n  }\n}\n\n@media (prefers-reduced-motion: reduce) {\n  .admin-shell,\n  .admin-navigation__chevron,\n  .admin-drawer-backdrop,\n  .admin-module-backdrop,\n  .admin-sidebar--mobile,\n  .admin-skip-link {\n    animation-duration: 1ms;\n    transition-duration: 1ms;\n  }\n}\n"] }]
    }], () => [], { mobileMenuButton: [{
            type: ViewChild,
            args: ['mobileMenuButton']
        }], mobileCloseButton: [{
            type: ViewChild,
            args: ['mobileCloseButton']
        }], pageTitle: [{
            type: ViewChild,
            args: ['pageTitle']
        }], reloadFormNavigation: [{
            type: HostListener,
            args: ['window:tasklyFormsChanged']
        }], onEscape: [{
            type: HostListener,
            args: ['document:keydown.escape']
        }], onDocumentClick: [{
            type: HostListener,
            args: ['document:click', ['$event']]
        }], onWindowResize: [{
            type: HostListener,
            args: ['window:resize']
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(AdminShellComponent, { className: "AdminShellComponent", filePath: "frontend/src/app/features/admin/layout/admin-shell.component.ts", lineNumber: 69 }); })();
