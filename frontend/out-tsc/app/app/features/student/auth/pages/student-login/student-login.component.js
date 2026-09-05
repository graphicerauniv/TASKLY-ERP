import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { LucideEye, LucideEyeOff, LucideLockKeyhole, LucideShieldCheck, LucideUserRound, } from '@lucide/angular';
import { ApiService } from '../../../../../core/api.service';
import { StudentSessionService } from '../../../shared/services/student-session.service';
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
function StudentLoginComponent_Conditional_24_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 19);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r0.error());
} }
function StudentLoginComponent_Conditional_25_Conditional_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(0, "svg", 31);
} if (rf & 2) {
    i0.ɵɵproperty("size", 21)("strokeWidth", 1.7);
} }
function StudentLoginComponent_Conditional_25_Conditional_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(0, "svg", 32);
} if (rf & 2) {
    i0.ɵɵproperty("size", 21)("strokeWidth", 1.7);
} }
function StudentLoginComponent_Conditional_25_Template(rf, ctx) { if (rf & 1) {
    const _r2 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 25)(1, "label", 26);
    i0.ɵɵtext(2, "New password");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "div", 27);
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(4, "svg", 28);
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelement(5, "input", 29);
    i0.ɵɵelementStart(6, "button", 30);
    i0.ɵɵlistener("click", function StudentLoginComponent_Conditional_25_Template_button_click_6_listener() { i0.ɵɵrestoreView(_r2); const ctx_r0 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r0.toggleNewPassword()); });
    i0.ɵɵconditionalCreate(7, StudentLoginComponent_Conditional_25_Conditional_7_Template, 1, 2, ":svg:svg", 31)(8, StudentLoginComponent_Conditional_25_Conditional_8_Template, 1, 2, ":svg:svg", 32);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(9, "div", 25)(10, "label", 33);
    i0.ɵɵtext(11, "Confirm password");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(12, "div", 27);
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(13, "svg", 28);
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelement(14, "input", 34);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(15, "button", 35);
    i0.ɵɵtext(16);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("size", 21)("strokeWidth", 1.7);
    i0.ɵɵadvance();
    i0.ɵɵproperty("type", ctx_r0.showNewPassword() ? "text" : "password");
    i0.ɵɵadvance();
    i0.ɵɵattribute("aria-label", ctx_r0.showNewPassword() ? "Hide password" : "Show password");
    i0.ɵɵadvance();
    i0.ɵɵconditional(ctx_r0.showNewPassword() ? 7 : 8);
    i0.ɵɵadvance(6);
    i0.ɵɵproperty("size", 21)("strokeWidth", 1.7);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("disabled", ctx_r0.loading());
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r0.loading() ? "Changing password\u2026" : "Change password and continue");
} }
function StudentLoginComponent_Conditional_26_Conditional_13_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(0, "svg", 31);
} if (rf & 2) {
    i0.ɵɵproperty("size", 21)("strokeWidth", 1.7);
} }
function StudentLoginComponent_Conditional_26_Conditional_14_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(0, "svg", 32);
} if (rf & 2) {
    i0.ɵɵproperty("size", 21)("strokeWidth", 1.7);
} }
function StudentLoginComponent_Conditional_26_Conditional_23_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtext(0, " Signing in\u2026 ");
} }
function StudentLoginComponent_Conditional_26_Conditional_24_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(0, "svg", 21);
    i0.ɵɵtext(1, " Continue securely ");
} if (rf & 2) {
    i0.ɵɵproperty("size", 20)("strokeWidth", 1.8);
} }
function StudentLoginComponent_Conditional_26_Template(rf, ctx) { if (rf & 1) {
    const _r3 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 25)(1, "label", 36);
    i0.ɵɵtext(2, "Student ID");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "div", 27);
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(4, "svg", 37);
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelement(5, "input", 38);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(6, "div", 25)(7, "label", 39);
    i0.ɵɵtext(8, "Password");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(9, "div", 27);
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(10, "svg", 28);
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelement(11, "input", 40);
    i0.ɵɵelementStart(12, "button", 30);
    i0.ɵɵlistener("click", function StudentLoginComponent_Conditional_26_Template_button_click_12_listener() { i0.ɵɵrestoreView(_r3); const ctx_r0 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r0.togglePassword()); });
    i0.ɵɵconditionalCreate(13, StudentLoginComponent_Conditional_26_Conditional_13_Template, 1, 2, ":svg:svg", 31)(14, StudentLoginComponent_Conditional_26_Conditional_14_Template, 1, 2, ":svg:svg", 32);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(15, "div", 41)(16, "label", 42);
    i0.ɵɵelement(17, "input", 43);
    i0.ɵɵelementStart(18, "span");
    i0.ɵɵtext(19, "Remember me");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(20, "a", 44);
    i0.ɵɵtext(21, "Forgot password?");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(22, "button", 35);
    i0.ɵɵconditionalCreate(23, StudentLoginComponent_Conditional_26_Conditional_23_Template, 1, 0)(24, StudentLoginComponent_Conditional_26_Conditional_24_Template, 2, 2);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("size", 21)("strokeWidth", 1.7);
    i0.ɵɵadvance(6);
    i0.ɵɵproperty("size", 21)("strokeWidth", 1.7);
    i0.ɵɵadvance();
    i0.ɵɵproperty("type", ctx_r0.showPassword() ? "text" : "password");
    i0.ɵɵadvance();
    i0.ɵɵattribute("aria-label", ctx_r0.showPassword() ? "Hide password" : "Show password");
    i0.ɵɵadvance();
    i0.ɵɵconditional(ctx_r0.showPassword() ? 13 : 14);
    i0.ɵɵadvance(9);
    i0.ɵɵproperty("disabled", ctx_r0.loading());
    i0.ɵɵadvance();
    i0.ɵɵconditional(ctx_r0.loading() ? 23 : 24);
} }
export class StudentLoginComponent {
    api = inject(ApiService);
    router = inject(Router);
    session = inject(StudentSessionService);
    showPassword = signal(false, ...(ngDevMode ? [{ debugName: "showPassword" }] : /* istanbul ignore next */ []));
    showNewPassword = signal(false, ...(ngDevMode ? [{ debugName: "showNewPassword" }] : /* istanbul ignore next */ []));
    changeRequired = signal(false, ...(ngDevMode ? [{ debugName: "changeRequired" }] : /* istanbul ignore next */ []));
    loading = signal(false, ...(ngDevMode ? [{ debugName: "loading" }] : /* istanbul ignore next */ []));
    error = signal('', ...(ngDevMode ? [{ debugName: "error" }] : /* istanbul ignore next */ []));
    studentToken = '';
    form = new FormGroup({
        studentId: new FormControl('', {
            nonNullable: true,
            validators: [Validators.required, Validators.minLength(4)],
        }),
        password: new FormControl('', {
            nonNullable: true,
            validators: [Validators.required, Validators.minLength(8)],
        }),
        rememberMe: new FormControl(false, { nonNullable: true }),
    });
    changeForm = new FormGroup({
        password: new FormControl('', {
            nonNullable: true,
            validators: [
                Validators.required,
                Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[^A-Za-z0-9]).{8,}$/),
            ],
        }),
        confirmPassword: new FormControl('', { nonNullable: true, validators: [Validators.required] }),
    });
    togglePassword() {
        this.showPassword.update((visible) => !visible);
    }
    toggleNewPassword() {
        this.showNewPassword.update((visible) => !visible);
    }
    submit() {
        this.form.markAllAsTouched();
        if (this.form.invalid || this.loading())
            return;
        this.loading.set(true);
        this.error.set('');
        const { studentId, password } = this.form.getRawValue();
        this.api.studentLogin(studentId, password).subscribe({
            next: ({ token, student }) => {
                this.studentToken = token;
                this.saveSession(token, student);
                this.loading.set(false);
                if (student.mustChangePassword)
                    this.changeRequired.set(true);
                else
                    void this.router.navigate(['/student/dashboard']);
            },
            error: (error) => {
                this.error.set(error.error?.message || 'Unable to sign in.');
                this.loading.set(false);
            },
        });
    }
    changePassword() {
        this.changeForm.markAllAsTouched();
        const { password, confirmPassword } = this.changeForm.getRawValue();
        if (this.changeForm.invalid || password !== confirmPassword || this.loading()) {
            if (password !== confirmPassword)
                this.error.set('The passwords do not match.');
            return;
        }
        this.loading.set(true);
        this.error.set('');
        this.api.changeStudentPassword(this.studentToken, password).subscribe({
            next: ({ token, student }) => {
                this.saveSession(token, student);
                this.loading.set(false);
                void this.router.navigate(['/student/dashboard']);
            },
            error: (error) => {
                this.error.set(error.error?.message || 'Unable to change the password.');
                this.loading.set(false);
            },
        });
    }
    saveSession(token, student) {
        this.session.save(token, student);
    }
    static ɵfac = function StudentLoginComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || StudentLoginComponent)(); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: StudentLoginComponent, selectors: [["erp-student-login"]], decls: 41, vars: 8, consts: [[1, "admin-login-page", "erp-auth-backdrop"], ["aria-labelledby", "student-login-title", 1, "admin-login-shell"], ["src", "assets/images/auth/admin/admin-network.png", "alt", "", "aria-hidden", "true", "decoding", "async", 1, "admin-login-shell__network"], [1, "admin-login-shell__desktop-brand"], ["routerLink", "/student/login", "aria-label", "Graphic Era student login"], ["src", "assets/images/brand/graphic-era-logo.png", "alt", "Graphic Era deemed to be University, Dehradun", "width", "438", "height", "137", "fetchpriority", "high"], ["aria-label", "Graphic Era University", 1, "erp-mobile-auth-hero"], ["routerLink", "/student/login", 1, "erp-mobile-auth-hero__brand"], ["src", "assets/images/auth/admin/graphic-era-building-mobile.webp", "alt", "", "aria-hidden", "true", "decoding", "async", 1, "erp-mobile-auth-hero__art"], ["src", "assets/images/auth/admin/admin-building.png", "alt", "", "aria-hidden", "true", "decoding", "async", 1, "admin-login-shell__building"], ["role", "status", 1, "admin-login-shell__service-status"], ["aria-hidden", "true"], [1, "admin-auth-panel"], ["novalidate", "", 1, "admin-auth-form", 3, "ngSubmit", "formGroup"], [1, "admin-auth-form__heading"], ["aria-hidden", "true", 1, "admin-auth-form__shield"], ["lucideShieldCheck", "", 3, "size", "strokeWidth"], [1, "admin-auth-form__title-row"], ["id", "student-login-title"], ["role", "alert", 1, "admin-auth-form__alert"], [1, "admin-auth-form__security"], ["lucideShieldCheck", "", "aria-hidden", "true", 3, "size", "strokeWidth"], ["role", "status", 1, "admin-login-shell__mobile-footer"], ["aria-hidden", "true", 1, "admin-login-shell__mobile-footer-dot"], ["href", "mailto:support@geu.ac.in"], [1, "admin-auth-form__field"], ["for", "new-student-password"], [1, "admin-auth-form__control"], ["lucideLockKeyhole", "", "aria-hidden", "true", 3, "size", "strokeWidth"], ["id", "new-student-password", "formControlName", "password", "autocomplete", "new-password", "placeholder", "Enter a strong password", 3, "type"], ["type", "button", 1, "admin-auth-form__password-toggle", 3, "click"], ["lucideEyeOff", "", "aria-hidden", "true", 3, "size", "strokeWidth"], ["lucideEye", "", "aria-hidden", "true", 3, "size", "strokeWidth"], ["for", "confirm-student-password"], ["id", "confirm-student-password", "type", "password", "formControlName", "confirmPassword", "autocomplete", "new-password", "placeholder", "Enter the password again"], ["type", "submit", 1, "admin-auth-form__submit", 3, "disabled"], ["for", "student-id"], ["lucideUserRound", "", "aria-hidden", "true", 3, "size", "strokeWidth"], ["id", "student-id", "type", "text", "formControlName", "studentId", "autocomplete", "username", "placeholder", "Enter your Student ID"], ["for", "student-password"], ["id", "student-password", "formControlName", "password", "autocomplete", "current-password", "placeholder", "Enter your password", 3, "type"], [1, "admin-auth-form__options"], [1, "admin-auth-form__remember"], ["type", "checkbox", "formControlName", "rememberMe"], ["href", "mailto:support@geu.ac.in?subject=Student%20password%20reset"]], template: function StudentLoginComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "main", 0)(1, "section", 1);
            i0.ɵɵelement(2, "img", 2);
            i0.ɵɵelementStart(3, "header", 3)(4, "a", 4);
            i0.ɵɵelement(5, "img", 5);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(6, "section", 6)(7, "a", 7);
            i0.ɵɵelement(8, "img", 5);
            i0.ɵɵelementEnd();
            i0.ɵɵelement(9, "img", 8);
            i0.ɵɵelementEnd();
            i0.ɵɵelement(10, "img", 9);
            i0.ɵɵelementStart(11, "div", 10);
            i0.ɵɵelement(12, "span", 11);
            i0.ɵɵtext(13, "ERP services operational");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(14, "section", 12)(15, "form", 13);
            i0.ɵɵlistener("ngSubmit", function StudentLoginComponent_Template_form_ngSubmit_15_listener() { return ctx.changeRequired() ? ctx.changePassword() : ctx.submit(); });
            i0.ɵɵelementStart(16, "div", 14)(17, "div", 15);
            i0.ɵɵnamespaceSVG();
            i0.ɵɵelement(18, "svg", 16);
            i0.ɵɵelementEnd();
            i0.ɵɵnamespaceHTML();
            i0.ɵɵelementStart(19, "div", 17)(20, "h1", 18);
            i0.ɵɵtext(21);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(22, "span");
            i0.ɵɵtext(23, "Graphic Era students");
            i0.ɵɵelementEnd()()();
            i0.ɵɵconditionalCreate(24, StudentLoginComponent_Conditional_24_Template, 2, 1, "div", 19);
            i0.ɵɵconditionalCreate(25, StudentLoginComponent_Conditional_25_Template, 17, 9)(26, StudentLoginComponent_Conditional_26_Template, 25, 9);
            i0.ɵɵelementStart(27, "div", 20);
            i0.ɵɵnamespaceSVG();
            i0.ɵɵelement(28, "svg", 21);
            i0.ɵɵnamespaceHTML();
            i0.ɵɵelementStart(29, "span");
            i0.ɵɵtext(30, "Protected student session");
            i0.ɵɵelementEnd();
            i0.ɵɵelement(31, "i", 11);
            i0.ɵɵelementStart(32, "span");
            i0.ɵɵtext(33, "Activity logged");
            i0.ɵɵelementEnd()()()();
            i0.ɵɵelementStart(34, "div", 22);
            i0.ɵɵelement(35, "span", 23);
            i0.ɵɵelementStart(36, "span");
            i0.ɵɵtext(37, "ERP services operational");
            i0.ɵɵelementEnd();
            i0.ɵɵelement(38, "i", 11);
            i0.ɵɵelementStart(39, "a", 24);
            i0.ɵɵtext(40, "Need help? Contact support");
            i0.ɵɵelementEnd()()()();
        } if (rf & 2) {
            i0.ɵɵadvance(15);
            i0.ɵɵproperty("formGroup", ctx.changeRequired() ? ctx.changeForm : ctx.form);
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("size", 34)("strokeWidth", 1.6);
            i0.ɵɵadvance(3);
            i0.ɵɵtextInterpolate(ctx.changeRequired() ? "Create password" : "Student access");
            i0.ɵɵadvance(3);
            i0.ɵɵconditional(ctx.error() ? 24 : -1);
            i0.ɵɵadvance();
            i0.ɵɵconditional(ctx.changeRequired() ? 25 : 26);
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("size", 17)("strokeWidth", 1.7);
        } }, dependencies: [ReactiveFormsModule, i1.ɵNgNoValidate, i1.DefaultValueAccessor, i1.CheckboxControlValueAccessor, i1.NgControlStatus, i1.NgControlStatusGroup, i1.FormGroupDirective, i1.FormControlName, RouterLink,
            LucideEye,
            LucideEyeOff,
            LucideLockKeyhole,
            LucideShieldCheck,
            LucideUserRound], encapsulation: 2, changeDetection: 0 });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(StudentLoginComponent, [{
        type: Component,
        args: [{ selector: 'erp-student-login', imports: [
                    ReactiveFormsModule,
                    RouterLink,
                    LucideEye,
                    LucideEyeOff,
                    LucideLockKeyhole,
                    LucideShieldCheck,
                    LucideUserRound,
                ], changeDetection: ChangeDetectionStrategy.OnPush, template: "<main class=\"admin-login-page erp-auth-backdrop\">\n  <section class=\"admin-login-shell\" aria-labelledby=\"student-login-title\">\n    <img class=\"admin-login-shell__network\" src=\"assets/images/auth/admin/admin-network.png\" alt=\"\" aria-hidden=\"true\" decoding=\"async\" />\n    <header class=\"admin-login-shell__desktop-brand\"><a routerLink=\"/student/login\" aria-label=\"Graphic Era student login\"><img src=\"assets/images/brand/graphic-era-logo.png\" alt=\"Graphic Era deemed to be University, Dehradun\" width=\"438\" height=\"137\" fetchpriority=\"high\" /></a></header>\n    <section class=\"erp-mobile-auth-hero\" aria-label=\"Graphic Era University\">\n      <a class=\"erp-mobile-auth-hero__brand\" routerLink=\"/student/login\"><img src=\"assets/images/brand/graphic-era-logo.png\" alt=\"Graphic Era deemed to be University, Dehradun\" width=\"438\" height=\"137\" fetchpriority=\"high\" /></a>\n      <img class=\"erp-mobile-auth-hero__art\" src=\"assets/images/auth/admin/graphic-era-building-mobile.webp\" alt=\"\" aria-hidden=\"true\" decoding=\"async\" />\n    </section>\n    <img class=\"admin-login-shell__building\" src=\"assets/images/auth/admin/admin-building.png\" alt=\"\" aria-hidden=\"true\" decoding=\"async\" />\n    <div class=\"admin-login-shell__service-status\" role=\"status\"><span aria-hidden=\"true\"></span>ERP services operational</div>\n    <section class=\"admin-auth-panel\">\n      <form class=\"admin-auth-form\" [formGroup]=\"changeRequired() ? changeForm : form\" (ngSubmit)=\"changeRequired() ? changePassword() : submit()\" novalidate>\n        <div class=\"admin-auth-form__heading\"><div class=\"admin-auth-form__shield\" aria-hidden=\"true\"><svg lucideShieldCheck [size]=\"34\" [strokeWidth]=\"1.6\"></svg></div><div class=\"admin-auth-form__title-row\"><h1 id=\"student-login-title\">{{ changeRequired() ? 'Create password' : 'Student access' }}</h1><span>Graphic Era students</span></div></div>\n        @if (error()) { <div class=\"admin-auth-form__alert\" role=\"alert\">{{ error() }}</div> }\n        @if (changeRequired()) {\n          <div class=\"admin-auth-form__field\"><label for=\"new-student-password\">New password</label><div class=\"admin-auth-form__control\"><svg lucideLockKeyhole [size]=\"21\" [strokeWidth]=\"1.7\" aria-hidden=\"true\"></svg><input id=\"new-student-password\" [type]=\"showNewPassword() ? 'text' : 'password'\" formControlName=\"password\" autocomplete=\"new-password\" placeholder=\"Enter a strong password\" /><button class=\"admin-auth-form__password-toggle\" type=\"button\" (click)=\"toggleNewPassword()\" [attr.aria-label]=\"showNewPassword() ? 'Hide password' : 'Show password'\">@if (showNewPassword()) { <svg lucideEyeOff [size]=\"21\" [strokeWidth]=\"1.7\" aria-hidden=\"true\"></svg> } @else { <svg lucideEye [size]=\"21\" [strokeWidth]=\"1.7\" aria-hidden=\"true\"></svg> }</button></div></div>\n          <div class=\"admin-auth-form__field\"><label for=\"confirm-student-password\">Confirm password</label><div class=\"admin-auth-form__control\"><svg lucideLockKeyhole [size]=\"21\" [strokeWidth]=\"1.7\" aria-hidden=\"true\"></svg><input id=\"confirm-student-password\" type=\"password\" formControlName=\"confirmPassword\" autocomplete=\"new-password\" placeholder=\"Enter the password again\" /></div></div>\n          <button class=\"admin-auth-form__submit\" type=\"submit\" [disabled]=\"loading()\">{{ loading() ? 'Changing password\u2026' : 'Change password and continue' }}</button>\n        } @else {\n          <div class=\"admin-auth-form__field\"><label for=\"student-id\">Student ID</label><div class=\"admin-auth-form__control\"><svg lucideUserRound [size]=\"21\" [strokeWidth]=\"1.7\" aria-hidden=\"true\"></svg><input id=\"student-id\" type=\"text\" formControlName=\"studentId\" autocomplete=\"username\" placeholder=\"Enter your Student ID\" /></div></div>\n          <div class=\"admin-auth-form__field\"><label for=\"student-password\">Password</label><div class=\"admin-auth-form__control\"><svg lucideLockKeyhole [size]=\"21\" [strokeWidth]=\"1.7\" aria-hidden=\"true\"></svg><input id=\"student-password\" [type]=\"showPassword() ? 'text' : 'password'\" formControlName=\"password\" autocomplete=\"current-password\" placeholder=\"Enter your password\" /><button class=\"admin-auth-form__password-toggle\" type=\"button\" (click)=\"togglePassword()\" [attr.aria-label]=\"showPassword() ? 'Hide password' : 'Show password'\">@if (showPassword()) { <svg lucideEyeOff [size]=\"21\" [strokeWidth]=\"1.7\" aria-hidden=\"true\"></svg> } @else { <svg lucideEye [size]=\"21\" [strokeWidth]=\"1.7\" aria-hidden=\"true\"></svg> }</button></div></div>\n          <div class=\"admin-auth-form__options\"><label class=\"admin-auth-form__remember\"><input type=\"checkbox\" formControlName=\"rememberMe\" /><span>Remember me</span></label><a href=\"mailto:support@geu.ac.in?subject=Student%20password%20reset\">Forgot password?</a></div>\n          <button class=\"admin-auth-form__submit\" type=\"submit\" [disabled]=\"loading()\">@if (loading()) { Signing in\u2026 } @else { <svg lucideShieldCheck [size]=\"20\" [strokeWidth]=\"1.8\" aria-hidden=\"true\"></svg> Continue securely }</button>\n        }\n        <div class=\"admin-auth-form__security\"><svg lucideShieldCheck [size]=\"17\" [strokeWidth]=\"1.7\" aria-hidden=\"true\"></svg><span>Protected student session</span><i aria-hidden=\"true\"></i><span>Activity logged</span></div>\n      </form>\n    </section>\n    <div class=\"admin-login-shell__mobile-footer\" role=\"status\">\n      <span class=\"admin-login-shell__mobile-footer-dot\" aria-hidden=\"true\"></span>\n      <span>ERP services operational</span>\n      <i aria-hidden=\"true\"></i>\n      <a href=\"mailto:support@geu.ac.in\">Need help? Contact support</a>\n    </div>\n  </section>\n</main>\n" }]
    }], null, null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(StudentLoginComponent, { className: "StudentLoginComponent", filePath: "frontend/src/app/features/student/auth/pages/student-login/student-login.component.ts", lineNumber: 28 }); })();
