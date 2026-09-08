import { CdkTrapFocus } from '@angular/cdk/a11y';
import { CommonModule, DOCUMENT } from '@angular/common';
import { ChangeDetectionStrategy, Component, HostListener, computed, effect, inject, signal, } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { LucideBookOpen, LucideBuilding2, LucideCalendarDays, LucideChevronLeft, LucideChevronRight, LucideClipboardList, LucideClock3, LucideColumns3, LucideEye, LucideFileText, LucideFilter, LucideFlaskConical, LucideGraduationCap, LucideMapPin, LucidePlus, LucideSearch, LucideStar, LucideUsersRound, LucideX, } from '@lucide/angular';
import { forkJoin } from 'rxjs';
import { ApiService } from '../../../core/api.service';
import { ERP_PAGINATION } from '../../../core/config/data-view.constants';
import { AdminIllustrationComponent } from '../../../shared/ui/admin-illustration/admin-illustration.component';
import { AdminPageComponent } from '../../../shared/ui/admin-page/admin-page.component';
import { CompactActionMenuComponent, } from '../../../shared/ui/compact-action-menu/compact-action-menu.component';
import { FormActionBarComponent } from '../../../shared/ui/form-action-bar/form-action-bar.component';
import { FormSectionNavigatorComponent } from '../../../shared/ui/form-section-navigator/form-section-navigator.component';
import { MobileSectionNavigatorSheetComponent } from '../../../shared/ui/mobile-section-navigator-sheet/mobile-section-navigator-sheet.component';
import { MultiSelectDropdownComponent, } from '../../../shared/ui/multi-select-dropdown/multi-select-dropdown.component';
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
import * as i2 from "@angular/common";
const _c0 = () => [];
const _c1 = a0 => [a0];
const _c2 = () => ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
const _forTrack0 = ($index, $item) => $item._id;
const _forTrack1 = ($index, $item) => $item.key;
function AcademicResourcesComponent_Conditional_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 3);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r0.error());
} }
function AcademicResourcesComponent_Conditional_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 4);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r0.message());
} }
function AcademicResourcesComponent_For_8_Conditional_2_Case_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(0, "svg", 30);
} }
function AcademicResourcesComponent_For_8_Conditional_2_Case_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(0, "svg", 31);
} }
function AcademicResourcesComponent_For_8_Conditional_2_Case_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(0, "svg", 32);
} }
function AcademicResourcesComponent_For_8_Conditional_2_Case_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(0, "svg", 33);
} }
function AcademicResourcesComponent_For_8_Conditional_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵconditionalCreate(0, AcademicResourcesComponent_For_8_Conditional_2_Case_0_Template, 1, 0, ":svg:svg", 30)(1, AcademicResourcesComponent_For_8_Conditional_2_Case_1_Template, 1, 0, ":svg:svg", 31)(2, AcademicResourcesComponent_For_8_Conditional_2_Case_2_Template, 1, 0, ":svg:svg", 32)(3, AcademicResourcesComponent_For_8_Conditional_2_Case_3_Template, 1, 0, ":svg:svg", 33);
} if (rf & 2) {
    let tmp_12_0;
    const ɵ$index_18_r2 = i0.ɵɵnextContext().$index;
    i0.ɵɵconditional((tmp_12_0 = ɵ$index_18_r2) === 0 ? 0 : tmp_12_0 === 1 ? 1 : tmp_12_0 === 2 ? 2 : 3);
} }
function AcademicResourcesComponent_For_8_Conditional_3_Case_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(0, "svg", 34);
} }
function AcademicResourcesComponent_For_8_Conditional_3_Case_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(0, "svg", 35);
} }
function AcademicResourcesComponent_For_8_Conditional_3_Case_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(0, "svg", 36);
} }
function AcademicResourcesComponent_For_8_Conditional_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵconditionalCreate(0, AcademicResourcesComponent_For_8_Conditional_3_Case_0_Template, 1, 0, ":svg:svg", 34)(1, AcademicResourcesComponent_For_8_Conditional_3_Case_1_Template, 1, 0, ":svg:svg", 35)(2, AcademicResourcesComponent_For_8_Conditional_3_Case_2_Template, 1, 0, ":svg:svg", 36);
} if (rf & 2) {
    let tmp_12_0;
    const ɵ$index_18_r2 = i0.ɵɵnextContext().$index;
    i0.ɵɵconditional((tmp_12_0 = ɵ$index_18_r2) === 0 ? 0 : tmp_12_0 === 1 ? 1 : 2);
} }
function AcademicResourcesComponent_For_8_Conditional_4_Case_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(0, "svg", 37);
} }
function AcademicResourcesComponent_For_8_Conditional_4_Case_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(0, "svg", 31);
} }
function AcademicResourcesComponent_For_8_Conditional_4_Case_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(0, "svg", 32);
} }
function AcademicResourcesComponent_For_8_Conditional_4_Case_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(0, "svg", 34);
} }
function AcademicResourcesComponent_For_8_Conditional_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵconditionalCreate(0, AcademicResourcesComponent_For_8_Conditional_4_Case_0_Template, 1, 0, ":svg:svg", 37)(1, AcademicResourcesComponent_For_8_Conditional_4_Case_1_Template, 1, 0, ":svg:svg", 31)(2, AcademicResourcesComponent_For_8_Conditional_4_Case_2_Template, 1, 0, ":svg:svg", 32)(3, AcademicResourcesComponent_For_8_Conditional_4_Case_3_Template, 1, 0, ":svg:svg", 34);
} if (rf & 2) {
    let tmp_12_0;
    const ɵ$index_18_r2 = i0.ɵɵnextContext().$index;
    i0.ɵɵconditional((tmp_12_0 = ɵ$index_18_r2) === 0 ? 0 : tmp_12_0 === 1 ? 1 : tmp_12_0 === 2 ? 2 : 3);
} }
function AcademicResourcesComponent_For_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 6)(1, "span", 29);
    i0.ɵɵconditionalCreate(2, AcademicResourcesComponent_For_8_Conditional_2_Template, 4, 1)(3, AcademicResourcesComponent_For_8_Conditional_3_Template, 3, 1)(4, AcademicResourcesComponent_For_8_Conditional_4_Template, 4, 1);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "span")(6, "small");
    i0.ɵɵtext(7);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "strong");
    i0.ɵɵtext(9);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const label_r3 = ctx.$implicit;
    const ɵ$index_18_r2 = ctx.$index;
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵconditional(ctx_r0.section() === "subjects" ? 2 : ctx_r0.section() === "faculties" ? 3 : 4);
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(label_r3);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r0.summary(ɵ$index_18_r2));
} }
function AcademicResourcesComponent_Conditional_19_Template(rf, ctx) { if (rf & 1) {
    const _r4 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 16)(1, "label")(2, "span");
    i0.ɵɵtext(3, "Status");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "select", 21);
    i0.ɵɵlistener("ngModelChange", function AcademicResourcesComponent_Conditional_19_Template_select_ngModelChange_4_listener($event) { i0.ɵɵrestoreView(_r4); const ctx_r0 = i0.ɵɵnextContext(); ctx_r0.statusFilter.set($event); return i0.ɵɵresetView(ctx_r0.page.set(1)); });
    i0.ɵɵelementStart(5, "option", 38);
    i0.ɵɵtext(6, "All statuses");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "option", 39);
    i0.ɵɵtext(8, "Active");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(9, "option", 40);
    i0.ɵɵtext(10, "Inactive");
    i0.ɵɵelementEnd()()()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("ngModel", ctx_r0.statusFilter());
} }
function AcademicResourcesComponent_Conditional_24_Template(rf, ctx) { if (rf & 1) {
    const _r5 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 18)(1, "label")(2, "input", 41);
    i0.ɵɵlistener("ngModelChange", function AcademicResourcesComponent_Conditional_24_Template_input_ngModelChange_2_listener($event) { i0.ɵɵrestoreView(_r5); const ctx_r0 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r0.showDetailOne.set($event)); });
    i0.ɵɵelementEnd();
    i0.ɵɵtext(3, " Detail 1");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "label")(5, "input", 41);
    i0.ɵɵlistener("ngModelChange", function AcademicResourcesComponent_Conditional_24_Template_input_ngModelChange_5_listener($event) { i0.ɵɵrestoreView(_r5); const ctx_r0 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r0.showDetailTwo.set($event)); });
    i0.ɵɵelementEnd();
    i0.ɵɵtext(6, " Detail 2");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "label")(8, "input", 41);
    i0.ɵɵlistener("ngModelChange", function AcademicResourcesComponent_Conditional_24_Template_input_ngModelChange_8_listener($event) { i0.ɵɵrestoreView(_r5); const ctx_r0 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r0.showStatus.set($event)); });
    i0.ɵɵelementEnd();
    i0.ɵɵtext(9, " Status");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngModel", ctx_r0.showDetailOne());
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngModel", ctx_r0.showDetailTwo());
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngModel", ctx_r0.showStatus());
} }
function AcademicResourcesComponent_Conditional_31_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "th");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r0.section() === "subjects" ? "Type" : ctx_r0.section() === "faculties" ? "Department" : "Type \u00B7 location", " ");
} }
function AcademicResourcesComponent_Conditional_32_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "th");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r0.section() === "subjects" ? "Credits / L\u2013T\u2013P" : ctx_r0.section() === "faculties" ? "Subjects \u00B7 availability" : "Capacity \u00B7 subjects", " ");
} }
function AcademicResourcesComponent_Conditional_33_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "th");
    i0.ɵɵtext(1, "Status");
    i0.ɵɵelementEnd();
} }
function AcademicResourcesComponent_For_38_Conditional_6_Conditional_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "strong");
    i0.ɵɵtext(1);
    i0.ɵɵpipe(2, "titlecase");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "small");
    i0.ɵɵtext(4);
    i0.ɵɵpipe(5, "titlecase");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r8 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(2, 2, item_r8.subjectType));
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(5, 4, item_r8.evaluationType));
} }
function AcademicResourcesComponent_For_38_Conditional_6_Conditional_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "strong");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(2, "small");
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r8 = i0.ɵɵnextContext(2).$implicit;
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r0.labels("department", item_r8.departmentIds || i0.ɵɵpureFunction0(2, _c0)).join(", ") || "\u2014");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(item_r8.email);
} }
function AcademicResourcesComponent_For_38_Conditional_6_Conditional_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "strong");
    i0.ɵɵtext(1);
    i0.ɵɵpipe(2, "titlecase");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "small");
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r8 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(2, 3, item_r8.roomType));
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate2("", item_r8.building || "Building not set", " \u00B7 ", item_r8.floor || "Floor not set");
} }
function AcademicResourcesComponent_For_38_Conditional_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td");
    i0.ɵɵconditionalCreate(1, AcademicResourcesComponent_For_38_Conditional_6_Conditional_1_Template, 6, 6)(2, AcademicResourcesComponent_For_38_Conditional_6_Conditional_2_Template, 4, 3)(3, AcademicResourcesComponent_For_38_Conditional_6_Conditional_3_Template, 5, 5);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵconditional(ctx_r0.section() === "subjects" ? 1 : ctx_r0.section() === "faculties" ? 2 : 3);
} }
function AcademicResourcesComponent_For_38_Conditional_7_Conditional_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "strong");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(2, "small");
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r8 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1("", item_r8.credits || 0, " credits");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate3("", item_r8.lectureHours || 0, "\u2013", item_r8.tutorialHours || 0, "\u2013", item_r8.labHours || 0);
} }
function AcademicResourcesComponent_For_38_Conditional_7_Conditional_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "strong");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(2, "small");
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r8 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1("", (item_r8.subjectIds == null ? null : item_r8.subjectIds.length) || 0, " subjects");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate2("", (item_r8.availableDays == null ? null : item_r8.availableDays.length) || 0, " days \u00B7 ", item_r8.weeklyLimit, " hrs");
} }
function AcademicResourcesComponent_For_38_Conditional_7_Conditional_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "strong");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(2, "small");
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r8 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1("", item_r8.capacity, " seats");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1("", (item_r8.subjectIds == null ? null : item_r8.subjectIds.length) || 0, " supported subjects");
} }
function AcademicResourcesComponent_For_38_Conditional_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td");
    i0.ɵɵconditionalCreate(1, AcademicResourcesComponent_For_38_Conditional_7_Conditional_1_Template, 4, 4)(2, AcademicResourcesComponent_For_38_Conditional_7_Conditional_2_Template, 4, 3)(3, AcademicResourcesComponent_For_38_Conditional_7_Conditional_3_Template, 4, 2);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵconditional(ctx_r0.section() === "subjects" ? 1 : ctx_r0.section() === "faculties" ? 2 : 3);
} }
function AcademicResourcesComponent_For_38_Conditional_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td")(1, "span", 44);
    i0.ɵɵelement(2, "i", 45);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const item_r8 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance();
    i0.ɵɵclassProp("erp-status--neutral", !item_r8.isActive);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(item_r8.isActive ? "Active" : "Inactive");
} }
function AcademicResourcesComponent_For_38_Template(rf, ctx) { if (rf & 1) {
    const _r7 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "tr")(1, "td")(2, "strong");
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "small");
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd()();
    i0.ɵɵconditionalCreate(6, AcademicResourcesComponent_For_38_Conditional_6_Template, 4, 1, "td");
    i0.ɵɵconditionalCreate(7, AcademicResourcesComponent_For_38_Conditional_7_Template, 4, 1, "td");
    i0.ɵɵconditionalCreate(8, AcademicResourcesComponent_For_38_Conditional_8_Template, 4, 3, "td");
    i0.ɵɵelementStart(9, "td", 42)(10, "erp-compact-action-menu", 43);
    i0.ɵɵlistener("selected", function AcademicResourcesComponent_For_38_Template_erp_compact_action_menu_selected_10_listener($event) { const item_r8 = i0.ɵɵrestoreView(_r7).$implicit; const ctx_r0 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r0.handleAction($event, item_r8)); });
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const item_r8 = ctx.$implicit;
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(item_r8.name || "Unnamed subject");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(item_r8.code || "\u2014");
    i0.ɵɵadvance();
    i0.ɵɵconditional(ctx_r0.showDetailOne() ? 6 : -1);
    i0.ɵɵadvance();
    i0.ɵɵconditional(ctx_r0.showDetailTwo() ? 7 : -1);
    i0.ɵɵadvance();
    i0.ɵɵconditional(ctx_r0.showStatus() ? 8 : -1);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("items", ctx_r0.rowActions);
} }
function AcademicResourcesComponent_ForEmpty_39_Conditional_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "span", 47);
    i0.ɵɵelementStart(1, "h2");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1("Loading ", ctx_r0.title().toLowerCase(), "\u2026");
} }
function AcademicResourcesComponent_ForEmpty_39_Conditional_4_Conditional_5_Template(rf, ctx) { if (rf & 1) {
    const _r6 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 14);
    i0.ɵɵlistener("click", function AcademicResourcesComponent_ForEmpty_39_Conditional_4_Conditional_5_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r6); const ctx_r0 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r0.openCreate()); });
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(1, "svg", 50);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate2("", ctx_r0.section() === "subjects" ? "Create" : "Add", " ", ctx_r0.singular(), " ");
} }
function AcademicResourcesComponent_ForEmpty_39_Conditional_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "erp-admin-illustration", 48);
    i0.ɵɵelementStart(1, "h2");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "p");
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵconditionalCreate(5, AcademicResourcesComponent_ForEmpty_39_Conditional_4_Conditional_5_Template, 3, 2, "button", 49);
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("kind", ctx_r0.emptyIllustration());
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", ctx_r0.search || ctx_r0.statusFilter() !== "all" ? "No matching results" : "No " + ctx_r0.title().toLowerCase() + (ctx_r0.section() === "faculties" ? " added" : " created"), " ");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", ctx_r0.search || ctx_r0.statusFilter() !== "all" ? "Try changing your search or filters." : ctx_r0.description(), " ");
    i0.ɵɵadvance();
    i0.ɵɵconditional(!ctx_r0.search && ctx_r0.statusFilter() === "all" ? 5 : -1);
} }
function AcademicResourcesComponent_ForEmpty_39_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "tr")(1, "td")(2, "div", 46);
    i0.ɵɵconditionalCreate(3, AcademicResourcesComponent_ForEmpty_39_Conditional_3_Template, 3, 1)(4, AcademicResourcesComponent_ForEmpty_39_Conditional_4_Template, 6, 4);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵattribute("colspan", ctx_r0.tableColspan());
    i0.ɵɵadvance(2);
    i0.ɵɵconditional(ctx_r0.loading() ? 3 : 4);
} }
function AcademicResourcesComponent_For_46_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 22);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const size_r9 = ctx.$implicit;
    i0.ɵɵproperty("value", size_r9);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1("", size_r9, " / page");
} }
function AcademicResourcesComponent_Conditional_51_Conditional_13_Case_11_For_12_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 22);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r13 = ctx.$implicit;
    i0.ɵɵproperty("value", item_r13._id);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(item_r13.name);
} }
function AcademicResourcesComponent_Conditional_51_Conditional_13_Case_11_For_20_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 22);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r14 = ctx.$implicit;
    i0.ɵɵproperty("value", item_r14._id);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(item_r14.name);
} }
function AcademicResourcesComponent_Conditional_51_Conditional_13_Case_11_For_28_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 22);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r15 = ctx.$implicit;
    i0.ɵɵproperty("value", item_r15._id);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(item_r15.name);
} }
function AcademicResourcesComponent_Conditional_51_Conditional_13_Case_11_For_36_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 22);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r16 = ctx.$implicit;
    i0.ɵɵproperty("value", item_r16._id);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(item_r16.name);
} }
function AcademicResourcesComponent_Conditional_51_Conditional_13_Case_11_For_44_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 22);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r17 = ctx.$implicit;
    i0.ɵɵproperty("value", item_r17._id);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(item_r17.name);
} }
function AcademicResourcesComponent_Conditional_51_Conditional_13_Case_11_For_52_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 22);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r18 = ctx.$implicit;
    i0.ɵɵproperty("value", item_r18._id);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(item_r18.name);
} }
function AcademicResourcesComponent_Conditional_51_Conditional_13_Case_11_For_60_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 68);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r19 = ctx.$implicit;
    i0.ɵɵproperty("ngValue", item_r19);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1("Semester ", item_r19);
} }
function AcademicResourcesComponent_Conditional_51_Conditional_13_Case_11_Template(rf, ctx) { if (rf & 1) {
    const _r12 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "fieldset", 63)(1, "legend");
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(2, "svg", 65);
    i0.ɵɵtext(3, " Course Details");
    i0.ɵɵelementEnd();
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(4, "div", 66)(5, "label")(6, "span");
    i0.ɵɵtext(7, "Session");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "select", 21);
    i0.ɵɵtwoWayListener("ngModelChange", function AcademicResourcesComponent_Conditional_51_Conditional_13_Case_11_Template_select_ngModelChange_8_listener($event) { i0.ɵɵrestoreView(_r12); const ctx_r0 = i0.ɵɵnextContext(3); i0.ɵɵtwoWayBindingSet(ctx_r0.sessionId, $event) || (ctx_r0.sessionId = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementStart(9, "option", 67);
    i0.ɵɵtext(10, "Select session");
    i0.ɵɵelementEnd();
    i0.ɵɵrepeaterCreate(11, AcademicResourcesComponent_Conditional_51_Conditional_13_Case_11_For_12_Template, 2, 2, "option", 22, _forTrack0);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(13, "label")(14, "span");
    i0.ɵɵtext(15, "University");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(16, "select", 21);
    i0.ɵɵlistener("ngModelChange", function AcademicResourcesComponent_Conditional_51_Conditional_13_Case_11_Template_select_ngModelChange_16_listener($event) { i0.ɵɵrestoreView(_r12); const ctx_r0 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r0.selectUniversity($event)); });
    i0.ɵɵelementStart(17, "option", 67);
    i0.ɵɵtext(18, "Select university");
    i0.ɵɵelementEnd();
    i0.ɵɵrepeaterCreate(19, AcademicResourcesComponent_Conditional_51_Conditional_13_Case_11_For_20_Template, 2, 2, "option", 22, _forTrack0);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(21, "label")(22, "span");
    i0.ɵɵtext(23, "College");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(24, "select", 21);
    i0.ɵɵlistener("ngModelChange", function AcademicResourcesComponent_Conditional_51_Conditional_13_Case_11_Template_select_ngModelChange_24_listener($event) { i0.ɵɵrestoreView(_r12); const ctx_r0 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r0.selectCollege($event)); });
    i0.ɵɵelementStart(25, "option", 67);
    i0.ɵɵtext(26, "Select college");
    i0.ɵɵelementEnd();
    i0.ɵɵrepeaterCreate(27, AcademicResourcesComponent_Conditional_51_Conditional_13_Case_11_For_28_Template, 2, 2, "option", 22, _forTrack0);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(29, "label")(30, "span");
    i0.ɵɵtext(31, "Department");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(32, "select", 21);
    i0.ɵɵlistener("ngModelChange", function AcademicResourcesComponent_Conditional_51_Conditional_13_Case_11_Template_select_ngModelChange_32_listener($event) { i0.ɵɵrestoreView(_r12); const ctx_r0 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r0.selectDepartment($event)); });
    i0.ɵɵelementStart(33, "option", 67);
    i0.ɵɵtext(34, "Select department");
    i0.ɵɵelementEnd();
    i0.ɵɵrepeaterCreate(35, AcademicResourcesComponent_Conditional_51_Conditional_13_Case_11_For_36_Template, 2, 2, "option", 22, _forTrack0);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(37, "label")(38, "span");
    i0.ɵɵtext(39, "Level");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(40, "select", 21);
    i0.ɵɵlistener("ngModelChange", function AcademicResourcesComponent_Conditional_51_Conditional_13_Case_11_Template_select_ngModelChange_40_listener($event) { i0.ɵɵrestoreView(_r12); const ctx_r0 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r0.selectLevel($event)); });
    i0.ɵɵelementStart(41, "option", 67);
    i0.ɵɵtext(42, "Select level");
    i0.ɵɵelementEnd();
    i0.ɵɵrepeaterCreate(43, AcademicResourcesComponent_Conditional_51_Conditional_13_Case_11_For_44_Template, 2, 2, "option", 22, _forTrack0);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(45, "label")(46, "span");
    i0.ɵɵtext(47, "Course");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(48, "select", 21);
    i0.ɵɵlistener("ngModelChange", function AcademicResourcesComponent_Conditional_51_Conditional_13_Case_11_Template_select_ngModelChange_48_listener($event) { i0.ɵɵrestoreView(_r12); const ctx_r0 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r0.courseIds = $event ? [$event] : []); });
    i0.ɵɵelementStart(49, "option", 67);
    i0.ɵɵtext(50, "Select course");
    i0.ɵɵelementEnd();
    i0.ɵɵrepeaterCreate(51, AcademicResourcesComponent_Conditional_51_Conditional_13_Case_11_For_52_Template, 2, 2, "option", 22, _forTrack0);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(53, "label")(54, "span");
    i0.ɵɵtext(55, "Semester");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(56, "select", 21);
    i0.ɵɵtwoWayListener("ngModelChange", function AcademicResourcesComponent_Conditional_51_Conditional_13_Case_11_Template_select_ngModelChange_56_listener($event) { i0.ɵɵrestoreView(_r12); const ctx_r0 = i0.ɵɵnextContext(3); i0.ɵɵtwoWayBindingSet(ctx_r0.semester, $event) || (ctx_r0.semester = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementStart(57, "option", 68);
    i0.ɵɵtext(58, "Select semester");
    i0.ɵɵelementEnd();
    i0.ɵɵrepeaterCreate(59, AcademicResourcesComponent_Conditional_51_Conditional_13_Case_11_For_60_Template, 2, 2, "option", 68, i0.ɵɵrepeaterTrackByIdentity);
    i0.ɵɵelementEnd()()()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(8);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r0.sessionId);
    i0.ɵɵadvance(3);
    i0.ɵɵrepeater(ctx_r0.master("academic"));
    i0.ɵɵadvance(5);
    i0.ɵɵproperty("ngModel", ctx_r0.universityId);
    i0.ɵɵadvance(3);
    i0.ɵɵrepeater(ctx_r0.master("university"));
    i0.ɵɵadvance(5);
    i0.ɵɵproperty("ngModel", ctx_r0.collegeId);
    i0.ɵɵadvance(3);
    i0.ɵɵrepeater(ctx_r0.scopedMaster("college", ctx_r0.universityId ? i0.ɵɵpureFunction1(8, _c1, ctx_r0.universityId) : i0.ɵɵpureFunction0(10, _c0)));
    i0.ɵɵadvance(5);
    i0.ɵɵproperty("ngModel", ctx_r0.singleDepartmentId());
    i0.ɵɵadvance(3);
    i0.ɵɵrepeater(ctx_r0.departmentOptions());
    i0.ɵɵadvance(5);
    i0.ɵɵproperty("ngModel", ctx_r0.levelId);
    i0.ɵɵadvance(3);
    i0.ɵɵrepeater(ctx_r0.levelOptions());
    i0.ɵɵadvance(5);
    i0.ɵɵproperty("ngModel", ctx_r0.singleCourseId());
    i0.ɵɵadvance(3);
    i0.ɵɵrepeater(ctx_r0.courseOptions());
    i0.ɵɵadvance(5);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r0.semester);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngValue", 0);
    i0.ɵɵadvance(2);
    i0.ɵɵrepeater(ctx_r0.semesterOptions);
} }
function AcademicResourcesComponent_Conditional_51_Conditional_13_Case_12_Template(rf, ctx) { if (rf & 1) {
    const _r20 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "fieldset", 63)(1, "legend");
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(2, "svg", 69);
    i0.ɵɵtext(3, " Subject Details");
    i0.ɵɵelementEnd();
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(4, "div", 70)(5, "label")(6, "span");
    i0.ɵɵtext(7, "Mark Type");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "select", 21);
    i0.ɵɵtwoWayListener("ngModelChange", function AcademicResourcesComponent_Conditional_51_Conditional_13_Case_12_Template_select_ngModelChange_8_listener($event) { i0.ɵɵrestoreView(_r20); const ctx_r0 = i0.ɵɵnextContext(3); i0.ɵɵtwoWayBindingSet(ctx_r0.markType, $event) || (ctx_r0.markType = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementStart(9, "option", 67);
    i0.ɵɵtext(10, "Select mark type");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(11, "option", 71);
    i0.ɵɵtext(12, "Theory");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(13, "option", 72);
    i0.ɵɵtext(14, "Practical");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(15, "option", 73);
    i0.ɵɵtext(16, "Project");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(17, "option", 74);
    i0.ɵɵtext(18, "Audit");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(19, "label")(20, "span");
    i0.ɵɵtext(21, "Subject Option");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(22, "select", 21);
    i0.ɵɵtwoWayListener("ngModelChange", function AcademicResourcesComponent_Conditional_51_Conditional_13_Case_12_Template_select_ngModelChange_22_listener($event) { i0.ɵɵrestoreView(_r20); const ctx_r0 = i0.ɵɵnextContext(3); i0.ɵɵtwoWayBindingSet(ctx_r0.subjectOption, $event) || (ctx_r0.subjectOption = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementStart(23, "option", 67);
    i0.ɵɵtext(24, "Select subject option");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(25, "option", 75);
    i0.ɵɵtext(26, "Required");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(27, "option", 76);
    i0.ɵɵtext(28, "Elective");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(29, "label")(30, "span");
    i0.ɵɵtext(31, "Subject Type");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(32, "select", 21);
    i0.ɵɵtwoWayListener("ngModelChange", function AcademicResourcesComponent_Conditional_51_Conditional_13_Case_12_Template_select_ngModelChange_32_listener($event) { i0.ɵɵrestoreView(_r20); const ctx_r0 = i0.ɵɵnextContext(3); i0.ɵɵtwoWayBindingSet(ctx_r0.subjectType, $event) || (ctx_r0.subjectType = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementStart(33, "option", 67);
    i0.ɵɵtext(34, "Select subject type");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(35, "option", 71);
    i0.ɵɵtext(36, "Theory");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(37, "option", 72);
    i0.ɵɵtext(38, "Practical");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(39, "option", 77);
    i0.ɵɵtext(40, "Tutorial");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(41, "option", 73);
    i0.ɵɵtext(42, "Project");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(43, "label")(44, "span");
    i0.ɵɵtext(45, "Evaluation Type");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(46, "select", 21);
    i0.ɵɵtwoWayListener("ngModelChange", function AcademicResourcesComponent_Conditional_51_Conditional_13_Case_12_Template_select_ngModelChange_46_listener($event) { i0.ɵɵrestoreView(_r20); const ctx_r0 = i0.ɵɵnextContext(3); i0.ɵɵtwoWayBindingSet(ctx_r0.evaluationType, $event) || (ctx_r0.evaluationType = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementStart(47, "option", 67);
    i0.ɵɵtext(48, "Select evaluation type");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(49, "option", 78);
    i0.ɵɵtext(50, "Marks");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(51, "option", 79);
    i0.ɵɵtext(52, "Grade");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(53, "label")(54, "span");
    i0.ɵɵtext(55, "Subject Name (In English)");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(56, "input", 80);
    i0.ɵɵtwoWayListener("ngModelChange", function AcademicResourcesComponent_Conditional_51_Conditional_13_Case_12_Template_input_ngModelChange_56_listener($event) { i0.ɵɵrestoreView(_r20); const ctx_r0 = i0.ɵɵnextContext(3); i0.ɵɵtwoWayBindingSet(ctx_r0.name, $event) || (ctx_r0.name = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(57, "label")(58, "span");
    i0.ɵɵtext(59, "Subject Name (In Hindi)");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(60, "input", 81);
    i0.ɵɵtwoWayListener("ngModelChange", function AcademicResourcesComponent_Conditional_51_Conditional_13_Case_12_Template_input_ngModelChange_60_listener($event) { i0.ɵɵrestoreView(_r20); const ctx_r0 = i0.ɵɵnextContext(3); i0.ɵɵtwoWayBindingSet(ctx_r0.hindiName, $event) || (ctx_r0.hindiName = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(61, "label")(62, "span");
    i0.ɵɵtext(63, "Credit Earned");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(64, "input", 82);
    i0.ɵɵtwoWayListener("ngModelChange", function AcademicResourcesComponent_Conditional_51_Conditional_13_Case_12_Template_input_ngModelChange_64_listener($event) { i0.ɵɵrestoreView(_r20); const ctx_r0 = i0.ɵɵnextContext(3); i0.ɵɵtwoWayBindingSet(ctx_r0.credits, $event) || (ctx_r0.credits = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(65, "label")(66, "span");
    i0.ɵɵtext(67, "Subject Counter");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(68, "input", 82);
    i0.ɵɵtwoWayListener("ngModelChange", function AcademicResourcesComponent_Conditional_51_Conditional_13_Case_12_Template_input_ngModelChange_68_listener($event) { i0.ɵɵrestoreView(_r20); const ctx_r0 = i0.ɵɵnextContext(3); i0.ɵɵtwoWayBindingSet(ctx_r0.subjectCounter, $event) || (ctx_r0.subjectCounter = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(69, "label")(70, "span");
    i0.ɵɵtext(71, "Subject Code");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(72, "input", 83);
    i0.ɵɵtwoWayListener("ngModelChange", function AcademicResourcesComponent_Conditional_51_Conditional_13_Case_12_Template_input_ngModelChange_72_listener($event) { i0.ɵɵrestoreView(_r20); const ctx_r0 = i0.ɵɵnextContext(3); i0.ɵɵtwoWayBindingSet(ctx_r0.code, $event) || (ctx_r0.code = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(73, "label")(74, "span");
    i0.ɵɵtext(75, "Lecture");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(76, "input", 82);
    i0.ɵɵtwoWayListener("ngModelChange", function AcademicResourcesComponent_Conditional_51_Conditional_13_Case_12_Template_input_ngModelChange_76_listener($event) { i0.ɵɵrestoreView(_r20); const ctx_r0 = i0.ɵɵnextContext(3); i0.ɵɵtwoWayBindingSet(ctx_r0.lectureHours, $event) || (ctx_r0.lectureHours = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(77, "label")(78, "span");
    i0.ɵɵtext(79, "Tutorial");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(80, "input", 82);
    i0.ɵɵtwoWayListener("ngModelChange", function AcademicResourcesComponent_Conditional_51_Conditional_13_Case_12_Template_input_ngModelChange_80_listener($event) { i0.ɵɵrestoreView(_r20); const ctx_r0 = i0.ɵɵnextContext(3); i0.ɵɵtwoWayBindingSet(ctx_r0.tutorialHours, $event) || (ctx_r0.tutorialHours = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(81, "label")(82, "span");
    i0.ɵɵtext(83, "Lab");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(84, "input", 82);
    i0.ɵɵtwoWayListener("ngModelChange", function AcademicResourcesComponent_Conditional_51_Conditional_13_Case_12_Template_input_ngModelChange_84_listener($event) { i0.ɵɵrestoreView(_r20); const ctx_r0 = i0.ɵɵnextContext(3); i0.ɵɵtwoWayBindingSet(ctx_r0.labHours, $event) || (ctx_r0.labHours = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(85, "label")(86, "span");
    i0.ɵɵtext(87, "Max. Marks");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(88, "input", 82);
    i0.ɵɵtwoWayListener("ngModelChange", function AcademicResourcesComponent_Conditional_51_Conditional_13_Case_12_Template_input_ngModelChange_88_listener($event) { i0.ɵɵrestoreView(_r20); const ctx_r0 = i0.ɵɵnextContext(3); i0.ɵɵtwoWayBindingSet(ctx_r0.maxMarks, $event) || (ctx_r0.maxMarks = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(89, "div", 84)(90, "label", 85)(91, "input", 41);
    i0.ɵɵtwoWayListener("ngModelChange", function AcademicResourcesComponent_Conditional_51_Conditional_13_Case_12_Template_input_ngModelChange_91_listener($event) { i0.ɵɵrestoreView(_r20); const ctx_r0 = i0.ɵɵnextContext(3); i0.ɵɵtwoWayBindingSet(ctx_r0.passMarksEnabled, $event) || (ctx_r0.passMarksEnabled = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(92, "span")(93, "strong");
    i0.ɵɵtext(94, "Pass Marks");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(95, "input", 86);
    i0.ɵɵtwoWayListener("ngModelChange", function AcademicResourcesComponent_Conditional_51_Conditional_13_Case_12_Template_input_ngModelChange_95_listener($event) { i0.ɵɵrestoreView(_r20); const ctx_r0 = i0.ɵɵnextContext(3); i0.ɵɵtwoWayBindingSet(ctx_r0.passMarks, $event) || (ctx_r0.passMarks = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(96, "div", 87)(97, "label", 88)(98, "input", 41);
    i0.ɵɵtwoWayListener("ngModelChange", function AcademicResourcesComponent_Conditional_51_Conditional_13_Case_12_Template_input_ngModelChange_98_listener($event) { i0.ɵɵrestoreView(_r20); const ctx_r0 = i0.ɵɵnextContext(3); i0.ɵɵtwoWayBindingSet(ctx_r0.isPaper, $event) || (ctx_r0.isPaper = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(99, "span")(100, "strong");
    i0.ɵɵtext(101, "Is Paper Exist");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(102, "label", 88)(103, "input", 41);
    i0.ɵɵtwoWayListener("ngModelChange", function AcademicResourcesComponent_Conditional_51_Conditional_13_Case_12_Template_input_ngModelChange_103_listener($event) { i0.ɵɵrestoreView(_r20); const ctx_r0 = i0.ɵɵnextContext(3); i0.ɵɵtwoWayBindingSet(ctx_r0.isOpenElective, $event) || (ctx_r0.isOpenElective = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(104, "span")(105, "strong");
    i0.ɵɵtext(106, "Is Open Elective");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(107, "label", 88)(108, "input", 41);
    i0.ɵɵtwoWayListener("ngModelChange", function AcademicResourcesComponent_Conditional_51_Conditional_13_Case_12_Template_input_ngModelChange_108_listener($event) { i0.ɵɵrestoreView(_r20); const ctx_r0 = i0.ɵɵnextContext(3); i0.ɵɵtwoWayBindingSet(ctx_r0.isGroupSubject, $event) || (ctx_r0.isGroupSubject = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(109, "span")(110, "strong");
    i0.ɵɵtext(111, "Is Group Exist");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(112, "label", 88)(113, "input", 41);
    i0.ɵɵtwoWayListener("ngModelChange", function AcademicResourcesComponent_Conditional_51_Conditional_13_Case_12_Template_input_ngModelChange_113_listener($event) { i0.ɵɵrestoreView(_r20); const ctx_r0 = i0.ɵɵnextContext(3); i0.ɵɵtwoWayBindingSet(ctx_r0.isFoundation, $event) || (ctx_r0.isFoundation = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(114, "span")(115, "strong");
    i0.ɵɵtext(116, "Is Foundation");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(117, "label", 88)(118, "input", 41);
    i0.ɵɵtwoWayListener("ngModelChange", function AcademicResourcesComponent_Conditional_51_Conditional_13_Case_12_Template_input_ngModelChange_118_listener($event) { i0.ɵɵrestoreView(_r20); const ctx_r0 = i0.ɵɵnextContext(3); i0.ɵɵtwoWayBindingSet(ctx_r0.allowMidMarksEntry, $event) || (ctx_r0.allowMidMarksEntry = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(119, "span")(120, "strong");
    i0.ɵɵtext(121, "Allow MID Marks Entry By Faculty?");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(122, "label", 88)(123, "input", 41);
    i0.ɵɵtwoWayListener("ngModelChange", function AcademicResourcesComponent_Conditional_51_Conditional_13_Case_12_Template_input_ngModelChange_123_listener($event) { i0.ɵɵrestoreView(_r20); const ctx_r0 = i0.ɵɵnextContext(3); i0.ɵɵtwoWayBindingSet(ctx_r0.allowExternalMarksEntry, $event) || (ctx_r0.allowExternalMarksEntry = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(124, "span")(125, "strong");
    i0.ɵɵtext(126, "Allow Ext Marks Entry By Faculty?");
    i0.ɵɵelementEnd()()()()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(8);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r0.markType);
    i0.ɵɵadvance(14);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r0.subjectOption);
    i0.ɵɵadvance(10);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r0.subjectType);
    i0.ɵɵadvance(14);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r0.evaluationType);
    i0.ɵɵadvance(10);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r0.name);
    i0.ɵɵadvance(4);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r0.hindiName);
    i0.ɵɵadvance(4);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r0.credits);
    i0.ɵɵadvance(4);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r0.subjectCounter);
    i0.ɵɵadvance(4);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r0.code);
    i0.ɵɵadvance(4);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r0.lectureHours);
    i0.ɵɵadvance(4);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r0.tutorialHours);
    i0.ɵɵadvance(4);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r0.labHours);
    i0.ɵɵadvance(4);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r0.maxMarks);
    i0.ɵɵadvance(3);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r0.passMarksEnabled);
    i0.ɵɵadvance(4);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r0.passMarks);
    i0.ɵɵproperty("disabled", !ctx_r0.passMarksEnabled);
    i0.ɵɵadvance(3);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r0.isPaper);
    i0.ɵɵadvance(5);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r0.isOpenElective);
    i0.ɵɵadvance(5);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r0.isGroupSubject);
    i0.ɵɵadvance(5);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r0.isFoundation);
    i0.ɵɵadvance(5);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r0.allowMidMarksEntry);
    i0.ɵɵadvance(5);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r0.allowExternalMarksEntry);
} }
function AcademicResourcesComponent_Conditional_51_Conditional_13_Case_13_Template(rf, ctx) { if (rf & 1) {
    const _r21 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "fieldset", 63)(1, "legend");
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(2, "svg", 89);
    i0.ɵɵtext(3, " Marks Visibility");
    i0.ɵɵelementEnd();
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(4, "div", 90)(5, "div", 91)(6, "label")(7, "input", 41);
    i0.ɵɵtwoWayListener("ngModelChange", function AcademicResourcesComponent_Conditional_51_Conditional_13_Case_13_Template_input_ngModelChange_7_listener($event) { i0.ɵɵrestoreView(_r21); const ctx_r0 = i0.ɵɵnextContext(3); i0.ɵɵtwoWayBindingSet(ctx_r0.showAlternativeGrade, $event) || (ctx_r0.showAlternativeGrade = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd();
    i0.ɵɵtext(8, " Show Alternative Grade");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(9, "input", 92);
    i0.ɵɵtwoWayListener("ngModelChange", function AcademicResourcesComponent_Conditional_51_Conditional_13_Case_13_Template_input_ngModelChange_9_listener($event) { i0.ɵɵrestoreView(_r21); const ctx_r0 = i0.ɵɵnextContext(3); i0.ɵɵtwoWayBindingSet(ctx_r0.alternativeGrade, $event) || (ctx_r0.alternativeGrade = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(10, "div", 91)(11, "label")(12, "input", 41);
    i0.ɵɵtwoWayListener("ngModelChange", function AcademicResourcesComponent_Conditional_51_Conditional_13_Case_13_Template_input_ngModelChange_12_listener($event) { i0.ɵɵrestoreView(_r21); const ctx_r0 = i0.ɵɵnextContext(3); i0.ɵɵtwoWayBindingSet(ctx_r0.showAlternativeGradePoint, $event) || (ctx_r0.showAlternativeGradePoint = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd();
    i0.ɵɵtext(13, " Show Alternative Grade Point");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(14, "input", 93);
    i0.ɵɵtwoWayListener("ngModelChange", function AcademicResourcesComponent_Conditional_51_Conditional_13_Case_13_Template_input_ngModelChange_14_listener($event) { i0.ɵɵrestoreView(_r21); const ctx_r0 = i0.ɵɵnextContext(3); i0.ɵɵtwoWayBindingSet(ctx_r0.alternativeGradePoint, $event) || (ctx_r0.alternativeGradePoint = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(15, "div", 91)(16, "label")(17, "input", 41);
    i0.ɵɵtwoWayListener("ngModelChange", function AcademicResourcesComponent_Conditional_51_Conditional_13_Case_13_Template_input_ngModelChange_17_listener($event) { i0.ɵɵrestoreView(_r21); const ctx_r0 = i0.ɵɵnextContext(3); i0.ɵɵtwoWayBindingSet(ctx_r0.showAlternativeSubjectCredit, $event) || (ctx_r0.showAlternativeSubjectCredit = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd();
    i0.ɵɵtext(18, " Show Alternative Subject Credit");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(19, "input", 94);
    i0.ɵɵtwoWayListener("ngModelChange", function AcademicResourcesComponent_Conditional_51_Conditional_13_Case_13_Template_input_ngModelChange_19_listener($event) { i0.ɵɵrestoreView(_r21); const ctx_r0 = i0.ɵɵnextContext(3); i0.ɵɵtwoWayBindingSet(ctx_r0.alternativeSubjectCredit, $event) || (ctx_r0.alternativeSubjectCredit = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(20, "label", 95)(21, "input", 41);
    i0.ɵɵtwoWayListener("ngModelChange", function AcademicResourcesComponent_Conditional_51_Conditional_13_Case_13_Template_input_ngModelChange_21_listener($event) { i0.ɵɵrestoreView(_r21); const ctx_r0 = i0.ɵɵnextContext(3); i0.ɵɵtwoWayBindingSet(ctx_r0.hideInternalMarks, $event) || (ctx_r0.hideInternalMarks = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd();
    i0.ɵɵtext(22, " Do Not Show IA Marks");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(23, "label", 95)(24, "input", 41);
    i0.ɵɵtwoWayListener("ngModelChange", function AcademicResourcesComponent_Conditional_51_Conditional_13_Case_13_Template_input_ngModelChange_24_listener($event) { i0.ɵɵrestoreView(_r21); const ctx_r0 = i0.ɵɵnextContext(3); i0.ɵɵtwoWayBindingSet(ctx_r0.hideExternalMarks, $event) || (ctx_r0.hideExternalMarks = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd();
    i0.ɵɵtext(25, " Do Not Show ESE Marks");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(26, "label", 95)(27, "input", 41);
    i0.ɵɵtwoWayListener("ngModelChange", function AcademicResourcesComponent_Conditional_51_Conditional_13_Case_13_Template_input_ngModelChange_27_listener($event) { i0.ɵɵrestoreView(_r21); const ctx_r0 = i0.ɵɵnextContext(3); i0.ɵɵtwoWayBindingSet(ctx_r0.hideMidTermMarks, $event) || (ctx_r0.hideMidTermMarks = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd();
    i0.ɵɵtext(28, " Do Not Show Mid Marks");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(29, "label", 95)(30, "input", 41);
    i0.ɵɵtwoWayListener("ngModelChange", function AcademicResourcesComponent_Conditional_51_Conditional_13_Case_13_Template_input_ngModelChange_30_listener($event) { i0.ɵɵrestoreView(_r21); const ctx_r0 = i0.ɵɵnextContext(3); i0.ɵɵtwoWayBindingSet(ctx_r0.hideTotalMarks, $event) || (ctx_r0.hideTotalMarks = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd();
    i0.ɵɵtext(31, " Do Not Show Total Marks");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(32, "label", 95)(33, "input", 41);
    i0.ɵɵtwoWayListener("ngModelChange", function AcademicResourcesComponent_Conditional_51_Conditional_13_Case_13_Template_input_ngModelChange_33_listener($event) { i0.ɵɵrestoreView(_r21); const ctx_r0 = i0.ɵɵnextContext(3); i0.ɵɵtwoWayBindingSet(ctx_r0.hideExternalMarksToStudent, $event) || (ctx_r0.hideExternalMarksToStudent = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd();
    i0.ɵɵtext(34, " Do Not Show ESE Marks To Student");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(35, "label", 95)(36, "input", 41);
    i0.ɵɵtwoWayListener("ngModelChange", function AcademicResourcesComponent_Conditional_51_Conditional_13_Case_13_Template_input_ngModelChange_36_listener($event) { i0.ɵɵrestoreView(_r21); const ctx_r0 = i0.ɵɵnextContext(3); i0.ɵɵtwoWayBindingSet(ctx_r0.hideTotalMarksToStudent, $event) || (ctx_r0.hideTotalMarksToStudent = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd();
    i0.ɵɵtext(37, " Do Not Show Total Marks To Student");
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(7);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r0.showAlternativeGrade);
    i0.ɵɵadvance(2);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r0.alternativeGrade);
    i0.ɵɵproperty("disabled", !ctx_r0.showAlternativeGrade);
    i0.ɵɵadvance(3);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r0.showAlternativeGradePoint);
    i0.ɵɵadvance(2);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r0.alternativeGradePoint);
    i0.ɵɵproperty("disabled", !ctx_r0.showAlternativeGradePoint);
    i0.ɵɵadvance(3);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r0.showAlternativeSubjectCredit);
    i0.ɵɵadvance(2);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r0.alternativeSubjectCredit);
    i0.ɵɵproperty("disabled", !ctx_r0.showAlternativeSubjectCredit);
    i0.ɵɵadvance(2);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r0.hideInternalMarks);
    i0.ɵɵadvance(3);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r0.hideExternalMarks);
    i0.ɵɵadvance(3);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r0.hideMidTermMarks);
    i0.ɵɵadvance(3);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r0.hideTotalMarks);
    i0.ɵɵadvance(3);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r0.hideExternalMarksToStudent);
    i0.ɵɵadvance(3);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r0.hideTotalMarksToStudent);
} }
function AcademicResourcesComponent_Conditional_51_Conditional_13_Case_14_Conditional_33_For_2_Template(rf, ctx) { if (rf & 1) {
    const _r23 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "section", 106)(1, "h4");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "div")(4, "label")(5, "span");
    i0.ɵɵtext(6, "Max Marks");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "input", 82);
    i0.ɵɵtwoWayListener("ngModelChange", function AcademicResourcesComponent_Conditional_51_Conditional_13_Case_14_Conditional_33_For_2_Template_input_ngModelChange_7_listener($event) { const part_r24 = i0.ɵɵrestoreView(_r23).$implicit; i0.ɵɵtwoWayBindingSet(part_r24.maxMarks, $event) || (part_r24.maxMarks = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(8, "div", 84)(9, "label", 85)(10, "input", 41);
    i0.ɵɵtwoWayListener("ngModelChange", function AcademicResourcesComponent_Conditional_51_Conditional_13_Case_14_Conditional_33_For_2_Template_input_ngModelChange_10_listener($event) { const part_r24 = i0.ɵɵrestoreView(_r23).$implicit; i0.ɵɵtwoWayBindingSet(part_r24.passMarksEnabled, $event) || (part_r24.passMarksEnabled = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(11, "span")(12, "strong");
    i0.ɵɵtext(13, "Pass Marks");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(14, "input", 86);
    i0.ɵɵtwoWayListener("ngModelChange", function AcademicResourcesComponent_Conditional_51_Conditional_13_Case_14_Conditional_33_For_2_Template_input_ngModelChange_14_listener($event) { const part_r24 = i0.ɵɵrestoreView(_r23).$implicit; i0.ɵɵtwoWayBindingSet(part_r24.passMarks, $event) || (part_r24.passMarks = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd()()()();
} if (rf & 2) {
    const part_r24 = ctx.$implicit;
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(part_r24.label);
    i0.ɵɵadvance(5);
    i0.ɵɵtwoWayProperty("ngModel", part_r24.maxMarks);
    i0.ɵɵadvance(3);
    i0.ɵɵtwoWayProperty("ngModel", part_r24.passMarksEnabled);
    i0.ɵɵadvance(4);
    i0.ɵɵtwoWayProperty("ngModel", part_r24.passMarks);
    i0.ɵɵproperty("disabled", !part_r24.passMarksEnabled);
} }
function AcademicResourcesComponent_Conditional_51_Conditional_13_Case_14_Conditional_33_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 104);
    i0.ɵɵrepeaterCreate(1, AcademicResourcesComponent_Conditional_51_Conditional_13_Case_14_Conditional_33_For_2_Template, 15, 5, "section", 106, _forTrack1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(4);
    i0.ɵɵadvance();
    i0.ɵɵrepeater(ctx_r0.activeMarkSplits());
} }
function AcademicResourcesComponent_Conditional_51_Conditional_13_Case_14_Conditional_34_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 105);
    i0.ɵɵtext(1, "Choose a split to configure its marks components.");
    i0.ɵɵelementEnd();
} }
function AcademicResourcesComponent_Conditional_51_Conditional_13_Case_14_Conditional_35_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 3);
    i0.ɵɵtext(1, " Pass marks must fit within their component, and the split total cannot exceed Max. Marks. ");
    i0.ɵɵelementEnd();
} }
function AcademicResourcesComponent_Conditional_51_Conditional_13_Case_14_Template(rf, ctx) { if (rf & 1) {
    const _r22 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "fieldset", 63)(1, "legend");
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(2, "svg", 96);
    i0.ɵɵtext(3, " Subject Split");
    i0.ɵɵelementEnd();
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(4, "div", 66)(5, "label")(6, "span");
    i0.ɵɵtext(7, "Split");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "select", 21);
    i0.ɵɵtwoWayListener("ngModelChange", function AcademicResourcesComponent_Conditional_51_Conditional_13_Case_14_Template_select_ngModelChange_8_listener($event) { i0.ɵɵrestoreView(_r22); const ctx_r0 = i0.ɵɵnextContext(3); i0.ɵɵtwoWayBindingSet(ctx_r0.splitType, $event) || (ctx_r0.splitType = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementStart(9, "option", 67);
    i0.ɵɵtext(10, "Select split");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(11, "option", 97);
    i0.ɵɵtext(12, "INT / EXT");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(13, "option", 98);
    i0.ɵɵtext(14, "INT / EXT / MidTerm");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(15, "option", 99);
    i0.ɵɵtext(16, "INT / EXT / Practical");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(17, "option", 100);
    i0.ɵɵtext(18, " INT / EXT / MidTerm / Practical ");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(19, "label")(20, "span");
    i0.ɵɵtext(21, "Category");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(22, "select", 21);
    i0.ɵɵtwoWayListener("ngModelChange", function AcademicResourcesComponent_Conditional_51_Conditional_13_Case_14_Template_select_ngModelChange_22_listener($event) { i0.ɵɵrestoreView(_r22); const ctx_r0 = i0.ɵɵnextContext(3); i0.ɵɵtwoWayBindingSet(ctx_r0.splitCategory, $event) || (ctx_r0.splitCategory = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementStart(23, "option", 67);
    i0.ɵɵtext(24, "Select category");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(25, "option", 101);
    i0.ɵɵtext(26, "Regular");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(27, "option", 74);
    i0.ɵɵtext(28, "Audit");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(29, "option", 102);
    i0.ɵɵtext(30, "Qualifying");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(31, "option", 103);
    i0.ɵɵtext(32, "Non-credit");
    i0.ɵɵelementEnd()()()();
    i0.ɵɵconditionalCreate(33, AcademicResourcesComponent_Conditional_51_Conditional_13_Case_14_Conditional_33_Template, 3, 0, "div", 104)(34, AcademicResourcesComponent_Conditional_51_Conditional_13_Case_14_Conditional_34_Template, 2, 0, "p", 105);
    i0.ɵɵconditionalCreate(35, AcademicResourcesComponent_Conditional_51_Conditional_13_Case_14_Conditional_35_Template, 2, 0, "div", 3);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(8);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r0.splitType);
    i0.ɵɵadvance(14);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r0.splitCategory);
    i0.ɵɵadvance(11);
    i0.ɵɵconditional(ctx_r0.activeMarkSplits().length ? 33 : 34);
    i0.ɵɵadvance(2);
    i0.ɵɵconditional(!ctx_r0.subjectMarksValid() ? 35 : -1);
} }
function AcademicResourcesComponent_Conditional_51_Conditional_13_Template(rf, ctx) { if (rf & 1) {
    const _r11 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 57)(1, "erp-form-section-navigator", 58);
    i0.ɵɵlistener("sectionSelected", function AcademicResourcesComponent_Conditional_51_Conditional_13_Template_erp_form_section_navigator_sectionSelected_1_listener($event) { i0.ɵɵrestoreView(_r11); const ctx_r0 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r0.subjectStep.set($event)); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(2, "main", 59)(3, "button", 60);
    i0.ɵɵlistener("click", function AcademicResourcesComponent_Conditional_51_Conditional_13_Template_button_click_3_listener() { i0.ɵɵrestoreView(_r11); const ctx_r0 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r0.mobileNavigatorOpen.set(true)); });
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(4, "svg", 61);
    i0.ɵɵtext(5, " Subject sections ");
    i0.ɵɵelementEnd();
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(6, "div", 62)(7, "span");
    i0.ɵɵtext(8);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(9, "h3");
    i0.ɵɵtext(10);
    i0.ɵɵelementEnd()();
    i0.ɵɵconditionalCreate(11, AcademicResourcesComponent_Conditional_51_Conditional_13_Case_11_Template, 61, 11, "fieldset", 63)(12, AcademicResourcesComponent_Conditional_51_Conditional_13_Case_12_Template, 127, 22, "fieldset", 63)(13, AcademicResourcesComponent_Conditional_51_Conditional_13_Case_13_Template, 38, 15, "fieldset", 63)(14, AcademicResourcesComponent_Conditional_51_Conditional_13_Case_14_Template, 36, 4, "fieldset", 63);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(15, "erp-form-action-bar", 64);
    i0.ɵɵlistener("back", function AcademicResourcesComponent_Conditional_51_Conditional_13_Template_erp_form_action_bar_back_15_listener() { i0.ɵɵrestoreView(_r11); const ctx_r0 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r0.subjectStep.update(v => v - 1)); })("primary", function AcademicResourcesComponent_Conditional_51_Conditional_13_Template_erp_form_action_bar_primary_15_listener() { i0.ɵɵrestoreView(_r11); const ctx_r0 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r0.nextSubjectStep()); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    let tmp_7_0;
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵproperty("items", ctx_r0.subjectSections())("completedCount", ctx_r0.subjectStep())("totalCount", ctx_r0.subjectSections().length);
    i0.ɵɵadvance(7);
    i0.ɵɵtextInterpolate1("Step ", ctx_r0.subjectStep() + 1, " of 4");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r0.subjectSections()[ctx_r0.subjectStep()].title);
    i0.ɵɵadvance();
    i0.ɵɵconditional((tmp_7_0 = ctx_r0.subjectStep()) === 0 ? 11 : tmp_7_0 === 1 ? 12 : tmp_7_0 === 2 ? 13 : tmp_7_0 === 3 ? 14 : -1);
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("showBack", ctx_r0.subjectStep() > 0)("showSaveDraft", false)("saving", ctx_r0.saving())("primaryDisabled", ctx_r0.subjectStep() === 3 && !ctx_r0.formValid())("primaryLabel", ctx_r0.subjectStep() === 3 ? ctx_r0.editingId() ? "Save changes" : "Create subject" : "Continue");
} }
function AcademicResourcesComponent_Conditional_51_Conditional_14_Conditional_1_For_29_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 22);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r27 = ctx.$implicit;
    i0.ɵɵproperty("value", item_r27._id);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(item_r27.name);
} }
function AcademicResourcesComponent_Conditional_51_Conditional_14_Conditional_1_For_37_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 22);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r28 = ctx.$implicit;
    i0.ɵɵproperty("value", item_r28._id);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(item_r28.name);
} }
function AcademicResourcesComponent_Conditional_51_Conditional_14_Conditional_1_For_58_Template(rf, ctx) { if (rf & 1) {
    const _r29 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 128);
    i0.ɵɵlistener("click", function AcademicResourcesComponent_Conditional_51_Conditional_14_Conditional_1_For_58_Template_button_click_0_listener() { const day_r30 = i0.ɵɵrestoreView(_r29).$implicit; const ctx_r0 = i0.ɵɵnextContext(4); return i0.ɵɵresetView(ctx_r0.toggleDay(day_r30)); });
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const day_r30 = ctx.$implicit;
    const ctx_r0 = i0.ɵɵnextContext(4);
    i0.ɵɵclassProp("is-selected", ctx_r0.availableDays.includes(day_r30));
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", day_r30, " ");
} }
function AcademicResourcesComponent_Conditional_51_Conditional_14_Conditional_1_Template(rf, ctx) { if (rf & 1) {
    const _r26 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "fieldset", 63)(1, "legend");
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(2, "svg", 110);
    i0.ɵɵtext(3, " Faculty identity");
    i0.ɵɵelementEnd();
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(4, "div", 66)(5, "label")(6, "span");
    i0.ɵɵtext(7, "Name *");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "input", 111);
    i0.ɵɵtwoWayListener("ngModelChange", function AcademicResourcesComponent_Conditional_51_Conditional_14_Conditional_1_Template_input_ngModelChange_8_listener($event) { i0.ɵɵrestoreView(_r26); const ctx_r0 = i0.ɵɵnextContext(3); i0.ɵɵtwoWayBindingSet(ctx_r0.name, $event) || (ctx_r0.name = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(9, "label")(10, "span");
    i0.ɵɵtext(11, "Code *");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(12, "input", 112);
    i0.ɵɵtwoWayListener("ngModelChange", function AcademicResourcesComponent_Conditional_51_Conditional_14_Conditional_1_Template_input_ngModelChange_12_listener($event) { i0.ɵɵrestoreView(_r26); const ctx_r0 = i0.ɵɵnextContext(3); i0.ɵɵtwoWayBindingSet(ctx_r0.code, $event) || (ctx_r0.code = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(13, "label", 113)(14, "span");
    i0.ɵɵtext(15, "Email *");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(16, "input", 114);
    i0.ɵɵtwoWayListener("ngModelChange", function AcademicResourcesComponent_Conditional_51_Conditional_14_Conditional_1_Template_input_ngModelChange_16_listener($event) { i0.ɵɵrestoreView(_r26); const ctx_r0 = i0.ɵɵnextContext(3); i0.ɵɵtwoWayBindingSet(ctx_r0.email, $event) || (ctx_r0.email = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd()()()();
    i0.ɵɵelementStart(17, "fieldset", 63)(18, "legend");
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(19, "svg", 65);
    i0.ɵɵtext(20, " Institution");
    i0.ɵɵelementEnd();
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(21, "div", 66)(22, "label")(23, "span");
    i0.ɵɵtext(24, "University *");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(25, "select", 21);
    i0.ɵɵtwoWayListener("ngModelChange", function AcademicResourcesComponent_Conditional_51_Conditional_14_Conditional_1_Template_select_ngModelChange_25_listener($event) { i0.ɵɵrestoreView(_r26); const ctx_r0 = i0.ɵɵnextContext(3); i0.ɵɵtwoWayBindingSet(ctx_r0.universityId, $event) || (ctx_r0.universityId = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵlistener("ngModelChange", function AcademicResourcesComponent_Conditional_51_Conditional_14_Conditional_1_Template_select_ngModelChange_25_listener() { i0.ɵɵrestoreView(_r26); const ctx_r0 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r0.collegeId = ""); });
    i0.ɵɵelementStart(26, "option", 67);
    i0.ɵɵtext(27, "Select university");
    i0.ɵɵelementEnd();
    i0.ɵɵrepeaterCreate(28, AcademicResourcesComponent_Conditional_51_Conditional_14_Conditional_1_For_29_Template, 2, 2, "option", 22, _forTrack0);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(30, "label")(31, "span");
    i0.ɵɵtext(32, "College *");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(33, "select", 21);
    i0.ɵɵtwoWayListener("ngModelChange", function AcademicResourcesComponent_Conditional_51_Conditional_14_Conditional_1_Template_select_ngModelChange_33_listener($event) { i0.ɵɵrestoreView(_r26); const ctx_r0 = i0.ɵɵnextContext(3); i0.ɵɵtwoWayBindingSet(ctx_r0.collegeId, $event) || (ctx_r0.collegeId = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementStart(34, "option", 67);
    i0.ɵɵtext(35, "Select college");
    i0.ɵɵelementEnd();
    i0.ɵɵrepeaterCreate(36, AcademicResourcesComponent_Conditional_51_Conditional_14_Conditional_1_For_37_Template, 2, 2, "option", 22, _forTrack0);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(38, "div", 115)(39, "span");
    i0.ɵɵtext(40, "Departments *");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(41, "erp-multi-select-dropdown", 116);
    i0.ɵɵlistener("valueChange", function AcademicResourcesComponent_Conditional_51_Conditional_14_Conditional_1_Template_erp_multi_select_dropdown_valueChange_41_listener($event) { i0.ɵɵrestoreView(_r26); const ctx_r0 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r0.departmentIds = $event); });
    i0.ɵɵelementEnd()()()();
    i0.ɵɵelementStart(42, "fieldset", 63)(43, "legend");
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(44, "svg", 117);
    i0.ɵɵtext(45, " Teaching capability");
    i0.ɵɵelementEnd();
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(46, "div", 118)(47, "span");
    i0.ɵɵtext(48, "Subjects");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(49, "erp-multi-select-dropdown", 119);
    i0.ɵɵlistener("valueChange", function AcademicResourcesComponent_Conditional_51_Conditional_14_Conditional_1_Template_erp_multi_select_dropdown_valueChange_49_listener($event) { i0.ɵɵrestoreView(_r26); const ctx_r0 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r0.subjectIds = $event); });
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(50, "fieldset", 63)(51, "legend");
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(52, "svg", 120);
    i0.ɵɵtext(53, " Availability & workload");
    i0.ɵɵelementEnd();
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(54, "span", 121);
    i0.ɵɵtext(55, "Available days");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(56, "div", 122);
    i0.ɵɵrepeaterCreate(57, AcademicResourcesComponent_Conditional_51_Conditional_14_Conditional_1_For_58_Template, 2, 3, "button", 123, i0.ɵɵrepeaterTrackByIdentity);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(59, "label")(60, "span");
    i0.ɵɵtext(61, "Weekly workload limit");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(62, "div", 124)(63, "input", 125);
    i0.ɵɵtwoWayListener("ngModelChange", function AcademicResourcesComponent_Conditional_51_Conditional_14_Conditional_1_Template_input_ngModelChange_63_listener($event) { i0.ɵɵrestoreView(_r26); const ctx_r0 = i0.ɵɵnextContext(3); i0.ɵɵtwoWayBindingSet(ctx_r0.weeklyLimit, $event) || (ctx_r0.weeklyLimit = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(64, "span");
    i0.ɵɵtext(65, "hours");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(66, "section", 126);
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(67, "svg", 127);
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(68, "span")(69, "small");
    i0.ɵɵtext(70, "Weekly capacity");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(71, "strong");
    i0.ɵɵtext(72);
    i0.ɵɵelementEnd()()()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(8);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r0.name);
    i0.ɵɵadvance(4);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r0.code);
    i0.ɵɵadvance(4);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r0.email);
    i0.ɵɵadvance(9);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r0.universityId);
    i0.ɵɵadvance(3);
    i0.ɵɵrepeater(ctx_r0.master("university"));
    i0.ɵɵadvance(5);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r0.collegeId);
    i0.ɵɵadvance(3);
    i0.ɵɵrepeater(ctx_r0.scopedMaster("college", i0.ɵɵpureFunction1(11, _c1, ctx_r0.universityId)));
    i0.ɵɵadvance(5);
    i0.ɵɵproperty("options", ctx_r0.options(ctx_r0.master("department")))("value", ctx_r0.departmentIds);
    i0.ɵɵadvance(8);
    i0.ɵɵproperty("options", ctx_r0.options(ctx_r0.subjects()))("value", ctx_r0.subjectIds);
    i0.ɵɵadvance(8);
    i0.ɵɵrepeater(i0.ɵɵpureFunction0(13, _c2));
    i0.ɵɵadvance(6);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r0.weeklyLimit);
    i0.ɵɵadvance(9);
    i0.ɵɵtextInterpolate1("", ctx_r0.weeklyLimit, " hours available");
} }
function AcademicResourcesComponent_Conditional_51_Conditional_14_Conditional_2_For_12_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 22);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r32 = ctx.$implicit;
    i0.ɵɵproperty("value", item_r32._id);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(item_r32.name);
} }
function AcademicResourcesComponent_Conditional_51_Conditional_14_Conditional_2_For_20_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 22);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r33 = ctx.$implicit;
    i0.ɵɵproperty("value", item_r33._id);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(item_r33.name);
} }
function AcademicResourcesComponent_Conditional_51_Conditional_14_Conditional_2_Template(rf, ctx) { if (rf & 1) {
    const _r31 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "fieldset", 63)(1, "legend");
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(2, "svg", 65);
    i0.ɵɵtext(3, " Institution");
    i0.ɵɵelementEnd();
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(4, "div", 66)(5, "label")(6, "span");
    i0.ɵɵtext(7, "University *");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "select", 21);
    i0.ɵɵtwoWayListener("ngModelChange", function AcademicResourcesComponent_Conditional_51_Conditional_14_Conditional_2_Template_select_ngModelChange_8_listener($event) { i0.ɵɵrestoreView(_r31); const ctx_r0 = i0.ɵɵnextContext(3); i0.ɵɵtwoWayBindingSet(ctx_r0.universityId, $event) || (ctx_r0.universityId = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵlistener("ngModelChange", function AcademicResourcesComponent_Conditional_51_Conditional_14_Conditional_2_Template_select_ngModelChange_8_listener() { i0.ɵɵrestoreView(_r31); const ctx_r0 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r0.collegeId = ""); });
    i0.ɵɵelementStart(9, "option", 67);
    i0.ɵɵtext(10, "Select university");
    i0.ɵɵelementEnd();
    i0.ɵɵrepeaterCreate(11, AcademicResourcesComponent_Conditional_51_Conditional_14_Conditional_2_For_12_Template, 2, 2, "option", 22, _forTrack0);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(13, "label")(14, "span");
    i0.ɵɵtext(15, "College *");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(16, "select", 21);
    i0.ɵɵtwoWayListener("ngModelChange", function AcademicResourcesComponent_Conditional_51_Conditional_14_Conditional_2_Template_select_ngModelChange_16_listener($event) { i0.ɵɵrestoreView(_r31); const ctx_r0 = i0.ɵɵnextContext(3); i0.ɵɵtwoWayBindingSet(ctx_r0.collegeId, $event) || (ctx_r0.collegeId = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementStart(17, "option", 67);
    i0.ɵɵtext(18, "Select college");
    i0.ɵɵelementEnd();
    i0.ɵɵrepeaterCreate(19, AcademicResourcesComponent_Conditional_51_Conditional_14_Conditional_2_For_20_Template, 2, 2, "option", 22, _forTrack0);
    i0.ɵɵelementEnd()()()();
    i0.ɵɵelementStart(21, "fieldset", 63)(22, "legend");
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(23, "svg", 69);
    i0.ɵɵtext(24, " Space identity");
    i0.ɵɵelementEnd();
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(25, "div", 66)(26, "label")(27, "span");
    i0.ɵɵtext(28, "Name *");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(29, "input", 129);
    i0.ɵɵtwoWayListener("ngModelChange", function AcademicResourcesComponent_Conditional_51_Conditional_14_Conditional_2_Template_input_ngModelChange_29_listener($event) { i0.ɵɵrestoreView(_r31); const ctx_r0 = i0.ɵɵnextContext(3); i0.ɵɵtwoWayBindingSet(ctx_r0.name, $event) || (ctx_r0.name = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(30, "label")(31, "span");
    i0.ɵɵtext(32, "Code *");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(33, "input", 130);
    i0.ɵɵtwoWayListener("ngModelChange", function AcademicResourcesComponent_Conditional_51_Conditional_14_Conditional_2_Template_input_ngModelChange_33_listener($event) { i0.ɵɵrestoreView(_r31); const ctx_r0 = i0.ɵɵnextContext(3); i0.ɵɵtwoWayBindingSet(ctx_r0.code, $event) || (ctx_r0.code = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(34, "label", 113)(35, "span");
    i0.ɵɵtext(36, "Room type");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(37, "select", 21);
    i0.ɵɵtwoWayListener("ngModelChange", function AcademicResourcesComponent_Conditional_51_Conditional_14_Conditional_2_Template_select_ngModelChange_37_listener($event) { i0.ɵɵrestoreView(_r31); const ctx_r0 = i0.ɵɵnextContext(3); i0.ɵɵtwoWayBindingSet(ctx_r0.roomType, $event) || (ctx_r0.roomType = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementStart(38, "option", 131);
    i0.ɵɵtext(39, "Classroom");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(40, "option", 132);
    i0.ɵɵtext(41, "Lab");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(42, "option", 133);
    i0.ɵɵtext(43, "Auditorium");
    i0.ɵɵelementEnd()()()()();
    i0.ɵɵelementStart(44, "fieldset", 63)(45, "legend");
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(46, "svg", 134);
    i0.ɵɵtext(47, " Location");
    i0.ɵɵelementEnd();
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(48, "div", 66)(49, "label")(50, "span");
    i0.ɵɵtext(51, "Building");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(52, "input", 135);
    i0.ɵɵtwoWayListener("ngModelChange", function AcademicResourcesComponent_Conditional_51_Conditional_14_Conditional_2_Template_input_ngModelChange_52_listener($event) { i0.ɵɵrestoreView(_r31); const ctx_r0 = i0.ɵɵnextContext(3); i0.ɵɵtwoWayBindingSet(ctx_r0.building, $event) || (ctx_r0.building = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(53, "label")(54, "span");
    i0.ɵɵtext(55, "Floor");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(56, "input", 136);
    i0.ɵɵtwoWayListener("ngModelChange", function AcademicResourcesComponent_Conditional_51_Conditional_14_Conditional_2_Template_input_ngModelChange_56_listener($event) { i0.ɵɵrestoreView(_r31); const ctx_r0 = i0.ɵɵnextContext(3); i0.ɵɵtwoWayBindingSet(ctx_r0.floor, $event) || (ctx_r0.floor = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd()()()();
    i0.ɵɵelementStart(57, "fieldset", 63)(58, "legend");
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(59, "svg", 110);
    i0.ɵɵtext(60, " Capacity & capability");
    i0.ɵɵelementEnd();
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(61, "div", 66)(62, "label")(63, "span");
    i0.ɵɵtext(64, "Capacity *");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(65, "input", 125);
    i0.ɵɵtwoWayListener("ngModelChange", function AcademicResourcesComponent_Conditional_51_Conditional_14_Conditional_2_Template_input_ngModelChange_65_listener($event) { i0.ɵɵrestoreView(_r31); const ctx_r0 = i0.ɵɵnextContext(3); i0.ɵɵtwoWayBindingSet(ctx_r0.capacity, $event) || (ctx_r0.capacity = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(66, "div", 118)(67, "span");
    i0.ɵɵtext(68, "Supported subjects (optional)");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(69, "erp-multi-select-dropdown", 137);
    i0.ɵɵlistener("valueChange", function AcademicResourcesComponent_Conditional_51_Conditional_14_Conditional_2_Template_erp_multi_select_dropdown_valueChange_69_listener($event) { i0.ɵɵrestoreView(_r31); const ctx_r0 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r0.subjectIds = $event); });
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(70, "section", 126);
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(71, "svg", 138);
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(72, "span")(73, "strong");
    i0.ɵɵtext(74, "Space preview");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(75, "small");
    i0.ɵɵtext(76);
    i0.ɵɵpipe(77, "titlecase");
    i0.ɵɵelementEnd()()()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(8);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r0.universityId);
    i0.ɵɵadvance(3);
    i0.ɵɵrepeater(ctx_r0.master("university"));
    i0.ɵɵadvance(5);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r0.collegeId);
    i0.ɵɵadvance(3);
    i0.ɵɵrepeater(ctx_r0.scopedMaster("college", i0.ɵɵpureFunction1(15, _c1, ctx_r0.universityId)));
    i0.ɵɵadvance(10);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r0.name);
    i0.ɵɵadvance(4);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r0.code);
    i0.ɵɵadvance(4);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r0.roomType);
    i0.ɵɵadvance(15);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r0.building);
    i0.ɵɵadvance(4);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r0.floor);
    i0.ɵɵadvance(9);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r0.capacity);
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("options", ctx_r0.options(ctx_r0.subjects()))("value", ctx_r0.subjectIds);
    i0.ɵɵadvance(7);
    i0.ɵɵtextInterpolate3("", i0.ɵɵpipeBind1(77, 13, ctx_r0.roomType), " \u00B7 Capacity ", ctx_r0.capacity, " \u00B7 ", ctx_r0.subjectIds.length ? ctx_r0.subjectIds.length + " subjects" : "Subjects not restricted");
} }
function AcademicResourcesComponent_Conditional_51_Conditional_14_Template(rf, ctx) { if (rf & 1) {
    const _r25 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 107);
    i0.ɵɵconditionalCreate(1, AcademicResourcesComponent_Conditional_51_Conditional_14_Conditional_1_Template, 73, 14)(2, AcademicResourcesComponent_Conditional_51_Conditional_14_Conditional_2_Template, 78, 17);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "footer", 108)(4, "button", 14);
    i0.ɵɵlistener("click", function AcademicResourcesComponent_Conditional_51_Conditional_14_Template_button_click_4_listener() { i0.ɵɵrestoreView(_r25); const ctx_r0 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r0.closeDrawer()); });
    i0.ɵɵtext(5, " Cancel");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "button", 109);
    i0.ɵɵlistener("click", function AcademicResourcesComponent_Conditional_51_Conditional_14_Template_button_click_6_listener() { i0.ɵɵrestoreView(_r25); const ctx_r0 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r0.save()); });
    i0.ɵɵtext(7);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵconditional(ctx_r0.section() === "faculties" ? 1 : 2);
    i0.ɵɵadvance(5);
    i0.ɵɵproperty("disabled", !ctx_r0.formValid() || ctx_r0.saving());
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r0.saving() ? "Saving\u2026" : ctx_r0.editingId() ? "Save changes" : ctx_r0.section() === "faculties" ? "Add faculty member" : "Add room or lab", " ");
} }
function AcademicResourcesComponent_Conditional_51_Template(rf, ctx) { if (rf & 1) {
    const _r10 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 27)(1, "button", 51);
    i0.ɵɵlistener("click", function AcademicResourcesComponent_Conditional_51_Template_button_click_1_listener() { i0.ɵɵrestoreView(_r10); const ctx_r0 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r0.closeDrawer()); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(2, "aside", 52)(3, "header", 53)(4, "div")(5, "span", 54);
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "h2");
    i0.ɵɵtext(8);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(9, "p");
    i0.ɵɵtext(10);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(11, "button", 55);
    i0.ɵɵlistener("click", function AcademicResourcesComponent_Conditional_51_Template_button_click_11_listener() { i0.ɵɵrestoreView(_r10); const ctx_r0 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r0.closeDrawer()); });
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(12, "svg", 56);
    i0.ɵɵelementEnd()();
    i0.ɵɵconditionalCreate(13, AcademicResourcesComponent_Conditional_51_Conditional_13_Template, 16, 11)(14, AcademicResourcesComponent_Conditional_51_Conditional_14_Template, 8, 3);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵclassProp("erp-subject-drawer", ctx_r0.section() === "subjects");
    i0.ɵɵproperty("cdkTrapFocusAutoCapture", true);
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(ctx_r0.drawerEyebrow());
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate2(" ", ctx_r0.editingId() ? "Edit" : ctx_r0.section() === "subjects" ? "Create" : "Add", " ", ctx_r0.singular(), " ");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r0.drawerDescription());
    i0.ɵɵadvance(3);
    i0.ɵɵconditional(ctx_r0.section() === "subjects" ? 13 : 14);
} }
function apiMessage(error, fallback) {
    if (typeof error === 'object' && error && 'error' in error) {
        const response = error.error;
        if (typeof response?.message === 'string')
            return response.message;
    }
    return fallback;
}
export class AcademicResourcesComponent {
    api = inject(ApiService);
    route = inject(ActivatedRoute);
    document = inject(DOCUMENT);
    section = signal('subjects', ...(ngDevMode ? [{ debugName: "section" }] : /* istanbul ignore next */ []));
    records = signal([], ...(ngDevMode ? [{ debugName: "records" }] : /* istanbul ignore next */ []));
    subjects = signal([], ...(ngDevMode ? [{ debugName: "subjects" }] : /* istanbul ignore next */ []));
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
    showDetailOne = signal(true, ...(ngDevMode ? [{ debugName: "showDetailOne" }] : /* istanbul ignore next */ []));
    showDetailTwo = signal(true, ...(ngDevMode ? [{ debugName: "showDetailTwo" }] : /* istanbul ignore next */ []));
    showStatus = signal(true, ...(ngDevMode ? [{ debugName: "showStatus" }] : /* istanbul ignore next */ []));
    subjectStep = signal(0, ...(ngDevMode ? [{ debugName: "subjectStep" }] : /* istanbul ignore next */ []));
    mobileNavigatorOpen = signal(false, ...(ngDevMode ? [{ debugName: "mobileNavigatorOpen" }] : /* istanbul ignore next */ []));
    pageSizeOptions = ERP_PAGINATION.pageSizeOptions;
    search = '';
    name = '';
    code = '';
    email = '';
    universityId = '';
    collegeId = '';
    departmentIds = [];
    subjectIds = [];
    availableDays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
    weeklyLimit = 40;
    building = '';
    floor = '';
    roomType = 'classroom';
    capacity = 1;
    session = '';
    sessionId = '';
    semester = 0;
    hindiName = '';
    levelId = '';
    courseIds = [];
    branchIds = [];
    markType = '';
    subjectType = '';
    subjectOption = '';
    evaluationType = '';
    credits = 0;
    subjectCounter = 0;
    lectureHours = 0;
    tutorialHours = 0;
    labHours = 0;
    maxMarks = 0;
    passMarks = 0;
    passMarksEnabled = false;
    internalMarks = 0;
    externalMarks = 0;
    midTermMarks = 0;
    isPaper = false;
    isOpenElective = false;
    isFoundation = false;
    isGroupSubject = false;
    allowMidMarksEntry = false;
    allowExternalMarksEntry = false;
    showAlternativeGrade = false;
    showAlternativeGradePoint = false;
    showAlternativeSubjectCredit = false;
    alternativeGrade = '';
    alternativeGradePoint = 0;
    alternativeSubjectCredit = 0;
    hideInternalMarks = false;
    hideExternalMarks = false;
    hideMidTermMarks = false;
    hideTotalMarks = false;
    hideExternalMarksToStudent = false;
    hideTotalMarksToStudent = false;
    splitType = '';
    splitCategory = '';
    markSplits = createMarkSplits();
    semesterOptions = Array.from({ length: 20 }, (_, index) => index + 1);
    rowActions = [
        { id: 'edit', label: 'Edit', icon: 'edit' },
        { id: 'delete', label: 'Delete', icon: 'delete', destructive: true },
    ];
    subjectSections = computed(() => {
        const current = this.subjectStep();
        return [
            ['course', 'Course details', 'Academic mapping'],
            ['subject', 'Subject details', 'Identity, load and permissions'],
            ['visibility', 'Marks visibility', 'Result visibility'],
            ['split', 'Subject split', 'Evaluation components'],
        ].map(([id, title, status], index) => ({
            id,
            index,
            title,
            status,
            state: index < current ? 'complete' : index === current ? 'current' : 'upcoming',
        }));
    }, ...(ngDevMode ? [{ debugName: "subjectSections" }] : /* istanbul ignore next */ []));
    constructor() {
        this.route.data.subscribe((data) => {
            this.section.set(data['section'] || 'subjects');
            this.closeDrawer();
            this.search = '';
            this.page.set(1);
            this.load();
        });
        effect((onCleanup) => {
            if (!this.drawerOpen())
                return;
            const previous = this.document.body.style.overflow;
            this.document.body.style.overflow = 'hidden';
            onCleanup(() => {
                this.document.body.style.overflow = previous;
            });
        });
    }
    title() {
        return { subjects: 'Subjects', faculties: 'Faculty', rooms: 'Rooms and labs' }[this.section()];
    }
    singular() {
        return { subjects: 'subject', faculties: 'faculty member', rooms: 'room or lab' }[this.section()];
    }
    description() {
        return {
            subjects: 'Manage curriculum, teaching load, evaluation and student visibility.',
            faculties: 'Manage teaching scope, subject capability and weekly availability.',
            rooms: 'Manage teaching spaces, capacity and subject requirements.',
        }[this.section()];
    }
    drawerEyebrow() {
        return {
            subjects: 'CURRICULUM CONFIGURATION',
            faculties: 'TEACHING RESOURCE',
            rooms: 'TEACHING SPACE',
        }[this.section()];
    }
    drawerDescription() {
        return {
            subjects: 'Configure curriculum, teaching load, marks and visibility.',
            faculties: 'Define academic scope, subjects and weekly availability.',
            rooms: 'Define location, capacity and supported subjects.',
        }[this.section()];
    }
    emptyIllustration() {
        if (this.search || this.statusFilter() !== 'all')
            return 'noResults';
        return { subjects: 'dataConfiguration', faculties: 'addStudent', rooms: 'roomUnavailable' }[this.section()];
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
                this.subjects.set(bootstrap.subjects);
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
    options(items) {
        return items.map((item) => ({
            value: item._id,
            label: item.code ? `${item.code} · ${item.name}` : item.name,
        }));
    }
    label(type, id) {
        return this.master(type).find((item) => item._id === id)?.name || '';
    }
    singleDepartmentId() {
        return this.departmentIds[0] || '';
    }
    singleCourseId() {
        return this.courseIds[0] || '';
    }
    departmentOptions() {
        return this.scopedMaster('department', this.collegeId ? [this.collegeId] : []);
    }
    levelOptions() {
        return this.scopedMaster('level', this.singleDepartmentId() ? [this.singleDepartmentId()] : []);
    }
    courseOptions() {
        return this.scopedMaster('course', this.levelId ? [this.levelId] : []);
    }
    selectUniversity(value) {
        this.universityId = value;
        this.collegeId = '';
        this.selectDepartment('');
    }
    selectCollege(value) {
        this.collegeId = value;
        this.selectDepartment('');
    }
    selectDepartment(value) {
        this.departmentIds = value ? [value] : [];
        this.levelId = '';
        this.courseIds = [];
    }
    selectLevel(value) {
        this.levelId = value;
        this.courseIds = [];
    }
    activeMarkSplits() {
        const keys = {
            '': [],
            internal_external: ['internal', 'external'],
            internal_external_midterm: ['internal', 'external', 'midTerm'],
            internal_external_practical: ['internal', 'external', 'practical', 'internalPractical'],
            internal_external_midterm_practical: [
                'internal',
                'external',
                'midTerm',
                'practical',
                'internalPractical',
            ],
        };
        return keys[this.splitType].map((key) => this.markSplits[key]);
    }
    labels(type, ids) {
        return ids.map((id) => this.label(type, id)).filter(Boolean);
    }
    filteredRecords() {
        const query = this.search.trim().toLowerCase();
        const status = this.statusFilter();
        return this.records().filter((item) => {
            const matchesQuery = !query || JSON.stringify(item).toLowerCase().includes(query);
            const matchesStatus = status === 'all' || (status === 'active' ? item.isActive : !item.isActive);
            return matchesQuery && matchesStatus;
        });
    }
    totalPages() {
        return Math.max(1, Math.ceil(this.filteredRecords().length / this.pageSize()));
    }
    pagedRecords() {
        return this.filteredRecords().slice((this.page() - 1) * this.pageSize(), this.page() * this.pageSize());
    }
    resultRange() {
        const total = this.filteredRecords().length;
        if (!total)
            return 'Showing 0 results';
        const first = (this.page() - 1) * this.pageSize() + 1;
        const last = Math.min(this.page() * this.pageSize(), total);
        return `Showing ${first}–${last} of ${total} ${total === 1 ? 'result' : 'results'}`;
    }
    summary(index) {
        if (index === 0)
            return this.records().length;
        if (this.section() === 'subjects') {
            const subjects = this.records();
            if (index === 1)
                return subjects.filter((item) => item.subjectType === 'theory').length;
            if (index === 2)
                return subjects.filter((item) => ['practical', 'lab'].includes(item.subjectType)).length;
            return subjects.filter((item) => item.subjectOption === 'elective').length;
        }
        if (this.section() === 'faculties') {
            if (index === 1)
                return '40 hrs default';
            return this.records().reduce((total, item) => total + (item.subjectIds?.length || 0), 0);
        }
        const rooms = this.records();
        if (index === 1)
            return rooms.filter((item) => item.roomType === 'classroom').length;
        if (index === 2)
            return rooms.filter((item) => item.roomType === 'lab').length;
        return rooms.reduce((total, item) => total + Number(item.capacity || 0), 0);
    }
    summaryLabels() {
        return {
            subjects: ['Total subjects', 'Theory', 'Practical / lab', 'Electives'],
            faculties: ['Faculty members', 'Weekly limit', 'Subjects assigned'],
            rooms: ['Total spaces', 'Classrooms', 'Labs', 'Total capacity'],
        }[this.section()];
    }
    tableColspan() {
        return (2 + Number(this.showDetailOne()) + Number(this.showDetailTwo()) + Number(this.showStatus()));
    }
    openCreate() {
        this.resetForm();
        this.drawerOpen.set(true);
    }
    closeDrawer() {
        this.drawerOpen.set(false);
        this.mobileNavigatorOpen.set(false);
        this.resetForm();
    }
    handleAction(action, item) {
        if (action === 'edit')
            this.edit(item);
        if (action === 'delete')
            this.remove(item);
    }
    edit(item) {
        this.resetForm();
        this.editingId.set(item._id);
        this.name = item.name;
        this.code = item.code || '';
        const scopedItem = item;
        this.universityId = scopedItem.universityId || '';
        this.collegeId = scopedItem.collegeId || '';
        if (this.section() === 'subjects')
            this.editSubject(item);
        if (this.section() === 'faculties')
            this.editFaculty(item);
        if (this.section() === 'rooms')
            this.editRoom(item);
        this.drawerOpen.set(true);
    }
    editSubject(item) {
        const subject = item;
        this.session = item.academicSession;
        this.sessionId =
            item.academicSessionId ||
                this.master('academic').find((value) => value.name === item.academicSession)?._id ||
                '';
        this.semester = item.semester;
        this.hindiName = item.hindiName || '';
        this.levelId = item.levelId || '';
        this.markType = item.markType || '';
        this.subjectType = item.subjectType || '';
        this.subjectOption = item.subjectOption || '';
        this.evaluationType = item.evaluationType || '';
        this.credits = item.credits;
        this.departmentIds = [...(item.departmentIds || [])];
        this.courseIds = [...(item.courseIds || [])];
        this.branchIds = [...(subject.branchIds || [])];
        this.lectureHours = subject.lectureHours || 0;
        this.tutorialHours = subject.tutorialHours || 0;
        this.labHours = subject.labHours || 0;
        this.maxMarks = subject.maxMarks || 0;
        this.passMarks = subject.passMarks || 0;
        this.passMarksEnabled = this.passMarks > 0;
        this.internalMarks = subject.internalMarks || 0;
        this.externalMarks = subject.externalMarks || 0;
        this.midTermMarks = subject.midTermMarks || 0;
        const flags = subject.flags || {};
        const visibility = subject.visibility || {};
        this.isPaper = Boolean(flags['isPaper']);
        this.isOpenElective = Boolean(flags['isOpenElective']);
        this.isFoundation = Boolean(flags['isFoundation']);
        this.isGroupSubject = Boolean(flags['isGroupSubject']);
        this.allowMidMarksEntry = Boolean(flags['allowMidMarksEntry']);
        this.allowExternalMarksEntry = Boolean(flags['allowExternalMarksEntry']);
        this.showAlternativeGrade = Boolean(visibility['showAlternativeGrade']);
        this.showAlternativeGradePoint = Boolean(visibility['showAlternativeGradePoint']);
        this.showAlternativeSubjectCredit = Boolean(visibility['showAlternativeSubjectCredit']);
        this.alternativeGrade = item.alternativeGrade || '';
        this.alternativeGradePoint = item.alternativeGradePoint || 0;
        this.alternativeSubjectCredit = item.alternativeSubjectCredit || 0;
        this.hideInternalMarks = Boolean(visibility['hideInternalMarks']);
        this.hideExternalMarks = Boolean(visibility['hideExternalMarks']);
        this.hideMidTermMarks = Boolean(visibility['hideMidTermMarks']);
        this.hideTotalMarks = Boolean(visibility['hideTotalMarks']);
        this.hideExternalMarksToStudent = Boolean(visibility['hideExternalMarksToStudent']);
        this.hideTotalMarksToStudent = Boolean(visibility['hideTotalMarksToStudent']);
        this.splitType = item.splitType || '';
        this.splitCategory = item.splitCategory || '';
        this.markSplits = createMarkSplits();
        for (const part of item.markSplits || [])
            this.markSplits[part.key] = { ...part };
        if (!item.markSplits?.length) {
            this.markSplits.internal.maxMarks = subject.internalMarks || 0;
            this.markSplits.external.maxMarks = subject.externalMarks || 0;
            this.markSplits.midTerm.maxMarks = subject.midTermMarks || 0;
        }
    }
    editFaculty(item) {
        this.email = item.email;
        this.weeklyLimit = item.weeklyLimit;
        this.departmentIds = [...(item.departmentIds || [])];
        this.subjectIds = [...(item.subjectIds || [])];
        this.availableDays = [...(item.availableDays || [])];
    }
    editRoom(item) {
        this.building = item.building || '';
        this.floor = item.floor || '';
        this.roomType = item.roomType;
        this.capacity = item.capacity;
        this.subjectIds = [...(item.subjectIds || [])];
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
        if (this.section() === 'subjects')
            return this.subjectMarksValid();
        if (!this.name.trim() || !this.code.trim())
            return false;
        if (!this.universityId || !this.collegeId)
            return false;
        if (this.section() === 'faculties')
            return Boolean(this.email && this.departmentIds.length);
        return this.capacity > 0;
    }
    subjectMarksValid() {
        if (this.passMarksEnabled && this.maxMarks > 0 && this.passMarks > this.maxMarks)
            return false;
        const parts = this.activeMarkSplits();
        if (parts.some((part) => part.passMarksEnabled && part.passMarks > part.maxMarks))
            return false;
        return (this.maxMarks <= 0 ||
            parts.reduce((sum, part) => sum + Number(part.maxMarks || 0), 0) <= this.maxMarks);
    }
    nextSubjectStep() {
        if (this.subjectStep() < this.subjectSections().length - 1)
            this.subjectStep.update((value) => value + 1);
        else
            this.save();
    }
    save() {
        if (!this.formValid())
            return;
        this.saving.set(true);
        const id = this.editingId();
        const request = id
            ? this.api.updateAcademicRecord(this.section(), id, this.body())
            : this.api.createAcademicRecord(this.section(), this.body());
        request.subscribe({
            next: () => {
                this.message.set(`${this.singular()} ${id ? 'updated' : 'added'} successfully.`);
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
        const institution = {
            universityId: this.universityId,
            universityName: this.label('university', this.universityId),
            collegeId: this.collegeId,
            collegeName: this.label('college', this.collegeId),
        };
        if (this.section() === 'faculties')
            return {
                name: this.name.trim(),
                code: this.code.trim(),
                email: this.email,
                ...institution,
                departmentIds: this.departmentIds,
                subjectIds: this.subjectIds,
                weeklyLimit: Number(this.weeklyLimit),
                availableDays: this.availableDays,
                isActive: true,
            };
        if (this.section() === 'rooms')
            return {
                name: this.name.trim(),
                code: this.code.trim(),
                ...institution,
                building: this.building,
                floor: this.floor,
                roomType: this.roomType,
                capacity: Number(this.capacity),
                subjectIds: this.subjectIds,
                isActive: true,
            };
        return {
            name: this.name.trim(),
            hindiName: this.hindiName,
            code: this.code.trim(),
            academicSessionId: this.sessionId,
            academicSession: this.label('academic', this.sessionId) || this.session,
            semester: Number(this.semester),
            ...institution,
            departmentIds: this.departmentIds,
            departmentNames: this.labels('department', this.departmentIds),
            courseIds: this.courseIds,
            courseNames: this.labels('course', this.courseIds),
            branchIds: this.branchIds,
            branchNames: this.labels('branch', this.branchIds),
            levelId: this.levelId,
            levelName: this.label('level', this.levelId),
            markType: this.markType,
            subjectType: this.subjectType,
            subjectOption: this.subjectOption,
            evaluationType: this.evaluationType,
            credits: Number(this.credits),
            subjectCounter: Number(this.subjectCounter),
            lectureHours: Number(this.lectureHours),
            tutorialHours: Number(this.tutorialHours),
            labHours: Number(this.labHours),
            maxMarks: Number(this.maxMarks),
            passMarks: this.passMarksEnabled ? Number(this.passMarks) : 0,
            internalMarks: Number(this.markSplits.internal.maxMarks),
            externalMarks: Number(this.markSplits.external.maxMarks),
            midTermMarks: Number(this.markSplits.midTerm.maxMarks),
            alternativeGrade: this.showAlternativeGrade ? this.alternativeGrade.trim() : '',
            alternativeGradePoint: this.showAlternativeGradePoint
                ? Number(this.alternativeGradePoint)
                : 0,
            alternativeSubjectCredit: this.showAlternativeSubjectCredit
                ? Number(this.alternativeSubjectCredit)
                : 0,
            splitType: this.splitType,
            splitCategory: this.splitCategory,
            markSplits: this.activeMarkSplits().map((part) => ({
                ...part,
                maxMarks: Number(part.maxMarks),
                passMarks: part.passMarksEnabled ? Number(part.passMarks) : 0,
            })),
            flags: {
                isPaper: this.isPaper,
                isOpenElective: this.isOpenElective,
                isFoundation: this.isFoundation,
                isGroupSubject: this.isGroupSubject,
                allowMidMarksEntry: this.allowMidMarksEntry,
                allowExternalMarksEntry: this.allowExternalMarksEntry,
            },
            visibility: {
                showAlternativeGrade: this.showAlternativeGrade,
                showAlternativeGradePoint: this.showAlternativeGradePoint,
                showAlternativeSubjectCredit: this.showAlternativeSubjectCredit,
                hideInternalMarks: this.hideInternalMarks,
                hideExternalMarks: this.hideExternalMarks,
                hideMidTermMarks: this.hideMidTermMarks,
                hideTotalMarks: this.hideTotalMarks,
                hideExternalMarksToStudent: this.hideExternalMarksToStudent,
                hideTotalMarksToStudent: this.hideTotalMarksToStudent,
            },
            isActive: true,
        };
    }
    toggleDay(day) {
        this.availableDays = this.availableDays.includes(day)
            ? this.availableDays.filter((item) => item !== day)
            : [...this.availableDays, day];
    }
    resetForm() {
        this.editingId.set(null);
        this.subjectStep.set(0);
        this.name = '';
        this.code = '';
        this.email = '';
        this.universityId = '';
        this.collegeId = '';
        this.departmentIds = [];
        this.subjectIds = [];
        this.availableDays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
        this.weeklyLimit = 40;
        this.building = '';
        this.floor = '';
        this.roomType = 'classroom';
        this.capacity = 1;
        this.session = '';
        this.sessionId = '';
        this.semester = 0;
        this.hindiName = '';
        this.levelId = '';
        this.courseIds = [];
        this.branchIds = [];
        this.markType = '';
        this.subjectType = '';
        this.subjectOption = '';
        this.evaluationType = '';
        this.credits = this.subjectCounter = this.lectureHours = this.tutorialHours = this.labHours = 0;
        this.maxMarks =
            this.passMarks =
                this.internalMarks =
                    this.externalMarks =
                        this.midTermMarks =
                            0;
        this.isPaper = this.isOpenElective = this.isFoundation = this.isGroupSubject = false;
        this.allowMidMarksEntry = this.allowExternalMarksEntry = false;
        this.showAlternativeGrade = this.showAlternativeGradePoint = false;
        this.showAlternativeSubjectCredit = false;
        this.alternativeGrade = '';
        this.alternativeGradePoint = 0;
        this.alternativeSubjectCredit = 0;
        this.hideInternalMarks =
            this.hideExternalMarks =
                this.hideMidTermMarks =
                    this.hideTotalMarks =
                        false;
        this.hideExternalMarksToStudent = this.hideTotalMarksToStudent = false;
        this.passMarksEnabled = false;
        this.splitType = '';
        this.splitCategory = '';
        this.markSplits = createMarkSplits();
    }
    closeOverlays() {
        if (this.mobileNavigatorOpen())
            this.mobileNavigatorOpen.set(false);
        else if (this.drawerOpen())
            this.closeDrawer();
        this.filterOpen.set(false);
        this.columnsOpen.set(false);
    }
    static ɵfac = function AcademicResourcesComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || AcademicResourcesComponent)(); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: AcademicResourcesComponent, selectors: [["erp-academic-resources"]], hostBindings: function AcademicResourcesComponent_HostBindings(rf, ctx) { if (rf & 1) {
            i0.ɵɵlistener("keydown.escape", function AcademicResourcesComponent_keydown_escape_HostBindingHandler() { return ctx.closeOverlays(); }, i0.ɵɵresolveDocument);
        } }, decls: 53, vars: 27, consts: [["variant", "compact", "layout", "collection", 3, "title", "description"], ["page-actions", "", "type", "button", 1, "erp-button", "erp-button--primary", 3, "click"], ["lucidePlus", "", "size", "18", "aria-hidden", "true"], [1, "erp-alert", "erp-alert--danger"], [1, "erp-alert", "erp-alert--success"], [1, "erp-academic-metric-strip"], [1, "erp-academic-metric"], [1, "erp-card", "erp-table-shell", "erp-academic-directory"], [1, "erp-academic-directory__toolbar"], [1, "erp-search-control"], ["lucideSearch", "", "size", "18", "aria-hidden", "true"], ["type", "search", 3, "ngModelChange", "placeholder", "ngModel"], [1, "erp-academic-directory__tools"], [1, "erp-academic-popover-anchor"], ["type", "button", 1, "erp-button", "erp-button--secondary", 3, "click"], ["lucideFilter", "", "size", "17", "aria-hidden", "true"], [1, "erp-academic-popover"], ["lucideColumns3", "", "size", "17", "aria-hidden", "true"], [1, "erp-academic-popover", "erp-academic-popover--checks"], [1, "erp-table-scroll"], [1, "erp-table-pagination"], [1, "erp-control", 3, "ngModelChange", "ngModel"], [3, "value"], ["type", "button", "aria-label", "Previous page", 1, "erp-icon-button", 3, "click", "disabled"], ["lucideChevronLeft", "", "size", "18"], ["type", "button", "aria-label", "Next page", 1, "erp-icon-button", 3, "click", "disabled"], ["lucideChevronRight", "", "size", "18"], [1, "erp-drawer-layer"], ["heading", "Subject sections", 3, "closed", "sectionSelected", "open", "items", "completedCount", "totalCount"], [1, "erp-academic-metric__icon"], ["lucideBookOpen", "", "size", "21", "aria-hidden", "true"], ["lucideGraduationCap", "", "size", "21", "aria-hidden", "true"], ["lucideFlaskConical", "", "size", "21", "aria-hidden", "true"], ["lucideStar", "", "size", "21", "aria-hidden", "true"], ["lucideUsersRound", "", "size", "21", "aria-hidden", "true"], ["lucideClock3", "", "size", "21", "aria-hidden", "true"], ["lucideClipboardList", "", "size", "21", "aria-hidden", "true"], ["lucideBuilding2", "", "size", "21", "aria-hidden", "true"], ["value", "all"], ["value", "active"], ["value", "inactive"], ["type", "checkbox", 3, "ngModelChange", "ngModel"], [1, "erp-table-shell__actions"], [3, "selected", "items"], [1, "erp-status"], ["aria-hidden", "true"], [1, "erp-empty-panel", "erp-academic-empty"], ["aria-hidden", "true", 1, "erp-spinner"], ["size", "compact", 3, "kind"], ["type", "button", 1, "erp-button", "erp-button--secondary"], ["lucidePlus", "", "size", "17"], ["type", "button", "aria-label", "Close drawer", 1, "erp-drawer-backdrop", 3, "click"], ["cdkTrapFocus", "", "role", "dialog", "aria-modal", "true", 1, "erp-drawer", "erp-academic-drawer", 3, "cdkTrapFocusAutoCapture"], [1, "erp-drawer__header"], [1, "erp-drawer__eyebrow"], ["type", "button", "aria-label", "Close", 1, "erp-icon-button", 3, "click"], ["lucideX", "", "size", "22"], [1, "erp-subject-workflow"], ["heading", "Subject sections", 1, "erp-subject-workflow__navigator", 3, "sectionSelected", "items", "completedCount", "totalCount"], [1, "erp-subject-workflow__content", "erp-drawer__body"], ["type", "button", 1, "erp-button", "erp-button--secondary", "erp-subject-workflow__mobile-sections", 3, "click"], ["lucideClipboardList", "", "size", "17"], [1, "erp-subject-workflow__heading"], [1, "erp-academic-form-section"], ["saveStatus", "", 3, "back", "primary", "showBack", "showSaveDraft", "saving", "primaryDisabled", "primaryLabel"], ["lucideBuilding2", "", "size", "20"], [1, "erp-academic-form-grid"], ["value", ""], [3, "ngValue"], ["lucideFileText", "", "size", "20"], [1, "erp-academic-form-grid", "erp-academic-form-grid--three"], ["value", "theory"], ["value", "practical"], ["value", "project"], ["value", "audit"], ["value", "required"], ["value", "elective"], ["value", "tutorial"], ["value", "marks"], ["value", "grade"], ["placeholder", "Enter subject name", 1, "erp-control", 3, "ngModelChange", "ngModel"], ["placeholder", "Enter Hindi subject name", 1, "erp-control", 3, "ngModelChange", "ngModel"], ["type", "number", "min", "0", 1, "erp-control", 3, "ngModelChange", "ngModel"], ["placeholder", "Enter subject code", 1, "erp-control", 3, "ngModelChange", "ngModel"], [1, "erp-subject-pass-control"], [1, "erp-academic-check", "erp-academic-check--compact"], ["type", "number", "min", "0", 1, "erp-control", 3, "ngModelChange", "ngModel", "disabled"], [1, "erp-academic-check-grid", "erp-subject-flags"], [1, "erp-academic-check"], ["lucideEye", "", "size", "20"], [1, "erp-subject-visibility-grid"], [1, "erp-subject-visibility-option"], ["placeholder", "Enter alternative grade", 1, "erp-control", 3, "ngModelChange", "ngModel", "disabled"], ["type", "number", "min", "0", "placeholder", "Enter grade point", 1, "erp-control", 3, "ngModelChange", "ngModel", "disabled"], ["type", "number", "min", "0", "placeholder", "Enter subject credit", 1, "erp-control", 3, "ngModelChange", "ngModel", "disabled"], [1, "erp-subject-visibility-check"], ["lucideColumns3", "", "size", "20"], ["value", "internal_external"], ["value", "internal_external_midterm"], ["value", "internal_external_practical"], ["value", "internal_external_midterm_practical"], ["value", "regular"], ["value", "qualifying"], ["value", "non-credit"], [1, "erp-subject-split-grid"], [1, "erp-form-hint"], [1, "erp-subject-split-card"], [1, "erp-drawer__body", "erp-academic-drawer__body"], [1, "erp-drawer__footer"], ["type", "button", 1, "erp-button", "erp-button--primary", 3, "click", "disabled"], ["lucideUsersRound", "", "size", "20"], ["placeholder", "Enter faculty name", 1, "erp-control", 3, "ngModelChange", "ngModel"], ["placeholder", "Enter faculty code", 1, "erp-control", 3, "ngModelChange", "ngModel"], [1, "erp-academic-field--wide"], ["type", "email", "placeholder", "name@university.edu", 1, "erp-control", 3, "ngModelChange", "ngModel"], [1, "erp-field-stack", "erp-academic-field--wide"], ["placeholder", "Select departments", 3, "valueChange", "options", "value"], ["lucideBookOpen", "", "size", "20"], [1, "erp-field-stack"], ["placeholder", "Select subjects", 3, "valueChange", "options", "value"], ["lucideCalendarDays", "", "size", "20"], [1, "erp-academic-field-label"], [1, "erp-academic-weekdays"], ["type", "button", 3, "is-selected"], [1, "erp-academic-unit-control"], ["type", "number", "min", "1", 1, "erp-control", 3, "ngModelChange", "ngModel"], [1, "erp-academic-mapping-preview"], ["lucideClock3", "", "size", "24"], ["type", "button", 3, "click"], ["placeholder", "e.g. Computer Lab 1", 1, "erp-control", 3, "ngModelChange", "ngModel"], ["placeholder", "e.g. LAB-C101", 1, "erp-control", 3, "ngModelChange", "ngModel"], ["value", "classroom"], ["value", "lab"], ["value", "auditorium"], ["lucideMapPin", "", "size", "20"], ["placeholder", "Enter building", 1, "erp-control", 3, "ngModelChange", "ngModel"], ["placeholder", "Enter floor", 1, "erp-control", 3, "ngModelChange", "ngModel"], ["placeholder", "Select supported subjects", 3, "valueChange", "options", "value"], ["lucideBuilding2", "", "size", "24"]], template: function AcademicResourcesComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "erp-admin-page", 0)(1, "button", 1);
            i0.ɵɵlistener("click", function AcademicResourcesComponent_Template_button_click_1_listener() { return ctx.openCreate(); });
            i0.ɵɵnamespaceSVG();
            i0.ɵɵelement(2, "svg", 2);
            i0.ɵɵtext(3);
            i0.ɵɵelementEnd();
            i0.ɵɵconditionalCreate(4, AcademicResourcesComponent_Conditional_4_Template, 2, 1, "div", 3);
            i0.ɵɵconditionalCreate(5, AcademicResourcesComponent_Conditional_5_Template, 2, 1, "div", 4);
            i0.ɵɵnamespaceHTML();
            i0.ɵɵelementStart(6, "section", 5);
            i0.ɵɵrepeaterCreate(7, AcademicResourcesComponent_For_8_Template, 10, 3, "div", 6, i0.ɵɵrepeaterTrackByIdentity);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(9, "section", 7)(10, "div", 8)(11, "label", 9);
            i0.ɵɵnamespaceSVG();
            i0.ɵɵelement(12, "svg", 10);
            i0.ɵɵnamespaceHTML();
            i0.ɵɵelementStart(13, "input", 11);
            i0.ɵɵtwoWayListener("ngModelChange", function AcademicResourcesComponent_Template_input_ngModelChange_13_listener($event) { i0.ɵɵtwoWayBindingSet(ctx.search, $event) || (ctx.search = $event); return $event; });
            i0.ɵɵlistener("ngModelChange", function AcademicResourcesComponent_Template_input_ngModelChange_13_listener() { return ctx.page.set(1); });
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(14, "div", 12)(15, "div", 13)(16, "button", 14);
            i0.ɵɵlistener("click", function AcademicResourcesComponent_Template_button_click_16_listener() { ctx.filterOpen.update(v => !v); return ctx.columnsOpen.set(false); });
            i0.ɵɵnamespaceSVG();
            i0.ɵɵelement(17, "svg", 15);
            i0.ɵɵtext(18, " Filters ");
            i0.ɵɵelementEnd();
            i0.ɵɵconditionalCreate(19, AcademicResourcesComponent_Conditional_19_Template, 11, 1, "div", 16);
            i0.ɵɵelementEnd();
            i0.ɵɵnamespaceHTML();
            i0.ɵɵelementStart(20, "div", 13)(21, "button", 14);
            i0.ɵɵlistener("click", function AcademicResourcesComponent_Template_button_click_21_listener() { ctx.columnsOpen.update(v => !v); return ctx.filterOpen.set(false); });
            i0.ɵɵnamespaceSVG();
            i0.ɵɵelement(22, "svg", 17);
            i0.ɵɵtext(23, " Columns ");
            i0.ɵɵelementEnd();
            i0.ɵɵconditionalCreate(24, AcademicResourcesComponent_Conditional_24_Template, 10, 3, "div", 18);
            i0.ɵɵelementEnd()()();
            i0.ɵɵnamespaceHTML();
            i0.ɵɵelementStart(25, "div", 19)(26, "table")(27, "thead")(28, "tr")(29, "th");
            i0.ɵɵtext(30);
            i0.ɵɵelementEnd();
            i0.ɵɵconditionalCreate(31, AcademicResourcesComponent_Conditional_31_Template, 2, 1, "th");
            i0.ɵɵconditionalCreate(32, AcademicResourcesComponent_Conditional_32_Template, 2, 1, "th");
            i0.ɵɵconditionalCreate(33, AcademicResourcesComponent_Conditional_33_Template, 2, 0, "th");
            i0.ɵɵelementStart(34, "th");
            i0.ɵɵtext(35, "Actions");
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(36, "tbody");
            i0.ɵɵrepeaterCreate(37, AcademicResourcesComponent_For_38_Template, 11, 6, "tr", null, _forTrack0, false, AcademicResourcesComponent_ForEmpty_39_Template, 5, 2, "tr");
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(40, "footer", 20)(41, "span");
            i0.ɵɵtext(42);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(43, "div")(44, "select", 21);
            i0.ɵɵlistener("ngModelChange", function AcademicResourcesComponent_Template_select_ngModelChange_44_listener($event) { ctx.pageSize.set(+$event); return ctx.page.set(1); });
            i0.ɵɵrepeaterCreate(45, AcademicResourcesComponent_For_46_Template, 2, 2, "option", 22, i0.ɵɵrepeaterTrackByIdentity);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(47, "button", 23);
            i0.ɵɵlistener("click", function AcademicResourcesComponent_Template_button_click_47_listener() { return ctx.page.update(v => v - 1); });
            i0.ɵɵnamespaceSVG();
            i0.ɵɵelement(48, "svg", 24);
            i0.ɵɵelementEnd();
            i0.ɵɵnamespaceHTML();
            i0.ɵɵelementStart(49, "button", 25);
            i0.ɵɵlistener("click", function AcademicResourcesComponent_Template_button_click_49_listener() { return ctx.page.update(v => v + 1); });
            i0.ɵɵnamespaceSVG();
            i0.ɵɵelement(50, "svg", 26);
            i0.ɵɵelementEnd()()()()();
            i0.ɵɵconditionalCreate(51, AcademicResourcesComponent_Conditional_51_Template, 15, 8, "div", 27);
            i0.ɵɵnamespaceHTML();
            i0.ɵɵelementStart(52, "erp-mobile-section-navigator-sheet", 28);
            i0.ɵɵlistener("closed", function AcademicResourcesComponent_Template_erp_mobile_section_navigator_sheet_closed_52_listener() { return ctx.mobileNavigatorOpen.set(false); })("sectionSelected", function AcademicResourcesComponent_Template_erp_mobile_section_navigator_sheet_sectionSelected_52_listener($event) { ctx.subjectStep.set($event); return ctx.mobileNavigatorOpen.set(false); });
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵproperty("title", ctx.title())("description", ctx.description());
            i0.ɵɵadvance(3);
            i0.ɵɵtextInterpolate2(" ", ctx.section() === "subjects" ? "Create" : "Add", " ", ctx.singular(), " ");
            i0.ɵɵadvance();
            i0.ɵɵconditional(ctx.error() ? 4 : -1);
            i0.ɵɵadvance();
            i0.ɵɵconditional(ctx.message() ? 5 : -1);
            i0.ɵɵadvance();
            i0.ɵɵclassProp("erp-academic-metric-strip--four", ctx.summaryLabels().length === 4);
            i0.ɵɵattribute("aria-label", ctx.title() + " summary");
            i0.ɵɵadvance();
            i0.ɵɵrepeater(ctx.summaryLabels());
            i0.ɵɵadvance(6);
            i0.ɵɵproperty("placeholder", "Search by " + ctx.singular() + " name or code");
            i0.ɵɵtwoWayProperty("ngModel", ctx.search);
            i0.ɵɵadvance(6);
            i0.ɵɵconditional(ctx.filterOpen() ? 19 : -1);
            i0.ɵɵadvance(5);
            i0.ɵɵconditional(ctx.columnsOpen() ? 24 : -1);
            i0.ɵɵadvance(6);
            i0.ɵɵtextInterpolate1(" ", ctx.section() === "subjects" ? "Subject" : ctx.section() === "faculties" ? "Faculty member" : "Room / code", " ");
            i0.ɵɵadvance();
            i0.ɵɵconditional(ctx.showDetailOne() ? 31 : -1);
            i0.ɵɵadvance();
            i0.ɵɵconditional(ctx.showDetailTwo() ? 32 : -1);
            i0.ɵɵadvance();
            i0.ɵɵconditional(ctx.showStatus() ? 33 : -1);
            i0.ɵɵadvance(4);
            i0.ɵɵrepeater(ctx.pagedRecords());
            i0.ɵɵadvance(5);
            i0.ɵɵtextInterpolate(ctx.resultRange());
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngModel", ctx.pageSize());
            i0.ɵɵadvance();
            i0.ɵɵrepeater(ctx.pageSizeOptions);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("disabled", ctx.page() === 1);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("disabled", ctx.page() === ctx.totalPages());
            i0.ɵɵadvance(2);
            i0.ɵɵconditional(ctx.drawerOpen() ? 51 : -1);
            i0.ɵɵadvance();
            i0.ɵɵproperty("open", ctx.mobileNavigatorOpen())("items", ctx.subjectSections())("completedCount", ctx.subjectStep())("totalCount", ctx.subjectSections().length);
        } }, dependencies: [CdkTrapFocus,
            CommonModule,
            FormsModule, i1.NgSelectOption, i1.ɵNgSelectMultipleOption, i1.DefaultValueAccessor, i1.NumberValueAccessor, i1.CheckboxControlValueAccessor, i1.SelectControlValueAccessor, i1.NgControlStatus, i1.MinValidator, i1.NgModel, AdminIllustrationComponent,
            AdminPageComponent,
            CompactActionMenuComponent,
            FormActionBarComponent,
            FormSectionNavigatorComponent,
            MobileSectionNavigatorSheetComponent,
            MultiSelectDropdownComponent,
            LucideBookOpen,
            LucideBuilding2,
            LucideCalendarDays,
            LucideChevronLeft,
            LucideChevronRight,
            LucideClipboardList,
            LucideClock3,
            LucideColumns3,
            LucideEye,
            LucideFileText,
            LucideFilter,
            LucideFlaskConical,
            LucideGraduationCap,
            LucideMapPin,
            LucidePlus,
            LucideSearch,
            LucideStar,
            LucideUsersRound,
            LucideX, i2.TitleCasePipe], encapsulation: 2, changeDetection: 0 });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AcademicResourcesComponent, [{
        type: Component,
        args: [{ selector: 'erp-academic-resources', imports: [
                    CdkTrapFocus,
                    CommonModule,
                    FormsModule,
                    AdminIllustrationComponent,
                    AdminPageComponent,
                    CompactActionMenuComponent,
                    FormActionBarComponent,
                    FormSectionNavigatorComponent,
                    MobileSectionNavigatorSheetComponent,
                    MultiSelectDropdownComponent,
                    LucideBookOpen,
                    LucideBuilding2,
                    LucideCalendarDays,
                    LucideChevronLeft,
                    LucideChevronRight,
                    LucideClipboardList,
                    LucideClock3,
                    LucideColumns3,
                    LucideEye,
                    LucideFileText,
                    LucideFilter,
                    LucideFlaskConical,
                    LucideGraduationCap,
                    LucideMapPin,
                    LucidePlus,
                    LucideSearch,
                    LucideStar,
                    LucideUsersRound,
                    LucideX,
                ], changeDetection: ChangeDetectionStrategy.OnPush, template: "<erp-admin-page\n  [title]=\"title()\"\n  [description]=\"description()\"\n  variant=\"compact\"\n  layout=\"collection\"\n>\n  <button page-actions class=\"erp-button erp-button--primary\" type=\"button\" (click)=\"openCreate()\">\n    <svg lucidePlus size=\"18\" aria-hidden=\"true\"></svg>\n    {{ section() === 'subjects' ? 'Create' : 'Add' }} {{ singular() }}\n  </button>\n\n  @if (error()) {\n    <div class=\"erp-alert erp-alert--danger\">{{ error() }}</div>\n  }\n  @if (message()) {\n    <div class=\"erp-alert erp-alert--success\">{{ message() }}</div>\n  }\n\n  <section\n    class=\"erp-academic-metric-strip\"\n    [class.erp-academic-metric-strip--four]=\"summaryLabels().length === 4\"\n    [attr.aria-label]=\"title() + ' summary'\"\n  >\n    @for (label of summaryLabels(); track label; let index = $index) {\n      <div class=\"erp-academic-metric\">\n        <span class=\"erp-academic-metric__icon\">\n          @if (section() === 'subjects') {\n            @switch (index) {\n              @case (0) {\n                <svg lucideBookOpen size=\"21\" aria-hidden=\"true\"></svg>\n              }\n              @case (1) {\n                <svg lucideGraduationCap size=\"21\" aria-hidden=\"true\"></svg>\n              }\n              @case (2) {\n                <svg lucideFlaskConical size=\"21\" aria-hidden=\"true\"></svg>\n              }\n              @default {\n                <svg lucideStar size=\"21\" aria-hidden=\"true\"></svg>\n              }\n            }\n          } @else if (section() === 'faculties') {\n            @switch (index) {\n              @case (0) {\n                <svg lucideUsersRound size=\"21\" aria-hidden=\"true\"></svg>\n              }\n              @case (1) {\n                <svg lucideClock3 size=\"21\" aria-hidden=\"true\"></svg>\n              }\n              @default {\n                <svg lucideClipboardList size=\"21\" aria-hidden=\"true\"></svg>\n              }\n            }\n          } @else {\n            @switch (index) {\n              @case (0) {\n                <svg lucideBuilding2 size=\"21\" aria-hidden=\"true\"></svg>\n              }\n              @case (1) {\n                <svg lucideGraduationCap size=\"21\" aria-hidden=\"true\"></svg>\n              }\n              @case (2) {\n                <svg lucideFlaskConical size=\"21\" aria-hidden=\"true\"></svg>\n              }\n              @default {\n                <svg lucideUsersRound size=\"21\" aria-hidden=\"true\"></svg>\n              }\n            }\n          }\n        </span>\n        <span\n          ><small>{{ label }}</small\n          ><strong>{{ summary(index) }}</strong></span\n        >\n      </div>\n    }\n  </section>\n\n  <section class=\"erp-card erp-table-shell erp-academic-directory\">\n    <div class=\"erp-academic-directory__toolbar\">\n      <label class=\"erp-search-control\">\n        <svg lucideSearch size=\"18\" aria-hidden=\"true\"></svg>\n        <input\n          type=\"search\"\n          [placeholder]=\"'Search by ' + singular() + ' name or code'\"\n          [(ngModel)]=\"search\"\n          (ngModelChange)=\"page.set(1)\"\n        />\n      </label>\n      <div class=\"erp-academic-directory__tools\">\n        <div class=\"erp-academic-popover-anchor\">\n          <button\n            class=\"erp-button erp-button--secondary\"\n            type=\"button\"\n            (click)=\"filterOpen.update((v) => !v); columnsOpen.set(false)\"\n          >\n            <svg lucideFilter size=\"17\" aria-hidden=\"true\"></svg> Filters\n          </button>\n          @if (filterOpen()) {\n            <div class=\"erp-academic-popover\">\n              <label\n                ><span>Status</span>\n                <select\n                  class=\"erp-control\"\n                  [ngModel]=\"statusFilter()\"\n                  (ngModelChange)=\"statusFilter.set($event); page.set(1)\"\n                >\n                  <option value=\"all\">All statuses</option>\n                  <option value=\"active\">Active</option>\n                  <option value=\"inactive\">Inactive</option>\n                </select>\n              </label>\n            </div>\n          }\n        </div>\n        <div class=\"erp-academic-popover-anchor\">\n          <button\n            class=\"erp-button erp-button--secondary\"\n            type=\"button\"\n            (click)=\"columnsOpen.update((v) => !v); filterOpen.set(false)\"\n          >\n            <svg lucideColumns3 size=\"17\" aria-hidden=\"true\"></svg> Columns\n          </button>\n          @if (columnsOpen()) {\n            <div class=\"erp-academic-popover erp-academic-popover--checks\">\n              <label\n                ><input\n                  type=\"checkbox\"\n                  [ngModel]=\"showDetailOne()\"\n                  (ngModelChange)=\"showDetailOne.set($event)\"\n                />\n                Detail 1</label\n              >\n              <label\n                ><input\n                  type=\"checkbox\"\n                  [ngModel]=\"showDetailTwo()\"\n                  (ngModelChange)=\"showDetailTwo.set($event)\"\n                />\n                Detail 2</label\n              >\n              <label\n                ><input\n                  type=\"checkbox\"\n                  [ngModel]=\"showStatus()\"\n                  (ngModelChange)=\"showStatus.set($event)\"\n                />\n                Status</label\n              >\n            </div>\n          }\n        </div>\n      </div>\n    </div>\n\n    <div class=\"erp-table-scroll\">\n      <table>\n        <thead>\n          <tr>\n            <th>\n              {{\n                section() === 'subjects'\n                  ? 'Subject'\n                  : section() === 'faculties'\n                    ? 'Faculty member'\n                    : 'Room / code'\n              }}\n            </th>\n            @if (showDetailOne()) {\n              <th>\n                {{\n                  section() === 'subjects'\n                    ? 'Type'\n                    : section() === 'faculties'\n                      ? 'Department'\n                      : 'Type \u00B7 location'\n                }}\n              </th>\n            }\n            @if (showDetailTwo()) {\n              <th>\n                {{\n                  section() === 'subjects'\n                    ? 'Credits / L\u2013T\u2013P'\n                    : section() === 'faculties'\n                      ? 'Subjects \u00B7 availability'\n                      : 'Capacity \u00B7 subjects'\n                }}\n              </th>\n            }\n            @if (showStatus()) {\n              <th>Status</th>\n            }\n            <th>Actions</th>\n          </tr>\n        </thead>\n        <tbody>\n          @for (item of pagedRecords(); track item._id) {\n            <tr>\n              <td>\n                <strong>{{ item.name || 'Unnamed subject' }}</strong\n                ><small>{{ item.code || '\u2014' }}</small>\n              </td>\n              @if (showDetailOne()) {\n                <td>\n                  @if (section() === 'subjects') {\n                    <strong>{{ $any(item).subjectType | titlecase }}</strong\n                    ><small>{{ $any(item).evaluationType | titlecase }}</small>\n                  } @else if (section() === 'faculties') {\n                    <strong>{{\n                      labels('department', $any(item).departmentIds || []).join(', ') || '\u2014'\n                    }}</strong\n                    ><small>{{ $any(item).email }}</small>\n                  } @else {\n                    <strong>{{ $any(item).roomType | titlecase }}</strong\n                    ><small\n                      >{{ $any(item).building || 'Building not set' }} \u00B7\n                      {{ $any(item).floor || 'Floor not set' }}</small\n                    >\n                  }\n                </td>\n              }\n              @if (showDetailTwo()) {\n                <td>\n                  @if (section() === 'subjects') {\n                    <strong>{{ $any(item).credits || 0 }} credits</strong\n                    ><small\n                      >{{ $any(item).lectureHours || 0 }}\u2013{{ $any(item).tutorialHours || 0 }}\u2013{{\n                        $any(item).labHours || 0\n                      }}</small\n                    >\n                  } @else if (section() === 'faculties') {\n                    <strong>{{ $any(item).subjectIds?.length || 0 }} subjects</strong\n                    ><small\n                      >{{ $any(item).availableDays?.length || 0 }} days \u00B7\n                      {{ $any(item).weeklyLimit }} hrs</small\n                    >\n                  } @else {\n                    <strong>{{ $any(item).capacity }} seats</strong\n                    ><small>{{ $any(item).subjectIds?.length || 0 }} supported subjects</small>\n                  }\n                </td>\n              }\n              @if (showStatus()) {\n                <td>\n                  <span class=\"erp-status\" [class.erp-status--neutral]=\"!item.isActive\"\n                    ><i aria-hidden=\"true\"></i>{{ item.isActive ? 'Active' : 'Inactive' }}</span\n                  >\n                </td>\n              }\n              <td class=\"erp-table-shell__actions\">\n                <erp-compact-action-menu\n                  [items]=\"rowActions\"\n                  (selected)=\"handleAction($event, item)\"\n                />\n              </td>\n            </tr>\n          } @empty {\n            <tr>\n              <td [attr.colspan]=\"tableColspan()\">\n                <div class=\"erp-empty-panel erp-academic-empty\">\n                  @if (loading()) {\n                    <span class=\"erp-spinner\" aria-hidden=\"true\"></span>\n                    <h2>Loading {{ title().toLowerCase() }}\u2026</h2>\n                  } @else {\n                    <erp-admin-illustration [kind]=\"emptyIllustration()\" size=\"compact\" />\n                    <h2>\n                      {{\n                        search || statusFilter() !== 'all'\n                          ? 'No matching results'\n                          : 'No ' +\n                            title().toLowerCase() +\n                            (section() === 'faculties' ? ' added' : ' created')\n                      }}\n                    </h2>\n                    <p>\n                      {{\n                        search || statusFilter() !== 'all'\n                          ? 'Try changing your search or filters.'\n                          : description()\n                      }}\n                    </p>\n                    @if (!search && statusFilter() === 'all') {\n                      <button\n                        class=\"erp-button erp-button--secondary\"\n                        type=\"button\"\n                        (click)=\"openCreate()\"\n                      >\n                        <svg lucidePlus size=\"17\"></svg\n                        >{{ section() === 'subjects' ? 'Create' : 'Add' }} {{ singular() }}\n                      </button>\n                    }\n                  }\n                </div>\n              </td>\n            </tr>\n          }\n        </tbody>\n      </table>\n    </div>\n    <footer class=\"erp-table-pagination\">\n      <span>{{ resultRange() }}</span>\n      <div>\n        <select\n          class=\"erp-control\"\n          [ngModel]=\"pageSize()\"\n          (ngModelChange)=\"pageSize.set(+$event); page.set(1)\"\n        >\n          @for (size of pageSizeOptions; track size) {\n            <option [value]=\"size\">{{ size }} / page</option>\n          }\n        </select>\n        <button\n          class=\"erp-icon-button\"\n          type=\"button\"\n          [disabled]=\"page() === 1\"\n          (click)=\"page.update((v) => v - 1)\"\n          aria-label=\"Previous page\"\n        >\n          <svg lucideChevronLeft size=\"18\"></svg>\n        </button>\n        <button\n          class=\"erp-icon-button\"\n          type=\"button\"\n          [disabled]=\"page() === totalPages()\"\n          (click)=\"page.update((v) => v + 1)\"\n          aria-label=\"Next page\"\n        >\n          <svg lucideChevronRight size=\"18\"></svg>\n        </button>\n      </div>\n    </footer>\n  </section>\n</erp-admin-page>\n\n@if (drawerOpen()) {\n  <div class=\"erp-drawer-layer\">\n    <button\n      class=\"erp-drawer-backdrop\"\n      type=\"button\"\n      aria-label=\"Close drawer\"\n      (click)=\"closeDrawer()\"\n    ></button>\n    <aside\n      class=\"erp-drawer erp-academic-drawer\"\n      [class.erp-subject-drawer]=\"section() === 'subjects'\"\n      cdkTrapFocus\n      [cdkTrapFocusAutoCapture]=\"true\"\n      role=\"dialog\"\n      aria-modal=\"true\"\n    >\n      <header class=\"erp-drawer__header\">\n        <div>\n          <span class=\"erp-drawer__eyebrow\">{{ drawerEyebrow() }}</span>\n          <h2>\n            {{ editingId() ? 'Edit' : section() === 'subjects' ? 'Create' : 'Add' }}\n            {{ singular() }}\n          </h2>\n          <p>{{ drawerDescription() }}</p>\n        </div>\n        <button class=\"erp-icon-button\" type=\"button\" (click)=\"closeDrawer()\" aria-label=\"Close\">\n          <svg lucideX size=\"22\"></svg>\n        </button>\n      </header>\n\n      @if (section() === 'subjects') {\n        <div class=\"erp-subject-workflow\">\n          <erp-form-section-navigator\n            class=\"erp-subject-workflow__navigator\"\n            heading=\"Subject sections\"\n            [items]=\"subjectSections()\"\n            [completedCount]=\"subjectStep()\"\n            [totalCount]=\"subjectSections().length\"\n            (sectionSelected)=\"subjectStep.set($event)\"\n          />\n          <main class=\"erp-subject-workflow__content erp-drawer__body\">\n            <button\n              class=\"erp-button erp-button--secondary erp-subject-workflow__mobile-sections\"\n              type=\"button\"\n              (click)=\"mobileNavigatorOpen.set(true)\"\n            >\n              <svg lucideClipboardList size=\"17\"></svg> Subject sections\n            </button>\n            <div class=\"erp-subject-workflow__heading\">\n              <span>Step {{ subjectStep() + 1 }} of 4</span>\n              <h3>{{ subjectSections()[subjectStep()].title }}</h3>\n            </div>\n            @switch (subjectStep()) {\n              @case (0) {\n                <fieldset class=\"erp-academic-form-section\">\n                  <legend><svg lucideBuilding2 size=\"20\"></svg> Course Details</legend>\n                  <div class=\"erp-academic-form-grid\">\n                    <label\n                      ><span>Session</span\n                      ><select class=\"erp-control\" [(ngModel)]=\"sessionId\">\n                        <option value=\"\">Select session</option>\n                        @for (item of master('academic'); track item._id) {\n                          <option [value]=\"item._id\">{{ item.name }}</option>\n                        }\n                      </select></label\n                    >\n                    <label\n                      ><span>University</span\n                      ><select\n                        class=\"erp-control\"\n                        [ngModel]=\"universityId\"\n                        (ngModelChange)=\"selectUniversity($event)\"\n                      >\n                        <option value=\"\">Select university</option>\n                        @for (item of master('university'); track item._id) {\n                          <option [value]=\"item._id\">{{ item.name }}</option>\n                        }\n                      </select></label\n                    >\n                    <label\n                      ><span>College</span\n                      ><select\n                        class=\"erp-control\"\n                        [ngModel]=\"collegeId\"\n                        (ngModelChange)=\"selectCollege($event)\"\n                      >\n                        <option value=\"\">Select college</option>\n                        @for (\n                          item of scopedMaster('college', universityId ? [universityId] : []);\n                          track item._id\n                        ) {\n                          <option [value]=\"item._id\">{{ item.name }}</option>\n                        }\n                      </select></label\n                    >\n                    <label\n                      ><span>Department</span\n                      ><select\n                        class=\"erp-control\"\n                        [ngModel]=\"singleDepartmentId()\"\n                        (ngModelChange)=\"selectDepartment($event)\"\n                      >\n                        <option value=\"\">Select department</option>\n                        @for (item of departmentOptions(); track item._id) {\n                          <option [value]=\"item._id\">{{ item.name }}</option>\n                        }\n                      </select></label\n                    >\n                    <label\n                      ><span>Level</span\n                      ><select\n                        class=\"erp-control\"\n                        [ngModel]=\"levelId\"\n                        (ngModelChange)=\"selectLevel($event)\"\n                      >\n                        <option value=\"\">Select level</option>\n                        @for (item of levelOptions(); track item._id) {\n                          <option [value]=\"item._id\">{{ item.name }}</option>\n                        }\n                      </select></label\n                    >\n                    <label\n                      ><span>Course</span\n                      ><select\n                        class=\"erp-control\"\n                        [ngModel]=\"singleCourseId()\"\n                        (ngModelChange)=\"courseIds = $event ? [$event] : []\"\n                      >\n                        <option value=\"\">Select course</option>\n                        @for (item of courseOptions(); track item._id) {\n                          <option [value]=\"item._id\">{{ item.name }}</option>\n                        }\n                      </select></label\n                    >\n                    <label\n                      ><span>Semester</span\n                      ><select class=\"erp-control\" [(ngModel)]=\"semester\">\n                        <option [ngValue]=\"0\">Select semester</option>\n                        @for (item of semesterOptions; track item) {\n                          <option [ngValue]=\"item\">Semester {{ item }}</option>\n                        }\n                      </select></label\n                    >\n                  </div>\n                </fieldset>\n              }\n              @case (1) {\n                <fieldset class=\"erp-academic-form-section\">\n                  <legend><svg lucideFileText size=\"20\"></svg> Subject Details</legend>\n                  <div class=\"erp-academic-form-grid erp-academic-form-grid--three\">\n                    <label\n                      ><span>Mark Type</span\n                      ><select class=\"erp-control\" [(ngModel)]=\"markType\">\n                        <option value=\"\">Select mark type</option>\n                        <option value=\"theory\">Theory</option>\n                        <option value=\"practical\">Practical</option>\n                        <option value=\"project\">Project</option>\n                        <option value=\"audit\">Audit</option>\n                      </select></label\n                    >\n                    <label\n                      ><span>Subject Option</span\n                      ><select class=\"erp-control\" [(ngModel)]=\"subjectOption\">\n                        <option value=\"\">Select subject option</option>\n                        <option value=\"required\">Required</option>\n                        <option value=\"elective\">Elective</option>\n                      </select></label\n                    >\n                    <label\n                      ><span>Subject Type</span\n                      ><select class=\"erp-control\" [(ngModel)]=\"subjectType\">\n                        <option value=\"\">Select subject type</option>\n                        <option value=\"theory\">Theory</option>\n                        <option value=\"practical\">Practical</option>\n                        <option value=\"tutorial\">Tutorial</option>\n                        <option value=\"project\">Project</option>\n                      </select></label\n                    >\n                    <label\n                      ><span>Evaluation Type</span\n                      ><select class=\"erp-control\" [(ngModel)]=\"evaluationType\">\n                        <option value=\"\">Select evaluation type</option>\n                        <option value=\"marks\">Marks</option>\n                        <option value=\"grade\">Grade</option>\n                      </select></label\n                    >\n                    <label\n                      ><span>Subject Name (In English)</span\n                      ><input\n                        class=\"erp-control\"\n                        [(ngModel)]=\"name\"\n                        placeholder=\"Enter subject name\"\n                    /></label>\n                    <label\n                      ><span>Subject Name (In Hindi)</span\n                      ><input\n                        class=\"erp-control\"\n                        [(ngModel)]=\"hindiName\"\n                        placeholder=\"Enter Hindi subject name\"\n                    /></label>\n                    <label\n                      ><span>Credit Earned</span\n                      ><input class=\"erp-control\" type=\"number\" min=\"0\" [(ngModel)]=\"credits\"\n                    /></label>\n                    <label\n                      ><span>Subject Counter</span\n                      ><input\n                        class=\"erp-control\"\n                        type=\"number\"\n                        min=\"0\"\n                        [(ngModel)]=\"subjectCounter\"\n                    /></label>\n                    <label\n                      ><span>Subject Code</span\n                      ><input\n                        class=\"erp-control\"\n                        [(ngModel)]=\"code\"\n                        placeholder=\"Enter subject code\"\n                    /></label>\n                    <label\n                      ><span>Lecture</span\n                      ><input class=\"erp-control\" type=\"number\" min=\"0\" [(ngModel)]=\"lectureHours\"\n                    /></label>\n                    <label\n                      ><span>Tutorial</span\n                      ><input class=\"erp-control\" type=\"number\" min=\"0\" [(ngModel)]=\"tutorialHours\"\n                    /></label>\n                    <label\n                      ><span>Lab</span\n                      ><input class=\"erp-control\" type=\"number\" min=\"0\" [(ngModel)]=\"labHours\"\n                    /></label>\n                    <label\n                      ><span>Max. Marks</span\n                      ><input class=\"erp-control\" type=\"number\" min=\"0\" [(ngModel)]=\"maxMarks\"\n                    /></label>\n                    <div class=\"erp-subject-pass-control\">\n                      <label class=\"erp-academic-check erp-academic-check--compact\"\n                        ><input type=\"checkbox\" [(ngModel)]=\"passMarksEnabled\" /><span\n                          ><strong>Pass Marks</strong></span\n                        ></label\n                      ><input\n                        class=\"erp-control\"\n                        type=\"number\"\n                        min=\"0\"\n                        [(ngModel)]=\"passMarks\"\n                        [disabled]=\"!passMarksEnabled\"\n                      />\n                    </div>\n                  </div>\n                  <div class=\"erp-academic-check-grid erp-subject-flags\">\n                    <label class=\"erp-academic-check\"\n                      ><input type=\"checkbox\" [(ngModel)]=\"isPaper\" /><span\n                        ><strong>Is Paper Exist</strong></span\n                      ></label\n                    >\n                    <label class=\"erp-academic-check\"\n                      ><input type=\"checkbox\" [(ngModel)]=\"isOpenElective\" /><span\n                        ><strong>Is Open Elective</strong></span\n                      ></label\n                    >\n                    <label class=\"erp-academic-check\"\n                      ><input type=\"checkbox\" [(ngModel)]=\"isGroupSubject\" /><span\n                        ><strong>Is Group Exist</strong></span\n                      ></label\n                    >\n                    <label class=\"erp-academic-check\"\n                      ><input type=\"checkbox\" [(ngModel)]=\"isFoundation\" /><span\n                        ><strong>Is Foundation</strong></span\n                      ></label\n                    >\n                    <label class=\"erp-academic-check\"\n                      ><input type=\"checkbox\" [(ngModel)]=\"allowMidMarksEntry\" /><span\n                        ><strong>Allow MID Marks Entry By Faculty?</strong></span\n                      ></label\n                    >\n                    <label class=\"erp-academic-check\"\n                      ><input type=\"checkbox\" [(ngModel)]=\"allowExternalMarksEntry\" /><span\n                        ><strong>Allow Ext Marks Entry By Faculty?</strong></span\n                      ></label\n                    >\n                  </div>\n                </fieldset>\n              }\n              @case (2) {\n                <fieldset class=\"erp-academic-form-section\">\n                  <legend><svg lucideEye size=\"20\"></svg> Marks Visibility</legend>\n                  <div class=\"erp-subject-visibility-grid\">\n                    <div class=\"erp-subject-visibility-option\">\n                      <label\n                        ><input type=\"checkbox\" [(ngModel)]=\"showAlternativeGrade\" /> Show\n                        Alternative Grade</label\n                      ><input\n                        class=\"erp-control\"\n                        [(ngModel)]=\"alternativeGrade\"\n                        [disabled]=\"!showAlternativeGrade\"\n                        placeholder=\"Enter alternative grade\"\n                      />\n                    </div>\n                    <div class=\"erp-subject-visibility-option\">\n                      <label\n                        ><input type=\"checkbox\" [(ngModel)]=\"showAlternativeGradePoint\" /> Show\n                        Alternative Grade Point</label\n                      ><input\n                        class=\"erp-control\"\n                        type=\"number\"\n                        min=\"0\"\n                        [(ngModel)]=\"alternativeGradePoint\"\n                        [disabled]=\"!showAlternativeGradePoint\"\n                        placeholder=\"Enter grade point\"\n                      />\n                    </div>\n                    <div class=\"erp-subject-visibility-option\">\n                      <label\n                        ><input type=\"checkbox\" [(ngModel)]=\"showAlternativeSubjectCredit\" /> Show\n                        Alternative Subject Credit</label\n                      ><input\n                        class=\"erp-control\"\n                        type=\"number\"\n                        min=\"0\"\n                        [(ngModel)]=\"alternativeSubjectCredit\"\n                        [disabled]=\"!showAlternativeSubjectCredit\"\n                        placeholder=\"Enter subject credit\"\n                      />\n                    </div>\n                    <label class=\"erp-subject-visibility-check\"\n                      ><input type=\"checkbox\" [(ngModel)]=\"hideInternalMarks\" /> Do Not Show IA\n                      Marks</label\n                    >\n                    <label class=\"erp-subject-visibility-check\"\n                      ><input type=\"checkbox\" [(ngModel)]=\"hideExternalMarks\" /> Do Not Show ESE\n                      Marks</label\n                    >\n                    <label class=\"erp-subject-visibility-check\"\n                      ><input type=\"checkbox\" [(ngModel)]=\"hideMidTermMarks\" /> Do Not Show Mid\n                      Marks</label\n                    >\n                    <label class=\"erp-subject-visibility-check\"\n                      ><input type=\"checkbox\" [(ngModel)]=\"hideTotalMarks\" /> Do Not Show Total\n                      Marks</label\n                    >\n                    <label class=\"erp-subject-visibility-check\"\n                      ><input type=\"checkbox\" [(ngModel)]=\"hideExternalMarksToStudent\" /> Do Not\n                      Show ESE Marks To Student</label\n                    >\n                    <label class=\"erp-subject-visibility-check\"\n                      ><input type=\"checkbox\" [(ngModel)]=\"hideTotalMarksToStudent\" /> Do Not Show\n                      Total Marks To Student</label\n                    >\n                  </div>\n                </fieldset>\n              }\n              @case (3) {\n                <fieldset class=\"erp-academic-form-section\">\n                  <legend><svg lucideColumns3 size=\"20\"></svg> Subject Split</legend>\n                  <div class=\"erp-academic-form-grid\">\n                    <label\n                      ><span>Split</span\n                      ><select class=\"erp-control\" [(ngModel)]=\"splitType\">\n                        <option value=\"\">Select split</option>\n                        <option value=\"internal_external\">INT / EXT</option>\n                        <option value=\"internal_external_midterm\">INT / EXT / MidTerm</option>\n                        <option value=\"internal_external_practical\">INT / EXT / Practical</option>\n                        <option value=\"internal_external_midterm_practical\">\n                          INT / EXT / MidTerm / Practical\n                        </option>\n                      </select></label\n                    >\n                    <label\n                      ><span>Category</span\n                      ><select class=\"erp-control\" [(ngModel)]=\"splitCategory\">\n                        <option value=\"\">Select category</option>\n                        <option value=\"regular\">Regular</option>\n                        <option value=\"audit\">Audit</option>\n                        <option value=\"qualifying\">Qualifying</option>\n                        <option value=\"non-credit\">Non-credit</option>\n                      </select></label\n                    >\n                  </div>\n                  @if (activeMarkSplits().length) {\n                    <div class=\"erp-subject-split-grid\">\n                      @for (part of activeMarkSplits(); track part.key) {\n                        <section class=\"erp-subject-split-card\">\n                          <h4>{{ part.label }}</h4>\n                          <div>\n                            <label\n                              ><span>Max Marks</span\n                              ><input\n                                class=\"erp-control\"\n                                type=\"number\"\n                                min=\"0\"\n                                [(ngModel)]=\"part.maxMarks\"\n                            /></label>\n                            <div class=\"erp-subject-pass-control\">\n                              <label class=\"erp-academic-check erp-academic-check--compact\"\n                                ><input type=\"checkbox\" [(ngModel)]=\"part.passMarksEnabled\" /><span\n                                  ><strong>Pass Marks</strong></span\n                                ></label\n                              ><input\n                                class=\"erp-control\"\n                                type=\"number\"\n                                min=\"0\"\n                                [(ngModel)]=\"part.passMarks\"\n                                [disabled]=\"!part.passMarksEnabled\"\n                              />\n                            </div>\n                          </div>\n                        </section>\n                      }\n                    </div>\n                  } @else {\n                    <p class=\"erp-form-hint\">Choose a split to configure its marks components.</p>\n                  }\n                  @if (!subjectMarksValid()) {\n                    <div class=\"erp-alert erp-alert--danger\">\n                      Pass marks must fit within their component, and the split total cannot exceed\n                      Max. Marks.\n                    </div>\n                  }\n                </fieldset>\n              }\n            }\n          </main>\n        </div>\n        <erp-form-action-bar\n          [showBack]=\"subjectStep() > 0\"\n          [showSaveDraft]=\"false\"\n          [saving]=\"saving()\"\n          [primaryDisabled]=\"subjectStep() === 3 && !formValid()\"\n          saveStatus=\"\"\n          [primaryLabel]=\"\n            subjectStep() === 3 ? (editingId() ? 'Save changes' : 'Create subject') : 'Continue'\n          \"\n          (back)=\"subjectStep.update((v) => v - 1)\"\n          (primary)=\"nextSubjectStep()\"\n        />\n      } @else {\n        <div class=\"erp-drawer__body erp-academic-drawer__body\">\n          @if (section() === 'faculties') {\n            <fieldset class=\"erp-academic-form-section\">\n              <legend><svg lucideUsersRound size=\"20\"></svg> Faculty identity</legend>\n              <div class=\"erp-academic-form-grid\">\n                <label\n                  ><span>Name *</span\n                  ><input\n                    class=\"erp-control\"\n                    [(ngModel)]=\"name\"\n                    placeholder=\"Enter faculty name\" /></label\n                ><label\n                  ><span>Code *</span\n                  ><input\n                    class=\"erp-control\"\n                    [(ngModel)]=\"code\"\n                    placeholder=\"Enter faculty code\" /></label\n                ><label class=\"erp-academic-field--wide\"\n                  ><span>Email *</span\n                  ><input\n                    class=\"erp-control\"\n                    type=\"email\"\n                    [(ngModel)]=\"email\"\n                    placeholder=\"name@university.edu\"\n                /></label>\n              </div>\n            </fieldset>\n            <fieldset class=\"erp-academic-form-section\">\n              <legend><svg lucideBuilding2 size=\"20\"></svg> Institution</legend>\n              <div class=\"erp-academic-form-grid\">\n                <label\n                  ><span>University *</span\n                  ><select\n                    class=\"erp-control\"\n                    [(ngModel)]=\"universityId\"\n                    (ngModelChange)=\"collegeId = ''\"\n                  >\n                    <option value=\"\">Select university</option>\n                    @for (item of master('university'); track item._id) {\n                      <option [value]=\"item._id\">{{ item.name }}</option>\n                    }\n                  </select></label\n                ><label\n                  ><span>College *</span\n                  ><select class=\"erp-control\" [(ngModel)]=\"collegeId\">\n                    <option value=\"\">Select college</option>\n                    @for (item of scopedMaster('college', [universityId]); track item._id) {\n                      <option [value]=\"item._id\">{{ item.name }}</option>\n                    }\n                  </select></label\n                >\n                <div class=\"erp-field-stack erp-academic-field--wide\">\n                  <span>Departments *</span\n                  ><erp-multi-select-dropdown\n                    [options]=\"options(master('department'))\"\n                    [value]=\"departmentIds\"\n                    placeholder=\"Select departments\"\n                    (valueChange)=\"departmentIds = $event\"\n                  />\n                </div>\n              </div>\n            </fieldset>\n            <fieldset class=\"erp-academic-form-section\">\n              <legend><svg lucideBookOpen size=\"20\"></svg> Teaching capability</legend>\n              <div class=\"erp-field-stack\">\n                <span>Subjects</span\n                ><erp-multi-select-dropdown\n                  [options]=\"options(subjects())\"\n                  [value]=\"subjectIds\"\n                  placeholder=\"Select subjects\"\n                  (valueChange)=\"subjectIds = $event\"\n                />\n              </div>\n            </fieldset>\n            <fieldset class=\"erp-academic-form-section\">\n              <legend><svg lucideCalendarDays size=\"20\"></svg> Availability & workload</legend>\n              <span class=\"erp-academic-field-label\">Available days</span>\n              <div class=\"erp-academic-weekdays\">\n                @for (day of ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday']; track day) {\n                  <button\n                    type=\"button\"\n                    [class.is-selected]=\"availableDays.includes(day)\"\n                    (click)=\"toggleDay(day)\"\n                  >\n                    {{ day }}\n                  </button>\n                }\n              </div>\n              <label\n                ><span>Weekly workload limit</span>\n                <div class=\"erp-academic-unit-control\">\n                  <input class=\"erp-control\" type=\"number\" min=\"1\" [(ngModel)]=\"weeklyLimit\" /><span\n                    >hours</span\n                  >\n                </div></label\n              >\n              <section class=\"erp-academic-mapping-preview\">\n                <svg lucideClock3 size=\"24\"></svg\n                ><span\n                  ><small>Weekly capacity</small\n                  ><strong>{{ weeklyLimit }} hours available</strong></span\n                >\n              </section>\n            </fieldset>\n          } @else {\n            <fieldset class=\"erp-academic-form-section\">\n              <legend><svg lucideBuilding2 size=\"20\"></svg> Institution</legend>\n              <div class=\"erp-academic-form-grid\">\n                <label\n                  ><span>University *</span\n                  ><select\n                    class=\"erp-control\"\n                    [(ngModel)]=\"universityId\"\n                    (ngModelChange)=\"collegeId = ''\"\n                  >\n                    <option value=\"\">Select university</option>\n                    @for (item of master('university'); track item._id) {\n                      <option [value]=\"item._id\">{{ item.name }}</option>\n                    }\n                  </select></label\n                ><label\n                  ><span>College *</span\n                  ><select class=\"erp-control\" [(ngModel)]=\"collegeId\">\n                    <option value=\"\">Select college</option>\n                    @for (item of scopedMaster('college', [universityId]); track item._id) {\n                      <option [value]=\"item._id\">{{ item.name }}</option>\n                    }\n                  </select></label\n                >\n              </div>\n            </fieldset>\n            <fieldset class=\"erp-academic-form-section\">\n              <legend><svg lucideFileText size=\"20\"></svg> Space identity</legend>\n              <div class=\"erp-academic-form-grid\">\n                <label\n                  ><span>Name *</span\n                  ><input\n                    class=\"erp-control\"\n                    [(ngModel)]=\"name\"\n                    placeholder=\"e.g. Computer Lab 1\" /></label\n                ><label\n                  ><span>Code *</span\n                  ><input\n                    class=\"erp-control\"\n                    [(ngModel)]=\"code\"\n                    placeholder=\"e.g. LAB-C101\" /></label\n                ><label class=\"erp-academic-field--wide\"\n                  ><span>Room type</span\n                  ><select class=\"erp-control\" [(ngModel)]=\"roomType\">\n                    <option value=\"classroom\">Classroom</option>\n                    <option value=\"lab\">Lab</option>\n                    <option value=\"auditorium\">Auditorium</option>\n                  </select></label\n                >\n              </div>\n            </fieldset>\n            <fieldset class=\"erp-academic-form-section\">\n              <legend><svg lucideMapPin size=\"20\"></svg> Location</legend>\n              <div class=\"erp-academic-form-grid\">\n                <label\n                  ><span>Building</span\n                  ><input\n                    class=\"erp-control\"\n                    [(ngModel)]=\"building\"\n                    placeholder=\"Enter building\" /></label\n                ><label\n                  ><span>Floor</span\n                  ><input class=\"erp-control\" [(ngModel)]=\"floor\" placeholder=\"Enter floor\"\n                /></label>\n              </div>\n            </fieldset>\n            <fieldset class=\"erp-academic-form-section\">\n              <legend><svg lucideUsersRound size=\"20\"></svg> Capacity & capability</legend>\n              <div class=\"erp-academic-form-grid\">\n                <label\n                  ><span>Capacity *</span\n                  ><input class=\"erp-control\" type=\"number\" min=\"1\" [(ngModel)]=\"capacity\"\n                /></label>\n                <div class=\"erp-field-stack\">\n                  <span>Supported subjects (optional)</span\n                  ><erp-multi-select-dropdown\n                    [options]=\"options(subjects())\"\n                    [value]=\"subjectIds\"\n                    placeholder=\"Select supported subjects\"\n                    (valueChange)=\"subjectIds = $event\"\n                  />\n                </div>\n              </div>\n              <section class=\"erp-academic-mapping-preview\">\n                <svg lucideBuilding2 size=\"24\"></svg\n                ><span\n                  ><strong>Space preview</strong\n                  ><small\n                    >{{ roomType | titlecase }} \u00B7 Capacity {{ capacity }} \u00B7\n                    {{\n                      subjectIds.length\n                        ? subjectIds.length + ' subjects'\n                        : 'Subjects not restricted'\n                    }}</small\n                  ></span\n                >\n              </section>\n            </fieldset>\n          }\n        </div>\n        <footer class=\"erp-drawer__footer\">\n          <button class=\"erp-button erp-button--secondary\" type=\"button\" (click)=\"closeDrawer()\">\n            Cancel</button\n          ><button\n            class=\"erp-button erp-button--primary\"\n            type=\"button\"\n            [disabled]=\"!formValid() || saving()\"\n            (click)=\"save()\"\n          >\n            {{\n              saving()\n                ? 'Saving\u2026'\n                : editingId()\n                  ? 'Save changes'\n                  : section() === 'faculties'\n                    ? 'Add faculty member'\n                    : 'Add room or lab'\n            }}\n          </button>\n        </footer>\n      }\n    </aside>\n  </div>\n}\n\n<erp-mobile-section-navigator-sheet\n  [open]=\"mobileNavigatorOpen()\"\n  heading=\"Subject sections\"\n  [items]=\"subjectSections()\"\n  [completedCount]=\"subjectStep()\"\n  [totalCount]=\"subjectSections().length\"\n  (closed)=\"mobileNavigatorOpen.set(false)\"\n  (sectionSelected)=\"subjectStep.set($event); mobileNavigatorOpen.set(false)\"\n/>\n" }]
    }], () => [], { closeOverlays: [{
            type: HostListener,
            args: ['document:keydown.escape']
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(AcademicResourcesComponent, { className: "AcademicResourcesComponent", filePath: "frontend/src/app/features/admin/academics/academic-resources.component.ts", lineNumber: 116 }); })();
function createMarkSplits() {
    return {
        internal: {
            key: 'internal',
            label: 'Internal Marks',
            maxMarks: 0,
            passMarksEnabled: false,
            passMarks: 0,
        },
        external: {
            key: 'external',
            label: 'External Marks',
            maxMarks: 0,
            passMarksEnabled: false,
            passMarks: 0,
        },
        midTerm: {
            key: 'midTerm',
            label: 'Mid-Term Marks',
            maxMarks: 0,
            passMarksEnabled: false,
            passMarks: 0,
        },
        practical: {
            key: 'practical',
            label: 'Practical Marks',
            maxMarks: 0,
            passMarksEnabled: false,
            passMarks: 0,
        },
        internalPractical: {
            key: 'internalPractical',
            label: 'Internal Practical Marks',
            maxMarks: 0,
            passMarksEnabled: false,
            passMarks: 0,
        },
    };
}
