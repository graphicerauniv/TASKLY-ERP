import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LucideAlertTriangle, LucideArrowRight, LucideCheck, LucideChevronLeft, LucideChevronRight, LucideColumns3, LucideDownload, LucideFilter, LucideGraduationCap, LucideHistory, LucideRefreshCw, LucideSearch, LucideUpload, LucideUserRound, LucideUsersRound, } from '@lucide/angular';
import { concatMap, forkJoin, from, toArray } from 'rxjs';
import { ApiService } from '../../../core/api.service';
import { ERP_PAGINATION } from '../../../core/config/data-view.constants';
import { AdminIllustrationComponent } from '../../../shared/ui/admin-illustration/admin-illustration.component';
import { AdminPageComponent } from '../../../shared/ui/admin-page/admin-page.component';
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
import * as i2 from "@angular/common";
const _c0 = () => [1, 2, 3];
const _c1 = () => [1, 2, 3, 4, 5, 6, 7, 8];
const _c2 = (a0, a1, a2) => [a0, a1, a2];
const _forTrack0 = ($index, $item) => $item._id;
function StudentAllocationComponent_For_4_Conditional_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(0, "svg", 6);
} }
function StudentAllocationComponent_For_4_Conditional_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtext(0);
} if (rf & 2) {
    const item_r1 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵtextInterpolate1(" ", item_r1, " ");
} }
function StudentAllocationComponent_For_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div")(1, "span");
    i0.ɵɵconditionalCreate(2, StudentAllocationComponent_For_4_Conditional_2_Template, 1, 0, ":svg:svg", 6)(3, StudentAllocationComponent_For_4_Conditional_3_Template, 1, 1);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "strong");
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const item_r1 = ctx.$implicit;
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵclassProp("is-active", ctx_r1.step() === item_r1)("is-complete", ctx_r1.step() > item_r1);
    i0.ɵɵadvance(2);
    i0.ɵɵconditional(ctx_r1.step() > item_r1 ? 2 : 3);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(item_r1 === 1 ? "Scope" : item_r1 === 2 ? "Students" : "Review");
} }
function StudentAllocationComponent_Conditional_5_Template(rf, ctx) { if (rf & 1) {
    const _r3 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "label", 7);
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(1, "svg", 8);
    i0.ɵɵtext(2, " Import CSV ");
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(3, "input", 9);
    i0.ɵɵlistener("change", function StudentAllocationComponent_Conditional_5_Template_input_change_3_listener($event) { i0.ɵɵrestoreView(_r3); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.readCsv($event)); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(4, "button", 10);
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(5, "svg", 11);
    i0.ɵɵtext(6, " Allocation history ");
    i0.ɵɵelementEnd();
} }
function StudentAllocationComponent_Conditional_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 4);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r1.error());
} }
function StudentAllocationComponent_Conditional_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 5);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r1.message());
} }
function StudentAllocationComponent_Conditional_8_For_12_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 16);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r5 = ctx.$implicit;
    i0.ɵɵproperty("value", item_r5);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(item_r5);
} }
function StudentAllocationComponent_Conditional_8_For_18_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 16);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r6 = ctx.$implicit;
    i0.ɵɵproperty("value", item_r6);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1("Semester ", item_r6);
} }
function StudentAllocationComponent_Conditional_8_For_26_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 16);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r7 = ctx.$implicit;
    i0.ɵɵproperty("value", item_r7._id);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(item_r7.name);
} }
function StudentAllocationComponent_Conditional_8_For_34_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 16);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r8 = ctx.$implicit;
    i0.ɵɵproperty("value", item_r8._id);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(item_r8.name);
} }
function StudentAllocationComponent_Conditional_8_For_42_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 16);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r9 = ctx.$implicit;
    i0.ɵɵproperty("value", item_r9._id);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(item_r9.name);
} }
function StudentAllocationComponent_Conditional_8_Template(rf, ctx) { if (rf & 1) {
    const _r4 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "section", 12)(1, "header")(2, "h2");
    i0.ɵɵtext(3, "Choose allocation scope");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(4, "div", 13)(5, "label")(6, "span");
    i0.ɵɵtext(7, "Academic session *");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "select", 14);
    i0.ɵɵtwoWayListener("ngModelChange", function StudentAllocationComponent_Conditional_8_Template_select_ngModelChange_8_listener($event) { i0.ɵɵrestoreView(_r4); const ctx_r1 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r1.session, $event) || (ctx_r1.session = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵlistener("ngModelChange", function StudentAllocationComponent_Conditional_8_Template_select_ngModelChange_8_listener() { i0.ɵɵrestoreView(_r4); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.selectSession()); });
    i0.ɵɵelementStart(9, "option", 15);
    i0.ɵɵtext(10, "Select session");
    i0.ɵɵelementEnd();
    i0.ɵɵrepeaterCreate(11, StudentAllocationComponent_Conditional_8_For_12_Template, 2, 2, "option", 16, i0.ɵɵrepeaterTrackByIdentity);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(13, "label")(14, "span");
    i0.ɵɵtext(15, "Semester *");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(16, "select", 14);
    i0.ɵɵtwoWayListener("ngModelChange", function StudentAllocationComponent_Conditional_8_Template_select_ngModelChange_16_listener($event) { i0.ɵɵrestoreView(_r4); const ctx_r1 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r1.semester, $event) || (ctx_r1.semester = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵlistener("ngModelChange", function StudentAllocationComponent_Conditional_8_Template_select_ngModelChange_16_listener() { i0.ɵɵrestoreView(_r4); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.selectSession()); });
    i0.ɵɵrepeaterCreate(17, StudentAllocationComponent_Conditional_8_For_18_Template, 2, 2, "option", 16, i0.ɵɵrepeaterTrackByIdentity);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(19, "label")(20, "span");
    i0.ɵɵtext(21, "Group *");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(22, "select", 17);
    i0.ɵɵtwoWayListener("ngModelChange", function StudentAllocationComponent_Conditional_8_Template_select_ngModelChange_22_listener($event) { i0.ɵɵrestoreView(_r4); const ctx_r1 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r1.groupId, $event) || (ctx_r1.groupId = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵlistener("ngModelChange", function StudentAllocationComponent_Conditional_8_Template_select_ngModelChange_22_listener() { i0.ɵɵrestoreView(_r4); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.selectGroup()); });
    i0.ɵɵelementStart(23, "option", 15);
    i0.ɵɵtext(24);
    i0.ɵɵelementEnd();
    i0.ɵɵrepeaterCreate(25, StudentAllocationComponent_Conditional_8_For_26_Template, 2, 2, "option", 16, _forTrack0);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(27, "label")(28, "span");
    i0.ɵɵtext(29, "Section *");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(30, "select", 17);
    i0.ɵɵtwoWayListener("ngModelChange", function StudentAllocationComponent_Conditional_8_Template_select_ngModelChange_30_listener($event) { i0.ɵɵrestoreView(_r4); const ctx_r1 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r1.sectionId, $event) || (ctx_r1.sectionId = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵlistener("ngModelChange", function StudentAllocationComponent_Conditional_8_Template_select_ngModelChange_30_listener() { i0.ɵɵrestoreView(_r4); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.selectSection()); });
    i0.ɵɵelementStart(31, "option", 15);
    i0.ɵɵtext(32);
    i0.ɵɵelementEnd();
    i0.ɵɵrepeaterCreate(33, StudentAllocationComponent_Conditional_8_For_34_Template, 2, 2, "option", 16, _forTrack0);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(35, "label")(36, "span");
    i0.ɵɵtext(37, "Set *");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(38, "select", 17);
    i0.ɵɵtwoWayListener("ngModelChange", function StudentAllocationComponent_Conditional_8_Template_select_ngModelChange_38_listener($event) { i0.ɵɵrestoreView(_r4); const ctx_r1 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r1.setId, $event) || (ctx_r1.setId = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵlistener("ngModelChange", function StudentAllocationComponent_Conditional_8_Template_select_ngModelChange_38_listener() { i0.ɵɵrestoreView(_r4); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.clearSelection()); });
    i0.ɵɵelementStart(39, "option", 15);
    i0.ɵɵtext(40);
    i0.ɵɵelementEnd();
    i0.ɵɵrepeaterCreate(41, StudentAllocationComponent_Conditional_8_For_42_Template, 2, 2, "option", 16, _forTrack0);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(43, "footer")(44, "span");
    i0.ɵɵtext(45);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(46, "button", 18);
    i0.ɵɵlistener("click", function StudentAllocationComponent_Conditional_8_Template_button_click_46_listener() { i0.ɵɵrestoreView(_r4); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.downloadTemplate()); });
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(47, "svg", 19);
    i0.ɵɵtext(48, " CSV template ");
    i0.ɵɵelementEnd();
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(49, "button", 20);
    i0.ɵɵlistener("click", function StudentAllocationComponent_Conditional_8_Template_button_click_49_listener() { i0.ɵɵrestoreView(_r4); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.openStudents()); });
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(50, "svg", 21);
    i0.ɵɵtext(51, " Find students ");
    i0.ɵɵelementEnd()()();
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(52, "section", 22);
    i0.ɵɵelement(53, "erp-admin-illustration", 23);
    i0.ɵɵelementStart(54, "h2");
    i0.ɵɵtext(55, "Select a scope to load eligible students.");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(8);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r1.session);
    i0.ɵɵadvance(3);
    i0.ɵɵrepeater(ctx_r1.sessions());
    i0.ɵɵadvance(5);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r1.semester);
    i0.ɵɵadvance();
    i0.ɵɵrepeater(i0.ɵɵpureFunction0(13, _c1));
    i0.ɵɵadvance(5);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r1.groupId);
    i0.ɵɵproperty("disabled", !ctx_r1.session);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r1.session ? "Select group" : "Select a session first");
    i0.ɵɵadvance();
    i0.ɵɵrepeater(ctx_r1.availableGroups());
    i0.ɵɵadvance(5);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r1.sectionId);
    i0.ɵɵproperty("disabled", !ctx_r1.groupId);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r1.groupId ? "Select section" : "Select a group first");
    i0.ɵɵadvance();
    i0.ɵɵrepeater(ctx_r1.availableSections());
    i0.ɵɵadvance(5);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r1.setId);
    i0.ɵɵproperty("disabled", !ctx_r1.sectionId);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r1.sectionId ? "Select set" : "Select a section first");
    i0.ɵɵadvance();
    i0.ɵɵrepeater(ctx_r1.availableSets());
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(ctx_r1.scopeValid() ? "Scope complete. Eligible students are ready to load." : "Select all criteria to find eligible students.");
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("disabled", !ctx_r1.scopeValid() || ctx_r1.loading());
} }
function StudentAllocationComponent_Conditional_9_For_61_Template(rf, ctx) { if (rf & 1) {
    const _r11 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "tr")(1, "td")(2, "input", 46);
    i0.ɵɵlistener("change", function StudentAllocationComponent_Conditional_9_For_61_Template_input_change_2_listener() { const student_r12 = i0.ɵɵrestoreView(_r11).$implicit; const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.toggleStudent(student_r12)); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(3, "td")(4, "span", 47)(5, "i");
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(6, "svg", 48);
    i0.ɵɵelementEnd();
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(7, "strong");
    i0.ɵɵtext(8);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(9, "td");
    i0.ɵɵtext(10);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(11, "td");
    i0.ɵɵtext(12);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(13, "td");
    i0.ɵɵtext(14);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(15, "td");
    i0.ɵɵtext(16);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(17, "td")(18, "span", 49);
    i0.ɵɵelement(19, "i");
    i0.ɵɵtext(20, "Approved");
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const student_r12 = ctx.$implicit;
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵclassProp("is-selected", ctx_r1.isSelected(student_r12._id));
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("checked", ctx_r1.isSelected(student_r12._id));
    i0.ɵɵattribute("aria-label", "Select " + student_r12.studentName);
    i0.ɵɵadvance(6);
    i0.ɵɵtextInterpolate(student_r12.studentName || "Student");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(student_r12.studentId || "\u2014");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(student_r12.applicationNumber || "\u2014");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(student_r12.courseName || "\u2014");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(student_r12.currentAllocation || "Unassigned");
} }
function StudentAllocationComponent_Conditional_9_ForEmpty_62_Conditional_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "span", 52);
    i0.ɵɵelementStart(1, "h2");
    i0.ɵɵtext(2, "Loading eligible students\u2026");
    i0.ɵɵelementEnd();
} }
function StudentAllocationComponent_Conditional_9_ForEmpty_62_Conditional_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "erp-admin-illustration", 53);
    i0.ɵɵelementStart(1, "h2");
    i0.ɵɵtext(2, "No compatible students found");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "p");
    i0.ɵɵtext(4, "Change the scope or search to continue.");
    i0.ɵɵelementEnd();
} }
function StudentAllocationComponent_Conditional_9_ForEmpty_62_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "tr")(1, "td", 50)(2, "div", 51);
    i0.ɵɵconditionalCreate(3, StudentAllocationComponent_Conditional_9_ForEmpty_62_Conditional_3_Template, 3, 0)(4, StudentAllocationComponent_Conditional_9_ForEmpty_62_Conditional_4_Template, 5, 0);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(3);
    i0.ɵɵconditional(ctx_r1.loading() ? 3 : 4);
} }
function StudentAllocationComponent_Conditional_9_Conditional_63_Template(rf, ctx) { if (rf & 1) {
    const _r13 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 41)(1, "span")(2, "b");
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "button", 26);
    i0.ɵɵlistener("click", function StudentAllocationComponent_Conditional_9_Conditional_63_Template_button_click_5_listener() { i0.ɵɵrestoreView(_r13); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.clearSelection()); });
    i0.ɵɵtext(6, "Clear selection");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "button", 20);
    i0.ɵɵlistener("click", function StudentAllocationComponent_Conditional_9_Conditional_63_Template_button_click_7_listener() { i0.ɵɵrestoreView(_r13); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.review()); });
    i0.ɵɵtext(8);
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(9, "svg", 54);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(ctx_r1.selectedCount());
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r1.selectedCount() === 1 ? "student" : "students", " selected");
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("disabled", ctx_r1.loading());
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" Review ", ctx_r1.selectedCount(), " students ");
} }
function StudentAllocationComponent_Conditional_9_For_71_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 16);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const size_r14 = ctx.$implicit;
    i0.ɵɵproperty("value", size_r14);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1("", size_r14, " / page");
} }
function StudentAllocationComponent_Conditional_9_For_75_Conditional_0_Template(rf, ctx) { if (rf & 1) {
    const _r15 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 56);
    i0.ɵɵlistener("click", function StudentAllocationComponent_Conditional_9_For_75_Conditional_0_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r15); const item_r16 = i0.ɵɵnextContext().$implicit; const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.changePage(item_r16)); });
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r16 = i0.ɵɵnextContext().$implicit;
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵclassProp("is-current", item_r16 === ctx_r1.page());
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", item_r16, " ");
} }
function StudentAllocationComponent_Conditional_9_For_75_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵconditionalCreate(0, StudentAllocationComponent_Conditional_9_For_75_Conditional_0_Template, 2, 3, "button", 55);
} if (rf & 2) {
    const item_r16 = ctx.$implicit;
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵconditional(item_r16 > 0 && item_r16 <= ctx_r1.pages() ? 0 : -1);
} }
function StudentAllocationComponent_Conditional_9_Template(rf, ctx) { if (rf & 1) {
    const _r10 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "section", 24);
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(1, "svg", 25);
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(2, "strong");
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelement(4, "i");
    i0.ɵɵelementStart(5, "span");
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd();
    i0.ɵɵelement(7, "i");
    i0.ɵɵelementStart(8, "span");
    i0.ɵɵtext(9);
    i0.ɵɵelementEnd();
    i0.ɵɵelement(10, "i");
    i0.ɵɵelementStart(11, "span");
    i0.ɵɵtext(12);
    i0.ɵɵelementEnd();
    i0.ɵɵelement(13, "i");
    i0.ɵɵelementStart(14, "span");
    i0.ɵɵtext(15);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(16, "button", 26);
    i0.ɵɵlistener("click", function StudentAllocationComponent_Conditional_9_Template_button_click_16_listener() { i0.ɵɵrestoreView(_r10); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.changeScope()); });
    i0.ɵɵtext(17, "Change");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(18, "section", 27)(19, "label", 28);
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(20, "svg", 29);
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(21, "input", 30);
    i0.ɵɵtwoWayListener("ngModelChange", function StudentAllocationComponent_Conditional_9_Template_input_ngModelChange_21_listener($event) { i0.ɵɵrestoreView(_r10); const ctx_r1 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r1.search, $event) || (ctx_r1.search = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵlistener("keyup.enter", function StudentAllocationComponent_Conditional_9_Template_input_keyup_enter_21_listener() { i0.ɵɵrestoreView(_r10); const ctx_r1 = i0.ɵɵnextContext(); ctx_r1.page.set(1); return i0.ɵɵresetView(ctx_r1.loadStudents()); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(22, "button", 31);
    i0.ɵɵlistener("click", function StudentAllocationComponent_Conditional_9_Template_button_click_22_listener() { i0.ɵɵrestoreView(_r10); const ctx_r1 = i0.ɵɵnextContext(); ctx_r1.page.set(1); return i0.ɵɵresetView(ctx_r1.loadStudents()); });
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(23, "svg", 32);
    i0.ɵɵtext(24, " Apply ");
    i0.ɵɵelementEnd();
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(25, "button", 10);
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(26, "svg", 33);
    i0.ɵɵtext(27, " Columns ");
    i0.ɵɵelementEnd();
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(28, "button", 34);
    i0.ɵɵlistener("click", function StudentAllocationComponent_Conditional_9_Template_button_click_28_listener() { i0.ɵɵrestoreView(_r10); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.loadStudents()); });
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(29, "svg", 35);
    i0.ɵɵelementEnd()();
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(30, "div", 36)(31, "span");
    i0.ɵɵtext(32, "Admission: Approved");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(33, "span");
    i0.ɵɵtext(34, "Scope compatible");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(35, "button", 26);
    i0.ɵɵlistener("click", function StudentAllocationComponent_Conditional_9_Template_button_click_35_listener() { i0.ɵɵrestoreView(_r10); const ctx_r1 = i0.ɵɵnextContext(); ctx_r1.search = ""; ctx_r1.page.set(1); return i0.ɵɵresetView(ctx_r1.loadStudents()); });
    i0.ɵɵtext(36, "Clear search");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(37, "strong");
    i0.ɵɵtext(38);
    i0.ɵɵpipe(39, "number");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(40, "section", 37)(41, "div", 38)(42, "table")(43, "thead")(44, "tr")(45, "th")(46, "input", 39);
    i0.ɵɵlistener("change", function StudentAllocationComponent_Conditional_9_Template_input_change_46_listener() { i0.ɵɵrestoreView(_r10); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.toggleVisible()); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(47, "th");
    i0.ɵɵtext(48, "Student");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(49, "th");
    i0.ɵɵtext(50, "Student ID");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(51, "th");
    i0.ɵɵtext(52, "Application ID");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(53, "th");
    i0.ɵɵtext(54, "Programme");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(55, "th");
    i0.ɵɵtext(56, "Current allocation");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(57, "th");
    i0.ɵɵtext(58, "Admission status");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(59, "tbody");
    i0.ɵɵrepeaterCreate(60, StudentAllocationComponent_Conditional_9_For_61_Template, 21, 9, "tr", 40, _forTrack0, false, StudentAllocationComponent_Conditional_9_ForEmpty_62_Template, 5, 1, "tr");
    i0.ɵɵelementEnd()()();
    i0.ɵɵconditionalCreate(63, StudentAllocationComponent_Conditional_9_Conditional_63_Template, 10, 4, "div", 41);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(64, "footer", 42)(65, "span");
    i0.ɵɵtext(66);
    i0.ɵɵpipe(67, "number");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(68, "div")(69, "select", 14);
    i0.ɵɵlistener("ngModelChange", function StudentAllocationComponent_Conditional_9_Template_select_ngModelChange_69_listener($event) { i0.ɵɵrestoreView(_r10); const ctx_r1 = i0.ɵɵnextContext(); ctx_r1.pageSize.set(+$event); return i0.ɵɵresetView(ctx_r1.changePage(1)); });
    i0.ɵɵrepeaterCreate(70, StudentAllocationComponent_Conditional_9_For_71_Template, 2, 2, "option", 16, i0.ɵɵrepeaterTrackByIdentity);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(72, "button", 43);
    i0.ɵɵlistener("click", function StudentAllocationComponent_Conditional_9_Template_button_click_72_listener() { i0.ɵɵrestoreView(_r10); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.changePage(ctx_r1.page() - 1)); });
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(73, "svg", 44);
    i0.ɵɵelementEnd();
    i0.ɵɵrepeaterCreate(74, StudentAllocationComponent_Conditional_9_For_75_Template, 1, 1, null, null, i0.ɵɵrepeaterTrackByIdentity);
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(76, "button", 43);
    i0.ɵɵlistener("click", function StudentAllocationComponent_Conditional_9_Template_button_click_76_listener() { i0.ɵɵrestoreView(_r10); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.changePage(ctx_r1.page() + 1)); });
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(77, "svg", 45);
    i0.ɵɵelementEnd();
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(78, "small");
    i0.ɵɵtext(79, "Server-side pagination");
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(ctx_r1.session);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1("Semester ", ctx_r1.semester);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(ctx_r1.groupName());
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(ctx_r1.sectionName());
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(ctx_r1.setName());
    i0.ɵɵadvance(6);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r1.search);
    i0.ɵɵadvance(17);
    i0.ɵɵtextInterpolate1("", i0.ɵɵpipeBind1(39, 16, ctx_r1.total()), " matching students");
    i0.ɵɵadvance(8);
    i0.ɵɵproperty("checked", ctx_r1.allVisibleSelected());
    i0.ɵɵadvance(14);
    i0.ɵɵrepeater(ctx_r1.students());
    i0.ɵɵadvance(3);
    i0.ɵɵconditional(ctx_r1.selectedCount() ? 63 : -1);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate3("Showing ", ctx_r1.total() ? (ctx_r1.page() - 1) * ctx_r1.pageSize() + 1 : 0, "\u2013", ctx_r1.rangeEnd(), " of ", i0.ɵɵpipeBind1(67, 18, ctx_r1.total()), " results");
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngModel", ctx_r1.pageSize());
    i0.ɵɵadvance();
    i0.ɵɵrepeater(ctx_r1.pageSizeOptions);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("disabled", ctx_r1.page() === 1);
    i0.ɵɵadvance(2);
    i0.ɵɵrepeater(i0.ɵɵpureFunction3(20, _c2, ctx_r1.page() - 1, ctx_r1.page(), ctx_r1.page() + 1));
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("disabled", ctx_r1.page() === ctx_r1.pages());
} }
function StudentAllocationComponent_Conditional_10_For_56_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "tr")(1, "td")(2, "span", 47)(3, "i");
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(4, "svg", 48);
    i0.ɵɵelementEnd();
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(5, "strong");
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(7, "td");
    i0.ɵɵtext(8);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(9, "td");
    i0.ɵɵtext(10);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(11, "td");
    i0.ɵɵtext(12);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(13, "td")(14, "span", 49);
    i0.ɵɵelement(15, "i");
    i0.ɵɵtext(16);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const student_r18 = ctx.$implicit;
    i0.ɵɵadvance(6);
    i0.ɵɵtextInterpolate(student_r18.studentName);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(student_r18.studentId);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(student_r18.courseName || "\u2014");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(student_r18.currentAllocation || "Unassigned");
    i0.ɵɵadvance(2);
    i0.ɵɵclassProp("erp-status--warning", !!student_r18.error || student_r18.validation === "warning");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(student_r18.error ? "Review conflict" : "Ready");
} }
function StudentAllocationComponent_Conditional_10_ForEmpty_57_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "tr")(1, "td", 64)(2, "div", 51)(3, "h2");
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd()()()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate1("No ", ctx_r1.activeReviewTab(), " records");
} }
function StudentAllocationComponent_Conditional_10_Conditional_58_Template(rf, ctx) { if (rf & 1) {
    const _r19 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 60);
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(1, "svg", 65);
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(2, "strong");
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "button", 26);
    i0.ɵɵlistener("click", function StudentAllocationComponent_Conditional_10_Conditional_58_Template_button_click_4_listener() { i0.ɵɵrestoreView(_r19); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.activeReviewTab.set("warning")); });
    i0.ɵɵtext(5, "Review warnings");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1("", ctx_r1.warningRows().length, " students need attention");
} }
function StudentAllocationComponent_Conditional_10_Template(rf, ctx) { if (rf & 1) {
    const _r17 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "section", 24);
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(1, "svg", 25);
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(2, "strong");
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelement(4, "i");
    i0.ɵɵelementStart(5, "span");
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd();
    i0.ɵɵelement(7, "i");
    i0.ɵɵelementStart(8, "span");
    i0.ɵɵtext(9);
    i0.ɵɵelementEnd();
    i0.ɵɵelement(10, "i");
    i0.ɵɵelementStart(11, "span");
    i0.ɵɵtext(12);
    i0.ɵɵelementEnd();
    i0.ɵɵelement(13, "i");
    i0.ɵɵelementStart(14, "span");
    i0.ɵɵtext(15);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(16, "button", 26);
    i0.ɵɵlistener("click", function StudentAllocationComponent_Conditional_10_Template_button_click_16_listener() { i0.ɵɵrestoreView(_r17); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.step.set(2)); });
    i0.ɵɵtext(17, "Edit selection");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(18, "section", 57);
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(19, "svg", 58);
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(20, "strong");
    i0.ɵɵtext(21);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(22, "span");
    i0.ɵɵtext(23);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(24, "span");
    i0.ɵɵtext(25);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(26, "section", 59)(27, "nav")(28, "button", 26);
    i0.ɵɵlistener("click", function StudentAllocationComponent_Conditional_10_Template_button_click_28_listener() { i0.ɵɵrestoreView(_r17); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.activeReviewTab.set("all")); });
    i0.ɵɵtext(29, " All ");
    i0.ɵɵelementStart(30, "b");
    i0.ɵɵtext(31);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(32, "button", 26);
    i0.ɵɵlistener("click", function StudentAllocationComponent_Conditional_10_Template_button_click_32_listener() { i0.ɵɵrestoreView(_r17); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.activeReviewTab.set("ready")); });
    i0.ɵɵtext(33, " Ready ");
    i0.ɵɵelementStart(34, "b");
    i0.ɵɵtext(35);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(36, "button", 26);
    i0.ɵɵlistener("click", function StudentAllocationComponent_Conditional_10_Template_button_click_36_listener() { i0.ɵɵrestoreView(_r17); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.activeReviewTab.set("warning")); });
    i0.ɵɵtext(37, " Warnings ");
    i0.ɵɵelementStart(38, "b");
    i0.ɵɵtext(39);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(40, "div", 38)(41, "table")(42, "thead")(43, "tr")(44, "th");
    i0.ɵɵtext(45, "Student");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(46, "th");
    i0.ɵɵtext(47, "Student ID");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(48, "th");
    i0.ɵɵtext(49, "Programme");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(50, "th");
    i0.ɵɵtext(51, "Current allocation");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(52, "th");
    i0.ɵɵtext(53, "Validation");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(54, "tbody");
    i0.ɵɵrepeaterCreate(55, StudentAllocationComponent_Conditional_10_For_56_Template, 17, 7, "tr", null, _forTrack0, false, StudentAllocationComponent_Conditional_10_ForEmpty_57_Template, 5, 1, "tr");
    i0.ɵɵelementEnd()()()();
    i0.ɵɵconditionalCreate(58, StudentAllocationComponent_Conditional_10_Conditional_58_Template, 6, 1, "div", 60);
    i0.ɵɵelementStart(59, "label", 61)(60, "input", 62);
    i0.ɵɵlistener("ngModelChange", function StudentAllocationComponent_Conditional_10_Template_input_ngModelChange_60_listener($event) { i0.ɵɵrestoreView(_r17); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.confirmation.set($event)); });
    i0.ɵɵelementEnd();
    i0.ɵɵtext(61, " I have reviewed the target and validation results.");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(62, "footer", 63)(63, "strong");
    i0.ɵɵtext(64);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(65, "div")(66, "button", 31);
    i0.ɵɵlistener("click", function StudentAllocationComponent_Conditional_10_Template_button_click_66_listener() { i0.ɵɵrestoreView(_r17); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.step.set(2)); });
    i0.ɵɵtext(67, " Back to students");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(68, "button", 31);
    i0.ɵɵlistener("click", function StudentAllocationComponent_Conditional_10_Template_button_click_68_listener() { i0.ɵɵrestoreView(_r17); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.saveDraft()); });
    i0.ɵɵtext(69, " Save draft");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(70, "button", 20);
    i0.ɵɵlistener("click", function StudentAllocationComponent_Conditional_10_Template_button_click_70_listener() { i0.ɵɵrestoreView(_r17); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.assignReady()); });
    i0.ɵɵtext(71);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(ctx_r1.session);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1("Semester ", ctx_r1.semester);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(ctx_r1.groupName());
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(ctx_r1.sectionName());
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(ctx_r1.setName());
    i0.ɵɵadvance(6);
    i0.ɵɵtextInterpolate1("", ctx_r1.reviewRows().length, " selected");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1("\u00B7 ", ctx_r1.readyRows().length, " ready");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1("\u00B7 ", ctx_r1.warningRows().length, " warnings");
    i0.ɵɵadvance(3);
    i0.ɵɵclassProp("is-active", ctx_r1.activeReviewTab() === "all");
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(ctx_r1.reviewRows().length);
    i0.ɵɵadvance();
    i0.ɵɵclassProp("is-active", ctx_r1.activeReviewTab() === "ready");
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(ctx_r1.readyRows().length);
    i0.ɵɵadvance();
    i0.ɵɵclassProp("is-active", ctx_r1.activeReviewTab() === "warning");
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(ctx_r1.warningRows().length);
    i0.ɵɵadvance(16);
    i0.ɵɵrepeater(ctx_r1.visibleReviewRows());
    i0.ɵɵadvance(3);
    i0.ɵɵconditional(ctx_r1.warningRows().length ? 58 : -1);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngModel", ctx_r1.confirmation());
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate2("", ctx_r1.readyRows().length, " ready \u00B7 ", ctx_r1.warningRows().length, " require attention");
    i0.ɵɵadvance(6);
    i0.ɵɵproperty("disabled", !ctx_r1.confirmation() || !ctx_r1.readyRows().length || ctx_r1.saving());
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r1.saving() ? "Assigning\u2026" : "Assign " + ctx_r1.readyRows().length + " ready students", " ");
} }
function apiMessage(error, fallback) {
    if (typeof error === 'object' && error && 'error' in error) {
        const response = error.error;
        if (typeof response?.message === 'string')
            return response.message;
    }
    return fallback;
}
export class StudentAllocationComponent {
    api = inject(ApiService);
    step = signal(1, ...(ngDevMode ? [{ debugName: "step" }] : /* istanbul ignore next */ []));
    loading = signal(false, ...(ngDevMode ? [{ debugName: "loading" }] : /* istanbul ignore next */ []));
    saving = signal(false, ...(ngDevMode ? [{ debugName: "saving" }] : /* istanbul ignore next */ []));
    error = signal('', ...(ngDevMode ? [{ debugName: "error" }] : /* istanbul ignore next */ []));
    message = signal('', ...(ngDevMode ? [{ debugName: "message" }] : /* istanbul ignore next */ []));
    groups = signal([], ...(ngDevMode ? [{ debugName: "groups" }] : /* istanbul ignore next */ []));
    sections = signal([], ...(ngDevMode ? [{ debugName: "sections" }] : /* istanbul ignore next */ []));
    sets = signal([], ...(ngDevMode ? [{ debugName: "sets" }] : /* istanbul ignore next */ []));
    students = signal([], ...(ngDevMode ? [{ debugName: "students" }] : /* istanbul ignore next */ []));
    selected = signal(new Map(), ...(ngDevMode ? [{ debugName: "selected" }] : /* istanbul ignore next */ []));
    reviewRows = signal([], ...(ngDevMode ? [{ debugName: "reviewRows" }] : /* istanbul ignore next */ []));
    page = signal(1, ...(ngDevMode ? [{ debugName: "page" }] : /* istanbul ignore next */ []));
    pageSize = signal(25, ...(ngDevMode ? [{ debugName: "pageSize" }] : /* istanbul ignore next */ []));
    total = signal(0, ...(ngDevMode ? [{ debugName: "total" }] : /* istanbul ignore next */ []));
    pages = signal(1, ...(ngDevMode ? [{ debugName: "pages" }] : /* istanbul ignore next */ []));
    activeReviewTab = signal('all', ...(ngDevMode ? [{ debugName: "activeReviewTab" }] : /* istanbul ignore next */ []));
    confirmation = signal(false, ...(ngDevMode ? [{ debugName: "confirmation" }] : /* istanbul ignore next */ []));
    pageSizeOptions = ERP_PAGINATION.pageSizeOptions;
    session = '';
    semester = 1;
    groupId = '';
    sectionId = '';
    setId = '';
    search = '';
    sessions = computed(() => [
        ...new Set(this.groups()
            .filter((item) => item.isActive)
            .map((item) => item.academicSession)),
    ], ...(ngDevMode ? [{ debugName: "sessions" }] : /* istanbul ignore next */ []));
    availableGroups() {
        return this.groups().filter((item) => item.isActive &&
            item.academicSession === this.session &&
            Number(item.semester) === Number(this.semester));
    }
    availableSections() {
        return this.sections().filter((item) => item.isActive &&
            item.academicSession === this.session &&
            Number(item.semester) === Number(this.semester) &&
            item.groupIds.some((value) => String(value) === this.groupId));
    }
    availableSets() {
        return this.sets().filter((item) => item.isActive &&
            item.academicSession === this.session &&
            Number(item.semester) === Number(this.semester) &&
            String(item.groupId) === this.groupId &&
            String(item.sectionId) === this.sectionId);
    }
    scopeValid() {
        return Boolean(this.session && this.semester && this.groupId && this.sectionId && this.setId);
    }
    selectedCount = computed(() => this.selected().size, ...(ngDevMode ? [{ debugName: "selectedCount" }] : /* istanbul ignore next */ []));
    readyRows = computed(() => this.reviewRows().filter((item) => !item.error && item.validation === 'ready'), ...(ngDevMode ? [{ debugName: "readyRows" }] : /* istanbul ignore next */ []));
    warningRows = computed(() => this.reviewRows().filter((item) => item.error || item.validation === 'warning'), ...(ngDevMode ? [{ debugName: "warningRows" }] : /* istanbul ignore next */ []));
    visibleReviewRows = computed(() => this.activeReviewTab() === 'all'
        ? this.reviewRows()
        : this.activeReviewTab() === 'ready'
            ? this.readyRows()
            : this.warningRows(), ...(ngDevMode ? [{ debugName: "visibleReviewRows" }] : /* istanbul ignore next */ []));
    constructor() {
        this.loadSetup();
    }
    loadSetup() {
        this.loading.set(true);
        forkJoin({
            groups: this.api.academicRecords('groups', { isActive: true }),
            sections: this.api.academicRecords('sections', { isActive: true }),
            sets: this.api.academicRecords('sets', { isActive: true }),
        }).subscribe({
            next: ({ groups, sections, sets }) => {
                this.groups.set(groups.items);
                this.sections.set(sections.items);
                this.sets.set(sets.items);
                this.loading.set(false);
            },
            error: (error) => {
                this.error.set(apiMessage(error, 'Could not load allocation setup.'));
                this.loading.set(false);
            },
        });
    }
    selectSession() {
        this.groupId = '';
        this.sectionId = '';
        this.setId = '';
        this.clearSelection();
    }
    selectGroup() {
        this.sectionId = '';
        this.setId = '';
        this.clearSelection();
    }
    selectSection() {
        this.setId = '';
        this.clearSelection();
    }
    openStudents() {
        if (!this.scopeValid())
            return;
        this.step.set(2);
        this.page.set(1);
        this.loadStudents();
    }
    loadStudents() {
        if (!this.scopeValid())
            return;
        this.loading.set(true);
        this.error.set('');
        this.api
            .eligibleAcademicStudents({
            academicSession: this.session,
            semester: Number(this.semester),
            groupId: this.groupId,
            search: this.search.trim(),
            page: this.page(),
            limit: this.pageSize(),
        })
            .subscribe({
            next: ({ items, pagination }) => {
                this.students.set(items);
                this.total.set(pagination.total);
                this.pages.set(Math.max(1, pagination.pages));
                this.loading.set(false);
            },
            error: (error) => {
                this.error.set(apiMessage(error, 'Could not load eligible students.'));
                this.loading.set(false);
            },
        });
    }
    isSelected(id) {
        return this.selected().has(id);
    }
    toggleStudent(student) {
        const next = new Map(this.selected());
        if (next.has(student._id))
            next.delete(student._id);
        else
            next.set(student._id, student);
        this.selected.set(next);
    }
    allVisibleSelected() {
        return (Boolean(this.students().length) && this.students().every((item) => this.isSelected(item._id)));
    }
    toggleVisible() {
        const next = new Map(this.selected());
        const shouldSelect = !this.allVisibleSelected();
        for (const student of this.students()) {
            if (shouldSelect)
                next.set(student._id, student);
            else
                next.delete(student._id);
        }
        this.selected.set(next);
    }
    clearSelection() {
        this.selected.set(new Map());
        this.reviewRows.set([]);
        this.confirmation.set(false);
    }
    changePage(page) {
        this.page.set(Math.min(this.pages(), Math.max(1, page)));
        this.loadStudents();
    }
    rangeEnd() {
        return Math.min(this.page() * this.pageSize(), this.total());
    }
    review() {
        const candidates = [...this.selected().values()];
        if (!candidates.length)
            return;
        const chunks = [];
        for (let index = 0; index < candidates.length; index += 5000)
            chunks.push(candidates.slice(index, index + 5000));
        this.loading.set(true);
        this.error.set('');
        from(chunks)
            .pipe(concatMap((chunk) => this.api.previewAcademicAllocations(chunk.map((item) => this.allocationBody(item._id)))), toArray())
            .subscribe({
            next: (results) => {
                const validations = results.flatMap((result) => result.rows);
                const reviewRows = candidates.map((candidate, index) => ({
                    ...candidate,
                    error: validations[index]?.error ||
                        (candidate.currentAllocation ? 'Student already has an active allocation.' : null),
                }));
                this.reviewRows.set(reviewRows);
                this.activeReviewTab.set('all');
                this.step.set(3);
                this.loading.set(false);
            },
            error: (error) => {
                this.error.set(apiMessage(error, 'Could not validate the selected students.'));
                this.loading.set(false);
            },
        });
    }
    assignReady() {
        if (!this.confirmation() || !this.readyRows().length || this.saving())
            return;
        const rows = this.readyRows().map((item) => this.allocationBody(item._id));
        const chunks = [];
        for (let index = 0; index < rows.length; index += 5000)
            chunks.push(rows.slice(index, index + 5000));
        this.saving.set(true);
        this.error.set('');
        from(chunks)
            .pipe(concatMap((chunk) => this.api.bulkAcademicAllocations(chunk)), toArray())
            .subscribe({
            next: (results) => {
                const assigned = results.reduce((sum, result) => sum + result.assigned, 0);
                this.message.set(`${assigned} student${assigned === 1 ? '' : 's'} assigned successfully.`);
                this.saving.set(false);
                this.clearSelection();
                this.step.set(1);
            },
            error: (error) => {
                this.error.set(apiMessage(error, 'Student allocation could not be completed.'));
                this.saving.set(false);
            },
        });
    }
    changeScope() {
        this.step.set(1);
        this.clearSelection();
    }
    downloadTemplate() {
        const csv = 'studentId\n26CSE0001\n';
        const link = document.createElement('a');
        link.href = URL.createObjectURL(new Blob([csv], { type: 'text/csv' }));
        link.download = 'student-allocation-template.csv';
        link.click();
        URL.revokeObjectURL(link.href);
    }
    saveDraft() {
        localStorage.setItem('erp-student-allocation-draft', JSON.stringify({
            session: this.session,
            semester: this.semester,
            groupId: this.groupId,
            sectionId: this.sectionId,
            setId: this.setId,
            studentIds: [...this.selected().keys()],
        }));
        this.message.set('Student allocation draft saved in this browser.');
    }
    readCsv(event) {
        const input = event.target;
        const file = input.files?.[0];
        input.value = '';
        if (!file)
            return;
        file.text().then((text) => {
            const lines = text
                .split(/\r?\n/)
                .map((value) => value.trim())
                .filter(Boolean);
            const studentIds = (lines[0]?.toLowerCase() === 'studentid' ? lines.slice(1) : lines)
                .map((line) => line.split(',')[0]?.trim())
                .filter(Boolean);
            if (!studentIds.length)
                return this.error.set('The CSV does not contain any Student IDs.');
            const uniqueStudentIds = [...new Set(studentIds)];
            const chunks = [];
            for (let index = 0; index < uniqueStudentIds.length; index += 5000)
                chunks.push(uniqueStudentIds.slice(index, index + 5000));
            this.loading.set(true);
            this.error.set('');
            from(chunks)
                .pipe(concatMap((chunk) => this.api.resolveAcademicStudents(chunk)), toArray())
                .subscribe({
                next: (results) => {
                    const items = results.flatMap((result) => result.items);
                    const unresolved = results.flatMap((result) => result.unresolved);
                    const next = new Map(this.selected());
                    for (const item of items)
                        next.set(item._id, item);
                    this.selected.set(next);
                    this.message.set(`${items.length} students selected from CSV${unresolved.length ? `; ${unresolved.length} IDs were not found` : ''}.`);
                    if (this.scopeValid()) {
                        this.step.set(2);
                        this.loadStudents();
                    }
                    else
                        this.loading.set(false);
                },
                error: (error) => {
                    this.error.set(apiMessage(error, 'Could not read students from the CSV.'));
                    this.loading.set(false);
                },
            });
        });
    }
    groupName() {
        return this.groups().find((item) => item._id === this.groupId)?.name || '—';
    }
    sectionName() {
        return this.sections().find((item) => item._id === this.sectionId)?.name || '—';
    }
    setName() {
        return this.sets().find((item) => item._id === this.setId)?.name || '—';
    }
    allocationBody(studentAdmissionId) {
        return {
            studentAdmissionId,
            groupId: this.groupId,
            sectionId: this.sectionId,
            setId: this.setId,
            academicSession: this.session,
            semester: Number(this.semester),
        };
    }
    static ɵfac = function StudentAllocationComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || StudentAllocationComponent)(); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: StudentAllocationComponent, selectors: [["erp-student-allocation"]], decls: 11, vars: 9, consts: [["variant", "compact", "layout", "collection", 3, "title", "description"], ["page-actions", "", 1, "erp-workflow-head", "erp-workflow-head--allocation"], ["aria-label", "Student allocation progress", 1, "erp-workflow-stepper"], [3, "is-active", "is-complete"], [1, "erp-alert", "erp-alert--danger"], [1, "erp-alert", "erp-alert--success"], ["lucideCheck", "", "size", "14"], [1, "erp-button", "erp-button--secondary", "erp-file-button"], ["lucideUpload", "", "size", "17", "aria-hidden", "true"], ["type", "file", "accept", ".csv,text/csv", 3, "change"], ["type", "button", 1, "erp-button", "erp-button--secondary"], ["lucideHistory", "", "size", "17"], [1, "erp-card", "erp-workflow-scope-card"], [1, "erp-workflow-scope-grid", "erp-workflow-scope-grid--five"], [1, "erp-control", 3, "ngModelChange", "ngModel"], ["value", ""], [3, "value"], [1, "erp-control", 3, "ngModelChange", "ngModel", "disabled"], ["type", "button", 1, "erp-button", "erp-button--ghost", 3, "click"], ["lucideDownload", "", "size", "17"], ["type", "button", 1, "erp-button", "erp-button--primary", 3, "click", "disabled"], ["lucideSearch", "", "size", "17"], [1, "erp-workflow-empty-intro"], ["kind", "addStudent", "size", "compact"], [1, "erp-workflow-scope-summary"], ["lucideGraduationCap", "", "size", "19"], ["type", "button", 3, "click"], [1, "erp-allocation-student-tools"], [1, "erp-search-control"], ["lucideSearch", "", "size", "18"], ["type", "search", "placeholder", "Search name, student ID, application ID or programme", 3, "ngModelChange", "keyup.enter", "ngModel"], ["type", "button", 1, "erp-button", "erp-button--secondary", 3, "click"], ["lucideFilter", "", "size", "17"], ["lucideColumns3", "", "size", "17"], ["type", "button", "aria-label", "Refresh students", 1, "erp-icon-button", 3, "click"], ["lucideRefreshCw", "", "size", "18"], [1, "erp-allocation-filter-line"], [1, "erp-card", "erp-table-shell", "erp-allocation-student-table"], [1, "erp-table-scroll"], ["type", "checkbox", "aria-label", "Select current page", 3, "change", "checked"], [3, "is-selected"], [1, "erp-workflow-action-bar", "erp-workflow-action-bar--student"], [1, "erp-allocation-pagination"], ["type", "button", 1, "erp-icon-button", 3, "click", "disabled"], ["lucideChevronLeft", "", "size", "17"], ["lucideChevronRight", "", "size", "17"], ["type", "checkbox", 3, "change", "checked"], [1, "erp-allocation-student"], ["lucideUserRound", "", "size", "16"], [1, "erp-status"], ["colspan", "7"], [1, "erp-empty-panel"], [1, "erp-spinner"], ["kind", "noResults", "size", "compact"], ["lucideArrowRight", "", "size", "17"], ["type", "button", 1, "erp-allocation-page-number", 3, "is-current"], ["type", "button", 1, "erp-allocation-page-number", 3, "click"], [1, "erp-allocation-review-summary"], ["lucideUsersRound", "", "size", "19"], [1, "erp-card", "erp-table-shell", "erp-allocation-review-table"], [1, "erp-allocation-warning"], [1, "erp-allocation-confirm"], ["type", "checkbox", 3, "ngModelChange", "ngModel"], [1, "erp-allocation-final-bar"], ["colspan", "5"], ["lucideAlertTriangle", "", "size", "20"]], template: function StudentAllocationComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "erp-admin-page", 0)(1, "div", 1)(2, "nav", 2);
            i0.ɵɵrepeaterCreate(3, StudentAllocationComponent_For_4_Template, 6, 6, "div", 3, i0.ɵɵrepeaterTrackByIdentity);
            i0.ɵɵelementEnd();
            i0.ɵɵconditionalCreate(5, StudentAllocationComponent_Conditional_5_Template, 7, 0);
            i0.ɵɵelementEnd();
            i0.ɵɵconditionalCreate(6, StudentAllocationComponent_Conditional_6_Template, 2, 1, "div", 4);
            i0.ɵɵconditionalCreate(7, StudentAllocationComponent_Conditional_7_Template, 2, 1, "div", 5);
            i0.ɵɵconditionalCreate(8, StudentAllocationComponent_Conditional_8_Template, 56, 14);
            i0.ɵɵconditionalCreate(9, StudentAllocationComponent_Conditional_9_Template, 80, 24);
            i0.ɵɵconditionalCreate(10, StudentAllocationComponent_Conditional_10_Template, 72, 24);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵproperty("title", ctx.step() === 3 ? "Review allocation" : "Student allocation")("description", ctx.step() === 1 ? "Define the academic scope to find and allocate students." : ctx.step() === 2 ? "" : "");
            i0.ɵɵadvance(3);
            i0.ɵɵrepeater(i0.ɵɵpureFunction0(8, _c0));
            i0.ɵɵadvance(2);
            i0.ɵɵconditional(ctx.step() === 1 ? 5 : -1);
            i0.ɵɵadvance();
            i0.ɵɵconditional(ctx.error() ? 6 : -1);
            i0.ɵɵadvance();
            i0.ɵɵconditional(ctx.message() ? 7 : -1);
            i0.ɵɵadvance();
            i0.ɵɵconditional(ctx.step() === 1 ? 8 : -1);
            i0.ɵɵadvance();
            i0.ɵɵconditional(ctx.step() === 2 ? 9 : -1);
            i0.ɵɵadvance();
            i0.ɵɵconditional(ctx.step() === 3 ? 10 : -1);
        } }, dependencies: [CommonModule,
            FormsModule, i1.NgSelectOption, i1.ɵNgSelectMultipleOption, i1.DefaultValueAccessor, i1.CheckboxControlValueAccessor, i1.SelectControlValueAccessor, i1.NgControlStatus, i1.NgModel, AdminIllustrationComponent,
            AdminPageComponent,
            LucideAlertTriangle,
            LucideArrowRight,
            LucideCheck,
            LucideChevronLeft,
            LucideChevronRight,
            LucideColumns3,
            LucideDownload,
            LucideFilter,
            LucideGraduationCap,
            LucideHistory,
            LucideRefreshCw,
            LucideSearch,
            LucideUpload,
            LucideUserRound,
            LucideUsersRound, i2.DecimalPipe], encapsulation: 2, changeDetection: 0 });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(StudentAllocationComponent, [{
        type: Component,
        args: [{ selector: 'erp-student-allocation', imports: [
                    CommonModule,
                    FormsModule,
                    AdminIllustrationComponent,
                    AdminPageComponent,
                    LucideAlertTriangle,
                    LucideArrowRight,
                    LucideCheck,
                    LucideChevronLeft,
                    LucideChevronRight,
                    LucideColumns3,
                    LucideDownload,
                    LucideFilter,
                    LucideGraduationCap,
                    LucideHistory,
                    LucideRefreshCw,
                    LucideSearch,
                    LucideUpload,
                    LucideUserRound,
                    LucideUsersRound,
                ], changeDetection: ChangeDetectionStrategy.OnPush, template: "<erp-admin-page\n  [title]=\"step() === 3 ? 'Review allocation' : 'Student allocation'\"\n  [description]=\"\n    step() === 1\n      ? 'Define the academic scope to find and allocate students.'\n      : step() === 2\n        ? ''\n        : ''\n  \"\n  variant=\"compact\"\n  layout=\"collection\"\n>\n  <div page-actions class=\"erp-workflow-head erp-workflow-head--allocation\">\n    <nav class=\"erp-workflow-stepper\" aria-label=\"Student allocation progress\">\n      @for (item of [1, 2, 3]; track item) {\n        <div [class.is-active]=\"step() === item\" [class.is-complete]=\"step() > item\">\n          <span>\n            @if (step() > item) {\n              <svg lucideCheck size=\"14\"></svg>\n            } @else {\n              {{ item }}\n            }\n          </span>\n          <strong>{{ item === 1 ? 'Scope' : item === 2 ? 'Students' : 'Review' }}</strong>\n        </div>\n      }\n    </nav>\n    @if (step() === 1) {\n      <label class=\"erp-button erp-button--secondary erp-file-button\">\n        <svg lucideUpload size=\"17\" aria-hidden=\"true\"></svg> Import CSV\n        <input type=\"file\" accept=\".csv,text/csv\" (change)=\"readCsv($event)\" />\n      </label>\n      <button class=\"erp-button erp-button--secondary\" type=\"button\">\n        <svg lucideHistory size=\"17\"></svg> Allocation history\n      </button>\n    }\n  </div>\n\n  @if (error()) {\n    <div class=\"erp-alert erp-alert--danger\">{{ error() }}</div>\n  }\n  @if (message()) {\n    <div class=\"erp-alert erp-alert--success\">{{ message() }}</div>\n  }\n\n  @if (step() === 1) {\n    <section class=\"erp-card erp-workflow-scope-card\">\n      <header>\n        <h2>Choose allocation scope</h2>\n      </header>\n      <div class=\"erp-workflow-scope-grid erp-workflow-scope-grid--five\">\n        <label\n          ><span>Academic session *</span\n          ><select class=\"erp-control\" [(ngModel)]=\"session\" (ngModelChange)=\"selectSession()\">\n            <option value=\"\">Select session</option>\n            @for (item of sessions(); track item) {\n              <option [value]=\"item\">{{ item }}</option>\n            }\n          </select></label\n        >\n        <label\n          ><span>Semester *</span\n          ><select class=\"erp-control\" [(ngModel)]=\"semester\" (ngModelChange)=\"selectSession()\">\n            @for (item of [1, 2, 3, 4, 5, 6, 7, 8]; track item) {\n              <option [value]=\"item\">Semester {{ item }}</option>\n            }\n          </select></label\n        >\n        <label\n          ><span>Group *</span\n          ><select\n            class=\"erp-control\"\n            [(ngModel)]=\"groupId\"\n            (ngModelChange)=\"selectGroup()\"\n            [disabled]=\"!session\"\n          >\n            <option value=\"\">{{ session ? 'Select group' : 'Select a session first' }}</option>\n            @for (item of availableGroups(); track item._id) {\n              <option [value]=\"item._id\">{{ item.name }}</option>\n            }\n          </select></label\n        >\n        <label\n          ><span>Section *</span\n          ><select\n            class=\"erp-control\"\n            [(ngModel)]=\"sectionId\"\n            (ngModelChange)=\"selectSection()\"\n            [disabled]=\"!groupId\"\n          >\n            <option value=\"\">{{ groupId ? 'Select section' : 'Select a group first' }}</option>\n            @for (item of availableSections(); track item._id) {\n              <option [value]=\"item._id\">{{ item.name }}</option>\n            }\n          </select></label\n        >\n        <label\n          ><span>Set *</span\n          ><select\n            class=\"erp-control\"\n            [(ngModel)]=\"setId\"\n            (ngModelChange)=\"clearSelection()\"\n            [disabled]=\"!sectionId\"\n          >\n            <option value=\"\">{{ sectionId ? 'Select set' : 'Select a section first' }}</option>\n            @for (item of availableSets(); track item._id) {\n              <option [value]=\"item._id\">{{ item.name }}</option>\n            }\n          </select></label\n        >\n      </div>\n\n      <footer>\n        <span>{{\n          scopeValid()\n            ? 'Scope complete. Eligible students are ready to load.'\n            : 'Select all criteria to find eligible students.'\n        }}</span>\n        <button class=\"erp-button erp-button--ghost\" type=\"button\" (click)=\"downloadTemplate()\">\n          <svg lucideDownload size=\"17\"></svg> CSV template\n        </button>\n        <button\n          class=\"erp-button erp-button--primary\"\n          type=\"button\"\n          [disabled]=\"!scopeValid() || loading()\"\n          (click)=\"openStudents()\"\n        >\n          <svg lucideSearch size=\"17\"></svg> Find students\n        </button>\n      </footer>\n    </section>\n\n    <section class=\"erp-workflow-empty-intro\">\n      <erp-admin-illustration kind=\"addStudent\" size=\"compact\" />\n      <h2>Select a scope to load eligible students.</h2>\n    </section>\n  }\n\n  @if (step() === 2) {\n    <section class=\"erp-workflow-scope-summary\">\n      <svg lucideGraduationCap size=\"19\"></svg><strong>{{ session }}</strong\n      ><i></i> <span>Semester {{ semester }}</span\n      ><i></i><span>{{ groupName() }}</span\n      ><i></i> <span>{{ sectionName() }}</span\n      ><i></i><span>{{ setName() }}</span>\n      <button type=\"button\" (click)=\"changeScope()\">Change</button>\n    </section>\n\n    <section class=\"erp-allocation-student-tools\">\n      <label class=\"erp-search-control\"\n        ><svg lucideSearch size=\"18\"></svg\n        ><input\n          type=\"search\"\n          [(ngModel)]=\"search\"\n          placeholder=\"Search name, student ID, application ID or programme\"\n          (keyup.enter)=\"page.set(1); loadStudents()\"\n      /></label>\n      <button\n        class=\"erp-button erp-button--secondary\"\n        type=\"button\"\n        (click)=\"page.set(1); loadStudents()\"\n      >\n        <svg lucideFilter size=\"17\"></svg> Apply\n      </button>\n      <button class=\"erp-button erp-button--secondary\" type=\"button\">\n        <svg lucideColumns3 size=\"17\"></svg> Columns\n      </button>\n      <button\n        class=\"erp-icon-button\"\n        type=\"button\"\n        aria-label=\"Refresh students\"\n        (click)=\"loadStudents()\"\n      >\n        <svg lucideRefreshCw size=\"18\"></svg>\n      </button>\n    </section>\n    <div class=\"erp-allocation-filter-line\">\n      <span>Admission: Approved</span><span>Scope compatible</span\n      ><button type=\"button\" (click)=\"search = ''; page.set(1); loadStudents()\">Clear search</button\n      ><strong>{{ total() | number }} matching students</strong>\n    </div>\n\n    <section class=\"erp-card erp-table-shell erp-allocation-student-table\">\n      <div class=\"erp-table-scroll\">\n        <table>\n          <thead>\n            <tr>\n              <th>\n                <input\n                  type=\"checkbox\"\n                  [checked]=\"allVisibleSelected()\"\n                  (change)=\"toggleVisible()\"\n                  aria-label=\"Select current page\"\n                />\n              </th>\n              <th>Student</th>\n              <th>Student ID</th>\n              <th>Application ID</th>\n              <th>Programme</th>\n              <th>Current allocation</th>\n              <th>Admission status</th>\n            </tr>\n          </thead>\n          <tbody>\n            @for (student of students(); track student._id) {\n              <tr [class.is-selected]=\"isSelected(student._id)\">\n                <td>\n                  <input\n                    type=\"checkbox\"\n                    [checked]=\"isSelected(student._id)\"\n                    (change)=\"toggleStudent(student)\"\n                    [attr.aria-label]=\"'Select ' + student.studentName\"\n                  />\n                </td>\n                <td>\n                  <span class=\"erp-allocation-student\"\n                    ><i><svg lucideUserRound size=\"16\"></svg></i\n                    ><strong>{{ student.studentName || 'Student' }}</strong></span\n                  >\n                </td>\n                <td>{{ student.studentId || '\u2014' }}</td>\n                <td>{{ student.applicationNumber || '\u2014' }}</td>\n                <td>{{ student.courseName || '\u2014' }}</td>\n                <td>{{ student.currentAllocation || 'Unassigned' }}</td>\n                <td>\n                  <span class=\"erp-status\"><i></i>Approved</span>\n                </td>\n              </tr>\n            } @empty {\n              <tr>\n                <td colspan=\"7\">\n                  <div class=\"erp-empty-panel\">\n                    @if (loading()) {\n                      <span class=\"erp-spinner\"></span>\n                      <h2>Loading eligible students\u2026</h2>\n                    } @else {\n                      <erp-admin-illustration kind=\"noResults\" size=\"compact\" />\n                      <h2>No compatible students found</h2>\n                      <p>Change the scope or search to continue.</p>\n                    }\n                  </div>\n                </td>\n              </tr>\n            }\n          </tbody>\n        </table>\n      </div>\n      @if (selectedCount()) {\n        <div class=\"erp-workflow-action-bar erp-workflow-action-bar--student\">\n          <span\n            ><b>{{ selectedCount() }}</b>\n            {{ selectedCount() === 1 ? 'student' : 'students' }} selected</span\n          ><button type=\"button\" (click)=\"clearSelection()\">Clear selection</button\n          ><button\n            class=\"erp-button erp-button--primary\"\n            type=\"button\"\n            [disabled]=\"loading()\"\n            (click)=\"review()\"\n          >\n            Review {{ selectedCount() }} students <svg lucideArrowRight size=\"17\"></svg>\n          </button>\n        </div>\n      }\n    </section>\n    <footer class=\"erp-allocation-pagination\">\n      <span\n        >Showing {{ total() ? (page() - 1) * pageSize() + 1 : 0 }}\u2013{{ rangeEnd() }} of\n        {{ total() | number }} results</span\n      >\n      <div>\n        <select\n          class=\"erp-control\"\n          [ngModel]=\"pageSize()\"\n          (ngModelChange)=\"pageSize.set(+$event); changePage(1)\"\n        >\n          @for (size of pageSizeOptions; track size) {\n            <option [value]=\"size\">{{ size }} / page</option>\n          }</select\n        ><button\n          class=\"erp-icon-button\"\n          type=\"button\"\n          [disabled]=\"page() === 1\"\n          (click)=\"changePage(page() - 1)\"\n        >\n          <svg lucideChevronLeft size=\"17\"></svg>\n        </button>\n        @for (item of [page() - 1, page(), page() + 1]; track item) {\n          @if (item > 0 && item <= pages()) {\n            <button\n              class=\"erp-allocation-page-number\"\n              [class.is-current]=\"item === page()\"\n              type=\"button\"\n              (click)=\"changePage(item)\"\n            >\n              {{ item }}\n            </button>\n          }\n        }\n        <button\n          class=\"erp-icon-button\"\n          type=\"button\"\n          [disabled]=\"page() === pages()\"\n          (click)=\"changePage(page() + 1)\"\n        >\n          <svg lucideChevronRight size=\"17\"></svg></button\n        ><small>Server-side pagination</small>\n      </div>\n    </footer>\n  }\n\n  @if (step() === 3) {\n    <section class=\"erp-workflow-scope-summary\">\n      <svg lucideGraduationCap size=\"19\"></svg><strong>{{ session }}</strong\n      ><i></i> <span>Semester {{ semester }}</span\n      ><i></i><span>{{ groupName() }}</span\n      ><i></i> <span>{{ sectionName() }}</span\n      ><i></i><span>{{ setName() }}</span>\n      <button type=\"button\" (click)=\"step.set(2)\">Edit selection</button>\n    </section>\n    <section class=\"erp-allocation-review-summary\">\n      <svg lucideUsersRound size=\"19\"></svg><strong>{{ reviewRows().length }} selected</strong>\n      <span>\u00B7 {{ readyRows().length }} ready</span\n      ><span>\u00B7 {{ warningRows().length }} warnings</span>\n    </section>\n    <section class=\"erp-card erp-table-shell erp-allocation-review-table\">\n      <nav>\n        <button\n          [class.is-active]=\"activeReviewTab() === 'all'\"\n          type=\"button\"\n          (click)=\"activeReviewTab.set('all')\"\n        >\n          All <b>{{ reviewRows().length }}</b>\n        </button>\n        <button\n          [class.is-active]=\"activeReviewTab() === 'ready'\"\n          type=\"button\"\n          (click)=\"activeReviewTab.set('ready')\"\n        >\n          Ready <b>{{ readyRows().length }}</b></button\n        ><button\n          [class.is-active]=\"activeReviewTab() === 'warning'\"\n          type=\"button\"\n          (click)=\"activeReviewTab.set('warning')\"\n        >\n          Warnings <b>{{ warningRows().length }}</b>\n        </button>\n      </nav>\n      <div class=\"erp-table-scroll\">\n        <table>\n          <thead>\n            <tr>\n              <th>Student</th>\n              <th>Student ID</th>\n              <th>Programme</th>\n              <th>Current allocation</th>\n              <th>Validation</th>\n            </tr>\n          </thead>\n          <tbody>\n            @for (student of visibleReviewRows(); track student._id) {\n              <tr>\n                <td>\n                  <span class=\"erp-allocation-student\"\n                    ><i><svg lucideUserRound size=\"16\"></svg></i\n                    ><strong>{{ student.studentName }}</strong></span\n                  >\n                </td>\n                <td>{{ student.studentId }}</td>\n                <td>{{ student.courseName || '\u2014' }}</td>\n                <td>{{ student.currentAllocation || 'Unassigned' }}</td>\n                <td>\n                  <span\n                    class=\"erp-status\"\n                    [class.erp-status--warning]=\"\n                      !!student.error || student.validation === 'warning'\n                    \"\n                    ><i></i>{{ student.error ? 'Review conflict' : 'Ready' }}</span\n                  >\n                </td>\n              </tr>\n            } @empty {\n              <tr>\n                <td colspan=\"5\">\n                  <div class=\"erp-empty-panel\">\n                    <h2>No {{ activeReviewTab() }} records</h2>\n                  </div>\n                </td>\n              </tr>\n            }\n          </tbody>\n        </table>\n      </div>\n    </section>\n    @if (warningRows().length) {\n      <div class=\"erp-allocation-warning\">\n        <svg lucideAlertTriangle size=\"20\"></svg\n        ><strong>{{ warningRows().length }} students need attention</strong\n        ><button type=\"button\" (click)=\"activeReviewTab.set('warning')\">Review warnings</button>\n      </div>\n    }\n    <label class=\"erp-allocation-confirm\"\n      ><input\n        type=\"checkbox\"\n        [ngModel]=\"confirmation()\"\n        (ngModelChange)=\"confirmation.set($event)\"\n      />\n      I have reviewed the target and validation results.</label\n    >\n    <footer class=\"erp-allocation-final-bar\">\n      <strong>{{ readyRows().length }} ready \u00B7 {{ warningRows().length }} require attention</strong>\n      <div>\n        <button class=\"erp-button erp-button--secondary\" type=\"button\" (click)=\"step.set(2)\">\n          Back to students</button\n        ><button class=\"erp-button erp-button--secondary\" type=\"button\" (click)=\"saveDraft()\">\n          Save draft</button\n        ><button\n          class=\"erp-button erp-button--primary\"\n          type=\"button\"\n          [disabled]=\"!confirmation() || !readyRows().length || saving()\"\n          (click)=\"assignReady()\"\n        >\n          {{ saving() ? 'Assigning\u2026' : 'Assign ' + readyRows().length + ' ready students' }}\n        </button>\n      </div>\n    </footer>\n  }\n</erp-admin-page>\n" }]
    }], () => [], null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(StudentAllocationComponent, { className: "StudentAllocationComponent", filePath: "frontend/src/app/features/admin/academics/student-allocation.component.ts", lineNumber: 82 }); })();
