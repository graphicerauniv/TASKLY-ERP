import { ChangeDetectionStrategy, Component, inject, input, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { LucideAlertTriangle, LucideCheck } from '@lucide/angular';
import { forkJoin } from 'rxjs';
import { ApiService } from '../../../core/api.service';
import { AdmissionJourneyRailComponent } from '../../../shared/ui/admission-journey-rail/admission-journey-rail.component';
import { DynamicFieldRendererComponent } from '../../../shared/ui/dynamic-field-renderer/dynamic-field-renderer.component';
import { DynamicSectionRendererComponent } from '../../../shared/ui/dynamic-section-renderer/dynamic-section-renderer.component';
import { FormActionBarComponent } from '../../../shared/ui/form-action-bar/form-action-bar.component';
import { FormProgressHeaderComponent } from '../../../shared/ui/form-progress-header/form-progress-header.component';
import { FormSubGroupComponent } from '../../../shared/ui/form-sub-group/form-sub-group.component';
import { MobileSectionNavigatorSheetComponent } from '../../../shared/ui/mobile-section-navigator-sheet/mobile-section-navigator-sheet.component';
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
const _forTrack0 = ($index, $item) => $item._id;
const _forTrack1 = ($index, $item) => $item.id;
function DynamicAdmissionComponent_Conditional_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "header", 0)(1, "a", 5)(2, "span");
    i0.ɵɵtext(3, "GEU");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "div")(5, "strong");
    i0.ɵɵtext(6, "GEU ERP");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "small");
    i0.ɵɵtext(8, "Online Admission");
    i0.ɵɵelementEnd()()()();
} }
function DynamicAdmissionComponent_Conditional_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "section", 2);
    i0.ɵɵelement(1, "div", 6);
    i0.ɵɵelementStart(2, "p");
    i0.ɵɵtext(3, "Preparing your admission form...");
    i0.ɵɵelementEnd()();
} }
function DynamicAdmissionComponent_Conditional_3_Conditional_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 8);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r1.error());
} }
function DynamicAdmissionComponent_Conditional_3_For_16_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 12);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r3 = ctx.$implicit;
    i0.ɵɵproperty("value", item_r3._id);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(item_r3.name);
} }
function DynamicAdmissionComponent_Conditional_3_For_24_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 12);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r4 = ctx.$implicit;
    i0.ɵɵproperty("value", item_r4._id);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(item_r4.name);
} }
function DynamicAdmissionComponent_Conditional_3_Template(rf, ctx) { if (rf & 1) {
    const _r1 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "section", 3)(1, "span", 7);
    i0.ɵɵtext(2, "Start application");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "h1");
    i0.ɵɵtext(4, "Choose your admission form");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "p");
    i0.ɵɵtext(6, "The session and level select the correct published application, such as UG or PG.");
    i0.ɵɵelementEnd();
    i0.ɵɵconditionalCreate(7, DynamicAdmissionComponent_Conditional_3_Conditional_7_Template, 2, 1, "p", 8);
    i0.ɵɵelementStart(8, "div", 9)(9, "label")(10, "span");
    i0.ɵɵtext(11, "Academic session *");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(12, "select", 10);
    i0.ɵɵtwoWayListener("ngModelChange", function DynamicAdmissionComponent_Conditional_3_Template_select_ngModelChange_12_listener($event) { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r1.selectedAdmissionSessionId, $event) || (ctx_r1.selectedAdmissionSessionId = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementStart(13, "option", 11);
    i0.ɵɵtext(14, "Select session");
    i0.ɵɵelementEnd();
    i0.ɵɵrepeaterCreate(15, DynamicAdmissionComponent_Conditional_3_For_16_Template, 2, 2, "option", 12, _forTrack0);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(17, "label")(18, "span");
    i0.ɵɵtext(19, "Admission level *");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(20, "select", 10);
    i0.ɵɵtwoWayListener("ngModelChange", function DynamicAdmissionComponent_Conditional_3_Template_select_ngModelChange_20_listener($event) { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r1.selectedAdmissionLevelId, $event) || (ctx_r1.selectedAdmissionLevelId = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementStart(21, "option", 11);
    i0.ɵɵtext(22, "Select UG, PG or another level");
    i0.ɵɵelementEnd();
    i0.ɵɵrepeaterCreate(23, DynamicAdmissionComponent_Conditional_3_For_24_Template, 2, 2, "option", 12, _forTrack0);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(25, "button", 13);
    i0.ɵɵlistener("click", function DynamicAdmissionComponent_Conditional_3_Template_button_click_25_listener() { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.beginAdmission()); });
    i0.ɵɵtext(26, " Continue ");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(7);
    i0.ɵɵconditional(ctx_r1.error() ? 7 : -1);
    i0.ɵɵadvance(5);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r1.selectedAdmissionSessionId);
    i0.ɵɵadvance(3);
    i0.ɵɵrepeater(ctx_r1.admissionSessions());
    i0.ɵɵadvance(5);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r1.selectedAdmissionLevelId);
    i0.ɵɵadvance(3);
    i0.ɵɵrepeater(ctx_r1.admissionLevels());
} }
function DynamicAdmissionComponent_Conditional_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "section", 3)(1, "h1");
    i0.ɵɵtext(2, "Admission form unavailable");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "p");
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(ctx_r1.error());
} }
function DynamicAdmissionComponent_Conditional_5_Conditional_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtext(0, " Student ");
    i0.ɵɵelementStart(1, "strong");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵtext(3);
} if (rf & 2) {
    let tmp_2_0;
    let tmp_3_0;
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate((tmp_2_0 = ctx_r1.admission()) == null ? null : tmp_2_0.studentId);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ((tmp_3_0 = ctx_r1.admission()) == null ? null : tmp_3_0.status) === "approved" ? "is approved." : "is now available in Not Approved Students.", " ");
} }
function DynamicAdmissionComponent_Conditional_5_Conditional_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtext(0, " Your admission has been submitted successfully. Your Student ID is ");
    i0.ɵɵelementStart(1, "strong");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵtext(3, ". ");
} if (rf & 2) {
    let tmp_2_0;
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate((tmp_2_0 = ctx_r1.admission()) == null ? null : tmp_2_0.studentId);
} }
function DynamicAdmissionComponent_Conditional_5_Conditional_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "a", 16);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    let tmp_2_0;
    let tmp_3_0;
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("routerLink", ((tmp_2_0 = ctx_r1.admission()) == null ? null : tmp_2_0.status) === "approved" ? "/admin/admissions/approved" : "/admin/admissions/not-approved");
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" Open ", ((tmp_3_0 = ctx_r1.admission()) == null ? null : tmp_3_0.status) === "approved" ? "Approved Students" : "Not Approved Students", " ");
} }
function DynamicAdmissionComponent_Conditional_5_Conditional_10_Template(rf, ctx) { if (rf & 1) {
    const _r5 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 13);
    i0.ɵɵlistener("click", function DynamicAdmissionComponent_Conditional_5_Conditional_10_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r5); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.newApplication()); });
    i0.ɵɵtext(1, " Start another admission ");
    i0.ɵɵelementEnd();
} }
function DynamicAdmissionComponent_Conditional_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "section", 4)(1, "span");
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(2, "svg", 14);
    i0.ɵɵelementEnd();
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(3, "h1");
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "p");
    i0.ɵɵconditionalCreate(6, DynamicAdmissionComponent_Conditional_5_Conditional_6_Template, 4, 2)(7, DynamicAdmissionComponent_Conditional_5_Conditional_7_Template, 4, 1);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "div", 15);
    i0.ɵɵconditionalCreate(9, DynamicAdmissionComponent_Conditional_5_Conditional_9_Template, 2, 2, "a", 16);
    i0.ɵɵconditionalCreate(10, DynamicAdmissionComponent_Conditional_5_Conditional_10_Template, 2, 0, "button", 17);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    let tmp_1_0;
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate1(" ", ((tmp_1_0 = ctx_r1.admission()) == null ? null : tmp_1_0.status) === "approved" ? "Student approved" : ctx_r1.embedded() ? "Student sent for approval" : "Application submitted", " ");
    i0.ɵɵadvance(2);
    i0.ɵɵconditional(ctx_r1.embedded() ? 6 : 7);
    i0.ɵɵadvance(3);
    i0.ɵɵconditional(ctx_r1.embedded() ? 9 : -1);
    i0.ɵɵadvance();
    i0.ɵɵconditional(!ctx_r1.admissionId() ? 10 : -1);
} }
function DynamicAdmissionComponent_Conditional_6_Conditional_1_Template(rf, ctx) { if (rf & 1) {
    const _r7 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "erp-form-action-bar", 25);
    i0.ɵɵlistener("back", function DynamicAdmissionComponent_Conditional_6_Conditional_1_Template_erp_form_action_bar_back_0_listener() { i0.ɵɵrestoreView(_r7); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.backAction()); })("saveDraft", function DynamicAdmissionComponent_Conditional_6_Conditional_1_Template_erp_form_action_bar_saveDraft_0_listener() { i0.ɵɵrestoreView(_r7); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.save()); })("primary", function DynamicAdmissionComponent_Conditional_6_Conditional_1_Template_erp_form_action_bar_primary_0_listener() { i0.ɵɵrestoreView(_r7); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.primaryAction()); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("saveStatus", ctx_r1.saveStatusText())("showBack", ctx_r1.activeIndex() > 0 || ctx_r1.reviewMode())("saving", ctx_r1.saving())("primaryLabel", ctx_r1.primaryActionLabel())("primaryDisabled", ctx_r1.reviewMode() && ctx_r1.applicationMissingRequired() > 0);
} }
function DynamicAdmissionComponent_Conditional_6_Conditional_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 21);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r1.message());
} }
function DynamicAdmissionComponent_Conditional_6_Conditional_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 8);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r1.error());
} }
function DynamicAdmissionComponent_Conditional_6_Conditional_5_For_10_Conditional_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(0, "svg", 30);
} }
function DynamicAdmissionComponent_Conditional_6_Conditional_5_For_10_Conditional_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(0, "svg", 31);
} }
function DynamicAdmissionComponent_Conditional_6_Conditional_5_For_10_Conditional_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtext(0);
} if (rf & 2) {
    const item_r9 = i0.ɵɵnextContext().$implicit;
    const current_r10 = i0.ɵɵnextContext(2);
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵtextInterpolate1(" ", ctx_r1.requiredMissingFields(current_r10.sections[item_r9.index]), " required fields pending ");
} }
function DynamicAdmissionComponent_Conditional_6_Conditional_5_For_10_Conditional_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtext(0, " Complete ");
} }
function DynamicAdmissionComponent_Conditional_6_Conditional_5_For_10_Template(rf, ctx) { if (rf & 1) {
    const _r8 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "article")(1, "span", 29);
    i0.ɵɵconditionalCreate(2, DynamicAdmissionComponent_Conditional_6_Conditional_5_For_10_Conditional_2_Template, 1, 0, ":svg:svg", 30)(3, DynamicAdmissionComponent_Conditional_6_Conditional_5_For_10_Conditional_3_Template, 1, 0, ":svg:svg", 31);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "div")(5, "strong");
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "small");
    i0.ɵɵconditionalCreate(8, DynamicAdmissionComponent_Conditional_6_Conditional_5_For_10_Conditional_8_Template, 1, 1)(9, DynamicAdmissionComponent_Conditional_6_Conditional_5_For_10_Conditional_9_Template, 1, 0);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(10, "button", 32);
    i0.ɵɵlistener("click", function DynamicAdmissionComponent_Conditional_6_Conditional_5_For_10_Template_button_click_10_listener() { const item_r9 = i0.ɵɵrestoreView(_r8).$implicit; const ctx_r1 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r1.goToStep(item_r9.index)); });
    i0.ɵɵtext(11, " Edit ");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const item_r9 = ctx.$implicit;
    const current_r10 = i0.ɵɵnextContext(2);
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵclassProp("erp-admission-review__item--attention", ctx_r1.requiredMissingFields(current_r10.sections[item_r9.index]) > 0);
    i0.ɵɵadvance(2);
    i0.ɵɵconditional(ctx_r1.requiredMissingFields(current_r10.sections[item_r9.index]) > 0 ? 2 : 3);
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(item_r9.title);
    i0.ɵɵadvance(2);
    i0.ɵɵconditional(ctx_r1.requiredMissingFields(current_r10.sections[item_r9.index]) > 0 ? 8 : 9);
} }
function DynamicAdmissionComponent_Conditional_6_Conditional_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "section", 22)(1, "header")(2, "span");
    i0.ɵɵtext(3, "Final review");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "h2", 26);
    i0.ɵɵtext(5, "Review your application");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "p");
    i0.ɵɵtext(7, "Check every configured section before submitting the application.");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(8, "div", 27);
    i0.ɵɵrepeaterCreate(9, DynamicAdmissionComponent_Conditional_6_Conditional_5_For_10_Template, 12, 5, "article", 28, _forTrack1);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(9);
    i0.ɵɵrepeater(ctx_r1.sectionNavigationItems());
} }
function DynamicAdmissionComponent_Conditional_6_Conditional_6_For_3_Conditional_1_For_1_For_8_Conditional_0_Template(rf, ctx) { if (rf & 1) {
    const _r16 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "erp-dynamic-field-renderer", 44);
    i0.ɵɵlistener("modelChanged", function DynamicAdmissionComponent_Conditional_6_Conditional_6_For_3_Conditional_1_For_1_For_8_Conditional_0_Template_erp_dynamic_field_renderer_modelChanged_0_listener($event) { i0.ɵɵrestoreView(_r16); const field_r17 = i0.ɵɵnextContext().$implicit; const ctx_r17 = i0.ɵɵnextContext(); const entry_r19 = ctx_r17.$implicit; const ɵ$index_185_r15 = ctx_r17.$index; const ctx_r1 = i0.ɵɵnextContext(5); return i0.ɵɵresetView(ctx_r1.setValue(field_r17, $event, entry_r19, ɵ$index_185_r15)); })("optionSearch", function DynamicAdmissionComponent_Conditional_6_Conditional_6_For_3_Conditional_1_For_1_For_8_Conditional_0_Template_erp_dynamic_field_renderer_optionSearch_0_listener($event) { i0.ɵɵrestoreView(_r16); const field_r17 = i0.ɵɵnextContext().$implicit; const ctx_r17 = i0.ɵɵnextContext(); const entry_r19 = ctx_r17.$implicit; const ɵ$index_185_r15 = ctx_r17.$index; const ctx_r1 = i0.ɵɵnextContext(5); return i0.ɵɵresetView(ctx_r1.searchOptions(field_r17, $event, entry_r19, ɵ$index_185_r15)); })("fileSelected", function DynamicAdmissionComponent_Conditional_6_Conditional_6_For_3_Conditional_1_For_1_For_8_Conditional_0_Template_erp_dynamic_field_renderer_fileSelected_0_listener($event) { i0.ɵɵrestoreView(_r16); const field_r17 = i0.ɵɵnextContext().$implicit; const ctx_r17 = i0.ɵɵnextContext(); const entry_r19 = ctx_r17.$implicit; const ɵ$index_185_r15 = ctx_r17.$index; const ctx_r1 = i0.ɵɵnextContext(5); return i0.ɵɵresetView(ctx_r1.upload(field_r17, $event, entry_r19, ɵ$index_185_r15)); })("uploadRemoved", function DynamicAdmissionComponent_Conditional_6_Conditional_6_For_3_Conditional_1_For_1_For_8_Conditional_0_Template_erp_dynamic_field_renderer_uploadRemoved_0_listener() { i0.ɵɵrestoreView(_r16); const field_r17 = i0.ɵɵnextContext().$implicit; const ctx_r17 = i0.ɵɵnextContext(); const entry_r19 = ctx_r17.$implicit; const ɵ$index_185_r15 = ctx_r17.$index; const ctx_r1 = i0.ɵɵnextContext(5); return i0.ɵɵresetView(ctx_r1.setValue(field_r17, "", entry_r19, ɵ$index_185_r15)); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const field_r17 = i0.ɵɵnextContext().$implicit;
    const ctx_r17 = i0.ɵɵnextContext();
    const entry_r19 = ctx_r17.$implicit;
    const ɵ$index_185_r15 = ctx_r17.$index;
    const sub_r12 = i0.ɵɵnextContext(2).$implicit;
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵproperty("field", field_r17)("modelValue", ctx_r1.value(field_r17, entry_r19))("options", ctx_r1.fieldOptions(field_r17, ɵ$index_185_r15))("entryKey", sub_r12.id + "-" + ɵ$index_185_r15);
} }
function DynamicAdmissionComponent_Conditional_6_Conditional_6_For_3_Conditional_1_For_1_For_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵconditionalCreate(0, DynamicAdmissionComponent_Conditional_6_Conditional_6_For_3_Conditional_1_For_1_For_8_Conditional_0_Template, 1, 4, "erp-dynamic-field-renderer", 43);
} if (rf & 2) {
    const field_r17 = ctx.$implicit;
    const entry_r19 = i0.ɵɵnextContext().$implicit;
    const ctx_r1 = i0.ɵɵnextContext(5);
    i0.ɵɵconditional(ctx_r1.visible(field_r17, entry_r19) ? 0 : -1);
} }
function DynamicAdmissionComponent_Conditional_6_Conditional_6_For_3_Conditional_1_For_1_Template(rf, ctx) { if (rf & 1) {
    const _r14 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "article", 38)(1, "div", 41)(2, "strong");
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "button", 42);
    i0.ɵɵlistener("click", function DynamicAdmissionComponent_Conditional_6_Conditional_6_For_3_Conditional_1_For_1_Template_button_click_4_listener() { const ɵ$index_185_r15 = i0.ɵɵrestoreView(_r14).$index; const sub_r12 = i0.ɵɵnextContext(2).$implicit; const ctx_r1 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r1.removeEntry(sub_r12, ɵ$index_185_r15)); });
    i0.ɵɵtext(5, " Remove ");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(6, "div", 37);
    i0.ɵɵrepeaterCreate(7, DynamicAdmissionComponent_Conditional_6_Conditional_6_For_3_Conditional_1_For_1_For_8_Template, 1, 1, null, null, _forTrack1);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ɵ$index_185_r15 = ctx.$index;
    const sub_r12 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate2("", sub_r12.name, " ", ɵ$index_185_r15 + 1);
    i0.ɵɵadvance(4);
    i0.ɵɵrepeater(sub_r12.fields);
} }
function DynamicAdmissionComponent_Conditional_6_Conditional_6_For_3_Conditional_1_ForEmpty_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 39);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const sub_r12 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1("No records added. Add ", sub_r12.name, " to begin.");
} }
function DynamicAdmissionComponent_Conditional_6_Conditional_6_For_3_Conditional_1_Template(rf, ctx) { if (rf & 1) {
    const _r13 = i0.ɵɵgetCurrentView();
    i0.ɵɵrepeaterCreate(0, DynamicAdmissionComponent_Conditional_6_Conditional_6_For_3_Conditional_1_For_1_Template, 9, 2, "article", 38, i0.ɵɵrepeaterTrackByIndex, false, DynamicAdmissionComponent_Conditional_6_Conditional_6_For_3_Conditional_1_ForEmpty_2_Template, 2, 1, "p", 39);
    i0.ɵɵelementStart(3, "button", 40);
    i0.ɵɵlistener("click", function DynamicAdmissionComponent_Conditional_6_Conditional_6_For_3_Conditional_1_Template_button_click_3_listener() { i0.ɵɵrestoreView(_r13); const sub_r12 = i0.ɵɵnextContext().$implicit; const ctx_r1 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r1.addEntry(sub_r12)); });
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const sub_r12 = i0.ɵɵnextContext().$implicit;
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵrepeater(ctx_r1.entries(sub_r12));
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate1(" Add ", sub_r12.name, " ");
} }
function DynamicAdmissionComponent_Conditional_6_Conditional_6_For_3_Conditional_2_For_2_Conditional_0_Template(rf, ctx) { if (rf & 1) {
    const _r20 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "erp-dynamic-field-renderer", 44);
    i0.ɵɵlistener("modelChanged", function DynamicAdmissionComponent_Conditional_6_Conditional_6_For_3_Conditional_2_For_2_Conditional_0_Template_erp_dynamic_field_renderer_modelChanged_0_listener($event) { i0.ɵɵrestoreView(_r20); const field_r21 = i0.ɵɵnextContext().$implicit; const ctx_r1 = i0.ɵɵnextContext(5); return i0.ɵɵresetView(ctx_r1.setValue(field_r21, $event)); })("optionSearch", function DynamicAdmissionComponent_Conditional_6_Conditional_6_For_3_Conditional_2_For_2_Conditional_0_Template_erp_dynamic_field_renderer_optionSearch_0_listener($event) { i0.ɵɵrestoreView(_r20); const field_r21 = i0.ɵɵnextContext().$implicit; const ctx_r1 = i0.ɵɵnextContext(5); return i0.ɵɵresetView(ctx_r1.searchOptions(field_r21, $event)); })("fileSelected", function DynamicAdmissionComponent_Conditional_6_Conditional_6_For_3_Conditional_2_For_2_Conditional_0_Template_erp_dynamic_field_renderer_fileSelected_0_listener($event) { i0.ɵɵrestoreView(_r20); const field_r21 = i0.ɵɵnextContext().$implicit; const ctx_r1 = i0.ɵɵnextContext(5); return i0.ɵɵresetView(ctx_r1.upload(field_r21, $event)); })("uploadRemoved", function DynamicAdmissionComponent_Conditional_6_Conditional_6_For_3_Conditional_2_For_2_Conditional_0_Template_erp_dynamic_field_renderer_uploadRemoved_0_listener() { i0.ɵɵrestoreView(_r20); const field_r21 = i0.ɵɵnextContext().$implicit; const ctx_r1 = i0.ɵɵnextContext(5); return i0.ɵɵresetView(ctx_r1.setValue(field_r21, "")); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const field_r21 = i0.ɵɵnextContext().$implicit;
    const sub_r12 = i0.ɵɵnextContext(2).$implicit;
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵproperty("field", field_r21)("modelValue", ctx_r1.value(field_r21))("options", ctx_r1.fieldOptions(field_r21))("entryKey", sub_r12.id);
} }
function DynamicAdmissionComponent_Conditional_6_Conditional_6_For_3_Conditional_2_For_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵconditionalCreate(0, DynamicAdmissionComponent_Conditional_6_Conditional_6_For_3_Conditional_2_For_2_Conditional_0_Template, 1, 4, "erp-dynamic-field-renderer", 43);
} if (rf & 2) {
    const field_r21 = ctx.$implicit;
    const ctx_r1 = i0.ɵɵnextContext(5);
    i0.ɵɵconditional(ctx_r1.visible(field_r21) ? 0 : -1);
} }
function DynamicAdmissionComponent_Conditional_6_Conditional_6_For_3_Conditional_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 37);
    i0.ɵɵrepeaterCreate(1, DynamicAdmissionComponent_Conditional_6_Conditional_6_For_3_Conditional_2_For_2_Template, 1, 1, null, null, _forTrack1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const sub_r12 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance();
    i0.ɵɵrepeater(sub_r12.fields);
} }
function DynamicAdmissionComponent_Conditional_6_Conditional_6_For_3_Template(rf, ctx) { if (rf & 1) {
    const _r11 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "erp-form-sub-group", 36);
    i0.ɵɵlistener("toggled", function DynamicAdmissionComponent_Conditional_6_Conditional_6_For_3_Template_erp_form_sub_group_toggled_0_listener() { const sub_r12 = i0.ɵɵrestoreView(_r11).$implicit; const ctx_r1 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r1.toggleSubsection(sub_r12.id)); });
    i0.ɵɵconditionalCreate(1, DynamicAdmissionComponent_Conditional_6_Conditional_6_For_3_Conditional_1_Template, 5, 2)(2, DynamicAdmissionComponent_Conditional_6_Conditional_6_For_3_Conditional_2_Template, 3, 0, "div", 37);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const sub_r12 = ctx.$implicit;
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵproperty("title", sub_r12.name)("description", sub_r12.description)("fieldCount", ctx_r1.fieldCount(sub_r12))("requiredCount", ctx_r1.requiredFieldCount(sub_r12))("remainingRequired", ctx_r1.subsectionRequiredMissing(sub_r12))("complete", ctx_r1.requiredFieldCount(sub_r12) > 0 && ctx_r1.subsectionRequiredMissing(sub_r12) === 0)("open", ctx_r1.subsectionOpen(sub_r12.id));
    i0.ɵɵadvance();
    i0.ɵɵconditional(sub_r12.isRepeatable ? 1 : 2);
} }
function DynamicAdmissionComponent_Conditional_6_Conditional_6_ForEmpty_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 35)(1, "strong");
    i0.ɵɵtext(2, "No fields configured");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "p");
    i0.ɵɵtext(4, "This section does not contain any visible fields.");
    i0.ɵɵelementEnd()();
} }
function DynamicAdmissionComponent_Conditional_6_Conditional_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 23)(1, "erp-dynamic-section-renderer", 33);
    i0.ɵɵrepeaterCreate(2, DynamicAdmissionComponent_Conditional_6_Conditional_6_For_3_Template, 3, 8, "erp-form-sub-group", 34, _forTrack1, false, DynamicAdmissionComponent_Conditional_6_Conditional_6_ForEmpty_4_Template, 5, 0, "div", 35);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    let tmp_4_0;
    let tmp_5_0;
    let tmp_6_0;
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵproperty("sectionNumber", ctx_r1.activeSectionNumber())("title", ((tmp_4_0 = ctx_r1.section()) == null ? null : tmp_4_0.name) || "Admission details")("description", ((tmp_5_0 = ctx_r1.section()) == null ? null : tmp_5_0.description) || "Complete this section carefully. Your progress can be saved anytime.")("icon", ctx_r1.stepIconName(((tmp_6_0 = ctx_r1.section()) == null ? null : tmp_6_0.name) || ""))("completedFields", ctx_r1.completedRequiredFields())("totalFields", ctx_r1.requiredFieldTotal());
    i0.ɵɵadvance();
    i0.ɵɵrepeater(ctx_r1.visibleSubsections());
} }
function DynamicAdmissionComponent_Conditional_6_Conditional_7_Template(rf, ctx) { if (rf & 1) {
    const _r22 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "erp-form-action-bar", 25);
    i0.ɵɵlistener("back", function DynamicAdmissionComponent_Conditional_6_Conditional_7_Template_erp_form_action_bar_back_0_listener() { i0.ɵɵrestoreView(_r22); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.backAction()); })("saveDraft", function DynamicAdmissionComponent_Conditional_6_Conditional_7_Template_erp_form_action_bar_saveDraft_0_listener() { i0.ɵɵrestoreView(_r22); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.save()); })("primary", function DynamicAdmissionComponent_Conditional_6_Conditional_7_Template_erp_form_action_bar_primary_0_listener() { i0.ɵɵrestoreView(_r22); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.primaryAction()); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("saveStatus", ctx_r1.saveStatusText())("showBack", ctx_r1.activeIndex() > 0 || ctx_r1.reviewMode())("saving", ctx_r1.saving())("primaryLabel", ctx_r1.primaryActionLabel())("primaryDisabled", ctx_r1.reviewMode() && ctx_r1.applicationMissingRequired() > 0);
} }
function DynamicAdmissionComponent_Conditional_6_Template(rf, ctx) { if (rf & 1) {
    const _r6 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "erp-form-progress-header", 18);
    i0.ɵɵlistener("sectionsRequested", function DynamicAdmissionComponent_Conditional_6_Template_erp_form_progress_header_sectionsRequested_0_listener() { i0.ɵɵrestoreView(_r6); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.requestSections()); });
    i0.ɵɵconditionalCreate(1, DynamicAdmissionComponent_Conditional_6_Conditional_1_Template, 1, 5, "erp-form-action-bar", 19);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(2, "erp-admission-journey-rail", 20);
    i0.ɵɵlistener("sectionSelected", function DynamicAdmissionComponent_Conditional_6_Template_erp_admission_journey_rail_sectionSelected_2_listener($event) { i0.ɵɵrestoreView(_r6); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.goToStep($event)); })("allSectionsRequested", function DynamicAdmissionComponent_Conditional_6_Template_erp_admission_journey_rail_allSectionsRequested_2_listener() { i0.ɵɵrestoreView(_r6); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.requestSections()); });
    i0.ɵɵelementEnd();
    i0.ɵɵconditionalCreate(3, DynamicAdmissionComponent_Conditional_6_Conditional_3_Template, 2, 1, "p", 21);
    i0.ɵɵconditionalCreate(4, DynamicAdmissionComponent_Conditional_6_Conditional_4_Template, 2, 1, "p", 8);
    i0.ɵɵconditionalCreate(5, DynamicAdmissionComponent_Conditional_6_Conditional_5_Template, 11, 0, "section", 22)(6, DynamicAdmissionComponent_Conditional_6_Conditional_6_Template, 5, 7, "div", 23);
    i0.ɵɵconditionalCreate(7, DynamicAdmissionComponent_Conditional_6_Conditional_7_Template, 1, 5, "erp-form-action-bar", 19);
    i0.ɵɵelementStart(8, "erp-mobile-section-navigator-sheet", 24);
    i0.ɵɵlistener("closed", function DynamicAdmissionComponent_Conditional_6_Template_erp_mobile_section_navigator_sheet_closed_8_listener() { i0.ɵɵrestoreView(_r6); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.closeMobileNavigator()); })("sectionSelected", function DynamicAdmissionComponent_Conditional_6_Template_erp_mobile_section_navigator_sheet_sectionSelected_8_listener($event) { i0.ɵɵrestoreView(_r6); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.goToStep($event)); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const current_r10 = ctx;
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵproperty("eyebrow", ctx_r1.embedded() ? "" : "Student admission")("title", ctx_r1.embedded() ? "New student admission" : current_r10.name)("description", ctx_r1.embedded() ? current_r10.name : current_r10.description || "Complete each section to submit the application.")("currentSection", ctx_r1.activeIndex() + 1)("totalSections", current_r10.sections.length)("progress", ctx_r1.progressPercent())("progressLabel", ctx_r1.completedRequiredFields() + " of " + ctx_r1.requiredFieldTotal() + " required fields completed")("saveStatus", ctx_r1.saveStatusText());
    i0.ɵɵadvance();
    i0.ɵɵconditional(ctx_r1.embedded() ? 1 : -1);
    i0.ɵɵadvance();
    i0.ɵɵproperty("items", ctx_r1.sectionNavigationItems())("currentIndex", ctx_r1.activeIndex())("progress", ctx_r1.progressPercent())("currentProgress", ctx_r1.completedRequiredFields() + " of " + ctx_r1.requiredFieldTotal() + " required fields completed");
    i0.ɵɵadvance();
    i0.ɵɵconditional(ctx_r1.message() ? 3 : -1);
    i0.ɵɵadvance();
    i0.ɵɵconditional(ctx_r1.error() ? 4 : -1);
    i0.ɵɵadvance();
    i0.ɵɵconditional(ctx_r1.reviewMode() ? 5 : 6);
    i0.ɵɵadvance(2);
    i0.ɵɵconditional(!ctx_r1.embedded() ? 7 : -1);
    i0.ɵɵadvance();
    i0.ɵɵproperty("open", ctx_r1.mobileNavigatorOpen())("items", ctx_r1.sectionNavigationItems())("completedCount", ctx_r1.completedSectionCount())("totalCount", current_r10.sections.length);
} }
export class DynamicAdmissionComponent {
    embedded = input(false, ...(ngDevMode ? [{ debugName: "embedded" }] : /* istanbul ignore next */ []));
    admissionId = input('', ...(ngDevMode ? [{ debugName: "admissionId" }] : /* istanbul ignore next */ []));
    api = inject(ApiService);
    form = signal(null, ...(ngDevMode ? [{ debugName: "form" }] : /* istanbul ignore next */ []));
    admission = signal(null, ...(ngDevMode ? [{ debugName: "admission" }] : /* istanbul ignore next */ []));
    activeIndex = signal(0, ...(ngDevMode ? [{ debugName: "activeIndex" }] : /* istanbul ignore next */ []));
    optionsState = signal({}, ...(ngDevMode ? [{ debugName: "optionsState" }] : /* istanbul ignore next */ []));
    openSubsectionIds = signal(new Set(), ...(ngDevMode ? [{ debugName: "openSubsectionIds" }] : /* istanbul ignore next */ []));
    loading = signal(true, ...(ngDevMode ? [{ debugName: "loading" }] : /* istanbul ignore next */ []));
    saving = signal(false, ...(ngDevMode ? [{ debugName: "saving" }] : /* istanbul ignore next */ []));
    message = signal('', ...(ngDevMode ? [{ debugName: "message" }] : /* istanbul ignore next */ []));
    error = signal('', ...(ngDevMode ? [{ debugName: "error" }] : /* istanbul ignore next */ []));
    dirty = signal(false, ...(ngDevMode ? [{ debugName: "dirty" }] : /* istanbul ignore next */ []));
    mobileNavigatorOpen = signal(false, ...(ngDevMode ? [{ debugName: "mobileNavigatorOpen" }] : /* istanbul ignore next */ []));
    reviewMode = signal(false, ...(ngDevMode ? [{ debugName: "reviewMode" }] : /* istanbul ignore next */ []));
    choosingForm = signal(false, ...(ngDevMode ? [{ debugName: "choosingForm" }] : /* istanbul ignore next */ []));
    admissionSessions = signal([], ...(ngDevMode ? [{ debugName: "admissionSessions" }] : /* istanbul ignore next */ []));
    admissionLevels = signal([], ...(ngDevMode ? [{ debugName: "admissionLevels" }] : /* istanbul ignore next */ []));
    selectedAdmissionSessionId = '';
    selectedAdmissionLevelId = '';
    accessKey = '';
    ngOnInit() {
        this.initialize();
    }
    initialize() {
        if (this.admissionId()) {
            this.api.admission(this.admissionId()).subscribe({
                next: ({ item }) => this.acceptAdmission(item),
                error: (e) => this.fail(e),
            });
            return;
        }
        const stored = this.readStored();
        if (stored) {
            this.accessKey = stored.key;
            this.api
                .getAdmission(stored.id, stored.key)
                .subscribe({ next: ({ item }) => this.acceptAdmission(item), error: () => this.loadNew() });
        }
        else
            this.loadNew();
    }
    loadNew() {
        this.loading.set(true);
        this.form.set(null);
        forkJoin({
            sessions: this.api.publicOptions('academic'),
            levels: this.api.publicOptions('level'),
        }).subscribe({
            next: ({ sessions, levels }) => {
                this.admissionSessions.set(sessions.items);
                this.admissionLevels.set(levels.items);
                this.choosingForm.set(true);
                this.loading.set(false);
            },
            error: (e) => this.fail(e),
        });
    }
    beginAdmission() {
        if (!this.selectedAdmissionSessionId || !this.selectedAdmissionLevelId) {
            this.error.set('Select an academic session and admission level to continue.');
            return;
        }
        this.loading.set(true);
        this.choosingForm.set(false);
        this.error.set('');
        this.api
            .activeForm({
            purpose: 'admission',
            academicSessionId: this.selectedAdmissionSessionId,
            levelId: this.selectedAdmissionLevelId,
        })
            .subscribe({
            next: ({ item }) => {
                this.form.set(item);
                this.api.startAdmission(item._id).subscribe({
                    next: ({ item: admission, accessKey }) => {
                        this.accessKey = accessKey;
                        localStorage.setItem(this.storageKey(), JSON.stringify({ id: admission._id, key: accessKey }));
                        this.acceptAdmission(admission);
                    },
                    error: (e) => this.fail(e),
                });
            },
            error: (e) => {
                this.choosingForm.set(true);
                this.fail(e);
            },
        });
    }
    acceptAdmission(item) {
        this.admission.set(item);
        this.form.set(item.formSnapshot);
        const index = item.formSnapshot.sections.findIndex((section) => section.id === item.currentSectionId);
        this.activeIndex.set(Math.max(0, index));
        this.loading.set(false);
        this.dirty.set(false);
        this.loadSectionOptions();
        this.resetOpenSubsections();
    }
    section() {
        return this.form()?.sections[this.activeIndex()];
    }
    visibleSubsections() {
        return (this.section()?.subsections || []).filter((sub) => this.subsectionVisible(sub));
    }
    progressPercent() {
        const sections = this.form()?.sections || [];
        if (!sections.length)
            return 0;
        const progress = sections.reduce((sum, section) => {
            const total = this.totalFields(section);
            if (!total)
                return sum;
            return sum + Math.min(1, this.completedFields(section) / total);
        }, 0);
        return Math.round((progress / sections.length) * 100);
    }
    completedSectionCount() {
        return (this.form()?.sections || []).filter((section, index) => this.sectionState(index, section) === 'complete').length;
    }
    activeSectionNumber() {
        return String(this.activeIndex() + 1).padStart(2, '0');
    }
    completedFields(section = this.section()) {
        if (!section)
            return 0;
        let completed = 0;
        for (const sub of section.subsections) {
            if (!this.subsectionVisible(sub))
                continue;
            if (sub.isRepeatable) {
                const entries = this.entries(sub);
                for (const entry of entries) {
                    for (const field of sub.fields) {
                        if (field.isActive &&
                            this.visible(field, entry) &&
                            this.hasValue(this.value(field, entry))) {
                            completed += 1;
                        }
                    }
                }
            }
            else {
                for (const field of sub.fields) {
                    if (field.isActive && this.visible(field) && this.hasValue(this.value(field))) {
                        completed += 1;
                    }
                }
            }
        }
        return completed;
    }
    totalFields(section = this.section()) {
        if (!section)
            return 0;
        return section.subsections.reduce((count, sub) => count +
            (this.subsectionVisible(sub) ? sub.fields.filter((field) => field.isActive).length : 0), 0);
    }
    requiredMissingFields(section = this.section()) {
        if (!section)
            return 0;
        let missing = 0;
        for (const sub of section.subsections) {
            if (!this.subsectionVisible(sub))
                continue;
            const entries = sub.isRepeatable ? this.entries(sub) : [this.admission()?.responses || {}];
            for (const entry of entries.length ? entries : [{}]) {
                for (const field of sub.fields) {
                    if (field.isActive &&
                        field.isRequired &&
                        this.visible(field, entry) &&
                        !this.hasValue(entry[field.id])) {
                        missing += 1;
                    }
                }
            }
        }
        return missing;
    }
    requiredFieldTotal(section = this.section()) {
        if (!section)
            return 0;
        let total = 0;
        for (const sub of section.subsections) {
            if (!this.subsectionVisible(sub))
                continue;
            const multiplier = sub.isRepeatable ? Math.max(1, this.entries(sub).length) : 1;
            total += sub.fields.filter((field) => field.isActive && field.isRequired).length * multiplier;
        }
        return total;
    }
    completedRequiredFields(section = this.section()) {
        return Math.max(0, this.requiredFieldTotal(section) - this.requiredMissingFields(section));
    }
    subsectionRequiredMissing(sub) {
        let missing = 0;
        const entries = sub.isRepeatable ? this.entries(sub) : [this.admission()?.responses || {}];
        for (const entry of entries.length ? entries : [{}]) {
            for (const field of sub.fields) {
                if (field.isActive &&
                    field.isRequired &&
                    this.visible(field, entry) &&
                    !this.hasValue(entry[field.id])) {
                    missing += 1;
                }
            }
        }
        return missing;
    }
    sectionStatus(index, section) {
        const currentSection = section || this.form()?.sections[index];
        if (!currentSection)
            return 'Not started';
        const missing = this.requiredMissingFields(currentSection);
        if (index < this.activeIndex())
            return missing ? `${missing} required` : 'Complete';
        if (index === this.activeIndex())
            return missing ? `${missing} required` : 'In progress';
        return 'Not started';
    }
    sectionState(index, section) {
        const currentSection = section || this.form()?.sections[index];
        if (index === this.activeIndex())
            return 'current';
        if (currentSection &&
            this.requiredMissingFields(currentSection) &&
            index < this.activeIndex()) {
            return 'attention';
        }
        if (index < this.activeIndex())
            return 'complete';
        return 'upcoming';
    }
    sectionNavigationItems() {
        return (this.form()?.sections || []).map((section, index) => ({
            id: section.id,
            index,
            title: section.name,
            status: this.sectionStatus(index, section),
            state: this.sectionState(index, section),
        }));
    }
    requestSections() {
        this.openMobileNavigator();
    }
    openMobileNavigator() {
        this.mobileNavigatorOpen.set(true);
    }
    closeMobileNavigator() {
        this.mobileNavigatorOpen.set(false);
    }
    saveStatusText() {
        if (this.saving())
            return 'Saving...';
        if (this.dirty())
            return 'Unsaved changes';
        return this.message() || 'Draft saved just now';
    }
    primaryActionLabel() {
        if (this.reviewMode())
            return this.embedded() ? 'Save Student Record' : 'Submit Application';
        const finalSection = this.activeIndex() === (this.form()?.sections.length || 1) - 1;
        return finalSection ? 'Review Application' : 'Save & Continue';
    }
    primaryAction() {
        if (this.reviewMode()) {
            if (!this.applicationMissingRequired())
                this.submit();
            return;
        }
        const missing = this.requiredMissingFields();
        if (missing) {
            this.error.set(`Complete ${missing} required field${missing === 1 ? '' : 's'} to continue.`);
            const firstIncomplete = this.visibleSubsections().find((sub) => this.subsectionRequiredMissing(sub) > 0);
            if (firstIncomplete)
                this.openSubsectionIds.set(new Set([firstIncomplete.id]));
            return;
        }
        this.error.set('');
        const finalSection = this.activeIndex() === (this.form()?.sections.length || 1) - 1;
        if (finalSection)
            this.reviewMode.set(true);
        else
            this.save(true);
    }
    applicationMissingRequired() {
        return (this.form()?.sections || []).reduce((total, section) => total + this.requiredMissingFields(section), 0);
    }
    backAction() {
        if (this.reviewMode()) {
            this.reviewMode.set(false);
            return;
        }
        this.previous();
    }
    value(field, entry) {
        return (entry || this.admission()?.responses || {})[field.id];
    }
    setValue(field, value, entry, entryIndex) {
        const normalizedValue = field.type === 'dropdown' && Array.isArray(value) ? (value[0] ?? '') : value;
        if (entry)
            entry[field.id] = normalizedValue;
        else {
            const admission = this.admission();
            if (admission)
                admission.responses[field.id] = normalizedValue;
        }
        this.admission.update((v) => (v ? structuredClone(v) : v));
        this.dirty.set(true);
        this.message.set('');
        if (field.dataSource?.masterTypeSlug === 'course')
            this.applyCourseAcademicYear(String(normalizedValue || ''));
        if (field.dataSource?.masterTypeSlug === 'fee-type')
            this.applyFeeTypeChoice(field, String(normalizedValue || ''));
        this.reloadDependents(field.id, entry, entryIndex);
    }
    entries(sub) {
        return this.admission()?.repeatableResponses[sub.id] || [];
    }
    addEntry(sub) {
        const admission = this.admission();
        if (!admission)
            return;
        const entries = (admission.repeatableResponses[sub.id] ||= []);
        if (sub.maxEntries && entries.length >= sub.maxEntries)
            return;
        const entry = {};
        for (const field of sub.fields)
            if (field.defaultValue != null)
                entry[field.id] = field.defaultValue;
        entries.push(entry);
        this.admission.set(structuredClone(admission));
        this.dirty.set(true);
        this.message.set('');
        this.loadSubsectionOptions(sub, entries.length - 1, entry);
    }
    removeEntry(sub, index) {
        const admission = this.admission();
        if (!admission)
            return;
        admission.repeatableResponses[sub.id]?.splice(index, 1);
        this.admission.set(structuredClone(admission));
        this.dirty.set(true);
        this.message.set('');
    }
    matches(condition, values) {
        if (!condition)
            return true;
        const current = values[condition.fieldId];
        const candidates = this.valuesWithMasterLabels(condition.fieldId, current);
        const expected = this.normalizedConditionValue(condition.value);
        if (condition.operator === 'not-equals')
            return !candidates.some((value) => this.normalizedConditionValue(value) === expected);
        if (condition.operator === 'contains')
            return candidates.some((value) => this.normalizedConditionValue(value).includes(expected));
        if (condition.operator === 'is-empty')
            return current == null || current === '' || (Array.isArray(current) && !current.length);
        if (condition.operator === 'is-not-empty')
            return current != null && current !== '' && (!Array.isArray(current) || current.length > 0);
        return candidates.some((value) => this.normalizedConditionValue(value) === expected);
    }
    visible(field, entry) {
        const values = entry || this.admission()?.responses || {};
        return (field.isActive &&
            (this.matches(field.visibilityCondition, values) ||
                (field.dataSource?.masterTypeSlug === 'country' && this.foreignSelected(values))));
    }
    subsectionVisible(subsection) {
        const values = this.admission()?.responses || {};
        return (this.matches(subsection.visibilityCondition, values) ||
            (this.foreignSelected(values) &&
                subsection.fields.some((field) => field.isActive && field.dataSource?.masterTypeSlug === 'country')));
    }
    fieldOptions(field, index) {
        return this.optionsState()[this.optionKey(field, index)] || [];
    }
    loadOptions(field, entry, index, search = '') {
        if (!field.dataSource)
            return;
        const parent = field.dataSource.parentFieldId
            ? (entry || this.admission()?.responses || {})[field.dataSource.parentFieldId]
            : undefined;
        if (field.dataSource.parentFieldId && !parent) {
            this.optionsState.update((v) => ({ ...v, [this.optionKey(field, index)]: [] }));
            return;
        }
        this.api
            .publicOptions(field.dataSource.masterTypeSlug, parent ? String(parent) : undefined, search)
            .subscribe(({ items }) => {
            this.optionsState.update((v) => ({ ...v, [this.optionKey(field, index)]: items }));
            if (field.dataSource?.masterTypeSlug === 'course') {
                const selected = (entry || this.admission()?.responses || {})[field.id];
                if (selected)
                    this.applyCourseAcademicYear(String(selected), false);
            }
            if (field.dataSource?.masterTypeSlug === 'fee-type') {
                const selected = (entry || this.admission()?.responses || {})[field.id];
                if (selected)
                    this.applyFeeTypeChoice(field, String(selected), false);
            }
        });
    }
    searchOptions(field, query, entry, index) {
        this.loadOptions(field, entry, index, query);
    }
    upload(field, file, entry, index) {
        const admission = this.admission();
        if (!admission)
            return;
        const maxSizeMb = field.uploadConfig?.maxSizeMb || 5;
        if (file.size > maxSizeMb * 1024 * 1024) {
            this.error.set(`${field.name} must be ${maxSizeMb} MB or smaller.`);
            return;
        }
        if (!this.allowedUploadMimeTypes(field).includes(file.type)) {
            this.error.set(`The selected file type is not allowed for ${field.name}.`);
            return;
        }
        this.error.set('');
        const request = this.admissionId()
            ? this.api.uploadAdminAdmission(admission._id, field.id, file)
            : this.api.upload(admission._id, this.accessKey, field.id, file);
        request.subscribe({
            next: ({ file: stored }) => this.setValue(field, stored, entry, index),
            error: (e) => this.fail(e),
        });
    }
    acceptFor(field) {
        const categories = field.uploadConfig?.allowedTypes ||
            (field.type === 'file' ? ['image', 'pdf', 'word'] : ['image']);
        return categories
            .flatMap((type) => type === 'image'
            ? ['image/jpeg', 'image/png', 'image/webp']
            : type === 'pdf'
                ? ['application/pdf']
                : [
                    'application/msword',
                    'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
                ])
            .join(',');
    }
    save(next = false) {
        const admission = this.admission(), section = this.section();
        if (!admission || !section)
            return;
        this.saving.set(true);
        admission.currentSectionId = section.id;
        const request = this.admissionId()
            ? this.api.updateAdmission(admission)
            : this.api.saveAdmission(admission, this.accessKey);
        request.subscribe({
            next: ({ item }) => {
                this.acceptAdmission(item);
                this.message.set('Progress saved.');
                this.saving.set(false);
                if (next && this.activeIndex() < (this.form()?.sections.length || 1) - 1) {
                    this.activeIndex.update((v) => v + 1);
                    const current = this.section();
                    if (current)
                        item.currentSectionId = current.id;
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                    this.loadSectionOptions();
                    this.resetOpenSubsections();
                }
            },
            error: (e) => {
                this.fail(e);
                this.saving.set(false);
            },
        });
    }
    previous() {
        if (this.activeIndex() > 0) {
            this.activeIndex.update((v) => v - 1);
            this.loadSectionOptions();
            this.resetOpenSubsections();
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    }
    submit() {
        const admission = this.admission();
        if (!admission)
            return;
        this.saving.set(true);
        const saveRequest = this.admissionId()
            ? this.api.updateAdmission(admission)
            : this.api.saveAdmission(admission, this.accessKey);
        saveRequest.subscribe({
            next: () => (this.admissionId()
                ? this.api.submitAdminAdmission(admission._id)
                : this.api.submitAdmission(admission._id, this.accessKey)).subscribe({
                next: ({ item }) => {
                    this.admission.set(item);
                    this.message.set(this.admissionId()
                        ? 'Student record updated successfully.'
                        : 'Application submitted successfully.');
                    localStorage.removeItem(this.storageKey());
                    this.saving.set(false);
                },
                error: (e) => {
                    this.fail(e);
                    this.saving.set(false);
                },
            }),
            error: (e) => {
                this.fail(e);
                this.saving.set(false);
            },
        });
    }
    newApplication() {
        localStorage.removeItem(this.storageKey());
        location.reload();
    }
    loadSectionOptions() {
        const section = this.section();
        for (const sub of section?.subsections || []) {
            if (sub.isRepeatable)
                this.entries(sub).forEach((entry, index) => this.loadSubsectionOptions(sub, index, entry));
            else
                this.loadSubsectionOptions(sub, undefined, undefined);
        }
        const controllingIds = new Set((section?.subsections || [])
            .flatMap((subsection) => [
            subsection.visibilityCondition?.fieldId,
            ...subsection.fields.map((field) => field.visibilityCondition?.fieldId),
        ])
            .filter((fieldId) => Boolean(fieldId)));
        for (const field of this.allFormFields())
            if (controllingIds.has(field.id) && field.dataSource)
                this.loadOptions(field);
    }
    goToStep(index) {
        if (index === this.activeIndex())
            return;
        this.activeIndex.set(index);
        this.reviewMode.set(false);
        this.closeMobileNavigator();
        this.loadSectionOptions();
        this.resetOpenSubsections();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    stepStatus(index) {
        if (index < this.activeIndex())
            return 'Complete';
        if (index === this.activeIndex())
            return 'In progress';
        return 'Not started';
    }
    stepIconName(name) {
        const normalized = name.toLowerCase();
        if (normalized.includes('qualification') || normalized.includes('education'))
            return 'graduation';
        if (normalized.includes('document'))
            return 'document';
        if (normalized.includes('address'))
            return 'address';
        if (normalized.includes('payment') || normalized.includes('fee'))
            return 'payment';
        if (normalized.includes('review') || normalized.includes('submit'))
            return 'review';
        return 'personal';
    }
    fieldCount(sub) {
        return sub.fields.filter((field) => field.isActive).length;
    }
    requiredFieldCount(sub) {
        return sub.fields.filter((field) => field.isActive && field.isRequired).length;
    }
    hasValue(value) {
        return (value !== null &&
            value !== undefined &&
            value !== '' &&
            (!Array.isArray(value) || value.length > 0));
    }
    subsectionOpen(id) {
        return this.openSubsectionIds().has(id);
    }
    toggleSubsection(id) {
        this.openSubsectionIds.update((ids) => {
            const next = new Set(ids);
            if (next.has(id))
                next.delete(id);
            else
                next.add(id);
            return next;
        });
    }
    resetOpenSubsections() {
        const visible = this.visibleSubsections();
        const first = visible.find((sub) => this.subsectionRequiredMissing(sub) > 0)?.id || visible[0]?.id;
        this.openSubsectionIds.set(new Set(first ? [first] : []));
    }
    loadSubsectionOptions(sub, index, entry) {
        for (const field of sub.fields)
            if (field.dataSource)
                this.loadOptions(field, entry, index);
    }
    reloadDependents(parentFieldId, entry, index) {
        for (const sub of this.section()?.subsections || [])
            for (const field of sub.fields)
                if (field.dataSource?.parentFieldId === parentFieldId) {
                    this.setValue(field, '', entry, index);
                    this.loadOptions(field, entry, index);
                }
    }
    optionKey(field, index) {
        return `${field.id}:${index ?? 'single'}`;
    }
    applyCourseAcademicYear(courseId, useConfiguredDefault = true) {
        const courseField = (this.form()?.sections || [])
            .flatMap((section) => section.subsections)
            .flatMap((subsection) => subsection.fields)
            .find((field) => field.dataSource?.masterTypeSlug === 'course');
        if (!courseField)
            return;
        const course = Object.entries(this.optionsState())
            .filter(([key]) => key.startsWith(`${courseField.id}:`))
            .flatMap(([, options]) => options)
            .find((option) => option._id === courseId);
        if (!course)
            return;
        const duration = Math.max(1, Number(course.metadata?.['durationYears'] || 1));
        const defaultYear = Math.min(duration, Math.max(1, Number(course.metadata?.['defaultAcademicYear'] || 1)));
        const yearField = (this.form()?.sections || [])
            .flatMap((section) => section.subsections)
            .flatMap((subsection) => subsection.fields)
            .find((candidate) => [
            'current academic year',
            'current year',
            'admission year of study',
            'year of study',
        ].includes(candidate.name.trim().toLocaleLowerCase()));
        const admission = this.admission();
        if (!yearField || !admission)
            return;
        yearField.type = 'dropdown';
        yearField.options = Array.from({ length: duration }, (_, index) => ({
            label: `Year ${index + 1}`,
            value: String(index + 1),
        }));
        const savedYear = Number(admission.responses[yearField.id] || admission.currentAcademicYear);
        const selectedYear = !useConfiguredDefault &&
            Number.isInteger(savedYear) &&
            savedYear >= 1 &&
            savedYear <= duration
            ? savedYear
            : defaultYear;
        admission.responses[yearField.id] = String(selectedYear);
        admission.currentAcademicYear = selectedYear;
        this.form.update((form) => (form ? structuredClone(form) : form));
        this.admission.set(structuredClone(admission));
    }
    applyFeeTypeChoice(field, feeTypeId, markDirty = true) {
        const feeType = Object.entries(this.optionsState())
            .filter(([key]) => key.startsWith(`${field.id}:`))
            .flatMap(([, options]) => options)
            .find((option) => option._id === feeTypeId);
        if (!feeType)
            return;
        const configured = feeType.metadata?.['periodType'];
        const mode = configured === 'year' || configured === 'semester'
            ? configured
            : /semester|sem/i.test(feeType.name)
                ? 'semester'
                : /year|annual/i.test(feeType.name)
                    ? 'year'
                    : null;
        const admission = this.admission();
        if (!mode || !admission)
            return;
        admission.feeFrequencyChoice = mode;
        admission.feeFrequency = mode;
        admission.feeTypeId = feeType._id;
        admission.feeTypeName = feeType.name;
        this.admission.set(structuredClone(admission));
        if (markDirty)
            this.dirty.set(true);
    }
    foreignSelected(values) {
        return this.allFormFields()
            .filter((field) => ['domicile', 'student-type'].includes(field.dataSource?.masterTypeSlug || ''))
            .some((field) => this.valuesWithMasterLabels(field.id, values[field.id]).some((value) => /foreign|international|nri/i.test(String(value || ''))));
    }
    valuesWithMasterLabels(fieldId, value) {
        const values = Array.isArray(value) ? value : [value];
        const options = Object.entries(this.optionsState())
            .filter(([key]) => key.startsWith(`${fieldId}:`))
            .flatMap(([, items]) => items);
        return values.flatMap((item) => {
            const option = options.find((candidate) => candidate._id === String(item ?? ''));
            return option ? [item, option.name, option.label, option.metadata?.['code']] : [item];
        });
    }
    normalizedConditionValue(value) {
        return String(value ?? '')
            .trim()
            .toLocaleLowerCase();
    }
    allFormFields() {
        return (this.form()?.sections || [])
            .flatMap((section) => section.subsections)
            .flatMap((subsection) => subsection.fields);
    }
    allowedUploadMimeTypes(field) {
        return this.acceptFor(field).split(',');
    }
    readStored() {
        try {
            return JSON.parse(localStorage.getItem(this.storageKey()) || 'null');
        }
        catch {
            return null;
        }
    }
    storageKey() {
        return this.embedded() ? 'taskly_admin_admission' : 'taskly_admission';
    }
    fail(error) {
        this.error.set(error.error?.errors?.map((e) => e.message).join(' ') ||
            error.error?.message ||
            'Something went wrong.');
        this.loading.set(false);
    }
    static ɵfac = function DynamicAdmissionComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || DynamicAdmissionComponent)(); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: DynamicAdmissionComponent, selectors: [["erp-dynamic-admission"]], hostVars: 2, hostBindings: function DynamicAdmissionComponent_HostBindings(rf, ctx) { if (rf & 2) {
            i0.ɵɵclassProp("embedded", ctx.embedded());
        } }, inputs: { embedded: [1, "embedded"], admissionId: [1, "admissionId"] }, decls: 7, vars: 4, consts: [[1, "erp-admission-portal-header"], [1, "erp-admission-page"], [1, "erp-card", "erp-loading-state"], [1, "erp-card", "erp-card--padded", "erp-admission-state"], [1, "erp-card", "erp-card--padded", "erp-admission-submitted"], ["routerLink", "/", 1, "erp-admission-brand"], [1, "erp-spinner"], [1, "erp-page-eyebrow"], [1, "erp-notice", "erp-notice--error"], [1, "erp-form-grid"], [1, "erp-control", 3, "ngModelChange", "ngModel"], ["value", ""], [3, "value"], ["type", "button", 1, "erp-button", "erp-button--primary", 3, "click"], ["lucideCheck", "", "size", "28", "aria-hidden", "true"], [1, "erp-admission-submitted__actions"], [1, "erp-button", "erp-button--secondary", 3, "routerLink"], ["type", "button", 1, "erp-button", "erp-button--primary"], [3, "sectionsRequested", "eyebrow", "title", "description", "currentSection", "totalSections", "progress", "progressLabel", "saveStatus"], [3, "saveStatus", "showBack", "saving", "primaryLabel", "primaryDisabled"], [3, "sectionSelected", "allSectionsRequested", "items", "currentIndex", "progress", "currentProgress"], [1, "erp-notice", "erp-notice--success"], ["aria-labelledby", "admission-review-title", 1, "erp-admission-review"], [1, "erp-guided-form-workspace"], [3, "closed", "sectionSelected", "open", "items", "completedCount", "totalCount"], [3, "back", "saveDraft", "primary", "saveStatus", "showBack", "saving", "primaryLabel", "primaryDisabled"], ["id", "admission-review-title"], [1, "erp-admission-review__list"], [3, "erp-admission-review__item--attention"], [1, "erp-admission-review__status"], ["lucideAlertTriangle", "", "size", "18", "aria-hidden", "true"], ["lucideCheck", "", "size", "18", "aria-hidden", "true"], ["type", "button", 1, "erp-button", "erp-button--secondary", "erp-button--compact", 3, "click"], [3, "sectionNumber", "title", "description", "icon", "completedFields", "totalFields"], [3, "title", "description", "fieldCount", "requiredCount", "remainingRequired", "complete", "open"], [1, "erp-empty-state", "erp-empty-state--compact"], [3, "toggled", "title", "description", "fieldCount", "requiredCount", "remainingRequired", "complete", "open"], [1, "erp-field-grid"], [1, "erp-repeat-group"], [1, "erp-empty-repeat"], ["type", "button", 1, "erp-button", "erp-button--secondary", 3, "click"], [1, "erp-repeat-group__header"], ["type", "button", 1, "erp-button", "erp-button--danger", "erp-button--compact", 3, "click"], [3, "field", "modelValue", "options", "entryKey"], [3, "modelChanged", "optionSearch", "fileSelected", "uploadRemoved", "field", "modelValue", "options", "entryKey"]], template: function DynamicAdmissionComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵconditionalCreate(0, DynamicAdmissionComponent_Conditional_0_Template, 9, 0, "header", 0);
            i0.ɵɵelementStart(1, "main", 1);
            i0.ɵɵconditionalCreate(2, DynamicAdmissionComponent_Conditional_2_Template, 4, 0, "section", 2)(3, DynamicAdmissionComponent_Conditional_3_Template, 27, 3, "section", 3)(4, DynamicAdmissionComponent_Conditional_4_Template, 5, 1, "section", 3)(5, DynamicAdmissionComponent_Conditional_5_Template, 11, 4, "section", 4)(6, DynamicAdmissionComponent_Conditional_6_Template, 9, 21);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            let tmp_2_0;
            i0.ɵɵconditional(!ctx.embedded() ? 0 : -1);
            i0.ɵɵadvance();
            i0.ɵɵclassProp("erp-admission-page--embedded", ctx.embedded());
            i0.ɵɵadvance();
            i0.ɵɵconditional(ctx.loading() ? 2 : ctx.choosingForm() ? 3 : ctx.error() && !ctx.form() ? 4 : ((tmp_2_0 = ctx.admission()) == null ? null : tmp_2_0.status) !== "draft" && !ctx.admissionId() ? 5 : (tmp_2_0 = ctx.form()) ? 6 : -1, tmp_2_0);
        } }, dependencies: [FormsModule, i1.NgSelectOption, i1.ɵNgSelectMultipleOption, i1.SelectControlValueAccessor, i1.NgControlStatus, i1.NgModel, RouterLink,
            LucideCheck,
            LucideAlertTriangle,
            AdmissionJourneyRailComponent,
            DynamicFieldRendererComponent,
            DynamicSectionRendererComponent,
            FormActionBarComponent,
            FormProgressHeaderComponent,
            FormSubGroupComponent,
            MobileSectionNavigatorSheetComponent], encapsulation: 2, changeDetection: 0 });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(DynamicAdmissionComponent, [{
        type: Component,
        args: [{ selector: 'erp-dynamic-admission', imports: [
                    FormsModule,
                    RouterLink,
                    LucideCheck,
                    LucideAlertTriangle,
                    AdmissionJourneyRailComponent,
                    DynamicFieldRendererComponent,
                    DynamicSectionRendererComponent,
                    FormActionBarComponent,
                    FormProgressHeaderComponent,
                    FormSubGroupComponent,
                    MobileSectionNavigatorSheetComponent,
                ], changeDetection: ChangeDetectionStrategy.OnPush, host: { '[class.embedded]': 'embedded()' }, template: "@if (!embedded()) {\n  <header class=\"erp-admission-portal-header\">\n    <a routerLink=\"/\" class=\"erp-admission-brand\">\n      <span>GEU</span>\n      <div><strong>GEU ERP</strong><small>Online Admission</small></div>\n    </a>\n  </header>\n}\n\n<main class=\"erp-admission-page\" [class.erp-admission-page--embedded]=\"embedded()\">\n  @if (loading()) {\n    <section class=\"erp-card erp-loading-state\">\n      <div class=\"erp-spinner\"></div>\n      <p>Preparing your admission form...</p>\n    </section>\n  } @else if (choosingForm()) {\n    <section class=\"erp-card erp-card--padded erp-admission-state\">\n      <span class=\"erp-page-eyebrow\">Start application</span>\n      <h1>Choose your admission form</h1>\n      <p>The session and level select the correct published application, such as UG or PG.</p>\n      @if (error()) {\n        <p class=\"erp-notice erp-notice--error\">{{ error() }}</p>\n      }\n      <div class=\"erp-form-grid\">\n        <label>\n          <span>Academic session *</span>\n          <select class=\"erp-control\" [(ngModel)]=\"selectedAdmissionSessionId\">\n            <option value=\"\">Select session</option>\n            @for (item of admissionSessions(); track item._id) {\n              <option [value]=\"item._id\">{{ item.name }}</option>\n            }\n          </select>\n        </label>\n        <label>\n          <span>Admission level *</span>\n          <select class=\"erp-control\" [(ngModel)]=\"selectedAdmissionLevelId\">\n            <option value=\"\">Select UG, PG or another level</option>\n            @for (item of admissionLevels(); track item._id) {\n              <option [value]=\"item._id\">{{ item.name }}</option>\n            }\n          </select>\n        </label>\n      </div>\n      <button class=\"erp-button erp-button--primary\" type=\"button\" (click)=\"beginAdmission()\">\n        Continue\n      </button>\n    </section>\n  } @else if (error() && !form()) {\n    <section class=\"erp-card erp-card--padded erp-admission-state\">\n      <h1>Admission form unavailable</h1>\n      <p>{{ error() }}</p>\n    </section>\n  } @else if (admission()?.status !== 'draft' && !admissionId()) {\n    <section class=\"erp-card erp-card--padded erp-admission-submitted\">\n      <span><svg lucideCheck size=\"28\" aria-hidden=\"true\"></svg></span>\n      <h1>\n        {{\n          admission()?.status === 'approved'\n            ? 'Student approved'\n            : embedded()\n              ? 'Student sent for approval'\n              : 'Application submitted'\n        }}\n      </h1>\n      <p>\n        @if (embedded()) {\n          Student <strong>{{ admission()?.studentId }}</strong>\n          {{\n            admission()?.status === 'approved'\n              ? 'is approved.'\n              : 'is now available in Not Approved Students.'\n          }}\n        } @else {\n          Your admission has been submitted successfully. Your Student ID is\n          <strong>{{ admission()?.studentId }}</strong\n          >.\n        }\n      </p>\n      <div class=\"erp-admission-submitted__actions\">\n        @if (embedded()) {\n          <a\n            class=\"erp-button erp-button--secondary\"\n            [routerLink]=\"\n              admission()?.status === 'approved'\n                ? '/admin/admissions/approved'\n                : '/admin/admissions/not-approved'\n            \"\n          >\n            Open\n            {{ admission()?.status === 'approved' ? 'Approved Students' : 'Not Approved Students' }}\n          </a>\n        }\n        @if (!admissionId()) {\n          <button class=\"erp-button erp-button--primary\" type=\"button\" (click)=\"newApplication()\">\n            Start another admission\n          </button>\n        }\n      </div>\n    </section>\n  } @else if (form(); as current) {\n    <erp-form-progress-header\n      [eyebrow]=\"embedded() ? '' : 'Student admission'\"\n      [title]=\"embedded() ? 'New student admission' : current.name\"\n      [description]=\"\n        embedded()\n          ? current.name\n          : current.description || 'Complete each section to submit the application.'\n      \"\n      [currentSection]=\"activeIndex() + 1\"\n      [totalSections]=\"current.sections.length\"\n      [progress]=\"progressPercent()\"\n      [progressLabel]=\"\n        completedRequiredFields() + ' of ' + requiredFieldTotal() + ' required fields completed'\n      \"\n      [saveStatus]=\"saveStatusText()\"\n      (sectionsRequested)=\"requestSections()\"\n    >\n      @if (embedded()) {\n        <erp-form-action-bar\n          [saveStatus]=\"saveStatusText()\"\n          [showBack]=\"activeIndex() > 0 || reviewMode()\"\n          [saving]=\"saving()\"\n          [primaryLabel]=\"primaryActionLabel()\"\n          [primaryDisabled]=\"reviewMode() && applicationMissingRequired() > 0\"\n          (back)=\"backAction()\"\n          (saveDraft)=\"save()\"\n          (primary)=\"primaryAction()\"\n        />\n      }\n    </erp-form-progress-header>\n\n    <erp-admission-journey-rail\n      [items]=\"sectionNavigationItems()\"\n      [currentIndex]=\"activeIndex()\"\n      [progress]=\"progressPercent()\"\n      [currentProgress]=\"\n        completedRequiredFields() + ' of ' + requiredFieldTotal() + ' required fields completed'\n      \"\n      (sectionSelected)=\"goToStep($event)\"\n      (allSectionsRequested)=\"requestSections()\"\n    />\n\n    @if (message()) {\n      <p class=\"erp-notice erp-notice--success\">{{ message() }}</p>\n    }\n    @if (error()) {\n      <p class=\"erp-notice erp-notice--error\">{{ error() }}</p>\n    }\n\n    @if (reviewMode()) {\n      <section class=\"erp-admission-review\" aria-labelledby=\"admission-review-title\">\n        <header>\n          <span>Final review</span>\n          <h2 id=\"admission-review-title\">Review your application</h2>\n          <p>Check every configured section before submitting the application.</p>\n        </header>\n        <div class=\"erp-admission-review__list\">\n          @for (item of sectionNavigationItems(); track item.id) {\n            <article\n              [class.erp-admission-review__item--attention]=\"\n                requiredMissingFields(current.sections[item.index]) > 0\n              \"\n            >\n              <span class=\"erp-admission-review__status\">\n                @if (requiredMissingFields(current.sections[item.index]) > 0) {\n                  <svg lucideAlertTriangle size=\"18\" aria-hidden=\"true\"></svg>\n                } @else {\n                  <svg lucideCheck size=\"18\" aria-hidden=\"true\"></svg>\n                }\n              </span>\n              <div>\n                <strong>{{ item.title }}</strong>\n                <small>\n                  @if (requiredMissingFields(current.sections[item.index]) > 0) {\n                    {{ requiredMissingFields(current.sections[item.index]) }} required fields\n                    pending\n                  } @else {\n                    Complete\n                  }\n                </small>\n              </div>\n              <button\n                class=\"erp-button erp-button--secondary erp-button--compact\"\n                type=\"button\"\n                (click)=\"goToStep(item.index)\"\n              >\n                Edit\n              </button>\n            </article>\n          }\n        </div>\n      </section>\n    } @else {\n      <div class=\"erp-guided-form-workspace\">\n        <erp-dynamic-section-renderer\n          [sectionNumber]=\"activeSectionNumber()\"\n          [title]=\"section()?.name || 'Admission details'\"\n          [description]=\"\n            section()?.description ||\n            'Complete this section carefully. Your progress can be saved anytime.'\n          \"\n          [icon]=\"stepIconName(section()?.name || '')\"\n          [completedFields]=\"completedRequiredFields()\"\n          [totalFields]=\"requiredFieldTotal()\"\n        >\n          @for (sub of visibleSubsections(); track sub.id) {\n            <erp-form-sub-group\n              [title]=\"sub.name\"\n              [description]=\"sub.description\"\n              [fieldCount]=\"fieldCount(sub)\"\n              [requiredCount]=\"requiredFieldCount(sub)\"\n              [remainingRequired]=\"subsectionRequiredMissing(sub)\"\n              [complete]=\"requiredFieldCount(sub) > 0 && subsectionRequiredMissing(sub) === 0\"\n              [open]=\"subsectionOpen(sub.id)\"\n              (toggled)=\"toggleSubsection(sub.id)\"\n            >\n              @if (sub.isRepeatable) {\n                @for (entry of entries(sub); track $index; let entryIndex = $index) {\n                  <article class=\"erp-repeat-group\">\n                    <div class=\"erp-repeat-group__header\">\n                      <strong>{{ sub.name }} {{ entryIndex + 1 }}</strong>\n                      <button\n                        class=\"erp-button erp-button--danger erp-button--compact\"\n                        type=\"button\"\n                        (click)=\"removeEntry(sub, entryIndex)\"\n                      >\n                        Remove\n                      </button>\n                    </div>\n                    <div class=\"erp-field-grid\">\n                      @for (field of sub.fields; track field.id) {\n                        @if (visible(field, entry)) {\n                          <erp-dynamic-field-renderer\n                            [field]=\"field\"\n                            [modelValue]=\"value(field, entry)\"\n                            [options]=\"fieldOptions(field, entryIndex)\"\n                            [entryKey]=\"sub.id + '-' + entryIndex\"\n                            (modelChanged)=\"setValue(field, $event, entry, entryIndex)\"\n                            (optionSearch)=\"searchOptions(field, $event, entry, entryIndex)\"\n                            (fileSelected)=\"upload(field, $event, entry, entryIndex)\"\n                            (uploadRemoved)=\"setValue(field, '', entry, entryIndex)\"\n                          />\n                        }\n                      }\n                    </div>\n                  </article>\n                } @empty {\n                  <p class=\"erp-empty-repeat\">No records added. Add {{ sub.name }} to begin.</p>\n                }\n                <button\n                  class=\"erp-button erp-button--secondary\"\n                  type=\"button\"\n                  (click)=\"addEntry(sub)\"\n                >\n                  Add {{ sub.name }}\n                </button>\n              } @else {\n                <div class=\"erp-field-grid\">\n                  @for (field of sub.fields; track field.id) {\n                    @if (visible(field)) {\n                      <erp-dynamic-field-renderer\n                        [field]=\"field\"\n                        [modelValue]=\"value(field)\"\n                        [options]=\"fieldOptions(field)\"\n                        [entryKey]=\"sub.id\"\n                        (modelChanged)=\"setValue(field, $event)\"\n                        (optionSearch)=\"searchOptions(field, $event)\"\n                        (fileSelected)=\"upload(field, $event)\"\n                        (uploadRemoved)=\"setValue(field, '')\"\n                      />\n                    }\n                  }\n                </div>\n              }\n            </erp-form-sub-group>\n          } @empty {\n            <div class=\"erp-empty-state erp-empty-state--compact\">\n              <strong>No fields configured</strong>\n              <p>This section does not contain any visible fields.</p>\n            </div>\n          }\n        </erp-dynamic-section-renderer>\n      </div>\n    }\n\n    @if (!embedded()) {\n      <erp-form-action-bar\n        [saveStatus]=\"saveStatusText()\"\n        [showBack]=\"activeIndex() > 0 || reviewMode()\"\n        [saving]=\"saving()\"\n        [primaryLabel]=\"primaryActionLabel()\"\n        [primaryDisabled]=\"reviewMode() && applicationMissingRequired() > 0\"\n        (back)=\"backAction()\"\n        (saveDraft)=\"save()\"\n        (primary)=\"primaryAction()\"\n      />\n    }\n\n    <erp-mobile-section-navigator-sheet\n      [open]=\"mobileNavigatorOpen()\"\n      [items]=\"sectionNavigationItems()\"\n      [completedCount]=\"completedSectionCount()\"\n      [totalCount]=\"current.sections.length\"\n      (closed)=\"closeMobileNavigator()\"\n      (sectionSelected)=\"goToStep($event)\"\n    />\n  }\n</main>\n" }]
    }], null, { embedded: [{ type: i0.Input, args: [{ isSignal: true, alias: "embedded", required: false }] }], admissionId: [{ type: i0.Input, args: [{ isSignal: true, alias: "admissionId", required: false }] }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(DynamicAdmissionComponent, { className: "DynamicAdmissionComponent", filePath: "frontend/src/app/features/student/admission/dynamic-admission.component.ts", lineNumber: 44 }); })();
