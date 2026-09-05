import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';
import { LucideIndianRupee } from '@lucide/angular';
import { DashboardWidgetStateComponent } from '../dashboard-widget-state/dashboard-widget-state.component';
import * as i0 from "@angular/core";
function FeeStatusCardComponent_Conditional_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 3)(1, "div")(2, "small");
    i0.ɵɵtext(3, "Total fees");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "strong");
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "span", 5);
    i0.ɵɵelement(7, "i");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "small", 6);
    i0.ɵɵtext(9);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(10, "div")(11, "small");
    i0.ɵɵtext(12, "Paid");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(13, "strong");
    i0.ɵɵtext(14);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(15, "button", 7);
    i0.ɵɵtext(16, "View details");
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const fees_r1 = ctx;
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(fees_r1.totalBilled);
    i0.ɵɵadvance(2);
    i0.ɵɵstyleProp("width", ctx_r1.paidPercentage(), "%");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1("Due ", fees_r1.currentDue);
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(fees_r1.totalPaid);
} }
function FeeStatusCardComponent_Conditional_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "erp-dashboard-widget-state", 4);
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵproperty("status", ctx_r1.state().status);
} }
export class FeeStatusCardComponent {
    state = input.required(...(ngDevMode ? [{ debugName: "state" }] : /* istanbul ignore next */ []));
    paidPercentage = computed(() => {
        const fees = this.state().data;
        if (!fees?.totalBilled || !fees.totalPaid)
            return 0;
        const billed = Number(fees.totalBilled.replace(/[^\d.]/g, ''));
        const paid = Number(fees.totalPaid.replace(/[^\d.]/g, ''));
        return billed > 0 ? Math.min(100, Math.round((paid / billed) * 100)) : 0;
    }, ...(ngDevMode ? [{ debugName: "paidPercentage" }] : /* istanbul ignore next */ []));
    static ɵfac = function FeeStatusCardComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || FeeStatusCardComponent)(); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: FeeStatusCardComponent, selectors: [["erp-fee-status-card"]], inputs: { state: [1, "state"] }, decls: 8, vars: 1, consts: [[1, "student-operational-card", "student-operational-card--compact"], [1, "student-operational-card__header"], ["lucideIndianRupee", "", "size", "18", "aria-hidden", "true"], [1, "student-fee-summary"], ["title", "Fee status unavailable", "message", "A student-authorized ledger summary is not connected yet.", 3, "status"], ["aria-hidden", "true", 1, "student-fee-summary__progress"], [1, "student-fee-summary__due"], ["type", "button", "disabled", ""]], template: function FeeStatusCardComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "article", 0)(1, "header", 1)(2, "span");
            i0.ɵɵnamespaceSVG();
            i0.ɵɵelement(3, "svg", 2);
            i0.ɵɵnamespaceHTML();
            i0.ɵɵelementStart(4, "strong");
            i0.ɵɵtext(5, "Fee status");
            i0.ɵɵelementEnd()()();
            i0.ɵɵconditionalCreate(6, FeeStatusCardComponent_Conditional_6_Template, 17, 5, "div", 3)(7, FeeStatusCardComponent_Conditional_7_Template, 1, 1, "erp-dashboard-widget-state", 4);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            let tmp_0_0;
            i0.ɵɵadvance(6);
            i0.ɵɵconditional((tmp_0_0 = ctx.state().data) ? 6 : 7, tmp_0_0);
        } }, dependencies: [DashboardWidgetStateComponent, LucideIndianRupee], encapsulation: 2, changeDetection: 0 });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(FeeStatusCardComponent, [{
        type: Component,
        args: [{
                selector: 'erp-fee-status-card',
                imports: [DashboardWidgetStateComponent, LucideIndianRupee],
                template: `
    <article class="student-operational-card student-operational-card--compact">
      <header class="student-operational-card__header">
        <span
          ><svg lucideIndianRupee size="18" aria-hidden="true"></svg
          ><strong>Fee status</strong></span
        >
      </header>
      @if (state().data; as fees) {
        <div class="student-fee-summary">
          <div>
            <small>Total fees</small>
            <strong>{{ fees.totalBilled }}</strong>
            <span class="student-fee-summary__progress" aria-hidden="true">
              <i [style.width.%]="paidPercentage()"></i>
            </span>
            <small class="student-fee-summary__due">Due {{ fees.currentDue }}</small>
          </div>
          <div>
            <small>Paid</small>
            <strong>{{ fees.totalPaid }}</strong>
            <button type="button" disabled>View details</button>
          </div>
        </div>
      } @else {
        <erp-dashboard-widget-state
          [status]="state().status"
          title="Fee status unavailable"
          message="A student-authorized ledger summary is not connected yet."
        />
      }
    </article>
  `,
                changeDetection: ChangeDetectionStrategy.OnPush,
            }]
    }], null, { state: [{ type: i0.Input, args: [{ isSignal: true, alias: "state", required: true }] }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(FeeStatusCardComponent, { className: "FeeStatusCardComponent", filePath: "frontend/src/app/features/student/dashboard/components/fee-status-card/fee-status-card.component.ts", lineNumber: 47 }); })();
