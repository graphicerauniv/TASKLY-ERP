import { NgTemplateOutlet } from '@angular/common';
import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LucideBadgeIndianRupee, LucideCalendarPlus, LucideFileCheck2, LucideIdCard, } from '@lucide/angular';
import * as i0 from "@angular/core";
const _c0 = a0 => ({ $implicit: a0 });
const _forTrack0 = ($index, $item) => $item.id;
function DashboardQuickActionsComponent_For_6_Conditional_0_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
function DashboardQuickActionsComponent_For_6_Conditional_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "a", 4);
    i0.ɵɵtemplate(1, DashboardQuickActionsComponent_For_6_Conditional_0_ng_container_1_Template, 1, 0, "ng-container", 6);
    i0.ɵɵelementStart(2, "small");
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const action_r1 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵnextContext();
    const actionIcon_r2 = i0.ɵɵreference(8);
    i0.ɵɵproperty("routerLink", action_r1.route);
    i0.ɵɵattribute("aria-label", action_r1.label);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngTemplateOutlet", actionIcon_r2)("ngTemplateOutletContext", i0.ɵɵpureFunction1(5, _c0, action_r1.id));
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(action_r1.label);
} }
function DashboardQuickActionsComponent_For_6_Conditional_1_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
function DashboardQuickActionsComponent_For_6_Conditional_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "button", 5);
    i0.ɵɵtemplate(1, DashboardQuickActionsComponent_For_6_Conditional_1_ng_container_1_Template, 1, 0, "ng-container", 6);
    i0.ɵɵelementStart(2, "small");
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const action_r1 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵnextContext();
    const actionIcon_r2 = i0.ɵɵreference(8);
    i0.ɵɵattribute("aria-label", action_r1.label + " \u2014 unavailable");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngTemplateOutlet", actionIcon_r2)("ngTemplateOutletContext", i0.ɵɵpureFunction1(4, _c0, action_r1.id));
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(action_r1.label);
} }
function DashboardQuickActionsComponent_For_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵconditionalCreate(0, DashboardQuickActionsComponent_For_6_Conditional_0_Template, 4, 7, "a", 4)(1, DashboardQuickActionsComponent_For_6_Conditional_1_Template, 4, 6, "button", 5);
} if (rf & 2) {
    const action_r1 = ctx.$implicit;
    i0.ɵɵconditional(action_r1.available && action_r1.route ? 0 : 1);
} }
function DashboardQuickActionsComponent_ng_template_7_Case_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(0, "svg", 8);
} }
function DashboardQuickActionsComponent_ng_template_7_Case_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(0, "svg", 9);
} }
function DashboardQuickActionsComponent_ng_template_7_Case_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(0, "svg", 10);
} }
function DashboardQuickActionsComponent_ng_template_7_Case_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(0, "svg", 11);
} }
function DashboardQuickActionsComponent_ng_template_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 7);
    i0.ɵɵconditionalCreate(1, DashboardQuickActionsComponent_ng_template_7_Case_1_Template, 1, 0, ":svg:svg", 8)(2, DashboardQuickActionsComponent_ng_template_7_Case_2_Template, 1, 0, ":svg:svg", 9)(3, DashboardQuickActionsComponent_ng_template_7_Case_3_Template, 1, 0, ":svg:svg", 10)(4, DashboardQuickActionsComponent_ng_template_7_Case_4_Template, 1, 0, ":svg:svg", 11);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    let tmp_3_0;
    const id_r3 = ctx.$implicit;
    i0.ɵɵadvance();
    i0.ɵɵconditional((tmp_3_0 = id_r3) === "fees" ? 1 : tmp_3_0 === "id-card" ? 2 : tmp_3_0 === "certificate" ? 3 : tmp_3_0 === "leave" ? 4 : -1);
} }
export class DashboardQuickActionsComponent {
    actions = input.required(...(ngDevMode ? [{ debugName: "actions" }] : /* istanbul ignore next */ []));
    static ɵfac = function DashboardQuickActionsComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || DashboardQuickActionsComponent)(); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: DashboardQuickActionsComponent, selectors: [["erp-dashboard-quick-actions"]], inputs: { actions: [1, "actions"] }, decls: 9, vars: 0, consts: [["actionIcon", ""], [1, "student-operational-card", "student-operational-card--quick-actions"], [1, "student-operational-card__header"], ["aria-label", "Student quick actions", 1, "student-quick-actions"], [3, "routerLink"], ["type", "button", "disabled", ""], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], ["aria-hidden", "true"], ["lucideBadgeIndianRupee", "", "size", "21"], ["lucideIdCard", "", "size", "21"], ["lucideFileCheck2", "", "size", "21"], ["lucideCalendarPlus", "", "size", "21"]], template: function DashboardQuickActionsComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "article", 1)(1, "header", 2)(2, "strong");
            i0.ɵɵtext(3, "Quick actions");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(4, "div", 3);
            i0.ɵɵrepeaterCreate(5, DashboardQuickActionsComponent_For_6_Template, 2, 1, null, null, _forTrack0);
            i0.ɵɵelementEnd()();
            i0.ɵɵtemplate(7, DashboardQuickActionsComponent_ng_template_7_Template, 5, 1, "ng-template", null, 0, i0.ɵɵtemplateRefExtractor);
        } if (rf & 2) {
            i0.ɵɵadvance(5);
            i0.ɵɵrepeater(ctx.actions());
        } }, dependencies: [RouterLink,
            NgTemplateOutlet,
            LucideBadgeIndianRupee,
            LucideCalendarPlus,
            LucideFileCheck2,
            LucideIdCard], encapsulation: 2, changeDetection: 0 });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(DashboardQuickActionsComponent, [{
        type: Component,
        args: [{
                selector: 'erp-dashboard-quick-actions',
                imports: [
                    RouterLink,
                    NgTemplateOutlet,
                    LucideBadgeIndianRupee,
                    LucideCalendarPlus,
                    LucideFileCheck2,
                    LucideIdCard,
                ],
                template: `
    <article class="student-operational-card student-operational-card--quick-actions">
      <header class="student-operational-card__header"><strong>Quick actions</strong></header>
      <div class="student-quick-actions" aria-label="Student quick actions">
        @for (action of actions(); track action.id) {
          @if (action.available && action.route) {
            <a [routerLink]="action.route" [attr.aria-label]="action.label">
              <ng-container *ngTemplateOutlet="actionIcon; context: { $implicit: action.id }" />
              <small>{{ action.label }}</small>
            </a>
          } @else {
            <button type="button" disabled [attr.aria-label]="action.label + ' — unavailable'">
              <ng-container *ngTemplateOutlet="actionIcon; context: { $implicit: action.id }" />
              <small>{{ action.label }}</small>
            </button>
          }
        }
      </div>
    </article>

    <ng-template #actionIcon let-id>
      <span aria-hidden="true">
        @switch (id) {
          @case ('fees') { <svg lucideBadgeIndianRupee size="21"></svg> }
          @case ('id-card') { <svg lucideIdCard size="21"></svg> }
          @case ('certificate') { <svg lucideFileCheck2 size="21"></svg> }
          @case ('leave') { <svg lucideCalendarPlus size="21"></svg> }
        }
      </span>
    </ng-template>
  `,
                changeDetection: ChangeDetectionStrategy.OnPush,
            }]
    }], null, { actions: [{ type: i0.Input, args: [{ isSignal: true, alias: "actions", required: true }] }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(DashboardQuickActionsComponent, { className: "DashboardQuickActionsComponent", filePath: "frontend/src/app/features/student/dashboard/components/dashboard-quick-actions/dashboard-quick-actions.component.ts", lineNumber: 55 }); })();
