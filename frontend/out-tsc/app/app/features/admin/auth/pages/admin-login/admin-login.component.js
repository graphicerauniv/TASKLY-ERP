import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { inject } from '@angular/core';
import { ApiService } from '../../../../../core/api.service';
import { AuthService } from '../../../../../core/auth.service';
import { LucideEye, LucideEyeOff, LucideLockKeyhole, LucideMail, LucideShieldCheck, } from '@lucide/angular';
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
function AdminLoginComponent_Conditional_26_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 19);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r0.error());
} }
function AdminLoginComponent_Conditional_33_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 25);
    i0.ɵɵtext(1, " Enter a valid official email. ");
    i0.ɵɵelementEnd();
} }
function AdminLoginComponent_Conditional_41_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(0, "svg", 30);
} if (rf & 2) {
    i0.ɵɵproperty("size", 21)("strokeWidth", 1.7);
} }
function AdminLoginComponent_Conditional_42_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(0, "svg", 31);
} if (rf & 2) {
    i0.ɵɵproperty("size", 21)("strokeWidth", 1.7);
} }
function AdminLoginComponent_Conditional_43_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 32);
    i0.ɵɵtext(1, "Password is required.");
    i0.ɵɵelementEnd();
} }
function AdminLoginComponent_Conditional_52_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "span", 42);
    i0.ɵɵtext(1, " Signing in\u2026 ");
} }
function AdminLoginComponent_Conditional_53_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(0, "svg", 43);
    i0.ɵɵtext(1, " Continue securely ");
} if (rf & 2) {
    i0.ɵɵproperty("size", 20)("strokeWidth", 1.8);
} }
export class AdminLoginComponent {
    api = inject(ApiService);
    auth = inject(AuthService);
    router = inject(Router);
    route = inject(ActivatedRoute);
    showPassword = signal(false, ...(ngDevMode ? [{ debugName: "showPassword" }] : /* istanbul ignore next */ []));
    loading = signal(false, ...(ngDevMode ? [{ debugName: "loading" }] : /* istanbul ignore next */ []));
    error = signal(this.route.snapshot.queryParamMap.get('reason') === 'session-expired'
        ? 'Your admin session expired. Sign in again to continue.'
        : '', ...(ngDevMode ? [{ debugName: "error" }] : /* istanbul ignore next */ []));
    form = new FormGroup({
        email: new FormControl('', {
            nonNullable: true,
            validators: [Validators.required, Validators.email],
        }),
        password: new FormControl('', {
            nonNullable: true,
            validators: [Validators.required],
        }),
        rememberMe: new FormControl(false, { nonNullable: true }),
    });
    togglePassword() {
        this.showPassword.update((visible) => !visible);
    }
    submit() {
        this.error.set('');
        this.form.markAllAsTouched();
        if (this.form.invalid || this.loading())
            return;
        this.loading.set(true);
        const { email, password } = this.form.getRawValue();
        this.api.login(email, password).subscribe({
            next: ({ token, admin }) => {
                this.auth.save(token, admin);
                void this.router.navigate(['/admin/dashboard']);
            },
            error: (error) => {
                this.error.set(error.error?.message || 'Unable to sign in.');
                this.loading.set(false);
            },
        });
    }
    static ɵfac = function AdminLoginComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || AdminLoginComponent)(); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: AdminLoginComponent, selectors: [["erp-admin-login"]], decls: 68, vars: 21, consts: [[1, "admin-login-page", "erp-auth-backdrop"], ["aria-labelledby", "admin-login-title", 1, "admin-login-shell"], ["src", "assets/images/auth/admin/admin-network.png", "alt", "", "aria-hidden", "true", "decoding", "async", 1, "admin-login-shell__network"], [1, "admin-login-shell__desktop-brand"], ["routerLink", "/login", "aria-label", "Graphic Era ERP admin login"], ["src", "assets/images/brand/graphic-era-logo.png", "alt", "Graphic Era deemed to be University, Dehradun", "width", "438", "height", "137", "fetchpriority", "high"], ["aria-label", "Graphic Era University", 1, "erp-mobile-auth-hero"], ["routerLink", "/login", 1, "erp-mobile-auth-hero__brand"], ["src", "assets/images/auth/admin/graphic-era-building-mobile.webp", "alt", "", "aria-hidden", "true", "decoding", "async", 1, "erp-mobile-auth-hero__art"], ["src", "assets/images/auth/admin/admin-building.png", "alt", "", "aria-hidden", "true", "decoding", "async", 1, "admin-login-shell__building"], ["role", "status", 1, "admin-login-shell__service-status"], ["aria-hidden", "true"], [1, "admin-auth-panel"], ["novalidate", "", 1, "admin-auth-form", 3, "ngSubmit", "formGroup"], [1, "admin-auth-form__heading"], ["aria-hidden", "true", 1, "admin-auth-form__shield"], ["lucideShieldCheck", "", 3, "size", "strokeWidth"], [1, "admin-auth-form__title-row"], ["id", "admin-login-title"], ["role", "alert", 1, "admin-auth-form__alert"], [1, "admin-auth-form__field"], ["for", "admin-email"], [1, "admin-auth-form__control"], ["lucideMail", "", "aria-hidden", "true", 3, "size", "strokeWidth"], ["id", "admin-email", "type", "email", "formControlName", "email", "autocomplete", "username", "inputmode", "email", "placeholder", "admin@geu.ac.in", "aria-describedby", "admin-email-error"], ["id", "admin-email-error", 1, "admin-auth-form__error"], ["for", "admin-password"], ["lucideLockKeyhole", "", "aria-hidden", "true", 3, "size", "strokeWidth"], ["id", "admin-password", "formControlName", "password", "autocomplete", "current-password", "placeholder", "Enter your password", "aria-describedby", "admin-password-error", 3, "type"], ["type", "button", 1, "admin-auth-form__password-toggle", 3, "click"], ["lucideEyeOff", "", "aria-hidden", "true", 3, "size", "strokeWidth"], ["lucideEye", "", "aria-hidden", "true", 3, "size", "strokeWidth"], ["id", "admin-password-error", 1, "admin-auth-form__error"], [1, "admin-auth-form__options"], [1, "admin-auth-form__remember"], ["type", "checkbox", "formControlName", "rememberMe"], ["href", "mailto:support@geu.ac.in?subject=Admin%20password%20reset"], ["type", "submit", 1, "admin-auth-form__submit", 3, "disabled"], [1, "admin-auth-form__security"], ["role", "status", 1, "admin-login-shell__mobile-footer"], ["aria-hidden", "true", 1, "admin-login-shell__mobile-footer-dot"], ["href", "mailto:support@geu.ac.in"], ["aria-hidden", "true", 1, "admin-auth-form__spinner"], ["lucideShieldCheck", "", "aria-hidden", "true", 3, "size", "strokeWidth"]], template: function AdminLoginComponent_Template(rf, ctx) { if (rf & 1) {
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
            i0.ɵɵlistener("ngSubmit", function AdminLoginComponent_Template_form_ngSubmit_15_listener() { return ctx.submit(); });
            i0.ɵɵelementStart(16, "div", 14)(17, "div", 15);
            i0.ɵɵnamespaceSVG();
            i0.ɵɵelement(18, "svg", 16);
            i0.ɵɵelementEnd();
            i0.ɵɵnamespaceHTML();
            i0.ɵɵelementStart(19, "div", 17)(20, "h1", 18);
            i0.ɵɵtext(21, "Admin access");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(22, "span");
            i0.ɵɵtext(23, "Authorised staff only");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(24, "p");
            i0.ɵɵtext(25, "Secure sign-in for authorised staff only.");
            i0.ɵɵelementEnd()();
            i0.ɵɵconditionalCreate(26, AdminLoginComponent_Conditional_26_Template, 2, 1, "div", 19);
            i0.ɵɵelementStart(27, "div", 20)(28, "label", 21);
            i0.ɵɵtext(29, "Official email");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(30, "div", 22);
            i0.ɵɵnamespaceSVG();
            i0.ɵɵelement(31, "svg", 23);
            i0.ɵɵnamespaceHTML();
            i0.ɵɵelement(32, "input", 24);
            i0.ɵɵelementEnd();
            i0.ɵɵconditionalCreate(33, AdminLoginComponent_Conditional_33_Template, 2, 0, "p", 25);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(34, "div", 20)(35, "label", 26);
            i0.ɵɵtext(36, "Password");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(37, "div", 22);
            i0.ɵɵnamespaceSVG();
            i0.ɵɵelement(38, "svg", 27);
            i0.ɵɵnamespaceHTML();
            i0.ɵɵelement(39, "input", 28);
            i0.ɵɵelementStart(40, "button", 29);
            i0.ɵɵlistener("click", function AdminLoginComponent_Template_button_click_40_listener() { return ctx.togglePassword(); });
            i0.ɵɵconditionalCreate(41, AdminLoginComponent_Conditional_41_Template, 1, 2, ":svg:svg", 30)(42, AdminLoginComponent_Conditional_42_Template, 1, 2, ":svg:svg", 31);
            i0.ɵɵelementEnd()();
            i0.ɵɵconditionalCreate(43, AdminLoginComponent_Conditional_43_Template, 2, 0, "p", 32);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(44, "div", 33)(45, "label", 34);
            i0.ɵɵelement(46, "input", 35);
            i0.ɵɵelementStart(47, "span");
            i0.ɵɵtext(48, "Keep me signed in");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(49, "a", 36);
            i0.ɵɵtext(50, "Reset password");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(51, "button", 37);
            i0.ɵɵconditionalCreate(52, AdminLoginComponent_Conditional_52_Template, 2, 0)(53, AdminLoginComponent_Conditional_53_Template, 2, 2);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(54, "div", 38);
            i0.ɵɵnamespaceSVG();
            i0.ɵɵelement(55, "svg", 27);
            i0.ɵɵnamespaceHTML();
            i0.ɵɵelementStart(56, "span");
            i0.ɵɵtext(57, "Protected session");
            i0.ɵɵelementEnd();
            i0.ɵɵelement(58, "i", 11);
            i0.ɵɵelementStart(59, "span");
            i0.ɵɵtext(60, "Activity logged");
            i0.ɵɵelementEnd()()()();
            i0.ɵɵelementStart(61, "div", 39);
            i0.ɵɵelement(62, "span", 40);
            i0.ɵɵelementStart(63, "span");
            i0.ɵɵtext(64, "ERP services operational");
            i0.ɵɵelementEnd();
            i0.ɵɵelement(65, "i", 11);
            i0.ɵɵelementStart(66, "a", 41);
            i0.ɵɵtext(67, "Need help? Contact support");
            i0.ɵɵelementEnd()()()();
        } if (rf & 2) {
            i0.ɵɵadvance(15);
            i0.ɵɵproperty("formGroup", ctx.form);
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("size", 34)("strokeWidth", 1.6);
            i0.ɵɵadvance(8);
            i0.ɵɵconditional(ctx.error() ? 26 : -1);
            i0.ɵɵadvance(4);
            i0.ɵɵclassProp("admin-auth-form__control--invalid", ctx.form.controls.email.touched && ctx.form.controls.email.invalid);
            i0.ɵɵadvance();
            i0.ɵɵproperty("size", 21)("strokeWidth", 1.7);
            i0.ɵɵadvance(2);
            i0.ɵɵconditional(ctx.form.controls.email.touched && ctx.form.controls.email.invalid ? 33 : -1);
            i0.ɵɵadvance(4);
            i0.ɵɵclassProp("admin-auth-form__control--invalid", ctx.form.controls.password.touched && ctx.form.controls.password.invalid);
            i0.ɵɵadvance();
            i0.ɵɵproperty("size", 21)("strokeWidth", 1.7);
            i0.ɵɵadvance();
            i0.ɵɵproperty("type", ctx.showPassword() ? "text" : "password");
            i0.ɵɵadvance();
            i0.ɵɵattribute("aria-label", ctx.showPassword() ? "Hide password" : "Show password");
            i0.ɵɵadvance();
            i0.ɵɵconditional(ctx.showPassword() ? 41 : 42);
            i0.ɵɵadvance(2);
            i0.ɵɵconditional(ctx.form.controls.password.touched && ctx.form.controls.password.invalid ? 43 : -1);
            i0.ɵɵadvance(8);
            i0.ɵɵproperty("disabled", ctx.loading());
            i0.ɵɵadvance();
            i0.ɵɵconditional(ctx.loading() ? 52 : 53);
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("size", 17)("strokeWidth", 1.7);
        } }, dependencies: [ReactiveFormsModule, i1.ɵNgNoValidate, i1.DefaultValueAccessor, i1.CheckboxControlValueAccessor, i1.NgControlStatus, i1.NgControlStatusGroup, i1.FormGroupDirective, i1.FormControlName, RouterLink,
            LucideEye,
            LucideEyeOff,
            LucideLockKeyhole,
            LucideMail,
            LucideShieldCheck], encapsulation: 2, changeDetection: 0 });
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
                ], changeDetection: ChangeDetectionStrategy.OnPush, template: "<main class=\"admin-login-page erp-auth-backdrop\">\n  <section class=\"admin-login-shell\" aria-labelledby=\"admin-login-title\">\n    <img\n      class=\"admin-login-shell__network\"\n      src=\"assets/images/auth/admin/admin-network.png\"\n      alt=\"\"\n      aria-hidden=\"true\"\n      decoding=\"async\"\n    />\n    <header class=\"admin-login-shell__desktop-brand\">\n      <a routerLink=\"/login\" aria-label=\"Graphic Era ERP admin login\">\n        <img\n          src=\"assets/images/brand/graphic-era-logo.png\"\n          alt=\"Graphic Era deemed to be University, Dehradun\"\n          width=\"438\"\n          height=\"137\"\n          fetchpriority=\"high\"\n        />\n      </a>\n    </header>\n\n    <section class=\"erp-mobile-auth-hero\" aria-label=\"Graphic Era University\">\n      <a class=\"erp-mobile-auth-hero__brand\" routerLink=\"/login\">\n        <img\n          src=\"assets/images/brand/graphic-era-logo.png\"\n          alt=\"Graphic Era deemed to be University, Dehradun\"\n          width=\"438\"\n          height=\"137\"\n          fetchpriority=\"high\"\n        />\n      </a>\n      <img\n        class=\"erp-mobile-auth-hero__art\"\n        src=\"assets/images/auth/admin/graphic-era-building-mobile.webp\"\n        alt=\"\"\n        aria-hidden=\"true\"\n        decoding=\"async\"\n      />\n    </section>\n\n    <img\n      class=\"admin-login-shell__building\"\n      src=\"assets/images/auth/admin/admin-building.png\"\n      alt=\"\"\n      aria-hidden=\"true\"\n      decoding=\"async\"\n    />\n\n    <div class=\"admin-login-shell__service-status\" role=\"status\">\n      <span aria-hidden=\"true\"></span>\n      ERP services operational\n    </div>\n\n    <section class=\"admin-auth-panel\">\n      <form class=\"admin-auth-form\" [formGroup]=\"form\" (ngSubmit)=\"submit()\" novalidate>\n        <div class=\"admin-auth-form__heading\">\n          <div class=\"admin-auth-form__shield\" aria-hidden=\"true\">\n            <svg lucideShieldCheck [size]=\"34\" [strokeWidth]=\"1.6\"></svg>\n          </div>\n\n          <div class=\"admin-auth-form__title-row\">\n            <h1 id=\"admin-login-title\">Admin access</h1>\n            <span>Authorised staff only</span>\n          </div>\n          <p>Secure sign-in for authorised staff only.</p>\n        </div>\n\n        @if (error()) {\n          <div class=\"admin-auth-form__alert\" role=\"alert\">{{ error() }}</div>\n        }\n\n        <div class=\"admin-auth-form__field\">\n          <label for=\"admin-email\">Official email</label>\n          <div\n            class=\"admin-auth-form__control\"\n            [class.admin-auth-form__control--invalid]=\"\n              form.controls.email.touched && form.controls.email.invalid\n            \"\n          >\n            <svg lucideMail [size]=\"21\" [strokeWidth]=\"1.7\" aria-hidden=\"true\"></svg>\n            <input\n              id=\"admin-email\"\n              type=\"email\"\n              formControlName=\"email\"\n              autocomplete=\"username\"\n              inputmode=\"email\"\n              placeholder=\"admin@geu.ac.in\"\n              aria-describedby=\"admin-email-error\"\n            />\n          </div>\n          @if (form.controls.email.touched && form.controls.email.invalid) {\n            <p id=\"admin-email-error\" class=\"admin-auth-form__error\">\n              Enter a valid official email.\n            </p>\n          }\n        </div>\n\n        <div class=\"admin-auth-form__field\">\n          <label for=\"admin-password\">Password</label>\n          <div\n            class=\"admin-auth-form__control\"\n            [class.admin-auth-form__control--invalid]=\"\n              form.controls.password.touched && form.controls.password.invalid\n            \"\n          >\n            <svg lucideLockKeyhole [size]=\"21\" [strokeWidth]=\"1.7\" aria-hidden=\"true\"></svg>\n            <input\n              id=\"admin-password\"\n              [type]=\"showPassword() ? 'text' : 'password'\"\n              formControlName=\"password\"\n              autocomplete=\"current-password\"\n              placeholder=\"Enter your password\"\n              aria-describedby=\"admin-password-error\"\n            />\n            <button\n              class=\"admin-auth-form__password-toggle\"\n              type=\"button\"\n              (click)=\"togglePassword()\"\n              [attr.aria-label]=\"showPassword() ? 'Hide password' : 'Show password'\"\n            >\n              @if (showPassword()) {\n                <svg lucideEyeOff [size]=\"21\" [strokeWidth]=\"1.7\" aria-hidden=\"true\"></svg>\n              } @else {\n                <svg lucideEye [size]=\"21\" [strokeWidth]=\"1.7\" aria-hidden=\"true\"></svg>\n              }\n            </button>\n          </div>\n          @if (form.controls.password.touched && form.controls.password.invalid) {\n            <p id=\"admin-password-error\" class=\"admin-auth-form__error\">Password is required.</p>\n          }\n        </div>\n\n        <div class=\"admin-auth-form__options\">\n          <label class=\"admin-auth-form__remember\">\n            <input type=\"checkbox\" formControlName=\"rememberMe\" />\n            <span>Keep me signed in</span>\n          </label>\n          <a href=\"mailto:support@geu.ac.in?subject=Admin%20password%20reset\">Reset password</a>\n        </div>\n\n        <button class=\"admin-auth-form__submit\" type=\"submit\" [disabled]=\"loading()\">\n          @if (loading()) {\n            <span class=\"admin-auth-form__spinner\" aria-hidden=\"true\"></span>\n            Signing in\u2026\n          } @else {\n            <svg lucideShieldCheck [size]=\"20\" [strokeWidth]=\"1.8\" aria-hidden=\"true\"></svg>\n            Continue securely\n          }\n        </button>\n\n        <div class=\"admin-auth-form__security\">\n          <svg lucideLockKeyhole [size]=\"17\" [strokeWidth]=\"1.7\" aria-hidden=\"true\"></svg>\n          <span>Protected session</span>\n          <i aria-hidden=\"true\"></i>\n          <span>Activity logged</span>\n        </div>\n      </form>\n    </section>\n    <div class=\"admin-login-shell__mobile-footer\" role=\"status\">\n      <span class=\"admin-login-shell__mobile-footer-dot\" aria-hidden=\"true\"></span>\n      <span>ERP services operational</span>\n      <i aria-hidden=\"true\"></i>\n      <a href=\"mailto:support@geu.ac.in\">Need help? Contact support</a>\n    </div>\n  </section>\n</main>\n" }]
    }], null, null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(AdminLoginComponent, { className: "AdminLoginComponent", filePath: "frontend/src/app/features/admin/auth/pages/admin-login/admin-login.component.ts", lineNumber: 29 }); })();
