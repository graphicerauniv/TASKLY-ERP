import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, HostListener, computed, inject, signal, } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LucideArrowRight, LucideCalendarDays, LucideCheck, LucideChevronDown, LucideChevronLeft, LucideChevronRight, LucideClock3, LucideEllipsisVertical, LucideFilter, LucideInfo, LucideLandmark, LucidePencil, LucidePlus, LucideRefreshCw, LucideSearch, LucideTrash2, LucideX, } from '@lucide/angular';
import { ActivatedRoute, Router } from '@angular/router';
import { forkJoin } from 'rxjs';
import { ApiService } from '../../../core/api.service';
import { ERP_PAGINATION } from '../../../core/config/data-view.constants';
import { AdminPageComponent } from '../../../shared/ui/admin-page/admin-page.component';
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
const _forTrack0 = ($index, $item) => $item._id;
function TimetablePeriodsComponent_Conditional_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 3);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r0.error());
} }
function TimetablePeriodsComponent_Conditional_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 4);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r0.message());
} }
function TimetablePeriodsComponent_Conditional_16_For_2_Conditional_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(0, "svg", 36);
} }
function TimetablePeriodsComponent_Conditional_16_For_2_Template(rf, ctx) { if (rf & 1) {
    const _r2 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "li")(1, "button", 8);
    i0.ɵɵlistener("click", function TimetablePeriodsComponent_Conditional_16_For_2_Template_button_click_1_listener() { const master_r3 = i0.ɵɵrestoreView(_r2).$implicit; const ctx_r0 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r0.selectMaster(master_r3._id)); });
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(2, "svg", 35);
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(3, "span")(4, "strong");
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "small");
    i0.ɵɵtext(7);
    i0.ɵɵelementEnd()();
    i0.ɵɵconditionalCreate(8, TimetablePeriodsComponent_Conditional_16_For_2_Conditional_8_Template, 1, 0, ":svg:svg", 36);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const master_r3 = ctx.$implicit;
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵclassProp("is-selected", master_r3._id === ctx_r0.timetableMasterId);
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(master_r3.name);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(master_r3.academicSession);
    i0.ɵɵadvance();
    i0.ɵɵconditional(master_r3._id === ctx_r0.timetableMasterId ? 8 : -1);
} }
function TimetablePeriodsComponent_Conditional_16_ForEmpty_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "li", 34);
    i0.ɵɵtext(1, "No timetable masters available");
    i0.ɵɵelementEnd();
} }
function TimetablePeriodsComponent_Conditional_16_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "ul", 10);
    i0.ɵɵrepeaterCreate(1, TimetablePeriodsComponent_Conditional_16_For_2_Template, 9, 5, "li", null, _forTrack0, false, TimetablePeriodsComponent_Conditional_16_ForEmpty_3_Template, 2, 0, "li", 34);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵrepeater(ctx_r0.masters());
} }
function TimetablePeriodsComponent_Conditional_27_For_2_Conditional_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(0, "svg", 36);
} }
function TimetablePeriodsComponent_Conditional_27_For_2_Template(rf, ctx) { if (rf & 1) {
    const _r4 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "li")(1, "button", 8);
    i0.ɵɵlistener("click", function TimetablePeriodsComponent_Conditional_27_For_2_Template_button_click_1_listener() { const structure_r5 = i0.ɵɵrestoreView(_r4).$implicit; const ctx_r0 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r0.selectStructure(structure_r5._id)); });
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(2, "svg", 37);
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(3, "span")(4, "strong");
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "small");
    i0.ɵɵtext(7);
    i0.ɵɵelementEnd()();
    i0.ɵɵconditionalCreate(8, TimetablePeriodsComponent_Conditional_27_For_2_Conditional_8_Template, 1, 0, ":svg:svg", 36);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const structure_r5 = ctx.$implicit;
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵclassProp("is-selected", structure_r5._id === ctx_r0.timetableStructureId);
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(structure_r5.name);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1("", structure_r5.periodCount, " periods");
    i0.ɵɵadvance();
    i0.ɵɵconditional(structure_r5._id === ctx_r0.timetableStructureId ? 8 : -1);
} }
function TimetablePeriodsComponent_Conditional_27_ForEmpty_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "li", 34);
    i0.ɵɵtext(1, "No structures available");
    i0.ɵɵelementEnd();
} }
function TimetablePeriodsComponent_Conditional_27_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "ul", 13);
    i0.ɵɵrepeaterCreate(1, TimetablePeriodsComponent_Conditional_27_For_2_Template, 9, 5, "li", null, _forTrack0, false, TimetablePeriodsComponent_Conditional_27_ForEmpty_3_Template, 2, 0, "li", 34);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵrepeater(ctx_r0.structuresForMaster());
} }
function TimetablePeriodsComponent_For_71_Template(rf, ctx) { if (rf & 1) {
    const _r6 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "tr", 38);
    i0.ɵɵlistener("dblclick", function TimetablePeriodsComponent_For_71_Template_tr_dblclick_0_listener() { const period_r7 = i0.ɵɵrestoreView(_r6).$implicit; const ctx_r0 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r0.openPeriod(period_r7)); });
    i0.ɵɵelementStart(1, "td")(2, "strong");
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
    i0.ɵɵelementStart(12, "td")(13, "span", 39);
    i0.ɵɵelement(14, "i");
    i0.ɵɵtext(15);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(16, "td")(17, "button", 40);
    i0.ɵɵlistener("click", function TimetablePeriodsComponent_For_71_Template_button_click_17_listener() { const period_r7 = i0.ɵɵrestoreView(_r6).$implicit; const ctx_r0 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r0.openPeriod(period_r7)); });
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(18, "svg", 41);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    let tmp_10_0;
    const period_r7 = ctx.$implicit;
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵclassProp("is-selected", ((tmp_10_0 = ctx_r0.selected()) == null ? null : tmp_10_0._id) === period_r7._id);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate2("", ctx_r0.structureName(), " - Period ", period_r7.periodNumber);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", period_r7.isConfigured ? period_r7.periodType === "break" ? "Break" : "Lecture" : "\u2014", " ");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(period_r7.startTime || "\u2014");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(period_r7.endTime || "\u2014");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(period_r7.durationMinutes ? period_r7.durationMinutes + " min" : "\u2014");
    i0.ɵɵadvance(2);
    i0.ɵɵclassProp("is-configured", period_r7.isConfigured);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1("", period_r7.isConfigured ? "Configured" : "Not configured", " ");
    i0.ɵɵadvance(2);
    i0.ɵɵattribute("aria-label", "Open Period " + period_r7.periodNumber);
} }
function TimetablePeriodsComponent_ForEmpty_72_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "tr")(1, "td", 42);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", ctx_r0.timetableStructureId ? "No periods match the current search or filter." : "Select a timetable and structure to configure periods.", " ");
} }
function TimetablePeriodsComponent_For_79_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 29);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const size_r8 = ctx.$implicit;
    i0.ɵɵproperty("value", size_r8);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1("", size_r8, " / page");
} }
function TimetablePeriodsComponent_Conditional_86_Conditional_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(0, "svg", 46);
} }
function TimetablePeriodsComponent_Conditional_86_Conditional_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(0, "svg", 47);
} }
function TimetablePeriodsComponent_Conditional_86_Conditional_10_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "em");
    i0.ɵɵtext(1, "Configured");
    i0.ɵɵelementEnd();
} }
function TimetablePeriodsComponent_Conditional_86_Conditional_13_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "button", 48);
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(1, "svg", 41);
    i0.ɵɵelementEnd();
} }
function TimetablePeriodsComponent_Conditional_86_Conditional_16_Conditional_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 3);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r0.error());
} }
function TimetablePeriodsComponent_Conditional_86_Conditional_16_For_23_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 29);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const duration_r11 = ctx.$implicit;
    i0.ɵɵproperty("value", duration_r11);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1("", duration_r11, " minutes");
} }
function TimetablePeriodsComponent_Conditional_86_Conditional_16_Template(rf, ctx) { if (rf & 1) {
    const _r10 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 51);
    i0.ɵɵconditionalCreate(1, TimetablePeriodsComponent_Conditional_86_Conditional_16_Conditional_1_Template, 2, 1, "div", 3);
    i0.ɵɵelementStart(2, "label")(3, "span");
    i0.ɵɵtext(4, "Period *");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(5, "input", 53);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "label")(7, "span");
    i0.ɵɵtext(8, "Period type *");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(9, "select", 28);
    i0.ɵɵtwoWayListener("ngModelChange", function TimetablePeriodsComponent_Conditional_86_Conditional_16_Template_select_ngModelChange_9_listener($event) { i0.ɵɵrestoreView(_r10); const ctx_r0 = i0.ɵɵnextContext(2); i0.ɵɵtwoWayBindingSet(ctx_r0.periodType, $event) || (ctx_r0.periodType = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementStart(10, "option", 54);
    i0.ɵɵtext(11, "Lecture");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(12, "option", 55);
    i0.ɵɵtext(13, "Break");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(14, "label")(15, "span");
    i0.ɵɵtext(16, "From time *");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(17, "input", 56);
    i0.ɵɵtwoWayListener("ngModelChange", function TimetablePeriodsComponent_Conditional_86_Conditional_16_Template_input_ngModelChange_17_listener($event) { i0.ɵɵrestoreView(_r10); const ctx_r0 = i0.ɵɵnextContext(2); i0.ɵɵtwoWayBindingSet(ctx_r0.startTime, $event) || (ctx_r0.startTime = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(18, "label")(19, "span");
    i0.ɵɵtext(20, "Duration *");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(21, "select", 28);
    i0.ɵɵtwoWayListener("ngModelChange", function TimetablePeriodsComponent_Conditional_86_Conditional_16_Template_select_ngModelChange_21_listener($event) { i0.ɵɵrestoreView(_r10); const ctx_r0 = i0.ɵɵnextContext(2); i0.ɵɵtwoWayBindingSet(ctx_r0.durationMinutes, $event) || (ctx_r0.durationMinutes = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵrepeaterCreate(22, TimetablePeriodsComponent_Conditional_86_Conditional_16_For_23_Template, 2, 2, "option", 29, i0.ɵɵrepeaterTrackByIdentity);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(24, "label")(25, "span");
    i0.ɵɵtext(26, "To time");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(27, "input", 57);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(28, "section", 58)(29, "h3");
    i0.ɵɵtext(30, "Timing preview");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(31, "div")(32, "span")(33, "small");
    i0.ɵɵtext(34, "Start");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(35, "strong");
    i0.ɵɵtext(36);
    i0.ɵɵelementEnd()();
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(37, "svg", 59);
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(38, "span")(39, "small");
    i0.ɵɵtext(40, "Duration");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(41, "strong");
    i0.ɵɵtext(42);
    i0.ɵɵelementEnd()();
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(43, "svg", 59);
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(44, "span")(45, "small");
    i0.ɵɵtext(46, "End");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(47, "strong");
    i0.ɵɵtext(48);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(49, "p");
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(50, "svg", 60);
    i0.ɵɵtext(51, " End time is calculated from start time and duration. ");
    i0.ɵɵelementEnd()();
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(52, "div", 61);
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(53, "svg", 62);
    i0.ɵɵtext(54, " Conflicts will be checked before saving. ");
    i0.ɵɵelementEnd();
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(55, "footer", 63)(56, "button", 64);
    i0.ɵɵlistener("click", function TimetablePeriodsComponent_Conditional_86_Conditional_16_Template_button_click_56_listener() { i0.ɵɵrestoreView(_r10); const ctx_r0 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r0.closeDrawer()); });
    i0.ɵɵtext(57, " Cancel ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(58, "button", 65);
    i0.ɵɵlistener("click", function TimetablePeriodsComponent_Conditional_86_Conditional_16_Template_button_click_58_listener() { i0.ɵɵrestoreView(_r10); const ctx_r0 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r0.save()); });
    i0.ɵɵtext(59);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const period_r12 = i0.ɵɵnextContext();
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵconditional(ctx_r0.error() ? 1 : -1);
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("value", "Period " + period_r12.periodNumber);
    i0.ɵɵadvance(4);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r0.periodType);
    i0.ɵɵadvance(8);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r0.startTime);
    i0.ɵɵadvance(4);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r0.durationMinutes);
    i0.ɵɵadvance();
    i0.ɵɵrepeater(ctx_r0.durationOptions);
    i0.ɵɵadvance(5);
    i0.ɵɵproperty("value", ctx_r0.calculatedEndTime() === "\u2014" ? "Calculated automatically" : ctx_r0.calculatedEndTime());
    i0.ɵɵadvance(9);
    i0.ɵɵtextInterpolate(ctx_r0.startTime || "\u2014");
    i0.ɵɵadvance(6);
    i0.ɵɵtextInterpolate1("", ctx_r0.durationMinutes, " min");
    i0.ɵɵadvance(6);
    i0.ɵɵtextInterpolate(ctx_r0.calculatedEndTime());
    i0.ɵɵadvance(10);
    i0.ɵɵproperty("disabled", !ctx_r0.formValid() || ctx_r0.saving());
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r0.saving() ? "Saving\u2026" : "Save period configuration", " ");
} }
function TimetablePeriodsComponent_Conditional_86_Conditional_17_Template(rf, ctx) { if (rf & 1) {
    const _r13 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 52)(1, "section", 66)(2, "strong");
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(4, "svg", 67);
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(5, "strong");
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "span");
    i0.ɵɵtext(8);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(9, "section", 68)(10, "h3");
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(11, "svg", 69);
    i0.ɵɵtext(12, " Period details");
    i0.ɵɵelementEnd();
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(13, "dl")(14, "div")(15, "dt");
    i0.ɵɵtext(16, "Period type");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(17, "dd");
    i0.ɵɵtext(18);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(19, "div")(20, "dt");
    i0.ɵɵtext(21, "From time");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(22, "dd");
    i0.ɵɵtext(23);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(24, "div")(25, "dt");
    i0.ɵɵtext(26, "To time");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(27, "dd");
    i0.ɵɵtext(28);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(29, "div")(30, "dt");
    i0.ɵɵtext(31, "Duration");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(32, "dd");
    i0.ɵɵtext(33);
    i0.ɵɵelementEnd()()()();
    i0.ɵɵelementStart(34, "div", 70);
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(35, "svg", 71);
    i0.ɵɵtext(36, " No timing conflict detected. ");
    i0.ɵɵelementEnd();
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(37, "button", 72);
    i0.ɵɵlistener("click", function TimetablePeriodsComponent_Conditional_86_Conditional_17_Template_button_click_37_listener() { i0.ɵɵrestoreView(_r13); const ctx_r0 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r0.clearSelected()); });
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(38, "svg", 73);
    i0.ɵɵtext(39, " Clear configuration ");
    i0.ɵɵelementEnd();
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(40, "footer", 63)(41, "button", 64);
    i0.ɵɵlistener("click", function TimetablePeriodsComponent_Conditional_86_Conditional_17_Template_button_click_41_listener() { i0.ɵɵrestoreView(_r13); const ctx_r0 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r0.closeDrawer()); });
    i0.ɵɵtext(42, " Close ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(43, "button", 74);
    i0.ɵɵlistener("click", function TimetablePeriodsComponent_Conditional_86_Conditional_17_Template_button_click_43_listener() { i0.ɵɵrestoreView(_r13); const ctx_r0 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r0.editSelected()); });
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(44, "svg", 75);
    i0.ɵɵtext(45, " Edit configuration ");
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const period_r12 = i0.ɵɵnextContext();
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(period_r12.startTime);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(period_r12.endTime);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1("", period_r12.durationMinutes, " minutes");
    i0.ɵɵadvance(10);
    i0.ɵɵtextInterpolate(period_r12.periodType === "break" ? "Break" : "Lecture");
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(period_r12.startTime);
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(period_r12.endTime);
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate1("", period_r12.durationMinutes, " minutes");
} }
function TimetablePeriodsComponent_Conditional_86_Template(rf, ctx) { if (rf & 1) {
    const _r9 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 33)(1, "button", 43);
    i0.ɵɵlistener("click", function TimetablePeriodsComponent_Conditional_86_Template_button_click_1_listener() { i0.ɵɵrestoreView(_r9); const ctx_r0 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r0.closeDrawer()); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(2, "aside", 44)(3, "header", 45)(4, "span");
    i0.ɵɵconditionalCreate(5, TimetablePeriodsComponent_Conditional_86_Conditional_5_Template, 1, 0, ":svg:svg", 46)(6, TimetablePeriodsComponent_Conditional_86_Conditional_6_Template, 1, 0, ":svg:svg", 47);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "div")(8, "h2");
    i0.ɵɵtext(9);
    i0.ɵɵconditionalCreate(10, TimetablePeriodsComponent_Conditional_86_Conditional_10_Template, 2, 0, "em");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(11, "p");
    i0.ɵɵtext(12);
    i0.ɵɵelementEnd()();
    i0.ɵɵconditionalCreate(13, TimetablePeriodsComponent_Conditional_86_Conditional_13_Template, 2, 0, "button", 48);
    i0.ɵɵelementStart(14, "button", 49);
    i0.ɵɵlistener("click", function TimetablePeriodsComponent_Conditional_86_Template_button_click_14_listener() { i0.ɵɵrestoreView(_r9); const ctx_r0 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r0.closeDrawer()); });
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(15, "svg", 50);
    i0.ɵɵelementEnd()();
    i0.ɵɵconditionalCreate(16, TimetablePeriodsComponent_Conditional_86_Conditional_16_Template, 60, 11, "div", 51)(17, TimetablePeriodsComponent_Conditional_86_Conditional_17_Template, 46, 7, "div", 52);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const period_r12 = ctx;
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(5);
    i0.ɵɵconditional(ctx_r0.drawer() === "detail" ? 5 : 6);
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate1(" ", ctx_r0.drawer() === "detail" ? "Period " + period_r12.periodNumber : "Configure Period " + period_r12.periodNumber, " ");
    i0.ɵɵadvance();
    i0.ɵɵconditional(ctx_r0.drawer() === "detail" ? 10 : -1);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate2("", ctx_r0.masterName(), " \u00B7 ", ctx_r0.structureName());
    i0.ɵɵadvance();
    i0.ɵɵconditional(ctx_r0.drawer() === "detail" ? 13 : -1);
    i0.ɵɵadvance(3);
    i0.ɵɵconditional(ctx_r0.drawer() === "configure" ? 16 : 17);
} }
function apiMessage(error, fallback) {
    if (typeof error === 'object' && error && 'error' in error) {
        const response = error.error;
        if (typeof response?.message === 'string')
            return response.message;
    }
    return fallback;
}
export class TimetablePeriodsComponent {
    api = inject(ApiService);
    route = inject(ActivatedRoute);
    router = inject(Router);
    loading = signal(false, ...(ngDevMode ? [{ debugName: "loading" }] : /* istanbul ignore next */ []));
    saving = signal(false, ...(ngDevMode ? [{ debugName: "saving" }] : /* istanbul ignore next */ []));
    error = signal('', ...(ngDevMode ? [{ debugName: "error" }] : /* istanbul ignore next */ []));
    message = signal('', ...(ngDevMode ? [{ debugName: "message" }] : /* istanbul ignore next */ []));
    masters = signal([], ...(ngDevMode ? [{ debugName: "masters" }] : /* istanbul ignore next */ []));
    structures = signal([], ...(ngDevMode ? [{ debugName: "structures" }] : /* istanbul ignore next */ []));
    periods = signal([], ...(ngDevMode ? [{ debugName: "periods" }] : /* istanbul ignore next */ []));
    selected = signal(null, ...(ngDevMode ? [{ debugName: "selected" }] : /* istanbul ignore next */ []));
    drawer = signal(null, ...(ngDevMode ? [{ debugName: "drawer" }] : /* istanbul ignore next */ []));
    openScopeDropdown = signal(null, ...(ngDevMode ? [{ debugName: "openScopeDropdown" }] : /* istanbul ignore next */ []));
    filter = signal('all', ...(ngDevMode ? [{ debugName: "filter" }] : /* istanbul ignore next */ []));
    page = signal(1, ...(ngDevMode ? [{ debugName: "page" }] : /* istanbul ignore next */ []));
    pageSize = signal(25, ...(ngDevMode ? [{ debugName: "pageSize" }] : /* istanbul ignore next */ []));
    pageSizeOptions = ERP_PAGINATION.pageSizeOptions;
    durationOptions = [30, 40, 45, 50, 55, 60, 75, 90, 120];
    timetableMasterId = '';
    timetableStructureId = '';
    search = '';
    periodType = 'lecture';
    startTime = '';
    durationMinutes = 50;
    selectedMaster = computed(() => this.masters().find((item) => item._id === this.timetableMasterId) || null, ...(ngDevMode ? [{ debugName: "selectedMaster" }] : /* istanbul ignore next */ []));
    selectedStructure = computed(() => this.structures().find((item) => item._id === this.timetableStructureId) || null, ...(ngDevMode ? [{ debugName: "selectedStructure" }] : /* istanbul ignore next */ []));
    structuresForMaster = computed(() => this.structures().filter((item) => item.timetableMasterId === this.timetableMasterId && item.isActive), ...(ngDevMode ? [{ debugName: "structuresForMaster" }] : /* istanbul ignore next */ []));
    scopedPeriods = computed(() => this.periods()
        .filter((item) => item.timetableStructureId === this.timetableStructureId)
        .sort((left, right) => left.periodNumber - right.periodNumber), ...(ngDevMode ? [{ debugName: "scopedPeriods" }] : /* istanbul ignore next */ []));
    configuredCount = computed(() => this.scopedPeriods().filter((item) => item.isConfigured).length, ...(ngDevMode ? [{ debugName: "configuredCount" }] : /* istanbul ignore next */ []));
    unconfiguredCount = computed(() => this.scopedPeriods().length - this.configuredCount(), ...(ngDevMode ? [{ debugName: "unconfiguredCount" }] : /* istanbul ignore next */ []));
    constructor() {
        this.timetableMasterId = this.route.snapshot.queryParamMap.get('masterId') || '';
        this.timetableStructureId = this.route.snapshot.queryParamMap.get('structureId') || '';
        this.load();
    }
    load() {
        this.loading.set(true);
        this.error.set('');
        forkJoin({
            masters: this.api.academicRecords('timetable-masters'),
            structures: this.api.academicRecords('timetable-structures'),
            periods: this.api.academicRecords('timetable-periods'),
        }).subscribe({
            next: ({ masters, structures, periods }) => {
                this.masters.set(masters.items);
                this.structures.set(structures.items);
                this.periods.set(periods.items);
                if (!masters.items.some((item) => item._id === this.timetableMasterId))
                    this.timetableMasterId = masters.items[0]?._id || '';
                const available = structures.items.filter((item) => item.timetableMasterId === this.timetableMasterId);
                if (!available.some((item) => item._id === this.timetableStructureId))
                    this.timetableStructureId = available[0]?._id || '';
                this.syncQuery();
                this.loading.set(false);
            },
            error: (error) => {
                this.error.set(apiMessage(error, 'Could not load timetable periods.'));
                this.loading.set(false);
            },
        });
    }
    changeMaster(masterId) {
        this.timetableMasterId = masterId;
        this.timetableStructureId = this.structuresForMaster()[0]?._id || '';
        this.scopeChanged();
    }
    toggleScopeDropdown(dropdown, event) {
        event.stopPropagation();
        if (dropdown === 'structure' && !this.timetableMasterId)
            return;
        this.openScopeDropdown.update((current) => (current === dropdown ? null : dropdown));
    }
    selectMaster(masterId) {
        this.changeMaster(masterId);
        this.openScopeDropdown.set(null);
    }
    selectStructure(structureId) {
        this.changeStructure(structureId);
        this.openScopeDropdown.set(null);
    }
    closeScopeDropdown(event) {
        if (!event.target?.closest('.erp-period-picker')) {
            this.openScopeDropdown.set(null);
        }
    }
    changeStructure(structureId) {
        this.timetableStructureId = structureId;
        this.scopeChanged();
    }
    filteredPeriods() {
        const query = this.search.trim().toLowerCase();
        return this.scopedPeriods().filter((period) => {
            const matchesFilter = this.filter() === 'all' ||
                (this.filter() === 'configured' ? period.isConfigured : !period.isConfigured);
            const label = `${this.structureName()} period ${period.periodNumber}`.toLowerCase();
            return matchesFilter && (!query || label.includes(query));
        });
    }
    totalPages() {
        return Math.max(1, Math.ceil(this.filteredPeriods().length / this.pageSize()));
    }
    pagedPeriods() {
        const current = Math.min(this.page(), this.totalPages());
        return this.filteredPeriods().slice((current - 1) * this.pageSize(), current * this.pageSize());
    }
    rangeEnd() {
        return Math.min(this.page() * this.pageSize(), this.filteredPeriods().length);
    }
    setFilter(filter) {
        this.filter.set(filter);
        this.page.set(1);
    }
    openPrimaryConfigure() {
        const period = this.scopedPeriods().find((item) => !item.isConfigured) || this.scopedPeriods()[0];
        if (period)
            this.openPeriod(period, true);
    }
    openPeriod(period, forceEdit = false) {
        this.selected.set(period);
        if (forceEdit || !period.isConfigured) {
            this.periodType = period.periodType || 'lecture';
            this.startTime = period.startTime || '';
            this.durationMinutes = period.durationMinutes || 50;
            this.drawer.set('configure');
        }
        else {
            this.drawer.set('detail');
        }
    }
    editSelected() {
        const period = this.selected();
        if (period)
            this.openPeriod(period, true);
    }
    closeDrawer() {
        this.drawer.set(null);
        this.selected.set(null);
        this.error.set('');
    }
    calculatedEndTime() {
        if (!/^([01]\d|2[0-3]):[0-5]\d$/.test(this.startTime))
            return '—';
        const [hours, minutes] = this.startTime.split(':').map(Number);
        const total = hours * 60 + minutes + Number(this.durationMinutes);
        if (total >= 1440)
            return 'Invalid';
        return `${String(Math.floor(total / 60)).padStart(2, '0')}:${String(total % 60).padStart(2, '0')}`;
    }
    formValid() {
        return Boolean(this.selected() &&
            this.startTime &&
            this.calculatedEndTime() !== 'Invalid' &&
            this.calculatedEndTime() !== '—');
    }
    save() {
        const period = this.selected();
        if (!period || !this.formValid() || this.saving())
            return;
        this.saving.set(true);
        this.error.set('');
        this.api
            .updateAcademicRecord('timetable-periods', period._id, {
            periodType: this.periodType,
            startTime: this.startTime,
            durationMinutes: Number(this.durationMinutes),
        })
            .subscribe({
            next: () => {
                this.message.set(`Period ${period.periodNumber} configured successfully.`);
                this.saving.set(false);
                this.closeDrawer();
                this.load();
            },
            error: (error) => {
                this.error.set(apiMessage(error, 'Could not save the period configuration.'));
                this.saving.set(false);
            },
        });
    }
    clearSelected() {
        const period = this.selected();
        if (!period || this.saving())
            return;
        if (!confirm(`Clear Period ${period.periodNumber} configuration?`))
            return;
        this.saving.set(true);
        this.api
            .updateAcademicRecord('timetable-periods', period._id, {
            clearConfiguration: true,
        })
            .subscribe({
            next: () => {
                this.message.set(`Period ${period.periodNumber} configuration cleared.`);
                this.saving.set(false);
                this.closeDrawer();
                this.load();
            },
            error: (error) => {
                this.error.set(apiMessage(error, 'Could not clear the period configuration.'));
                this.saving.set(false);
            },
        });
    }
    masterName() {
        return this.selectedMaster()?.name || 'Select timetable';
    }
    structureName() {
        return this.selectedStructure()?.name || 'Select structure';
    }
    scopeChanged() {
        this.page.set(1);
        this.search = '';
        this.filter.set('all');
        this.closeDrawer();
        this.syncQuery();
    }
    syncQuery() {
        void this.router.navigate([], {
            relativeTo: this.route,
            queryParams: {
                masterId: this.timetableMasterId || null,
                structureId: this.timetableStructureId || null,
            },
            queryParamsHandling: 'merge',
            replaceUrl: true,
        });
    }
    static ɵfac = function TimetablePeriodsComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || TimetablePeriodsComponent)(); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: TimetablePeriodsComponent, selectors: [["erp-timetable-periods"]], hostBindings: function TimetablePeriodsComponent_HostBindings(rf, ctx) { if (rf & 1) {
            i0.ɵɵlistener("click", function TimetablePeriodsComponent_click_HostBindingHandler($event) { return ctx.closeScopeDropdown($event); }, i0.ɵɵresolveDocument);
        } }, decls: 87, vars: 33, consts: [["title", "Configure periods", "description", "Set timing and teaching type for each period in a structure.", "variant", "compact", "layout", "collection"], ["page-actions", "", "type", "button", 1, "erp-button", "erp-button--primary", 3, "click", "disabled"], ["lucidePlus", "", "size", "18"], [1, "erp-alert", "erp-alert--danger"], [1, "erp-alert", "erp-alert--success"], [1, "erp-period-scope"], ["lucideCalendarDays", "", "size", "21"], [1, "erp-period-picker"], ["type", "button", 3, "click"], ["lucideChevronDown", "", "size", "18"], ["role", "listbox", "aria-label", "Select timetable"], ["lucideLandmark", "", "size", "21"], ["type", "button", 3, "click", "disabled"], ["role", "listbox", "aria-label", "Select structure"], [1, "erp-card", "erp-table-shell", "erp-period-table"], [1, "erp-period-tools"], ["aria-label", "Period status filters"], [1, "is-success"], [1, "erp-search-control"], ["lucideSearch", "", "size", "18"], ["type", "search", "placeholder", "Search period", 3, "ngModelChange", "ngModel"], ["type", "button", 1, "erp-button", "erp-button--secondary"], ["lucideFilter", "", "size", "17"], ["type", "button", "aria-label", "Refresh", 1, "erp-icon-button", 3, "click"], ["lucideRefreshCw", "", "size", "18"], [1, "erp-table-scroll"], [3, "is-selected"], [1, "erp-timetable-pagination"], [1, "erp-control", 3, "ngModelChange", "ngModel"], [3, "value"], ["type", "button", 1, "erp-icon-button", 3, "click", "disabled"], ["lucideChevronLeft", "", "size", "17"], ["lucideChevronRight", "", "size", "17"], [1, "erp-drawer-layer"], [1, "erp-period-picker__empty"], ["lucideCalendarDays", "", "size", "17"], ["lucideCheck", "", "size", "17"], ["lucideLandmark", "", "size", "17"], [3, "dblclick"], [1, "erp-period-status"], ["type", "button", 1, "erp-icon-button", 3, "click"], ["lucideEllipsisVertical", "", "size", "18"], ["colspan", "7", 1, "erp-period-empty"], ["type", "button", "aria-label", "Close drawer", 1, "erp-drawer-backdrop", 3, "click"], ["role", "dialog", "aria-modal", "true", 1, "erp-drawer", "erp-period-drawer"], [1, "erp-drawer__header", "erp-period-drawer__header"], ["lucideClock3", "", "size", "25"], ["lucideCalendarDays", "", "size", "25"], ["type", "button", "aria-label", "More actions", 1, "erp-icon-button"], ["type", "button", "aria-label", "Close", 1, "erp-icon-button", 3, "click"], ["lucideX", "", "size", "21"], [1, "erp-drawer__body", "erp-period-form"], [1, "erp-drawer__body", "erp-period-detail"], ["disabled", "", 1, "erp-control", 3, "value"], ["value", "lecture"], ["value", "break"], ["type", "time", 1, "erp-control", 3, "ngModelChange", "ngModel"], ["readonly", "", 1, "erp-control", 3, "value"], [1, "erp-period-preview"], ["lucideArrowRight", "", "size", "18"], ["lucideInfo", "", "size", "17"], [1, "erp-period-conflict-note"], ["lucideClock3", "", "size", "17"], [1, "erp-drawer__footer"], ["type", "button", 1, "erp-button", "erp-button--secondary", 3, "click"], ["type", "button", 1, "erp-button", "erp-button--primary", 3, "click", "disabled"], [1, "erp-period-time-card"], ["lucideArrowRight", "", "size", "27"], [1, "erp-timetable-detail-card"], ["lucideCalendarDays", "", "size", "19"], [1, "erp-period-success"], ["lucideCheck", "", "size", "18"], ["type", "button", 1, "erp-period-clear", 3, "click"], ["lucideTrash2", "", "size", "18"], ["type", "button", 1, "erp-button", "erp-button--primary", 3, "click"], ["lucidePencil", "", "size", "18"]], template: function TimetablePeriodsComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "erp-admin-page", 0)(1, "button", 1);
            i0.ɵɵlistener("click", function TimetablePeriodsComponent_Template_button_click_1_listener() { return ctx.openPrimaryConfigure(); });
            i0.ɵɵnamespaceSVG();
            i0.ɵɵelement(2, "svg", 2);
            i0.ɵɵtext(3, " Configure period ");
            i0.ɵɵelementEnd();
            i0.ɵɵconditionalCreate(4, TimetablePeriodsComponent_Conditional_4_Template, 2, 1, "div", 3);
            i0.ɵɵconditionalCreate(5, TimetablePeriodsComponent_Conditional_5_Template, 2, 1, "div", 4);
            i0.ɵɵnamespaceHTML();
            i0.ɵɵelementStart(6, "section", 5)(7, "div");
            i0.ɵɵnamespaceSVG();
            i0.ɵɵelement(8, "svg", 6);
            i0.ɵɵnamespaceHTML();
            i0.ɵɵelementStart(9, "span");
            i0.ɵɵtext(10, "Timetable");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(11, "div", 7)(12, "button", 8);
            i0.ɵɵlistener("click", function TimetablePeriodsComponent_Template_button_click_12_listener($event) { return ctx.toggleScopeDropdown("master", $event); });
            i0.ɵɵelementStart(13, "strong");
            i0.ɵɵtext(14);
            i0.ɵɵelementEnd();
            i0.ɵɵnamespaceSVG();
            i0.ɵɵelement(15, "svg", 9);
            i0.ɵɵelementEnd();
            i0.ɵɵconditionalCreate(16, TimetablePeriodsComponent_Conditional_16_Template, 4, 1, "ul", 10);
            i0.ɵɵelementEnd()();
            i0.ɵɵnamespaceHTML();
            i0.ɵɵelement(17, "i");
            i0.ɵɵelementStart(18, "div");
            i0.ɵɵnamespaceSVG();
            i0.ɵɵelement(19, "svg", 11);
            i0.ɵɵnamespaceHTML();
            i0.ɵɵelementStart(20, "span");
            i0.ɵɵtext(21, "Structure");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(22, "div", 7)(23, "button", 12);
            i0.ɵɵlistener("click", function TimetablePeriodsComponent_Template_button_click_23_listener($event) { return ctx.toggleScopeDropdown("structure", $event); });
            i0.ɵɵelementStart(24, "strong");
            i0.ɵɵtext(25);
            i0.ɵɵelementEnd();
            i0.ɵɵnamespaceSVG();
            i0.ɵɵelement(26, "svg", 9);
            i0.ɵɵelementEnd();
            i0.ɵɵconditionalCreate(27, TimetablePeriodsComponent_Conditional_27_Template, 4, 1, "ul", 13);
            i0.ɵɵelementEnd()()();
            i0.ɵɵnamespaceHTML();
            i0.ɵɵelementStart(28, "section", 14)(29, "header", 15)(30, "nav", 16)(31, "button", 8);
            i0.ɵɵlistener("click", function TimetablePeriodsComponent_Template_button_click_31_listener() { return ctx.setFilter("all"); });
            i0.ɵɵtext(32, " All ");
            i0.ɵɵelementStart(33, "b");
            i0.ɵɵtext(34);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(35, "button", 8);
            i0.ɵɵlistener("click", function TimetablePeriodsComponent_Template_button_click_35_listener() { return ctx.setFilter("configured"); });
            i0.ɵɵtext(36, " Configured ");
            i0.ɵɵelementStart(37, "b", 17);
            i0.ɵɵtext(38);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(39, "button", 8);
            i0.ɵɵlistener("click", function TimetablePeriodsComponent_Template_button_click_39_listener() { return ctx.setFilter("unconfigured"); });
            i0.ɵɵtext(40, " Not configured ");
            i0.ɵɵelementStart(41, "b");
            i0.ɵɵtext(42);
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(43, "label", 18);
            i0.ɵɵnamespaceSVG();
            i0.ɵɵelement(44, "svg", 19);
            i0.ɵɵnamespaceHTML();
            i0.ɵɵelementStart(45, "input", 20);
            i0.ɵɵtwoWayListener("ngModelChange", function TimetablePeriodsComponent_Template_input_ngModelChange_45_listener($event) { i0.ɵɵtwoWayBindingSet(ctx.search, $event) || (ctx.search = $event); return $event; });
            i0.ɵɵlistener("ngModelChange", function TimetablePeriodsComponent_Template_input_ngModelChange_45_listener() { return ctx.page.set(1); });
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(46, "button", 21);
            i0.ɵɵnamespaceSVG();
            i0.ɵɵelement(47, "svg", 22);
            i0.ɵɵtext(48, " Filters ");
            i0.ɵɵelementEnd();
            i0.ɵɵnamespaceHTML();
            i0.ɵɵelementStart(49, "button", 23);
            i0.ɵɵlistener("click", function TimetablePeriodsComponent_Template_button_click_49_listener() { return ctx.load(); });
            i0.ɵɵnamespaceSVG();
            i0.ɵɵelement(50, "svg", 24);
            i0.ɵɵelementEnd()();
            i0.ɵɵnamespaceHTML();
            i0.ɵɵelementStart(51, "div", 25)(52, "table")(53, "thead")(54, "tr")(55, "th");
            i0.ɵɵtext(56, "Period");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(57, "th");
            i0.ɵɵtext(58, "Type");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(59, "th");
            i0.ɵɵtext(60, "Start time");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(61, "th");
            i0.ɵɵtext(62, "End time");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(63, "th");
            i0.ɵɵtext(64, "Duration");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(65, "th");
            i0.ɵɵtext(66, "Status");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(67, "th");
            i0.ɵɵtext(68, "Actions");
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(69, "tbody");
            i0.ɵɵrepeaterCreate(70, TimetablePeriodsComponent_For_71_Template, 19, 12, "tr", 26, _forTrack0, false, TimetablePeriodsComponent_ForEmpty_72_Template, 3, 1, "tr");
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(73, "footer", 27)(74, "span");
            i0.ɵɵtext(75);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(76, "div")(77, "select", 28);
            i0.ɵɵlistener("ngModelChange", function TimetablePeriodsComponent_Template_select_ngModelChange_77_listener($event) { ctx.pageSize.set(+$event); return ctx.page.set(1); });
            i0.ɵɵrepeaterCreate(78, TimetablePeriodsComponent_For_79_Template, 2, 2, "option", 29, i0.ɵɵrepeaterTrackByIdentity);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(80, "button", 30);
            i0.ɵɵlistener("click", function TimetablePeriodsComponent_Template_button_click_80_listener() { return ctx.page.set(ctx.page() - 1); });
            i0.ɵɵnamespaceSVG();
            i0.ɵɵelement(81, "svg", 31);
            i0.ɵɵelementEnd();
            i0.ɵɵnamespaceHTML();
            i0.ɵɵelementStart(82, "b");
            i0.ɵɵtext(83);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(84, "button", 30);
            i0.ɵɵlistener("click", function TimetablePeriodsComponent_Template_button_click_84_listener() { return ctx.page.set(ctx.page() + 1); });
            i0.ɵɵnamespaceSVG();
            i0.ɵɵelement(85, "svg", 32);
            i0.ɵɵelementEnd()()()()();
            i0.ɵɵconditionalCreate(86, TimetablePeriodsComponent_Conditional_86_Template, 18, 7, "div", 33);
        } if (rf & 2) {
            let tmp_26_0;
            i0.ɵɵadvance();
            i0.ɵɵproperty("disabled", !ctx.scopedPeriods().length);
            i0.ɵɵadvance(3);
            i0.ɵɵconditional(ctx.error() && !ctx.drawer() ? 4 : -1);
            i0.ɵɵadvance();
            i0.ɵɵconditional(ctx.message() ? 5 : -1);
            i0.ɵɵadvance(7);
            i0.ɵɵclassProp("is-open", ctx.openScopeDropdown() === "master");
            i0.ɵɵattribute("aria-expanded", ctx.openScopeDropdown() === "master");
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate(ctx.masterName());
            i0.ɵɵadvance(2);
            i0.ɵɵconditional(ctx.openScopeDropdown() === "master" ? 16 : -1);
            i0.ɵɵadvance(7);
            i0.ɵɵclassProp("is-open", ctx.openScopeDropdown() === "structure");
            i0.ɵɵproperty("disabled", !ctx.timetableMasterId);
            i0.ɵɵattribute("aria-expanded", ctx.openScopeDropdown() === "structure");
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate(ctx.structureName());
            i0.ɵɵadvance(2);
            i0.ɵɵconditional(ctx.openScopeDropdown() === "structure" ? 27 : -1);
            i0.ɵɵadvance(4);
            i0.ɵɵclassProp("is-active", ctx.filter() === "all");
            i0.ɵɵadvance(3);
            i0.ɵɵtextInterpolate(ctx.scopedPeriods().length);
            i0.ɵɵadvance();
            i0.ɵɵclassProp("is-active", ctx.filter() === "configured");
            i0.ɵɵadvance(3);
            i0.ɵɵtextInterpolate(ctx.configuredCount());
            i0.ɵɵadvance();
            i0.ɵɵclassProp("is-active", ctx.filter() === "unconfigured");
            i0.ɵɵadvance(3);
            i0.ɵɵtextInterpolate(ctx.unconfiguredCount());
            i0.ɵɵadvance(3);
            i0.ɵɵtwoWayProperty("ngModel", ctx.search);
            i0.ɵɵadvance(25);
            i0.ɵɵrepeater(ctx.pagedPeriods());
            i0.ɵɵadvance(5);
            i0.ɵɵtextInterpolate3(" Showing ", ctx.filteredPeriods().length ? (ctx.page() - 1) * ctx.pageSize() + 1 : 0, "\u2013", ctx.rangeEnd(), " of ", ctx.filteredPeriods().length, " ");
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngModel", ctx.pageSize());
            i0.ɵɵadvance();
            i0.ɵɵrepeater(ctx.pageSizeOptions);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("disabled", ctx.page() === 1);
            i0.ɵɵadvance(3);
            i0.ɵɵtextInterpolate(ctx.page());
            i0.ɵɵadvance();
            i0.ɵɵproperty("disabled", ctx.page() === ctx.totalPages());
            i0.ɵɵadvance(2);
            i0.ɵɵconditional((tmp_26_0 = ctx.drawer() && ctx.selected()) ? 86 : -1, tmp_26_0);
        } }, dependencies: [CommonModule,
            FormsModule, i1.NgSelectOption, i1.ɵNgSelectMultipleOption, i1.DefaultValueAccessor, i1.SelectControlValueAccessor, i1.NgControlStatus, i1.NgModel, AdminPageComponent,
            LucideArrowRight,
            LucideCalendarDays,
            LucideCheck,
            LucideChevronDown,
            LucideChevronLeft,
            LucideChevronRight,
            LucideClock3,
            LucideEllipsisVertical,
            LucideFilter,
            LucideInfo,
            LucideLandmark,
            LucidePencil,
            LucidePlus,
            LucideRefreshCw,
            LucideSearch,
            LucideTrash2,
            LucideX], encapsulation: 2, changeDetection: 0 });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(TimetablePeriodsComponent, [{
        type: Component,
        args: [{ selector: 'erp-timetable-periods', imports: [
                    CommonModule,
                    FormsModule,
                    AdminPageComponent,
                    LucideArrowRight,
                    LucideCalendarDays,
                    LucideCheck,
                    LucideChevronDown,
                    LucideChevronLeft,
                    LucideChevronRight,
                    LucideClock3,
                    LucideEllipsisVertical,
                    LucideFilter,
                    LucideInfo,
                    LucideLandmark,
                    LucidePencil,
                    LucidePlus,
                    LucideRefreshCw,
                    LucideSearch,
                    LucideTrash2,
                    LucideX,
                ], changeDetection: ChangeDetectionStrategy.OnPush, template: "<erp-admin-page\n  title=\"Configure periods\"\n  description=\"Set timing and teaching type for each period in a structure.\"\n  variant=\"compact\"\n  layout=\"collection\"\n>\n  <button\n    page-actions\n    class=\"erp-button erp-button--primary\"\n    type=\"button\"\n    [disabled]=\"!scopedPeriods().length\"\n    (click)=\"openPrimaryConfigure()\"\n  >\n    <svg lucidePlus size=\"18\"></svg>\n    Configure period\n  </button>\n\n  @if (error() && !drawer()) {\n    <div class=\"erp-alert erp-alert--danger\">{{ error() }}</div>\n  }\n  @if (message()) {\n    <div class=\"erp-alert erp-alert--success\">{{ message() }}</div>\n  }\n\n  <section class=\"erp-period-scope\">\n    <div>\n      <svg lucideCalendarDays size=\"21\"></svg>\n      <span>Timetable</span>\n      <div class=\"erp-period-picker\">\n        <button\n          type=\"button\"\n          [class.is-open]=\"openScopeDropdown() === 'master'\"\n          [attr.aria-expanded]=\"openScopeDropdown() === 'master'\"\n          (click)=\"toggleScopeDropdown('master', $event)\"\n        >\n          <strong>{{ masterName() }}</strong>\n          <svg lucideChevronDown size=\"18\"></svg>\n        </button>\n        @if (openScopeDropdown() === 'master') {\n          <ul role=\"listbox\" aria-label=\"Select timetable\">\n            @for (master of masters(); track master._id) {\n              <li>\n                <button\n                  type=\"button\"\n                  [class.is-selected]=\"master._id === timetableMasterId\"\n                  (click)=\"selectMaster(master._id)\"\n                >\n                  <svg lucideCalendarDays size=\"17\"></svg>\n                  <span\n                    ><strong>{{ master.name }}</strong\n                    ><small>{{ master.academicSession }}</small></span\n                  >\n                  @if (master._id === timetableMasterId) {\n                    <svg lucideCheck size=\"17\"></svg>\n                  }\n                </button>\n              </li>\n            } @empty {\n              <li class=\"erp-period-picker__empty\">No timetable masters available</li>\n            }\n          </ul>\n        }\n      </div>\n    </div>\n    <i></i>\n    <div>\n      <svg lucideLandmark size=\"21\"></svg>\n      <span>Structure</span>\n      <div class=\"erp-period-picker\">\n        <button\n          type=\"button\"\n          [disabled]=\"!timetableMasterId\"\n          [class.is-open]=\"openScopeDropdown() === 'structure'\"\n          [attr.aria-expanded]=\"openScopeDropdown() === 'structure'\"\n          (click)=\"toggleScopeDropdown('structure', $event)\"\n        >\n          <strong>{{ structureName() }}</strong>\n          <svg lucideChevronDown size=\"18\"></svg>\n        </button>\n        @if (openScopeDropdown() === 'structure') {\n          <ul role=\"listbox\" aria-label=\"Select structure\">\n            @for (structure of structuresForMaster(); track structure._id) {\n              <li>\n                <button\n                  type=\"button\"\n                  [class.is-selected]=\"structure._id === timetableStructureId\"\n                  (click)=\"selectStructure(structure._id)\"\n                >\n                  <svg lucideLandmark size=\"17\"></svg>\n                  <span\n                    ><strong>{{ structure.name }}</strong\n                    ><small>{{ structure.periodCount }} periods</small></span\n                  >\n                  @if (structure._id === timetableStructureId) {\n                    <svg lucideCheck size=\"17\"></svg>\n                  }\n                </button>\n              </li>\n            } @empty {\n              <li class=\"erp-period-picker__empty\">No structures available</li>\n            }\n          </ul>\n        }\n      </div>\n    </div>\n  </section>\n\n  <section class=\"erp-card erp-table-shell erp-period-table\">\n    <header class=\"erp-period-tools\">\n      <nav aria-label=\"Period status filters\">\n        <button type=\"button\" [class.is-active]=\"filter() === 'all'\" (click)=\"setFilter('all')\">\n          All <b>{{ scopedPeriods().length }}</b>\n        </button>\n        <button\n          type=\"button\"\n          [class.is-active]=\"filter() === 'configured'\"\n          (click)=\"setFilter('configured')\"\n        >\n          Configured <b class=\"is-success\">{{ configuredCount() }}</b>\n        </button>\n        <button\n          type=\"button\"\n          [class.is-active]=\"filter() === 'unconfigured'\"\n          (click)=\"setFilter('unconfigured')\"\n        >\n          Not configured <b>{{ unconfiguredCount() }}</b>\n        </button>\n      </nav>\n      <label class=\"erp-search-control\">\n        <svg lucideSearch size=\"18\"></svg>\n        <input\n          type=\"search\"\n          [(ngModel)]=\"search\"\n          placeholder=\"Search period\"\n          (ngModelChange)=\"page.set(1)\"\n        />\n      </label>\n      <button class=\"erp-button erp-button--secondary\" type=\"button\">\n        <svg lucideFilter size=\"17\"></svg> Filters\n      </button>\n      <button class=\"erp-icon-button\" type=\"button\" aria-label=\"Refresh\" (click)=\"load()\">\n        <svg lucideRefreshCw size=\"18\"></svg>\n      </button>\n    </header>\n\n    <div class=\"erp-table-scroll\">\n      <table>\n        <thead>\n          <tr>\n            <th>Period</th>\n            <th>Type</th>\n            <th>Start time</th>\n            <th>End time</th>\n            <th>Duration</th>\n            <th>Status</th>\n            <th>Actions</th>\n          </tr>\n        </thead>\n        <tbody>\n          @for (period of pagedPeriods(); track period._id) {\n            <tr\n              [class.is-selected]=\"selected()?._id === period._id\"\n              (dblclick)=\"openPeriod(period)\"\n            >\n              <td>\n                <strong>{{ structureName() }} - Period {{ period.periodNumber }}</strong>\n              </td>\n              <td>\n                {{\n                  period.isConfigured ? (period.periodType === 'break' ? 'Break' : 'Lecture') : '\u2014'\n                }}\n              </td>\n              <td>{{ period.startTime || '\u2014' }}</td>\n              <td>{{ period.endTime || '\u2014' }}</td>\n              <td>{{ period.durationMinutes ? period.durationMinutes + ' min' : '\u2014' }}</td>\n              <td>\n                <span class=\"erp-period-status\" [class.is-configured]=\"period.isConfigured\">\n                  <i></i>{{ period.isConfigured ? 'Configured' : 'Not configured' }}\n                </span>\n              </td>\n              <td>\n                <button\n                  class=\"erp-icon-button\"\n                  type=\"button\"\n                  [attr.aria-label]=\"'Open Period ' + period.periodNumber\"\n                  (click)=\"openPeriod(period)\"\n                >\n                  <svg lucideEllipsisVertical size=\"18\"></svg>\n                </button>\n              </td>\n            </tr>\n          } @empty {\n            <tr>\n              <td colspan=\"7\" class=\"erp-period-empty\">\n                {{\n                  timetableStructureId\n                    ? 'No periods match the current search or filter.'\n                    : 'Select a timetable and structure to configure periods.'\n                }}\n              </td>\n            </tr>\n          }\n        </tbody>\n      </table>\n    </div>\n\n    <footer class=\"erp-timetable-pagination\">\n      <span>\n        Showing {{ filteredPeriods().length ? (page() - 1) * pageSize() + 1 : 0 }}\u2013{{\n          rangeEnd()\n        }}\n        of {{ filteredPeriods().length }}\n      </span>\n      <div>\n        <select\n          class=\"erp-control\"\n          [ngModel]=\"pageSize()\"\n          (ngModelChange)=\"pageSize.set(+$event); page.set(1)\"\n        >\n          @for (size of pageSizeOptions; track size) {\n            <option [value]=\"size\">{{ size }} / page</option>\n          }\n        </select>\n        <button\n          class=\"erp-icon-button\"\n          type=\"button\"\n          [disabled]=\"page() === 1\"\n          (click)=\"page.set(page() - 1)\"\n        >\n          <svg lucideChevronLeft size=\"17\"></svg>\n        </button>\n        <b>{{ page() }}</b>\n        <button\n          class=\"erp-icon-button\"\n          type=\"button\"\n          [disabled]=\"page() === totalPages()\"\n          (click)=\"page.set(page() + 1)\"\n        >\n          <svg lucideChevronRight size=\"17\"></svg>\n        </button>\n      </div>\n    </footer>\n  </section>\n</erp-admin-page>\n\n@if (drawer() && selected(); as period) {\n  <div class=\"erp-drawer-layer\">\n    <button\n      class=\"erp-drawer-backdrop\"\n      type=\"button\"\n      aria-label=\"Close drawer\"\n      (click)=\"closeDrawer()\"\n    ></button>\n    <aside class=\"erp-drawer erp-period-drawer\" role=\"dialog\" aria-modal=\"true\">\n      <header class=\"erp-drawer__header erp-period-drawer__header\">\n        <span>\n          @if (drawer() === 'detail') {\n            <svg lucideClock3 size=\"25\"></svg>\n          } @else {\n            <svg lucideCalendarDays size=\"25\"></svg>\n          }\n        </span>\n        <div>\n          <h2>\n            {{\n              drawer() === 'detail'\n                ? 'Period ' + period.periodNumber\n                : 'Configure Period ' + period.periodNumber\n            }}\n            @if (drawer() === 'detail') {\n              <em>Configured</em>\n            }\n          </h2>\n          <p>{{ masterName() }} \u00B7 {{ structureName() }}</p>\n        </div>\n        @if (drawer() === 'detail') {\n          <button class=\"erp-icon-button\" type=\"button\" aria-label=\"More actions\">\n            <svg lucideEllipsisVertical size=\"18\"></svg>\n          </button>\n        }\n        <button class=\"erp-icon-button\" type=\"button\" aria-label=\"Close\" (click)=\"closeDrawer()\">\n          <svg lucideX size=\"21\"></svg>\n        </button>\n      </header>\n\n      @if (drawer() === 'configure') {\n        <div class=\"erp-drawer__body erp-period-form\">\n          @if (error()) {\n            <div class=\"erp-alert erp-alert--danger\">{{ error() }}</div>\n          }\n          <label>\n            <span>Period *</span>\n            <input class=\"erp-control\" [value]=\"'Period ' + period.periodNumber\" disabled />\n          </label>\n          <label>\n            <span>Period type *</span>\n            <select class=\"erp-control\" [(ngModel)]=\"periodType\">\n              <option value=\"lecture\">Lecture</option>\n              <option value=\"break\">Break</option>\n            </select>\n          </label>\n          <label>\n            <span>From time *</span>\n            <input class=\"erp-control\" type=\"time\" [(ngModel)]=\"startTime\" />\n          </label>\n          <label>\n            <span>Duration *</span>\n            <select class=\"erp-control\" [(ngModel)]=\"durationMinutes\">\n              @for (duration of durationOptions; track duration) {\n                <option [value]=\"duration\">{{ duration }} minutes</option>\n              }\n            </select>\n          </label>\n          <label>\n            <span>To time</span>\n            <input\n              class=\"erp-control\"\n              [value]=\"\n                calculatedEndTime() === '\u2014' ? 'Calculated automatically' : calculatedEndTime()\n              \"\n              readonly\n            />\n          </label>\n\n          <section class=\"erp-period-preview\">\n            <h3>Timing preview</h3>\n            <div>\n              <span\n                ><small>Start</small><strong>{{ startTime || '\u2014' }}</strong></span\n              >\n              <svg lucideArrowRight size=\"18\"></svg>\n              <span\n                ><small>Duration</small><strong>{{ durationMinutes }} min</strong></span\n              >\n              <svg lucideArrowRight size=\"18\"></svg>\n              <span\n                ><small>End</small><strong>{{ calculatedEndTime() }}</strong></span\n              >\n            </div>\n            <p>\n              <svg lucideInfo size=\"17\"></svg> End time is calculated from start time and duration.\n            </p>\n          </section>\n          <div class=\"erp-period-conflict-note\">\n            <svg lucideClock3 size=\"17\"></svg> Conflicts will be checked before saving.\n          </div>\n          <footer class=\"erp-drawer__footer\">\n            <button class=\"erp-button erp-button--secondary\" type=\"button\" (click)=\"closeDrawer()\">\n              Cancel\n            </button>\n            <button\n              class=\"erp-button erp-button--primary\"\n              type=\"button\"\n              [disabled]=\"!formValid() || saving()\"\n              (click)=\"save()\"\n            >\n              {{ saving() ? 'Saving\u2026' : 'Save period configuration' }}\n            </button>\n          </footer>\n        </div>\n      } @else {\n        <div class=\"erp-drawer__body erp-period-detail\">\n          <section class=\"erp-period-time-card\">\n            <strong>{{ period.startTime }}</strong>\n            <svg lucideArrowRight size=\"27\"></svg>\n            <strong>{{ period.endTime }}</strong>\n            <span>{{ period.durationMinutes }} minutes</span>\n          </section>\n          <section class=\"erp-timetable-detail-card\">\n            <h3><svg lucideCalendarDays size=\"19\"></svg> Period details</h3>\n            <dl>\n              <div>\n                <dt>Period type</dt>\n                <dd>{{ period.periodType === 'break' ? 'Break' : 'Lecture' }}</dd>\n              </div>\n              <div>\n                <dt>From time</dt>\n                <dd>{{ period.startTime }}</dd>\n              </div>\n              <div>\n                <dt>To time</dt>\n                <dd>{{ period.endTime }}</dd>\n              </div>\n              <div>\n                <dt>Duration</dt>\n                <dd>{{ period.durationMinutes }} minutes</dd>\n              </div>\n            </dl>\n          </section>\n          <div class=\"erp-period-success\">\n            <svg lucideCheck size=\"18\"></svg> No timing conflict detected.\n          </div>\n          <button class=\"erp-period-clear\" type=\"button\" (click)=\"clearSelected()\">\n            <svg lucideTrash2 size=\"18\"></svg> Clear configuration\n          </button>\n          <footer class=\"erp-drawer__footer\">\n            <button class=\"erp-button erp-button--secondary\" type=\"button\" (click)=\"closeDrawer()\">\n              Close\n            </button>\n            <button class=\"erp-button erp-button--primary\" type=\"button\" (click)=\"editSelected()\">\n              <svg lucidePencil size=\"18\"></svg> Edit configuration\n            </button>\n          </footer>\n        </div>\n      }\n    </aside>\n  </div>\n}\n" }]
    }], () => [], { closeScopeDropdown: [{
            type: HostListener,
            args: ['document:click', ['$event']]
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(TimetablePeriodsComponent, { className: "TimetablePeriodsComponent", filePath: "frontend/src/app/features/admin/academics/timetable-periods.component.ts", lineNumber: 76 }); })();
