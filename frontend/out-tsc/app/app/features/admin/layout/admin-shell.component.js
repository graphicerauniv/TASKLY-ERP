import { CdkTrapFocus } from '@angular/cdk/a11y';
import { DOCUMENT, NgTemplateOutlet } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ChangeDetectionStrategy, Component, HostListener, ViewChild, computed, effect, inject, signal, } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { ActivatedRoute, NavigationEnd, Router, RouterLink, RouterOutlet } from '@angular/router';
import { LucideChevronDown, LucideChevronLeft, LucideChevronRight, LucideBell, LucideBuilding2, LucideCalendarDays, LucideClock3, LucideFilter, LucideGraduationCap, LucideLandmark, LucideUserRound, LucideCircleHelp, LucideDynamicIcon, LucideLifeBuoy, LucideLogOut, LucideMenu, LucideSearch, LucideX, } from '@lucide/angular';
import { filter, forkJoin } from 'rxjs';
import { AuthService } from '../../../core/auth.service';
import { ApiService } from '../../../core/api.service';
import { ADMIN_NAVIGATION, adminNavigationIcon, matchesAdminRoute, resolveAdminPageContext, } from './navigation/admin-navigation.config';
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
const _c0 = ["mobileMenuButton"];
const _c1 = ["mobileCloseButton"];
const _c2 = ["pageTitle"];
const _c3 = ["globalSearchInput"];
const _c4 = () => ({ mobile: false });
const _c5 = () => ({ mobile: true });
const _c6 = () => [];
const _forTrack0 = ($index, $item) => $item._id;
const _forTrack1 = ($index, $item) => $item.route;
const _forTrack2 = ($index, $item) => $item.id;
function AdminShellComponent_For_15_Conditional_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(0, "svg", 17);
} }
function AdminShellComponent_For_15_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "li");
    i0.ɵɵconditionalCreate(1, AdminShellComponent_For_15_Conditional_1_Template, 1, 0, ":svg:svg", 17);
    i0.ɵɵelementStart(2, "span");
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const breadcrumb_r2 = ctx.$implicit;
    const ɵ$index_26_r3 = ctx.$index;
    i0.ɵɵadvance();
    i0.ɵɵconditional(!(ɵ$index_26_r3 === 0) ? 1 : -1);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(breadcrumb_r2);
} }
function AdminShellComponent_For_31_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 23);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const campus_r4 = ctx.$implicit;
    i0.ɵɵproperty("value", campus_r4.name);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(campus_r4.name);
} }
function AdminShellComponent_For_42_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 23);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const session_r5 = ctx.$implicit;
    i0.ɵɵproperty("value", session_r5.name);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(session_r5.name);
} }
function AdminShellComponent_Conditional_49_For_11_Template(rf, ctx) { if (rf & 1) {
    const _r8 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 42);
    i0.ɵɵlistener("click", function AdminShellComponent_Conditional_49_For_11_Template_button_click_0_listener() { const item_r9 = i0.ɵɵrestoreView(_r8).$implicit; const ctx_r6 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r6.openRecent(item_r9.route)); });
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(1, "svg", 53);
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(2, "span")(3, "strong");
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "small");
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd()();
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(7, "svg", 54);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r9 = ctx.$implicit;
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(item_r9.title);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(item_r9.route);
} }
function AdminShellComponent_Conditional_49_ForEmpty_12_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p");
    i0.ɵɵtext(1, "No recent pages in this session.");
    i0.ɵɵelementEnd();
} }
function AdminShellComponent_Conditional_49_Template(rf, ctx) { if (rf & 1) {
    const _r6 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "section", 31)(1, "header")(2, "div")(3, "strong");
    i0.ɵɵtext(4, "Recent pages");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "small");
    i0.ɵɵtext(6, "Your latest admin workspaces");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(7, "button", 49);
    i0.ɵɵlistener("click", function AdminShellComponent_Conditional_49_Template_button_click_7_listener() { i0.ɵɵrestoreView(_r6); const ctx_r6 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r6.recentOpen.set(false)); });
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(8, "svg", 50);
    i0.ɵɵelementEnd()();
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(9, "div", 51);
    i0.ɵɵrepeaterCreate(10, AdminShellComponent_Conditional_49_For_11_Template, 8, 2, "button", 52, _forTrack1, false, AdminShellComponent_Conditional_49_ForEmpty_12_Template, 2, 0, "p");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r6 = i0.ɵɵnextContext();
    i0.ɵɵadvance(10);
    i0.ɵɵrepeater(ctx_r6.recentPages());
} }
function AdminShellComponent_Conditional_60_Template(rf, ctx) { if (rf & 1) {
    const _r10 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "section", 36)(1, "header")(2, "div")(3, "strong");
    i0.ɵɵtext(4, "Platform search filters");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "small");
    i0.ɵɵtext(6, "Limit results across large ERP datasets");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(7, "button", 55);
    i0.ɵɵlistener("click", function AdminShellComponent_Conditional_60_Template_button_click_7_listener() { i0.ɵɵrestoreView(_r10); const ctx_r6 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r6.filterOpen.set(false)); });
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(8, "svg", 50);
    i0.ɵɵelementEnd()();
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(9, "fieldset")(10, "legend");
    i0.ɵɵtext(11, "Search in");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(12, "label")(13, "input", 56);
    i0.ɵɵlistener("change", function AdminShellComponent_Conditional_60_Template_input_change_13_listener() { i0.ɵɵrestoreView(_r10); const ctx_r6 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r6.toggleSearchType("module")); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(14, "span");
    i0.ɵɵtext(15, "Modules and pages");
    i0.ɵɵelementStart(16, "small");
    i0.ɵɵtext(17, "Navigation, setup and operational tools");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(18, "label")(19, "input", 56);
    i0.ɵɵlistener("change", function AdminShellComponent_Conditional_60_Template_input_change_19_listener() { i0.ɵɵrestoreView(_r10); const ctx_r6 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r6.toggleSearchType("student")); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(20, "span");
    i0.ɵɵtext(21, "Students");
    i0.ɵɵelementStart(22, "small");
    i0.ɵɵtext(23, "Names, student IDs and application IDs");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(24, "label")(25, "input", 56);
    i0.ɵɵlistener("change", function AdminShellComponent_Conditional_60_Template_input_change_25_listener() { i0.ɵɵrestoreView(_r10); const ctx_r6 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r6.toggleSearchType("workflow")); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(26, "span");
    i0.ɵɵtext(27, "Employee and faculty workflows");
    i0.ɵɵelementStart(28, "small");
    i0.ɵɵtext(29, "Published forms and onboarding processes");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(30, "label")(31, "input", 56);
    i0.ɵɵlistener("change", function AdminShellComponent_Conditional_60_Template_input_change_31_listener() { i0.ɵɵrestoreView(_r10); const ctx_r6 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r6.toggleSearchType("record")); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(32, "span");
    i0.ɵɵtext(33, "Records");
    i0.ɵɵelementStart(34, "small");
    i0.ɵɵtext(35, "Submission and database directories");
    i0.ɵɵelementEnd()()()();
    i0.ɵɵelementStart(36, "label", 57)(37, "span");
    i0.ɵɵtext(38, "Student status");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(39, "select", 58);
    i0.ɵɵtwoWayListener("ngModelChange", function AdminShellComponent_Conditional_60_Template_select_ngModelChange_39_listener($event) { i0.ɵɵrestoreView(_r10); const ctx_r6 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r6.selectedSearchStatus, $event) || (ctx_r6.selectedSearchStatus = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementStart(40, "option", 22);
    i0.ɵɵtext(41, "All statuses");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(42, "option", 59);
    i0.ɵɵtext(43, "Draft");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(44, "option", 60);
    i0.ɵɵtext(45, "Submitted");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(46, "option", 61);
    i0.ɵɵtext(47, "Awaiting review");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(48, "option", 62);
    i0.ɵɵtext(49, "Approved");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(50, "footer")(51, "button", 42);
    i0.ɵɵlistener("click", function AdminShellComponent_Conditional_60_Template_button_click_51_listener() { i0.ɵɵrestoreView(_r10); const ctx_r6 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r6.resetGlobalFilters()); });
    i0.ɵɵtext(52, "Reset");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(53, "button", 63);
    i0.ɵɵlistener("click", function AdminShellComponent_Conditional_60_Template_button_click_53_listener() { i0.ɵɵrestoreView(_r10); const ctx_r6 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r6.applyGlobalFilters()); });
    i0.ɵɵtext(54, " Apply filters ");
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r6 = i0.ɵɵnextContext();
    i0.ɵɵadvance(13);
    i0.ɵɵproperty("checked", ctx_r6.searchTypeEnabled("module"));
    i0.ɵɵadvance(6);
    i0.ɵɵproperty("checked", ctx_r6.searchTypeEnabled("student"));
    i0.ɵɵadvance(6);
    i0.ɵɵproperty("checked", ctx_r6.searchTypeEnabled("workflow"));
    i0.ɵɵadvance(6);
    i0.ɵɵproperty("checked", ctx_r6.searchTypeEnabled("record"));
    i0.ɵɵadvance(8);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r6.selectedSearchStatus);
} }
function AdminShellComponent_Conditional_64_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "small");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r6 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r6.unreadNotifications());
} }
function AdminShellComponent_Conditional_65_Template(rf, ctx) { if (rf & 1) {
    const _r11 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "section", 39)(1, "header")(2, "div")(3, "strong");
    i0.ɵɵtext(4, "Notifications");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "small");
    i0.ɵɵtext(6, "Updates requiring your attention");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(7, "button", 42);
    i0.ɵɵlistener("click", function AdminShellComponent_Conditional_65_Template_button_click_7_listener() { i0.ɵɵrestoreView(_r11); const ctx_r6 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r6.markNotificationsRead()); });
    i0.ɵɵtext(8, "Mark all read");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(9, "div")(10, "article");
    i0.ɵɵelement(11, "i");
    i0.ɵɵelementStart(12, "span")(13, "strong");
    i0.ɵɵtext(14, "Applications awaiting review");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(15, "small");
    i0.ɵɵtext(16, "Open the student review queue to continue.");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(17, "article");
    i0.ɵɵelement(18, "i");
    i0.ɵɵelementStart(19, "span")(20, "strong");
    i0.ɵɵtext(21, "Timetable configuration");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(22, "small");
    i0.ɵɵtext(23, "Some periods still require timings.");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(24, "article");
    i0.ɵɵelement(25, "i");
    i0.ɵɵelementStart(26, "span")(27, "strong");
    i0.ɵɵtext(28, "Fee schedule update");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(29, "small");
    i0.ɵɵtext(30, "A publication window is approaching.");
    i0.ɵɵelementEnd()()()()();
} }
function AdminShellComponent_Conditional_77_Template(rf, ctx) { if (rf & 1) {
    const _r12 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "section", 45)(1, "header")(2, "span", 43);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "div")(5, "strong");
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "small");
    i0.ɵɵtext(8);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(9, "button", 42);
    i0.ɵɵlistener("click", function AdminShellComponent_Conditional_77_Template_button_click_9_listener() { i0.ɵɵrestoreView(_r12); const ctx_r6 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r6.openRecent("/admin/master-data/academic/view")); });
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(10, "svg", 64);
    i0.ɵɵtext(11, "Organisation settings ");
    i0.ɵɵelementEnd();
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(12, "button", 42);
    i0.ɵɵlistener("click", function AdminShellComponent_Conditional_77_Template_button_click_12_listener() { i0.ɵɵrestoreView(_r12); const ctx_r6 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r6.logout()); });
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(13, "svg", 65);
    i0.ɵɵtext(14, "Sign out ");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    let tmp_5_0;
    let tmp_6_0;
    const ctx_r6 = i0.ɵɵnextContext();
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(ctx_r6.adminInitials());
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(((tmp_5_0 = ctx_r6.auth.admin()) == null ? null : tmp_5_0.name) || "Super Admin");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(((tmp_6_0 = ctx_r6.auth.admin()) == null ? null : tmp_6_0.email) || "Admin account");
} }
function AdminShellComponent_Conditional_78_Conditional_5_Template(rf, ctx) { if (rf & 1) {
    const _r14 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 74);
    i0.ɵɵlistener("click", function AdminShellComponent_Conditional_78_Conditional_5_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r14); const ctx_r6 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r6.onGlobalSearch("")); });
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(1, "svg", 75);
    i0.ɵɵelementEnd();
} }
function AdminShellComponent_Conditional_78_For_12_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "b");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const type_r15 = ctx.$implicit;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(type_r15);
} }
function AdminShellComponent_Conditional_78_Conditional_13_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "b");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r6 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r6.selectedCampus);
} }
function AdminShellComponent_Conditional_78_Conditional_14_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "b");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r6 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r6.selectedSession);
} }
function AdminShellComponent_Conditional_78_Conditional_16_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p");
    i0.ɵɵtext(1, "Searching across ERP records\u2026");
    i0.ɵɵelementEnd();
} }
function AdminShellComponent_Conditional_78_Conditional_17_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 72);
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(1, "svg", 76);
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(2, "strong");
    i0.ɵɵtext(3, "Search the complete admin platform");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "span");
    i0.ɵɵtext(5, "Enter at least two characters. Use Filters to narrow large datasets.");
    i0.ɵɵelementEnd()();
} }
function AdminShellComponent_Conditional_78_Conditional_18_For_1_Conditional_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(0, "svg", 77);
} }
function AdminShellComponent_Conditional_78_Conditional_18_For_1_Conditional_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(0, "svg", 78);
} }
function AdminShellComponent_Conditional_78_Conditional_18_For_1_Conditional_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(0, "svg", 79);
} }
function AdminShellComponent_Conditional_78_Conditional_18_For_1_Template(rf, ctx) { if (rf & 1) {
    const _r16 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 42);
    i0.ɵɵlistener("click", function AdminShellComponent_Conditional_78_Conditional_18_For_1_Template_button_click_0_listener() { const result_r17 = i0.ɵɵrestoreView(_r16).$implicit; const ctx_r6 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r6.openGlobalResult(result_r17)); });
    i0.ɵɵconditionalCreate(1, AdminShellComponent_Conditional_78_Conditional_18_For_1_Conditional_1_Template, 1, 0, ":svg:svg", 77)(2, AdminShellComponent_Conditional_78_Conditional_18_For_1_Conditional_2_Template, 1, 0, ":svg:svg", 78)(3, AdminShellComponent_Conditional_78_Conditional_18_For_1_Conditional_3_Template, 1, 0, ":svg:svg", 79);
    i0.ɵɵelementStart(4, "span")(5, "strong");
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "small");
    i0.ɵɵtext(8);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(9, "b");
    i0.ɵɵtext(10);
    i0.ɵɵelementEnd();
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(11, "svg", 80);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const result_r17 = ctx.$implicit;
    i0.ɵɵadvance();
    i0.ɵɵconditional(result_r17.type === "student" ? 1 : result_r17.type === "workflow" ? 2 : 3);
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(result_r17.title);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(result_r17.meta);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(result_r17.type);
} }
function AdminShellComponent_Conditional_78_Conditional_18_ForEmpty_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 72);
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(1, "svg", 76);
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(2, "strong");
    i0.ɵɵtext(3, "No matching results");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "span");
    i0.ɵɵtext(5, "Try another name, ID or change the platform filters.");
    i0.ɵɵelementEnd()();
} }
function AdminShellComponent_Conditional_78_Conditional_18_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵrepeaterCreate(0, AdminShellComponent_Conditional_78_Conditional_18_For_1_Template, 12, 4, "button", 52, _forTrack2, false, AdminShellComponent_Conditional_78_Conditional_18_ForEmpty_2_Template, 6, 0, "div", 72);
} if (rf & 2) {
    const ctx_r6 = i0.ɵɵnextContext(2);
    i0.ɵɵrepeater(ctx_r6.searchResults());
} }
function AdminShellComponent_Conditional_78_Template(rf, ctx) { if (rf & 1) {
    const _r13 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "section", 66)(1, "div", 67);
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(2, "svg", 33);
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(3, "input", 68, 3);
    i0.ɵɵlistener("ngModelChange", function AdminShellComponent_Conditional_78_Template_input_ngModelChange_3_listener($event) { i0.ɵɵrestoreView(_r13); const ctx_r6 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r6.onGlobalSearch($event)); });
    i0.ɵɵelementEnd();
    i0.ɵɵconditionalCreate(5, AdminShellComponent_Conditional_78_Conditional_5_Template, 2, 0, "button", 69);
    i0.ɵɵelementStart(6, "kbd");
    i0.ɵɵtext(7, "Esc");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(8, "div", 70)(9, "span");
    i0.ɵɵtext(10, "Searching:");
    i0.ɵɵelementEnd();
    i0.ɵɵrepeaterCreate(11, AdminShellComponent_Conditional_78_For_12_Template, 2, 1, "b", null, i0.ɵɵrepeaterTrackByIdentity);
    i0.ɵɵconditionalCreate(13, AdminShellComponent_Conditional_78_Conditional_13_Template, 2, 1, "b");
    i0.ɵɵconditionalCreate(14, AdminShellComponent_Conditional_78_Conditional_14_Template, 2, 1, "b");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(15, "div", 71);
    i0.ɵɵconditionalCreate(16, AdminShellComponent_Conditional_78_Conditional_16_Template, 2, 0, "p")(17, AdminShellComponent_Conditional_78_Conditional_17_Template, 6, 0, "div", 72)(18, AdminShellComponent_Conditional_78_Conditional_18_Template, 3, 1);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(19, "footer")(20, "span");
    i0.ɵɵtext(21, "Results are limited for performance.");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(22, "button", 42);
    i0.ɵɵlistener("click", function AdminShellComponent_Conditional_78_Template_button_click_22_listener() { i0.ɵɵrestoreView(_r13); const ctx_r6 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r6.toggleHeaderPanel("filter")); });
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(23, "svg", 73);
    i0.ɵɵtext(24, "Refine filters ");
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r6 = i0.ɵɵnextContext();
    i0.ɵɵclassProp("is-closing", ctx_r6.searchClosing());
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngModel", ctx_r6.globalSearchQuery);
    i0.ɵɵadvance(2);
    i0.ɵɵconditional(ctx_r6.globalSearchQuery ? 5 : -1);
    i0.ɵɵadvance(6);
    i0.ɵɵrepeater(ctx_r6.enabledSearchTypes());
    i0.ɵɵadvance(2);
    i0.ɵɵconditional(ctx_r6.selectedCampus ? 13 : -1);
    i0.ɵɵadvance();
    i0.ɵɵconditional(ctx_r6.selectedSession ? 14 : -1);
    i0.ɵɵadvance(2);
    i0.ɵɵconditional(ctx_r6.searchLoading() ? 16 : ctx_r6.globalSearchQuery.trim().length < 2 ? 17 : 18);
} }
function AdminShellComponent_Conditional_81_Template(rf, ctx) { if (rf & 1) {
    const _r18 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 81);
    i0.ɵɵlistener("click", function AdminShellComponent_Conditional_81_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r18); const ctx_r6 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r6.closeDesktopFlyout()); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r6 = i0.ɵɵnextContext();
    i0.ɵɵclassProp("is-closing", ctx_r6.flyoutClosing());
} }
function AdminShellComponent_Conditional_82_Template(rf, ctx) { if (rf & 1) {
    const _r19 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 82);
    i0.ɵɵlistener("click", function AdminShellComponent_Conditional_82_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r19); const ctx_r6 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r6.closeMobileNavigation()); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(1, "aside", 83);
    i0.ɵɵelementContainer(2, 8);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    i0.ɵɵnextContext();
    const navigationContent_r20 = i0.ɵɵreference(84);
    i0.ɵɵadvance();
    i0.ɵɵproperty("cdkTrapFocusAutoCapture", true);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngTemplateOutlet", navigationContent_r20)("ngTemplateOutletContext", i0.ɵɵpureFunction0(3, _c5));
} }
function AdminShellComponent_ng_template_83_Conditional_8_Template(rf, ctx) { if (rf & 1) {
    const _r22 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 101, 4);
    i0.ɵɵlistener("click", function AdminShellComponent_ng_template_83_Conditional_8_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r22); const ctx_r6 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r6.closeMobileNavigation()); });
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(2, "svg", 102);
    i0.ɵɵelementEnd();
} }
function AdminShellComponent_ng_template_83_Conditional_9_Conditional_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(0, "svg", 104);
} }
function AdminShellComponent_ng_template_83_Conditional_9_Conditional_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(0, "svg", 105);
} }
function AdminShellComponent_ng_template_83_Conditional_9_Template(rf, ctx) { if (rf & 1) {
    const _r23 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 103);
    i0.ɵɵlistener("click", function AdminShellComponent_ng_template_83_Conditional_9_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r23); const ctx_r6 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r6.toggleDesktopSidebar()); });
    i0.ɵɵconditionalCreate(1, AdminShellComponent_ng_template_83_Conditional_9_Conditional_1_Template, 1, 0, ":svg:svg", 104)(2, AdminShellComponent_ng_template_83_Conditional_9_Conditional_2_Template, 1, 0, ":svg:svg", 105);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r6 = i0.ɵɵnextContext(2);
    i0.ɵɵattribute("aria-label", ctx_r6.desktopCollapsed() ? "Expand admin navigation" : "Collapse admin navigation")("aria-expanded", !ctx_r6.desktopCollapsed());
    i0.ɵɵadvance();
    i0.ɵɵconditional(ctx_r6.desktopCollapsed() ? 1 : 2);
} }
function AdminShellComponent_ng_template_83_For_13_Conditional_1_Conditional_6_For_26_Conditional_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "li", 125)(1, "span");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelement(3, "i", 127);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ɵ$index_554_r28 = i0.ɵɵnextContext().$index;
    const section_r25 = i0.ɵɵnextContext(3).$implicit;
    const ctx_r6 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r6.navigationGroupLabel(section_r25.children || i0.ɵɵpureFunction0(1, _c6), ɵ$index_554_r28));
} }
function AdminShellComponent_ng_template_83_For_13_Conditional_1_Conditional_6_For_26_Conditional_2_Conditional_8_For_2_Template(rf, ctx) { if (rf & 1) {
    const _r31 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "li")(1, "a", 133);
    i0.ɵɵlistener("click", function AdminShellComponent_ng_template_83_For_13_Conditional_1_Conditional_6_For_26_Conditional_2_Conditional_8_For_2_Template_a_click_1_listener($event) { const link_r32 = i0.ɵɵrestoreView(_r31).$implicit; const mobile_r26 = i0.ɵɵnextContext(7).mobile; const ctx_r6 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r6.selectNavigation($event, link_r32.route, mobile_r26)); });
    i0.ɵɵelementStart(2, "span", 108);
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(3, "svg", 134);
    i0.ɵɵelementEnd();
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(4, "span", 110);
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const link_r32 = ctx.$implicit;
    const ctx_r6 = i0.ɵɵnextContext(8);
    i0.ɵɵadvance();
    i0.ɵɵclassProp("is-active", ctx_r6.matchesAdminRoute(link_r32.activeWhen, ctx_r6.currentUrl()));
    i0.ɵɵproperty("routerLink", link_r32.route);
    i0.ɵɵattribute("aria-current", ctx_r6.matchesAdminRoute(link_r32.activeWhen, ctx_r6.currentUrl()) ? "page" : null);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("lucideIcon", ctx_r6.iconFor(link_r32.icon));
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(link_r32.label);
} }
function AdminShellComponent_ng_template_83_For_13_Conditional_1_Conditional_6_For_26_Conditional_2_Conditional_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "ul", 132);
    i0.ɵɵrepeaterCreate(1, AdminShellComponent_ng_template_83_For_13_Conditional_1_Conditional_6_For_26_Conditional_2_Conditional_8_For_2_Template, 6, 6, "li", null, _forTrack2);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const entry_r30 = i0.ɵɵnextContext(2).$implicit;
    const mobile_r26 = i0.ɵɵnextContext(4).mobile;
    i0.ɵɵproperty("id", (mobile_r26 ? "mobile-" : "desktop-") + entry_r30.id + "-navigation");
    i0.ɵɵadvance();
    i0.ɵɵrepeater(entry_r30.children || i0.ɵɵpureFunction0(1, _c6));
} }
function AdminShellComponent_ng_template_83_For_13_Conditional_1_Conditional_6_For_26_Conditional_2_Template(rf, ctx) { if (rf & 1) {
    const _r29 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 128);
    i0.ɵɵlistener("click", function AdminShellComponent_ng_template_83_For_13_Conditional_1_Conditional_6_For_26_Conditional_2_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r29); const entry_r30 = i0.ɵɵnextContext().$implicit; const ctx_r6 = i0.ɵɵnextContext(5); return i0.ɵɵresetView(ctx_r6.toggleSubgroup(entry_r30)); });
    i0.ɵɵelementStart(1, "span", 108);
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(2, "svg", 129);
    i0.ɵɵelementEnd();
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(3, "span", 110);
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "small", 130);
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd();
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(7, "svg", 131);
    i0.ɵɵelementEnd();
    i0.ɵɵconditionalCreate(8, AdminShellComponent_ng_template_83_For_13_Conditional_1_Conditional_6_For_26_Conditional_2_Conditional_8_Template, 3, 2, "ul", 132);
} if (rf & 2) {
    const entry_r30 = i0.ɵɵnextContext().$implicit;
    const mobile_r26 = i0.ɵɵnextContext(4).mobile;
    const ctx_r6 = i0.ɵɵnextContext();
    i0.ɵɵclassProp("is-active", ctx_r6.isEntryActive(entry_r30));
    i0.ɵɵattribute("aria-controls", (mobile_r26 ? "mobile-" : "desktop-") + entry_r30.id + "-navigation")("aria-expanded", ctx_r6.isSubgroupExpanded(entry_r30));
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("lucideIcon", ctx_r6.iconFor(entry_r30.icon));
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(entry_r30.label);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r6.entryDescription(entry_r30));
    i0.ɵɵadvance();
    i0.ɵɵclassProp("is-open", ctx_r6.isSubgroupExpanded(entry_r30));
    i0.ɵɵadvance();
    i0.ɵɵconditional(ctx_r6.isSubgroupExpanded(entry_r30) ? 8 : -1);
} }
function AdminShellComponent_ng_template_83_For_13_Conditional_1_Conditional_6_For_26_Conditional_3_Template(rf, ctx) { if (rf & 1) {
    const _r33 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "a", 135);
    i0.ɵɵlistener("click", function AdminShellComponent_ng_template_83_For_13_Conditional_1_Conditional_6_For_26_Conditional_3_Template_a_click_0_listener($event) { i0.ɵɵrestoreView(_r33); const entry_r30 = i0.ɵɵnextContext().$implicit; const mobile_r26 = i0.ɵɵnextContext(4).mobile; const ctx_r6 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r6.selectNavigation($event, entry_r30.route || "/admin/dashboard", mobile_r26)); });
    i0.ɵɵelementStart(1, "span", 108);
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(2, "svg", 129);
    i0.ɵɵelementEnd();
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(3, "span", 110);
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "small", 130);
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd();
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(7, "svg", 136);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const entry_r30 = i0.ɵɵnextContext().$implicit;
    const ctx_r6 = i0.ɵɵnextContext(5);
    i0.ɵɵclassProp("is-active", ctx_r6.isEntryActive(entry_r30));
    i0.ɵɵproperty("routerLink", entry_r30.route || "/admin/dashboard");
    i0.ɵɵattribute("aria-current", ctx_r6.isEntryActive(entry_r30) ? "page" : null);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("lucideIcon", ctx_r6.iconFor(entry_r30.icon));
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(entry_r30.label);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r6.entryDescription(entry_r30));
} }
function AdminShellComponent_ng_template_83_For_13_Conditional_1_Conditional_6_For_26_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵconditionalCreate(0, AdminShellComponent_ng_template_83_For_13_Conditional_1_Conditional_6_For_26_Conditional_0_Template, 4, 2, "li", 125);
    i0.ɵɵelementStart(1, "li");
    i0.ɵɵconditionalCreate(2, AdminShellComponent_ng_template_83_For_13_Conditional_1_Conditional_6_For_26_Conditional_2_Template, 9, 10)(3, AdminShellComponent_ng_template_83_For_13_Conditional_1_Conditional_6_For_26_Conditional_3_Template, 8, 7, "a", 126);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const entry_r30 = ctx.$implicit;
    const ɵ$index_554_r28 = ctx.$index;
    const section_r25 = i0.ɵɵnextContext(3).$implicit;
    const ctx_r6 = i0.ɵɵnextContext(2);
    i0.ɵɵconditional(ctx_r6.showNavigationGroup(section_r25.children || i0.ɵɵpureFunction0(2, _c6), ɵ$index_554_r28) ? 0 : -1);
    i0.ɵɵadvance(2);
    i0.ɵɵconditional((entry_r30.children == null ? null : entry_r30.children.length) ? 2 : 3);
} }
function AdminShellComponent_ng_template_83_For_13_Conditional_1_Conditional_6_Conditional_31_Template(rf, ctx) { if (rf & 1) {
    const _r34 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "a", 137);
    i0.ɵɵlistener("click", function AdminShellComponent_ng_template_83_For_13_Conditional_1_Conditional_6_Conditional_31_Template_a_click_0_listener($event) { const firstRoute_r35 = i0.ɵɵrestoreView(_r34); const mobile_r26 = i0.ɵɵnextContext(4).mobile; const ctx_r6 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r6.selectNavigation($event, firstRoute_r35, mobile_r26)); });
    i0.ɵɵtext(1, " Open first ");
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(2, "svg", 138);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    i0.ɵɵproperty("routerLink", ctx);
} }
function AdminShellComponent_ng_template_83_For_13_Conditional_1_Conditional_6_Template(rf, ctx) { if (rf & 1) {
    const _r27 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "ul", 113)(1, "li", 114)(2, "div")(3, "small");
    i0.ɵɵtext(4, "Module navigation");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "strong");
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(7, "button", 115);
    i0.ɵɵlistener("click", function AdminShellComponent_ng_template_83_For_13_Conditional_1_Conditional_6_Template_button_click_7_listener() { i0.ɵɵrestoreView(_r27); const ctx_r6 = i0.ɵɵnextContext(4); return i0.ɵɵresetView(ctx_r6.closeDesktopFlyout()); });
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(8, "svg", 116);
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(9, "small");
    i0.ɵɵtext(10, "Esc");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(11, "li", 117)(12, "span", 118);
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(13, "svg", 119);
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(14, "small");
    i0.ɵɵtext(15, "\u2713");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(16, "span", 120)(17, "strong");
    i0.ɵɵtext(18);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(19, "span");
    i0.ɵɵtext(20);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(21, "small");
    i0.ɵɵtext(22);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(23, "span", 121);
    i0.ɵɵtext(24, "\u2726");
    i0.ɵɵelementEnd()();
    i0.ɵɵrepeaterCreate(25, AdminShellComponent_ng_template_83_For_13_Conditional_1_Conditional_6_For_26_Template, 4, 3, null, null, _forTrack2);
    i0.ɵɵelementStart(27, "li", 122);
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(28, "svg", 123);
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(29, "strong");
    i0.ɵɵtext(30);
    i0.ɵɵelementEnd();
    i0.ɵɵconditionalCreate(31, AdminShellComponent_ng_template_83_For_13_Conditional_1_Conditional_6_Conditional_31_Template, 3, 1, "a", 124);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    let tmp_29_0;
    const section_r25 = i0.ɵɵnextContext(2).$implicit;
    const mobile_r26 = i0.ɵɵnextContext().mobile;
    const ctx_r6 = i0.ɵɵnextContext();
    i0.ɵɵclassProp("is-closing", !mobile_r26 && ctx_r6.closingSectionId() === section_r25.id);
    i0.ɵɵproperty("id", (mobile_r26 ? "mobile-" : "desktop-") + section_r25.id + "-navigation");
    i0.ɵɵattribute("role", !mobile_r26 ? "dialog" : null)("aria-modal", !mobile_r26 ? "true" : null)("aria-label", section_r25.label + " module navigation");
    i0.ɵɵadvance(6);
    i0.ɵɵtextInterpolate(section_r25.label);
    i0.ɵɵadvance(7);
    i0.ɵɵproperty("lucideIcon", ctx_r6.iconFor(section_r25.icon));
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(ctx_r6.moduleTitle(section_r25));
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r6.sectionDescription(section_r25));
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1("", (section_r25.children == null ? null : section_r25.children.length) || 0, " tools");
    i0.ɵɵadvance(3);
    i0.ɵɵrepeater(section_r25.children || i0.ɵɵpureFunction0(13, _c6));
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate1("", section_r25.label, " tools");
    i0.ɵɵadvance();
    i0.ɵɵconditional((tmp_29_0 = section_r25.children == null ? null : section_r25.children[0] == null ? null : section_r25.children[0].route) ? 31 : -1, tmp_29_0);
} }
function AdminShellComponent_ng_template_83_For_13_Conditional_1_Template(rf, ctx) { if (rf & 1) {
    const _r24 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 107);
    i0.ɵɵlistener("click", function AdminShellComponent_ng_template_83_For_13_Conditional_1_Template_button_click_0_listener($event) { i0.ɵɵrestoreView(_r24); const section_r25 = i0.ɵɵnextContext().$implicit; const mobile_r26 = i0.ɵɵnextContext().mobile; const ctx_r6 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r6.toggleSection(section_r25, $event, mobile_r26)); });
    i0.ɵɵelementStart(1, "span", 108);
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(2, "svg", 109);
    i0.ɵɵelementEnd();
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(3, "span", 110);
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(5, "svg", 111);
    i0.ɵɵelementEnd();
    i0.ɵɵconditionalCreate(6, AdminShellComponent_ng_template_83_For_13_Conditional_1_Conditional_6_Template, 32, 14, "ul", 112);
} if (rf & 2) {
    const section_r25 = i0.ɵɵnextContext().$implicit;
    const mobile_r26 = i0.ɵɵnextContext().mobile;
    const ctx_r6 = i0.ɵɵnextContext();
    i0.ɵɵclassProp("is-active", ctx_r6.isSectionActive(section_r25));
    i0.ɵɵattribute("title", ctx_r6.desktopCollapsed() && !mobile_r26 ? section_r25.label : null)("aria-controls", (mobile_r26 ? "mobile-" : "desktop-") + section_r25.id + "-navigation")("aria-expanded", ctx_r6.isSectionExpanded(section_r25));
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("lucideIcon", ctx_r6.iconFor(section_r25.icon));
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(section_r25.label);
    i0.ɵɵadvance();
    i0.ɵɵclassProp("is-open", ctx_r6.isSectionExpanded(section_r25));
    i0.ɵɵadvance();
    i0.ɵɵconditional(ctx_r6.isSectionVisible(section_r25, mobile_r26) ? 6 : -1);
} }
function AdminShellComponent_ng_template_83_For_13_Conditional_2_Template(rf, ctx) { if (rf & 1) {
    const _r36 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "a", 139);
    i0.ɵɵlistener("click", function AdminShellComponent_ng_template_83_For_13_Conditional_2_Template_a_click_0_listener() { i0.ɵɵrestoreView(_r36); const mobile_r26 = i0.ɵɵnextContext(2).mobile; const ctx_r6 = i0.ɵɵnextContext(); return i0.ɵɵresetView(mobile_r26 ? ctx_r6.closeMobileNavigation(false) : null); });
    i0.ɵɵelementStart(1, "span", 108);
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(2, "svg", 109);
    i0.ɵɵelementEnd();
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(3, "span", 110);
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const section_r25 = i0.ɵɵnextContext().$implicit;
    const mobile_r26 = i0.ɵɵnextContext().mobile;
    const ctx_r6 = i0.ɵɵnextContext();
    i0.ɵɵclassProp("is-active", ctx_r6.isSectionActive(section_r25));
    i0.ɵɵproperty("routerLink", section_r25.route || "/admin/dashboard");
    i0.ɵɵattribute("title", ctx_r6.desktopCollapsed() && !mobile_r26 ? section_r25.label : null)("aria-current", ctx_r6.isSectionActive(section_r25) ? "page" : null);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("lucideIcon", ctx_r6.iconFor(section_r25.icon));
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(section_r25.label);
} }
function AdminShellComponent_ng_template_83_For_13_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "li", 92);
    i0.ɵɵconditionalCreate(1, AdminShellComponent_ng_template_83_For_13_Conditional_1_Template, 7, 10)(2, AdminShellComponent_ng_template_83_For_13_Conditional_2_Template, 5, 7, "a", 106);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const section_r25 = ctx.$implicit;
    i0.ɵɵadvance();
    i0.ɵɵconditional((section_r25.children == null ? null : section_r25.children.length) ? 1 : 2);
} }
function AdminShellComponent_ng_template_83_Template(rf, ctx) { if (rf & 1) {
    const _r21 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 84)(1, "span", 85);
    i0.ɵɵelement(2, "img", 86);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "span", 87)(4, "strong");
    i0.ɵɵtext(5, "GEU ERP");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "small");
    i0.ɵɵtext(7, "Admin console");
    i0.ɵɵelementEnd()();
    i0.ɵɵconditionalCreate(8, AdminShellComponent_ng_template_83_Conditional_8_Template, 3, 0, "button", 88)(9, AdminShellComponent_ng_template_83_Conditional_9_Template, 3, 3, "button", 89);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(10, "nav", 90)(11, "ul", 91);
    i0.ɵɵrepeaterCreate(12, AdminShellComponent_ng_template_83_For_13_Template, 3, 1, "li", 92, _forTrack2);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(14, "footer", 93)(15, "a", 94);
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(16, "svg", 95);
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(17, "span");
    i0.ɵɵtext(18, "Support");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(19, "div", 96)(20, "span", 97);
    i0.ɵɵtext(21);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(22, "span", 98)(23, "strong");
    i0.ɵɵtext(24);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(25, "small");
    i0.ɵɵtext(26);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(27, "button", 99);
    i0.ɵɵlistener("click", function AdminShellComponent_ng_template_83_Template_button_click_27_listener() { i0.ɵɵrestoreView(_r21); const ctx_r6 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r6.logout()); });
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(28, "svg", 100);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    let tmp_9_0;
    let tmp_10_0;
    const mobile_r26 = ctx.mobile;
    const ctx_r6 = i0.ɵɵnextContext();
    i0.ɵɵadvance(8);
    i0.ɵɵconditional(mobile_r26 ? 8 : 9);
    i0.ɵɵadvance(2);
    i0.ɵɵattribute("aria-label", mobile_r26 ? "Mobile admin navigation" : "Primary admin navigation");
    i0.ɵɵadvance(2);
    i0.ɵɵrepeater(ctx_r6.navigation());
    i0.ɵɵadvance(9);
    i0.ɵɵtextInterpolate(ctx_r6.adminInitials());
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(((tmp_9_0 = ctx_r6.auth.admin()) == null ? null : tmp_9_0.name) || "Administrator");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(((tmp_10_0 = ctx_r6.auth.admin()) == null ? null : tmp_10_0.email) || "Admin account");
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
    forms = signal([], ...(ngDevMode ? [{ debugName: "forms" }] : /* istanbul ignore next */ []));
    campusOptions = signal([], ...(ngDevMode ? [{ debugName: "campusOptions" }] : /* istanbul ignore next */ []));
    sessionOptions = signal([], ...(ngDevMode ? [{ debugName: "sessionOptions" }] : /* istanbul ignore next */ []));
    searchOpen = signal(false, ...(ngDevMode ? [{ debugName: "searchOpen" }] : /* istanbul ignore next */ []));
    searchClosing = signal(false, ...(ngDevMode ? [{ debugName: "searchClosing" }] : /* istanbul ignore next */ []));
    filterOpen = signal(false, ...(ngDevMode ? [{ debugName: "filterOpen" }] : /* istanbul ignore next */ []));
    recentOpen = signal(false, ...(ngDevMode ? [{ debugName: "recentOpen" }] : /* istanbul ignore next */ []));
    notificationsOpen = signal(false, ...(ngDevMode ? [{ debugName: "notificationsOpen" }] : /* istanbul ignore next */ []));
    profileOpen = signal(false, ...(ngDevMode ? [{ debugName: "profileOpen" }] : /* istanbul ignore next */ []));
    searchLoading = signal(false, ...(ngDevMode ? [{ debugName: "searchLoading" }] : /* istanbul ignore next */ []));
    searchResults = signal([], ...(ngDevMode ? [{ debugName: "searchResults" }] : /* istanbul ignore next */ []));
    recentPages = signal([], ...(ngDevMode ? [{ debugName: "recentPages" }] : /* istanbul ignore next */ []));
    enabledSearchTypes = signal([
        'module',
        'student',
        'workflow',
        'record',
    ], ...(ngDevMode ? [{ debugName: "enabledSearchTypes" }] : /* istanbul ignore next */ []));
    unreadNotifications = signal(3, ...(ngDevMode ? [{ debugName: "unreadNotifications" }] : /* istanbul ignore next */ []));
    globalSearchQuery = '';
    selectedCampus = '';
    selectedSession = '';
    selectedSearchStatus = '';
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
    globalSearchInput;
    desktopFlyoutAnchor = null;
    flyoutCloseTimer = null;
    globalSearchTimer = null;
    headerSearchCloseTimer = null;
    constructor() {
        this.syncNavigation(this.router.url);
        this.loadFormNavigation();
        this.loadHeaderContext();
        this.router.events
            .pipe(filter((event) => event instanceof NavigationEnd), takeUntilDestroyed())
            .subscribe((event) => {
            this.syncNavigation(event.urlAfterRedirects);
            this.rememberRecentPage(event.urlAfterRedirects);
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
    toggleHeaderPanel(panel) {
        if (panel === 'search') {
            if (this.searchOpen()) {
                this.closeHeaderPanels();
                return;
            }
            this.closeHeaderPanels(false);
            this.searchOpen.set(true);
            this.searchClosing.set(false);
            window.setTimeout(() => this.globalSearchInput?.nativeElement.focus(), 0);
            return;
        }
        const next = !this.headerPanelOpen(panel);
        this.closeHeaderPanels();
        if (panel === 'filter')
            this.filterOpen.set(next);
        else if (panel === 'recent')
            this.recentOpen.set(next);
        else if (panel === 'notifications')
            this.notificationsOpen.set(next);
        else
            this.profileOpen.set(next);
    }
    headerPanelOpen(panel) {
        return {
            search: this.searchOpen(),
            filter: this.filterOpen(),
            recent: this.recentOpen(),
            notifications: this.notificationsOpen(),
            profile: this.profileOpen(),
        }[panel];
    }
    closeHeaderPanels(animateSearch = true) {
        if (this.headerSearchCloseTimer !== null)
            window.clearTimeout(this.headerSearchCloseTimer);
        if (animateSearch && this.searchOpen()) {
            this.searchClosing.set(true);
            this.headerSearchCloseTimer = window.setTimeout(() => {
                this.searchOpen.set(false);
                this.searchClosing.set(false);
                this.headerSearchCloseTimer = null;
            }, 180);
        }
        else {
            this.searchOpen.set(false);
            this.searchClosing.set(false);
        }
        this.filterOpen.set(false);
        this.recentOpen.set(false);
        this.notificationsOpen.set(false);
        this.profileOpen.set(false);
    }
    onGlobalSearch(value) {
        this.globalSearchQuery = value;
        if (this.globalSearchTimer !== null)
            window.clearTimeout(this.globalSearchTimer);
        const query = value.trim();
        if (query.length < 2) {
            this.searchResults.set([]);
            this.searchLoading.set(false);
            return;
        }
        this.searchLoading.set(true);
        this.globalSearchTimer = window.setTimeout(() => this.executeGlobalSearch(query), 220);
    }
    toggleSearchType(type) {
        this.enabledSearchTypes.update((types) => types.includes(type) ? types.filter((item) => item !== type) : [...types, type]);
        if (this.globalSearchQuery.trim().length >= 2)
            this.onGlobalSearch(this.globalSearchQuery);
    }
    searchTypeEnabled(type) {
        return this.enabledSearchTypes().includes(type);
    }
    applyGlobalFilters() {
        this.filterOpen.set(false);
        this.searchOpen.set(true);
        if (this.globalSearchQuery.trim().length >= 2)
            this.onGlobalSearch(this.globalSearchQuery);
        window.setTimeout(() => this.globalSearchInput?.nativeElement.focus(), 0);
    }
    resetGlobalFilters() {
        this.enabledSearchTypes.set(['module', 'student', 'workflow', 'record']);
        this.selectedSearchStatus = '';
        this.selectedCampus = '';
        this.selectedSession = '';
    }
    openGlobalResult(result) {
        this.closeHeaderPanels();
        this.globalSearchQuery = '';
        this.searchResults.set([]);
        void this.router.navigateByUrl(result.route);
    }
    openRecent(route) {
        this.closeHeaderPanels();
        void this.router.navigateByUrl(route);
    }
    markNotificationsRead() {
        this.unreadNotifications.set(0);
    }
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
        if (this.searchOpen() ||
            this.filterOpen() ||
            this.recentOpen() ||
            this.notificationsOpen() ||
            this.profileOpen()) {
            this.closeHeaderPanels();
            return;
        }
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
        if (!target?.closest('.admin-header__interactive'))
            this.closeHeaderPanels();
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
    loadHeaderContext() {
        forkJoin({
            campuses: this.api.masterValues('university', { active: true }),
            sessions: this.api.masterValues('academic', { active: true }),
        }).subscribe({
            next: ({ campuses, sessions }) => {
                this.campusOptions.set(campuses.items);
                this.sessionOptions.set(sessions.items);
                if (!this.selectedCampus && campuses.items.length === 1) {
                    this.selectedCampus = campuses.items[0].name;
                }
                if (!this.selectedSession && sessions.items.length) {
                    this.selectedSession = sessions.items[0].name;
                }
            },
        });
    }
    executeGlobalSearch(query) {
        const normalised = query.toLowerCase();
        const localResults = [];
        if (this.searchTypeEnabled('module') ||
            this.searchTypeEnabled('workflow') ||
            this.searchTypeEnabled('record')) {
            for (const section of this.navigation()) {
                if (section.route && section.label.toLowerCase().includes(normalised)) {
                    localResults.push({
                        id: `section-${section.id}`,
                        title: section.label,
                        meta: 'Module',
                        type: 'module',
                        route: section.route,
                    });
                }
                for (const entry of section.children || []) {
                    if (entry.route && entry.label.toLowerCase().includes(normalised)) {
                        localResults.push({
                            id: `entry-${entry.id}`,
                            title: entry.label,
                            meta: section.label,
                            type: section.id === 'workflows'
                                ? 'workflow'
                                : section.id === 'records'
                                    ? 'record'
                                    : 'module',
                            route: entry.route,
                        });
                    }
                    for (const link of entry.children || []) {
                        if (!link.label.toLowerCase().includes(normalised))
                            continue;
                        localResults.push({
                            id: `link-${link.id}`,
                            title: link.label,
                            meta: `${section.label} · ${entry.label}`,
                            type: section.id === 'workflows'
                                ? 'workflow'
                                : section.id === 'records'
                                    ? 'record'
                                    : 'module',
                            route: link.route,
                        });
                    }
                }
            }
        }
        const filteredLocalResults = localResults.filter((result) => this.searchTypeEnabled(result.type));
        if (!this.searchTypeEnabled('student')) {
            this.searchResults.set(filteredLocalResults.slice(0, 20));
            this.searchLoading.set(false);
            return;
        }
        this.api
            .admissions({
            search: query,
            page: 1,
            limit: 12,
            status: this.selectedSearchStatus || undefined,
            university: this.selectedCampus || undefined,
            session: this.selectedSession || undefined,
        })
            .subscribe({
            next: ({ items }) => {
                if (this.globalSearchQuery.trim() !== query)
                    return;
                this.searchResults.set([
                    ...filteredLocalResults.slice(0, 8),
                    ...items.map((student) => this.studentSearchResult(student)),
                ]);
                this.searchLoading.set(false);
            },
            error: () => {
                this.searchResults.set(filteredLocalResults.slice(0, 20));
                this.searchLoading.set(false);
            },
        });
    }
    studentSearchResult(student) {
        return {
            id: `student-${student._id}`,
            title: student.studentName || student.applicationNumber || 'Student application',
            meta: [student.studentId || student.applicationNumber, student.courseName, student.status]
                .filter(Boolean)
                .join(' · '),
            type: 'student',
            route: `/admin/admissions/applications/${student._id}`,
        };
    }
    rememberRecentPage(route) {
        const title = resolveAdminPageContext(route, this.deepestRouteTitle()).title;
        this.recentPages.update((items) => [{ title, route }, ...items.filter((item) => item.route !== route)].slice(0, 6));
    }
    cancelFlyoutClose() {
        if (this.flyoutCloseTimer !== null)
            window.clearTimeout(this.flyoutCloseTimer);
        this.flyoutCloseTimer = null;
        this.closingSectionId.set(null);
    }
    loadFormNavigation() {
        this.api.forms().subscribe({
            next: ({ items }) => {
                this.forms.set(items);
                this.navigation.set(this.navigationForForms(items));
            },
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
                    ...(admissionForms.length
                        ? [
                            {
                                id: 'admission-workflows',
                                label: 'Application workflows',
                                description: 'Open published admission processes',
                                group: 'Application management',
                                icon: 'records',
                                children: admissionForms.map((form) => this.formNavigationEntry(form, 'admission')),
                            },
                        ]
                        : []),
                ],
            };
        }
        const operationalForms = published.filter((form) => (form.purpose || 'admission') !== 'admission');
        if (operationalForms.length) {
            const workflowGroups = [
                {
                    id: 'employee',
                    label: 'Employee workflows',
                    description: 'Employee onboarding and service forms',
                    icon: 'records',
                    forms: operationalForms.filter((form) => form.purpose === 'employee'),
                },
                {
                    id: 'faculty',
                    label: 'Faculty workflows',
                    description: 'Faculty onboarding and academic forms',
                    icon: 'students',
                    forms: operationalForms.filter((form) => form.purpose === 'faculty'),
                },
                {
                    id: 'general',
                    label: 'Other workflows',
                    description: 'General organisation processes',
                    icon: 'records',
                    forms: operationalForms.filter((form) => form.purpose === 'general'),
                },
            ];
            const workflowEntries = workflowGroups
                .filter((group) => group.forms.length)
                .map((group) => ({
                id: `workflow-${group.id}`,
                label: group.label,
                description: group.description,
                group: 'Published workflows',
                icon: group.icon,
                children: group.forms.map((form) => this.formNavigationEntry(form, group.id)),
            }));
            const academicsPosition = navigation.findIndex((section) => section.id === 'academics');
            navigation.splice(Math.max(1, academicsPosition), 0, {
                id: 'workflows',
                label: 'Workflows',
                description: 'Open published employee, faculty and organisation forms.',
                icon: 'approval',
                activeWhen: operationalForms.map((form) => new RegExp(`^/admin/forms/${form._id}/fill/?$`)),
                children: workflowEntries,
            });
        }
        const databaseSections = new Map();
        for (const form of forms.filter((item) => item.purpose !== 'admission' && item.destination?.databaseSectionId)) {
            const fallback = this.workflowPurpose(form.purpose);
            databaseSections.set(form.destination?.databaseSectionId || fallback.id, form.destination?.databaseSectionName || fallback.label);
        }
        const academicsPosition = navigation.findIndex((section) => section.id === 'academics');
        navigation.splice(Math.max(1, academicsPosition + 1), 0, {
            id: 'records',
            label: 'Records',
            description: 'Search student and workflow submission records.',
            icon: 'database',
            activeWhen: [new RegExp('^/admin/database(?:/|$)')],
            children: [
                {
                    id: 'database-students',
                    label: 'Student records',
                    description: 'Search submitted student data',
                    group: 'Core records',
                    route: '/admin/database/students',
                    icon: 'students',
                    activeWhen: [new RegExp('^/admin/database/students/?$')],
                },
                ...[...databaseSections].map(([sectionId, label]) => ({
                    id: `database-${sectionId}`,
                    label: `${label} records`,
                    description: `Browse ${label.toLowerCase()} submissions`,
                    group: 'Workflow records',
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
    workflowPurpose(purpose) {
        return {
            faculty: { id: 'faculty', label: 'Faculty' },
            employee: { id: 'employees', label: 'Employees' },
            general: { id: 'other-applications', label: 'Other applications' },
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
            i0.ɵɵviewQuery(_c0, 5)(_c1, 5)(_c2, 5)(_c3, 5);
        } if (rf & 2) {
            let _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.mobileMenuButton = _t.first);
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.mobileCloseButton = _t.first);
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.pageTitle = _t.first);
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.globalSearchInput = _t.first);
        } }, hostBindings: function AdminShellComponent_HostBindings(rf, ctx) { if (rf & 1) {
            i0.ɵɵlistener("tasklyFormsChanged", function AdminShellComponent_tasklyFormsChanged_HostBindingHandler() { return ctx.reloadFormNavigation(); }, i0.ɵɵresolveWindow)("keydown.escape", function AdminShellComponent_keydown_escape_HostBindingHandler() { return ctx.onEscape(); }, i0.ɵɵresolveDocument)("click", function AdminShellComponent_click_HostBindingHandler($event) { return ctx.onDocumentClick($event); }, i0.ɵɵresolveDocument)("resize", function AdminShellComponent_resize_HostBindingHandler() { return ctx.onWindowResize(); }, i0.ɵɵresolveWindow);
        } }, decls: 85, vars: 26, consts: [["mobileMenuButton", ""], ["pageTitle", ""], ["navigationContent", ""], ["globalSearchInput", ""], ["mobileCloseButton", ""], ["href", "#admin-main", 1, "admin-skip-link"], [1, "admin-shell"], ["aria-label", "Admin navigation", 1, "admin-sidebar", "admin-sidebar--desktop"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "admin-header"], ["type", "button", "aria-label", "Open admin navigation", "aria-controls", "admin-mobile-navigation", 1, "admin-icon-button", "admin-header__menu", 3, "click"], ["lucideMenu", "", "size", "20", "aria-hidden", "true"], ["aria-hidden", "true", 1, "admin-header__module-mark"], ["lucideGraduationCap", "", "size", "22"], [1, "admin-header__context"], ["aria-label", "Breadcrumb", 1, "admin-breadcrumbs"], ["tabindex", "-1", "aria-current", "page", 1, "admin-breadcrumbs__current"], ["lucideChevronRight", "", "size", "13", "aria-hidden", "true"], [1, "admin-header__interactive"], [1, "admin-context-select"], ["lucideLandmark", "", "size", "20", "aria-hidden", "true"], ["aria-label", "Current campus", 3, "ngModelChange", "ngModel"], ["value", ""], [3, "value"], ["lucideChevronDown", "", "size", "16", "aria-hidden", "true"], ["lucideCalendarDays", "", "size", "20", "aria-hidden", "true"], ["aria-label", "Current academic session", 3, "ngModelChange", "ngModel"], [1, "admin-header-action"], ["type", "button", "aria-label", "Recent pages", 1, "admin-header-square", 3, "click"], ["lucideClock3", "", "size", "20"], [1, "admin-header-tooltip"], [1, "admin-header-popover", "admin-recent-popover"], ["type", "button", "aria-label", "Global search", 1, "admin-header-square", 3, "click"], ["lucideSearch", "", "size", "20"], ["type", "button", "aria-label", "Global filters", 1, "admin-header-square", 3, "click"], ["lucideFilter", "", "size", "20"], [1, "admin-header-popover", "admin-filter-popover"], ["type", "button", "aria-label", "Notifications", 1, "admin-header-square", "admin-header__notification", 3, "click"], ["lucideBell", "", "size", "20"], [1, "admin-header-popover", "admin-notification-popover"], ["aria-hidden", "true", 1, "admin-header__divider"], [1, "admin-profile-control"], ["type", "button", 3, "click"], [1, "admin-header__avatar"], ["lucideChevronDown", "", "size", "17"], [1, "admin-header-popover", "admin-profile-popover"], [1, "admin-global-search", 3, "is-closing"], ["id", "admin-main", "tabindex", "-1", 1, "content", "admin-main"], ["type", "button", "tabindex", "-1", "aria-label", "Close module navigation", 1, "admin-module-backdrop", 3, "is-closing"], ["type", "button", "aria-label", "Close", 3, "click"], ["lucideX", "", "size", "17"], [1, "admin-recent-list"], ["type", "button"], ["lucideClock3", "", "size", "16"], ["lucideChevronRight", "", "size", "15"], ["type", "button", "aria-label", "Close filters", 3, "click"], ["type", "checkbox", 3, "change", "checked"], [1, "admin-filter-field"], [3, "ngModelChange", "ngModel"], ["value", "draft"], ["value", "submitted"], ["value", "pending_approval"], ["value", "approved"], ["type", "button", 1, "is-primary", 3, "click"], ["lucideBuilding2", "", "size", "17"], ["lucideLogOut", "", "size", "17"], [1, "admin-global-search"], [1, "admin-global-search__input"], ["placeholder", "Search students, applications, employees, faculty, forms and modules\u2026", "aria-label", "Search the ERP", 3, "ngModelChange", "ngModel"], ["type", "button", "aria-label", "Clear search"], [1, "admin-global-search__scope"], [1, "admin-global-search__results"], [1, "admin-global-search__hint"], ["lucideFilter", "", "size", "15"], ["type", "button", "aria-label", "Clear search", 3, "click"], ["lucideX", "", "size", "18"], ["lucideSearch", "", "size", "26"], ["lucideUserRound", "", "size", "18"], ["lucideGraduationCap", "", "size", "18"], ["lucideBuilding2", "", "size", "18"], ["lucideChevronRight", "", "size", "16"], ["type", "button", "tabindex", "-1", "aria-label", "Close module navigation", 1, "admin-module-backdrop", 3, "click"], ["type", "button", "tabindex", "-1", "aria-label", "Close admin navigation", 1, "admin-drawer-backdrop", 3, "click"], ["id", "admin-mobile-navigation", "role", "dialog", "aria-modal", "true", "aria-label", "Admin navigation", "cdkTrapFocus", "", 1, "admin-sidebar", "admin-sidebar--mobile", 3, "cdkTrapFocusAutoCapture"], [1, "admin-brand"], ["aria-hidden", "true", 1, "admin-brand__mark"], ["src", "assets/images/brand/graphic-era-mark.png", "alt", ""], [1, "admin-brand__copy"], ["type", "button", "aria-label", "Close admin navigation", 1, "admin-icon-button", "admin-brand__control"], ["type", "button", 1, "admin-icon-button", "admin-brand__control"], [1, "admin-navigation"], [1, "admin-navigation__list"], [1, "admin-navigation__section"], [1, "admin-sidebar__footer"], ["href", "mailto:support@geu.ac.in", 1, "admin-sidebar__support"], ["lucideLifeBuoy", "", "size", "17", "aria-hidden", "true"], [1, "admin-user"], ["aria-hidden", "true", 1, "admin-user__avatar"], [1, "admin-user__copy"], ["type", "button", "aria-label", "Sign out", 1, "admin-icon-button", "admin-user__logout", 3, "click"], ["lucideLogOut", "", "size", "17", "aria-hidden", "true"], ["type", "button", "aria-label", "Close admin navigation", 1, "admin-icon-button", "admin-brand__control", 3, "click"], ["lucideX", "", "size", "18", "aria-hidden", "true"], ["type", "button", 1, "admin-icon-button", "admin-brand__control", 3, "click"], ["lucideChevronRight", "", "size", "18", "aria-hidden", "true"], ["lucideChevronLeft", "", "size", "18", "aria-hidden", "true"], [1, "admin-navigation__item", "admin-navigation__item--section", 3, "is-active", "routerLink"], ["type", "button", 1, "admin-navigation__item", "admin-navigation__item--section", 3, "click"], [1, "admin-navigation__icon"], ["size", "18", "aria-hidden", "true", 3, "lucideIcon"], [1, "admin-navigation__label"], ["lucideChevronDown", "", "size", "15", "aria-hidden", "true", 1, "admin-navigation__chevron"], [1, "admin-navigation__children", "admin-navigation__children--module", 3, "is-closing", "id"], [1, "admin-navigation__children", "admin-navigation__children--module", 3, "id"], [1, "admin-navigation__flyout-header"], ["type", "button", "aria-label", "Close navigation popup", 3, "click"], ["lucideX", "", "size", "19", "aria-hidden", "true"], [1, "admin-navigation__module-summary"], ["aria-hidden", "true", 1, "admin-navigation__module-icon"], ["size", "42", 3, "lucideIcon"], [1, "admin-navigation__module-copy"], ["aria-hidden", "true", 1, "admin-navigation__module-spark"], [1, "admin-navigation__guidance"], ["lucideCircleHelp", "", "size", "19", "aria-hidden", "true"], [3, "routerLink"], [1, "admin-navigation__group-heading"], [1, "admin-navigation__item", "admin-navigation__item--child", 3, "is-active", "routerLink"], ["aria-hidden", "true"], ["type", "button", 1, "admin-navigation__item", "admin-navigation__item--child", 3, "click"], ["size", "16", "aria-hidden", "true", 3, "lucideIcon"], [1, "admin-navigation__description"], ["lucideChevronDown", "", "size", "14", "aria-hidden", "true", 1, "admin-navigation__chevron"], [1, "admin-navigation__subgroup", 3, "id"], [1, "admin-navigation__item", "admin-navigation__item--leaf", 3, "click", "routerLink"], ["size", "15", "aria-hidden", "true", 3, "lucideIcon"], [1, "admin-navigation__item", "admin-navigation__item--child", 3, "click", "routerLink"], ["lucideChevronRight", "", "size", "16", "aria-hidden", "true", 1, "admin-navigation__entry-arrow"], [3, "click", "routerLink"], ["lucideChevronRight", "", "size", "15", "aria-hidden", "true"], [1, "admin-navigation__item", "admin-navigation__item--section", 3, "click", "routerLink"]], template: function AdminShellComponent_Template(rf, ctx) { if (rf & 1) {
            const _r1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "a", 5);
            i0.ɵɵtext(1, "Skip to main content");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(2, "div", 6)(3, "aside", 7);
            i0.ɵɵelementContainer(4, 8);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(5, "header", 9)(6, "button", 10, 0);
            i0.ɵɵlistener("click", function AdminShellComponent_Template_button_click_6_listener() { return ctx.openMobileNavigation(); });
            i0.ɵɵnamespaceSVG();
            i0.ɵɵelement(8, "svg", 11);
            i0.ɵɵelementEnd();
            i0.ɵɵnamespaceHTML();
            i0.ɵɵelementStart(9, "span", 12);
            i0.ɵɵnamespaceSVG();
            i0.ɵɵelement(10, "svg", 13);
            i0.ɵɵelementEnd();
            i0.ɵɵnamespaceHTML();
            i0.ɵɵelementStart(11, "div", 14)(12, "nav", 15)(13, "ol");
            i0.ɵɵrepeaterCreate(14, AdminShellComponent_For_15_Template, 4, 2, "li", null, i0.ɵɵrepeaterTrackByIndex);
            i0.ɵɵelementStart(16, "li", 16, 1);
            i0.ɵɵnamespaceSVG();
            i0.ɵɵelement(18, "svg", 17);
            i0.ɵɵnamespaceHTML();
            i0.ɵɵelementStart(19, "span");
            i0.ɵɵtext(20);
            i0.ɵɵelementEnd()()()()();
            i0.ɵɵelementStart(21, "div", 18)(22, "label", 19);
            i0.ɵɵnamespaceSVG();
            i0.ɵɵelement(23, "svg", 20);
            i0.ɵɵnamespaceHTML();
            i0.ɵɵelementStart(24, "span")(25, "small");
            i0.ɵɵtext(26, "Campus");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(27, "select", 21);
            i0.ɵɵtwoWayListener("ngModelChange", function AdminShellComponent_Template_select_ngModelChange_27_listener($event) { i0.ɵɵrestoreView(_r1); i0.ɵɵtwoWayBindingSet(ctx.selectedCampus, $event) || (ctx.selectedCampus = $event); return i0.ɵɵresetView($event); });
            i0.ɵɵelementStart(28, "option", 22);
            i0.ɵɵtext(29, "All campuses");
            i0.ɵɵelementEnd();
            i0.ɵɵrepeaterCreate(30, AdminShellComponent_For_31_Template, 2, 2, "option", 23, _forTrack0);
            i0.ɵɵelementEnd()();
            i0.ɵɵnamespaceSVG();
            i0.ɵɵelement(32, "svg", 24);
            i0.ɵɵelementEnd();
            i0.ɵɵnamespaceHTML();
            i0.ɵɵelementStart(33, "label", 19);
            i0.ɵɵnamespaceSVG();
            i0.ɵɵelement(34, "svg", 25);
            i0.ɵɵnamespaceHTML();
            i0.ɵɵelementStart(35, "span")(36, "small");
            i0.ɵɵtext(37, "Academic session");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(38, "select", 26);
            i0.ɵɵtwoWayListener("ngModelChange", function AdminShellComponent_Template_select_ngModelChange_38_listener($event) { i0.ɵɵrestoreView(_r1); i0.ɵɵtwoWayBindingSet(ctx.selectedSession, $event) || (ctx.selectedSession = $event); return i0.ɵɵresetView($event); });
            i0.ɵɵelementStart(39, "option", 22);
            i0.ɵɵtext(40, "All sessions");
            i0.ɵɵelementEnd();
            i0.ɵɵrepeaterCreate(41, AdminShellComponent_For_42_Template, 2, 2, "option", 23, _forTrack0);
            i0.ɵɵelementEnd()();
            i0.ɵɵnamespaceSVG();
            i0.ɵɵelement(43, "svg", 24);
            i0.ɵɵelementEnd();
            i0.ɵɵnamespaceHTML();
            i0.ɵɵelementStart(44, "div", 27)(45, "button", 28);
            i0.ɵɵlistener("click", function AdminShellComponent_Template_button_click_45_listener() { return ctx.toggleHeaderPanel("recent"); });
            i0.ɵɵnamespaceSVG();
            i0.ɵɵelement(46, "svg", 29);
            i0.ɵɵelementEnd();
            i0.ɵɵnamespaceHTML();
            i0.ɵɵelementStart(47, "span", 30);
            i0.ɵɵtext(48, "Recent");
            i0.ɵɵelementEnd();
            i0.ɵɵconditionalCreate(49, AdminShellComponent_Conditional_49_Template, 13, 1, "section", 31);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(50, "div", 27)(51, "button", 32);
            i0.ɵɵlistener("click", function AdminShellComponent_Template_button_click_51_listener() { return ctx.toggleHeaderPanel("search"); });
            i0.ɵɵnamespaceSVG();
            i0.ɵɵelement(52, "svg", 33);
            i0.ɵɵelementEnd();
            i0.ɵɵnamespaceHTML();
            i0.ɵɵelementStart(53, "span", 30);
            i0.ɵɵtext(54, "Search");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(55, "div", 27)(56, "button", 34);
            i0.ɵɵlistener("click", function AdminShellComponent_Template_button_click_56_listener() { return ctx.toggleHeaderPanel("filter"); });
            i0.ɵɵnamespaceSVG();
            i0.ɵɵelement(57, "svg", 35);
            i0.ɵɵelementEnd();
            i0.ɵɵnamespaceHTML();
            i0.ɵɵelementStart(58, "span", 30);
            i0.ɵɵtext(59, "Filter");
            i0.ɵɵelementEnd();
            i0.ɵɵconditionalCreate(60, AdminShellComponent_Conditional_60_Template, 55, 5, "section", 36);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(61, "div", 27)(62, "button", 37);
            i0.ɵɵlistener("click", function AdminShellComponent_Template_button_click_62_listener() { return ctx.toggleHeaderPanel("notifications"); });
            i0.ɵɵnamespaceSVG();
            i0.ɵɵelement(63, "svg", 38);
            i0.ɵɵconditionalCreate(64, AdminShellComponent_Conditional_64_Template, 2, 1, "small");
            i0.ɵɵelementEnd();
            i0.ɵɵconditionalCreate(65, AdminShellComponent_Conditional_65_Template, 31, 0, "section", 39);
            i0.ɵɵelementEnd();
            i0.ɵɵnamespaceHTML();
            i0.ɵɵelement(66, "span", 40);
            i0.ɵɵelementStart(67, "div", 41)(68, "button", 42);
            i0.ɵɵlistener("click", function AdminShellComponent_Template_button_click_68_listener() { return ctx.toggleHeaderPanel("profile"); });
            i0.ɵɵelementStart(69, "span", 43);
            i0.ɵɵtext(70);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(71, "span")(72, "strong");
            i0.ɵɵtext(73);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(74, "small");
            i0.ɵɵtext(75, "Administrator");
            i0.ɵɵelementEnd()();
            i0.ɵɵnamespaceSVG();
            i0.ɵɵelement(76, "svg", 44);
            i0.ɵɵelementEnd();
            i0.ɵɵconditionalCreate(77, AdminShellComponent_Conditional_77_Template, 15, 3, "section", 45);
            i0.ɵɵelementEnd();
            i0.ɵɵconditionalCreate(78, AdminShellComponent_Conditional_78_Template, 25, 7, "section", 46);
            i0.ɵɵelementEnd()();
            i0.ɵɵnamespaceHTML();
            i0.ɵɵelementStart(79, "main", 47);
            i0.ɵɵelement(80, "router-outlet");
            i0.ɵɵelementEnd()();
            i0.ɵɵconditionalCreate(81, AdminShellComponent_Conditional_81_Template, 1, 2, "button", 48);
            i0.ɵɵconditionalCreate(82, AdminShellComponent_Conditional_82_Template, 3, 4);
            i0.ɵɵtemplate(83, AdminShellComponent_ng_template_83_Template, 29, 5, "ng-template", null, 2, i0.ɵɵtemplateRefExtractor);
        } if (rf & 2) {
            let tmp_24_0;
            const navigationContent_r20 = i0.ɵɵreference(84);
            i0.ɵɵadvance(2);
            i0.ɵɵclassProp("admin-shell--collapsed", ctx.desktopCollapsed());
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngTemplateOutlet", navigationContent_r20)("ngTemplateOutletContext", i0.ɵɵpureFunction0(25, _c4));
            i0.ɵɵadvance(2);
            i0.ɵɵattribute("aria-expanded", ctx.mobileOpen());
            i0.ɵɵadvance(8);
            i0.ɵɵrepeater(ctx.pageContext().breadcrumbs);
            i0.ɵɵadvance(6);
            i0.ɵɵtextInterpolate(ctx.pageContext().title);
            i0.ɵɵadvance(7);
            i0.ɵɵtwoWayProperty("ngModel", ctx.selectedCampus);
            i0.ɵɵadvance(3);
            i0.ɵɵrepeater(ctx.campusOptions());
            i0.ɵɵadvance(8);
            i0.ɵɵtwoWayProperty("ngModel", ctx.selectedSession);
            i0.ɵɵadvance(3);
            i0.ɵɵrepeater(ctx.sessionOptions());
            i0.ɵɵadvance(4);
            i0.ɵɵattribute("aria-expanded", ctx.recentOpen());
            i0.ɵɵadvance(4);
            i0.ɵɵconditional(ctx.recentOpen() ? 49 : -1);
            i0.ɵɵadvance(2);
            i0.ɵɵattribute("aria-expanded", ctx.searchOpen());
            i0.ɵɵadvance(5);
            i0.ɵɵclassProp("is-active", ctx.filterOpen());
            i0.ɵɵattribute("aria-expanded", ctx.filterOpen());
            i0.ɵɵadvance(4);
            i0.ɵɵconditional(ctx.filterOpen() ? 60 : -1);
            i0.ɵɵadvance(2);
            i0.ɵɵattribute("aria-expanded", ctx.notificationsOpen());
            i0.ɵɵadvance(2);
            i0.ɵɵconditional(ctx.unreadNotifications() ? 64 : -1);
            i0.ɵɵadvance();
            i0.ɵɵconditional(ctx.notificationsOpen() ? 65 : -1);
            i0.ɵɵadvance(3);
            i0.ɵɵattribute("aria-expanded", ctx.profileOpen());
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate(ctx.adminInitials());
            i0.ɵɵadvance(3);
            i0.ɵɵtextInterpolate(((tmp_24_0 = ctx.auth.admin()) == null ? null : tmp_24_0.name) || "Super Admin");
            i0.ɵɵadvance(4);
            i0.ɵɵconditional(ctx.profileOpen() ? 77 : -1);
            i0.ɵɵadvance();
            i0.ɵɵconditional(ctx.searchOpen() ? 78 : -1);
            i0.ɵɵadvance(3);
            i0.ɵɵconditional(ctx.desktopModuleOpen() ? 81 : -1);
            i0.ɵɵadvance();
            i0.ɵɵconditional(ctx.mobileOpen() ? 82 : -1);
        } }, dependencies: [CdkTrapFocus,
            FormsModule, i1.NgSelectOption, i1.ɵNgSelectMultipleOption, i1.DefaultValueAccessor, i1.SelectControlValueAccessor, i1.NgControlStatus, i1.NgModel, NgTemplateOutlet,
            RouterLink,
            RouterOutlet,
            LucideChevronDown,
            LucideChevronLeft,
            LucideChevronRight,
            LucideBell,
            LucideBuilding2,
            LucideCalendarDays,
            LucideClock3,
            LucideFilter,
            LucideGraduationCap,
            LucideLandmark,
            LucideUserRound,
            LucideCircleHelp,
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
                    FormsModule,
                    NgTemplateOutlet,
                    RouterLink,
                    RouterOutlet,
                    LucideChevronDown,
                    LucideChevronLeft,
                    LucideChevronRight,
                    LucideBell,
                    LucideBuilding2,
                    LucideCalendarDays,
                    LucideClock3,
                    LucideFilter,
                    LucideGraduationCap,
                    LucideLandmark,
                    LucideUserRound,
                    LucideCircleHelp,
                    LucideDynamicIcon,
                    LucideLifeBuoy,
                    LucideLogOut,
                    LucideMenu,
                    LucideSearch,
                    LucideX,
                ], changeDetection: ChangeDetectionStrategy.OnPush, template: "<a class=\"admin-skip-link\" href=\"#admin-main\">Skip to main content</a>\n\n<div class=\"admin-shell\" [class.admin-shell--collapsed]=\"desktopCollapsed()\">\n  <aside class=\"admin-sidebar admin-sidebar--desktop\" aria-label=\"Admin navigation\">\n    <ng-container\n      [ngTemplateOutlet]=\"navigationContent\"\n      [ngTemplateOutletContext]=\"{ mobile: false }\"\n    ></ng-container>\n  </aside>\n\n  <header class=\"admin-header\">\n    <button\n      #mobileMenuButton\n      class=\"admin-icon-button admin-header__menu\"\n      type=\"button\"\n      aria-label=\"Open admin navigation\"\n      aria-controls=\"admin-mobile-navigation\"\n      [attr.aria-expanded]=\"mobileOpen()\"\n      (click)=\"openMobileNavigation()\"\n    >\n      <svg lucideMenu size=\"20\" aria-hidden=\"true\"></svg>\n    </button>\n\n    <span class=\"admin-header__module-mark\" aria-hidden=\"true\">\n      <svg lucideGraduationCap size=\"22\"></svg>\n    </span>\n\n    <div class=\"admin-header__context\">\n      <nav class=\"admin-breadcrumbs\" aria-label=\"Breadcrumb\">\n        <ol>\n          @for (breadcrumb of pageContext().breadcrumbs; track $index; let first = $first) {\n            <li>\n              @if (!first) {\n                <svg lucideChevronRight size=\"13\" aria-hidden=\"true\"></svg>\n              }\n              <span>{{ breadcrumb }}</span>\n            </li>\n          }\n          <li #pageTitle class=\"admin-breadcrumbs__current\" tabindex=\"-1\" aria-current=\"page\">\n            <svg lucideChevronRight size=\"13\" aria-hidden=\"true\"></svg>\n            <span>{{ pageContext().title }}</span>\n          </li>\n        </ol>\n      </nav>\n    </div>\n\n    <div class=\"admin-header__interactive\">\n      <label class=\"admin-context-select\">\n        <svg lucideLandmark size=\"20\" aria-hidden=\"true\"></svg>\n        <span\n          ><small>Campus</small>\n          <select [(ngModel)]=\"selectedCampus\" aria-label=\"Current campus\">\n            <option value=\"\">All campuses</option>\n            @for (campus of campusOptions(); track campus._id) {\n              <option [value]=\"campus.name\">{{ campus.name }}</option>\n            }\n          </select>\n        </span>\n        <svg lucideChevronDown size=\"16\" aria-hidden=\"true\"></svg>\n      </label>\n\n      <label class=\"admin-context-select\">\n        <svg lucideCalendarDays size=\"20\" aria-hidden=\"true\"></svg>\n        <span\n          ><small>Academic session</small>\n          <select [(ngModel)]=\"selectedSession\" aria-label=\"Current academic session\">\n            <option value=\"\">All sessions</option>\n            @for (session of sessionOptions(); track session._id) {\n              <option [value]=\"session.name\">{{ session.name }}</option>\n            }\n          </select>\n        </span>\n        <svg lucideChevronDown size=\"16\" aria-hidden=\"true\"></svg>\n      </label>\n\n      <div class=\"admin-header-action\">\n        <button\n          class=\"admin-header-square\"\n          type=\"button\"\n          aria-label=\"Recent pages\"\n          [attr.aria-expanded]=\"recentOpen()\"\n          (click)=\"toggleHeaderPanel('recent')\"\n        >\n          <svg lucideClock3 size=\"20\"></svg>\n        </button>\n        <span class=\"admin-header-tooltip\">Recent</span>\n        @if (recentOpen()) {\n          <section class=\"admin-header-popover admin-recent-popover\">\n            <header>\n              <div><strong>Recent pages</strong><small>Your latest admin workspaces</small></div>\n              <button type=\"button\" aria-label=\"Close\" (click)=\"recentOpen.set(false)\">\n                <svg lucideX size=\"17\"></svg>\n              </button>\n            </header>\n            <div class=\"admin-recent-list\">\n              @for (item of recentPages(); track item.route) {\n                <button type=\"button\" (click)=\"openRecent(item.route)\">\n                  <svg lucideClock3 size=\"16\"></svg\n                  ><span\n                    ><strong>{{ item.title }}</strong\n                    ><small>{{ item.route }}</small></span\n                  ><svg lucideChevronRight size=\"15\"></svg>\n                </button>\n              } @empty {\n                <p>No recent pages in this session.</p>\n              }\n            </div>\n          </section>\n        }\n      </div>\n\n      <div class=\"admin-header-action\">\n        <button\n          class=\"admin-header-square\"\n          type=\"button\"\n          aria-label=\"Global search\"\n          [attr.aria-expanded]=\"searchOpen()\"\n          (click)=\"toggleHeaderPanel('search')\"\n        >\n          <svg lucideSearch size=\"20\"></svg>\n        </button>\n        <span class=\"admin-header-tooltip\">Search</span>\n      </div>\n\n      <div class=\"admin-header-action\">\n        <button\n          class=\"admin-header-square\"\n          type=\"button\"\n          aria-label=\"Global filters\"\n          [class.is-active]=\"filterOpen()\"\n          [attr.aria-expanded]=\"filterOpen()\"\n          (click)=\"toggleHeaderPanel('filter')\"\n        >\n          <svg lucideFilter size=\"20\"></svg>\n        </button>\n        <span class=\"admin-header-tooltip\">Filter</span>\n        @if (filterOpen()) {\n          <section class=\"admin-header-popover admin-filter-popover\">\n            <header>\n              <div>\n                <strong>Platform search filters</strong\n                ><small>Limit results across large ERP datasets</small>\n              </div>\n              <button type=\"button\" aria-label=\"Close filters\" (click)=\"filterOpen.set(false)\">\n                <svg lucideX size=\"17\"></svg>\n              </button>\n            </header>\n            <fieldset>\n              <legend>Search in</legend>\n              <label\n                ><input\n                  type=\"checkbox\"\n                  [checked]=\"searchTypeEnabled('module')\"\n                  (change)=\"toggleSearchType('module')\"\n                /><span\n                  >Modules and pages<small>Navigation, setup and operational tools</small></span\n                ></label\n              >\n              <label\n                ><input\n                  type=\"checkbox\"\n                  [checked]=\"searchTypeEnabled('student')\"\n                  (change)=\"toggleSearchType('student')\"\n                /><span>Students<small>Names, student IDs and application IDs</small></span></label\n              >\n              <label\n                ><input\n                  type=\"checkbox\"\n                  [checked]=\"searchTypeEnabled('workflow')\"\n                  (change)=\"toggleSearchType('workflow')\"\n                /><span\n                  >Employee and faculty workflows<small\n                    >Published forms and onboarding processes</small\n                  ></span\n                ></label\n              >\n              <label\n                ><input\n                  type=\"checkbox\"\n                  [checked]=\"searchTypeEnabled('record')\"\n                  (change)=\"toggleSearchType('record')\"\n                /><span>Records<small>Submission and database directories</small></span></label\n              >\n            </fieldset>\n            <label class=\"admin-filter-field\"\n              ><span>Student status</span\n              ><select [(ngModel)]=\"selectedSearchStatus\">\n                <option value=\"\">All statuses</option>\n                <option value=\"draft\">Draft</option>\n                <option value=\"submitted\">Submitted</option>\n                <option value=\"pending_approval\">Awaiting review</option>\n                <option value=\"approved\">Approved</option>\n              </select></label\n            >\n            <footer>\n              <button type=\"button\" (click)=\"resetGlobalFilters()\">Reset</button\n              ><button class=\"is-primary\" type=\"button\" (click)=\"applyGlobalFilters()\">\n                Apply filters\n              </button>\n            </footer>\n          </section>\n        }\n      </div>\n\n      <div class=\"admin-header-action\">\n        <button\n          class=\"admin-header-square admin-header__notification\"\n          type=\"button\"\n          aria-label=\"Notifications\"\n          [attr.aria-expanded]=\"notificationsOpen()\"\n          (click)=\"toggleHeaderPanel('notifications')\"\n        >\n          <svg lucideBell size=\"20\"></svg>\n          @if (unreadNotifications()) {\n            <small>{{ unreadNotifications() }}</small>\n          }\n        </button>\n        @if (notificationsOpen()) {\n          <section class=\"admin-header-popover admin-notification-popover\">\n            <header>\n              <div>\n                <strong>Notifications</strong><small>Updates requiring your attention</small>\n              </div>\n              <button type=\"button\" (click)=\"markNotificationsRead()\">Mark all read</button>\n            </header>\n            <div>\n              <article>\n                <i></i\n                ><span\n                  ><strong>Applications awaiting review</strong\n                  ><small>Open the student review queue to continue.</small></span\n                >\n              </article>\n              <article>\n                <i></i\n                ><span\n                  ><strong>Timetable configuration</strong\n                  ><small>Some periods still require timings.</small></span\n                >\n              </article>\n              <article>\n                <i></i\n                ><span\n                  ><strong>Fee schedule update</strong\n                  ><small>A publication window is approaching.</small></span\n                >\n              </article>\n            </div>\n          </section>\n        }\n      </div>\n\n      <span class=\"admin-header__divider\" aria-hidden=\"true\"></span>\n\n      <div class=\"admin-profile-control\">\n        <button\n          type=\"button\"\n          [attr.aria-expanded]=\"profileOpen()\"\n          (click)=\"toggleHeaderPanel('profile')\"\n        >\n          <span class=\"admin-header__avatar\">{{ adminInitials() }}</span>\n          <span\n            ><strong>{{ auth.admin()?.name || 'Super Admin' }}</strong\n            ><small>Administrator</small></span\n          >\n          <svg lucideChevronDown size=\"17\"></svg>\n        </button>\n        @if (profileOpen()) {\n          <section class=\"admin-header-popover admin-profile-popover\">\n            <header>\n              <span class=\"admin-header__avatar\">{{ adminInitials() }}</span>\n              <div>\n                <strong>{{ auth.admin()?.name || 'Super Admin' }}</strong\n                ><small>{{ auth.admin()?.email || 'Admin account' }}</small>\n              </div>\n            </header>\n            <button type=\"button\" (click)=\"openRecent('/admin/master-data/academic/view')\">\n              <svg lucideBuilding2 size=\"17\"></svg>Organisation settings\n            </button>\n            <button type=\"button\" (click)=\"logout()\">\n              <svg lucideLogOut size=\"17\"></svg>Sign out\n            </button>\n          </section>\n        }\n      </div>\n\n      @if (searchOpen()) {\n        <section class=\"admin-global-search\" [class.is-closing]=\"searchClosing()\">\n          <div class=\"admin-global-search__input\">\n            <svg lucideSearch size=\"20\"></svg>\n            <input\n              #globalSearchInput\n              [ngModel]=\"globalSearchQuery\"\n              (ngModelChange)=\"onGlobalSearch($event)\"\n              placeholder=\"Search students, applications, employees, faculty, forms and modules\u2026\"\n              aria-label=\"Search the ERP\"\n            />\n            @if (globalSearchQuery) {\n              <button type=\"button\" aria-label=\"Clear search\" (click)=\"onGlobalSearch('')\">\n                <svg lucideX size=\"18\"></svg>\n              </button>\n            }\n            <kbd>Esc</kbd>\n          </div>\n          <div class=\"admin-global-search__scope\">\n            <span>Searching:</span>\n            @for (type of enabledSearchTypes(); track type) {\n              <b>{{ type }}</b>\n            }\n            @if (selectedCampus) {\n              <b>{{ selectedCampus }}</b>\n            }\n            @if (selectedSession) {\n              <b>{{ selectedSession }}</b>\n            }\n          </div>\n          <div class=\"admin-global-search__results\">\n            @if (searchLoading()) {\n              <p>Searching across ERP records\u2026</p>\n            } @else if (globalSearchQuery.trim().length < 2) {\n              <div class=\"admin-global-search__hint\">\n                <svg lucideSearch size=\"26\"></svg><strong>Search the complete admin platform</strong\n                ><span>Enter at least two characters. Use Filters to narrow large datasets.</span>\n              </div>\n            } @else {\n              @for (result of searchResults(); track result.id) {\n                <button type=\"button\" (click)=\"openGlobalResult(result)\">\n                  @if (result.type === 'student') {\n                    <svg lucideUserRound size=\"18\"></svg>\n                  } @else if (result.type === 'workflow') {\n                    <svg lucideGraduationCap size=\"18\"></svg>\n                  } @else {\n                    <svg lucideBuilding2 size=\"18\"></svg>\n                  }\n                  <span\n                    ><strong>{{ result.title }}</strong\n                    ><small>{{ result.meta }}</small></span\n                  ><b>{{ result.type }}</b\n                  ><svg lucideChevronRight size=\"16\"></svg>\n                </button>\n              } @empty {\n                <div class=\"admin-global-search__hint\">\n                  <svg lucideSearch size=\"26\"></svg><strong>No matching results</strong\n                  ><span>Try another name, ID or change the platform filters.</span>\n                </div>\n              }\n            }\n          </div>\n          <footer>\n            <span>Results are limited for performance.</span\n            ><button type=\"button\" (click)=\"toggleHeaderPanel('filter')\">\n              <svg lucideFilter size=\"15\"></svg>Refine filters\n            </button>\n          </footer>\n        </section>\n      }\n    </div>\n  </header>\n\n  <main id=\"admin-main\" class=\"content admin-main\" tabindex=\"-1\">\n    <router-outlet />\n  </main>\n</div>\n\n@if (desktopModuleOpen()) {\n  <button\n    class=\"admin-module-backdrop\"\n    [class.is-closing]=\"flyoutClosing()\"\n    type=\"button\"\n    tabindex=\"-1\"\n    aria-label=\"Close module navigation\"\n    (click)=\"closeDesktopFlyout()\"\n  ></button>\n}\n\n@if (mobileOpen()) {\n  <button\n    class=\"admin-drawer-backdrop\"\n    type=\"button\"\n    tabindex=\"-1\"\n    aria-label=\"Close admin navigation\"\n    (click)=\"closeMobileNavigation()\"\n  ></button>\n  <aside\n    id=\"admin-mobile-navigation\"\n    class=\"admin-sidebar admin-sidebar--mobile\"\n    role=\"dialog\"\n    aria-modal=\"true\"\n    aria-label=\"Admin navigation\"\n    cdkTrapFocus\n    [cdkTrapFocusAutoCapture]=\"true\"\n  >\n    <ng-container\n      [ngTemplateOutlet]=\"navigationContent\"\n      [ngTemplateOutletContext]=\"{ mobile: true }\"\n    ></ng-container>\n  </aside>\n}\n\n<ng-template #navigationContent let-mobile=\"mobile\">\n  <div class=\"admin-brand\">\n    <span class=\"admin-brand__mark\" aria-hidden=\"true\">\n      <img src=\"assets/images/brand/graphic-era-mark.png\" alt=\"\" />\n    </span>\n    <span class=\"admin-brand__copy\">\n      <strong>GEU ERP</strong>\n      <small>Admin console</small>\n    </span>\n\n    @if (mobile) {\n      <button\n        #mobileCloseButton\n        class=\"admin-icon-button admin-brand__control\"\n        type=\"button\"\n        aria-label=\"Close admin navigation\"\n        (click)=\"closeMobileNavigation()\"\n      >\n        <svg lucideX size=\"18\" aria-hidden=\"true\"></svg>\n      </button>\n    } @else {\n      <button\n        class=\"admin-icon-button admin-brand__control\"\n        type=\"button\"\n        [attr.aria-label]=\"\n          desktopCollapsed() ? 'Expand admin navigation' : 'Collapse admin navigation'\n        \"\n        [attr.aria-expanded]=\"!desktopCollapsed()\"\n        (click)=\"toggleDesktopSidebar()\"\n      >\n        @if (desktopCollapsed()) {\n          <svg lucideChevronRight size=\"18\" aria-hidden=\"true\"></svg>\n        } @else {\n          <svg lucideChevronLeft size=\"18\" aria-hidden=\"true\"></svg>\n        }\n      </button>\n    }\n  </div>\n\n  <nav\n    class=\"admin-navigation\"\n    [attr.aria-label]=\"mobile ? 'Mobile admin navigation' : 'Primary admin navigation'\"\n  >\n    <ul class=\"admin-navigation__list\">\n      @for (section of navigation(); track section.id) {\n        <li class=\"admin-navigation__section\">\n          @if (section.children?.length) {\n            <button\n              class=\"admin-navigation__item admin-navigation__item--section\"\n              type=\"button\"\n              [class.is-active]=\"isSectionActive(section)\"\n              [attr.title]=\"desktopCollapsed() && !mobile ? section.label : null\"\n              [attr.aria-controls]=\"(mobile ? 'mobile-' : 'desktop-') + section.id + '-navigation'\"\n              [attr.aria-expanded]=\"isSectionExpanded(section)\"\n              (click)=\"toggleSection(section, $event, mobile)\"\n            >\n              <span class=\"admin-navigation__icon\">\n                <svg [lucideIcon]=\"iconFor(section.icon)\" size=\"18\" aria-hidden=\"true\"></svg>\n              </span>\n              <span class=\"admin-navigation__label\">{{ section.label }}</span>\n              <svg\n                class=\"admin-navigation__chevron\"\n                [class.is-open]=\"isSectionExpanded(section)\"\n                lucideChevronDown\n                size=\"15\"\n                aria-hidden=\"true\"\n              ></svg>\n            </button>\n\n            @if (isSectionVisible(section, mobile)) {\n              <ul\n                class=\"admin-navigation__children admin-navigation__children--module\"\n                [class.is-closing]=\"!mobile && closingSectionId() === section.id\"\n                [id]=\"(mobile ? 'mobile-' : 'desktop-') + section.id + '-navigation'\"\n                [attr.role]=\"!mobile ? 'dialog' : null\"\n                [attr.aria-modal]=\"!mobile ? 'true' : null\"\n                [attr.aria-label]=\"section.label + ' module navigation'\"\n              >\n                <li class=\"admin-navigation__flyout-header\">\n                  <div>\n                    <small>Module navigation</small>\n                    <strong>{{ section.label }}</strong>\n                  </div>\n                  <button\n                    type=\"button\"\n                    aria-label=\"Close navigation popup\"\n                    (click)=\"closeDesktopFlyout()\"\n                  >\n                    <svg lucideX size=\"19\" aria-hidden=\"true\"></svg>\n                    <small>Esc</small>\n                  </button>\n                </li>\n\n                <li class=\"admin-navigation__module-summary\">\n                  <span class=\"admin-navigation__module-icon\" aria-hidden=\"true\">\n                    <svg [lucideIcon]=\"iconFor(section.icon)\" size=\"42\"></svg>\n                    <small>\u2713</small>\n                  </span>\n                  <span class=\"admin-navigation__module-copy\">\n                    <strong>{{ moduleTitle(section) }}</strong>\n                    <span>{{ sectionDescription(section) }}</span>\n                    <small>{{ section.children?.length || 0 }} tools</small>\n                  </span>\n                  <span class=\"admin-navigation__module-spark\" aria-hidden=\"true\">\u2726</span>\n                </li>\n\n                @for (entry of section.children || []; track entry.id; let entryIndex = $index) {\n                  @if (showNavigationGroup(section.children || [], entryIndex)) {\n                    <li class=\"admin-navigation__group-heading\">\n                      <span>{{ navigationGroupLabel(section.children || [], entryIndex) }}</span>\n                      <i aria-hidden=\"true\"></i>\n                    </li>\n                  }\n                  <li>\n                    @if (entry.children?.length) {\n                      <button\n                        class=\"admin-navigation__item admin-navigation__item--child\"\n                        type=\"button\"\n                        [class.is-active]=\"isEntryActive(entry)\"\n                        [attr.aria-controls]=\"\n                          (mobile ? 'mobile-' : 'desktop-') + entry.id + '-navigation'\n                        \"\n                        [attr.aria-expanded]=\"isSubgroupExpanded(entry)\"\n                        (click)=\"toggleSubgroup(entry)\"\n                      >\n                        <span class=\"admin-navigation__icon\">\n                          <svg\n                            [lucideIcon]=\"iconFor(entry.icon)\"\n                            size=\"16\"\n                            aria-hidden=\"true\"\n                          ></svg>\n                        </span>\n                        <span class=\"admin-navigation__label\">{{ entry.label }}</span>\n                        <small class=\"admin-navigation__description\">{{\n                          entryDescription(entry)\n                        }}</small>\n                        <svg\n                          class=\"admin-navigation__chevron\"\n                          [class.is-open]=\"isSubgroupExpanded(entry)\"\n                          lucideChevronDown\n                          size=\"14\"\n                          aria-hidden=\"true\"\n                        ></svg>\n                      </button>\n\n                      @if (isSubgroupExpanded(entry)) {\n                        <ul\n                          class=\"admin-navigation__subgroup\"\n                          [id]=\"(mobile ? 'mobile-' : 'desktop-') + entry.id + '-navigation'\"\n                        >\n                          @for (link of entry.children || []; track link.id) {\n                            <li>\n                              <a\n                                class=\"admin-navigation__item admin-navigation__item--leaf\"\n                                [class.is-active]=\"matchesAdminRoute(link.activeWhen, currentUrl())\"\n                                [attr.aria-current]=\"\n                                  matchesAdminRoute(link.activeWhen, currentUrl()) ? 'page' : null\n                                \"\n                                [routerLink]=\"link.route\"\n                                (click)=\"selectNavigation($event, link.route, mobile)\"\n                              >\n                                <span class=\"admin-navigation__icon\">\n                                  <svg\n                                    [lucideIcon]=\"iconFor(link.icon)\"\n                                    size=\"15\"\n                                    aria-hidden=\"true\"\n                                  ></svg>\n                                </span>\n                                <span class=\"admin-navigation__label\">{{ link.label }}</span>\n                              </a>\n                            </li>\n                          }\n                        </ul>\n                      }\n                    } @else {\n                      <a\n                        class=\"admin-navigation__item admin-navigation__item--child\"\n                        [class.is-active]=\"isEntryActive(entry)\"\n                        [attr.aria-current]=\"isEntryActive(entry) ? 'page' : null\"\n                        [routerLink]=\"entry.route || '/admin/dashboard'\"\n                        (click)=\"\n                          selectNavigation($event, entry.route || '/admin/dashboard', mobile)\n                        \"\n                      >\n                        <span class=\"admin-navigation__icon\">\n                          <svg\n                            [lucideIcon]=\"iconFor(entry.icon)\"\n                            size=\"16\"\n                            aria-hidden=\"true\"\n                          ></svg>\n                        </span>\n                        <span class=\"admin-navigation__label\">{{ entry.label }}</span>\n                        <small class=\"admin-navigation__description\">{{\n                          entryDescription(entry)\n                        }}</small>\n                        <svg\n                          class=\"admin-navigation__entry-arrow\"\n                          lucideChevronRight\n                          size=\"16\"\n                          aria-hidden=\"true\"\n                        ></svg>\n                      </a>\n                    }\n                  </li>\n                }\n\n                <li class=\"admin-navigation__guidance\">\n                  <svg lucideCircleHelp size=\"19\" aria-hidden=\"true\"></svg>\n                  <strong>{{ section.label }} tools</strong>\n                  @if (section.children?.[0]?.route; as firstRoute) {\n                    <a\n                      [routerLink]=\"firstRoute\"\n                      (click)=\"selectNavigation($event, firstRoute, mobile)\"\n                    >\n                      Open first\n                      <svg lucideChevronRight size=\"15\" aria-hidden=\"true\"></svg>\n                    </a>\n                  }\n                </li>\n              </ul>\n            }\n          } @else {\n            <a\n              class=\"admin-navigation__item admin-navigation__item--section\"\n              [class.is-active]=\"isSectionActive(section)\"\n              [attr.title]=\"desktopCollapsed() && !mobile ? section.label : null\"\n              [attr.aria-current]=\"isSectionActive(section) ? 'page' : null\"\n              [routerLink]=\"section.route || '/admin/dashboard'\"\n              (click)=\"mobile ? closeMobileNavigation(false) : null\"\n            >\n              <span class=\"admin-navigation__icon\">\n                <svg [lucideIcon]=\"iconFor(section.icon)\" size=\"18\" aria-hidden=\"true\"></svg>\n              </span>\n              <span class=\"admin-navigation__label\">{{ section.label }}</span>\n            </a>\n          }\n        </li>\n      }\n    </ul>\n  </nav>\n\n  <footer class=\"admin-sidebar__footer\">\n    <a class=\"admin-sidebar__support\" href=\"mailto:support@geu.ac.in\">\n      <svg lucideLifeBuoy size=\"17\" aria-hidden=\"true\"></svg>\n      <span>Support</span>\n    </a>\n    <div class=\"admin-user\">\n      <span class=\"admin-user__avatar\" aria-hidden=\"true\">{{ adminInitials() }}</span>\n      <span class=\"admin-user__copy\">\n        <strong>{{ auth.admin()?.name || 'Administrator' }}</strong>\n        <small>{{ auth.admin()?.email || 'Admin account' }}</small>\n      </span>\n      <button\n        class=\"admin-icon-button admin-user__logout\"\n        type=\"button\"\n        aria-label=\"Sign out\"\n        (click)=\"logout()\"\n      >\n        <svg lucideLogOut size=\"17\" aria-hidden=\"true\"></svg>\n      </button>\n    </div>\n  </footer>\n</ng-template>\n", styles: ["/* ERP-LOCAL-STYLE: Admin shell geometry, responsive composition, and navigation states are owned by this component. */\n:host {\n  display: block;\n  height: 100dvh;\n  min-height: 0;\n  overflow: hidden;\n  min-width: 0;\n}\n\n*,\n*::before,\n*::after {\n  box-sizing: border-box;\n}\n\nbutton,\na {\n  font: inherit;\n}\n\n.admin-shell {\n  display: grid;\n  grid-template-columns: var(--erp-sidebar-width) minmax(0, 1fr);\n  grid-template-rows: var(--erp-header-height) minmax(0, 1fr);\n  height: 100dvh;\n  min-height: 0;\n  overflow: hidden;\n  background: var(--erp-canvas);\n  transition: grid-template-columns var(--erp-sidebar-expand-transition);\n}\n\n.admin-shell--collapsed {\n  grid-template-columns: var(--erp-sidebar-collapsed-width) minmax(0, 1fr);\n}\n\n.admin-sidebar {\n  display: flex;\n  min-width: 0;\n  flex-direction: column;\n  background:\n    linear-gradient(var(--erp-sidebar-pattern) 1px, transparent 1px),\n    linear-gradient(90deg, var(--erp-sidebar-pattern) 1px, transparent 1px),\n    radial-gradient(circle at top left, var(--erp-sidebar-glow), transparent 42%),\n    var(--erp-sidebar-surface);\n  background-size:\n    24px 24px,\n    24px 24px,\n    auto,\n    auto;\n  color: var(--erp-sidebar-text);\n}\n\n.admin-sidebar--desktop {\n  position: fixed;\n  z-index: var(--erp-z-sidebar);\n  inset: 0 auto 0 0;\n  width: var(--erp-sidebar-width);\n  height: 100dvh;\n  overflow: visible;\n  border-right: 1px solid var(--erp-sidebar-divider);\n  transition:\n    width var(--erp-sidebar-expand-duration) var(--erp-sidebar-expand-easing),\n    box-shadow var(--erp-sidebar-expand-duration) var(--erp-sidebar-expand-easing);\n}\n\n.admin-sidebar--mobile {\n  position: fixed;\n  z-index: var(--erp-z-drawer);\n  inset: 0 auto 0 0;\n  width: min(var(--erp-sidebar-mobile-width), calc(100vw - var(--erp-space-8)));\n  box-shadow: var(--erp-shadow-overlay);\n  animation: admin-drawer-enter var(--erp-drawer-enter-duration) var(--erp-ease-enter);\n}\n\n.admin-brand {\n  display: flex;\n  min-height: var(--erp-header-height);\n  align-items: center;\n  gap: var(--erp-space-2);\n  padding: 0 var(--erp-space-3);\n  border-bottom: 1px solid var(--erp-sidebar-divider);\n  background: var(--erp-sidebar-panel-surface);\n  backdrop-filter: blur(12px);\n}\n\n.admin-brand__mark {\n  display: grid;\n  width: 28px;\n  height: 28px;\n  flex: 0 0 28px;\n  place-items: center;\n  padding: 2px;\n  border: 1px solid var(--erp-sidebar-divider);\n  border-radius: var(--erp-radius-compact);\n  background: var(--erp-surface-raised);\n  box-shadow: var(--erp-shadow-card);\n}\n\n.admin-brand__mark img {\n  display: block;\n  width: 100%;\n  height: 100%;\n  object-fit: contain;\n}\n\n.admin-brand__copy,\n.admin-user__copy {\n  min-width: 0;\n}\n\n.admin-brand__copy {\n  display: flex;\n  flex: 1;\n  flex-direction: column;\n  line-height: var(--erp-line-caption);\n}\n\n.admin-brand__copy strong {\n  overflow: hidden;\n  color: var(--erp-text-heading);\n  font-size: var(--erp-font-size-sm);\n  font-weight: var(--erp-weight-semibold);\n  letter-spacing: var(--erp-letter-tight);\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n\n.admin-brand__copy small {\n  overflow: hidden;\n  color: var(--erp-text-muted);\n  font-size: var(--erp-font-size-2xs);\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n\n.admin-icon-button {\n  display: inline-grid;\n  width: 32px;\n  height: 32px;\n  flex: 0 0 auto;\n  place-items: center;\n  padding: 0;\n  border: 1px solid transparent;\n  border-radius: var(--erp-radius-control);\n  background: transparent;\n  color: var(--erp-text-muted);\n  cursor: pointer;\n  transition:\n    background var(--erp-control-transition),\n    border-color var(--erp-control-transition),\n    color var(--erp-control-transition);\n}\n\n.admin-icon-button:hover {\n  border-color: var(--erp-border-subtle);\n  background: var(--erp-surface-hover);\n  color: var(--erp-text-heading);\n}\n\n.admin-brand__control {\n  margin-left: auto;\n}\n\n.admin-navigation {\n  position: relative;\n  min-height: 0;\n  flex: 1;\n  overflow-x: hidden;\n  overflow-y: auto;\n  overscroll-behavior: contain;\n  padding: var(--erp-space-2);\n  scrollbar-width: thin;\n}\n\n.admin-navigation__list,\n.admin-navigation__children,\n.admin-navigation__subgroup {\n  margin: 0;\n  padding: 0;\n  list-style: none;\n}\n\n.admin-navigation__section + .admin-navigation__section {\n  margin-top: 4px;\n}\n\n.admin-navigation__section,\n.admin-navigation__section > li {\n  position: relative;\n}\n\n.admin-navigation__item {\n  position: relative;\n  display: flex;\n  width: 100%;\n  min-width: 0;\n  align-items: center;\n  gap: var(--erp-space-2);\n  border: 0;\n  outline: 1px solid transparent;\n  border-radius: var(--erp-sidebar-item-radius);\n  background: transparent;\n  color: var(--erp-sidebar-text);\n  text-align: left;\n  text-decoration: none;\n  cursor: pointer;\n  transition:\n    background var(--erp-nav-active-transition),\n    color var(--erp-nav-active-transition),\n    outline-color var(--erp-nav-active-transition),\n    box-shadow var(--erp-nav-active-transition),\n    transform var(--erp-nav-active-transition);\n}\n\n.admin-navigation__item--section {\n  min-height: var(--erp-sidebar-item-height);\n  padding: 0 var(--erp-space-2);\n  font-size: var(--erp-font-size-xs);\n  font-weight: var(--erp-weight-medium);\n}\n\n.admin-navigation__item--child {\n  min-height: 36px;\n  padding: 0 var(--erp-space-2);\n  font-size: var(--erp-font-size-xs);\n}\n\n.admin-navigation__item--leaf {\n  min-height: 34px;\n  padding: 0 var(--erp-space-2) 0 var(--erp-space-5);\n  color: var(--erp-text-muted);\n  font-size: var(--erp-font-size-xs);\n}\n\n.admin-navigation__item:hover {\n  background: var(--erp-sidebar-hover-bg);\n  color: var(--erp-text-heading);\n  outline-color: var(--erp-sidebar-divider);\n  /* Keep the icon column anchored while the rail expands and on item hover. */\n  transform: none;\n}\n\n.admin-navigation__item.is-active {\n  background: var(--erp-sidebar-active-bg);\n  outline-color: var(--erp-sidebar-divider);\n  box-shadow:\n    inset 3px 0 0 var(--erp-sidebar-active-edge),\n    var(--erp-shadow-card);\n  color: var(--erp-blue-700);\n  font-weight: var(--erp-weight-medium);\n}\n\n.admin-navigation__icon {\n  display: inline-grid;\n  width: 24px;\n  height: 22px;\n  flex: 0 0 24px;\n  place-items: center;\n  border-radius: var(--erp-radius-control);\n  background: transparent;\n  color: var(--erp-text-muted);\n  transition:\n    color var(--erp-nav-active-transition),\n    background var(--erp-nav-active-transition);\n}\n\n.admin-navigation__item.is-active .admin-navigation__icon {\n  background: var(--erp-blue-50);\n  color: var(--erp-icon-active-colour);\n}\n\n.admin-navigation__label {\n  min-width: 0;\n  flex: 1;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n\n.admin-navigation__chevron {\n  flex: 0 0 auto;\n  color: var(--erp-text-light);\n  transition: transform var(--erp-standard-transition);\n}\n\n.admin-navigation__chevron.is-open {\n  transform: rotate(180deg);\n}\n\n.admin-navigation__children {\n  margin: var(--erp-space-1) 0 var(--erp-space-2) 20px;\n  padding: var(--erp-space-1) var(--erp-space-1) var(--erp-space-1) var(--erp-space-2);\n  border-left: 1px solid var(--erp-blue-200);\n  border-radius: 0 var(--erp-radius-compact) var(--erp-radius-compact) 0;\n  background: var(--erp-sidebar-panel-surface);\n}\n\n.admin-sidebar--desktop .admin-navigation {\n  overflow-x: hidden;\n  overflow-y: auto;\n}\n\n.admin-sidebar--desktop .admin-navigation__children {\n  position: fixed;\n  z-index: var(--erp-z-dropdown);\n  left: calc(var(--erp-sidebar-width) + var(--erp-space-2));\n  width: min(\n    var(--erp-sidebar-panel-width),\n    calc(100vw - var(--erp-sidebar-width) - var(--erp-space-8))\n  );\n  margin: 0;\n  padding: var(--erp-space-1);\n  overflow-y: auto;\n  overscroll-behavior: contain;\n  border: 1px solid var(--erp-border-default);\n  border-radius: var(--erp-radius-compact);\n  background:\n    linear-gradient(var(--erp-sidebar-pattern) 1px, transparent 1px),\n    linear-gradient(90deg, var(--erp-sidebar-pattern) 1px, transparent 1px),\n    var(--erp-surface-overlay);\n  background-size:\n    24px 24px,\n    24px 24px,\n    auto;\n  box-shadow: var(--erp-shadow-sidebar-flyout);\n  animation: admin-flyout-enter 150ms var(--erp-ease-enter);\n  scrollbar-width: thin;\n}\n\n.admin-sidebar--desktop .admin-navigation__children::before {\n  display: none;\n}\n\n.admin-sidebar--desktop .admin-navigation__children > li {\n  position: relative;\n  z-index: 1;\n}\n\n.admin-sidebar--desktop .admin-navigation__item--child {\n  min-height: 36px;\n  padding: 0 var(--erp-space-2);\n}\n\n.admin-navigation__flyout-header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: var(--erp-space-3);\n  margin: calc(-1 * var(--erp-space-1)) calc(-1 * var(--erp-space-1)) var(--erp-space-1);\n  padding: var(--erp-space-2) var(--erp-space-3);\n  border-bottom: 1px solid var(--erp-border-subtle);\n  background: var(--erp-surface-detail-soft);\n}\n\n.admin-navigation__flyout-header div {\n  display: grid;\n  gap: 2px;\n}\n\n.admin-navigation__flyout-header small {\n  color: var(--erp-text-muted);\n  font-size: var(--erp-font-size-2xs);\n  font-weight: var(--erp-weight-medium);\n  text-transform: uppercase;\n  letter-spacing: var(--erp-letter-wide);\n}\n\n.admin-navigation__flyout-header strong {\n  color: var(--erp-text-heading);\n  font-size: var(--erp-font-size-sm);\n  font-weight: var(--erp-weight-semibold);\n}\n\n.admin-navigation__flyout-header button {\n  display: inline-grid;\n  width: 30px;\n  height: 30px;\n  flex: 0 0 auto;\n  place-items: center;\n  padding: 0;\n  color: var(--erp-text-muted);\n  background: transparent;\n  border: 1px solid transparent;\n  border-radius: var(--erp-radius-control);\n  cursor: pointer;\n}\n\n.admin-navigation__flyout-header button:hover {\n  color: var(--erp-text-heading);\n  background: var(--erp-surface-hover);\n  border-color: var(--erp-border-subtle);\n}\n\n.admin-navigation__subgroup {\n  margin: var(--erp-space-1) 0 var(--erp-space-2) 12px;\n  padding: var(--erp-space-1) 0 var(--erp-space-1) var(--erp-space-2);\n  border-left: 1px solid var(--erp-blue-200);\n}\n\n.admin-sidebar--desktop .admin-navigation__subgroup {\n  margin: 2px 0 var(--erp-space-1) var(--erp-space-4);\n  padding: 2px 0 2px var(--erp-space-2);\n}\n\n.admin-sidebar__footer {\n  flex: 0 0 auto;\n  padding: var(--erp-space-1) var(--erp-space-2);\n  border-top: 1px solid var(--erp-sidebar-divider);\n  background: var(--erp-sidebar-panel-surface);\n  backdrop-filter: blur(12px);\n}\n\n.admin-sidebar__support {\n  display: flex;\n  min-height: 36px;\n  align-items: center;\n  gap: var(--erp-space-2);\n  padding: 0 var(--erp-space-2);\n  border-radius: var(--erp-radius-control);\n  color: var(--erp-text-muted);\n  font-size: var(--erp-font-size-xs);\n  text-decoration: none;\n}\n\n.admin-sidebar__support:hover {\n  background: var(--erp-surface-hover);\n  color: var(--erp-text-heading);\n}\n\n.admin-user {\n  display: grid;\n  grid-template-columns: 32px minmax(0, 1fr) 32px;\n  align-items: center;\n  gap: var(--erp-space-2);\n  margin-top: var(--erp-space-1);\n  padding-top: var(--erp-space-2);\n  border-top: 1px solid var(--erp-border-subtle);\n}\n\n.admin-user__avatar {\n  display: grid;\n  width: 32px;\n  height: 32px;\n  place-items: center;\n  border: 1px solid var(--erp-blue-200);\n  border-radius: var(--erp-radius-avatar);\n  background: var(--erp-blue-50);\n  color: var(--erp-blue-700);\n  font-size: var(--erp-font-size-2xs);\n  font-weight: var(--erp-weight-semibold);\n}\n\n.admin-user__copy {\n  display: flex;\n  flex-direction: column;\n  line-height: var(--erp-line-caption);\n}\n\n.admin-user__copy strong,\n.admin-user__copy small {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n\n.admin-user__copy strong {\n  color: var(--erp-text-strong);\n  font-size: var(--erp-font-size-xs);\n  font-weight: var(--erp-weight-medium);\n}\n\n.admin-user__copy small {\n  color: var(--erp-text-light);\n  font-size: var(--erp-font-size-2xs);\n}\n\n.admin-user__logout {\n  width: 32px;\n  height: 32px;\n}\n\n.admin-header {\n  position: sticky;\n  z-index: var(--erp-z-header);\n  top: 0;\n  grid-column: 2;\n  grid-row: 1;\n  display: flex;\n  min-width: 0;\n  height: var(--erp-header-height);\n  align-items: center;\n  gap: var(--erp-space-2);\n  padding: 0 var(--erp-header-padding-inline);\n  border-bottom: 1px solid var(--erp-header-border);\n  background: var(--erp-header-bg);\n  box-shadow: var(--erp-shadow-header);\n  backdrop-filter: blur(12px);\n}\n\n.admin-header__menu {\n  display: none;\n}\n\n.admin-header__context {\n  min-width: 0;\n  flex: 1;\n}\n\n.admin-header__status {\n  display: flex;\n  min-width: max-content;\n  align-items: center;\n  gap: var(--erp-space-2);\n  color: var(--erp-text-muted);\n  font-size: var(--erp-font-size-xs);\n  white-space: nowrap;\n}\n\n.admin-header__status > svg {\n  flex: 0 0 auto;\n  color: var(--erp-blue-700);\n}\n\n.admin-header__status-divider {\n  width: 1px;\n  height: 24px;\n  margin-inline: var(--erp-space-3);\n  background: var(--erp-border-subtle);\n}\n\n.admin-header__status .admin-icon-button {\n  flex: 0 0 32px;\n  color: var(--erp-blue-700);\n}\n\n.admin-header__tools {\n  display: flex;\n  min-width: 0;\n  align-items: center;\n  gap: var(--erp-space-2);\n  color: var(--erp-text-heading);\n}\n\n.admin-header__search {\n  display: flex;\n  width: min(320px, 25vw);\n  min-height: 36px;\n  align-items: center;\n  gap: var(--erp-space-2);\n  padding-inline: var(--erp-space-3);\n  color: var(--erp-text-muted);\n  background: var(--erp-surface);\n  border: 1px solid var(--erp-border-default);\n  border-radius: var(--erp-radius-control);\n}\n\n.admin-header__search input {\n  width: 100%;\n  min-width: 0;\n  color: var(--erp-text-body);\n  background: transparent;\n  border: 0;\n  outline: 0;\n}\n\n.admin-header__notification {\n  position: relative;\n}\n\n.admin-header__notification small {\n  position: absolute;\n  top: -3px;\n  right: -3px;\n  display: grid;\n  min-width: 16px;\n  height: 16px;\n  place-items: center;\n  padding-inline: 3px;\n  color: var(--erp-text-on-primary);\n  font-size: 9px;\n  line-height: 1;\n  background: var(--erp-danger-600, var(--erp-danger-text));\n  border: 2px solid var(--erp-surface);\n  border-radius: var(--erp-radius-pill);\n}\n\n.admin-header__avatar {\n  display: inline-grid;\n  width: 34px;\n  height: 34px;\n  flex: 0 0 auto;\n  place-items: center;\n  color: var(--erp-blue-700);\n  font-size: var(--erp-font-size-xs);\n  font-weight: var(--erp-weight-bold);\n  background: var(--erp-blue-50);\n  border-radius: var(--erp-radius-avatar);\n}\n\n.admin-header__admin-name {\n  max-width: 9rem;\n  overflow: hidden;\n  font-size: var(--erp-font-size-xs);\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n\n.admin-breadcrumbs {\n  min-width: 0;\n}\n\n.admin-breadcrumbs ol {\n  display: flex;\n  min-width: 0;\n  align-items: center;\n  gap: var(--erp-space-1);\n  margin: 0;\n  padding: 0;\n  color: var(--erp-text-muted);\n  font-size: var(--erp-font-size-xs);\n  list-style: none;\n  white-space: nowrap;\n}\n\n.admin-breadcrumbs li {\n  display: flex;\n  min-width: 0;\n  align-items: center;\n  gap: var(--erp-space-1);\n}\n\n.admin-breadcrumbs span {\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\n.admin-breadcrumbs__current {\n  overflow: hidden;\n  color: var(--erp-text-heading);\n  font-weight: var(--erp-weight-semibold);\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n\n.admin-breadcrumbs__current:focus {\n  outline: none;\n}\n\n.admin-main {\n  grid-column: 2;\n  grid-row: 2;\n  align-self: stretch;\n  height: 100%;\n  min-height: 0;\n  margin: 0;\n  overflow-x: hidden;\n  overflow-y: auto;\n  overscroll-behavior: contain;\n  scrollbar-gutter: stable;\n}\n\n.admin-main:has(erp-dynamic-admission.embedded) {\n  overflow: hidden;\n}\n\n.admin-drawer-backdrop {\n  position: fixed;\n  z-index: calc(var(--erp-z-drawer) - 1);\n  inset: 0;\n  width: 100%;\n  height: 100%;\n  padding: 0;\n  border: 0;\n  background: var(--erp-backdrop);\n  cursor: default;\n  animation: admin-backdrop-enter var(--erp-drawer-enter-duration) var(--erp-ease-standard);\n}\n\n.admin-module-backdrop {\n  position: fixed;\n  z-index: calc(var(--erp-z-sidebar) - 1);\n  inset: 0;\n  width: 100%;\n  height: 100%;\n  padding: 0;\n  border: 0;\n  background: var(--erp-backdrop);\n  cursor: default;\n  animation: admin-backdrop-enter 240ms cubic-bezier(0.22, 1, 0.36, 1);\n}\n\n.admin-module-backdrop.is-closing {\n  pointer-events: none;\n  animation: admin-backdrop-exit 220ms cubic-bezier(0.4, 0, 1, 1) forwards;\n}\n\n.admin-sidebar--desktop .admin-navigation__children--module {\n  top: 0;\n  bottom: 0;\n  left: var(--erp-sidebar-width);\n  display: flex;\n  width: min(var(--erp-sidebar-module-panel-width), calc(100vw - var(--erp-sidebar-width)));\n  height: 100dvh;\n  max-height: none;\n  flex-direction: column;\n  gap: 0;\n  padding: 0 var(--erp-space-3) var(--erp-space-2);\n  border-block: 0;\n  border-left: 2px solid var(--erp-blue-500);\n  border-radius: 0;\n  background: var(--erp-surface-overlay);\n  background-image: none;\n  box-shadow: var(--erp-shadow-sidebar-flyout);\n  animation: admin-module-enter 240ms cubic-bezier(0.22, 1, 0.36, 1);\n  will-change: transform, opacity;\n}\n\n.admin-sidebar--desktop .admin-navigation__children--module.is-closing {\n  pointer-events: none;\n  animation: admin-module-exit 220ms cubic-bezier(0.4, 0, 1, 1) forwards;\n}\n\n.admin-sidebar--desktop .admin-navigation__children--module .admin-navigation__flyout-header {\n  min-height: 58px;\n  margin: 0 calc(-1 * var(--erp-space-3)) var(--erp-space-2);\n  padding: var(--erp-space-1) var(--erp-space-3);\n  background: var(--erp-surface);\n}\n\n.admin-sidebar--desktop .admin-navigation__children--module .admin-navigation__flyout-header small {\n  color: var(--erp-blue-600);\n}\n\n.admin-sidebar--desktop\n  .admin-navigation__children--module\n  .admin-navigation__flyout-header\n  strong {\n  font-size: var(--erp-font-size-lg);\n  line-height: var(--erp-line-section-title);\n}\n\n.admin-navigation__children--module .admin-navigation__flyout-header button {\n  width: 32px;\n  height: 42px;\n  grid-template-rows: 20px 12px;\n  color: var(--erp-text-heading);\n}\n\n.admin-navigation__children--module .admin-navigation__flyout-header button small {\n  color: var(--erp-text-muted);\n  font-size: var(--erp-font-size-2xs);\n  font-weight: var(--erp-weight-regular);\n  letter-spacing: var(--erp-letter-normal);\n  text-transform: none;\n}\n\n.admin-navigation__module-summary {\n  position: relative;\n  display: grid;\n  grid-template-columns: 56px minmax(0, 1fr);\n  min-height: 88px;\n  align-items: center;\n  gap: var(--erp-space-2);\n  padding: var(--erp-space-2);\n  border: 1px solid var(--erp-blue-200);\n  border-radius: var(--erp-radius-card);\n  background: var(--erp-blue-50);\n}\n\n.admin-navigation__module-icon {\n  position: relative;\n  display: grid;\n  width: 52px;\n  height: 52px;\n  place-items: center;\n  border-radius: var(--erp-radius-avatar);\n  background: var(--erp-blue-100);\n  color: var(--erp-blue-600);\n}\n\n.admin-navigation__module-icon > svg {\n  width: 30px;\n  height: 30px;\n}\n\n.admin-navigation__module-icon small {\n  position: absolute;\n  top: 2px;\n  right: 0;\n  display: grid;\n  width: 19px;\n  height: 19px;\n  place-items: center;\n  border: 2px solid var(--erp-surface);\n  border-radius: var(--erp-radius-avatar);\n  background: var(--erp-blue-500);\n  color: var(--erp-text-on-primary);\n  font-size: var(--erp-font-size-2xs);\n  font-weight: var(--erp-weight-bold);\n}\n\n.admin-navigation__module-copy {\n  display: grid;\n  min-width: 0;\n  gap: 2px;\n}\n\n.admin-navigation__module-copy strong {\n  color: var(--erp-text-heading);\n  font-size: var(--erp-font-size-sm);\n  font-weight: var(--erp-weight-semibold);\n}\n\n.admin-navigation__module-copy > span {\n  color: var(--erp-text-body);\n  font-size: var(--erp-font-size-2xs);\n  line-height: var(--erp-line-caption);\n}\n\n.admin-navigation__module-copy small {\n  justify-self: start;\n  margin-top: 2px;\n  padding: 1px var(--erp-space-2);\n  border-radius: var(--erp-radius-pill);\n  background: var(--erp-blue-100);\n  color: var(--erp-blue-700);\n  font-size: var(--erp-font-size-2xs);\n  font-weight: var(--erp-weight-semibold);\n}\n\n.admin-navigation__module-spark {\n  position: absolute;\n  top: var(--erp-space-2);\n  right: var(--erp-space-2);\n  color: var(--erp-kpi-orange-text);\n  font-size: var(--erp-font-size-sm);\n}\n\n.admin-navigation__group-heading {\n  display: flex;\n  min-height: 28px;\n  align-items: center;\n  gap: var(--erp-space-2);\n  padding: var(--erp-space-1) var(--erp-space-1) 2px;\n  color: var(--erp-text-muted);\n  font-size: var(--erp-font-size-2xs);\n  font-weight: var(--erp-weight-medium);\n  letter-spacing: var(--erp-letter-wide);\n  text-transform: uppercase;\n}\n\n.admin-navigation__group-heading i {\n  height: 1px;\n  flex: 1;\n  background: var(--erp-border-subtle);\n}\n\n.admin-sidebar--desktop .admin-navigation__children--module .admin-navigation__item--child {\n  display: grid;\n  grid-template-columns: 32px minmax(0, 1fr) 16px;\n  grid-template-rows: auto auto;\n  min-height: 42px;\n  column-gap: var(--erp-space-1);\n  padding: 3px var(--erp-space-1);\n}\n\n.admin-navigation__children--module .admin-navigation__item--child::before {\n  position: absolute;\n  inset: 0 auto 0 0;\n  width: 3px;\n  border-radius: 0 var(--erp-radius-xs) var(--erp-radius-xs) 0;\n  background: transparent;\n  content: '';\n}\n\n.admin-navigation__children--module .admin-navigation__item--child.is-active::before {\n  background: var(--erp-blue-500);\n}\n\n.admin-navigation__children--module .admin-navigation__item--child .admin-navigation__icon {\n  grid-row: 1 / 3;\n  width: 32px;\n  height: 32px;\n  align-self: center;\n  color: var(--erp-text-muted);\n}\n\n.admin-navigation__children--module\n  .admin-navigation__item--child.is-active\n  .admin-navigation__icon {\n  background: transparent;\n  color: var(--erp-blue-600);\n}\n\n.admin-navigation__children--module .admin-navigation__item--child .admin-navigation__label {\n  grid-column: 2;\n  align-self: end;\n  color: var(--erp-text-strong);\n  font-size: var(--erp-font-size-xs);\n  font-weight: var(--erp-weight-semibold);\n}\n\n.admin-navigation__description {\n  grid-column: 2;\n  align-self: start;\n  overflow: hidden;\n  color: var(--erp-text-muted);\n  font-size: var(--erp-font-size-2xs);\n  line-height: var(--erp-line-caption);\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n\n.admin-navigation__entry-arrow {\n  grid-column: 3;\n  grid-row: 1 / 3;\n  align-self: center;\n  color: var(--erp-text-muted);\n}\n\n.admin-navigation__guidance {\n  display: grid;\n  grid-template-columns: 20px minmax(0, 1fr) auto;\n  min-height: 42px;\n  align-items: center;\n  gap: var(--erp-space-2);\n  margin-top: auto;\n  padding: var(--erp-space-1) var(--erp-space-2);\n  border: 1px solid var(--erp-blue-200);\n  border-radius: var(--erp-radius-compact);\n  background: var(--erp-blue-50);\n  color: var(--erp-blue-600);\n}\n\n.admin-navigation__guidance strong,\n.admin-navigation__guidance a {\n  font-size: var(--erp-font-size-2xs);\n}\n\n.admin-navigation__guidance strong {\n  color: var(--erp-text-strong);\n  font-weight: var(--erp-weight-semibold);\n}\n\n.admin-navigation__guidance a {\n  display: inline-flex;\n  align-items: center;\n  gap: var(--erp-space-1);\n  color: var(--erp-text-link);\n  text-decoration: none;\n}\n\n.admin-skip-link {\n  position: fixed;\n  z-index: var(--erp-z-toast);\n  top: var(--erp-space-2);\n  left: var(--erp-space-2);\n  padding: var(--erp-space-2) var(--erp-space-3);\n  border-radius: var(--erp-radius-control);\n  background: var(--erp-text-heading);\n  color: var(--erp-text-on-primary);\n  font-size: var(--erp-font-size-xs);\n  font-weight: var(--erp-weight-semibold);\n  text-decoration: none;\n  transform: translateY(calc(-100% - var(--erp-space-3)));\n  transition: transform var(--erp-standard-transition);\n}\n\n.admin-skip-link:focus {\n  transform: translateY(0);\n}\n\n.admin-icon-button:focus-visible,\n.admin-navigation__item:focus-visible,\n.admin-sidebar__support:focus-visible,\n.admin-skip-link:focus-visible {\n  outline: var(--erp-focus-ring-width) solid var(--erp-focus-outline);\n  outline-offset: var(--erp-focus-ring-offset);\n}\n\n.admin-shell--collapsed .admin-sidebar--desktop .admin-brand {\n  gap: var(--erp-space-1);\n  justify-content: center;\n  padding: 0 var(--erp-space-1);\n}\n\n.admin-shell--collapsed .admin-sidebar--desktop .admin-brand__mark {\n  width: 24px;\n  height: 24px;\n  flex-basis: 24px;\n}\n\n.admin-shell--collapsed .admin-sidebar--desktop {\n  width: var(--erp-sidebar-collapsed-width);\n  overflow: visible;\n}\n\n.admin-shell--collapsed .admin-sidebar--desktop:hover,\n.admin-shell--collapsed .admin-sidebar--desktop:focus-within {\n  width: var(--erp-sidebar-width);\n  box-shadow: var(--erp-shadow-sidebar);\n}\n\n.admin-shell--collapsed .admin-sidebar--desktop .admin-brand__copy,\n.admin-shell--collapsed .admin-sidebar--desktop .admin-navigation__label,\n.admin-shell--collapsed .admin-sidebar--desktop .admin-navigation__chevron,\n.admin-shell--collapsed .admin-sidebar--desktop .admin-sidebar__support span,\n.admin-shell--collapsed .admin-sidebar--desktop .admin-user__copy {\n  max-width: 0;\n  overflow: hidden;\n  visibility: hidden;\n  opacity: 0;\n  pointer-events: none;\n  transform: translateX(-6px);\n  transition:\n    max-width var(--erp-sidebar-expand-duration) var(--erp-sidebar-expand-easing),\n    opacity var(--erp-sidebar-expand-duration) var(--erp-sidebar-expand-easing),\n    transform var(--erp-sidebar-expand-duration) var(--erp-sidebar-expand-easing),\n    visibility 0s linear var(--erp-sidebar-collapse-duration);\n}\n\n.admin-shell--collapsed .admin-sidebar--desktop .admin-navigation__children,\n.admin-shell--collapsed .admin-sidebar--desktop .admin-user__avatar {\n  display: none;\n}\n\n.admin-shell--collapsed .admin-sidebar--desktop .admin-brand__control {\n  width: 24px;\n  height: 24px;\n  margin-left: 0;\n}\n\n.admin-shell--collapsed .admin-sidebar--desktop .admin-navigation__item--section {\n  width: 100%;\n  min-height: var(--erp-sidebar-item-height);\n  justify-content: flex-start;\n  margin-inline: 0;\n  padding: 0 12px;\n}\n\n.admin-shell--collapsed .admin-sidebar--desktop .admin-navigation__icon {\n  width: 24px;\n  flex-basis: 24px;\n}\n\n.admin-shell--collapsed .admin-sidebar--desktop .admin-sidebar__support {\n  justify-content: flex-start;\n  padding-inline: 12px;\n}\n\n.admin-shell--collapsed .admin-sidebar--desktop .admin-user {\n  display: flex;\n  justify-content: center;\n}\n\n.admin-shell--collapsed .admin-sidebar--desktop:hover .admin-brand,\n.admin-shell--collapsed .admin-sidebar--desktop:focus-within .admin-brand {\n  justify-content: flex-start;\n  gap: var(--erp-space-2);\n  padding: 0 var(--erp-space-3);\n}\n\n.admin-shell--collapsed .admin-sidebar--desktop:hover .admin-brand__mark,\n.admin-shell--collapsed .admin-sidebar--desktop:focus-within .admin-brand__mark {\n  width: 24px;\n  height: 24px;\n  flex-basis: 24px;\n}\n\n.admin-shell--collapsed .admin-sidebar--desktop:hover .admin-brand__copy,\n.admin-shell--collapsed .admin-sidebar--desktop:focus-within .admin-brand__copy {\n  display: flex;\n  max-width: 10rem;\n  visibility: visible;\n  opacity: 1;\n  pointer-events: auto;\n  transform: translateX(0);\n  transition-delay: var(--erp-sidebar-expand-delay);\n}\n\n.admin-shell--collapsed .admin-sidebar--desktop:hover .admin-brand__control,\n.admin-shell--collapsed .admin-sidebar--desktop:focus-within .admin-brand__control {\n  width: 32px;\n  height: 32px;\n  margin-left: auto;\n}\n\n.admin-shell--collapsed .admin-sidebar--desktop:hover .admin-navigation__item--section,\n.admin-shell--collapsed .admin-sidebar--desktop:focus-within .admin-navigation__item--section {\n  width: 100%;\n  justify-content: flex-start;\n  margin-inline: 0;\n  /* The same 12px inset keeps the 24px icon slot fixed as the rail widens. */\n  padding: 0 12px;\n}\n\n.admin-shell--collapsed .admin-sidebar--desktop:hover .admin-navigation__label,\n.admin-shell--collapsed .admin-sidebar--desktop:focus-within .admin-navigation__label {\n  max-width: 7.5rem;\n  flex: 1;\n  visibility: visible;\n  opacity: 1;\n  pointer-events: auto;\n  transform: translateX(0);\n  transition-delay: var(--erp-sidebar-expand-delay);\n}\n\n.admin-shell--collapsed .admin-sidebar--desktop:hover .admin-navigation__chevron,\n.admin-shell--collapsed .admin-sidebar--desktop:focus-within .admin-navigation__chevron {\n  max-width: 1.25rem;\n  visibility: visible;\n  opacity: 1;\n  pointer-events: auto;\n  transform: translateX(0);\n  transition-delay: var(--erp-sidebar-expand-delay);\n}\n\n.admin-shell--collapsed .admin-sidebar--desktop:hover .admin-navigation__chevron.is-open,\n.admin-shell--collapsed .admin-sidebar--desktop:focus-within .admin-navigation__chevron.is-open {\n  transform: rotate(180deg);\n}\n\n.admin-shell--collapsed .admin-sidebar--desktop:hover .admin-navigation__children,\n.admin-shell--collapsed .admin-sidebar--desktop:focus-within .admin-navigation__children {\n  display: block;\n}\n\n.admin-shell--collapsed .admin-sidebar--desktop:hover .admin-sidebar__support,\n.admin-shell--collapsed .admin-sidebar--desktop:focus-within .admin-sidebar__support {\n  justify-content: flex-start;\n  /* Keep the support icon in the same column as the collapsed rail. */\n  padding-inline: 12px;\n}\n\n.admin-shell--collapsed .admin-sidebar--desktop:hover .admin-sidebar__support span,\n.admin-shell--collapsed .admin-sidebar--desktop:focus-within .admin-sidebar__support span {\n  max-width: 8rem;\n  visibility: visible;\n  opacity: 1;\n  pointer-events: auto;\n  transform: translateX(0);\n  transition-delay: var(--erp-sidebar-expand-delay);\n}\n\n.admin-shell--collapsed .admin-sidebar--desktop:hover .admin-user,\n.admin-shell--collapsed .admin-sidebar--desktop:focus-within .admin-user {\n  display: grid;\n  justify-content: initial;\n}\n\n.admin-shell--collapsed .admin-sidebar--desktop:hover .admin-user__avatar,\n.admin-shell--collapsed .admin-sidebar--desktop:focus-within .admin-user__avatar {\n  display: grid;\n}\n\n.admin-shell--collapsed .admin-sidebar--desktop:hover .admin-user__copy,\n.admin-shell--collapsed .admin-sidebar--desktop:focus-within .admin-user__copy {\n  display: flex;\n  max-width: 9rem;\n  visibility: visible;\n  opacity: 1;\n  pointer-events: auto;\n  transform: translateX(0);\n  transition-delay: var(--erp-sidebar-expand-delay);\n}\n\n@keyframes admin-drawer-enter {\n  from {\n    transform: translateX(calc(-1 * var(--erp-drawer-enter-shift)));\n    opacity: 0;\n  }\n}\n\n@keyframes admin-flyout-enter {\n  from {\n    transform: translateX(-6px);\n    opacity: 0;\n  }\n}\n\n@keyframes admin-module-enter {\n  from {\n    transform: translateX(-28px);\n    opacity: 0;\n  }\n}\n\n@keyframes admin-module-exit {\n  to {\n    transform: translateX(-24px);\n    opacity: 0;\n  }\n}\n\n@keyframes admin-backdrop-enter {\n  from {\n    opacity: 0;\n  }\n}\n\n@keyframes admin-backdrop-exit {\n  to {\n    opacity: 0;\n  }\n}\n\n@media (max-width: 767px) {\n  .admin-module-backdrop {\n    display: none;\n  }\n\n  .admin-shell,\n  .admin-shell--collapsed {\n    grid-template-columns: minmax(0, 1fr);\n  }\n\n  .admin-sidebar--desktop {\n    display: none;\n  }\n\n  .admin-header,\n  .admin-main {\n    grid-column: 1;\n  }\n\n  .admin-header {\n    gap: var(--erp-space-2);\n    padding: 0 var(--erp-page-padding-mobile);\n  }\n\n  .admin-header__menu {\n    display: inline-grid;\n    width: 36px;\n    height: 36px;\n  }\n\n  .admin-header__context {\n    display: block;\n  }\n\n  .admin-header__status,\n  .admin-header__tools {\n    display: none;\n  }\n\n  .admin-breadcrumbs li:not(.admin-breadcrumbs__current) {\n    display: none;\n  }\n\n  .admin-breadcrumbs__current svg {\n    display: none;\n  }\n\n  .admin-sidebar--mobile .admin-brand {\n    padding-inline: var(--erp-space-3);\n  }\n\n  .admin-sidebar--mobile .admin-navigation {\n    overflow-x: hidden;\n    overflow-y: auto;\n  }\n\n  .admin-sidebar--mobile .admin-navigation__children {\n    position: static;\n    width: auto;\n    max-height: none;\n    margin: var(--erp-space-1) 0 var(--erp-space-2) 20px;\n    padding: var(--erp-space-1) var(--erp-space-1) var(--erp-space-1) var(--erp-space-2);\n    overflow: visible;\n    border: 0;\n    border-left: 1px solid var(--erp-blue-200);\n    border-radius: 0 var(--erp-radius-compact) var(--erp-radius-compact) 0;\n    background: var(--erp-sidebar-panel-surface);\n    box-shadow: none;\n    animation: none;\n  }\n\n  .admin-sidebar--mobile .admin-navigation__children::before {\n    display: none;\n  }\n\n  .admin-sidebar--mobile .admin-navigation__flyout-header {\n    display: none;\n  }\n\n  .admin-sidebar--mobile .admin-navigation__module-summary,\n  .admin-sidebar--mobile .admin-navigation__group-heading,\n  .admin-sidebar--mobile .admin-navigation__guidance,\n  .admin-sidebar--mobile .admin-navigation__description,\n  .admin-sidebar--mobile .admin-navigation__entry-arrow {\n    display: none;\n  }\n\n  .admin-sidebar--mobile .admin-navigation__item--section,\n  .admin-sidebar--mobile .admin-navigation__item--child,\n  .admin-sidebar--mobile .admin-sidebar__support {\n    min-height: var(--erp-control-height-mobile);\n  }\n\n  .admin-sidebar--mobile .admin-navigation__item--leaf {\n    min-height: 40px;\n  }\n\n  .admin-sidebar--mobile .admin-user__logout {\n    width: var(--erp-control-height-mobile);\n    height: var(--erp-control-height-mobile);\n  }\n}\n\n@media (prefers-reduced-motion: reduce) {\n  .admin-shell,\n  .admin-navigation__chevron,\n  .admin-drawer-backdrop,\n  .admin-module-backdrop,\n  .admin-sidebar--mobile,\n  .admin-skip-link {\n    animation-duration: 1ms;\n    transition-duration: 1ms;\n  }\n}\n"] }]
    }], () => [], { mobileMenuButton: [{
            type: ViewChild,
            args: ['mobileMenuButton']
        }], mobileCloseButton: [{
            type: ViewChild,
            args: ['mobileCloseButton']
        }], pageTitle: [{
            type: ViewChild,
            args: ['pageTitle']
        }], globalSearchInput: [{
            type: ViewChild,
            args: ['globalSearchInput']
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
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(AdminShellComponent, { className: "AdminShellComponent", filePath: "frontend/src/app/features/admin/layout/admin-shell.component.ts", lineNumber: 92 }); })();
