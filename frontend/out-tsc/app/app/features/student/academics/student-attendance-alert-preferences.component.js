import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LucideAlertTriangle, LucideCheck, LucideChevronLeft, LucideClock3, LucideFileCheck2, LucideInfo, LucideRotateCcw, LucideSave, } from '@lucide/angular';
import { ApiService } from '../../../core/api.service';
import { StudentSessionService } from '../shared/services/student-session.service';
import * as i0 from "@angular/core";
function StudentAttendanceAlertPreferencesComponent_Conditional_12_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 4);
    i0.ɵɵtext(1, "Loading preferences\u2026");
    i0.ɵɵelementEnd();
} }
function StudentAttendanceAlertPreferencesComponent_Conditional_13_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 5);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r0.error());
} }
function StudentAttendanceAlertPreferencesComponent_Conditional_14_Conditional_77_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 21);
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(1, "svg", 27);
    i0.ɵɵtext(2, " Preferences saved.");
    i0.ɵɵelementEnd();
} }
function StudentAttendanceAlertPreferencesComponent_Conditional_14_Conditional_78_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 22);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r0.error());
} }
function StudentAttendanceAlertPreferencesComponent_Conditional_14_Template(rf, ctx) { if (rf & 1) {
    const _r2 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "section", 6)(1, "div", 7)(2, "div")(3, "h2");
    i0.ɵɵtext(4, "Required notification");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "p");
    i0.ɵɵtext(6, "Critical shortages are always enabled to help you meet university requirements.");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(7, "strong");
    i0.ɵɵtext(8, "Notification");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(9, "article")(10, "span", 8);
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(11, "svg", 9);
    i0.ɵɵelementEnd();
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(12, "div")(13, "h3");
    i0.ɵɵtext(14, "Critical shortage");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(15, "p");
    i0.ɵɵtext(16, "Notify me when a subject falls below the required attendance.");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(17, "button", 10);
    i0.ɵɵelement(18, "i");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(19, "small");
    i0.ɵɵtext(20, "Always on");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(21, "section", 11)(22, "div", 7)(23, "div")(24, "h2");
    i0.ɵɵtext(25, "Additional notifications");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(26, "p");
    i0.ɵɵtext(27, "Choose which attendance updates appear in your notifications.");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(28, "strong");
    i0.ɵɵtext(29, "Notification");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(30, "article")(31, "span", 12);
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(32, "svg", 9);
    i0.ɵɵelementEnd();
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(33, "div")(34, "h3");
    i0.ɵɵtext(35, "At-risk warning");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(36, "p");
    i0.ɵɵtext(37, "When attendance is close to falling below the minimum.");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(38, "button", 13);
    i0.ɵɵlistener("click", function StudentAttendanceAlertPreferencesComponent_Conditional_14_Template_button_click_38_listener() { i0.ɵɵrestoreView(_r2); const ctx_r0 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r0.toggle("risk")); });
    i0.ɵɵelement(39, "i");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(40, "article")(41, "span", 14);
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(42, "svg", 15);
    i0.ɵɵelementEnd();
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(43, "div")(44, "h3");
    i0.ɵɵtext(45, "Attendance not marked");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(46, "p");
    i0.ɵɵtext(47, "When a subject does not yet have a saved attendance record.");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(48, "button", 13);
    i0.ɵɵlistener("click", function StudentAttendanceAlertPreferencesComponent_Conditional_14_Template_button_click_48_listener() { i0.ɵɵrestoreView(_r2); const ctx_r0 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r0.toggle("pending")); });
    i0.ɵɵelement(49, "i");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(50, "article")(51, "span", 14);
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(52, "svg", 16);
    i0.ɵɵelementEnd();
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(53, "div")(54, "h3");
    i0.ɵɵtext(55, "Correction updates");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(56, "p");
    i0.ɵɵtext(57, "When the status of an attendance correction changes.");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(58, "button", 13);
    i0.ɵɵlistener("click", function StudentAttendanceAlertPreferencesComponent_Conditional_14_Template_button_click_58_listener() { i0.ɵɵrestoreView(_r2); const ctx_r0 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r0.toggle("correction")); });
    i0.ɵɵelement(59, "i");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(60, "article")(61, "span", 17);
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(62, "svg", 18);
    i0.ɵɵelementEnd();
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(63, "div")(64, "h3");
    i0.ɵɵtext(65, "Back on track");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(66, "p");
    i0.ɵɵtext(67, "When a subject is at or above the university minimum.");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(68, "button", 13);
    i0.ɵɵlistener("click", function StudentAttendanceAlertPreferencesComponent_Conditional_14_Template_button_click_68_listener() { i0.ɵɵrestoreView(_r2); const ctx_r0 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r0.toggle("onTrack")); });
    i0.ɵɵelement(69, "i");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(70, "div", 19);
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(71, "svg", 20);
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(72, "p")(73, "strong");
    i0.ɵɵtext(74, "One clear notification system");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(75, "span");
    i0.ɵɵtext(76, "All enabled alerts appear in the student portal notification drawer and Alerts page.");
    i0.ɵɵelementEnd()()();
    i0.ɵɵconditionalCreate(77, StudentAttendanceAlertPreferencesComponent_Conditional_14_Conditional_77_Template, 3, 0, "div", 21);
    i0.ɵɵconditionalCreate(78, StudentAttendanceAlertPreferencesComponent_Conditional_14_Conditional_78_Template, 2, 1, "div", 22);
    i0.ɵɵelementStart(79, "footer")(80, "button", 23);
    i0.ɵɵlistener("click", function StudentAttendanceAlertPreferencesComponent_Conditional_14_Template_button_click_80_listener() { i0.ɵɵrestoreView(_r2); const ctx_r0 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r0.reset()); });
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(81, "svg", 24);
    i0.ɵɵtext(82, " Reset to default");
    i0.ɵɵelementEnd();
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(83, "button", 25);
    i0.ɵɵlistener("click", function StudentAttendanceAlertPreferencesComponent_Conditional_14_Template_button_click_83_listener() { i0.ɵɵrestoreView(_r2); const ctx_r0 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r0.save()); });
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(84, "svg", 26);
    i0.ɵɵtext(85);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(38);
    i0.ɵɵclassProp("is-on", ctx_r0.preferences().risk);
    i0.ɵɵattribute("aria-pressed", ctx_r0.preferences().risk);
    i0.ɵɵadvance(10);
    i0.ɵɵclassProp("is-on", ctx_r0.preferences().pending);
    i0.ɵɵattribute("aria-pressed", ctx_r0.preferences().pending);
    i0.ɵɵadvance(10);
    i0.ɵɵclassProp("is-on", ctx_r0.preferences().correction);
    i0.ɵɵattribute("aria-pressed", ctx_r0.preferences().correction);
    i0.ɵɵadvance(10);
    i0.ɵɵclassProp("is-on", ctx_r0.preferences().onTrack);
    i0.ɵɵattribute("aria-pressed", ctx_r0.preferences().onTrack);
    i0.ɵɵadvance(9);
    i0.ɵɵconditional(ctx_r0.saved() ? 77 : -1);
    i0.ɵɵadvance();
    i0.ɵɵconditional(ctx_r0.error() ? 78 : -1);
    i0.ɵɵadvance(5);
    i0.ɵɵproperty("disabled", ctx_r0.saving());
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", ctx_r0.saving() ? "Saving\u2026" : "Save preferences");
} }
const DEFAULTS = {
    enabled: true, critical: true, risk: true, pending: true, correction: true, onTrack: true,
};
export class StudentAttendanceAlertPreferencesComponent {
    api = inject(ApiService);
    session = inject(StudentSessionService);
    preferences = signal({ ...DEFAULTS }, ...(ngDevMode ? [{ debugName: "preferences" }] : /* istanbul ignore next */ []));
    loading = signal(true, ...(ngDevMode ? [{ debugName: "loading" }] : /* istanbul ignore next */ []));
    saving = signal(false, ...(ngDevMode ? [{ debugName: "saving" }] : /* istanbul ignore next */ []));
    saved = signal(false, ...(ngDevMode ? [{ debugName: "saved" }] : /* istanbul ignore next */ []));
    error = signal('', ...(ngDevMode ? [{ debugName: "error" }] : /* istanbul ignore next */ []));
    constructor() {
        const token = this.session.token();
        if (!token) {
            this.error.set('Your student session is unavailable.');
            this.loading.set(false);
            return;
        }
        this.api.studentAttendanceAlertPreferences(token).subscribe({
            next: ({ preferences }) => { this.preferences.set(preferences); this.loading.set(false); },
            error: () => { this.error.set('Notification preferences are temporarily unavailable.'); this.loading.set(false); },
        });
    }
    toggle(key) {
        if (key === 'critical')
            return;
        this.saved.set(false);
        this.preferences.update((value) => ({ ...value, [key]: !value[key] }));
    }
    reset() { this.preferences.set({ ...DEFAULTS }); this.saved.set(false); }
    save() {
        const token = this.session.token();
        if (!token || this.saving())
            return;
        this.saving.set(true);
        this.error.set('');
        this.api.saveStudentAttendanceAlertPreferences(token, this.preferences()).subscribe({
            next: ({ preferences }) => { this.preferences.set(preferences); this.saving.set(false); this.saved.set(true); },
            error: () => { this.error.set('Preferences could not be saved. Try again.'); this.saving.set(false); },
        });
    }
    static ɵfac = function StudentAttendanceAlertPreferencesComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || StudentAttendanceAlertPreferencesComponent)(); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: StudentAttendanceAlertPreferencesComponent, selectors: [["erp-student-attendance-alert-preferences"]], decls: 15, vars: 1, consts: [[1, "preference-page"], ["routerLink", "/student/attendance/alerts", 1, "preference-back"], ["lucideChevronLeft", "", "size", "18"], ["src", "/assets/student/attendance/alerts-bell.webp", "width", "128", "height", "128", "alt", "", "aria-hidden", "true"], [1, "preference-state"], [1, "preference-state", "preference-state--error"], [1, "preference-card", "preference-required"], [1, "preference-card__heading"], ["data-tone", "danger", 1, "preference-icon"], ["lucideAlertTriangle", "", "size", "23"], ["type", "button", "disabled", "", "aria-label", "Critical shortage notifications are always on", 1, "preference-toggle", "is-on"], [1, "preference-card"], ["data-tone", "warning", 1, "preference-icon"], ["type", "button", 1, "preference-toggle", 3, "click"], [1, "preference-icon"], ["lucideClock3", "", "size", "23"], ["lucideFileCheck2", "", "size", "23"], ["data-tone", "success", 1, "preference-icon"], ["lucideCheck", "", "size", "23"], [1, "preference-info"], ["lucideInfo", "", "size", "20"], ["role", "status", 1, "preference-saved"], ["role", "alert", 1, "preference-error"], ["type", "button", 3, "click"], ["lucideRotateCcw", "", "size", "18"], ["type", "button", 1, "preference-save", 3, "click", "disabled"], ["lucideSave", "", "size", "18"], ["lucideCheck", "", "size", "20"]], template: function StudentAttendanceAlertPreferencesComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0)(1, "a", 1);
            i0.ɵɵnamespaceSVG();
            i0.ɵɵelement(2, "svg", 2);
            i0.ɵɵtext(3, " Back to alerts");
            i0.ɵɵelementEnd();
            i0.ɵɵnamespaceHTML();
            i0.ɵɵelementStart(4, "header")(5, "span");
            i0.ɵɵelement(6, "img", 3);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(7, "div")(8, "h1");
            i0.ɵɵtext(9, "Alert preferences");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(10, "p");
            i0.ɵɵtext(11, "Choose the attendance notifications you receive.");
            i0.ɵɵelementEnd()()();
            i0.ɵɵconditionalCreate(12, StudentAttendanceAlertPreferencesComponent_Conditional_12_Template, 2, 0, "div", 4)(13, StudentAttendanceAlertPreferencesComponent_Conditional_13_Template, 2, 1, "div", 5)(14, StudentAttendanceAlertPreferencesComponent_Conditional_14_Template, 86, 16);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵadvance(12);
            i0.ɵɵconditional(ctx.loading() ? 12 : ctx.error() && !ctx.preferences() ? 13 : 14);
        } }, dependencies: [RouterLink, LucideAlertTriangle, LucideCheck, LucideChevronLeft, LucideClock3, LucideFileCheck2, LucideInfo, LucideRotateCcw, LucideSave], styles: ["[_nghost-%COMP%]{display:block}.preference-page[_ngcontent-%COMP%]{display:grid;gap:var(--student-space-4);min-height:calc(100dvh - var(--student-header-height));color:var(--student-color-text)}.preference-page[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%], .preference-page[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], .preference-page[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], .preference-page[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0}.preference-page[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{font:inherit}.preference-back[_ngcontent-%COMP%]{display:flex;width:max-content;align-items:center;gap:var(--student-space-1);color:var(--student-color-primary-pressed);text-decoration:none;font-weight:750}.preference-page[_ngcontent-%COMP%] > header[_ngcontent-%COMP%]{display:flex;align-items:center;gap:var(--student-space-4)}.preference-page[_ngcontent-%COMP%] > header[_ngcontent-%COMP%] > span[_ngcontent-%COMP%]{display:grid;width:62px;height:62px;place-items:center;border-radius:var(--student-radius-card);color:var(--student-color-warning);background:var(--student-color-warning-soft)}.preference-page[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-size:clamp(26px,3vw,38px)}.preference-page[_ngcontent-%COMP%] > header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color:var(--student-color-text-secondary)}.preference-card[_ngcontent-%COMP%]{overflow:hidden;border:1px solid var(--student-color-border);border-radius:var(--student-radius-card);background:var(--student-color-surface);box-shadow:var(--student-attendance-shadow)}.preference-card__heading[_ngcontent-%COMP%]{display:flex;align-items:end;justify-content:space-between;gap:var(--student-space-4);padding:var(--student-space-4);background:var(--student-color-surface-soft)}.preference-card__heading[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:var(--student-text-h3)}.preference-card__heading[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin-top:2px;color:var(--student-color-text-secondary);font-size:var(--student-text-label)}.preference-card__heading[_ngcontent-%COMP%] > strong[_ngcontent-%COMP%]{padding-right:var(--student-space-3);color:var(--student-color-text-secondary);font-size:var(--student-text-caption)}.preference-card[_ngcontent-%COMP%]   article[_ngcontent-%COMP%]{display:grid;grid-template-columns:auto minmax(0,1fr) auto;align-items:center;gap:var(--student-space-4);min-height:82px;padding:var(--student-space-3) var(--student-space-4)}.preference-card[_ngcontent-%COMP%]   article[_ngcontent-%COMP%] + article[_ngcontent-%COMP%]{border-top:1px solid var(--student-color-divider)}.preference-card[_ngcontent-%COMP%]   article[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-size:var(--student-text-body)}.preference-card[_ngcontent-%COMP%]   article[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin-top:3px;color:var(--student-color-text-secondary);font-size:var(--student-text-label)}.preference-icon[_ngcontent-%COMP%]{display:grid;width:44px;height:44px;place-items:center;border-radius:var(--student-radius-pill);color:var(--student-color-text-secondary);background:var(--student-fee-neutral-soft)}.preference-icon[data-tone='danger'][_ngcontent-%COMP%]{color:var(--student-color-danger);background:var(--student-color-danger-soft)}.preference-icon[data-tone='warning'][_ngcontent-%COMP%]{color:var(--student-color-warning);background:var(--student-color-warning-soft)}.preference-icon[data-tone='success'][_ngcontent-%COMP%]{color:var(--student-color-success);background:var(--student-color-success-soft)}.preference-toggle[_ngcontent-%COMP%]{position:relative;width:54px;height:30px;padding:3px;border:0;border-radius:var(--student-radius-pill);background:var(--student-color-border-strong);cursor:pointer;transition:background var(--student-motion-standard)}.preference-toggle[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{display:block;width:24px;height:24px;border-radius:50%;background:var(--student-color-surface-raised);box-shadow:var(--student-shadow-card);transition:transform var(--student-motion-standard)}.preference-toggle.is-on[_ngcontent-%COMP%]{background:var(--student-color-primary)}.preference-toggle.is-on[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{transform:translateX(24px)}.preference-toggle[_ngcontent-%COMP%]:disabled{cursor:not-allowed;opacity:.75}.preference-required[_ngcontent-%COMP%]   article[_ngcontent-%COMP%]{grid-template-columns:auto minmax(0,1fr) auto auto}.preference-required[_ngcontent-%COMP%]   article[_ngcontent-%COMP%] > small[_ngcontent-%COMP%]{color:var(--student-color-text-muted)}.preference-info[_ngcontent-%COMP%], .preference-saved[_ngcontent-%COMP%], .preference-error[_ngcontent-%COMP%]{display:flex;align-items:center;gap:var(--student-space-3);padding:var(--student-space-4);border:1px solid var(--student-color-border);border-radius:var(--student-radius-control);color:var(--student-color-primary-pressed);background:var(--student-color-primary-subtle)}.preference-info[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{display:block;margin-top:2px;color:var(--student-color-text-secondary);font-size:var(--student-text-label)}.preference-saved[_ngcontent-%COMP%]{color:var(--student-color-success);border-color:var(--student-color-success);background:var(--student-color-success-soft);font-weight:750}.preference-error[_ngcontent-%COMP%]{color:var(--student-color-danger);border-color:var(--student-color-danger);background:var(--student-color-danger-soft)}.preference-page[_ngcontent-%COMP%] > footer[_ngcontent-%COMP%]{display:flex;justify-content:flex-end;gap:var(--student-space-3)}.preference-page[_ngcontent-%COMP%] > footer[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{display:flex;min-height:44px;align-items:center;gap:var(--student-space-2);padding:0 var(--student-space-5);border:1px solid var(--student-color-border-strong);border-radius:var(--student-radius-control);color:var(--student-color-primary-pressed);background:var(--student-color-surface);cursor:pointer;font-weight:750}.preference-page[_ngcontent-%COMP%] > footer[_ngcontent-%COMP%]   .preference-save[_ngcontent-%COMP%]{border-color:var(--student-color-primary);color:var(--student-color-text-inverse);background:var(--student-color-primary)}.preference-save[_ngcontent-%COMP%]:disabled{opacity:.65}\n@media(max-width:700px){.preference-page[_ngcontent-%COMP%]{min-height:calc(100dvh - var(--student-mobile-header-height));gap:var(--student-space-3)}.preference-page[_ngcontent-%COMP%] > header[_ngcontent-%COMP%] > span[_ngcontent-%COMP%]{width:52px;height:52px}.preference-page[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-size:27px}.preference-page[_ngcontent-%COMP%] > header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:var(--student-text-label)}.preference-card__heading[_ngcontent-%COMP%]{align-items:start}.preference-card__heading[_ngcontent-%COMP%] > strong[_ngcontent-%COMP%]{display:none}.preference-card[_ngcontent-%COMP%]   article[_ngcontent-%COMP%], .preference-required[_ngcontent-%COMP%]   article[_ngcontent-%COMP%]{grid-template-columns:auto minmax(0,1fr) auto;gap:var(--student-space-3);padding:var(--student-space-4)}.preference-required[_ngcontent-%COMP%]   article[_ngcontent-%COMP%] > small[_ngcontent-%COMP%]{grid-column:2}.preference-card[_ngcontent-%COMP%]   article[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:var(--student-text-caption)}.preference-page[_ngcontent-%COMP%] > footer[_ngcontent-%COMP%]{position:sticky;z-index:2;bottom:0;padding:var(--student-space-3);margin:0 calc(var(--student-space-3)*-1) calc(var(--student-space-4)*-1);background:var(--student-color-surface)}.preference-page[_ngcontent-%COMP%] > footer[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{flex:1;justify-content:center;padding:0 var(--student-space-2)}}\n\n@media(max-width:700px) {\n  .preference-page[_ngcontent-%COMP%]    > footer[_ngcontent-%COMP%] { position: static; padding: 0; margin: 0; background: transparent; }\n}\n\n.preference-page[_ngcontent-%COMP%]    > header[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  width: 76px;\n  height: 76px;\n  border-radius: 0;\n  background: transparent;\n}\n\n.preference-page[_ngcontent-%COMP%]    > header[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 76px;\n  height: 76px;\n  object-fit: contain;\n  filter: drop-shadow(var(--student-shadow-card));\n}\n\n@media (max-width: 700px) {\n  .preference-page[_ngcontent-%COMP%]    > header[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%], \n   .preference-page[_ngcontent-%COMP%]    > header[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] { width: 72px; height: 72px; }\n}\n\n@media (max-width: 430px) {\n  .preference-page[_ngcontent-%COMP%]    > header[_ngcontent-%COMP%] { gap: var(--student-space-3); }\n  .preference-page[_ngcontent-%COMP%]    > header[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%], \n   .preference-page[_ngcontent-%COMP%]    > header[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] { width: 62px; height: 62px; }\n}"], changeDetection: 0 });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(StudentAttendanceAlertPreferencesComponent, [{
        type: Component,
        args: [{ selector: 'erp-student-attendance-alert-preferences', imports: [RouterLink, LucideAlertTriangle, LucideCheck, LucideChevronLeft, LucideClock3, LucideFileCheck2, LucideInfo, LucideRotateCcw, LucideSave], changeDetection: ChangeDetectionStrategy.OnPush, template: "<div class=\"preference-page\">\n  <a class=\"preference-back\" routerLink=\"/student/attendance/alerts\"><svg lucideChevronLeft size=\"18\"></svg> Back to alerts</a>\n  <header><span><img src=\"/assets/student/attendance/alerts-bell.webp\" width=\"128\" height=\"128\" alt=\"\" aria-hidden=\"true\" /></span><div><h1>Alert preferences</h1><p>Choose the attendance notifications you receive.</p></div></header>\n  @if (loading()) { <div class=\"preference-state\">Loading preferences\u2026</div> }\n  @else if (error() && !preferences()) { <div class=\"preference-state preference-state--error\">{{ error() }}</div> }\n  @else {\n    <section class=\"preference-card preference-required\">\n      <div class=\"preference-card__heading\"><div><h2>Required notification</h2><p>Critical shortages are always enabled to help you meet university requirements.</p></div><strong>Notification</strong></div>\n      <article><span class=\"preference-icon\" data-tone=\"danger\"><svg lucideAlertTriangle size=\"23\"></svg></span><div><h3>Critical shortage</h3><p>Notify me when a subject falls below the required attendance.</p></div><button class=\"preference-toggle is-on\" type=\"button\" disabled aria-label=\"Critical shortage notifications are always on\"><i></i></button><small>Always on</small></article>\n    </section>\n    <section class=\"preference-card\">\n      <div class=\"preference-card__heading\"><div><h2>Additional notifications</h2><p>Choose which attendance updates appear in your notifications.</p></div><strong>Notification</strong></div>\n      <article><span class=\"preference-icon\" data-tone=\"warning\"><svg lucideAlertTriangle size=\"23\"></svg></span><div><h3>At-risk warning</h3><p>When attendance is close to falling below the minimum.</p></div><button class=\"preference-toggle\" [class.is-on]=\"preferences().risk\" type=\"button\" (click)=\"toggle('risk')\" [attr.aria-pressed]=\"preferences().risk\"><i></i></button></article>\n      <article><span class=\"preference-icon\"><svg lucideClock3 size=\"23\"></svg></span><div><h3>Attendance not marked</h3><p>When a subject does not yet have a saved attendance record.</p></div><button class=\"preference-toggle\" [class.is-on]=\"preferences().pending\" type=\"button\" (click)=\"toggle('pending')\" [attr.aria-pressed]=\"preferences().pending\"><i></i></button></article>\n      <article><span class=\"preference-icon\"><svg lucideFileCheck2 size=\"23\"></svg></span><div><h3>Correction updates</h3><p>When the status of an attendance correction changes.</p></div><button class=\"preference-toggle\" [class.is-on]=\"preferences().correction\" type=\"button\" (click)=\"toggle('correction')\" [attr.aria-pressed]=\"preferences().correction\"><i></i></button></article>\n      <article><span class=\"preference-icon\" data-tone=\"success\"><svg lucideCheck size=\"23\"></svg></span><div><h3>Back on track</h3><p>When a subject is at or above the university minimum.</p></div><button class=\"preference-toggle\" [class.is-on]=\"preferences().onTrack\" type=\"button\" (click)=\"toggle('onTrack')\" [attr.aria-pressed]=\"preferences().onTrack\"><i></i></button></article>\n    </section>\n    <div class=\"preference-info\"><svg lucideInfo size=\"20\"></svg><p><strong>One clear notification system</strong><span>All enabled alerts appear in the student portal notification drawer and Alerts page.</span></p></div>\n    @if (saved()) { <div class=\"preference-saved\" role=\"status\"><svg lucideCheck size=\"20\"></svg> Preferences saved.</div> }\n    @if (error()) { <div class=\"preference-error\" role=\"alert\">{{ error() }}</div> }\n    <footer><button type=\"button\" (click)=\"reset()\"><svg lucideRotateCcw size=\"18\"></svg> Reset to default</button><button class=\"preference-save\" type=\"button\" (click)=\"save()\" [disabled]=\"saving()\"><svg lucideSave size=\"18\"></svg> {{ saving() ? 'Saving\u2026' : 'Save preferences' }}</button></footer>\n  }\n</div>\n", styles: [":host{display:block}.preference-page{display:grid;gap:var(--student-space-4);min-height:calc(100dvh - var(--student-header-height));color:var(--student-color-text)}.preference-page h1,.preference-page h2,.preference-page h3,.preference-page p{margin:0}.preference-page button{font:inherit}.preference-back{display:flex;width:max-content;align-items:center;gap:var(--student-space-1);color:var(--student-color-primary-pressed);text-decoration:none;font-weight:750}.preference-page>header{display:flex;align-items:center;gap:var(--student-space-4)}.preference-page>header>span{display:grid;width:62px;height:62px;place-items:center;border-radius:var(--student-radius-card);color:var(--student-color-warning);background:var(--student-color-warning-soft)}.preference-page h1{font-size:clamp(26px,3vw,38px)}.preference-page>header p{color:var(--student-color-text-secondary)}.preference-card{overflow:hidden;border:1px solid var(--student-color-border);border-radius:var(--student-radius-card);background:var(--student-color-surface);box-shadow:var(--student-attendance-shadow)}.preference-card__heading{display:flex;align-items:end;justify-content:space-between;gap:var(--student-space-4);padding:var(--student-space-4);background:var(--student-color-surface-soft)}.preference-card__heading h2{font-size:var(--student-text-h3)}.preference-card__heading p{margin-top:2px;color:var(--student-color-text-secondary);font-size:var(--student-text-label)}.preference-card__heading>strong{padding-right:var(--student-space-3);color:var(--student-color-text-secondary);font-size:var(--student-text-caption)}.preference-card article{display:grid;grid-template-columns:auto minmax(0,1fr) auto;align-items:center;gap:var(--student-space-4);min-height:82px;padding:var(--student-space-3) var(--student-space-4)}.preference-card article+article{border-top:1px solid var(--student-color-divider)}.preference-card article h3{font-size:var(--student-text-body)}.preference-card article p{margin-top:3px;color:var(--student-color-text-secondary);font-size:var(--student-text-label)}.preference-icon{display:grid;width:44px;height:44px;place-items:center;border-radius:var(--student-radius-pill);color:var(--student-color-text-secondary);background:var(--student-fee-neutral-soft)}.preference-icon[data-tone='danger']{color:var(--student-color-danger);background:var(--student-color-danger-soft)}.preference-icon[data-tone='warning']{color:var(--student-color-warning);background:var(--student-color-warning-soft)}.preference-icon[data-tone='success']{color:var(--student-color-success);background:var(--student-color-success-soft)}.preference-toggle{position:relative;width:54px;height:30px;padding:3px;border:0;border-radius:var(--student-radius-pill);background:var(--student-color-border-strong);cursor:pointer;transition:background var(--student-motion-standard)}.preference-toggle i{display:block;width:24px;height:24px;border-radius:50%;background:var(--student-color-surface-raised);box-shadow:var(--student-shadow-card);transition:transform var(--student-motion-standard)}.preference-toggle.is-on{background:var(--student-color-primary)}.preference-toggle.is-on i{transform:translateX(24px)}.preference-toggle:disabled{cursor:not-allowed;opacity:.75}.preference-required article{grid-template-columns:auto minmax(0,1fr) auto auto}.preference-required article>small{color:var(--student-color-text-muted)}.preference-info,.preference-saved,.preference-error{display:flex;align-items:center;gap:var(--student-space-3);padding:var(--student-space-4);border:1px solid var(--student-color-border);border-radius:var(--student-radius-control);color:var(--student-color-primary-pressed);background:var(--student-color-primary-subtle)}.preference-info span{display:block;margin-top:2px;color:var(--student-color-text-secondary);font-size:var(--student-text-label)}.preference-saved{color:var(--student-color-success);border-color:var(--student-color-success);background:var(--student-color-success-soft);font-weight:750}.preference-error{color:var(--student-color-danger);border-color:var(--student-color-danger);background:var(--student-color-danger-soft)}.preference-page>footer{display:flex;justify-content:flex-end;gap:var(--student-space-3)}.preference-page>footer button{display:flex;min-height:44px;align-items:center;gap:var(--student-space-2);padding:0 var(--student-space-5);border:1px solid var(--student-color-border-strong);border-radius:var(--student-radius-control);color:var(--student-color-primary-pressed);background:var(--student-color-surface);cursor:pointer;font-weight:750}.preference-page>footer .preference-save{border-color:var(--student-color-primary);color:var(--student-color-text-inverse);background:var(--student-color-primary)}.preference-save:disabled{opacity:.65}\n@media(max-width:700px){.preference-page{min-height:calc(100dvh - var(--student-mobile-header-height));gap:var(--student-space-3)}.preference-page>header>span{width:52px;height:52px}.preference-page h1{font-size:27px}.preference-page>header p{font-size:var(--student-text-label)}.preference-card__heading{align-items:start}.preference-card__heading>strong{display:none}.preference-card article,.preference-required article{grid-template-columns:auto minmax(0,1fr) auto;gap:var(--student-space-3);padding:var(--student-space-4)}.preference-required article>small{grid-column:2}.preference-card article p{font-size:var(--student-text-caption)}.preference-page>footer{position:sticky;z-index:2;bottom:0;padding:var(--student-space-3);margin:0 calc(var(--student-space-3)*-1) calc(var(--student-space-4)*-1);background:var(--student-color-surface)}.preference-page>footer button{flex:1;justify-content:center;padding:0 var(--student-space-2)}}\n\n@media(max-width:700px) {\n  .preference-page > footer { position: static; padding: 0; margin: 0; background: transparent; }\n}\n\n.preference-page > header > span {\n  width: 76px;\n  height: 76px;\n  border-radius: 0;\n  background: transparent;\n}\n\n.preference-page > header > span img {\n  width: 76px;\n  height: 76px;\n  object-fit: contain;\n  filter: drop-shadow(var(--student-shadow-card));\n}\n\n@media (max-width: 700px) {\n  .preference-page > header > span,\n  .preference-page > header > span img { width: 72px; height: 72px; }\n}\n\n@media (max-width: 430px) {\n  .preference-page > header { gap: var(--student-space-3); }\n  .preference-page > header > span,\n  .preference-page > header > span img { width: 62px; height: 62px; }\n}\n"] }]
    }], () => [], null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(StudentAttendanceAlertPreferencesComponent, { className: "StudentAttendanceAlertPreferencesComponent", filePath: "frontend/src/app/features/student/academics/student-attendance-alert-preferences.component.ts", lineNumber: 28 }); })();
