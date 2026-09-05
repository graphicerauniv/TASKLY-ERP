import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { LucideMegaphone } from '@lucide/angular';
import { DashboardWidgetStateComponent } from '../dashboard-widget-state/dashboard-widget-state.component';
import * as i0 from "@angular/core";
const _forTrack0 = ($index, $item) => $item.id;
function NoticesUpdatesCardComponent_Conditional_11_For_2_Conditional_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "small");
    i0.ɵɵtext(1, "Check your exam schedule in Exams section.");
    i0.ɵɵelementEnd();
} }
function NoticesUpdatesCardComponent_Conditional_11_For_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "article", 11);
    i0.ɵɵelement(1, "span", 12);
    i0.ɵɵelementStart(2, "span", 13)(3, "strong");
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵconditionalCreate(5, NoticesUpdatesCardComponent_Conditional_11_For_2_Conditional_5_Template, 2, 0, "small");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "time");
    i0.ɵɵtext(7);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const notice_r1 = ctx.$implicit;
    const ɵ$index_23_r2 = ctx.$index;
    i0.ɵɵclassProp("student-notice--featured", ɵ$index_23_r2 === 0);
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(notice_r1.title);
    i0.ɵɵadvance();
    i0.ɵɵconditional(ɵ$index_23_r2 === 0 ? 5 : -1);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ɵ$index_23_r2 === 0 ? "2h ago" : notice_r1.publishedAt);
} }
function NoticesUpdatesCardComponent_Conditional_11_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 7);
    i0.ɵɵrepeaterCreate(1, NoticesUpdatesCardComponent_Conditional_11_For_2_Template, 8, 5, "article", 8, _forTrack0);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "div", 9);
    i0.ɵɵelement(4, "span", 10)(5, "span")(6, "span")(7, "span");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    i0.ɵɵadvance();
    i0.ɵɵrepeater(ctx);
} }
function NoticesUpdatesCardComponent_Conditional_12_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "erp-dashboard-widget-state", 6);
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵproperty("status", ctx_r2.state().status);
} }
export class NoticesUpdatesCardComponent {
    state = input.required(...(ngDevMode ? [{ debugName: "state" }] : /* istanbul ignore next */ []));
    static ɵfac = function NoticesUpdatesCardComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || NoticesUpdatesCardComponent)(); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: NoticesUpdatesCardComponent, selectors: [["erp-notices-updates-card"]], inputs: { state: [1, "state"] }, decls: 13, vars: 1, consts: [[1, "student-operational-card", "student-operational-card--notices"], [1, "student-operational-card__header"], ["lucideMegaphone", "", "size", "18", "aria-hidden", "true"], [1, "student-notices__desktop-title"], [1, "student-notices__mobile-title"], ["type", "button", "disabled", ""], ["title", "Notices unavailable", "message", "Relevant campus notices will appear when the student notice service is connected.", 3, "status"], [1, "student-notices-list"], [1, "student-notice", 3, "student-notice--featured"], ["aria-hidden", "true", 1, "student-notices__pagination"], [1, "student-notices__pagination-dot--active"], [1, "student-notice"], ["aria-hidden", "true", 1, "student-notice__marker"], [1, "student-notice__copy"]], template: function NoticesUpdatesCardComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "article", 0)(1, "header", 1)(2, "span");
            i0.ɵɵnamespaceSVG();
            i0.ɵɵelement(3, "svg", 2);
            i0.ɵɵnamespaceHTML();
            i0.ɵɵelementStart(4, "strong")(5, "span", 3);
            i0.ɵɵtext(6, "Notices & updates");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(7, "span", 4);
            i0.ɵɵtext(8, "Announcements");
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(9, "button", 5);
            i0.ɵɵtext(10, "View all");
            i0.ɵɵelementEnd()();
            i0.ɵɵconditionalCreate(11, NoticesUpdatesCardComponent_Conditional_11_Template, 8, 0)(12, NoticesUpdatesCardComponent_Conditional_12_Template, 1, 1, "erp-dashboard-widget-state", 6);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            let tmp_0_0;
            i0.ɵɵadvance(11);
            i0.ɵɵconditional((tmp_0_0 = ctx.state().data) ? 11 : 12, tmp_0_0);
        } }, dependencies: [DashboardWidgetStateComponent, LucideMegaphone], encapsulation: 2, changeDetection: 0 });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(NoticesUpdatesCardComponent, [{
        type: Component,
        args: [{
                selector: 'erp-notices-updates-card',
                imports: [DashboardWidgetStateComponent, LucideMegaphone],
                template: `
    <article class="student-operational-card student-operational-card--notices">
      <header class="student-operational-card__header">
        <span
          ><svg lucideMegaphone size="18" aria-hidden="true"></svg
          ><strong><span class="student-notices__desktop-title">Notices & updates</span><span class="student-notices__mobile-title">Announcements</span></strong></span
        >
        <button type="button" disabled>View all</button>
      </header>
      @if (state().data; as notices) {
        <div class="student-notices-list">
          @for (notice of notices; track notice.id; let index = $index) {
            <article class="student-notice" [class.student-notice--featured]="index === 0">
              <span class="student-notice__marker" aria-hidden="true"></span>
              <span class="student-notice__copy">
                <strong>{{ notice.title }}</strong>
                @if (index === 0) {
                  <small>Check your exam schedule in Exams section.</small>
                }
              </span>
              <time>{{ index === 0 ? '2h ago' : notice.publishedAt }}</time>
            </article>
          }
        </div>
        <div class="student-notices__pagination" aria-hidden="true">
          <span class="student-notices__pagination-dot--active"></span><span></span><span></span><span></span>
        </div>
      } @else {
        <erp-dashboard-widget-state
          [status]="state().status"
          title="Notices unavailable"
          message="Relevant campus notices will appear when the student notice service is connected."
        />
      }
    </article>
  `,
                changeDetection: ChangeDetectionStrategy.OnPush,
            }]
    }], null, { state: [{ type: i0.Input, args: [{ isSignal: true, alias: "state", required: true }] }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(NoticesUpdatesCardComponent, { className: "NoticesUpdatesCardComponent", filePath: "frontend/src/app/features/student/dashboard/components/notices-updates-card/notices-updates-card.component.ts", lineNumber: 50 }); })();
