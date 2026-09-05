import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../../core/api.service';
import { DynamicFieldRendererComponent } from '../../shared/ui/dynamic-field-renderer/dynamic-field-renderer.component';
import * as i0 from "@angular/core";
const _forTrack0 = ($index, $item) => $item.id;
function PublicFormComponent_Conditional_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "section", 1);
    i0.ɵɵelement(1, "div", 3);
    i0.ɵɵelementStart(2, "p");
    i0.ɵɵtext(3, "Loading form\u2026");
    i0.ɵɵelementEnd()();
} }
function PublicFormComponent_Conditional_2_Conditional_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p");
    i0.ɵɵtext(1, " Unique code: ");
    i0.ɵɵelementStart(2, "strong");
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const submitted_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(submitted_r1.applicationCode);
} }
function PublicFormComponent_Conditional_2_Conditional_6_Template(rf, ctx) { if (rf & 1) {
    const _r2 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 5);
    i0.ɵɵlistener("click", function PublicFormComponent_Conditional_2_Conditional_6_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r2); const ctx_r2 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r2.startAnother()); });
    i0.ɵɵtext(1, " Add another record ");
    i0.ɵɵelementEnd();
} }
function PublicFormComponent_Conditional_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "section", 2)(1, "h1");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "p");
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵconditionalCreate(5, PublicFormComponent_Conditional_2_Conditional_5_Template, 4, 1, "p");
    i0.ɵɵconditionalCreate(6, PublicFormComponent_Conditional_2_Conditional_6_Template, 2, 0, "button", 4);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r2.editing() ? "Record updated" : "Form submitted");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", ctx_r2.editing() ? "The saved record has been updated." : "The response has been recorded.", " ");
    i0.ɵɵadvance();
    i0.ɵɵconditional(ctx.applicationCode ? 5 : -1);
    i0.ɵɵadvance();
    i0.ɵɵconditional(!ctx_r2.editing() ? 6 : -1);
} }
function PublicFormComponent_Conditional_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "section", 2)(1, "h1");
    i0.ɵɵtext(2, "Form unavailable");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "p");
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(ctx_r2.error());
} }
function PublicFormComponent_Conditional_4_Conditional_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 8);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r2.error());
} }
function PublicFormComponent_Conditional_4_For_9_For_8_Conditional_6_For_1_For_3_Conditional_0_Template(rf, ctx) { if (rf & 1) {
    const _r7 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "erp-dynamic-field-renderer", 18);
    i0.ɵɵlistener("modelChanged", function PublicFormComponent_Conditional_4_For_9_For_8_Conditional_6_For_1_For_3_Conditional_0_Template_erp_dynamic_field_renderer_modelChanged_0_listener($event) { i0.ɵɵrestoreView(_r7); const field_r8 = i0.ɵɵnextContext().$implicit; const entry_r9 = i0.ɵɵnextContext().$implicit; const ctx_r2 = i0.ɵɵnextContext(5); return i0.ɵɵresetView(ctx_r2.setValue(field_r8, $event, entry_r9)); })("optionSearch", function PublicFormComponent_Conditional_4_For_9_For_8_Conditional_6_For_1_For_3_Conditional_0_Template_erp_dynamic_field_renderer_optionSearch_0_listener($event) { i0.ɵɵrestoreView(_r7); const field_r8 = i0.ɵɵnextContext().$implicit; const ctx_r2 = i0.ɵɵnextContext(6); return i0.ɵɵresetView(ctx_r2.searchOptions(field_r8, $event)); })("fileSelected", function PublicFormComponent_Conditional_4_For_9_For_8_Conditional_6_For_1_For_3_Conditional_0_Template_erp_dynamic_field_renderer_fileSelected_0_listener($event) { i0.ɵɵrestoreView(_r7); const field_r8 = i0.ɵɵnextContext().$implicit; const entry_r9 = i0.ɵɵnextContext().$implicit; const ctx_r2 = i0.ɵɵnextContext(5); return i0.ɵɵresetView(ctx_r2.upload(field_r8, $event, entry_r9)); })("uploadRemoved", function PublicFormComponent_Conditional_4_For_9_For_8_Conditional_6_For_1_For_3_Conditional_0_Template_erp_dynamic_field_renderer_uploadRemoved_0_listener() { i0.ɵɵrestoreView(_r7); const field_r8 = i0.ɵɵnextContext().$implicit; const entry_r9 = i0.ɵɵnextContext().$implicit; const ctx_r2 = i0.ɵɵnextContext(5); return i0.ɵɵresetView(ctx_r2.setValue(field_r8, "", entry_r9)); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const field_r8 = i0.ɵɵnextContext().$implicit;
    const ctx_r9 = i0.ɵɵnextContext();
    const entry_r9 = ctx_r9.$implicit;
    const ɵ$index_81_r11 = ctx_r9.$index;
    const subsection_r12 = i0.ɵɵnextContext(2).$implicit;
    const ctx_r2 = i0.ɵɵnextContext(3);
    i0.ɵɵproperty("field", field_r8)("modelValue", ctx_r2.value(field_r8, entry_r9))("options", ctx_r2.fieldOptions(field_r8))("entryKey", subsection_r12.id + "-" + ɵ$index_81_r11);
} }
function PublicFormComponent_Conditional_4_For_9_For_8_Conditional_6_For_1_For_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵconditionalCreate(0, PublicFormComponent_Conditional_4_For_9_For_8_Conditional_6_For_1_For_3_Conditional_0_Template, 1, 4, "erp-dynamic-field-renderer", 17);
} if (rf & 2) {
    const field_r8 = ctx.$implicit;
    const entry_r9 = i0.ɵɵnextContext().$implicit;
    const ctx_r2 = i0.ɵɵnextContext(5);
    i0.ɵɵconditional(ctx_r2.visible(field_r8, entry_r9) ? 0 : -1);
} }
function PublicFormComponent_Conditional_4_For_9_For_8_Conditional_6_For_1_Template(rf, ctx) { if (rf & 1) {
    const _r6 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "article", 9)(1, "div", 14);
    i0.ɵɵrepeaterCreate(2, PublicFormComponent_Conditional_4_For_9_For_8_Conditional_6_For_1_For_3_Template, 1, 1, null, null, _forTrack0);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "button", 16);
    i0.ɵɵlistener("click", function PublicFormComponent_Conditional_4_For_9_For_8_Conditional_6_For_1_Template_button_click_4_listener() { const ɵ$index_81_r11 = i0.ɵɵrestoreView(_r6).$index; const subsection_r12 = i0.ɵɵnextContext(2).$implicit; const ctx_r2 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r2.removeEntry(subsection_r12, ɵ$index_81_r11)); });
    i0.ɵɵtext(5, " Remove ");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const subsection_r12 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵadvance(2);
    i0.ɵɵrepeater(subsection_r12.fields);
} }
function PublicFormComponent_Conditional_4_For_9_For_8_Conditional_6_Template(rf, ctx) { if (rf & 1) {
    const _r5 = i0.ɵɵgetCurrentView();
    i0.ɵɵrepeaterCreate(0, PublicFormComponent_Conditional_4_For_9_For_8_Conditional_6_For_1_Template, 6, 0, "article", 9, i0.ɵɵrepeaterTrackByIndex);
    i0.ɵɵelementStart(2, "button", 15);
    i0.ɵɵlistener("click", function PublicFormComponent_Conditional_4_For_9_For_8_Conditional_6_Template_button_click_2_listener() { i0.ɵɵrestoreView(_r5); const subsection_r12 = i0.ɵɵnextContext().$implicit; const ctx_r2 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r2.addEntry(subsection_r12)); });
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const subsection_r12 = i0.ɵɵnextContext().$implicit;
    const ctx_r2 = i0.ɵɵnextContext(3);
    i0.ɵɵrepeater(ctx_r2.entries(subsection_r12));
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1(" Add ", subsection_r12.name, " ");
} }
function PublicFormComponent_Conditional_4_For_9_For_8_Conditional_7_For_2_Conditional_0_Template(rf, ctx) { if (rf & 1) {
    const _r13 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "erp-dynamic-field-renderer", 18);
    i0.ɵɵlistener("modelChanged", function PublicFormComponent_Conditional_4_For_9_For_8_Conditional_7_For_2_Conditional_0_Template_erp_dynamic_field_renderer_modelChanged_0_listener($event) { i0.ɵɵrestoreView(_r13); const field_r14 = i0.ɵɵnextContext().$implicit; const ctx_r2 = i0.ɵɵnextContext(5); return i0.ɵɵresetView(ctx_r2.setValue(field_r14, $event)); })("optionSearch", function PublicFormComponent_Conditional_4_For_9_For_8_Conditional_7_For_2_Conditional_0_Template_erp_dynamic_field_renderer_optionSearch_0_listener($event) { i0.ɵɵrestoreView(_r13); const field_r14 = i0.ɵɵnextContext().$implicit; const ctx_r2 = i0.ɵɵnextContext(5); return i0.ɵɵresetView(ctx_r2.searchOptions(field_r14, $event)); })("fileSelected", function PublicFormComponent_Conditional_4_For_9_For_8_Conditional_7_For_2_Conditional_0_Template_erp_dynamic_field_renderer_fileSelected_0_listener($event) { i0.ɵɵrestoreView(_r13); const field_r14 = i0.ɵɵnextContext().$implicit; const ctx_r2 = i0.ɵɵnextContext(5); return i0.ɵɵresetView(ctx_r2.upload(field_r14, $event)); })("uploadRemoved", function PublicFormComponent_Conditional_4_For_9_For_8_Conditional_7_For_2_Conditional_0_Template_erp_dynamic_field_renderer_uploadRemoved_0_listener() { i0.ɵɵrestoreView(_r13); const field_r14 = i0.ɵɵnextContext().$implicit; const ctx_r2 = i0.ɵɵnextContext(5); return i0.ɵɵresetView(ctx_r2.setValue(field_r14, "")); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const field_r14 = i0.ɵɵnextContext().$implicit;
    const subsection_r12 = i0.ɵɵnextContext(2).$implicit;
    const ctx_r2 = i0.ɵɵnextContext(3);
    i0.ɵɵproperty("field", field_r14)("modelValue", ctx_r2.value(field_r14))("options", ctx_r2.fieldOptions(field_r14))("entryKey", subsection_r12.id);
} }
function PublicFormComponent_Conditional_4_For_9_For_8_Conditional_7_For_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵconditionalCreate(0, PublicFormComponent_Conditional_4_For_9_For_8_Conditional_7_For_2_Conditional_0_Template, 1, 4, "erp-dynamic-field-renderer", 17);
} if (rf & 2) {
    const field_r14 = ctx.$implicit;
    const ctx_r2 = i0.ɵɵnextContext(5);
    i0.ɵɵconditional(ctx_r2.visible(field_r14) ? 0 : -1);
} }
function PublicFormComponent_Conditional_4_For_9_For_8_Conditional_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 14);
    i0.ɵɵrepeaterCreate(1, PublicFormComponent_Conditional_4_For_9_For_8_Conditional_7_For_2_Template, 1, 1, null, null, _forTrack0);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const subsection_r12 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance();
    i0.ɵɵrepeater(subsection_r12.fields);
} }
function PublicFormComponent_Conditional_4_For_9_For_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 13)(1, "div")(2, "h3");
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "p");
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd()();
    i0.ɵɵconditionalCreate(6, PublicFormComponent_Conditional_4_For_9_For_8_Conditional_6_Template, 4, 1)(7, PublicFormComponent_Conditional_4_For_9_For_8_Conditional_7_Template, 3, 0, "div", 14);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const subsection_r12 = ctx.$implicit;
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(subsection_r12.name);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(subsection_r12.description);
    i0.ɵɵadvance();
    i0.ɵɵconditional(subsection_r12.isRepeatable ? 6 : 7);
} }
function PublicFormComponent_Conditional_4_For_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "section", 9)(1, "header", 12)(2, "div")(3, "h2");
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "p");
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd()()();
    i0.ɵɵrepeaterCreate(7, PublicFormComponent_Conditional_4_For_9_For_8_Template, 8, 3, "div", 13, _forTrack0);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const section_r15 = ctx.$implicit;
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(section_r15.name);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(section_r15.description);
    i0.ɵɵadvance();
    i0.ɵɵrepeater(section_r15.subsections);
} }
function PublicFormComponent_Conditional_4_Template(rf, ctx) { if (rf & 1) {
    const _r4 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "section", 6)(1, "span", 7);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "h1");
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "p");
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd()();
    i0.ɵɵconditionalCreate(7, PublicFormComponent_Conditional_4_Conditional_7_Template, 2, 1, "p", 8);
    i0.ɵɵrepeaterCreate(8, PublicFormComponent_Conditional_4_For_9_Template, 9, 2, "section", 9, _forTrack0);
    i0.ɵɵelementStart(10, "div", 10)(11, "button", 11);
    i0.ɵɵlistener("click", function PublicFormComponent_Conditional_4_Template_button_click_11_listener() { i0.ɵɵrestoreView(_r4); const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.submit()); });
    i0.ɵɵtext(12);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const current_r16 = ctx;
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r2.editing() ? "Edit database record" : "Admin data entry");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(current_r16.name);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(current_r16.description || "Complete the required information below.");
    i0.ɵɵadvance();
    i0.ɵɵconditional(ctx_r2.error() ? 7 : -1);
    i0.ɵɵadvance();
    i0.ɵɵrepeater(ctx_r2.activeSubsections());
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("disabled", ctx_r2.submitting());
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r2.submitting() ? "Saving\u2026" : ctx_r2.editing() ? "Save changes" : "Submit form", " ");
} }
export class PublicFormComponent {
    api = inject(ApiService);
    route = inject(ActivatedRoute);
    form = signal(null, ...(ngDevMode ? [{ debugName: "form" }] : /* istanbul ignore next */ []));
    responses = signal({}, ...(ngDevMode ? [{ debugName: "responses" }] : /* istanbul ignore next */ []));
    repeatableResponses = signal({}, ...(ngDevMode ? [{ debugName: "repeatableResponses" }] : /* istanbul ignore next */ []));
    options = signal({}, ...(ngDevMode ? [{ debugName: "options" }] : /* istanbul ignore next */ []));
    loading = signal(true, ...(ngDevMode ? [{ debugName: "loading" }] : /* istanbul ignore next */ []));
    submitting = signal(false, ...(ngDevMode ? [{ debugName: "submitting" }] : /* istanbul ignore next */ []));
    submission = signal(null, ...(ngDevMode ? [{ debugName: "submission" }] : /* istanbul ignore next */ []));
    error = signal('', ...(ngDevMode ? [{ debugName: "error" }] : /* istanbul ignore next */ []));
    editing = signal(false, ...(ngDevMode ? [{ debugName: "editing" }] : /* istanbul ignore next */ []));
    submissionPurpose = '';
    submissionId = '';
    constructor() {
        this.submissionPurpose = this.route.snapshot.paramMap.get('purpose') || '';
        this.submissionId = this.route.snapshot.paramMap.get('submissionId') || '';
        if (this.submissionId) {
            this.editing.set(true);
            this.api.formSubmission(this.submissionPurpose, this.submissionId).subscribe({
                next: ({ item }) => {
                    this.form.set(item.formSnapshot || null);
                    this.responses.set({ ...(item.responses || {}) });
                    this.repeatableResponses.set(structuredClone(item.repeatableResponses || {}));
                    this.initializeOptions();
                    this.loading.set(false);
                },
                error: (error) => {
                    this.error.set(error.error?.message || 'This submitted record is unavailable.');
                    this.loading.set(false);
                },
            });
            return;
        }
        this.api.form(this.route.snapshot.paramMap.get('formId') || '').subscribe({
            next: ({ item }) => {
                if ((item.purpose || 'admission') === 'admission' ||
                    item.status !== 'published' ||
                    !item.isActive) {
                    this.error.set('This data-entry form is unavailable.');
                    this.loading.set(false);
                    return;
                }
                this.form.set(item);
                const defaults = {};
                for (const field of this.fields(item)) {
                    if (field.defaultValue !== undefined && field.defaultValue !== null)
                        defaults[field.id] = field.defaultValue;
                }
                this.responses.set(defaults);
                this.initializeOptions();
                this.loading.set(false);
            },
            error: (error) => {
                this.error.set(error.error?.message || 'This application form is unavailable.');
                this.loading.set(false);
            },
        });
    }
    activeSubsections() {
        return (this.form()?.sections || [])
            .filter((section) => section.isActive)
            .map((section) => ({
            ...section,
            subsections: section.subsections.filter((subsection) => subsection.isActive !== false &&
                this.matches(subsection.visibilityCondition, this.responses())),
        }));
    }
    value(field, entry) {
        return (entry || this.responses())[field.id];
    }
    setValue(field, value, entry) {
        if (entry)
            entry[field.id] = value;
        else
            this.responses.update((current) => ({ ...current, [field.id]: value }));
        for (const dependent of this.fields(this.form()))
            if (dependent.dataSource?.parentFieldId === field.id) {
                if (entry)
                    entry[dependent.id] = '';
                else
                    this.responses.update((current) => ({ ...current, [dependent.id]: '' }));
                this.loadOptions(dependent, value ? String(value) : undefined);
            }
    }
    visible(field, entry) {
        return field.isActive && this.matches(field.visibilityCondition, entry || this.responses());
    }
    matches(condition, values) {
        if (!condition)
            return true;
        const current = values[condition.fieldId];
        const selected = Array.isArray(current) ? current : [current];
        const candidates = selected.flatMap((value) => {
            const option = Object.values(this.options())
                .flat()
                .find((item) => item._id === String(value ?? ''));
            return option ? [value, option.name, option.label] : [value];
        });
        const expected = String(condition.value ?? '')
            .trim()
            .toLowerCase();
        if (condition.operator === 'is-empty')
            return current == null || current === '';
        if (condition.operator === 'is-not-empty')
            return current != null && current !== '';
        if (condition.operator === 'not-equals')
            return !candidates.some((value) => String(value ?? '')
                .trim()
                .toLowerCase() === expected);
        if (condition.operator === 'contains')
            return candidates.some((value) => String(value ?? '')
                .trim()
                .toLowerCase()
                .includes(expected));
        return candidates.some((value) => String(value ?? '')
            .trim()
            .toLowerCase() === expected);
    }
    fieldOptions(field) {
        return this.options()[field.id] || [];
    }
    searchOptions(field, search) {
        this.loadOptions(field, this.parentValue(field), search);
    }
    entries(subsection) {
        return this.repeatableResponses()[subsection.id] || [];
    }
    addEntry(subsection) {
        if (subsection.maxEntries && this.entries(subsection).length >= subsection.maxEntries)
            return;
        this.repeatableResponses.update((current) => ({
            ...current,
            [subsection.id]: [...(current[subsection.id] || []), {}],
        }));
    }
    removeEntry(subsection, index) {
        this.repeatableResponses.update((current) => ({
            ...current,
            [subsection.id]: (current[subsection.id] || []).filter((_, itemIndex) => itemIndex !== index),
        }));
    }
    upload(field, file, entry) {
        const form = this.form();
        if (!form?._id)
            return;
        this.api.uploadAdminForm(form._id, field.id, file).subscribe({
            next: ({ file: stored }) => this.setValue(field, stored, entry),
            error: (error) => this.error.set(error.error?.message || 'The file could not be uploaded.'),
        });
    }
    submit() {
        const form = this.form();
        if (!form?._id || this.submitting())
            return;
        this.submitting.set(true);
        this.error.set('');
        const request = this.editing()
            ? this.api.updateFormSubmission(this.submissionPurpose, this.submissionId, this.responses(), this.repeatableResponses())
            : this.api.submitAdminForm(form._id, this.responses(), this.repeatableResponses());
        request.subscribe({
            next: ({ item }) => {
                this.submission.set(item);
                this.submitting.set(false);
            },
            error: (error) => {
                this.error.set(error.error?.errors?.map((item) => item.message).join(' ') ||
                    error.error?.message ||
                    'The form could not be submitted.');
                this.submitting.set(false);
            },
        });
    }
    startAnother() {
        const form = this.form();
        if (!form || this.editing())
            return;
        const defaults = {};
        for (const field of this.fields(form))
            if (field.defaultValue !== undefined && field.defaultValue !== null)
                defaults[field.id] = field.defaultValue;
        this.responses.set(defaults);
        this.repeatableResponses.set({});
        this.submission.set(null);
        this.error.set('');
    }
    initializeOptions() {
        for (const field of this.fields(this.form()))
            if (field.dataSource)
                this.loadOptions(field, field.dataSource.parentFieldId ? this.parentValue(field) : undefined);
    }
    loadOptions(field, parentId, search = '') {
        if (!field.dataSource)
            return;
        this.api.publicOptions(field.dataSource.masterTypeSlug, parentId, search).subscribe({
            next: ({ items }) => this.options.update((current) => ({ ...current, [field.id]: items })),
        });
    }
    parentValue(field) {
        const parentFieldId = field.dataSource?.parentFieldId;
        return parentFieldId ? String(this.responses()[parentFieldId] || '') : undefined;
    }
    fields(form) {
        return (form?.sections || [])
            .flatMap((section) => section.subsections)
            .flatMap((subsection) => subsection.fields)
            .filter((field) => field.isActive);
    }
    static ɵfac = function PublicFormComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || PublicFormComponent)(); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: PublicFormComponent, selectors: [["erp-admin-form-entry"]], decls: 5, vars: 1, consts: [[1, "erp-admission-page"], [1, "erp-card", "erp-loading-state"], [1, "erp-card", "erp-card--padded", "erp-admission-state"], [1, "erp-spinner"], ["type", "button", 1, "erp-button", "erp-button--primary"], ["type", "button", 1, "erp-button", "erp-button--primary", 3, "click"], [1, "erp-page-heading"], [1, "erp-page-eyebrow"], [1, "erp-notice", "erp-notice--error"], [1, "erp-card", "erp-card--padded"], [1, "erp-form-actions"], ["type", "button", 1, "erp-button", "erp-button--primary", 3, "click", "disabled"], [1, "erp-section-heading"], [1, "erp-field-stack"], [1, "erp-field-grid"], ["type", "button", 1, "erp-button", "erp-button--secondary", 3, "click"], ["type", "button", 1, "erp-button", "erp-button--danger", "erp-button--compact", 3, "click"], [3, "field", "modelValue", "options", "entryKey"], [3, "modelChanged", "optionSearch", "fileSelected", "uploadRemoved", "field", "modelValue", "options", "entryKey"]], template: function PublicFormComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "main", 0);
            i0.ɵɵconditionalCreate(1, PublicFormComponent_Conditional_1_Template, 4, 0, "section", 1)(2, PublicFormComponent_Conditional_2_Template, 7, 4, "section", 2)(3, PublicFormComponent_Conditional_3_Template, 5, 1, "section", 2)(4, PublicFormComponent_Conditional_4_Template, 13, 6);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            let tmp_0_0;
            i0.ɵɵadvance();
            i0.ɵɵconditional(ctx.loading() ? 1 : (tmp_0_0 = ctx.submission()) ? 2 : ctx.error() && !ctx.form() ? 3 : (tmp_0_0 = ctx.form()) ? 4 : -1, tmp_0_0);
        } }, dependencies: [DynamicFieldRendererComponent], encapsulation: 2, changeDetection: 0 });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PublicFormComponent, [{
        type: Component,
        args: [{ selector: 'erp-admin-form-entry', imports: [DynamicFieldRendererComponent], changeDetection: ChangeDetectionStrategy.OnPush, template: "<main class=\"erp-admission-page\">\n  @if (loading()) {\n    <section class=\"erp-card erp-loading-state\">\n      <div class=\"erp-spinner\"></div>\n      <p>Loading form\u2026</p>\n    </section>\n  } @else if (submission(); as submitted) {\n    <section class=\"erp-card erp-card--padded erp-admission-state\">\n      <h1>{{ editing() ? 'Record updated' : 'Form submitted' }}</h1>\n      <p>\n        {{ editing() ? 'The saved record has been updated.' : 'The response has been recorded.' }}\n      </p>\n      @if (submitted.applicationCode) {\n        <p>\n          Unique code: <strong>{{ submitted.applicationCode }}</strong>\n        </p>\n      }\n      @if (!editing()) {\n        <button class=\"erp-button erp-button--primary\" type=\"button\" (click)=\"startAnother()\">\n          Add another record\n        </button>\n      }\n    </section>\n  } @else if (error() && !form()) {\n    <section class=\"erp-card erp-card--padded erp-admission-state\">\n      <h1>Form unavailable</h1>\n      <p>{{ error() }}</p>\n    </section>\n  } @else if (form(); as current) {\n    <section class=\"erp-page-heading\">\n      <span class=\"erp-page-eyebrow\">{{\n        editing() ? 'Edit database record' : 'Admin data entry'\n      }}</span>\n      <h1>{{ current.name }}</h1>\n      <p>{{ current.description || 'Complete the required information below.' }}</p>\n    </section>\n    @if (error()) {\n      <p class=\"erp-notice erp-notice--error\">{{ error() }}</p>\n    }\n    @for (section of activeSubsections(); track section.id) {\n      <section class=\"erp-card erp-card--padded\">\n        <header class=\"erp-section-heading\">\n          <div>\n            <h2>{{ section.name }}</h2>\n            <p>{{ section.description }}</p>\n          </div>\n        </header>\n        @for (subsection of section.subsections; track subsection.id) {\n          <div class=\"erp-field-stack\">\n            <div>\n              <h3>{{ subsection.name }}</h3>\n              <p>{{ subsection.description }}</p>\n            </div>\n            @if (subsection.isRepeatable) {\n              @for (entry of entries(subsection); track $index; let entryIndex = $index) {\n                <article class=\"erp-card erp-card--padded\">\n                  <div class=\"erp-field-grid\">\n                    @for (field of subsection.fields; track field.id) {\n                      @if (visible(field, entry)) {\n                        <erp-dynamic-field-renderer\n                          [field]=\"field\"\n                          [modelValue]=\"value(field, entry)\"\n                          [options]=\"fieldOptions(field)\"\n                          [entryKey]=\"subsection.id + '-' + entryIndex\"\n                          (modelChanged)=\"setValue(field, $event, entry)\"\n                          (optionSearch)=\"searchOptions(field, $event)\"\n                          (fileSelected)=\"upload(field, $event, entry)\"\n                          (uploadRemoved)=\"setValue(field, '', entry)\"\n                        />\n                      }\n                    }\n                  </div>\n                  <button\n                    class=\"erp-button erp-button--danger erp-button--compact\"\n                    type=\"button\"\n                    (click)=\"removeEntry(subsection, entryIndex)\"\n                  >\n                    Remove\n                  </button>\n                </article>\n              }\n              <button\n                class=\"erp-button erp-button--secondary\"\n                type=\"button\"\n                (click)=\"addEntry(subsection)\"\n              >\n                Add {{ subsection.name }}\n              </button>\n            } @else {\n              <div class=\"erp-field-grid\">\n                @for (field of subsection.fields; track field.id) {\n                  @if (visible(field)) {\n                    <erp-dynamic-field-renderer\n                      [field]=\"field\"\n                      [modelValue]=\"value(field)\"\n                      [options]=\"fieldOptions(field)\"\n                      [entryKey]=\"subsection.id\"\n                      (modelChanged)=\"setValue(field, $event)\"\n                      (optionSearch)=\"searchOptions(field, $event)\"\n                      (fileSelected)=\"upload(field, $event)\"\n                      (uploadRemoved)=\"setValue(field, '')\"\n                    />\n                  }\n                }\n              </div>\n            }\n          </div>\n        }\n      </section>\n    }\n    <div class=\"erp-form-actions\">\n      <button\n        class=\"erp-button erp-button--primary\"\n        type=\"button\"\n        [disabled]=\"submitting()\"\n        (click)=\"submit()\"\n      >\n        {{ submitting() ? 'Saving\u2026' : editing() ? 'Save changes' : 'Submit form' }}\n      </button>\n    </div>\n  }\n</main>\n" }]
    }], () => [], null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(PublicFormComponent, { className: "PublicFormComponent", filePath: "frontend/src/app/features/public-form/public-form.component.ts", lineNumber: 19 }); })();
