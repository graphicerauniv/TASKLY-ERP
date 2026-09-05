import { CurrencyPipe, DatePipe } from '@angular/common';
import { CdkTrapFocus } from '@angular/cdk/a11y';
import { ChangeDetectionStrategy, Component, HostListener, computed, effect, inject, signal, } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LucideFilter, LucideX } from '@lucide/angular';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { map } from 'rxjs';
import { ApiService } from '../../../core/api.service';
import { ERP_PAGINATION } from '../../../core/config/data-view.constants';
import { AdminPageComponent } from '../../../shared/ui/admin-page/admin-page.component';
import { CompactActionMenuComponent, } from '../../../shared/ui/compact-action-menu/compact-action-menu.component';
import { ConfirmDialogComponent } from '../../../shared/ui/confirm-dialog/confirm-dialog.component';
import { FilterPopoverComponent, } from '../../../shared/ui/filter-popover/filter-popover.component';
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
const _c0 = () => [1, 2, 3, 4, 5];
const _c1 = () => [];
const _forTrack0 = ($index, $item) => $item._id;
const _forTrack1 = ($index, $item) => $item.key;
const _forTrack2 = ($index, $item) => $item.sheetName;
const _forTrack3 = ($index, $item) => $item.sourceHead;
function FeeManagementComponent_Conditional_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "a", 2);
    i0.ɵɵtext(1, "Create new");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵproperty("routerLink", ctx_r0.createRoute());
} }
function FeeManagementComponent_Conditional_3_Conditional_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "a", 15);
    i0.ɵɵtext(1, "View drafts");
    i0.ɵɵelementEnd();
} }
function FeeManagementComponent_Conditional_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵconditionalCreate(0, FeeManagementComponent_Conditional_3_Conditional_0_Template, 2, 0, "a", 15);
    i0.ɵɵelementStart(1, "a", 16);
    i0.ɵɵtext(2, "View records");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵconditional(ctx_r0.section() === "course-fees" && ctx_r0.isCreatePage() ? 0 : -1);
    i0.ɵɵadvance();
    i0.ɵɵproperty("routerLink", ctx_r0.viewRoute());
} }
function FeeManagementComponent_Conditional_6_Template(rf, ctx) { if (rf & 1) {
    const _r2 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "section", 4)(1, "span", 17);
    i0.ɵɵtext(2, "\u2713");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "div")(4, "strong");
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "p");
    i0.ɵɵtext(7, "The record is ready and can now be reviewed from its dedicated view page.");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(8, "div", 18)(9, "button", 3);
    i0.ɵɵlistener("click", function FeeManagementComponent_Conditional_6_Template_button_click_9_listener() { i0.ɵɵrestoreView(_r2); const ctx_r0 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r0.creationSuccess.set("")); });
    i0.ɵɵtext(10, " Create another ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(11, "a", 2);
    i0.ɵɵtext(12, "View records");
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(ctx_r0.creationSuccess());
    i0.ɵɵadvance(6);
    i0.ɵɵproperty("routerLink", ctx_r0.viewRoute());
} }
function FeeManagementComponent_Conditional_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 5);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r0.message());
} }
function FeeManagementComponent_Conditional_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 6);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r0.error());
} }
function FeeManagementComponent_Conditional_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "section", 7)(1, "div")(2, "span", 19);
    i0.ɵɵtext(3, "Course Fee Draft");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "h2");
    i0.ɵɵtext(5, "Opening saved draft\u2026");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "p");
    i0.ɵɵtext(7, "Restoring the selected book, course context and entered fee matrix.");
    i0.ɵɵelementEnd()()();
} }
function FeeManagementComponent_Conditional_10_Conditional_0_Template(rf, ctx) { if (rf & 1) {
    const _r3 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "section", 20);
    i0.ɵɵelement(1, "img", 22);
    i0.ɵɵelementStart(2, "div")(3, "span");
    i0.ɵɵtext(4, "Working fee book");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "h2");
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "p");
    i0.ɵɵtext(8);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(9, "button", 3);
    i0.ɵɵlistener("click", function FeeManagementComponent_Conditional_10_Conditional_0_Template_button_click_9_listener() { i0.ɵɵrestoreView(_r3); const ctx_r0 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r0.openBookSelector()); });
    i0.ɵɵtext(10, " Change book ");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(6);
    i0.ɵɵtextInterpolate(ctx_r0.currentBook().code);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate2("", ctx_r0.currentBook().collegeName, " \u00B7 ", ctx_r0.currentBook().academicSession);
} }
function FeeManagementComponent_Conditional_10_Conditional_1_Template(rf, ctx) { if (rf & 1) {
    const _r4 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "section", 21);
    i0.ɵɵelement(1, "img", 22);
    i0.ɵɵelementStart(2, "span");
    i0.ɵɵtext(3, "Fee book required");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "h2");
    i0.ɵɵtext(5, "Select a fee book to continue");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "p");
    i0.ɵɵtext(7, " Choose the college and academic session first. Relevant records will appear afterward. ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "button", 23);
    i0.ɵɵlistener("click", function FeeManagementComponent_Conditional_10_Conditional_1_Template_button_click_8_listener() { i0.ɵɵrestoreView(_r4); const ctx_r0 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r0.openBookSelector()); });
    i0.ɵɵtext(9, " Select fee book ");
    i0.ɵɵelementEnd()();
} }
function FeeManagementComponent_Conditional_10_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵconditionalCreate(0, FeeManagementComponent_Conditional_10_Conditional_0_Template, 11, 3, "section", 20)(1, FeeManagementComponent_Conditional_10_Conditional_1_Template, 10, 0, "section", 21);
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵconditional(ctx_r0.currentBook() ? 0 : 1);
} }
function FeeManagementComponent_Conditional_11_For_15_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 29);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const college_r6 = ctx.$implicit;
    i0.ɵɵproperty("value", college_r6._id);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(college_r6.name);
} }
function FeeManagementComponent_Conditional_11_For_31_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 29);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const session_r7 = ctx.$implicit;
    i0.ɵɵproperty("value", session_r7.name);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(session_r7.name);
} }
function FeeManagementComponent_Conditional_11_Conditional_32_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "small");
    i0.ɵɵtext(1, "No active sessions found. Add one in ");
    i0.ɵɵelementStart(2, "a", 37);
    i0.ɵɵtext(3, "Academic Master");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(4, ".");
    i0.ɵɵelementEnd();
} }
function FeeManagementComponent_Conditional_11_Conditional_46_Template(rf, ctx) { if (rf & 1) {
    const _r8 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 3);
    i0.ɵɵlistener("click", function FeeManagementComponent_Conditional_11_Conditional_46_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r8); const ctx_r0 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r0.resetBook()); });
    i0.ɵɵtext(1, " Cancel ");
    i0.ɵɵelementEnd();
} }
function FeeManagementComponent_Conditional_11_Template(rf, ctx) { if (rf & 1) {
    const _r5 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "section", 8)(1, "div", 24)(2, "div")(3, "h2");
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "p");
    i0.ɵɵtext(6, "A book defines the college, validity, session and default collection frequency.");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(7, "div", 25)(8, "label", 26)(9, "span");
    i0.ɵɵtext(10, "College *");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(11, "select", 27);
    i0.ɵɵtwoWayListener("ngModelChange", function FeeManagementComponent_Conditional_11_Template_select_ngModelChange_11_listener($event) { i0.ɵɵrestoreView(_r5); const ctx_r0 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r0.bookCollegeId, $event) || (ctx_r0.bookCollegeId = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementStart(12, "option", 28);
    i0.ɵɵtext(13, "Select college");
    i0.ɵɵelementEnd();
    i0.ɵɵrepeaterCreate(14, FeeManagementComponent_Conditional_11_For_15_Template, 2, 2, "option", 29, _forTrack0);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(16, "label", 26)(17, "span");
    i0.ɵɵtext(18, "Start date *");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(19, "input", 30);
    i0.ɵɵtwoWayListener("ngModelChange", function FeeManagementComponent_Conditional_11_Template_input_ngModelChange_19_listener($event) { i0.ɵɵrestoreView(_r5); const ctx_r0 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r0.bookStartDate, $event) || (ctx_r0.bookStartDate = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(20, "label", 26)(21, "span");
    i0.ɵɵtext(22, "End date *");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(23, "input", 30);
    i0.ɵɵtwoWayListener("ngModelChange", function FeeManagementComponent_Conditional_11_Template_input_ngModelChange_23_listener($event) { i0.ɵɵrestoreView(_r5); const ctx_r0 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r0.bookEndDate, $event) || (ctx_r0.bookEndDate = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(24, "label", 26)(25, "span");
    i0.ɵɵtext(26, "Academic session *");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(27, "select", 27);
    i0.ɵɵtwoWayListener("ngModelChange", function FeeManagementComponent_Conditional_11_Template_select_ngModelChange_27_listener($event) { i0.ɵɵrestoreView(_r5); const ctx_r0 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r0.bookSession, $event) || (ctx_r0.bookSession = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementStart(28, "option", 28);
    i0.ɵɵtext(29, "Select academic session");
    i0.ɵɵelementEnd();
    i0.ɵɵrepeaterCreate(30, FeeManagementComponent_Conditional_11_For_31_Template, 2, 2, "option", 29, _forTrack0);
    i0.ɵɵelementEnd();
    i0.ɵɵconditionalCreate(32, FeeManagementComponent_Conditional_11_Conditional_32_Template, 5, 0, "small");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(33, "label", 26)(34, "span");
    i0.ɵɵtext(35, "Book code *");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(36, "input", 31);
    i0.ɵɵtwoWayListener("ngModelChange", function FeeManagementComponent_Conditional_11_Template_input_ngModelChange_36_listener($event) { i0.ɵɵrestoreView(_r5); const ctx_r0 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r0.bookCode, $event) || (ctx_r0.bookCode = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(37, "label", 26)(38, "span");
    i0.ɵɵtext(39, "Fee frequency *");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(40, "select", 27);
    i0.ɵɵtwoWayListener("ngModelChange", function FeeManagementComponent_Conditional_11_Template_select_ngModelChange_40_listener($event) { i0.ɵɵrestoreView(_r5); const ctx_r0 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r0.bookFrequency, $event) || (ctx_r0.bookFrequency = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementStart(41, "option", 32);
    i0.ɵɵtext(42, "Semester wise");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(43, "option", 33);
    i0.ɵɵtext(44, "Year wise");
    i0.ɵɵelementEnd()()()();
    i0.ɵɵelementStart(45, "div", 34);
    i0.ɵɵconditionalCreate(46, FeeManagementComponent_Conditional_11_Conditional_46_Template, 2, 0, "button", 35);
    i0.ɵɵelementStart(47, "button", 36);
    i0.ɵɵlistener("click", function FeeManagementComponent_Conditional_11_Template_button_click_47_listener() { i0.ɵɵrestoreView(_r5); const ctx_r0 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r0.saveBook()); });
    i0.ɵɵtext(48);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(ctx_r0.editingBook() ? "Edit fee book" : "Create fee book");
    i0.ɵɵadvance(7);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r0.bookCollegeId);
    i0.ɵɵadvance(3);
    i0.ɵɵrepeater(ctx_r0.colleges());
    i0.ɵɵadvance(5);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r0.bookStartDate);
    i0.ɵɵadvance(4);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r0.bookEndDate);
    i0.ɵɵadvance(4);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r0.bookSession);
    i0.ɵɵadvance(3);
    i0.ɵɵrepeater(ctx_r0.academicSessions());
    i0.ɵɵadvance(2);
    i0.ɵɵconditional(!ctx_r0.academicSessions().length ? 32 : -1);
    i0.ɵɵadvance(4);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r0.bookCode);
    i0.ɵɵadvance(4);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r0.bookFrequency);
    i0.ɵɵadvance(6);
    i0.ɵɵconditional(ctx_r0.editingBook() ? 46 : -1);
    i0.ɵɵadvance();
    i0.ɵɵproperty("disabled", ctx_r0.saving());
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r0.editingBook() ? "Save book" : "Create book", " ");
} }
function FeeManagementComponent_Conditional_12_For_35_Template(rf, ctx) { if (rf & 1) {
    const _r10 = i0.ɵɵgetCurrentView();
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
    i0.ɵɵelementStart(10, "td");
    i0.ɵɵtext(11);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(12, "td")(13, "span", 53);
    i0.ɵɵtext(14);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(15, "td", 45)(16, "erp-compact-action-menu", 54);
    i0.ɵɵlistener("selected", function FeeManagementComponent_Conditional_12_For_35_Template_erp_compact_action_menu_selected_16_listener($event) { const book_r11 = i0.ɵɵrestoreView(_r10).$implicit; const ctx_r0 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r0.handleBookAction($event, book_r11)); });
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const book_r11 = ctx.$implicit;
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(book_r11.code);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(book_r11.collegeName);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(book_r11.academicSession);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate2("", book_r11.startDate, " \u2013 ", book_r11.endDate);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(book_r11.frequency === "semester" ? "Semester wise" : "Year wise");
    i0.ɵɵadvance(2);
    i0.ɵɵclassProp("erp-status--neutral", !book_r11.isActive);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(book_r11.isActive ? "Active" : "Disabled");
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("items", ctx_r0.rowActions);
} }
function FeeManagementComponent_Conditional_12_ForEmpty_36_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "tr")(1, "td", 55);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", ctx_r0.loading() ? "Loading fee books\u2026" : ctx_r0.listSearch() || ctx_r0.listStatus() !== "all" ? "No fee books match the current filters." : "No fee books created.", " ");
} }
function FeeManagementComponent_Conditional_12_For_43_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 49);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const size_r12 = ctx.$implicit;
    i0.ɵɵproperty("ngValue", size_r12);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1("", size_r12, " / page");
} }
function FeeManagementComponent_Conditional_12_Template(rf, ctx) { if (rf & 1) {
    const _r9 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "section", 9)(1, "div", 38)(2, "div")(3, "h2");
    i0.ɵɵtext(4, " Fee books ");
    i0.ɵɵelementStart(5, "small");
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(7, "p");
    i0.ɵɵtext(8, "Search and manage fee books without loading creation controls.");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(9, "div", 39)(10, "label", 40)(11, "span", 41);
    i0.ɵɵtext(12, "Search fee books");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(13, "input", 42);
    i0.ɵɵlistener("input", function FeeManagementComponent_Conditional_12_Template_input_input_13_listener($event) { i0.ɵɵrestoreView(_r9); const ctx_r0 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r0.updateListSearch($event.target.value)); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(14, "erp-filter-popover", 43);
    i0.ɵɵlistener("valueChange", function FeeManagementComponent_Conditional_12_Template_erp_filter_popover_valueChange_14_listener($event) { i0.ɵɵrestoreView(_r9); const ctx_r0 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r0.updateListStatus($event)); });
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(15, "div", 44)(16, "table")(17, "thead")(18, "tr")(19, "th");
    i0.ɵɵtext(20, "Book");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(21, "th");
    i0.ɵɵtext(22, "College");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(23, "th");
    i0.ɵɵtext(24, "Session");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(25, "th");
    i0.ɵɵtext(26, "Validity");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(27, "th");
    i0.ɵɵtext(28, "Frequency");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(29, "th");
    i0.ɵɵtext(30, "Status");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(31, "th", 45);
    i0.ɵɵtext(32, "Actions");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(33, "tbody");
    i0.ɵɵrepeaterCreate(34, FeeManagementComponent_Conditional_12_For_35_Template, 17, 10, "tr", null, _forTrack0, false, FeeManagementComponent_Conditional_12_ForEmpty_36_Template, 3, 1, "tr");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(37, "div", 46)(38, "span");
    i0.ɵɵtext(39);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(40, "div", 47)(41, "select", 48);
    i0.ɵɵlistener("ngModelChange", function FeeManagementComponent_Conditional_12_Template_select_ngModelChange_41_listener($event) { i0.ɵɵrestoreView(_r9); const ctx_r0 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r0.updateListPageSize($event)); });
    i0.ɵɵrepeaterCreate(42, FeeManagementComponent_Conditional_12_For_43_Template, 2, 2, "option", 49, i0.ɵɵrepeaterTrackByIdentity);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(44, "button", 50);
    i0.ɵɵlistener("click", function FeeManagementComponent_Conditional_12_Template_button_click_44_listener() { i0.ɵɵrestoreView(_r9); const ctx_r0 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r0.setListPage(ctx_r0.safeListPage() - 1)); });
    i0.ɵɵtext(45, " \u2039");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(46, "button", 51);
    i0.ɵɵtext(47);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(48, "button", 52);
    i0.ɵɵlistener("click", function FeeManagementComponent_Conditional_12_Template_button_click_48_listener() { i0.ɵɵrestoreView(_r9); const ctx_r0 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r0.setListPage(ctx_r0.safeListPage() + 1)); });
    i0.ɵɵtext(49, " \u203A ");
    i0.ɵɵelementEnd()()()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(6);
    i0.ɵɵtextInterpolate(ctx_r0.filteredBooks().length);
    i0.ɵɵadvance(7);
    i0.ɵɵproperty("value", ctx_r0.listSearch());
    i0.ɵɵadvance();
    i0.ɵɵproperty("options", ctx_r0.statusFilterOptions)("value", ctx_r0.listStatus());
    i0.ɵɵadvance(20);
    i0.ɵɵrepeater(ctx_r0.pagedBooks());
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate4("Showing ", ctx_r0.pagedBooks().length, " of ", ctx_r0.filteredBooks().length, " books \u00B7 Page ", ctx_r0.safeListPage(), " of ", ctx_r0.listTotalPages());
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngModel", ctx_r0.listPageSize());
    i0.ɵɵadvance();
    i0.ɵɵrepeater(ctx_r0.pageSizeOptions);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("disabled", ctx_r0.safeListPage() === 1);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1(" ", ctx_r0.safeListPage());
    i0.ɵɵadvance();
    i0.ɵɵproperty("disabled", ctx_r0.safeListPage() === ctx_r0.listTotalPages());
} }
function FeeManagementComponent_Conditional_13_Conditional_38_Template(rf, ctx) { if (rf & 1) {
    const _r14 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 3);
    i0.ɵɵlistener("click", function FeeManagementComponent_Conditional_13_Conditional_38_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r14); const ctx_r0 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r0.resetHead()); });
    i0.ɵɵtext(1, " Cancel ");
    i0.ɵɵelementEnd();
} }
function FeeManagementComponent_Conditional_13_Template(rf, ctx) { if (rf & 1) {
    const _r13 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "section", 10)(1, "div", 24)(2, "div")(3, "h2");
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "p");
    i0.ɵɵtext(6, "Discounts and calculated payment options remain separate from payable fee heads.");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(7, "div", 56)(8, "label", 26)(9, "span");
    i0.ɵɵtext(10, "Head name *");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(11, "input", 57);
    i0.ɵɵtwoWayListener("ngModelChange", function FeeManagementComponent_Conditional_13_Template_input_ngModelChange_11_listener($event) { i0.ɵɵrestoreView(_r13); const ctx_r0 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r0.headName, $event) || (ctx_r0.headName = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(12, "label", 26)(13, "span");
    i0.ɵɵtext(14, "Category *");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(15, "select", 27);
    i0.ɵɵtwoWayListener("ngModelChange", function FeeManagementComponent_Conditional_13_Template_select_ngModelChange_15_listener($event) { i0.ɵɵrestoreView(_r13); const ctx_r0 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r0.headCategory, $event) || (ctx_r0.headCategory = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementStart(16, "option", 58);
    i0.ɵɵtext(17, "Payable fee");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(18, "option", 59);
    i0.ɵɵtext(19, "Discount / scholarship");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(20, "option", 60);
    i0.ɵɵtext(21, "Calculated payment option");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(22, "label", 26)(23, "span");
    i0.ɵɵtext(24, "Priority number *");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(25, "input", 61);
    i0.ɵɵtwoWayListener("ngModelChange", function FeeManagementComponent_Conditional_13_Template_input_ngModelChange_25_listener($event) { i0.ɵɵrestoreView(_r13); const ctx_r0 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r0.headPriority, $event) || (ctx_r0.headPriority = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(26, "small");
    i0.ɵɵtext(27, "1 is highest and appears first, followed by 2, 3, 4\u2026");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(28, "label", 26)(29, "span");
    i0.ɵɵtext(30, "Semester calculation");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(31, "select", 27);
    i0.ɵɵtwoWayListener("ngModelChange", function FeeManagementComponent_Conditional_13_Template_select_ngModelChange_31_listener($event) { i0.ɵɵrestoreView(_r13); const ctx_r0 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r0.headDivideSemesterWise, $event) || (ctx_r0.headDivideSemesterWise = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementStart(32, "option", 49);
    i0.ɵɵtext(33, "Keep the full amount");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(34, "option", 49);
    i0.ɵɵtext(35, "Divide this head by 2");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(36, "small");
    i0.ɵɵtext(37, "Applied only when the student uses semester-wise fees.");
    i0.ɵɵelementEnd()();
    i0.ɵɵconditionalCreate(38, FeeManagementComponent_Conditional_13_Conditional_38_Template, 2, 0, "button", 35);
    i0.ɵɵelementStart(39, "button", 36);
    i0.ɵɵlistener("click", function FeeManagementComponent_Conditional_13_Template_button_click_39_listener() { i0.ɵɵrestoreView(_r13); const ctx_r0 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r0.saveHead()); });
    i0.ɵɵtext(40);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(ctx_r0.editingHead() ? "Edit fee head" : "Add fee head");
    i0.ɵɵadvance(7);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r0.headName);
    i0.ɵɵadvance(4);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r0.headCategory);
    i0.ɵɵadvance(10);
    i0.ɵɵproperty("max", ctx_r0.orderedBookHeads().length + (ctx_r0.editingHead() ? 0 : 1));
    i0.ɵɵtwoWayProperty("ngModel", ctx_r0.headPriority);
    i0.ɵɵadvance(6);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r0.headDivideSemesterWise);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngValue", false);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngValue", true);
    i0.ɵɵadvance(4);
    i0.ɵɵconditional(ctx_r0.editingHead() ? 38 : -1);
    i0.ɵɵadvance();
    i0.ɵɵproperty("disabled", ctx_r0.saving());
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r0.editingHead() ? "Save head" : "Add head", " ");
} }
function FeeManagementComponent_Conditional_14_For_35_Template(rf, ctx) { if (rf & 1) {
    const _r16 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "tr")(1, "td")(2, "span", 63);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(4, "td")(5, "strong");
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(7, "td");
    i0.ɵɵtext(8);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(9, "td");
    i0.ɵɵtext(10);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(11, "td");
    i0.ɵɵtext(12);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(13, "td")(14, "span", 53);
    i0.ɵɵtext(15);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(16, "td", 45)(17, "erp-compact-action-menu", 54);
    i0.ɵɵlistener("selected", function FeeManagementComponent_Conditional_14_For_35_Template_erp_compact_action_menu_selected_17_listener($event) { const head_r17 = i0.ɵɵrestoreView(_r16).$implicit; const ctx_r0 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r0.handleHeadAction($event, head_r17)); });
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const head_r17 = ctx.$implicit;
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(head_r17.priority || "\u2014");
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(head_r17.name);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(head_r17.category);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(head_r17.divideSemesterWise ? "Divide by 2" : "Full amount");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(head_r17.bookCode);
    i0.ɵɵadvance(2);
    i0.ɵɵclassProp("erp-status--neutral", !head_r17.isActive);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(head_r17.isActive ? "Active" : "Disabled");
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("items", ctx_r0.rowActions);
} }
function FeeManagementComponent_Conditional_14_ForEmpty_36_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "tr")(1, "td", 55);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", ctx_r0.loading() ? "Loading fee heads\u2026" : ctx_r0.selectedBookId ? "No fee heads match the current filters." : "Select a fee book to view its fee heads.", " ");
} }
function FeeManagementComponent_Conditional_14_For_43_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 49);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const size_r18 = ctx.$implicit;
    i0.ɵɵproperty("ngValue", size_r18);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1("", size_r18, " / page");
} }
function FeeManagementComponent_Conditional_14_Template(rf, ctx) { if (rf & 1) {
    const _r15 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "section", 11)(1, "div", 38)(2, "div")(3, "h2");
    i0.ɵɵtext(4, " Heads in selected book ");
    i0.ɵɵelementStart(5, "small");
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(7, "p");
    i0.ɵɵtext(8, "Priority controls payment allocation order. It is not displayed to students.");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(9, "div", 39)(10, "label", 40)(11, "span", 41);
    i0.ɵɵtext(12, "Search fee heads");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(13, "input", 62);
    i0.ɵɵlistener("input", function FeeManagementComponent_Conditional_14_Template_input_input_13_listener($event) { i0.ɵɵrestoreView(_r15); const ctx_r0 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r0.updateListSearch($event.target.value)); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(14, "erp-filter-popover", 43);
    i0.ɵɵlistener("valueChange", function FeeManagementComponent_Conditional_14_Template_erp_filter_popover_valueChange_14_listener($event) { i0.ɵɵrestoreView(_r15); const ctx_r0 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r0.updateListStatus($event)); });
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(15, "div", 44)(16, "table")(17, "thead")(18, "tr")(19, "th");
    i0.ɵɵtext(20, "Priority");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(21, "th");
    i0.ɵɵtext(22, "Fee head");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(23, "th");
    i0.ɵɵtext(24, "Category");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(25, "th");
    i0.ɵɵtext(26, "Semester mode");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(27, "th");
    i0.ɵɵtext(28, "Book");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(29, "th");
    i0.ɵɵtext(30, "Status");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(31, "th", 45);
    i0.ɵɵtext(32, "Actions");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(33, "tbody");
    i0.ɵɵrepeaterCreate(34, FeeManagementComponent_Conditional_14_For_35_Template, 18, 9, "tr", null, _forTrack0, false, FeeManagementComponent_Conditional_14_ForEmpty_36_Template, 3, 1, "tr");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(37, "div", 46)(38, "span");
    i0.ɵɵtext(39);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(40, "div", 47)(41, "select", 48);
    i0.ɵɵlistener("ngModelChange", function FeeManagementComponent_Conditional_14_Template_select_ngModelChange_41_listener($event) { i0.ɵɵrestoreView(_r15); const ctx_r0 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r0.updateListPageSize($event)); });
    i0.ɵɵrepeaterCreate(42, FeeManagementComponent_Conditional_14_For_43_Template, 2, 2, "option", 49, i0.ɵɵrepeaterTrackByIdentity);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(44, "button", 50);
    i0.ɵɵlistener("click", function FeeManagementComponent_Conditional_14_Template_button_click_44_listener() { i0.ɵɵrestoreView(_r15); const ctx_r0 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r0.setListPage(ctx_r0.safeListPage() - 1)); });
    i0.ɵɵtext(45, " \u2039");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(46, "button", 51);
    i0.ɵɵtext(47);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(48, "button", 52);
    i0.ɵɵlistener("click", function FeeManagementComponent_Conditional_14_Template_button_click_48_listener() { i0.ɵɵrestoreView(_r15); const ctx_r0 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r0.setListPage(ctx_r0.safeListPage() + 1)); });
    i0.ɵɵtext(49, " \u203A ");
    i0.ɵɵelementEnd()()()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(6);
    i0.ɵɵtextInterpolate(ctx_r0.filteredHeads().length);
    i0.ɵɵadvance(7);
    i0.ɵɵproperty("value", ctx_r0.listSearch());
    i0.ɵɵadvance();
    i0.ɵɵproperty("options", ctx_r0.statusFilterOptions)("value", ctx_r0.listStatus());
    i0.ɵɵadvance(20);
    i0.ɵɵrepeater(ctx_r0.pagedHeads());
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate4("Showing ", ctx_r0.pagedHeads().length, " of ", ctx_r0.filteredHeads().length, " heads \u00B7 Page ", ctx_r0.safeListPage(), " of ", ctx_r0.listTotalPages());
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngModel", ctx_r0.listPageSize());
    i0.ɵɵadvance();
    i0.ɵɵrepeater(ctx_r0.pageSizeOptions);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("disabled", ctx_r0.safeListPage() === 1);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1(" ", ctx_r0.safeListPage());
    i0.ɵɵadvance();
    i0.ɵɵproperty("disabled", ctx_r0.safeListPage() === ctx_r0.listTotalPages());
} }
function FeeManagementComponent_Conditional_15_For_15_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 29);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const hostel_r20 = ctx.$implicit;
    i0.ɵɵproperty("value", hostel_r20._id);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(hostel_r20.name);
} }
function FeeManagementComponent_Conditional_15_For_21_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 49);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const seater_r21 = ctx.$implicit;
    i0.ɵɵproperty("ngValue", seater_r21);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1("", seater_r21, "-Seater");
} }
function FeeManagementComponent_Conditional_15_For_36_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 29);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const head_r22 = ctx.$implicit;
    i0.ɵɵproperty("value", head_r22._id);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(head_r22.name);
} }
function FeeManagementComponent_Conditional_15_Template(rf, ctx) { if (rf & 1) {
    const _r19 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "section", 10)(1, "div", 24)(2, "div")(3, "h2");
    i0.ɵɵtext(4, "Assign hostel fee");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "p");
    i0.ɵɵtext(6, "The same hostel can have different charges for each seater and room type.");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(7, "div", 25)(8, "label", 26)(9, "span");
    i0.ɵɵtext(10, "Hostel *");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(11, "select", 27);
    i0.ɵɵtwoWayListener("ngModelChange", function FeeManagementComponent_Conditional_15_Template_select_ngModelChange_11_listener($event) { i0.ɵɵrestoreView(_r19); const ctx_r0 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r0.hostelId, $event) || (ctx_r0.hostelId = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementStart(12, "option", 28);
    i0.ɵɵtext(13, "Select hostel");
    i0.ɵɵelementEnd();
    i0.ɵɵrepeaterCreate(14, FeeManagementComponent_Conditional_15_For_15_Template, 2, 2, "option", 29, _forTrack0);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(16, "label", 26)(17, "span");
    i0.ɵɵtext(18, "Room seater *");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(19, "select", 27);
    i0.ɵɵtwoWayListener("ngModelChange", function FeeManagementComponent_Conditional_15_Template_select_ngModelChange_19_listener($event) { i0.ɵɵrestoreView(_r19); const ctx_r0 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r0.hostelSeater, $event) || (ctx_r0.hostelSeater = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵrepeaterCreate(20, FeeManagementComponent_Conditional_15_For_21_Template, 2, 2, "option", 49, i0.ɵɵrepeaterTrackByIdentity);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(22, "label", 26)(23, "span");
    i0.ɵɵtext(24, "Room type *");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(25, "input", 64);
    i0.ɵɵtwoWayListener("ngModelChange", function FeeManagementComponent_Conditional_15_Template_input_ngModelChange_25_listener($event) { i0.ɵɵrestoreView(_r19); const ctx_r0 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r0.hostelRoomType, $event) || (ctx_r0.hostelRoomType = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(26, "datalist", 65);
    i0.ɵɵelement(27, "option", 66)(28, "option", 67);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(29, "label", 26)(30, "span");
    i0.ɵɵtext(31, "Fee head *");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(32, "select", 27);
    i0.ɵɵtwoWayListener("ngModelChange", function FeeManagementComponent_Conditional_15_Template_select_ngModelChange_32_listener($event) { i0.ɵɵrestoreView(_r19); const ctx_r0 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r0.hostelFeeHeadId, $event) || (ctx_r0.hostelFeeHeadId = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementStart(33, "option", 28);
    i0.ɵɵtext(34, "Select fee head");
    i0.ɵɵelementEnd();
    i0.ɵɵrepeaterCreate(35, FeeManagementComponent_Conditional_15_For_36_Template, 2, 2, "option", 29, _forTrack0);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(37, "label", 26)(38, "span");
    i0.ɵɵtext(39, "Frequency *");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(40, "select", 27);
    i0.ɵɵtwoWayListener("ngModelChange", function FeeManagementComponent_Conditional_15_Template_select_ngModelChange_40_listener($event) { i0.ɵɵrestoreView(_r19); const ctx_r0 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r0.hostelFrequency, $event) || (ctx_r0.hostelFrequency = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementStart(41, "option", 68);
    i0.ɵɵtext(42, "One-time");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(43, "option", 32);
    i0.ɵɵtext(44, "Semester wise");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(45, "option", 69);
    i0.ɵɵtext(46, "Half-yearly");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(47, "option", 70);
    i0.ɵɵtext(48, "Yearly");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(49, "label", 26)(50, "span");
    i0.ɵɵtext(51, "Amount *");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(52, "input", 71);
    i0.ɵɵtwoWayListener("ngModelChange", function FeeManagementComponent_Conditional_15_Template_input_ngModelChange_52_listener($event) { i0.ɵɵrestoreView(_r19); const ctx_r0 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r0.hostelAmount, $event) || (ctx_r0.hostelAmount = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(53, "div", 34)(54, "button", 36);
    i0.ɵɵlistener("click", function FeeManagementComponent_Conditional_15_Template_button_click_54_listener() { i0.ɵɵrestoreView(_r19); const ctx_r0 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r0.saveHostelFee()); });
    i0.ɵɵtext(55, " Save hostel fee ");
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(11);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r0.hostelId);
    i0.ɵɵadvance(3);
    i0.ɵɵrepeater(ctx_r0.hostels());
    i0.ɵɵadvance(5);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r0.hostelSeater);
    i0.ɵɵadvance();
    i0.ɵɵrepeater(i0.ɵɵpureFunction0(7, _c0));
    i0.ɵɵadvance(5);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r0.hostelRoomType);
    i0.ɵɵadvance(7);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r0.hostelFeeHeadId);
    i0.ɵɵadvance(3);
    i0.ɵɵrepeater(ctx_r0.bookHeads());
    i0.ɵɵadvance(5);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r0.hostelFrequency);
    i0.ɵɵadvance(12);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r0.hostelAmount);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("disabled", ctx_r0.saving());
} }
function FeeManagementComponent_Conditional_16_For_33_Template(rf, ctx) { if (rf & 1) {
    const _r24 = i0.ɵɵgetCurrentView();
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
    i0.ɵɵelementStart(10, "td");
    i0.ɵɵtext(11);
    i0.ɵɵpipe(12, "currency");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(13, "td", 45)(14, "erp-compact-action-menu", 54);
    i0.ɵɵlistener("selected", function FeeManagementComponent_Conditional_16_For_33_Template_erp_compact_action_menu_selected_14_listener($event) { const fee_r25 = i0.ɵɵrestoreView(_r24).$implicit; const ctx_r0 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r0.deleteHostelFee($event, fee_r25)); });
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const fee_r25 = ctx.$implicit;
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(fee_r25.hostelName);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate2("", fee_r25.seater, "-Seater \u00B7 ", fee_r25.roomType);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(fee_r25.feeHeadName);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(fee_r25.frequency);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind4(12, 7, fee_r25.amount, "INR", "symbol", "1.2-2"));
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("items", ctx_r0.deleteActions);
} }
function FeeManagementComponent_Conditional_16_ForEmpty_34_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "tr")(1, "td", 74);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", ctx_r0.loading() ? "Loading hostel fees\u2026" : ctx_r0.selectedBookId ? "No hostel fees match the current filters." : "Select a fee book to view hostel fees.", " ");
} }
function FeeManagementComponent_Conditional_16_For_41_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 49);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const size_r26 = ctx.$implicit;
    i0.ɵɵproperty("ngValue", size_r26);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1("", size_r26, " / page");
} }
function FeeManagementComponent_Conditional_16_Template(rf, ctx) { if (rf & 1) {
    const _r23 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "section", 11)(1, "div", 38)(2, "div")(3, "h2");
    i0.ɵɵtext(4, " Configured hostel fees ");
    i0.ɵɵelementStart(5, "small");
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(7, "p");
    i0.ɵɵtext(8, "Charges are grouped by the selected fee book and remain independently manageable.");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(9, "div", 39)(10, "label", 40)(11, "span", 41);
    i0.ɵɵtext(12, "Search hostel fees");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(13, "input", 72);
    i0.ɵɵlistener("input", function FeeManagementComponent_Conditional_16_Template_input_input_13_listener($event) { i0.ɵɵrestoreView(_r23); const ctx_r0 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r0.updateListSearch($event.target.value)); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(14, "erp-filter-popover", 73);
    i0.ɵɵlistener("valueChange", function FeeManagementComponent_Conditional_16_Template_erp_filter_popover_valueChange_14_listener($event) { i0.ɵɵrestoreView(_r23); const ctx_r0 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r0.updateHostelFrequency($event)); });
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(15, "div", 44)(16, "table")(17, "thead")(18, "tr")(19, "th");
    i0.ɵɵtext(20, "Hostel");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(21, "th");
    i0.ɵɵtext(22, "Room");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(23, "th");
    i0.ɵɵtext(24, "Fee head");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(25, "th");
    i0.ɵɵtext(26, "Frequency");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(27, "th");
    i0.ɵɵtext(28, "Amount");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(29, "th", 45);
    i0.ɵɵtext(30, "Actions");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(31, "tbody");
    i0.ɵɵrepeaterCreate(32, FeeManagementComponent_Conditional_16_For_33_Template, 15, 12, "tr", null, _forTrack0, false, FeeManagementComponent_Conditional_16_ForEmpty_34_Template, 3, 1, "tr");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(35, "div", 46)(36, "span");
    i0.ɵɵtext(37);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(38, "div", 47)(39, "select", 48);
    i0.ɵɵlistener("ngModelChange", function FeeManagementComponent_Conditional_16_Template_select_ngModelChange_39_listener($event) { i0.ɵɵrestoreView(_r23); const ctx_r0 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r0.updateListPageSize($event)); });
    i0.ɵɵrepeaterCreate(40, FeeManagementComponent_Conditional_16_For_41_Template, 2, 2, "option", 49, i0.ɵɵrepeaterTrackByIdentity);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(42, "button", 50);
    i0.ɵɵlistener("click", function FeeManagementComponent_Conditional_16_Template_button_click_42_listener() { i0.ɵɵrestoreView(_r23); const ctx_r0 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r0.setListPage(ctx_r0.safeListPage() - 1)); });
    i0.ɵɵtext(43, " \u2039");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(44, "button", 51);
    i0.ɵɵtext(45);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(46, "button", 52);
    i0.ɵɵlistener("click", function FeeManagementComponent_Conditional_16_Template_button_click_46_listener() { i0.ɵɵrestoreView(_r23); const ctx_r0 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r0.setListPage(ctx_r0.safeListPage() + 1)); });
    i0.ɵɵtext(47, " \u203A ");
    i0.ɵɵelementEnd()()()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(6);
    i0.ɵɵtextInterpolate(ctx_r0.filteredHostelFees().length);
    i0.ɵɵadvance(7);
    i0.ɵɵproperty("value", ctx_r0.listSearch());
    i0.ɵɵadvance();
    i0.ɵɵproperty("options", ctx_r0.frequencyFilterOptions)("value", ctx_r0.hostelFrequencyFilter());
    i0.ɵɵadvance(18);
    i0.ɵɵrepeater(ctx_r0.pagedHostelFees());
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate4("Showing ", ctx_r0.pagedHostelFees().length, " of ", ctx_r0.filteredHostelFees().length, " fees \u00B7 Page ", ctx_r0.safeListPage(), " of ", ctx_r0.listTotalPages());
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngModel", ctx_r0.listPageSize());
    i0.ɵɵadvance();
    i0.ɵɵrepeater(ctx_r0.pageSizeOptions);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("disabled", ctx_r0.safeListPage() === 1);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1(" ", ctx_r0.safeListPage());
    i0.ɵɵadvance();
    i0.ɵɵproperty("disabled", ctx_r0.safeListPage() === ctx_r0.listTotalPages());
} }
function FeeManagementComponent_Conditional_17_Conditional_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 75);
    i0.ɵɵtext(1, " No active Course master records exist yet. Add the complete program names in ");
    i0.ɵɵelementStart(2, "a", 76);
    i0.ɵɵtext(3, "Course Master");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(4, "; then return here to auto-map or manually map the workbook sheets. ");
    i0.ɵɵelementEnd();
} }
function FeeManagementComponent_Conditional_17_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵconditionalCreate(0, FeeManagementComponent_Conditional_17_Conditional_0_Template, 5, 0, "p", 75);
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵconditional(!ctx_r0.courses().length ? 0 : -1);
} }
function FeeManagementComponent_Conditional_18_Case_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "span", 81);
    i0.ɵɵelementStart(1, "span");
    i0.ɵɵtext(2, "Saving draft\u2026");
    i0.ɵɵelementEnd();
} }
function FeeManagementComponent_Conditional_18_Case_9_Conditional_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtext(0);
    i0.ɵɵpipe(1, "date");
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(3);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind2(1, 1, ctx_r0.courseFeeDraftSavedAt(), "shortTime"), " ");
} }
function FeeManagementComponent_Conditional_18_Case_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 82);
    i0.ɵɵtext(1, "\u2713");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(2, "span");
    i0.ɵɵtext(3, "Draft saved ");
    i0.ɵɵconditionalCreate(4, FeeManagementComponent_Conditional_18_Case_9_Conditional_4_Template, 2, 4);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(4);
    i0.ɵɵconditional(ctx_r0.courseFeeDraftSavedAt() ? 4 : -1);
} }
function FeeManagementComponent_Conditional_18_Case_10_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵtext(1, "Draft could not be saved");
    i0.ɵɵelementEnd();
} }
function FeeManagementComponent_Conditional_18_Case_11_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵtext(1, "Changes save automatically");
    i0.ɵɵelementEnd();
} }
function FeeManagementComponent_Conditional_18_For_20_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 29);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const department_r28 = ctx.$implicit;
    i0.ɵɵproperty("value", department_r28._id);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(department_r28.name);
} }
function FeeManagementComponent_Conditional_18_For_28_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 29);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const level_r29 = ctx.$implicit;
    i0.ɵɵproperty("value", level_r29._id);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(level_r29.name);
} }
function FeeManagementComponent_Conditional_18_For_36_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 29);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const course_r30 = ctx.$implicit;
    i0.ɵɵproperty("value", course_r30._id);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(course_r30.name);
} }
function FeeManagementComponent_Conditional_18_For_44_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 29);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const domicile_r31 = ctx.$implicit;
    i0.ɵɵproperty("value", domicile_r31._id);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(domicile_r31.name);
} }
function FeeManagementComponent_Conditional_18_Conditional_45_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "small");
    i0.ɵɵtext(1, "Add values in ");
    i0.ɵɵelementStart(2, "a", 83);
    i0.ɵɵtext(3, "Domicile Master");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(4, ".");
    i0.ɵɵelementEnd();
} }
function FeeManagementComponent_Conditional_18_For_53_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 29);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const studentType_r32 = ctx.$implicit;
    i0.ɵɵproperty("value", studentType_r32._id);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(studentType_r32.name);
} }
function FeeManagementComponent_Conditional_18_Conditional_54_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "small");
    i0.ɵɵtext(1, "Add values in ");
    i0.ɵɵelementStart(2, "a", 84);
    i0.ɵɵtext(3, "Student Type Master");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(4, ".");
    i0.ɵɵelementEnd();
} }
function FeeManagementComponent_Conditional_18_For_62_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 29);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const feeType_r33 = ctx.$implicit;
    i0.ɵɵproperty("value", feeType_r33._id);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(feeType_r33.name);
} }
function FeeManagementComponent_Conditional_18_Conditional_63_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "small");
    i0.ɵɵtext(1, "Fee types are loading. You can also manage them in ");
    i0.ɵɵelementStart(2, "a", 85);
    i0.ɵɵtext(3, "Fee Type Master");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(4, ".");
    i0.ɵɵelementEnd();
} }
function FeeManagementComponent_Conditional_18_Conditional_64_For_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 29);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const country_r35 = ctx.$implicit;
    i0.ɵɵproperty("value", country_r35._id);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(country_r35.name);
} }
function FeeManagementComponent_Conditional_18_Conditional_64_Conditional_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "small");
    i0.ɵɵtext(1, "Add values in ");
    i0.ɵɵelementStart(2, "a", 86);
    i0.ɵɵtext(3, "Country Master");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(4, ".");
    i0.ɵɵelementEnd();
} }
function FeeManagementComponent_Conditional_18_Conditional_64_Template(rf, ctx) { if (rf & 1) {
    const _r34 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "label", 26)(1, "span");
    i0.ɵɵtext(2, "Country *");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "select", 27);
    i0.ɵɵtwoWayListener("ngModelChange", function FeeManagementComponent_Conditional_18_Conditional_64_Template_select_ngModelChange_3_listener($event) { i0.ɵɵrestoreView(_r34); const ctx_r0 = i0.ɵɵnextContext(2); i0.ɵɵtwoWayBindingSet(ctx_r0.courseCountryId, $event) || (ctx_r0.courseCountryId = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵlistener("ngModelChange", function FeeManagementComponent_Conditional_18_Conditional_64_Template_select_ngModelChange_3_listener() { i0.ɵɵrestoreView(_r34); const ctx_r0 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r0.scheduleCourseFeeDraftSave()); });
    i0.ɵɵelementStart(4, "option", 28);
    i0.ɵɵtext(5, "Select country");
    i0.ɵɵelementEnd();
    i0.ɵɵrepeaterCreate(6, FeeManagementComponent_Conditional_18_Conditional_64_For_7_Template, 2, 2, "option", 29, _forTrack0);
    i0.ɵɵelementEnd();
    i0.ɵɵconditionalCreate(8, FeeManagementComponent_Conditional_18_Conditional_64_Conditional_8_Template, 5, 0, "small");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(3);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r0.courseCountryId);
    i0.ɵɵadvance(3);
    i0.ɵɵrepeater(ctx_r0.countries());
    i0.ɵɵadvance(2);
    i0.ɵɵconditional(!ctx_r0.countries().length ? 8 : -1);
} }
function FeeManagementComponent_Conditional_18_Conditional_65_For_34_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "th", 93)(1, "span");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "small");
    i0.ɵɵtext(4, "Amount (\u20B9)");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const period_r37 = ctx.$implicit;
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(period_r37.label);
} }
function FeeManagementComponent_Conditional_18_Conditional_65_For_37_For_15_Template(rf, ctx) { if (rf & 1) {
    const _r40 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "td")(1, "label", 99)(2, "span", 100);
    i0.ɵɵtext(3, "\u20B9");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "input", 101);
    i0.ɵɵlistener("focus", function FeeManagementComponent_Conditional_18_Conditional_65_For_37_For_15_Template_input_focus_4_listener($event) { const period_r41 = i0.ɵɵrestoreView(_r40).$implicit; const head_r39 = i0.ɵɵnextContext().$implicit; const ctx_r0 = i0.ɵɵnextContext(3); ctx_r0.activeMatrixCell.set(ctx_r0.matrixCellKey(head_r39._id, period_r41.key)); return i0.ɵɵresetView(ctx_r0.selectMatrixValue($event)); })("paste", function FeeManagementComponent_Conditional_18_Conditional_65_For_37_For_15_Template_input_paste_4_listener($event) { const ɵ$index_976_r42 = i0.ɵɵrestoreView(_r40).$index; const ɵ$index_951_r43 = i0.ɵɵnextContext().$index; const ctx_r0 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r0.pasteMatrixValues($event, ɵ$index_951_r43, ɵ$index_976_r42)); })("dblclick", function FeeManagementComponent_Conditional_18_Conditional_65_For_37_For_15_Template_input_dblclick_4_listener($event) { const period_r41 = i0.ɵɵrestoreView(_r40).$implicit; const head_r39 = i0.ɵɵnextContext().$implicit; const ctx_r0 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r0.fillMatrixFromCell($event, head_r39._id, period_r41.key)); })("keydown", function FeeManagementComponent_Conditional_18_Conditional_65_For_37_For_15_Template_input_keydown_4_listener($event) { const ctx_r43 = i0.ɵɵrestoreView(_r40); const period_r41 = ctx_r43.$implicit; const ɵ$index_976_r42 = ctx_r43.$index; const ctx_r44 = i0.ɵɵnextContext(); const head_r39 = ctx_r44.$implicit; const ɵ$index_951_r43 = ctx_r44.$index; const ctx_r0 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r0.handleMatrixKeydown($event, ɵ$index_951_r43, ɵ$index_976_r42, head_r39._id, period_r41.key)); })("ngModelChange", function FeeManagementComponent_Conditional_18_Conditional_65_For_37_For_15_Template_input_ngModelChange_4_listener($event) { const period_r41 = i0.ɵɵrestoreView(_r40).$implicit; const head_r39 = i0.ɵɵnextContext().$implicit; const ctx_r0 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r0.updateFeeMatrixAmount(head_r39._id, period_r41.key, $event)); });
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const period_r41 = ctx.$implicit;
    const ɵ$index_976_r42 = ctx.$index;
    const ctx_r44 = i0.ɵɵnextContext();
    const head_r39 = ctx_r44.$implicit;
    const ɵ$index_951_r43 = ctx_r44.$index;
    const ctx_r0 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance();
    i0.ɵɵclassProp("fee-matrix-cell--active", ctx_r0.activeMatrixCell() === ctx_r0.matrixCellKey(head_r39._id, period_r41.key));
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngModel", ctx_r0.feeMatrixValue(head_r39._id, period_r41.key));
    i0.ɵɵattribute("aria-label", head_r39.name + ", " + period_r41.label + " amount")("data-matrix-row", ɵ$index_951_r43)("data-matrix-column", ɵ$index_976_r42);
} }
function FeeManagementComponent_Conditional_18_Conditional_65_For_37_Template(rf, ctx) { if (rf & 1) {
    const _r38 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "tr")(1, "td", 91)(2, "label", 96)(3, "input", 97);
    i0.ɵɵlistener("change", function FeeManagementComponent_Conditional_18_Conditional_65_For_37_Template_input_change_3_listener() { const head_r39 = i0.ɵɵrestoreView(_r38).$implicit; const ctx_r0 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r0.selectCourseFeeHead(head_r39._id)); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "span");
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(6, "td", 98)(7, "strong");
    i0.ɵɵtext(8);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(9, "span")(10, "small");
    i0.ɵɵtext(11);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(12, "small");
    i0.ɵɵtext(13);
    i0.ɵɵelementEnd()()();
    i0.ɵɵrepeaterCreate(14, FeeManagementComponent_Conditional_18_Conditional_65_For_37_For_15_Template, 5, 6, "td", null, _forTrack1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const head_r39 = ctx.$implicit;
    const ɵ$index_951_r43 = ctx.$index;
    const ctx_r0 = i0.ɵɵnextContext(3);
    i0.ɵɵclassProp("fee-matrix-row--selected", ctx_r0.feeHeadSelected(head_r39._id));
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("checked", ctx_r0.feeHeadSelected(head_r39._id));
    i0.ɵɵattribute("aria-label", "Select " + head_r39.name);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ɵ$index_951_r43 + 1);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(head_r39.name);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1("#", head_r39.priority || ɵ$index_951_r43 + 1);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(head_r39.category === "fee" ? "Payable" : head_r39.category);
    i0.ɵɵadvance();
    i0.ɵɵrepeater(ctx_r0.courseFeePeriods());
} }
function FeeManagementComponent_Conditional_18_Conditional_65_ForEmpty_38_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "tr")(1, "td", 102);
    i0.ɵɵtext(2, " No active fee heads found for this book. Create fee heads first. ");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance();
    i0.ɵɵattribute("colspan", ctx_r0.courseFeePeriods().length + 2);
} }
function FeeManagementComponent_Conditional_18_Conditional_65_Template(rf, ctx) { if (rf & 1) {
    const _r36 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 79)(1, "div", 87)(2, "div")(3, "h3");
    i0.ɵɵtext(4, "Fee head matrix");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "p");
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(7, "div", 88)(8, "span")(9, "strong");
    i0.ɵɵtext(10);
    i0.ɵɵelementEnd();
    i0.ɵɵtext(11, " available heads");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(12, "span")(13, "strong");
    i0.ɵɵtext(14);
    i0.ɵɵelementEnd();
    i0.ɵɵtext(15, " selected");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(16, "span")(17, "strong");
    i0.ɵɵtext(18);
    i0.ɵɵelementEnd();
    i0.ɵɵtext(19, " amounts entered");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(20, "span")(21, "strong");
    i0.ɵɵtext(22);
    i0.ɵɵpipe(23, "currency");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(24, " matrix total");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(25, "div", 89)(26, "table", 90)(27, "thead")(28, "tr")(29, "th", 91)(30, "input", 92);
    i0.ɵɵlistener("change", function FeeManagementComponent_Conditional_18_Conditional_65_Template_input_change_30_listener() { i0.ɵɵrestoreView(_r36); const ctx_r0 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r0.selectAllCourseFeeHeads()); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(31, "th");
    i0.ɵɵtext(32, "Fee head");
    i0.ɵɵelementEnd();
    i0.ɵɵrepeaterCreate(33, FeeManagementComponent_Conditional_18_Conditional_65_For_34_Template, 5, 1, "th", 93, _forTrack1);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(35, "tbody");
    i0.ɵɵrepeaterCreate(36, FeeManagementComponent_Conditional_18_Conditional_65_For_37_Template, 16, 8, "tr", 94, _forTrack0, false, FeeManagementComponent_Conditional_18_Conditional_65_ForEmpty_38_Template, 3, 1, "tr");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(39, "div", 95)(40, "span");
    i0.ɵɵtext(41, "Amounts will be saved for the selected course and fee context.");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(42, "button", 36);
    i0.ɵɵlistener("click", function FeeManagementComponent_Conditional_18_Conditional_65_Template_button_click_42_listener() { i0.ɵɵrestoreView(_r36); const ctx_r0 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r0.saveCourseFee()); });
    i0.ɵɵtext(43);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    let tmp_2_0;
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(6);
    i0.ɵɵtextInterpolate3(" ", ctx_r0.courseFeePeriodType() === "semester" ? "Semester-wise" : "Year-wise", " fees \u00B7 ", (tmp_2_0 = ctx_r0.selectedCourse()) == null ? null : tmp_2_0.name, " \u00B7 ", ctx_r0.courseFeePeriods().length, " periods ");
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(ctx_r0.activeCourseFeeHeads().length);
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(ctx_r0.selectedCourseFeeHeadIds().length);
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(ctx_r0.populatedMatrixCellCount());
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind4(23, 11, ctx_r0.matrixGrandTotal(), "INR", "symbol", "1.0-2"));
    i0.ɵɵadvance(8);
    i0.ɵɵproperty("checked", ctx_r0.allCourseFeeHeadsSelected());
    i0.ɵɵadvance(3);
    i0.ɵɵrepeater(ctx_r0.courseFeePeriods());
    i0.ɵɵadvance(3);
    i0.ɵɵrepeater(ctx_r0.activeCourseFeeHeads());
    i0.ɵɵadvance(6);
    i0.ɵɵproperty("disabled", ctx_r0.saving() || ctx_r0.courseFeeDraftStatus() === "saving" || !ctx_r0.selectedCourseFeeHeadIds().length || !ctx_r0.populatedMatrixCellCount());
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r0.saving() ? "Saving\u2026" : "Save fee matrix", " ");
} }
function FeeManagementComponent_Conditional_18_Conditional_66_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 80);
    i0.ɵɵtext(1, " Select a course to load the fee-head matrix. ");
    i0.ɵɵelementEnd();
} }
function FeeManagementComponent_Conditional_18_Conditional_67_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 80);
    i0.ɵɵtext(1, " Select Fee Type to generate Yearly or Semester columns. ");
    i0.ɵɵelementEnd();
} }
function FeeManagementComponent_Conditional_18_Conditional_68_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 80);
    i0.ɵɵtext(1, " The selected Fee Type is not configured as Yearly or Semester. ");
    i0.ɵɵelementEnd();
} }
function FeeManagementComponent_Conditional_18_Template(rf, ctx) { if (rf & 1) {
    const _r27 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "section", 8)(1, "div", 24)(2, "div")(3, "h2");
    i0.ɵɵtext(4, "Add course fee manually");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "p");
    i0.ɵɵtext(6, " Select the fee context once, choose Yearly or Semester fee type, then enter amounts in the generated matrix. ");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(7, "div", 77);
    i0.ɵɵconditionalCreate(8, FeeManagementComponent_Conditional_18_Case_8_Template, 3, 0)(9, FeeManagementComponent_Conditional_18_Case_9_Template, 5, 1)(10, FeeManagementComponent_Conditional_18_Case_10_Template, 2, 0, "span")(11, FeeManagementComponent_Conditional_18_Case_11_Template, 2, 0, "span");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(12, "div", 25)(13, "label", 26)(14, "span");
    i0.ɵɵtext(15, "Department *");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(16, "select", 27);
    i0.ɵɵtwoWayListener("ngModelChange", function FeeManagementComponent_Conditional_18_Template_select_ngModelChange_16_listener($event) { i0.ɵɵrestoreView(_r27); const ctx_r0 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r0.departmentId, $event) || (ctx_r0.departmentId = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵlistener("ngModelChange", function FeeManagementComponent_Conditional_18_Template_select_ngModelChange_16_listener() { i0.ɵɵrestoreView(_r27); const ctx_r0 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r0.departmentChanged()); });
    i0.ɵɵelementStart(17, "option", 28);
    i0.ɵɵtext(18, "Select department");
    i0.ɵɵelementEnd();
    i0.ɵɵrepeaterCreate(19, FeeManagementComponent_Conditional_18_For_20_Template, 2, 2, "option", 29, _forTrack0);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(21, "label", 26)(22, "span");
    i0.ɵɵtext(23, "Level *");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(24, "select", 27);
    i0.ɵɵtwoWayListener("ngModelChange", function FeeManagementComponent_Conditional_18_Template_select_ngModelChange_24_listener($event) { i0.ɵɵrestoreView(_r27); const ctx_r0 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r0.levelId, $event) || (ctx_r0.levelId = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵlistener("ngModelChange", function FeeManagementComponent_Conditional_18_Template_select_ngModelChange_24_listener() { i0.ɵɵrestoreView(_r27); const ctx_r0 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r0.levelChanged()); });
    i0.ɵɵelementStart(25, "option", 28);
    i0.ɵɵtext(26, "Select level");
    i0.ɵɵelementEnd();
    i0.ɵɵrepeaterCreate(27, FeeManagementComponent_Conditional_18_For_28_Template, 2, 2, "option", 29, _forTrack0);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(29, "label", 26)(30, "span");
    i0.ɵɵtext(31, "Course *");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(32, "select", 27);
    i0.ɵɵtwoWayListener("ngModelChange", function FeeManagementComponent_Conditional_18_Template_select_ngModelChange_32_listener($event) { i0.ɵɵrestoreView(_r27); const ctx_r0 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r0.courseId, $event) || (ctx_r0.courseId = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵlistener("ngModelChange", function FeeManagementComponent_Conditional_18_Template_select_ngModelChange_32_listener() { i0.ɵɵrestoreView(_r27); const ctx_r0 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r0.courseChanged()); });
    i0.ɵɵelementStart(33, "option", 28);
    i0.ɵɵtext(34, "Select course");
    i0.ɵɵelementEnd();
    i0.ɵɵrepeaterCreate(35, FeeManagementComponent_Conditional_18_For_36_Template, 2, 2, "option", 29, _forTrack0);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(37, "label", 26)(38, "span");
    i0.ɵɵtext(39, "Domicile *");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(40, "select", 27);
    i0.ɵɵtwoWayListener("ngModelChange", function FeeManagementComponent_Conditional_18_Template_select_ngModelChange_40_listener($event) { i0.ɵɵrestoreView(_r27); const ctx_r0 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r0.courseDomicileId, $event) || (ctx_r0.courseDomicileId = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵlistener("ngModelChange", function FeeManagementComponent_Conditional_18_Template_select_ngModelChange_40_listener() { i0.ɵɵrestoreView(_r27); const ctx_r0 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r0.scheduleCourseFeeDraftSave()); });
    i0.ɵɵelementStart(41, "option", 28);
    i0.ɵɵtext(42, "Select domicile");
    i0.ɵɵelementEnd();
    i0.ɵɵrepeaterCreate(43, FeeManagementComponent_Conditional_18_For_44_Template, 2, 2, "option", 29, _forTrack0);
    i0.ɵɵelementEnd();
    i0.ɵɵconditionalCreate(45, FeeManagementComponent_Conditional_18_Conditional_45_Template, 5, 0, "small");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(46, "label", 26)(47, "span");
    i0.ɵɵtext(48, "Student type *");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(49, "select", 27);
    i0.ɵɵtwoWayListener("ngModelChange", function FeeManagementComponent_Conditional_18_Template_select_ngModelChange_49_listener($event) { i0.ɵɵrestoreView(_r27); const ctx_r0 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r0.courseStudentTypeId, $event) || (ctx_r0.courseStudentTypeId = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵlistener("ngModelChange", function FeeManagementComponent_Conditional_18_Template_select_ngModelChange_49_listener() { i0.ɵɵrestoreView(_r27); const ctx_r0 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r0.courseStudentTypeChanged()); });
    i0.ɵɵelementStart(50, "option", 28);
    i0.ɵɵtext(51, "Select student type");
    i0.ɵɵelementEnd();
    i0.ɵɵrepeaterCreate(52, FeeManagementComponent_Conditional_18_For_53_Template, 2, 2, "option", 29, _forTrack0);
    i0.ɵɵelementEnd();
    i0.ɵɵconditionalCreate(54, FeeManagementComponent_Conditional_18_Conditional_54_Template, 5, 0, "small");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(55, "label", 26)(56, "span");
    i0.ɵɵtext(57, "Fee type *");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(58, "select", 78);
    i0.ɵɵtwoWayListener("ngModelChange", function FeeManagementComponent_Conditional_18_Template_select_ngModelChange_58_listener($event) { i0.ɵɵrestoreView(_r27); const ctx_r0 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r0.courseFeeTypeId, $event) || (ctx_r0.courseFeeTypeId = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵlistener("focus", function FeeManagementComponent_Conditional_18_Template_select_focus_58_listener() { i0.ɵɵrestoreView(_r27); const ctx_r0 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r0.loadFeeTypes()); })("ngModelChange", function FeeManagementComponent_Conditional_18_Template_select_ngModelChange_58_listener() { i0.ɵɵrestoreView(_r27); const ctx_r0 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r0.courseFeeTypeChanged()); });
    i0.ɵɵelementStart(59, "option", 28);
    i0.ɵɵtext(60, "Select yearly or semester");
    i0.ɵɵelementEnd();
    i0.ɵɵrepeaterCreate(61, FeeManagementComponent_Conditional_18_For_62_Template, 2, 2, "option", 29, _forTrack0);
    i0.ɵɵelementEnd();
    i0.ɵɵconditionalCreate(63, FeeManagementComponent_Conditional_18_Conditional_63_Template, 5, 0, "small");
    i0.ɵɵelementEnd();
    i0.ɵɵconditionalCreate(64, FeeManagementComponent_Conditional_18_Conditional_64_Template, 9, 2, "label", 26);
    i0.ɵɵelementEnd();
    i0.ɵɵconditionalCreate(65, FeeManagementComponent_Conditional_18_Conditional_65_Template, 44, 16, "div", 79)(66, FeeManagementComponent_Conditional_18_Conditional_66_Template, 2, 0, "div", 80)(67, FeeManagementComponent_Conditional_18_Conditional_67_Template, 2, 0, "div", 80)(68, FeeManagementComponent_Conditional_18_Conditional_68_Template, 2, 0, "div", 80);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    let tmp_2_0;
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(7);
    i0.ɵɵclassProp("course-fee-draft-state--error", ctx_r0.courseFeeDraftStatus() === "error");
    i0.ɵɵadvance();
    i0.ɵɵconditional((tmp_2_0 = ctx_r0.courseFeeDraftStatus()) === "saving" ? 8 : tmp_2_0 === "saved" ? 9 : tmp_2_0 === "error" ? 10 : 11);
    i0.ɵɵadvance(8);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r0.departmentId);
    i0.ɵɵadvance(3);
    i0.ɵɵrepeater(ctx_r0.departmentOptions());
    i0.ɵɵadvance(5);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r0.levelId);
    i0.ɵɵadvance(3);
    i0.ɵɵrepeater(ctx_r0.levelOptions());
    i0.ɵɵadvance(5);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r0.courseId);
    i0.ɵɵadvance(3);
    i0.ɵɵrepeater(ctx_r0.courseOptions());
    i0.ɵɵadvance(5);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r0.courseDomicileId);
    i0.ɵɵadvance(3);
    i0.ɵɵrepeater(ctx_r0.domiciles());
    i0.ɵɵadvance(2);
    i0.ɵɵconditional(!ctx_r0.domiciles().length ? 45 : -1);
    i0.ɵɵadvance(4);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r0.courseStudentTypeId);
    i0.ɵɵadvance(3);
    i0.ɵɵrepeater(ctx_r0.studentTypes());
    i0.ɵɵadvance(2);
    i0.ɵɵconditional(!ctx_r0.studentTypes().length ? 54 : -1);
    i0.ɵɵadvance(4);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r0.courseFeeTypeId);
    i0.ɵɵadvance(3);
    i0.ɵɵrepeater(ctx_r0.feeTypes());
    i0.ɵɵadvance(2);
    i0.ɵɵconditional(!ctx_r0.feeTypes().length ? 63 : -1);
    i0.ɵɵadvance();
    i0.ɵɵconditional(ctx_r0.courseRequiresCountry() ? 64 : -1);
    i0.ɵɵadvance();
    i0.ɵɵconditional(ctx_r0.courseId && ctx_r0.courseFeeTypeId && ctx_r0.courseFeePeriods().length ? 65 : !ctx_r0.courseId ? 66 : !ctx_r0.courseFeeTypeId ? 67 : 68);
} }
function FeeManagementComponent_Conditional_19_For_15_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 29);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const domicile_r47 = ctx.$implicit;
    i0.ɵɵproperty("value", domicile_r47._id);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(domicile_r47.name);
} }
function FeeManagementComponent_Conditional_19_For_23_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 29);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const studentType_r48 = ctx.$implicit;
    i0.ɵɵproperty("value", studentType_r48._id);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(studentType_r48.name);
} }
function FeeManagementComponent_Conditional_19_Conditional_24_For_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 29);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const country_r50 = ctx.$implicit;
    i0.ɵɵproperty("value", country_r50._id);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(country_r50.name);
} }
function FeeManagementComponent_Conditional_19_Conditional_24_Template(rf, ctx) { if (rf & 1) {
    const _r49 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "label", 26)(1, "span");
    i0.ɵɵtext(2, "Country *");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "select", 27);
    i0.ɵɵtwoWayListener("ngModelChange", function FeeManagementComponent_Conditional_19_Conditional_24_Template_select_ngModelChange_3_listener($event) { i0.ɵɵrestoreView(_r49); const ctx_r0 = i0.ɵɵnextContext(2); i0.ɵɵtwoWayBindingSet(ctx_r0.importCountryId, $event) || (ctx_r0.importCountryId = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵlistener("ngModelChange", function FeeManagementComponent_Conditional_19_Conditional_24_Template_select_ngModelChange_3_listener() { i0.ɵɵrestoreView(_r49); const ctx_r0 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r0.preview.set(null)); });
    i0.ɵɵelementStart(4, "option", 28);
    i0.ɵɵtext(5, "Select country for this workbook");
    i0.ɵɵelementEnd();
    i0.ɵɵrepeaterCreate(6, FeeManagementComponent_Conditional_19_Conditional_24_For_7_Template, 2, 2, "option", 29, _forTrack0);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(3);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r0.importCountryId);
    i0.ɵɵadvance(3);
    i0.ɵɵrepeater(ctx_r0.countries());
} }
function FeeManagementComponent_Conditional_19_Conditional_31_Conditional_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtext(0);
} if (rf & 2) {
    const importPreview_r52 = i0.ɵɵnextContext();
    i0.ɵɵtextInterpolate1(" \u00B7 Country: ", importPreview_r52.countryName, " ");
} }
function FeeManagementComponent_Conditional_19_Conditional_31_For_51_Conditional_15_For_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "li");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const program_r54 = ctx.$implicit;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(program_r54);
} }
function FeeManagementComponent_Conditional_19_Conditional_31_For_51_Conditional_15_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p");
    i0.ɵɵtext(1, "This fee sheet is shared by:");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(2, "ul");
    i0.ɵɵrepeaterCreate(3, FeeManagementComponent_Conditional_19_Conditional_31_For_51_Conditional_15_For_4_Template, 2, 1, "li", null, i0.ɵɵrepeaterTrackByIdentity);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const sheet_r55 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(3);
    i0.ɵɵrepeater(sheet_r55.programNames);
} }
function FeeManagementComponent_Conditional_19_Conditional_31_For_51_Conditional_16_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const sheet_r55 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(sheet_r55.programNames[0] || sheet_r55.subtitle);
} }
function FeeManagementComponent_Conditional_19_Conditional_31_For_51_Conditional_17_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 120);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const sheet_r55 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" Suggested Course: ", sheet_r55.match.candidates[0].courseName, " ");
} }
function FeeManagementComponent_Conditional_19_Conditional_31_For_51_For_19_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 121);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const warning_r56 = ctx.$implicit;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(warning_r56);
} }
function FeeManagementComponent_Conditional_19_Conditional_31_For_51_For_25_Template(rf, ctx) { if (rf & 1) {
    const _r57 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "span", 124);
    i0.ɵɵtext(1);
    i0.ɵɵelementStart(2, "button", 129);
    i0.ɵɵlistener("click", function FeeManagementComponent_Conditional_19_Conditional_31_For_51_For_25_Template_button_click_2_listener() { const courseId_r58 = i0.ɵɵrestoreView(_r57).$implicit; const sheet_r55 = i0.ɵɵnextContext().$implicit; const ctx_r0 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r0.removePreviewCourse(sheet_r55.sheetName, courseId_r58)); });
    i0.ɵɵtext(3, " \u00D7 ");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const courseId_r58 = ctx.$implicit;
    const ctx_r0 = i0.ɵɵnextContext(4);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r0.courseName(courseId_r58));
    i0.ɵɵadvance();
    i0.ɵɵattribute("aria-label", "Remove " + ctx_r0.courseName(courseId_r58));
} }
function FeeManagementComponent_Conditional_19_Conditional_31_For_51_ForEmpty_26_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 125);
    i0.ɵɵtext(1, "No course is mapped. This sheet will be skipped.");
    i0.ɵɵelementEnd();
} }
function FeeManagementComponent_Conditional_19_Conditional_31_For_51_For_32_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 127);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const course_r59 = ctx.$implicit;
    const sheet_r55 = i0.ɵɵnextContext().$implicit;
    const ctx_r0 = i0.ɵɵnextContext(3);
    i0.ɵɵproperty("value", course_r59._id)("disabled", ctx_r0.sheetMappings[sheet_r55.sheetName] == null ? null : ctx_r0.sheetMappings[sheet_r55.sheetName].includes(course_r59._id));
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", course_r59.name, " ");
} }
function FeeManagementComponent_Conditional_19_Conditional_31_For_51_Template(rf, ctx) { if (rf & 1) {
    const _r53 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "article", 111)(1, "header", 116)(2, "div")(3, "span", 117);
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "h3");
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "p");
    i0.ɵɵtext(8);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(9, "span", 53);
    i0.ɵɵtext(10);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(11, "div", 118)(12, "div", 119)(13, "strong");
    i0.ɵɵtext(14, "Detected from workbook");
    i0.ɵɵelementEnd();
    i0.ɵɵconditionalCreate(15, FeeManagementComponent_Conditional_19_Conditional_31_For_51_Conditional_15_Template, 5, 0)(16, FeeManagementComponent_Conditional_19_Conditional_31_For_51_Conditional_16_Template, 2, 1, "p");
    i0.ɵɵconditionalCreate(17, FeeManagementComponent_Conditional_19_Conditional_31_For_51_Conditional_17_Template, 2, 1, "p", 120);
    i0.ɵɵrepeaterCreate(18, FeeManagementComponent_Conditional_19_Conditional_31_For_51_For_19_Template, 2, 1, "p", 121, i0.ɵɵrepeaterTrackByIdentity);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(20, "div", 122)(21, "strong");
    i0.ɵɵtext(22, "Mapped Course master records");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(23, "div", 123);
    i0.ɵɵrepeaterCreate(24, FeeManagementComponent_Conditional_19_Conditional_31_For_51_For_25_Template, 4, 2, "span", 124, i0.ɵɵrepeaterTrackByIdentity, false, FeeManagementComponent_Conditional_19_Conditional_31_For_51_ForEmpty_26_Template, 2, 0, "span", 125);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(27, "div", 126)(28, "select", 27);
    i0.ɵɵtwoWayListener("ngModelChange", function FeeManagementComponent_Conditional_19_Conditional_31_For_51_Template_select_ngModelChange_28_listener($event) { const sheet_r55 = i0.ɵɵrestoreView(_r53).$implicit; const ctx_r0 = i0.ɵɵnextContext(3); i0.ɵɵtwoWayBindingSet(ctx_r0.previewCourseToAdd[sheet_r55.sheetName], $event) || (ctx_r0.previewCourseToAdd[sheet_r55.sheetName] = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementStart(29, "option", 28);
    i0.ɵɵtext(30, "Select a Course master record");
    i0.ɵɵelementEnd();
    i0.ɵɵrepeaterCreate(31, FeeManagementComponent_Conditional_19_Conditional_31_For_51_For_32_Template, 2, 3, "option", 127, _forTrack0);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(33, "button", 128);
    i0.ɵɵlistener("click", function FeeManagementComponent_Conditional_19_Conditional_31_For_51_Template_button_click_33_listener() { const sheet_r55 = i0.ɵɵrestoreView(_r53).$implicit; const ctx_r0 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r0.addPreviewCourse(sheet_r55.sheetName)); });
    i0.ɵɵtext(34, " Add course ");
    i0.ɵɵelementEnd()()()()();
} if (rf & 2) {
    const sheet_r55 = ctx.$implicit;
    const ctx_r0 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(sheet_r55.sheetName);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(sheet_r55.courseTitle);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate2(" Intake ", sheet_r55.intakeYear || "requires review", " \u00B7 ", sheet_r55.lineCount, " fee rows ");
    i0.ɵɵadvance();
    i0.ɵɵclassProp("erp-status--neutral", !(ctx_r0.sheetMappings[sheet_r55.sheetName] == null ? null : ctx_r0.sheetMappings[sheet_r55.sheetName].length));
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r0.previewMappingStatus(sheet_r55));
    i0.ɵɵadvance(5);
    i0.ɵɵconditional(sheet_r55.programNames.length > 1 ? 15 : 16);
    i0.ɵɵadvance(2);
    i0.ɵɵconditional(sheet_r55.match.candidates.length && !(ctx_r0.sheetMappings[sheet_r55.sheetName] == null ? null : ctx_r0.sheetMappings[sheet_r55.sheetName].length) ? 17 : -1);
    i0.ɵɵadvance();
    i0.ɵɵrepeater(sheet_r55.warnings);
    i0.ɵɵadvance(6);
    i0.ɵɵrepeater(ctx_r0.sheetMappings[sheet_r55.sheetName] || i0.ɵɵpureFunction0(12, _c1));
    i0.ɵɵadvance(4);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r0.previewCourseToAdd[sheet_r55.sheetName]);
    i0.ɵɵadvance(3);
    i0.ɵɵrepeater(ctx_r0.courses());
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("disabled", !ctx_r0.previewCourseToAdd[sheet_r55.sheetName]);
} }
function FeeManagementComponent_Conditional_19_Conditional_31_ForEmpty_52_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 102);
    i0.ɵɵtext(1, "No sheets match the selected filter.");
    i0.ɵɵelementEnd();
} }
function FeeManagementComponent_Conditional_19_Conditional_31_For_81_For_12_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 29);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const head_r62 = ctx.$implicit;
    i0.ɵɵproperty("value", head_r62._id);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(head_r62.name);
} }
function FeeManagementComponent_Conditional_19_Conditional_31_For_81_Template(rf, ctx) { if (rf & 1) {
    const _r60 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "tr")(1, "td")(2, "strong");
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(4, "td")(5, "span", 53);
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(7, "td")(8, "select", 27);
    i0.ɵɵtwoWayListener("ngModelChange", function FeeManagementComponent_Conditional_19_Conditional_31_For_81_Template_select_ngModelChange_8_listener($event) { const mapping_r61 = i0.ɵɵrestoreView(_r60).$implicit; const ctx_r0 = i0.ɵɵnextContext(3); i0.ɵɵtwoWayBindingSet(ctx_r0.headMappings[mapping_r61.sourceHead], $event) || (ctx_r0.headMappings[mapping_r61.sourceHead] = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementStart(9, "option", 28);
    i0.ɵɵtext(10, "Skip this Excel label");
    i0.ɵɵelementEnd();
    i0.ɵɵrepeaterCreate(11, FeeManagementComponent_Conditional_19_Conditional_31_For_81_For_12_Template, 2, 2, "option", 29, _forTrack0);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const mapping_r61 = ctx.$implicit;
    const ctx_r0 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(mapping_r61.sourceHead);
    i0.ɵɵadvance(2);
    i0.ɵɵclassProp("erp-status--neutral", !ctx_r0.headMappings[mapping_r61.sourceHead]);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r0.headMappings[mapping_r61.sourceHead] ? "Mapped" : "Needs mapping");
    i0.ɵɵadvance(2);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r0.headMappings[mapping_r61.sourceHead]);
    i0.ɵɵadvance(3);
    i0.ɵɵrepeater(ctx_r0.bookHeads());
} }
function FeeManagementComponent_Conditional_19_Conditional_31_Template(rf, ctx) { if (rf & 1) {
    const _r51 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "section", 105)(1, "div", 24)(2, "div")(3, "h2");
    i0.ɵɵtext(4, "Workbook mapping preview");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "p");
    i0.ɵɵtext(6);
    i0.ɵɵconditionalCreate(7, FeeManagementComponent_Conditional_19_Conditional_31_Conditional_7_Template, 1, 1);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(8, "div", 106)(9, "div")(10, "strong");
    i0.ɵɵtext(11);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(12, "span");
    i0.ɵɵtext(13, "Sheets");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(14, "div")(15, "strong");
    i0.ɵɵtext(16);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(17, "span");
    i0.ɵɵtext(18, "Mapped courses");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(19, "div")(20, "strong");
    i0.ɵɵtext(21);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(22, "span");
    i0.ɵɵtext(23, "Need manual mapping");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(24, "div")(25, "strong");
    i0.ɵɵtext(26);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(27, "span");
    i0.ɵɵtext(28, "Detected fee rows");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(29, "label", 107)(30, "input", 97);
    i0.ɵɵlistener("change", function FeeManagementComponent_Conditional_19_Conditional_31_Template_input_change_30_listener($event) { i0.ɵɵrestoreView(_r51); const ctx_r0 = i0.ɵɵnextContext(2); ctx_r0.showOnlyNeedsMapping.set($event.target.checked); return i0.ɵɵresetView(ctx_r0.previewPage = 1); });
    i0.ɵɵelementEnd();
    i0.ɵɵtext(31, " Show only sheets needing manual mapping");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(32, "section", 105)(33, "div", 108)(34, "div")(35, "h2");
    i0.ɵɵtext(36, "Course sheet mapping");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(37, "p");
    i0.ɵɵtext(38);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(39, "label", 109)(40, "span");
    i0.ɵɵtext(41, "Rows per page");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(42, "select", 27);
    i0.ɵɵlistener("ngModelChange", function FeeManagementComponent_Conditional_19_Conditional_31_Template_select_ngModelChange_42_listener($event) { i0.ɵɵrestoreView(_r51); const ctx_r0 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r0.setPreviewPageSize($event)); });
    i0.ɵɵelementStart(43, "option", 49);
    i0.ɵɵtext(44, "10");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(45, "option", 49);
    i0.ɵɵtext(46, "20");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(47, "option", 49);
    i0.ɵɵtext(48, "50");
    i0.ɵɵelementEnd()()()();
    i0.ɵɵelementStart(49, "div", 110);
    i0.ɵɵrepeaterCreate(50, FeeManagementComponent_Conditional_19_Conditional_31_For_51_Template, 35, 13, "article", 111, _forTrack2, false, FeeManagementComponent_Conditional_19_Conditional_31_ForEmpty_52_Template, 2, 0, "div", 102);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(53, "div", 112)(54, "span");
    i0.ɵɵtext(55);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(56, "div", 47)(57, "button", 50);
    i0.ɵɵlistener("click", function FeeManagementComponent_Conditional_19_Conditional_31_Template_button_click_57_listener() { i0.ɵɵrestoreView(_r51); const ctx_r0 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r0.setPreviewPage(ctx_r0.previewPage - 1)); });
    i0.ɵɵtext(58, " \u2039");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(59, "button", 113);
    i0.ɵɵtext(60);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(61, "button", 52);
    i0.ɵɵlistener("click", function FeeManagementComponent_Conditional_19_Conditional_31_Template_button_click_61_listener() { i0.ɵɵrestoreView(_r51); const ctx_r0 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r0.setPreviewPage(ctx_r0.previewPage + 1)); });
    i0.ɵɵtext(62, " \u203A ");
    i0.ɵɵelementEnd()()()();
    i0.ɵɵelementStart(63, "section", 11)(64, "div", 38)(65, "h2");
    i0.ɵɵtext(66, " Excel fee-head mapping ");
    i0.ɵɵelementStart(67, "small");
    i0.ɵɵtext(68);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(69, "div", 44)(70, "table")(71, "thead")(72, "tr")(73, "th");
    i0.ɵɵtext(74, "Excel fee label");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(75, "th");
    i0.ɵɵtext(76, "Status");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(77, "th");
    i0.ɵɵtext(78, "Map to Fee Head");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(79, "tbody");
    i0.ɵɵrepeaterCreate(80, FeeManagementComponent_Conditional_19_Conditional_31_For_81_Template, 13, 5, "tr", null, _forTrack3);
    i0.ɵɵelementEnd()()()();
    i0.ɵɵelementStart(82, "section", 105)(83, "div", 114)(84, "label", 107)(85, "input", 115);
    i0.ɵɵtwoWayListener("ngModelChange", function FeeManagementComponent_Conditional_19_Conditional_31_Template_input_ngModelChange_85_listener($event) { i0.ɵɵrestoreView(_r51); const ctx_r0 = i0.ɵɵnextContext(2); i0.ɵɵtwoWayBindingSet(ctx_r0.replaceExisting, $event) || (ctx_r0.replaceExisting = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd();
    i0.ɵɵtext(86, " Replace earlier Excel-imported fees for mapped courses");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(87, "button", 36);
    i0.ɵɵlistener("click", function FeeManagementComponent_Conditional_19_Conditional_31_Template_button_click_87_listener() { i0.ɵɵrestoreView(_r51); const ctx_r0 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r0.commitImport()); });
    i0.ɵɵtext(88, " Confirm and import mapped fees ");
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const importPreview_r52 = ctx;
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(6);
    i0.ɵɵtextInterpolate3(" ", importPreview_r52.fileName, " \u00B7 Domicile: ", importPreview_r52.domicileName, " \u00B7 Student type: ", importPreview_r52.studentTypeName, " ");
    i0.ɵɵadvance();
    i0.ɵɵconditional(importPreview_r52.countryName ? 7 : -1);
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(ctx_r0.previewCounts().total);
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(ctx_r0.previewCounts().mapped);
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(ctx_r0.previewCounts().needsMapping);
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(ctx_r0.previewCounts().lines);
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("checked", ctx_r0.showOnlyNeedsMapping());
    i0.ɵɵadvance(8);
    i0.ɵɵtextInterpolate2(" Showing ", ctx_r0.pagedPreviewSheets().length, " of ", ctx_r0.filteredPreviewSheets().length, " Excel sheets ");
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("ngModel", ctx_r0.previewPageSize);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngValue", 10);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngValue", 20);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngValue", 50);
    i0.ɵɵadvance(3);
    i0.ɵɵrepeater(ctx_r0.pagedPreviewSheets());
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate2("Page ", ctx_r0.previewPage, " of ", ctx_r0.previewTotalPages());
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("disabled", ctx_r0.previewPage === 1);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1(" ", ctx_r0.previewPage);
    i0.ɵɵadvance();
    i0.ɵɵproperty("disabled", ctx_r0.previewPage === ctx_r0.previewTotalPages());
    i0.ɵɵadvance(7);
    i0.ɵɵtextInterpolate(importPreview_r52.headMappings.length);
    i0.ɵɵadvance(12);
    i0.ɵɵrepeater(importPreview_r52.headMappings);
    i0.ɵɵadvance(5);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r0.replaceExisting);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("disabled", ctx_r0.saving());
} }
function FeeManagementComponent_Conditional_19_Template(rf, ctx) { if (rf & 1) {
    const _r46 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "section", 8)(1, "div", 24)(2, "div")(3, "h2");
    i0.ɵɵtext(4, "Bulk upload fee workbook");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "p");
    i0.ɵɵtext(6, " Upload .xlsx, review every automatic match, manually map unresolved sheets and fee heads, then import. ");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(7, "div", 103)(8, "label", 26)(9, "span");
    i0.ɵɵtext(10, "Domicile *");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(11, "select", 27);
    i0.ɵɵtwoWayListener("ngModelChange", function FeeManagementComponent_Conditional_19_Template_select_ngModelChange_11_listener($event) { i0.ɵɵrestoreView(_r46); const ctx_r0 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r0.importDomicileId, $event) || (ctx_r0.importDomicileId = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵlistener("ngModelChange", function FeeManagementComponent_Conditional_19_Template_select_ngModelChange_11_listener() { i0.ɵɵrestoreView(_r46); const ctx_r0 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r0.preview.set(null)); });
    i0.ɵɵelementStart(12, "option", 28);
    i0.ɵɵtext(13, "Select domicile for this workbook");
    i0.ɵɵelementEnd();
    i0.ɵɵrepeaterCreate(14, FeeManagementComponent_Conditional_19_For_15_Template, 2, 2, "option", 29, _forTrack0);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(16, "label", 26)(17, "span");
    i0.ɵɵtext(18, "Student type *");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(19, "select", 27);
    i0.ɵɵtwoWayListener("ngModelChange", function FeeManagementComponent_Conditional_19_Template_select_ngModelChange_19_listener($event) { i0.ɵɵrestoreView(_r46); const ctx_r0 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r0.importStudentTypeId, $event) || (ctx_r0.importStudentTypeId = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵlistener("ngModelChange", function FeeManagementComponent_Conditional_19_Template_select_ngModelChange_19_listener() { i0.ɵɵrestoreView(_r46); const ctx_r0 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r0.importStudentTypeChanged()); });
    i0.ɵɵelementStart(20, "option", 28);
    i0.ɵɵtext(21, "Select student type for this workbook");
    i0.ɵɵelementEnd();
    i0.ɵɵrepeaterCreate(22, FeeManagementComponent_Conditional_19_For_23_Template, 2, 2, "option", 29, _forTrack0);
    i0.ɵɵelementEnd()();
    i0.ɵɵconditionalCreate(24, FeeManagementComponent_Conditional_19_Conditional_24_Template, 8, 1, "label", 26);
    i0.ɵɵelementStart(25, "label", 26)(26, "span");
    i0.ɵɵtext(27, "Excel workbook *");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(28, "input", 104);
    i0.ɵɵlistener("change", function FeeManagementComponent_Conditional_19_Template_input_change_28_listener($event) { i0.ɵɵrestoreView(_r46); const ctx_r0 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r0.previewWorkbook($event)); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(29, "small");
    i0.ɵɵtext(30, "Every imported fee will use the selected domicile, student type and country when required. Nothing is saved until you confirm the mapping preview.");
    i0.ɵɵelementEnd()()();
    i0.ɵɵconditionalCreate(31, FeeManagementComponent_Conditional_19_Conditional_31_Template, 89, 24);
} if (rf & 2) {
    let tmp_7_0;
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(11);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r0.importDomicileId);
    i0.ɵɵadvance(3);
    i0.ɵɵrepeater(ctx_r0.domiciles());
    i0.ɵɵadvance(5);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r0.importStudentTypeId);
    i0.ɵɵadvance(3);
    i0.ɵɵrepeater(ctx_r0.studentTypes());
    i0.ɵɵadvance(2);
    i0.ɵɵconditional(ctx_r0.importRequiresCountry() ? 24 : -1);
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("disabled", !ctx_r0.selectedBookId || !ctx_r0.importDomicileId || !ctx_r0.importStudentTypeId || ctx_r0.importRequiresCountry() && !ctx_r0.importCountryId || ctx_r0.saving());
    i0.ɵɵadvance(3);
    i0.ɵɵconditional((tmp_7_0 = ctx_r0.preview()) ? 31 : -1, tmp_7_0);
} }
function FeeManagementComponent_Conditional_20_Conditional_0_For_25_Template(rf, ctx) { if (rf & 1) {
    const _r63 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "tr")(1, "td")(2, "strong");
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "small");
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(6, "td")(7, "strong");
    i0.ɵɵtext(8);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(9, "small");
    i0.ɵɵtext(10);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(11, "td")(12, "span", 132);
    i0.ɵɵtext(13, "Draft");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(14, "small");
    i0.ɵɵtext(15);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(16, "td");
    i0.ɵɵtext(17);
    i0.ɵɵpipe(18, "date");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(19, "td", 45)(20, "erp-compact-action-menu", 54);
    i0.ɵɵlistener("selected", function FeeManagementComponent_Conditional_20_Conditional_0_For_25_Template_erp_compact_action_menu_selected_20_listener($event) { const draft_r64 = i0.ɵɵrestoreView(_r63).$implicit; const ctx_r0 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r0.handleCourseFeeDraftAction($event, draft_r64)); });
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const draft_r64 = ctx.$implicit;
    const ctx_r0 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(draft_r64.bookCode);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate2("", draft_r64.collegeName, " \u00B7 ", draft_r64.academicSession);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(draft_r64.courseName || "Course not selected");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(draft_r64.feeTypeId ? "Fee type selected" : "Context incomplete");
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate2("", draft_r64.selectedFeeHeadIds.length, " fee heads \u00B7 ", ctx_r0.draftAmountCount(draft_r64), " amounts");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind2(18, 9, draft_r64.updatedAt, "medium"));
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("items", ctx_r0.draftActions);
} }
function FeeManagementComponent_Conditional_20_Conditional_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "section", 130)(1, "div", 38)(2, "div")(3, "h2");
    i0.ɵɵtext(4, "Saved drafts");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "p");
    i0.ɵɵtext(6, "Continue incomplete course-fee work without losing entered amounts.");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(7, "span", 132);
    i0.ɵɵtext(8);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(9, "div", 44)(10, "table")(11, "thead")(12, "tr")(13, "th");
    i0.ɵɵtext(14, "Fee book");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(15, "th");
    i0.ɵɵtext(16, "Course");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(17, "th");
    i0.ɵɵtext(18, "Progress");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(19, "th");
    i0.ɵɵtext(20, "Last saved");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(21, "th", 45);
    i0.ɵɵtext(22, "Actions");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(23, "tbody");
    i0.ɵɵrepeaterCreate(24, FeeManagementComponent_Conditional_20_Conditional_0_For_25_Template, 21, 12, "tr", null, _forTrack0);
    i0.ɵɵelementEnd()()()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(8);
    i0.ɵɵtextInterpolate2("", ctx_r0.visibleCourseFeeDrafts().length, " draft", ctx_r0.visibleCourseFeeDrafts().length === 1 ? "" : "s");
    i0.ɵɵadvance(16);
    i0.ɵɵrepeater(ctx_r0.visibleCourseFeeDrafts());
} }
function FeeManagementComponent_Conditional_20_Conditional_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "section", 131);
    i0.ɵɵtext(1, " No saved course-fee drafts found. ");
    i0.ɵɵelementEnd();
} }
function FeeManagementComponent_Conditional_20_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵconditionalCreate(0, FeeManagementComponent_Conditional_20_Conditional_0_Template, 26, 2, "section", 130)(1, FeeManagementComponent_Conditional_20_Conditional_1_Template, 2, 0, "section", 131);
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵconditional(ctx_r0.visibleCourseFeeDrafts().length ? 0 : 1);
} }
function FeeManagementComponent_Conditional_21_Conditional_0_Conditional_10_For_32_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 29);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const college_r67 = ctx.$implicit;
    i0.ɵɵproperty("value", college_r67._id);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(college_r67.name);
} }
function FeeManagementComponent_Conditional_21_Conditional_0_Conditional_10_For_40_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 29);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const department_r68 = ctx.$implicit;
    i0.ɵɵproperty("value", department_r68._id);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(department_r68.name);
} }
function FeeManagementComponent_Conditional_21_Conditional_0_Conditional_10_For_48_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 29);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const level_r69 = ctx.$implicit;
    i0.ɵɵproperty("value", level_r69._id);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(level_r69.name);
} }
function FeeManagementComponent_Conditional_21_Conditional_0_Conditional_10_For_56_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 29);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const course_r70 = ctx.$implicit;
    i0.ɵɵproperty("value", course_r70._id);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(course_r70.name);
} }
function FeeManagementComponent_Conditional_21_Conditional_0_Conditional_10_For_64_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 29);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const domicile_r71 = ctx.$implicit;
    i0.ɵɵproperty("value", domicile_r71._id);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(domicile_r71.name);
} }
function FeeManagementComponent_Conditional_21_Conditional_0_Conditional_10_For_72_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 29);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const studentType_r72 = ctx.$implicit;
    i0.ɵɵproperty("value", studentType_r72._id);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(studentType_r72.name);
} }
function FeeManagementComponent_Conditional_21_Conditional_0_Conditional_10_Conditional_73_For_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 29);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const country_r74 = ctx.$implicit;
    i0.ɵɵproperty("value", country_r74._id);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(country_r74.name);
} }
function FeeManagementComponent_Conditional_21_Conditional_0_Conditional_10_Conditional_73_Template(rf, ctx) { if (rf & 1) {
    const _r73 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "label", 26)(1, "span");
    i0.ɵɵtext(2, "Country *");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "select", 27);
    i0.ɵɵtwoWayListener("ngModelChange", function FeeManagementComponent_Conditional_21_Conditional_0_Conditional_10_Conditional_73_Template_select_ngModelChange_3_listener($event) { i0.ɵɵrestoreView(_r73); const ctx_r0 = i0.ɵɵnextContext(4); i0.ɵɵtwoWayBindingSet(ctx_r0.viewCountryId, $event) || (ctx_r0.viewCountryId = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵlistener("ngModelChange", function FeeManagementComponent_Conditional_21_Conditional_0_Conditional_10_Conditional_73_Template_select_ngModelChange_3_listener() { i0.ɵɵrestoreView(_r73); const ctx_r0 = i0.ɵɵnextContext(4); return i0.ɵɵresetView(ctx_r0.viewCountryChanged()); });
    i0.ɵɵelementStart(4, "option", 28);
    i0.ɵɵtext(5, "Select country");
    i0.ɵɵelementEnd();
    i0.ɵɵrepeaterCreate(6, FeeManagementComponent_Conditional_21_Conditional_0_Conditional_10_Conditional_73_For_7_Template, 2, 2, "option", 29, _forTrack0);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(4);
    i0.ɵɵadvance(3);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r0.viewCountryId);
    i0.ɵɵadvance(3);
    i0.ɵɵrepeater(ctx_r0.countries());
} }
function FeeManagementComponent_Conditional_21_Conditional_0_Conditional_10_Template(rf, ctx) { if (rf & 1) {
    const _r66 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 137)(1, "button", 138);
    i0.ɵɵlistener("click", function FeeManagementComponent_Conditional_21_Conditional_0_Conditional_10_Template_button_click_1_listener() { i0.ɵɵrestoreView(_r66); const ctx_r0 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r0.courseViewFiltersOpen.set(false)); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(2, "section", 139)(3, "header", 140)(4, "span", 141);
    i0.ɵɵelement(5, "img", 135);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "div")(7, "small");
    i0.ɵɵtext(8, "Course fee explorer");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(9, "h2", 142);
    i0.ɵɵtext(10, "Filter fee structure");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(11, "p");
    i0.ɵɵtext(12, "Select the academic and student context for one precise result.");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(13, "button", 143);
    i0.ɵɵlistener("click", function FeeManagementComponent_Conditional_21_Conditional_0_Conditional_10_Template_button_click_13_listener() { i0.ɵɵrestoreView(_r66); const ctx_r0 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r0.courseViewFiltersOpen.set(false)); });
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(14, "svg", 144);
    i0.ɵɵelementEnd()();
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(15, "div", 145)(16, "div", 146)(17, "label", 26)(18, "span");
    i0.ɵɵtext(19, "Fee book *");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(20, "button", 147);
    i0.ɵɵlistener("click", function FeeManagementComponent_Conditional_21_Conditional_0_Conditional_10_Template_button_click_20_listener() { i0.ɵɵrestoreView(_r66); const ctx_r0 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r0.openBookSelector()); });
    i0.ɵɵelementStart(21, "span");
    i0.ɵɵtext(22);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(23, "small");
    i0.ɵɵtext(24);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(25, "label", 26)(26, "span");
    i0.ɵɵtext(27, "College *");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(28, "select", 27);
    i0.ɵɵtwoWayListener("ngModelChange", function FeeManagementComponent_Conditional_21_Conditional_0_Conditional_10_Template_select_ngModelChange_28_listener($event) { i0.ɵɵrestoreView(_r66); const ctx_r0 = i0.ɵɵnextContext(3); i0.ɵɵtwoWayBindingSet(ctx_r0.viewCollegeId, $event) || (ctx_r0.viewCollegeId = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵlistener("ngModelChange", function FeeManagementComponent_Conditional_21_Conditional_0_Conditional_10_Template_select_ngModelChange_28_listener() { i0.ɵɵrestoreView(_r66); const ctx_r0 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r0.viewCollegeChanged()); });
    i0.ɵɵelementStart(29, "option", 28);
    i0.ɵɵtext(30, "Select college");
    i0.ɵɵelementEnd();
    i0.ɵɵrepeaterCreate(31, FeeManagementComponent_Conditional_21_Conditional_0_Conditional_10_For_32_Template, 2, 2, "option", 29, _forTrack0);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(33, "label", 26)(34, "span");
    i0.ɵɵtext(35, "Department *");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(36, "select", 27);
    i0.ɵɵtwoWayListener("ngModelChange", function FeeManagementComponent_Conditional_21_Conditional_0_Conditional_10_Template_select_ngModelChange_36_listener($event) { i0.ɵɵrestoreView(_r66); const ctx_r0 = i0.ɵɵnextContext(3); i0.ɵɵtwoWayBindingSet(ctx_r0.viewDepartmentId, $event) || (ctx_r0.viewDepartmentId = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵlistener("ngModelChange", function FeeManagementComponent_Conditional_21_Conditional_0_Conditional_10_Template_select_ngModelChange_36_listener() { i0.ɵɵrestoreView(_r66); const ctx_r0 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r0.viewDepartmentChanged()); });
    i0.ɵɵelementStart(37, "option", 28);
    i0.ɵɵtext(38, "Select department");
    i0.ɵɵelementEnd();
    i0.ɵɵrepeaterCreate(39, FeeManagementComponent_Conditional_21_Conditional_0_Conditional_10_For_40_Template, 2, 2, "option", 29, _forTrack0);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(41, "label", 26)(42, "span");
    i0.ɵɵtext(43, "Level *");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(44, "select", 27);
    i0.ɵɵtwoWayListener("ngModelChange", function FeeManagementComponent_Conditional_21_Conditional_0_Conditional_10_Template_select_ngModelChange_44_listener($event) { i0.ɵɵrestoreView(_r66); const ctx_r0 = i0.ɵɵnextContext(3); i0.ɵɵtwoWayBindingSet(ctx_r0.viewLevelId, $event) || (ctx_r0.viewLevelId = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵlistener("ngModelChange", function FeeManagementComponent_Conditional_21_Conditional_0_Conditional_10_Template_select_ngModelChange_44_listener() { i0.ɵɵrestoreView(_r66); const ctx_r0 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r0.viewLevelChanged()); });
    i0.ɵɵelementStart(45, "option", 28);
    i0.ɵɵtext(46, "Select level");
    i0.ɵɵelementEnd();
    i0.ɵɵrepeaterCreate(47, FeeManagementComponent_Conditional_21_Conditional_0_Conditional_10_For_48_Template, 2, 2, "option", 29, _forTrack0);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(49, "label", 26)(50, "span");
    i0.ɵɵtext(51, "Course *");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(52, "select", 27);
    i0.ɵɵtwoWayListener("ngModelChange", function FeeManagementComponent_Conditional_21_Conditional_0_Conditional_10_Template_select_ngModelChange_52_listener($event) { i0.ɵɵrestoreView(_r66); const ctx_r0 = i0.ɵɵnextContext(3); i0.ɵɵtwoWayBindingSet(ctx_r0.viewCourseId, $event) || (ctx_r0.viewCourseId = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵlistener("ngModelChange", function FeeManagementComponent_Conditional_21_Conditional_0_Conditional_10_Template_select_ngModelChange_52_listener() { i0.ɵɵrestoreView(_r66); const ctx_r0 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r0.courseFeeViewRecords.set([])); });
    i0.ɵɵelementStart(53, "option", 28);
    i0.ɵɵtext(54, "Select course");
    i0.ɵɵelementEnd();
    i0.ɵɵrepeaterCreate(55, FeeManagementComponent_Conditional_21_Conditional_0_Conditional_10_For_56_Template, 2, 2, "option", 29, _forTrack0);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(57, "label", 26)(58, "span");
    i0.ɵɵtext(59, "Domicile *");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(60, "select", 27);
    i0.ɵɵtwoWayListener("ngModelChange", function FeeManagementComponent_Conditional_21_Conditional_0_Conditional_10_Template_select_ngModelChange_60_listener($event) { i0.ɵɵrestoreView(_r66); const ctx_r0 = i0.ɵɵnextContext(3); i0.ɵɵtwoWayBindingSet(ctx_r0.viewDomicileId, $event) || (ctx_r0.viewDomicileId = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵlistener("ngModelChange", function FeeManagementComponent_Conditional_21_Conditional_0_Conditional_10_Template_select_ngModelChange_60_listener() { i0.ɵɵrestoreView(_r66); const ctx_r0 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r0.viewDomicileChanged()); });
    i0.ɵɵelementStart(61, "option", 28);
    i0.ɵɵtext(62, "Select domicile");
    i0.ɵɵelementEnd();
    i0.ɵɵrepeaterCreate(63, FeeManagementComponent_Conditional_21_Conditional_0_Conditional_10_For_64_Template, 2, 2, "option", 29, _forTrack0);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(65, "label", 26)(66, "span");
    i0.ɵɵtext(67, "Student type *");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(68, "select", 27);
    i0.ɵɵtwoWayListener("ngModelChange", function FeeManagementComponent_Conditional_21_Conditional_0_Conditional_10_Template_select_ngModelChange_68_listener($event) { i0.ɵɵrestoreView(_r66); const ctx_r0 = i0.ɵɵnextContext(3); i0.ɵɵtwoWayBindingSet(ctx_r0.viewStudentTypeId, $event) || (ctx_r0.viewStudentTypeId = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵlistener("ngModelChange", function FeeManagementComponent_Conditional_21_Conditional_0_Conditional_10_Template_select_ngModelChange_68_listener() { i0.ɵɵrestoreView(_r66); const ctx_r0 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r0.viewStudentTypeChanged()); });
    i0.ɵɵelementStart(69, "option", 28);
    i0.ɵɵtext(70, "Select student type");
    i0.ɵɵelementEnd();
    i0.ɵɵrepeaterCreate(71, FeeManagementComponent_Conditional_21_Conditional_0_Conditional_10_For_72_Template, 2, 2, "option", 29, _forTrack0);
    i0.ɵɵelementEnd()();
    i0.ɵɵconditionalCreate(73, FeeManagementComponent_Conditional_21_Conditional_0_Conditional_10_Conditional_73_Template, 8, 1, "label", 26);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(74, "footer", 148)(75, "button", 3);
    i0.ɵɵlistener("click", function FeeManagementComponent_Conditional_21_Conditional_0_Conditional_10_Template_button_click_75_listener() { i0.ɵɵrestoreView(_r66); const ctx_r0 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r0.courseViewFiltersOpen.set(false)); });
    i0.ɵɵtext(76, " Cancel ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(77, "button", 36);
    i0.ɵɵlistener("click", function FeeManagementComponent_Conditional_21_Conditional_0_Conditional_10_Template_button_click_77_listener() { i0.ɵɵrestoreView(_r66); const ctx_r0 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r0.loadCourseFeeView()); });
    i0.ɵɵtext(78, " View fee structure ");
    i0.ɵɵelementEnd()()()()();
} if (rf & 2) {
    let tmp_4_0;
    const ctx_r0 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("cdkTrapFocusAutoCapture", true);
    i0.ɵɵadvance(20);
    i0.ɵɵtextInterpolate(((tmp_4_0 = ctx_r0.currentBook()) == null ? null : tmp_4_0.code) || "Select fee book");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r0.currentBook() ? ctx_r0.currentBook().collegeName + " \u00B7 " + ctx_r0.currentBook().academicSession : "Choose university, college and session");
    i0.ɵɵadvance(4);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r0.viewCollegeId);
    i0.ɵɵadvance(3);
    i0.ɵɵrepeater(ctx_r0.viewCollegeOptions());
    i0.ɵɵadvance(5);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r0.viewDepartmentId);
    i0.ɵɵadvance(3);
    i0.ɵɵrepeater(ctx_r0.viewDepartmentOptions());
    i0.ɵɵadvance(5);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r0.viewLevelId);
    i0.ɵɵadvance(3);
    i0.ɵɵrepeater(ctx_r0.viewLevelOptions());
    i0.ɵɵadvance(5);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r0.viewCourseId);
    i0.ɵɵadvance(3);
    i0.ɵɵrepeater(ctx_r0.viewCourseOptions());
    i0.ɵɵadvance(5);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r0.viewDomicileId);
    i0.ɵɵadvance(3);
    i0.ɵɵrepeater(ctx_r0.domiciles());
    i0.ɵɵadvance(5);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r0.viewStudentTypeId);
    i0.ɵɵadvance(3);
    i0.ɵɵrepeater(ctx_r0.studentTypes());
    i0.ɵɵadvance(2);
    i0.ɵɵconditional(ctx_r0.viewRequiresCountry() ? 73 : -1);
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("disabled", ctx_r0.loading());
} }
function FeeManagementComponent_Conditional_21_Conditional_0_Template(rf, ctx) { if (rf & 1) {
    const _r65 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "section", 134);
    i0.ɵɵelement(1, "img", 135);
    i0.ɵɵelementStart(2, "div")(3, "h2");
    i0.ɵɵtext(4, "Course fee explorer");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "p");
    i0.ɵɵtext(6, "Keep the result visible and open criteria only when you need to change it.");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(7, "button", 3);
    i0.ɵɵlistener("click", function FeeManagementComponent_Conditional_21_Conditional_0_Template_button_click_7_listener() { i0.ɵɵrestoreView(_r65); const ctx_r0 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r0.courseViewFiltersOpen.set(true)); });
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(8, "svg", 136);
    i0.ɵɵtext(9);
    i0.ɵɵelementEnd()();
    i0.ɵɵconditionalCreate(10, FeeManagementComponent_Conditional_21_Conditional_0_Conditional_10_Template, 79, 11, "div", 137);
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(9);
    i0.ɵɵtextInterpolate1(" ", ctx_r0.courseFeeViewRecords().length ? "Change criteria" : "Choose criteria", " ");
    i0.ɵɵadvance();
    i0.ɵɵconditional(ctx_r0.courseViewFiltersOpen() ? 10 : -1);
} }
function FeeManagementComponent_Conditional_21_Conditional_1_Conditional_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtext(0);
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(3);
    i0.ɵɵtextInterpolate1(" \u00B7 ", ctx_r0.courseFeeViewRecords()[0].countryName, " ");
} }
function FeeManagementComponent_Conditional_21_Conditional_1_For_31_For_24_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "th")(1, "span");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "small");
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const column_r75 = ctx.$implicit;
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(column_r75.label);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(column_r75.helper);
} }
function FeeManagementComponent_Conditional_21_Conditional_1_For_31_For_29_For_13_Conditional_2_For_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "strong");
    i0.ɵɵtext(1);
    i0.ɵɵpipe(2, "currency");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const amount_r76 = ctx.$implicit;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind4(2, 1, amount_r76, "INR", "symbol", "1.2-2"));
} }
function FeeManagementComponent_Conditional_21_Conditional_1_For_31_For_29_For_13_Conditional_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵrepeaterCreate(0, FeeManagementComponent_Conditional_21_Conditional_1_For_31_For_29_For_13_Conditional_2_For_1_Template, 3, 6, "strong", null, i0.ɵɵrepeaterTrackByIdentity);
    i0.ɵɵelementStart(2, "small");
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    i0.ɵɵnextContext();
    const cell_r77 = i0.ɵɵreadContextLet(0);
    i0.ɵɵrepeater(cell_r77.amounts);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(cell_r77.sources.join(" \u00B7 "));
} }
function FeeManagementComponent_Conditional_21_Conditional_1_For_31_For_29_For_13_Conditional_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵtext(1, "\u2014");
    i0.ɵɵelementEnd();
} }
function FeeManagementComponent_Conditional_21_Conditional_1_For_31_For_29_For_13_Conditional_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "small");
    i0.ɵɵtext(1, "Review duplicate amounts");
    i0.ɵɵelementEnd();
} }
function FeeManagementComponent_Conditional_21_Conditional_1_For_31_For_29_For_13_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵdeclareLet(0);
    i0.ɵɵelementStart(1, "td", 159);
    i0.ɵɵconditionalCreate(2, FeeManagementComponent_Conditional_21_Conditional_1_For_31_For_29_For_13_Conditional_2_Template, 4, 1)(3, FeeManagementComponent_Conditional_21_Conditional_1_For_31_For_29_For_13_Conditional_3_Template, 2, 0, "span");
    i0.ɵɵconditionalCreate(4, FeeManagementComponent_Conditional_21_Conditional_1_For_31_For_29_For_13_Conditional_4_Template, 2, 0, "small");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const column_r78 = ctx.$implicit;
    const row_r79 = i0.ɵɵnextContext().$implicit;
    const cell_r80 = i0.ɵɵstoreLet(row_r79.cells[column_r78.key]);
    i0.ɵɵadvance();
    i0.ɵɵclassProp("fee-amount-cell--conflict", cell_r80 == null ? null : cell_r80.conflict);
    i0.ɵɵadvance();
    i0.ɵɵconditional((cell_r80 == null ? null : cell_r80.amounts == null ? null : cell_r80.amounts.length) ? 2 : 3);
    i0.ɵɵadvance(2);
    i0.ɵɵconditional((cell_r80 == null ? null : cell_r80.conflict) ? 4 : -1);
} }
function FeeManagementComponent_Conditional_21_Conditional_1_For_31_For_29_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "tr")(1, "td")(2, "strong");
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "small");
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(6, "td")(7, "span", 53);
    i0.ɵɵtext(8);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(9, "td")(10, "span");
    i0.ɵɵtext(11);
    i0.ɵɵelementEnd()();
    i0.ɵɵrepeaterCreate(12, FeeManagementComponent_Conditional_21_Conditional_1_For_31_For_29_For_13_Template, 5, 5, "td", 157, _forTrack1);
    i0.ɵɵelementStart(14, "td", 158)(15, "strong");
    i0.ɵɵtext(16);
    i0.ɵɵpipe(17, "currency");
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const row_r79 = ctx.$implicit;
    const matrix_r81 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(row_r79.feeHeadName);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1("#", row_r79.priority === 9999 ? "\u2014" : row_r79.priority);
    i0.ɵɵadvance(2);
    i0.ɵɵclassProp("erp-status--neutral", row_r79.category !== "fee");
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(row_r79.category === "discount" ? "Discount" : row_r79.category === "payment-option" ? "Payment option" : "Payable");
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(row_r79.eligibilityBand);
    i0.ɵɵadvance();
    i0.ɵɵrepeater(matrix_r81.columns);
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind4(17, 7, row_r79.total, "INR", "symbol", "1.2-2"));
} }
function FeeManagementComponent_Conditional_21_Conditional_1_For_31_For_35_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "th");
    i0.ɵɵtext(1);
    i0.ɵɵpipe(2, "currency");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const column_r82 = ctx.$implicit;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind4(2, 1, column_r82.total, "INR", "symbol", "1.0-2"));
} }
function FeeManagementComponent_Conditional_21_Conditional_1_For_31_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "section", 151)(1, "div", 152)(2, "div")(3, "h2");
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "p");
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(7, "div", 153)(8, "span", 53);
    i0.ɵɵtext(9);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(10, "strong");
    i0.ɵɵtext(11);
    i0.ɵɵpipe(12, "currency");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(13, "div", 154)(14, "table", 155)(15, "thead")(16, "tr")(17, "th");
    i0.ɵɵtext(18, "Fee head");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(19, "th");
    i0.ɵɵtext(20, "Category");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(21, "th");
    i0.ɵɵtext(22, "Eligibility");
    i0.ɵɵelementEnd();
    i0.ɵɵrepeaterCreate(23, FeeManagementComponent_Conditional_21_Conditional_1_For_31_For_24_Template, 5, 2, "th", null, _forTrack1);
    i0.ɵɵelementStart(25, "th");
    i0.ɵɵtext(26, "Total");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(27, "tbody");
    i0.ɵɵrepeaterCreate(28, FeeManagementComponent_Conditional_21_Conditional_1_For_31_For_29_Template, 18, 12, "tr", null, _forTrack1);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(30, "tfoot")(31, "tr")(32, "th", 156);
    i0.ɵɵtext(33, "Period total");
    i0.ɵɵelementEnd();
    i0.ɵɵrepeaterCreate(34, FeeManagementComponent_Conditional_21_Conditional_1_For_31_For_35_Template, 3, 6, "th", null, _forTrack1);
    i0.ɵɵelementStart(36, "th");
    i0.ɵɵtext(37);
    i0.ɵɵpipe(38, "currency");
    i0.ɵɵelementEnd()()()()()();
} if (rf & 2) {
    const matrix_r81 = ctx.$implicit;
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(matrix_r81.title);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(matrix_r81.description);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1("", matrix_r81.rows.length, " rows");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind4(12, 5, matrix_r81.grandTotal, "INR", "symbol", "1.0-2"));
    i0.ɵɵadvance(12);
    i0.ɵɵrepeater(matrix_r81.columns);
    i0.ɵɵadvance(5);
    i0.ɵɵrepeater(matrix_r81.rows);
    i0.ɵɵadvance(6);
    i0.ɵɵrepeater(matrix_r81.columns);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind4(38, 10, matrix_r81.grandTotal, "INR", "symbol", "1.0-2"));
} }
function FeeManagementComponent_Conditional_21_Conditional_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "section", 149)(1, "div")(2, "span", 19);
    i0.ɵɵtext(3);
    i0.ɵɵconditionalCreate(4, FeeManagementComponent_Conditional_21_Conditional_1_Conditional_4_Template, 1, 1);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "h2");
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "p");
    i0.ɵɵtext(8);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(9, "div", 150)(10, "div")(11, "strong");
    i0.ɵɵtext(12);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(13, "span");
    i0.ɵɵtext(14, "Fee heads");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(15, "div")(16, "strong");
    i0.ɵɵtext(17);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(18, "span");
    i0.ɵɵtext(19, "Academic years");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(20, "div")(21, "strong");
    i0.ɵɵtext(22);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(23, "span");
    i0.ɵɵtext(24, "Eligibility slabs");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(25, "div")(26, "strong");
    i0.ɵɵtext(27);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(28, "span");
    i0.ɵɵtext(29, "Configured amounts");
    i0.ɵɵelementEnd()()()();
    i0.ɵɵrepeaterCreate(30, FeeManagementComponent_Conditional_21_Conditional_1_For_31_Template, 39, 15, "section", 151, _forTrack1);
} if (rf & 2) {
    let tmp_2_0;
    let tmp_4_0;
    let tmp_5_0;
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate4("", (tmp_2_0 = ctx_r0.currentBook()) == null ? null : tmp_2_0.code, " \u00B7 ", (tmp_2_0 = ctx_r0.currentBook()) == null ? null : tmp_2_0.academicSession, " \u00B7 ", ctx_r0.courseFeeViewRecords()[0].domicileName, " \u00B7 ", ctx_r0.courseFeeViewRecords()[0].studentTypeName, " ");
    i0.ɵɵadvance();
    i0.ɵɵconditional(ctx_r0.courseFeeViewRecords()[0].countryName ? 4 : -1);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate((tmp_4_0 = ctx_r0.selectedViewCourse()) == null ? null : tmp_4_0.name);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate((tmp_5_0 = ctx_r0.currentBook()) == null ? null : tmp_5_0.collegeName);
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(ctx_r0.feeViewSummary().heads);
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(ctx_r0.feeViewSummary().years);
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(ctx_r0.feeViewSummary().eligibilityBands);
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(ctx_r0.feeViewSummary().records);
    i0.ɵɵadvance(3);
    i0.ɵɵrepeater(ctx_r0.feeViewMatrices());
} }
function FeeManagementComponent_Conditional_21_Conditional_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "section", 133);
    i0.ɵɵtext(1, " No fee structure is configured for the selected course in this fee book. ");
    i0.ɵɵelementEnd();
} }
function FeeManagementComponent_Conditional_21_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵconditionalCreate(0, FeeManagementComponent_Conditional_21_Conditional_0_Template, 11, 2);
    i0.ɵɵconditionalCreate(1, FeeManagementComponent_Conditional_21_Conditional_1_Template, 32, 11)(2, FeeManagementComponent_Conditional_21_Conditional_2_Template, 2, 0, "section", 133);
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵconditional(ctx_r0.selectedBookId ? 0 : -1);
    i0.ɵɵadvance();
    i0.ɵɵconditional(ctx_r0.courseFeeViewRecords().length ? 1 : ctx_r0.viewCourseId && !ctx_r0.loading() ? 2 : -1);
} }
function FeeManagementComponent_Conditional_22_For_20_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 29);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const university_r84 = ctx.$implicit;
    i0.ɵɵproperty("value", university_r84._id);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(university_r84.name);
} }
function FeeManagementComponent_Conditional_22_For_28_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 29);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const college_r85 = ctx.$implicit;
    i0.ɵɵproperty("value", college_r85._id);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(college_r85.name);
} }
function FeeManagementComponent_Conditional_22_For_36_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 29);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const session_r86 = ctx.$implicit;
    i0.ɵɵproperty("value", session_r86.name);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(session_r86.name);
} }
function FeeManagementComponent_Conditional_22_Conditional_38_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 102);
    i0.ɵɵtext(1, " Select university, college and academic session to view available fee books. ");
    i0.ɵɵelementEnd();
} }
function FeeManagementComponent_Conditional_22_Conditional_39_For_1_Template(rf, ctx) { if (rf & 1) {
    const _r87 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 171);
    i0.ɵɵlistener("click", function FeeManagementComponent_Conditional_22_Conditional_39_For_1_Template_button_click_0_listener() { const book_r88 = i0.ɵɵrestoreView(_r87).$implicit; const ctx_r0 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r0.selectFeeBook(book_r88._id)); });
    i0.ɵɵelementStart(1, "span")(2, "strong");
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "small");
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(6, "span")(7, "strong");
    i0.ɵɵtext(8);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(9, "small");
    i0.ɵɵtext(10);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const book_r88 = ctx.$implicit;
    const ctx_r0 = i0.ɵɵnextContext(3);
    i0.ɵɵclassProp("active", book_r88._id === ctx_r0.selectedBookId);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(book_r88.code);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(book_r88.collegeName);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(book_r88.academicSession);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(book_r88.frequency === "semester" ? "Semester wise" : "Year wise");
} }
function FeeManagementComponent_Conditional_22_Conditional_39_ForEmpty_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 102);
    i0.ɵɵtext(1, " No fee book exists for this college and academic session. ");
    i0.ɵɵelementEnd();
} }
function FeeManagementComponent_Conditional_22_Conditional_39_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵrepeaterCreate(0, FeeManagementComponent_Conditional_22_Conditional_39_For_1_Template, 11, 6, "button", 170, _forTrack0, false, FeeManagementComponent_Conditional_22_Conditional_39_ForEmpty_2_Template, 2, 0, "div", 102);
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵrepeater(ctx_r0.bookPickerBooks());
} }
function FeeManagementComponent_Conditional_22_Template(rf, ctx) { if (rf & 1) {
    const _r83 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 12)(1, "button", 160);
    i0.ɵɵlistener("click", function FeeManagementComponent_Conditional_22_Template_button_click_1_listener() { i0.ɵɵrestoreView(_r83); const ctx_r0 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r0.bookSelectorOpen.set(false)); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(2, "section", 161)(3, "header", 162)(4, "div")(5, "small");
    i0.ɵɵtext(6, "Fee Management");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "h2", 163);
    i0.ɵɵtext(8, "Select fee book");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(9, "button", 164);
    i0.ɵɵlistener("click", function FeeManagementComponent_Conditional_22_Template_button_click_9_listener() { i0.ɵɵrestoreView(_r83); const ctx_r0 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r0.bookSelectorOpen.set(false)); });
    i0.ɵɵtext(10, "\u00D7");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(11, "div", 165)(12, "div", 166)(13, "label", 26)(14, "span");
    i0.ɵɵtext(15, "University *");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(16, "select", 27);
    i0.ɵɵtwoWayListener("ngModelChange", function FeeManagementComponent_Conditional_22_Template_select_ngModelChange_16_listener($event) { i0.ɵɵrestoreView(_r83); const ctx_r0 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r0.bookPickerUniversityId, $event) || (ctx_r0.bookPickerUniversityId = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵlistener("ngModelChange", function FeeManagementComponent_Conditional_22_Template_select_ngModelChange_16_listener() { i0.ɵɵrestoreView(_r83); const ctx_r0 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r0.bookPickerUniversityChanged()); });
    i0.ɵɵelementStart(17, "option", 28);
    i0.ɵɵtext(18, "Select university");
    i0.ɵɵelementEnd();
    i0.ɵɵrepeaterCreate(19, FeeManagementComponent_Conditional_22_For_20_Template, 2, 2, "option", 29, _forTrack0);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(21, "label", 26)(22, "span");
    i0.ɵɵtext(23, "College / Campus *");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(24, "select", 167);
    i0.ɵɵtwoWayListener("ngModelChange", function FeeManagementComponent_Conditional_22_Template_select_ngModelChange_24_listener($event) { i0.ɵɵrestoreView(_r83); const ctx_r0 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r0.bookPickerCollegeId, $event) || (ctx_r0.bookPickerCollegeId = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵlistener("ngModelChange", function FeeManagementComponent_Conditional_22_Template_select_ngModelChange_24_listener() { i0.ɵɵrestoreView(_r83); const ctx_r0 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r0.bookPickerCollegeChanged()); });
    i0.ɵɵelementStart(25, "option", 28);
    i0.ɵɵtext(26, "Select college");
    i0.ɵɵelementEnd();
    i0.ɵɵrepeaterCreate(27, FeeManagementComponent_Conditional_22_For_28_Template, 2, 2, "option", 29, _forTrack0);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(29, "label", 26)(30, "span");
    i0.ɵɵtext(31, "Academic session *");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(32, "select", 167);
    i0.ɵɵtwoWayListener("ngModelChange", function FeeManagementComponent_Conditional_22_Template_select_ngModelChange_32_listener($event) { i0.ɵɵrestoreView(_r83); const ctx_r0 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r0.bookPickerSession, $event) || (ctx_r0.bookPickerSession = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementStart(33, "option", 28);
    i0.ɵɵtext(34, "Select session");
    i0.ɵɵelementEnd();
    i0.ɵɵrepeaterCreate(35, FeeManagementComponent_Conditional_22_For_36_Template, 2, 2, "option", 29, _forTrack0);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(37, "div", 168);
    i0.ɵɵconditionalCreate(38, FeeManagementComponent_Conditional_22_Conditional_38_Template, 2, 0, "div", 102)(39, FeeManagementComponent_Conditional_22_Conditional_39_Template, 3, 1);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(40, "footer", 169)(41, "button", 3);
    i0.ɵɵlistener("click", function FeeManagementComponent_Conditional_22_Template_button_click_41_listener() { i0.ɵɵrestoreView(_r83); const ctx_r0 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r0.bookSelectorOpen.set(false)); });
    i0.ɵɵtext(42, " Close ");
    i0.ɵɵelementEnd()()()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(16);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r0.bookPickerUniversityId);
    i0.ɵɵadvance(3);
    i0.ɵɵrepeater(ctx_r0.universities());
    i0.ɵɵadvance(5);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r0.bookPickerCollegeId);
    i0.ɵɵproperty("disabled", !ctx_r0.bookPickerUniversityId);
    i0.ɵɵadvance(3);
    i0.ɵɵrepeater(ctx_r0.bookPickerCollegeOptions());
    i0.ɵɵadvance(5);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r0.bookPickerSession);
    i0.ɵɵproperty("disabled", !ctx_r0.bookPickerCollegeId);
    i0.ɵɵadvance(3);
    i0.ɵɵrepeater(ctx_r0.academicSessions());
    i0.ɵɵadvance(3);
    i0.ɵɵconditional(!ctx_r0.bookPickerUniversityId || !ctx_r0.bookPickerCollegeId || !ctx_r0.bookPickerSession ? 38 : 39);
} }
function FeeManagementComponent_Conditional_23_For_30_Template(rf, ctx) { if (rf & 1) {
    const _r90 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 182);
    i0.ɵɵlistener("click", function FeeManagementComponent_Conditional_23_For_30_Template_button_click_0_listener() { const head_r91 = i0.ɵɵrestoreView(_r90).$implicit; const ctx_r0 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r0.selectCourseFeeHead(head_r91._id)); });
    i0.ɵɵelementStart(1, "span", 179);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "span")(4, "strong");
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "small");
    i0.ɵɵtext(7);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(8, "span")(9, "strong");
    i0.ɵɵtext(10);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(11, "small");
    i0.ɵɵtext(12);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const head_r91 = ctx.$implicit;
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵclassProp("active", ctx_r0.feeHeadSelected(head_r91._id));
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r0.feeHeadSelected(head_r91._id) ? "\u2713" : "");
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(head_r91.name);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(head_r91.bookCode);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(head_r91.category);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate2("Priority ", head_r91.priority || "\u2014", " \u00B7 ", head_r91.isActive ? "Active" : "Disabled");
} }
function FeeManagementComponent_Conditional_23_ForEmpty_31_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 102);
    i0.ɵɵtext(1, "No active fee heads found for this book.");
    i0.ɵɵelementEnd();
} }
function FeeManagementComponent_Conditional_23_Template(rf, ctx) { if (rf & 1) {
    const _r89 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 13)(1, "button", 172);
    i0.ɵɵlistener("click", function FeeManagementComponent_Conditional_23_Template_button_click_1_listener() { i0.ɵɵrestoreView(_r89); const ctx_r0 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r0.feeHeadPickerOpen.set(false)); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(2, "section", 173)(3, "header", 162)(4, "div")(5, "small");
    i0.ɵɵtext(6, "Fee Management");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "h2", 174);
    i0.ɵɵtext(8, "Select fee head");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(9, "button", 164);
    i0.ɵɵlistener("click", function FeeManagementComponent_Conditional_23_Template_button_click_9_listener() { i0.ɵɵrestoreView(_r89); const ctx_r0 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r0.feeHeadPickerOpen.set(false)); });
    i0.ɵɵtext(10, "\u00D7");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(11, "div", 175)(12, "label", 176)(13, "span", 41);
    i0.ɵɵtext(14, "Search fee heads");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(15, "input", 177);
    i0.ɵɵlistener("input", function FeeManagementComponent_Conditional_23_Template_input_input_15_listener($event) { i0.ɵɵrestoreView(_r89); const ctx_r0 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r0.feeHeadPickerSearch.set($event.target.value)); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(16, "button", 178);
    i0.ɵɵlistener("click", function FeeManagementComponent_Conditional_23_Template_button_click_16_listener() { i0.ɵɵrestoreView(_r89); const ctx_r0 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r0.selectAllCourseFeeHeads()); });
    i0.ɵɵelementStart(17, "span", 179);
    i0.ɵɵtext(18);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(19, "span")(20, "strong");
    i0.ɵɵtext(21);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(22, "small");
    i0.ɵɵtext(23, "Apply this course fee amount to every active head in the selected book");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(24, "span")(25, "strong");
    i0.ɵɵtext(26);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(27, "small");
    i0.ɵɵtext(28, "Heads");
    i0.ɵɵelementEnd()()();
    i0.ɵɵrepeaterCreate(29, FeeManagementComponent_Conditional_23_For_30_Template, 13, 8, "button", 180, _forTrack0, false, FeeManagementComponent_Conditional_23_ForEmpty_31_Template, 2, 0, "div", 102);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(32, "footer", 169)(33, "span", 181);
    i0.ɵɵtext(34);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(35, "button", 3);
    i0.ɵɵlistener("click", function FeeManagementComponent_Conditional_23_Template_button_click_35_listener() { i0.ɵɵrestoreView(_r89); const ctx_r0 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r0.clearCourseFeeHead()); });
    i0.ɵɵtext(36, " Clear selection ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(37, "button", 23);
    i0.ɵɵlistener("click", function FeeManagementComponent_Conditional_23_Template_button_click_37_listener() { i0.ɵɵrestoreView(_r89); const ctx_r0 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r0.feeHeadPickerOpen.set(false)); });
    i0.ɵɵtext(38, " Done ");
    i0.ɵɵelementEnd()()()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(15);
    i0.ɵɵproperty("value", ctx_r0.feeHeadPickerSearch());
    i0.ɵɵadvance();
    i0.ɵɵclassProp("active", ctx_r0.allCourseFeeHeadsSelected());
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r0.allCourseFeeHeadsSelected() ? "\u2713" : "+");
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(ctx_r0.allCourseFeeHeadsSelected() ? "Unselect all active heads" : "Select all active fee heads");
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(ctx_r0.activeCourseFeeHeads().length);
    i0.ɵɵadvance(3);
    i0.ɵɵrepeater(ctx_r0.filteredCourseFeeHeads());
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate1("", ctx_r0.selectedCourseFeeHeadIds().length, " selected");
} }
function FeeManagementComponent_Conditional_24_Template(rf, ctx) { if (rf & 1) {
    const _r92 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "erp-confirm-dialog", 183);
    i0.ɵɵlistener("cancelled", function FeeManagementComponent_Conditional_24_Template_erp_confirm_dialog_cancelled_0_listener() { i0.ɵɵrestoreView(_r92); const ctx_r0 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r0.cancelConfirmation()); })("confirmed", function FeeManagementComponent_Conditional_24_Template_erp_confirm_dialog_confirmed_0_listener() { i0.ɵɵrestoreView(_r92); const ctx_r0 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r0.confirmRequestedAction()); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const dialog_r93 = ctx;
    i0.ɵɵproperty("open", true)("eyebrow", dialog_r93.eyebrow)("title", dialog_r93.title)("message", dialog_r93.message)("confirmLabel", dialog_r93.confirmLabel)("destructive", dialog_r93.destructive);
} }
export class FeeManagementComponent {
    api = inject(ApiService);
    route = inject(ActivatedRoute);
    router = inject(Router);
    section = toSignal(this.route.data.pipe(map((data) => (data['section'] || 'books'))), { initialValue: 'books' });
    mode = toSignal(this.route.data.pipe(map((data) => (data['mode'] || 'create'))), { initialValue: 'create' });
    requestedCourseFeeDraftId = toSignal(this.route.queryParamMap.pipe(map((params) => params.get('draft') || '')), { initialValue: '' });
    isCreatePage = computed(() => this.mode() === 'create', ...(ngDevMode ? [{ debugName: "isCreatePage" }] : /* istanbul ignore next */ []));
    isViewPage = computed(() => this.mode() === 'view', ...(ngDevMode ? [{ debugName: "isViewPage" }] : /* istanbul ignore next */ []));
    isImportPage = computed(() => this.mode() === 'import', ...(ngDevMode ? [{ debugName: "isImportPage" }] : /* istanbul ignore next */ []));
    isDraftPage = computed(() => this.mode() === 'drafts', ...(ngDevMode ? [{ debugName: "isDraftPage" }] : /* istanbul ignore next */ []));
    createRoute = computed(() => ({
        books: '/admin/fees/books/create',
        heads: '/admin/fees/heads/create',
        'hostel-fees': '/admin/fees/hostel-fees/create',
        'course-fees': '/admin/fees/course-fees/create',
        'course-fee-view': '/admin/fees/course-fees/create',
    })[this.section()], ...(ngDevMode ? [{ debugName: "createRoute" }] : /* istanbul ignore next */ []));
    viewRoute = computed(() => ({
        books: '/admin/fees/books/view',
        heads: '/admin/fees/heads/view',
        'hostel-fees': '/admin/fees/hostel-fees/view',
        'course-fees': '/admin/fees/course-fees/view',
        'course-fee-view': '/admin/fees/course-fees/view',
    })[this.section()], ...(ngDevMode ? [{ debugName: "viewRoute" }] : /* istanbul ignore next */ []));
    pageTitle = computed(() => ({
        books: this.isViewPage() ? 'Fee Books' : 'Create Fee Book',
        heads: this.isViewPage() ? 'Fee Heads' : 'Create Fee Head',
        'hostel-fees': this.isViewPage() ? 'Hostel Fees' : 'Create Hostel Fee',
        'course-fees': this.isImportPage()
            ? 'Import Course Fees'
            : this.isDraftPage()
                ? 'Course Fee Drafts'
                : 'Create Course Fee',
        'course-fee-view': 'Course Fee View',
    })[this.section()], ...(ngDevMode ? [{ debugName: "pageTitle" }] : /* istanbul ignore next */ []));
    pageDescription = computed(() => ({
        books: this.isViewPage()
            ? 'Search, review and manage configured fee books.'
            : 'Create a college and academic-session fee book.',
        heads: this.isViewPage()
            ? 'Review and manage fee heads for the selected book.'
            : 'Create a reusable payable, discount or payment-option head.',
        'hostel-fees': this.isViewPage()
            ? 'Review configured hostel charges by fee book.'
            : 'Set a hostel charge by seater, room type and frequency.',
        'course-fees': this.isImportPage()
            ? 'Upload, review and map the GEU fee workbook.'
            : this.isDraftPage()
                ? 'Continue incomplete course-fee work without losing entered amounts.'
                : 'Configure an individual course fee.',
        'course-fee-view': 'Review a selected course in a clear year-wise fee-head matrix.',
    })[this.section()], ...(ngDevMode ? [{ debugName: "pageDescription" }] : /* istanbul ignore next */ []));
    books = signal([], ...(ngDevMode ? [{ debugName: "books" }] : /* istanbul ignore next */ []));
    heads = signal([], ...(ngDevMode ? [{ debugName: "heads" }] : /* istanbul ignore next */ []));
    hostelFees = signal([], ...(ngDevMode ? [{ debugName: "hostelFees" }] : /* istanbul ignore next */ []));
    courseFeeViewRecords = signal([], ...(ngDevMode ? [{ debugName: "courseFeeViewRecords" }] : /* istanbul ignore next */ []));
    courseFeeDrafts = signal([], ...(ngDevMode ? [{ debugName: "courseFeeDrafts" }] : /* istanbul ignore next */ []));
    universities = signal([], ...(ngDevMode ? [{ debugName: "universities" }] : /* istanbul ignore next */ []));
    colleges = signal([], ...(ngDevMode ? [{ debugName: "colleges" }] : /* istanbul ignore next */ []));
    academicSessions = signal([], ...(ngDevMode ? [{ debugName: "academicSessions" }] : /* istanbul ignore next */ []));
    departments = signal([], ...(ngDevMode ? [{ debugName: "departments" }] : /* istanbul ignore next */ []));
    levels = signal([], ...(ngDevMode ? [{ debugName: "levels" }] : /* istanbul ignore next */ []));
    courses = signal([], ...(ngDevMode ? [{ debugName: "courses" }] : /* istanbul ignore next */ []));
    domiciles = signal([], ...(ngDevMode ? [{ debugName: "domiciles" }] : /* istanbul ignore next */ []));
    studentTypes = signal([], ...(ngDevMode ? [{ debugName: "studentTypes" }] : /* istanbul ignore next */ []));
    feeTypes = signal([], ...(ngDevMode ? [{ debugName: "feeTypes" }] : /* istanbul ignore next */ []));
    countries = signal([], ...(ngDevMode ? [{ debugName: "countries" }] : /* istanbul ignore next */ []));
    hostels = signal([], ...(ngDevMode ? [{ debugName: "hostels" }] : /* istanbul ignore next */ []));
    preview = signal(null, ...(ngDevMode ? [{ debugName: "preview" }] : /* istanbul ignore next */ []));
    loading = signal(false, ...(ngDevMode ? [{ debugName: "loading" }] : /* istanbul ignore next */ []));
    saving = signal(false, ...(ngDevMode ? [{ debugName: "saving" }] : /* istanbul ignore next */ []));
    message = signal('', ...(ngDevMode ? [{ debugName: "message" }] : /* istanbul ignore next */ []));
    error = signal('', ...(ngDevMode ? [{ debugName: "error" }] : /* istanbul ignore next */ []));
    bookSelectorOpen = signal(false, ...(ngDevMode ? [{ debugName: "bookSelectorOpen" }] : /* istanbul ignore next */ []));
    feeHeadPickerOpen = signal(false, ...(ngDevMode ? [{ debugName: "feeHeadPickerOpen" }] : /* istanbul ignore next */ []));
    feeHeadPickerSearch = signal('', ...(ngDevMode ? [{ debugName: "feeHeadPickerSearch" }] : /* istanbul ignore next */ []));
    selectedCourseFeeHeadIds = signal([], ...(ngDevMode ? [{ debugName: "selectedCourseFeeHeadIds" }] : /* istanbul ignore next */ []));
    feeMatrixAmounts = signal({}, ...(ngDevMode ? [{ debugName: "feeMatrixAmounts" }] : /* istanbul ignore next */ []));
    activeMatrixCell = signal('', ...(ngDevMode ? [{ debugName: "activeMatrixCell" }] : /* istanbul ignore next */ []));
    courseFeeDraftStatus = signal('idle', ...(ngDevMode ? [{ debugName: "courseFeeDraftStatus" }] : /* istanbul ignore next */ []));
    courseFeeDraftSavedAt = signal('', ...(ngDevMode ? [{ debugName: "courseFeeDraftSavedAt" }] : /* istanbul ignore next */ []));
    courseFeeDraftResumePending = signal(false, ...(ngDevMode ? [{ debugName: "courseFeeDraftResumePending" }] : /* istanbul ignore next */ []));
    confirmDialog = signal(null, ...(ngDevMode ? [{ debugName: "confirmDialog" }] : /* istanbul ignore next */ []));
    courseViewFiltersOpen = signal(false, ...(ngDevMode ? [{ debugName: "courseViewFiltersOpen" }] : /* istanbul ignore next */ []));
    courseFeeContextVersion = signal(0, ...(ngDevMode ? [{ debugName: "courseFeeContextVersion" }] : /* istanbul ignore next */ []));
    creationSuccess = signal('', ...(ngDevMode ? [{ debugName: "creationSuccess" }] : /* istanbul ignore next */ []));
    listSearch = signal('', ...(ngDevMode ? [{ debugName: "listSearch" }] : /* istanbul ignore next */ []));
    listStatus = signal('all', ...(ngDevMode ? [{ debugName: "listStatus" }] : /* istanbul ignore next */ []));
    hostelFrequencyFilter = signal('all', ...(ngDevMode ? [{ debugName: "hostelFrequencyFilter" }] : /* istanbul ignore next */ []));
    listPage = signal(ERP_PAGINATION.defaultPage, ...(ngDevMode ? [{ debugName: "listPage" }] : /* istanbul ignore next */ []));
    listPageSize = signal(ERP_PAGINATION.defaultPageSize, ...(ngDevMode ? [{ debugName: "listPageSize" }] : /* istanbul ignore next */ []));
    pageSizeOptions = ERP_PAGINATION.pageSizeOptions;
    statusFilterOptions = [
        { label: 'All statuses', value: 'all' },
        { label: 'Active', value: 'active' },
        { label: 'Disabled', value: 'disabled' },
    ];
    frequencyFilterOptions = [
        { label: 'All frequencies', value: 'all' },
        { label: 'One-time', value: 'one-time' },
        { label: 'Semester wise', value: 'semester' },
        { label: 'Half-yearly', value: 'half-yearly' },
        { label: 'Yearly', value: 'yearly' },
    ];
    editingBook = signal(null, ...(ngDevMode ? [{ debugName: "editingBook" }] : /* istanbul ignore next */ []));
    editingHead = signal(null, ...(ngDevMode ? [{ debugName: "editingHead" }] : /* istanbul ignore next */ []));
    showOnlyNeedsMapping = signal(false, ...(ngDevMode ? [{ debugName: "showOnlyNeedsMapping" }] : /* istanbul ignore next */ []));
    rowActions = [
        { id: 'edit', label: 'Edit', icon: 'edit' },
        { id: 'delete', label: 'Delete', icon: 'delete', destructive: true, separator: true },
    ];
    deleteActions = [
        { id: 'delete', label: 'Delete', icon: 'delete', destructive: true },
    ];
    draftActions = [
        { id: 'edit', label: 'Continue draft', icon: 'edit' },
        { id: 'delete', label: 'Delete draft', icon: 'delete', destructive: true, separator: true },
    ];
    selectedBookId = '';
    bookPickerUniversityId = '';
    bookPickerCollegeId = '';
    bookPickerSession = '';
    bookCollegeId = '';
    bookStartDate = '';
    bookEndDate = '';
    bookSession = '';
    bookCode = '';
    bookFrequency = 'semester';
    headName = '';
    headCategory = 'fee';
    headPriority = 1;
    headDivideSemesterWise = false;
    hostelId = '';
    hostelSeater = 2;
    hostelRoomType = 'Non AC';
    hostelFeeHeadId = '';
    hostelFrequency = 'yearly';
    hostelAmount = null;
    departmentId = '';
    levelId = '';
    courseId = '';
    courseDomicileId = '';
    courseStudentTypeId = '';
    courseFeeTypeId = '';
    courseCountryId = '';
    replaceExisting = true;
    importDomicileId = '';
    importStudentTypeId = '';
    importCountryId = '';
    viewCollegeId = '';
    viewDepartmentId = '';
    viewLevelId = '';
    viewCourseId = '';
    viewDomicileId = '';
    viewStudentTypeId = '';
    viewCountryId = '';
    currentCourseFeeDraftId = '';
    previewPage = 1;
    previewPageSize = 10;
    previewCourseToAdd = {};
    sheetMappings = {};
    headMappings = {};
    courseFeeDraftTimer = null;
    courseFeeDraftDirty = false;
    courseFeeDraftRequestActive = false;
    restoringCourseFeeDraft = false;
    componentDestroyed = false;
    currentBook = () => this.books().find((book) => book._id === this.selectedBookId);
    bookPickerCollegeOptions = () => this.bookPickerUniversityId
        ? this.colleges().filter((college) => college.parentId === this.bookPickerUniversityId)
        : [];
    bookPickerBooks = () => {
        if (!this.bookPickerUniversityId || !this.bookPickerCollegeId || !this.bookPickerSession)
            return [];
        return this.books().filter((book) => book.collegeId === this.bookPickerCollegeId &&
            book.academicSession.trim().toLocaleLowerCase() ===
                this.bookPickerSession.trim().toLocaleLowerCase());
    };
    bookHeads = () => this.heads().filter((head) => head.bookId === this.selectedBookId);
    visibleCourseFeeDrafts = computed(() => this.selectedBookId
        ? this.courseFeeDrafts().filter((draft) => draft.bookId === this.selectedBookId)
        : this.courseFeeDrafts(), ...(ngDevMode ? [{ debugName: "visibleCourseFeeDrafts" }] : /* istanbul ignore next */ []));
    filteredBooks = computed(() => {
        const query = this.listSearch().trim().toLocaleLowerCase();
        const status = this.listStatus();
        return this.books().filter((book) => (!query ||
            [book.code, book.collegeName, book.academicSession].some((value) => value.toLocaleLowerCase().includes(query))) &&
            (status === 'all' || (status === 'active' ? book.isActive : !book.isActive)));
    }, ...(ngDevMode ? [{ debugName: "filteredBooks" }] : /* istanbul ignore next */ []));
    orderedBookHeads = computed(() => [...this.bookHeads()].sort((left, right) => (left.priority || 9999) - (right.priority || 9999) || left.name.localeCompare(right.name)), ...(ngDevMode ? [{ debugName: "orderedBookHeads" }] : /* istanbul ignore next */ []));
    filteredHeads = computed(() => {
        const query = this.listSearch().trim().toLocaleLowerCase();
        const status = this.listStatus();
        return this.orderedBookHeads().filter((head) => (!query ||
            [head.name, head.category, head.bookCode].some((value) => value.toLocaleLowerCase().includes(query))) &&
            (status === 'all' || (status === 'active' ? head.isActive : !head.isActive)));
    }, ...(ngDevMode ? [{ debugName: "filteredHeads" }] : /* istanbul ignore next */ []));
    filteredHostelFees = computed(() => {
        const query = this.listSearch().trim().toLocaleLowerCase();
        const frequency = this.hostelFrequencyFilter();
        return this.hostelFees().filter((fee) => (!query ||
            [fee.hostelName, fee.roomType, fee.feeHeadName, String(fee.seater)].some((value) => value.toLocaleLowerCase().includes(query))) &&
            (frequency === 'all' || fee.frequency === frequency));
    }, ...(ngDevMode ? [{ debugName: "filteredHostelFees" }] : /* istanbul ignore next */ []));
    activeListCount = computed(() => {
        if (this.section() === 'books')
            return this.filteredBooks().length;
        if (this.section() === 'heads')
            return this.filteredHeads().length;
        if (this.section() === 'hostel-fees')
            return this.filteredHostelFees().length;
        return 0;
    }, ...(ngDevMode ? [{ debugName: "activeListCount" }] : /* istanbul ignore next */ []));
    listTotalPages = computed(() => Math.max(1, Math.ceil(this.activeListCount() / this.listPageSize())), ...(ngDevMode ? [{ debugName: "listTotalPages" }] : /* istanbul ignore next */ []));
    safeListPage = computed(() => Math.min(this.listPage(), this.listTotalPages()), ...(ngDevMode ? [{ debugName: "safeListPage" }] : /* istanbul ignore next */ []));
    pagedBooks = computed(() => this.pageSlice(this.filteredBooks()), ...(ngDevMode ? [{ debugName: "pagedBooks" }] : /* istanbul ignore next */ []));
    pagedHeads = computed(() => this.pageSlice(this.filteredHeads()), ...(ngDevMode ? [{ debugName: "pagedHeads" }] : /* istanbul ignore next */ []));
    pagedHostelFees = computed(() => this.pageSlice(this.filteredHostelFees()), ...(ngDevMode ? [{ debugName: "pagedHostelFees" }] : /* istanbul ignore next */ []));
    departmentOptions = () => {
        const collegeId = this.currentBook()?.collegeId;
        return collegeId ? this.departments().filter((item) => item.parentId === collegeId) : [];
    };
    levelOptions = () => this.levels().filter((item) => item.parentId === this.departmentId);
    courseOptions = () => this.courses().filter((item) => item.parentId === this.levelId);
    selectedCourse = () => this.courses().find((course) => course._id === this.courseId);
    filteredPreviewSheets = () => {
        const preview = this.preview();
        if (!preview)
            return [];
        if (!this.showOnlyNeedsMapping())
            return preview.sheets;
        return preview.sheets.filter((sheet) => !this.sheetMappings[sheet.sheetName]?.length);
    };
    pagedPreviewSheets = () => {
        const start = (this.previewPage - 1) * this.previewPageSize;
        return this.filteredPreviewSheets().slice(start, start + this.previewPageSize);
    };
    previewTotalPages = () => Math.max(1, Math.ceil(this.filteredPreviewSheets().length / this.previewPageSize));
    previewCounts = () => {
        const sheets = this.preview()?.sheets || [];
        return {
            total: sheets.length,
            mapped: sheets.filter((sheet) => !!this.sheetMappings[sheet.sheetName]?.length).length,
            needsMapping: sheets.filter((sheet) => !this.sheetMappings[sheet.sheetName]?.length).length,
            lines: sheets.reduce((sum, sheet) => sum + sheet.lineCount, 0),
        };
    };
    viewDepartmentOptions = () => this.viewCollegeId
        ? this.departments().filter((item) => item.parentId === this.viewCollegeId)
        : [];
    viewCollegeOptions = () => {
        const collegeId = this.currentBook()?.collegeId;
        return collegeId ? this.colleges().filter((college) => college._id === collegeId) : [];
    };
    viewLevelOptions = () => this.levels().filter((item) => item.parentId === this.viewDepartmentId);
    viewCourseOptions = () => this.courses().filter((item) => item.parentId === this.viewLevelId);
    selectedViewCourse = () => this.courses().find((course) => course._id === this.viewCourseId);
    selectedCourseStudentType = () => this.studentTypes().find((studentType) => studentType._id === this.courseStudentTypeId);
    selectedCourseDomicile = () => this.domiciles().find((domicile) => domicile._id === this.courseDomicileId);
    selectedCourseFeeType = () => this.feeTypes().find((feeType) => feeType._id === this.courseFeeTypeId);
    selectedImportStudentType = () => this.studentTypes().find((studentType) => studentType._id === this.importStudentTypeId);
    selectedImportDomicile = () => this.domiciles().find((domicile) => domicile._id === this.importDomicileId);
    selectedViewStudentType = () => this.studentTypes().find((studentType) => studentType._id === this.viewStudentTypeId);
    selectedViewDomicile = () => this.domiciles().find((domicile) => domicile._id === this.viewDomicileId);
    courseRequiresCountry = () => this.requiresCountry(this.selectedCourseStudentType(), this.selectedCourseDomicile());
    importRequiresCountry = () => this.requiresCountry(this.selectedImportStudentType(), this.selectedImportDomicile());
    viewRequiresCountry = () => this.requiresCountry(this.selectedViewStudentType(), this.selectedViewDomicile());
    selectedCourseFeeHeads = computed(() => {
        const selectedIds = new Set(this.selectedCourseFeeHeadIds());
        return this.orderedBookHeads().filter((head) => selectedIds.has(head._id));
    }, ...(ngDevMode ? [{ debugName: "selectedCourseFeeHeads" }] : /* istanbul ignore next */ []));
    activeCourseFeeHeads = computed(() => this.orderedBookHeads().filter((head) => head.isActive), ...(ngDevMode ? [{ debugName: "activeCourseFeeHeads" }] : /* istanbul ignore next */ []));
    courseFeePeriodType = computed(() => {
        this.courseFeeContextVersion();
        const feeType = this.selectedCourseFeeType();
        if (!feeType)
            return null;
        if (/semester|sem/i.test(feeType.name))
            return 'semester';
        if (/year|annual/i.test(feeType.name))
            return 'year';
        const configured = feeType.metadata?.['periodType'];
        if (configured === 'year' || configured === 'semester')
            return configured;
        return null;
    }, ...(ngDevMode ? [{ debugName: "courseFeePeriodType" }] : /* istanbul ignore next */ []));
    courseFeePeriods = computed(() => {
        this.courseFeeContextVersion();
        const metadata = this.selectedCourse()?.metadata || {};
        const feePattern = this.courseFeePeriodType();
        if (!feePattern)
            return [];
        const configuredCount = feePattern === 'year'
            ? Number(metadata['durationYears'] || 4)
            : Number(metadata['totalSemesters'] || Number(metadata['durationYears'] || 4) * 2);
        const count = Math.max(1, Math.min(20, configuredCount || 1));
        return Array.from({ length: count }, (_, index) => {
            const number = index + 1;
            return {
                key: `${feePattern}-${number}`,
                type: feePattern,
                number,
                label: feePattern === 'year' ? `${this.ordinal(number)} Year` : `Sem ${number}`,
            };
        });
    }, ...(ngDevMode ? [{ debugName: "courseFeePeriods" }] : /* istanbul ignore next */ []));
    allCourseFeeHeadsSelected = computed(() => !!this.activeCourseFeeHeads().length &&
        this.selectedCourseFeeHeadIds().length === this.activeCourseFeeHeads().length, ...(ngDevMode ? [{ debugName: "allCourseFeeHeadsSelected" }] : /* istanbul ignore next */ []));
    populatedMatrixCellCount = computed(() => Object.values(this.feeMatrixAmounts()).filter((value) => Number(value) > 0).length, ...(ngDevMode ? [{ debugName: "populatedMatrixCellCount" }] : /* istanbul ignore next */ []));
    matrixGrandTotal = computed(() => Object.values(this.feeMatrixAmounts()).reduce((total, value) => total + Math.max(0, Number(value) || 0), 0), ...(ngDevMode ? [{ debugName: "matrixGrandTotal" }] : /* istanbul ignore next */ []));
    courseFeeHeadPickerLabel = computed(() => {
        const selected = this.selectedCourseFeeHeads();
        if (!selected.length)
            return 'Select fee heads';
        if (this.allCourseFeeHeadsSelected())
            return 'All active fee heads';
        if (selected.length === 1)
            return selected[0].name;
        return `${selected.length} fee heads selected`;
    }, ...(ngDevMode ? [{ debugName: "courseFeeHeadPickerLabel" }] : /* istanbul ignore next */ []));
    courseFeeHeadPickerHint = computed(() => {
        const selected = this.selectedCourseFeeHeads();
        if (!selected.length)
            return 'Choose one, multiple, or all heads';
        if (this.allCourseFeeHeadsSelected())
            return `${selected.length} heads will be applied`;
        return selected.map((head) => head.name).join(', ');
    }, ...(ngDevMode ? [{ debugName: "courseFeeHeadPickerHint" }] : /* istanbul ignore next */ []));
    filteredCourseFeeHeads = computed(() => {
        const query = this.feeHeadPickerSearch().trim().toLocaleLowerCase();
        return this.activeCourseFeeHeads().filter((head) => !query ||
            [head.name, head.category].some((value) => value.toLocaleLowerCase().includes(query)));
    }, ...(ngDevMode ? [{ debugName: "filteredCourseFeeHeads" }] : /* istanbul ignore next */ []));
    feeViewSummary = computed(() => {
        const records = this.courseFeeViewRecords();
        return {
            records: records.length,
            heads: new Set(records.map((fee) => fee.feeHeadId)).size,
            years: new Set(records.map((fee) => fee.academicYear).filter(Boolean)).size,
            eligibilityBands: new Set(records.map((fee) => fee.eligibilityBand || 'All candidates')).size,
        };
    }, ...(ngDevMode ? [{ debugName: "feeViewSummary" }] : /* istanbul ignore next */ []));
    feeViewGroups = computed(() => {
        const records = this.courseFeeViewRecords();
        const headPriority = new Map(this.heads().map((head) => [head._id, head.priority || 9999]));
        const groups = new Map();
        for (const fee of records) {
            let key = 'recurring';
            let label = 'Recurring and other charges';
            let description = 'Charges that apply independently of a particular academic year.';
            let order = 900;
            if (fee.frequency === 'one-time') {
                key = 'one-time';
                label = 'One-time charges';
                description = 'Admission-time charges collected once for this course.';
                order = 0;
            }
            else if (fee.academicYear) {
                key = `year-${fee.academicYear}`;
                label = `Academic Year ${fee.academicYear}`;
                description = `All configured fees and payment options for year ${fee.academicYear}.`;
                order = fee.academicYear * 10;
            }
            else if (fee.academicName) {
                key = `academic-${fee.academicId || fee.academicName}`;
                label = fee.academicName;
                description = `Fees configured manually for academic year ${fee.academicName}.`;
                order = 500;
            }
            const group = groups.get(key) || { label, description, order, fees: [] };
            group.fees.push(fee);
            groups.set(key, group);
        }
        return [...groups.entries()]
            .map(([key, group]) => {
            const eligibilityBands = [
                ...new Set(group.fees.map((fee) => fee.eligibilityBand || 'All candidates')),
            ].sort((left, right) => Number(left !== 'All candidates') - Number(right !== 'All candidates') ||
                left.localeCompare(right));
            const rowGroups = new Map();
            for (const fee of group.fees) {
                const rowKey = `${fee.feeHeadId}|${fee.frequency}|${fee.semester || ''}`;
                rowGroups.set(rowKey, [...(rowGroups.get(rowKey) || []), fee]);
            }
            const rows = [...rowGroups.entries()]
                .map(([rowKey, fees]) => {
                const first = fees[0];
                return {
                    key: rowKey,
                    feeHeadName: first.feeHeadName,
                    category: first.category,
                    frequency: first.frequency,
                    semester: first.semester,
                    cells: eligibilityBands.map((eligibilityBand) => {
                        const amounts = [
                            ...new Set(fees
                                .filter((fee) => (fee.eligibilityBand || 'All candidates') === eligibilityBand)
                                .map((fee) => fee.amount)),
                        ].sort((a, b) => a - b);
                        return { eligibilityBand, amounts, conflict: amounts.length > 1 };
                    }),
                    sources: [
                        ...new Set(fees.map((fee) => fee.source === 'excel' ? `Excel: ${fee.sourceSheet}` : 'Manual')),
                    ],
                };
            })
                .sort((left, right) => Number(left.category === 'discount') - Number(right.category === 'discount') ||
                (headPriority.get(left.key.split('|')[0]) || 9999) -
                    (headPriority.get(right.key.split('|')[0]) || 9999) ||
                left.feeHeadName.localeCompare(right.feeHeadName));
            return { key, ...group, eligibilityBands, rows };
        })
            .sort((left, right) => left.order - right.order);
    }, ...(ngDevMode ? [{ debugName: "feeViewGroups" }] : /* istanbul ignore next */ []));
    feeViewMatrices = computed(() => {
        const records = this.courseFeeViewRecords();
        const headPriority = new Map(this.heads().map((head) => [head._id, head.priority || 9999]));
        const matrixBuckets = new Map();
        for (const fee of records) {
            matrixBuckets.set(fee.periodType, [...(matrixBuckets.get(fee.periodType) || []), fee]);
        }
        return [...matrixBuckets.entries()]
            .map(([periodType, fees]) => {
            const columns = new Map();
            const rows = new Map();
            for (const fee of fees) {
                const columnKey = periodType === 'semester'
                    ? `semester-${fee.semester || fee.academicYear || 0}`
                    : `year-${fee.academicYear || fee.semester || fee.academicName || 'one-time'}`;
                const periodNumber = periodType === 'semester'
                    ? fee.semester || fee.academicYear || 0
                    : fee.academicYear || fee.semester || 0;
                const columnLabel = periodType === 'semester'
                    ? `Sem ${periodNumber || '—'}`
                    : fee.academicYear
                        ? `Year ${fee.academicYear}`
                        : fee.academicName || 'One-time';
                const columnHelper = periodType === 'semester' ? 'Semester fee' : 'Academic year fee';
                columns.set(columnKey, columns.get(columnKey) || {
                    key: columnKey,
                    label: columnLabel,
                    helper: columnHelper,
                    order: periodNumber || 999,
                    total: 0,
                });
                const eligibilityBand = fee.eligibilityBand || 'All candidates';
                const rowKey = `${fee.feeHeadId}|${eligibilityBand}`;
                const row = rows.get(rowKey) || {
                    key: rowKey,
                    feeHeadName: fee.feeHeadName,
                    category: fee.category,
                    eligibilityBand,
                    priority: headPriority.get(fee.feeHeadId) || 9999,
                    total: 0,
                    cells: {},
                };
                const cell = row.cells[columnKey] || { amounts: [], conflict: false, sources: [] };
                if (!cell.amounts.includes(fee.amount))
                    cell.amounts.push(fee.amount);
                const source = fee.source === 'excel'
                    ? `Excel${fee.sourceSheet ? `: ${fee.sourceSheet}` : ''}`
                    : 'Manual';
                if (!cell.sources.includes(source))
                    cell.sources.push(source);
                cell.amounts.sort((left, right) => left - right);
                cell.conflict = cell.amounts.length > 1;
                row.cells[columnKey] = cell;
                rows.set(rowKey, row);
            }
            const sortedColumns = [...columns.values()].sort((left, right) => left.order - right.order || left.label.localeCompare(right.label));
            const sortedRows = [...rows.values()]
                .map((row) => ({
                ...row,
                total: sortedColumns.reduce((total, column) => total +
                    (row.cells[column.key]?.amounts || []).reduce((sum, amount) => sum + amount, 0), 0),
            }))
                .sort((left, right) => Number(left.category === 'discount') - Number(right.category === 'discount') ||
                left.priority - right.priority ||
                left.feeHeadName.localeCompare(right.feeHeadName) ||
                left.eligibilityBand.localeCompare(right.eligibilityBand));
            const columnsWithTotals = sortedColumns.map((column) => ({
                ...column,
                total: sortedRows.reduce((total, row) => total +
                    (row.cells[column.key]?.amounts || []).reduce((sum, amount) => sum + amount, 0), 0),
            }));
            return {
                key: periodType,
                title: periodType === 'semester' ? 'Semester-wise fee structure' : 'Year-wise fee structure',
                description: periodType === 'semester'
                    ? 'Compare every fee head across semesters in one horizontal matrix.'
                    : 'Compare every fee head across academic years in one horizontal matrix.',
                columns: columnsWithTotals,
                rows: sortedRows,
                grandTotal: sortedRows.reduce((total, row) => total + row.total, 0),
            };
        })
            .sort((left, right) => Number(left.key === 'semester') - Number(right.key === 'semester'));
    }, ...(ngDevMode ? [{ debugName: "feeViewMatrices" }] : /* istanbul ignore next */ []));
    constructor() {
        effect(() => {
            this.section();
            this.mode();
            const requestedDraftId = this.requestedCourseFeeDraftId();
            const shouldResumeDraft = this.section() === 'course-fees' && this.isCreatePage() && !!requestedDraftId;
            if (!shouldResumeDraft)
                this.courseFeeDraftResumePending.set(false);
            if (shouldResumeDraft && requestedDraftId !== this.currentCourseFeeDraftId) {
                this.courseFeeDraftResumePending.set(true);
                const cachedDraft = this.takeCachedCourseFeeDraft(requestedDraftId);
                if (cachedDraft)
                    this.restoreCourseFeeDraft(cachedDraft);
            }
            this.listSearch.set('');
            this.listStatus.set('all');
            this.hostelFrequencyFilter.set('all');
            this.listPage.set(1);
            this.loadReferenceData();
        });
    }
    ngOnDestroy() {
        this.componentDestroyed = true;
        if (this.courseFeeDraftTimer)
            clearTimeout(this.courseFeeDraftTimer);
        if (this.courseFeeDraftDirty)
            this.saveCourseFeeDraftNow();
    }
    loadReferenceData() {
        this.clearNotices();
        this.loading.set(true);
        this.api.feeBooks().subscribe({
            next: ({ items }) => {
                this.books.set(items);
                const editBookId = this.route.snapshot.paramMap.get('id');
                if (this.section() === 'books' && editBookId) {
                    const editBook = items.find((book) => book._id === editBookId);
                    if (editBook)
                        this.beginBookEdit(editBook);
                }
                this.loadSectionData();
                if (this.section() === 'course-fees' || this.section() === 'course-fee-view') {
                    this.loadCourseFeeDrafts();
                }
            },
            error: (error) => this.fail(error),
        });
        this.api
            .masterValues('university', { active: true })
            .subscribe(({ items }) => this.universities.set(items));
        this.api
            .masterValues('college', { active: true })
            .subscribe(({ items }) => this.colleges.set(items));
        this.api
            .masterValues('academic', { active: true })
            .subscribe(({ items }) => this.academicSessions.set(items));
        this.api
            .masterValues('department', { active: true })
            .subscribe(({ items }) => this.departments.set(items));
        this.api
            .masterValues('level', { active: true })
            .subscribe(({ items }) => this.levels.set(items));
        this.api
            .masterValues('domicile', { active: true })
            .subscribe(({ items }) => this.domiciles.set(items));
        this.api
            .masterValues('student-type', { active: true })
            .subscribe(({ items }) => this.studentTypes.set(items));
        this.loadFeeTypes();
        this.api
            .masterValues('country', { active: true })
            .subscribe(({ items }) => this.countries.set(items));
        this.api.feeCourseOptions().subscribe(({ items }) => this.courses.set(items));
        if (this.section() === 'hostel-fees')
            this.api.hostels().subscribe(({ items }) => this.hostels.set(items));
    }
    loadSectionData() {
        this.api.feeHeads().subscribe({
            next: ({ items }) => {
                this.heads.set(items);
                const editHeadId = this.route.snapshot.paramMap.get('id');
                if (this.section() === 'heads' && editHeadId) {
                    const editHead = items.find((head) => head._id === editHeadId);
                    if (editHead)
                        this.beginHeadEdit(editHead);
                }
                if (this.section() === 'heads')
                    this.loading.set(false);
            },
            error: (error) => this.fail(error),
        });
        if (this.section() === 'books')
            this.loading.set(false);
        if (this.section() === 'hostel-fees')
            this.loadHostelFees();
        if (this.section() === 'course-fees')
            this.loading.set(false);
        if (this.section() === 'course-fee-view') {
            this.viewBookChanged();
            this.loading.set(false);
        }
    }
    loadCourseFeeDrafts() {
        this.api.courseFeeDrafts().subscribe({
            next: ({ items }) => {
                this.courseFeeDrafts.set(items);
                const requestedDraftId = this.requestedCourseFeeDraftId();
                if (requestedDraftId &&
                    this.section() === 'course-fees' &&
                    this.isCreatePage() &&
                    requestedDraftId !== this.currentCourseFeeDraftId) {
                    const draft = items.find((item) => item._id === requestedDraftId);
                    if (draft)
                        this.restoreCourseFeeDraft(draft);
                    else
                        this.loadCourseFeeDraft(requestedDraftId);
                }
                else if (requestedDraftId && requestedDraftId === this.currentCourseFeeDraftId) {
                    this.courseFeeDraftResumePending.set(false);
                }
            },
            error: (error) => this.fail(error),
        });
    }
    loadCourseFeeDraft(draftId) {
        this.api.courseFeeDraft(draftId).subscribe({
            next: ({ item }) => this.restoreCourseFeeDraft(item),
            error: (error) => {
                this.courseFeeDraftResumePending.set(false);
                this.fail(error);
            },
        });
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
    bookChanged() {
        this.listPage.set(1);
        this.preview.set(null);
        this.sheetMappings = {};
        this.headMappings = {};
        this.departmentId = '';
        this.levelId = '';
        this.courseId = '';
        this.courseDomicileId = '';
        this.courseStudentTypeId = '';
        this.courseFeeTypeId = '';
        this.courseCountryId = '';
        this.refreshCourseFeeContext();
        this.clearCourseFeeHead();
        if (this.section() === 'heads' && !this.editingHead())
            this.headPriority = this.orderedBookHeads().length + 1;
        if (this.section() === 'course-fee-view')
            this.viewBookChanged();
        if (this.section() === 'hostel-fees')
            this.loadHostelFees();
        this.scheduleCourseFeeDraftSave();
    }
    selectFeeBook(bookId) {
        this.selectedBookId = bookId;
        this.bookSelectorOpen.set(false);
        this.bookChanged();
    }
    openBookSelector() {
        const current = this.currentBook();
        const college = current ? this.colleges().find((item) => item._id === current.collegeId) : null;
        this.bookPickerUniversityId = college?.parentId || '';
        this.bookPickerCollegeId = current?.collegeId || '';
        this.bookPickerSession = current?.academicSession || '';
        this.bookSelectorOpen.set(true);
    }
    bookPickerUniversityChanged() {
        this.bookPickerCollegeId = '';
        this.bookPickerSession = '';
    }
    bookPickerCollegeChanged() {
        this.bookPickerSession = '';
    }
    resumeCourseFeeDraft(draft) {
        this.courseFeeDraftResumePending.set(true);
        this.cacheCourseFeeDraft(draft);
        this.restoreCourseFeeDraft(draft);
        this.bookSelectorOpen.set(false);
        this.feeHeadPickerOpen.set(false);
        this.clearNotices();
        this.router.navigate(['/admin/fees/course-fees/create'], {
            queryParams: { draft: draft._id },
            state: { courseFeeDraft: draft },
        });
    }
    handleCourseFeeDraftAction(action, draft) {
        if (action === 'edit') {
            this.resumeCourseFeeDraft(draft);
            return;
        }
        if (action === 'delete') {
            this.requestConfirmation({
                eyebrow: 'Fee Management',
                title: 'Delete draft?',
                message: `Delete draft for ${draft.courseName || draft.bookCode}? This cannot be undone.`,
                confirmLabel: 'Delete draft',
                destructive: true,
                action: () => {
                    this.api.deleteCourseFeeDraft(draft._id).subscribe({
                        next: () => {
                            this.courseFeeDrafts.update((items) => items.filter((item) => item._id !== draft._id));
                            this.saved('Course-fee draft deleted.');
                        },
                        error: (error) => this.fail(error),
                    });
                },
            });
        }
    }
    draftAmountCount(draft) {
        return Object.values(draft.matrixAmounts || {}).filter((value) => Number(value) > 0).length;
    }
    scheduleCourseFeeDraftSave() {
        if (this.restoringCourseFeeDraft ||
            this.section() !== 'course-fees' ||
            !this.isCreatePage() ||
            !this.selectedBookId)
            return;
        this.courseFeeDraftDirty = true;
        this.courseFeeDraftStatus.set('saving');
        if (this.courseFeeDraftTimer)
            clearTimeout(this.courseFeeDraftTimer);
        this.courseFeeDraftTimer = setTimeout(() => this.saveCourseFeeDraftNow(), 700);
    }
    saveCourseFeeDraftNow() {
        if (!this.selectedBookId || this.courseFeeDraftRequestActive || !this.courseFeeDraftDirty)
            return;
        this.courseFeeDraftDirty = false;
        this.courseFeeDraftRequestActive = true;
        if (!this.componentDestroyed)
            this.courseFeeDraftStatus.set('saving');
        const payload = {
            bookId: this.selectedBookId,
            departmentId: this.departmentId,
            levelId: this.levelId,
            courseId: this.courseId,
            domicileId: this.courseDomicileId,
            studentTypeId: this.courseStudentTypeId,
            feeTypeId: this.courseFeeTypeId,
            countryId: this.courseCountryId,
            selectedFeeHeadIds: this.selectedCourseFeeHeadIds(),
            matrixAmounts: this.feeMatrixAmounts(),
        };
        const request = this.currentCourseFeeDraftId
            ? this.api.updateCourseFeeDraft(this.currentCourseFeeDraftId, payload)
            : this.api.createCourseFeeDraft(payload);
        request.subscribe({
            next: ({ item }) => {
                this.currentCourseFeeDraftId = item._id;
                this.courseFeeDraftRequestActive = false;
                this.courseFeeDrafts.update((items) => [
                    item,
                    ...items.filter((draft) => draft._id !== item._id),
                ]);
                if (!this.componentDestroyed) {
                    this.courseFeeDraftStatus.set('saved');
                    this.courseFeeDraftSavedAt.set(item.updatedAt);
                    if (this.route.snapshot.queryParamMap.get('draft') !== item._id) {
                        this.router.navigate([], {
                            relativeTo: this.route,
                            queryParams: { draft: item._id },
                            queryParamsHandling: 'merge',
                            replaceUrl: true,
                        });
                    }
                }
                if (this.courseFeeDraftDirty)
                    this.scheduleCourseFeeDraftSave();
            },
            error: () => {
                this.courseFeeDraftRequestActive = false;
                this.courseFeeDraftDirty = true;
                if (!this.componentDestroyed)
                    this.courseFeeDraftStatus.set('error');
            },
        });
    }
    refreshCourseFeeContext() {
        this.courseFeeContextVersion.update((version) => version + 1);
    }
    restoreCourseFeeDraft(draft) {
        this.restoringCourseFeeDraft = true;
        this.currentCourseFeeDraftId = draft._id;
        this.selectedBookId = draft.bookId;
        this.bookSelectorOpen.set(false);
        this.feeHeadPickerOpen.set(false);
        this.departmentId = draft.departmentId || '';
        this.levelId = draft.levelId || '';
        this.courseId = draft.courseId || '';
        this.courseDomicileId = draft.domicileId || '';
        this.courseStudentTypeId = draft.studentTypeId || '';
        this.courseFeeTypeId = draft.feeTypeId || '';
        this.courseCountryId = draft.countryId || '';
        this.selectedCourseFeeHeadIds.set(draft.selectedFeeHeadIds || []);
        this.feeMatrixAmounts.set(draft.matrixAmounts || {});
        this.courseFeeDraftStatus.set('saved');
        this.courseFeeDraftSavedAt.set(draft.updatedAt);
        this.refreshCourseFeeContext();
        this.courseFeeDraftResumePending.set(false);
        this.restoringCourseFeeDraft = false;
    }
    cacheCourseFeeDraft(draft) {
        try {
            sessionStorage.setItem(`erp-course-fee-draft:${draft._id}`, JSON.stringify(draft));
        }
        catch {
            // Draft resume still works through the API if browser storage is unavailable.
        }
    }
    takeCachedCourseFeeDraft(draftId) {
        try {
            const rawDraft = sessionStorage.getItem(`erp-course-fee-draft:${draftId}`);
            if (!rawDraft)
                return null;
            sessionStorage.removeItem(`erp-course-fee-draft:${draftId}`);
            return JSON.parse(rawDraft);
        }
        catch {
            return null;
        }
    }
    openFeeHeadPicker() {
        if (!this.selectedBookId) {
            this.error.set('Select a fee book before choosing a fee head.');
            return;
        }
        this.feeHeadPickerSearch.set('');
        this.feeHeadPickerOpen.set(true);
    }
    selectCourseFeeHead(headId) {
        const selected = new Set(this.selectedCourseFeeHeadIds());
        if (selected.has(headId))
            selected.delete(headId);
        else
            selected.add(headId);
        this.selectedCourseFeeHeadIds.set([...selected]);
        this.scheduleCourseFeeDraftSave();
    }
    selectAllCourseFeeHeads() {
        const activeIds = this.activeCourseFeeHeads().map((head) => head._id);
        this.selectedCourseFeeHeadIds.set(this.allCourseFeeHeadsSelected() ? [] : activeIds);
        this.scheduleCourseFeeDraftSave();
    }
    clearCourseFeeHead() {
        this.selectedCourseFeeHeadIds.set([]);
    }
    feeHeadSelected(headId) {
        return this.selectedCourseFeeHeadIds().includes(headId);
    }
    updateListSearch(value) {
        this.listSearch.set(value);
        this.listPage.set(1);
    }
    updateListStatus(value) {
        this.listStatus.set(value);
        this.listPage.set(1);
    }
    updateHostelFrequency(value) {
        this.hostelFrequencyFilter.set(value);
        this.listPage.set(1);
    }
    updateListPageSize(value) {
        this.listPageSize.set(Number(value));
        this.listPage.set(1);
    }
    setListPage(page) {
        this.listPage.set(Math.min(Math.max(1, page), this.listTotalPages()));
    }
    closeBookSelector() {
        this.bookSelectorOpen.set(false);
        this.feeHeadPickerOpen.set(false);
    }
    saveBook() {
        if (!this.bookCollegeId ||
            !this.bookStartDate ||
            !this.bookEndDate ||
            !this.bookSession.trim() ||
            !this.bookCode.trim())
            return this.error.set('Complete all required book fields.');
        this.startSaving();
        const body = {
            collegeId: this.bookCollegeId,
            startDate: this.bookStartDate,
            endDate: this.bookEndDate,
            academicSession: this.bookSession.trim(),
            code: this.bookCode.trim(),
            frequency: this.bookFrequency,
            isActive: this.editingBook()?.isActive ?? true,
        };
        const request = this.editingBook()
            ? this.api.updateFeeBook(this.editingBook()._id, body)
            : this.api.createFeeBook(body);
        request.subscribe({
            next: () => {
                this.resetBook();
                this.completedCreation('Fee book saved successfully.');
            },
            error: (error) => this.fail(error),
        });
    }
    handleBookAction(action, book) {
        if (action === 'edit') {
            void this.router.navigate(['/admin/fees/books', book._id, 'edit']);
        }
        else if (action === 'delete') {
            this.requestConfirmation({
                eyebrow: 'Fee Management',
                title: 'Delete fee book?',
                message: `Delete fee book ${book.code}? Related records may depend on this book.`,
                confirmLabel: 'Delete book',
                destructive: true,
                action: () => {
                    this.api.deleteFeeBook(book._id).subscribe({
                        next: () => this.saved('Fee book deleted.'),
                        error: (error) => this.fail(error),
                    });
                },
            });
        }
    }
    beginBookEdit(book) {
        this.editingBook.set(book);
        this.bookCollegeId = book.collegeId;
        this.bookStartDate = book.startDate;
        this.bookEndDate = book.endDate;
        this.bookSession = book.academicSession;
        this.bookCode = book.code;
        this.bookFrequency = book.frequency;
    }
    resetBook() {
        this.editingBook.set(null);
        this.bookCollegeId = '';
        this.bookStartDate = '';
        this.bookEndDate = '';
        this.bookSession = '';
        this.bookCode = '';
        this.bookFrequency = 'semester';
    }
    saveHead() {
        if (!this.selectedBookId || !this.headName.trim())
            return this.error.set('Select a fee book and enter the fee-head name.');
        if (!Number.isInteger(Number(this.headPriority)) || Number(this.headPriority) < 1)
            return this.error.set('Priority must be a whole number starting from 1.');
        this.startSaving();
        const request = this.editingHead()
            ? this.api.updateFeeHead(this.editingHead()._id, {
                name: this.headName.trim(),
                category: this.headCategory,
                priority: Number(this.headPriority),
                divideSemesterWise: this.headDivideSemesterWise,
            })
            : this.api.createFeeHead({
                bookId: this.selectedBookId,
                name: this.headName.trim(),
                category: this.headCategory,
                priority: Number(this.headPriority),
                divideSemesterWise: this.headDivideSemesterWise,
            });
        request.subscribe({
            next: () => {
                this.resetHead();
                this.completedCreation('Fee head saved successfully.');
            },
            error: (error) => this.fail(error),
        });
    }
    handleHeadAction(action, head) {
        if (action === 'edit') {
            void this.router.navigate(['/admin/fees/heads', head._id, 'edit']);
        }
        else if (action === 'delete') {
            this.requestConfirmation({
                eyebrow: 'Fee Management',
                title: 'Delete fee head?',
                message: `Delete ${head.name}? This fee head will no longer be available for future fee setup.`,
                confirmLabel: 'Delete head',
                destructive: true,
                action: () => {
                    this.api.deleteFeeHead(head._id).subscribe({
                        next: () => this.saved('Fee head deleted.'),
                        error: (error) => this.fail(error),
                    });
                },
            });
        }
    }
    beginHeadEdit(head) {
        this.editingHead.set(head);
        this.selectedBookId = head.bookId;
        this.headName = head.name;
        this.headCategory = head.category;
        this.headPriority = Number(head.priority || 1);
        this.headDivideSemesterWise = Boolean(head.divideSemesterWise);
    }
    resetHead() {
        this.editingHead.set(null);
        this.headName = '';
        this.headCategory = 'fee';
        this.headPriority = this.orderedBookHeads().length + 1;
        this.headDivideSemesterWise = false;
    }
    saveHostelFee() {
        if (!this.selectedBookId || !this.hostelId || !this.hostelFeeHeadId || !this.hostelAmount)
            return this.error.set('Complete all required hostel-fee fields.');
        this.startSaving();
        this.api
            .createHostelFee({
            bookId: this.selectedBookId,
            hostelId: this.hostelId,
            seater: Number(this.hostelSeater),
            roomType: this.hostelRoomType.trim(),
            feeHeadId: this.hostelFeeHeadId,
            frequency: this.hostelFrequency,
            amount: Number(this.hostelAmount),
        })
            .subscribe({
            next: () => {
                this.hostelAmount = null;
                this.completedCreation('Hostel fee saved successfully.');
            },
            error: (error) => this.fail(error),
        });
    }
    deleteHostelFee(action, fee) {
        if (action === 'delete') {
            this.requestConfirmation({
                eyebrow: 'Fee Management',
                title: 'Delete hostel fee?',
                message: `Delete the ${fee.feeHeadName} charge for ${fee.hostelName}?`,
                confirmLabel: 'Delete fee',
                destructive: true,
                action: () => {
                    this.api.deleteHostelFee(fee._id).subscribe({
                        next: () => this.saved('Hostel fee deleted.'),
                        error: (error) => this.fail(error),
                    });
                },
            });
        }
    }
    saveCourseFee() {
        if (!this.selectedBookId ||
            !this.courseId ||
            !this.courseDomicileId ||
            !this.courseStudentTypeId ||
            !this.courseFeeTypeId ||
            (this.courseRequiresCountry() && !this.courseCountryId))
            return this.error.set('Select department, level, course, domicile, student type, fee type and required country.');
        if (!this.courseFeePeriodType())
            return this.error.set('Selected fee type must represent Yearly or Semester fees.');
        const rows = this.selectedCourseFeeHeadIds()
            .map((feeHeadId) => ({
            feeHeadId,
            amounts: this.courseFeePeriods()
                .map((period) => ({
                periodType: period.type,
                periodNumber: period.number,
                amount: Number(this.feeMatrixAmounts()[this.feeMatrixKey(feeHeadId, period.key)] || 0),
            }))
                .filter((cell) => cell.amount > 0),
        }))
            .filter((row) => row.amounts.length);
        if (!rows.length)
            return this.error.set('Select at least one fee head and enter an amount in the matrix.');
        if (this.courseFeeDraftStatus() === 'saving')
            return this.error.set('Please wait for the current draft save to finish.');
        if (this.courseFeeDraftTimer)
            clearTimeout(this.courseFeeDraftTimer);
        this.courseFeeDraftDirty = false;
        this.startSaving();
        this.api
            .saveCourseFeeMatrix({
            bookId: this.selectedBookId,
            courseId: this.courseId,
            domicileId: this.courseDomicileId,
            studentTypeId: this.courseStudentTypeId,
            feeTypeId: this.courseFeeTypeId,
            countryId: this.courseRequiresCountry() ? this.courseCountryId : null,
            replaceExisting: true,
            rows,
        })
            .subscribe({
            next: ({ saved }) => this.completeCourseFeePublish(saved),
            error: (error) => this.fail(error),
        });
    }
    completeCourseFeePublish(saved) {
        const finish = () => {
            this.currentCourseFeeDraftId = '';
            this.courseFeeDraftStatus.set('idle');
            this.courseFeeDraftSavedAt.set('');
            void this.router
                .navigate([], {
                relativeTo: this.route,
                queryParams: { draft: null },
                queryParamsHandling: 'merge',
                replaceUrl: true,
            })
                .then(() => this.completedCreation(`${saved} course-fee amount(s) saved successfully.`));
        };
        if (!this.currentCourseFeeDraftId)
            return finish();
        this.api.deleteCourseFeeDraft(this.currentCourseFeeDraftId).subscribe({
            next: finish,
            error: finish,
        });
    }
    previewWorkbook(event) {
        const file = event.target.files?.[0];
        if (!file ||
            !this.selectedBookId ||
            !this.importDomicileId ||
            !this.importStudentTypeId ||
            (this.importRequiresCountry() && !this.importCountryId))
            return this.error.set('Select a fee book, domicile, student type and required country, then choose an .xlsx file.');
        this.startSaving();
        this.api
            .previewCourseFeeImport(this.selectedBookId, this.importDomicileId, this.importStudentTypeId, this.importRequiresCountry() ? this.importCountryId : '', file)
            .subscribe({
            next: ({ preview }) => {
                this.preview.set(preview);
                this.sheetMappings = Object.fromEntries(preview.sheets.map((sheet) => [
                    sheet.sheetName,
                    sheet.match.courseId ? [sheet.match.courseId] : [],
                ]));
                this.previewPage = 1;
                this.previewPageSize = 10;
                this.previewCourseToAdd = {};
                this.headMappings = Object.fromEntries(preview.headMappings.map((head) => [head.sourceHead, head.feeHeadId || '']));
                this.message.set(`Workbook analysed: ${preview.sheets.length} sheets found.`);
                this.saving.set(false);
            },
            error: (error) => this.fail(error),
        });
    }
    commitImport() {
        const preview = this.preview();
        if (!preview)
            return;
        const mappedSheets = Object.values(this.sheetMappings).filter((courseIds) => courseIds.length).length;
        const mappedHeads = Object.values(this.headMappings).filter(Boolean).length;
        if (!mappedSheets || !mappedHeads)
            return this.error.set('Map at least one course sheet and one fee head before importing.');
        this.startSaving();
        this.api
            .commitCourseFeeImport({
            previewId: preview._id,
            sheetMappings: preview.sheets.map((sheet) => ({
                sheetName: sheet.sheetName,
                courseIds: this.sheetMappings[sheet.sheetName] || [],
            })),
            headMappings: preview.headMappings.map((head) => ({
                sourceHead: head.sourceHead,
                feeHeadId: this.headMappings[head.sourceHead] || null,
            })),
            replaceExisting: this.replaceExisting,
        })
            .subscribe({
            next: ({ imported, mappedSheets }) => {
                this.preview.set(null);
                this.sheetMappings = {};
                this.headMappings = {};
                this.message.set(`${imported} fee rows imported from ${mappedSheets} course sheets.`);
                this.saving.set(false);
            },
            error: (error) => this.fail(error),
        });
    }
    loadHostelFees() {
        this.api.hostelFees(this.selectedBookId).subscribe({
            next: ({ items }) => {
                this.hostelFees.set(items);
                this.loading.set(false);
            },
            error: (error) => this.fail(error),
        });
    }
    departmentChanged() {
        this.levelId = '';
        this.courseId = '';
        this.refreshCourseFeeContext();
        this.clearCourseFeeMatrix();
        this.scheduleCourseFeeDraftSave();
    }
    levelChanged() {
        this.courseId = '';
        this.refreshCourseFeeContext();
        this.clearCourseFeeMatrix();
        this.scheduleCourseFeeDraftSave();
    }
    courseChanged() {
        this.refreshCourseFeeContext();
        this.clearCourseFeeMatrix();
        this.scheduleCourseFeeDraftSave();
    }
    courseFeeTypeChanged() {
        this.refreshCourseFeeContext();
        this.clearCourseFeeMatrix();
        this.scheduleCourseFeeDraftSave();
    }
    loadFeeTypes() {
        this.api.masterValues('fee-type', { active: true }).subscribe({
            next: ({ items }) => this.feeTypes.set(items),
            error: (error) => this.fail(error),
        });
    }
    feeMatrixKey(headId, periodKey) {
        return `${headId}__${periodKey}`;
    }
    matrixCellKey(headId, periodKey) {
        return this.feeMatrixKey(headId, periodKey);
    }
    feeMatrixValue(headId, periodKey) {
        return this.feeMatrixAmounts()[this.feeMatrixKey(headId, periodKey)] ?? null;
    }
    updateFeeMatrixAmount(headId, periodKey, value) {
        const amount = value === '' || value === null ? null : Number(value);
        this.feeMatrixAmounts.update((amounts) => ({
            ...amounts,
            [this.feeMatrixKey(headId, periodKey)]: Number.isFinite(amount) ? amount : null,
        }));
        if (Number(amount) > 0 && !this.feeHeadSelected(headId))
            this.selectCourseFeeHead(headId);
        this.scheduleCourseFeeDraftSave();
    }
    fillRowFromCell(headId, periodKey) {
        const value = this.feeMatrixValue(headId, periodKey);
        if (!Number(value))
            return;
        this.feeMatrixAmounts.update((amounts) => {
            const next = { ...amounts };
            for (const period of this.courseFeePeriods()) {
                next[this.feeMatrixKey(headId, period.key)] = Number(value);
            }
            return next;
        });
        if (!this.feeHeadSelected(headId))
            this.selectCourseFeeHead(headId);
        this.scheduleCourseFeeDraftSave();
    }
    fillColumnFromCell(headId, periodKey) {
        const value = this.feeMatrixValue(headId, periodKey);
        if (!Number(value))
            return;
        const selected = this.selectedCourseFeeHeadIds();
        const targetHeadIds = selected.length > 1 ? selected : this.activeCourseFeeHeads().map((head) => head._id);
        this.feeMatrixAmounts.update((amounts) => {
            const next = { ...amounts };
            for (const targetHeadId of targetHeadIds) {
                next[this.feeMatrixKey(targetHeadId, periodKey)] = Number(value);
            }
            return next;
        });
        this.selectedCourseFeeHeadIds.set([...new Set([...selected, ...targetHeadIds])]);
        this.scheduleCourseFeeDraftSave();
    }
    fillMatrixFromCell(event, headId, periodKey) {
        event.preventDefault();
        if (event.shiftKey)
            this.fillColumnFromCell(headId, periodKey);
        else
            this.fillRowFromCell(headId, periodKey);
    }
    handleMatrixKeydown(event, rowIndex, columnIndex, headId, periodKey) {
        if ((event.ctrlKey || event.metaKey) && event.key.toLocaleLowerCase() === 'r') {
            event.preventDefault();
            this.fillRowFromCell(headId, periodKey);
            return;
        }
        if ((event.ctrlKey || event.metaKey) && event.key.toLocaleLowerCase() === 'd') {
            event.preventDefault();
            this.fillColumnFromCell(headId, periodKey);
            return;
        }
        const movement = {
            ArrowUp: [-1, 0],
            ArrowDown: [1, 0],
            ArrowLeft: [0, -1],
            ArrowRight: [0, 1],
            Enter: [event.shiftKey ? -1 : 1, 0],
        };
        const direction = movement[event.key];
        if (!direction)
            return;
        event.preventDefault();
        const nextRow = Math.max(0, Math.min(this.activeCourseFeeHeads().length - 1, rowIndex + direction[0]));
        const nextColumn = Math.max(0, Math.min(this.courseFeePeriods().length - 1, columnIndex + direction[1]));
        const table = event.currentTarget.closest('table');
        const target = table?.querySelector(`[data-matrix-row="${nextRow}"][data-matrix-column="${nextColumn}"]`);
        target?.focus();
        target?.select();
    }
    pasteMatrixValues(event, startRow, startColumn) {
        const clipboard = event.clipboardData?.getData('text/plain').trim();
        if (!clipboard)
            return;
        const rows = clipboard.split(/\r?\n/).map((row) => row.split('\t'));
        const heads = this.activeCourseFeeHeads();
        const periods = this.courseFeePeriods();
        const updates = {};
        const touchedHeads = new Set();
        rows.forEach((row, rowOffset) => {
            const head = heads[startRow + rowOffset];
            if (!head)
                return;
            row.forEach((rawValue, columnOffset) => {
                const period = periods[startColumn + columnOffset];
                if (!period)
                    return;
                const normalized = rawValue.replace(/,/g, '').replace(/[^\d.-]/g, '');
                const amount = Number(normalized);
                if (!normalized || !Number.isFinite(amount) || amount < 0)
                    return;
                updates[this.feeMatrixKey(head._id, period.key)] = amount;
                touchedHeads.add(head._id);
            });
        });
        if (!Object.keys(updates).length)
            return;
        event.preventDefault();
        this.feeMatrixAmounts.update((amounts) => ({ ...amounts, ...updates }));
        this.selectedCourseFeeHeadIds.update((selected) => [
            ...new Set([...selected, ...touchedHeads]),
        ]);
        this.scheduleCourseFeeDraftSave();
    }
    selectMatrixValue(event) {
        event.target?.select();
    }
    addPreviewCourse(sheetName) {
        const courseId = this.previewCourseToAdd[sheetName];
        if (!courseId)
            return;
        const current = this.sheetMappings[sheetName] || [];
        if (!current.includes(courseId))
            this.sheetMappings[sheetName] = [...current, courseId];
        this.previewCourseToAdd[sheetName] = '';
    }
    removePreviewCourse(sheetName, courseId) {
        this.sheetMappings[sheetName] = (this.sheetMappings[sheetName] || []).filter((value) => value !== courseId);
    }
    previewMappingStatus(sheet) {
        const selected = this.sheetMappings[sheet.sheetName] || [];
        if (!selected.length)
            return sheet.match.status === 'ambiguous' ? 'Ambiguous' : 'Unmapped';
        if (selected.length === 1 && selected[0] === sheet.match.courseId)
            return 'Auto-mapped';
        return 'Manually mapped';
    }
    courseName(courseId) {
        return this.courses().find((course) => course._id === courseId)?.name || 'Unknown course';
    }
    setPreviewPageSize(value) {
        this.previewPageSize = Number(value);
        this.previewPage = 1;
    }
    setPreviewPage(page) {
        this.previewPage = Math.min(Math.max(1, page), this.previewTotalPages());
    }
    viewBookChanged() {
        this.viewCollegeId = this.currentBook()?.collegeId || '';
        this.viewDepartmentId = '';
        this.viewLevelId = '';
        this.viewCourseId = '';
        this.viewDomicileId = '';
        this.viewStudentTypeId = '';
        this.viewCountryId = '';
        this.courseFeeViewRecords.set([]);
    }
    viewCollegeChanged() {
        this.viewDepartmentId = '';
        this.viewLevelId = '';
        this.viewCourseId = '';
        this.viewDomicileId = '';
        this.viewStudentTypeId = '';
        this.viewCountryId = '';
        this.courseFeeViewRecords.set([]);
    }
    viewDepartmentChanged() {
        this.viewLevelId = '';
        this.viewCourseId = '';
        this.viewDomicileId = '';
        this.viewStudentTypeId = '';
        this.viewCountryId = '';
        this.courseFeeViewRecords.set([]);
    }
    viewLevelChanged() {
        this.viewCourseId = '';
        this.courseFeeViewRecords.set([]);
    }
    viewDomicileChanged() {
        this.courseFeeViewRecords.set([]);
    }
    viewStudentTypeChanged() {
        this.viewCountryId = '';
        this.courseFeeViewRecords.set([]);
    }
    courseStudentTypeChanged() {
        this.courseCountryId = '';
        this.scheduleCourseFeeDraftSave();
    }
    importStudentTypeChanged() {
        this.importCountryId = '';
        this.preview.set(null);
    }
    viewCountryChanged() {
        this.courseFeeViewRecords.set([]);
    }
    loadCourseFeeView() {
        if (!this.selectedBookId ||
            !this.viewCollegeId ||
            !this.viewDepartmentId ||
            !this.viewLevelId ||
            !this.viewCourseId ||
            !this.viewDomicileId ||
            !this.viewStudentTypeId ||
            (this.viewRequiresCountry() && !this.viewCountryId))
            return this.error.set('Select the book, college, department, level, course, domicile, student type and required country.');
        this.clearNotices();
        this.loading.set(true);
        this.api
            .courseFees(this.selectedBookId, this.viewCourseId, this.viewDomicileId, this.viewStudentTypeId, this.viewRequiresCountry() ? this.viewCountryId : '')
            .subscribe({
            next: ({ items }) => {
                this.courseFeeViewRecords.set(items);
                this.courseViewFiltersOpen.set(false);
                this.loading.set(false);
                if (!items.length)
                    this.message.set('No fees are configured for the selected course and book.');
            },
            error: (error) => this.fail(error),
        });
    }
    saved(message) {
        this.creationSuccess.set('');
        this.message.set(message);
        this.saving.set(false);
        this.loadReferenceData();
    }
    completedCreation(message) {
        this.creationSuccess.set(message);
        this.message.set('');
        this.saving.set(false);
        this.loadReferenceData();
        this.creationSuccess.set(message);
    }
    pageSlice(items) {
        const start = (this.safeListPage() - 1) * this.listPageSize();
        return items.slice(start, start + this.listPageSize());
    }
    startSaving() {
        this.clearNotices();
        this.creationSuccess.set('');
        this.saving.set(true);
    }
    clearNotices() {
        this.message.set('');
        this.error.set('');
    }
    requiresCountry(studentType, domicile) {
        return /foreign|international|nri/i.test(`${studentType?.name || ''} ${domicile?.name || ''}`);
    }
    clearCourseFeeMatrix() {
        this.selectedCourseFeeHeadIds.set([]);
        this.feeMatrixAmounts.set({});
        this.activeMatrixCell.set('');
    }
    ordinal(value) {
        const suffix = value === 1 ? 'st' : value === 2 ? 'nd' : value === 3 ? 'rd' : 'th';
        return `${value}${suffix}`;
    }
    fail(error) {
        this.error.set(error?.error?.message || error?.message || 'The request could not be completed.');
        this.loading.set(false);
        this.saving.set(false);
    }
    static ɵfac = function FeeManagementComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || FeeManagementComponent)(); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: FeeManagementComponent, selectors: [["erp-fee-management"]], hostBindings: function FeeManagementComponent_HostBindings(rf, ctx) { if (rf & 1) {
            i0.ɵɵlistener("keydown.escape", function FeeManagementComponent_keydown_escape_HostBindingHandler() { return ctx.closeBookSelector(); }, i0.ɵɵresolveDocument);
        } }, decls: 25, vars: 22, consts: [["eyebrow", "Fee Management", "variant", "minimal", 3, "layout", "title", "description"], ["page-actions", "", 1, "fee-page-actions"], [1, "erp-button", "erp-button--primary", 3, "routerLink"], ["type", "button", 1, "erp-button", "erp-button--secondary", 3, "click"], ["role", "status", 1, "erp-success-panel"], ["role", "status", 1, "erp-notice", "erp-notice--success"], ["role", "alert", 1, "erp-notice", "erp-notice--error"], [1, "erp-card", "erp-card--padded", "erp-context-card"], [1, "erp-card", "erp-card--padded", "erp-create-card"], [1, "erp-card", "erp-table-shell"], [1, "erp-card", "erp-card--padded", "erp-create-card", "fee-section-gap"], [1, "erp-card", "erp-table-shell", "fee-section-gap"], ["role", "dialog", "aria-modal", "true", "aria-labelledby", "fee-book-selector-title", 1, "dialog-layer"], ["role", "dialog", "aria-modal", "true", "aria-labelledby", "fee-head-picker-title", 1, "dialog-layer"], [3, "open", "eyebrow", "title", "message", "confirmLabel", "destructive"], ["routerLink", "/admin/fees/course-fees/drafts", 1, "erp-button", "erp-button--secondary"], [1, "erp-button", "erp-button--secondary", 3, "routerLink"], ["aria-hidden", "true", 1, "erp-success-panel__mark"], [1, "erp-success-panel__actions"], [1, "erp-page-header__eyebrow"], [1, "fee-working-context"], [1, "fee-context-gate"], ["src", "assets/admin/finance-icons/fee-books.png", "alt", "", "aria-hidden", "true"], ["type", "button", 1, "erp-button", "erp-button--primary", 3, "click"], [1, "erp-card__header"], [1, "fee-form-grid"], [1, "erp-field-stack"], [1, "erp-control", 3, "ngModelChange", "ngModel"], ["value", ""], [3, "value"], ["type", "date", 1, "erp-control", 3, "ngModelChange", "ngModel"], ["placeholder", "e.g. GEU-2026", 1, "erp-control", 3, "ngModelChange", "ngModel"], ["value", "semester"], ["value", "year"], [1, "fee-form-actions"], ["type", "button", 1, "erp-button", "erp-button--secondary"], ["type", "button", 1, "erp-button", "erp-button--primary", 3, "click", "disabled"], ["routerLink", "/admin/master-data/academic"], [1, "erp-table-toolbar"], [1, "erp-table-toolbar__actions"], [1, "erp-search-control"], [1, "erp-sr-only"], ["type", "search", "placeholder", "Search code, college or session", 3, "input", "value"], ["label", "Status filters", 3, "valueChange", "options", "value"], [1, "erp-table-shell__scroll"], [1, "erp-table-shell__actions"], [1, "erp-pagination"], [1, "erp-pagination__pages"], ["aria-label", "Rows per page", 1, "erp-control", "erp-pagination__size", 3, "ngModelChange", "ngModel"], [3, "ngValue"], ["type", "button", "aria-label", "Previous page", 1, "erp-pagination__button", 3, "click", "disabled"], ["type", "button", "aria-current", "page", 1, "erp-pagination__button", "erp-pagination__button--active"], ["type", "button", "aria-label", "Next page", 1, "erp-pagination__button", 3, "click", "disabled"], [1, "erp-status"], [3, "selected", "items"], ["colspan", "7", 1, "erp-empty-state"], [1, "fee-inline-form"], ["placeholder", "e.g. Tuition Fee", 1, "erp-control", 3, "ngModelChange", "ngModel"], ["value", "fee"], ["value", "discount"], ["value", "payment-option"], ["type", "number", "min", "1", 1, "erp-control", 3, "ngModelChange", "max", "ngModel"], ["type", "search", "placeholder", "Search head name or category", 3, "input", "value"], [1, "fee-priority-pill"], ["list", "fee-room-types", "placeholder", "AC, Non AC or custom", 1, "erp-control", 3, "ngModelChange", "ngModel"], ["id", "fee-room-types"], ["value", "AC"], ["value", "Non AC"], ["value", "one-time"], ["value", "half-yearly"], ["value", "yearly"], ["type", "number", "min", "0", "step", "0.01", 1, "erp-control", 3, "ngModelChange", "ngModel"], ["type", "search", "placeholder", "Search hostel, room or head", 3, "input", "value"], ["label", "Frequency filters", 3, "valueChange", "options", "value"], ["colspan", "6", 1, "erp-empty-state"], ["role", "status", 1, "erp-notice", "erp-notice--warning"], ["routerLink", "/admin/master-data/course"], ["role", "status", 1, "course-fee-draft-state"], [1, "erp-control", 3, "ngModelChange", "focus", "ngModel"], [1, "fee-matrix-workspace"], [1, "erp-empty-state", "fee-section-gap"], [1, "course-fee-draft-state__pulse"], [1, "course-fee-draft-state__check"], ["routerLink", "/admin/master-data/domicile"], ["routerLink", "/admin/master-data/student-type"], ["routerLink", "/admin/master-data/fee-type"], ["routerLink", "/admin/master-data/country"], [1, "fee-matrix-workspace__header"], ["aria-label", "Matrix summary", 1, "fee-matrix-context"], [1, "erp-table-shell__scroll", "fee-matrix-editor"], [1, "fee-matrix-table", "fee-matrix-table--editable"], [1, "fee-matrix-table__select"], ["type", "checkbox", "aria-label", "Select all fee heads", 3, "change", "checked"], [1, "fee-matrix-period"], [3, "fee-matrix-row--selected"], [1, "fee-matrix-workspace__footer"], [1, "fee-row-selector"], ["type", "checkbox", 3, "change", "checked"], [1, "fee-matrix-head"], [1, "fee-matrix-cell"], ["aria-hidden", "true"], ["type", "number", "min", "0", "step", "0.01", "inputmode", "decimal", "placeholder", "0.00", "title", "Double-click to fill row; Shift + double-click to fill column", 1, "fee-matrix-amount", 3, "focus", "paste", "dblclick", "keydown", "ngModelChange", "ngModel"], [1, "erp-empty-state"], [1, "fee-upload-row"], ["type", "file", "accept", ".xlsx", 1, "erp-control", 3, "change", "disabled"], [1, "erp-card", "erp-card--padded", "fee-section-gap"], [1, "fee-mapping-summary"], [1, "fee-checkbox"], [1, "erp-card__header", "fee-list-header"], [1, "erp-field-stack", "fee-page-size"], [1, "fee-mapping-card-list"], [1, "fee-mapping-card"], [1, "erp-pagination", "fee-pagination"], ["type", "button", 1, "erp-pagination__button", "erp-pagination__button--active"], [1, "fee-import-actions"], ["type", "checkbox", 3, "ngModelChange", "ngModel"], [1, "fee-mapping-card__header"], [1, "fee-sheet-name"], [1, "fee-mapping-card__body"], [1, "fee-detected-details"], [1, "fee-suggestion"], [1, "fee-warning"], [1, "fee-assignment-editor"], [1, "fee-course-chips"], [1, "fee-course-chip"], [1, "fee-unmapped-copy"], [1, "fee-course-picker"], [3, "value", "disabled"], ["type", "button", 1, "erp-button", "erp-button--secondary", 3, "click", "disabled"], ["type", "button", 3, "click"], [1, "erp-card", "erp-table-shell", "course-fee-drafts"], [1, "erp-card", "erp-card--padded", "erp-empty-state"], [1, "erp-status", "erp-status--neutral"], [1, "erp-card", "erp-card--padded", "fee-section-gap", "erp-empty-state"], [1, "fee-course-explorer"], ["src", "assets/admin/finance-icons/course-fees.png", "alt", "", "aria-hidden", "true"], ["lucideFilter", "", "size", "16", "aria-hidden", "true"], [1, "erp-drawer-layer"], ["type", "button", "aria-label", "Close course fee filters", 1, "erp-drawer-backdrop", 3, "click"], ["role", "dialog", "aria-modal", "true", "aria-labelledby", "course-fee-filter-title", "cdkTrapFocus", "", 1, "erp-drawer", "fee-view-filter-drawer", 3, "cdkTrapFocusAutoCapture"], [1, "erp-drawer__header"], [1, "erp-drawer__icon", "fee-view-filter-drawer__icon"], ["id", "course-fee-filter-title"], ["type", "button", "aria-label", "Close course fee filters", 1, "erp-icon-button", 3, "click"], ["lucideX", "", "size", "17", "aria-hidden", "true"], [1, "erp-drawer__body"], [1, "fee-view-filter-grid"], ["type", "button", 1, "erp-control", "fee-picker-control", 3, "click"], [1, "erp-drawer__footer"], [1, "erp-card", "erp-card--padded", "fee-section-gap", "fee-view-heading"], [1, "fee-view-summary"], [1, "erp-card", "erp-table-shell", "fee-section-gap", "fee-structure-matrix"], [1, "erp-table-toolbar", "fee-structure-matrix__header"], [1, "fee-structure-matrix__meta"], [1, "erp-table-shell__scroll", "fee-matrix-scroll"], [1, "fee-matrix-table", "fee-view-matrix-table"], ["colspan", "3"], [1, "fee-amount-cell", 3, "fee-amount-cell--conflict"], [1, "fee-amount-cell", "fee-amount-cell--total"], [1, "fee-amount-cell"], ["type", "button", "aria-label", "Close fee book selector", 1, "dialog-backdrop", 3, "click"], [1, "dialog", "erp-record-picker", "fee-book-picker"], [1, "dialog__header"], ["id", "fee-book-selector-title"], ["type", "button", "aria-label", "Close", 3, "click"], [1, "dialog__body", "fee-book-picker__body"], [1, "fee-book-picker__filters"], [1, "erp-control", 3, "ngModelChange", "ngModel", "disabled"], ["aria-live", "polite", 1, "fee-book-picker__results"], [1, "dialog__footer"], ["type", "button", 1, "erp-record-picker__option", 3, "active"], ["type", "button", 1, "erp-record-picker__option", 3, "click"], ["type", "button", "aria-label", "Close fee head selector", 1, "dialog-backdrop", 3, "click"], [1, "dialog", "erp-record-picker", "fee-head-picker"], ["id", "fee-head-picker-title"], [1, "dialog__body", "erp-record-picker__options"], [1, "erp-search-control", "fee-head-picker__search"], ["type", "search", "placeholder", "Search fee head or category", 3, "input", "value"], ["type", "button", 1, "erp-record-picker__option", "fee-head-picker__all", 3, "click"], ["aria-hidden", "true", 1, "fee-picker-check"], ["type", "button", 1, "erp-record-picker__option", "fee-head-picker__row", 3, "active"], [1, "fee-head-picker__count"], ["type", "button", 1, "erp-record-picker__option", "fee-head-picker__row", 3, "click"], [3, "cancelled", "confirmed", "open", "eyebrow", "title", "message", "confirmLabel", "destructive"]], template: function FeeManagementComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "erp-admin-page", 0)(1, "div", 1);
            i0.ɵɵconditionalCreate(2, FeeManagementComponent_Conditional_2_Template, 2, 1, "a", 2)(3, FeeManagementComponent_Conditional_3_Template, 3, 2);
            i0.ɵɵelementStart(4, "button", 3);
            i0.ɵɵlistener("click", function FeeManagementComponent_Template_button_click_4_listener() { return ctx.loadReferenceData(); });
            i0.ɵɵtext(5, " Refresh ");
            i0.ɵɵelementEnd()();
            i0.ɵɵconditionalCreate(6, FeeManagementComponent_Conditional_6_Template, 13, 2, "section", 4)(7, FeeManagementComponent_Conditional_7_Template, 2, 1, "p", 5);
            i0.ɵɵconditionalCreate(8, FeeManagementComponent_Conditional_8_Template, 2, 1, "p", 6);
            i0.ɵɵconditionalCreate(9, FeeManagementComponent_Conditional_9_Template, 8, 0, "section", 7);
            i0.ɵɵconditionalCreate(10, FeeManagementComponent_Conditional_10_Template, 2, 1);
            i0.ɵɵconditionalCreate(11, FeeManagementComponent_Conditional_11_Template, 49, 11, "section", 8);
            i0.ɵɵconditionalCreate(12, FeeManagementComponent_Conditional_12_Template, 50, 13, "section", 9);
            i0.ɵɵconditionalCreate(13, FeeManagementComponent_Conditional_13_Template, 41, 11, "section", 10);
            i0.ɵɵconditionalCreate(14, FeeManagementComponent_Conditional_14_Template, 50, 13, "section", 11);
            i0.ɵɵconditionalCreate(15, FeeManagementComponent_Conditional_15_Template, 56, 8, "section", 10);
            i0.ɵɵconditionalCreate(16, FeeManagementComponent_Conditional_16_Template, 48, 13, "section", 11);
            i0.ɵɵconditionalCreate(17, FeeManagementComponent_Conditional_17_Template, 1, 1);
            i0.ɵɵconditionalCreate(18, FeeManagementComponent_Conditional_18_Template, 69, 14, "section", 8);
            i0.ɵɵconditionalCreate(19, FeeManagementComponent_Conditional_19_Template, 32, 5);
            i0.ɵɵconditionalCreate(20, FeeManagementComponent_Conditional_20_Template, 2, 1);
            i0.ɵɵconditionalCreate(21, FeeManagementComponent_Conditional_21_Template, 3, 2);
            i0.ɵɵconditionalCreate(22, FeeManagementComponent_Conditional_22_Template, 43, 6, "div", 12);
            i0.ɵɵconditionalCreate(23, FeeManagementComponent_Conditional_23_Template, 39, 8, "div", 13);
            i0.ɵɵconditionalCreate(24, FeeManagementComponent_Conditional_24_Template, 1, 6, "erp-confirm-dialog", 14);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            let tmp_21_0;
            i0.ɵɵproperty("layout", ctx.isViewPage() || ctx.isDraftPage() ? "collection" : "default")("title", ctx.pageTitle())("description", ctx.pageDescription());
            i0.ɵɵadvance(2);
            i0.ɵɵconditional(ctx.isViewPage() || ctx.isDraftPage() ? 2 : 3);
            i0.ɵɵadvance(4);
            i0.ɵɵconditional(ctx.creationSuccess() ? 6 : ctx.message() ? 7 : -1);
            i0.ɵɵadvance(2);
            i0.ɵɵconditional(ctx.error() ? 8 : -1);
            i0.ɵɵadvance();
            i0.ɵɵconditional(ctx.courseFeeDraftResumePending() ? 9 : -1);
            i0.ɵɵadvance();
            i0.ɵɵconditional(ctx.section() !== "books" && !ctx.isDraftPage() && !ctx.courseFeeDraftResumePending() ? 10 : -1);
            i0.ɵɵadvance();
            i0.ɵɵconditional(ctx.section() === "books" && ctx.isCreatePage() ? 11 : -1);
            i0.ɵɵadvance();
            i0.ɵɵconditional(ctx.section() === "books" && ctx.isViewPage() ? 12 : -1);
            i0.ɵɵadvance();
            i0.ɵɵconditional(ctx.section() === "heads" && ctx.isCreatePage() && ctx.selectedBookId ? 13 : -1);
            i0.ɵɵadvance();
            i0.ɵɵconditional(ctx.section() === "heads" && ctx.isViewPage() && ctx.selectedBookId ? 14 : -1);
            i0.ɵɵadvance();
            i0.ɵɵconditional(ctx.section() === "hostel-fees" && ctx.isCreatePage() && ctx.selectedBookId ? 15 : -1);
            i0.ɵɵadvance();
            i0.ɵɵconditional(ctx.section() === "hostel-fees" && ctx.isViewPage() && ctx.selectedBookId ? 16 : -1);
            i0.ɵɵadvance();
            i0.ɵɵconditional(ctx.section() === "course-fees" && ctx.isCreatePage() && ctx.selectedBookId ? 17 : -1);
            i0.ɵɵadvance();
            i0.ɵɵconditional(ctx.section() === "course-fees" && ctx.isCreatePage() && ctx.selectedBookId ? 18 : -1);
            i0.ɵɵadvance();
            i0.ɵɵconditional(ctx.section() === "course-fees" && ctx.isImportPage() && ctx.selectedBookId ? 19 : -1);
            i0.ɵɵadvance();
            i0.ɵɵconditional(ctx.section() === "course-fees" && ctx.isDraftPage() ? 20 : -1);
            i0.ɵɵadvance();
            i0.ɵɵconditional(ctx.section() === "course-fee-view" ? 21 : -1);
            i0.ɵɵadvance();
            i0.ɵɵconditional(ctx.bookSelectorOpen() ? 22 : -1);
            i0.ɵɵadvance();
            i0.ɵɵconditional(ctx.feeHeadPickerOpen() ? 23 : -1);
            i0.ɵɵadvance();
            i0.ɵɵconditional((tmp_21_0 = ctx.confirmDialog()) ? 24 : -1, tmp_21_0);
        } }, dependencies: [AdminPageComponent,
            CdkTrapFocus,
            CompactActionMenuComponent,
            ConfirmDialogComponent,
            FilterPopoverComponent,
            FormsModule, i1.NgSelectOption, i1.ɵNgSelectMultipleOption, i1.DefaultValueAccessor, i1.NumberValueAccessor, i1.CheckboxControlValueAccessor, i1.SelectControlValueAccessor, i1.NgControlStatus, i1.MinValidator, i1.MaxValidator, i1.NgModel, RouterLink,
            LucideFilter,
            LucideX,
            CurrencyPipe,
            DatePipe], styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n  min-width: 0;\n}\n\n.fee-page-actions[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: var(--erp-space-2);\n}\n\n.fee-working-context[_ngcontent-%COMP%], \n.fee-course-explorer[_ngcontent-%COMP%] {\n  display: grid;\n  min-width: 0;\n  align-items: center;\n  gap: var(--erp-space-3);\n  margin-bottom: var(--erp-space-2);\n  padding: var(--erp-space-2) var(--erp-space-3);\n  border: 1px solid var(--erp-border-default);\n  border-radius: var(--erp-radius-card);\n  background: var(--erp-surface-raised);\n}\n\n.fee-working-context[_ngcontent-%COMP%] {\n  grid-template-columns: 38px minmax(0, 1fr) auto;\n}\n\n.fee-context-gate[_ngcontent-%COMP%] {\n  display: grid;\n  min-height: 300px;\n  place-items: center;\n  align-content: center;\n  gap: var(--erp-space-2);\n  padding: var(--erp-space-8) var(--erp-space-4);\n  border: 1px dashed var(--erp-border-strong);\n  border-radius: var(--erp-radius-card);\n  background: var(--erp-surface-raised);\n  text-align: center;\n}\n\n.fee-context-gate[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 64px;\n  height: 64px;\n  margin-bottom: var(--erp-space-2);\n  object-fit: contain;\n}\n\n.fee-context-gate[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: var(--erp-primary);\n  font-size: var(--erp-font-size-2xs);\n  font-weight: var(--erp-weight-semibold);\n  letter-spacing: var(--erp-letter-normal);\n  text-transform: uppercase;\n}\n\n.fee-context-gate[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0;\n  color: var(--erp-text-heading);\n  font-size: var(--erp-font-section-title);\n}\n\n.fee-context-gate[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  max-width: 460px;\n  margin: 0 0 var(--erp-space-3);\n  color: var(--erp-text-muted);\n  font-size: var(--erp-font-size-sm);\n}\n\n.fee-course-explorer[_ngcontent-%COMP%] {\n  grid-template-columns: 44px minmax(0, 1fr) auto;\n}\n\n.fee-working-context[_ngcontent-%COMP%]    > img[_ngcontent-%COMP%], \n.fee-course-explorer[_ngcontent-%COMP%]    > img[_ngcontent-%COMP%] {\n  width: 38px;\n  height: 38px;\n  object-fit: contain;\n}\n\n.fee-course-explorer[_ngcontent-%COMP%]    > img[_ngcontent-%COMP%] {\n  width: 44px;\n  height: 44px;\n}\n\n.fee-working-context[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%], \n.fee-course-explorer[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  min-width: 0;\n}\n\n.fee-working-context[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: var(--erp-text-muted);\n  font-size: var(--erp-font-size-2xs);\n  font-weight: var(--erp-weight-semibold);\n  text-transform: uppercase;\n}\n\n.fee-working-context[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], \n.fee-course-explorer[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0;\n  color: var(--erp-text-heading);\n  font-size: var(--erp-font-label);\n  font-weight: var(--erp-weight-semibold);\n}\n\n.fee-working-context[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], \n.fee-course-explorer[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  overflow: hidden;\n  margin: 2px 0 0;\n  color: var(--erp-text-muted);\n  font-size: var(--erp-font-size-xs);\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n\n.fee-view-filter-drawer[_ngcontent-%COMP%] {\n  width: min(560px, 100%);\n}\n\n.fee-view-filter-drawer__icon[_ngcontent-%COMP%] {\n  overflow: hidden;\n  background: transparent;\n}\n\n.fee-view-filter-drawer__icon[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: contain;\n}\n\n.fee-view-filter-drawer[_ngcontent-%COMP%]   .fee-view-filter-grid[_ngcontent-%COMP%] {\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n}\n\n.fee-form-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, minmax(0, 1fr));\n  gap: var(--erp-space-3);\n}\n\n.fee-inline-form[_ngcontent-%COMP%], \n.fee-upload-row[_ngcontent-%COMP%], \n.fee-import-actions[_ngcontent-%COMP%], \n.fee-form-actions[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-end;\n  gap: var(--erp-space-3);\n}\n\n.fee-inline-form[_ngcontent-%COMP%]   .erp-field-stack[_ngcontent-%COMP%], \n.fee-upload-row[_ngcontent-%COMP%]   .erp-field-stack[_ngcontent-%COMP%] {\n  min-width: 0;\n  flex: 1;\n}\n\n.fee-book-selector[_ngcontent-%COMP%] {\n  width: min(620px, 100%);\n}\n\n.fee-book-picker[_ngcontent-%COMP%] {\n  width: min(780px, 100%);\n}\n\n.fee-book-picker__body[_ngcontent-%COMP%] {\n  display: grid;\n  gap: var(--erp-space-4);\n}\n\n.fee-book-picker__filters[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, minmax(0, 1fr));\n  gap: var(--erp-space-3);\n  padding-bottom: var(--erp-space-4);\n  border-bottom: 1px solid var(--erp-border-subtle);\n}\n\n.fee-book-picker__results[_ngcontent-%COMP%] {\n  display: grid;\n  min-height: 112px;\n  max-height: min(42vh, 360px);\n  align-content: start;\n  gap: var(--erp-space-2);\n  overflow-y: auto;\n  scrollbar-color: var(--erp-border-strong) transparent;\n  scrollbar-width: thin;\n}\n\n.course-fee-draft-state[_ngcontent-%COMP%] {\n  display: inline-flex;\n  min-height: var(--erp-control-height-compact);\n  align-items: center;\n  gap: var(--erp-space-2);\n  padding-inline: var(--erp-space-3);\n  border: 1px solid var(--erp-border-subtle);\n  border-radius: var(--erp-radius-pill);\n  color: var(--erp-text-muted);\n  background: var(--erp-surface-detail-soft);\n  font-size: var(--erp-font-caption);\n  white-space: nowrap;\n}\n\n.course-fee-draft-state__pulse[_ngcontent-%COMP%] {\n  width: 7px;\n  height: 7px;\n  border-radius: var(--erp-radius-pill);\n  background: var(--erp-primary);\n  animation: _ngcontent-%COMP%_fee-draft-pulse var(--erp-status-pulse-duration) var(--erp-ease-standard) infinite\n    alternate;\n}\n\n.course-fee-draft-state__check[_ngcontent-%COMP%] {\n  color: var(--erp-success);\n  font-weight: var(--erp-weight-bold);\n}\n\n.course-fee-draft-state--error[_ngcontent-%COMP%] {\n  border-color: var(--erp-danger-border-soft);\n  color: var(--erp-danger-text);\n  background: var(--erp-danger-bg);\n}\n\n.course-fee-drafts[_ngcontent-%COMP%] {\n  margin-bottom: var(--erp-space-4);\n}\n\n.course-fee-drafts[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  display: block;\n  margin-top: var(--erp-space-1);\n  color: var(--erp-text-muted);\n  font-size: var(--erp-font-caption);\n}\n\n@keyframes _ngcontent-%COMP%_fee-draft-pulse {\n  to {\n    opacity: 0.4;\n  }\n}\n\n.fee-picker-control[_ngcontent-%COMP%] {\n  display: flex;\n  height: auto;\n  min-height: var(--erp-control-height);\n  align-items: center;\n  justify-content: space-between;\n  gap: var(--erp-space-3);\n  text-align: left;\n  cursor: pointer;\n}\n\n.fee-picker-control[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], \n.fee-picker-control[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  display: block;\n  min-width: 0;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n\n.fee-picker-control[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  color: var(--erp-text-muted);\n  font-size: var(--erp-font-size-xs);\n}\n\n.fee-head-picker__search[_ngcontent-%COMP%] {\n  margin-bottom: var(--erp-space-2);\n}\n\n.fee-head-picker__all[_ngcontent-%COMP%] {\n  grid-template-columns: auto minmax(0, 1fr) auto;\n  border-style: dashed;\n}\n\n.fee-head-picker__row[_ngcontent-%COMP%] {\n  grid-template-columns: auto minmax(0, 1fr) auto;\n}\n\n.fee-picker-check[_ngcontent-%COMP%] {\n  display: grid;\n  width: 28px;\n  height: 28px;\n  place-items: center;\n  border: 1px solid var(--erp-border-default);\n  border-radius: var(--erp-radius-sm);\n  color: var(--erp-primary);\n  background: var(--erp-surface-detail);\n  font-size: var(--erp-font-size-sm);\n  font-weight: var(--erp-weight-bold);\n}\n\n.erp-record-picker__option.active[_ngcontent-%COMP%]   .fee-picker-check[_ngcontent-%COMP%] {\n  border-color: var(--erp-primary);\n  color: var(--erp-text-on-primary);\n  background: var(--erp-primary);\n}\n\n.fee-head-picker__count[_ngcontent-%COMP%] {\n  margin-right: auto;\n  color: var(--erp-text-muted);\n  font-size: var(--erp-font-caption);\n  font-weight: var(--erp-weight-semibold);\n}\n\n.fee-priority-pill[_ngcontent-%COMP%] {\n  display: inline-grid;\n  min-width: 34px;\n  height: 28px;\n  place-items: center;\n  border: 1px solid var(--erp-border-default);\n  border-radius: var(--erp-radius-pill);\n  color: var(--erp-primary);\n  background: var(--erp-surface-selected);\n  font-size: var(--erp-font-caption);\n  font-weight: var(--erp-weight-bold);\n}\n\n.fee-form-actions[_ngcontent-%COMP%], \n.fee-import-actions[_ngcontent-%COMP%] {\n  justify-content: flex-end;\n  margin-top: var(--erp-space-4);\n}\n\n.fee-import-actions[_ngcontent-%COMP%] {\n  justify-content: space-between;\n}\n\n.fee-section-gap[_ngcontent-%COMP%] {\n  margin-top: var(--erp-admin-section-gap);\n}\n\n.fee-mapping-summary[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(4, minmax(0, 1fr));\n  gap: var(--erp-space-3);\n  margin-bottom: var(--erp-space-4);\n}\n\n.fee-mapping-summary[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  display: grid;\n  gap: var(--erp-space-1);\n  padding: var(--erp-space-3);\n  border: 1px solid var(--erp-border-subtle);\n  border-radius: var(--erp-radius-compact);\n  background: var(--erp-surface-detail);\n}\n\n.fee-mapping-summary[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: var(--erp-text-heading);\n  font-size: var(--erp-font-page-title);\n}\n\n.fee-mapping-summary[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], \n.fee-upload-row[_ngcontent-%COMP%]   small[_ngcontent-%COMP%], \n.fee-mapping-table[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  color: var(--erp-text-muted);\n  font-size: var(--erp-font-caption);\n}\n\n.fee-checkbox[_ngcontent-%COMP%] {\n  display: inline-flex;\n  min-height: 44px;\n  align-items: center;\n  gap: var(--erp-space-2);\n}\n\n.fee-list-header[_ngcontent-%COMP%], \n.fee-mapping-card__header[_ngcontent-%COMP%], \n.fee-course-picker[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: var(--erp-space-3);\n}\n\n.fee-list-header[_ngcontent-%COMP%], \n.fee-mapping-card__header[_ngcontent-%COMP%] {\n  justify-content: space-between;\n}\n\n.fee-page-size[_ngcontent-%COMP%] {\n  width: calc(var(--erp-control-height) * 4);\n}\n\n.fee-mapping-card-list[_ngcontent-%COMP%] {\n  display: grid;\n  gap: var(--erp-space-3);\n}\n\n.fee-mapping-card[_ngcontent-%COMP%] {\n  overflow: hidden;\n  border: 1px solid var(--erp-border-default);\n  border-radius: var(--erp-radius-card);\n  background: var(--erp-surface-raised);\n}\n\n.fee-mapping-card__header[_ngcontent-%COMP%] {\n  padding: var(--erp-space-4);\n  border-bottom: 1px solid var(--erp-border-subtle);\n  background: var(--erp-table-header-bg);\n}\n\n.fee-mapping-card__header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: var(--erp-space-1) 0 0;\n  color: var(--erp-text-heading);\n  font-size: var(--erp-font-body);\n}\n\n.fee-mapping-card__header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], \n.fee-detected-details[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: var(--erp-space-1) 0 0;\n  color: var(--erp-text-muted);\n  font-size: var(--erp-font-caption);\n}\n\n.fee-sheet-name[_ngcontent-%COMP%] {\n  color: var(--erp-blue-700);\n  font-size: var(--erp-font-caption);\n  font-weight: var(--erp-weight-bold);\n  letter-spacing: var(--erp-letter-normal);\n}\n\n.fee-mapping-card__body[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: minmax(0, 2fr) minmax(var(--erp-fee-mapping-editor-min-width), 1fr);\n  gap: var(--erp-space-5);\n  padding: var(--erp-space-4);\n}\n\n.fee-detected-details[_ngcontent-%COMP%], \n.fee-assignment-editor[_ngcontent-%COMP%] {\n  min-width: 0;\n}\n\n.fee-detected-details[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  display: grid;\n  gap: var(--erp-space-1);\n  margin: var(--erp-space-2) 0 0;\n  padding-left: var(--erp-space-5);\n  color: var(--erp-text-body);\n  font-size: var(--erp-font-caption);\n}\n\n.fee-suggestion[_ngcontent-%COMP%] {\n  color: var(--erp-info-text) !important;\n}\n\n.fee-warning[_ngcontent-%COMP%] {\n  color: var(--erp-warning-text) !important;\n}\n\n.fee-course-chips[_ngcontent-%COMP%] {\n  display: flex;\n  min-height: var(--erp-control-height-mobile);\n  flex-wrap: wrap;\n  align-items: center;\n  gap: var(--erp-space-2);\n  margin-block: var(--erp-space-2);\n}\n\n.fee-course-chip[_ngcontent-%COMP%] {\n  display: inline-flex;\n  min-height: var(--erp-control-height-compact);\n  align-items: center;\n  gap: var(--erp-space-2);\n  padding-left: var(--erp-space-3);\n  border: 1px solid var(--erp-border-strong);\n  border-radius: var(--erp-radius-pill);\n  color: var(--erp-text-strong);\n  background: var(--erp-surface-selected);\n  font-size: var(--erp-font-caption);\n  font-weight: var(--erp-weight-semibold);\n}\n\n.fee-course-chip[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  width: var(--erp-control-height-compact);\n  height: var(--erp-control-height-compact);\n  border: 0;\n  border-radius: var(--erp-radius-pill);\n  color: var(--erp-danger-text);\n  background: transparent;\n  cursor: pointer;\n  font-size: var(--erp-font-section-title);\n}\n\n.fee-course-chip[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  background: var(--erp-danger-bg);\n}\n\n.fee-unmapped-copy[_ngcontent-%COMP%] {\n  color: var(--erp-text-muted);\n  font-size: var(--erp-font-caption);\n}\n\n.fee-course-picker[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n  min-width: 0;\n  flex: 1;\n}\n\n.fee-pagination[_ngcontent-%COMP%] {\n  margin-top: var(--erp-space-4);\n  padding-top: var(--erp-space-3);\n}\n\n.fee-view-filter-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, minmax(0, 1fr));\n  gap: var(--erp-space-3);\n}\n\n.fee-view-heading[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: var(--erp-space-5);\n}\n\n.fee-view-heading[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], \n.fee-year-card__header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0;\n}\n\n.fee-view-heading[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], \n.fee-year-card__header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: var(--erp-space-1) 0 0;\n  color: var(--erp-text-muted);\n}\n\n.fee-view-summary[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(4, minmax(0, 1fr));\n  min-width: min(100%, var(--erp-modal-width));\n  gap: var(--erp-space-2);\n}\n\n.fee-view-summary[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  display: grid;\n  gap: var(--erp-space-1);\n  padding: var(--erp-space-3);\n  border: 1px solid var(--erp-border-subtle);\n  border-radius: var(--erp-radius-compact);\n  background: var(--erp-surface-detail);\n  text-align: center;\n}\n\n.fee-view-summary[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: var(--erp-text-heading);\n  font-size: var(--erp-font-section-title);\n}\n\n.fee-view-summary[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], \n.fee-matrix-table[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  color: var(--erp-text-muted);\n  font-size: var(--erp-font-caption);\n}\n\n.fee-year-card__header[_ngcontent-%COMP%] {\n  align-items: center;\n}\n\n.fee-matrix-table[_ngcontent-%COMP%] {\n  min-width: var(--erp-table-wide-min-width);\n}\n\n.fee-structure-matrix__header[_ngcontent-%COMP%] {\n  align-items: center;\n}\n\n.fee-structure-matrix__meta[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: var(--erp-space-3);\n  color: var(--erp-text-heading);\n}\n\n.fee-structure-matrix__meta[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  font-size: var(--erp-font-section-title);\n}\n\n.fee-view-matrix-table[_ngcontent-%COMP%] {\n  min-width: max(var(--erp-table-wide-min-width), 980px);\n}\n\n.fee-view-matrix-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], \n.fee-view-matrix-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  vertical-align: middle;\n  border-right: 1px solid var(--erp-border-subtle);\n}\n\n.fee-view-matrix-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:last-child, \n.fee-view-matrix-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:last-child {\n  border-right: 0;\n}\n\n.fee-view-matrix-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:first-child, \n.fee-view-matrix-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:first-child {\n  position: sticky;\n  left: 0;\n  z-index: 2;\n  min-width: 260px;\n  background: var(--erp-surface-overlay);\n  box-shadow: 1px 0 0 var(--erp-border-subtle);\n}\n\n.fee-view-matrix-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:first-child {\n  z-index: 3;\n  background: var(--erp-table-header-bg);\n}\n\n.fee-view-matrix-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], \n.fee-view-matrix-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  display: block;\n}\n\n.fee-view-matrix-table[_ngcontent-%COMP%]   tfoot[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  color: var(--erp-text-heading);\n  background: var(--erp-surface-detail);\n}\n\n.fee-view-matrix-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover   td[_ngcontent-%COMP%] {\n  background: var(--erp-surface-detail);\n}\n\n.fee-matrix-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:first-child, \n.fee-matrix-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:nth-child(2) {\n  min-width: calc(var(--erp-control-height) * 4);\n}\n\n.fee-matrix-workspace[_ngcontent-%COMP%] {\n  display: grid;\n  gap: var(--erp-space-2);\n  margin-top: var(--erp-space-4);\n  padding-top: var(--erp-space-4);\n  border-top: 1px solid var(--erp-border-subtle);\n}\n\n.fee-matrix-workspace__header[_ngcontent-%COMP%], \n.fee-matrix-workspace__footer[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: var(--erp-space-3);\n}\n\n.fee-matrix-workspace__header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0;\n  color: var(--erp-text-heading);\n  font-size: var(--erp-font-section-title);\n}\n\n.fee-matrix-workspace__header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], \n.fee-matrix-workspace__footer[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  margin: var(--erp-space-1) 0 0;\n  color: var(--erp-text-muted);\n  font-size: var(--erp-font-caption);\n}\n\n.fee-matrix-context[_ngcontent-%COMP%] {\n  display: flex;\n  min-width: 0;\n  flex-wrap: wrap;\n  align-items: center;\n  gap: var(--erp-space-2) var(--erp-space-4);\n  padding: var(--erp-space-2) var(--erp-space-3);\n  border: 1px solid var(--erp-border-subtle);\n  border-radius: var(--erp-radius-control);\n  color: var(--erp-text-muted);\n  background: var(--erp-surface-detail-soft);\n  font-size: var(--erp-font-caption);\n}\n\n.fee-matrix-context[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: var(--erp-text-strong);\n  font-variant-numeric: tabular-nums;\n}\n\n.fee-matrix-editor[_ngcontent-%COMP%] {\n  max-width: 100%;\n  max-height: min(56vh, 600px);\n  overflow: auto;\n  border: 1px solid var(--erp-border-default);\n  border-radius: var(--erp-radius-compact);\n  background: var(--erp-surface-raised);\n  scrollbar-color: var(--erp-border-strong) var(--erp-surface-detail);\n  scrollbar-width: thin;\n  overscroll-behavior: contain;\n}\n\n.fee-matrix-editor[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 8px;\n  height: 8px;\n}\n\n.fee-matrix-editor[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  background: var(--erp-surface-detail);\n}\n\n.fee-matrix-editor[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  border: 2px solid var(--erp-surface-detail);\n  border-radius: var(--erp-radius-pill);\n  background: var(--erp-border-strong);\n}\n\n.fee-matrix-table--editable[_ngcontent-%COMP%] {\n  width: max-content;\n  min-width: 100%;\n  border-collapse: separate;\n  border-spacing: 0;\n  font-size: var(--erp-font-label);\n}\n\n.fee-matrix-table--editable[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], \n.fee-matrix-table--editable[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  height: var(--erp-table-row-height-compact);\n  padding: var(--erp-space-2);\n  border-right: 1px solid var(--erp-border-default);\n  border-bottom: 1px solid var(--erp-border-default);\n  vertical-align: middle;\n}\n\n.fee-matrix-table--editable[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:last-child, \n.fee-matrix-table--editable[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:last-child {\n  border-right: 0;\n}\n\n.fee-matrix-table--editable[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:last-child   td[_ngcontent-%COMP%] {\n  border-bottom: 0;\n}\n\n.fee-matrix-table--editable[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  position: sticky;\n  top: 0;\n  z-index: 2;\n  white-space: nowrap;\n  color: var(--erp-text-muted);\n  background: var(--erp-table-header-bg);\n  font-size: var(--erp-font-size-xs);\n  font-weight: var(--erp-weight-bold);\n  letter-spacing: var(--erp-letter-normal);\n  text-transform: uppercase;\n}\n\n.fee-matrix-table--editable[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:first-child, \n.fee-matrix-table--editable[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:first-child, \n.fee-matrix-table--editable[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:nth-child(2), \n.fee-matrix-table--editable[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:nth-child(2) {\n  position: sticky;\n  z-index: 1;\n  background: var(--erp-surface-raised);\n}\n\n.fee-matrix-table--editable[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:first-child, \n.fee-matrix-table--editable[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:first-child {\n  left: 0;\n}\n\n.fee-matrix-table--editable[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:nth-child(2), \n.fee-matrix-table--editable[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:nth-child(2) {\n  left: 56px;\n  box-shadow: 1px 0 0 var(--erp-border-subtle);\n}\n\n.fee-matrix-table--editable[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:first-child, \n.fee-matrix-table--editable[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:nth-child(2) {\n  z-index: 3;\n  background: var(--erp-table-header-bg);\n}\n\n.fee-matrix-table__select[_ngcontent-%COMP%] {\n  width: 56px;\n  min-width: 56px !important;\n  text-align: center;\n}\n\n.fee-row-selector[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: var(--erp-space-2);\n  color: var(--erp-text-muted);\n  font-size: var(--erp-font-size-xs);\n  font-variant-numeric: tabular-nums;\n}\n\n.fee-row-selector[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], \n.fee-matrix-table__select[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 16px;\n  height: 16px;\n  margin: 0;\n  accent-color: var(--erp-primary);\n}\n\n.fee-matrix-head[_ngcontent-%COMP%] {\n  width: 220px;\n  min-width: 220px;\n}\n\n.fee-matrix-head[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  overflow: hidden;\n  color: var(--erp-text-heading);\n  font-size: var(--erp-font-label);\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n\n.fee-matrix-head[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  display: flex;\n  gap: var(--erp-space-2);\n  align-items: center;\n}\n\n.fee-matrix-head[_ngcontent-%COMP%]   small[_ngcontent-%COMP%]    + small[_ngcontent-%COMP%]::before {\n  content: '\u00B7';\n  margin-right: var(--erp-space-2);\n}\n\n.fee-matrix-period[_ngcontent-%COMP%] {\n  width: 118px;\n  min-width: 118px;\n  text-align: right;\n}\n\n.fee-matrix-period[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], \n.fee-matrix-period[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  display: block;\n}\n\n.fee-matrix-period[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  margin-top: 2px;\n  font-size: var(--erp-font-size-2xs);\n  font-weight: var(--erp-weight-medium);\n  letter-spacing: normal;\n  text-transform: none;\n}\n\n.fee-matrix-row--selected[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  background: var(--erp-surface-selected);\n}\n\n.fee-matrix-row--selected[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:first-child, \n.fee-matrix-row--selected[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:nth-child(2) {\n  background: var(--erp-surface-selected);\n}\n\n.fee-matrix-table--editable[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover   td[_ngcontent-%COMP%] {\n  background: var(--erp-table-row-hover);\n}\n\n.fee-matrix-table--editable[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover   td[_ngcontent-%COMP%]:first-child, \n.fee-matrix-table--editable[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover   td[_ngcontent-%COMP%]:nth-child(2) {\n  background: var(--erp-table-row-hover);\n}\n\n.fee-matrix-cell[_ngcontent-%COMP%] {\n  display: flex;\n  width: 112px;\n  height: 32px;\n  align-items: center;\n  gap: var(--erp-space-1);\n  padding-inline: var(--erp-space-2);\n  border: 1px solid var(--erp-border-subtle);\n  border-radius: var(--erp-radius-xs);\n  color: var(--erp-text-muted);\n  background: var(--erp-surface-raised);\n  transition:\n    border-color var(--erp-control-transition),\n    background-color var(--erp-control-transition);\n}\n\n.fee-matrix-cell[_ngcontent-%COMP%]:focus-within, \n.fee-matrix-cell--active[_ngcontent-%COMP%] {\n  border-color: var(--erp-primary);\n  background: var(--erp-surface-overlay);\n}\n\n.fee-matrix-amount[_ngcontent-%COMP%] {\n  appearance: textfield;\n  width: 100%;\n  min-width: 0;\n  padding: 0;\n  border: 0;\n  outline: 0;\n  color: var(--erp-text-strong);\n  background: transparent;\n  font: inherit;\n  font-size: var(--erp-font-caption);\n  font-weight: var(--erp-weight-semibold);\n  text-align: right;\n  font-variant-numeric: tabular-nums;\n}\n\n.fee-matrix-amount[_ngcontent-%COMP%]:focus {\n  border: 0;\n  outline: 0;\n  box-shadow: none;\n}\n\n.fee-matrix-amount[_ngcontent-%COMP%]::-webkit-inner-spin-button, \n.fee-matrix-amount[_ngcontent-%COMP%]::-webkit-outer-spin-button {\n  margin: 0;\n  appearance: none;\n}\n\n.fee-matrix-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%], \n.fee-matrix-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  display: block;\n}\n\n.fee-matrix-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  margin-top: var(--erp-space-1);\n}\n\n.fee-amount-cell[_ngcontent-%COMP%] {\n  min-width: calc(var(--erp-control-height) * 4);\n  font-variant-numeric: tabular-nums;\n}\n\n.fee-amount-cell--conflict[_ngcontent-%COMP%] {\n  background: var(--erp-warning-bg);\n}\n\n.fee-amount-cell--conflict[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  color: var(--erp-warning-text);\n}\n\n@media (max-width: 1000px) {\n  .fee-form-grid[_ngcontent-%COMP%], \n   .fee-mapping-summary[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n  }\n\n  .fee-view-filter-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n  }\n\n  .fee-view-heading[_ngcontent-%COMP%] {\n    align-items: stretch;\n    flex-direction: column;\n  }\n\n  .fee-mapping-card__body[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n\n@media (max-width: 720px) {\n  .fee-working-context[_ngcontent-%COMP%], \n   .fee-course-explorer[_ngcontent-%COMP%] {\n    grid-template-columns: 38px minmax(0, 1fr);\n  }\n\n  .fee-working-context[_ngcontent-%COMP%]    > .erp-button[_ngcontent-%COMP%], \n   .fee-course-explorer[_ngcontent-%COMP%]    > .erp-button[_ngcontent-%COMP%] {\n    grid-column: 1 / -1;\n  }\n\n  .fee-page-actions[_ngcontent-%COMP%] {\n    width: 100%;\n    align-items: stretch;\n    flex-direction: column;\n  }\n\n  .fee-page-actions[_ngcontent-%COMP%]   .erp-button[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .fee-form-grid[_ngcontent-%COMP%], \n   .fee-mapping-summary[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n\n  .fee-view-filter-grid[_ngcontent-%COMP%], \n   .fee-view-summary[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n\n  .fee-book-picker__filters[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n\n  .fee-inline-form[_ngcontent-%COMP%], \n   .fee-upload-row[_ngcontent-%COMP%], \n   .fee-import-actions[_ngcontent-%COMP%], \n   .fee-form-actions[_ngcontent-%COMP%], \n   .fee-matrix-workspace__header[_ngcontent-%COMP%], \n   .fee-matrix-workspace__footer[_ngcontent-%COMP%] {\n    align-items: stretch;\n    flex-direction: column;\n  }\n\n  .fee-list-header[_ngcontent-%COMP%], \n   .fee-mapping-card__header[_ngcontent-%COMP%], \n   .fee-course-picker[_ngcontent-%COMP%], \n   .fee-pagination[_ngcontent-%COMP%] {\n    align-items: stretch;\n    flex-direction: column;\n  }\n\n  .fee-page-size[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}"], changeDetection: 0 });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(FeeManagementComponent, [{
        type: Component,
        args: [{ selector: 'erp-fee-management', imports: [
                    AdminPageComponent,
                    CdkTrapFocus,
                    CompactActionMenuComponent,
                    ConfirmDialogComponent,
                    FilterPopoverComponent,
                    FormsModule,
                    CurrencyPipe,
                    DatePipe,
                    RouterLink,
                    LucideFilter,
                    LucideX,
                ], changeDetection: ChangeDetectionStrategy.OnPush, template: "<erp-admin-page\n  [layout]=\"isViewPage() || isDraftPage() ? 'collection' : 'default'\"\n  eyebrow=\"Fee Management\"\n  [title]=\"pageTitle()\"\n  [description]=\"pageDescription()\"\n  variant=\"minimal\"\n>\n  <div page-actions class=\"fee-page-actions\">\n    @if (isViewPage() || isDraftPage()) {\n      <a class=\"erp-button erp-button--primary\" [routerLink]=\"createRoute()\">Create new</a>\n    } @else {\n      @if (section() === 'course-fees' && isCreatePage()) {\n        <a class=\"erp-button erp-button--secondary\" routerLink=\"/admin/fees/course-fees/drafts\"\n          >View drafts</a\n        >\n      }\n      <a class=\"erp-button erp-button--secondary\" [routerLink]=\"viewRoute()\">View records</a>\n    }\n    <button class=\"erp-button erp-button--secondary\" type=\"button\" (click)=\"loadReferenceData()\">\n      Refresh\n    </button>\n  </div>\n\n  @if (creationSuccess()) {\n    <section class=\"erp-success-panel\" role=\"status\">\n      <span class=\"erp-success-panel__mark\" aria-hidden=\"true\">\u2713</span>\n      <div>\n        <strong>{{ creationSuccess() }}</strong>\n        <p>The record is ready and can now be reviewed from its dedicated view page.</p>\n      </div>\n      <div class=\"erp-success-panel__actions\">\n        <button\n          class=\"erp-button erp-button--secondary\"\n          type=\"button\"\n          (click)=\"creationSuccess.set('')\"\n        >\n          Create another\n        </button>\n        <a class=\"erp-button erp-button--primary\" [routerLink]=\"viewRoute()\">View records</a>\n      </div>\n    </section>\n  } @else if (message()) {\n    <p class=\"erp-notice erp-notice--success\" role=\"status\">{{ message() }}</p>\n  }\n  @if (error()) {\n    <p class=\"erp-notice erp-notice--error\" role=\"alert\">{{ error() }}</p>\n  }\n\n  @if (courseFeeDraftResumePending()) {\n    <section class=\"erp-card erp-card--padded erp-context-card\">\n      <div>\n        <span class=\"erp-page-header__eyebrow\">Course Fee Draft</span>\n        <h2>Opening saved draft\u2026</h2>\n        <p>Restoring the selected book, course context and entered fee matrix.</p>\n      </div>\n    </section>\n  }\n\n  @if (section() !== 'books' && !isDraftPage() && !courseFeeDraftResumePending()) {\n    @if (currentBook()) {\n      <section class=\"fee-working-context\">\n        <img src=\"assets/admin/finance-icons/fee-books.png\" alt=\"\" aria-hidden=\"true\" />\n        <div>\n          <span>Working fee book</span>\n          <h2>{{ currentBook()!.code }}</h2>\n          <p>{{ currentBook()!.collegeName }} \u00B7 {{ currentBook()!.academicSession }}</p>\n        </div>\n        <button class=\"erp-button erp-button--secondary\" type=\"button\" (click)=\"openBookSelector()\">\n          Change book\n        </button>\n      </section>\n    } @else {\n      <section class=\"fee-context-gate\">\n        <img src=\"assets/admin/finance-icons/fee-books.png\" alt=\"\" aria-hidden=\"true\" />\n        <span>Fee book required</span>\n        <h2>Select a fee book to continue</h2>\n        <p>\n          Choose the college and academic session first. Relevant records will appear afterward.\n        </p>\n        <button class=\"erp-button erp-button--primary\" type=\"button\" (click)=\"openBookSelector()\">\n          Select fee book\n        </button>\n      </section>\n    }\n  }\n\n  @if (section() === 'books' && isCreatePage()) {\n    <section class=\"erp-card erp-card--padded erp-create-card\">\n      <div class=\"erp-card__header\">\n        <div>\n          <h2>{{ editingBook() ? 'Edit fee book' : 'Create fee book' }}</h2>\n          <p>A book defines the college, validity, session and default collection frequency.</p>\n        </div>\n      </div>\n      <div class=\"fee-form-grid\">\n        <label class=\"erp-field-stack\"\n          ><span>College *</span\n          ><select class=\"erp-control\" [(ngModel)]=\"bookCollegeId\">\n            <option value=\"\">Select college</option>\n            @for (college of colleges(); track college._id) {\n              <option [value]=\"college._id\">{{ college.name }}</option>\n            }\n          </select></label\n        >\n        <label class=\"erp-field-stack\"\n          ><span>Start date *</span\n          ><input class=\"erp-control\" type=\"date\" [(ngModel)]=\"bookStartDate\"\n        /></label>\n        <label class=\"erp-field-stack\"\n          ><span>End date *</span><input class=\"erp-control\" type=\"date\" [(ngModel)]=\"bookEndDate\"\n        /></label>\n        <label class=\"erp-field-stack\"\n          ><span>Academic session *</span\n          ><select class=\"erp-control\" [(ngModel)]=\"bookSession\">\n            <option value=\"\">Select academic session</option>\n            @for (session of academicSessions(); track session._id) {\n              <option [value]=\"session.name\">{{ session.name }}</option>\n            }\n          </select>\n          @if (!academicSessions().length) {\n            <small\n              >No active sessions found. Add one in\n              <a routerLink=\"/admin/master-data/academic\">Academic Master</a>.</small\n            >\n          }\n        </label>\n        <label class=\"erp-field-stack\"\n          ><span>Book code *</span\n          ><input class=\"erp-control\" [(ngModel)]=\"bookCode\" placeholder=\"e.g. GEU-2026\"\n        /></label>\n        <label class=\"erp-field-stack\"\n          ><span>Fee frequency *</span\n          ><select class=\"erp-control\" [(ngModel)]=\"bookFrequency\">\n            <option value=\"semester\">Semester wise</option>\n            <option value=\"year\">Year wise</option>\n          </select></label\n        >\n      </div>\n      <div class=\"fee-form-actions\">\n        @if (editingBook()) {\n          <button class=\"erp-button erp-button--secondary\" type=\"button\" (click)=\"resetBook()\">\n            Cancel\n          </button>\n        }\n        <button\n          class=\"erp-button erp-button--primary\"\n          type=\"button\"\n          [disabled]=\"saving()\"\n          (click)=\"saveBook()\"\n        >\n          {{ editingBook() ? 'Save book' : 'Create book' }}\n        </button>\n      </div>\n    </section>\n  }\n\n  @if (section() === 'books' && isViewPage()) {\n    <section class=\"erp-card erp-table-shell\">\n      <div class=\"erp-table-toolbar\">\n        <div>\n          <h2>\n            Fee books <small>{{ filteredBooks().length }}</small>\n          </h2>\n          <p>Search and manage fee books without loading creation controls.</p>\n        </div>\n        <div class=\"erp-table-toolbar__actions\">\n          <label class=\"erp-search-control\"\n            ><span class=\"erp-sr-only\">Search fee books</span\n            ><input\n              type=\"search\"\n              placeholder=\"Search code, college or session\"\n              [value]=\"listSearch()\"\n              (input)=\"updateListSearch($any($event.target).value)\"\n          /></label>\n          <erp-filter-popover\n            label=\"Status filters\"\n            [options]=\"statusFilterOptions\"\n            [value]=\"listStatus()\"\n            (valueChange)=\"updateListStatus($any($event))\"\n          />\n        </div>\n      </div>\n      <div class=\"erp-table-shell__scroll\">\n        <table>\n          <thead>\n            <tr>\n              <th>Book</th>\n              <th>College</th>\n              <th>Session</th>\n              <th>Validity</th>\n              <th>Frequency</th>\n              <th>Status</th>\n              <th class=\"erp-table-shell__actions\">Actions</th>\n            </tr>\n          </thead>\n          <tbody>\n            @for (book of pagedBooks(); track book._id) {\n              <tr>\n                <td>\n                  <strong>{{ book.code }}</strong>\n                </td>\n                <td>{{ book.collegeName }}</td>\n                <td>{{ book.academicSession }}</td>\n                <td>{{ book.startDate }} \u2013 {{ book.endDate }}</td>\n                <td>{{ book.frequency === 'semester' ? 'Semester wise' : 'Year wise' }}</td>\n                <td>\n                  <span class=\"erp-status\" [class.erp-status--neutral]=\"!book.isActive\">{{\n                    book.isActive ? 'Active' : 'Disabled'\n                  }}</span>\n                </td>\n                <td class=\"erp-table-shell__actions\">\n                  <erp-compact-action-menu\n                    [items]=\"rowActions\"\n                    (selected)=\"handleBookAction($event, book)\"\n                  />\n                </td>\n              </tr>\n            } @empty {\n              <tr>\n                <td colspan=\"7\" class=\"erp-empty-state\">\n                  {{\n                    loading()\n                      ? 'Loading fee books\u2026'\n                      : listSearch() || listStatus() !== 'all'\n                        ? 'No fee books match the current filters.'\n                        : 'No fee books created.'\n                  }}\n                </td>\n              </tr>\n            }\n          </tbody>\n        </table>\n      </div>\n      <div class=\"erp-pagination\">\n        <span\n          >Showing {{ pagedBooks().length }} of {{ filteredBooks().length }} books \u00B7 Page\n          {{ safeListPage() }} of {{ listTotalPages() }}</span\n        >\n        <div class=\"erp-pagination__pages\">\n          <select\n            class=\"erp-control erp-pagination__size\"\n            aria-label=\"Rows per page\"\n            [ngModel]=\"listPageSize()\"\n            (ngModelChange)=\"updateListPageSize($event)\"\n          >\n            @for (size of pageSizeOptions; track size) {\n              <option [ngValue]=\"size\">{{ size }} / page</option>\n            }</select\n          ><button\n            class=\"erp-pagination__button\"\n            type=\"button\"\n            aria-label=\"Previous page\"\n            [disabled]=\"safeListPage() === 1\"\n            (click)=\"setListPage(safeListPage() - 1)\"\n          >\n            \u2039</button\n          ><button\n            class=\"erp-pagination__button erp-pagination__button--active\"\n            type=\"button\"\n            aria-current=\"page\"\n          >\n            {{ safeListPage() }}</button\n          ><button\n            class=\"erp-pagination__button\"\n            type=\"button\"\n            aria-label=\"Next page\"\n            [disabled]=\"safeListPage() === listTotalPages()\"\n            (click)=\"setListPage(safeListPage() + 1)\"\n          >\n            \u203A\n          </button>\n        </div>\n      </div>\n    </section>\n  }\n\n  @if (section() === 'heads' && isCreatePage() && selectedBookId) {\n    <section class=\"erp-card erp-card--padded erp-create-card fee-section-gap\">\n      <div class=\"erp-card__header\">\n        <div>\n          <h2>{{ editingHead() ? 'Edit fee head' : 'Add fee head' }}</h2>\n          <p>Discounts and calculated payment options remain separate from payable fee heads.</p>\n        </div>\n      </div>\n      <div class=\"fee-inline-form\">\n        <label class=\"erp-field-stack\"\n          ><span>Head name *</span\n          ><input class=\"erp-control\" [(ngModel)]=\"headName\" placeholder=\"e.g. Tuition Fee\"\n        /></label>\n        <label class=\"erp-field-stack\"\n          ><span>Category *</span\n          ><select class=\"erp-control\" [(ngModel)]=\"headCategory\">\n            <option value=\"fee\">Payable fee</option>\n            <option value=\"discount\">Discount / scholarship</option>\n            <option value=\"payment-option\">Calculated payment option</option>\n          </select></label\n        >\n        <label class=\"erp-field-stack\"\n          ><span>Priority number *</span\n          ><input\n            class=\"erp-control\"\n            type=\"number\"\n            min=\"1\"\n            [max]=\"orderedBookHeads().length + (editingHead() ? 0 : 1)\"\n            [(ngModel)]=\"headPriority\"\n          /><small>1 is highest and appears first, followed by 2, 3, 4\u2026</small></label\n        >\n        <label class=\"erp-field-stack\"\n          ><span>Semester calculation</span\n          ><select class=\"erp-control\" [(ngModel)]=\"headDivideSemesterWise\">\n            <option [ngValue]=\"false\">Keep the full amount</option>\n            <option [ngValue]=\"true\">Divide this head by 2</option></select\n          ><small>Applied only when the student uses semester-wise fees.</small></label\n        >\n        @if (editingHead()) {\n          <button class=\"erp-button erp-button--secondary\" type=\"button\" (click)=\"resetHead()\">\n            Cancel\n          </button>\n        }\n        <button\n          class=\"erp-button erp-button--primary\"\n          type=\"button\"\n          [disabled]=\"saving()\"\n          (click)=\"saveHead()\"\n        >\n          {{ editingHead() ? 'Save head' : 'Add head' }}\n        </button>\n      </div>\n    </section>\n  }\n\n  @if (section() === 'heads' && isViewPage() && selectedBookId) {\n    <section class=\"erp-card erp-table-shell fee-section-gap\">\n      <div class=\"erp-table-toolbar\">\n        <div>\n          <h2>\n            Heads in selected book <small>{{ filteredHeads().length }}</small>\n          </h2>\n          <p>Priority controls payment allocation order. It is not displayed to students.</p>\n        </div>\n        <div class=\"erp-table-toolbar__actions\">\n          <label class=\"erp-search-control\"\n            ><span class=\"erp-sr-only\">Search fee heads</span\n            ><input\n              type=\"search\"\n              placeholder=\"Search head name or category\"\n              [value]=\"listSearch()\"\n              (input)=\"updateListSearch($any($event.target).value)\" /></label\n          ><erp-filter-popover\n            label=\"Status filters\"\n            [options]=\"statusFilterOptions\"\n            [value]=\"listStatus()\"\n            (valueChange)=\"updateListStatus($any($event))\"\n          />\n        </div>\n      </div>\n      <div class=\"erp-table-shell__scroll\">\n        <table>\n          <thead>\n            <tr>\n              <th>Priority</th>\n              <th>Fee head</th>\n              <th>Category</th>\n              <th>Semester mode</th>\n              <th>Book</th>\n              <th>Status</th>\n              <th class=\"erp-table-shell__actions\">Actions</th>\n            </tr>\n          </thead>\n          <tbody>\n            @for (head of pagedHeads(); track head._id) {\n              <tr>\n                <td>\n                  <span class=\"fee-priority-pill\">{{ head.priority || '\u2014' }}</span>\n                </td>\n                <td>\n                  <strong>{{ head.name }}</strong>\n                </td>\n                <td>{{ head.category }}</td>\n                <td>{{ head.divideSemesterWise ? 'Divide by 2' : 'Full amount' }}</td>\n                <td>{{ head.bookCode }}</td>\n                <td>\n                  <span class=\"erp-status\" [class.erp-status--neutral]=\"!head.isActive\">{{\n                    head.isActive ? 'Active' : 'Disabled'\n                  }}</span>\n                </td>\n                <td class=\"erp-table-shell__actions\">\n                  <erp-compact-action-menu\n                    [items]=\"rowActions\"\n                    (selected)=\"handleHeadAction($event, head)\"\n                  />\n                </td>\n              </tr>\n            } @empty {\n              <tr>\n                <td colspan=\"7\" class=\"erp-empty-state\">\n                  {{\n                    loading()\n                      ? 'Loading fee heads\u2026'\n                      : selectedBookId\n                        ? 'No fee heads match the current filters.'\n                        : 'Select a fee book to view its fee heads.'\n                  }}\n                </td>\n              </tr>\n            }\n          </tbody>\n        </table>\n      </div>\n      <div class=\"erp-pagination\">\n        <span\n          >Showing {{ pagedHeads().length }} of {{ filteredHeads().length }} heads \u00B7 Page\n          {{ safeListPage() }} of {{ listTotalPages() }}</span\n        >\n        <div class=\"erp-pagination__pages\">\n          <select\n            class=\"erp-control erp-pagination__size\"\n            aria-label=\"Rows per page\"\n            [ngModel]=\"listPageSize()\"\n            (ngModelChange)=\"updateListPageSize($event)\"\n          >\n            @for (size of pageSizeOptions; track size) {\n              <option [ngValue]=\"size\">{{ size }} / page</option>\n            }</select\n          ><button\n            class=\"erp-pagination__button\"\n            type=\"button\"\n            aria-label=\"Previous page\"\n            [disabled]=\"safeListPage() === 1\"\n            (click)=\"setListPage(safeListPage() - 1)\"\n          >\n            \u2039</button\n          ><button\n            class=\"erp-pagination__button erp-pagination__button--active\"\n            type=\"button\"\n            aria-current=\"page\"\n          >\n            {{ safeListPage() }}</button\n          ><button\n            class=\"erp-pagination__button\"\n            type=\"button\"\n            aria-label=\"Next page\"\n            [disabled]=\"safeListPage() === listTotalPages()\"\n            (click)=\"setListPage(safeListPage() + 1)\"\n          >\n            \u203A\n          </button>\n        </div>\n      </div>\n    </section>\n  }\n\n  @if (section() === 'hostel-fees' && isCreatePage() && selectedBookId) {\n    <section class=\"erp-card erp-card--padded erp-create-card fee-section-gap\">\n      <div class=\"erp-card__header\">\n        <div>\n          <h2>Assign hostel fee</h2>\n          <p>The same hostel can have different charges for each seater and room type.</p>\n        </div>\n      </div>\n      <div class=\"fee-form-grid\">\n        <label class=\"erp-field-stack\"\n          ><span>Hostel *</span\n          ><select class=\"erp-control\" [(ngModel)]=\"hostelId\">\n            <option value=\"\">Select hostel</option>\n            @for (hostel of hostels(); track hostel._id) {\n              <option [value]=\"hostel._id\">{{ hostel.name }}</option>\n            }\n          </select></label\n        >\n        <label class=\"erp-field-stack\"\n          ><span>Room seater *</span\n          ><select class=\"erp-control\" [(ngModel)]=\"hostelSeater\">\n            @for (seater of [1, 2, 3, 4, 5]; track seater) {\n              <option [ngValue]=\"seater\">{{ seater }}-Seater</option>\n            }\n          </select></label\n        >\n        <label class=\"erp-field-stack\"\n          ><span>Room type *</span\n          ><input\n            class=\"erp-control\"\n            [(ngModel)]=\"hostelRoomType\"\n            list=\"fee-room-types\"\n            placeholder=\"AC, Non AC or custom\" /><datalist id=\"fee-room-types\">\n            <option value=\"AC\"></option>\n            <option value=\"Non AC\"></option></datalist\n        ></label>\n        <label class=\"erp-field-stack\"\n          ><span>Fee head *</span\n          ><select class=\"erp-control\" [(ngModel)]=\"hostelFeeHeadId\">\n            <option value=\"\">Select fee head</option>\n            @for (head of bookHeads(); track head._id) {\n              <option [value]=\"head._id\">{{ head.name }}</option>\n            }\n          </select></label\n        >\n        <label class=\"erp-field-stack\"\n          ><span>Frequency *</span\n          ><select class=\"erp-control\" [(ngModel)]=\"hostelFrequency\">\n            <option value=\"one-time\">One-time</option>\n            <option value=\"semester\">Semester wise</option>\n            <option value=\"half-yearly\">Half-yearly</option>\n            <option value=\"yearly\">Yearly</option>\n          </select></label\n        >\n        <label class=\"erp-field-stack\"\n          ><span>Amount *</span\n          ><input class=\"erp-control\" type=\"number\" min=\"0\" step=\"0.01\" [(ngModel)]=\"hostelAmount\"\n        /></label>\n      </div>\n      <div class=\"fee-form-actions\">\n        <button\n          class=\"erp-button erp-button--primary\"\n          type=\"button\"\n          [disabled]=\"saving()\"\n          (click)=\"saveHostelFee()\"\n        >\n          Save hostel fee\n        </button>\n      </div>\n    </section>\n  }\n\n  @if (section() === 'hostel-fees' && isViewPage() && selectedBookId) {\n    <section class=\"erp-card erp-table-shell fee-section-gap\">\n      <div class=\"erp-table-toolbar\">\n        <div>\n          <h2>\n            Configured hostel fees <small>{{ filteredHostelFees().length }}</small>\n          </h2>\n          <p>Charges are grouped by the selected fee book and remain independently manageable.</p>\n        </div>\n        <div class=\"erp-table-toolbar__actions\">\n          <label class=\"erp-search-control\"\n            ><span class=\"erp-sr-only\">Search hostel fees</span\n            ><input\n              type=\"search\"\n              placeholder=\"Search hostel, room or head\"\n              [value]=\"listSearch()\"\n              (input)=\"updateListSearch($any($event.target).value)\" /></label\n          ><erp-filter-popover\n            label=\"Frequency filters\"\n            [options]=\"frequencyFilterOptions\"\n            [value]=\"hostelFrequencyFilter()\"\n            (valueChange)=\"updateHostelFrequency($any($event))\"\n          />\n        </div>\n      </div>\n      <div class=\"erp-table-shell__scroll\">\n        <table>\n          <thead>\n            <tr>\n              <th>Hostel</th>\n              <th>Room</th>\n              <th>Fee head</th>\n              <th>Frequency</th>\n              <th>Amount</th>\n              <th class=\"erp-table-shell__actions\">Actions</th>\n            </tr>\n          </thead>\n          <tbody>\n            @for (fee of pagedHostelFees(); track fee._id) {\n              <tr>\n                <td>\n                  <strong>{{ fee.hostelName }}</strong>\n                </td>\n                <td>{{ fee.seater }}-Seater \u00B7 {{ fee.roomType }}</td>\n                <td>{{ fee.feeHeadName }}</td>\n                <td>{{ fee.frequency }}</td>\n                <td>{{ fee.amount | currency: 'INR' : 'symbol' : '1.2-2' }}</td>\n                <td class=\"erp-table-shell__actions\">\n                  <erp-compact-action-menu\n                    [items]=\"deleteActions\"\n                    (selected)=\"deleteHostelFee($event, fee)\"\n                  />\n                </td>\n              </tr>\n            } @empty {\n              <tr>\n                <td colspan=\"6\" class=\"erp-empty-state\">\n                  {{\n                    loading()\n                      ? 'Loading hostel fees\u2026'\n                      : selectedBookId\n                        ? 'No hostel fees match the current filters.'\n                        : 'Select a fee book to view hostel fees.'\n                  }}\n                </td>\n              </tr>\n            }\n          </tbody>\n        </table>\n      </div>\n      <div class=\"erp-pagination\">\n        <span\n          >Showing {{ pagedHostelFees().length }} of {{ filteredHostelFees().length }} fees \u00B7 Page\n          {{ safeListPage() }} of {{ listTotalPages() }}</span\n        >\n        <div class=\"erp-pagination__pages\">\n          <select\n            class=\"erp-control erp-pagination__size\"\n            aria-label=\"Rows per page\"\n            [ngModel]=\"listPageSize()\"\n            (ngModelChange)=\"updateListPageSize($event)\"\n          >\n            @for (size of pageSizeOptions; track size) {\n              <option [ngValue]=\"size\">{{ size }} / page</option>\n            }</select\n          ><button\n            class=\"erp-pagination__button\"\n            type=\"button\"\n            aria-label=\"Previous page\"\n            [disabled]=\"safeListPage() === 1\"\n            (click)=\"setListPage(safeListPage() - 1)\"\n          >\n            \u2039</button\n          ><button\n            class=\"erp-pagination__button erp-pagination__button--active\"\n            type=\"button\"\n            aria-current=\"page\"\n          >\n            {{ safeListPage() }}</button\n          ><button\n            class=\"erp-pagination__button\"\n            type=\"button\"\n            aria-label=\"Next page\"\n            [disabled]=\"safeListPage() === listTotalPages()\"\n            (click)=\"setListPage(safeListPage() + 1)\"\n          >\n            \u203A\n          </button>\n        </div>\n      </div>\n    </section>\n  }\n\n  @if (section() === 'course-fees' && isCreatePage() && selectedBookId) {\n    @if (!courses().length) {\n      <p class=\"erp-notice erp-notice--warning\" role=\"status\">\n        No active Course master records exist yet. Add the complete program names in\n        <a routerLink=\"/admin/master-data/course\">Course Master</a>; then return here to auto-map or\n        manually map the workbook sheets.\n      </p>\n    }\n  }\n\n  @if (section() === 'course-fees' && isCreatePage() && selectedBookId) {\n    <section class=\"erp-card erp-card--padded erp-create-card\">\n      <div class=\"erp-card__header\">\n        <div>\n          <h2>Add course fee manually</h2>\n          <p>\n            Select the fee context once, choose Yearly or Semester fee type, then enter amounts in\n            the generated matrix.\n          </p>\n        </div>\n        <div\n          class=\"course-fee-draft-state\"\n          [class.course-fee-draft-state--error]=\"courseFeeDraftStatus() === 'error'\"\n          role=\"status\"\n        >\n          @switch (courseFeeDraftStatus()) {\n            @case ('saving') {\n              <span class=\"course-fee-draft-state__pulse\"></span><span>Saving draft\u2026</span>\n            }\n            @case ('saved') {\n              <span class=\"course-fee-draft-state__check\">\u2713</span\n              ><span\n                >Draft saved\n                @if (courseFeeDraftSavedAt()) {\n                  {{ courseFeeDraftSavedAt() | date: 'shortTime' }}\n                }\n              </span>\n            }\n            @case ('error') {\n              <span>Draft could not be saved</span>\n            }\n            @default {\n              <span>Changes save automatically</span>\n            }\n          }\n        </div>\n      </div>\n      <div class=\"fee-form-grid\">\n        <label class=\"erp-field-stack\"\n          ><span>Department *</span\n          ><select\n            class=\"erp-control\"\n            [(ngModel)]=\"departmentId\"\n            (ngModelChange)=\"departmentChanged()\"\n          >\n            <option value=\"\">Select department</option>\n            @for (department of departmentOptions(); track department._id) {\n              <option [value]=\"department._id\">{{ department.name }}</option>\n            }\n          </select></label\n        >\n        <label class=\"erp-field-stack\"\n          ><span>Level *</span\n          ><select class=\"erp-control\" [(ngModel)]=\"levelId\" (ngModelChange)=\"levelChanged()\">\n            <option value=\"\">Select level</option>\n            @for (level of levelOptions(); track level._id) {\n              <option [value]=\"level._id\">{{ level.name }}</option>\n            }\n          </select></label\n        >\n        <label class=\"erp-field-stack\"\n          ><span>Course *</span\n          ><select class=\"erp-control\" [(ngModel)]=\"courseId\" (ngModelChange)=\"courseChanged()\">\n            <option value=\"\">Select course</option>\n            @for (course of courseOptions(); track course._id) {\n              <option [value]=\"course._id\">{{ course.name }}</option>\n            }\n          </select></label\n        >\n        <label class=\"erp-field-stack\"\n          ><span>Domicile *</span\n          ><select\n            class=\"erp-control\"\n            [(ngModel)]=\"courseDomicileId\"\n            (ngModelChange)=\"scheduleCourseFeeDraftSave()\"\n          >\n            <option value=\"\">Select domicile</option>\n            @for (domicile of domiciles(); track domicile._id) {\n              <option [value]=\"domicile._id\">{{ domicile.name }}</option>\n            }\n          </select>\n          @if (!domiciles().length) {\n            <small\n              >Add values in <a routerLink=\"/admin/master-data/domicile\">Domicile Master</a>.</small\n            >\n          }\n        </label>\n        <label class=\"erp-field-stack\"\n          ><span>Student type *</span\n          ><select\n            class=\"erp-control\"\n            [(ngModel)]=\"courseStudentTypeId\"\n            (ngModelChange)=\"courseStudentTypeChanged()\"\n          >\n            <option value=\"\">Select student type</option>\n            @for (studentType of studentTypes(); track studentType._id) {\n              <option [value]=\"studentType._id\">{{ studentType.name }}</option>\n            }\n          </select>\n          @if (!studentTypes().length) {\n            <small\n              >Add values in\n              <a routerLink=\"/admin/master-data/student-type\">Student Type Master</a>.</small\n            >\n          }\n        </label>\n        <label class=\"erp-field-stack\"\n          ><span>Fee type *</span\n          ><select\n            class=\"erp-control\"\n            [(ngModel)]=\"courseFeeTypeId\"\n            (focus)=\"loadFeeTypes()\"\n            (ngModelChange)=\"courseFeeTypeChanged()\"\n          >\n            <option value=\"\">Select yearly or semester</option>\n            @for (feeType of feeTypes(); track feeType._id) {\n              <option [value]=\"feeType._id\">{{ feeType.name }}</option>\n            }\n          </select>\n          @if (!feeTypes().length) {\n            <small\n              >Fee types are loading. You can also manage them in\n              <a routerLink=\"/admin/master-data/fee-type\">Fee Type Master</a>.</small\n            >\n          }\n        </label>\n        @if (courseRequiresCountry()) {\n          <label class=\"erp-field-stack\"\n            ><span>Country *</span\n            ><select\n              class=\"erp-control\"\n              [(ngModel)]=\"courseCountryId\"\n              (ngModelChange)=\"scheduleCourseFeeDraftSave()\"\n            >\n              <option value=\"\">Select country</option>\n              @for (country of countries(); track country._id) {\n                <option [value]=\"country._id\">{{ country.name }}</option>\n              }\n            </select>\n            @if (!countries().length) {\n              <small\n                >Add values in <a routerLink=\"/admin/master-data/country\">Country Master</a>.</small\n              >\n            }\n          </label>\n        }\n      </div>\n      @if (courseId && courseFeeTypeId && courseFeePeriods().length) {\n        <div class=\"fee-matrix-workspace\">\n          <div class=\"fee-matrix-workspace__header\">\n            <div>\n              <h3>Fee head matrix</h3>\n              <p>\n                {{ courseFeePeriodType() === 'semester' ? 'Semester-wise' : 'Year-wise' }} fees \u00B7\n                {{ selectedCourse()?.name }} \u00B7 {{ courseFeePeriods().length }} periods\n              </p>\n            </div>\n          </div>\n          <div class=\"fee-matrix-context\" aria-label=\"Matrix summary\">\n            <span\n              ><strong>{{ activeCourseFeeHeads().length }}</strong> available heads</span\n            >\n            <span\n              ><strong>{{ selectedCourseFeeHeadIds().length }}</strong> selected</span\n            >\n            <span\n              ><strong>{{ populatedMatrixCellCount() }}</strong> amounts entered</span\n            >\n            <span\n              ><strong>{{ matrixGrandTotal() | currency: 'INR' : 'symbol' : '1.0-2' }}</strong>\n              matrix total</span\n            >\n          </div>\n          <div class=\"erp-table-shell__scroll fee-matrix-editor\">\n            <table class=\"fee-matrix-table fee-matrix-table--editable\">\n              <thead>\n                <tr>\n                  <th class=\"fee-matrix-table__select\">\n                    <input\n                      type=\"checkbox\"\n                      aria-label=\"Select all fee heads\"\n                      [checked]=\"allCourseFeeHeadsSelected()\"\n                      (change)=\"selectAllCourseFeeHeads()\"\n                    />\n                  </th>\n                  <th>Fee head</th>\n                  @for (period of courseFeePeriods(); track period.key) {\n                    <th class=\"fee-matrix-period\">\n                      <span>{{ period.label }}</span>\n                      <small>Amount (\u20B9)</small>\n                    </th>\n                  }\n                </tr>\n              </thead>\n              <tbody>\n                @for (head of activeCourseFeeHeads(); track head._id; let rowIndex = $index) {\n                  <tr [class.fee-matrix-row--selected]=\"feeHeadSelected(head._id)\">\n                    <td class=\"fee-matrix-table__select\">\n                      <label class=\"fee-row-selector\"\n                        ><input\n                          type=\"checkbox\"\n                          [attr.aria-label]=\"'Select ' + head.name\"\n                          [checked]=\"feeHeadSelected(head._id)\"\n                          (change)=\"selectCourseFeeHead(head._id)\"\n                        /><span>{{ rowIndex + 1 }}</span></label\n                      >\n                    </td>\n                    <td class=\"fee-matrix-head\">\n                      <strong>{{ head.name }}</strong\n                      ><span\n                        ><small>#{{ head.priority || rowIndex + 1 }}</small\n                        ><small>{{\n                          head.category === 'fee' ? 'Payable' : head.category\n                        }}</small></span\n                      >\n                    </td>\n                    @for (\n                      period of courseFeePeriods();\n                      track period.key;\n                      let columnIndex = $index\n                    ) {\n                      <td>\n                        <label\n                          class=\"fee-matrix-cell\"\n                          [class.fee-matrix-cell--active]=\"\n                            activeMatrixCell() === matrixCellKey(head._id, period.key)\n                          \"\n                          ><span aria-hidden=\"true\">\u20B9</span\n                          ><input\n                            class=\"fee-matrix-amount\"\n                            type=\"number\"\n                            min=\"0\"\n                            step=\"0.01\"\n                            inputmode=\"decimal\"\n                            placeholder=\"0.00\"\n                            title=\"Double-click to fill row; Shift + double-click to fill column\"\n                            [attr.aria-label]=\"head.name + ', ' + period.label + ' amount'\"\n                            [attr.data-matrix-row]=\"rowIndex\"\n                            [attr.data-matrix-column]=\"columnIndex\"\n                            [ngModel]=\"feeMatrixValue(head._id, period.key)\"\n                            (focus)=\"\n                              activeMatrixCell.set(matrixCellKey(head._id, period.key));\n                              selectMatrixValue($event)\n                            \"\n                            (paste)=\"pasteMatrixValues($event, rowIndex, columnIndex)\"\n                            (dblclick)=\"fillMatrixFromCell($event, head._id, period.key)\"\n                            (keydown)=\"\n                              handleMatrixKeydown(\n                                $event,\n                                rowIndex,\n                                columnIndex,\n                                head._id,\n                                period.key\n                              )\n                            \"\n                            (ngModelChange)=\"updateFeeMatrixAmount(head._id, period.key, $event)\"\n                        /></label>\n                      </td>\n                    }\n                  </tr>\n                } @empty {\n                  <tr>\n                    <td [attr.colspan]=\"courseFeePeriods().length + 2\" class=\"erp-empty-state\">\n                      No active fee heads found for this book. Create fee heads first.\n                    </td>\n                  </tr>\n                }\n              </tbody>\n            </table>\n          </div>\n          <div class=\"fee-matrix-workspace__footer\">\n            <span>Amounts will be saved for the selected course and fee context.</span>\n            <button\n              class=\"erp-button erp-button--primary\"\n              type=\"button\"\n              [disabled]=\"\n                saving() ||\n                courseFeeDraftStatus() === 'saving' ||\n                !selectedCourseFeeHeadIds().length ||\n                !populatedMatrixCellCount()\n              \"\n              (click)=\"saveCourseFee()\"\n            >\n              {{ saving() ? 'Saving\u2026' : 'Save fee matrix' }}\n            </button>\n          </div>\n        </div>\n      } @else if (!courseId) {\n        <div class=\"erp-empty-state fee-section-gap\">\n          Select a course to load the fee-head matrix.\n        </div>\n      } @else if (!courseFeeTypeId) {\n        <div class=\"erp-empty-state fee-section-gap\">\n          Select Fee Type to generate Yearly or Semester columns.\n        </div>\n      } @else {\n        <div class=\"erp-empty-state fee-section-gap\">\n          The selected Fee Type is not configured as Yearly or Semester.\n        </div>\n      }\n    </section>\n  }\n\n  @if (section() === 'course-fees' && isImportPage() && selectedBookId) {\n    <section class=\"erp-card erp-card--padded erp-create-card\">\n      <div class=\"erp-card__header\">\n        <div>\n          <h2>Bulk upload fee workbook</h2>\n          <p>\n            Upload .xlsx, review every automatic match, manually map unresolved sheets and fee\n            heads, then import.\n          </p>\n        </div>\n      </div>\n      <div class=\"fee-upload-row\">\n        <label class=\"erp-field-stack\"\n          ><span>Domicile *</span\n          ><select\n            class=\"erp-control\"\n            [(ngModel)]=\"importDomicileId\"\n            (ngModelChange)=\"preview.set(null)\"\n          >\n            <option value=\"\">Select domicile for this workbook</option>\n            @for (domicile of domiciles(); track domicile._id) {\n              <option [value]=\"domicile._id\">{{ domicile.name }}</option>\n            }\n          </select></label\n        >\n        <label class=\"erp-field-stack\"\n          ><span>Student type *</span\n          ><select\n            class=\"erp-control\"\n            [(ngModel)]=\"importStudentTypeId\"\n            (ngModelChange)=\"importStudentTypeChanged()\"\n          >\n            <option value=\"\">Select student type for this workbook</option>\n            @for (studentType of studentTypes(); track studentType._id) {\n              <option [value]=\"studentType._id\">{{ studentType.name }}</option>\n            }\n          </select></label\n        >\n        @if (importRequiresCountry()) {\n          <label class=\"erp-field-stack\"\n            ><span>Country *</span\n            ><select\n              class=\"erp-control\"\n              [(ngModel)]=\"importCountryId\"\n              (ngModelChange)=\"preview.set(null)\"\n            >\n              <option value=\"\">Select country for this workbook</option>\n              @for (country of countries(); track country._id) {\n                <option [value]=\"country._id\">{{ country.name }}</option>\n              }\n            </select></label\n          >\n        }\n        <label class=\"erp-field-stack\"\n          ><span>Excel workbook *</span\n          ><input\n            class=\"erp-control\"\n            type=\"file\"\n            accept=\".xlsx\"\n            [disabled]=\"\n              !selectedBookId ||\n              !importDomicileId ||\n              !importStudentTypeId ||\n              (importRequiresCountry() && !importCountryId) ||\n              saving()\n            \"\n            (change)=\"previewWorkbook($event)\"\n        /></label>\n        <small\n          >Every imported fee will use the selected domicile, student type and country when\n          required. Nothing is saved until you confirm the mapping preview.</small\n        >\n      </div>\n    </section>\n\n    @if (preview(); as importPreview) {\n      <section class=\"erp-card erp-card--padded fee-section-gap\">\n        <div class=\"erp-card__header\">\n          <div>\n            <h2>Workbook mapping preview</h2>\n            <p>\n              {{ importPreview.fileName }} \u00B7 Domicile: {{ importPreview.domicileName }} \u00B7 Student\n              type: {{ importPreview.studentTypeName }}\n              @if (importPreview.countryName) {\n                \u00B7 Country: {{ importPreview.countryName }}\n              }\n            </p>\n          </div>\n        </div>\n        <div class=\"fee-mapping-summary\">\n          <div>\n            <strong>{{ previewCounts().total }}</strong\n            ><span>Sheets</span>\n          </div>\n          <div>\n            <strong>{{ previewCounts().mapped }}</strong\n            ><span>Mapped courses</span>\n          </div>\n          <div>\n            <strong>{{ previewCounts().needsMapping }}</strong\n            ><span>Need manual mapping</span>\n          </div>\n          <div>\n            <strong>{{ previewCounts().lines }}</strong\n            ><span>Detected fee rows</span>\n          </div>\n        </div>\n        <label class=\"fee-checkbox\"\n          ><input\n            type=\"checkbox\"\n            [checked]=\"showOnlyNeedsMapping()\"\n            (change)=\"showOnlyNeedsMapping.set($any($event.target).checked); previewPage = 1\"\n          />\n          Show only sheets needing manual mapping</label\n        >\n      </section>\n\n      <section class=\"erp-card erp-card--padded fee-section-gap\">\n        <div class=\"erp-card__header fee-list-header\">\n          <div>\n            <h2>Course sheet mapping</h2>\n            <p>\n              Showing {{ pagedPreviewSheets().length }} of\n              {{ filteredPreviewSheets().length }} Excel sheets\n            </p>\n          </div>\n          <label class=\"erp-field-stack fee-page-size\"\n            ><span>Rows per page</span\n            ><select\n              class=\"erp-control\"\n              [ngModel]=\"previewPageSize\"\n              (ngModelChange)=\"setPreviewPageSize($event)\"\n            >\n              <option [ngValue]=\"10\">10</option>\n              <option [ngValue]=\"20\">20</option>\n              <option [ngValue]=\"50\">50</option>\n            </select></label\n          >\n        </div>\n        <div class=\"fee-mapping-card-list\">\n          @for (sheet of pagedPreviewSheets(); track sheet.sheetName) {\n            <article class=\"fee-mapping-card\">\n              <header class=\"fee-mapping-card__header\">\n                <div>\n                  <span class=\"fee-sheet-name\">{{ sheet.sheetName }}</span>\n                  <h3>{{ sheet.courseTitle }}</h3>\n                  <p>\n                    Intake {{ sheet.intakeYear || 'requires review' }} \u00B7 {{ sheet.lineCount }} fee\n                    rows\n                  </p>\n                </div>\n                <span\n                  class=\"erp-status\"\n                  [class.erp-status--neutral]=\"!sheetMappings[sheet.sheetName]?.length\"\n                  >{{ previewMappingStatus(sheet) }}</span\n                >\n              </header>\n              <div class=\"fee-mapping-card__body\">\n                <div class=\"fee-detected-details\">\n                  <strong>Detected from workbook</strong>\n                  @if (sheet.programNames.length > 1) {\n                    <p>This fee sheet is shared by:</p>\n                    <ul>\n                      @for (program of sheet.programNames; track program) {\n                        <li>{{ program }}</li>\n                      }\n                    </ul>\n                  } @else {\n                    <p>{{ sheet.programNames[0] || sheet.subtitle }}</p>\n                  }\n                  @if (sheet.match.candidates.length && !sheetMappings[sheet.sheetName]?.length) {\n                    <p class=\"fee-suggestion\">\n                      Suggested Course: {{ sheet.match.candidates[0].courseName }}\n                    </p>\n                  }\n                  @for (warning of sheet.warnings; track warning) {\n                    <p class=\"fee-warning\">{{ warning }}</p>\n                  }\n                </div>\n                <div class=\"fee-assignment-editor\">\n                  <strong>Mapped Course master records</strong>\n                  <div class=\"fee-course-chips\">\n                    @for (courseId of sheetMappings[sheet.sheetName] || []; track courseId) {\n                      <span class=\"fee-course-chip\"\n                        >{{ courseName(courseId)\n                        }}<button\n                          type=\"button\"\n                          [attr.aria-label]=\"'Remove ' + courseName(courseId)\"\n                          (click)=\"removePreviewCourse(sheet.sheetName, courseId)\"\n                        >\n                          \u00D7\n                        </button></span\n                      >\n                    } @empty {\n                      <span class=\"fee-unmapped-copy\"\n                        >No course is mapped. This sheet will be skipped.</span\n                      >\n                    }\n                  </div>\n                  <div class=\"fee-course-picker\">\n                    <select class=\"erp-control\" [(ngModel)]=\"previewCourseToAdd[sheet.sheetName]\">\n                      <option value=\"\">Select a Course master record</option>\n                      @for (course of courses(); track course._id) {\n                        <option\n                          [value]=\"course._id\"\n                          [disabled]=\"sheetMappings[sheet.sheetName]?.includes(course._id)\"\n                        >\n                          {{ course.name }}\n                        </option>\n                      }</select\n                    ><button\n                      class=\"erp-button erp-button--secondary\"\n                      type=\"button\"\n                      (click)=\"addPreviewCourse(sheet.sheetName)\"\n                      [disabled]=\"!previewCourseToAdd[sheet.sheetName]\"\n                    >\n                      Add course\n                    </button>\n                  </div>\n                </div>\n              </div>\n            </article>\n          } @empty {\n            <div class=\"erp-empty-state\">No sheets match the selected filter.</div>\n          }\n        </div>\n        <div class=\"erp-pagination fee-pagination\">\n          <span>Page {{ previewPage }} of {{ previewTotalPages() }}</span>\n          <div class=\"erp-pagination__pages\">\n            <button\n              class=\"erp-pagination__button\"\n              type=\"button\"\n              aria-label=\"Previous page\"\n              [disabled]=\"previewPage === 1\"\n              (click)=\"setPreviewPage(previewPage - 1)\"\n            >\n              \u2039</button\n            ><button class=\"erp-pagination__button erp-pagination__button--active\" type=\"button\">\n              {{ previewPage }}</button\n            ><button\n              class=\"erp-pagination__button\"\n              type=\"button\"\n              aria-label=\"Next page\"\n              [disabled]=\"previewPage === previewTotalPages()\"\n              (click)=\"setPreviewPage(previewPage + 1)\"\n            >\n              \u203A\n            </button>\n          </div>\n        </div>\n      </section>\n\n      <section class=\"erp-card erp-table-shell fee-section-gap\">\n        <div class=\"erp-table-toolbar\">\n          <h2>\n            Excel fee-head mapping <small>{{ importPreview.headMappings.length }}</small>\n          </h2>\n        </div>\n        <div class=\"erp-table-shell__scroll\">\n          <table>\n            <thead>\n              <tr>\n                <th>Excel fee label</th>\n                <th>Status</th>\n                <th>Map to Fee Head</th>\n              </tr>\n            </thead>\n            <tbody>\n              @for (mapping of importPreview.headMappings; track mapping.sourceHead) {\n                <tr>\n                  <td>\n                    <strong>{{ mapping.sourceHead }}</strong>\n                  </td>\n                  <td>\n                    <span\n                      class=\"erp-status\"\n                      [class.erp-status--neutral]=\"!headMappings[mapping.sourceHead]\"\n                      >{{ headMappings[mapping.sourceHead] ? 'Mapped' : 'Needs mapping' }}</span\n                    >\n                  </td>\n                  <td>\n                    <select class=\"erp-control\" [(ngModel)]=\"headMappings[mapping.sourceHead]\">\n                      <option value=\"\">Skip this Excel label</option>\n                      @for (head of bookHeads(); track head._id) {\n                        <option [value]=\"head._id\">{{ head.name }}</option>\n                      }\n                    </select>\n                  </td>\n                </tr>\n              }\n            </tbody>\n          </table>\n        </div>\n      </section>\n\n      <section class=\"erp-card erp-card--padded fee-section-gap\">\n        <div class=\"fee-import-actions\">\n          <label class=\"fee-checkbox\"\n            ><input type=\"checkbox\" [(ngModel)]=\"replaceExisting\" /> Replace earlier Excel-imported\n            fees for mapped courses</label\n          ><button\n            class=\"erp-button erp-button--primary\"\n            type=\"button\"\n            [disabled]=\"saving()\"\n            (click)=\"commitImport()\"\n          >\n            Confirm and import mapped fees\n          </button>\n        </div>\n      </section>\n    }\n  }\n\n  @if (section() === 'course-fees' && isDraftPage()) {\n    @if (visibleCourseFeeDrafts().length) {\n      <section class=\"erp-card erp-table-shell course-fee-drafts\">\n        <div class=\"erp-table-toolbar\">\n          <div>\n            <h2>Saved drafts</h2>\n            <p>Continue incomplete course-fee work without losing entered amounts.</p>\n          </div>\n          <span class=\"erp-status erp-status--neutral\"\n            >{{ visibleCourseFeeDrafts().length }} draft{{\n              visibleCourseFeeDrafts().length === 1 ? '' : 's'\n            }}</span\n          >\n        </div>\n        <div class=\"erp-table-shell__scroll\">\n          <table>\n            <thead>\n              <tr>\n                <th>Fee book</th>\n                <th>Course</th>\n                <th>Progress</th>\n                <th>Last saved</th>\n                <th class=\"erp-table-shell__actions\">Actions</th>\n              </tr>\n            </thead>\n            <tbody>\n              @for (draft of visibleCourseFeeDrafts(); track draft._id) {\n                <tr>\n                  <td>\n                    <strong>{{ draft.bookCode }}</strong\n                    ><small>{{ draft.collegeName }} \u00B7 {{ draft.academicSession }}</small>\n                  </td>\n                  <td>\n                    <strong>{{ draft.courseName || 'Course not selected' }}</strong\n                    ><small>{{\n                      draft.feeTypeId ? 'Fee type selected' : 'Context incomplete'\n                    }}</small>\n                  </td>\n                  <td>\n                    <span class=\"erp-status erp-status--neutral\">Draft</span\n                    ><small\n                      >{{ draft.selectedFeeHeadIds.length }} fee heads \u00B7\n                      {{ draftAmountCount(draft) }} amounts</small\n                    >\n                  </td>\n                  <td>{{ draft.updatedAt | date: 'medium' }}</td>\n                  <td class=\"erp-table-shell__actions\">\n                    <erp-compact-action-menu\n                      [items]=\"draftActions\"\n                      (selected)=\"handleCourseFeeDraftAction($event, draft)\"\n                    />\n                  </td>\n                </tr>\n              }\n            </tbody>\n          </table>\n        </div>\n      </section>\n    } @else {\n      <section class=\"erp-card erp-card--padded erp-empty-state\">\n        No saved course-fee drafts found.\n      </section>\n    }\n  }\n\n  @if (section() === 'course-fee-view') {\n    @if (selectedBookId) {\n      <section class=\"fee-course-explorer\">\n        <img src=\"assets/admin/finance-icons/course-fees.png\" alt=\"\" aria-hidden=\"true\" />\n        <div>\n          <h2>Course fee explorer</h2>\n          <p>Keep the result visible and open criteria only when you need to change it.</p>\n        </div>\n        <button\n          class=\"erp-button erp-button--secondary\"\n          type=\"button\"\n          (click)=\"courseViewFiltersOpen.set(true)\"\n        >\n          <svg lucideFilter size=\"16\" aria-hidden=\"true\"></svg>\n          {{ courseFeeViewRecords().length ? 'Change criteria' : 'Choose criteria' }}\n        </button>\n      </section>\n\n      @if (courseViewFiltersOpen()) {\n        <div class=\"erp-drawer-layer\">\n          <button\n            class=\"erp-drawer-backdrop\"\n            type=\"button\"\n            aria-label=\"Close course fee filters\"\n            (click)=\"courseViewFiltersOpen.set(false)\"\n          ></button>\n          <section\n            class=\"erp-drawer fee-view-filter-drawer\"\n            role=\"dialog\"\n            aria-modal=\"true\"\n            aria-labelledby=\"course-fee-filter-title\"\n            cdkTrapFocus\n            [cdkTrapFocusAutoCapture]=\"true\"\n          >\n            <header class=\"erp-drawer__header\">\n              <span class=\"erp-drawer__icon fee-view-filter-drawer__icon\">\n                <img src=\"assets/admin/finance-icons/course-fees.png\" alt=\"\" aria-hidden=\"true\" />\n              </span>\n              <div>\n                <small>Course fee explorer</small>\n                <h2 id=\"course-fee-filter-title\">Filter fee structure</h2>\n                <p>Select the academic and student context for one precise result.</p>\n              </div>\n              <button\n                class=\"erp-icon-button\"\n                type=\"button\"\n                aria-label=\"Close course fee filters\"\n                (click)=\"courseViewFiltersOpen.set(false)\"\n              >\n                <svg lucideX size=\"17\" aria-hidden=\"true\"></svg>\n              </button>\n            </header>\n            <div class=\"erp-drawer__body\">\n              <div class=\"fee-view-filter-grid\">\n                <label class=\"erp-field-stack\"\n                  ><span>Fee book *</span\n                  ><button\n                    class=\"erp-control fee-picker-control\"\n                    type=\"button\"\n                    (click)=\"openBookSelector()\"\n                  >\n                    <span>{{ currentBook()?.code || 'Select fee book' }}</span\n                    ><small>{{\n                      currentBook()\n                        ? currentBook()!.collegeName + ' \u00B7 ' + currentBook()!.academicSession\n                        : 'Choose university, college and session'\n                    }}</small>\n                  </button></label\n                >\n                <label class=\"erp-field-stack\"\n                  ><span>College *</span\n                  ><select\n                    class=\"erp-control\"\n                    [(ngModel)]=\"viewCollegeId\"\n                    (ngModelChange)=\"viewCollegeChanged()\"\n                  >\n                    <option value=\"\">Select college</option>\n                    @for (college of viewCollegeOptions(); track college._id) {\n                      <option [value]=\"college._id\">{{ college.name }}</option>\n                    }\n                  </select></label\n                >\n                <label class=\"erp-field-stack\"\n                  ><span>Department *</span\n                  ><select\n                    class=\"erp-control\"\n                    [(ngModel)]=\"viewDepartmentId\"\n                    (ngModelChange)=\"viewDepartmentChanged()\"\n                  >\n                    <option value=\"\">Select department</option>\n                    @for (department of viewDepartmentOptions(); track department._id) {\n                      <option [value]=\"department._id\">{{ department.name }}</option>\n                    }\n                  </select></label\n                >\n                <label class=\"erp-field-stack\"\n                  ><span>Level *</span\n                  ><select\n                    class=\"erp-control\"\n                    [(ngModel)]=\"viewLevelId\"\n                    (ngModelChange)=\"viewLevelChanged()\"\n                  >\n                    <option value=\"\">Select level</option>\n                    @for (level of viewLevelOptions(); track level._id) {\n                      <option [value]=\"level._id\">{{ level.name }}</option>\n                    }\n                  </select></label\n                >\n                <label class=\"erp-field-stack\"\n                  ><span>Course *</span\n                  ><select\n                    class=\"erp-control\"\n                    [(ngModel)]=\"viewCourseId\"\n                    (ngModelChange)=\"courseFeeViewRecords.set([])\"\n                  >\n                    <option value=\"\">Select course</option>\n                    @for (course of viewCourseOptions(); track course._id) {\n                      <option [value]=\"course._id\">{{ course.name }}</option>\n                    }\n                  </select></label\n                >\n                <label class=\"erp-field-stack\"\n                  ><span>Domicile *</span\n                  ><select\n                    class=\"erp-control\"\n                    [(ngModel)]=\"viewDomicileId\"\n                    (ngModelChange)=\"viewDomicileChanged()\"\n                  >\n                    <option value=\"\">Select domicile</option>\n                    @for (domicile of domiciles(); track domicile._id) {\n                      <option [value]=\"domicile._id\">{{ domicile.name }}</option>\n                    }\n                  </select></label\n                >\n                <label class=\"erp-field-stack\"\n                  ><span>Student type *</span\n                  ><select\n                    class=\"erp-control\"\n                    [(ngModel)]=\"viewStudentTypeId\"\n                    (ngModelChange)=\"viewStudentTypeChanged()\"\n                  >\n                    <option value=\"\">Select student type</option>\n                    @for (studentType of studentTypes(); track studentType._id) {\n                      <option [value]=\"studentType._id\">{{ studentType.name }}</option>\n                    }\n                  </select></label\n                >\n                @if (viewRequiresCountry()) {\n                  <label class=\"erp-field-stack\"\n                    ><span>Country *</span\n                    ><select\n                      class=\"erp-control\"\n                      [(ngModel)]=\"viewCountryId\"\n                      (ngModelChange)=\"viewCountryChanged()\"\n                    >\n                      <option value=\"\">Select country</option>\n                      @for (country of countries(); track country._id) {\n                        <option [value]=\"country._id\">{{ country.name }}</option>\n                      }\n                    </select></label\n                  >\n                }\n              </div>\n              <footer class=\"erp-drawer__footer\">\n                <button\n                  class=\"erp-button erp-button--secondary\"\n                  type=\"button\"\n                  (click)=\"courseViewFiltersOpen.set(false)\"\n                >\n                  Cancel\n                </button>\n                <button\n                  class=\"erp-button erp-button--primary\"\n                  type=\"button\"\n                  [disabled]=\"loading()\"\n                  (click)=\"loadCourseFeeView()\"\n                >\n                  View fee structure\n                </button>\n              </footer>\n            </div>\n          </section>\n        </div>\n      }\n    }\n\n    @if (courseFeeViewRecords().length) {\n      <section class=\"erp-card erp-card--padded fee-section-gap fee-view-heading\">\n        <div>\n          <span class=\"erp-page-header__eyebrow\"\n            >{{ currentBook()?.code }} \u00B7 {{ currentBook()?.academicSession }} \u00B7\n            {{ courseFeeViewRecords()[0].domicileName }} \u00B7\n            {{ courseFeeViewRecords()[0].studentTypeName }}\n            @if (courseFeeViewRecords()[0].countryName) {\n              \u00B7 {{ courseFeeViewRecords()[0].countryName }}\n            }\n          </span>\n          <h2>{{ selectedViewCourse()?.name }}</h2>\n          <p>{{ currentBook()?.collegeName }}</p>\n        </div>\n        <div class=\"fee-view-summary\">\n          <div>\n            <strong>{{ feeViewSummary().heads }}</strong\n            ><span>Fee heads</span>\n          </div>\n          <div>\n            <strong>{{ feeViewSummary().years }}</strong\n            ><span>Academic years</span>\n          </div>\n          <div>\n            <strong>{{ feeViewSummary().eligibilityBands }}</strong\n            ><span>Eligibility slabs</span>\n          </div>\n          <div>\n            <strong>{{ feeViewSummary().records }}</strong\n            ><span>Configured amounts</span>\n          </div>\n        </div>\n      </section>\n\n      @for (matrix of feeViewMatrices(); track matrix.key) {\n        <section class=\"erp-card erp-table-shell fee-section-gap fee-structure-matrix\">\n          <div class=\"erp-table-toolbar fee-structure-matrix__header\">\n            <div>\n              <h2>{{ matrix.title }}</h2>\n              <p>{{ matrix.description }}</p>\n            </div>\n            <div class=\"fee-structure-matrix__meta\">\n              <span class=\"erp-status\">{{ matrix.rows.length }} rows</span>\n              <strong>{{ matrix.grandTotal | currency: 'INR' : 'symbol' : '1.0-2' }}</strong>\n            </div>\n          </div>\n          <div class=\"erp-table-shell__scroll fee-matrix-scroll\">\n            <table class=\"fee-matrix-table fee-view-matrix-table\">\n              <thead>\n                <tr>\n                  <th>Fee head</th>\n                  <th>Category</th>\n                  <th>Eligibility</th>\n                  @for (column of matrix.columns; track column.key) {\n                    <th>\n                      <span>{{ column.label }}</span\n                      ><small>{{ column.helper }}</small>\n                    </th>\n                  }\n                  <th>Total</th>\n                </tr>\n              </thead>\n              <tbody>\n                @for (row of matrix.rows; track row.key) {\n                  <tr>\n                    <td>\n                      <strong>{{ row.feeHeadName }}</strong\n                      ><small>#{{ row.priority === 9999 ? '\u2014' : row.priority }}</small>\n                    </td>\n                    <td>\n                      <span\n                        class=\"erp-status\"\n                        [class.erp-status--neutral]=\"row.category !== 'fee'\"\n                        >{{\n                          row.category === 'discount'\n                            ? 'Discount'\n                            : row.category === 'payment-option'\n                              ? 'Payment option'\n                              : 'Payable'\n                        }}</span\n                      >\n                    </td>\n                    <td>\n                      <span>{{ row.eligibilityBand }}</span>\n                    </td>\n                    @for (column of matrix.columns; track column.key) {\n                      @let cell = row.cells[column.key];\n                      <td\n                        class=\"fee-amount-cell\"\n                        [class.fee-amount-cell--conflict]=\"cell?.conflict\"\n                      >\n                        @if (cell?.amounts?.length) {\n                          @for (amount of cell.amounts; track amount) {\n                            <strong>{{ amount | currency: 'INR' : 'symbol' : '1.2-2' }}</strong>\n                          }\n                          <small>{{ cell.sources.join(' \u00B7 ') }}</small>\n                        } @else {\n                          <span>\u2014</span>\n                        }\n                        @if (cell?.conflict) {\n                          <small>Review duplicate amounts</small>\n                        }\n                      </td>\n                    }\n                    <td class=\"fee-amount-cell fee-amount-cell--total\">\n                      <strong>{{ row.total | currency: 'INR' : 'symbol' : '1.2-2' }}</strong>\n                    </td>\n                  </tr>\n                }\n              </tbody>\n              <tfoot>\n                <tr>\n                  <th colspan=\"3\">Period total</th>\n                  @for (column of matrix.columns; track column.key) {\n                    <th>{{ column.total | currency: 'INR' : 'symbol' : '1.0-2' }}</th>\n                  }\n                  <th>{{ matrix.grandTotal | currency: 'INR' : 'symbol' : '1.0-2' }}</th>\n                </tr>\n              </tfoot>\n            </table>\n          </div>\n        </section>\n      }\n    } @else if (viewCourseId && !loading()) {\n      <section class=\"erp-card erp-card--padded fee-section-gap erp-empty-state\">\n        No fee structure is configured for the selected course in this fee book.\n      </section>\n    }\n  }\n\n  @if (bookSelectorOpen()) {\n    <div\n      class=\"dialog-layer\"\n      role=\"dialog\"\n      aria-modal=\"true\"\n      aria-labelledby=\"fee-book-selector-title\"\n    >\n      <button\n        class=\"dialog-backdrop\"\n        type=\"button\"\n        aria-label=\"Close fee book selector\"\n        (click)=\"bookSelectorOpen.set(false)\"\n      ></button>\n      <section class=\"dialog erp-record-picker fee-book-picker\">\n        <header class=\"dialog__header\">\n          <div>\n            <small>Fee Management</small>\n            <h2 id=\"fee-book-selector-title\">Select fee book</h2>\n          </div>\n          <button type=\"button\" aria-label=\"Close\" (click)=\"bookSelectorOpen.set(false)\">\u00D7</button>\n        </header>\n        <div class=\"dialog__body fee-book-picker__body\">\n          <div class=\"fee-book-picker__filters\">\n            <label class=\"erp-field-stack\"\n              ><span>University *</span\n              ><select\n                class=\"erp-control\"\n                [(ngModel)]=\"bookPickerUniversityId\"\n                (ngModelChange)=\"bookPickerUniversityChanged()\"\n              >\n                <option value=\"\">Select university</option>\n                @for (university of universities(); track university._id) {\n                  <option [value]=\"university._id\">{{ university.name }}</option>\n                }\n              </select></label\n            >\n            <label class=\"erp-field-stack\"\n              ><span>College / Campus *</span\n              ><select\n                class=\"erp-control\"\n                [(ngModel)]=\"bookPickerCollegeId\"\n                [disabled]=\"!bookPickerUniversityId\"\n                (ngModelChange)=\"bookPickerCollegeChanged()\"\n              >\n                <option value=\"\">Select college</option>\n                @for (college of bookPickerCollegeOptions(); track college._id) {\n                  <option [value]=\"college._id\">{{ college.name }}</option>\n                }\n              </select></label\n            >\n            <label class=\"erp-field-stack\"\n              ><span>Academic session *</span\n              ><select\n                class=\"erp-control\"\n                [(ngModel)]=\"bookPickerSession\"\n                [disabled]=\"!bookPickerCollegeId\"\n              >\n                <option value=\"\">Select session</option>\n                @for (session of academicSessions(); track session._id) {\n                  <option [value]=\"session.name\">{{ session.name }}</option>\n                }\n              </select></label\n            >\n          </div>\n          <div class=\"fee-book-picker__results\" aria-live=\"polite\">\n            @if (!bookPickerUniversityId || !bookPickerCollegeId || !bookPickerSession) {\n              <div class=\"erp-empty-state\">\n                Select university, college and academic session to view available fee books.\n              </div>\n            } @else {\n              @for (book of bookPickerBooks(); track book._id) {\n                <button\n                  type=\"button\"\n                  class=\"erp-record-picker__option\"\n                  [class.active]=\"book._id === selectedBookId\"\n                  (click)=\"selectFeeBook(book._id)\"\n                >\n                  <span\n                    ><strong>{{ book.code }}</strong\n                    ><small>{{ book.collegeName }}</small></span\n                  >\n                  <span\n                    ><strong>{{ book.academicSession }}</strong\n                    ><small>{{\n                      book.frequency === 'semester' ? 'Semester wise' : 'Year wise'\n                    }}</small></span\n                  >\n                </button>\n              } @empty {\n                <div class=\"erp-empty-state\">\n                  No fee book exists for this college and academic session.\n                </div>\n              }\n            }\n          </div>\n        </div>\n        <footer class=\"dialog__footer\">\n          <button\n            class=\"erp-button erp-button--secondary\"\n            type=\"button\"\n            (click)=\"bookSelectorOpen.set(false)\"\n          >\n            Close\n          </button>\n        </footer>\n      </section>\n    </div>\n  }\n\n  @if (feeHeadPickerOpen()) {\n    <div\n      class=\"dialog-layer\"\n      role=\"dialog\"\n      aria-modal=\"true\"\n      aria-labelledby=\"fee-head-picker-title\"\n    >\n      <button\n        class=\"dialog-backdrop\"\n        type=\"button\"\n        aria-label=\"Close fee head selector\"\n        (click)=\"feeHeadPickerOpen.set(false)\"\n      ></button>\n      <section class=\"dialog erp-record-picker fee-head-picker\">\n        <header class=\"dialog__header\">\n          <div>\n            <small>Fee Management</small>\n            <h2 id=\"fee-head-picker-title\">Select fee head</h2>\n          </div>\n          <button type=\"button\" aria-label=\"Close\" (click)=\"feeHeadPickerOpen.set(false)\">\u00D7</button>\n        </header>\n        <div class=\"dialog__body erp-record-picker__options\">\n          <label class=\"erp-search-control fee-head-picker__search\">\n            <span class=\"erp-sr-only\">Search fee heads</span>\n            <input\n              type=\"search\"\n              placeholder=\"Search fee head or category\"\n              [value]=\"feeHeadPickerSearch()\"\n              (input)=\"feeHeadPickerSearch.set($any($event.target).value)\"\n            />\n          </label>\n          <button\n            type=\"button\"\n            class=\"erp-record-picker__option fee-head-picker__all\"\n            [class.active]=\"allCourseFeeHeadsSelected()\"\n            (click)=\"selectAllCourseFeeHeads()\"\n          >\n            <span class=\"fee-picker-check\" aria-hidden=\"true\">{{\n              allCourseFeeHeadsSelected() ? '\u2713' : '+'\n            }}</span>\n            <span\n              ><strong>{{\n                allCourseFeeHeadsSelected()\n                  ? 'Unselect all active heads'\n                  : 'Select all active fee heads'\n              }}</strong\n              ><small\n                >Apply this course fee amount to every active head in the selected book</small\n              ></span\n            >\n            <span\n              ><strong>{{ activeCourseFeeHeads().length }}</strong\n              ><small>Heads</small></span\n            >\n          </button>\n          @for (head of filteredCourseFeeHeads(); track head._id) {\n            <button\n              type=\"button\"\n              class=\"erp-record-picker__option fee-head-picker__row\"\n              [class.active]=\"feeHeadSelected(head._id)\"\n              (click)=\"selectCourseFeeHead(head._id)\"\n            >\n              <span class=\"fee-picker-check\" aria-hidden=\"true\">{{\n                feeHeadSelected(head._id) ? '\u2713' : ''\n              }}</span>\n              <span\n                ><strong>{{ head.name }}</strong\n                ><small>{{ head.bookCode }}</small></span\n              >\n              <span\n                ><strong>{{ head.category }}</strong\n                ><small\n                  >Priority {{ head.priority || '\u2014' }} \u00B7\n                  {{ head.isActive ? 'Active' : 'Disabled' }}</small\n                ></span\n              >\n            </button>\n          } @empty {\n            <div class=\"erp-empty-state\">No active fee heads found for this book.</div>\n          }\n        </div>\n        <footer class=\"dialog__footer\">\n          <span class=\"fee-head-picker__count\"\n            >{{ selectedCourseFeeHeadIds().length }} selected</span\n          >\n          <button\n            class=\"erp-button erp-button--secondary\"\n            type=\"button\"\n            (click)=\"clearCourseFeeHead()\"\n          >\n            Clear selection\n          </button>\n          <button\n            class=\"erp-button erp-button--primary\"\n            type=\"button\"\n            (click)=\"feeHeadPickerOpen.set(false)\"\n          >\n            Done\n          </button>\n        </footer>\n      </section>\n    </div>\n  }\n\n  @if (confirmDialog(); as dialog) {\n    <erp-confirm-dialog\n      [open]=\"true\"\n      [eyebrow]=\"dialog.eyebrow\"\n      [title]=\"dialog.title\"\n      [message]=\"dialog.message\"\n      [confirmLabel]=\"dialog.confirmLabel\"\n      [destructive]=\"dialog.destructive\"\n      (cancelled)=\"cancelConfirmation()\"\n      (confirmed)=\"confirmRequestedAction()\"\n    />\n  }\n</erp-admin-page>\n", styles: ["/* ERP-LOCAL-STYLE: Fee configuration needs multi-entity editor grids and a large workbook\n * mapping review surface that are unique to this administrative workflow. */\n:host {\n  display: block;\n  min-width: 0;\n}\n\n.fee-page-actions {\n  display: flex;\n  align-items: center;\n  gap: var(--erp-space-2);\n}\n\n.fee-working-context,\n.fee-course-explorer {\n  display: grid;\n  min-width: 0;\n  align-items: center;\n  gap: var(--erp-space-3);\n  margin-bottom: var(--erp-space-2);\n  padding: var(--erp-space-2) var(--erp-space-3);\n  border: 1px solid var(--erp-border-default);\n  border-radius: var(--erp-radius-card);\n  background: var(--erp-surface-raised);\n}\n\n.fee-working-context {\n  grid-template-columns: 38px minmax(0, 1fr) auto;\n}\n\n.fee-context-gate {\n  display: grid;\n  min-height: 300px;\n  place-items: center;\n  align-content: center;\n  gap: var(--erp-space-2);\n  padding: var(--erp-space-8) var(--erp-space-4);\n  border: 1px dashed var(--erp-border-strong);\n  border-radius: var(--erp-radius-card);\n  background: var(--erp-surface-raised);\n  text-align: center;\n}\n\n.fee-context-gate img {\n  width: 64px;\n  height: 64px;\n  margin-bottom: var(--erp-space-2);\n  object-fit: contain;\n}\n\n.fee-context-gate span {\n  color: var(--erp-primary);\n  font-size: var(--erp-font-size-2xs);\n  font-weight: var(--erp-weight-semibold);\n  letter-spacing: var(--erp-letter-normal);\n  text-transform: uppercase;\n}\n\n.fee-context-gate h2 {\n  margin: 0;\n  color: var(--erp-text-heading);\n  font-size: var(--erp-font-section-title);\n}\n\n.fee-context-gate p {\n  max-width: 460px;\n  margin: 0 0 var(--erp-space-3);\n  color: var(--erp-text-muted);\n  font-size: var(--erp-font-size-sm);\n}\n\n.fee-course-explorer {\n  grid-template-columns: 44px minmax(0, 1fr) auto;\n}\n\n.fee-working-context > img,\n.fee-course-explorer > img {\n  width: 38px;\n  height: 38px;\n  object-fit: contain;\n}\n\n.fee-course-explorer > img {\n  width: 44px;\n  height: 44px;\n}\n\n.fee-working-context > div,\n.fee-course-explorer > div {\n  min-width: 0;\n}\n\n.fee-working-context span {\n  color: var(--erp-text-muted);\n  font-size: var(--erp-font-size-2xs);\n  font-weight: var(--erp-weight-semibold);\n  text-transform: uppercase;\n}\n\n.fee-working-context h2,\n.fee-course-explorer h2 {\n  margin: 0;\n  color: var(--erp-text-heading);\n  font-size: var(--erp-font-label);\n  font-weight: var(--erp-weight-semibold);\n}\n\n.fee-working-context p,\n.fee-course-explorer p {\n  overflow: hidden;\n  margin: 2px 0 0;\n  color: var(--erp-text-muted);\n  font-size: var(--erp-font-size-xs);\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n\n.fee-view-filter-drawer {\n  width: min(560px, 100%);\n}\n\n.fee-view-filter-drawer__icon {\n  overflow: hidden;\n  background: transparent;\n}\n\n.fee-view-filter-drawer__icon img {\n  width: 100%;\n  height: 100%;\n  object-fit: contain;\n}\n\n.fee-view-filter-drawer .fee-view-filter-grid {\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n}\n\n.fee-form-grid {\n  display: grid;\n  grid-template-columns: repeat(3, minmax(0, 1fr));\n  gap: var(--erp-space-3);\n}\n\n.fee-inline-form,\n.fee-upload-row,\n.fee-import-actions,\n.fee-form-actions {\n  display: flex;\n  align-items: flex-end;\n  gap: var(--erp-space-3);\n}\n\n.fee-inline-form .erp-field-stack,\n.fee-upload-row .erp-field-stack {\n  min-width: 0;\n  flex: 1;\n}\n\n.fee-book-selector {\n  width: min(620px, 100%);\n}\n\n.fee-book-picker {\n  width: min(780px, 100%);\n}\n\n.fee-book-picker__body {\n  display: grid;\n  gap: var(--erp-space-4);\n}\n\n.fee-book-picker__filters {\n  display: grid;\n  grid-template-columns: repeat(3, minmax(0, 1fr));\n  gap: var(--erp-space-3);\n  padding-bottom: var(--erp-space-4);\n  border-bottom: 1px solid var(--erp-border-subtle);\n}\n\n.fee-book-picker__results {\n  display: grid;\n  min-height: 112px;\n  max-height: min(42vh, 360px);\n  align-content: start;\n  gap: var(--erp-space-2);\n  overflow-y: auto;\n  scrollbar-color: var(--erp-border-strong) transparent;\n  scrollbar-width: thin;\n}\n\n.course-fee-draft-state {\n  display: inline-flex;\n  min-height: var(--erp-control-height-compact);\n  align-items: center;\n  gap: var(--erp-space-2);\n  padding-inline: var(--erp-space-3);\n  border: 1px solid var(--erp-border-subtle);\n  border-radius: var(--erp-radius-pill);\n  color: var(--erp-text-muted);\n  background: var(--erp-surface-detail-soft);\n  font-size: var(--erp-font-caption);\n  white-space: nowrap;\n}\n\n.course-fee-draft-state__pulse {\n  width: 7px;\n  height: 7px;\n  border-radius: var(--erp-radius-pill);\n  background: var(--erp-primary);\n  animation: fee-draft-pulse var(--erp-status-pulse-duration) var(--erp-ease-standard) infinite\n    alternate;\n}\n\n.course-fee-draft-state__check {\n  color: var(--erp-success);\n  font-weight: var(--erp-weight-bold);\n}\n\n.course-fee-draft-state--error {\n  border-color: var(--erp-danger-border-soft);\n  color: var(--erp-danger-text);\n  background: var(--erp-danger-bg);\n}\n\n.course-fee-drafts {\n  margin-bottom: var(--erp-space-4);\n}\n\n.course-fee-drafts td small {\n  display: block;\n  margin-top: var(--erp-space-1);\n  color: var(--erp-text-muted);\n  font-size: var(--erp-font-caption);\n}\n\n@keyframes fee-draft-pulse {\n  to {\n    opacity: 0.4;\n  }\n}\n\n.fee-picker-control {\n  display: flex;\n  height: auto;\n  min-height: var(--erp-control-height);\n  align-items: center;\n  justify-content: space-between;\n  gap: var(--erp-space-3);\n  text-align: left;\n  cursor: pointer;\n}\n\n.fee-picker-control span,\n.fee-picker-control small {\n  display: block;\n  min-width: 0;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n\n.fee-picker-control small {\n  color: var(--erp-text-muted);\n  font-size: var(--erp-font-size-xs);\n}\n\n.fee-head-picker__search {\n  margin-bottom: var(--erp-space-2);\n}\n\n.fee-head-picker__all {\n  grid-template-columns: auto minmax(0, 1fr) auto;\n  border-style: dashed;\n}\n\n.fee-head-picker__row {\n  grid-template-columns: auto minmax(0, 1fr) auto;\n}\n\n.fee-picker-check {\n  display: grid;\n  width: 28px;\n  height: 28px;\n  place-items: center;\n  border: 1px solid var(--erp-border-default);\n  border-radius: var(--erp-radius-sm);\n  color: var(--erp-primary);\n  background: var(--erp-surface-detail);\n  font-size: var(--erp-font-size-sm);\n  font-weight: var(--erp-weight-bold);\n}\n\n.erp-record-picker__option.active .fee-picker-check {\n  border-color: var(--erp-primary);\n  color: var(--erp-text-on-primary);\n  background: var(--erp-primary);\n}\n\n.fee-head-picker__count {\n  margin-right: auto;\n  color: var(--erp-text-muted);\n  font-size: var(--erp-font-caption);\n  font-weight: var(--erp-weight-semibold);\n}\n\n.fee-priority-pill {\n  display: inline-grid;\n  min-width: 34px;\n  height: 28px;\n  place-items: center;\n  border: 1px solid var(--erp-border-default);\n  border-radius: var(--erp-radius-pill);\n  color: var(--erp-primary);\n  background: var(--erp-surface-selected);\n  font-size: var(--erp-font-caption);\n  font-weight: var(--erp-weight-bold);\n}\n\n.fee-form-actions,\n.fee-import-actions {\n  justify-content: flex-end;\n  margin-top: var(--erp-space-4);\n}\n\n.fee-import-actions {\n  justify-content: space-between;\n}\n\n.fee-section-gap {\n  margin-top: var(--erp-admin-section-gap);\n}\n\n.fee-mapping-summary {\n  display: grid;\n  grid-template-columns: repeat(4, minmax(0, 1fr));\n  gap: var(--erp-space-3);\n  margin-bottom: var(--erp-space-4);\n}\n\n.fee-mapping-summary div {\n  display: grid;\n  gap: var(--erp-space-1);\n  padding: var(--erp-space-3);\n  border: 1px solid var(--erp-border-subtle);\n  border-radius: var(--erp-radius-compact);\n  background: var(--erp-surface-detail);\n}\n\n.fee-mapping-summary strong {\n  color: var(--erp-text-heading);\n  font-size: var(--erp-font-page-title);\n}\n\n.fee-mapping-summary span,\n.fee-upload-row small,\n.fee-mapping-table small {\n  color: var(--erp-text-muted);\n  font-size: var(--erp-font-caption);\n}\n\n.fee-checkbox {\n  display: inline-flex;\n  min-height: 44px;\n  align-items: center;\n  gap: var(--erp-space-2);\n}\n\n.fee-list-header,\n.fee-mapping-card__header,\n.fee-course-picker {\n  display: flex;\n  align-items: center;\n  gap: var(--erp-space-3);\n}\n\n.fee-list-header,\n.fee-mapping-card__header {\n  justify-content: space-between;\n}\n\n.fee-page-size {\n  width: calc(var(--erp-control-height) * 4);\n}\n\n.fee-mapping-card-list {\n  display: grid;\n  gap: var(--erp-space-3);\n}\n\n.fee-mapping-card {\n  overflow: hidden;\n  border: 1px solid var(--erp-border-default);\n  border-radius: var(--erp-radius-card);\n  background: var(--erp-surface-raised);\n}\n\n.fee-mapping-card__header {\n  padding: var(--erp-space-4);\n  border-bottom: 1px solid var(--erp-border-subtle);\n  background: var(--erp-table-header-bg);\n}\n\n.fee-mapping-card__header h3 {\n  margin: var(--erp-space-1) 0 0;\n  color: var(--erp-text-heading);\n  font-size: var(--erp-font-body);\n}\n\n.fee-mapping-card__header p,\n.fee-detected-details p {\n  margin: var(--erp-space-1) 0 0;\n  color: var(--erp-text-muted);\n  font-size: var(--erp-font-caption);\n}\n\n.fee-sheet-name {\n  color: var(--erp-blue-700);\n  font-size: var(--erp-font-caption);\n  font-weight: var(--erp-weight-bold);\n  letter-spacing: var(--erp-letter-normal);\n}\n\n.fee-mapping-card__body {\n  display: grid;\n  grid-template-columns: minmax(0, 2fr) minmax(var(--erp-fee-mapping-editor-min-width), 1fr);\n  gap: var(--erp-space-5);\n  padding: var(--erp-space-4);\n}\n\n.fee-detected-details,\n.fee-assignment-editor {\n  min-width: 0;\n}\n\n.fee-detected-details ul {\n  display: grid;\n  gap: var(--erp-space-1);\n  margin: var(--erp-space-2) 0 0;\n  padding-left: var(--erp-space-5);\n  color: var(--erp-text-body);\n  font-size: var(--erp-font-caption);\n}\n\n.fee-suggestion {\n  color: var(--erp-info-text) !important;\n}\n\n.fee-warning {\n  color: var(--erp-warning-text) !important;\n}\n\n.fee-course-chips {\n  display: flex;\n  min-height: var(--erp-control-height-mobile);\n  flex-wrap: wrap;\n  align-items: center;\n  gap: var(--erp-space-2);\n  margin-block: var(--erp-space-2);\n}\n\n.fee-course-chip {\n  display: inline-flex;\n  min-height: var(--erp-control-height-compact);\n  align-items: center;\n  gap: var(--erp-space-2);\n  padding-left: var(--erp-space-3);\n  border: 1px solid var(--erp-border-strong);\n  border-radius: var(--erp-radius-pill);\n  color: var(--erp-text-strong);\n  background: var(--erp-surface-selected);\n  font-size: var(--erp-font-caption);\n  font-weight: var(--erp-weight-semibold);\n}\n\n.fee-course-chip button {\n  width: var(--erp-control-height-compact);\n  height: var(--erp-control-height-compact);\n  border: 0;\n  border-radius: var(--erp-radius-pill);\n  color: var(--erp-danger-text);\n  background: transparent;\n  cursor: pointer;\n  font-size: var(--erp-font-section-title);\n}\n\n.fee-course-chip button:hover {\n  background: var(--erp-danger-bg);\n}\n\n.fee-unmapped-copy {\n  color: var(--erp-text-muted);\n  font-size: var(--erp-font-caption);\n}\n\n.fee-course-picker select {\n  min-width: 0;\n  flex: 1;\n}\n\n.fee-pagination {\n  margin-top: var(--erp-space-4);\n  padding-top: var(--erp-space-3);\n}\n\n.fee-view-filter-grid {\n  display: grid;\n  grid-template-columns: repeat(3, minmax(0, 1fr));\n  gap: var(--erp-space-3);\n}\n\n.fee-view-heading {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: var(--erp-space-5);\n}\n\n.fee-view-heading h2,\n.fee-year-card__header h2 {\n  margin: 0;\n}\n\n.fee-view-heading p,\n.fee-year-card__header p {\n  margin: var(--erp-space-1) 0 0;\n  color: var(--erp-text-muted);\n}\n\n.fee-view-summary {\n  display: grid;\n  grid-template-columns: repeat(4, minmax(0, 1fr));\n  min-width: min(100%, var(--erp-modal-width));\n  gap: var(--erp-space-2);\n}\n\n.fee-view-summary div {\n  display: grid;\n  gap: var(--erp-space-1);\n  padding: var(--erp-space-3);\n  border: 1px solid var(--erp-border-subtle);\n  border-radius: var(--erp-radius-compact);\n  background: var(--erp-surface-detail);\n  text-align: center;\n}\n\n.fee-view-summary strong {\n  color: var(--erp-text-heading);\n  font-size: var(--erp-font-section-title);\n}\n\n.fee-view-summary span,\n.fee-matrix-table small {\n  color: var(--erp-text-muted);\n  font-size: var(--erp-font-caption);\n}\n\n.fee-year-card__header {\n  align-items: center;\n}\n\n.fee-matrix-table {\n  min-width: var(--erp-table-wide-min-width);\n}\n\n.fee-structure-matrix__header {\n  align-items: center;\n}\n\n.fee-structure-matrix__meta {\n  display: flex;\n  align-items: center;\n  gap: var(--erp-space-3);\n  color: var(--erp-text-heading);\n}\n\n.fee-structure-matrix__meta strong {\n  font-size: var(--erp-font-section-title);\n}\n\n.fee-view-matrix-table {\n  min-width: max(var(--erp-table-wide-min-width), 980px);\n}\n\n.fee-view-matrix-table th,\n.fee-view-matrix-table td {\n  vertical-align: middle;\n  border-right: 1px solid var(--erp-border-subtle);\n}\n\n.fee-view-matrix-table th:last-child,\n.fee-view-matrix-table td:last-child {\n  border-right: 0;\n}\n\n.fee-view-matrix-table th:first-child,\n.fee-view-matrix-table td:first-child {\n  position: sticky;\n  left: 0;\n  z-index: 2;\n  min-width: 260px;\n  background: var(--erp-surface-overlay);\n  box-shadow: 1px 0 0 var(--erp-border-subtle);\n}\n\n.fee-view-matrix-table thead th:first-child {\n  z-index: 3;\n  background: var(--erp-table-header-bg);\n}\n\n.fee-view-matrix-table th span,\n.fee-view-matrix-table th small {\n  display: block;\n}\n\n.fee-view-matrix-table tfoot th {\n  color: var(--erp-text-heading);\n  background: var(--erp-surface-detail);\n}\n\n.fee-view-matrix-table tbody tr:hover td {\n  background: var(--erp-surface-detail);\n}\n\n.fee-matrix-table td:first-child,\n.fee-matrix-table td:nth-child(2) {\n  min-width: calc(var(--erp-control-height) * 4);\n}\n\n.fee-matrix-workspace {\n  display: grid;\n  gap: var(--erp-space-2);\n  margin-top: var(--erp-space-4);\n  padding-top: var(--erp-space-4);\n  border-top: 1px solid var(--erp-border-subtle);\n}\n\n.fee-matrix-workspace__header,\n.fee-matrix-workspace__footer {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: var(--erp-space-3);\n}\n\n.fee-matrix-workspace__header h3 {\n  margin: 0;\n  color: var(--erp-text-heading);\n  font-size: var(--erp-font-section-title);\n}\n\n.fee-matrix-workspace__header p,\n.fee-matrix-workspace__footer span {\n  margin: var(--erp-space-1) 0 0;\n  color: var(--erp-text-muted);\n  font-size: var(--erp-font-caption);\n}\n\n.fee-matrix-context {\n  display: flex;\n  min-width: 0;\n  flex-wrap: wrap;\n  align-items: center;\n  gap: var(--erp-space-2) var(--erp-space-4);\n  padding: var(--erp-space-2) var(--erp-space-3);\n  border: 1px solid var(--erp-border-subtle);\n  border-radius: var(--erp-radius-control);\n  color: var(--erp-text-muted);\n  background: var(--erp-surface-detail-soft);\n  font-size: var(--erp-font-caption);\n}\n\n.fee-matrix-context strong {\n  color: var(--erp-text-strong);\n  font-variant-numeric: tabular-nums;\n}\n\n.fee-matrix-editor {\n  max-width: 100%;\n  max-height: min(56vh, 600px);\n  overflow: auto;\n  border: 1px solid var(--erp-border-default);\n  border-radius: var(--erp-radius-compact);\n  background: var(--erp-surface-raised);\n  scrollbar-color: var(--erp-border-strong) var(--erp-surface-detail);\n  scrollbar-width: thin;\n  overscroll-behavior: contain;\n}\n\n.fee-matrix-editor::-webkit-scrollbar {\n  width: 8px;\n  height: 8px;\n}\n\n.fee-matrix-editor::-webkit-scrollbar-track {\n  background: var(--erp-surface-detail);\n}\n\n.fee-matrix-editor::-webkit-scrollbar-thumb {\n  border: 2px solid var(--erp-surface-detail);\n  border-radius: var(--erp-radius-pill);\n  background: var(--erp-border-strong);\n}\n\n.fee-matrix-table--editable {\n  width: max-content;\n  min-width: 100%;\n  border-collapse: separate;\n  border-spacing: 0;\n  font-size: var(--erp-font-label);\n}\n\n.fee-matrix-table--editable th,\n.fee-matrix-table--editable td {\n  height: var(--erp-table-row-height-compact);\n  padding: var(--erp-space-2);\n  border-right: 1px solid var(--erp-border-default);\n  border-bottom: 1px solid var(--erp-border-default);\n  vertical-align: middle;\n}\n\n.fee-matrix-table--editable th:last-child,\n.fee-matrix-table--editable td:last-child {\n  border-right: 0;\n}\n\n.fee-matrix-table--editable tbody tr:last-child td {\n  border-bottom: 0;\n}\n\n.fee-matrix-table--editable th {\n  position: sticky;\n  top: 0;\n  z-index: 2;\n  white-space: nowrap;\n  color: var(--erp-text-muted);\n  background: var(--erp-table-header-bg);\n  font-size: var(--erp-font-size-xs);\n  font-weight: var(--erp-weight-bold);\n  letter-spacing: var(--erp-letter-normal);\n  text-transform: uppercase;\n}\n\n.fee-matrix-table--editable th:first-child,\n.fee-matrix-table--editable td:first-child,\n.fee-matrix-table--editable th:nth-child(2),\n.fee-matrix-table--editable td:nth-child(2) {\n  position: sticky;\n  z-index: 1;\n  background: var(--erp-surface-raised);\n}\n\n.fee-matrix-table--editable th:first-child,\n.fee-matrix-table--editable td:first-child {\n  left: 0;\n}\n\n.fee-matrix-table--editable th:nth-child(2),\n.fee-matrix-table--editable td:nth-child(2) {\n  left: 56px;\n  box-shadow: 1px 0 0 var(--erp-border-subtle);\n}\n\n.fee-matrix-table--editable thead th:first-child,\n.fee-matrix-table--editable thead th:nth-child(2) {\n  z-index: 3;\n  background: var(--erp-table-header-bg);\n}\n\n.fee-matrix-table__select {\n  width: 56px;\n  min-width: 56px !important;\n  text-align: center;\n}\n\n.fee-row-selector {\n  display: inline-flex;\n  align-items: center;\n  gap: var(--erp-space-2);\n  color: var(--erp-text-muted);\n  font-size: var(--erp-font-size-xs);\n  font-variant-numeric: tabular-nums;\n}\n\n.fee-row-selector input,\n.fee-matrix-table__select input {\n  width: 16px;\n  height: 16px;\n  margin: 0;\n  accent-color: var(--erp-primary);\n}\n\n.fee-matrix-head {\n  width: 220px;\n  min-width: 220px;\n}\n\n.fee-matrix-head strong {\n  overflow: hidden;\n  color: var(--erp-text-heading);\n  font-size: var(--erp-font-label);\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n\n.fee-matrix-head > span {\n  display: flex;\n  gap: var(--erp-space-2);\n  align-items: center;\n}\n\n.fee-matrix-head small + small::before {\n  content: '\u00B7';\n  margin-right: var(--erp-space-2);\n}\n\n.fee-matrix-period {\n  width: 118px;\n  min-width: 118px;\n  text-align: right;\n}\n\n.fee-matrix-period span,\n.fee-matrix-period small {\n  display: block;\n}\n\n.fee-matrix-period small {\n  margin-top: 2px;\n  font-size: var(--erp-font-size-2xs);\n  font-weight: var(--erp-weight-medium);\n  letter-spacing: normal;\n  text-transform: none;\n}\n\n.fee-matrix-row--selected td {\n  background: var(--erp-surface-selected);\n}\n\n.fee-matrix-row--selected td:first-child,\n.fee-matrix-row--selected td:nth-child(2) {\n  background: var(--erp-surface-selected);\n}\n\n.fee-matrix-table--editable tbody tr:hover td {\n  background: var(--erp-table-row-hover);\n}\n\n.fee-matrix-table--editable tbody tr:hover td:first-child,\n.fee-matrix-table--editable tbody tr:hover td:nth-child(2) {\n  background: var(--erp-table-row-hover);\n}\n\n.fee-matrix-cell {\n  display: flex;\n  width: 112px;\n  height: 32px;\n  align-items: center;\n  gap: var(--erp-space-1);\n  padding-inline: var(--erp-space-2);\n  border: 1px solid var(--erp-border-subtle);\n  border-radius: var(--erp-radius-xs);\n  color: var(--erp-text-muted);\n  background: var(--erp-surface-raised);\n  transition:\n    border-color var(--erp-control-transition),\n    background-color var(--erp-control-transition);\n}\n\n.fee-matrix-cell:focus-within,\n.fee-matrix-cell--active {\n  border-color: var(--erp-primary);\n  background: var(--erp-surface-overlay);\n}\n\n.fee-matrix-amount {\n  appearance: textfield;\n  width: 100%;\n  min-width: 0;\n  padding: 0;\n  border: 0;\n  outline: 0;\n  color: var(--erp-text-strong);\n  background: transparent;\n  font: inherit;\n  font-size: var(--erp-font-caption);\n  font-weight: var(--erp-weight-semibold);\n  text-align: right;\n  font-variant-numeric: tabular-nums;\n}\n\n.fee-matrix-amount:focus {\n  border: 0;\n  outline: 0;\n  box-shadow: none;\n}\n\n.fee-matrix-amount::-webkit-inner-spin-button,\n.fee-matrix-amount::-webkit-outer-spin-button {\n  margin: 0;\n  appearance: none;\n}\n\n.fee-matrix-table td strong,\n.fee-matrix-table td small {\n  display: block;\n}\n\n.fee-matrix-table td small {\n  margin-top: var(--erp-space-1);\n}\n\n.fee-amount-cell {\n  min-width: calc(var(--erp-control-height) * 4);\n  font-variant-numeric: tabular-nums;\n}\n\n.fee-amount-cell--conflict {\n  background: var(--erp-warning-bg);\n}\n\n.fee-amount-cell--conflict small {\n  color: var(--erp-warning-text);\n}\n\n@media (max-width: 1000px) {\n  .fee-form-grid,\n  .fee-mapping-summary {\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n  }\n\n  .fee-view-filter-grid {\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n  }\n\n  .fee-view-heading {\n    align-items: stretch;\n    flex-direction: column;\n  }\n\n  .fee-mapping-card__body {\n    grid-template-columns: 1fr;\n  }\n}\n\n@media (max-width: 720px) {\n  .fee-working-context,\n  .fee-course-explorer {\n    grid-template-columns: 38px minmax(0, 1fr);\n  }\n\n  .fee-working-context > .erp-button,\n  .fee-course-explorer > .erp-button {\n    grid-column: 1 / -1;\n  }\n\n  .fee-page-actions {\n    width: 100%;\n    align-items: stretch;\n    flex-direction: column;\n  }\n\n  .fee-page-actions .erp-button {\n    width: 100%;\n  }\n  .fee-form-grid,\n  .fee-mapping-summary {\n    grid-template-columns: 1fr;\n  }\n\n  .fee-view-filter-grid,\n  .fee-view-summary {\n    grid-template-columns: 1fr;\n  }\n\n  .fee-book-picker__filters {\n    grid-template-columns: 1fr;\n  }\n\n  .fee-inline-form,\n  .fee-upload-row,\n  .fee-import-actions,\n  .fee-form-actions,\n  .fee-matrix-workspace__header,\n  .fee-matrix-workspace__footer {\n    align-items: stretch;\n    flex-direction: column;\n  }\n\n  .fee-list-header,\n  .fee-mapping-card__header,\n  .fee-course-picker,\n  .fee-pagination {\n    align-items: stretch;\n    flex-direction: column;\n  }\n\n  .fee-page-size {\n    width: 100%;\n  }\n}\n"] }]
    }], () => [], { closeBookSelector: [{
            type: HostListener,
            args: ['document:keydown.escape']
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(FeeManagementComponent, { className: "FeeManagementComponent", filePath: "frontend/src/app/features/admin/fee-management/fee-management.component.ts", lineNumber: 138 }); })();
