import { ChangeDetectionStrategy, Component, input, output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LucidePlus } from '@lucide/angular';
import { CompactActionMenuComponent, } from '../../../../shared/ui/compact-action-menu/compact-action-menu.component';
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
const _forTrack0 = ($index, $item) => $item._id;
function FormBuilderToolbarComponent_For_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 3);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r1 = ctx.$implicit;
    i0.ɵɵproperty("value", item_r1._id);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate3(" ", item_r1.name, " \u00B7 ", item_r1.status, " \u00B7 v", item_r1.version, " ");
} }
function FormBuilderToolbarComponent_Conditional_8_Template(rf, ctx) { if (rf & 1) {
    const _r2 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "span", 7);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(2, "erp-compact-action-menu", 8);
    i0.ɵɵlistener("selected", function FormBuilderToolbarComponent_Conditional_8_Template_erp_compact_action_menu_selected_2_listener($event) { i0.ɵɵrestoreView(_r2); const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.formAction.emit($event)); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const activeForm_r4 = ctx;
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵclassProp("erp-status--draft", activeForm_r4.status !== "published");
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", activeForm_r4.status, " ");
    i0.ɵɵadvance();
    i0.ɵɵproperty("items", ctx_r2.formActions);
} }
export class FormBuilderToolbarComponent {
    forms = input([], ...(ngDevMode ? [{ debugName: "forms" }] : /* istanbul ignore next */ []));
    form = input(null, ...(ngDevMode ? [{ debugName: "form" }] : /* istanbul ignore next */ []));
    formSelected = output();
    createRequested = output();
    formAction = output();
    formActions = [
        {
            id: 'delete',
            label: 'Delete form',
            icon: 'delete',
            destructive: true,
        },
    ];
    static ɵfac = function FormBuilderToolbarComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || FormBuilderToolbarComponent)(); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: FormBuilderToolbarComponent, selectors: [["erp-form-builder-toolbar"]], inputs: { forms: [1, "forms"], form: [1, "form"] }, outputs: { formSelected: "formSelected", createRequested: "createRequested", formAction: "formAction" }, decls: 13, vars: 2, consts: [["aria-label", "Form builder toolbar", 1, "toolbar"], [1, "toolbar__selector-group"], [1, "erp-control", 3, "ngModelChange", "ngModel"], [3, "value"], [1, "toolbar__spacer"], ["type", "button", 1, "erp-button", "erp-button--secondary", 3, "click"], ["lucidePlus", "", "size", "16", "aria-hidden", "true"], [1, "erp-status"], [3, "selected", "items"]], template: function FormBuilderToolbarComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "section", 0)(1, "div", 1)(2, "label")(3, "span");
            i0.ɵɵtext(4, "Admission form");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(5, "select", 2);
            i0.ɵɵlistener("ngModelChange", function FormBuilderToolbarComponent_Template_select_ngModelChange_5_listener($event) { return ctx.formSelected.emit($event); });
            i0.ɵɵrepeaterCreate(6, FormBuilderToolbarComponent_For_7_Template, 2, 4, "option", 3, _forTrack0);
            i0.ɵɵelementEnd()();
            i0.ɵɵconditionalCreate(8, FormBuilderToolbarComponent_Conditional_8_Template, 3, 4);
            i0.ɵɵelementEnd();
            i0.ɵɵelement(9, "span", 4);
            i0.ɵɵelementStart(10, "button", 5);
            i0.ɵɵlistener("click", function FormBuilderToolbarComponent_Template_button_click_10_listener() { return ctx.createRequested.emit(); });
            i0.ɵɵnamespaceSVG();
            i0.ɵɵelement(11, "svg", 6);
            i0.ɵɵtext(12, " Create form ");
            i0.ɵɵelementEnd()();
        } if (rf & 2) {
            let tmp_0_0;
            let tmp_2_0;
            i0.ɵɵadvance(5);
            i0.ɵɵproperty("ngModel", (tmp_0_0 = ctx.form()) == null ? null : tmp_0_0._id);
            i0.ɵɵadvance();
            i0.ɵɵrepeater(ctx.forms());
            i0.ɵɵadvance(2);
            i0.ɵɵconditional((tmp_2_0 = ctx.form()) ? 8 : -1, tmp_2_0);
        } }, dependencies: [FormsModule, i1.NgSelectOption, i1.ɵNgSelectMultipleOption, i1.SelectControlValueAccessor, i1.NgControlStatus, i1.NgModel, LucidePlus, CompactActionMenuComponent], encapsulation: 2, changeDetection: 0 });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(FormBuilderToolbarComponent, [{
        type: Component,
        args: [{
                selector: 'erp-form-builder-toolbar',
                imports: [FormsModule, LucidePlus, CompactActionMenuComponent],
                template: `
    <section class="toolbar" aria-label="Form builder toolbar">
      <div class="toolbar__selector-group">
        <label>
          <span>Admission form</span>
          <select
            class="erp-control"
            [ngModel]="form()?._id"
            (ngModelChange)="formSelected.emit($event)"
          >
            @for (item of forms(); track item._id) {
              <option [value]="item._id">
                {{ item.name }} · {{ item.status }} · v{{ item.version }}
              </option>
            }
          </select>
        </label>
        @if (form(); as activeForm) {
          <span class="erp-status" [class.erp-status--draft]="activeForm.status !== 'published'">
            {{ activeForm.status }}
          </span>
          <erp-compact-action-menu [items]="formActions" (selected)="formAction.emit($event)" />
        }
      </div>
      <span class="toolbar__spacer"></span>
      <button
        class="erp-button erp-button--secondary"
        type="button"
        (click)="createRequested.emit()"
      >
        <svg lucidePlus size="16" aria-hidden="true"></svg>
        Create form
      </button>
    </section>
  `,
                changeDetection: ChangeDetectionStrategy.OnPush,
            }]
    }], null, { forms: [{ type: i0.Input, args: [{ isSignal: true, alias: "forms", required: false }] }], form: [{ type: i0.Input, args: [{ isSignal: true, alias: "form", required: false }] }], formSelected: [{ type: i0.Output, args: ["formSelected"] }], createRequested: [{ type: i0.Output, args: ["createRequested"] }], formAction: [{ type: i0.Output, args: ["formAction"] }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(FormBuilderToolbarComponent, { className: "FormBuilderToolbarComponent", filePath: "frontend/src/app/features/admin/form-builder/components/form-builder-toolbar.component.ts", lineNumber: 50 }); })();
