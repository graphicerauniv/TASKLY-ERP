import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LucideCalendarDays, LucideCheck, LucideChevronDown, LucideChevronLeft, LucideChevronRight, LucideClock3, LucideColumns3, LucideEllipsisVertical, LucideFilter, LucideInfo, LucideLayers3, LucidePencil, LucidePlus, LucideRefreshCw, LucideSearch, LucideTrash2, LucideX, } from '@lucide/angular';
import { ActivatedRoute, Router } from '@angular/router';
import { forkJoin } from 'rxjs';
import { ApiService } from '../../../core/api.service';
import { ERP_PAGINATION } from '../../../core/config/data-view.constants';
import { AdminIllustrationComponent } from '../../../shared/ui/admin-illustration/admin-illustration.component';
import { AdminPageComponent } from '../../../shared/ui/admin-page/admin-page.component';
import { MultiSelectDropdownComponent, } from '../../../shared/ui/multi-select-dropdown/multi-select-dropdown.component';
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
const _c0 = () => [4, 5, 6, 7, 8, 9, 10, 12];
const _forTrack0 = ($index, $item) => $item._id;
function TimetableSetupComponent_Conditional_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 3);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r0.error());
} }
function TimetableSetupComponent_Conditional_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 4);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r0.message());
} }
function TimetableSetupComponent_Conditional_6_For_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 23);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const master_r3 = ctx.$implicit;
    i0.ɵɵproperty("value", master_r3._id);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(master_r3.name);
} }
function TimetableSetupComponent_Conditional_6_Template(rf, ctx) { if (rf & 1) {
    const _r2 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "section", 5);
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(1, "svg", 28);
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(2, "span");
    i0.ɵɵtext(3, "Timetable master:");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "select", 22);
    i0.ɵɵlistener("ngModelChange", function TimetableSetupComponent_Conditional_6_Template_select_ngModelChange_4_listener($event) { i0.ɵɵrestoreView(_r2); const ctx_r0 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r0.chooseMaster($event)); });
    i0.ɵɵelementStart(5, "option", 29);
    i0.ɵɵtext(6, "All masters");
    i0.ɵɵelementEnd();
    i0.ɵɵrepeaterCreate(7, TimetableSetupComponent_Conditional_6_For_8_Template, 2, 2, "option", 23, _forTrack0);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("ngModel", ctx_r0.selectedMasterId);
    i0.ɵɵadvance(3);
    i0.ɵɵrepeater(ctx_r0.masters());
} }
function TimetableSetupComponent_Conditional_27_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "tr")(1, "th");
    i0.ɵɵtext(2, "Name");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "th");
    i0.ɵɵtext(4, "Academic session");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "th");
    i0.ɵɵtext(6, "University");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "th");
    i0.ɵɵtext(8, "College");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(9, "th");
    i0.ɵɵtext(10, "Status");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(11, "th");
    i0.ɵɵtext(12, "Last updated");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(13, "th");
    i0.ɵɵtext(14, "Actions");
    i0.ɵɵelementEnd()();
} }
function TimetableSetupComponent_Conditional_28_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "tr")(1, "th");
    i0.ɵɵtext(2, "Name");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "th");
    i0.ɵɵtext(4, "Timetable");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "th");
    i0.ɵɵtext(6, "Working days");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "th");
    i0.ɵɵtext(8, "Number of periods");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(9, "th");
    i0.ɵɵtext(10, "Status");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(11, "th");
    i0.ɵɵtext(12, "Last updated");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(13, "th");
    i0.ɵɵtext(14, "Actions");
    i0.ɵɵelementEnd()();
} }
function TimetableSetupComponent_For_31_Conditional_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(2, "td");
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "td");
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const record_r5 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(record_r5.academicSession);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(record_r5.universityName || "\u2014");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(record_r5.collegeName || "\u2014");
} }
function TimetableSetupComponent_For_31_Conditional_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(2, "td");
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "td");
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const record_r5 = i0.ɵɵnextContext().$implicit;
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r0.masterName(record_r5.timetableMasterId));
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate2(" ", record_r5.workingDays.slice(0, 2).join(", "), "", record_r5.workingDays.length > 2 ? " +" + (record_r5.workingDays.length - 2) : "", " ");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1("", record_r5.periodCount, " periods");
} }
function TimetableSetupComponent_For_31_Template(rf, ctx) { if (rf & 1) {
    const _r4 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "tr", 30);
    i0.ɵɵlistener("dblclick", function TimetableSetupComponent_For_31_Template_tr_dblclick_0_listener() { const record_r5 = i0.ɵɵrestoreView(_r4).$implicit; const ctx_r0 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r0.openDetail(record_r5)); });
    i0.ɵɵelementStart(1, "td")(2, "strong");
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd()();
    i0.ɵɵconditionalCreate(4, TimetableSetupComponent_For_31_Conditional_4_Template, 6, 3)(5, TimetableSetupComponent_For_31_Conditional_5_Template, 6, 4);
    i0.ɵɵelementStart(6, "td")(7, "span", 31);
    i0.ɵɵelement(8, "i");
    i0.ɵɵtext(9);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(10, "td");
    i0.ɵɵtext(11, "\u2014");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(12, "td")(13, "button", 32);
    i0.ɵɵlistener("click", function TimetableSetupComponent_For_31_Template_button_click_13_listener() { const record_r5 = i0.ɵɵrestoreView(_r4).$implicit; const ctx_r0 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r0.openDetail(record_r5)); });
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(14, "svg", 33);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const record_r5 = ctx.$implicit;
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(record_r5.name);
    i0.ɵɵadvance();
    i0.ɵɵconditional(ctx_r0.isMaster(record_r5) ? 4 : 5);
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(record_r5.isActive ? "Active" : "Inactive");
} }
function TimetableSetupComponent_Conditional_36_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 20);
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(1, "svg", 34);
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(2, "span");
    i0.ɵɵtext(3, "Create a master first, then add structures and periods.");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "button", 35);
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(5, "svg", 36);
    i0.ɵɵelementEnd()();
} }
function TimetableSetupComponent_For_43_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 23);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const size_r6 = ctx.$implicit;
    i0.ɵɵproperty("value", size_r6);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1("", size_r6, " / page");
} }
function TimetableSetupComponent_Conditional_50_Conditional_3_Conditional_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(0, "svg", 41);
} }
function TimetableSetupComponent_Conditional_50_Conditional_3_Conditional_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(0, "svg", 42);
} }
function TimetableSetupComponent_Conditional_50_Conditional_3_Conditional_12_For_10_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 23);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r10 = ctx.$implicit;
    i0.ɵɵproperty("value", item_r10);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(item_r10);
} }
function TimetableSetupComponent_Conditional_50_Conditional_3_Conditional_12_For_18_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 23);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r11 = ctx.$implicit;
    i0.ɵɵproperty("value", item_r11._id);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(item_r11.name);
} }
function TimetableSetupComponent_Conditional_50_Conditional_3_Conditional_12_For_26_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 23);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r12 = ctx.$implicit;
    i0.ɵɵproperty("value", item_r12._id);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(item_r12.name);
} }
function TimetableSetupComponent_Conditional_50_Conditional_3_Conditional_12_Template(rf, ctx) { if (rf & 1) {
    const _r9 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "fieldset", 49)(1, "legend");
    i0.ɵɵtext(2, "Academic scope");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "label")(4, "span");
    i0.ɵɵtext(5, "Academic session *");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "select", 22);
    i0.ɵɵtwoWayListener("ngModelChange", function TimetableSetupComponent_Conditional_50_Conditional_3_Conditional_12_Template_select_ngModelChange_6_listener($event) { i0.ɵɵrestoreView(_r9); const ctx_r0 = i0.ɵɵnextContext(3); i0.ɵɵtwoWayBindingSet(ctx_r0.session, $event) || (ctx_r0.session = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementStart(7, "option", 29);
    i0.ɵɵtext(8, "Select session");
    i0.ɵɵelementEnd();
    i0.ɵɵrepeaterCreate(9, TimetableSetupComponent_Conditional_50_Conditional_3_Conditional_12_For_10_Template, 2, 2, "option", 23, i0.ɵɵrepeaterTrackByIdentity);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(11, "label")(12, "span");
    i0.ɵɵtext(13, "University *");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(14, "select", 22);
    i0.ɵɵtwoWayListener("ngModelChange", function TimetableSetupComponent_Conditional_50_Conditional_3_Conditional_12_Template_select_ngModelChange_14_listener($event) { i0.ɵɵrestoreView(_r9); const ctx_r0 = i0.ɵɵnextContext(3); i0.ɵɵtwoWayBindingSet(ctx_r0.universityId, $event) || (ctx_r0.universityId = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵlistener("ngModelChange", function TimetableSetupComponent_Conditional_50_Conditional_3_Conditional_12_Template_select_ngModelChange_14_listener() { i0.ɵɵrestoreView(_r9); const ctx_r0 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r0.loadColleges()); });
    i0.ɵɵelementStart(15, "option", 29);
    i0.ɵɵtext(16, "Select university");
    i0.ɵɵelementEnd();
    i0.ɵɵrepeaterCreate(17, TimetableSetupComponent_Conditional_50_Conditional_3_Conditional_12_For_18_Template, 2, 2, "option", 23, _forTrack0);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(19, "label")(20, "span");
    i0.ɵɵtext(21, "College *");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(22, "select", 50);
    i0.ɵɵtwoWayListener("ngModelChange", function TimetableSetupComponent_Conditional_50_Conditional_3_Conditional_12_Template_select_ngModelChange_22_listener($event) { i0.ɵɵrestoreView(_r9); const ctx_r0 = i0.ɵɵnextContext(3); i0.ɵɵtwoWayBindingSet(ctx_r0.collegeId, $event) || (ctx_r0.collegeId = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementStart(23, "option", 29);
    i0.ɵɵtext(24);
    i0.ɵɵelementEnd();
    i0.ɵɵrepeaterCreate(25, TimetableSetupComponent_Conditional_50_Conditional_3_Conditional_12_For_26_Template, 2, 2, "option", 23, _forTrack0);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(27, "small");
    i0.ɵɵtext(28, "Colleges are filtered based on the selected university.");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(29, "fieldset", 49)(30, "legend");
    i0.ɵɵtext(31, "Master details");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(32, "label")(33, "span");
    i0.ɵɵtext(34, "Name *");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(35, "input", 51);
    i0.ɵɵtwoWayListener("ngModelChange", function TimetableSetupComponent_Conditional_50_Conditional_3_Conditional_12_Template_input_ngModelChange_35_listener($event) { i0.ɵɵrestoreView(_r9); const ctx_r0 = i0.ɵɵnextContext(3); i0.ɵɵtwoWayBindingSet(ctx_r0.name, $event) || (ctx_r0.name = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(36, "div", 52);
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(37, "svg", 34);
    i0.ɵɵtext(38, " Structures and periods are configured after this master is created. ");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(6);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r0.session);
    i0.ɵɵadvance(3);
    i0.ɵɵrepeater(ctx_r0.sessions());
    i0.ɵɵadvance(5);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r0.universityId);
    i0.ɵɵadvance(3);
    i0.ɵɵrepeater(ctx_r0.universities());
    i0.ɵɵadvance(5);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r0.collegeId);
    i0.ɵɵproperty("disabled", !ctx_r0.universityId);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", ctx_r0.universityId ? "Select college" : "Select a university first", " ");
    i0.ɵɵadvance();
    i0.ɵɵrepeater(ctx_r0.colleges());
    i0.ɵɵadvance(10);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r0.name);
} }
function TimetableSetupComponent_Conditional_50_Conditional_3_Conditional_13_For_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 23);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const master_r14 = ctx.$implicit;
    i0.ɵɵproperty("value", master_r14._id);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(master_r14.name);
} }
function TimetableSetupComponent_Conditional_50_Conditional_3_Conditional_13_For_21_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 23);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r15 = ctx.$implicit;
    i0.ɵɵproperty("value", item_r15);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1("", item_r15, " periods");
} }
function TimetableSetupComponent_Conditional_50_Conditional_3_Conditional_13_Template(rf, ctx) { if (rf & 1) {
    const _r13 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "label")(1, "span");
    i0.ɵɵtext(2, "Timetable *");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "select", 50);
    i0.ɵɵtwoWayListener("ngModelChange", function TimetableSetupComponent_Conditional_50_Conditional_3_Conditional_13_Template_select_ngModelChange_3_listener($event) { i0.ɵɵrestoreView(_r13); const ctx_r0 = i0.ɵɵnextContext(3); i0.ɵɵtwoWayBindingSet(ctx_r0.timetableMasterId, $event) || (ctx_r0.timetableMasterId = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementStart(4, "option", 29);
    i0.ɵɵtext(5, "Select timetable");
    i0.ɵɵelementEnd();
    i0.ɵɵrepeaterCreate(6, TimetableSetupComponent_Conditional_50_Conditional_3_Conditional_13_For_7_Template, 2, 2, "option", 23, _forTrack0);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(8, "label")(9, "span");
    i0.ɵɵtext(10, "Name *");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(11, "input", 53);
    i0.ɵɵtwoWayListener("ngModelChange", function TimetableSetupComponent_Conditional_50_Conditional_3_Conditional_13_Template_input_ngModelChange_11_listener($event) { i0.ɵɵrestoreView(_r13); const ctx_r0 = i0.ɵɵnextContext(3); i0.ɵɵtwoWayBindingSet(ctx_r0.name, $event) || (ctx_r0.name = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(12, "div", 54)(13, "span");
    i0.ɵɵtext(14, "Working days *");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(15, "erp-multi-select-dropdown", 55);
    i0.ɵɵlistener("valueChange", function TimetableSetupComponent_Conditional_50_Conditional_3_Conditional_13_Template_erp_multi_select_dropdown_valueChange_15_listener($event) { i0.ɵɵrestoreView(_r13); const ctx_r0 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r0.workingDays = $event); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(16, "label")(17, "span");
    i0.ɵɵtext(18, "Number of periods *");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(19, "select", 50);
    i0.ɵɵtwoWayListener("ngModelChange", function TimetableSetupComponent_Conditional_50_Conditional_3_Conditional_13_Template_select_ngModelChange_19_listener($event) { i0.ɵɵrestoreView(_r13); const ctx_r0 = i0.ɵɵnextContext(3); i0.ɵɵtwoWayBindingSet(ctx_r0.periodCount, $event) || (ctx_r0.periodCount = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵrepeaterCreate(20, TimetableSetupComponent_Conditional_50_Conditional_3_Conditional_13_For_21_Template, 2, 2, "option", 23, i0.ɵɵrepeaterTrackByIdentity);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(22, "div", 52);
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(23, "svg", 34);
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(24, "strong");
    i0.ɵɵtext(25);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(26, "div", 56);
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(27, "svg", 34);
    i0.ɵɵtext(28, "You will configure start time, duration and period type after creating the structure. ");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(3);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r0.timetableMasterId);
    i0.ɵɵproperty("disabled", !!ctx_r0.editingId());
    i0.ɵɵadvance(3);
    i0.ɵɵrepeater(ctx_r0.masters());
    i0.ɵɵadvance(5);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r0.name);
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("options", ctx_r0.workingDayOptions)("value", ctx_r0.workingDays);
    i0.ɵɵadvance(4);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r0.periodCount);
    i0.ɵɵproperty("disabled", !!ctx_r0.editingId());
    i0.ɵɵadvance();
    i0.ɵɵrepeater(i0.ɵɵpureFunction0(9, _c0));
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate2("", ctx_r0.workingDays.length, " working days \u00B7 ", ctx_r0.periodCount, " periods per day");
} }
function TimetableSetupComponent_Conditional_50_Conditional_3_Template(rf, ctx) { if (rf & 1) {
    const _r8 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "header", 39)(1, "span", 40);
    i0.ɵɵconditionalCreate(2, TimetableSetupComponent_Conditional_50_Conditional_3_Conditional_2_Template, 1, 0, ":svg:svg", 41)(3, TimetableSetupComponent_Conditional_50_Conditional_3_Conditional_3_Template, 1, 0, ":svg:svg", 42);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "div")(5, "h2");
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "p");
    i0.ɵɵtext(8);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(9, "button", 43);
    i0.ɵɵlistener("click", function TimetableSetupComponent_Conditional_50_Conditional_3_Template_button_click_9_listener() { i0.ɵɵrestoreView(_r8); const ctx_r0 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r0.closeDrawer()); });
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(10, "svg", 44);
    i0.ɵɵelementEnd()();
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(11, "div", 45);
    i0.ɵɵconditionalCreate(12, TimetableSetupComponent_Conditional_50_Conditional_3_Conditional_12_Template, 39, 6)(13, TimetableSetupComponent_Conditional_50_Conditional_3_Conditional_13_Template, 29, 10);
    i0.ɵɵelementStart(14, "footer", 46)(15, "button", 47);
    i0.ɵɵlistener("click", function TimetableSetupComponent_Conditional_50_Conditional_3_Template_button_click_15_listener() { i0.ɵɵrestoreView(_r8); const ctx_r0 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r0.closeDrawer()); });
    i0.ɵɵtext(16, " Cancel");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(17, "button", 48);
    i0.ɵɵlistener("click", function TimetableSetupComponent_Conditional_50_Conditional_3_Template_button_click_17_listener() { i0.ɵɵrestoreView(_r8); const ctx_r0 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r0.save()); });
    i0.ɵɵtext(18);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(2);
    i0.ɵɵconditional(ctx_r0.isMasterMode() ? 2 : 3);
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate2(" ", ctx_r0.editingId() ? "Edit" : "New", " ", ctx_r0.isMasterMode() ? "timetable master" : "timetable structure", " ");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", ctx_r0.isMasterMode() ? "Create the academic container for timetable planning." : "Set the weekly framework before configuring individual periods.", " ");
    i0.ɵɵadvance(4);
    i0.ɵɵconditional(ctx_r0.isMasterMode() ? 12 : 13);
    i0.ɵɵadvance(5);
    i0.ɵɵproperty("disabled", !ctx_r0.formValid() || ctx_r0.saving());
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r0.saving() ? "Saving\u2026" : ctx_r0.editingId() ? "Save changes" : ctx_r0.isMasterMode() ? "Create master" : "Create structure", " ");
} }
function TimetableSetupComponent_Conditional_50_Conditional_4_Conditional_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(0, "svg", 41);
} }
function TimetableSetupComponent_Conditional_50_Conditional_4_Conditional_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(0, "svg", 42);
} }
function TimetableSetupComponent_Conditional_50_Conditional_4_Conditional_20_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "dl")(1, "div")(2, "dt");
    i0.ɵɵtext(3, "Name");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "dd");
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(6, "div")(7, "dt");
    i0.ɵɵtext(8, "Academic session");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(9, "dd");
    i0.ɵɵtext(10);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(11, "div")(12, "dt");
    i0.ɵɵtext(13, "University");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(14, "dd");
    i0.ɵɵtext(15);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(16, "div")(17, "dt");
    i0.ɵɵtext(18, "College");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(19, "dd");
    i0.ɵɵtext(20);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(21, "div")(22, "dt");
    i0.ɵɵtext(23, "Status");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(24, "dd")(25, "span", 31);
    i0.ɵɵelement(26, "i");
    i0.ɵɵtext(27, "Active");
    i0.ɵɵelementEnd()()()();
} if (rf & 2) {
    const record_r17 = i0.ɵɵnextContext();
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(record_r17.name);
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(record_r17.academicSession);
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(record_r17.universityName || "\u2014");
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(record_r17.collegeName || "\u2014");
} }
function TimetableSetupComponent_Conditional_50_Conditional_4_Conditional_21_For_15_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const day_r18 = ctx.$implicit;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(day_r18);
} }
function TimetableSetupComponent_Conditional_50_Conditional_4_Conditional_21_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "dl")(1, "div")(2, "dt");
    i0.ɵɵtext(3, "Timetable");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "dd");
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(6, "div")(7, "dt");
    i0.ɵɵtext(8, "Number of periods");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(9, "dd");
    i0.ɵɵtext(10);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(11, "h4");
    i0.ɵɵtext(12, "Working days");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(13, "div", 66);
    i0.ɵɵrepeaterCreate(14, TimetableSetupComponent_Conditional_50_Conditional_4_Conditional_21_For_15_Template, 2, 1, "span", null, i0.ɵɵrepeaterTrackByIdentity);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const record_r17 = i0.ɵɵnextContext();
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(ctx_r0.masterName(record_r17.timetableMasterId));
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(record_r17.periodCount);
    i0.ɵɵadvance(4);
    i0.ɵɵrepeater(record_r17.workingDays);
} }
function TimetableSetupComponent_Conditional_50_Conditional_4_Conditional_25_Template(rf, ctx) { if (rf & 1) {
    const _r19 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 67)(1, "i");
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(2, "svg", 68);
    i0.ɵɵelementEnd();
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(3, "span")(4, "strong");
    i0.ɵɵtext(5, "Master details");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "small");
    i0.ɵɵtext(7, "Basic information about this timetable master.");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(8, "b");
    i0.ɵɵtext(9, "Complete");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(10, "div", 69)(11, "i");
    i0.ɵɵtext(12, "2");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(13, "span")(14, "strong");
    i0.ɵɵtext(15, "Structures");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(16, "small");
    i0.ɵɵtext(17, "Add and manage academic structures.");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(18, "button", 47);
    i0.ɵɵlistener("click", function TimetableSetupComponent_Conditional_50_Conditional_4_Conditional_25_Template_button_click_18_listener() { i0.ɵɵrestoreView(_r19); const record_r17 = i0.ɵɵnextContext(); const ctx_r0 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r0.openStructures(record_r17._id)); });
    i0.ɵɵtext(19, " Open structures ");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(20, "div", 69)(21, "i");
    i0.ɵɵtext(22, "3");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(23, "span")(24, "strong");
    i0.ɵɵtext(25, "Period configuration");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(26, "small");
    i0.ɵɵtext(27, "Available after a structure is selected.");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(28, "b");
    i0.ɵɵtext(29, "Not available");
    i0.ɵɵelementEnd()();
} }
function TimetableSetupComponent_Conditional_50_Conditional_4_Conditional_26_Template(rf, ctx) { if (rf & 1) {
    const _r20 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 67)(1, "i");
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(2, "svg", 68);
    i0.ɵɵelementEnd();
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(3, "span")(4, "strong");
    i0.ɵɵtext(5, "Structure details");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "small");
    i0.ɵɵtext(7, "Basic information and working days.");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(8, "b");
    i0.ɵɵtext(9, "Complete");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(10, "div", 69)(11, "i");
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(12, "svg", 70);
    i0.ɵɵelementEnd();
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(13, "span")(14, "strong");
    i0.ɵɵtext(15, "Period timings");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(16, "small");
    i0.ɵɵtext(17, "Set period type, start time and duration.");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(18, "button", 71);
    i0.ɵɵlistener("click", function TimetableSetupComponent_Conditional_50_Conditional_4_Conditional_26_Template_button_click_18_listener() { i0.ɵɵrestoreView(_r20); const record_r17 = i0.ɵɵnextContext(); const ctx_r0 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r0.configurePeriods(record_r17)); });
    i0.ɵɵtext(19, " Configure periods ");
    i0.ɵɵelementEnd()();
} }
function TimetableSetupComponent_Conditional_50_Conditional_4_Conditional_35_Template(rf, ctx) { if (rf & 1) {
    const _r21 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 71);
    i0.ɵɵlistener("click", function TimetableSetupComponent_Conditional_50_Conditional_4_Conditional_35_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r21); const record_r17 = i0.ɵɵnextContext(); const ctx_r0 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r0.openStructures(record_r17._id)); });
    i0.ɵɵtext(1, " Open structures ");
    i0.ɵɵelementEnd();
} }
function TimetableSetupComponent_Conditional_50_Conditional_4_Conditional_36_Template(rf, ctx) { if (rf & 1) {
    const _r22 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 71);
    i0.ɵɵlistener("click", function TimetableSetupComponent_Conditional_50_Conditional_4_Conditional_36_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r22); const record_r17 = i0.ɵɵnextContext(); const ctx_r0 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r0.configurePeriods(record_r17)); });
    i0.ɵɵtext(1, " Configure periods ");
    i0.ɵɵelementEnd();
} }
function TimetableSetupComponent_Conditional_50_Conditional_4_Template(rf, ctx) { if (rf & 1) {
    const _r16 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "header", 57)(1, "span", 40);
    i0.ɵɵconditionalCreate(2, TimetableSetupComponent_Conditional_50_Conditional_4_Conditional_2_Template, 1, 0, ":svg:svg", 41)(3, TimetableSetupComponent_Conditional_50_Conditional_4_Conditional_3_Template, 1, 0, ":svg:svg", 42);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "div")(5, "h2");
    i0.ɵɵtext(6);
    i0.ɵɵelementStart(7, "span", 31);
    i0.ɵɵelement(8, "i");
    i0.ɵɵtext(9, "Active");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(10, "p");
    i0.ɵɵtext(11);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(12, "button", 58);
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(13, "svg", 33);
    i0.ɵɵelementEnd();
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(14, "button", 43);
    i0.ɵɵlistener("click", function TimetableSetupComponent_Conditional_50_Conditional_4_Template_button_click_14_listener() { i0.ɵɵrestoreView(_r16); const ctx_r0 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r0.closeDrawer()); });
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(15, "svg", 44);
    i0.ɵɵelementEnd()();
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(16, "div", 59)(17, "section", 60)(18, "h3");
    i0.ɵɵtext(19, "Overview");
    i0.ɵɵelementEnd();
    i0.ɵɵconditionalCreate(20, TimetableSetupComponent_Conditional_50_Conditional_4_Conditional_20_Template, 28, 4, "dl")(21, TimetableSetupComponent_Conditional_50_Conditional_4_Conditional_21_Template, 16, 2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(22, "section", 60)(23, "h3");
    i0.ɵɵtext(24);
    i0.ɵɵelementEnd();
    i0.ɵɵconditionalCreate(25, TimetableSetupComponent_Conditional_50_Conditional_4_Conditional_25_Template, 30, 0)(26, TimetableSetupComponent_Conditional_50_Conditional_4_Conditional_26_Template, 20, 0);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(27, "footer", 61)(28, "button", 62);
    i0.ɵɵlistener("click", function TimetableSetupComponent_Conditional_50_Conditional_4_Template_button_click_28_listener() { i0.ɵɵrestoreView(_r16); const ctx_r0 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r0.deleteSelected()); });
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(29, "svg", 63);
    i0.ɵɵtext(30);
    i0.ɵɵelementEnd();
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelement(31, "span");
    i0.ɵɵelementStart(32, "button", 47);
    i0.ɵɵlistener("click", function TimetableSetupComponent_Conditional_50_Conditional_4_Template_button_click_32_listener() { i0.ɵɵrestoreView(_r16); const ctx_r0 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r0.openEdit()); });
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(33, "svg", 64);
    i0.ɵɵtext(34);
    i0.ɵɵelementEnd();
    i0.ɵɵconditionalCreate(35, TimetableSetupComponent_Conditional_50_Conditional_4_Conditional_35_Template, 2, 0, "button", 65)(36, TimetableSetupComponent_Conditional_50_Conditional_4_Conditional_36_Template, 2, 0, "button", 65);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const record_r17 = ctx;
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(2);
    i0.ɵɵconditional(ctx_r0.isMaster(record_r17) ? 2 : 3);
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate1(" ", record_r17.name, " ");
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(ctx_r0.isMaster(record_r17) ? "Saved just now" : ctx_r0.masterName(record_r17.timetableMasterId));
    i0.ɵɵadvance(9);
    i0.ɵɵconditional(ctx_r0.isMaster(record_r17) ? 20 : 21);
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(ctx_r0.isMaster(record_r17) ? "Timetable setup" : "Configuration");
    i0.ɵɵadvance();
    i0.ɵɵconditional(ctx_r0.isMaster(record_r17) ? 25 : 26);
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate1(" Delete ", ctx_r0.isMaster(record_r17) ? "master" : "structure");
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate1(" Edit ", ctx_r0.isMaster(record_r17) ? "master" : "structure", " ");
    i0.ɵɵadvance();
    i0.ɵɵconditional(ctx_r0.isMaster(record_r17) ? 35 : 36);
} }
function TimetableSetupComponent_Conditional_50_Template(rf, ctx) { if (rf & 1) {
    const _r7 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 27)(1, "button", 37);
    i0.ɵɵlistener("click", function TimetableSetupComponent_Conditional_50_Template_button_click_1_listener() { i0.ɵɵrestoreView(_r7); const ctx_r0 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r0.closeDrawer()); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(2, "aside", 38);
    i0.ɵɵconditionalCreate(3, TimetableSetupComponent_Conditional_50_Conditional_3_Template, 19, 7)(4, TimetableSetupComponent_Conditional_50_Conditional_4_Template, 37, 9);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    let tmp_1_0;
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(3);
    i0.ɵɵconditional(ctx_r0.drawer() === "create" ? 3 : (tmp_1_0 = ctx_r0.selected()) ? 4 : -1, tmp_1_0);
} }
function apiMessage(error, fallback) {
    if (typeof error === 'object' && error && 'error' in error) {
        const response = error.error;
        if (typeof response?.message === 'string')
            return response.message;
    }
    return fallback;
}
export class TimetableSetupComponent {
    api = inject(ApiService);
    route = inject(ActivatedRoute);
    router = inject(Router);
    mode = signal('masters', ...(ngDevMode ? [{ debugName: "mode" }] : /* istanbul ignore next */ []));
    loading = signal(false, ...(ngDevMode ? [{ debugName: "loading" }] : /* istanbul ignore next */ []));
    saving = signal(false, ...(ngDevMode ? [{ debugName: "saving" }] : /* istanbul ignore next */ []));
    error = signal('', ...(ngDevMode ? [{ debugName: "error" }] : /* istanbul ignore next */ []));
    message = signal('', ...(ngDevMode ? [{ debugName: "message" }] : /* istanbul ignore next */ []));
    drawer = signal(null, ...(ngDevMode ? [{ debugName: "drawer" }] : /* istanbul ignore next */ []));
    editingId = signal(null, ...(ngDevMode ? [{ debugName: "editingId" }] : /* istanbul ignore next */ []));
    selected = signal(null, ...(ngDevMode ? [{ debugName: "selected" }] : /* istanbul ignore next */ []));
    masters = signal([], ...(ngDevMode ? [{ debugName: "masters" }] : /* istanbul ignore next */ []));
    structures = signal([], ...(ngDevMode ? [{ debugName: "structures" }] : /* istanbul ignore next */ []));
    groups = signal([], ...(ngDevMode ? [{ debugName: "groups" }] : /* istanbul ignore next */ []));
    universities = signal([], ...(ngDevMode ? [{ debugName: "universities" }] : /* istanbul ignore next */ []));
    colleges = signal([], ...(ngDevMode ? [{ debugName: "colleges" }] : /* istanbul ignore next */ []));
    page = signal(1, ...(ngDevMode ? [{ debugName: "page" }] : /* istanbul ignore next */ []));
    pageSize = signal(25, ...(ngDevMode ? [{ debugName: "pageSize" }] : /* istanbul ignore next */ []));
    pageSizeOptions = ERP_PAGINATION.pageSizeOptions;
    workingDayOptions = [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
        'Sunday',
    ].map((day) => ({ value: day, label: day }));
    search = '';
    selectedMasterId = '';
    name = '';
    session = '';
    universityId = '';
    collegeId = '';
    timetableMasterId = '';
    workingDays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
    periodCount = 8;
    sessions = computed(() => [
        ...new Set([
            ...this.groups().map((item) => item.academicSession),
            ...this.masters().map((item) => item.academicSession),
            this.currentAcademicSession(),
        ]),
    ], ...(ngDevMode ? [{ debugName: "sessions" }] : /* istanbul ignore next */ []));
    constructor() {
        this.route.data.subscribe((data) => {
            this.mode.set(data['section'] === 'timetable-structures' ? 'structures' : 'masters');
            this.selectedMasterId = this.route.snapshot.queryParamMap.get('masterId') || '';
            this.closeDrawer();
            this.load();
        });
    }
    isMasterMode() {
        return this.mode() === 'masters';
    }
    title() {
        return this.isMasterMode() ? 'Timetable masters' : 'Timetable structures';
    }
    description() {
        return this.isMasterMode()
            ? 'Define the academic scope used to build timetable structures.'
            : 'Define working days and period capacity for each timetable.';
    }
    load() {
        this.loading.set(true);
        this.error.set('');
        forkJoin({
            masters: this.api.academicRecords('timetable-masters'),
            structures: this.api.academicRecords('timetable-structures'),
            groups: this.api.academicRecords('groups', { isActive: true }),
            universities: this.api.masterValues('university', { active: true }),
        }).subscribe({
            next: ({ masters, structures, groups, universities }) => {
                this.masters.set(masters.items);
                this.structures.set(structures.items);
                this.groups.set(groups.items);
                this.universities.set(universities.items);
                if (!this.selectedMasterId && masters.items.length)
                    this.selectedMasterId = masters.items[0]._id;
                this.loading.set(false);
            },
            error: (error) => {
                this.error.set(apiMessage(error, 'Could not load timetable setup.'));
                this.loading.set(false);
            },
        });
    }
    masterName(masterId = this.selectedMasterId) {
        return this.masters().find((item) => item._id === masterId)?.name || 'Select timetable master';
    }
    filteredRecords() {
        const query = this.search.trim().toLowerCase();
        const records = this.isMasterMode()
            ? this.masters()
            : this.structures().filter((item) => !this.selectedMasterId || item.timetableMasterId === this.selectedMasterId);
        return records.filter((item) => !query || JSON.stringify(item).toLowerCase().includes(query));
    }
    totalPages() {
        return Math.max(1, Math.ceil(this.filteredRecords().length / this.pageSize()));
    }
    pagedRecords() {
        const current = Math.min(this.page(), this.totalPages());
        return this.filteredRecords().slice((current - 1) * this.pageSize(), current * this.pageSize());
    }
    rangeEnd() {
        return Math.min(this.page() * this.pageSize(), this.filteredRecords().length);
    }
    openCreate() {
        this.resetForm();
        if (!this.isMasterMode())
            this.timetableMasterId = this.selectedMasterId;
        this.drawer.set('create');
    }
    openDetail(record) {
        this.selected.set(record);
        this.drawer.set('detail');
    }
    openEdit() {
        const record = this.selected();
        if (!record)
            return;
        this.editingId.set(record._id);
        this.name = record.name;
        if (this.isMaster(record)) {
            this.session = record.academicSession;
            this.universityId = record.universityId || '';
            if (this.universityId)
                this.loadColleges(record.collegeId || '');
        }
        else {
            this.timetableMasterId = record.timetableMasterId;
            this.workingDays = [...record.workingDays];
            this.periodCount = record.periodCount;
        }
        this.drawer.set('create');
    }
    closeDrawer() {
        this.drawer.set(null);
        this.selected.set(null);
        this.editingId.set(null);
    }
    resetForm() {
        this.editingId.set(null);
        this.name = '';
        this.session = '';
        this.universityId = '';
        this.collegeId = '';
        this.colleges.set([]);
        this.timetableMasterId = '';
        this.workingDays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
        this.periodCount = 8;
    }
    loadColleges(selectedCollegeId = '') {
        this.collegeId = selectedCollegeId;
        if (!this.universityId)
            return this.colleges.set([]);
        this.api
            .masterValues('college', { active: true, parentId: this.universityId })
            .subscribe(({ items }) => {
            this.colleges.set(items);
            this.collegeId = items.some((item) => item._id === selectedCollegeId)
                ? selectedCollegeId
                : '';
        });
    }
    formValid() {
        return this.isMasterMode()
            ? Boolean(this.name.trim() && this.session && this.universityId && this.collegeId)
            : Boolean(this.name.trim() && this.timetableMasterId && this.workingDays.length && this.periodCount);
    }
    save() {
        if (!this.formValid() || this.saving())
            return;
        this.saving.set(true);
        this.error.set('');
        const resource = this.isMasterMode() ? 'timetable-masters' : 'timetable-structures';
        const body = this.isMasterMode()
            ? {
                name: this.name.trim(),
                academicSession: this.session,
                universityId: this.universityId,
                collegeId: this.collegeId,
                isActive: true,
            }
            : {
                timetableMasterId: this.timetableMasterId,
                name: this.name.trim(),
                workingDays: this.workingDays,
                periodCount: Number(this.periodCount),
                isActive: true,
            };
        const request = this.editingId()
            ? this.api.updateAcademicRecord(resource, this.editingId(), body)
            : this.api.createAcademicRecord(resource, body);
        request.subscribe({
            next: () => {
                this.message.set(`${this.isMasterMode() ? 'Timetable master' : 'Timetable structure'} saved successfully.`);
                this.saving.set(false);
                this.closeDrawer();
                this.load();
            },
            error: (error) => {
                this.error.set(apiMessage(error, 'Could not save timetable setup.'));
                this.saving.set(false);
            },
        });
    }
    deleteSelected() {
        const record = this.selected();
        if (!record || this.saving())
            return;
        const label = this.isMaster(record) ? 'timetable master' : 'timetable structure';
        if (!confirm(`Delete ${label} ${record.name}? This action cannot be undone.`))
            return;
        this.saving.set(true);
        this.api
            .deleteAcademicRecord(this.isMasterMode() ? 'timetable-masters' : 'timetable-structures', record._id)
            .subscribe({
            next: () => {
                this.message.set(`${this.isMasterMode() ? 'Master' : 'Structure'} deleted.`);
                this.saving.set(false);
                this.closeDrawer();
                this.load();
            },
            error: (error) => {
                this.error.set(apiMessage(error, 'Could not delete this record.'));
                this.saving.set(false);
            },
        });
    }
    chooseMaster(masterId) {
        this.selectedMasterId = masterId;
        this.page.set(1);
        void this.router.navigate([], {
            relativeTo: this.route,
            queryParams: { masterId: masterId || null },
            queryParamsHandling: 'merge',
        });
    }
    openStructures(masterId) {
        void this.router.navigate(['/admin/academics/timetable-structures'], {
            queryParams: { masterId },
        });
    }
    configurePeriods(structure) {
        void this.router.navigate(['/admin/academics/timetable-periods'], {
            queryParams: {
                masterId: structure.timetableMasterId,
                structureId: structure._id,
            },
        });
    }
    isMaster(record) {
        return !('timetableMasterId' in record);
    }
    asStructure(record) {
        return record;
    }
    currentAcademicSession() {
        const today = new Date();
        const startYear = today.getMonth() >= 6 ? today.getFullYear() : today.getFullYear() - 1;
        return `${startYear}-${startYear + 1}`;
    }
    static ɵfac = function TimetableSetupComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || TimetableSetupComponent)(); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: TimetableSetupComponent, selectors: [["erp-timetable-setup"]], decls: 51, vars: 24, consts: [["variant", "compact", "layout", "collection", 3, "title", "description"], ["page-actions", "", "type", "button", 1, "erp-button", "erp-button--primary", 3, "click"], ["lucidePlus", "", "size", "18"], [1, "erp-alert", "erp-alert--danger"], [1, "erp-alert", "erp-alert--success"], [1, "erp-timetable-master-strip"], [1, "erp-card", "erp-table-shell", "erp-timetable-collection"], [1, "erp-timetable-tools"], [1, "erp-search-control"], ["lucideSearch", "", "size", "18"], ["type", "search", 3, "ngModelChange", "ngModel", "placeholder"], ["type", "button", 1, "erp-button", "erp-button--secondary"], ["lucideFilter", "", "size", "17"], ["lucideChevronDown", "", "size", "15"], ["lucideColumns3", "", "size", "17"], ["type", "button", "aria-label", "Refresh", 1, "erp-icon-button", 3, "click"], ["lucideRefreshCw", "", "size", "18"], [1, "erp-table-scroll"], [1, "erp-timetable-table-blank"], ["kind", "taskSchedule", "size", "compact"], [1, "erp-timetable-notice"], [1, "erp-timetable-pagination"], [1, "erp-control", 3, "ngModelChange", "ngModel"], [3, "value"], ["type", "button", 1, "erp-icon-button", 3, "click", "disabled"], ["lucideChevronLeft", "", "size", "17"], ["lucideChevronRight", "", "size", "17"], [1, "erp-drawer-layer"], ["lucideLayers3", "", "size", "21"], ["value", ""], [3, "dblclick"], [1, "erp-status"], ["type", "button", "aria-label", "Open details", 1, "erp-icon-button", 3, "click"], ["lucideEllipsisVertical", "", "size", "18"], ["lucideInfo", "", "size", "18"], ["type", "button", "aria-label", "Dismiss"], ["lucideX", "", "size", "16"], ["type", "button", "aria-label", "Close drawer", 1, "erp-drawer-backdrop", 3, "click"], ["role", "dialog", "aria-modal", "true", 1, "erp-drawer", "erp-timetable-drawer"], [1, "erp-drawer__header", "erp-timetable-drawer__header"], [1, "erp-timetable-drawer__icon"], ["lucideCalendarDays", "", "size", "25"], ["lucideLayers3", "", "size", "25"], ["type", "button", "aria-label", "Close", 1, "erp-icon-button", 3, "click"], ["lucideX", "", "size", "21"], [1, "erp-drawer__body", "erp-timetable-drawer__body"], [1, "erp-drawer__footer"], ["type", "button", 1, "erp-button", "erp-button--secondary", 3, "click"], ["type", "button", 1, "erp-button", "erp-button--primary", 3, "click", "disabled"], [1, "erp-timetable-form-card"], [1, "erp-control", 3, "ngModelChange", "ngModel", "disabled"], ["placeholder", "Enter master name", 1, "erp-control", 3, "ngModelChange", "ngModel"], [1, "erp-timetable-info"], ["placeholder", "Enter structure name", 1, "erp-control", 3, "ngModelChange", "ngModel"], [1, "erp-field-stack"], ["placeholder", "Select working days", 3, "valueChange", "options", "value"], [1, "erp-timetable-info", "erp-timetable-info--outline"], [1, "erp-drawer__header", "erp-timetable-detail-head"], ["type", "button", "aria-label", "More actions", 1, "erp-icon-button"], [1, "erp-drawer__body", "erp-timetable-detail-body"], [1, "erp-timetable-detail-card"], [1, "erp-timetable-detail-actions"], ["type", "button", 1, "erp-button", "erp-button--danger", 3, "click"], ["lucideTrash2", "", "size", "17"], ["lucidePencil", "", "size", "17"], ["type", "button", 1, "erp-button", "erp-button--primary"], [1, "erp-timetable-days"], [1, "erp-timetable-step", "is-complete"], ["lucideCheck", "", "size", "17"], [1, "erp-timetable-step"], ["lucideClock3", "", "size", "17"], ["type", "button", 1, "erp-button", "erp-button--primary", 3, "click"]], template: function TimetableSetupComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "erp-admin-page", 0)(1, "button", 1);
            i0.ɵɵlistener("click", function TimetableSetupComponent_Template_button_click_1_listener() { return ctx.openCreate(); });
            i0.ɵɵnamespaceSVG();
            i0.ɵɵelement(2, "svg", 2);
            i0.ɵɵtext(3);
            i0.ɵɵelementEnd();
            i0.ɵɵconditionalCreate(4, TimetableSetupComponent_Conditional_4_Template, 2, 1, "div", 3);
            i0.ɵɵconditionalCreate(5, TimetableSetupComponent_Conditional_5_Template, 2, 1, "div", 4);
            i0.ɵɵconditionalCreate(6, TimetableSetupComponent_Conditional_6_Template, 9, 1, "section", 5);
            i0.ɵɵnamespaceHTML();
            i0.ɵɵelementStart(7, "section", 6)(8, "header", 7)(9, "label", 8);
            i0.ɵɵnamespaceSVG();
            i0.ɵɵelement(10, "svg", 9);
            i0.ɵɵnamespaceHTML();
            i0.ɵɵelementStart(11, "input", 10);
            i0.ɵɵtwoWayListener("ngModelChange", function TimetableSetupComponent_Template_input_ngModelChange_11_listener($event) { i0.ɵɵtwoWayBindingSet(ctx.search, $event) || (ctx.search = $event); return $event; });
            i0.ɵɵlistener("ngModelChange", function TimetableSetupComponent_Template_input_ngModelChange_11_listener() { return ctx.page.set(1); });
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(12, "button", 11);
            i0.ɵɵnamespaceSVG();
            i0.ɵɵelement(13, "svg", 12);
            i0.ɵɵtext(14, " Filters ");
            i0.ɵɵelement(15, "svg", 13);
            i0.ɵɵelementEnd();
            i0.ɵɵnamespaceHTML();
            i0.ɵɵelementStart(16, "button", 11);
            i0.ɵɵnamespaceSVG();
            i0.ɵɵelement(17, "svg", 14);
            i0.ɵɵtext(18, " Columns ");
            i0.ɵɵelement(19, "svg", 13);
            i0.ɵɵelementEnd();
            i0.ɵɵnamespaceHTML();
            i0.ɵɵelementStart(20, "button", 15);
            i0.ɵɵlistener("click", function TimetableSetupComponent_Template_button_click_20_listener() { return ctx.load(); });
            i0.ɵɵnamespaceSVG();
            i0.ɵɵelement(21, "svg", 16);
            i0.ɵɵelementEnd();
            i0.ɵɵnamespaceHTML();
            i0.ɵɵelementStart(22, "strong");
            i0.ɵɵtext(23);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(24, "div", 17)(25, "table")(26, "thead");
            i0.ɵɵconditionalCreate(27, TimetableSetupComponent_Conditional_27_Template, 15, 0, "tr")(28, TimetableSetupComponent_Conditional_28_Template, 15, 0, "tr");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(29, "tbody");
            i0.ɵɵrepeaterCreate(30, TimetableSetupComponent_For_31_Template, 15, 3, "tr", null, _forTrack0);
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(32, "div", 18);
            i0.ɵɵelement(33, "erp-admin-illustration", 19);
            i0.ɵɵelementStart(34, "p");
            i0.ɵɵtext(35);
            i0.ɵɵelementEnd()();
            i0.ɵɵconditionalCreate(36, TimetableSetupComponent_Conditional_36_Template, 6, 0, "div", 20);
            i0.ɵɵelementStart(37, "footer", 21)(38, "span");
            i0.ɵɵtext(39);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(40, "div")(41, "select", 22);
            i0.ɵɵlistener("ngModelChange", function TimetableSetupComponent_Template_select_ngModelChange_41_listener($event) { ctx.pageSize.set(+$event); return ctx.page.set(1); });
            i0.ɵɵrepeaterCreate(42, TimetableSetupComponent_For_43_Template, 2, 2, "option", 23, i0.ɵɵrepeaterTrackByIdentity);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(44, "button", 24);
            i0.ɵɵlistener("click", function TimetableSetupComponent_Template_button_click_44_listener() { return ctx.page.set(ctx.page() - 1); });
            i0.ɵɵnamespaceSVG();
            i0.ɵɵelement(45, "svg", 25);
            i0.ɵɵelementEnd();
            i0.ɵɵnamespaceHTML();
            i0.ɵɵelementStart(46, "b");
            i0.ɵɵtext(47);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(48, "button", 24);
            i0.ɵɵlistener("click", function TimetableSetupComponent_Template_button_click_48_listener() { return ctx.page.set(ctx.page() + 1); });
            i0.ɵɵnamespaceSVG();
            i0.ɵɵelement(49, "svg", 26);
            i0.ɵɵelementEnd()()()()();
            i0.ɵɵconditionalCreate(50, TimetableSetupComponent_Conditional_50_Template, 5, 1, "div", 27);
        } if (rf & 2) {
            i0.ɵɵproperty("title", ctx.title())("description", ctx.description());
            i0.ɵɵadvance(3);
            i0.ɵɵtextInterpolate1(" ", ctx.isMasterMode() ? "New timetable master" : "New structure", " ");
            i0.ɵɵadvance();
            i0.ɵɵconditional(ctx.error() ? 4 : -1);
            i0.ɵɵadvance();
            i0.ɵɵconditional(ctx.message() ? 5 : -1);
            i0.ɵɵadvance();
            i0.ɵɵconditional(!ctx.isMasterMode() ? 6 : -1);
            i0.ɵɵadvance();
            i0.ɵɵclassProp("erp-timetable-master-table", ctx.isMasterMode());
            i0.ɵɵadvance(4);
            i0.ɵɵtwoWayProperty("ngModel", ctx.search);
            i0.ɵɵproperty("placeholder", ctx.isMasterMode() ? "Search timetable master" : "Search structure");
            i0.ɵɵadvance(12);
            i0.ɵɵtextInterpolate3("", ctx.filteredRecords().length, " ", ctx.isMasterMode() ? "master" : "structure", "", ctx.filteredRecords().length === 1 ? "" : "s");
            i0.ɵɵadvance(4);
            i0.ɵɵconditional(ctx.isMasterMode() ? 27 : 28);
            i0.ɵɵadvance(3);
            i0.ɵɵrepeater(ctx.pagedRecords());
            i0.ɵɵadvance(5);
            i0.ɵɵtextInterpolate1(" ", ctx.isMasterMode() ? "Timetable masters hold the academic scope for your timetable structures." : "Select a structure to review its period setup.", " ");
            i0.ɵɵadvance();
            i0.ɵɵconditional(ctx.isMasterMode() ? 36 : -1);
            i0.ɵɵadvance(3);
            i0.ɵɵtextInterpolate3("Showing ", ctx.filteredRecords().length ? (ctx.page() - 1) * ctx.pageSize() + 1 : 0, "\u2013", ctx.rangeEnd(), " of ", ctx.filteredRecords().length);
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
            i0.ɵɵconditional(ctx.drawer() ? 50 : -1);
        } }, dependencies: [CommonModule,
            FormsModule, i1.NgSelectOption, i1.ɵNgSelectMultipleOption, i1.DefaultValueAccessor, i1.SelectControlValueAccessor, i1.NgControlStatus, i1.NgModel, AdminIllustrationComponent,
            AdminPageComponent,
            MultiSelectDropdownComponent,
            LucideCalendarDays,
            LucideCheck,
            LucideChevronDown,
            LucideChevronLeft,
            LucideChevronRight,
            LucideClock3,
            LucideColumns3,
            LucideEllipsisVertical,
            LucideFilter,
            LucideInfo,
            LucideLayers3,
            LucidePencil,
            LucidePlus,
            LucideRefreshCw,
            LucideSearch,
            LucideTrash2,
            LucideX], encapsulation: 2, changeDetection: 0 });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(TimetableSetupComponent, [{
        type: Component,
        args: [{ selector: 'erp-timetable-setup', imports: [
                    CommonModule,
                    FormsModule,
                    AdminIllustrationComponent,
                    AdminPageComponent,
                    MultiSelectDropdownComponent,
                    LucideCalendarDays,
                    LucideCheck,
                    LucideChevronDown,
                    LucideChevronLeft,
                    LucideChevronRight,
                    LucideClock3,
                    LucideColumns3,
                    LucideEllipsisVertical,
                    LucideFilter,
                    LucideInfo,
                    LucideLayers3,
                    LucidePencil,
                    LucidePlus,
                    LucideRefreshCw,
                    LucideSearch,
                    LucideTrash2,
                    LucideX,
                ], changeDetection: ChangeDetectionStrategy.OnPush, template: "<erp-admin-page\n  [title]=\"title()\"\n  [description]=\"description()\"\n  variant=\"compact\"\n  layout=\"collection\"\n>\n  <button page-actions class=\"erp-button erp-button--primary\" type=\"button\" (click)=\"openCreate()\">\n    <svg lucidePlus size=\"18\"></svg>\n    {{ isMasterMode() ? 'New timetable master' : 'New structure' }}\n  </button>\n\n  @if (error()) {\n    <div class=\"erp-alert erp-alert--danger\">{{ error() }}</div>\n  }\n  @if (message()) {\n    <div class=\"erp-alert erp-alert--success\">{{ message() }}</div>\n  }\n\n  @if (!isMasterMode()) {\n    <section class=\"erp-timetable-master-strip\">\n      <svg lucideLayers3 size=\"21\"></svg><span>Timetable master:</span>\n      <select\n        class=\"erp-control\"\n        [ngModel]=\"selectedMasterId\"\n        (ngModelChange)=\"chooseMaster($event)\"\n      >\n        <option value=\"\">All masters</option>\n        @for (master of masters(); track master._id) {\n          <option [value]=\"master._id\">{{ master.name }}</option>\n        }\n      </select>\n    </section>\n  }\n\n  <section\n    class=\"erp-card erp-table-shell erp-timetable-collection\"\n    [class.erp-timetable-master-table]=\"isMasterMode()\"\n  >\n    <header class=\"erp-timetable-tools\">\n      <label class=\"erp-search-control\"\n        ><svg lucideSearch size=\"18\"></svg\n        ><input\n          type=\"search\"\n          [(ngModel)]=\"search\"\n          [placeholder]=\"isMasterMode() ? 'Search timetable master' : 'Search structure'\"\n          (ngModelChange)=\"page.set(1)\"\n      /></label>\n      <button class=\"erp-button erp-button--secondary\" type=\"button\">\n        <svg lucideFilter size=\"17\"></svg> Filters <svg lucideChevronDown size=\"15\"></svg>\n      </button>\n      <button class=\"erp-button erp-button--secondary\" type=\"button\">\n        <svg lucideColumns3 size=\"17\"></svg> Columns <svg lucideChevronDown size=\"15\"></svg>\n      </button>\n      <button class=\"erp-icon-button\" type=\"button\" aria-label=\"Refresh\" (click)=\"load()\">\n        <svg lucideRefreshCw size=\"18\"></svg>\n      </button>\n      <strong\n        >{{ filteredRecords().length }} {{ isMasterMode() ? 'master' : 'structure'\n        }}{{ filteredRecords().length === 1 ? '' : 's' }}</strong\n      >\n    </header>\n    <div class=\"erp-table-scroll\">\n      <table>\n        <thead>\n          @if (isMasterMode()) {\n            <tr>\n              <th>Name</th>\n              <th>Academic session</th>\n              <th>University</th>\n              <th>College</th>\n              <th>Status</th>\n              <th>Last updated</th>\n              <th>Actions</th>\n            </tr>\n          } @else {\n            <tr>\n              <th>Name</th>\n              <th>Timetable</th>\n              <th>Working days</th>\n              <th>Number of periods</th>\n              <th>Status</th>\n              <th>Last updated</th>\n              <th>Actions</th>\n            </tr>\n          }\n        </thead>\n        <tbody>\n          @for (record of pagedRecords(); track record._id) {\n            <tr (dblclick)=\"openDetail(record)\">\n              <td>\n                <strong>{{ record.name }}</strong>\n              </td>\n              @if (isMaster(record)) {\n                <td>{{ record.academicSession }}</td>\n                <td>{{ record.universityName || '\u2014' }}</td>\n                <td>{{ record.collegeName || '\u2014' }}</td>\n              } @else {\n                <td>{{ masterName(record.timetableMasterId) }}</td>\n                <td>\n                  {{ record.workingDays.slice(0, 2).join(', ')\n                  }}{{\n                    record.workingDays.length > 2 ? ' +' + (record.workingDays.length - 2) : ''\n                  }}\n                </td>\n                <td>{{ record.periodCount }} periods</td>\n              }\n              <td>\n                <span class=\"erp-status\"><i></i>{{ record.isActive ? 'Active' : 'Inactive' }}</span>\n              </td>\n              <td>\u2014</td>\n              <td>\n                <button\n                  class=\"erp-icon-button\"\n                  type=\"button\"\n                  aria-label=\"Open details\"\n                  (click)=\"openDetail(record)\"\n                >\n                  <svg lucideEllipsisVertical size=\"18\"></svg>\n                </button>\n              </td>\n            </tr>\n          }\n        </tbody>\n      </table>\n    </div>\n\n    <div class=\"erp-timetable-table-blank\">\n      <erp-admin-illustration kind=\"taskSchedule\" size=\"compact\" />\n      <p>\n        {{\n          isMasterMode()\n            ? 'Timetable masters hold the academic scope for your timetable structures.'\n            : 'Select a structure to review its period setup.'\n        }}\n      </p>\n    </div>\n    @if (isMasterMode()) {\n      <div class=\"erp-timetable-notice\">\n        <svg lucideInfo size=\"18\"></svg\n        ><span>Create a master first, then add structures and periods.</span\n        ><button type=\"button\" aria-label=\"Dismiss\"><svg lucideX size=\"16\"></svg></button>\n      </div>\n    }\n    <footer class=\"erp-timetable-pagination\">\n      <span\n        >Showing {{ filteredRecords().length ? (page() - 1) * pageSize() + 1 : 0 }}\u2013{{\n          rangeEnd()\n        }}\n        of {{ filteredRecords().length }}</span\n      >\n      <div>\n        <select\n          class=\"erp-control\"\n          [ngModel]=\"pageSize()\"\n          (ngModelChange)=\"pageSize.set(+$event); page.set(1)\"\n        >\n          @for (size of pageSizeOptions; track size) {\n            <option [value]=\"size\">{{ size }} / page</option>\n          }</select\n        ><button\n          class=\"erp-icon-button\"\n          type=\"button\"\n          [disabled]=\"page() === 1\"\n          (click)=\"page.set(page() - 1)\"\n        >\n          <svg lucideChevronLeft size=\"17\"></svg></button\n        ><b>{{ page() }}</b\n        ><button\n          class=\"erp-icon-button\"\n          type=\"button\"\n          [disabled]=\"page() === totalPages()\"\n          (click)=\"page.set(page() + 1)\"\n        >\n          <svg lucideChevronRight size=\"17\"></svg>\n        </button>\n      </div>\n    </footer>\n  </section>\n</erp-admin-page>\n\n@if (drawer()) {\n  <div class=\"erp-drawer-layer\">\n    <button\n      class=\"erp-drawer-backdrop\"\n      type=\"button\"\n      aria-label=\"Close drawer\"\n      (click)=\"closeDrawer()\"\n    ></button>\n    <aside class=\"erp-drawer erp-timetable-drawer\" role=\"dialog\" aria-modal=\"true\">\n      @if (drawer() === 'create') {\n        <header class=\"erp-drawer__header erp-timetable-drawer__header\">\n          <span class=\"erp-timetable-drawer__icon\">\n            @if (isMasterMode()) {\n              <svg lucideCalendarDays size=\"25\"></svg>\n            } @else {\n              <svg lucideLayers3 size=\"25\"></svg>\n            }\n          </span>\n          <div>\n            <h2>\n              {{ editingId() ? 'Edit' : 'New' }}\n              {{ isMasterMode() ? 'timetable master' : 'timetable structure' }}\n            </h2>\n            <p>\n              {{\n                isMasterMode()\n                  ? 'Create the academic container for timetable planning.'\n                  : 'Set the weekly framework before configuring individual periods.'\n              }}\n            </p>\n          </div>\n          <button class=\"erp-icon-button\" type=\"button\" aria-label=\"Close\" (click)=\"closeDrawer()\">\n            <svg lucideX size=\"21\"></svg>\n          </button>\n        </header>\n        <div class=\"erp-drawer__body erp-timetable-drawer__body\">\n          @if (isMasterMode()) {\n            <fieldset class=\"erp-timetable-form-card\">\n              <legend>Academic scope</legend>\n              <label\n                ><span>Academic session *</span\n                ><select class=\"erp-control\" [(ngModel)]=\"session\">\n                  <option value=\"\">Select session</option>\n                  @for (item of sessions(); track item) {\n                    <option [value]=\"item\">{{ item }}</option>\n                  }\n                </select></label\n              >\n              <label\n                ><span>University *</span\n                ><select\n                  class=\"erp-control\"\n                  [(ngModel)]=\"universityId\"\n                  (ngModelChange)=\"loadColleges()\"\n                >\n                  <option value=\"\">Select university</option>\n                  @for (item of universities(); track item._id) {\n                    <option [value]=\"item._id\">{{ item.name }}</option>\n                  }\n                </select></label\n              >\n              <label\n                ><span>College *</span\n                ><select class=\"erp-control\" [(ngModel)]=\"collegeId\" [disabled]=\"!universityId\">\n                  <option value=\"\">\n                    {{ universityId ? 'Select college' : 'Select a university first' }}\n                  </option>\n                  @for (item of colleges(); track item._id) {\n                    <option [value]=\"item._id\">{{ item.name }}</option>\n                  }\n                </select></label\n              ><small>Colleges are filtered based on the selected university.</small>\n            </fieldset>\n            <fieldset class=\"erp-timetable-form-card\">\n              <legend>Master details</legend>\n              <label\n                ><span>Name *</span\n                ><input class=\"erp-control\" [(ngModel)]=\"name\" placeholder=\"Enter master name\"\n              /></label>\n            </fieldset>\n            <div class=\"erp-timetable-info\">\n              <svg lucideInfo size=\"18\"></svg> Structures and periods are configured after this\n              master is created.\n            </div>\n          } @else {\n            <label\n              ><span>Timetable *</span\n              ><select\n                class=\"erp-control\"\n                [(ngModel)]=\"timetableMasterId\"\n                [disabled]=\"!!editingId()\"\n              >\n                <option value=\"\">Select timetable</option>\n                @for (master of masters(); track master._id) {\n                  <option [value]=\"master._id\">{{ master.name }}</option>\n                }\n              </select></label\n            >\n            <label\n              ><span>Name *</span\n              ><input class=\"erp-control\" [(ngModel)]=\"name\" placeholder=\"Enter structure name\"\n            /></label>\n            <div class=\"erp-field-stack\">\n              <span>Working days *</span\n              ><erp-multi-select-dropdown\n                [options]=\"workingDayOptions\"\n                [value]=\"workingDays\"\n                placeholder=\"Select working days\"\n                (valueChange)=\"workingDays = $event\"\n              />\n            </div>\n            <label\n              ><span>Number of periods *</span\n              ><select class=\"erp-control\" [(ngModel)]=\"periodCount\" [disabled]=\"!!editingId()\">\n                @for (item of [4, 5, 6, 7, 8, 9, 10, 12]; track item) {\n                  <option [value]=\"item\">{{ item }} periods</option>\n                }\n              </select></label\n            >\n            <div class=\"erp-timetable-info\">\n              <svg lucideInfo size=\"18\"></svg\n              ><strong\n                >{{ workingDays.length }} working days \u00B7 {{ periodCount }} periods per day</strong\n              >\n            </div>\n            <div class=\"erp-timetable-info erp-timetable-info--outline\">\n              <svg lucideInfo size=\"18\"></svg>You will configure start time, duration and period\n              type after creating the structure.\n            </div>\n          }\n          <footer class=\"erp-drawer__footer\">\n            <button class=\"erp-button erp-button--secondary\" type=\"button\" (click)=\"closeDrawer()\">\n              Cancel</button\n            ><button\n              class=\"erp-button erp-button--primary\"\n              type=\"button\"\n              [disabled]=\"!formValid() || saving()\"\n              (click)=\"save()\"\n            >\n              {{\n                saving()\n                  ? 'Saving\u2026'\n                  : editingId()\n                    ? 'Save changes'\n                    : isMasterMode()\n                      ? 'Create master'\n                      : 'Create structure'\n              }}\n            </button>\n          </footer>\n        </div>\n      } @else if (selected(); as record) {\n        <header class=\"erp-drawer__header erp-timetable-detail-head\">\n          <span class=\"erp-timetable-drawer__icon\">\n            @if (isMaster(record)) {\n              <svg lucideCalendarDays size=\"25\"></svg>\n            } @else {\n              <svg lucideLayers3 size=\"25\"></svg>\n            }\n          </span>\n          <div>\n            <h2>\n              {{ record.name }} <span class=\"erp-status\"><i></i>Active</span>\n            </h2>\n            <p>{{ isMaster(record) ? 'Saved just now' : masterName(record.timetableMasterId) }}</p>\n          </div>\n          <button class=\"erp-icon-button\" type=\"button\" aria-label=\"More actions\">\n            <svg lucideEllipsisVertical size=\"18\"></svg></button\n          ><button class=\"erp-icon-button\" type=\"button\" aria-label=\"Close\" (click)=\"closeDrawer()\">\n            <svg lucideX size=\"21\"></svg>\n          </button>\n        </header>\n        <div class=\"erp-drawer__body erp-timetable-detail-body\">\n          <section class=\"erp-timetable-detail-card\">\n            <h3>Overview</h3>\n            @if (isMaster(record)) {\n              <dl>\n                <div>\n                  <dt>Name</dt>\n                  <dd>{{ record.name }}</dd>\n                </div>\n                <div>\n                  <dt>Academic session</dt>\n                  <dd>{{ record.academicSession }}</dd>\n                </div>\n                <div>\n                  <dt>University</dt>\n                  <dd>{{ record.universityName || '\u2014' }}</dd>\n                </div>\n                <div>\n                  <dt>College</dt>\n                  <dd>{{ record.collegeName || '\u2014' }}</dd>\n                </div>\n                <div>\n                  <dt>Status</dt>\n                  <dd>\n                    <span class=\"erp-status\"><i></i>Active</span>\n                  </dd>\n                </div>\n              </dl>\n            } @else {\n              <dl>\n                <div>\n                  <dt>Timetable</dt>\n                  <dd>{{ masterName(record.timetableMasterId) }}</dd>\n                </div>\n                <div>\n                  <dt>Number of periods</dt>\n                  <dd>{{ record.periodCount }}</dd>\n                </div>\n              </dl>\n              <h4>Working days</h4>\n              <div class=\"erp-timetable-days\">\n                @for (day of record.workingDays; track day) {\n                  <span>{{ day }}</span>\n                }\n              </div>\n            }\n          </section>\n          <section class=\"erp-timetable-detail-card\">\n            <h3>{{ isMaster(record) ? 'Timetable setup' : 'Configuration' }}</h3>\n            @if (isMaster(record)) {\n              <div class=\"erp-timetable-step is-complete\">\n                <i><svg lucideCheck size=\"17\"></svg></i\n                ><span\n                  ><strong>Master details</strong\n                  ><small>Basic information about this timetable master.</small></span\n                ><b>Complete</b>\n              </div>\n              <div class=\"erp-timetable-step\">\n                <i>2</i\n                ><span\n                  ><strong>Structures</strong\n                  ><small>Add and manage academic structures.</small></span\n                ><button\n                  class=\"erp-button erp-button--secondary\"\n                  type=\"button\"\n                  (click)=\"openStructures(record._id)\"\n                >\n                  Open structures\n                </button>\n              </div>\n              <div class=\"erp-timetable-step\">\n                <i>3</i\n                ><span\n                  ><strong>Period configuration</strong\n                  ><small>Available after a structure is selected.</small></span\n                ><b>Not available</b>\n              </div>\n            } @else {\n              <div class=\"erp-timetable-step is-complete\">\n                <i><svg lucideCheck size=\"17\"></svg></i\n                ><span\n                  ><strong>Structure details</strong\n                  ><small>Basic information and working days.</small></span\n                ><b>Complete</b>\n              </div>\n              <div class=\"erp-timetable-step\">\n                <i><svg lucideClock3 size=\"17\"></svg></i\n                ><span\n                  ><strong>Period timings</strong\n                  ><small>Set period type, start time and duration.</small></span\n                ><button\n                  class=\"erp-button erp-button--primary\"\n                  type=\"button\"\n                  (click)=\"configurePeriods(record)\"\n                >\n                  Configure periods\n                </button>\n              </div>\n            }\n          </section>\n          <footer class=\"erp-timetable-detail-actions\">\n            <button class=\"erp-button erp-button--danger\" type=\"button\" (click)=\"deleteSelected()\">\n              <svg lucideTrash2 size=\"17\"></svg> Delete\n              {{ isMaster(record) ? 'master' : 'structure' }}</button\n            ><span></span\n            ><button class=\"erp-button erp-button--secondary\" type=\"button\" (click)=\"openEdit()\">\n              <svg lucidePencil size=\"17\"></svg> Edit\n              {{ isMaster(record) ? 'master' : 'structure' }}\n            </button>\n            @if (isMaster(record)) {\n              <button\n                class=\"erp-button erp-button--primary\"\n                type=\"button\"\n                (click)=\"openStructures(record._id)\"\n              >\n                Open structures\n              </button>\n            } @else {\n              <button\n                class=\"erp-button erp-button--primary\"\n                type=\"button\"\n                (click)=\"configurePeriods(record)\"\n              >\n                Configure periods\n              </button>\n            }\n          </footer>\n        </div>\n      }\n    </aside>\n  </div>\n}\n" }]
    }], () => [], null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(TimetableSetupComponent, { className: "TimetableSetupComponent", filePath: "frontend/src/app/features/admin/academics/timetable-setup.component.ts", lineNumber: 82 }); })();
