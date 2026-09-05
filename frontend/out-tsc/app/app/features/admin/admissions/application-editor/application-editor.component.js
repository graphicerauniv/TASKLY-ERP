import { CdkTrapFocus } from '@angular/cdk/a11y';
import { DOCUMENT } from '@angular/common';
import { ChangeDetectionStrategy, Component, DestroyRef, HostListener, computed, effect, inject, signal, } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { LucideArrowLeft, LucideArrowRight, LucideCheck, LucideCircleAlert, LucideClipboardCheck, LucideClock3, LucideFileText, LucideRefreshCw, LucideSave, LucideShieldCheck, LucideTrash2, LucideX, } from '@lucide/angular';
import { firstValueFrom } from 'rxjs';
import { ApiService } from '../../../../core/api.service';
import { AdminPageComponent } from '../../../../shared/ui/admin-page/admin-page.component';
import { DynamicFieldRendererComponent } from '../../../../shared/ui/dynamic-field-renderer/dynamic-field-renderer.component';
import { admissionReference, admissionStatusLabel } from '../admission-presentation';
import { admissionSectionIssues, admissionValidationIssues, hasAdmissionValue, } from '../admission-form-validation';
import * as i0 from "@angular/core";
const _c0 = a0 => ["/admin/admissions/applications", a0];
const _forTrack0 = ($index, $item) => $item.id;
function ApplicationEditorComponent_Conditional_5_Template(rf, ctx) { if (rf & 1) {
    const _r1 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 8);
    i0.ɵɵlistener("click", function ApplicationEditorComponent_Conditional_5_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.openReview()); });
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(1, "svg", 9);
    i0.ɵɵtext(2, " Review application ");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵproperty("disabled", ctx_r1.saving());
} }
function ApplicationEditorComponent_Conditional_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "section", 5);
    i0.ɵɵelement(1, "span", 10);
    i0.ɵɵelementStart(2, "div");
    i0.ɵɵelement(3, "span", 11)(4, "span", 11)(5, "span", 11);
    i0.ɵɵelementEnd()();
} }
function ApplicationEditorComponent_Conditional_7_Template(rf, ctx) { if (rf & 1) {
    const _r3 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "section", 6)(1, "span", 12);
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(2, "svg", 13);
    i0.ɵɵelementEnd();
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(3, "h2");
    i0.ɵɵtext(4, "Application editor unavailable");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "p");
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "button", 14);
    i0.ɵɵlistener("click", function ApplicationEditorComponent_Conditional_7_Template_button_click_7_listener() { i0.ɵɵrestoreView(_r3); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.load()); });
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(8, "svg", 15);
    i0.ɵɵtext(9, " Try again ");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(6);
    i0.ɵɵtextInterpolate(ctx_r1.loadError());
} }
function ApplicationEditorComponent_Conditional_8_For_27_Conditional_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(0, "svg", 42);
} }
function ApplicationEditorComponent_Conditional_8_For_27_Conditional_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtext(0);
} if (rf & 2) {
    const ɵ$index_92_r6 = i0.ɵɵnextContext().$index;
    i0.ɵɵtextInterpolate1(" ", ɵ$index_92_r6 + 1, " ");
} }
function ApplicationEditorComponent_Conditional_8_For_27_Conditional_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtext(0);
} if (rf & 2) {
    const section_r7 = i0.ɵɵnextContext().$implicit;
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵtextInterpolate1(" ", ctx_r1.sectionIssues(section_r7).length, " required remaining ");
} }
function ApplicationEditorComponent_Conditional_8_For_27_Conditional_10_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtext(0, " Ready ");
} }
function ApplicationEditorComponent_Conditional_8_For_27_Template(rf, ctx) { if (rf & 1) {
    const _r5 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "li")(1, "button", 40);
    i0.ɵɵlistener("click", function ApplicationEditorComponent_Conditional_8_For_27_Template_button_click_1_listener() { const ɵ$index_92_r6 = i0.ɵɵrestoreView(_r5).$index; const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.goToSection(ɵ$index_92_r6)); });
    i0.ɵɵelementStart(2, "span", 41);
    i0.ɵɵconditionalCreate(3, ApplicationEditorComponent_Conditional_8_For_27_Conditional_3_Template, 1, 0, ":svg:svg", 42)(4, ApplicationEditorComponent_Conditional_8_For_27_Conditional_4_Template, 1, 1);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "span")(6, "strong");
    i0.ɵɵtext(7);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "small");
    i0.ɵɵconditionalCreate(9, ApplicationEditorComponent_Conditional_8_For_27_Conditional_9_Template, 1, 1)(10, ApplicationEditorComponent_Conditional_8_For_27_Conditional_10_Template, 1, 0);
    i0.ɵɵelementEnd()()()();
} if (rf & 2) {
    const section_r7 = ctx.$implicit;
    const ɵ$index_92_r6 = ctx.$index;
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵclassProp("is-current", ctx_r1.sectionState(section_r7, ɵ$index_92_r6) === "current")("is-complete", ctx_r1.sectionState(section_r7, ɵ$index_92_r6) === "complete")("has-attention", ctx_r1.sectionState(section_r7, ɵ$index_92_r6) === "attention");
    i0.ɵɵattribute("aria-current", ɵ$index_92_r6 === ctx_r1.activeIndex() ? "step" : null);
    i0.ɵɵadvance(2);
    i0.ɵɵconditional(ctx_r1.sectionState(section_r7, ɵ$index_92_r6) === "complete" ? 3 : 4);
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(section_r7.name);
    i0.ɵɵadvance(2);
    i0.ɵɵconditional(ctx_r1.sectionIssues(section_r7).length ? 9 : 10);
} }
function ApplicationEditorComponent_Conditional_8_Conditional_29_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 24);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r1.notice());
} }
function ApplicationEditorComponent_Conditional_8_Conditional_30_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 25);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r1.saveError());
} }
function ApplicationEditorComponent_Conditional_8_Conditional_31_For_15_Conditional_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const subsection_r9 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(subsection_r9.description);
} }
function ApplicationEditorComponent_Conditional_8_Conditional_31_For_15_Conditional_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const subsection_r9 = i0.ɵɵnextContext().$implicit;
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate2(" ", ctx_r1.entries(subsection_r9).length, " ", ctx_r1.entries(subsection_r9).length === 1 ? "entry" : "entries", " ");
} }
function ApplicationEditorComponent_Conditional_8_Conditional_31_For_15_Conditional_7_For_2_For_9_Conditional_0_Template(rf, ctx) { if (rf & 1) {
    const _r13 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "erp-dynamic-field-renderer", 64);
    i0.ɵɵlistener("modelChanged", function ApplicationEditorComponent_Conditional_8_Conditional_31_For_15_Conditional_7_For_2_For_9_Conditional_0_Template_erp_dynamic_field_renderer_modelChanged_0_listener($event) { i0.ɵɵrestoreView(_r13); const field_r14 = i0.ɵɵnextContext().$implicit; const ctx_r14 = i0.ɵɵnextContext(); const entry_r16 = ctx_r14.$implicit; const ɵ$index_171_r12 = ctx_r14.$index; const ctx_r1 = i0.ɵɵnextContext(5); return i0.ɵɵresetView(ctx_r1.setValue(field_r14, $event, entry_r16, ɵ$index_171_r12)); })("optionSearch", function ApplicationEditorComponent_Conditional_8_Conditional_31_For_15_Conditional_7_For_2_For_9_Conditional_0_Template_erp_dynamic_field_renderer_optionSearch_0_listener($event) { i0.ɵɵrestoreView(_r13); const field_r14 = i0.ɵɵnextContext().$implicit; const ctx_r14 = i0.ɵɵnextContext(); const entry_r16 = ctx_r14.$implicit; const ɵ$index_171_r12 = ctx_r14.$index; const ctx_r1 = i0.ɵɵnextContext(5); return i0.ɵɵresetView(ctx_r1.searchOptions(field_r14, $event, entry_r16, ɵ$index_171_r12)); })("fileSelected", function ApplicationEditorComponent_Conditional_8_Conditional_31_For_15_Conditional_7_For_2_For_9_Conditional_0_Template_erp_dynamic_field_renderer_fileSelected_0_listener($event) { i0.ɵɵrestoreView(_r13); const field_r14 = i0.ɵɵnextContext().$implicit; const ctx_r14 = i0.ɵɵnextContext(); const entry_r16 = ctx_r14.$implicit; const ɵ$index_171_r12 = ctx_r14.$index; const ctx_r1 = i0.ɵɵnextContext(5); return i0.ɵɵresetView(ctx_r1.upload(field_r14, $event, entry_r16, ɵ$index_171_r12)); })("uploadRemoved", function ApplicationEditorComponent_Conditional_8_Conditional_31_For_15_Conditional_7_For_2_For_9_Conditional_0_Template_erp_dynamic_field_renderer_uploadRemoved_0_listener() { i0.ɵɵrestoreView(_r13); const field_r14 = i0.ɵɵnextContext().$implicit; const ctx_r14 = i0.ɵɵnextContext(); const entry_r16 = ctx_r14.$implicit; const ɵ$index_171_r12 = ctx_r14.$index; const ctx_r1 = i0.ɵɵnextContext(5); return i0.ɵɵresetView(ctx_r1.setValue(field_r14, "", entry_r16, ɵ$index_171_r12)); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const field_r14 = i0.ɵɵnextContext().$implicit;
    const ctx_r14 = i0.ɵɵnextContext();
    const entry_r16 = ctx_r14.$implicit;
    const ɵ$index_171_r12 = ctx_r14.$index;
    const subsection_r9 = i0.ɵɵnextContext(2).$implicit;
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵproperty("field", field_r14)("modelValue", ctx_r1.value(field_r14, entry_r16))("options", ctx_r1.fieldOptions(field_r14, ɵ$index_171_r12))("entryKey", subsection_r9.id + "-" + ɵ$index_171_r12);
} }
function ApplicationEditorComponent_Conditional_8_Conditional_31_For_15_Conditional_7_For_2_For_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵconditionalCreate(0, ApplicationEditorComponent_Conditional_8_Conditional_31_For_15_Conditional_7_For_2_For_9_Conditional_0_Template, 1, 4, "erp-dynamic-field-renderer", 63);
} if (rf & 2) {
    const field_r14 = ctx.$implicit;
    const entry_r16 = i0.ɵɵnextContext().$implicit;
    const ctx_r1 = i0.ɵɵnextContext(5);
    i0.ɵɵconditional(ctx_r1.visible(field_r14, entry_r16) ? 0 : -1);
} }
function ApplicationEditorComponent_Conditional_8_Conditional_31_For_15_Conditional_7_For_2_Template(rf, ctx) { if (rf & 1) {
    const _r11 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "article", 58)(1, "header")(2, "strong");
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "button", 61);
    i0.ɵɵlistener("click", function ApplicationEditorComponent_Conditional_8_Conditional_31_For_15_Conditional_7_For_2_Template_button_click_4_listener() { const ɵ$index_171_r12 = i0.ɵɵrestoreView(_r11).$index; const subsection_r9 = i0.ɵɵnextContext(2).$implicit; const ctx_r1 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r1.removeEntry(subsection_r9, ɵ$index_171_r12)); });
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(5, "svg", 62);
    i0.ɵɵtext(6, " Remove ");
    i0.ɵɵelementEnd()();
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(7, "div", 56);
    i0.ɵɵrepeaterCreate(8, ApplicationEditorComponent_Conditional_8_Conditional_31_For_15_Conditional_7_For_2_For_9_Template, 1, 1, null, null, _forTrack0);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ɵ$index_171_r12 = ctx.$index;
    const subsection_r9 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate2("", subsection_r9.name, " ", ɵ$index_171_r12 + 1);
    i0.ɵɵadvance();
    i0.ɵɵattribute("aria-label", "Remove " + subsection_r9.name + " " + (ɵ$index_171_r12 + 1));
    i0.ɵɵadvance(4);
    i0.ɵɵrepeater(subsection_r9.fields);
} }
function ApplicationEditorComponent_Conditional_8_Conditional_31_For_15_Conditional_7_ForEmpty_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 59)(1, "p");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const subsection_r9 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1("No ", subsection_r9.name.toLowerCase(), " entries have been added.");
} }
function ApplicationEditorComponent_Conditional_8_Conditional_31_For_15_Conditional_7_Template(rf, ctx) { if (rf & 1) {
    const _r10 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 57);
    i0.ɵɵrepeaterCreate(1, ApplicationEditorComponent_Conditional_8_Conditional_31_For_15_Conditional_7_For_2_Template, 10, 3, "article", 58, i0.ɵɵrepeaterTrackByIndex, false, ApplicationEditorComponent_Conditional_8_Conditional_31_For_15_Conditional_7_ForEmpty_3_Template, 3, 1, "div", 59);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "button", 60);
    i0.ɵɵlistener("click", function ApplicationEditorComponent_Conditional_8_Conditional_31_For_15_Conditional_7_Template_button_click_4_listener() { i0.ɵɵrestoreView(_r10); const subsection_r9 = i0.ɵɵnextContext().$implicit; const ctx_r1 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r1.addEntry(subsection_r9)); });
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const subsection_r9 = i0.ɵɵnextContext().$implicit;
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance();
    i0.ɵɵrepeater(ctx_r1.entries(subsection_r9));
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("disabled", !!subsection_r9.maxEntries && ctx_r1.entries(subsection_r9).length >= subsection_r9.maxEntries);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" Add ", subsection_r9.name, " ");
} }
function ApplicationEditorComponent_Conditional_8_Conditional_31_For_15_Conditional_8_For_2_Conditional_0_Template(rf, ctx) { if (rf & 1) {
    const _r17 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "erp-dynamic-field-renderer", 64);
    i0.ɵɵlistener("modelChanged", function ApplicationEditorComponent_Conditional_8_Conditional_31_For_15_Conditional_8_For_2_Conditional_0_Template_erp_dynamic_field_renderer_modelChanged_0_listener($event) { i0.ɵɵrestoreView(_r17); const field_r18 = i0.ɵɵnextContext().$implicit; const ctx_r1 = i0.ɵɵnextContext(5); return i0.ɵɵresetView(ctx_r1.setValue(field_r18, $event)); })("optionSearch", function ApplicationEditorComponent_Conditional_8_Conditional_31_For_15_Conditional_8_For_2_Conditional_0_Template_erp_dynamic_field_renderer_optionSearch_0_listener($event) { i0.ɵɵrestoreView(_r17); const field_r18 = i0.ɵɵnextContext().$implicit; const ctx_r1 = i0.ɵɵnextContext(5); return i0.ɵɵresetView(ctx_r1.searchOptions(field_r18, $event)); })("fileSelected", function ApplicationEditorComponent_Conditional_8_Conditional_31_For_15_Conditional_8_For_2_Conditional_0_Template_erp_dynamic_field_renderer_fileSelected_0_listener($event) { i0.ɵɵrestoreView(_r17); const field_r18 = i0.ɵɵnextContext().$implicit; const ctx_r1 = i0.ɵɵnextContext(5); return i0.ɵɵresetView(ctx_r1.upload(field_r18, $event)); })("uploadRemoved", function ApplicationEditorComponent_Conditional_8_Conditional_31_For_15_Conditional_8_For_2_Conditional_0_Template_erp_dynamic_field_renderer_uploadRemoved_0_listener() { i0.ɵɵrestoreView(_r17); const field_r18 = i0.ɵɵnextContext().$implicit; const ctx_r1 = i0.ɵɵnextContext(5); return i0.ɵɵresetView(ctx_r1.setValue(field_r18, "")); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const field_r18 = i0.ɵɵnextContext().$implicit;
    const subsection_r9 = i0.ɵɵnextContext(2).$implicit;
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵproperty("field", field_r18)("modelValue", ctx_r1.value(field_r18))("options", ctx_r1.fieldOptions(field_r18))("entryKey", subsection_r9.id);
} }
function ApplicationEditorComponent_Conditional_8_Conditional_31_For_15_Conditional_8_For_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵconditionalCreate(0, ApplicationEditorComponent_Conditional_8_Conditional_31_For_15_Conditional_8_For_2_Conditional_0_Template, 1, 4, "erp-dynamic-field-renderer", 63);
} if (rf & 2) {
    const field_r18 = ctx.$implicit;
    const ctx_r1 = i0.ɵɵnextContext(5);
    i0.ɵɵconditional(ctx_r1.visible(field_r18) ? 0 : -1);
} }
function ApplicationEditorComponent_Conditional_8_Conditional_31_For_15_Conditional_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 56);
    i0.ɵɵrepeaterCreate(1, ApplicationEditorComponent_Conditional_8_Conditional_31_For_15_Conditional_8_For_2_Template, 1, 1, null, null, _forTrack0);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const subsection_r9 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance();
    i0.ɵɵrepeater(subsection_r9.fields);
} }
function ApplicationEditorComponent_Conditional_8_Conditional_31_For_15_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "section", 49)(1, "header")(2, "div")(3, "h3", 46);
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵconditionalCreate(5, ApplicationEditorComponent_Conditional_8_Conditional_31_For_15_Conditional_5_Template, 2, 1, "p");
    i0.ɵɵelementEnd();
    i0.ɵɵconditionalCreate(6, ApplicationEditorComponent_Conditional_8_Conditional_31_For_15_Conditional_6_Template, 2, 2, "span");
    i0.ɵɵelementEnd();
    i0.ɵɵconditionalCreate(7, ApplicationEditorComponent_Conditional_8_Conditional_31_For_15_Conditional_7_Template, 6, 3)(8, ApplicationEditorComponent_Conditional_8_Conditional_31_For_15_Conditional_8_Template, 3, 0, "div", 56);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const subsection_r9 = ctx.$implicit;
    i0.ɵɵattribute("aria-labelledby", subsection_r9.id + "-title");
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("id", subsection_r9.id + "-title");
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(subsection_r9.name);
    i0.ɵɵadvance();
    i0.ɵɵconditional(subsection_r9.description ? 5 : -1);
    i0.ɵɵadvance();
    i0.ɵɵconditional(subsection_r9.isRepeatable ? 6 : -1);
    i0.ɵɵadvance();
    i0.ɵɵconditional(subsection_r9.isRepeatable ? 7 : 8);
} }
function ApplicationEditorComponent_Conditional_8_Conditional_31_ForEmpty_16_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 50)(1, "strong");
    i0.ɵɵtext(2, "No visible fields");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "p");
    i0.ɵɵtext(4, "This section does not currently contain any fields an admin can edit.");
    i0.ɵɵelementEnd()();
} }
function ApplicationEditorComponent_Conditional_8_Conditional_31_Template(rf, ctx) { if (rf & 1) {
    const _r8 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "section", 26)(1, "header", 43)(2, "span", 44);
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(3, "svg", 45);
    i0.ɵɵelementEnd();
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(4, "div")(5, "small");
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "h2", 46);
    i0.ɵɵtext(8);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(9, "p");
    i0.ɵɵtext(10);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(11, "span", 47);
    i0.ɵɵtext(12);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(13, "div", 48);
    i0.ɵɵrepeaterCreate(14, ApplicationEditorComponent_Conditional_8_Conditional_31_For_15_Template, 9, 6, "section", 49, _forTrack0, false, ApplicationEditorComponent_Conditional_8_Conditional_31_ForEmpty_16_Template, 5, 0, "div", 50);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(17, "footer", 51)(18, "button", 52);
    i0.ɵɵlistener("click", function ApplicationEditorComponent_Conditional_8_Conditional_31_Template_button_click_18_listener() { i0.ɵɵrestoreView(_r8); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.goToSection(ctx_r1.activeIndex() - 1)); });
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(19, "svg", 53);
    i0.ɵɵtext(20, " Previous ");
    i0.ɵɵelementEnd();
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(21, "div")(22, "span");
    i0.ɵɵtext(23);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(24, "button", 52);
    i0.ɵɵlistener("click", function ApplicationEditorComponent_Conditional_8_Conditional_31_Template_button_click_24_listener() { i0.ɵɵrestoreView(_r8); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.saveManually()); });
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(25, "svg", 54);
    i0.ɵɵtext(26, " Save ");
    i0.ɵɵelementEnd();
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(27, "button", 8);
    i0.ɵɵlistener("click", function ApplicationEditorComponent_Conditional_8_Conditional_31_Template_button_click_27_listener() { i0.ɵɵrestoreView(_r8); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.saveAndContinue()); });
    i0.ɵɵtext(28);
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(29, "svg", 55);
    i0.ɵɵelementEnd()()()();
} if (rf & 2) {
    const section_r19 = ctx;
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵattribute("aria-labelledby", section_r19.id);
    i0.ɵɵadvance(6);
    i0.ɵɵtextInterpolate2("Section ", ctx_r1.activeIndex() + 1, " of ", ctx_r1.sections().length);
    i0.ɵɵadvance();
    i0.ɵɵproperty("id", section_r19.id);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(section_r19.name);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", section_r19.description || "Review and update the information configured for this section.", " ");
    i0.ɵɵadvance();
    i0.ɵɵclassProp("has-attention", ctx_r1.activeIssues().length);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r1.activeIssues().length ? ctx_r1.activeIssues().length + " required" : "Section ready", " ");
    i0.ɵɵadvance(2);
    i0.ɵɵrepeater(ctx_r1.visibleSubsections());
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("disabled", ctx_r1.activeIndex() === 0);
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(ctx_r1.saveState());
    i0.ɵɵadvance();
    i0.ɵɵproperty("disabled", ctx_r1.saving() || !ctx_r1.dirty());
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("disabled", ctx_r1.saving());
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r1.activeIndex() === ctx_r1.sections().length - 1 ? "Review application" : "Continue", " ");
} }
function ApplicationEditorComponent_Conditional_8_Conditional_35_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(0, "svg", 30);
} }
function ApplicationEditorComponent_Conditional_8_Conditional_36_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(0, "svg", 31);
} }
function ApplicationEditorComponent_Conditional_8_Conditional_37_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(0, "svg", 32);
} }
function ApplicationEditorComponent_Conditional_8_Conditional_52_For_2_Template(rf, ctx) { if (rf & 1) {
    const _r20 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "li")(1, "button", 40);
    i0.ɵɵlistener("click", function ApplicationEditorComponent_Conditional_8_Conditional_52_For_2_Template_button_click_1_listener() { const issue_r21 = i0.ɵɵrestoreView(_r20).$implicit; const ctx_r1 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r1.focusIssue(issue_r21)); });
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(2, "svg", 66);
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(3, "span")(4, "strong");
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "small");
    i0.ɵɵtext(7);
    i0.ɵɵelementEnd()()()();
} if (rf & 2) {
    const issue_r21 = ctx.$implicit;
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(issue_r21.fieldName || issue_r21.subsectionName);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate2("", issue_r21.sectionName, " / ", issue_r21.subsectionName);
} }
function ApplicationEditorComponent_Conditional_8_Conditional_52_Conditional_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 65);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" +", ctx_r1.validationIssues().length - 5, " more required items ");
} }
function ApplicationEditorComponent_Conditional_8_Conditional_52_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "ul");
    i0.ɵɵrepeaterCreate(1, ApplicationEditorComponent_Conditional_8_Conditional_52_For_2_Template, 8, 3, "li", null, _forTrack0);
    i0.ɵɵelementEnd();
    i0.ɵɵconditionalCreate(3, ApplicationEditorComponent_Conditional_8_Conditional_52_Conditional_3_Template, 2, 1, "p", 65);
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵrepeater(ctx_r1.validationIssues().slice(0, 5));
    i0.ɵɵadvance(2);
    i0.ɵɵconditional(ctx_r1.validationIssues().length > 5 ? 3 : -1);
} }
function ApplicationEditorComponent_Conditional_8_Conditional_53_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 38);
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(1, "svg", 32);
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(2, "p");
    i0.ɵɵtext(3, "All required application information is ready for review.");
    i0.ɵɵelementEnd()();
} }
function ApplicationEditorComponent_Conditional_8_Template(rf, ctx) { if (rf & 1) {
    const _r4 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "section", 16)(1, "div", 17)(2, "span");
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "strong");
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(6, "div", 18)(7, "span", 19);
    i0.ɵɵtext(8);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(9, "span");
    i0.ɵɵtext(10);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(11, "span");
    i0.ɵɵtext(12);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(13, "div", 20)(14, "div");
    i0.ɵɵelement(15, "span");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(16, "strong");
    i0.ɵɵtext(17);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(18, "div", 21)(19, "nav", 22)(20, "header")(21, "span");
    i0.ɵɵtext(22, "Application outline");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(23, "strong");
    i0.ɵɵtext(24);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(25, "ol");
    i0.ɵɵrepeaterCreate(26, ApplicationEditorComponent_Conditional_8_For_27_Template, 11, 10, "li", null, _forTrack0);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(28, "main", 23);
    i0.ɵɵconditionalCreate(29, ApplicationEditorComponent_Conditional_8_Conditional_29_Template, 2, 1, "p", 24);
    i0.ɵɵconditionalCreate(30, ApplicationEditorComponent_Conditional_8_Conditional_30_Template, 2, 1, "p", 25);
    i0.ɵɵconditionalCreate(31, ApplicationEditorComponent_Conditional_8_Conditional_31_Template, 30, 15, "section", 26);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(32, "aside", 27)(33, "section", 28)(34, "span", 29);
    i0.ɵɵconditionalCreate(35, ApplicationEditorComponent_Conditional_8_Conditional_35_Template, 1, 0, ":svg:svg", 30)(36, ApplicationEditorComponent_Conditional_8_Conditional_36_Template, 1, 0, ":svg:svg", 31)(37, ApplicationEditorComponent_Conditional_8_Conditional_37_Template, 1, 0, ":svg:svg", 32);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(38, "div")(39, "h2", 33);
    i0.ɵɵtext(40);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(41, "p");
    i0.ɵɵtext(42, "Autosave runs after you stop editing.");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(43, "section", 34)(44, "header")(45, "span", 35);
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(46, "svg", 36);
    i0.ɵɵelementEnd();
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(47, "div")(48, "h2", 37);
    i0.ɵɵtext(49, "Application readiness");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(50, "p");
    i0.ɵɵtext(51);
    i0.ɵɵelementEnd()()();
    i0.ɵɵconditionalCreate(52, ApplicationEditorComponent_Conditional_8_Conditional_52_Template, 4, 1)(53, ApplicationEditorComponent_Conditional_8_Conditional_53_Template, 4, 0, "div", 38);
    i0.ɵɵelementStart(54, "button", 39);
    i0.ɵɵlistener("click", function ApplicationEditorComponent_Conditional_8_Template_button_click_54_listener() { i0.ɵɵrestoreView(_r4); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.openReview()); });
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(55, "svg", 9);
    i0.ɵɵtext(56, " Open review ");
    i0.ɵɵelementEnd()()()();
} if (rf & 2) {
    let tmp_15_0;
    const application_r22 = ctx;
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(ctx_r1.reference(application_r22));
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(application_r22.formSnapshot.name);
    i0.ɵɵadvance(2);
    i0.ɵɵclassProp("erp-status--draft", application_r22.status === "draft")("erp-status--warning", application_r22.status === "pending_approval" || application_r22.status === "submitted");
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r1.statusLabel(application_r22), " ");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1("Form v", application_r22.formVersion || application_r22.formSnapshot.version || 1);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate2("", ctx_r1.completedSections(), " of ", ctx_r1.sections().length, " sections ready");
    i0.ɵɵadvance(3);
    i0.ɵɵstyleProp("width", ctx_r1.progress(), "%");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1("", ctx_r1.progress(), "%");
    i0.ɵɵadvance(7);
    i0.ɵɵtextInterpolate1("", ctx_r1.sections().length, " sections");
    i0.ɵɵadvance(2);
    i0.ɵɵrepeater(ctx_r1.sections());
    i0.ɵɵadvance(3);
    i0.ɵɵconditional(ctx_r1.notice() ? 29 : -1);
    i0.ɵɵadvance();
    i0.ɵɵconditional(ctx_r1.saveError() ? 30 : -1);
    i0.ɵɵadvance();
    i0.ɵɵconditional((tmp_15_0 = ctx_r1.activeSection()) ? 31 : -1, tmp_15_0);
    i0.ɵɵadvance(3);
    i0.ɵɵclassProp("is-dirty", ctx_r1.dirty())("has-error", ctx_r1.saveError());
    i0.ɵɵadvance();
    i0.ɵɵconditional(ctx_r1.saveError() ? 35 : ctx_r1.dirty() || ctx_r1.saving() ? 36 : 37);
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(ctx_r1.saveState());
    i0.ɵɵadvance(11);
    i0.ɵɵtextInterpolate1("", ctx_r1.validationIssues().length, " blockers across all sections");
    i0.ɵɵadvance();
    i0.ɵɵconditional(ctx_r1.validationIssues().length ? 52 : 53);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("disabled", ctx_r1.saving());
} }
function ApplicationEditorComponent_Conditional_9_Template(rf, ctx) { if (rf & 1) {
    const _r23 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 7)(1, "button", 67);
    i0.ɵɵlistener("click", function ApplicationEditorComponent_Conditional_9_Template_button_click_1_listener() { i0.ɵɵrestoreView(_r23); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.resolveLeave(false)); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(2, "section", 68)(3, "header")(4, "span");
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(5, "svg", 69);
    i0.ɵɵelementEnd();
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(6, "div")(7, "small");
    i0.ɵɵtext(8, "Unsaved application");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(9, "h2", 70);
    i0.ɵɵtext(10, "Leave without saving?");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(11, "p");
    i0.ɵɵtext(12, "Your latest edits have not reached the server.");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(13, "button", 71);
    i0.ɵɵlistener("click", function ApplicationEditorComponent_Conditional_9_Template_button_click_13_listener() { i0.ɵɵrestoreView(_r23); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.resolveLeave(false)); });
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(14, "svg", 72);
    i0.ɵɵelementEnd()();
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(15, "div", 73)(16, "p");
    i0.ɵɵtext(17, "Stay on this page and wait for autosave, or discard the unsaved changes.");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(18, "footer")(19, "button", 14);
    i0.ɵɵlistener("click", function ApplicationEditorComponent_Conditional_9_Template_button_click_19_listener() { i0.ɵɵrestoreView(_r23); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.resolveLeave(false)); });
    i0.ɵɵtext(20, " Stay on page ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(21, "button", 74);
    i0.ɵɵlistener("click", function ApplicationEditorComponent_Conditional_9_Template_button_click_21_listener() { i0.ɵɵrestoreView(_r23); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.resolveLeave(true)); });
    i0.ɵɵtext(22, " Leave without saving ");
    i0.ɵɵelementEnd()()()();
} if (rf & 2) {
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("cdkTrapFocusAutoCapture", true);
} }
export class ApplicationEditorComponent {
    api = inject(ApiService);
    route = inject(ActivatedRoute);
    router = inject(Router);
    destroyRef = inject(DestroyRef);
    document = inject(DOCUMENT);
    autosaveTimer;
    activeSave = null;
    changeVersion = 0;
    leaveResolver;
    leaveReturnFocus;
    admissionId = signal('', ...(ngDevMode ? [{ debugName: "admissionId" }] : /* istanbul ignore next */ []));
    item = signal(null, ...(ngDevMode ? [{ debugName: "item" }] : /* istanbul ignore next */ []));
    activeIndex = signal(0, ...(ngDevMode ? [{ debugName: "activeIndex" }] : /* istanbul ignore next */ []));
    optionsState = signal({}, ...(ngDevMode ? [{ debugName: "optionsState" }] : /* istanbul ignore next */ []));
    loading = signal(true, ...(ngDevMode ? [{ debugName: "loading" }] : /* istanbul ignore next */ []));
    loadError = signal('', ...(ngDevMode ? [{ debugName: "loadError" }] : /* istanbul ignore next */ []));
    saveError = signal('', ...(ngDevMode ? [{ debugName: "saveError" }] : /* istanbul ignore next */ []));
    notice = signal('', ...(ngDevMode ? [{ debugName: "notice" }] : /* istanbul ignore next */ []));
    dirty = signal(false, ...(ngDevMode ? [{ debugName: "dirty" }] : /* istanbul ignore next */ []));
    saving = signal(false, ...(ngDevMode ? [{ debugName: "saving" }] : /* istanbul ignore next */ []));
    lastSavedAt = signal(null, ...(ngDevMode ? [{ debugName: "lastSavedAt" }] : /* istanbul ignore next */ []));
    leaveDialogOpen = signal(false, ...(ngDevMode ? [{ debugName: "leaveDialogOpen" }] : /* istanbul ignore next */ []));
    sections = computed(() => (this.item()?.formSnapshot.sections || []).filter((section) => section.isActive), ...(ngDevMode ? [{ debugName: "sections" }] : /* istanbul ignore next */ []));
    activeSection = computed(() => this.sections()[this.activeIndex()] || null, ...(ngDevMode ? [{ debugName: "activeSection" }] : /* istanbul ignore next */ []));
    validationIssues = computed(() => admissionValidationIssues(this.item()), ...(ngDevMode ? [{ debugName: "validationIssues" }] : /* istanbul ignore next */ []));
    activeIssues = computed(() => {
        const section = this.activeSection();
        return section ? admissionSectionIssues(this.item(), section.id) : [];
    }, ...(ngDevMode ? [{ debugName: "activeIssues" }] : /* istanbul ignore next */ []));
    completedSections = computed(() => this.sections().filter((section) => admissionSectionIssues(this.item(), section.id).length === 0).length, ...(ngDevMode ? [{ debugName: "completedSections" }] : /* istanbul ignore next */ []));
    progress = computed(() => {
        const sections = this.sections();
        return sections.length ? Math.round((this.completedSections() / sections.length) * 100) : 0;
    }, ...(ngDevMode ? [{ debugName: "progress" }] : /* istanbul ignore next */ []));
    editable = computed(() => {
        const status = this.item()?.status;
        return status === 'draft' || status === 'pending_approval' || status === 'approved';
    }, ...(ngDevMode ? [{ debugName: "editable" }] : /* istanbul ignore next */ []));
    saveState = computed(() => {
        if (this.saving())
            return 'Saving changes…';
        if (this.dirty())
            return 'Unsaved changes';
        if (this.saveError())
            return 'Save failed';
        if (this.lastSavedAt())
            return 'All changes saved';
        return 'Saved application';
    }, ...(ngDevMode ? [{ debugName: "saveState" }] : /* istanbul ignore next */ []));
    constructor() {
        this.route.paramMap.pipe(takeUntilDestroyed(this.destroyRef)).subscribe((params) => {
            const id = params.get('admissionId') || '';
            if (!id || id === this.admissionId())
                return;
            this.admissionId.set(id);
            this.load();
        });
        effect((onCleanup) => {
            if (!this.leaveDialogOpen())
                return;
            const previousOverflow = this.document.body.style.overflow;
            this.document.body.style.overflow = 'hidden';
            onCleanup(() => {
                this.document.body.style.overflow = previousOverflow;
            });
        });
        this.destroyRef.onDestroy(() => {
            if (this.autosaveTimer)
                window.clearTimeout(this.autosaveTimer);
            this.leaveResolver?.(false);
        });
    }
    load() {
        if (!this.admissionId())
            return;
        this.loading.set(true);
        this.loadError.set('');
        this.api
            .admission(this.admissionId())
            .pipe(takeUntilDestroyed(this.destroyRef))
            .subscribe({
            next: ({ item }) => this.acceptLoaded(item),
            error: (error) => {
                this.loadError.set(error.error?.message || 'This application could not be loaded.');
                this.loading.set(false);
            },
        });
    }
    reference(item) {
        return admissionReference(item);
    }
    statusLabel(item) {
        return admissionStatusLabel(item);
    }
    sectionIssues(section) {
        return admissionSectionIssues(this.item(), section.id);
    }
    sectionState(section, index) {
        if (index === this.activeIndex())
            return 'current';
        return this.sectionIssues(section).length ? 'attention' : 'complete';
    }
    visibleSubsections() {
        const responses = this.item()?.responses || {};
        return (this.activeSection()?.subsections || []).filter((subsection) => subsection.isActive &&
            (this.matchesVisibility(subsection.visibilityCondition, responses) ||
                (this.foreignSelected(responses) &&
                    subsection.fields.some((field) => field.isActive && field.dataSource?.masterTypeSlug === 'country'))));
    }
    visible(field, entry) {
        const values = entry || this.item()?.responses || {};
        return (field.isActive &&
            (this.matchesVisibility(field.visibilityCondition, values) ||
                (field.dataSource?.masterTypeSlug === 'country' && this.foreignSelected(values))));
    }
    value(field, entry) {
        return (entry || this.item()?.responses || {})[field.id];
    }
    setValue(field, value, entry, entryIndex) {
        if (!this.editable())
            return;
        const item = this.item();
        if (!item)
            return;
        const normalizedValue = field.type === 'dropdown' && Array.isArray(value) ? (value[0] ?? '') : value;
        if (entry)
            entry[field.id] = normalizedValue;
        else
            item.responses[field.id] = normalizedValue;
        this.item.set(structuredClone(item));
        this.markDirty();
        if (field.dataSource?.masterTypeSlug === 'course') {
            this.applyCourseAcademicYear(String(normalizedValue || ''));
        }
        if (field.dataSource?.masterTypeSlug === 'fee-type') {
            this.applyFeeTypeChoice(field, String(normalizedValue || ''), false);
        }
        this.reloadDependents(field.id, entry, entryIndex);
    }
    entries(subsection) {
        return this.item()?.repeatableResponses[subsection.id] || [];
    }
    addEntry(subsection) {
        if (!this.editable())
            return;
        const item = this.item();
        if (!item)
            return;
        const entries = (item.repeatableResponses[subsection.id] ||= []);
        if (subsection.maxEntries && entries.length >= subsection.maxEntries)
            return;
        const entry = {};
        for (const field of subsection.fields) {
            if (field.defaultValue != null)
                entry[field.id] = field.defaultValue;
        }
        entries.push(entry);
        this.item.set(structuredClone(item));
        this.markDirty();
        this.loadSubsectionOptions(subsection, entries.length - 1, entry);
    }
    removeEntry(subsection, index) {
        if (!this.editable())
            return;
        const item = this.item();
        if (!item)
            return;
        item.repeatableResponses[subsection.id]?.splice(index, 1);
        this.item.set(structuredClone(item));
        this.markDirty();
    }
    fieldOptions(field, index) {
        return this.optionsState()[this.optionKey(field, index)] || [];
    }
    searchOptions(field, query, entry, index) {
        this.loadOptions(field, entry, index, query);
    }
    upload(field, file, entry, index) {
        const item = this.item();
        if (!item || !this.editable())
            return;
        const maxSizeMb = field.uploadConfig?.maxSizeMb || 5;
        if (file.size > maxSizeMb * 1024 * 1024) {
            this.saveError.set(`${field.name} must be ${maxSizeMb} MB or smaller.`);
            return;
        }
        if (!this.allowedUploadMimeTypes(field).includes(file.type)) {
            this.saveError.set(`The selected file type is not allowed for ${field.name}.`);
            return;
        }
        this.saveError.set('');
        this.api
            .uploadAdminAdmission(item._id, field.id, file)
            .pipe(takeUntilDestroyed(this.destroyRef))
            .subscribe({
            next: ({ file: stored }) => this.setValue(field, stored, entry, index),
            error: (error) => this.saveError.set(error.error?.message || `${field.name} could not be uploaded.`),
        });
    }
    goToSection(index) {
        const sections = this.sections();
        if (index < 0 || index >= sections.length || index === this.activeIndex())
            return;
        this.activeIndex.set(index);
        const item = this.item();
        if (item) {
            item.currentSectionId = sections[index].id;
            this.item.set(structuredClone(item));
            this.markDirty();
        }
        void this.router.navigate([], {
            relativeTo: this.route,
            queryParams: { section: sections[index].id },
            queryParamsHandling: 'merge',
            replaceUrl: true,
        });
        this.loadSectionOptions();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    focusIssue(issue) {
        const index = this.sections().findIndex((section) => section.id === issue.sectionId);
        if (index >= 0)
            this.goToSection(index);
        setTimeout(() => {
            const field = issue.fieldId
                ? this.document.getElementById(`field-${issue.fieldId}-${issue.entryIndex === undefined
                    ? issue.subsectionId
                    : `${issue.subsectionId}-${issue.entryIndex}`}`)
                : null;
            field?.focus();
        });
    }
    async saveManually() {
        await this.persist(true);
    }
    async saveAndContinue() {
        const saved = await this.persist(true);
        if (!saved)
            return;
        if (this.activeIndex() < this.sections().length - 1) {
            this.goToSection(this.activeIndex() + 1);
            return;
        }
        await this.openReview();
    }
    async openReview() {
        const saved = await this.persist(false);
        if (!saved)
            return;
        await this.router.navigate(['/admin/admissions/applications', this.admissionId(), 'review']);
    }
    canDeactivate() {
        if (!this.dirty() && !this.saving())
            return true;
        if (this.leaveDialogOpen())
            return false;
        this.leaveReturnFocus =
            this.document.activeElement instanceof HTMLElement ? this.document.activeElement : undefined;
        this.leaveDialogOpen.set(true);
        return new Promise((resolve) => {
            this.leaveResolver = resolve;
        });
    }
    resolveLeave(allow) {
        if (allow) {
            if (this.autosaveTimer)
                window.clearTimeout(this.autosaveTimer);
            this.dirty.set(false);
        }
        this.leaveDialogOpen.set(false);
        const resolver = this.leaveResolver;
        this.leaveResolver = undefined;
        resolver?.(allow);
        if (!allow)
            setTimeout(() => this.leaveReturnFocus?.focus());
    }
    beforeUnload(event) {
        if (!this.dirty() && !this.saving())
            return;
        event.preventDefault();
        event.returnValue = '';
    }
    onEscape() {
        if (this.leaveDialogOpen())
            this.resolveLeave(false);
    }
    acceptLoaded(item) {
        this.item.set(item);
        const requestedSection = this.route.snapshot.queryParamMap.get('section');
        const sections = item.formSnapshot.sections.filter((section) => section.isActive);
        const index = sections.findIndex((section) => section.id === (requestedSection || item.currentSectionId));
        this.activeIndex.set(Math.max(0, index));
        this.loading.set(false);
        this.dirty.set(false);
        this.saving.set(false);
        this.loadSectionOptions();
    }
    markDirty() {
        this.changeVersion += 1;
        this.dirty.set(true);
        this.notice.set('');
        this.saveError.set('');
        if (this.autosaveTimer)
            window.clearTimeout(this.autosaveTimer);
        this.autosaveTimer = window.setTimeout(() => void this.persist(false), 1600);
    }
    persist(showNotice) {
        if (!this.dirty())
            return Promise.resolve(true);
        if (this.activeSave) {
            return this.activeSave.then((saved) => {
                if (!saved)
                    return false;
                return this.dirty() ? this.persist(showNotice) : true;
            });
        }
        const item = this.item();
        if (!item || !this.editable())
            return Promise.resolve(false);
        if (this.autosaveTimer)
            window.clearTimeout(this.autosaveTimer);
        const payload = structuredClone(item);
        const versionAtStart = this.changeVersion;
        this.saving.set(true);
        this.saveError.set('');
        this.activeSave = firstValueFrom(this.api.updateAdmission(payload))
            .then(({ item: saved }) => {
            const live = this.item();
            if (this.changeVersion === versionAtStart) {
                this.item.set(saved);
                this.dirty.set(false);
            }
            else if (live) {
                this.item.set({
                    ...saved,
                    currentSectionId: live.currentSectionId,
                    responses: live.responses,
                    repeatableResponses: live.repeatableResponses,
                });
                this.autosaveTimer = window.setTimeout(() => void this.persist(false), 500);
            }
            this.lastSavedAt.set(new Date());
            if (showNotice)
                this.notice.set('Application changes saved.');
            return true;
        })
            .catch((error) => {
            this.saveError.set(error.error?.message || 'Changes could not be saved. Try again.');
            return false;
        })
            .finally(() => {
            this.saving.set(false);
            this.activeSave = null;
        });
        return this.activeSave;
    }
    loadSectionOptions() {
        for (const subsection of this.activeSection()?.subsections || []) {
            if (subsection.isRepeatable) {
                this.entries(subsection).forEach((entry, index) => this.loadSubsectionOptions(subsection, index, entry));
            }
            else {
                this.loadSubsectionOptions(subsection);
            }
        }
    }
    loadSubsectionOptions(subsection, index, entry) {
        for (const field of subsection.fields) {
            if (field.dataSource)
                this.loadOptions(field, entry, index);
        }
    }
    loadOptions(field, entry, index, search = '') {
        if (!field.dataSource)
            return;
        const values = entry || this.item()?.responses || {};
        const parent = field.dataSource.parentFieldId
            ? values[field.dataSource.parentFieldId]
            : undefined;
        if (field.dataSource.parentFieldId && !parent) {
            this.optionsState.update((state) => ({ ...state, [this.optionKey(field, index)]: [] }));
            return;
        }
        this.api
            .publicOptions(field.dataSource.masterTypeSlug, parent ? String(parent) : undefined, search)
            .pipe(takeUntilDestroyed(this.destroyRef))
            .subscribe(({ items }) => {
            this.optionsState.update((state) => ({
                ...state,
                [this.optionKey(field, index)]: items,
            }));
            if (field.dataSource?.masterTypeSlug === 'course') {
                const selected = values[field.id];
                if (selected)
                    this.applyCourseAcademicYear(String(selected), false);
            }
            if (field.dataSource?.masterTypeSlug === 'fee-type') {
                const selected = values[field.id];
                if (selected)
                    this.applyFeeTypeChoice(field, String(selected), false);
            }
        });
    }
    reloadDependents(parentFieldId, entry, index) {
        for (const subsection of this.activeSection()?.subsections || []) {
            for (const field of subsection.fields) {
                if (field.dataSource?.parentFieldId !== parentFieldId)
                    continue;
                const values = entry || this.item()?.responses || {};
                values[field.id] = '';
                this.loadOptions(field, entry, index);
            }
        }
        this.item.update((item) => (item ? structuredClone(item) : item));
    }
    optionKey(field, index) {
        return `${field.id}:${index ?? 'single'}`;
    }
    applyCourseAcademicYear(courseId, useConfiguredDefault = true) {
        const item = this.item();
        if (!item)
            return;
        const courseField = item.formSnapshot.sections
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
        const yearField = item.formSnapshot.sections
            .flatMap((section) => section.subsections)
            .flatMap((subsection) => subsection.fields)
            .find((candidate) => [
            'current academic year',
            'current year',
            'admission year of study',
            'year of study',
        ].includes(candidate.name.trim().toLocaleLowerCase()));
        if (!yearField)
            return;
        yearField.type = 'dropdown';
        yearField.options = Array.from({ length: duration }, (_, index) => ({
            label: `Year ${index + 1}`,
            value: String(index + 1),
        }));
        const savedYear = Number(item.responses[yearField.id] || item.currentAcademicYear);
        const selectedYear = !useConfiguredDefault &&
            Number.isInteger(savedYear) &&
            savedYear >= 1 &&
            savedYear <= duration
            ? savedYear
            : defaultYear;
        item.responses[yearField.id] = String(selectedYear);
        item.currentAcademicYear = selectedYear;
        this.item.set(structuredClone(item));
    }
    applyFeeTypeChoice(field, feeTypeId, markDirty = true) {
        const feeType = Object.entries(this.optionsState())
            .filter(([key]) => key.startsWith(`${field.id}:`))
            .flatMap(([, options]) => options)
            .find((option) => option._id === feeTypeId);
        const item = this.item();
        if (!feeType || !item)
            return;
        const configured = feeType.metadata?.['periodType'];
        const mode = configured === 'year' || configured === 'semester'
            ? configured
            : /semester|sem/i.test(feeType.name)
                ? 'semester'
                : /year|annual/i.test(feeType.name)
                    ? 'year'
                    : null;
        if (!mode)
            return;
        item.feeFrequencyChoice = mode;
        item.feeFrequency = mode;
        item.feeTypeId = feeType._id;
        item.feeTypeName = feeType.name;
        this.item.set(structuredClone(item));
        if (markDirty)
            this.markDirty();
    }
    matchesVisibility(condition, values) {
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
    foreignSelected(values) {
        const fields = this.item()
            ?.formSnapshot.sections.flatMap((section) => section.subsections)
            .flatMap((subsection) => subsection.fields);
        return (fields || [])
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
    allowedUploadMimeTypes(field) {
        const categories = field.uploadConfig?.allowedTypes ||
            (field.type === 'file' ? ['image', 'pdf', 'word'] : ['image']);
        return categories.flatMap((type) => type === 'image'
            ? ['image/jpeg', 'image/png', 'image/webp']
            : type === 'pdf'
                ? ['application/pdf']
                : [
                    'application/msword',
                    'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
                ]);
    }
    hasAdmissionValue = hasAdmissionValue;
    static ɵfac = function ApplicationEditorComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || ApplicationEditorComponent)(); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ApplicationEditorComponent, selectors: [["erp-application-editor"]], hostBindings: function ApplicationEditorComponent_HostBindings(rf, ctx) { if (rf & 1) {
            i0.ɵɵlistener("beforeunload", function ApplicationEditorComponent_beforeunload_HostBindingHandler($event) { return ctx.beforeUnload($event); }, i0.ɵɵresolveWindow)("keydown.escape", function ApplicationEditorComponent_keydown_escape_HostBindingHandler() { return ctx.onEscape(); }, i0.ɵɵresolveDocument);
        } }, decls: 10, vars: 7, consts: [["eyebrow", "Admissions / Application editor", "description", "Update the saved application one section at a time. Changes autosave while you work.", "variant", "compact", 3, "title"], ["page-actions", "", 1, "application-editor__page-actions"], [1, "erp-button", "erp-button--secondary", 3, "routerLink"], ["lucideArrowLeft", "", "size", "16", "aria-hidden", "true"], ["type", "button", 1, "erp-button", "erp-button--primary", 3, "disabled"], ["aria-label", "Loading application editor", 1, "erp-card", "application-editor__loading"], ["role", "alert", 1, "erp-card", "erp-empty-panel"], [1, "modal-backdrop", "application-editor__dialog-layer"], ["type", "button", 1, "erp-button", "erp-button--primary", 3, "click", "disabled"], ["lucideClipboardCheck", "", "size", "16", "aria-hidden", "true"], [1, "erp-skeleton", "application-editor__skeleton-title"], [1, "erp-skeleton"], [1, "erp-empty-panel__icon"], ["lucideCircleAlert", "", "size", "21", "aria-hidden", "true"], ["type", "button", 1, "erp-button", "erp-button--secondary", 3, "click"], ["lucideRefreshCw", "", "size", "15", "aria-hidden", "true"], ["aria-label", "Application context", 1, "erp-card", "application-editor__context"], [1, "application-editor__reference"], [1, "application-editor__context-meta"], [1, "erp-status"], ["aria-label", "Application completion", 1, "application-editor__progress"], [1, "application-editor__workspace"], ["aria-label", "Application sections", 1, "erp-card", "application-editor__outline"], [1, "application-editor__main"], ["role", "status", 1, "erp-notice", "erp-notice--success"], ["role", "alert", 1, "erp-notice", "erp-notice--error"], [1, "erp-card", "application-editor__section"], [1, "application-editor__aside"], ["aria-labelledby", "save-state-title", 1, "erp-card", "application-editor__save-card"], [1, "application-editor__save-icon"], ["lucideCircleAlert", "", "size", "18", "aria-hidden", "true"], ["lucideClock3", "", "size", "18", "aria-hidden", "true"], ["lucideCheck", "", "size", "18", "aria-hidden", "true"], ["id", "save-state-title"], ["aria-labelledby", "validation-summary-title", 1, "erp-card", "application-editor__validation"], [1, "application-editor__validation-icon"], ["lucideShieldCheck", "", "size", "18", "aria-hidden", "true"], ["id", "validation-summary-title"], [1, "application-editor__ready"], ["type", "button", 1, "erp-button", "erp-button--primary", "application-editor__review-action", 3, "click", "disabled"], ["type", "button", 3, "click"], [1, "application-editor__step-number"], ["lucideCheck", "", "size", "14", "aria-hidden", "true"], [1, "application-editor__section-header"], [1, "application-editor__section-icon"], ["lucideFileText", "", "size", "20", "aria-hidden", "true"], [3, "id"], [1, "application-editor__section-count"], [1, "application-editor__section-body"], [1, "application-editor__subsection"], [1, "application-editor__empty-section"], [1, "application-editor__actions"], ["type", "button", 1, "erp-button", "erp-button--secondary", 3, "click", "disabled"], ["lucideArrowLeft", "", "size", "15", "aria-hidden", "true"], ["lucideSave", "", "size", "15", "aria-hidden", "true"], ["lucideArrowRight", "", "size", "15", "aria-hidden", "true"], [1, "application-editor__field-grid"], [1, "application-editor__repeat-list"], [1, "application-editor__repeat-entry"], [1, "application-editor__empty-repeat"], ["type", "button", 1, "erp-button", "erp-button--secondary", "application-editor__add-entry", 3, "click", "disabled"], ["type", "button", 1, "application-editor__remove", 3, "click"], ["lucideTrash2", "", "size", "15", "aria-hidden", "true"], [3, "field", "modelValue", "options", "entryKey"], [3, "modelChanged", "optionSearch", "fileSelected", "uploadRemoved", "field", "modelValue", "options", "entryKey"], [1, "application-editor__more-issues"], ["lucideCircleAlert", "", "size", "15", "aria-hidden", "true"], ["type", "button", "tabindex", "-1", "aria-label", "Stay on application editor", 1, "backdrop-close", 3, "click"], ["role", "dialog", "aria-modal", "true", "aria-labelledby", "leave-dialog-title", "cdkTrapFocus", "", 1, "modal", "application-editor__leave-dialog", 3, "cdkTrapFocusAutoCapture"], ["lucideCircleAlert", "", "size", "20", "aria-hidden", "true"], ["id", "leave-dialog-title"], ["type", "button", "aria-label", "Stay on page", 3, "click"], ["lucideX", "", "size", "17", "aria-hidden", "true"], [1, "application-editor__leave-body"], ["type", "button", 1, "erp-button", "erp-button--danger", 3, "click"]], template: function ApplicationEditorComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "erp-admin-page", 0)(1, "div", 1)(2, "a", 2);
            i0.ɵɵnamespaceSVG();
            i0.ɵɵelement(3, "svg", 3);
            i0.ɵɵtext(4, " Application record ");
            i0.ɵɵelementEnd();
            i0.ɵɵconditionalCreate(5, ApplicationEditorComponent_Conditional_5_Template, 3, 1, "button", 4);
            i0.ɵɵelementEnd();
            i0.ɵɵconditionalCreate(6, ApplicationEditorComponent_Conditional_6_Template, 6, 0, "section", 5)(7, ApplicationEditorComponent_Conditional_7_Template, 10, 1, "section", 6)(8, ApplicationEditorComponent_Conditional_8_Template, 57, 26);
            i0.ɵɵelementEnd();
            i0.ɵɵconditionalCreate(9, ApplicationEditorComponent_Conditional_9_Template, 23, 1, "div", 7);
        } if (rf & 2) {
            let tmp_0_0;
            let tmp_3_0;
            i0.ɵɵproperty("title", ((tmp_0_0 = ctx.item()) == null ? null : tmp_0_0.studentName) || (ctx.loading() ? "Edit application" : "Application unavailable"));
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("routerLink", i0.ɵɵpureFunction1(5, _c0, ctx.admissionId()));
            i0.ɵɵadvance(3);
            i0.ɵɵconditional(ctx.item() ? 5 : -1);
            i0.ɵɵadvance();
            i0.ɵɵconditional(ctx.loading() ? 6 : ctx.loadError() ? 7 : (tmp_3_0 = ctx.item()) ? 8 : -1, tmp_3_0);
            i0.ɵɵadvance(3);
            i0.ɵɵconditional(ctx.leaveDialogOpen() ? 9 : -1);
        } }, dependencies: [AdminPageComponent,
            CdkTrapFocus,
            DynamicFieldRendererComponent,
            LucideArrowLeft,
            LucideArrowRight,
            LucideCheck,
            LucideCircleAlert,
            LucideClipboardCheck,
            LucideClock3,
            LucideFileText,
            LucideRefreshCw,
            LucideSave,
            LucideShieldCheck,
            LucideTrash2,
            LucideX,
            RouterLink], styles: ["\n[_nghost-%COMP%] {\n  display: block;\n}\n\n.application-editor__page-actions[_ngcontent-%COMP%], \n.application-editor__context[_ngcontent-%COMP%], \n.application-editor__context-meta[_ngcontent-%COMP%], \n.application-editor__progress[_ngcontent-%COMP%], \n.application-editor__section-header[_ngcontent-%COMP%], \n.application-editor__subsection[_ngcontent-%COMP%]    > header[_ngcontent-%COMP%], \n.application-editor__repeat-entry[_ngcontent-%COMP%]    > header[_ngcontent-%COMP%], \n.application-editor__actions[_ngcontent-%COMP%], \n.application-editor__actions[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%], \n.application-editor__save-card[_ngcontent-%COMP%], \n.application-editor__validation[_ngcontent-%COMP%]    > header[_ngcontent-%COMP%], \n.application-editor__leave-dialog[_ngcontent-%COMP%]    > header[_ngcontent-%COMP%], \n.application-editor__leave-dialog[_ngcontent-%COMP%]    > footer[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n\n.application-editor__page-actions[_ngcontent-%COMP%] {\n  flex-wrap: wrap;\n  justify-content: flex-end;\n  gap: var(--erp-space-2);\n}\n\n.application-editor__loading[_ngcontent-%COMP%] {\n  display: grid;\n  min-height: var(--erp-state-panel-min-height);\n  gap: var(--erp-space-4);\n  padding: var(--erp-space-6);\n}\n\n.application-editor__skeleton-title[_ngcontent-%COMP%] {\n  width: min(28rem, 70%);\n  height: var(--erp-control-height);\n}\n\n.application-editor__loading[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 14rem minmax(0, 1fr) 18rem;\n  gap: var(--erp-space-4);\n}\n\n.application-editor__loading[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  min-height: 22rem;\n}\n\n.application-editor__context[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: minmax(12rem, 1fr) auto minmax(10rem, 14rem);\n  gap: var(--erp-space-4);\n  margin-bottom: var(--erp-space-4);\n  padding: var(--erp-space-3) var(--erp-space-4);\n}\n\n.application-editor__reference[_ngcontent-%COMP%] {\n  min-width: 0;\n}\n\n.application-editor__reference[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], \n.application-editor__reference[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  display: block;\n}\n\n.application-editor__reference[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: var(--erp-text-muted);\n  font-family: var(--erp-font-mono);\n  font-size: var(--erp-font-caption);\n}\n\n.application-editor__reference[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  overflow: hidden;\n  color: var(--erp-text-heading);\n  font-size: var(--erp-font-label);\n  font-weight: var(--erp-weight-semibold);\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n\n.application-editor__context-meta[_ngcontent-%COMP%] {\n  flex-wrap: wrap;\n  justify-content: flex-end;\n  gap: var(--erp-space-3);\n  color: var(--erp-text-muted);\n  font-size: var(--erp-font-caption);\n}\n\n.application-editor__context-meta[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%]:not(.erp-status)    + span[_ngcontent-%COMP%] {\n  padding-left: var(--erp-space-3);\n  border-left: 1px solid var(--erp-border-subtle);\n}\n\n.application-editor__progress[_ngcontent-%COMP%] {\n  gap: var(--erp-space-2);\n}\n\n.application-editor__progress[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  overflow: hidden;\n  width: 100%;\n  height: 0.375rem;\n  background: var(--erp-surface-detail);\n  border-radius: var(--erp-radius-pill);\n}\n\n.application-editor__progress[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  display: block;\n  height: 100%;\n  background: var(--erp-blue-600);\n  border-radius: inherit;\n  transition: width 180ms ease;\n}\n\n.application-editor__progress[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  min-width: 2.5rem;\n  color: var(--erp-text-heading);\n  font-size: var(--erp-font-caption);\n  text-align: right;\n}\n\n.application-editor__workspace[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: minmax(12rem, 14rem) minmax(0, 1fr) minmax(16rem, 18rem);\n  align-items: start;\n  gap: var(--erp-space-4);\n}\n\n.application-editor__outline[_ngcontent-%COMP%], \n.application-editor__aside[_ngcontent-%COMP%] {\n  position: sticky;\n  top: var(--erp-admin-sticky-top);\n}\n\n.application-editor__outline[_ngcontent-%COMP%] {\n  overflow: hidden;\n}\n\n.application-editor__outline[_ngcontent-%COMP%]    > header[_ngcontent-%COMP%] {\n  display: grid;\n  gap: var(--erp-space-1);\n  padding: var(--erp-space-4);\n  border-bottom: 1px solid var(--erp-border-subtle);\n}\n\n.application-editor__outline[_ngcontent-%COMP%]    > header[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: var(--erp-text-muted);\n  font-size: var(--erp-font-caption);\n}\n\n.application-editor__outline[_ngcontent-%COMP%]    > header[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: var(--erp-text-heading);\n  font-size: var(--erp-font-panel-title);\n}\n\n.application-editor__outline[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%], \n.application-editor__validation[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n  list-style: none;\n}\n\n.application-editor__outline[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 1px;\n  padding: var(--erp-space-2);\n}\n\n.application-editor__outline[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  display: grid;\n  width: 100%;\n  grid-template-columns: auto minmax(0, 1fr);\n  align-items: start;\n  gap: var(--erp-space-2);\n  padding: var(--erp-space-2) var(--erp-space-3);\n  color: var(--erp-text-body);\n  text-align: left;\n  background: transparent;\n  border: 1px solid transparent;\n  border-radius: var(--erp-radius-control);\n}\n\n.application-editor__outline[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover, \n.application-editor__outline[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:focus-visible {\n  background: var(--erp-surface-detail-soft);\n}\n\n.application-editor__outline[_ngcontent-%COMP%]   button.is-current[_ngcontent-%COMP%] {\n  color: var(--erp-blue-700);\n  background: var(--erp-blue-50);\n  border-color: var(--erp-border-default);\n}\n\n.application-editor__step-number[_ngcontent-%COMP%] {\n  display: inline-grid;\n  width: 1.5rem;\n  height: 1.5rem;\n  place-items: center;\n  color: var(--erp-text-muted);\n  font-size: var(--erp-font-caption);\n  font-weight: var(--erp-weight-semibold);\n  background: var(--erp-surface-detail);\n  border-radius: var(--erp-radius-pill);\n}\n\n.application-editor__outline[_ngcontent-%COMP%]   button.is-current[_ngcontent-%COMP%]   .application-editor__step-number[_ngcontent-%COMP%] {\n  color: var(--erp-surface-raised);\n  background: var(--erp-blue-600);\n}\n\n.application-editor__outline[_ngcontent-%COMP%]   button.is-complete[_ngcontent-%COMP%]   .application-editor__step-number[_ngcontent-%COMP%] {\n  color: var(--erp-success-text);\n  background: var(--erp-success-bg);\n}\n\n.application-editor__outline\n[_ngcontent-%COMP%]   button.has-attention[_ngcontent-%COMP%]:not(.is-current)\n   .application-editor__step-number[_ngcontent-%COMP%] {\n  color: var(--erp-warning-text);\n  background: var(--erp-warning-bg);\n}\n\n.application-editor__outline[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%]:last-child {\n  min-width: 0;\n}\n\n.application-editor__outline[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%], \n.application-editor__outline[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  display: block;\n}\n\n.application-editor__outline[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  overflow: hidden;\n  font-size: var(--erp-font-label);\n  font-weight: var(--erp-weight-semibold);\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n\n.application-editor__outline[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  margin-top: 0.125rem;\n  color: var(--erp-text-muted);\n  font-size: var(--erp-font-size-xs);\n}\n\n.application-editor__main[_ngcontent-%COMP%] {\n  display: grid;\n  min-width: 0;\n  gap: var(--erp-space-3);\n}\n\n.application-editor__section[_ngcontent-%COMP%] {\n  overflow: visible;\n}\n\n.application-editor__section-header[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: auto minmax(0, 1fr) auto;\n  align-items: start;\n  gap: var(--erp-space-3);\n  padding: var(--erp-space-5);\n  border-bottom: 1px solid var(--erp-border-subtle);\n}\n\n.application-editor__section-icon[_ngcontent-%COMP%], \n.application-editor__save-icon[_ngcontent-%COMP%], \n.application-editor__validation-icon[_ngcontent-%COMP%], \n.application-editor__leave-dialog[_ngcontent-%COMP%]    > header[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  display: inline-grid;\n  flex: 0 0 auto;\n  place-items: center;\n  color: var(--erp-blue-700);\n  background: var(--erp-blue-50);\n  border-radius: var(--erp-radius-control);\n}\n\n.application-editor__section-icon[_ngcontent-%COMP%] {\n  width: var(--erp-control-height-large);\n  height: var(--erp-control-height-large);\n}\n\n.application-editor__section-header[_ngcontent-%COMP%]   small[_ngcontent-%COMP%], \n.application-editor__section-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], \n.application-editor__section-header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], \n.application-editor__subsection[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], \n.application-editor__subsection[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], \n.application-editor__save-card[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], \n.application-editor__save-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], \n.application-editor__validation[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], \n.application-editor__validation[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], \n.application-editor__leave-dialog[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], \n.application-editor__leave-dialog[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n}\n\n.application-editor__section-header[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  display: block;\n  margin-bottom: var(--erp-space-1);\n  color: var(--erp-text-muted);\n  font-size: var(--erp-font-caption);\n}\n\n.application-editor__section-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  color: var(--erp-text-heading);\n  font-size: var(--erp-font-section-title);\n  line-height: var(--erp-line-section-title);\n}\n\n.application-editor__section-header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], \n.application-editor__subsection[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], \n.application-editor__save-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], \n.application-editor__validation[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: var(--erp-text-muted);\n  font-size: var(--erp-font-caption);\n  line-height: var(--erp-line-body);\n}\n\n.application-editor__section-count[_ngcontent-%COMP%] {\n  padding: 0.25rem 0.55rem;\n  color: var(--erp-success-text);\n  font-size: var(--erp-font-caption);\n  font-weight: var(--erp-weight-semibold);\n  white-space: nowrap;\n  background: var(--erp-success-bg);\n  border-radius: var(--erp-radius-pill);\n}\n\n.application-editor__section-count.has-attention[_ngcontent-%COMP%] {\n  color: var(--erp-warning-text);\n  background: var(--erp-warning-bg);\n}\n\n.application-editor__section-body[_ngcontent-%COMP%] {\n  padding: 0 var(--erp-space-5);\n}\n\n.application-editor__subsection[_ngcontent-%COMP%] {\n  padding: var(--erp-space-5) 0;\n}\n\n.application-editor__subsection[_ngcontent-%COMP%]    + .application-editor__subsection[_ngcontent-%COMP%] {\n  border-top: 1px solid var(--erp-border-subtle);\n}\n\n.application-editor__subsection[_ngcontent-%COMP%]    > header[_ngcontent-%COMP%] {\n  justify-content: space-between;\n  gap: var(--erp-space-3);\n  margin-bottom: var(--erp-space-4);\n}\n\n.application-editor__subsection[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  color: var(--erp-text-heading);\n  font-size: var(--erp-font-panel-title);\n  font-weight: var(--erp-weight-semibold);\n}\n\n.application-editor__subsection[_ngcontent-%COMP%]    > header[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  color: var(--erp-text-muted);\n  font-size: var(--erp-font-caption);\n}\n\n.application-editor__field-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n  gap: var(--erp-space-4);\n}\n\n.application-editor__repeat-list[_ngcontent-%COMP%] {\n  display: grid;\n  gap: var(--erp-space-3);\n}\n\n.application-editor__repeat-entry[_ngcontent-%COMP%] {\n  overflow: hidden;\n  background: var(--erp-surface-detail-soft);\n  border: 1px solid var(--erp-border-subtle);\n  border-radius: var(--erp-radius-control);\n}\n\n.application-editor__repeat-entry[_ngcontent-%COMP%]    > header[_ngcontent-%COMP%] {\n  justify-content: space-between;\n  gap: var(--erp-space-3);\n  padding: var(--erp-space-3) var(--erp-space-4);\n  background: var(--erp-surface-page-panel);\n  border-bottom: 1px solid var(--erp-border-subtle);\n}\n\n.application-editor__repeat-entry[_ngcontent-%COMP%]    > header[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: var(--erp-text-heading);\n  font-size: var(--erp-font-label);\n}\n\n.application-editor__repeat-entry[_ngcontent-%COMP%]    > .application-editor__field-grid[_ngcontent-%COMP%] {\n  padding: var(--erp-space-4);\n}\n\n.application-editor__remove[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: var(--erp-space-1);\n  min-height: var(--erp-control-height-compact);\n  padding: 0 var(--erp-space-2);\n  color: var(--erp-danger-text);\n  font-size: var(--erp-font-caption);\n  font-weight: var(--erp-weight-semibold);\n  background: transparent;\n  border: 1px solid transparent;\n  border-radius: var(--erp-radius-control);\n}\n\n.application-editor__remove[_ngcontent-%COMP%]:hover, \n.application-editor__remove[_ngcontent-%COMP%]:focus-visible {\n  background: var(--erp-danger-bg);\n  border-color: var(--erp-danger);\n}\n\n.application-editor__empty-repeat[_ngcontent-%COMP%], \n.application-editor__empty-section[_ngcontent-%COMP%] {\n  padding: var(--erp-space-5);\n  color: var(--erp-text-muted);\n  text-align: center;\n  background: var(--erp-surface-detail-soft);\n  border: 1px dashed var(--erp-border-default);\n  border-radius: var(--erp-radius-control);\n}\n\n.application-editor__empty-repeat[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n}\n\n.application-editor__empty-section[_ngcontent-%COMP%] {\n  margin: var(--erp-space-5) 0;\n}\n\n.application-editor__empty-section[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%], \n.application-editor__empty-section[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  display: block;\n  margin: 0;\n}\n\n.application-editor__empty-section[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: var(--erp-text-heading);\n}\n\n.application-editor__add-entry[_ngcontent-%COMP%] {\n  margin-top: var(--erp-space-3);\n}\n\n.application-editor__actions[_ngcontent-%COMP%] {\n  position: sticky;\n  z-index: 3;\n  bottom: 0;\n  justify-content: space-between;\n  gap: var(--erp-space-3);\n  padding: var(--erp-space-3) var(--erp-space-5);\n  background: var(--erp-surface-raised);\n  border-top: 1px solid var(--erp-border-subtle);\n  border-radius: 0 0 var(--erp-radius-control) var(--erp-radius-control);\n  box-shadow: var(--erp-shadow-card);\n}\n\n.application-editor__actions[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  flex-wrap: wrap;\n  justify-content: flex-end;\n  gap: var(--erp-space-2);\n}\n\n.application-editor__actions[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  margin-right: var(--erp-space-1);\n  color: var(--erp-text-muted);\n  font-size: var(--erp-font-caption);\n}\n\n.application-editor__aside[_ngcontent-%COMP%] {\n  display: grid;\n  gap: var(--erp-space-3);\n}\n\n.application-editor__save-card[_ngcontent-%COMP%] {\n  align-items: flex-start;\n  gap: var(--erp-space-3);\n  padding: var(--erp-space-4);\n}\n\n.application-editor__save-icon[_ngcontent-%COMP%], \n.application-editor__validation-icon[_ngcontent-%COMP%] {\n  width: var(--erp-control-height);\n  height: var(--erp-control-height);\n  color: var(--erp-success-text);\n  background: var(--erp-success-bg);\n}\n\n.application-editor__save-icon.is-dirty[_ngcontent-%COMP%] {\n  color: var(--erp-warning-text);\n  background: var(--erp-warning-bg);\n}\n\n.application-editor__save-icon.has-error[_ngcontent-%COMP%] {\n  color: var(--erp-danger-text);\n  background: var(--erp-danger-bg);\n}\n\n.application-editor__save-card[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], \n.application-editor__validation[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  color: var(--erp-text-heading);\n  font-size: var(--erp-font-panel-title);\n  font-weight: var(--erp-weight-semibold);\n}\n\n.application-editor__validation[_ngcontent-%COMP%] {\n  overflow: hidden;\n}\n\n.application-editor__validation[_ngcontent-%COMP%]    > header[_ngcontent-%COMP%] {\n  align-items: flex-start;\n  gap: var(--erp-space-3);\n  padding: var(--erp-space-4);\n  border-bottom: 1px solid var(--erp-border-subtle);\n}\n\n.application-editor__validation-icon[_ngcontent-%COMP%] {\n  color: var(--erp-blue-700);\n  background: var(--erp-blue-50);\n}\n\n.application-editor__validation[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  padding: var(--erp-space-2);\n}\n\n.application-editor__validation[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]    + li[_ngcontent-%COMP%] {\n  border-top: 1px solid var(--erp-border-subtle);\n}\n\n.application-editor__validation[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  display: grid;\n  width: 100%;\n  grid-template-columns: auto minmax(0, 1fr);\n  align-items: start;\n  gap: var(--erp-space-2);\n  padding: var(--erp-space-3) var(--erp-space-2);\n  color: var(--erp-warning-text);\n  text-align: left;\n  background: transparent;\n  border: 0;\n  border-radius: var(--erp-radius-control);\n}\n\n.application-editor__validation[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover, \n.application-editor__validation[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:focus-visible {\n  background: var(--erp-warning-bg);\n}\n\n.application-editor__validation[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%], \n.application-editor__validation[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  display: block;\n}\n\n.application-editor__validation[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  overflow: hidden;\n  color: var(--erp-text-heading);\n  font-size: var(--erp-font-caption);\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n\n.application-editor__validation[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  margin-top: 0.125rem;\n  color: var(--erp-text-muted);\n  font-size: var(--erp-font-size-xs);\n  line-height: var(--erp-line-body);\n}\n\n.application-editor__more-issues[_ngcontent-%COMP%] {\n  padding: 0 var(--erp-space-4) var(--erp-space-3);\n}\n\n.application-editor__ready[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: var(--erp-space-2);\n  margin: var(--erp-space-3);\n  padding: var(--erp-space-3);\n  color: var(--erp-success-text);\n  background: var(--erp-success-bg);\n  border-radius: var(--erp-radius-control);\n}\n\n.application-editor__review-action[_ngcontent-%COMP%] {\n  width: calc(100% - var(--erp-space-6));\n  margin: 0 var(--erp-space-3) var(--erp-space-3);\n}\n\n.application-editor__dialog-layer[_ngcontent-%COMP%] {\n  z-index: 1200;\n}\n\n.application-editor__leave-dialog[_ngcontent-%COMP%] {\n  width: min(31rem, calc(100vw - var(--erp-space-6)));\n}\n\n.application-editor__leave-dialog[_ngcontent-%COMP%]    > header[_ngcontent-%COMP%] {\n  gap: var(--erp-space-3);\n  padding: var(--erp-space-4);\n  border-bottom: 1px solid var(--erp-border-subtle);\n}\n\n.application-editor__leave-dialog[_ngcontent-%COMP%]    > header[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  width: var(--erp-control-height-large);\n  height: var(--erp-control-height-large);\n  color: var(--erp-warning-text);\n  background: var(--erp-warning-bg);\n}\n\n.application-editor__leave-dialog[_ngcontent-%COMP%]    > header[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  min-width: 0;\n  flex: 1;\n}\n\n.application-editor__leave-dialog[_ngcontent-%COMP%]    > header[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  color: var(--erp-text-muted);\n  font-size: var(--erp-font-caption);\n}\n\n.application-editor__leave-dialog[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  color: var(--erp-text-heading);\n  font-size: var(--erp-font-section-title);\n}\n\n.application-editor__leave-dialog[_ngcontent-%COMP%]    > header[_ngcontent-%COMP%]    > button[_ngcontent-%COMP%] {\n  display: inline-grid;\n  width: var(--erp-control-height);\n  height: var(--erp-control-height);\n  place-items: center;\n  color: var(--erp-text-muted);\n  background: transparent;\n  border: 0;\n  border-radius: var(--erp-radius-control);\n}\n\n.application-editor__leave-dialog[_ngcontent-%COMP%]    > header[_ngcontent-%COMP%]    > button[_ngcontent-%COMP%]:hover {\n  background: var(--erp-surface-detail);\n}\n\n.application-editor__leave-body[_ngcontent-%COMP%] {\n  padding: var(--erp-space-5);\n}\n\n.application-editor__leave-dialog[_ngcontent-%COMP%]    > footer[_ngcontent-%COMP%] {\n  justify-content: flex-end;\n  gap: var(--erp-space-2);\n  padding: var(--erp-space-3) var(--erp-space-4);\n  background: var(--erp-surface-detail-soft);\n  border-top: 1px solid var(--erp-border-subtle);\n}\n\n@media (max-width: 78rem) {\n  .application-editor__workspace[_ngcontent-%COMP%] {\n    grid-template-columns: minmax(12rem, 14rem) minmax(0, 1fr);\n  }\n\n  .application-editor__aside[_ngcontent-%COMP%] {\n    position: static;\n    grid-column: 2;\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n  }\n}\n\n@media (max-width: 58rem) {\n  .application-editor__context[_ngcontent-%COMP%] {\n    grid-template-columns: minmax(0, 1fr) auto;\n  }\n\n  .application-editor__progress[_ngcontent-%COMP%] {\n    grid-column: 1 / -1;\n  }\n\n  .application-editor__workspace[_ngcontent-%COMP%] {\n    grid-template-columns: minmax(0, 1fr);\n  }\n\n  .application-editor__outline[_ngcontent-%COMP%], \n   .application-editor__aside[_ngcontent-%COMP%] {\n    position: static;\n    grid-column: auto;\n  }\n\n  .application-editor__outline[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%] {\n    display: flex;\n    overflow-x: auto;\n    scroll-snap-type: x proximity;\n  }\n\n  .application-editor__outline[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n    min-width: 12rem;\n    scroll-snap-align: start;\n  }\n\n  .application-editor__aside[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n  }\n}\n\n@media (max-width: 42rem) {\n  .application-editor__page-actions[_ngcontent-%COMP%], \n   .application-editor__page-actions[_ngcontent-%COMP%]   .erp-button[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n\n  .application-editor__context[_ngcontent-%COMP%] {\n    display: grid;\n    grid-template-columns: minmax(0, 1fr);\n  }\n\n  .application-editor__context-meta[_ngcontent-%COMP%] {\n    justify-content: flex-start;\n  }\n\n  .application-editor__section-header[_ngcontent-%COMP%] {\n    grid-template-columns: auto minmax(0, 1fr);\n    padding: var(--erp-space-4);\n  }\n\n  .application-editor__section-count[_ngcontent-%COMP%] {\n    grid-column: 2;\n    justify-self: start;\n  }\n\n  .application-editor__section-body[_ngcontent-%COMP%] {\n    padding: 0 var(--erp-space-4);\n  }\n\n  .application-editor__field-grid[_ngcontent-%COMP%], \n   .application-editor__aside[_ngcontent-%COMP%] {\n    grid-template-columns: minmax(0, 1fr);\n  }\n\n  .application-editor__actions[_ngcontent-%COMP%] {\n    align-items: stretch;\n    flex-direction: column;\n    padding: var(--erp-space-3) var(--erp-space-4);\n  }\n\n  .application-editor__actions[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%], \n   .application-editor__actions[_ngcontent-%COMP%]   .erp-button[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n\n  .application-editor__actions[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n    width: 100%;\n    margin: 0;\n    text-align: center;\n  }\n\n  .application-editor__leave-dialog[_ngcontent-%COMP%]    > footer[_ngcontent-%COMP%] {\n    align-items: stretch;\n    flex-direction: column-reverse;\n  }\n}\n\n@media (prefers-reduced-motion: reduce) {\n  .application-editor__progress[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n    transition: none;\n  }\n}"], changeDetection: 0 });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ApplicationEditorComponent, [{
        type: Component,
        args: [{ selector: 'erp-application-editor', imports: [
                    AdminPageComponent,
                    CdkTrapFocus,
                    DynamicFieldRendererComponent,
                    LucideArrowLeft,
                    LucideArrowRight,
                    LucideCheck,
                    LucideCircleAlert,
                    LucideClipboardCheck,
                    LucideClock3,
                    LucideFileText,
                    LucideRefreshCw,
                    LucideSave,
                    LucideShieldCheck,
                    LucideTrash2,
                    LucideX,
                    RouterLink,
                ], changeDetection: ChangeDetectionStrategy.OnPush, template: "<erp-admin-page\n  eyebrow=\"Admissions / Application editor\"\n  [title]=\"item()?.studentName || (loading() ? 'Edit application' : 'Application unavailable')\"\n  description=\"Update the saved application one section at a time. Changes autosave while you work.\"\n  variant=\"compact\"\n>\n  <div page-actions class=\"application-editor__page-actions\">\n    <a\n      class=\"erp-button erp-button--secondary\"\n      [routerLink]=\"['/admin/admissions/applications', admissionId()]\"\n    >\n      <svg lucideArrowLeft size=\"16\" aria-hidden=\"true\"></svg>\n      Application record\n    </a>\n    @if (item()) {\n      <button\n        class=\"erp-button erp-button--primary\"\n        type=\"button\"\n        [disabled]=\"saving()\"\n        (click)=\"openReview()\"\n      >\n        <svg lucideClipboardCheck size=\"16\" aria-hidden=\"true\"></svg>\n        Review application\n      </button>\n    }\n  </div>\n\n  @if (loading()) {\n    <section class=\"erp-card application-editor__loading\" aria-label=\"Loading application editor\">\n      <span class=\"erp-skeleton application-editor__skeleton-title\"></span>\n      <div>\n        <span class=\"erp-skeleton\"></span>\n        <span class=\"erp-skeleton\"></span>\n        <span class=\"erp-skeleton\"></span>\n      </div>\n    </section>\n  } @else if (loadError()) {\n    <section class=\"erp-card erp-empty-panel\" role=\"alert\">\n      <span class=\"erp-empty-panel__icon\">\n        <svg lucideCircleAlert size=\"21\" aria-hidden=\"true\"></svg>\n      </span>\n      <h2>Application editor unavailable</h2>\n      <p>{{ loadError() }}</p>\n      <button class=\"erp-button erp-button--secondary\" type=\"button\" (click)=\"load()\">\n        <svg lucideRefreshCw size=\"15\" aria-hidden=\"true\"></svg>\n        Try again\n      </button>\n    </section>\n  } @else if (item(); as application) {\n    <section class=\"erp-card application-editor__context\" aria-label=\"Application context\">\n      <div class=\"application-editor__reference\">\n        <span>{{ reference(application) }}</span>\n        <strong>{{ application.formSnapshot.name }}</strong>\n      </div>\n      <div class=\"application-editor__context-meta\">\n        <span\n          class=\"erp-status\"\n          [class.erp-status--draft]=\"application.status === 'draft'\"\n          [class.erp-status--warning]=\"\n            application.status === 'pending_approval' || application.status === 'submitted'\n          \"\n        >\n          {{ statusLabel(application) }}\n        </span>\n        <span>Form v{{ application.formVersion || application.formSnapshot.version || 1 }}</span>\n        <span>{{ completedSections() }} of {{ sections().length }} sections ready</span>\n      </div>\n      <div class=\"application-editor__progress\" aria-label=\"Application completion\">\n        <div><span [style.width.%]=\"progress()\"></span></div>\n        <strong>{{ progress() }}%</strong>\n      </div>\n    </section>\n\n    <div class=\"application-editor__workspace\">\n      <nav class=\"erp-card application-editor__outline\" aria-label=\"Application sections\">\n        <header>\n          <span>Application outline</span>\n          <strong>{{ sections().length }} sections</strong>\n        </header>\n        <ol>\n          @for (section of sections(); track section.id; let index = $index) {\n            <li>\n              <button\n                type=\"button\"\n                [class.is-current]=\"sectionState(section, index) === 'current'\"\n                [class.is-complete]=\"sectionState(section, index) === 'complete'\"\n                [class.has-attention]=\"sectionState(section, index) === 'attention'\"\n                [attr.aria-current]=\"index === activeIndex() ? 'step' : null\"\n                (click)=\"goToSection(index)\"\n              >\n                <span class=\"application-editor__step-number\">\n                  @if (sectionState(section, index) === 'complete') {\n                    <svg lucideCheck size=\"14\" aria-hidden=\"true\"></svg>\n                  } @else {\n                    {{ index + 1 }}\n                  }\n                </span>\n                <span>\n                  <strong>{{ section.name }}</strong>\n                  <small>\n                    @if (sectionIssues(section).length) {\n                      {{ sectionIssues(section).length }} required remaining\n                    } @else {\n                      Ready\n                    }\n                  </small>\n                </span>\n              </button>\n            </li>\n          }\n        </ol>\n      </nav>\n\n      <main class=\"application-editor__main\">\n        @if (notice()) {\n          <p class=\"erp-notice erp-notice--success\" role=\"status\">{{ notice() }}</p>\n        }\n        @if (saveError()) {\n          <p class=\"erp-notice erp-notice--error\" role=\"alert\">{{ saveError() }}</p>\n        }\n\n        @if (activeSection(); as section) {\n          <section class=\"erp-card application-editor__section\" [attr.aria-labelledby]=\"section.id\">\n            <header class=\"application-editor__section-header\">\n              <span class=\"application-editor__section-icon\">\n                <svg lucideFileText size=\"20\" aria-hidden=\"true\"></svg>\n              </span>\n              <div>\n                <small>Section {{ activeIndex() + 1 }} of {{ sections().length }}</small>\n                <h2 [id]=\"section.id\">{{ section.name }}</h2>\n                <p>\n                  {{\n                    section.description ||\n                      'Review and update the information configured for this section.'\n                  }}\n                </p>\n              </div>\n              <span\n                class=\"application-editor__section-count\"\n                [class.has-attention]=\"activeIssues().length\"\n              >\n                {{ activeIssues().length ? activeIssues().length + ' required' : 'Section ready' }}\n              </span>\n            </header>\n\n            <div class=\"application-editor__section-body\">\n              @for (subsection of visibleSubsections(); track subsection.id) {\n                <section\n                  class=\"application-editor__subsection\"\n                  [attr.aria-labelledby]=\"subsection.id + '-title'\"\n                >\n                  <header>\n                    <div>\n                      <h3 [id]=\"subsection.id + '-title'\">{{ subsection.name }}</h3>\n                      @if (subsection.description) {\n                        <p>{{ subsection.description }}</p>\n                      }\n                    </div>\n                    @if (subsection.isRepeatable) {\n                      <span>\n                        {{ entries(subsection).length }}\n                        {{ entries(subsection).length === 1 ? 'entry' : 'entries' }}\n                      </span>\n                    }\n                  </header>\n\n                  @if (subsection.isRepeatable) {\n                    <div class=\"application-editor__repeat-list\">\n                      @for (entry of entries(subsection); track $index; let entryIndex = $index) {\n                        <article class=\"application-editor__repeat-entry\">\n                          <header>\n                            <strong>{{ subsection.name }} {{ entryIndex + 1 }}</strong>\n                            <button\n                              class=\"application-editor__remove\"\n                              type=\"button\"\n                              [attr.aria-label]=\"\n                                'Remove ' + subsection.name + ' ' + (entryIndex + 1)\n                              \"\n                              (click)=\"removeEntry(subsection, entryIndex)\"\n                            >\n                              <svg lucideTrash2 size=\"15\" aria-hidden=\"true\"></svg>\n                              Remove\n                            </button>\n                          </header>\n                          <div class=\"application-editor__field-grid\">\n                            @for (field of subsection.fields; track field.id) {\n                              @if (visible(field, entry)) {\n                                <erp-dynamic-field-renderer\n                                  [field]=\"field\"\n                                  [modelValue]=\"value(field, entry)\"\n                                  [options]=\"fieldOptions(field, entryIndex)\"\n                                  [entryKey]=\"subsection.id + '-' + entryIndex\"\n                                  (modelChanged)=\"setValue(field, $event, entry, entryIndex)\"\n                                  (optionSearch)=\"searchOptions(field, $event, entry, entryIndex)\"\n                                  (fileSelected)=\"upload(field, $event, entry, entryIndex)\"\n                                  (uploadRemoved)=\"setValue(field, '', entry, entryIndex)\"\n                                />\n                              }\n                            }\n                          </div>\n                        </article>\n                      } @empty {\n                        <div class=\"application-editor__empty-repeat\">\n                          <p>No {{ subsection.name.toLowerCase() }} entries have been added.</p>\n                        </div>\n                      }\n                    </div>\n                    <button\n                      class=\"erp-button erp-button--secondary application-editor__add-entry\"\n                      type=\"button\"\n                      [disabled]=\"\n                        !!subsection.maxEntries &&\n                        entries(subsection).length >= subsection.maxEntries\n                      \"\n                      (click)=\"addEntry(subsection)\"\n                    >\n                      Add {{ subsection.name }}\n                    </button>\n                  } @else {\n                    <div class=\"application-editor__field-grid\">\n                      @for (field of subsection.fields; track field.id) {\n                        @if (visible(field)) {\n                          <erp-dynamic-field-renderer\n                            [field]=\"field\"\n                            [modelValue]=\"value(field)\"\n                            [options]=\"fieldOptions(field)\"\n                            [entryKey]=\"subsection.id\"\n                            (modelChanged)=\"setValue(field, $event)\"\n                            (optionSearch)=\"searchOptions(field, $event)\"\n                            (fileSelected)=\"upload(field, $event)\"\n                            (uploadRemoved)=\"setValue(field, '')\"\n                          />\n                        }\n                      }\n                    </div>\n                  }\n                </section>\n              } @empty {\n                <div class=\"application-editor__empty-section\">\n                  <strong>No visible fields</strong>\n                  <p>This section does not currently contain any fields an admin can edit.</p>\n                </div>\n              }\n            </div>\n\n            <footer class=\"application-editor__actions\">\n              <button\n                class=\"erp-button erp-button--secondary\"\n                type=\"button\"\n                [disabled]=\"activeIndex() === 0\"\n                (click)=\"goToSection(activeIndex() - 1)\"\n              >\n                <svg lucideArrowLeft size=\"15\" aria-hidden=\"true\"></svg>\n                Previous\n              </button>\n              <div>\n                <span>{{ saveState() }}</span>\n                <button\n                  class=\"erp-button erp-button--secondary\"\n                  type=\"button\"\n                  [disabled]=\"saving() || !dirty()\"\n                  (click)=\"saveManually()\"\n                >\n                  <svg lucideSave size=\"15\" aria-hidden=\"true\"></svg>\n                  Save\n                </button>\n                <button\n                  class=\"erp-button erp-button--primary\"\n                  type=\"button\"\n                  [disabled]=\"saving()\"\n                  (click)=\"saveAndContinue()\"\n                >\n                  {{ activeIndex() === sections().length - 1 ? 'Review application' : 'Continue' }}\n                  <svg lucideArrowRight size=\"15\" aria-hidden=\"true\"></svg>\n                </button>\n              </div>\n            </footer>\n          </section>\n        }\n      </main>\n\n      <aside class=\"application-editor__aside\">\n        <section class=\"erp-card application-editor__save-card\" aria-labelledby=\"save-state-title\">\n          <span\n            class=\"application-editor__save-icon\"\n            [class.is-dirty]=\"dirty()\"\n            [class.has-error]=\"saveError()\"\n          >\n            @if (saveError()) {\n              <svg lucideCircleAlert size=\"18\" aria-hidden=\"true\"></svg>\n            } @else if (dirty() || saving()) {\n              <svg lucideClock3 size=\"18\" aria-hidden=\"true\"></svg>\n            } @else {\n              <svg lucideCheck size=\"18\" aria-hidden=\"true\"></svg>\n            }\n          </span>\n          <div>\n            <h2 id=\"save-state-title\">{{ saveState() }}</h2>\n            <p>Autosave runs after you stop editing.</p>\n          </div>\n        </section>\n\n        <section\n          class=\"erp-card application-editor__validation\"\n          aria-labelledby=\"validation-summary-title\"\n        >\n          <header>\n            <span class=\"application-editor__validation-icon\">\n              <svg lucideShieldCheck size=\"18\" aria-hidden=\"true\"></svg>\n            </span>\n            <div>\n              <h2 id=\"validation-summary-title\">Application readiness</h2>\n              <p>{{ validationIssues().length }} blockers across all sections</p>\n            </div>\n          </header>\n\n          @if (validationIssues().length) {\n            <ul>\n              @for (issue of validationIssues().slice(0, 5); track issue.id) {\n                <li>\n                  <button type=\"button\" (click)=\"focusIssue(issue)\">\n                    <svg lucideCircleAlert size=\"15\" aria-hidden=\"true\"></svg>\n                    <span>\n                      <strong>{{ issue.fieldName || issue.subsectionName }}</strong>\n                      <small>{{ issue.sectionName }} / {{ issue.subsectionName }}</small>\n                    </span>\n                  </button>\n                </li>\n              }\n            </ul>\n            @if (validationIssues().length > 5) {\n              <p class=\"application-editor__more-issues\">\n                +{{ validationIssues().length - 5 }} more required items\n              </p>\n            }\n          } @else {\n            <div class=\"application-editor__ready\">\n              <svg lucideCheck size=\"18\" aria-hidden=\"true\"></svg>\n              <p>All required application information is ready for review.</p>\n            </div>\n          }\n\n          <button\n            class=\"erp-button erp-button--primary application-editor__review-action\"\n            type=\"button\"\n            [disabled]=\"saving()\"\n            (click)=\"openReview()\"\n          >\n            <svg lucideClipboardCheck size=\"16\" aria-hidden=\"true\"></svg>\n            Open review\n          </button>\n        </section>\n      </aside>\n    </div>\n  }\n</erp-admin-page>\n\n@if (leaveDialogOpen()) {\n  <div class=\"modal-backdrop application-editor__dialog-layer\">\n    <button\n      class=\"backdrop-close\"\n      type=\"button\"\n      tabindex=\"-1\"\n      aria-label=\"Stay on application editor\"\n      (click)=\"resolveLeave(false)\"\n    ></button>\n    <section\n      class=\"modal application-editor__leave-dialog\"\n      role=\"dialog\"\n      aria-modal=\"true\"\n      aria-labelledby=\"leave-dialog-title\"\n      cdkTrapFocus\n      [cdkTrapFocusAutoCapture]=\"true\"\n    >\n      <header>\n        <span><svg lucideCircleAlert size=\"20\" aria-hidden=\"true\"></svg></span>\n        <div>\n          <small>Unsaved application</small>\n          <h2 id=\"leave-dialog-title\">Leave without saving?</h2>\n          <p>Your latest edits have not reached the server.</p>\n        </div>\n        <button type=\"button\" aria-label=\"Stay on page\" (click)=\"resolveLeave(false)\">\n          <svg lucideX size=\"17\" aria-hidden=\"true\"></svg>\n        </button>\n      </header>\n      <div class=\"application-editor__leave-body\">\n        <p>Stay on this page and wait for autosave, or discard the unsaved changes.</p>\n      </div>\n      <footer>\n        <button\n          class=\"erp-button erp-button--secondary\"\n          type=\"button\"\n          (click)=\"resolveLeave(false)\"\n        >\n          Stay on page\n        </button>\n        <button class=\"erp-button erp-button--danger\" type=\"button\" (click)=\"resolveLeave(true)\">\n          Leave without saving\n        </button>\n      </footer>\n    </section>\n  </div>\n}\n", styles: ["/* ERP-LOCAL-STYLE: URL-addressable admin application editing workspace. */\n:host {\n  display: block;\n}\n\n.application-editor__page-actions,\n.application-editor__context,\n.application-editor__context-meta,\n.application-editor__progress,\n.application-editor__section-header,\n.application-editor__subsection > header,\n.application-editor__repeat-entry > header,\n.application-editor__actions,\n.application-editor__actions > div,\n.application-editor__save-card,\n.application-editor__validation > header,\n.application-editor__leave-dialog > header,\n.application-editor__leave-dialog > footer {\n  display: flex;\n  align-items: center;\n}\n\n.application-editor__page-actions {\n  flex-wrap: wrap;\n  justify-content: flex-end;\n  gap: var(--erp-space-2);\n}\n\n.application-editor__loading {\n  display: grid;\n  min-height: var(--erp-state-panel-min-height);\n  gap: var(--erp-space-4);\n  padding: var(--erp-space-6);\n}\n\n.application-editor__skeleton-title {\n  width: min(28rem, 70%);\n  height: var(--erp-control-height);\n}\n\n.application-editor__loading > div {\n  display: grid;\n  grid-template-columns: 14rem minmax(0, 1fr) 18rem;\n  gap: var(--erp-space-4);\n}\n\n.application-editor__loading > div > span {\n  min-height: 22rem;\n}\n\n.application-editor__context {\n  display: grid;\n  grid-template-columns: minmax(12rem, 1fr) auto minmax(10rem, 14rem);\n  gap: var(--erp-space-4);\n  margin-bottom: var(--erp-space-4);\n  padding: var(--erp-space-3) var(--erp-space-4);\n}\n\n.application-editor__reference {\n  min-width: 0;\n}\n\n.application-editor__reference span,\n.application-editor__reference strong {\n  display: block;\n}\n\n.application-editor__reference span {\n  color: var(--erp-text-muted);\n  font-family: var(--erp-font-mono);\n  font-size: var(--erp-font-caption);\n}\n\n.application-editor__reference strong {\n  overflow: hidden;\n  color: var(--erp-text-heading);\n  font-size: var(--erp-font-label);\n  font-weight: var(--erp-weight-semibold);\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n\n.application-editor__context-meta {\n  flex-wrap: wrap;\n  justify-content: flex-end;\n  gap: var(--erp-space-3);\n  color: var(--erp-text-muted);\n  font-size: var(--erp-font-caption);\n}\n\n.application-editor__context-meta > span:not(.erp-status) + span {\n  padding-left: var(--erp-space-3);\n  border-left: 1px solid var(--erp-border-subtle);\n}\n\n.application-editor__progress {\n  gap: var(--erp-space-2);\n}\n\n.application-editor__progress > div {\n  overflow: hidden;\n  width: 100%;\n  height: 0.375rem;\n  background: var(--erp-surface-detail);\n  border-radius: var(--erp-radius-pill);\n}\n\n.application-editor__progress > div > span {\n  display: block;\n  height: 100%;\n  background: var(--erp-blue-600);\n  border-radius: inherit;\n  transition: width 180ms ease;\n}\n\n.application-editor__progress strong {\n  min-width: 2.5rem;\n  color: var(--erp-text-heading);\n  font-size: var(--erp-font-caption);\n  text-align: right;\n}\n\n.application-editor__workspace {\n  display: grid;\n  grid-template-columns: minmax(12rem, 14rem) minmax(0, 1fr) minmax(16rem, 18rem);\n  align-items: start;\n  gap: var(--erp-space-4);\n}\n\n.application-editor__outline,\n.application-editor__aside {\n  position: sticky;\n  top: var(--erp-admin-sticky-top);\n}\n\n.application-editor__outline {\n  overflow: hidden;\n}\n\n.application-editor__outline > header {\n  display: grid;\n  gap: var(--erp-space-1);\n  padding: var(--erp-space-4);\n  border-bottom: 1px solid var(--erp-border-subtle);\n}\n\n.application-editor__outline > header span {\n  color: var(--erp-text-muted);\n  font-size: var(--erp-font-caption);\n}\n\n.application-editor__outline > header strong {\n  color: var(--erp-text-heading);\n  font-size: var(--erp-font-panel-title);\n}\n\n.application-editor__outline ol,\n.application-editor__validation ul {\n  margin: 0;\n  padding: 0;\n  list-style: none;\n}\n\n.application-editor__outline ol {\n  display: grid;\n  gap: 1px;\n  padding: var(--erp-space-2);\n}\n\n.application-editor__outline button {\n  display: grid;\n  width: 100%;\n  grid-template-columns: auto minmax(0, 1fr);\n  align-items: start;\n  gap: var(--erp-space-2);\n  padding: var(--erp-space-2) var(--erp-space-3);\n  color: var(--erp-text-body);\n  text-align: left;\n  background: transparent;\n  border: 1px solid transparent;\n  border-radius: var(--erp-radius-control);\n}\n\n.application-editor__outline button:hover,\n.application-editor__outline button:focus-visible {\n  background: var(--erp-surface-detail-soft);\n}\n\n.application-editor__outline button.is-current {\n  color: var(--erp-blue-700);\n  background: var(--erp-blue-50);\n  border-color: var(--erp-border-default);\n}\n\n.application-editor__step-number {\n  display: inline-grid;\n  width: 1.5rem;\n  height: 1.5rem;\n  place-items: center;\n  color: var(--erp-text-muted);\n  font-size: var(--erp-font-caption);\n  font-weight: var(--erp-weight-semibold);\n  background: var(--erp-surface-detail);\n  border-radius: var(--erp-radius-pill);\n}\n\n.application-editor__outline button.is-current .application-editor__step-number {\n  color: var(--erp-surface-raised);\n  background: var(--erp-blue-600);\n}\n\n.application-editor__outline button.is-complete .application-editor__step-number {\n  color: var(--erp-success-text);\n  background: var(--erp-success-bg);\n}\n\n.application-editor__outline\n  button.has-attention:not(.is-current)\n  .application-editor__step-number {\n  color: var(--erp-warning-text);\n  background: var(--erp-warning-bg);\n}\n\n.application-editor__outline button > span:last-child {\n  min-width: 0;\n}\n\n.application-editor__outline button strong,\n.application-editor__outline button small {\n  display: block;\n}\n\n.application-editor__outline button strong {\n  overflow: hidden;\n  font-size: var(--erp-font-label);\n  font-weight: var(--erp-weight-semibold);\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n\n.application-editor__outline button small {\n  margin-top: 0.125rem;\n  color: var(--erp-text-muted);\n  font-size: var(--erp-font-size-xs);\n}\n\n.application-editor__main {\n  display: grid;\n  min-width: 0;\n  gap: var(--erp-space-3);\n}\n\n.application-editor__section {\n  overflow: visible;\n}\n\n.application-editor__section-header {\n  display: grid;\n  grid-template-columns: auto minmax(0, 1fr) auto;\n  align-items: start;\n  gap: var(--erp-space-3);\n  padding: var(--erp-space-5);\n  border-bottom: 1px solid var(--erp-border-subtle);\n}\n\n.application-editor__section-icon,\n.application-editor__save-icon,\n.application-editor__validation-icon,\n.application-editor__leave-dialog > header > span {\n  display: inline-grid;\n  flex: 0 0 auto;\n  place-items: center;\n  color: var(--erp-blue-700);\n  background: var(--erp-blue-50);\n  border-radius: var(--erp-radius-control);\n}\n\n.application-editor__section-icon {\n  width: var(--erp-control-height-large);\n  height: var(--erp-control-height-large);\n}\n\n.application-editor__section-header small,\n.application-editor__section-header h2,\n.application-editor__section-header p,\n.application-editor__subsection h3,\n.application-editor__subsection p,\n.application-editor__save-card h2,\n.application-editor__save-card p,\n.application-editor__validation h2,\n.application-editor__validation p,\n.application-editor__leave-dialog h2,\n.application-editor__leave-dialog p {\n  margin: 0;\n}\n\n.application-editor__section-header small {\n  display: block;\n  margin-bottom: var(--erp-space-1);\n  color: var(--erp-text-muted);\n  font-size: var(--erp-font-caption);\n}\n\n.application-editor__section-header h2 {\n  color: var(--erp-text-heading);\n  font-size: var(--erp-font-section-title);\n  line-height: var(--erp-line-section-title);\n}\n\n.application-editor__section-header p,\n.application-editor__subsection p,\n.application-editor__save-card p,\n.application-editor__validation p {\n  color: var(--erp-text-muted);\n  font-size: var(--erp-font-caption);\n  line-height: var(--erp-line-body);\n}\n\n.application-editor__section-count {\n  padding: 0.25rem 0.55rem;\n  color: var(--erp-success-text);\n  font-size: var(--erp-font-caption);\n  font-weight: var(--erp-weight-semibold);\n  white-space: nowrap;\n  background: var(--erp-success-bg);\n  border-radius: var(--erp-radius-pill);\n}\n\n.application-editor__section-count.has-attention {\n  color: var(--erp-warning-text);\n  background: var(--erp-warning-bg);\n}\n\n.application-editor__section-body {\n  padding: 0 var(--erp-space-5);\n}\n\n.application-editor__subsection {\n  padding: var(--erp-space-5) 0;\n}\n\n.application-editor__subsection + .application-editor__subsection {\n  border-top: 1px solid var(--erp-border-subtle);\n}\n\n.application-editor__subsection > header {\n  justify-content: space-between;\n  gap: var(--erp-space-3);\n  margin-bottom: var(--erp-space-4);\n}\n\n.application-editor__subsection h3 {\n  color: var(--erp-text-heading);\n  font-size: var(--erp-font-panel-title);\n  font-weight: var(--erp-weight-semibold);\n}\n\n.application-editor__subsection > header > span {\n  color: var(--erp-text-muted);\n  font-size: var(--erp-font-caption);\n}\n\n.application-editor__field-grid {\n  display: grid;\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n  gap: var(--erp-space-4);\n}\n\n.application-editor__repeat-list {\n  display: grid;\n  gap: var(--erp-space-3);\n}\n\n.application-editor__repeat-entry {\n  overflow: hidden;\n  background: var(--erp-surface-detail-soft);\n  border: 1px solid var(--erp-border-subtle);\n  border-radius: var(--erp-radius-control);\n}\n\n.application-editor__repeat-entry > header {\n  justify-content: space-between;\n  gap: var(--erp-space-3);\n  padding: var(--erp-space-3) var(--erp-space-4);\n  background: var(--erp-surface-page-panel);\n  border-bottom: 1px solid var(--erp-border-subtle);\n}\n\n.application-editor__repeat-entry > header strong {\n  color: var(--erp-text-heading);\n  font-size: var(--erp-font-label);\n}\n\n.application-editor__repeat-entry > .application-editor__field-grid {\n  padding: var(--erp-space-4);\n}\n\n.application-editor__remove {\n  display: inline-flex;\n  align-items: center;\n  gap: var(--erp-space-1);\n  min-height: var(--erp-control-height-compact);\n  padding: 0 var(--erp-space-2);\n  color: var(--erp-danger-text);\n  font-size: var(--erp-font-caption);\n  font-weight: var(--erp-weight-semibold);\n  background: transparent;\n  border: 1px solid transparent;\n  border-radius: var(--erp-radius-control);\n}\n\n.application-editor__remove:hover,\n.application-editor__remove:focus-visible {\n  background: var(--erp-danger-bg);\n  border-color: var(--erp-danger);\n}\n\n.application-editor__empty-repeat,\n.application-editor__empty-section {\n  padding: var(--erp-space-5);\n  color: var(--erp-text-muted);\n  text-align: center;\n  background: var(--erp-surface-detail-soft);\n  border: 1px dashed var(--erp-border-default);\n  border-radius: var(--erp-radius-control);\n}\n\n.application-editor__empty-repeat p {\n  margin: 0;\n}\n\n.application-editor__empty-section {\n  margin: var(--erp-space-5) 0;\n}\n\n.application-editor__empty-section strong,\n.application-editor__empty-section p {\n  display: block;\n  margin: 0;\n}\n\n.application-editor__empty-section strong {\n  color: var(--erp-text-heading);\n}\n\n.application-editor__add-entry {\n  margin-top: var(--erp-space-3);\n}\n\n.application-editor__actions {\n  position: sticky;\n  z-index: 3;\n  bottom: 0;\n  justify-content: space-between;\n  gap: var(--erp-space-3);\n  padding: var(--erp-space-3) var(--erp-space-5);\n  background: var(--erp-surface-raised);\n  border-top: 1px solid var(--erp-border-subtle);\n  border-radius: 0 0 var(--erp-radius-control) var(--erp-radius-control);\n  box-shadow: var(--erp-shadow-card);\n}\n\n.application-editor__actions > div {\n  flex-wrap: wrap;\n  justify-content: flex-end;\n  gap: var(--erp-space-2);\n}\n\n.application-editor__actions > div > span {\n  margin-right: var(--erp-space-1);\n  color: var(--erp-text-muted);\n  font-size: var(--erp-font-caption);\n}\n\n.application-editor__aside {\n  display: grid;\n  gap: var(--erp-space-3);\n}\n\n.application-editor__save-card {\n  align-items: flex-start;\n  gap: var(--erp-space-3);\n  padding: var(--erp-space-4);\n}\n\n.application-editor__save-icon,\n.application-editor__validation-icon {\n  width: var(--erp-control-height);\n  height: var(--erp-control-height);\n  color: var(--erp-success-text);\n  background: var(--erp-success-bg);\n}\n\n.application-editor__save-icon.is-dirty {\n  color: var(--erp-warning-text);\n  background: var(--erp-warning-bg);\n}\n\n.application-editor__save-icon.has-error {\n  color: var(--erp-danger-text);\n  background: var(--erp-danger-bg);\n}\n\n.application-editor__save-card h2,\n.application-editor__validation h2 {\n  color: var(--erp-text-heading);\n  font-size: var(--erp-font-panel-title);\n  font-weight: var(--erp-weight-semibold);\n}\n\n.application-editor__validation {\n  overflow: hidden;\n}\n\n.application-editor__validation > header {\n  align-items: flex-start;\n  gap: var(--erp-space-3);\n  padding: var(--erp-space-4);\n  border-bottom: 1px solid var(--erp-border-subtle);\n}\n\n.application-editor__validation-icon {\n  color: var(--erp-blue-700);\n  background: var(--erp-blue-50);\n}\n\n.application-editor__validation ul {\n  padding: var(--erp-space-2);\n}\n\n.application-editor__validation li + li {\n  border-top: 1px solid var(--erp-border-subtle);\n}\n\n.application-editor__validation li button {\n  display: grid;\n  width: 100%;\n  grid-template-columns: auto minmax(0, 1fr);\n  align-items: start;\n  gap: var(--erp-space-2);\n  padding: var(--erp-space-3) var(--erp-space-2);\n  color: var(--erp-warning-text);\n  text-align: left;\n  background: transparent;\n  border: 0;\n  border-radius: var(--erp-radius-control);\n}\n\n.application-editor__validation li button:hover,\n.application-editor__validation li button:focus-visible {\n  background: var(--erp-warning-bg);\n}\n\n.application-editor__validation li strong,\n.application-editor__validation li small {\n  display: block;\n}\n\n.application-editor__validation li strong {\n  overflow: hidden;\n  color: var(--erp-text-heading);\n  font-size: var(--erp-font-caption);\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n\n.application-editor__validation li small {\n  margin-top: 0.125rem;\n  color: var(--erp-text-muted);\n  font-size: var(--erp-font-size-xs);\n  line-height: var(--erp-line-body);\n}\n\n.application-editor__more-issues {\n  padding: 0 var(--erp-space-4) var(--erp-space-3);\n}\n\n.application-editor__ready {\n  display: flex;\n  align-items: flex-start;\n  gap: var(--erp-space-2);\n  margin: var(--erp-space-3);\n  padding: var(--erp-space-3);\n  color: var(--erp-success-text);\n  background: var(--erp-success-bg);\n  border-radius: var(--erp-radius-control);\n}\n\n.application-editor__review-action {\n  width: calc(100% - var(--erp-space-6));\n  margin: 0 var(--erp-space-3) var(--erp-space-3);\n}\n\n.application-editor__dialog-layer {\n  z-index: 1200;\n}\n\n.application-editor__leave-dialog {\n  width: min(31rem, calc(100vw - var(--erp-space-6)));\n}\n\n.application-editor__leave-dialog > header {\n  gap: var(--erp-space-3);\n  padding: var(--erp-space-4);\n  border-bottom: 1px solid var(--erp-border-subtle);\n}\n\n.application-editor__leave-dialog > header > span {\n  width: var(--erp-control-height-large);\n  height: var(--erp-control-height-large);\n  color: var(--erp-warning-text);\n  background: var(--erp-warning-bg);\n}\n\n.application-editor__leave-dialog > header > div {\n  min-width: 0;\n  flex: 1;\n}\n\n.application-editor__leave-dialog > header small {\n  color: var(--erp-text-muted);\n  font-size: var(--erp-font-caption);\n}\n\n.application-editor__leave-dialog h2 {\n  color: var(--erp-text-heading);\n  font-size: var(--erp-font-section-title);\n}\n\n.application-editor__leave-dialog > header > button {\n  display: inline-grid;\n  width: var(--erp-control-height);\n  height: var(--erp-control-height);\n  place-items: center;\n  color: var(--erp-text-muted);\n  background: transparent;\n  border: 0;\n  border-radius: var(--erp-radius-control);\n}\n\n.application-editor__leave-dialog > header > button:hover {\n  background: var(--erp-surface-detail);\n}\n\n.application-editor__leave-body {\n  padding: var(--erp-space-5);\n}\n\n.application-editor__leave-dialog > footer {\n  justify-content: flex-end;\n  gap: var(--erp-space-2);\n  padding: var(--erp-space-3) var(--erp-space-4);\n  background: var(--erp-surface-detail-soft);\n  border-top: 1px solid var(--erp-border-subtle);\n}\n\n@media (max-width: 78rem) {\n  .application-editor__workspace {\n    grid-template-columns: minmax(12rem, 14rem) minmax(0, 1fr);\n  }\n\n  .application-editor__aside {\n    position: static;\n    grid-column: 2;\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n  }\n}\n\n@media (max-width: 58rem) {\n  .application-editor__context {\n    grid-template-columns: minmax(0, 1fr) auto;\n  }\n\n  .application-editor__progress {\n    grid-column: 1 / -1;\n  }\n\n  .application-editor__workspace {\n    grid-template-columns: minmax(0, 1fr);\n  }\n\n  .application-editor__outline,\n  .application-editor__aside {\n    position: static;\n    grid-column: auto;\n  }\n\n  .application-editor__outline ol {\n    display: flex;\n    overflow-x: auto;\n    scroll-snap-type: x proximity;\n  }\n\n  .application-editor__outline li {\n    min-width: 12rem;\n    scroll-snap-align: start;\n  }\n\n  .application-editor__aside {\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n  }\n}\n\n@media (max-width: 42rem) {\n  .application-editor__page-actions,\n  .application-editor__page-actions .erp-button {\n    width: 100%;\n  }\n\n  .application-editor__context {\n    display: grid;\n    grid-template-columns: minmax(0, 1fr);\n  }\n\n  .application-editor__context-meta {\n    justify-content: flex-start;\n  }\n\n  .application-editor__section-header {\n    grid-template-columns: auto minmax(0, 1fr);\n    padding: var(--erp-space-4);\n  }\n\n  .application-editor__section-count {\n    grid-column: 2;\n    justify-self: start;\n  }\n\n  .application-editor__section-body {\n    padding: 0 var(--erp-space-4);\n  }\n\n  .application-editor__field-grid,\n  .application-editor__aside {\n    grid-template-columns: minmax(0, 1fr);\n  }\n\n  .application-editor__actions {\n    align-items: stretch;\n    flex-direction: column;\n    padding: var(--erp-space-3) var(--erp-space-4);\n  }\n\n  .application-editor__actions > div,\n  .application-editor__actions .erp-button {\n    width: 100%;\n  }\n\n  .application-editor__actions > div > span {\n    width: 100%;\n    margin: 0;\n    text-align: center;\n  }\n\n  .application-editor__leave-dialog > footer {\n    align-items: stretch;\n    flex-direction: column-reverse;\n  }\n}\n\n@media (prefers-reduced-motion: reduce) {\n  .application-editor__progress > div > span {\n    transition: none;\n  }\n}\n"] }]
    }], () => [], { beforeUnload: [{
            type: HostListener,
            args: ['window:beforeunload', ['$event']]
        }], onEscape: [{
            type: HostListener,
            args: ['document:keydown.escape']
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(ApplicationEditorComponent, { className: "ApplicationEditorComponent", filePath: "frontend/src/app/features/admin/admissions/application-editor/application-editor.component.ts", lineNumber: 74 }); })();
