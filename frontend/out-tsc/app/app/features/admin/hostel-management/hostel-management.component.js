import { DatePipe, DecimalPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, HostListener, computed, inject, signal, } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { CdkTrapFocus } from '@angular/cdk/a11y';
import { LucideArrowLeft, LucideArrowRight, LucideArrowRightLeft, LucideBedDouble, LucideBuilding2, LucideCheck, LucideCheckCircle2, LucideChevronDown, LucideDoorOpen, LucideFilter, LucideLayers3, LucideMapPin, LucideLogOut, LucidePlus, LucideRefreshCw, LucideSearch, LucideSettings2, LucideUserRound, LucideUserRoundPlus, LucideX, } from '@lucide/angular';
import { ApiService } from '../../../core/api.service';
import { AdminPageComponent } from '../../../shared/ui/admin-page/admin-page.component';
import { CompactActionMenuComponent, } from '../../../shared/ui/compact-action-menu/compact-action-menu.component';
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
const _c0 = () => [1, 2, 3, 4];
const _c1 = (a0, a1, a2) => ({ hostel: a0, block: a1, floor: a2 });
const _c2 = () => [1, 2, 3];
const _c3 = (a0, a1, a2, a3) => ({ session: a0, hostel: a1, block: a2, floor: a3 });
const _forTrack0 = ($index, $item) => $item._id;
const _forTrack1 = ($index, $item) => $item.hostelId;
function HostelManagementComponent_Conditional_4_Template(rf, ctx) { if (rf & 1) {
    const _r1 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 12);
    i0.ɵɵlistener("click", function HostelManagementComponent_Conditional_4_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.openHostelEditor()); });
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(1, "svg", 13);
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(2, "span");
    i0.ɵɵtext(3, "Create hostel");
    i0.ɵɵelementEnd()();
} }
function HostelManagementComponent_Conditional_5_Template(rf, ctx) { if (rf & 1) {
    const _r3 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 14);
    i0.ɵɵlistener("click", function HostelManagementComponent_Conditional_5_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r3); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.openStructureDialog("block")); });
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(1, "svg", 13);
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(2, "span");
    i0.ɵɵtext(3, "Add block");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(4, "button", 12);
    i0.ɵɵlistener("click", function HostelManagementComponent_Conditional_5_Template_button_click_4_listener() { i0.ɵɵrestoreView(_r3); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.openStructureDialog("floor")); });
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(5, "svg", 13);
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(6, "span");
    i0.ɵɵtext(7, "Add floor");
    i0.ɵɵelementEnd()();
} }
function HostelManagementComponent_Conditional_6_Template(rf, ctx) { if (rf & 1) {
    const _r4 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 15);
    i0.ɵɵlistener("click", function HostelManagementComponent_Conditional_6_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r4); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.openRoomEditor()); });
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(1, "svg", 13);
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(2, "span");
    i0.ɵɵtext(3, "Add rooms");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵproperty("disabled", !ctx_r1.locationReady());
    i0.ɵɵattribute("title", ctx_r1.locationReady() ? "Add rooms" : "Select a hostel, block and floor first.");
} }
function HostelManagementComponent_Conditional_7_Template(rf, ctx) { if (rf & 1) {
    const _r5 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 12);
    i0.ɵɵlistener("click", function HostelManagementComponent_Conditional_7_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r5); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.openAllocationDrawer()); });
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(1, "svg", 16);
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(2, "span");
    i0.ɵɵtext(3, "Allocate student");
    i0.ɵɵelementEnd()();
} }
function HostelManagementComponent_Conditional_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 6);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r1.message());
} }
function HostelManagementComponent_Conditional_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 7);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r1.error());
} }
function HostelManagementComponent_Conditional_10_Conditional_69_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 41);
    i0.ɵɵelement(1, "span", 44);
    i0.ɵɵelementStart(2, "span");
    i0.ɵɵtext(3, "Loading hostels\u2026");
    i0.ɵɵelementEnd()();
} }
function HostelManagementComponent_Conditional_10_Conditional_70_Template(rf, ctx) { if (rf & 1) {
    const _r7 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 42)(1, "span", 45);
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(2, "svg", 46);
    i0.ɵɵelementEnd();
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(3, "h2");
    i0.ɵɵtext(4, "No hostels configured");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "p");
    i0.ɵɵtext(6, "Create the first hostel before adding blocks, floors and rooms.");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "button", 12);
    i0.ɵɵlistener("click", function HostelManagementComponent_Conditional_10_Conditional_70_Template_button_click_7_listener() { i0.ɵɵrestoreView(_r7); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.openHostelEditor()); });
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(8, "svg", 13);
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(9, "span");
    i0.ɵɵtext(10, "Create hostel");
    i0.ɵɵelementEnd()()();
} }
function HostelManagementComponent_Conditional_10_Conditional_71_Conditional_12_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "th");
    i0.ɵɵtext(1, "Status");
    i0.ɵɵelementEnd();
} }
function HostelManagementComponent_Conditional_10_Conditional_71_For_17_Template(rf, ctx) { if (rf & 1) {
    const _r8 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "tr")(1, "td")(2, "strong");
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "small");
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(6, "td")(7, "span", 48);
    i0.ɵɵtext(8);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(9, "td")(10, "strong");
    i0.ɵɵtext(11);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(12, "small");
    i0.ɵɵtext(13);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(14, "td")(15, "strong");
    i0.ɵɵtext(16);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(17, "small");
    i0.ɵɵtext(18);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(19, "td")(20, "span", 49);
    i0.ɵɵtext(21);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(22, "td", 47)(23, "erp-compact-action-menu", 50);
    i0.ɵɵlistener("selected", function HostelManagementComponent_Conditional_10_Conditional_71_For_17_Template_erp_compact_action_menu_selected_23_listener($event) { const hostel_r9 = i0.ɵɵrestoreView(_r8).$implicit; const ctx_r1 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r1.handleHostelAction($event, hostel_r9)); });
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const hostel_r9 = ctx.$implicit;
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(hostel_r9.name);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(hostel_r9.code);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(hostel_r9.type);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1("", hostel_r9.blockCount, " blocks");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1("", hostel_r9.floorCount || 0, " floors");
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1("", hostel_r9.roomCount, " created");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1("", hostel_r9.plannedRoomCount || 0, " planned");
    i0.ɵɵadvance(2);
    i0.ɵɵclassProp("erp-status--neutral", !hostel_r9.isActive);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", hostel_r9.isActive ? "Active" : "Inactive", " ");
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("items", ctx_r1.hostelActions(hostel_r9));
} }
function HostelManagementComponent_Conditional_10_Conditional_71_ForEmpty_18_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "tr")(1, "td", 51);
    i0.ɵɵtext(2, " No hostels match the current filters. ");
    i0.ɵɵelementEnd()();
} }
function HostelManagementComponent_Conditional_10_Conditional_71_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 43)(1, "table")(2, "thead")(3, "tr")(4, "th");
    i0.ɵɵtext(5, "Hostel");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "th");
    i0.ɵɵtext(7, "Type");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "th");
    i0.ɵɵtext(9, "Structure");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(10, "th");
    i0.ɵɵtext(11, "Rooms");
    i0.ɵɵelementEnd();
    i0.ɵɵconditionalCreate(12, HostelManagementComponent_Conditional_10_Conditional_71_Conditional_12_Template, 2, 0, "th");
    i0.ɵɵelementStart(13, "th", 47);
    i0.ɵɵtext(14, "Actions");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(15, "tbody");
    i0.ɵɵrepeaterCreate(16, HostelManagementComponent_Conditional_10_Conditional_71_For_17_Template, 24, 11, "tr", null, _forTrack0, false, HostelManagementComponent_Conditional_10_Conditional_71_ForEmpty_18_Template, 3, 0, "tr");
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(12);
    i0.ɵɵconditional(ctx_r1.section() === "rooms" ? 12 : -1);
    i0.ɵɵadvance(4);
    i0.ɵɵrepeater(ctx_r1.visibleHostels());
} }
function HostelManagementComponent_Conditional_10_Template(rf, ctx) { if (rf & 1) {
    const _r6 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "section", 17)(1, "article", 18)(2, "span", 19);
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(3, "svg", 20);
    i0.ɵɵelementEnd();
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(4, "span")(5, "small");
    i0.ɵɵtext(6, "Total hostels");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "strong");
    i0.ɵɵtext(8);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(9, "article", 18)(10, "span", 19);
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(11, "svg", 21);
    i0.ɵɵelementEnd();
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(12, "span")(13, "small");
    i0.ɵɵtext(14, "Active hostels");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(15, "strong");
    i0.ɵɵtext(16);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(17, "article", 18)(18, "span", 19);
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(19, "svg", 22);
    i0.ɵɵelementEnd();
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(20, "span")(21, "small");
    i0.ɵɵtext(22, "Planned rooms");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(23, "strong");
    i0.ɵɵtext(24);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(25, "article", 18)(26, "span", 19);
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(27, "svg", 23);
    i0.ɵɵelementEnd();
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(28, "span")(29, "small");
    i0.ɵɵtext(30, "Created rooms");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(31, "strong");
    i0.ɵɵtext(32);
    i0.ɵɵelementEnd()()()();
    i0.ɵɵelementStart(33, "section", 24)(34, "div", 25)(35, "label", 26);
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(36, "svg", 27);
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(37, "span", 28);
    i0.ɵɵtext(38, "Search hostels");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(39, "input", 29);
    i0.ɵɵtwoWayListener("ngModelChange", function HostelManagementComponent_Conditional_10_Template_input_ngModelChange_39_listener($event) { i0.ɵɵrestoreView(_r6); const ctx_r1 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r1.hostelSearch, $event) || (ctx_r1.hostelSearch = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(40, "button", 30);
    i0.ɵɵlistener("click", function HostelManagementComponent_Conditional_10_Template_button_click_40_listener() { i0.ɵɵrestoreView(_r6); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.mobileFiltersOpen.set(!ctx_r1.mobileFiltersOpen())); });
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(41, "svg", 31);
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(42, "span");
    i0.ɵɵtext(43, "Filters");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(44, "div", 32)(45, "label")(46, "span", 28);
    i0.ɵɵtext(47, "Hostel type");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(48, "select", 33);
    i0.ɵɵtwoWayListener("ngModelChange", function HostelManagementComponent_Conditional_10_Template_select_ngModelChange_48_listener($event) { i0.ɵɵrestoreView(_r6); const ctx_r1 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r1.hostelTypeFilter, $event) || (ctx_r1.hostelTypeFilter = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementStart(49, "option", 34);
    i0.ɵɵtext(50, "All types");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(51, "option", 35);
    i0.ɵɵtext(52, "Boys");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(53, "option", 36);
    i0.ɵɵtext(54, "Girls");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(55, "option", 37);
    i0.ɵɵtext(56, "Co-ed");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(57, "label")(58, "span", 28);
    i0.ɵɵtext(59, "Hostel status");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(60, "select", 33);
    i0.ɵɵtwoWayListener("ngModelChange", function HostelManagementComponent_Conditional_10_Template_select_ngModelChange_60_listener($event) { i0.ɵɵrestoreView(_r6); const ctx_r1 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r1.hostelStatusFilter, $event) || (ctx_r1.hostelStatusFilter = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementStart(61, "option", 34);
    i0.ɵɵtext(62, "All statuses");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(63, "option", 38);
    i0.ɵɵtext(64, "Active");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(65, "option", 39);
    i0.ɵɵtext(66, "Inactive");
    i0.ɵɵelementEnd()()()();
    i0.ɵɵelementStart(67, "span", 40);
    i0.ɵɵtext(68);
    i0.ɵɵelementEnd()();
    i0.ɵɵconditionalCreate(69, HostelManagementComponent_Conditional_10_Conditional_69_Template, 4, 0, "div", 41)(70, HostelManagementComponent_Conditional_10_Conditional_70_Template, 11, 0, "div", 42)(71, HostelManagementComponent_Conditional_10_Conditional_71_Template, 19, 2, "div", 43);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(8);
    i0.ɵɵtextInterpolate(ctx_r1.totalHostels());
    i0.ɵɵadvance(8);
    i0.ɵɵtextInterpolate(ctx_r1.activeHostels());
    i0.ɵɵadvance(8);
    i0.ɵɵtextInterpolate(ctx_r1.plannedRooms());
    i0.ɵɵadvance(8);
    i0.ɵɵtextInterpolate(ctx_r1.createdRooms());
    i0.ɵɵadvance(7);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r1.hostelSearch);
    i0.ɵɵadvance();
    i0.ɵɵattribute("aria-expanded", ctx_r1.mobileFiltersOpen());
    i0.ɵɵadvance(4);
    i0.ɵɵclassProp("hostel-directory__filters--open", ctx_r1.mobileFiltersOpen());
    i0.ɵɵadvance(4);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r1.hostelTypeFilter);
    i0.ɵɵadvance(12);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r1.hostelStatusFilter);
    i0.ɵɵadvance(8);
    i0.ɵɵtextInterpolate1("", ctx_r1.visibleHostels().length, " results");
    i0.ɵɵadvance();
    i0.ɵɵconditional(ctx_r1.loading() ? 69 : !ctx_r1.hostels().length ? 70 : 71);
} }
function HostelManagementComponent_Conditional_11_For_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 9);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const hostel_r11 = ctx.$implicit;
    i0.ɵɵproperty("value", hostel_r11._id);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(hostel_r11.name);
} }
function HostelManagementComponent_Conditional_11_Conditional_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 55)(1, "strong");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "span");
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx.name);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate3("", ctx_r1.blocks().length, " blocks \u00B7 ", ctx_r1.floors().length, " floors \u00B7 ", ctx_r1.rooms().length, " rooms");
} }
function HostelManagementComponent_Conditional_11_Conditional_10_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 56);
    i0.ɵɵtext(1, " Choose a hostel to manage its blocks and floors. ");
    i0.ɵɵelementEnd();
} }
function HostelManagementComponent_Conditional_11_Conditional_11_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "section", 57)(1, "span", 45);
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(2, "svg", 46);
    i0.ɵɵelementEnd();
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(3, "h2");
    i0.ɵɵtext(4, "Select a hostel");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "p");
    i0.ɵɵtext(6, "Choose a hostel to manage its blocks and floors.");
    i0.ɵɵelementEnd()();
} }
function HostelManagementComponent_Conditional_11_Conditional_12_Conditional_13_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 41);
    i0.ɵɵelement(1, "span", 44);
    i0.ɵɵelementEnd();
} }
function HostelManagementComponent_Conditional_11_Conditional_12_Conditional_14_Conditional_8_For_2_Template(rf, ctx) { if (rf & 1) {
    const _r15 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 75)(1, "button", 76);
    i0.ɵɵlistener("click", function HostelManagementComponent_Conditional_11_Conditional_12_Conditional_14_Conditional_8_For_2_Template_button_click_1_listener() { const block_r16 = i0.ɵɵrestoreView(_r15).$implicit; const ctx_r1 = i0.ɵɵnextContext(5); return i0.ɵɵresetView(ctx_r1.selectStructure("block", block_r16._id)); });
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(2, "svg", 63);
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(3, "span");
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(5, "erp-compact-action-menu", 50);
    i0.ɵɵlistener("selected", function HostelManagementComponent_Conditional_11_Conditional_12_Conditional_14_Conditional_8_For_2_Template_erp_compact_action_menu_selected_5_listener($event) { const block_r16 = i0.ɵɵrestoreView(_r15).$implicit; const ctx_r1 = i0.ɵɵnextContext(5); return i0.ɵɵresetView(ctx_r1.handleBlockAction($event, block_r16)); });
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const block_r16 = ctx.$implicit;
    const ctx_r1 = i0.ɵɵnextContext(5);
    i0.ɵɵclassProp("hostel-tree-row--selected", ctx_r1.selectedStructureKind() === "block" && ctx_r1.selectedStructureId() === block_r16._id);
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(block_r16.name);
    i0.ɵɵadvance();
    i0.ɵɵproperty("items", ctx_r1.blockActions);
} }
function HostelManagementComponent_Conditional_11_Conditional_12_Conditional_14_Conditional_8_ForEmpty_3_Template(rf, ctx) { if (rf & 1) {
    const _r14 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 77);
    i0.ɵɵlistener("click", function HostelManagementComponent_Conditional_11_Conditional_12_Conditional_14_Conditional_8_ForEmpty_3_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r14); const ctx_r1 = i0.ɵɵnextContext(5); return i0.ɵɵresetView(ctx_r1.openStructureDialog("block")); });
    i0.ɵɵtext(1, " No blocks configured ");
    i0.ɵɵelementStart(2, "span");
    i0.ɵɵtext(3, "Add first block");
    i0.ɵɵelementEnd()();
} }
function HostelManagementComponent_Conditional_11_Conditional_12_Conditional_14_Conditional_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 71);
    i0.ɵɵrepeaterCreate(1, HostelManagementComponent_Conditional_11_Conditional_12_Conditional_14_Conditional_8_For_2_Template, 6, 4, "div", 73, _forTrack0, false, HostelManagementComponent_Conditional_11_Conditional_12_Conditional_14_Conditional_8_ForEmpty_3_Template, 4, 0, "button", 74);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(4);
    i0.ɵɵadvance();
    i0.ɵɵrepeater(ctx_r1.blocks());
} }
function HostelManagementComponent_Conditional_11_Conditional_12_Conditional_14_Conditional_16_For_2_Template(rf, ctx) { if (rf & 1) {
    const _r18 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 79)(1, "button", 76);
    i0.ɵɵlistener("click", function HostelManagementComponent_Conditional_11_Conditional_12_Conditional_14_Conditional_16_For_2_Template_button_click_1_listener() { const floor_r19 = i0.ɵɵrestoreView(_r18).$implicit; const ctx_r1 = i0.ɵɵnextContext(5); return i0.ɵɵresetView(ctx_r1.selectStructure("floor", floor_r19._id)); });
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(2, "svg", 80);
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(3, "span");
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(5, "erp-compact-action-menu", 50);
    i0.ɵɵlistener("selected", function HostelManagementComponent_Conditional_11_Conditional_12_Conditional_14_Conditional_16_For_2_Template_erp_compact_action_menu_selected_5_listener($event) { const floor_r19 = i0.ɵɵrestoreView(_r18).$implicit; const ctx_r1 = i0.ɵɵnextContext(5); return i0.ɵɵresetView(ctx_r1.handleFloorAction($event, floor_r19)); });
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const floor_r19 = ctx.$implicit;
    const ctx_r1 = i0.ɵɵnextContext(5);
    i0.ɵɵclassProp("hostel-tree-row--selected", ctx_r1.selectedStructureKind() === "floor" && ctx_r1.selectedStructureId() === floor_r19._id);
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(floor_r19.name);
    i0.ɵɵadvance();
    i0.ɵɵproperty("items", ctx_r1.floorActions);
} }
function HostelManagementComponent_Conditional_11_Conditional_12_Conditional_14_Conditional_16_ForEmpty_3_Template(rf, ctx) { if (rf & 1) {
    const _r17 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 77);
    i0.ɵɵlistener("click", function HostelManagementComponent_Conditional_11_Conditional_12_Conditional_14_Conditional_16_ForEmpty_3_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r17); const ctx_r1 = i0.ɵɵnextContext(5); return i0.ɵɵresetView(ctx_r1.openStructureDialog("floor")); });
    i0.ɵɵtext(1, " No floors configured ");
    i0.ɵɵelementStart(2, "span");
    i0.ɵɵtext(3, "Add first floor");
    i0.ɵɵelementEnd()();
} }
function HostelManagementComponent_Conditional_11_Conditional_12_Conditional_14_Conditional_16_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 72);
    i0.ɵɵrepeaterCreate(1, HostelManagementComponent_Conditional_11_Conditional_12_Conditional_14_Conditional_16_For_2_Template, 6, 4, "div", 78, _forTrack0, false, HostelManagementComponent_Conditional_11_Conditional_12_Conditional_14_Conditional_16_ForEmpty_3_Template, 4, 0, "button", 74);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(4);
    i0.ɵɵadvance();
    i0.ɵɵrepeater(ctx_r1.floors());
} }
function HostelManagementComponent_Conditional_11_Conditional_12_Conditional_14_Template(rf, ctx) { if (rf & 1) {
    const _r13 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 65)(1, "section", 68)(2, "button", 69);
    i0.ɵɵlistener("click", function HostelManagementComponent_Conditional_11_Conditional_12_Conditional_14_Template_button_click_2_listener() { i0.ɵɵrestoreView(_r13); const ctx_r1 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r1.blocksExpanded.set(!ctx_r1.blocksExpanded())); });
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(3, "svg", 70);
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(4, "span");
    i0.ɵɵtext(5, "Blocks");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "small");
    i0.ɵɵtext(7);
    i0.ɵɵelementEnd()();
    i0.ɵɵconditionalCreate(8, HostelManagementComponent_Conditional_11_Conditional_12_Conditional_14_Conditional_8_Template, 4, 1, "div", 71);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(9, "section", 68)(10, "button", 69);
    i0.ɵɵlistener("click", function HostelManagementComponent_Conditional_11_Conditional_12_Conditional_14_Template_button_click_10_listener() { i0.ɵɵrestoreView(_r13); const ctx_r1 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r1.floorsExpanded.set(!ctx_r1.floorsExpanded())); });
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(11, "svg", 70);
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(12, "span");
    i0.ɵɵtext(13, "Hostel-wide floors");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(14, "small");
    i0.ɵɵtext(15);
    i0.ɵɵelementEnd()();
    i0.ɵɵconditionalCreate(16, HostelManagementComponent_Conditional_11_Conditional_12_Conditional_14_Conditional_16_Template, 4, 1, "div", 72);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(2);
    i0.ɵɵattribute("aria-expanded", ctx_r1.blocksExpanded());
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(ctx_r1.blocks().length);
    i0.ɵɵadvance();
    i0.ɵɵconditional(ctx_r1.blocksExpanded() ? 8 : -1);
    i0.ɵɵadvance(2);
    i0.ɵɵattribute("aria-expanded", ctx_r1.floorsExpanded());
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(ctx_r1.floors().length);
    i0.ɵɵadvance();
    i0.ɵɵconditional(ctx_r1.floorsExpanded() ? 16 : -1);
} }
function HostelManagementComponent_Conditional_11_Conditional_12_Conditional_16_For_35_Template(rf, ctx) { if (rf & 1) {
    const _r22 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 76);
    i0.ɵɵlistener("click", function HostelManagementComponent_Conditional_11_Conditional_12_Conditional_16_For_35_Template_button_click_0_listener() { const floor_r23 = i0.ɵɵrestoreView(_r22).$implicit; const ctx_r1 = i0.ɵɵnextContext(4); return i0.ɵɵresetView(ctx_r1.selectStructure("floor", floor_r23._id)); });
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(1, "svg", 80);
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(2, "span");
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "small");
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const floor_r23 = ctx.$implicit;
    const ctx_r1 = i0.ɵɵnextContext(4);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(floor_r23.name);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1("", ctx_r1.roomsForFloor(floor_r23), " rooms");
} }
function HostelManagementComponent_Conditional_11_Conditional_12_Conditional_16_ForEmpty_36_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 88);
    i0.ɵɵtext(1, " No floor definitions yet. ");
    i0.ɵɵelementEnd();
} }
function HostelManagementComponent_Conditional_11_Conditional_12_Conditional_16_Template(rf, ctx) { if (rf & 1) {
    const _r20 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "header", 81)(1, "span", 45);
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(2, "svg", 82);
    i0.ɵɵelementEnd();
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(3, "div")(4, "h2");
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "p");
    i0.ɵɵtext(7);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(8, "erp-compact-action-menu", 50);
    i0.ɵɵlistener("selected", function HostelManagementComponent_Conditional_11_Conditional_12_Conditional_16_Template_erp_compact_action_menu_selected_8_listener($event) { const block_r21 = i0.ɵɵrestoreView(_r20); const ctx_r1 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r1.handleBlockAction($event, block_r21)); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(9, "div", 83)(10, "span")(11, "small");
    i0.ɵɵtext(12, "Hostel-wide floors");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(13, "strong");
    i0.ɵɵtext(14);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(15, "span")(16, "small");
    i0.ɵɵtext(17, "Rooms in block");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(18, "strong");
    i0.ɵɵtext(19);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(20, "span")(21, "small");
    i0.ɵɵtext(22, "Status");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(23, "strong");
    i0.ɵɵtext(24);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(25, "section", 84)(26, "div")(27, "h3");
    i0.ɵɵtext(28, "Available floor definitions");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(29, "button", 85);
    i0.ɵɵlistener("click", function HostelManagementComponent_Conditional_11_Conditional_12_Conditional_16_Template_button_click_29_listener() { i0.ɵɵrestoreView(_r20); const ctx_r1 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r1.openStructureDialog("floor")); });
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(30, "svg", 86);
    i0.ɵɵtext(31, "Add floor ");
    i0.ɵɵelementEnd()();
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(32, "p");
    i0.ɵɵtext(33, " Floors are currently defined at hostel level and can be used with any block when rooms are created. ");
    i0.ɵɵelementEnd();
    i0.ɵɵrepeaterCreate(34, HostelManagementComponent_Conditional_11_Conditional_12_Conditional_16_For_35_Template, 6, 2, "button", 87, _forTrack0, false, HostelManagementComponent_Conditional_11_Conditional_12_Conditional_16_ForEmpty_36_Template, 2, 0, "div", 88);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    let tmp_5_0;
    let tmp_9_0;
    const block_r21 = ctx;
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(block_r21.name);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1("Block \u00B7 ", (tmp_5_0 = ctx_r1.selectedHostel()) == null ? null : tmp_5_0.name);
    i0.ɵɵadvance();
    i0.ɵɵproperty("items", ctx_r1.blockActions);
    i0.ɵɵadvance(6);
    i0.ɵɵtextInterpolate(ctx_r1.floors().length);
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(ctx_r1.roomsForBlock(block_r21));
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(((tmp_9_0 = ctx_r1.selectedHostel()) == null ? null : tmp_9_0.isActive) ? "Active" : "Inactive");
    i0.ɵɵadvance(10);
    i0.ɵɵrepeater(ctx_r1.floors());
} }
function HostelManagementComponent_Conditional_11_Conditional_12_Conditional_17_Template(rf, ctx) { if (rf & 1) {
    const _r24 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "header", 81)(1, "span", 45);
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(2, "svg", 89);
    i0.ɵɵelementEnd();
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(3, "div")(4, "h2");
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "p");
    i0.ɵɵtext(7);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(8, "erp-compact-action-menu", 50);
    i0.ɵɵlistener("selected", function HostelManagementComponent_Conditional_11_Conditional_12_Conditional_17_Template_erp_compact_action_menu_selected_8_listener($event) { const floor_r25 = i0.ɵɵrestoreView(_r24); const ctx_r1 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r1.handleFloorAction($event, floor_r25)); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(9, "div", 83)(10, "span")(11, "small");
    i0.ɵɵtext(12, "Rooms on floor");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(13, "strong");
    i0.ɵɵtext(14);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(15, "span")(16, "small");
    i0.ɵɵtext(17, "Available blocks");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(18, "strong");
    i0.ɵɵtext(19);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(20, "span")(21, "small");
    i0.ɵɵtext(22, "Status");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(23, "strong");
    i0.ɵɵtext(24);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(25, "div", 90)(26, "p");
    i0.ɵɵtext(27, " This floor is available across the selected hostel. Room-to-block assignment happens during room creation. ");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    let tmp_5_0;
    let tmp_9_0;
    const floor_r25 = ctx;
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(floor_r25.name);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1("Hostel-wide floor \u00B7 ", (tmp_5_0 = ctx_r1.selectedHostel()) == null ? null : tmp_5_0.name);
    i0.ɵɵadvance();
    i0.ɵɵproperty("items", ctx_r1.floorActions);
    i0.ɵɵadvance(6);
    i0.ɵɵtextInterpolate(ctx_r1.roomsForFloor(floor_r25));
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(ctx_r1.blocks().length);
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(((tmp_9_0 = ctx_r1.selectedHostel()) == null ? null : tmp_9_0.isActive) ? "Active" : "Inactive");
} }
function HostelManagementComponent_Conditional_11_Conditional_12_Conditional_18_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 67)(1, "span", 45);
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(2, "svg", 91);
    i0.ɵɵelementEnd();
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(3, "h2");
    i0.ɵɵtext(4, "Select a block or floor");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "p");
    i0.ɵɵtext(6, "Choose an item from the structure navigator to view its details.");
    i0.ɵɵelementEnd()();
} }
function HostelManagementComponent_Conditional_11_Conditional_12_Template(rf, ctx) { if (rf & 1) {
    const _r12 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "section", 58)(1, "aside", 59)(2, "header", 60)(3, "div")(4, "h2");
    i0.ɵɵtext(5, "Structure");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "p");
    i0.ɵɵtext(7, "Blocks and hostel-wide floors");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(8, "div", 61)(9, "button", 62);
    i0.ɵɵlistener("click", function HostelManagementComponent_Conditional_11_Conditional_12_Template_button_click_9_listener() { i0.ɵɵrestoreView(_r12); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.openStructureDialog("block")); });
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(10, "svg", 63);
    i0.ɵɵelementEnd();
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(11, "button", 64);
    i0.ɵɵlistener("click", function HostelManagementComponent_Conditional_11_Conditional_12_Template_button_click_11_listener() { i0.ɵɵrestoreView(_r12); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.openStructureDialog("floor")); });
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(12, "svg", 13);
    i0.ɵɵelementEnd()()();
    i0.ɵɵconditionalCreate(13, HostelManagementComponent_Conditional_11_Conditional_12_Conditional_13_Template, 2, 0, "div", 41)(14, HostelManagementComponent_Conditional_11_Conditional_12_Conditional_14_Template, 17, 6, "div", 65);
    i0.ɵɵelementEnd();
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(15, "div", 66);
    i0.ɵɵconditionalCreate(16, HostelManagementComponent_Conditional_11_Conditional_12_Conditional_16_Template, 37, 7)(17, HostelManagementComponent_Conditional_11_Conditional_12_Conditional_17_Template, 28, 6)(18, HostelManagementComponent_Conditional_11_Conditional_12_Conditional_18_Template, 7, 0, "div", 67);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    let tmp_3_0;
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(13);
    i0.ɵɵconditional(ctx_r1.loading() ? 13 : 14);
    i0.ɵɵadvance(3);
    i0.ɵɵconditional((tmp_3_0 = ctx_r1.selectedBlock()) ? 16 : (tmp_3_0 = ctx_r1.selectedFloor()) ? 17 : 18, tmp_3_0);
} }
function HostelManagementComponent_Conditional_11_Template(rf, ctx) { if (rf & 1) {
    const _r10 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "section", 52)(1, "label", 53)(2, "span");
    i0.ɵɵtext(3, "Hostel");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "select", 33);
    i0.ɵɵtwoWayListener("ngModelChange", function HostelManagementComponent_Conditional_11_Template_select_ngModelChange_4_listener($event) { i0.ɵɵrestoreView(_r10); const ctx_r1 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r1.selectedHostelId, $event) || (ctx_r1.selectedHostelId = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵlistener("ngModelChange", function HostelManagementComponent_Conditional_11_Template_select_ngModelChange_4_listener() { i0.ɵɵrestoreView(_r10); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.hostelSelectionChanged()); });
    i0.ɵɵelementStart(5, "option", 54);
    i0.ɵɵtext(6, "Select hostel");
    i0.ɵɵelementEnd();
    i0.ɵɵrepeaterCreate(7, HostelManagementComponent_Conditional_11_For_8_Template, 2, 2, "option", 9, _forTrack0);
    i0.ɵɵelementEnd()();
    i0.ɵɵconditionalCreate(9, HostelManagementComponent_Conditional_11_Conditional_9_Template, 5, 4, "div", 55)(10, HostelManagementComponent_Conditional_11_Conditional_10_Template, 2, 0, "p", 56);
    i0.ɵɵelementEnd();
    i0.ɵɵconditionalCreate(11, HostelManagementComponent_Conditional_11_Conditional_11_Template, 7, 0, "section", 57)(12, HostelManagementComponent_Conditional_11_Conditional_12_Template, 19, 2, "section", 58);
} if (rf & 2) {
    let tmp_3_0;
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(4);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r1.selectedHostelId);
    i0.ɵɵadvance(3);
    i0.ɵɵrepeater(ctx_r1.hostels());
    i0.ɵɵadvance(2);
    i0.ɵɵconditional((tmp_3_0 = ctx_r1.selectedHostel()) ? 9 : 10, tmp_3_0);
    i0.ɵɵadvance(2);
    i0.ɵɵconditional(!ctx_r1.selectedHostelId ? 11 : 12);
} }
function HostelManagementComponent_Conditional_12_Conditional_2_Template(rf, ctx) { if (rf & 1) {
    const _r27 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "label", 94)(1, "span");
    i0.ɵɵtext(2, "Academic session *");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "input", 112);
    i0.ɵɵtwoWayListener("ngModelChange", function HostelManagementComponent_Conditional_12_Conditional_2_Template_input_ngModelChange_3_listener($event) { i0.ɵɵrestoreView(_r27); const ctx_r1 = i0.ɵɵnextContext(2); i0.ɵɵtwoWayBindingSet(ctx_r1.academicSession, $event) || (ctx_r1.academicSession = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵlistener("change", function HostelManagementComponent_Conditional_12_Conditional_2_Template_input_change_3_listener() { i0.ɵɵrestoreView(_r27); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.sessionChanged()); });
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(3);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r1.academicSession);
} }
function HostelManagementComponent_Conditional_12_For_10_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 9);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const hostel_r28 = ctx.$implicit;
    i0.ɵɵproperty("value", hostel_r28._id);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(hostel_r28.name);
} }
function HostelManagementComponent_Conditional_12_For_18_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 9);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const block_r29 = ctx.$implicit;
    i0.ɵɵproperty("value", block_r29._id);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(block_r29.name);
} }
function HostelManagementComponent_Conditional_12_For_26_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 9);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const floor_r30 = ctx.$implicit;
    i0.ɵɵproperty("value", floor_r30._id);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(floor_r30.name);
} }
function HostelManagementComponent_Conditional_12_Conditional_47_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 105);
    i0.ɵɵtext(1, "Disabled");
    i0.ɵɵelementEnd();
} }
function HostelManagementComponent_Conditional_12_Conditional_48_Template(rf, ctx) { if (rf & 1) {
    const _r31 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "label")(1, "span", 28);
    i0.ɵɵtext(2, "Room status");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "select", 33);
    i0.ɵɵtwoWayListener("ngModelChange", function HostelManagementComponent_Conditional_12_Conditional_48_Template_select_ngModelChange_3_listener($event) { i0.ɵɵrestoreView(_r31); const ctx_r1 = i0.ɵɵnextContext(2); i0.ɵɵtwoWayBindingSet(ctx_r1.roomStatusFilter, $event) || (ctx_r1.roomStatusFilter = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementStart(4, "option", 34);
    i0.ɵɵtext(5, "All statuses");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "option", 38);
    i0.ɵɵtext(7, "Active");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "option", 105);
    i0.ɵɵtext(9, "Disabled");
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(3);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r1.roomStatusFilter);
} }
function HostelManagementComponent_Conditional_12_Conditional_49_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 106);
    i0.ɵɵtext(1, " Select a hostel, block and floor to view rooms and enable contextual actions. ");
    i0.ɵɵelementEnd();
} }
function HostelManagementComponent_Conditional_12_Conditional_50_Template(rf, ctx) { if (rf & 1) {
    const _r32 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "section", 107)(1, "span", 45);
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(2, "svg", 113);
    i0.ɵɵelementEnd();
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(3, "div", 114)(4, "strong");
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "span");
    i0.ɵɵtext(7);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(8, "div", 115)(9, "strong");
    i0.ɵɵtext(10);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(11, "span");
    i0.ɵɵtext(12);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(13, "button", 14);
    i0.ɵɵlistener("click", function HostelManagementComponent_Conditional_12_Conditional_50_Template_button_click_13_listener() { i0.ɵɵrestoreView(_r32); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.openRoomEditor("automatic")); });
    i0.ɵɵtext(14, " Generate rooms ");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    let tmp_2_0;
    let tmp_3_0;
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate((tmp_2_0 = ctx_r1.selectedHostel()) == null ? null : tmp_2_0.name);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate2("", (tmp_3_0 = ctx_r1.selectedBlockOption()) == null ? null : tmp_3_0.name, " / ", (tmp_3_0 = ctx_r1.selectedFloorOption()) == null ? null : tmp_3_0.name);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate2("", ctx_r1.locationRooms().length, " rooms \u00B7 ", ctx_r1.locationBedCount(), " beds");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate2("", ctx_r1.configuredRoomCount(), " configured \u00B7 ", ctx_r1.locationRooms().length - ctx_r1.configuredRoomCount(), " need capacity");
} }
function HostelManagementComponent_Conditional_12_Conditional_51_Conditional_12_Template(rf, ctx) { if (rf & 1) {
    const _r33 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 14);
    i0.ɵɵlistener("click", function HostelManagementComponent_Conditional_12_Conditional_51_Conditional_12_Template_button_click_0_listener() { const room_r34 = i0.ɵɵrestoreView(_r33); const ctx_r1 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r1.openCapacity(room_r34)); });
    i0.ɵɵtext(1, " Configure next room ");
    i0.ɵɵelementEnd();
} }
function HostelManagementComponent_Conditional_12_Conditional_51_Conditional_13_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 49);
    i0.ɵɵtext(1, "Setup complete");
    i0.ɵɵelementEnd();
} }
function HostelManagementComponent_Conditional_12_Conditional_51_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "section", 108)(1, "div")(2, "span");
    i0.ɵɵtext(3, "Room capacity setup");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "strong");
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "small");
    i0.ɵɵtext(7);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(8, "div", 116);
    i0.ɵɵelement(9, "span");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(10, "strong", 117);
    i0.ɵɵtext(11);
    i0.ɵɵelementEnd();
    i0.ɵɵconditionalCreate(12, HostelManagementComponent_Conditional_12_Conditional_51_Conditional_12_Template, 2, 0, "button", 118)(13, HostelManagementComponent_Conditional_12_Conditional_51_Conditional_13_Template, 2, 0, "span", 49);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    let tmp_7_0;
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate2("", ctx_r1.configuredRoomCount(), " of ", ctx_r1.locationRooms().length, " rooms configured");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1("", ctx_r1.locationRooms().length - ctx_r1.configuredRoomCount(), " rooms still require capacity configuration.");
    i0.ɵɵadvance();
    i0.ɵɵattribute("aria-valuenow", ctx_r1.capacityProgress());
    i0.ɵɵadvance();
    i0.ɵɵstyleProp("width", ctx_r1.capacityProgress(), "%");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1("", ctx_r1.capacityProgress(), "%");
    i0.ɵɵadvance();
    i0.ɵɵconditional((tmp_7_0 = ctx_r1.nextUnconfiguredRoom()) ? 12 : 13, tmp_7_0);
} }
function HostelManagementComponent_Conditional_12_Conditional_52_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "section", 57)(1, "span", 45);
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(2, "svg", 119);
    i0.ɵɵelementEnd();
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(3, "h2");
    i0.ɵɵtext(4, "Select an academic session");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "p");
    i0.ɵɵtext(6, "Capacity is configured independently for each academic session.");
    i0.ɵɵelementEnd()();
} }
function HostelManagementComponent_Conditional_12_Conditional_53_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "section", 57)(1, "span", 45);
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(2, "svg", 120);
    i0.ɵɵelementEnd();
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(3, "h2");
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "p");
    i0.ɵɵtext(6, "Choose a hostel, block and floor to view or create rooms.");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate1(" ", ctx_r1.section() === "capacity" ? "Select hostel location" : "Select a room location", " ");
} }
function HostelManagementComponent_Conditional_12_Conditional_54_For_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "span", 121);
} }
function HostelManagementComponent_Conditional_12_Conditional_54_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "section", 109);
    i0.ɵɵrepeaterCreate(1, HostelManagementComponent_Conditional_12_Conditional_54_For_2_Template, 1, 0, "span", 121, i0.ɵɵrepeaterTrackByIdentity);
    i0.ɵɵelementStart(3, "span", 28);
    i0.ɵɵtext(4, "Loading rooms\u2026");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    i0.ɵɵadvance();
    i0.ɵɵrepeater(i0.ɵɵpureFunction0(0, _c0));
} }
function HostelManagementComponent_Conditional_12_Conditional_55_Template(rf, ctx) { if (rf & 1) {
    const _r35 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "section", 110)(1, "span", 45);
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(2, "svg", 122);
    i0.ɵɵelementEnd();
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(3, "h2");
    i0.ɵɵtext(4, "Rooms could not be loaded");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "p");
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "button", 14);
    i0.ɵɵlistener("click", function HostelManagementComponent_Conditional_12_Conditional_55_Template_button_click_7_listener() { i0.ɵɵrestoreView(_r35); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.loadRooms()); });
    i0.ɵɵtext(8, " Retry ");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(6);
    i0.ɵɵtextInterpolate(ctx_r1.error() || "Check your connection and try loading this location again.");
} }
function HostelManagementComponent_Conditional_12_Conditional_56_Conditional_7_Template(rf, ctx) { if (rf & 1) {
    const _r36 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 124)(1, "button", 14);
    i0.ɵɵlistener("click", function HostelManagementComponent_Conditional_12_Conditional_56_Conditional_7_Template_button_click_1_listener() { i0.ɵɵrestoreView(_r36); const ctx_r1 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r1.openRoomEditor("manual")); });
    i0.ɵɵtext(2, " Create room ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "button", 12);
    i0.ɵɵlistener("click", function HostelManagementComponent_Conditional_12_Conditional_56_Conditional_7_Template_button_click_3_listener() { i0.ɵɵrestoreView(_r36); const ctx_r1 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r1.openRoomEditor("automatic")); });
    i0.ɵɵtext(4, " Generate rooms ");
    i0.ɵɵelementEnd()();
} }
function HostelManagementComponent_Conditional_12_Conditional_56_Conditional_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "a", 125);
    i0.ɵɵtext(1, " Go to Rooms ");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵproperty("queryParams", i0.ɵɵpureFunction3(1, _c1, ctx_r1.selectedHostelId, ctx_r1.selectedBlockId, ctx_r1.selectedFloorId));
} }
function HostelManagementComponent_Conditional_12_Conditional_56_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "section", 57)(1, "span", 45);
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(2, "svg", 123);
    i0.ɵɵelementEnd();
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(3, "h2");
    i0.ɵɵtext(4, "No rooms on this floor");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "p");
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd();
    i0.ɵɵconditionalCreate(7, HostelManagementComponent_Conditional_12_Conditional_56_Conditional_7_Template, 5, 0, "div", 124)(8, HostelManagementComponent_Conditional_12_Conditional_56_Conditional_8_Template, 2, 5, "a", 125);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(6);
    i0.ɵɵtextInterpolate1(" ", ctx_r1.section() === "capacity" ? "Create rooms before configuring capacity." : "Create one room manually or generate a room sequence.", " ");
    i0.ɵɵadvance();
    i0.ɵɵconditional(ctx_r1.section() === "rooms" ? 7 : 8);
} }
function HostelManagementComponent_Conditional_12_Conditional_57_Conditional_20_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "th");
    i0.ɵɵtext(1, "Academic session");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(2, "th");
    i0.ɵɵtext(3, "Occupancy");
    i0.ɵɵelementEnd();
} }
function HostelManagementComponent_Conditional_12_Conditional_57_For_29_Conditional_13_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(2, "td");
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const room_r38 = i0.ɵɵnextContext().$implicit;
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r1.academicSession);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate2("", room_r38.occupiedBeds.length, " / ", room_r38.capacity || 0, " occupied");
} }
function HostelManagementComponent_Conditional_12_Conditional_57_For_29_Conditional_17_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td")(1, "span", 49);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const room_r38 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance();
    i0.ɵɵclassProp("erp-status--neutral", !room_r38.isActive);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", room_r38.isActive ? "Active" : "Disabled", " ");
} }
function HostelManagementComponent_Conditional_12_Conditional_57_For_29_Template(rf, ctx) { if (rf & 1) {
    const _r37 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "tr")(1, "td")(2, "strong");
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(4, "td")(5, "strong");
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "small");
    i0.ɵɵtext(8);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(9, "td");
    i0.ɵɵtext(10);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(11, "td");
    i0.ɵɵtext(12);
    i0.ɵɵelementEnd();
    i0.ɵɵconditionalCreate(13, HostelManagementComponent_Conditional_12_Conditional_57_For_29_Conditional_13_Template, 4, 3);
    i0.ɵɵelementStart(14, "td")(15, "span", 49);
    i0.ɵɵtext(16);
    i0.ɵɵelementEnd()();
    i0.ɵɵconditionalCreate(17, HostelManagementComponent_Conditional_12_Conditional_57_For_29_Conditional_17_Template, 3, 3, "td");
    i0.ɵɵelementStart(18, "td", 47)(19, "erp-compact-action-menu", 50);
    i0.ɵɵlistener("selected", function HostelManagementComponent_Conditional_12_Conditional_57_For_29_Template_erp_compact_action_menu_selected_19_listener($event) { const room_r38 = i0.ɵɵrestoreView(_r37).$implicit; const ctx_r1 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r1.section() === "rooms" ? ctx_r1.handleRoomAction($event, room_r38) : ctx_r1.handleCapacityAction($event, room_r38)); });
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const room_r38 = ctx.$implicit;
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(room_r38.roomNumber);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(room_r38.blockName);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(room_r38.floorName);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(room_r38.configuredForSession ? room_r38.roomType : "\u2014");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", room_r38.configuredForSession ? room_r38.capacity + " seater" : "\u2014", " ");
    i0.ɵɵadvance();
    i0.ɵɵconditional(ctx_r1.section() === "capacity" ? 13 : -1);
    i0.ɵɵadvance(2);
    i0.ɵɵclassProp("erp-status--warning", room_r38.isActive && !room_r38.configuredForSession)("erp-status--neutral", !room_r38.isActive);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", !room_r38.isActive ? "Disabled" : room_r38.configuredForSession ? "Configured" : "Needs configuration", " ");
    i0.ɵɵadvance();
    i0.ɵɵconditional(ctx_r1.section() === "rooms" ? 17 : -1);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("items", ctx_r1.section() === "rooms" ? ctx_r1.roomActions(room_r38) : ctx_r1.capacityActions(room_r38));
} }
function HostelManagementComponent_Conditional_12_Conditional_57_ForEmpty_30_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "tr")(1, "td", 88);
    i0.ɵɵtext(2, " No rooms match the current search and filters. ");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance();
    i0.ɵɵattribute("colspan", ctx_r1.section() === "capacity" ? 8 : 7);
} }
function HostelManagementComponent_Conditional_12_Conditional_57_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "section", 111)(1, "div", 126)(2, "h2");
    i0.ɵɵtext(3);
    i0.ɵɵelementStart(4, "small");
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(6, "span");
    i0.ɵɵtext(7);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(8, "div", 127)(9, "table")(10, "thead")(11, "tr")(12, "th");
    i0.ɵɵtext(13, "Room");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(14, "th");
    i0.ɵɵtext(15, "Location");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(16, "th");
    i0.ɵɵtext(17, "Room type");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(18, "th");
    i0.ɵɵtext(19);
    i0.ɵɵelementEnd();
    i0.ɵɵconditionalCreate(20, HostelManagementComponent_Conditional_12_Conditional_57_Conditional_20_Template, 4, 0);
    i0.ɵɵelementStart(21, "th");
    i0.ɵɵtext(22, "Configuration");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(23, "th");
    i0.ɵɵtext(24, "Status");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(25, "th", 47);
    i0.ɵɵtext(26, "Actions");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(27, "tbody");
    i0.ɵɵrepeaterCreate(28, HostelManagementComponent_Conditional_12_Conditional_57_For_29_Template, 20, 13, "tr", null, _forTrack0, false, HostelManagementComponent_Conditional_12_Conditional_57_ForEmpty_30_Template, 3, 1, "tr");
    i0.ɵɵelementEnd()()()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1(" ", ctx_r1.section() === "capacity" ? "Room capacity" : "Room directory", " ");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r1.visibleRooms().length);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r1.locationLabel());
    i0.ɵɵadvance(12);
    i0.ɵɵtextInterpolate(ctx_r1.section() === "capacity" ? "Seater" : "Capacity");
    i0.ɵɵadvance();
    i0.ɵɵconditional(ctx_r1.section() === "capacity" ? 20 : -1);
    i0.ɵɵadvance(8);
    i0.ɵɵrepeater(ctx_r1.visibleRooms());
} }
function HostelManagementComponent_Conditional_12_Template(rf, ctx) { if (rf & 1) {
    const _r26 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "section", 92)(1, "div", 93);
    i0.ɵɵconditionalCreate(2, HostelManagementComponent_Conditional_12_Conditional_2_Template, 4, 1, "label", 94);
    i0.ɵɵelementStart(3, "label", 95)(4, "span");
    i0.ɵɵtext(5, "Hostel *");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "select", 33);
    i0.ɵɵtwoWayListener("ngModelChange", function HostelManagementComponent_Conditional_12_Template_select_ngModelChange_6_listener($event) { i0.ɵɵrestoreView(_r26); const ctx_r1 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r1.selectedHostelId, $event) || (ctx_r1.selectedHostelId = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵlistener("ngModelChange", function HostelManagementComponent_Conditional_12_Template_select_ngModelChange_6_listener() { i0.ɵɵrestoreView(_r26); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.hostelSelectionChanged()); });
    i0.ɵɵelementStart(7, "option", 54);
    i0.ɵɵtext(8, "Select hostel");
    i0.ɵɵelementEnd();
    i0.ɵɵrepeaterCreate(9, HostelManagementComponent_Conditional_12_For_10_Template, 2, 2, "option", 9, _forTrack0);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(11, "label", 96)(12, "span");
    i0.ɵɵtext(13, "Block *");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(14, "select", 97);
    i0.ɵɵtwoWayListener("ngModelChange", function HostelManagementComponent_Conditional_12_Template_select_ngModelChange_14_listener($event) { i0.ɵɵrestoreView(_r26); const ctx_r1 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r1.selectedBlockId, $event) || (ctx_r1.selectedBlockId = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵlistener("ngModelChange", function HostelManagementComponent_Conditional_12_Template_select_ngModelChange_14_listener() { i0.ɵɵrestoreView(_r26); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.blockSelectionChanged()); });
    i0.ɵɵelementStart(15, "option", 54);
    i0.ɵɵtext(16, "Select block");
    i0.ɵɵelementEnd();
    i0.ɵɵrepeaterCreate(17, HostelManagementComponent_Conditional_12_For_18_Template, 2, 2, "option", 9, _forTrack0);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(19, "label", 98)(20, "span");
    i0.ɵɵtext(21, "Floor *");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(22, "select", 97);
    i0.ɵɵtwoWayListener("ngModelChange", function HostelManagementComponent_Conditional_12_Template_select_ngModelChange_22_listener($event) { i0.ɵɵrestoreView(_r26); const ctx_r1 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r1.selectedFloorId, $event) || (ctx_r1.selectedFloorId = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵlistener("ngModelChange", function HostelManagementComponent_Conditional_12_Template_select_ngModelChange_22_listener() { i0.ɵɵrestoreView(_r26); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.floorSelectionChanged()); });
    i0.ɵɵelementStart(23, "option", 54);
    i0.ɵɵtext(24, "Select floor");
    i0.ɵɵelementEnd();
    i0.ɵɵrepeaterCreate(25, HostelManagementComponent_Conditional_12_For_26_Template, 2, 2, "option", 9, _forTrack0);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(27, "label", 99);
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(28, "svg", 27);
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(29, "span", 28);
    i0.ɵɵtext(30, "Search room number");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(31, "input", 100);
    i0.ɵɵtwoWayListener("ngModelChange", function HostelManagementComponent_Conditional_12_Template_input_ngModelChange_31_listener($event) { i0.ɵɵrestoreView(_r26); const ctx_r1 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r1.roomSearch, $event) || (ctx_r1.roomSearch = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(32, "button", 101);
    i0.ɵɵlistener("click", function HostelManagementComponent_Conditional_12_Template_button_click_32_listener() { i0.ɵɵrestoreView(_r26); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.roomFiltersOpen.set(!ctx_r1.roomFiltersOpen())); });
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(33, "svg", 31);
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(34, "span");
    i0.ɵɵtext(35, "Filters");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(36, "div", 102)(37, "label")(38, "span", 28);
    i0.ɵɵtext(39, "Configuration status");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(40, "select", 33);
    i0.ɵɵtwoWayListener("ngModelChange", function HostelManagementComponent_Conditional_12_Template_select_ngModelChange_40_listener($event) { i0.ɵɵrestoreView(_r26); const ctx_r1 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r1.roomConfigurationFilter, $event) || (ctx_r1.roomConfigurationFilter = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementStart(41, "option", 34);
    i0.ɵɵtext(42, "All rooms");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(43, "option", 103);
    i0.ɵɵtext(44, "Configured");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(45, "option", 104);
    i0.ɵɵtext(46, "Not configured");
    i0.ɵɵelementEnd();
    i0.ɵɵconditionalCreate(47, HostelManagementComponent_Conditional_12_Conditional_47_Template, 2, 0, "option", 105);
    i0.ɵɵelementEnd()();
    i0.ɵɵconditionalCreate(48, HostelManagementComponent_Conditional_12_Conditional_48_Template, 10, 1, "label");
    i0.ɵɵelementEnd()();
    i0.ɵɵconditionalCreate(49, HostelManagementComponent_Conditional_12_Conditional_49_Template, 2, 0, "p", 106);
    i0.ɵɵelementEnd();
    i0.ɵɵconditionalCreate(50, HostelManagementComponent_Conditional_12_Conditional_50_Template, 15, 7, "section", 107);
    i0.ɵɵconditionalCreate(51, HostelManagementComponent_Conditional_12_Conditional_51_Template, 14, 8, "section", 108);
    i0.ɵɵconditionalCreate(52, HostelManagementComponent_Conditional_12_Conditional_52_Template, 7, 0, "section", 57)(53, HostelManagementComponent_Conditional_12_Conditional_53_Template, 7, 1, "section", 57)(54, HostelManagementComponent_Conditional_12_Conditional_54_Template, 5, 1, "section", 109)(55, HostelManagementComponent_Conditional_12_Conditional_55_Template, 9, 1, "section", 110)(56, HostelManagementComponent_Conditional_12_Conditional_56_Template, 9, 2, "section", 57)(57, HostelManagementComponent_Conditional_12_Conditional_57_Template, 31, 6, "section", 111);
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵconditional(ctx_r1.section() === "capacity" ? 2 : -1);
    i0.ɵɵadvance(4);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r1.selectedHostelId);
    i0.ɵɵadvance(3);
    i0.ɵɵrepeater(ctx_r1.hostels());
    i0.ɵɵadvance(5);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r1.selectedBlockId);
    i0.ɵɵproperty("disabled", !ctx_r1.selectedHostelId);
    i0.ɵɵattribute("title", !ctx_r1.selectedHostelId ? "Select a hostel first." : null);
    i0.ɵɵadvance(3);
    i0.ɵɵrepeater(ctx_r1.blocks());
    i0.ɵɵadvance(5);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r1.selectedFloorId);
    i0.ɵɵproperty("disabled", !ctx_r1.selectedBlockId);
    i0.ɵɵattribute("title", !ctx_r1.selectedBlockId ? "Select a block first." : null);
    i0.ɵɵadvance(3);
    i0.ɵɵrepeater(ctx_r1.floorOptions());
    i0.ɵɵadvance(6);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r1.roomSearch);
    i0.ɵɵadvance();
    i0.ɵɵattribute("aria-expanded", ctx_r1.roomFiltersOpen());
    i0.ɵɵadvance(4);
    i0.ɵɵclassProp("hostel-room-command__secondary--open", ctx_r1.roomFiltersOpen());
    i0.ɵɵadvance(4);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r1.roomConfigurationFilter);
    i0.ɵɵadvance(7);
    i0.ɵɵconditional(ctx_r1.section() === "capacity" ? 47 : -1);
    i0.ɵɵadvance();
    i0.ɵɵconditional(ctx_r1.section() === "rooms" ? 48 : -1);
    i0.ɵɵadvance();
    i0.ɵɵconditional(!ctx_r1.locationReady() ? 49 : -1);
    i0.ɵɵadvance();
    i0.ɵɵconditional(ctx_r1.section() === "rooms" && ctx_r1.locationReady() ? 50 : -1);
    i0.ɵɵadvance();
    i0.ɵɵconditional(ctx_r1.section() === "capacity" && ctx_r1.academicSession && ctx_r1.locationReady() && ctx_r1.locationRooms().length ? 51 : -1);
    i0.ɵɵadvance();
    i0.ɵɵconditional(ctx_r1.section() === "capacity" && !ctx_r1.academicSession ? 52 : !ctx_r1.locationReady() ? 53 : ctx_r1.loading() ? 54 : ctx_r1.roomsLoadFailed() ? 55 : !ctx_r1.locationRooms().length ? 56 : 57);
} }
function HostelManagementComponent_Conditional_13_For_23_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 9);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const hostel_r40 = ctx.$implicit;
    i0.ɵɵproperty("value", hostel_r40._id);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(hostel_r40.name);
} }
function HostelManagementComponent_Conditional_13_Conditional_34_For_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "span", 121);
} }
function HostelManagementComponent_Conditional_13_Conditional_34_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "section", 109);
    i0.ɵɵrepeaterCreate(1, HostelManagementComponent_Conditional_13_Conditional_34_For_2_Template, 1, 0, "span", 121, i0.ɵɵrepeaterTrackByIdentity);
    i0.ɵɵelementStart(3, "span", 28);
    i0.ɵɵtext(4, "Loading hostel allocations\u2026");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    i0.ɵɵadvance();
    i0.ɵɵrepeater(i0.ɵɵpureFunction0(0, _c0));
} }
function HostelManagementComponent_Conditional_13_Conditional_35_Template(rf, ctx) { if (rf & 1) {
    const _r41 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "section", 110)(1, "span", 45);
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(2, "svg", 122);
    i0.ɵɵelementEnd();
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(3, "h2");
    i0.ɵɵtext(4, "Allocations could not be loaded");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "p");
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "button", 14);
    i0.ɵɵlistener("click", function HostelManagementComponent_Conditional_13_Conditional_35_Template_button_click_7_listener() { i0.ɵɵrestoreView(_r41); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.loadAllocations()); });
    i0.ɵɵtext(8, " Retry ");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(6);
    i0.ɵɵtextInterpolate(ctx_r1.error() || "Check your connection and try again.");
} }
function HostelManagementComponent_Conditional_13_Conditional_36_Template(rf, ctx) { if (rf & 1) {
    const _r42 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "section", 57)(1, "span", 45);
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(2, "svg", 119);
    i0.ɵɵelementEnd();
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(3, "h2");
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "p");
    i0.ɵɵtext(6, "Allocate a configured room and available bed to an eligible student.");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "button", 12);
    i0.ɵɵlistener("click", function HostelManagementComponent_Conditional_13_Conditional_36_Template_button_click_7_listener() { i0.ɵɵrestoreView(_r42); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.openAllocationDrawer()); });
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(8, "svg", 16);
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(9, "span");
    i0.ɵɵtext(10, "Allocate student");
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate1("No ", ctx_r1.allocationStatusFilter === "active" ? "active hostel " : "", "allocations");
} }
function HostelManagementComponent_Conditional_13_Conditional_37_Template(rf, ctx) { if (rf & 1) {
    const _r43 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "section", 57)(1, "span", 45);
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(2, "svg", 136);
    i0.ɵɵelementEnd();
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(3, "h2");
    i0.ɵɵtext(4, "No matching allocations");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "p");
    i0.ɵɵtext(6, "Adjust your search or browse filters.");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "button", 14);
    i0.ɵɵlistener("click", function HostelManagementComponent_Conditional_13_Conditional_37_Template_button_click_7_listener() { i0.ɵɵrestoreView(_r43); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.clearAllocationFilters()); });
    i0.ɵɵtext(8, " Clear filters ");
    i0.ɵɵelementEnd()();
} }
function HostelManagementComponent_Conditional_13_Conditional_38_For_26_Template(rf, ctx) { if (rf & 1) {
    const _r44 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "tr")(1, "td")(2, "strong");
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "small");
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(6, "td");
    i0.ɵɵtext(7);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "td");
    i0.ɵɵtext(9);
    i0.ɵɵelementStart(10, "small");
    i0.ɵɵtext(11);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(12, "td")(13, "strong");
    i0.ɵɵtext(14);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(15, "small");
    i0.ɵɵtext(16);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(17, "td");
    i0.ɵɵtext(18);
    i0.ɵɵpipe(19, "date");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(20, "td")(21, "span", 49);
    i0.ɵɵtext(22);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(23, "td", 47)(24, "erp-compact-action-menu", 50);
    i0.ɵɵlistener("selected", function HostelManagementComponent_Conditional_13_Conditional_38_For_26_Template_erp_compact_action_menu_selected_24_listener($event) { const allocation_r45 = i0.ɵɵrestoreView(_r44).$implicit; const ctx_r1 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r1.handleAllocationAction($event, allocation_r45)); });
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const allocation_r45 = ctx.$implicit;
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(allocation_r45.studentName);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(allocation_r45.studentApplicationNumber);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(allocation_r45.academicSession);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", allocation_r45.hostelName);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate2("", allocation_r45.blockName, " \u00B7 ", allocation_r45.floorName);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(allocation_r45.roomNumber);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1("Bed ", allocation_r45.bedNumber);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind2(19, 13, allocation_r45.allocatedAt, "mediumDate"));
    i0.ɵɵadvance(3);
    i0.ɵɵclassProp("erp-status--neutral", allocation_r45.status !== "active");
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", allocation_r45.status === "active" ? "Active" : "Vacated", " ");
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("items", ctx_r1.allocationActions(allocation_r45));
} }
function HostelManagementComponent_Conditional_13_Conditional_38_For_29_Template(rf, ctx) { if (rf & 1) {
    const _r46 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "article", 139)(1, "div", 140)(2, "span", 141);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "div")(5, "strong");
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "small");
    i0.ɵɵtext(8);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(9, "erp-compact-action-menu", 50);
    i0.ɵɵlistener("selected", function HostelManagementComponent_Conditional_13_Conditional_38_For_29_Template_erp_compact_action_menu_selected_9_listener($event) { const allocation_r47 = i0.ɵɵrestoreView(_r46).$implicit; const ctx_r1 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r1.handleAllocationAction($event, allocation_r47)); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(10, "dl")(11, "div")(12, "dt");
    i0.ɵɵtext(13, "Hostel");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(14, "dd");
    i0.ɵɵtext(15);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(16, "div")(17, "dt");
    i0.ɵɵtext(18, "Location");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(19, "dd");
    i0.ɵɵtext(20);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(21, "div")(22, "dt");
    i0.ɵɵtext(23, "Room / Bed");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(24, "dd");
    i0.ɵɵtext(25);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(26, "div")(27, "dt");
    i0.ɵɵtext(28, "Status");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(29, "dd");
    i0.ɵɵtext(30);
    i0.ɵɵelementEnd()()()();
} if (rf & 2) {
    const allocation_r47 = ctx.$implicit;
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(allocation_r47.studentName.slice(0, 1));
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(allocation_r47.studentName);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate2("", allocation_r47.studentApplicationNumber, " \u00B7 ", allocation_r47.academicSession);
    i0.ɵɵadvance();
    i0.ɵɵproperty("items", ctx_r1.allocationActions(allocation_r47));
    i0.ɵɵadvance(6);
    i0.ɵɵtextInterpolate(allocation_r47.hostelName);
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate2("", allocation_r47.blockName, " \u00B7 ", allocation_r47.floorName);
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate2("", allocation_r47.roomNumber, " \u00B7 Bed ", allocation_r47.bedNumber);
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(allocation_r47.status === "active" ? "Active" : "Vacated");
} }
function HostelManagementComponent_Conditional_13_Conditional_38_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "section", 137)(1, "div", 126)(2, "h2");
    i0.ɵɵtext(3);
    i0.ɵɵelementStart(4, "small");
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(6, "div", 127)(7, "table")(8, "thead")(9, "tr")(10, "th");
    i0.ɵɵtext(11, "Student");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(12, "th");
    i0.ɵɵtext(13, "Session");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(14, "th");
    i0.ɵɵtext(15, "Hostel");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(16, "th");
    i0.ɵɵtext(17, "Room / Bed");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(18, "th");
    i0.ɵɵtext(19, "Allocated");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(20, "th");
    i0.ɵɵtext(21, "Status");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(22, "th", 47);
    i0.ɵɵtext(23, "Actions");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(24, "tbody");
    i0.ɵɵrepeaterCreate(25, HostelManagementComponent_Conditional_13_Conditional_38_For_26_Template, 25, 16, "tr", null, _forTrack0);
    i0.ɵɵelementEnd()()()();
    i0.ɵɵelementStart(27, "section", 138);
    i0.ɵɵrepeaterCreate(28, HostelManagementComponent_Conditional_13_Conditional_38_For_29_Template, 31, 11, "article", 139, _forTrack0);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1(" ", ctx_r1.allocationStatusFilter === "active" ? "Active allocations" : "Allocation directory", " ");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r1.visibleAllocations().length);
    i0.ɵɵadvance(20);
    i0.ɵɵrepeater(ctx_r1.visibleAllocations());
    i0.ɵɵadvance(3);
    i0.ɵɵrepeater(ctx_r1.visibleAllocations());
} }
function HostelManagementComponent_Conditional_13_Template(rf, ctx) { if (rf & 1) {
    const _r39 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "section", 128)(1, "div", 129)(2, "label", 130)(3, "span");
    i0.ɵɵtext(4, "Academic session");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "input", 112);
    i0.ɵɵtwoWayListener("ngModelChange", function HostelManagementComponent_Conditional_13_Template_input_ngModelChange_5_listener($event) { i0.ɵɵrestoreView(_r39); const ctx_r1 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r1.allocationBrowseSession, $event) || (ctx_r1.allocationBrowseSession = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵlistener("change", function HostelManagementComponent_Conditional_13_Template_input_change_5_listener() { i0.ɵɵrestoreView(_r39); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.allocationBrowseChanged()); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(6, "label", 131);
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(7, "svg", 27);
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(8, "span", 28);
    i0.ɵɵtext(9, "Search active allocations");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(10, "input", 132);
    i0.ɵɵtwoWayListener("ngModelChange", function HostelManagementComponent_Conditional_13_Template_input_ngModelChange_10_listener($event) { i0.ɵɵrestoreView(_r39); const ctx_r1 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r1.allocationSearch, $event) || (ctx_r1.allocationSearch = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(11, "button", 133);
    i0.ɵɵlistener("click", function HostelManagementComponent_Conditional_13_Template_button_click_11_listener() { i0.ɵɵrestoreView(_r39); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.allocationFiltersOpen.set(!ctx_r1.allocationFiltersOpen())); });
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(12, "svg", 31);
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(13, "span");
    i0.ɵɵtext(14, "Filters");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(15, "div", 134)(16, "label")(17, "span", 28);
    i0.ɵɵtext(18, "Filter by hostel");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(19, "select", 33);
    i0.ɵɵtwoWayListener("ngModelChange", function HostelManagementComponent_Conditional_13_Template_select_ngModelChange_19_listener($event) { i0.ɵɵrestoreView(_r39); const ctx_r1 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r1.allocationBrowseHostelId, $event) || (ctx_r1.allocationBrowseHostelId = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵlistener("ngModelChange", function HostelManagementComponent_Conditional_13_Template_select_ngModelChange_19_listener() { i0.ɵɵrestoreView(_r39); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.allocationBrowseChanged()); });
    i0.ɵɵelementStart(20, "option", 54);
    i0.ɵɵtext(21, "All hostels");
    i0.ɵɵelementEnd();
    i0.ɵɵrepeaterCreate(22, HostelManagementComponent_Conditional_13_For_23_Template, 2, 2, "option", 9, _forTrack0);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(24, "label")(25, "span", 28);
    i0.ɵɵtext(26, "Filter by allocation status");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(27, "select", 33);
    i0.ɵɵtwoWayListener("ngModelChange", function HostelManagementComponent_Conditional_13_Template_select_ngModelChange_27_listener($event) { i0.ɵɵrestoreView(_r39); const ctx_r1 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r1.allocationStatusFilter, $event) || (ctx_r1.allocationStatusFilter = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵlistener("ngModelChange", function HostelManagementComponent_Conditional_13_Template_select_ngModelChange_27_listener() { i0.ɵɵrestoreView(_r39); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.allocationBrowseChanged()); });
    i0.ɵɵelementStart(28, "option", 38);
    i0.ɵɵtext(29, "Active allocations");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(30, "option", 135);
    i0.ɵɵtext(31, "Vacated allocations");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(32, "option", 34);
    i0.ɵɵtext(33, "All statuses");
    i0.ɵɵelementEnd()()()()()();
    i0.ɵɵconditionalCreate(34, HostelManagementComponent_Conditional_13_Conditional_34_Template, 5, 1, "section", 109)(35, HostelManagementComponent_Conditional_13_Conditional_35_Template, 9, 1, "section", 110)(36, HostelManagementComponent_Conditional_13_Conditional_36_Template, 11, 1, "section", 57)(37, HostelManagementComponent_Conditional_13_Conditional_37_Template, 9, 0, "section", 57)(38, HostelManagementComponent_Conditional_13_Conditional_38_Template, 30, 2);
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(5);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r1.allocationBrowseSession);
    i0.ɵɵadvance(5);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r1.allocationSearch);
    i0.ɵɵadvance();
    i0.ɵɵattribute("aria-expanded", ctx_r1.allocationFiltersOpen());
    i0.ɵɵadvance(4);
    i0.ɵɵclassProp("hostel-allocation-command__filters--open", ctx_r1.allocationFiltersOpen());
    i0.ɵɵadvance(4);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r1.allocationBrowseHostelId);
    i0.ɵɵadvance(3);
    i0.ɵɵrepeater(ctx_r1.hostels());
    i0.ɵɵadvance(5);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r1.allocationStatusFilter);
    i0.ɵɵadvance(7);
    i0.ɵɵconditional(ctx_r1.allocationLoading() ? 34 : ctx_r1.allocationLoadFailed() ? 35 : !ctx_r1.allocations().length ? 36 : !ctx_r1.visibleAllocations().length ? 37 : 38);
} }
function HostelManagementComponent_Conditional_14_Conditional_7_For_49_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "tr")(1, "td")(2, "strong");
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(4, "td");
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "td");
    i0.ɵɵtext(7);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "td");
    i0.ɵɵtext(9);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(10, "td");
    i0.ɵɵtext(11);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(12, "td");
    i0.ɵɵtext(13);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(14, "td");
    i0.ɵɵtext(15);
    i0.ɵɵpipe(16, "number");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const item_r49 = ctx.$implicit;
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(item_r49.hostelName);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(item_r49.type);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(item_r49.rooms);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(item_r49.beds);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(item_r49.occupied);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(item_r49.available);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", item_r49.beds ? i0.ɵɵpipeBind2(16, 7, item_r49.occupied * 100 / item_r49.beds, "1.0-0") : 0, "% ");
} }
function HostelManagementComponent_Conditional_14_Conditional_7_ForEmpty_50_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "tr")(1, "td", 147);
    i0.ɵɵtext(2, "No active hostel capacity available.");
    i0.ɵɵelementEnd()();
} }
function HostelManagementComponent_Conditional_14_Conditional_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 144)(1, "article", 145)(2, "div")(3, "small");
    i0.ɵɵtext(4, "Active hostels");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "strong");
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(7, "article", 145)(8, "div")(9, "small");
    i0.ɵɵtext(10, "Total rooms");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(11, "strong");
    i0.ɵɵtext(12);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(13, "article", 145)(14, "div")(15, "small");
    i0.ɵɵtext(16, "Occupied beds");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(17, "strong");
    i0.ɵɵtext(18);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(19, "article", 145)(20, "div")(21, "small");
    i0.ɵɵtext(22, "Available beds");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(23, "strong");
    i0.ɵɵtext(24);
    i0.ɵɵelementEnd()()()();
    i0.ɵɵelementStart(25, "section", 146)(26, "div", 126)(27, "h2");
    i0.ɵɵtext(28, "Hostel occupancy");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(29, "div", 127)(30, "table")(31, "thead")(32, "tr")(33, "th");
    i0.ɵɵtext(34, "Hostel");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(35, "th");
    i0.ɵɵtext(36, "Type");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(37, "th");
    i0.ɵɵtext(38, "Rooms");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(39, "th");
    i0.ɵɵtext(40, "Total beds");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(41, "th");
    i0.ɵɵtext(42, "Occupied");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(43, "th");
    i0.ɵɵtext(44, "Available");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(45, "th");
    i0.ɵɵtext(46, "Occupancy");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(47, "tbody");
    i0.ɵɵrepeaterCreate(48, HostelManagementComponent_Conditional_14_Conditional_7_For_49_Template, 17, 10, "tr", null, _forTrack1, false, HostelManagementComponent_Conditional_14_Conditional_7_ForEmpty_50_Template, 3, 0, "tr");
    i0.ɵɵelementEnd()()()();
} if (rf & 2) {
    const summary_r50 = ctx;
    i0.ɵɵadvance(6);
    i0.ɵɵtextInterpolate(summary_r50.totals.hostels);
    i0.ɵɵadvance(6);
    i0.ɵɵtextInterpolate(summary_r50.totals.rooms);
    i0.ɵɵadvance(6);
    i0.ɵɵtextInterpolate(summary_r50.totals.occupied);
    i0.ɵɵadvance(6);
    i0.ɵɵtextInterpolate(summary_r50.totals.available);
    i0.ɵɵadvance(24);
    i0.ɵɵrepeater(summary_r50.byHostel);
} }
function HostelManagementComponent_Conditional_14_Template(rf, ctx) { if (rf & 1) {
    const _r48 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "section", 142)(1, "label", 143)(2, "span");
    i0.ɵɵtext(3, "Academic session");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "input", 112);
    i0.ɵɵtwoWayListener("ngModelChange", function HostelManagementComponent_Conditional_14_Template_input_ngModelChange_4_listener($event) { i0.ɵɵrestoreView(_r48); const ctx_r1 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r1.academicSession, $event) || (ctx_r1.academicSession = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵlistener("change", function HostelManagementComponent_Conditional_14_Template_input_change_4_listener() { i0.ɵɵrestoreView(_r48); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.sessionChanged()); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(5, "button", 14);
    i0.ɵɵlistener("click", function HostelManagementComponent_Conditional_14_Template_button_click_5_listener() { i0.ɵɵrestoreView(_r48); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.loadOverview()); });
    i0.ɵɵtext(6, " Refresh overview ");
    i0.ɵɵelementEnd()();
    i0.ɵɵconditionalCreate(7, HostelManagementComponent_Conditional_14_Conditional_7_Template, 51, 5);
} if (rf & 2) {
    let tmp_2_0;
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(4);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r1.academicSession);
    i0.ɵɵadvance(3);
    i0.ɵɵconditional((tmp_2_0 = ctx_r1.overview()) ? 7 : -1, tmp_2_0);
} }
function HostelManagementComponent_For_17_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "option", 9);
} if (rf & 2) {
    const session_r51 = ctx.$implicit;
    i0.ɵɵproperty("value", session_r51);
} }
function HostelManagementComponent_Conditional_18_Conditional_34_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "small");
    i0.ɵɵtext(1, "Structure counts cannot be changed while editing.");
    i0.ɵɵelementEnd();
} }
function HostelManagementComponent_Conditional_18_Conditional_43_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 7);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r1.error());
} }
function HostelManagementComponent_Conditional_18_Conditional_48_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "span", 163);
} }
function HostelManagementComponent_Conditional_18_Template(rf, ctx) { if (rf & 1) {
    const _r52 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 10)(1, "button", 148);
    i0.ɵɵlistener("click", function HostelManagementComponent_Conditional_18_Template_button_click_1_listener() { i0.ɵɵrestoreView(_r52); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.closeHostelEditor()); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(2, "section", 149)(3, "header", 150)(4, "span", 151);
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(5, "svg", 113);
    i0.ɵɵelementEnd();
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(6, "div")(7, "small");
    i0.ɵɵtext(8);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(9, "h2", 152);
    i0.ɵɵtext(10);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(11, "p");
    i0.ɵɵtext(12);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(13, "button", 153);
    i0.ɵɵlistener("click", function HostelManagementComponent_Conditional_18_Template_button_click_13_listener() { i0.ɵɵrestoreView(_r52); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.closeHostelEditor()); });
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(14, "svg", 154);
    i0.ɵɵelementEnd()();
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(15, "form", 155);
    i0.ɵɵlistener("ngSubmit", function HostelManagementComponent_Conditional_18_Template_form_ngSubmit_15_listener() { i0.ɵɵrestoreView(_r52); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.saveHostel()); });
    i0.ɵɵelementStart(16, "label", 143)(17, "span");
    i0.ɵɵtext(18, "Hostel name *");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(19, "input", 156);
    i0.ɵɵtwoWayListener("ngModelChange", function HostelManagementComponent_Conditional_18_Template_input_ngModelChange_19_listener($event) { i0.ɵɵrestoreView(_r52); const ctx_r1 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r1.hostelName, $event) || (ctx_r1.hostelName = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(20, "label", 143)(21, "span");
    i0.ɵɵtext(22, "Hostel type *");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(23, "select", 157);
    i0.ɵɵtwoWayListener("ngModelChange", function HostelManagementComponent_Conditional_18_Template_select_ngModelChange_23_listener($event) { i0.ɵɵrestoreView(_r52); const ctx_r1 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r1.hostelType, $event) || (ctx_r1.hostelType = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementStart(24, "option", 35);
    i0.ɵɵtext(25, "Boys");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(26, "option", 36);
    i0.ɵɵtext(27, "Girls");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(28, "option", 37);
    i0.ɵɵtext(29, "Co-ed");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(30, "label", 143)(31, "span");
    i0.ɵɵtext(32, "Number of blocks *");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(33, "input", 158);
    i0.ɵɵtwoWayListener("ngModelChange", function HostelManagementComponent_Conditional_18_Template_input_ngModelChange_33_listener($event) { i0.ɵɵrestoreView(_r52); const ctx_r1 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r1.blockCount, $event) || (ctx_r1.blockCount = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd();
    i0.ɵɵconditionalCreate(34, HostelManagementComponent_Conditional_18_Conditional_34_Template, 2, 0, "small");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(35, "label", 143)(36, "span");
    i0.ɵɵtext(37, "Number of floors *");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(38, "input", 159);
    i0.ɵɵtwoWayListener("ngModelChange", function HostelManagementComponent_Conditional_18_Template_input_ngModelChange_38_listener($event) { i0.ɵɵrestoreView(_r52); const ctx_r1 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r1.floorCount, $event) || (ctx_r1.floorCount = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(39, "label", 143)(40, "span");
    i0.ɵɵtext(41, "Planned rooms *");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(42, "input", 160);
    i0.ɵɵtwoWayListener("ngModelChange", function HostelManagementComponent_Conditional_18_Template_input_ngModelChange_42_listener($event) { i0.ɵɵrestoreView(_r52); const ctx_r1 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r1.plannedRoomCount, $event) || (ctx_r1.plannedRoomCount = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd()();
    i0.ɵɵconditionalCreate(43, HostelManagementComponent_Conditional_18_Conditional_43_Template, 2, 1, "p", 7);
    i0.ɵɵelementStart(44, "footer", 161)(45, "button", 14);
    i0.ɵɵlistener("click", function HostelManagementComponent_Conditional_18_Template_button_click_45_listener() { i0.ɵɵrestoreView(_r52); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.closeHostelEditor()); });
    i0.ɵɵtext(46, " Cancel ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(47, "button", 162);
    i0.ɵɵconditionalCreate(48, HostelManagementComponent_Conditional_18_Conditional_48_Template, 1, 0, "span", 163);
    i0.ɵɵtext(49);
    i0.ɵɵelementEnd()()()()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(8);
    i0.ɵɵtextInterpolate(ctx_r1.editingHostel() ? "Update record" : "New hostel");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r1.editingHostel() ? "Edit hostel" : "Create hostel");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", ctx_r1.editingHostel() ? "Update the hostel identity and planned capacity." : "Add basic identity and planned structure.", " ");
    i0.ɵɵadvance(7);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r1.hostelName);
    i0.ɵɵadvance(4);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r1.hostelType);
    i0.ɵɵadvance(10);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r1.blockCount);
    i0.ɵɵproperty("disabled", !!ctx_r1.editingHostel());
    i0.ɵɵadvance();
    i0.ɵɵconditional(ctx_r1.editingHostel() ? 34 : -1);
    i0.ɵɵadvance(4);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r1.floorCount);
    i0.ɵɵproperty("disabled", !!ctx_r1.editingHostel());
    i0.ɵɵadvance(4);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r1.plannedRoomCount);
    i0.ɵɵadvance();
    i0.ɵɵconditional(ctx_r1.error() ? 43 : -1);
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("disabled", ctx_r1.saving() || ctx_r1.hostelName.trim().length < 2 || ctx_r1.blockCount < 0 || ctx_r1.floorCount < 0 || ctx_r1.plannedRoomCount < 0);
    i0.ɵɵadvance();
    i0.ɵɵconditional(ctx_r1.saving() ? 48 : -1);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r1.saving() ? "Saving\u2026" : ctx_r1.editingHostel() ? "Save changes" : "Create hostel", " ");
} }
function HostelManagementComponent_Conditional_19_Conditional_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(0, "svg", 166);
} }
function HostelManagementComponent_Conditional_19_Conditional_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(0, "svg", 167);
} }
function HostelManagementComponent_Conditional_19_Conditional_17_Template(rf, ctx) { if (rf & 1) {
    const _r54 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "section", 176)(1, "span");
    i0.ɵɵtext(2, "Transfer mode");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "strong");
    i0.ɵɵtext(4, "Current room remains active until transfer is confirmed.");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "button", 76);
    i0.ɵɵlistener("click", function HostelManagementComponent_Conditional_19_Conditional_17_Template_button_click_5_listener() { i0.ɵɵrestoreView(_r54); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.cancelTransfer()); });
    i0.ɵɵtext(6, "Cancel transfer");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(7, "section", 177)(8, "span");
    i0.ɵɵtext(9, "Current allocation");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(10, "strong");
    i0.ɵɵtext(11);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(12, "p");
    i0.ɵɵtext(13);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(14, "small");
    i0.ɵɵtext(15);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const transfer_r55 = ctx;
    i0.ɵɵadvance(11);
    i0.ɵɵtextInterpolate(transfer_r55.studentName);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate3("", transfer_r55.hostelName, " / ", transfer_r55.blockName, " / ", transfer_r55.floorName);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate2("Room ", transfer_r55.roomNumber, " \u00B7 Bed ", transfer_r55.bedNumber);
} }
function HostelManagementComponent_Conditional_19_Conditional_18_For_2_Conditional_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(0, "svg", 179);
} }
function HostelManagementComponent_Conditional_19_Conditional_18_For_2_Conditional_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtext(0);
} if (rf & 2) {
    const stage_r56 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵtextInterpolate1(" ", stage_r56, " ");
} }
function HostelManagementComponent_Conditional_19_Conditional_18_For_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "li")(1, "span");
    i0.ɵɵconditionalCreate(2, HostelManagementComponent_Conditional_19_Conditional_18_For_2_Conditional_2_Template, 1, 0, ":svg:svg", 179)(3, HostelManagementComponent_Conditional_19_Conditional_18_For_2_Conditional_3_Template, 1, 1);
    i0.ɵɵelementEnd();
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const stage_r56 = ctx.$implicit;
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵclassProp("hostel-allocation-stages__item--active", ctx_r1.allocationStage() === stage_r56)("hostel-allocation-stages__item--complete", ctx_r1.allocationStage() > stage_r56);
    i0.ɵɵattribute("aria-current", ctx_r1.allocationStage() === stage_r56 ? "step" : null);
    i0.ɵɵadvance(2);
    i0.ɵɵconditional(ctx_r1.allocationStage() > stage_r56 ? 2 : 3);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", stage_r56 === 1 ? "Student" : stage_r56 === 2 ? "Room & Bed" : "Review", " ");
} }
function HostelManagementComponent_Conditional_19_Conditional_18_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "ol", 171);
    i0.ɵɵrepeaterCreate(1, HostelManagementComponent_Conditional_19_Conditional_18_For_2_Template, 5, 7, "li", 178, i0.ɵɵrepeaterTrackByIdentity);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    i0.ɵɵadvance();
    i0.ɵɵrepeater(i0.ɵɵpureFunction0(0, _c2));
} }
function HostelManagementComponent_Conditional_19_Conditional_19_Conditional_18_For_2_Template(rf, ctx) { if (rf & 1) {
    const _r58 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 187);
    i0.ɵɵlistener("click", function HostelManagementComponent_Conditional_19_Conditional_19_Conditional_18_For_2_Template_button_click_0_listener() { const student_r59 = i0.ɵɵrestoreView(_r58).$implicit; const ctx_r1 = i0.ɵɵnextContext(4); return i0.ɵɵresetView(ctx_r1.selectAllocationStudent(student_r59)); });
    i0.ɵɵelementStart(1, "span", 141);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "span")(4, "strong");
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "small");
    i0.ɵɵtext(7);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const student_r59 = ctx.$implicit;
    const ctx_r1 = i0.ɵɵnextContext(4);
    i0.ɵɵattribute("aria-selected", ctx_r1.selectedStudentId === student_r59._id);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(student_r59.name.slice(0, 1));
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(student_r59.name);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(student_r59.applicationNumber);
} }
function HostelManagementComponent_Conditional_19_Conditional_19_Conditional_18_ForEmpty_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p");
    i0.ɵɵtext(1, "No approved students match this search.");
    i0.ɵɵelementEnd();
} }
function HostelManagementComponent_Conditional_19_Conditional_19_Conditional_18_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 184);
    i0.ɵɵrepeaterCreate(1, HostelManagementComponent_Conditional_19_Conditional_19_Conditional_18_For_2_Template, 8, 4, "button", 186, _forTrack0, false, HostelManagementComponent_Conditional_19_Conditional_19_Conditional_18_ForEmpty_3_Template, 2, 0, "p");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance();
    i0.ɵɵrepeater(ctx_r1.visibleStudents());
} }
function HostelManagementComponent_Conditional_19_Conditional_19_Conditional_19_Conditional_8_Template(rf, ctx) { if (rf & 1) {
    const _r60 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "span", 188);
    i0.ɵɵtext(1, "Already allocated");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(2, "p");
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "div")(5, "button", 14);
    i0.ɵɵlistener("click", function HostelManagementComponent_Conditional_19_Conditional_19_Conditional_19_Conditional_8_Template_button_click_5_listener() { const current_r61 = i0.ɵɵrestoreView(_r60); const ctx_r1 = i0.ɵɵnextContext(4); return i0.ɵɵresetView(ctx_r1.viewAllocation(current_r61)); });
    i0.ɵɵtext(6, " View allocation ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "button", 14);
    i0.ɵɵlistener("click", function HostelManagementComponent_Conditional_19_Conditional_19_Conditional_19_Conditional_8_Template_button_click_7_listener() { const current_r61 = i0.ɵɵrestoreView(_r60); const ctx_r1 = i0.ɵɵnextContext(4); return i0.ɵɵresetView(ctx_r1.startTransfer(current_r61)); });
    i0.ɵɵtext(8, " Start transfer ");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const current_r61 = ctx;
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate4(" Current allocation: ", current_r61.hostelName, " / ", current_r61.blockName, " / ", current_r61.roomNumber, " / Bed ", current_r61.bedNumber, " ");
} }
function HostelManagementComponent_Conditional_19_Conditional_19_Conditional_19_Conditional_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 49);
    i0.ɵɵtext(1, "Eligible for allocation");
    i0.ɵɵelementEnd();
} }
function HostelManagementComponent_Conditional_19_Conditional_19_Conditional_19_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "section", 185)(1, "span", 141);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "div")(4, "strong");
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "small");
    i0.ɵɵtext(7);
    i0.ɵɵelementEnd()();
    i0.ɵɵconditionalCreate(8, HostelManagementComponent_Conditional_19_Conditional_19_Conditional_19_Conditional_8_Template, 9, 4)(9, HostelManagementComponent_Conditional_19_Conditional_19_Conditional_19_Conditional_9_Template, 2, 0, "span", 49);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    let tmp_7_0;
    const student_r62 = ctx;
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r1.selectedStudentInitials());
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(student_r62.name);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(student_r62.applicationNumber);
    i0.ɵɵadvance();
    i0.ɵɵconditional((tmp_7_0 = ctx_r1.activeAllocationForSelectedStudent()) ? 8 : 9, tmp_7_0);
} }
function HostelManagementComponent_Conditional_19_Conditional_19_Template(rf, ctx) { if (rf & 1) {
    const _r57 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "section", 172)(1, "div", 180)(2, "small");
    i0.ɵɵtext(3, "Stage 1 of 3");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "h3", 181);
    i0.ɵɵtext(5, "Select student");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "p");
    i0.ɵɵtext(7, "Choose the session and approved student record.");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(8, "label", 143)(9, "span");
    i0.ɵɵtext(10, "Academic session *");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(11, "input", 112);
    i0.ɵɵtwoWayListener("ngModelChange", function HostelManagementComponent_Conditional_19_Conditional_19_Template_input_ngModelChange_11_listener($event) { i0.ɵɵrestoreView(_r57); const ctx_r1 = i0.ɵɵnextContext(2); i0.ɵɵtwoWayBindingSet(ctx_r1.academicSession, $event) || (ctx_r1.academicSession = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵlistener("change", function HostelManagementComponent_Conditional_19_Conditional_19_Template_input_change_11_listener() { i0.ɵɵrestoreView(_r57); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.allocationFormSessionChanged()); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(12, "label", 143)(13, "span");
    i0.ɵɵtext(14, "Search student *");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(15, "span", 182);
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(16, "svg", 27);
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(17, "input", 183);
    i0.ɵɵtwoWayListener("ngModelChange", function HostelManagementComponent_Conditional_19_Conditional_19_Template_input_ngModelChange_17_listener($event) { i0.ɵɵrestoreView(_r57); const ctx_r1 = i0.ɵɵnextContext(2); i0.ɵɵtwoWayBindingSet(ctx_r1.studentSearch, $event) || (ctx_r1.studentSearch = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵlistener("ngModelChange", function HostelManagementComponent_Conditional_19_Conditional_19_Template_input_ngModelChange_17_listener() { i0.ɵɵrestoreView(_r57); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.selectedStudentId = ""); });
    i0.ɵɵelementEnd()()();
    i0.ɵɵconditionalCreate(18, HostelManagementComponent_Conditional_19_Conditional_19_Conditional_18_Template, 4, 1, "div", 184);
    i0.ɵɵconditionalCreate(19, HostelManagementComponent_Conditional_19_Conditional_19_Conditional_19_Template, 10, 4, "section", 185);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    let tmp_5_0;
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(11);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r1.academicSession);
    i0.ɵɵadvance(6);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r1.studentSearch);
    i0.ɵɵadvance();
    i0.ɵɵconditional(ctx_r1.studentSearch && !ctx_r1.selectedStudentId ? 18 : -1);
    i0.ɵɵadvance();
    i0.ɵɵconditional((tmp_5_0 = ctx_r1.selectedStudent()) ? 19 : -1, tmp_5_0);
} }
function HostelManagementComponent_Conditional_19_Conditional_20_Conditional_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 190)(1, "span", 141);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "span")(4, "strong");
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "small");
    i0.ɵɵtext(7);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const student_r64 = ctx;
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r1.selectedStudentInitials());
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(student_r64.name);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(student_r64.applicationNumber);
} }
function HostelManagementComponent_Conditional_19_Conditional_20_For_17_Conditional_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 9);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const hostel_r65 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵproperty("value", hostel_r65._id);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(hostel_r65.name);
} }
function HostelManagementComponent_Conditional_19_Conditional_20_For_17_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵconditionalCreate(0, HostelManagementComponent_Conditional_19_Conditional_20_For_17_Conditional_0_Template, 2, 2, "option", 9);
} if (rf & 2) {
    const hostel_r65 = ctx.$implicit;
    i0.ɵɵconditional(hostel_r65.isActive ? 0 : -1);
} }
function HostelManagementComponent_Conditional_19_Conditional_20_For_25_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 9);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const block_r66 = ctx.$implicit;
    i0.ɵɵproperty("value", block_r66._id);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(block_r66.name);
} }
function HostelManagementComponent_Conditional_19_Conditional_20_For_33_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 9);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const floor_r67 = ctx.$implicit;
    i0.ɵɵproperty("value", floor_r67._id);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(floor_r67.name);
} }
function HostelManagementComponent_Conditional_19_Conditional_20_Conditional_34_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 192);
    i0.ɵɵelement(1, "span", 44);
    i0.ɵɵtext(2, " Loading available rooms\u2026 ");
    i0.ɵɵelementEnd();
} }
function HostelManagementComponent_Conditional_19_Conditional_20_Conditional_35_Conditional_5_Conditional_1_Template(rf, ctx) { if (rf & 1) {
    const _r69 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "span", 45);
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(1, "svg", 197);
    i0.ɵɵelementEnd();
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(2, "strong");
    i0.ɵɵtext(3, "No configured rooms available");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "p");
    i0.ɵɵtext(5, "Rooms must have capacity and type configured before allocation.");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "a", 198);
    i0.ɵɵlistener("click", function HostelManagementComponent_Conditional_19_Conditional_20_Conditional_35_Conditional_5_Conditional_1_Template_a_click_6_listener() { i0.ɵɵrestoreView(_r69); const ctx_r1 = i0.ɵɵnextContext(5); return i0.ɵɵresetView(ctx_r1.closeAllocationDrawer()); });
    i0.ɵɵtext(7, "Go to Room Capacity");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(5);
    i0.ɵɵadvance(6);
    i0.ɵɵproperty("queryParams", i0.ɵɵpureFunction4(1, _c3, ctx_r1.academicSession, ctx_r1.selectedHostelId, ctx_r1.selectedBlockId, ctx_r1.selectedFloorId));
} }
function HostelManagementComponent_Conditional_19_Conditional_20_Conditional_35_Conditional_5_Conditional_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 45);
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(1, "svg", 199);
    i0.ɵɵelementEnd();
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(2, "strong");
    i0.ɵɵtext(3, "No rooms match this search");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "p");
    i0.ɵɵtext(5, "Clear the room search or try another location.");
    i0.ɵɵelementEnd();
} }
function HostelManagementComponent_Conditional_19_Conditional_20_Conditional_35_Conditional_5_Conditional_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 45);
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(1, "svg", 200);
    i0.ɵɵelementEnd();
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(2, "strong");
    i0.ɵɵtext(3, "No beds available");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "p");
    i0.ɵɵtext(5, "Every configured room at this location is currently full.");
    i0.ɵɵelementEnd();
} }
function HostelManagementComponent_Conditional_19_Conditional_20_Conditional_35_Conditional_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 195);
    i0.ɵɵconditionalCreate(1, HostelManagementComponent_Conditional_19_Conditional_20_Conditional_35_Conditional_5_Conditional_1_Template, 8, 6)(2, HostelManagementComponent_Conditional_19_Conditional_20_Conditional_35_Conditional_5_Conditional_2_Template, 6, 0)(3, HostelManagementComponent_Conditional_19_Conditional_20_Conditional_35_Conditional_5_Conditional_3_Template, 6, 0);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(4);
    i0.ɵɵadvance();
    i0.ɵɵconditional(!ctx_r1.allocationConfiguredRooms().length ? 1 : ctx_r1.allocationRoomSearch ? 2 : 3);
} }
function HostelManagementComponent_Conditional_19_Conditional_20_Conditional_35_Conditional_6_For_2_Template(rf, ctx) { if (rf & 1) {
    const _r70 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 187);
    i0.ɵɵlistener("click", function HostelManagementComponent_Conditional_19_Conditional_20_Conditional_35_Conditional_6_For_2_Template_button_click_0_listener() { const room_r71 = i0.ɵɵrestoreView(_r70).$implicit; const ctx_r1 = i0.ɵɵnextContext(5); return i0.ɵɵresetView(ctx_r1.selectAllocationRoom(room_r71)); });
    i0.ɵɵelementStart(1, "span")(2, "strong");
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "small");
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(6, "span");
    i0.ɵɵtext(7);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const room_r71 = ctx.$implicit;
    const ctx_r1 = i0.ɵɵnextContext(5);
    i0.ɵɵclassProp("hostel-room-option--selected", ctx_r1.selectedRoomId === room_r71._id);
    i0.ɵɵattribute("aria-selected", ctx_r1.selectedRoomId === room_r71._id);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(room_r71.roomNumber);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate2("", room_r71.roomType, " \u00B7 ", room_r71.capacity, " seater");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1("", room_r71.capacity - room_r71.occupiedBeds.length, " beds available");
} }
function HostelManagementComponent_Conditional_19_Conditional_20_Conditional_35_Conditional_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 196);
    i0.ɵɵrepeaterCreate(1, HostelManagementComponent_Conditional_19_Conditional_20_Conditional_35_Conditional_6_For_2_Template, 8, 7, "button", 201, _forTrack0);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(4);
    i0.ɵɵadvance();
    i0.ɵɵrepeater(ctx_r1.allocationAvailableRooms());
} }
function HostelManagementComponent_Conditional_19_Conditional_20_Conditional_35_Template(rf, ctx) { if (rf & 1) {
    const _r68 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "label", 194);
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(1, "svg", 27);
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(2, "span", 28);
    i0.ɵɵtext(3, "Search available rooms");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "input", 100);
    i0.ɵɵtwoWayListener("ngModelChange", function HostelManagementComponent_Conditional_19_Conditional_20_Conditional_35_Template_input_ngModelChange_4_listener($event) { i0.ɵɵrestoreView(_r68); const ctx_r1 = i0.ɵɵnextContext(3); i0.ɵɵtwoWayBindingSet(ctx_r1.allocationRoomSearch, $event) || (ctx_r1.allocationRoomSearch = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd()();
    i0.ɵɵconditionalCreate(5, HostelManagementComponent_Conditional_19_Conditional_20_Conditional_35_Conditional_5_Template, 4, 1, "div", 195)(6, HostelManagementComponent_Conditional_19_Conditional_20_Conditional_35_Conditional_6_Template, 3, 0, "div", 196);
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(4);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r1.allocationRoomSearch);
    i0.ɵɵadvance();
    i0.ɵɵconditional(!ctx_r1.allocationAvailableRooms().length ? 5 : 6);
} }
function HostelManagementComponent_Conditional_19_Conditional_20_Conditional_36_For_12_Template(rf, ctx) { if (rf & 1) {
    const _r72 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 204);
    i0.ɵɵlistener("click", function HostelManagementComponent_Conditional_19_Conditional_20_Conditional_36_For_12_Template_button_click_0_listener() { const bed_r73 = i0.ɵɵrestoreView(_r72).$implicit; const ctx_r1 = i0.ɵɵnextContext(4); return i0.ɵɵresetView(ctx_r1.selectAllocationBed(bed_r73)); });
    i0.ɵɵtext(1);
    i0.ɵɵelementStart(2, "small");
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const bed_r73 = ctx.$implicit;
    const room_r74 = i0.ɵɵnextContext();
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵclassProp("hostel-bed-selector__bed--selected", ctx_r1.selectedBedNumber === bed_r73);
    i0.ɵɵproperty("disabled", room_r74.occupiedBeds.includes(bed_r73));
    i0.ɵɵattribute("aria-selected", ctx_r1.selectedBedNumber === bed_r73);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" Bed ", bed_r73, " ");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(room_r74.occupiedBeds.includes(bed_r73) ? "Occupied" : "Available");
} }
function HostelManagementComponent_Conditional_19_Conditional_20_Conditional_36_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "section", 193)(1, "div")(2, "span");
    i0.ɵɵtext(3, "Selected room");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "strong");
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "small");
    i0.ɵɵtext(7);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(8, "p");
    i0.ɵɵtext(9);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(10, "div", 202);
    i0.ɵɵrepeaterCreate(11, HostelManagementComponent_Conditional_19_Conditional_20_Conditional_36_For_12_Template, 4, 6, "button", 203, i0.ɵɵrepeaterTrackByIdentity);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const room_r74 = ctx;
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate3("", room_r74.roomNumber, " \u00B7 ", room_r74.roomType, " \u00B7 ", room_r74.capacity, " seater");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate3("", room_r74.hostelName, " / ", room_r74.blockName, " / ", room_r74.floorName);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate2(" ", room_r74.capacity - room_r74.occupiedBeds.length, " of ", room_r74.capacity, " beds available ");
    i0.ɵɵadvance(2);
    i0.ɵɵrepeater(room_r74.beds);
} }
function HostelManagementComponent_Conditional_19_Conditional_20_Template(rf, ctx) { if (rf & 1) {
    const _r63 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "section", 173)(1, "div", 180)(2, "small");
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "h3", 189);
    i0.ɵɵtext(5, "Select room and bed");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "p");
    i0.ɵɵtext(7);
    i0.ɵɵelementEnd()();
    i0.ɵɵconditionalCreate(8, HostelManagementComponent_Conditional_19_Conditional_20_Conditional_8_Template, 8, 3, "div", 190);
    i0.ɵɵelementStart(9, "div", 191)(10, "label", 143)(11, "span");
    i0.ɵɵtext(12, "Hostel *");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(13, "select", 33);
    i0.ɵɵtwoWayListener("ngModelChange", function HostelManagementComponent_Conditional_19_Conditional_20_Template_select_ngModelChange_13_listener($event) { i0.ɵɵrestoreView(_r63); const ctx_r1 = i0.ɵɵnextContext(2); i0.ɵɵtwoWayBindingSet(ctx_r1.selectedHostelId, $event) || (ctx_r1.selectedHostelId = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵlistener("ngModelChange", function HostelManagementComponent_Conditional_19_Conditional_20_Template_select_ngModelChange_13_listener() { i0.ɵɵrestoreView(_r63); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.allocationHostelSelectionChanged()); });
    i0.ɵɵelementStart(14, "option", 54);
    i0.ɵɵtext(15, "Select active hostel");
    i0.ɵɵelementEnd();
    i0.ɵɵrepeaterCreate(16, HostelManagementComponent_Conditional_19_Conditional_20_For_17_Template, 1, 1, null, null, _forTrack0);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(18, "label", 143)(19, "span");
    i0.ɵɵtext(20, "Block *");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(21, "select", 97);
    i0.ɵɵtwoWayListener("ngModelChange", function HostelManagementComponent_Conditional_19_Conditional_20_Template_select_ngModelChange_21_listener($event) { i0.ɵɵrestoreView(_r63); const ctx_r1 = i0.ɵɵnextContext(2); i0.ɵɵtwoWayBindingSet(ctx_r1.selectedBlockId, $event) || (ctx_r1.selectedBlockId = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵlistener("ngModelChange", function HostelManagementComponent_Conditional_19_Conditional_20_Template_select_ngModelChange_21_listener() { i0.ɵɵrestoreView(_r63); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.allocationBlockSelectionChanged()); });
    i0.ɵɵelementStart(22, "option", 54);
    i0.ɵɵtext(23, "Select block");
    i0.ɵɵelementEnd();
    i0.ɵɵrepeaterCreate(24, HostelManagementComponent_Conditional_19_Conditional_20_For_25_Template, 2, 2, "option", 9, _forTrack0);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(26, "label", 143)(27, "span");
    i0.ɵɵtext(28, "Floor *");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(29, "select", 97);
    i0.ɵɵtwoWayListener("ngModelChange", function HostelManagementComponent_Conditional_19_Conditional_20_Template_select_ngModelChange_29_listener($event) { i0.ɵɵrestoreView(_r63); const ctx_r1 = i0.ɵɵnextContext(2); i0.ɵɵtwoWayBindingSet(ctx_r1.selectedFloorId, $event) || (ctx_r1.selectedFloorId = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵlistener("ngModelChange", function HostelManagementComponent_Conditional_19_Conditional_20_Template_select_ngModelChange_29_listener() { i0.ɵɵrestoreView(_r63); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.allocationFloorSelectionChanged()); });
    i0.ɵɵelementStart(30, "option", 54);
    i0.ɵɵtext(31, "Select floor");
    i0.ɵɵelementEnd();
    i0.ɵɵrepeaterCreate(32, HostelManagementComponent_Conditional_19_Conditional_20_For_33_Template, 2, 2, "option", 9, _forTrack0);
    i0.ɵɵelementEnd()()();
    i0.ɵɵconditionalCreate(34, HostelManagementComponent_Conditional_19_Conditional_20_Conditional_34_Template, 3, 0, "div", 192)(35, HostelManagementComponent_Conditional_19_Conditional_20_Conditional_35_Template, 7, 2);
    i0.ɵɵconditionalCreate(36, HostelManagementComponent_Conditional_19_Conditional_20_Conditional_36_Template, 13, 8, "section", 193);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    let tmp_4_0;
    let tmp_14_0;
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(ctx_r1.transferTarget() ? "New allocation" : "Stage 2 of 3");
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate1("Only active rooms configured for ", ctx_r1.academicSession, " are available.");
    i0.ɵɵadvance();
    i0.ɵɵconditional((tmp_4_0 = !ctx_r1.transferTarget() && ctx_r1.selectedStudent()) ? 8 : -1, tmp_4_0);
    i0.ɵɵadvance(5);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r1.selectedHostelId);
    i0.ɵɵadvance(3);
    i0.ɵɵrepeater(ctx_r1.hostels());
    i0.ɵɵadvance(5);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r1.selectedBlockId);
    i0.ɵɵproperty("disabled", !ctx_r1.selectedHostelId);
    i0.ɵɵadvance(3);
    i0.ɵɵrepeater(ctx_r1.blocks());
    i0.ɵɵadvance(5);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r1.selectedFloorId);
    i0.ɵɵproperty("disabled", !ctx_r1.selectedBlockId);
    i0.ɵɵadvance(3);
    i0.ɵɵrepeater(ctx_r1.floors());
    i0.ɵɵadvance(2);
    i0.ɵɵconditional(ctx_r1.allocationRoomLoading() ? 34 : ctx_r1.allocationLocationReady() ? 35 : -1);
    i0.ɵɵadvance(2);
    i0.ɵɵconditional((tmp_14_0 = ctx_r1.selectedRoom()) ? 36 : -1, tmp_14_0);
} }
function HostelManagementComponent_Conditional_19_Conditional_21_Conditional_21_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div")(1, "span");
    i0.ɵɵtext(2, "From");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "strong");
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const transfer_r75 = ctx;
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate3("", transfer_r75.hostelName, " \u00B7 ", transfer_r75.roomNumber, " \u00B7 Bed ", transfer_r75.bedNumber);
} }
function HostelManagementComponent_Conditional_19_Conditional_21_Conditional_22_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div")(1, "span");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "strong");
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "small");
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const room_r76 = ctx;
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r1.transferTarget() ? "To" : "Allocation");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate3("", room_r76.hostelName, " \u00B7 ", room_r76.roomNumber, " \u00B7 Bed ", ctx_r1.selectedBedNumber);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate4("", room_r76.blockName, " / ", room_r76.floorName, " \u00B7 ", room_r76.capacity, " seater \u00B7 ", room_r76.roomType);
} }
function HostelManagementComponent_Conditional_19_Conditional_21_Conditional_23_Template(rf, ctx) { if (rf & 1) {
    const _r77 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "label", 143)(1, "span");
    i0.ɵɵtext(2, "Transfer reason");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "input", 208);
    i0.ɵɵtwoWayListener("ngModelChange", function HostelManagementComponent_Conditional_19_Conditional_21_Conditional_23_Template_input_ngModelChange_3_listener($event) { i0.ɵɵrestoreView(_r77); const ctx_r1 = i0.ɵɵnextContext(3); i0.ɵɵtwoWayBindingSet(ctx_r1.transferReason, $event) || (ctx_r1.transferReason = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(4, "p", 207);
    i0.ɵɵtext(5, " The current bed will be released only after a successful transfer. ");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(3);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r1.transferReason);
} }
function HostelManagementComponent_Conditional_19_Conditional_21_Conditional_24_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 207);
    i0.ɵɵtext(1, " Confirm the student and bed carefully. This action creates an active hostel allocation. ");
    i0.ɵɵelementEnd();
} }
function HostelManagementComponent_Conditional_19_Conditional_21_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "section", 174)(1, "div", 180)(2, "small");
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "h3", 205);
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "p");
    i0.ɵɵtext(7, "Confirm the exact student, room and bed before saving.");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(8, "div", 206)(9, "div")(10, "span");
    i0.ɵɵtext(11, "Student");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(12, "strong");
    i0.ɵɵtext(13);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(14, "small");
    i0.ɵɵtext(15);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(16, "div")(17, "span");
    i0.ɵɵtext(18, "Academic session");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(19, "strong");
    i0.ɵɵtext(20);
    i0.ɵɵelementEnd()();
    i0.ɵɵconditionalCreate(21, HostelManagementComponent_Conditional_19_Conditional_21_Conditional_21_Template, 5, 3, "div");
    i0.ɵɵconditionalCreate(22, HostelManagementComponent_Conditional_19_Conditional_21_Conditional_22_Template, 7, 8, "div");
    i0.ɵɵelementEnd();
    i0.ɵɵconditionalCreate(23, HostelManagementComponent_Conditional_19_Conditional_21_Conditional_23_Template, 6, 1)(24, HostelManagementComponent_Conditional_19_Conditional_21_Conditional_24_Template, 2, 0, "p", 207);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    let tmp_4_0;
    let tmp_5_0;
    let tmp_7_0;
    let tmp_8_0;
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(ctx_r1.transferTarget() ? "Transfer review" : "Stage 3 of 3");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", ctx_r1.transferTarget() ? "Review transfer" : "Review allocation", " ");
    i0.ɵɵadvance(8);
    i0.ɵɵtextInterpolate(((tmp_4_0 = ctx_r1.transferTarget()) == null ? null : tmp_4_0.studentName) || ((tmp_4_0 = ctx_r1.selectedStudent()) == null ? null : tmp_4_0.name));
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(((tmp_5_0 = ctx_r1.transferTarget()) == null ? null : tmp_5_0.studentApplicationNumber) || ((tmp_5_0 = ctx_r1.selectedStudent()) == null ? null : tmp_5_0.applicationNumber));
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(ctx_r1.academicSession);
    i0.ɵɵadvance();
    i0.ɵɵconditional((tmp_7_0 = ctx_r1.transferTarget()) ? 21 : -1, tmp_7_0);
    i0.ɵɵadvance();
    i0.ɵɵconditional((tmp_8_0 = ctx_r1.selectedRoom()) ? 22 : -1, tmp_8_0);
    i0.ɵɵadvance();
    i0.ɵɵconditional(ctx_r1.transferTarget() ? 23 : 24);
} }
function HostelManagementComponent_Conditional_19_Conditional_22_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 7);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r1.error());
} }
function HostelManagementComponent_Conditional_19_Conditional_24_Template(rf, ctx) { if (rf & 1) {
    const _r78 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 14);
    i0.ɵɵlistener("click", function HostelManagementComponent_Conditional_19_Conditional_24_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r78); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.closeAllocationDrawer()); });
    i0.ɵɵtext(1, " Cancel ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(2, "button", 15);
    i0.ɵɵlistener("click", function HostelManagementComponent_Conditional_19_Conditional_24_Template_button_click_2_listener() { i0.ɵɵrestoreView(_r78); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.continueAllocation()); });
    i0.ɵɵtext(3, " Continue to room selection ");
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(4, "svg", 209);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("disabled", !ctx_r1.academicSession || !ctx_r1.selectedStudentId || !!ctx_r1.activeAllocationForSelectedStudent());
} }
function HostelManagementComponent_Conditional_19_Conditional_25_Template(rf, ctx) { if (rf & 1) {
    const _r79 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 14);
    i0.ɵɵlistener("click", function HostelManagementComponent_Conditional_19_Conditional_25_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r79); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.transferTarget() ? ctx_r1.cancelTransfer() : ctx_r1.previousAllocationStage()); });
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(1, "svg", 210);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(3, "button", 15);
    i0.ɵɵlistener("click", function HostelManagementComponent_Conditional_19_Conditional_25_Template_button_click_3_listener() { i0.ɵɵrestoreView(_r79); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.continueAllocation()); });
    i0.ɵɵtext(4, " Continue to review ");
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(5, "svg", 209);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1("", ctx_r1.transferTarget() ? "Cancel" : "Back", " ");
    i0.ɵɵadvance();
    i0.ɵɵproperty("disabled", !ctx_r1.selectedRoomId || !ctx_r1.selectedBedNumber);
} }
function HostelManagementComponent_Conditional_19_Conditional_26_Template(rf, ctx) { if (rf & 1) {
    const _r80 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 14);
    i0.ɵɵlistener("click", function HostelManagementComponent_Conditional_19_Conditional_26_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r80); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.previousAllocationStage()); });
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(1, "svg", 210);
    i0.ɵɵtext(2, "Back ");
    i0.ɵɵelementEnd();
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(3, "button", 15);
    i0.ɵɵlistener("click", function HostelManagementComponent_Conditional_19_Conditional_26_Template_button_click_3_listener() { i0.ɵɵrestoreView(_r80); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.createOrTransferAllocation()); });
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("disabled", ctx_r1.saving());
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r1.saving() ? ctx_r1.transferTarget() ? "Transferring\u2026" : "Allocating\u2026" : ctx_r1.transferTarget() ? "Confirm transfer" : "Confirm allocation", " ");
} }
function HostelManagementComponent_Conditional_19_Template(rf, ctx) { if (rf & 1) {
    const _r53 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 10)(1, "button", 164);
    i0.ɵɵlistener("click", function HostelManagementComponent_Conditional_19_Template_button_click_1_listener() { i0.ɵɵrestoreView(_r53); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.closeAllocationDrawer()); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(2, "section", 165)(3, "header", 150)(4, "span", 151);
    i0.ɵɵconditionalCreate(5, HostelManagementComponent_Conditional_19_Conditional_5_Template, 1, 0, ":svg:svg", 166)(6, HostelManagementComponent_Conditional_19_Conditional_6_Template, 1, 0, ":svg:svg", 167);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "div")(8, "small");
    i0.ɵɵtext(9);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(10, "h2", 168);
    i0.ɵɵtext(11);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(12, "p");
    i0.ɵɵtext(13);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(14, "button", 169);
    i0.ɵɵlistener("click", function HostelManagementComponent_Conditional_19_Template_button_click_14_listener() { i0.ɵɵrestoreView(_r53); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.closeAllocationDrawer()); });
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(15, "svg", 154);
    i0.ɵɵelementEnd()();
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(16, "div", 170);
    i0.ɵɵconditionalCreate(17, HostelManagementComponent_Conditional_19_Conditional_17_Template, 16, 6)(18, HostelManagementComponent_Conditional_19_Conditional_18_Template, 3, 1, "ol", 171);
    i0.ɵɵconditionalCreate(19, HostelManagementComponent_Conditional_19_Conditional_19_Template, 20, 4, "section", 172);
    i0.ɵɵconditionalCreate(20, HostelManagementComponent_Conditional_19_Conditional_20_Template, 37, 10, "section", 173);
    i0.ɵɵconditionalCreate(21, HostelManagementComponent_Conditional_19_Conditional_21_Template, 25, 8, "section", 174);
    i0.ɵɵconditionalCreate(22, HostelManagementComponent_Conditional_19_Conditional_22_Template, 2, 1, "p", 7);
    i0.ɵɵelementStart(23, "footer", 175);
    i0.ɵɵconditionalCreate(24, HostelManagementComponent_Conditional_19_Conditional_24_Template, 5, 1)(25, HostelManagementComponent_Conditional_19_Conditional_25_Template, 6, 2)(26, HostelManagementComponent_Conditional_19_Conditional_26_Template, 5, 2);
    i0.ɵɵelementEnd()()()();
} if (rf & 2) {
    let tmp_6_0;
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("cdkTrapFocusAutoCapture", true);
    i0.ɵɵadvance(3);
    i0.ɵɵconditional(ctx_r1.transferTarget() ? 5 : 6);
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(ctx_r1.transferTarget() ? "Transfer workflow" : "Guided allocation");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", ctx_r1.transferTarget() ? "Transfer hostel room" : "Allocate hostel room", " ");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", ctx_r1.transferTarget() ? "Select and confirm a new available bed." : "Select a student and assign an available bed.", " ");
    i0.ɵɵadvance(4);
    i0.ɵɵconditional((tmp_6_0 = ctx_r1.transferTarget()) ? 17 : 18, tmp_6_0);
    i0.ɵɵadvance(2);
    i0.ɵɵconditional(ctx_r1.allocationStage() === 1 && !ctx_r1.transferTarget() ? 19 : -1);
    i0.ɵɵadvance();
    i0.ɵɵconditional(ctx_r1.allocationStage() === 2 ? 20 : -1);
    i0.ɵɵadvance();
    i0.ɵɵconditional(ctx_r1.allocationStage() === 3 ? 21 : -1);
    i0.ɵɵadvance();
    i0.ɵɵconditional(ctx_r1.error() ? 22 : -1);
    i0.ɵɵadvance(2);
    i0.ɵɵconditional(ctx_r1.allocationStage() === 1 ? 24 : ctx_r1.allocationStage() === 2 ? 25 : 26);
} }
function HostelManagementComponent_Conditional_20_Conditional_61_Template(rf, ctx) { if (rf & 1) {
    const _r82 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 14);
    i0.ɵɵlistener("click", function HostelManagementComponent_Conditional_20_Conditional_61_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r82); const allocation_r83 = i0.ɵɵnextContext(); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.startTransfer(allocation_r83)); });
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(1, "svg", 217);
    i0.ɵɵtext(2, "Transfer room ");
    i0.ɵɵelementEnd();
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(3, "button", 218);
    i0.ɵɵlistener("click", function HostelManagementComponent_Conditional_20_Conditional_61_Template_button_click_3_listener() { i0.ɵɵrestoreView(_r82); const allocation_r83 = i0.ɵɵnextContext(); const ctx_r1 = i0.ɵɵnextContext(); ctx_r1.closeAllocationDetail(); return i0.ɵɵresetView(ctx_r1.vacateTarget.set(allocation_r83)); });
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(4, "svg", 219);
    i0.ɵɵtext(5, "Vacate room ");
    i0.ɵɵelementEnd();
} }
function HostelManagementComponent_Conditional_20_Template(rf, ctx) { if (rf & 1) {
    const _r81 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 10)(1, "button", 211);
    i0.ɵɵlistener("click", function HostelManagementComponent_Conditional_20_Template_button_click_1_listener() { i0.ɵɵrestoreView(_r81); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.closeAllocationDetail()); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(2, "section", 212)(3, "header", 150)(4, "span", 151);
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(5, "svg", 213);
    i0.ɵɵelementEnd();
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(6, "div")(7, "small");
    i0.ɵɵtext(8, "Allocation record");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(9, "h2", 214);
    i0.ɵɵtext(10);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(11, "p");
    i0.ɵɵtext(12);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(13, "button", 215);
    i0.ɵɵlistener("click", function HostelManagementComponent_Conditional_20_Template_button_click_13_listener() { i0.ɵɵrestoreView(_r81); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.closeAllocationDetail()); });
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(14, "svg", 154);
    i0.ɵɵelementEnd()();
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(15, "div", 216)(16, "dl")(17, "div")(18, "dt");
    i0.ɵɵtext(19, "Academic session");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(20, "dd");
    i0.ɵɵtext(21);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(22, "div")(23, "dt");
    i0.ɵɵtext(24, "Status");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(25, "dd");
    i0.ɵɵtext(26);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(27, "div")(28, "dt");
    i0.ɵɵtext(29, "Hostel");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(30, "dd");
    i0.ɵɵtext(31);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(32, "div")(33, "dt");
    i0.ɵɵtext(34, "Block");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(35, "dd");
    i0.ɵɵtext(36);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(37, "div")(38, "dt");
    i0.ɵɵtext(39, "Floor");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(40, "dd");
    i0.ɵɵtext(41);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(42, "div")(43, "dt");
    i0.ɵɵtext(44, "Room");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(45, "dd");
    i0.ɵɵtext(46);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(47, "div")(48, "dt");
    i0.ɵɵtext(49, "Bed");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(50, "dd");
    i0.ɵɵtext(51);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(52, "div")(53, "dt");
    i0.ɵɵtext(54, "Allocated");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(55, "dd");
    i0.ɵɵtext(56);
    i0.ɵɵpipe(57, "date");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(58, "footer", 161)(59, "button", 14);
    i0.ɵɵlistener("click", function HostelManagementComponent_Conditional_20_Template_button_click_59_listener() { i0.ɵɵrestoreView(_r81); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.closeAllocationDetail()); });
    i0.ɵɵtext(60, " Close ");
    i0.ɵɵelementEnd();
    i0.ɵɵconditionalCreate(61, HostelManagementComponent_Conditional_20_Conditional_61_Template, 6, 0);
    i0.ɵɵelementEnd()()()();
} if (rf & 2) {
    const allocation_r83 = ctx;
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("cdkTrapFocusAutoCapture", true);
    i0.ɵɵadvance(8);
    i0.ɵɵtextInterpolate(allocation_r83.studentName);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(allocation_r83.studentApplicationNumber);
    i0.ɵɵadvance(9);
    i0.ɵɵtextInterpolate(allocation_r83.academicSession);
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(allocation_r83.status === "active" ? "Active" : "Vacated");
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(allocation_r83.hostelName);
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(allocation_r83.blockName);
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(allocation_r83.floorName);
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(allocation_r83.roomNumber);
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate1("Bed ", allocation_r83.bedNumber);
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind2(57, 12, allocation_r83.allocatedAt, "mediumDate"));
    i0.ɵɵadvance(5);
    i0.ɵɵconditional(allocation_r83.status === "active" ? 61 : -1);
} }
function HostelManagementComponent_Conditional_21_Conditional_15_Conditional_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 7);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r1.error());
} }
function HostelManagementComponent_Conditional_21_Conditional_15_Template(rf, ctx) { if (rf & 1) {
    const _r85 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "form", 226);
    i0.ɵɵlistener("ngSubmit", function HostelManagementComponent_Conditional_21_Conditional_15_Template_form_ngSubmit_0_listener() { i0.ɵɵrestoreView(_r85); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.saveRoomNumber()); });
    i0.ɵɵelementStart(1, "label", 143)(2, "span");
    i0.ɵɵtext(3, "Room number *");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "input", 227);
    i0.ɵɵtwoWayListener("ngModelChange", function HostelManagementComponent_Conditional_21_Conditional_15_Template_input_ngModelChange_4_listener($event) { i0.ɵɵrestoreView(_r85); const ctx_r1 = i0.ɵɵnextContext(2); i0.ɵɵtwoWayBindingSet(ctx_r1.editedRoomNumber, $event) || (ctx_r1.editedRoomNumber = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "small");
    i0.ɵɵtext(6, "Use a clear identifier that is unique for this location.");
    i0.ɵɵelementEnd()();
    i0.ɵɵconditionalCreate(7, HostelManagementComponent_Conditional_21_Conditional_15_Conditional_7_Template, 2, 1, "p", 7);
    i0.ɵɵelementStart(8, "footer", 161)(9, "button", 14);
    i0.ɵɵlistener("click", function HostelManagementComponent_Conditional_21_Conditional_15_Template_button_click_9_listener() { i0.ɵɵrestoreView(_r85); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.closeRoomEditor()); });
    i0.ɵɵtext(10, " Cancel ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(11, "button", 162);
    i0.ɵɵtext(12);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(4);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r1.editedRoomNumber);
    i0.ɵɵadvance(3);
    i0.ɵɵconditional(ctx_r1.error() ? 7 : -1);
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("disabled", ctx_r1.saving() || !ctx_r1.editedRoomNumber.trim());
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r1.saving() ? "Saving\u2026" : "Save changes", " ");
} }
function HostelManagementComponent_Conditional_21_Conditional_16_Conditional_6_Template(rf, ctx) { if (rf & 1) {
    const _r87 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "label", 143)(1, "span");
    i0.ɵɵtext(2, "Room number *");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "input", 229);
    i0.ɵɵtwoWayListener("ngModelChange", function HostelManagementComponent_Conditional_21_Conditional_16_Conditional_6_Template_input_ngModelChange_3_listener($event) { i0.ɵɵrestoreView(_r87); const ctx_r1 = i0.ɵɵnextContext(3); i0.ɵɵtwoWayBindingSet(ctx_r1.roomNumber, $event) || (ctx_r1.roomNumber = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "small");
    i0.ɵɵtext(5, "Create a single room in the selected hostel location.");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(3);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r1.roomNumber);
} }
function HostelManagementComponent_Conditional_21_Conditional_16_Conditional_7_For_20_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "small");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const room_r89 = ctx.$implicit;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(room_r89);
} }
function HostelManagementComponent_Conditional_21_Conditional_16_Conditional_7_Template(rf, ctx) { if (rf & 1) {
    const _r88 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 230)(1, "label", 143)(2, "span");
    i0.ɵɵtext(3, "Prefix");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "input", 231);
    i0.ɵɵtwoWayListener("ngModelChange", function HostelManagementComponent_Conditional_21_Conditional_16_Conditional_7_Template_input_ngModelChange_4_listener($event) { i0.ɵɵrestoreView(_r88); const ctx_r1 = i0.ɵɵnextContext(3); i0.ɵɵtwoWayBindingSet(ctx_r1.roomPrefix, $event) || (ctx_r1.roomPrefix = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(5, "label", 143)(6, "span");
    i0.ɵɵtext(7, "Start number *");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "input", 232);
    i0.ɵɵtwoWayListener("ngModelChange", function HostelManagementComponent_Conditional_21_Conditional_16_Conditional_7_Template_input_ngModelChange_8_listener($event) { i0.ɵɵrestoreView(_r88); const ctx_r1 = i0.ɵɵnextContext(3); i0.ɵɵtwoWayBindingSet(ctx_r1.roomStartNumber, $event) || (ctx_r1.roomStartNumber = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(9, "label", 143)(10, "span");
    i0.ɵɵtext(11, "Number of rooms *");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(12, "input", 233);
    i0.ɵɵtwoWayListener("ngModelChange", function HostelManagementComponent_Conditional_21_Conditional_16_Conditional_7_Template_input_ngModelChange_12_listener($event) { i0.ɵɵrestoreView(_r88); const ctx_r1 = i0.ɵɵnextContext(3); i0.ɵɵtwoWayBindingSet(ctx_r1.roomGenerationCount, $event) || (ctx_r1.roomGenerationCount = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(13, "section", 234)(14, "span");
    i0.ɵɵtext(15, "Generation preview");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(16, "strong");
    i0.ɵɵtext(17);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(18, "div");
    i0.ɵɵrepeaterCreate(19, HostelManagementComponent_Conditional_21_Conditional_16_Conditional_7_For_20_Template, 2, 1, "small", null, i0.ɵɵrepeaterTrackByIdentity);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(4);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r1.roomPrefix);
    i0.ɵɵadvance(4);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r1.roomStartNumber);
    i0.ɵɵadvance(4);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r1.roomGenerationCount);
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate2("", ctx_r1.roomGenerationCount || 0, " rooms in ", ctx_r1.locationLabel());
    i0.ɵɵadvance(2);
    i0.ɵɵrepeater(ctx_r1.generationPreview());
} }
function HostelManagementComponent_Conditional_21_Conditional_16_Conditional_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 7);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r1.error());
} }
function HostelManagementComponent_Conditional_21_Conditional_16_Template(rf, ctx) { if (rf & 1) {
    const _r86 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "form", 226);
    i0.ɵɵlistener("ngSubmit", function HostelManagementComponent_Conditional_21_Conditional_16_Template_form_ngSubmit_0_listener() { i0.ɵɵrestoreView(_r86); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.saveRooms()); });
    i0.ɵɵelementStart(1, "div", 228)(2, "button", 76);
    i0.ɵɵlistener("click", function HostelManagementComponent_Conditional_21_Conditional_16_Template_button_click_2_listener() { i0.ɵɵrestoreView(_r86); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.roomMode = "manual"); });
    i0.ɵɵtext(3, " Create one room ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "button", 76);
    i0.ɵɵlistener("click", function HostelManagementComponent_Conditional_21_Conditional_16_Template_button_click_4_listener() { i0.ɵɵrestoreView(_r86); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.roomMode = "automatic"); });
    i0.ɵɵtext(5, " Generate sequence ");
    i0.ɵɵelementEnd()();
    i0.ɵɵconditionalCreate(6, HostelManagementComponent_Conditional_21_Conditional_16_Conditional_6_Template, 6, 1, "label", 143)(7, HostelManagementComponent_Conditional_21_Conditional_16_Conditional_7_Template, 21, 5);
    i0.ɵɵconditionalCreate(8, HostelManagementComponent_Conditional_21_Conditional_16_Conditional_8_Template, 2, 1, "p", 7);
    i0.ɵɵelementStart(9, "footer", 161)(10, "button", 14);
    i0.ɵɵlistener("click", function HostelManagementComponent_Conditional_21_Conditional_16_Template_button_click_10_listener() { i0.ɵɵrestoreView(_r86); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.closeRoomEditor()); });
    i0.ɵɵtext(11, " Cancel ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(12, "button", 162);
    i0.ɵɵtext(13);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(2);
    i0.ɵɵclassProp("hostel-segmented__item--active", ctx_r1.roomMode === "manual");
    i0.ɵɵattribute("aria-pressed", ctx_r1.roomMode === "manual");
    i0.ɵɵadvance(2);
    i0.ɵɵclassProp("hostel-segmented__item--active", ctx_r1.roomMode === "automatic");
    i0.ɵɵattribute("aria-pressed", ctx_r1.roomMode === "automatic");
    i0.ɵɵadvance(2);
    i0.ɵɵconditional(ctx_r1.roomMode === "manual" ? 6 : 7);
    i0.ɵɵadvance(2);
    i0.ɵɵconditional(ctx_r1.error() ? 8 : -1);
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("disabled", ctx_r1.saving() || (ctx_r1.roomMode === "manual" ? !ctx_r1.roomNumber.trim() : ctx_r1.roomStartNumber < 1 || ctx_r1.roomGenerationCount < 1 || ctx_r1.roomGenerationCount > 500));
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r1.saving() ? "Saving\u2026" : ctx_r1.roomMode === "manual" ? "Create room" : "Generate rooms", " ");
} }
function HostelManagementComponent_Conditional_21_Template(rf, ctx) { if (rf & 1) {
    const _r84 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 10)(1, "button", 220);
    i0.ɵɵlistener("click", function HostelManagementComponent_Conditional_21_Template_button_click_1_listener() { i0.ɵɵrestoreView(_r84); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.closeRoomEditor()); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(2, "section", 221)(3, "header", 150)(4, "span", 151);
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(5, "svg", 222);
    i0.ɵɵelementEnd();
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(6, "div")(7, "small");
    i0.ɵɵtext(8);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(9, "h2", 223);
    i0.ɵɵtext(10);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(11, "p");
    i0.ɵɵtext(12);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(13, "button", 224);
    i0.ɵɵlistener("click", function HostelManagementComponent_Conditional_21_Template_button_click_13_listener() { i0.ɵɵrestoreView(_r84); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.closeRoomEditor()); });
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(14, "svg", 154);
    i0.ɵɵelementEnd()();
    i0.ɵɵconditionalCreate(15, HostelManagementComponent_Conditional_21_Conditional_15_Template, 13, 4, "form", 225)(16, HostelManagementComponent_Conditional_21_Conditional_16_Template, 14, 10, "form", 225);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("cdkTrapFocusAutoCapture", true);
    i0.ɵɵadvance(6);
    i0.ɵɵtextInterpolate(ctx_r1.editingRoom() ? "Room settings" : "Room creation");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", ctx_r1.editingRoom() ? "Edit room number" : "Add rooms", " ");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r1.locationLabel());
    i0.ɵɵadvance(3);
    i0.ɵɵconditional(ctx_r1.editingRoom() ? 15 : 16);
} }
function HostelManagementComponent_Conditional_22_Template(rf, ctx) { if (rf & 1) {
    const _r90 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 10)(1, "button", 235);
    i0.ɵɵlistener("click", function HostelManagementComponent_Conditional_22_Template_button_click_1_listener() { i0.ɵɵrestoreView(_r90); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.viewingRoom.set(null)); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(2, "section", 236)(3, "header", 150)(4, "span", 151);
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(5, "svg", 222);
    i0.ɵɵelementEnd();
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(6, "div")(7, "small");
    i0.ɵɵtext(8, "Room details");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(9, "h2", 237);
    i0.ɵɵtext(10);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(11, "p");
    i0.ɵɵtext(12);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(13, "button", 238);
    i0.ɵɵlistener("click", function HostelManagementComponent_Conditional_22_Template_button_click_13_listener() { i0.ɵɵrestoreView(_r90); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.viewingRoom.set(null)); });
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(14, "svg", 154);
    i0.ɵɵelementEnd()();
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(15, "div", 216)(16, "dl")(17, "div")(18, "dt");
    i0.ɵɵtext(19, "Hostel");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(20, "dd");
    i0.ɵɵtext(21);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(22, "div")(23, "dt");
    i0.ɵɵtext(24, "Block");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(25, "dd");
    i0.ɵɵtext(26);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(27, "div")(28, "dt");
    i0.ɵɵtext(29, "Floor");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(30, "dd");
    i0.ɵɵtext(31);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(32, "div")(33, "dt");
    i0.ɵɵtext(34, "Room type");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(35, "dd");
    i0.ɵɵtext(36);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(37, "div")(38, "dt");
    i0.ɵɵtext(39, "Capacity");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(40, "dd");
    i0.ɵɵtext(41);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(42, "div")(43, "dt");
    i0.ɵɵtext(44, "Occupancy");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(45, "dd");
    i0.ɵɵtext(46);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(47, "div")(48, "dt");
    i0.ɵɵtext(49, "Status");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(50, "dd");
    i0.ɵɵtext(51);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(52, "div")(53, "dt");
    i0.ɵɵtext(54, "Session");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(55, "dd");
    i0.ɵɵtext(56);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(57, "footer", 161)(58, "button", 14);
    i0.ɵɵlistener("click", function HostelManagementComponent_Conditional_22_Template_button_click_58_listener() { i0.ɵɵrestoreView(_r90); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.viewingRoom.set(null)); });
    i0.ɵɵtext(59, " Close ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(60, "button", 12);
    i0.ɵɵlistener("click", function HostelManagementComponent_Conditional_22_Template_button_click_60_listener() { const room_r91 = i0.ɵɵrestoreView(_r90); const ctx_r1 = i0.ɵɵnextContext(); ctx_r1.viewingRoom.set(null); return i0.ɵɵresetView(ctx_r1.openCapacity(room_r91)); });
    i0.ɵɵtext(61);
    i0.ɵɵelementEnd()()()()();
} if (rf & 2) {
    let tmp_5_0;
    const room_r91 = ctx;
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("cdkTrapFocusAutoCapture", true);
    i0.ɵɵadvance(8);
    i0.ɵɵtextInterpolate1("Room ", room_r91.roomNumber);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate2("", room_r91.blockName, " / ", room_r91.floorName);
    i0.ɵɵadvance(9);
    i0.ɵɵtextInterpolate((tmp_5_0 = ctx_r1.selectedHostel()) == null ? null : tmp_5_0.name);
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(room_r91.blockName);
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(room_r91.floorName);
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(room_r91.configuredForSession ? room_r91.roomType : "Not configured");
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(room_r91.configuredForSession ? room_r91.capacity + " beds" : "Not configured");
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate1("", room_r91.occupiedBeds.length, " occupied");
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(room_r91.isActive ? "Active" : "Disabled");
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(ctx_r1.academicSession);
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate1(" ", room_r91.configuredForSession ? "Edit capacity" : "Configure capacity", " ");
} }
function HostelManagementComponent_Conditional_23_For_25_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 9);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const type_r93 = ctx.$implicit;
    i0.ɵɵproperty("value", type_r93);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(type_r93);
} }
function HostelManagementComponent_Conditional_23_Conditional_28_Template(rf, ctx) { if (rf & 1) {
    const _r94 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "label", 143)(1, "span");
    i0.ɵɵtext(2, "Custom room type *");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "input", 250);
    i0.ɵɵtwoWayListener("ngModelChange", function HostelManagementComponent_Conditional_23_Conditional_28_Template_input_ngModelChange_3_listener($event) { i0.ɵɵrestoreView(_r94); const ctx_r1 = i0.ɵɵnextContext(2); i0.ɵɵtwoWayBindingSet(ctx_r1.customRoomType, $event) || (ctx_r1.customRoomType = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(3);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r1.customRoomType);
} }
function HostelManagementComponent_Conditional_23_For_34_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 9);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const seater_r95 = ctx.$implicit;
    i0.ɵɵproperty("value", seater_r95);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1("", seater_r95, " seater");
} }
function HostelManagementComponent_Conditional_23_Conditional_37_Template(rf, ctx) { if (rf & 1) {
    const _r96 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "label", 143)(1, "span");
    i0.ɵɵtext(2, "Custom capacity *");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "input", 251);
    i0.ɵɵtwoWayListener("ngModelChange", function HostelManagementComponent_Conditional_23_Conditional_37_Template_input_ngModelChange_3_listener($event) { i0.ɵɵrestoreView(_r96); const ctx_r1 = i0.ɵɵnextContext(2); i0.ɵɵtwoWayBindingSet(ctx_r1.customCapacity, $event) || (ctx_r1.customCapacity = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(3);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r1.customCapacity);
} }
function HostelManagementComponent_Conditional_23_Conditional_45_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 7);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r1.error());
} }
function HostelManagementComponent_Conditional_23_Template(rf, ctx) { if (rf & 1) {
    const _r92 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 10)(1, "button", 239);
    i0.ɵɵlistener("click", function HostelManagementComponent_Conditional_23_Template_button_click_1_listener() { i0.ɵɵrestoreView(_r92); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.closeCapacityEditor()); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(2, "section", 240)(3, "header", 150)(4, "span", 151);
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(5, "svg", 241);
    i0.ɵɵelementEnd();
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(6, "div")(7, "small");
    i0.ɵɵtext(8);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(9, "h2", 242);
    i0.ɵɵtext(10);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(11, "p");
    i0.ɵɵtext(12);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(13, "button", 243);
    i0.ɵɵlistener("click", function HostelManagementComponent_Conditional_23_Template_button_click_13_listener() { i0.ɵɵrestoreView(_r92); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.closeCapacityEditor()); });
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(14, "svg", 154);
    i0.ɵɵelementEnd()();
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(15, "form", 244);
    i0.ɵɵlistener("ngSubmit", function HostelManagementComponent_Conditional_23_Template_form_ngSubmit_15_listener() { i0.ɵɵrestoreView(_r92); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.saveCapacity()); });
    i0.ɵɵelementStart(16, "label", 143)(17, "span");
    i0.ɵɵtext(18, "Academic session *");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(19, "input", 245);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(20, "label", 143)(21, "span");
    i0.ɵɵtext(22, "Room type *");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(23, "select", 246);
    i0.ɵɵtwoWayListener("ngModelChange", function HostelManagementComponent_Conditional_23_Template_select_ngModelChange_23_listener($event) { i0.ɵɵrestoreView(_r92); const ctx_r1 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r1.roomTypeChoice, $event) || (ctx_r1.roomTypeChoice = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵrepeaterCreate(24, HostelManagementComponent_Conditional_23_For_25_Template, 2, 2, "option", 9, i0.ɵɵrepeaterTrackByIdentity);
    i0.ɵɵelementStart(26, "option", 247);
    i0.ɵɵtext(27, "Custom room type");
    i0.ɵɵelementEnd()()();
    i0.ɵɵconditionalCreate(28, HostelManagementComponent_Conditional_23_Conditional_28_Template, 4, 1, "label", 143);
    i0.ɵɵelementStart(29, "label", 143)(30, "span");
    i0.ɵɵtext(31, "Seater / bed capacity *");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(32, "select", 248);
    i0.ɵɵtwoWayListener("ngModelChange", function HostelManagementComponent_Conditional_23_Template_select_ngModelChange_32_listener($event) { i0.ɵɵrestoreView(_r92); const ctx_r1 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r1.capacityChoice, $event) || (ctx_r1.capacityChoice = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵrepeaterCreate(33, HostelManagementComponent_Conditional_23_For_34_Template, 2, 2, "option", 9, i0.ɵɵrepeaterTrackByIdentity);
    i0.ɵɵelementStart(35, "option", 247);
    i0.ɵɵtext(36, "Custom capacity");
    i0.ɵɵelementEnd()()();
    i0.ɵɵconditionalCreate(37, HostelManagementComponent_Conditional_23_Conditional_37_Template, 4, 1, "label", 143);
    i0.ɵɵelementStart(38, "section", 249)(39, "span");
    i0.ɵɵtext(40, "Configuration summary");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(41, "strong");
    i0.ɵɵtext(42);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(43, "small");
    i0.ɵɵtext(44);
    i0.ɵɵelementEnd()();
    i0.ɵɵconditionalCreate(45, HostelManagementComponent_Conditional_23_Conditional_45_Template, 2, 1, "p", 7);
    i0.ɵɵelementStart(46, "footer", 161)(47, "button", 14);
    i0.ɵɵlistener("click", function HostelManagementComponent_Conditional_23_Template_button_click_47_listener() { i0.ɵɵrestoreView(_r92); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.closeCapacityEditor()); });
    i0.ɵɵtext(48, " Cancel ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(49, "button", 162);
    i0.ɵɵtext(50);
    i0.ɵɵelementEnd()()()()();
} if (rf & 2) {
    const room_r97 = ctx;
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("cdkTrapFocusAutoCapture", true);
    i0.ɵɵadvance(6);
    i0.ɵɵtextInterpolate(room_r97.configuredForSession ? "Update configuration" : "New configuration");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1("Room ", room_r97.roomNumber, " capacity");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate3("", room_r97.blockName, " / ", room_r97.floorName, " \u00B7 ", ctx_r1.academicSession);
    i0.ɵɵadvance(7);
    i0.ɵɵproperty("value", ctx_r1.academicSession);
    i0.ɵɵadvance(4);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r1.roomTypeChoice);
    i0.ɵɵadvance();
    i0.ɵɵrepeater(ctx_r1.savedRoomTypes());
    i0.ɵɵadvance(4);
    i0.ɵɵconditional(ctx_r1.roomTypeChoice === "custom" ? 28 : -1);
    i0.ɵɵadvance(4);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r1.capacityChoice);
    i0.ɵɵadvance();
    i0.ɵɵrepeater(ctx_r1.savedSeaters());
    i0.ɵɵadvance(4);
    i0.ɵɵconditional(ctx_r1.capacityChoice === "custom" ? 37 : -1);
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate2(" ", ctx_r1.roomTypeChoice === "custom" ? ctx_r1.customRoomType || "Custom type" : ctx_r1.roomTypeChoice, " \u00B7 ", ctx_r1.capacityChoice === "custom" ? ctx_r1.customCapacity || 0 : ctx_r1.capacityChoice, " beds ");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1("Bed slots are applied only to ", ctx_r1.academicSession, ".");
    i0.ɵɵadvance();
    i0.ɵɵconditional(ctx_r1.error() ? 45 : -1);
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("disabled", ctx_r1.saving());
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r1.saving() ? "Saving\u2026" : room_r97.configuredForSession ? "Save changes" : "Configure room", " ");
} }
function HostelManagementComponent_Conditional_24_Template(rf, ctx) { if (rf & 1) {
    const _r98 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 11)(1, "button", 252);
    i0.ɵɵlistener("click", function HostelManagementComponent_Conditional_24_Template_button_click_1_listener() { i0.ɵɵrestoreView(_r98); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.generationConfirmOpen.set(false)); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(2, "section", 253)(3, "div", 254)(4, "span", 255);
    i0.ɵɵtext(5, "!");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "h2", 256);
    i0.ɵɵtext(7);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "p");
    i0.ɵɵtext(9);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(10, "footer", 257)(11, "button", 14);
    i0.ɵɵlistener("click", function HostelManagementComponent_Conditional_24_Template_button_click_11_listener() { i0.ɵɵrestoreView(_r98); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.generationConfirmOpen.set(false)); });
    i0.ɵɵtext(12, " Review settings ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(13, "button", 15);
    i0.ɵɵlistener("click", function HostelManagementComponent_Conditional_24_Template_button_click_13_listener() { i0.ɵɵrestoreView(_r98); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.confirmRoomGeneration()); });
    i0.ɵɵtext(14, " Confirm generation ");
    i0.ɵɵelementEnd()()()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("cdkTrapFocusAutoCapture", true);
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate1("Generate ", ctx_r1.roomGenerationCount, " rooms?");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" This creates a large room sequence in ", ctx_r1.locationLabel(), ". Review the prefix and numbering before continuing. ");
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("disabled", ctx_r1.saving());
} }
function HostelManagementComponent_Conditional_25_Conditional_17_Template(rf, ctx) { if (rf & 1) {
    const _r100 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "label", 143)(1, "span");
    i0.ɵɵtext(2, "Block name *");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "input", 265);
    i0.ɵɵtwoWayListener("ngModelChange", function HostelManagementComponent_Conditional_25_Conditional_17_Template_input_ngModelChange_3_listener($event) { i0.ɵɵrestoreView(_r100); const ctx_r1 = i0.ɵɵnextContext(2); i0.ɵɵtwoWayBindingSet(ctx_r1.blockName, $event) || (ctx_r1.blockName = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(3);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r1.blockName);
} }
function HostelManagementComponent_Conditional_25_Conditional_18_Template(rf, ctx) { if (rf & 1) {
    const _r101 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "label", 143)(1, "span");
    i0.ɵɵtext(2, "Floor name *");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "input", 266);
    i0.ɵɵtwoWayListener("ngModelChange", function HostelManagementComponent_Conditional_25_Conditional_18_Template_input_ngModelChange_3_listener($event) { i0.ɵɵrestoreView(_r101); const ctx_r1 = i0.ɵɵnextContext(2); i0.ɵɵtwoWayBindingSet(ctx_r1.floorName, $event) || (ctx_r1.floorName = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(4, "small");
    i0.ɵɵtext(5, "Floors are currently stored at hostel level and are available to every block.");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(3);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r1.floorName);
} }
function HostelManagementComponent_Conditional_25_Conditional_19_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 7);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r1.error());
} }
function HostelManagementComponent_Conditional_25_Template(rf, ctx) { if (rf & 1) {
    const _r99 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 11)(1, "button", 258);
    i0.ɵɵlistener("click", function HostelManagementComponent_Conditional_25_Template_button_click_1_listener() { i0.ɵɵrestoreView(_r99); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.closeStructureDialog()); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(2, "section", 259)(3, "header", 260)(4, "div")(5, "small");
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "h2", 261);
    i0.ɵɵtext(8);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(9, "button", 262);
    i0.ɵɵlistener("click", function HostelManagementComponent_Conditional_25_Template_button_click_9_listener() { i0.ɵɵrestoreView(_r99); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.closeStructureDialog()); });
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(10, "svg", 154);
    i0.ɵɵelementEnd()();
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(11, "form", 263);
    i0.ɵɵlistener("ngSubmit", function HostelManagementComponent_Conditional_25_Template_form_ngSubmit_11_listener() { i0.ɵɵrestoreView(_r99); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.submitStructureDialog()); });
    i0.ɵɵelementStart(12, "div", 264)(13, "label", 143)(14, "span");
    i0.ɵɵtext(15, "Hostel");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(16, "input", 245);
    i0.ɵɵelementEnd();
    i0.ɵɵconditionalCreate(17, HostelManagementComponent_Conditional_25_Conditional_17_Template, 4, 1, "label", 143)(18, HostelManagementComponent_Conditional_25_Conditional_18_Template, 6, 1);
    i0.ɵɵconditionalCreate(19, HostelManagementComponent_Conditional_25_Conditional_19_Template, 2, 1, "p", 7);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(20, "footer", 257)(21, "button", 14);
    i0.ɵɵlistener("click", function HostelManagementComponent_Conditional_25_Template_button_click_21_listener() { i0.ɵɵrestoreView(_r99); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.closeStructureDialog()); });
    i0.ɵɵtext(22, " Cancel ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(23, "button", 162);
    i0.ɵɵtext(24);
    i0.ɵɵelementEnd()()()()();
} if (rf & 2) {
    let tmp_4_0;
    const dialog_r102 = ctx;
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(6);
    i0.ɵɵtextInterpolate(dialog_r102.mode === "edit" ? "Rename" : "Add structure");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate2(" ", dialog_r102.mode === "edit" ? "Edit" : "Add", " ", dialog_r102.kind, " ");
    i0.ɵɵadvance(8);
    i0.ɵɵproperty("value", ((tmp_4_0 = ctx_r1.selectedHostel()) == null ? null : tmp_4_0.name) || "");
    i0.ɵɵadvance();
    i0.ɵɵconditional(dialog_r102.kind === "block" ? 17 : 18);
    i0.ɵɵadvance(2);
    i0.ɵɵconditional(ctx_r1.error() ? 19 : -1);
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("disabled", ctx_r1.saving() || (dialog_r102.kind === "block" ? !ctx_r1.blockName.trim() : !ctx_r1.floorName.trim()));
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r1.saving() ? "Saving\u2026" : dialog_r102.mode === "edit" ? "Save changes" : dialog_r102.kind === "block" ? "Add block" : "Add floor", " ");
} }
function HostelManagementComponent_Conditional_26_Conditional_10_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 7);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r1.error());
} }
function HostelManagementComponent_Conditional_26_Template(rf, ctx) { if (rf & 1) {
    const _r103 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 11)(1, "button", 267);
    i0.ɵɵlistener("click", function HostelManagementComponent_Conditional_26_Template_button_click_1_listener() { i0.ɵɵrestoreView(_r103); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.closeDeleteDialog()); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(2, "section", 268)(3, "div", 254)(4, "span", 255);
    i0.ɵɵtext(5, "!");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "h2", 269);
    i0.ɵɵtext(7);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "p");
    i0.ɵɵtext(9);
    i0.ɵɵelementEnd();
    i0.ɵɵconditionalCreate(10, HostelManagementComponent_Conditional_26_Conditional_10_Template, 2, 1, "p", 7);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(11, "footer", 257)(12, "button", 14);
    i0.ɵɵlistener("click", function HostelManagementComponent_Conditional_26_Template_button_click_12_listener() { i0.ɵɵrestoreView(_r103); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.closeDeleteDialog()); });
    i0.ɵɵtext(13, " Cancel ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(14, "button", 270);
    i0.ɵɵlistener("click", function HostelManagementComponent_Conditional_26_Template_button_click_14_listener() { i0.ɵɵrestoreView(_r103); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.confirmDelete()); });
    i0.ɵɵtext(15);
    i0.ɵɵelementEnd()()()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(7);
    i0.ɵɵtextInterpolate(ctx_r1.deleteTitle());
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r1.deleteDescription());
    i0.ɵɵadvance();
    i0.ɵɵconditional(ctx_r1.error() ? 10 : -1);
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("disabled", ctx_r1.saving());
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r1.saving() ? "Deleting\u2026" : "Delete", " ");
} }
function HostelManagementComponent_Conditional_27_Conditional_40_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 7);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r1.error());
} }
function HostelManagementComponent_Conditional_27_Template(rf, ctx) { if (rf & 1) {
    const _r104 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 11)(1, "button", 271);
    i0.ɵɵlistener("click", function HostelManagementComponent_Conditional_27_Template_button_click_1_listener() { i0.ɵɵrestoreView(_r104); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.vacateTarget.set(null)); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(2, "section", 272)(3, "header", 260)(4, "div")(5, "small");
    i0.ɵɵtext(6, "Destructive action");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "h2", 273);
    i0.ɵɵtext(8, "Vacate hostel bed?");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(9, "button", 274);
    i0.ɵɵlistener("click", function HostelManagementComponent_Conditional_27_Template_button_click_9_listener() { i0.ɵɵrestoreView(_r104); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.vacateTarget.set(null)); });
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(10, "svg", 154);
    i0.ɵɵelementEnd()();
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(11, "div", 275)(12, "span", 276);
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(13, "svg", 277);
    i0.ɵɵelementEnd();
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(14, "dl")(15, "div")(16, "dt");
    i0.ɵɵtext(17, "Student");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(18, "dd");
    i0.ɵɵtext(19);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(20, "div")(21, "dt");
    i0.ɵɵtext(22, "Current allocation");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(23, "dd");
    i0.ɵɵtext(24);
    i0.ɵɵelementStart(25, "small");
    i0.ɵɵtext(26);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(27, "div")(28, "dt");
    i0.ɵɵtext(29, "Academic session");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(30, "dd");
    i0.ɵɵtext(31);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(32, "p");
    i0.ɵɵtext(33, "Vacating will end the student\u2019s active hostel allocation and release the bed.");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(34, "label", 143)(35, "span");
    i0.ɵɵtext(36, "Reason ");
    i0.ɵɵelementStart(37, "small");
    i0.ɵɵtext(38, "(optional)");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(39, "textarea", 278);
    i0.ɵɵtwoWayListener("ngModelChange", function HostelManagementComponent_Conditional_27_Template_textarea_ngModelChange_39_listener($event) { i0.ɵɵrestoreView(_r104); const ctx_r1 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r1.vacateReason, $event) || (ctx_r1.vacateReason = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd()();
    i0.ɵɵconditionalCreate(40, HostelManagementComponent_Conditional_27_Conditional_40_Template, 2, 1, "p", 7);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(41, "footer", 257)(42, "button", 279);
    i0.ɵɵlistener("click", function HostelManagementComponent_Conditional_27_Template_button_click_42_listener() { i0.ɵɵrestoreView(_r104); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.vacateTarget.set(null)); });
    i0.ɵɵtext(43, " Cancel ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(44, "button", 270);
    i0.ɵɵlistener("click", function HostelManagementComponent_Conditional_27_Template_button_click_44_listener() { i0.ɵɵrestoreView(_r104); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.confirmVacate()); });
    i0.ɵɵtext(45);
    i0.ɵɵelementEnd()()()();
} if (rf & 2) {
    const allocation_r105 = ctx;
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("cdkTrapFocusAutoCapture", true);
    i0.ɵɵadvance(17);
    i0.ɵɵtextInterpolate2("", allocation_r105.studentName, " \u00B7 ", allocation_r105.studentApplicationNumber);
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate3(" ", allocation_r105.hostelName, " / ", allocation_r105.blockName, " / ", allocation_r105.floorName);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate2("Room ", allocation_r105.roomNumber, " \u00B7 Bed ", allocation_r105.bedNumber);
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(allocation_r105.academicSession);
    i0.ɵɵadvance(8);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r1.vacateReason);
    i0.ɵɵadvance();
    i0.ɵɵconditional(ctx_r1.error() ? 40 : -1);
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("disabled", ctx_r1.saving());
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r1.saving() ? "Vacating\u2026" : "Vacate room", " ");
} }
export class HostelManagementComponent {
    api = inject(ApiService);
    route = inject(ActivatedRoute);
    router = inject(Router);
    pendingCapacityRoomId = '';
    bypassGenerationConfirm = false;
    section = signal('details', ...(ngDevMode ? [{ debugName: "section" }] : /* istanbul ignore next */ []));
    hostels = signal([], ...(ngDevMode ? [{ debugName: "hostels" }] : /* istanbul ignore next */ []));
    blocks = signal([], ...(ngDevMode ? [{ debugName: "blocks" }] : /* istanbul ignore next */ []));
    floors = signal([], ...(ngDevMode ? [{ debugName: "floors" }] : /* istanbul ignore next */ []));
    rooms = signal([], ...(ngDevMode ? [{ debugName: "rooms" }] : /* istanbul ignore next */ []));
    students = signal([], ...(ngDevMode ? [{ debugName: "students" }] : /* istanbul ignore next */ []));
    allocations = signal([], ...(ngDevMode ? [{ debugName: "allocations" }] : /* istanbul ignore next */ []));
    sessions = signal([], ...(ngDevMode ? [{ debugName: "sessions" }] : /* istanbul ignore next */ []));
    overview = signal(null, ...(ngDevMode ? [{ debugName: "overview" }] : /* istanbul ignore next */ []));
    savedSeaters = signal([1, 2, 3, 4, 5], ...(ngDevMode ? [{ debugName: "savedSeaters" }] : /* istanbul ignore next */ []));
    savedRoomTypes = signal(['AC', 'Non-AC'], ...(ngDevMode ? [{ debugName: "savedRoomTypes" }] : /* istanbul ignore next */ []));
    loading = signal(false, ...(ngDevMode ? [{ debugName: "loading" }] : /* istanbul ignore next */ []));
    saving = signal(false, ...(ngDevMode ? [{ debugName: "saving" }] : /* istanbul ignore next */ []));
    message = signal('', ...(ngDevMode ? [{ debugName: "message" }] : /* istanbul ignore next */ []));
    error = signal('', ...(ngDevMode ? [{ debugName: "error" }] : /* istanbul ignore next */ []));
    editingHostel = signal(null, ...(ngDevMode ? [{ debugName: "editingHostel" }] : /* istanbul ignore next */ []));
    editingBlock = signal(null, ...(ngDevMode ? [{ debugName: "editingBlock" }] : /* istanbul ignore next */ []));
    editingFloor = signal(null, ...(ngDevMode ? [{ debugName: "editingFloor" }] : /* istanbul ignore next */ []));
    hostelEditorOpen = signal(false, ...(ngDevMode ? [{ debugName: "hostelEditorOpen" }] : /* istanbul ignore next */ []));
    structureDialog = signal(null, ...(ngDevMode ? [{ debugName: "structureDialog" }] : /* istanbul ignore next */ []));
    deleteTarget = signal(null, ...(ngDevMode ? [{ debugName: "deleteTarget" }] : /* istanbul ignore next */ []));
    selectedStructureKind = signal(null, ...(ngDevMode ? [{ debugName: "selectedStructureKind" }] : /* istanbul ignore next */ []));
    selectedStructureId = signal('', ...(ngDevMode ? [{ debugName: "selectedStructureId" }] : /* istanbul ignore next */ []));
    blocksExpanded = signal(true, ...(ngDevMode ? [{ debugName: "blocksExpanded" }] : /* istanbul ignore next */ []));
    floorsExpanded = signal(true, ...(ngDevMode ? [{ debugName: "floorsExpanded" }] : /* istanbul ignore next */ []));
    mobileFiltersOpen = signal(false, ...(ngDevMode ? [{ debugName: "mobileFiltersOpen" }] : /* istanbul ignore next */ []));
    editingRoom = signal(null, ...(ngDevMode ? [{ debugName: "editingRoom" }] : /* istanbul ignore next */ []));
    viewingRoom = signal(null, ...(ngDevMode ? [{ debugName: "viewingRoom" }] : /* istanbul ignore next */ []));
    roomEditorOpen = signal(false, ...(ngDevMode ? [{ debugName: "roomEditorOpen" }] : /* istanbul ignore next */ []));
    generationConfirmOpen = signal(false, ...(ngDevMode ? [{ debugName: "generationConfirmOpen" }] : /* istanbul ignore next */ []));
    roomFiltersOpen = signal(false, ...(ngDevMode ? [{ debugName: "roomFiltersOpen" }] : /* istanbul ignore next */ []));
    roomsLoadFailed = signal(false, ...(ngDevMode ? [{ debugName: "roomsLoadFailed" }] : /* istanbul ignore next */ []));
    capacityRoom = signal(null, ...(ngDevMode ? [{ debugName: "capacityRoom" }] : /* istanbul ignore next */ []));
    allocationDrawerOpen = signal(false, ...(ngDevMode ? [{ debugName: "allocationDrawerOpen" }] : /* istanbul ignore next */ []));
    allocationStage = signal(1, ...(ngDevMode ? [{ debugName: "allocationStage" }] : /* istanbul ignore next */ []));
    allocationDetail = signal(null, ...(ngDevMode ? [{ debugName: "allocationDetail" }] : /* istanbul ignore next */ []));
    allocationFiltersOpen = signal(false, ...(ngDevMode ? [{ debugName: "allocationFiltersOpen" }] : /* istanbul ignore next */ []));
    allocationLoading = signal(false, ...(ngDevMode ? [{ debugName: "allocationLoading" }] : /* istanbul ignore next */ []));
    allocationLoadFailed = signal(false, ...(ngDevMode ? [{ debugName: "allocationLoadFailed" }] : /* istanbul ignore next */ []));
    allocationRoomLoading = signal(false, ...(ngDevMode ? [{ debugName: "allocationRoomLoading" }] : /* istanbul ignore next */ []));
    eligibilityAllocations = signal([], ...(ngDevMode ? [{ debugName: "eligibilityAllocations" }] : /* istanbul ignore next */ []));
    transferTarget = signal(null, ...(ngDevMode ? [{ debugName: "transferTarget" }] : /* istanbul ignore next */ []));
    vacateTarget = signal(null, ...(ngDevMode ? [{ debugName: "vacateTarget" }] : /* istanbul ignore next */ []));
    pageTitle = computed(() => SECTION_CONTENT[this.section()].title, ...(ngDevMode ? [{ debugName: "pageTitle" }] : /* istanbul ignore next */ []));
    pageDescription = computed(() => SECTION_CONTENT[this.section()].description, ...(ngDevMode ? [{ debugName: "pageDescription" }] : /* istanbul ignore next */ []));
    totalHostels = computed(() => this.hostels().length, ...(ngDevMode ? [{ debugName: "totalHostels" }] : /* istanbul ignore next */ []));
    activeHostels = computed(() => this.hostels().filter((item) => item.isActive).length, ...(ngDevMode ? [{ debugName: "activeHostels" }] : /* istanbul ignore next */ []));
    plannedRooms = computed(() => this.hostels().reduce((total, item) => total + (item.plannedRoomCount || 0), 0), ...(ngDevMode ? [{ debugName: "plannedRooms" }] : /* istanbul ignore next */ []));
    createdRooms = computed(() => this.hostels().reduce((total, item) => total + (item.roomCount || 0), 0), ...(ngDevMode ? [{ debugName: "createdRooms" }] : /* istanbul ignore next */ []));
    hostelActions = (hostel) => [
        { id: 'structure', label: 'View structure', icon: 'view' },
        { id: 'edit', label: 'Edit hostel', icon: 'edit' },
        { id: 'toggle', label: hostel.isActive ? 'Disable hostel' : 'Enable hostel', icon: 'edit' },
        { id: 'delete', label: 'Delete hostel', icon: 'delete', destructive: true, separator: true },
    ];
    blockActions = [
        { id: 'edit', label: 'Rename block', icon: 'edit' },
        { id: 'delete', label: 'Delete block', icon: 'delete', destructive: true, separator: true },
    ];
    floorActions = [
        { id: 'edit', label: 'Rename floor', icon: 'edit' },
        { id: 'delete', label: 'Delete floor', icon: 'delete', destructive: true, separator: true },
    ];
    roomActions = (room) => [
        { id: 'view', label: 'View details', icon: 'view' },
        { id: 'edit', label: 'Edit room number', icon: 'edit' },
        { id: 'capacity', label: 'Set capacity', icon: 'edit' },
        { id: 'toggle', label: room.isActive ? 'Disable room' : 'Enable room', icon: 'edit' },
        { id: 'delete', label: 'Delete room', icon: 'delete', destructive: true, separator: true },
    ];
    capacityActions = (room) => [
        {
            id: 'capacity',
            label: room.configuredForSession ? 'Edit configuration' : 'Configure capacity',
            icon: 'edit',
        },
        { id: 'toggle', label: room.isActive ? 'Disable room' : 'Enable room', icon: 'edit' },
    ];
    allocationActions = (allocation) => [
        { id: 'view', label: 'View allocation details', icon: 'view' },
        {
            id: 'transfer',
            label: 'Transfer room',
            icon: 'transfer',
            disabled: allocation.status !== 'active',
        },
        {
            id: 'vacate',
            label: 'Vacate room',
            icon: 'vacate',
            destructive: true,
            separator: true,
            disabled: allocation.status !== 'active',
        },
    ];
    hostelName = '';
    hostelType = 'boys';
    blockCount = 1;
    floorCount = 1;
    plannedRoomCount = 0;
    hostelSearch = '';
    hostelTypeFilter = 'all';
    hostelStatusFilter = 'all';
    academicSession = currentAcademicSession();
    selectedHostelId = '';
    selectedBlockId = '';
    selectedFloorId = '';
    blockName = '';
    floorName = '';
    roomMode = 'manual';
    roomNumber = '';
    editedRoomNumber = '';
    roomPrefix = '';
    roomStartNumber = 101;
    roomGenerationCount = 10;
    roomSearch = '';
    roomConfigurationFilter = 'all';
    roomStatusFilter = 'all';
    capacityChoice = '2';
    customCapacity = null;
    roomTypeChoice = 'Non-AC';
    customRoomType = '';
    selectedStudentId = '';
    selectedRoomId = '';
    selectedBedNumber = null;
    transferReason = '';
    vacateReason = '';
    allocationBrowseSession = currentAcademicSession();
    allocationBrowseHostelId = '';
    allocationStatusFilter = 'active';
    allocationSearch = '';
    studentSearch = '';
    allocationRoomSearch = '';
    sessionOptions = () => [
        ...new Set([this.academicSession, ...this.sessions().map((item) => item.name)].filter(Boolean)),
    ];
    floorOptions = () => this.floors();
    filteredRooms = () => this.rooms().filter((room) => (!this.selectedBlockId || room.blockId === this.selectedBlockId) &&
        (!this.selectedFloorId || room.floorId === this.selectedFloorId));
    locationReady() {
        return !!(this.selectedHostelId && this.selectedBlockId && this.selectedFloorId);
    }
    locationRooms() {
        if (!this.locationReady())
            return [];
        return this.rooms().filter((room) => room.blockId === this.selectedBlockId && room.floorId === this.selectedFloorId);
    }
    visibleRooms() {
        const query = this.roomSearch.trim().toLocaleLowerCase();
        return this.locationRooms().filter((room) => {
            const configured = !!room.configuredForSession;
            const matchesQuery = !query || room.roomNumber.toLocaleLowerCase().includes(query);
            const matchesConfiguration = this.roomConfigurationFilter === 'all' ||
                (this.roomConfigurationFilter === 'configured' && configured) ||
                (this.roomConfigurationFilter === 'unconfigured' && !configured) ||
                (this.roomConfigurationFilter === 'disabled' && !room.isActive);
            const matchesStatus = this.roomStatusFilter === 'all' ||
                (this.roomStatusFilter === 'active' ? room.isActive : !room.isActive);
            return matchesQuery && matchesConfiguration && matchesStatus;
        });
    }
    selectedBlockOption() {
        return this.blocks().find((block) => block._id === this.selectedBlockId) || null;
    }
    selectedFloorOption() {
        return this.floors().find((floor) => floor._id === this.selectedFloorId) || null;
    }
    locationLabel() {
        return [
            this.selectedHostel()?.name,
            this.selectedBlockOption()?.name,
            this.selectedFloorOption()?.name,
        ]
            .filter(Boolean)
            .join(' / ');
    }
    configuredRoomCount() {
        return this.locationRooms().filter((room) => room.configuredForSession).length;
    }
    locationBedCount() {
        return this.locationRooms().reduce((total, room) => total + (room.capacity || 0), 0);
    }
    capacityProgress() {
        const total = this.locationRooms().length;
        return total ? Math.round((this.configuredRoomCount() * 100) / total) : 0;
    }
    nextUnconfiguredRoom() {
        return this.locationRooms().find((room) => room.isActive && !room.configuredForSession) || null;
    }
    generationPreview() {
        const count = Math.max(0, Math.min(500, Number(this.roomGenerationCount) || 0));
        const start = Math.max(1, Number(this.roomStartNumber) || 1);
        if (!count)
            return [];
        const roomAt = (offset) => `${this.roomPrefix.trim()}${start + offset}`;
        if (count <= 4)
            return Array.from({ length: count }, (_, index) => roomAt(index));
        return [roomAt(0), roomAt(1), roomAt(2), `… ${roomAt(count - 1)}`];
    }
    selectedRoom = () => this.rooms().find((room) => room._id === this.selectedRoomId) || null;
    availableBeds = () => {
        const room = this.selectedRoom();
        return room ? room.beds.filter((bed) => !room.occupiedBeds.includes(bed)) : [];
    };
    allocatedStudentIds = computed(() => new Set(this.allocations()
        .filter((item) => item.status === 'active')
        .map((item) => item.studentAdmissionId)), ...(ngDevMode ? [{ debugName: "allocatedStudentIds" }] : /* istanbul ignore next */ []));
    selectedStudent() {
        return this.students().find((student) => student._id === this.selectedStudentId) || null;
    }
    activeAllocationForSelectedStudent() {
        return (this.eligibilityAllocations().find((allocation) => allocation.studentAdmissionId === this.selectedStudentId &&
            allocation.academicSession === this.academicSession &&
            allocation.status === 'active') || null);
    }
    visibleStudents() {
        const query = this.studentSearch.trim().toLocaleLowerCase();
        return this.students()
            .filter((student) => !query ||
            student.name.toLocaleLowerCase().includes(query) ||
            student.applicationNumber.toLocaleLowerCase().includes(query))
            .slice(0, 40);
    }
    visibleAllocations() {
        const query = this.allocationSearch.trim().toLocaleLowerCase();
        return this.allocations().filter((allocation) => !query ||
            allocation.studentName.toLocaleLowerCase().includes(query) ||
            allocation.studentApplicationNumber.toLocaleLowerCase().includes(query) ||
            allocation.hostelName.toLocaleLowerCase().includes(query) ||
            allocation.roomNumber.toLocaleLowerCase().includes(query));
    }
    allocationAvailableRooms() {
        const query = this.allocationRoomSearch.trim().toLocaleLowerCase();
        return this.rooms().filter((room) => room.blockId === this.selectedBlockId &&
            room.floorId === this.selectedFloorId &&
            room.isActive &&
            room.configuredForSession &&
            room.capacity > room.occupiedBeds.length &&
            (!query || room.roomNumber.toLocaleLowerCase().includes(query)));
    }
    allocationConfiguredRooms() {
        return this.rooms().filter((room) => room.blockId === this.selectedBlockId &&
            room.floorId === this.selectedFloorId &&
            room.isActive &&
            room.configuredForSession);
    }
    selectedStudentInitials() {
        const name = this.selectedStudent()?.name || this.transferTarget()?.studentName || '';
        return name
            .split(/\s+/)
            .filter(Boolean)
            .slice(0, 2)
            .map((part) => part[0]?.toUpperCase())
            .join('');
    }
    allocationLocationReady() {
        return !!(this.selectedHostelId && this.selectedBlockId && this.selectedFloorId);
    }
    visibleHostels() {
        const query = this.hostelSearch.trim().toLocaleLowerCase();
        return this.hostels().filter((hostel) => {
            const matchesQuery = !query ||
                hostel.name.toLocaleLowerCase().includes(query) ||
                hostel.code.toLocaleLowerCase().includes(query);
            const matchesType = this.hostelTypeFilter === 'all' || hostel.type === this.hostelTypeFilter;
            const matchesStatus = this.hostelStatusFilter === 'all' ||
                (this.hostelStatusFilter === 'active' ? hostel.isActive : !hostel.isActive);
            return matchesQuery && matchesType && matchesStatus;
        });
    }
    selectedHostel() {
        return this.hostels().find((hostel) => hostel._id === this.selectedHostelId) || null;
    }
    selectedBlock() {
        if (this.selectedStructureKind() !== 'block')
            return null;
        return this.blocks().find((block) => block._id === this.selectedStructureId()) || null;
    }
    selectedFloor() {
        if (this.selectedStructureKind() !== 'floor')
            return null;
        return this.floors().find((floor) => floor._id === this.selectedStructureId()) || null;
    }
    roomsForBlock(block) {
        return this.rooms().filter((room) => room.blockId === block._id).length;
    }
    roomsForFloor(floor) {
        return this.rooms().filter((room) => room.floorId === floor._id).length;
    }
    constructor() {
        this.route.data.subscribe((data) => {
            this.section.set(data['section'] || 'details');
            this.loadForSection();
        });
        this.route.queryParamMap.subscribe((params) => {
            const hostelId = params.get('hostel');
            if (!hostelId)
                return;
            this.selectedHostelId = hostelId;
            this.selectedBlockId = params.get('block') || this.selectedBlockId;
            this.selectedFloorId = params.get('floor') || this.selectedFloorId;
            this.academicSession = params.get('session') || this.academicSession;
            this.pendingCapacityRoomId = params.get('room') || '';
            if (['structure', 'rooms', 'capacity'].includes(this.section()))
                this.loadStructure(true);
        });
        this.loadHostels();
        this.api.masterValues('academic', { active: true }).subscribe({
            next: ({ items }) => this.sessions.set(items),
        });
        this.api.hostelStudents().subscribe({ next: ({ items }) => this.students.set(items) });
        this.api.hostelCapacityOptions().subscribe({
            next: ({ seaters, roomTypes }) => {
                this.savedSeaters.set(seaters);
                this.savedRoomTypes.set(roomTypes);
            },
        });
    }
    saveHostel() {
        if (this.hostelName.trim().length < 2)
            return this.error.set('Hostel name must contain at least 2 characters.');
        if (this.blockCount < 0 || this.floorCount < 0 || this.plannedRoomCount < 0)
            return this.error.set('Blocks, floors and total rooms cannot be negative.');
        this.startSaving();
        const editing = this.editingHostel();
        const body = {
            name: this.hostelName.trim(),
            type: this.hostelType,
            blockCount: this.blockCount,
            floorCount: this.floorCount,
            plannedRoomCount: this.plannedRoomCount,
        };
        const request = editing
            ? this.api.updateHostel(editing._id, body)
            : this.api.createHostel(body);
        request.subscribe({
            next: () => {
                this.message.set(editing ? 'Hostel details updated.' : 'Hostel created. Add blocks and floors manually.');
                this.resetHostelForm();
                this.hostelEditorOpen.set(false);
                this.loadHostels();
                this.saving.set(false);
            },
            error: (error) => this.fail(error),
        });
    }
    handleHostelAction(action, hostel) {
        if (action === 'structure') {
            void this.router.navigate(['/admin/master-data/hostel/structure'], {
                queryParams: { hostel: hostel._id },
            });
        }
        else if (action === 'edit') {
            this.error.set('');
            this.editingHostel.set(hostel);
            this.hostelName = hostel.name;
            this.hostelType = hostel.type;
            this.blockCount = hostel.blockCount;
            this.floorCount = hostel.floorCount || 0;
            this.plannedRoomCount = hostel.plannedRoomCount || 0;
            this.hostelEditorOpen.set(true);
        }
        else if (action === 'toggle') {
            this.api.updateHostel(hostel._id, { isActive: !hostel.isActive }).subscribe({
                next: () => {
                    this.message.set(hostel.isActive ? 'Hostel disabled.' : 'Hostel enabled.');
                    this.loadHostels();
                },
                error: (error) => this.fail(error),
            });
        }
        else if (action === 'delete') {
            this.deleteTarget.set({ kind: 'hostel', item: hostel });
        }
    }
    openHostelEditor() {
        this.error.set('');
        this.message.set('');
        this.resetHostelForm();
        this.hostelEditorOpen.set(true);
    }
    closeHostelEditor() {
        if (this.saving())
            return;
        this.hostelEditorOpen.set(false);
        this.resetHostelForm();
    }
    resetHostelForm() {
        this.editingHostel.set(null);
        this.hostelName = '';
        this.hostelType = 'boys';
        this.blockCount = 1;
        this.floorCount = 1;
        this.plannedRoomCount = 0;
    }
    hostelSelectionChanged() {
        this.selectedBlockId = '';
        this.selectedFloorId = '';
        this.selectedRoomId = '';
        this.selectedBedNumber = null;
        this.selectedStructureKind.set(null);
        this.selectedStructureId.set('');
        this.roomSearch = '';
        this.roomConfigurationFilter = 'all';
        this.roomStatusFilter = 'all';
        this.closeRoomEditor();
        this.closeCapacityEditor();
        if (!this.selectedHostelId) {
            this.blocks.set([]);
            this.floors.set([]);
            this.rooms.set([]);
            return;
        }
        this.loadStructure(['structure', 'rooms', 'capacity', 'allocation'].includes(this.section()));
    }
    blockSelectionChanged() {
        this.selectedFloorId = '';
        this.roomSearch = '';
    }
    floorSelectionChanged() {
        this.roomSearch = '';
    }
    saveBlock() {
        if (!this.selectedHostelId || !this.blockName.trim())
            return this.error.set('Select a hostel and enter the block name.');
        this.startSaving();
        const editing = this.editingBlock();
        const request = editing
            ? this.api.updateHostelBlock(editing._id, this.blockName.trim())
            : this.api.createHostelBlock({
                hostelId: this.selectedHostelId,
                name: this.blockName.trim(),
            });
        request.subscribe({
            next: () => this.structureSaved('Block saved.'),
            error: (error) => this.fail(error),
        });
    }
    handleBlockAction(action, block) {
        if (action === 'edit') {
            this.error.set('');
            this.editingBlock.set(block);
            this.blockName = block.name;
            this.structureDialog.set({ kind: 'block', mode: 'edit' });
        }
        else if (action === 'delete') {
            this.deleteTarget.set({ kind: 'block', item: block });
        }
    }
    saveFloor() {
        if (!this.selectedHostelId || !this.floorName.trim())
            return this.error.set('Select a hostel and enter the floor name.');
        this.startSaving();
        const editing = this.editingFloor();
        const request = editing
            ? this.api.updateHostelFloor(editing._id, this.floorName.trim())
            : this.api.createHostelFloor({
                hostelId: this.selectedHostelId,
                name: this.floorName.trim(),
            });
        request.subscribe({
            next: () => this.structureSaved('Floor saved.'),
            error: (error) => this.fail(error),
        });
    }
    handleFloorAction(action, floor) {
        if (action === 'edit') {
            this.error.set('');
            this.editingFloor.set(floor);
            this.floorName = floor.name;
            this.structureDialog.set({ kind: 'floor', mode: 'edit' });
        }
        else if (action === 'delete') {
            this.deleteTarget.set({ kind: 'floor', item: floor });
        }
    }
    openStructureDialog(kind) {
        if (!this.selectedHostelId) {
            this.error.set('Select a hostel before adding structure items.');
            return;
        }
        this.error.set('');
        this.message.set('');
        this.cancelStructureEdit();
        this.structureDialog.set({ kind, mode: 'create' });
    }
    closeStructureDialog() {
        if (this.saving())
            return;
        this.structureDialog.set(null);
        this.cancelStructureEdit();
    }
    submitStructureDialog() {
        const dialog = this.structureDialog();
        if (!dialog)
            return;
        if (dialog.kind === 'block')
            this.saveBlock();
        else
            this.saveFloor();
    }
    selectStructure(kind, id) {
        this.selectedStructureKind.set(kind);
        this.selectedStructureId.set(id);
    }
    deleteTitle() {
        const target = this.deleteTarget();
        if (!target)
            return '';
        return target.kind === 'room'
            ? `Delete room ${target.item.roomNumber}?`
            : `Delete ${target.item.name}?`;
    }
    deleteDescription() {
        const target = this.deleteTarget();
        if (!target)
            return '';
        if (target.kind === 'hostel') {
            return 'This action may be blocked when allocation history exists. Related structure is removed only when the current server permits deletion.';
        }
        if (target.kind === 'room') {
            return `${target.item.hostelName} / ${target.item.blockName} / ${target.item.floorName}. The server will block deletion when dependent records exist.`;
        }
        return `This ${target.kind} can only be deleted when the current server rules allow it.`;
    }
    confirmDelete() {
        const target = this.deleteTarget();
        if (!target)
            return;
        this.startSaving();
        const request = target.kind === 'hostel'
            ? this.api.deleteHostel(target.item._id)
            : target.kind === 'block'
                ? this.api.deleteHostelBlock(target.item._id)
                : target.kind === 'floor'
                    ? this.api.deleteHostelFloor(target.item._id)
                    : this.api.deleteHostelRoom(target.item._id);
        request.subscribe({
            next: () => {
                if (target.kind !== 'hostel' &&
                    target.kind !== 'room' &&
                    this.selectedStructureKind() === target.kind &&
                    this.selectedStructureId() === target.item._id) {
                    this.selectedStructureKind.set(null);
                    this.selectedStructureId.set('');
                }
                this.deleteTarget.set(null);
                this.message.set(target.kind === 'hostel'
                    ? 'Hostel deleted.'
                    : target.kind === 'block'
                        ? 'Block deleted.'
                        : target.kind === 'floor'
                            ? 'Floor deleted.'
                            : 'Room deleted.');
                this.saving.set(false);
                if (target.kind === 'hostel')
                    this.loadHostels();
                else if (target.kind === 'room') {
                    this.loadRooms();
                    this.loadHostels();
                }
                else
                    this.loadStructure(true);
            },
            error: (error) => this.fail(error),
        });
    }
    closeDeleteDialog() {
        if (!this.saving())
            this.deleteTarget.set(null);
    }
    cancelStructureEdit() {
        this.editingBlock.set(null);
        this.editingFloor.set(null);
        this.blockName = '';
        this.floorName = '';
    }
    closePhaseOneOverlays() {
        this.closeHostelEditor();
        this.closeStructureDialog();
        this.closeDeleteDialog();
        this.closeRoomEditor();
        this.closeCapacityEditor();
        this.closeAllocationDrawer();
        this.closeAllocationDetail();
        if (!this.saving()) {
            this.viewingRoom.set(null);
            this.generationConfirmOpen.set(false);
        }
    }
    openRoomEditor(mode = 'manual') {
        if (!this.locationReady()) {
            this.error.set('Select a hostel, block and floor first.');
            return;
        }
        this.error.set('');
        this.message.set('');
        this.editingRoom.set(null);
        this.viewingRoom.set(null);
        this.roomMode = mode;
        this.roomNumber = '';
        this.roomEditorOpen.set(true);
    }
    closeRoomEditor() {
        if (this.saving())
            return;
        this.roomEditorOpen.set(false);
        this.editingRoom.set(null);
        this.editedRoomNumber = '';
        this.error.set('');
    }
    closeCapacityEditor() {
        if (this.saving())
            return;
        this.capacityRoom.set(null);
        this.error.set('');
    }
    saveRooms() {
        if (!this.selectedHostelId || !this.selectedBlockId || !this.selectedFloorId)
            return this.error.set('Select a hostel, block and floor.');
        if (this.roomMode === 'manual' && !this.roomNumber.trim())
            return this.error.set('Enter a room number.');
        if (this.roomMode === 'automatic' &&
            (this.roomStartNumber < 1 ||
                this.roomGenerationCount < 1 ||
                this.roomGenerationCount > 500)) {
            return this.error.set('Start number must be positive and room count must be between 1 and 500.');
        }
        if (this.roomMode === 'automatic' &&
            this.roomGenerationCount >= 100 &&
            !this.bypassGenerationConfirm) {
            this.generationConfirmOpen.set(true);
            return;
        }
        this.bypassGenerationConfirm = false;
        this.startSaving();
        const base = {
            hostelId: this.selectedHostelId,
            blockId: this.selectedBlockId,
            floorId: this.selectedFloorId,
        };
        const request = this.roomMode === 'manual'
            ? this.api.createHostelRoom({ ...base, roomNumber: this.roomNumber.trim() })
            : this.api.generateHostelRooms({
                ...base,
                prefix: this.roomPrefix.trim(),
                startNumber: this.roomStartNumber,
                count: this.roomGenerationCount,
            });
        request.subscribe({
            next: () => {
                this.message.set(this.roomMode === 'manual' ? 'Room created.' : 'Rooms generated successfully.');
                this.roomNumber = '';
                this.roomEditorOpen.set(false);
                this.generationConfirmOpen.set(false);
                this.loadRooms();
                this.loadHostels();
                this.saving.set(false);
            },
            error: (error) => this.fail(error),
        });
    }
    handleRoomAction(action, room) {
        if (action === 'view') {
            this.viewingRoom.set(room);
        }
        else if (action === 'edit') {
            this.error.set('');
            this.editingRoom.set(room);
            this.editedRoomNumber = room.roomNumber;
            this.roomEditorOpen.set(true);
        }
        else if (action === 'capacity') {
            void this.router.navigate(['/admin/master-data/hostel/capacity'], {
                queryParams: {
                    session: this.academicSession,
                    hostel: room.hostelId,
                    block: room.blockId,
                    floor: room.floorId,
                    room: room._id,
                },
            });
        }
        else if (action === 'toggle') {
            this.api
                .updateHostelRoomDetails(room._id, { isActive: !room.isActive })
                .subscribe({
                next: () => {
                    this.message.set(room.isActive ? 'Room disabled.' : 'Room enabled.');
                    this.loadRooms();
                },
                error: (error) => this.fail(error),
            });
        }
        else if (action === 'delete') {
            this.deleteTarget.set({ kind: 'room', item: room });
        }
    }
    handleCapacityAction(action, room) {
        if (action === 'capacity')
            this.openCapacity(room);
        else if (action === 'toggle') {
            this.api
                .updateHostelRoomDetails(room._id, { isActive: !room.isActive })
                .subscribe({
                next: () => {
                    this.message.set(room.isActive ? 'Room disabled.' : 'Room enabled.');
                    this.loadRooms();
                },
                error: (error) => this.fail(error),
            });
        }
    }
    confirmRoomGeneration() {
        this.generationConfirmOpen.set(false);
        this.bypassGenerationConfirm = true;
        this.saveRooms();
    }
    saveRoomNumber() {
        const room = this.editingRoom();
        if (!room || !this.editedRoomNumber.trim())
            return;
        this.startSaving();
        this.api
            .updateHostelRoomDetails(room._id, { roomNumber: this.editedRoomNumber.trim() })
            .subscribe({
            next: () => {
                this.editingRoom.set(null);
                this.roomEditorOpen.set(false);
                this.editedRoomNumber = '';
                this.message.set('Room number updated.');
                this.loadRooms();
                this.saving.set(false);
            },
            error: (error) => this.fail(error),
        });
    }
    openCapacity(room) {
        this.error.set('');
        this.message.set('');
        this.capacityRoom.set(room);
        if (!room.configuredForSession) {
            this.capacityChoice = String(this.savedSeaters()[0] || 2);
            this.customCapacity = null;
            this.roomTypeChoice = this.savedRoomTypes()[0] || 'Non-AC';
            this.customRoomType = '';
            return;
        }
        this.capacityChoice = this.savedSeaters().includes(room.capacity)
            ? String(room.capacity)
            : 'custom';
        this.customCapacity = this.capacityChoice === 'custom' ? room.capacity || null : null;
        this.roomTypeChoice = this.savedRoomTypes().includes(room.roomType) ? room.roomType : 'custom';
        this.customRoomType = this.roomTypeChoice === 'custom' ? room.roomType : '';
    }
    saveCapacity() {
        const room = this.capacityRoom();
        const capacity = this.capacityChoice === 'custom' ? Number(this.customCapacity) : Number(this.capacityChoice);
        const roomType = this.roomTypeChoice === 'custom' ? this.customRoomType.trim() : this.roomTypeChoice;
        if (!room || !this.academicSession || !capacity || capacity > 30 || !roomType)
            return this.error.set('Select the session, seater and room type.');
        this.startSaving();
        this.api
            .saveHostelRoomCapacity(room._id, {
            academicSession: this.academicSession,
            capacity,
            roomType,
        })
            .subscribe({
            next: () => {
                this.capacityRoom.set(null);
                this.message.set(`Capacity saved for room ${room.roomNumber}.`);
                this.loadRooms();
                this.api.hostelCapacityOptions().subscribe({
                    next: ({ seaters, roomTypes }) => {
                        this.savedSeaters.set(seaters);
                        this.savedRoomTypes.set(roomTypes);
                    },
                });
                this.saving.set(false);
            },
            error: (error) => this.fail(error),
        });
    }
    openAllocationDrawer() {
        this.error.set('');
        this.message.set('');
        this.transferTarget.set(null);
        this.allocationDetail.set(null);
        this.academicSession = this.allocationBrowseSession || currentAcademicSession();
        this.selectedStudentId = '';
        this.studentSearch = '';
        this.resetAllocationDestination();
        this.allocationStage.set(1);
        this.allocationDrawerOpen.set(true);
        this.loadEligibilityAllocations();
    }
    closeAllocationDrawer() {
        if (this.saving())
            return;
        this.allocationDrawerOpen.set(false);
        this.transferTarget.set(null);
        this.resetAllocationDestination();
        this.error.set('');
    }
    selectAllocationStudent(student) {
        this.selectedStudentId = student._id;
        this.studentSearch = `${student.name} · ${student.applicationNumber}`;
        this.error.set('');
    }
    continueAllocation() {
        const stage = this.allocationStage();
        if (stage === 1) {
            if (!this.academicSession || !this.selectedStudentId) {
                this.error.set('Select an academic session and student to continue.');
                return;
            }
            if (this.activeAllocationForSelectedStudent()) {
                this.error.set('This student already has an active hostel allocation for the session.');
                return;
            }
            this.error.set('');
            this.allocationStage.set(2);
            return;
        }
        if (stage === 2) {
            if (!this.selectedRoomId || !this.selectedBedNumber) {
                this.error.set('Select an available room and bed to continue.');
                return;
            }
            this.error.set('');
            this.allocationStage.set(3);
        }
    }
    previousAllocationStage() {
        const stage = this.allocationStage();
        if (stage > 1 && !this.transferTarget())
            this.allocationStage.set((stage - 1));
        else if (stage === 3 && this.transferTarget())
            this.allocationStage.set(2);
        this.error.set('');
    }
    allocationHostelSelectionChanged() {
        this.selectedBlockId = '';
        this.selectedFloorId = '';
        this.selectedRoomId = '';
        this.selectedBedNumber = null;
        this.allocationRoomSearch = '';
        this.blocks.set([]);
        this.floors.set([]);
        this.rooms.set([]);
        if (!this.selectedHostelId)
            return;
        this.allocationRoomLoading.set(true);
        this.api.hostelStructure(this.selectedHostelId).subscribe({
            next: ({ items, floors }) => {
                this.blocks.set(items);
                this.floors.set(floors);
                this.loadAllocationRooms();
            },
            error: (error) => {
                this.allocationRoomLoading.set(false);
                this.fail(error);
            },
        });
    }
    allocationBlockSelectionChanged() {
        this.selectedFloorId = '';
        this.selectedRoomId = '';
        this.selectedBedNumber = null;
        this.allocationRoomSearch = '';
    }
    allocationFloorSelectionChanged() {
        this.selectedRoomId = '';
        this.selectedBedNumber = null;
        this.allocationRoomSearch = '';
    }
    selectAllocationRoom(room) {
        this.selectedRoomId = room._id;
        this.selectedBedNumber = null;
        this.error.set('');
    }
    selectAllocationBed(bed) {
        if (!this.availableBeds().includes(bed))
            return;
        this.selectedBedNumber = bed;
        this.error.set('');
    }
    viewAllocation(allocation) {
        this.allocationDetail.set(allocation);
    }
    closeAllocationDetail() {
        this.allocationDetail.set(null);
    }
    startTransfer(allocation) {
        this.error.set('');
        this.message.set('');
        this.allocationDetail.set(null);
        this.transferTarget.set(allocation);
        this.academicSession = allocation.academicSession;
        this.selectedStudentId = allocation.studentAdmissionId;
        this.resetAllocationDestination();
        this.allocationStage.set(2);
        this.allocationDrawerOpen.set(true);
    }
    allocationBrowseChanged() {
        this.loadAllocations();
    }
    allocationFormSessionChanged() {
        this.resetAllocationDestination();
        this.loadEligibilityAllocations();
    }
    clearAllocationFilters() {
        this.allocationSearch = '';
        this.allocationBrowseHostelId = '';
        this.allocationStatusFilter = 'active';
        this.loadAllocations();
    }
    loadAllocationRooms() {
        if (!this.selectedHostelId) {
            this.rooms.set([]);
            this.allocationRoomLoading.set(false);
            return;
        }
        this.allocationRoomLoading.set(true);
        this.api
            .hostelRooms({ hostelId: this.selectedHostelId, session: this.academicSession })
            .subscribe({
            next: ({ items }) => {
                this.rooms.set(items);
                this.allocationRoomLoading.set(false);
            },
            error: (error) => {
                this.allocationRoomLoading.set(false);
                this.fail(error);
            },
        });
    }
    loadEligibilityAllocations() {
        this.api
            .hostelAllocations({ session: this.academicSession, status: 'active' })
            .subscribe({
            next: ({ items }) => this.eligibilityAllocations.set(items),
            error: (error) => this.fail(error),
        });
    }
    resetAllocationDestination() {
        this.selectedHostelId = '';
        this.selectedBlockId = '';
        this.selectedFloorId = '';
        this.selectedRoomId = '';
        this.selectedBedNumber = null;
        this.allocationRoomSearch = '';
        this.blocks.set([]);
        this.floors.set([]);
        this.rooms.set([]);
    }
    createOrTransferAllocation() {
        if (!this.academicSession || !this.selectedRoomId || !this.selectedBedNumber)
            return this.error.set('Select a session, room and available bed.');
        const transfer = this.transferTarget();
        if (!transfer && !this.selectedStudentId)
            return this.error.set('Select a student.');
        const studentName = transfer?.studentName || this.selectedStudent()?.name || 'Student';
        const roomNumber = this.selectedRoom()?.roomNumber || '';
        const bedNumber = this.selectedBedNumber;
        this.startSaving();
        const request = transfer
            ? this.api.transferHostelAllocation(transfer._id, {
                roomId: this.selectedRoomId,
                bedNumber: this.selectedBedNumber,
                reason: this.transferReason,
            })
            : this.api.createHostelAllocation({
                studentAdmissionId: this.selectedStudentId,
                academicSession: this.academicSession,
                roomId: this.selectedRoomId,
                bedNumber: this.selectedBedNumber,
            });
        request.subscribe({
            next: () => {
                this.message.set(transfer
                    ? 'Student transferred successfully.'
                    : `${studentName} was allocated Room ${roomNumber}, Bed ${bedNumber}.`);
                this.saving.set(false);
                this.allocationDrawerOpen.set(false);
                this.transferTarget.set(null);
                this.resetAllocationDestination();
                this.selectedStudentId = '';
                this.loadAllocations();
                this.loadEligibilityAllocations();
            },
            error: (error) => {
                const text = error.error?.message || '';
                if (error.status === 409 && /bed|room|hostel/i.test(text)) {
                    this.allocationStage.set(2);
                    this.loadAllocationRooms();
                }
                this.fail(error);
            },
        });
    }
    handleAllocationAction(action, allocation) {
        if (action === 'view') {
            this.viewAllocation(allocation);
        }
        else if (action === 'transfer') {
            this.startTransfer(allocation);
        }
        else if (action === 'vacate') {
            this.vacateReason = '';
            this.vacateTarget.set(allocation);
        }
    }
    confirmVacate() {
        const target = this.vacateTarget();
        if (!target)
            return;
        this.startSaving();
        this.api.vacateHostelAllocation(target._id, this.vacateReason).subscribe({
            next: () => {
                this.vacateTarget.set(null);
                this.message.set(`Room ${target.roomNumber}, Bed ${target.bedNumber} is now available.`);
                this.loadAllocations();
                this.loadEligibilityAllocations();
                this.saving.set(false);
            },
            error: (error) => this.fail(error),
        });
    }
    cancelTransfer() {
        this.transferTarget.set(null);
        this.transferReason = '';
        this.allocationDrawerOpen.set(false);
        this.resetAllocationDestination();
    }
    roomChanged() {
        this.selectedBedNumber = null;
    }
    sessionChanged() {
        if (['capacity', 'allocation'].includes(this.section()))
            this.loadRooms();
        if (this.section() === 'allocation')
            this.loadAllocations();
        if (this.section() === 'overview')
            this.loadOverview();
    }
    loadHostels() {
        this.loading.set(true);
        this.api.hostels(this.academicSession).subscribe({
            next: ({ items }) => {
                this.hostels.set(items);
                if (!this.selectedHostelId && items.length)
                    this.selectedHostelId = items[0]._id;
                this.loading.set(false);
                this.loadForSection();
            },
            error: (error) => this.fail(error),
        });
    }
    loadStructure(loadDependentData = false) {
        if (!this.selectedHostelId)
            return;
        this.api.hostelStructure(this.selectedHostelId).subscribe({
            next: ({ items, floors }) => {
                this.blocks.set(items);
                this.floors.set(floors);
                if (loadDependentData)
                    this.loadRooms();
                if (loadDependentData && this.section() === 'allocation')
                    this.loadAllocations();
            },
            error: (error) => this.fail(error),
        });
    }
    loadRooms() {
        if (!this.selectedHostelId)
            return this.rooms.set([]);
        this.loading.set(true);
        this.roomsLoadFailed.set(false);
        this.api
            .hostelRooms({ hostelId: this.selectedHostelId, session: this.academicSession })
            .subscribe({
            next: ({ items }) => {
                this.rooms.set(items);
                this.loading.set(false);
                if (this.pendingCapacityRoomId) {
                    const room = items.find((item) => item._id === this.pendingCapacityRoomId);
                    this.pendingCapacityRoomId = '';
                    if (room)
                        this.openCapacity(room);
                }
            },
            error: (error) => {
                this.roomsLoadFailed.set(true);
                this.fail(error);
            },
        });
    }
    loadAllocations() {
        this.allocationLoading.set(true);
        this.allocationLoadFailed.set(false);
        this.api
            .hostelAllocations({
            session: this.allocationBrowseSession,
            hostelId: this.allocationBrowseHostelId,
            status: this.allocationStatusFilter === 'all' ? undefined : this.allocationStatusFilter,
        })
            .subscribe({
            next: ({ items }) => {
                this.allocations.set(items);
                this.allocationLoading.set(false);
            },
            error: (error) => {
                this.allocationLoading.set(false);
                this.allocationLoadFailed.set(true);
                this.fail(error);
            },
        });
    }
    loadOverview() {
        this.loading.set(true);
        this.api.hostelOverview(this.academicSession).subscribe({
            next: (overview) => {
                this.overview.set(overview);
                this.loading.set(false);
            },
            error: (error) => this.fail(error),
        });
    }
    loadForSection() {
        if (this.section() === 'allocation') {
            this.loadAllocations();
            return;
        }
        if (!this.selectedHostelId)
            return;
        if (this.section() === 'structure')
            this.loadStructure(true);
        if (['rooms', 'capacity'].includes(this.section()))
            this.loadStructure(true);
        if (this.section() === 'overview')
            this.loadOverview();
    }
    structureSaved(message) {
        this.message.set(message);
        this.structureDialog.set(null);
        this.cancelStructureEdit();
        this.loadStructure(true);
        this.saving.set(false);
    }
    startSaving() {
        this.saving.set(true);
        this.message.set('');
        this.error.set('');
    }
    fail(error) {
        this.error.set(error.error?.message || 'The hostel operation failed.');
        this.loading.set(false);
        this.saving.set(false);
    }
    static ɵfac = function HostelManagementComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || HostelManagementComponent)(); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: HostelManagementComponent, selectors: [["erp-hostel-management"]], hostBindings: function HostelManagementComponent_HostBindings(rf, ctx) { if (rf & 1) {
            i0.ɵɵlistener("keydown.escape", function HostelManagementComponent_keydown_escape_HostBindingHandler() { return ctx.closePhaseOneOverlays(); }, i0.ɵɵresolveDocument);
        } }, decls: 28, vars: 21, consts: [["eyebrow", "Hostel", "variant", "compact", "layout", "collection", 3, "title", "description"], ["page-actions", "", 1, "hostel-page-actions"], ["type", "button", "aria-label", "Refresh hostel data", "title", "Refresh", 1, "erp-icon-button", 3, "click", "disabled"], ["lucideRefreshCw", "", "size", "18", "aria-hidden", "true"], ["type", "button", 1, "erp-button", "erp-button--primary"], ["type", "button", 1, "erp-button", "erp-button--primary", 3, "disabled"], ["role", "status", 1, "erp-notice", "erp-notice--success"], ["role", "alert", 1, "erp-notice", "erp-notice--error"], ["id", "hostel-session-options"], [3, "value"], [1, "erp-drawer-layer"], [1, "dialog-layer"], ["type", "button", 1, "erp-button", "erp-button--primary", 3, "click"], ["lucidePlus", "", "size", "17", "aria-hidden", "true"], ["type", "button", 1, "erp-button", "erp-button--secondary", 3, "click"], ["type", "button", 1, "erp-button", "erp-button--primary", 3, "click", "disabled"], ["lucideUserRoundPlus", "", "size", "17", "aria-hidden", "true"], ["aria-label", "Hostel directory summary", 1, "erp-metric-strip"], [1, "erp-metric-strip__item"], [1, "erp-metric-strip__icon"], ["lucideBuilding2", "", "size", "20", "aria-hidden", "true"], ["lucideCheckCircle2", "", "size", "20", "aria-hidden", "true"], ["lucideBedDouble", "", "size", "20", "aria-hidden", "true"], ["lucideDoorOpen", "", "size", "20", "aria-hidden", "true"], [1, "erp-card", "hostel-directory"], [1, "erp-command-bar"], [1, "erp-search-control", "hostel-directory__search"], ["lucideSearch", "", "size", "18", "aria-hidden", "true"], [1, "erp-sr-only"], ["placeholder", "Search by hostel name or code", 3, "ngModelChange", "ngModel"], ["type", "button", 1, "erp-button", "erp-button--secondary", "hostel-filter-toggle", 3, "click"], ["lucideFilter", "", "size", "17", "aria-hidden", "true"], [1, "hostel-directory__filters"], [1, "erp-control", 3, "ngModelChange", "ngModel"], ["value", "all"], ["value", "boys"], ["value", "girls"], ["value", "co-ed"], ["value", "active"], ["value", "inactive"], [1, "hostel-directory__count"], ["role", "status", 1, "erp-state-panel"], [1, "erp-empty-panel"], [1, "erp-table-shell", "erp-table-shell__scroll", "hostel-directory__table"], ["aria-hidden", "true", 1, "erp-spinner"], [1, "erp-empty-panel__icon"], ["lucideBuilding2", "", "size", "24", "aria-hidden", "true"], [1, "erp-table-shell__actions"], [1, "hostel-type"], [1, "erp-status"], [3, "selected", "items"], ["colspan", "6", 1, "erp-empty-state", "erp-empty-state--compact"], [1, "erp-card", "erp-command-bar", "hostel-structure-command"], [1, "erp-field-stack", "hostel-structure-command__select"], ["value", ""], [1, "hostel-structure-command__summary"], [1, "hostel-structure-command__hint"], [1, "erp-card", "erp-empty-panel", "hostel-section-gap"], [1, "erp-card", "hostel-structure-workspace", "hostel-section-gap"], ["aria-label", "Hostel structure navigator", 1, "hostel-structure-tree"], [1, "hostel-structure-tree__header"], ["aria-label", "Structure creation actions", 1, "hostel-structure-tree__actions"], ["type", "button", "aria-label", "Add block", "title", "Add block", 1, "erp-icon-button", 3, "click"], ["lucideLayers3", "", "size", "17", "aria-hidden", "true"], ["type", "button", "aria-label", "Add floor", "title", "Add floor", 1, "erp-icon-button", 3, "click"], [1, "hostel-structure-tree__scroll"], [1, "hostel-structure-detail"], [1, "erp-empty-panel", "hostel-structure-detail__empty"], [1, "hostel-tree-group"], ["type", "button", 1, "hostel-tree-group__toggle", 3, "click"], ["lucideChevronDown", "", "size", "17", "aria-hidden", "true"], [1, "hostel-tree-group__items"], [1, "hostel-tree-group__items", "hostel-tree-group__items--children"], [1, "hostel-tree-row", "hostel-tree-row--parent", 3, "hostel-tree-row--selected"], ["type", "button", 1, "hostel-tree-empty"], [1, "hostel-tree-row", "hostel-tree-row--parent"], ["type", "button", 3, "click"], ["type", "button", 1, "hostel-tree-empty", 3, "click"], [1, "hostel-tree-row", "hostel-tree-row--child", 3, "hostel-tree-row--selected"], [1, "hostel-tree-row", "hostel-tree-row--child"], ["lucideDoorOpen", "", "size", "16", "aria-hidden", "true"], [1, "hostel-structure-detail__header"], ["lucideLayers3", "", "size", "22", "aria-hidden", "true"], [1, "hostel-structure-detail__metrics"], [1, "hostel-structure-detail__list"], ["type", "button", 1, "erp-button", "erp-button--secondary", "erp-button--compact", 3, "click"], ["lucidePlus", "", "size", "15", "aria-hidden", "true"], ["type", "button"], [1, "erp-empty-state", "erp-empty-state--compact"], ["lucideDoorOpen", "", "size", "22", "aria-hidden", "true"], [1, "erp-empty-panel", "hostel-structure-detail__guidance"], ["lucideLayers3", "", "size", "24", "aria-hidden", "true"], [1, "erp-card", "hostel-room-command"], [1, "erp-command-bar", "hostel-room-command__controls"], [1, "erp-field-stack", "hostel-room-command__session"], [1, "erp-field-stack", "hostel-room-command__hostel"], [1, "erp-field-stack", "hostel-room-command__block"], [1, "erp-control", 3, "ngModelChange", "ngModel", "disabled"], [1, "erp-field-stack", "hostel-room-command__floor"], [1, "erp-search-control", "hostel-room-command__search"], ["placeholder", "Search room number", 3, "ngModelChange", "ngModel"], ["type", "button", 1, "erp-button", "erp-button--secondary", "hostel-room-filter-toggle", 3, "click"], [1, "hostel-room-command__secondary"], ["value", "configured"], ["value", "unconfigured"], ["value", "disabled"], [1, "hostel-room-command__helper"], [1, "erp-card", "hostel-location-summary", "hostel-section-gap"], [1, "erp-card", "hostel-capacity-progress", "hostel-section-gap"], ["role", "status", 1, "erp-card", "hostel-room-loading", "hostel-section-gap"], ["role", "alert", 1, "erp-card", "erp-empty-panel", "hostel-section-gap"], [1, "erp-card", "erp-table-shell", "hostel-room-directory", "hostel-section-gap"], ["list", "hostel-session-options", 1, "erp-control", 3, "ngModelChange", "change", "ngModel"], ["lucideBuilding2", "", "size", "21", "aria-hidden", "true"], [1, "hostel-location-summary__copy"], [1, "hostel-location-summary__metrics"], ["role", "progressbar", "aria-label", "Room capacity configuration progress", "aria-valuemin", "0", "aria-valuemax", "100", 1, "hostel-capacity-progress__bar"], [1, "hostel-capacity-progress__value"], ["type", "button", 1, "erp-button", "erp-button--secondary"], ["lucideBedDouble", "", "size", "24", "aria-hidden", "true"], ["lucideMapPin", "", "size", "24", "aria-hidden", "true"], [1, "erp-skeleton"], ["lucideRefreshCw", "", "size", "24", "aria-hidden", "true"], ["lucideDoorOpen", "", "size", "24", "aria-hidden", "true"], [1, "hostel-empty-actions"], ["routerLink", "/admin/master-data/hostel/rooms", 1, "erp-button", "erp-button--secondary", 3, "queryParams"], [1, "erp-table-toolbar"], [1, "erp-table-shell__scroll"], [1, "erp-card", "hostel-allocation-command"], [1, "erp-command-bar", "hostel-allocation-command__controls"], [1, "erp-field-stack", "hostel-allocation-command__session"], [1, "erp-search-control", "hostel-allocation-command__search"], ["placeholder", "Search student, application, hostel or room", 3, "ngModelChange", "ngModel"], ["type", "button", 1, "erp-button", "erp-button--secondary", "hostel-allocation-filter-toggle", 3, "click"], [1, "hostel-allocation-command__filters"], ["value", "vacated"], ["lucideSearch", "", "size", "24", "aria-hidden", "true"], [1, "erp-card", "erp-table-shell", "hostel-allocation-directory", "hostel-section-gap"], ["aria-label", "Allocation directory", 1, "hostel-allocation-cards", "hostel-section-gap"], [1, "erp-card", "hostel-allocation-card"], [1, "hostel-allocation-card__head"], [1, "hostel-student-avatar"], [1, "erp-card", "erp-card--padded", "hostel-overview-filter"], [1, "erp-field-stack"], [1, "erp-kpi-grid", "hostel-section-gap"], [1, "erp-kpi-card"], [1, "erp-card", "erp-table-shell", "hostel-section-gap"], ["colspan", "7", 1, "erp-empty-state"], ["type", "button", "aria-label", "Close hostel editor", 1, "erp-drawer-backdrop", 3, "click"], ["role", "dialog", "aria-modal", "true", "aria-labelledby", "hostel-editor-title", 1, "erp-drawer"], [1, "erp-drawer__header"], [1, "erp-drawer__icon"], ["id", "hostel-editor-title"], ["type", "button", "aria-label", "Close hostel editor", 1, "erp-icon-button", 3, "click"], ["lucideX", "", "size", "18", "aria-hidden", "true"], [1, "erp-drawer__body", "hostel-editor-form", 3, "ngSubmit"], ["name", "hostelName", "required", "", "maxlength", "120", "placeholder", "e.g. Nanda Devi Girls Hostel", "autofocus", "", 1, "erp-control", 3, "ngModelChange", "ngModel"], ["name", "hostelType", 1, "erp-control", 3, "ngModelChange", "ngModel"], ["name", "blockCount", "type", "number", "min", "0", "max", "30", 1, "erp-control", 3, "ngModelChange", "ngModel", "disabled"], ["name", "floorCount", "type", "number", "min", "0", "max", "30", 1, "erp-control", 3, "ngModelChange", "ngModel", "disabled"], ["name", "plannedRoomCount", "type", "number", "min", "0", "max", "5000", 1, "erp-control", 3, "ngModelChange", "ngModel"], [1, "erp-drawer__footer"], ["type", "submit", 1, "erp-button", "erp-button--primary", 3, "disabled"], ["aria-hidden", "true", 1, "erp-spinner", "erp-spinner--button"], ["type", "button", "aria-label", "Close allocation workflow", 1, "erp-drawer-backdrop", 3, "click"], ["role", "dialog", "aria-modal", "true", "aria-labelledby", "allocation-editor-title", "cdkTrapFocus", "", 1, "erp-drawer", "hostel-allocation-drawer", 3, "cdkTrapFocusAutoCapture"], ["lucideArrowRightLeft", "", "size", "21", "aria-hidden", "true"], ["lucideUserRoundPlus", "", "size", "21", "aria-hidden", "true"], ["id", "allocation-editor-title"], ["type", "button", "aria-label", "Close allocation workflow", 1, "erp-icon-button", 3, "click"], [1, "erp-drawer__body", "hostel-allocation-editor"], ["aria-label", "Allocation progress", 1, "hostel-allocation-stages"], ["aria-labelledby", "allocation-stage-student", 1, "hostel-allocation-stage"], ["aria-labelledby", "allocation-stage-room", 1, "hostel-allocation-stage"], ["aria-labelledby", "allocation-stage-review", 1, "hostel-allocation-stage"], [1, "erp-drawer__footer", "hostel-allocation-footer"], ["role", "status", 1, "hostel-transfer-banner"], [1, "hostel-current-allocation"], [3, "hostel-allocation-stages__item--active", "hostel-allocation-stages__item--complete"], ["lucideCheck", "", "size", "14", "aria-hidden", "true"], [1, "hostel-allocation-stage__heading"], ["id", "allocation-stage-student"], [1, "erp-search-control"], ["placeholder", "Search name or application number", "autocomplete", "off", 3, "ngModelChange", "ngModel"], ["role", "listbox", "aria-label", "Student results", 1, "hostel-student-results"], [1, "hostel-selected-student"], ["type", "button", "role", "option"], ["type", "button", "role", "option", 3, "click"], [1, "erp-status", "erp-status--warning"], ["id", "allocation-stage-room"], [1, "hostel-pinned-student"], [1, "hostel-allocation-location"], ["role", "status", 1, "hostel-room-results-loading"], [1, "hostel-selected-room"], [1, "erp-search-control", "hostel-room-finder-search"], [1, "hostel-allocation-blocked"], ["role", "listbox", "aria-label", "Available rooms", 1, "hostel-room-finder"], ["lucideSettings2", "", "size", "22", "aria-hidden", "true"], ["routerLink", "/admin/master-data/hostel/capacity", 1, "erp-button", "erp-button--secondary", 3, "click", "queryParams"], ["lucideSearch", "", "size", "22", "aria-hidden", "true"], ["lucideBedDouble", "", "size", "22", "aria-hidden", "true"], ["type", "button", "role", "option", 3, "hostel-room-option--selected"], ["role", "listbox", "aria-label", "Select an available bed", 1, "hostel-bed-selector"], ["type", "button", "role", "option", 3, "disabled", "hostel-bed-selector__bed--selected"], ["type", "button", "role", "option", 3, "click", "disabled"], ["id", "allocation-stage-review"], [1, "hostel-allocation-review"], [1, "erp-notice", "erp-notice--warning"], ["placeholder", "Optional reason", 1, "erp-control", 3, "ngModelChange", "ngModel"], ["lucideArrowRight", "", "size", "17", "aria-hidden", "true"], ["lucideArrowLeft", "", "size", "17", "aria-hidden", "true"], ["type", "button", "aria-label", "Close allocation details", 1, "erp-drawer-backdrop", 3, "click"], ["role", "dialog", "aria-modal", "true", "aria-labelledby", "allocation-detail-title", "cdkTrapFocus", "", 1, "erp-drawer", "hostel-allocation-detail", 3, "cdkTrapFocusAutoCapture"], ["lucideUserRound", "", "size", "21", "aria-hidden", "true"], ["id", "allocation-detail-title"], ["type", "button", "aria-label", "Close allocation details", 1, "erp-icon-button", 3, "click"], [1, "erp-drawer__body", "hostel-room-details"], ["lucideArrowRightLeft", "", "size", "17", "aria-hidden", "true"], ["type", "button", 1, "erp-button", "erp-button--danger", 3, "click"], ["lucideLogOut", "", "size", "17", "aria-hidden", "true"], ["type", "button", "aria-label", "Close room editor", 1, "erp-drawer-backdrop", 3, "click"], ["role", "dialog", "aria-modal", "true", "aria-labelledby", "room-editor-title", "cdkTrapFocus", "", 1, "erp-drawer", "hostel-room-drawer", 3, "cdkTrapFocusAutoCapture"], ["lucideDoorOpen", "", "size", "21", "aria-hidden", "true"], ["id", "room-editor-title"], ["type", "button", "aria-label", "Close room editor", 1, "erp-icon-button", 3, "click"], [1, "erp-drawer__body", "hostel-room-editor"], [1, "erp-drawer__body", "hostel-room-editor", 3, "ngSubmit"], ["name", "editedRoomNumber", "required", "", "maxlength", "40", "autofocus", "", 1, "erp-control", 3, "ngModelChange", "ngModel"], ["aria-label", "Room creation method", 1, "hostel-segmented"], ["name", "roomNumber", "required", "", "maxlength", "40", "placeholder", "e.g. A-101", "autofocus", "", 1, "erp-control", 3, "ngModelChange", "ngModel"], [1, "hostel-generation-grid"], ["name", "roomPrefix", "maxlength", "12", "placeholder", "e.g. A-", 1, "erp-control", 3, "ngModelChange", "ngModel"], ["name", "roomStartNumber", "type", "number", "min", "1", 1, "erp-control", 3, "ngModelChange", "ngModel"], ["name", "roomGenerationCount", "type", "number", "min", "1", "max", "500", 1, "erp-control", 3, "ngModelChange", "ngModel"], ["aria-live", "polite", 1, "hostel-generation-preview"], ["type", "button", "aria-label", "Close room details", 1, "erp-drawer-backdrop", 3, "click"], ["role", "dialog", "aria-modal", "true", "aria-labelledby", "room-details-title", "cdkTrapFocus", "", 1, "erp-drawer", "hostel-room-drawer", 3, "cdkTrapFocusAutoCapture"], ["id", "room-details-title"], ["type", "button", "aria-label", "Close room details", 1, "erp-icon-button", 3, "click"], ["type", "button", "aria-label", "Close capacity editor", 1, "erp-drawer-backdrop", 3, "click"], ["role", "dialog", "aria-modal", "true", "aria-labelledby", "capacity-editor-title", "cdkTrapFocus", "", 1, "erp-drawer", "hostel-room-drawer", 3, "cdkTrapFocusAutoCapture"], ["lucideBedDouble", "", "size", "21", "aria-hidden", "true"], ["id", "capacity-editor-title"], ["type", "button", "aria-label", "Close capacity editor", 1, "erp-icon-button", 3, "click"], [1, "erp-drawer__body", "hostel-capacity-editor", 3, "ngSubmit"], ["readonly", "", 1, "erp-control", 3, "value"], ["name", "roomTypeChoice", 1, "erp-control", 3, "ngModelChange", "ngModel"], ["value", "custom"], ["name", "capacityChoice", 1, "erp-control", 3, "ngModelChange", "ngModel"], [1, "hostel-capacity-summary"], ["name", "customRoomType", "maxlength", "60", "placeholder", "e.g. Premium AC", 1, "erp-control", 3, "ngModelChange", "ngModel"], ["name", "customCapacity", "type", "number", "min", "1", "max", "30", 1, "erp-control", 3, "ngModelChange", "ngModel"], ["type", "button", "aria-label", "Cancel room generation", 1, "dialog-backdrop", 3, "click"], ["role", "alertdialog", "aria-modal", "true", "aria-labelledby", "room-generation-title", "cdkTrapFocus", "", 1, "dialog", "dialog--confirm", 3, "cdkTrapFocusAutoCapture"], [1, "dialog__body", "confirm-body"], ["aria-hidden", "true", 1, "confirm-icon"], ["id", "room-generation-title"], [1, "dialog__footer"], ["type", "button", "aria-label", "Close structure dialog", 1, "dialog-backdrop", 3, "click"], ["role", "dialog", "aria-modal", "true", "aria-labelledby", "structure-dialog-title", 1, "dialog"], [1, "dialog__header"], ["id", "structure-dialog-title"], ["type", "button", "aria-label", "Close dialog", 3, "click"], [3, "ngSubmit"], [1, "dialog__body", "dialog-form"], ["name", "blockName", "required", "", "maxlength", "80", "placeholder", "e.g. Main Block", "autofocus", "", 1, "erp-control", 3, "ngModelChange", "ngModel"], ["name", "floorName", "required", "", "maxlength", "80", "placeholder", "e.g. Ground Floor", "autofocus", "", 1, "erp-control", 3, "ngModelChange", "ngModel"], ["type", "button", "aria-label", "Cancel deletion", 1, "dialog-backdrop", 3, "click"], ["role", "alertdialog", "aria-modal", "true", "aria-labelledby", "hostel-delete-title", 1, "dialog", "dialog--confirm"], ["id", "hostel-delete-title"], ["type", "button", 1, "erp-button", "erp-button--danger", 3, "click", "disabled"], ["type", "button", "aria-label", "Cancel vacating room", 1, "dialog-backdrop", 3, "click"], ["role", "alertdialog", "aria-modal", "true", "aria-labelledby", "vacate-title", "cdkTrapFocus", "", 1, "dialog", "hostel-vacate-dialog", 3, "cdkTrapFocusAutoCapture"], ["id", "vacate-title"], ["type", "button", "aria-label", "Close vacate confirmation", 3, "click"], [1, "dialog__body", "hostel-vacate-body"], [1, "hostel-vacate-body__icon"], ["lucideLogOut", "", "size", "22", "aria-hidden", "true"], ["rows", "3", "placeholder", "Graduated, withdrawn or another reason", 1, "erp-control", 3, "ngModelChange", "ngModel"], ["type", "button", "autofocus", "", 1, "erp-button", "erp-button--secondary", 3, "click"]], template: function HostelManagementComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "erp-admin-page", 0)(1, "div", 1)(2, "button", 2);
            i0.ɵɵlistener("click", function HostelManagementComponent_Template_button_click_2_listener() { return ctx.loadHostels(); });
            i0.ɵɵnamespaceSVG();
            i0.ɵɵelement(3, "svg", 3);
            i0.ɵɵelementEnd();
            i0.ɵɵconditionalCreate(4, HostelManagementComponent_Conditional_4_Template, 4, 0, "button", 4)(5, HostelManagementComponent_Conditional_5_Template, 8, 0)(6, HostelManagementComponent_Conditional_6_Template, 4, 2, "button", 5)(7, HostelManagementComponent_Conditional_7_Template, 4, 0, "button", 4);
            i0.ɵɵelementEnd();
            i0.ɵɵconditionalCreate(8, HostelManagementComponent_Conditional_8_Template, 2, 1, "p", 6);
            i0.ɵɵconditionalCreate(9, HostelManagementComponent_Conditional_9_Template, 2, 1, "p", 7);
            i0.ɵɵconditionalCreate(10, HostelManagementComponent_Conditional_10_Template, 72, 12);
            i0.ɵɵconditionalCreate(11, HostelManagementComponent_Conditional_11_Template, 13, 3);
            i0.ɵɵconditionalCreate(12, HostelManagementComponent_Conditional_12_Template, 58, 19);
            i0.ɵɵconditionalCreate(13, HostelManagementComponent_Conditional_13_Template, 39, 8);
            i0.ɵɵconditionalCreate(14, HostelManagementComponent_Conditional_14_Template, 8, 2);
            i0.ɵɵnamespaceHTML();
            i0.ɵɵelementStart(15, "datalist", 8);
            i0.ɵɵrepeaterCreate(16, HostelManagementComponent_For_17_Template, 1, 1, "option", 9, i0.ɵɵrepeaterTrackByIdentity);
            i0.ɵɵelementEnd()();
            i0.ɵɵconditionalCreate(18, HostelManagementComponent_Conditional_18_Template, 50, 15, "div", 10);
            i0.ɵɵconditionalCreate(19, HostelManagementComponent_Conditional_19_Template, 27, 11, "div", 10);
            i0.ɵɵconditionalCreate(20, HostelManagementComponent_Conditional_20_Template, 62, 15, "div", 10);
            i0.ɵɵconditionalCreate(21, HostelManagementComponent_Conditional_21_Template, 17, 5, "div", 10);
            i0.ɵɵconditionalCreate(22, HostelManagementComponent_Conditional_22_Template, 62, 13, "div", 10);
            i0.ɵɵconditionalCreate(23, HostelManagementComponent_Conditional_23_Template, 51, 17, "div", 10);
            i0.ɵɵconditionalCreate(24, HostelManagementComponent_Conditional_24_Template, 15, 4, "div", 11);
            i0.ɵɵconditionalCreate(25, HostelManagementComponent_Conditional_25_Template, 25, 8, "div", 11);
            i0.ɵɵconditionalCreate(26, HostelManagementComponent_Conditional_26_Template, 16, 5, "div", 11);
            i0.ɵɵconditionalCreate(27, HostelManagementComponent_Conditional_27_Template, 46, 13, "div", 11);
        } if (rf & 2) {
            let tmp_14_0;
            let tmp_16_0;
            let tmp_17_0;
            let tmp_19_0;
            let tmp_21_0;
            i0.ɵɵproperty("title", ctx.pageTitle())("description", ctx.pageDescription());
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("disabled", ctx.loading());
            i0.ɵɵadvance(2);
            i0.ɵɵconditional(ctx.section() === "details" ? 4 : ctx.section() === "structure" ? 5 : ctx.section() === "rooms" ? 6 : ctx.section() === "allocation" ? 7 : -1);
            i0.ɵɵadvance(4);
            i0.ɵɵconditional(ctx.message() ? 8 : -1);
            i0.ɵɵadvance();
            i0.ɵɵconditional(ctx.error() && !ctx.roomsLoadFailed() && !ctx.allocationLoadFailed() && !ctx.allocationDrawerOpen() && !ctx.vacateTarget() ? 9 : -1);
            i0.ɵɵadvance();
            i0.ɵɵconditional(ctx.section() === "details" ? 10 : -1);
            i0.ɵɵadvance();
            i0.ɵɵconditional(ctx.section() === "structure" ? 11 : -1);
            i0.ɵɵadvance();
            i0.ɵɵconditional(ctx.section() === "rooms" || ctx.section() === "capacity" ? 12 : -1);
            i0.ɵɵadvance();
            i0.ɵɵconditional(ctx.section() === "allocation" ? 13 : -1);
            i0.ɵɵadvance();
            i0.ɵɵconditional(ctx.section() === "overview" ? 14 : -1);
            i0.ɵɵadvance(2);
            i0.ɵɵrepeater(ctx.sessionOptions());
            i0.ɵɵadvance(2);
            i0.ɵɵconditional(ctx.hostelEditorOpen() ? 18 : -1);
            i0.ɵɵadvance();
            i0.ɵɵconditional(ctx.allocationDrawerOpen() ? 19 : -1);
            i0.ɵɵadvance();
            i0.ɵɵconditional((tmp_14_0 = ctx.allocationDetail()) ? 20 : -1, tmp_14_0);
            i0.ɵɵadvance();
            i0.ɵɵconditional(ctx.roomEditorOpen() ? 21 : -1);
            i0.ɵɵadvance();
            i0.ɵɵconditional((tmp_16_0 = ctx.viewingRoom()) ? 22 : -1, tmp_16_0);
            i0.ɵɵadvance();
            i0.ɵɵconditional((tmp_17_0 = ctx.capacityRoom()) ? 23 : -1, tmp_17_0);
            i0.ɵɵadvance();
            i0.ɵɵconditional(ctx.generationConfirmOpen() ? 24 : -1);
            i0.ɵɵadvance();
            i0.ɵɵconditional((tmp_19_0 = ctx.structureDialog()) ? 25 : -1, tmp_19_0);
            i0.ɵɵadvance();
            i0.ɵɵconditional(ctx.deleteTarget() ? 26 : -1);
            i0.ɵɵadvance();
            i0.ɵɵconditional((tmp_21_0 = ctx.vacateTarget()) ? 27 : -1, tmp_21_0);
        } }, dependencies: [AdminPageComponent,
            CompactActionMenuComponent,
            FormsModule, i1.ɵNgNoValidate, i1.NgSelectOption, i1.ɵNgSelectMultipleOption, i1.DefaultValueAccessor, i1.NumberValueAccessor, i1.SelectControlValueAccessor, i1.NgControlStatus, i1.NgControlStatusGroup, i1.RequiredValidator, i1.MaxLengthValidator, i1.MinValidator, i1.MaxValidator, i1.NgModel, i1.NgForm, CdkTrapFocus,
            RouterLink,
            LucideArrowLeft,
            LucideArrowRight,
            LucideArrowRightLeft,
            LucideBedDouble,
            LucideBuilding2,
            LucideCheck,
            LucideCheckCircle2,
            LucideChevronDown,
            LucideDoorOpen,
            LucideFilter,
            LucideLayers3,
            LucideMapPin,
            LucideLogOut,
            LucidePlus,
            LucideRefreshCw,
            LucideSearch,
            LucideSettings2,
            LucideUserRound,
            LucideUserRoundPlus,
            LucideX,
            DatePipe,
            DecimalPipe], styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n  min-width: 0;\n}\n\n.hostel-page-actions[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: var(--erp-space-3);\n}\n\n.hostel-directory[_ngcontent-%COMP%] {\n  overflow: visible;\n}\n\n.hostel-directory__search[_ngcontent-%COMP%] {\n  flex: 1 1 320px;\n}\n\n.hostel-directory__filters[_ngcontent-%COMP%] {\n  display: flex;\n  flex: 0 1 auto;\n  gap: var(--erp-space-2);\n}\n\n.hostel-directory__filters[_ngcontent-%COMP%]   .erp-control[_ngcontent-%COMP%] {\n  width: 150px;\n}\n\n.hostel-directory__count[_ngcontent-%COMP%] {\n  min-width: max-content;\n  margin-left: auto;\n  color: var(--erp-text-muted);\n  font-size: var(--erp-font-caption);\n}\n\n.hostel-filter-toggle[_ngcontent-%COMP%] {\n  display: none;\n}\n\n.hostel-directory__table[_ngcontent-%COMP%] {\n  border-radius: 0 0 var(--erp-radius-card) var(--erp-radius-card);\n}\n\n.hostel-directory__table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  height: 70px;\n}\n\n.hostel-type[_ngcontent-%COMP%] {\n  text-transform: capitalize;\n}\n\n.hostel-editor-form[_ngcontent-%COMP%]    > .erp-field-stack[_ngcontent-%COMP%]    > small[_ngcontent-%COMP%] {\n  margin-top: var(--erp-space-1);\n  color: var(--erp-text-muted);\n  font-size: var(--erp-font-size-xs);\n}\n\n.hostel-structure-command[_ngcontent-%COMP%] {\n  align-items: center;\n  border-bottom: 0;\n  border-radius: var(--erp-radius-card);\n}\n\n.hostel-structure-command__select[_ngcontent-%COMP%] {\n  width: min(350px, 100%);\n  flex: 0 1 350px;\n}\n\n.hostel-structure-command__summary[_ngcontent-%COMP%] {\n  display: grid;\n  gap: var(--erp-space-1);\n  padding-left: var(--erp-space-4);\n  border-left: 1px solid var(--erp-border-subtle);\n}\n\n.hostel-structure-command__summary[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: var(--erp-text-heading);\n  font-size: var(--erp-font-label);\n}\n\n.hostel-structure-command__summary[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], \n.hostel-structure-command__hint[_ngcontent-%COMP%] {\n  margin: 0;\n  color: var(--erp-text-muted);\n  font-size: var(--erp-font-caption);\n}\n\n.hostel-structure-workspace[_ngcontent-%COMP%] {\n  display: grid;\n  min-height: 500px;\n  grid-template-columns: 320px minmax(0, 1fr);\n  overflow: visible;\n}\n\n.hostel-structure-tree[_ngcontent-%COMP%] {\n  display: grid;\n  min-width: 0;\n  grid-template-rows: auto minmax(0, 1fr);\n  border-right: 1px solid var(--erp-border-subtle);\n}\n\n.hostel-structure-tree__header[_ngcontent-%COMP%], \n.hostel-structure-detail__header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  gap: var(--erp-space-3);\n  padding: var(--erp-space-4) var(--erp-space-5);\n  border-bottom: 1px solid var(--erp-border-subtle);\n}\n\n.hostel-structure-tree__header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], \n.hostel-structure-detail__header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], \n.hostel-structure-detail__list[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0;\n  color: var(--erp-text-heading);\n  font-size: var(--erp-font-label);\n}\n\n.hostel-structure-tree__header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], \n.hostel-structure-detail__header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], \n.hostel-structure-detail__list[_ngcontent-%COMP%]    > p[_ngcontent-%COMP%] {\n  margin: var(--erp-space-1) 0 0;\n  color: var(--erp-text-muted);\n  font-size: var(--erp-font-size-xs);\n}\n\n.hostel-structure-tree__actions[_ngcontent-%COMP%] {\n  display: flex;\n  flex: 0 0 auto;\n  gap: var(--erp-space-2);\n}\n\n.hostel-structure-tree__scroll[_ngcontent-%COMP%] {\n  min-height: 0;\n  max-height: 560px;\n  overflow-y: auto;\n  padding: var(--erp-space-2);\n}\n\n.hostel-tree-group[_ngcontent-%COMP%]    + .hostel-tree-group[_ngcontent-%COMP%] {\n  margin-top: var(--erp-space-2);\n}\n\n.hostel-tree-group__toggle[_ngcontent-%COMP%] {\n  display: grid;\n  width: 100%;\n  min-height: 42px;\n  grid-template-columns: auto minmax(0, 1fr) auto;\n  align-items: center;\n  gap: var(--erp-space-2);\n  padding: 0 var(--erp-space-3);\n  color: var(--erp-text-strong);\n  background: transparent;\n  border: 0;\n  border-radius: var(--erp-radius-control);\n  text-align: left;\n  font-size: var(--erp-font-caption);\n  font-weight: var(--erp-weight-bold);\n  cursor: pointer;\n}\n\n.hostel-tree-group__toggle[_ngcontent-%COMP%]:hover {\n  background: var(--erp-surface-hover);\n}\n\n.hostel-tree-group__toggle[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  transition: transform var(--erp-standard-transition);\n}\n\n.hostel-tree-group__toggle[aria-expanded='false'][_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  transform: rotate(-90deg);\n}\n\n.hostel-tree-group__toggle[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  display: inline-grid;\n  min-width: 22px;\n  height: 22px;\n  place-items: center;\n  color: var(--erp-blue-700);\n  background: var(--erp-blue-50);\n  border-radius: var(--erp-radius-chip);\n}\n\n.hostel-tree-group__items[_ngcontent-%COMP%] {\n  position: relative;\n  display: grid;\n  gap: var(--erp-space-1);\n  padding: var(--erp-space-1) 0 var(--erp-space-2);\n}\n\n.hostel-tree-group__items--children[_ngcontent-%COMP%] {\n  margin-left: var(--erp-space-4);\n  padding-left: var(--erp-space-3);\n  border-left: 1px solid var(--erp-border-default);\n}\n\n.hostel-tree-row[_ngcontent-%COMP%] {\n  position: relative;\n  display: grid;\n  min-width: 0;\n  min-height: 44px;\n  grid-template-columns: minmax(0, 1fr) auto;\n  align-items: center;\n  border-radius: var(--erp-radius-control);\n  transition: var(--erp-standard-transition);\n}\n\n.hostel-tree-row[_ngcontent-%COMP%]:hover {\n  background: var(--erp-surface-hover);\n}\n\n.hostel-tree-row--selected[_ngcontent-%COMP%] {\n  background: var(--erp-blue-50);\n  box-shadow: inset 3px 0 0 var(--erp-blue-500);\n}\n\n.hostel-tree-row[_ngcontent-%COMP%]    > button[_ngcontent-%COMP%] {\n  display: flex;\n  min-width: 0;\n  min-height: 44px;\n  align-items: center;\n  gap: var(--erp-space-2);\n  padding: 0 var(--erp-space-3);\n  overflow: hidden;\n  color: var(--erp-text-body);\n  background: transparent;\n  border: 0;\n  text-align: left;\n  cursor: pointer;\n}\n\n.hostel-tree-row[_ngcontent-%COMP%]    > button[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n\n.hostel-tree-row--selected[_ngcontent-%COMP%]    > button[_ngcontent-%COMP%] {\n  color: var(--erp-text-heading);\n  font-weight: var(--erp-weight-semibold);\n}\n\n.hostel-tree-empty[_ngcontent-%COMP%] {\n  display: grid;\n  min-height: 72px;\n  place-items: center;\n  gap: var(--erp-space-1);\n  color: var(--erp-text-muted);\n  background: transparent;\n  border: 1px dashed var(--erp-border-default);\n  border-radius: var(--erp-radius-control);\n  font-size: var(--erp-font-caption);\n  cursor: pointer;\n}\n\n.hostel-tree-empty[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: var(--erp-blue-700);\n  font-weight: var(--erp-weight-semibold);\n}\n\n.hostel-structure-detail[_ngcontent-%COMP%] {\n  min-width: 0;\n}\n\n.hostel-structure-detail__header[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: auto minmax(0, 1fr) auto;\n  align-items: center;\n}\n\n.hostel-structure-detail__metrics[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, minmax(0, 1fr));\n  border-bottom: 1px solid var(--erp-border-subtle);\n}\n\n.hostel-structure-detail__metrics[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  display: grid;\n  gap: var(--erp-space-1);\n  padding: var(--erp-space-4) var(--erp-space-5);\n  border-right: 1px solid var(--erp-border-subtle);\n}\n\n.hostel-structure-detail__metrics[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%]:last-child {\n  border-right: 0;\n}\n\n.hostel-structure-detail__metrics[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  color: var(--erp-text-muted);\n  font-size: var(--erp-font-size-xs);\n}\n\n.hostel-structure-detail__metrics[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: var(--erp-text-heading);\n  font-size: var(--erp-font-size-lg);\n}\n\n.hostel-structure-detail__list[_ngcontent-%COMP%] {\n  padding: var(--erp-space-5);\n}\n\n.hostel-structure-detail__list[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:first-child {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: var(--erp-space-3);\n}\n\n.hostel-structure-detail__list[_ngcontent-%COMP%]    > button[_ngcontent-%COMP%] {\n  display: grid;\n  width: 100%;\n  min-height: 44px;\n  grid-template-columns: auto minmax(0, 1fr) auto;\n  align-items: center;\n  gap: var(--erp-space-2);\n  padding: 0 var(--erp-space-3);\n  margin-top: var(--erp-space-2);\n  color: var(--erp-text-body);\n  background: var(--erp-surface-detail-soft);\n  border: 1px solid var(--erp-border-subtle);\n  border-radius: var(--erp-radius-control);\n  text-align: left;\n  cursor: pointer;\n}\n\n.hostel-structure-detail__list[_ngcontent-%COMP%]    > button[_ngcontent-%COMP%]:hover {\n  color: var(--erp-blue-700);\n  border-color: var(--erp-border-strong);\n  background: var(--erp-blue-50);\n}\n\n.hostel-structure-detail__list[_ngcontent-%COMP%]    > button[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  color: var(--erp-text-muted);\n}\n\n.hostel-structure-detail__empty[_ngcontent-%COMP%] {\n  min-height: 498px;\n}\n\n.hostel-structure-detail__guidance[_ngcontent-%COMP%] {\n  min-height: 260px;\n}\n\n.hostel-form-grid[_ngcontent-%COMP%], \n.hostel-filter-grid[_ngcontent-%COMP%], \n.hostel-allocation-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, minmax(0, 1fr));\n  gap: var(--erp-space-3);\n}\n\n.hostel-filter-grid[_ngcontent-%COMP%], \n.hostel-allocation-grid[_ngcontent-%COMP%] {\n  grid-template-columns: repeat(4, minmax(0, 1fr));\n}\n\n.hostel-two-column[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n  gap: var(--erp-admin-section-gap);\n}\n\n.hostel-inline-form[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-end;\n  gap: var(--erp-space-3);\n  margin-bottom: var(--erp-space-4);\n}\n\n.hostel-inline-form[_ngcontent-%COMP%]   .erp-field-stack[_ngcontent-%COMP%] {\n  min-width: 0;\n  flex: 1;\n}\n\n.hostel-section-gap[_ngcontent-%COMP%] {\n  margin-top: var(--erp-admin-section-gap);\n}\n\n.hostel-select[_ngcontent-%COMP%] {\n  width: min(420px, 100%);\n}\n\n.hostel-mode-picker[_ngcontent-%COMP%] {\n  display: flex;\n  gap: var(--erp-space-4);\n  margin-bottom: var(--erp-space-3);\n}\n\n.hostel-mode-picker[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: inline-flex;\n  min-height: 44px;\n  align-items: center;\n  gap: var(--erp-space-2);\n}\n\n.hostel-room-command[_ngcontent-%COMP%] {\n  overflow: visible;\n}\n\n.hostel-room-command__controls[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, minmax(150px, 1fr)) minmax(220px, 1.35fr) auto;\n  align-items: end;\n  gap: var(--erp-space-3);\n}\n\n.hostel-room-command__session[_ngcontent-%COMP%] {\n  grid-column: span 1;\n}\n\n.hostel-room-command__search[_ngcontent-%COMP%] {\n  min-width: 0;\n  align-self: end;\n}\n\n.hostel-room-command__secondary[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: var(--erp-space-2);\n}\n\n.hostel-room-command__secondary[_ngcontent-%COMP%]   .erp-control[_ngcontent-%COMP%] {\n  min-width: 148px;\n}\n\n.hostel-room-filter-toggle[_ngcontent-%COMP%] {\n  display: none;\n}\n\n.hostel-room-command__helper[_ngcontent-%COMP%] {\n  padding: 0 var(--erp-card-padding) var(--erp-space-4);\n  margin: 0;\n  color: var(--erp-text-muted);\n  font-size: var(--erp-font-caption);\n}\n\n.hostel-location-summary[_ngcontent-%COMP%] {\n  display: grid;\n  min-height: 82px;\n  grid-template-columns: auto minmax(180px, 1fr) minmax(240px, auto) auto;\n  align-items: center;\n  gap: var(--erp-space-4);\n  padding: var(--erp-space-4) var(--erp-card-padding);\n}\n\n.hostel-location-summary__copy[_ngcontent-%COMP%], \n.hostel-location-summary__metrics[_ngcontent-%COMP%], \n.hostel-capacity-progress[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:first-child {\n  display: grid;\n  gap: var(--erp-space-1);\n}\n\n.hostel-location-summary[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%], \n.hostel-capacity-progress[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: var(--erp-text-heading);\n}\n\n.hostel-location-summary[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], \n.hostel-capacity-progress[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], \n.hostel-capacity-progress[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  color: var(--erp-text-muted);\n  font-size: var(--erp-font-caption);\n}\n\n.hostel-location-summary__metrics[_ngcontent-%COMP%] {\n  padding-left: var(--erp-space-4);\n  border-left: 1px solid var(--erp-border-subtle);\n}\n\n.hostel-capacity-progress[_ngcontent-%COMP%] {\n  display: grid;\n  min-height: 92px;\n  grid-template-columns: minmax(230px, 1fr) minmax(180px, 1.4fr) auto auto;\n  align-items: center;\n  gap: var(--erp-space-4);\n  padding: var(--erp-space-4) var(--erp-card-padding);\n}\n\n.hostel-capacity-progress__bar[_ngcontent-%COMP%] {\n  height: 8px;\n  overflow: hidden;\n  background: var(--erp-canvas-soft);\n  border-radius: var(--erp-radius-chip);\n}\n\n.hostel-capacity-progress__bar[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: block;\n  height: 100%;\n  background: var(--erp-blue-500);\n  border-radius: inherit;\n  transition: width var(--erp-standard-transition);\n}\n\n.hostel-capacity-progress__value[_ngcontent-%COMP%] {\n  min-width: 44px;\n  text-align: right;\n}\n\n.hostel-room-directory[_ngcontent-%COMP%]   .erp-table-toolbar[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  color: var(--erp-text-muted);\n  font-size: var(--erp-font-caption);\n}\n\n.hostel-room-directory[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  height: 70px;\n}\n\n.hostel-room-loading[_ngcontent-%COMP%] {\n  display: grid;\n  gap: var(--erp-space-3);\n  padding: var(--erp-card-padding);\n}\n\n.hostel-room-loading[_ngcontent-%COMP%]   .erp-skeleton[_ngcontent-%COMP%] {\n  height: 56px;\n  border-radius: var(--erp-radius-control);\n}\n\n.hostel-empty-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: var(--erp-space-2);\n}\n\n.hostel-room-drawer[_ngcontent-%COMP%] {\n  width: min(480px, 100%);\n}\n\n.hostel-room-editor[_ngcontent-%COMP%], \n.hostel-capacity-editor[_ngcontent-%COMP%] {\n  gap: var(--erp-space-5);\n}\n\n.hostel-room-editor[_ngcontent-%COMP%]   .erp-field-stack[_ngcontent-%COMP%]    > small[_ngcontent-%COMP%], \n.hostel-capacity-editor[_ngcontent-%COMP%]   .erp-field-stack[_ngcontent-%COMP%]    > small[_ngcontent-%COMP%] {\n  color: var(--erp-text-muted);\n  font-size: var(--erp-font-size-xs);\n}\n\n.hostel-segmented[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n  gap: var(--erp-space-1);\n  padding: var(--erp-space-1);\n  background: var(--erp-canvas-soft);\n  border: 1px solid var(--erp-border-subtle);\n  border-radius: var(--erp-radius-control);\n}\n\n.hostel-segmented[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  min-height: 42px;\n  padding: 0 var(--erp-space-3);\n  color: var(--erp-text-muted);\n  background: transparent;\n  border: 0;\n  border-radius: calc(var(--erp-radius-control) - 2px);\n  font: inherit;\n  font-size: var(--erp-font-caption);\n  font-weight: var(--erp-weight-semibold);\n  cursor: pointer;\n  transition: var(--erp-standard-transition);\n}\n\n.hostel-segmented[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  color: var(--erp-text-heading);\n}\n\n.hostel-segmented[_ngcontent-%COMP%]   .hostel-segmented__item--active[_ngcontent-%COMP%] {\n  color: var(--erp-blue-700);\n  background: var(--erp-surface-overlay);\n  box-shadow: var(--erp-shadow-card);\n}\n\n.hostel-generation-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n  gap: var(--erp-space-3);\n}\n\n.hostel-generation-grid[_ngcontent-%COMP%]   .erp-field-stack[_ngcontent-%COMP%]:last-child {\n  grid-column: 1 / -1;\n}\n\n.hostel-generation-preview[_ngcontent-%COMP%], \n.hostel-capacity-summary[_ngcontent-%COMP%] {\n  display: grid;\n  gap: var(--erp-space-2);\n  padding: var(--erp-space-4);\n  background: var(--erp-blue-50);\n  border: 1px solid var(--erp-border-default);\n  border-radius: var(--erp-radius-card);\n}\n\n.hostel-generation-preview[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%], \n.hostel-capacity-summary[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  color: var(--erp-blue-700);\n  font-size: var(--erp-font-size-xs);\n  font-weight: var(--erp-weight-bold);\n  letter-spacing: 0.06em;\n  text-transform: uppercase;\n}\n\n.hostel-generation-preview[_ngcontent-%COMP%]    > strong[_ngcontent-%COMP%], \n.hostel-capacity-summary[_ngcontent-%COMP%]    > strong[_ngcontent-%COMP%] {\n  color: var(--erp-text-heading);\n  font-size: var(--erp-font-label);\n}\n\n.hostel-generation-preview[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: var(--erp-space-2);\n}\n\n.hostel-generation-preview[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  padding: var(--erp-space-1) var(--erp-space-2);\n  color: var(--erp-text-body);\n  background: var(--erp-surface-overlay);\n  border: 1px solid var(--erp-border-subtle);\n  border-radius: var(--erp-radius-chip);\n}\n\n.hostel-capacity-summary[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  color: var(--erp-text-muted);\n  font-size: var(--erp-font-caption);\n}\n\n.hostel-room-details[_ngcontent-%COMP%]   dl[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n  gap: var(--erp-space-3);\n  margin: 0;\n}\n\n.hostel-room-details[_ngcontent-%COMP%]   dl[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  display: grid;\n  gap: var(--erp-space-1);\n  min-height: 72px;\n  padding: var(--erp-space-3);\n  background: var(--erp-surface-detail-soft);\n  border: 1px solid var(--erp-border-subtle);\n  border-radius: var(--erp-radius-control);\n}\n\n.hostel-room-details[_ngcontent-%COMP%]   dt[_ngcontent-%COMP%] {\n  color: var(--erp-text-muted);\n  font-size: var(--erp-font-size-xs);\n}\n\n.hostel-room-details[_ngcontent-%COMP%]   dd[_ngcontent-%COMP%] {\n  margin: 0;\n  color: var(--erp-text-heading);\n  font-weight: var(--erp-weight-semibold);\n}\n\n.hostel-filter-action[_ngcontent-%COMP%] {\n  align-self: end;\n}\n\n.hostel-form-actions[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  gap: var(--erp-space-2);\n  margin-top: var(--erp-space-4);\n}\n\n.hostel-editor-card[_ngcontent-%COMP%], \n.hostel-overview-table[_ngcontent-%COMP%] {\n  margin-top: var(--erp-admin-section-gap);\n  margin-bottom: var(--erp-admin-section-gap);\n}\n\n.hostel-overview-filter[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-end;\n  gap: var(--erp-space-3);\n}\n\n.hostel-overview-filter[_ngcontent-%COMP%]   .erp-field-stack[_ngcontent-%COMP%] {\n  width: min(320px, 100%);\n}\n\n.hostel-dialog-layer[_ngcontent-%COMP%] {\n  position: fixed;\n  z-index: var(--erp-z-modal);\n  inset: 0;\n  display: grid;\n  place-items: center;\n  padding: var(--erp-space-4);\n  background: var(--erp-backdrop);\n}\n\n.hostel-dialog-backdrop[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  border: 0;\n  background: transparent;\n}\n\n.hostel-dialog[_ngcontent-%COMP%] {\n  position: relative;\n  width: min(100%, var(--erp-modal-width));\n  padding: var(--erp-card-padding);\n  background: var(--erp-surface-overlay);\n  border: 1px solid var(--erp-border-default);\n  border-radius: var(--erp-radius-overlay);\n  box-shadow: var(--erp-shadow-overlay);\n}\n\n@media (max-width: 1000px) {\n  .hostel-two-column[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n\n  .hostel-filter-grid[_ngcontent-%COMP%], \n   .hostel-allocation-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n  }\n\n  .hostel-directory[_ngcontent-%COMP%]   .erp-command-bar[_ngcontent-%COMP%] {\n    flex-wrap: wrap;\n  }\n\n  .hostel-directory__search[_ngcontent-%COMP%] {\n    flex-basis: 100%;\n  }\n\n  .hostel-structure-workspace[_ngcontent-%COMP%] {\n    grid-template-columns: 290px minmax(0, 1fr);\n  }\n\n  .hostel-room-command__controls[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(3, minmax(0, 1fr));\n  }\n\n  .hostel-room-command__search[_ngcontent-%COMP%] {\n    grid-column: span 2;\n  }\n\n  .hostel-room-command__secondary[_ngcontent-%COMP%] {\n    justify-content: flex-end;\n  }\n\n  .hostel-location-summary[_ngcontent-%COMP%] {\n    grid-template-columns: auto minmax(0, 1fr) auto;\n  }\n\n  .hostel-location-summary__metrics[_ngcontent-%COMP%] {\n    grid-column: 2 / -1;\n    padding: var(--erp-space-3) 0 0;\n    border-top: 1px solid var(--erp-border-subtle);\n    border-left: 0;\n  }\n\n  .hostel-capacity-progress[_ngcontent-%COMP%] {\n    grid-template-columns: minmax(0, 1fr) auto;\n  }\n\n  .hostel-capacity-progress__bar[_ngcontent-%COMP%] {\n    grid-column: 1 / -1;\n    grid-row: 2;\n  }\n}\n\n@media (max-width: 720px) {\n  .hostel-form-grid[_ngcontent-%COMP%], \n   .hostel-filter-grid[_ngcontent-%COMP%], \n   .hostel-allocation-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n\n  .hostel-form-actions[_ngcontent-%COMP%], \n   .hostel-overview-filter[_ngcontent-%COMP%], \n   .hostel-inline-form[_ngcontent-%COMP%] {\n    align-items: stretch;\n    flex-direction: column;\n  }\n\n  .hostel-page-actions[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n\n  .hostel-page-actions[_ngcontent-%COMP%]    > .erp-button[_ngcontent-%COMP%], \n   .hostel-page-actions[_ngcontent-%COMP%]    > erp-compact-action-menu[_ngcontent-%COMP%] {\n    flex: 1;\n  }\n\n  .hostel-page-actions[_ngcontent-%COMP%]    > erp-compact-action-menu[_ngcontent-%COMP%] {\n    justify-content: flex-end;\n  }\n\n  .hostel-filter-toggle[_ngcontent-%COMP%] {\n    display: inline-flex;\n  }\n\n  .hostel-directory__filters[_ngcontent-%COMP%] {\n    display: none;\n    width: 100%;\n  }\n\n  .hostel-directory__filters--open[_ngcontent-%COMP%] {\n    display: grid;\n    grid-template-columns: 1fr;\n  }\n\n  .hostel-directory__filters[_ngcontent-%COMP%]   .erp-control[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n\n  .hostel-directory__count[_ngcontent-%COMP%] {\n    margin-left: 0;\n  }\n\n  .hostel-structure-command[_ngcontent-%COMP%] {\n    align-items: stretch;\n    flex-direction: column;\n  }\n\n  .hostel-structure-command__select[_ngcontent-%COMP%] {\n    width: 100%;\n    flex-basis: auto;\n  }\n\n  .hostel-structure-command__summary[_ngcontent-%COMP%] {\n    padding: var(--erp-space-3) 0 0;\n    border-top: 1px solid var(--erp-border-subtle);\n    border-left: 0;\n  }\n\n  .hostel-structure-workspace[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n\n  .hostel-structure-tree[_ngcontent-%COMP%] {\n    border-right: 0;\n    border-bottom: 1px solid var(--erp-border-subtle);\n  }\n\n  .hostel-structure-tree__scroll[_ngcontent-%COMP%] {\n    max-height: 380px;\n  }\n\n  .hostel-structure-detail__empty[_ngcontent-%COMP%] {\n    min-height: 260px;\n  }\n\n  .hostel-structure-detail__metrics[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n\n  .hostel-structure-detail__metrics[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n    border-right: 0;\n    border-bottom: 1px solid var(--erp-border-subtle);\n  }\n\n  .hostel-room-command__controls[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n\n  .hostel-room-command__search[_ngcontent-%COMP%] {\n    grid-column: auto;\n  }\n\n  .hostel-room-filter-toggle[_ngcontent-%COMP%] {\n    display: inline-flex;\n  }\n\n  .hostel-room-command__secondary[_ngcontent-%COMP%] {\n    display: none;\n    grid-template-columns: 1fr;\n  }\n\n  .hostel-room-command__secondary--open[_ngcontent-%COMP%] {\n    display: grid;\n  }\n\n  .hostel-room-command__secondary[_ngcontent-%COMP%]   .erp-control[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n\n  .hostel-location-summary[_ngcontent-%COMP%], \n   .hostel-capacity-progress[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n\n  .hostel-location-summary[_ngcontent-%COMP%]    > .erp-empty-panel__icon[_ngcontent-%COMP%] {\n    display: none;\n  }\n\n  .hostel-location-summary__metrics[_ngcontent-%COMP%], \n   .hostel-capacity-progress__bar[_ngcontent-%COMP%] {\n    grid-column: auto;\n    grid-row: auto;\n  }\n\n  .hostel-location-summary[_ngcontent-%COMP%]   .erp-button[_ngcontent-%COMP%], \n   .hostel-capacity-progress[_ngcontent-%COMP%]   .erp-button[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n\n  .hostel-capacity-progress__value[_ngcontent-%COMP%] {\n    text-align: left;\n  }\n\n  .hostel-empty-actions[_ngcontent-%COMP%], \n   .hostel-generation-grid[_ngcontent-%COMP%], \n   .hostel-room-details[_ngcontent-%COMP%]   dl[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n\n  .hostel-empty-actions[_ngcontent-%COMP%] {\n    width: 100%;\n    flex-direction: column;\n  }\n\n  .hostel-empty-actions[_ngcontent-%COMP%]   .erp-button[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n\n  .hostel-generation-grid[_ngcontent-%COMP%]   .erp-field-stack[_ngcontent-%COMP%]:last-child {\n    grid-column: auto;\n  }\n}"], changeDetection: 0 });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(HostelManagementComponent, [{
        type: Component,
        args: [{ selector: 'erp-hostel-management', imports: [
                    AdminPageComponent,
                    CompactActionMenuComponent,
                    FormsModule,
                    CdkTrapFocus,
                    RouterLink,
                    DatePipe,
                    DecimalPipe,
                    LucideArrowLeft,
                    LucideArrowRight,
                    LucideArrowRightLeft,
                    LucideBedDouble,
                    LucideBuilding2,
                    LucideCheck,
                    LucideCheckCircle2,
                    LucideChevronDown,
                    LucideDoorOpen,
                    LucideFilter,
                    LucideLayers3,
                    LucideMapPin,
                    LucideLogOut,
                    LucidePlus,
                    LucideRefreshCw,
                    LucideSearch,
                    LucideSettings2,
                    LucideUserRound,
                    LucideUserRoundPlus,
                    LucideX,
                ], changeDetection: ChangeDetectionStrategy.OnPush, template: "<erp-admin-page\n  eyebrow=\"Hostel\"\n  [title]=\"pageTitle()\"\n  [description]=\"pageDescription()\"\n  variant=\"compact\"\n  layout=\"collection\"\n>\n  <div page-actions class=\"hostel-page-actions\">\n    <button\n      class=\"erp-icon-button\"\n      type=\"button\"\n      aria-label=\"Refresh hostel data\"\n      title=\"Refresh\"\n      (click)=\"loadHostels()\"\n      [disabled]=\"loading()\"\n    >\n      <svg lucideRefreshCw size=\"18\" aria-hidden=\"true\"></svg>\n    </button>\n    @if (section() === 'details') {\n      <button class=\"erp-button erp-button--primary\" type=\"button\" (click)=\"openHostelEditor()\">\n        <svg lucidePlus size=\"17\" aria-hidden=\"true\"></svg><span>Create hostel</span>\n      </button>\n    } @else if (section() === 'structure') {\n      <button\n        class=\"erp-button erp-button--secondary\"\n        type=\"button\"\n        (click)=\"openStructureDialog('block')\"\n      >\n        <svg lucidePlus size=\"17\" aria-hidden=\"true\"></svg><span>Add block</span>\n      </button>\n      <button\n        class=\"erp-button erp-button--primary\"\n        type=\"button\"\n        (click)=\"openStructureDialog('floor')\"\n      >\n        <svg lucidePlus size=\"17\" aria-hidden=\"true\"></svg><span>Add floor</span>\n      </button>\n    } @else if (section() === 'rooms') {\n      <button\n        class=\"erp-button erp-button--primary\"\n        type=\"button\"\n        [disabled]=\"!locationReady()\"\n        [attr.title]=\"locationReady() ? 'Add rooms' : 'Select a hostel, block and floor first.'\"\n        (click)=\"openRoomEditor()\"\n      >\n        <svg lucidePlus size=\"17\" aria-hidden=\"true\"></svg><span>Add rooms</span>\n      </button>\n    } @else if (section() === 'allocation') {\n      <button class=\"erp-button erp-button--primary\" type=\"button\" (click)=\"openAllocationDrawer()\">\n        <svg lucideUserRoundPlus size=\"17\" aria-hidden=\"true\"></svg>\n        <span>Allocate student</span>\n      </button>\n    }\n  </div>\n\n  @if (message()) {\n    <p class=\"erp-notice erp-notice--success\" role=\"status\">{{ message() }}</p>\n  }\n  @if (\n    error() &&\n    !roomsLoadFailed() &&\n    !allocationLoadFailed() &&\n    !allocationDrawerOpen() &&\n    !vacateTarget()\n  ) {\n    <p class=\"erp-notice erp-notice--error\" role=\"alert\">{{ error() }}</p>\n  }\n\n  @if (section() === 'details') {\n    <section class=\"erp-metric-strip\" aria-label=\"Hostel directory summary\">\n      <article class=\"erp-metric-strip__item\">\n        <span class=\"erp-metric-strip__icon\"\n          ><svg lucideBuilding2 size=\"20\" aria-hidden=\"true\"></svg\n        ></span>\n        <span\n          ><small>Total hostels</small><strong>{{ totalHostels() }}</strong></span\n        >\n      </article>\n      <article class=\"erp-metric-strip__item\">\n        <span class=\"erp-metric-strip__icon\"\n          ><svg lucideCheckCircle2 size=\"20\" aria-hidden=\"true\"></svg\n        ></span>\n        <span\n          ><small>Active hostels</small><strong>{{ activeHostels() }}</strong></span\n        >\n      </article>\n      <article class=\"erp-metric-strip__item\">\n        <span class=\"erp-metric-strip__icon\"\n          ><svg lucideBedDouble size=\"20\" aria-hidden=\"true\"></svg\n        ></span>\n        <span\n          ><small>Planned rooms</small><strong>{{ plannedRooms() }}</strong></span\n        >\n      </article>\n      <article class=\"erp-metric-strip__item\">\n        <span class=\"erp-metric-strip__icon\"\n          ><svg lucideDoorOpen size=\"20\" aria-hidden=\"true\"></svg\n        ></span>\n        <span\n          ><small>Created rooms</small><strong>{{ createdRooms() }}</strong></span\n        >\n      </article>\n    </section>\n\n    <section class=\"erp-card hostel-directory\">\n      <div class=\"erp-command-bar\">\n        <label class=\"erp-search-control hostel-directory__search\">\n          <svg lucideSearch size=\"18\" aria-hidden=\"true\"></svg>\n          <span class=\"erp-sr-only\">Search hostels</span>\n          <input [(ngModel)]=\"hostelSearch\" placeholder=\"Search by hostel name or code\" />\n        </label>\n        <button\n          class=\"erp-button erp-button--secondary hostel-filter-toggle\"\n          type=\"button\"\n          [attr.aria-expanded]=\"mobileFiltersOpen()\"\n          (click)=\"mobileFiltersOpen.set(!mobileFiltersOpen())\"\n        >\n          <svg lucideFilter size=\"17\" aria-hidden=\"true\"></svg><span>Filters</span>\n        </button>\n        <div\n          class=\"hostel-directory__filters\"\n          [class.hostel-directory__filters--open]=\"mobileFiltersOpen()\"\n        >\n          <label>\n            <span class=\"erp-sr-only\">Hostel type</span>\n            <select class=\"erp-control\" [(ngModel)]=\"hostelTypeFilter\">\n              <option value=\"all\">All types</option>\n              <option value=\"boys\">Boys</option>\n              <option value=\"girls\">Girls</option>\n              <option value=\"co-ed\">Co-ed</option>\n            </select>\n          </label>\n          <label>\n            <span class=\"erp-sr-only\">Hostel status</span>\n            <select class=\"erp-control\" [(ngModel)]=\"hostelStatusFilter\">\n              <option value=\"all\">All statuses</option>\n              <option value=\"active\">Active</option>\n              <option value=\"inactive\">Inactive</option>\n            </select>\n          </label>\n        </div>\n        <span class=\"hostel-directory__count\">{{ visibleHostels().length }} results</span>\n      </div>\n\n      @if (loading()) {\n        <div class=\"erp-state-panel\" role=\"status\">\n          <span class=\"erp-spinner\" aria-hidden=\"true\"></span><span>Loading hostels\u2026</span>\n        </div>\n      } @else if (!hostels().length) {\n        <div class=\"erp-empty-panel\">\n          <span class=\"erp-empty-panel__icon\"\n            ><svg lucideBuilding2 size=\"24\" aria-hidden=\"true\"></svg\n          ></span>\n          <h2>No hostels configured</h2>\n          <p>Create the first hostel before adding blocks, floors and rooms.</p>\n          <button class=\"erp-button erp-button--primary\" type=\"button\" (click)=\"openHostelEditor()\">\n            <svg lucidePlus size=\"17\" aria-hidden=\"true\"></svg><span>Create hostel</span>\n          </button>\n        </div>\n      } @else {\n        <div class=\"erp-table-shell erp-table-shell__scroll hostel-directory__table\">\n          <table>\n            <thead>\n              <tr>\n                <th>Hostel</th>\n                <th>Type</th>\n                <th>Structure</th>\n                <th>Rooms</th>\n                @if (section() === 'rooms') {\n                  <th>Status</th>\n                }\n                <th class=\"erp-table-shell__actions\">Actions</th>\n              </tr>\n            </thead>\n            <tbody>\n              @for (hostel of visibleHostels(); track hostel._id) {\n                <tr>\n                  <td>\n                    <strong>{{ hostel.name }}</strong\n                    ><small>{{ hostel.code }}</small>\n                  </td>\n                  <td>\n                    <span class=\"hostel-type\">{{ hostel.type }}</span>\n                  </td>\n                  <td>\n                    <strong>{{ hostel.blockCount }} blocks</strong\n                    ><small>{{ hostel.floorCount || 0 }} floors</small>\n                  </td>\n                  <td>\n                    <strong>{{ hostel.roomCount }} created</strong\n                    ><small>{{ hostel.plannedRoomCount || 0 }} planned</small>\n                  </td>\n                  <td>\n                    <span class=\"erp-status\" [class.erp-status--neutral]=\"!hostel.isActive\">\n                      {{ hostel.isActive ? 'Active' : 'Inactive' }}\n                    </span>\n                  </td>\n                  <td class=\"erp-table-shell__actions\">\n                    <erp-compact-action-menu\n                      [items]=\"hostelActions(hostel)\"\n                      (selected)=\"handleHostelAction($event, hostel)\"\n                    />\n                  </td>\n                </tr>\n              } @empty {\n                <tr>\n                  <td colspan=\"6\" class=\"erp-empty-state erp-empty-state--compact\">\n                    No hostels match the current filters.\n                  </td>\n                </tr>\n              }\n            </tbody>\n          </table>\n        </div>\n      }\n    </section>\n  }\n\n  @if (section() === 'structure') {\n    <section class=\"erp-card erp-command-bar hostel-structure-command\">\n      <label class=\"erp-field-stack hostel-structure-command__select\">\n        <span>Hostel</span>\n        <select\n          class=\"erp-control\"\n          [(ngModel)]=\"selectedHostelId\"\n          (ngModelChange)=\"hostelSelectionChanged()\"\n        >\n          <option value=\"\">Select hostel</option>\n          @for (hostel of hostels(); track hostel._id) {\n            <option [value]=\"hostel._id\">{{ hostel.name }}</option>\n          }\n        </select>\n      </label>\n      @if (selectedHostel(); as hostel) {\n        <div class=\"hostel-structure-command__summary\">\n          <strong>{{ hostel.name }}</strong>\n          <span\n            >{{ blocks().length }} blocks \u00B7 {{ floors().length }} floors \u00B7\n            {{ rooms().length }} rooms</span\n          >\n        </div>\n      } @else {\n        <p class=\"hostel-structure-command__hint\">\n          Choose a hostel to manage its blocks and floors.\n        </p>\n      }\n    </section>\n\n    @if (!selectedHostelId) {\n      <section class=\"erp-card erp-empty-panel hostel-section-gap\">\n        <span class=\"erp-empty-panel__icon\"\n          ><svg lucideBuilding2 size=\"24\" aria-hidden=\"true\"></svg\n        ></span>\n        <h2>Select a hostel</h2>\n        <p>Choose a hostel to manage its blocks and floors.</p>\n      </section>\n    } @else {\n      <section class=\"erp-card hostel-structure-workspace hostel-section-gap\">\n        <aside class=\"hostel-structure-tree\" aria-label=\"Hostel structure navigator\">\n          <header class=\"hostel-structure-tree__header\">\n            <div>\n              <h2>Structure</h2>\n              <p>Blocks and hostel-wide floors</p>\n            </div>\n            <div class=\"hostel-structure-tree__actions\" aria-label=\"Structure creation actions\">\n              <button\n                class=\"erp-icon-button\"\n                type=\"button\"\n                aria-label=\"Add block\"\n                title=\"Add block\"\n                (click)=\"openStructureDialog('block')\"\n              >\n                <svg lucideLayers3 size=\"17\" aria-hidden=\"true\"></svg>\n              </button>\n              <button\n                class=\"erp-icon-button\"\n                type=\"button\"\n                aria-label=\"Add floor\"\n                title=\"Add floor\"\n                (click)=\"openStructureDialog('floor')\"\n              >\n                <svg lucidePlus size=\"17\" aria-hidden=\"true\"></svg>\n              </button>\n            </div>\n          </header>\n\n          @if (loading()) {\n            <div class=\"erp-state-panel\" role=\"status\">\n              <span class=\"erp-spinner\" aria-hidden=\"true\"></span>\n            </div>\n          } @else {\n            <div class=\"hostel-structure-tree__scroll\">\n              <section class=\"hostel-tree-group\">\n                <button\n                  class=\"hostel-tree-group__toggle\"\n                  type=\"button\"\n                  [attr.aria-expanded]=\"blocksExpanded()\"\n                  (click)=\"blocksExpanded.set(!blocksExpanded())\"\n                >\n                  <svg lucideChevronDown size=\"17\" aria-hidden=\"true\"></svg>\n                  <span>Blocks</span><small>{{ blocks().length }}</small>\n                </button>\n                @if (blocksExpanded()) {\n                  <div class=\"hostel-tree-group__items\">\n                    @for (block of blocks(); track block._id) {\n                      <div\n                        class=\"hostel-tree-row hostel-tree-row--parent\"\n                        [class.hostel-tree-row--selected]=\"\n                          selectedStructureKind() === 'block' && selectedStructureId() === block._id\n                        \"\n                      >\n                        <button type=\"button\" (click)=\"selectStructure('block', block._id)\">\n                          <svg lucideLayers3 size=\"17\" aria-hidden=\"true\"></svg\n                          ><span>{{ block.name }}</span>\n                        </button>\n                        <erp-compact-action-menu\n                          [items]=\"blockActions\"\n                          (selected)=\"handleBlockAction($event, block)\"\n                        />\n                      </div>\n                    } @empty {\n                      <button\n                        class=\"hostel-tree-empty\"\n                        type=\"button\"\n                        (click)=\"openStructureDialog('block')\"\n                      >\n                        No blocks configured <span>Add first block</span>\n                      </button>\n                    }\n                  </div>\n                }\n              </section>\n\n              <section class=\"hostel-tree-group\">\n                <button\n                  class=\"hostel-tree-group__toggle\"\n                  type=\"button\"\n                  [attr.aria-expanded]=\"floorsExpanded()\"\n                  (click)=\"floorsExpanded.set(!floorsExpanded())\"\n                >\n                  <svg lucideChevronDown size=\"17\" aria-hidden=\"true\"></svg>\n                  <span>Hostel-wide floors</span><small>{{ floors().length }}</small>\n                </button>\n                @if (floorsExpanded()) {\n                  <div class=\"hostel-tree-group__items hostel-tree-group__items--children\">\n                    @for (floor of floors(); track floor._id) {\n                      <div\n                        class=\"hostel-tree-row hostel-tree-row--child\"\n                        [class.hostel-tree-row--selected]=\"\n                          selectedStructureKind() === 'floor' && selectedStructureId() === floor._id\n                        \"\n                      >\n                        <button type=\"button\" (click)=\"selectStructure('floor', floor._id)\">\n                          <svg lucideDoorOpen size=\"16\" aria-hidden=\"true\"></svg\n                          ><span>{{ floor.name }}</span>\n                        </button>\n                        <erp-compact-action-menu\n                          [items]=\"floorActions\"\n                          (selected)=\"handleFloorAction($event, floor)\"\n                        />\n                      </div>\n                    } @empty {\n                      <button\n                        class=\"hostel-tree-empty\"\n                        type=\"button\"\n                        (click)=\"openStructureDialog('floor')\"\n                      >\n                        No floors configured <span>Add first floor</span>\n                      </button>\n                    }\n                  </div>\n                }\n              </section>\n            </div>\n          }\n        </aside>\n\n        <div class=\"hostel-structure-detail\">\n          @if (selectedBlock(); as block) {\n            <header class=\"hostel-structure-detail__header\">\n              <span class=\"erp-empty-panel__icon\"\n                ><svg lucideLayers3 size=\"22\" aria-hidden=\"true\"></svg\n              ></span>\n              <div>\n                <h2>{{ block.name }}</h2>\n                <p>Block \u00B7 {{ selectedHostel()?.name }}</p>\n              </div>\n              <erp-compact-action-menu\n                [items]=\"blockActions\"\n                (selected)=\"handleBlockAction($event, block)\"\n              />\n            </header>\n            <div class=\"hostel-structure-detail__metrics\">\n              <span\n                ><small>Hostel-wide floors</small><strong>{{ floors().length }}</strong></span\n              >\n              <span\n                ><small>Rooms in block</small><strong>{{ roomsForBlock(block) }}</strong></span\n              >\n              <span\n                ><small>Status</small\n                ><strong>{{ selectedHostel()?.isActive ? 'Active' : 'Inactive' }}</strong></span\n              >\n            </div>\n            <section class=\"hostel-structure-detail__list\">\n              <div>\n                <h3>Available floor definitions</h3>\n                <button\n                  class=\"erp-button erp-button--secondary erp-button--compact\"\n                  type=\"button\"\n                  (click)=\"openStructureDialog('floor')\"\n                >\n                  <svg lucidePlus size=\"15\" aria-hidden=\"true\"></svg>Add floor\n                </button>\n              </div>\n              <p>\n                Floors are currently defined at hostel level and can be used with any block when\n                rooms are created.\n              </p>\n              @for (floor of floors(); track floor._id) {\n                <button type=\"button\" (click)=\"selectStructure('floor', floor._id)\">\n                  <svg lucideDoorOpen size=\"16\" aria-hidden=\"true\"></svg\n                  ><span>{{ floor.name }}</span\n                  ><small>{{ roomsForFloor(floor) }} rooms</small>\n                </button>\n              } @empty {\n                <div class=\"erp-empty-state erp-empty-state--compact\">\n                  No floor definitions yet.\n                </div>\n              }\n            </section>\n          } @else if (selectedFloor(); as floor) {\n            <header class=\"hostel-structure-detail__header\">\n              <span class=\"erp-empty-panel__icon\"\n                ><svg lucideDoorOpen size=\"22\" aria-hidden=\"true\"></svg\n              ></span>\n              <div>\n                <h2>{{ floor.name }}</h2>\n                <p>Hostel-wide floor \u00B7 {{ selectedHostel()?.name }}</p>\n              </div>\n              <erp-compact-action-menu\n                [items]=\"floorActions\"\n                (selected)=\"handleFloorAction($event, floor)\"\n              />\n            </header>\n            <div class=\"hostel-structure-detail__metrics\">\n              <span\n                ><small>Rooms on floor</small><strong>{{ roomsForFloor(floor) }}</strong></span\n              >\n              <span\n                ><small>Available blocks</small><strong>{{ blocks().length }}</strong></span\n              >\n              <span\n                ><small>Status</small\n                ><strong>{{ selectedHostel()?.isActive ? 'Active' : 'Inactive' }}</strong></span\n              >\n            </div>\n            <div class=\"erp-empty-panel hostel-structure-detail__guidance\">\n              <p>\n                This floor is available across the selected hostel. Room-to-block assignment happens\n                during room creation.\n              </p>\n            </div>\n          } @else {\n            <div class=\"erp-empty-panel hostel-structure-detail__empty\">\n              <span class=\"erp-empty-panel__icon\"\n                ><svg lucideLayers3 size=\"24\" aria-hidden=\"true\"></svg\n              ></span>\n              <h2>Select a block or floor</h2>\n              <p>Choose an item from the structure navigator to view its details.</p>\n            </div>\n          }\n        </div>\n      </section>\n    }\n  }\n\n  @if (section() === 'rooms' || section() === 'capacity') {\n    <section class=\"erp-card hostel-room-command\">\n      <div class=\"erp-command-bar hostel-room-command__controls\">\n        @if (section() === 'capacity') {\n          <label class=\"erp-field-stack hostel-room-command__session\">\n            <span>Academic session *</span>\n            <input\n              class=\"erp-control\"\n              [(ngModel)]=\"academicSession\"\n              list=\"hostel-session-options\"\n              (change)=\"sessionChanged()\"\n            />\n          </label>\n        }\n        <label class=\"erp-field-stack hostel-room-command__hostel\">\n          <span>Hostel *</span>\n          <select\n            class=\"erp-control\"\n            [(ngModel)]=\"selectedHostelId\"\n            (ngModelChange)=\"hostelSelectionChanged()\"\n          >\n            <option value=\"\">Select hostel</option>\n            @for (hostel of hostels(); track hostel._id) {\n              <option [value]=\"hostel._id\">{{ hostel.name }}</option>\n            }\n          </select>\n        </label>\n        <label class=\"erp-field-stack hostel-room-command__block\">\n          <span>Block *</span>\n          <select\n            class=\"erp-control\"\n            [(ngModel)]=\"selectedBlockId\"\n            [disabled]=\"!selectedHostelId\"\n            [attr.title]=\"!selectedHostelId ? 'Select a hostel first.' : null\"\n            (ngModelChange)=\"blockSelectionChanged()\"\n          >\n            <option value=\"\">Select block</option>\n            @for (block of blocks(); track block._id) {\n              <option [value]=\"block._id\">{{ block.name }}</option>\n            }\n          </select>\n        </label>\n        <label class=\"erp-field-stack hostel-room-command__floor\">\n          <span>Floor *</span>\n          <select\n            class=\"erp-control\"\n            [(ngModel)]=\"selectedFloorId\"\n            [disabled]=\"!selectedBlockId\"\n            [attr.title]=\"!selectedBlockId ? 'Select a block first.' : null\"\n            (ngModelChange)=\"floorSelectionChanged()\"\n          >\n            <option value=\"\">Select floor</option>\n            @for (floor of floorOptions(); track floor._id) {\n              <option [value]=\"floor._id\">{{ floor.name }}</option>\n            }\n          </select>\n        </label>\n        <label class=\"erp-search-control hostel-room-command__search\">\n          <svg lucideSearch size=\"18\" aria-hidden=\"true\"></svg>\n          <span class=\"erp-sr-only\">Search room number</span>\n          <input [(ngModel)]=\"roomSearch\" placeholder=\"Search room number\" />\n        </label>\n        <button\n          class=\"erp-button erp-button--secondary hostel-room-filter-toggle\"\n          type=\"button\"\n          [attr.aria-expanded]=\"roomFiltersOpen()\"\n          (click)=\"roomFiltersOpen.set(!roomFiltersOpen())\"\n        >\n          <svg lucideFilter size=\"17\" aria-hidden=\"true\"></svg><span>Filters</span>\n        </button>\n        <div\n          class=\"hostel-room-command__secondary\"\n          [class.hostel-room-command__secondary--open]=\"roomFiltersOpen()\"\n        >\n          <label>\n            <span class=\"erp-sr-only\">Configuration status</span>\n            <select class=\"erp-control\" [(ngModel)]=\"roomConfigurationFilter\">\n              <option value=\"all\">All rooms</option>\n              <option value=\"configured\">Configured</option>\n              <option value=\"unconfigured\">Not configured</option>\n              @if (section() === 'capacity') {\n                <option value=\"disabled\">Disabled</option>\n              }\n            </select>\n          </label>\n          @if (section() === 'rooms') {\n            <label>\n              <span class=\"erp-sr-only\">Room status</span>\n              <select class=\"erp-control\" [(ngModel)]=\"roomStatusFilter\">\n                <option value=\"all\">All statuses</option>\n                <option value=\"active\">Active</option>\n                <option value=\"disabled\">Disabled</option>\n              </select>\n            </label>\n          }\n        </div>\n      </div>\n      @if (!locationReady()) {\n        <p class=\"hostel-room-command__helper\">\n          Select a hostel, block and floor to view rooms and enable contextual actions.\n        </p>\n      }\n    </section>\n\n    @if (section() === 'rooms' && locationReady()) {\n      <section class=\"erp-card hostel-location-summary hostel-section-gap\">\n        <span class=\"erp-empty-panel__icon\">\n          <svg lucideBuilding2 size=\"21\" aria-hidden=\"true\"></svg>\n        </span>\n        <div class=\"hostel-location-summary__copy\">\n          <strong>{{ selectedHostel()?.name }}</strong>\n          <span>{{ selectedBlockOption()?.name }} / {{ selectedFloorOption()?.name }}</span>\n        </div>\n        <div class=\"hostel-location-summary__metrics\">\n          <strong>{{ locationRooms().length }} rooms \u00B7 {{ locationBedCount() }} beds</strong>\n          <span\n            >{{ configuredRoomCount() }} configured \u00B7\n            {{ locationRooms().length - configuredRoomCount() }} need capacity</span\n          >\n        </div>\n        <button\n          class=\"erp-button erp-button--secondary\"\n          type=\"button\"\n          (click)=\"openRoomEditor('automatic')\"\n        >\n          Generate rooms\n        </button>\n      </section>\n    }\n\n    @if (section() === 'capacity' && academicSession && locationReady() && locationRooms().length) {\n      <section class=\"erp-card hostel-capacity-progress hostel-section-gap\">\n        <div>\n          <span>Room capacity setup</span>\n          <strong\n            >{{ configuredRoomCount() }} of {{ locationRooms().length }} rooms configured</strong\n          >\n          <small\n            >{{ locationRooms().length - configuredRoomCount() }} rooms still require capacity\n            configuration.</small\n          >\n        </div>\n        <div\n          class=\"hostel-capacity-progress__bar\"\n          role=\"progressbar\"\n          aria-label=\"Room capacity configuration progress\"\n          aria-valuemin=\"0\"\n          aria-valuemax=\"100\"\n          [attr.aria-valuenow]=\"capacityProgress()\"\n        >\n          <span [style.width.%]=\"capacityProgress()\"></span>\n        </div>\n        <strong class=\"hostel-capacity-progress__value\">{{ capacityProgress() }}%</strong>\n        @if (nextUnconfiguredRoom(); as room) {\n          <button\n            class=\"erp-button erp-button--secondary\"\n            type=\"button\"\n            (click)=\"openCapacity(room)\"\n          >\n            Configure next room\n          </button>\n        } @else {\n          <span class=\"erp-status\">Setup complete</span>\n        }\n      </section>\n    }\n\n    @if (section() === 'capacity' && !academicSession) {\n      <section class=\"erp-card erp-empty-panel hostel-section-gap\">\n        <span class=\"erp-empty-panel__icon\">\n          <svg lucideBedDouble size=\"24\" aria-hidden=\"true\"></svg>\n        </span>\n        <h2>Select an academic session</h2>\n        <p>Capacity is configured independently for each academic session.</p>\n      </section>\n    } @else if (!locationReady()) {\n      <section class=\"erp-card erp-empty-panel hostel-section-gap\">\n        <span class=\"erp-empty-panel__icon\">\n          <svg lucideMapPin size=\"24\" aria-hidden=\"true\"></svg>\n        </span>\n        <h2>\n          {{ section() === 'capacity' ? 'Select hostel location' : 'Select a room location' }}\n        </h2>\n        <p>Choose a hostel, block and floor to view or create rooms.</p>\n      </section>\n    } @else if (loading()) {\n      <section class=\"erp-card hostel-room-loading hostel-section-gap\" role=\"status\">\n        @for (row of [1, 2, 3, 4]; track row) {\n          <span class=\"erp-skeleton\"></span>\n        }\n        <span class=\"erp-sr-only\">Loading rooms\u2026</span>\n      </section>\n    } @else if (roomsLoadFailed()) {\n      <section class=\"erp-card erp-empty-panel hostel-section-gap\" role=\"alert\">\n        <span class=\"erp-empty-panel__icon\">\n          <svg lucideRefreshCw size=\"24\" aria-hidden=\"true\"></svg>\n        </span>\n        <h2>Rooms could not be loaded</h2>\n        <p>{{ error() || 'Check your connection and try loading this location again.' }}</p>\n        <button class=\"erp-button erp-button--secondary\" type=\"button\" (click)=\"loadRooms()\">\n          Retry\n        </button>\n      </section>\n    } @else if (!locationRooms().length) {\n      <section class=\"erp-card erp-empty-panel hostel-section-gap\">\n        <span class=\"erp-empty-panel__icon\">\n          <svg lucideDoorOpen size=\"24\" aria-hidden=\"true\"></svg>\n        </span>\n        <h2>No rooms on this floor</h2>\n        <p>\n          {{\n            section() === 'capacity'\n              ? 'Create rooms before configuring capacity.'\n              : 'Create one room manually or generate a room sequence.'\n          }}\n        </p>\n        @if (section() === 'rooms') {\n          <div class=\"hostel-empty-actions\">\n            <button\n              class=\"erp-button erp-button--secondary\"\n              type=\"button\"\n              (click)=\"openRoomEditor('manual')\"\n            >\n              Create room\n            </button>\n            <button\n              class=\"erp-button erp-button--primary\"\n              type=\"button\"\n              (click)=\"openRoomEditor('automatic')\"\n            >\n              Generate rooms\n            </button>\n          </div>\n        } @else {\n          <a\n            class=\"erp-button erp-button--secondary\"\n            routerLink=\"/admin/master-data/hostel/rooms\"\n            [queryParams]=\"{\n              hostel: selectedHostelId,\n              block: selectedBlockId,\n              floor: selectedFloorId,\n            }\"\n          >\n            Go to Rooms\n          </a>\n        }\n      </section>\n    } @else {\n      <section class=\"erp-card erp-table-shell hostel-room-directory hostel-section-gap\">\n        <div class=\"erp-table-toolbar\">\n          <h2>\n            {{ section() === 'capacity' ? 'Room capacity' : 'Room directory' }}\n            <small>{{ visibleRooms().length }}</small>\n          </h2>\n          <span>{{ locationLabel() }}</span>\n        </div>\n        <div class=\"erp-table-shell__scroll\">\n          <table>\n            <thead>\n              <tr>\n                <th>Room</th>\n                <th>Location</th>\n                <th>Room type</th>\n                <th>{{ section() === 'capacity' ? 'Seater' : 'Capacity' }}</th>\n                @if (section() === 'capacity') {\n                  <th>Academic session</th>\n                  <th>Occupancy</th>\n                }\n                <th>Configuration</th>\n                <th>Status</th>\n                <th class=\"erp-table-shell__actions\">Actions</th>\n              </tr>\n            </thead>\n            <tbody>\n              @for (room of visibleRooms(); track room._id) {\n                <tr>\n                  <td>\n                    <strong>{{ room.roomNumber }}</strong>\n                  </td>\n                  <td>\n                    <strong>{{ room.blockName }}</strong\n                    ><small>{{ room.floorName }}</small>\n                  </td>\n                  <td>{{ room.configuredForSession ? room.roomType : '\u2014' }}</td>\n                  <td>\n                    {{ room.configuredForSession ? room.capacity + ' seater' : '\u2014' }}\n                  </td>\n                  @if (section() === 'capacity') {\n                    <td>{{ academicSession }}</td>\n                    <td>{{ room.occupiedBeds.length }} / {{ room.capacity || 0 }} occupied</td>\n                  }\n                  <td>\n                    <span\n                      class=\"erp-status\"\n                      [class.erp-status--warning]=\"room.isActive && !room.configuredForSession\"\n                      [class.erp-status--neutral]=\"!room.isActive\"\n                    >\n                      {{\n                        !room.isActive\n                          ? 'Disabled'\n                          : room.configuredForSession\n                            ? 'Configured'\n                            : 'Needs configuration'\n                      }}\n                    </span>\n                  </td>\n                  @if (section() === 'rooms') {\n                    <td>\n                      <span class=\"erp-status\" [class.erp-status--neutral]=\"!room.isActive\">\n                        {{ room.isActive ? 'Active' : 'Disabled' }}\n                      </span>\n                    </td>\n                  }\n                  <td class=\"erp-table-shell__actions\">\n                    <erp-compact-action-menu\n                      [items]=\"section() === 'rooms' ? roomActions(room) : capacityActions(room)\"\n                      (selected)=\"\n                        section() === 'rooms'\n                          ? handleRoomAction($event, room)\n                          : handleCapacityAction($event, room)\n                      \"\n                    />\n                  </td>\n                </tr>\n              } @empty {\n                <tr>\n                  <td\n                    [attr.colspan]=\"section() === 'capacity' ? 8 : 7\"\n                    class=\"erp-empty-state erp-empty-state--compact\"\n                  >\n                    No rooms match the current search and filters.\n                  </td>\n                </tr>\n              }\n            </tbody>\n          </table>\n        </div>\n      </section>\n    }\n  }\n\n  @if (section() === 'allocation') {\n    <section class=\"erp-card hostel-allocation-command\">\n      <div class=\"erp-command-bar hostel-allocation-command__controls\">\n        <label class=\"erp-field-stack hostel-allocation-command__session\">\n          <span>Academic session</span>\n          <input\n            class=\"erp-control\"\n            [(ngModel)]=\"allocationBrowseSession\"\n            list=\"hostel-session-options\"\n            (change)=\"allocationBrowseChanged()\"\n          />\n        </label>\n        <label class=\"erp-search-control hostel-allocation-command__search\">\n          <svg lucideSearch size=\"18\" aria-hidden=\"true\"></svg>\n          <span class=\"erp-sr-only\">Search active allocations</span>\n          <input\n            [(ngModel)]=\"allocationSearch\"\n            placeholder=\"Search student, application, hostel or room\"\n          />\n        </label>\n        <button\n          class=\"erp-button erp-button--secondary hostel-allocation-filter-toggle\"\n          type=\"button\"\n          [attr.aria-expanded]=\"allocationFiltersOpen()\"\n          (click)=\"allocationFiltersOpen.set(!allocationFiltersOpen())\"\n        >\n          <svg lucideFilter size=\"17\" aria-hidden=\"true\"></svg><span>Filters</span>\n        </button>\n        <div\n          class=\"hostel-allocation-command__filters\"\n          [class.hostel-allocation-command__filters--open]=\"allocationFiltersOpen()\"\n        >\n          <label>\n            <span class=\"erp-sr-only\">Filter by hostel</span>\n            <select\n              class=\"erp-control\"\n              [(ngModel)]=\"allocationBrowseHostelId\"\n              (ngModelChange)=\"allocationBrowseChanged()\"\n            >\n              <option value=\"\">All hostels</option>\n              @for (hostel of hostels(); track hostel._id) {\n                <option [value]=\"hostel._id\">{{ hostel.name }}</option>\n              }\n            </select>\n          </label>\n          <label>\n            <span class=\"erp-sr-only\">Filter by allocation status</span>\n            <select\n              class=\"erp-control\"\n              [(ngModel)]=\"allocationStatusFilter\"\n              (ngModelChange)=\"allocationBrowseChanged()\"\n            >\n              <option value=\"active\">Active allocations</option>\n              <option value=\"vacated\">Vacated allocations</option>\n              <option value=\"all\">All statuses</option>\n            </select>\n          </label>\n        </div>\n      </div>\n    </section>\n\n    @if (allocationLoading()) {\n      <section class=\"erp-card hostel-room-loading hostel-section-gap\" role=\"status\">\n        @for (row of [1, 2, 3, 4]; track row) {\n          <span class=\"erp-skeleton\"></span>\n        }\n        <span class=\"erp-sr-only\">Loading hostel allocations\u2026</span>\n      </section>\n    } @else if (allocationLoadFailed()) {\n      <section class=\"erp-card erp-empty-panel hostel-section-gap\" role=\"alert\">\n        <span class=\"erp-empty-panel__icon\"\n          ><svg lucideRefreshCw size=\"24\" aria-hidden=\"true\"></svg\n        ></span>\n        <h2>Allocations could not be loaded</h2>\n        <p>{{ error() || 'Check your connection and try again.' }}</p>\n        <button class=\"erp-button erp-button--secondary\" type=\"button\" (click)=\"loadAllocations()\">\n          Retry\n        </button>\n      </section>\n    } @else if (!allocations().length) {\n      <section class=\"erp-card erp-empty-panel hostel-section-gap\">\n        <span class=\"erp-empty-panel__icon\"\n          ><svg lucideBedDouble size=\"24\" aria-hidden=\"true\"></svg\n        ></span>\n        <h2>No {{ allocationStatusFilter === 'active' ? 'active hostel ' : '' }}allocations</h2>\n        <p>Allocate a configured room and available bed to an eligible student.</p>\n        <button\n          class=\"erp-button erp-button--primary\"\n          type=\"button\"\n          (click)=\"openAllocationDrawer()\"\n        >\n          <svg lucideUserRoundPlus size=\"17\" aria-hidden=\"true\"></svg><span>Allocate student</span>\n        </button>\n      </section>\n    } @else if (!visibleAllocations().length) {\n      <section class=\"erp-card erp-empty-panel hostel-section-gap\">\n        <span class=\"erp-empty-panel__icon\"\n          ><svg lucideSearch size=\"24\" aria-hidden=\"true\"></svg\n        ></span>\n        <h2>No matching allocations</h2>\n        <p>Adjust your search or browse filters.</p>\n        <button\n          class=\"erp-button erp-button--secondary\"\n          type=\"button\"\n          (click)=\"clearAllocationFilters()\"\n        >\n          Clear filters\n        </button>\n      </section>\n    } @else {\n      <section class=\"erp-card erp-table-shell hostel-allocation-directory hostel-section-gap\">\n        <div class=\"erp-table-toolbar\">\n          <h2>\n            {{\n              allocationStatusFilter === 'active' ? 'Active allocations' : 'Allocation directory'\n            }}\n            <small>{{ visibleAllocations().length }}</small>\n          </h2>\n        </div>\n        <div class=\"erp-table-shell__scroll\">\n          <table>\n            <thead>\n              <tr>\n                <th>Student</th>\n                <th>Session</th>\n                <th>Hostel</th>\n                <th>Room / Bed</th>\n                <th>Allocated</th>\n                <th>Status</th>\n                <th class=\"erp-table-shell__actions\">Actions</th>\n              </tr>\n            </thead>\n            <tbody>\n              @for (allocation of visibleAllocations(); track allocation._id) {\n                <tr>\n                  <td>\n                    <strong>{{ allocation.studentName }}</strong\n                    ><small>{{ allocation.studentApplicationNumber }}</small>\n                  </td>\n                  <td>{{ allocation.academicSession }}</td>\n                  <td>\n                    {{ allocation.hostelName\n                    }}<small>{{ allocation.blockName }} \u00B7 {{ allocation.floorName }}</small>\n                  </td>\n                  <td>\n                    <strong>{{ allocation.roomNumber }}</strong\n                    ><small>Bed {{ allocation.bedNumber }}</small>\n                  </td>\n                  <td>{{ allocation.allocatedAt | date: 'mediumDate' }}</td>\n                  <td>\n                    <span\n                      class=\"erp-status\"\n                      [class.erp-status--neutral]=\"allocation.status !== 'active'\"\n                    >\n                      {{ allocation.status === 'active' ? 'Active' : 'Vacated' }}\n                    </span>\n                  </td>\n                  <td class=\"erp-table-shell__actions\">\n                    <erp-compact-action-menu\n                      [items]=\"allocationActions(allocation)\"\n                      (selected)=\"handleAllocationAction($event, allocation)\"\n                    />\n                  </td>\n                </tr>\n              }\n            </tbody>\n          </table>\n        </div>\n      </section>\n\n      <section class=\"hostel-allocation-cards hostel-section-gap\" aria-label=\"Allocation directory\">\n        @for (allocation of visibleAllocations(); track allocation._id) {\n          <article class=\"erp-card hostel-allocation-card\">\n            <div class=\"hostel-allocation-card__head\">\n              <span class=\"hostel-student-avatar\">{{ allocation.studentName.slice(0, 1) }}</span>\n              <div>\n                <strong>{{ allocation.studentName }}</strong>\n                <small\n                  >{{ allocation.studentApplicationNumber }} \u00B7\n                  {{ allocation.academicSession }}</small\n                >\n              </div>\n              <erp-compact-action-menu\n                [items]=\"allocationActions(allocation)\"\n                (selected)=\"handleAllocationAction($event, allocation)\"\n              />\n            </div>\n            <dl>\n              <div>\n                <dt>Hostel</dt>\n                <dd>{{ allocation.hostelName }}</dd>\n              </div>\n              <div>\n                <dt>Location</dt>\n                <dd>{{ allocation.blockName }} \u00B7 {{ allocation.floorName }}</dd>\n              </div>\n              <div>\n                <dt>Room / Bed</dt>\n                <dd>{{ allocation.roomNumber }} \u00B7 Bed {{ allocation.bedNumber }}</dd>\n              </div>\n              <div>\n                <dt>Status</dt>\n                <dd>{{ allocation.status === 'active' ? 'Active' : 'Vacated' }}</dd>\n              </div>\n            </dl>\n          </article>\n        }\n      </section>\n    }\n  }\n\n  @if (section() === 'overview') {\n    <section class=\"erp-card erp-card--padded hostel-overview-filter\">\n      <label class=\"erp-field-stack\"\n        ><span>Academic session</span\n        ><input\n          class=\"erp-control\"\n          [(ngModel)]=\"academicSession\"\n          list=\"hostel-session-options\"\n          (change)=\"sessionChanged()\" /></label\n      ><button class=\"erp-button erp-button--secondary\" type=\"button\" (click)=\"loadOverview()\">\n        Refresh overview\n      </button>\n    </section>\n    @if (overview(); as summary) {\n      <div class=\"erp-kpi-grid hostel-section-gap\">\n        <article class=\"erp-kpi-card\">\n          <div>\n            <small>Active hostels</small><strong>{{ summary.totals.hostels }}</strong>\n          </div>\n        </article>\n        <article class=\"erp-kpi-card\">\n          <div>\n            <small>Total rooms</small><strong>{{ summary.totals.rooms }}</strong>\n          </div>\n        </article>\n        <article class=\"erp-kpi-card\">\n          <div>\n            <small>Occupied beds</small><strong>{{ summary.totals.occupied }}</strong>\n          </div>\n        </article>\n        <article class=\"erp-kpi-card\">\n          <div>\n            <small>Available beds</small><strong>{{ summary.totals.available }}</strong>\n          </div>\n        </article>\n      </div>\n      <section class=\"erp-card erp-table-shell hostel-section-gap\">\n        <div class=\"erp-table-toolbar\"><h2>Hostel occupancy</h2></div>\n        <div class=\"erp-table-shell__scroll\">\n          <table>\n            <thead>\n              <tr>\n                <th>Hostel</th>\n                <th>Type</th>\n                <th>Rooms</th>\n                <th>Total beds</th>\n                <th>Occupied</th>\n                <th>Available</th>\n                <th>Occupancy</th>\n              </tr>\n            </thead>\n            <tbody>\n              @for (item of summary.byHostel; track item.hostelId) {\n                <tr>\n                  <td>\n                    <strong>{{ item.hostelName }}</strong>\n                  </td>\n                  <td>{{ item.type }}</td>\n                  <td>{{ item.rooms }}</td>\n                  <td>{{ item.beds }}</td>\n                  <td>{{ item.occupied }}</td>\n                  <td>{{ item.available }}</td>\n                  <td>\n                    {{ item.beds ? ((item.occupied * 100) / item.beds | number: '1.0-0') : 0 }}%\n                  </td>\n                </tr>\n              } @empty {\n                <tr>\n                  <td colspan=\"7\" class=\"erp-empty-state\">No active hostel capacity available.</td>\n                </tr>\n              }\n            </tbody>\n          </table>\n        </div>\n      </section>\n    }\n  }\n\n  <datalist id=\"hostel-session-options\">\n    @for (session of sessionOptions(); track session) {\n      <option [value]=\"session\"></option>\n    }\n  </datalist>\n</erp-admin-page>\n\n@if (hostelEditorOpen()) {\n  <div class=\"erp-drawer-layer\">\n    <button\n      class=\"erp-drawer-backdrop\"\n      type=\"button\"\n      aria-label=\"Close hostel editor\"\n      (click)=\"closeHostelEditor()\"\n    ></button>\n    <section\n      class=\"erp-drawer\"\n      role=\"dialog\"\n      aria-modal=\"true\"\n      aria-labelledby=\"hostel-editor-title\"\n    >\n      <header class=\"erp-drawer__header\">\n        <span class=\"erp-drawer__icon\"\n          ><svg lucideBuilding2 size=\"21\" aria-hidden=\"true\"></svg\n        ></span>\n        <div>\n          <small>{{ editingHostel() ? 'Update record' : 'New hostel' }}</small>\n          <h2 id=\"hostel-editor-title\">{{ editingHostel() ? 'Edit hostel' : 'Create hostel' }}</h2>\n          <p>\n            {{\n              editingHostel()\n                ? 'Update the hostel identity and planned capacity.'\n                : 'Add basic identity and planned structure.'\n            }}\n          </p>\n        </div>\n        <button\n          class=\"erp-icon-button\"\n          type=\"button\"\n          aria-label=\"Close hostel editor\"\n          (click)=\"closeHostelEditor()\"\n        >\n          <svg lucideX size=\"18\" aria-hidden=\"true\"></svg>\n        </button>\n      </header>\n      <form class=\"erp-drawer__body hostel-editor-form\" (ngSubmit)=\"saveHostel()\">\n        <label class=\"erp-field-stack\">\n          <span>Hostel name *</span>\n          <input\n            class=\"erp-control\"\n            name=\"hostelName\"\n            [(ngModel)]=\"hostelName\"\n            required\n            maxlength=\"120\"\n            placeholder=\"e.g. Nanda Devi Girls Hostel\"\n            autofocus\n          />\n        </label>\n        <label class=\"erp-field-stack\">\n          <span>Hostel type *</span>\n          <select class=\"erp-control\" name=\"hostelType\" [(ngModel)]=\"hostelType\">\n            <option value=\"boys\">Boys</option>\n            <option value=\"girls\">Girls</option>\n            <option value=\"co-ed\">Co-ed</option>\n          </select>\n        </label>\n        <label class=\"erp-field-stack\">\n          <span>Number of blocks *</span>\n          <input\n            class=\"erp-control\"\n            name=\"blockCount\"\n            type=\"number\"\n            min=\"0\"\n            max=\"30\"\n            [(ngModel)]=\"blockCount\"\n            [disabled]=\"!!editingHostel()\"\n          />\n          @if (editingHostel()) {\n            <small>Structure counts cannot be changed while editing.</small>\n          }\n        </label>\n        <label class=\"erp-field-stack\">\n          <span>Number of floors *</span>\n          <input\n            class=\"erp-control\"\n            name=\"floorCount\"\n            type=\"number\"\n            min=\"0\"\n            max=\"30\"\n            [(ngModel)]=\"floorCount\"\n            [disabled]=\"!!editingHostel()\"\n          />\n        </label>\n        <label class=\"erp-field-stack\">\n          <span>Planned rooms *</span>\n          <input\n            class=\"erp-control\"\n            name=\"plannedRoomCount\"\n            type=\"number\"\n            min=\"0\"\n            max=\"5000\"\n            [(ngModel)]=\"plannedRoomCount\"\n          />\n        </label>\n        @if (error()) {\n          <p class=\"erp-notice erp-notice--error\" role=\"alert\">{{ error() }}</p>\n        }\n        <footer class=\"erp-drawer__footer\">\n          <button\n            class=\"erp-button erp-button--secondary\"\n            type=\"button\"\n            (click)=\"closeHostelEditor()\"\n          >\n            Cancel\n          </button>\n          <button\n            class=\"erp-button erp-button--primary\"\n            type=\"submit\"\n            [disabled]=\"\n              saving() ||\n              hostelName.trim().length < 2 ||\n              blockCount < 0 ||\n              floorCount < 0 ||\n              plannedRoomCount < 0\n            \"\n          >\n            @if (saving()) {\n              <span class=\"erp-spinner erp-spinner--button\" aria-hidden=\"true\"></span>\n            }\n            {{ saving() ? 'Saving\u2026' : editingHostel() ? 'Save changes' : 'Create hostel' }}\n          </button>\n        </footer>\n      </form>\n    </section>\n  </div>\n}\n\n@if (allocationDrawerOpen()) {\n  <div class=\"erp-drawer-layer\">\n    <button\n      class=\"erp-drawer-backdrop\"\n      type=\"button\"\n      aria-label=\"Close allocation workflow\"\n      (click)=\"closeAllocationDrawer()\"\n    ></button>\n    <section\n      class=\"erp-drawer hostel-allocation-drawer\"\n      role=\"dialog\"\n      aria-modal=\"true\"\n      aria-labelledby=\"allocation-editor-title\"\n      cdkTrapFocus\n      [cdkTrapFocusAutoCapture]=\"true\"\n    >\n      <header class=\"erp-drawer__header\">\n        <span class=\"erp-drawer__icon\">\n          @if (transferTarget()) {\n            <svg lucideArrowRightLeft size=\"21\" aria-hidden=\"true\"></svg>\n          } @else {\n            <svg lucideUserRoundPlus size=\"21\" aria-hidden=\"true\"></svg>\n          }\n        </span>\n        <div>\n          <small>{{ transferTarget() ? 'Transfer workflow' : 'Guided allocation' }}</small>\n          <h2 id=\"allocation-editor-title\">\n            {{ transferTarget() ? 'Transfer hostel room' : 'Allocate hostel room' }}\n          </h2>\n          <p>\n            {{\n              transferTarget()\n                ? 'Select and confirm a new available bed.'\n                : 'Select a student and assign an available bed.'\n            }}\n          </p>\n        </div>\n        <button\n          class=\"erp-icon-button\"\n          type=\"button\"\n          aria-label=\"Close allocation workflow\"\n          (click)=\"closeAllocationDrawer()\"\n        >\n          <svg lucideX size=\"18\" aria-hidden=\"true\"></svg>\n        </button>\n      </header>\n\n      <div class=\"erp-drawer__body hostel-allocation-editor\">\n        @if (transferTarget(); as transfer) {\n          <section class=\"hostel-transfer-banner\" role=\"status\">\n            <span>Transfer mode</span>\n            <strong>Current room remains active until transfer is confirmed.</strong>\n            <button type=\"button\" (click)=\"cancelTransfer()\">Cancel transfer</button>\n          </section>\n          <section class=\"hostel-current-allocation\">\n            <span>Current allocation</span>\n            <strong>{{ transfer.studentName }}</strong>\n            <p>{{ transfer.hostelName }} / {{ transfer.blockName }} / {{ transfer.floorName }}</p>\n            <small>Room {{ transfer.roomNumber }} \u00B7 Bed {{ transfer.bedNumber }}</small>\n          </section>\n        } @else {\n          <ol class=\"hostel-allocation-stages\" aria-label=\"Allocation progress\">\n            @for (stage of [1, 2, 3]; track stage) {\n              <li\n                [class.hostel-allocation-stages__item--active]=\"allocationStage() === stage\"\n                [class.hostel-allocation-stages__item--complete]=\"allocationStage() > stage\"\n                [attr.aria-current]=\"allocationStage() === stage ? 'step' : null\"\n              >\n                <span>\n                  @if (allocationStage() > stage) {\n                    <svg lucideCheck size=\"14\" aria-hidden=\"true\"></svg>\n                  } @else {\n                    {{ stage }}\n                  }\n                </span>\n                {{ stage === 1 ? 'Student' : stage === 2 ? 'Room & Bed' : 'Review' }}\n              </li>\n            }\n          </ol>\n        }\n\n        @if (allocationStage() === 1 && !transferTarget()) {\n          <section class=\"hostel-allocation-stage\" aria-labelledby=\"allocation-stage-student\">\n            <div class=\"hostel-allocation-stage__heading\">\n              <small>Stage 1 of 3</small>\n              <h3 id=\"allocation-stage-student\">Select student</h3>\n              <p>Choose the session and approved student record.</p>\n            </div>\n            <label class=\"erp-field-stack\">\n              <span>Academic session *</span>\n              <input\n                class=\"erp-control\"\n                [(ngModel)]=\"academicSession\"\n                list=\"hostel-session-options\"\n                (change)=\"allocationFormSessionChanged()\"\n              />\n            </label>\n            <label class=\"erp-field-stack\">\n              <span>Search student *</span>\n              <span class=\"erp-search-control\">\n                <svg lucideSearch size=\"18\" aria-hidden=\"true\"></svg>\n                <input\n                  [(ngModel)]=\"studentSearch\"\n                  (ngModelChange)=\"selectedStudentId = ''\"\n                  placeholder=\"Search name or application number\"\n                  autocomplete=\"off\"\n                />\n              </span>\n            </label>\n            @if (studentSearch && !selectedStudentId) {\n              <div class=\"hostel-student-results\" role=\"listbox\" aria-label=\"Student results\">\n                @for (student of visibleStudents(); track student._id) {\n                  <button\n                    type=\"button\"\n                    role=\"option\"\n                    [attr.aria-selected]=\"selectedStudentId === student._id\"\n                    (click)=\"selectAllocationStudent(student)\"\n                  >\n                    <span class=\"hostel-student-avatar\">{{ student.name.slice(0, 1) }}</span>\n                    <span\n                      ><strong>{{ student.name }}</strong\n                      ><small>{{ student.applicationNumber }}</small></span\n                    >\n                  </button>\n                } @empty {\n                  <p>No approved students match this search.</p>\n                }\n              </div>\n            }\n            @if (selectedStudent(); as student) {\n              <section class=\"hostel-selected-student\">\n                <span class=\"hostel-student-avatar\">{{ selectedStudentInitials() }}</span>\n                <div>\n                  <strong>{{ student.name }}</strong>\n                  <small>{{ student.applicationNumber }}</small>\n                </div>\n                @if (activeAllocationForSelectedStudent(); as current) {\n                  <span class=\"erp-status erp-status--warning\">Already allocated</span>\n                  <p>\n                    Current allocation: {{ current.hostelName }} / {{ current.blockName }} /\n                    {{ current.roomNumber }} / Bed {{ current.bedNumber }}\n                  </p>\n                  <div>\n                    <button\n                      class=\"erp-button erp-button--secondary\"\n                      type=\"button\"\n                      (click)=\"viewAllocation(current)\"\n                    >\n                      View allocation\n                    </button>\n                    <button\n                      class=\"erp-button erp-button--secondary\"\n                      type=\"button\"\n                      (click)=\"startTransfer(current)\"\n                    >\n                      Start transfer\n                    </button>\n                  </div>\n                } @else {\n                  <span class=\"erp-status\">Eligible for allocation</span>\n                }\n              </section>\n            }\n          </section>\n        }\n\n        @if (allocationStage() === 2) {\n          <section class=\"hostel-allocation-stage\" aria-labelledby=\"allocation-stage-room\">\n            <div class=\"hostel-allocation-stage__heading\">\n              <small>{{ transferTarget() ? 'New allocation' : 'Stage 2 of 3' }}</small>\n              <h3 id=\"allocation-stage-room\">Select room and bed</h3>\n              <p>Only active rooms configured for {{ academicSession }} are available.</p>\n            </div>\n            @if (!transferTarget() && selectedStudent(); as student) {\n              <div class=\"hostel-pinned-student\">\n                <span class=\"hostel-student-avatar\">{{ selectedStudentInitials() }}</span>\n                <span\n                  ><strong>{{ student.name }}</strong\n                  ><small>{{ student.applicationNumber }}</small></span\n                >\n              </div>\n            }\n            <div class=\"hostel-allocation-location\">\n              <label class=\"erp-field-stack\">\n                <span>Hostel *</span>\n                <select\n                  class=\"erp-control\"\n                  [(ngModel)]=\"selectedHostelId\"\n                  (ngModelChange)=\"allocationHostelSelectionChanged()\"\n                >\n                  <option value=\"\">Select active hostel</option>\n                  @for (hostel of hostels(); track hostel._id) {\n                    @if (hostel.isActive) {\n                      <option [value]=\"hostel._id\">{{ hostel.name }}</option>\n                    }\n                  }\n                </select>\n              </label>\n              <label class=\"erp-field-stack\">\n                <span>Block *</span>\n                <select\n                  class=\"erp-control\"\n                  [(ngModel)]=\"selectedBlockId\"\n                  [disabled]=\"!selectedHostelId\"\n                  (ngModelChange)=\"allocationBlockSelectionChanged()\"\n                >\n                  <option value=\"\">Select block</option>\n                  @for (block of blocks(); track block._id) {\n                    <option [value]=\"block._id\">{{ block.name }}</option>\n                  }\n                </select>\n              </label>\n              <label class=\"erp-field-stack\">\n                <span>Floor *</span>\n                <select\n                  class=\"erp-control\"\n                  [(ngModel)]=\"selectedFloorId\"\n                  [disabled]=\"!selectedBlockId\"\n                  (ngModelChange)=\"allocationFloorSelectionChanged()\"\n                >\n                  <option value=\"\">Select floor</option>\n                  @for (floor of floors(); track floor._id) {\n                    <option [value]=\"floor._id\">{{ floor.name }}</option>\n                  }\n                </select>\n              </label>\n            </div>\n\n            @if (allocationRoomLoading()) {\n              <div class=\"hostel-room-results-loading\" role=\"status\">\n                <span class=\"erp-spinner\" aria-hidden=\"true\"></span> Loading available rooms\u2026\n              </div>\n            } @else if (allocationLocationReady()) {\n              <label class=\"erp-search-control hostel-room-finder-search\">\n                <svg lucideSearch size=\"18\" aria-hidden=\"true\"></svg>\n                <span class=\"erp-sr-only\">Search available rooms</span>\n                <input [(ngModel)]=\"allocationRoomSearch\" placeholder=\"Search room number\" />\n              </label>\n              @if (!allocationAvailableRooms().length) {\n                <div class=\"hostel-allocation-blocked\">\n                  @if (!allocationConfiguredRooms().length) {\n                    <span class=\"erp-empty-panel__icon\"\n                      ><svg lucideSettings2 size=\"22\" aria-hidden=\"true\"></svg\n                    ></span>\n                    <strong>No configured rooms available</strong>\n                    <p>Rooms must have capacity and type configured before allocation.</p>\n                    <a\n                      class=\"erp-button erp-button--secondary\"\n                      routerLink=\"/admin/master-data/hostel/capacity\"\n                      [queryParams]=\"{\n                        session: academicSession,\n                        hostel: selectedHostelId,\n                        block: selectedBlockId,\n                        floor: selectedFloorId,\n                      }\"\n                      (click)=\"closeAllocationDrawer()\"\n                      >Go to Room Capacity</a\n                    >\n                  } @else if (allocationRoomSearch) {\n                    <span class=\"erp-empty-panel__icon\"\n                      ><svg lucideSearch size=\"22\" aria-hidden=\"true\"></svg\n                    ></span>\n                    <strong>No rooms match this search</strong>\n                    <p>Clear the room search or try another location.</p>\n                  } @else {\n                    <span class=\"erp-empty-panel__icon\"\n                      ><svg lucideBedDouble size=\"22\" aria-hidden=\"true\"></svg\n                    ></span>\n                    <strong>No beds available</strong>\n                    <p>Every configured room at this location is currently full.</p>\n                  }\n                </div>\n              } @else {\n                <div class=\"hostel-room-finder\" role=\"listbox\" aria-label=\"Available rooms\">\n                  @for (room of allocationAvailableRooms(); track room._id) {\n                    <button\n                      type=\"button\"\n                      role=\"option\"\n                      [attr.aria-selected]=\"selectedRoomId === room._id\"\n                      [class.hostel-room-option--selected]=\"selectedRoomId === room._id\"\n                      (click)=\"selectAllocationRoom(room)\"\n                    >\n                      <span\n                        ><strong>{{ room.roomNumber }}</strong\n                        ><small>{{ room.roomType }} \u00B7 {{ room.capacity }} seater</small></span\n                      >\n                      <span>{{ room.capacity - room.occupiedBeds.length }} beds available</span>\n                    </button>\n                  }\n                </div>\n              }\n            }\n\n            @if (selectedRoom(); as room) {\n              <section class=\"hostel-selected-room\">\n                <div>\n                  <span>Selected room</span>\n                  <strong\n                    >{{ room.roomNumber }} \u00B7 {{ room.roomType }} \u00B7\n                    {{ room.capacity }} seater</strong\n                  >\n                  <small>{{ room.hostelName }} / {{ room.blockName }} / {{ room.floorName }}</small>\n                </div>\n                <p>\n                  {{ room.capacity - room.occupiedBeds.length }} of {{ room.capacity }} beds\n                  available\n                </p>\n                <div\n                  class=\"hostel-bed-selector\"\n                  role=\"listbox\"\n                  aria-label=\"Select an available bed\"\n                >\n                  @for (bed of room.beds; track bed) {\n                    <button\n                      type=\"button\"\n                      role=\"option\"\n                      [disabled]=\"room.occupiedBeds.includes(bed)\"\n                      [attr.aria-selected]=\"selectedBedNumber === bed\"\n                      [class.hostel-bed-selector__bed--selected]=\"selectedBedNumber === bed\"\n                      (click)=\"selectAllocationBed(bed)\"\n                    >\n                      Bed {{ bed }}\n                      <small>{{\n                        room.occupiedBeds.includes(bed) ? 'Occupied' : 'Available'\n                      }}</small>\n                    </button>\n                  }\n                </div>\n              </section>\n            }\n          </section>\n        }\n\n        @if (allocationStage() === 3) {\n          <section class=\"hostel-allocation-stage\" aria-labelledby=\"allocation-stage-review\">\n            <div class=\"hostel-allocation-stage__heading\">\n              <small>{{ transferTarget() ? 'Transfer review' : 'Stage 3 of 3' }}</small>\n              <h3 id=\"allocation-stage-review\">\n                {{ transferTarget() ? 'Review transfer' : 'Review allocation' }}\n              </h3>\n              <p>Confirm the exact student, room and bed before saving.</p>\n            </div>\n            <div class=\"hostel-allocation-review\">\n              <div>\n                <span>Student</span>\n                <strong>{{ transferTarget()?.studentName || selectedStudent()?.name }}</strong>\n                <small>{{\n                  transferTarget()?.studentApplicationNumber || selectedStudent()?.applicationNumber\n                }}</small>\n              </div>\n              <div>\n                <span>Academic session</span><strong>{{ academicSession }}</strong>\n              </div>\n              @if (transferTarget(); as transfer) {\n                <div>\n                  <span>From</span\n                  ><strong\n                    >{{ transfer.hostelName }} \u00B7 {{ transfer.roomNumber }} \u00B7 Bed\n                    {{ transfer.bedNumber }}</strong\n                  >\n                </div>\n              }\n              @if (selectedRoom(); as room) {\n                <div>\n                  <span>{{ transferTarget() ? 'To' : 'Allocation' }}</span>\n                  <strong\n                    >{{ room.hostelName }} \u00B7 {{ room.roomNumber }} \u00B7 Bed\n                    {{ selectedBedNumber }}</strong\n                  >\n                  <small\n                    >{{ room.blockName }} / {{ room.floorName }} \u00B7 {{ room.capacity }} seater \u00B7\n                    {{ room.roomType }}</small\n                  >\n                </div>\n              }\n            </div>\n            @if (transferTarget()) {\n              <label class=\"erp-field-stack\">\n                <span>Transfer reason</span>\n                <input\n                  class=\"erp-control\"\n                  [(ngModel)]=\"transferReason\"\n                  placeholder=\"Optional reason\"\n                />\n              </label>\n              <p class=\"erp-notice erp-notice--warning\">\n                The current bed will be released only after a successful transfer.\n              </p>\n            } @else {\n              <p class=\"erp-notice erp-notice--warning\">\n                Confirm the student and bed carefully. This action creates an active hostel\n                allocation.\n              </p>\n            }\n          </section>\n        }\n\n        @if (error()) {\n          <p class=\"erp-notice erp-notice--error\" role=\"alert\">{{ error() }}</p>\n        }\n\n        <footer class=\"erp-drawer__footer hostel-allocation-footer\">\n          @if (allocationStage() === 1) {\n            <button\n              class=\"erp-button erp-button--secondary\"\n              type=\"button\"\n              (click)=\"closeAllocationDrawer()\"\n            >\n              Cancel\n            </button>\n            <button\n              class=\"erp-button erp-button--primary\"\n              type=\"button\"\n              (click)=\"continueAllocation()\"\n              [disabled]=\"\n                !academicSession || !selectedStudentId || !!activeAllocationForSelectedStudent()\n              \"\n            >\n              Continue to room selection <svg lucideArrowRight size=\"17\" aria-hidden=\"true\"></svg>\n            </button>\n          } @else if (allocationStage() === 2) {\n            <button\n              class=\"erp-button erp-button--secondary\"\n              type=\"button\"\n              (click)=\"transferTarget() ? cancelTransfer() : previousAllocationStage()\"\n            >\n              <svg lucideArrowLeft size=\"17\" aria-hidden=\"true\"></svg\n              >{{ transferTarget() ? 'Cancel' : 'Back' }}\n            </button>\n            <button\n              class=\"erp-button erp-button--primary\"\n              type=\"button\"\n              (click)=\"continueAllocation()\"\n              [disabled]=\"!selectedRoomId || !selectedBedNumber\"\n            >\n              Continue to review <svg lucideArrowRight size=\"17\" aria-hidden=\"true\"></svg>\n            </button>\n          } @else {\n            <button\n              class=\"erp-button erp-button--secondary\"\n              type=\"button\"\n              (click)=\"previousAllocationStage()\"\n            >\n              <svg lucideArrowLeft size=\"17\" aria-hidden=\"true\"></svg>Back\n            </button>\n            <button\n              class=\"erp-button erp-button--primary\"\n              type=\"button\"\n              (click)=\"createOrTransferAllocation()\"\n              [disabled]=\"saving()\"\n            >\n              {{\n                saving()\n                  ? transferTarget()\n                    ? 'Transferring\u2026'\n                    : 'Allocating\u2026'\n                  : transferTarget()\n                    ? 'Confirm transfer'\n                    : 'Confirm allocation'\n              }}\n            </button>\n          }\n        </footer>\n      </div>\n    </section>\n  </div>\n}\n\n@if (allocationDetail(); as allocation) {\n  <div class=\"erp-drawer-layer\">\n    <button\n      class=\"erp-drawer-backdrop\"\n      type=\"button\"\n      aria-label=\"Close allocation details\"\n      (click)=\"closeAllocationDetail()\"\n    ></button>\n    <section\n      class=\"erp-drawer hostel-allocation-detail\"\n      role=\"dialog\"\n      aria-modal=\"true\"\n      aria-labelledby=\"allocation-detail-title\"\n      cdkTrapFocus\n      [cdkTrapFocusAutoCapture]=\"true\"\n    >\n      <header class=\"erp-drawer__header\">\n        <span class=\"erp-drawer__icon\"\n          ><svg lucideUserRound size=\"21\" aria-hidden=\"true\"></svg\n        ></span>\n        <div>\n          <small>Allocation record</small>\n          <h2 id=\"allocation-detail-title\">{{ allocation.studentName }}</h2>\n          <p>{{ allocation.studentApplicationNumber }}</p>\n        </div>\n        <button\n          class=\"erp-icon-button\"\n          type=\"button\"\n          aria-label=\"Close allocation details\"\n          (click)=\"closeAllocationDetail()\"\n        >\n          <svg lucideX size=\"18\" aria-hidden=\"true\"></svg>\n        </button>\n      </header>\n      <div class=\"erp-drawer__body hostel-room-details\">\n        <dl>\n          <div>\n            <dt>Academic session</dt>\n            <dd>{{ allocation.academicSession }}</dd>\n          </div>\n          <div>\n            <dt>Status</dt>\n            <dd>{{ allocation.status === 'active' ? 'Active' : 'Vacated' }}</dd>\n          </div>\n          <div>\n            <dt>Hostel</dt>\n            <dd>{{ allocation.hostelName }}</dd>\n          </div>\n          <div>\n            <dt>Block</dt>\n            <dd>{{ allocation.blockName }}</dd>\n          </div>\n          <div>\n            <dt>Floor</dt>\n            <dd>{{ allocation.floorName }}</dd>\n          </div>\n          <div>\n            <dt>Room</dt>\n            <dd>{{ allocation.roomNumber }}</dd>\n          </div>\n          <div>\n            <dt>Bed</dt>\n            <dd>Bed {{ allocation.bedNumber }}</dd>\n          </div>\n          <div>\n            <dt>Allocated</dt>\n            <dd>{{ allocation.allocatedAt | date: 'mediumDate' }}</dd>\n          </div>\n        </dl>\n        <footer class=\"erp-drawer__footer\">\n          <button\n            class=\"erp-button erp-button--secondary\"\n            type=\"button\"\n            (click)=\"closeAllocationDetail()\"\n          >\n            Close\n          </button>\n          @if (allocation.status === 'active') {\n            <button\n              class=\"erp-button erp-button--secondary\"\n              type=\"button\"\n              (click)=\"startTransfer(allocation)\"\n            >\n              <svg lucideArrowRightLeft size=\"17\" aria-hidden=\"true\"></svg>Transfer room\n            </button>\n            <button\n              class=\"erp-button erp-button--danger\"\n              type=\"button\"\n              (click)=\"closeAllocationDetail(); vacateTarget.set(allocation)\"\n            >\n              <svg lucideLogOut size=\"17\" aria-hidden=\"true\"></svg>Vacate room\n            </button>\n          }\n        </footer>\n      </div>\n    </section>\n  </div>\n}\n\n@if (roomEditorOpen()) {\n  <div class=\"erp-drawer-layer\">\n    <button\n      class=\"erp-drawer-backdrop\"\n      type=\"button\"\n      aria-label=\"Close room editor\"\n      (click)=\"closeRoomEditor()\"\n    ></button>\n    <section\n      class=\"erp-drawer hostel-room-drawer\"\n      role=\"dialog\"\n      aria-modal=\"true\"\n      aria-labelledby=\"room-editor-title\"\n      cdkTrapFocus\n      [cdkTrapFocusAutoCapture]=\"true\"\n    >\n      <header class=\"erp-drawer__header\">\n        <span class=\"erp-drawer__icon\">\n          <svg lucideDoorOpen size=\"21\" aria-hidden=\"true\"></svg>\n        </span>\n        <div>\n          <small>{{ editingRoom() ? 'Room settings' : 'Room creation' }}</small>\n          <h2 id=\"room-editor-title\">\n            {{ editingRoom() ? 'Edit room number' : 'Add rooms' }}\n          </h2>\n          <p>{{ locationLabel() }}</p>\n        </div>\n        <button\n          class=\"erp-icon-button\"\n          type=\"button\"\n          aria-label=\"Close room editor\"\n          (click)=\"closeRoomEditor()\"\n        >\n          <svg lucideX size=\"18\" aria-hidden=\"true\"></svg>\n        </button>\n      </header>\n\n      @if (editingRoom()) {\n        <form class=\"erp-drawer__body hostel-room-editor\" (ngSubmit)=\"saveRoomNumber()\">\n          <label class=\"erp-field-stack\">\n            <span>Room number *</span>\n            <input\n              class=\"erp-control\"\n              name=\"editedRoomNumber\"\n              [(ngModel)]=\"editedRoomNumber\"\n              required\n              maxlength=\"40\"\n              autofocus\n            />\n            <small>Use a clear identifier that is unique for this location.</small>\n          </label>\n          @if (error()) {\n            <p class=\"erp-notice erp-notice--error\" role=\"alert\">{{ error() }}</p>\n          }\n          <footer class=\"erp-drawer__footer\">\n            <button\n              class=\"erp-button erp-button--secondary\"\n              type=\"button\"\n              (click)=\"closeRoomEditor()\"\n            >\n              Cancel\n            </button>\n            <button\n              class=\"erp-button erp-button--primary\"\n              type=\"submit\"\n              [disabled]=\"saving() || !editedRoomNumber.trim()\"\n            >\n              {{ saving() ? 'Saving\u2026' : 'Save changes' }}\n            </button>\n          </footer>\n        </form>\n      } @else {\n        <form class=\"erp-drawer__body hostel-room-editor\" (ngSubmit)=\"saveRooms()\">\n          <div class=\"hostel-segmented\" aria-label=\"Room creation method\">\n            <button\n              type=\"button\"\n              [class.hostel-segmented__item--active]=\"roomMode === 'manual'\"\n              [attr.aria-pressed]=\"roomMode === 'manual'\"\n              (click)=\"roomMode = 'manual'\"\n            >\n              Create one room\n            </button>\n            <button\n              type=\"button\"\n              [class.hostel-segmented__item--active]=\"roomMode === 'automatic'\"\n              [attr.aria-pressed]=\"roomMode === 'automatic'\"\n              (click)=\"roomMode = 'automatic'\"\n            >\n              Generate sequence\n            </button>\n          </div>\n\n          @if (roomMode === 'manual') {\n            <label class=\"erp-field-stack\">\n              <span>Room number *</span>\n              <input\n                class=\"erp-control\"\n                name=\"roomNumber\"\n                [(ngModel)]=\"roomNumber\"\n                required\n                maxlength=\"40\"\n                placeholder=\"e.g. A-101\"\n                autofocus\n              />\n              <small>Create a single room in the selected hostel location.</small>\n            </label>\n          } @else {\n            <div class=\"hostel-generation-grid\">\n              <label class=\"erp-field-stack\">\n                <span>Prefix</span>\n                <input\n                  class=\"erp-control\"\n                  name=\"roomPrefix\"\n                  [(ngModel)]=\"roomPrefix\"\n                  maxlength=\"12\"\n                  placeholder=\"e.g. A-\"\n                />\n              </label>\n              <label class=\"erp-field-stack\">\n                <span>Start number *</span>\n                <input\n                  class=\"erp-control\"\n                  name=\"roomStartNumber\"\n                  type=\"number\"\n                  min=\"1\"\n                  [(ngModel)]=\"roomStartNumber\"\n                />\n              </label>\n              <label class=\"erp-field-stack\">\n                <span>Number of rooms *</span>\n                <input\n                  class=\"erp-control\"\n                  name=\"roomGenerationCount\"\n                  type=\"number\"\n                  min=\"1\"\n                  max=\"500\"\n                  [(ngModel)]=\"roomGenerationCount\"\n                />\n              </label>\n            </div>\n            <section class=\"hostel-generation-preview\" aria-live=\"polite\">\n              <span>Generation preview</span>\n              <strong>{{ roomGenerationCount || 0 }} rooms in {{ locationLabel() }}</strong>\n              <div>\n                @for (room of generationPreview(); track room) {\n                  <small>{{ room }}</small>\n                }\n              </div>\n            </section>\n          }\n\n          @if (error()) {\n            <p class=\"erp-notice erp-notice--error\" role=\"alert\">{{ error() }}</p>\n          }\n          <footer class=\"erp-drawer__footer\">\n            <button\n              class=\"erp-button erp-button--secondary\"\n              type=\"button\"\n              (click)=\"closeRoomEditor()\"\n            >\n              Cancel\n            </button>\n            <button\n              class=\"erp-button erp-button--primary\"\n              type=\"submit\"\n              [disabled]=\"\n                saving() ||\n                (roomMode === 'manual'\n                  ? !roomNumber.trim()\n                  : roomStartNumber < 1 || roomGenerationCount < 1 || roomGenerationCount > 500)\n              \"\n            >\n              {{ saving() ? 'Saving\u2026' : roomMode === 'manual' ? 'Create room' : 'Generate rooms' }}\n            </button>\n          </footer>\n        </form>\n      }\n    </section>\n  </div>\n}\n\n@if (viewingRoom(); as room) {\n  <div class=\"erp-drawer-layer\">\n    <button\n      class=\"erp-drawer-backdrop\"\n      type=\"button\"\n      aria-label=\"Close room details\"\n      (click)=\"viewingRoom.set(null)\"\n    ></button>\n    <section\n      class=\"erp-drawer hostel-room-drawer\"\n      role=\"dialog\"\n      aria-modal=\"true\"\n      aria-labelledby=\"room-details-title\"\n      cdkTrapFocus\n      [cdkTrapFocusAutoCapture]=\"true\"\n    >\n      <header class=\"erp-drawer__header\">\n        <span class=\"erp-drawer__icon\"\n          ><svg lucideDoorOpen size=\"21\" aria-hidden=\"true\"></svg\n        ></span>\n        <div>\n          <small>Room details</small>\n          <h2 id=\"room-details-title\">Room {{ room.roomNumber }}</h2>\n          <p>{{ room.blockName }} / {{ room.floorName }}</p>\n        </div>\n        <button\n          class=\"erp-icon-button\"\n          type=\"button\"\n          aria-label=\"Close room details\"\n          (click)=\"viewingRoom.set(null)\"\n        >\n          <svg lucideX size=\"18\" aria-hidden=\"true\"></svg>\n        </button>\n      </header>\n      <div class=\"erp-drawer__body hostel-room-details\">\n        <dl>\n          <div>\n            <dt>Hostel</dt>\n            <dd>{{ selectedHostel()?.name }}</dd>\n          </div>\n          <div>\n            <dt>Block</dt>\n            <dd>{{ room.blockName }}</dd>\n          </div>\n          <div>\n            <dt>Floor</dt>\n            <dd>{{ room.floorName }}</dd>\n          </div>\n          <div>\n            <dt>Room type</dt>\n            <dd>{{ room.configuredForSession ? room.roomType : 'Not configured' }}</dd>\n          </div>\n          <div>\n            <dt>Capacity</dt>\n            <dd>{{ room.configuredForSession ? room.capacity + ' beds' : 'Not configured' }}</dd>\n          </div>\n          <div>\n            <dt>Occupancy</dt>\n            <dd>{{ room.occupiedBeds.length }} occupied</dd>\n          </div>\n          <div>\n            <dt>Status</dt>\n            <dd>{{ room.isActive ? 'Active' : 'Disabled' }}</dd>\n          </div>\n          <div>\n            <dt>Session</dt>\n            <dd>{{ academicSession }}</dd>\n          </div>\n        </dl>\n        <footer class=\"erp-drawer__footer\">\n          <button\n            class=\"erp-button erp-button--secondary\"\n            type=\"button\"\n            (click)=\"viewingRoom.set(null)\"\n          >\n            Close\n          </button>\n          <button\n            class=\"erp-button erp-button--primary\"\n            type=\"button\"\n            (click)=\"viewingRoom.set(null); openCapacity(room)\"\n          >\n            {{ room.configuredForSession ? 'Edit capacity' : 'Configure capacity' }}\n          </button>\n        </footer>\n      </div>\n    </section>\n  </div>\n}\n\n@if (capacityRoom(); as room) {\n  <div class=\"erp-drawer-layer\">\n    <button\n      class=\"erp-drawer-backdrop\"\n      type=\"button\"\n      aria-label=\"Close capacity editor\"\n      (click)=\"closeCapacityEditor()\"\n    ></button>\n    <section\n      class=\"erp-drawer hostel-room-drawer\"\n      role=\"dialog\"\n      aria-modal=\"true\"\n      aria-labelledby=\"capacity-editor-title\"\n      cdkTrapFocus\n      [cdkTrapFocusAutoCapture]=\"true\"\n    >\n      <header class=\"erp-drawer__header\">\n        <span class=\"erp-drawer__icon\"\n          ><svg lucideBedDouble size=\"21\" aria-hidden=\"true\"></svg\n        ></span>\n        <div>\n          <small>{{\n            room.configuredForSession ? 'Update configuration' : 'New configuration'\n          }}</small>\n          <h2 id=\"capacity-editor-title\">Room {{ room.roomNumber }} capacity</h2>\n          <p>{{ room.blockName }} / {{ room.floorName }} \u00B7 {{ academicSession }}</p>\n        </div>\n        <button\n          class=\"erp-icon-button\"\n          type=\"button\"\n          aria-label=\"Close capacity editor\"\n          (click)=\"closeCapacityEditor()\"\n        >\n          <svg lucideX size=\"18\" aria-hidden=\"true\"></svg>\n        </button>\n      </header>\n      <form class=\"erp-drawer__body hostel-capacity-editor\" (ngSubmit)=\"saveCapacity()\">\n        <label class=\"erp-field-stack\">\n          <span>Academic session *</span>\n          <input class=\"erp-control\" [value]=\"academicSession\" readonly />\n        </label>\n        <label class=\"erp-field-stack\">\n          <span>Room type *</span>\n          <select class=\"erp-control\" name=\"roomTypeChoice\" [(ngModel)]=\"roomTypeChoice\">\n            @for (type of savedRoomTypes(); track type) {\n              <option [value]=\"type\">{{ type }}</option>\n            }\n            <option value=\"custom\">Custom room type</option>\n          </select>\n        </label>\n        @if (roomTypeChoice === 'custom') {\n          <label class=\"erp-field-stack\">\n            <span>Custom room type *</span>\n            <input\n              class=\"erp-control\"\n              name=\"customRoomType\"\n              [(ngModel)]=\"customRoomType\"\n              maxlength=\"60\"\n              placeholder=\"e.g. Premium AC\"\n            />\n          </label>\n        }\n        <label class=\"erp-field-stack\">\n          <span>Seater / bed capacity *</span>\n          <select class=\"erp-control\" name=\"capacityChoice\" [(ngModel)]=\"capacityChoice\">\n            @for (seater of savedSeaters(); track seater) {\n              <option [value]=\"seater\">{{ seater }} seater</option>\n            }\n            <option value=\"custom\">Custom capacity</option>\n          </select>\n        </label>\n        @if (capacityChoice === 'custom') {\n          <label class=\"erp-field-stack\">\n            <span>Custom capacity *</span>\n            <input\n              class=\"erp-control\"\n              name=\"customCapacity\"\n              type=\"number\"\n              min=\"1\"\n              max=\"30\"\n              [(ngModel)]=\"customCapacity\"\n            />\n          </label>\n        }\n        <section class=\"hostel-capacity-summary\">\n          <span>Configuration summary</span>\n          <strong>\n            {{ roomTypeChoice === 'custom' ? customRoomType || 'Custom type' : roomTypeChoice }} \u00B7\n            {{ capacityChoice === 'custom' ? customCapacity || 0 : capacityChoice }} beds\n          </strong>\n          <small>Bed slots are applied only to {{ academicSession }}.</small>\n        </section>\n        @if (error()) {\n          <p class=\"erp-notice erp-notice--error\" role=\"alert\">{{ error() }}</p>\n        }\n        <footer class=\"erp-drawer__footer\">\n          <button\n            class=\"erp-button erp-button--secondary\"\n            type=\"button\"\n            (click)=\"closeCapacityEditor()\"\n          >\n            Cancel\n          </button>\n          <button class=\"erp-button erp-button--primary\" type=\"submit\" [disabled]=\"saving()\">\n            {{\n              saving() ? 'Saving\u2026' : room.configuredForSession ? 'Save changes' : 'Configure room'\n            }}\n          </button>\n        </footer>\n      </form>\n    </section>\n  </div>\n}\n\n@if (generationConfirmOpen()) {\n  <div class=\"dialog-layer\">\n    <button\n      class=\"dialog-backdrop\"\n      type=\"button\"\n      aria-label=\"Cancel room generation\"\n      (click)=\"generationConfirmOpen.set(false)\"\n    ></button>\n    <section\n      class=\"dialog dialog--confirm\"\n      role=\"alertdialog\"\n      aria-modal=\"true\"\n      aria-labelledby=\"room-generation-title\"\n      cdkTrapFocus\n      [cdkTrapFocusAutoCapture]=\"true\"\n    >\n      <div class=\"dialog__body confirm-body\">\n        <span class=\"confirm-icon\" aria-hidden=\"true\">!</span>\n        <h2 id=\"room-generation-title\">Generate {{ roomGenerationCount }} rooms?</h2>\n        <p>\n          This creates a large room sequence in {{ locationLabel() }}. Review the prefix and\n          numbering before continuing.\n        </p>\n      </div>\n      <footer class=\"dialog__footer\">\n        <button\n          class=\"erp-button erp-button--secondary\"\n          type=\"button\"\n          (click)=\"generationConfirmOpen.set(false)\"\n        >\n          Review settings\n        </button>\n        <button\n          class=\"erp-button erp-button--primary\"\n          type=\"button\"\n          (click)=\"confirmRoomGeneration()\"\n          [disabled]=\"saving()\"\n        >\n          Confirm generation\n        </button>\n      </footer>\n    </section>\n  </div>\n}\n\n@if (structureDialog(); as dialog) {\n  <div class=\"dialog-layer\">\n    <button\n      class=\"dialog-backdrop\"\n      type=\"button\"\n      aria-label=\"Close structure dialog\"\n      (click)=\"closeStructureDialog()\"\n    ></button>\n    <section\n      class=\"dialog\"\n      role=\"dialog\"\n      aria-modal=\"true\"\n      aria-labelledby=\"structure-dialog-title\"\n    >\n      <header class=\"dialog__header\">\n        <div>\n          <small>{{ dialog.mode === 'edit' ? 'Rename' : 'Add structure' }}</small>\n          <h2 id=\"structure-dialog-title\">\n            {{ dialog.mode === 'edit' ? 'Edit' : 'Add' }} {{ dialog.kind }}\n          </h2>\n        </div>\n        <button type=\"button\" aria-label=\"Close dialog\" (click)=\"closeStructureDialog()\">\n          <svg lucideX size=\"18\" aria-hidden=\"true\"></svg>\n        </button>\n      </header>\n      <form (ngSubmit)=\"submitStructureDialog()\">\n        <div class=\"dialog__body dialog-form\">\n          <label class=\"erp-field-stack\"\n            ><span>Hostel</span\n            ><input class=\"erp-control\" [value]=\"selectedHostel()?.name || ''\" readonly\n          /></label>\n          @if (dialog.kind === 'block') {\n            <label class=\"erp-field-stack\"\n              ><span>Block name *</span\n              ><input\n                class=\"erp-control\"\n                name=\"blockName\"\n                [(ngModel)]=\"blockName\"\n                required\n                maxlength=\"80\"\n                placeholder=\"e.g. Main Block\"\n                autofocus\n            /></label>\n          } @else {\n            <label class=\"erp-field-stack\"\n              ><span>Floor name *</span\n              ><input\n                class=\"erp-control\"\n                name=\"floorName\"\n                [(ngModel)]=\"floorName\"\n                required\n                maxlength=\"80\"\n                placeholder=\"e.g. Ground Floor\"\n                autofocus\n            /></label>\n            <small\n              >Floors are currently stored at hostel level and are available to every block.</small\n            >\n          }\n          @if (error()) {\n            <p class=\"erp-notice erp-notice--error\" role=\"alert\">{{ error() }}</p>\n          }\n        </div>\n        <footer class=\"dialog__footer\">\n          <button\n            class=\"erp-button erp-button--secondary\"\n            type=\"button\"\n            (click)=\"closeStructureDialog()\"\n          >\n            Cancel\n          </button>\n          <button\n            class=\"erp-button erp-button--primary\"\n            type=\"submit\"\n            [disabled]=\"\n              saving() || (dialog.kind === 'block' ? !blockName.trim() : !floorName.trim())\n            \"\n          >\n            {{\n              saving()\n                ? 'Saving\u2026'\n                : dialog.mode === 'edit'\n                  ? 'Save changes'\n                  : dialog.kind === 'block'\n                    ? 'Add block'\n                    : 'Add floor'\n            }}\n          </button>\n        </footer>\n      </form>\n    </section>\n  </div>\n}\n\n@if (deleteTarget()) {\n  <div class=\"dialog-layer\">\n    <button\n      class=\"dialog-backdrop\"\n      type=\"button\"\n      aria-label=\"Cancel deletion\"\n      (click)=\"closeDeleteDialog()\"\n    ></button>\n    <section\n      class=\"dialog dialog--confirm\"\n      role=\"alertdialog\"\n      aria-modal=\"true\"\n      aria-labelledby=\"hostel-delete-title\"\n    >\n      <div class=\"dialog__body confirm-body\">\n        <span class=\"confirm-icon\" aria-hidden=\"true\">!</span>\n        <h2 id=\"hostel-delete-title\">{{ deleteTitle() }}</h2>\n        <p>{{ deleteDescription() }}</p>\n        @if (error()) {\n          <p class=\"erp-notice erp-notice--error\" role=\"alert\">{{ error() }}</p>\n        }\n      </div>\n      <footer class=\"dialog__footer\">\n        <button\n          class=\"erp-button erp-button--secondary\"\n          type=\"button\"\n          (click)=\"closeDeleteDialog()\"\n        >\n          Cancel\n        </button>\n        <button\n          class=\"erp-button erp-button--danger\"\n          type=\"button\"\n          (click)=\"confirmDelete()\"\n          [disabled]=\"saving()\"\n        >\n          {{ saving() ? 'Deleting\u2026' : 'Delete' }}\n        </button>\n      </footer>\n    </section>\n  </div>\n}\n\n@if (vacateTarget(); as allocation) {\n  <div class=\"dialog-layer\">\n    <button\n      class=\"dialog-backdrop\"\n      type=\"button\"\n      aria-label=\"Cancel vacating room\"\n      (click)=\"vacateTarget.set(null)\"\n    ></button>\n    <section\n      class=\"dialog hostel-vacate-dialog\"\n      role=\"alertdialog\"\n      aria-modal=\"true\"\n      aria-labelledby=\"vacate-title\"\n      cdkTrapFocus\n      [cdkTrapFocusAutoCapture]=\"true\"\n    >\n      <header class=\"dialog__header\">\n        <div>\n          <small>Destructive action</small>\n          <h2 id=\"vacate-title\">Vacate hostel bed?</h2>\n        </div>\n        <button\n          type=\"button\"\n          aria-label=\"Close vacate confirmation\"\n          (click)=\"vacateTarget.set(null)\"\n        >\n          <svg lucideX size=\"18\" aria-hidden=\"true\"></svg>\n        </button>\n      </header>\n      <div class=\"dialog__body hostel-vacate-body\">\n        <span class=\"hostel-vacate-body__icon\"\n          ><svg lucideLogOut size=\"22\" aria-hidden=\"true\"></svg\n        ></span>\n        <dl>\n          <div>\n            <dt>Student</dt>\n            <dd>{{ allocation.studentName }} \u00B7 {{ allocation.studentApplicationNumber }}</dd>\n          </div>\n          <div>\n            <dt>Current allocation</dt>\n            <dd>\n              {{ allocation.hostelName }} / {{ allocation.blockName }} / {{ allocation.floorName\n              }}<small>Room {{ allocation.roomNumber }} \u00B7 Bed {{ allocation.bedNumber }}</small>\n            </dd>\n          </div>\n          <div>\n            <dt>Academic session</dt>\n            <dd>{{ allocation.academicSession }}</dd>\n          </div>\n        </dl>\n        <p>Vacating will end the student\u2019s active hostel allocation and release the bed.</p>\n        <label class=\"erp-field-stack\">\n          <span>Reason <small>(optional)</small></span>\n          <textarea\n            class=\"erp-control\"\n            rows=\"3\"\n            [(ngModel)]=\"vacateReason\"\n            placeholder=\"Graduated, withdrawn or another reason\"\n          ></textarea>\n        </label>\n        @if (error()) {\n          <p class=\"erp-notice erp-notice--error\" role=\"alert\">{{ error() }}</p>\n        }\n      </div>\n      <footer class=\"dialog__footer\">\n        <button\n          class=\"erp-button erp-button--secondary\"\n          type=\"button\"\n          autofocus\n          (click)=\"vacateTarget.set(null)\"\n        >\n          Cancel\n        </button>\n        <button\n          class=\"erp-button erp-button--danger\"\n          type=\"button\"\n          (click)=\"confirmVacate()\"\n          [disabled]=\"saving()\"\n        >\n          {{ saving() ? 'Vacating\u2026' : 'Vacate room' }}\n        </button>\n      </footer>\n    </section>\n  </div>\n}\n", styles: ["/* ERP-LOCAL-STYLE: Hostel configuration needs linked structure, room-generation grids,\n * and a focused vacate dialog layout that are unique to this operational workspace. */\n:host {\n  display: block;\n  min-width: 0;\n}\n\n.hostel-page-actions {\n  display: flex;\n  align-items: center;\n  gap: var(--erp-space-3);\n}\n\n.hostel-directory {\n  overflow: visible;\n}\n\n.hostel-directory__search {\n  flex: 1 1 320px;\n}\n\n.hostel-directory__filters {\n  display: flex;\n  flex: 0 1 auto;\n  gap: var(--erp-space-2);\n}\n\n.hostel-directory__filters .erp-control {\n  width: 150px;\n}\n\n.hostel-directory__count {\n  min-width: max-content;\n  margin-left: auto;\n  color: var(--erp-text-muted);\n  font-size: var(--erp-font-caption);\n}\n\n.hostel-filter-toggle {\n  display: none;\n}\n\n.hostel-directory__table {\n  border-radius: 0 0 var(--erp-radius-card) var(--erp-radius-card);\n}\n\n.hostel-directory__table td {\n  height: 70px;\n}\n\n.hostel-type {\n  text-transform: capitalize;\n}\n\n.hostel-editor-form > .erp-field-stack > small {\n  margin-top: var(--erp-space-1);\n  color: var(--erp-text-muted);\n  font-size: var(--erp-font-size-xs);\n}\n\n.hostel-structure-command {\n  align-items: center;\n  border-bottom: 0;\n  border-radius: var(--erp-radius-card);\n}\n\n.hostel-structure-command__select {\n  width: min(350px, 100%);\n  flex: 0 1 350px;\n}\n\n.hostel-structure-command__summary {\n  display: grid;\n  gap: var(--erp-space-1);\n  padding-left: var(--erp-space-4);\n  border-left: 1px solid var(--erp-border-subtle);\n}\n\n.hostel-structure-command__summary strong {\n  color: var(--erp-text-heading);\n  font-size: var(--erp-font-label);\n}\n\n.hostel-structure-command__summary span,\n.hostel-structure-command__hint {\n  margin: 0;\n  color: var(--erp-text-muted);\n  font-size: var(--erp-font-caption);\n}\n\n.hostel-structure-workspace {\n  display: grid;\n  min-height: 500px;\n  grid-template-columns: 320px minmax(0, 1fr);\n  overflow: visible;\n}\n\n.hostel-structure-tree {\n  display: grid;\n  min-width: 0;\n  grid-template-rows: auto minmax(0, 1fr);\n  border-right: 1px solid var(--erp-border-subtle);\n}\n\n.hostel-structure-tree__header,\n.hostel-structure-detail__header {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  gap: var(--erp-space-3);\n  padding: var(--erp-space-4) var(--erp-space-5);\n  border-bottom: 1px solid var(--erp-border-subtle);\n}\n\n.hostel-structure-tree__header h2,\n.hostel-structure-detail__header h2,\n.hostel-structure-detail__list h3 {\n  margin: 0;\n  color: var(--erp-text-heading);\n  font-size: var(--erp-font-label);\n}\n\n.hostel-structure-tree__header p,\n.hostel-structure-detail__header p,\n.hostel-structure-detail__list > p {\n  margin: var(--erp-space-1) 0 0;\n  color: var(--erp-text-muted);\n  font-size: var(--erp-font-size-xs);\n}\n\n.hostel-structure-tree__actions {\n  display: flex;\n  flex: 0 0 auto;\n  gap: var(--erp-space-2);\n}\n\n.hostel-structure-tree__scroll {\n  min-height: 0;\n  max-height: 560px;\n  overflow-y: auto;\n  padding: var(--erp-space-2);\n}\n\n.hostel-tree-group + .hostel-tree-group {\n  margin-top: var(--erp-space-2);\n}\n\n.hostel-tree-group__toggle {\n  display: grid;\n  width: 100%;\n  min-height: 42px;\n  grid-template-columns: auto minmax(0, 1fr) auto;\n  align-items: center;\n  gap: var(--erp-space-2);\n  padding: 0 var(--erp-space-3);\n  color: var(--erp-text-strong);\n  background: transparent;\n  border: 0;\n  border-radius: var(--erp-radius-control);\n  text-align: left;\n  font-size: var(--erp-font-caption);\n  font-weight: var(--erp-weight-bold);\n  cursor: pointer;\n}\n\n.hostel-tree-group__toggle:hover {\n  background: var(--erp-surface-hover);\n}\n\n.hostel-tree-group__toggle svg {\n  transition: transform var(--erp-standard-transition);\n}\n\n.hostel-tree-group__toggle[aria-expanded='false'] svg {\n  transform: rotate(-90deg);\n}\n\n.hostel-tree-group__toggle small {\n  display: inline-grid;\n  min-width: 22px;\n  height: 22px;\n  place-items: center;\n  color: var(--erp-blue-700);\n  background: var(--erp-blue-50);\n  border-radius: var(--erp-radius-chip);\n}\n\n.hostel-tree-group__items {\n  position: relative;\n  display: grid;\n  gap: var(--erp-space-1);\n  padding: var(--erp-space-1) 0 var(--erp-space-2);\n}\n\n.hostel-tree-group__items--children {\n  margin-left: var(--erp-space-4);\n  padding-left: var(--erp-space-3);\n  border-left: 1px solid var(--erp-border-default);\n}\n\n.hostel-tree-row {\n  position: relative;\n  display: grid;\n  min-width: 0;\n  min-height: 44px;\n  grid-template-columns: minmax(0, 1fr) auto;\n  align-items: center;\n  border-radius: var(--erp-radius-control);\n  transition: var(--erp-standard-transition);\n}\n\n.hostel-tree-row:hover {\n  background: var(--erp-surface-hover);\n}\n\n.hostel-tree-row--selected {\n  background: var(--erp-blue-50);\n  box-shadow: inset 3px 0 0 var(--erp-blue-500);\n}\n\n.hostel-tree-row > button {\n  display: flex;\n  min-width: 0;\n  min-height: 44px;\n  align-items: center;\n  gap: var(--erp-space-2);\n  padding: 0 var(--erp-space-3);\n  overflow: hidden;\n  color: var(--erp-text-body);\n  background: transparent;\n  border: 0;\n  text-align: left;\n  cursor: pointer;\n}\n\n.hostel-tree-row > button span {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n\n.hostel-tree-row--selected > button {\n  color: var(--erp-text-heading);\n  font-weight: var(--erp-weight-semibold);\n}\n\n.hostel-tree-empty {\n  display: grid;\n  min-height: 72px;\n  place-items: center;\n  gap: var(--erp-space-1);\n  color: var(--erp-text-muted);\n  background: transparent;\n  border: 1px dashed var(--erp-border-default);\n  border-radius: var(--erp-radius-control);\n  font-size: var(--erp-font-caption);\n  cursor: pointer;\n}\n\n.hostel-tree-empty span {\n  color: var(--erp-blue-700);\n  font-weight: var(--erp-weight-semibold);\n}\n\n.hostel-structure-detail {\n  min-width: 0;\n}\n\n.hostel-structure-detail__header {\n  display: grid;\n  grid-template-columns: auto minmax(0, 1fr) auto;\n  align-items: center;\n}\n\n.hostel-structure-detail__metrics {\n  display: grid;\n  grid-template-columns: repeat(3, minmax(0, 1fr));\n  border-bottom: 1px solid var(--erp-border-subtle);\n}\n\n.hostel-structure-detail__metrics > span {\n  display: grid;\n  gap: var(--erp-space-1);\n  padding: var(--erp-space-4) var(--erp-space-5);\n  border-right: 1px solid var(--erp-border-subtle);\n}\n\n.hostel-structure-detail__metrics > span:last-child {\n  border-right: 0;\n}\n\n.hostel-structure-detail__metrics small {\n  color: var(--erp-text-muted);\n  font-size: var(--erp-font-size-xs);\n}\n\n.hostel-structure-detail__metrics strong {\n  color: var(--erp-text-heading);\n  font-size: var(--erp-font-size-lg);\n}\n\n.hostel-structure-detail__list {\n  padding: var(--erp-space-5);\n}\n\n.hostel-structure-detail__list > div:first-child {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: var(--erp-space-3);\n}\n\n.hostel-structure-detail__list > button {\n  display: grid;\n  width: 100%;\n  min-height: 44px;\n  grid-template-columns: auto minmax(0, 1fr) auto;\n  align-items: center;\n  gap: var(--erp-space-2);\n  padding: 0 var(--erp-space-3);\n  margin-top: var(--erp-space-2);\n  color: var(--erp-text-body);\n  background: var(--erp-surface-detail-soft);\n  border: 1px solid var(--erp-border-subtle);\n  border-radius: var(--erp-radius-control);\n  text-align: left;\n  cursor: pointer;\n}\n\n.hostel-structure-detail__list > button:hover {\n  color: var(--erp-blue-700);\n  border-color: var(--erp-border-strong);\n  background: var(--erp-blue-50);\n}\n\n.hostel-structure-detail__list > button small {\n  color: var(--erp-text-muted);\n}\n\n.hostel-structure-detail__empty {\n  min-height: 498px;\n}\n\n.hostel-structure-detail__guidance {\n  min-height: 260px;\n}\n\n.hostel-form-grid,\n.hostel-filter-grid,\n.hostel-allocation-grid {\n  display: grid;\n  grid-template-columns: repeat(3, minmax(0, 1fr));\n  gap: var(--erp-space-3);\n}\n\n.hostel-filter-grid,\n.hostel-allocation-grid {\n  grid-template-columns: repeat(4, minmax(0, 1fr));\n}\n\n.hostel-two-column {\n  display: grid;\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n  gap: var(--erp-admin-section-gap);\n}\n\n.hostel-inline-form {\n  display: flex;\n  align-items: flex-end;\n  gap: var(--erp-space-3);\n  margin-bottom: var(--erp-space-4);\n}\n\n.hostel-inline-form .erp-field-stack {\n  min-width: 0;\n  flex: 1;\n}\n\n.hostel-section-gap {\n  margin-top: var(--erp-admin-section-gap);\n}\n\n.hostel-select {\n  width: min(420px, 100%);\n}\n\n.hostel-mode-picker {\n  display: flex;\n  gap: var(--erp-space-4);\n  margin-bottom: var(--erp-space-3);\n}\n\n.hostel-mode-picker label {\n  display: inline-flex;\n  min-height: 44px;\n  align-items: center;\n  gap: var(--erp-space-2);\n}\n\n.hostel-room-command {\n  overflow: visible;\n}\n\n.hostel-room-command__controls {\n  display: grid;\n  grid-template-columns: repeat(3, minmax(150px, 1fr)) minmax(220px, 1.35fr) auto;\n  align-items: end;\n  gap: var(--erp-space-3);\n}\n\n.hostel-room-command__session {\n  grid-column: span 1;\n}\n\n.hostel-room-command__search {\n  min-width: 0;\n  align-self: end;\n}\n\n.hostel-room-command__secondary {\n  display: flex;\n  align-items: center;\n  gap: var(--erp-space-2);\n}\n\n.hostel-room-command__secondary .erp-control {\n  min-width: 148px;\n}\n\n.hostel-room-filter-toggle {\n  display: none;\n}\n\n.hostel-room-command__helper {\n  padding: 0 var(--erp-card-padding) var(--erp-space-4);\n  margin: 0;\n  color: var(--erp-text-muted);\n  font-size: var(--erp-font-caption);\n}\n\n.hostel-location-summary {\n  display: grid;\n  min-height: 82px;\n  grid-template-columns: auto minmax(180px, 1fr) minmax(240px, auto) auto;\n  align-items: center;\n  gap: var(--erp-space-4);\n  padding: var(--erp-space-4) var(--erp-card-padding);\n}\n\n.hostel-location-summary__copy,\n.hostel-location-summary__metrics,\n.hostel-capacity-progress > div:first-child {\n  display: grid;\n  gap: var(--erp-space-1);\n}\n\n.hostel-location-summary strong,\n.hostel-capacity-progress strong {\n  color: var(--erp-text-heading);\n}\n\n.hostel-location-summary span,\n.hostel-capacity-progress span,\n.hostel-capacity-progress small {\n  color: var(--erp-text-muted);\n  font-size: var(--erp-font-caption);\n}\n\n.hostel-location-summary__metrics {\n  padding-left: var(--erp-space-4);\n  border-left: 1px solid var(--erp-border-subtle);\n}\n\n.hostel-capacity-progress {\n  display: grid;\n  min-height: 92px;\n  grid-template-columns: minmax(230px, 1fr) minmax(180px, 1.4fr) auto auto;\n  align-items: center;\n  gap: var(--erp-space-4);\n  padding: var(--erp-space-4) var(--erp-card-padding);\n}\n\n.hostel-capacity-progress__bar {\n  height: 8px;\n  overflow: hidden;\n  background: var(--erp-canvas-soft);\n  border-radius: var(--erp-radius-chip);\n}\n\n.hostel-capacity-progress__bar span {\n  display: block;\n  height: 100%;\n  background: var(--erp-blue-500);\n  border-radius: inherit;\n  transition: width var(--erp-standard-transition);\n}\n\n.hostel-capacity-progress__value {\n  min-width: 44px;\n  text-align: right;\n}\n\n.hostel-room-directory .erp-table-toolbar > span {\n  color: var(--erp-text-muted);\n  font-size: var(--erp-font-caption);\n}\n\n.hostel-room-directory td {\n  height: 70px;\n}\n\n.hostel-room-loading {\n  display: grid;\n  gap: var(--erp-space-3);\n  padding: var(--erp-card-padding);\n}\n\n.hostel-room-loading .erp-skeleton {\n  height: 56px;\n  border-radius: var(--erp-radius-control);\n}\n\n.hostel-empty-actions {\n  display: flex;\n  gap: var(--erp-space-2);\n}\n\n.hostel-room-drawer {\n  width: min(480px, 100%);\n}\n\n.hostel-room-editor,\n.hostel-capacity-editor {\n  gap: var(--erp-space-5);\n}\n\n.hostel-room-editor .erp-field-stack > small,\n.hostel-capacity-editor .erp-field-stack > small {\n  color: var(--erp-text-muted);\n  font-size: var(--erp-font-size-xs);\n}\n\n.hostel-segmented {\n  display: grid;\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n  gap: var(--erp-space-1);\n  padding: var(--erp-space-1);\n  background: var(--erp-canvas-soft);\n  border: 1px solid var(--erp-border-subtle);\n  border-radius: var(--erp-radius-control);\n}\n\n.hostel-segmented button {\n  min-height: 42px;\n  padding: 0 var(--erp-space-3);\n  color: var(--erp-text-muted);\n  background: transparent;\n  border: 0;\n  border-radius: calc(var(--erp-radius-control) - 2px);\n  font: inherit;\n  font-size: var(--erp-font-caption);\n  font-weight: var(--erp-weight-semibold);\n  cursor: pointer;\n  transition: var(--erp-standard-transition);\n}\n\n.hostel-segmented button:hover {\n  color: var(--erp-text-heading);\n}\n\n.hostel-segmented .hostel-segmented__item--active {\n  color: var(--erp-blue-700);\n  background: var(--erp-surface-overlay);\n  box-shadow: var(--erp-shadow-card);\n}\n\n.hostel-generation-grid {\n  display: grid;\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n  gap: var(--erp-space-3);\n}\n\n.hostel-generation-grid .erp-field-stack:last-child {\n  grid-column: 1 / -1;\n}\n\n.hostel-generation-preview,\n.hostel-capacity-summary {\n  display: grid;\n  gap: var(--erp-space-2);\n  padding: var(--erp-space-4);\n  background: var(--erp-blue-50);\n  border: 1px solid var(--erp-border-default);\n  border-radius: var(--erp-radius-card);\n}\n\n.hostel-generation-preview > span,\n.hostel-capacity-summary > span {\n  color: var(--erp-blue-700);\n  font-size: var(--erp-font-size-xs);\n  font-weight: var(--erp-weight-bold);\n  letter-spacing: 0.06em;\n  text-transform: uppercase;\n}\n\n.hostel-generation-preview > strong,\n.hostel-capacity-summary > strong {\n  color: var(--erp-text-heading);\n  font-size: var(--erp-font-label);\n}\n\n.hostel-generation-preview > div {\n  display: flex;\n  flex-wrap: wrap;\n  gap: var(--erp-space-2);\n}\n\n.hostel-generation-preview small {\n  padding: var(--erp-space-1) var(--erp-space-2);\n  color: var(--erp-text-body);\n  background: var(--erp-surface-overlay);\n  border: 1px solid var(--erp-border-subtle);\n  border-radius: var(--erp-radius-chip);\n}\n\n.hostel-capacity-summary small {\n  color: var(--erp-text-muted);\n  font-size: var(--erp-font-caption);\n}\n\n.hostel-room-details dl {\n  display: grid;\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n  gap: var(--erp-space-3);\n  margin: 0;\n}\n\n.hostel-room-details dl > div {\n  display: grid;\n  gap: var(--erp-space-1);\n  min-height: 72px;\n  padding: var(--erp-space-3);\n  background: var(--erp-surface-detail-soft);\n  border: 1px solid var(--erp-border-subtle);\n  border-radius: var(--erp-radius-control);\n}\n\n.hostel-room-details dt {\n  color: var(--erp-text-muted);\n  font-size: var(--erp-font-size-xs);\n}\n\n.hostel-room-details dd {\n  margin: 0;\n  color: var(--erp-text-heading);\n  font-weight: var(--erp-weight-semibold);\n}\n\n.hostel-filter-action {\n  align-self: end;\n}\n\n.hostel-form-actions {\n  display: flex;\n  justify-content: flex-end;\n  gap: var(--erp-space-2);\n  margin-top: var(--erp-space-4);\n}\n\n.hostel-editor-card,\n.hostel-overview-table {\n  margin-top: var(--erp-admin-section-gap);\n  margin-bottom: var(--erp-admin-section-gap);\n}\n\n.hostel-overview-filter {\n  display: flex;\n  align-items: flex-end;\n  gap: var(--erp-space-3);\n}\n\n.hostel-overview-filter .erp-field-stack {\n  width: min(320px, 100%);\n}\n\n.hostel-dialog-layer {\n  position: fixed;\n  z-index: var(--erp-z-modal);\n  inset: 0;\n  display: grid;\n  place-items: center;\n  padding: var(--erp-space-4);\n  background: var(--erp-backdrop);\n}\n\n.hostel-dialog-backdrop {\n  position: absolute;\n  inset: 0;\n  border: 0;\n  background: transparent;\n}\n\n.hostel-dialog {\n  position: relative;\n  width: min(100%, var(--erp-modal-width));\n  padding: var(--erp-card-padding);\n  background: var(--erp-surface-overlay);\n  border: 1px solid var(--erp-border-default);\n  border-radius: var(--erp-radius-overlay);\n  box-shadow: var(--erp-shadow-overlay);\n}\n\n@media (max-width: 1000px) {\n  .hostel-two-column {\n    grid-template-columns: 1fr;\n  }\n\n  .hostel-filter-grid,\n  .hostel-allocation-grid {\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n  }\n\n  .hostel-directory .erp-command-bar {\n    flex-wrap: wrap;\n  }\n\n  .hostel-directory__search {\n    flex-basis: 100%;\n  }\n\n  .hostel-structure-workspace {\n    grid-template-columns: 290px minmax(0, 1fr);\n  }\n\n  .hostel-room-command__controls {\n    grid-template-columns: repeat(3, minmax(0, 1fr));\n  }\n\n  .hostel-room-command__search {\n    grid-column: span 2;\n  }\n\n  .hostel-room-command__secondary {\n    justify-content: flex-end;\n  }\n\n  .hostel-location-summary {\n    grid-template-columns: auto minmax(0, 1fr) auto;\n  }\n\n  .hostel-location-summary__metrics {\n    grid-column: 2 / -1;\n    padding: var(--erp-space-3) 0 0;\n    border-top: 1px solid var(--erp-border-subtle);\n    border-left: 0;\n  }\n\n  .hostel-capacity-progress {\n    grid-template-columns: minmax(0, 1fr) auto;\n  }\n\n  .hostel-capacity-progress__bar {\n    grid-column: 1 / -1;\n    grid-row: 2;\n  }\n}\n\n@media (max-width: 720px) {\n  .hostel-form-grid,\n  .hostel-filter-grid,\n  .hostel-allocation-grid {\n    grid-template-columns: 1fr;\n  }\n\n  .hostel-form-actions,\n  .hostel-overview-filter,\n  .hostel-inline-form {\n    align-items: stretch;\n    flex-direction: column;\n  }\n\n  .hostel-page-actions {\n    width: 100%;\n  }\n\n  .hostel-page-actions > .erp-button,\n  .hostel-page-actions > erp-compact-action-menu {\n    flex: 1;\n  }\n\n  .hostel-page-actions > erp-compact-action-menu {\n    justify-content: flex-end;\n  }\n\n  .hostel-filter-toggle {\n    display: inline-flex;\n  }\n\n  .hostel-directory__filters {\n    display: none;\n    width: 100%;\n  }\n\n  .hostel-directory__filters--open {\n    display: grid;\n    grid-template-columns: 1fr;\n  }\n\n  .hostel-directory__filters .erp-control {\n    width: 100%;\n  }\n\n  .hostel-directory__count {\n    margin-left: 0;\n  }\n\n  .hostel-structure-command {\n    align-items: stretch;\n    flex-direction: column;\n  }\n\n  .hostel-structure-command__select {\n    width: 100%;\n    flex-basis: auto;\n  }\n\n  .hostel-structure-command__summary {\n    padding: var(--erp-space-3) 0 0;\n    border-top: 1px solid var(--erp-border-subtle);\n    border-left: 0;\n  }\n\n  .hostel-structure-workspace {\n    grid-template-columns: 1fr;\n  }\n\n  .hostel-structure-tree {\n    border-right: 0;\n    border-bottom: 1px solid var(--erp-border-subtle);\n  }\n\n  .hostel-structure-tree__scroll {\n    max-height: 380px;\n  }\n\n  .hostel-structure-detail__empty {\n    min-height: 260px;\n  }\n\n  .hostel-structure-detail__metrics {\n    grid-template-columns: 1fr;\n  }\n\n  .hostel-structure-detail__metrics > span {\n    border-right: 0;\n    border-bottom: 1px solid var(--erp-border-subtle);\n  }\n\n  .hostel-room-command__controls {\n    grid-template-columns: 1fr;\n  }\n\n  .hostel-room-command__search {\n    grid-column: auto;\n  }\n\n  .hostel-room-filter-toggle {\n    display: inline-flex;\n  }\n\n  .hostel-room-command__secondary {\n    display: none;\n    grid-template-columns: 1fr;\n  }\n\n  .hostel-room-command__secondary--open {\n    display: grid;\n  }\n\n  .hostel-room-command__secondary .erp-control {\n    width: 100%;\n  }\n\n  .hostel-location-summary,\n  .hostel-capacity-progress {\n    grid-template-columns: 1fr;\n  }\n\n  .hostel-location-summary > .erp-empty-panel__icon {\n    display: none;\n  }\n\n  .hostel-location-summary__metrics,\n  .hostel-capacity-progress__bar {\n    grid-column: auto;\n    grid-row: auto;\n  }\n\n  .hostel-location-summary .erp-button,\n  .hostel-capacity-progress .erp-button {\n    width: 100%;\n  }\n\n  .hostel-capacity-progress__value {\n    text-align: left;\n  }\n\n  .hostel-empty-actions,\n  .hostel-generation-grid,\n  .hostel-room-details dl {\n    grid-template-columns: 1fr;\n  }\n\n  .hostel-empty-actions {\n    width: 100%;\n    flex-direction: column;\n  }\n\n  .hostel-empty-actions .erp-button {\n    width: 100%;\n  }\n\n  .hostel-generation-grid .erp-field-stack:last-child {\n    grid-column: auto;\n  }\n}\n"] }]
    }], () => [], { closePhaseOneOverlays: [{
            type: HostListener,
            args: ['document:keydown.escape']
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(HostelManagementComponent, { className: "HostelManagementComponent", filePath: "frontend/src/app/features/admin/hostel-management/hostel-management.component.ts", lineNumber: 103 }); })();
const SECTION_CONTENT = {
    details: {
        title: 'Hostel Details',
        description: 'Create and manage hostel records.',
    },
    structure: {
        title: 'Hostel Structure',
        description: 'Organize blocks and floors for the selected hostel.',
    },
    rooms: {
        title: 'Rooms',
        description: 'Create, generate and manage hostel rooms.',
    },
    capacity: {
        title: 'Room Capacity',
        description: 'Configure session-wise room capacity.',
    },
    allocation: {
        title: 'Student Allocation',
        description: 'Allocate, transfer and vacate hostel beds.',
    },
    overview: {
        title: 'Occupancy Overview',
        description: 'Monitor rooms, beds and availability.',
    },
};
function currentAcademicSession() {
    const now = new Date();
    const start = now.getMonth() >= 5 ? now.getFullYear() : now.getFullYear() - 1;
    return `${start}/${String(start + 1).slice(-2)}`;
}
