import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LucideCalendarDays, LucideChevronRight, LucideMapPin } from '@lucide/angular';
import { DashboardWidgetStateComponent } from '../dashboard-widget-state/dashboard-widget-state.component';
import * as i0 from "@angular/core";
const _forTrack0 = ($index, $item) => $item.id;
function UpcomingScheduleCardComponent_Conditional_8_Conditional_0_For_28_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 14)(1, "time");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelement(3, "span", 16);
    i0.ɵɵelementStart(4, "span", 17)(5, "strong");
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "small");
    i0.ɵɵtext(8);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(9, "small", 18);
    i0.ɵɵtext(10);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const item_r1 = ctx.$implicit;
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(item_r1.startTime);
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(item_r1.title);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate2("", item_r1.faculty, " \u00B7 ", item_r1.location);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(item_r1.relativeLabel);
} }
function UpcomingScheduleCardComponent_Conditional_8_Conditional_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 6)(1, "div", 7)(2, "strong");
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "span");
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "small");
    i0.ɵɵtext(7);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(8, "div", 8)(9, "strong");
    i0.ɵɵtext(10);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(11, "p")(12, "span");
    i0.ɵɵtext(13);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(14, "span");
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(15, "svg", 9);
    i0.ɵɵtext(16);
    i0.ɵɵelementEnd()();
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(17, "div", 10)(18, "span");
    i0.ɵɵtext(19, "Scheduled");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(20, "span");
    i0.ɵɵtext(21);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(22, "span");
    i0.ɵɵtext(23, "Completed");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(24, "button", 11);
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(25, "svg", 12);
    i0.ɵɵelementEnd()();
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(26, "div", 13);
    i0.ɵɵrepeaterCreate(27, UpcomingScheduleCardComponent_Conditional_8_Conditional_0_For_28_Template, 11, 5, "div", 14, _forTrack0);
    i0.ɵɵelementStart(29, "button", 15);
    i0.ɵɵtext(30, " View full schedule ");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const nextClass_r2 = ctx;
    const schedule_r3 = i0.ɵɵnextContext();
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(nextClass_r2.startTime.split(" ")[0]);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(nextClass_r2.startTime.split(" ")[1]);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(nextClass_r2.relativeLabel);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(nextClass_r2.title);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(nextClass_r2.faculty);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(nextClass_r2.location);
    i0.ɵɵadvance();
    i0.ɵɵattribute("aria-label", nextClass_r2.relativeLabel);
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(nextClass_r2.relativeLabel);
    i0.ɵɵadvance(6);
    i0.ɵɵrepeater(schedule_r3);
} }
function UpcomingScheduleCardComponent_Conditional_8_Conditional_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "erp-dashboard-widget-state", 5);
} }
function UpcomingScheduleCardComponent_Conditional_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵconditionalCreate(0, UpcomingScheduleCardComponent_Conditional_8_Conditional_0_Template, 31, 8)(1, UpcomingScheduleCardComponent_Conditional_8_Conditional_1_Template, 1, 0, "erp-dashboard-widget-state", 5);
} if (rf & 2) {
    let tmp_2_0;
    i0.ɵɵconditional((tmp_2_0 = ctx[0]) ? 0 : 1, tmp_2_0);
} }
function UpcomingScheduleCardComponent_Conditional_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "erp-dashboard-widget-state", 4);
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext();
    i0.ɵɵproperty("status", ctx_r3.state().status)("message", ctx_r3.state().errorMessage || "Your timetable is currently unavailable.");
} }
export class UpcomingScheduleCardComponent {
    state = input.required(...(ngDevMode ? [{ debugName: "state" }] : /* istanbul ignore next */ []));
    static ɵfac = function UpcomingScheduleCardComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || UpcomingScheduleCardComponent)(); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: UpcomingScheduleCardComponent, selectors: [["erp-upcoming-schedule-card"]], inputs: { state: [1, "state"] }, decls: 10, vars: 1, consts: [[1, "student-operational-card", "student-operational-card--schedule"], [1, "student-operational-card__header"], ["lucideCalendarDays", "", "size", "18", "aria-hidden", "true"], ["type", "button", "routerLink", "/student/academics/timetable", "aria-label", "View timetable"], ["title", "Schedule unavailable", 3, "status", "message"], ["status", "empty", "title", "No more classes today", "message", "Your next configured class will appear here on its scheduled day."], [1, "student-schedule-mobile"], [1, "student-schedule-mobile__time"], [1, "student-schedule-mobile__content"], ["lucideMapPin", "", "size", "14", "aria-hidden", "true"], [1, "student-schedule-mobile__timeline"], ["type", "button", "routerLink", "/student/academics/timetable", "aria-label", "Open timetable"], ["lucideChevronRight", "", "size", "22", "aria-hidden", "true"], [1, "student-schedule-desktop"], [1, "student-schedule-row"], ["type", "button", "routerLink", "/student/academics/timetable"], ["aria-hidden", "true", 1, "student-schedule-row__marker"], [1, "student-schedule-row__details"], [1, "student-schedule-row__relative"]], template: function UpcomingScheduleCardComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "article", 0)(1, "header", 1)(2, "span");
            i0.ɵɵnamespaceSVG();
            i0.ɵɵelement(3, "svg", 2);
            i0.ɵɵnamespaceHTML();
            i0.ɵɵelementStart(4, "strong");
            i0.ɵɵtext(5, "Up next");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(6, "button", 3);
            i0.ɵɵtext(7, " View timetable ");
            i0.ɵɵelementEnd()();
            i0.ɵɵconditionalCreate(8, UpcomingScheduleCardComponent_Conditional_8_Template, 2, 1)(9, UpcomingScheduleCardComponent_Conditional_9_Template, 1, 2, "erp-dashboard-widget-state", 4);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            let tmp_0_0;
            i0.ɵɵadvance(8);
            i0.ɵɵconditional((tmp_0_0 = ctx.state().data) ? 8 : 9, tmp_0_0);
        } }, dependencies: [DashboardWidgetStateComponent,
            RouterLink,
            LucideCalendarDays,
            LucideChevronRight,
            LucideMapPin], encapsulation: 2, changeDetection: 0 });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(UpcomingScheduleCardComponent, [{
        type: Component,
        args: [{
                selector: 'erp-upcoming-schedule-card',
                imports: [
                    DashboardWidgetStateComponent,
                    RouterLink,
                    LucideCalendarDays,
                    LucideChevronRight,
                    LucideMapPin,
                ],
                template: `
    <article class="student-operational-card student-operational-card--schedule">
      <header class="student-operational-card__header">
        <span
          ><svg lucideCalendarDays size="18" aria-hidden="true"></svg><strong>Up next</strong></span
        >
        <button type="button" routerLink="/student/academics/timetable" aria-label="View timetable">
          View timetable
        </button>
      </header>
      @if (state().data; as schedule) {
        @if (schedule[0]; as nextClass) {
          <div class="student-schedule-mobile">
            <div class="student-schedule-mobile__time">
              <strong>{{ nextClass.startTime.split(' ')[0] }}</strong>
              <span>{{ nextClass.startTime.split(' ')[1] }}</span>
              <small>{{ nextClass.relativeLabel }}</small>
            </div>
            <div class="student-schedule-mobile__content">
              <strong>{{ nextClass.title }}</strong>
              <p>
                <span>{{ nextClass.faculty }}</span>
                <span
                  ><svg lucideMapPin size="14" aria-hidden="true"></svg
                  >{{ nextClass.location }}</span
                >
              </p>
              <div
                class="student-schedule-mobile__timeline"
                [attr.aria-label]="nextClass.relativeLabel"
              >
                <span>Scheduled</span><span>{{ nextClass.relativeLabel }}</span
                ><span>Completed</span>
              </div>
            </div>
            <button
              type="button"
              routerLink="/student/academics/timetable"
              aria-label="Open timetable"
            >
              <svg lucideChevronRight size="22" aria-hidden="true"></svg>
            </button>
          </div>

          <div class="student-schedule-desktop">
            @for (item of schedule; track item.id) {
              <div class="student-schedule-row">
                <time>{{ item.startTime }}</time>
                <span class="student-schedule-row__marker" aria-hidden="true"></span>
                <span class="student-schedule-row__details">
                  <strong>{{ item.title }}</strong>
                  <small>{{ item.faculty }} · {{ item.location }}</small>
                </span>
                <small class="student-schedule-row__relative">{{ item.relativeLabel }}</small>
              </div>
            }
            <button type="button" routerLink="/student/academics/timetable">
              View full schedule
            </button>
          </div>
        } @else {
          <erp-dashboard-widget-state
            status="empty"
            title="No more classes today"
            message="Your next configured class will appear here on its scheduled day."
          />
        }
      } @else {
        <erp-dashboard-widget-state
          [status]="state().status"
          title="Schedule unavailable"
          [message]="state().errorMessage || 'Your timetable is currently unavailable.'"
        />
      }
    </article>
  `,
                changeDetection: ChangeDetectionStrategy.OnPush,
            }]
    }], null, { state: [{ type: i0.Input, args: [{ isSignal: true, alias: "state", required: true }] }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(UpcomingScheduleCardComponent, { className: "UpcomingScheduleCardComponent", filePath: "frontend/src/app/features/student/dashboard/components/upcoming-schedule-card/upcoming-schedule-card.component.ts", lineNumber: 97 }); })();
