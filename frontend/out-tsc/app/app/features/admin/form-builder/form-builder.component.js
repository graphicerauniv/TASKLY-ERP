import { CdkTrapFocus } from '@angular/cdk/a11y';
import { ChangeDetectionStrategy, Component, HostListener, computed, inject, signal, } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { LucideArrowLeft, LucideCheck, LucideCircleAlert, LucideCircleCheck, LucideCopy, LucideListTree, LucideSave, LucideSend, LucideSettings2, LucideTrash2, LucideTriangleAlert, } from '@lucide/angular';
import { ApiService } from '../../../core/api.service';
import { MultiSelectDropdownComponent, } from '../../../shared/ui/multi-select-dropdown/multi-select-dropdown.component';
import { SettingsModalComponent } from '../../../shared/ui/settings-modal/settings-modal.component';
import { BuilderPageHeaderComponent } from './components/builder-page-header.component';
import { FormBuilderToolbarComponent } from './components/form-builder-toolbar.component';
import { FormStructurePanelComponent, } from './components/form-structure-panel.component';
import { FormCanvasComponent } from './components/form-canvas.component';
import { validateFormForPublish } from './form-publish-validation';
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
const _c0 = () => [];
const _c1 = () => ["dropdown", "radio", "checkbox", "multi-select"];
const _c2 = () => ["text", "email", "mobile", "textarea"];
const _c3 = () => ["file", "image", "signature"];
const _forTrack0 = ($index, $item) => $item.value;
const _forTrack1 = ($index, $item) => $item[0];
const _forTrack2 = ($index, $item) => $item.slug;
const _forTrack3 = ($index, $item) => $item.id;
function FormBuilderComponent_Conditional_6_Template(rf, ctx) { if (rf & 1) {
    const _r1 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 11);
    i0.ɵɵlistener("click", function FormBuilderComponent_Conditional_6_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.save()); });
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(1, "svg", 12);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(3, "button", 13);
    i0.ɵɵlistener("click", function FormBuilderComponent_Conditional_6_Template_button_click_3_listener() { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.openPublishChecklist()); });
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(4, "svg", 14);
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    let tmp_2_0;
    let tmp_4_0;
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵproperty("disabled", ctx_r1.saving());
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", ((tmp_2_0 = ctx_r1.form()) == null ? null : tmp_2_0.status) === "published" ? "Save live changes" : "Save draft", " ");
    i0.ɵɵadvance();
    i0.ɵɵproperty("disabled", ctx_r1.saving());
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", ((tmp_4_0 = ctx_r1.form()) == null ? null : tmp_4_0.status) === "published" ? "Republish form" : "Publish form", " ");
} }
function FormBuilderComponent_Conditional_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 5);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r1.message());
} }
function FormBuilderComponent_Conditional_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 6);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r1.error());
} }
function FormBuilderComponent_Conditional_10_Conditional_20_Template(rf, ctx) { if (rf & 1) {
    const _r4 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 31)(1, "span");
    i0.ɵɵtext(2, "Academic sessions *");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "erp-multi-select-dropdown", 32);
    i0.ɵɵlistener("valueChange", function FormBuilderComponent_Conditional_10_Conditional_20_Template_erp_multi_select_dropdown_valueChange_3_listener($event) { i0.ɵɵrestoreView(_r4); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.setAudience("academicSessionIds", $event)); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(4, "div", 31)(5, "span");
    i0.ɵɵtext(6, "Admission levels *");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "erp-multi-select-dropdown", 33);
    i0.ɵɵlistener("valueChange", function FormBuilderComponent_Conditional_10_Conditional_20_Template_erp_multi_select_dropdown_valueChange_7_listener($event) { i0.ɵɵrestoreView(_r4); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.setAudience("levelIds", $event)); });
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const current_r5 = i0.ɵɵnextContext();
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("options", ctx_r1.mappingOptions("academic"))("value", (current_r5.audience == null ? null : current_r5.audience.academicSessionIds) || i0.ɵɵpureFunction0(4, _c0));
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("options", ctx_r1.mappingOptions("level"))("value", (current_r5.audience == null ? null : current_r5.audience.levelIds) || i0.ɵɵpureFunction0(5, _c0));
} }
function FormBuilderComponent_Conditional_10_Conditional_21_Template(rf, ctx) { if (rf & 1) {
    const _r6 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 31)(1, "span");
    i0.ɵɵtext(2, "Universities");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "erp-multi-select-dropdown", 34);
    i0.ɵɵlistener("valueChange", function FormBuilderComponent_Conditional_10_Conditional_21_Template_erp_multi_select_dropdown_valueChange_3_listener($event) { i0.ɵɵrestoreView(_r6); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.setAudience("universityIds", $event)); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(4, "div", 31)(5, "span");
    i0.ɵɵtext(6, "Colleges");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "erp-multi-select-dropdown", 35);
    i0.ɵɵlistener("valueChange", function FormBuilderComponent_Conditional_10_Conditional_21_Template_erp_multi_select_dropdown_valueChange_7_listener($event) { i0.ɵɵrestoreView(_r6); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.setAudience("collegeIds", $event)); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(8, "div", 31)(9, "span");
    i0.ɵɵtext(10);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(11, "erp-multi-select-dropdown", 36);
    i0.ɵɵlistener("valueChange", function FormBuilderComponent_Conditional_10_Conditional_21_Template_erp_multi_select_dropdown_valueChange_11_listener($event) { i0.ɵɵrestoreView(_r6); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.setAudience("departmentIds", $event)); });
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const current_r5 = i0.ɵɵnextContext();
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("options", ctx_r1.mappingOptions("university"))("value", (current_r5.audience == null ? null : current_r5.audience.universityIds) || i0.ɵɵpureFunction0(7, _c0));
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("options", ctx_r1.mappingOptions("college"))("value", (current_r5.audience == null ? null : current_r5.audience.collegeIds) || i0.ɵɵpureFunction0(8, _c0));
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate((current_r5.purpose || "admission") === "faculty" ? "Faculty departments *" : "Departments");
    i0.ɵɵadvance();
    i0.ɵɵproperty("options", ctx_r1.mappingOptions("department"))("value", (current_r5.audience == null ? null : current_r5.audience.departmentIds) || i0.ɵɵpureFunction0(9, _c0));
} }
function FormBuilderComponent_Conditional_10_Conditional_22_For_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 38);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const option_r8 = ctx.$implicit;
    i0.ɵɵproperty("value", option_r8.value);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(option_r8.label);
} }
function FormBuilderComponent_Conditional_10_Conditional_22_For_23_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 38);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const option_r9 = ctx.$implicit;
    i0.ɵɵproperty("value", option_r9.value);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(option_r9.label);
} }
function FormBuilderComponent_Conditional_10_Conditional_22_Conditional_30_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtext(0, " The sidebar and database destination are locked because this form has been published. ");
} }
function FormBuilderComponent_Conditional_10_Conditional_22_Template(rf, ctx) { if (rf & 1) {
    const _r7 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "label")(1, "span");
    i0.ɵɵtext(2, "Existing sidebar section");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "select", 18);
    i0.ɵɵlistener("ngModelChange", function FormBuilderComponent_Conditional_10_Conditional_22_Template_select_ngModelChange_3_listener($event) { i0.ɵɵrestoreView(_r7); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.selectDestination("navigation", $event)); });
    i0.ɵɵelementStart(4, "option", 37);
    i0.ɵɵtext(5, "Add new section");
    i0.ɵɵelementEnd();
    i0.ɵɵrepeaterCreate(6, FormBuilderComponent_Conditional_10_Conditional_22_For_7_Template, 2, 2, "option", 38, _forTrack0);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(8, "label")(9, "span");
    i0.ɵɵtext(10, "Sidebar section name *");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(11, "input", 39);
    i0.ɵɵlistener("ngModelChange", function FormBuilderComponent_Conditional_10_Conditional_22_Template_input_ngModelChange_11_listener($event) { i0.ɵɵrestoreView(_r7); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.setDestinationName("navigation", $event)); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(12, "label")(13, "span");
    i0.ɵɵtext(14, "Form name in sidebar *");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(15, "input", 40);
    i0.ɵɵlistener("ngModelChange", function FormBuilderComponent_Conditional_10_Conditional_22_Template_input_ngModelChange_15_listener($event) { i0.ɵɵrestoreView(_r7); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.setDestinationMenuName($event)); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(16, "label")(17, "span");
    i0.ɵɵtext(18, "Existing database section");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(19, "select", 18);
    i0.ɵɵlistener("ngModelChange", function FormBuilderComponent_Conditional_10_Conditional_22_Template_select_ngModelChange_19_listener($event) { i0.ɵɵrestoreView(_r7); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.selectDestination("database", $event)); });
    i0.ɵɵelementStart(20, "option", 37);
    i0.ɵɵtext(21, "Add new section");
    i0.ɵɵelementEnd();
    i0.ɵɵrepeaterCreate(22, FormBuilderComponent_Conditional_10_Conditional_22_For_23_Template, 2, 2, "option", 38, _forTrack0);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(24, "label")(25, "span");
    i0.ɵɵtext(26, "Database section name *");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(27, "input", 39);
    i0.ɵɵlistener("ngModelChange", function FormBuilderComponent_Conditional_10_Conditional_22_Template_input_ngModelChange_27_listener($event) { i0.ɵɵrestoreView(_r7); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.setDestinationName("database", $event)); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(28, "div", 41);
    i0.ɵɵtext(29, " Every submitted record receives a unique eight-character alphanumeric code. ");
    i0.ɵɵconditionalCreate(30, FormBuilderComponent_Conditional_10_Conditional_22_Conditional_30_Template, 1, 0);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const current_r5 = i0.ɵɵnextContext();
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("disabled", ctx_r1.destinationLocked())("ngModel", (current_r5.destination == null ? null : current_r5.destination.navigationSectionId) || "");
    i0.ɵɵadvance(3);
    i0.ɵɵrepeater(ctx_r1.destinationOptions("navigation"));
    i0.ɵɵadvance(5);
    i0.ɵɵproperty("disabled", ctx_r1.destinationLocked())("ngModel", (current_r5.destination == null ? null : current_r5.destination.navigationSectionName) || "");
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("ngModel", (current_r5.destination == null ? null : current_r5.destination.menuName) || current_r5.name);
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("disabled", ctx_r1.destinationLocked())("ngModel", (current_r5.destination == null ? null : current_r5.destination.databaseSectionId) || "");
    i0.ɵɵadvance(3);
    i0.ɵɵrepeater(ctx_r1.destinationOptions("database"));
    i0.ɵɵadvance(5);
    i0.ɵɵproperty("disabled", ctx_r1.destinationLocked())("ngModel", (current_r5.destination == null ? null : current_r5.destination.databaseSectionName) || "");
    i0.ɵɵadvance(3);
    i0.ɵɵconditional(ctx_r1.destinationLocked() ? 30 : -1);
} }
function FormBuilderComponent_Conditional_10_Conditional_28_Template(rf, ctx) { if (rf & 1) {
    const _r10 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 42);
    i0.ɵɵlistener("click", function FormBuilderComponent_Conditional_10_Conditional_28_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r10); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.structureVisible.set(false)); });
    i0.ɵɵelementEnd();
} }
function FormBuilderComponent_Conditional_10_Conditional_31_Conditional_1_Conditional_0_For_13_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 38);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const type_r14 = ctx.$implicit;
    i0.ɵɵproperty("value", type_r14[0]);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(type_r14[1]);
} }
function FormBuilderComponent_Conditional_10_Conditional_31_Conditional_1_Conditional_0_Conditional_46_For_11_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 38);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const type_r16 = ctx.$implicit;
    i0.ɵɵproperty("value", type_r16.slug);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(type_r16.name);
} }
function FormBuilderComponent_Conditional_10_Conditional_31_Conditional_1_Conditional_0_Conditional_46_Conditional_12_For_7_Conditional_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 38);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r18 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵproperty("value", item_r18.id);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(item_r18.name);
} }
function FormBuilderComponent_Conditional_10_Conditional_31_Conditional_1_Conditional_0_Conditional_46_Conditional_12_For_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵconditionalCreate(0, FormBuilderComponent_Conditional_10_Conditional_31_Conditional_1_Conditional_0_Conditional_46_Conditional_12_For_7_Conditional_0_Template, 2, 2, "option", 38);
} if (rf & 2) {
    const item_r18 = ctx.$implicit;
    const selected_r13 = i0.ɵɵnextContext(3);
    i0.ɵɵconditional(item_r18.id !== selected_r13.id ? 0 : -1);
} }
function FormBuilderComponent_Conditional_10_Conditional_31_Conditional_1_Conditional_0_Conditional_46_Conditional_12_Template(rf, ctx) { if (rf & 1) {
    const _r17 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "label")(1, "span");
    i0.ɵɵtext(2, "Depends on field (optional)");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "select", 48);
    i0.ɵɵtwoWayListener("ngModelChange", function FormBuilderComponent_Conditional_10_Conditional_31_Conditional_1_Conditional_0_Conditional_46_Conditional_12_Template_select_ngModelChange_3_listener($event) { i0.ɵɵrestoreView(_r17); const selected_r13 = i0.ɵɵnextContext(2); i0.ɵɵtwoWayBindingSet(selected_r13.dataSource.parentFieldId, $event) || (selected_r13.dataSource.parentFieldId = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementStart(4, "option", 59);
    i0.ɵɵtext(5, "No dependency");
    i0.ɵɵelementEnd();
    i0.ɵɵrepeaterCreate(6, FormBuilderComponent_Conditional_10_Conditional_31_Conditional_1_Conditional_0_Conditional_46_Conditional_12_For_7_Template, 1, 1, null, null, _forTrack3);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const selected_r13 = i0.ɵɵnextContext(2);
    const ctx_r1 = i0.ɵɵnextContext(4);
    i0.ɵɵadvance(3);
    i0.ɵɵtwoWayProperty("ngModel", selected_r13.dataSource.parentFieldId);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngValue", null);
    i0.ɵɵadvance(2);
    i0.ɵɵrepeater(ctx_r1.allFields());
} }
function FormBuilderComponent_Conditional_10_Conditional_31_Conditional_1_Conditional_0_Conditional_46_Conditional_13_Template(rf, ctx) { if (rf & 1) {
    const _r19 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "label")(1, "span");
    i0.ɵɵtext(2, "Manual options \u00B7 one per line");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "textarea", 60);
    i0.ɵɵtwoWayListener("ngModelChange", function FormBuilderComponent_Conditional_10_Conditional_31_Conditional_1_Conditional_0_Conditional_46_Conditional_13_Template_textarea_ngModelChange_3_listener($event) { i0.ɵɵrestoreView(_r19); const ctx_r1 = i0.ɵɵnextContext(6); i0.ɵɵtwoWayBindingSet(ctx_r1.dialogOptionText, $event) || (ctx_r1.dialogOptionText = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵlistener("ngModelChange", function FormBuilderComponent_Conditional_10_Conditional_31_Conditional_1_Conditional_0_Conditional_46_Conditional_13_Template_textarea_ngModelChange_3_listener() { i0.ɵɵrestoreView(_r19); const ctx_r1 = i0.ɵɵnextContext(6); return i0.ɵɵresetView(ctx_r1.updateDialogOptions()); });
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(6);
    i0.ɵɵadvance(3);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r1.dialogOptionText);
} }
function FormBuilderComponent_Conditional_10_Conditional_31_Conditional_1_Conditional_0_Conditional_46_Conditional_14_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 58);
    i0.ɵɵtext(1, " Options are loaded from the selected master data source. ");
    i0.ɵɵelementEnd();
} }
function FormBuilderComponent_Conditional_10_Conditional_31_Conditional_1_Conditional_0_Conditional_46_Template(rf, ctx) { if (rf & 1) {
    const _r15 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "section", 52)(1, "h3");
    i0.ɵɵtext(2, "Choices and data");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "div", 53)(4, "label")(5, "span");
    i0.ɵɵtext(6, "Data source");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "select", 48);
    i0.ɵɵlistener("ngModelChange", function FormBuilderComponent_Conditional_10_Conditional_31_Conditional_1_Conditional_0_Conditional_46_Template_select_ngModelChange_7_listener($event) { i0.ɵɵrestoreView(_r15); const selected_r13 = i0.ɵɵnextContext(); return i0.ɵɵresetView(selected_r13.dataSource = $event ? { kind: "master", masterTypeSlug: $event, parentFieldId: null, labelField: "name", valueField: "_id" } : null); });
    i0.ɵɵelementStart(8, "option", 37);
    i0.ɵɵtext(9, "Manual options");
    i0.ɵɵelementEnd();
    i0.ɵɵrepeaterCreate(10, FormBuilderComponent_Conditional_10_Conditional_31_Conditional_1_Conditional_0_Conditional_46_For_11_Template, 2, 2, "option", 38, _forTrack2);
    i0.ɵɵelementEnd()();
    i0.ɵɵconditionalCreate(12, FormBuilderComponent_Conditional_10_Conditional_31_Conditional_1_Conditional_0_Conditional_46_Conditional_12_Template, 8, 2, "label");
    i0.ɵɵelementEnd();
    i0.ɵɵconditionalCreate(13, FormBuilderComponent_Conditional_10_Conditional_31_Conditional_1_Conditional_0_Conditional_46_Conditional_13_Template, 4, 1, "label")(14, FormBuilderComponent_Conditional_10_Conditional_31_Conditional_1_Conditional_0_Conditional_46_Conditional_14_Template, 2, 0, "p", 58);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const selected_r13 = i0.ɵɵnextContext();
    const ctx_r1 = i0.ɵɵnextContext(4);
    i0.ɵɵadvance(7);
    i0.ɵɵproperty("ngModel", (selected_r13.dataSource == null ? null : selected_r13.dataSource.masterTypeSlug) || "");
    i0.ɵɵadvance(3);
    i0.ɵɵrepeater(ctx_r1.types());
    i0.ɵɵadvance(2);
    i0.ɵɵconditional(selected_r13.dataSource ? 12 : -1);
    i0.ɵɵadvance();
    i0.ɵɵconditional(!selected_r13.dataSource ? 13 : 14);
} }
function FormBuilderComponent_Conditional_10_Conditional_31_Conditional_1_Conditional_0_Conditional_50_Template(rf, ctx) { if (rf & 1) {
    const _r20 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 53)(1, "label")(2, "span");
    i0.ɵɵtext(3, "Minimum value");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "input", 61);
    i0.ɵɵtwoWayListener("ngModelChange", function FormBuilderComponent_Conditional_10_Conditional_31_Conditional_1_Conditional_0_Conditional_50_Template_input_ngModelChange_4_listener($event) { i0.ɵɵrestoreView(_r20); const selected_r13 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(selected_r13.validation.min, $event) || (selected_r13.validation.min = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(5, "label")(6, "span");
    i0.ɵɵtext(7, "Maximum value");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "input", 61);
    i0.ɵɵtwoWayListener("ngModelChange", function FormBuilderComponent_Conditional_10_Conditional_31_Conditional_1_Conditional_0_Conditional_50_Template_input_ngModelChange_8_listener($event) { i0.ɵɵrestoreView(_r20); const selected_r13 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(selected_r13.validation.max, $event) || (selected_r13.validation.max = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const selected_r13 = i0.ɵɵnextContext();
    i0.ɵɵadvance(4);
    i0.ɵɵtwoWayProperty("ngModel", selected_r13.validation.min);
    i0.ɵɵadvance(4);
    i0.ɵɵtwoWayProperty("ngModel", selected_r13.validation.max);
} }
function FormBuilderComponent_Conditional_10_Conditional_31_Conditional_1_Conditional_0_Conditional_51_Template(rf, ctx) { if (rf & 1) {
    const _r21 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 53)(1, "label")(2, "span");
    i0.ɵɵtext(3, "Min length");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "input", 62);
    i0.ɵɵtwoWayListener("ngModelChange", function FormBuilderComponent_Conditional_10_Conditional_31_Conditional_1_Conditional_0_Conditional_51_Template_input_ngModelChange_4_listener($event) { i0.ɵɵrestoreView(_r21); const selected_r13 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(selected_r13.validation.minLength, $event) || (selected_r13.validation.minLength = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(5, "label")(6, "span");
    i0.ɵɵtext(7, "Max length");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "input", 63);
    i0.ɵɵtwoWayListener("ngModelChange", function FormBuilderComponent_Conditional_10_Conditional_31_Conditional_1_Conditional_0_Conditional_51_Template_input_ngModelChange_8_listener($event) { i0.ɵɵrestoreView(_r21); const selected_r13 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(selected_r13.validation.maxLength, $event) || (selected_r13.validation.maxLength = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(9, "label")(10, "span");
    i0.ɵɵtext(11, "Pattern (optional)");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(12, "input", 64);
    i0.ɵɵtwoWayListener("ngModelChange", function FormBuilderComponent_Conditional_10_Conditional_31_Conditional_1_Conditional_0_Conditional_51_Template_input_ngModelChange_12_listener($event) { i0.ɵɵrestoreView(_r21); const selected_r13 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(selected_r13.validation.pattern, $event) || (selected_r13.validation.pattern = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const selected_r13 = i0.ɵɵnextContext();
    i0.ɵɵadvance(4);
    i0.ɵɵtwoWayProperty("ngModel", selected_r13.validation.minLength);
    i0.ɵɵadvance(4);
    i0.ɵɵtwoWayProperty("ngModel", selected_r13.validation.maxLength);
    i0.ɵɵadvance(4);
    i0.ɵɵtwoWayProperty("ngModel", selected_r13.validation.pattern);
} }
function FormBuilderComponent_Conditional_10_Conditional_31_Conditional_1_Conditional_0_Conditional_66_For_7_Conditional_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 38);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r23 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵproperty("value", item_r23.id);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(item_r23.name);
} }
function FormBuilderComponent_Conditional_10_Conditional_31_Conditional_1_Conditional_0_Conditional_66_For_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵconditionalCreate(0, FormBuilderComponent_Conditional_10_Conditional_31_Conditional_1_Conditional_0_Conditional_66_For_7_Conditional_0_Template, 2, 2, "option", 38);
} if (rf & 2) {
    const item_r23 = ctx.$implicit;
    const selected_r13 = i0.ɵɵnextContext(2);
    i0.ɵɵconditional(item_r23.id !== selected_r13.id ? 0 : -1);
} }
function FormBuilderComponent_Conditional_10_Conditional_31_Conditional_1_Conditional_0_Conditional_66_Template(rf, ctx) { if (rf & 1) {
    const _r22 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "label")(1, "span");
    i0.ɵɵtext(2, "Controlling field");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "select", 48);
    i0.ɵɵtwoWayListener("ngModelChange", function FormBuilderComponent_Conditional_10_Conditional_31_Conditional_1_Conditional_0_Conditional_66_Template_select_ngModelChange_3_listener($event) { i0.ɵɵrestoreView(_r22); const selected_r13 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(selected_r13.visibilityCondition.fieldId, $event) || (selected_r13.visibilityCondition.fieldId = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementStart(4, "option", 37);
    i0.ɵɵtext(5, "Choose field");
    i0.ɵɵelementEnd();
    i0.ɵɵrepeaterCreate(6, FormBuilderComponent_Conditional_10_Conditional_31_Conditional_1_Conditional_0_Conditional_66_For_7_Template, 1, 1, null, null, _forTrack3);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(8, "div", 53)(9, "label")(10, "span");
    i0.ɵɵtext(11, "Operator");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(12, "select", 48);
    i0.ɵɵtwoWayListener("ngModelChange", function FormBuilderComponent_Conditional_10_Conditional_31_Conditional_1_Conditional_0_Conditional_66_Template_select_ngModelChange_12_listener($event) { i0.ɵɵrestoreView(_r22); const selected_r13 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(selected_r13.visibilityCondition.operator, $event) || (selected_r13.visibilityCondition.operator = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementStart(13, "option", 65);
    i0.ɵɵtext(14, "Equals");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(15, "option", 66);
    i0.ɵɵtext(16, "Not equals");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(17, "option", 67);
    i0.ɵɵtext(18, "Contains");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(19, "option", 68);
    i0.ɵɵtext(20, "Is empty");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(21, "label")(22, "span");
    i0.ɵɵtext(23, "Expected value");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(24, "input", 48);
    i0.ɵɵtwoWayListener("ngModelChange", function FormBuilderComponent_Conditional_10_Conditional_31_Conditional_1_Conditional_0_Conditional_66_Template_input_ngModelChange_24_listener($event) { i0.ɵɵrestoreView(_r22); const selected_r13 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(selected_r13.visibilityCondition.value, $event) || (selected_r13.visibilityCondition.value = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const selected_r13 = i0.ɵɵnextContext();
    const ctx_r1 = i0.ɵɵnextContext(4);
    i0.ɵɵadvance(3);
    i0.ɵɵtwoWayProperty("ngModel", selected_r13.visibilityCondition.fieldId);
    i0.ɵɵadvance(3);
    i0.ɵɵrepeater(ctx_r1.allFields());
    i0.ɵɵadvance(6);
    i0.ɵɵtwoWayProperty("ngModel", selected_r13.visibilityCondition.operator);
    i0.ɵɵadvance(12);
    i0.ɵɵtwoWayProperty("ngModel", selected_r13.visibilityCondition.value);
} }
function FormBuilderComponent_Conditional_10_Conditional_31_Conditional_1_Conditional_0_Conditional_67_Conditional_3_Conditional_12_Template(rf, ctx) { if (rf & 1) {
    const _r25 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "label")(1, "input", 51);
    i0.ɵɵlistener("ngModelChange", function FormBuilderComponent_Conditional_10_Conditional_31_Conditional_1_Conditional_0_Conditional_67_Conditional_3_Conditional_12_Template_input_ngModelChange_1_listener($event) { i0.ɵɵrestoreView(_r25); const selected_r13 = i0.ɵɵnextContext(3); const ctx_r1 = i0.ɵɵnextContext(4); return i0.ɵɵresetView(ctx_r1.toggleUploadType(selected_r13, "pdf", $event)); });
    i0.ɵɵelementEnd();
    i0.ɵɵtext(2, "PDF");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "label")(4, "input", 51);
    i0.ɵɵlistener("ngModelChange", function FormBuilderComponent_Conditional_10_Conditional_31_Conditional_1_Conditional_0_Conditional_67_Conditional_3_Conditional_12_Template_input_ngModelChange_4_listener($event) { i0.ɵɵrestoreView(_r25); const selected_r13 = i0.ɵɵnextContext(3); const ctx_r1 = i0.ɵɵnextContext(4); return i0.ɵɵresetView(ctx_r1.toggleUploadType(selected_r13, "word", $event)); });
    i0.ɵɵelementEnd();
    i0.ɵɵtext(5, "Word");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const selected_r13 = i0.ɵɵnextContext(3);
    const ctx_r1 = i0.ɵɵnextContext(4);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngModel", ctx_r1.uploadTypeEnabled(selected_r13, "pdf"));
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngModel", ctx_r1.uploadTypeEnabled(selected_r13, "word"));
} }
function FormBuilderComponent_Conditional_10_Conditional_31_Conditional_1_Conditional_0_Conditional_67_Conditional_3_Template(rf, ctx) { if (rf & 1) {
    const _r24 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 69)(1, "label")(2, "span");
    i0.ɵɵtext(3, "Maximum file size (MB)");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "input", 70);
    i0.ɵɵtwoWayListener("ngModelChange", function FormBuilderComponent_Conditional_10_Conditional_31_Conditional_1_Conditional_0_Conditional_67_Conditional_3_Template_input_ngModelChange_4_listener($event) { i0.ɵɵrestoreView(_r24); const selected_r13 = i0.ɵɵnextContext(2); i0.ɵɵtwoWayBindingSet(selected_r13.uploadConfig.maxSizeMb, $event) || (selected_r13.uploadConfig.maxSizeMb = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(5, "fieldset", 71)(6, "legend");
    i0.ɵɵtext(7, "Allowed file types");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "div", 72)(9, "label")(10, "input", 51);
    i0.ɵɵlistener("ngModelChange", function FormBuilderComponent_Conditional_10_Conditional_31_Conditional_1_Conditional_0_Conditional_67_Conditional_3_Template_input_ngModelChange_10_listener($event) { i0.ɵɵrestoreView(_r24); const selected_r13 = i0.ɵɵnextContext(2); const ctx_r1 = i0.ɵɵnextContext(4); return i0.ɵɵresetView(ctx_r1.toggleUploadType(selected_r13, "image", $event)); });
    i0.ɵɵelementEnd();
    i0.ɵɵtext(11, "Images");
    i0.ɵɵelementEnd();
    i0.ɵɵconditionalCreate(12, FormBuilderComponent_Conditional_10_Conditional_31_Conditional_1_Conditional_0_Conditional_67_Conditional_3_Conditional_12_Template, 6, 2);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const selected_r13 = i0.ɵɵnextContext(2);
    const ctx_r1 = i0.ɵɵnextContext(4);
    i0.ɵɵadvance(4);
    i0.ɵɵtwoWayProperty("ngModel", selected_r13.uploadConfig.maxSizeMb);
    i0.ɵɵadvance(6);
    i0.ɵɵproperty("ngModel", ctx_r1.uploadTypeEnabled(selected_r13, "image"));
    i0.ɵɵadvance(2);
    i0.ɵɵconditional(selected_r13.type === "file" ? 12 : -1);
} }
function FormBuilderComponent_Conditional_10_Conditional_31_Conditional_1_Conditional_0_Conditional_67_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "section", 52)(1, "h3");
    i0.ɵɵtext(2, "Upload rules");
    i0.ɵɵelementEnd();
    i0.ɵɵconditionalCreate(3, FormBuilderComponent_Conditional_10_Conditional_31_Conditional_1_Conditional_0_Conditional_67_Conditional_3_Template, 13, 3, "div", 69);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const selected_r13 = i0.ɵɵnextContext();
    i0.ɵɵadvance(3);
    i0.ɵɵconditional(selected_r13.uploadConfig ? 3 : -1);
} }
function FormBuilderComponent_Conditional_10_Conditional_31_Conditional_1_Conditional_0_Conditional_69_Template(rf, ctx) { if (rf & 1) {
    const _r26 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 73);
    i0.ɵɵlistener("click", function FormBuilderComponent_Conditional_10_Conditional_31_Conditional_1_Conditional_0_Conditional_69_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r26); const ctx_r1 = i0.ɵɵnextContext(5); return i0.ɵɵresetView(ctx_r1.duplicateCurrentSelection()); });
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(1, "svg", 74);
    i0.ɵɵtext(2, " Duplicate ");
    i0.ɵɵelementEnd();
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(3, "button", 75);
    i0.ɵɵlistener("click", function FormBuilderComponent_Conditional_10_Conditional_31_Conditional_1_Conditional_0_Conditional_69_Template_button_click_3_listener() { i0.ɵɵrestoreView(_r26); const ctx_r1 = i0.ɵɵnextContext(5); return i0.ɵɵresetView(ctx_r1.deleteCurrentSelection()); });
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(4, "svg", 76);
    i0.ɵɵtext(5, " Delete ");
    i0.ɵɵelementEnd();
} }
function FormBuilderComponent_Conditional_10_Conditional_31_Conditional_1_Conditional_0_Template(rf, ctx) { if (rf & 1) {
    const _r12 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 45)(1, "section", 46)(2, "h3");
    i0.ɵɵtext(3, "Properties");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "label")(5, "span");
    i0.ɵɵtext(6, "Field label *");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "input", 47);
    i0.ɵɵtwoWayListener("ngModelChange", function FormBuilderComponent_Conditional_10_Conditional_31_Conditional_1_Conditional_0_Template_input_ngModelChange_7_listener($event) { const selected_r13 = i0.ɵɵrestoreView(_r12); i0.ɵɵtwoWayBindingSet(selected_r13.name, $event) || (selected_r13.name = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(8, "label")(9, "span");
    i0.ɵɵtext(10, "Field type");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(11, "select", 48);
    i0.ɵɵlistener("ngModelChange", function FormBuilderComponent_Conditional_10_Conditional_31_Conditional_1_Conditional_0_Template_select_ngModelChange_11_listener($event) { const selected_r13 = i0.ɵɵrestoreView(_r12); const ctx_r1 = i0.ɵɵnextContext(4); selected_r13.type = $event; return i0.ɵɵresetView(ctx_r1.configureUpload(selected_r13)); });
    i0.ɵɵrepeaterCreate(12, FormBuilderComponent_Conditional_10_Conditional_31_Conditional_1_Conditional_0_For_13_Template, 2, 2, "option", 38, _forTrack1);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(14, "label")(15, "span");
    i0.ɵɵtext(16, "Placeholder");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(17, "input", 48);
    i0.ɵɵtwoWayListener("ngModelChange", function FormBuilderComponent_Conditional_10_Conditional_31_Conditional_1_Conditional_0_Template_input_ngModelChange_17_listener($event) { const selected_r13 = i0.ɵɵrestoreView(_r12); i0.ɵɵtwoWayBindingSet(selected_r13.placeholder, $event) || (selected_r13.placeholder = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(18, "label")(19, "span");
    i0.ɵɵtext(20, "Help text");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(21, "textarea", 49);
    i0.ɵɵtwoWayListener("ngModelChange", function FormBuilderComponent_Conditional_10_Conditional_31_Conditional_1_Conditional_0_Template_textarea_ngModelChange_21_listener($event) { const selected_r13 = i0.ɵɵrestoreView(_r12); i0.ɵɵtwoWayBindingSet(selected_r13.helpText, $event) || (selected_r13.helpText = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(22, "section", 46)(23, "h3");
    i0.ɵɵtext(24, "Behaviour");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(25, "label", 50)(26, "span")(27, "strong");
    i0.ɵɵtext(28, "Required");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(29, "small");
    i0.ɵɵtext(30, "Student must provide a value");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(31, "input", 51);
    i0.ɵɵtwoWayListener("ngModelChange", function FormBuilderComponent_Conditional_10_Conditional_31_Conditional_1_Conditional_0_Template_input_ngModelChange_31_listener($event) { const selected_r13 = i0.ɵɵrestoreView(_r12); i0.ɵɵtwoWayBindingSet(selected_r13.isRequired, $event) || (selected_r13.isRequired = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(32, "label", 50)(33, "span")(34, "strong");
    i0.ɵɵtext(35, "Visible");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(36, "small");
    i0.ɵɵtext(37, "Show this field in the live form");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(38, "input", 51);
    i0.ɵɵtwoWayListener("ngModelChange", function FormBuilderComponent_Conditional_10_Conditional_31_Conditional_1_Conditional_0_Template_input_ngModelChange_38_listener($event) { const selected_r13 = i0.ɵɵrestoreView(_r12); i0.ɵɵtwoWayBindingSet(selected_r13.isActive, $event) || (selected_r13.isActive = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(39, "label", 50)(40, "span")(41, "strong");
    i0.ɵɵtext(42, "Searchable");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(43, "small");
    i0.ɵɵtext(44, "Enable lookup for long lists");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(45, "input", 51);
    i0.ɵɵtwoWayListener("ngModelChange", function FormBuilderComponent_Conditional_10_Conditional_31_Conditional_1_Conditional_0_Template_input_ngModelChange_45_listener($event) { const selected_r13 = i0.ɵɵrestoreView(_r12); i0.ɵɵtwoWayBindingSet(selected_r13.searchable, $event) || (selected_r13.searchable = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵlistener("ngModelChange", function FormBuilderComponent_Conditional_10_Conditional_31_Conditional_1_Conditional_0_Template_input_ngModelChange_45_listener() { i0.ɵɵrestoreView(_r12); const ctx_r1 = i0.ɵɵnextContext(4); return i0.ɵɵresetView(ctx_r1.dialogSearchableChanged()); });
    i0.ɵɵelementEnd()()();
    i0.ɵɵconditionalCreate(46, FormBuilderComponent_Conditional_10_Conditional_31_Conditional_1_Conditional_0_Conditional_46_Template, 15, 3, "section", 52);
    i0.ɵɵelementStart(47, "section", 46)(48, "h3");
    i0.ɵɵtext(49, "Validation");
    i0.ɵɵelementEnd();
    i0.ɵɵconditionalCreate(50, FormBuilderComponent_Conditional_10_Conditional_31_Conditional_1_Conditional_0_Conditional_50_Template, 9, 2, "div", 53);
    i0.ɵɵconditionalCreate(51, FormBuilderComponent_Conditional_10_Conditional_31_Conditional_1_Conditional_0_Conditional_51_Template, 13, 3);
    i0.ɵɵelementStart(52, "label")(53, "span");
    i0.ɵɵtext(54, "Validation message");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(55, "input", 54);
    i0.ɵɵtwoWayListener("ngModelChange", function FormBuilderComponent_Conditional_10_Conditional_31_Conditional_1_Conditional_0_Template_input_ngModelChange_55_listener($event) { const selected_r13 = i0.ɵɵrestoreView(_r12); i0.ɵɵtwoWayBindingSet(selected_r13.validation.message, $event) || (selected_r13.validation.message = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(56, "section", 46)(57, "h3");
    i0.ɵɵtext(58, "Visibility");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(59, "label", 50)(60, "span")(61, "strong");
    i0.ɵɵtext(62, "Conditional");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(63, "small");
    i0.ɵɵtext(64, "Show based on another field");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(65, "input", 51);
    i0.ɵɵlistener("ngModelChange", function FormBuilderComponent_Conditional_10_Conditional_31_Conditional_1_Conditional_0_Template_input_ngModelChange_65_listener($event) { i0.ɵɵrestoreView(_r12); const ctx_r1 = i0.ɵɵnextContext(4); return i0.ɵɵresetView(ctx_r1.toggleDialogCondition($event)); });
    i0.ɵɵelementEnd()();
    i0.ɵɵconditionalCreate(66, FormBuilderComponent_Conditional_10_Conditional_31_Conditional_1_Conditional_0_Conditional_66_Template, 25, 3);
    i0.ɵɵelementEnd();
    i0.ɵɵconditionalCreate(67, FormBuilderComponent_Conditional_10_Conditional_31_Conditional_1_Conditional_0_Conditional_67_Template, 4, 1, "section", 52);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(68, "div", 55);
    i0.ɵɵconditionalCreate(69, FormBuilderComponent_Conditional_10_Conditional_31_Conditional_1_Conditional_0_Conditional_69_Template, 6, 0);
    i0.ɵɵelement(70, "span", 56);
    i0.ɵɵelementStart(71, "button", 24);
    i0.ɵɵlistener("click", function FormBuilderComponent_Conditional_10_Conditional_31_Conditional_1_Conditional_0_Template_button_click_71_listener() { i0.ɵɵrestoreView(_r12); const ctx_r1 = i0.ɵɵnextContext(4); return i0.ɵɵresetView(ctx_r1.closeFieldDialog()); });
    i0.ɵɵtext(72, "Cancel");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(73, "button", 13);
    i0.ɵɵlistener("click", function FormBuilderComponent_Conditional_10_Conditional_31_Conditional_1_Conditional_0_Template_button_click_73_listener() { i0.ɵɵrestoreView(_r12); const ctx_r1 = i0.ɵɵnextContext(4); return i0.ɵɵresetView(ctx_r1.saveFieldDialog()); });
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(74, "svg", 57);
    i0.ɵɵtext(75);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const selected_r13 = ctx;
    const dialog_r27 = i0.ɵɵnextContext();
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(7);
    i0.ɵɵtwoWayProperty("ngModel", selected_r13.name);
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("ngModel", selected_r13.type);
    i0.ɵɵadvance();
    i0.ɵɵrepeater(ctx_r1.fieldTypes);
    i0.ɵɵadvance(5);
    i0.ɵɵtwoWayProperty("ngModel", selected_r13.placeholder);
    i0.ɵɵadvance(4);
    i0.ɵɵtwoWayProperty("ngModel", selected_r13.helpText);
    i0.ɵɵadvance(10);
    i0.ɵɵtwoWayProperty("ngModel", selected_r13.isRequired);
    i0.ɵɵadvance(7);
    i0.ɵɵtwoWayProperty("ngModel", selected_r13.isActive);
    i0.ɵɵadvance(7);
    i0.ɵɵtwoWayProperty("ngModel", selected_r13.searchable);
    i0.ɵɵadvance();
    i0.ɵɵconditional(i0.ɵɵpureFunction0(17, _c1).includes(selected_r13.type) ? 46 : -1);
    i0.ɵɵadvance(4);
    i0.ɵɵconditional(selected_r13.type === "number" ? 50 : -1);
    i0.ɵɵadvance();
    i0.ɵɵconditional(i0.ɵɵpureFunction0(18, _c2).includes(selected_r13.type) ? 51 : -1);
    i0.ɵɵadvance(4);
    i0.ɵɵtwoWayProperty("ngModel", selected_r13.validation.message);
    i0.ɵɵadvance(10);
    i0.ɵɵproperty("ngModel", !!selected_r13.visibilityCondition);
    i0.ɵɵadvance();
    i0.ɵɵconditional(selected_r13.visibilityCondition ? 66 : -1);
    i0.ɵɵadvance();
    i0.ɵɵconditional(i0.ɵɵpureFunction0(19, _c3).includes(selected_r13.type) ? 67 : -1);
    i0.ɵɵadvance(2);
    i0.ɵɵconditional(dialog_r27.mode === "edit" ? 69 : -1);
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("disabled", !selected_r13.name.trim());
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", dialog_r27.mode === "add" ? "Add field" : "Apply changes", " ");
} }
function FormBuilderComponent_Conditional_10_Conditional_31_Conditional_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵconditionalCreate(0, FormBuilderComponent_Conditional_10_Conditional_31_Conditional_1_Conditional_0_Template, 76, 20);
} if (rf & 2) {
    let tmp_5_0;
    i0.ɵɵconditional((tmp_5_0 = ctx.draft) ? 0 : -1, tmp_5_0);
} }
function FormBuilderComponent_Conditional_10_Conditional_31_Conditional_2_Conditional_29_Template(rf, ctx) { if (rf & 1) {
    const _r30 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 53)(1, "label")(2, "span");
    i0.ɵɵtext(3, "Minimum entries");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "input", 62);
    i0.ɵɵtwoWayListener("ngModelChange", function FormBuilderComponent_Conditional_10_Conditional_31_Conditional_2_Conditional_29_Template_input_ngModelChange_4_listener($event) { i0.ɵɵrestoreView(_r30); const selectedSubsection_r29 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(selectedSubsection_r29.minEntries, $event) || (selectedSubsection_r29.minEntries = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(5, "label")(6, "span");
    i0.ɵɵtext(7, "Maximum entries");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "input", 63);
    i0.ɵɵtwoWayListener("ngModelChange", function FormBuilderComponent_Conditional_10_Conditional_31_Conditional_2_Conditional_29_Template_input_ngModelChange_8_listener($event) { i0.ɵɵrestoreView(_r30); const selectedSubsection_r29 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(selectedSubsection_r29.maxEntries, $event) || (selectedSubsection_r29.maxEntries = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const selectedSubsection_r29 = i0.ɵɵnextContext();
    i0.ɵɵadvance(4);
    i0.ɵɵtwoWayProperty("ngModel", selectedSubsection_r29.minEntries);
    i0.ɵɵadvance(4);
    i0.ɵɵtwoWayProperty("ngModel", selectedSubsection_r29.maxEntries);
} }
function FormBuilderComponent_Conditional_10_Conditional_31_Conditional_2_Conditional_40_For_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 38);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r32 = ctx.$implicit;
    i0.ɵɵproperty("value", item_r32.id);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(item_r32.name);
} }
function FormBuilderComponent_Conditional_10_Conditional_31_Conditional_2_Conditional_40_Template(rf, ctx) { if (rf & 1) {
    const _r31 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 79)(1, "label")(2, "span");
    i0.ɵɵtext(3, "Controlling field");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "select", 48);
    i0.ɵɵtwoWayListener("ngModelChange", function FormBuilderComponent_Conditional_10_Conditional_31_Conditional_2_Conditional_40_Template_select_ngModelChange_4_listener($event) { i0.ɵɵrestoreView(_r31); const selectedSubsection_r29 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(selectedSubsection_r29.visibilityCondition.fieldId, $event) || (selectedSubsection_r29.visibilityCondition.fieldId = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementStart(5, "option", 37);
    i0.ɵɵtext(6, "Choose field");
    i0.ɵɵelementEnd();
    i0.ɵɵrepeaterCreate(7, FormBuilderComponent_Conditional_10_Conditional_31_Conditional_2_Conditional_40_For_8_Template, 2, 2, "option", 38, _forTrack3);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(9, "label")(10, "span");
    i0.ɵɵtext(11, "Operator");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(12, "select", 48);
    i0.ɵɵtwoWayListener("ngModelChange", function FormBuilderComponent_Conditional_10_Conditional_31_Conditional_2_Conditional_40_Template_select_ngModelChange_12_listener($event) { i0.ɵɵrestoreView(_r31); const selectedSubsection_r29 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(selectedSubsection_r29.visibilityCondition.operator, $event) || (selectedSubsection_r29.visibilityCondition.operator = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementStart(13, "option", 65);
    i0.ɵɵtext(14, "Equals");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(15, "option", 66);
    i0.ɵɵtext(16, "Not equals");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(17, "option", 67);
    i0.ɵɵtext(18, "Contains");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(19, "option", 68);
    i0.ɵɵtext(20, "Is empty");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(21, "label")(22, "span");
    i0.ɵɵtext(23, "Expected value");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(24, "input", 48);
    i0.ɵɵtwoWayListener("ngModelChange", function FormBuilderComponent_Conditional_10_Conditional_31_Conditional_2_Conditional_40_Template_input_ngModelChange_24_listener($event) { i0.ɵɵrestoreView(_r31); const selectedSubsection_r29 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(selectedSubsection_r29.visibilityCondition.value, $event) || (selectedSubsection_r29.visibilityCondition.value = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const selectedSubsection_r29 = i0.ɵɵnextContext();
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(4);
    i0.ɵɵtwoWayProperty("ngModel", selectedSubsection_r29.visibilityCondition.fieldId);
    i0.ɵɵadvance(3);
    i0.ɵɵrepeater(ctx_r1.allFields());
    i0.ɵɵadvance(5);
    i0.ɵɵtwoWayProperty("ngModel", selectedSubsection_r29.visibilityCondition.operator);
    i0.ɵɵadvance(12);
    i0.ɵɵtwoWayProperty("ngModel", selectedSubsection_r29.visibilityCondition.value);
} }
function FormBuilderComponent_Conditional_10_Conditional_31_Conditional_2_Template(rf, ctx) { if (rf & 1) {
    const _r28 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 77)(1, "section", 46)(2, "h3");
    i0.ɵɵtext(3, "Properties");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "label")(5, "span");
    i0.ɵɵtext(6, "Section title");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "input", 48);
    i0.ɵɵtwoWayListener("ngModelChange", function FormBuilderComponent_Conditional_10_Conditional_31_Conditional_2_Template_input_ngModelChange_7_listener($event) { const selectedSubsection_r29 = i0.ɵɵrestoreView(_r28); i0.ɵɵtwoWayBindingSet(selectedSubsection_r29.name, $event) || (selectedSubsection_r29.name = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(8, "label")(9, "span");
    i0.ɵɵtext(10, "Description");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(11, "textarea", 78);
    i0.ɵɵtwoWayListener("ngModelChange", function FormBuilderComponent_Conditional_10_Conditional_31_Conditional_2_Template_textarea_ngModelChange_11_listener($event) { const selectedSubsection_r29 = i0.ɵɵrestoreView(_r28); i0.ɵɵtwoWayBindingSet(selectedSubsection_r29.description, $event) || (selectedSubsection_r29.description = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(12, "section", 46)(13, "h3");
    i0.ɵɵtext(14, "Behaviour");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(15, "label", 50)(16, "span")(17, "strong");
    i0.ɵɵtext(18, "Enabled");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(19, "small");
    i0.ɵɵtext(20, "Include in the admission form");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(21, "input", 51);
    i0.ɵɵtwoWayListener("ngModelChange", function FormBuilderComponent_Conditional_10_Conditional_31_Conditional_2_Template_input_ngModelChange_21_listener($event) { const selectedSubsection_r29 = i0.ɵɵrestoreView(_r28); i0.ɵɵtwoWayBindingSet(selectedSubsection_r29.isActive, $event) || (selectedSubsection_r29.isActive = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(22, "label", 50)(23, "span")(24, "strong");
    i0.ɵɵtext(25, "Repeatable");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(26, "small");
    i0.ɵɵtext(27, "Allow students to add multiple entries");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(28, "input", 51);
    i0.ɵɵtwoWayListener("ngModelChange", function FormBuilderComponent_Conditional_10_Conditional_31_Conditional_2_Template_input_ngModelChange_28_listener($event) { const selectedSubsection_r29 = i0.ɵɵrestoreView(_r28); i0.ɵɵtwoWayBindingSet(selectedSubsection_r29.isRepeatable, $event) || (selectedSubsection_r29.isRepeatable = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd()();
    i0.ɵɵconditionalCreate(29, FormBuilderComponent_Conditional_10_Conditional_31_Conditional_2_Conditional_29_Template, 9, 2, "div", 53);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(30, "section", 52)(31, "h3");
    i0.ɵɵtext(32, "Visibility");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(33, "label", 50)(34, "span")(35, "strong");
    i0.ɵɵtext(36, "Conditional section");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(37, "small");
    i0.ɵɵtext(38, "Control visibility from another field");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(39, "input", 51);
    i0.ɵɵlistener("ngModelChange", function FormBuilderComponent_Conditional_10_Conditional_31_Conditional_2_Template_input_ngModelChange_39_listener($event) { const selectedSubsection_r29 = i0.ɵɵrestoreView(_r28); const ctx_r1 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r1.conditionToggle(selectedSubsection_r29, $event)); });
    i0.ɵɵelementEnd()();
    i0.ɵɵconditionalCreate(40, FormBuilderComponent_Conditional_10_Conditional_31_Conditional_2_Conditional_40_Template, 25, 3, "div", 79);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(41, "div", 55)(42, "button", 73);
    i0.ɵɵlistener("click", function FormBuilderComponent_Conditional_10_Conditional_31_Conditional_2_Template_button_click_42_listener() { i0.ɵɵrestoreView(_r28); const ctx_r1 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r1.duplicateCurrentSelection()); });
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(43, "svg", 74);
    i0.ɵɵtext(44, " Duplicate ");
    i0.ɵɵelementEnd();
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(45, "button", 75);
    i0.ɵɵlistener("click", function FormBuilderComponent_Conditional_10_Conditional_31_Conditional_2_Template_button_click_45_listener() { i0.ɵɵrestoreView(_r28); const ctx_r1 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r1.deleteCurrentSelection()); });
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(46, "svg", 76);
    i0.ɵɵtext(47, " Delete ");
    i0.ɵɵelementEnd();
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelement(48, "span", 56);
    i0.ɵɵelementStart(49, "button", 80);
    i0.ɵɵlistener("click", function FormBuilderComponent_Conditional_10_Conditional_31_Conditional_2_Template_button_click_49_listener() { i0.ɵɵrestoreView(_r28); const ctx_r1 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r1.closeInspector()); });
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(50, "svg", 57);
    i0.ɵɵtext(51, " Done ");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const selectedSubsection_r29 = ctx;
    i0.ɵɵadvance(7);
    i0.ɵɵtwoWayProperty("ngModel", selectedSubsection_r29.name);
    i0.ɵɵadvance(4);
    i0.ɵɵtwoWayProperty("ngModel", selectedSubsection_r29.description);
    i0.ɵɵadvance(10);
    i0.ɵɵtwoWayProperty("ngModel", selectedSubsection_r29.isActive);
    i0.ɵɵadvance(7);
    i0.ɵɵtwoWayProperty("ngModel", selectedSubsection_r29.isRepeatable);
    i0.ɵɵadvance();
    i0.ɵɵconditional(selectedSubsection_r29.isRepeatable ? 29 : -1);
    i0.ɵɵadvance(10);
    i0.ɵɵproperty("ngModel", !!selectedSubsection_r29.visibilityCondition);
    i0.ɵɵadvance();
    i0.ɵɵconditional(selectedSubsection_r29.visibilityCondition ? 40 : -1);
} }
function FormBuilderComponent_Conditional_10_Conditional_31_Conditional_3_Template(rf, ctx) { if (rf & 1) {
    const _r33 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 81)(1, "section", 46)(2, "h3");
    i0.ɵɵtext(3, "Tab properties");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "label")(5, "span");
    i0.ɵɵtext(6, "Tab title");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "input", 48);
    i0.ɵɵtwoWayListener("ngModelChange", function FormBuilderComponent_Conditional_10_Conditional_31_Conditional_3_Template_input_ngModelChange_7_listener($event) { const selectedSection_r34 = i0.ɵɵrestoreView(_r33); i0.ɵɵtwoWayBindingSet(selectedSection_r34.name, $event) || (selectedSection_r34.name = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(8, "label")(9, "span");
    i0.ɵɵtext(10, "Description");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(11, "textarea", 78);
    i0.ɵɵtwoWayListener("ngModelChange", function FormBuilderComponent_Conditional_10_Conditional_31_Conditional_3_Template_textarea_ngModelChange_11_listener($event) { const selectedSection_r34 = i0.ɵɵrestoreView(_r33); i0.ɵɵtwoWayBindingSet(selectedSection_r34.description, $event) || (selectedSection_r34.description = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(12, "label", 50)(13, "span")(14, "strong");
    i0.ɵɵtext(15, "Enabled");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(16, "small");
    i0.ɵɵtext(17, "Include this tab in the form");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(18, "input", 51);
    i0.ɵɵtwoWayListener("ngModelChange", function FormBuilderComponent_Conditional_10_Conditional_31_Conditional_3_Template_input_ngModelChange_18_listener($event) { const selectedSection_r34 = i0.ɵɵrestoreView(_r33); i0.ɵɵtwoWayBindingSet(selectedSection_r34.isActive, $event) || (selectedSection_r34.isActive = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd()()()();
    i0.ɵɵelementStart(19, "div", 55)(20, "button", 73);
    i0.ɵɵlistener("click", function FormBuilderComponent_Conditional_10_Conditional_31_Conditional_3_Template_button_click_20_listener() { i0.ɵɵrestoreView(_r33); const ctx_r1 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r1.duplicateCurrentSelection()); });
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(21, "svg", 74);
    i0.ɵɵtext(22, " Duplicate ");
    i0.ɵɵelementEnd();
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(23, "button", 75);
    i0.ɵɵlistener("click", function FormBuilderComponent_Conditional_10_Conditional_31_Conditional_3_Template_button_click_23_listener() { i0.ɵɵrestoreView(_r33); const ctx_r1 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r1.deleteCurrentSelection()); });
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(24, "svg", 76);
    i0.ɵɵtext(25, " Delete ");
    i0.ɵɵelementEnd();
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelement(26, "span", 56);
    i0.ɵɵelementStart(27, "button", 80);
    i0.ɵɵlistener("click", function FormBuilderComponent_Conditional_10_Conditional_31_Conditional_3_Template_button_click_27_listener() { i0.ɵɵrestoreView(_r33); const ctx_r1 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r1.closeInspector()); });
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(28, "svg", 57);
    i0.ɵɵtext(29, " Done ");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const selectedSection_r34 = ctx;
    i0.ɵɵadvance(7);
    i0.ɵɵtwoWayProperty("ngModel", selectedSection_r34.name);
    i0.ɵɵadvance(4);
    i0.ɵɵtwoWayProperty("ngModel", selectedSection_r34.description);
    i0.ɵɵadvance(7);
    i0.ɵɵtwoWayProperty("ngModel", selectedSection_r34.isActive);
} }
function FormBuilderComponent_Conditional_10_Conditional_31_Conditional_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 44);
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(1, "svg", 82);
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(2, "strong");
    i0.ɵɵtext(3, "Select an item to configure");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "p");
    i0.ɵɵtext(5, "Choose a tab, section, or field from the workspace.");
    i0.ɵɵelementEnd()();
} }
function FormBuilderComponent_Conditional_10_Conditional_31_Template(rf, ctx) { if (rf & 1) {
    const _r11 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "erp-settings-modal", 43);
    i0.ɵɵlistener("closed", function FormBuilderComponent_Conditional_10_Conditional_31_Template_erp_settings_modal_closed_0_listener() { i0.ɵɵrestoreView(_r11); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.closeInspector()); });
    i0.ɵɵconditionalCreate(1, FormBuilderComponent_Conditional_10_Conditional_31_Conditional_1_Template, 1, 1)(2, FormBuilderComponent_Conditional_10_Conditional_31_Conditional_2_Template, 52, 7)(3, FormBuilderComponent_Conditional_10_Conditional_31_Conditional_3_Template, 30, 3)(4, FormBuilderComponent_Conditional_10_Conditional_31_Conditional_4_Template, 6, 0, "div", 44);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    let tmp_6_0;
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("title", ctx_r1.inspectorTitle())("eyebrow", ctx_r1.inspectorEyebrow())("open", true);
    i0.ɵɵadvance();
    i0.ɵɵconditional((tmp_6_0 = ctx_r1.fieldDialog()) ? 1 : (tmp_6_0 = ctx_r1.subsection()) ? 2 : (tmp_6_0 = ctx_r1.section()) ? 3 : 4, tmp_6_0);
} }
function FormBuilderComponent_Conditional_10_Template(rf, ctx) { if (rf & 1) {
    const _r3 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "section", 15)(1, "div", 16)(2, "div")(3, "h2");
    i0.ɵɵtext(4, "Form purpose and audience");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "p");
    i0.ɵɵtext(6, " Controls publishing requirements, who receives this form, and where responses are stored. ");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(7, "div", 17)(8, "label")(9, "span");
    i0.ɵɵtext(10, "Form purpose *");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(11, "select", 18);
    i0.ɵɵlistener("ngModelChange", function FormBuilderComponent_Conditional_10_Template_select_ngModelChange_11_listener($event) { i0.ɵɵrestoreView(_r3); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.setPurpose($event)); });
    i0.ɵɵelementStart(12, "option", 19);
    i0.ɵɵtext(13, "Student admission");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(14, "option", 20);
    i0.ɵɵtext(15, "Faculty application");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(16, "option", 21);
    i0.ɵɵtext(17, "Employee application");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(18, "option", 22);
    i0.ɵɵtext(19, "General/custom form");
    i0.ɵɵelementEnd()()();
    i0.ɵɵconditionalCreate(20, FormBuilderComponent_Conditional_10_Conditional_20_Template, 8, 6);
    i0.ɵɵconditionalCreate(21, FormBuilderComponent_Conditional_10_Conditional_21_Template, 12, 10);
    i0.ɵɵconditionalCreate(22, FormBuilderComponent_Conditional_10_Conditional_22_Template, 31, 10);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(23, "div", 23)(24, "button", 24);
    i0.ɵɵlistener("click", function FormBuilderComponent_Conditional_10_Template_button_click_24_listener() { i0.ɵɵrestoreView(_r3); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.structureVisible.set(true)); });
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(25, "svg", 25);
    i0.ɵɵtext(26, " Form structure ");
    i0.ɵɵelementEnd()();
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(27, "div", 26);
    i0.ɵɵconditionalCreate(28, FormBuilderComponent_Conditional_10_Conditional_28_Template, 1, 0, "button", 27);
    i0.ɵɵelementStart(29, "erp-form-structure-panel", 28);
    i0.ɵɵlistener("closeRequested", function FormBuilderComponent_Conditional_10_Template_erp_form_structure_panel_closeRequested_29_listener() { i0.ɵɵrestoreView(_r3); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.toggleStructure()); })("addRequested", function FormBuilderComponent_Conditional_10_Template_erp_form_structure_panel_addRequested_29_listener($event) { i0.ɵɵrestoreView(_r3); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.handleStructureAdd($event)); })("sectionToggled", function FormBuilderComponent_Conditional_10_Template_erp_form_structure_panel_sectionToggled_29_listener($event) { i0.ɵɵrestoreView(_r3); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.toggleSectionExpansion($event)); })("sectionSelected", function FormBuilderComponent_Conditional_10_Template_erp_form_structure_panel_sectionSelected_29_listener($event) { i0.ɵɵrestoreView(_r3); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.handleStructureSectionSelected($event)); })("subsectionSelected", function FormBuilderComponent_Conditional_10_Template_erp_form_structure_panel_subsectionSelected_29_listener($event) { i0.ɵɵrestoreView(_r3); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.handleStructureSubsectionSelected($event)); })("fieldSelected", function FormBuilderComponent_Conditional_10_Template_erp_form_structure_panel_fieldSelected_29_listener($event) { i0.ɵɵrestoreView(_r3); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.handleStructureFieldSelected($event)); })("addSubsectionRequested", function FormBuilderComponent_Conditional_10_Template_erp_form_structure_panel_addSubsectionRequested_29_listener($event) { i0.ɵɵrestoreView(_r3); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.handleStructureAddSubsection($event)); })("sectionAction", function FormBuilderComponent_Conditional_10_Template_erp_form_structure_panel_sectionAction_29_listener($event) { i0.ɵɵrestoreView(_r3); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.handleStructureSectionAction($event)); })("subsectionAction", function FormBuilderComponent_Conditional_10_Template_erp_form_structure_panel_subsectionAction_29_listener($event) { i0.ɵɵrestoreView(_r3); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.handleStructureSubsectionAction($event)); })("fieldAction", function FormBuilderComponent_Conditional_10_Template_erp_form_structure_panel_fieldAction_29_listener($event) { i0.ɵɵrestoreView(_r3); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.handleStructureFieldAction($event)); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(30, "erp-form-canvas", 29);
    i0.ɵɵlistener("structureRequested", function FormBuilderComponent_Conditional_10_Template_erp_form_canvas_structureRequested_30_listener() { i0.ɵɵrestoreView(_r3); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.structureVisible.set(true)); })("addFieldRequested", function FormBuilderComponent_Conditional_10_Template_erp_form_canvas_addFieldRequested_30_listener() { i0.ɵɵrestoreView(_r3); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.addField()); })("fieldSelected", function FormBuilderComponent_Conditional_10_Template_erp_form_canvas_fieldSelected_30_listener($event) { i0.ɵɵrestoreView(_r3); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.selectField($event)); })("fieldAction", function FormBuilderComponent_Conditional_10_Template_erp_form_canvas_fieldAction_30_listener($event) { i0.ɵɵrestoreView(_r3); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.handleCanvasFieldAction($event)); })("sectionAction", function FormBuilderComponent_Conditional_10_Template_erp_form_canvas_sectionAction_30_listener($event) { i0.ɵɵrestoreView(_r3); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.handleCanvasSectionAction($event)); });
    i0.ɵɵelementEnd();
    i0.ɵɵconditionalCreate(31, FormBuilderComponent_Conditional_10_Conditional_31_Template, 5, 4, "erp-settings-modal", 30);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const current_r5 = ctx;
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(11);
    i0.ɵɵproperty("disabled", ctx_r1.destinationLocked() || current_r5.status === "published")("ngModel", current_r5.purpose || "admission");
    i0.ɵɵadvance(9);
    i0.ɵɵconditional((current_r5.purpose || "admission") === "admission" ? 20 : -1);
    i0.ɵɵadvance();
    i0.ɵɵconditional((current_r5.purpose || "admission") !== "general" ? 21 : -1);
    i0.ɵɵadvance();
    i0.ɵɵconditional((current_r5.purpose || "admission") !== "admission" ? 22 : -1);
    i0.ɵɵadvance(5);
    i0.ɵɵclassProp("builder-grid--structure-hidden", !ctx_r1.structureVisible());
    i0.ɵɵadvance();
    i0.ɵɵconditional(ctx_r1.structureVisible() ? 28 : -1);
    i0.ɵɵadvance();
    i0.ɵɵproperty("form", current_r5)("open", ctx_r1.structureVisible())("selectedSectionId", ctx_r1.selectedSectionId())("selectedSubsectionId", ctx_r1.selectedSubsectionId())("selectedFieldId", ctx_r1.selectedFieldId())("expandedSectionIds", ctx_r1.expandedSectionIds());
    i0.ɵɵadvance();
    i0.ɵɵproperty("section", ctx_r1.section())("subsection", ctx_r1.subsection())("selectedFieldId", ctx_r1.selectedFieldId())("structureVisible", ctx_r1.structureVisible());
    i0.ɵɵadvance();
    i0.ɵɵconditional(ctx_r1.inspectorVisible() ? 31 : -1);
} }
function FormBuilderComponent_Conditional_11_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "section", 8)(1, "strong");
    i0.ɵɵtext(2, "Create an admission form to begin.");
    i0.ɵɵelementEnd()();
} }
function FormBuilderComponent_Conditional_12_Conditional_18_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(0, "svg", 92);
} }
function FormBuilderComponent_Conditional_12_Conditional_19_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(0, "svg", 93);
} }
function FormBuilderComponent_Conditional_12_Conditional_32_For_2_Conditional_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(0, "svg", 99);
} }
function FormBuilderComponent_Conditional_12_Conditional_32_For_2_Conditional_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(0, "svg", 100);
} }
function FormBuilderComponent_Conditional_12_Conditional_32_For_2_Conditional_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵtext(1, "Fix");
    i0.ɵɵelementEnd();
} }
function FormBuilderComponent_Conditional_12_Conditional_32_For_2_Template(rf, ctx) { if (rf & 1) {
    const _r36 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 98);
    i0.ɵɵlistener("click", function FormBuilderComponent_Conditional_12_Conditional_32_For_2_Template_button_click_0_listener() { const issue_r37 = i0.ɵɵrestoreView(_r36).$implicit; const ctx_r1 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r1.focusPublishIssue(issue_r37)); });
    i0.ɵɵelementStart(1, "span");
    i0.ɵɵconditionalCreate(2, FormBuilderComponent_Conditional_12_Conditional_32_For_2_Conditional_2_Template, 1, 0, ":svg:svg", 99)(3, FormBuilderComponent_Conditional_12_Conditional_32_For_2_Conditional_3_Template, 1, 0, ":svg:svg", 100);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "span")(5, "strong");
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "small");
    i0.ɵɵtext(8);
    i0.ɵɵelementEnd()();
    i0.ɵɵconditionalCreate(9, FormBuilderComponent_Conditional_12_Conditional_32_For_2_Conditional_9_Template, 2, 0, "span");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const issue_r37 = ctx.$implicit;
    i0.ɵɵclassProp("is-blocker", issue_r37.severity === "blocker");
    i0.ɵɵproperty("disabled", !issue_r37.sectionId);
    i0.ɵɵadvance(2);
    i0.ɵɵconditional(issue_r37.severity === "blocker" ? 2 : 3);
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(issue_r37.title);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(issue_r37.detail);
    i0.ɵɵadvance();
    i0.ɵɵconditional(issue_r37.sectionId ? 9 : -1);
} }
function FormBuilderComponent_Conditional_12_Conditional_32_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 94);
    i0.ɵɵrepeaterCreate(1, FormBuilderComponent_Conditional_12_Conditional_32_For_2_Template, 10, 7, "button", 97, _forTrack3);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵrepeater(ctx_r1.publishIssues());
} }
function FormBuilderComponent_Conditional_12_Conditional_33_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 95);
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(1, "svg", 101);
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(2, "div")(3, "strong");
    i0.ɵɵtext(4, "Ready to publish");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "p");
    i0.ɵɵtext(6, "No structural or content-quality issues were found.");
    i0.ɵɵelementEnd()()();
} }
function FormBuilderComponent_Conditional_12_Conditional_36_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtext(0, " Resolve every blocker before the form can be published. ");
} }
function FormBuilderComponent_Conditional_12_Conditional_37_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtext(0, " Publishing makes this structure available to new application flows. ");
} }
function FormBuilderComponent_Conditional_12_Template(rf, ctx) { if (rf & 1) {
    const _r35 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 9)(1, "button", 83);
    i0.ɵɵlistener("click", function FormBuilderComponent_Conditional_12_Template_button_click_1_listener() { i0.ɵɵrestoreView(_r35); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.closePublishChecklist()); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(2, "section", 84)(3, "header", 85)(4, "span", 86);
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(5, "svg", 87);
    i0.ɵɵelementEnd();
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(6, "div")(7, "small");
    i0.ɵɵtext(8, "Publishing controls");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(9, "h2", 88);
    i0.ɵɵtext(10, "Review form readiness");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(11, "p");
    i0.ɵɵtext(12, "Check structure, dependencies, required content, and upload rules.");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(13, "button", 89);
    i0.ɵɵlistener("click", function FormBuilderComponent_Conditional_12_Template_button_click_13_listener() { i0.ɵɵrestoreView(_r35); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.closePublishChecklist()); });
    i0.ɵɵtext(14, " \u00D7 ");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(15, "div", 90)(16, "div", 91)(17, "div");
    i0.ɵɵconditionalCreate(18, FormBuilderComponent_Conditional_12_Conditional_18_Template, 1, 0, ":svg:svg", 92)(19, FormBuilderComponent_Conditional_12_Conditional_19_Template, 1, 0, ":svg:svg", 93);
    i0.ɵɵelementStart(20, "span")(21, "strong");
    i0.ɵɵtext(22);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(23, "small");
    i0.ɵɵtext(24, "Blocking issues");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(25, "div");
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(26, "svg", 92);
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(27, "span")(28, "strong");
    i0.ɵɵtext(29);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(30, "small");
    i0.ɵɵtext(31, "Advisory warnings");
    i0.ɵɵelementEnd()()()();
    i0.ɵɵconditionalCreate(32, FormBuilderComponent_Conditional_12_Conditional_32_Template, 3, 0, "div", 94)(33, FormBuilderComponent_Conditional_12_Conditional_33_Template, 7, 0, "div", 95);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(34, "footer", 96)(35, "p");
    i0.ɵɵconditionalCreate(36, FormBuilderComponent_Conditional_12_Conditional_36_Template, 1, 0)(37, FormBuilderComponent_Conditional_12_Conditional_37_Template, 1, 0);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(38, "button", 24);
    i0.ɵɵlistener("click", function FormBuilderComponent_Conditional_12_Template_button_click_38_listener() { i0.ɵɵrestoreView(_r35); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.closePublishChecklist()); });
    i0.ɵɵtext(39, "Cancel");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(40, "button", 13);
    i0.ɵɵlistener("click", function FormBuilderComponent_Conditional_12_Template_button_click_40_listener() { i0.ɵɵrestoreView(_r35); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.confirmPublish()); });
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(41, "svg", 14);
    i0.ɵɵtext(42);
    i0.ɵɵelementEnd()()()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("cdkTrapFocusAutoCapture", true);
    i0.ɵɵadvance(15);
    i0.ɵɵclassProp("has-blockers", ctx_r1.publishBlockers().length);
    i0.ɵɵadvance();
    i0.ɵɵconditional(ctx_r1.publishBlockers().length ? 18 : 19);
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(ctx_r1.publishBlockers().length);
    i0.ɵɵadvance(3);
    i0.ɵɵclassProp("has-warnings", ctx_r1.publishWarnings().length);
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(ctx_r1.publishWarnings().length);
    i0.ɵɵadvance(3);
    i0.ɵɵconditional(ctx_r1.publishIssues().length ? 32 : 33);
    i0.ɵɵadvance(4);
    i0.ɵɵconditional(ctx_r1.publishBlockers().length ? 36 : 37);
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("disabled", ctx_r1.publishBlockers().length || ctx_r1.saving());
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", ctx_r1.saving() ? "Publishing\u2026" : "Publish form", " ");
} }
function FormBuilderComponent_Conditional_13_Conditional_28_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 110);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r1.createFormError());
} }
function FormBuilderComponent_Conditional_13_Template(rf, ctx) { if (rf & 1) {
    const _r38 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 10)(1, "button", 102);
    i0.ɵɵlistener("click", function FormBuilderComponent_Conditional_13_Template_button_click_1_listener() { i0.ɵɵrestoreView(_r38); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.closeCreateFormDialog()); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(2, "form", 103);
    i0.ɵɵlistener("ngSubmit", function FormBuilderComponent_Conditional_13_Template_form_ngSubmit_2_listener() { i0.ɵɵrestoreView(_r38); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.createForm()); });
    i0.ɵɵelementStart(3, "header", 104)(4, "div")(5, "small");
    i0.ɵɵtext(6, "Forms");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "h2", 105);
    i0.ɵɵtext(8, "Create form");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(9, "button", 106);
    i0.ɵɵlistener("click", function FormBuilderComponent_Conditional_13_Template_button_click_9_listener() { i0.ɵɵrestoreView(_r38); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.closeCreateFormDialog()); });
    i0.ɵɵtext(10, "\u00D7");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(11, "div", 107)(12, "label")(13, "span");
    i0.ɵɵtext(14, "Form name *");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(15, "input", 108);
    i0.ɵɵtwoWayListener("ngModelChange", function FormBuilderComponent_Conditional_13_Template_input_ngModelChange_15_listener($event) { i0.ɵɵrestoreView(_r38); const ctx_r1 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r1.newFormName, $event) || (ctx_r1.newFormName = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(16, "label")(17, "span");
    i0.ɵɵtext(18, "Form purpose *");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(19, "select", 109);
    i0.ɵɵtwoWayListener("ngModelChange", function FormBuilderComponent_Conditional_13_Template_select_ngModelChange_19_listener($event) { i0.ɵɵrestoreView(_r38); const ctx_r1 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r1.newFormPurpose, $event) || (ctx_r1.newFormPurpose = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementStart(20, "option", 19);
    i0.ɵɵtext(21, "Student admission");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(22, "option", 20);
    i0.ɵɵtext(23, "Faculty application");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(24, "option", 21);
    i0.ɵɵtext(25, "Employee application");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(26, "option", 22);
    i0.ɵɵtext(27, "General/custom form");
    i0.ɵɵelementEnd()()();
    i0.ɵɵconditionalCreate(28, FormBuilderComponent_Conditional_13_Conditional_28_Template, 2, 1, "p", 110);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(29, "footer", 111)(30, "button", 24);
    i0.ɵɵlistener("click", function FormBuilderComponent_Conditional_13_Template_button_click_30_listener() { i0.ɵɵrestoreView(_r38); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.closeCreateFormDialog()); });
    i0.ɵɵtext(31, "Cancel");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(32, "button", 112);
    i0.ɵɵtext(33);
    i0.ɵɵelementEnd()()()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(15);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r1.newFormName);
    i0.ɵɵadvance(4);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r1.newFormPurpose);
    i0.ɵɵadvance(9);
    i0.ɵɵconditional(ctx_r1.createFormError() ? 28 : -1);
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("disabled", !ctx_r1.newFormName.trim() || ctx_r1.creatingForm());
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r1.creatingForm() ? "Creating\u2026" : "Create form", " ");
} }
function FormBuilderComponent_Conditional_14_Template(rf, ctx) { if (rf & 1) {
    const _r39 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 10)(1, "button", 102);
    i0.ɵɵlistener("click", function FormBuilderComponent_Conditional_14_Template_button_click_1_listener() { i0.ɵɵrestoreView(_r39); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.nameDialog.set(null)); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(2, "section", 113)(3, "header", 104)(4, "div")(5, "small");
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "h2", 114);
    i0.ɵɵtext(8);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(9, "button", 106);
    i0.ɵɵlistener("click", function FormBuilderComponent_Conditional_14_Template_button_click_9_listener() { i0.ɵɵrestoreView(_r39); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.nameDialog.set(null)); });
    i0.ɵɵtext(10, "\u00D7");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(11, "div", 107)(12, "label")(13, "span");
    i0.ɵɵtext(14, "Name *");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(15, "input", 115);
    i0.ɵɵtwoWayListener("ngModelChange", function FormBuilderComponent_Conditional_14_Template_input_ngModelChange_15_listener($event) { i0.ɵɵrestoreView(_r39); const ctx_r1 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r1.dialogName, $event) || (ctx_r1.dialogName = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(16, "label")(17, "span");
    i0.ɵɵtext(18, "Description");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(19, "textarea", 78);
    i0.ɵɵtwoWayListener("ngModelChange", function FormBuilderComponent_Conditional_14_Template_textarea_ngModelChange_19_listener($event) { i0.ɵɵrestoreView(_r39); const ctx_r1 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r1.dialogDescription, $event) || (ctx_r1.dialogDescription = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(20, "footer", 111)(21, "button", 24);
    i0.ɵɵlistener("click", function FormBuilderComponent_Conditional_14_Template_button_click_21_listener() { i0.ɵɵrestoreView(_r39); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.nameDialog.set(null)); });
    i0.ɵɵtext(22, "Cancel");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(23, "button", 13);
    i0.ɵɵlistener("click", function FormBuilderComponent_Conditional_14_Template_button_click_23_listener() { i0.ɵɵrestoreView(_r39); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.saveNameDialog()); });
    i0.ɵɵtext(24);
    i0.ɵɵelementEnd()()()();
} if (rf & 2) {
    const dialog_r40 = ctx;
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(6);
    i0.ɵɵtextInterpolate(dialog_r40.mode === "add" ? "Create" : "Edit");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(dialog_r40.kind === "section" ? "Tab" : "Sub section");
    i0.ɵɵadvance(7);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r1.dialogName);
    i0.ɵɵadvance(4);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r1.dialogDescription);
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("disabled", !ctx_r1.dialogName.trim());
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", dialog_r40.mode === "add" ? "Create" : "Save changes", " ");
} }
function FormBuilderComponent_Conditional_15_Conditional_10_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 110);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r1.deleteError());
} }
function FormBuilderComponent_Conditional_15_Template(rf, ctx) { if (rf & 1) {
    const _r41 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 10)(1, "button", 116);
    i0.ɵɵlistener("click", function FormBuilderComponent_Conditional_15_Template_button_click_1_listener() { i0.ɵɵrestoreView(_r41); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.deleteDialog.set(null)); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(2, "section", 117)(3, "div", 118)(4, "span", 119);
    i0.ɵɵtext(5, "!");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "h2", 120);
    i0.ɵɵtext(7);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "p");
    i0.ɵɵtext(9);
    i0.ɵɵelementEnd();
    i0.ɵɵconditionalCreate(10, FormBuilderComponent_Conditional_15_Conditional_10_Template, 2, 1, "p", 110);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(11, "footer", 111)(12, "button", 11);
    i0.ɵɵlistener("click", function FormBuilderComponent_Conditional_15_Template_button_click_12_listener() { i0.ɵɵrestoreView(_r41); const ctx_r1 = i0.ɵɵnextContext(); ctx_r1.deleteDialog.set(null); return i0.ɵɵresetView(ctx_r1.deleteError.set("")); });
    i0.ɵɵtext(13, " Cancel");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(14, "button", 121);
    i0.ɵɵlistener("click", function FormBuilderComponent_Conditional_15_Template_button_click_14_listener() { i0.ɵɵrestoreView(_r41); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.confirmDelete()); });
    i0.ɵɵtext(15);
    i0.ɵɵelementEnd()()()();
} if (rf & 2) {
    const dialog_r42 = ctx;
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(7);
    i0.ɵɵtextInterpolate(dialog_r42.title);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(dialog_r42.message);
    i0.ɵɵadvance();
    i0.ɵɵconditional(ctx_r1.deleteError() ? 10 : -1);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("disabled", ctx_r1.deleting());
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("disabled", ctx_r1.deleting());
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r1.deleting() ? "Deleting\u2026" : "Delete permanently", " ");
} }
const FIELD_TYPES = [
    ['text', 'Text'],
    ['number', 'Number'],
    ['email', 'Email'],
    ['mobile', 'Mobile Number'],
    ['date', 'Date'],
    ['textarea', 'Textarea'],
    ['dropdown', 'Dropdown'],
    ['radio', 'Radio Button'],
    ['checkbox', 'Checkbox'],
    ['multi-select', 'Multi Select'],
    ['file', 'File Upload'],
    ['image', 'Image Upload'],
    ['signature', 'Signature'],
];
export class FormBuilderComponent {
    api = inject(ApiService);
    route = inject(ActivatedRoute);
    compactStructureLayout = false;
    requestedFormId = this.route.snapshot.paramMap.get('formId');
    forms = signal([], ...(ngDevMode ? [{ debugName: "forms" }] : /* istanbul ignore next */ []));
    form = signal(null, ...(ngDevMode ? [{ debugName: "form" }] : /* istanbul ignore next */ []));
    types = signal([], ...(ngDevMode ? [{ debugName: "types" }] : /* istanbul ignore next */ []));
    mappingMasters = signal([], ...(ngDevMode ? [{ debugName: "mappingMasters" }] : /* istanbul ignore next */ []));
    selectedSectionId = signal('', ...(ngDevMode ? [{ debugName: "selectedSectionId" }] : /* istanbul ignore next */ []));
    selectedSubsectionId = signal('', ...(ngDevMode ? [{ debugName: "selectedSubsectionId" }] : /* istanbul ignore next */ []));
    selectedFieldId = signal('', ...(ngDevMode ? [{ debugName: "selectedFieldId" }] : /* istanbul ignore next */ []));
    expandedSectionIds = signal(new Set(), ...(ngDevMode ? [{ debugName: "expandedSectionIds" }] : /* istanbul ignore next */ []));
    fieldTypes = FIELD_TYPES;
    saving = signal(false, ...(ngDevMode ? [{ debugName: "saving" }] : /* istanbul ignore next */ []));
    dirty = signal(false, ...(ngDevMode ? [{ debugName: "dirty" }] : /* istanbul ignore next */ []));
    message = signal('', ...(ngDevMode ? [{ debugName: "message" }] : /* istanbul ignore next */ []));
    error = signal('', ...(ngDevMode ? [{ debugName: "error" }] : /* istanbul ignore next */ []));
    nameDialog = signal(null, ...(ngDevMode ? [{ debugName: "nameDialog" }] : /* istanbul ignore next */ []));
    fieldDialog = signal(null, ...(ngDevMode ? [{ debugName: "fieldDialog" }] : /* istanbul ignore next */ []));
    deleteDialog = signal(null, ...(ngDevMode ? [{ debugName: "deleteDialog" }] : /* istanbul ignore next */ []));
    deleting = signal(false, ...(ngDevMode ? [{ debugName: "deleting" }] : /* istanbul ignore next */ []));
    deleteError = signal('', ...(ngDevMode ? [{ debugName: "deleteError" }] : /* istanbul ignore next */ []));
    createFormDialog = signal(false, ...(ngDevMode ? [{ debugName: "createFormDialog" }] : /* istanbul ignore next */ []));
    creatingForm = signal(false, ...(ngDevMode ? [{ debugName: "creatingForm" }] : /* istanbul ignore next */ []));
    createFormError = signal('', ...(ngDevMode ? [{ debugName: "createFormError" }] : /* istanbul ignore next */ []));
    publishDialog = signal(false, ...(ngDevMode ? [{ debugName: "publishDialog" }] : /* istanbul ignore next */ []));
    publishIssues = signal([], ...(ngDevMode ? [{ debugName: "publishIssues" }] : /* istanbul ignore next */ []));
    publishBlockers = computed(() => this.publishIssues().filter((issue) => issue.severity === 'blocker'), ...(ngDevMode ? [{ debugName: "publishBlockers" }] : /* istanbul ignore next */ []));
    publishWarnings = computed(() => this.publishIssues().filter((issue) => issue.severity === 'warning'), ...(ngDevMode ? [{ debugName: "publishWarnings" }] : /* istanbul ignore next */ []));
    inspectorVisible = signal(false, ...(ngDevMode ? [{ debugName: "inspectorVisible" }] : /* istanbul ignore next */ []));
    structureVisible = signal(true, ...(ngDevMode ? [{ debugName: "structureVisible" }] : /* istanbul ignore next */ []));
    saveStateText = computed(() => {
        if (this.saving())
            return 'Saving changes…';
        if (this.dirty())
            return 'Unsaved changes';
        return 'Saved just now';
    }, ...(ngDevMode ? [{ debugName: "saveStateText" }] : /* istanbul ignore next */ []));
    inspectorTitle = computed(() => {
        const dialog = this.fieldDialog();
        if (dialog)
            return dialog.mode === 'add' ? 'New field' : dialog.draft.name || 'Field properties';
        return this.subsection()?.name || this.section()?.name || 'Properties';
    }, ...(ngDevMode ? [{ debugName: "inspectorTitle" }] : /* istanbul ignore next */ []));
    inspectorEyebrow = computed(() => {
        if (this.fieldDialog())
            return 'Field settings';
        if (this.subsection())
            return 'Section settings';
        if (this.section())
            return 'Tab settings';
        return 'Configuration';
    }, ...(ngDevMode ? [{ debugName: "inspectorEyebrow" }] : /* istanbul ignore next */ []));
    newFormName = '';
    newFormPurpose = 'admission';
    dialogName = '';
    dialogDescription = '';
    dialogOptionText = '';
    constructor() {
        if (typeof window !== 'undefined') {
            this.compactStructureLayout = window.innerWidth < 1440;
            if (this.compactStructureLayout)
                this.structureVisible.set(false);
        }
        this.load();
        this.api
            .masterTypes()
            .subscribe(({ items }) => this.types.set(items.filter((t) => t.isActive)));
        this.api.formMappingOptions().subscribe(({ items }) => this.mappingMasters.set(items));
    }
    handleViewportResize() {
        const compact = window.innerWidth < 1440;
        if (compact === this.compactStructureLayout)
            return;
        this.compactStructureLayout = compact;
        this.structureVisible.set(!compact);
    }
    closePublishChecklistOnEscape() {
        if (this.publishDialog())
            this.closePublishChecklist();
    }
    load() {
        this.api.forms().subscribe(({ items }) => {
            this.forms.set(items);
            if (this.form() || !items.length)
                return;
            const requested = this.requestedFormId
                ? items.find((item) => item._id === this.requestedFormId)
                : null;
            if (this.requestedFormId && !requested) {
                this.error.set('The requested admission form is no longer available.');
            }
            this.choose(requested || items[0]);
        });
    }
    chooseForm(id) {
        const item = this.forms().find((candidate) => candidate._id === id);
        if (item)
            this.choose(item);
    }
    choose(form) {
        const draft = structuredClone(form);
        draft.purpose ||= 'admission';
        draft.codeGeneration ||= {
            enabled: draft.purpose !== 'admission',
            prefix: '',
            digits: 8,
        };
        if (draft.purpose !== 'admission')
            draft.destination ||= {
                navigationSectionId: '',
                navigationSectionName: '',
                menuName: draft.name,
                databaseSectionId: '',
                databaseSectionName: '',
            };
        draft.audience ||= {
            academicSessionIds: [],
            universityIds: [],
            collegeIds: [],
            departmentIds: [],
            levelIds: [],
        };
        this.form.set(draft);
        this.selectedSectionId.set(form.sections[0]?.id || '');
        this.selectedSubsectionId.set(form.sections[0]?.subsections[0]?.id || '');
        this.selectedFieldId.set('');
        this.expandedSectionIds.set(new Set());
        this.fieldDialog.set(null);
        this.inspectorVisible.set(false);
        this.dirty.set(false);
    }
    mappingOptions(typeSlug) {
        const audience = this.form()?.audience;
        const parents = typeSlug === 'college'
            ? audience?.universityIds
            : typeSlug === 'department'
                ? audience?.collegeIds
                : typeSlug === 'level'
                    ? audience?.departmentIds
                    : [];
        return this.mappingMasters()
            .filter((item) => item.typeSlug === typeSlug &&
            (!parents?.length || (item.parentId && parents.includes(String(item.parentId)))))
            .map((item) => ({ value: item._id, label: item.name }));
    }
    setPurpose(value) {
        this.change((form) => {
            form.purpose = value || 'admission';
            form.codeGeneration = {
                enabled: form.purpose !== 'admission',
                prefix: '',
                digits: form.purpose === 'admission' ? 6 : 8,
            };
            form.destination =
                form.purpose === 'admission'
                    ? null
                    : form.destination || {
                        navigationSectionId: '',
                        navigationSectionName: '',
                        menuName: form.name,
                        databaseSectionId: '',
                        databaseSectionName: '',
                    };
            form.audience ||= {
                academicSessionIds: [],
                universityIds: [],
                collegeIds: [],
                departmentIds: [],
                levelIds: [],
            };
        });
    }
    destinationOptions(kind) {
        const options = new Map();
        const purpose = this.form()?.purpose;
        const recommended = {
            faculty: ['faculty', 'Faculty'],
            employee: ['employees', 'Employees'],
            general: ['other-applications', 'Other Applications'],
        }[purpose === 'admission' ? 'general' : purpose || 'general'];
        options.set(recommended[0], recommended[1]);
        for (const form of this.forms()) {
            const destination = form.destination;
            const id = kind === 'navigation' ? destination?.navigationSectionId : destination?.databaseSectionId;
            const name = kind === 'navigation'
                ? destination?.navigationSectionName
                : destination?.databaseSectionName;
            if (id && name)
                options.set(id, name);
        }
        return [...options].map(([value, label]) => ({ value, label }));
    }
    selectDestination(kind, sectionId) {
        if (!sectionId)
            return;
        const option = this.destinationOptions(kind).find((item) => item.value === sectionId);
        if (!option)
            return;
        this.change((form) => {
            if (!form.destination)
                return;
            if (kind === 'navigation') {
                form.destination.navigationSectionId = option.value;
                form.destination.navigationSectionName = option.label;
            }
            else {
                form.destination.databaseSectionId = option.value;
                form.destination.databaseSectionName = option.label;
            }
        });
    }
    setDestinationName(kind, name) {
        this.change((form) => {
            if (!form.destination)
                return;
            const normalizedName = String(name).slice(0, 80);
            const sectionId = this.sectionSlug(normalizedName);
            if (kind === 'navigation') {
                form.destination.navigationSectionName = normalizedName;
                form.destination.navigationSectionId = sectionId;
            }
            else {
                form.destination.databaseSectionName = normalizedName;
                form.destination.databaseSectionId = sectionId;
            }
        });
    }
    setDestinationMenuName(name) {
        this.change((form) => {
            if (form.destination)
                form.destination.menuName = String(name).slice(0, 80);
        });
    }
    destinationLocked() {
        return Boolean(this.form()?.destinationLockedAt);
    }
    setAudience(field, values) {
        this.change((form) => {
            form.audience ||= {
                academicSessionIds: [],
                universityIds: [],
                collegeIds: [],
                departmentIds: [],
                levelIds: [],
            };
            form.audience[field] = values;
            const validIds = (typeSlug) => new Set(this.mappingOptions(typeSlug).map((item) => item.value));
            if (field === 'universityIds')
                form.audience.collegeIds = form.audience.collegeIds.filter((value) => validIds('college').has(value));
            if (field === 'universityIds' || field === 'collegeIds')
                form.audience.departmentIds = form.audience.departmentIds.filter((value) => validIds('department').has(value));
            if (field !== 'levelIds')
                form.audience.levelIds = form.audience.levelIds.filter((value) => validIds('level').has(value));
        });
    }
    createForm() {
        const name = this.newFormName.trim();
        if (!name || this.creatingForm())
            return;
        this.creatingForm.set(true);
        this.createFormError.set('');
        this.api
            .createForm({
            name,
            description: '',
            purpose: this.newFormPurpose,
            codeGeneration: {
                enabled: this.newFormPurpose !== 'admission',
                prefix: '',
                digits: this.newFormPurpose === 'admission' ? 6 : 8,
            },
            destination: this.newFormPurpose === 'admission'
                ? null
                : {
                    navigationSectionId: '',
                    navigationSectionName: '',
                    menuName: name,
                    databaseSectionId: '',
                    databaseSectionName: '',
                },
            audience: {
                academicSessionIds: [],
                universityIds: [],
                collegeIds: [],
                departmentIds: [],
                levelIds: [],
            },
            status: 'draft',
            isActive: true,
            sections: [],
        })
            .subscribe({
            next: ({ item }) => {
                this.newFormName = '';
                this.createFormDialog.set(false);
                this.forms.update((v) => [item, ...v]);
                this.choose(item);
                this.creatingForm.set(false);
                this.notifyFormNavigation();
            },
            error: (error) => {
                this.createFormError.set(error.error?.message || 'Unable to create form. Try again.');
                this.creatingForm.set(false);
            },
        });
    }
    sectionSlug(value) {
        return value
            .trim()
            .toLowerCase()
            .replace(/[^a-z0-9]+/g, '-')
            .replace(/^-|-$/g, '')
            .slice(0, 60);
    }
    openCreateFormDialog() {
        this.newFormName = '';
        this.newFormPurpose = 'admission';
        this.createFormError.set('');
        this.createFormDialog.set(true);
    }
    closeCreateFormDialog() {
        if (this.creatingForm())
            return;
        this.createFormDialog.set(false);
        this.createFormError.set('');
    }
    openPublishChecklist() {
        const form = this.form();
        if (!form)
            return;
        this.publishIssues.set(validateFormForPublish(form));
        this.publishDialog.set(true);
    }
    closePublishChecklist() {
        if (this.saving())
            return;
        this.publishDialog.set(false);
    }
    confirmPublish() {
        if (this.publishBlockers().length || this.saving())
            return;
        this.publishDialog.set(false);
        this.save(true);
    }
    focusPublishIssue(issue) {
        this.publishDialog.set(false);
        if (!issue.sectionId)
            return;
        const section = this.form()?.sections.find((candidate) => candidate.id === issue.sectionId);
        if (!section)
            return;
        this.expandedSectionIds.update((ids) => new Set([...ids, section.id]));
        if (!issue.subsectionId) {
            this.selectSection(section);
            return;
        }
        const subsection = section.subsections.find((candidate) => candidate.id === issue.subsectionId);
        if (!subsection) {
            this.selectSection(section);
            return;
        }
        if (!issue.fieldId) {
            this.selectSubsection(section, subsection);
            return;
        }
        const field = subsection.fields.find((candidate) => candidate.id === issue.fieldId);
        if (field)
            this.selectFieldFromTree(section, subsection, field);
        else
            this.selectSubsection(section, subsection);
    }
    handleFormAction(action) {
        if (action !== 'delete')
            return;
        const form = this.form();
        if (!form?._id)
            return;
        this.deleteError.set('');
        this.deleteDialog.set({
            kind: 'form',
            targetId: form._id,
            title: 'Delete admission form?',
            message: `${form.name} and its complete form structure will be permanently deleted.`,
        });
    }
    section() {
        return this.form()?.sections.find((s) => s.id === this.selectedSectionId());
    }
    subsection() {
        return this.section()?.subsections.find((s) => s.id === this.selectedSubsectionId());
    }
    field() {
        return this.subsection()?.fields.find((f) => f.id === this.selectedFieldId());
    }
    allFields() {
        return (this.form()?.sections || []).flatMap((s) => s.subsections).flatMap((s) => s.fields);
    }
    addSection() {
        this.dialogName = '';
        this.dialogDescription = '';
        this.nameDialog.set({ kind: 'section', mode: 'add' });
    }
    selectSection(section) {
        this.selectedSectionId.set(section.id);
        this.selectedSubsectionId.set('');
        this.selectedFieldId.set('');
        this.fieldDialog.set(null);
        this.inspectorVisible.set(false);
        this.closeStructureOnCompactScreen();
    }
    sectionExpanded(sectionId) {
        return this.expandedSectionIds().has(sectionId);
    }
    toggleSectionExpansion(section) {
        this.expandedSectionIds.update((ids) => {
            const next = new Set(ids);
            if (next.has(section.id))
                next.delete(section.id);
            else
                next.add(section.id);
            return next;
        });
    }
    renameSection(section) {
        this.dialogName = section.name;
        this.dialogDescription = section.description;
        this.nameDialog.set({ kind: 'section', mode: 'edit', targetId: section.id });
    }
    removeSection(section) {
        this.deleteDialog.set({
            kind: 'section',
            targetId: section.id,
            title: 'Delete Super Section?',
            message: `${section.name} and all of its Sub Sections and fields will be removed.`,
        });
    }
    addSubsection() {
        if (!this.section())
            return;
        this.dialogName = '';
        this.dialogDescription = '';
        this.nameDialog.set({ kind: 'subsection', mode: 'add' });
    }
    selectSubsection(section, subsection) {
        this.selectedSectionId.set(section.id);
        this.selectedSubsectionId.set(subsection.id);
        this.selectedFieldId.set('');
        this.fieldDialog.set(null);
        this.inspectorVisible.set(false);
        this.closeStructureOnCompactScreen();
    }
    renameSubsection(sub) {
        this.dialogName = sub.name;
        this.dialogDescription = sub.description;
        this.nameDialog.set({ kind: 'subsection', mode: 'edit', targetId: sub.id });
    }
    removeSubsection(sub) {
        this.deleteDialog.set({
            kind: 'subsection',
            targetId: sub.id,
            title: 'Delete Sub Section?',
            message: `${sub.name} and all fields inside it will be removed.`,
        });
    }
    addField() {
        const sub = this.subsection();
        if (!sub)
            return;
        const draft = {
            id: this.uid('fld'),
            name: '',
            type: 'text',
            isRequired: false,
            isActive: true,
            order: sub.fields.length,
            placeholder: '',
            defaultValue: null,
            helpText: '',
            options: [],
            dataSource: null,
            searchable: false,
            searchConfig: null,
            validation: {},
            uploadConfig: null,
            visibilityCondition: null,
        };
        this.selectedFieldId.set(draft.id);
        this.dialogOptionText = '';
        this.fieldDialog.set({ mode: 'add', draft });
        this.inspectorVisible.set(true);
    }
    selectField(field) {
        this.selectedFieldId.set(field.id);
        this.dialogOptionText = field.options.map((option) => option.label).join('\n');
        const draft = structuredClone(field);
        this.configureUpload(draft);
        this.fieldDialog.set({ mode: 'edit', draft });
        this.inspectorVisible.set(true);
    }
    selectFieldFromTree(section, subsection, field) {
        this.selectedSectionId.set(section.id);
        this.selectedSubsectionId.set(subsection.id);
        this.selectField(field);
        this.closeStructureOnCompactScreen();
    }
    removeField(field) {
        this.deleteDialog.set({
            kind: 'field',
            targetId: field.id,
            title: 'Delete Field?',
            message: `${field.name} will be removed from this form configuration.`,
        });
    }
    move(items, index, direction) {
        const target = index + direction;
        if (target < 0 || target >= items.length)
            return;
        this.change(() => {
            [items[index], items[target]] = [items[target], items[index]];
        });
    }
    saveNameDialog() {
        const dialog = this.nameDialog();
        const name = this.dialogName.trim();
        if (!dialog || !name)
            return;
        if (dialog.kind === 'section') {
            if (dialog.mode === 'add') {
                const section = {
                    id: this.uid('sec'),
                    name,
                    description: this.dialogDescription.trim(),
                    isActive: true,
                    order: this.form()?.sections.length || 0,
                    subsections: [],
                };
                this.change((form) => form.sections.push(section));
                this.selectedSectionId.set(section.id);
                this.selectedSubsectionId.set('');
            }
            else {
                this.change((form) => {
                    const section = form.sections.find((item) => item.id === dialog.targetId);
                    if (section) {
                        section.name = name;
                        section.description = this.dialogDescription.trim();
                    }
                });
            }
        }
        else {
            const section = this.section();
            if (!section)
                return;
            if (dialog.mode === 'add') {
                const subsection = {
                    id: this.uid('sub'),
                    name,
                    description: this.dialogDescription.trim(),
                    isActive: true,
                    isRepeatable: false,
                    minEntries: 0,
                    maxEntries: null,
                    order: section.subsections.length,
                    visibilityCondition: null,
                    fields: [],
                };
                this.change(() => section.subsections.push(subsection));
                this.selectedSubsectionId.set(subsection.id);
            }
            else {
                this.change(() => {
                    const subsection = section.subsections.find((item) => item.id === dialog.targetId);
                    if (subsection) {
                        subsection.name = name;
                        subsection.description = this.dialogDescription.trim();
                    }
                });
            }
        }
        this.nameDialog.set(null);
    }
    saveFieldDialog() {
        const dialog = this.fieldDialog();
        const subsection = this.subsection();
        if (!dialog || !subsection || !dialog.draft.name.trim())
            return;
        dialog.draft.name = dialog.draft.name.trim();
        this.updateDialogOptions();
        this.change(() => {
            const index = subsection.fields.findIndex((field) => field.id === dialog.draft.id);
            if (index >= 0)
                subsection.fields[index] = structuredClone(dialog.draft);
            else
                subsection.fields.push(structuredClone(dialog.draft));
        });
        this.selectedFieldId.set(dialog.draft.id);
        this.fieldDialog.set(null);
        this.inspectorVisible.set(false);
    }
    closeFieldDialog() {
        this.fieldDialog.set(null);
        this.selectedFieldId.set('');
        this.inspectorVisible.set(false);
    }
    closeInspector() {
        if (this.fieldDialog()?.mode === 'add')
            this.selectedFieldId.set('');
        this.fieldDialog.set(null);
        this.inspectorVisible.set(false);
    }
    openInspector() {
        const selected = this.field();
        if (selected)
            this.selectField(selected);
        this.inspectorVisible.set(true);
    }
    toggleStructure() {
        this.structureVisible.update((visible) => !visible);
    }
    handleStructureAdd(action) {
        if (action === 'add-tab')
            this.addSection();
        if (action === 'add-section') {
            if (!this.section() && this.form()?.sections[0])
                this.selectedSectionId.set(this.form().sections[0].id);
            this.addSubsection();
        }
        if (action === 'add-field')
            this.addField();
    }
    handleStructureSectionSelected(section) {
        this.selectSection(section);
    }
    handleStructureSubsectionSelected(event) {
        this.selectSubsection(event.section, event.subsection);
    }
    handleStructureFieldSelected(event) {
        this.selectFieldFromTree(event.section, event.subsection, event.field);
    }
    handleStructureAddSubsection(section) {
        this.selectSection(section);
        this.addSubsection();
    }
    handleStructureSectionAction(event) {
        this.handleSectionAction(event.action, event.section, event.index);
    }
    handleStructureSubsectionAction(event) {
        this.handleSubsectionAction(event.action, event.section, event.subsection, event.index);
    }
    handleStructureFieldAction(event) {
        this.selectedSectionId.set(event.section.id);
        this.selectedSubsectionId.set(event.subsection.id);
        this.handleFieldAction(event.action, event.field, event.index);
    }
    handleCanvasFieldAction(event) {
        this.handleFieldAction(event.action, event.field, event.index);
    }
    handleCanvasSectionAction(action) {
        const section = this.section();
        const subsection = this.subsection();
        if (!section || !subsection)
            return;
        this.handleSubsectionAction(action, section, subsection, section.subsections.indexOf(subsection));
    }
    duplicateCurrentSelection() {
        const dialog = this.fieldDialog();
        const subsection = this.subsection();
        if (dialog && subsection && dialog.mode === 'edit') {
            const index = subsection.fields.findIndex((field) => field.id === dialog.draft.id);
            if (index >= 0)
                this.duplicateField(subsection, dialog.draft, index);
            this.closeInspector();
            return;
        }
        const selectedSubsection = this.subsection();
        const selectedSection = this.section();
        if (selectedSubsection && selectedSection) {
            const index = selectedSection.subsections.findIndex((item) => item.id === selectedSubsection.id);
            this.duplicateSubsection(selectedSection, selectedSubsection, index);
        }
        else if (selectedSection && this.form()) {
            const index = this.form().sections.findIndex((item) => item.id === selectedSection.id);
            this.duplicateSection(selectedSection, index);
        }
        this.closeInspector();
    }
    deleteCurrentSelection() {
        const dialog = this.fieldDialog();
        if (dialog?.mode === 'edit')
            this.removeField(dialog.draft);
        else if (this.subsection())
            this.removeSubsection(this.subsection());
        else if (this.section())
            this.removeSection(this.section());
        this.inspectorVisible.set(false);
    }
    handleSectionAction(action, section, index) {
        if (action === 'rename')
            this.renameSection(section);
        if (action === 'duplicate')
            this.duplicateSection(section, index);
        if (action === 'up')
            this.move(this.form()?.sections || [], index, -1);
        if (action === 'down')
            this.move(this.form()?.sections || [], index, 1);
        if (action === 'add-child') {
            this.selectSection(section);
            this.addSubsection();
        }
        if (action === 'delete')
            this.removeSection(section);
    }
    handleSubsectionAction(action, section, subsection, index) {
        this.selectedSectionId.set(section.id);
        if (action === 'rename')
            this.renameSubsection(subsection);
        if (action === 'duplicate')
            this.duplicateSubsection(section, subsection, index);
        if (action === 'up')
            this.move(section.subsections, index, -1);
        if (action === 'down')
            this.move(section.subsections, index, 1);
        if (action === 'add-child') {
            this.selectSubsection(section, subsection);
            this.addField();
        }
        if (action === 'delete')
            this.removeSubsection(subsection);
    }
    handleFieldAction(action, field, index) {
        const subsection = this.subsection();
        if (!subsection)
            return;
        if (action === 'edit')
            this.selectField(field);
        if (action === 'duplicate')
            this.duplicateField(subsection, field, index);
        if (action === 'up')
            this.move(subsection.fields, index, -1);
        if (action === 'down')
            this.move(subsection.fields, index, 1);
        if (action === 'disable')
            this.change(() => (field.isActive = !field.isActive));
        if (action === 'delete')
            this.removeField(field);
    }
    duplicateSection(section, index) {
        const copy = structuredClone(section);
        copy.id = this.uid('sec');
        copy.name = `${section.name} copy`;
        copy.subsections = copy.subsections.map((subsection) => ({
            ...subsection,
            id: this.uid('sub'),
            fields: subsection.fields.map((field) => ({ ...field, id: this.uid('fld') })),
        }));
        this.change((form) => form.sections.splice(index + 1, 0, copy));
    }
    duplicateSubsection(section, subsection, index) {
        const copy = structuredClone(subsection);
        copy.id = this.uid('sub');
        copy.name = `${subsection.name} copy`;
        copy.fields = copy.fields.map((field) => ({ ...field, id: this.uid('fld') }));
        this.change(() => section.subsections.splice(index + 1, 0, copy));
    }
    duplicateField(subsection, field, index) {
        const copy = structuredClone(field);
        copy.id = this.uid('fld');
        copy.name = `${field.name} copy`;
        this.change(() => subsection.fields.splice(index + 1, 0, copy));
    }
    closeStructureOnCompactScreen() {
        if (typeof window !== 'undefined' && window.innerWidth < 1440) {
            this.structureVisible.set(false);
        }
    }
    updateDialogOptions() {
        const field = this.fieldDialog()?.draft;
        if (!field)
            return;
        field.options = this.dialogOptionText
            .split('\n')
            .map((value) => value.trim())
            .filter(Boolean)
            .map((value) => ({ label: value, value }));
    }
    dialogSearchableChanged() {
        const field = this.fieldDialog()?.draft;
        if (!field)
            return;
        field.searchConfig = field.searchable ? { searchField: 'name' } : null;
    }
    configureUpload(field) {
        if (!['file', 'image', 'signature'].includes(field.type)) {
            field.uploadConfig = null;
            return;
        }
        const allowedTypes = field.type === 'file'
            ? field.uploadConfig?.allowedTypes?.length
                ? field.uploadConfig.allowedTypes
                : ['image', 'pdf', 'word']
            : ['image'];
        field.uploadConfig = {
            maxSizeMb: field.uploadConfig?.maxSizeMb || 5,
            allowedTypes,
        };
    }
    uploadTypeEnabled(field, type) {
        return field.uploadConfig?.allowedTypes.includes(type) || false;
    }
    toggleUploadType(field, type, enabled) {
        if (!field.uploadConfig)
            this.configureUpload(field);
        if (!field.uploadConfig)
            return;
        field.uploadConfig.allowedTypes = enabled
            ? [...new Set([...field.uploadConfig.allowedTypes, type])]
            : field.uploadConfig.allowedTypes.filter((candidate) => candidate !== type);
    }
    toggleDialogCondition(enabled) {
        const field = this.fieldDialog()?.draft;
        if (!field)
            return;
        field.visibilityCondition = enabled ? { fieldId: '', operator: 'equals', value: '' } : null;
    }
    confirmDelete() {
        const dialog = this.deleteDialog();
        if (!dialog)
            return;
        if (dialog.kind === 'form') {
            if (this.deleting())
                return;
            this.deleting.set(true);
            this.deleteError.set('');
            this.api.deleteForm(dialog.targetId).subscribe({
                next: () => {
                    const remaining = this.forms().filter((form) => form._id !== dialog.targetId);
                    this.forms.set(remaining);
                    this.deleteDialog.set(null);
                    this.deleting.set(false);
                    this.notifyFormNavigation();
                    if (remaining[0])
                        this.choose(remaining[0]);
                    else {
                        this.form.set(null);
                        this.selectedSectionId.set('');
                        this.selectedSubsectionId.set('');
                        this.selectedFieldId.set('');
                    }
                },
                error: (error) => {
                    this.deleteError.set(error.error?.message || 'Unable to delete this form. Try again.');
                    this.deleting.set(false);
                },
            });
            return;
        }
        if (dialog.kind === 'section') {
            this.change((form) => {
                form.sections = form.sections.filter((section) => section.id !== dialog.targetId);
                this.selectedSectionId.set(form.sections[0]?.id || '');
                this.selectedSubsectionId.set(form.sections[0]?.subsections[0]?.id || '');
            });
        }
        else if (dialog.kind === 'subsection') {
            this.change(() => {
                const section = this.section();
                if (section)
                    section.subsections = section.subsections.filter((subsection) => subsection.id !== dialog.targetId);
                this.selectedSubsectionId.set(this.section()?.subsections[0]?.id || '');
            });
        }
        else {
            this.change(() => {
                const subsection = this.subsection();
                if (subsection)
                    subsection.fields = subsection.fields.filter((field) => field.id !== dialog.targetId);
                this.selectedFieldId.set('');
            });
        }
        this.deleteDialog.set(null);
    }
    conditionToggle(target, enabled) {
        this.change(() => (target.visibilityCondition = enabled
            ? { fieldId: '', operator: 'equals', value: '' }
            : null));
    }
    save(publish = false) {
        const form = this.form();
        if (!form)
            return;
        const payload = structuredClone(form);
        if (publish) {
            payload.status = 'published';
            payload.isActive = true;
        }
        this.saving.set(true);
        this.api.saveForm(payload).subscribe({
            next: ({ item }) => {
                this.form.set(item);
                this.forms.update((items) => items.map((f) => (f._id === item._id ? item : f)));
                this.message.set(publish
                    ? item.purpose === 'admission'
                        ? 'Form published. The latest structure is now available in Student Admission.'
                        : 'Form published. Its data-entry link and database section are now available in the sidebar.'
                    : item.status === 'published'
                        ? 'Live form changes saved. Draft admissions will refresh to this structure.'
                        : 'Draft saved.');
                this.dirty.set(false);
                this.saving.set(false);
                this.notifyFormNavigation();
            },
            error: (e) => {
                this.error.set(e.error?.message || 'Unable to save form.');
                this.saving.set(false);
            },
        });
    }
    change(action) {
        const form = this.form();
        if (!form)
            return;
        action(form);
        this.form.set(structuredClone(form));
        this.dirty.set(true);
    }
    uid(prefix) {
        return `${prefix}_${crypto.randomUUID()}`;
    }
    notifyFormNavigation() {
        window.dispatchEvent(new Event('tasklyFormsChanged'));
    }
    static ɵfac = function FormBuilderComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || FormBuilderComponent)(); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: FormBuilderComponent, selectors: [["erp-form-builder"]], hostBindings: function FormBuilderComponent_HostBindings(rf, ctx) { if (rf & 1) {
            i0.ɵɵlistener("resize", function FormBuilderComponent_resize_HostBindingHandler() { return ctx.handleViewportResize(); }, i0.ɵɵresolveWindow)("keydown.escape", function FormBuilderComponent_keydown_escape_HostBindingHandler() { return ctx.closePublishChecklistOnEscape(); }, i0.ɵɵresolveDocument);
        } }, decls: 16, vars: 11, consts: [[1, "form-builder-page"], [3, "saveState"], [1, "save-actions"], ["routerLink", "/admin/admissions/forms", 1, "erp-button", "erp-button--secondary"], ["lucideArrowLeft", "", "size", "16", "aria-hidden", "true"], [1, "notice", "success"], [1, "notice", "error"], [3, "formSelected", "createRequested", "formAction", "forms", "form"], [1, "erp-card", "compact-empty", "canvas-empty"], [1, "dialog-layer", "form-publish-dialog-layer"], [1, "dialog-layer"], ["type", "button", 1, "secondary", 3, "click", "disabled"], ["lucideSave", "", "size", "16", "aria-hidden", "true"], ["type", "button", 1, "primary", 3, "click", "disabled"], ["lucideSend", "", "size", "16", "aria-hidden", "true"], [1, "erp-card", "erp-card--padded", "form-purpose-config"], [1, "erp-card__header"], [1, "erp-form-grid"], [1, "erp-control", 3, "ngModelChange", "disabled", "ngModel"], ["value", "admission"], ["value", "faculty"], ["value", "employee"], ["value", "general"], [1, "builder-mobile-actions"], ["type", "button", 1, "secondary", 3, "click"], ["lucideListTree", "", "size", "17", "aria-hidden", "true"], [1, "builder-grid"], ["type", "button", "aria-label", "Close form structure", 1, "builder-structure-backdrop"], [3, "closeRequested", "addRequested", "sectionToggled", "sectionSelected", "subsectionSelected", "fieldSelected", "addSubsectionRequested", "sectionAction", "subsectionAction", "fieldAction", "form", "open", "selectedSectionId", "selectedSubsectionId", "selectedFieldId", "expandedSectionIds"], [3, "structureRequested", "addFieldRequested", "fieldSelected", "fieldAction", "sectionAction", "section", "subsection", "selectedFieldId", "structureVisible"], [3, "title", "eyebrow", "open"], [1, "erp-field-stack"], ["placeholder", "Select sessions", 3, "valueChange", "options", "value"], ["placeholder", "Select UG, PG or other levels", 3, "valueChange", "options", "value"], ["placeholder", "All universities", 3, "valueChange", "options", "value"], ["placeholder", "All colleges", 3, "valueChange", "options", "value"], ["placeholder", "Select departments", 3, "valueChange", "options", "value"], ["value", ""], [3, "value"], ["placeholder", "e.g. Faculty", 1, "erp-control", 3, "ngModelChange", "disabled", "ngModel"], ["placeholder", "e.g. Make Faculty", 1, "erp-control", 3, "ngModelChange", "ngModel"], [1, "erp-notice"], ["type", "button", "aria-label", "Close form structure", 1, "builder-structure-backdrop", 3, "click"], [3, "closed", "title", "eyebrow", "open"], [1, "inspector-empty"], [1, "settings-grid"], [1, "inspector-group"], ["placeholder", "e.g. First name", 3, "ngModelChange", "ngModel"], [3, "ngModelChange", "ngModel"], ["rows", "2", 3, "ngModelChange", "ngModel"], [1, "switch-row"], ["type", "checkbox", 3, "ngModelChange", "ngModel"], [1, "inspector-group", "inspector-group--wide"], [1, "inspector-grid"], ["placeholder", "Explain how to correct the value", 3, "ngModelChange", "ngModel"], ["inspector-actions", "", 1, "inspector-actions"], [1, "inspector-actions__spacer"], ["lucideCheck", "", "size", "16", "aria-hidden", "true"], [1, "setting-note"], [3, "ngValue"], ["rows", "4", "placeholder", "Option one\nOption two\nOption three", 3, "ngModelChange", "ngModel"], ["type", "number", 3, "ngModelChange", "ngModel"], ["type", "number", "min", "0", 3, "ngModelChange", "ngModel"], ["type", "number", "min", "1", 3, "ngModelChange", "ngModel"], ["placeholder", "Regular expression", 3, "ngModelChange", "ngModel"], ["value", "equals"], ["value", "not-equals"], ["value", "contains"], ["value", "is-empty"], [1, "inspector-grid", "inspector-grid--upload"], ["type", "number", "min", "1", "max", "100", 3, "ngModelChange", "ngModel"], [1, "upload-types"], [1, "upload-types__options"], ["type", "button", 1, "drawer-action", 3, "click"], ["lucideCopy", "", "size", "15", "aria-hidden", "true"], ["type", "button", 1, "drawer-action", "drawer-action--danger", 3, "click"], ["lucideTrash2", "", "size", "15", "aria-hidden", "true"], [1, "settings-grid", "settings-grid--section"], ["rows", "3", 3, "ngModelChange", "ngModel"], [1, "condition-grid"], ["type", "button", 1, "primary", 3, "click"], [1, "settings-grid", "settings-grid--single"], ["lucideSettings2", "", "size", "26", "aria-hidden", "true"], ["type", "button", "aria-label", "Close publish checklist", 1, "dialog-backdrop", 3, "click"], ["role", "dialog", "aria-modal", "true", "aria-labelledby", "publish-dialog-title", "cdkTrapFocus", "", 1, "dialog", "form-publish-dialog", 3, "cdkTrapFocusAutoCapture"], [1, "dialog__header", "form-publish-dialog__header"], [1, "form-publish-dialog__icon"], ["lucideSend", "", "size", "19", "aria-hidden", "true"], ["id", "publish-dialog-title"], ["type", "button", "aria-label", "Close publish checklist", 3, "click"], [1, "dialog__body", "form-publish-dialog__body"], [1, "form-publish-dialog__summary"], ["lucideTriangleAlert", "", "size", "18", "aria-hidden", "true"], ["lucideCircleCheck", "", "size", "18", "aria-hidden", "true"], ["aria-label", "Form readiness issues", 1, "form-publish-dialog__issues"], [1, "form-publish-dialog__ready"], [1, "dialog__footer", "form-publish-dialog__footer"], ["type", "button", 3, "is-blocker", "disabled"], ["type", "button", 3, "click", "disabled"], ["lucideTriangleAlert", "", "size", "17", "aria-hidden", "true"], ["lucideCircleAlert", "", "size", "17", "aria-hidden", "true"], ["lucideCircleCheck", "", "size", "22", "aria-hidden", "true"], ["type", "button", "aria-label", "Close dialog", 1, "dialog-backdrop", 3, "click"], ["role", "dialog", "aria-modal", "true", "aria-labelledby", "create-form-title", 1, "dialog", "dialog--small", 3, "ngSubmit"], [1, "dialog__header"], ["id", "create-form-title"], ["type", "button", "aria-label", "Close dialog", 3, "click"], [1, "dialog__body", "dialog-form"], ["name", "formName", "placeholder", "e.g. Undergraduate Admission 2027", "autocomplete", "off", "autofocus", "", 3, "ngModelChange", "ngModel"], ["name", "formPurpose", 3, "ngModelChange", "ngModel"], ["role", "alert", 1, "dialog-form__error"], [1, "dialog__footer"], ["type", "submit", 1, "primary", 3, "disabled"], ["role", "dialog", "aria-modal", "true", "aria-labelledby", "name-dialog-title", 1, "dialog", "dialog--small"], ["id", "name-dialog-title"], ["placeholder", "Enter a clear display name", 3, "ngModelChange", "ngModel"], ["type", "button", "aria-label", "Cancel deletion", 1, "dialog-backdrop", 3, "click"], ["role", "alertdialog", "aria-modal", "true", "aria-labelledby", "delete-dialog-title", 1, "dialog", "dialog--confirm"], [1, "dialog__body", "confirm-body"], [1, "confirm-icon"], ["id", "delete-dialog-title"], ["type", "button", 1, "danger-button", 3, "click", "disabled"]], template: function FormBuilderComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "section", 0)(1, "erp-builder-page-header", 1)(2, "div", 2)(3, "a", 3);
            i0.ɵɵnamespaceSVG();
            i0.ɵɵelement(4, "svg", 4);
            i0.ɵɵtext(5, " Forms library ");
            i0.ɵɵelementEnd();
            i0.ɵɵconditionalCreate(6, FormBuilderComponent_Conditional_6_Template, 6, 4);
            i0.ɵɵelementEnd()();
            i0.ɵɵconditionalCreate(7, FormBuilderComponent_Conditional_7_Template, 2, 1, "p", 5);
            i0.ɵɵconditionalCreate(8, FormBuilderComponent_Conditional_8_Template, 2, 1, "p", 6);
            i0.ɵɵnamespaceHTML();
            i0.ɵɵelementStart(9, "erp-form-builder-toolbar", 7);
            i0.ɵɵlistener("formSelected", function FormBuilderComponent_Template_erp_form_builder_toolbar_formSelected_9_listener($event) { return ctx.chooseForm($event); })("createRequested", function FormBuilderComponent_Template_erp_form_builder_toolbar_createRequested_9_listener() { return ctx.openCreateFormDialog(); })("formAction", function FormBuilderComponent_Template_erp_form_builder_toolbar_formAction_9_listener($event) { return ctx.handleFormAction($event); });
            i0.ɵɵelementEnd();
            i0.ɵɵconditionalCreate(10, FormBuilderComponent_Conditional_10_Template, 32, 19)(11, FormBuilderComponent_Conditional_11_Template, 3, 0, "section", 8);
            i0.ɵɵelementEnd();
            i0.ɵɵconditionalCreate(12, FormBuilderComponent_Conditional_12_Template, 43, 12, "div", 9);
            i0.ɵɵconditionalCreate(13, FormBuilderComponent_Conditional_13_Template, 34, 5, "div", 10);
            i0.ɵɵconditionalCreate(14, FormBuilderComponent_Conditional_14_Template, 25, 6, "div", 10);
            i0.ɵɵconditionalCreate(15, FormBuilderComponent_Conditional_15_Template, 16, 6, "div", 10);
        } if (rf & 2) {
            let tmp_6_0;
            let tmp_7_0;
            let tmp_9_0;
            let tmp_10_0;
            i0.ɵɵadvance();
            i0.ɵɵproperty("saveState", ctx.saveStateText());
            i0.ɵɵadvance(5);
            i0.ɵɵconditional(ctx.form() ? 6 : -1);
            i0.ɵɵadvance();
            i0.ɵɵconditional(ctx.message() ? 7 : -1);
            i0.ɵɵadvance();
            i0.ɵɵconditional(ctx.error() ? 8 : -1);
            i0.ɵɵadvance();
            i0.ɵɵproperty("forms", ctx.forms())("form", ctx.form());
            i0.ɵɵadvance();
            i0.ɵɵconditional((tmp_6_0 = ctx.form()) ? 10 : 11, tmp_6_0);
            i0.ɵɵadvance(2);
            i0.ɵɵconditional((tmp_7_0 = ctx.publishDialog()) ? 12 : -1, tmp_7_0);
            i0.ɵɵadvance();
            i0.ɵɵconditional(ctx.createFormDialog() ? 13 : -1);
            i0.ɵɵadvance();
            i0.ɵɵconditional((tmp_9_0 = ctx.nameDialog()) ? 14 : -1, tmp_9_0);
            i0.ɵɵadvance();
            i0.ɵɵconditional((tmp_10_0 = ctx.deleteDialog()) ? 15 : -1, tmp_10_0);
        } }, dependencies: [BuilderPageHeaderComponent,
            CdkTrapFocus,
            FormBuilderToolbarComponent,
            FormStructurePanelComponent,
            FormCanvasComponent,
            FormsModule, i1.ɵNgNoValidate, i1.NgSelectOption, i1.ɵNgSelectMultipleOption, i1.DefaultValueAccessor, i1.NumberValueAccessor, i1.CheckboxControlValueAccessor, i1.SelectControlValueAccessor, i1.NgControlStatus, i1.NgControlStatusGroup, i1.MinValidator, i1.MaxValidator, i1.NgModel, i1.NgForm, SettingsModalComponent,
            MultiSelectDropdownComponent,
            RouterLink,
            LucideArrowLeft,
            LucideCheck,
            LucideCircleAlert,
            LucideCircleCheck,
            LucideCopy,
            LucideListTree,
            LucideSave,
            LucideSend,
            LucideSettings2,
            LucideTrash2,
            LucideTriangleAlert], styles: ["\n[_nghost-%COMP%] {\n  display: contents;\n}\n\n.form-publish-dialog-layer[_ngcontent-%COMP%] {\n  z-index: 1200;\n}\n\n.form-publish-dialog[_ngcontent-%COMP%] {\n  display: grid;\n  width: min(44rem, calc(100vw - var(--erp-space-6)));\n  max-height: min(48rem, calc(100dvh - var(--erp-space-6)));\n  grid-template-rows: auto minmax(0, 1fr) auto;\n  overflow: hidden;\n}\n\n.form-publish-dialog__header[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: auto minmax(0, 1fr) auto;\n  align-items: start;\n  gap: var(--erp-space-3);\n}\n\n.form-publish-dialog__header[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  min-width: 0;\n}\n\n.form-publish-dialog__header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], \n.form-publish-dialog__header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], \n.form-publish-dialog__ready[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], \n.form-publish-dialog__footer[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n}\n\n.form-publish-dialog__header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin-top: var(--erp-space-1);\n  color: var(--erp-text-muted);\n  font-size: var(--erp-font-caption);\n}\n\n.form-publish-dialog__icon[_ngcontent-%COMP%] {\n  display: inline-grid;\n  width: var(--erp-control-height-large);\n  height: var(--erp-control-height-large);\n  place-items: center;\n  color: var(--erp-blue-700);\n  background: var(--erp-blue-50);\n  border-radius: var(--erp-radius-control);\n}\n\n.form-publish-dialog__body[_ngcontent-%COMP%] {\n  display: grid;\n  align-content: start;\n  gap: var(--erp-space-4);\n  overflow-y: auto;\n}\n\n.form-publish-dialog__summary[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n  gap: var(--erp-space-3);\n}\n\n.form-publish-dialog__summary[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: var(--erp-space-3);\n  padding: var(--erp-space-3);\n  color: var(--erp-success-text);\n  background: var(--erp-success-bg);\n  border: 1px solid transparent;\n  border-radius: var(--erp-radius-control);\n}\n\n.form-publish-dialog__summary[_ngcontent-%COMP%]    > div.has-blockers[_ngcontent-%COMP%] {\n  color: var(--erp-danger-text);\n  background: var(--erp-danger-bg);\n  border-color: var(--erp-danger);\n}\n\n.form-publish-dialog__summary[_ngcontent-%COMP%]    > div.has-warnings[_ngcontent-%COMP%] {\n  color: var(--erp-warning-text);\n  background: var(--erp-warning-bg);\n}\n\n.form-publish-dialog__summary[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%], \n.form-publish-dialog__summary[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  display: block;\n}\n\n.form-publish-dialog__summary[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: currentColor;\n  font-size: var(--erp-font-section-title);\n}\n\n.form-publish-dialog__summary[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  font-size: var(--erp-font-caption);\n}\n\n.form-publish-dialog__issues[_ngcontent-%COMP%] {\n  display: grid;\n  overflow: hidden;\n  border: 1px solid var(--erp-border-subtle);\n  border-radius: var(--erp-radius-control);\n}\n\n.form-publish-dialog__issues[_ngcontent-%COMP%]    > button[_ngcontent-%COMP%] {\n  display: grid;\n  width: 100%;\n  grid-template-columns: auto minmax(0, 1fr) auto;\n  align-items: start;\n  gap: var(--erp-space-3);\n  padding: var(--erp-space-3) var(--erp-space-4);\n  color: var(--erp-warning-text);\n  text-align: left;\n  background: var(--erp-surface-raised);\n  border: 0;\n}\n\n.form-publish-dialog__issues[_ngcontent-%COMP%]    > button[_ngcontent-%COMP%]    + button[_ngcontent-%COMP%] {\n  border-top: 1px solid var(--erp-border-subtle);\n}\n\n.form-publish-dialog__issues[_ngcontent-%COMP%]    > button.is-blocker[_ngcontent-%COMP%] {\n  color: var(--erp-danger-text);\n}\n\n.form-publish-dialog__issues[_ngcontent-%COMP%]    > button[_ngcontent-%COMP%]:not(:disabled):hover, \n.form-publish-dialog__issues[_ngcontent-%COMP%]    > button[_ngcontent-%COMP%]:not(:disabled):focus-visible {\n  background: var(--erp-surface-detail-soft);\n}\n\n.form-publish-dialog__issues[_ngcontent-%COMP%]    > button[_ngcontent-%COMP%]:disabled {\n  cursor: default;\n  opacity: 1;\n}\n\n.form-publish-dialog__issues[_ngcontent-%COMP%]    > button[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%]:first-child {\n  display: inline-grid;\n  width: var(--erp-control-height-compact);\n  height: var(--erp-control-height-compact);\n  place-items: center;\n  background: var(--erp-warning-bg);\n  border-radius: var(--erp-radius-pill);\n}\n\n.form-publish-dialog__issues[_ngcontent-%COMP%]    > button.is-blocker[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%]:first-child {\n  background: var(--erp-danger-bg);\n}\n\n.form-publish-dialog__issues[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%], \n.form-publish-dialog__issues[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  display: block;\n}\n\n.form-publish-dialog__issues[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: var(--erp-text-heading);\n  font-size: var(--erp-font-label);\n  font-weight: var(--erp-weight-semibold);\n}\n\n.form-publish-dialog__issues[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  margin-top: 0.125rem;\n  color: var(--erp-text-muted);\n  font-size: var(--erp-font-caption);\n  line-height: var(--erp-line-body);\n}\n\n.form-publish-dialog__issues[_ngcontent-%COMP%]    > button[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%]:last-child:not(:nth-child(2)) {\n  align-self: center;\n  color: var(--erp-text-link);\n  font-size: var(--erp-font-caption);\n  font-weight: var(--erp-weight-semibold);\n}\n\n.form-publish-dialog__ready[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: var(--erp-space-3);\n  padding: var(--erp-space-4);\n  color: var(--erp-success-text);\n  background: var(--erp-success-bg);\n  border-radius: var(--erp-radius-control);\n}\n\n.form-publish-dialog__ready[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  display: block;\n  color: currentColor;\n  font-size: var(--erp-font-panel-title);\n}\n\n.form-publish-dialog__ready[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin-top: var(--erp-space-1);\n  color: var(--erp-text-body);\n  font-size: var(--erp-font-caption);\n}\n\n.form-publish-dialog__footer[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: minmax(0, 1fr) auto auto;\n  align-items: center;\n  gap: var(--erp-space-2);\n}\n\n.form-publish-dialog__footer[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: var(--erp-text-muted);\n  font-size: var(--erp-font-caption);\n  line-height: var(--erp-line-body);\n}\n\n@media (max-width: 40rem) {\n  .form-publish-dialog[_ngcontent-%COMP%] {\n    width: calc(100vw - var(--erp-space-4));\n    max-height: calc(100dvh - var(--erp-space-4));\n  }\n\n  .form-publish-dialog__summary[_ngcontent-%COMP%] {\n    grid-template-columns: minmax(0, 1fr);\n  }\n\n  .form-publish-dialog__footer[_ngcontent-%COMP%] {\n    grid-template-columns: minmax(0, 1fr);\n  }\n\n  .form-publish-dialog__footer[_ngcontent-%COMP%]   .primary[_ngcontent-%COMP%], \n   .form-publish-dialog__footer[_ngcontent-%COMP%]   .secondary[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}"], changeDetection: 0 });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(FormBuilderComponent, [{
        type: Component,
        args: [{ selector: 'erp-form-builder', imports: [
                    BuilderPageHeaderComponent,
                    CdkTrapFocus,
                    FormBuilderToolbarComponent,
                    FormStructurePanelComponent,
                    FormCanvasComponent,
                    FormsModule,
                    SettingsModalComponent,
                    MultiSelectDropdownComponent,
                    RouterLink,
                    LucideArrowLeft,
                    LucideCheck,
                    LucideCircleAlert,
                    LucideCircleCheck,
                    LucideCopy,
                    LucideListTree,
                    LucideSave,
                    LucideSend,
                    LucideSettings2,
                    LucideTrash2,
                    LucideTriangleAlert,
                ], changeDetection: ChangeDetectionStrategy.OnPush, template: "<section class=\"form-builder-page\">\n  <erp-builder-page-header [saveState]=\"saveStateText()\">\n    <div class=\"save-actions\">\n      <a class=\"erp-button erp-button--secondary\" routerLink=\"/admin/admissions/forms\">\n        <svg lucideArrowLeft size=\"16\" aria-hidden=\"true\"></svg>\n        Forms library\n      </a>\n      @if (form()) {\n        <button class=\"secondary\" type=\"button\" (click)=\"save()\" [disabled]=\"saving()\">\n          <svg lucideSave size=\"16\" aria-hidden=\"true\"></svg>\n          {{ form()?.status === 'published' ? 'Save live changes' : 'Save draft' }}\n        </button>\n        <button\n          class=\"primary\"\n          type=\"button\"\n          (click)=\"openPublishChecklist()\"\n          [disabled]=\"saving()\"\n        >\n          <svg lucideSend size=\"16\" aria-hidden=\"true\"></svg>\n          {{ form()?.status === 'published' ? 'Republish form' : 'Publish form' }}\n        </button>\n      }\n    </div>\n  </erp-builder-page-header>\n\n  @if (message()) {\n    <p class=\"notice success\">{{ message() }}</p>\n  }\n  @if (error()) {\n    <p class=\"notice error\">{{ error() }}</p>\n  }\n\n  <erp-form-builder-toolbar\n    [forms]=\"forms()\"\n    [form]=\"form()\"\n    (formSelected)=\"chooseForm($event)\"\n    (createRequested)=\"openCreateFormDialog()\"\n    (formAction)=\"handleFormAction($event)\"\n  />\n\n  @if (form(); as current) {\n    <section class=\"erp-card erp-card--padded form-purpose-config\">\n      <div class=\"erp-card__header\">\n        <div>\n          <h2>Form purpose and audience</h2>\n          <p>\n            Controls publishing requirements, who receives this form, and where responses are\n            stored.\n          </p>\n        </div>\n      </div>\n      <div class=\"erp-form-grid\">\n        <label>\n          <span>Form purpose *</span>\n          <select\n            class=\"erp-control\"\n            [disabled]=\"destinationLocked() || current.status === 'published'\"\n            [ngModel]=\"current.purpose || 'admission'\"\n            (ngModelChange)=\"setPurpose($event)\"\n          >\n            <option value=\"admission\">Student admission</option>\n            <option value=\"faculty\">Faculty application</option>\n            <option value=\"employee\">Employee application</option>\n            <option value=\"general\">General/custom form</option>\n          </select>\n        </label>\n        @if ((current.purpose || 'admission') === 'admission') {\n          <div class=\"erp-field-stack\">\n            <span>Academic sessions *</span>\n            <erp-multi-select-dropdown\n              [options]=\"mappingOptions('academic')\"\n              [value]=\"current.audience?.academicSessionIds || []\"\n              placeholder=\"Select sessions\"\n              (valueChange)=\"setAudience('academicSessionIds', $event)\"\n            />\n          </div>\n          <div class=\"erp-field-stack\">\n            <span>Admission levels *</span>\n            <erp-multi-select-dropdown\n              [options]=\"mappingOptions('level')\"\n              [value]=\"current.audience?.levelIds || []\"\n              placeholder=\"Select UG, PG or other levels\"\n              (valueChange)=\"setAudience('levelIds', $event)\"\n            />\n          </div>\n        }\n        @if ((current.purpose || 'admission') !== 'general') {\n          <div class=\"erp-field-stack\">\n            <span>Universities</span>\n            <erp-multi-select-dropdown\n              [options]=\"mappingOptions('university')\"\n              [value]=\"current.audience?.universityIds || []\"\n              placeholder=\"All universities\"\n              (valueChange)=\"setAudience('universityIds', $event)\"\n            />\n          </div>\n          <div class=\"erp-field-stack\">\n            <span>Colleges</span>\n            <erp-multi-select-dropdown\n              [options]=\"mappingOptions('college')\"\n              [value]=\"current.audience?.collegeIds || []\"\n              placeholder=\"All colleges\"\n              (valueChange)=\"setAudience('collegeIds', $event)\"\n            />\n          </div>\n          <div class=\"erp-field-stack\">\n            <span>{{\n              (current.purpose || 'admission') === 'faculty'\n                ? 'Faculty departments *'\n                : 'Departments'\n            }}</span>\n            <erp-multi-select-dropdown\n              [options]=\"mappingOptions('department')\"\n              [value]=\"current.audience?.departmentIds || []\"\n              placeholder=\"Select departments\"\n              (valueChange)=\"setAudience('departmentIds', $event)\"\n            />\n          </div>\n        }\n        @if ((current.purpose || 'admission') !== 'admission') {\n          <label>\n            <span>Existing sidebar section</span>\n            <select\n              class=\"erp-control\"\n              [disabled]=\"destinationLocked()\"\n              [ngModel]=\"current.destination?.navigationSectionId || ''\"\n              (ngModelChange)=\"selectDestination('navigation', $event)\"\n            >\n              <option value=\"\">Add new section</option>\n              @for (option of destinationOptions('navigation'); track option.value) {\n                <option [value]=\"option.value\">{{ option.label }}</option>\n              }\n            </select>\n          </label>\n          <label>\n            <span>Sidebar section name *</span>\n            <input\n              class=\"erp-control\"\n              [disabled]=\"destinationLocked()\"\n              [ngModel]=\"current.destination?.navigationSectionName || ''\"\n              (ngModelChange)=\"setDestinationName('navigation', $event)\"\n              placeholder=\"e.g. Faculty\"\n            />\n          </label>\n          <label>\n            <span>Form name in sidebar *</span>\n            <input\n              class=\"erp-control\"\n              [ngModel]=\"current.destination?.menuName || current.name\"\n              (ngModelChange)=\"setDestinationMenuName($event)\"\n              placeholder=\"e.g. Make Faculty\"\n            />\n          </label>\n          <label>\n            <span>Existing database section</span>\n            <select\n              class=\"erp-control\"\n              [disabled]=\"destinationLocked()\"\n              [ngModel]=\"current.destination?.databaseSectionId || ''\"\n              (ngModelChange)=\"selectDestination('database', $event)\"\n            >\n              <option value=\"\">Add new section</option>\n              @for (option of destinationOptions('database'); track option.value) {\n                <option [value]=\"option.value\">{{ option.label }}</option>\n              }\n            </select>\n          </label>\n          <label>\n            <span>Database section name *</span>\n            <input\n              class=\"erp-control\"\n              [disabled]=\"destinationLocked()\"\n              [ngModel]=\"current.destination?.databaseSectionName || ''\"\n              (ngModelChange)=\"setDestinationName('database', $event)\"\n              placeholder=\"e.g. Faculty\"\n            />\n          </label>\n          <div class=\"erp-notice\">\n            Every submitted record receives a unique eight-character alphanumeric code.\n            @if (destinationLocked()) {\n              The sidebar and database destination are locked because this form has been published.\n            }\n          </div>\n        }\n      </div>\n    </section>\n\n    <div class=\"builder-mobile-actions\">\n      <button class=\"secondary\" type=\"button\" (click)=\"structureVisible.set(true)\">\n        <svg lucideListTree size=\"17\" aria-hidden=\"true\"></svg> Form structure\n      </button>\n    </div>\n\n    <div class=\"builder-grid\" [class.builder-grid--structure-hidden]=\"!structureVisible()\">\n      @if (structureVisible()) {\n        <button\n          class=\"builder-structure-backdrop\"\n          type=\"button\"\n          aria-label=\"Close form structure\"\n          (click)=\"structureVisible.set(false)\"\n        ></button>\n      }\n      <erp-form-structure-panel\n        [form]=\"current\"\n        [open]=\"structureVisible()\"\n        [selectedSectionId]=\"selectedSectionId()\"\n        [selectedSubsectionId]=\"selectedSubsectionId()\"\n        [selectedFieldId]=\"selectedFieldId()\"\n        [expandedSectionIds]=\"expandedSectionIds()\"\n        (closeRequested)=\"toggleStructure()\"\n        (addRequested)=\"handleStructureAdd($event)\"\n        (sectionToggled)=\"toggleSectionExpansion($event)\"\n        (sectionSelected)=\"handleStructureSectionSelected($event)\"\n        (subsectionSelected)=\"handleStructureSubsectionSelected($event)\"\n        (fieldSelected)=\"handleStructureFieldSelected($event)\"\n        (addSubsectionRequested)=\"handleStructureAddSubsection($event)\"\n        (sectionAction)=\"handleStructureSectionAction($event)\"\n        (subsectionAction)=\"handleStructureSubsectionAction($event)\"\n        (fieldAction)=\"handleStructureFieldAction($event)\"\n      />\n\n      <erp-form-canvas\n        [section]=\"section()\"\n        [subsection]=\"subsection()\"\n        [selectedFieldId]=\"selectedFieldId()\"\n        [structureVisible]=\"structureVisible()\"\n        (structureRequested)=\"structureVisible.set(true)\"\n        (addFieldRequested)=\"addField()\"\n        (fieldSelected)=\"selectField($event)\"\n        (fieldAction)=\"handleCanvasFieldAction($event)\"\n        (sectionAction)=\"handleCanvasSectionAction($event)\"\n      />\n\n      @if (inspectorVisible()) {\n        <erp-settings-modal\n          [title]=\"inspectorTitle()\"\n          [eyebrow]=\"inspectorEyebrow()\"\n          [open]=\"true\"\n          (closed)=\"closeInspector()\"\n        >\n          @if (fieldDialog(); as dialog) {\n            @if (dialog.draft; as selected) {\n              <div class=\"settings-grid\">\n                <section class=\"inspector-group\">\n                  <h3>Properties</h3>\n                  <label\n                    ><span>Field label *</span\n                    ><input [(ngModel)]=\"selected.name\" placeholder=\"e.g. First name\"\n                  /></label>\n                  <label\n                    ><span>Field type</span\n                    ><select\n                      [ngModel]=\"selected.type\"\n                      (ngModelChange)=\"selected.type = $event; configureUpload(selected)\"\n                    >\n                      @for (type of fieldTypes; track type[0]) {\n                        <option [value]=\"type[0]\">{{ type[1] }}</option>\n                      }\n                    </select></label\n                  >\n                  <label\n                    ><span>Placeholder</span><input [(ngModel)]=\"selected.placeholder\"\n                  /></label>\n                  <label\n                    ><span>Help text</span\n                    ><textarea [(ngModel)]=\"selected.helpText\" rows=\"2\"></textarea>\n                  </label>\n                </section>\n\n                <section class=\"inspector-group\">\n                  <h3>Behaviour</h3>\n                  <label class=\"switch-row\"\n                    ><span\n                      ><strong>Required</strong><small>Student must provide a value</small></span\n                    ><input type=\"checkbox\" [(ngModel)]=\"selected.isRequired\"\n                  /></label>\n                  <label class=\"switch-row\"\n                    ><span\n                      ><strong>Visible</strong><small>Show this field in the live form</small></span\n                    ><input type=\"checkbox\" [(ngModel)]=\"selected.isActive\"\n                  /></label>\n                  <label class=\"switch-row\"\n                    ><span\n                      ><strong>Searchable</strong><small>Enable lookup for long lists</small></span\n                    ><input\n                      type=\"checkbox\"\n                      [(ngModel)]=\"selected.searchable\"\n                      (ngModelChange)=\"dialogSearchableChanged()\"\n                  /></label>\n                </section>\n\n                @if (['dropdown', 'radio', 'checkbox', 'multi-select'].includes(selected.type)) {\n                  <section class=\"inspector-group inspector-group--wide\">\n                    <h3>Choices and data</h3>\n                    <div class=\"inspector-grid\">\n                      <label\n                        ><span>Data source</span\n                        ><select\n                          [ngModel]=\"selected.dataSource?.masterTypeSlug || ''\"\n                          (ngModelChange)=\"\n                            selected.dataSource = $event\n                              ? {\n                                  kind: 'master',\n                                  masterTypeSlug: $event,\n                                  parentFieldId: null,\n                                  labelField: 'name',\n                                  valueField: '_id',\n                                }\n                              : null\n                          \"\n                        >\n                          <option value=\"\">Manual options</option>\n                          @for (type of types(); track type.slug) {\n                            <option [value]=\"type.slug\">{{ type.name }}</option>\n                          }\n                        </select></label\n                      >\n                      @if (selected.dataSource) {\n                        <label\n                          ><span>Depends on field (optional)</span\n                          ><select [(ngModel)]=\"selected.dataSource.parentFieldId\">\n                            <option [ngValue]=\"null\">No dependency</option>\n                            @for (item of allFields(); track item.id) {\n                              @if (item.id !== selected.id) {\n                                <option [value]=\"item.id\">{{ item.name }}</option>\n                              }\n                            }\n                          </select></label\n                        >\n                      }\n                    </div>\n                    @if (!selected.dataSource) {\n                      <label\n                        ><span>Manual options \u00B7 one per line</span\n                        ><textarea\n                          [(ngModel)]=\"dialogOptionText\"\n                          (ngModelChange)=\"updateDialogOptions()\"\n                          rows=\"4\"\n                          placeholder=\"Option one&#10;Option two&#10;Option three\"\n                        ></textarea>\n                      </label>\n                    } @else {\n                      <p class=\"setting-note\">\n                        Options are loaded from the selected master data source.\n                      </p>\n                    }\n                  </section>\n                }\n\n                <section class=\"inspector-group\">\n                  <h3>Validation</h3>\n                  @if (selected.type === 'number') {\n                    <div class=\"inspector-grid\">\n                      <label\n                        ><span>Minimum value</span\n                        ><input type=\"number\" [(ngModel)]=\"selected.validation.min\"\n                      /></label>\n                      <label\n                        ><span>Maximum value</span\n                        ><input type=\"number\" [(ngModel)]=\"selected.validation.max\"\n                      /></label>\n                    </div>\n                  }\n                  @if (['text', 'email', 'mobile', 'textarea'].includes(selected.type)) {\n                    <div class=\"inspector-grid\">\n                      <label\n                        ><span>Min length</span\n                        ><input type=\"number\" min=\"0\" [(ngModel)]=\"selected.validation.minLength\"\n                      /></label>\n                      <label\n                        ><span>Max length</span\n                        ><input type=\"number\" min=\"1\" [(ngModel)]=\"selected.validation.maxLength\"\n                      /></label>\n                    </div>\n                    <label\n                      ><span>Pattern (optional)</span\n                      ><input\n                        [(ngModel)]=\"selected.validation.pattern\"\n                        placeholder=\"Regular expression\"\n                    /></label>\n                  }\n                  <label\n                    ><span>Validation message</span\n                    ><input\n                      [(ngModel)]=\"selected.validation.message\"\n                      placeholder=\"Explain how to correct the value\"\n                  /></label>\n                </section>\n\n                <section class=\"inspector-group\">\n                  <h3>Visibility</h3>\n                  <label class=\"switch-row\"\n                    ><span\n                      ><strong>Conditional</strong><small>Show based on another field</small></span\n                    ><input\n                      type=\"checkbox\"\n                      [ngModel]=\"!!selected.visibilityCondition\"\n                      (ngModelChange)=\"toggleDialogCondition($event)\"\n                  /></label>\n                  @if (selected.visibilityCondition) {\n                    <label\n                      ><span>Controlling field</span\n                      ><select [(ngModel)]=\"selected.visibilityCondition.fieldId\">\n                        <option value=\"\">Choose field</option>\n                        @for (item of allFields(); track item.id) {\n                          @if (item.id !== selected.id) {\n                            <option [value]=\"item.id\">{{ item.name }}</option>\n                          }\n                        }\n                      </select></label\n                    >\n                    <div class=\"inspector-grid\">\n                      <label\n                        ><span>Operator</span\n                        ><select [(ngModel)]=\"selected.visibilityCondition.operator\">\n                          <option value=\"equals\">Equals</option>\n                          <option value=\"not-equals\">Not equals</option>\n                          <option value=\"contains\">Contains</option>\n                          <option value=\"is-empty\">Is empty</option>\n                        </select></label\n                      >\n                      <label\n                        ><span>Expected value</span\n                        ><input [(ngModel)]=\"selected.visibilityCondition.value\"\n                      /></label>\n                    </div>\n                  }\n                </section>\n\n                @if (['file', 'image', 'signature'].includes(selected.type)) {\n                  <section class=\"inspector-group inspector-group--wide\">\n                    <h3>Upload rules</h3>\n                    @if (selected.uploadConfig) {\n                      <div class=\"inspector-grid inspector-grid--upload\">\n                        <label\n                          ><span>Maximum file size (MB)</span\n                          ><input\n                            type=\"number\"\n                            min=\"1\"\n                            max=\"100\"\n                            [(ngModel)]=\"selected.uploadConfig.maxSizeMb\"\n                        /></label>\n                        <fieldset class=\"upload-types\">\n                          <legend>Allowed file types</legend>\n                          <div class=\"upload-types__options\">\n                            <label\n                              ><input\n                                type=\"checkbox\"\n                                [ngModel]=\"uploadTypeEnabled(selected, 'image')\"\n                                (ngModelChange)=\"toggleUploadType(selected, 'image', $event)\"\n                              />Images</label\n                            >\n                            @if (selected.type === 'file') {\n                              <label\n                                ><input\n                                  type=\"checkbox\"\n                                  [ngModel]=\"uploadTypeEnabled(selected, 'pdf')\"\n                                  (ngModelChange)=\"toggleUploadType(selected, 'pdf', $event)\"\n                                />PDF</label\n                              >\n                              <label\n                                ><input\n                                  type=\"checkbox\"\n                                  [ngModel]=\"uploadTypeEnabled(selected, 'word')\"\n                                  (ngModelChange)=\"toggleUploadType(selected, 'word', $event)\"\n                                />Word</label\n                              >\n                            }\n                          </div>\n                        </fieldset>\n                      </div>\n                    }\n                  </section>\n                }\n              </div>\n              <div inspector-actions class=\"inspector-actions\">\n                @if (dialog.mode === 'edit') {\n                  <button class=\"drawer-action\" type=\"button\" (click)=\"duplicateCurrentSelection()\">\n                    <svg lucideCopy size=\"15\" aria-hidden=\"true\"></svg> Duplicate\n                  </button>\n                  <button\n                    class=\"drawer-action drawer-action--danger\"\n                    type=\"button\"\n                    (click)=\"deleteCurrentSelection()\"\n                  >\n                    <svg lucideTrash2 size=\"15\" aria-hidden=\"true\"></svg> Delete\n                  </button>\n                }\n                <span class=\"inspector-actions__spacer\"></span>\n                <button class=\"secondary\" type=\"button\" (click)=\"closeFieldDialog()\">Cancel</button>\n                <button\n                  class=\"primary\"\n                  type=\"button\"\n                  [disabled]=\"!selected.name.trim()\"\n                  (click)=\"saveFieldDialog()\"\n                >\n                  <svg lucideCheck size=\"16\" aria-hidden=\"true\"></svg>\n                  {{ dialog.mode === 'add' ? 'Add field' : 'Apply changes' }}\n                </button>\n              </div>\n            }\n          } @else if (subsection(); as selectedSubsection) {\n            <div class=\"settings-grid settings-grid--section\">\n              <section class=\"inspector-group\">\n                <h3>Properties</h3>\n                <label\n                  ><span>Section title</span><input [(ngModel)]=\"selectedSubsection.name\"\n                /></label>\n                <label\n                  ><span>Description</span\n                  ><textarea [(ngModel)]=\"selectedSubsection.description\" rows=\"3\"></textarea>\n                </label>\n              </section>\n              <section class=\"inspector-group\">\n                <h3>Behaviour</h3>\n                <label class=\"switch-row\"\n                  ><span><strong>Enabled</strong><small>Include in the admission form</small></span\n                  ><input type=\"checkbox\" [(ngModel)]=\"selectedSubsection.isActive\"\n                /></label>\n                <label class=\"switch-row\"\n                  ><span\n                    ><strong>Repeatable</strong\n                    ><small>Allow students to add multiple entries</small></span\n                  ><input type=\"checkbox\" [(ngModel)]=\"selectedSubsection.isRepeatable\"\n                /></label>\n                @if (selectedSubsection.isRepeatable) {\n                  <div class=\"inspector-grid\">\n                    <label\n                      ><span>Minimum entries</span\n                      ><input type=\"number\" min=\"0\" [(ngModel)]=\"selectedSubsection.minEntries\"\n                    /></label>\n                    <label\n                      ><span>Maximum entries</span\n                      ><input type=\"number\" min=\"1\" [(ngModel)]=\"selectedSubsection.maxEntries\"\n                    /></label>\n                  </div>\n                }\n              </section>\n              <section class=\"inspector-group inspector-group--wide\">\n                <h3>Visibility</h3>\n                <label class=\"switch-row\">\n                  <span\n                    ><strong>Conditional section</strong\n                    ><small>Control visibility from another field</small></span\n                  >\n                  <input\n                    type=\"checkbox\"\n                    [ngModel]=\"!!selectedSubsection.visibilityCondition\"\n                    (ngModelChange)=\"conditionToggle(selectedSubsection, $event)\"\n                  />\n                </label>\n                @if (selectedSubsection.visibilityCondition) {\n                  <div class=\"condition-grid\">\n                    <label\n                      ><span>Controlling field</span\n                      ><select [(ngModel)]=\"selectedSubsection.visibilityCondition.fieldId\">\n                        <option value=\"\">Choose field</option>\n                        @for (item of allFields(); track item.id) {\n                          <option [value]=\"item.id\">{{ item.name }}</option>\n                        }\n                      </select></label\n                    >\n                    <label\n                      ><span>Operator</span\n                      ><select [(ngModel)]=\"selectedSubsection.visibilityCondition.operator\">\n                        <option value=\"equals\">Equals</option>\n                        <option value=\"not-equals\">Not equals</option>\n                        <option value=\"contains\">Contains</option>\n                        <option value=\"is-empty\">Is empty</option>\n                      </select></label\n                    >\n                    <label\n                      ><span>Expected value</span\n                      ><input [(ngModel)]=\"selectedSubsection.visibilityCondition.value\"\n                    /></label>\n                  </div>\n                }\n              </section>\n            </div>\n            <div inspector-actions class=\"inspector-actions\">\n              <button class=\"drawer-action\" type=\"button\" (click)=\"duplicateCurrentSelection()\">\n                <svg lucideCopy size=\"15\" aria-hidden=\"true\"></svg> Duplicate\n              </button>\n              <button\n                class=\"drawer-action drawer-action--danger\"\n                type=\"button\"\n                (click)=\"deleteCurrentSelection()\"\n              >\n                <svg lucideTrash2 size=\"15\" aria-hidden=\"true\"></svg> Delete\n              </button>\n              <span class=\"inspector-actions__spacer\"></span>\n              <button class=\"primary\" type=\"button\" (click)=\"closeInspector()\">\n                <svg lucideCheck size=\"16\" aria-hidden=\"true\"></svg> Done\n              </button>\n            </div>\n          } @else if (section(); as selectedSection) {\n            <div class=\"settings-grid settings-grid--single\">\n              <section class=\"inspector-group\">\n                <h3>Tab properties</h3>\n                <label><span>Tab title</span><input [(ngModel)]=\"selectedSection.name\" /></label>\n                <label\n                  ><span>Description</span\n                  ><textarea [(ngModel)]=\"selectedSection.description\" rows=\"3\"></textarea>\n                </label>\n                <label class=\"switch-row\"\n                  ><span><strong>Enabled</strong><small>Include this tab in the form</small></span\n                  ><input type=\"checkbox\" [(ngModel)]=\"selectedSection.isActive\"\n                /></label>\n              </section>\n            </div>\n            <div inspector-actions class=\"inspector-actions\">\n              <button class=\"drawer-action\" type=\"button\" (click)=\"duplicateCurrentSelection()\">\n                <svg lucideCopy size=\"15\" aria-hidden=\"true\"></svg> Duplicate\n              </button>\n              <button\n                class=\"drawer-action drawer-action--danger\"\n                type=\"button\"\n                (click)=\"deleteCurrentSelection()\"\n              >\n                <svg lucideTrash2 size=\"15\" aria-hidden=\"true\"></svg> Delete\n              </button>\n              <span class=\"inspector-actions__spacer\"></span>\n              <button class=\"primary\" type=\"button\" (click)=\"closeInspector()\">\n                <svg lucideCheck size=\"16\" aria-hidden=\"true\"></svg> Done\n              </button>\n            </div>\n          } @else {\n            <div class=\"inspector-empty\">\n              <svg lucideSettings2 size=\"26\" aria-hidden=\"true\"></svg\n              ><strong>Select an item to configure</strong>\n              <p>Choose a tab, section, or field from the workspace.</p>\n            </div>\n          }\n        </erp-settings-modal>\n      }\n    </div>\n  } @else {\n    <section class=\"erp-card compact-empty canvas-empty\">\n      <strong>Create an admission form to begin.</strong>\n    </section>\n  }\n</section>\n\n@if (publishDialog(); as open) {\n  <div class=\"dialog-layer form-publish-dialog-layer\">\n    <button\n      class=\"dialog-backdrop\"\n      type=\"button\"\n      aria-label=\"Close publish checklist\"\n      (click)=\"closePublishChecklist()\"\n    ></button>\n    <section\n      class=\"dialog form-publish-dialog\"\n      role=\"dialog\"\n      aria-modal=\"true\"\n      aria-labelledby=\"publish-dialog-title\"\n      cdkTrapFocus\n      [cdkTrapFocusAutoCapture]=\"true\"\n    >\n      <header class=\"dialog__header form-publish-dialog__header\">\n        <span class=\"form-publish-dialog__icon\">\n          <svg lucideSend size=\"19\" aria-hidden=\"true\"></svg>\n        </span>\n        <div>\n          <small>Publishing controls</small>\n          <h2 id=\"publish-dialog-title\">Review form readiness</h2>\n          <p>Check structure, dependencies, required content, and upload rules.</p>\n        </div>\n        <button\n          type=\"button\"\n          aria-label=\"Close publish checklist\"\n          (click)=\"closePublishChecklist()\"\n        >\n          \u00D7\n        </button>\n      </header>\n\n      <div class=\"dialog__body form-publish-dialog__body\">\n        <div class=\"form-publish-dialog__summary\">\n          <div [class.has-blockers]=\"publishBlockers().length\">\n            @if (publishBlockers().length) {\n              <svg lucideTriangleAlert size=\"18\" aria-hidden=\"true\"></svg>\n            } @else {\n              <svg lucideCircleCheck size=\"18\" aria-hidden=\"true\"></svg>\n            }\n            <span>\n              <strong>{{ publishBlockers().length }}</strong>\n              <small>Blocking issues</small>\n            </span>\n          </div>\n          <div [class.has-warnings]=\"publishWarnings().length\">\n            <svg lucideTriangleAlert size=\"18\" aria-hidden=\"true\"></svg>\n            <span>\n              <strong>{{ publishWarnings().length }}</strong>\n              <small>Advisory warnings</small>\n            </span>\n          </div>\n        </div>\n\n        @if (publishIssues().length) {\n          <div class=\"form-publish-dialog__issues\" aria-label=\"Form readiness issues\">\n            @for (issue of publishIssues(); track issue.id) {\n              <button\n                type=\"button\"\n                [class.is-blocker]=\"issue.severity === 'blocker'\"\n                [disabled]=\"!issue.sectionId\"\n                (click)=\"focusPublishIssue(issue)\"\n              >\n                <span>\n                  @if (issue.severity === 'blocker') {\n                    <svg lucideTriangleAlert size=\"17\" aria-hidden=\"true\"></svg>\n                  } @else {\n                    <svg lucideCircleAlert size=\"17\" aria-hidden=\"true\"></svg>\n                  }\n                </span>\n                <span>\n                  <strong>{{ issue.title }}</strong>\n                  <small>{{ issue.detail }}</small>\n                </span>\n                @if (issue.sectionId) {\n                  <span>Fix</span>\n                }\n              </button>\n            }\n          </div>\n        } @else {\n          <div class=\"form-publish-dialog__ready\">\n            <svg lucideCircleCheck size=\"22\" aria-hidden=\"true\"></svg>\n            <div>\n              <strong>Ready to publish</strong>\n              <p>No structural or content-quality issues were found.</p>\n            </div>\n          </div>\n        }\n      </div>\n\n      <footer class=\"dialog__footer form-publish-dialog__footer\">\n        <p>\n          @if (publishBlockers().length) {\n            Resolve every blocker before the form can be published.\n          } @else {\n            Publishing makes this structure available to new application flows.\n          }\n        </p>\n        <button class=\"secondary\" type=\"button\" (click)=\"closePublishChecklist()\">Cancel</button>\n        <button\n          class=\"primary\"\n          type=\"button\"\n          [disabled]=\"publishBlockers().length || saving()\"\n          (click)=\"confirmPublish()\"\n        >\n          <svg lucideSend size=\"16\" aria-hidden=\"true\"></svg>\n          {{ saving() ? 'Publishing\u2026' : 'Publish form' }}\n        </button>\n      </footer>\n    </section>\n  </div>\n}\n\n@if (createFormDialog()) {\n  <div class=\"dialog-layer\">\n    <button\n      class=\"dialog-backdrop\"\n      type=\"button\"\n      aria-label=\"Close dialog\"\n      (click)=\"closeCreateFormDialog()\"\n    ></button>\n    <form\n      class=\"dialog dialog--small\"\n      role=\"dialog\"\n      aria-modal=\"true\"\n      aria-labelledby=\"create-form-title\"\n      (ngSubmit)=\"createForm()\"\n    >\n      <header class=\"dialog__header\">\n        <div>\n          <small>Forms</small>\n          <h2 id=\"create-form-title\">Create form</h2>\n        </div>\n        <button type=\"button\" aria-label=\"Close dialog\" (click)=\"closeCreateFormDialog()\">\u00D7</button>\n      </header>\n      <div class=\"dialog__body dialog-form\">\n        <label\n          ><span>Form name *</span\n          ><input\n            name=\"formName\"\n            [(ngModel)]=\"newFormName\"\n            placeholder=\"e.g. Undergraduate Admission 2027\"\n            autocomplete=\"off\"\n            autofocus\n        /></label>\n        <label>\n          <span>Form purpose *</span>\n          <select name=\"formPurpose\" [(ngModel)]=\"newFormPurpose\">\n            <option value=\"admission\">Student admission</option>\n            <option value=\"faculty\">Faculty application</option>\n            <option value=\"employee\">Employee application</option>\n            <option value=\"general\">General/custom form</option>\n          </select>\n        </label>\n        @if (createFormError()) {\n          <p class=\"dialog-form__error\" role=\"alert\">{{ createFormError() }}</p>\n        }\n      </div>\n      <footer class=\"dialog__footer\">\n        <button class=\"secondary\" type=\"button\" (click)=\"closeCreateFormDialog()\">Cancel</button>\n        <button class=\"primary\" type=\"submit\" [disabled]=\"!newFormName.trim() || creatingForm()\">\n          {{ creatingForm() ? 'Creating\u2026' : 'Create form' }}\n        </button>\n      </footer>\n    </form>\n  </div>\n}\n\n@if (nameDialog(); as dialog) {\n  <div class=\"dialog-layer\">\n    <button\n      class=\"dialog-backdrop\"\n      type=\"button\"\n      aria-label=\"Close dialog\"\n      (click)=\"nameDialog.set(null)\"\n    ></button>\n    <section\n      class=\"dialog dialog--small\"\n      role=\"dialog\"\n      aria-modal=\"true\"\n      aria-labelledby=\"name-dialog-title\"\n    >\n      <header class=\"dialog__header\">\n        <div>\n          <small>{{ dialog.mode === 'add' ? 'Create' : 'Edit' }}</small>\n          <h2 id=\"name-dialog-title\">{{ dialog.kind === 'section' ? 'Tab' : 'Sub section' }}</h2>\n        </div>\n        <button type=\"button\" aria-label=\"Close dialog\" (click)=\"nameDialog.set(null)\">\u00D7</button>\n      </header>\n      <div class=\"dialog__body dialog-form\">\n        <label\n          ><span>Name *</span\n          ><input [(ngModel)]=\"dialogName\" placeholder=\"Enter a clear display name\" /></label\n        ><label\n          ><span>Description</span><textarea [(ngModel)]=\"dialogDescription\" rows=\"3\"></textarea>\n        </label>\n      </div>\n      <footer class=\"dialog__footer\">\n        <button class=\"secondary\" type=\"button\" (click)=\"nameDialog.set(null)\">Cancel</button\n        ><button\n          class=\"primary\"\n          type=\"button\"\n          [disabled]=\"!dialogName.trim()\"\n          (click)=\"saveNameDialog()\"\n        >\n          {{ dialog.mode === 'add' ? 'Create' : 'Save changes' }}\n        </button>\n      </footer>\n    </section>\n  </div>\n}\n\n@if (deleteDialog(); as dialog) {\n  <div class=\"dialog-layer\">\n    <button\n      class=\"dialog-backdrop\"\n      type=\"button\"\n      aria-label=\"Cancel deletion\"\n      (click)=\"deleteDialog.set(null)\"\n    ></button>\n    <section\n      class=\"dialog dialog--confirm\"\n      role=\"alertdialog\"\n      aria-modal=\"true\"\n      aria-labelledby=\"delete-dialog-title\"\n    >\n      <div class=\"dialog__body confirm-body\">\n        <span class=\"confirm-icon\">!</span>\n        <h2 id=\"delete-dialog-title\">{{ dialog.title }}</h2>\n        <p>{{ dialog.message }}</p>\n        @if (deleteError()) {\n          <p class=\"dialog-form__error\" role=\"alert\">{{ deleteError() }}</p>\n        }\n      </div>\n      <footer class=\"dialog__footer\">\n        <button\n          class=\"secondary\"\n          type=\"button\"\n          [disabled]=\"deleting()\"\n          (click)=\"deleteDialog.set(null); deleteError.set('')\"\n        >\n          Cancel</button\n        ><button\n          class=\"danger-button\"\n          type=\"button\"\n          [disabled]=\"deleting()\"\n          (click)=\"confirmDelete()\"\n        >\n          {{ deleting() ? 'Deleting\u2026' : 'Delete permanently' }}\n        </button>\n      </footer>\n    </section>\n  </div>\n}\n", styles: ["/* ERP-LOCAL-STYLE: Form publishing readiness and dependency-validation dialog. */\n:host {\n  display: contents;\n}\n\n.form-publish-dialog-layer {\n  z-index: 1200;\n}\n\n.form-publish-dialog {\n  display: grid;\n  width: min(44rem, calc(100vw - var(--erp-space-6)));\n  max-height: min(48rem, calc(100dvh - var(--erp-space-6)));\n  grid-template-rows: auto minmax(0, 1fr) auto;\n  overflow: hidden;\n}\n\n.form-publish-dialog__header {\n  display: grid;\n  grid-template-columns: auto minmax(0, 1fr) auto;\n  align-items: start;\n  gap: var(--erp-space-3);\n}\n\n.form-publish-dialog__header > div {\n  min-width: 0;\n}\n\n.form-publish-dialog__header h2,\n.form-publish-dialog__header p,\n.form-publish-dialog__ready p,\n.form-publish-dialog__footer p {\n  margin: 0;\n}\n\n.form-publish-dialog__header p {\n  margin-top: var(--erp-space-1);\n  color: var(--erp-text-muted);\n  font-size: var(--erp-font-caption);\n}\n\n.form-publish-dialog__icon {\n  display: inline-grid;\n  width: var(--erp-control-height-large);\n  height: var(--erp-control-height-large);\n  place-items: center;\n  color: var(--erp-blue-700);\n  background: var(--erp-blue-50);\n  border-radius: var(--erp-radius-control);\n}\n\n.form-publish-dialog__body {\n  display: grid;\n  align-content: start;\n  gap: var(--erp-space-4);\n  overflow-y: auto;\n}\n\n.form-publish-dialog__summary {\n  display: grid;\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n  gap: var(--erp-space-3);\n}\n\n.form-publish-dialog__summary > div {\n  display: flex;\n  align-items: center;\n  gap: var(--erp-space-3);\n  padding: var(--erp-space-3);\n  color: var(--erp-success-text);\n  background: var(--erp-success-bg);\n  border: 1px solid transparent;\n  border-radius: var(--erp-radius-control);\n}\n\n.form-publish-dialog__summary > div.has-blockers {\n  color: var(--erp-danger-text);\n  background: var(--erp-danger-bg);\n  border-color: var(--erp-danger);\n}\n\n.form-publish-dialog__summary > div.has-warnings {\n  color: var(--erp-warning-text);\n  background: var(--erp-warning-bg);\n}\n\n.form-publish-dialog__summary strong,\n.form-publish-dialog__summary small {\n  display: block;\n}\n\n.form-publish-dialog__summary strong {\n  color: currentColor;\n  font-size: var(--erp-font-section-title);\n}\n\n.form-publish-dialog__summary small {\n  font-size: var(--erp-font-caption);\n}\n\n.form-publish-dialog__issues {\n  display: grid;\n  overflow: hidden;\n  border: 1px solid var(--erp-border-subtle);\n  border-radius: var(--erp-radius-control);\n}\n\n.form-publish-dialog__issues > button {\n  display: grid;\n  width: 100%;\n  grid-template-columns: auto minmax(0, 1fr) auto;\n  align-items: start;\n  gap: var(--erp-space-3);\n  padding: var(--erp-space-3) var(--erp-space-4);\n  color: var(--erp-warning-text);\n  text-align: left;\n  background: var(--erp-surface-raised);\n  border: 0;\n}\n\n.form-publish-dialog__issues > button + button {\n  border-top: 1px solid var(--erp-border-subtle);\n}\n\n.form-publish-dialog__issues > button.is-blocker {\n  color: var(--erp-danger-text);\n}\n\n.form-publish-dialog__issues > button:not(:disabled):hover,\n.form-publish-dialog__issues > button:not(:disabled):focus-visible {\n  background: var(--erp-surface-detail-soft);\n}\n\n.form-publish-dialog__issues > button:disabled {\n  cursor: default;\n  opacity: 1;\n}\n\n.form-publish-dialog__issues > button > span:first-child {\n  display: inline-grid;\n  width: var(--erp-control-height-compact);\n  height: var(--erp-control-height-compact);\n  place-items: center;\n  background: var(--erp-warning-bg);\n  border-radius: var(--erp-radius-pill);\n}\n\n.form-publish-dialog__issues > button.is-blocker > span:first-child {\n  background: var(--erp-danger-bg);\n}\n\n.form-publish-dialog__issues strong,\n.form-publish-dialog__issues small {\n  display: block;\n}\n\n.form-publish-dialog__issues strong {\n  color: var(--erp-text-heading);\n  font-size: var(--erp-font-label);\n  font-weight: var(--erp-weight-semibold);\n}\n\n.form-publish-dialog__issues small {\n  margin-top: 0.125rem;\n  color: var(--erp-text-muted);\n  font-size: var(--erp-font-caption);\n  line-height: var(--erp-line-body);\n}\n\n.form-publish-dialog__issues > button > span:last-child:not(:nth-child(2)) {\n  align-self: center;\n  color: var(--erp-text-link);\n  font-size: var(--erp-font-caption);\n  font-weight: var(--erp-weight-semibold);\n}\n\n.form-publish-dialog__ready {\n  display: flex;\n  align-items: flex-start;\n  gap: var(--erp-space-3);\n  padding: var(--erp-space-4);\n  color: var(--erp-success-text);\n  background: var(--erp-success-bg);\n  border-radius: var(--erp-radius-control);\n}\n\n.form-publish-dialog__ready strong {\n  display: block;\n  color: currentColor;\n  font-size: var(--erp-font-panel-title);\n}\n\n.form-publish-dialog__ready p {\n  margin-top: var(--erp-space-1);\n  color: var(--erp-text-body);\n  font-size: var(--erp-font-caption);\n}\n\n.form-publish-dialog__footer {\n  display: grid;\n  grid-template-columns: minmax(0, 1fr) auto auto;\n  align-items: center;\n  gap: var(--erp-space-2);\n}\n\n.form-publish-dialog__footer p {\n  color: var(--erp-text-muted);\n  font-size: var(--erp-font-caption);\n  line-height: var(--erp-line-body);\n}\n\n@media (max-width: 40rem) {\n  .form-publish-dialog {\n    width: calc(100vw - var(--erp-space-4));\n    max-height: calc(100dvh - var(--erp-space-4));\n  }\n\n  .form-publish-dialog__summary {\n    grid-template-columns: minmax(0, 1fr);\n  }\n\n  .form-publish-dialog__footer {\n    grid-template-columns: minmax(0, 1fr);\n  }\n\n  .form-publish-dialog__footer .primary,\n  .form-publish-dialog__footer .secondary {\n    width: 100%;\n  }\n}\n"] }]
    }], () => [], { handleViewportResize: [{
            type: HostListener,
            args: ['window:resize']
        }], closePublishChecklistOnEscape: [{
            type: HostListener,
            args: ['document:keydown.escape']
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(FormBuilderComponent, { className: "FormBuilderComponent", filePath: "frontend/src/app/features/admin/form-builder/form-builder.component.ts", lineNumber: 109 }); })();
