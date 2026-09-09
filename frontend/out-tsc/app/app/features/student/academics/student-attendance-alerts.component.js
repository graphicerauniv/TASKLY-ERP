import { DatePipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { LucideAlertTriangle, LucideBell, LucideCheck, LucideCheckCheck, LucideChevronRight, LucideCircleAlert, LucideClock3, LucideInfo, LucideSearch, LucideSettings, } from '@lucide/angular';
import { ApiService } from '../../../core/api.service';
import { StudentSessionService } from '../shared/services/student-session.service';
import * as i0 from "@angular/core";
const _forTrack0 = ($index, $item) => $item.label;
const _forTrack1 = ($index, $item) => $item.id;
function StudentAttendanceAlertsComponent_Conditional_24_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 8);
    i0.ɵɵtext(1, "Loading notifications\u2026");
    i0.ɵɵelementEnd();
} }
function StudentAttendanceAlertsComponent_Conditional_25_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 9);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r0.error());
} }
function StudentAttendanceAlertsComponent_Conditional_26_For_25_For_4_Case_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(0, "svg", 28);
} }
function StudentAttendanceAlertsComponent_Conditional_26_For_25_For_4_Case_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(0, "svg", 29);
} }
function StudentAttendanceAlertsComponent_Conditional_26_For_25_For_4_Case_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(0, "svg", 30);
} }
function StudentAttendanceAlertsComponent_Conditional_26_For_25_For_4_Case_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(0, "svg", 31);
} }
function StudentAttendanceAlertsComponent_Conditional_26_For_25_For_4_Case_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(0, "svg", 32);
} }
function StudentAttendanceAlertsComponent_Conditional_26_For_25_For_4_Conditional_17_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "i", 34);
} }
function StudentAttendanceAlertsComponent_Conditional_26_For_25_For_4_Template(rf, ctx) { if (rf & 1) {
    const _r4 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "article")(1, "span", 27);
    i0.ɵɵconditionalCreate(2, StudentAttendanceAlertsComponent_Conditional_26_For_25_For_4_Case_2_Template, 1, 0, ":svg:svg", 28)(3, StudentAttendanceAlertsComponent_Conditional_26_For_25_For_4_Case_3_Template, 1, 0, ":svg:svg", 29)(4, StudentAttendanceAlertsComponent_Conditional_26_For_25_For_4_Case_4_Template, 1, 0, ":svg:svg", 30)(5, StudentAttendanceAlertsComponent_Conditional_26_For_25_For_4_Case_5_Template, 1, 0, ":svg:svg", 31)(6, StudentAttendanceAlertsComponent_Conditional_26_For_25_For_4_Case_6_Template, 1, 0, ":svg:svg", 32);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "div", 33)(8, "strong");
    i0.ɵɵtext(9);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(10, "p");
    i0.ɵɵtext(11);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(12, "em");
    i0.ɵɵtext(13);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(14, "time");
    i0.ɵɵtext(15);
    i0.ɵɵpipe(16, "date");
    i0.ɵɵelementEnd();
    i0.ɵɵconditionalCreate(17, StudentAttendanceAlertsComponent_Conditional_26_For_25_For_4_Conditional_17_Template, 1, 0, "i", 34);
    i0.ɵɵelementStart(18, "button", 14);
    i0.ɵɵlistener("click", function StudentAttendanceAlertsComponent_Conditional_26_For_25_For_4_Template_button_click_18_listener() { const item_r5 = i0.ɵɵrestoreView(_r4).$implicit; const ctx_r0 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r0.open(item_r5)); });
    i0.ɵɵtext(19);
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(20, "svg", 35);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    let tmp_25_0;
    const item_r5 = ctx.$implicit;
    const ctx_r0 = i0.ɵɵnextContext(3);
    i0.ɵɵclassProp("is-unread", !item_r5.read);
    i0.ɵɵattribute("data-type", item_r5.type);
    i0.ɵɵadvance(2);
    i0.ɵɵconditional((tmp_25_0 = item_r5.type) === "critical" ? 2 : tmp_25_0 === "risk" ? 3 : tmp_25_0 === "pending" ? 4 : tmp_25_0 === "correction" ? 5 : 6);
    i0.ɵɵadvance(7);
    i0.ɵɵtextInterpolate(item_r5.title);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(item_r5.message);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r0.typeLabel(item_r5.type));
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind2(16, 10, item_r5.createdAt, "dd MMM, h:mm a"));
    i0.ɵɵadvance(2);
    i0.ɵɵconditional(!item_r5.read ? 17 : -1);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1("", item_r5.actionLabel, " ");
} }
function StudentAttendanceAlertsComponent_Conditional_26_For_25_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "section")(1, "h2");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵrepeaterCreate(3, StudentAttendanceAlertsComponent_Conditional_26_For_25_For_4_Template, 21, 13, "article", 26, _forTrack1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const group_r6 = ctx.$implicit;
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(group_r6.label);
    i0.ɵɵadvance();
    i0.ɵɵrepeater(group_r6.items);
} }
function StudentAttendanceAlertsComponent_Conditional_26_ForEmpty_26_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 19);
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(1, "svg", 36);
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(2, "strong");
    i0.ɵɵtext(3, "No matching alerts");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "p");
    i0.ɵɵtext(5, "Try another filter or search term.");
    i0.ɵɵelementEnd()();
} }
function StudentAttendanceAlertsComponent_Conditional_26_Template(rf, ctx) { if (rf & 1) {
    const _r2 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 10)(1, "label");
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(2, "svg", 11);
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(3, "input", 12, 0);
    i0.ɵɵlistener("input", function StudentAttendanceAlertsComponent_Conditional_26_Template_input_input_3_listener() { i0.ɵɵrestoreView(_r2); const searchInput_r3 = i0.ɵɵreference(4); const ctx_r0 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r0.setSearch(searchInput_r3.value)); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(5, "div", 13)(6, "button", 14);
    i0.ɵɵlistener("click", function StudentAttendanceAlertsComponent_Conditional_26_Template_button_click_6_listener() { i0.ɵɵrestoreView(_r2); const ctx_r0 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r0.setFilter("all")); });
    i0.ɵɵtext(7, "All");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "button", 14);
    i0.ɵɵlistener("click", function StudentAttendanceAlertsComponent_Conditional_26_Template_button_click_8_listener() { i0.ɵɵrestoreView(_r2); const ctx_r0 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r0.setFilter("unread")); });
    i0.ɵɵtext(9, "Unread ");
    i0.ɵɵelementStart(10, "b");
    i0.ɵɵtext(11);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(12, "button", 14);
    i0.ɵɵlistener("click", function StudentAttendanceAlertsComponent_Conditional_26_Template_button_click_12_listener() { i0.ɵɵrestoreView(_r2); const ctx_r0 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r0.setFilter("critical")); });
    i0.ɵɵtext(13, "Critical ");
    i0.ɵɵelementStart(14, "b");
    i0.ɵɵtext(15);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(16, "button", 14);
    i0.ɵɵlistener("click", function StudentAttendanceAlertsComponent_Conditional_26_Template_button_click_16_listener() { i0.ɵɵrestoreView(_r2); const ctx_r0 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r0.setFilter("updates")); });
    i0.ɵɵtext(17, "Updates");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(18, "button", 15);
    i0.ɵɵlistener("click", function StudentAttendanceAlertsComponent_Conditional_26_Template_button_click_18_listener() { i0.ɵɵrestoreView(_r2); const ctx_r0 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r0.markAllRead()); });
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(19, "svg", 16);
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(20, "span");
    i0.ɵɵtext(21, "Mark all read");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(22, "div", 17)(23, "main", 18);
    i0.ɵɵrepeaterCreate(24, StudentAttendanceAlertsComponent_Conditional_26_For_25_Template, 5, 1, "section", null, _forTrack0, false, StudentAttendanceAlertsComponent_Conditional_26_ForEmpty_26_Template, 6, 0, "div", 19);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(27, "aside", 20)(28, "h2");
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(29, "svg", 21);
    i0.ɵɵtext(30, " Alerts summary");
    i0.ɵɵelementEnd();
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(31, "div", 22)(32, "strong");
    i0.ɵɵtext(33);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(34, "p");
    i0.ɵɵtext(35, "Unread alerts");
    i0.ɵɵelementStart(36, "small");
    i0.ɵɵtext(37, "Stay on top of your attendance.");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(38, "dl")(39, "div")(40, "dt");
    i0.ɵɵtext(41, "Critical");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(42, "dd");
    i0.ɵɵtext(43);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(44, "div")(45, "dt");
    i0.ɵɵtext(46, "At risk");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(47, "dd");
    i0.ɵɵtext(48);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(49, "div")(50, "dt");
    i0.ɵɵtext(51, "Updates");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(52, "dd");
    i0.ɵɵtext(53);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(54, "a", 23);
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(55, "svg", 24);
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(56, "span")(57, "strong");
    i0.ɵɵtext(58, "Manage preferences");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(59, "small");
    i0.ɵɵtext(60, "Choose which notifications you receive.");
    i0.ɵɵelementEnd()();
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(61, "svg", 25);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const data_r7 = ctx;
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(6);
    i0.ɵɵclassProp("is-active", ctx_r0.filter() === "all");
    i0.ɵɵadvance(2);
    i0.ɵɵclassProp("is-active", ctx_r0.filter() === "unread");
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(data_r7.counts.unread);
    i0.ɵɵadvance();
    i0.ɵɵclassProp("is-active", ctx_r0.filter() === "critical");
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(data_r7.counts.critical + data_r7.counts.risk);
    i0.ɵɵadvance();
    i0.ɵɵclassProp("is-active", ctx_r0.filter() === "updates");
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("disabled", !data_r7.counts.unread);
    i0.ɵɵadvance(6);
    i0.ɵɵrepeater(ctx_r0.groups());
    i0.ɵɵadvance(9);
    i0.ɵɵtextInterpolate(data_r7.counts.unread);
    i0.ɵɵadvance(10);
    i0.ɵɵtextInterpolate(data_r7.counts.critical);
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(data_r7.counts.risk);
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(data_r7.counts.updates);
} }
export class StudentAttendanceAlertsComponent {
    api = inject(ApiService);
    session = inject(StudentSessionService);
    router = inject(Router);
    feed = signal(null, ...(ngDevMode ? [{ debugName: "feed" }] : /* istanbul ignore next */ []));
    loading = signal(true, ...(ngDevMode ? [{ debugName: "loading" }] : /* istanbul ignore next */ []));
    error = signal('', ...(ngDevMode ? [{ debugName: "error" }] : /* istanbul ignore next */ []));
    search = signal('', ...(ngDevMode ? [{ debugName: "search" }] : /* istanbul ignore next */ []));
    filter = signal('all', ...(ngDevMode ? [{ debugName: "filter" }] : /* istanbul ignore next */ []));
    filteredItems = computed(() => {
        const query = this.search().trim().toLowerCase();
        return (this.feed()?.items || []).filter((item) => {
            const searchMatch = !query || `${item.title} ${item.message}`.toLowerCase().includes(query);
            const filterMatch = this.filter() === 'all' ||
                (this.filter() === 'unread' && !item.read) ||
                (this.filter() === 'critical' && ['critical', 'risk'].includes(item.type)) ||
                (this.filter() === 'updates' && ['pending', 'correction', 'on-track'].includes(item.type));
            return searchMatch && filterMatch;
        });
    }, ...(ngDevMode ? [{ debugName: "filteredItems" }] : /* istanbul ignore next */ []));
    groups = computed(() => {
        const now = new Date();
        const today = new Date(now.getFullYear(), now.getMonth(), now.getDate()).getTime();
        const yesterday = today - 86_400_000;
        const result = [
            { label: 'Today', items: [] },
            { label: 'Yesterday', items: [] },
            { label: 'Earlier', items: [] },
        ];
        for (const item of this.filteredItems()) {
            const date = new Date(item.createdAt);
            const day = new Date(date.getFullYear(), date.getMonth(), date.getDate()).getTime();
            (day >= today ? result[0] : day >= yesterday ? result[1] : result[2]).items.push(item);
        }
        return result.filter((group) => group.items.length);
    }, ...(ngDevMode ? [{ debugName: "groups" }] : /* istanbul ignore next */ []));
    constructor() { this.load(); }
    setSearch(value) { this.search.set(value); }
    setFilter(filter) { this.filter.set(filter); }
    markAllRead() {
        const token = this.session.token();
        if (!token || !this.feed()?.counts.unread)
            return;
        this.api.markStudentAttendanceAlertsRead(token, { all: true }).subscribe({ next: () => this.load() });
    }
    open(item) {
        const token = this.session.token();
        const target = item.subjectId
            ? ['/student/attendance/shortage', item.subjectId]
            : ['/student/attendance/alerts'];
        if (!token || item.read) {
            void this.router.navigate(target);
            return;
        }
        this.api.markStudentAttendanceAlertsRead(token, { ids: [item.id] }).subscribe({
            next: () => void this.router.navigate(target),
            error: () => void this.router.navigate(target),
        });
    }
    typeLabel(type) {
        return { critical: 'Critical', risk: 'At risk', pending: 'Update', correction: 'Resolved', 'on-track': 'On track' }[type];
    }
    load() {
        const token = this.session.token();
        if (!token) {
            this.error.set('Your student session is unavailable.');
            this.loading.set(false);
            return;
        }
        this.loading.set(true);
        this.api.studentAttendanceAlerts(token).subscribe({
            next: (feed) => { this.feed.set(feed); this.loading.set(false); },
            error: () => { this.error.set('Attendance alerts are temporarily unavailable.'); this.loading.set(false); },
        });
    }
    static ɵfac = function StudentAttendanceAlertsComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || StudentAttendanceAlertsComponent)(); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: StudentAttendanceAlertsComponent, selectors: [["erp-student-attendance-alerts"]], decls: 27, vars: 1, consts: [["searchInput", ""], [1, "alerts-page"], [1, "alerts-heading"], ["src", "/assets/student/attendance/alerts-bell.webp", "width", "128", "height", "128", "alt", "", "aria-hidden", "true"], ["routerLink", "/student/attendance"], ["routerLink", "/student/attendance/shortage"], [1, "alerts-tabs"], ["routerLink", "/student/attendance/alerts", 1, "is-active"], [1, "alerts-state"], [1, "alerts-state", "alerts-state--error"], [1, "alerts-toolbar"], ["lucideSearch", "", "size", "19"], ["type", "search", "placeholder", "Search alerts by subject or keyword", 3, "input"], ["aria-label", "Filter alerts", 1, "alerts-filters"], ["type", "button", 3, "click"], ["type", "button", 1, "alerts-read", 3, "click", "disabled"], ["lucideCheckCheck", "", "size", "18"], [1, "alerts-layout"], [1, "alerts-list"], [1, "alerts-empty"], [1, "alerts-summary"], ["lucideBell", "", "size", "20"], [1, "alerts-summary__unread"], ["routerLink", "/student/attendance/alerts/preferences"], ["lucideSettings", "", "size", "21"], ["lucideChevronRight", "", "size", "18"], [3, "is-unread"], [1, "alerts-list__icon"], ["lucideCircleAlert", "", "size", "22"], ["lucideAlertTriangle", "", "size", "22"], ["lucideClock3", "", "size", "22"], ["lucideCheck", "", "size", "22"], ["lucideInfo", "", "size", "22"], [1, "alerts-list__copy"], ["aria-label", "Unread", 1, "alerts-unread"], ["lucideChevronRight", "", "size", "17"], ["lucideCheck", "", "size", "28"]], template: function StudentAttendanceAlertsComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 1)(1, "header", 2)(2, "span");
            i0.ɵɵelement(3, "img", 3);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(4, "div")(5, "nav")(6, "a", 4);
            i0.ɵɵtext(7, "Attendance");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(8, "i");
            i0.ɵɵtext(9, "/");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(10, "a", 5);
            i0.ɵɵtext(11, "Shortage & Risk");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(12, "i");
            i0.ɵɵtext(13, "/");
            i0.ɵɵelementEnd();
            i0.ɵɵtext(14, "Alerts");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(15, "h1");
            i0.ɵɵtext(16, "Attendance alerts");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(17, "p");
            i0.ɵɵtext(18, "Important changes in your current attendance.");
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(19, "div", 6)(20, "a", 5);
            i0.ɵɵtext(21, "Overview");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(22, "a", 7);
            i0.ɵɵtext(23, "Alerts");
            i0.ɵɵelementEnd()();
            i0.ɵɵconditionalCreate(24, StudentAttendanceAlertsComponent_Conditional_24_Template, 2, 0, "div", 8)(25, StudentAttendanceAlertsComponent_Conditional_25_Template, 2, 1, "div", 9)(26, StudentAttendanceAlertsComponent_Conditional_26_Template, 62, 16);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            let tmp_0_0;
            i0.ɵɵadvance(24);
            i0.ɵɵconditional(ctx.loading() ? 24 : ctx.error() ? 25 : (tmp_0_0 = ctx.feed()) ? 26 : -1, tmp_0_0);
        } }, dependencies: [RouterLink,
            LucideAlertTriangle,
            LucideBell,
            LucideCheck,
            LucideCheckCheck,
            LucideChevronRight,
            LucideCircleAlert,
            LucideClock3,
            LucideInfo,
            LucideSearch,
            LucideSettings,
            DatePipe], styles: ["[_nghost-%COMP%]{display:block}.alerts-page[_ngcontent-%COMP%]{display:grid;gap:var(--student-space-4);min-height:calc(100dvh - var(--student-header-height));color:var(--student-color-text)}.alerts-page[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%], .alerts-page[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], .alerts-page[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0}.alerts-page[_ngcontent-%COMP%]   button[_ngcontent-%COMP%], .alerts-page[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{font:inherit}.alerts-heading[_ngcontent-%COMP%]{display:flex;align-items:center;gap:var(--student-space-4)}.alerts-heading[_ngcontent-%COMP%] > span[_ngcontent-%COMP%]{display:grid;width:62px;height:62px;place-items:center;border-radius:var(--student-radius-card);color:var(--student-color-warning);background:var(--student-color-warning-soft)}.alerts-heading[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]{display:flex;gap:var(--student-space-2);margin-bottom:var(--student-space-1);color:var(--student-color-text-secondary);font-size:var(--student-text-caption)}.alerts-heading[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:var(--student-color-primary-pressed);text-decoration:none}.alerts-heading[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{font-style:normal}.alerts-heading[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-size:clamp(26px,3vw,38px);line-height:1.08}.alerts-heading[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin-top:var(--student-space-1);color:var(--student-color-text-secondary)}.alerts-tabs[_ngcontent-%COMP%]{display:flex;width:max-content}.alerts-tabs[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{min-width:120px;padding:var(--student-space-3) var(--student-space-5);border-bottom:3px solid transparent;color:var(--student-color-text-secondary);text-align:center;text-decoration:none;font-weight:750}.alerts-tabs[_ngcontent-%COMP%]   a.is-active[_ngcontent-%COMP%]{border-color:var(--student-color-primary);color:var(--student-color-primary-pressed)}.alerts-toolbar[_ngcontent-%COMP%]{display:grid;grid-template-columns:minmax(280px,1.2fr) auto auto;align-items:center;gap:var(--student-space-3);padding:var(--student-space-3);border:1px solid var(--student-color-border);border-radius:var(--student-radius-card);background:var(--student-color-surface);box-shadow:var(--student-attendance-shadow)}.alerts-toolbar[_ngcontent-%COMP%] > label[_ngcontent-%COMP%]{display:flex;height:44px;align-items:center;gap:var(--student-space-2);padding:0 var(--student-space-3);border:1px solid var(--student-color-border);border-radius:var(--student-radius-control);color:var(--student-color-text-secondary)}.alerts-toolbar[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{width:100%;min-width:0;border:0;outline:0;color:var(--student-color-text);background:transparent}.alerts-filters[_ngcontent-%COMP%]{display:flex;gap:var(--student-space-2)}.alerts-filters[_ngcontent-%COMP%]   button[_ngcontent-%COMP%], .alerts-read[_ngcontent-%COMP%]{display:flex;min-height:40px;align-items:center;gap:var(--student-space-2);padding:0 var(--student-space-4);border:1px solid var(--student-color-border);border-radius:var(--student-radius-pill);color:var(--student-color-text-secondary);background:var(--student-color-surface);cursor:pointer;font-weight:700}.alerts-filters[_ngcontent-%COMP%]   button.is-active[_ngcontent-%COMP%]{border-color:var(--student-color-primary);color:var(--student-color-text-inverse);background:var(--student-color-primary)}.alerts-filters[_ngcontent-%COMP%]   b[_ngcontent-%COMP%]{display:grid;min-width:22px;height:22px;place-items:center;border-radius:var(--student-radius-pill);color:var(--student-color-danger);background:var(--student-color-danger-soft);font-size:var(--student-text-caption)}.alerts-read[_ngcontent-%COMP%]{border-radius:var(--student-radius-control);color:var(--student-color-primary-pressed)}.alerts-read[_ngcontent-%COMP%]:disabled{opacity:.5;cursor:default}.alerts-layout[_ngcontent-%COMP%]{display:grid;grid-template-columns:minmax(0,1fr) 300px;gap:var(--student-space-4);align-items:start}.alerts-list[_ngcontent-%COMP%], .alerts-summary[_ngcontent-%COMP%]{border:1px solid var(--student-color-border);border-radius:var(--student-radius-card);background:var(--student-color-surface);box-shadow:var(--student-attendance-shadow)}.alerts-list[_ngcontent-%COMP%]{padding:var(--student-space-4)}.alerts-list[_ngcontent-%COMP%]   section[_ngcontent-%COMP%] + section[_ngcontent-%COMP%]{margin-top:var(--student-space-4)}.alerts-list[_ngcontent-%COMP%]   section[_ngcontent-%COMP%] > h2[_ngcontent-%COMP%]{margin-bottom:var(--student-space-2);color:var(--student-color-text-secondary);font-size:var(--student-text-label)}.alerts-list[_ngcontent-%COMP%]   article[_ngcontent-%COMP%]{position:relative;display:grid;grid-template-columns:auto minmax(0,1fr) auto auto;align-items:center;gap:var(--student-space-3);padding:var(--student-space-4) 0}.alerts-list[_ngcontent-%COMP%]   article[_ngcontent-%COMP%] + article[_ngcontent-%COMP%]{border-top:1px solid var(--student-color-divider)}.alerts-list__icon[_ngcontent-%COMP%]{display:grid;width:48px;height:48px;place-items:center;border-radius:var(--student-radius-control);color:var(--student-color-text-secondary);background:var(--student-fee-neutral-soft)}.alerts-list[_ngcontent-%COMP%]   article[data-type='critical'][_ngcontent-%COMP%]   .alerts-list__icon[_ngcontent-%COMP%]{color:var(--student-color-danger);background:var(--student-color-danger-soft)}.alerts-list[_ngcontent-%COMP%]   article[data-type='risk'][_ngcontent-%COMP%]   .alerts-list__icon[_ngcontent-%COMP%]{color:var(--student-color-warning);background:var(--student-color-warning-soft)}.alerts-list[_ngcontent-%COMP%]   article[data-type='correction'][_ngcontent-%COMP%]   .alerts-list__icon[_ngcontent-%COMP%], .alerts-list[_ngcontent-%COMP%]   article[data-type='on-track'][_ngcontent-%COMP%]   .alerts-list__icon[_ngcontent-%COMP%]{color:var(--student-color-success);background:var(--student-color-success-soft)}.alerts-list__copy[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin-top:3px;color:var(--student-color-text-secondary);font-size:var(--student-text-label)}.alerts-list__copy[_ngcontent-%COMP%]   em[_ngcontent-%COMP%]{display:inline-block;margin-top:var(--student-space-2);padding:3px 9px;border-radius:var(--student-radius-pill);color:var(--student-color-text-secondary);background:var(--student-color-surface-soft);font-size:var(--student-text-caption);font-style:normal;font-weight:750}.alerts-list[_ngcontent-%COMP%]   time[_ngcontent-%COMP%]{color:var(--student-color-text-secondary);font-size:var(--student-text-caption)}.alerts-list[_ngcontent-%COMP%]   article[_ngcontent-%COMP%] > button[_ngcontent-%COMP%]{display:flex;min-height:40px;align-items:center;gap:var(--student-space-1);padding:0 var(--student-space-3);border:1px solid var(--student-color-border-strong);border-radius:var(--student-radius-control);color:var(--student-color-primary-pressed);background:var(--student-color-surface);cursor:pointer;font-weight:750}.alerts-unread[_ngcontent-%COMP%]{position:absolute;top:18px;right:2px;width:8px;height:8px;border-radius:50%;background:var(--student-color-danger)}.alerts-summary[_ngcontent-%COMP%]{padding:var(--student-space-4)}.alerts-summary[_ngcontent-%COMP%] > h2[_ngcontent-%COMP%]{display:flex;align-items:center;gap:var(--student-space-2);font-size:var(--student-text-h3)}.alerts-summary__unread[_ngcontent-%COMP%]{display:flex;align-items:center;gap:var(--student-space-3);margin:var(--student-space-4) 0;padding:var(--student-space-4);border-radius:var(--student-radius-control);color:var(--student-color-danger);background:var(--student-color-danger-soft)}.alerts-summary__unread[_ngcontent-%COMP%] > strong[_ngcontent-%COMP%]{font-size:38px}.alerts-summary__unread[_ngcontent-%COMP%]   small[_ngcontent-%COMP%]{display:block;margin-top:2px;color:var(--student-color-text-secondary);font-size:var(--student-text-caption)}.alerts-summary[_ngcontent-%COMP%]   dl[_ngcontent-%COMP%]{display:grid;gap:var(--student-space-3);margin:0;padding-bottom:var(--student-space-4);border-bottom:1px solid var(--student-color-divider)}.alerts-summary[_ngcontent-%COMP%]   dl[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{display:flex;justify-content:space-between}.alerts-summary[_ngcontent-%COMP%]   dd[_ngcontent-%COMP%]{margin:0;font-weight:800}.alerts-summary[_ngcontent-%COMP%] > a[_ngcontent-%COMP%]{display:flex;align-items:center;gap:var(--student-space-3);margin-top:var(--student-space-4);color:var(--student-color-text);text-decoration:none}.alerts-summary[_ngcontent-%COMP%] > a[_ngcontent-%COMP%] > span[_ngcontent-%COMP%]{min-width:0;flex:1}.alerts-summary[_ngcontent-%COMP%] > a[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%], .alerts-summary[_ngcontent-%COMP%] > a[_ngcontent-%COMP%]   small[_ngcontent-%COMP%]{display:block}.alerts-summary[_ngcontent-%COMP%] > a[_ngcontent-%COMP%]   small[_ngcontent-%COMP%]{margin-top:2px;color:var(--student-color-text-secondary);font-size:var(--student-text-caption)}.alerts-state[_ngcontent-%COMP%], .alerts-empty[_ngcontent-%COMP%]{display:grid;min-height:260px;place-content:center;border:1px solid var(--student-color-border);border-radius:var(--student-radius-card);color:var(--student-color-text-secondary);background:var(--student-color-surface);text-align:center}.alerts-state--error[_ngcontent-%COMP%]{color:var(--student-color-danger)}.alerts-empty[_ngcontent-%COMP%]{gap:var(--student-space-2);min-height:220px}.alerts-empty[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]{margin:auto;color:var(--student-color-success)}\n@media(max-width:1100px){.alerts-toolbar[_ngcontent-%COMP%]{grid-template-columns:1fr auto}.alerts-filters[_ngcontent-%COMP%]{grid-row:2;grid-column:1/-1;overflow:auto}.alerts-layout[_ngcontent-%COMP%]{grid-template-columns:1fr}.alerts-summary[_ngcontent-%COMP%]{display:grid;grid-template-columns:1fr 1fr 1fr;gap:var(--student-space-4);align-items:center}.alerts-summary__unread[_ngcontent-%COMP%]{margin:0}.alerts-summary[_ngcontent-%COMP%]   dl[_ngcontent-%COMP%]{border:0;padding:0}.alerts-summary[_ngcontent-%COMP%] > a[_ngcontent-%COMP%]{margin:0}}\n@media(max-width:700px){.alerts-page[_ngcontent-%COMP%]{gap:var(--student-space-3);min-height:calc(100dvh - var(--student-mobile-header-height))}.alerts-heading[_ngcontent-%COMP%] > span[_ngcontent-%COMP%]{width:52px;height:52px}.alerts-heading[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-size:27px}.alerts-heading[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:var(--student-text-label)}.alerts-heading[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]{display:none}.alerts-tabs[_ngcontent-%COMP%]{width:100%;border:1px solid var(--student-color-border);border-radius:var(--student-radius-control);overflow:hidden}.alerts-tabs[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{flex:1;border-bottom:3px solid transparent}.alerts-tabs[_ngcontent-%COMP%]   a.is-active[_ngcontent-%COMP%]{background:var(--student-color-primary-subtle)}.alerts-toolbar[_ngcontent-%COMP%]{grid-template-columns:1fr auto;padding:0;border:0;background:transparent;box-shadow:none}.alerts-toolbar[_ngcontent-%COMP%] > label[_ngcontent-%COMP%]{grid-column:1/-1;background:var(--student-color-surface)}.alerts-read[_ngcontent-%COMP%]{width:44px;padding:0;justify-content:center}.alerts-read[_ngcontent-%COMP%]{font-size:0}.alerts-filters[_ngcontent-%COMP%]{grid-row:auto;grid-column:1;overflow:auto}.alerts-filters[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{white-space:nowrap}.alerts-layout[_ngcontent-%COMP%]{gap:var(--student-space-3)}.alerts-list[_ngcontent-%COMP%]{padding:0;border:0;background:transparent;box-shadow:none}.alerts-list[_ngcontent-%COMP%]   article[_ngcontent-%COMP%]{grid-template-columns:auto minmax(0,1fr) auto;padding:var(--student-space-4);border:1px solid var(--student-color-border);border-radius:var(--student-radius-card);background:var(--student-color-surface);box-shadow:var(--student-shadow-card)}.alerts-list[_ngcontent-%COMP%]   article[_ngcontent-%COMP%] + article[_ngcontent-%COMP%]{margin-top:var(--student-space-3)}.alerts-list__icon[_ngcontent-%COMP%]{grid-row:1/3}.alerts-list[_ngcontent-%COMP%]   time[_ngcontent-%COMP%]{grid-column:2;font-size:var(--student-text-caption)}.alerts-list[_ngcontent-%COMP%]   article[_ngcontent-%COMP%] > button[_ngcontent-%COMP%]{grid-column:2/4;justify-self:end}.alerts-unread[_ngcontent-%COMP%]{top:var(--student-space-3);right:var(--student-space-3)}.alerts-summary[_ngcontent-%COMP%]{display:block}.alerts-summary__unread[_ngcontent-%COMP%]{margin:var(--student-space-3) 0}.alerts-summary[_ngcontent-%COMP%]   dl[_ngcontent-%COMP%]{padding-bottom:var(--student-space-3);border-bottom:1px solid var(--student-color-divider)}.alerts-summary[_ngcontent-%COMP%] > a[_ngcontent-%COMP%]{margin-top:var(--student-space-3)}}\n\n.alerts-filters[_ngcontent-%COMP%] { min-width: 0; }\n@media(max-width:700px) {\n  .alerts-toolbar[_ngcontent-%COMP%] { grid-template-columns: minmax(0, 1fr) 44px; }\n  .alerts-read[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] { display: none; }\n}\n\n.alerts-heading[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  width: 76px;\n  height: 76px;\n  border-radius: 0;\n  background: transparent;\n}\n\n.alerts-heading[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 76px;\n  height: 76px;\n  object-fit: contain;\n  filter: drop-shadow(var(--student-shadow-card));\n}\n\n@media (max-width: 700px) {\n  .alerts-heading[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%], \n   .alerts-heading[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] { width: 72px; height: 72px; }\n  .alerts-list[_ngcontent-%COMP%]   article[_ngcontent-%COMP%] { grid-template-columns: 56px minmax(0, 1fr) auto; }\n  .alerts-list__icon[_ngcontent-%COMP%] { width: 56px; height: 56px; }\n}\n\n@media (max-width: 430px) {\n  .alerts-heading[_ngcontent-%COMP%] { gap: var(--student-space-3); }\n  .alerts-heading[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%], \n   .alerts-heading[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] { width: 62px; height: 62px; }\n  .alerts-list[_ngcontent-%COMP%]   article[_ngcontent-%COMP%] { grid-template-columns: 48px minmax(0, 1fr); }\n  .alerts-list__icon[_ngcontent-%COMP%] { width: 48px; height: 48px; }\n  .alerts-list[_ngcontent-%COMP%]   time[_ngcontent-%COMP%] { grid-column: 2; }\n  .alerts-list[_ngcontent-%COMP%]   article[_ngcontent-%COMP%]    > button[_ngcontent-%COMP%] { grid-column: 2; }\n}"], changeDetection: 0 });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(StudentAttendanceAlertsComponent, [{
        type: Component,
        args: [{ selector: 'erp-student-attendance-alerts', imports: [
                    DatePipe,
                    RouterLink,
                    LucideAlertTriangle,
                    LucideBell,
                    LucideCheck,
                    LucideCheckCheck,
                    LucideChevronRight,
                    LucideCircleAlert,
                    LucideClock3,
                    LucideInfo,
                    LucideSearch,
                    LucideSettings,
                ], changeDetection: ChangeDetectionStrategy.OnPush, template: "<div class=\"alerts-page\">\n  <header class=\"alerts-heading\">\n    <span><img src=\"/assets/student/attendance/alerts-bell.webp\" width=\"128\" height=\"128\" alt=\"\" aria-hidden=\"true\" /></span>\n    <div><nav><a routerLink=\"/student/attendance\">Attendance</a><i>/</i><a routerLink=\"/student/attendance/shortage\">Shortage & Risk</a><i>/</i>Alerts</nav><h1>Attendance alerts</h1><p>Important changes in your current attendance.</p></div>\n  </header>\n  <div class=\"alerts-tabs\"><a routerLink=\"/student/attendance/shortage\">Overview</a><a class=\"is-active\" routerLink=\"/student/attendance/alerts\">Alerts</a></div>\n\n  @if (loading()) { <div class=\"alerts-state\">Loading notifications\u2026</div> }\n  @else if (error()) { <div class=\"alerts-state alerts-state--error\">{{ error() }}</div> }\n  @else if (feed(); as data) {\n    <div class=\"alerts-toolbar\">\n      <label><svg lucideSearch size=\"19\"></svg><input #searchInput type=\"search\" placeholder=\"Search alerts by subject or keyword\" (input)=\"setSearch(searchInput.value)\" /></label>\n      <div class=\"alerts-filters\" aria-label=\"Filter alerts\">\n        <button type=\"button\" [class.is-active]=\"filter() === 'all'\" (click)=\"setFilter('all')\">All</button>\n        <button type=\"button\" [class.is-active]=\"filter() === 'unread'\" (click)=\"setFilter('unread')\">Unread <b>{{ data.counts.unread }}</b></button>\n        <button type=\"button\" [class.is-active]=\"filter() === 'critical'\" (click)=\"setFilter('critical')\">Critical <b>{{ data.counts.critical + data.counts.risk }}</b></button>\n        <button type=\"button\" [class.is-active]=\"filter() === 'updates'\" (click)=\"setFilter('updates')\">Updates</button>\n      </div>\n      <button class=\"alerts-read\" type=\"button\" (click)=\"markAllRead()\" [disabled]=\"!data.counts.unread\"><svg lucideCheckCheck size=\"18\"></svg><span>Mark all read</span></button>\n    </div>\n\n    <div class=\"alerts-layout\">\n      <main class=\"alerts-list\">\n        @for (group of groups(); track group.label) {\n          <section><h2>{{ group.label }}</h2>\n            @for (item of group.items; track item.id) {\n              <article [attr.data-type]=\"item.type\" [class.is-unread]=\"!item.read\">\n                <span class=\"alerts-list__icon\">\n                  @switch (item.type) {\n                    @case ('critical') { <svg lucideCircleAlert size=\"22\"></svg> }\n                    @case ('risk') { <svg lucideAlertTriangle size=\"22\"></svg> }\n                    @case ('pending') { <svg lucideClock3 size=\"22\"></svg> }\n                    @case ('correction') { <svg lucideCheck size=\"22\"></svg> }\n                    @default { <svg lucideInfo size=\"22\"></svg> }\n                  }\n                </span>\n                <div class=\"alerts-list__copy\"><strong>{{ item.title }}</strong><p>{{ item.message }}</p><em>{{ typeLabel(item.type) }}</em></div>\n                <time>{{ item.createdAt | date: 'dd MMM, h:mm a' }}</time>\n                @if (!item.read) { <i class=\"alerts-unread\" aria-label=\"Unread\"></i> }\n                <button type=\"button\" (click)=\"open(item)\">{{ item.actionLabel }} <svg lucideChevronRight size=\"17\"></svg></button>\n              </article>\n            }\n          </section>\n        } @empty { <div class=\"alerts-empty\"><svg lucideCheck size=\"28\"></svg><strong>No matching alerts</strong><p>Try another filter or search term.</p></div> }\n      </main>\n\n      <aside class=\"alerts-summary\">\n        <h2><svg lucideBell size=\"20\"></svg> Alerts summary</h2>\n        <div class=\"alerts-summary__unread\"><strong>{{ data.counts.unread }}</strong><p>Unread alerts<small>Stay on top of your attendance.</small></p></div>\n        <dl><div><dt>Critical</dt><dd>{{ data.counts.critical }}</dd></div><div><dt>At risk</dt><dd>{{ data.counts.risk }}</dd></div><div><dt>Updates</dt><dd>{{ data.counts.updates }}</dd></div></dl>\n        <a routerLink=\"/student/attendance/alerts/preferences\"><svg lucideSettings size=\"21\"></svg><span><strong>Manage preferences</strong><small>Choose which notifications you receive.</small></span><svg lucideChevronRight size=\"18\"></svg></a>\n      </aside>\n    </div>\n  }\n</div>\n", styles: [":host{display:block}.alerts-page{display:grid;gap:var(--student-space-4);min-height:calc(100dvh - var(--student-header-height));color:var(--student-color-text)}.alerts-page h1,.alerts-page h2,.alerts-page p{margin:0}.alerts-page button,.alerts-page input{font:inherit}.alerts-heading{display:flex;align-items:center;gap:var(--student-space-4)}.alerts-heading>span{display:grid;width:62px;height:62px;place-items:center;border-radius:var(--student-radius-card);color:var(--student-color-warning);background:var(--student-color-warning-soft)}.alerts-heading nav{display:flex;gap:var(--student-space-2);margin-bottom:var(--student-space-1);color:var(--student-color-text-secondary);font-size:var(--student-text-caption)}.alerts-heading nav a{color:var(--student-color-primary-pressed);text-decoration:none}.alerts-heading nav i{font-style:normal}.alerts-heading h1{font-size:clamp(26px,3vw,38px);line-height:1.08}.alerts-heading p{margin-top:var(--student-space-1);color:var(--student-color-text-secondary)}.alerts-tabs{display:flex;width:max-content}.alerts-tabs a{min-width:120px;padding:var(--student-space-3) var(--student-space-5);border-bottom:3px solid transparent;color:var(--student-color-text-secondary);text-align:center;text-decoration:none;font-weight:750}.alerts-tabs a.is-active{border-color:var(--student-color-primary);color:var(--student-color-primary-pressed)}.alerts-toolbar{display:grid;grid-template-columns:minmax(280px,1.2fr) auto auto;align-items:center;gap:var(--student-space-3);padding:var(--student-space-3);border:1px solid var(--student-color-border);border-radius:var(--student-radius-card);background:var(--student-color-surface);box-shadow:var(--student-attendance-shadow)}.alerts-toolbar>label{display:flex;height:44px;align-items:center;gap:var(--student-space-2);padding:0 var(--student-space-3);border:1px solid var(--student-color-border);border-radius:var(--student-radius-control);color:var(--student-color-text-secondary)}.alerts-toolbar input{width:100%;min-width:0;border:0;outline:0;color:var(--student-color-text);background:transparent}.alerts-filters{display:flex;gap:var(--student-space-2)}.alerts-filters button,.alerts-read{display:flex;min-height:40px;align-items:center;gap:var(--student-space-2);padding:0 var(--student-space-4);border:1px solid var(--student-color-border);border-radius:var(--student-radius-pill);color:var(--student-color-text-secondary);background:var(--student-color-surface);cursor:pointer;font-weight:700}.alerts-filters button.is-active{border-color:var(--student-color-primary);color:var(--student-color-text-inverse);background:var(--student-color-primary)}.alerts-filters b{display:grid;min-width:22px;height:22px;place-items:center;border-radius:var(--student-radius-pill);color:var(--student-color-danger);background:var(--student-color-danger-soft);font-size:var(--student-text-caption)}.alerts-read{border-radius:var(--student-radius-control);color:var(--student-color-primary-pressed)}.alerts-read:disabled{opacity:.5;cursor:default}.alerts-layout{display:grid;grid-template-columns:minmax(0,1fr) 300px;gap:var(--student-space-4);align-items:start}.alerts-list,.alerts-summary{border:1px solid var(--student-color-border);border-radius:var(--student-radius-card);background:var(--student-color-surface);box-shadow:var(--student-attendance-shadow)}.alerts-list{padding:var(--student-space-4)}.alerts-list section+section{margin-top:var(--student-space-4)}.alerts-list section>h2{margin-bottom:var(--student-space-2);color:var(--student-color-text-secondary);font-size:var(--student-text-label)}.alerts-list article{position:relative;display:grid;grid-template-columns:auto minmax(0,1fr) auto auto;align-items:center;gap:var(--student-space-3);padding:var(--student-space-4) 0}.alerts-list article+article{border-top:1px solid var(--student-color-divider)}.alerts-list__icon{display:grid;width:48px;height:48px;place-items:center;border-radius:var(--student-radius-control);color:var(--student-color-text-secondary);background:var(--student-fee-neutral-soft)}.alerts-list article[data-type='critical'] .alerts-list__icon{color:var(--student-color-danger);background:var(--student-color-danger-soft)}.alerts-list article[data-type='risk'] .alerts-list__icon{color:var(--student-color-warning);background:var(--student-color-warning-soft)}.alerts-list article[data-type='correction'] .alerts-list__icon,.alerts-list article[data-type='on-track'] .alerts-list__icon{color:var(--student-color-success);background:var(--student-color-success-soft)}.alerts-list__copy p{margin-top:3px;color:var(--student-color-text-secondary);font-size:var(--student-text-label)}.alerts-list__copy em{display:inline-block;margin-top:var(--student-space-2);padding:3px 9px;border-radius:var(--student-radius-pill);color:var(--student-color-text-secondary);background:var(--student-color-surface-soft);font-size:var(--student-text-caption);font-style:normal;font-weight:750}.alerts-list time{color:var(--student-color-text-secondary);font-size:var(--student-text-caption)}.alerts-list article>button{display:flex;min-height:40px;align-items:center;gap:var(--student-space-1);padding:0 var(--student-space-3);border:1px solid var(--student-color-border-strong);border-radius:var(--student-radius-control);color:var(--student-color-primary-pressed);background:var(--student-color-surface);cursor:pointer;font-weight:750}.alerts-unread{position:absolute;top:18px;right:2px;width:8px;height:8px;border-radius:50%;background:var(--student-color-danger)}.alerts-summary{padding:var(--student-space-4)}.alerts-summary>h2{display:flex;align-items:center;gap:var(--student-space-2);font-size:var(--student-text-h3)}.alerts-summary__unread{display:flex;align-items:center;gap:var(--student-space-3);margin:var(--student-space-4) 0;padding:var(--student-space-4);border-radius:var(--student-radius-control);color:var(--student-color-danger);background:var(--student-color-danger-soft)}.alerts-summary__unread>strong{font-size:38px}.alerts-summary__unread small{display:block;margin-top:2px;color:var(--student-color-text-secondary);font-size:var(--student-text-caption)}.alerts-summary dl{display:grid;gap:var(--student-space-3);margin:0;padding-bottom:var(--student-space-4);border-bottom:1px solid var(--student-color-divider)}.alerts-summary dl>div{display:flex;justify-content:space-between}.alerts-summary dd{margin:0;font-weight:800}.alerts-summary>a{display:flex;align-items:center;gap:var(--student-space-3);margin-top:var(--student-space-4);color:var(--student-color-text);text-decoration:none}.alerts-summary>a>span{min-width:0;flex:1}.alerts-summary>a strong,.alerts-summary>a small{display:block}.alerts-summary>a small{margin-top:2px;color:var(--student-color-text-secondary);font-size:var(--student-text-caption)}.alerts-state,.alerts-empty{display:grid;min-height:260px;place-content:center;border:1px solid var(--student-color-border);border-radius:var(--student-radius-card);color:var(--student-color-text-secondary);background:var(--student-color-surface);text-align:center}.alerts-state--error{color:var(--student-color-danger)}.alerts-empty{gap:var(--student-space-2);min-height:220px}.alerts-empty svg{margin:auto;color:var(--student-color-success)}\n@media(max-width:1100px){.alerts-toolbar{grid-template-columns:1fr auto}.alerts-filters{grid-row:2;grid-column:1/-1;overflow:auto}.alerts-layout{grid-template-columns:1fr}.alerts-summary{display:grid;grid-template-columns:1fr 1fr 1fr;gap:var(--student-space-4);align-items:center}.alerts-summary__unread{margin:0}.alerts-summary dl{border:0;padding:0}.alerts-summary>a{margin:0}}\n@media(max-width:700px){.alerts-page{gap:var(--student-space-3);min-height:calc(100dvh - var(--student-mobile-header-height))}.alerts-heading>span{width:52px;height:52px}.alerts-heading h1{font-size:27px}.alerts-heading p{font-size:var(--student-text-label)}.alerts-heading nav{display:none}.alerts-tabs{width:100%;border:1px solid var(--student-color-border);border-radius:var(--student-radius-control);overflow:hidden}.alerts-tabs a{flex:1;border-bottom:3px solid transparent}.alerts-tabs a.is-active{background:var(--student-color-primary-subtle)}.alerts-toolbar{grid-template-columns:1fr auto;padding:0;border:0;background:transparent;box-shadow:none}.alerts-toolbar>label{grid-column:1/-1;background:var(--student-color-surface)}.alerts-read{width:44px;padding:0;justify-content:center}.alerts-read{font-size:0}.alerts-filters{grid-row:auto;grid-column:1;overflow:auto}.alerts-filters button{white-space:nowrap}.alerts-layout{gap:var(--student-space-3)}.alerts-list{padding:0;border:0;background:transparent;box-shadow:none}.alerts-list article{grid-template-columns:auto minmax(0,1fr) auto;padding:var(--student-space-4);border:1px solid var(--student-color-border);border-radius:var(--student-radius-card);background:var(--student-color-surface);box-shadow:var(--student-shadow-card)}.alerts-list article+article{margin-top:var(--student-space-3)}.alerts-list__icon{grid-row:1/3}.alerts-list time{grid-column:2;font-size:var(--student-text-caption)}.alerts-list article>button{grid-column:2/4;justify-self:end}.alerts-unread{top:var(--student-space-3);right:var(--student-space-3)}.alerts-summary{display:block}.alerts-summary__unread{margin:var(--student-space-3) 0}.alerts-summary dl{padding-bottom:var(--student-space-3);border-bottom:1px solid var(--student-color-divider)}.alerts-summary>a{margin-top:var(--student-space-3)}}\n\n.alerts-filters { min-width: 0; }\n@media(max-width:700px) {\n  .alerts-toolbar { grid-template-columns: minmax(0, 1fr) 44px; }\n  .alerts-read span { display: none; }\n}\n\n.alerts-heading > span {\n  width: 76px;\n  height: 76px;\n  border-radius: 0;\n  background: transparent;\n}\n\n.alerts-heading > span img {\n  width: 76px;\n  height: 76px;\n  object-fit: contain;\n  filter: drop-shadow(var(--student-shadow-card));\n}\n\n@media (max-width: 700px) {\n  .alerts-heading > span,\n  .alerts-heading > span img { width: 72px; height: 72px; }\n  .alerts-list article { grid-template-columns: 56px minmax(0, 1fr) auto; }\n  .alerts-list__icon { width: 56px; height: 56px; }\n}\n\n@media (max-width: 430px) {\n  .alerts-heading { gap: var(--student-space-3); }\n  .alerts-heading > span,\n  .alerts-heading > span img { width: 62px; height: 62px; }\n  .alerts-list article { grid-template-columns: 48px minmax(0, 1fr); }\n  .alerts-list__icon { width: 48px; height: 48px; }\n  .alerts-list time { grid-column: 2; }\n  .alerts-list article > button { grid-column: 2; }\n}\n"] }]
    }], () => [], null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(StudentAttendanceAlertsComponent, { className: "StudentAttendanceAlertsComponent", filePath: "frontend/src/app/features/student/academics/student-attendance-alerts.component.ts", lineNumber: 42 }); })();
