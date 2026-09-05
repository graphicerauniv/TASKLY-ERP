import { ChangeDetectionStrategy, Component, computed, effect, inject, signal, } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { map } from 'rxjs';
import { ApiService } from '../../../core/api.service';
import { MasterDataStore } from '../../../core/master-data.store';
import { AdminPageComponent } from '../../../shared/ui/admin-page/admin-page.component';
import { CompactActionMenuComponent, } from '../../../shared/ui/compact-action-menu/compact-action-menu.component';
import { ConfirmDialogComponent } from '../../../shared/ui/confirm-dialog/confirm-dialog.component';
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
const _forTrack0 = ($index, $item) => $item.slug;
const _forTrack1 = ($index, $item) => $item._id;
function MasterDataComponent_Conditional_0_Conditional_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "a", 4);
    i0.ɵɵtext(1, "Create custom");
    i0.ɵɵelementEnd();
} }
function MasterDataComponent_Conditional_0_Conditional_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "a", 5);
    i0.ɵɵtext(1, "View custom masters");
    i0.ɵɵelementEnd();
} }
function MasterDataComponent_Conditional_0_Conditional_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 6);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r0.message());
} }
function MasterDataComponent_Conditional_0_Conditional_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 7);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r0.error());
} }
function MasterDataComponent_Conditional_0_Conditional_8_For_19_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 17);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const type_r3 = ctx.$implicit;
    i0.ɵɵproperty("value", type_r3.slug);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(type_r3.name);
} }
function MasterDataComponent_Conditional_0_Conditional_8_Template(rf, ctx) { if (rf & 1) {
    const _r2 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "section", 10)(1, "div", 12)(2, "div")(3, "h2");
    i0.ɵɵtext(4, "Create custom master");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "p");
    i0.ɵɵtext(6, "Use clear reusable names so future forms stay easy to maintain.");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(7, "div", 13)(8, "label")(9, "span");
    i0.ɵɵtext(10, "Name");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(11, "input", 14);
    i0.ɵɵtwoWayListener("ngModelChange", function MasterDataComponent_Conditional_0_Conditional_8_Template_input_ngModelChange_11_listener($event) { i0.ɵɵrestoreView(_r2); const ctx_r0 = i0.ɵɵnextContext(2); i0.ɵɵtwoWayBindingSet(ctx_r0.customName, $event) || (ctx_r0.customName = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(12, "label")(13, "span");
    i0.ɵɵtext(14, "Parent master (optional)");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(15, "select", 15);
    i0.ɵɵtwoWayListener("ngModelChange", function MasterDataComponent_Conditional_0_Conditional_8_Template_select_ngModelChange_15_listener($event) { i0.ɵɵrestoreView(_r2); const ctx_r0 = i0.ɵɵnextContext(2); i0.ɵɵtwoWayBindingSet(ctx_r0.customParent, $event) || (ctx_r0.customParent = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementStart(16, "option", 16);
    i0.ɵɵtext(17, "No parent");
    i0.ɵɵelementEnd();
    i0.ɵɵrepeaterCreate(18, MasterDataComponent_Conditional_0_Conditional_8_For_19_Template, 2, 2, "option", 17, _forTrack0);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(20, "button", 18);
    i0.ɵɵlistener("click", function MasterDataComponent_Conditional_0_Conditional_8_Template_button_click_20_listener() { i0.ɵɵrestoreView(_r2); const ctx_r0 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r0.createCustom()); });
    i0.ɵɵtext(21, " Create master ");
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(11);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r0.customName);
    i0.ɵɵadvance(4);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r0.customParent);
    i0.ɵɵadvance(3);
    i0.ɵɵrepeater(ctx_r0.types());
} }
function MasterDataComponent_Conditional_0_Conditional_9_For_22_Conditional_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "tr")(1, "td")(2, "strong");
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(4, "td");
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "td");
    i0.ɵɵtext(7);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "td")(9, "span", 20);
    i0.ɵɵtext(10, "Active");
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const type_r4 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(type_r4.name);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(type_r4.slug);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(type_r4.parentTypeSlug || "\u2014");
} }
function MasterDataComponent_Conditional_0_Conditional_9_For_22_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵconditionalCreate(0, MasterDataComponent_Conditional_0_Conditional_9_For_22_Conditional_0_Template, 11, 3, "tr");
} if (rf & 2) {
    const type_r4 = ctx.$implicit;
    i0.ɵɵconditional(type_r4.isCustom ? 0 : -1);
} }
function MasterDataComponent_Conditional_0_Conditional_9_ForEmpty_23_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "tr")(1, "td", 21);
    i0.ɵɵtext(2, "No custom masters created.");
    i0.ɵɵelementEnd()();
} }
function MasterDataComponent_Conditional_0_Conditional_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "section", 11)(1, "div", 19)(2, "div")(3, "h2");
    i0.ɵɵtext(4, " Custom masters ");
    i0.ɵɵelementStart(5, "small");
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(7, "p");
    i0.ɵɵtext(8, "Review custom dropdown data sources separately from creation.");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(9, "table")(10, "thead")(11, "tr")(12, "th");
    i0.ɵɵtext(13, "Name");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(14, "th");
    i0.ɵɵtext(15, "Slug");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(16, "th");
    i0.ɵɵtext(17, "Parent");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(18, "th");
    i0.ɵɵtext(19, "Status");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(20, "tbody");
    i0.ɵɵrepeaterCreate(21, MasterDataComponent_Conditional_0_Conditional_9_For_22_Template, 1, 1, null, null, _forTrack0, false, MasterDataComponent_Conditional_0_Conditional_9_ForEmpty_23_Template, 3, 0, "tr");
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(6);
    i0.ɵɵtextInterpolate(ctx_r0.customTypeCount());
    i0.ɵɵadvance(15);
    i0.ɵɵrepeater(ctx_r0.types());
} }
function MasterDataComponent_Conditional_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "erp-admin-page", 0)(1, "div", 3);
    i0.ɵɵconditionalCreate(2, MasterDataComponent_Conditional_0_Conditional_2_Template, 2, 0, "a", 4)(3, MasterDataComponent_Conditional_0_Conditional_3_Template, 2, 0, "a", 5);
    i0.ɵɵelementEnd();
    i0.ɵɵconditionalCreate(4, MasterDataComponent_Conditional_0_Conditional_4_Template, 2, 1, "p", 6);
    i0.ɵɵconditionalCreate(5, MasterDataComponent_Conditional_0_Conditional_5_Template, 2, 1, "p", 7);
    i0.ɵɵelementStart(6, "div", 8)(7, "main", 9);
    i0.ɵɵconditionalCreate(8, MasterDataComponent_Conditional_0_Conditional_8_Template, 22, 2, "section", 10)(9, MasterDataComponent_Conditional_0_Conditional_9_Template, 24, 2, "section", 11);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵproperty("title", ctx_r0.pageTitle())("layout", ctx_r0.isViewPage() ? "collection" : "default");
    i0.ɵɵadvance(2);
    i0.ɵɵconditional(ctx_r0.isViewPage() ? 2 : 3);
    i0.ɵɵadvance(2);
    i0.ɵɵconditional(ctx_r0.message() ? 4 : -1);
    i0.ɵɵadvance();
    i0.ɵɵconditional(ctx_r0.error() ? 5 : -1);
    i0.ɵɵadvance(3);
    i0.ɵɵconditional(ctx_r0.isCreatePage() ? 8 : 9);
} }
function MasterDataComponent_Conditional_1_Conditional_2_Template(rf, ctx) { if (rf & 1) {
    const _r5 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "a", 23);
    i0.ɵɵtext(1, "Create value");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(2, "label", 24);
    i0.ɵɵtext(3, "Bulk upload");
    i0.ɵɵelementStart(4, "input", 25);
    i0.ɵɵlistener("change", function MasterDataComponent_Conditional_1_Conditional_2_Template_input_change_4_listener($event) { i0.ɵɵrestoreView(_r5); const ctx_r0 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r0.importFile($event)); });
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("routerLink", ctx_r0.createRoute());
} }
function MasterDataComponent_Conditional_1_Conditional_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "a", 22);
    i0.ɵɵtext(1, "View values");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("routerLink", ctx_r0.viewRoute());
} }
function MasterDataComponent_Conditional_1_Conditional_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 6);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r0.message());
} }
function MasterDataComponent_Conditional_1_Conditional_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 7);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r0.error());
} }
function MasterDataComponent_Conditional_1_Conditional_8_For_13_For_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 17);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const option_r10 = ctx.$implicit;
    i0.ɵɵproperty("value", option_r10._id);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(option_r10.name);
} }
function MasterDataComponent_Conditional_1_Conditional_8_For_13_Template(rf, ctx) { if (rf & 1) {
    const _r7 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "label")(1, "span");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "select", 15);
    i0.ɵɵtwoWayListener("ngModelChange", function MasterDataComponent_Conditional_1_Conditional_8_For_13_Template_select_ngModelChange_3_listener($event) { const dependencySlug_r8 = i0.ɵɵrestoreView(_r7).$implicit; const ctx_r0 = i0.ɵɵnextContext(3); i0.ɵɵtwoWayBindingSet(ctx_r0.selectedDependencies[dependencySlug_r8], $event) || (ctx_r0.selectedDependencies[dependencySlug_r8] = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵlistener("ngModelChange", function MasterDataComponent_Conditional_1_Conditional_8_For_13_Template_select_ngModelChange_3_listener() { const ɵ$index_179_r9 = i0.ɵɵrestoreView(_r7).$index; const ctx_r0 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r0.dependencyChanged(ɵ$index_179_r9)); });
    i0.ɵɵelementStart(4, "option", 16);
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd();
    i0.ɵɵrepeaterCreate(6, MasterDataComponent_Conditional_1_Conditional_8_For_13_For_7_Template, 2, 2, "option", 17, _forTrack1);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const dependencySlug_r8 = ctx.$implicit;
    const ɵ$index_179_r9 = ctx.$index;
    const ctx_r0 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1("", ctx_r0.dependencyLabel(dependencySlug_r8), " *");
    i0.ɵɵadvance();
    i0.ɵɵtwoWayProperty("ngModel", ctx_r0.selectedDependencies[dependencySlug_r8]);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1("Select ", ctx_r0.dependencyLabel(dependencySlug_r8));
    i0.ɵɵadvance();
    i0.ɵɵrepeater(ctx_r0.dependencyOptions(ɵ$index_179_r9));
} }
function MasterDataComponent_Conditional_1_Conditional_8_Conditional_14_For_25_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 33);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const year_r12 = ctx.$implicit;
    i0.ɵɵproperty("ngValue", year_r12);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1("Year ", year_r12);
} }
function MasterDataComponent_Conditional_1_Conditional_8_Conditional_14_Template(rf, ctx) { if (rf & 1) {
    const _r11 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "label")(1, "span");
    i0.ɵɵtext(2, "Course code *");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "input", 28);
    i0.ɵɵtwoWayListener("ngModelChange", function MasterDataComponent_Conditional_1_Conditional_8_Conditional_14_Template_input_ngModelChange_3_listener($event) { i0.ɵɵrestoreView(_r11); const ctx_r0 = i0.ɵɵnextContext(3); i0.ɵɵtwoWayBindingSet(ctx_r0.courseCode, $event) || (ctx_r0.courseCode = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(4, "label")(5, "span");
    i0.ɵɵtext(6, "Exam pattern *");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "select", 15);
    i0.ɵɵtwoWayListener("ngModelChange", function MasterDataComponent_Conditional_1_Conditional_8_Conditional_14_Template_select_ngModelChange_7_listener($event) { i0.ɵɵrestoreView(_r11); const ctx_r0 = i0.ɵɵnextContext(3); i0.ɵɵtwoWayBindingSet(ctx_r0.courseExamPattern, $event) || (ctx_r0.courseExamPattern = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementStart(8, "option", 29);
    i0.ɵɵtext(9, "Semester-wise exams");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(10, "option", 30);
    i0.ɵɵtext(11, "Year-wise exams");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(12, "label")(13, "span");
    i0.ɵɵtext(14, "Duration years *");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(15, "input", 31);
    i0.ɵɵtwoWayListener("ngModelChange", function MasterDataComponent_Conditional_1_Conditional_8_Conditional_14_Template_input_ngModelChange_15_listener($event) { i0.ɵɵrestoreView(_r11); const ctx_r0 = i0.ɵɵnextContext(3); i0.ɵɵtwoWayBindingSet(ctx_r0.courseDurationYears, $event) || (ctx_r0.courseDurationYears = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(16, "label")(17, "span");
    i0.ɵɵtext(18, "Total semesters *");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(19, "input", 32);
    i0.ɵɵtwoWayListener("ngModelChange", function MasterDataComponent_Conditional_1_Conditional_8_Conditional_14_Template_input_ngModelChange_19_listener($event) { i0.ɵɵrestoreView(_r11); const ctx_r0 = i0.ɵɵnextContext(3); i0.ɵɵtwoWayBindingSet(ctx_r0.courseTotalSemesters, $event) || (ctx_r0.courseTotalSemesters = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(20, "label")(21, "span");
    i0.ɵɵtext(22, "Default current academic year *");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(23, "select", 15);
    i0.ɵɵtwoWayListener("ngModelChange", function MasterDataComponent_Conditional_1_Conditional_8_Conditional_14_Template_select_ngModelChange_23_listener($event) { i0.ɵɵrestoreView(_r11); const ctx_r0 = i0.ɵɵnextContext(3); i0.ɵɵtwoWayBindingSet(ctx_r0.courseDefaultAcademicYear, $event) || (ctx_r0.courseDefaultAcademicYear = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵrepeaterCreate(24, MasterDataComponent_Conditional_1_Conditional_8_Conditional_14_For_25_Template, 2, 2, "option", 33, i0.ɵɵrepeaterTrackByIdentity);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(3);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r0.courseCode);
    i0.ɵɵadvance(4);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r0.courseExamPattern);
    i0.ɵɵadvance(8);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r0.courseDurationYears);
    i0.ɵɵadvance(4);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r0.courseTotalSemesters);
    i0.ɵɵadvance(4);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r0.courseDefaultAcademicYear);
    i0.ɵɵadvance();
    i0.ɵɵrepeater(ctx_r0.courseYearOptions());
} }
function MasterDataComponent_Conditional_1_Conditional_8_Conditional_17_Template(rf, ctx) { if (rf & 1) {
    const _r13 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 34);
    i0.ɵɵlistener("click", function MasterDataComponent_Conditional_1_Conditional_8_Conditional_17_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r13); const ctx_r0 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r0.reset()); });
    i0.ɵɵtext(1, " Cancel ");
    i0.ɵɵelementEnd();
} }
function MasterDataComponent_Conditional_1_Conditional_8_Template(rf, ctx) { if (rf & 1) {
    const _r6 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "section", 10)(1, "div", 12)(2, "div")(3, "h2");
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "p");
    i0.ɵɵtext(6, " Keep values consistent because these records power form dropdowns and filters. ");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(7, "div", 13)(8, "label")(9, "span");
    i0.ɵɵtext(10, "Name *");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(11, "input", 26);
    i0.ɵɵtwoWayListener("ngModelChange", function MasterDataComponent_Conditional_1_Conditional_8_Template_input_ngModelChange_11_listener($event) { i0.ɵɵrestoreView(_r6); const ctx_r0 = i0.ɵɵnextContext(2); i0.ɵɵtwoWayBindingSet(ctx_r0.name, $event) || (ctx_r0.name = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd()();
    i0.ɵɵrepeaterCreate(12, MasterDataComponent_Conditional_1_Conditional_8_For_13_Template, 8, 3, "label", null, i0.ɵɵrepeaterTrackByIdentity);
    i0.ɵɵconditionalCreate(14, MasterDataComponent_Conditional_1_Conditional_8_Conditional_14_Template, 26, 5);
    i0.ɵɵelementStart(15, "button", 18);
    i0.ɵɵlistener("click", function MasterDataComponent_Conditional_1_Conditional_8_Template_button_click_15_listener() { i0.ɵɵrestoreView(_r6); const ctx_r0 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r0.save()); });
    i0.ɵɵtext(16);
    i0.ɵɵelementEnd();
    i0.ɵɵconditionalCreate(17, MasterDataComponent_Conditional_1_Conditional_8_Conditional_17_Template, 2, 0, "button", 27);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(ctx_r0.editingId() ? "Edit value" : "Add value");
    i0.ɵɵadvance(7);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r0.name);
    i0.ɵɵadvance();
    i0.ɵɵrepeater(ctx_r0.dependencySlugs());
    i0.ɵɵadvance(2);
    i0.ɵɵconditional(ctx_r0.isCourseMaster() ? 14 : -1);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", ctx_r0.editingId() ? "Save changes" : "Add value", " ");
    i0.ɵɵadvance();
    i0.ɵɵconditional(ctx_r0.editingId() ? 17 : -1);
} }
function MasterDataComponent_Conditional_1_Conditional_9_Conditional_19_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "th");
    i0.ɵɵtext(1, "Depends on");
    i0.ɵɵelementEnd();
} }
function MasterDataComponent_Conditional_1_Conditional_9_Conditional_20_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "th");
    i0.ɵɵtext(1, "Configuration");
    i0.ɵɵelementEnd();
} }
function MasterDataComponent_Conditional_1_Conditional_9_For_27_Conditional_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r16 = i0.ɵɵnextContext().$implicit;
    const ctx_r0 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r0.parentPath(item_r16));
} }
function MasterDataComponent_Conditional_1_Conditional_9_For_27_Conditional_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td")(1, "strong");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "small");
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const item_r16 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate2("", (item_r16.metadata == null ? null : item_r16.metadata["courseCode"]) || "Code not set", " \u00B7 ", (item_r16.metadata == null ? null : item_r16.metadata["examPattern"]) === "year" ? "Year-wise exams" : "Semester-wise exams");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate2("", (item_r16.metadata == null ? null : item_r16.metadata["durationYears"]) || 4, " years \u00B7 ", (item_r16.metadata == null ? null : item_r16.metadata["totalSemesters"]) || 8, " semesters \u00B7 fee type selected during fee setup");
} }
function MasterDataComponent_Conditional_1_Conditional_9_For_27_Template(rf, ctx) { if (rf & 1) {
    const _r15 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "tr")(1, "td")(2, "strong");
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd()();
    i0.ɵɵconditionalCreate(4, MasterDataComponent_Conditional_1_Conditional_9_For_27_Conditional_4_Template, 2, 1, "td");
    i0.ɵɵconditionalCreate(5, MasterDataComponent_Conditional_1_Conditional_9_For_27_Conditional_5_Template, 5, 4, "td");
    i0.ɵɵelementStart(6, "td")(7, "button", 39);
    i0.ɵɵlistener("click", function MasterDataComponent_Conditional_1_Conditional_9_For_27_Template_button_click_7_listener() { const item_r16 = i0.ɵɵrestoreView(_r15).$implicit; const ctx_r0 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r0.toggle(item_r16)); });
    i0.ɵɵtext(8);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(9, "td", 38)(10, "erp-compact-action-menu", 40);
    i0.ɵɵlistener("selected", function MasterDataComponent_Conditional_1_Conditional_9_For_27_Template_erp_compact_action_menu_selected_10_listener($event) { const item_r16 = i0.ɵɵrestoreView(_r15).$implicit; const ctx_r0 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r0.handleRowAction($event, item_r16)); });
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const item_r16 = ctx.$implicit;
    const ctx_r0 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(item_r16.name);
    i0.ɵɵadvance();
    i0.ɵɵconditional(ctx_r0.dependencySlugs().length ? 4 : -1);
    i0.ɵɵadvance();
    i0.ɵɵconditional(ctx_r0.isCourseMaster() ? 5 : -1);
    i0.ɵɵadvance(2);
    i0.ɵɵclassProp("erp-status--neutral", !item_r16.isActive);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", item_r16.isActive ? "Enabled" : "Disabled", " ");
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("items", ctx_r0.isCourseMaster() ? ctx_r0.courseRowActions : ctx_r0.baseRowActions);
} }
function MasterDataComponent_Conditional_1_Conditional_9_ForEmpty_28_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "tr")(1, "td", 41);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance();
    i0.ɵɵattribute("colspan", (ctx_r0.dependencySlugs().length ? 4 : 3) + (ctx_r0.isCourseMaster() ? 1 : 0));
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r0.loading() ? "Loading\u2026" : "No values found.", " ");
} }
function MasterDataComponent_Conditional_1_Conditional_9_Template(rf, ctx) { if (rf & 1) {
    const _r14 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "section", 11)(1, "div", 19)(2, "div")(3, "h2");
    i0.ɵɵtext(4, " Saved values ");
    i0.ɵɵelementStart(5, "small");
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(7, "p");
    i0.ɵɵtext(8, "Search, review and manage this master list separately from creation.");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(9, "div", 35)(10, "input", 36);
    i0.ɵɵtwoWayListener("ngModelChange", function MasterDataComponent_Conditional_1_Conditional_9_Template_input_ngModelChange_10_listener($event) { i0.ɵɵrestoreView(_r14); const ctx_r0 = i0.ɵɵnextContext(2); i0.ɵɵtwoWayBindingSet(ctx_r0.search, $event) || (ctx_r0.search = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵlistener("keyup.enter", function MasterDataComponent_Conditional_1_Conditional_9_Template_input_keyup_enter_10_listener() { i0.ɵɵrestoreView(_r14); const ctx_r0 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r0.loadValues()); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(11, "button", 34);
    i0.ɵɵlistener("click", function MasterDataComponent_Conditional_1_Conditional_9_Template_button_click_11_listener() { i0.ɵɵrestoreView(_r14); const ctx_r0 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r0.loadValues()); });
    i0.ɵɵtext(12, " Search ");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(13, "div", 37)(14, "table")(15, "thead")(16, "tr")(17, "th");
    i0.ɵɵtext(18, "Name");
    i0.ɵɵelementEnd();
    i0.ɵɵconditionalCreate(19, MasterDataComponent_Conditional_1_Conditional_9_Conditional_19_Template, 2, 0, "th");
    i0.ɵɵconditionalCreate(20, MasterDataComponent_Conditional_1_Conditional_9_Conditional_20_Template, 2, 0, "th");
    i0.ɵɵelementStart(21, "th");
    i0.ɵɵtext(22, "Status");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(23, "th", 38);
    i0.ɵɵtext(24, "Actions");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(25, "tbody");
    i0.ɵɵrepeaterCreate(26, MasterDataComponent_Conditional_1_Conditional_9_For_27_Template, 11, 7, "tr", null, _forTrack1, false, MasterDataComponent_Conditional_1_Conditional_9_ForEmpty_28_Template, 3, 2, "tr");
    i0.ɵɵelementEnd()()()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(6);
    i0.ɵɵtextInterpolate(ctx_r0.valueTotal());
    i0.ɵɵadvance(4);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r0.search);
    i0.ɵɵadvance(9);
    i0.ɵɵconditional(ctx_r0.dependencySlugs().length ? 19 : -1);
    i0.ɵɵadvance();
    i0.ɵɵconditional(ctx_r0.isCourseMaster() ? 20 : -1);
    i0.ɵɵadvance(6);
    i0.ɵɵrepeater(ctx_r0.values());
} }
function MasterDataComponent_Conditional_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "erp-admin-page", 1)(1, "div", 3);
    i0.ɵɵconditionalCreate(2, MasterDataComponent_Conditional_1_Conditional_2_Template, 5, 1)(3, MasterDataComponent_Conditional_1_Conditional_3_Template, 2, 1, "a", 22);
    i0.ɵɵelementEnd();
    i0.ɵɵconditionalCreate(4, MasterDataComponent_Conditional_1_Conditional_4_Template, 2, 1, "p", 6);
    i0.ɵɵconditionalCreate(5, MasterDataComponent_Conditional_1_Conditional_5_Template, 2, 1, "p", 7);
    i0.ɵɵelementStart(6, "div", 8)(7, "main", 9);
    i0.ɵɵconditionalCreate(8, MasterDataComponent_Conditional_1_Conditional_8_Template, 18, 5, "section", 10)(9, MasterDataComponent_Conditional_1_Conditional_9_Template, 29, 5, "section", 11);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵproperty("title", ctx_r0.pageTitle())("layout", ctx_r0.isViewPage() ? "collection" : "default");
    i0.ɵɵadvance(2);
    i0.ɵɵconditional(ctx_r0.isViewPage() ? 2 : 3);
    i0.ɵɵadvance(2);
    i0.ɵɵconditional(ctx_r0.message() ? 4 : -1);
    i0.ɵɵadvance();
    i0.ɵɵconditional(ctx_r0.error() ? 5 : -1);
    i0.ɵɵadvance(3);
    i0.ɵɵconditional(ctx_r0.isCreatePage() ? 8 : 9);
} }
function MasterDataComponent_Conditional_2_Template(rf, ctx) { if (rf & 1) {
    const _r17 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "erp-confirm-dialog", 42);
    i0.ɵɵlistener("cancelled", function MasterDataComponent_Conditional_2_Template_erp_confirm_dialog_cancelled_0_listener() { i0.ɵɵrestoreView(_r17); const ctx_r0 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r0.cancelConfirmation()); })("confirmed", function MasterDataComponent_Conditional_2_Template_erp_confirm_dialog_confirmed_0_listener() { i0.ɵɵrestoreView(_r17); const ctx_r0 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r0.confirmRequestedAction()); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const dialog_r18 = ctx;
    i0.ɵɵproperty("open", true)("eyebrow", dialog_r18.eyebrow)("title", dialog_r18.title)("message", dialog_r18.message)("confirmLabel", dialog_r18.confirmLabel)("destructive", dialog_r18.destructive);
} }
const DEPENDENCY_CHAINS = {
    level: ['college', 'department'],
    course: ['college', 'department', 'level'],
    state: ['country'],
    district: ['country', 'state'],
    city: ['country', 'state', 'district'],
};
export class MasterDataComponent {
    api = inject(ApiService);
    masterDataStore = inject(MasterDataStore);
    route = inject(ActivatedRoute);
    router = inject(Router);
    slug = toSignal(this.route.paramMap.pipe(map((params) => params.get('typeSlug') || '')), { initialValue: '' });
    editId = toSignal(this.route.paramMap.pipe(map((params) => params.get('id') || '')), {
        initialValue: '',
    });
    mode = toSignal(this.route.data.pipe(map((data) => data['mode'] || 'view')), {
        initialValue: 'view',
    });
    types = this.masterDataStore.types;
    customTypeCount = computed(() => this.types().filter((type) => type.isCustom).length, ...(ngDevMode ? [{ debugName: "customTypeCount" }] : /* istanbul ignore next */ []));
    values = signal([], ...(ngDevMode ? [{ debugName: "values" }] : /* istanbul ignore next */ []));
    valueTotal = signal(0, ...(ngDevMode ? [{ debugName: "valueTotal" }] : /* istanbul ignore next */ []));
    dependencyValues = signal({}, ...(ngDevMode ? [{ debugName: "dependencyValues" }] : /* istanbul ignore next */ []));
    loading = signal(false, ...(ngDevMode ? [{ debugName: "loading" }] : /* istanbul ignore next */ []));
    message = signal('', ...(ngDevMode ? [{ debugName: "message" }] : /* istanbul ignore next */ []));
    error = signal('', ...(ngDevMode ? [{ debugName: "error" }] : /* istanbul ignore next */ []));
    editingId = signal(null, ...(ngDevMode ? [{ debugName: "editingId" }] : /* istanbul ignore next */ []));
    confirmDialog = signal(null, ...(ngDevMode ? [{ debugName: "confirmDialog" }] : /* istanbul ignore next */ []));
    baseRowActions = [
        { id: 'edit', label: 'Edit', icon: 'edit' },
        { id: 'delete', label: 'Delete', icon: 'delete', destructive: true, separator: true },
    ];
    courseRowActions = [
        { id: 'configure', label: 'Configure course', icon: 'edit' },
        { id: 'edit', label: 'Edit name', icon: 'edit' },
        { id: 'delete', label: 'Delete', icon: 'delete', destructive: true, separator: true },
    ];
    name = '';
    courseExamPattern = 'semester';
    courseCode = '';
    courseDurationYears = 4;
    courseTotalSemesters = 8;
    courseDefaultAcademicYear = 1;
    selectedDependencies = {};
    search = '';
    customName = '';
    customParent = '';
    editingValue = null;
    valuesRequestId = 0;
    currentType = () => this.types().find((type) => type.slug === this.slug());
    isCreatePage = computed(() => this.mode() === 'create', ...(ngDevMode ? [{ debugName: "isCreatePage" }] : /* istanbul ignore next */ []));
    isViewPage = computed(() => this.mode() === 'view', ...(ngDevMode ? [{ debugName: "isViewPage" }] : /* istanbul ignore next */ []));
    isCourseMaster = computed(() => this.slug() === 'course', ...(ngDevMode ? [{ debugName: "isCourseMaster" }] : /* istanbul ignore next */ []));
    pageTitle = computed(() => {
        const type = this.currentType()?.name || this.titleFromSlug(this.slug());
        if (this.slug() === 'custom')
            return this.isCreatePage() ? 'Create Custom Master' : 'Custom Masters';
        if (this.editId())
            return `Edit ${type}`;
        return this.isCreatePage() ? `Create ${type}` : type;
    }, ...(ngDevMode ? [{ debugName: "pageTitle" }] : /* istanbul ignore next */ []));
    createRoute = computed(() => ['/admin/master-data', this.slug(), 'create'], ...(ngDevMode ? [{ debugName: "createRoute" }] : /* istanbul ignore next */ []));
    viewRoute = computed(() => ['/admin/master-data', this.slug(), 'view'], ...(ngDevMode ? [{ debugName: "viewRoute" }] : /* istanbul ignore next */ []));
    constructor() {
        effect(() => {
            const slug = this.slug();
            const editId = this.editId();
            this.mode();
            this.loading.set(true);
            this.error.set('');
            this.values.set([]);
            this.valueTotal.set(0);
            if (!editId)
                this.reset();
            this.loadTypes(() => {
                if (slug !== 'custom')
                    this.loadValues();
            });
        });
    }
    loadTypes(done, force = false) {
        this.masterDataStore.load(force).subscribe({
            next: () => done?.(),
            error: (error) => this.fail(error),
        });
    }
    loadValues() {
        const type = this.currentType();
        if (!type)
            return;
        const requestId = ++this.valuesRequestId;
        this.loading.set(true);
        this.api.masterValues(type.slug, { search: this.search }).subscribe({
            next: ({ items, pagination }) => {
                if (requestId !== this.valuesRequestId || type.slug !== this.slug())
                    return;
                this.values.set(items);
                this.valueTotal.set(pagination.total);
                this.loading.set(false);
                this.syncEditRoute(items);
            },
            error: (e) => {
                if (requestId === this.valuesRequestId)
                    this.fail(e);
            },
        });
        this.selectedDependencies = {};
        this.dependencyValues.set({});
        for (const dependencySlug of this.dependencySlugs()) {
            this.api.masterValues(dependencySlug, { active: true }).subscribe(({ items }) => {
                this.dependencyValues.update((values) => ({ ...values, [dependencySlug]: items }));
                this.resolveEditingDependencies();
            });
        }
    }
    save() {
        if (!this.name.trim())
            return;
        if (this.isCourseMaster() && !/^[A-Za-z0-9]{2,12}$/.test(this.courseCode.trim())) {
            this.error.set('Enter a course code containing 2 to 12 letters or numbers.');
            return;
        }
        const dependencies = this.dependencySlugs();
        if (dependencies.some((slug) => !this.selectedDependencies[slug])) {
            this.error.set('Select every required dependency before saving.');
            return;
        }
        const parentId = dependencies.length ? this.selectedDependencies[dependencies.at(-1)] : null;
        const body = {
            name: this.name,
            parentId,
            metadata: this.isCourseMaster() ? this.courseMetadata() : {},
        };
        const request = this.editingId()
            ? this.api.updateMasterValue(this.slug(), this.editingId(), body)
            : this.api.createMasterValue(this.slug(), body);
        request.subscribe({
            next: () => {
                this.reset();
                this.message.set('Value saved successfully.');
                this.loadValues();
                void this.router.navigate(this.viewRoute());
            },
            error: (e) => this.fail(e),
        });
    }
    edit(item) {
        this.editingId.set(item._id);
        this.name = item.name;
        this.editingValue = item;
        if (this.slug() === 'course')
            this.applyCourseMetadata(item);
        this.resolveEditingDependencies();
    }
    reset() {
        this.editingId.set(null);
        this.editingValue = null;
        this.name = '';
        this.courseExamPattern = 'semester';
        this.courseCode = '';
        this.courseDurationYears = 4;
        this.courseTotalSemesters = 8;
        this.courseDefaultAcademicYear = 1;
        this.selectedDependencies = {};
    }
    dependencySlugs() {
        const type = this.currentType();
        if (!type)
            return [];
        return DEPENDENCY_CHAINS[type.slug] || (type.parentTypeSlug ? [type.parentTypeSlug] : []);
    }
    dependencyLabel(slug) {
        return this.types().find((type) => type.slug === slug)?.name || slug;
    }
    dependencyOptions(index) {
        const chain = this.dependencySlugs();
        const slug = chain[index];
        const values = this.dependencyValues()[slug] || [];
        if (index === 0)
            return values;
        const parentId = this.selectedDependencies[chain[index - 1]];
        return parentId ? values.filter((value) => value.parentId === parentId) : [];
    }
    dependencyChanged(index) {
        const chain = this.dependencySlugs();
        for (let next = index + 1; next < chain.length; next += 1)
            this.selectedDependencies[chain[next]] = '';
    }
    courseYearOptions() {
        return Array.from({ length: Math.max(1, Number(this.courseDurationYears) || 1) }, (_, index) => index + 1);
    }
    parentPath(item) {
        const chain = this.dependencySlugs();
        const names = [];
        let parentId = item.parentId;
        for (let index = chain.length - 1; index >= 0 && parentId; index -= 1) {
            const value = this.dependencyValues()[chain[index]]?.find((candidate) => candidate._id === parentId);
            if (!value)
                break;
            names.unshift(value.name);
            parentId = value.parentId;
        }
        return names.join(' → ') || '—';
    }
    toggle(item) {
        this.api
            .updateMasterValue(this.slug(), item._id, { isActive: !item.isActive })
            .subscribe(() => this.loadValues());
    }
    handleRowAction(action, item) {
        if (action === 'edit' || action === 'configure')
            void this.router.navigate(['/admin/master-data', this.slug(), item._id, 'edit']);
        if (action === 'delete')
            this.remove(item);
    }
    requestConfirmation(options) {
        this.confirmDialog.set(options);
    }
    cancelConfirmation() {
        this.confirmDialog.set(null);
    }
    confirmRequestedAction() {
        const dialog = this.confirmDialog();
        if (!dialog)
            return;
        this.confirmDialog.set(null);
        dialog.action();
    }
    remove(item) {
        this.requestConfirmation({
            eyebrow: 'Master Data',
            title: 'Delete master value?',
            message: `Delete ${item.name}? Forms and filters may depend on this value.`,
            confirmLabel: 'Delete value',
            destructive: true,
            action: () => {
                this.api
                    .deleteMasterValue(this.slug(), item._id)
                    .subscribe({ next: () => this.loadValues(), error: (e) => this.fail(e) });
            },
        });
    }
    importFile(event) {
        const file = event.target.files?.[0];
        if (!file)
            return;
        this.api.importMasterValues(this.slug(), file).subscribe({
            next: ({ imported }) => {
                this.message.set(`${imported} row(s) imported.`);
                this.loadValues();
            },
            error: (e) => this.fail(e),
        });
    }
    createCustom() {
        if (!this.customName.trim())
            return;
        this.api
            .createMasterType({ name: this.customName, parentTypeSlug: this.customParent || null })
            .subscribe({
            next: () => {
                this.customName = '';
                this.customParent = '';
                this.message.set('Custom master created.');
                this.loadTypes(undefined, true);
                void this.router.navigate(['/admin/master-data/custom/view']);
            },
            error: (e) => this.fail(e),
        });
    }
    fail(error) {
        this.error.set(error.error?.message || 'The operation failed.');
        this.loading.set(false);
    }
    resolveEditingDependencies() {
        if (!this.editingValue)
            return;
        const chain = this.dependencySlugs();
        let parentId = this.editingValue.parentId;
        const selected = {};
        for (let index = chain.length - 1; index >= 0 && parentId; index -= 1) {
            selected[chain[index]] = parentId;
            parentId =
                this.dependencyValues()[chain[index]]?.find((value) => value._id === parentId)?.parentId ||
                    null;
        }
        this.selectedDependencies = selected;
    }
    courseMetadata() {
        return {
            courseCode: this.courseCode.trim().toUpperCase(),
            examPattern: this.courseExamPattern,
            durationYears: Number(this.courseDurationYears) || 1,
            totalSemesters: Number(this.courseTotalSemesters) ||
                Math.max(2, (Number(this.courseDurationYears) || 1) * 2),
            defaultAcademicYear: Math.min(Number(this.courseDurationYears) || 1, Math.max(1, Number(this.courseDefaultAcademicYear) || 1)),
        };
    }
    applyCourseMetadata(item) {
        const metadata = item.metadata || {};
        this.courseCode = String(metadata['courseCode'] || '');
        this.courseExamPattern = metadata['examPattern'] === 'year' ? 'year' : 'semester';
        this.courseDurationYears = Number(metadata['durationYears'] || 4);
        this.courseTotalSemesters = Number(metadata['totalSemesters'] || this.courseDurationYears * 2);
        this.courseDefaultAcademicYear = Number(metadata['defaultAcademicYear'] || 1);
    }
    syncEditRoute(items) {
        const id = this.editId();
        if (!id)
            return;
        const item = items.find((value) => value._id === id);
        if (item)
            this.edit(item);
    }
    titleFromSlug(slug) {
        return slug
            ? slug
                .split('-')
                .filter(Boolean)
                .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
                .join(' ')
            : 'Master Data';
    }
    static ɵfac = function MasterDataComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || MasterDataComponent)(); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: MasterDataComponent, selectors: [["erp-master-data"]], decls: 3, vars: 2, consts: [["eyebrow", "Master Data", "description", "Create reusable data sources for dynamic dropdowns.", "variant", "minimal", 3, "title", "layout"], ["eyebrow", "Master Data", "description", "Add, edit, activate, import, and organize database values.", "variant", "minimal", 3, "title", "layout"], [3, "open", "eyebrow", "title", "message", "confirmLabel", "destructive"], ["page-actions", "", 1, "master-page-actions"], ["routerLink", "/admin/master-data/custom/create", 1, "erp-button", "erp-button--primary"], ["routerLink", "/admin/master-data/custom/view", 1, "erp-button", "erp-button--secondary"], [1, "erp-notice", "erp-notice--success"], [1, "erp-notice", "erp-notice--error"], [1, "master-data-workspace"], [1, "erp-main-column"], [1, "erp-card", "erp-card--padded", "master-create-card"], [1, "erp-card", "erp-table-shell", "master-table-card"], [1, "erp-card__header"], [1, "erp-form-grid", "master-value-grid"], ["placeholder", "e.g. Board, Religion, Category", 1, "erp-control", 3, "ngModelChange", "ngModel"], [1, "erp-control", 3, "ngModelChange", "ngModel"], ["value", ""], [3, "value"], ["type", "button", 1, "erp-button", "erp-button--primary", 3, "click"], [1, "erp-table-toolbar"], [1, "erp-status"], ["colspan", "4", 1, "erp-empty-state"], [1, "erp-button", "erp-button--secondary", 3, "routerLink"], [1, "erp-button", "erp-button--primary", 3, "routerLink"], [1, "erp-button", "erp-button--secondary", "upload"], ["type", "file", "accept", ".csv,.xlsx,.xls", 3, "change"], ["placeholder", "Enter value name", 1, "erp-control", 3, "ngModelChange", "ngModel"], ["type", "button", 1, "erp-button", "erp-button--secondary"], ["maxlength", "12", "placeholder", "e.g. BCA", 1, "erp-control", 3, "ngModelChange", "ngModel"], ["value", "semester"], ["value", "year"], ["type", "number", "min", "1", "max", "10", 1, "erp-control", 3, "ngModelChange", "ngModel"], ["type", "number", "min", "1", "max", "20", 1, "erp-control", 3, "ngModelChange", "ngModel"], [3, "ngValue"], ["type", "button", 1, "erp-button", "erp-button--secondary", 3, "click"], [1, "erp-table-toolbar__actions"], ["placeholder", "Search values", 1, "erp-control", 3, "ngModelChange", "keyup.enter", "ngModel"], [1, "erp-table-shell__scroll"], [1, "erp-table-shell__actions"], ["type", "button", 1, "erp-status", 3, "click"], [3, "selected", "items"], [1, "erp-empty-state"], [3, "cancelled", "confirmed", "open", "eyebrow", "title", "message", "confirmLabel", "destructive"]], template: function MasterDataComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵconditionalCreate(0, MasterDataComponent_Conditional_0_Template, 10, 6, "erp-admin-page", 0)(1, MasterDataComponent_Conditional_1_Template, 10, 6, "erp-admin-page", 1);
            i0.ɵɵconditionalCreate(2, MasterDataComponent_Conditional_2_Template, 1, 6, "erp-confirm-dialog", 2);
        } if (rf & 2) {
            let tmp_1_0;
            i0.ɵɵconditional(ctx.slug() === "custom" ? 0 : 1);
            i0.ɵɵadvance(2);
            i0.ɵɵconditional((tmp_1_0 = ctx.confirmDialog()) ? 2 : -1, tmp_1_0);
        } }, dependencies: [AdminPageComponent,
            CompactActionMenuComponent,
            ConfirmDialogComponent,
            FormsModule, i1.NgSelectOption, i1.ɵNgSelectMultipleOption, i1.DefaultValueAccessor, i1.NumberValueAccessor, i1.SelectControlValueAccessor, i1.NgControlStatus, i1.MaxLengthValidator, i1.MinValidator, i1.MaxValidator, i1.NgModel, RouterLink], encapsulation: 2, changeDetection: 0 });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MasterDataComponent, [{
        type: Component,
        args: [{ selector: 'erp-master-data', imports: [
                    AdminPageComponent,
                    CompactActionMenuComponent,
                    ConfirmDialogComponent,
                    FormsModule,
                    RouterLink,
                ], changeDetection: ChangeDetectionStrategy.OnPush, template: "@if (slug() === 'custom') {\n  <erp-admin-page\n    eyebrow=\"Master Data\"\n    [title]=\"pageTitle()\"\n    description=\"Create reusable data sources for dynamic dropdowns.\"\n    variant=\"minimal\"\n    [layout]=\"isViewPage() ? 'collection' : 'default'\"\n  >\n    <div page-actions class=\"master-page-actions\">\n      @if (isViewPage()) {\n        <a class=\"erp-button erp-button--primary\" routerLink=\"/admin/master-data/custom/create\"\n          >Create custom</a\n        >\n      } @else {\n        <a class=\"erp-button erp-button--secondary\" routerLink=\"/admin/master-data/custom/view\"\n          >View custom masters</a\n        >\n      }\n    </div>\n    @if (message()) {\n      <p class=\"erp-notice erp-notice--success\">{{ message() }}</p>\n    }\n    @if (error()) {\n      <p class=\"erp-notice erp-notice--error\">{{ error() }}</p>\n    }\n    <div class=\"master-data-workspace\">\n      <main class=\"erp-main-column\">\n        @if (isCreatePage()) {\n          <section class=\"erp-card erp-card--padded master-create-card\">\n            <div class=\"erp-card__header\">\n              <div>\n                <h2>Create custom master</h2>\n                <p>Use clear reusable names so future forms stay easy to maintain.</p>\n              </div>\n            </div>\n            <div class=\"erp-form-grid master-value-grid\">\n              <label\n                ><span>Name</span\n                ><input\n                  class=\"erp-control\"\n                  [(ngModel)]=\"customName\"\n                  placeholder=\"e.g. Board, Religion, Category\"\n              /></label>\n              <label\n                ><span>Parent master (optional)</span\n                ><select class=\"erp-control\" [(ngModel)]=\"customParent\">\n                  <option value=\"\">No parent</option>\n                  @for (type of types(); track type.slug) {\n                    <option [value]=\"type.slug\">{{ type.name }}</option>\n                  }\n                </select></label\n              >\n              <button class=\"erp-button erp-button--primary\" type=\"button\" (click)=\"createCustom()\">\n                Create master\n              </button>\n            </div>\n          </section>\n        } @else {\n          <section class=\"erp-card erp-table-shell master-table-card\">\n            <div class=\"erp-table-toolbar\">\n              <div>\n                <h2>\n                  Custom masters <small>{{ customTypeCount() }}</small>\n                </h2>\n                <p>Review custom dropdown data sources separately from creation.</p>\n              </div>\n            </div>\n            <table>\n              <thead>\n                <tr>\n                  <th>Name</th>\n                  <th>Slug</th>\n                  <th>Parent</th>\n                  <th>Status</th>\n                </tr>\n              </thead>\n              <tbody>\n                @for (type of types(); track type.slug) {\n                  @if (type.isCustom) {\n                    <tr>\n                      <td>\n                        <strong>{{ type.name }}</strong>\n                      </td>\n                      <td>{{ type.slug }}</td>\n                      <td>{{ type.parentTypeSlug || '\u2014' }}</td>\n                      <td><span class=\"erp-status\">Active</span></td>\n                    </tr>\n                  }\n                } @empty {\n                  <tr>\n                    <td colspan=\"4\" class=\"erp-empty-state\">No custom masters created.</td>\n                  </tr>\n                }\n              </tbody>\n            </table>\n          </section>\n        }\n      </main>\n    </div>\n  </erp-admin-page>\n} @else {\n  <erp-admin-page\n    eyebrow=\"Master Data\"\n    [title]=\"pageTitle()\"\n    description=\"Add, edit, activate, import, and organize database values.\"\n    variant=\"minimal\"\n    [layout]=\"isViewPage() ? 'collection' : 'default'\"\n  >\n    <div page-actions class=\"master-page-actions\">\n      @if (isViewPage()) {\n        <a class=\"erp-button erp-button--primary\" [routerLink]=\"createRoute()\">Create value</a>\n        <label class=\"erp-button erp-button--secondary upload\"\n          >Bulk upload<input type=\"file\" accept=\".csv,.xlsx,.xls\" (change)=\"importFile($event)\"\n        /></label>\n      } @else {\n        <a class=\"erp-button erp-button--secondary\" [routerLink]=\"viewRoute()\">View values</a>\n      }\n    </div>\n    @if (message()) {\n      <p class=\"erp-notice erp-notice--success\">{{ message() }}</p>\n    }\n    @if (error()) {\n      <p class=\"erp-notice erp-notice--error\">{{ error() }}</p>\n    }\n    <div class=\"master-data-workspace\">\n      <main class=\"erp-main-column\">\n        @if (isCreatePage()) {\n          <section class=\"erp-card erp-card--padded master-create-card\">\n            <div class=\"erp-card__header\">\n              <div>\n                <h2>{{ editingId() ? 'Edit value' : 'Add value' }}</h2>\n                <p>\n                  Keep values consistent because these records power form dropdowns and filters.\n                </p>\n              </div>\n            </div>\n            <div class=\"erp-form-grid master-value-grid\">\n              <label\n                ><span>Name *</span\n                ><input class=\"erp-control\" [(ngModel)]=\"name\" placeholder=\"Enter value name\"\n              /></label>\n              @for (dependencySlug of dependencySlugs(); track dependencySlug; let index = $index) {\n                <label>\n                  <span>{{ dependencyLabel(dependencySlug) }} *</span>\n                  <select\n                    class=\"erp-control\"\n                    [(ngModel)]=\"selectedDependencies[dependencySlug]\"\n                    (ngModelChange)=\"dependencyChanged(index)\"\n                  >\n                    <option value=\"\">Select {{ dependencyLabel(dependencySlug) }}</option>\n                    @for (option of dependencyOptions(index); track option._id) {\n                      <option [value]=\"option._id\">{{ option.name }}</option>\n                    }\n                  </select>\n                </label>\n              }\n              @if (isCourseMaster()) {\n                <label\n                  ><span>Course code *</span\n                  ><input\n                    class=\"erp-control\"\n                    [(ngModel)]=\"courseCode\"\n                    maxlength=\"12\"\n                    placeholder=\"e.g. BCA\"\n                /></label>\n                <label\n                  ><span>Exam pattern *</span\n                  ><select class=\"erp-control\" [(ngModel)]=\"courseExamPattern\">\n                    <option value=\"semester\">Semester-wise exams</option>\n                    <option value=\"year\">Year-wise exams</option>\n                  </select></label\n                >\n                <label\n                  ><span>Duration years *</span\n                  ><input\n                    class=\"erp-control\"\n                    type=\"number\"\n                    min=\"1\"\n                    max=\"10\"\n                    [(ngModel)]=\"courseDurationYears\"\n                /></label>\n                <label\n                  ><span>Total semesters *</span\n                  ><input\n                    class=\"erp-control\"\n                    type=\"number\"\n                    min=\"1\"\n                    max=\"20\"\n                    [(ngModel)]=\"courseTotalSemesters\"\n                /></label>\n                <label\n                  ><span>Default current academic year *</span\n                  ><select class=\"erp-control\" [(ngModel)]=\"courseDefaultAcademicYear\">\n                    @for (year of courseYearOptions(); track year) {\n                      <option [ngValue]=\"year\">Year {{ year }}</option>\n                    }\n                  </select></label\n                >\n              }\n              <button class=\"erp-button erp-button--primary\" type=\"button\" (click)=\"save()\">\n                {{ editingId() ? 'Save changes' : 'Add value' }}\n              </button>\n              @if (editingId()) {\n                <button class=\"erp-button erp-button--secondary\" type=\"button\" (click)=\"reset()\">\n                  Cancel\n                </button>\n              }\n            </div>\n          </section>\n        } @else {\n          <section class=\"erp-card erp-table-shell master-table-card\">\n            <div class=\"erp-table-toolbar\">\n              <div>\n                <h2>\n                  Saved values <small>{{ valueTotal() }}</small>\n                </h2>\n                <p>Search, review and manage this master list separately from creation.</p>\n              </div>\n              <div class=\"erp-table-toolbar__actions\">\n                <input\n                  class=\"erp-control\"\n                  [(ngModel)]=\"search\"\n                  placeholder=\"Search values\"\n                  (keyup.enter)=\"loadValues()\"\n                />\n                <button\n                  class=\"erp-button erp-button--secondary\"\n                  type=\"button\"\n                  (click)=\"loadValues()\"\n                >\n                  Search\n                </button>\n              </div>\n            </div>\n            <div class=\"erp-table-shell__scroll\">\n              <table>\n                <thead>\n                  <tr>\n                    <th>Name</th>\n                    @if (dependencySlugs().length) {\n                      <th>Depends on</th>\n                    }\n                    @if (isCourseMaster()) {\n                      <th>Configuration</th>\n                    }\n                    <th>Status</th>\n                    <th class=\"erp-table-shell__actions\">Actions</th>\n                  </tr>\n                </thead>\n                <tbody>\n                  @for (item of values(); track item._id) {\n                    <tr>\n                      <td>\n                        <strong>{{ item.name }}</strong>\n                      </td>\n                      @if (dependencySlugs().length) {\n                        <td>{{ parentPath(item) }}</td>\n                      }\n                      @if (isCourseMaster()) {\n                        <td>\n                          <strong\n                            >{{ item.metadata?.['courseCode'] || 'Code not set' }} \u00B7\n                            {{\n                              item.metadata?.['examPattern'] === 'year'\n                                ? 'Year-wise exams'\n                                : 'Semester-wise exams'\n                            }}</strong\n                          >\n                          <small\n                            >{{ item.metadata?.['durationYears'] || 4 }} years \u00B7\n                            {{ item.metadata?.['totalSemesters'] || 8 }} semesters \u00B7 fee type\n                            selected during fee setup</small\n                          >\n                        </td>\n                      }\n                      <td>\n                        <button\n                          class=\"erp-status\"\n                          [class.erp-status--neutral]=\"!item.isActive\"\n                          type=\"button\"\n                          (click)=\"toggle(item)\"\n                        >\n                          {{ item.isActive ? 'Enabled' : 'Disabled' }}\n                        </button>\n                      </td>\n                      <td class=\"erp-table-shell__actions\">\n                        <erp-compact-action-menu\n                          [items]=\"isCourseMaster() ? courseRowActions : baseRowActions\"\n                          (selected)=\"handleRowAction($event, item)\"\n                        />\n                      </td>\n                    </tr>\n                  } @empty {\n                    <tr>\n                      <td\n                        [attr.colspan]=\"\n                          (dependencySlugs().length ? 4 : 3) + (isCourseMaster() ? 1 : 0)\n                        \"\n                        class=\"erp-empty-state\"\n                      >\n                        {{ loading() ? 'Loading\u2026' : 'No values found.' }}\n                      </td>\n                    </tr>\n                  }\n                </tbody>\n              </table>\n            </div>\n          </section>\n        }\n      </main>\n    </div>\n  </erp-admin-page>\n}\n\n@if (confirmDialog(); as dialog) {\n  <erp-confirm-dialog\n    [open]=\"true\"\n    [eyebrow]=\"dialog.eyebrow\"\n    [title]=\"dialog.title\"\n    [message]=\"dialog.message\"\n    [confirmLabel]=\"dialog.confirmLabel\"\n    [destructive]=\"dialog.destructive\"\n    (cancelled)=\"cancelConfirmation()\"\n    (confirmed)=\"confirmRequestedAction()\"\n  />\n}\n" }]
    }], () => [], null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(MasterDataComponent, { className: "MasterDataComponent", filePath: "frontend/src/app/features/admin/master-data/master-data.component.ts", lineNumber: 52 }); })();
