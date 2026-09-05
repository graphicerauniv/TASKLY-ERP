import { CdkTrapFocus } from '@angular/cdk/a11y';
import { ChangeDetectionStrategy, Component, DestroyRef, computed, inject, signal, } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { LucideCircleAlert, LucideFilePlus2, LucideInbox, LucideLayoutTemplate, LucidePlus, LucideRefreshCw, LucideSearch, LucideX, } from '@lucide/angular';
import { ApiService } from '../../../../core/api.service';
import { AdminPageComponent } from '../../../../shared/ui/admin-page/admin-page.component';
import { CompactActionMenuComponent, } from '../../../../shared/ui/compact-action-menu/compact-action-menu.component';
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
const _c0 = () => [1, 2, 3, 4];
const _forTrack0 = ($index, $item) => $item._id || $item.name;
function FormsLibraryComponent_Conditional_39_Template(rf, ctx) { if (rf & 1) {
    const _r1 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 18);
    i0.ɵɵlistener("click", function FormsLibraryComponent_Conditional_39_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.search.set("")); });
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(1, "svg", 19);
    i0.ɵɵelementEnd();
} }
function FormsLibraryComponent_Conditional_61_For_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "tr", 20)(1, "td");
    i0.ɵɵelement(2, "span", 21);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "td");
    i0.ɵɵelement(4, "span", 22);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "td");
    i0.ɵɵelement(6, "span", 22);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "td");
    i0.ɵɵelement(8, "span", 23);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(9, "td");
    i0.ɵɵelement(10, "span", 24);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(11, "td");
    i0.ɵɵelement(12, "span", 23);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(13, "td");
    i0.ɵɵelement(14, "span", 25);
    i0.ɵɵelementEnd()();
} }
function FormsLibraryComponent_Conditional_61_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵrepeaterCreate(0, FormsLibraryComponent_Conditional_61_For_1_Template, 15, 0, "tr", 20, i0.ɵɵrepeaterTrackByIdentity);
} if (rf & 2) {
    i0.ɵɵrepeater(i0.ɵɵpureFunction0(0, _c0));
} }
function FormsLibraryComponent_Conditional_62_Template(rf, ctx) { if (rf & 1) {
    const _r3 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "tr")(1, "td", 26)(2, "div", 27)(3, "span", 28);
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(4, "svg", 29);
    i0.ɵɵelementEnd();
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(5, "h3");
    i0.ɵɵtext(6, "Forms could not be loaded");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "p");
    i0.ɵɵtext(8);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(9, "button", 30);
    i0.ɵɵlistener("click", function FormsLibraryComponent_Conditional_62_Template_button_click_9_listener() { i0.ɵɵrestoreView(_r3); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.load()); });
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(10, "svg", 31);
    i0.ɵɵtext(11, " Try again ");
    i0.ɵɵelementEnd()()()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(8);
    i0.ɵɵtextInterpolate(ctx_r1.error());
} }
function FormsLibraryComponent_Conditional_63_For_1_Template(rf, ctx) { if (rf & 1) {
    const _r6 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "tr")(1, "td")(2, "button", 32);
    i0.ɵɵlistener("click", function FormsLibraryComponent_Conditional_63_For_1_Template_button_click_2_listener() { const form_r7 = i0.ɵɵrestoreView(_r6).$implicit; const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.openBuilder(form_r7)); });
    i0.ɵɵelementStart(3, "span", 33);
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(4, "svg", 34);
    i0.ɵɵelementEnd();
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(5, "span")(6, "strong");
    i0.ɵɵtext(7);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "small");
    i0.ɵɵtext(9);
    i0.ɵɵelementEnd()()()();
    i0.ɵɵelementStart(10, "td");
    i0.ɵɵtext(11);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(12, "td")(13, "strong");
    i0.ɵɵtext(14);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(15, "small");
    i0.ɵɵtext(16);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(17, "td")(18, "span", 35);
    i0.ɵɵtext(19);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(20, "td")(21, "span", 36);
    i0.ɵɵtext(22);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(23, "td")(24, "span");
    i0.ɵɵtext(25);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(26, "td", 37)(27, "erp-compact-action-menu", 38);
    i0.ɵɵlistener("selected", function FormsLibraryComponent_Conditional_63_For_1_Template_erp_compact_action_menu_selected_27_listener($event) { const form_r7 = i0.ɵɵrestoreView(_r6).$implicit; const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.handleRowAction($event, form_r7)); });
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const form_r7 = ctx.$implicit;
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(7);
    i0.ɵɵtextInterpolate(form_r7.name);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(form_r7.description || form_r7.slug || "No description added");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r1.purposeLabel(form_r7));
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate2("", ctx_r1.sectionCount(form_r7), " section", ctx_r1.sectionCount(form_r7) === 1 ? "" : "s");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate2("", ctx_r1.fieldCount(form_r7), " active field", ctx_r1.fieldCount(form_r7) === 1 ? "" : "s");
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1("v", form_r7.version || 1);
    i0.ɵɵadvance(2);
    i0.ɵɵclassProp("erp-status--draft", form_r7.status === "draft")("erp-status--warning", form_r7.status === "archived");
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r1.statusLabel(form_r7), " ");
    i0.ɵɵadvance(2);
    i0.ɵɵclassProp("forms-library__inactive", !form_r7.isActive);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", form_r7.isActive ? "Active" : "Inactive", " ");
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("items", ctx_r1.rowActions(form_r7));
} }
function FormsLibraryComponent_Conditional_63_ForEmpty_2_Conditional_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(0, "svg", 40);
} }
function FormsLibraryComponent_Conditional_63_ForEmpty_2_Conditional_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(0, "svg", 41);
} }
function FormsLibraryComponent_Conditional_63_ForEmpty_2_Conditional_10_Template(rf, ctx) { if (rf & 1) {
    const _r4 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 30);
    i0.ɵɵlistener("click", function FormsLibraryComponent_Conditional_63_ForEmpty_2_Conditional_10_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r4); const ctx_r1 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r1.search.set("")); });
    i0.ɵɵtext(1, " Clear search ");
    i0.ɵɵelementEnd();
} }
function FormsLibraryComponent_Conditional_63_ForEmpty_2_Conditional_11_Template(rf, ctx) { if (rf & 1) {
    const _r5 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 44);
    i0.ɵɵlistener("click", function FormsLibraryComponent_Conditional_63_ForEmpty_2_Conditional_11_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r5); const ctx_r1 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r1.openCreate()); });
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(1, "svg", 45);
    i0.ɵɵtext(2, " New form ");
    i0.ɵɵelementEnd();
} }
function FormsLibraryComponent_Conditional_63_ForEmpty_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "tr")(1, "td", 26)(2, "div", 39)(3, "span", 28);
    i0.ɵɵconditionalCreate(4, FormsLibraryComponent_Conditional_63_ForEmpty_2_Conditional_4_Template, 1, 0, ":svg:svg", 40)(5, FormsLibraryComponent_Conditional_63_ForEmpty_2_Conditional_5_Template, 1, 0, ":svg:svg", 41);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "h3");
    i0.ɵɵtext(7);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "p");
    i0.ɵɵtext(9);
    i0.ɵɵelementEnd();
    i0.ɵɵconditionalCreate(10, FormsLibraryComponent_Conditional_63_ForEmpty_2_Conditional_10_Template, 2, 0, "button", 42)(11, FormsLibraryComponent_Conditional_63_ForEmpty_2_Conditional_11_Template, 3, 0, "button", 43);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(4);
    i0.ɵɵconditional(ctx_r1.search() ? 4 : 5);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(ctx_r1.search() ? "No matching forms" : "No admission forms yet");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", ctx_r1.search() ? "Try a broader form name or status." : "Create the first form before configuring application fields.", " ");
    i0.ɵɵadvance();
    i0.ɵɵconditional(ctx_r1.search() ? 10 : 11);
} }
function FormsLibraryComponent_Conditional_63_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵrepeaterCreate(0, FormsLibraryComponent_Conditional_63_For_1_Template, 28, 17, "tr", null, _forTrack0, false, FormsLibraryComponent_Conditional_63_ForEmpty_2_Template, 12, 4, "tr");
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵrepeater(ctx_r1.filteredItems());
} }
function FormsLibraryComponent_Conditional_64_Conditional_32_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 61);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r1.createError());
} }
function FormsLibraryComponent_Conditional_64_Template(rf, ctx) { if (rf & 1) {
    const _r8 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 17)(1, "button", 46);
    i0.ɵɵlistener("click", function FormsLibraryComponent_Conditional_64_Template_button_click_1_listener() { i0.ɵɵrestoreView(_r8); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.closeCreate()); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(2, "section", 47)(3, "header", 48)(4, "span", 49);
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(5, "svg", 50);
    i0.ɵɵelementEnd();
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(6, "div")(7, "small");
    i0.ɵɵtext(8, "Form configuration");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(9, "h2", 51);
    i0.ɵɵtext(10, "Create form");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(11, "p");
    i0.ɵɵtext(12, "Start with an empty draft and continue in the builder.");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(13, "button", 52);
    i0.ɵɵlistener("click", function FormsLibraryComponent_Conditional_64_Template_button_click_13_listener() { i0.ɵɵrestoreView(_r8); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.closeCreate()); });
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(14, "svg", 53);
    i0.ɵɵelementEnd()();
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(15, "div", 54)(16, "label")(17, "span");
    i0.ɵɵtext(18, "Form name");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(19, "input", 55);
    i0.ɵɵtwoWayListener("ngModelChange", function FormsLibraryComponent_Conditional_64_Template_input_ngModelChange_19_listener($event) { i0.ɵɵrestoreView(_r8); const ctx_r1 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r1.newFormName, $event) || (ctx_r1.newFormName = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵlistener("keyup.enter", function FormsLibraryComponent_Conditional_64_Template_input_keyup_enter_19_listener() { i0.ɵɵrestoreView(_r8); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.createForm()); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(20, "label")(21, "span");
    i0.ɵɵtext(22, "Form purpose");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(23, "select", 56);
    i0.ɵɵtwoWayListener("ngModelChange", function FormsLibraryComponent_Conditional_64_Template_select_ngModelChange_23_listener($event) { i0.ɵɵrestoreView(_r8); const ctx_r1 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r1.newFormPurpose, $event) || (ctx_r1.newFormPurpose = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementStart(24, "option", 57);
    i0.ɵɵtext(25, "Student admission");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(26, "option", 58);
    i0.ɵɵtext(27, "Faculty application");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(28, "option", 59);
    i0.ɵɵtext(29, "Employee application");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(30, "option", 60);
    i0.ɵɵtext(31, "General/custom form");
    i0.ɵɵelementEnd()()();
    i0.ɵɵconditionalCreate(32, FormsLibraryComponent_Conditional_64_Conditional_32_Template, 2, 1, "p", 61);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(33, "footer", 62)(34, "button", 63);
    i0.ɵɵlistener("click", function FormsLibraryComponent_Conditional_64_Template_button_click_34_listener() { i0.ɵɵrestoreView(_r8); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.closeCreate()); });
    i0.ɵɵtext(35, " Cancel ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(36, "button", 64);
    i0.ɵɵlistener("click", function FormsLibraryComponent_Conditional_64_Template_button_click_36_listener() { i0.ɵɵrestoreView(_r8); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.createForm()); });
    i0.ɵɵtext(37);
    i0.ɵɵelementEnd()()()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("cdkTrapFocusAutoCapture", true);
    i0.ɵɵadvance(17);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r1.newFormName);
    i0.ɵɵadvance(4);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r1.newFormPurpose);
    i0.ɵɵadvance(9);
    i0.ɵɵconditional(ctx_r1.createError() ? 32 : -1);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("disabled", ctx_r1.creating());
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("disabled", ctx_r1.creating() || !ctx_r1.newFormName.trim());
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r1.creating() ? "Creating\u2026" : "Create and open builder", " ");
} }
export class FormsLibraryComponent {
    api = inject(ApiService);
    router = inject(Router);
    destroyRef = inject(DestroyRef);
    items = signal([], ...(ngDevMode ? [{ debugName: "items" }] : /* istanbul ignore next */ []));
    loading = signal(true, ...(ngDevMode ? [{ debugName: "loading" }] : /* istanbul ignore next */ []));
    error = signal('', ...(ngDevMode ? [{ debugName: "error" }] : /* istanbul ignore next */ []));
    search = signal('', ...(ngDevMode ? [{ debugName: "search" }] : /* istanbul ignore next */ []));
    createOpen = signal(false, ...(ngDevMode ? [{ debugName: "createOpen" }] : /* istanbul ignore next */ []));
    creating = signal(false, ...(ngDevMode ? [{ debugName: "creating" }] : /* istanbul ignore next */ []));
    createError = signal('', ...(ngDevMode ? [{ debugName: "createError" }] : /* istanbul ignore next */ []));
    filteredItems = computed(() => {
        const query = this.search().trim().toLowerCase();
        if (!query)
            return this.items();
        return this.items().filter((form) => [form.name, form.description, form.slug, form.status]
            .filter(Boolean)
            .some((value) => String(value).toLowerCase().includes(query)));
    }, ...(ngDevMode ? [{ debugName: "filteredItems" }] : /* istanbul ignore next */ []));
    publishedCount = computed(() => this.items().filter((form) => form.status === 'published').length, ...(ngDevMode ? [{ debugName: "publishedCount" }] : /* istanbul ignore next */ []));
    draftCount = computed(() => this.items().filter((form) => form.status === 'draft').length, ...(ngDevMode ? [{ debugName: "draftCount" }] : /* istanbul ignore next */ []));
    newFormName = '';
    newFormPurpose = 'admission';
    constructor() {
        this.load();
    }
    load() {
        this.loading.set(true);
        this.error.set('');
        this.api
            .forms()
            .pipe(takeUntilDestroyed(this.destroyRef))
            .subscribe({
            next: ({ items }) => {
                this.items.set(items);
                this.loading.set(false);
            },
            error: (error) => {
                this.error.set(error.error?.message || 'Forms could not be loaded.');
                this.loading.set(false);
            },
        });
    }
    openCreate() {
        this.newFormName = '';
        this.newFormPurpose = 'admission';
        this.createError.set('');
        this.createOpen.set(true);
    }
    closeCreate() {
        if (this.creating())
            return;
        this.createOpen.set(false);
        this.createError.set('');
    }
    createForm() {
        const name = this.newFormName.trim();
        if (!name || this.creating())
            return;
        this.creating.set(true);
        this.createError.set('');
        this.api
            .createForm({
            name,
            description: '',
            purpose: this.newFormPurpose,
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
            .pipe(takeUntilDestroyed(this.destroyRef))
            .subscribe({
            next: ({ item }) => {
                this.creating.set(false);
                this.createOpen.set(false);
                void this.openBuilder(item);
            },
            error: (error) => {
                this.createError.set(error.error?.message || 'The form could not be created.');
                this.creating.set(false);
            },
        });
    }
    handleRowAction(action, form) {
        if (action === 'edit')
            void this.openBuilder(form);
        if (action === 'fill' && form._id)
            void this.router.navigate(['/admin/forms', form._id, 'fill']);
    }
    rowActions(form) {
        const actions = [{ id: 'edit', label: 'Open in builder', icon: 'edit' }];
        if ((form.purpose || 'admission') !== 'admission' && form.status === 'published')
            actions.push({ id: 'fill', label: 'Fill form', icon: 'view' });
        return actions;
    }
    openBuilder(form) {
        if (!form._id)
            return Promise.resolve(false);
        return this.router.navigate(['/admin/admissions/forms', form._id, 'edit']);
    }
    sectionCount(form) {
        return form.sections.filter((section) => section.isActive).length;
    }
    fieldCount(form) {
        return form.sections.reduce((total, section) => total +
            section.subsections.reduce((subTotal, subsection) => subTotal + subsection.fields.filter((field) => field.isActive).length, 0), 0);
    }
    statusLabel(form) {
        if (form.status === 'published')
            return 'Published';
        if (form.status === 'archived')
            return 'Archived';
        return 'Draft';
    }
    purposeLabel(form) {
        const purpose = form.purpose || 'admission';
        return {
            admission: 'Student admission',
            faculty: 'Faculty application',
            employee: 'Employee application',
            general: 'General form',
        }[purpose];
    }
    static ɵfac = function FormsLibraryComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || FormsLibraryComponent)(); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: FormsLibraryComponent, selectors: [["erp-forms-library"]], decls: 65, vars: 8, consts: [["eyebrow", "Forms / Configuration", "title", "Forms", "description", "Create admission, faculty, employee and general application forms.", "variant", "compact", "layout", "collection"], ["page-actions", ""], ["type", "button", 1, "erp-button", "erp-button--primary", 3, "click"], ["lucidePlus", "", "size", "16", "aria-hidden", "true"], ["aria-label", "Admission form summary", 1, "forms-library__summary"], [1, "erp-card"], ["aria-labelledby", "forms-library-title", 1, "erp-card", "erp-table-shell", "forms-library__directory"], [1, "erp-table-toolbar", "forms-library__toolbar"], ["id", "forms-library-title"], [1, "forms-library__search"], [1, "erp-sr-only"], ["lucideSearch", "", "size", "16", "aria-hidden", "true"], ["type", "search", "placeholder", "Search forms", 3, "ngModelChange", "ngModel"], ["type", "button", "aria-label", "Clear form search"], [1, "erp-table-shell__scroll"], ["scope", "col"], ["scope", "col", 1, "erp-table-shell__actions"], [1, "modal-backdrop", "forms-library__dialog-layer"], ["type", "button", "aria-label", "Clear form search", 3, "click"], ["lucideX", "", "size", "14", "aria-hidden", "true"], ["aria-hidden", "true"], [1, "erp-skeleton", "forms-library__skeleton-name"], [1, "erp-skeleton", "forms-library__skeleton-meta"], [1, "erp-skeleton", "forms-library__skeleton-short"], [1, "erp-skeleton", "forms-library__skeleton-status"], [1, "erp-skeleton", "forms-library__skeleton-action"], ["colspan", "7"], ["role", "alert", 1, "forms-library__state"], [1, "erp-empty-panel__icon"], ["lucideCircleAlert", "", "size", "20", "aria-hidden", "true"], ["type", "button", 1, "erp-button", "erp-button--secondary", "erp-button--compact", 3, "click"], ["lucideRefreshCw", "", "size", "15", "aria-hidden", "true"], ["type", "button", 1, "forms-library__form-link", 3, "click"], [1, "forms-library__form-icon"], ["lucideLayoutTemplate", "", "size", "17", "aria-hidden", "true"], [1, "forms-library__version"], [1, "erp-status"], [1, "erp-table-shell__actions"], [3, "selected", "items"], [1, "forms-library__state"], ["lucideInbox", "", "size", "20", "aria-hidden", "true"], ["lucideFilePlus2", "", "size", "20", "aria-hidden", "true"], ["type", "button", 1, "erp-button", "erp-button--secondary", "erp-button--compact"], ["type", "button", 1, "erp-button", "erp-button--primary", "erp-button--compact"], ["type", "button", 1, "erp-button", "erp-button--primary", "erp-button--compact", 3, "click"], ["lucidePlus", "", "size", "15", "aria-hidden", "true"], ["type", "button", "tabindex", "-1", "aria-label", "Close new form dialog", 1, "backdrop-close", 3, "click"], ["role", "dialog", "aria-modal", "true", "aria-labelledby", "new-form-dialog-title", "cdkTrapFocus", "", 1, "modal", "forms-library__dialog", 3, "cdkTrapFocusAutoCapture"], [1, "forms-library__dialog-header"], [1, "forms-library__dialog-icon"], ["lucideFilePlus2", "", "size", "19", "aria-hidden", "true"], ["id", "new-form-dialog-title"], ["type", "button", "aria-label", "Close new form dialog", 3, "click"], ["lucideX", "", "size", "16", "aria-hidden", "true"], [1, "forms-library__dialog-body"], ["type", "text", "maxlength", "120", "autocomplete", "off", "placeholder", "Example: Undergraduate admission 2026", 1, "erp-control", 3, "ngModelChange", "keyup.enter", "ngModel"], [1, "erp-control", 3, "ngModelChange", "ngModel"], ["value", "admission"], ["value", "faculty"], ["value", "employee"], ["value", "general"], ["role", "alert", 1, "erp-notice", "erp-notice--error"], [1, "forms-library__dialog-footer"], ["type", "button", 1, "erp-button", "erp-button--secondary", 3, "click", "disabled"], ["type", "button", 1, "erp-button", "erp-button--primary", 3, "click", "disabled"]], template: function FormsLibraryComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "erp-admin-page", 0)(1, "div", 1)(2, "button", 2);
            i0.ɵɵlistener("click", function FormsLibraryComponent_Template_button_click_2_listener() { return ctx.openCreate(); });
            i0.ɵɵnamespaceSVG();
            i0.ɵɵelement(3, "svg", 3);
            i0.ɵɵtext(4, " New form ");
            i0.ɵɵelementEnd()();
            i0.ɵɵnamespaceHTML();
            i0.ɵɵelementStart(5, "section", 4)(6, "article", 5)(7, "span");
            i0.ɵɵtext(8, "Total forms");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(9, "strong");
            i0.ɵɵtext(10);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(11, "small");
            i0.ɵɵtext(12, "All configured forms");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(13, "article", 5)(14, "span");
            i0.ɵɵtext(15, "Published");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(16, "strong");
            i0.ɵɵtext(17);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(18, "small");
            i0.ɵɵtext(19, "Available to application flows");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(20, "article", 5)(21, "span");
            i0.ɵɵtext(22, "Drafts");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(23, "strong");
            i0.ɵɵtext(24);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(25, "small");
            i0.ɵɵtext(26, "Still being configured");
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(27, "section", 6)(28, "header", 7)(29, "div")(30, "h2", 8);
            i0.ɵɵtext(31, "Forms library");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(32, "p");
            i0.ɵɵtext(33, "Open a form in the builder to manage its structure and publishing state.");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(34, "label", 9)(35, "span", 10);
            i0.ɵɵtext(36, "Search admission forms");
            i0.ɵɵelementEnd();
            i0.ɵɵnamespaceSVG();
            i0.ɵɵelement(37, "svg", 11);
            i0.ɵɵnamespaceHTML();
            i0.ɵɵelementStart(38, "input", 12);
            i0.ɵɵlistener("ngModelChange", function FormsLibraryComponent_Template_input_ngModelChange_38_listener($event) { return ctx.search.set($event); });
            i0.ɵɵelementEnd();
            i0.ɵɵconditionalCreate(39, FormsLibraryComponent_Conditional_39_Template, 2, 0, "button", 13);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(40, "div", 14)(41, "table")(42, "caption", 10);
            i0.ɵɵtext(43, " Form configurations ");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(44, "thead")(45, "tr")(46, "th", 15);
            i0.ɵɵtext(47, "Form");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(48, "th", 15);
            i0.ɵɵtext(49, "Purpose");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(50, "th", 15);
            i0.ɵɵtext(51, "Structure");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(52, "th", 15);
            i0.ɵɵtext(53, "Version");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(54, "th", 15);
            i0.ɵɵtext(55, "Status");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(56, "th", 15);
            i0.ɵɵtext(57, "Availability");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(58, "th", 16);
            i0.ɵɵtext(59, "Actions");
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(60, "tbody");
            i0.ɵɵconditionalCreate(61, FormsLibraryComponent_Conditional_61_Template, 2, 1)(62, FormsLibraryComponent_Conditional_62_Template, 12, 1, "tr")(63, FormsLibraryComponent_Conditional_63_Template, 3, 1);
            i0.ɵɵelementEnd()()()()();
            i0.ɵɵconditionalCreate(64, FormsLibraryComponent_Conditional_64_Template, 38, 7, "div", 17);
        } if (rf & 2) {
            i0.ɵɵadvance(10);
            i0.ɵɵtextInterpolate(ctx.items().length);
            i0.ɵɵadvance(7);
            i0.ɵɵtextInterpolate(ctx.publishedCount());
            i0.ɵɵadvance(7);
            i0.ɵɵtextInterpolate(ctx.draftCount());
            i0.ɵɵadvance(14);
            i0.ɵɵproperty("ngModel", ctx.search());
            i0.ɵɵadvance();
            i0.ɵɵconditional(ctx.search() ? 39 : -1);
            i0.ɵɵadvance(2);
            i0.ɵɵattribute("aria-busy", ctx.loading());
            i0.ɵɵadvance(20);
            i0.ɵɵconditional(ctx.loading() ? 61 : ctx.error() ? 62 : 63);
            i0.ɵɵadvance(3);
            i0.ɵɵconditional(ctx.createOpen() ? 64 : -1);
        } }, dependencies: [AdminPageComponent,
            CdkTrapFocus,
            CompactActionMenuComponent,
            FormsModule, i1.NgSelectOption, i1.ɵNgSelectMultipleOption, i1.DefaultValueAccessor, i1.SelectControlValueAccessor, i1.NgControlStatus, i1.MaxLengthValidator, i1.NgModel, LucideCircleAlert,
            LucideFilePlus2,
            LucideInbox,
            LucideLayoutTemplate,
            LucidePlus,
            LucideRefreshCw,
            LucideSearch,
            LucideX], styles: ["[_nghost-%COMP%] {\n  display: block;\n}\n\n.forms-library__summary[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, minmax(0, 1fr));\n  gap: 0;\n  margin-bottom: var(--erp-space-2);\n  overflow: hidden;\n  background: var(--erp-surface-raised);\n  border: 1px solid var(--erp-border-default);\n  border-radius: var(--erp-radius-card);\n}\n\n.forms-library__summary[_ngcontent-%COMP%]   article[_ngcontent-%COMP%] {\n  display: flex;\n  min-height: 42px;\n  align-items: center;\n  gap: var(--erp-space-2);\n  padding: var(--erp-space-2) var(--erp-space-3);\n  border: 0;\n  border-right: 1px solid var(--erp-border-subtle);\n  border-radius: 0;\n  box-shadow: none;\n}\n\n.forms-library__summary[_ngcontent-%COMP%]   article[_ngcontent-%COMP%]:last-child {\n  border-right: 0;\n}\n\n.forms-library__summary[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], \n.forms-library__summary[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  color: var(--erp-text-muted);\n  font-size: var(--erp-font-caption);\n}\n\n.forms-library__summary[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  order: -1;\n  color: var(--erp-text-heading);\n  font-size: var(--erp-font-label);\n  font-weight: var(--erp-weight-semibold);\n  line-height: var(--erp-line-page-title);\n}\n\n.forms-library__summary[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  display: none;\n}\n\n.forms-library__directory[_ngcontent-%COMP%] {\n  overflow: hidden;\n}\n\n.forms-library__toolbar[_ngcontent-%COMP%] {\n  align-items: center;\n}\n\n.forms-library__toolbar[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], \n.forms-library__toolbar[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n}\n\n.forms-library__toolbar[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  color: var(--erp-text-heading);\n  font-size: var(--erp-font-panel-title);\n  font-weight: var(--erp-weight-semibold);\n}\n\n.forms-library__toolbar[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin-top: var(--erp-space-1);\n  color: var(--erp-text-muted);\n  font-size: var(--erp-font-caption);\n}\n\n.forms-library__search[_ngcontent-%COMP%] {\n  display: flex;\n  width: min(20rem, 100%);\n  min-height: var(--erp-control-height);\n  align-items: center;\n  gap: var(--erp-space-2);\n  padding: 0 var(--erp-space-2);\n  color: var(--erp-text-muted);\n  background: var(--erp-input-bg);\n  border: 1px solid var(--erp-input-border);\n  border-radius: var(--erp-radius-control);\n}\n\n.forms-library__search[_ngcontent-%COMP%]:focus-within {\n  border-color: var(--erp-input-focus-border);\n  box-shadow: 0 0 0 var(--erp-focus-ring-width) var(--erp-focus-ring);\n}\n\n.forms-library__search[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  min-width: 0;\n  flex: 1;\n  padding: 0;\n  color: var(--erp-text-body);\n  background: transparent;\n  border: 0;\n  outline: 0;\n}\n\n.forms-library__search[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  display: inline-grid;\n  width: var(--erp-control-height-compact);\n  height: var(--erp-control-height-compact);\n  place-items: center;\n  padding: 0;\n  color: var(--erp-text-muted);\n  background: transparent;\n  border: 0;\n  border-radius: var(--erp-radius-control);\n}\n\n.forms-library__directory[_ngcontent-%COMP%]   table[_ngcontent-%COMP%] {\n  min-width: 50rem;\n}\n\n.forms-library__form-link[_ngcontent-%COMP%] {\n  display: flex;\n  width: 100%;\n  min-width: 15rem;\n  align-items: center;\n  gap: var(--erp-space-2);\n  padding: 0;\n  color: inherit;\n  text-align: left;\n  background: transparent;\n  border: 0;\n}\n\n.forms-library__form-link[_ngcontent-%COMP%]:hover   strong[_ngcontent-%COMP%] {\n  color: var(--erp-text-link);\n  text-decoration: underline;\n}\n\n.forms-library__form-icon[_ngcontent-%COMP%], \n.forms-library__dialog-icon[_ngcontent-%COMP%] {\n  display: inline-grid;\n  width: var(--erp-control-height);\n  height: var(--erp-control-height);\n  flex: 0 0 auto;\n  place-items: center;\n  color: var(--erp-blue-700);\n  background: var(--erp-blue-50);\n  border-radius: var(--erp-radius-control);\n}\n\n.forms-library__form-link[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%]:last-child {\n  display: grid;\n  min-width: 0;\n  gap: var(--erp-space-1);\n}\n\n.forms-library__form-link[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%], \n.forms-library__directory[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]    > strong[_ngcontent-%COMP%] {\n  color: var(--erp-text-heading);\n  font-size: var(--erp-font-table);\n  font-weight: var(--erp-weight-semibold);\n}\n\n.forms-library__form-link[_ngcontent-%COMP%]   small[_ngcontent-%COMP%], \n.forms-library__directory[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]    > small[_ngcontent-%COMP%] {\n  display: block;\n  overflow: hidden;\n  max-width: 24rem;\n  color: var(--erp-text-muted);\n  font-size: var(--erp-font-caption);\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n\n.forms-library__version[_ngcontent-%COMP%] {\n  color: var(--erp-text-body);\n  font-family: var(--erp-font-mono);\n  font-size: var(--erp-font-table);\n}\n\n.forms-library__inactive[_ngcontent-%COMP%] {\n  color: var(--erp-text-muted);\n}\n\n.forms-library__state[_ngcontent-%COMP%] {\n  display: grid;\n  min-height: var(--erp-table-state-min-height);\n  justify-items: center;\n  align-content: center;\n  gap: var(--erp-space-2);\n  padding: var(--erp-space-6);\n  color: var(--erp-text-muted);\n  text-align: center;\n}\n\n.forms-library__state[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], \n.forms-library__state[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n}\n\n.forms-library__state[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  color: var(--erp-text-heading);\n  font-size: var(--erp-font-panel-title);\n}\n\n.forms-library__state[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  max-width: var(--erp-state-content-width);\n  font-size: var(--erp-font-caption);\n}\n\n.forms-library__skeleton-name[_ngcontent-%COMP%] {\n  width: 15rem;\n}\n\n.forms-library__skeleton-meta[_ngcontent-%COMP%] {\n  width: 8rem;\n}\n\n.forms-library__skeleton-short[_ngcontent-%COMP%] {\n  width: 4rem;\n}\n\n.forms-library__skeleton-status[_ngcontent-%COMP%] {\n  width: 5rem;\n}\n\n.forms-library__skeleton-action[_ngcontent-%COMP%] {\n  width: var(--erp-control-height-compact);\n}\n\n.forms-library__dialog-layer[_ngcontent-%COMP%] {\n  padding: var(--erp-space-4);\n}\n\n.forms-library__dialog[_ngcontent-%COMP%] {\n  width: min(30rem, 100%);\n  overflow: hidden;\n}\n\n.forms-library__dialog-header[_ngcontent-%COMP%], \n.forms-library__dialog-footer[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n\n.forms-library__dialog-header[_ngcontent-%COMP%] {\n  gap: var(--erp-space-3);\n  padding: var(--erp-space-4);\n  border-bottom: 1px solid var(--erp-border-subtle);\n}\n\n.forms-library__dialog-header[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  min-width: 0;\n  flex: 1;\n}\n\n.forms-library__dialog-header[_ngcontent-%COMP%]   small[_ngcontent-%COMP%], \n.forms-library__dialog-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], \n.forms-library__dialog-header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n}\n\n.forms-library__dialog-header[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  color: var(--erp-text-muted);\n  font-size: var(--erp-font-caption);\n}\n\n.forms-library__dialog-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  color: var(--erp-text-heading);\n  font-size: var(--erp-font-section-title);\n  line-height: var(--erp-line-section-title);\n}\n\n.forms-library__dialog-header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: var(--erp-text-muted);\n  font-size: var(--erp-font-caption);\n}\n\n.forms-library__dialog-header[_ngcontent-%COMP%]    > button[_ngcontent-%COMP%] {\n  display: inline-grid;\n  width: var(--erp-control-height-compact);\n  height: var(--erp-control-height-compact);\n  place-items: center;\n  padding: 0;\n  color: var(--erp-text-muted);\n  background: transparent;\n  border: 0;\n  border-radius: var(--erp-radius-control);\n}\n\n.forms-library__dialog-body[_ngcontent-%COMP%] {\n  padding: var(--erp-space-4);\n}\n\n.forms-library__dialog-body[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: grid;\n  gap: var(--erp-space-1);\n  color: var(--erp-text-muted);\n  font-size: var(--erp-font-caption);\n  font-weight: var(--erp-weight-semibold);\n}\n\n.forms-library__dialog-body[_ngcontent-%COMP%]   .erp-notice[_ngcontent-%COMP%] {\n  margin-top: var(--erp-space-3);\n}\n\n.forms-library__dialog-footer[_ngcontent-%COMP%] {\n  justify-content: flex-end;\n  gap: var(--erp-space-2);\n  padding: var(--erp-space-3) var(--erp-space-4);\n  border-top: 1px solid var(--erp-border-subtle);\n}\n\n@media (max-width: 48rem) {\n  .forms-library__summary[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(3, minmax(7rem, 1fr));\n    overflow-x: auto;\n  }\n\n  .forms-library__toolbar[_ngcontent-%COMP%] {\n    align-items: stretch;\n    flex-direction: column;\n  }\n\n  .forms-library__search[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n\n  .forms-library__dialog-layer[_ngcontent-%COMP%] {\n    padding: 0;\n    align-items: end;\n  }\n\n  .forms-library__dialog[_ngcontent-%COMP%] {\n    width: 100%;\n    max-width: none;\n    border-radius: var(--erp-radius-overlay) var(--erp-radius-overlay) 0 0;\n  }\n\n  .forms-library__dialog-footer[_ngcontent-%COMP%]   .erp-button[_ngcontent-%COMP%] {\n    flex: 1;\n  }\n}"], changeDetection: 0 });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(FormsLibraryComponent, [{
        type: Component,
        args: [{ selector: 'erp-forms-library', imports: [
                    AdminPageComponent,
                    CdkTrapFocus,
                    CompactActionMenuComponent,
                    FormsModule,
                    LucideCircleAlert,
                    LucideFilePlus2,
                    LucideInbox,
                    LucideLayoutTemplate,
                    LucidePlus,
                    LucideRefreshCw,
                    LucideSearch,
                    LucideX,
                ], changeDetection: ChangeDetectionStrategy.OnPush, template: "<erp-admin-page\n  eyebrow=\"Forms / Configuration\"\n  title=\"Forms\"\n  description=\"Create admission, faculty, employee and general application forms.\"\n  variant=\"compact\"\n  layout=\"collection\"\n>\n  <div page-actions>\n    <button class=\"erp-button erp-button--primary\" type=\"button\" (click)=\"openCreate()\">\n      <svg lucidePlus size=\"16\" aria-hidden=\"true\"></svg>\n      New form\n    </button>\n  </div>\n\n  <section class=\"forms-library__summary\" aria-label=\"Admission form summary\">\n    <article class=\"erp-card\">\n      <span>Total forms</span>\n      <strong>{{ items().length }}</strong>\n      <small>All configured forms</small>\n    </article>\n    <article class=\"erp-card\">\n      <span>Published</span>\n      <strong>{{ publishedCount() }}</strong>\n      <small>Available to application flows</small>\n    </article>\n    <article class=\"erp-card\">\n      <span>Drafts</span>\n      <strong>{{ draftCount() }}</strong>\n      <small>Still being configured</small>\n    </article>\n  </section>\n\n  <section\n    class=\"erp-card erp-table-shell forms-library__directory\"\n    aria-labelledby=\"forms-library-title\"\n  >\n    <header class=\"erp-table-toolbar forms-library__toolbar\">\n      <div>\n        <h2 id=\"forms-library-title\">Forms library</h2>\n        <p>Open a form in the builder to manage its structure and publishing state.</p>\n      </div>\n      <label class=\"forms-library__search\">\n        <span class=\"erp-sr-only\">Search admission forms</span>\n        <svg lucideSearch size=\"16\" aria-hidden=\"true\"></svg>\n        <input\n          type=\"search\"\n          [ngModel]=\"search()\"\n          (ngModelChange)=\"search.set($event)\"\n          placeholder=\"Search forms\"\n        />\n        @if (search()) {\n          <button type=\"button\" aria-label=\"Clear form search\" (click)=\"search.set('')\">\n            <svg lucideX size=\"14\" aria-hidden=\"true\"></svg>\n          </button>\n        }\n      </label>\n    </header>\n\n    <div class=\"erp-table-shell__scroll\">\n      <table [attr.aria-busy]=\"loading()\">\n        <caption class=\"erp-sr-only\">\n          Form configurations\n        </caption>\n        <thead>\n          <tr>\n            <th scope=\"col\">Form</th>\n            <th scope=\"col\">Purpose</th>\n            <th scope=\"col\">Structure</th>\n            <th scope=\"col\">Version</th>\n            <th scope=\"col\">Status</th>\n            <th scope=\"col\">Availability</th>\n            <th class=\"erp-table-shell__actions\" scope=\"col\">Actions</th>\n          </tr>\n        </thead>\n        <tbody>\n          @if (loading()) {\n            @for (row of [1, 2, 3, 4]; track row) {\n              <tr aria-hidden=\"true\">\n                <td><span class=\"erp-skeleton forms-library__skeleton-name\"></span></td>\n                <td><span class=\"erp-skeleton forms-library__skeleton-meta\"></span></td>\n                <td><span class=\"erp-skeleton forms-library__skeleton-meta\"></span></td>\n                <td><span class=\"erp-skeleton forms-library__skeleton-short\"></span></td>\n                <td><span class=\"erp-skeleton forms-library__skeleton-status\"></span></td>\n                <td><span class=\"erp-skeleton forms-library__skeleton-short\"></span></td>\n                <td><span class=\"erp-skeleton forms-library__skeleton-action\"></span></td>\n              </tr>\n            }\n          } @else if (error()) {\n            <tr>\n              <td colspan=\"7\">\n                <div class=\"forms-library__state\" role=\"alert\">\n                  <span class=\"erp-empty-panel__icon\">\n                    <svg lucideCircleAlert size=\"20\" aria-hidden=\"true\"></svg>\n                  </span>\n                  <h3>Forms could not be loaded</h3>\n                  <p>{{ error() }}</p>\n                  <button\n                    class=\"erp-button erp-button--secondary erp-button--compact\"\n                    type=\"button\"\n                    (click)=\"load()\"\n                  >\n                    <svg lucideRefreshCw size=\"15\" aria-hidden=\"true\"></svg>\n                    Try again\n                  </button>\n                </div>\n              </td>\n            </tr>\n          } @else {\n            @for (form of filteredItems(); track form._id || form.name) {\n              <tr>\n                <td>\n                  <button\n                    class=\"forms-library__form-link\"\n                    type=\"button\"\n                    (click)=\"openBuilder(form)\"\n                  >\n                    <span class=\"forms-library__form-icon\">\n                      <svg lucideLayoutTemplate size=\"17\" aria-hidden=\"true\"></svg>\n                    </span>\n                    <span>\n                      <strong>{{ form.name }}</strong>\n                      <small>{{ form.description || form.slug || 'No description added' }}</small>\n                    </span>\n                  </button>\n                </td>\n                <td>{{ purposeLabel(form) }}</td>\n                <td>\n                  <strong\n                    >{{ sectionCount(form) }} section{{\n                      sectionCount(form) === 1 ? '' : 's'\n                    }}</strong\n                  >\n                  <small\n                    >{{ fieldCount(form) }} active field{{\n                      fieldCount(form) === 1 ? '' : 's'\n                    }}</small\n                  >\n                </td>\n                <td>\n                  <span class=\"forms-library__version\">v{{ form.version || 1 }}</span>\n                </td>\n                <td>\n                  <span\n                    class=\"erp-status\"\n                    [class.erp-status--draft]=\"form.status === 'draft'\"\n                    [class.erp-status--warning]=\"form.status === 'archived'\"\n                  >\n                    {{ statusLabel(form) }}\n                  </span>\n                </td>\n                <td>\n                  <span [class.forms-library__inactive]=\"!form.isActive\">\n                    {{ form.isActive ? 'Active' : 'Inactive' }}\n                  </span>\n                </td>\n                <td class=\"erp-table-shell__actions\">\n                  <erp-compact-action-menu\n                    [items]=\"rowActions(form)\"\n                    (selected)=\"handleRowAction($event, form)\"\n                  />\n                </td>\n              </tr>\n            } @empty {\n              <tr>\n                <td colspan=\"7\">\n                  <div class=\"forms-library__state\">\n                    <span class=\"erp-empty-panel__icon\">\n                      @if (search()) {\n                        <svg lucideInbox size=\"20\" aria-hidden=\"true\"></svg>\n                      } @else {\n                        <svg lucideFilePlus2 size=\"20\" aria-hidden=\"true\"></svg>\n                      }\n                    </span>\n                    <h3>{{ search() ? 'No matching forms' : 'No admission forms yet' }}</h3>\n                    <p>\n                      {{\n                        search()\n                          ? 'Try a broader form name or status.'\n                          : 'Create the first form before configuring application fields.'\n                      }}\n                    </p>\n                    @if (search()) {\n                      <button\n                        class=\"erp-button erp-button--secondary erp-button--compact\"\n                        type=\"button\"\n                        (click)=\"search.set('')\"\n                      >\n                        Clear search\n                      </button>\n                    } @else {\n                      <button\n                        class=\"erp-button erp-button--primary erp-button--compact\"\n                        type=\"button\"\n                        (click)=\"openCreate()\"\n                      >\n                        <svg lucidePlus size=\"15\" aria-hidden=\"true\"></svg>\n                        New form\n                      </button>\n                    }\n                  </div>\n                </td>\n              </tr>\n            }\n          }\n        </tbody>\n      </table>\n    </div>\n  </section>\n</erp-admin-page>\n\n@if (createOpen()) {\n  <div class=\"modal-backdrop forms-library__dialog-layer\">\n    <button\n      class=\"backdrop-close\"\n      type=\"button\"\n      tabindex=\"-1\"\n      aria-label=\"Close new form dialog\"\n      (click)=\"closeCreate()\"\n    ></button>\n    <section\n      class=\"modal forms-library__dialog\"\n      role=\"dialog\"\n      aria-modal=\"true\"\n      aria-labelledby=\"new-form-dialog-title\"\n      cdkTrapFocus\n      [cdkTrapFocusAutoCapture]=\"true\"\n    >\n      <header class=\"forms-library__dialog-header\">\n        <span class=\"forms-library__dialog-icon\">\n          <svg lucideFilePlus2 size=\"19\" aria-hidden=\"true\"></svg>\n        </span>\n        <div>\n          <small>Form configuration</small>\n          <h2 id=\"new-form-dialog-title\">Create form</h2>\n          <p>Start with an empty draft and continue in the builder.</p>\n        </div>\n        <button type=\"button\" aria-label=\"Close new form dialog\" (click)=\"closeCreate()\">\n          <svg lucideX size=\"16\" aria-hidden=\"true\"></svg>\n        </button>\n      </header>\n      <div class=\"forms-library__dialog-body\">\n        <label>\n          <span>Form name</span>\n          <input\n            class=\"erp-control\"\n            type=\"text\"\n            [(ngModel)]=\"newFormName\"\n            maxlength=\"120\"\n            autocomplete=\"off\"\n            placeholder=\"Example: Undergraduate admission 2026\"\n            (keyup.enter)=\"createForm()\"\n          />\n        </label>\n        <label>\n          <span>Form purpose</span>\n          <select class=\"erp-control\" [(ngModel)]=\"newFormPurpose\">\n            <option value=\"admission\">Student admission</option>\n            <option value=\"faculty\">Faculty application</option>\n            <option value=\"employee\">Employee application</option>\n            <option value=\"general\">General/custom form</option>\n          </select>\n        </label>\n        @if (createError()) {\n          <p class=\"erp-notice erp-notice--error\" role=\"alert\">{{ createError() }}</p>\n        }\n      </div>\n      <footer class=\"forms-library__dialog-footer\">\n        <button\n          class=\"erp-button erp-button--secondary\"\n          type=\"button\"\n          [disabled]=\"creating()\"\n          (click)=\"closeCreate()\"\n        >\n          Cancel\n        </button>\n        <button\n          class=\"erp-button erp-button--primary\"\n          type=\"button\"\n          [disabled]=\"creating() || !newFormName.trim()\"\n          (click)=\"createForm()\"\n        >\n          {{ creating() ? 'Creating\u2026' : 'Create and open builder' }}\n        </button>\n      </footer>\n    </section>\n  </div>\n}\n", styles: [":host {\n  display: block;\n}\n\n.forms-library__summary {\n  display: grid;\n  grid-template-columns: repeat(3, minmax(0, 1fr));\n  gap: 0;\n  margin-bottom: var(--erp-space-2);\n  overflow: hidden;\n  background: var(--erp-surface-raised);\n  border: 1px solid var(--erp-border-default);\n  border-radius: var(--erp-radius-card);\n}\n\n.forms-library__summary article {\n  display: flex;\n  min-height: 42px;\n  align-items: center;\n  gap: var(--erp-space-2);\n  padding: var(--erp-space-2) var(--erp-space-3);\n  border: 0;\n  border-right: 1px solid var(--erp-border-subtle);\n  border-radius: 0;\n  box-shadow: none;\n}\n\n.forms-library__summary article:last-child {\n  border-right: 0;\n}\n\n.forms-library__summary span,\n.forms-library__summary small {\n  color: var(--erp-text-muted);\n  font-size: var(--erp-font-caption);\n}\n\n.forms-library__summary strong {\n  order: -1;\n  color: var(--erp-text-heading);\n  font-size: var(--erp-font-label);\n  font-weight: var(--erp-weight-semibold);\n  line-height: var(--erp-line-page-title);\n}\n\n.forms-library__summary small {\n  display: none;\n}\n\n.forms-library__directory {\n  overflow: hidden;\n}\n\n.forms-library__toolbar {\n  align-items: center;\n}\n\n.forms-library__toolbar h2,\n.forms-library__toolbar p {\n  margin: 0;\n}\n\n.forms-library__toolbar h2 {\n  color: var(--erp-text-heading);\n  font-size: var(--erp-font-panel-title);\n  font-weight: var(--erp-weight-semibold);\n}\n\n.forms-library__toolbar p {\n  margin-top: var(--erp-space-1);\n  color: var(--erp-text-muted);\n  font-size: var(--erp-font-caption);\n}\n\n.forms-library__search {\n  display: flex;\n  width: min(20rem, 100%);\n  min-height: var(--erp-control-height);\n  align-items: center;\n  gap: var(--erp-space-2);\n  padding: 0 var(--erp-space-2);\n  color: var(--erp-text-muted);\n  background: var(--erp-input-bg);\n  border: 1px solid var(--erp-input-border);\n  border-radius: var(--erp-radius-control);\n}\n\n.forms-library__search:focus-within {\n  border-color: var(--erp-input-focus-border);\n  box-shadow: 0 0 0 var(--erp-focus-ring-width) var(--erp-focus-ring);\n}\n\n.forms-library__search input {\n  min-width: 0;\n  flex: 1;\n  padding: 0;\n  color: var(--erp-text-body);\n  background: transparent;\n  border: 0;\n  outline: 0;\n}\n\n.forms-library__search button {\n  display: inline-grid;\n  width: var(--erp-control-height-compact);\n  height: var(--erp-control-height-compact);\n  place-items: center;\n  padding: 0;\n  color: var(--erp-text-muted);\n  background: transparent;\n  border: 0;\n  border-radius: var(--erp-radius-control);\n}\n\n.forms-library__directory table {\n  min-width: 50rem;\n}\n\n.forms-library__form-link {\n  display: flex;\n  width: 100%;\n  min-width: 15rem;\n  align-items: center;\n  gap: var(--erp-space-2);\n  padding: 0;\n  color: inherit;\n  text-align: left;\n  background: transparent;\n  border: 0;\n}\n\n.forms-library__form-link:hover strong {\n  color: var(--erp-text-link);\n  text-decoration: underline;\n}\n\n.forms-library__form-icon,\n.forms-library__dialog-icon {\n  display: inline-grid;\n  width: var(--erp-control-height);\n  height: var(--erp-control-height);\n  flex: 0 0 auto;\n  place-items: center;\n  color: var(--erp-blue-700);\n  background: var(--erp-blue-50);\n  border-radius: var(--erp-radius-control);\n}\n\n.forms-library__form-link > span:last-child {\n  display: grid;\n  min-width: 0;\n  gap: var(--erp-space-1);\n}\n\n.forms-library__form-link strong,\n.forms-library__directory td > strong {\n  color: var(--erp-text-heading);\n  font-size: var(--erp-font-table);\n  font-weight: var(--erp-weight-semibold);\n}\n\n.forms-library__form-link small,\n.forms-library__directory td > small {\n  display: block;\n  overflow: hidden;\n  max-width: 24rem;\n  color: var(--erp-text-muted);\n  font-size: var(--erp-font-caption);\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n\n.forms-library__version {\n  color: var(--erp-text-body);\n  font-family: var(--erp-font-mono);\n  font-size: var(--erp-font-table);\n}\n\n.forms-library__inactive {\n  color: var(--erp-text-muted);\n}\n\n.forms-library__state {\n  display: grid;\n  min-height: var(--erp-table-state-min-height);\n  justify-items: center;\n  align-content: center;\n  gap: var(--erp-space-2);\n  padding: var(--erp-space-6);\n  color: var(--erp-text-muted);\n  text-align: center;\n}\n\n.forms-library__state h3,\n.forms-library__state p {\n  margin: 0;\n}\n\n.forms-library__state h3 {\n  color: var(--erp-text-heading);\n  font-size: var(--erp-font-panel-title);\n}\n\n.forms-library__state p {\n  max-width: var(--erp-state-content-width);\n  font-size: var(--erp-font-caption);\n}\n\n.forms-library__skeleton-name {\n  width: 15rem;\n}\n\n.forms-library__skeleton-meta {\n  width: 8rem;\n}\n\n.forms-library__skeleton-short {\n  width: 4rem;\n}\n\n.forms-library__skeleton-status {\n  width: 5rem;\n}\n\n.forms-library__skeleton-action {\n  width: var(--erp-control-height-compact);\n}\n\n.forms-library__dialog-layer {\n  padding: var(--erp-space-4);\n}\n\n.forms-library__dialog {\n  width: min(30rem, 100%);\n  overflow: hidden;\n}\n\n.forms-library__dialog-header,\n.forms-library__dialog-footer {\n  display: flex;\n  align-items: center;\n}\n\n.forms-library__dialog-header {\n  gap: var(--erp-space-3);\n  padding: var(--erp-space-4);\n  border-bottom: 1px solid var(--erp-border-subtle);\n}\n\n.forms-library__dialog-header > div {\n  min-width: 0;\n  flex: 1;\n}\n\n.forms-library__dialog-header small,\n.forms-library__dialog-header h2,\n.forms-library__dialog-header p {\n  margin: 0;\n}\n\n.forms-library__dialog-header small {\n  color: var(--erp-text-muted);\n  font-size: var(--erp-font-caption);\n}\n\n.forms-library__dialog-header h2 {\n  color: var(--erp-text-heading);\n  font-size: var(--erp-font-section-title);\n  line-height: var(--erp-line-section-title);\n}\n\n.forms-library__dialog-header p {\n  color: var(--erp-text-muted);\n  font-size: var(--erp-font-caption);\n}\n\n.forms-library__dialog-header > button {\n  display: inline-grid;\n  width: var(--erp-control-height-compact);\n  height: var(--erp-control-height-compact);\n  place-items: center;\n  padding: 0;\n  color: var(--erp-text-muted);\n  background: transparent;\n  border: 0;\n  border-radius: var(--erp-radius-control);\n}\n\n.forms-library__dialog-body {\n  padding: var(--erp-space-4);\n}\n\n.forms-library__dialog-body label {\n  display: grid;\n  gap: var(--erp-space-1);\n  color: var(--erp-text-muted);\n  font-size: var(--erp-font-caption);\n  font-weight: var(--erp-weight-semibold);\n}\n\n.forms-library__dialog-body .erp-notice {\n  margin-top: var(--erp-space-3);\n}\n\n.forms-library__dialog-footer {\n  justify-content: flex-end;\n  gap: var(--erp-space-2);\n  padding: var(--erp-space-3) var(--erp-space-4);\n  border-top: 1px solid var(--erp-border-subtle);\n}\n\n@media (max-width: 48rem) {\n  .forms-library__summary {\n    grid-template-columns: repeat(3, minmax(7rem, 1fr));\n    overflow-x: auto;\n  }\n\n  .forms-library__toolbar {\n    align-items: stretch;\n    flex-direction: column;\n  }\n\n  .forms-library__search {\n    width: 100%;\n  }\n\n  .forms-library__dialog-layer {\n    padding: 0;\n    align-items: end;\n  }\n\n  .forms-library__dialog {\n    width: 100%;\n    max-width: none;\n    border-radius: var(--erp-radius-overlay) var(--erp-radius-overlay) 0 0;\n  }\n\n  .forms-library__dialog-footer .erp-button {\n    flex: 1;\n  }\n}\n"] }]
    }], () => [], null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(FormsLibraryComponent, { className: "FormsLibraryComponent", filePath: "frontend/src/app/features/admin/admissions/forms-library/forms-library.component.ts", lineNumber: 51 }); })();
