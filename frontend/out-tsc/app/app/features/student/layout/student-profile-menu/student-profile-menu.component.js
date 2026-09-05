import { ChangeDetectionStrategy, Component, ElementRef, HostListener, inject, } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LucideFolderOpen, LucideGraduationCap, LucideLogOut, LucideSettings, LucideUserRound, } from '@lucide/angular';
import { StudentLayoutStateService } from '../../shared/services/student-layout-state.service';
import { StudentSessionService } from '../../shared/services/student-session.service';
import * as i0 from "@angular/core";
const _c0 = () => ({ view: "academic" });
const _c1 = () => ({ view: "documents" });
function StudentProfileMenuComponent_Conditional_0_Template(rf, ctx) { if (rf & 1) {
    const _r1 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "section", 0)(1, "header", 1)(2, "span", 2);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "span")(5, "strong");
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "small");
    i0.ɵɵtext(8);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(9, "div", 3)(10, "a", 4);
    i0.ɵɵlistener("click", function StudentProfileMenuComponent_Conditional_0_Template_a_click_10_listener() { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.close()); });
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(11, "svg", 5);
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(12, "span");
    i0.ɵɵtext(13, "My profile");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(14, "a", 6);
    i0.ɵɵlistener("click", function StudentProfileMenuComponent_Conditional_0_Template_a_click_14_listener() { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.close()); });
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(15, "svg", 7);
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(16, "span");
    i0.ɵɵtext(17, "Academic record");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(18, "a", 6);
    i0.ɵɵlistener("click", function StudentProfileMenuComponent_Conditional_0_Template_a_click_18_listener() { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.close()); });
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(19, "svg", 8);
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(20, "span");
    i0.ɵɵtext(21, "Documents");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(22, "button", 9);
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(23, "svg", 10);
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(24, "span");
    i0.ɵɵtext(25, "Settings");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(26, "a", 11);
    i0.ɵɵlistener("click", function StudentProfileMenuComponent_Conditional_0_Template_a_click_26_listener() { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.signOut()); });
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(27, "svg", 12);
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(28, "span");
    i0.ɵɵtext(29, "Sign out");
    i0.ɵɵelementEnd()()()();
} if (rf & 2) {
    let tmp_2_0;
    let tmp_3_0;
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(ctx_r1.session.initials());
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(((tmp_2_0 = ctx_r1.session.profile()) == null ? null : tmp_2_0.name) || "Student");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1("Student ID ", ((tmp_3_0 = ctx_r1.session.profile()) == null ? null : tmp_3_0.studentId) || "Unavailable");
    i0.ɵɵadvance(6);
    i0.ɵɵproperty("queryParams", i0.ɵɵpureFunction0(5, _c0));
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("queryParams", i0.ɵɵpureFunction0(6, _c1));
} }
export class StudentProfileMenuComponent {
    layoutState = inject(StudentLayoutStateService);
    session = inject(StudentSessionService);
    elementRef = inject(ElementRef);
    closeOnOutsidePointer(event) {
        if (!this.layoutState.profileMenuOpen())
            return;
        const target = event.target;
        if (!(target instanceof Node))
            return;
        if (this.elementRef.nativeElement.contains(target) || this.layoutState.isProfileTrigger(target))
            return;
        this.layoutState.closeProfileMenu();
    }
    close() {
        this.layoutState.closeProfileMenu();
    }
    signOut() {
        this.session.clear();
        this.close();
    }
    static ɵfac = function StudentProfileMenuComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || StudentProfileMenuComponent)(); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: StudentProfileMenuComponent, selectors: [["erp-student-profile-menu"]], hostBindings: function StudentProfileMenuComponent_HostBindings(rf, ctx) { if (rf & 1) {
            i0.ɵɵlistener("pointerdown", function StudentProfileMenuComponent_pointerdown_HostBindingHandler($event) { return ctx.closeOnOutsidePointer($event); }, i0.ɵɵresolveDocument);
        } }, decls: 1, vars: 1, consts: [["id", "student-profile-menu", "role", "menu", "aria-label", "Student account menu", 1, "student-profile-menu"], [1, "student-profile-menu__header"], [1, "student-avatar", "student-avatar--large"], [1, "student-profile-menu__actions"], ["routerLink", "/student/profile", "role", "menuitem", 3, "click"], ["lucideUserRound", "", "size", "18", "aria-hidden", "true"], ["routerLink", "/student/profile", "role", "menuitem", 3, "click", "queryParams"], ["lucideGraduationCap", "", "size", "18", "aria-hidden", "true"], ["lucideFolderOpen", "", "size", "18", "aria-hidden", "true"], ["type", "button", "role", "menuitem", "disabled", ""], ["lucideSettings", "", "size", "18", "aria-hidden", "true"], ["routerLink", "/student/login", "role", "menuitem", 3, "click"], ["lucideLogOut", "", "size", "18", "aria-hidden", "true"]], template: function StudentProfileMenuComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵconditionalCreate(0, StudentProfileMenuComponent_Conditional_0_Template, 30, 7, "section", 0);
        } if (rf & 2) {
            i0.ɵɵconditional(ctx.layoutState.profileMenuOpen() ? 0 : -1);
        } }, dependencies: [LucideFolderOpen,
            LucideGraduationCap,
            LucideLogOut,
            LucideSettings,
            LucideUserRound,
            RouterLink], encapsulation: 2, changeDetection: 0 });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(StudentProfileMenuComponent, [{
        type: Component,
        args: [{ selector: 'erp-student-profile-menu', imports: [
                    LucideFolderOpen,
                    LucideGraduationCap,
                    LucideLogOut,
                    LucideSettings,
                    LucideUserRound,
                    RouterLink,
                ], changeDetection: ChangeDetectionStrategy.OnPush, template: "@if (layoutState.profileMenuOpen()) {\n  <section\n    id=\"student-profile-menu\"\n    class=\"student-profile-menu\"\n    role=\"menu\"\n    aria-label=\"Student account menu\"\n  >\n    <header class=\"student-profile-menu__header\">\n      <span class=\"student-avatar student-avatar--large\">{{ session.initials() }}</span>\n      <span>\n        <strong>{{ session.profile()?.name || 'Student' }}</strong>\n        <small>Student ID {{ session.profile()?.studentId || 'Unavailable' }}</small>\n      </span>\n    </header>\n    <div class=\"student-profile-menu__actions\">\n      <a routerLink=\"/student/profile\" role=\"menuitem\" (click)=\"close()\">\n        <svg lucideUserRound size=\"18\" aria-hidden=\"true\"></svg><span>My profile</span>\n      </a>\n      <a routerLink=\"/student/profile\" [queryParams]=\"{ view: 'academic' }\" role=\"menuitem\" (click)=\"close()\">\n        <svg lucideGraduationCap size=\"18\" aria-hidden=\"true\"></svg><span>Academic record</span>\n      </a>\n      <a routerLink=\"/student/profile\" [queryParams]=\"{ view: 'documents' }\" role=\"menuitem\" (click)=\"close()\">\n        <svg lucideFolderOpen size=\"18\" aria-hidden=\"true\"></svg><span>Documents</span>\n      </a>\n      <button type=\"button\" role=\"menuitem\" disabled>\n        <svg lucideSettings size=\"18\" aria-hidden=\"true\"></svg><span>Settings</span>\n      </button>\n      <a routerLink=\"/student/login\" role=\"menuitem\" (click)=\"signOut()\">\n        <svg lucideLogOut size=\"18\" aria-hidden=\"true\"></svg><span>Sign out</span>\n      </a>\n    </div>\n  </section>\n}\n" }]
    }], null, { closeOnOutsidePointer: [{
            type: HostListener,
            args: ['document:pointerdown', ['$event']]
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(StudentProfileMenuComponent, { className: "StudentProfileMenuComponent", filePath: "frontend/src/app/features/student/layout/student-profile-menu/student-profile-menu.component.ts", lineNumber: 32 }); })();
