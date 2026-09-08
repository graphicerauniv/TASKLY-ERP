import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LucideArrowLeft, LucideArrowRight, LucideBookOpen, LucideCalendarDays, LucideCheck, LucideChevronLeft, LucideChevronRight, LucideColumns3, LucideFilter, LucideGraduationCap, LucideHistory, LucideLink2, LucideMoreVertical, LucidePencil, LucideRefreshCw, LucideSearch, LucideTrash2, LucideUsersRound, } from '@lucide/angular';
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
const _c2 = () => ({ value: "", label: "All" });
const _c3 = () => ({ value: "theory", label: "Theory" });
const _c4 = () => ({ value: "practical", label: "Practical" });
const _c5 = () => ({ value: "elective", label: "Elective" });
const _c6 = (a0, a1, a2, a3) => [a0, a1, a2, a3];
const _forTrack0 = ($index, $item) => $item._id;
const _forTrack1 = ($index, $item) => $item.value;
function SubjectAssignmentComponent_For_4_Conditional_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(0, "svg", 9);
} }
function SubjectAssignmentComponent_For_4_Conditional_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtext(0);
} if (rf & 2) {
    const item_r1 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵtextInterpolate1(" ", item_r1, " ");
} }
function SubjectAssignmentComponent_For_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div")(1, "span");
    i0.ɵɵconditionalCreate(2, SubjectAssignmentComponent_For_4_Conditional_2_Template, 1, 0, ":svg:svg", 9)(3, SubjectAssignmentComponent_For_4_Conditional_3_Template, 1, 1);
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
    i0.ɵɵtextInterpolate(item_r1 === 1 ? "Scope" : item_r1 === 2 ? "Subjects" : "Review");
} }
function SubjectAssignmentComponent_Conditional_5_Template(rf, ctx) { if (rf & 1) {
    const _r3 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 10);
    i0.ɵɵlistener("click", function SubjectAssignmentComponent_Conditional_5_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r3); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.scrollToHistory()); });
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(1, "svg", 11);
    i0.ɵɵtext(2, " Assignment history ");
    i0.ɵɵelementEnd();
} }
function SubjectAssignmentComponent_Conditional_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 6);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r1.error());
} }
function SubjectAssignmentComponent_Conditional_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 7);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r1.message());
} }
function SubjectAssignmentComponent_Conditional_8_For_14_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 16);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r5 = ctx.$implicit;
    i0.ɵɵproperty("value", item_r5);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(item_r5);
} }
function SubjectAssignmentComponent_Conditional_8_For_20_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 16);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r6 = ctx.$implicit;
    i0.ɵɵproperty("value", item_r6);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1("Semester ", item_r6);
} }
function SubjectAssignmentComponent_Conditional_8_For_28_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 16);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r7 = ctx.$implicit;
    i0.ɵɵproperty("value", item_r7._id);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(item_r7.name);
} }
function SubjectAssignmentComponent_Conditional_8_For_62_Template(rf, ctx) { if (rf & 1) {
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
    i0.ɵɵelementStart(10, "td")(11, "span", 26);
    i0.ɵɵtext(12);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(13, "td")(14, "button", 27);
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(15, "svg", 28);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const item_r8 = ctx.$implicit;
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(item_r8.groupName || ctx_r1.groupName());
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(item_r8.academicSession);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1("Semester ", item_r8.semester);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate2("", item_r8.subjectCode, " \u00B7 ", item_r8.subjectName);
    i0.ɵɵadvance(2);
    i0.ɵɵclassProp("is-elective", item_r8.requirement === "elective");
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(item_r8.requirement);
} }
function SubjectAssignmentComponent_Conditional_8_ForEmpty_63_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "tr")(1, "td", 29)(2, "div", 30)(3, "span", 31);
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(4, "svg", 32)(5, "svg", 33);
    i0.ɵɵelementEnd();
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(6, "h2");
    i0.ɵɵtext(7, "No assignments found for the selected scope.");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "p");
    i0.ɵɵtext(9, " Choose an academic session, semester and group above to view existing assignments. ");
    i0.ɵɵelementEnd()()()();
} }
function SubjectAssignmentComponent_Conditional_8_Template(rf, ctx) { if (rf & 1) {
    const _r4 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "section", 12)(1, "header")(2, "h2");
    i0.ɵɵtext(3, "Choose academic scope");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "p");
    i0.ɵɵtext(5, "Select the academic session, semester and group to manage subject assignments.");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(6, "div", 13)(7, "label")(8, "span");
    i0.ɵɵtext(9, "Academic session *");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(10, "select", 14);
    i0.ɵɵtwoWayListener("ngModelChange", function SubjectAssignmentComponent_Conditional_8_Template_select_ngModelChange_10_listener($event) { i0.ɵɵrestoreView(_r4); const ctx_r1 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r1.session, $event) || (ctx_r1.session = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵlistener("ngModelChange", function SubjectAssignmentComponent_Conditional_8_Template_select_ngModelChange_10_listener() { i0.ɵɵrestoreView(_r4); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.resetScope(true)); });
    i0.ɵɵelementStart(11, "option", 15);
    i0.ɵɵtext(12, "Select session");
    i0.ɵɵelementEnd();
    i0.ɵɵrepeaterCreate(13, SubjectAssignmentComponent_Conditional_8_For_14_Template, 2, 2, "option", 16, i0.ɵɵrepeaterTrackByIdentity);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(15, "label")(16, "span");
    i0.ɵɵtext(17, "Semester *");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(18, "select", 14);
    i0.ɵɵtwoWayListener("ngModelChange", function SubjectAssignmentComponent_Conditional_8_Template_select_ngModelChange_18_listener($event) { i0.ɵɵrestoreView(_r4); const ctx_r1 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r1.semester, $event) || (ctx_r1.semester = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵlistener("ngModelChange", function SubjectAssignmentComponent_Conditional_8_Template_select_ngModelChange_18_listener() { i0.ɵɵrestoreView(_r4); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.resetScope(true)); });
    i0.ɵɵrepeaterCreate(19, SubjectAssignmentComponent_Conditional_8_For_20_Template, 2, 2, "option", 16, i0.ɵɵrepeaterTrackByIdentity);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(21, "label")(22, "span");
    i0.ɵɵtext(23, "Group *");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(24, "select", 14);
    i0.ɵɵtwoWayListener("ngModelChange", function SubjectAssignmentComponent_Conditional_8_Template_select_ngModelChange_24_listener($event) { i0.ɵɵrestoreView(_r4); const ctx_r1 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r1.groupId, $event) || (ctx_r1.groupId = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵlistener("ngModelChange", function SubjectAssignmentComponent_Conditional_8_Template_select_ngModelChange_24_listener() { i0.ɵɵrestoreView(_r4); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.clearSelection()); });
    i0.ɵɵelementStart(25, "option", 15);
    i0.ɵɵtext(26, "Select group");
    i0.ɵɵelementEnd();
    i0.ɵɵrepeaterCreate(27, SubjectAssignmentComponent_Conditional_8_For_28_Template, 2, 2, "option", 16, _forTrack0);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(29, "footer")(30, "button", 17);
    i0.ɵɵlistener("click", function SubjectAssignmentComponent_Conditional_8_Template_button_click_30_listener() { i0.ɵɵrestoreView(_r4); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.openLibrary()); });
    i0.ɵɵtext(31, " Open subject library ");
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(32, "svg", 18);
    i0.ɵɵelementEnd()()();
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(33, "section", 19)(34, "header", 20)(35, "h2");
    i0.ɵɵtext(36, "Existing assignments");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(37, "div")(38, "label", 21);
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(39, "svg", 22);
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelement(40, "input", 23);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(41, "button", 5);
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(42, "svg", 24);
    i0.ɵɵtext(43, " Filters ");
    i0.ɵɵelementEnd()()();
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(44, "div", 25)(45, "table")(46, "thead")(47, "tr")(48, "th");
    i0.ɵɵtext(49, "Group");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(50, "th");
    i0.ɵɵtext(51, "Session");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(52, "th");
    i0.ɵɵtext(53, "Semester");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(54, "th");
    i0.ɵɵtext(55, "Subject");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(56, "th");
    i0.ɵɵtext(57, "Requirement");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(58, "th");
    i0.ɵɵtext(59, "Actions");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(60, "tbody");
    i0.ɵɵrepeaterCreate(61, SubjectAssignmentComponent_Conditional_8_For_62_Template, 16, 8, "tr", null, _forTrack0, false, SubjectAssignmentComponent_Conditional_8_ForEmpty_63_Template, 10, 0, "tr");
    i0.ɵɵelementEnd()()()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(10);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r1.session);
    i0.ɵɵadvance(3);
    i0.ɵɵrepeater(ctx_r1.sessions());
    i0.ɵɵadvance(5);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r1.semester);
    i0.ɵɵadvance();
    i0.ɵɵrepeater(i0.ɵɵpureFunction0(5, _c1));
    i0.ɵɵadvance(5);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r1.groupId);
    i0.ɵɵadvance(3);
    i0.ɵɵrepeater(ctx_r1.availableGroups());
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("disabled", !ctx_r1.scopeValid() || ctx_r1.loading());
    i0.ɵɵadvance(31);
    i0.ɵɵrepeater(ctx_r1.scopeHistory());
} }
function SubjectAssignmentComponent_Conditional_9_Template(rf, ctx) { if (rf & 1) {
    const _r9 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "section", 8);
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(1, "svg", 34);
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(2, "strong");
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelement(4, "i");
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(5, "svg", 35);
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(6, "span");
    i0.ɵɵtext(7);
    i0.ɵɵelementEnd();
    i0.ɵɵelement(8, "i");
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(9, "svg", 36);
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(10, "span");
    i0.ɵɵtext(11);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(12, "button", 37);
    i0.ɵɵlistener("click", function SubjectAssignmentComponent_Conditional_9_Template_button_click_12_listener() { i0.ɵɵrestoreView(_r9); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.changeScope()); });
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(13, "svg", 38);
    i0.ɵɵtext(14, " Change ");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(ctx_r1.session);
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate1("Semester ", ctx_r1.semester);
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(ctx_r1.groupName());
} }
function SubjectAssignmentComponent_Conditional_10_For_18_Template(rf, ctx) { if (rf & 1) {
    const _r11 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 37);
    i0.ɵɵlistener("click", function SubjectAssignmentComponent_Conditional_10_For_18_Template_button_click_0_listener() { const item_r12 = i0.ɵɵrestoreView(_r11).$implicit; const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.setTypeFilter(item_r12.value)); });
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r12 = ctx.$implicit;
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵclassProp("is-active", ctx_r1.typeFilter === item_r12.value);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", item_r12.label, " ");
} }
function SubjectAssignmentComponent_Conditional_10_For_39_Template(rf, ctx) { if (rf & 1) {
    const _r13 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "tr")(1, "td")(2, "input", 48);
    i0.ɵɵlistener("change", function SubjectAssignmentComponent_Conditional_10_For_39_Template_input_change_2_listener() { const subject_r14 = i0.ɵɵrestoreView(_r13).$implicit; const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.toggleSubject(subject_r14)); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(3, "td")(4, "span", 55);
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(5, "svg", 56);
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(6, "strong");
    i0.ɵɵtext(7);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(8, "td");
    i0.ɵɵtext(9);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(10, "td")(11, "span", 26);
    i0.ɵɵtext(12);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(13, "td");
    i0.ɵɵtext(14);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(15, "td");
    i0.ɵɵtext(16);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(17, "td")(18, "span", 57);
    i0.ɵɵelement(19, "i");
    i0.ɵɵtext(20);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const subject_r14 = ctx.$implicit;
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵclassProp("is-selected", ctx_r1.isSelected(subject_r14._id));
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("checked", ctx_r1.isSelected(subject_r14._id));
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(subject_r14.name);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(subject_r14.code);
    i0.ɵɵadvance(2);
    i0.ɵɵclassProp("is-practical", subject_r14.subjectType.toLowerCase().includes("practical"))("is-elective", subject_r14.subjectOption.toLowerCase() === "elective");
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(subject_r14.subjectOption.toLowerCase() === "elective" ? "Elective" : subject_r14.subjectType);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(subject_r14.credits);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(subject_r14.departmentName || "\u2014");
    i0.ɵɵadvance(2);
    i0.ɵɵclassProp("erp-status--muted", !subject_r14.assigned);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(subject_r14.assigned ? "Assigned" : "Unassigned");
} }
function SubjectAssignmentComponent_Conditional_10_ForEmpty_40_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "tr")(1, "td", 58)(2, "div", 59);
    i0.ɵɵelement(3, "erp-admin-illustration", 60);
    i0.ɵɵelementStart(4, "h2");
    i0.ɵɵtext(5, "No subjects found");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "p");
    i0.ɵɵtext(7, "Change the search or academic scope.");
    i0.ɵɵelementEnd()()()();
} }
function SubjectAssignmentComponent_Conditional_10_For_48_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 16);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const size_r15 = ctx.$implicit;
    i0.ɵɵproperty("value", size_r15);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1("", size_r15, " / page");
} }
function SubjectAssignmentComponent_Conditional_10_Conditional_55_Template(rf, ctx) { if (rf & 1) {
    const _r16 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "footer", 54)(1, "strong");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "button", 37);
    i0.ɵɵlistener("click", function SubjectAssignmentComponent_Conditional_10_Conditional_55_Template_button_click_3_listener() { i0.ɵɵrestoreView(_r16); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.clearSelection()); });
    i0.ɵɵtext(4, "Clear");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "button", 61);
    i0.ɵɵlistener("click", function SubjectAssignmentComponent_Conditional_10_Conditional_55_Template_button_click_5_listener() { i0.ɵɵrestoreView(_r16); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.openReview()); });
    i0.ɵɵtext(6);
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(7, "svg", 18);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1("", ctx_r1.selectedCount(), " subjects selected");
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate1(" Configure ", ctx_r1.selectedCount(), " subjects ");
} }
function SubjectAssignmentComponent_Conditional_10_Template(rf, ctx) { if (rf & 1) {
    const _r10 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "section", 39)(1, "header", 40)(2, "label", 21);
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(3, "svg", 41);
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(4, "input", 42);
    i0.ɵɵtwoWayListener("ngModelChange", function SubjectAssignmentComponent_Conditional_10_Template_input_ngModelChange_4_listener($event) { i0.ɵɵrestoreView(_r10); const ctx_r1 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r1.search, $event) || (ctx_r1.search = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵlistener("keyup.enter", function SubjectAssignmentComponent_Conditional_10_Template_input_keyup_enter_4_listener() { i0.ɵɵrestoreView(_r10); const ctx_r1 = i0.ɵɵnextContext(); ctx_r1.page.set(1); return i0.ɵɵresetView(ctx_r1.loadSubjects()); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(5, "button", 10);
    i0.ɵɵlistener("click", function SubjectAssignmentComponent_Conditional_10_Template_button_click_5_listener() { i0.ɵɵrestoreView(_r10); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.loadSubjects()); });
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(6, "svg", 24);
    i0.ɵɵtext(7, " Filters");
    i0.ɵɵelementEnd();
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(8, "button", 5);
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(9, "svg", 43);
    i0.ɵɵtext(10, " Columns");
    i0.ɵɵelementEnd();
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(11, "button", 44);
    i0.ɵɵlistener("click", function SubjectAssignmentComponent_Conditional_10_Template_button_click_11_listener() { i0.ɵɵrestoreView(_r10); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.loadSubjects()); });
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(12, "svg", 45);
    i0.ɵɵelementEnd();
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(13, "strong");
    i0.ɵɵtext(14);
    i0.ɵɵpipe(15, "number");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(16, "nav", 46);
    i0.ɵɵrepeaterCreate(17, SubjectAssignmentComponent_Conditional_10_For_18_Template, 2, 3, "button", 47, _forTrack1);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(19, "div", 25)(20, "table")(21, "thead")(22, "tr")(23, "th")(24, "input", 48);
    i0.ɵɵlistener("change", function SubjectAssignmentComponent_Conditional_10_Template_input_change_24_listener() { i0.ɵɵrestoreView(_r10); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.toggleVisible()); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(25, "th");
    i0.ɵɵtext(26, "Subject");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(27, "th");
    i0.ɵɵtext(28, "Code");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(29, "th");
    i0.ɵɵtext(30, "Type");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(31, "th");
    i0.ɵɵtext(32, "Credits");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(33, "th");
    i0.ɵɵtext(34, "Department");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(35, "th");
    i0.ɵɵtext(36, "Status");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(37, "tbody");
    i0.ɵɵrepeaterCreate(38, SubjectAssignmentComponent_Conditional_10_For_39_Template, 21, 15, "tr", 49, _forTrack0, false, SubjectAssignmentComponent_Conditional_10_ForEmpty_40_Template, 8, 0, "tr");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(41, "footer", 50)(42, "span");
    i0.ɵɵtext(43);
    i0.ɵɵpipe(44, "number");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(45, "div")(46, "select", 14);
    i0.ɵɵlistener("ngModelChange", function SubjectAssignmentComponent_Conditional_10_Template_select_ngModelChange_46_listener($event) { i0.ɵɵrestoreView(_r10); const ctx_r1 = i0.ɵɵnextContext(); ctx_r1.pageSize.set(+$event); return i0.ɵɵresetView(ctx_r1.changePage(1)); });
    i0.ɵɵrepeaterCreate(47, SubjectAssignmentComponent_Conditional_10_For_48_Template, 2, 2, "option", 16, i0.ɵɵrepeaterTrackByIdentity);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(49, "button", 51);
    i0.ɵɵlistener("click", function SubjectAssignmentComponent_Conditional_10_Template_button_click_49_listener() { i0.ɵɵrestoreView(_r10); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.changePage(ctx_r1.page() - 1)); });
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(50, "svg", 52);
    i0.ɵɵelementEnd();
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(51, "b");
    i0.ɵɵtext(52);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(53, "button", 51);
    i0.ɵɵlistener("click", function SubjectAssignmentComponent_Conditional_10_Template_button_click_53_listener() { i0.ɵɵrestoreView(_r10); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.changePage(ctx_r1.page() + 1)); });
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(54, "svg", 53);
    i0.ɵɵelementEnd()()()();
    i0.ɵɵconditionalCreate(55, SubjectAssignmentComponent_Conditional_10_Conditional_55_Template, 8, 2, "footer", 54);
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(4);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r1.search);
    i0.ɵɵadvance(10);
    i0.ɵɵtextInterpolate1("", i0.ɵɵpipeBind1(15, 12, ctx_r1.total()), " subjects");
    i0.ɵɵadvance(3);
    i0.ɵɵrepeater(i0.ɵɵpureFunction4(20, _c6, i0.ɵɵpureFunction0(16, _c2), i0.ɵɵpureFunction0(17, _c3), i0.ɵɵpureFunction0(18, _c4), i0.ɵɵpureFunction0(19, _c5)));
    i0.ɵɵadvance(7);
    i0.ɵɵproperty("checked", ctx_r1.allVisibleSelected());
    i0.ɵɵadvance(14);
    i0.ɵɵrepeater(ctx_r1.subjects());
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate3("Showing ", ctx_r1.total() ? (ctx_r1.page() - 1) * ctx_r1.pageSize() + 1 : 0, "\u2013", ctx_r1.rangeEnd(), " of ", i0.ɵɵpipeBind1(44, 14, ctx_r1.total()));
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngModel", ctx_r1.pageSize());
    i0.ɵɵadvance();
    i0.ɵɵrepeater(ctx_r1.pageSizeOptions);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("disabled", ctx_r1.page() === 1);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(ctx_r1.page());
    i0.ɵɵadvance();
    i0.ɵɵproperty("disabled", ctx_r1.page() === ctx_r1.pages());
    i0.ɵɵadvance(2);
    i0.ɵɵconditional(ctx_r1.selectedCount() ? 55 : -1);
} }
function SubjectAssignmentComponent_Conditional_11_For_38_Conditional_22_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtext(0, " Already assigned ");
} }
function SubjectAssignmentComponent_Conditional_11_For_38_Conditional_23_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtext(0, " Ready ");
} }
function SubjectAssignmentComponent_Conditional_11_For_38_Template(rf, ctx) { if (rf & 1) {
    const _r19 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "tr")(1, "td")(2, "span", 55);
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(3, "svg", 56);
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(4, "strong");
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(6, "td");
    i0.ɵɵtext(7);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "td")(9, "span", 26);
    i0.ɵɵtext(10);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(11, "td");
    i0.ɵɵtext(12);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(13, "td")(14, "select", 14);
    i0.ɵɵlistener("ngModelChange", function SubjectAssignmentComponent_Conditional_11_For_38_Template_select_ngModelChange_14_listener($event) { const subject_r20 = i0.ɵɵrestoreView(_r19).$implicit; const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.setRequirement(subject_r20._id, $event)); });
    i0.ɵɵelementStart(15, "option", 66);
    i0.ɵɵtext(16, "Required");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(17, "option", 67);
    i0.ɵɵtext(18, "Elective");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(19, "td")(20, "span", 57);
    i0.ɵɵelement(21, "i");
    i0.ɵɵconditionalCreate(22, SubjectAssignmentComponent_Conditional_11_For_38_Conditional_22_Template, 1, 0)(23, SubjectAssignmentComponent_Conditional_11_For_38_Conditional_23_Template, 1, 0);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(24, "td")(25, "button", 73);
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(26, "svg", 28);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const subject_r20 = ctx.$implicit;
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(subject_r20.name);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(subject_r20.code);
    i0.ɵɵadvance(2);
    i0.ɵɵclassProp("is-practical", subject_r20.subjectType.toLowerCase().includes("practical"))("is-elective", subject_r20.subjectOption.toLowerCase() === "elective");
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(subject_r20.subjectOption.toLowerCase() === "elective" ? "Elective" : subject_r20.subjectType);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(subject_r20.credits);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngModel", ctx_r1.requirementFor(subject_r20._id));
    i0.ɵɵadvance(6);
    i0.ɵɵclassProp("erp-status--warning", subject_r20.assigned);
    i0.ɵɵadvance(2);
    i0.ɵɵconditional(subject_r20.assigned ? 22 : 23);
} }
function SubjectAssignmentComponent_Conditional_11_Template(rf, ctx) { if (rf & 1) {
    const _r17 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "section", 62)(1, "header", 63)(2, "strong");
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "label", 21);
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(5, "svg", 22);
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelement(6, "input", 64);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "select", 65, 0);
    i0.ɵɵlistener("change", function SubjectAssignmentComponent_Conditional_11_Template_select_change_7_listener() { i0.ɵɵrestoreView(_r17); const requirement_r18 = i0.ɵɵreference(8); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.setAllRequirements(requirement_r18.value === "elective" ? "elective" : "required")); });
    i0.ɵɵelementStart(9, "option", 15);
    i0.ɵɵtext(10, "Set requirement");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(11, "option", 66);
    i0.ɵɵtext(12, "Required");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(13, "option", 67);
    i0.ɵɵtext(14, "Elective");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(15, "button", 68);
    i0.ɵɵlistener("click", function SubjectAssignmentComponent_Conditional_11_Template_button_click_15_listener() { i0.ɵɵrestoreView(_r17); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.removeSelected()); });
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(16, "svg", 69);
    i0.ɵɵtext(17, " Remove selected ");
    i0.ɵɵelementEnd()();
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(18, "div", 25)(19, "table")(20, "thead")(21, "tr")(22, "th");
    i0.ɵɵtext(23, "Subject");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(24, "th");
    i0.ɵɵtext(25, "Code");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(26, "th");
    i0.ɵɵtext(27, "Type");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(28, "th");
    i0.ɵɵtext(29, "Credits");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(30, "th");
    i0.ɵɵtext(31, "Requirement");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(32, "th");
    i0.ɵɵtext(33, "Validation");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(34, "th");
    i0.ɵɵtext(35, "Actions");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(36, "tbody");
    i0.ɵɵrepeaterCreate(37, SubjectAssignmentComponent_Conditional_11_For_38_Template, 27, 12, "tr", null, _forTrack0);
    i0.ɵɵelementEnd()()()();
    i0.ɵɵelementStart(39, "footer", 70)(40, "button", 10);
    i0.ɵɵlistener("click", function SubjectAssignmentComponent_Conditional_11_Template_button_click_40_listener() { i0.ɵɵrestoreView(_r17); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.step.set(2)); });
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(41, "svg", 71);
    i0.ɵɵtext(42, " Back to library");
    i0.ɵɵelementEnd();
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(43, "button", 10);
    i0.ɵɵlistener("click", function SubjectAssignmentComponent_Conditional_11_Template_button_click_43_listener() { i0.ɵɵrestoreView(_r17); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.saveDraft()); });
    i0.ɵɵtext(44, " Save draft");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(45, "label")(46, "input", 72);
    i0.ɵɵlistener("ngModelChange", function SubjectAssignmentComponent_Conditional_11_Template_input_ngModelChange_46_listener($event) { i0.ɵɵrestoreView(_r17); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.confirmation.set($event)); });
    i0.ɵɵelementEnd();
    i0.ɵɵtext(47, " I reviewed this subject plan");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(48, "button", 17);
    i0.ɵɵlistener("click", function SubjectAssignmentComponent_Conditional_11_Template_button_click_48_listener() { i0.ɵɵrestoreView(_r17); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.assignReady()); });
    i0.ɵɵtext(49);
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(50, "svg", 18);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate4("", ctx_r1.selectedCount(), " selected \u00B7 ", ctx_r1.requiredCount(), " required \u00B7 ", ctx_r1.electiveCount(), " elective \u00B7 ", ctx_r1.totalCredits(), " credits");
    i0.ɵɵadvance(34);
    i0.ɵɵrepeater(ctx_r1.selectedSubjects());
    i0.ɵɵadvance(9);
    i0.ɵɵproperty("ngModel", ctx_r1.confirmation());
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("disabled", !ctx_r1.confirmation() || !ctx_r1.readySubjects().length || ctx_r1.saving());
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r1.saving() ? "Assigning\u2026" : "Assign " + ctx_r1.readySubjects().length + " ready subjects", " ");
} }
function apiMessage(error, fallback) {
    if (typeof error === 'object' && error && 'error' in error) {
        const response = error.error;
        if (typeof response?.message === 'string')
            return response.message;
    }
    return fallback;
}
export class SubjectAssignmentComponent {
    api = inject(ApiService);
    step = signal(1, ...(ngDevMode ? [{ debugName: "step" }] : /* istanbul ignore next */ []));
    loading = signal(false, ...(ngDevMode ? [{ debugName: "loading" }] : /* istanbul ignore next */ []));
    saving = signal(false, ...(ngDevMode ? [{ debugName: "saving" }] : /* istanbul ignore next */ []));
    error = signal('', ...(ngDevMode ? [{ debugName: "error" }] : /* istanbul ignore next */ []));
    message = signal('', ...(ngDevMode ? [{ debugName: "message" }] : /* istanbul ignore next */ []));
    groups = signal([], ...(ngDevMode ? [{ debugName: "groups" }] : /* istanbul ignore next */ []));
    history = signal([], ...(ngDevMode ? [{ debugName: "history" }] : /* istanbul ignore next */ []));
    subjects = signal([], ...(ngDevMode ? [{ debugName: "subjects" }] : /* istanbul ignore next */ []));
    selected = signal(new Map(), ...(ngDevMode ? [{ debugName: "selected" }] : /* istanbul ignore next */ []));
    requirements = signal(new Map(), ...(ngDevMode ? [{ debugName: "requirements" }] : /* istanbul ignore next */ []));
    page = signal(1, ...(ngDevMode ? [{ debugName: "page" }] : /* istanbul ignore next */ []));
    pageSize = signal(25, ...(ngDevMode ? [{ debugName: "pageSize" }] : /* istanbul ignore next */ []));
    total = signal(0, ...(ngDevMode ? [{ debugName: "total" }] : /* istanbul ignore next */ []));
    pages = signal(1, ...(ngDevMode ? [{ debugName: "pages" }] : /* istanbul ignore next */ []));
    confirmation = signal(false, ...(ngDevMode ? [{ debugName: "confirmation" }] : /* istanbul ignore next */ []));
    pageSizeOptions = ERP_PAGINATION.pageSizeOptions;
    session = '';
    semester = 1;
    groupId = '';
    search = '';
    typeFilter = '';
    sessions = computed(() => [
        ...new Set(this.groups()
            .filter((item) => item.isActive)
            .map((item) => item.academicSession)),
    ], ...(ngDevMode ? [{ debugName: "sessions" }] : /* istanbul ignore next */ []));
    selectedCount = computed(() => this.selected().size, ...(ngDevMode ? [{ debugName: "selectedCount" }] : /* istanbul ignore next */ []));
    selectedSubjects = computed(() => [...this.selected().values()], ...(ngDevMode ? [{ debugName: "selectedSubjects" }] : /* istanbul ignore next */ []));
    warningSubjects = computed(() => this.selectedSubjects().filter((subject) => subject.assigned), ...(ngDevMode ? [{ debugName: "warningSubjects" }] : /* istanbul ignore next */ []));
    readySubjects = computed(() => this.selectedSubjects().filter((subject) => !subject.assigned), ...(ngDevMode ? [{ debugName: "readySubjects" }] : /* istanbul ignore next */ []));
    requiredCount = computed(() => this.selectedSubjects().filter((subject) => this.requirementFor(subject._id) === 'required')
        .length, ...(ngDevMode ? [{ debugName: "requiredCount" }] : /* istanbul ignore next */ []));
    electiveCount = computed(() => this.selectedCount() - this.requiredCount(), ...(ngDevMode ? [{ debugName: "electiveCount" }] : /* istanbul ignore next */ []));
    constructor() {
        this.loadSetup();
    }
    availableGroups() {
        return this.groups().filter((item) => item.isActive &&
            item.academicSession === this.session &&
            Number(item.semester) === Number(this.semester));
    }
    groupName() {
        return this.groups().find((item) => item._id === this.groupId)?.name || '—';
    }
    scopeValid() {
        return Boolean(this.session && this.semester && this.groupId);
    }
    scopeHistory() {
        if (!this.scopeValid())
            return [];
        return this.history().filter((item) => String(item.groupId) === this.groupId &&
            item.academicSession === this.session &&
            Number(item.semester) === Number(this.semester));
    }
    loadSetup() {
        this.loading.set(true);
        forkJoin({
            groups: this.api.academicRecords('groups', { isActive: true }),
            history: this.api.academicRecords('group-subjects', { status: 'active' }),
        }).subscribe({
            next: ({ groups, history }) => {
                this.groups.set(groups.items);
                this.history.set(history.items);
                this.loading.set(false);
            },
            error: (error) => {
                this.error.set(apiMessage(error, 'Could not load subject assignment setup.'));
                this.loading.set(false);
            },
        });
    }
    resetScope(fromSession = false) {
        if (fromSession)
            this.groupId = '';
        this.clearSelection();
    }
    openLibrary() {
        if (!this.scopeValid())
            return;
        this.step.set(2);
        this.page.set(1);
        this.loadSubjects();
    }
    loadSubjects() {
        if (!this.scopeValid())
            return;
        this.loading.set(true);
        this.error.set('');
        this.api
            .assignableAcademicSubjects({
            academicSession: this.session,
            semester: Number(this.semester),
            groupId: this.groupId,
            search: this.search.trim(),
            subjectType: this.typeFilter,
            page: this.page(),
            limit: this.pageSize(),
        })
            .subscribe({
            next: ({ items, pagination }) => {
                this.subjects.set(items);
                this.total.set(pagination.total);
                this.pages.set(Math.max(1, pagination.pages));
                this.loading.set(false);
            },
            error: (error) => {
                this.error.set(apiMessage(error, 'Could not load the subject library.'));
                this.loading.set(false);
            },
        });
    }
    setTypeFilter(value) {
        this.typeFilter = value;
        this.page.set(1);
        this.loadSubjects();
    }
    isSelected(id) {
        return this.selected().has(id);
    }
    allVisibleSelected() {
        return (Boolean(this.subjects().length) && this.subjects().every((item) => this.isSelected(item._id)));
    }
    toggleSubject(subject) {
        const next = new Map(this.selected());
        const requirements = new Map(this.requirements());
        if (next.has(subject._id)) {
            next.delete(subject._id);
            requirements.delete(subject._id);
        }
        else {
            next.set(subject._id, subject);
            requirements.set(subject._id, subject.assignedRequirement ||
                (subject.subjectOption?.toLowerCase() === 'elective' ? 'elective' : 'required'));
        }
        this.selected.set(next);
        this.requirements.set(requirements);
    }
    toggleVisible() {
        const select = !this.subjects().every((subject) => this.isSelected(subject._id));
        for (const subject of this.subjects()) {
            if (select && !this.isSelected(subject._id))
                this.toggleSubject(subject);
            if (!select && this.isSelected(subject._id))
                this.toggleSubject(subject);
        }
    }
    requirementFor(id) {
        return this.requirements().get(id) || 'required';
    }
    setRequirement(id, value) {
        const next = new Map(this.requirements());
        next.set(id, value);
        this.requirements.set(next);
    }
    setAllRequirements(value) {
        const next = new Map(this.requirements());
        for (const subject of this.selectedSubjects())
            next.set(subject._id, value);
        this.requirements.set(next);
    }
    clearSelection() {
        this.selected.set(new Map());
        this.requirements.set(new Map());
        this.confirmation.set(false);
    }
    removeSelected() {
        this.clearSelection();
        this.step.set(2);
    }
    changePage(value) {
        this.page.set(Math.min(this.pages(), Math.max(1, value)));
        this.loadSubjects();
    }
    rangeEnd() {
        return Math.min(this.page() * this.pageSize(), this.total());
    }
    totalCredits() {
        return this.selectedSubjects().reduce((sum, item) => sum + Number(item.credits || 0), 0);
    }
    openReview() {
        if (!this.selectedCount())
            return;
        this.step.set(3);
        this.confirmation.set(false);
    }
    saveDraft() {
        const draft = {
            session: this.session,
            semester: this.semester,
            groupId: this.groupId,
            subjects: this.selectedSubjects().map((subject) => ({
                id: subject._id,
                requirement: this.requirementFor(subject._id),
            })),
        };
        localStorage.setItem('erp-subject-assignment-draft', JSON.stringify(draft));
        this.message.set('Subject assignment draft saved in this browser.');
    }
    assignReady() {
        if (!this.confirmation() || !this.readySubjects().length || this.saving())
            return;
        const batches = ['required', 'elective']
            .map((requirement) => ({
            requirement,
            subjectIds: this.readySubjects()
                .filter((subject) => this.requirementFor(subject._id) === requirement)
                .map((subject) => subject._id),
        }))
            .filter((batch) => batch.subjectIds.length);
        this.saving.set(true);
        this.error.set('');
        from(batches)
            .pipe(concatMap((batch) => this.api.bulkAssignSubjects({
            groupId: this.groupId,
            subjectIds: batch.subjectIds,
            academicSession: this.session,
            semester: Number(this.semester),
            requirement: batch.requirement,
        })), toArray())
            .subscribe({
            next: (results) => {
                const assigned = results.reduce((sum, result) => sum + result.assigned, 0);
                this.message.set(`${assigned} subject${assigned === 1 ? '' : 's'} assigned successfully.`);
                this.saving.set(false);
                this.clearSelection();
                this.step.set(1);
                this.loadSetup();
            },
            error: (error) => {
                this.error.set(apiMessage(error, 'Subjects could not be assigned.'));
                this.saving.set(false);
            },
        });
    }
    changeScope() {
        this.step.set(1);
        this.clearSelection();
    }
    scrollToHistory() {
        document.querySelector('#subject-assignment-history')?.scrollIntoView({ behavior: 'smooth' });
    }
    static ɵfac = function SubjectAssignmentComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || SubjectAssignmentComponent)(); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: SubjectAssignmentComponent, selectors: [["erp-subject-assignment"]], decls: 12, vars: 10, consts: [["requirement", ""], ["variant", "compact", "layout", "collection", 3, "title", "description"], ["page-actions", "", 1, "erp-workflow-head"], ["aria-label", "Subject assignment progress", 1, "erp-workflow-stepper"], [3, "is-active", "is-complete"], ["type", "button", 1, "erp-button", "erp-button--secondary"], [1, "erp-alert", "erp-alert--danger"], [1, "erp-alert", "erp-alert--success"], [1, "erp-workflow-scope-summary"], ["lucideCheck", "", "size", "14"], ["type", "button", 1, "erp-button", "erp-button--secondary", 3, "click"], ["lucideHistory", "", "size", "17"], [1, "erp-card", "erp-workflow-scope-card"], [1, "erp-workflow-scope-grid", "erp-workflow-scope-grid--three"], [1, "erp-control", 3, "ngModelChange", "ngModel"], ["value", ""], [3, "value"], ["type", "button", 1, "erp-button", "erp-button--primary", 3, "click", "disabled"], ["lucideArrowRight", "", "size", "17"], ["id", "subject-assignment-history", 1, "erp-card", "erp-table-shell", "erp-subject-history"], [1, "erp-subject-history__head"], [1, "erp-search-control"], ["lucideSearch", "", "size", "17"], ["type", "search", "placeholder", "Search assignments\u2026"], ["lucideFilter", "", "size", "17"], [1, "erp-table-scroll"], [1, "erp-subject-type"], ["type", "button", "aria-label", "Assignment actions", 1, "erp-icon-button"], ["lucideMoreVertical", "", "size", "17"], ["colspan", "6"], [1, "erp-empty-panel", "erp-empty-panel--compact"], [1, "erp-subject-empty-icon"], ["lucideBookOpen", "", "size", "31"], ["lucideLink2", "", "size", "15"], ["lucideCalendarDays", "", "size", "18"], ["lucideGraduationCap", "", "size", "18"], ["lucideUsersRound", "", "size", "18"], ["type", "button", 3, "click"], ["lucidePencil", "", "size", "16"], [1, "erp-card", "erp-table-shell", "erp-subject-library"], [1, "erp-workflow-table-tools"], ["lucideSearch", "", "size", "18"], ["type", "search", "placeholder", "Search subject name or code", 3, "ngModelChange", "keyup.enter", "ngModel"], ["lucideColumns3", "", "size", "17"], ["type", "button", "aria-label", "Refresh subjects", 1, "erp-icon-button", 3, "click"], ["lucideRefreshCw", "", "size", "18"], [1, "erp-subject-filters"], ["type", "button", 3, "is-active"], ["type", "checkbox", 3, "change", "checked"], [3, "is-selected"], [1, "erp-workflow-table-footer"], ["type", "button", 1, "erp-icon-button", 3, "click", "disabled"], ["lucideChevronLeft", "", "size", "17"], ["lucideChevronRight", "", "size", "17"], [1, "erp-workflow-action-bar"], [1, "erp-subject-name"], ["lucideBookOpen", "", "size", "16"], [1, "erp-status"], ["colspan", "7"], [1, "erp-empty-panel"], ["kind", "noResults", "size", "compact"], ["type", "button", 1, "erp-button", "erp-button--primary", 3, "click"], [1, "erp-card", "erp-table-shell", "erp-subject-review"], [1, "erp-subject-review__tools"], ["type", "search", "placeholder", "Search subjects\u2026"], [1, "erp-control", 3, "change"], ["value", "required"], ["value", "elective"], ["type", "button", 1, "erp-button", "erp-button--danger", 3, "click"], ["lucideTrash2", "", "size", "17"], [1, "erp-workflow-action-bar", "erp-workflow-action-bar--review"], ["lucideArrowLeft", "", "size", "17"], ["type", "checkbox", 3, "ngModelChange", "ngModel"], ["type", "button", "aria-label", "Subject actions", 1, "erp-icon-button"]], template: function SubjectAssignmentComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "erp-admin-page", 1)(1, "div", 2)(2, "nav", 3);
            i0.ɵɵrepeaterCreate(3, SubjectAssignmentComponent_For_4_Template, 6, 6, "div", 4, i0.ɵɵrepeaterTrackByIdentity);
            i0.ɵɵelementEnd();
            i0.ɵɵconditionalCreate(5, SubjectAssignmentComponent_Conditional_5_Template, 3, 0, "button", 5);
            i0.ɵɵelementEnd();
            i0.ɵɵconditionalCreate(6, SubjectAssignmentComponent_Conditional_6_Template, 2, 1, "div", 6);
            i0.ɵɵconditionalCreate(7, SubjectAssignmentComponent_Conditional_7_Template, 2, 1, "div", 7);
            i0.ɵɵconditionalCreate(8, SubjectAssignmentComponent_Conditional_8_Template, 64, 6);
            i0.ɵɵconditionalCreate(9, SubjectAssignmentComponent_Conditional_9_Template, 15, 3, "section", 8);
            i0.ɵɵconditionalCreate(10, SubjectAssignmentComponent_Conditional_10_Template, 56, 25);
            i0.ɵɵconditionalCreate(11, SubjectAssignmentComponent_Conditional_11_Template, 51, 7);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵproperty("title", ctx.step() === 3 ? "Configure subjects" : "Subject assignment")("description", ctx.step() === 1 ? "Assign subjects to a group for the selected academic scope." : "");
            i0.ɵɵadvance(3);
            i0.ɵɵrepeater(i0.ɵɵpureFunction0(9, _c0));
            i0.ɵɵadvance(2);
            i0.ɵɵconditional(ctx.step() === 1 ? 5 : -1);
            i0.ɵɵadvance();
            i0.ɵɵconditional(ctx.error() ? 6 : -1);
            i0.ɵɵadvance();
            i0.ɵɵconditional(ctx.message() ? 7 : -1);
            i0.ɵɵadvance();
            i0.ɵɵconditional(ctx.step() === 1 ? 8 : -1);
            i0.ɵɵadvance();
            i0.ɵɵconditional(ctx.step() === 2 || ctx.step() === 3 ? 9 : -1);
            i0.ɵɵadvance();
            i0.ɵɵconditional(ctx.step() === 2 ? 10 : -1);
            i0.ɵɵadvance();
            i0.ɵɵconditional(ctx.step() === 3 ? 11 : -1);
        } }, dependencies: [CommonModule,
            FormsModule, i1.NgSelectOption, i1.ɵNgSelectMultipleOption, i1.DefaultValueAccessor, i1.CheckboxControlValueAccessor, i1.SelectControlValueAccessor, i1.NgControlStatus, i1.NgModel, AdminIllustrationComponent,
            AdminPageComponent,
            LucideArrowLeft,
            LucideArrowRight,
            LucideBookOpen,
            LucideCalendarDays,
            LucideCheck,
            LucideChevronLeft,
            LucideChevronRight,
            LucideColumns3,
            LucideFilter,
            LucideGraduationCap,
            LucideHistory,
            LucideLink2,
            LucideMoreVertical,
            LucidePencil,
            LucideRefreshCw,
            LucideSearch,
            LucideTrash2,
            LucideUsersRound, i2.DecimalPipe], encapsulation: 2, changeDetection: 0 });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(SubjectAssignmentComponent, [{
        type: Component,
        args: [{ selector: 'erp-subject-assignment', imports: [
                    CommonModule,
                    FormsModule,
                    AdminIllustrationComponent,
                    AdminPageComponent,
                    LucideArrowLeft,
                    LucideArrowRight,
                    LucideBookOpen,
                    LucideCalendarDays,
                    LucideCheck,
                    LucideChevronLeft,
                    LucideChevronRight,
                    LucideColumns3,
                    LucideFilter,
                    LucideGraduationCap,
                    LucideHistory,
                    LucideLink2,
                    LucideMoreVertical,
                    LucidePencil,
                    LucideRefreshCw,
                    LucideSearch,
                    LucideTrash2,
                    LucideUsersRound,
                ], changeDetection: ChangeDetectionStrategy.OnPush, template: "<erp-admin-page\n  [title]=\"step() === 3 ? 'Configure subjects' : 'Subject assignment'\"\n  [description]=\"step() === 1 ? 'Assign subjects to a group for the selected academic scope.' : ''\"\n  variant=\"compact\"\n  layout=\"collection\"\n>\n  <div page-actions class=\"erp-workflow-head\">\n    <nav class=\"erp-workflow-stepper\" aria-label=\"Subject assignment progress\">\n      @for (item of [1, 2, 3]; track item) {\n        <div [class.is-active]=\"step() === item\" [class.is-complete]=\"step() > item\">\n          <span>\n            @if (step() > item) {\n              <svg lucideCheck size=\"14\"></svg>\n            } @else {\n              {{ item }}\n            }\n          </span>\n          <strong>{{ item === 1 ? 'Scope' : item === 2 ? 'Subjects' : 'Review' }}</strong>\n        </div>\n      }\n    </nav>\n    @if (step() === 1) {\n      <button class=\"erp-button erp-button--secondary\" type=\"button\" (click)=\"scrollToHistory()\">\n        <svg lucideHistory size=\"17\"></svg> Assignment history\n      </button>\n    }\n  </div>\n\n  @if (error()) {\n    <div class=\"erp-alert erp-alert--danger\">{{ error() }}</div>\n  }\n  @if (message()) {\n    <div class=\"erp-alert erp-alert--success\">{{ message() }}</div>\n  }\n\n  @if (step() === 1) {\n    <section class=\"erp-card erp-workflow-scope-card\">\n      <header>\n        <h2>Choose academic scope</h2>\n        <p>Select the academic session, semester and group to manage subject assignments.</p>\n      </header>\n      <div class=\"erp-workflow-scope-grid erp-workflow-scope-grid--three\">\n        <label\n          ><span>Academic session *</span\n          ><select class=\"erp-control\" [(ngModel)]=\"session\" (ngModelChange)=\"resetScope(true)\">\n            <option value=\"\">Select session</option>\n            @for (item of sessions(); track item) {\n              <option [value]=\"item\">{{ item }}</option>\n            }\n          </select></label\n        >\n        <label\n          ><span>Semester *</span\n          ><select class=\"erp-control\" [(ngModel)]=\"semester\" (ngModelChange)=\"resetScope(true)\">\n            @for (item of [1, 2, 3, 4, 5, 6, 7, 8]; track item) {\n              <option [value]=\"item\">Semester {{ item }}</option>\n            }\n          </select></label\n        >\n        <label\n          ><span>Group *</span\n          ><select class=\"erp-control\" [(ngModel)]=\"groupId\" (ngModelChange)=\"clearSelection()\">\n            <option value=\"\">Select group</option>\n            @for (item of availableGroups(); track item._id) {\n              <option [value]=\"item._id\">{{ item.name }}</option>\n            }\n          </select></label\n        >\n      </div>\n      <footer>\n        <button\n          class=\"erp-button erp-button--primary\"\n          type=\"button\"\n          [disabled]=\"!scopeValid() || loading()\"\n          (click)=\"openLibrary()\"\n        >\n          Open subject library <svg lucideArrowRight size=\"17\"></svg>\n        </button>\n      </footer>\n    </section>\n\n    <section id=\"subject-assignment-history\" class=\"erp-card erp-table-shell erp-subject-history\">\n      <header class=\"erp-subject-history__head\">\n        <h2>Existing assignments</h2>\n        <div>\n          <label class=\"erp-search-control\"\n            ><svg lucideSearch size=\"17\"></svg\n            ><input type=\"search\" placeholder=\"Search assignments\u2026\" /></label\n          ><button class=\"erp-button erp-button--secondary\" type=\"button\">\n            <svg lucideFilter size=\"17\"></svg> Filters\n          </button>\n        </div>\n      </header>\n      <div class=\"erp-table-scroll\">\n        <table>\n          <thead>\n            <tr>\n              <th>Group</th>\n              <th>Session</th>\n              <th>Semester</th>\n              <th>Subject</th>\n              <th>Requirement</th>\n              <th>Actions</th>\n            </tr>\n          </thead>\n          <tbody>\n            @for (item of scopeHistory(); track item._id) {\n              <tr>\n                <td>\n                  <strong>{{ item.groupName || groupName() }}</strong>\n                </td>\n                <td>{{ item.academicSession }}</td>\n                <td>Semester {{ item.semester }}</td>\n                <td>{{ item.subjectCode }} \u00B7 {{ item.subjectName }}</td>\n                <td>\n                  <span\n                    class=\"erp-subject-type\"\n                    [class.is-elective]=\"item.requirement === 'elective'\"\n                    >{{ item.requirement }}</span\n                  >\n                </td>\n                <td>\n                  <button class=\"erp-icon-button\" type=\"button\" aria-label=\"Assignment actions\">\n                    <svg lucideMoreVertical size=\"17\"></svg>\n                  </button>\n                </td>\n              </tr>\n            } @empty {\n              <tr>\n                <td colspan=\"6\">\n                  <div class=\"erp-empty-panel erp-empty-panel--compact\">\n                    <span class=\"erp-subject-empty-icon\"\n                      ><svg lucideBookOpen size=\"31\"></svg><svg lucideLink2 size=\"15\"></svg\n                    ></span>\n                    <h2>No assignments found for the selected scope.</h2>\n                    <p>\n                      Choose an academic session, semester and group above to view existing\n                      assignments.\n                    </p>\n                  </div>\n                </td>\n              </tr>\n            }\n          </tbody>\n        </table>\n      </div>\n    </section>\n  }\n\n  @if (step() === 2 || step() === 3) {\n    <section class=\"erp-workflow-scope-summary\">\n      <svg lucideCalendarDays size=\"18\"></svg><strong>{{ session }}</strong\n      ><i></i><svg lucideGraduationCap size=\"18\"></svg><span>Semester {{ semester }}</span\n      ><i></i><svg lucideUsersRound size=\"18\"></svg><span>{{ groupName() }}</span\n      ><button type=\"button\" (click)=\"changeScope()\">\n        <svg lucidePencil size=\"16\"></svg> Change\n      </button>\n    </section>\n  }\n\n  @if (step() === 2) {\n    <section class=\"erp-card erp-table-shell erp-subject-library\">\n      <header class=\"erp-workflow-table-tools\">\n        <label class=\"erp-search-control\"\n          ><svg lucideSearch size=\"18\"></svg\n          ><input\n            type=\"search\"\n            [(ngModel)]=\"search\"\n            placeholder=\"Search subject name or code\"\n            (keyup.enter)=\"page.set(1); loadSubjects()\" /></label\n        ><button class=\"erp-button erp-button--secondary\" type=\"button\" (click)=\"loadSubjects()\">\n          <svg lucideFilter size=\"17\"></svg> Filters</button\n        ><button class=\"erp-button erp-button--secondary\" type=\"button\">\n          <svg lucideColumns3 size=\"17\"></svg> Columns</button\n        ><button\n          class=\"erp-icon-button\"\n          type=\"button\"\n          aria-label=\"Refresh subjects\"\n          (click)=\"loadSubjects()\"\n        >\n          <svg lucideRefreshCw size=\"18\"></svg></button\n        ><strong>{{ total() | number }} subjects</strong>\n      </header>\n      <nav class=\"erp-subject-filters\">\n        @for (\n          item of [\n            { value: '', label: 'All' },\n            { value: 'theory', label: 'Theory' },\n            { value: 'practical', label: 'Practical' },\n            { value: 'elective', label: 'Elective' },\n          ];\n          track item.value\n        ) {\n          <button\n            type=\"button\"\n            [class.is-active]=\"typeFilter === item.value\"\n            (click)=\"setTypeFilter(item.value)\"\n          >\n            {{ item.label }}\n          </button>\n        }\n      </nav>\n      <div class=\"erp-table-scroll\">\n        <table>\n          <thead>\n            <tr>\n              <th>\n                <input\n                  type=\"checkbox\"\n                  [checked]=\"allVisibleSelected()\"\n                  (change)=\"toggleVisible()\"\n                />\n              </th>\n              <th>Subject</th>\n              <th>Code</th>\n              <th>Type</th>\n              <th>Credits</th>\n              <th>Department</th>\n              <th>Status</th>\n            </tr>\n          </thead>\n          <tbody>\n            @for (subject of subjects(); track subject._id) {\n              <tr [class.is-selected]=\"isSelected(subject._id)\">\n                <td>\n                  <input\n                    type=\"checkbox\"\n                    [checked]=\"isSelected(subject._id)\"\n                    (change)=\"toggleSubject(subject)\"\n                  />\n                </td>\n                <td>\n                  <span class=\"erp-subject-name\"\n                    ><svg lucideBookOpen size=\"16\"></svg><strong>{{ subject.name }}</strong></span\n                  >\n                </td>\n                <td>{{ subject.code }}</td>\n                <td>\n                  <span\n                    class=\"erp-subject-type\"\n                    [class.is-practical]=\"subject.subjectType.toLowerCase().includes('practical')\"\n                    [class.is-elective]=\"subject.subjectOption.toLowerCase() === 'elective'\"\n                    >{{\n                      subject.subjectOption.toLowerCase() === 'elective'\n                        ? 'Elective'\n                        : subject.subjectType\n                    }}</span\n                  >\n                </td>\n                <td>{{ subject.credits }}</td>\n                <td>{{ subject.departmentName || '\u2014' }}</td>\n                <td>\n                  <span class=\"erp-status\" [class.erp-status--muted]=\"!subject.assigned\"\n                    ><i></i>{{ subject.assigned ? 'Assigned' : 'Unassigned' }}</span\n                  >\n                </td>\n              </tr>\n            } @empty {\n              <tr>\n                <td colspan=\"7\">\n                  <div class=\"erp-empty-panel\">\n                    <erp-admin-illustration kind=\"noResults\" size=\"compact\" />\n                    <h2>No subjects found</h2>\n                    <p>Change the search or academic scope.</p>\n                  </div>\n                </td>\n              </tr>\n            }\n          </tbody>\n        </table>\n      </div>\n      <footer class=\"erp-workflow-table-footer\">\n        <span\n          >Showing {{ total() ? (page() - 1) * pageSize() + 1 : 0 }}\u2013{{ rangeEnd() }} of\n          {{ total() | number }}</span\n        >\n        <div>\n          <select\n            class=\"erp-control\"\n            [ngModel]=\"pageSize()\"\n            (ngModelChange)=\"pageSize.set(+$event); changePage(1)\"\n          >\n            @for (size of pageSizeOptions; track size) {\n              <option [value]=\"size\">{{ size }} / page</option>\n            }</select\n          ><button\n            class=\"erp-icon-button\"\n            type=\"button\"\n            [disabled]=\"page() === 1\"\n            (click)=\"changePage(page() - 1)\"\n          >\n            <svg lucideChevronLeft size=\"17\"></svg></button\n          ><b>{{ page() }}</b\n          ><button\n            class=\"erp-icon-button\"\n            type=\"button\"\n            [disabled]=\"page() === pages()\"\n            (click)=\"changePage(page() + 1)\"\n          >\n            <svg lucideChevronRight size=\"17\"></svg>\n          </button>\n        </div>\n      </footer>\n    </section>\n    @if (selectedCount()) {\n      <footer class=\"erp-workflow-action-bar\">\n        <strong>{{ selectedCount() }} subjects selected</strong\n        ><button type=\"button\" (click)=\"clearSelection()\">Clear</button\n        ><button class=\"erp-button erp-button--primary\" type=\"button\" (click)=\"openReview()\">\n          Configure {{ selectedCount() }} subjects <svg lucideArrowRight size=\"17\"></svg>\n        </button>\n      </footer>\n    }\n  }\n\n  @if (step() === 3) {\n    <section class=\"erp-card erp-table-shell erp-subject-review\">\n      <header class=\"erp-subject-review__tools\">\n        <strong\n          >{{ selectedCount() }} selected \u00B7 {{ requiredCount() }} required \u00B7\n          {{ electiveCount() }} elective \u00B7 {{ totalCredits() }} credits</strong\n        ><label class=\"erp-search-control\"\n          ><svg lucideSearch size=\"17\"></svg\n          ><input type=\"search\" placeholder=\"Search subjects\u2026\" /></label\n        ><select\n          class=\"erp-control\"\n          #requirement\n          (change)=\"setAllRequirements(requirement.value === 'elective' ? 'elective' : 'required')\"\n        >\n          <option value=\"\">Set requirement</option>\n          <option value=\"required\">Required</option>\n          <option value=\"elective\">Elective</option></select\n        ><button class=\"erp-button erp-button--danger\" type=\"button\" (click)=\"removeSelected()\">\n          <svg lucideTrash2 size=\"17\"></svg> Remove selected\n        </button>\n      </header>\n      <div class=\"erp-table-scroll\">\n        <table>\n          <thead>\n            <tr>\n              <th>Subject</th>\n              <th>Code</th>\n              <th>Type</th>\n              <th>Credits</th>\n              <th>Requirement</th>\n              <th>Validation</th>\n              <th>Actions</th>\n            </tr>\n          </thead>\n          <tbody>\n            @for (subject of selectedSubjects(); track subject._id) {\n              <tr>\n                <td>\n                  <span class=\"erp-subject-name\"\n                    ><svg lucideBookOpen size=\"16\"></svg><strong>{{ subject.name }}</strong></span\n                  >\n                </td>\n                <td>{{ subject.code }}</td>\n                <td>\n                  <span\n                    class=\"erp-subject-type\"\n                    [class.is-practical]=\"subject.subjectType.toLowerCase().includes('practical')\"\n                    [class.is-elective]=\"subject.subjectOption.toLowerCase() === 'elective'\"\n                    >{{\n                      subject.subjectOption.toLowerCase() === 'elective'\n                        ? 'Elective'\n                        : subject.subjectType\n                    }}</span\n                  >\n                </td>\n                <td>{{ subject.credits }}</td>\n                <td>\n                  <select\n                    class=\"erp-control\"\n                    [ngModel]=\"requirementFor(subject._id)\"\n                    (ngModelChange)=\"setRequirement(subject._id, $event)\"\n                  >\n                    <option value=\"required\">Required</option>\n                    <option value=\"elective\">Elective</option>\n                  </select>\n                </td>\n                <td>\n                  <span class=\"erp-status\" [class.erp-status--warning]=\"subject.assigned\"\n                    ><i></i>\n                    @if (subject.assigned) {\n                      Already assigned\n                    } @else {\n                      Ready\n                    }\n                  </span>\n                </td>\n                <td>\n                  <button class=\"erp-icon-button\" type=\"button\" aria-label=\"Subject actions\">\n                    <svg lucideMoreVertical size=\"17\"></svg>\n                  </button>\n                </td>\n              </tr>\n            }\n          </tbody>\n        </table>\n      </div>\n    </section>\n    <footer class=\"erp-workflow-action-bar erp-workflow-action-bar--review\">\n      <button class=\"erp-button erp-button--secondary\" type=\"button\" (click)=\"step.set(2)\">\n        <svg lucideArrowLeft size=\"17\"></svg> Back to library</button\n      ><button class=\"erp-button erp-button--secondary\" type=\"button\" (click)=\"saveDraft()\">\n        Save draft</button\n      ><label\n        ><input\n          type=\"checkbox\"\n          [ngModel]=\"confirmation()\"\n          (ngModelChange)=\"confirmation.set($event)\"\n        />\n        I reviewed this subject plan</label\n      ><button\n        class=\"erp-button erp-button--primary\"\n        type=\"button\"\n        [disabled]=\"!confirmation() || !readySubjects().length || saving()\"\n        (click)=\"assignReady()\"\n      >\n        {{ saving() ? 'Assigning\u2026' : 'Assign ' + readySubjects().length + ' ready subjects' }}\n        <svg lucideArrowRight size=\"17\"></svg>\n      </button>\n    </footer>\n  }\n</erp-admin-page>\n" }]
    }], () => [], null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(SubjectAssignmentComponent, { className: "SubjectAssignmentComponent", filePath: "frontend/src/app/features/admin/academics/subject-assignment.component.ts", lineNumber: 83 }); })();
