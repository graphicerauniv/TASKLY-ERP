import { ChangeDetectionStrategy, Component, input, signal } from '@angular/core';
import * as i0 from "@angular/core";
const _c0 = () => [0, 1, 2];
function DashboardQuickUpdatesComponent_Conditional_12_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵdomElementStart(0, "article", 6)(1, "small");
    i0.ɵɵtext(2, "Fee due");
    i0.ɵɵdomElementEnd();
    i0.ɵɵdomElementStart(3, "strong");
    i0.ɵɵtext(4);
    i0.ɵɵdomElementEnd();
    i0.ɵɵdomElementStart(5, "span");
    i0.ɵɵtext(6);
    i0.ɵɵdomElementEnd()();
} if (rf & 2) {
    const fee_r1 = ctx;
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(fee_r1.currentDue);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1("Due by ", fee_r1.dueDate);
} }
function DashboardQuickUpdatesComponent_Conditional_13_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵdomElementStart(0, "article", 7)(1, "small");
    i0.ɵɵtext(2, "Attendance");
    i0.ɵɵdomElementEnd();
    i0.ɵɵdomElementStart(3, "strong");
    i0.ɵɵtext(4);
    i0.ɵɵdomElementEnd();
    i0.ɵɵdomElementStart(5, "span");
    i0.ɵɵtext(6, "This month");
    i0.ɵɵdomElementEnd();
    i0.ɵɵdomElement(7, "i", 3);
    i0.ɵɵdomElementEnd();
} if (rf & 2) {
    const attendanceData_r2 = ctx;
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate1("", attendanceData_r2.percentage, "%");
    i0.ɵɵadvance(3);
    i0.ɵɵstyleProp("--student-update-progress", (attendanceData_r2.percentage || 0) + "%");
} }
function DashboardQuickUpdatesComponent_Conditional_14_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵdomElementStart(0, "article", 8)(1, "small");
    i0.ɵɵtext(2, "Exam on");
    i0.ɵɵdomElementEnd();
    i0.ɵɵdomElementStart(3, "strong");
    i0.ɵɵtext(4);
    i0.ɵɵdomElementEnd();
    i0.ɵɵdomElementStart(5, "span");
    i0.ɵɵtext(6);
    i0.ɵɵdomElementEnd()();
} if (rf & 2) {
    const exam_r3 = ctx;
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(exam_r3.date);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(exam_r3.title);
} }
function DashboardQuickUpdatesComponent_For_17_Template(rf, ctx) { if (rf & 1) {
    const _r4 = i0.ɵɵgetCurrentView();
    i0.ɵɵdomElementStart(0, "button", 11);
    i0.ɵɵdomListener("click", function DashboardQuickUpdatesComponent_For_17_Template_button_click_0_listener() { const dot_r5 = i0.ɵɵrestoreView(_r4).$implicit; const ctx_r5 = i0.ɵɵnextContext(); const quickUpdatesTrack_r7 = i0.ɵɵreference(11); return i0.ɵɵresetView(ctx_r5.focusCard(quickUpdatesTrack_r7, dot_r5)); });
    i0.ɵɵdomElementEnd();
} if (rf & 2) {
    const dot_r5 = ctx.$implicit;
    const ctx_r5 = i0.ɵɵnextContext();
    i0.ɵɵclassProp("student-quick-updates__dot--active", ctx_r5.activeIndex() === dot_r5);
    i0.ɵɵattribute("aria-label", "Show update " + (dot_r5 + 1));
} }
export class DashboardQuickUpdatesComponent {
    attendance = input.required(...(ngDevMode ? [{ debugName: "attendance" }] : /* istanbul ignore next */ []));
    fees = input.required(...(ngDevMode ? [{ debugName: "fees" }] : /* istanbul ignore next */ []));
    examination = input.required(...(ngDevMode ? [{ debugName: "examination" }] : /* istanbul ignore next */ []));
    activeIndex = signal(0, ...(ngDevMode ? [{ debugName: "activeIndex" }] : /* istanbul ignore next */ []));
    updateActiveCard(event) {
        const track = event.currentTarget;
        if (!(track instanceof HTMLElement))
            return;
        const firstCard = track.querySelector('.student-quick-update');
        if (!firstCard)
            return;
        const step = firstCard.offsetWidth + 12;
        this.activeIndex.set(Math.max(0, Math.min(2, Math.round(track.scrollLeft / step))));
    }
    focusCard(track, index) {
        const card = track.children.item(index);
        if (card instanceof HTMLElement) {
            card.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'start' });
            this.activeIndex.set(index);
        }
    }
    static ɵfac = function DashboardQuickUpdatesComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || DashboardQuickUpdatesComponent)(); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: DashboardQuickUpdatesComponent, selectors: [["erp-dashboard-quick-updates"]], inputs: { attendance: [1, "attendance"], fees: [1, "fees"], examination: [1, "examination"] }, decls: 18, vars: 4, consts: [["quickUpdatesTrack", ""], ["aria-labelledby", "student-quick-updates-title", 1, "student-quick-updates"], ["id", "student-quick-updates-title"], ["aria-hidden", "true"], ["type", "button", "disabled", ""], ["tabindex", "0", "aria-label", "Student quick updates", 1, "student-quick-updates__track", 3, "scroll"], [1, "student-quick-update", "student-quick-update--fee"], [1, "student-quick-update", "student-quick-update--attendance"], [1, "student-quick-update", "student-quick-update--exam"], ["aria-label", "Quick update page", 1, "student-quick-updates__pagination"], ["type", "button", 3, "student-quick-updates__dot--active"], ["type", "button", 3, "click"]], template: function DashboardQuickUpdatesComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵdomElementStart(0, "section", 1)(1, "header")(2, "h2", 2);
            i0.ɵɵtext(3, "Quick updates ");
            i0.ɵɵdomElementStart(4, "span", 3);
            i0.ɵɵtext(5, "\u26A1");
            i0.ɵɵdomElementEnd()();
            i0.ɵɵdomElementStart(6, "button", 4);
            i0.ɵɵtext(7, "View all ");
            i0.ɵɵdomElementStart(8, "span", 3);
            i0.ɵɵtext(9, "\u203A");
            i0.ɵɵdomElementEnd()()();
            i0.ɵɵdomElementStart(10, "div", 5, 0);
            i0.ɵɵdomListener("scroll", function DashboardQuickUpdatesComponent_Template_div_scroll_10_listener($event) { return ctx.updateActiveCard($event); });
            i0.ɵɵconditionalCreate(12, DashboardQuickUpdatesComponent_Conditional_12_Template, 7, 2, "article", 6);
            i0.ɵɵconditionalCreate(13, DashboardQuickUpdatesComponent_Conditional_13_Template, 8, 3, "article", 7);
            i0.ɵɵconditionalCreate(14, DashboardQuickUpdatesComponent_Conditional_14_Template, 7, 2, "article", 8);
            i0.ɵɵdomElementEnd();
            i0.ɵɵdomElementStart(15, "div", 9);
            i0.ɵɵrepeaterCreate(16, DashboardQuickUpdatesComponent_For_17_Template, 1, 3, "button", 10, i0.ɵɵrepeaterTrackByIdentity);
            i0.ɵɵdomElementEnd()();
        } if (rf & 2) {
            let tmp_1_0;
            let tmp_2_0;
            let tmp_3_0;
            i0.ɵɵadvance(12);
            i0.ɵɵconditional((tmp_1_0 = ctx.fees().data) ? 12 : -1, tmp_1_0);
            i0.ɵɵadvance();
            i0.ɵɵconditional((tmp_2_0 = ctx.attendance().data) ? 13 : -1, tmp_2_0);
            i0.ɵɵadvance();
            i0.ɵɵconditional((tmp_3_0 = ctx.examination().data) ? 14 : -1, tmp_3_0);
            i0.ɵɵadvance(2);
            i0.ɵɵrepeater(i0.ɵɵpureFunction0(3, _c0));
        } }, encapsulation: 2, changeDetection: 0 });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(DashboardQuickUpdatesComponent, [{
        type: Component,
        args: [{ selector: 'erp-dashboard-quick-updates', changeDetection: ChangeDetectionStrategy.OnPush, template: "<section class=\"student-quick-updates\" aria-labelledby=\"student-quick-updates-title\">\n  <header>\n    <h2 id=\"student-quick-updates-title\">Quick updates <span aria-hidden=\"true\">\u26A1</span></h2>\n    <button type=\"button\" disabled>View all <span aria-hidden=\"true\">\u203A</span></button>\n  </header>\n\n  <div\n    #quickUpdatesTrack\n    class=\"student-quick-updates__track\"\n    tabindex=\"0\"\n    aria-label=\"Student quick updates\"\n    (scroll)=\"updateActiveCard($event)\"\n  >\n    @if (fees().data; as fee) {\n      <article class=\"student-quick-update student-quick-update--fee\">\n        <small>Fee due</small>\n        <strong>{{ fee.currentDue }}</strong>\n        <span>Due by {{ fee.dueDate }}</span>\n      </article>\n    }\n    @if (attendance().data; as attendanceData) {\n      <article class=\"student-quick-update student-quick-update--attendance\">\n        <small>Attendance</small>\n        <strong>{{ attendanceData.percentage }}%</strong>\n        <span>This month</span>\n        <i\n          [style.--student-update-progress]=\"(attendanceData.percentage || 0) + '%'\"\n          aria-hidden=\"true\"\n        ></i>\n      </article>\n    }\n    @if (examination().data; as exam) {\n      <article class=\"student-quick-update student-quick-update--exam\">\n        <small>Exam on</small>\n        <strong>{{ exam.date }}</strong>\n        <span>{{ exam.title }}</span>\n      </article>\n    }\n  </div>\n\n  <div class=\"student-quick-updates__pagination\" aria-label=\"Quick update page\">\n    @for (dot of [0, 1, 2]; track dot) {\n      <button\n        type=\"button\"\n        [class.student-quick-updates__dot--active]=\"activeIndex() === dot\"\n        [attr.aria-label]=\"'Show update ' + (dot + 1)\"\n        (click)=\"focusCard(quickUpdatesTrack, dot)\"\n      ></button>\n    }\n  </div>\n</section>\n" }]
    }], null, { attendance: [{ type: i0.Input, args: [{ isSignal: true, alias: "attendance", required: true }] }], fees: [{ type: i0.Input, args: [{ isSignal: true, alias: "fees", required: true }] }], examination: [{ type: i0.Input, args: [{ isSignal: true, alias: "examination", required: true }] }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(DashboardQuickUpdatesComponent, { className: "DashboardQuickUpdatesComponent", filePath: "frontend/src/app/features/student/dashboard/components/dashboard-quick-updates/dashboard-quick-updates.component.ts", lineNumber: 14 }); })();
