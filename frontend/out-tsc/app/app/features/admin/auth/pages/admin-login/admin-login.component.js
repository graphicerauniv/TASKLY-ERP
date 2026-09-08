import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { inject } from '@angular/core';
import { ApiService } from '../../../../../core/api.service';
import { AuthService } from '../../../../../core/auth.service';
import { FacultySessionService } from '../../../../faculty/shared/faculty-session.service';
import { LucideEye, LucideEyeOff, LucideLockKeyhole, LucideMail, LucideShieldCheck, LucideUserRound, } from '@lucide/angular';
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
function AdminLoginComponent_Conditional_26_Template(rf, ctx) { if (rf & 1) {
    const _r1 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 19)(1, "button", 27);
    i0.ɵɵlistener("click", function AdminLoginComponent_Conditional_26_Template_button_click_1_listener() { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.setMode("admin")); });
    i0.ɵɵtext(2, " Admin ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "button", 27);
    i0.ɵɵlistener("click", function AdminLoginComponent_Conditional_26_Template_button_click_3_listener() { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.setMode("faculty")); });
    i0.ɵɵtext(4, " Faculty ");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵclassProp("is-active", ctx_r1.mode() === "admin");
    i0.ɵɵadvance(2);
    i0.ɵɵclassProp("is-active", ctx_r1.mode() === "faculty");
} }
function AdminLoginComponent_Conditional_27_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 20);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r1.error());
} }
function AdminLoginComponent_Conditional_28_Conditional_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(0, "svg", 31);
} if (rf & 2) {
    i0.ɵɵproperty("size", 21)("strokeWidth", 1.7);
} }
function AdminLoginComponent_Conditional_28_Conditional_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(0, "svg", 32);
} if (rf & 2) {
    i0.ɵɵproperty("size", 21)("strokeWidth", 1.7);
} }
function AdminLoginComponent_Conditional_28_Conditional_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 34);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r1.mode() === "faculty" ? "Employee ID is required." : "Official email is required.", " ");
} }
function AdminLoginComponent_Conditional_28_Conditional_15_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(0, "svg", 38);
} if (rf & 2) {
    i0.ɵɵproperty("size", 21)("strokeWidth", 1.7);
} }
function AdminLoginComponent_Conditional_28_Conditional_16_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(0, "svg", 39);
} if (rf & 2) {
    i0.ɵɵproperty("size", 21)("strokeWidth", 1.7);
} }
function AdminLoginComponent_Conditional_28_Conditional_17_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 40);
    i0.ɵɵtext(1, "Password is required.");
    i0.ɵɵelementEnd();
} }
function AdminLoginComponent_Conditional_28_Template(rf, ctx) { if (rf & 1) {
    const _r3 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 28)(1, "label", 29);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "div", 30);
    i0.ɵɵconditionalCreate(4, AdminLoginComponent_Conditional_28_Conditional_4_Template, 1, 2, ":svg:svg", 31)(5, AdminLoginComponent_Conditional_28_Conditional_5_Template, 1, 2, ":svg:svg", 32);
    i0.ɵɵelement(6, "input", 33);
    i0.ɵɵelementEnd();
    i0.ɵɵconditionalCreate(7, AdminLoginComponent_Conditional_28_Conditional_7_Template, 2, 1, "p", 34);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "div", 28)(9, "label", 35);
    i0.ɵɵtext(10, "Password");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(11, "div", 30);
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(12, "svg", 23);
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelement(13, "input", 36);
    i0.ɵɵelementStart(14, "button", 37);
    i0.ɵɵlistener("click", function AdminLoginComponent_Conditional_28_Template_button_click_14_listener() { i0.ɵɵrestoreView(_r3); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.togglePassword()); });
    i0.ɵɵconditionalCreate(15, AdminLoginComponent_Conditional_28_Conditional_15_Template, 1, 2, ":svg:svg", 38)(16, AdminLoginComponent_Conditional_28_Conditional_16_Template, 1, 2, ":svg:svg", 39);
    i0.ɵɵelementEnd()();
    i0.ɵɵconditionalCreate(17, AdminLoginComponent_Conditional_28_Conditional_17_Template, 2, 0, "p", 40);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(18, "div", 41)(19, "label", 42);
    i0.ɵɵelement(20, "input", 43);
    i0.ɵɵelementStart(21, "span");
    i0.ɵɵtext(22, "Keep me signed in");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(23, "a", 44);
    i0.ɵɵtext(24, "Reset password");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r1.mode() === "faculty" ? "Employee ID" : "Official email");
    i0.ɵɵadvance();
    i0.ɵɵclassProp("admin-auth-form__control--invalid", ctx_r1.form.controls.identifier.touched && ctx_r1.form.controls.identifier.invalid);
    i0.ɵɵadvance();
    i0.ɵɵconditional(ctx_r1.mode() === "faculty" ? 4 : 5);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("type", ctx_r1.mode() === "faculty" ? "text" : "email")("placeholder", ctx_r1.mode() === "faculty" ? "Enter Employee ID" : "admin@geu.ac.in");
    i0.ɵɵattribute("inputmode", ctx_r1.mode() === "faculty" ? null : "email");
    i0.ɵɵadvance();
    i0.ɵɵconditional(ctx_r1.form.controls.identifier.touched && ctx_r1.form.controls.identifier.invalid ? 7 : -1);
    i0.ɵɵadvance(4);
    i0.ɵɵclassProp("admin-auth-form__control--invalid", ctx_r1.form.controls.password.touched && ctx_r1.form.controls.password.invalid);
    i0.ɵɵadvance();
    i0.ɵɵproperty("size", 21)("strokeWidth", 1.7);
    i0.ɵɵadvance();
    i0.ɵɵproperty("type", ctx_r1.showPassword() ? "text" : "password");
    i0.ɵɵadvance();
    i0.ɵɵattribute("aria-label", ctx_r1.showPassword() ? "Hide password" : "Show password");
    i0.ɵɵadvance();
    i0.ɵɵconditional(ctx_r1.showPassword() ? 15 : 16);
    i0.ɵɵadvance(2);
    i0.ɵɵconditional(ctx_r1.form.controls.password.touched && ctx_r1.form.controls.password.invalid ? 17 : -1);
} }
function AdminLoginComponent_Conditional_29_Conditional_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(0, "svg", 47);
} if (rf & 2) {
    i0.ɵɵproperty("size", 21);
} }
function AdminLoginComponent_Conditional_29_Conditional_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(0, "svg", 48);
} if (rf & 2) {
    i0.ɵɵproperty("size", 21);
} }
function AdminLoginComponent_Conditional_29_Conditional_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 49);
    i0.ɵɵtext(1, " Use at least 8 characters with uppercase, lowercase, and a symbol. ");
    i0.ɵɵelementEnd();
} }
function AdminLoginComponent_Conditional_29_Template(rf, ctx) { if (rf & 1) {
    const _r4 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 28)(1, "label", 45);
    i0.ɵɵtext(2, "New password");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "div", 30);
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(4, "svg", 23);
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelement(5, "input", 46);
    i0.ɵɵelementStart(6, "button", 37);
    i0.ɵɵlistener("click", function AdminLoginComponent_Conditional_29_Template_button_click_6_listener() { i0.ɵɵrestoreView(_r4); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.toggleNewPassword()); });
    i0.ɵɵconditionalCreate(7, AdminLoginComponent_Conditional_29_Conditional_7_Template, 1, 1, ":svg:svg", 47)(8, AdminLoginComponent_Conditional_29_Conditional_8_Template, 1, 1, ":svg:svg", 48);
    i0.ɵɵelementEnd()();
    i0.ɵɵconditionalCreate(9, AdminLoginComponent_Conditional_29_Conditional_9_Template, 2, 0, "p", 49);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(10, "div", 28)(11, "label", 50);
    i0.ɵɵtext(12, "Confirm password");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(13, "div", 30);
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(14, "svg", 23);
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelement(15, "input", 51);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("size", 21)("strokeWidth", 1.7);
    i0.ɵɵadvance();
    i0.ɵɵproperty("type", ctx_r1.showNewPassword() ? "text" : "password");
    i0.ɵɵadvance();
    i0.ɵɵattribute("aria-label", ctx_r1.showNewPassword() ? "Hide password" : "Show password");
    i0.ɵɵadvance();
    i0.ɵɵconditional(ctx_r1.showNewPassword() ? 7 : 8);
    i0.ɵɵadvance(2);
    i0.ɵɵconditional(ctx_r1.changeForm.controls.password.touched && ctx_r1.changeForm.controls.password.invalid ? 9 : -1);
    i0.ɵɵadvance(5);
    i0.ɵɵproperty("size", 21)("strokeWidth", 1.7);
} }
function AdminLoginComponent_Conditional_31_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "span", 52);
    i0.ɵɵtext(1);
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r1.changeRequired() ? "Saving password\u2026" : "Signing in\u2026", " ");
} }
function AdminLoginComponent_Conditional_32_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(0, "svg", 53);
    i0.ɵɵtext(1);
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵproperty("size", 20)("strokeWidth", 1.8);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r1.changeRequired() ? "Save and open dashboard" : "Continue securely", " ");
} }
export class AdminLoginComponent {
    api = inject(ApiService);
    auth = inject(AuthService);
    router = inject(Router);
    route = inject(ActivatedRoute);
    facultySession = inject(FacultySessionService);
    mode = signal('admin', ...(ngDevMode ? [{ debugName: "mode" }] : /* istanbul ignore next */ []));
    showPassword = signal(false, ...(ngDevMode ? [{ debugName: "showPassword" }] : /* istanbul ignore next */ []));
    showNewPassword = signal(false, ...(ngDevMode ? [{ debugName: "showNewPassword" }] : /* istanbul ignore next */ []));
    changeRequired = signal(false, ...(ngDevMode ? [{ debugName: "changeRequired" }] : /* istanbul ignore next */ []));
    loading = signal(false, ...(ngDevMode ? [{ debugName: "loading" }] : /* istanbul ignore next */ []));
    error = signal(this.route.snapshot.queryParamMap.get('reason') === 'session-expired'
        ? 'Your admin session expired. Sign in again to continue.'
        : '', ...(ngDevMode ? [{ debugName: "error" }] : /* istanbul ignore next */ []));
    form = new FormGroup({
        identifier: new FormControl('', {
            nonNullable: true,
            validators: [Validators.required],
        }),
        password: new FormControl('', {
            nonNullable: true,
            validators: [Validators.required],
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
    facultyToken = '';
    setMode(mode) {
        if (this.loading() || this.changeRequired())
            return;
        this.mode.set(mode);
        this.form.reset({ identifier: '', password: '', rememberMe: false });
        this.error.set('');
    }
    togglePassword() {
        this.showPassword.update((visible) => !visible);
    }
    toggleNewPassword() {
        this.showNewPassword.update((visible) => !visible);
    }
    submit() {
        this.error.set('');
        this.form.markAllAsTouched();
        if (this.form.invalid || this.loading())
            return;
        this.loading.set(true);
        const { identifier, password } = this.form.getRawValue();
        if (this.mode() === 'faculty') {
            this.api.facultyLogin(identifier, password).subscribe({
                next: ({ token, faculty }) => {
                    this.facultyToken = token;
                    this.facultySession.save(token, faculty);
                    this.loading.set(false);
                    if (faculty.mustChangePassword)
                        this.changeRequired.set(true);
                    else
                        void this.router.navigate(['/faculty/dashboard']);
                },
                error: (error) => {
                    this.error.set(error.error?.message || 'Unable to sign in.');
                    this.loading.set(false);
                },
            });
            return;
        }
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(identifier)) {
            this.error.set('Enter a valid official email.');
            this.loading.set(false);
            return;
        }
        this.api.login(identifier, password).subscribe({
            next: ({ token, refreshToken, admin }) => {
                this.auth.save(token, admin, refreshToken);
                void this.router.navigate(['/admin/dashboard']);
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
        this.api.changeFacultyPassword(this.facultyToken, password).subscribe({
            next: ({ token, faculty }) => {
                this.facultySession.save(token, faculty);
                this.loading.set(false);
                void this.router.navigate(['/faculty/dashboard']);
            },
            error: (error) => {
                this.error.set(error.error?.message || 'Unable to change the password.');
                this.loading.set(false);
            },
        });
    }
    static ɵfac = function AdminLoginComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || AdminLoginComponent)(); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: AdminLoginComponent, selectors: [["erp-admin-login"]], decls: 47, vars: 13, consts: [[1, "admin-login-page", "erp-auth-backdrop"], ["aria-labelledby", "admin-login-title", 1, "admin-login-shell"], ["src", "assets/images/auth/admin/admin-network.png", "alt", "", "aria-hidden", "true", "decoding", "async", 1, "admin-login-shell__network"], [1, "admin-login-shell__desktop-brand"], ["routerLink", "/login", "aria-label", "Graphic Era ERP admin login"], ["src", "assets/images/brand/graphic-era-logo.png", "alt", "Graphic Era deemed to be University, Dehradun", "width", "438", "height", "137", "fetchpriority", "high"], ["aria-label", "Graphic Era University", 1, "erp-mobile-auth-hero"], ["routerLink", "/login", 1, "erp-mobile-auth-hero__brand"], ["src", "assets/images/auth/admin/graphic-era-building-mobile.webp", "alt", "", "aria-hidden", "true", "decoding", "async", 1, "erp-mobile-auth-hero__art"], ["src", "assets/images/auth/admin/admin-building.png", "alt", "", "aria-hidden", "true", "decoding", "async", 1, "admin-login-shell__building"], ["role", "status", 1, "admin-login-shell__service-status"], ["aria-hidden", "true"], [1, "admin-auth-panel"], ["novalidate", "", 1, "admin-auth-form", 3, "ngSubmit", "formGroup"], [1, "admin-auth-form__heading"], ["aria-hidden", "true", 1, "admin-auth-form__shield"], ["lucideShieldCheck", "", 3, "size", "strokeWidth"], [1, "admin-auth-form__title-row"], ["id", "admin-login-title"], ["aria-label", "Choose account type", 1, "admin-auth-form__role-switch"], ["role", "alert", 1, "admin-auth-form__alert"], ["type", "submit", 1, "admin-auth-form__submit", 3, "disabled"], [1, "admin-auth-form__security"], ["lucideLockKeyhole", "", "aria-hidden", "true", 3, "size", "strokeWidth"], ["role", "status", 1, "admin-login-shell__mobile-footer"], ["aria-hidden", "true", 1, "admin-login-shell__mobile-footer-dot"], ["href", "mailto:support@geu.ac.in"], ["type", "button", 3, "click"], [1, "admin-auth-form__field"], ["for", "admin-identifier"], [1, "admin-auth-form__control"], ["lucideUserRound", "", "aria-hidden", "true", 3, "size", "strokeWidth"], ["lucideMail", "", "aria-hidden", "true", 3, "size", "strokeWidth"], ["id", "admin-identifier", "formControlName", "identifier", "autocomplete", "username", "aria-describedby", "admin-identifier-error", 3, "type", "placeholder"], ["id", "admin-identifier-error", 1, "admin-auth-form__error"], ["for", "admin-password"], ["id", "admin-password", "formControlName", "password", "autocomplete", "current-password", "placeholder", "Enter your password", "aria-describedby", "admin-password-error", 3, "type"], ["type", "button", 1, "admin-auth-form__password-toggle", 3, "click"], ["lucideEyeOff", "", "aria-hidden", "true", 3, "size", "strokeWidth"], ["lucideEye", "", "aria-hidden", "true", 3, "size", "strokeWidth"], ["id", "admin-password-error", 1, "admin-auth-form__error"], [1, "admin-auth-form__options"], [1, "admin-auth-form__remember"], ["type", "checkbox", "formControlName", "rememberMe"], ["href", "mailto:support@geu.ac.in?subject=ERP%20password%20reset"], ["for", "faculty-new-password"], ["id", "faculty-new-password", "formControlName", "password", "autocomplete", "new-password", "placeholder", "Create a strong password", 3, "type"], ["lucideEyeOff", "", "aria-hidden", "true", 3, "size"], ["lucideEye", "", "aria-hidden", "true", 3, "size"], [1, "admin-auth-form__error"], ["for", "faculty-confirm-password"], ["id", "faculty-confirm-password", "type", "password", "formControlName", "confirmPassword", "autocomplete", "new-password", "placeholder", "Repeat your password"], ["aria-hidden", "true", 1, "admin-auth-form__spinner"], ["lucideShieldCheck", "", "aria-hidden", "true", 3, "size", "strokeWidth"]], template: function AdminLoginComponent_Template(rf, ctx) { if (rf & 1) {
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
            i0.ɵɵtext(13, " ERP services operational ");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(14, "section", 12)(15, "form", 13);
            i0.ɵɵlistener("ngSubmit", function AdminLoginComponent_Template_form_ngSubmit_15_listener() { return ctx.changeRequired() ? ctx.changePassword() : ctx.submit(); });
            i0.ɵɵelementStart(16, "div", 14)(17, "div", 15);
            i0.ɵɵnamespaceSVG();
            i0.ɵɵelement(18, "svg", 16);
            i0.ɵɵelementEnd();
            i0.ɵɵnamespaceHTML();
            i0.ɵɵelementStart(19, "div", 17)(20, "h1", 18);
            i0.ɵɵtext(21);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(22, "span");
            i0.ɵɵtext(23);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(24, "p");
            i0.ɵɵtext(25);
            i0.ɵɵelementEnd()();
            i0.ɵɵconditionalCreate(26, AdminLoginComponent_Conditional_26_Template, 5, 4, "div", 19);
            i0.ɵɵconditionalCreate(27, AdminLoginComponent_Conditional_27_Template, 2, 1, "div", 20);
            i0.ɵɵconditionalCreate(28, AdminLoginComponent_Conditional_28_Template, 25, 16)(29, AdminLoginComponent_Conditional_29_Template, 16, 8);
            i0.ɵɵelementStart(30, "button", 21);
            i0.ɵɵconditionalCreate(31, AdminLoginComponent_Conditional_31_Template, 2, 1)(32, AdminLoginComponent_Conditional_32_Template, 2, 3);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(33, "div", 22);
            i0.ɵɵnamespaceSVG();
            i0.ɵɵelement(34, "svg", 23);
            i0.ɵɵnamespaceHTML();
            i0.ɵɵelementStart(35, "span");
            i0.ɵɵtext(36, "Protected session");
            i0.ɵɵelementEnd();
            i0.ɵɵelement(37, "i", 11);
            i0.ɵɵelementStart(38, "span");
            i0.ɵɵtext(39, "Activity logged");
            i0.ɵɵelementEnd()()()();
            i0.ɵɵelementStart(40, "div", 24);
            i0.ɵɵelement(41, "span", 25);
            i0.ɵɵelementStart(42, "span");
            i0.ɵɵtext(43, "ERP services operational");
            i0.ɵɵelementEnd();
            i0.ɵɵelement(44, "i", 11);
            i0.ɵɵelementStart(45, "a", 26);
            i0.ɵɵtext(46, "Need help? Contact support");
            i0.ɵɵelementEnd()()()();
        } if (rf & 2) {
            i0.ɵɵadvance(15);
            i0.ɵɵproperty("formGroup", ctx.changeRequired() ? ctx.changeForm : ctx.form);
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("size", 34)("strokeWidth", 1.6);
            i0.ɵɵadvance(3);
            i0.ɵɵtextInterpolate1(" ", ctx.changeRequired() ? "Create password" : ctx.mode() === "faculty" ? "Faculty access" : "Admin access", " ");
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate(ctx.mode() === "faculty" ? "Faculty portal" : "Authorised staff only");
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate1(" ", ctx.changeRequired() ? "Create a secure password before entering the faculty portal." : ctx.mode() === "faculty" ? "Sign in using your generated Employee ID." : "Secure sign-in for authorised staff only.", " ");
            i0.ɵɵadvance();
            i0.ɵɵconditional(!ctx.changeRequired() ? 26 : -1);
            i0.ɵɵadvance();
            i0.ɵɵconditional(ctx.error() ? 27 : -1);
            i0.ɵɵadvance();
            i0.ɵɵconditional(!ctx.changeRequired() ? 28 : 29);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("disabled", ctx.loading());
            i0.ɵɵadvance();
            i0.ɵɵconditional(ctx.loading() ? 31 : 32);
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("size", 17)("strokeWidth", 1.7);
        } }, dependencies: [ReactiveFormsModule, i1.ɵNgNoValidate, i1.DefaultValueAccessor, i1.CheckboxControlValueAccessor, i1.NgControlStatus, i1.NgControlStatusGroup, i1.FormGroupDirective, i1.FormControlName, RouterLink,
            LucideEye,
            LucideEyeOff,
            LucideLockKeyhole,
            LucideMail,
            LucideShieldCheck,
            LucideUserRound], encapsulation: 2, changeDetection: 0 });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AdminLoginComponent, [{
        type: Component,
        args: [{ selector: 'erp-admin-login', imports: [
                    ReactiveFormsModule,
                    RouterLink,
                    LucideEye,
                    LucideEyeOff,
                    LucideLockKeyhole,
                    LucideMail,
                    LucideShieldCheck,
                    LucideUserRound,
                ], changeDetection: ChangeDetectionStrategy.OnPush, template: "<main class=\"admin-login-page erp-auth-backdrop\">\n  <section class=\"admin-login-shell\" aria-labelledby=\"admin-login-title\">\n    <img\n      class=\"admin-login-shell__network\"\n      src=\"assets/images/auth/admin/admin-network.png\"\n      alt=\"\"\n      aria-hidden=\"true\"\n      decoding=\"async\"\n    />\n    <header class=\"admin-login-shell__desktop-brand\">\n      <a routerLink=\"/login\" aria-label=\"Graphic Era ERP admin login\">\n        <img\n          src=\"assets/images/brand/graphic-era-logo.png\"\n          alt=\"Graphic Era deemed to be University, Dehradun\"\n          width=\"438\"\n          height=\"137\"\n          fetchpriority=\"high\"\n        />\n      </a>\n    </header>\n\n    <section class=\"erp-mobile-auth-hero\" aria-label=\"Graphic Era University\">\n      <a class=\"erp-mobile-auth-hero__brand\" routerLink=\"/login\">\n        <img\n          src=\"assets/images/brand/graphic-era-logo.png\"\n          alt=\"Graphic Era deemed to be University, Dehradun\"\n          width=\"438\"\n          height=\"137\"\n          fetchpriority=\"high\"\n        />\n      </a>\n      <img\n        class=\"erp-mobile-auth-hero__art\"\n        src=\"assets/images/auth/admin/graphic-era-building-mobile.webp\"\n        alt=\"\"\n        aria-hidden=\"true\"\n        decoding=\"async\"\n      />\n    </section>\n\n    <img\n      class=\"admin-login-shell__building\"\n      src=\"assets/images/auth/admin/admin-building.png\"\n      alt=\"\"\n      aria-hidden=\"true\"\n      decoding=\"async\"\n    />\n\n    <div class=\"admin-login-shell__service-status\" role=\"status\">\n      <span aria-hidden=\"true\"></span>\n      ERP services operational\n    </div>\n\n    <section class=\"admin-auth-panel\">\n      <form\n        class=\"admin-auth-form\"\n        [formGroup]=\"changeRequired() ? changeForm : form\"\n        (ngSubmit)=\"changeRequired() ? changePassword() : submit()\"\n        novalidate\n      >\n        <div class=\"admin-auth-form__heading\">\n          <div class=\"admin-auth-form__shield\" aria-hidden=\"true\">\n            <svg lucideShieldCheck [size]=\"34\" [strokeWidth]=\"1.6\"></svg>\n          </div>\n\n          <div class=\"admin-auth-form__title-row\">\n            <h1 id=\"admin-login-title\">\n              {{\n                changeRequired()\n                  ? 'Create password'\n                  : mode() === 'faculty'\n                    ? 'Faculty access'\n                    : 'Admin access'\n              }}\n            </h1>\n            <span>{{ mode() === 'faculty' ? 'Faculty portal' : 'Authorised staff only' }}</span>\n          </div>\n          <p>\n            {{\n              changeRequired()\n                ? 'Create a secure password before entering the faculty portal.'\n                : mode() === 'faculty'\n                  ? 'Sign in using your generated Employee ID.'\n                  : 'Secure sign-in for authorised staff only.'\n            }}\n          </p>\n        </div>\n\n        @if (!changeRequired()) {\n          <div class=\"admin-auth-form__role-switch\" aria-label=\"Choose account type\">\n            <button type=\"button\" [class.is-active]=\"mode() === 'admin'\" (click)=\"setMode('admin')\">\n              Admin\n            </button>\n            <button\n              type=\"button\"\n              [class.is-active]=\"mode() === 'faculty'\"\n              (click)=\"setMode('faculty')\"\n            >\n              Faculty\n            </button>\n          </div>\n        }\n\n        @if (error()) {\n          <div class=\"admin-auth-form__alert\" role=\"alert\">{{ error() }}</div>\n        }\n\n        @if (!changeRequired()) {\n          <div class=\"admin-auth-form__field\">\n            <label for=\"admin-identifier\">{{\n              mode() === 'faculty' ? 'Employee ID' : 'Official email'\n            }}</label>\n            <div\n              class=\"admin-auth-form__control\"\n              [class.admin-auth-form__control--invalid]=\"\n                form.controls.identifier.touched && form.controls.identifier.invalid\n              \"\n            >\n              @if (mode() === 'faculty') {\n                <svg lucideUserRound [size]=\"21\" [strokeWidth]=\"1.7\" aria-hidden=\"true\"></svg>\n              } @else {\n                <svg lucideMail [size]=\"21\" [strokeWidth]=\"1.7\" aria-hidden=\"true\"></svg>\n              }\n              <input\n                id=\"admin-identifier\"\n                [type]=\"mode() === 'faculty' ? 'text' : 'email'\"\n                formControlName=\"identifier\"\n                autocomplete=\"username\"\n                [attr.inputmode]=\"mode() === 'faculty' ? null : 'email'\"\n                [placeholder]=\"mode() === 'faculty' ? 'Enter Employee ID' : 'admin@geu.ac.in'\"\n                aria-describedby=\"admin-identifier-error\"\n              />\n            </div>\n            @if (form.controls.identifier.touched && form.controls.identifier.invalid) {\n              <p id=\"admin-identifier-error\" class=\"admin-auth-form__error\">\n                {{\n                  mode() === 'faculty' ? 'Employee ID is required.' : 'Official email is required.'\n                }}\n              </p>\n            }\n          </div>\n\n          <div class=\"admin-auth-form__field\">\n            <label for=\"admin-password\">Password</label>\n            <div\n              class=\"admin-auth-form__control\"\n              [class.admin-auth-form__control--invalid]=\"\n                form.controls.password.touched && form.controls.password.invalid\n              \"\n            >\n              <svg lucideLockKeyhole [size]=\"21\" [strokeWidth]=\"1.7\" aria-hidden=\"true\"></svg>\n              <input\n                id=\"admin-password\"\n                [type]=\"showPassword() ? 'text' : 'password'\"\n                formControlName=\"password\"\n                autocomplete=\"current-password\"\n                placeholder=\"Enter your password\"\n                aria-describedby=\"admin-password-error\"\n              />\n              <button\n                class=\"admin-auth-form__password-toggle\"\n                type=\"button\"\n                (click)=\"togglePassword()\"\n                [attr.aria-label]=\"showPassword() ? 'Hide password' : 'Show password'\"\n              >\n                @if (showPassword()) {\n                  <svg lucideEyeOff [size]=\"21\" [strokeWidth]=\"1.7\" aria-hidden=\"true\"></svg>\n                } @else {\n                  <svg lucideEye [size]=\"21\" [strokeWidth]=\"1.7\" aria-hidden=\"true\"></svg>\n                }\n              </button>\n            </div>\n            @if (form.controls.password.touched && form.controls.password.invalid) {\n              <p id=\"admin-password-error\" class=\"admin-auth-form__error\">Password is required.</p>\n            }\n          </div>\n\n          <div class=\"admin-auth-form__options\">\n            <label class=\"admin-auth-form__remember\">\n              <input type=\"checkbox\" formControlName=\"rememberMe\" />\n              <span>Keep me signed in</span>\n            </label>\n            <a href=\"mailto:support@geu.ac.in?subject=ERP%20password%20reset\">Reset password</a>\n          </div>\n        } @else {\n          <div class=\"admin-auth-form__field\">\n            <label for=\"faculty-new-password\">New password</label>\n            <div class=\"admin-auth-form__control\">\n              <svg lucideLockKeyhole [size]=\"21\" [strokeWidth]=\"1.7\" aria-hidden=\"true\"></svg>\n              <input\n                id=\"faculty-new-password\"\n                [type]=\"showNewPassword() ? 'text' : 'password'\"\n                formControlName=\"password\"\n                autocomplete=\"new-password\"\n                placeholder=\"Create a strong password\"\n              />\n              <button\n                class=\"admin-auth-form__password-toggle\"\n                type=\"button\"\n                (click)=\"toggleNewPassword()\"\n                [attr.aria-label]=\"showNewPassword() ? 'Hide password' : 'Show password'\"\n              >\n                @if (showNewPassword()) {\n                  <svg lucideEyeOff [size]=\"21\" aria-hidden=\"true\"></svg>\n                } @else {\n                  <svg lucideEye [size]=\"21\" aria-hidden=\"true\"></svg>\n                }\n              </button>\n            </div>\n            @if (changeForm.controls.password.touched && changeForm.controls.password.invalid) {\n              <p class=\"admin-auth-form__error\">\n                Use at least 8 characters with uppercase, lowercase, and a symbol.\n              </p>\n            }\n          </div>\n          <div class=\"admin-auth-form__field\">\n            <label for=\"faculty-confirm-password\">Confirm password</label>\n            <div class=\"admin-auth-form__control\">\n              <svg lucideLockKeyhole [size]=\"21\" [strokeWidth]=\"1.7\" aria-hidden=\"true\"></svg>\n              <input\n                id=\"faculty-confirm-password\"\n                type=\"password\"\n                formControlName=\"confirmPassword\"\n                autocomplete=\"new-password\"\n                placeholder=\"Repeat your password\"\n              />\n            </div>\n          </div>\n        }\n\n        <button class=\"admin-auth-form__submit\" type=\"submit\" [disabled]=\"loading()\">\n          @if (loading()) {\n            <span class=\"admin-auth-form__spinner\" aria-hidden=\"true\"></span>\n            {{ changeRequired() ? 'Saving password\u2026' : 'Signing in\u2026' }}\n          } @else {\n            <svg lucideShieldCheck [size]=\"20\" [strokeWidth]=\"1.8\" aria-hidden=\"true\"></svg>\n            {{ changeRequired() ? 'Save and open dashboard' : 'Continue securely' }}\n          }\n        </button>\n\n        <div class=\"admin-auth-form__security\">\n          <svg lucideLockKeyhole [size]=\"17\" [strokeWidth]=\"1.7\" aria-hidden=\"true\"></svg>\n          <span>Protected session</span>\n          <i aria-hidden=\"true\"></i>\n          <span>Activity logged</span>\n        </div>\n      </form>\n    </section>\n    <div class=\"admin-login-shell__mobile-footer\" role=\"status\">\n      <span class=\"admin-login-shell__mobile-footer-dot\" aria-hidden=\"true\"></span>\n      <span>ERP services operational</span>\n      <i aria-hidden=\"true\"></i>\n      <a href=\"mailto:support@geu.ac.in\">Need help? Contact support</a>\n    </div>\n  </section>\n</main>\n" }]
    }], null, null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(AdminLoginComponent, { className: "AdminLoginComponent", filePath: "frontend/src/app/features/admin/auth/pages/admin-login/admin-login.component.ts", lineNumber: 32 }); })();
