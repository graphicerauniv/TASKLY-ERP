import { CdkTrapFocus } from '@angular/cdk/a11y';
import { CommonModule, DOCUMENT } from '@angular/common';
import { ChangeDetectionStrategy, Component, HostListener, effect, inject, signal, } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { LucideArrowRight, LucideBookOpen, LucideBuilding2, LucideCalendarDays, LucideChevronLeft, LucideChevronRight, LucideColumns3, LucideFilter, LucideGraduationCap, LucideLayers3, LucideNetwork, LucidePlus, LucideSearch, LucideUsersRound, LucideX, } from '@lucide/angular';
import { forkJoin } from 'rxjs';
import { ApiService } from '../../../core/api.service';
import { ERP_PAGINATION } from '../../../core/config/data-view.constants';
import { AdminIllustrationComponent } from '../../../shared/ui/admin-illustration/admin-illustration.component';
import { AdminPageComponent } from '../../../shared/ui/admin-page/admin-page.component';
import { CompactActionMenuComponent, } from '../../../shared/ui/compact-action-menu/compact-action-menu.component';
import { MultiSelectDropdownComponent, } from '../../../shared/ui/multi-select-dropdown/multi-select-dropdown.component';
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
import * as i2 from "@angular/common";
const _c0 = () => [];
const _c1 = () => [1, 2, 3, 4, 5, 6, 7, 8];
const _c2 = a0 => [a0];
const _forTrack0 = ($index, $item) => $item._id;
function AcademicStructureComponent_Conditional_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 3);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r0.error());
} }
function AcademicStructureComponent_Conditional_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 4);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r0.message());
} }
function AcademicStructureComponent_Conditional_25_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(0, "svg", 10);
} }
function AcademicStructureComponent_Conditional_26_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(0, "svg", 11);
} }
function AcademicStructureComponent_Conditional_42_Template(rf, ctx) { if (rf & 1) {
    const _r2 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 21)(1, "label")(2, "span");
    i0.ɵɵtext(3, "Status");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "select", 34);
    i0.ɵɵlistener("ngModelChange", function AcademicStructureComponent_Conditional_42_Template_select_ngModelChange_4_listener($event) { i0.ɵɵrestoreView(_r2); const ctx_r0 = i0.ɵɵnextContext(); ctx_r0.statusFilter.set($event); return i0.ɵɵresetView(ctx_r0.page.set(1)); });
    i0.ɵɵelementStart(5, "option", 35);
    i0.ɵɵtext(6, "All statuses");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "option", 36);
    i0.ɵɵtext(8, "Active");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(9, "option", 37);
    i0.ɵɵtext(10, "Inactive");
    i0.ɵɵelementEnd()()()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("ngModel", ctx_r0.statusFilter());
} }
function AcademicStructureComponent_Conditional_47_Template(rf, ctx) { if (rf & 1) {
    const _r3 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 23)(1, "label")(2, "input", 38);
    i0.ɵɵlistener("ngModelChange", function AcademicStructureComponent_Conditional_47_Template_input_ngModelChange_2_listener($event) { i0.ɵɵrestoreView(_r3); const ctx_r0 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r0.showPeriodColumn.set($event)); });
    i0.ɵɵelementEnd();
    i0.ɵɵtext(3, " Academic period");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "label")(5, "input", 38);
    i0.ɵɵlistener("ngModelChange", function AcademicStructureComponent_Conditional_47_Template_input_ngModelChange_5_listener($event) { i0.ɵɵrestoreView(_r3); const ctx_r0 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r0.showContextColumn.set($event)); });
    i0.ɵɵelementEnd();
    i0.ɵɵtext(6, " Mapping details");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "label")(8, "input", 38);
    i0.ɵɵlistener("ngModelChange", function AcademicStructureComponent_Conditional_47_Template_input_ngModelChange_8_listener($event) { i0.ɵɵrestoreView(_r3); const ctx_r0 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r0.showStatusColumn.set($event)); });
    i0.ɵɵelementEnd();
    i0.ɵɵtext(9, " Status");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngModel", ctx_r0.showPeriodColumn());
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngModel", ctx_r0.showContextColumn());
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngModel", ctx_r0.showStatusColumn());
} }
function AcademicStructureComponent_Conditional_55_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "th");
    i0.ɵɵtext(1, "Academic period");
    i0.ɵɵelementEnd();
} }
function AcademicStructureComponent_Conditional_56_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "th");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r0.section() === "groups" ? "Institution / mapping" : ctx_r0.section() === "sections" ? "Mapped groups" : "Group and section", " ");
} }
function AcademicStructureComponent_Conditional_57_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "th");
    i0.ɵɵtext(1, "Status");
    i0.ɵɵelementEnd();
} }
function AcademicStructureComponent_For_62_Conditional_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td");
    i0.ɵɵtext(1);
    i0.ɵɵelementStart(2, "small");
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const item_r6 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", item_r6.academicSession);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1("Semester ", item_r6.semester);
} }
function AcademicStructureComponent_For_62_Conditional_5_Conditional_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "strong");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(2, "small");
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r6 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(item_r6.collegeName || "\u2014");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate((item_r6.departmentNames == null ? null : item_r6.departmentNames.join(", ")) || "No department mapping");
} }
function AcademicStructureComponent_For_62_Conditional_5_Conditional_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtext(0);
} if (rf & 2) {
    const item_r6 = i0.ɵɵnextContext(2).$implicit;
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵtextInterpolate1(" ", ctx_r0.groupNames(item_r6.groupIds || i0.ɵɵpureFunction0(1, _c0)), " ");
} }
function AcademicStructureComponent_For_62_Conditional_5_Conditional_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "strong");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(2, "small");
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r6 = i0.ɵɵnextContext(2).$implicit;
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r0.groupName(item_r6.groupId));
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r0.sectionName(item_r6.sectionId));
} }
function AcademicStructureComponent_For_62_Conditional_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td");
    i0.ɵɵconditionalCreate(1, AcademicStructureComponent_For_62_Conditional_5_Conditional_1_Template, 4, 2)(2, AcademicStructureComponent_For_62_Conditional_5_Conditional_2_Template, 1, 2)(3, AcademicStructureComponent_For_62_Conditional_5_Conditional_3_Template, 4, 2);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵconditional(ctx_r0.section() === "groups" ? 1 : ctx_r0.section() === "sections" ? 2 : 3);
} }
function AcademicStructureComponent_For_62_Conditional_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td")(1, "span", 40);
    i0.ɵɵelement(2, "i", 41);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const item_r6 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance();
    i0.ɵɵclassProp("erp-status--neutral", !item_r6.isActive);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1("", item_r6.isActive ? "Active" : "Inactive", " ");
} }
function AcademicStructureComponent_For_62_Template(rf, ctx) { if (rf & 1) {
    const _r5 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "tr")(1, "td")(2, "strong");
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd()();
    i0.ɵɵconditionalCreate(4, AcademicStructureComponent_For_62_Conditional_4_Template, 4, 2, "td");
    i0.ɵɵconditionalCreate(5, AcademicStructureComponent_For_62_Conditional_5_Template, 4, 1, "td");
    i0.ɵɵconditionalCreate(6, AcademicStructureComponent_For_62_Conditional_6_Template, 4, 3, "td");
    i0.ɵɵelementStart(7, "td", 25)(8, "erp-compact-action-menu", 39);
    i0.ɵɵlistener("selected", function AcademicStructureComponent_For_62_Template_erp_compact_action_menu_selected_8_listener($event) { const item_r6 = i0.ɵɵrestoreView(_r5).$implicit; const ctx_r0 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r0.handleAction($event, item_r6)); });
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const item_r6 = ctx.$implicit;
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(item_r6.name);
    i0.ɵɵadvance();
    i0.ɵɵconditional(ctx_r0.showPeriodColumn() ? 4 : -1);
    i0.ɵɵadvance();
    i0.ɵɵconditional(ctx_r0.showContextColumn() ? 5 : -1);
    i0.ɵɵadvance();
    i0.ɵɵconditional(ctx_r0.showStatusColumn() ? 6 : -1);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("items", ctx_r0.rowActions);
} }
function AcademicStructureComponent_ForEmpty_63_Conditional_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "span", 43);
    i0.ɵɵelementStart(1, "h2");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1("Loading ", ctx_r0.title().toLowerCase(), "\u2026");
} }
function AcademicStructureComponent_ForEmpty_63_Conditional_4_Conditional_5_Template(rf, ctx) { if (rf & 1) {
    const _r4 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 19);
    i0.ɵɵlistener("click", function AcademicStructureComponent_ForEmpty_63_Conditional_4_Conditional_5_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r4); const ctx_r0 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r0.openCreate()); });
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" Create ", ctx_r0.singular(), " ");
} }
function AcademicStructureComponent_ForEmpty_63_Conditional_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "erp-admin-illustration", 44);
    i0.ɵɵelementStart(1, "h2");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "p");
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵconditionalCreate(5, AcademicStructureComponent_ForEmpty_63_Conditional_4_Conditional_5_Template, 2, 1, "button", 45);
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("kind", ctx_r0.search || ctx_r0.statusFilter() !== "all" ? "noResults" : "dataConfiguration");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", ctx_r0.search || ctx_r0.statusFilter() !== "all" ? "No matching results" : "No " + ctx_r0.title().toLowerCase() + " created", " ");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", ctx_r0.search || ctx_r0.statusFilter() !== "all" ? "Try changing your search or filters." : ctx_r0.description(), " ");
    i0.ɵɵadvance();
    i0.ɵɵconditional(!ctx_r0.search && ctx_r0.statusFilter() === "all" ? 5 : -1);
} }
function AcademicStructureComponent_ForEmpty_63_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "tr")(1, "td")(2, "div", 42);
    i0.ɵɵconditionalCreate(3, AcademicStructureComponent_ForEmpty_63_Conditional_3_Template, 3, 1)(4, AcademicStructureComponent_ForEmpty_63_Conditional_4_Template, 6, 4);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵattribute("colspan", ctx_r0.tableColspan());
    i0.ɵɵadvance(2);
    i0.ɵɵconditional(ctx_r0.loading() ? 3 : 4);
} }
function AcademicStructureComponent_For_70_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 28);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const size_r7 = ctx.$implicit;
    i0.ɵɵproperty("ngValue", size_r7);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1("", size_r7, " / page");
} }
function AcademicStructureComponent_Conditional_75_Conditional_14_For_12_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 57);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r10 = ctx.$implicit;
    i0.ɵɵproperty("value", item_r10._id);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(item_r10.name);
} }
function AcademicStructureComponent_Conditional_75_Conditional_14_For_20_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 57);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r11 = ctx.$implicit;
    i0.ɵɵproperty("value", item_r11._id);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(item_r11.name);
} }
function AcademicStructureComponent_Conditional_75_Conditional_14_Template(rf, ctx) { if (rf & 1) {
    const _r9 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "fieldset", 52)(1, "legend");
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(2, "svg", 64);
    i0.ɵɵtext(3, " Institution");
    i0.ɵɵelementEnd();
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(4, "div", 54)(5, "label")(6, "span");
    i0.ɵɵtext(7, "University *");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "select", 65);
    i0.ɵɵtwoWayListener("ngModelChange", function AcademicStructureComponent_Conditional_75_Conditional_14_Template_select_ngModelChange_8_listener($event) { i0.ɵɵrestoreView(_r9); const ctx_r0 = i0.ɵɵnextContext(2); i0.ɵɵtwoWayBindingSet(ctx_r0.universityId, $event) || (ctx_r0.universityId = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementStart(9, "option", 56);
    i0.ɵɵtext(10, "Select university");
    i0.ɵɵelementEnd();
    i0.ɵɵrepeaterCreate(11, AcademicStructureComponent_Conditional_75_Conditional_14_For_12_Template, 2, 2, "option", 57, _forTrack0);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(13, "label")(14, "span");
    i0.ɵɵtext(15, "College *");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(16, "select", 66);
    i0.ɵɵtwoWayListener("ngModelChange", function AcademicStructureComponent_Conditional_75_Conditional_14_Template_select_ngModelChange_16_listener($event) { i0.ɵɵrestoreView(_r9); const ctx_r0 = i0.ɵɵnextContext(2); i0.ɵɵtwoWayBindingSet(ctx_r0.collegeId, $event) || (ctx_r0.collegeId = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementStart(17, "option", 56);
    i0.ɵɵtext(18, "Select a university first");
    i0.ɵɵelementEnd();
    i0.ɵɵrepeaterCreate(19, AcademicStructureComponent_Conditional_75_Conditional_14_For_20_Template, 2, 2, "option", 57, _forTrack0);
    i0.ɵɵelementEnd()()()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(8);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r0.universityId);
    i0.ɵɵadvance(3);
    i0.ɵɵrepeater(ctx_r0.master("university"));
    i0.ɵɵadvance(5);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r0.collegeId);
    i0.ɵɵadvance(3);
    i0.ɵɵrepeater(ctx_r0.scopedMaster("college", ctx_r0.universityId ? i0.ɵɵpureFunction1(2, _c2, ctx_r0.universityId) : i0.ɵɵpureFunction0(4, _c0)));
} }
function AcademicStructureComponent_Conditional_75_For_27_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 57);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r12 = ctx.$implicit;
    i0.ɵɵproperty("value", item_r12.name);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(item_r12.name);
} }
function AcademicStructureComponent_Conditional_75_For_33_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 28);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const value_r13 = ctx.$implicit;
    i0.ɵɵproperty("ngValue", value_r13);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1("Semester ", value_r13);
} }
function AcademicStructureComponent_Conditional_75_Conditional_34_For_16_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 57);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r15 = ctx.$implicit;
    i0.ɵɵproperty("value", item_r15._id);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(item_r15.name);
} }
function AcademicStructureComponent_Conditional_75_Conditional_34_Template(rf, ctx) { if (rf & 1) {
    const _r14 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "fieldset", 52)(1, "legend");
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(2, "svg", 67);
    i0.ɵɵtext(3, " Academic mapping");
    i0.ɵɵelementEnd();
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(4, "div", 54)(5, "div", 68)(6, "span");
    i0.ɵɵtext(7, "Departments *");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "erp-multi-select-dropdown", 69);
    i0.ɵɵlistener("valueChange", function AcademicStructureComponent_Conditional_75_Conditional_34_Template_erp_multi_select_dropdown_valueChange_8_listener($event) { i0.ɵɵrestoreView(_r14); const ctx_r0 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r0.departmentIds = $event); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(9, "label")(10, "span");
    i0.ɵɵtext(11, "Level/course type");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(12, "select", 70);
    i0.ɵɵtwoWayListener("ngModelChange", function AcademicStructureComponent_Conditional_75_Conditional_34_Template_select_ngModelChange_12_listener($event) { i0.ɵɵrestoreView(_r14); const ctx_r0 = i0.ɵɵnextContext(2); i0.ɵɵtwoWayBindingSet(ctx_r0.levelId, $event) || (ctx_r0.levelId = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementStart(13, "option", 56);
    i0.ɵɵtext(14, "Select level");
    i0.ɵɵelementEnd();
    i0.ɵɵrepeaterCreate(15, AcademicStructureComponent_Conditional_75_Conditional_34_For_16_Template, 2, 2, "option", 57, _forTrack0);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(17, "div", 68)(18, "span");
    i0.ɵɵtext(19, "Courses");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(20, "erp-multi-select-dropdown", 71);
    i0.ɵɵlistener("valueChange", function AcademicStructureComponent_Conditional_75_Conditional_34_Template_erp_multi_select_dropdown_valueChange_20_listener($event) { i0.ɵɵrestoreView(_r14); const ctx_r0 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r0.courseIds = $event); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(21, "div", 68)(22, "span");
    i0.ɵɵtext(23, "Branches");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(24, "erp-multi-select-dropdown", 72);
    i0.ɵɵlistener("valueChange", function AcademicStructureComponent_Conditional_75_Conditional_34_Template_erp_multi_select_dropdown_valueChange_24_listener($event) { i0.ɵɵrestoreView(_r14); const ctx_r0 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r0.branchIds = $event); });
    i0.ɵɵelementEnd()()()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(8);
    i0.ɵɵproperty("options", ctx_r0.options(ctx_r0.scopedMaster("department", ctx_r0.collegeId ? i0.ɵɵpureFunction1(7, _c2, ctx_r0.collegeId) : i0.ɵɵpureFunction0(9, _c0))))("value", ctx_r0.departmentIds);
    i0.ɵɵadvance(4);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r0.levelId);
    i0.ɵɵadvance(3);
    i0.ɵɵrepeater(ctx_r0.scopedMaster("level", ctx_r0.departmentIds));
    i0.ɵɵadvance(5);
    i0.ɵɵproperty("options", ctx_r0.options(ctx_r0.scopedMaster("course", ctx_r0.levelId ? i0.ɵɵpureFunction1(10, _c2, ctx_r0.levelId) : i0.ɵɵpureFunction0(12, _c0))))("value", ctx_r0.courseIds);
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("options", ctx_r0.options(ctx_r0.master("branch")))("value", ctx_r0.branchIds);
} }
function AcademicStructureComponent_Conditional_75_Conditional_35_Template(rf, ctx) { if (rf & 1) {
    const _r16 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "fieldset", 52)(1, "legend");
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(2, "svg", 73);
    i0.ɵɵtext(3, " Group mapping");
    i0.ɵɵelementEnd();
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(4, "div", 68)(5, "span");
    i0.ɵɵtext(6, "Groups *");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "erp-multi-select-dropdown", 74);
    i0.ɵɵlistener("valueChange", function AcademicStructureComponent_Conditional_75_Conditional_35_Template_erp_multi_select_dropdown_valueChange_7_listener($event) { i0.ɵɵrestoreView(_r16); const ctx_r0 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r0.groupIds = $event); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "small");
    i0.ɵɵtext(9, "A section may be mapped to multiple groups.");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(10, "div", 75);
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(11, "svg", 8);
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(12, "span");
    i0.ɵɵtext(13);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(7);
    i0.ɵɵproperty("options", ctx_r0.options(ctx_r0.groupsForPeriod()))("value", ctx_r0.groupIds);
    i0.ɵɵadvance(6);
    i0.ɵɵtextInterpolate(ctx_r0.groupIds.length ? ctx_r0.groupNames(ctx_r0.groupIds) : "Selected groups will appear here.");
} }
function AcademicStructureComponent_Conditional_75_Conditional_36_For_12_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 57);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r18 = ctx.$implicit;
    i0.ɵɵproperty("value", item_r18._id);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(item_r18.name);
} }
function AcademicStructureComponent_Conditional_75_Conditional_36_For_21_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 57);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r19 = ctx.$implicit;
    i0.ɵɵproperty("value", item_r19._id);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(item_r19.name);
} }
function AcademicStructureComponent_Conditional_75_Conditional_36_Template(rf, ctx) { if (rf & 1) {
    const _r17 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "fieldset", 52)(1, "legend");
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(2, "svg", 73);
    i0.ɵɵtext(3, " Teaching scope");
    i0.ɵɵelementEnd();
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(4, "div", 76)(5, "label")(6, "span");
    i0.ɵɵtext(7, "Group *");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "select", 77);
    i0.ɵɵtwoWayListener("ngModelChange", function AcademicStructureComponent_Conditional_75_Conditional_36_Template_select_ngModelChange_8_listener($event) { i0.ɵɵrestoreView(_r17); const ctx_r0 = i0.ɵɵnextContext(2); i0.ɵɵtwoWayBindingSet(ctx_r0.groupId, $event) || (ctx_r0.groupId = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵlistener("ngModelChange", function AcademicStructureComponent_Conditional_75_Conditional_36_Template_select_ngModelChange_8_listener() { i0.ɵɵrestoreView(_r17); const ctx_r0 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r0.sectionId = ""); });
    i0.ɵɵelementStart(9, "option", 56);
    i0.ɵɵtext(10);
    i0.ɵɵelementEnd();
    i0.ɵɵrepeaterCreate(11, AcademicStructureComponent_Conditional_75_Conditional_36_For_12_Template, 2, 2, "option", 57, _forTrack0);
    i0.ɵɵelementEnd()();
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(13, "svg", 78);
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(14, "label")(15, "span");
    i0.ɵɵtext(16, "Section *");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(17, "select", 79);
    i0.ɵɵtwoWayListener("ngModelChange", function AcademicStructureComponent_Conditional_75_Conditional_36_Template_select_ngModelChange_17_listener($event) { i0.ɵɵrestoreView(_r17); const ctx_r0 = i0.ɵɵnextContext(2); i0.ɵɵtwoWayBindingSet(ctx_r0.sectionId, $event) || (ctx_r0.sectionId = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementStart(18, "option", 56);
    i0.ɵɵtext(19);
    i0.ɵɵelementEnd();
    i0.ɵɵrepeaterCreate(20, AcademicStructureComponent_Conditional_75_Conditional_36_For_21_Template, 2, 2, "option", 57, _forTrack0);
    i0.ɵɵelementEnd()()()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(8);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r0.groupId);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", ctx_r0.session ? "Select group" : "Select a session first", " ");
    i0.ɵɵadvance();
    i0.ɵɵrepeater(ctx_r0.groupsForPeriod());
    i0.ɵɵadvance(6);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r0.sectionId);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", ctx_r0.groupId ? "Select section" : "Select a group first", " ");
    i0.ɵɵadvance();
    i0.ɵɵrepeater(ctx_r0.sectionsForGroup());
} }
function AcademicStructureComponent_Conditional_75_Conditional_39_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(0, "svg", 80);
    i0.ɵɵtext(1, " Set identity ");
} }
function AcademicStructureComponent_Conditional_75_Conditional_40_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(0, "svg", 67);
    i0.ɵɵtext(1, " Section details ");
} }
function AcademicStructureComponent_Conditional_75_Conditional_41_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(0, "svg", 73);
    i0.ɵɵtext(1, " Group identity ");
} }
function AcademicStructureComponent_Conditional_75_Template(rf, ctx) { if (rf & 1) {
    const _r8 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 33)(1, "button", 46);
    i0.ɵɵlistener("click", function AcademicStructureComponent_Conditional_75_Template_button_click_1_listener() { i0.ɵɵrestoreView(_r8); const ctx_r0 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r0.closeDrawer()); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(2, "aside", 47)(3, "header", 48)(4, "div")(5, "small");
    i0.ɵɵtext(6, "ACADEMIC STRUCTURE");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "h2");
    i0.ɵɵtext(8);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(9, "p");
    i0.ɵɵtext(10);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(11, "button", 49);
    i0.ɵɵlistener("click", function AcademicStructureComponent_Conditional_75_Template_button_click_11_listener() { i0.ɵɵrestoreView(_r8); const ctx_r0 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r0.closeDrawer()); });
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(12, "svg", 50);
    i0.ɵɵelementEnd()();
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(13, "form", 51);
    i0.ɵɵlistener("ngSubmit", function AcademicStructureComponent_Conditional_75_Template_form_ngSubmit_13_listener() { i0.ɵɵrestoreView(_r8); const ctx_r0 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r0.save()); });
    i0.ɵɵconditionalCreate(14, AcademicStructureComponent_Conditional_75_Conditional_14_Template, 21, 5, "fieldset", 52);
    i0.ɵɵelementStart(15, "fieldset", 52)(16, "legend");
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(17, "svg", 53);
    i0.ɵɵtext(18, " Academic period");
    i0.ɵɵelementEnd();
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(19, "div", 54)(20, "label")(21, "span");
    i0.ɵɵtext(22, "Academic session *");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(23, "select", 55);
    i0.ɵɵtwoWayListener("ngModelChange", function AcademicStructureComponent_Conditional_75_Template_select_ngModelChange_23_listener($event) { i0.ɵɵrestoreView(_r8); const ctx_r0 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r0.session, $event) || (ctx_r0.session = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementStart(24, "option", 56);
    i0.ɵɵtext(25, "Select session");
    i0.ɵɵelementEnd();
    i0.ɵɵrepeaterCreate(26, AcademicStructureComponent_Conditional_75_For_27_Template, 2, 2, "option", 57, _forTrack0);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(28, "label")(29, "span");
    i0.ɵɵtext(30, "Semester *");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(31, "select", 58);
    i0.ɵɵtwoWayListener("ngModelChange", function AcademicStructureComponent_Conditional_75_Template_select_ngModelChange_31_listener($event) { i0.ɵɵrestoreView(_r8); const ctx_r0 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r0.semester, $event) || (ctx_r0.semester = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵrepeaterCreate(32, AcademicStructureComponent_Conditional_75_For_33_Template, 2, 2, "option", 28, i0.ɵɵrepeaterTrackByIdentity);
    i0.ɵɵelementEnd()()()();
    i0.ɵɵconditionalCreate(34, AcademicStructureComponent_Conditional_75_Conditional_34_Template, 25, 13, "fieldset", 52);
    i0.ɵɵconditionalCreate(35, AcademicStructureComponent_Conditional_75_Conditional_35_Template, 14, 3, "fieldset", 52);
    i0.ɵɵconditionalCreate(36, AcademicStructureComponent_Conditional_75_Conditional_36_Template, 22, 4, "fieldset", 52);
    i0.ɵɵelementStart(37, "fieldset", 52)(38, "legend");
    i0.ɵɵconditionalCreate(39, AcademicStructureComponent_Conditional_75_Conditional_39_Template, 2, 0)(40, AcademicStructureComponent_Conditional_75_Conditional_40_Template, 2, 0)(41, AcademicStructureComponent_Conditional_75_Conditional_41_Template, 2, 0);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(42, "label")(43, "span");
    i0.ɵɵtext(44);
    i0.ɵɵpipe(45, "titlecase");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(46, "input", 59);
    i0.ɵɵtwoWayListener("ngModelChange", function AcademicStructureComponent_Conditional_75_Template_input_ngModelChange_46_listener($event) { i0.ɵɵrestoreView(_r8); const ctx_r0 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r0.name, $event) || (ctx_r0.name = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(47, "section", 60);
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(48, "svg", 61);
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(49, "span")(50, "strong");
    i0.ɵɵtext(51);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(52, "small");
    i0.ɵɵtext(53);
    i0.ɵɵelementEnd()()()();
    i0.ɵɵelementStart(54, "footer", 62)(55, "button", 19);
    i0.ɵɵlistener("click", function AcademicStructureComponent_Conditional_75_Template_button_click_55_listener() { i0.ɵɵrestoreView(_r8); const ctx_r0 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r0.closeDrawer()); });
    i0.ɵɵtext(56, " Cancel ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(57, "button", 63);
    i0.ɵɵlistener("click", function AcademicStructureComponent_Conditional_75_Template_button_click_57_listener() { i0.ɵɵrestoreView(_r8); const ctx_r0 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r0.save()); });
    i0.ɵɵtext(58);
    i0.ɵɵelementEnd()()()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵariaProperty("aria-label", i0.ɵɵinterpolate1("Close create ", ctx_r0.singular(), " drawer"));
    i0.ɵɵadvance();
    i0.ɵɵproperty("cdkTrapFocusAutoCapture", true);
    i0.ɵɵattribute("aria-label", (ctx_r0.editingId() ? "Edit " : "Create ") + ctx_r0.singular());
    i0.ɵɵadvance(6);
    i0.ɵɵtextInterpolate2("", ctx_r0.editingId() ? "Edit" : "Create", " ", ctx_r0.singular());
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r0.drawerDescription());
    i0.ɵɵadvance(4);
    i0.ɵɵconditional(ctx_r0.section() === "groups" ? 14 : -1);
    i0.ɵɵadvance(9);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r0.session);
    i0.ɵɵadvance(3);
    i0.ɵɵrepeater(ctx_r0.master("academic"));
    i0.ɵɵadvance(5);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r0.semester);
    i0.ɵɵadvance();
    i0.ɵɵrepeater(i0.ɵɵpureFunction0(23, _c1));
    i0.ɵɵadvance(2);
    i0.ɵɵconditional(ctx_r0.section() === "groups" ? 34 : -1);
    i0.ɵɵadvance();
    i0.ɵɵconditional(ctx_r0.section() === "sections" ? 35 : -1);
    i0.ɵɵadvance();
    i0.ɵɵconditional(ctx_r0.section() === "sets" ? 36 : -1);
    i0.ɵɵadvance(3);
    i0.ɵɵconditional(ctx_r0.section() === "sets" ? 39 : ctx_r0.section() === "sections" ? 40 : 41);
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate1("", i0.ɵɵpipeBind1(45, 21, ctx_r0.singular()), " name *");
    i0.ɵɵadvance(2);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r0.name);
    i0.ɵɵproperty("placeholder", ctx_r0.section() === "groups" ? "e.g. B.Tech CSE A" : ctx_r0.section() === "sections" ? "e.g. Section A" : "e.g. Set A");
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(ctx_r0.section() === "sets" ? "Scope preview" : "Mapping preview");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r0.formValid() ? ctx_r0.name + " is ready to save." : "Complete required fields to preview the hierarchy.");
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("disabled", !ctx_r0.formValid() || ctx_r0.saving());
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r0.saving() ? "Saving\u2026" : ctx_r0.editingId() ? "Save changes" : "Create " + ctx_r0.singular(), " ");
} }
function apiMessage(error, fallback) {
    if (typeof error === 'object' && error && 'error' in error) {
        const response = error.error;
        if (typeof response?.message === 'string')
            return response.message;
    }
    return fallback;
}
export class AcademicStructureComponent {
    api = inject(ApiService);
    route = inject(ActivatedRoute);
    document = inject(DOCUMENT);
    section = signal('groups', ...(ngDevMode ? [{ debugName: "section" }] : /* istanbul ignore next */ []));
    records = signal([], ...(ngDevMode ? [{ debugName: "records" }] : /* istanbul ignore next */ []));
    groups = signal([], ...(ngDevMode ? [{ debugName: "groups" }] : /* istanbul ignore next */ []));
    sections = signal([], ...(ngDevMode ? [{ debugName: "sections" }] : /* istanbul ignore next */ []));
    masters = signal([], ...(ngDevMode ? [{ debugName: "masters" }] : /* istanbul ignore next */ []));
    loading = signal(false, ...(ngDevMode ? [{ debugName: "loading" }] : /* istanbul ignore next */ []));
    saving = signal(false, ...(ngDevMode ? [{ debugName: "saving" }] : /* istanbul ignore next */ []));
    drawerOpen = signal(false, ...(ngDevMode ? [{ debugName: "drawerOpen" }] : /* istanbul ignore next */ []));
    editingId = signal(null, ...(ngDevMode ? [{ debugName: "editingId" }] : /* istanbul ignore next */ []));
    error = signal('', ...(ngDevMode ? [{ debugName: "error" }] : /* istanbul ignore next */ []));
    message = signal('', ...(ngDevMode ? [{ debugName: "message" }] : /* istanbul ignore next */ []));
    page = signal(1, ...(ngDevMode ? [{ debugName: "page" }] : /* istanbul ignore next */ []));
    pageSize = signal(ERP_PAGINATION.defaultPageSize, ...(ngDevMode ? [{ debugName: "pageSize" }] : /* istanbul ignore next */ []));
    statusFilter = signal('all', ...(ngDevMode ? [{ debugName: "statusFilter" }] : /* istanbul ignore next */ []));
    filterOpen = signal(false, ...(ngDevMode ? [{ debugName: "filterOpen" }] : /* istanbul ignore next */ []));
    columnsOpen = signal(false, ...(ngDevMode ? [{ debugName: "columnsOpen" }] : /* istanbul ignore next */ []));
    showPeriodColumn = signal(true, ...(ngDevMode ? [{ debugName: "showPeriodColumn" }] : /* istanbul ignore next */ []));
    showContextColumn = signal(true, ...(ngDevMode ? [{ debugName: "showContextColumn" }] : /* istanbul ignore next */ []));
    showStatusColumn = signal(true, ...(ngDevMode ? [{ debugName: "showStatusColumn" }] : /* istanbul ignore next */ []));
    pageSizeOptions = ERP_PAGINATION.pageSizeOptions;
    search = '';
    name = '';
    session = '';
    semester = 1;
    universityId = '';
    collegeId = '';
    levelId = '';
    departmentIds = [];
    courseIds = [];
    branchIds = [];
    groupIds = [];
    groupId = '';
    sectionId = '';
    rowActions = [
        { id: 'edit', label: 'Edit', icon: 'edit' },
        { id: 'delete', label: 'Delete', icon: 'delete', destructive: true },
    ];
    constructor() {
        this.route.data.subscribe((data) => {
            this.section.set(data['section'] || 'groups');
            this.closeDrawer();
            this.search = '';
            this.page.set(1);
            this.load();
        });
        effect((onCleanup) => {
            if (!this.drawerOpen())
                return;
            const previousOverflow = this.document.body.style.overflow;
            this.document.body.style.overflow = 'hidden';
            onCleanup(() => {
                this.document.body.style.overflow = previousOverflow;
            });
        });
    }
    title() {
        return { groups: 'Groups', sections: 'Sections', sets: 'Sets' }[this.section()];
    }
    singular() {
        return { groups: 'group', sections: 'section', sets: 'set' }[this.section()];
    }
    description() {
        return {
            groups: 'Organise students by institution, session and semester.',
            sections: 'Create teachable sections and map them to academic groups.',
            sets: 'Create smaller teaching groups within a section.',
        }[this.section()];
    }
    drawerDescription() {
        return {
            groups: 'Create the academic hierarchy used for student organisation.',
            sections: 'A section can serve multiple compatible groups.',
            sets: 'Create a smaller teaching group within a section.',
        }[this.section()];
    }
    load() {
        this.loading.set(true);
        this.error.set('');
        forkJoin({
            bootstrap: this.api.academicBootstrap(),
            list: this.api.academicRecords(this.section()),
        }).subscribe({
            next: ({ bootstrap, list }) => {
                this.masters.set(bootstrap.masters);
                this.groups.set(bootstrap.groups);
                this.sections.set(bootstrap.sections);
                this.records.set(list.items);
                this.loading.set(false);
            },
            error: (error) => {
                this.error.set(apiMessage(error, `Could not load ${this.title().toLowerCase()}.`));
                this.loading.set(false);
            },
        });
    }
    master(type) {
        return this.masters().filter((item) => item.typeSlug === type);
    }
    scopedMaster(type, parentIds) {
        const items = this.master(type);
        return parentIds.length
            ? items.filter((item) => !item.parentId || parentIds.includes(item.parentId))
            : items;
    }
    label(type, value) {
        return this.master(type).find((item) => item._id === value)?.name || '';
    }
    labels(type, values) {
        return values.map((value) => this.label(type, value)).filter(Boolean);
    }
    options(items) {
        return items.map((item) => ({ value: item._id, label: item.name }));
    }
    groupsForPeriod() {
        return this.groups().filter((item) => item.academicSession === this.session && item.semester === Number(this.semester));
    }
    sectionsForGroup() {
        return this.sections().filter((item) => item.academicSession === this.session &&
            item.semester === Number(this.semester) &&
            item.groupIds.includes(this.groupId));
    }
    groupName(id) {
        return this.groups().find((item) => item._id === id)?.name || '—';
    }
    sectionName(id) {
        return this.sections().find((item) => item._id === id)?.name || '—';
    }
    groupNames(ids) {
        const names = ids.map((id) => this.groupName(id)).filter((name) => name !== '—');
        return names.length ? names.join(', ') : '—';
    }
    activeSessionCount() {
        return new Set(this.records()
            .map((item) => item.academicSession)
            .filter(Boolean)).size;
    }
    departmentCount() {
        const ids = this.records().flatMap((item) => item.departmentIds || []);
        return new Set(ids).size;
    }
    summarySession() {
        return this.session || this.records()[0]?.academicSession || '—';
    }
    summarySemester() {
        return String(this.semester || this.records()[0]?.semester || '—');
    }
    filteredRecords() {
        const query = this.search.trim().toLowerCase();
        const status = this.statusFilter();
        return this.records().filter((item) => {
            const matchesSearch = !query || JSON.stringify(item).toLowerCase().includes(query);
            const matchesStatus = status === 'all' || (status === 'active' ? item.isActive : !item.isActive);
            return matchesSearch && matchesStatus;
        });
    }
    totalPages() {
        return Math.max(1, Math.ceil(this.filteredRecords().length / this.pageSize()));
    }
    pagedRecords() {
        const current = Math.min(this.page(), this.totalPages());
        return this.filteredRecords().slice((current - 1) * this.pageSize(), current * this.pageSize());
    }
    resultRange() {
        const total = this.filteredRecords().length;
        if (!total)
            return 'Showing 0 results';
        const first = (this.page() - 1) * this.pageSize() + 1;
        const last = Math.min(this.page() * this.pageSize(), total);
        return `Showing ${first}–${last} of ${total} ${total === 1 ? 'result' : 'results'}`;
    }
    tableColspan() {
        return (2 +
            Number(this.showPeriodColumn()) +
            Number(this.showContextColumn()) +
            Number(this.showStatusColumn()));
    }
    openCreate() {
        this.resetForm();
        this.drawerOpen.set(true);
    }
    closeDrawer() {
        this.drawerOpen.set(false);
        this.resetForm();
    }
    edit(item) {
        this.resetForm();
        this.editingId.set(item._id);
        this.name = item.name;
        this.session = item.academicSession;
        this.semester = Number(item.semester || 1);
        if (this.section() === 'groups') {
            const group = item;
            this.universityId = group.universityId || '';
            this.collegeId = group.collegeId || '';
            this.levelId = group.levelId || '';
            this.departmentIds = [...(group.departmentIds || [])];
            this.courseIds = [...(group.courseIds || [])];
            this.branchIds = [...(group.branchIds || [])];
        }
        else if (this.section() === 'sections') {
            this.groupIds = [...(item.groupIds || [])];
        }
        else {
            this.groupId = item.groupId || '';
            this.sectionId = item.sectionId || '';
        }
        this.drawerOpen.set(true);
    }
    handleAction(action, item) {
        if (action === 'edit')
            this.edit(item);
        if (action === 'delete')
            this.remove(item);
    }
    remove(item) {
        if (!confirm(`Delete ${item.name}?`))
            return;
        this.api.deleteAcademicRecord(this.section(), item._id).subscribe({
            next: () => {
                this.message.set(`${item.name} deleted.`);
                this.load();
            },
            error: (error) => this.error.set(apiMessage(error, `Could not delete ${item.name}.`)),
        });
    }
    formValid() {
        if (!this.name.trim() || !this.session || !this.semester)
            return false;
        if (this.section() === 'groups')
            return Boolean(this.universityId && this.collegeId && this.departmentIds.length);
        if (this.section() === 'sections')
            return this.groupIds.length > 0;
        return Boolean(this.groupId && this.sectionId);
    }
    save() {
        if (!this.formValid())
            return;
        this.saving.set(true);
        this.error.set('');
        const id = this.editingId();
        const request = id
            ? this.api.updateAcademicRecord(this.section(), id, this.body())
            : this.api.createAcademicRecord(this.section(), this.body());
        request.subscribe({
            next: () => {
                this.message.set(`${this.singular()} ${id ? 'updated' : 'created'} successfully.`);
                this.saving.set(false);
                this.closeDrawer();
                this.load();
            },
            error: (error) => {
                this.error.set(apiMessage(error, `Could not save this ${this.singular()}.`));
                this.saving.set(false);
            },
        });
    }
    body() {
        if (this.section() === 'groups') {
            return {
                name: this.name.trim(),
                academicSession: this.session,
                semester: Number(this.semester),
                universityId: this.universityId,
                universityName: this.label('university', this.universityId),
                collegeId: this.collegeId,
                collegeName: this.label('college', this.collegeId),
                levelId: this.levelId || null,
                levelName: this.label('level', this.levelId),
                departmentIds: this.departmentIds,
                departmentNames: this.labels('department', this.departmentIds),
                courseIds: this.courseIds,
                courseNames: this.labels('course', this.courseIds),
                branchIds: this.branchIds,
                branchNames: this.labels('branch', this.branchIds),
                isActive: true,
            };
        }
        if (this.section() === 'sections') {
            return {
                name: this.name.trim(),
                academicSession: this.session,
                semester: Number(this.semester),
                groupIds: this.groupIds,
                isActive: true,
            };
        }
        return {
            name: this.name.trim(),
            academicSession: this.session,
            semester: Number(this.semester),
            groupId: this.groupId,
            sectionId: this.sectionId,
            isActive: true,
        };
    }
    resetForm() {
        this.editingId.set(null);
        this.name = '';
        this.session = '';
        this.semester = 1;
        this.universityId = '';
        this.collegeId = '';
        this.levelId = '';
        this.departmentIds = [];
        this.courseIds = [];
        this.branchIds = [];
        this.groupIds = [];
        this.groupId = '';
        this.sectionId = '';
    }
    closeOverlays() {
        if (this.drawerOpen())
            this.closeDrawer();
        this.filterOpen.set(false);
        this.columnsOpen.set(false);
    }
    static ɵfac = function AcademicStructureComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || AcademicStructureComponent)(); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: AcademicStructureComponent, selectors: [["erp-academic-structure"]], hostBindings: function AcademicStructureComponent_HostBindings(rf, ctx) { if (rf & 1) {
            i0.ɵɵlistener("keydown.escape", function AcademicStructureComponent_keydown_escape_HostBindingHandler() { return ctx.closeOverlays(); }, i0.ɵɵresolveDocument);
        } }, decls: 76, vars: 32, consts: [["variant", "compact", "layout", "collection", 3, "title", "description"], ["page-actions", "", "type", "button", 1, "erp-button", "erp-button--primary", 3, "click"], ["lucidePlus", "", "size", "17", "aria-hidden", "true"], ["role", "alert", 1, "erp-alert", "erp-alert--error"], ["role", "status", 1, "erp-alert", "erp-alert--success"], [1, "erp-academic-metric-strip", 3, "aria-label"], [1, "erp-academic-metric"], [1, "erp-academic-metric__icon"], ["lucideUsersRound", "", "size", "20"], ["lucideGraduationCap", "", "size", "20"], ["lucideBuilding2", "", "size", "20"], ["lucideCalendarDays", "", "size", "20"], [1, "erp-card", "erp-table-shell", "erp-academic-directory"], [1, "erp-academic-directory__toolbar"], [1, "erp-search-control"], ["lucideSearch", "", "size", "17", "aria-hidden", "true"], ["type", "search", 3, "ngModelChange", "ngModel", "placeholder"], [1, "erp-academic-directory__tools"], [1, "erp-academic-popover-anchor"], ["type", "button", 1, "erp-button", "erp-button--secondary", 3, "click"], ["lucideFilter", "", "size", "16", "aria-hidden", "true"], ["role", "group", "aria-label", "Record filters", 1, "erp-academic-popover"], ["lucideColumns3", "", "size", "16", "aria-hidden", "true"], ["role", "group", "aria-label", "Visible columns", 1, "erp-academic-popover", "erp-academic-popover--checks"], [1, "erp-table-shell__scroll"], [1, "erp-table-shell__actions"], [1, "erp-table-pagination"], ["aria-label", "Rows per page", 1, "erp-control", "erp-control--compact", 3, "ngModelChange", "ngModel"], [3, "ngValue"], ["type", "button", "aria-label", "Previous page", 1, "erp-button", "erp-button--secondary", "erp-button--icon", 3, "click", "disabled"], ["lucideChevronLeft", "", "size", "17"], ["type", "button", "aria-label", "Next page", 1, "erp-button", "erp-button--secondary", "erp-button--icon", 3, "click", "disabled"], ["lucideChevronRight", "", "size", "17"], [1, "erp-drawer-layer"], [1, "erp-control", 3, "ngModelChange", "ngModel"], ["value", "all"], ["value", "active"], ["value", "inactive"], ["type", "checkbox", 3, "ngModelChange", "ngModel"], [3, "selected", "items"], [1, "erp-status"], ["aria-hidden", "true"], [1, "erp-empty-panel", "erp-academic-empty"], ["aria-hidden", "true", 1, "erp-spinner"], ["size", "compact", 3, "kind"], ["type", "button", 1, "erp-button", "erp-button--secondary"], ["type", "button", "tabindex", "-1", 1, "erp-drawer-backdrop", 3, "click", "aria-label"], ["role", "dialog", "aria-modal", "true", "cdkTrapFocus", "", 1, "erp-drawer", "erp-academic-drawer", 3, "cdkTrapFocusAutoCapture"], [1, "erp-drawer__header"], ["type", "button", "aria-label", "Close drawer", 1, "erp-button", "erp-button--icon", "erp-button--ghost", 3, "click"], ["lucideX", "", "size", "20"], [1, "erp-drawer__body", "erp-academic-drawer__body", 3, "ngSubmit"], [1, "erp-academic-form-section"], ["lucideCalendarDays", "", "size", "19"], [1, "erp-academic-form-grid"], ["name", "session", 1, "erp-control", 3, "ngModelChange", "ngModel"], ["value", ""], [3, "value"], ["name", "semester", 1, "erp-control", 3, "ngModelChange", "ngModel"], ["name", "name", 1, "erp-control", 3, "ngModelChange", "ngModel", "placeholder"], [1, "erp-academic-mapping-preview"], ["lucideNetwork", "", "size", "22"], [1, "erp-drawer__footer"], ["type", "button", 1, "erp-button", "erp-button--primary", 3, "click", "disabled"], ["lucideBuilding2", "", "size", "19"], ["name", "university", 1, "erp-control", 3, "ngModelChange", "ngModel"], ["name", "college", 1, "erp-control", 3, "ngModelChange", "ngModel"], ["lucideBookOpen", "", "size", "19"], [1, "erp-field-stack"], ["placeholder", "Select departments", 3, "valueChange", "options", "value"], ["name", "level", 1, "erp-control", 3, "ngModelChange", "ngModel"], ["placeholder", "Select courses", 3, "valueChange", "options", "value"], ["placeholder", "Select branches", 3, "valueChange", "options", "value"], ["lucideUsersRound", "", "size", "19"], ["placeholder", "Select groups", 3, "valueChange", "options", "value"], [1, "erp-academic-selection-preview"], [1, "erp-academic-form-grid", "erp-academic-form-grid--linked"], ["name", "group", 1, "erp-control", 3, "ngModelChange", "ngModel"], ["lucideArrowRight", "", "size", "18", "aria-hidden", "true"], ["name", "section", 1, "erp-control", 3, "ngModelChange", "ngModel"], ["lucideLayers3", "", "size", "19"]], template: function AcademicStructureComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "erp-admin-page", 0)(1, "button", 1);
            i0.ɵɵlistener("click", function AcademicStructureComponent_Template_button_click_1_listener() { return ctx.openCreate(); });
            i0.ɵɵnamespaceSVG();
            i0.ɵɵelement(2, "svg", 2);
            i0.ɵɵtext(3);
            i0.ɵɵelementEnd();
            i0.ɵɵconditionalCreate(4, AcademicStructureComponent_Conditional_4_Template, 2, 1, "div", 3);
            i0.ɵɵconditionalCreate(5, AcademicStructureComponent_Conditional_5_Template, 2, 1, "div", 4);
            i0.ɵɵnamespaceHTML();
            i0.ɵɵelementStart(6, "section", 5)(7, "div", 6)(8, "span", 7);
            i0.ɵɵnamespaceSVG();
            i0.ɵɵelement(9, "svg", 8);
            i0.ɵɵelementEnd();
            i0.ɵɵnamespaceHTML();
            i0.ɵɵelementStart(10, "span")(11, "small");
            i0.ɵɵtext(12);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(13, "strong");
            i0.ɵɵtext(14);
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(15, "div", 6)(16, "span", 7);
            i0.ɵɵnamespaceSVG();
            i0.ɵɵelement(17, "svg", 9);
            i0.ɵɵelementEnd();
            i0.ɵɵnamespaceHTML();
            i0.ɵɵelementStart(18, "span")(19, "small");
            i0.ɵɵtext(20);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(21, "strong");
            i0.ɵɵtext(22);
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(23, "div", 6)(24, "span", 7);
            i0.ɵɵconditionalCreate(25, AcademicStructureComponent_Conditional_25_Template, 1, 0, ":svg:svg", 10)(26, AcademicStructureComponent_Conditional_26_Template, 1, 0, ":svg:svg", 11);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(27, "span")(28, "small");
            i0.ɵɵtext(29);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(30, "strong");
            i0.ɵɵtext(31);
            i0.ɵɵelementEnd()()()();
            i0.ɵɵelementStart(32, "section", 12)(33, "div", 13)(34, "label", 14);
            i0.ɵɵnamespaceSVG();
            i0.ɵɵelement(35, "svg", 15);
            i0.ɵɵnamespaceHTML();
            i0.ɵɵelementStart(36, "input", 16);
            i0.ɵɵtwoWayListener("ngModelChange", function AcademicStructureComponent_Template_input_ngModelChange_36_listener($event) { i0.ɵɵtwoWayBindingSet(ctx.search, $event) || (ctx.search = $event); return $event; });
            i0.ɵɵlistener("ngModelChange", function AcademicStructureComponent_Template_input_ngModelChange_36_listener() { return ctx.page.set(1); });
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(37, "div", 17)(38, "div", 18)(39, "button", 19);
            i0.ɵɵlistener("click", function AcademicStructureComponent_Template_button_click_39_listener() { ctx.filterOpen.set(!ctx.filterOpen()); return ctx.columnsOpen.set(false); });
            i0.ɵɵnamespaceSVG();
            i0.ɵɵelement(40, "svg", 20);
            i0.ɵɵtext(41, " Filters ");
            i0.ɵɵelementEnd();
            i0.ɵɵconditionalCreate(42, AcademicStructureComponent_Conditional_42_Template, 11, 1, "div", 21);
            i0.ɵɵelementEnd();
            i0.ɵɵnamespaceHTML();
            i0.ɵɵelementStart(43, "div", 18)(44, "button", 19);
            i0.ɵɵlistener("click", function AcademicStructureComponent_Template_button_click_44_listener() { ctx.columnsOpen.set(!ctx.columnsOpen()); return ctx.filterOpen.set(false); });
            i0.ɵɵnamespaceSVG();
            i0.ɵɵelement(45, "svg", 22);
            i0.ɵɵtext(46, " Columns ");
            i0.ɵɵelementEnd();
            i0.ɵɵconditionalCreate(47, AcademicStructureComponent_Conditional_47_Template, 10, 3, "div", 23);
            i0.ɵɵelementEnd()()();
            i0.ɵɵnamespaceHTML();
            i0.ɵɵelementStart(48, "div", 24)(49, "table")(50, "thead")(51, "tr")(52, "th");
            i0.ɵɵtext(53);
            i0.ɵɵpipe(54, "titlecase");
            i0.ɵɵelementEnd();
            i0.ɵɵconditionalCreate(55, AcademicStructureComponent_Conditional_55_Template, 2, 0, "th");
            i0.ɵɵconditionalCreate(56, AcademicStructureComponent_Conditional_56_Template, 2, 1, "th");
            i0.ɵɵconditionalCreate(57, AcademicStructureComponent_Conditional_57_Template, 2, 0, "th");
            i0.ɵɵelementStart(58, "th", 25);
            i0.ɵɵtext(59, "Actions");
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(60, "tbody");
            i0.ɵɵrepeaterCreate(61, AcademicStructureComponent_For_62_Template, 9, 5, "tr", null, _forTrack0, false, AcademicStructureComponent_ForEmpty_63_Template, 5, 2, "tr");
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(64, "footer", 26)(65, "span");
            i0.ɵɵtext(66);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(67, "div")(68, "select", 27);
            i0.ɵɵlistener("ngModelChange", function AcademicStructureComponent_Template_select_ngModelChange_68_listener($event) { ctx.pageSize.set(+$event); return ctx.page.set(1); });
            i0.ɵɵrepeaterCreate(69, AcademicStructureComponent_For_70_Template, 2, 2, "option", 28, i0.ɵɵrepeaterTrackByIdentity);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(71, "button", 29);
            i0.ɵɵlistener("click", function AcademicStructureComponent_Template_button_click_71_listener() { return ctx.page.set(ctx.page() - 1); });
            i0.ɵɵnamespaceSVG();
            i0.ɵɵelement(72, "svg", 30);
            i0.ɵɵelementEnd();
            i0.ɵɵnamespaceHTML();
            i0.ɵɵelementStart(73, "button", 31);
            i0.ɵɵlistener("click", function AcademicStructureComponent_Template_button_click_73_listener() { return ctx.page.set(ctx.page() + 1); });
            i0.ɵɵnamespaceSVG();
            i0.ɵɵelement(74, "svg", 32);
            i0.ɵɵelementEnd()()()()();
            i0.ɵɵconditionalCreate(75, AcademicStructureComponent_Conditional_75_Template, 59, 24, "div", 33);
        } if (rf & 2) {
            i0.ɵɵproperty("title", ctx.title())("description", ctx.description());
            i0.ɵɵadvance(3);
            i0.ɵɵtextInterpolate1(" Create ", ctx.singular(), " ");
            i0.ɵɵadvance();
            i0.ɵɵconditional(ctx.error() ? 4 : -1);
            i0.ɵɵadvance();
            i0.ɵɵconditional(ctx.message() ? 5 : -1);
            i0.ɵɵadvance();
            i0.ɵɵariaProperty("aria-label", i0.ɵɵinterpolate1("", ctx.title(), " summary"));
            i0.ɵɵadvance(6);
            i0.ɵɵtextInterpolate1("Total ", ctx.title().toLowerCase());
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate(ctx.records().length);
            i0.ɵɵadvance(6);
            i0.ɵɵtextInterpolate(ctx.section() === "groups" ? "Active sessions" : ctx.section() === "sections" ? "Session" : "Selected group");
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate(ctx.section() === "groups" ? ctx.activeSessionCount() : ctx.section() === "sections" ? ctx.summarySession() : ctx.groupName(ctx.groupId));
            i0.ɵɵadvance(3);
            i0.ɵɵconditional(ctx.section() === "groups" ? 25 : 26);
            i0.ɵɵadvance(4);
            i0.ɵɵtextInterpolate(ctx.section() === "groups" ? "Departments" : ctx.section() === "sections" ? "Semester" : "Selected section");
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate(ctx.section() === "groups" ? ctx.departmentCount() : ctx.section() === "sections" ? ctx.summarySemester() : ctx.sectionName(ctx.sectionId));
            i0.ɵɵadvance(5);
            i0.ɵɵtwoWayProperty("ngModel", ctx.search);
            i0.ɵɵproperty("placeholder", "Search by " + ctx.singular() + " name");
            i0.ɵɵadvance(3);
            i0.ɵɵattribute("aria-expanded", ctx.filterOpen());
            i0.ɵɵadvance(3);
            i0.ɵɵconditional(ctx.filterOpen() ? 42 : -1);
            i0.ɵɵadvance(2);
            i0.ɵɵattribute("aria-expanded", ctx.columnsOpen());
            i0.ɵɵadvance(3);
            i0.ɵɵconditional(ctx.columnsOpen() ? 47 : -1);
            i0.ɵɵadvance(6);
            i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(54, 30, ctx.singular()));
            i0.ɵɵadvance(2);
            i0.ɵɵconditional(ctx.showPeriodColumn() ? 55 : -1);
            i0.ɵɵadvance();
            i0.ɵɵconditional(ctx.showContextColumn() ? 56 : -1);
            i0.ɵɵadvance();
            i0.ɵɵconditional(ctx.showStatusColumn() ? 57 : -1);
            i0.ɵɵadvance(4);
            i0.ɵɵrepeater(ctx.pagedRecords());
            i0.ɵɵadvance(5);
            i0.ɵɵtextInterpolate(ctx.resultRange());
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngModel", ctx.pageSize());
            i0.ɵɵadvance();
            i0.ɵɵrepeater(ctx.pageSizeOptions);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("disabled", ctx.page() <= 1);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("disabled", ctx.page() >= ctx.totalPages());
            i0.ɵɵadvance(2);
            i0.ɵɵconditional(ctx.drawerOpen() ? 75 : -1);
        } }, dependencies: [CdkTrapFocus,
            CommonModule,
            FormsModule, i1.ɵNgNoValidate, i1.NgSelectOption, i1.ɵNgSelectMultipleOption, i1.DefaultValueAccessor, i1.CheckboxControlValueAccessor, i1.SelectControlValueAccessor, i1.NgControlStatus, i1.NgControlStatusGroup, i1.NgModel, i1.NgForm, AdminIllustrationComponent,
            AdminPageComponent,
            CompactActionMenuComponent,
            MultiSelectDropdownComponent,
            LucideArrowRight,
            LucideBookOpen,
            LucideBuilding2,
            LucideCalendarDays,
            LucideChevronLeft,
            LucideChevronRight,
            LucideColumns3,
            LucideFilter,
            LucideGraduationCap,
            LucideLayers3,
            LucideNetwork,
            LucidePlus,
            LucideSearch,
            LucideUsersRound,
            LucideX, i2.TitleCasePipe], encapsulation: 2, changeDetection: 0 });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AcademicStructureComponent, [{
        type: Component,
        args: [{ selector: 'erp-academic-structure', imports: [
                    CdkTrapFocus,
                    CommonModule,
                    FormsModule,
                    AdminIllustrationComponent,
                    AdminPageComponent,
                    CompactActionMenuComponent,
                    MultiSelectDropdownComponent,
                    LucideArrowRight,
                    LucideBookOpen,
                    LucideBuilding2,
                    LucideCalendarDays,
                    LucideChevronLeft,
                    LucideChevronRight,
                    LucideColumns3,
                    LucideFilter,
                    LucideGraduationCap,
                    LucideLayers3,
                    LucideNetwork,
                    LucidePlus,
                    LucideSearch,
                    LucideUsersRound,
                    LucideX,
                ], changeDetection: ChangeDetectionStrategy.OnPush, template: "<erp-admin-page\n  [title]=\"title()\"\n  [description]=\"description()\"\n  variant=\"compact\"\n  layout=\"collection\"\n>\n  <button page-actions class=\"erp-button erp-button--primary\" type=\"button\" (click)=\"openCreate()\">\n    <svg lucidePlus size=\"17\" aria-hidden=\"true\"></svg>\n    Create {{ singular() }}\n  </button>\n\n  @if (error()) {\n    <div class=\"erp-alert erp-alert--error\" role=\"alert\">{{ error() }}</div>\n  }\n  @if (message()) {\n    <div class=\"erp-alert erp-alert--success\" role=\"status\">{{ message() }}</div>\n  }\n\n  <section class=\"erp-academic-metric-strip\" aria-label=\"{{ title() }} summary\">\n    <div class=\"erp-academic-metric\">\n      <span class=\"erp-academic-metric__icon\"><svg lucideUsersRound size=\"20\"></svg></span>\n      <span\n        ><small>Total {{ title().toLowerCase() }}</small\n        ><strong>{{ records().length }}</strong></span\n      >\n    </div>\n    <div class=\"erp-academic-metric\">\n      <span class=\"erp-academic-metric__icon\"><svg lucideGraduationCap size=\"20\"></svg></span>\n      <span>\n        <small>{{\n          section() === 'groups'\n            ? 'Active sessions'\n            : section() === 'sections'\n              ? 'Session'\n              : 'Selected group'\n        }}</small>\n        <strong>{{\n          section() === 'groups'\n            ? activeSessionCount()\n            : section() === 'sections'\n              ? summarySession()\n              : groupName(groupId)\n        }}</strong>\n      </span>\n    </div>\n    <div class=\"erp-academic-metric\">\n      <span class=\"erp-academic-metric__icon\">\n        @if (section() === 'groups') {\n          <svg lucideBuilding2 size=\"20\"></svg>\n        } @else {\n          <svg lucideCalendarDays size=\"20\"></svg>\n        }\n      </span>\n      <span>\n        <small>{{\n          section() === 'groups'\n            ? 'Departments'\n            : section() === 'sections'\n              ? 'Semester'\n              : 'Selected section'\n        }}</small>\n        <strong>{{\n          section() === 'groups'\n            ? departmentCount()\n            : section() === 'sections'\n              ? summarySemester()\n              : sectionName(sectionId)\n        }}</strong>\n      </span>\n    </div>\n  </section>\n\n  <section class=\"erp-card erp-table-shell erp-academic-directory\">\n    <div class=\"erp-academic-directory__toolbar\">\n      <label class=\"erp-search-control\">\n        <svg lucideSearch size=\"17\" aria-hidden=\"true\"></svg>\n        <input\n          type=\"search\"\n          [(ngModel)]=\"search\"\n          (ngModelChange)=\"page.set(1)\"\n          [placeholder]=\"'Search by ' + singular() + ' name'\"\n        />\n      </label>\n      <div class=\"erp-academic-directory__tools\">\n        <div class=\"erp-academic-popover-anchor\">\n          <button\n            class=\"erp-button erp-button--secondary\"\n            type=\"button\"\n            [attr.aria-expanded]=\"filterOpen()\"\n            (click)=\"filterOpen.set(!filterOpen()); columnsOpen.set(false)\"\n          >\n            <svg lucideFilter size=\"16\" aria-hidden=\"true\"></svg> Filters\n          </button>\n          @if (filterOpen()) {\n            <div class=\"erp-academic-popover\" role=\"group\" aria-label=\"Record filters\">\n              <label>\n                <span>Status</span>\n                <select\n                  class=\"erp-control\"\n                  [ngModel]=\"statusFilter()\"\n                  (ngModelChange)=\"statusFilter.set($event); page.set(1)\"\n                >\n                  <option value=\"all\">All statuses</option>\n                  <option value=\"active\">Active</option>\n                  <option value=\"inactive\">Inactive</option>\n                </select>\n              </label>\n            </div>\n          }\n        </div>\n        <div class=\"erp-academic-popover-anchor\">\n          <button\n            class=\"erp-button erp-button--secondary\"\n            type=\"button\"\n            [attr.aria-expanded]=\"columnsOpen()\"\n            (click)=\"columnsOpen.set(!columnsOpen()); filterOpen.set(false)\"\n          >\n            <svg lucideColumns3 size=\"16\" aria-hidden=\"true\"></svg> Columns\n          </button>\n          @if (columnsOpen()) {\n            <div\n              class=\"erp-academic-popover erp-academic-popover--checks\"\n              role=\"group\"\n              aria-label=\"Visible columns\"\n            >\n              <label\n                ><input\n                  type=\"checkbox\"\n                  [ngModel]=\"showPeriodColumn()\"\n                  (ngModelChange)=\"showPeriodColumn.set($event)\"\n                />\n                Academic period</label\n              >\n              <label\n                ><input\n                  type=\"checkbox\"\n                  [ngModel]=\"showContextColumn()\"\n                  (ngModelChange)=\"showContextColumn.set($event)\"\n                />\n                Mapping details</label\n              >\n              <label\n                ><input\n                  type=\"checkbox\"\n                  [ngModel]=\"showStatusColumn()\"\n                  (ngModelChange)=\"showStatusColumn.set($event)\"\n                />\n                Status</label\n              >\n            </div>\n          }\n        </div>\n      </div>\n    </div>\n\n    <div class=\"erp-table-shell__scroll\">\n      <table>\n        <thead>\n          <tr>\n            <th>{{ singular() | titlecase }}</th>\n            @if (showPeriodColumn()) {\n              <th>Academic period</th>\n            }\n            @if (showContextColumn()) {\n              <th>\n                {{\n                  section() === 'groups'\n                    ? 'Institution / mapping'\n                    : section() === 'sections'\n                      ? 'Mapped groups'\n                      : 'Group and section'\n                }}\n              </th>\n            }\n            @if (showStatusColumn()) {\n              <th>Status</th>\n            }\n            <th class=\"erp-table-shell__actions\">Actions</th>\n          </tr>\n        </thead>\n        <tbody>\n          @for (item of pagedRecords(); track item._id) {\n            <tr>\n              <td>\n                <strong>{{ item.name }}</strong>\n              </td>\n              @if (showPeriodColumn()) {\n                <td>\n                  {{ item.academicSession }}<small>Semester {{ item.semester }}</small>\n                </td>\n              }\n              @if (showContextColumn()) {\n                <td>\n                  @if (section() === 'groups') {\n                    <strong>{{ $any(item).collegeName || '\u2014' }}</strong>\n                    <small>{{\n                      $any(item).departmentNames?.join(', ') || 'No department mapping'\n                    }}</small>\n                  } @else if (section() === 'sections') {\n                    {{ groupNames($any(item).groupIds || []) }}\n                  } @else {\n                    <strong>{{ groupName($any(item).groupId) }}</strong>\n                    <small>{{ sectionName($any(item).sectionId) }}</small>\n                  }\n                </td>\n              }\n              @if (showStatusColumn()) {\n                <td>\n                  <span class=\"erp-status\" [class.erp-status--neutral]=\"!item.isActive\">\n                    <i aria-hidden=\"true\"></i>{{ item.isActive ? 'Active' : 'Inactive' }}\n                  </span>\n                </td>\n              }\n              <td class=\"erp-table-shell__actions\">\n                <erp-compact-action-menu\n                  [items]=\"rowActions\"\n                  (selected)=\"handleAction($event, item)\"\n                />\n              </td>\n            </tr>\n          } @empty {\n            <tr>\n              <td [attr.colspan]=\"tableColspan()\">\n                <div class=\"erp-empty-panel erp-academic-empty\">\n                  @if (loading()) {\n                    <span class=\"erp-spinner\" aria-hidden=\"true\"></span>\n                    <h2>Loading {{ title().toLowerCase() }}\u2026</h2>\n                  } @else {\n                    <erp-admin-illustration\n                      [kind]=\"\n                        search || statusFilter() !== 'all' ? 'noResults' : 'dataConfiguration'\n                      \"\n                      size=\"compact\"\n                    />\n                    <h2>\n                      {{\n                        search || statusFilter() !== 'all'\n                          ? 'No matching results'\n                          : 'No ' + title().toLowerCase() + ' created'\n                      }}\n                    </h2>\n                    <p>\n                      {{\n                        search || statusFilter() !== 'all'\n                          ? 'Try changing your search or filters.'\n                          : description()\n                      }}\n                    </p>\n                    @if (!search && statusFilter() === 'all') {\n                      <button\n                        class=\"erp-button erp-button--secondary\"\n                        type=\"button\"\n                        (click)=\"openCreate()\"\n                      >\n                        Create {{ singular() }}\n                      </button>\n                    }\n                  }\n                </div>\n              </td>\n            </tr>\n          }\n        </tbody>\n      </table>\n    </div>\n    <footer class=\"erp-table-pagination\">\n      <span>{{ resultRange() }}</span>\n      <div>\n        <select\n          class=\"erp-control erp-control--compact\"\n          aria-label=\"Rows per page\"\n          [ngModel]=\"pageSize()\"\n          (ngModelChange)=\"pageSize.set(+$event); page.set(1)\"\n        >\n          @for (size of pageSizeOptions; track size) {\n            <option [ngValue]=\"size\">{{ size }} / page</option>\n          }\n        </select>\n        <button\n          class=\"erp-button erp-button--secondary erp-button--icon\"\n          type=\"button\"\n          aria-label=\"Previous page\"\n          [disabled]=\"page() <= 1\"\n          (click)=\"page.set(page() - 1)\"\n        >\n          <svg lucideChevronLeft size=\"17\"></svg>\n        </button>\n        <button\n          class=\"erp-button erp-button--secondary erp-button--icon\"\n          type=\"button\"\n          aria-label=\"Next page\"\n          [disabled]=\"page() >= totalPages()\"\n          (click)=\"page.set(page() + 1)\"\n        >\n          <svg lucideChevronRight size=\"17\"></svg>\n        </button>\n      </div>\n    </footer>\n  </section>\n</erp-admin-page>\n\n@if (drawerOpen()) {\n  <div class=\"erp-drawer-layer\">\n    <button\n      class=\"erp-drawer-backdrop\"\n      type=\"button\"\n      tabindex=\"-1\"\n      aria-label=\"Close create {{ singular() }} drawer\"\n      (click)=\"closeDrawer()\"\n    ></button>\n    <aside\n      class=\"erp-drawer erp-academic-drawer\"\n      role=\"dialog\"\n      aria-modal=\"true\"\n      [attr.aria-label]=\"(editingId() ? 'Edit ' : 'Create ') + singular()\"\n      cdkTrapFocus\n      [cdkTrapFocusAutoCapture]=\"true\"\n    >\n      <header class=\"erp-drawer__header\">\n        <div>\n          <small>ACADEMIC STRUCTURE</small>\n          <h2>{{ editingId() ? 'Edit' : 'Create' }} {{ singular() }}</h2>\n          <p>{{ drawerDescription() }}</p>\n        </div>\n        <button\n          class=\"erp-button erp-button--icon erp-button--ghost\"\n          type=\"button\"\n          aria-label=\"Close drawer\"\n          (click)=\"closeDrawer()\"\n        >\n          <svg lucideX size=\"20\"></svg>\n        </button>\n      </header>\n\n      <form class=\"erp-drawer__body erp-academic-drawer__body\" (ngSubmit)=\"save()\">\n        @if (section() === 'groups') {\n          <fieldset class=\"erp-academic-form-section\">\n            <legend><svg lucideBuilding2 size=\"19\"></svg> Institution</legend>\n            <div class=\"erp-academic-form-grid\">\n              <label\n                ><span>University *</span\n                ><select class=\"erp-control\" [(ngModel)]=\"universityId\" name=\"university\">\n                  <option value=\"\">Select university</option>\n                  @for (item of master('university'); track item._id) {\n                    <option [value]=\"item._id\">{{ item.name }}</option>\n                  }\n                </select></label\n              >\n              <label\n                ><span>College *</span\n                ><select class=\"erp-control\" [(ngModel)]=\"collegeId\" name=\"college\">\n                  <option value=\"\">Select a university first</option>\n                  @for (\n                    item of scopedMaster('college', universityId ? [universityId] : []);\n                    track item._id\n                  ) {\n                    <option [value]=\"item._id\">{{ item.name }}</option>\n                  }\n                </select></label\n              >\n            </div>\n          </fieldset>\n        }\n\n        <fieldset class=\"erp-academic-form-section\">\n          <legend><svg lucideCalendarDays size=\"19\"></svg> Academic period</legend>\n          <div class=\"erp-academic-form-grid\">\n            <label\n              ><span>Academic session *</span\n              ><select class=\"erp-control\" [(ngModel)]=\"session\" name=\"session\">\n                <option value=\"\">Select session</option>\n                @for (item of master('academic'); track item._id) {\n                  <option [value]=\"item.name\">{{ item.name }}</option>\n                }\n              </select></label\n            >\n            <label\n              ><span>Semester *</span\n              ><select class=\"erp-control\" [(ngModel)]=\"semester\" name=\"semester\">\n                @for (value of [1, 2, 3, 4, 5, 6, 7, 8]; track value) {\n                  <option [ngValue]=\"value\">Semester {{ value }}</option>\n                }\n              </select></label\n            >\n          </div>\n        </fieldset>\n\n        @if (section() === 'groups') {\n          <fieldset class=\"erp-academic-form-section\">\n            <legend><svg lucideBookOpen size=\"19\"></svg> Academic mapping</legend>\n            <div class=\"erp-academic-form-grid\">\n              <div class=\"erp-field-stack\">\n                <span>Departments *</span\n                ><erp-multi-select-dropdown\n                  [options]=\"options(scopedMaster('department', collegeId ? [collegeId] : []))\"\n                  [value]=\"departmentIds\"\n                  placeholder=\"Select departments\"\n                  (valueChange)=\"departmentIds = $event\"\n                />\n              </div>\n              <label\n                ><span>Level/course type</span\n                ><select class=\"erp-control\" [(ngModel)]=\"levelId\" name=\"level\">\n                  <option value=\"\">Select level</option>\n                  @for (item of scopedMaster('level', departmentIds); track item._id) {\n                    <option [value]=\"item._id\">{{ item.name }}</option>\n                  }\n                </select></label\n              >\n              <div class=\"erp-field-stack\">\n                <span>Courses</span\n                ><erp-multi-select-dropdown\n                  [options]=\"options(scopedMaster('course', levelId ? [levelId] : []))\"\n                  [value]=\"courseIds\"\n                  placeholder=\"Select courses\"\n                  (valueChange)=\"courseIds = $event\"\n                />\n              </div>\n              <div class=\"erp-field-stack\">\n                <span>Branches</span\n                ><erp-multi-select-dropdown\n                  [options]=\"options(master('branch'))\"\n                  [value]=\"branchIds\"\n                  placeholder=\"Select branches\"\n                  (valueChange)=\"branchIds = $event\"\n                />\n              </div>\n            </div>\n          </fieldset>\n        }\n\n        @if (section() === 'sections') {\n          <fieldset class=\"erp-academic-form-section\">\n            <legend><svg lucideUsersRound size=\"19\"></svg> Group mapping</legend>\n            <div class=\"erp-field-stack\">\n              <span>Groups *</span\n              ><erp-multi-select-dropdown\n                [options]=\"options(groupsForPeriod())\"\n                [value]=\"groupIds\"\n                placeholder=\"Select groups\"\n                (valueChange)=\"groupIds = $event\"\n              /><small>A section may be mapped to multiple groups.</small>\n            </div>\n            <div class=\"erp-academic-selection-preview\">\n              <svg lucideUsersRound size=\"20\"></svg\n              ><span>{{\n                groupIds.length ? groupNames(groupIds) : 'Selected groups will appear here.'\n              }}</span>\n            </div>\n          </fieldset>\n        }\n\n        @if (section() === 'sets') {\n          <fieldset class=\"erp-academic-form-section\">\n            <legend><svg lucideUsersRound size=\"19\"></svg> Teaching scope</legend>\n            <div class=\"erp-academic-form-grid erp-academic-form-grid--linked\">\n              <label\n                ><span>Group *</span\n                ><select\n                  class=\"erp-control\"\n                  [(ngModel)]=\"groupId\"\n                  name=\"group\"\n                  (ngModelChange)=\"sectionId = ''\"\n                >\n                  <option value=\"\">\n                    {{ session ? 'Select group' : 'Select a session first' }}\n                  </option>\n                  @for (item of groupsForPeriod(); track item._id) {\n                    <option [value]=\"item._id\">{{ item.name }}</option>\n                  }\n                </select></label\n              >\n              <svg lucideArrowRight size=\"18\" aria-hidden=\"true\"></svg>\n              <label\n                ><span>Section *</span\n                ><select class=\"erp-control\" [(ngModel)]=\"sectionId\" name=\"section\">\n                  <option value=\"\">\n                    {{ groupId ? 'Select section' : 'Select a group first' }}\n                  </option>\n                  @for (item of sectionsForGroup(); track item._id) {\n                    <option [value]=\"item._id\">{{ item.name }}</option>\n                  }\n                </select></label\n              >\n            </div>\n          </fieldset>\n        }\n\n        <fieldset class=\"erp-academic-form-section\">\n          <legend>\n            @if (section() === 'sets') {\n              <svg lucideLayers3 size=\"19\"></svg> Set identity\n            } @else if (section() === 'sections') {\n              <svg lucideBookOpen size=\"19\"></svg> Section details\n            } @else {\n              <svg lucideUsersRound size=\"19\"></svg> Group identity\n            }\n          </legend>\n          <label\n            ><span>{{ singular() | titlecase }} name *</span\n            ><input\n              class=\"erp-control\"\n              [(ngModel)]=\"name\"\n              name=\"name\"\n              [placeholder]=\"\n                section() === 'groups'\n                  ? 'e.g. B.Tech CSE A'\n                  : section() === 'sections'\n                    ? 'e.g. Section A'\n                    : 'e.g. Set A'\n              \"\n          /></label>\n        </fieldset>\n\n        <section class=\"erp-academic-mapping-preview\">\n          <svg lucideNetwork size=\"22\"></svg>\n          <span\n            ><strong>{{ section() === 'sets' ? 'Scope preview' : 'Mapping preview' }}</strong\n            ><small>{{\n              formValid()\n                ? name + ' is ready to save.'\n                : 'Complete required fields to preview the hierarchy.'\n            }}</small></span\n          >\n        </section>\n      </form>\n      <footer class=\"erp-drawer__footer\">\n        <button class=\"erp-button erp-button--secondary\" type=\"button\" (click)=\"closeDrawer()\">\n          Cancel\n        </button>\n        <button\n          class=\"erp-button erp-button--primary\"\n          type=\"button\"\n          [disabled]=\"!formValid() || saving()\"\n          (click)=\"save()\"\n        >\n          {{ saving() ? 'Saving\u2026' : editingId() ? 'Save changes' : 'Create ' + singular() }}\n        </button>\n      </footer>\n    </aside>\n  </div>\n}\n" }]
    }], () => [], { closeOverlays: [{
            type: HostListener,
            args: ['document:keydown.escape']
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(AcademicStructureComponent, { className: "AcademicStructureComponent", filePath: "frontend/src/app/features/admin/academics/academic-structure.component.ts", lineNumber: 86 }); })();
