import { CommonModule, DOCUMENT } from '@angular/common';
import { ChangeDetectionStrategy, Component, effect, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { LucideBuilding2, LucideDoorOpen, LucideLayers3, LucideMapPinned, LucidePencil, LucidePlus, LucideSearch, LucideTrash2, LucideX, } from '@lucide/angular';
import { ApiService } from '../../../core/api.service';
import { AdminPageComponent } from '../../../shared/ui/admin-page/admin-page.component';
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
import * as i2 from "@angular/common";
const _forTrack0 = ($index, $item) => $item._id;
function ExamMasterComponent_Conditional_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 3);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r0.error());
} }
function ExamMasterComponent_Conditional_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 4);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r0.message());
} }
function ExamMasterComponent_Conditional_48_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "th");
    i0.ɵɵtext(1, "Capacity");
    i0.ɵɵelementEnd();
} }
function ExamMasterComponent_For_55_Conditional_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "small");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r3 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1("Room ", item_r3.roomNumber);
} }
function ExamMasterComponent_For_55_Conditional_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtext(0, " Exam building ");
} }
function ExamMasterComponent_For_55_Conditional_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtext(0);
} if (rf & 2) {
    const item_r3 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵtextInterpolate1(" ", item_r3.buildingName, " ");
} }
function ExamMasterComponent_For_55_Conditional_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "strong");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(2, "small");
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r3 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(item_r3.buildingName);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate2("", item_r3.locationName, " \u00B7 Floor ", item_r3.floorNumber);
} }
function ExamMasterComponent_For_55_Conditional_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "strong");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(2, "small");
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r3 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate2("", item_r3.buildingName, " \u00B7 ", item_r3.locationName);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(item_r3.floorName);
} }
function ExamMasterComponent_For_55_Conditional_10_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td")(1, "strong");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "small");
    i0.ɵɵtext(4, "students");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const item_r3 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(item_r3.capacity);
} }
function ExamMasterComponent_For_55_Template(rf, ctx) { if (rf & 1) {
    const _r2 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "tr")(1, "td")(2, "strong");
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵconditionalCreate(4, ExamMasterComponent_For_55_Conditional_4_Template, 2, 1, "small");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "td");
    i0.ɵɵconditionalCreate(6, ExamMasterComponent_For_55_Conditional_6_Template, 1, 0)(7, ExamMasterComponent_For_55_Conditional_7_Template, 1, 1)(8, ExamMasterComponent_For_55_Conditional_8_Template, 4, 3)(9, ExamMasterComponent_For_55_Conditional_9_Template, 4, 3);
    i0.ɵɵelementEnd();
    i0.ɵɵconditionalCreate(10, ExamMasterComponent_For_55_Conditional_10_Template, 5, 1, "td");
    i0.ɵɵelementStart(11, "td")(12, "span", 18);
    i0.ɵɵelement(13, "i");
    i0.ɵɵtext(14);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(15, "td", 16)(16, "button", 19);
    i0.ɵɵlistener("click", function ExamMasterComponent_For_55_Template_button_click_16_listener() { const item_r3 = i0.ɵɵrestoreView(_r2).$implicit; const ctx_r0 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r0.openEdit(item_r3)); });
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(17, "svg", 20);
    i0.ɵɵelementEnd();
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(18, "button", 21);
    i0.ɵɵlistener("click", function ExamMasterComponent_For_55_Template_button_click_18_listener() { const item_r3 = i0.ɵɵrestoreView(_r2).$implicit; const ctx_r0 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r0.remove(item_r3)); });
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(19, "svg", 22);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const item_r3 = ctx.$implicit;
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(item_r3.name);
    i0.ɵɵadvance();
    i0.ɵɵconditional(item_r3.roomNumber ? 4 : -1);
    i0.ɵɵadvance(2);
    i0.ɵɵconditional(ctx_r0.section() === "buildings" ? 6 : ctx_r0.section() === "locations" ? 7 : ctx_r0.section() === "floors" ? 8 : 9);
    i0.ɵɵadvance(4);
    i0.ɵɵconditional(ctx_r0.section() === "rooms" ? 10 : -1);
    i0.ɵɵadvance(2);
    i0.ɵɵclassProp("erp-status--neutral", !item_r3.isActive);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(item_r3.isActive ? "Active" : "Inactive");
} }
function ExamMasterComponent_ForEmpty_56_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "tr")(1, "td", 23);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵattribute("colspan", ctx_r0.section() === "rooms" ? 5 : 4);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r0.loading() ? "Loading\u2026" : "No records created yet.", " ");
} }
function ExamMasterComponent_Conditional_57_Conditional_12_For_7_Conditional_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 38);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r6 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵproperty("value", item_r6._id);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(item_r6.name);
} }
function ExamMasterComponent_Conditional_57_Conditional_12_For_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵconditionalCreate(0, ExamMasterComponent_Conditional_57_Conditional_12_For_7_Conditional_0_Template, 2, 2, "option", 38);
} if (rf & 2) {
    const item_r6 = ctx.$implicit;
    const ctx_r0 = i0.ɵɵnextContext(3);
    i0.ɵɵconditional(item_r6.isActive || item_r6._id === ctx_r0.buildingId ? 0 : -1);
} }
function ExamMasterComponent_Conditional_57_Conditional_12_Template(rf, ctx) { if (rf & 1) {
    const _r5 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "label")(1, "span");
    i0.ɵɵtext(2, "Building *");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "select", 36);
    i0.ɵɵtwoWayListener("ngModelChange", function ExamMasterComponent_Conditional_57_Conditional_12_Template_select_ngModelChange_3_listener($event) { i0.ɵɵrestoreView(_r5); const ctx_r0 = i0.ɵɵnextContext(2); i0.ɵɵtwoWayBindingSet(ctx_r0.buildingId, $event) || (ctx_r0.buildingId = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵlistener("ngModelChange", function ExamMasterComponent_Conditional_57_Conditional_12_Template_select_ngModelChange_3_listener() { i0.ɵɵrestoreView(_r5); const ctx_r0 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r0.buildingChanged()); });
    i0.ɵɵelementStart(4, "option", 37);
    i0.ɵɵtext(5, "Select building");
    i0.ɵɵelementEnd();
    i0.ɵɵrepeaterCreate(6, ExamMasterComponent_Conditional_57_Conditional_12_For_7_Template, 1, 1, null, null, _forTrack0);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(3);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r0.buildingId);
    i0.ɵɵadvance(3);
    i0.ɵɵrepeater(ctx_r0.buildings());
} }
function ExamMasterComponent_Conditional_57_Conditional_13_For_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 38);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r8 = ctx.$implicit;
    i0.ɵɵproperty("value", item_r8._id);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(item_r8.name);
} }
function ExamMasterComponent_Conditional_57_Conditional_13_Template(rf, ctx) { if (rf & 1) {
    const _r7 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "label")(1, "span");
    i0.ɵɵtext(2, "Location *");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "select", 36);
    i0.ɵɵtwoWayListener("ngModelChange", function ExamMasterComponent_Conditional_57_Conditional_13_Template_select_ngModelChange_3_listener($event) { i0.ɵɵrestoreView(_r7); const ctx_r0 = i0.ɵɵnextContext(2); i0.ɵɵtwoWayBindingSet(ctx_r0.locationId, $event) || (ctx_r0.locationId = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵlistener("ngModelChange", function ExamMasterComponent_Conditional_57_Conditional_13_Template_select_ngModelChange_3_listener() { i0.ɵɵrestoreView(_r7); const ctx_r0 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r0.locationChanged()); });
    i0.ɵɵelementStart(4, "option", 37);
    i0.ɵɵtext(5, "Select location");
    i0.ɵɵelementEnd();
    i0.ɵɵrepeaterCreate(6, ExamMasterComponent_Conditional_57_Conditional_13_For_7_Template, 2, 2, "option", 38, _forTrack0);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(3);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r0.locationId);
    i0.ɵɵadvance(3);
    i0.ɵɵrepeater(ctx_r0.locationsForBuilding());
} }
function ExamMasterComponent_Conditional_57_Conditional_14_For_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 38);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r10 = ctx.$implicit;
    i0.ɵɵproperty("value", item_r10._id);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate2("", item_r10.name, " \u00B7 Floor ", item_r10.floorNumber);
} }
function ExamMasterComponent_Conditional_57_Conditional_14_Template(rf, ctx) { if (rf & 1) {
    const _r9 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "label")(1, "span");
    i0.ɵɵtext(2, "Floor *");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "select", 36);
    i0.ɵɵtwoWayListener("ngModelChange", function ExamMasterComponent_Conditional_57_Conditional_14_Template_select_ngModelChange_3_listener($event) { i0.ɵɵrestoreView(_r9); const ctx_r0 = i0.ɵɵnextContext(2); i0.ɵɵtwoWayBindingSet(ctx_r0.floorId, $event) || (ctx_r0.floorId = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementStart(4, "option", 37);
    i0.ɵɵtext(5, "Select floor");
    i0.ɵɵelementEnd();
    i0.ɵɵrepeaterCreate(6, ExamMasterComponent_Conditional_57_Conditional_14_For_7_Template, 2, 3, "option", 38, _forTrack0);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(3);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r0.floorId);
    i0.ɵɵadvance(3);
    i0.ɵɵrepeater(ctx_r0.floorsForLocation());
} }
function ExamMasterComponent_Conditional_57_Conditional_20_Template(rf, ctx) { if (rf & 1) {
    const _r11 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "label")(1, "span");
    i0.ɵɵtext(2, "Floor number *");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "input", 39);
    i0.ɵɵtwoWayListener("ngModelChange", function ExamMasterComponent_Conditional_57_Conditional_20_Template_input_ngModelChange_3_listener($event) { i0.ɵɵrestoreView(_r11); const ctx_r0 = i0.ɵɵnextContext(2); i0.ɵɵtwoWayBindingSet(ctx_r0.floorNumber, $event) || (ctx_r0.floorNumber = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(3);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r0.floorNumber);
} }
function ExamMasterComponent_Conditional_57_Conditional_21_Template(rf, ctx) { if (rf & 1) {
    const _r12 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "label")(1, "span");
    i0.ɵɵtext(2, "Room number *");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "input", 40);
    i0.ɵɵtwoWayListener("ngModelChange", function ExamMasterComponent_Conditional_57_Conditional_21_Template_input_ngModelChange_3_listener($event) { i0.ɵɵrestoreView(_r12); const ctx_r0 = i0.ɵɵnextContext(2); i0.ɵɵtwoWayBindingSet(ctx_r0.roomNumber, $event) || (ctx_r0.roomNumber = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(4, "label")(5, "span");
    i0.ɵɵtext(6, "Seating capacity *");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "input", 41);
    i0.ɵɵtwoWayListener("ngModelChange", function ExamMasterComponent_Conditional_57_Conditional_21_Template_input_ngModelChange_7_listener($event) { i0.ɵɵrestoreView(_r12); const ctx_r0 = i0.ɵɵnextContext(2); i0.ɵɵtwoWayBindingSet(ctx_r0.capacity, $event) || (ctx_r0.capacity = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(3);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r0.roomNumber);
    i0.ɵɵadvance(4);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r0.capacity);
} }
function ExamMasterComponent_Conditional_57_Template(rf, ctx) { if (rf & 1) {
    const _r4 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 17)(1, "button", 24);
    i0.ɵɵlistener("click", function ExamMasterComponent_Conditional_57_Template_button_click_1_listener() { i0.ɵɵrestoreView(_r4); const ctx_r0 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r0.closeDrawer()); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(2, "aside", 25)(3, "header", 26)(4, "div")(5, "h2");
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "p");
    i0.ɵɵtext(8, "Configure the Exam Master hierarchy.");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(9, "button", 27);
    i0.ɵɵlistener("click", function ExamMasterComponent_Conditional_57_Template_button_click_9_listener() { i0.ɵɵrestoreView(_r4); const ctx_r0 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r0.closeDrawer()); });
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(10, "svg", 28);
    i0.ɵɵelementEnd()();
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(11, "div", 29);
    i0.ɵɵconditionalCreate(12, ExamMasterComponent_Conditional_57_Conditional_12_Template, 8, 1, "label");
    i0.ɵɵconditionalCreate(13, ExamMasterComponent_Conditional_57_Conditional_13_Template, 8, 1, "label");
    i0.ɵɵconditionalCreate(14, ExamMasterComponent_Conditional_57_Conditional_14_Template, 8, 1, "label");
    i0.ɵɵelementStart(15, "label")(16, "span");
    i0.ɵɵtext(17);
    i0.ɵɵpipe(18, "titlecase");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(19, "input", 30);
    i0.ɵɵtwoWayListener("ngModelChange", function ExamMasterComponent_Conditional_57_Template_input_ngModelChange_19_listener($event) { i0.ɵɵrestoreView(_r4); const ctx_r0 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r0.name, $event) || (ctx_r0.name = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd()();
    i0.ɵɵconditionalCreate(20, ExamMasterComponent_Conditional_57_Conditional_20_Template, 4, 1, "label");
    i0.ɵɵconditionalCreate(21, ExamMasterComponent_Conditional_57_Conditional_21_Template, 8, 2);
    i0.ɵɵelementStart(22, "label", 31)(23, "input", 32);
    i0.ɵɵtwoWayListener("ngModelChange", function ExamMasterComponent_Conditional_57_Template_input_ngModelChange_23_listener($event) { i0.ɵɵrestoreView(_r4); const ctx_r0 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r0.isActive, $event) || (ctx_r0.isActive = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(24, "span");
    i0.ɵɵtext(25, "Active and available for exam configuration");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(26, "footer", 33)(27, "button", 34);
    i0.ɵɵlistener("click", function ExamMasterComponent_Conditional_57_Template_button_click_27_listener() { i0.ɵɵrestoreView(_r4); const ctx_r0 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r0.closeDrawer()); });
    i0.ɵɵtext(28, " Cancel");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(29, "button", 35);
    i0.ɵɵlistener("click", function ExamMasterComponent_Conditional_57_Template_button_click_29_listener() { i0.ɵɵrestoreView(_r4); const ctx_r0 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r0.save()); });
    i0.ɵɵtext(30);
    i0.ɵɵelementEnd()()()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(6);
    i0.ɵɵtextInterpolate2("", ctx_r0.editingId() ? "Edit" : "Create", " ", ctx_r0.singular());
    i0.ɵɵadvance(6);
    i0.ɵɵconditional(ctx_r0.section() !== "buildings" ? 12 : -1);
    i0.ɵɵadvance();
    i0.ɵɵconditional(ctx_r0.section() === "floors" || ctx_r0.section() === "rooms" ? 13 : -1);
    i0.ɵɵadvance();
    i0.ɵɵconditional(ctx_r0.section() === "rooms" ? 14 : -1);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1("", ctx_r0.section() === "rooms" ? "Room name" : i0.ɵɵpipeBind1(18, 13, ctx_r0.singular()) + " name", " *");
    i0.ɵɵadvance(2);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r0.name);
    i0.ɵɵproperty("placeholder", ctx_r0.section() === "rooms" ? "Examination Hall A" : "Enter " + ctx_r0.singular() + " name");
    i0.ɵɵadvance();
    i0.ɵɵconditional(ctx_r0.section() === "floors" ? 20 : -1);
    i0.ɵɵadvance();
    i0.ɵɵconditional(ctx_r0.section() === "rooms" ? 21 : -1);
    i0.ɵɵadvance(2);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r0.isActive);
    i0.ɵɵadvance(6);
    i0.ɵɵproperty("disabled", ctx_r0.saving() || !ctx_r0.valid());
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r0.saving() ? "Saving\u2026" : "Save " + ctx_r0.singular(), " ");
} }
function apiMessage(error, fallback) {
    if (typeof error === 'object' && error && 'error' in error) {
        const message = error.error?.message;
        if (typeof message === 'string')
            return message;
    }
    return fallback;
}
export class ExamMasterComponent {
    api = inject(ApiService);
    route = inject(ActivatedRoute);
    document = inject(DOCUMENT);
    section = signal('buildings', ...(ngDevMode ? [{ debugName: "section" }] : /* istanbul ignore next */ []));
    buildings = signal([], ...(ngDevMode ? [{ debugName: "buildings" }] : /* istanbul ignore next */ []));
    locations = signal([], ...(ngDevMode ? [{ debugName: "locations" }] : /* istanbul ignore next */ []));
    floors = signal([], ...(ngDevMode ? [{ debugName: "floors" }] : /* istanbul ignore next */ []));
    rooms = signal([], ...(ngDevMode ? [{ debugName: "rooms" }] : /* istanbul ignore next */ []));
    loading = signal(true, ...(ngDevMode ? [{ debugName: "loading" }] : /* istanbul ignore next */ []));
    saving = signal(false, ...(ngDevMode ? [{ debugName: "saving" }] : /* istanbul ignore next */ []));
    drawerOpen = signal(false, ...(ngDevMode ? [{ debugName: "drawerOpen" }] : /* istanbul ignore next */ []));
    editingId = signal(null, ...(ngDevMode ? [{ debugName: "editingId" }] : /* istanbul ignore next */ []));
    error = signal('', ...(ngDevMode ? [{ debugName: "error" }] : /* istanbul ignore next */ []));
    message = signal('', ...(ngDevMode ? [{ debugName: "message" }] : /* istanbul ignore next */ []));
    search = '';
    name = '';
    buildingId = '';
    locationId = '';
    floorId = '';
    floorNumber = 0;
    roomNumber = '';
    capacity = 1;
    isActive = true;
    constructor() {
        this.route.data.subscribe((data) => {
            this.section.set(data['section'] || 'buildings');
            this.search = '';
            this.closeDrawer();
            this.load();
        });
        effect((onCleanup) => {
            if (!this.drawerOpen())
                return;
            const overflow = this.document.body.style.overflow;
            this.document.body.style.overflow = 'hidden';
            onCleanup(() => (this.document.body.style.overflow = overflow));
        });
    }
    title() {
        return {
            buildings: 'Exam buildings',
            locations: 'Exam locations',
            floors: 'Exam floors',
            rooms: 'Exam rooms',
        }[this.section()];
    }
    singular() {
        return { buildings: 'building', locations: 'location', floors: 'floor', rooms: 'room' }[this.section()];
    }
    description() {
        return {
            buildings: 'Create the buildings available for examinations.',
            locations: 'Add locations within each examination building.',
            floors: 'Configure numbered floors for every building location.',
            rooms: 'Maintain examination rooms and their seating capacity.',
        }[this.section()];
    }
    records() {
        const source = {
            buildings: this.buildings(),
            locations: this.locations(),
            floors: this.floors(),
            rooms: this.rooms(),
        }[this.section()];
        const query = this.search.trim().toLowerCase();
        if (!query)
            return source;
        return source.filter((item) => [
            item.name,
            'buildingName' in item ? item.buildingName : '',
            'locationName' in item ? item.locationName : '',
            'floorName' in item ? item.floorName : '',
            'roomNumber' in item ? item.roomNumber : '',
        ].some((value) => String(value || '')
            .toLowerCase()
            .includes(query)));
    }
    locationsForBuilding() {
        return this.locations().filter((item) => item.isActive && (!this.buildingId || item.buildingId === this.buildingId));
    }
    floorsForLocation() {
        return this.floors().filter((item) => item.isActive &&
            (!this.buildingId || item.buildingId === this.buildingId) &&
            (!this.locationId || item.locationId === this.locationId));
    }
    load() {
        this.loading.set(true);
        this.error.set('');
        this.api.examMasterBootstrap().subscribe({
            next: (data) => {
                this.buildings.set(data.buildings);
                this.locations.set(data.locations);
                this.floors.set(data.floors);
                this.rooms.set(data.rooms);
                this.loading.set(false);
            },
            error: (error) => {
                this.error.set(apiMessage(error, 'Could not load Exam Master.'));
                this.loading.set(false);
            },
        });
    }
    openCreate() {
        this.resetForm();
        this.drawerOpen.set(true);
    }
    openEdit(record) {
        this.resetForm();
        this.editingId.set(record._id);
        this.name = record.name;
        this.isActive = record.isActive;
        if ('buildingId' in record)
            this.buildingId = record.buildingId;
        if ('locationId' in record)
            this.locationId = record.locationId;
        if ('floorId' in record)
            this.floorId = record.floorId;
        if ('floorNumber' in record)
            this.floorNumber = record.floorNumber;
        if ('roomNumber' in record)
            this.roomNumber = record.roomNumber;
        if ('capacity' in record)
            this.capacity = record.capacity;
        this.drawerOpen.set(true);
    }
    closeDrawer() {
        if (this.saving())
            return;
        this.drawerOpen.set(false);
        this.resetForm();
    }
    buildingChanged() {
        if (!this.locationsForBuilding().some((item) => item._id === this.locationId)) {
            this.locationId = '';
            this.floorId = '';
        }
    }
    locationChanged() {
        if (!this.floorsForLocation().some((item) => item._id === this.floorId))
            this.floorId = '';
    }
    valid() {
        if (!this.name.trim())
            return false;
        if (this.section() !== 'buildings' && !this.buildingId)
            return false;
        if (['floors', 'rooms'].includes(this.section()) && !this.locationId)
            return false;
        if (this.section() === 'rooms' &&
            (!this.floorId || !this.roomNumber.trim() || this.capacity < 1))
            return false;
        return true;
    }
    save() {
        if (!this.valid())
            return;
        const common = { name: this.name.trim(), isActive: this.isActive };
        const body = this.section() === 'buildings'
            ? common
            : this.section() === 'locations'
                ? { ...common, buildingId: this.buildingId }
                : this.section() === 'floors'
                    ? {
                        ...common,
                        buildingId: this.buildingId,
                        locationId: this.locationId,
                        floorNumber: Number(this.floorNumber),
                    }
                    : {
                        ...common,
                        buildingId: this.buildingId,
                        locationId: this.locationId,
                        floorId: this.floorId,
                        roomNumber: this.roomNumber.trim(),
                        capacity: Number(this.capacity),
                    };
        this.saving.set(true);
        this.error.set('');
        const request = this.editingId()
            ? this.api.updateExamMasterRecord(this.section(), this.editingId(), body)
            : this.api.createExamMasterRecord(this.section(), body);
        request.subscribe({
            next: () => {
                this.message.set(`${this.singular()} saved successfully.`);
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
    remove(record) {
        if (!confirm(`Delete ${record.name}?`))
            return;
        this.api.deleteExamMasterRecord(this.section(), record._id).subscribe({
            next: () => {
                this.message.set(`${this.singular()} deleted.`);
                this.load();
            },
            error: (error) => this.error.set(apiMessage(error, `Could not delete this ${this.singular()}.`)),
        });
    }
    resetForm() {
        this.editingId.set(null);
        this.name = '';
        this.buildingId = '';
        this.locationId = '';
        this.floorId = '';
        this.floorNumber = 0;
        this.roomNumber = '';
        this.capacity = 1;
        this.isActive = true;
    }
    static ɵfac = function ExamMasterComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || ExamMasterComponent)(); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ExamMasterComponent, selectors: [["erp-exam-master"]], decls: 58, vars: 14, consts: [["variant", "compact", "layout", "collection", 3, "title", "description"], ["page-actions", "", "type", "button", 1, "erp-button", "erp-button--primary", 3, "click"], ["lucidePlus", "", "size", "17", "aria-hidden", "true"], ["role", "alert", 1, "erp-alert", "erp-alert--error"], ["role", "status", 1, "erp-alert", "erp-alert--success"], ["aria-label", "Exam Master summary", 1, "exam-summary"], ["lucideBuilding2", "", "size", "21"], ["lucideMapPinned", "", "size", "21"], ["lucideLayers3", "", "size", "21"], ["lucideDoorOpen", "", "size", "21"], [1, "erp-card", "erp-table-shell"], [1, "exam-toolbar"], [1, "erp-search-control"], ["lucideSearch", "", "size", "17"], ["type", "search", 3, "ngModelChange", "ngModel", "placeholder"], [1, "erp-table-shell__scroll"], [1, "erp-table-shell__actions"], [1, "erp-drawer-layer"], [1, "erp-status"], ["type", "button", "aria-label", "Edit", 1, "exam-icon-button", 3, "click"], ["lucidePencil", "", "size", "17"], ["type", "button", "aria-label", "Delete", 1, "exam-icon-button", "exam-icon-button--danger", 3, "click"], ["lucideTrash2", "", "size", "17"], [1, "exam-empty"], ["type", "button", "aria-label", "Close", 1, "erp-drawer-backdrop", 3, "click"], ["role", "dialog", "aria-modal", "true", 1, "erp-drawer", "exam-drawer"], [1, "erp-drawer__header"], ["type", "button", "aria-label", "Close", 3, "click"], ["lucideX", "", "size", "21"], [1, "erp-drawer__body", "exam-form"], [1, "erp-control", 3, "ngModelChange", "ngModel", "placeholder"], [1, "exam-check"], ["type", "checkbox", 3, "ngModelChange", "ngModel"], [1, "erp-drawer__footer"], ["type", "button", 1, "erp-button", "erp-button--secondary", 3, "click"], ["type", "button", 1, "erp-button", "erp-button--primary", 3, "click", "disabled"], [1, "erp-control", 3, "ngModelChange", "ngModel"], ["value", ""], [3, "value"], ["type", "number", "min", "-10", "max", "300", 1, "erp-control", 3, "ngModelChange", "ngModel"], ["placeholder", "101", 1, "erp-control", 3, "ngModelChange", "ngModel"], ["type", "number", "min", "1", "max", "10000", 1, "erp-control", 3, "ngModelChange", "ngModel"]], template: function ExamMasterComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "erp-admin-page", 0)(1, "button", 1);
            i0.ɵɵlistener("click", function ExamMasterComponent_Template_button_click_1_listener() { return ctx.openCreate(); });
            i0.ɵɵnamespaceSVG();
            i0.ɵɵelement(2, "svg", 2);
            i0.ɵɵtext(3);
            i0.ɵɵelementEnd();
            i0.ɵɵconditionalCreate(4, ExamMasterComponent_Conditional_4_Template, 2, 1, "div", 3);
            i0.ɵɵconditionalCreate(5, ExamMasterComponent_Conditional_5_Template, 2, 1, "div", 4);
            i0.ɵɵnamespaceHTML();
            i0.ɵɵelementStart(6, "section", 5)(7, "div");
            i0.ɵɵnamespaceSVG();
            i0.ɵɵelement(8, "svg", 6);
            i0.ɵɵnamespaceHTML();
            i0.ɵɵelementStart(9, "span")(10, "small");
            i0.ɵɵtext(11, "Buildings");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(12, "strong");
            i0.ɵɵtext(13);
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(14, "div");
            i0.ɵɵnamespaceSVG();
            i0.ɵɵelement(15, "svg", 7);
            i0.ɵɵnamespaceHTML();
            i0.ɵɵelementStart(16, "span")(17, "small");
            i0.ɵɵtext(18, "Locations");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(19, "strong");
            i0.ɵɵtext(20);
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(21, "div");
            i0.ɵɵnamespaceSVG();
            i0.ɵɵelement(22, "svg", 8);
            i0.ɵɵnamespaceHTML();
            i0.ɵɵelementStart(23, "span")(24, "small");
            i0.ɵɵtext(25, "Floors");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(26, "strong");
            i0.ɵɵtext(27);
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(28, "div");
            i0.ɵɵnamespaceSVG();
            i0.ɵɵelement(29, "svg", 9);
            i0.ɵɵnamespaceHTML();
            i0.ɵɵelementStart(30, "span")(31, "small");
            i0.ɵɵtext(32, "Rooms");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(33, "strong");
            i0.ɵɵtext(34);
            i0.ɵɵelementEnd()()()();
            i0.ɵɵelementStart(35, "section", 10)(36, "div", 11)(37, "label", 12);
            i0.ɵɵnamespaceSVG();
            i0.ɵɵelement(38, "svg", 13);
            i0.ɵɵnamespaceHTML();
            i0.ɵɵelementStart(39, "input", 14);
            i0.ɵɵtwoWayListener("ngModelChange", function ExamMasterComponent_Template_input_ngModelChange_39_listener($event) { i0.ɵɵtwoWayBindingSet(ctx.search, $event) || (ctx.search = $event); return $event; });
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(40, "div", 15)(41, "table")(42, "thead")(43, "tr")(44, "th");
            i0.ɵɵtext(45, "Name");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(46, "th");
            i0.ɵɵtext(47, "Hierarchy");
            i0.ɵɵelementEnd();
            i0.ɵɵconditionalCreate(48, ExamMasterComponent_Conditional_48_Template, 2, 0, "th");
            i0.ɵɵelementStart(49, "th");
            i0.ɵɵtext(50, "Status");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(51, "th", 16);
            i0.ɵɵtext(52, "Actions");
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(53, "tbody");
            i0.ɵɵrepeaterCreate(54, ExamMasterComponent_For_55_Template, 20, 7, "tr", null, _forTrack0, false, ExamMasterComponent_ForEmpty_56_Template, 3, 2, "tr");
            i0.ɵɵelementEnd()()()();
            i0.ɵɵconditionalCreate(57, ExamMasterComponent_Conditional_57_Template, 31, 15, "div", 17);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵproperty("title", ctx.title())("description", ctx.description());
            i0.ɵɵadvance(3);
            i0.ɵɵtextInterpolate1("Create ", ctx.singular(), " ");
            i0.ɵɵadvance();
            i0.ɵɵconditional(ctx.error() ? 4 : -1);
            i0.ɵɵadvance();
            i0.ɵɵconditional(ctx.message() ? 5 : -1);
            i0.ɵɵadvance(8);
            i0.ɵɵtextInterpolate(ctx.buildings().length);
            i0.ɵɵadvance(7);
            i0.ɵɵtextInterpolate(ctx.locations().length);
            i0.ɵɵadvance(7);
            i0.ɵɵtextInterpolate(ctx.floors().length);
            i0.ɵɵadvance(7);
            i0.ɵɵtextInterpolate(ctx.rooms().length);
            i0.ɵɵadvance(5);
            i0.ɵɵtwoWayProperty("ngModel", ctx.search);
            i0.ɵɵproperty("placeholder", "Search " + ctx.title().toLowerCase());
            i0.ɵɵadvance(9);
            i0.ɵɵconditional(ctx.section() === "rooms" ? 48 : -1);
            i0.ɵɵadvance(6);
            i0.ɵɵrepeater(ctx.records());
            i0.ɵɵadvance(3);
            i0.ɵɵconditional(ctx.drawerOpen() ? 57 : -1);
        } }, dependencies: [CommonModule,
            FormsModule, i1.NgSelectOption, i1.ɵNgSelectMultipleOption, i1.DefaultValueAccessor, i1.NumberValueAccessor, i1.CheckboxControlValueAccessor, i1.SelectControlValueAccessor, i1.NgControlStatus, i1.MinValidator, i1.MaxValidator, i1.NgModel, AdminPageComponent,
            LucideBuilding2,
            LucideDoorOpen,
            LucideLayers3,
            LucideMapPinned,
            LucidePencil,
            LucidePlus,
            LucideSearch,
            LucideTrash2,
            LucideX, i2.TitleCasePipe], styles: ["[_nghost-%COMP%] {\n  display: block;\n  min-width: 0;\n}\n.exam-summary[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(4, minmax(0, 1fr));\n  gap: var(--erp-space-3);\n}\n.exam-summary[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: var(--erp-space-3);\n  padding: var(--erp-space-4);\n  border: 1px solid var(--erp-border-subtle);\n  border-radius: var(--erp-radius-lg);\n  background: var(--erp-surface);\n}\n.exam-summary[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  color: var(--erp-blue-600);\n}\n.exam-summary[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], \n.exam-summary[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  display: block;\n}\n.exam-summary[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  color: var(--erp-text-muted);\n}\n.exam-summary[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: var(--erp-text-heading);\n  font-size: var(--erp-font-size-xl);\n}\n.exam-toolbar[_ngcontent-%COMP%] {\n  padding: var(--erp-space-4);\n}\n.exam-toolbar[_ngcontent-%COMP%]   .erp-search-control[_ngcontent-%COMP%] {\n  max-width: 30rem;\n}\n.exam-icon-button[_ngcontent-%COMP%] {\n  display: inline-grid;\n  width: 2.25rem;\n  height: 2.25rem;\n  margin-left: var(--erp-space-2);\n  place-items: center;\n  border: 1px solid var(--erp-border-default);\n  border-radius: var(--erp-radius-md);\n  color: var(--erp-text-body);\n  background: var(--erp-surface);\n  cursor: pointer;\n}\n.exam-icon-button--danger[_ngcontent-%COMP%] {\n  color: var(--erp-danger);\n}\n.exam-empty[_ngcontent-%COMP%] {\n  padding: var(--erp-space-8);\n  text-align: center;\n  color: var(--erp-text-muted);\n}\n.exam-drawer[_ngcontent-%COMP%] {\n  width: min(31rem, 100vw);\n}\n.exam-form[_ngcontent-%COMP%] {\n  display: grid;\n  gap: var(--erp-space-4);\n}\n.exam-form[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  display: block;\n  margin-bottom: var(--erp-space-2);\n  color: var(--erp-text-strong);\n  font-weight: var(--erp-weight-semibold);\n}\n.exam-check[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: var(--erp-space-2);\n}\n.exam-check[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  margin: 0 !important;\n}\n@media (max-width: 720px) {\n  .exam-summary[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n  }\n}"], changeDetection: 0 });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ExamMasterComponent, [{
        type: Component,
        args: [{ selector: 'erp-exam-master', imports: [
                    CommonModule,
                    FormsModule,
                    AdminPageComponent,
                    LucideBuilding2,
                    LucideDoorOpen,
                    LucideLayers3,
                    LucideMapPinned,
                    LucidePencil,
                    LucidePlus,
                    LucideSearch,
                    LucideTrash2,
                    LucideX,
                ], changeDetection: ChangeDetectionStrategy.OnPush, template: "<erp-admin-page\n  [title]=\"title()\"\n  [description]=\"description()\"\n  variant=\"compact\"\n  layout=\"collection\"\n>\n  <button page-actions class=\"erp-button erp-button--primary\" type=\"button\" (click)=\"openCreate()\">\n    <svg lucidePlus size=\"17\" aria-hidden=\"true\"></svg>Create {{ singular() }}\n  </button>\n\n  @if (error()) {\n    <div class=\"erp-alert erp-alert--error\" role=\"alert\">{{ error() }}</div>\n  }\n  @if (message()) {\n    <div class=\"erp-alert erp-alert--success\" role=\"status\">{{ message() }}</div>\n  }\n\n  <section class=\"exam-summary\" aria-label=\"Exam Master summary\">\n    <div>\n      <svg lucideBuilding2 size=\"21\"></svg\n      ><span\n        ><small>Buildings</small><strong>{{ buildings().length }}</strong></span\n      >\n    </div>\n    <div>\n      <svg lucideMapPinned size=\"21\"></svg\n      ><span\n        ><small>Locations</small><strong>{{ locations().length }}</strong></span\n      >\n    </div>\n    <div>\n      <svg lucideLayers3 size=\"21\"></svg\n      ><span\n        ><small>Floors</small><strong>{{ floors().length }}</strong></span\n      >\n    </div>\n    <div>\n      <svg lucideDoorOpen size=\"21\"></svg\n      ><span\n        ><small>Rooms</small><strong>{{ rooms().length }}</strong></span\n      >\n    </div>\n  </section>\n\n  <section class=\"erp-card erp-table-shell\">\n    <div class=\"exam-toolbar\">\n      <label class=\"erp-search-control\"\n        ><svg lucideSearch size=\"17\"></svg\n        ><input\n          type=\"search\"\n          [(ngModel)]=\"search\"\n          [placeholder]=\"'Search ' + title().toLowerCase()\"\n      /></label>\n    </div>\n    <div class=\"erp-table-shell__scroll\">\n      <table>\n        <thead>\n          <tr>\n            <th>Name</th>\n            <th>Hierarchy</th>\n            @if (section() === 'rooms') {\n              <th>Capacity</th>\n            }\n            <th>Status</th>\n            <th class=\"erp-table-shell__actions\">Actions</th>\n          </tr>\n        </thead>\n        <tbody>\n          @for (item of records(); track item._id) {\n            <tr>\n              <td>\n                <strong>{{ item.name }}</strong>\n                @if ($any(item).roomNumber) {\n                  <small>Room {{ $any(item).roomNumber }}</small>\n                }\n              </td>\n              <td>\n                @if (section() === 'buildings') {\n                  Exam building\n                } @else if (section() === 'locations') {\n                  {{ $any(item).buildingName }}\n                } @else if (section() === 'floors') {\n                  <strong>{{ $any(item).buildingName }}</strong\n                  ><small>{{ $any(item).locationName }} \u00B7 Floor {{ $any(item).floorNumber }}</small>\n                } @else {\n                  <strong>{{ $any(item).buildingName }} \u00B7 {{ $any(item).locationName }}</strong\n                  ><small>{{ $any(item).floorName }}</small>\n                }\n              </td>\n              @if (section() === 'rooms') {\n                <td>\n                  <strong>{{ $any(item).capacity }}</strong\n                  ><small>students</small>\n                </td>\n              }\n              <td>\n                <span class=\"erp-status\" [class.erp-status--neutral]=\"!item.isActive\"\n                  ><i></i>{{ item.isActive ? 'Active' : 'Inactive' }}</span\n                >\n              </td>\n              <td class=\"erp-table-shell__actions\">\n                <button\n                  class=\"exam-icon-button\"\n                  type=\"button\"\n                  aria-label=\"Edit\"\n                  (click)=\"openEdit(item)\"\n                >\n                  <svg lucidePencil size=\"17\"></svg></button\n                ><button\n                  class=\"exam-icon-button exam-icon-button--danger\"\n                  type=\"button\"\n                  aria-label=\"Delete\"\n                  (click)=\"remove(item)\"\n                >\n                  <svg lucideTrash2 size=\"17\"></svg>\n                </button>\n              </td>\n            </tr>\n          } @empty {\n            <tr>\n              <td [attr.colspan]=\"section() === 'rooms' ? 5 : 4\" class=\"exam-empty\">\n                {{ loading() ? 'Loading\u2026' : 'No records created yet.' }}\n              </td>\n            </tr>\n          }\n        </tbody>\n      </table>\n    </div>\n  </section>\n\n  @if (drawerOpen()) {\n    <div class=\"erp-drawer-layer\">\n      <button\n        class=\"erp-drawer-backdrop\"\n        type=\"button\"\n        aria-label=\"Close\"\n        (click)=\"closeDrawer()\"\n      ></button>\n      <aside class=\"erp-drawer exam-drawer\" role=\"dialog\" aria-modal=\"true\">\n        <header class=\"erp-drawer__header\">\n          <div>\n            <h2>{{ editingId() ? 'Edit' : 'Create' }} {{ singular() }}</h2>\n            <p>Configure the Exam Master hierarchy.</p>\n          </div>\n          <button type=\"button\" aria-label=\"Close\" (click)=\"closeDrawer()\">\n            <svg lucideX size=\"21\"></svg>\n          </button>\n        </header>\n        <div class=\"erp-drawer__body exam-form\">\n          @if (section() !== 'buildings') {\n            <label\n              ><span>Building *</span\n              ><select\n                class=\"erp-control\"\n                [(ngModel)]=\"buildingId\"\n                (ngModelChange)=\"buildingChanged()\"\n              >\n                <option value=\"\">Select building</option>\n                @for (item of buildings(); track item._id) {\n                  @if (item.isActive || item._id === buildingId) {\n                    <option [value]=\"item._id\">{{ item.name }}</option>\n                  }\n                }\n              </select></label\n            >\n          }\n          @if (section() === 'floors' || section() === 'rooms') {\n            <label\n              ><span>Location *</span\n              ><select\n                class=\"erp-control\"\n                [(ngModel)]=\"locationId\"\n                (ngModelChange)=\"locationChanged()\"\n              >\n                <option value=\"\">Select location</option>\n                @for (item of locationsForBuilding(); track item._id) {\n                  <option [value]=\"item._id\">{{ item.name }}</option>\n                }\n              </select></label\n            >\n          }\n          @if (section() === 'rooms') {\n            <label\n              ><span>Floor *</span\n              ><select class=\"erp-control\" [(ngModel)]=\"floorId\">\n                <option value=\"\">Select floor</option>\n                @for (item of floorsForLocation(); track item._id) {\n                  <option [value]=\"item._id\">{{ item.name }} \u00B7 Floor {{ item.floorNumber }}</option>\n                }\n              </select></label\n            >\n          }\n          <label\n            ><span\n              >{{\n                section() === 'rooms' ? 'Room name' : (singular() | titlecase) + ' name'\n              }}\n              *</span\n            ><input\n              class=\"erp-control\"\n              [(ngModel)]=\"name\"\n              [placeholder]=\"\n                section() === 'rooms' ? 'Examination Hall A' : 'Enter ' + singular() + ' name'\n              \"\n          /></label>\n          @if (section() === 'floors') {\n            <label\n              ><span>Floor number *</span\n              ><input\n                class=\"erp-control\"\n                type=\"number\"\n                min=\"-10\"\n                max=\"300\"\n                [(ngModel)]=\"floorNumber\"\n            /></label>\n          }\n          @if (section() === 'rooms') {\n            <label\n              ><span>Room number *</span\n              ><input class=\"erp-control\" [(ngModel)]=\"roomNumber\" placeholder=\"101\"\n            /></label>\n            <label\n              ><span>Seating capacity *</span\n              ><input class=\"erp-control\" type=\"number\" min=\"1\" max=\"10000\" [(ngModel)]=\"capacity\"\n            /></label>\n          }\n          <label class=\"exam-check\"\n            ><input type=\"checkbox\" [(ngModel)]=\"isActive\" /><span\n              >Active and available for exam configuration</span\n            ></label\n          >\n        </div>\n        <footer class=\"erp-drawer__footer\">\n          <button class=\"erp-button erp-button--secondary\" type=\"button\" (click)=\"closeDrawer()\">\n            Cancel</button\n          ><button\n            class=\"erp-button erp-button--primary\"\n            type=\"button\"\n            [disabled]=\"saving() || !valid()\"\n            (click)=\"save()\"\n          >\n            {{ saving() ? 'Saving\u2026' : 'Save ' + singular() }}\n          </button>\n        </footer>\n      </aside>\n    </div>\n  }\n</erp-admin-page>\n", styles: [":host {\n  display: block;\n  min-width: 0;\n}\n.exam-summary {\n  display: grid;\n  grid-template-columns: repeat(4, minmax(0, 1fr));\n  gap: var(--erp-space-3);\n}\n.exam-summary > div {\n  display: flex;\n  align-items: center;\n  gap: var(--erp-space-3);\n  padding: var(--erp-space-4);\n  border: 1px solid var(--erp-border-subtle);\n  border-radius: var(--erp-radius-lg);\n  background: var(--erp-surface);\n}\n.exam-summary svg {\n  color: var(--erp-blue-600);\n}\n.exam-summary span,\n.exam-summary small {\n  display: block;\n}\n.exam-summary small {\n  color: var(--erp-text-muted);\n}\n.exam-summary strong {\n  color: var(--erp-text-heading);\n  font-size: var(--erp-font-size-xl);\n}\n.exam-toolbar {\n  padding: var(--erp-space-4);\n}\n.exam-toolbar .erp-search-control {\n  max-width: 30rem;\n}\n.exam-icon-button {\n  display: inline-grid;\n  width: 2.25rem;\n  height: 2.25rem;\n  margin-left: var(--erp-space-2);\n  place-items: center;\n  border: 1px solid var(--erp-border-default);\n  border-radius: var(--erp-radius-md);\n  color: var(--erp-text-body);\n  background: var(--erp-surface);\n  cursor: pointer;\n}\n.exam-icon-button--danger {\n  color: var(--erp-danger);\n}\n.exam-empty {\n  padding: var(--erp-space-8);\n  text-align: center;\n  color: var(--erp-text-muted);\n}\n.exam-drawer {\n  width: min(31rem, 100vw);\n}\n.exam-form {\n  display: grid;\n  gap: var(--erp-space-4);\n}\n.exam-form label > span {\n  display: block;\n  margin-bottom: var(--erp-space-2);\n  color: var(--erp-text-strong);\n  font-weight: var(--erp-weight-semibold);\n}\n.exam-check {\n  display: flex;\n  align-items: center;\n  gap: var(--erp-space-2);\n}\n.exam-check > span {\n  margin: 0 !important;\n}\n@media (max-width: 720px) {\n  .exam-summary {\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n  }\n}\n"] }]
    }], () => [], null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(ExamMasterComponent, { className: "ExamMasterComponent", filePath: "frontend/src/app/features/admin/exam-master/exam-master.component.ts", lineNumber: 51 }); })();
