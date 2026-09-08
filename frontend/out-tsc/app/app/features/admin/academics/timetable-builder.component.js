import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, HostListener, computed, inject, signal, } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LucideArrowLeftRight, LucideArrowRight, LucideBookOpen, LucideCalendarDays, LucideCheck, LucideChevronDown, LucideEye, LucideFilter, LucideGraduationCap, LucideInfo, LucideLandmark, LucideList, LucideLock, LucideMaximize2, LucideSave, LucideSearch, LucideSettings, LucideUsersRound, LucideX, } from '@lucide/angular';
import { Router } from '@angular/router';
import { ApiService } from '../../../core/api.service';
import { AdminPageComponent } from '../../../shared/ui/admin-page/admin-page.component';
import { AdminIllustrationComponent } from '../../../shared/ui/admin-illustration/admin-illustration.component';
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
const _forTrack0 = ($index, $item) => $item._id;
function TimetableBuilderComponent_Conditional_2_Template(rf, ctx) { if (rf & 1) {
    const _r1 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 10);
    i0.ɵɵlistener("click", function TimetableBuilderComponent_Conditional_2_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.configurePeriods()); });
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(1, "svg", 11);
    i0.ɵɵtext(2, "Configure periods ");
    i0.ɵɵelementEnd();
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(3, "button", 12);
    i0.ɵɵlistener("click", function TimetableBuilderComponent_Conditional_2_Template_button_click_3_listener() { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.message.set("Draft saved.")); });
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(4, "svg", 13);
    i0.ɵɵtext(5, "Save draft ");
    i0.ɵɵelementEnd();
} }
function TimetableBuilderComponent_Conditional_3_Template(rf, ctx) { if (rf & 1) {
    const _r3 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 10);
    i0.ɵɵlistener("click", function TimetableBuilderComponent_Conditional_3_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r3); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.savedOpen.set(true)); });
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(1, "svg", 14);
    i0.ɵɵtext(2, "View saved timetables ");
    i0.ɵɵelementEnd();
} }
function TimetableBuilderComponent_Conditional_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(0, "svg", 5);
} }
function TimetableBuilderComponent_Conditional_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtext(0, " 1 ");
} }
function TimetableBuilderComponent_Conditional_23_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 6);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r1.error());
} }
function TimetableBuilderComponent_Conditional_24_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 7);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r1.message());
} }
function TimetableBuilderComponent_Conditional_25_For_14_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 19);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r5 = ctx.$implicit;
    i0.ɵɵproperty("value", item_r5.name);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(item_r5.name);
} }
function TimetableBuilderComponent_Conditional_25_For_20_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 20);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r6 = ctx.$implicit;
    i0.ɵɵproperty("ngValue", item_r6);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1("Semester ", item_r6);
} }
function TimetableBuilderComponent_Conditional_25_For_28_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 19);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r7 = ctx.$implicit;
    i0.ɵɵproperty("value", item_r7._id);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(item_r7.name);
} }
function TimetableBuilderComponent_Conditional_25_For_36_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 19);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r8 = ctx.$implicit;
    i0.ɵɵproperty("value", item_r8._id);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(item_r8.name);
} }
function TimetableBuilderComponent_Conditional_25_For_44_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 19);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r9 = ctx.$implicit;
    i0.ɵɵproperty("value", item_r9._id);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(item_r9.name);
} }
function TimetableBuilderComponent_Conditional_25_For_52_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 19);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r10 = ctx.$implicit;
    i0.ɵɵproperty("value", item_r10._id);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(item_r10.name);
} }
function TimetableBuilderComponent_Conditional_25_Template(rf, ctx) { if (rf & 1) {
    const _r4 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "section", 15)(1, "header")(2, "h2");
    i0.ɵɵtext(3, "Open timetable workspace");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "p");
    i0.ɵɵtext(5, "Select the academic scope and configured timetable structure.");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(6, "div", 16)(7, "label")(8, "span");
    i0.ɵɵtext(9, "Academic session *");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(10, "select", 17);
    i0.ɵɵtwoWayListener("ngModelChange", function TimetableBuilderComponent_Conditional_25_Template_select_ngModelChange_10_listener($event) { i0.ɵɵrestoreView(_r4); const ctx_r1 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r1.session, $event) || (ctx_r1.session = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵlistener("ngModelChange", function TimetableBuilderComponent_Conditional_25_Template_select_ngModelChange_10_listener() { i0.ɵɵrestoreView(_r4); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.resetAfter("session")); });
    i0.ɵɵelementStart(11, "option", 18);
    i0.ɵɵtext(12, "Select session");
    i0.ɵɵelementEnd();
    i0.ɵɵrepeaterCreate(13, TimetableBuilderComponent_Conditional_25_For_14_Template, 2, 2, "option", 19, _forTrack0);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(15, "label")(16, "span");
    i0.ɵɵtext(17, "Semester *");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(18, "select", 17);
    i0.ɵɵtwoWayListener("ngModelChange", function TimetableBuilderComponent_Conditional_25_Template_select_ngModelChange_18_listener($event) { i0.ɵɵrestoreView(_r4); const ctx_r1 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r1.semester, $event) || (ctx_r1.semester = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵlistener("ngModelChange", function TimetableBuilderComponent_Conditional_25_Template_select_ngModelChange_18_listener() { i0.ɵɵrestoreView(_r4); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.resetAfter("semester")); });
    i0.ɵɵrepeaterCreate(19, TimetableBuilderComponent_Conditional_25_For_20_Template, 2, 2, "option", 20, i0.ɵɵrepeaterTrackByIdentity);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(21, "label")(22, "span");
    i0.ɵɵtext(23, "Group *");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(24, "select", 17);
    i0.ɵɵtwoWayListener("ngModelChange", function TimetableBuilderComponent_Conditional_25_Template_select_ngModelChange_24_listener($event) { i0.ɵɵrestoreView(_r4); const ctx_r1 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r1.groupId, $event) || (ctx_r1.groupId = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵlistener("ngModelChange", function TimetableBuilderComponent_Conditional_25_Template_select_ngModelChange_24_listener() { i0.ɵɵrestoreView(_r4); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.resetAfter("group")); });
    i0.ɵɵelementStart(25, "option", 18);
    i0.ɵɵtext(26, "Select group");
    i0.ɵɵelementEnd();
    i0.ɵɵrepeaterCreate(27, TimetableBuilderComponent_Conditional_25_For_28_Template, 2, 2, "option", 19, _forTrack0);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(29, "label")(30, "span");
    i0.ɵɵtext(31, "Section *");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(32, "select", 17);
    i0.ɵɵtwoWayListener("ngModelChange", function TimetableBuilderComponent_Conditional_25_Template_select_ngModelChange_32_listener($event) { i0.ɵɵrestoreView(_r4); const ctx_r1 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r1.sectionId, $event) || (ctx_r1.sectionId = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵlistener("ngModelChange", function TimetableBuilderComponent_Conditional_25_Template_select_ngModelChange_32_listener() { i0.ɵɵrestoreView(_r4); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.resetAfter("section")); });
    i0.ɵɵelementStart(33, "option", 18);
    i0.ɵɵtext(34, "Select section");
    i0.ɵɵelementEnd();
    i0.ɵɵrepeaterCreate(35, TimetableBuilderComponent_Conditional_25_For_36_Template, 2, 2, "option", 19, _forTrack0);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(37, "label")(38, "span");
    i0.ɵɵtext(39, "Timetable *");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(40, "select", 17);
    i0.ɵɵtwoWayListener("ngModelChange", function TimetableBuilderComponent_Conditional_25_Template_select_ngModelChange_40_listener($event) { i0.ɵɵrestoreView(_r4); const ctx_r1 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r1.timetableMasterId, $event) || (ctx_r1.timetableMasterId = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵlistener("ngModelChange", function TimetableBuilderComponent_Conditional_25_Template_select_ngModelChange_40_listener() { i0.ɵɵrestoreView(_r4); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.resetAfter("master")); });
    i0.ɵɵelementStart(41, "option", 18);
    i0.ɵɵtext(42, "Select timetable");
    i0.ɵɵelementEnd();
    i0.ɵɵrepeaterCreate(43, TimetableBuilderComponent_Conditional_25_For_44_Template, 2, 2, "option", 19, _forTrack0);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(45, "label")(46, "span");
    i0.ɵɵtext(47, "Structure *");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(48, "select", 17);
    i0.ɵɵtwoWayListener("ngModelChange", function TimetableBuilderComponent_Conditional_25_Template_select_ngModelChange_48_listener($event) { i0.ɵɵrestoreView(_r4); const ctx_r1 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r1.timetableStructureId, $event) || (ctx_r1.timetableStructureId = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementStart(49, "option", 18);
    i0.ɵɵtext(50, "Select structure");
    i0.ɵɵelementEnd();
    i0.ɵɵrepeaterCreate(51, TimetableBuilderComponent_Conditional_25_For_52_Template, 2, 2, "option", 19, _forTrack0);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(53, "footer")(54, "span");
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(55, "svg", 21);
    i0.ɵɵtext(56, "Select all fields to continue.");
    i0.ɵɵelementEnd();
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(57, "button", 22);
    i0.ɵɵlistener("click", function TimetableBuilderComponent_Conditional_25_Template_button_click_57_listener() { i0.ɵɵrestoreView(_r4); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.openTimetable()); });
    i0.ɵɵtext(58);
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(59, "svg", 23);
    i0.ɵɵelementEnd()()();
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(60, "section", 24)(61, "div")(62, "i");
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(63, "svg", 25);
    i0.ɵɵelementEnd();
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(64, "span")(65, "b");
    i0.ɵɵtext(66, "Master");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(67, "small");
    i0.ɵɵtext(68, "Select session, semester, group");
    i0.ɵɵelementEnd()()();
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(69, "svg", 23);
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(70, "div")(71, "i");
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(72, "svg", 26);
    i0.ɵɵelementEnd();
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(73, "span")(74, "b");
    i0.ɵɵtext(75, "Structure");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(76, "small");
    i0.ɵɵtext(77, "Select section, timetable, structure");
    i0.ɵɵelementEnd()()();
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(78, "svg", 23);
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(79, "div")(80, "i");
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(81, "svg", 27);
    i0.ɵɵelementEnd();
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(82, "span")(83, "b");
    i0.ɵɵtext(84, "Periods");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(85, "small");
    i0.ɵɵtext(86, "Configure teaching periods");
    i0.ɵɵelementEnd()()();
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(87, "svg", 23);
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(88, "div")(89, "i");
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(90, "svg", 28);
    i0.ɵɵelementEnd();
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(91, "span")(92, "b");
    i0.ɵɵtext(93, "Schedule");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(94, "small");
    i0.ɵɵtext(95, "Build weekly timetable");
    i0.ɵɵelementEnd()()()();
    i0.ɵɵelementStart(96, "div", 29);
    i0.ɵɵelement(97, "erp-admin-illustration", 30);
    i0.ɵɵelementStart(98, "strong");
    i0.ɵɵtext(99, "Your weekly timetable will appear here");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(100, "p");
    i0.ɵɵtext(101, "after selecting the academic scope.");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(10);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r1.session);
    i0.ɵɵadvance(3);
    i0.ɵɵrepeater(ctx_r1.master("academic"));
    i0.ɵɵadvance(5);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r1.semester);
    i0.ɵɵadvance();
    i0.ɵɵrepeater(ctx_r1.semesterOptions);
    i0.ɵɵadvance(5);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r1.groupId);
    i0.ɵɵadvance(3);
    i0.ɵɵrepeater(ctx_r1.availableGroups());
    i0.ɵɵadvance(5);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r1.sectionId);
    i0.ɵɵadvance(3);
    i0.ɵɵrepeater(ctx_r1.availableSections());
    i0.ɵɵadvance(5);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r1.timetableMasterId);
    i0.ɵɵadvance(3);
    i0.ɵɵrepeater(ctx_r1.availableTimetables());
    i0.ɵɵadvance(5);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r1.timetableStructureId);
    i0.ɵɵadvance(3);
    i0.ɵɵrepeater(ctx_r1.availableStructures());
    i0.ɵɵadvance(6);
    i0.ɵɵproperty("disabled", ctx_r1.loading() || !ctx_r1.scopeComplete());
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r1.loading() ? "Loading\u2026" : "Open timetable");
} }
function TimetableBuilderComponent_Conditional_26_Conditional_26_Template(rf, ctx) { if (rf & 1) {
    const _r12 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 38)(1, "strong");
    i0.ɵɵtext(2, "!");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "span");
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "button", 37);
    i0.ɵɵlistener("click", function TimetableBuilderComponent_Conditional_26_Conditional_26_Template_button_click_5_listener() { i0.ɵɵrestoreView(_r12); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.configurePeriods()); });
    i0.ɵɵtext(6, "Configure now");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate1("", ctx_r1.missingPeriodCount(), " periods still need timing configuration.");
} }
function TimetableBuilderComponent_Conditional_26_Conditional_47_For_7_Conditional_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "small");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const period_r13 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate2("", period_r13.startTime, " \u2013 ", period_r13.endTime);
} }
function TimetableBuilderComponent_Conditional_26_Conditional_47_For_7_Conditional_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "small");
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(1, "svg", 57);
    i0.ɵɵtext(2, "Not configured");
    i0.ɵɵelementEnd();
} }
function TimetableBuilderComponent_Conditional_26_Conditional_47_For_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "th")(1, "strong");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵconditionalCreate(3, TimetableBuilderComponent_Conditional_26_Conditional_47_For_7_Conditional_3_Template, 2, 2, "small")(4, TimetableBuilderComponent_Conditional_26_Conditional_47_For_7_Conditional_4_Template, 3, 0, "small");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const period_r13 = ctx.$implicit;
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1("Period ", period_r13.periodNumber);
    i0.ɵɵadvance();
    i0.ɵɵconditional(period_r13.isConfigured ? 3 : 4);
} }
function TimetableBuilderComponent_Conditional_26_Conditional_47_For_10_For_4_Conditional_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(0, "svg", 60);
} }
function TimetableBuilderComponent_Conditional_26_Conditional_47_For_10_For_4_Conditional_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 61);
    i0.ɵɵtext(1, "Break");
    i0.ɵɵelementEnd();
} }
function TimetableBuilderComponent_Conditional_26_Conditional_47_For_10_For_4_Conditional_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 62)(1, "strong");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "small");
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "small");
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    i0.ɵɵnextContext();
    const entry_r17 = i0.ɵɵreadContextLet(0);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(entry_r17.subjectName);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(entry_r17.facultyName);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(entry_r17.roomName);
} }
function TimetableBuilderComponent_Conditional_26_Conditional_47_For_10_For_4_Conditional_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "span", 63);
} }
function TimetableBuilderComponent_Conditional_26_Conditional_47_For_10_For_4_Template(rf, ctx) { if (rf & 1) {
    const _r14 = i0.ɵɵgetCurrentView();
    i0.ɵɵdeclareLet(0);
    i0.ɵɵelementStart(1, "td", 59);
    i0.ɵɵlistener("contextmenu", function TimetableBuilderComponent_Conditional_26_Conditional_47_For_10_For_4_Template_td_contextmenu_1_listener($event) { const period_r15 = i0.ɵɵrestoreView(_r14).$implicit; const day_r16 = i0.ɵɵnextContext().$implicit; const ctx_r1 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r1.showContext($event, day_r16, period_r15)); });
    i0.ɵɵconditionalCreate(2, TimetableBuilderComponent_Conditional_26_Conditional_47_For_10_For_4_Conditional_2_Template, 1, 0, ":svg:svg", 60)(3, TimetableBuilderComponent_Conditional_26_Conditional_47_For_10_For_4_Conditional_3_Template, 2, 0, "span", 61)(4, TimetableBuilderComponent_Conditional_26_Conditional_47_For_10_For_4_Conditional_4_Template, 7, 3, "div", 62)(5, TimetableBuilderComponent_Conditional_26_Conditional_47_For_10_For_4_Conditional_5_Template, 1, 0, "span", 63);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const period_r15 = ctx.$implicit;
    const day_r16 = i0.ɵɵnextContext().$implicit;
    const ctx_r1 = i0.ɵɵnextContext(3);
    const entry_r18 = i0.ɵɵstoreLet(ctx_r1.visibleEntryFor(day_r16, period_r15));
    i0.ɵɵadvance();
    i0.ɵɵclassProp("is-locked", !period_r15.isConfigured)("is-assigned", entry_r18);
    i0.ɵɵattribute("tabindex", period_r15.isConfigured && period_r15.periodType !== "break" ? 0 : null)("title", period_r15.isConfigured && period_r15.periodType !== "break" ? "Right-click to manage this period" : null);
    i0.ɵɵadvance();
    i0.ɵɵconditional(!period_r15.isConfigured ? 2 : period_r15.periodType === "break" ? 3 : entry_r18 ? 4 : !ctx_r1.assignedOnly() ? 5 : -1);
} }
function TimetableBuilderComponent_Conditional_26_Conditional_47_For_10_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "tr")(1, "th");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵrepeaterCreate(3, TimetableBuilderComponent_Conditional_26_Conditional_47_For_10_For_4_Template, 6, 8, "td", 58, _forTrack0);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const day_r16 = ctx.$implicit;
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(day_r16);
    i0.ɵɵadvance();
    i0.ɵɵrepeater(ctx_r1.periods());
} }
function TimetableBuilderComponent_Conditional_26_Conditional_47_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 52)(1, "table", 53)(2, "thead")(3, "tr")(4, "th");
    i0.ɵɵtext(5, "Day");
    i0.ɵɵelementEnd();
    i0.ɵɵrepeaterCreate(6, TimetableBuilderComponent_Conditional_26_Conditional_47_For_7_Template, 5, 2, "th", null, _forTrack0);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(8, "tbody");
    i0.ɵɵrepeaterCreate(9, TimetableBuilderComponent_Conditional_26_Conditional_47_For_10_Template, 5, 1, "tr", null, i0.ɵɵrepeaterTrackByIdentity);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(11, "footer", 54)(12, "span");
    i0.ɵɵelement(13, "i");
    i0.ɵɵtext(14, "Available slot");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(15, "span");
    i0.ɵɵelement(16, "i", 55);
    i0.ɵɵtext(17, "Timing required");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(18, "b");
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(19, "svg", 56);
    i0.ɵɵtext(20, "Scroll horizontally to view more periods");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(6);
    i0.ɵɵrepeater(ctx_r1.periods());
    i0.ɵɵadvance(3);
    i0.ɵɵrepeater(ctx_r1.workingDays());
} }
function TimetableBuilderComponent_Conditional_26_Conditional_48_For_18_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "tr")(1, "td");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "td");
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "td")(6, "strong");
    i0.ɵɵtext(7);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(8, "td");
    i0.ɵɵtext(9);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(10, "td");
    i0.ɵɵtext(11);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(12, "td")(13, "span", 65);
    i0.ɵɵtext(14);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const entry_r19 = ctx.$implicit;
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(entry_r19.day);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate2("", entry_r19.startTime, "\u2013", entry_r19.endTime);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(entry_r19.subjectName);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(entry_r19.facultyName);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(entry_r19.roomName || "\u2014");
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(entry_r19.status || "draft");
} }
function TimetableBuilderComponent_Conditional_26_Conditional_48_ForEmpty_19_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "tr")(1, "td", 66);
    i0.ɵɵtext(2, "No scheduled classes match this view.");
    i0.ɵɵelementEnd()();
} }
function TimetableBuilderComponent_Conditional_26_Conditional_48_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 50)(1, "table", 64)(2, "thead")(3, "tr")(4, "th");
    i0.ɵɵtext(5, "Day");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "th");
    i0.ɵɵtext(7, "Period");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "th");
    i0.ɵɵtext(9, "Subject");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(10, "th");
    i0.ɵɵtext(11, "Faculty");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(12, "th");
    i0.ɵɵtext(13, "Room or lab");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(14, "th");
    i0.ɵɵtext(15, "Status");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(16, "tbody");
    i0.ɵɵrepeaterCreate(17, TimetableBuilderComponent_Conditional_26_Conditional_48_For_18_Template, 15, 7, "tr", null, _forTrack0, false, TimetableBuilderComponent_Conditional_26_Conditional_48_ForEmpty_19_Template, 3, 0, "tr");
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(17);
    i0.ɵɵrepeater(ctx_r1.visibleEntries());
} }
function TimetableBuilderComponent_Conditional_26_Template(rf, ctx) { if (rf & 1) {
    const _r11 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "section", 31)(1, "span");
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(2, "svg", 32);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelement(4, "i");
    i0.ɵɵelementStart(5, "span");
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(6, "svg", 33);
    i0.ɵɵtext(7);
    i0.ɵɵelementEnd();
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelement(8, "i");
    i0.ɵɵelementStart(9, "span");
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(10, "svg", 34);
    i0.ɵɵtext(11);
    i0.ɵɵelementEnd();
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelement(12, "i");
    i0.ɵɵelementStart(13, "span");
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(14, "svg", 35);
    i0.ɵɵtext(15);
    i0.ɵɵelementEnd();
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelement(16, "i");
    i0.ɵɵelementStart(17, "span");
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(18, "svg", 32);
    i0.ɵɵtext(19);
    i0.ɵɵelementEnd();
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelement(20, "i");
    i0.ɵɵelementStart(21, "span");
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(22, "svg", 36);
    i0.ɵɵtext(23);
    i0.ɵɵelementEnd();
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(24, "button", 37);
    i0.ɵɵlistener("click", function TimetableBuilderComponent_Conditional_26_Template_button_click_24_listener() { i0.ɵɵrestoreView(_r11); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.gridOpen.set(false)); });
    i0.ɵɵtext(25, "Change");
    i0.ɵɵelementEnd()();
    i0.ɵɵconditionalCreate(26, TimetableBuilderComponent_Conditional_26_Conditional_26_Template, 7, 1, "div", 38);
    i0.ɵɵelementStart(27, "section", 39)(28, "header", 40)(29, "div", 41)(30, "button", 37);
    i0.ɵɵlistener("click", function TimetableBuilderComponent_Conditional_26_Template_button_click_30_listener() { i0.ɵɵrestoreView(_r11); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.viewMode.set("week")); });
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(31, "svg", 42);
    i0.ɵɵtext(32, "Week view");
    i0.ɵɵelementEnd();
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(33, "button", 37);
    i0.ɵɵlistener("click", function TimetableBuilderComponent_Conditional_26_Template_button_click_33_listener() { i0.ɵɵrestoreView(_r11); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.viewMode.set("list")); });
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(34, "svg", 43);
    i0.ɵɵtext(35, "List view ");
    i0.ɵɵelementEnd()();
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(36, "label", 44);
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(37, "svg", 45);
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(38, "input", 46);
    i0.ɵɵtwoWayListener("ngModelChange", function TimetableBuilderComponent_Conditional_26_Template_input_ngModelChange_38_listener($event) { i0.ɵɵrestoreView(_r11); const ctx_r1 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r1.scheduleSearch, $event) || (ctx_r1.scheduleSearch = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(39, "button", 10);
    i0.ɵɵlistener("click", function TimetableBuilderComponent_Conditional_26_Template_button_click_39_listener() { i0.ɵɵrestoreView(_r11); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.assignedOnly.set(!ctx_r1.assignedOnly())); });
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(40, "svg", 47);
    i0.ɵɵtext(41, "Filters ");
    i0.ɵɵelementEnd();
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(42, "button", 48);
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(43, "svg", 49);
    i0.ɵɵtext(44, "Fit");
    i0.ɵɵelementEnd();
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(45, "strong");
    i0.ɵɵtext(46);
    i0.ɵɵelementEnd()();
    i0.ɵɵconditionalCreate(47, TimetableBuilderComponent_Conditional_26_Conditional_47_Template, 21, 0)(48, TimetableBuilderComponent_Conditional_26_Conditional_48_Template, 20, 1, "div", 50);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(49, "footer", 51)(50, "span");
    i0.ɵɵelement(51, "i");
    i0.ɵɵtext(52, "Unsaved changes ");
    i0.ɵɵelementStart(53, "b");
    i0.ɵɵtext(54);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(55, "button", 22);
    i0.ɵɵlistener("click", function TimetableBuilderComponent_Conditional_26_Template_button_click_55_listener() { i0.ɵɵrestoreView(_r11); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.reviewOpen.set(true)); });
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(56, "svg", 14);
    i0.ɵɵtext(57, "Preview timetable ");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    let tmp_6_0;
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(ctx_r1.session);
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate1("Semester ", ctx_r1.semester);
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(ctx_r1.groupName());
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(ctx_r1.sectionName());
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(ctx_r1.timetableName());
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate((tmp_6_0 = ctx_r1.selectedStructure()) == null ? null : tmp_6_0.name);
    i0.ɵɵadvance(3);
    i0.ɵɵconditional(ctx_r1.missingPeriodCount() ? 26 : -1);
    i0.ɵɵadvance(4);
    i0.ɵɵclassProp("is-active", ctx_r1.viewMode() === "week");
    i0.ɵɵadvance(3);
    i0.ɵɵclassProp("is-active", ctx_r1.viewMode() === "list");
    i0.ɵɵadvance(5);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r1.scheduleSearch);
    i0.ɵɵadvance();
    i0.ɵɵclassProp("is-active", ctx_r1.assignedOnly());
    i0.ɵɵadvance(7);
    i0.ɵɵtextInterpolate1("", ctx_r1.visibleEntries().length, " classes scheduled");
    i0.ɵɵadvance();
    i0.ɵɵconditional(ctx_r1.viewMode() === "week" ? 47 : 48);
    i0.ɵɵadvance(7);
    i0.ɵɵtextInterpolate(ctx_r1.hasDraftChanges() ? ctx_r1.entries().length : 0);
    i0.ɵɵadvance();
    i0.ɵɵproperty("disabled", !ctx_r1.entries().length);
} }
function TimetableBuilderComponent_Conditional_27_Template(rf, ctx) { if (rf & 1) {
    const _r20 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 67);
    i0.ɵɵlistener("click", function TimetableBuilderComponent_Conditional_27_Template_div_click_0_listener($event) { return $event.stopPropagation(); })("keydown.escape", function TimetableBuilderComponent_Conditional_27_Template_div_keydown_escape_0_listener() { i0.ɵɵrestoreView(_r20); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.context.set(null)); });
    i0.ɵɵelementStart(1, "header")(2, "strong");
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "small");
    i0.ɵɵtext(5, "Choose one timetable action");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(6, "button", 68);
    i0.ɵɵlistener("click", function TimetableBuilderComponent_Conditional_27_Template_button_click_6_listener() { i0.ɵɵrestoreView(_r20); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.editSlot("subject")); });
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(7, "svg", 69);
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(8, "span")(9, "strong");
    i0.ɵɵtext(10, "Assign subject");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(11, "small");
    i0.ɵɵtext(12, "Select the subject only");
    i0.ɵɵelementEnd()();
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(13, "svg", 70);
    i0.ɵɵelementEnd();
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(14, "button", 68);
    i0.ɵɵlistener("click", function TimetableBuilderComponent_Conditional_27_Template_button_click_14_listener() { i0.ɵɵrestoreView(_r20); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.editSlot("faculty")); });
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(15, "svg", 71);
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(16, "span")(17, "strong");
    i0.ɵɵtext(18, "Assign teacher");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(19, "small");
    i0.ɵɵtext(20, "Select the teaching faculty");
    i0.ɵɵelementEnd()();
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(21, "svg", 70);
    i0.ɵɵelementEnd();
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(22, "button", 68);
    i0.ɵɵlistener("click", function TimetableBuilderComponent_Conditional_27_Template_button_click_22_listener() { i0.ɵɵrestoreView(_r20); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.editSlot("room")); });
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(23, "svg", 72);
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(24, "span")(25, "strong");
    i0.ɵɵtext(26, "Assign room or lab");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(27, "small");
    i0.ɵɵtext(28, "Select the teaching space");
    i0.ɵɵelementEnd()();
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(29, "svg", 70);
    i0.ɵɵelementEnd();
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(30, "button", 68);
    i0.ɵɵlistener("click", function TimetableBuilderComponent_Conditional_27_Template_button_click_30_listener() { i0.ɵɵrestoreView(_r20); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.openCombinedClass()); });
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(31, "svg", 71);
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(32, "span")(33, "strong");
    i0.ɵɵtext(34, "Combined class");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(35, "small");
    i0.ɵɵtext(36, "Select multiple groups, sections or sets");
    i0.ɵɵelementEnd()();
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(37, "svg", 70);
    i0.ɵɵelementEnd();
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(38, "button", 73);
    i0.ɵɵlistener("click", function TimetableBuilderComponent_Conditional_27_Template_button_click_38_listener() { i0.ɵɵrestoreView(_r20); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.copySlot()); });
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(39, "svg", 74);
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(40, "span")(41, "strong");
    i0.ɵɵtext(42, "Copy slot");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(43, "small");
    i0.ɵɵtext(44, "Copy all class details");
    i0.ɵɵelementEnd()();
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(45, "svg", 70);
    i0.ɵɵelementEnd();
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(46, "button", 73);
    i0.ɵɵlistener("click", function TimetableBuilderComponent_Conditional_27_Template_button_click_46_listener() { i0.ɵɵrestoreView(_r20); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.pasteSlot()); });
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(47, "svg", 74);
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(48, "span")(49, "strong");
    i0.ɵɵtext(50, "Paste slot");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(51, "small");
    i0.ɵɵtext(52, "Paste the copied class here");
    i0.ɵɵelementEnd()();
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(53, "svg", 70);
    i0.ɵɵelementEnd();
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(54, "button", 73);
    i0.ɵɵlistener("click", function TimetableBuilderComponent_Conditional_27_Template_button_click_54_listener() { i0.ɵɵrestoreView(_r20); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.mergeSlot()); });
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(55, "svg", 75);
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(56, "span")(57, "strong");
    i0.ɵɵtext(58, "Merge column");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(59, "small");
    i0.ɵɵtext(60, "Continue into the next period");
    i0.ɵɵelementEnd()();
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(61, "svg", 70);
    i0.ɵɵelementEnd();
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(62, "button", 73);
    i0.ɵɵlistener("click", function TimetableBuilderComponent_Conditional_27_Template_button_click_62_listener() { i0.ɵɵrestoreView(_r20); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.splitSlot()); });
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(63, "svg", 74);
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(64, "span")(65, "strong");
    i0.ɵɵtext(66, "Split column");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(67, "small");
    i0.ɵɵtext(68, "Return to one period");
    i0.ɵɵelementEnd()();
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(69, "svg", 70);
    i0.ɵɵelementEnd();
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(70, "button", 73);
    i0.ɵɵlistener("click", function TimetableBuilderComponent_Conditional_27_Template_button_click_70_listener() { i0.ɵɵrestoreView(_r20); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.removeAssignment()); });
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(71, "svg", 76);
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(72, "span")(73, "strong");
    i0.ɵɵtext(74, "Remove subject & faculty");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(75, "small");
    i0.ɵɵtext(76, "Keep the slot and room");
    i0.ɵɵelementEnd()();
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(77, "svg", 70);
    i0.ɵɵelementEnd();
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(78, "button", 73);
    i0.ɵɵlistener("click", function TimetableBuilderComponent_Conditional_27_Template_button_click_78_listener() { i0.ɵɵrestoreView(_r20); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.clearSlot()); });
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(79, "svg", 76);
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(80, "span")(81, "strong");
    i0.ɵɵtext(82, "Clear slot");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(83, "small");
    i0.ɵɵtext(84, "Delete all details from this period");
    i0.ɵɵelementEnd()();
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(85, "svg", 70);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const menu_r21 = ctx;
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵstyleProp("left", menu_r21.x, "px")("top", menu_r21.y, "px");
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(menu_r21.entry ? "Manage this period" : "Add to this period");
    i0.ɵɵadvance(35);
    i0.ɵɵproperty("disabled", !menu_r21.entry);
    i0.ɵɵadvance(8);
    i0.ɵɵproperty("disabled", !ctx_r1.copiedEntry() || !!menu_r21.entry);
    i0.ɵɵadvance(8);
    i0.ɵɵproperty("disabled", !menu_r21.entry);
    i0.ɵɵadvance(8);
    i0.ɵɵproperty("disabled", !menu_r21.entry || ctx_r1.span(menu_r21.entry) === 1);
    i0.ɵɵadvance(8);
    i0.ɵɵproperty("disabled", !menu_r21.entry);
    i0.ɵɵadvance(8);
    i0.ɵɵproperty("disabled", !menu_r21.entry);
} }
function TimetableBuilderComponent_Conditional_28_For_19_Template(rf, ctx) { if (rf & 1) {
    const _r23 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 37);
    i0.ɵɵlistener("click", function TimetableBuilderComponent_Conditional_28_For_19_Template_button_click_0_listener() { const item_r24 = i0.ɵɵrestoreView(_r23).$implicit; const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.chooseSavedTimetable(item_r24)); });
    i0.ɵɵelementStart(1, "span")(2, "strong");
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "small");
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(6, "b");
    i0.ɵɵtext(7);
    i0.ɵɵelementEnd();
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(8, "svg", 23);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r24 = ctx.$implicit;
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(item_r24.name);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate3("", item_r24.academicSession, " \u00B7 ", item_r24.universityName || "University", " \u00B7 ", item_r24.collegeName || "College");
    i0.ɵɵadvance();
    i0.ɵɵclassProp("is-active", item_r24.isActive);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(item_r24.isActive ? "Active" : "Inactive");
} }
function TimetableBuilderComponent_Conditional_28_ForEmpty_20_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 89);
    i0.ɵɵelement(1, "erp-admin-illustration", 92);
    i0.ɵɵelementStart(2, "strong");
    i0.ɵɵtext(3, "No timetables found");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "span");
    i0.ɵɵtext(5, "Try a different search term.");
    i0.ɵɵelementEnd()();
} }
function TimetableBuilderComponent_Conditional_28_Template(rf, ctx) { if (rf & 1) {
    const _r22 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 9)(1, "button", 77);
    i0.ɵɵlistener("click", function TimetableBuilderComponent_Conditional_28_Template_button_click_1_listener() { i0.ɵɵrestoreView(_r22); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.savedOpen.set(false)); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(2, "aside", 78)(3, "header", 79)(4, "span");
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(5, "svg", 80);
    i0.ɵɵelementEnd();
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(6, "div")(7, "h2", 81);
    i0.ɵɵtext(8, "Saved timetables");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(9, "p");
    i0.ɵɵtext(10);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(11, "button", 82);
    i0.ɵɵlistener("click", function TimetableBuilderComponent_Conditional_28_Template_button_click_11_listener() { i0.ɵɵrestoreView(_r22); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.savedOpen.set(false)); });
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(12, "svg", 83);
    i0.ɵɵelementEnd()();
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(13, "div", 84)(14, "label", 85);
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(15, "svg", 45);
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(16, "input", 86);
    i0.ɵɵtwoWayListener("ngModelChange", function TimetableBuilderComponent_Conditional_28_Template_input_ngModelChange_16_listener($event) { i0.ɵɵrestoreView(_r22); const ctx_r1 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r1.savedSearch, $event) || (ctx_r1.savedSearch = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵlistener("ngModelChange", function TimetableBuilderComponent_Conditional_28_Template_input_ngModelChange_16_listener() { i0.ɵɵrestoreView(_r22); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.savedPage.set(1)); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(17, "div", 87);
    i0.ɵɵrepeaterCreate(18, TimetableBuilderComponent_Conditional_28_For_19_Template, 9, 7, "button", 88, _forTrack0, false, TimetableBuilderComponent_Conditional_28_ForEmpty_20_Template, 6, 0, "div", 89);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(21, "footer", 90)(22, "span");
    i0.ɵɵtext(23);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(24, "div")(25, "button", 91);
    i0.ɵɵlistener("click", function TimetableBuilderComponent_Conditional_28_Template_button_click_25_listener() { i0.ɵɵrestoreView(_r22); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.savedPage.set(ctx_r1.savedPage() - 1)); });
    i0.ɵɵtext(26, " Previous");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(27, "b");
    i0.ɵɵtext(28);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(29, "button", 91);
    i0.ɵɵlistener("click", function TimetableBuilderComponent_Conditional_28_Template_button_click_29_listener() { i0.ɵɵrestoreView(_r22); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.savedPage.set(ctx_r1.savedPage() + 1)); });
    i0.ɵɵtext(30, " Next ");
    i0.ɵɵelementEnd()()()()()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(10);
    i0.ɵɵtextInterpolate1("Search and select from ", ctx_r1.timetableMasters().length, " timetable masters.");
    i0.ɵɵadvance(6);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r1.savedSearch);
    i0.ɵɵadvance(2);
    i0.ɵɵrepeater(ctx_r1.savedTimetablePage());
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate2("Showing ", ctx_r1.savedTimetablePage().length, " of ", ctx_r1.filteredSavedTimetables().length);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("disabled", ctx_r1.savedPage() === 1);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate2("", ctx_r1.savedPage(), " / ", ctx_r1.savedPageCount());
    i0.ɵɵadvance();
    i0.ɵɵproperty("disabled", ctx_r1.savedPage() === ctx_r1.savedPageCount());
} }
function TimetableBuilderComponent_Conditional_29_Conditional_22_For_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 19);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r27 = ctx.$implicit;
    i0.ɵɵproperty("value", item_r27._id);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate2("", item_r27.code, " \u00B7 ", item_r27.name);
} }
function TimetableBuilderComponent_Conditional_29_Conditional_22_Template(rf, ctx) { if (rf & 1) {
    const _r26 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "label")(1, "span");
    i0.ɵɵtext(2, "Subject *");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "div", 106);
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(4, "svg", 107);
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(5, "select", 17);
    i0.ɵɵtwoWayListener("ngModelChange", function TimetableBuilderComponent_Conditional_29_Conditional_22_Template_select_ngModelChange_5_listener($event) { i0.ɵɵrestoreView(_r26); const ctx_r1 = i0.ɵɵnextContext(2); i0.ɵɵtwoWayBindingSet(ctx_r1.subjectId, $event) || (ctx_r1.subjectId = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵlistener("ngModelChange", function TimetableBuilderComponent_Conditional_29_Conditional_22_Template_select_ngModelChange_5_listener() { i0.ɵɵrestoreView(_r26); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.subjectChanged()); });
    i0.ɵɵelementStart(6, "option", 18);
    i0.ɵɵtext(7, "Select subject");
    i0.ɵɵelementEnd();
    i0.ɵɵrepeaterCreate(8, TimetableBuilderComponent_Conditional_29_Conditional_22_For_9_Template, 2, 3, "option", 19, _forTrack0);
    i0.ɵɵelementEnd();
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(10, "svg", 104);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(5);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r1.subjectId);
    i0.ɵɵadvance(3);
    i0.ɵɵrepeater(ctx_r1.availableSubjects());
} }
function TimetableBuilderComponent_Conditional_29_Conditional_23_For_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 19);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r29 = ctx.$implicit;
    i0.ɵɵproperty("value", item_r29._id);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(item_r29.name);
} }
function TimetableBuilderComponent_Conditional_29_Conditional_23_Template(rf, ctx) { if (rf & 1) {
    const _r28 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "label")(1, "span");
    i0.ɵɵtext(2, "Faculty *");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "div", 106);
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(4, "svg", 107);
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(5, "select", 17);
    i0.ɵɵtwoWayListener("ngModelChange", function TimetableBuilderComponent_Conditional_29_Conditional_23_Template_select_ngModelChange_5_listener($event) { i0.ɵɵrestoreView(_r28); const ctx_r1 = i0.ɵɵnextContext(2); i0.ɵɵtwoWayBindingSet(ctx_r1.facultyId, $event) || (ctx_r1.facultyId = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementStart(6, "option", 18);
    i0.ɵɵtext(7, "Select faculty");
    i0.ɵɵelementEnd();
    i0.ɵɵrepeaterCreate(8, TimetableBuilderComponent_Conditional_29_Conditional_23_For_9_Template, 2, 2, "option", 19, _forTrack0);
    i0.ɵɵelementEnd();
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(10, "svg", 104);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(5);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r1.facultyId);
    i0.ɵɵadvance(3);
    i0.ɵɵrepeater(ctx_r1.availableFaculty());
} }
function TimetableBuilderComponent_Conditional_29_Conditional_24_For_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 19);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r31 = ctx.$implicit;
    i0.ɵɵproperty("value", item_r31._id);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate2(" ", item_r31.name, " \u00B7 capacity ", item_r31.capacity, " ");
} }
function TimetableBuilderComponent_Conditional_29_Conditional_24_Template(rf, ctx) { if (rf & 1) {
    const _r30 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "label")(1, "span");
    i0.ɵɵtext(2, "Room or lab *");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "div", 106);
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(4, "svg", 107);
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(5, "select", 17);
    i0.ɵɵtwoWayListener("ngModelChange", function TimetableBuilderComponent_Conditional_29_Conditional_24_Template_select_ngModelChange_5_listener($event) { i0.ɵɵrestoreView(_r30); const ctx_r1 = i0.ɵɵnextContext(2); i0.ɵɵtwoWayBindingSet(ctx_r1.roomId, $event) || (ctx_r1.roomId = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementStart(6, "option", 18);
    i0.ɵɵtext(7, "Select room or lab");
    i0.ɵɵelementEnd();
    i0.ɵɵrepeaterCreate(8, TimetableBuilderComponent_Conditional_29_Conditional_24_For_9_Template, 2, 3, "option", 19, _forTrack0);
    i0.ɵɵelementEnd();
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(10, "svg", 104);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(5);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r1.roomId);
    i0.ɵɵadvance(3);
    i0.ɵɵrepeater(ctx_r1.availableRooms());
} }
function TimetableBuilderComponent_Conditional_29_Conditional_28_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(1, "svg", 69);
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(2, "span");
    i0.ɵɵtext(3, "Subject");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "b");
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(4);
    i0.ɵɵclassProp("is-ready", ctx_r1.subjectId);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r1.subjectId ? "Selected" : "Pending");
} }
function TimetableBuilderComponent_Conditional_29_Conditional_29_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(1, "svg", 71);
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(2, "span");
    i0.ɵɵtext(3, "Faculty");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "b");
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(4);
    i0.ɵɵclassProp("is-ready", ctx_r1.facultyId);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r1.facultyId ? "Selected" : "Pending");
} }
function TimetableBuilderComponent_Conditional_29_Conditional_30_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(1, "svg", 72);
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(2, "span");
    i0.ɵɵtext(3, "Room or lab");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "b");
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(4);
    i0.ɵɵclassProp("is-ready", ctx_r1.roomId);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r1.roomId ? "Selected" : "Pending");
} }
function TimetableBuilderComponent_Conditional_29_Template(rf, ctx) { if (rf & 1) {
    const _r25 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 9)(1, "button", 93);
    i0.ɵɵlistener("click", function TimetableBuilderComponent_Conditional_29_Template_button_click_1_listener() { i0.ɵɵrestoreView(_r25); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.closeEditor()); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(2, "aside", 94)(3, "header", 79)(4, "span");
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(5, "svg", 80);
    i0.ɵɵelementEnd();
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(6, "div")(7, "h2", 95);
    i0.ɵɵtext(8);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(9, "p");
    i0.ɵɵtext(10);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(11, "button", 82);
    i0.ɵɵlistener("click", function TimetableBuilderComponent_Conditional_29_Template_button_click_11_listener() { i0.ɵɵrestoreView(_r25); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.closeEditor()); });
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(12, "svg", 83);
    i0.ɵɵelementEnd()();
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(13, "div", 96)(14, "div", 97);
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(15, "svg", 98);
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(16, "strong");
    i0.ɵɵtext(17);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(18, "i");
    i0.ɵɵtext(19, "\u00B7");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(20, "span");
    i0.ɵɵtext(21);
    i0.ɵɵelementEnd()();
    i0.ɵɵconditionalCreate(22, TimetableBuilderComponent_Conditional_29_Conditional_22_Template, 11, 1, "label");
    i0.ɵɵconditionalCreate(23, TimetableBuilderComponent_Conditional_29_Conditional_23_Template, 11, 1, "label");
    i0.ɵɵconditionalCreate(24, TimetableBuilderComponent_Conditional_29_Conditional_24_Template, 11, 1, "label");
    i0.ɵɵelementStart(25, "section", 99)(26, "h3");
    i0.ɵɵtext(27, "Allocation preview");
    i0.ɵɵelementEnd();
    i0.ɵɵconditionalCreate(28, TimetableBuilderComponent_Conditional_29_Conditional_28_Template, 6, 3, "div");
    i0.ɵɵconditionalCreate(29, TimetableBuilderComponent_Conditional_29_Conditional_29_Template, 6, 3, "div");
    i0.ɵɵconditionalCreate(30, TimetableBuilderComponent_Conditional_29_Conditional_30_Template, 6, 3, "div");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(31, "p", 100);
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(32, "svg", 101);
    i0.ɵɵtext(33, "Availability and timetable conflicts will be checked automatically. ");
    i0.ɵɵelementEnd();
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(34, "div", 102);
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(35, "svg", 103);
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(36, "strong");
    i0.ɵɵtext(37, "Validation results");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(38, "span");
    i0.ɵɵtext(39);
    i0.ɵɵelementEnd();
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(40, "svg", 104);
    i0.ɵɵelementEnd();
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(41, "footer", 105)(42, "button", 10);
    i0.ɵɵlistener("click", function TimetableBuilderComponent_Conditional_29_Template_button_click_42_listener() { i0.ɵɵrestoreView(_r25); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.closeEditor()); });
    i0.ɵɵtext(43, " Cancel");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(44, "button", 22);
    i0.ɵɵlistener("click", function TimetableBuilderComponent_Conditional_29_Template_button_click_44_listener() { i0.ɵɵrestoreView(_r25); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.saveSlot()); });
    i0.ɵɵtext(45);
    i0.ɵɵelementEnd()()()()();
} if (rf & 2) {
    let tmp_2_0;
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(8);
    i0.ɵɵtextInterpolate(ctx_r1.editorTitle());
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate4(" ", ctx_r1.activeDay(), " \u00B7 Period ", (tmp_2_0 = ctx_r1.activePeriod()) == null ? null : tmp_2_0.periodNumber, " \u00B7 ", (tmp_2_0 = ctx_r1.activePeriod()) == null ? null : tmp_2_0.startTime, "\u2013", (tmp_2_0 = ctx_r1.activePeriod()) == null ? null : tmp_2_0.endTime, " ");
    i0.ɵɵadvance(7);
    i0.ɵɵtextInterpolate(ctx_r1.groupName());
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(ctx_r1.sectionName());
    i0.ɵɵadvance();
    i0.ɵɵconditional(ctx_r1.editorMode() === "subject" ? 22 : -1);
    i0.ɵɵadvance();
    i0.ɵɵconditional(ctx_r1.editorMode() === "faculty" ? 23 : -1);
    i0.ɵɵadvance();
    i0.ɵɵconditional(ctx_r1.editorMode() === "room" ? 24 : -1);
    i0.ɵɵadvance(4);
    i0.ɵɵconditional(ctx_r1.editorMode() === "subject" ? 28 : -1);
    i0.ɵɵadvance();
    i0.ɵɵconditional(ctx_r1.editorMode() === "faculty" ? 29 : -1);
    i0.ɵɵadvance();
    i0.ɵɵconditional(ctx_r1.editorMode() === "room" ? 30 : -1);
    i0.ɵɵadvance(9);
    i0.ɵɵtextInterpolate(ctx_r1.editorValid() ? "Ready to add" : "Waiting for selections");
    i0.ɵɵadvance(5);
    i0.ɵɵproperty("disabled", ctx_r1.saving() || !ctx_r1.editorValid());
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r1.saving() ? "Saving\u2026" : ctx_r1.editingEntry() ? "Save assignment" : "Add to timetable", " ");
} }
function TimetableBuilderComponent_Conditional_30_For_17_Conditional_5_For_4_Template(rf, ctx) { if (rf & 1) {
    const _r35 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "label")(1, "input", 113);
    i0.ɵɵlistener("change", function TimetableBuilderComponent_Conditional_30_For_17_Conditional_5_For_4_Template_input_change_1_listener() { const section_r36 = i0.ɵɵrestoreView(_r35).$implicit; const group_r34 = i0.ɵɵnextContext(2).$implicit; const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.toggleAudienceSection(group_r34._id, section_r36._id)); });
    i0.ɵɵelementEnd();
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    let tmp_22_0;
    const section_r36 = ctx.$implicit;
    const group_r34 = i0.ɵɵnextContext(2).$implicit;
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵproperty("checked", (tmp_22_0 = ctx_r1.audienceFor(group_r34._id)) == null ? null : tmp_22_0.sectionIds == null ? null : tmp_22_0.sectionIds.includes(section_r36._id));
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1("", section_r36.name, " ");
} }
function TimetableBuilderComponent_Conditional_30_For_17_Conditional_5_Conditional_5_For_4_Template(rf, ctx) { if (rf & 1) {
    const _r37 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "label")(1, "input", 113);
    i0.ɵɵlistener("change", function TimetableBuilderComponent_Conditional_30_For_17_Conditional_5_Conditional_5_For_4_Template_input_change_1_listener() { const set_r38 = i0.ɵɵrestoreView(_r37).$implicit; const group_r34 = i0.ɵɵnextContext(3).$implicit; const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.toggleAudienceSet(group_r34._id, set_r38._id)); });
    i0.ɵɵelementEnd();
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    let tmp_23_0;
    const set_r38 = ctx.$implicit;
    const group_r34 = i0.ɵɵnextContext(3).$implicit;
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵproperty("checked", (tmp_23_0 = ctx_r1.audienceFor(group_r34._id)) == null ? null : tmp_23_0.setIds == null ? null : tmp_23_0.setIds.includes(set_r38._id));
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1("", set_r38.name, " ");
} }
function TimetableBuilderComponent_Conditional_30_For_17_Conditional_5_Conditional_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div")(1, "span");
    i0.ɵɵtext(2, "Sets (optional)");
    i0.ɵɵelementEnd();
    i0.ɵɵrepeaterCreate(3, TimetableBuilderComponent_Conditional_30_For_17_Conditional_5_Conditional_5_For_4_Template, 3, 2, "label", null, _forTrack0);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const group_r34 = i0.ɵɵnextContext(2).$implicit;
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(3);
    i0.ɵɵrepeater(ctx_r1.setsForAudience(group_r34._id));
} }
function TimetableBuilderComponent_Conditional_30_For_17_Conditional_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div")(1, "span");
    i0.ɵɵtext(2, "Sections *");
    i0.ɵɵelementEnd();
    i0.ɵɵrepeaterCreate(3, TimetableBuilderComponent_Conditional_30_For_17_Conditional_5_For_4_Template, 3, 2, "label", null, _forTrack0);
    i0.ɵɵelementEnd();
    i0.ɵɵconditionalCreate(5, TimetableBuilderComponent_Conditional_30_For_17_Conditional_5_Conditional_5_Template, 5, 0, "div");
} if (rf & 2) {
    const group_r34 = i0.ɵɵnextContext().$implicit;
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(3);
    i0.ɵɵrepeater(ctx_r1.sectionsForGroup(group_r34._id));
    i0.ɵɵadvance(2);
    i0.ɵɵconditional(ctx_r1.setsForAudience(group_r34._id).length ? 5 : -1);
} }
function TimetableBuilderComponent_Conditional_30_For_17_Template(rf, ctx) { if (rf & 1) {
    const _r33 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "section", 112)(1, "label")(2, "input", 113);
    i0.ɵɵlistener("change", function TimetableBuilderComponent_Conditional_30_For_17_Template_input_change_2_listener() { const group_r34 = i0.ɵɵrestoreView(_r33).$implicit; const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.toggleAudienceGroup(group_r34._id)); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "strong");
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd()();
    i0.ɵɵconditionalCreate(5, TimetableBuilderComponent_Conditional_30_For_17_Conditional_5_Template, 6, 1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const group_r34 = ctx.$implicit;
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("checked", !!ctx_r1.audienceFor(group_r34._id));
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(group_r34.name);
    i0.ɵɵadvance();
    i0.ɵɵconditional(ctx_r1.audienceFor(group_r34._id) ? 5 : -1);
} }
function TimetableBuilderComponent_Conditional_30_Template(rf, ctx) { if (rf & 1) {
    const _r32 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 9)(1, "button", 108);
    i0.ɵɵlistener("click", function TimetableBuilderComponent_Conditional_30_Template_button_click_1_listener() { i0.ɵɵrestoreView(_r32); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.combinedOpen.set(false)); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(2, "aside", 109)(3, "header", 79)(4, "span");
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(5, "svg", 110);
    i0.ɵɵelementEnd();
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(6, "div")(7, "h2");
    i0.ɵɵtext(8, "Configure combined class");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(9, "p");
    i0.ɵɵtext(10);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(11, "button", 82);
    i0.ɵɵlistener("click", function TimetableBuilderComponent_Conditional_30_Template_button_click_11_listener() { i0.ɵɵrestoreView(_r32); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.combinedOpen.set(false)); });
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(12, "svg", 83);
    i0.ɵɵelementEnd()();
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(13, "div", 111)(14, "p");
    i0.ɵɵtext(15, "Select every group and section attending together. Selecting sets is optional.");
    i0.ɵɵelementEnd();
    i0.ɵɵrepeaterCreate(16, TimetableBuilderComponent_Conditional_30_For_17_Template, 6, 3, "section", 112, _forTrack0);
    i0.ɵɵelementStart(18, "footer", 105)(19, "button", 10);
    i0.ɵɵlistener("click", function TimetableBuilderComponent_Conditional_30_Template_button_click_19_listener() { i0.ɵɵrestoreView(_r32); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.combinedOpen.set(false)); });
    i0.ɵɵtext(20, " Cancel ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(21, "button", 22);
    i0.ɵɵlistener("click", function TimetableBuilderComponent_Conditional_30_Template_button_click_21_listener() { i0.ɵɵrestoreView(_r32); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.saveCombinedClass()); });
    i0.ɵɵtext(22);
    i0.ɵɵelementEnd()()()()();
} if (rf & 2) {
    let tmp_1_0;
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(10);
    i0.ɵɵtextInterpolate2("", ctx_r1.activeDay(), " \u00B7 Period ", (tmp_1_0 = ctx_r1.activePeriod()) == null ? null : tmp_1_0.periodNumber);
    i0.ɵɵadvance(6);
    i0.ɵɵrepeater(ctx_r1.availableGroups());
    i0.ɵɵadvance(5);
    i0.ɵɵproperty("disabled", ctx_r1.saving());
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r1.saving() ? "Saving\u2026" : "Save combined class", " ");
} }
function apiMessage(error, fallback) {
    if (typeof error === 'object' && error && 'error' in error) {
        const value = error.error?.message;
        if (typeof value === 'string')
            return value;
    }
    return fallback;
}
export class TimetableBuilderComponent {
    api = inject(ApiService);
    router = inject(Router);
    loading = signal(true, ...(ngDevMode ? [{ debugName: "loading" }] : /* istanbul ignore next */ []));
    saving = signal(false, ...(ngDevMode ? [{ debugName: "saving" }] : /* istanbul ignore next */ []));
    gridOpen = signal(false, ...(ngDevMode ? [{ debugName: "gridOpen" }] : /* istanbul ignore next */ []));
    error = signal('', ...(ngDevMode ? [{ debugName: "error" }] : /* istanbul ignore next */ []));
    message = signal('', ...(ngDevMode ? [{ debugName: "message" }] : /* istanbul ignore next */ []));
    masters = signal([], ...(ngDevMode ? [{ debugName: "masters" }] : /* istanbul ignore next */ []));
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
    entries = signal([], ...(ngDevMode ? [{ debugName: "entries" }] : /* istanbul ignore next */ []));
    context = signal(null, ...(ngDevMode ? [{ debugName: "context" }] : /* istanbul ignore next */ []));
    editorOpen = signal(false, ...(ngDevMode ? [{ debugName: "editorOpen" }] : /* istanbul ignore next */ []));
    editorMode = signal('subject', ...(ngDevMode ? [{ debugName: "editorMode" }] : /* istanbul ignore next */ []));
    combinedOpen = signal(false, ...(ngDevMode ? [{ debugName: "combinedOpen" }] : /* istanbul ignore next */ []));
    copiedEntry = signal(null, ...(ngDevMode ? [{ debugName: "copiedEntry" }] : /* istanbul ignore next */ []));
    editingEntry = signal(null, ...(ngDevMode ? [{ debugName: "editingEntry" }] : /* istanbul ignore next */ []));
    activeDay = signal('', ...(ngDevMode ? [{ debugName: "activeDay" }] : /* istanbul ignore next */ []));
    activePeriod = signal(null, ...(ngDevMode ? [{ debugName: "activePeriod" }] : /* istanbul ignore next */ []));
    viewMode = signal('week', ...(ngDevMode ? [{ debugName: "viewMode" }] : /* istanbul ignore next */ []));
    assignedOnly = signal(false, ...(ngDevMode ? [{ debugName: "assignedOnly" }] : /* istanbul ignore next */ []));
    reviewOpen = signal(false, ...(ngDevMode ? [{ debugName: "reviewOpen" }] : /* istanbul ignore next */ []));
    savedOpen = signal(false, ...(ngDevMode ? [{ debugName: "savedOpen" }] : /* istanbul ignore next */ []));
    savedPage = signal(1, ...(ngDevMode ? [{ debugName: "savedPage" }] : /* istanbul ignore next */ []));
    session = '';
    semester = 1;
    groupId = '';
    sectionId = '';
    timetableMasterId = '';
    timetableStructureId = '';
    subjectId = '';
    facultyId = '';
    roomId = '';
    classType = 'lecture';
    scheduleSearch = '';
    savedSearch = '';
    audienceDraft = [];
    semesterOptions = Array.from({ length: 20 }, (_, index) => index + 1);
    constructor() {
        this.loadBootstrap();
    }
    closeContext() {
        this.context.set(null);
    }
    master(type) {
        return this.masters().filter((item) => item.typeSlug === type);
    }
    availableGroups() {
        const timetable = this.timetableMasters().find((item) => item._id === this.timetableMasterId);
        return this.groups().filter((item) => item.academicSession === this.session &&
            item.semester === Number(this.semester) &&
            (!timetable ||
                (item.universityId === timetable.universityId && item.collegeId === timetable.collegeId)));
    }
    availableSections() {
        return this.sections().filter((item) => item.academicSession === this.session &&
            item.semester === Number(this.semester) &&
            item.groupIds.includes(this.groupId));
    }
    availableTimetables() {
        const group = this.groups().find((item) => item._id === this.groupId);
        return this.timetableMasters().filter((item) => item.isActive &&
            item.academicSession === this.session &&
            (!group ||
                (item.universityId === group.universityId && item.collegeId === group.collegeId)));
    }
    availableStructures() {
        return this.timetableStructures().filter((item) => item.isActive && item.timetableMasterId === this.timetableMasterId);
    }
    selectedStructure() {
        return this.timetableStructures().find((item) => item._id === this.timetableStructureId);
    }
    periods() {
        return this.timetablePeriods()
            .filter((item) => item.timetableStructureId === this.timetableStructureId)
            .sort((left, right) => left.periodNumber - right.periodNumber);
    }
    configuredPeriods() {
        return this.periods().filter((item) => item.isConfigured);
    }
    missingPeriodCount = computed(() => this.periods().filter((item) => !item.isConfigured).length, ...(ngDevMode ? [{ debugName: "missingPeriodCount" }] : /* istanbul ignore next */ []));
    visibleEntries() {
        const query = this.scheduleSearch.trim().toLowerCase();
        if (!query)
            return this.entries();
        return this.entries().filter((entry) => [entry.subjectName, entry.subjectCode, entry.facultyName, entry.roomName, entry.day].some((value) => value?.toLowerCase().includes(query)));
    }
    scopeComplete() {
        return !!(this.session &&
            this.groupId &&
            this.sectionId &&
            this.timetableMasterId &&
            this.timetableStructureId);
    }
    groupName() {
        return this.groups().find((item) => item._id === this.groupId)?.name || 'Group';
    }
    sectionName() {
        return this.sections().find((item) => item._id === this.sectionId)?.name || 'Section';
    }
    timetableName() {
        return this.timetableMasters().find((item) => item._id === this.timetableMasterId)?.name || '';
    }
    filteredSavedTimetables() {
        const query = this.savedSearch.trim().toLowerCase();
        return this.timetableMasters().filter((item) => [item.name, item.code, item.academicSession, item.universityName, item.collegeName].some((value) => value?.toLowerCase().includes(query)));
    }
    savedTimetablePage() {
        const start = (this.savedPage() - 1) * 20;
        return this.filteredSavedTimetables().slice(start, start + 20);
    }
    savedPageCount() {
        return Math.max(1, Math.ceil(this.filteredSavedTimetables().length / 20));
    }
    chooseSavedTimetable(item) {
        this.session = item.academicSession;
        this.timetableMasterId = item._id;
        this.groupId = '';
        this.sectionId = '';
        this.timetableStructureId = '';
        this.savedOpen.set(false);
    }
    configurePeriods() {
        void this.router.navigate(['/admin/academics/timetable-periods'], {
            queryParams: {
                masterId: this.timetableMasterId || null,
                structureId: this.timetableStructureId || null,
            },
        });
    }
    workingDays() {
        return this.selectedStructure()?.workingDays || [];
    }
    availableSubjects() {
        const timetable = this.timetableMasters().find((item) => item._id === this.timetableMasterId);
        return this.subjects().filter((item) => item.isActive &&
            (!item.universityId || item.universityId === timetable?.universityId) &&
            (!item.collegeId || item.collegeId === timetable?.collegeId) &&
            (!item.academicSession || item.academicSession === this.session) &&
            (!item.semester || item.semester === Number(this.semester)));
    }
    availableFaculty() {
        const timetable = this.timetableMasters().find((item) => item._id === this.timetableMasterId);
        return this.faculties().filter((item) => item.isActive &&
            (!item.universityId || item.universityId === timetable?.universityId) &&
            (!item.collegeId || item.collegeId === timetable?.collegeId) &&
            (!this.subjectId || !item.subjectIds.length || item.subjectIds.includes(this.subjectId)));
    }
    availableRooms() {
        return this.rooms().filter((item) => item.isActive &&
            (!this.subjectId || !item.subjectIds.length || item.subjectIds.includes(this.subjectId)));
    }
    resetAfter(level) {
        this.gridOpen.set(false);
        if (level === 'session' || level === 'semester')
            this.groupId = '';
        if (['session', 'semester', 'group'].includes(level))
            this.sectionId = '';
        if (['session', 'semester', 'group', 'section'].includes(level))
            this.timetableMasterId = '';
        if (level !== 'master')
            this.timetableStructureId = '';
        else
            this.timetableStructureId = '';
    }
    loadBootstrap() {
        this.loading.set(true);
        this.api.academicBootstrap().subscribe({
            next: (data) => {
                this.masters.set(data.masters);
                this.groups.set(data.groups);
                this.sections.set(data.sections);
                this.sets.set(data.sets);
                this.subjects.set(data.subjects);
                this.faculties.set(data.faculties);
                this.rooms.set(data.rooms);
                this.groupSubjects.set(data.groupSubjects);
                this.timetableMasters.set(data.timetableMasters);
                this.timetableStructures.set(data.timetableStructures);
                this.timetablePeriods.set(data.timetablePeriods);
                this.loading.set(false);
            },
            error: (error) => {
                this.error.set(apiMessage(error, 'Could not load timetable setup.'));
                this.loading.set(false);
            },
        });
    }
    openTimetable() {
        if (!this.session ||
            !this.groupId ||
            !this.sectionId ||
            !this.timetableMasterId ||
            !this.timetableStructureId) {
            this.error.set('Select the session, semester, group, section, timetable and structure.');
            return;
        }
        if (!this.configuredPeriods().length) {
            this.error.set('Configure the timetable periods before opening the timetable.');
            return;
        }
        this.error.set('');
        this.loading.set(true);
        this.api
            .academicRecords('timetables', {
            academicSession: this.session,
            semester: this.semester,
            groupId: this.groupId,
            sectionId: this.sectionId,
            timetableMasterId: this.timetableMasterId,
            timetableStructureId: this.timetableStructureId,
        })
            .subscribe({
            next: ({ items }) => {
                this.entries.set(items);
                this.gridOpen.set(true);
                this.loading.set(false);
            },
            error: (error) => {
                this.error.set(apiMessage(error, 'Could not open the timetable.'));
                this.loading.set(false);
            },
        });
    }
    entryFor(day, period) {
        return (this.entries().find((entry) => {
            const ids = entry.timetablePeriodIds?.length
                ? entry.timetablePeriodIds
                : [entry.timetablePeriodId];
            return entry.day === day && ids[0] === period._id;
        }) || null);
    }
    visibleEntryFor(day, period) {
        const entry = this.entryFor(day, period);
        if (!entry)
            return null;
        return this.visibleEntries().some((item) => item._id === entry._id) ? entry : null;
    }
    covered(day, period) {
        return this.entries().some((entry) => {
            const ids = entry.timetablePeriodIds?.length
                ? entry.timetablePeriodIds
                : [entry.timetablePeriodId];
            return entry.day === day && ids.slice(1).includes(period._id);
        });
    }
    span(entry) {
        return Math.max(1, entry?.timetablePeriodIds?.length || 1);
    }
    hasDraftChanges() {
        return this.entries().some((entry) => entry.status !== 'published');
    }
    showContext(event, day, period) {
        event.preventDefault();
        event.stopPropagation();
        if (period.periodType === 'break')
            return;
        const menuHeight = Math.min(680, window.innerHeight - 24);
        this.context.set({
            x: Math.max(12, Math.min(event.clientX, window.innerWidth - 340)),
            y: Math.max(12, Math.min(event.clientY, window.innerHeight - menuHeight - 12)),
            day,
            period,
            entry: this.entryFor(day, period),
        });
    }
    editSlot(mode) {
        const context = this.context();
        if (!context)
            return;
        this.editingEntry.set(context.entry);
        this.activeDay.set(context.day);
        this.activePeriod.set(context.period);
        this.subjectId = context.entry?.subjectId || '';
        this.facultyId = context.entry?.facultyId || '';
        this.roomId = context.entry?.roomId || '';
        this.classType = context.entry?.classType || 'lecture';
        this.editorMode.set(mode);
        this.editorOpen.set(true);
        this.context.set(null);
    }
    editorTitle() {
        if (this.editorMode() === 'subject')
            return 'Assign subject';
        if (this.editorMode() === 'faculty')
            return 'Assign faculty';
        if (this.editorMode() === 'room')
            return 'Assign room or lab';
        return 'Assign timetable detail';
    }
    editorValid() {
        if (this.editorMode() === 'subject')
            return !!this.subjectId;
        if (this.editorMode() === 'faculty')
            return !!this.facultyId;
        if (this.editorMode() === 'room')
            return !!this.roomId;
        return false;
    }
    closeEditor() {
        this.editorOpen.set(false);
        this.editingEntry.set(null);
    }
    openCombinedClass() {
        const context = this.context();
        if (!context)
            return;
        this.editingEntry.set(context.entry);
        this.activeDay.set(context.day);
        this.activePeriod.set(context.period);
        this.audienceDraft = context.entry?.audiences?.length
            ? context.entry.audiences.map((item) => ({
                groupId: item.groupId,
                sectionIds: [...item.sectionIds],
                setIds: [...(item.setIds || [])],
            }))
            : [{ groupId: this.groupId, sectionIds: [this.sectionId], setIds: [] }];
        this.combinedOpen.set(true);
        this.context.set(null);
    }
    audienceFor(groupId) {
        return this.audienceDraft.find((item) => item.groupId === groupId);
    }
    sectionsForGroup(groupId) {
        return this.sections().filter((item) => item.academicSession === this.session &&
            item.semester === Number(this.semester) &&
            item.groupIds.includes(groupId));
    }
    toggleAudienceGroup(groupId) {
        const existing = this.audienceFor(groupId);
        if (existing)
            this.audienceDraft = this.audienceDraft.filter((item) => item !== existing);
        else
            this.audienceDraft = [...this.audienceDraft, { groupId, sectionIds: [], setIds: [] }];
    }
    toggleAudienceSection(groupId, sectionId) {
        const audience = this.audienceFor(groupId);
        if (!audience)
            return;
        if (audience.sectionIds.includes(sectionId)) {
            const removedSetIds = new Set(this.sets()
                .filter((item) => item.groupId === groupId && item.sectionId === sectionId)
                .map((item) => item._id));
            audience.sectionIds = audience.sectionIds.filter((value) => value !== sectionId);
            audience.setIds = audience.setIds.filter((value) => !removedSetIds.has(value));
        }
        else {
            audience.sectionIds = [...audience.sectionIds, sectionId];
        }
        this.audienceDraft = [...this.audienceDraft];
    }
    setsForAudience(groupId) {
        const audience = this.audienceFor(groupId);
        return this.sets().filter((item) => item.isActive &&
            item.groupId === groupId &&
            !!audience?.sectionIds.includes(item.sectionId) &&
            item.academicSession === this.session &&
            item.semester === Number(this.semester));
    }
    toggleAudienceSet(groupId, setId) {
        const audience = this.audienceFor(groupId);
        if (!audience)
            return;
        audience.setIds = audience.setIds.includes(setId)
            ? audience.setIds.filter((value) => value !== setId)
            : [...audience.setIds, setId];
        this.audienceDraft = [...this.audienceDraft];
    }
    saveCombinedClass() {
        const validAudiences = this.audienceDraft.filter((item) => item.sectionIds.length);
        const period = this.activePeriod();
        if (!period || !validAudiences.length) {
            this.error.set('Select at least one group and section for the combined class.');
            return;
        }
        this.saving.set(true);
        const current = this.editingEntry();
        const request = current
            ? this.api.timetableAction(current._id, 'update', {
                audiences: validAudiences,
            })
            : this.api.createAcademicRecord('timetables', {
                academicSession: this.session,
                semester: Number(this.semester),
                timetableMasterId: this.timetableMasterId,
                timetableStructureId: this.timetableStructureId,
                timetablePeriodId: period._id,
                groupId: validAudiences[0].groupId,
                sectionId: validAudiences[0].sectionIds[0],
                audiences: validAudiences,
                setIds: [],
                subjectId: '',
                facultyId: '',
                roomId: '',
                day: this.activeDay(),
                classType: 'lecture',
                isActive: true,
            });
        request.subscribe({
            next: () => {
                this.message.set('Combined class audience saved.');
                this.saving.set(false);
                this.combinedOpen.set(false);
                this.openTimetable();
            },
            error: (error) => {
                this.error.set(apiMessage(error, 'Could not save the combined class.'));
                this.saving.set(false);
            },
        });
    }
    subjectChanged() {
        if (!this.availableFaculty().some((item) => item._id === this.facultyId))
            this.facultyId = '';
        if (!this.availableRooms().some((item) => item._id === this.roomId))
            this.roomId = '';
    }
    saveSlot() {
        const period = this.activePeriod();
        const mode = this.editorMode();
        if (!period ||
            (mode === 'subject' && !this.subjectId) ||
            (mode === 'faculty' && !this.facultyId) ||
            (mode === 'room' && !this.roomId)) {
            this.error.set('Select the requested timetable assignment.');
            return;
        }
        this.saving.set(true);
        this.error.set('');
        const current = this.editingEntry();
        const changes = mode === 'subject'
            ? { subjectId: this.subjectId }
            : mode === 'faculty'
                ? { facultyId: this.facultyId }
                : { roomId: this.roomId, classType: this.classType };
        const request = current
            ? this.api.timetableAction(current._id, 'update', changes)
            : this.api.createAcademicRecord('timetables', {
                academicSession: this.session,
                semester: Number(this.semester),
                timetableMasterId: this.timetableMasterId,
                timetableStructureId: this.timetableStructureId,
                timetablePeriodId: period._id,
                groupId: this.groupId,
                sectionId: this.sectionId,
                setIds: [],
                subjectId: this.subjectId,
                facultyId: this.facultyId,
                roomId: this.roomId,
                day: this.activeDay(),
                classType: this.classType,
                effectiveFrom: null,
                effectiveTo: null,
                isActive: true,
            });
        request.subscribe({
            next: () => {
                this.message.set(current ? 'Timetable slot updated.' : 'Timetable slot assigned.');
                this.saving.set(false);
                this.closeEditor();
                this.openTimetable();
            },
            error: (error) => {
                this.error.set(apiMessage(error, 'Could not save this timetable slot.'));
                this.saving.set(false);
            },
        });
    }
    copySlot() {
        const entry = this.context()?.entry;
        if (!entry)
            return;
        this.copiedEntry.set(entry);
        this.context.set(null);
        this.message.set('Timetable slot copied. Right-click another slot to paste it.');
    }
    pasteSlot() {
        const source = this.copiedEntry();
        const target = this.context();
        if (!source || !target || target.entry)
            return;
        this.context.set(null);
        this.saving.set(true);
        this.api
            .createAcademicRecord('timetables', {
            academicSession: this.session,
            semester: Number(this.semester),
            timetableMasterId: this.timetableMasterId,
            timetableStructureId: this.timetableStructureId,
            timetablePeriodId: target.period._id,
            groupId: source.groupId,
            sectionId: source.sectionId,
            audiences: source.audiences || [],
            setIds: source.setIds || [],
            subjectId: source.subjectId || '',
            facultyId: source.facultyId || '',
            roomId: source.roomId || '',
            day: target.day,
            classType: source.classType || 'lecture',
            isActive: true,
        })
            .subscribe({
            next: () => {
                this.message.set('Copied timetable details pasted.');
                this.saving.set(false);
                this.openTimetable();
            },
            error: (error) => {
                this.error.set(apiMessage(error, 'Could not paste this timetable slot.'));
                this.saving.set(false);
            },
        });
    }
    mergeSlot() {
        const entry = this.context()?.entry;
        if (!entry)
            return;
        this.runAction(this.api.timetableAction(entry._id, 'merge'), 'Columns merged.');
    }
    splitSlot() {
        const entry = this.context()?.entry;
        if (!entry)
            return;
        this.runAction(this.api.timetableAction(entry._id, 'split'), 'Columns split.');
    }
    removeAssignment() {
        const entry = this.context()?.entry;
        if (!entry || !confirm('Remove the subject and teacher from this slot?'))
            return;
        this.runAction(this.api.timetableAction(entry._id, 'remove-assignment'), 'Subject and teacher removed.');
    }
    clearSlot() {
        const entry = this.context()?.entry;
        if (!entry || !confirm('Remove the subject, faculty and room from this slot?'))
            return;
        this.runAction(this.api.deleteAcademicRecord('timetables', entry._id), 'Slot cleared.');
    }
    publish() {
        if (!this.entries().length || !confirm('Publish this timetable to the assigned students?'))
            return;
        this.saving.set(true);
        this.error.set('');
        this.api
            .publishTimetable({
            academicSession: this.session,
            semester: Number(this.semester),
            groupId: this.groupId,
            sectionId: this.sectionId,
            timetableMasterId: this.timetableMasterId,
            timetableStructureId: this.timetableStructureId,
        })
            .subscribe({
            next: (result) => {
                this.message.set(`${result.published} timetable slot(s) published to students.`);
                this.saving.set(false);
                this.openTimetable();
            },
            error: (error) => {
                this.error.set(apiMessage(error, 'Could not publish this timetable.'));
                this.saving.set(false);
            },
        });
    }
    runAction(request, message) {
        this.context.set(null);
        this.saving.set(true);
        request.subscribe({
            next: () => {
                this.message.set(message);
                this.saving.set(false);
                this.openTimetable();
            },
            error: (error) => {
                this.error.set(apiMessage(error, 'Timetable action failed.'));
                this.saving.set(false);
            },
        });
    }
    static ɵfac = function TimetableBuilderComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || TimetableBuilderComponent)(); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: TimetableBuilderComponent, selectors: [["erp-timetable-builder"]], hostBindings: function TimetableBuilderComponent_HostBindings(rf, ctx) { if (rf & 1) {
            i0.ɵɵlistener("click", function TimetableBuilderComponent_click_HostBindingHandler() { return ctx.closeContext(); }, i0.ɵɵresolveDocument);
        } }, decls: 31, vars: 18, consts: [["variant", "compact", 3, "title", "description"], ["page-actions", "", 1, "tt-page-actions"], ["type", "button", 1, "erp-button", "erp-button--secondary"], ["aria-label", "Timetable creation progress", 1, "tt-steps"], [1, "is-complete"], ["lucideCheck", "", "size", "15"], ["role", "alert", 1, "erp-alert", "erp-alert--danger"], [1, "erp-alert", "erp-alert--success"], ["role", "menu", "tabindex", "-1", 1, "tt-slot-menu", 3, "left", "top"], [1, "erp-drawer-layer"], ["type", "button", 1, "erp-button", "erp-button--secondary", 3, "click"], ["lucideSettings", "", "size", "17"], ["type", "button", 1, "erp-button", "erp-button--primary", 3, "click"], ["lucideSave", "", "size", "17"], ["lucideEye", "", "size", "17"], [1, "erp-card", "tt-scope-card"], [1, "tt-scope-grid"], [1, "erp-control", 3, "ngModelChange", "ngModel"], ["value", ""], [3, "value"], [3, "ngValue"], ["lucideInfo", "", "size", "18"], ["type", "button", 1, "erp-button", "erp-button--primary", 3, "click", "disabled"], ["lucideArrowRight", "", "size", "18"], ["aria-label", "Timetable setup stages", 1, "tt-journey"], ["lucideBookOpen", "", "size", "20"], ["lucideLandmark", "", "size", "20"], ["lucideCalendarDays", "", "size", "20"], ["lucideList", "", "size", "20"], [1, "tt-empty-state"], ["kind", "taskSchedule", "size", "compact"], [1, "tt-scope-strip"], ["lucideCalendarDays", "", "size", "19"], ["lucideGraduationCap", "", "size", "19"], ["lucideUsersRound", "", "size", "19"], ["lucideBookOpen", "", "size", "19"], ["lucideLandmark", "", "size", "19"], ["type", "button", 3, "click"], [1, "tt-warning"], [1, "erp-card", "tt-workspace"], [1, "tt-toolbar"], ["role", "group", "aria-label", "Schedule view", 1, "tt-view-switch"], ["lucideCalendarDays", "", "size", "17"], ["lucideList", "", "size", "17"], [1, "tt-search"], ["lucideSearch", "", "size", "19"], ["placeholder", "Search classes, rooms, or faculty", 3, "ngModelChange", "ngModel"], ["lucideFilter", "", "size", "17"], ["type", "button", 1, "erp-button", "erp-button--secondary", "tt-fit"], ["lucideMaximize2", "", "size", "17"], [1, "tt-list-scroll"], [1, "tt-action-bar"], [1, "tt-grid-scroll"], [1, "tt-grid"], [1, "tt-grid-legend"], [1, "is-locked"], ["lucideArrowLeftRight", "", "size", "19"], ["lucideLock", "", "size", "12"], [3, "is-locked", "is-assigned"], [3, "contextmenu"], ["lucideLock", "", "size", "15"], [1, "tt-break"], [1, "tt-class"], ["aria-hidden", "true", 1, "tt-empty-slot"], [1, "tt-list"], [1, "tt-status"], ["colspan", "6", 1, "tt-list-empty"], ["role", "menu", "tabindex", "-1", 1, "tt-slot-menu", 3, "click", "keydown.escape"], ["type", "button", "role", "menuitem", 3, "click"], ["lucideBookOpen", "", "size", "18"], ["lucideArrowRight", "", "size", "16"], ["lucideUsersRound", "", "size", "18"], ["lucideLandmark", "", "size", "18"], ["type", "button", "role", "menuitem", 3, "click", "disabled"], ["lucideArrowLeftRight", "", "size", "18"], ["lucideMaximize2", "", "size", "18"], ["lucideX", "", "size", "18"], ["type", "button", "aria-label", "Close saved timetables", 1, "erp-drawer-backdrop", 3, "click"], ["role", "dialog", "aria-modal", "true", "aria-labelledby", "tt-saved-title", 1, "erp-drawer", "tt-saved-drawer"], [1, "erp-drawer__header", "tt-drawer-head"], ["lucideCalendarDays", "", "size", "25"], ["id", "tt-saved-title"], ["type", "button", "aria-label", "Close", 3, "click"], ["lucideX", "", "size", "22"], [1, "erp-drawer__body", "tt-saved-body"], [1, "tt-search", "tt-saved-search"], ["placeholder", "Search name, session, university or college", 3, "ngModelChange", "ngModel"], [1, "tt-saved-list"], ["type", "button"], [1, "tt-saved-empty"], [1, "tt-saved-pagination"], ["type", "button", 3, "click", "disabled"], ["kind", "noResults", "size", "compact"], ["type", "button", "aria-label", "Close add class", 1, "erp-drawer-backdrop", 3, "click"], ["role", "dialog", "aria-modal", "true", "aria-labelledby", "tt-class-title", 1, "erp-drawer", "tt-class-drawer"], ["id", "tt-class-title"], [1, "erp-drawer__body", "tt-drawer-body"], [1, "tt-audience"], ["lucideUsersRound", "", "size", "20"], [1, "tt-allocation-preview"], [1, "tt-auto-check"], ["lucideInfo", "", "size", "17"], [1, "tt-validation"], ["lucideList", "", "size", "18"], ["lucideChevronDown", "", "size", "17"], [1, "erp-drawer__footer"], [1, "tt-select-wrap"], ["lucideSearch", "", "size", "18"], ["type", "button", "aria-label", "Close combined class", 1, "erp-drawer-backdrop", 3, "click"], ["role", "dialog", "aria-modal", "true", 1, "erp-drawer", "tt-class-drawer"], ["lucideUsersRound", "", "size", "25"], [1, "erp-drawer__body", "tt-drawer-body", "tt-combined-body"], [1, "tt-audience-option"], ["type", "checkbox", 3, "change", "checked"]], template: function TimetableBuilderComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "erp-admin-page", 0)(1, "div", 1);
            i0.ɵɵconditionalCreate(2, TimetableBuilderComponent_Conditional_2_Template, 6, 0)(3, TimetableBuilderComponent_Conditional_3_Template, 3, 0, "button", 2);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(4, "nav", 3)(5, "span", 4)(6, "i");
            i0.ɵɵconditionalCreate(7, TimetableBuilderComponent_Conditional_7_Template, 1, 0, ":svg:svg", 5)(8, TimetableBuilderComponent_Conditional_8_Template, 1, 0);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(9, "b");
            i0.ɵɵtext(10);
            i0.ɵɵelementEnd()();
            i0.ɵɵelement(11, "em");
            i0.ɵɵelementStart(12, "span")(13, "i");
            i0.ɵɵtext(14, "2");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(15, "b");
            i0.ɵɵtext(16, "Build schedule");
            i0.ɵɵelementEnd()();
            i0.ɵɵelement(17, "em");
            i0.ɵɵelementStart(18, "span")(19, "i");
            i0.ɵɵtext(20, "3");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(21, "b");
            i0.ɵɵtext(22, "Review");
            i0.ɵɵelementEnd()()();
            i0.ɵɵconditionalCreate(23, TimetableBuilderComponent_Conditional_23_Template, 2, 1, "div", 6);
            i0.ɵɵconditionalCreate(24, TimetableBuilderComponent_Conditional_24_Template, 2, 1, "div", 7);
            i0.ɵɵconditionalCreate(25, TimetableBuilderComponent_Conditional_25_Template, 102, 8)(26, TimetableBuilderComponent_Conditional_26_Template, 58, 18);
            i0.ɵɵconditionalCreate(27, TimetableBuilderComponent_Conditional_27_Template, 86, 11, "div", 8);
            i0.ɵɵconditionalCreate(28, TimetableBuilderComponent_Conditional_28_Template, 31, 9, "div", 9);
            i0.ɵɵconditionalCreate(29, TimetableBuilderComponent_Conditional_29_Template, 46, 16, "div", 9);
            i0.ɵɵconditionalCreate(30, TimetableBuilderComponent_Conditional_30_Template, 23, 4, "div", 9);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            let tmp_11_0;
            i0.ɵɵproperty("title", ctx.gridOpen() ? "Weekly timetable" : "Create timetable")("description", ctx.gridOpen() ? "Build and review the weekly schedule for this academic section." : "Build the weekly schedule for an academic section.");
            i0.ɵɵadvance(2);
            i0.ɵɵconditional(ctx.gridOpen() ? 2 : 3);
            i0.ɵɵadvance(3);
            i0.ɵɵclassProp("is-current", !ctx.gridOpen());
            i0.ɵɵadvance(2);
            i0.ɵɵconditional(ctx.gridOpen() ? 7 : 8);
            i0.ɵɵadvance(3);
            i0.ɵɵtextInterpolate(ctx.gridOpen() ? "Scope completed" : "Scope");
            i0.ɵɵadvance(2);
            i0.ɵɵclassProp("is-current", ctx.gridOpen() && !ctx.reviewOpen());
            i0.ɵɵadvance(6);
            i0.ɵɵclassProp("is-current", ctx.reviewOpen());
            i0.ɵɵadvance(5);
            i0.ɵɵconditional(ctx.error() ? 23 : -1);
            i0.ɵɵadvance();
            i0.ɵɵconditional(ctx.message() ? 24 : -1);
            i0.ɵɵadvance();
            i0.ɵɵconditional(!ctx.gridOpen() ? 25 : 26);
            i0.ɵɵadvance(2);
            i0.ɵɵconditional((tmp_11_0 = ctx.context()) ? 27 : -1, tmp_11_0);
            i0.ɵɵadvance();
            i0.ɵɵconditional(ctx.savedOpen() ? 28 : -1);
            i0.ɵɵadvance();
            i0.ɵɵconditional(ctx.editorOpen() ? 29 : -1);
            i0.ɵɵadvance();
            i0.ɵɵconditional(ctx.combinedOpen() ? 30 : -1);
        } }, dependencies: [CommonModule,
            FormsModule, i1.NgSelectOption, i1.ɵNgSelectMultipleOption, i1.DefaultValueAccessor, i1.SelectControlValueAccessor, i1.NgControlStatus, i1.NgModel, AdminPageComponent,
            AdminIllustrationComponent,
            LucideArrowLeftRight,
            LucideArrowRight,
            LucideBookOpen,
            LucideCalendarDays,
            LucideCheck,
            LucideChevronDown,
            LucideEye,
            LucideFilter,
            LucideGraduationCap,
            LucideInfo,
            LucideLandmark,
            LucideList,
            LucideLock,
            LucideMaximize2,
            LucideSave,
            LucideSearch,
            LucideSettings,
            LucideUsersRound,
            LucideX], styles: ["[_nghost-%COMP%] {\n  display: block;\n  min-width: 0;\n}\n\n.tt-combined-body[_ngcontent-%COMP%]    > p[_ngcontent-%COMP%] {\n  margin: 0;\n  color: var(--erp-text-muted);\n}\n\n.tt-audience-option[_ngcontent-%COMP%] {\n  padding: 0.9rem;\n  border: 1px solid var(--erp-border-subtle);\n  border-radius: 0.65rem;\n  background: var(--erp-surface-detail-soft);\n}\n\n.tt-audience-option[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.45rem;\n  margin: 0.25rem 0.8rem 0.25rem 0;\n}\n\n.tt-audience-option[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  margin: 0.65rem 0 0 1.45rem;\n}\n\n.tt-audience-option[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  display: block;\n  margin-bottom: 0.25rem;\n  color: var(--erp-text-body);\n  font-size: 0.78rem;\n  font-weight: 700;\n}"], changeDetection: 0 });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(TimetableBuilderComponent, [{
        type: Component,
        args: [{ selector: 'erp-timetable-builder', imports: [
                    CommonModule,
                    FormsModule,
                    AdminPageComponent,
                    AdminIllustrationComponent,
                    LucideArrowLeftRight,
                    LucideArrowRight,
                    LucideBookOpen,
                    LucideCalendarDays,
                    LucideCheck,
                    LucideChevronDown,
                    LucideEye,
                    LucideFilter,
                    LucideGraduationCap,
                    LucideInfo,
                    LucideLandmark,
                    LucideList,
                    LucideLock,
                    LucideMaximize2,
                    LucideSave,
                    LucideSearch,
                    LucideSettings,
                    LucideUsersRound,
                    LucideX,
                ], changeDetection: ChangeDetectionStrategy.OnPush, template: "<erp-admin-page\n  [title]=\"gridOpen() ? 'Weekly timetable' : 'Create timetable'\"\n  [description]=\"\n    gridOpen()\n      ? 'Build and review the weekly schedule for this academic section.'\n      : 'Build the weekly schedule for an academic section.'\n  \"\n  variant=\"compact\"\n>\n  <div page-actions class=\"tt-page-actions\">\n    @if (gridOpen()) {\n      <button class=\"erp-button erp-button--secondary\" type=\"button\" (click)=\"configurePeriods()\">\n        <svg lucideSettings size=\"17\"></svg>Configure periods\n      </button>\n      <button\n        class=\"erp-button erp-button--primary\"\n        type=\"button\"\n        (click)=\"message.set('Draft saved.')\"\n      >\n        <svg lucideSave size=\"17\"></svg>Save draft\n      </button>\n    } @else {\n      <button class=\"erp-button erp-button--secondary\" type=\"button\" (click)=\"savedOpen.set(true)\">\n        <svg lucideEye size=\"17\"></svg>View saved timetables\n      </button>\n    }\n  </div>\n\n  <nav class=\"tt-steps\" aria-label=\"Timetable creation progress\">\n    <span class=\"is-complete\" [class.is-current]=\"!gridOpen()\"\n      ><i>\n        @if (gridOpen()) {\n          <svg lucideCheck size=\"15\"></svg>\n        } @else {\n          1\n        }</i\n      ><b>{{ gridOpen() ? 'Scope completed' : 'Scope' }}</b></span\n    >\n    <em></em>\n    <span [class.is-current]=\"gridOpen() && !reviewOpen()\"><i>2</i><b>Build schedule</b></span>\n    <em></em>\n    <span [class.is-current]=\"reviewOpen()\"><i>3</i><b>Review</b></span>\n  </nav>\n\n  @if (error()) {\n    <div class=\"erp-alert erp-alert--danger\" role=\"alert\">{{ error() }}</div>\n  }\n  @if (message()) {\n    <div class=\"erp-alert erp-alert--success\">{{ message() }}</div>\n  }\n\n  @if (!gridOpen()) {\n    <section class=\"erp-card tt-scope-card\">\n      <header>\n        <h2>Open timetable workspace</h2>\n        <p>Select the academic scope and configured timetable structure.</p>\n      </header>\n      <div class=\"tt-scope-grid\">\n        <label\n          ><span>Academic session *</span\n          ><select\n            class=\"erp-control\"\n            [(ngModel)]=\"session\"\n            (ngModelChange)=\"resetAfter('session')\"\n          >\n            <option value=\"\">Select session</option>\n            @for (item of master('academic'); track item._id) {\n              <option [value]=\"item.name\">{{ item.name }}</option>\n            }\n          </select></label\n        >\n        <label\n          ><span>Semester *</span\n          ><select\n            class=\"erp-control\"\n            [(ngModel)]=\"semester\"\n            (ngModelChange)=\"resetAfter('semester')\"\n          >\n            @for (item of semesterOptions; track item) {\n              <option [ngValue]=\"item\">Semester {{ item }}</option>\n            }\n          </select></label\n        >\n        <label\n          ><span>Group *</span\n          ><select class=\"erp-control\" [(ngModel)]=\"groupId\" (ngModelChange)=\"resetAfter('group')\">\n            <option value=\"\">Select group</option>\n            @for (item of availableGroups(); track item._id) {\n              <option [value]=\"item._id\">{{ item.name }}</option>\n            }\n          </select></label\n        >\n        <label\n          ><span>Section *</span\n          ><select\n            class=\"erp-control\"\n            [(ngModel)]=\"sectionId\"\n            (ngModelChange)=\"resetAfter('section')\"\n          >\n            <option value=\"\">Select section</option>\n            @for (item of availableSections(); track item._id) {\n              <option [value]=\"item._id\">{{ item.name }}</option>\n            }\n          </select></label\n        >\n        <label\n          ><span>Timetable *</span\n          ><select\n            class=\"erp-control\"\n            [(ngModel)]=\"timetableMasterId\"\n            (ngModelChange)=\"resetAfter('master')\"\n          >\n            <option value=\"\">Select timetable</option>\n            @for (item of availableTimetables(); track item._id) {\n              <option [value]=\"item._id\">{{ item.name }}</option>\n            }\n          </select></label\n        >\n        <label\n          ><span>Structure *</span\n          ><select class=\"erp-control\" [(ngModel)]=\"timetableStructureId\">\n            <option value=\"\">Select structure</option>\n            @for (item of availableStructures(); track item._id) {\n              <option [value]=\"item._id\">{{ item.name }}</option>\n            }\n          </select></label\n        >\n      </div>\n      <footer>\n        <span><svg lucideInfo size=\"18\"></svg>Select all fields to continue.</span>\n        <button\n          class=\"erp-button erp-button--primary\"\n          type=\"button\"\n          [disabled]=\"loading() || !scopeComplete()\"\n          (click)=\"openTimetable()\"\n        >\n          {{ loading() ? 'Loading\u2026' : 'Open timetable' }}<svg lucideArrowRight size=\"18\"></svg>\n        </button>\n      </footer>\n    </section>\n\n    <section class=\"tt-journey\" aria-label=\"Timetable setup stages\">\n      <div>\n        <i><svg lucideBookOpen size=\"20\"></svg></i\n        ><span><b>Master</b><small>Select session, semester, group</small></span>\n      </div>\n      <svg lucideArrowRight size=\"18\"></svg>\n      <div>\n        <i><svg lucideLandmark size=\"20\"></svg></i\n        ><span><b>Structure</b><small>Select section, timetable, structure</small></span>\n      </div>\n      <svg lucideArrowRight size=\"18\"></svg>\n      <div>\n        <i><svg lucideCalendarDays size=\"20\"></svg></i\n        ><span><b>Periods</b><small>Configure teaching periods</small></span>\n      </div>\n      <svg lucideArrowRight size=\"18\"></svg>\n      <div>\n        <i><svg lucideList size=\"20\"></svg></i\n        ><span><b>Schedule</b><small>Build weekly timetable</small></span>\n      </div>\n    </section>\n    <div class=\"tt-empty-state\">\n      <erp-admin-illustration kind=\"taskSchedule\" size=\"compact\" />\n      <strong>Your weekly timetable will appear here</strong>\n      <p>after selecting the academic scope.</p>\n    </div>\n  } @else {\n    <section class=\"tt-scope-strip\">\n      <span><svg lucideCalendarDays size=\"19\"></svg>{{ session }}</span\n      ><i></i><span><svg lucideGraduationCap size=\"19\"></svg>Semester {{ semester }}</span\n      ><i></i><span><svg lucideUsersRound size=\"19\"></svg>{{ groupName() }}</span\n      ><i></i><span><svg lucideBookOpen size=\"19\"></svg>{{ sectionName() }}</span\n      ><i></i><span><svg lucideCalendarDays size=\"19\"></svg>{{ timetableName() }}</span\n      ><i></i><span><svg lucideLandmark size=\"19\"></svg>{{ selectedStructure()?.name }}</span\n      ><button type=\"button\" (click)=\"gridOpen.set(false)\">Change</button>\n    </section>\n    @if (missingPeriodCount()) {\n      <div class=\"tt-warning\">\n        <strong>!</strong\n        ><span>{{ missingPeriodCount() }} periods still need timing configuration.</span\n        ><button type=\"button\" (click)=\"configurePeriods()\">Configure now</button>\n      </div>\n    }\n\n    <section class=\"erp-card tt-workspace\">\n      <header class=\"tt-toolbar\">\n        <div class=\"tt-view-switch\" role=\"group\" aria-label=\"Schedule view\">\n          <button\n            type=\"button\"\n            [class.is-active]=\"viewMode() === 'week'\"\n            (click)=\"viewMode.set('week')\"\n          >\n            <svg lucideCalendarDays size=\"17\"></svg>Week view</button\n          ><button\n            type=\"button\"\n            [class.is-active]=\"viewMode() === 'list'\"\n            (click)=\"viewMode.set('list')\"\n          >\n            <svg lucideList size=\"17\"></svg>List view\n          </button>\n        </div>\n        <label class=\"tt-search\"\n          ><svg lucideSearch size=\"19\"></svg\n          ><input [(ngModel)]=\"scheduleSearch\" placeholder=\"Search classes, rooms, or faculty\"\n        /></label>\n        <button\n          class=\"erp-button erp-button--secondary\"\n          type=\"button\"\n          [class.is-active]=\"assignedOnly()\"\n          (click)=\"assignedOnly.set(!assignedOnly())\"\n        >\n          <svg lucideFilter size=\"17\"></svg>Filters\n        </button>\n        <button class=\"erp-button erp-button--secondary tt-fit\" type=\"button\">\n          <svg lucideMaximize2 size=\"17\"></svg>Fit</button\n        ><strong>{{ visibleEntries().length }} classes scheduled</strong>\n      </header>\n\n      @if (viewMode() === 'week') {\n        <div class=\"tt-grid-scroll\">\n          <table class=\"tt-grid\">\n            <thead>\n              <tr>\n                <th>Day</th>\n                @for (period of periods(); track period._id) {\n                  <th>\n                    <strong>Period {{ period.periodNumber }}</strong>\n                    @if (period.isConfigured) {\n                      <small>{{ period.startTime }} \u2013 {{ period.endTime }}</small>\n                    } @else {\n                      <small><svg lucideLock size=\"12\"></svg>Not configured</small>\n                    }\n                  </th>\n                }\n              </tr>\n            </thead>\n            <tbody>\n              @for (day of workingDays(); track day) {\n                <tr>\n                  <th>{{ day }}</th>\n                  @for (period of periods(); track period._id) {\n                    @let entry = visibleEntryFor(day, period);\n                    <td\n                      [class.is-locked]=\"!period.isConfigured\"\n                      [class.is-assigned]=\"entry\"\n                      [attr.tabindex]=\"\n                        period.isConfigured && period.periodType !== 'break' ? 0 : null\n                      \"\n                      [attr.title]=\"\n                        period.isConfigured && period.periodType !== 'break'\n                          ? 'Right-click to manage this period'\n                          : null\n                      \"\n                      (contextmenu)=\"showContext($event, day, period)\"\n                    >\n                      @if (!period.isConfigured) {\n                        <svg lucideLock size=\"15\"></svg>\n                      } @else if (period.periodType === 'break') {\n                        <span class=\"tt-break\">Break</span>\n                      } @else if (entry) {\n                        <div class=\"tt-class\">\n                          <strong>{{ entry.subjectName }}</strong\n                          ><small>{{ entry.facultyName }}</small\n                          ><small>{{ entry.roomName }}</small>\n                        </div>\n                      } @else if (!assignedOnly()) {\n                        <span class=\"tt-empty-slot\" aria-hidden=\"true\"></span>\n                      }\n                    </td>\n                  }\n                </tr>\n              }\n            </tbody>\n          </table>\n        </div>\n        <footer class=\"tt-grid-legend\">\n          <span><i></i>Available slot</span><span><i class=\"is-locked\"></i>Timing required</span\n          ><b><svg lucideArrowLeftRight size=\"19\"></svg>Scroll horizontally to view more periods</b>\n        </footer>\n      } @else {\n        <div class=\"tt-list-scroll\">\n          <table class=\"tt-list\">\n            <thead>\n              <tr>\n                <th>Day</th>\n                <th>Period</th>\n                <th>Subject</th>\n                <th>Faculty</th>\n                <th>Room or lab</th>\n                <th>Status</th>\n              </tr>\n            </thead>\n            <tbody>\n              @for (entry of visibleEntries(); track entry._id) {\n                <tr>\n                  <td>{{ entry.day }}</td>\n                  <td>{{ entry.startTime }}\u2013{{ entry.endTime }}</td>\n                  <td>\n                    <strong>{{ entry.subjectName }}</strong>\n                  </td>\n                  <td>{{ entry.facultyName }}</td>\n                  <td>{{ entry.roomName || '\u2014' }}</td>\n                  <td>\n                    <span class=\"tt-status\">{{ entry.status || 'draft' }}</span>\n                  </td>\n                </tr>\n              } @empty {\n                <tr>\n                  <td colspan=\"6\" class=\"tt-list-empty\">No scheduled classes match this view.</td>\n                </tr>\n              }\n            </tbody>\n          </table>\n        </div>\n      }\n    </section>\n    <footer class=\"tt-action-bar\">\n      <span\n        ><i></i>Unsaved changes <b>{{ hasDraftChanges() ? entries().length : 0 }}</b></span\n      ><button\n        class=\"erp-button erp-button--primary\"\n        type=\"button\"\n        [disabled]=\"!entries().length\"\n        (click)=\"reviewOpen.set(true)\"\n      >\n        <svg lucideEye size=\"17\"></svg>Preview timetable\n      </button>\n    </footer>\n  }\n\n  @if (context(); as menu) {\n    <div\n      class=\"tt-slot-menu\"\n      role=\"menu\"\n      tabindex=\"-1\"\n      [style.left.px]=\"menu.x\"\n      [style.top.px]=\"menu.y\"\n      (click)=\"$event.stopPropagation()\"\n      (keydown.escape)=\"context.set(null)\"\n    >\n      <header>\n        <strong>{{ menu.entry ? 'Manage this period' : 'Add to this period' }}</strong\n        ><small>Choose one timetable action</small>\n      </header>\n      <button type=\"button\" role=\"menuitem\" (click)=\"editSlot('subject')\">\n        <svg lucideBookOpen size=\"18\"></svg\n        ><span><strong>Assign subject</strong><small>Select the subject only</small></span\n        ><svg lucideArrowRight size=\"16\"></svg>\n      </button>\n      <button type=\"button\" role=\"menuitem\" (click)=\"editSlot('faculty')\">\n        <svg lucideUsersRound size=\"18\"></svg\n        ><span><strong>Assign teacher</strong><small>Select the teaching faculty</small></span\n        ><svg lucideArrowRight size=\"16\"></svg>\n      </button>\n      <button type=\"button\" role=\"menuitem\" (click)=\"editSlot('room')\">\n        <svg lucideLandmark size=\"18\"></svg\n        ><span><strong>Assign room or lab</strong><small>Select the teaching space</small></span\n        ><svg lucideArrowRight size=\"16\"></svg>\n      </button>\n      <button type=\"button\" role=\"menuitem\" (click)=\"openCombinedClass()\">\n        <svg lucideUsersRound size=\"18\"></svg\n        ><span\n          ><strong>Combined class</strong\n          ><small>Select multiple groups, sections or sets</small></span\n        ><svg lucideArrowRight size=\"16\"></svg>\n      </button>\n      <button type=\"button\" role=\"menuitem\" [disabled]=\"!menu.entry\" (click)=\"copySlot()\">\n        <svg lucideArrowLeftRight size=\"18\"></svg\n        ><span><strong>Copy slot</strong><small>Copy all class details</small></span\n        ><svg lucideArrowRight size=\"16\"></svg>\n      </button>\n      <button\n        type=\"button\"\n        role=\"menuitem\"\n        [disabled]=\"!copiedEntry() || !!menu.entry\"\n        (click)=\"pasteSlot()\"\n      >\n        <svg lucideArrowLeftRight size=\"18\"></svg\n        ><span><strong>Paste slot</strong><small>Paste the copied class here</small></span\n        ><svg lucideArrowRight size=\"16\"></svg>\n      </button>\n      <button type=\"button\" role=\"menuitem\" [disabled]=\"!menu.entry\" (click)=\"mergeSlot()\">\n        <svg lucideMaximize2 size=\"18\"></svg\n        ><span><strong>Merge column</strong><small>Continue into the next period</small></span\n        ><svg lucideArrowRight size=\"16\"></svg>\n      </button>\n      <button\n        type=\"button\"\n        role=\"menuitem\"\n        [disabled]=\"!menu.entry || span(menu.entry) === 1\"\n        (click)=\"splitSlot()\"\n      >\n        <svg lucideArrowLeftRight size=\"18\"></svg\n        ><span><strong>Split column</strong><small>Return to one period</small></span\n        ><svg lucideArrowRight size=\"16\"></svg>\n      </button>\n      <button type=\"button\" role=\"menuitem\" [disabled]=\"!menu.entry\" (click)=\"removeAssignment()\">\n        <svg lucideX size=\"18\"></svg\n        ><span><strong>Remove subject & faculty</strong><small>Keep the slot and room</small></span\n        ><svg lucideArrowRight size=\"16\"></svg>\n      </button>\n      <button type=\"button\" role=\"menuitem\" [disabled]=\"!menu.entry\" (click)=\"clearSlot()\">\n        <svg lucideX size=\"18\"></svg\n        ><span><strong>Clear slot</strong><small>Delete all details from this period</small></span\n        ><svg lucideArrowRight size=\"16\"></svg>\n      </button>\n    </div>\n  }\n\n  @if (savedOpen()) {\n    <div class=\"erp-drawer-layer\">\n      <button\n        class=\"erp-drawer-backdrop\"\n        type=\"button\"\n        aria-label=\"Close saved timetables\"\n        (click)=\"savedOpen.set(false)\"\n      ></button>\n      <aside\n        class=\"erp-drawer tt-saved-drawer\"\n        role=\"dialog\"\n        aria-modal=\"true\"\n        aria-labelledby=\"tt-saved-title\"\n      >\n        <header class=\"erp-drawer__header tt-drawer-head\">\n          <span><svg lucideCalendarDays size=\"25\"></svg></span>\n          <div>\n            <h2 id=\"tt-saved-title\">Saved timetables</h2>\n            <p>Search and select from {{ timetableMasters().length }} timetable masters.</p>\n          </div>\n          <button type=\"button\" aria-label=\"Close\" (click)=\"savedOpen.set(false)\">\n            <svg lucideX size=\"22\"></svg>\n          </button>\n        </header>\n        <div class=\"erp-drawer__body tt-saved-body\">\n          <label class=\"tt-search tt-saved-search\"\n            ><svg lucideSearch size=\"19\"></svg\n            ><input\n              [(ngModel)]=\"savedSearch\"\n              (ngModelChange)=\"savedPage.set(1)\"\n              placeholder=\"Search name, session, university or college\"\n          /></label>\n          <div class=\"tt-saved-list\">\n            @for (item of savedTimetablePage(); track item._id) {\n              <button type=\"button\" (click)=\"chooseSavedTimetable(item)\">\n                <span\n                  ><strong>{{ item.name }}</strong\n                  ><small\n                    >{{ item.academicSession }} \u00B7 {{ item.universityName || 'University' }} \u00B7\n                    {{ item.collegeName || 'College' }}</small\n                  ></span\n                >\n                <b [class.is-active]=\"item.isActive\">{{ item.isActive ? 'Active' : 'Inactive' }}</b>\n                <svg lucideArrowRight size=\"18\"></svg>\n              </button>\n            } @empty {\n              <div class=\"tt-saved-empty\">\n                <erp-admin-illustration kind=\"noResults\" size=\"compact\" /><strong\n                  >No timetables found</strong\n                ><span>Try a different search term.</span>\n              </div>\n            }\n          </div>\n          <footer class=\"tt-saved-pagination\">\n            <span\n              >Showing {{ savedTimetablePage().length }} of\n              {{ filteredSavedTimetables().length }}</span\n            >\n            <div>\n              <button\n                type=\"button\"\n                [disabled]=\"savedPage() === 1\"\n                (click)=\"savedPage.set(savedPage() - 1)\"\n              >\n                Previous</button\n              ><b>{{ savedPage() }} / {{ savedPageCount() }}</b\n              ><button\n                type=\"button\"\n                [disabled]=\"savedPage() === savedPageCount()\"\n                (click)=\"savedPage.set(savedPage() + 1)\"\n              >\n                Next\n              </button>\n            </div>\n          </footer>\n        </div>\n      </aside>\n    </div>\n  }\n\n  @if (editorOpen()) {\n    <div class=\"erp-drawer-layer\">\n      <button\n        class=\"erp-drawer-backdrop\"\n        type=\"button\"\n        aria-label=\"Close add class\"\n        (click)=\"closeEditor()\"\n      ></button>\n      <aside\n        class=\"erp-drawer tt-class-drawer\"\n        role=\"dialog\"\n        aria-modal=\"true\"\n        aria-labelledby=\"tt-class-title\"\n      >\n        <header class=\"erp-drawer__header tt-drawer-head\">\n          <span><svg lucideCalendarDays size=\"25\"></svg></span>\n          <div>\n            <h2 id=\"tt-class-title\">{{ editorTitle() }}</h2>\n            <p>\n              {{ activeDay() }} \u00B7 Period {{ activePeriod()?.periodNumber }} \u00B7\n              {{ activePeriod()?.startTime }}\u2013{{ activePeriod()?.endTime }}\n            </p>\n          </div>\n          <button type=\"button\" aria-label=\"Close\" (click)=\"closeEditor()\">\n            <svg lucideX size=\"22\"></svg>\n          </button>\n        </header>\n        <div class=\"erp-drawer__body tt-drawer-body\">\n          <div class=\"tt-audience\">\n            <svg lucideUsersRound size=\"20\"></svg><strong>{{ groupName() }}</strong\n            ><i>\u00B7</i><span>{{ sectionName() }}</span>\n          </div>\n          @if (editorMode() === 'subject') {\n            <label\n              ><span>Subject *</span>\n              <div class=\"tt-select-wrap\">\n                <svg lucideSearch size=\"18\"></svg\n                ><select\n                  class=\"erp-control\"\n                  [(ngModel)]=\"subjectId\"\n                  (ngModelChange)=\"subjectChanged()\"\n                >\n                  <option value=\"\">Select subject</option>\n                  @for (item of availableSubjects(); track item._id) {\n                    <option [value]=\"item._id\">{{ item.code }} \u00B7 {{ item.name }}</option>\n                  }</select\n                ><svg lucideChevronDown size=\"17\"></svg></div\n            ></label>\n          }\n          @if (editorMode() === 'faculty') {\n            <label\n              ><span>Faculty *</span>\n              <div class=\"tt-select-wrap\">\n                <svg lucideSearch size=\"18\"></svg\n                ><select class=\"erp-control\" [(ngModel)]=\"facultyId\">\n                  <option value=\"\">Select faculty</option>\n                  @for (item of availableFaculty(); track item._id) {\n                    <option [value]=\"item._id\">{{ item.name }}</option>\n                  }</select\n                ><svg lucideChevronDown size=\"17\"></svg></div\n            ></label>\n          }\n          @if (editorMode() === 'room') {\n            <label\n              ><span>Room or lab *</span>\n              <div class=\"tt-select-wrap\">\n                <svg lucideSearch size=\"18\"></svg\n                ><select class=\"erp-control\" [(ngModel)]=\"roomId\">\n                  <option value=\"\">Select room or lab</option>\n                  @for (item of availableRooms(); track item._id) {\n                    <option [value]=\"item._id\">\n                      {{ item.name }} \u00B7 capacity {{ item.capacity }}\n                    </option>\n                  }</select\n                ><svg lucideChevronDown size=\"17\"></svg></div\n            ></label>\n          }\n          <section class=\"tt-allocation-preview\">\n            <h3>Allocation preview</h3>\n            @if (editorMode() === 'subject') {\n              <div>\n                <svg lucideBookOpen size=\"18\"></svg><span>Subject</span\n                ><b [class.is-ready]=\"subjectId\">{{ subjectId ? 'Selected' : 'Pending' }}</b>\n              </div>\n            }\n            @if (editorMode() === 'faculty') {\n              <div>\n                <svg lucideUsersRound size=\"18\"></svg><span>Faculty</span\n                ><b [class.is-ready]=\"facultyId\">{{ facultyId ? 'Selected' : 'Pending' }}</b>\n              </div>\n            }\n            @if (editorMode() === 'room') {\n              <div>\n                <svg lucideLandmark size=\"18\"></svg><span>Room or lab</span\n                ><b [class.is-ready]=\"roomId\">{{ roomId ? 'Selected' : 'Pending' }}</b>\n              </div>\n            }\n          </section>\n          <p class=\"tt-auto-check\">\n            <svg lucideInfo size=\"17\"></svg>Availability and timetable conflicts will be checked\n            automatically.\n          </p>\n          <div class=\"tt-validation\">\n            <svg lucideList size=\"18\"></svg><strong>Validation results</strong\n            ><span>{{ editorValid() ? 'Ready to add' : 'Waiting for selections' }}</span\n            ><svg lucideChevronDown size=\"17\"></svg>\n          </div>\n          <footer class=\"erp-drawer__footer\">\n            <button class=\"erp-button erp-button--secondary\" type=\"button\" (click)=\"closeEditor()\">\n              Cancel</button\n            ><button\n              class=\"erp-button erp-button--primary\"\n              type=\"button\"\n              [disabled]=\"saving() || !editorValid()\"\n              (click)=\"saveSlot()\"\n            >\n              {{ saving() ? 'Saving\u2026' : editingEntry() ? 'Save assignment' : 'Add to timetable' }}\n            </button>\n          </footer>\n        </div>\n      </aside>\n    </div>\n  }\n\n  @if (combinedOpen()) {\n    <div class=\"erp-drawer-layer\">\n      <button\n        class=\"erp-drawer-backdrop\"\n        type=\"button\"\n        aria-label=\"Close combined class\"\n        (click)=\"combinedOpen.set(false)\"\n      ></button>\n      <aside class=\"erp-drawer tt-class-drawer\" role=\"dialog\" aria-modal=\"true\">\n        <header class=\"erp-drawer__header tt-drawer-head\">\n          <span><svg lucideUsersRound size=\"25\"></svg></span>\n          <div>\n            <h2>Configure combined class</h2>\n            <p>{{ activeDay() }} \u00B7 Period {{ activePeriod()?.periodNumber }}</p>\n          </div>\n          <button type=\"button\" aria-label=\"Close\" (click)=\"combinedOpen.set(false)\">\n            <svg lucideX size=\"22\"></svg>\n          </button>\n        </header>\n        <div class=\"erp-drawer__body tt-drawer-body tt-combined-body\">\n          <p>Select every group and section attending together. Selecting sets is optional.</p>\n          @for (group of availableGroups(); track group._id) {\n            <section class=\"tt-audience-option\">\n              <label>\n                <input\n                  type=\"checkbox\"\n                  [checked]=\"!!audienceFor(group._id)\"\n                  (change)=\"toggleAudienceGroup(group._id)\"\n                />\n                <strong>{{ group.name }}</strong>\n              </label>\n              @if (audienceFor(group._id)) {\n                <div>\n                  <span>Sections *</span>\n                  @for (section of sectionsForGroup(group._id); track section._id) {\n                    <label>\n                      <input\n                        type=\"checkbox\"\n                        [checked]=\"audienceFor(group._id)?.sectionIds?.includes(section._id)\"\n                        (change)=\"toggleAudienceSection(group._id, section._id)\"\n                      />{{ section.name }}\n                    </label>\n                  }\n                </div>\n                @if (setsForAudience(group._id).length) {\n                  <div>\n                    <span>Sets (optional)</span>\n                    @for (set of setsForAudience(group._id); track set._id) {\n                      <label>\n                        <input\n                          type=\"checkbox\"\n                          [checked]=\"audienceFor(group._id)?.setIds?.includes(set._id)\"\n                          (change)=\"toggleAudienceSet(group._id, set._id)\"\n                        />{{ set.name }}\n                      </label>\n                    }\n                  </div>\n                }\n              }\n            </section>\n          }\n          <footer class=\"erp-drawer__footer\">\n            <button\n              class=\"erp-button erp-button--secondary\"\n              type=\"button\"\n              (click)=\"combinedOpen.set(false)\"\n            >\n              Cancel\n            </button>\n            <button\n              class=\"erp-button erp-button--primary\"\n              type=\"button\"\n              [disabled]=\"saving()\"\n              (click)=\"saveCombinedClass()\"\n            >\n              {{ saving() ? 'Saving\u2026' : 'Save combined class' }}\n            </button>\n          </footer>\n        </div>\n      </aside>\n    </div>\n  }\n</erp-admin-page>\n", styles: [":host {\n  display: block;\n  min-width: 0;\n}\n\n.tt-combined-body > p {\n  margin: 0;\n  color: var(--erp-text-muted);\n}\n\n.tt-audience-option {\n  padding: 0.9rem;\n  border: 1px solid var(--erp-border-subtle);\n  border-radius: 0.65rem;\n  background: var(--erp-surface-detail-soft);\n}\n\n.tt-audience-option label {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.45rem;\n  margin: 0.25rem 0.8rem 0.25rem 0;\n}\n\n.tt-audience-option > div {\n  margin: 0.65rem 0 0 1.45rem;\n}\n\n.tt-audience-option > div > span {\n  display: block;\n  margin-bottom: 0.25rem;\n  color: var(--erp-text-body);\n  font-size: 0.78rem;\n  font-weight: 700;\n}\n"] }]
    }], () => [], { closeContext: [{
            type: HostListener,
            args: ['document:click']
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(TimetableBuilderComponent, { className: "TimetableBuilderComponent", filePath: "frontend/src/app/features/admin/academics/timetable-builder.component.ts", lineNumber: 100 }); })();
