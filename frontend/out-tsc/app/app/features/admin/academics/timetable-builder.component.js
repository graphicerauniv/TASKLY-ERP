import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, HostListener, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ApiService } from '../../../core/api.service';
import { AdminPageComponent } from '../../../shared/ui/admin-page/admin-page.component';
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
const _forTrack0 = ($index, $item) => $item._id;
function TimetableBuilderComponent_Conditional_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 1);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r0.error());
} }
function TimetableBuilderComponent_Conditional_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 2);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r0.message());
} }
function TimetableBuilderComponent_For_18_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 8);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r2 = ctx.$implicit;
    i0.ɵɵproperty("value", item_r2.name);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(item_r2.name);
} }
function TimetableBuilderComponent_For_24_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 9);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r3 = ctx.$implicit;
    i0.ɵɵproperty("ngValue", item_r3);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1("Semester ", item_r3);
} }
function TimetableBuilderComponent_For_32_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 8);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r4 = ctx.$implicit;
    i0.ɵɵproperty("value", item_r4._id);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(item_r4.name);
} }
function TimetableBuilderComponent_For_40_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 8);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r5 = ctx.$implicit;
    i0.ɵɵproperty("value", item_r5._id);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(item_r5.name);
} }
function TimetableBuilderComponent_For_48_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 8);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r6 = ctx.$implicit;
    i0.ɵɵproperty("value", item_r6._id);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(item_r6.name);
} }
function TimetableBuilderComponent_For_56_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 8);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r7 = ctx.$implicit;
    i0.ɵɵproperty("value", item_r7._id);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(item_r7.name);
} }
function TimetableBuilderComponent_Conditional_59_For_19_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "th")(1, "strong");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "small");
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const period_r9 = ctx.$implicit;
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1("Period ", period_r9.periodNumber);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate2("", period_r9.startTime, "\u2013", period_r9.endTime);
} }
function TimetableBuilderComponent_Conditional_59_For_22_For_4_Conditional_0_Conditional_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "strong");
    i0.ɵɵtext(1, "Break");
    i0.ɵɵelementEnd();
} }
function TimetableBuilderComponent_Conditional_59_For_22_For_4_Conditional_0_Conditional_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "strong");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(2, "small");
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "small");
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    i0.ɵɵnextContext();
    const entry_r13 = i0.ɵɵreadContextLet(0);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(entry_r13.subjectName);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(entry_r13.facultyName);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate2("", entry_r13.roomName, " \u00B7 ", entry_r13.classType);
} }
function TimetableBuilderComponent_Conditional_59_For_22_For_4_Conditional_0_Conditional_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵtext(1, "Right-click to assign");
    i0.ɵɵelementEnd();
} }
function TimetableBuilderComponent_Conditional_59_For_22_For_4_Conditional_0_Template(rf, ctx) { if (rf & 1) {
    const _r10 = i0.ɵɵgetCurrentView();
    i0.ɵɵdeclareLet(0);
    i0.ɵɵelementStart(1, "td", 19);
    i0.ɵɵlistener("contextmenu", function TimetableBuilderComponent_Conditional_59_For_22_For_4_Conditional_0_Template_td_contextmenu_1_listener($event) { i0.ɵɵrestoreView(_r10); const period_r11 = i0.ɵɵnextContext().$implicit; const day_r12 = i0.ɵɵnextContext().$implicit; const ctx_r0 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r0.showContext($event, day_r12, period_r11)); });
    i0.ɵɵconditionalCreate(2, TimetableBuilderComponent_Conditional_59_For_22_For_4_Conditional_0_Conditional_2_Template, 2, 0, "strong")(3, TimetableBuilderComponent_Conditional_59_For_22_For_4_Conditional_0_Conditional_3_Template, 6, 4)(4, TimetableBuilderComponent_Conditional_59_For_22_For_4_Conditional_0_Conditional_4_Template, 2, 0, "span");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const period_r11 = i0.ɵɵnextContext().$implicit;
    const day_r12 = i0.ɵɵnextContext().$implicit;
    const ctx_r0 = i0.ɵɵnextContext(2);
    const entry_r14 = i0.ɵɵstoreLet(ctx_r0.entryFor(day_r12, period_r11));
    i0.ɵɵadvance();
    i0.ɵɵclassProp("timetable-grid__break", period_r11.periodType === "break")("timetable-grid__assigned", entry_r14);
    i0.ɵɵattribute("colspan", ctx_r0.span(entry_r14));
    i0.ɵɵadvance();
    i0.ɵɵconditional(period_r11.periodType === "break" ? 2 : entry_r14 ? 3 : 4);
} }
function TimetableBuilderComponent_Conditional_59_For_22_For_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵconditionalCreate(0, TimetableBuilderComponent_Conditional_59_For_22_For_4_Conditional_0_Template, 5, 7, "td", 18);
} if (rf & 2) {
    const period_r11 = ctx.$implicit;
    const day_r12 = i0.ɵɵnextContext().$implicit;
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵconditional(!ctx_r0.covered(day_r12, period_r11) ? 0 : -1);
} }
function TimetableBuilderComponent_Conditional_59_For_22_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "tr")(1, "th");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵrepeaterCreate(3, TimetableBuilderComponent_Conditional_59_For_22_For_4_Template, 1, 1, null, null, _forTrack0);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const day_r12 = ctx.$implicit;
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(day_r12);
    i0.ɵɵadvance();
    i0.ɵɵrepeater(ctx_r0.periods());
} }
function TimetableBuilderComponent_Conditional_59_Template(rf, ctx) { if (rf & 1) {
    const _r8 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "section", 11)(1, "div", 14)(2, "div")(3, "h2");
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "p");
    i0.ɵɵtext(6, "Right-click any lecture slot to assign or change its timetable details.");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(7, "div", 15)(8, "span");
    i0.ɵɵtext(9);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(10, "button", 10);
    i0.ɵɵlistener("click", function TimetableBuilderComponent_Conditional_59_Template_button_click_10_listener() { i0.ɵɵrestoreView(_r8); const ctx_r0 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r0.publish()); });
    i0.ɵɵtext(11);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(12, "div", 16)(13, "table", 17)(14, "thead")(15, "tr")(16, "th");
    i0.ɵɵtext(17, "Day");
    i0.ɵɵelementEnd();
    i0.ɵɵrepeaterCreate(18, TimetableBuilderComponent_Conditional_59_For_19_Template, 5, 3, "th", null, _forTrack0);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(20, "tbody");
    i0.ɵɵrepeaterCreate(21, TimetableBuilderComponent_Conditional_59_For_22_Template, 5, 1, "tr", null, i0.ɵɵrepeaterTrackByIdentity);
    i0.ɵɵelementEnd()()()();
} if (rf & 2) {
    let tmp_1_0;
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate((tmp_1_0 = ctx_r0.selectedStructure()) == null ? null : tmp_1_0.name);
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate2(" ", ctx_r0.entries().length, " assigned slot(s) \u00B7 ", ctx_r0.hasDraftChanges() ? "Draft changes" : "Published", " ");
    i0.ɵɵadvance();
    i0.ɵɵproperty("disabled", ctx_r0.saving() || !ctx_r0.entries().length);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r0.saving() ? "Publishing\u2026" : "Publish timetable", " ");
    i0.ɵɵadvance(7);
    i0.ɵɵrepeater(ctx_r0.periods());
    i0.ɵɵadvance(3);
    i0.ɵɵrepeater(ctx_r0.workingDays());
} }
function TimetableBuilderComponent_Conditional_60_Template(rf, ctx) { if (rf & 1) {
    const _r15 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 20);
    i0.ɵɵlistener("click", function TimetableBuilderComponent_Conditional_60_Template_div_click_0_listener($event) { return $event.stopPropagation(); });
    i0.ɵɵelementStart(1, "button", 21);
    i0.ɵɵlistener("click", function TimetableBuilderComponent_Conditional_60_Template_button_click_1_listener() { i0.ɵɵrestoreView(_r15); const ctx_r0 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r0.editSlot()); });
    i0.ɵɵtext(2, "Assign subject");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "button", 21);
    i0.ɵɵlistener("click", function TimetableBuilderComponent_Conditional_60_Template_button_click_3_listener() { i0.ɵɵrestoreView(_r15); const ctx_r0 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r0.editSlot()); });
    i0.ɵɵtext(4, "Assign teacher");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "button", 21);
    i0.ɵɵlistener("click", function TimetableBuilderComponent_Conditional_60_Template_button_click_5_listener() { i0.ɵɵrestoreView(_r15); const ctx_r0 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r0.editSlot()); });
    i0.ɵɵtext(6, "Assign room");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "button", 22);
    i0.ɵɵlistener("click", function TimetableBuilderComponent_Conditional_60_Template_button_click_7_listener() { i0.ɵɵrestoreView(_r15); const ctx_r0 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r0.mergeSlot()); });
    i0.ɵɵtext(8, " Merge column ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(9, "button", 22);
    i0.ɵɵlistener("click", function TimetableBuilderComponent_Conditional_60_Template_button_click_9_listener() { i0.ɵɵrestoreView(_r15); const ctx_r0 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r0.splitSlot()); });
    i0.ɵɵtext(10, " Split column ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(11, "button", 23);
    i0.ɵɵlistener("click", function TimetableBuilderComponent_Conditional_60_Template_button_click_11_listener() { i0.ɵɵrestoreView(_r15); const ctx_r0 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r0.removeAssignment()); });
    i0.ɵɵtext(12, " Remove subject and faculty ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(13, "button", 23);
    i0.ɵɵlistener("click", function TimetableBuilderComponent_Conditional_60_Template_button_click_13_listener() { i0.ɵɵrestoreView(_r15); const ctx_r0 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r0.clearSlot()); });
    i0.ɵɵtext(14, " Clear complete slot ");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const menu_r16 = ctx;
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵstyleProp("left", menu_r16.x, "px")("top", menu_r16.y, "px");
    i0.ɵɵadvance(7);
    i0.ɵɵproperty("disabled", !menu_r16.entry);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("disabled", !menu_r16.entry || ctx_r0.span(menu_r16.entry) === 1);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("disabled", !menu_r16.entry);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("disabled", !menu_r16.entry);
} }
function TimetableBuilderComponent_Conditional_61_For_19_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 8);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r18 = ctx.$implicit;
    i0.ɵɵproperty("value", item_r18._id);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate2("", item_r18.code, " \u00B7 ", item_r18.name);
} }
function TimetableBuilderComponent_Conditional_61_For_27_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 8);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r19 = ctx.$implicit;
    i0.ɵɵproperty("value", item_r19._id);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(item_r19.name);
} }
function TimetableBuilderComponent_Conditional_61_For_35_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 8);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r20 = ctx.$implicit;
    i0.ɵɵproperty("value", item_r20._id);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate2("", item_r20.name, " \u00B7 capacity ", item_r20.capacity);
} }
function TimetableBuilderComponent_Conditional_61_Template(rf, ctx) { if (rf & 1) {
    const _r17 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 13)(1, "button", 24);
    i0.ɵɵlistener("click", function TimetableBuilderComponent_Conditional_61_Template_button_click_1_listener() { i0.ɵɵrestoreView(_r17); const ctx_r0 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r0.closeEditor()); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(2, "section", 25)(3, "header", 26)(4, "div")(5, "small");
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "h2", 27);
    i0.ɵɵtext(8);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(9, "button", 28);
    i0.ɵɵlistener("click", function TimetableBuilderComponent_Conditional_61_Template_button_click_9_listener() { i0.ɵɵrestoreView(_r17); const ctx_r0 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r0.closeEditor()); });
    i0.ɵɵtext(10, "\u00D7");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(11, "div", 29)(12, "label")(13, "span");
    i0.ɵɵtext(14, "Subject *");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(15, "select", 6);
    i0.ɵɵtwoWayListener("ngModelChange", function TimetableBuilderComponent_Conditional_61_Template_select_ngModelChange_15_listener($event) { i0.ɵɵrestoreView(_r17); const ctx_r0 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r0.subjectId, $event) || (ctx_r0.subjectId = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵlistener("ngModelChange", function TimetableBuilderComponent_Conditional_61_Template_select_ngModelChange_15_listener() { i0.ɵɵrestoreView(_r17); const ctx_r0 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r0.subjectChanged()); });
    i0.ɵɵelementStart(16, "option", 7);
    i0.ɵɵtext(17, "Select assigned subject");
    i0.ɵɵelementEnd();
    i0.ɵɵrepeaterCreate(18, TimetableBuilderComponent_Conditional_61_For_19_Template, 2, 3, "option", 8, _forTrack0);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(20, "label")(21, "span");
    i0.ɵɵtext(22, "Teacher *");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(23, "select", 6);
    i0.ɵɵtwoWayListener("ngModelChange", function TimetableBuilderComponent_Conditional_61_Template_select_ngModelChange_23_listener($event) { i0.ɵɵrestoreView(_r17); const ctx_r0 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r0.facultyId, $event) || (ctx_r0.facultyId = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementStart(24, "option", 7);
    i0.ɵɵtext(25, "Select teacher");
    i0.ɵɵelementEnd();
    i0.ɵɵrepeaterCreate(26, TimetableBuilderComponent_Conditional_61_For_27_Template, 2, 2, "option", 8, _forTrack0);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(28, "label")(29, "span");
    i0.ɵɵtext(30, "Room/lab *");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(31, "select", 6);
    i0.ɵɵtwoWayListener("ngModelChange", function TimetableBuilderComponent_Conditional_61_Template_select_ngModelChange_31_listener($event) { i0.ɵɵrestoreView(_r17); const ctx_r0 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r0.roomId, $event) || (ctx_r0.roomId = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementStart(32, "option", 7);
    i0.ɵɵtext(33, "Select room");
    i0.ɵɵelementEnd();
    i0.ɵɵrepeaterCreate(34, TimetableBuilderComponent_Conditional_61_For_35_Template, 2, 3, "option", 8, _forTrack0);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(36, "label")(37, "span");
    i0.ɵɵtext(38, "Class type *");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(39, "select", 6);
    i0.ɵɵtwoWayListener("ngModelChange", function TimetableBuilderComponent_Conditional_61_Template_select_ngModelChange_39_listener($event) { i0.ɵɵrestoreView(_r17); const ctx_r0 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r0.classType, $event) || (ctx_r0.classType = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementStart(40, "option", 30);
    i0.ɵɵtext(41, "Lecture");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(42, "option", 31);
    i0.ɵɵtext(43, "Tutorial");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(44, "option", 32);
    i0.ɵɵtext(45, "Lab");
    i0.ɵɵelementEnd()()()();
    i0.ɵɵelementStart(46, "footer", 33)(47, "button", 34);
    i0.ɵɵlistener("click", function TimetableBuilderComponent_Conditional_61_Template_button_click_47_listener() { i0.ɵɵrestoreView(_r17); const ctx_r0 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r0.closeEditor()); });
    i0.ɵɵtext(48, " Cancel ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(49, "button", 10);
    i0.ɵɵlistener("click", function TimetableBuilderComponent_Conditional_61_Template_button_click_49_listener() { i0.ɵɵrestoreView(_r17); const ctx_r0 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r0.saveSlot()); });
    i0.ɵɵtext(50);
    i0.ɵɵelementEnd()()()();
} if (rf & 2) {
    let tmp_1_0;
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(6);
    i0.ɵɵtextInterpolate2("", ctx_r0.activeDay(), " \u00B7 Period ", (tmp_1_0 = ctx_r0.activePeriod()) == null ? null : tmp_1_0.periodNumber);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", ctx_r0.editingEntry() ? "Edit timetable slot" : "Assign timetable slot", " ");
    i0.ɵɵadvance(7);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r0.subjectId);
    i0.ɵɵadvance(3);
    i0.ɵɵrepeater(ctx_r0.availableSubjects());
    i0.ɵɵadvance(5);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r0.facultyId);
    i0.ɵɵadvance(3);
    i0.ɵɵrepeater(ctx_r0.availableFaculty());
    i0.ɵɵadvance(5);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r0.roomId);
    i0.ɵɵadvance(3);
    i0.ɵɵrepeater(ctx_r0.availableRooms());
    i0.ɵɵadvance(5);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r0.classType);
    i0.ɵɵadvance(10);
    i0.ɵɵproperty("disabled", ctx_r0.saving());
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r0.saving() ? "Saving\u2026" : "Save assignment", " ");
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
    loading = signal(true, ...(ngDevMode ? [{ debugName: "loading" }] : /* istanbul ignore next */ []));
    saving = signal(false, ...(ngDevMode ? [{ debugName: "saving" }] : /* istanbul ignore next */ []));
    gridOpen = signal(false, ...(ngDevMode ? [{ debugName: "gridOpen" }] : /* istanbul ignore next */ []));
    error = signal('', ...(ngDevMode ? [{ debugName: "error" }] : /* istanbul ignore next */ []));
    message = signal('', ...(ngDevMode ? [{ debugName: "message" }] : /* istanbul ignore next */ []));
    masters = signal([], ...(ngDevMode ? [{ debugName: "masters" }] : /* istanbul ignore next */ []));
    groups = signal([], ...(ngDevMode ? [{ debugName: "groups" }] : /* istanbul ignore next */ []));
    sections = signal([], ...(ngDevMode ? [{ debugName: "sections" }] : /* istanbul ignore next */ []));
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
    editingEntry = signal(null, ...(ngDevMode ? [{ debugName: "editingEntry" }] : /* istanbul ignore next */ []));
    activeDay = signal('', ...(ngDevMode ? [{ debugName: "activeDay" }] : /* istanbul ignore next */ []));
    activePeriod = signal(null, ...(ngDevMode ? [{ debugName: "activePeriod" }] : /* istanbul ignore next */ []));
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
        return this.groups().filter((item) => item.academicSession === this.session && item.semester === Number(this.semester));
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
            .filter((item) => item.timetableStructureId === this.timetableStructureId && item.isConfigured)
            .sort((left, right) => left.periodNumber - right.periodNumber);
    }
    workingDays() {
        return this.selectedStructure()?.workingDays || [];
    }
    availableSubjects() {
        const ids = new Set(this.groupSubjects()
            .filter((item) => item.groupId === this.groupId &&
            item.academicSession === this.session &&
            item.semester === Number(this.semester) &&
            item.status === 'active')
            .map((item) => item.subjectId));
        return this.subjects().filter((item) => ids.has(item._id) && item.isActive);
    }
    availableFaculty() {
        return this.faculties().filter((item) => item.isActive && (!item.subjectIds.length || item.subjectIds.includes(this.subjectId)));
    }
    availableRooms() {
        return this.rooms().filter((item) => item.isActive && (!item.subjectIds.length || item.subjectIds.includes(this.subjectId)));
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
        if (!this.periods().length) {
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
        this.context.set({
            x: Math.min(event.clientX, window.innerWidth - 230),
            y: Math.min(event.clientY, window.innerHeight - 300),
            day,
            period,
            entry: this.entryFor(day, period),
        });
    }
    editSlot() {
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
        this.editorOpen.set(true);
        this.context.set(null);
    }
    closeEditor() {
        this.editorOpen.set(false);
        this.editingEntry.set(null);
    }
    subjectChanged() {
        if (!this.availableFaculty().some((item) => item._id === this.facultyId))
            this.facultyId = '';
        if (!this.availableRooms().some((item) => item._id === this.roomId))
            this.roomId = '';
    }
    saveSlot() {
        const period = this.activePeriod();
        if (!period || !this.subjectId || !this.facultyId || !this.roomId) {
            this.error.set('Select a subject, faculty and room.');
            return;
        }
        this.saving.set(true);
        this.error.set('');
        const current = this.editingEntry();
        const request = current
            ? this.api.timetableAction(current._id, 'update', {
                subjectId: this.subjectId,
                facultyId: this.facultyId,
                roomId: this.roomId,
                classType: this.classType,
            })
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
        } }, decls: 62, vars: 13, consts: [["title", "Create timetable", "variant", "minimal"], ["role", "alert", 1, "erp-alert", "erp-alert--error"], [1, "erp-alert", "erp-alert--success"], [1, "erp-card", "erp-card--padded"], [1, "erp-card__header"], [1, "erp-form-grid"], [1, "erp-control", 3, "ngModelChange", "ngModel"], ["value", ""], [3, "value"], [3, "ngValue"], ["type", "button", 1, "erp-button", "erp-button--primary", 3, "click", "disabled"], [1, "erp-card", "timetable-card"], ["role", "menu", 1, "slot-context-menu", 3, "left", "top"], [1, "dialog-layer"], [1, "timetable-card__header"], [1, "timetable-card__actions"], [1, "timetable-scroll"], [1, "timetable-grid"], [3, "timetable-grid__break", "timetable-grid__assigned"], [3, "contextmenu"], ["role", "menu", 1, "slot-context-menu", 3, "click"], ["type", "button", "role", "menuitem", 3, "click"], ["type", "button", "role", "menuitem", 3, "click", "disabled"], ["type", "button", "role", "menuitem", 1, "slot-context-menu__danger", 3, "click", "disabled"], ["type", "button", "aria-label", "Close", 1, "dialog-backdrop", 3, "click"], ["role", "dialog", "aria-modal", "true", "aria-labelledby", "slot-editor-title", 1, "dialog"], [1, "dialog__header"], ["id", "slot-editor-title"], ["type", "button", "aria-label", "Close", 3, "click"], [1, "dialog__body", "dialog-form"], ["value", "lecture"], ["value", "tutorial"], ["value", "lab"], [1, "dialog__footer"], ["type", "button", 1, "erp-button", "erp-button--secondary", 3, "click"]], template: function TimetableBuilderComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "erp-admin-page", 0);
            i0.ɵɵconditionalCreate(1, TimetableBuilderComponent_Conditional_1_Template, 2, 1, "div", 1);
            i0.ɵɵconditionalCreate(2, TimetableBuilderComponent_Conditional_2_Template, 2, 1, "div", 2);
            i0.ɵɵelementStart(3, "section", 3)(4, "div", 4)(5, "div")(6, "h2");
            i0.ɵɵtext(7, "Open timetable workspace");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(8, "p");
            i0.ɵɵtext(9, "Select the academic scope and configured timetable structure.");
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(10, "div", 5)(11, "label")(12, "span");
            i0.ɵɵtext(13, "Academic session *");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(14, "select", 6);
            i0.ɵɵtwoWayListener("ngModelChange", function TimetableBuilderComponent_Template_select_ngModelChange_14_listener($event) { i0.ɵɵtwoWayBindingSet(ctx.session, $event) || (ctx.session = $event); return $event; });
            i0.ɵɵlistener("ngModelChange", function TimetableBuilderComponent_Template_select_ngModelChange_14_listener() { return ctx.resetAfter("session"); });
            i0.ɵɵelementStart(15, "option", 7);
            i0.ɵɵtext(16, "Select session");
            i0.ɵɵelementEnd();
            i0.ɵɵrepeaterCreate(17, TimetableBuilderComponent_For_18_Template, 2, 2, "option", 8, _forTrack0);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(19, "label")(20, "span");
            i0.ɵɵtext(21, "Semester *");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(22, "select", 6);
            i0.ɵɵtwoWayListener("ngModelChange", function TimetableBuilderComponent_Template_select_ngModelChange_22_listener($event) { i0.ɵɵtwoWayBindingSet(ctx.semester, $event) || (ctx.semester = $event); return $event; });
            i0.ɵɵlistener("ngModelChange", function TimetableBuilderComponent_Template_select_ngModelChange_22_listener() { return ctx.resetAfter("semester"); });
            i0.ɵɵrepeaterCreate(23, TimetableBuilderComponent_For_24_Template, 2, 2, "option", 9, i0.ɵɵrepeaterTrackByIdentity);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(25, "label")(26, "span");
            i0.ɵɵtext(27, "Group *");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(28, "select", 6);
            i0.ɵɵtwoWayListener("ngModelChange", function TimetableBuilderComponent_Template_select_ngModelChange_28_listener($event) { i0.ɵɵtwoWayBindingSet(ctx.groupId, $event) || (ctx.groupId = $event); return $event; });
            i0.ɵɵlistener("ngModelChange", function TimetableBuilderComponent_Template_select_ngModelChange_28_listener() { return ctx.resetAfter("group"); });
            i0.ɵɵelementStart(29, "option", 7);
            i0.ɵɵtext(30, "Select group");
            i0.ɵɵelementEnd();
            i0.ɵɵrepeaterCreate(31, TimetableBuilderComponent_For_32_Template, 2, 2, "option", 8, _forTrack0);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(33, "label")(34, "span");
            i0.ɵɵtext(35, "Section *");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(36, "select", 6);
            i0.ɵɵtwoWayListener("ngModelChange", function TimetableBuilderComponent_Template_select_ngModelChange_36_listener($event) { i0.ɵɵtwoWayBindingSet(ctx.sectionId, $event) || (ctx.sectionId = $event); return $event; });
            i0.ɵɵlistener("ngModelChange", function TimetableBuilderComponent_Template_select_ngModelChange_36_listener() { return ctx.resetAfter("section"); });
            i0.ɵɵelementStart(37, "option", 7);
            i0.ɵɵtext(38, "Select section");
            i0.ɵɵelementEnd();
            i0.ɵɵrepeaterCreate(39, TimetableBuilderComponent_For_40_Template, 2, 2, "option", 8, _forTrack0);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(41, "label")(42, "span");
            i0.ɵɵtext(43, "Timetable *");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(44, "select", 6);
            i0.ɵɵtwoWayListener("ngModelChange", function TimetableBuilderComponent_Template_select_ngModelChange_44_listener($event) { i0.ɵɵtwoWayBindingSet(ctx.timetableMasterId, $event) || (ctx.timetableMasterId = $event); return $event; });
            i0.ɵɵlistener("ngModelChange", function TimetableBuilderComponent_Template_select_ngModelChange_44_listener() { return ctx.resetAfter("master"); });
            i0.ɵɵelementStart(45, "option", 7);
            i0.ɵɵtext(46, "Select timetable");
            i0.ɵɵelementEnd();
            i0.ɵɵrepeaterCreate(47, TimetableBuilderComponent_For_48_Template, 2, 2, "option", 8, _forTrack0);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(49, "label")(50, "span");
            i0.ɵɵtext(51, "Structure *");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(52, "select", 6);
            i0.ɵɵtwoWayListener("ngModelChange", function TimetableBuilderComponent_Template_select_ngModelChange_52_listener($event) { i0.ɵɵtwoWayBindingSet(ctx.timetableStructureId, $event) || (ctx.timetableStructureId = $event); return $event; });
            i0.ɵɵlistener("ngModelChange", function TimetableBuilderComponent_Template_select_ngModelChange_52_listener() { return ctx.gridOpen.set(false); });
            i0.ɵɵelementStart(53, "option", 7);
            i0.ɵɵtext(54, "Select structure");
            i0.ɵɵelementEnd();
            i0.ɵɵrepeaterCreate(55, TimetableBuilderComponent_For_56_Template, 2, 2, "option", 8, _forTrack0);
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(57, "button", 10);
            i0.ɵɵlistener("click", function TimetableBuilderComponent_Template_button_click_57_listener() { return ctx.openTimetable(); });
            i0.ɵɵtext(58);
            i0.ɵɵelementEnd()();
            i0.ɵɵconditionalCreate(59, TimetableBuilderComponent_Conditional_59_Template, 23, 5, "section", 11);
            i0.ɵɵconditionalCreate(60, TimetableBuilderComponent_Conditional_60_Template, 15, 8, "div", 12);
            i0.ɵɵconditionalCreate(61, TimetableBuilderComponent_Conditional_61_Template, 51, 9, "div", 13);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            let tmp_17_0;
            i0.ɵɵadvance();
            i0.ɵɵconditional(ctx.error() ? 1 : -1);
            i0.ɵɵadvance();
            i0.ɵɵconditional(ctx.message() ? 2 : -1);
            i0.ɵɵadvance(12);
            i0.ɵɵtwoWayProperty("ngModel", ctx.session);
            i0.ɵɵadvance(3);
            i0.ɵɵrepeater(ctx.master("academic"));
            i0.ɵɵadvance(5);
            i0.ɵɵtwoWayProperty("ngModel", ctx.semester);
            i0.ɵɵadvance();
            i0.ɵɵrepeater(ctx.semesterOptions);
            i0.ɵɵadvance(5);
            i0.ɵɵtwoWayProperty("ngModel", ctx.groupId);
            i0.ɵɵadvance(3);
            i0.ɵɵrepeater(ctx.availableGroups());
            i0.ɵɵadvance(5);
            i0.ɵɵtwoWayProperty("ngModel", ctx.sectionId);
            i0.ɵɵadvance(3);
            i0.ɵɵrepeater(ctx.availableSections());
            i0.ɵɵadvance(5);
            i0.ɵɵtwoWayProperty("ngModel", ctx.timetableMasterId);
            i0.ɵɵadvance(3);
            i0.ɵɵrepeater(ctx.availableTimetables());
            i0.ɵɵadvance(5);
            i0.ɵɵtwoWayProperty("ngModel", ctx.timetableStructureId);
            i0.ɵɵadvance(3);
            i0.ɵɵrepeater(ctx.availableStructures());
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("disabled", ctx.loading());
            i0.ɵɵadvance();
            i0.ɵɵtextInterpolate1(" ", ctx.loading() ? "Loading\u2026" : "Open timetable", " ");
            i0.ɵɵadvance();
            i0.ɵɵconditional(ctx.gridOpen() ? 59 : -1);
            i0.ɵɵadvance();
            i0.ɵɵconditional((tmp_17_0 = ctx.context()) ? 60 : -1, tmp_17_0);
            i0.ɵɵadvance();
            i0.ɵɵconditional(ctx.editorOpen() ? 61 : -1);
        } }, dependencies: [CommonModule, FormsModule, i1.NgSelectOption, i1.ɵNgSelectMultipleOption, i1.SelectControlValueAccessor, i1.NgControlStatus, i1.NgModel, AdminPageComponent], styles: ["\n[_nghost-%COMP%] {\n  display: block;\n  min-width: 0;\n}\n\n.timetable-card[_ngcontent-%COMP%] {\n  overflow: hidden;\n}\n\n.timetable-card__header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: var(--erp-space-4);\n  padding: var(--erp-card-padding);\n  border-bottom: 1px solid var(--erp-border-subtle);\n}\n\n.timetable-card__header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], \n.timetable-card__header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n}\n\n.timetable-card__header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], \n.timetable-card__header[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: var(--erp-text-muted);\n}\n\n.timetable-card__actions[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: var(--erp-space-3);\n}\n\n.timetable-scroll[_ngcontent-%COMP%] {\n  overflow: auto;\n}\n\n.timetable-grid[_ngcontent-%COMP%] {\n  width: 100%;\n  min-width: 960px;\n  border-collapse: collapse;\n  table-layout: fixed;\n}\n\n.timetable-grid[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], \n.timetable-grid[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  min-width: 140px;\n  padding: var(--erp-space-3);\n  border: 1px solid var(--erp-border-subtle);\n  vertical-align: top;\n}\n\n.timetable-grid[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], \n.timetable-grid[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  background: var(--erp-canvas-soft);\n  color: var(--erp-text-heading);\n}\n\n.timetable-grid[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:first-child, \n.timetable-grid[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  width: 120px;\n  min-width: 120px;\n}\n\n.timetable-grid[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%], \n.timetable-grid[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]   small[_ngcontent-%COMP%], \n.timetable-grid[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%], \n.timetable-grid[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  display: block;\n}\n\n.timetable-grid[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]   small[_ngcontent-%COMP%], \n.timetable-grid[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   small[_ngcontent-%COMP%], \n.timetable-grid[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  margin-top: var(--erp-space-1);\n  color: var(--erp-text-muted);\n}\n\n.timetable-grid[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  height: 104px;\n  cursor: context-menu;\n  background: var(--erp-surface);\n}\n\n.timetable-grid__break[_ngcontent-%COMP%] {\n  text-align: center;\n  vertical-align: middle !important;\n  cursor: default !important;\n  background: var(--erp-blue-50) !important;\n  color: var(--erp-blue-700);\n}\n\n.timetable-grid__assigned[_ngcontent-%COMP%] {\n  border-color: var(--erp-blue-200) !important;\n}\n\n.slot-context-menu[_ngcontent-%COMP%] {\n  position: fixed;\n  z-index: var(--erp-z-popover);\n  display: grid;\n  width: 224px;\n  padding: var(--erp-space-1);\n  border: 1px solid var(--erp-border-default);\n  border-radius: var(--erp-radius-md);\n  background: var(--erp-surface-overlay);\n  box-shadow: var(--erp-shadow-overlay);\n}\n\n.slot-context-menu[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  min-height: 40px;\n  padding: 0 var(--erp-space-3);\n  border: 0;\n  border-radius: var(--erp-radius-sm);\n  text-align: left;\n  color: var(--erp-text-body);\n  background: transparent;\n}\n\n.slot-context-menu[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: var(--erp-canvas-soft);\n}\n\n.slot-context-menu[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:disabled {\n  opacity: 0.5;\n}\n\n.slot-context-menu__danger[_ngcontent-%COMP%] {\n  color: var(--erp-danger-text) !important;\n}\n\n@media (max-width: 760px) {\n  .timetable-card__header[_ngcontent-%COMP%] {\n    align-items: flex-start;\n    flex-direction: column;\n  }\n\n  .timetable-card__actions[_ngcontent-%COMP%] {\n    align-items: flex-start;\n    flex-direction: column;\n  }\n}"], changeDetection: 0 });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(TimetableBuilderComponent, [{
        type: Component,
        args: [{ selector: 'erp-timetable-builder', imports: [CommonModule, FormsModule, AdminPageComponent], changeDetection: ChangeDetectionStrategy.OnPush, template: "<erp-admin-page title=\"Create timetable\" variant=\"minimal\">\n  @if (error()) {\n    <div class=\"erp-alert erp-alert--error\" role=\"alert\">{{ error() }}</div>\n  }\n  @if (message()) {\n    <div class=\"erp-alert erp-alert--success\">{{ message() }}</div>\n  }\n\n  <section class=\"erp-card erp-card--padded\">\n    <div class=\"erp-card__header\">\n      <div>\n        <h2>Open timetable workspace</h2>\n        <p>Select the academic scope and configured timetable structure.</p>\n      </div>\n    </div>\n    <div class=\"erp-form-grid\">\n      <label\n        ><span>Academic session *</span\n        ><select class=\"erp-control\" [(ngModel)]=\"session\" (ngModelChange)=\"resetAfter('session')\">\n          <option value=\"\">Select session</option>\n          @for (item of master('academic'); track item._id) {\n            <option [value]=\"item.name\">{{ item.name }}</option>\n          }\n        </select></label\n      >\n      <label\n        ><span>Semester *</span\n        ><select\n          class=\"erp-control\"\n          [(ngModel)]=\"semester\"\n          (ngModelChange)=\"resetAfter('semester')\"\n        >\n          @for (item of semesterOptions; track item) {\n            <option [ngValue]=\"item\">Semester {{ item }}</option>\n          }\n        </select></label\n      >\n      <label\n        ><span>Group *</span\n        ><select class=\"erp-control\" [(ngModel)]=\"groupId\" (ngModelChange)=\"resetAfter('group')\">\n          <option value=\"\">Select group</option>\n          @for (item of availableGroups(); track item._id) {\n            <option [value]=\"item._id\">{{ item.name }}</option>\n          }\n        </select></label\n      >\n      <label\n        ><span>Section *</span\n        ><select\n          class=\"erp-control\"\n          [(ngModel)]=\"sectionId\"\n          (ngModelChange)=\"resetAfter('section')\"\n        >\n          <option value=\"\">Select section</option>\n          @for (item of availableSections(); track item._id) {\n            <option [value]=\"item._id\">{{ item.name }}</option>\n          }\n        </select></label\n      >\n      <label\n        ><span>Timetable *</span\n        ><select\n          class=\"erp-control\"\n          [(ngModel)]=\"timetableMasterId\"\n          (ngModelChange)=\"resetAfter('master')\"\n        >\n          <option value=\"\">Select timetable</option>\n          @for (item of availableTimetables(); track item._id) {\n            <option [value]=\"item._id\">{{ item.name }}</option>\n          }\n        </select></label\n      >\n      <label\n        ><span>Structure *</span\n        ><select\n          class=\"erp-control\"\n          [(ngModel)]=\"timetableStructureId\"\n          (ngModelChange)=\"gridOpen.set(false)\"\n        >\n          <option value=\"\">Select structure</option>\n          @for (item of availableStructures(); track item._id) {\n            <option [value]=\"item._id\">{{ item.name }}</option>\n          }\n        </select></label\n      >\n    </div>\n    <button\n      class=\"erp-button erp-button--primary\"\n      type=\"button\"\n      [disabled]=\"loading()\"\n      (click)=\"openTimetable()\"\n    >\n      {{ loading() ? 'Loading\u2026' : 'Open timetable' }}\n    </button>\n  </section>\n\n  @if (gridOpen()) {\n    <section class=\"erp-card timetable-card\">\n      <div class=\"timetable-card__header\">\n        <div>\n          <h2>{{ selectedStructure()?.name }}</h2>\n          <p>Right-click any lecture slot to assign or change its timetable details.</p>\n        </div>\n        <div class=\"timetable-card__actions\">\n          <span>\n            {{ entries().length }} assigned slot(s) \u00B7\n            {{ hasDraftChanges() ? 'Draft changes' : 'Published' }}\n          </span>\n          <button\n            class=\"erp-button erp-button--primary\"\n            type=\"button\"\n            [disabled]=\"saving() || !entries().length\"\n            (click)=\"publish()\"\n          >\n            {{ saving() ? 'Publishing\u2026' : 'Publish timetable' }}\n          </button>\n        </div>\n      </div>\n      <div class=\"timetable-scroll\">\n        <table class=\"timetable-grid\">\n          <thead>\n            <tr>\n              <th>Day</th>\n              @for (period of periods(); track period._id) {\n                <th>\n                  <strong>Period {{ period.periodNumber }}</strong>\n                  <small>{{ period.startTime }}\u2013{{ period.endTime }}</small>\n                </th>\n              }\n            </tr>\n          </thead>\n          <tbody>\n            @for (day of workingDays(); track day) {\n              <tr>\n                <th>{{ day }}</th>\n                @for (period of periods(); track period._id) {\n                  @if (!covered(day, period)) {\n                    @let entry = entryFor(day, period);\n                    <td\n                      [attr.colspan]=\"span(entry)\"\n                      [class.timetable-grid__break]=\"period.periodType === 'break'\"\n                      [class.timetable-grid__assigned]=\"entry\"\n                      (contextmenu)=\"showContext($event, day, period)\"\n                    >\n                      @if (period.periodType === 'break') {\n                        <strong>Break</strong>\n                      } @else if (entry) {\n                        <strong>{{ entry.subjectName }}</strong>\n                        <small>{{ entry.facultyName }}</small>\n                        <small>{{ entry.roomName }} \u00B7 {{ entry.classType }}</small>\n                      } @else {\n                        <span>Right-click to assign</span>\n                      }\n                    </td>\n                  }\n                }\n              </tr>\n            }\n          </tbody>\n        </table>\n      </div>\n    </section>\n  }\n\n  @if (context(); as menu) {\n    <div\n      class=\"slot-context-menu\"\n      role=\"menu\"\n      [style.left.px]=\"menu.x\"\n      [style.top.px]=\"menu.y\"\n      (click)=\"$event.stopPropagation()\"\n    >\n      <button type=\"button\" role=\"menuitem\" (click)=\"editSlot()\">Assign subject</button>\n      <button type=\"button\" role=\"menuitem\" (click)=\"editSlot()\">Assign teacher</button>\n      <button type=\"button\" role=\"menuitem\" (click)=\"editSlot()\">Assign room</button>\n      <button type=\"button\" role=\"menuitem\" [disabled]=\"!menu.entry\" (click)=\"mergeSlot()\">\n        Merge column\n      </button>\n      <button\n        type=\"button\"\n        role=\"menuitem\"\n        [disabled]=\"!menu.entry || span(menu.entry) === 1\"\n        (click)=\"splitSlot()\"\n      >\n        Split column\n      </button>\n      <button\n        class=\"slot-context-menu__danger\"\n        type=\"button\"\n        role=\"menuitem\"\n        [disabled]=\"!menu.entry\"\n        (click)=\"removeAssignment()\"\n      >\n        Remove subject and faculty\n      </button>\n      <button\n        class=\"slot-context-menu__danger\"\n        type=\"button\"\n        role=\"menuitem\"\n        [disabled]=\"!menu.entry\"\n        (click)=\"clearSlot()\"\n      >\n        Clear complete slot\n      </button>\n    </div>\n  }\n\n  @if (editorOpen()) {\n    <div class=\"dialog-layer\">\n      <button\n        class=\"dialog-backdrop\"\n        type=\"button\"\n        aria-label=\"Close\"\n        (click)=\"closeEditor()\"\n      ></button>\n      <section class=\"dialog\" role=\"dialog\" aria-modal=\"true\" aria-labelledby=\"slot-editor-title\">\n        <header class=\"dialog__header\">\n          <div>\n            <small>{{ activeDay() }} \u00B7 Period {{ activePeriod()?.periodNumber }}</small>\n            <h2 id=\"slot-editor-title\">\n              {{ editingEntry() ? 'Edit timetable slot' : 'Assign timetable slot' }}\n            </h2>\n          </div>\n          <button type=\"button\" aria-label=\"Close\" (click)=\"closeEditor()\">\u00D7</button>\n        </header>\n        <div class=\"dialog__body dialog-form\">\n          <label\n            ><span>Subject *</span\n            ><select class=\"erp-control\" [(ngModel)]=\"subjectId\" (ngModelChange)=\"subjectChanged()\">\n              <option value=\"\">Select assigned subject</option>\n              @for (item of availableSubjects(); track item._id) {\n                <option [value]=\"item._id\">{{ item.code }} \u00B7 {{ item.name }}</option>\n              }\n            </select></label\n          >\n          <label\n            ><span>Teacher *</span\n            ><select class=\"erp-control\" [(ngModel)]=\"facultyId\">\n              <option value=\"\">Select teacher</option>\n              @for (item of availableFaculty(); track item._id) {\n                <option [value]=\"item._id\">{{ item.name }}</option>\n              }\n            </select></label\n          >\n          <label\n            ><span>Room/lab *</span\n            ><select class=\"erp-control\" [(ngModel)]=\"roomId\">\n              <option value=\"\">Select room</option>\n              @for (item of availableRooms(); track item._id) {\n                <option [value]=\"item._id\">{{ item.name }} \u00B7 capacity {{ item.capacity }}</option>\n              }\n            </select></label\n          >\n          <label\n            ><span>Class type *</span\n            ><select class=\"erp-control\" [(ngModel)]=\"classType\">\n              <option value=\"lecture\">Lecture</option>\n              <option value=\"tutorial\">Tutorial</option>\n              <option value=\"lab\">Lab</option>\n            </select></label\n          >\n        </div>\n        <footer class=\"dialog__footer\">\n          <button class=\"erp-button erp-button--secondary\" type=\"button\" (click)=\"closeEditor()\">\n            Cancel\n          </button>\n          <button\n            class=\"erp-button erp-button--primary\"\n            type=\"button\"\n            [disabled]=\"saving()\"\n            (click)=\"saveSlot()\"\n          >\n            {{ saving() ? 'Saving\u2026' : 'Save assignment' }}\n          </button>\n        </footer>\n      </section>\n    </div>\n  }\n</erp-admin-page>\n", styles: ["/* ERP-LOCAL-STYLE: unique weekly timetable grid, merged-cell geometry, and native context menu. */\n:host {\n  display: block;\n  min-width: 0;\n}\n\n.timetable-card {\n  overflow: hidden;\n}\n\n.timetable-card__header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: var(--erp-space-4);\n  padding: var(--erp-card-padding);\n  border-bottom: 1px solid var(--erp-border-subtle);\n}\n\n.timetable-card__header h2,\n.timetable-card__header p {\n  margin: 0;\n}\n\n.timetable-card__header p,\n.timetable-card__header span {\n  color: var(--erp-text-muted);\n}\n\n.timetable-card__actions {\n  display: flex;\n  align-items: center;\n  gap: var(--erp-space-3);\n}\n\n.timetable-scroll {\n  overflow: auto;\n}\n\n.timetable-grid {\n  width: 100%;\n  min-width: 960px;\n  border-collapse: collapse;\n  table-layout: fixed;\n}\n\n.timetable-grid th,\n.timetable-grid td {\n  min-width: 140px;\n  padding: var(--erp-space-3);\n  border: 1px solid var(--erp-border-subtle);\n  vertical-align: top;\n}\n\n.timetable-grid thead th,\n.timetable-grid tbody th {\n  background: var(--erp-canvas-soft);\n  color: var(--erp-text-heading);\n}\n\n.timetable-grid thead th:first-child,\n.timetable-grid tbody th {\n  width: 120px;\n  min-width: 120px;\n}\n\n.timetable-grid th strong,\n.timetable-grid th small,\n.timetable-grid td strong,\n.timetable-grid td small {\n  display: block;\n}\n\n.timetable-grid th small,\n.timetable-grid td small,\n.timetable-grid td span {\n  margin-top: var(--erp-space-1);\n  color: var(--erp-text-muted);\n}\n\n.timetable-grid td {\n  height: 104px;\n  cursor: context-menu;\n  background: var(--erp-surface);\n}\n\n.timetable-grid__break {\n  text-align: center;\n  vertical-align: middle !important;\n  cursor: default !important;\n  background: var(--erp-blue-50) !important;\n  color: var(--erp-blue-700);\n}\n\n.timetable-grid__assigned {\n  border-color: var(--erp-blue-200) !important;\n}\n\n.slot-context-menu {\n  position: fixed;\n  z-index: var(--erp-z-popover);\n  display: grid;\n  width: 224px;\n  padding: var(--erp-space-1);\n  border: 1px solid var(--erp-border-default);\n  border-radius: var(--erp-radius-md);\n  background: var(--erp-surface-overlay);\n  box-shadow: var(--erp-shadow-overlay);\n}\n\n.slot-context-menu button {\n  min-height: 40px;\n  padding: 0 var(--erp-space-3);\n  border: 0;\n  border-radius: var(--erp-radius-sm);\n  text-align: left;\n  color: var(--erp-text-body);\n  background: transparent;\n}\n\n.slot-context-menu button:hover:not(:disabled) {\n  background: var(--erp-canvas-soft);\n}\n\n.slot-context-menu button:disabled {\n  opacity: 0.5;\n}\n\n.slot-context-menu__danger {\n  color: var(--erp-danger-text) !important;\n}\n\n@media (max-width: 760px) {\n  .timetable-card__header {\n    align-items: flex-start;\n    flex-direction: column;\n  }\n\n  .timetable-card__actions {\n    align-items: flex-start;\n    flex-direction: column;\n  }\n}\n"] }]
    }], () => [], { closeContext: [{
            type: HostListener,
            args: ['document:click']
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(TimetableBuilderComponent, { className: "TimetableBuilderComponent", filePath: "frontend/src/app/features/admin/academics/timetable-builder.component.ts", lineNumber: 44 }); })();
