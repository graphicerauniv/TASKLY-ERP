import { CdkTrapFocus } from '@angular/cdk/a11y';
import { DOCUMENT } from '@angular/common';
import { ChangeDetectionStrategy, Component, DestroyRef, HostListener, computed, inject, signal, } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { LucideChevronLeft, LucideChevronRight, LucideCircleAlert, LucideInbox, LucidePlus, LucideRefreshCw, LucideSearch, LucideUserRound, LucideX, } from '@lucide/angular';
import { catchError, combineLatest, forkJoin, map, of } from 'rxjs';
import { ApiService } from '../../../core/api.service';
import { ERP_PAGINATION } from '../../../core/config/data-view.constants';
import { AdminPageComponent } from '../../../shared/ui/admin-page/admin-page.component';
import { ColumnVisibilityPopoverComponent, } from '../../../shared/ui/column-visibility-popover/column-visibility-popover.component';
import { CompactActionMenuComponent, } from '../../../shared/ui/compact-action-menu/compact-action-menu.component';
import { ConfirmDialogComponent } from '../../../shared/ui/confirm-dialog/confirm-dialog.component';
import { FilterPopoverComponent, } from '../../../shared/ui/filter-popover/filter-popover.component';
import { admissionCaptureStats, admissionDateLabel, admissionInitials, admissionLastActivity, admissionReference, admissionStatusLabel, } from './admission-presentation';
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
const _c0 = () => [1, 2, 3, 4, 5, 6];
const _c1 = a0 => ["/admin/admissions/applications", a0];
const _c2 = a0 => ["/admin/admissions", a0, "edit"];
const _c3 = a0 => ["/admin/admissions/applications", a0, "review"];
const _c4 = a0 => ["/admin/admissions", a0, "scholarships"];
const _forTrack0 = ($index, $item) => $item.id;
const _forTrack1 = ($index, $item) => $item._id;
function AdmissionsComponent_Conditional_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 1)(1, "a", 37);
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(2, "svg", 38);
    i0.ɵɵtext(3, " New application ");
    i0.ɵɵelementEnd()();
} }
function AdmissionsComponent_Conditional_3_Template(rf, ctx) { if (rf & 1) {
    const _r1 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 3)(1, "span");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "button", 39);
    i0.ɵɵlistener("click", function AdmissionsComponent_Conditional_3_Template_button_click_3_listener() { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.message.set("")); });
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(4, "svg", 40);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r1.message());
} }
function AdmissionsComponent_Conditional_4_Template(rf, ctx) { if (rf & 1) {
    const _r3 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 4)(1, "span");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "button", 41);
    i0.ɵɵlistener("click", function AdmissionsComponent_Conditional_4_Template_button_click_3_listener() { i0.ɵɵrestoreView(_r3); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.actionError.set("")); });
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(4, "svg", 40);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r1.actionError());
} }
function AdmissionsComponent_For_9_Template(rf, ctx) { if (rf & 1) {
    const _r4 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 42);
    i0.ɵɵlistener("click", function AdmissionsComponent_For_9_Template_button_click_0_listener() { const savedView_r5 = i0.ɵɵrestoreView(_r4).$implicit; const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.setView(savedView_r5.id)); });
    i0.ɵɵelementStart(1, "span");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "small");
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const savedView_r5 = ctx.$implicit;
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵclassProp("is-active", ctx_r1.view() === savedView_r5.id);
    i0.ɵɵattribute("aria-current", ctx_r1.view() === savedView_r5.id ? "page" : null);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(savedView_r5.tabLabel);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r1.viewTotal(savedView_r5.id));
} }
function AdmissionsComponent_Conditional_17_Template(rf, ctx) { if (rf & 1) {
    const _r6 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 43);
    i0.ɵɵlistener("click", function AdmissionsComponent_Conditional_17_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r6); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.clearSearch()); });
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(1, "svg", 40);
    i0.ɵɵelementEnd();
} }
function AdmissionsComponent_Conditional_19_Template(rf, ctx) { if (rf & 1) {
    const _r7 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 17)(1, "strong");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "span");
    i0.ɵɵtext(4, "Only approved applications are eligible for fee-account generation.");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "button", 44);
    i0.ɵɵlistener("click", function AdmissionsComponent_Conditional_19_Template_button_click_5_listener() { i0.ɵɵrestoreView(_r7); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.clearSelection()); });
    i0.ɵɵtext(6, " Clear ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "button", 45);
    i0.ɵɵlistener("click", function AdmissionsComponent_Conditional_19_Template_button_click_7_listener() { i0.ɵɵrestoreView(_r7); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.requestSelectedFeeGeneration()); });
    i0.ɵɵtext(8, " Generate fee accounts ");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1("", ctx_r1.selectedStudentIds().size, " selected on this page");
    i0.ɵɵadvance(5);
    i0.ɵɵproperty("disabled", ctx_r1.feeSaving());
} }
function AdmissionsComponent_Conditional_28_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "th", 21);
    i0.ɵɵtext(1, "Application ID");
    i0.ɵɵelementEnd();
} }
function AdmissionsComponent_Conditional_29_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "th", 21);
    i0.ɵɵtext(1, "Applicant");
    i0.ɵɵelementEnd();
} }
function AdmissionsComponent_Conditional_30_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "th", 21);
    i0.ɵɵtext(1, "Programme & intake");
    i0.ɵɵelementEnd();
} }
function AdmissionsComponent_Conditional_31_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "th", 21);
    i0.ɵɵtext(1, "Stage");
    i0.ɵɵelementEnd();
} }
function AdmissionsComponent_Conditional_32_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "th", 21);
    i0.ɵɵtext(1, "Last activity");
    i0.ɵɵelementEnd();
} }
function AdmissionsComponent_Conditional_36_For_1_Conditional_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td");
    i0.ɵɵelement(1, "span", 49);
    i0.ɵɵelementEnd();
} }
function AdmissionsComponent_Conditional_36_For_1_Conditional_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td");
    i0.ɵɵelement(1, "span", 50);
    i0.ɵɵelementEnd();
} }
function AdmissionsComponent_Conditional_36_For_1_Conditional_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td");
    i0.ɵɵelement(1, "span", 51);
    i0.ɵɵelementEnd();
} }
function AdmissionsComponent_Conditional_36_For_1_Conditional_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td");
    i0.ɵɵelement(1, "span", 52);
    i0.ɵɵelementEnd();
} }
function AdmissionsComponent_Conditional_36_For_1_Conditional_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td");
    i0.ɵɵelement(1, "span", 53);
    i0.ɵɵelementEnd();
} }
function AdmissionsComponent_Conditional_36_For_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "tr", 46)(1, "td");
    i0.ɵɵelement(2, "span", 47);
    i0.ɵɵelementEnd();
    i0.ɵɵconditionalCreate(3, AdmissionsComponent_Conditional_36_For_1_Conditional_3_Template, 2, 0, "td");
    i0.ɵɵconditionalCreate(4, AdmissionsComponent_Conditional_36_For_1_Conditional_4_Template, 2, 0, "td");
    i0.ɵɵconditionalCreate(5, AdmissionsComponent_Conditional_36_For_1_Conditional_5_Template, 2, 0, "td");
    i0.ɵɵconditionalCreate(6, AdmissionsComponent_Conditional_36_For_1_Conditional_6_Template, 2, 0, "td");
    i0.ɵɵconditionalCreate(7, AdmissionsComponent_Conditional_36_For_1_Conditional_7_Template, 2, 0, "td");
    i0.ɵɵelementStart(8, "td");
    i0.ɵɵelement(9, "span", 48);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(3);
    i0.ɵɵconditional(ctx_r1.columnVisible("application") ? 3 : -1);
    i0.ɵɵadvance();
    i0.ɵɵconditional(ctx_r1.columnVisible("applicant") ? 4 : -1);
    i0.ɵɵadvance();
    i0.ɵɵconditional(ctx_r1.columnVisible("programme") ? 5 : -1);
    i0.ɵɵadvance();
    i0.ɵɵconditional(ctx_r1.columnVisible("stage") ? 6 : -1);
    i0.ɵɵadvance();
    i0.ɵɵconditional(ctx_r1.columnVisible("activity") ? 7 : -1);
} }
function AdmissionsComponent_Conditional_36_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵrepeaterCreate(0, AdmissionsComponent_Conditional_36_For_1_Template, 10, 5, "tr", 46, i0.ɵɵrepeaterTrackByIdentity);
} if (rf & 2) {
    i0.ɵɵrepeater(i0.ɵɵpureFunction0(0, _c0));
} }
function AdmissionsComponent_Conditional_37_Template(rf, ctx) { if (rf & 1) {
    const _r8 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "tr")(1, "td")(2, "div", 54)(3, "span", 55);
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(4, "svg", 56);
    i0.ɵɵelementEnd();
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(5, "h3");
    i0.ɵɵtext(6, "Applications could not be loaded");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "p");
    i0.ɵɵtext(8);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(9, "button", 44);
    i0.ɵɵlistener("click", function AdmissionsComponent_Conditional_37_Template_button_click_9_listener() { i0.ɵɵrestoreView(_r8); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.load()); });
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(10, "svg", 57);
    i0.ɵɵtext(11, " Try again ");
    i0.ɵɵelementEnd()()()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵattribute("colspan", ctx_r1.visibleTableColumnCount());
    i0.ɵɵadvance(7);
    i0.ɵɵtextInterpolate(ctx_r1.listError());
} }
function AdmissionsComponent_Conditional_38_For_1_Conditional_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td", 61)(1, "strong");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "small");
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const item_r11 = i0.ɵɵnextContext().$implicit;
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r1.reference(item_r11));
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(item_r11.studentId ? "Student ID assigned" : "Reference");
} }
function AdmissionsComponent_Conditional_38_For_1_Conditional_4_Template(rf, ctx) { if (rf & 1) {
    const _r12 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "td")(1, "button", 65);
    i0.ɵɵlistener("click", function AdmissionsComponent_Conditional_38_For_1_Conditional_4_Template_button_click_1_listener($event) { i0.ɵɵrestoreView(_r12); const item_r11 = i0.ɵɵnextContext().$implicit; const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.openPreview(item_r11, $event)); });
    i0.ɵɵelementStart(2, "span", 66);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "span")(5, "strong");
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "small");
    i0.ɵɵtext(8);
    i0.ɵɵelementEnd()()()();
} if (rf & 2) {
    const item_r11 = i0.ɵɵnextContext().$implicit;
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(ctx_r1.initials(item_r11));
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(item_r11.studentName || "Unnamed application");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(item_r11.studentTypeName || item_r11.countryName || "Applicant");
} }
function AdmissionsComponent_Conditional_38_For_1_Conditional_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td")(1, "strong");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "small");
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const item_r11 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(item_r11.courseName || "Programme not selected");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(item_r11.academicSession || "Academic session pending");
} }
function AdmissionsComponent_Conditional_38_For_1_Conditional_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td")(1, "span", 67);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const item_r11 = i0.ɵɵnextContext().$implicit;
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵclassProp("erp-status--draft", item_r11.status === "draft")("erp-status--warning", item_r11.status === "pending_approval" || item_r11.status === "submitted");
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r1.statusLabel(item_r11));
} }
function AdmissionsComponent_Conditional_38_For_1_Conditional_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td", 62)(1, "strong");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "small");
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const item_r11 = i0.ɵɵnextContext().$implicit;
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r1.activityLabel(item_r11));
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(item_r11.approvedAt ? "Approved" : item_r11.submittedAt ? "Submitted" : "Created");
} }
function AdmissionsComponent_Conditional_38_For_1_Template(rf, ctx) { if (rf & 1) {
    const _r10 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "tr")(1, "td", 59)(2, "input", 60);
    i0.ɵɵlistener("change", function AdmissionsComponent_Conditional_38_For_1_Template_input_change_2_listener($event) { const item_r11 = i0.ɵɵrestoreView(_r10).$implicit; const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.toggleStudent(item_r11, $event.target.checked)); });
    i0.ɵɵelementEnd()();
    i0.ɵɵconditionalCreate(3, AdmissionsComponent_Conditional_38_For_1_Conditional_3_Template, 5, 2, "td", 61);
    i0.ɵɵconditionalCreate(4, AdmissionsComponent_Conditional_38_For_1_Conditional_4_Template, 9, 3, "td");
    i0.ɵɵconditionalCreate(5, AdmissionsComponent_Conditional_38_For_1_Conditional_5_Template, 5, 2, "td");
    i0.ɵɵconditionalCreate(6, AdmissionsComponent_Conditional_38_For_1_Conditional_6_Template, 3, 5, "td");
    i0.ɵɵconditionalCreate(7, AdmissionsComponent_Conditional_38_For_1_Conditional_7_Template, 5, 2, "td", 62);
    i0.ɵɵelementStart(8, "td", 63)(9, "erp-compact-action-menu", 64);
    i0.ɵɵlistener("selected", function AdmissionsComponent_Conditional_38_For_1_Template_erp_compact_action_menu_selected_9_listener($event) { const item_r11 = i0.ɵɵrestoreView(_r10).$implicit; const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.handleRowAction($event, item_r11)); });
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const item_r11 = ctx.$implicit;
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵclassProp("erp-is-selected", ctx_r1.isSelected(item_r11));
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("checked", ctx_r1.isSelected(item_r11))("disabled", !ctx_r1.bulkEligible(item_r11));
    i0.ɵɵattribute("aria-label", ctx_r1.bulkEligible(item_r11) ? "Select " + (item_r11.studentName || ctx_r1.reference(item_r11)) : "Bulk actions are unavailable for " + (item_r11.studentName || ctx_r1.reference(item_r11)));
    i0.ɵɵadvance();
    i0.ɵɵconditional(ctx_r1.columnVisible("application") ? 3 : -1);
    i0.ɵɵadvance();
    i0.ɵɵconditional(ctx_r1.columnVisible("applicant") ? 4 : -1);
    i0.ɵɵadvance();
    i0.ɵɵconditional(ctx_r1.columnVisible("programme") ? 5 : -1);
    i0.ɵɵadvance();
    i0.ɵɵconditional(ctx_r1.columnVisible("stage") ? 6 : -1);
    i0.ɵɵadvance();
    i0.ɵɵconditional(ctx_r1.columnVisible("activity") ? 7 : -1);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("items", ctx_r1.rowActions(item_r11));
} }
function AdmissionsComponent_Conditional_38_ForEmpty_2_Conditional_9_Template(rf, ctx) { if (rf & 1) {
    const _r9 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 44);
    i0.ɵɵlistener("click", function AdmissionsComponent_Conditional_38_ForEmpty_2_Conditional_9_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r9); const ctx_r1 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r1.resetFilters()); });
    i0.ɵɵtext(1, " Show all applications ");
    i0.ɵɵelementEnd();
} }
function AdmissionsComponent_Conditional_38_ForEmpty_2_Conditional_10_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "a", 71);
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(1, "svg", 72);
    i0.ɵɵtext(2, " New application ");
    i0.ɵɵelementEnd();
} }
function AdmissionsComponent_Conditional_38_ForEmpty_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "tr")(1, "td")(2, "div", 68)(3, "span", 55);
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(4, "svg", 69);
    i0.ɵɵelementEnd();
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(5, "h3");
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "p");
    i0.ɵɵtext(8);
    i0.ɵɵelementEnd();
    i0.ɵɵconditionalCreate(9, AdmissionsComponent_Conditional_38_ForEmpty_2_Conditional_9_Template, 2, 0, "button", 70)(10, AdmissionsComponent_Conditional_38_ForEmpty_2_Conditional_10_Template, 3, 0, "a", 71);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵattribute("colspan", ctx_r1.visibleTableColumnCount());
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(ctx_r1.emptyTitle());
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r1.emptyDescription());
    i0.ɵɵadvance();
    i0.ɵɵconditional(ctx_r1.appliedSearch() || ctx_r1.view() !== "all" ? 9 : 10);
} }
function AdmissionsComponent_Conditional_38_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵrepeaterCreate(0, AdmissionsComponent_Conditional_38_For_1_Template, 10, 11, "tr", 58, _forTrack1, false, AdmissionsComponent_Conditional_38_ForEmpty_2_Template, 11, 4, "tr");
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵrepeater(ctx_r1.items());
} }
function AdmissionsComponent_For_48_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 27);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const option_r13 = ctx.$implicit;
    i0.ɵɵproperty("ngValue", option_r13);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1("", option_r13, " / page");
} }
function AdmissionsComponent_For_52_Template(rf, ctx) { if (rf & 1) {
    const _r14 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 73);
    i0.ɵɵlistener("click", function AdmissionsComponent_For_52_Template_button_click_0_listener() { const pageNumber_r15 = i0.ɵɵrestoreView(_r14).$implicit; const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.changePage(pageNumber_r15)); });
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const pageNumber_r15 = ctx.$implicit;
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵclassProp("erp-pagination__button--active", pageNumber_r15 === ctx_r1.page);
    i0.ɵɵproperty("disabled", ctx_r1.loading());
    i0.ɵɵattribute("aria-label", "Page " + pageNumber_r15)("aria-current", pageNumber_r15 === ctx_r1.page ? "page" : null);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", pageNumber_r15, " ");
} }
function AdmissionsComponent_Conditional_55_Conditional_16_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 83);
    i0.ɵɵelement(1, "span", 84)(2, "span", 85)(3, "span", 85);
    i0.ɵɵelementEnd();
} }
function AdmissionsComponent_Conditional_55_Conditional_17_Template(rf, ctx) { if (rf & 1) {
    const _r17 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 54)(1, "span", 55);
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(2, "svg", 56);
    i0.ɵɵelementEnd();
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(3, "h3");
    i0.ɵɵtext(4, "Preview unavailable");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "p");
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "button", 44);
    i0.ɵɵlistener("click", function AdmissionsComponent_Conditional_55_Conditional_17_Template_button_click_7_listener() { i0.ɵɵrestoreView(_r17); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.closePreview()); });
    i0.ɵɵtext(8, " Close ");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(6);
    i0.ɵɵtextInterpolate(ctx_r1.previewError());
} }
function AdmissionsComponent_Conditional_55_Conditional_18_Conditional_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 4);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r1.actionError());
} }
function AdmissionsComponent_Conditional_55_Conditional_18_Conditional_18_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "a", 90);
    i0.ɵɵtext(1, " Review application ");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r18 = i0.ɵɵnextContext();
    i0.ɵɵproperty("routerLink", i0.ɵɵpureFunction1(1, _c3, item_r18._id));
} }
function AdmissionsComponent_Conditional_55_Conditional_18_Conditional_19_Template(rf, ctx) { if (rf & 1) {
    const _r19 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "a", 89);
    i0.ɵɵtext(1, " Scholarships ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(2, "button", 44);
    i0.ɵɵlistener("click", function AdmissionsComponent_Conditional_55_Conditional_18_Conditional_19_Template_button_click_2_listener() { i0.ɵɵrestoreView(_r19); const item_r18 = i0.ɵɵnextContext(); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.openCredentials(item_r18)); });
    i0.ɵɵtext(3, " Reset password ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "button", 93);
    i0.ɵɵlistener("click", function AdmissionsComponent_Conditional_55_Conditional_18_Conditional_19_Template_button_click_4_listener() { i0.ɵɵrestoreView(_r19); const item_r18 = i0.ɵɵnextContext(); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.requestFeeGeneration(item_r18)); });
    i0.ɵɵtext(5, " Generate fee account ");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r18 = i0.ɵɵnextContext();
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("routerLink", i0.ɵɵpureFunction1(2, _c4, item_r18._id));
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("disabled", ctx_r1.feeSaving());
} }
function AdmissionsComponent_Conditional_55_Conditional_18_Conditional_91_For_23_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 27);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const year_r21 = ctx.$implicit;
    i0.ɵɵproperty("ngValue", year_r21);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1("Year ", year_r21);
} }
function AdmissionsComponent_Conditional_55_Conditional_18_Conditional_91_Conditional_24_For_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 27);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const semester_r23 = ctx.$implicit;
    i0.ɵɵproperty("ngValue", semester_r23);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1("Semester ", semester_r23);
} }
function AdmissionsComponent_Conditional_55_Conditional_18_Conditional_91_Conditional_24_Template(rf, ctx) { if (rf & 1) {
    const _r22 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "label")(1, "span");
    i0.ɵɵtext(2, "Current semester");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "select", 95);
    i0.ɵɵlistener("ngModelChange", function AdmissionsComponent_Conditional_55_Conditional_18_Conditional_91_Conditional_24_Template_select_ngModelChange_3_listener($event) { i0.ɵɵrestoreView(_r22); const item_r18 = i0.ɵɵnextContext(2); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.updateFeePeriodDraft(item_r18, { currentSemester: +$event })); });
    i0.ɵɵrepeaterCreate(4, AdmissionsComponent_Conditional_55_Conditional_18_Conditional_91_Conditional_24_For_5_Template, 2, 2, "option", 27, i0.ɵɵrepeaterTrackByIdentity);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const item_r18 = i0.ɵɵnextContext(2);
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngModel", ctx_r1.feePeriodDraft(item_r18).currentSemester);
    i0.ɵɵadvance();
    i0.ɵɵrepeater(ctx_r1.semesterOptions);
} }
function AdmissionsComponent_Conditional_55_Conditional_18_Conditional_91_Conditional_30_Template(rf, ctx) { if (rf & 1) {
    const _r24 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 100);
    i0.ɵɵlistener("click", function AdmissionsComponent_Conditional_55_Conditional_18_Conditional_91_Conditional_30_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r24); const item_r18 = i0.ɵɵnextContext(2); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.requestFeeDeletion(item_r18)); });
    i0.ɵɵtext(1, " Delete due ");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(4);
    i0.ɵɵproperty("disabled", ctx_r1.feeSaving());
} }
function AdmissionsComponent_Conditional_55_Conditional_18_Conditional_91_Template(rf, ctx) { if (rf & 1) {
    const _r20 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "section", 87)(1, "header")(2, "div")(3, "h3");
    i0.ɵɵtext(4, "Fee period");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "p");
    i0.ɵɵtext(6, "Saved settings used by fee-ledger generation.");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(7, "span", 67);
    i0.ɵɵtext(8);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(9, "div", 94)(10, "label")(11, "span");
    i0.ɵɵtext(12, "Calculation mode");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(13, "select", 95);
    i0.ɵɵlistener("ngModelChange", function AdmissionsComponent_Conditional_55_Conditional_18_Conditional_91_Template_select_ngModelChange_13_listener($event) { i0.ɵɵrestoreView(_r20); const item_r18 = i0.ɵɵnextContext(); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.updateFeePeriodDraft(item_r18, { feeFrequency: $event })); });
    i0.ɵɵelementStart(14, "option", 96);
    i0.ɵɵtext(15, "Full year");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(16, "option", 97);
    i0.ɵɵtext(17, "Semester-wise");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(18, "label")(19, "span");
    i0.ɵɵtext(20, "Academic year");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(21, "select", 95);
    i0.ɵɵlistener("ngModelChange", function AdmissionsComponent_Conditional_55_Conditional_18_Conditional_91_Template_select_ngModelChange_21_listener($event) { i0.ɵɵrestoreView(_r20); const item_r18 = i0.ɵɵnextContext(); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.updateFeePeriodDraft(item_r18, { currentAcademicYear: +$event })); });
    i0.ɵɵrepeaterCreate(22, AdmissionsComponent_Conditional_55_Conditional_18_Conditional_91_For_23_Template, 2, 2, "option", 27, i0.ɵɵrepeaterTrackByIdentity);
    i0.ɵɵelementEnd()();
    i0.ɵɵconditionalCreate(24, AdmissionsComponent_Conditional_55_Conditional_18_Conditional_91_Conditional_24_Template, 6, 1, "label");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(25, "div", 98)(26, "button", 93);
    i0.ɵɵlistener("click", function AdmissionsComponent_Conditional_55_Conditional_18_Conditional_91_Template_button_click_26_listener() { i0.ɵɵrestoreView(_r20); const item_r18 = i0.ɵɵnextContext(); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.saveFeePeriod(item_r18)); });
    i0.ɵɵtext(27, " Save period ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(28, "button", 45);
    i0.ɵɵlistener("click", function AdmissionsComponent_Conditional_55_Conditional_18_Conditional_91_Template_button_click_28_listener() { i0.ɵɵrestoreView(_r20); const item_r18 = i0.ɵɵnextContext(); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.applyFeePeriod(item_r18)); });
    i0.ɵɵtext(29, " Apply to ledger ");
    i0.ɵɵelementEnd();
    i0.ɵɵconditionalCreate(30, AdmissionsComponent_Conditional_55_Conditional_18_Conditional_91_Conditional_30_Template, 2, 1, "button", 99);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const item_r18 = i0.ɵɵnextContext();
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(7);
    i0.ɵɵclassProp("erp-status--warning", !(item_r18.feeLedgerKinds == null ? null : item_r18.feeLedgerKinds.length));
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r1.feeStatus(item_r18));
    i0.ɵɵadvance(5);
    i0.ɵɵproperty("ngModel", ctx_r1.feePeriodDraft(item_r18).feeFrequency);
    i0.ɵɵadvance(8);
    i0.ɵɵproperty("ngModel", ctx_r1.feePeriodDraft(item_r18).currentAcademicYear);
    i0.ɵɵadvance();
    i0.ɵɵrepeater(ctx_r1.academicYearOptions);
    i0.ɵɵadvance(2);
    i0.ɵɵconditional(ctx_r1.feePeriodDraft(item_r18).feeFrequency === "semester" ? 24 : -1);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("disabled", ctx_r1.feeSaving() || !ctx_r1.feePeriodDirty(item_r18));
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("disabled", ctx_r1.feeSaving() || ctx_r1.feePeriodDirty(item_r18));
    i0.ɵɵadvance(2);
    i0.ɵɵconditional((item_r18.feeLedgerKinds == null ? null : item_r18.feeLedgerKinds.length) ? 30 : -1);
} }
function AdmissionsComponent_Conditional_55_Conditional_18_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 86)(1, "span", 67);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "span");
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd()();
    i0.ɵɵconditionalCreate(5, AdmissionsComponent_Conditional_55_Conditional_18_Conditional_5_Template, 2, 1, "p", 4);
    i0.ɵɵelementStart(6, "section", 87)(7, "header")(8, "div")(9, "h3");
    i0.ɵɵtext(10, "Record actions");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(11, "p");
    i0.ɵɵtext(12, "Actions are shown here only when they apply to this record.");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(13, "div", 88)(14, "a", 89);
    i0.ɵɵtext(15, " Open full record ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(16, "a", 89);
    i0.ɵɵtext(17, " Edit application ");
    i0.ɵɵelementEnd();
    i0.ɵɵconditionalCreate(18, AdmissionsComponent_Conditional_55_Conditional_18_Conditional_18_Template, 2, 3, "a", 90);
    i0.ɵɵconditionalCreate(19, AdmissionsComponent_Conditional_55_Conditional_18_Conditional_19_Template, 6, 4);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(20, "section", 87)(21, "header")(22, "div")(23, "h3");
    i0.ɵɵtext(24, "Application overview");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(25, "p");
    i0.ɵɵtext(26, "Core identity and academic context.");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(27, "dl", 91)(28, "div")(29, "dt");
    i0.ɵɵtext(30, "Student ID");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(31, "dd");
    i0.ɵɵtext(32);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(33, "div")(34, "dt");
    i0.ɵɵtext(35, "Programme");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(36, "dd");
    i0.ɵɵtext(37);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(38, "div")(39, "dt");
    i0.ɵɵtext(40, "Academic session");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(41, "dd");
    i0.ɵɵtext(42);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(43, "div")(44, "dt");
    i0.ɵɵtext(45, "College");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(46, "dd");
    i0.ɵɵtext(47);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(48, "div")(49, "dt");
    i0.ɵɵtext(50, "Department");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(51, "dd");
    i0.ɵɵtext(52);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(53, "div")(54, "dt");
    i0.ɵɵtext(55, "Student type");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(56, "dd");
    i0.ɵɵtext(57);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(58, "div")(59, "dt");
    i0.ɵɵtext(60, "Domicile");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(61, "dd");
    i0.ɵɵtext(62);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(63, "div")(64, "dt");
    i0.ɵɵtext(65, "Form version");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(66, "dd");
    i0.ɵɵtext(67);
    i0.ɵɵelementEnd()()()();
    i0.ɵɵelementStart(68, "section", 87)(69, "header")(70, "div")(71, "h3");
    i0.ɵɵtext(72, "Lifecycle");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(73, "p");
    i0.ɵɵtext(74, "Read-only audit dates available on this application.");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(75, "dl", 92)(76, "div")(77, "dt");
    i0.ɵɵtext(78, "Created");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(79, "dd");
    i0.ɵɵtext(80);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(81, "div")(82, "dt");
    i0.ɵɵtext(83, "Submitted");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(84, "dd");
    i0.ɵɵtext(85);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(86, "div")(87, "dt");
    i0.ɵɵtext(88, "Approved");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(89, "dd");
    i0.ɵɵtext(90);
    i0.ɵɵelementEnd()()()();
    i0.ɵɵconditionalCreate(91, AdmissionsComponent_Conditional_55_Conditional_18_Conditional_91_Template, 31, 9, "section", 87);
} if (rf & 2) {
    const item_r18 = ctx;
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵclassProp("erp-status--draft", item_r18.status === "draft")("erp-status--warning", item_r18.status === "pending_approval" || item_r18.status === "submitted");
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r1.statusLabel(item_r18));
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r1.captureLabel(item_r18));
    i0.ɵɵadvance();
    i0.ɵɵconditional(ctx_r1.actionError() ? 5 : -1);
    i0.ɵɵadvance(9);
    i0.ɵɵproperty("routerLink", i0.ɵɵpureFunction1(23, _c1, item_r18._id));
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("routerLink", i0.ɵɵpureFunction1(25, _c2, item_r18._id));
    i0.ɵɵadvance(2);
    i0.ɵɵconditional(item_r18.status === "pending_approval" || item_r18.status === "submitted" ? 18 : -1);
    i0.ɵɵadvance();
    i0.ɵɵconditional(item_r18.status === "approved" ? 19 : -1);
    i0.ɵɵadvance(13);
    i0.ɵɵtextInterpolate(item_r18.studentId || "Not generated");
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(item_r18.courseName || "Not selected");
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(item_r18.academicSession || "Not selected");
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(item_r18.collegeName || "Not selected");
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(item_r18.departmentName || "Not selected");
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(item_r18.studentTypeName || "Not selected");
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(item_r18.domicileName || "Not selected");
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(item_r18.formVersion || "Not recorded");
    i0.ɵɵadvance(13);
    i0.ɵɵtextInterpolate(ctx_r1.createdLabel(item_r18));
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(ctx_r1.submittedLabel(item_r18));
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(ctx_r1.approvedLabel(item_r18));
    i0.ɵɵadvance();
    i0.ɵɵconditional(item_r18.status === "approved" ? 91 : -1);
} }
function AdmissionsComponent_Conditional_55_Template(rf, ctx) { if (rf & 1) {
    const _r16 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 33)(1, "button", 74);
    i0.ɵɵlistener("click", function AdmissionsComponent_Conditional_55_Template_button_click_1_listener() { i0.ɵɵrestoreView(_r16); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.closePreview()); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(2, "section", 75)(3, "header", 76)(4, "span", 77);
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(5, "svg", 78);
    i0.ɵɵelementEnd();
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(6, "div")(7, "small");
    i0.ɵɵtext(8, "Quick preview");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(9, "h2", 79);
    i0.ɵɵtext(10);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(11, "p");
    i0.ɵɵtext(12);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(13, "button", 80);
    i0.ɵɵlistener("click", function AdmissionsComponent_Conditional_55_Template_button_click_13_listener() { i0.ɵɵrestoreView(_r16); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.closePreview()); });
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(14, "svg", 81);
    i0.ɵɵelementEnd()();
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(15, "div", 82);
    i0.ɵɵconditionalCreate(16, AdmissionsComponent_Conditional_55_Conditional_16_Template, 4, 0, "div", 83)(17, AdmissionsComponent_Conditional_55_Conditional_17_Template, 9, 1, "div", 54)(18, AdmissionsComponent_Conditional_55_Conditional_18_Template, 92, 27);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    let tmp_2_0;
    let tmp_4_0;
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("cdkTrapFocusAutoCapture", true);
    i0.ɵɵadvance(8);
    i0.ɵɵtextInterpolate(((tmp_2_0 = ctx_r1.preview()) == null ? null : tmp_2_0.studentName) || "Application");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r1.preview() ? ctx_r1.reference(ctx_r1.preview()) : "Loading the application record\u2026");
    i0.ɵɵadvance(4);
    i0.ɵɵconditional(ctx_r1.previewLoading() ? 16 : ctx_r1.previewError() ? 17 : (tmp_4_0 = ctx_r1.preview()) ? 18 : -1, tmp_4_0);
} }
function AdmissionsComponent_Conditional_58_Conditional_28_Template(rf, ctx) { if (rf & 1) {
    const _r26 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "label")(1, "span");
    i0.ɵɵtext(2, "New password");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "input", 115);
    i0.ɵɵtwoWayListener("ngModelChange", function AdmissionsComponent_Conditional_58_Conditional_28_Template_input_ngModelChange_3_listener($event) { i0.ɵɵrestoreView(_r26); const ctx_r1 = i0.ɵɵnextContext(2); i0.ɵɵtwoWayBindingSet(ctx_r1.manualPassword, $event) || (ctx_r1.manualPassword = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(4, "label")(5, "span");
    i0.ɵɵtext(6, "Confirm password");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "input", 115);
    i0.ɵɵtwoWayListener("ngModelChange", function AdmissionsComponent_Conditional_58_Conditional_28_Template_input_ngModelChange_7_listener($event) { i0.ɵɵrestoreView(_r26); const ctx_r1 = i0.ɵɵnextContext(2); i0.ɵɵtwoWayBindingSet(ctx_r1.confirmPassword, $event) || (ctx_r1.confirmPassword = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(3);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r1.manualPassword);
    i0.ɵɵadvance(4);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r1.confirmPassword);
} }
function AdmissionsComponent_Conditional_58_Conditional_29_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 4);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r1.credentialError());
} }
function AdmissionsComponent_Conditional_58_Template(rf, ctx) { if (rf & 1) {
    const _r25 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 36)(1, "button", 101);
    i0.ɵɵlistener("click", function AdmissionsComponent_Conditional_58_Template_button_click_1_listener() { i0.ɵɵrestoreView(_r25); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.closeCredentials()); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(2, "section", 102)(3, "header", 103)(4, "div")(5, "small");
    i0.ɵɵtext(6, "Account security");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "h2", 104);
    i0.ɵɵtext(8, "Reset temporary password");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(9, "button", 105);
    i0.ɵɵlistener("click", function AdmissionsComponent_Conditional_58_Template_button_click_9_listener() { i0.ɵɵrestoreView(_r25); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.closeCredentials()); });
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(10, "svg", 106);
    i0.ɵɵelementEnd()();
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(11, "div", 107)(12, "div", 108)(13, "strong");
    i0.ɵɵtext(14);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(15, "span");
    i0.ɵɵtext(16);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(17, "p");
    i0.ɵɵtext(18, "The student must change this temporary password after signing in.");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(19, "div", 109)(20, "label")(21, "span");
    i0.ɵɵtext(22, "Temporary password");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(23, "select", 95);
    i0.ɵɵtwoWayListener("ngModelChange", function AdmissionsComponent_Conditional_58_Template_select_ngModelChange_23_listener($event) { i0.ɵɵrestoreView(_r25); const ctx_r1 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r1.passwordMode, $event) || (ctx_r1.passwordMode = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementStart(24, "option", 110);
    i0.ɵɵtext(25, "Use Student ID");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(26, "option", 111);
    i0.ɵɵtext(27, "Enter manually");
    i0.ɵɵelementEnd()()();
    i0.ɵɵconditionalCreate(28, AdmissionsComponent_Conditional_58_Conditional_28_Template, 8, 2);
    i0.ɵɵelementEnd();
    i0.ɵɵconditionalCreate(29, AdmissionsComponent_Conditional_58_Conditional_29_Template, 2, 1, "p", 4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(30, "footer", 112)(31, "button", 113);
    i0.ɵɵlistener("click", function AdmissionsComponent_Conditional_58_Template_button_click_31_listener() { i0.ɵɵrestoreView(_r25); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.closeCredentials()); });
    i0.ɵɵtext(32, " Cancel ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(33, "button", 114);
    i0.ɵɵlistener("click", function AdmissionsComponent_Conditional_58_Template_button_click_33_listener() { i0.ɵɵrestoreView(_r25); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.saveCredentials()); });
    i0.ɵɵtext(34);
    i0.ɵɵelementEnd()()()();
} if (rf & 2) {
    const item_r27 = ctx;
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("cdkTrapFocusAutoCapture", true);
    i0.ɵɵadvance(12);
    i0.ɵɵtextInterpolate(item_r27.studentName || "Unnamed application");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r1.reference(item_r27));
    i0.ɵɵadvance(7);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r1.passwordMode);
    i0.ɵɵadvance(5);
    i0.ɵɵconditional(ctx_r1.passwordMode === "manual" ? 28 : -1);
    i0.ɵɵadvance();
    i0.ɵɵconditional(ctx_r1.credentialError() ? 29 : -1);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("disabled", ctx_r1.credentialSaving());
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("disabled", ctx_r1.credentialSaving());
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r1.credentialSaving() ? "Saving\u2026" : "Reset password", " ");
} }
const SAVED_VIEWS = [
    {
        id: 'all',
        tabLabel: 'All',
        pageTitle: 'All applications',
        description: 'Every application stage',
        route: '/admin/admissions/applications',
    },
    {
        id: 'draft',
        tabLabel: 'Drafts',
        pageTitle: 'Draft applications',
        description: 'Started but not submitted',
        route: '/admin/admissions/unfilled',
        status: 'draft',
    },
    {
        id: 'review',
        tabLabel: 'Awaiting review',
        pageTitle: 'Awaiting review',
        description: 'Submitted for an admin decision',
        route: '/admin/admissions/not-approved',
        status: 'pending_approval',
    },
    {
        id: 'approved',
        tabLabel: 'Approved',
        pageTitle: 'Approved students',
        description: 'Activated student records',
        route: '/admin/admissions/approved',
        status: 'approved',
    },
];
const TABLE_COLUMNS = [
    { id: 'application', label: 'Application ID' },
    { id: 'applicant', label: 'Applicant' },
    { id: 'programme', label: 'Programme & intake' },
    { id: 'stage', label: 'Stage' },
    { id: 'activity', label: 'Last activity' },
];
const FILTER_FIELDS = [
    { id: 'application', label: 'Application ID', placeholder: 'e.g. APP-2026-0012' },
    { id: 'studentId', label: 'Student ID', placeholder: 'e.g. STU-10482' },
    { id: 'studentName', label: 'Student name', placeholder: 'Enter applicant name' },
    { id: 'university', label: 'University', type: 'select', options: [] },
    { id: 'college', label: 'College', type: 'select', options: [] },
    { id: 'branch', label: 'Branch', type: 'select', options: [] },
    { id: 'course', label: 'Course', type: 'select', options: [] },
    { id: 'session', label: 'Academic session', type: 'select', options: [] },
];
export class AdmissionsComponent {
    api = inject(ApiService);
    router = inject(Router);
    route = inject(ActivatedRoute);
    destroyRef = inject(DestroyRef);
    document = inject(DOCUMENT);
    listRequest;
    previewRequest;
    previewReturnFocus;
    savedViews = SAVED_VIEWS;
    view = signal('all', ...(ngDevMode ? [{ debugName: "view" }] : /* istanbul ignore next */ []));
    activeView = computed(() => SAVED_VIEWS.find((savedView) => savedView.id === this.view()) || SAVED_VIEWS[0], ...(ngDevMode ? [{ debugName: "activeView" }] : /* istanbul ignore next */ []));
    items = signal([], ...(ngDevMode ? [{ debugName: "items" }] : /* istanbul ignore next */ []));
    loading = signal(false, ...(ngDevMode ? [{ debugName: "loading" }] : /* istanbul ignore next */ []));
    listError = signal('', ...(ngDevMode ? [{ debugName: "listError" }] : /* istanbul ignore next */ []));
    actionError = signal('', ...(ngDevMode ? [{ debugName: "actionError" }] : /* istanbul ignore next */ []));
    message = signal('', ...(ngDevMode ? [{ debugName: "message" }] : /* istanbul ignore next */ []));
    total = signal(0, ...(ngDevMode ? [{ debugName: "total" }] : /* istanbul ignore next */ []));
    pages = signal(1, ...(ngDevMode ? [{ debugName: "pages" }] : /* istanbul ignore next */ []));
    viewTotals = signal({
        all: 0,
        draft: 0,
        review: 0,
        approved: 0,
    }, ...(ngDevMode ? [{ debugName: "viewTotals" }] : /* istanbul ignore next */ []));
    appliedSearch = signal('', ...(ngDevMode ? [{ debugName: "appliedSearch" }] : /* istanbul ignore next */ []));
    selectedStudentIds = signal(new Set(), ...(ngDevMode ? [{ debugName: "selectedStudentIds" }] : /* istanbul ignore next */ []));
    tableColumns = TABLE_COLUMNS;
    filterFields = signal(FILTER_FIELDS, ...(ngDevMode ? [{ debugName: "filterFields" }] : /* istanbul ignore next */ []));
    appliedFilters = signal({}, ...(ngDevMode ? [{ debugName: "appliedFilters" }] : /* istanbul ignore next */ []));
    visibleColumns = signal(TABLE_COLUMNS.map((column) => column.id), ...(ngDevMode ? [{ debugName: "visibleColumns" }] : /* istanbul ignore next */ []));
    visibleTableColumnCount = computed(() => this.visibleColumns().length + 2, ...(ngDevMode ? [{ debugName: "visibleTableColumnCount" }] : /* istanbul ignore next */ []));
    previewOpen = signal(false, ...(ngDevMode ? [{ debugName: "previewOpen" }] : /* istanbul ignore next */ []));
    preview = signal(null, ...(ngDevMode ? [{ debugName: "preview" }] : /* istanbul ignore next */ []));
    previewLoading = signal(false, ...(ngDevMode ? [{ debugName: "previewLoading" }] : /* istanbul ignore next */ []));
    previewError = signal('', ...(ngDevMode ? [{ debugName: "previewError" }] : /* istanbul ignore next */ []));
    masterLabels = signal({}, ...(ngDevMode ? [{ debugName: "masterLabels" }] : /* istanbul ignore next */ []));
    formId = signal('', ...(ngDevMode ? [{ debugName: "formId" }] : /* istanbul ignore next */ []));
    activeOnly = signal(false, ...(ngDevMode ? [{ debugName: "activeOnly" }] : /* istanbul ignore next */ []));
    databaseMode = signal(false, ...(ngDevMode ? [{ debugName: "databaseMode" }] : /* istanbul ignore next */ []));
    credentialStudent = signal(null, ...(ngDevMode ? [{ debugName: "credentialStudent" }] : /* istanbul ignore next */ []));
    credentialSaving = signal(false, ...(ngDevMode ? [{ debugName: "credentialSaving" }] : /* istanbul ignore next */ []));
    credentialError = signal('', ...(ngDevMode ? [{ debugName: "credentialError" }] : /* istanbul ignore next */ []));
    feeSaving = signal(false, ...(ngDevMode ? [{ debugName: "feeSaving" }] : /* istanbul ignore next */ []));
    feePeriodDrafts = signal({}, ...(ngDevMode ? [{ debugName: "feePeriodDrafts" }] : /* istanbul ignore next */ []));
    feeDeleteStudent = signal(null, ...(ngDevMode ? [{ debugName: "feeDeleteStudent" }] : /* istanbul ignore next */ []));
    feeGenerationIds = signal([], ...(ngDevMode ? [{ debugName: "feeGenerationIds" }] : /* istanbul ignore next */ []));
    pageSizeOptions = ERP_PAGINATION.pageSizeOptions;
    academicYearOptions = Array.from({ length: 10 }, (_, index) => index + 1);
    semesterOptions = Array.from({ length: 20 }, (_, index) => index + 1);
    eligibleOnPage = computed(() => this.items().filter((item) => item.status === 'approved'), ...(ngDevMode ? [{ debugName: "eligibleOnPage" }] : /* istanbul ignore next */ []));
    allEligibleSelected = computed(() => {
        const eligible = this.eligibleOnPage();
        return eligible.length > 0 && eligible.every((item) => this.selectedStudentIds().has(item._id));
    }, ...(ngDevMode ? [{ debugName: "allEligibleSelected" }] : /* istanbul ignore next */ []));
    someEligibleSelected = computed(() => {
        const selected = this.selectedStudentIds();
        const selectedOnPage = this.eligibleOnPage().filter((item) => selected.has(item._id)).length;
        return selectedOnPage > 0 && selectedOnPage < this.eligibleOnPage().length;
    }, ...(ngDevMode ? [{ debugName: "someEligibleSelected" }] : /* istanbul ignore next */ []));
    search = '';
    page = ERP_PAGINATION.defaultPage;
    pageSize = ERP_PAGINATION.defaultPageSize;
    passwordMode = 'student-id';
    manualPassword = '';
    confirmPassword = '';
    constructor() {
        this.loadFilterOptions();
        this.loadViewTotals();
        combineLatest([this.route.data, this.route.queryParamMap, this.route.paramMap])
            .pipe(takeUntilDestroyed(this.destroyRef))
            .subscribe(([data, params, routeParams]) => {
            const fallbackView = viewFromStatus(data['status']);
            this.view.set(normaliseView(params.get('view')) || fallbackView);
            this.formId.set(routeParams.get('formId') || params.get('formId') || '');
            this.activeOnly.set(data['isActive'] === true);
            this.databaseMode.set(data['database'] === true);
            this.search = params.get('q') || '';
            this.appliedSearch.set(this.search);
            this.page = positiveInteger(params.get('page'), ERP_PAGINATION.defaultPage);
            this.pageSize = allowedPageSize(params.get('size'));
            this.appliedFilters.set(Object.fromEntries(FILTER_FIELDS.map((field) => [field.id, params.get(field.id) || ''])));
            this.clearSelection();
            this.closePreview(false);
            this.load();
        });
    }
    setView(view) {
        const target = SAVED_VIEWS.find((savedView) => savedView.id === view) || SAVED_VIEWS[0];
        this.message.set('');
        this.actionError.set('');
        void this.router.navigate([target.route], {
            queryParams: {
                q: this.appliedSearch() || null,
                size: this.pageSize !== ERP_PAGINATION.defaultPageSize ? this.pageSize : null,
            },
        });
    }
    searchRecords() {
        this.updateUrl({ search: this.search.trim(), page: 1 });
    }
    clearSearch() {
        this.search = '';
        this.updateUrl({ search: '', page: 1 });
    }
    resetFilters() {
        this.search = '';
        this.updateUrl({
            view: this.databaseMode() ? 'approved' : 'all',
            search: '',
            page: ERP_PAGINATION.defaultPage,
            pageSize: ERP_PAGINATION.defaultPageSize,
            filters: {},
        });
    }
    applyAdvancedFilters(filters) {
        this.updateUrl({ filters, page: 1 });
    }
    columnVisible(column) {
        return this.visibleColumns().includes(column);
    }
    updateVisibleColumns(columns) {
        this.visibleColumns.set(columns);
    }
    viewTotal(view) {
        return this.viewTotals()[view];
    }
    changePage(nextPage) {
        if (nextPage < 1 || nextPage > this.pages() || nextPage === this.page)
            return;
        this.updateUrl({ page: nextPage });
    }
    changePageSize(nextPageSize) {
        this.updateUrl({ pageSize: Number(nextPageSize), page: 1 });
    }
    load() {
        this.listRequest?.unsubscribe();
        this.loading.set(true);
        this.listError.set('');
        this.listRequest = this.api
            .admissions({
            status: this.activeView().status,
            search: this.appliedSearch(),
            page: this.page,
            limit: this.pageSize,
            ...this.appliedFilters(),
            formId: this.formId(),
            isActive: this.activeOnly() || undefined,
        })
            .pipe(takeUntilDestroyed(this.destroyRef))
            .subscribe({
            next: ({ items, pagination }) => {
                this.items.set(items);
                this.feePeriodDrafts.set(Object.fromEntries(items.map((item) => [item._id, feePeriodFromAdmission(item)])));
                this.total.set(pagination.total);
                this.viewTotals.update((totals) => ({
                    ...totals,
                    [this.view()]: pagination.total,
                }));
                this.pages.set(Math.max(1, pagination.pages));
                this.page = pagination.page || this.page;
                this.loading.set(false);
            },
            error: (error) => {
                this.listError.set(error.error?.message || 'Applications could not be loaded.');
                this.loading.set(false);
            },
        });
    }
    rowActions(item) {
        const actions = [{ id: 'preview', label: 'Quick preview', icon: 'view' }];
        if (item.status === 'pending_approval' || item.status === 'submitted') {
            actions.push({ id: 'review', label: 'Review application', icon: 'check' });
        }
        actions.push({ id: 'edit', label: 'Edit application', icon: 'edit' });
        if (item.status === 'approved') {
            actions.push({
                id: 'offline-payment',
                label: 'Make offline payment',
                icon: 'fees',
            });
            if (item.feeLedgerKinds?.length) {
                actions.push({
                    id: 'delete-due',
                    label: 'Delete due',
                    icon: 'delete',
                    destructive: true,
                });
            }
            actions.push({
                id: 'scholarships',
                label: 'Scholarships & discounts',
                icon: 'scholarship',
            });
        }
        return actions;
    }
    handleRowAction(action, item) {
        if (action === 'preview')
            this.openPreview(item);
        if (action === 'review') {
            void this.router.navigate(['/admin/admissions/applications', item._id, 'review']);
        }
        if (action === 'edit')
            void this.router.navigate(['/admin/admissions', item._id, 'edit']);
        if (action === 'scholarships') {
            void this.router.navigate(['/admin/admissions', item._id, 'scholarships']);
        }
        if (action === 'offline-payment') {
            void this.router.navigate(['/admin/admissions', item._id, 'offline-payment']);
        }
        if (action === 'delete-due')
            this.requestFeeDeletion(item);
    }
    openPreview(item, event) {
        const trigger = event?.currentTarget || this.document.activeElement;
        if (trigger instanceof HTMLElement)
            this.previewReturnFocus = trigger;
        this.previewRequest?.unsubscribe();
        this.previewOpen.set(true);
        this.preview.set(null);
        this.previewLoading.set(true);
        this.previewError.set('');
        this.masterLabels.set({});
        this.previewRequest = this.api
            .admission(item._id)
            .pipe(takeUntilDestroyed(this.destroyRef))
            .subscribe({
            next: ({ item: detail, masterLabels }) => {
                const merged = { ...detail, feeLedgerKinds: item.feeLedgerKinds };
                this.preview.set(merged);
                this.masterLabels.set(masterLabels);
                this.feePeriodDrafts.update((drafts) => ({
                    ...drafts,
                    [merged._id]: feePeriodFromAdmission(merged),
                }));
                this.previewLoading.set(false);
            },
            error: (error) => {
                this.previewError.set(error.error?.message || 'This application could not be opened.');
                this.previewLoading.set(false);
            },
        });
    }
    retryPreview(item) {
        this.openPreview(item);
    }
    closePreview(restoreFocus = true) {
        if (!this.previewOpen())
            return;
        this.previewRequest?.unsubscribe();
        this.previewOpen.set(false);
        this.preview.set(null);
        this.previewLoading.set(false);
        this.previewError.set('');
        this.masterLabels.set({});
        if (restoreFocus) {
            const target = this.previewReturnFocus;
            setTimeout(() => target?.focus());
        }
    }
    isSelected(item) {
        return this.selectedStudentIds().has(item._id);
    }
    bulkEligible(item) {
        return item.status === 'approved';
    }
    toggleStudent(item, selected) {
        if (!this.bulkEligible(item))
            return;
        this.selectedStudentIds.update((current) => {
            const next = new Set(current);
            if (selected)
                next.add(item._id);
            else
                next.delete(item._id);
            return next;
        });
    }
    togglePage(selected) {
        this.selectedStudentIds.set(new Set(selected ? this.eligibleOnPage().map((item) => item._id) : []));
    }
    clearSelection() {
        this.selectedStudentIds.set(new Set());
    }
    requestSelectedFeeGeneration() {
        this.feeGenerationIds.set([...this.selectedStudentIds()]);
    }
    requestFeeGeneration(item) {
        this.feeGenerationIds.set([item._id]);
    }
    feeGenerationMessage() {
        const ids = this.feeGenerationIds();
        if (ids.length === 1) {
            const item = this.preview() || this.items().find((entry) => entry._id === ids[0]);
            return `Create any missing fee ledgers for ${item?.studentName || item?.studentId || 'this student'} using the currently saved fee period? Existing ledgers will not be duplicated.`;
        }
        return `Create missing fee ledgers for ${ids.length} approved applications selected on this page? Existing ledgers will not be duplicated.`;
    }
    confirmFeeGeneration() {
        const ids = this.feeGenerationIds();
        this.feeGenerationIds.set([]);
        this.createFees(ids);
    }
    createFees(studentAdmissionIds) {
        if (!studentAdmissionIds.length || this.feeSaving())
            return;
        this.feeSaving.set(true);
        this.actionError.set('');
        this.api
            .generateStudentFees(studentAdmissionIds)
            .pipe(takeUntilDestroyed(this.destroyRef))
            .subscribe({
            next: ({ created, studentsProcessed, results }) => {
                const failures = results
                    .flatMap((result) => result.reason
                    ? [`${result.studentName || result.studentId || 'Student'}: ${result.reason}`]
                    : result.skippedKinds.map((entry) => `${result.studentName || result.studentId || 'Student'} ${entry.kind}: ${entry.reason}`))
                    .filter((reason) => !reason.includes('already created'));
                this.message.set(`${created} fee ledger(s) created for ${studentsProcessed} student(s).${failures.length ? ` ${failures.join(' ')}` : ''}`);
                this.feeSaving.set(false);
                this.clearSelection();
                this.closePreview(false);
                this.load();
            },
            error: (error) => {
                this.actionError.set(error.error?.message || 'Fee ledgers could not be created.');
                this.feeSaving.set(false);
            },
        });
    }
    feePeriodDraft(item) {
        return this.feePeriodDrafts()[item._id] || feePeriodFromAdmission(item);
    }
    updateFeePeriodDraft(item, changes) {
        const current = this.feePeriodDraft(item);
        const next = { ...current, ...changes };
        if (changes.feeFrequency === 'semester' && current.feeFrequency !== 'semester') {
            next.currentSemester = Math.max(1, next.currentAcademicYear * 2 - 1);
        }
        if (changes.currentAcademicYear !== undefined && next.feeFrequency === 'semester') {
            next.currentSemester = Math.max(1, Number(changes.currentAcademicYear) * 2 - 1);
        }
        if (changes.currentSemester !== undefined) {
            next.currentAcademicYear = this.yearForSemester(changes.currentSemester);
        }
        this.feePeriodDrafts.update((drafts) => ({ ...drafts, [item._id]: next }));
    }
    feePeriodDirty(item) {
        const draft = this.feePeriodDraft(item);
        return (draft.feeFrequency !== (item.feeFrequency || 'year') ||
            draft.currentAcademicYear !== Number(item.currentAcademicYear || 1) ||
            (draft.feeFrequency === 'semester' &&
                draft.currentSemester !==
                    Number(item.currentSemester || Number(item.currentAcademicYear || 1) * 2 - 1)));
    }
    saveFeePeriod(item) {
        if (this.feeSaving())
            return;
        this.feeSaving.set(true);
        this.actionError.set('');
        const draft = this.feePeriodDraft(item);
        this.api
            .setAdmissionFeePeriod(item._id, draft)
            .pipe(takeUntilDestroyed(this.destroyRef))
            .subscribe({
            next: ({ item: updated }) => {
                const merged = { ...item, ...updated };
                this.preview.set(merged);
                this.items.update((items) => items.map((entry) => (entry._id === merged._id ? { ...entry, ...updated } : entry)));
                this.feePeriodDrafts.update((drafts) => ({
                    ...drafts,
                    [item._id]: feePeriodFromAdmission(merged),
                }));
                this.message.set(`Fee period saved for ${item.studentName || item.studentId || 'the student'}. Apply it when you are ready to refresh the unpaid academic ledger.`);
                this.feeSaving.set(false);
            },
            error: (error) => {
                this.actionError.set(error.error?.message || 'The fee period could not be saved.');
                this.feeSaving.set(false);
            },
        });
    }
    applyFeePeriod(item) {
        if (this.feeSaving())
            return;
        if (this.feePeriodDirty(item)) {
            this.actionError.set('Save the fee period before refreshing the ledger.');
            return;
        }
        this.feeSaving.set(true);
        this.actionError.set('');
        this.api
            .recalculateStudentFees([item._id])
            .pipe(takeUntilDestroyed(this.destroyRef))
            .subscribe({
            next: ({ created, results }) => {
                const result = results[0];
                const reason = result?.reason || result?.skippedKinds.map((entry) => entry.reason).join(' ');
                if (created) {
                    this.message.set(`The saved fee period was applied to ${item.studentName || item.studentId || 'the student'}.`);
                    this.feeSaving.set(false);
                    this.closePreview(false);
                    this.load();
                    return;
                }
                this.actionError.set(reason || 'The academic fee ledger could not be refreshed.');
                this.feeSaving.set(false);
            },
            error: (error) => {
                this.actionError.set(error.error?.message || 'The saved fee period could not be applied.');
                this.feeSaving.set(false);
            },
        });
    }
    requestFeeDeletion(item) {
        this.feeDeleteStudent.set(item);
    }
    confirmFeeDeletion() {
        const item = this.feeDeleteStudent();
        this.feeDeleteStudent.set(null);
        if (!item || this.feeSaving())
            return;
        this.feeSaving.set(true);
        this.actionError.set('');
        this.api
            .deleteStudentFees(item._id)
            .pipe(takeUntilDestroyed(this.destroyRef))
            .subscribe({
            next: ({ deleted }) => {
                this.message.set(`${deleted} fee ledger(s) deleted for ${item.studentName || item.studentId || 'the student'}.`);
                this.feeSaving.set(false);
                this.closePreview(false);
                this.load();
            },
            error: (error) => {
                this.actionError.set(error.error?.message || 'The fee ledgers could not be deleted.');
                this.feeSaving.set(false);
            },
        });
    }
    openCredentials(item) {
        this.credentialStudent.set(item);
        this.passwordMode = 'student-id';
        this.manualPassword = '';
        this.confirmPassword = '';
        this.credentialError.set('');
    }
    closeCredentials() {
        if (this.credentialSaving())
            return;
        this.credentialStudent.set(null);
        this.credentialError.set('');
    }
    saveCredentials() {
        const item = this.credentialStudent();
        if (!item || this.credentialSaving())
            return;
        this.credentialError.set('');
        if (this.passwordMode === 'manual' &&
            (this.manualPassword.length < 8 || this.manualPassword !== this.confirmPassword)) {
            this.credentialError.set('Manual passwords must match and contain at least 8 characters.');
            return;
        }
        this.credentialSaving.set(true);
        const passwordBody = {
            passwordMode: this.passwordMode,
            password: this.passwordMode === 'manual' ? this.manualPassword : undefined,
        };
        this.api
            .resetStudentPassword(item._id, passwordBody)
            .pipe(takeUntilDestroyed(this.destroyRef))
            .subscribe({
            next: () => {
                this.message.set(`${item.studentName || item.studentId || 'Student'} password reset successfully.`);
                this.credentialSaving.set(false);
                this.credentialStudent.set(null);
                this.closePreview(false);
                this.load();
            },
            error: (error) => {
                this.credentialError.set(error.error?.message || 'The student account could not be updated.');
                this.credentialSaving.set(false);
            },
        });
    }
    statusLabel(item) {
        return admissionStatusLabel(item);
    }
    reference(item) {
        return admissionReference(item);
    }
    initials(item) {
        return admissionInitials(item);
    }
    activityLabel(item) {
        return admissionDateLabel(admissionLastActivity(item));
    }
    createdLabel(item) {
        return admissionDateLabel(item.createdAt);
    }
    submittedLabel(item) {
        return admissionDateLabel(item.submittedAt);
    }
    approvedLabel(item) {
        return admissionDateLabel(item.approvedAt);
    }
    captureLabel(item) {
        const stats = admissionCaptureStats(item);
        if (!stats.total)
            return 'No form snapshot';
        return `${stats.answered} of ${stats.total} fields captured`;
    }
    feeStatus(item) {
        const kinds = item.feeLedgerKinds || [];
        if (!kinds.length)
            return 'No fee ledger';
        return kinds.map((kind) => (kind === 'academic' ? 'Academic' : 'Hostel')).join(' + ');
    }
    yearForSemester(value) {
        return Math.ceil(Number(value) / 2);
    }
    firstResult() {
        return this.total() ? (this.page - 1) * this.pageSize + 1 : 0;
    }
    lastResult() {
        return Math.min(this.page * this.pageSize, this.total());
    }
    pageNumbers() {
        const pageCount = this.pages();
        if (pageCount <= 5)
            return Array.from({ length: pageCount }, (_, index) => index + 1);
        const start = Math.max(1, Math.min(this.page - 2, pageCount - 4));
        return Array.from({ length: 5 }, (_, index) => start + index);
    }
    emptyTitle() {
        return this.appliedSearch()
            ? 'No matching applications'
            : `No ${this.activeView().pageTitle.toLowerCase()}`;
    }
    emptyDescription() {
        return this.appliedSearch()
            ? 'Try a broader name, student ID, programme, or session search.'
            : 'Applications will appear here when they reach this workflow stage.';
    }
    updateUrl(changes) {
        const nextView = changes.view ?? this.view();
        const nextSearch = changes.search ?? this.search.trim();
        const nextPage = changes.page ?? this.page;
        const nextPageSize = changes.pageSize ?? this.pageSize;
        const nextFilters = changes.filters ?? this.appliedFilters();
        this.message.set('');
        this.actionError.set('');
        const unchanged = nextView === this.view() &&
            nextSearch === this.appliedSearch() &&
            nextPage === this.page &&
            nextPageSize === this.pageSize;
        const filtersUnchanged = FILTER_FIELDS.every((field) => (nextFilters[field.id] || '') === (this.appliedFilters()[field.id] || ''));
        if (unchanged && filtersUnchanged) {
            this.load();
            return;
        }
        void this.router.navigate([], {
            relativeTo: this.route,
            queryParams: {
                view: nextView,
                q: nextSearch || null,
                page: nextPage > 1 ? nextPage : null,
                size: nextPageSize !== ERP_PAGINATION.defaultPageSize ? nextPageSize : null,
                ...Object.fromEntries(FILTER_FIELDS.map((field) => [field.id, nextFilters[field.id] || null])),
            },
            replaceUrl: true,
        });
    }
    loadViewTotals() {
        const totalFor = (status) => this.api.admissions({ status, page: 1, limit: 1 }).pipe(map(({ pagination }) => pagination.total), catchError(() => of(0)));
        forkJoin({
            all: totalFor(),
            draft: totalFor('draft'),
            review: totalFor('pending_approval'),
            approved: totalFor('approved'),
        })
            .pipe(takeUntilDestroyed(this.destroyRef))
            .subscribe((totals) => this.viewTotals.set(totals));
    }
    loadFilterOptions() {
        forkJoin({
            universities: this.api.masterValues('university', { active: true }),
            colleges: this.api.masterValues('college', { active: true }),
            departments: this.api.masterValues('department', { active: true }),
            courses: this.api.masterValues('course', { active: true }),
            sessions: this.api.masterValues('academic', { active: true }),
        })
            .pipe(catchError(() => of(null)), takeUntilDestroyed(this.destroyRef))
            .subscribe((result) => {
            if (!result)
                return;
            const options = (items) => items.map((item) => ({ label: item.name, value: item.name }));
            this.filterFields.update((fields) => fields.map((field) => field.id === 'university'
                ? { ...field, type: 'select', options: options(result.universities.items) }
                : field.id === 'college'
                    ? { ...field, type: 'select', options: options(result.colleges.items) }
                    : field.id === 'branch'
                        ? { ...field, type: 'select', options: options(result.departments.items) }
                        : field.id === 'course'
                            ? { ...field, type: 'select', options: options(result.courses.items) }
                            : field.id === 'session'
                                ? { ...field, type: 'select', options: options(result.sessions.items) }
                                : field));
        });
    }
    closeLayerOnEscape() {
        if (this.credentialStudent() || this.feeDeleteStudent() || this.feeGenerationIds().length) {
            return;
        }
        if (this.previewOpen())
            this.closePreview();
    }
    static ɵfac = function AdmissionsComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || AdmissionsComponent)(); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: AdmissionsComponent, selectors: [["erp-admissions"]], hostBindings: function AdmissionsComponent_HostBindings(rf, ctx) { if (rf & 1) {
            i0.ɵɵlistener("keydown.escape", function AdmissionsComponent_keydown_escape_HostBindingHandler() { return ctx.closeLayerOnEscape(); }, i0.ɵɵresolveDocument);
        } }, decls: 59, vars: 38, consts: [["variant", "compact", "layout", "collection", 3, "eyebrow", "title", "badge", "description"], ["page-actions", ""], ["aria-live", "polite", 1, "applications-feedback"], [1, "erp-notice", "erp-notice--success"], ["role", "alert", 1, "erp-notice", "erp-notice--error"], ["aria-labelledby", "applications-list-title", 1, "erp-card", "erp-table-shell", "applications-directory"], [1, "applications-command-bar"], ["aria-label", "Application status views", 1, "applications-tabs"], ["type", "button", 3, "is-active"], [1, "applications-toolbar__controls"], ["label", "Filters", 3, "filtersChange", "fields", "values"], ["role", "search", 1, "applications-search", 3, "ngSubmit"], [1, "erp-sr-only"], ["lucideSearch", "", "size", "16", "aria-hidden", "true"], ["name", "applicationSearch", "type", "search", "placeholder", "Search by name, ID, programme, session\u2026", 3, "ngModelChange", "ngModel"], ["type", "button", "aria-label", "Clear application search"], [3, "visibleChange", "options", "visible"], ["aria-live", "polite", 1, "erp-selection-toolbar", "applications-selection"], [1, "erp-table-shell__scroll"], ["scope", "col", 1, "applications-select-column"], ["type", "checkbox", "aria-label", "Select all approved applications on this page", 3, "change", "checked", "indeterminate", "disabled"], ["scope", "col"], ["scope", "col", 1, "erp-table-shell__actions"], [1, "erp-pagination", "applications-pagination"], [1, "erp-pagination__pages"], [1, "applications-pagination__label"], [1, "erp-control", "erp-pagination__size", 3, "ngModelChange", "ngModel"], [3, "ngValue"], ["type", "button", "aria-label", "Previous page", 1, "erp-pagination__button", 3, "click", "disabled"], ["lucideChevronLeft", "", "size", "16", "aria-hidden", "true"], ["type", "button", 1, "erp-pagination__button", 3, "erp-pagination__button--active", "disabled"], ["type", "button", "aria-label", "Next page", 1, "erp-pagination__button", 3, "click", "disabled"], ["lucideChevronRight", "", "size", "16", "aria-hidden", "true"], [1, "erp-drawer-layer"], ["eyebrow", "Fee account", "title", "Generate fee accounts?", "confirmLabel", "Generate accounts", 3, "confirmed", "cancelled", "open", "message"], ["eyebrow", "Fee account", "title", "Delete this due?", "confirmLabel", "Delete due", 3, "confirmed", "cancelled", "open", "message", "destructive"], [1, "dialog-layer"], ["routerLink", "/admin/admission/student", 1, "erp-button", "erp-button--primary"], ["lucidePlus", "", "size", "16", "aria-hidden", "true"], ["type", "button", "aria-label", "Dismiss message", 3, "click"], ["lucideX", "", "size", "14", "aria-hidden", "true"], ["type", "button", "aria-label", "Dismiss error", 3, "click"], ["type", "button", 3, "click"], ["type", "button", "aria-label", "Clear application search", 3, "click"], ["type", "button", 1, "erp-button", "erp-button--secondary", "erp-button--compact", 3, "click"], ["type", "button", 1, "erp-button", "erp-button--primary", "erp-button--compact", 3, "click", "disabled"], ["aria-hidden", "true"], [1, "erp-skeleton", "applications-skeleton--check"], [1, "erp-skeleton", "applications-skeleton--action"], [1, "erp-skeleton", "applications-skeleton--reference"], [1, "erp-skeleton", "applications-skeleton--person"], [1, "erp-skeleton", "applications-skeleton--programme"], [1, "erp-skeleton", "applications-skeleton--status"], [1, "erp-skeleton", "applications-skeleton--date"], ["role", "alert", 1, "applications-state"], [1, "erp-empty-panel__icon"], ["lucideCircleAlert", "", "size", "20", "aria-hidden", "true"], ["lucideRefreshCw", "", "size", "15", "aria-hidden", "true"], [3, "erp-is-selected"], [1, "applications-select-column"], ["type", "checkbox", 3, "change", "checked", "disabled"], [1, "applications-reference"], [1, "applications-activity"], [1, "erp-table-shell__actions"], [3, "selected", "items"], ["type", "button", 1, "applications-applicant", 3, "click"], [1, "applications-avatar"], [1, "erp-status"], [1, "applications-state"], ["lucideInbox", "", "size", "20", "aria-hidden", "true"], ["type", "button", 1, "erp-button", "erp-button--secondary", "erp-button--compact"], ["routerLink", "/admin/admission/student", 1, "erp-button", "erp-button--primary", "erp-button--compact"], ["lucidePlus", "", "size", "15", "aria-hidden", "true"], ["type", "button", 1, "erp-pagination__button", 3, "click", "disabled"], ["type", "button", "aria-label", "Close application preview", 1, "erp-drawer-backdrop", 3, "click"], ["role", "dialog", "aria-modal", "true", "aria-labelledby", "application-preview-title", "cdkTrapFocus", "", 1, "erp-drawer", "applications-preview", 3, "cdkTrapFocusAutoCapture"], [1, "erp-drawer__header"], [1, "erp-drawer__icon"], ["lucideUserRound", "", "size", "20", "aria-hidden", "true"], ["id", "application-preview-title"], ["type", "button", "aria-label", "Close application preview", 1, "applications-icon-button", 3, "click"], ["lucideX", "", "size", "17", "aria-hidden", "true"], [1, "erp-drawer__body"], ["aria-label", "Loading application preview", 1, "applications-preview-loading"], [1, "erp-skeleton", "applications-skeleton--title"], [1, "erp-skeleton", "applications-skeleton--block"], [1, "applications-preview-summary"], [1, "applications-preview-section"], [1, "applications-actions-grid"], [1, "erp-button", "erp-button--secondary", "erp-button--compact", 3, "routerLink"], [1, "erp-button", "erp-button--primary", "erp-button--compact", 3, "routerLink"], [1, "applications-facts"], [1, "applications-timeline"], ["type", "button", 1, "erp-button", "erp-button--secondary", "erp-button--compact", 3, "click", "disabled"], [1, "applications-fee-form"], [1, "erp-control", 3, "ngModelChange", "ngModel"], ["value", "year"], ["value", "semester"], [1, "applications-fee-actions"], ["type", "button", 1, "erp-button", "erp-button--danger", "erp-button--compact", 3, "disabled"], ["type", "button", 1, "erp-button", "erp-button--danger", "erp-button--compact", 3, "click", "disabled"], ["type", "button", "aria-label", "Close account setup", 1, "dialog-backdrop", 3, "click"], ["role", "dialog", "aria-modal", "true", "aria-labelledby", "credential-dialog-title", "cdkTrapFocus", "", 1, "dialog", "applications-credential-dialog", 3, "cdkTrapFocusAutoCapture"], [1, "dialog__header"], ["id", "credential-dialog-title"], ["type", "button", "aria-label", "Close account setup", 3, "click"], ["lucideX", "", "size", "16", "aria-hidden", "true"], [1, "dialog__body", "applications-credential-body"], [1, "applications-credential-context"], [1, "applications-credential-grid"], ["value", "student-id"], ["value", "manual"], [1, "dialog__footer"], ["type", "button", 1, "erp-button", "erp-button--secondary", 3, "click", "disabled"], ["type", "button", 1, "erp-button", "erp-button--primary", 3, "click", "disabled"], ["type", "password", "minlength", "8", "autocomplete", "new-password", 1, "erp-control", 3, "ngModelChange", "ngModel"]], template: function AdmissionsComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "erp-admin-page", 0);
            i0.ɵɵconditionalCreate(1, AdmissionsComponent_Conditional_1_Template, 4, 0, "div", 1);
            i0.ɵɵelementStart(2, "div", 2);
            i0.ɵɵconditionalCreate(3, AdmissionsComponent_Conditional_3_Template, 5, 1, "div", 3);
            i0.ɵɵconditionalCreate(4, AdmissionsComponent_Conditional_4_Template, 5, 1, "div", 4);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(5, "section", 5)(6, "header", 6)(7, "nav", 7);
            i0.ɵɵrepeaterCreate(8, AdmissionsComponent_For_9_Template, 5, 5, "button", 8, _forTrack0);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(10, "div", 9)(11, "erp-filter-popover", 10);
            i0.ɵɵlistener("filtersChange", function AdmissionsComponent_Template_erp_filter_popover_filtersChange_11_listener($event) { return ctx.applyAdvancedFilters($event); });
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(12, "form", 11);
            i0.ɵɵlistener("ngSubmit", function AdmissionsComponent_Template_form_ngSubmit_12_listener() { return ctx.searchRecords(); });
            i0.ɵɵelementStart(13, "span", 12);
            i0.ɵɵtext(14, "Search applications");
            i0.ɵɵelementEnd();
            i0.ɵɵnamespaceSVG();
            i0.ɵɵelement(15, "svg", 13);
            i0.ɵɵnamespaceHTML();
            i0.ɵɵelementStart(16, "input", 14);
            i0.ɵɵtwoWayListener("ngModelChange", function AdmissionsComponent_Template_input_ngModelChange_16_listener($event) { i0.ɵɵtwoWayBindingSet(ctx.search, $event) || (ctx.search = $event); return $event; });
            i0.ɵɵelementEnd();
            i0.ɵɵconditionalCreate(17, AdmissionsComponent_Conditional_17_Template, 2, 0, "button", 15);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(18, "erp-column-visibility-popover", 16);
            i0.ɵɵlistener("visibleChange", function AdmissionsComponent_Template_erp_column_visibility_popover_visibleChange_18_listener($event) { return ctx.updateVisibleColumns($event); });
            i0.ɵɵelementEnd()()();
            i0.ɵɵconditionalCreate(19, AdmissionsComponent_Conditional_19_Template, 9, 2, "div", 17);
            i0.ɵɵelementStart(20, "div", 18)(21, "table")(22, "caption", 12);
            i0.ɵɵtext(23);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(24, "thead")(25, "tr")(26, "th", 19)(27, "input", 20);
            i0.ɵɵlistener("change", function AdmissionsComponent_Template_input_change_27_listener($event) { return ctx.togglePage($event.target.checked); });
            i0.ɵɵelementEnd()();
            i0.ɵɵconditionalCreate(28, AdmissionsComponent_Conditional_28_Template, 2, 0, "th", 21);
            i0.ɵɵconditionalCreate(29, AdmissionsComponent_Conditional_29_Template, 2, 0, "th", 21);
            i0.ɵɵconditionalCreate(30, AdmissionsComponent_Conditional_30_Template, 2, 0, "th", 21);
            i0.ɵɵconditionalCreate(31, AdmissionsComponent_Conditional_31_Template, 2, 0, "th", 21);
            i0.ɵɵconditionalCreate(32, AdmissionsComponent_Conditional_32_Template, 2, 0, "th", 21);
            i0.ɵɵelementStart(33, "th", 22);
            i0.ɵɵtext(34, "Actions");
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(35, "tbody");
            i0.ɵɵconditionalCreate(36, AdmissionsComponent_Conditional_36_Template, 2, 1)(37, AdmissionsComponent_Conditional_37_Template, 12, 2, "tr")(38, AdmissionsComponent_Conditional_38_Template, 3, 1);
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(39, "footer", 23)(40, "span");
            i0.ɵɵtext(41);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(42, "div", 24)(43, "label")(44, "span", 25);
            i0.ɵɵtext(45, "Rows per page");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(46, "select", 26);
            i0.ɵɵlistener("ngModelChange", function AdmissionsComponent_Template_select_ngModelChange_46_listener($event) { return ctx.changePageSize($event); });
            i0.ɵɵrepeaterCreate(47, AdmissionsComponent_For_48_Template, 2, 2, "option", 27, i0.ɵɵrepeaterTrackByIdentity);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(49, "button", 28);
            i0.ɵɵlistener("click", function AdmissionsComponent_Template_button_click_49_listener() { return ctx.changePage(ctx.page - 1); });
            i0.ɵɵnamespaceSVG();
            i0.ɵɵelement(50, "svg", 29);
            i0.ɵɵelementEnd();
            i0.ɵɵrepeaterCreate(51, AdmissionsComponent_For_52_Template, 2, 6, "button", 30, i0.ɵɵrepeaterTrackByIdentity);
            i0.ɵɵnamespaceHTML();
            i0.ɵɵelementStart(53, "button", 31);
            i0.ɵɵlistener("click", function AdmissionsComponent_Template_button_click_53_listener() { return ctx.changePage(ctx.page + 1); });
            i0.ɵɵnamespaceSVG();
            i0.ɵɵelement(54, "svg", 32);
            i0.ɵɵelementEnd()()()()();
            i0.ɵɵconditionalCreate(55, AdmissionsComponent_Conditional_55_Template, 19, 4, "div", 33);
            i0.ɵɵnamespaceHTML();
            i0.ɵɵelementStart(56, "erp-confirm-dialog", 34);
            i0.ɵɵlistener("confirmed", function AdmissionsComponent_Template_erp_confirm_dialog_confirmed_56_listener() { return ctx.confirmFeeGeneration(); })("cancelled", function AdmissionsComponent_Template_erp_confirm_dialog_cancelled_56_listener() { return ctx.feeGenerationIds.set([]); });
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(57, "erp-confirm-dialog", 35);
            i0.ɵɵlistener("confirmed", function AdmissionsComponent_Template_erp_confirm_dialog_confirmed_57_listener() { return ctx.confirmFeeDeletion(); })("cancelled", function AdmissionsComponent_Template_erp_confirm_dialog_cancelled_57_listener() { return ctx.feeDeleteStudent.set(null); });
            i0.ɵɵelementEnd();
            i0.ɵɵconditionalCreate(58, AdmissionsComponent_Conditional_58_Template, 35, 9, "div", 36);
        } if (rf & 2) {
            let tmp_36_0;
            let tmp_38_0;
            i0.ɵɵproperty("eyebrow", ctx.databaseMode() ? "Database" : "Admissions")("title", ctx.databaseMode() ? "Active students" : ctx.activeView().pageTitle)("badge", ctx.total())("description", ctx.databaseMode() ? "Search and manage approved active student records." : ctx.activeView().description);
            i0.ɵɵadvance();
            i0.ɵɵconditional(!ctx.databaseMode() ? 1 : -1);
            i0.ɵɵadvance(2);
            i0.ɵɵconditional(ctx.message() ? 3 : -1);
            i0.ɵɵadvance();
            i0.ɵɵconditional(ctx.actionError() ? 4 : -1);
            i0.ɵɵadvance(4);
            i0.ɵɵrepeater(ctx.savedViews);
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("fields", ctx.filterFields())("values", ctx.appliedFilters());
            i0.ɵɵadvance(5);
            i0.ɵɵtwoWayProperty("ngModel", ctx.search);
            i0.ɵɵadvance();
            i0.ɵɵconditional(ctx.search ? 17 : -1);
            i0.ɵɵadvance();
            i0.ɵɵproperty("options", ctx.tableColumns)("visible", ctx.visibleColumns());
            i0.ɵɵadvance();
            i0.ɵɵconditional(ctx.selectedStudentIds().size ? 19 : -1);
            i0.ɵɵadvance(2);
            i0.ɵɵattribute("aria-busy", ctx.loading());
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate1(" ", ctx.activeView().pageTitle, " records ");
            i0.ɵɵadvance(4);
            i0.ɵɵproperty("checked", ctx.allEligibleSelected())("indeterminate", ctx.someEligibleSelected())("disabled", !ctx.eligibleOnPage().length || ctx.loading());
            i0.ɵɵadvance();
            i0.ɵɵconditional(ctx.columnVisible("application") ? 28 : -1);
            i0.ɵɵadvance();
            i0.ɵɵconditional(ctx.columnVisible("applicant") ? 29 : -1);
            i0.ɵɵadvance();
            i0.ɵɵconditional(ctx.columnVisible("programme") ? 30 : -1);
            i0.ɵɵadvance();
            i0.ɵɵconditional(ctx.columnVisible("stage") ? 31 : -1);
            i0.ɵɵadvance();
            i0.ɵɵconditional(ctx.columnVisible("activity") ? 32 : -1);
            i0.ɵɵadvance(4);
            i0.ɵɵconditional(ctx.loading() ? 36 : ctx.listError() ? 37 : 38);
            i0.ɵɵadvance(5);
            i0.ɵɵtextInterpolate3("Showing ", ctx.firstResult(), "\u2013", ctx.lastResult(), " of ", ctx.total(), " results");
            i0.ɵɵadvance(5);
            i0.ɵɵproperty("ngModel", ctx.pageSize);
            i0.ɵɵadvance();
            i0.ɵɵrepeater(ctx.pageSizeOptions);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("disabled", ctx.page <= 1 || ctx.loading());
            i0.ɵɵadvance(2);
            i0.ɵɵrepeater(ctx.pageNumbers());
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("disabled", ctx.page >= ctx.pages() || ctx.loading());
            i0.ɵɵadvance(2);
            i0.ɵɵconditional(ctx.previewOpen() ? 55 : -1);
            i0.ɵɵadvance();
            i0.ɵɵproperty("open", ctx.feeGenerationIds().length > 0)("message", ctx.feeGenerationMessage());
            i0.ɵɵadvance();
            i0.ɵɵproperty("open", !!ctx.feeDeleteStudent())("message", "This removes every active fee due for " + (((tmp_36_0 = ctx.feeDeleteStudent()) == null ? null : tmp_36_0.studentName) || ((tmp_36_0 = ctx.feeDeleteStudent()) == null ? null : tmp_36_0.studentId) || "this student") + ". This action cannot be undone.")("destructive", true);
            i0.ɵɵadvance();
            i0.ɵɵconditional((tmp_38_0 = ctx.credentialStudent()) ? 58 : -1, tmp_38_0);
        } }, dependencies: [AdminPageComponent,
            CdkTrapFocus,
            ColumnVisibilityPopoverComponent,
            CompactActionMenuComponent,
            ConfirmDialogComponent,
            FilterPopoverComponent,
            FormsModule, i1.ɵNgNoValidate, i1.NgSelectOption, i1.ɵNgSelectMultipleOption, i1.DefaultValueAccessor, i1.SelectControlValueAccessor, i1.NgControlStatus, i1.NgControlStatusGroup, i1.MinLengthValidator, i1.NgModel, i1.NgForm, LucideChevronLeft,
            LucideChevronRight,
            LucideCircleAlert,
            LucideInbox,
            LucidePlus,
            LucideRefreshCw,
            LucideSearch,
            LucideUserRound,
            LucideX,
            RouterLink], styles: ["\n[_nghost-%COMP%] {\n  display: block;\n}\n\n.applications-feedback[_ngcontent-%COMP%]:empty {\n  display: none;\n}\n\n.applications-feedback[_ngcontent-%COMP%]   .erp-notice[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: var(--erp-space-3);\n}\n\n.applications-feedback[_ngcontent-%COMP%]   .erp-notice[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  display: inline-grid;\n  width: var(--erp-space-6);\n  height: var(--erp-space-6);\n  flex: 0 0 auto;\n  padding: 0;\n  place-items: center;\n  color: inherit;\n  background: transparent;\n  border: 0;\n  border-radius: var(--erp-radius-control);\n  cursor: pointer;\n}\n\n.applications-directory[_ngcontent-%COMP%] {\n  overflow: visible;\n}\n\n.applications-command-bar[_ngcontent-%COMP%] {\n  display: flex;\n  min-height: var(--erp-space-12);\n  align-items: center;\n  justify-content: space-between;\n  gap: var(--erp-space-3);\n  padding: var(--erp-space-2) var(--erp-space-3);\n  border-bottom: 1px solid var(--erp-border-default);\n}\n\n.applications-tabs[_ngcontent-%COMP%] {\n  display: flex;\n  min-width: 0;\n  align-items: center;\n  gap: var(--erp-space-2);\n  overflow-x: auto;\n  scrollbar-width: none;\n}\n\n.applications-tabs[_ngcontent-%COMP%]::-webkit-scrollbar {\n  display: none;\n}\n\n.applications-tabs[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  display: inline-flex;\n  min-height: var(--erp-control-height-compact);\n  flex: 0 0 auto;\n  align-items: center;\n  gap: var(--erp-space-2);\n  padding: 0 var(--erp-space-3);\n  color: var(--erp-text-body);\n  background: var(--erp-surface-raised);\n  border: 1px solid var(--erp-border-default);\n  border-radius: var(--erp-radius-control);\n  font-size: var(--erp-font-size-xs);\n  font-weight: var(--erp-weight-medium);\n  transition: var(--erp-standard-transition);\n}\n\n.applications-tabs[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  color: var(--erp-blue-700);\n  background: var(--erp-blue-50);\n  border-color: var(--erp-blue-200);\n}\n\n.applications-tabs[_ngcontent-%COMP%]   button.is-active[_ngcontent-%COMP%] {\n  color: var(--erp-blue-700);\n  background: var(--erp-blue-50);\n  border-color: var(--erp-blue-500);\n  box-shadow: inset 0 0 0 1px var(--erp-blue-100);\n}\n\n.applications-tabs[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  display: inline-grid;\n  min-width: var(--erp-space-7);\n  min-height: var(--erp-space-5);\n  padding-inline: var(--erp-space-1);\n  place-items: center;\n  color: var(--erp-blue-700);\n  background: var(--erp-blue-100);\n  border-radius: var(--erp-radius-pill);\n  font-size: var(--erp-font-size-2xs);\n  font-variant-numeric: tabular-nums;\n}\n\n.applications-toolbar__controls[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: var(--erp-space-2);\n  flex-wrap: wrap;\n  justify-content: flex-end;\n}\n\n.applications-search[_ngcontent-%COMP%] {\n  display: flex;\n  width: min(26rem, 33vw);\n  min-height: var(--erp-control-height-compact);\n  align-items: center;\n  gap: var(--erp-space-2);\n  padding: 0 var(--erp-space-3);\n  color: var(--erp-text-muted);\n  background: var(--erp-input-bg);\n  border: 1px solid var(--erp-input-border);\n  border-radius: var(--erp-radius-control);\n  transition: var(--erp-standard-transition);\n}\n\n.applications-search[_ngcontent-%COMP%]:focus-within {\n  border-color: var(--erp-input-focus-border);\n  box-shadow: 0 0 0 var(--erp-space-1) var(--erp-focus-ring);\n}\n\n.applications-search[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  min-width: 0;\n  flex: 1;\n  padding: 0;\n  color: var(--erp-text-heading);\n  background: transparent;\n  border: 0;\n  outline: 0;\n  font-size: var(--erp-font-label);\n}\n\n.applications-search[_ngcontent-%COMP%]    > button[_ngcontent-%COMP%], \n.applications-icon-button[_ngcontent-%COMP%] {\n  display: inline-grid;\n  width: var(--erp-control-height-compact);\n  height: var(--erp-control-height-compact);\n  flex: 0 0 auto;\n  padding: 0;\n  place-items: center;\n  color: var(--erp-text-muted);\n  background: transparent;\n  border: 0;\n  border-radius: var(--erp-radius-control);\n  cursor: pointer;\n}\n\n.applications-search[_ngcontent-%COMP%]    > button[_ngcontent-%COMP%] {\n  width: var(--erp-space-6);\n  height: var(--erp-space-6);\n}\n\n.applications-search[_ngcontent-%COMP%]    > button[_ngcontent-%COMP%]:hover, \n.applications-icon-button[_ngcontent-%COMP%]:hover {\n  color: var(--erp-text-heading);\n  background: var(--erp-surface-hover);\n}\n\n.applications-selection[_ngcontent-%COMP%] {\n  margin: var(--erp-space-3) var(--erp-space-5);\n}\n\n.applications-selection[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  min-width: 0;\n  flex: 1;\n  color: var(--erp-text-muted);\n  font-size: var(--erp-font-caption);\n}\n\n.applications-directory[_ngcontent-%COMP%]   table[_ngcontent-%COMP%] {\n  min-width: 64rem;\n}\n\n.applications-select-column[_ngcontent-%COMP%] {\n  width: var(--erp-space-12);\n  padding-right: 0 !important;\n  text-align: center !important;\n}\n\n.applications-select-column[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: var(--erp-space-4);\n  height: var(--erp-space-4);\n  accent-color: var(--erp-blue-600);\n}\n\n.applications-select-column[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:disabled {\n  opacity: 0.36;\n}\n\n.applications-reference[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%], \n.applications-activity[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  font-variant-numeric: tabular-nums;\n}\n\n.applications-applicant[_ngcontent-%COMP%] {\n  display: grid;\n  min-width: 0;\n  grid-template-columns: auto minmax(0, 1fr);\n  align-items: center;\n  gap: var(--erp-space-3);\n  padding: 0;\n  color: inherit;\n  text-align: left;\n  background: transparent;\n  border: 0;\n  cursor: pointer;\n}\n\n.applications-applicant[_ngcontent-%COMP%]:hover   strong[_ngcontent-%COMP%] {\n  color: var(--erp-blue-700);\n  text-decoration: underline;\n  text-underline-offset: var(--erp-space-1);\n}\n\n.applications-avatar[_ngcontent-%COMP%] {\n  display: inline-grid;\n  width: var(--erp-control-height-compact);\n  height: var(--erp-control-height-compact);\n  place-items: center;\n  color: var(--erp-blue-700);\n  background: var(--erp-blue-50);\n  border: 1px solid var(--erp-border-default);\n  border-radius: var(--erp-radius-avatar);\n  font-size: var(--erp-font-size-xs);\n  font-weight: var(--erp-weight-bold);\n}\n\n.applications-state[_ngcontent-%COMP%] {\n  display: grid;\n  min-height: var(--erp-state-panel-min-height);\n  place-items: center;\n  align-content: center;\n  gap: var(--erp-space-2);\n  padding: var(--erp-space-8);\n  color: var(--erp-text-muted);\n  text-align: center;\n}\n\n.applications-state[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], \n.applications-state[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n}\n\n.applications-state[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  color: var(--erp-text-heading);\n  font-size: var(--erp-font-label);\n}\n\n.applications-state[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  max-width: 28rem;\n  font-size: var(--erp-font-caption);\n}\n\n.applications-skeleton--check[_ngcontent-%COMP%], \n.applications-skeleton--action[_ngcontent-%COMP%] {\n  width: var(--erp-space-5);\n}\n\n.applications-skeleton--reference[_ngcontent-%COMP%], \n.applications-skeleton--status[_ngcontent-%COMP%] {\n  width: 55%;\n}\n\n.applications-skeleton--person[_ngcontent-%COMP%], \n.applications-skeleton--programme[_ngcontent-%COMP%], \n.applications-skeleton--date[_ngcontent-%COMP%] {\n  width: 76%;\n}\n\n.applications-skeleton--title[_ngcontent-%COMP%] {\n  width: 42%;\n}\n\n.applications-skeleton--block[_ngcontent-%COMP%] {\n  min-height: calc(var(--erp-space-12) * 2);\n}\n\n.applications-pagination[_ngcontent-%COMP%] {\n  padding: var(--erp-space-2) var(--erp-space-5);\n  font-size: var(--erp-font-caption);\n}\n\n.applications-pagination__label[_ngcontent-%COMP%] {\n  margin-right: var(--erp-space-2);\n  font-size: var(--erp-font-caption);\n}\n\n.applications-preview[_ngcontent-%COMP%] {\n  width: min(var(--erp-modal-width), 100%);\n}\n\n.applications-preview-summary[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: var(--erp-space-3);\n  color: var(--erp-text-muted);\n  font-size: var(--erp-font-caption);\n}\n\n.applications-preview-loading[_ngcontent-%COMP%] {\n  display: grid;\n  gap: var(--erp-space-4);\n}\n\n.applications-preview-section[_ngcontent-%COMP%] {\n  overflow: hidden;\n  background: var(--erp-surface-overlay);\n  border: 1px solid var(--erp-border-subtle);\n  border-radius: var(--erp-radius-compact);\n}\n\n.applications-preview-section[_ngcontent-%COMP%]    > header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  gap: var(--erp-space-3);\n  padding: var(--erp-space-3) var(--erp-space-4);\n  background: var(--erp-surface-detail-soft);\n  border-bottom: 1px solid var(--erp-border-subtle);\n}\n\n.applications-preview-section[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], \n.applications-preview-section[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n}\n\n.applications-preview-section[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  color: var(--erp-text-heading);\n  font-size: var(--erp-font-label);\n}\n\n.applications-preview-section[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin-top: var(--erp-space-1);\n  color: var(--erp-text-muted);\n  font-size: var(--erp-font-size-xs);\n}\n\n.applications-actions-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n  gap: var(--erp-space-2);\n  padding: var(--erp-space-4);\n}\n\n.applications-facts[_ngcontent-%COMP%], \n.applications-timeline[_ngcontent-%COMP%] {\n  display: grid;\n  margin: 0;\n}\n\n.applications-facts[_ngcontent-%COMP%] {\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n  padding: var(--erp-space-2) var(--erp-space-4);\n}\n\n.applications-facts[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%], \n.applications-timeline[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  padding: var(--erp-space-3) 0;\n  border-bottom: 1px solid var(--erp-border-subtle);\n}\n\n.applications-facts[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:nth-last-child(-n + 2), \n.applications-timeline[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:last-child {\n  border-bottom: 0;\n}\n\n.applications-facts[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:nth-child(odd) {\n  padding-right: var(--erp-space-4);\n}\n\n.applications-facts[_ngcontent-%COMP%]   dt[_ngcontent-%COMP%], \n.applications-timeline[_ngcontent-%COMP%]   dt[_ngcontent-%COMP%] {\n  color: var(--erp-text-muted);\n  font-size: var(--erp-font-size-xs);\n}\n\n.applications-facts[_ngcontent-%COMP%]   dd[_ngcontent-%COMP%], \n.applications-timeline[_ngcontent-%COMP%]   dd[_ngcontent-%COMP%] {\n  margin: var(--erp-space-1) 0 0;\n  color: var(--erp-text-heading);\n  font-size: var(--erp-font-label);\n  font-weight: var(--erp-weight-semibold);\n}\n\n.applications-timeline[_ngcontent-%COMP%] {\n  padding: 0 var(--erp-space-4);\n}\n\n.applications-timeline[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: minmax(0, 1fr) auto;\n  align-items: baseline;\n  gap: var(--erp-space-3);\n}\n\n.applications-fee-form[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n  gap: var(--erp-space-3);\n  padding: var(--erp-space-4);\n}\n\n.applications-fee-form[_ngcontent-%COMP%]   label[_ngcontent-%COMP%], \n.applications-credential-grid[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: grid;\n  gap: var(--erp-space-1);\n  color: var(--erp-text-muted);\n  font-size: var(--erp-font-size-xs);\n  font-weight: var(--erp-weight-semibold);\n}\n\n.applications-fee-form[_ngcontent-%COMP%]   .erp-control[_ngcontent-%COMP%], \n.applications-credential-grid[_ngcontent-%COMP%]   .erp-control[_ngcontent-%COMP%] {\n  min-height: var(--erp-control-height-compact);\n  font-size: var(--erp-font-label);\n}\n\n.applications-fee-actions[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: flex-end;\n  gap: var(--erp-space-2);\n  padding: 0 var(--erp-space-4) var(--erp-space-4);\n}\n\n.applications-credential-dialog[_ngcontent-%COMP%] {\n  width: min(var(--erp-modal-width), 100%);\n}\n\n.applications-credential-body[_ngcontent-%COMP%] {\n  display: grid;\n  gap: var(--erp-space-4);\n}\n\n.applications-credential-body[_ngcontent-%COMP%]    > p[_ngcontent-%COMP%] {\n  margin: 0;\n  color: var(--erp-text-muted);\n  font-size: var(--erp-font-caption);\n}\n\n.applications-credential-context[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: var(--erp-space-3);\n  padding: var(--erp-space-3);\n  color: var(--erp-text-heading);\n  background: var(--erp-blue-50);\n  border-radius: var(--erp-radius-control);\n  font-size: var(--erp-font-label);\n}\n\n.applications-credential-context[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: var(--erp-text-muted);\n  font-size: var(--erp-font-caption);\n}\n\n.applications-credential-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n  gap: var(--erp-space-3);\n}\n\n@media (max-width: 72rem) {\n  .applications-command-bar[_ngcontent-%COMP%] {\n    align-items: stretch;\n    flex-direction: column;\n  }\n\n  .applications-toolbar__controls[_ngcontent-%COMP%], \n   .applications-search[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n\n  .applications-toolbar__controls[_ngcontent-%COMP%] {\n    justify-content: flex-start;\n  }\n}\n\n@media (max-width: 48rem) {\n  .applications-toolbar__controls[_ngcontent-%COMP%], \n   .applications-selection[_ngcontent-%COMP%] {\n    align-items: stretch;\n    flex-wrap: wrap;\n  }\n\n  .applications-search[_ngcontent-%COMP%], \n   .applications-selection[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n    flex-basis: 100%;\n  }\n\n  .applications-command-bar[_ngcontent-%COMP%] {\n    padding-inline: var(--erp-space-2);\n  }\n\n  .applications-tabs[_ngcontent-%COMP%] {\n    margin-inline: calc(var(--erp-space-2) * -1);\n    padding-inline: var(--erp-space-2);\n  }\n\n  .applications-pagination__label[_ngcontent-%COMP%] {\n    display: none;\n  }\n\n  .applications-pagination[_ngcontent-%COMP%] {\n    align-items: flex-start;\n    flex-direction: column;\n  }\n\n  .applications-actions-grid[_ngcontent-%COMP%], \n   .applications-facts[_ngcontent-%COMP%], \n   .applications-fee-form[_ngcontent-%COMP%], \n   .applications-credential-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n\n  .applications-facts[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:nth-last-child(2) {\n    border-bottom: 1px solid var(--erp-border-subtle);\n  }\n\n  .applications-facts[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:nth-child(odd) {\n    padding-right: 0;\n  }\n}"], changeDetection: 0 });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AdmissionsComponent, [{
        type: Component,
        args: [{ selector: 'erp-admissions', imports: [
                    AdminPageComponent,
                    CdkTrapFocus,
                    ColumnVisibilityPopoverComponent,
                    CompactActionMenuComponent,
                    ConfirmDialogComponent,
                    FilterPopoverComponent,
                    FormsModule,
                    LucideChevronLeft,
                    LucideChevronRight,
                    LucideCircleAlert,
                    LucideInbox,
                    LucidePlus,
                    LucideRefreshCw,
                    LucideSearch,
                    LucideUserRound,
                    LucideX,
                    RouterLink,
                ], changeDetection: ChangeDetectionStrategy.OnPush, template: "<erp-admin-page\n  [eyebrow]=\"databaseMode() ? 'Database' : 'Admissions'\"\n  [title]=\"databaseMode() ? 'Active students' : activeView().pageTitle\"\n  [badge]=\"total()\"\n  [description]=\"\n    databaseMode()\n      ? 'Search and manage approved active student records.'\n      : activeView().description\n  \"\n  variant=\"compact\"\n  layout=\"collection\"\n>\n  @if (!databaseMode()) {\n    <div page-actions>\n      <a class=\"erp-button erp-button--primary\" routerLink=\"/admin/admission/student\">\n        <svg lucidePlus size=\"16\" aria-hidden=\"true\"></svg>\n        New application\n      </a>\n    </div>\n  }\n\n  <div class=\"applications-feedback\" aria-live=\"polite\">\n    @if (message()) {\n      <div class=\"erp-notice erp-notice--success\">\n        <span>{{ message() }}</span>\n        <button type=\"button\" aria-label=\"Dismiss message\" (click)=\"message.set('')\">\n          <svg lucideX size=\"14\" aria-hidden=\"true\"></svg>\n        </button>\n      </div>\n    }\n    @if (actionError()) {\n      <div class=\"erp-notice erp-notice--error\" role=\"alert\">\n        <span>{{ actionError() }}</span>\n        <button type=\"button\" aria-label=\"Dismiss error\" (click)=\"actionError.set('')\">\n          <svg lucideX size=\"14\" aria-hidden=\"true\"></svg>\n        </button>\n      </div>\n    }\n  </div>\n\n  <section\n    class=\"erp-card erp-table-shell applications-directory\"\n    aria-labelledby=\"applications-list-title\"\n  >\n    <header class=\"applications-command-bar\">\n      <nav class=\"applications-tabs\" aria-label=\"Application status views\">\n        @for (savedView of savedViews; track savedView.id) {\n          <button\n            type=\"button\"\n            [class.is-active]=\"view() === savedView.id\"\n            [attr.aria-current]=\"view() === savedView.id ? 'page' : null\"\n            (click)=\"setView(savedView.id)\"\n          >\n            <span>{{ savedView.tabLabel }}</span>\n            <small>{{ viewTotal(savedView.id) }}</small>\n          </button>\n        }\n      </nav>\n      <div class=\"applications-toolbar__controls\">\n        <erp-filter-popover\n          label=\"Filters\"\n          [fields]=\"filterFields()\"\n          [values]=\"appliedFilters()\"\n          (filtersChange)=\"applyAdvancedFilters($event)\"\n        />\n        <form class=\"applications-search\" role=\"search\" (ngSubmit)=\"searchRecords()\">\n          <span class=\"erp-sr-only\">Search applications</span>\n          <svg lucideSearch size=\"16\" aria-hidden=\"true\"></svg>\n          <input\n            name=\"applicationSearch\"\n            type=\"search\"\n            [(ngModel)]=\"search\"\n            placeholder=\"Search by name, ID, programme, session\u2026\"\n          />\n          @if (search) {\n            <button type=\"button\" aria-label=\"Clear application search\" (click)=\"clearSearch()\">\n              <svg lucideX size=\"14\" aria-hidden=\"true\"></svg>\n            </button>\n          }\n        </form>\n        <erp-column-visibility-popover\n          [options]=\"tableColumns\"\n          [visible]=\"visibleColumns()\"\n          (visibleChange)=\"updateVisibleColumns($event)\"\n        />\n      </div>\n    </header>\n\n    @if (selectedStudentIds().size) {\n      <div class=\"erp-selection-toolbar applications-selection\" aria-live=\"polite\">\n        <strong>{{ selectedStudentIds().size }} selected on this page</strong>\n        <span>Only approved applications are eligible for fee-account generation.</span>\n        <button\n          class=\"erp-button erp-button--secondary erp-button--compact\"\n          type=\"button\"\n          (click)=\"clearSelection()\"\n        >\n          Clear\n        </button>\n        <button\n          class=\"erp-button erp-button--primary erp-button--compact\"\n          type=\"button\"\n          [disabled]=\"feeSaving()\"\n          (click)=\"requestSelectedFeeGeneration()\"\n        >\n          Generate fee accounts\n        </button>\n      </div>\n    }\n\n    <div class=\"erp-table-shell__scroll\">\n      <table [attr.aria-busy]=\"loading()\">\n        <caption class=\"erp-sr-only\">\n          {{ activeView().pageTitle }} records\n        </caption>\n        <thead>\n          <tr>\n            <th class=\"applications-select-column\" scope=\"col\">\n              <input\n                type=\"checkbox\"\n                [checked]=\"allEligibleSelected()\"\n                [indeterminate]=\"someEligibleSelected()\"\n                [disabled]=\"!eligibleOnPage().length || loading()\"\n                aria-label=\"Select all approved applications on this page\"\n                (change)=\"togglePage($any($event.target).checked)\"\n              />\n            </th>\n            @if (columnVisible('application')) {\n              <th scope=\"col\">Application ID</th>\n            }\n            @if (columnVisible('applicant')) {\n              <th scope=\"col\">Applicant</th>\n            }\n            @if (columnVisible('programme')) {\n              <th scope=\"col\">Programme &amp; intake</th>\n            }\n            @if (columnVisible('stage')) {\n              <th scope=\"col\">Stage</th>\n            }\n            @if (columnVisible('activity')) {\n              <th scope=\"col\">Last activity</th>\n            }\n            <th class=\"erp-table-shell__actions\" scope=\"col\">Actions</th>\n          </tr>\n        </thead>\n        <tbody>\n          @if (loading()) {\n            @for (row of [1, 2, 3, 4, 5, 6]; track row) {\n              <tr aria-hidden=\"true\">\n                <td><span class=\"erp-skeleton applications-skeleton--check\"></span></td>\n                @if (columnVisible('application')) {\n                  <td><span class=\"erp-skeleton applications-skeleton--reference\"></span></td>\n                }\n                @if (columnVisible('applicant')) {\n                  <td><span class=\"erp-skeleton applications-skeleton--person\"></span></td>\n                }\n                @if (columnVisible('programme')) {\n                  <td><span class=\"erp-skeleton applications-skeleton--programme\"></span></td>\n                }\n                @if (columnVisible('stage')) {\n                  <td><span class=\"erp-skeleton applications-skeleton--status\"></span></td>\n                }\n                @if (columnVisible('activity')) {\n                  <td><span class=\"erp-skeleton applications-skeleton--date\"></span></td>\n                }\n                <td><span class=\"erp-skeleton applications-skeleton--action\"></span></td>\n              </tr>\n            }\n          } @else if (listError()) {\n            <tr>\n              <td [attr.colspan]=\"visibleTableColumnCount()\">\n                <div class=\"applications-state\" role=\"alert\">\n                  <span class=\"erp-empty-panel__icon\"\n                    ><svg lucideCircleAlert size=\"20\" aria-hidden=\"true\"></svg\n                  ></span>\n                  <h3>Applications could not be loaded</h3>\n                  <p>{{ listError() }}</p>\n                  <button\n                    class=\"erp-button erp-button--secondary erp-button--compact\"\n                    type=\"button\"\n                    (click)=\"load()\"\n                  >\n                    <svg lucideRefreshCw size=\"15\" aria-hidden=\"true\"></svg>\n                    Try again\n                  </button>\n                </div>\n              </td>\n            </tr>\n          } @else {\n            @for (item of items(); track item._id) {\n              <tr [class.erp-is-selected]=\"isSelected(item)\">\n                <td class=\"applications-select-column\">\n                  <input\n                    type=\"checkbox\"\n                    [checked]=\"isSelected(item)\"\n                    [disabled]=\"!bulkEligible(item)\"\n                    [attr.aria-label]=\"\n                      bulkEligible(item)\n                        ? 'Select ' + (item.studentName || reference(item))\n                        : 'Bulk actions are unavailable for ' +\n                          (item.studentName || reference(item))\n                    \"\n                    (change)=\"toggleStudent(item, $any($event.target).checked)\"\n                  />\n                </td>\n                @if (columnVisible('application')) {\n                  <td class=\"applications-reference\">\n                    <strong>{{ reference(item) }}</strong>\n                    <small>{{ item.studentId ? 'Student ID assigned' : 'Reference' }}</small>\n                  </td>\n                }\n                @if (columnVisible('applicant')) {\n                  <td>\n                    <button\n                      class=\"applications-applicant\"\n                      type=\"button\"\n                      (click)=\"openPreview(item, $event)\"\n                    >\n                      <span class=\"applications-avatar\">{{ initials(item) }}</span>\n                      <span>\n                        <strong>{{ item.studentName || 'Unnamed application' }}</strong>\n                        <small>{{ item.studentTypeName || item.countryName || 'Applicant' }}</small>\n                      </span>\n                    </button>\n                  </td>\n                }\n                @if (columnVisible('programme')) {\n                  <td>\n                    <strong>{{ item.courseName || 'Programme not selected' }}</strong>\n                    <small>{{ item.academicSession || 'Academic session pending' }}</small>\n                  </td>\n                }\n                @if (columnVisible('stage')) {\n                  <td>\n                    <span\n                      class=\"erp-status\"\n                      [class.erp-status--draft]=\"item.status === 'draft'\"\n                      [class.erp-status--warning]=\"\n                        item.status === 'pending_approval' || item.status === 'submitted'\n                      \"\n                      >{{ statusLabel(item) }}</span\n                    >\n                  </td>\n                }\n                @if (columnVisible('activity')) {\n                  <td class=\"applications-activity\">\n                    <strong>{{ activityLabel(item) }}</strong>\n                    <small>{{\n                      item.approvedAt ? 'Approved' : item.submittedAt ? 'Submitted' : 'Created'\n                    }}</small>\n                  </td>\n                }\n                <td class=\"erp-table-shell__actions\">\n                  <erp-compact-action-menu\n                    [items]=\"rowActions(item)\"\n                    (selected)=\"handleRowAction($event, item)\"\n                  />\n                </td>\n              </tr>\n            } @empty {\n              <tr>\n                <td [attr.colspan]=\"visibleTableColumnCount()\">\n                  <div class=\"applications-state\">\n                    <span class=\"erp-empty-panel__icon\"\n                      ><svg lucideInbox size=\"20\" aria-hidden=\"true\"></svg\n                    ></span>\n                    <h3>{{ emptyTitle() }}</h3>\n                    <p>{{ emptyDescription() }}</p>\n                    @if (appliedSearch() || view() !== 'all') {\n                      <button\n                        class=\"erp-button erp-button--secondary erp-button--compact\"\n                        type=\"button\"\n                        (click)=\"resetFilters()\"\n                      >\n                        Show all applications\n                      </button>\n                    } @else {\n                      <a\n                        class=\"erp-button erp-button--primary erp-button--compact\"\n                        routerLink=\"/admin/admission/student\"\n                      >\n                        <svg lucidePlus size=\"15\" aria-hidden=\"true\"></svg>\n                        New application\n                      </a>\n                    }\n                  </div>\n                </td>\n              </tr>\n            }\n          }\n        </tbody>\n      </table>\n    </div>\n\n    <footer class=\"erp-pagination applications-pagination\">\n      <span>Showing {{ firstResult() }}\u2013{{ lastResult() }} of {{ total() }} results</span>\n      <div class=\"erp-pagination__pages\">\n        <label>\n          <span class=\"applications-pagination__label\">Rows per page</span>\n          <select\n            class=\"erp-control erp-pagination__size\"\n            [ngModel]=\"pageSize\"\n            (ngModelChange)=\"changePageSize($event)\"\n          >\n            @for (option of pageSizeOptions; track option) {\n              <option [ngValue]=\"option\">{{ option }} / page</option>\n            }\n          </select>\n        </label>\n        <button\n          class=\"erp-pagination__button\"\n          type=\"button\"\n          aria-label=\"Previous page\"\n          [disabled]=\"page <= 1 || loading()\"\n          (click)=\"changePage(page - 1)\"\n        >\n          <svg lucideChevronLeft size=\"16\" aria-hidden=\"true\"></svg>\n        </button>\n        @for (pageNumber of pageNumbers(); track pageNumber) {\n          <button\n            class=\"erp-pagination__button\"\n            [class.erp-pagination__button--active]=\"pageNumber === page\"\n            type=\"button\"\n            [attr.aria-label]=\"'Page ' + pageNumber\"\n            [attr.aria-current]=\"pageNumber === page ? 'page' : null\"\n            [disabled]=\"loading()\"\n            (click)=\"changePage(pageNumber)\"\n          >\n            {{ pageNumber }}\n          </button>\n        }\n        <button\n          class=\"erp-pagination__button\"\n          type=\"button\"\n          aria-label=\"Next page\"\n          [disabled]=\"page >= pages() || loading()\"\n          (click)=\"changePage(page + 1)\"\n        >\n          <svg lucideChevronRight size=\"16\" aria-hidden=\"true\"></svg>\n        </button>\n      </div>\n    </footer>\n  </section>\n</erp-admin-page>\n\n@if (previewOpen()) {\n  <div class=\"erp-drawer-layer\">\n    <button\n      class=\"erp-drawer-backdrop\"\n      type=\"button\"\n      aria-label=\"Close application preview\"\n      (click)=\"closePreview()\"\n    ></button>\n    <section\n      class=\"erp-drawer applications-preview\"\n      role=\"dialog\"\n      aria-modal=\"true\"\n      aria-labelledby=\"application-preview-title\"\n      cdkTrapFocus\n      [cdkTrapFocusAutoCapture]=\"true\"\n    >\n      <header class=\"erp-drawer__header\">\n        <span class=\"erp-drawer__icon\"\n          ><svg lucideUserRound size=\"20\" aria-hidden=\"true\"></svg\n        ></span>\n        <div>\n          <small>Quick preview</small>\n          <h2 id=\"application-preview-title\">{{ preview()?.studentName || 'Application' }}</h2>\n          <p>{{ preview() ? reference(preview()!) : 'Loading the application record\u2026' }}</p>\n        </div>\n        <button\n          class=\"applications-icon-button\"\n          type=\"button\"\n          aria-label=\"Close application preview\"\n          (click)=\"closePreview()\"\n        >\n          <svg lucideX size=\"17\" aria-hidden=\"true\"></svg>\n        </button>\n      </header>\n\n      <div class=\"erp-drawer__body\">\n        @if (previewLoading()) {\n          <div class=\"applications-preview-loading\" aria-label=\"Loading application preview\">\n            <span class=\"erp-skeleton applications-skeleton--title\"></span>\n            <span class=\"erp-skeleton applications-skeleton--block\"></span>\n            <span class=\"erp-skeleton applications-skeleton--block\"></span>\n          </div>\n        } @else if (previewError()) {\n          <div class=\"applications-state\" role=\"alert\">\n            <span class=\"erp-empty-panel__icon\"\n              ><svg lucideCircleAlert size=\"20\" aria-hidden=\"true\"></svg\n            ></span>\n            <h3>Preview unavailable</h3>\n            <p>{{ previewError() }}</p>\n            <button\n              class=\"erp-button erp-button--secondary erp-button--compact\"\n              type=\"button\"\n              (click)=\"closePreview()\"\n            >\n              Close\n            </button>\n          </div>\n        } @else if (preview(); as item) {\n          <div class=\"applications-preview-summary\">\n            <span\n              class=\"erp-status\"\n              [class.erp-status--draft]=\"item.status === 'draft'\"\n              [class.erp-status--warning]=\"\n                item.status === 'pending_approval' || item.status === 'submitted'\n              \"\n              >{{ statusLabel(item) }}</span\n            >\n            <span>{{ captureLabel(item) }}</span>\n          </div>\n\n          @if (actionError()) {\n            <p class=\"erp-notice erp-notice--error\" role=\"alert\">{{ actionError() }}</p>\n          }\n\n          <section class=\"applications-preview-section\">\n            <header>\n              <div>\n                <h3>Record actions</h3>\n                <p>Actions are shown here only when they apply to this record.</p>\n              </div>\n            </header>\n            <div class=\"applications-actions-grid\">\n              <a\n                class=\"erp-button erp-button--secondary erp-button--compact\"\n                [routerLink]=\"['/admin/admissions/applications', item._id]\"\n              >\n                Open full record\n              </a>\n              <a\n                class=\"erp-button erp-button--secondary erp-button--compact\"\n                [routerLink]=\"['/admin/admissions', item._id, 'edit']\"\n              >\n                Edit application\n              </a>\n              @if (item.status === 'pending_approval' || item.status === 'submitted') {\n                <a\n                  class=\"erp-button erp-button--primary erp-button--compact\"\n                  [routerLink]=\"['/admin/admissions/applications', item._id, 'review']\"\n                >\n                  Review application\n                </a>\n              }\n              @if (item.status === 'approved') {\n                <a\n                  class=\"erp-button erp-button--secondary erp-button--compact\"\n                  [routerLink]=\"['/admin/admissions', item._id, 'scholarships']\"\n                >\n                  Scholarships\n                </a>\n                <button\n                  class=\"erp-button erp-button--secondary erp-button--compact\"\n                  type=\"button\"\n                  (click)=\"openCredentials(item)\"\n                >\n                  Reset password\n                </button>\n                <button\n                  class=\"erp-button erp-button--secondary erp-button--compact\"\n                  type=\"button\"\n                  [disabled]=\"feeSaving()\"\n                  (click)=\"requestFeeGeneration(item)\"\n                >\n                  Generate fee account\n                </button>\n              }\n            </div>\n          </section>\n\n          <section class=\"applications-preview-section\">\n            <header>\n              <div>\n                <h3>Application overview</h3>\n                <p>Core identity and academic context.</p>\n              </div>\n            </header>\n            <dl class=\"applications-facts\">\n              <div>\n                <dt>Student ID</dt>\n                <dd>{{ item.studentId || 'Not generated' }}</dd>\n              </div>\n              <div>\n                <dt>Programme</dt>\n                <dd>{{ item.courseName || 'Not selected' }}</dd>\n              </div>\n              <div>\n                <dt>Academic session</dt>\n                <dd>{{ item.academicSession || 'Not selected' }}</dd>\n              </div>\n              <div>\n                <dt>College</dt>\n                <dd>{{ item.collegeName || 'Not selected' }}</dd>\n              </div>\n              <div>\n                <dt>Department</dt>\n                <dd>{{ item.departmentName || 'Not selected' }}</dd>\n              </div>\n              <div>\n                <dt>Student type</dt>\n                <dd>{{ item.studentTypeName || 'Not selected' }}</dd>\n              </div>\n              <div>\n                <dt>Domicile</dt>\n                <dd>{{ item.domicileName || 'Not selected' }}</dd>\n              </div>\n              <div>\n                <dt>Form version</dt>\n                <dd>{{ item.formVersion || 'Not recorded' }}</dd>\n              </div>\n            </dl>\n          </section>\n\n          <section class=\"applications-preview-section\">\n            <header>\n              <div>\n                <h3>Lifecycle</h3>\n                <p>Read-only audit dates available on this application.</p>\n              </div>\n            </header>\n            <dl class=\"applications-timeline\">\n              <div>\n                <dt>Created</dt>\n                <dd>{{ createdLabel(item) }}</dd>\n              </div>\n              <div>\n                <dt>Submitted</dt>\n                <dd>{{ submittedLabel(item) }}</dd>\n              </div>\n              <div>\n                <dt>Approved</dt>\n                <dd>{{ approvedLabel(item) }}</dd>\n              </div>\n            </dl>\n          </section>\n\n          @if (item.status === 'approved') {\n            <section class=\"applications-preview-section\">\n              <header>\n                <div>\n                  <h3>Fee period</h3>\n                  <p>Saved settings used by fee-ledger generation.</p>\n                </div>\n                <span\n                  class=\"erp-status\"\n                  [class.erp-status--warning]=\"!item.feeLedgerKinds?.length\"\n                  >{{ feeStatus(item) }}</span\n                >\n              </header>\n              <div class=\"applications-fee-form\">\n                <label>\n                  <span>Calculation mode</span>\n                  <select\n                    class=\"erp-control\"\n                    [ngModel]=\"feePeriodDraft(item).feeFrequency\"\n                    (ngModelChange)=\"updateFeePeriodDraft(item, { feeFrequency: $event })\"\n                  >\n                    <option value=\"year\">Full year</option>\n                    <option value=\"semester\">Semester-wise</option>\n                  </select>\n                </label>\n                <label>\n                  <span>Academic year</span>\n                  <select\n                    class=\"erp-control\"\n                    [ngModel]=\"feePeriodDraft(item).currentAcademicYear\"\n                    (ngModelChange)=\"updateFeePeriodDraft(item, { currentAcademicYear: +$event })\"\n                  >\n                    @for (year of academicYearOptions; track year) {\n                      <option [ngValue]=\"year\">Year {{ year }}</option>\n                    }\n                  </select>\n                </label>\n                @if (feePeriodDraft(item).feeFrequency === 'semester') {\n                  <label>\n                    <span>Current semester</span>\n                    <select\n                      class=\"erp-control\"\n                      [ngModel]=\"feePeriodDraft(item).currentSemester\"\n                      (ngModelChange)=\"updateFeePeriodDraft(item, { currentSemester: +$event })\"\n                    >\n                      @for (semester of semesterOptions; track semester) {\n                        <option [ngValue]=\"semester\">Semester {{ semester }}</option>\n                      }\n                    </select>\n                  </label>\n                }\n              </div>\n              <div class=\"applications-fee-actions\">\n                <button\n                  class=\"erp-button erp-button--secondary erp-button--compact\"\n                  type=\"button\"\n                  [disabled]=\"feeSaving() || !feePeriodDirty(item)\"\n                  (click)=\"saveFeePeriod(item)\"\n                >\n                  Save period\n                </button>\n                <button\n                  class=\"erp-button erp-button--primary erp-button--compact\"\n                  type=\"button\"\n                  [disabled]=\"feeSaving() || feePeriodDirty(item)\"\n                  (click)=\"applyFeePeriod(item)\"\n                >\n                  Apply to ledger\n                </button>\n                @if (item.feeLedgerKinds?.length) {\n                  <button\n                    class=\"erp-button erp-button--danger erp-button--compact\"\n                    type=\"button\"\n                    [disabled]=\"feeSaving()\"\n                    (click)=\"requestFeeDeletion(item)\"\n                  >\n                    Delete due\n                  </button>\n                }\n              </div>\n            </section>\n          }\n        }\n      </div>\n    </section>\n  </div>\n}\n\n<erp-confirm-dialog\n  [open]=\"feeGenerationIds().length > 0\"\n  eyebrow=\"Fee account\"\n  title=\"Generate fee accounts?\"\n  [message]=\"feeGenerationMessage()\"\n  confirmLabel=\"Generate accounts\"\n  (confirmed)=\"confirmFeeGeneration()\"\n  (cancelled)=\"feeGenerationIds.set([])\"\n/>\n\n<erp-confirm-dialog\n  [open]=\"!!feeDeleteStudent()\"\n  eyebrow=\"Fee account\"\n  title=\"Delete this due?\"\n  [message]=\"\n    'This removes every active fee due for ' +\n    (feeDeleteStudent()?.studentName || feeDeleteStudent()?.studentId || 'this student') +\n    '. This action cannot be undone.'\n  \"\n  confirmLabel=\"Delete due\"\n  [destructive]=\"true\"\n  (confirmed)=\"confirmFeeDeletion()\"\n  (cancelled)=\"feeDeleteStudent.set(null)\"\n/>\n\n@if (credentialStudent(); as item) {\n  <div class=\"dialog-layer\">\n    <button\n      class=\"dialog-backdrop\"\n      type=\"button\"\n      aria-label=\"Close account setup\"\n      (click)=\"closeCredentials()\"\n    ></button>\n    <section\n      class=\"dialog applications-credential-dialog\"\n      role=\"dialog\"\n      aria-modal=\"true\"\n      aria-labelledby=\"credential-dialog-title\"\n      cdkTrapFocus\n      [cdkTrapFocusAutoCapture]=\"true\"\n    >\n      <header class=\"dialog__header\">\n        <div>\n          <small>Account security</small>\n          <h2 id=\"credential-dialog-title\">Reset temporary password</h2>\n        </div>\n        <button type=\"button\" aria-label=\"Close account setup\" (click)=\"closeCredentials()\">\n          <svg lucideX size=\"16\" aria-hidden=\"true\"></svg>\n        </button>\n      </header>\n      <div class=\"dialog__body applications-credential-body\">\n        <div class=\"applications-credential-context\">\n          <strong>{{ item.studentName || 'Unnamed application' }}</strong>\n          <span>{{ reference(item) }}</span>\n        </div>\n        <p>The student must change this temporary password after signing in.</p>\n        <div class=\"applications-credential-grid\">\n          <label\n            ><span>Temporary password</span\n            ><select class=\"erp-control\" [(ngModel)]=\"passwordMode\">\n              <option value=\"student-id\">Use Student ID</option>\n              <option value=\"manual\">Enter manually</option>\n            </select></label\n          >\n          @if (passwordMode === 'manual') {\n            <label\n              ><span>New password</span\n              ><input\n                class=\"erp-control\"\n                type=\"password\"\n                [(ngModel)]=\"manualPassword\"\n                minlength=\"8\"\n                autocomplete=\"new-password\"\n            /></label>\n            <label\n              ><span>Confirm password</span\n              ><input\n                class=\"erp-control\"\n                type=\"password\"\n                [(ngModel)]=\"confirmPassword\"\n                minlength=\"8\"\n                autocomplete=\"new-password\"\n            /></label>\n          }\n        </div>\n        @if (credentialError()) {\n          <p class=\"erp-notice erp-notice--error\" role=\"alert\">{{ credentialError() }}</p>\n        }\n      </div>\n      <footer class=\"dialog__footer\">\n        <button\n          class=\"erp-button erp-button--secondary\"\n          type=\"button\"\n          [disabled]=\"credentialSaving()\"\n          (click)=\"closeCredentials()\"\n        >\n          Cancel\n        </button>\n        <button\n          class=\"erp-button erp-button--primary\"\n          type=\"button\"\n          [disabled]=\"credentialSaving()\"\n          (click)=\"saveCredentials()\"\n        >\n          {{ credentialSaving() ? 'Saving\u2026' : 'Reset password' }}\n        </button>\n      </footer>\n    </section>\n  </div>\n}\n", styles: ["/* ERP-LOCAL-STYLE: Applications Workbench composes shared data-view and drawer primitives into an admissions-specific operating surface. */\n:host {\n  display: block;\n}\n\n.applications-feedback:empty {\n  display: none;\n}\n\n.applications-feedback .erp-notice {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: var(--erp-space-3);\n}\n\n.applications-feedback .erp-notice button {\n  display: inline-grid;\n  width: var(--erp-space-6);\n  height: var(--erp-space-6);\n  flex: 0 0 auto;\n  padding: 0;\n  place-items: center;\n  color: inherit;\n  background: transparent;\n  border: 0;\n  border-radius: var(--erp-radius-control);\n  cursor: pointer;\n}\n\n.applications-directory {\n  overflow: visible;\n}\n\n.applications-command-bar {\n  display: flex;\n  min-height: var(--erp-space-12);\n  align-items: center;\n  justify-content: space-between;\n  gap: var(--erp-space-3);\n  padding: var(--erp-space-2) var(--erp-space-3);\n  border-bottom: 1px solid var(--erp-border-default);\n}\n\n.applications-tabs {\n  display: flex;\n  min-width: 0;\n  align-items: center;\n  gap: var(--erp-space-2);\n  overflow-x: auto;\n  scrollbar-width: none;\n}\n\n.applications-tabs::-webkit-scrollbar {\n  display: none;\n}\n\n.applications-tabs button {\n  display: inline-flex;\n  min-height: var(--erp-control-height-compact);\n  flex: 0 0 auto;\n  align-items: center;\n  gap: var(--erp-space-2);\n  padding: 0 var(--erp-space-3);\n  color: var(--erp-text-body);\n  background: var(--erp-surface-raised);\n  border: 1px solid var(--erp-border-default);\n  border-radius: var(--erp-radius-control);\n  font-size: var(--erp-font-size-xs);\n  font-weight: var(--erp-weight-medium);\n  transition: var(--erp-standard-transition);\n}\n\n.applications-tabs button:hover {\n  color: var(--erp-blue-700);\n  background: var(--erp-blue-50);\n  border-color: var(--erp-blue-200);\n}\n\n.applications-tabs button.is-active {\n  color: var(--erp-blue-700);\n  background: var(--erp-blue-50);\n  border-color: var(--erp-blue-500);\n  box-shadow: inset 0 0 0 1px var(--erp-blue-100);\n}\n\n.applications-tabs small {\n  display: inline-grid;\n  min-width: var(--erp-space-7);\n  min-height: var(--erp-space-5);\n  padding-inline: var(--erp-space-1);\n  place-items: center;\n  color: var(--erp-blue-700);\n  background: var(--erp-blue-100);\n  border-radius: var(--erp-radius-pill);\n  font-size: var(--erp-font-size-2xs);\n  font-variant-numeric: tabular-nums;\n}\n\n.applications-toolbar__controls {\n  display: flex;\n  align-items: center;\n  gap: var(--erp-space-2);\n  flex-wrap: wrap;\n  justify-content: flex-end;\n}\n\n.applications-search {\n  display: flex;\n  width: min(26rem, 33vw);\n  min-height: var(--erp-control-height-compact);\n  align-items: center;\n  gap: var(--erp-space-2);\n  padding: 0 var(--erp-space-3);\n  color: var(--erp-text-muted);\n  background: var(--erp-input-bg);\n  border: 1px solid var(--erp-input-border);\n  border-radius: var(--erp-radius-control);\n  transition: var(--erp-standard-transition);\n}\n\n.applications-search:focus-within {\n  border-color: var(--erp-input-focus-border);\n  box-shadow: 0 0 0 var(--erp-space-1) var(--erp-focus-ring);\n}\n\n.applications-search input {\n  min-width: 0;\n  flex: 1;\n  padding: 0;\n  color: var(--erp-text-heading);\n  background: transparent;\n  border: 0;\n  outline: 0;\n  font-size: var(--erp-font-label);\n}\n\n.applications-search > button,\n.applications-icon-button {\n  display: inline-grid;\n  width: var(--erp-control-height-compact);\n  height: var(--erp-control-height-compact);\n  flex: 0 0 auto;\n  padding: 0;\n  place-items: center;\n  color: var(--erp-text-muted);\n  background: transparent;\n  border: 0;\n  border-radius: var(--erp-radius-control);\n  cursor: pointer;\n}\n\n.applications-search > button {\n  width: var(--erp-space-6);\n  height: var(--erp-space-6);\n}\n\n.applications-search > button:hover,\n.applications-icon-button:hover {\n  color: var(--erp-text-heading);\n  background: var(--erp-surface-hover);\n}\n\n.applications-selection {\n  margin: var(--erp-space-3) var(--erp-space-5);\n}\n\n.applications-selection > span {\n  min-width: 0;\n  flex: 1;\n  color: var(--erp-text-muted);\n  font-size: var(--erp-font-caption);\n}\n\n.applications-directory table {\n  min-width: 64rem;\n}\n\n.applications-select-column {\n  width: var(--erp-space-12);\n  padding-right: 0 !important;\n  text-align: center !important;\n}\n\n.applications-select-column input {\n  width: var(--erp-space-4);\n  height: var(--erp-space-4);\n  accent-color: var(--erp-blue-600);\n}\n\n.applications-select-column input:disabled {\n  opacity: 0.36;\n}\n\n.applications-reference strong,\n.applications-activity strong {\n  font-variant-numeric: tabular-nums;\n}\n\n.applications-applicant {\n  display: grid;\n  min-width: 0;\n  grid-template-columns: auto minmax(0, 1fr);\n  align-items: center;\n  gap: var(--erp-space-3);\n  padding: 0;\n  color: inherit;\n  text-align: left;\n  background: transparent;\n  border: 0;\n  cursor: pointer;\n}\n\n.applications-applicant:hover strong {\n  color: var(--erp-blue-700);\n  text-decoration: underline;\n  text-underline-offset: var(--erp-space-1);\n}\n\n.applications-avatar {\n  display: inline-grid;\n  width: var(--erp-control-height-compact);\n  height: var(--erp-control-height-compact);\n  place-items: center;\n  color: var(--erp-blue-700);\n  background: var(--erp-blue-50);\n  border: 1px solid var(--erp-border-default);\n  border-radius: var(--erp-radius-avatar);\n  font-size: var(--erp-font-size-xs);\n  font-weight: var(--erp-weight-bold);\n}\n\n.applications-state {\n  display: grid;\n  min-height: var(--erp-state-panel-min-height);\n  place-items: center;\n  align-content: center;\n  gap: var(--erp-space-2);\n  padding: var(--erp-space-8);\n  color: var(--erp-text-muted);\n  text-align: center;\n}\n\n.applications-state h3,\n.applications-state p {\n  margin: 0;\n}\n\n.applications-state h3 {\n  color: var(--erp-text-heading);\n  font-size: var(--erp-font-label);\n}\n\n.applications-state p {\n  max-width: 28rem;\n  font-size: var(--erp-font-caption);\n}\n\n.applications-skeleton--check,\n.applications-skeleton--action {\n  width: var(--erp-space-5);\n}\n\n.applications-skeleton--reference,\n.applications-skeleton--status {\n  width: 55%;\n}\n\n.applications-skeleton--person,\n.applications-skeleton--programme,\n.applications-skeleton--date {\n  width: 76%;\n}\n\n.applications-skeleton--title {\n  width: 42%;\n}\n\n.applications-skeleton--block {\n  min-height: calc(var(--erp-space-12) * 2);\n}\n\n.applications-pagination {\n  padding: var(--erp-space-2) var(--erp-space-5);\n  font-size: var(--erp-font-caption);\n}\n\n.applications-pagination__label {\n  margin-right: var(--erp-space-2);\n  font-size: var(--erp-font-caption);\n}\n\n.applications-preview {\n  width: min(var(--erp-modal-width), 100%);\n}\n\n.applications-preview-summary {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: var(--erp-space-3);\n  color: var(--erp-text-muted);\n  font-size: var(--erp-font-caption);\n}\n\n.applications-preview-loading {\n  display: grid;\n  gap: var(--erp-space-4);\n}\n\n.applications-preview-section {\n  overflow: hidden;\n  background: var(--erp-surface-overlay);\n  border: 1px solid var(--erp-border-subtle);\n  border-radius: var(--erp-radius-compact);\n}\n\n.applications-preview-section > header {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  gap: var(--erp-space-3);\n  padding: var(--erp-space-3) var(--erp-space-4);\n  background: var(--erp-surface-detail-soft);\n  border-bottom: 1px solid var(--erp-border-subtle);\n}\n\n.applications-preview-section h3,\n.applications-preview-section p {\n  margin: 0;\n}\n\n.applications-preview-section h3 {\n  color: var(--erp-text-heading);\n  font-size: var(--erp-font-label);\n}\n\n.applications-preview-section p {\n  margin-top: var(--erp-space-1);\n  color: var(--erp-text-muted);\n  font-size: var(--erp-font-size-xs);\n}\n\n.applications-actions-grid {\n  display: grid;\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n  gap: var(--erp-space-2);\n  padding: var(--erp-space-4);\n}\n\n.applications-facts,\n.applications-timeline {\n  display: grid;\n  margin: 0;\n}\n\n.applications-facts {\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n  padding: var(--erp-space-2) var(--erp-space-4);\n}\n\n.applications-facts > div,\n.applications-timeline > div {\n  padding: var(--erp-space-3) 0;\n  border-bottom: 1px solid var(--erp-border-subtle);\n}\n\n.applications-facts > div:nth-last-child(-n + 2),\n.applications-timeline > div:last-child {\n  border-bottom: 0;\n}\n\n.applications-facts > div:nth-child(odd) {\n  padding-right: var(--erp-space-4);\n}\n\n.applications-facts dt,\n.applications-timeline dt {\n  color: var(--erp-text-muted);\n  font-size: var(--erp-font-size-xs);\n}\n\n.applications-facts dd,\n.applications-timeline dd {\n  margin: var(--erp-space-1) 0 0;\n  color: var(--erp-text-heading);\n  font-size: var(--erp-font-label);\n  font-weight: var(--erp-weight-semibold);\n}\n\n.applications-timeline {\n  padding: 0 var(--erp-space-4);\n}\n\n.applications-timeline > div {\n  display: grid;\n  grid-template-columns: minmax(0, 1fr) auto;\n  align-items: baseline;\n  gap: var(--erp-space-3);\n}\n\n.applications-fee-form {\n  display: grid;\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n  gap: var(--erp-space-3);\n  padding: var(--erp-space-4);\n}\n\n.applications-fee-form label,\n.applications-credential-grid label {\n  display: grid;\n  gap: var(--erp-space-1);\n  color: var(--erp-text-muted);\n  font-size: var(--erp-font-size-xs);\n  font-weight: var(--erp-weight-semibold);\n}\n\n.applications-fee-form .erp-control,\n.applications-credential-grid .erp-control {\n  min-height: var(--erp-control-height-compact);\n  font-size: var(--erp-font-label);\n}\n\n.applications-fee-actions {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: flex-end;\n  gap: var(--erp-space-2);\n  padding: 0 var(--erp-space-4) var(--erp-space-4);\n}\n\n.applications-credential-dialog {\n  width: min(var(--erp-modal-width), 100%);\n}\n\n.applications-credential-body {\n  display: grid;\n  gap: var(--erp-space-4);\n}\n\n.applications-credential-body > p {\n  margin: 0;\n  color: var(--erp-text-muted);\n  font-size: var(--erp-font-caption);\n}\n\n.applications-credential-context {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: var(--erp-space-3);\n  padding: var(--erp-space-3);\n  color: var(--erp-text-heading);\n  background: var(--erp-blue-50);\n  border-radius: var(--erp-radius-control);\n  font-size: var(--erp-font-label);\n}\n\n.applications-credential-context span {\n  color: var(--erp-text-muted);\n  font-size: var(--erp-font-caption);\n}\n\n.applications-credential-grid {\n  display: grid;\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n  gap: var(--erp-space-3);\n}\n\n@media (max-width: 72rem) {\n  .applications-command-bar {\n    align-items: stretch;\n    flex-direction: column;\n  }\n\n  .applications-toolbar__controls,\n  .applications-search {\n    width: 100%;\n  }\n\n  .applications-toolbar__controls {\n    justify-content: flex-start;\n  }\n}\n\n@media (max-width: 48rem) {\n  .applications-toolbar__controls,\n  .applications-selection {\n    align-items: stretch;\n    flex-wrap: wrap;\n  }\n\n  .applications-search,\n  .applications-selection > span {\n    flex-basis: 100%;\n  }\n\n  .applications-command-bar {\n    padding-inline: var(--erp-space-2);\n  }\n\n  .applications-tabs {\n    margin-inline: calc(var(--erp-space-2) * -1);\n    padding-inline: var(--erp-space-2);\n  }\n\n  .applications-pagination__label {\n    display: none;\n  }\n\n  .applications-pagination {\n    align-items: flex-start;\n    flex-direction: column;\n  }\n\n  .applications-actions-grid,\n  .applications-facts,\n  .applications-fee-form,\n  .applications-credential-grid {\n    grid-template-columns: 1fr;\n  }\n\n  .applications-facts > div:nth-last-child(2) {\n    border-bottom: 1px solid var(--erp-border-subtle);\n  }\n\n  .applications-facts > div:nth-child(odd) {\n    padding-right: 0;\n  }\n}\n"] }]
    }], () => [], { closeLayerOnEscape: [{
            type: HostListener,
            args: ['document:keydown.escape']
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(AdmissionsComponent, { className: "AdmissionsComponent", filePath: "frontend/src/app/features/admin/admissions/admissions.component.ts", lineNumber: 148 }); })();
function feePeriodFromAdmission(item) {
    const currentAcademicYear = Number(item.currentAcademicYear || 1);
    return {
        currentAcademicYear,
        currentSemester: Number(item.currentSemester || currentAcademicYear * 2 - 1),
        feeFrequency: item.feeFrequency === 'semester' ? 'semester' : 'year',
    };
}
function viewFromStatus(value) {
    if (value === 'draft')
        return 'draft';
    if (value === 'pending_approval' || value === 'submitted')
        return 'review';
    if (value === 'approved')
        return 'approved';
    return 'all';
}
function normaliseView(value) {
    return SAVED_VIEWS.some((view) => view.id === value) ? value : null;
}
function positiveInteger(value, fallback) {
    const parsed = Number(value);
    return Number.isInteger(parsed) && parsed > 0 ? parsed : fallback;
}
function allowedPageSize(value) {
    const parsed = Number(value);
    return ERP_PAGINATION.pageSizeOptions.some((option) => option === parsed)
        ? parsed
        : ERP_PAGINATION.defaultPageSize;
}
