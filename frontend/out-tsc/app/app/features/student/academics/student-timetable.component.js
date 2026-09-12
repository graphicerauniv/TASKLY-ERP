import { ChangeDetectionStrategy, Component, DestroyRef, HostListener, computed, inject, signal, } from '@angular/core';
import { TitleCasePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { LucideArrowLeft, LucideBell, LucideBookOpen, LucideCalendarCheck, LucideChevronLeft, LucideChevronRight, LucideClock3, LucideCoffee, LucideDownload, LucideGraduationCap, LucideInfo, LucideMapPin, LucideSearch, LucideRefreshCw, LucideSlidersHorizontal, LucideUserRound, LucideX, } from '@lucide/angular';
import { ApiService } from '../../../core/api.service';
import { StudentMobileBottomNavComponent } from '../dashboard/components/student-mobile-bottom-nav/student-mobile-bottom-nav.component';
import { StudentSessionService } from '../shared/services/student-session.service';
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
const _forTrack0 = ($index, $item) => $item.name;
const _forTrack1 = ($index, $item) => $item._id;
function StudentTimetableComponent_Conditional_23_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "section", 12);
    i0.ɵɵelement(1, "span");
    i0.ɵɵelementStart(2, "strong");
    i0.ɵɵtext(3, "Loading your published timetable...");
    i0.ɵɵelementEnd()();
} }
function StudentTimetableComponent_Conditional_24_Template(rf, ctx) { if (rf & 1) {
    const _r1 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "section", 13)(1, "strong");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "button", 15);
    i0.ɵɵlistener("click", function StudentTimetableComponent_Conditional_24_Template_button_click_3_listener() { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.load()); });
    i0.ɵɵtext(4, "Try again");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r1.error());
} }
function StudentTimetableComponent_Conditional_25_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "section", 12);
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(1, "svg", 16);
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(2, "strong");
    i0.ɵɵtext(3, "No published timetable is available");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "p");
    i0.ɵɵtext(5, "Your schedule will appear here after the academic office publishes it.");
    i0.ɵɵelementEnd()();
} }
function StudentTimetableComponent_Conditional_26_For_36_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "th")(1, "strong");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "span");
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const day_r4 = ctx.$implicit;
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵclassProp("current", ctx_r1.isToday(day_r4.date));
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(day_r4.name);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate2("", ctx_r1.dayNumber(day_r4.date), " ", ctx_r1.monthShort(day_r4.date));
} }
function StudentTimetableComponent_Conditional_26_For_39_For_4_Conditional_0_Conditional_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 45);
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(1, "svg", 48);
    i0.ɵɵtext(2, "Break");
    i0.ɵɵelementEnd();
} }
function StudentTimetableComponent_Conditional_26_For_39_For_4_Conditional_0_Conditional_3_Conditional_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "small");
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(1, "svg", 51);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    i0.ɵɵnextContext(2);
    const entry_r6 = i0.ɵɵreadContextLet(0);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(entry_r6.facultyName);
} }
function StudentTimetableComponent_Conditional_26_For_39_For_4_Conditional_0_Conditional_3_Conditional_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "small");
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(1, "svg", 52);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    i0.ɵɵnextContext(2);
    const entry_r6 = i0.ɵɵreadContextLet(0);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(entry_r6.roomName);
} }
function StudentTimetableComponent_Conditional_26_For_39_For_4_Conditional_0_Conditional_3_Conditional_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "i", 50);
    i0.ɵɵtext(1, "Now");
    i0.ɵɵelementEnd();
} }
function StudentTimetableComponent_Conditional_26_For_39_For_4_Conditional_0_Conditional_3_Conditional_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "i");
    i0.ɵɵtext(1, "Next");
    i0.ɵɵelementEnd();
} }
function StudentTimetableComponent_Conditional_26_For_39_For_4_Conditional_0_Conditional_3_Conditional_10_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "em");
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(1, "svg", 53);
    i0.ɵɵelementEnd();
} }
function StudentTimetableComponent_Conditional_26_For_39_For_4_Conditional_0_Conditional_3_Template(rf, ctx) { if (rf & 1) {
    const _r5 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 49);
    i0.ɵɵlistener("click", function StudentTimetableComponent_Conditional_26_For_39_For_4_Conditional_0_Conditional_3_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r5); i0.ɵɵnextContext(); const entry_r6 = i0.ɵɵreadContextLet(0); const ctx_r1 = i0.ɵɵnextContext(4); return i0.ɵɵresetView(ctx_r1.openClass(entry_r6)); });
    i0.ɵɵelementStart(1, "span")(2, "strong");
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "b");
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd()();
    i0.ɵɵconditionalCreate(6, StudentTimetableComponent_Conditional_26_For_39_For_4_Conditional_0_Conditional_3_Conditional_6_Template, 3, 1, "small");
    i0.ɵɵconditionalCreate(7, StudentTimetableComponent_Conditional_26_For_39_For_4_Conditional_0_Conditional_3_Conditional_7_Template, 3, 1, "small");
    i0.ɵɵconditionalCreate(8, StudentTimetableComponent_Conditional_26_For_39_For_4_Conditional_0_Conditional_3_Conditional_8_Template, 2, 0, "i", 50)(9, StudentTimetableComponent_Conditional_26_For_39_For_4_Conditional_0_Conditional_3_Conditional_9_Template, 2, 0, "i");
    i0.ɵɵconditionalCreate(10, StudentTimetableComponent_Conditional_26_For_39_For_4_Conditional_0_Conditional_3_Conditional_10_Template, 2, 0, "em");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    i0.ɵɵnextContext();
    const entry_r6 = i0.ɵɵreadContextLet(0);
    const day_r7 = i0.ɵɵnextContext().$implicit;
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(entry_r6.subjectName);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(entry_r6.subjectCode || "");
    i0.ɵɵadvance();
    i0.ɵɵconditional(ctx_r1.preferences().showFaculty ? 6 : -1);
    i0.ɵɵadvance();
    i0.ɵɵconditional(ctx_r1.preferences().showRooms && entry_r6.roomName ? 7 : -1);
    i0.ɵɵadvance();
    i0.ɵɵconditional(ctx_r1.isLive(entry_r6, day_r7) ? 8 : ctx_r1.isNext(entry_r6) ? 9 : -1);
    i0.ɵɵadvance(2);
    i0.ɵɵconditional(ctx_r1.hasReminder(entry_r6) ? 10 : -1);
} }
function StudentTimetableComponent_Conditional_26_For_39_For_4_Conditional_0_Conditional_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 47);
    i0.ɵɵtext(1, "-");
    i0.ɵɵelementEnd();
} }
function StudentTimetableComponent_Conditional_26_For_39_For_4_Conditional_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵdeclareLet(0);
    i0.ɵɵelementStart(1, "td");
    i0.ɵɵconditionalCreate(2, StudentTimetableComponent_Conditional_26_For_39_For_4_Conditional_0_Conditional_2_Template, 3, 0, "span", 45)(3, StudentTimetableComponent_Conditional_26_For_39_For_4_Conditional_0_Conditional_3_Template, 11, 6, "button", 46)(4, StudentTimetableComponent_Conditional_26_For_39_For_4_Conditional_0_Conditional_4_Template, 2, 0, "span", 47);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const day_r7 = i0.ɵɵnextContext().$implicit;
    const period_r8 = i0.ɵɵnextContext().$implicit;
    const ctx_r1 = i0.ɵɵnextContext(2);
    const entry_r9 = i0.ɵɵstoreLet(ctx_r1.entryFor(day_r7, period_r8));
    i0.ɵɵadvance();
    i0.ɵɵclassProp("break", period_r8.periodType === "break")("next-cell", ctx_r1.isNext(entry_r9))("live-cell", ctx_r1.isLive(entry_r9, day_r7));
    i0.ɵɵattribute("rowspan", ctx_r1.span(entry_r9));
    i0.ɵɵadvance();
    i0.ɵɵconditional(period_r8.periodType === "break" ? 2 : entry_r9 ? 3 : 4);
} }
function StudentTimetableComponent_Conditional_26_For_39_For_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵconditionalCreate(0, StudentTimetableComponent_Conditional_26_For_39_For_4_Conditional_0_Template, 5, 9, "td", 44);
} if (rf & 2) {
    const day_r7 = ctx.$implicit;
    const period_r8 = i0.ɵɵnextContext().$implicit;
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵconditional(!ctx_r1.covered(day_r7, period_r8) ? 0 : -1);
} }
function StudentTimetableComponent_Conditional_26_For_39_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "tr")(1, "th");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵrepeaterCreate(3, StudentTimetableComponent_Conditional_26_For_39_For_4_Template, 1, 1, null, null, _forTrack0);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const period_r8 = ctx.$implicit;
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate2("", period_r8.startTime, " - ", period_r8.endTime);
    i0.ɵɵadvance();
    i0.ɵɵrepeater(ctx_r1.gridDays());
} }
function StudentTimetableComponent_Conditional_26_For_55_Template(rf, ctx) { if (rf & 1) {
    const _r10 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 15);
    i0.ɵɵlistener("click", function StudentTimetableComponent_Conditional_26_For_55_Template_button_click_0_listener() { const day_r11 = i0.ɵɵrestoreView(_r10).$implicit; const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.selectDay(day_r11)); });
    i0.ɵɵelementStart(1, "span");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "strong");
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const day_r11 = ctx.$implicit;
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵclassProp("active", ctx_r1.selectedDay().name === day_r11.name);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(day_r11.short);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r1.dayNumber(day_r11.date));
} }
function StudentTimetableComponent_Conditional_26_Conditional_56_For_12_Conditional_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td")(1, "span", 45);
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(2, "svg", 48);
    i0.ɵɵtext(3, "Break");
    i0.ɵɵelementEnd()();
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(4, "td");
    i0.ɵɵtext(5, "-");
    i0.ɵɵelementEnd();
} }
function StudentTimetableComponent_Conditional_26_Conditional_56_For_12_Conditional_5_Conditional_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "small");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    i0.ɵɵnextContext(2);
    const entry_r13 = i0.ɵɵreadContextLet(0);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(entry_r13.facultyName);
} }
function StudentTimetableComponent_Conditional_26_Conditional_56_For_12_Conditional_5_Conditional_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "i");
    i0.ɵɵtext(1, "Next");
    i0.ɵɵelementEnd();
} }
function StudentTimetableComponent_Conditional_26_Conditional_56_For_12_Conditional_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td")(1, "span", 56)(2, "strong");
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "small");
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd();
    i0.ɵɵconditionalCreate(6, StudentTimetableComponent_Conditional_26_Conditional_56_For_12_Conditional_5_Conditional_6_Template, 2, 1, "small");
    i0.ɵɵconditionalCreate(7, StudentTimetableComponent_Conditional_26_Conditional_56_For_12_Conditional_5_Conditional_7_Template, 2, 0, "i");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(8, "td")(9, "span", 57);
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(10, "svg", 52);
    i0.ɵɵtext(11);
    i0.ɵɵpipe(12, "titlecase");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    i0.ɵɵnextContext();
    const entry_r13 = i0.ɵɵreadContextLet(0);
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(entry_r13.subjectName);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(entry_r13.subjectCode || "");
    i0.ɵɵadvance();
    i0.ɵɵconditional(ctx_r1.preferences().showFaculty ? 6 : -1);
    i0.ɵɵadvance();
    i0.ɵɵconditional(ctx_r1.isNext(entry_r13) ? 7 : -1);
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(ctx_r1.preferences().showRooms ? entry_r13.roomName || "Not assigned" : i0.ɵɵpipeBind1(12, 5, entry_r13.classType));
} }
function StudentTimetableComponent_Conditional_26_Conditional_56_For_12_Conditional_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td")(1, "span", 58);
    i0.ɵɵtext(2, "Free period");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(3, "td");
    i0.ɵɵtext(4, "-");
    i0.ɵɵelementEnd();
} }
function StudentTimetableComponent_Conditional_26_Conditional_56_For_12_Template(rf, ctx) { if (rf & 1) {
    const _r12 = i0.ɵɵgetCurrentView();
    i0.ɵɵdeclareLet(0);
    i0.ɵɵelementStart(1, "tr", 55);
    i0.ɵɵlistener("click", function StudentTimetableComponent_Conditional_26_Conditional_56_For_12_Template_tr_click_1_listener() { i0.ɵɵrestoreView(_r12); const entry_r13 = i0.ɵɵreadContextLet(0); const ctx_r1 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(entry_r13 ? ctx_r1.openClass(entry_r13) : null); });
    i0.ɵɵelementStart(2, "th");
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵconditionalCreate(4, StudentTimetableComponent_Conditional_26_Conditional_56_For_12_Conditional_4_Template, 6, 0)(5, StudentTimetableComponent_Conditional_26_Conditional_56_For_12_Conditional_5_Template, 13, 7)(6, StudentTimetableComponent_Conditional_26_Conditional_56_For_12_Conditional_6_Template, 5, 0);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const period_r14 = ctx.$implicit;
    const ctx_r1 = i0.ɵɵnextContext(3);
    const day_r15 = ctx_r1.selectedDay() || ctx_r1.weekDays()[0];
    const entry_r16 = i0.ɵɵstoreLet(ctx_r1.entryFor(day_r15, period_r14));
    i0.ɵɵadvance();
    i0.ɵɵclassProp("break", period_r14.periodType === "break")("next-row", ctx_r1.isNext(entry_r16));
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate2("", period_r14.startTime, " - ", period_r14.endTime);
    i0.ɵɵadvance();
    i0.ɵɵconditional(period_r14.periodType === "break" ? 4 : entry_r16 ? 5 : 6);
} }
function StudentTimetableComponent_Conditional_26_Conditional_56_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "section", 37)(1, "table")(2, "thead")(3, "tr")(4, "th");
    i0.ɵɵtext(5, "Time");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "th");
    i0.ɵɵtext(7, "Subject & faculty");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "th");
    i0.ɵɵtext(9, "Room");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(10, "tbody");
    i0.ɵɵrepeaterCreate(11, StudentTimetableComponent_Conditional_26_Conditional_56_For_12_Template, 7, 8, "tr", 54, _forTrack1);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(11);
    i0.ɵɵrepeater(ctx_r1.periods());
} }
function StudentTimetableComponent_Conditional_26_Conditional_57_For_2_For_8_Conditional_1_Conditional_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtext(0);
} if (rf & 2) {
    i0.ɵɵnextContext(2);
    const entry_r18 = i0.ɵɵreadContextLet(0);
    i0.ɵɵtextInterpolate1(" \u00B7 ", entry_r18.roomName || "Room not assigned", " ");
} }
function StudentTimetableComponent_Conditional_26_Conditional_57_For_2_For_8_Conditional_1_Template(rf, ctx) { if (rf & 1) {
    const _r17 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 15);
    i0.ɵɵlistener("click", function StudentTimetableComponent_Conditional_26_Conditional_57_For_2_For_8_Conditional_1_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r17); i0.ɵɵnextContext(); const entry_r18 = i0.ɵɵreadContextLet(0); const ctx_r1 = i0.ɵɵnextContext(4); return i0.ɵɵresetView(ctx_r1.openClass(entry_r18)); });
    i0.ɵɵelementStart(1, "time");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "span")(4, "strong");
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "small");
    i0.ɵɵtext(7);
    i0.ɵɵconditionalCreate(8, StudentTimetableComponent_Conditional_26_Conditional_57_For_2_For_8_Conditional_1_Conditional_8_Template, 1, 1);
    i0.ɵɵelementEnd()();
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(9, "svg", 24);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    i0.ɵɵnextContext();
    const entry_r18 = i0.ɵɵreadContextLet(0);
    const ctx_r1 = i0.ɵɵnextContext(4);
    i0.ɵɵclassProp("next", ctx_r1.isNext(entry_r18));
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(entry_r18.startTime);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(entry_r18.subjectName);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1("", entry_r18.subjectCode, " ");
    i0.ɵɵadvance();
    i0.ɵɵconditional(ctx_r1.preferences().showRooms ? 8 : -1);
} }
function StudentTimetableComponent_Conditional_26_Conditional_57_For_2_For_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵdeclareLet(0);
    i0.ɵɵconditionalCreate(1, StudentTimetableComponent_Conditional_26_Conditional_57_For_2_For_8_Conditional_1_Template, 10, 6, "button", 59);
} if (rf & 2) {
    const period_r19 = ctx.$implicit;
    const day_r20 = i0.ɵɵnextContext().$implicit;
    const entry_r21 = i0.ɵɵstoreLet(i0.ɵɵnextContext(3).entryFor(day_r20, period_r19));
    i0.ɵɵadvance();
    i0.ɵɵconditional(entry_r21 ? 1 : -1);
} }
function StudentTimetableComponent_Conditional_26_Conditional_57_For_2_Conditional_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p");
    i0.ɵɵtext(1, "No classes");
    i0.ɵɵelementEnd();
} }
function StudentTimetableComponent_Conditional_26_Conditional_57_For_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "article")(1, "header")(2, "strong");
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "span");
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(6, "div");
    i0.ɵɵrepeaterCreate(7, StudentTimetableComponent_Conditional_26_Conditional_57_For_2_For_8_Template, 2, 2, null, null, _forTrack1);
    i0.ɵɵconditionalCreate(9, StudentTimetableComponent_Conditional_26_Conditional_57_For_2_Conditional_9_Template, 2, 0, "p");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const day_r20 = ctx.$implicit;
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(day_r20.short);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r1.dayNumber(day_r20.date));
    i0.ɵɵadvance(2);
    i0.ɵɵrepeater(ctx_r1.periods());
    i0.ɵɵadvance(2);
    i0.ɵɵconditional(!ctx_r1.hasClasses(day_r20) ? 9 : -1);
} }
function StudentTimetableComponent_Conditional_26_Conditional_57_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "section", 38);
    i0.ɵɵrepeaterCreate(1, StudentTimetableComponent_Conditional_26_Conditional_57_For_2_Template, 10, 3, "article", null, _forTrack0);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵrepeater(ctx_r1.weekDays());
} }
function StudentTimetableComponent_Conditional_26_Template(rf, ctx) { if (rf & 1) {
    const _r3 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "section", 17)(1, "section", 18)(2, "div", 19)(3, "button", 15);
    i0.ɵɵlistener("click", function StudentTimetableComponent_Conditional_26_Template_button_click_3_listener() { i0.ɵɵrestoreView(_r3); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.view.set("today")); });
    i0.ɵɵtext(4, " Today");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "button", 15);
    i0.ɵɵlistener("click", function StudentTimetableComponent_Conditional_26_Template_button_click_5_listener() { i0.ɵɵrestoreView(_r3); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.view.set("week")); });
    i0.ɵɵtext(6, " Week ");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(7, "div", 20)(8, "button", 21);
    i0.ɵɵlistener("click", function StudentTimetableComponent_Conditional_26_Template_button_click_8_listener() { i0.ɵɵrestoreView(_r3); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.changeWeek(-1)); });
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(9, "svg", 22);
    i0.ɵɵelementEnd();
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(10, "strong");
    i0.ɵɵtext(11);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(12, "button", 23);
    i0.ɵɵlistener("click", function StudentTimetableComponent_Conditional_26_Template_button_click_12_listener() { i0.ɵɵrestoreView(_r3); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.changeWeek(1)); });
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(13, "svg", 24);
    i0.ɵɵelementEnd();
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(14, "button", 25);
    i0.ɵɵlistener("click", function StudentTimetableComponent_Conditional_26_Template_button_click_14_listener() { i0.ɵɵrestoreView(_r3); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.goToCurrentWeek()); });
    i0.ɵɵtext(15, " Current week ");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(16, "div", 26);
    i0.ɵɵtext(17, " >");
    i0.ɵɵelementStart(18, "button", 27);
    i0.ɵɵlistener("click", function StudentTimetableComponent_Conditional_26_Template_button_click_18_listener() { i0.ɵɵrestoreView(_r3); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.load(true)); });
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(19, "svg", 8);
    i0.ɵɵelementEnd();
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(20, "button", 15);
    i0.ɵɵlistener("click", function StudentTimetableComponent_Conditional_26_Template_button_click_20_listener() { i0.ɵɵrestoreView(_r3); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.openCustomize()); });
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(21, "svg", 28);
    i0.ɵɵtext(22, "Customize");
    i0.ɵɵelementEnd();
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(23, "button", 15);
    i0.ɵɵlistener("click", function StudentTimetableComponent_Conditional_26_Template_button_click_23_listener() { i0.ɵɵrestoreView(_r3); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.openSubjects()); });
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(24, "svg", 29);
    i0.ɵɵtext(25, "Subjects");
    i0.ɵɵelementEnd();
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(26, "button", 15);
    i0.ɵɵlistener("click", function StudentTimetableComponent_Conditional_26_Template_button_click_26_listener() { i0.ɵɵrestoreView(_r3); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.downloadOpen.set(true)); });
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(27, "svg", 11);
    i0.ɵɵtext(28, "Download PDF ");
    i0.ɵɵelementEnd()()();
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(29, "section", 30)(30, "table")(31, "thead")(32, "tr")(33, "th");
    i0.ɵɵtext(34, "Time");
    i0.ɵɵelementEnd();
    i0.ɵɵrepeaterCreate(35, StudentTimetableComponent_Conditional_26_For_36_Template, 5, 5, "th", 31, _forTrack0);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(37, "tbody");
    i0.ɵɵrepeaterCreate(38, StudentTimetableComponent_Conditional_26_For_39_Template, 5, 2, "tr", null, _forTrack1);
    i0.ɵɵelementEnd()()()();
    i0.ɵɵelementStart(40, "div", 32);
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(41, "svg", 16);
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(42, "strong");
    i0.ɵɵtext(43);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(44, "span");
    i0.ɵɵtext(45);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(46, "button", 33);
    i0.ɵɵlistener("click", function StudentTimetableComponent_Conditional_26_Template_button_click_46_listener() { i0.ɵɵrestoreView(_r3); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.openCustomize()); });
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(47, "svg", 28);
    i0.ɵɵelementEnd()();
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(48, "div", 34)(49, "button", 15);
    i0.ɵɵlistener("click", function StudentTimetableComponent_Conditional_26_Template_button_click_49_listener() { i0.ɵɵrestoreView(_r3); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.view.set("today")); });
    i0.ɵɵtext(50, " Today");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(51, "button", 15);
    i0.ɵɵlistener("click", function StudentTimetableComponent_Conditional_26_Template_button_click_51_listener() { i0.ɵɵrestoreView(_r3); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.view.set("week")); });
    i0.ɵɵtext(52, " Week ");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(53, "nav", 35);
    i0.ɵɵrepeaterCreate(54, StudentTimetableComponent_Conditional_26_For_55_Template, 5, 4, "button", 36, _forTrack0);
    i0.ɵɵelementEnd();
    i0.ɵɵconditionalCreate(56, StudentTimetableComponent_Conditional_26_Conditional_56_Template, 13, 0, "section", 37)(57, StudentTimetableComponent_Conditional_26_Conditional_57_Template, 3, 0, "section", 38);
    i0.ɵɵelementStart(58, "footer", 39)(59, "span");
    i0.ɵɵelement(60, "i", 40);
    i0.ɵɵtext(61, "Lecture");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(62, "span");
    i0.ɵɵelement(63, "i", 41);
    i0.ɵɵtext(64, "Break");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(65, "span");
    i0.ɵɵelement(66, "i", 42);
    i0.ɵɵtext(67, "Next class");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(68, "p");
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(69, "svg", 43);
    i0.ɵɵtext(70, "Tap a class to view details.");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(3);
    i0.ɵɵclassProp("active", ctx_r1.view() === "today");
    i0.ɵɵadvance(2);
    i0.ɵɵclassProp("active", ctx_r1.view() === "week");
    i0.ɵɵadvance(6);
    i0.ɵɵtextInterpolate(ctx_r1.weekLabel());
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("disabled", ctx_r1.isCurrentWeek());
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("disabled", ctx_r1.refreshing());
    i0.ɵɵadvance(11);
    i0.ɵɵclassProp("today-view", ctx_r1.view() === "today");
    i0.ɵɵadvance(6);
    i0.ɵɵrepeater(ctx_r1.gridDays());
    i0.ɵɵadvance(3);
    i0.ɵɵrepeater(ctx_r1.periods());
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(ctx_r1.weekLabel());
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r1.isCurrentWeek() ? "Current week" : "Selected week");
    i0.ɵɵadvance(4);
    i0.ɵɵclassProp("active", ctx_r1.view() === "today");
    i0.ɵɵadvance(2);
    i0.ɵɵclassProp("active", ctx_r1.view() === "week");
    i0.ɵɵadvance(3);
    i0.ɵɵrepeater(ctx_r1.weekDays());
    i0.ɵɵadvance(2);
    i0.ɵɵconditional(ctx_r1.view() === "today" ? 56 : 57);
} }
function StudentTimetableComponent_Conditional_27_Template(rf, ctx) { if (rf & 1) {
    const _r22 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 14);
    i0.ɵɵtext(1);
    i0.ɵɵelementStart(2, "button", 60);
    i0.ɵɵlistener("click", function StudentTimetableComponent_Conditional_27_Template_button_click_2_listener() { i0.ɵɵrestoreView(_r22); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.actionMessage.set("")); });
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(3, "svg", 61);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r1.actionMessage());
} }
function StudentTimetableComponent_Conditional_28_Conditional_16_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "i");
    i0.ɵɵtext(1, "Next");
    i0.ɵɵelementEnd();
} }
function StudentTimetableComponent_Conditional_28_Template(rf, ctx) { if (rf & 1) {
    const _r23 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 62);
    i0.ɵɵlistener("click", function StudentTimetableComponent_Conditional_28_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r23); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.selectedEntry.set(null)); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(1, "aside", 63)(2, "header")(3, "span");
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(4, "svg", 29);
    i0.ɵɵelementEnd();
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(5, "div")(6, "h2");
    i0.ɵɵtext(7);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "small");
    i0.ɵɵtext(9);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(10, "button", 64);
    i0.ɵɵlistener("click", function StudentTimetableComponent_Conditional_28_Template_button_click_10_listener() { i0.ɵɵrestoreView(_r23); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.selectedEntry.set(null)); });
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(11, "svg", 61);
    i0.ɵɵelementEnd()();
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(12, "div", 65);
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(13, "svg", 16);
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(14, "strong");
    i0.ɵɵtext(15);
    i0.ɵɵelementEnd();
    i0.ɵɵconditionalCreate(16, StudentTimetableComponent_Conditional_28_Conditional_16_Template, 2, 0, "i");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(17, "dl")(18, "div")(19, "dt");
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(20, "svg", 51);
    i0.ɵɵtext(21, "Faculty");
    i0.ɵɵelementEnd();
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(22, "dd");
    i0.ɵɵtext(23);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(24, "div")(25, "dt");
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(26, "svg", 52);
    i0.ɵɵtext(27, "Room");
    i0.ɵɵelementEnd();
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(28, "dd");
    i0.ɵɵtext(29);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(30, "div")(31, "dt");
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(32, "svg", 66);
    i0.ɵɵtext(33, "Class type");
    i0.ɵɵelementEnd();
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(34, "dd");
    i0.ɵɵtext(35);
    i0.ɵɵpipe(36, "titlecase");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(37, "div")(38, "dt");
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(39, "svg", 67);
    i0.ɵɵtext(40, "Repeats");
    i0.ɵɵelementEnd();
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(41, "dd");
    i0.ɵɵtext(42);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(43, "a", 68);
    i0.ɵɵlistener("click", function StudentTimetableComponent_Conditional_28_Template_a_click_43_listener() { const entry_r24 = i0.ɵɵrestoreView(_r23); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.viewRelatedSubject(entry_r24)); });
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(44, "svg", 29);
    i0.ɵɵtext(45, "View subject details");
    i0.ɵɵelementEnd();
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(46, "footer")(47, "button", 15);
    i0.ɵɵlistener("click", function StudentTimetableComponent_Conditional_28_Template_button_click_47_listener() { i0.ɵɵrestoreView(_r23); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.selectedEntry.set(null)); });
    i0.ɵɵtext(48, "Close");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(49, "button", 69);
    i0.ɵɵlistener("click", function StudentTimetableComponent_Conditional_28_Template_button_click_49_listener() { const entry_r24 = i0.ɵɵrestoreView(_r23); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.toggleReminder(entry_r24)); });
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(50, "svg", 53);
    i0.ɵɵtext(51);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const entry_r24 = ctx;
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(7);
    i0.ɵɵtextInterpolate(entry_r24.subjectName);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(entry_r24.subjectCode || "Subject");
    i0.ɵɵadvance(6);
    i0.ɵɵtextInterpolate3("", entry_r24.day, " \u00B7 ", entry_r24.startTime, " - ", entry_r24.endTime);
    i0.ɵɵadvance();
    i0.ɵɵconditional(ctx_r1.isNext(entry_r24) ? 16 : -1);
    i0.ɵɵadvance(7);
    i0.ɵɵtextInterpolate(entry_r24.facultyName);
    i0.ɵɵadvance(6);
    i0.ɵɵtextInterpolate(entry_r24.roomName || "Not assigned");
    i0.ɵɵadvance(6);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(36, 11, entry_r24.classType));
    i0.ɵɵadvance(7);
    i0.ɵɵtextInterpolate1("Every ", entry_r24.day);
    i0.ɵɵadvance(9);
    i0.ɵɵtextInterpolate1("", ctx_r1.hasReminder(entry_r24) ? "Remove reminder" : "Add reminder", " ");
} }
function StudentTimetableComponent_Conditional_29_For_22_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "article");
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(1, "svg", 29);
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(2, "div")(3, "strong");
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "small");
    i0.ɵɵtext(6);
    i0.ɵɵpipe(7, "titlecase");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "small");
    i0.ɵɵtext(9);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(10, "b");
    i0.ɵɵtext(11);
    i0.ɵɵelementEnd();
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(12, "svg", 24);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const subject_r26 = ctx.$implicit;
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(subject_r26.name);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate2("", subject_r26.code, " \u00B7 ", i0.ɵɵpipeBind1(7, 5, subject_r26.subjectType));
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(ctx_r1.subjectFaculty(subject_r26));
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(subject_r26.credits);
} }
function StudentTimetableComponent_Conditional_29_ForEmpty_23_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p");
    i0.ɵɵtext(1, "No matching subjects found.");
    i0.ɵɵelementEnd();
} }
function StudentTimetableComponent_Conditional_29_Template(rf, ctx) { if (rf & 1) {
    const _r25 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 70);
    i0.ɵɵlistener("click", function StudentTimetableComponent_Conditional_29_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r25); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.subjectsOpen.set(false)); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(1, "aside", 71)(2, "header")(3, "span");
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(4, "svg", 29);
    i0.ɵɵelementEnd();
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(5, "div")(6, "h2");
    i0.ɵɵtext(7, "My Subjects");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "small");
    i0.ɵɵtext(9);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(10, "button", 64);
    i0.ɵɵlistener("click", function StudentTimetableComponent_Conditional_29_Template_button_click_10_listener() { i0.ɵɵrestoreView(_r25); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.subjectsOpen.set(false)); });
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(11, "svg", 61);
    i0.ɵɵelementEnd()();
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(12, "label", 72);
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(13, "svg", 73);
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(14, "input", 74);
    i0.ɵɵlistener("ngModelChange", function StudentTimetableComponent_Conditional_29_Template_input_ngModelChange_14_listener($event) { i0.ɵɵrestoreView(_r25); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.subjectSearch.set($event)); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(15, "div", 75)(16, "div", 76)(17, "span");
    i0.ɵɵtext(18, "Subject");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(19, "span");
    i0.ɵɵtext(20, "Credits");
    i0.ɵɵelementEnd()();
    i0.ɵɵrepeaterCreate(21, StudentTimetableComponent_Conditional_29_For_22_Template, 13, 7, "article", null, _forTrack1, false, StudentTimetableComponent_Conditional_29_ForEmpty_23_Template, 2, 0, "p");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(24, "footer")(25, "button", 15);
    i0.ɵɵlistener("click", function StudentTimetableComponent_Conditional_29_Template_button_click_25_listener() { i0.ɵɵrestoreView(_r25); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.subjectsOpen.set(false)); });
    i0.ɵɵtext(26, "Close");
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(9);
    i0.ɵɵtextInterpolate1("", ctx_r1.subjects().length, " subjects in this timetable");
    i0.ɵɵadvance(5);
    i0.ɵɵproperty("ngModel", ctx_r1.subjectSearch());
    i0.ɵɵadvance(7);
    i0.ɵɵrepeater(ctx_r1.filteredSubjects());
} }
function StudentTimetableComponent_Conditional_30_For_55_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 84);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const minutes_r28 = ctx.$implicit;
    i0.ɵɵproperty("value", minutes_r28);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1("", minutes_r28, " minutes before");
} }
function StudentTimetableComponent_Conditional_30_Template(rf, ctx) { if (rf & 1) {
    const _r27 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 77);
    i0.ɵɵlistener("click", function StudentTimetableComponent_Conditional_30_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r27); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.customizeOpen.set(false)); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(1, "aside", 78)(2, "header")(3, "span");
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(4, "svg", 28);
    i0.ɵɵelementEnd();
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(5, "div")(6, "h2");
    i0.ɵɵtext(7, "Customize timetable");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "small");
    i0.ɵɵtext(9, "Choose how your schedule is displayed");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(10, "button", 64);
    i0.ɵɵlistener("click", function StudentTimetableComponent_Conditional_30_Template_button_click_10_listener() { i0.ɵɵrestoreView(_r27); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.customizeOpen.set(false)); });
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(11, "svg", 61);
    i0.ɵɵelementEnd()();
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(12, "div", 79)(13, "section")(14, "div")(15, "strong");
    i0.ɵɵtext(16, "Default view");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(17, "small");
    i0.ɵɵtext(18, "Open the timetable in your preferred view");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(19, "div", 80)(20, "button", 15);
    i0.ɵɵlistener("click", function StudentTimetableComponent_Conditional_30_Template_button_click_20_listener() { i0.ɵɵrestoreView(_r27); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.updatePreference("defaultView", "auto")); });
    i0.ɵɵtext(21, " Auto ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(22, "button", 15);
    i0.ɵɵlistener("click", function StudentTimetableComponent_Conditional_30_Template_button_click_22_listener() { i0.ɵɵrestoreView(_r27); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.updatePreference("defaultView", "today")); });
    i0.ɵɵtext(23, " Today");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(24, "button", 15);
    i0.ɵɵlistener("click", function StudentTimetableComponent_Conditional_30_Template_button_click_24_listener() { i0.ɵɵrestoreView(_r27); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.updatePreference("defaultView", "week")); });
    i0.ɵɵtext(25, " Week ");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(26, "label")(27, "span")(28, "strong");
    i0.ɵɵtext(29, "Show faculty");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(30, "small");
    i0.ɵɵtext(31, "Display the faculty name on class cards");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(32, "input", 81);
    i0.ɵɵlistener("change", function StudentTimetableComponent_Conditional_30_Template_input_change_32_listener($event) { i0.ɵɵrestoreView(_r27); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.updatePreference("showFaculty", $event.target.checked)); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(33, "label")(34, "span")(35, "strong");
    i0.ɵɵtext(36, "Show rooms");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(37, "small");
    i0.ɵɵtext(38, "Display classroom and lab locations");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(39, "input", 81);
    i0.ɵɵlistener("change", function StudentTimetableComponent_Conditional_30_Template_input_change_39_listener($event) { i0.ɵɵrestoreView(_r27); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.updatePreference("showRooms", $event.target.checked)); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(40, "label")(41, "span")(42, "strong");
    i0.ɵɵtext(43, "Compact schedule");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(44, "small");
    i0.ɵɵtext(45, "Fit more periods on the screen");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(46, "input", 81);
    i0.ɵɵlistener("change", function StudentTimetableComponent_Conditional_30_Template_input_change_46_listener($event) { i0.ɵɵrestoreView(_r27); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.updatePreference("compactMode", $event.target.checked)); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(47, "label", 82)(48, "span")(49, "strong");
    i0.ɵɵtext(50, "Reminder time");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(51, "small");
    i0.ɵɵtext(52, "Used when you add a class reminder");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(53, "select", 83);
    i0.ɵɵlistener("change", function StudentTimetableComponent_Conditional_30_Template_select_change_53_listener($event) { i0.ɵɵrestoreView(_r27); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.updatePreference("reminderMinutes", +$event.target.value)); });
    i0.ɵɵrepeaterCreate(54, StudentTimetableComponent_Conditional_30_For_55_Template, 2, 2, "option", 84, i0.ɵɵrepeaterTrackByIdentity);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(56, "footer")(57, "button", 15);
    i0.ɵɵlistener("click", function StudentTimetableComponent_Conditional_30_Template_button_click_57_listener() { i0.ɵɵrestoreView(_r27); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.customizeOpen.set(false)); });
    i0.ɵɵtext(58, "Cancel");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(59, "button", 85);
    i0.ɵɵlistener("click", function StudentTimetableComponent_Conditional_30_Template_button_click_59_listener() { i0.ɵɵrestoreView(_r27); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.savePreferences()); });
    i0.ɵɵtext(60);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(20);
    i0.ɵɵclassProp("active", ctx_r1.preferencesDraft().defaultView === "auto");
    i0.ɵɵadvance(2);
    i0.ɵɵclassProp("active", ctx_r1.preferencesDraft().defaultView === "today");
    i0.ɵɵadvance(2);
    i0.ɵɵclassProp("active", ctx_r1.preferencesDraft().defaultView === "week");
    i0.ɵɵadvance(8);
    i0.ɵɵproperty("checked", ctx_r1.preferencesDraft().showFaculty);
    i0.ɵɵadvance(7);
    i0.ɵɵproperty("checked", ctx_r1.preferencesDraft().showRooms);
    i0.ɵɵadvance(7);
    i0.ɵɵproperty("checked", ctx_r1.preferencesDraft().compactMode);
    i0.ɵɵadvance(7);
    i0.ɵɵproperty("value", ctx_r1.preferencesDraft().reminderMinutes);
    i0.ɵɵadvance();
    i0.ɵɵrepeater(ctx_r1.reminderMinuteOptions);
    i0.ɵɵadvance(5);
    i0.ɵɵproperty("disabled", ctx_r1.savingPreferences());
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r1.savingPreferences() ? "Saving..." : "Save preferences", " ");
} }
function StudentTimetableComponent_Conditional_31_For_25_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "th");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const day_r30 = ctx.$implicit;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(day_r30.short);
} }
function StudentTimetableComponent_Conditional_31_For_28_For_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const day_r31 = ctx.$implicit;
    const period_r32 = i0.ɵɵnextContext().$implicit;
    const entry_r33 = i0.ɵɵnextContext(2).entryFor(day_r31, period_r32);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", period_r32.periodType === "break" ? "Break" : (entry_r33 == null ? null : entry_r33.subjectCode) || "-", " ");
} }
function StudentTimetableComponent_Conditional_31_For_28_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "tr")(1, "th");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵrepeaterCreate(3, StudentTimetableComponent_Conditional_31_For_28_For_4_Template, 2, 1, "td", null, _forTrack0);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const period_r32 = ctx.$implicit;
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(period_r32.startTime);
    i0.ɵɵadvance();
    i0.ɵɵrepeater(ctx_r1.weekDays());
} }
function StudentTimetableComponent_Conditional_31_Template(rf, ctx) { if (rf & 1) {
    const _r29 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 86);
    i0.ɵɵlistener("click", function StudentTimetableComponent_Conditional_31_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r29); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.downloadOpen.set(false)); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(1, "section", 87)(2, "header")(3, "span");
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(4, "svg", 11);
    i0.ɵɵelementEnd();
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(5, "div")(6, "h2");
    i0.ɵɵtext(7, "Download timetable");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "small");
    i0.ɵɵtext(9, "Review your print-ready timetable");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(10, "button", 64);
    i0.ɵɵlistener("click", function StudentTimetableComponent_Conditional_31_Template_button_click_10_listener() { i0.ɵɵrestoreView(_r29); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.downloadOpen.set(false)); });
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(11, "svg", 61);
    i0.ɵɵelementEnd()();
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(12, "div", 88)(13, "div", 89)(14, "div", 90)(15, "strong");
    i0.ɵɵtext(16, "GEU \u00B7 Student Timetable");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(17, "small");
    i0.ɵɵtext(18);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(19, "table")(20, "thead")(21, "tr")(22, "th");
    i0.ɵɵtext(23, "Time");
    i0.ɵɵelementEnd();
    i0.ɵɵrepeaterCreate(24, StudentTimetableComponent_Conditional_31_For_25_Template, 2, 1, "th", null, _forTrack0);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(26, "tbody");
    i0.ɵɵrepeaterCreate(27, StudentTimetableComponent_Conditional_31_For_28_Template, 5, 1, "tr", null, _forTrack1);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(29, "aside")(30, "div", 91);
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(31, "svg", 11);
    i0.ɵɵelementEnd();
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(32, "h3");
    i0.ɵɵtext(33);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(34, "p");
    i0.ɵɵtext(35, "PDF \u00B7 A4 landscape");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(36, "dl")(37, "div")(38, "dt");
    i0.ɵɵtext(39, "Week");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(40, "dd");
    i0.ɵɵtext(41);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(42, "div")(43, "dt");
    i0.ɵɵtext(44, "Periods");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(45, "dd");
    i0.ɵɵtext(46);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(47, "div")(48, "dt");
    i0.ɵɵtext(49, "Status");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(50, "dd");
    i0.ɵɵtext(51, "Ready to download");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(52, "div")(53, "dt");
    i0.ɵɵtext(54, "Updated");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(55, "dd");
    i0.ɵɵtext(56);
    i0.ɵɵelementEnd()()()()();
    i0.ɵɵelementStart(57, "label", 92)(58, "input", 81);
    i0.ɵɵlistener("change", function StudentTimetableComponent_Conditional_31_Template_input_change_58_listener($event) { i0.ɵɵrestoreView(_r29); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.includeDetails.set($event.target.checked)); });
    i0.ɵɵelementEnd();
    i0.ɵɵtext(59, "Include subject codes, faculty and rooms");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(60, "footer")(61, "button", 15);
    i0.ɵɵlistener("click", function StudentTimetableComponent_Conditional_31_Template_button_click_61_listener() { i0.ɵɵrestoreView(_r29); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.downloadOpen.set(false)); });
    i0.ɵɵtext(62, "Cancel");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(63, "button", 85);
    i0.ɵɵlistener("click", function StudentTimetableComponent_Conditional_31_Template_button_click_63_listener() { i0.ɵɵrestoreView(_r29); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.downloadPdf()); });
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(64, "svg", 11);
    i0.ɵɵtext(65);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    let tmp_4_0;
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(18);
    i0.ɵɵtextInterpolate(ctx_r1.weekLabel());
    i0.ɵɵadvance(6);
    i0.ɵɵrepeater(ctx_r1.weekDays());
    i0.ɵɵadvance(3);
    i0.ɵɵrepeater(ctx_r1.periods());
    i0.ɵɵadvance(6);
    i0.ɵɵtextInterpolate1("GEU_Timetable_Sem", ((tmp_4_0 = ctx_r1.session.profile()) == null ? null : tmp_4_0.currentSemester) || 1, ".pdf");
    i0.ɵɵadvance(8);
    i0.ɵɵtextInterpolate(ctx_r1.weekLabel());
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(ctx_r1.periods().length);
    i0.ɵɵadvance(10);
    i0.ɵɵtextInterpolate(ctx_r1.updatedLabel());
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("checked", ctx_r1.includeDetails());
    i0.ɵɵadvance(5);
    i0.ɵɵproperty("disabled", ctx_r1.downloadBusy());
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1("", ctx_r1.downloadBusy() ? "Generating..." : "Download PDF", " ");
} }
export class StudentTimetableComponent {
    api = inject(ApiService);
    destroyRef = inject(DestroyRef);
    preferencesInitialized = false;
    session = inject(StudentSessionService);
    items = signal([], ...(ngDevMode ? [{ debugName: "items" }] : /* istanbul ignore next */ []));
    subjects = signal([], ...(ngDevMode ? [{ debugName: "subjects" }] : /* istanbul ignore next */ []));
    structure = signal(null, ...(ngDevMode ? [{ debugName: "structure" }] : /* istanbul ignore next */ []));
    periods = signal([], ...(ngDevMode ? [{ debugName: "periods" }] : /* istanbul ignore next */ []));
    reminders = signal([], ...(ngDevMode ? [{ debugName: "reminders" }] : /* istanbul ignore next */ []));
    publishedAt = signal(null, ...(ngDevMode ? [{ debugName: "publishedAt" }] : /* istanbul ignore next */ []));
    loading = signal(true, ...(ngDevMode ? [{ debugName: "loading" }] : /* istanbul ignore next */ []));
    refreshing = signal(false, ...(ngDevMode ? [{ debugName: "refreshing" }] : /* istanbul ignore next */ []));
    error = signal('', ...(ngDevMode ? [{ debugName: "error" }] : /* istanbul ignore next */ []));
    now = signal(new Date(), ...(ngDevMode ? [{ debugName: "now" }] : /* istanbul ignore next */ []));
    lastSyncedAt = signal(null, ...(ngDevMode ? [{ debugName: "lastSyncedAt" }] : /* istanbul ignore next */ []));
    view = signal(typeof window !== 'undefined' && window.innerWidth < 768 ? 'today' : 'week', ...(ngDevMode ? [{ debugName: "view" }] : /* istanbul ignore next */ []));
    selectedDate = signal(this.startOfDay(new Date()), ...(ngDevMode ? [{ debugName: "selectedDate" }] : /* istanbul ignore next */ []));
    selectedEntry = signal(null, ...(ngDevMode ? [{ debugName: "selectedEntry" }] : /* istanbul ignore next */ []));
    subjectsOpen = signal(false, ...(ngDevMode ? [{ debugName: "subjectsOpen" }] : /* istanbul ignore next */ []));
    customizeOpen = signal(false, ...(ngDevMode ? [{ debugName: "customizeOpen" }] : /* istanbul ignore next */ []));
    downloadOpen = signal(false, ...(ngDevMode ? [{ debugName: "downloadOpen" }] : /* istanbul ignore next */ []));
    subjectSearch = signal('', ...(ngDevMode ? [{ debugName: "subjectSearch" }] : /* istanbul ignore next */ []));
    downloadBusy = signal(false, ...(ngDevMode ? [{ debugName: "downloadBusy" }] : /* istanbul ignore next */ []));
    savingPreferences = signal(false, ...(ngDevMode ? [{ debugName: "savingPreferences" }] : /* istanbul ignore next */ []));
    actionMessage = signal('', ...(ngDevMode ? [{ debugName: "actionMessage" }] : /* istanbul ignore next */ []));
    includeDetails = signal(true, ...(ngDevMode ? [{ debugName: "includeDetails" }] : /* istanbul ignore next */ []));
    weekDayNames = [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
        'Sunday',
    ];
    reminderMinuteOptions = [5, 10, 15, 30, 60];
    preferences = signal({
        defaultView: 'auto',
        showFaculty: true,
        showRooms: true,
        compactMode: false,
        reminderMinutes: 15,
    }, ...(ngDevMode ? [{ debugName: "preferences" }] : /* istanbul ignore next */ []));
    preferencesDraft = signal({ ...this.preferences() }, ...(ngDevMode ? [{ debugName: "preferencesDraft" }] : /* istanbul ignore next */ []));
    weekStart = computed(() => this.startOfWeek(this.selectedDate()), ...(ngDevMode ? [{ debugName: "weekStart" }] : /* istanbul ignore next */ []));
    weekDays = computed(() => {
        const configured = this.workingDays();
        return configured.map((name) => {
            const date = new Date(this.weekStart());
            const index = Math.max(0, this.weekDayNames.indexOf(name));
            date.setDate(date.getDate() + index);
            return { name, short: name.slice(0, 3), date };
        });
    }, ...(ngDevMode ? [{ debugName: "weekDays" }] : /* istanbul ignore next */ []));
    selectedDay = computed(() => this.weekDays().find((day) => this.dateKey(day.date) === this.dateKey(this.selectedDate())) ||
        this.weekDays()[0], ...(ngDevMode ? [{ debugName: "selectedDay" }] : /* istanbul ignore next */ []));
    gridDays = computed(() => this.view() === 'today' && this.selectedDay() ? [this.selectedDay()] : this.weekDays(), ...(ngDevMode ? [{ debugName: "gridDays" }] : /* istanbul ignore next */ []));
    filteredSubjects = computed(() => {
        const query = this.subjectSearch().trim().toLowerCase();
        return this.subjects().filter((subject) => !query || `${subject.name} ${subject.code}`.toLowerCase().includes(query));
    }, ...(ngDevMode ? [{ debugName: "filteredSubjects" }] : /* istanbul ignore next */ []));
    nextClass = computed(() => {
        const now = this.now();
        const candidates = [];
        for (let offset = 0; offset < 14; offset += 1) {
            const date = new Date(now);
            date.setDate(now.getDate() + offset);
            const dayName = date.toLocaleDateString('en-US', { weekday: 'long' });
            for (const entry of this.items().filter((item) => item.day === dayName)) {
                const starts = this.atTime(date, entry.startTime);
                if (starts > now && this.entryApplies(entry, date))
                    candidates.push({ entry, starts });
            }
        }
        return (candidates.sort((left, right) => left.starts.getTime() - right.starts.getTime())[0]?.entry ||
            null);
    }, ...(ngDevMode ? [{ debugName: "nextClass" }] : /* istanbul ignore next */ []));
    constructor() {
        this.load();
        if (typeof window !== 'undefined') {
            const clock = window.setInterval(() => this.now.set(new Date()), 30_000);
            const refresh = window.setInterval(() => this.load(true), 60_000);
            const refetch = () => this.load(true);
            window.addEventListener('focus', refetch);
            this.destroyRef.onDestroy(() => {
                window.clearInterval(clock);
                window.clearInterval(refresh);
                window.removeEventListener('focus', refetch);
            });
        }
    }
    closeOverlays() {
        this.selectedEntry.set(null);
        this.subjectsOpen.set(false);
        this.customizeOpen.set(false);
        this.downloadOpen.set(false);
    }
    load(silent = false) {
        const token = this.session.token();
        if (!token) {
            this.error.set('Please sign in again to view your timetable.');
            this.loading.set(false);
            return;
        }
        if (silent) {
            if (this.refreshing())
                return;
            this.refreshing.set(true);
        }
        else {
            this.loading.set(true);
            this.error.set('');
        }
        this.api.studentTimetable(token).subscribe({
            next: (result) => {
                this.items.set(result.items || []);
                this.subjects.set(result.subjects || []);
                this.structure.set(result.structure || null);
                this.periods.set(result.periods || []);
                this.reminders.set(result.reminders || []);
                this.publishedAt.set(result.publishedAt || null);
                if (result.preferences) {
                    this.preferences.set(result.preferences);
                    if (!this.customizeOpen())
                        this.preferencesDraft.set({ ...result.preferences });
                    if (!this.preferencesInitialized) {
                        this.view.set(this.preferredView(result.preferences.defaultView));
                        this.preferencesInitialized = true;
                    }
                }
                this.lastSyncedAt.set(new Date(result.serverTime || Date.now()));
                this.loading.set(false);
                this.refreshing.set(false);
            },
            error: () => {
                if (!silent)
                    this.error.set('Your timetable is temporarily unavailable.');
                else
                    this.actionMessage.set('Could not refresh the timetable. Please try again.');
                this.loading.set(false);
                this.refreshing.set(false);
            },
        });
    }
    workingDays() {
        const days = this.structure()?.workingDays?.filter((day) => this.weekDayNames.includes(day)) || [];
        return days.length ? days : this.weekDayNames.slice(0, 6);
    }
    entryFor(day, period) {
        return (this.items().find((entry) => entry.day === day.name &&
            (entry.timetablePeriodIds?.[0] || entry.timetablePeriodId) === period._id &&
            this.entryApplies(entry, day.date)) || null);
    }
    covered(day, period) {
        return this.items().some((entry) => entry.day === day.name &&
            (entry.timetablePeriodIds || []).slice(1).includes(period._id) &&
            this.entryApplies(entry, day.date));
    }
    span(entry) {
        return Math.max(1, entry?.timetablePeriodIds?.length || 1);
    }
    isNext(entry) {
        return Boolean(entry && this.nextClass()?._id === entry._id);
    }
    isLive(entry, day) {
        if (!entry || !this.entryApplies(entry, day.date))
            return false;
        const now = this.now();
        return (now >= this.atTime(day.date, entry.startTime) && now < this.atTime(day.date, entry.endTime));
    }
    hasReminder(entry) {
        return Boolean(entry &&
            this.reminders().some((item) => item.timetableEntryId === entry._id && item.isActive));
    }
    toggleReminder(entry) {
        const token = this.session.token();
        if (!token)
            return;
        this.actionMessage.set('');
        if (this.hasReminder(entry)) {
            this.api.deleteStudentTimetableReminder(token, entry._id).subscribe({
                next: () => {
                    this.reminders.set(this.reminders().filter((item) => item.timetableEntryId !== entry._id));
                    this.actionMessage.set('Reminder removed.');
                },
                error: () => this.actionMessage.set('Could not update the reminder. Please try again.'),
            });
            return;
        }
        this.api
            .saveStudentTimetableReminder(token, entry._id, this.preferences().reminderMinutes)
            .subscribe({
            next: ({ reminder }) => {
                this.reminders.set([
                    ...this.reminders().filter((item) => item.timetableEntryId !== entry._id),
                    reminder,
                ]);
                this.actionMessage.set(`Reminder set for ${this.preferences().reminderMinutes} minutes before class.`);
            },
            error: () => this.actionMessage.set('Could not save the reminder. Please try again.'),
        });
    }
    changeWeek(offset) {
        const date = new Date(this.selectedDate());
        date.setDate(date.getDate() + offset * 7);
        this.selectedDate.set(date);
    }
    goToCurrentWeek() {
        this.selectedDate.set(this.startOfDay(new Date()));
    }
    selectDay(day) {
        this.selectedDate.set(day.date);
        this.view.set('today');
    }
    isCurrentWeek() {
        return this.dateKey(this.weekStart()) === this.dateKey(this.startOfWeek(new Date()));
    }
    weekLabel() {
        const days = this.weekDays();
        if (!days.length)
            return '';
        const start = days[0].date;
        const end = days[days.length - 1].date;
        const startMonth = start.toLocaleDateString('en-GB', { month: 'short' });
        const endMonth = end.toLocaleDateString('en-GB', { month: 'short' });
        return startMonth === endMonth
            ? `${start.getDate()} - ${end.getDate()} ${end.toLocaleDateString('en-GB', { month: 'long' })}`
            : `${start.getDate()} ${startMonth} - ${end.getDate()} ${endMonth}`;
    }
    dayNumber(date) {
        return date.getDate();
    }
    monthShort(date) {
        return date.toLocaleDateString('en-GB', { month: 'short' });
    }
    isToday(date) {
        return this.dateKey(date) === this.dateKey(new Date());
    }
    hasClasses(day) {
        return this.items().some((entry) => entry.day === day.name && this.entryApplies(entry, day.date));
    }
    openClass(entry) {
        this.actionMessage.set('');
        this.selectedEntry.set(entry);
    }
    openSubjects() {
        this.subjectSearch.set('');
        this.subjectsOpen.set(true);
    }
    openCustomize() {
        this.preferencesDraft.set({ ...this.preferences() });
        this.customizeOpen.set(true);
    }
    updatePreference(key, value) {
        this.preferencesDraft.update((current) => ({ ...current, [key]: value }));
    }
    savePreferences() {
        const token = this.session.token();
        if (!token || this.savingPreferences())
            return;
        this.savingPreferences.set(true);
        this.api.saveStudentTimetablePreferences(token, this.preferencesDraft()).subscribe({
            next: ({ preferences }) => {
                this.preferences.set(preferences);
                this.view.set(this.preferredView(preferences.defaultView));
                this.customizeOpen.set(false);
                this.savingPreferences.set(false);
                this.actionMessage.set('Timetable preferences saved.');
            },
            error: () => {
                this.savingPreferences.set(false);
                this.actionMessage.set('Could not save timetable preferences.');
            },
        });
    }
    lastSyncedLabel() {
        const value = this.lastSyncedAt();
        return value
            ? `Updated ${value.toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit' })}`
            : 'Checking for updates';
    }
    preferredView(value) {
        if (value !== 'auto')
            return value;
        return typeof window !== 'undefined' && window.innerWidth < 768 ? 'today' : 'week';
    }
    viewRelatedSubject(entry) {
        this.selectedEntry.set(null);
        this.subjectSearch.set(entry.subjectName);
        this.subjectsOpen.set(true);
    }
    subjectFaculty(subject) {
        return ([
            ...new Set(this.items()
                .filter((entry) => entry.subjectId === subject._id)
                .map((entry) => entry.facultyName)),
        ]
            .filter(Boolean)
            .join(', ') || 'Faculty to be announced');
    }
    downloadPdf() {
        const token = this.session.token();
        if (!token)
            return;
        this.downloadBusy.set(true);
        this.actionMessage.set('');
        this.api
            .studentTimetablePdf(token, this.dateKey(this.weekStart()), this.includeDetails())
            .subscribe({
            next: (file) => {
                const link = document.createElement('a');
                link.href = URL.createObjectURL(file);
                link.download = `GEU_Timetable_Sem${this.session.profile()?.currentSemester || 1}.pdf`;
                link.click();
                setTimeout(() => URL.revokeObjectURL(link.href), 1000);
                this.downloadBusy.set(false);
                this.downloadOpen.set(false);
                this.actionMessage.set('Timetable PDF downloaded.');
            },
            error: () => {
                this.downloadBusy.set(false);
                this.actionMessage.set('Could not generate the PDF. Please try again.');
            },
        });
    }
    updatedLabel() {
        if (!this.publishedAt())
            return 'Latest published timetable';
        return new Date(this.publishedAt()).toLocaleString('en-IN', {
            dateStyle: 'medium',
            timeStyle: 'short',
        });
    }
    entryApplies(entry, date) {
        const key = this.dateKey(date);
        return ((!entry.effectiveFrom || key >= entry.effectiveFrom.slice(0, 10)) &&
            (!entry.effectiveTo || key <= entry.effectiveTo.slice(0, 10)));
    }
    startOfDay(value) {
        return new Date(value.getFullYear(), value.getMonth(), value.getDate());
    }
    startOfWeek(value) {
        const date = this.startOfDay(value);
        const day = date.getDay();
        date.setDate(date.getDate() - (day === 0 ? 6 : day - 1));
        return date;
    }
    atTime(date, time) {
        const [hours, minutes] = time.split(':').map(Number);
        return new Date(date.getFullYear(), date.getMonth(), date.getDate(), hours || 0, minutes || 0);
    }
    dateKey(value) {
        const year = value.getFullYear();
        const month = String(value.getMonth() + 1).padStart(2, '0');
        const day = String(value.getDate()).padStart(2, '0');
        return `${year}-${month}-${day}`;
    }
    static ɵfac = function StudentTimetableComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || StudentTimetableComponent)(); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: StudentTimetableComponent, selectors: [["erp-student-timetable"]], hostBindings: function StudentTimetableComponent_HostBindings(rf, ctx) { if (rf & 1) {
            i0.ɵɵlistener("keydown.escape", function StudentTimetableComponent_keydown_escape_HostBindingHandler() { return ctx.closeOverlays(); }, i0.ɵɵresolveDocument);
        } }, decls: 33, vars: 12, consts: [["aria-labelledby", "timetable-title", 1, "timetable-page"], [1, "timetable-heading"], ["aria-label", "Breadcrumb"], ["routerLink", "/student/academics"], ["routerLink", "/student/academics", "aria-label", "Back to Academics", 1, "mobile-back"], ["lucideArrowLeft", ""], ["id", "timetable-title"], [1, "sync-status"], ["lucideRefreshCw", ""], ["src", "/assets/student/academics/timetable.png", "width", "320", "height", "320", "alt", "", "aria-hidden", "true"], ["type", "button", 1, "mobile-download", 3, "click", "disabled"], ["lucideDownload", ""], [1, "timetable-state"], ["role", "alert", 1, "timetable-state"], ["role", "status", 1, "timetable-toast"], ["type", "button", 3, "click"], ["lucideCalendarCheck", ""], [1, "timetable-board"], [1, "week-toolbar"], ["aria-label", "Timetable view", 1, "view-switch"], [1, "week-navigation"], ["type", "button", "aria-label", "Previous week", 3, "click"], ["lucideChevronLeft", ""], ["type", "button", "aria-label", "Next week", 3, "click"], ["lucideChevronRight", ""], ["type", "button", 1, "current-week", 3, "click", "disabled"], [1, "toolbar-actions"], ["type", "button", "aria-label", "Refresh timetable", "title", "Refresh timetable", 1, "refresh-action", 3, "click", "disabled"], ["lucideSlidersHorizontal", ""], ["lucideBookOpen", ""], [1, "desktop-grid"], [3, "current"], [1, "mobile-week-summary"], ["type", "button", "aria-label", "Customize timetable", 3, "click"], [1, "mobile-view-switch", "view-switch"], ["aria-label", "Select timetable day", 1, "day-tabs"], ["type", "button", 3, "active"], [1, "mobile-day-table"], [1, "mobile-week-list"], [1, "timetable-legend"], [1, "lecture"], [1, "break-key"], [1, "next-key"], ["lucideInfo", ""], [3, "break", "next-cell", "live-cell"], [1, "break-label"], ["type", "button", 1, "class-card"], [1, "free-slot"], ["lucideCoffee", ""], ["type", "button", 1, "class-card", 3, "click"], [1, "live"], ["lucideUserRound", ""], ["lucideMapPin", ""], ["lucideBell", ""], [3, "break", "next-row"], [3, "click"], [1, "mobile-subject"], [1, "room"], [1, "free-period"], ["type", "button", 3, "next"], ["type", "button", "aria-label", "Dismiss", 3, "click"], ["lucideX", ""], ["type", "button", "aria-label", "Close class details", 1, "sheet-backdrop", 3, "click"], ["aria-label", "Class details", 1, "detail-sheet"], ["type", "button", "aria-label", "Close", 3, "click"], [1, "class-time"], ["lucideGraduationCap", ""], ["lucideClock3", ""], ["href", "javascript:void(0)", 1, "subject-link", 3, "click"], ["type", "button", 1, "primary", 3, "click"], ["type", "button", "aria-label", "Close subjects", 1, "sheet-backdrop", 3, "click"], ["aria-label", "My subjects", 1, "detail-sheet", "subjects-sheet"], [1, "subject-search"], ["lucideSearch", ""], ["type", "search", "placeholder", "Search subjects...", 3, "ngModelChange", "ngModel"], [1, "subject-list"], [1, "subject-list-head"], ["type", "button", "aria-label", "Close timetable customization", 1, "sheet-backdrop", 3, "click"], ["aria-label", "Customize timetable", 1, "detail-sheet", "customize-sheet"], [1, "preference-list"], [1, "preference-segment"], ["type", "checkbox", 3, "change", "checked"], [1, "reminder-preference"], [3, "change", "value"], [3, "value"], ["type", "button", 1, "primary", 3, "click", "disabled"], ["type", "button", "aria-label", "Close download preview", 1, "sheet-backdrop", 3, "click"], ["aria-label", "Download timetable", 1, "download-dialog"], [1, "download-layout"], [1, "pdf-preview"], [1, "pdf-head"], [1, "file-icon"], [1, "include-details"]], template: function StudentTimetableComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "main", 0)(1, "header", 1)(2, "div")(3, "nav", 2)(4, "a", 3);
            i0.ɵɵtext(5, "Academics");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(6, "span");
            i0.ɵɵtext(7, "/");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(8, "strong");
            i0.ɵɵtext(9, "Timetable");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(10, "a", 4);
            i0.ɵɵnamespaceSVG();
            i0.ɵɵelement(11, "svg", 5);
            i0.ɵɵelementEnd();
            i0.ɵɵnamespaceHTML();
            i0.ɵɵelementStart(12, "h1", 6);
            i0.ɵɵtext(13, "My Timetable");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(14, "p");
            i0.ɵɵtext(15, " Your timetable is based on your current group, section, set and semester. ");
            i0.ɵɵelementStart(16, "span", 7);
            i0.ɵɵnamespaceSVG();
            i0.ɵɵelement(17, "svg", 8);
            i0.ɵɵtext(18);
            i0.ɵɵelementEnd()()();
            i0.ɵɵnamespaceHTML();
            i0.ɵɵelement(19, "img", 9);
            i0.ɵɵelementStart(20, "button", 10);
            i0.ɵɵlistener("click", function StudentTimetableComponent_Template_button_click_20_listener() { return ctx.downloadOpen.set(true); });
            i0.ɵɵnamespaceSVG();
            i0.ɵɵelement(21, "svg", 11);
            i0.ɵɵtext(22, "Download PDF ");
            i0.ɵɵelementEnd()();
            i0.ɵɵconditionalCreate(23, StudentTimetableComponent_Conditional_23_Template, 4, 0, "section", 12)(24, StudentTimetableComponent_Conditional_24_Template, 5, 1, "section", 13)(25, StudentTimetableComponent_Conditional_25_Template, 6, 0, "section", 12)(26, StudentTimetableComponent_Conditional_26_Template, 71, 16);
            i0.ɵɵconditionalCreate(27, StudentTimetableComponent_Conditional_27_Template, 4, 1, "div", 14);
            i0.ɵɵconditionalCreate(28, StudentTimetableComponent_Conditional_28_Template, 52, 13);
            i0.ɵɵconditionalCreate(29, StudentTimetableComponent_Conditional_29_Template, 27, 3);
            i0.ɵɵconditionalCreate(30, StudentTimetableComponent_Conditional_30_Template, 61, 12);
            i0.ɵɵconditionalCreate(31, StudentTimetableComponent_Conditional_31_Template, 66, 8);
            i0.ɵɵelementEnd();
            i0.ɵɵnamespaceHTML();
            i0.ɵɵelement(32, "erp-student-mobile-bottom-nav");
        } if (rf & 2) {
            let tmp_6_0;
            i0.ɵɵclassProp("compact-view", ctx.preferences().compactMode);
            i0.ɵɵadvance(16);
            i0.ɵɵclassProp("refreshing", ctx.refreshing());
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate(ctx.lastSyncedLabel());
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("disabled", !ctx.items().length);
            i0.ɵɵadvance(3);
            i0.ɵɵconditional(ctx.loading() ? 23 : ctx.error() ? 24 : !ctx.items().length ? 25 : 26);
            i0.ɵɵadvance(4);
            i0.ɵɵconditional(ctx.actionMessage() ? 27 : -1);
            i0.ɵɵadvance();
            i0.ɵɵconditional((tmp_6_0 = ctx.selectedEntry()) ? 28 : -1, tmp_6_0);
            i0.ɵɵadvance();
            i0.ɵɵconditional(ctx.subjectsOpen() ? 29 : -1);
            i0.ɵɵadvance();
            i0.ɵɵconditional(ctx.customizeOpen() ? 30 : -1);
            i0.ɵɵadvance();
            i0.ɵɵconditional(ctx.downloadOpen() ? 31 : -1);
        } }, dependencies: [FormsModule, i1.NgSelectOption, i1.ɵNgSelectMultipleOption, i1.DefaultValueAccessor, i1.NgControlStatus, i1.NgModel, RouterLink,
            StudentMobileBottomNavComponent,
            LucideArrowLeft,
            LucideBell,
            LucideBookOpen,
            LucideCalendarCheck,
            LucideChevronLeft,
            LucideChevronRight,
            LucideClock3,
            LucideCoffee,
            LucideDownload,
            LucideGraduationCap,
            LucideInfo,
            LucideMapPin,
            LucideRefreshCw,
            LucideSearch,
            LucideSlidersHorizontal,
            LucideUserRound,
            LucideX,
            TitleCasePipe], styles: ["[_nghost-%COMP%] {\n  display: block;\n  min-width: 0;\n}\n.timetable-page[_ngcontent-%COMP%] {\n  display: grid;\n  min-width: 0;\n  gap: 20px;\n  padding-bottom: 20px;\n  color: var(--student-color-text);\n}\nbutton[_ngcontent-%COMP%], \ninput[_ngcontent-%COMP%] {\n  font: inherit;\n}\n.timetable-heading[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  min-height: 112px;\n  align-items: center;\n  justify-content: space-between;\n}\n.timetable-heading[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 10px;\n  margin-bottom: 10px;\n  color: var(--student-color-text-secondary);\n  font-size: 13px;\n}\n.timetable-heading[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: var(--student-color-primary);\n  text-decoration: none;\n}\n.timetable-heading[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  margin: 0;\n  color: var(--student-timetable-navy-strong);\n  font-size: clamp(30px, 2.35vw, 38px);\n  font-weight: 850;\n  letter-spacing: -0.04em;\n}\n.timetable-heading[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 5px 0 0;\n  color: var(--student-color-text-secondary);\n}\n.sync-status[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 5px;\n  margin-left: 10px;\n  color: var(--student-color-primary-pressed);\n  font-size: 11px;\n  font-weight: 700;\n  white-space: nowrap;\n}\n.sync-status[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 13px;\n  height: 13px;\n}\n.sync-status.refreshing[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%], \n.refresh-action[_ngcontent-%COMP%]:disabled   svg[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_spin 800ms linear infinite;\n}\n.timetable-heading[_ngcontent-%COMP%]    > img[_ngcontent-%COMP%] {\n  width: 152px;\n  height: 116px;\n  object-fit: contain;\n  filter: drop-shadow(\n    0 12px 16px color-mix(in srgb, var(--student-color-primary) 12%, transparent)\n  );\n}\n.mobile-back[_ngcontent-%COMP%], \n.mobile-download[_ngcontent-%COMP%] {\n  display: none;\n}\n.timetable-board[_ngcontent-%COMP%] {\n  min-width: 0;\n  overflow: hidden;\n  padding: 14px 3px 3px;\n  border: 1px solid var(--student-color-border);\n  border-radius: 18px;\n  background: var(--student-color-surface);\n  box-shadow: var(--student-shadow-card);\n}\n.week-toolbar[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: auto 1fr auto;\n  align-items: center;\n  gap: 20px;\n  padding: 0 12px 16px;\n  border: 0;\n  border-radius: 0;\n  background: var(--student-color-surface);\n  box-shadow: none;\n}\n.view-switch[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  overflow: hidden;\n  border: 1px solid var(--student-color-primary-middle);\n  border-radius: 9px;\n  background: var(--student-color-surface);\n}\n.view-switch[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  min-width: 104px;\n  min-height: 48px;\n  border: 0;\n  color: var(--student-color-text-secondary);\n  background: var(--student-color-surface);\n  font-weight: 750;\n  cursor: pointer;\n  transition:\n    color 160ms ease,\n    background 160ms ease,\n    box-shadow 160ms ease;\n}\n.view-switch[_ngcontent-%COMP%]   button.active[_ngcontent-%COMP%] {\n  color: var(--student-color-text-inverse);\n  background: var(--student-color-primary);\n  box-shadow: var(--student-shadow-card);\n}\n.week-navigation[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 14px;\n}\n.week-navigation[_ngcontent-%COMP%]    > button[_ngcontent-%COMP%]:not(.current-week) {\n  display: grid;\n  width: 42px;\n  height: 42px;\n  place-items: center;\n  border: 1px solid var(--student-color-border);\n  border-radius: 10px;\n  color: var(--student-color-text);\n  background: var(--student-color-surface);\n  cursor: pointer;\n  transition:\n    transform 150ms ease,\n    border-color 150ms ease,\n    background 150ms ease;\n}\n.week-navigation[_ngcontent-%COMP%]    > button[_ngcontent-%COMP%]:not(.current-week):hover {\n  transform: translateY(-1px);\n  border-color: var(--student-color-primary-middle);\n  background: var(--student-color-primary-subtle);\n}\n.week-navigation[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 19px;\n}\n.week-navigation[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  min-width: 194px;\n  color: var(--student-timetable-navy-strong);\n  font-size: 16px;\n  font-weight: 800;\n  text-align: center;\n}\n.week-navigation[_ngcontent-%COMP%]   .current-week[_ngcontent-%COMP%] {\n  min-height: 42px;\n  padding: 0 14px;\n  border: 0;\n  border-radius: 9px;\n  color: var(--student-color-primary);\n  background: var(--student-color-primary-soft);\n  font-weight: 700;\n  cursor: pointer;\n}\n.week-navigation[_ngcontent-%COMP%]   .current-week[_ngcontent-%COMP%]:disabled {\n  color: var(--student-color-text-secondary);\n  cursor: default;\n}\n.toolbar-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 10px;\n}\n.toolbar-actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%], \n.mobile-download[_ngcontent-%COMP%] {\n  display: flex;\n  min-height: 44px;\n  align-items: center;\n  gap: 9px;\n  padding: 0 16px;\n  border: 1px solid var(--student-color-primary);\n  border-radius: 10px;\n  color: var(--student-color-primary-pressed);\n  background: var(--student-color-surface);\n  font-weight: 750;\n  cursor: pointer;\n  transition:\n    color 160ms ease,\n    background 160ms ease,\n    box-shadow 160ms ease,\n    transform 160ms ease;\n}\n.toolbar-actions[_ngcontent-%COMP%]   .refresh-action[_ngcontent-%COMP%] {\n  width: 44px;\n  padding: 0;\n  justify-content: center;\n}\n.toolbar-actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:disabled, \n.mobile-download[_ngcontent-%COMP%]:disabled {\n  color: var(--student-color-text-muted);\n  border-color: var(--student-color-border);\n  cursor: default;\n}\n.toolbar-actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover, \n.mobile-download[_ngcontent-%COMP%]:hover:not(:disabled) {\n  transform: translateY(-1px);\n  color: var(--student-color-text-inverse);\n  background: var(--student-color-primary);\n  box-shadow: var(--student-shadow-card);\n}\n.toolbar-actions[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%], \n.mobile-download[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 20px;\n}\n.mobile-week-summary[_ngcontent-%COMP%], \n.mobile-view-switch[_ngcontent-%COMP%], \n.day-tabs[_ngcontent-%COMP%], \n.mobile-day-table[_ngcontent-%COMP%], \n.mobile-week-list[_ngcontent-%COMP%] {\n  display: none;\n}\n.desktop-grid[_ngcontent-%COMP%] {\n  overflow: auto;\n  border: 1px solid var(--student-color-border);\n  border-radius: 13px;\n  background: var(--student-color-surface);\n  box-shadow: none;\n}\n.desktop-grid[_ngcontent-%COMP%]   table[_ngcontent-%COMP%] {\n  width: 100%;\n  min-width: 1080px;\n  border-collapse: collapse;\n  table-layout: fixed;\n}\n.desktop-grid.today-view[_ngcontent-%COMP%]   table[_ngcontent-%COMP%] {\n  min-width: 620px;\n}\n.desktop-grid[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], \n.desktop-grid[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  border-right: 1px solid var(--student-color-border);\n  border-bottom: 1px solid var(--student-color-border);\n}\n.desktop-grid[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:last-child    > *[_ngcontent-%COMP%] {\n  border-bottom: 0;\n}\n.desktop-grid[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%]:last-child {\n  border-right: 0;\n}\n.desktop-grid[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  height: 80px;\n  color: var(--student-color-text-inverse);\n  background: linear-gradient(\n    120deg,\n    var(--student-timetable-navy-strong),\n    var(--student-timetable-navy)\n  );\n  font-size: 14px;\n  letter-spacing: 0.015em;\n  text-transform: uppercase;\n}\n.desktop-grid[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:first-child {\n  width: 140px;\n}\n.desktop-grid[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%], \n.desktop-grid[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: block;\n}\n.desktop-grid[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  margin-top: 4px;\n  font-weight: 500;\n}\n.desktop-grid[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th.current[_ngcontent-%COMP%] {\n  box-shadow: inset 0 -5px 0 var(--student-timetable-current-line);\n}\n.desktop-grid[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]    > tr[_ngcontent-%COMP%]    > th[_ngcontent-%COMP%] {\n  width: 140px;\n  padding: 12px;\n  color: var(--student-color-text);\n  background: var(--student-color-surface-soft);\n  font-size: 15px;\n  font-weight: 800;\n  white-space: nowrap;\n}\n.desktop-grid[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  height: 92px;\n  padding: 6px;\n  vertical-align: middle;\n  background: var(--student-color-surface);\n}\n.desktop-grid[_ngcontent-%COMP%]   td.break[_ngcontent-%COMP%] {\n  background: repeating-linear-gradient(\n    135deg,\n    var(--student-timetable-break),\n    var(--student-timetable-break) 5px,\n    var(--student-color-surface-soft) 5px,\n    var(--student-color-surface-soft) 9px\n  );\n  text-align: center;\n}\n.desktop-grid[_ngcontent-%COMP%]   td.next-cell[_ngcontent-%COMP%] {\n  box-shadow: inset 0 0 0 1px var(--student-color-primary);\n}\n.desktop-grid[_ngcontent-%COMP%]   td.live-cell[_ngcontent-%COMP%] {\n  box-shadow: inset 0 0 0 2px var(--student-color-success);\n}\n.class-card[_ngcontent-%COMP%] {\n  position: relative;\n  display: grid;\n  width: 100%;\n  height: 100%;\n  min-height: 78px;\n  align-content: center;\n  gap: 6px;\n  padding: 8px 9px 8px 15px;\n  overflow: hidden;\n  border: 1px solid transparent;\n  border-radius: 8px;\n  color: var(--student-color-text);\n  background: linear-gradient(\n    120deg,\n    var(--student-color-primary-subtle),\n    var(--student-color-primary-soft)\n  );\n  text-align: left;\n  cursor: pointer;\n  transition:\n    transform 160ms ease,\n    border-color 160ms ease,\n    box-shadow 160ms ease,\n    background 160ms ease;\n}\n.class-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n  border-color: var(--student-color-primary-middle);\n  background: var(--student-color-primary-subtle);\n  box-shadow: var(--student-shadow-card);\n}\n.class-card[_ngcontent-%COMP%]::before {\n  position: absolute;\n  inset: 0 auto 0 0;\n  width: 4px;\n  background: var(--student-color-primary);\n  content: '';\n}\n.class-card[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 6px;\n}\n.class-card[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  overflow: hidden;\n  font-size: 14px;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.class-card[_ngcontent-%COMP%]   b[_ngcontent-%COMP%] {\n  padding: 3px 6px;\n  border-radius: 5px;\n  color: var(--student-color-primary-pressed);\n  background: var(--student-color-primary-soft);\n  font-size: 10px;\n}\n.class-card[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 5px;\n  color: var(--student-color-text-secondary);\n  font-size: 11px;\n}\n.class-card[_ngcontent-%COMP%]   small[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 14px;\n  height: 14px;\n}\n.class-card[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 6px;\n  right: 6px;\n  padding: 4px 7px;\n  border-radius: 5px;\n  color: var(--student-color-text-inverse);\n  background: var(--student-color-primary);\n  font-size: 9px;\n  font-style: normal;\n  text-transform: uppercase;\n}\n.class-card[_ngcontent-%COMP%]   i.live[_ngcontent-%COMP%] {\n  background: var(--student-color-success);\n}\n.class-card[_ngcontent-%COMP%]:has(i)    > span[_ngcontent-%COMP%] {\n  padding-right: 38px;\n}\n.class-card[_ngcontent-%COMP%]   em[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 7px;\n  bottom: 6px;\n  color: var(--student-color-primary);\n}\n.class-card[_ngcontent-%COMP%]   em[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 14px;\n}\n.break-label[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n  color: var(--student-color-text-secondary);\n  font-size: 13px;\n  font-weight: 750;\n  text-transform: uppercase;\n}\n.break-label[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 20px;\n}\n.free-slot[_ngcontent-%COMP%] {\n  display: block;\n  color: var(--student-color-text-muted);\n  text-align: center;\n}\n.timetable-legend[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 34px;\n  min-height: 68px;\n  padding: 14px 22px;\n  border: 1px solid var(--student-color-border);\n  border-radius: 14px;\n  background: var(--student-color-surface);\n  box-shadow: var(--student-shadow-card);\n}\n.timetable-legend[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 9px;\n  color: var(--student-color-text-secondary);\n  font-size: 13px;\n}\n.timetable-legend[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  display: block;\n  width: 21px;\n  height: 21px;\n  border-radius: 5px;\n}\n.timetable-legend[_ngcontent-%COMP%]   .lecture[_ngcontent-%COMP%] {\n  border-radius: 50%;\n  background: var(--student-color-primary);\n}\n.timetable-legend[_ngcontent-%COMP%]   .break-key[_ngcontent-%COMP%] {\n  border: 1px solid var(--student-color-border);\n  background: var(--student-timetable-break);\n}\n.timetable-legend[_ngcontent-%COMP%]   .next-key[_ngcontent-%COMP%] {\n  border: 1px solid var(--student-color-primary);\n  background: var(--student-color-surface);\n}\n.timetable-legend[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  margin: 0 0 0 auto;\n  color: var(--student-color-text-secondary);\n  font-size: 13px;\n}\n.timetable-legend[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 19px;\n}\n.compact-view[_ngcontent-%COMP%]   .desktop-grid[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  height: 64px;\n}\n.compact-view[_ngcontent-%COMP%]   .desktop-grid[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  height: 70px;\n}\n.compact-view[_ngcontent-%COMP%]   .class-card[_ngcontent-%COMP%] {\n  min-height: 58px;\n  gap: 3px;\n  padding-block: 5px;\n}\n.timetable-state[_ngcontent-%COMP%] {\n  display: grid;\n  min-height: 340px;\n  align-content: center;\n  justify-items: center;\n  gap: 12px;\n  padding: 24px;\n  border: 1px solid var(--student-color-border);\n  border-radius: 18px;\n  background: var(--student-color-surface);\n  text-align: center;\n}\n.timetable-state[_ngcontent-%COMP%]    > svg[_ngcontent-%COMP%] {\n  width: 46px;\n  height: 46px;\n  color: var(--student-color-primary);\n}\n.timetable-state[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  width: 46px;\n  height: 46px;\n  border: 4px solid var(--student-color-primary-soft);\n  border-top-color: var(--student-color-primary);\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin 800ms linear infinite;\n}\n.timetable-state[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  color: var(--student-color-text-secondary);\n}\n.timetable-state[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  padding: 9px 15px;\n  border: 1px solid var(--student-color-primary);\n  border-radius: 9px;\n  color: var(--student-color-primary);\n  background: var(--student-color-surface);\n}\n@keyframes _ngcontent-%COMP%_spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n.sheet-backdrop[_ngcontent-%COMP%] {\n  position: fixed;\n  z-index: var(--student-z-drawer);\n  inset: 0;\n  width: 100%;\n  height: 100%;\n  border: 0;\n  background: var(--student-color-overlay);\n}\n.detail-sheet[_ngcontent-%COMP%] {\n  position: fixed;\n  z-index: calc(var(--student-z-drawer) + 1);\n  top: 0;\n  right: 0;\n  display: flex;\n  width: min(460px, 100vw);\n  height: 100dvh;\n  flex-direction: column;\n  padding: 26px;\n  background: var(--student-color-surface);\n  box-shadow: var(--student-shadow-sidebar);\n  animation: _ngcontent-%COMP%_sheet-in var(--student-motion-sidebar) var(--student-ease-standard);\n}\n@keyframes _ngcontent-%COMP%_sheet-in {\n  from {\n    transform: translateX(100%);\n  }\n}\n.detail-sheet[_ngcontent-%COMP%]    > header[_ngcontent-%COMP%], \n.download-dialog[_ngcontent-%COMP%]    > header[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 64px 1fr 40px;\n  align-items: center;\n  gap: 14px;\n}\n.detail-sheet[_ngcontent-%COMP%]    > header[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%], \n.download-dialog[_ngcontent-%COMP%]    > header[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  display: grid;\n  width: 62px;\n  height: 62px;\n  place-items: center;\n  border-radius: 12px;\n  color: var(--student-color-primary);\n  background: var(--student-color-primary-soft);\n}\n.detail-sheet[_ngcontent-%COMP%]    > header[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%], \n.download-dialog[_ngcontent-%COMP%]    > header[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 31px;\n  height: 31px;\n}\n.detail-sheet[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], \n.download-dialog[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 24px;\n}\n.detail-sheet[_ngcontent-%COMP%]   header[_ngcontent-%COMP%]   small[_ngcontent-%COMP%], \n.download-dialog[_ngcontent-%COMP%]   header[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  display: block;\n  margin-top: 4px;\n  color: var(--student-color-text-secondary);\n}\n.detail-sheet[_ngcontent-%COMP%]   header[_ngcontent-%COMP%]    > button[_ngcontent-%COMP%], \n.download-dialog[_ngcontent-%COMP%]   header[_ngcontent-%COMP%]    > button[_ngcontent-%COMP%] {\n  display: grid;\n  width: 40px;\n  height: 40px;\n  place-items: center;\n  border: 0;\n  color: var(--student-color-text);\n  background: transparent;\n}\n.class-time[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 30px 1fr auto;\n  align-items: center;\n  gap: 12px;\n  margin: 26px -26px 8px;\n  padding: 20px 26px;\n  color: var(--student-color-text-inverse);\n  background: linear-gradient(\n    110deg,\n    var(--student-timetable-navy-strong),\n    var(--student-timetable-navy)\n  );\n}\n.class-time[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 26px;\n}\n.class-time[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  padding: 5px 10px;\n  border: 1px solid var(--student-color-text-inverse);\n  border-radius: 7px;\n  font-style: normal;\n  text-transform: uppercase;\n}\n.detail-sheet[_ngcontent-%COMP%]   dl[_ngcontent-%COMP%] {\n  margin: 6px 0;\n}\n.detail-sheet[_ngcontent-%COMP%]   dl[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 145px 1fr;\n  align-items: center;\n  padding: 17px 0;\n  border-bottom: 1px solid var(--student-color-divider);\n}\n.detail-sheet[_ngcontent-%COMP%]   dt[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  color: var(--student-color-text-secondary);\n}\n.detail-sheet[_ngcontent-%COMP%]   dt[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 20px;\n}\n.detail-sheet[_ngcontent-%COMP%]   dd[_ngcontent-%COMP%] {\n  margin: 0;\n  font-weight: 700;\n}\n.subject-link[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  margin-top: 16px;\n  color: var(--student-color-primary);\n  font-weight: 700;\n}\n.subject-link[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 21px;\n}\n.detail-sheet[_ngcontent-%COMP%]    > footer[_ngcontent-%COMP%], \n.download-dialog[_ngcontent-%COMP%]    > footer[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1.5fr;\n  gap: 12px;\n  margin-top: auto;\n  padding-top: 18px;\n  border-top: 1px solid var(--student-color-divider);\n}\n.detail-sheet[_ngcontent-%COMP%]    > footer[_ngcontent-%COMP%]   button[_ngcontent-%COMP%], \n.download-dialog[_ngcontent-%COMP%]    > footer[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  display: flex;\n  min-height: 52px;\n  align-items: center;\n  justify-content: center;\n  gap: 9px;\n  border: 1px solid var(--student-color-primary);\n  border-radius: 10px;\n  color: var(--student-color-primary);\n  background: var(--student-color-surface);\n  font-weight: 750;\n}\n.detail-sheet[_ngcontent-%COMP%]    > footer[_ngcontent-%COMP%]   .primary[_ngcontent-%COMP%], \n.download-dialog[_ngcontent-%COMP%]    > footer[_ngcontent-%COMP%]   .primary[_ngcontent-%COMP%] {\n  color: var(--student-color-text-inverse);\n  background: var(--student-color-primary);\n}\n.detail-sheet[_ngcontent-%COMP%]    > footer[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%], \n.download-dialog[_ngcontent-%COMP%]    > footer[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 19px;\n}\n.subject-search[_ngcontent-%COMP%] {\n  display: flex;\n  min-height: 50px;\n  align-items: center;\n  gap: 10px;\n  margin: 20px 0;\n  padding: 0 14px;\n  border: 1px solid var(--student-color-border-strong);\n  border-radius: 11px;\n  color: var(--student-color-text-secondary);\n}\n.subject-search[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 20px;\n}\n.subject-search[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 100%;\n  border: 0;\n  outline: 0;\n  color: var(--student-color-text);\n  background: transparent;\n}\n.subject-list[_ngcontent-%COMP%] {\n  overflow: auto;\n  border: 1px solid var(--student-color-border);\n  border-radius: 12px;\n}\n.subject-list-head[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 70px;\n  padding: 13px 18px;\n  color: var(--student-color-text-secondary);\n  background: var(--student-color-surface-soft);\n  font-size: 12px;\n  font-weight: 750;\n  text-transform: uppercase;\n}\n.subject-list[_ngcontent-%COMP%]   article[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 38px minmax(0, 1fr) 50px 18px;\n  align-items: center;\n  gap: 10px;\n  padding: 14px 16px;\n  border-bottom: 1px solid var(--student-color-divider);\n}\n.subject-list[_ngcontent-%COMP%]   article[_ngcontent-%COMP%]:last-child {\n  border: 0;\n}\n.subject-list[_ngcontent-%COMP%]   article[_ngcontent-%COMP%]    > svg[_ngcontent-%COMP%]:first-child {\n  color: var(--student-color-primary);\n}\n.subject-list[_ngcontent-%COMP%]   article[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 3px;\n}\n.subject-list[_ngcontent-%COMP%]   article[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  color: var(--student-color-text-secondary);\n}\n.subject-list[_ngcontent-%COMP%]   article[_ngcontent-%COMP%]   b[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.subject-list[_ngcontent-%COMP%]    > p[_ngcontent-%COMP%] {\n  padding: 20px;\n  color: var(--student-color-text-secondary);\n  text-align: center;\n}\n.subjects-sheet[_ngcontent-%COMP%]    > footer[_ngcontent-%COMP%] {\n  grid-template-columns: 1fr;\n}\n.preference-list[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 0;\n  margin-top: 22px;\n  border-top: 1px solid var(--student-color-divider);\n}\n.preference-list[_ngcontent-%COMP%]    > label[_ngcontent-%COMP%], \n.preference-list[_ngcontent-%COMP%]    > section[_ngcontent-%COMP%] {\n  display: grid;\n  min-height: 82px;\n  grid-template-columns: minmax(0, 1fr) auto;\n  align-items: center;\n  gap: 18px;\n  padding: 15px 0;\n  border-bottom: 1px solid var(--student-color-divider);\n}\n.preference-list[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], \n.preference-list[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:first-child {\n  display: grid;\n  gap: 3px;\n}\n.preference-list[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  color: var(--student-color-text-secondary);\n  line-height: 1.4;\n}\n.preference-list[_ngcontent-%COMP%]   input[type='checkbox'][_ngcontent-%COMP%] {\n  width: 42px;\n  height: 23px;\n  appearance: none;\n  padding: 2px;\n  border: 1px solid var(--student-color-border-strong);\n  border-radius: var(--student-radius-pill);\n  background: var(--student-color-surface-soft);\n  cursor: pointer;\n  transition: background var(--student-motion-standard) var(--student-ease-standard);\n}\n.preference-list[_ngcontent-%COMP%]   input[type='checkbox'][_ngcontent-%COMP%]::before {\n  display: block;\n  width: 17px;\n  height: 17px;\n  border-radius: 50%;\n  background: var(--student-color-surface-raised);\n  box-shadow: var(--student-shadow-card);\n  content: '';\n  transition: transform var(--student-motion-standard) var(--student-ease-standard);\n}\n.preference-list[_ngcontent-%COMP%]   input[type='checkbox'][_ngcontent-%COMP%]:checked {\n  border-color: var(--student-color-primary);\n  background: var(--student-color-primary);\n}\n.preference-list[_ngcontent-%COMP%]   input[type='checkbox'][_ngcontent-%COMP%]:checked::before {\n  transform: translateX(19px);\n}\n.preference-segment[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  overflow: hidden;\n  border: 1px solid var(--student-color-border-strong);\n  border-radius: 9px;\n}\n.preference-segment[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  min-width: 62px;\n  min-height: 38px;\n  border: 0;\n  color: var(--student-color-text-secondary);\n  background: var(--student-color-surface);\n  cursor: pointer;\n}\n.preference-segment[_ngcontent-%COMP%]   button.active[_ngcontent-%COMP%] {\n  color: var(--student-color-text-inverse);\n  background: var(--student-color-primary);\n  font-weight: 750;\n}\n.reminder-preference[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n  min-height: 42px;\n  padding: 0 34px 0 12px;\n  border: 1px solid var(--student-color-border-strong);\n  border-radius: 9px;\n  color: var(--student-color-text);\n  background: var(--student-color-surface);\n}\n.download-dialog[_ngcontent-%COMP%] {\n  position: fixed;\n  z-index: calc(var(--student-z-dialog) + 1);\n  top: 50%;\n  left: 50%;\n  display: flex;\n  width: min(1000px, calc(100vw - 40px));\n  max-height: calc(100dvh - 40px);\n  flex-direction: column;\n  padding: 24px;\n  transform: translate(-50%, -50%);\n  border-radius: 18px;\n  background: var(--student-color-surface);\n  box-shadow: var(--student-shadow-overlay);\n}\n.download-layout[_ngcontent-%COMP%] {\n  display: grid;\n  min-height: 0;\n  grid-template-columns: minmax(0, 1fr) 250px;\n  gap: 14px;\n  margin: 18px 0;\n}\n.pdf-preview[_ngcontent-%COMP%] {\n  min-height: 390px;\n  overflow: auto;\n  padding: 18px;\n  border: 1px solid var(--student-color-border);\n  background: var(--student-color-surface-soft);\n  box-shadow: inset 0 0 0 8px var(--student-timetable-break);\n}\n.pdf-head[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 8px;\n  color: var(--student-color-text);\n}\n.pdf-head[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  font-size: 15px;\n}\n.pdf-head[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  color: var(--student-color-text-secondary);\n}\n.pdf-preview[_ngcontent-%COMP%]   table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n  table-layout: fixed;\n  font-size: 9px;\n}\n.pdf-preview[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], \n.pdf-preview[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  height: 38px;\n  padding: 4px;\n  border: 1px solid var(--student-color-border);\n  text-align: center;\n}\n.pdf-preview[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  color: var(--student-color-text-inverse);\n  background: var(--student-timetable-navy);\n}\n.download-layout[_ngcontent-%COMP%]    > aside[_ngcontent-%COMP%] {\n  padding: 18px;\n  border: 1px solid var(--student-color-border);\n  border-radius: 12px;\n}\n.file-icon[_ngcontent-%COMP%] {\n  display: grid;\n  width: 70px;\n  height: 70px;\n  place-items: center;\n  border-radius: 12px;\n  color: var(--student-color-primary);\n  background: var(--student-color-primary-soft);\n}\n.file-icon[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 35px;\n}\n.download-layout[_ngcontent-%COMP%]   aside[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 14px 0 5px;\n  font-size: 17px;\n  word-break: break-word;\n}\n.download-layout[_ngcontent-%COMP%]   aside[_ngcontent-%COMP%]    > p[_ngcontent-%COMP%] {\n  margin: 0;\n  color: var(--student-color-text-secondary);\n}\n.download-layout[_ngcontent-%COMP%]   aside[_ngcontent-%COMP%]   dl[_ngcontent-%COMP%] {\n  margin: 18px 0 0;\n}\n.download-layout[_ngcontent-%COMP%]   aside[_ngcontent-%COMP%]   dl[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  gap: 10px;\n  padding: 12px 0;\n  border-top: 1px solid var(--student-color-divider);\n}\n.download-layout[_ngcontent-%COMP%]   aside[_ngcontent-%COMP%]   dt[_ngcontent-%COMP%] {\n  color: var(--student-color-text-secondary);\n}\n.download-layout[_ngcontent-%COMP%]   aside[_ngcontent-%COMP%]   dd[_ngcontent-%COMP%] {\n  margin: 0;\n  text-align: right;\n}\n.include-details[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  color: var(--student-color-text-secondary);\n}\n.include-details[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 20px;\n  height: 20px;\n  accent-color: var(--student-color-primary);\n}\n.download-dialog[_ngcontent-%COMP%]    > footer[_ngcontent-%COMP%] {\n  margin-top: 16px;\n  margin-left: auto;\n  grid-template-columns: 160px 250px;\n}\n.timetable-toast[_ngcontent-%COMP%] {\n  position: fixed;\n  z-index: calc(var(--student-z-dialog) + 2);\n  right: 24px;\n  bottom: 24px;\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 13px 16px;\n  border: 1px solid var(--student-color-primary-middle);\n  border-radius: 11px;\n  color: var(--student-color-text);\n  background: var(--student-color-surface);\n  box-shadow: var(--student-shadow-overlay);\n}\n.timetable-toast[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  display: grid;\n  width: 28px;\n  height: 28px;\n  place-items: center;\n  border: 0;\n  background: transparent;\n}\n.timetable-toast[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 16px;\n}\n@media (max-width: 1100px) {\n  .week-toolbar[_ngcontent-%COMP%] {\n    grid-template-columns: auto 1fr;\n  }\n  .toolbar-actions[_ngcontent-%COMP%] {\n    grid-column: 1/-1;\n    justify-content: flex-end;\n  }\n  .desktop-grid[_ngcontent-%COMP%]   table[_ngcontent-%COMP%] {\n    min-width: 980px;\n  }\n  .class-card[_ngcontent-%COMP%]   b[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n@media (max-width: 767px) {\n  .timetable-page[_ngcontent-%COMP%] {\n    gap: 16px;\n    padding-bottom: 92px;\n  }\n  .timetable-heading[_ngcontent-%COMP%] {\n    min-height: 84px;\n    padding-left: 46px;\n  }\n  .timetable-heading[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%], \n   .timetable-heading[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], \n   .timetable-heading[_ngcontent-%COMP%]    > img[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .timetable-heading[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 30px;\n  }\n  .mobile-back[_ngcontent-%COMP%] {\n    position: absolute;\n    left: 0;\n    display: grid;\n    width: 38px;\n    height: 42px;\n    place-items: center;\n    color: var(--student-color-text);\n  }\n  .mobile-back[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n    width: 27px;\n  }\n  .mobile-download[_ngcontent-%COMP%] {\n    position: absolute;\n    right: 0;\n    display: flex;\n    min-height: 46px;\n    padding: 0 13px;\n  }\n  .week-toolbar[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .timetable-board[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .mobile-week-summary[_ngcontent-%COMP%] {\n    display: grid;\n    min-height: 66px;\n    grid-template-columns: 42px auto 1fr 38px;\n    align-items: center;\n    gap: 10px;\n    padding: 0 16px;\n    border-radius: 13px;\n    background: var(--student-color-primary-soft);\n  }\n  .mobile-week-summary[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n    width: 28px;\n  }\n  .mobile-week-summary[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n    font-size: 17px;\n  }\n  .mobile-week-summary[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    padding-left: 16px;\n    border-left: 1px solid var(--student-color-border-strong);\n    color: var(--student-color-text-secondary);\n  }\n  .mobile-week-summary[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    display: grid;\n    width: 38px;\n    height: 38px;\n    padding: 0;\n    place-items: center;\n    border: 1px solid var(--student-color-primary-middle);\n    border-radius: 9px;\n    color: var(--student-color-primary-pressed);\n    background: var(--student-color-surface);\n  }\n  .mobile-week-summary[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n    width: 19px;\n  }\n  .mobile-view-switch[_ngcontent-%COMP%] {\n    display: grid;\n    width: min(400px, 100%);\n  }\n  .day-tabs[_ngcontent-%COMP%] {\n    display: grid;\n    grid-template-columns: repeat(6, 1fr);\n    border-bottom: 1px solid var(--student-color-border);\n  }\n  .day-tabs[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    position: relative;\n    display: grid;\n    gap: 5px;\n    min-height: 74px;\n    place-content: center;\n    border: 0;\n    color: var(--student-color-text-secondary);\n    background: transparent;\n  }\n  .day-tabs[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n    font-size: 18px;\n  }\n  .day-tabs[_ngcontent-%COMP%]   button.active[_ngcontent-%COMP%] {\n    color: var(--student-color-primary);\n    font-weight: 750;\n  }\n  .day-tabs[_ngcontent-%COMP%]   button.active[_ngcontent-%COMP%]::after {\n    position: absolute;\n    right: 10%;\n    bottom: -2px;\n    left: 10%;\n    height: 4px;\n    border-radius: 4px;\n    background: var(--student-color-primary);\n    content: '';\n  }\n  .desktop-grid[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .mobile-day-table[_ngcontent-%COMP%] {\n    display: block;\n    overflow: hidden;\n    border: 1px solid var(--student-color-border);\n    border-radius: 13px;\n    background: var(--student-color-surface);\n  }\n  .mobile-week-list[_ngcontent-%COMP%] {\n    display: grid;\n    gap: 10px;\n  }\n  .mobile-week-list[_ngcontent-%COMP%]    > article[_ngcontent-%COMP%] {\n    display: grid;\n    grid-template-columns: 56px minmax(0, 1fr);\n    overflow: hidden;\n    border: 1px solid var(--student-color-border);\n    border-radius: 12px;\n    background: var(--student-color-surface);\n  }\n  .mobile-week-list[_ngcontent-%COMP%]    > article[_ngcontent-%COMP%]    > header[_ngcontent-%COMP%] {\n    display: grid;\n    align-content: center;\n    justify-items: center;\n    color: var(--student-color-text-inverse);\n    background: var(--student-timetable-navy);\n  }\n  .mobile-week-list[_ngcontent-%COMP%]    > article[_ngcontent-%COMP%]    > header[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    font-size: 18px;\n    font-weight: 800;\n  }\n  .mobile-week-list[_ngcontent-%COMP%]   article[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]    > button[_ngcontent-%COMP%] {\n    display: grid;\n    width: 100%;\n    min-height: 62px;\n    grid-template-columns: 52px 1fr 18px;\n    align-items: center;\n    gap: 8px;\n    padding: 8px 12px;\n    border: 0;\n    border-bottom: 1px solid var(--student-color-divider);\n    color: var(--student-color-text);\n    background: transparent;\n    text-align: left;\n  }\n  .mobile-week-list[_ngcontent-%COMP%]   article[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]    > button[_ngcontent-%COMP%]:last-child {\n    border-bottom: 0;\n  }\n  .mobile-week-list[_ngcontent-%COMP%]   article[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]    > button.next[_ngcontent-%COMP%] {\n    background: var(--student-color-primary-soft);\n  }\n  .mobile-week-list[_ngcontent-%COMP%]   time[_ngcontent-%COMP%] {\n    color: var(--student-color-text-secondary);\n    font-size: 12px;\n  }\n  .mobile-week-list[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    display: grid;\n    gap: 3px;\n  }\n  .mobile-week-list[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n    color: var(--student-color-text-secondary);\n  }\n  .mobile-week-list[_ngcontent-%COMP%]   article[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]    > p[_ngcontent-%COMP%] {\n    margin: 0;\n    padding: 20px;\n    color: var(--student-color-text-muted);\n    text-align: center;\n  }\n  .mobile-day-table[_ngcontent-%COMP%]   table[_ngcontent-%COMP%] {\n    width: 100%;\n    border-collapse: collapse;\n    table-layout: fixed;\n  }\n  .mobile-day-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], \n   .mobile-day-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n    padding: 13px 12px;\n    border-right: 1px solid var(--student-color-border);\n    border-bottom: 1px solid var(--student-color-border);\n    text-align: left;\n  }\n  .mobile-day-table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%]:last-child {\n    border-right: 0;\n  }\n  .mobile-day-table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:last-child    > *[_ngcontent-%COMP%] {\n    border-bottom: 0;\n  }\n  .mobile-day-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n    height: 48px;\n    color: var(--student-color-text-inverse);\n    background: var(--student-timetable-navy);\n    font-size: 11px;\n    text-transform: uppercase;\n  }\n  .mobile-day-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:first-child {\n    width: 25%;\n  }\n  .mobile-day-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:last-child {\n    width: 23%;\n  }\n  .mobile-day-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n    font-size: 13px;\n    white-space: nowrap;\n  }\n  .mobile-day-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n    height: 94px;\n  }\n  .mobile-day-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:not(.break) {\n    cursor: pointer;\n  }\n  .mobile-day-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr.break[_ngcontent-%COMP%] {\n    height: 72px;\n    background: var(--student-timetable-break);\n  }\n  .mobile-day-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr.next-row[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:nth-child(2) {\n    box-shadow: inset 4px 0 0 var(--student-color-primary);\n  }\n  .mobile-subject[_ngcontent-%COMP%] {\n    position: relative;\n    display: grid;\n    gap: 4px;\n  }\n  .mobile-subject[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n    font-size: 14px;\n  }\n  .mobile-subject[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n    color: var(--student-color-text-secondary);\n    font-size: 12px;\n  }\n  .mobile-subject[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n    position: absolute;\n    right: 0;\n    bottom: 0;\n    padding: 3px 7px;\n    border: 1px solid var(--student-color-primary);\n    border-radius: 5px;\n    color: var(--student-color-primary);\n    font-size: 9px;\n    font-style: normal;\n    text-transform: uppercase;\n  }\n  .room[_ngcontent-%COMP%] {\n    display: flex;\n    align-items: center;\n    gap: 6px;\n    font-size: 12px;\n  }\n  .room[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n    width: 19px;\n    min-width: 19px;\n  }\n  .free-period[_ngcontent-%COMP%] {\n    color: var(--student-color-text-secondary);\n    text-transform: uppercase;\n  }\n  .timetable-legend[_ngcontent-%COMP%] {\n    padding: 2px 8px;\n    border: 0;\n    background: transparent;\n  }\n  .timetable-legend[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .timetable-legend[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    margin: 0;\n  }\n  .detail-sheet[_ngcontent-%COMP%] {\n    top: auto;\n    bottom: 0;\n    width: 100%;\n    height: auto;\n    max-height: calc(100dvh - 72px);\n    padding: 22px;\n    border-radius: 26px 26px 0 0;\n    animation: sheet-up var(--student-motion-sidebar) var(--student-ease-standard);\n  }\n  @keyframes sheet-up {\n    from {\n      transform: translateY(100%);\n    }\n  }\n  .detail-sheet[_ngcontent-%COMP%]::before, \n   .download-dialog[_ngcontent-%COMP%]::before {\n    width: 90px;\n    height: 7px;\n    margin: -10px auto 18px;\n    border-radius: var(--student-radius-pill);\n    background: var(--student-color-border-strong);\n    content: '';\n  }\n  .detail-sheet[_ngcontent-%COMP%]    > header[_ngcontent-%COMP%] {\n    grid-template-columns: 55px 1fr 38px;\n  }\n  .detail-sheet[_ngcontent-%COMP%]    > header[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n    width: 54px;\n    height: 54px;\n  }\n  .detail-sheet[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 22px;\n  }\n  .class-time[_ngcontent-%COMP%] {\n    margin: 20px -22px 5px;\n    padding: 17px 22px;\n  }\n  .detail-sheet[_ngcontent-%COMP%]   dl[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n    grid-template-columns: 42% 1fr;\n    padding: 14px 0;\n  }\n  .detail-sheet[_ngcontent-%COMP%]    > footer[_ngcontent-%COMP%] {\n    position: sticky;\n    bottom: -22px;\n    margin: 16px -22px -22px;\n    padding: 14px 22px;\n    background: var(--student-color-surface);\n  }\n  .preference-list[_ngcontent-%COMP%]    > label[_ngcontent-%COMP%], \n   .preference-list[_ngcontent-%COMP%]    > section[_ngcontent-%COMP%] {\n    min-height: 74px;\n  }\n  .subjects-sheet[_ngcontent-%COMP%] {\n    height: min(720px, calc(100dvh - 72px));\n  }\n  .subject-list[_ngcontent-%COMP%]   article[_ngcontent-%COMP%] {\n    grid-template-columns: 34px minmax(0, 1fr) 35px 15px;\n    padding: 13px 10px;\n  }\n  .subject-list[_ngcontent-%COMP%]   article[_ngcontent-%COMP%]   small[_ngcontent-%COMP%]:last-child {\n    display: none;\n  }\n  .download-dialog[_ngcontent-%COMP%] {\n    top: auto;\n    bottom: 0;\n    left: 0;\n    width: 100%;\n    max-height: calc(100dvh - 40px);\n    padding: 20px;\n    transform: none;\n    border-radius: 26px 26px 0 0;\n    animation: sheet-up var(--student-motion-sidebar) var(--student-ease-standard);\n  }\n  .download-dialog[_ngcontent-%COMP%]    > header[_ngcontent-%COMP%] {\n    grid-template-columns: 55px 1fr 38px;\n  }\n  .download-dialog[_ngcontent-%COMP%]    > header[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n    width: 54px;\n    height: 54px;\n  }\n  .download-dialog[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 23px;\n  }\n  .download-layout[_ngcontent-%COMP%] {\n    display: block;\n    overflow: auto;\n  }\n  .pdf-preview[_ngcontent-%COMP%] {\n    min-height: auto;\n    padding: 12px;\n  }\n  .download-layout[_ngcontent-%COMP%]    > aside[_ngcontent-%COMP%] {\n    padding: 0;\n    border: 0;\n  }\n  .download-layout[_ngcontent-%COMP%]    > aside[_ngcontent-%COMP%]   .file-icon[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .download-layout[_ngcontent-%COMP%]   aside[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n    margin-top: 15px;\n  }\n  .download-layout[_ngcontent-%COMP%]   aside[_ngcontent-%COMP%]   dl[_ngcontent-%COMP%] {\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n  }\n  .download-layout[_ngcontent-%COMP%]   aside[_ngcontent-%COMP%]   dl[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n    display: grid;\n  }\n  .download-layout[_ngcontent-%COMP%]   aside[_ngcontent-%COMP%]   dl[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:nth-child(3), \n   .download-layout[_ngcontent-%COMP%]   aside[_ngcontent-%COMP%]   dl[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:nth-child(4) {\n    display: none;\n  }\n  .include-details[_ngcontent-%COMP%] {\n    margin: 10px 0;\n  }\n  .download-dialog[_ngcontent-%COMP%]    > footer[_ngcontent-%COMP%] {\n    position: sticky;\n    bottom: -20px;\n    width: calc(100% + 40px);\n    grid-template-columns: 1fr 1.2fr;\n    margin: 12px -20px -20px;\n    padding: 14px 20px;\n    background: var(--student-color-surface);\n  }\n  .timetable-toast[_ngcontent-%COMP%] {\n    right: 12px;\n    bottom: 90px;\n    left: 12px;\n    justify-content: space-between;\n  }\n  .mobile-day-table[_ngcontent-%COMP%]    + .timetable-legend[_ngcontent-%COMP%] {\n    margin-top: 0;\n  }\n}\n@media (max-width: 480px) {\n  .timetable-heading[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 25px;\n  }\n  .mobile-download[_ngcontent-%COMP%] {\n    padding: 0 9px;\n    font-size: 12px;\n  }\n  .mobile-week-summary[_ngcontent-%COMP%] {\n    grid-template-columns: 34px auto 1fr 34px;\n    padding: 0 10px;\n  }\n  .mobile-week-summary[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n    font-size: 14px;\n  }\n  .mobile-week-summary[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    font-size: 12px;\n  }\n  .view-switch[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    min-width: 0;\n  }\n  .day-tabs[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    font-size: 11px;\n  }\n  .day-tabs[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n    font-size: 16px;\n  }\n  .mobile-day-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], \n   .mobile-day-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n    padding: 10px 7px;\n  }\n  .mobile-day-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n    font-size: 11px;\n  }\n  .mobile-subject[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n    font-size: 12px;\n  }\n  .room[_ngcontent-%COMP%] {\n    font-size: 10px;\n  }\n}\n@media (prefers-reduced-motion: reduce) {\n  .detail-sheet[_ngcontent-%COMP%], \n   .download-dialog[_ngcontent-%COMP%], \n   .timetable-state[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n    animation: none;\n  }\n}"], changeDetection: 0 });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(StudentTimetableComponent, [{
        type: Component,
        args: [{ selector: 'erp-student-timetable', imports: [
                    FormsModule,
                    TitleCasePipe,
                    RouterLink,
                    StudentMobileBottomNavComponent,
                    LucideArrowLeft,
                    LucideBell,
                    LucideBookOpen,
                    LucideCalendarCheck,
                    LucideChevronLeft,
                    LucideChevronRight,
                    LucideClock3,
                    LucideCoffee,
                    LucideDownload,
                    LucideGraduationCap,
                    LucideInfo,
                    LucideMapPin,
                    LucideRefreshCw,
                    LucideSearch,
                    LucideSlidersHorizontal,
                    LucideUserRound,
                    LucideX,
                ], changeDetection: ChangeDetectionStrategy.OnPush, template: "<main\n  class=\"timetable-page\"\n  [class.compact-view]=\"preferences().compactMode\"\n  aria-labelledby=\"timetable-title\"\n>\n  <header class=\"timetable-heading\">\n    <div>\n      <nav aria-label=\"Breadcrumb\">\n        <a routerLink=\"/student/academics\">Academics</a><span>/</span><strong>Timetable</strong>\n      </nav>\n      <a class=\"mobile-back\" routerLink=\"/student/academics\" aria-label=\"Back to Academics\"\n        ><svg lucideArrowLeft></svg\n      ></a>\n      <h1 id=\"timetable-title\">My Timetable</h1>\n      <p>\n        Your timetable is based on your current group, section, set and semester.\n        <span class=\"sync-status\" [class.refreshing]=\"refreshing()\"\n          ><svg lucideRefreshCw></svg>{{ lastSyncedLabel() }}</span\n        >\n      </p>\n    </div>\n    <img\n      src=\"/assets/student/academics/timetable.png\"\n      width=\"320\"\n      height=\"320\"\n      alt=\"\"\n      aria-hidden=\"true\"\n    />\n    <button\n      class=\"mobile-download\"\n      type=\"button\"\n      [disabled]=\"!items().length\"\n      (click)=\"downloadOpen.set(true)\"\n    >\n      <svg lucideDownload></svg>Download PDF\n    </button>\n  </header>\n\n  @if (loading()) {\n    <section class=\"timetable-state\">\n      <span></span><strong>Loading your published timetable...</strong>\n    </section>\n  } @else if (error()) {\n    <section class=\"timetable-state\" role=\"alert\">\n      <strong>{{ error() }}</strong\n      ><button type=\"button\" (click)=\"load()\">Try again</button>\n    </section>\n  } @else if (!items().length) {\n    <section class=\"timetable-state\">\n      <svg lucideCalendarCheck></svg><strong>No published timetable is available</strong>\n      <p>Your schedule will appear here after the academic office publishes it.</p>\n    </section>\n  } @else {\n    <section class=\"timetable-board\">\n      <section class=\"week-toolbar\">\n        <div class=\"view-switch\" aria-label=\"Timetable view\">\n          <button type=\"button\" [class.active]=\"view() === 'today'\" (click)=\"view.set('today')\">\n            Today</button\n          ><button type=\"button\" [class.active]=\"view() === 'week'\" (click)=\"view.set('week')\">\n            Week\n          </button>\n        </div>\n        <div class=\"week-navigation\">\n          <button type=\"button\" aria-label=\"Previous week\" (click)=\"changeWeek(-1)\">\n            <svg lucideChevronLeft></svg></button\n          ><strong>{{ weekLabel() }}</strong\n          ><button type=\"button\" aria-label=\"Next week\" (click)=\"changeWeek(1)\">\n            <svg lucideChevronRight></svg></button\n          ><button\n            class=\"current-week\"\n            type=\"button\"\n            [disabled]=\"isCurrentWeek()\"\n            (click)=\"goToCurrentWeek()\"\n          >\n            Current week\n          </button>\n        </div>\n        <div class=\"toolbar-actions\">\n          ><button\n            class=\"refresh-action\"\n            type=\"button\"\n            [disabled]=\"refreshing()\"\n            aria-label=\"Refresh timetable\"\n            title=\"Refresh timetable\"\n            (click)=\"load(true)\"\n          >\n            <svg lucideRefreshCw></svg></button\n          ><button type=\"button\" (click)=\"openCustomize()\">\n            <svg lucideSlidersHorizontal></svg>Customize</button\n          ><button type=\"button\" (click)=\"openSubjects()\"><svg lucideBookOpen></svg>Subjects</button\n          ><button type=\"button\" (click)=\"downloadOpen.set(true)\">\n            <svg lucideDownload></svg>Download PDF\n          </button>\n        </div>\n      </section>\n\n      <section class=\"desktop-grid\" [class.today-view]=\"view() === 'today'\">\n        <table>\n          <thead>\n            <tr>\n              <th>Time</th>\n              @for (day of gridDays(); track day.name) {\n                <th [class.current]=\"isToday(day.date)\">\n                  <strong>{{ day.name }}</strong\n                  ><span>{{ dayNumber(day.date) }} {{ monthShort(day.date) }}</span>\n                </th>\n              }\n            </tr>\n          </thead>\n          <tbody>\n            @for (period of periods(); track period._id) {\n              <tr>\n                <th>{{ period.startTime }} - {{ period.endTime }}</th>\n                @for (day of gridDays(); track day.name) {\n                  @if (!covered(day, period)) {\n                    @let entry = entryFor(day, period);\n                    <td\n                      [attr.rowspan]=\"span(entry)\"\n                      [class.break]=\"period.periodType === 'break'\"\n                      [class.next-cell]=\"isNext(entry)\"\n                      [class.live-cell]=\"isLive(entry, day)\"\n                    >\n                      @if (period.periodType === 'break') {\n                        <span class=\"break-label\"><svg lucideCoffee></svg>Break</span>\n                      } @else if (entry) {\n                        <button class=\"class-card\" type=\"button\" (click)=\"openClass(entry)\">\n                          <span\n                            ><strong>{{ entry.subjectName }}</strong\n                            ><b>{{ entry.subjectCode || '' }}</b></span\n                          >\n                          @if (preferences().showFaculty) {\n                            <small><svg lucideUserRound></svg>{{ entry.facultyName }}</small>\n                          }\n                          @if (preferences().showRooms && entry.roomName) {\n                            <small><svg lucideMapPin></svg>{{ entry.roomName }}</small>\n                          }\n                          @if (isLive(entry, day)) {\n                            <i class=\"live\">Now</i>\n                          } @else if (isNext(entry)) {\n                            <i>Next</i>\n                          }\n                          @if (hasReminder(entry)) {\n                            <em><svg lucideBell></svg></em>\n                          }\n                        </button>\n                      } @else {\n                        <span class=\"free-slot\">-</span>\n                      }\n                    </td>\n                  }\n                }\n              </tr>\n            }\n          </tbody>\n        </table>\n      </section>\n    </section>\n\n    <div class=\"mobile-week-summary\">\n      <svg lucideCalendarCheck></svg><strong>{{ weekLabel() }}</strong\n      ><span>{{ isCurrentWeek() ? 'Current week' : 'Selected week' }}</span\n      ><button type=\"button\" aria-label=\"Customize timetable\" (click)=\"openCustomize()\">\n        <svg lucideSlidersHorizontal></svg>\n      </button>\n    </div>\n    <div class=\"mobile-view-switch view-switch\">\n      <button type=\"button\" [class.active]=\"view() === 'today'\" (click)=\"view.set('today')\">\n        Today</button\n      ><button type=\"button\" [class.active]=\"view() === 'week'\" (click)=\"view.set('week')\">\n        Week\n      </button>\n    </div>\n\n    <nav class=\"day-tabs\" aria-label=\"Select timetable day\">\n      @for (day of weekDays(); track day.name) {\n        <button\n          type=\"button\"\n          [class.active]=\"selectedDay().name === day.name\"\n          (click)=\"selectDay(day)\"\n        >\n          <span>{{ day.short }}</span\n          ><strong>{{ dayNumber(day.date) }}</strong>\n        </button>\n      }\n    </nav>\n\n    @if (view() === 'today') {\n      <section class=\"mobile-day-table\">\n        <table>\n          <thead>\n            <tr>\n              <th>Time</th>\n              <th>Subject &amp; faculty</th>\n              <th>Room</th>\n            </tr>\n          </thead>\n          <tbody>\n            @for (period of periods(); track period._id) {\n              @let day = selectedDay() || weekDays()[0];\n              @let entry = entryFor(day, period);\n              <tr\n                [class.break]=\"period.periodType === 'break'\"\n                [class.next-row]=\"isNext(entry)\"\n                (click)=\"entry ? openClass(entry) : null\"\n              >\n                <th>{{ period.startTime }} - {{ period.endTime }}</th>\n                @if (period.periodType === 'break') {\n                  <td>\n                    <span class=\"break-label\"><svg lucideCoffee></svg>Break</span>\n                  </td>\n                  <td>-</td>\n                } @else if (entry) {\n                  <td>\n                    <span class=\"mobile-subject\"\n                      ><strong>{{ entry.subjectName }}</strong\n                      ><small>{{ entry.subjectCode || '' }}</small>\n                      @if (preferences().showFaculty) {\n                        <small>{{ entry.facultyName }}</small>\n                      }\n                      @if (isNext(entry)) {\n                        <i>Next</i>\n                      }\n                    </span>\n                  </td>\n                  <td>\n                    <span class=\"room\"\n                      ><svg lucideMapPin></svg\n                      >{{\n                        preferences().showRooms\n                          ? entry.roomName || 'Not assigned'\n                          : (entry.classType | titlecase)\n                      }}</span\n                    >\n                  </td>\n                } @else {\n                  <td><span class=\"free-period\">Free period</span></td>\n                  <td>-</td>\n                }\n              </tr>\n            }\n          </tbody>\n        </table>\n      </section>\n    } @else {\n      <section class=\"mobile-week-list\">\n        @for (day of weekDays(); track day.name) {\n          <article>\n            <header>\n              <strong>{{ day.short }}</strong\n              ><span>{{ dayNumber(day.date) }}</span>\n            </header>\n            <div>\n              @for (period of periods(); track period._id) {\n                @let entry = entryFor(day, period);\n                @if (entry) {\n                  <button type=\"button\" [class.next]=\"isNext(entry)\" (click)=\"openClass(entry)\">\n                    <time>{{ entry.startTime }}</time\n                    ><span\n                      ><strong>{{ entry.subjectName }}</strong\n                      ><small\n                        >{{ entry.subjectCode }}\n                        @if (preferences().showRooms) {\n                          \u00B7 {{ entry.roomName || 'Room not assigned' }}\n                        }\n                      </small></span\n                    ><svg lucideChevronRight></svg>\n                  </button>\n                }\n              }\n              @if (!hasClasses(day)) {\n                <p>No classes</p>\n              }\n            </div>\n          </article>\n        }\n      </section>\n    }\n\n    <footer class=\"timetable-legend\">\n      <span><i class=\"lecture\"></i>Lecture</span><span><i class=\"break-key\"></i>Break</span\n      ><span><i class=\"next-key\"></i>Next class</span>\n      <p><svg lucideInfo></svg>Tap a class to view details.</p>\n    </footer>\n  }\n\n  @if (actionMessage()) {\n    <div class=\"timetable-toast\" role=\"status\">\n      {{ actionMessage()\n      }}<button type=\"button\" aria-label=\"Dismiss\" (click)=\"actionMessage.set('')\">\n        <svg lucideX></svg>\n      </button>\n    </div>\n  }\n\n  @if (selectedEntry(); as entry) {\n    <button\n      class=\"sheet-backdrop\"\n      type=\"button\"\n      aria-label=\"Close class details\"\n      (click)=\"selectedEntry.set(null)\"\n    ></button>\n    <aside class=\"detail-sheet\" aria-label=\"Class details\">\n      <header>\n        <span><svg lucideBookOpen></svg></span>\n        <div>\n          <h2>{{ entry.subjectName }}</h2>\n          <small>{{ entry.subjectCode || 'Subject' }}</small>\n        </div>\n        <button type=\"button\" aria-label=\"Close\" (click)=\"selectedEntry.set(null)\">\n          <svg lucideX></svg>\n        </button>\n      </header>\n      <div class=\"class-time\">\n        <svg lucideCalendarCheck></svg\n        ><strong>{{ entry.day }} \u00B7 {{ entry.startTime }} - {{ entry.endTime }}</strong>\n        @if (isNext(entry)) {\n          <i>Next</i>\n        }\n      </div>\n      <dl>\n        <div>\n          <dt><svg lucideUserRound></svg>Faculty</dt>\n          <dd>{{ entry.facultyName }}</dd>\n        </div>\n        <div>\n          <dt><svg lucideMapPin></svg>Room</dt>\n          <dd>{{ entry.roomName || 'Not assigned' }}</dd>\n        </div>\n        <div>\n          <dt><svg lucideGraduationCap></svg>Class type</dt>\n          <dd>{{ entry.classType | titlecase }}</dd>\n        </div>\n        <div>\n          <dt><svg lucideClock3></svg>Repeats</dt>\n          <dd>Every {{ entry.day }}</dd>\n        </div>\n      </dl>\n      <a class=\"subject-link\" href=\"javascript:void(0)\" (click)=\"viewRelatedSubject(entry)\"\n        ><svg lucideBookOpen></svg>View subject details</a\n      >\n      <footer>\n        <button type=\"button\" (click)=\"selectedEntry.set(null)\">Close</button\n        ><button class=\"primary\" type=\"button\" (click)=\"toggleReminder(entry)\">\n          <svg lucideBell></svg>{{ hasReminder(entry) ? 'Remove reminder' : 'Add reminder' }}\n        </button>\n      </footer>\n    </aside>\n  }\n\n  @if (subjectsOpen()) {\n    <button\n      class=\"sheet-backdrop\"\n      type=\"button\"\n      aria-label=\"Close subjects\"\n      (click)=\"subjectsOpen.set(false)\"\n    ></button>\n    <aside class=\"detail-sheet subjects-sheet\" aria-label=\"My subjects\">\n      <header>\n        <span><svg lucideBookOpen></svg></span>\n        <div>\n          <h2>My Subjects</h2>\n          <small>{{ subjects().length }} subjects in this timetable</small>\n        </div>\n        <button type=\"button\" aria-label=\"Close\" (click)=\"subjectsOpen.set(false)\">\n          <svg lucideX></svg>\n        </button>\n      </header>\n      <label class=\"subject-search\"\n        ><svg lucideSearch></svg\n        ><input\n          type=\"search\"\n          placeholder=\"Search subjects...\"\n          [ngModel]=\"subjectSearch()\"\n          (ngModelChange)=\"subjectSearch.set($event)\"\n      /></label>\n      <div class=\"subject-list\">\n        <div class=\"subject-list-head\"><span>Subject</span><span>Credits</span></div>\n        @for (subject of filteredSubjects(); track subject._id) {\n          <article>\n            <svg lucideBookOpen></svg>\n            <div>\n              <strong>{{ subject.name }}</strong\n              ><small>{{ subject.code }} \u00B7 {{ subject.subjectType | titlecase }}</small\n              ><small>{{ subjectFaculty(subject) }}</small>\n            </div>\n            <b>{{ subject.credits }}</b\n            ><svg lucideChevronRight></svg>\n          </article>\n        } @empty {\n          <p>No matching subjects found.</p>\n        }\n      </div>\n      <footer><button type=\"button\" (click)=\"subjectsOpen.set(false)\">Close</button></footer>\n    </aside>\n  }\n\n  @if (customizeOpen()) {\n    <button\n      class=\"sheet-backdrop\"\n      type=\"button\"\n      aria-label=\"Close timetable customization\"\n      (click)=\"customizeOpen.set(false)\"\n    ></button>\n    <aside class=\"detail-sheet customize-sheet\" aria-label=\"Customize timetable\">\n      <header>\n        <span><svg lucideSlidersHorizontal></svg></span>\n        <div>\n          <h2>Customize timetable</h2>\n          <small>Choose how your schedule is displayed</small>\n        </div>\n        <button type=\"button\" aria-label=\"Close\" (click)=\"customizeOpen.set(false)\">\n          <svg lucideX></svg>\n        </button>\n      </header>\n\n      <div class=\"preference-list\">\n        <section>\n          <div>\n            <strong>Default view</strong><small>Open the timetable in your preferred view</small>\n          </div>\n          <div class=\"preference-segment\">\n            <button\n              type=\"button\"\n              [class.active]=\"preferencesDraft().defaultView === 'auto'\"\n              (click)=\"updatePreference('defaultView', 'auto')\"\n            >\n              Auto\n            </button>\n            <button\n              type=\"button\"\n              [class.active]=\"preferencesDraft().defaultView === 'today'\"\n              (click)=\"updatePreference('defaultView', 'today')\"\n            >\n              Today</button\n            ><button\n              type=\"button\"\n              [class.active]=\"preferencesDraft().defaultView === 'week'\"\n              (click)=\"updatePreference('defaultView', 'week')\"\n            >\n              Week\n            </button>\n          </div>\n        </section>\n\n        <label>\n          <span\n            ><strong>Show faculty</strong\n            ><small>Display the faculty name on class cards</small></span\n          >\n          <input\n            type=\"checkbox\"\n            [checked]=\"preferencesDraft().showFaculty\"\n            (change)=\"updatePreference('showFaculty', $any($event.target).checked)\"\n          />\n        </label>\n        <label>\n          <span><strong>Show rooms</strong><small>Display classroom and lab locations</small></span>\n          <input\n            type=\"checkbox\"\n            [checked]=\"preferencesDraft().showRooms\"\n            (change)=\"updatePreference('showRooms', $any($event.target).checked)\"\n          />\n        </label>\n        <label>\n          <span\n            ><strong>Compact schedule</strong><small>Fit more periods on the screen</small></span\n          >\n          <input\n            type=\"checkbox\"\n            [checked]=\"preferencesDraft().compactMode\"\n            (change)=\"updatePreference('compactMode', $any($event.target).checked)\"\n          />\n        </label>\n        <label class=\"reminder-preference\">\n          <span\n            ><strong>Reminder time</strong><small>Used when you add a class reminder</small></span\n          >\n          <select\n            [value]=\"preferencesDraft().reminderMinutes\"\n            (change)=\"updatePreference('reminderMinutes', +$any($event.target).value)\"\n          >\n            @for (minutes of reminderMinuteOptions; track minutes) {\n              <option [value]=\"minutes\">{{ minutes }} minutes before</option>\n            }\n          </select>\n        </label>\n      </div>\n\n      <footer>\n        <button type=\"button\" (click)=\"customizeOpen.set(false)\">Cancel</button\n        ><button\n          class=\"primary\"\n          type=\"button\"\n          [disabled]=\"savingPreferences()\"\n          (click)=\"savePreferences()\"\n        >\n          {{ savingPreferences() ? 'Saving...' : 'Save preferences' }}\n        </button>\n      </footer>\n    </aside>\n  }\n\n  @if (downloadOpen()) {\n    <button\n      class=\"sheet-backdrop\"\n      type=\"button\"\n      aria-label=\"Close download preview\"\n      (click)=\"downloadOpen.set(false)\"\n    ></button>\n    <section class=\"download-dialog\" aria-label=\"Download timetable\">\n      <header>\n        <span><svg lucideDownload></svg></span>\n        <div>\n          <h2>Download timetable</h2>\n          <small>Review your print-ready timetable</small>\n        </div>\n        <button type=\"button\" aria-label=\"Close\" (click)=\"downloadOpen.set(false)\">\n          <svg lucideX></svg>\n        </button>\n      </header>\n      <div class=\"download-layout\">\n        <div class=\"pdf-preview\">\n          <div class=\"pdf-head\">\n            <strong>GEU \u00B7 Student Timetable</strong><small>{{ weekLabel() }}</small>\n          </div>\n          <table>\n            <thead>\n              <tr>\n                <th>Time</th>\n                @for (day of weekDays(); track day.name) {\n                  <th>{{ day.short }}</th>\n                }\n              </tr>\n            </thead>\n            <tbody>\n              @for (period of periods(); track period._id) {\n                <tr>\n                  <th>{{ period.startTime }}</th>\n                  @for (day of weekDays(); track day.name) {\n                    @let entry = entryFor(day, period);\n                    <td>\n                      {{ period.periodType === 'break' ? 'Break' : entry?.subjectCode || '-' }}\n                    </td>\n                  }\n                </tr>\n              }\n            </tbody>\n          </table>\n        </div>\n        <aside>\n          <div class=\"file-icon\"><svg lucideDownload></svg></div>\n          <h3>GEU_Timetable_Sem{{ session.profile()?.currentSemester || 1 }}.pdf</h3>\n          <p>PDF \u00B7 A4 landscape</p>\n          <dl>\n            <div>\n              <dt>Week</dt>\n              <dd>{{ weekLabel() }}</dd>\n            </div>\n            <div>\n              <dt>Periods</dt>\n              <dd>{{ periods().length }}</dd>\n            </div>\n            <div>\n              <dt>Status</dt>\n              <dd>Ready to download</dd>\n            </div>\n            <div>\n              <dt>Updated</dt>\n              <dd>{{ updatedLabel() }}</dd>\n            </div>\n          </dl>\n        </aside>\n      </div>\n      <label class=\"include-details\"\n        ><input\n          type=\"checkbox\"\n          [checked]=\"includeDetails()\"\n          (change)=\"includeDetails.set($any($event.target).checked)\"\n        />Include subject codes, faculty and rooms</label\n      >\n      <footer>\n        <button type=\"button\" (click)=\"downloadOpen.set(false)\">Cancel</button\n        ><button class=\"primary\" type=\"button\" [disabled]=\"downloadBusy()\" (click)=\"downloadPdf()\">\n          <svg lucideDownload></svg>{{ downloadBusy() ? 'Generating...' : 'Download PDF' }}\n        </button>\n      </footer>\n    </section>\n  }\n</main>\n<erp-student-mobile-bottom-nav />\n", styles: [":host {\n  display: block;\n  min-width: 0;\n}\n.timetable-page {\n  display: grid;\n  min-width: 0;\n  gap: 20px;\n  padding-bottom: 20px;\n  color: var(--student-color-text);\n}\nbutton,\ninput {\n  font: inherit;\n}\n.timetable-heading {\n  position: relative;\n  display: flex;\n  min-height: 112px;\n  align-items: center;\n  justify-content: space-between;\n}\n.timetable-heading nav {\n  display: flex;\n  gap: 10px;\n  margin-bottom: 10px;\n  color: var(--student-color-text-secondary);\n  font-size: 13px;\n}\n.timetable-heading nav a {\n  color: var(--student-color-primary);\n  text-decoration: none;\n}\n.timetable-heading h1 {\n  margin: 0;\n  color: var(--student-timetable-navy-strong);\n  font-size: clamp(30px, 2.35vw, 38px);\n  font-weight: 850;\n  letter-spacing: -0.04em;\n}\n.timetable-heading p {\n  margin: 5px 0 0;\n  color: var(--student-color-text-secondary);\n}\n.sync-status {\n  display: inline-flex;\n  align-items: center;\n  gap: 5px;\n  margin-left: 10px;\n  color: var(--student-color-primary-pressed);\n  font-size: 11px;\n  font-weight: 700;\n  white-space: nowrap;\n}\n.sync-status svg {\n  width: 13px;\n  height: 13px;\n}\n.sync-status.refreshing svg,\n.refresh-action:disabled svg {\n  animation: spin 800ms linear infinite;\n}\n.timetable-heading > img {\n  width: 152px;\n  height: 116px;\n  object-fit: contain;\n  filter: drop-shadow(\n    0 12px 16px color-mix(in srgb, var(--student-color-primary) 12%, transparent)\n  );\n}\n.mobile-back,\n.mobile-download {\n  display: none;\n}\n.timetable-board {\n  min-width: 0;\n  overflow: hidden;\n  padding: 14px 3px 3px;\n  border: 1px solid var(--student-color-border);\n  border-radius: 18px;\n  background: var(--student-color-surface);\n  box-shadow: var(--student-shadow-card);\n}\n.week-toolbar {\n  display: grid;\n  grid-template-columns: auto 1fr auto;\n  align-items: center;\n  gap: 20px;\n  padding: 0 12px 16px;\n  border: 0;\n  border-radius: 0;\n  background: var(--student-color-surface);\n  box-shadow: none;\n}\n.view-switch {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  overflow: hidden;\n  border: 1px solid var(--student-color-primary-middle);\n  border-radius: 9px;\n  background: var(--student-color-surface);\n}\n.view-switch button {\n  min-width: 104px;\n  min-height: 48px;\n  border: 0;\n  color: var(--student-color-text-secondary);\n  background: var(--student-color-surface);\n  font-weight: 750;\n  cursor: pointer;\n  transition:\n    color 160ms ease,\n    background 160ms ease,\n    box-shadow 160ms ease;\n}\n.view-switch button.active {\n  color: var(--student-color-text-inverse);\n  background: var(--student-color-primary);\n  box-shadow: var(--student-shadow-card);\n}\n.week-navigation {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 14px;\n}\n.week-navigation > button:not(.current-week) {\n  display: grid;\n  width: 42px;\n  height: 42px;\n  place-items: center;\n  border: 1px solid var(--student-color-border);\n  border-radius: 10px;\n  color: var(--student-color-text);\n  background: var(--student-color-surface);\n  cursor: pointer;\n  transition:\n    transform 150ms ease,\n    border-color 150ms ease,\n    background 150ms ease;\n}\n.week-navigation > button:not(.current-week):hover {\n  transform: translateY(-1px);\n  border-color: var(--student-color-primary-middle);\n  background: var(--student-color-primary-subtle);\n}\n.week-navigation svg {\n  width: 19px;\n}\n.week-navigation strong {\n  min-width: 194px;\n  color: var(--student-timetable-navy-strong);\n  font-size: 16px;\n  font-weight: 800;\n  text-align: center;\n}\n.week-navigation .current-week {\n  min-height: 42px;\n  padding: 0 14px;\n  border: 0;\n  border-radius: 9px;\n  color: var(--student-color-primary);\n  background: var(--student-color-primary-soft);\n  font-weight: 700;\n  cursor: pointer;\n}\n.week-navigation .current-week:disabled {\n  color: var(--student-color-text-secondary);\n  cursor: default;\n}\n.toolbar-actions {\n  display: flex;\n  gap: 10px;\n}\n.toolbar-actions button,\n.mobile-download {\n  display: flex;\n  min-height: 44px;\n  align-items: center;\n  gap: 9px;\n  padding: 0 16px;\n  border: 1px solid var(--student-color-primary);\n  border-radius: 10px;\n  color: var(--student-color-primary-pressed);\n  background: var(--student-color-surface);\n  font-weight: 750;\n  cursor: pointer;\n  transition:\n    color 160ms ease,\n    background 160ms ease,\n    box-shadow 160ms ease,\n    transform 160ms ease;\n}\n.toolbar-actions .refresh-action {\n  width: 44px;\n  padding: 0;\n  justify-content: center;\n}\n.toolbar-actions button:disabled,\n.mobile-download:disabled {\n  color: var(--student-color-text-muted);\n  border-color: var(--student-color-border);\n  cursor: default;\n}\n.toolbar-actions button:hover,\n.mobile-download:hover:not(:disabled) {\n  transform: translateY(-1px);\n  color: var(--student-color-text-inverse);\n  background: var(--student-color-primary);\n  box-shadow: var(--student-shadow-card);\n}\n.toolbar-actions svg,\n.mobile-download svg {\n  width: 20px;\n}\n.mobile-week-summary,\n.mobile-view-switch,\n.day-tabs,\n.mobile-day-table,\n.mobile-week-list {\n  display: none;\n}\n.desktop-grid {\n  overflow: auto;\n  border: 1px solid var(--student-color-border);\n  border-radius: 13px;\n  background: var(--student-color-surface);\n  box-shadow: none;\n}\n.desktop-grid table {\n  width: 100%;\n  min-width: 1080px;\n  border-collapse: collapse;\n  table-layout: fixed;\n}\n.desktop-grid.today-view table {\n  min-width: 620px;\n}\n.desktop-grid th,\n.desktop-grid td {\n  border-right: 1px solid var(--student-color-border);\n  border-bottom: 1px solid var(--student-color-border);\n}\n.desktop-grid tr:last-child > * {\n  border-bottom: 0;\n}\n.desktop-grid tr > *:last-child {\n  border-right: 0;\n}\n.desktop-grid thead th {\n  height: 80px;\n  color: var(--student-color-text-inverse);\n  background: linear-gradient(\n    120deg,\n    var(--student-timetable-navy-strong),\n    var(--student-timetable-navy)\n  );\n  font-size: 14px;\n  letter-spacing: 0.015em;\n  text-transform: uppercase;\n}\n.desktop-grid thead th:first-child {\n  width: 140px;\n}\n.desktop-grid thead th strong,\n.desktop-grid thead th span {\n  display: block;\n}\n.desktop-grid thead th span {\n  margin-top: 4px;\n  font-weight: 500;\n}\n.desktop-grid thead th.current {\n  box-shadow: inset 0 -5px 0 var(--student-timetable-current-line);\n}\n.desktop-grid tbody > tr > th {\n  width: 140px;\n  padding: 12px;\n  color: var(--student-color-text);\n  background: var(--student-color-surface-soft);\n  font-size: 15px;\n  font-weight: 800;\n  white-space: nowrap;\n}\n.desktop-grid td {\n  height: 92px;\n  padding: 6px;\n  vertical-align: middle;\n  background: var(--student-color-surface);\n}\n.desktop-grid td.break {\n  background: repeating-linear-gradient(\n    135deg,\n    var(--student-timetable-break),\n    var(--student-timetable-break) 5px,\n    var(--student-color-surface-soft) 5px,\n    var(--student-color-surface-soft) 9px\n  );\n  text-align: center;\n}\n.desktop-grid td.next-cell {\n  box-shadow: inset 0 0 0 1px var(--student-color-primary);\n}\n.desktop-grid td.live-cell {\n  box-shadow: inset 0 0 0 2px var(--student-color-success);\n}\n.class-card {\n  position: relative;\n  display: grid;\n  width: 100%;\n  height: 100%;\n  min-height: 78px;\n  align-content: center;\n  gap: 6px;\n  padding: 8px 9px 8px 15px;\n  overflow: hidden;\n  border: 1px solid transparent;\n  border-radius: 8px;\n  color: var(--student-color-text);\n  background: linear-gradient(\n    120deg,\n    var(--student-color-primary-subtle),\n    var(--student-color-primary-soft)\n  );\n  text-align: left;\n  cursor: pointer;\n  transition:\n    transform 160ms ease,\n    border-color 160ms ease,\n    box-shadow 160ms ease,\n    background 160ms ease;\n}\n.class-card:hover {\n  transform: translateY(-2px);\n  border-color: var(--student-color-primary-middle);\n  background: var(--student-color-primary-subtle);\n  box-shadow: var(--student-shadow-card);\n}\n.class-card::before {\n  position: absolute;\n  inset: 0 auto 0 0;\n  width: 4px;\n  background: var(--student-color-primary);\n  content: '';\n}\n.class-card > span {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 6px;\n}\n.class-card strong {\n  overflow: hidden;\n  font-size: 14px;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.class-card b {\n  padding: 3px 6px;\n  border-radius: 5px;\n  color: var(--student-color-primary-pressed);\n  background: var(--student-color-primary-soft);\n  font-size: 10px;\n}\n.class-card small {\n  display: flex;\n  align-items: center;\n  gap: 5px;\n  color: var(--student-color-text-secondary);\n  font-size: 11px;\n}\n.class-card small svg {\n  width: 14px;\n  height: 14px;\n}\n.class-card i {\n  position: absolute;\n  top: 6px;\n  right: 6px;\n  padding: 4px 7px;\n  border-radius: 5px;\n  color: var(--student-color-text-inverse);\n  background: var(--student-color-primary);\n  font-size: 9px;\n  font-style: normal;\n  text-transform: uppercase;\n}\n.class-card i.live {\n  background: var(--student-color-success);\n}\n.class-card:has(i) > span {\n  padding-right: 38px;\n}\n.class-card em {\n  position: absolute;\n  right: 7px;\n  bottom: 6px;\n  color: var(--student-color-primary);\n}\n.class-card em svg {\n  width: 14px;\n}\n.break-label {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n  color: var(--student-color-text-secondary);\n  font-size: 13px;\n  font-weight: 750;\n  text-transform: uppercase;\n}\n.break-label svg {\n  width: 20px;\n}\n.free-slot {\n  display: block;\n  color: var(--student-color-text-muted);\n  text-align: center;\n}\n.timetable-legend {\n  display: flex;\n  align-items: center;\n  gap: 34px;\n  min-height: 68px;\n  padding: 14px 22px;\n  border: 1px solid var(--student-color-border);\n  border-radius: 14px;\n  background: var(--student-color-surface);\n  box-shadow: var(--student-shadow-card);\n}\n.timetable-legend > span {\n  display: flex;\n  align-items: center;\n  gap: 9px;\n  color: var(--student-color-text-secondary);\n  font-size: 13px;\n}\n.timetable-legend i {\n  display: block;\n  width: 21px;\n  height: 21px;\n  border-radius: 5px;\n}\n.timetable-legend .lecture {\n  border-radius: 50%;\n  background: var(--student-color-primary);\n}\n.timetable-legend .break-key {\n  border: 1px solid var(--student-color-border);\n  background: var(--student-timetable-break);\n}\n.timetable-legend .next-key {\n  border: 1px solid var(--student-color-primary);\n  background: var(--student-color-surface);\n}\n.timetable-legend p {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  margin: 0 0 0 auto;\n  color: var(--student-color-text-secondary);\n  font-size: 13px;\n}\n.timetable-legend p svg {\n  width: 19px;\n}\n.compact-view .desktop-grid thead th {\n  height: 64px;\n}\n.compact-view .desktop-grid td {\n  height: 70px;\n}\n.compact-view .class-card {\n  min-height: 58px;\n  gap: 3px;\n  padding-block: 5px;\n}\n.timetable-state {\n  display: grid;\n  min-height: 340px;\n  align-content: center;\n  justify-items: center;\n  gap: 12px;\n  padding: 24px;\n  border: 1px solid var(--student-color-border);\n  border-radius: 18px;\n  background: var(--student-color-surface);\n  text-align: center;\n}\n.timetable-state > svg {\n  width: 46px;\n  height: 46px;\n  color: var(--student-color-primary);\n}\n.timetable-state > span {\n  width: 46px;\n  height: 46px;\n  border: 4px solid var(--student-color-primary-soft);\n  border-top-color: var(--student-color-primary);\n  border-radius: 50%;\n  animation: spin 800ms linear infinite;\n}\n.timetable-state p {\n  margin: 0;\n  color: var(--student-color-text-secondary);\n}\n.timetable-state button {\n  padding: 9px 15px;\n  border: 1px solid var(--student-color-primary);\n  border-radius: 9px;\n  color: var(--student-color-primary);\n  background: var(--student-color-surface);\n}\n@keyframes spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n.sheet-backdrop {\n  position: fixed;\n  z-index: var(--student-z-drawer);\n  inset: 0;\n  width: 100%;\n  height: 100%;\n  border: 0;\n  background: var(--student-color-overlay);\n}\n.detail-sheet {\n  position: fixed;\n  z-index: calc(var(--student-z-drawer) + 1);\n  top: 0;\n  right: 0;\n  display: flex;\n  width: min(460px, 100vw);\n  height: 100dvh;\n  flex-direction: column;\n  padding: 26px;\n  background: var(--student-color-surface);\n  box-shadow: var(--student-shadow-sidebar);\n  animation: sheet-in var(--student-motion-sidebar) var(--student-ease-standard);\n}\n@keyframes sheet-in {\n  from {\n    transform: translateX(100%);\n  }\n}\n.detail-sheet > header,\n.download-dialog > header {\n  display: grid;\n  grid-template-columns: 64px 1fr 40px;\n  align-items: center;\n  gap: 14px;\n}\n.detail-sheet > header > span,\n.download-dialog > header > span {\n  display: grid;\n  width: 62px;\n  height: 62px;\n  place-items: center;\n  border-radius: 12px;\n  color: var(--student-color-primary);\n  background: var(--student-color-primary-soft);\n}\n.detail-sheet > header > span svg,\n.download-dialog > header > span svg {\n  width: 31px;\n  height: 31px;\n}\n.detail-sheet h2,\n.download-dialog h2 {\n  margin: 0;\n  font-size: 24px;\n}\n.detail-sheet header small,\n.download-dialog header small {\n  display: block;\n  margin-top: 4px;\n  color: var(--student-color-text-secondary);\n}\n.detail-sheet header > button,\n.download-dialog header > button {\n  display: grid;\n  width: 40px;\n  height: 40px;\n  place-items: center;\n  border: 0;\n  color: var(--student-color-text);\n  background: transparent;\n}\n.class-time {\n  display: grid;\n  grid-template-columns: 30px 1fr auto;\n  align-items: center;\n  gap: 12px;\n  margin: 26px -26px 8px;\n  padding: 20px 26px;\n  color: var(--student-color-text-inverse);\n  background: linear-gradient(\n    110deg,\n    var(--student-timetable-navy-strong),\n    var(--student-timetable-navy)\n  );\n}\n.class-time svg {\n  width: 26px;\n}\n.class-time i {\n  padding: 5px 10px;\n  border: 1px solid var(--student-color-text-inverse);\n  border-radius: 7px;\n  font-style: normal;\n  text-transform: uppercase;\n}\n.detail-sheet dl {\n  margin: 6px 0;\n}\n.detail-sheet dl > div {\n  display: grid;\n  grid-template-columns: 145px 1fr;\n  align-items: center;\n  padding: 17px 0;\n  border-bottom: 1px solid var(--student-color-divider);\n}\n.detail-sheet dt {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  color: var(--student-color-text-secondary);\n}\n.detail-sheet dt svg {\n  width: 20px;\n}\n.detail-sheet dd {\n  margin: 0;\n  font-weight: 700;\n}\n.subject-link {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  margin-top: 16px;\n  color: var(--student-color-primary);\n  font-weight: 700;\n}\n.subject-link svg {\n  width: 21px;\n}\n.detail-sheet > footer,\n.download-dialog > footer {\n  display: grid;\n  grid-template-columns: 1fr 1.5fr;\n  gap: 12px;\n  margin-top: auto;\n  padding-top: 18px;\n  border-top: 1px solid var(--student-color-divider);\n}\n.detail-sheet > footer button,\n.download-dialog > footer button {\n  display: flex;\n  min-height: 52px;\n  align-items: center;\n  justify-content: center;\n  gap: 9px;\n  border: 1px solid var(--student-color-primary);\n  border-radius: 10px;\n  color: var(--student-color-primary);\n  background: var(--student-color-surface);\n  font-weight: 750;\n}\n.detail-sheet > footer .primary,\n.download-dialog > footer .primary {\n  color: var(--student-color-text-inverse);\n  background: var(--student-color-primary);\n}\n.detail-sheet > footer svg,\n.download-dialog > footer svg {\n  width: 19px;\n}\n.subject-search {\n  display: flex;\n  min-height: 50px;\n  align-items: center;\n  gap: 10px;\n  margin: 20px 0;\n  padding: 0 14px;\n  border: 1px solid var(--student-color-border-strong);\n  border-radius: 11px;\n  color: var(--student-color-text-secondary);\n}\n.subject-search svg {\n  width: 20px;\n}\n.subject-search input {\n  width: 100%;\n  border: 0;\n  outline: 0;\n  color: var(--student-color-text);\n  background: transparent;\n}\n.subject-list {\n  overflow: auto;\n  border: 1px solid var(--student-color-border);\n  border-radius: 12px;\n}\n.subject-list-head {\n  display: grid;\n  grid-template-columns: 1fr 70px;\n  padding: 13px 18px;\n  color: var(--student-color-text-secondary);\n  background: var(--student-color-surface-soft);\n  font-size: 12px;\n  font-weight: 750;\n  text-transform: uppercase;\n}\n.subject-list article {\n  display: grid;\n  grid-template-columns: 38px minmax(0, 1fr) 50px 18px;\n  align-items: center;\n  gap: 10px;\n  padding: 14px 16px;\n  border-bottom: 1px solid var(--student-color-divider);\n}\n.subject-list article:last-child {\n  border: 0;\n}\n.subject-list article > svg:first-child {\n  color: var(--student-color-primary);\n}\n.subject-list article > div {\n  display: grid;\n  gap: 3px;\n}\n.subject-list article small {\n  color: var(--student-color-text-secondary);\n}\n.subject-list article b {\n  text-align: center;\n}\n.subject-list > p {\n  padding: 20px;\n  color: var(--student-color-text-secondary);\n  text-align: center;\n}\n.subjects-sheet > footer {\n  grid-template-columns: 1fr;\n}\n.preference-list {\n  display: grid;\n  gap: 0;\n  margin-top: 22px;\n  border-top: 1px solid var(--student-color-divider);\n}\n.preference-list > label,\n.preference-list > section {\n  display: grid;\n  min-height: 82px;\n  grid-template-columns: minmax(0, 1fr) auto;\n  align-items: center;\n  gap: 18px;\n  padding: 15px 0;\n  border-bottom: 1px solid var(--student-color-divider);\n}\n.preference-list span,\n.preference-list section > div:first-child {\n  display: grid;\n  gap: 3px;\n}\n.preference-list small {\n  color: var(--student-color-text-secondary);\n  line-height: 1.4;\n}\n.preference-list input[type='checkbox'] {\n  width: 42px;\n  height: 23px;\n  appearance: none;\n  padding: 2px;\n  border: 1px solid var(--student-color-border-strong);\n  border-radius: var(--student-radius-pill);\n  background: var(--student-color-surface-soft);\n  cursor: pointer;\n  transition: background var(--student-motion-standard) var(--student-ease-standard);\n}\n.preference-list input[type='checkbox']::before {\n  display: block;\n  width: 17px;\n  height: 17px;\n  border-radius: 50%;\n  background: var(--student-color-surface-raised);\n  box-shadow: var(--student-shadow-card);\n  content: '';\n  transition: transform var(--student-motion-standard) var(--student-ease-standard);\n}\n.preference-list input[type='checkbox']:checked {\n  border-color: var(--student-color-primary);\n  background: var(--student-color-primary);\n}\n.preference-list input[type='checkbox']:checked::before {\n  transform: translateX(19px);\n}\n.preference-segment {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  overflow: hidden;\n  border: 1px solid var(--student-color-border-strong);\n  border-radius: 9px;\n}\n.preference-segment button {\n  min-width: 62px;\n  min-height: 38px;\n  border: 0;\n  color: var(--student-color-text-secondary);\n  background: var(--student-color-surface);\n  cursor: pointer;\n}\n.preference-segment button.active {\n  color: var(--student-color-text-inverse);\n  background: var(--student-color-primary);\n  font-weight: 750;\n}\n.reminder-preference select {\n  min-height: 42px;\n  padding: 0 34px 0 12px;\n  border: 1px solid var(--student-color-border-strong);\n  border-radius: 9px;\n  color: var(--student-color-text);\n  background: var(--student-color-surface);\n}\n.download-dialog {\n  position: fixed;\n  z-index: calc(var(--student-z-dialog) + 1);\n  top: 50%;\n  left: 50%;\n  display: flex;\n  width: min(1000px, calc(100vw - 40px));\n  max-height: calc(100dvh - 40px);\n  flex-direction: column;\n  padding: 24px;\n  transform: translate(-50%, -50%);\n  border-radius: 18px;\n  background: var(--student-color-surface);\n  box-shadow: var(--student-shadow-overlay);\n}\n.download-layout {\n  display: grid;\n  min-height: 0;\n  grid-template-columns: minmax(0, 1fr) 250px;\n  gap: 14px;\n  margin: 18px 0;\n}\n.pdf-preview {\n  min-height: 390px;\n  overflow: auto;\n  padding: 18px;\n  border: 1px solid var(--student-color-border);\n  background: var(--student-color-surface-soft);\n  box-shadow: inset 0 0 0 8px var(--student-timetable-break);\n}\n.pdf-head {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 8px;\n  color: var(--student-color-text);\n}\n.pdf-head strong {\n  font-size: 15px;\n}\n.pdf-head small {\n  color: var(--student-color-text-secondary);\n}\n.pdf-preview table {\n  width: 100%;\n  border-collapse: collapse;\n  table-layout: fixed;\n  font-size: 9px;\n}\n.pdf-preview th,\n.pdf-preview td {\n  height: 38px;\n  padding: 4px;\n  border: 1px solid var(--student-color-border);\n  text-align: center;\n}\n.pdf-preview thead th {\n  color: var(--student-color-text-inverse);\n  background: var(--student-timetable-navy);\n}\n.download-layout > aside {\n  padding: 18px;\n  border: 1px solid var(--student-color-border);\n  border-radius: 12px;\n}\n.file-icon {\n  display: grid;\n  width: 70px;\n  height: 70px;\n  place-items: center;\n  border-radius: 12px;\n  color: var(--student-color-primary);\n  background: var(--student-color-primary-soft);\n}\n.file-icon svg {\n  width: 35px;\n}\n.download-layout aside h3 {\n  margin: 14px 0 5px;\n  font-size: 17px;\n  word-break: break-word;\n}\n.download-layout aside > p {\n  margin: 0;\n  color: var(--student-color-text-secondary);\n}\n.download-layout aside dl {\n  margin: 18px 0 0;\n}\n.download-layout aside dl > div {\n  display: flex;\n  justify-content: space-between;\n  gap: 10px;\n  padding: 12px 0;\n  border-top: 1px solid var(--student-color-divider);\n}\n.download-layout aside dt {\n  color: var(--student-color-text-secondary);\n}\n.download-layout aside dd {\n  margin: 0;\n  text-align: right;\n}\n.include-details {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  color: var(--student-color-text-secondary);\n}\n.include-details input {\n  width: 20px;\n  height: 20px;\n  accent-color: var(--student-color-primary);\n}\n.download-dialog > footer {\n  margin-top: 16px;\n  margin-left: auto;\n  grid-template-columns: 160px 250px;\n}\n.timetable-toast {\n  position: fixed;\n  z-index: calc(var(--student-z-dialog) + 2);\n  right: 24px;\n  bottom: 24px;\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 13px 16px;\n  border: 1px solid var(--student-color-primary-middle);\n  border-radius: 11px;\n  color: var(--student-color-text);\n  background: var(--student-color-surface);\n  box-shadow: var(--student-shadow-overlay);\n}\n.timetable-toast button {\n  display: grid;\n  width: 28px;\n  height: 28px;\n  place-items: center;\n  border: 0;\n  background: transparent;\n}\n.timetable-toast svg {\n  width: 16px;\n}\n@media (max-width: 1100px) {\n  .week-toolbar {\n    grid-template-columns: auto 1fr;\n  }\n  .toolbar-actions {\n    grid-column: 1/-1;\n    justify-content: flex-end;\n  }\n  .desktop-grid table {\n    min-width: 980px;\n  }\n  .class-card b {\n    display: none;\n  }\n}\n@media (max-width: 767px) {\n  .timetable-page {\n    gap: 16px;\n    padding-bottom: 92px;\n  }\n  .timetable-heading {\n    min-height: 84px;\n    padding-left: 46px;\n  }\n  .timetable-heading nav,\n  .timetable-heading p,\n  .timetable-heading > img {\n    display: none;\n  }\n  .timetable-heading h1 {\n    font-size: 30px;\n  }\n  .mobile-back {\n    position: absolute;\n    left: 0;\n    display: grid;\n    width: 38px;\n    height: 42px;\n    place-items: center;\n    color: var(--student-color-text);\n  }\n  .mobile-back svg {\n    width: 27px;\n  }\n  .mobile-download {\n    position: absolute;\n    right: 0;\n    display: flex;\n    min-height: 46px;\n    padding: 0 13px;\n  }\n  .week-toolbar {\n    display: none;\n  }\n  .timetable-board {\n    display: none;\n  }\n  .mobile-week-summary {\n    display: grid;\n    min-height: 66px;\n    grid-template-columns: 42px auto 1fr 38px;\n    align-items: center;\n    gap: 10px;\n    padding: 0 16px;\n    border-radius: 13px;\n    background: var(--student-color-primary-soft);\n  }\n  .mobile-week-summary svg {\n    width: 28px;\n  }\n  .mobile-week-summary strong {\n    font-size: 17px;\n  }\n  .mobile-week-summary span {\n    padding-left: 16px;\n    border-left: 1px solid var(--student-color-border-strong);\n    color: var(--student-color-text-secondary);\n  }\n  .mobile-week-summary button {\n    display: grid;\n    width: 38px;\n    height: 38px;\n    padding: 0;\n    place-items: center;\n    border: 1px solid var(--student-color-primary-middle);\n    border-radius: 9px;\n    color: var(--student-color-primary-pressed);\n    background: var(--student-color-surface);\n  }\n  .mobile-week-summary button svg {\n    width: 19px;\n  }\n  .mobile-view-switch {\n    display: grid;\n    width: min(400px, 100%);\n  }\n  .day-tabs {\n    display: grid;\n    grid-template-columns: repeat(6, 1fr);\n    border-bottom: 1px solid var(--student-color-border);\n  }\n  .day-tabs button {\n    position: relative;\n    display: grid;\n    gap: 5px;\n    min-height: 74px;\n    place-content: center;\n    border: 0;\n    color: var(--student-color-text-secondary);\n    background: transparent;\n  }\n  .day-tabs button strong {\n    font-size: 18px;\n  }\n  .day-tabs button.active {\n    color: var(--student-color-primary);\n    font-weight: 750;\n  }\n  .day-tabs button.active::after {\n    position: absolute;\n    right: 10%;\n    bottom: -2px;\n    left: 10%;\n    height: 4px;\n    border-radius: 4px;\n    background: var(--student-color-primary);\n    content: '';\n  }\n  .desktop-grid {\n    display: none;\n  }\n  .mobile-day-table {\n    display: block;\n    overflow: hidden;\n    border: 1px solid var(--student-color-border);\n    border-radius: 13px;\n    background: var(--student-color-surface);\n  }\n  .mobile-week-list {\n    display: grid;\n    gap: 10px;\n  }\n  .mobile-week-list > article {\n    display: grid;\n    grid-template-columns: 56px minmax(0, 1fr);\n    overflow: hidden;\n    border: 1px solid var(--student-color-border);\n    border-radius: 12px;\n    background: var(--student-color-surface);\n  }\n  .mobile-week-list > article > header {\n    display: grid;\n    align-content: center;\n    justify-items: center;\n    color: var(--student-color-text-inverse);\n    background: var(--student-timetable-navy);\n  }\n  .mobile-week-list > article > header span {\n    font-size: 18px;\n    font-weight: 800;\n  }\n  .mobile-week-list article > div > button {\n    display: grid;\n    width: 100%;\n    min-height: 62px;\n    grid-template-columns: 52px 1fr 18px;\n    align-items: center;\n    gap: 8px;\n    padding: 8px 12px;\n    border: 0;\n    border-bottom: 1px solid var(--student-color-divider);\n    color: var(--student-color-text);\n    background: transparent;\n    text-align: left;\n  }\n  .mobile-week-list article > div > button:last-child {\n    border-bottom: 0;\n  }\n  .mobile-week-list article > div > button.next {\n    background: var(--student-color-primary-soft);\n  }\n  .mobile-week-list time {\n    color: var(--student-color-text-secondary);\n    font-size: 12px;\n  }\n  .mobile-week-list button span {\n    display: grid;\n    gap: 3px;\n  }\n  .mobile-week-list button small {\n    color: var(--student-color-text-secondary);\n  }\n  .mobile-week-list article > div > p {\n    margin: 0;\n    padding: 20px;\n    color: var(--student-color-text-muted);\n    text-align: center;\n  }\n  .mobile-day-table table {\n    width: 100%;\n    border-collapse: collapse;\n    table-layout: fixed;\n  }\n  .mobile-day-table th,\n  .mobile-day-table td {\n    padding: 13px 12px;\n    border-right: 1px solid var(--student-color-border);\n    border-bottom: 1px solid var(--student-color-border);\n    text-align: left;\n  }\n  .mobile-day-table tr > *:last-child {\n    border-right: 0;\n  }\n  .mobile-day-table tr:last-child > * {\n    border-bottom: 0;\n  }\n  .mobile-day-table thead th {\n    height: 48px;\n    color: var(--student-color-text-inverse);\n    background: var(--student-timetable-navy);\n    font-size: 11px;\n    text-transform: uppercase;\n  }\n  .mobile-day-table thead th:first-child {\n    width: 25%;\n  }\n  .mobile-day-table thead th:last-child {\n    width: 23%;\n  }\n  .mobile-day-table tbody th {\n    font-size: 13px;\n    white-space: nowrap;\n  }\n  .mobile-day-table tbody tr {\n    height: 94px;\n  }\n  .mobile-day-table tbody tr:not(.break) {\n    cursor: pointer;\n  }\n  .mobile-day-table tbody tr.break {\n    height: 72px;\n    background: var(--student-timetable-break);\n  }\n  .mobile-day-table tbody tr.next-row td:nth-child(2) {\n    box-shadow: inset 4px 0 0 var(--student-color-primary);\n  }\n  .mobile-subject {\n    position: relative;\n    display: grid;\n    gap: 4px;\n  }\n  .mobile-subject strong {\n    font-size: 14px;\n  }\n  .mobile-subject small {\n    color: var(--student-color-text-secondary);\n    font-size: 12px;\n  }\n  .mobile-subject i {\n    position: absolute;\n    right: 0;\n    bottom: 0;\n    padding: 3px 7px;\n    border: 1px solid var(--student-color-primary);\n    border-radius: 5px;\n    color: var(--student-color-primary);\n    font-size: 9px;\n    font-style: normal;\n    text-transform: uppercase;\n  }\n  .room {\n    display: flex;\n    align-items: center;\n    gap: 6px;\n    font-size: 12px;\n  }\n  .room svg {\n    width: 19px;\n    min-width: 19px;\n  }\n  .free-period {\n    color: var(--student-color-text-secondary);\n    text-transform: uppercase;\n  }\n  .timetable-legend {\n    padding: 2px 8px;\n    border: 0;\n    background: transparent;\n  }\n  .timetable-legend > span {\n    display: none;\n  }\n  .timetable-legend p {\n    margin: 0;\n  }\n  .detail-sheet {\n    top: auto;\n    bottom: 0;\n    width: 100%;\n    height: auto;\n    max-height: calc(100dvh - 72px);\n    padding: 22px;\n    border-radius: 26px 26px 0 0;\n    animation: sheet-up var(--student-motion-sidebar) var(--student-ease-standard);\n  }\n  @keyframes sheet-up {\n    from {\n      transform: translateY(100%);\n    }\n  }\n  .detail-sheet::before,\n  .download-dialog::before {\n    width: 90px;\n    height: 7px;\n    margin: -10px auto 18px;\n    border-radius: var(--student-radius-pill);\n    background: var(--student-color-border-strong);\n    content: '';\n  }\n  .detail-sheet > header {\n    grid-template-columns: 55px 1fr 38px;\n  }\n  .detail-sheet > header > span {\n    width: 54px;\n    height: 54px;\n  }\n  .detail-sheet h2 {\n    font-size: 22px;\n  }\n  .class-time {\n    margin: 20px -22px 5px;\n    padding: 17px 22px;\n  }\n  .detail-sheet dl > div {\n    grid-template-columns: 42% 1fr;\n    padding: 14px 0;\n  }\n  .detail-sheet > footer {\n    position: sticky;\n    bottom: -22px;\n    margin: 16px -22px -22px;\n    padding: 14px 22px;\n    background: var(--student-color-surface);\n  }\n  .preference-list > label,\n  .preference-list > section {\n    min-height: 74px;\n  }\n  .subjects-sheet {\n    height: min(720px, calc(100dvh - 72px));\n  }\n  .subject-list article {\n    grid-template-columns: 34px minmax(0, 1fr) 35px 15px;\n    padding: 13px 10px;\n  }\n  .subject-list article small:last-child {\n    display: none;\n  }\n  .download-dialog {\n    top: auto;\n    bottom: 0;\n    left: 0;\n    width: 100%;\n    max-height: calc(100dvh - 40px);\n    padding: 20px;\n    transform: none;\n    border-radius: 26px 26px 0 0;\n    animation: sheet-up var(--student-motion-sidebar) var(--student-ease-standard);\n  }\n  .download-dialog > header {\n    grid-template-columns: 55px 1fr 38px;\n  }\n  .download-dialog > header > span {\n    width: 54px;\n    height: 54px;\n  }\n  .download-dialog h2 {\n    font-size: 23px;\n  }\n  .download-layout {\n    display: block;\n    overflow: auto;\n  }\n  .pdf-preview {\n    min-height: auto;\n    padding: 12px;\n  }\n  .download-layout > aside {\n    padding: 0;\n    border: 0;\n  }\n  .download-layout > aside .file-icon {\n    display: none;\n  }\n  .download-layout aside h3 {\n    margin-top: 15px;\n  }\n  .download-layout aside dl {\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n  }\n  .download-layout aside dl > div {\n    display: grid;\n  }\n  .download-layout aside dl > div:nth-child(3),\n  .download-layout aside dl > div:nth-child(4) {\n    display: none;\n  }\n  .include-details {\n    margin: 10px 0;\n  }\n  .download-dialog > footer {\n    position: sticky;\n    bottom: -20px;\n    width: calc(100% + 40px);\n    grid-template-columns: 1fr 1.2fr;\n    margin: 12px -20px -20px;\n    padding: 14px 20px;\n    background: var(--student-color-surface);\n  }\n  .timetable-toast {\n    right: 12px;\n    bottom: 90px;\n    left: 12px;\n    justify-content: space-between;\n  }\n  .mobile-day-table + .timetable-legend {\n    margin-top: 0;\n  }\n}\n@media (max-width: 480px) {\n  .timetable-heading h1 {\n    font-size: 25px;\n  }\n  .mobile-download {\n    padding: 0 9px;\n    font-size: 12px;\n  }\n  .mobile-week-summary {\n    grid-template-columns: 34px auto 1fr 34px;\n    padding: 0 10px;\n  }\n  .mobile-week-summary strong {\n    font-size: 14px;\n  }\n  .mobile-week-summary span {\n    font-size: 12px;\n  }\n  .view-switch button {\n    min-width: 0;\n  }\n  .day-tabs button {\n    font-size: 11px;\n  }\n  .day-tabs button strong {\n    font-size: 16px;\n  }\n  .mobile-day-table th,\n  .mobile-day-table td {\n    padding: 10px 7px;\n  }\n  .mobile-day-table tbody th {\n    font-size: 11px;\n  }\n  .mobile-subject strong {\n    font-size: 12px;\n  }\n  .room {\n    font-size: 10px;\n  }\n}\n@media (prefers-reduced-motion: reduce) {\n  .detail-sheet,\n  .download-dialog,\n  .timetable-state > span {\n    animation: none;\n  }\n}\n"] }]
    }], () => [], { closeOverlays: [{
            type: HostListener,
            args: ['document:keydown.escape']
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(StudentTimetableComponent, { className: "StudentTimetableComponent", filePath: "frontend/src/app/features/student/academics/student-timetable.component.ts", lineNumber: 80 }); })();
