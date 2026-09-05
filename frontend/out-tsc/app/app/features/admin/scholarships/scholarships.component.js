import { CurrencyPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { ApiService } from '../../../core/api.service';
import { AdminPageComponent } from '../../../shared/ui/admin-page/admin-page.component';
import { FilterPopoverComponent, } from '../../../shared/ui/filter-popover/filter-popover.component';
import { CompactActionMenuComponent, } from '../../../shared/ui/compact-action-menu/compact-action-menu.component';
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
const _forTrack0 = ($index, $item) => $item._id;
function ScholarshipsComponent_Conditional_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "a", 2);
    i0.ɵɵtext(1, "Create scholarship");
    i0.ɵɵelementEnd();
} }
function ScholarshipsComponent_Conditional_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "a", 3);
    i0.ɵɵtext(1, "Back to directory");
    i0.ɵɵelementEnd();
} }
function ScholarshipsComponent_Conditional_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 4);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r0.message());
} }
function ScholarshipsComponent_Conditional_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 5);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r0.error());
} }
function ScholarshipsComponent_Conditional_6_For_47_Template(rf, ctx) { if (rf & 1) {
    const _r3 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "tr")(1, "td")(2, "strong");
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "small");
    i0.ɵɵtext(5, "Reusable tuition concession");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(6, "td");
    i0.ɵɵtext(7);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "td");
    i0.ɵɵtext(9);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(10, "td")(11, "strong");
    i0.ɵɵtext(12);
    i0.ɵɵpipe(13, "currency");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(14, "td");
    i0.ɵɵtext(15, "Tuition Fee");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(16, "td");
    i0.ɵɵtext(17);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(18, "td")(19, "span", 15);
    i0.ɵɵtext(20);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(21, "td", 14)(22, "erp-compact-action-menu", 16);
    i0.ɵɵlistener("selected", function ScholarshipsComponent_Conditional_6_For_47_Template_erp_compact_action_menu_selected_22_listener($event) { const item_r4 = i0.ɵɵrestoreView(_r3).$implicit; const ctx_r0 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r0.handleAction($event, item_r4)); });
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const item_r4 = ctx.$implicit;
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(item_r4.name);
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(item_r4.valueMode === "custom" ? "Custom at assignment" : "Preconfigured");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", item_r4.valueMode === "custom" ? "Selected at assignment" : !item_r4.type ? "Needs configuration" : item_r4.type === "percentage" ? "Percentage" : "Fixed amount", " ");
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1(" ", item_r4.valueMode === "custom" ? "Entered at assignment" : !item_r4.value ? "\u2014" : item_r4.type === "percentage" ? item_r4.value + "%" : i0.ɵɵpipeBind4(13, 9, item_r4.value, "INR", "symbol", "1.0-2"), " ");
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(item_r4.priority || 9999);
    i0.ɵɵadvance(2);
    i0.ɵɵclassProp("is-inactive", !item_r4.isActive);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(item_r4.isActive ? "Available" : "Inactive");
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("items", ctx_r0.actionsFor(item_r4));
} }
function ScholarshipsComponent_Conditional_6_ForEmpty_48_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "tr")(1, "td", 17);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", ctx_r0.loading() ? "Loading scholarships\u2026" : ctx_r0.search || ctx_r0.statusFilter() !== "all" ? "No scholarships match these filters." : "No scholarships have been created.", " ");
} }
function ScholarshipsComponent_Conditional_6_Template(rf, ctx) { if (rf & 1) {
    const _r2 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 7)(1, "span")(2, "strong");
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵtext(4, " total schemes");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "span")(6, "strong");
    i0.ɵɵtext(7);
    i0.ɵɵelementEnd();
    i0.ɵɵtext(8, " available");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(9, "span")(10, "strong");
    i0.ɵɵtext(11);
    i0.ɵɵelementEnd();
    i0.ɵɵtext(12, " inactive");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(13, "section", 8)(14, "div", 9)(15, "div")(16, "h2");
    i0.ɵɵtext(17, " Scholarship master ");
    i0.ɵɵelementStart(18, "small");
    i0.ɵɵtext(19);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(20, "p");
    i0.ɵɵtext(21, "Inactive schemes remain in historical records but cannot be newly assigned.");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(22, "div", 10)(23, "input", 11);
    i0.ɵɵtwoWayListener("ngModelChange", function ScholarshipsComponent_Conditional_6_Template_input_ngModelChange_23_listener($event) { i0.ɵɵrestoreView(_r2); const ctx_r0 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r0.search, $event) || (ctx_r0.search = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(24, "erp-filter-popover", 12);
    i0.ɵɵlistener("valueChange", function ScholarshipsComponent_Conditional_6_Template_erp_filter_popover_valueChange_24_listener($event) { i0.ɵɵrestoreView(_r2); const ctx_r0 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r0.statusFilter.set($event)); });
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(25, "div", 13)(26, "table")(27, "thead")(28, "tr")(29, "th");
    i0.ɵɵtext(30, "Scholarship");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(31, "th");
    i0.ɵɵtext(32, "Value source");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(33, "th");
    i0.ɵɵtext(34, "Calculation");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(35, "th");
    i0.ɵɵtext(36, "Value");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(37, "th");
    i0.ɵɵtext(38, "Priority");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(39, "th");
    i0.ɵɵtext(40, "Applied to");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(41, "th");
    i0.ɵɵtext(42, "Availability");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(43, "th", 14);
    i0.ɵɵtext(44, "Actions");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(45, "tbody");
    i0.ɵɵrepeaterCreate(46, ScholarshipsComponent_Conditional_6_For_47_Template, 23, 14, "tr", null, _forTrack0, false, ScholarshipsComponent_Conditional_6_ForEmpty_48_Template, 3, 1, "tr");
    i0.ɵɵelementEnd()()()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(ctx_r0.items().length);
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(ctx_r0.activeCount());
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(ctx_r0.items().length - ctx_r0.activeCount());
    i0.ɵɵadvance(8);
    i0.ɵɵtextInterpolate(ctx_r0.filteredItems().length);
    i0.ɵɵadvance(4);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r0.search);
    i0.ɵɵadvance();
    i0.ɵɵproperty("options", ctx_r0.statusFilterOptions)("value", ctx_r0.statusFilter());
    i0.ɵɵadvance(22);
    i0.ɵɵrepeater(ctx_r0.filteredItems());
} }
function ScholarshipsComponent_Conditional_7_Conditional_27_Template(rf, ctx) { if (rf & 1) {
    const _r6 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "label")(1, "span");
    i0.ɵɵtext(2, "Calculation *");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "select", 23);
    i0.ɵɵtwoWayListener("ngModelChange", function ScholarshipsComponent_Conditional_7_Conditional_27_Template_select_ngModelChange_3_listener($event) { i0.ɵɵrestoreView(_r6); const ctx_r0 = i0.ɵɵnextContext(2); i0.ɵɵtwoWayBindingSet(ctx_r0.type, $event) || (ctx_r0.type = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementStart(4, "option", 31);
    i0.ɵɵtext(5, "Percentage");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "option", 32);
    i0.ɵɵtext(7, "Fixed amount");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(8, "label")(9, "span");
    i0.ɵɵtext(10);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(11, "input", 33);
    i0.ɵɵtwoWayListener("ngModelChange", function ScholarshipsComponent_Conditional_7_Conditional_27_Template_input_ngModelChange_11_listener($event) { i0.ɵɵrestoreView(_r6); const ctx_r0 = i0.ɵɵnextContext(2); i0.ɵɵtwoWayBindingSet(ctx_r0.value, $event) || (ctx_r0.value = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(3);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r0.type);
    i0.ɵɵadvance(7);
    i0.ɵɵtextInterpolate(ctx_r0.type === "percentage" ? "Percentage *" : "Fixed amount *");
    i0.ɵɵadvance();
    i0.ɵɵproperty("max", ctx_r0.type === "percentage" ? 100 : 1000000000);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r0.value);
    i0.ɵɵproperty("placeholder", ctx_r0.type === "percentage" ? "5" : "10000");
} }
function ScholarshipsComponent_Conditional_7_Template(rf, ctx) { if (rf & 1) {
    const _r5 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 6)(1, "section", 18)(2, "div", 19)(3, "div")(4, "h2");
    i0.ɵɵtext(5, "Scheme definition");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "p");
    i0.ɵɵtext(7, "Choose whether this scheme uses a saved value or a custom value during assignment.");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(8, "div", 20)(9, "label")(10, "span");
    i0.ɵɵtext(11, "Scholarship name *");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(12, "input", 21);
    i0.ɵɵtwoWayListener("ngModelChange", function ScholarshipsComponent_Conditional_7_Template_input_ngModelChange_12_listener($event) { i0.ɵɵrestoreView(_r5); const ctx_r0 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r0.name, $event) || (ctx_r0.name = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(13, "label")(14, "span");
    i0.ɵɵtext(15, "Priority *");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(16, "input", 22);
    i0.ɵɵtwoWayListener("ngModelChange", function ScholarshipsComponent_Conditional_7_Template_input_ngModelChange_16_listener($event) { i0.ɵɵrestoreView(_r5); const ctx_r0 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r0.priority, $event) || (ctx_r0.priority = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(17, "small");
    i0.ɵɵtext(18, "Lower numbers are applied first (admin only).");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(19, "label")(20, "span");
    i0.ɵɵtext(21, "Value configuration *");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(22, "select", 23);
    i0.ɵɵtwoWayListener("ngModelChange", function ScholarshipsComponent_Conditional_7_Template_select_ngModelChange_22_listener($event) { i0.ɵɵrestoreView(_r5); const ctx_r0 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r0.valueMode, $event) || (ctx_r0.valueMode = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementStart(23, "option", 24);
    i0.ɵɵtext(24, "Preconfigured value");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(25, "option", 25);
    i0.ɵɵtext(26, "Custom during student assignment");
    i0.ɵɵelementEnd()()();
    i0.ɵɵconditionalCreate(27, ScholarshipsComponent_Conditional_7_Conditional_27_Template, 12, 5);
    i0.ɵɵelementStart(28, "label")(29, "span");
    i0.ɵɵtext(30, "Availability");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(31, "select", 23);
    i0.ɵɵtwoWayListener("ngModelChange", function ScholarshipsComponent_Conditional_7_Template_select_ngModelChange_31_listener($event) { i0.ɵɵrestoreView(_r5); const ctx_r0 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r0.isActive, $event) || (ctx_r0.isActive = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementStart(32, "option", 26);
    i0.ɵɵtext(33, "Available for assignment");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(34, "option", 26);
    i0.ɵɵtext(35, "Inactive");
    i0.ɵɵelementEnd()()()();
    i0.ɵɵelementStart(36, "div", 27)(37, "button", 28);
    i0.ɵɵlistener("click", function ScholarshipsComponent_Conditional_7_Template_button_click_37_listener() { i0.ɵɵrestoreView(_r5); const ctx_r0 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r0.cancelForm()); });
    i0.ɵɵtext(38, " Cancel ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(39, "button", 29);
    i0.ɵɵlistener("click", function ScholarshipsComponent_Conditional_7_Template_button_click_39_listener() { i0.ɵɵrestoreView(_r5); const ctx_r0 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r0.save()); });
    i0.ɵɵtext(40);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(41, "aside", 30)(42, "h2");
    i0.ɵɵtext(43, "How it works");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(44, "dl")(45, "div")(46, "dt");
    i0.ɵɵtext(47, "Scope");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(48, "dd");
    i0.ɵɵtext(49, "Tuition Fee only");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(50, "div")(51, "dt");
    i0.ɵɵtext(52, "Calculation");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(53, "dd");
    i0.ɵɵtext(54, "Preconfigured schemes reuse their saved value. Custom schemes ask for a value during assignment.");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(55, "div")(56, "dt");
    i0.ɵɵtext(57, "Frequency");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(58, "dd");
    i0.ɵɵtext(59, "One-time or carry-forward is chosen while assigning it to a student");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(60, "div")(61, "dt");
    i0.ɵɵtext(62, "History");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(63, "dd");
    i0.ɵɵtext(64, "Disabling a scheme keeps previous assignments intact");
    i0.ɵɵelementEnd()()()()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(12);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r0.name);
    i0.ɵɵadvance(4);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r0.priority);
    i0.ɵɵadvance(6);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r0.valueMode);
    i0.ɵɵadvance(5);
    i0.ɵɵconditional(ctx_r0.valueMode === "preconfigured" ? 27 : -1);
    i0.ɵɵadvance(4);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r0.isActive);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngValue", true);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngValue", false);
    i0.ɵɵadvance(5);
    i0.ɵɵproperty("disabled", ctx_r0.saving());
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r0.saving() ? "Saving\u2026" : ctx_r0.mode() === "edit" ? "Save changes" : "Create scholarship", " ");
} }
export class ScholarshipsComponent {
    api = inject(ApiService);
    route = inject(ActivatedRoute);
    router = inject(Router);
    items = signal([], ...(ngDevMode ? [{ debugName: "items" }] : /* istanbul ignore next */ []));
    loading = signal(false, ...(ngDevMode ? [{ debugName: "loading" }] : /* istanbul ignore next */ []));
    saving = signal(false, ...(ngDevMode ? [{ debugName: "saving" }] : /* istanbul ignore next */ []));
    error = signal('', ...(ngDevMode ? [{ debugName: "error" }] : /* istanbul ignore next */ []));
    message = signal('', ...(ngDevMode ? [{ debugName: "message" }] : /* istanbul ignore next */ []));
    editingId = signal(null, ...(ngDevMode ? [{ debugName: "editingId" }] : /* istanbul ignore next */ []));
    statusFilter = signal('all', ...(ngDevMode ? [{ debugName: "statusFilter" }] : /* istanbul ignore next */ []));
    mode = signal('view', ...(ngDevMode ? [{ debugName: "mode" }] : /* istanbul ignore next */ []));
    statusFilterOptions = [
        { label: 'All statuses', value: 'all' },
        { label: 'Available', value: 'active' },
        { label: 'Inactive', value: 'inactive' },
    ];
    search = '';
    name = '';
    priority = 9999;
    valueMode = 'preconfigured';
    type = 'percentage';
    value = null;
    isActive = true;
    filteredItems() {
        const query = this.search.trim().toLocaleLowerCase();
        return this.items().filter((item) => {
            const matchesSearch = !query || item.name.toLocaleLowerCase().includes(query);
            const matchesStatus = this.statusFilter() === 'all' ||
                (this.statusFilter() === 'active' ? item.isActive : !item.isActive);
            return matchesSearch && matchesStatus;
        });
    }
    activeCount() {
        return this.items().filter((item) => item.isActive).length;
    }
    actionsFor(item) {
        return [
            { id: 'edit', label: 'Edit scholarship', icon: 'edit' },
            {
                id: 'toggle',
                label: item.isActive ? 'Make inactive' : 'Make available',
                icon: item.isActive ? 'delete' : 'check',
                separator: true,
            },
        ];
    }
    handleAction(action, item) {
        if (action === 'edit')
            this.edit(item);
        if (action === 'toggle')
            this.toggle(item);
    }
    constructor() {
        this.route.data.subscribe((data) => {
            this.mode.set(data['mode'] || 'view');
            this.resetForm();
            this.load();
        });
    }
    load() {
        this.loading.set(true);
        this.error.set('');
        this.api.scholarships().subscribe({
            next: ({ items }) => {
                this.items.set(items);
                const editId = this.route.snapshot.paramMap.get('id');
                if (this.mode() === 'edit' && editId) {
                    const item = items.find((scholarship) => scholarship._id === editId);
                    if (item)
                        this.populateForm(item);
                    else
                        this.error.set('Scholarship not found.');
                }
                this.loading.set(false);
            },
            error: (error) => {
                this.error.set(error.error?.message || 'Could not load scholarships.');
                this.loading.set(false);
            },
        });
    }
    save() {
        if (this.saving())
            return;
        const name = this.name.trim();
        if (!name) {
            this.error.set('Enter the scholarship head name.');
            return;
        }
        const value = Number(this.value || 0);
        if (this.valueMode === 'preconfigured' &&
            (value <= 0 || (this.type === 'percentage' && value > 100))) {
            this.error.set('Enter a valid percentage or fixed scholarship amount.');
            return;
        }
        this.saving.set(true);
        this.error.set('');
        this.message.set('');
        const body = {
            name,
            priority: Number(this.priority || 9999),
            valueMode: this.valueMode,
            type: this.valueMode === 'preconfigured' ? this.type : null,
            value: this.valueMode === 'preconfigured' ? value : null,
            isActive: this.isActive,
        };
        const request = this.editingId()
            ? this.api.updateScholarship(this.editingId(), body)
            : this.api.createScholarship(body);
        request.subscribe({
            next: () => {
                this.message.set(this.editingId() ? 'Scholarship updated.' : 'Scholarship created.');
                this.resetForm();
                this.saving.set(false);
                void this.router.navigate(['/admin/fees/scholarships/view']);
            },
            error: (error) => {
                this.error.set(error.error?.message || 'Could not save the scholarship.');
                this.saving.set(false);
            },
        });
    }
    edit(item) {
        void this.router.navigate(['/admin/fees/scholarships', item._id, 'edit']);
    }
    populateForm(item) {
        this.editingId.set(item._id);
        this.name = item.name;
        this.priority = Number(item.priority || 9999);
        this.valueMode = item.valueMode || 'preconfigured';
        this.type = item.type || 'percentage';
        this.value = Number(item.value || 0) || null;
        this.isActive = item.isActive;
        this.error.set('');
        this.message.set('');
    }
    toggle(item) {
        this.api.updateScholarship(item._id, { isActive: !item.isActive }).subscribe({
            next: () => {
                this.message.set(item.isActive ? 'Scholarship disabled.' : 'Scholarship enabled.');
                this.load();
            },
            error: (error) => this.error.set(error.error?.message || 'Could not update the scholarship.'),
        });
    }
    cancelForm() {
        void this.router.navigate(['/admin/fees/scholarships/view']);
    }
    resetForm() {
        this.editingId.set(null);
        this.name = '';
        this.priority = 9999;
        this.valueMode = 'preconfigured';
        this.type = 'percentage';
        this.value = null;
        this.isActive = true;
    }
    static ɵfac = function ScholarshipsComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || ScholarshipsComponent)(); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ScholarshipsComponent, selectors: [["erp-scholarships"]], decls: 8, vars: 7, consts: [["eyebrow", "Fee Management", "variant", "minimal", 3, "title", "description", "layout"], ["page-actions", "", 1, "erp-table-toolbar__actions"], ["routerLink", "/admin/fees/scholarships/create", 1, "erp-button", "erp-button--primary"], ["routerLink", "/admin/fees/scholarships/view", 1, "erp-button", "erp-button--secondary"], [1, "erp-notice", "erp-notice--success"], [1, "erp-notice", "erp-notice--error"], [1, "scholarship-editor-layout"], ["aria-label", "Scholarship summary", 1, "scholarship-metrics"], [1, "erp-card", "erp-table-shell"], [1, "erp-table-toolbar", "scholarship-table-toolbar"], [1, "erp-table-toolbar__actions"], ["type", "search", "placeholder", "Search scholarship name", "aria-label", "Search scholarships", 1, "erp-control", 3, "ngModelChange", "ngModel"], ["label", "Status filters", 3, "valueChange", "options", "value"], [1, "erp-table-shell__scroll"], [1, "erp-table-shell__actions"], [1, "scholarship-status"], [3, "selected", "items"], ["colspan", "8", 1, "erp-empty-state"], [1, "erp-card", "erp-card--padded", "scholarship-form"], [1, "erp-card__header"], [1, "erp-form-grid"], ["maxlength", "120", "placeholder", "Merit Scholarship", 1, "erp-control", 3, "ngModelChange", "ngModel"], ["type", "number", "min", "1", "step", "1", 1, "erp-control", 3, "ngModelChange", "ngModel"], [1, "erp-control", 3, "ngModelChange", "ngModel"], ["value", "preconfigured"], ["value", "custom"], [3, "ngValue"], [1, "scholarship-form__actions"], ["type", "button", 1, "erp-button", "erp-button--secondary", 3, "click"], ["type", "button", 1, "erp-button", "erp-button--primary", 3, "click", "disabled"], [1, "erp-card", "erp-card--padded", "scholarship-guidance"], ["value", "percentage"], ["value", "fixed"], ["type", "number", "min", "0.01", "step", "0.01", 1, "erp-control", 3, "ngModelChange", "max", "ngModel", "placeholder"]], template: function ScholarshipsComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "erp-admin-page", 0)(1, "div", 1);
            i0.ɵɵconditionalCreate(2, ScholarshipsComponent_Conditional_2_Template, 2, 0, "a", 2)(3, ScholarshipsComponent_Conditional_3_Template, 2, 0, "a", 3);
            i0.ɵɵelementEnd();
            i0.ɵɵconditionalCreate(4, ScholarshipsComponent_Conditional_4_Template, 2, 1, "p", 4);
            i0.ɵɵconditionalCreate(5, ScholarshipsComponent_Conditional_5_Template, 2, 1, "p", 5);
            i0.ɵɵconditionalCreate(6, ScholarshipsComponent_Conditional_6_Template, 49, 8)(7, ScholarshipsComponent_Conditional_7_Template, 65, 9, "div", 6);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵproperty("title", ctx.mode() === "view" ? "Scholarship directory" : ctx.mode() === "edit" ? "Edit scholarship" : "Create scholarship")("description", ctx.mode() === "view" ? "Manage reusable scholarship schemes and their availability." : "Create a reusable Tuition Fee scholarship with its default calculation and value.")("layout", ctx.mode() === "view" ? "collection" : "default");
            i0.ɵɵadvance(2);
            i0.ɵɵconditional(ctx.mode() === "view" ? 2 : 3);
            i0.ɵɵadvance(2);
            i0.ɵɵconditional(ctx.message() ? 4 : -1);
            i0.ɵɵadvance();
            i0.ɵɵconditional(ctx.error() ? 5 : -1);
            i0.ɵɵadvance();
            i0.ɵɵconditional(ctx.mode() === "view" ? 6 : 7);
        } }, dependencies: [AdminPageComponent,
            CompactActionMenuComponent,
            FilterPopoverComponent,
            FormsModule, i1.NgSelectOption, i1.ɵNgSelectMultipleOption, i1.DefaultValueAccessor, i1.NumberValueAccessor, i1.SelectControlValueAccessor, i1.NgControlStatus, i1.MaxLengthValidator, i1.MinValidator, i1.MaxValidator, i1.NgModel, RouterLink,
            CurrencyPipe], styles: ["\n[_nghost-%COMP%] {\n  display: block;\n}\n.scholarship-metrics[_ngcontent-%COMP%] {\n  display: flex;\n  min-height: 28px;\n  align-items: center;\n  gap: var(--erp-space-4);\n  margin-bottom: var(--erp-space-2);\n  padding: 0 var(--erp-space-2);\n  color: var(--erp-text-muted);\n  font-size: var(--erp-font-size-xs);\n}\n.scholarship-metrics[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]    + span[_ngcontent-%COMP%] {\n  padding-left: var(--erp-space-4);\n  border-left: 1px solid var(--erp-border-subtle);\n}\n.scholarship-metrics[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  margin-right: var(--erp-space-1);\n  color: var(--erp-text-heading);\n  font-size: var(--erp-font-label);\n}\n.scholarship-table-toolbar[_ngcontent-%COMP%] {\n  align-items: flex-end;\n}\n.scholarship-form__actions[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  gap: var(--erp-space-3);\n  margin-top: var(--erp-space-4);\n}\n.scholarship-status[_ngcontent-%COMP%] {\n  display: inline-flex;\n  padding: var(--erp-space-1) var(--erp-space-3);\n  border-radius: var(--erp-radius-pill);\n  background: var(--erp-success-bg);\n  color: var(--erp-success-text);\n  font-size: var(--erp-font-caption);\n  font-weight: var(--erp-weight-bold);\n}\n.scholarship-status.is-inactive[_ngcontent-%COMP%] {\n  background: var(--erp-surface-neutral);\n  color: var(--erp-text-muted);\n}\n.scholarship-editor-layout[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: minmax(0, 1fr) 280px;\n  gap: var(--erp-space-4);\n  align-items: start;\n}\n.scholarship-guidance[_ngcontent-%COMP%] {\n  position: sticky;\n  top: var(--erp-space-4);\n}\n.scholarship-guidance[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0 0 var(--erp-space-3);\n  color: var(--erp-text-heading);\n  font-size: var(--erp-font-label);\n}\n.scholarship-guidance[_ngcontent-%COMP%]   dl[_ngcontent-%COMP%] {\n  margin: 0;\n}\n.scholarship-guidance[_ngcontent-%COMP%]   dl[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  padding: var(--erp-space-3) 0;\n  border-bottom: 1px solid var(--erp-border-subtle);\n}\n.scholarship-guidance[_ngcontent-%COMP%]   dt[_ngcontent-%COMP%] {\n  color: var(--erp-text-muted);\n  font-size: var(--erp-font-size-2xs);\n}\n.scholarship-guidance[_ngcontent-%COMP%]   dd[_ngcontent-%COMP%] {\n  margin: var(--erp-space-1) 0 0;\n  color: var(--erp-text-body);\n  font-size: var(--erp-font-size-xs);\n}\n@media (max-width: 900px) {\n  .scholarship-editor-layout[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .scholarship-guidance[_ngcontent-%COMP%] {\n    position: static;\n  }\n}\n@media (max-width: 720px) {\n  .scholarship-metrics[_ngcontent-%COMP%] {\n    gap: var(--erp-space-3);\n    overflow-x: auto;\n    white-space: nowrap;\n  }\n  .scholarship-metrics[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]    + span[_ngcontent-%COMP%] {\n    padding-left: var(--erp-space-3);\n  }\n  .scholarship-table-toolbar[_ngcontent-%COMP%] {\n    align-items: stretch;\n  }\n}"], changeDetection: 0 });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ScholarshipsComponent, [{
        type: Component,
        args: [{ selector: 'erp-scholarships', imports: [
                    AdminPageComponent,
                    CompactActionMenuComponent,
                    CurrencyPipe,
                    FilterPopoverComponent,
                    FormsModule,
                    RouterLink,
                ], changeDetection: ChangeDetectionStrategy.OnPush, template: "<erp-admin-page\n  eyebrow=\"Fee Management\"\n  [title]=\"\n    mode() === 'view'\n      ? 'Scholarship directory'\n      : mode() === 'edit'\n        ? 'Edit scholarship'\n        : 'Create scholarship'\n  \"\n  [description]=\"\n    mode() === 'view'\n      ? 'Manage reusable scholarship schemes and their availability.'\n      : 'Create a reusable Tuition Fee scholarship with its default calculation and value.'\n  \"\n  variant=\"minimal\"\n  [layout]=\"mode() === 'view' ? 'collection' : 'default'\"\n>\n  <div page-actions class=\"erp-table-toolbar__actions\">\n    @if (mode() === 'view') {\n      <a class=\"erp-button erp-button--primary\" routerLink=\"/admin/fees/scholarships/create\"\n        >Create scholarship</a\n      >\n    } @else {\n      <a class=\"erp-button erp-button--secondary\" routerLink=\"/admin/fees/scholarships/view\"\n        >Back to directory</a\n      >\n    }\n  </div>\n\n  @if (message()) {\n    <p class=\"erp-notice erp-notice--success\">{{ message() }}</p>\n  }\n  @if (error()) {\n    <p class=\"erp-notice erp-notice--error\">{{ error() }}</p>\n  }\n\n  @if (mode() === 'view') {\n    <div class=\"scholarship-metrics\" aria-label=\"Scholarship summary\">\n      <span\n        ><strong>{{ items().length }}</strong> total schemes</span\n      >\n      <span\n        ><strong>{{ activeCount() }}</strong> available</span\n      >\n      <span\n        ><strong>{{ items().length - activeCount() }}</strong> inactive</span\n      >\n    </div>\n\n    <section class=\"erp-card erp-table-shell\">\n      <div class=\"erp-table-toolbar scholarship-table-toolbar\">\n        <div>\n          <h2>\n            Scholarship master <small>{{ filteredItems().length }}</small>\n          </h2>\n          <p>Inactive schemes remain in historical records but cannot be newly assigned.</p>\n        </div>\n        <div class=\"erp-table-toolbar__actions\">\n          <input\n            class=\"erp-control\"\n            type=\"search\"\n            [(ngModel)]=\"search\"\n            placeholder=\"Search scholarship name\"\n            aria-label=\"Search scholarships\"\n          />\n          <erp-filter-popover\n            label=\"Status filters\"\n            [options]=\"statusFilterOptions\"\n            [value]=\"statusFilter()\"\n            (valueChange)=\"statusFilter.set($any($event))\"\n          />\n        </div>\n      </div>\n      <div class=\"erp-table-shell__scroll\">\n        <table>\n          <thead>\n            <tr>\n              <th>Scholarship</th>\n              <th>Value source</th>\n              <th>Calculation</th>\n              <th>Value</th>\n              <th>Priority</th>\n              <th>Applied to</th>\n              <th>Availability</th>\n              <th class=\"erp-table-shell__actions\">Actions</th>\n            </tr>\n          </thead>\n          <tbody>\n            @for (item of filteredItems(); track item._id) {\n              <tr>\n                <td>\n                  <strong>{{ item.name }}</strong\n                  ><small>Reusable tuition concession</small>\n                </td>\n                <td>{{ item.valueMode === 'custom' ? 'Custom at assignment' : 'Preconfigured' }}</td>\n                <td>\n                  {{\n                    item.valueMode === 'custom'\n                      ? 'Selected at assignment'\n                      : !item.type\n                      ? 'Needs configuration'\n                      : item.type === 'percentage'\n                        ? 'Percentage'\n                        : 'Fixed amount'\n                  }}\n                </td>\n                <td>\n                  <strong>\n                    {{\n                      item.valueMode === 'custom'\n                        ? 'Entered at assignment'\n                        : !item.value\n                        ? '\u2014'\n                        : item.type === 'percentage'\n                        ? item.value + '%'\n                        : (item.value | currency: 'INR' : 'symbol' : '1.0-2')\n                    }}\n                  </strong>\n                </td>\n                <td>Tuition Fee</td>\n                <td>{{ item.priority || 9999 }}</td>\n                <td>\n                  <span class=\"scholarship-status\" [class.is-inactive]=\"!item.isActive\">{{\n                    item.isActive ? 'Available' : 'Inactive'\n                  }}</span>\n                </td>\n                <td class=\"erp-table-shell__actions\">\n                  <erp-compact-action-menu\n                    [items]=\"actionsFor(item)\"\n                    (selected)=\"handleAction($event, item)\"\n                  />\n                </td>\n              </tr>\n            } @empty {\n              <tr>\n                <td colspan=\"8\" class=\"erp-empty-state\">\n                  {{\n                    loading()\n                      ? 'Loading scholarships\u2026'\n                      : search || statusFilter() !== 'all'\n                        ? 'No scholarships match these filters.'\n                        : 'No scholarships have been created.'\n                  }}\n                </td>\n              </tr>\n            }\n          </tbody>\n        </table>\n      </div>\n    </section>\n  } @else {\n    <div class=\"scholarship-editor-layout\">\n      <section class=\"erp-card erp-card--padded scholarship-form\">\n        <div class=\"erp-card__header\">\n          <div>\n            <h2>Scheme definition</h2>\n            <p>Choose whether this scheme uses a saved value or a custom value during assignment.</p>\n          </div>\n        </div>\n        <div class=\"erp-form-grid\">\n          <label\n            ><span>Scholarship name *</span\n            ><input\n              class=\"erp-control\"\n              [(ngModel)]=\"name\"\n              maxlength=\"120\"\n              placeholder=\"Merit Scholarship\"\n          /></label>\n          <label\n            ><span>Priority *</span\n            ><input class=\"erp-control\" type=\"number\" min=\"1\" step=\"1\" [(ngModel)]=\"priority\" />\n            <small>Lower numbers are applied first (admin only).</small></label\n          >\n          <label\n            ><span>Value configuration *</span\n            ><select class=\"erp-control\" [(ngModel)]=\"valueMode\">\n              <option value=\"preconfigured\">Preconfigured value</option>\n              <option value=\"custom\">Custom during student assignment</option>\n            </select></label\n          >\n          @if (valueMode === 'preconfigured') {\n            <label\n              ><span>Calculation *</span\n              ><select class=\"erp-control\" [(ngModel)]=\"type\">\n                <option value=\"percentage\">Percentage</option>\n                <option value=\"fixed\">Fixed amount</option>\n              </select></label\n            >\n            <label\n              ><span>{{ type === 'percentage' ? 'Percentage *' : 'Fixed amount *' }}</span\n              ><input\n                class=\"erp-control\"\n                type=\"number\"\n                min=\"0.01\"\n                step=\"0.01\"\n                [max]=\"type === 'percentage' ? 100 : 1000000000\"\n                [(ngModel)]=\"value\"\n                [placeholder]=\"type === 'percentage' ? '5' : '10000'\"\n            /></label>\n          }\n          <label\n            ><span>Availability</span\n            ><select class=\"erp-control\" [(ngModel)]=\"isActive\">\n              <option [ngValue]=\"true\">Available for assignment</option>\n              <option [ngValue]=\"false\">Inactive</option>\n            </select></label\n          >\n        </div>\n        <div class=\"scholarship-form__actions\">\n          <button class=\"erp-button erp-button--secondary\" type=\"button\" (click)=\"cancelForm()\">\n            Cancel\n          </button>\n          <button\n            class=\"erp-button erp-button--primary\"\n            type=\"button\"\n            [disabled]=\"saving()\"\n            (click)=\"save()\"\n          >\n            {{ saving() ? 'Saving\u2026' : mode() === 'edit' ? 'Save changes' : 'Create scholarship' }}\n          </button>\n        </div>\n      </section>\n      <aside class=\"erp-card erp-card--padded scholarship-guidance\">\n        <h2>How it works</h2>\n        <dl>\n          <div>\n            <dt>Scope</dt>\n            <dd>Tuition Fee only</dd>\n          </div>\n          <div>\n            <dt>Calculation</dt>\n            <dd>Preconfigured schemes reuse their saved value. Custom schemes ask for a value during assignment.</dd>\n          </div>\n          <div>\n            <dt>Frequency</dt>\n            <dd>One-time or carry-forward is chosen while assigning it to a student</dd>\n          </div>\n          <div>\n            <dt>History</dt>\n            <dd>Disabling a scheme keeps previous assignments intact</dd>\n          </div>\n        </dl>\n      </aside>\n    </div>\n  }\n</erp-admin-page>\n", styles: ["/* ERP-LOCAL-STYLE: Scholarship configuration uses separate directory/editor routes with a compact editor guidance rail. */\n:host {\n  display: block;\n}\n.scholarship-metrics {\n  display: flex;\n  min-height: 28px;\n  align-items: center;\n  gap: var(--erp-space-4);\n  margin-bottom: var(--erp-space-2);\n  padding: 0 var(--erp-space-2);\n  color: var(--erp-text-muted);\n  font-size: var(--erp-font-size-xs);\n}\n.scholarship-metrics span + span {\n  padding-left: var(--erp-space-4);\n  border-left: 1px solid var(--erp-border-subtle);\n}\n.scholarship-metrics strong {\n  margin-right: var(--erp-space-1);\n  color: var(--erp-text-heading);\n  font-size: var(--erp-font-label);\n}\n.scholarship-table-toolbar {\n  align-items: flex-end;\n}\n.scholarship-form__actions {\n  display: flex;\n  justify-content: flex-end;\n  gap: var(--erp-space-3);\n  margin-top: var(--erp-space-4);\n}\n.scholarship-status {\n  display: inline-flex;\n  padding: var(--erp-space-1) var(--erp-space-3);\n  border-radius: var(--erp-radius-pill);\n  background: var(--erp-success-bg);\n  color: var(--erp-success-text);\n  font-size: var(--erp-font-caption);\n  font-weight: var(--erp-weight-bold);\n}\n.scholarship-status.is-inactive {\n  background: var(--erp-surface-neutral);\n  color: var(--erp-text-muted);\n}\n.scholarship-editor-layout {\n  display: grid;\n  grid-template-columns: minmax(0, 1fr) 280px;\n  gap: var(--erp-space-4);\n  align-items: start;\n}\n.scholarship-guidance {\n  position: sticky;\n  top: var(--erp-space-4);\n}\n.scholarship-guidance h2 {\n  margin: 0 0 var(--erp-space-3);\n  color: var(--erp-text-heading);\n  font-size: var(--erp-font-label);\n}\n.scholarship-guidance dl {\n  margin: 0;\n}\n.scholarship-guidance dl div {\n  padding: var(--erp-space-3) 0;\n  border-bottom: 1px solid var(--erp-border-subtle);\n}\n.scholarship-guidance dt {\n  color: var(--erp-text-muted);\n  font-size: var(--erp-font-size-2xs);\n}\n.scholarship-guidance dd {\n  margin: var(--erp-space-1) 0 0;\n  color: var(--erp-text-body);\n  font-size: var(--erp-font-size-xs);\n}\n@media (max-width: 900px) {\n  .scholarship-editor-layout {\n    grid-template-columns: 1fr;\n  }\n  .scholarship-guidance {\n    position: static;\n  }\n}\n@media (max-width: 720px) {\n  .scholarship-metrics {\n    gap: var(--erp-space-3);\n    overflow-x: auto;\n    white-space: nowrap;\n  }\n  .scholarship-metrics span + span {\n    padding-left: var(--erp-space-3);\n  }\n  .scholarship-table-toolbar {\n    align-items: stretch;\n  }\n}\n"] }]
    }], () => [], null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(ScholarshipsComponent, { className: "ScholarshipsComponent", filePath: "frontend/src/app/features/admin/scholarships/scholarships.component.ts", lineNumber: 31 }); })();
