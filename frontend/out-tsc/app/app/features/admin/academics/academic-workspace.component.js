import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { forkJoin } from 'rxjs';
import { ApiService } from '../../../core/api.service';
import { AdminPageComponent } from '../../../shared/ui/admin-page/admin-page.component';
import { CompactActionMenuComponent, } from '../../../shared/ui/compact-action-menu/compact-action-menu.component';
import { MultiSelectDropdownComponent, } from '../../../shared/ui/multi-select-dropdown/multi-select-dropdown.component';
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
const _c0 = () => ["faculties", "rooms", "timetable-structures", "timetable-periods"];
const _c1 = () => ["groups", "subjects", "faculties", "rooms", "timetable-masters"];
const _c2 = () => ["groups", "sections", "sets", "subjects", "faculties", "rooms", "timetable-masters", "timetable-structures"];
const _c3 = a0 => [a0];
const _c4 = () => [];
const _c5 = () => ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
const _forTrack0 = ($index, $item) => $item._id;
const _forTrack1 = ($index, $item) => $item.row;
function AcademicWorkspaceComponent_Conditional_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 1);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r0.error());
} }
function AcademicWorkspaceComponent_Conditional_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 2);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r0.message());
} }
function AcademicWorkspaceComponent_Conditional_11_For_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 18);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r3 = ctx.$implicit;
    i0.ɵɵproperty("value", item_r3.name);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(item_r3.name);
} }
function AcademicWorkspaceComponent_Conditional_11_Conditional_8_For_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 19);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r5 = ctx.$implicit;
    i0.ɵɵproperty("ngValue", item_r5);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1("Semester ", item_r5);
} }
function AcademicWorkspaceComponent_Conditional_11_Conditional_8_Template(rf, ctx) { if (rf & 1) {
    const _r4 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "label")(1, "span");
    i0.ɵɵtext(2, "Semester *");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "select", 16);
    i0.ɵɵtwoWayListener("ngModelChange", function AcademicWorkspaceComponent_Conditional_11_Conditional_8_Template_select_ngModelChange_3_listener($event) { i0.ɵɵrestoreView(_r4); const ctx_r0 = i0.ɵɵnextContext(2); i0.ɵɵtwoWayBindingSet(ctx_r0.semester, $event) || (ctx_r0.semester = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵrepeaterCreate(4, AcademicWorkspaceComponent_Conditional_11_Conditional_8_For_5_Template, 2, 2, "option", 19, i0.ɵɵrepeaterTrackByIdentity);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(3);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r0.semester);
    i0.ɵɵadvance();
    i0.ɵɵrepeater(ctx_r0.periodCountOptions);
} }
function AcademicWorkspaceComponent_Conditional_11_Template(rf, ctx) { if (rf & 1) {
    const _r2 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "label")(1, "span");
    i0.ɵɵtext(2, "Academic session *");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "select", 16);
    i0.ɵɵtwoWayListener("ngModelChange", function AcademicWorkspaceComponent_Conditional_11_Template_select_ngModelChange_3_listener($event) { i0.ɵɵrestoreView(_r2); const ctx_r0 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r0.session, $event) || (ctx_r0.session = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementStart(4, "option", 17);
    i0.ɵɵtext(5, "Select session");
    i0.ɵɵelementEnd();
    i0.ɵɵrepeaterCreate(6, AcademicWorkspaceComponent_Conditional_11_For_7_Template, 2, 2, "option", 18, _forTrack0);
    i0.ɵɵelementEnd()();
    i0.ɵɵconditionalCreate(8, AcademicWorkspaceComponent_Conditional_11_Conditional_8_Template, 6, 1, "label");
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(3);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r0.session);
    i0.ɵɵadvance(3);
    i0.ɵɵrepeater(ctx_r0.master("academic"));
    i0.ɵɵadvance(2);
    i0.ɵɵconditional(ctx_r0.section() !== "timetable-masters" ? 8 : -1);
} }
function AcademicWorkspaceComponent_Conditional_12_For_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 18);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r7 = ctx.$implicit;
    i0.ɵɵproperty("value", item_r7._id);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(item_r7.name);
} }
function AcademicWorkspaceComponent_Conditional_12_For_15_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 18);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r8 = ctx.$implicit;
    i0.ɵɵproperty("value", item_r8._id);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(item_r8.name);
} }
function AcademicWorkspaceComponent_Conditional_12_Template(rf, ctx) { if (rf & 1) {
    const _r6 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "label")(1, "span");
    i0.ɵɵtext(2, "University *");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "select", 16);
    i0.ɵɵtwoWayListener("ngModelChange", function AcademicWorkspaceComponent_Conditional_12_Template_select_ngModelChange_3_listener($event) { i0.ɵɵrestoreView(_r6); const ctx_r0 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r0.universityId, $event) || (ctx_r0.universityId = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementStart(4, "option", 17);
    i0.ɵɵtext(5, "Select university");
    i0.ɵɵelementEnd();
    i0.ɵɵrepeaterCreate(6, AcademicWorkspaceComponent_Conditional_12_For_7_Template, 2, 2, "option", 18, _forTrack0);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(8, "label")(9, "span");
    i0.ɵɵtext(10, "College *");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(11, "select", 16);
    i0.ɵɵtwoWayListener("ngModelChange", function AcademicWorkspaceComponent_Conditional_12_Template_select_ngModelChange_11_listener($event) { i0.ɵɵrestoreView(_r6); const ctx_r0 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r0.collegeId, $event) || (ctx_r0.collegeId = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementStart(12, "option", 17);
    i0.ɵɵtext(13, "Select college");
    i0.ɵɵelementEnd();
    i0.ɵɵrepeaterCreate(14, AcademicWorkspaceComponent_Conditional_12_For_15_Template, 2, 2, "option", 18, _forTrack0);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(3);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r0.universityId);
    i0.ɵɵadvance(3);
    i0.ɵɵrepeater(ctx_r0.master("university"));
    i0.ɵɵadvance(5);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r0.collegeId);
    i0.ɵɵadvance(3);
    i0.ɵɵrepeater(ctx_r0.scopedMaster("college", ctx_r0.universityId ? i0.ɵɵpureFunction1(2, _c3, ctx_r0.universityId) : i0.ɵɵpureFunction0(4, _c4)));
} }
function AcademicWorkspaceComponent_Conditional_13_Conditional_4_Template(rf, ctx) { if (rf & 1) {
    const _r10 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "label")(1, "span");
    i0.ɵɵtext(2, "Code *");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "input", 16);
    i0.ɵɵtwoWayListener("ngModelChange", function AcademicWorkspaceComponent_Conditional_13_Conditional_4_Template_input_ngModelChange_3_listener($event) { i0.ɵɵrestoreView(_r10); const ctx_r0 = i0.ɵɵnextContext(2); i0.ɵɵtwoWayBindingSet(ctx_r0.code, $event) || (ctx_r0.code = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(3);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r0.code);
} }
function AcademicWorkspaceComponent_Conditional_13_Template(rf, ctx) { if (rf & 1) {
    const _r9 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "label")(1, "span");
    i0.ɵɵtext(2, "Name *");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "input", 16);
    i0.ɵɵtwoWayListener("ngModelChange", function AcademicWorkspaceComponent_Conditional_13_Template_input_ngModelChange_3_listener($event) { i0.ɵɵrestoreView(_r9); const ctx_r0 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r0.name, $event) || (ctx_r0.name = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd()();
    i0.ɵɵconditionalCreate(4, AcademicWorkspaceComponent_Conditional_13_Conditional_4_Template, 4, 1, "label");
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(3);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r0.name);
    i0.ɵɵadvance();
    i0.ɵɵconditional(ctx_r0.sectionUsesCode() ? 4 : -1);
} }
function AcademicWorkspaceComponent_Conditional_14_For_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 18);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r12 = ctx.$implicit;
    i0.ɵɵproperty("value", item_r12._id);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(item_r12.name);
} }
function AcademicWorkspaceComponent_Conditional_14_For_13_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 19);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r13 = ctx.$implicit;
    i0.ɵɵproperty("ngValue", item_r13);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1("", item_r13, " periods");
} }
function AcademicWorkspaceComponent_Conditional_14_Template(rf, ctx) { if (rf & 1) {
    const _r11 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "label")(1, "span");
    i0.ɵɵtext(2, "Timetable *");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "select", 16);
    i0.ɵɵtwoWayListener("ngModelChange", function AcademicWorkspaceComponent_Conditional_14_Template_select_ngModelChange_3_listener($event) { i0.ɵɵrestoreView(_r11); const ctx_r0 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r0.timetableMasterId, $event) || (ctx_r0.timetableMasterId = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementStart(4, "option", 17);
    i0.ɵɵtext(5, "Select timetable");
    i0.ɵɵelementEnd();
    i0.ɵɵrepeaterCreate(6, AcademicWorkspaceComponent_Conditional_14_For_7_Template, 2, 2, "option", 18, _forTrack0);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(8, "label")(9, "span");
    i0.ɵɵtext(10, "Number of periods *");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(11, "select", 16);
    i0.ɵɵtwoWayListener("ngModelChange", function AcademicWorkspaceComponent_Conditional_14_Template_select_ngModelChange_11_listener($event) { i0.ɵɵrestoreView(_r11); const ctx_r0 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r0.periodCount, $event) || (ctx_r0.periodCount = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵrepeaterCreate(12, AcademicWorkspaceComponent_Conditional_14_For_13_Template, 2, 2, "option", 19, i0.ɵɵrepeaterTrackByIdentity);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(14, "div", 6)(15, "span");
    i0.ɵɵtext(16, "Working days *");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(17, "erp-multi-select-dropdown", 20);
    i0.ɵɵlistener("valueChange", function AcademicWorkspaceComponent_Conditional_14_Template_erp_multi_select_dropdown_valueChange_17_listener($event) { i0.ɵɵrestoreView(_r11); const ctx_r0 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r0.workingDays = $event); });
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(3);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r0.timetableMasterId);
    i0.ɵɵadvance(3);
    i0.ɵɵrepeater(ctx_r0.timetableMasters());
    i0.ɵɵadvance(5);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r0.periodCount);
    i0.ɵɵadvance();
    i0.ɵɵrepeater(ctx_r0.periodCountOptions);
    i0.ɵɵadvance(5);
    i0.ɵɵproperty("options", ctx_r0.dayOptions)("value", ctx_r0.workingDays);
} }
function AcademicWorkspaceComponent_Conditional_15_For_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 18);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r15 = ctx.$implicit;
    i0.ɵɵproperty("value", item_r15._id);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(item_r15.name);
} }
function AcademicWorkspaceComponent_Conditional_15_For_15_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 18);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r16 = ctx.$implicit;
    i0.ɵɵproperty("value", item_r16._id);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(item_r16.name);
} }
function AcademicWorkspaceComponent_Conditional_15_For_23_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 18);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r17 = ctx.$implicit;
    i0.ɵɵproperty("value", item_r17._id);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate2(" Period ", item_r17.periodNumber, "", item_r17.isConfigured ? " \u00B7 configured" : "", " ");
} }
function AcademicWorkspaceComponent_Conditional_15_For_41_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 19);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r18 = ctx.$implicit;
    i0.ɵɵproperty("ngValue", item_r18);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1("", item_r18, " minutes");
} }
function AcademicWorkspaceComponent_Conditional_15_Template(rf, ctx) { if (rf & 1) {
    const _r14 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "label")(1, "span");
    i0.ɵɵtext(2, "Timetable *");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "select", 16);
    i0.ɵɵtwoWayListener("ngModelChange", function AcademicWorkspaceComponent_Conditional_15_Template_select_ngModelChange_3_listener($event) { i0.ɵɵrestoreView(_r14); const ctx_r0 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r0.timetableMasterId, $event) || (ctx_r0.timetableMasterId = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵlistener("ngModelChange", function AcademicWorkspaceComponent_Conditional_15_Template_select_ngModelChange_3_listener() { i0.ɵɵrestoreView(_r14); const ctx_r0 = i0.ɵɵnextContext(); ctx_r0.timetableStructureId = ""; return i0.ɵɵresetView(ctx_r0.timetablePeriodId = ""); });
    i0.ɵɵelementStart(4, "option", 17);
    i0.ɵɵtext(5, "Select timetable");
    i0.ɵɵelementEnd();
    i0.ɵɵrepeaterCreate(6, AcademicWorkspaceComponent_Conditional_15_For_7_Template, 2, 2, "option", 18, _forTrack0);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(8, "label")(9, "span");
    i0.ɵɵtext(10, "Structure *");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(11, "select", 16);
    i0.ɵɵtwoWayListener("ngModelChange", function AcademicWorkspaceComponent_Conditional_15_Template_select_ngModelChange_11_listener($event) { i0.ɵɵrestoreView(_r14); const ctx_r0 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r0.timetableStructureId, $event) || (ctx_r0.timetableStructureId = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵlistener("ngModelChange", function AcademicWorkspaceComponent_Conditional_15_Template_select_ngModelChange_11_listener() { i0.ɵɵrestoreView(_r14); const ctx_r0 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r0.timetablePeriodId = ""); });
    i0.ɵɵelementStart(12, "option", 17);
    i0.ɵɵtext(13, "Select structure");
    i0.ɵɵelementEnd();
    i0.ɵɵrepeaterCreate(14, AcademicWorkspaceComponent_Conditional_15_For_15_Template, 2, 2, "option", 18, _forTrack0);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(16, "label")(17, "span");
    i0.ɵɵtext(18, "Period *");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(19, "select", 16);
    i0.ɵɵlistener("ngModelChange", function AcademicWorkspaceComponent_Conditional_15_Template_select_ngModelChange_19_listener($event) { i0.ɵɵrestoreView(_r14); const ctx_r0 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r0.selectPeriod($event)); });
    i0.ɵɵelementStart(20, "option", 17);
    i0.ɵɵtext(21, "Select period");
    i0.ɵɵelementEnd();
    i0.ɵɵrepeaterCreate(22, AcademicWorkspaceComponent_Conditional_15_For_23_Template, 2, 3, "option", 18, _forTrack0);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(24, "label")(25, "span");
    i0.ɵɵtext(26, "Period type *");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(27, "select", 16);
    i0.ɵɵtwoWayListener("ngModelChange", function AcademicWorkspaceComponent_Conditional_15_Template_select_ngModelChange_27_listener($event) { i0.ɵɵrestoreView(_r14); const ctx_r0 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r0.periodType, $event) || (ctx_r0.periodType = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementStart(28, "option", 21);
    i0.ɵɵtext(29, "Lecture");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(30, "option", 22);
    i0.ɵɵtext(31, "Break");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(32, "label")(33, "span");
    i0.ɵɵtext(34, "From time *");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(35, "input", 23);
    i0.ɵɵtwoWayListener("ngModelChange", function AcademicWorkspaceComponent_Conditional_15_Template_input_ngModelChange_35_listener($event) { i0.ɵɵrestoreView(_r14); const ctx_r0 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r0.startTime, $event) || (ctx_r0.startTime = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(36, "label")(37, "span");
    i0.ɵɵtext(38, "Duration *");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(39, "select", 16);
    i0.ɵɵtwoWayListener("ngModelChange", function AcademicWorkspaceComponent_Conditional_15_Template_select_ngModelChange_39_listener($event) { i0.ɵɵrestoreView(_r14); const ctx_r0 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r0.durationMinutes, $event) || (ctx_r0.durationMinutes = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵrepeaterCreate(40, AcademicWorkspaceComponent_Conditional_15_For_41_Template, 2, 2, "option", 19, i0.ɵɵrepeaterTrackByIdentity);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(42, "label")(43, "span");
    i0.ɵɵtext(44, "To time");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(45, "input", 24);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(3);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r0.timetableMasterId);
    i0.ɵɵadvance(3);
    i0.ɵɵrepeater(ctx_r0.timetableMasters());
    i0.ɵɵadvance(5);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r0.timetableStructureId);
    i0.ɵɵadvance(3);
    i0.ɵɵrepeater(ctx_r0.structuresForMaster());
    i0.ɵɵadvance(5);
    i0.ɵɵproperty("ngModel", ctx_r0.timetablePeriodId);
    i0.ɵɵadvance(3);
    i0.ɵɵrepeater(ctx_r0.periodsForStructure());
    i0.ɵɵadvance(5);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r0.periodType);
    i0.ɵɵadvance(8);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r0.startTime);
    i0.ɵɵadvance(4);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r0.durationMinutes);
    i0.ɵɵadvance();
    i0.ɵɵrepeater(ctx_r0.durationOptions);
    i0.ɵɵadvance(5);
    i0.ɵɵproperty("value", ctx_r0.calculatedEndTime());
} }
function AcademicWorkspaceComponent_Conditional_16_Template(rf, ctx) { if (rf & 1) {
    const _r19 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 6)(1, "span");
    i0.ɵɵtext(2, "Departments *");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "erp-multi-select-dropdown", 25);
    i0.ɵɵlistener("valueChange", function AcademicWorkspaceComponent_Conditional_16_Template_erp_multi_select_dropdown_valueChange_3_listener($event) { i0.ɵɵrestoreView(_r19); const ctx_r0 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r0.departmentIds = $event); });
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("options", ctx_r0.options(ctx_r0.scopedMaster("department", ctx_r0.collegeId ? i0.ɵɵpureFunction1(2, _c3, ctx_r0.collegeId) : i0.ɵɵpureFunction0(4, _c4))))("value", ctx_r0.departmentIds);
} }
function AcademicWorkspaceComponent_Conditional_17_Template(rf, ctx) { if (rf & 1) {
    const _r20 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 6)(1, "span");
    i0.ɵɵtext(2, "Courses");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "erp-multi-select-dropdown", 26);
    i0.ɵɵlistener("valueChange", function AcademicWorkspaceComponent_Conditional_17_Template_erp_multi_select_dropdown_valueChange_3_listener($event) { i0.ɵɵrestoreView(_r20); const ctx_r0 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r0.courseIds = $event); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(4, "div", 6)(5, "span");
    i0.ɵɵtext(6, "Branches");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "erp-multi-select-dropdown", 27);
    i0.ɵɵlistener("valueChange", function AcademicWorkspaceComponent_Conditional_17_Template_erp_multi_select_dropdown_valueChange_7_listener($event) { i0.ɵɵrestoreView(_r20); const ctx_r0 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r0.branchIds = $event); });
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("options", ctx_r0.options(ctx_r0.scopedMaster("course", ctx_r0.levelId ? i0.ɵɵpureFunction1(4, _c3, ctx_r0.levelId) : i0.ɵɵpureFunction0(6, _c4))))("value", ctx_r0.courseIds);
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("options", ctx_r0.options(ctx_r0.master("branch")))("value", ctx_r0.branchIds);
} }
function AcademicWorkspaceComponent_Conditional_18_For_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 18);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r22 = ctx.$implicit;
    i0.ɵɵproperty("value", item_r22._id);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(item_r22.name);
} }
function AcademicWorkspaceComponent_Conditional_18_Template(rf, ctx) { if (rf & 1) {
    const _r21 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "label")(1, "span");
    i0.ɵɵtext(2, "Level/course type");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "select", 16);
    i0.ɵɵtwoWayListener("ngModelChange", function AcademicWorkspaceComponent_Conditional_18_Template_select_ngModelChange_3_listener($event) { i0.ɵɵrestoreView(_r21); const ctx_r0 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r0.levelId, $event) || (ctx_r0.levelId = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementStart(4, "option", 17);
    i0.ɵɵtext(5, "Select level");
    i0.ɵɵelementEnd();
    i0.ɵɵrepeaterCreate(6, AcademicWorkspaceComponent_Conditional_18_For_7_Template, 2, 2, "option", 18, _forTrack0);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(3);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r0.levelId);
    i0.ɵɵadvance(3);
    i0.ɵɵrepeater(ctx_r0.scopedMaster("level", ctx_r0.departmentIds));
} }
function AcademicWorkspaceComponent_Conditional_19_Template(rf, ctx) { if (rf & 1) {
    const _r23 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 6)(1, "span");
    i0.ɵɵtext(2, "Groups *");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "erp-multi-select-dropdown", 28);
    i0.ɵɵlistener("valueChange", function AcademicWorkspaceComponent_Conditional_19_Template_erp_multi_select_dropdown_valueChange_3_listener($event) { i0.ɵɵrestoreView(_r23); const ctx_r0 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r0.groupIds = $event); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "small");
    i0.ɵɵtext(5, "A section may be mapped to multiple groups.");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("options", ctx_r0.options(ctx_r0.groupsForPeriod(), false))("value", ctx_r0.groupIds);
} }
function AcademicWorkspaceComponent_Conditional_20_For_7_Conditional_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 18);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r25 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵproperty("value", item_r25._id);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(item_r25.name);
} }
function AcademicWorkspaceComponent_Conditional_20_For_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵconditionalCreate(0, AcademicWorkspaceComponent_Conditional_20_For_7_Conditional_0_Template, 2, 2, "option", 18);
} if (rf & 2) {
    const item_r25 = ctx.$implicit;
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵconditional(item_r25.academicSession === ctx_r0.session && item_r25.semester === ctx_r0.semester ? 0 : -1);
} }
function AcademicWorkspaceComponent_Conditional_20_Template(rf, ctx) { if (rf & 1) {
    const _r24 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "label")(1, "span");
    i0.ɵɵtext(2, "Group *");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "select", 16);
    i0.ɵɵtwoWayListener("ngModelChange", function AcademicWorkspaceComponent_Conditional_20_Template_select_ngModelChange_3_listener($event) { i0.ɵɵrestoreView(_r24); const ctx_r0 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r0.groupId, $event) || (ctx_r0.groupId = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementStart(4, "option", 17);
    i0.ɵɵtext(5, "Select group");
    i0.ɵɵelementEnd();
    i0.ɵɵrepeaterCreate(6, AcademicWorkspaceComponent_Conditional_20_For_7_Template, 1, 1, null, null, _forTrack0);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(3);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r0.groupId);
    i0.ɵɵadvance(3);
    i0.ɵɵrepeater(ctx_r0.groups());
} }
function AcademicWorkspaceComponent_Conditional_21_For_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 18);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r27 = ctx.$implicit;
    i0.ɵɵproperty("value", item_r27._id);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(item_r27.name);
} }
function AcademicWorkspaceComponent_Conditional_21_Template(rf, ctx) { if (rf & 1) {
    const _r26 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "label")(1, "span");
    i0.ɵɵtext(2, "Section *");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "select", 16);
    i0.ɵɵtwoWayListener("ngModelChange", function AcademicWorkspaceComponent_Conditional_21_Template_select_ngModelChange_3_listener($event) { i0.ɵɵrestoreView(_r26); const ctx_r0 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r0.sectionId, $event) || (ctx_r0.sectionId = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementStart(4, "option", 17);
    i0.ɵɵtext(5, "Select section");
    i0.ɵɵelementEnd();
    i0.ɵɵrepeaterCreate(6, AcademicWorkspaceComponent_Conditional_21_For_7_Template, 2, 2, "option", 18, _forTrack0);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(3);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r0.sectionId);
    i0.ɵɵadvance(3);
    i0.ɵɵrepeater(ctx_r0.availableSections());
} }
function AcademicWorkspaceComponent_Conditional_22_For_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 18);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r29 = ctx.$implicit;
    i0.ɵɵproperty("value", item_r29._id);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(item_r29.name);
} }
function AcademicWorkspaceComponent_Conditional_22_For_15_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 18);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r30 = ctx.$implicit;
    i0.ɵɵproperty("value", item_r30._id);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate2("", item_r30.studentName, " \u00B7 ", item_r30.studentId);
} }
function AcademicWorkspaceComponent_Conditional_22_Template(rf, ctx) { if (rf & 1) {
    const _r28 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "label")(1, "span");
    i0.ɵɵtext(2, "Set *");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "select", 16);
    i0.ɵɵtwoWayListener("ngModelChange", function AcademicWorkspaceComponent_Conditional_22_Template_select_ngModelChange_3_listener($event) { i0.ɵɵrestoreView(_r28); const ctx_r0 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r0.setId, $event) || (ctx_r0.setId = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementStart(4, "option", 17);
    i0.ɵɵtext(5, "Select set");
    i0.ɵɵelementEnd();
    i0.ɵɵrepeaterCreate(6, AcademicWorkspaceComponent_Conditional_22_For_7_Template, 2, 2, "option", 18, _forTrack0);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(8, "label")(9, "span");
    i0.ɵɵtext(10, "Approved student *");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(11, "select", 16);
    i0.ɵɵtwoWayListener("ngModelChange", function AcademicWorkspaceComponent_Conditional_22_Template_select_ngModelChange_11_listener($event) { i0.ɵɵrestoreView(_r28); const ctx_r0 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r0.studentAdmissionId, $event) || (ctx_r0.studentAdmissionId = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementStart(12, "option", 17);
    i0.ɵɵtext(13, "Select student");
    i0.ɵɵelementEnd();
    i0.ɵɵrepeaterCreate(14, AcademicWorkspaceComponent_Conditional_22_For_15_Template, 2, 3, "option", 18, _forTrack0);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(3);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r0.setId);
    i0.ɵɵadvance(3);
    i0.ɵɵrepeater(ctx_r0.availableSets());
    i0.ɵɵadvance(5);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r0.studentAdmissionId);
    i0.ɵɵadvance(3);
    i0.ɵɵrepeater(ctx_r0.students());
} }
function AcademicWorkspaceComponent_Conditional_23_Template(rf, ctx) { if (rf & 1) {
    const _r31 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "label")(1, "span");
    i0.ɵɵtext(2, "Subject name in Hindi");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "input", 16);
    i0.ɵɵtwoWayListener("ngModelChange", function AcademicWorkspaceComponent_Conditional_23_Template_input_ngModelChange_3_listener($event) { i0.ɵɵrestoreView(_r31); const ctx_r0 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r0.hindiName, $event) || (ctx_r0.hindiName = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(4, "label")(5, "span");
    i0.ɵɵtext(6, "Subject type *");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "select", 16);
    i0.ɵɵtwoWayListener("ngModelChange", function AcademicWorkspaceComponent_Conditional_23_Template_select_ngModelChange_7_listener($event) { i0.ɵɵrestoreView(_r31); const ctx_r0 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r0.subjectType, $event) || (ctx_r0.subjectType = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementStart(8, "option", 29);
    i0.ɵɵtext(9, "Theory");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(10, "option", 30);
    i0.ɵɵtext(11, "Practical");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(12, "option", 31);
    i0.ɵɵtext(13, "Tutorial");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(14, "option", 32);
    i0.ɵɵtext(15, "Project");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(16, "label")(17, "span");
    i0.ɵɵtext(18, "Subject option");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(19, "select", 16);
    i0.ɵɵtwoWayListener("ngModelChange", function AcademicWorkspaceComponent_Conditional_23_Template_select_ngModelChange_19_listener($event) { i0.ɵɵrestoreView(_r31); const ctx_r0 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r0.subjectOption, $event) || (ctx_r0.subjectOption = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementStart(20, "option", 33);
    i0.ɵɵtext(21, "Required");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(22, "option", 34);
    i0.ɵɵtext(23, "Elective");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(24, "label")(25, "span");
    i0.ɵɵtext(26, "Evaluation");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(27, "select", 16);
    i0.ɵɵtwoWayListener("ngModelChange", function AcademicWorkspaceComponent_Conditional_23_Template_select_ngModelChange_27_listener($event) { i0.ɵɵrestoreView(_r31); const ctx_r0 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r0.evaluationType, $event) || (ctx_r0.evaluationType = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementStart(28, "option", 35);
    i0.ɵɵtext(29, "Marks");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(30, "option", 36);
    i0.ɵɵtext(31, "Grade");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(32, "label")(33, "span");
    i0.ɵɵtext(34, "Credits");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(35, "input", 37);
    i0.ɵɵtwoWayListener("ngModelChange", function AcademicWorkspaceComponent_Conditional_23_Template_input_ngModelChange_35_listener($event) { i0.ɵɵrestoreView(_r31); const ctx_r0 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r0.credits, $event) || (ctx_r0.credits = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(36, "label")(37, "span");
    i0.ɵɵtext(38, "Subject counter");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(39, "input", 37);
    i0.ɵɵtwoWayListener("ngModelChange", function AcademicWorkspaceComponent_Conditional_23_Template_input_ngModelChange_39_listener($event) { i0.ɵɵrestoreView(_r31); const ctx_r0 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r0.subjectCounter, $event) || (ctx_r0.subjectCounter = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(40, "label")(41, "span");
    i0.ɵɵtext(42, "Lecture hours");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(43, "input", 37);
    i0.ɵɵtwoWayListener("ngModelChange", function AcademicWorkspaceComponent_Conditional_23_Template_input_ngModelChange_43_listener($event) { i0.ɵɵrestoreView(_r31); const ctx_r0 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r0.lectureHours, $event) || (ctx_r0.lectureHours = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(44, "label")(45, "span");
    i0.ɵɵtext(46, "Tutorial hours");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(47, "input", 37);
    i0.ɵɵtwoWayListener("ngModelChange", function AcademicWorkspaceComponent_Conditional_23_Template_input_ngModelChange_47_listener($event) { i0.ɵɵrestoreView(_r31); const ctx_r0 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r0.tutorialHours, $event) || (ctx_r0.tutorialHours = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(48, "label")(49, "span");
    i0.ɵɵtext(50, "Lab hours");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(51, "input", 37);
    i0.ɵɵtwoWayListener("ngModelChange", function AcademicWorkspaceComponent_Conditional_23_Template_input_ngModelChange_51_listener($event) { i0.ɵɵrestoreView(_r31); const ctx_r0 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r0.labHours, $event) || (ctx_r0.labHours = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(52, "label")(53, "span");
    i0.ɵɵtext(54, "Maximum marks");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(55, "input", 37);
    i0.ɵɵtwoWayListener("ngModelChange", function AcademicWorkspaceComponent_Conditional_23_Template_input_ngModelChange_55_listener($event) { i0.ɵɵrestoreView(_r31); const ctx_r0 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r0.maxMarks, $event) || (ctx_r0.maxMarks = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(56, "label")(57, "span");
    i0.ɵɵtext(58, "Pass marks");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(59, "input", 37);
    i0.ɵɵtwoWayListener("ngModelChange", function AcademicWorkspaceComponent_Conditional_23_Template_input_ngModelChange_59_listener($event) { i0.ɵɵrestoreView(_r31); const ctx_r0 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r0.passMarks, $event) || (ctx_r0.passMarks = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(60, "label")(61, "span");
    i0.ɵɵtext(62, "Internal marks");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(63, "input", 37);
    i0.ɵɵtwoWayListener("ngModelChange", function AcademicWorkspaceComponent_Conditional_23_Template_input_ngModelChange_63_listener($event) { i0.ɵɵrestoreView(_r31); const ctx_r0 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r0.internalMarks, $event) || (ctx_r0.internalMarks = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(64, "label")(65, "span");
    i0.ɵɵtext(66, "External marks");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(67, "input", 37);
    i0.ɵɵtwoWayListener("ngModelChange", function AcademicWorkspaceComponent_Conditional_23_Template_input_ngModelChange_67_listener($event) { i0.ɵɵrestoreView(_r31); const ctx_r0 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r0.externalMarks, $event) || (ctx_r0.externalMarks = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(68, "label")(69, "span");
    i0.ɵɵtext(70, "Mid-term marks");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(71, "input", 37);
    i0.ɵɵtwoWayListener("ngModelChange", function AcademicWorkspaceComponent_Conditional_23_Template_input_ngModelChange_71_listener($event) { i0.ɵɵrestoreView(_r31); const ctx_r0 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r0.midTermMarks, $event) || (ctx_r0.midTermMarks = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(72, "label")(73, "span")(74, "input", 38);
    i0.ɵɵtwoWayListener("ngModelChange", function AcademicWorkspaceComponent_Conditional_23_Template_input_ngModelChange_74_listener($event) { i0.ɵɵrestoreView(_r31); const ctx_r0 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r0.isPaper, $event) || (ctx_r0.isPaper = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd();
    i0.ɵɵtext(75, " Paper exists");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(76, "label")(77, "span")(78, "input", 38);
    i0.ɵɵtwoWayListener("ngModelChange", function AcademicWorkspaceComponent_Conditional_23_Template_input_ngModelChange_78_listener($event) { i0.ɵɵrestoreView(_r31); const ctx_r0 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r0.isOpenElective, $event) || (ctx_r0.isOpenElective = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd();
    i0.ɵɵtext(79, " Open elective");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(80, "label")(81, "span")(82, "input", 38);
    i0.ɵɵtwoWayListener("ngModelChange", function AcademicWorkspaceComponent_Conditional_23_Template_input_ngModelChange_82_listener($event) { i0.ɵɵrestoreView(_r31); const ctx_r0 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r0.isFoundation, $event) || (ctx_r0.isFoundation = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd();
    i0.ɵɵtext(83, " Foundation");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(84, "label")(85, "span")(86, "input", 38);
    i0.ɵɵtwoWayListener("ngModelChange", function AcademicWorkspaceComponent_Conditional_23_Template_input_ngModelChange_86_listener($event) { i0.ɵɵrestoreView(_r31); const ctx_r0 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r0.isGroupSubject, $event) || (ctx_r0.isGroupSubject = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd();
    i0.ɵɵtext(87, " Group subject");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(88, "label")(89, "span")(90, "input", 38);
    i0.ɵɵtwoWayListener("ngModelChange", function AcademicWorkspaceComponent_Conditional_23_Template_input_ngModelChange_90_listener($event) { i0.ɵɵrestoreView(_r31); const ctx_r0 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r0.allowMidMarksEntry, $event) || (ctx_r0.allowMidMarksEntry = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd();
    i0.ɵɵtext(91, " Faculty may enter mid-term marks");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(92, "label")(93, "span")(94, "input", 38);
    i0.ɵɵtwoWayListener("ngModelChange", function AcademicWorkspaceComponent_Conditional_23_Template_input_ngModelChange_94_listener($event) { i0.ɵɵrestoreView(_r31); const ctx_r0 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r0.allowExternalMarksEntry, $event) || (ctx_r0.allowExternalMarksEntry = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd();
    i0.ɵɵtext(95, " Faculty may enter external marks");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(96, "label")(97, "span")(98, "input", 38);
    i0.ɵɵtwoWayListener("ngModelChange", function AcademicWorkspaceComponent_Conditional_23_Template_input_ngModelChange_98_listener($event) { i0.ɵɵrestoreView(_r31); const ctx_r0 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r0.showAlternativeGrade, $event) || (ctx_r0.showAlternativeGrade = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd();
    i0.ɵɵtext(99, " Show alternative grade");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(100, "label")(101, "span")(102, "input", 38);
    i0.ɵɵtwoWayListener("ngModelChange", function AcademicWorkspaceComponent_Conditional_23_Template_input_ngModelChange_102_listener($event) { i0.ɵɵrestoreView(_r31); const ctx_r0 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r0.showAlternativeGradePoint, $event) || (ctx_r0.showAlternativeGradePoint = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd();
    i0.ɵɵtext(103, " Show alternative grade point");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(104, "label")(105, "span")(106, "input", 38);
    i0.ɵɵtwoWayListener("ngModelChange", function AcademicWorkspaceComponent_Conditional_23_Template_input_ngModelChange_106_listener($event) { i0.ɵɵrestoreView(_r31); const ctx_r0 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r0.showAlternativeSubjectCredit, $event) || (ctx_r0.showAlternativeSubjectCredit = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd();
    i0.ɵɵtext(107, " Show alternative subject credit");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(108, "label")(109, "span")(110, "input", 38);
    i0.ɵɵtwoWayListener("ngModelChange", function AcademicWorkspaceComponent_Conditional_23_Template_input_ngModelChange_110_listener($event) { i0.ɵɵrestoreView(_r31); const ctx_r0 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r0.hideInternalMarks, $event) || (ctx_r0.hideInternalMarks = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd();
    i0.ɵɵtext(111, " Hide internal marks from student");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(112, "label")(113, "span")(114, "input", 38);
    i0.ɵɵtwoWayListener("ngModelChange", function AcademicWorkspaceComponent_Conditional_23_Template_input_ngModelChange_114_listener($event) { i0.ɵɵrestoreView(_r31); const ctx_r0 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r0.hideExternalMarks, $event) || (ctx_r0.hideExternalMarks = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd();
    i0.ɵɵtext(115, " Hide external marks from student");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(116, "label")(117, "span")(118, "input", 38);
    i0.ɵɵtwoWayListener("ngModelChange", function AcademicWorkspaceComponent_Conditional_23_Template_input_ngModelChange_118_listener($event) { i0.ɵɵrestoreView(_r31); const ctx_r0 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r0.hideMidTermMarks, $event) || (ctx_r0.hideMidTermMarks = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd();
    i0.ɵɵtext(119, " Hide mid-term marks from student");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(120, "label")(121, "span")(122, "input", 38);
    i0.ɵɵtwoWayListener("ngModelChange", function AcademicWorkspaceComponent_Conditional_23_Template_input_ngModelChange_122_listener($event) { i0.ɵɵrestoreView(_r31); const ctx_r0 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r0.hideTotalMarks, $event) || (ctx_r0.hideTotalMarks = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd();
    i0.ɵɵtext(123, " Hide total marks from student");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(3);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r0.hindiName);
    i0.ɵɵadvance(4);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r0.subjectType);
    i0.ɵɵadvance(12);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r0.subjectOption);
    i0.ɵɵadvance(8);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r0.evaluationType);
    i0.ɵɵadvance(8);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r0.credits);
    i0.ɵɵadvance(4);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r0.subjectCounter);
    i0.ɵɵadvance(4);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r0.lectureHours);
    i0.ɵɵadvance(4);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r0.tutorialHours);
    i0.ɵɵadvance(4);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r0.labHours);
    i0.ɵɵadvance(4);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r0.maxMarks);
    i0.ɵɵadvance(4);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r0.passMarks);
    i0.ɵɵadvance(4);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r0.internalMarks);
    i0.ɵɵadvance(4);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r0.externalMarks);
    i0.ɵɵadvance(4);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r0.midTermMarks);
    i0.ɵɵadvance(3);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r0.isPaper);
    i0.ɵɵadvance(4);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r0.isOpenElective);
    i0.ɵɵadvance(4);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r0.isFoundation);
    i0.ɵɵadvance(4);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r0.isGroupSubject);
    i0.ɵɵadvance(4);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r0.allowMidMarksEntry);
    i0.ɵɵadvance(4);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r0.allowExternalMarksEntry);
    i0.ɵɵadvance(4);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r0.showAlternativeGrade);
    i0.ɵɵadvance(4);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r0.showAlternativeGradePoint);
    i0.ɵɵadvance(4);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r0.showAlternativeSubjectCredit);
    i0.ɵɵadvance(4);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r0.hideInternalMarks);
    i0.ɵɵadvance(4);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r0.hideExternalMarks);
    i0.ɵɵadvance(4);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r0.hideMidTermMarks);
    i0.ɵɵadvance(4);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r0.hideTotalMarks);
} }
function AcademicWorkspaceComponent_Conditional_24_Template(rf, ctx) { if (rf & 1) {
    const _r32 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "label")(1, "span");
    i0.ɵɵtext(2, "Email *");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "input", 39);
    i0.ɵɵtwoWayListener("ngModelChange", function AcademicWorkspaceComponent_Conditional_24_Template_input_ngModelChange_3_listener($event) { i0.ɵɵrestoreView(_r32); const ctx_r0 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r0.email, $event) || (ctx_r0.email = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(4, "label")(5, "span");
    i0.ɵɵtext(6, "Weekly workload limit");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "input", 40);
    i0.ɵɵtwoWayListener("ngModelChange", function AcademicWorkspaceComponent_Conditional_24_Template_input_ngModelChange_7_listener($event) { i0.ɵɵrestoreView(_r32); const ctx_r0 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r0.weeklyLimit, $event) || (ctx_r0.weeklyLimit = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(8, "div", 6)(9, "span");
    i0.ɵɵtext(10, "Subjects");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(11, "erp-multi-select-dropdown", 41);
    i0.ɵɵlistener("valueChange", function AcademicWorkspaceComponent_Conditional_24_Template_erp_multi_select_dropdown_valueChange_11_listener($event) { i0.ɵɵrestoreView(_r32); const ctx_r0 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r0.subjectIds = $event); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(12, "div", 6)(13, "span");
    i0.ɵɵtext(14, "Available days");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(15, "erp-multi-select-dropdown", 42);
    i0.ɵɵlistener("valueChange", function AcademicWorkspaceComponent_Conditional_24_Template_erp_multi_select_dropdown_valueChange_15_listener($event) { i0.ɵɵrestoreView(_r32); const ctx_r0 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r0.availableDays = $event); });
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(3);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r0.email);
    i0.ɵɵadvance(4);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r0.weeklyLimit);
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("options", ctx_r0.options(ctx_r0.subjects()))("value", ctx_r0.subjectIds);
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("options", ctx_r0.dayOptions)("value", ctx_r0.availableDays);
} }
function AcademicWorkspaceComponent_Conditional_25_Template(rf, ctx) { if (rf & 1) {
    const _r33 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "label")(1, "span");
    i0.ɵɵtext(2, "Building");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "input", 16);
    i0.ɵɵtwoWayListener("ngModelChange", function AcademicWorkspaceComponent_Conditional_25_Template_input_ngModelChange_3_listener($event) { i0.ɵɵrestoreView(_r33); const ctx_r0 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r0.building, $event) || (ctx_r0.building = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(4, "label")(5, "span");
    i0.ɵɵtext(6, "Floor");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "input", 16);
    i0.ɵɵtwoWayListener("ngModelChange", function AcademicWorkspaceComponent_Conditional_25_Template_input_ngModelChange_7_listener($event) { i0.ɵɵrestoreView(_r33); const ctx_r0 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r0.floor, $event) || (ctx_r0.floor = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(8, "label")(9, "span");
    i0.ɵɵtext(10, "Room type");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(11, "select", 16);
    i0.ɵɵtwoWayListener("ngModelChange", function AcademicWorkspaceComponent_Conditional_25_Template_select_ngModelChange_11_listener($event) { i0.ɵɵrestoreView(_r33); const ctx_r0 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r0.roomType, $event) || (ctx_r0.roomType = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementStart(12, "option", 43);
    i0.ɵɵtext(13, "Classroom");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(14, "option", 44);
    i0.ɵɵtext(15, "Lab");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(16, "option", 45);
    i0.ɵɵtext(17, "Auditorium");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(18, "label")(19, "span");
    i0.ɵɵtext(20, "Capacity *");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(21, "input", 40);
    i0.ɵɵtwoWayListener("ngModelChange", function AcademicWorkspaceComponent_Conditional_25_Template_input_ngModelChange_21_listener($event) { i0.ɵɵrestoreView(_r33); const ctx_r0 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r0.capacity, $event) || (ctx_r0.capacity = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(22, "div", 6)(23, "span");
    i0.ɵɵtext(24, "Supported subjects (optional)");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(25, "erp-multi-select-dropdown", 46);
    i0.ɵɵlistener("valueChange", function AcademicWorkspaceComponent_Conditional_25_Template_erp_multi_select_dropdown_valueChange_25_listener($event) { i0.ɵɵrestoreView(_r33); const ctx_r0 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r0.subjectIds = $event); });
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(3);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r0.building);
    i0.ɵɵadvance(4);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r0.floor);
    i0.ɵɵadvance(4);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r0.roomType);
    i0.ɵɵadvance(10);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r0.capacity);
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("options", ctx_r0.options(ctx_r0.subjects()))("value", ctx_r0.subjectIds);
} }
function AcademicWorkspaceComponent_Conditional_26_Template(rf, ctx) { if (rf & 1) {
    const _r34 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 6)(1, "span");
    i0.ɵɵtext(2, "Subjects *");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "erp-multi-select-dropdown", 41);
    i0.ɵɵlistener("valueChange", function AcademicWorkspaceComponent_Conditional_26_Template_erp_multi_select_dropdown_valueChange_3_listener($event) { i0.ɵɵrestoreView(_r34); const ctx_r0 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r0.subjectIds = $event); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(4, "label")(5, "span");
    i0.ɵɵtext(6, "Requirement");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "select", 16);
    i0.ɵɵtwoWayListener("ngModelChange", function AcademicWorkspaceComponent_Conditional_26_Template_select_ngModelChange_7_listener($event) { i0.ɵɵrestoreView(_r34); const ctx_r0 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r0.requirement, $event) || (ctx_r0.requirement = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementStart(8, "option", 33);
    i0.ɵɵtext(9, "Required");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(10, "option", 34);
    i0.ɵɵtext(11, "Elective");
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("options", ctx_r0.options(ctx_r0.availableSubjects()))("value", ctx_r0.subjectIds);
    i0.ɵɵadvance(4);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r0.requirement);
} }
function AcademicWorkspaceComponent_Conditional_27_For_7_Conditional_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 18);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r36 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵproperty("value", item_r36._id);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(item_r36.name);
} }
function AcademicWorkspaceComponent_Conditional_27_For_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵconditionalCreate(0, AcademicWorkspaceComponent_Conditional_27_For_7_Conditional_0_Template, 2, 2, "option", 18);
} if (rf & 2) {
    const item_r36 = ctx.$implicit;
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵconditional(item_r36.academicSession === ctx_r0.session ? 0 : -1);
} }
function AcademicWorkspaceComponent_Conditional_27_For_15_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 18);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r37 = ctx.$implicit;
    i0.ɵɵproperty("value", item_r37._id);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(item_r37.name);
} }
function AcademicWorkspaceComponent_Conditional_27_For_23_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 18);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r38 = ctx.$implicit;
    i0.ɵɵproperty("value", item_r38._id);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate3(" Period ", item_r38.periodNumber, " \u00B7 ", item_r38.startTime, "\u2013", item_r38.endTime, " ");
} }
function AcademicWorkspaceComponent_Conditional_27_For_35_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 18);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r39 = ctx.$implicit;
    i0.ɵɵproperty("value", item_r39._id);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate2("", item_r39.code, " \u00B7 ", item_r39.name);
} }
function AcademicWorkspaceComponent_Conditional_27_For_43_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 18);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r40 = ctx.$implicit;
    i0.ɵɵproperty("value", item_r40._id);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(item_r40.name);
} }
function AcademicWorkspaceComponent_Conditional_27_For_51_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 18);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r41 = ctx.$implicit;
    i0.ɵɵproperty("value", item_r41._id);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate2("", item_r41.name, " \u00B7 capacity ", item_r41.capacity);
} }
function AcademicWorkspaceComponent_Conditional_27_For_57_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 18);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r42 = ctx.$implicit;
    i0.ɵɵproperty("value", item_r42);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(item_r42);
} }
function AcademicWorkspaceComponent_Conditional_27_Template(rf, ctx) { if (rf & 1) {
    const _r35 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "label")(1, "span");
    i0.ɵɵtext(2, "Timetable *");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "select", 16);
    i0.ɵɵtwoWayListener("ngModelChange", function AcademicWorkspaceComponent_Conditional_27_Template_select_ngModelChange_3_listener($event) { i0.ɵɵrestoreView(_r35); const ctx_r0 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r0.timetableMasterId, $event) || (ctx_r0.timetableMasterId = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵlistener("ngModelChange", function AcademicWorkspaceComponent_Conditional_27_Template_select_ngModelChange_3_listener() { i0.ɵɵrestoreView(_r35); const ctx_r0 = i0.ɵɵnextContext(); ctx_r0.timetableStructureId = ""; return i0.ɵɵresetView(ctx_r0.timetablePeriodId = ""); });
    i0.ɵɵelementStart(4, "option", 17);
    i0.ɵɵtext(5, "Select timetable");
    i0.ɵɵelementEnd();
    i0.ɵɵrepeaterCreate(6, AcademicWorkspaceComponent_Conditional_27_For_7_Template, 1, 1, null, null, _forTrack0);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(8, "label")(9, "span");
    i0.ɵɵtext(10, "Structure *");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(11, "select", 16);
    i0.ɵɵtwoWayListener("ngModelChange", function AcademicWorkspaceComponent_Conditional_27_Template_select_ngModelChange_11_listener($event) { i0.ɵɵrestoreView(_r35); const ctx_r0 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r0.timetableStructureId, $event) || (ctx_r0.timetableStructureId = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵlistener("ngModelChange", function AcademicWorkspaceComponent_Conditional_27_Template_select_ngModelChange_11_listener() { i0.ɵɵrestoreView(_r35); const ctx_r0 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r0.timetablePeriodId = ""); });
    i0.ɵɵelementStart(12, "option", 17);
    i0.ɵɵtext(13, "Select structure");
    i0.ɵɵelementEnd();
    i0.ɵɵrepeaterCreate(14, AcademicWorkspaceComponent_Conditional_27_For_15_Template, 2, 2, "option", 18, _forTrack0);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(16, "label")(17, "span");
    i0.ɵɵtext(18, "Lecture period *");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(19, "select", 16);
    i0.ɵɵtwoWayListener("ngModelChange", function AcademicWorkspaceComponent_Conditional_27_Template_select_ngModelChange_19_listener($event) { i0.ɵɵrestoreView(_r35); const ctx_r0 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r0.timetablePeriodId, $event) || (ctx_r0.timetablePeriodId = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementStart(20, "option", 17);
    i0.ɵɵtext(21, "Select configured lecture period");
    i0.ɵɵelementEnd();
    i0.ɵɵrepeaterCreate(22, AcademicWorkspaceComponent_Conditional_27_For_23_Template, 2, 4, "option", 18, _forTrack0);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(24, "div", 6)(25, "span");
    i0.ɵɵtext(26, "Sets (optional)");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(27, "erp-multi-select-dropdown", 47);
    i0.ɵɵlistener("valueChange", function AcademicWorkspaceComponent_Conditional_27_Template_erp_multi_select_dropdown_valueChange_27_listener($event) { i0.ɵɵrestoreView(_r35); const ctx_r0 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r0.setIds = $event); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(28, "label")(29, "span");
    i0.ɵɵtext(30, "Subject *");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(31, "select", 16);
    i0.ɵɵtwoWayListener("ngModelChange", function AcademicWorkspaceComponent_Conditional_27_Template_select_ngModelChange_31_listener($event) { i0.ɵɵrestoreView(_r35); const ctx_r0 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r0.subjectIds[0], $event) || (ctx_r0.subjectIds[0] = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementStart(32, "option", 17);
    i0.ɵɵtext(33, "Select subject");
    i0.ɵɵelementEnd();
    i0.ɵɵrepeaterCreate(34, AcademicWorkspaceComponent_Conditional_27_For_35_Template, 2, 3, "option", 18, _forTrack0);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(36, "label")(37, "span");
    i0.ɵɵtext(38, "Faculty *");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(39, "select", 16);
    i0.ɵɵtwoWayListener("ngModelChange", function AcademicWorkspaceComponent_Conditional_27_Template_select_ngModelChange_39_listener($event) { i0.ɵɵrestoreView(_r35); const ctx_r0 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r0.facultyId, $event) || (ctx_r0.facultyId = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementStart(40, "option", 17);
    i0.ɵɵtext(41, "Select faculty");
    i0.ɵɵelementEnd();
    i0.ɵɵrepeaterCreate(42, AcademicWorkspaceComponent_Conditional_27_For_43_Template, 2, 2, "option", 18, _forTrack0);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(44, "label")(45, "span");
    i0.ɵɵtext(46, "Room/lab *");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(47, "select", 16);
    i0.ɵɵtwoWayListener("ngModelChange", function AcademicWorkspaceComponent_Conditional_27_Template_select_ngModelChange_47_listener($event) { i0.ɵɵrestoreView(_r35); const ctx_r0 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r0.roomId, $event) || (ctx_r0.roomId = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementStart(48, "option", 17);
    i0.ɵɵtext(49, "Select room");
    i0.ɵɵelementEnd();
    i0.ɵɵrepeaterCreate(50, AcademicWorkspaceComponent_Conditional_27_For_51_Template, 2, 3, "option", 18, _forTrack0);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(52, "label")(53, "span");
    i0.ɵɵtext(54, "Day *");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(55, "select", 16);
    i0.ɵɵtwoWayListener("ngModelChange", function AcademicWorkspaceComponent_Conditional_27_Template_select_ngModelChange_55_listener($event) { i0.ɵɵrestoreView(_r35); const ctx_r0 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r0.day, $event) || (ctx_r0.day = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵrepeaterCreate(56, AcademicWorkspaceComponent_Conditional_27_For_57_Template, 2, 2, "option", 18, i0.ɵɵrepeaterTrackByIdentity);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(58, "label")(59, "span");
    i0.ɵɵtext(60, "Class type");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(61, "select", 16);
    i0.ɵɵtwoWayListener("ngModelChange", function AcademicWorkspaceComponent_Conditional_27_Template_select_ngModelChange_61_listener($event) { i0.ɵɵrestoreView(_r35); const ctx_r0 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r0.classType, $event) || (ctx_r0.classType = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementStart(62, "option", 21);
    i0.ɵɵtext(63, "Lecture");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(64, "option", 31);
    i0.ɵɵtext(65, "Tutorial");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(66, "option", 44);
    i0.ɵɵtext(67, "Lab");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(68, "label")(69, "span");
    i0.ɵɵtext(70, "Effective from");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(71, "input", 48);
    i0.ɵɵtwoWayListener("ngModelChange", function AcademicWorkspaceComponent_Conditional_27_Template_input_ngModelChange_71_listener($event) { i0.ɵɵrestoreView(_r35); const ctx_r0 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r0.effectiveFrom, $event) || (ctx_r0.effectiveFrom = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(72, "label")(73, "span");
    i0.ɵɵtext(74, "Effective to");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(75, "input", 48);
    i0.ɵɵtwoWayListener("ngModelChange", function AcademicWorkspaceComponent_Conditional_27_Template_input_ngModelChange_75_listener($event) { i0.ɵɵrestoreView(_r35); const ctx_r0 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r0.effectiveTo, $event) || (ctx_r0.effectiveTo = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(3);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r0.timetableMasterId);
    i0.ɵɵadvance(3);
    i0.ɵɵrepeater(ctx_r0.timetableMasters());
    i0.ɵɵadvance(5);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r0.timetableStructureId);
    i0.ɵɵadvance(3);
    i0.ɵɵrepeater(ctx_r0.structuresForMaster());
    i0.ɵɵadvance(5);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r0.timetablePeriodId);
    i0.ɵɵadvance(3);
    i0.ɵɵrepeater(ctx_r0.configuredLecturePeriods());
    i0.ɵɵadvance(5);
    i0.ɵɵproperty("options", ctx_r0.options(ctx_r0.availableSets()))("value", ctx_r0.setIds);
    i0.ɵɵadvance(4);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r0.subjectIds[0]);
    i0.ɵɵadvance(3);
    i0.ɵɵrepeater(ctx_r0.availableSubjects());
    i0.ɵɵadvance(5);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r0.facultyId);
    i0.ɵɵadvance(3);
    i0.ɵɵrepeater(ctx_r0.faculties());
    i0.ɵɵadvance(5);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r0.roomId);
    i0.ɵɵadvance(3);
    i0.ɵɵrepeater(ctx_r0.rooms());
    i0.ɵɵadvance(5);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r0.day);
    i0.ɵɵadvance();
    i0.ɵɵrepeater(i0.ɵɵpureFunction0(12, _c5));
    i0.ɵɵadvance(5);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r0.classType);
    i0.ɵɵadvance(10);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r0.effectiveFrom);
    i0.ɵɵadvance(4);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r0.effectiveTo);
} }
function AcademicWorkspaceComponent_Conditional_30_Template(rf, ctx) { if (rf & 1) {
    const _r43 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 49);
    i0.ɵɵlistener("click", function AcademicWorkspaceComponent_Conditional_30_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r43); const ctx_r0 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r0.reset()); });
    i0.ɵɵtext(1, " Cancel edit ");
    i0.ɵɵelementEnd();
} }
function AcademicWorkspaceComponent_Conditional_31_Conditional_10_For_12_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "tr")(1, "td");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "td");
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "td");
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const row_r46 = ctx.$implicit;
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(row_r46.row);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(row_r46.data.studentAdmissionId || "Not resolved");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(row_r46.error || "Ready");
} }
function AcademicWorkspaceComponent_Conditional_31_Conditional_10_Template(rf, ctx) { if (rf & 1) {
    const _r45 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 12)(1, "table")(2, "thead")(3, "tr")(4, "th");
    i0.ɵɵtext(5, "Row");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "th");
    i0.ɵɵtext(7, "Student");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "th");
    i0.ɵɵtext(9, "Result");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(10, "tbody");
    i0.ɵɵrepeaterCreate(11, AcademicWorkspaceComponent_Conditional_31_Conditional_10_For_12_Template, 7, 3, "tr", null, _forTrack1);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(13, "button", 51);
    i0.ɵɵlistener("click", function AcademicWorkspaceComponent_Conditional_31_Conditional_10_Template_button_click_13_listener() { i0.ɵɵrestoreView(_r45); const ctx_r0 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r0.importPreview()); });
    i0.ɵɵtext(14, " Import valid rows ");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(11);
    i0.ɵɵrepeater(ctx_r0.previewRows());
} }
function AcademicWorkspaceComponent_Conditional_31_Template(rf, ctx) { if (rf & 1) {
    const _r44 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "section", 3)(1, "div", 4)(2, "div")(3, "h2");
    i0.ɵɵtext(4, "Bulk CSV allocation");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "p");
    i0.ɵɵtext(6, " Download the template, enter Student IDs and mapping codes, then preview before importing. ");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(7, "button", 49);
    i0.ɵɵlistener("click", function AcademicWorkspaceComponent_Conditional_31_Template_button_click_7_listener() { i0.ɵɵrestoreView(_r44); const ctx_r0 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r0.downloadTemplate()); });
    i0.ɵɵtext(8, " Download template ");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(9, "input", 50);
    i0.ɵɵlistener("change", function AcademicWorkspaceComponent_Conditional_31_Template_input_change_9_listener($event) { i0.ɵɵrestoreView(_r44); const ctx_r0 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r0.readCsv($event)); });
    i0.ɵɵelementEnd();
    i0.ɵɵconditionalCreate(10, AcademicWorkspaceComponent_Conditional_31_Conditional_10_Template, 15, 0);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(10);
    i0.ɵɵconditional(ctx_r0.previewRows().length ? 10 : -1);
} }
function AcademicWorkspaceComponent_For_56_Conditional_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "small");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r48 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(item_r48.code || item_r48.subjectCode);
} }
function AcademicWorkspaceComponent_For_56_Conditional_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "small");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r48 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(item_r48.studentId);
} }
function AcademicWorkspaceComponent_For_56_Template(rf, ctx) { if (rf & 1) {
    const _r47 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "tr")(1, "td")(2, "strong");
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵconditionalCreate(4, AcademicWorkspaceComponent_For_56_Conditional_4_Template, 2, 1, "small")(5, AcademicWorkspaceComponent_For_56_Conditional_5_Template, 2, 1, "small");
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
    i0.ɵɵelementStart(12, "td", 13)(13, "erp-compact-action-menu", 52);
    i0.ɵɵlistener("selected", function AcademicWorkspaceComponent_For_56_Template_erp_compact_action_menu_selected_13_listener($event) { const item_r48 = i0.ɵɵrestoreView(_r47).$implicit; const ctx_r0 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r0.handleAction($event, item_r48)); });
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const item_r48 = ctx.$implicit;
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(item_r48.name || (item_r48.periodNumber ? (item_r48.structureName ? item_r48.structureName + " \u00B7 " : "") + "Period " + item_r48.periodNumber : "") || item_r48.subjectName || item_r48.studentName || item_r48.groupName || item_r48.code || "Record");
    i0.ɵɵadvance();
    i0.ɵɵconditional(ctx_r0.sectionUsesCode() ? 4 : item_r48.studentId ? 5 : -1);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(item_r48.academicSession || "\u2014");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(item_r48.semester || "\u2014");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", item_r48.day ? item_r48.day + " \u00B7 " + item_r48.startTime + "\u2013" + item_r48.endTime : item_r48.periodNumber ? item_r48.isConfigured ? (item_r48.periodType === "break" ? "Break" : "Lecture") + " \u00B7 " + item_r48.startTime + "\u2013" + item_r48.endTime + " \u00B7 " + item_r48.durationMinutes + " min" : "Not configured" : (item_r48.departmentNames == null ? null : item_r48.departmentNames.join(", ")) || item_r48.requirement || item_r48.status || "Active", " ");
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("items", ctx_r0.actionsFor());
} }
function AcademicWorkspaceComponent_ForEmpty_57_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "tr")(1, "td", 53);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", ctx_r0.loading() ? "Loading records\u2026" : "No records have been created.", " ");
} }
function apiMessage(error, fallback) {
    if (typeof error === 'object' && error && 'error' in error) {
        const response = error.error;
        if (typeof response?.message === 'string')
            return response.message;
    }
    return fallback;
}
export class AcademicWorkspaceComponent {
    api = inject(ApiService);
    route = inject(ActivatedRoute);
    section = signal('groups', ...(ngDevMode ? [{ debugName: "section" }] : /* istanbul ignore next */ []));
    loading = signal(false, ...(ngDevMode ? [{ debugName: "loading" }] : /* istanbul ignore next */ []));
    saving = signal(false, ...(ngDevMode ? [{ debugName: "saving" }] : /* istanbul ignore next */ []));
    error = signal('', ...(ngDevMode ? [{ debugName: "error" }] : /* istanbul ignore next */ []));
    message = signal('', ...(ngDevMode ? [{ debugName: "message" }] : /* istanbul ignore next */ []));
    records = signal([], ...(ngDevMode ? [{ debugName: "records" }] : /* istanbul ignore next */ []));
    editingId = signal(null, ...(ngDevMode ? [{ debugName: "editingId" }] : /* istanbul ignore next */ []));
    masters = signal([], ...(ngDevMode ? [{ debugName: "masters" }] : /* istanbul ignore next */ []));
    students = signal([], ...(ngDevMode ? [{ debugName: "students" }] : /* istanbul ignore next */ []));
    groups = signal([], ...(ngDevMode ? [{ debugName: "groups" }] : /* istanbul ignore next */ []));
    sections = signal([], ...(ngDevMode ? [{ debugName: "sections" }] : /* istanbul ignore next */ []));
    sets = signal([], ...(ngDevMode ? [{ debugName: "sets" }] : /* istanbul ignore next */ []));
    subjects = signal([], ...(ngDevMode ? [{ debugName: "subjects" }] : /* istanbul ignore next */ []));
    faculties = signal([], ...(ngDevMode ? [{ debugName: "faculties" }] : /* istanbul ignore next */ []));
    rooms = signal([], ...(ngDevMode ? [{ debugName: "rooms" }] : /* istanbul ignore next */ []));
    groupSubjects = signal([], ...(ngDevMode ? [{ debugName: "groupSubjects" }] : /* istanbul ignore next */ []));
    timetableMasters = signal([], ...(ngDevMode ? [{ debugName: "timetableMasters" }] : /* istanbul ignore next */ []));
    timetableStructures = signal([], ...(ngDevMode ? [{ debugName: "timetableStructures" }] : /* istanbul ignore next */ []));
    timetablePeriods = signal([], ...(ngDevMode ? [{ debugName: "timetablePeriods" }] : /* istanbul ignore next */ []));
    previewRows = signal([], ...(ngDevMode ? [{ debugName: "previewRows" }] : /* istanbul ignore next */ []));
    name = '';
    code = '';
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
    setId = '';
    subjectIds = [];
    studentAdmissionId = '';
    hindiName = '';
    subjectType = 'theory';
    subjectOption = 'required';
    evaluationType = 'marks';
    credits = 0;
    subjectCounter = 0;
    lectureHours = 0;
    tutorialHours = 0;
    labHours = 0;
    maxMarks = 0;
    passMarks = 0;
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
    hideInternalMarks = false;
    hideExternalMarks = false;
    hideMidTermMarks = false;
    hideTotalMarks = false;
    email = '';
    weeklyLimit = 40;
    availableDays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
    building = '';
    floor = '';
    roomType = 'classroom';
    capacity = 1;
    requirement = 'required';
    facultyId = '';
    roomId = '';
    setIds = [];
    day = 'Monday';
    startTime = '09:00';
    endTime = '10:00';
    classType = 'lecture';
    effectiveFrom = '';
    effectiveTo = '';
    timetableMasterId = '';
    timetableStructureId = '';
    timetablePeriodId = '';
    periodCount = 8;
    periodType = 'lecture';
    durationMinutes = 50;
    workingDays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
    search = '';
    page = signal(1, ...(ngDevMode ? [{ debugName: "page" }] : /* istanbul ignore next */ []));
    pageSize = 25;
    titles = {
        groups: 'Groups',
        sections: 'Sections',
        sets: 'Sets',
        subjects: 'Subjects',
        faculties: 'Faculty',
        rooms: 'Rooms and labs',
        allocations: 'Student allocation',
        'subject-assignments': 'Bulk subject assignment',
        'timetable-masters': 'Timetable masters',
        'timetable-structures': 'Timetable structures',
        'timetable-periods': 'Period configuration',
        timetables: 'Timetable',
    };
    dayOptions = [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
        'Sunday',
    ].map((label) => ({ label, value: label }));
    resources = {
        groups: 'groups',
        sections: 'sections',
        sets: 'sets',
        subjects: 'subjects',
        faculties: 'faculties',
        rooms: 'rooms',
        allocations: 'allocations',
        'subject-assignments': 'group-subjects',
        'timetable-masters': 'timetable-masters',
        'timetable-structures': 'timetable-structures',
        'timetable-periods': 'timetable-periods',
        timetables: 'timetables',
    };
    periodCountOptions = Array.from({ length: 30 }, (_, index) => index + 1);
    durationOptions = Array.from({ length: 40 }, (_, index) => (index + 1) * 5);
    editActions = [
        { id: 'edit', label: 'Edit', icon: 'edit' },
        { id: 'delete', label: 'Delete', icon: 'delete', destructive: true },
    ];
    deleteActions = [
        { id: 'delete', label: 'Delete', icon: 'delete', destructive: true },
    ];
    editOnlyActions = [
        { id: 'edit', label: 'Configure', icon: 'edit' },
    ];
    constructor() {
        this.route.data.subscribe((data) => {
            this.section.set(data['section'] || 'groups');
            this.reset();
            this.load();
        });
    }
    title() {
        return this.titles[this.section()];
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
    options(items, showCode = true) {
        return items.map((item) => ({
            value: item._id,
            label: showCode && item.code ? `${item.code} · ${item.name}` : item.name,
        }));
    }
    sectionUsesCode() {
        return ['subjects', 'faculties', 'rooms'].includes(this.section());
    }
    filteredRecords() {
        const query = this.search.trim().toLowerCase();
        return this.records().filter((item) => !query || JSON.stringify(item).toLowerCase().includes(query));
    }
    totalPages() {
        return Math.max(1, Math.ceil(this.filteredRecords().length / this.pageSize));
    }
    pagedRecords() {
        const page = Math.min(this.page(), this.totalPages());
        return this.filteredRecords().slice((page - 1) * this.pageSize, page * this.pageSize);
    }
    availableSections() {
        return this.sections().filter((item) => item.academicSession === this.session &&
            item.semester === Number(this.semester) &&
            (!this.groupId || item.groupIds.includes(this.groupId)));
    }
    groupsForPeriod() {
        return this.groups().filter((item) => item.academicSession === this.session && item.semester === Number(this.semester));
    }
    availableSets() {
        return this.sets().filter((item) => item.groupId === this.groupId &&
            item.sectionId === this.sectionId &&
            item.semester === Number(this.semester));
    }
    structuresForMaster() {
        return this.timetableStructures().filter((item) => item.timetableMasterId === this.timetableMasterId && item.isActive);
    }
    periodsForStructure() {
        return this.timetablePeriods()
            .filter((item) => item.timetableStructureId === this.timetableStructureId)
            .sort((left, right) => left.periodNumber - right.periodNumber);
    }
    configuredLecturePeriods() {
        return this.periodsForStructure().filter((item) => item.isConfigured && item.periodType === 'lecture');
    }
    calculatedEndTime() {
        const [hours, minutes] = this.startTime.split(':').map(Number);
        if (!Number.isFinite(hours) || !Number.isFinite(minutes))
            return '—';
        const total = hours * 60 + minutes + Number(this.durationMinutes);
        if (total >= 1440)
            return 'Invalid';
        return `${String(Math.floor(total / 60)).padStart(2, '0')}:${String(total % 60).padStart(2, '0')}`;
    }
    selectPeriod(periodId) {
        this.timetablePeriodId = periodId;
        const period = this.timetablePeriods().find((item) => item._id === periodId);
        if (!period)
            return;
        this.periodType = period.periodType || 'lecture';
        this.startTime = period.startTime || '09:00';
        this.durationMinutes = period.durationMinutes || 50;
    }
    availableSubjects() {
        let subjects = this.subjects().filter((item) => item.academicSession === this.session && item.semester === Number(this.semester));
        const group = this.groups().find((item) => item._id === this.groupId);
        if (group)
            subjects = subjects.filter((subject) => !subject.departmentIds.length ||
                subject.departmentIds.some((value) => group.departmentIds.includes(value)));
        if (this.section() !== 'timetables' || !this.groupId)
            return subjects;
        const assignedIds = new Set(this.groupSubjects()
            .filter((item) => item.groupId === this.groupId &&
            item.academicSession === this.session &&
            item.semester === Number(this.semester) &&
            item.status === 'active')
            .map((item) => item.subjectId));
        return subjects.filter((item) => assignedIds.has(item._id));
    }
    load() {
        this.loading.set(true);
        this.error.set('');
        forkJoin({
            bootstrap: this.api.academicBootstrap(),
            list: this.api.academicRecords(this.resources[this.section()] || this.section()),
        }).subscribe({
            next: ({ bootstrap, list }) => {
                this.page.set(1);
                this.masters.set(bootstrap.masters);
                this.students.set(bootstrap.students);
                this.groups.set(bootstrap.groups);
                this.sections.set(bootstrap.sections);
                this.sets.set(bootstrap.sets);
                this.subjects.set(bootstrap.subjects);
                this.faculties.set(bootstrap.faculties);
                this.rooms.set(bootstrap.rooms);
                this.groupSubjects.set(bootstrap.groupSubjects);
                this.timetableMasters.set(bootstrap.timetableMasters);
                this.timetableStructures.set(bootstrap.timetableStructures);
                this.timetablePeriods.set(bootstrap.timetablePeriods);
                this.records.set(list.items);
                this.loading.set(false);
            },
            error: (error) => {
                this.error.set(apiMessage(error, 'Could not load academic setup.'));
                this.loading.set(false);
            },
        });
    }
    save() {
        const section = this.section();
        this.error.set('');
        this.message.set('');
        this.saving.set(true);
        let request;
        if (section === 'timetable-periods') {
            if (!this.timetablePeriodId) {
                this.error.set('Select a generated period to configure.');
                this.saving.set(false);
                return;
            }
            request = this.api.updateAcademicRecord('timetable-periods', this.timetablePeriodId, this.body(section));
        }
        else if (section === 'allocations')
            request = this.api.bulkAcademicAllocations([this.allocationBody()]);
        else if (section === 'subject-assignments')
            request = this.api.bulkAssignSubjects({
                groupId: this.groupId,
                subjectIds: this.subjectIds,
                academicSession: this.session,
                semester: this.semester,
                requirement: this.requirement,
            });
        else
            request = this.editingId()
                ? this.api.updateAcademicRecord(this.resources[section], this.editingId(), this.body(section))
                : this.api.createAcademicRecord(this.resources[section], this.body(section));
        request.subscribe({
            next: (result) => {
                this.message.set(result.assigned !== undefined
                    ? `${result.assigned} record(s) assigned.`
                    : 'Record saved.');
                this.saving.set(false);
                this.reset(false);
                this.load();
            },
            error: (error) => {
                this.error.set(apiMessage(error, 'Could not save this record.'));
                this.saving.set(false);
            },
        });
    }
    body(section) {
        const scope = {
            academicSession: this.session,
            semester: Number(this.semester),
            universityId: this.universityId,
            universityName: this.label('university', this.universityId),
            collegeId: this.collegeId,
            collegeName: this.label('college', this.collegeId),
        };
        if (section === 'timetable-masters')
            return {
                name: this.name,
                academicSession: this.session,
                universityId: this.universityId,
                universityName: this.label('university', this.universityId),
                collegeId: this.collegeId,
                collegeName: this.label('college', this.collegeId),
                isActive: true,
            };
        if (section === 'timetable-structures')
            return {
                timetableMasterId: this.timetableMasterId,
                name: this.name,
                periodCount: Number(this.periodCount),
                workingDays: this.workingDays,
                isActive: true,
            };
        if (section === 'timetable-periods')
            return {
                periodType: this.periodType,
                startTime: this.startTime,
                durationMinutes: Number(this.durationMinutes),
            };
        if (section === 'groups')
            return {
                ...scope,
                name: this.name,
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
        if (section === 'sections')
            return {
                name: this.name,
                academicSession: this.session,
                semester: Number(this.semester),
                groupIds: this.groupIds,
                isActive: true,
            };
        if (section === 'sets')
            return {
                name: this.name,
                academicSession: this.session,
                semester: Number(this.semester),
                groupId: this.groupId,
                sectionId: this.sectionId,
                isActive: true,
            };
        if (section === 'subjects')
            return {
                ...scope,
                name: this.name,
                hindiName: this.hindiName,
                code: this.code,
                departmentIds: this.departmentIds,
                departmentNames: this.labels('department', this.departmentIds),
                courseIds: this.courseIds,
                courseNames: this.labels('course', this.courseIds),
                branchIds: this.branchIds,
                branchNames: this.labels('branch', this.branchIds),
                subjectType: this.subjectType,
                subjectOption: this.subjectOption,
                evaluationType: this.evaluationType,
                credits: this.credits,
                subjectCounter: this.subjectCounter,
                lectureHours: this.lectureHours,
                tutorialHours: this.tutorialHours,
                labHours: this.labHours,
                maxMarks: this.maxMarks,
                passMarks: this.passMarks,
                internalMarks: this.internalMarks,
                externalMarks: this.externalMarks,
                midTermMarks: this.midTermMarks,
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
                },
                isActive: true,
            };
        if (section === 'faculties')
            return {
                name: this.name,
                code: this.code,
                email: this.email,
                universityId: this.universityId,
                collegeId: this.collegeId,
                departmentIds: this.departmentIds,
                subjectIds: this.subjectIds,
                weeklyLimit: this.weeklyLimit,
                availableDays: this.availableDays,
                isActive: true,
            };
        if (section === 'rooms')
            return {
                name: this.name,
                code: this.code,
                universityId: this.universityId,
                collegeId: this.collegeId,
                building: this.building,
                floor: this.floor,
                roomType: this.roomType,
                capacity: this.capacity,
                subjectIds: this.subjectIds,
                isActive: true,
            };
        return {
            timetableMasterId: this.timetableMasterId,
            timetableStructureId: this.timetableStructureId,
            timetablePeriodId: this.timetablePeriodId,
            academicSession: this.session,
            semester: Number(this.semester),
            groupId: this.groupId,
            sectionId: this.sectionId,
            setIds: this.setIds,
            subjectId: this.subjectIds[0],
            facultyId: this.facultyId,
            roomId: this.roomId,
            day: this.day,
            classType: this.classType,
            effectiveFrom: this.effectiveFrom || null,
            effectiveTo: this.effectiveTo || null,
            isActive: true,
        };
    }
    allocationBody() {
        return {
            studentAdmissionId: this.studentAdmissionId,
            groupId: this.groupId,
            sectionId: this.sectionId,
            setId: this.setId,
            academicSession: this.session,
            semester: Number(this.semester),
        };
    }
    downloadTemplate() {
        const csv = 'studentId,academicSession,semester,groupName,sectionName,setName\n26CSE0001,2026-2027,1,First Year,Section A,G1\n';
        const link = document.createElement('a');
        link.href = URL.createObjectURL(new Blob([csv], { type: 'text/csv' }));
        link.download = 'student-academic-assignment-template.csv';
        link.click();
        URL.revokeObjectURL(link.href);
    }
    readCsv(event) {
        const file = event.target.files?.[0];
        if (!file)
            return;
        file.text().then((text) => this.previewCsv(text));
    }
    previewCsv(text) {
        const lines = text.split(/\r?\n/).filter(Boolean);
        const headers = (lines.shift() || '').split(',').map((value) => value.trim());
        const rows = lines.map((line) => {
            const values = line.split(',').map((value) => value.trim());
            const row = Object.fromEntries(headers.map((header, index) => [header, values[index] || '']));
            const student = this.students().find((item) => item.studentId === row['studentId']);
            const group = this.groups().find((item) => item.name === row['groupName'] && item.academicSession === row['academicSession']);
            const section = this.sections().find((item) => item.name === row['sectionName'] && item.academicSession === row['academicSession']);
            const set = this.sets().find((item) => item.name === row['setName'] &&
                item.academicSession === row['academicSession'] &&
                item.groupId === group?._id &&
                item.sectionId === section?._id);
            return {
                studentAdmissionId: student?._id || '',
                groupId: group?._id || '',
                sectionId: section?._id || '',
                setId: set?._id || '',
                academicSession: row['academicSession'],
                semester: Number(row['semester']),
            };
        });
        this.api.previewAcademicAllocations(rows).subscribe({
            next: (result) => this.previewRows.set(result.rows),
            error: (error) => this.error.set(apiMessage(error, 'CSV preview failed.')),
        });
    }
    importPreview() {
        const valid = this.previewRows()
            .filter((row) => !row.error)
            .map((row) => row.data);
        if (!valid.length)
            return;
        this.api.bulkAcademicAllocations(valid).subscribe({
            next: (result) => {
                this.message.set(`${result.assigned} student(s) assigned.`);
                this.previewRows.set([]);
                this.load();
            },
            error: (error) => this.error.set(apiMessage(error, 'CSV import failed.')),
        });
    }
    actionsFor() {
        if (this.section() === 'timetable-periods')
            return this.editOnlyActions;
        return [
            'groups',
            'sections',
            'sets',
            'subjects',
            'faculties',
            'rooms',
            'timetable-masters',
            'timetable-structures',
        ].includes(this.section())
            ? this.editActions
            : this.deleteActions;
    }
    handleAction(action, item) {
        if (action === 'edit')
            this.edit(item);
        else if (action === 'delete')
            this.remove(item);
    }
    edit(item) {
        this.editingId.set(item._id);
        this.name = item.name || '';
        this.code = item.code || '';
        this.session = item.academicSession || '';
        this.semester = Number(item.semester || 1);
        this.universityId = item.universityId || '';
        this.collegeId = item.collegeId || '';
        this.levelId = item.levelId || '';
        this.departmentIds = (item.departmentIds || []).map(String);
        this.courseIds = (item.courseIds || []).map(String);
        this.branchIds = (item.branchIds || []).map(String);
        this.groupIds = (item.groupIds || []).map(String);
        this.groupId = item.groupId || '';
        this.sectionId = item.sectionId || '';
        this.hindiName = item.hindiName || '';
        this.subjectType = item.subjectType || 'theory';
        this.subjectOption = item.subjectOption || 'required';
        this.evaluationType = item.evaluationType || 'marks';
        this.credits = Number(item.credits || 0);
        this.lectureHours = Number(item.lectureHours || 0);
        this.tutorialHours = Number(item.tutorialHours || 0);
        this.labHours = Number(item.labHours || 0);
        this.maxMarks = Number(item.maxMarks || 0);
        this.passMarks = Number(item.passMarks || 0);
        this.internalMarks = Number(item.internalMarks || 0);
        this.externalMarks = Number(item.externalMarks || 0);
        this.midTermMarks = Number(item.midTermMarks || 0);
        this.isPaper = Boolean(item.flags?.['isPaper']);
        this.isOpenElective = Boolean(item.flags?.['isOpenElective']);
        this.isFoundation = Boolean(item.flags?.['isFoundation']);
        this.isGroupSubject = Boolean(item.flags?.['isGroupSubject']);
        this.allowMidMarksEntry = Boolean(item.flags?.['allowMidMarksEntry']);
        this.allowExternalMarksEntry = Boolean(item.flags?.['allowExternalMarksEntry']);
        this.showAlternativeGrade = Boolean(item.visibility?.['showAlternativeGrade']);
        this.showAlternativeGradePoint = Boolean(item.visibility?.['showAlternativeGradePoint']);
        this.showAlternativeSubjectCredit = Boolean(item.visibility?.['showAlternativeSubjectCredit']);
        this.hideInternalMarks = Boolean(item.visibility?.['hideInternalMarks']);
        this.hideExternalMarks = Boolean(item.visibility?.['hideExternalMarks']);
        this.hideMidTermMarks = Boolean(item.visibility?.['hideMidTermMarks']);
        this.hideTotalMarks = Boolean(item.visibility?.['hideTotalMarks']);
        this.email = item.email || '';
        this.weeklyLimit = Number(item.weeklyLimit || 40);
        this.availableDays = item.availableDays || [
            'Monday',
            'Tuesday',
            'Wednesday',
            'Thursday',
            'Friday',
        ];
        this.subjectIds = (item.subjectIds || []).map(String);
        this.building = item.building || '';
        this.floor = item.floor || '';
        this.roomType = item.roomType || 'classroom';
        this.capacity = Number(item.capacity || 1);
        this.timetableMasterId = item.timetableMasterId || '';
        this.timetableStructureId = item.timetableStructureId || '';
        this.timetablePeriodId = item.timetablePeriodId || '';
        this.periodCount = Number(item.periodCount || 8);
        this.workingDays = item.workingDays || this.workingDays;
        this.periodType = item.periodType || 'lecture';
        this.durationMinutes = Number(item.durationMinutes || 50);
        this.startTime = item.startTime || '09:00';
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    remove(item) {
        if (!confirm(`Delete ${item.name || item.code || 'this record'}?`))
            return;
        this.api.deleteAcademicRecord(this.resources[this.section()], item._id).subscribe({
            next: () => this.load(),
            error: (error) => this.error.set(apiMessage(error, 'Could not delete record.')),
        });
    }
    reset(clearMessages = true) {
        this.editingId.set(null);
        this.name = '';
        this.code = '';
        this.departmentIds = [];
        this.courseIds = [];
        this.branchIds = [];
        this.groupIds = [];
        this.groupId = '';
        this.sectionId = '';
        this.setId = '';
        this.subjectIds = [];
        this.studentAdmissionId = '';
        this.timetableMasterId = '';
        this.timetableStructureId = '';
        this.timetablePeriodId = '';
        this.periodCount = 8;
        this.periodType = 'lecture';
        this.durationMinutes = 50;
        this.startTime = '09:00';
        this.workingDays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
        this.hindiName = '';
        this.isPaper = false;
        this.isOpenElective = false;
        this.isFoundation = false;
        this.isGroupSubject = false;
        this.allowMidMarksEntry = false;
        this.allowExternalMarksEntry = false;
        this.showAlternativeGrade = false;
        this.showAlternativeGradePoint = false;
        this.showAlternativeSubjectCredit = false;
        this.hideInternalMarks = false;
        this.hideExternalMarks = false;
        this.hideMidTermMarks = false;
        this.hideTotalMarks = false;
        this.availableDays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
        if (clearMessages) {
            this.error.set('');
            this.message.set('');
        }
    }
    static ɵfac = function AcademicWorkspaceComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || AcademicWorkspaceComponent)(); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: AcademicWorkspaceComponent, selectors: [["erp-academic-workspace"]], decls: 66, vars: 36, consts: [["variant", "minimal", "layout", "collection", 3, "title"], ["role", "alert", 1, "erp-alert", "erp-alert--error"], [1, "erp-alert", "erp-alert--success"], [1, "erp-card", "erp-card--padded"], [1, "erp-card__header"], [1, "erp-form-grid"], [1, "erp-field-stack"], ["type", "button", 1, "erp-button", "erp-button--primary", 3, "click", "disabled"], ["type", "button", 1, "erp-button", "erp-button--secondary"], [1, "erp-card", "erp-table-shell"], [1, "erp-table-toolbar"], ["type", "search", "placeholder", "Search records", 1, "erp-control", 3, "ngModelChange", "ngModel"], [1, "erp-table-shell__scroll"], [1, "erp-table-shell__actions"], [1, "erp-table-pagination"], ["type", "button", 1, "erp-button", "erp-button--secondary", 3, "click", "disabled"], [1, "erp-control", 3, "ngModelChange", "ngModel"], ["value", ""], [3, "value"], [3, "ngValue"], ["placeholder", "Select working days", 3, "valueChange", "options", "value"], ["value", "lecture"], ["value", "break"], ["type", "time", 1, "erp-control", 3, "ngModelChange", "ngModel"], ["readonly", "", 1, "erp-control", 3, "value"], ["placeholder", "Select departments", 3, "valueChange", "options", "value"], ["placeholder", "Select courses", 3, "valueChange", "options", "value"], ["placeholder", "Select branches", 3, "valueChange", "options", "value"], ["placeholder", "Select groups", 3, "valueChange", "options", "value"], ["value", "theory"], ["value", "practical"], ["value", "tutorial"], ["value", "project"], ["value", "required"], ["value", "elective"], ["value", "marks"], ["value", "grade"], ["type", "number", "min", "0", 1, "erp-control", 3, "ngModelChange", "ngModel"], ["type", "checkbox", 3, "ngModelChange", "ngModel"], ["type", "email", 1, "erp-control", 3, "ngModelChange", "ngModel"], ["type", "number", "min", "1", 1, "erp-control", 3, "ngModelChange", "ngModel"], ["placeholder", "Select subjects", 3, "valueChange", "options", "value"], ["placeholder", "Select available days", 3, "valueChange", "options", "value"], ["value", "classroom"], ["value", "lab"], ["value", "auditorium"], ["placeholder", "Select supported subjects", 3, "valueChange", "options", "value"], ["placeholder", "Entire section or select sets", 3, "valueChange", "options", "value"], ["type", "date", 1, "erp-control", 3, "ngModelChange", "ngModel"], ["type", "button", 1, "erp-button", "erp-button--secondary", 3, "click"], ["type", "file", "accept", ".csv,text/csv", 1, "erp-control", 3, "change"], ["type", "button", 1, "erp-button", "erp-button--primary", 3, "click"], [3, "selected", "items"], ["colspan", "5", 1, "erp-empty-state"]], template: function AcademicWorkspaceComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "erp-admin-page", 0);
            i0.ɵɵconditionalCreate(1, AcademicWorkspaceComponent_Conditional_1_Template, 2, 1, "div", 1);
            i0.ɵɵconditionalCreate(2, AcademicWorkspaceComponent_Conditional_2_Template, 2, 1, "div", 2);
            i0.ɵɵelementStart(3, "section", 3)(4, "div", 4)(5, "div")(6, "h2");
            i0.ɵɵtext(7);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(8, "p");
            i0.ɵɵtext(9, "Fields use current academic master data and enforce session/semester compatibility.");
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(10, "div", 5);
            i0.ɵɵconditionalCreate(11, AcademicWorkspaceComponent_Conditional_11_Template, 9, 2);
            i0.ɵɵconditionalCreate(12, AcademicWorkspaceComponent_Conditional_12_Template, 16, 5);
            i0.ɵɵconditionalCreate(13, AcademicWorkspaceComponent_Conditional_13_Template, 5, 2);
            i0.ɵɵconditionalCreate(14, AcademicWorkspaceComponent_Conditional_14_Template, 18, 4);
            i0.ɵɵconditionalCreate(15, AcademicWorkspaceComponent_Conditional_15_Template, 46, 7);
            i0.ɵɵconditionalCreate(16, AcademicWorkspaceComponent_Conditional_16_Template, 4, 5, "div", 6);
            i0.ɵɵconditionalCreate(17, AcademicWorkspaceComponent_Conditional_17_Template, 8, 7);
            i0.ɵɵconditionalCreate(18, AcademicWorkspaceComponent_Conditional_18_Template, 8, 1, "label");
            i0.ɵɵconditionalCreate(19, AcademicWorkspaceComponent_Conditional_19_Template, 6, 2, "div", 6);
            i0.ɵɵconditionalCreate(20, AcademicWorkspaceComponent_Conditional_20_Template, 8, 1, "label");
            i0.ɵɵconditionalCreate(21, AcademicWorkspaceComponent_Conditional_21_Template, 8, 1, "label");
            i0.ɵɵconditionalCreate(22, AcademicWorkspaceComponent_Conditional_22_Template, 16, 2);
            i0.ɵɵconditionalCreate(23, AcademicWorkspaceComponent_Conditional_23_Template, 124, 27);
            i0.ɵɵconditionalCreate(24, AcademicWorkspaceComponent_Conditional_24_Template, 16, 6);
            i0.ɵɵconditionalCreate(25, AcademicWorkspaceComponent_Conditional_25_Template, 26, 6);
            i0.ɵɵconditionalCreate(26, AcademicWorkspaceComponent_Conditional_26_Template, 12, 3);
            i0.ɵɵconditionalCreate(27, AcademicWorkspaceComponent_Conditional_27_Template, 76, 13);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(28, "button", 7);
            i0.ɵɵlistener("click", function AcademicWorkspaceComponent_Template_button_click_28_listener() { return ctx.save(); });
            i0.ɵɵtext(29);
            i0.ɵɵelementEnd();
            i0.ɵɵconditionalCreate(30, AcademicWorkspaceComponent_Conditional_30_Template, 2, 0, "button", 8);
            i0.ɵɵelementEnd();
            i0.ɵɵconditionalCreate(31, AcademicWorkspaceComponent_Conditional_31_Template, 11, 1, "section", 3);
            i0.ɵɵelementStart(32, "section", 9)(33, "div", 10)(34, "div")(35, "h2");
            i0.ɵɵtext(36, " Existing records ");
            i0.ɵɵelementStart(37, "small");
            i0.ɵɵtext(38);
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(39, "input", 11);
            i0.ɵɵtwoWayListener("ngModelChange", function AcademicWorkspaceComponent_Template_input_ngModelChange_39_listener($event) { i0.ɵɵtwoWayBindingSet(ctx.search, $event) || (ctx.search = $event); return $event; });
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(40, "div", 12)(41, "table")(42, "thead")(43, "tr")(44, "th");
            i0.ɵɵtext(45);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(46, "th");
            i0.ɵɵtext(47, "Session");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(48, "th");
            i0.ɵɵtext(49, "Semester");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(50, "th");
            i0.ɵɵtext(51, "Details");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(52, "th", 13);
            i0.ɵɵtext(53, "Actions");
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(54, "tbody");
            i0.ɵɵrepeaterCreate(55, AcademicWorkspaceComponent_For_56_Template, 14, 6, "tr", null, _forTrack0, false, AcademicWorkspaceComponent_ForEmpty_57_Template, 3, 1, "tr");
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(58, "div", 14)(59, "span");
            i0.ɵɵtext(60);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(61, "div")(62, "button", 15);
            i0.ɵɵlistener("click", function AcademicWorkspaceComponent_Template_button_click_62_listener() { return ctx.page.set(ctx.page() - 1); });
            i0.ɵɵtext(63, " Previous");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(64, "button", 15);
            i0.ɵɵlistener("click", function AcademicWorkspaceComponent_Template_button_click_64_listener() { return ctx.page.set(ctx.page() + 1); });
            i0.ɵɵtext(65, " Next ");
            i0.ɵɵelementEnd()()()()();
        } if (rf & 2) {
            i0.ɵɵproperty("title", ctx.title());
            i0.ɵɵadvance();
            i0.ɵɵconditional(ctx.error() ? 1 : -1);
            i0.ɵɵadvance();
            i0.ɵɵconditional(ctx.message() ? 2 : -1);
            i0.ɵɵadvance(5);
            i0.ɵɵtextInterpolate1(" ", ctx.section() === "subject-assignments" ? "Assign subjects to a group" : ctx.section() === "allocations" ? "Assign students" : "Create " + ctx.title(), " ");
            i0.ɵɵadvance(4);
            i0.ɵɵconditional(!i0.ɵɵpureFunction0(33, _c0).includes(ctx.section()) ? 11 : -1);
            i0.ɵɵadvance();
            i0.ɵɵconditional(i0.ɵɵpureFunction0(34, _c1).includes(ctx.section()) ? 12 : -1);
            i0.ɵɵadvance();
            i0.ɵɵconditional(i0.ɵɵpureFunction0(35, _c2).includes(ctx.section()) ? 13 : -1);
            i0.ɵɵadvance();
            i0.ɵɵconditional(ctx.section() === "timetable-structures" ? 14 : -1);
            i0.ɵɵadvance();
            i0.ɵɵconditional(ctx.section() === "timetable-periods" ? 15 : -1);
            i0.ɵɵadvance();
            i0.ɵɵconditional(ctx.section() === "groups" || ctx.section() === "subjects" || ctx.section() === "faculties" ? 16 : -1);
            i0.ɵɵadvance();
            i0.ɵɵconditional(ctx.section() === "groups" || ctx.section() === "subjects" ? 17 : -1);
            i0.ɵɵadvance();
            i0.ɵɵconditional(ctx.section() === "groups" ? 18 : -1);
            i0.ɵɵadvance();
            i0.ɵɵconditional(ctx.section() === "sections" ? 19 : -1);
            i0.ɵɵadvance();
            i0.ɵɵconditional(ctx.section() === "sets" || ctx.section() === "allocations" || ctx.section() === "subject-assignments" || ctx.section() === "timetables" ? 20 : -1);
            i0.ɵɵadvance();
            i0.ɵɵconditional(ctx.section() === "sets" || ctx.section() === "allocations" || ctx.section() === "timetables" ? 21 : -1);
            i0.ɵɵadvance();
            i0.ɵɵconditional(ctx.section() === "allocations" ? 22 : -1);
            i0.ɵɵadvance();
            i0.ɵɵconditional(ctx.section() === "subjects" ? 23 : -1);
            i0.ɵɵadvance();
            i0.ɵɵconditional(ctx.section() === "faculties" ? 24 : -1);
            i0.ɵɵadvance();
            i0.ɵɵconditional(ctx.section() === "rooms" ? 25 : -1);
            i0.ɵɵadvance();
            i0.ɵɵconditional(ctx.section() === "subject-assignments" ? 26 : -1);
            i0.ɵɵadvance();
            i0.ɵɵconditional(ctx.section() === "timetables" ? 27 : -1);
            i0.ɵɵadvance();
            i0.ɵɵproperty("disabled", ctx.saving());
            i0.ɵɵadvance();
            i0.ɵɵtextInterpolate1(" ", ctx.saving() ? "Saving\u2026" : ctx.section() === "timetable-periods" ? "Save period configuration" : ctx.section() === "subject-assignments" ? "Assign selected subjects" : ctx.section() === "allocations" ? "Assign student" : ctx.editingId() ? "Save changes" : "Save record", " ");
            i0.ɵɵadvance();
            i0.ɵɵconditional(ctx.editingId() ? 30 : -1);
            i0.ɵɵadvance();
            i0.ɵɵconditional(ctx.section() === "allocations" ? 31 : -1);
            i0.ɵɵadvance(7);
            i0.ɵɵtextInterpolate(ctx.filteredRecords().length);
            i0.ɵɵadvance();
            i0.ɵɵtwoWayProperty("ngModel", ctx.search);
            i0.ɵɵadvance(6);
            i0.ɵɵtextInterpolate(ctx.sectionUsesCode() ? "Name/code" : "Name");
            i0.ɵɵadvance(10);
            i0.ɵɵrepeater(ctx.pagedRecords());
            i0.ɵɵadvance(5);
            i0.ɵɵtextInterpolate2("Page ", ctx.page(), " of ", ctx.totalPages());
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("disabled", ctx.page() <= 1);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("disabled", ctx.page() >= ctx.totalPages());
        } }, dependencies: [CommonModule,
            FormsModule, i1.NgSelectOption, i1.ɵNgSelectMultipleOption, i1.DefaultValueAccessor, i1.NumberValueAccessor, i1.CheckboxControlValueAccessor, i1.SelectControlValueAccessor, i1.NgControlStatus, i1.MinValidator, i1.NgModel, AdminPageComponent,
            CompactActionMenuComponent,
            MultiSelectDropdownComponent], encapsulation: 2, changeDetection: 0 });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AcademicWorkspaceComponent, [{
        type: Component,
        args: [{ selector: 'erp-academic-workspace', imports: [
                    CommonModule,
                    FormsModule,
                    AdminPageComponent,
                    CompactActionMenuComponent,
                    MultiSelectDropdownComponent,
                ], changeDetection: ChangeDetectionStrategy.OnPush, template: "<erp-admin-page [title]=\"title()\" variant=\"minimal\" layout=\"collection\">\n  @if (error()) {\n    <div class=\"erp-alert erp-alert--error\" role=\"alert\">{{ error() }}</div>\n  }\n  @if (message()) {\n    <div class=\"erp-alert erp-alert--success\">{{ message() }}</div>\n  }\n\n  <section class=\"erp-card erp-card--padded\">\n    <div class=\"erp-card__header\">\n      <div>\n        <h2>\n          {{\n            section() === 'subject-assignments'\n              ? 'Assign subjects to a group'\n              : section() === 'allocations'\n                ? 'Assign students'\n                : 'Create ' + title()\n          }}\n        </h2>\n        <p>Fields use current academic master data and enforce session/semester compatibility.</p>\n      </div>\n    </div>\n    <div class=\"erp-form-grid\">\n      @if (\n        !['faculties', 'rooms', 'timetable-structures', 'timetable-periods'].includes(section())\n      ) {\n        <label\n          ><span>Academic session *</span\n          ><select class=\"erp-control\" [(ngModel)]=\"session\">\n            <option value=\"\">Select session</option>\n            @for (item of master('academic'); track item._id) {\n              <option [value]=\"item.name\">{{ item.name }}</option>\n            }\n          </select></label\n        >\n        @if (section() !== 'timetable-masters') {\n          <label\n            ><span>Semester *</span\n            ><select class=\"erp-control\" [(ngModel)]=\"semester\">\n              @for (item of periodCountOptions; track item) {\n                <option [ngValue]=\"item\">Semester {{ item }}</option>\n              }\n            </select></label\n          >\n        }\n      }\n      @if (['groups', 'subjects', 'faculties', 'rooms', 'timetable-masters'].includes(section())) {\n        <label\n          ><span>University *</span\n          ><select class=\"erp-control\" [(ngModel)]=\"universityId\">\n            <option value=\"\">Select university</option>\n            @for (item of master('university'); track item._id) {\n              <option [value]=\"item._id\">{{ item.name }}</option>\n            }\n          </select></label\n        >\n        <label\n          ><span>College *</span\n          ><select class=\"erp-control\" [(ngModel)]=\"collegeId\">\n            <option value=\"\">Select college</option>\n            @for (\n              item of scopedMaster('college', universityId ? [universityId] : []);\n              track item._id\n            ) {\n              <option [value]=\"item._id\">{{ item.name }}</option>\n            }\n          </select></label\n        >\n      }\n      @if (\n        [\n          'groups',\n          'sections',\n          'sets',\n          'subjects',\n          'faculties',\n          'rooms',\n          'timetable-masters',\n          'timetable-structures',\n        ].includes(section())\n      ) {\n        <label><span>Name *</span><input class=\"erp-control\" [(ngModel)]=\"name\" /></label>\n        @if (sectionUsesCode()) {\n          <label><span>Code *</span><input class=\"erp-control\" [(ngModel)]=\"code\" /></label>\n        }\n      }\n      @if (section() === 'timetable-structures') {\n        <label\n          ><span>Timetable *</span\n          ><select class=\"erp-control\" [(ngModel)]=\"timetableMasterId\">\n            <option value=\"\">Select timetable</option>\n            @for (item of timetableMasters(); track item._id) {\n              <option [value]=\"item._id\">{{ item.name }}</option>\n            }\n          </select></label\n        >\n        <label\n          ><span>Number of periods *</span\n          ><select class=\"erp-control\" [(ngModel)]=\"periodCount\">\n            @for (item of periodCountOptions; track item) {\n              <option [ngValue]=\"item\">{{ item }} periods</option>\n            }\n          </select></label\n        >\n        <div class=\"erp-field-stack\">\n          <span>Working days *</span\n          ><erp-multi-select-dropdown\n            [options]=\"dayOptions\"\n            [value]=\"workingDays\"\n            placeholder=\"Select working days\"\n            (valueChange)=\"workingDays = $event\"\n          />\n        </div>\n      }\n      @if (section() === 'timetable-periods') {\n        <label\n          ><span>Timetable *</span\n          ><select\n            class=\"erp-control\"\n            [(ngModel)]=\"timetableMasterId\"\n            (ngModelChange)=\"timetableStructureId = ''; timetablePeriodId = ''\"\n          >\n            <option value=\"\">Select timetable</option>\n            @for (item of timetableMasters(); track item._id) {\n              <option [value]=\"item._id\">{{ item.name }}</option>\n            }\n          </select></label\n        >\n        <label\n          ><span>Structure *</span\n          ><select\n            class=\"erp-control\"\n            [(ngModel)]=\"timetableStructureId\"\n            (ngModelChange)=\"timetablePeriodId = ''\"\n          >\n            <option value=\"\">Select structure</option>\n            @for (item of structuresForMaster(); track item._id) {\n              <option [value]=\"item._id\">{{ item.name }}</option>\n            }\n          </select></label\n        >\n        <label\n          ><span>Period *</span\n          ><select\n            class=\"erp-control\"\n            [ngModel]=\"timetablePeriodId\"\n            (ngModelChange)=\"selectPeriod($event)\"\n          >\n            <option value=\"\">Select period</option>\n            @for (item of periodsForStructure(); track item._id) {\n              <option [value]=\"item._id\">\n                Period {{ item.periodNumber }}{{ item.isConfigured ? ' \u00B7 configured' : '' }}\n              </option>\n            }\n          </select></label\n        >\n        <label\n          ><span>Period type *</span\n          ><select class=\"erp-control\" [(ngModel)]=\"periodType\">\n            <option value=\"lecture\">Lecture</option>\n            <option value=\"break\">Break</option>\n          </select></label\n        >\n        <label\n          ><span>From time *</span><input class=\"erp-control\" type=\"time\" [(ngModel)]=\"startTime\"\n        /></label>\n        <label\n          ><span>Duration *</span\n          ><select class=\"erp-control\" [(ngModel)]=\"durationMinutes\">\n            @for (item of durationOptions; track item) {\n              <option [ngValue]=\"item\">{{ item }} minutes</option>\n            }\n          </select></label\n        >\n        <label\n          ><span>To time</span><input class=\"erp-control\" [value]=\"calculatedEndTime()\" readonly\n        /></label>\n      }\n      @if (section() === 'groups' || section() === 'subjects' || section() === 'faculties') {\n        <div class=\"erp-field-stack\">\n          <span>Departments *</span\n          ><erp-multi-select-dropdown\n            [options]=\"options(scopedMaster('department', collegeId ? [collegeId] : []))\"\n            [value]=\"departmentIds\"\n            placeholder=\"Select departments\"\n            (valueChange)=\"departmentIds = $event\"\n          />\n        </div>\n      }\n      @if (section() === 'groups' || section() === 'subjects') {\n        <div class=\"erp-field-stack\">\n          <span>Courses</span\n          ><erp-multi-select-dropdown\n            [options]=\"options(scopedMaster('course', levelId ? [levelId] : []))\"\n            [value]=\"courseIds\"\n            placeholder=\"Select courses\"\n            (valueChange)=\"courseIds = $event\"\n          />\n        </div>\n        <div class=\"erp-field-stack\">\n          <span>Branches</span\n          ><erp-multi-select-dropdown\n            [options]=\"options(master('branch'))\"\n            [value]=\"branchIds\"\n            placeholder=\"Select branches\"\n            (valueChange)=\"branchIds = $event\"\n          />\n        </div>\n      }\n      @if (section() === 'groups') {\n        <label\n          ><span>Level/course type</span\n          ><select class=\"erp-control\" [(ngModel)]=\"levelId\">\n            <option value=\"\">Select level</option>\n            @for (item of scopedMaster('level', departmentIds); track item._id) {\n              <option [value]=\"item._id\">{{ item.name }}</option>\n            }\n          </select></label\n        >\n      }\n      @if (section() === 'sections') {\n        <div class=\"erp-field-stack\">\n          <span>Groups *</span\n          ><erp-multi-select-dropdown\n            [options]=\"options(groupsForPeriod(), false)\"\n            [value]=\"groupIds\"\n            placeholder=\"Select groups\"\n            (valueChange)=\"groupIds = $event\"\n          /><small>A section may be mapped to multiple groups.</small>\n        </div>\n      }\n      @if (\n        section() === 'sets' ||\n        section() === 'allocations' ||\n        section() === 'subject-assignments' ||\n        section() === 'timetables'\n      ) {\n        <label\n          ><span>Group *</span\n          ><select class=\"erp-control\" [(ngModel)]=\"groupId\">\n            <option value=\"\">Select group</option>\n            @for (item of groups(); track item._id) {\n              @if (item.academicSession === session && item.semester === semester) {\n                <option [value]=\"item._id\">{{ item.name }}</option>\n              }\n            }\n          </select></label\n        >\n      }\n      @if (section() === 'sets' || section() === 'allocations' || section() === 'timetables') {\n        <label\n          ><span>Section *</span\n          ><select class=\"erp-control\" [(ngModel)]=\"sectionId\">\n            <option value=\"\">Select section</option>\n            @for (item of availableSections(); track item._id) {\n              <option [value]=\"item._id\">{{ item.name }}</option>\n            }\n          </select></label\n        >\n      }\n      @if (section() === 'allocations') {\n        <label\n          ><span>Set *</span\n          ><select class=\"erp-control\" [(ngModel)]=\"setId\">\n            <option value=\"\">Select set</option>\n            @for (item of availableSets(); track item._id) {\n              <option [value]=\"item._id\">{{ item.name }}</option>\n            }\n          </select></label\n        >\n        <label\n          ><span>Approved student *</span\n          ><select class=\"erp-control\" [(ngModel)]=\"studentAdmissionId\">\n            <option value=\"\">Select student</option>\n            @for (item of students(); track item._id) {\n              <option [value]=\"item._id\">{{ item.studentName }} \u00B7 {{ item.studentId }}</option>\n            }\n          </select></label\n        >\n      }\n      @if (section() === 'subjects') {\n        <label\n          ><span>Subject name in Hindi</span><input class=\"erp-control\" [(ngModel)]=\"hindiName\"\n        /></label>\n        <label\n          ><span>Subject type *</span\n          ><select class=\"erp-control\" [(ngModel)]=\"subjectType\">\n            <option value=\"theory\">Theory</option>\n            <option value=\"practical\">Practical</option>\n            <option value=\"tutorial\">Tutorial</option>\n            <option value=\"project\">Project</option>\n          </select></label\n        >\n        <label\n          ><span>Subject option</span\n          ><select class=\"erp-control\" [(ngModel)]=\"subjectOption\">\n            <option value=\"required\">Required</option>\n            <option value=\"elective\">Elective</option>\n          </select></label\n        >\n        <label\n          ><span>Evaluation</span\n          ><select class=\"erp-control\" [(ngModel)]=\"evaluationType\">\n            <option value=\"marks\">Marks</option>\n            <option value=\"grade\">Grade</option>\n          </select></label\n        >\n        <label\n          ><span>Credits</span\n          ><input class=\"erp-control\" type=\"number\" min=\"0\" [(ngModel)]=\"credits\" /></label\n        ><label\n          ><span>Subject counter</span\n          ><input class=\"erp-control\" type=\"number\" min=\"0\" [(ngModel)]=\"subjectCounter\"\n        /></label>\n        <label\n          ><span>Lecture hours</span\n          ><input class=\"erp-control\" type=\"number\" min=\"0\" [(ngModel)]=\"lectureHours\" /></label\n        ><label\n          ><span>Tutorial hours</span\n          ><input class=\"erp-control\" type=\"number\" min=\"0\" [(ngModel)]=\"tutorialHours\"\n        /></label>\n        <label\n          ><span>Lab hours</span\n          ><input class=\"erp-control\" type=\"number\" min=\"0\" [(ngModel)]=\"labHours\" /></label\n        ><label\n          ><span>Maximum marks</span\n          ><input class=\"erp-control\" type=\"number\" min=\"0\" [(ngModel)]=\"maxMarks\" /></label\n        ><label\n          ><span>Pass marks</span\n          ><input class=\"erp-control\" type=\"number\" min=\"0\" [(ngModel)]=\"passMarks\"\n        /></label>\n        <label\n          ><span>Internal marks</span\n          ><input class=\"erp-control\" type=\"number\" min=\"0\" [(ngModel)]=\"internalMarks\"\n        /></label>\n        <label\n          ><span>External marks</span\n          ><input class=\"erp-control\" type=\"number\" min=\"0\" [(ngModel)]=\"externalMarks\"\n        /></label>\n        <label\n          ><span>Mid-term marks</span\n          ><input class=\"erp-control\" type=\"number\" min=\"0\" [(ngModel)]=\"midTermMarks\"\n        /></label>\n        <label\n          ><span><input type=\"checkbox\" [(ngModel)]=\"isPaper\" /> Paper exists</span></label\n        ><label\n          ><span><input type=\"checkbox\" [(ngModel)]=\"isOpenElective\" /> Open elective</span></label\n        ><label\n          ><span><input type=\"checkbox\" [(ngModel)]=\"isFoundation\" /> Foundation</span></label\n        ><label\n          ><span><input type=\"checkbox\" [(ngModel)]=\"isGroupSubject\" /> Group subject</span></label\n        >\n        <label\n          ><span\n            ><input type=\"checkbox\" [(ngModel)]=\"allowMidMarksEntry\" /> Faculty may enter mid-term\n            marks</span\n          ></label\n        >\n        <label\n          ><span\n            ><input type=\"checkbox\" [(ngModel)]=\"allowExternalMarksEntry\" /> Faculty may enter\n            external marks</span\n          ></label\n        >\n        <label\n          ><span\n            ><input type=\"checkbox\" [(ngModel)]=\"showAlternativeGrade\" /> Show alternative\n            grade</span\n          ></label\n        >\n        <label\n          ><span\n            ><input type=\"checkbox\" [(ngModel)]=\"showAlternativeGradePoint\" /> Show alternative\n            grade point</span\n          ></label\n        >\n        <label\n          ><span\n            ><input type=\"checkbox\" [(ngModel)]=\"showAlternativeSubjectCredit\" /> Show alternative\n            subject credit</span\n          ></label\n        >\n        <label\n          ><span\n            ><input type=\"checkbox\" [(ngModel)]=\"hideInternalMarks\" /> Hide internal marks from\n            student</span\n          ></label\n        >\n        <label\n          ><span\n            ><input type=\"checkbox\" [(ngModel)]=\"hideExternalMarks\" /> Hide external marks from\n            student</span\n          ></label\n        >\n        <label\n          ><span\n            ><input type=\"checkbox\" [(ngModel)]=\"hideMidTermMarks\" /> Hide mid-term marks from\n            student</span\n          ></label\n        >\n        <label\n          ><span\n            ><input type=\"checkbox\" [(ngModel)]=\"hideTotalMarks\" /> Hide total marks from\n            student</span\n          ></label\n        >\n      }\n      @if (section() === 'faculties') {\n        <label\n          ><span>Email *</span><input class=\"erp-control\" type=\"email\" [(ngModel)]=\"email\" /></label\n        ><label\n          ><span>Weekly workload limit</span\n          ><input class=\"erp-control\" type=\"number\" min=\"1\" [(ngModel)]=\"weeklyLimit\"\n        /></label>\n        <div class=\"erp-field-stack\">\n          <span>Subjects</span\n          ><erp-multi-select-dropdown\n            [options]=\"options(subjects())\"\n            [value]=\"subjectIds\"\n            placeholder=\"Select subjects\"\n            (valueChange)=\"subjectIds = $event\"\n          />\n        </div>\n        <div class=\"erp-field-stack\">\n          <span>Available days</span\n          ><erp-multi-select-dropdown\n            [options]=\"dayOptions\"\n            [value]=\"availableDays\"\n            placeholder=\"Select available days\"\n            (valueChange)=\"availableDays = $event\"\n          />\n        </div>\n      }\n      @if (section() === 'rooms') {\n        <label><span>Building</span><input class=\"erp-control\" [(ngModel)]=\"building\" /></label\n        ><label><span>Floor</span><input class=\"erp-control\" [(ngModel)]=\"floor\" /></label\n        ><label\n          ><span>Room type</span\n          ><select class=\"erp-control\" [(ngModel)]=\"roomType\">\n            <option value=\"classroom\">Classroom</option>\n            <option value=\"lab\">Lab</option>\n            <option value=\"auditorium\">Auditorium</option>\n          </select></label\n        ><label\n          ><span>Capacity *</span\n          ><input class=\"erp-control\" type=\"number\" min=\"1\" [(ngModel)]=\"capacity\"\n        /></label>\n        <div class=\"erp-field-stack\">\n          <span>Supported subjects (optional)</span\n          ><erp-multi-select-dropdown\n            [options]=\"options(subjects())\"\n            [value]=\"subjectIds\"\n            placeholder=\"Select supported subjects\"\n            (valueChange)=\"subjectIds = $event\"\n          />\n        </div>\n      }\n      @if (section() === 'subject-assignments') {\n        <div class=\"erp-field-stack\">\n          <span>Subjects *</span\n          ><erp-multi-select-dropdown\n            [options]=\"options(availableSubjects())\"\n            [value]=\"subjectIds\"\n            placeholder=\"Select subjects\"\n            (valueChange)=\"subjectIds = $event\"\n          />\n        </div>\n        <label\n          ><span>Requirement</span\n          ><select class=\"erp-control\" [(ngModel)]=\"requirement\">\n            <option value=\"required\">Required</option>\n            <option value=\"elective\">Elective</option>\n          </select></label\n        >\n      }\n      @if (section() === 'timetables') {\n        <label\n          ><span>Timetable *</span\n          ><select\n            class=\"erp-control\"\n            [(ngModel)]=\"timetableMasterId\"\n            (ngModelChange)=\"timetableStructureId = ''; timetablePeriodId = ''\"\n          >\n            <option value=\"\">Select timetable</option>\n            @for (item of timetableMasters(); track item._id) {\n              @if (item.academicSession === session) {\n                <option [value]=\"item._id\">{{ item.name }}</option>\n              }\n            }\n          </select></label\n        >\n        <label\n          ><span>Structure *</span\n          ><select\n            class=\"erp-control\"\n            [(ngModel)]=\"timetableStructureId\"\n            (ngModelChange)=\"timetablePeriodId = ''\"\n          >\n            <option value=\"\">Select structure</option>\n            @for (item of structuresForMaster(); track item._id) {\n              <option [value]=\"item._id\">{{ item.name }}</option>\n            }\n          </select></label\n        >\n        <label\n          ><span>Lecture period *</span\n          ><select class=\"erp-control\" [(ngModel)]=\"timetablePeriodId\">\n            <option value=\"\">Select configured lecture period</option>\n            @for (item of configuredLecturePeriods(); track item._id) {\n              <option [value]=\"item._id\">\n                Period {{ item.periodNumber }} \u00B7 {{ item.startTime }}\u2013{{ item.endTime }}\n              </option>\n            }\n          </select></label\n        >\n        <div class=\"erp-field-stack\">\n          <span>Sets (optional)</span\n          ><erp-multi-select-dropdown\n            [options]=\"options(availableSets())\"\n            [value]=\"setIds\"\n            placeholder=\"Entire section or select sets\"\n            (valueChange)=\"setIds = $event\"\n          />\n        </div>\n        <label\n          ><span>Subject *</span\n          ><select class=\"erp-control\" [(ngModel)]=\"subjectIds[0]\">\n            <option value=\"\">Select subject</option>\n            @for (item of availableSubjects(); track item._id) {\n              <option [value]=\"item._id\">{{ item.code }} \u00B7 {{ item.name }}</option>\n            }\n          </select></label\n        >\n        <label\n          ><span>Faculty *</span\n          ><select class=\"erp-control\" [(ngModel)]=\"facultyId\">\n            <option value=\"\">Select faculty</option>\n            @for (item of faculties(); track item._id) {\n              <option [value]=\"item._id\">{{ item.name }}</option>\n            }\n          </select></label\n        >\n        <label\n          ><span>Room/lab *</span\n          ><select class=\"erp-control\" [(ngModel)]=\"roomId\">\n            <option value=\"\">Select room</option>\n            @for (item of rooms(); track item._id) {\n              <option [value]=\"item._id\">{{ item.name }} \u00B7 capacity {{ item.capacity }}</option>\n            }\n          </select></label\n        >\n        <label\n          ><span>Day *</span\n          ><select class=\"erp-control\" [(ngModel)]=\"day\">\n            @for (\n              item of [\n                'Monday',\n                'Tuesday',\n                'Wednesday',\n                'Thursday',\n                'Friday',\n                'Saturday',\n                'Sunday',\n              ];\n              track item\n            ) {\n              <option [value]=\"item\">{{ item }}</option>\n            }\n          </select></label\n        >\n        <label\n          ><span>Class type</span\n          ><select class=\"erp-control\" [(ngModel)]=\"classType\">\n            <option value=\"lecture\">Lecture</option>\n            <option value=\"tutorial\">Tutorial</option>\n            <option value=\"lab\">Lab</option>\n          </select></label\n        >\n        <label\n          ><span>Effective from</span\n          ><input class=\"erp-control\" type=\"date\" [(ngModel)]=\"effectiveFrom\"\n        /></label>\n        <label\n          ><span>Effective to</span\n          ><input class=\"erp-control\" type=\"date\" [(ngModel)]=\"effectiveTo\"\n        /></label>\n      }\n    </div>\n    <button\n      class=\"erp-button erp-button--primary\"\n      type=\"button\"\n      [disabled]=\"saving()\"\n      (click)=\"save()\"\n    >\n      {{\n        saving()\n          ? 'Saving\u2026'\n          : section() === 'timetable-periods'\n            ? 'Save period configuration'\n            : section() === 'subject-assignments'\n              ? 'Assign selected subjects'\n              : section() === 'allocations'\n                ? 'Assign student'\n                : editingId()\n                  ? 'Save changes'\n                  : 'Save record'\n      }}\n    </button>\n    @if (editingId()) {\n      <button class=\"erp-button erp-button--secondary\" type=\"button\" (click)=\"reset()\">\n        Cancel edit\n      </button>\n    }\n  </section>\n\n  @if (section() === 'allocations') {\n    <section class=\"erp-card erp-card--padded\">\n      <div class=\"erp-card__header\">\n        <div>\n          <h2>Bulk CSV allocation</h2>\n          <p>\n            Download the template, enter Student IDs and mapping codes, then preview before\n            importing.\n          </p>\n        </div>\n        <button class=\"erp-button erp-button--secondary\" type=\"button\" (click)=\"downloadTemplate()\">\n          Download template\n        </button>\n      </div>\n      <input class=\"erp-control\" type=\"file\" accept=\".csv,text/csv\" (change)=\"readCsv($event)\" />\n      @if (previewRows().length) {\n        <div class=\"erp-table-shell__scroll\">\n          <table>\n            <thead>\n              <tr>\n                <th>Row</th>\n                <th>Student</th>\n                <th>Result</th>\n              </tr>\n            </thead>\n            <tbody>\n              @for (row of previewRows(); track row.row) {\n                <tr>\n                  <td>{{ row.row }}</td>\n                  <td>{{ row.data.studentAdmissionId || 'Not resolved' }}</td>\n                  <td>{{ row.error || 'Ready' }}</td>\n                </tr>\n              }\n            </tbody>\n          </table>\n        </div>\n        <button class=\"erp-button erp-button--primary\" type=\"button\" (click)=\"importPreview()\">\n          Import valid rows\n        </button>\n      }\n    </section>\n  }\n\n  <section class=\"erp-card erp-table-shell\">\n    <div class=\"erp-table-toolbar\">\n      <div>\n        <h2>\n          Existing records <small>{{ filteredRecords().length }}</small>\n        </h2>\n      </div>\n      <input class=\"erp-control\" type=\"search\" [(ngModel)]=\"search\" placeholder=\"Search records\" />\n    </div>\n    <div class=\"erp-table-shell__scroll\">\n      <table>\n        <thead>\n          <tr>\n            <th>{{ sectionUsesCode() ? 'Name/code' : 'Name' }}</th>\n            <th>Session</th>\n            <th>Semester</th>\n            <th>Details</th>\n            <th class=\"erp-table-shell__actions\">Actions</th>\n          </tr>\n        </thead>\n        <tbody>\n          @for (item of pagedRecords(); track item._id) {\n            <tr>\n              <td>\n                <strong>{{\n                  item.name ||\n                    (item.periodNumber\n                      ? (item.structureName ? item.structureName + ' \u00B7 ' : '') +\n                        'Period ' +\n                        item.periodNumber\n                      : '') ||\n                    item.subjectName ||\n                    item.studentName ||\n                    item.groupName ||\n                    item.code ||\n                    'Record'\n                }}</strong>\n                @if (sectionUsesCode()) {\n                  <small>{{ item.code || item.subjectCode }}</small>\n                } @else if (item.studentId) {\n                  <small>{{ item.studentId }}</small>\n                }\n              </td>\n              <td>{{ item.academicSession || '\u2014' }}</td>\n              <td>{{ item.semester || '\u2014' }}</td>\n              <td>\n                {{\n                  item.day\n                    ? item.day + ' \u00B7 ' + item.startTime + '\u2013' + item.endTime\n                    : item.periodNumber\n                      ? item.isConfigured\n                        ? (item.periodType === 'break' ? 'Break' : 'Lecture') +\n                          ' \u00B7 ' +\n                          item.startTime +\n                          '\u2013' +\n                          item.endTime +\n                          ' \u00B7 ' +\n                          item.durationMinutes +\n                          ' min'\n                        : 'Not configured'\n                      : item.departmentNames?.join(', ') ||\n                        item.requirement ||\n                        item.status ||\n                        'Active'\n                }}\n              </td>\n              <td class=\"erp-table-shell__actions\">\n                <erp-compact-action-menu\n                  [items]=\"actionsFor()\"\n                  (selected)=\"handleAction($event, item)\"\n                />\n              </td>\n            </tr>\n          } @empty {\n            <tr>\n              <td colspan=\"5\" class=\"erp-empty-state\">\n                {{ loading() ? 'Loading records\u2026' : 'No records have been created.' }}\n              </td>\n            </tr>\n          }\n        </tbody>\n      </table>\n    </div>\n    <div class=\"erp-table-pagination\">\n      <span>Page {{ page() }} of {{ totalPages() }}</span>\n      <div>\n        <button\n          class=\"erp-button erp-button--secondary\"\n          type=\"button\"\n          [disabled]=\"page() <= 1\"\n          (click)=\"page.set(page() - 1)\"\n        >\n          Previous</button\n        ><button\n          class=\"erp-button erp-button--secondary\"\n          type=\"button\"\n          [disabled]=\"page() >= totalPages()\"\n          (click)=\"page.set(page() + 1)\"\n        >\n          Next\n        </button>\n      </div>\n    </div>\n  </section>\n</erp-admin-page>\n" }]
    }], () => [], null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(AcademicWorkspaceComponent, { className: "AcademicWorkspaceComponent", filePath: "frontend/src/app/features/admin/academics/academic-workspace.component.ts", lineNumber: 126 }); })();
