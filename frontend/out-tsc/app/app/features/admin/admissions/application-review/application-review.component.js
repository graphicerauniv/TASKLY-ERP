import { CdkTrapFocus } from '@angular/cdk/a11y';
import { DOCUMENT } from '@angular/common';
import { ChangeDetectionStrategy, Component, DestroyRef, HostListener, computed, effect, inject, signal, } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { LucideArrowLeft, LucideBadgeCheck, LucideCircleAlert, LucideClipboardCheck, LucideFileCheck2, LucideFileText, LucideKeyRound, LucidePencil, LucideRefreshCw, LucideShieldCheck, LucideUserRound, LucideX, } from '@lucide/angular';
import { ApiService } from '../../../../core/api.service';
import { AdminPageComponent } from '../../../../shared/ui/admin-page/admin-page.component';
import { admissionDateLabel, admissionDisplayValue, admissionReference, admissionStatusLabel, } from '../admission-presentation';
import { admissionValidationIssues, hasAdmissionValue } from '../admission-form-validation';
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
const _c0 = a0 => ["/admin/admissions/applications", a0];
const _c1 = a0 => ["/admin/admissions", a0, "edit"];
const _c2 = () => ({ tab: "application" });
const _forTrack0 = ($index, $item) => $item.id;
function ApplicationReviewComponent_Conditional_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "a", 2);
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(1, "svg", 7);
    i0.ɵɵtext(2, " Edit application ");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    i0.ɵɵproperty("routerLink", i0.ɵɵpureFunction1(1, _c1, ctx._id));
} }
function ApplicationReviewComponent_Conditional_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "section", 4);
    i0.ɵɵelement(1, "span", 8);
    i0.ɵɵelementStart(2, "div", 9);
    i0.ɵɵelement(3, "span", 10)(4, "span", 10)(5, "span", 10)(6, "span", 10);
    i0.ɵɵelementEnd()();
} }
function ApplicationReviewComponent_Conditional_7_Template(rf, ctx) { if (rf & 1) {
    const _r1 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "section", 5)(1, "span", 11);
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(2, "svg", 12);
    i0.ɵɵelementEnd();
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(3, "h2");
    i0.ɵɵtext(4, "Application review unavailable");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "p");
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "button", 13);
    i0.ɵɵlistener("click", function ApplicationReviewComponent_Conditional_7_Template_button_click_7_listener() { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.load()); });
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(8, "svg", 14);
    i0.ɵɵtext(9, " Try again ");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(6);
    i0.ɵɵtextInterpolate(ctx_r1.error());
} }
function ApplicationReviewComponent_Conditional_8_Conditional_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 15);
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(1, "svg", 43);
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(2, "div")(3, "strong");
    i0.ɵɵtext(4, "Activation complete");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "span");
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(6);
    i0.ɵɵtextInterpolate(ctx_r1.resultMessage());
} }
function ApplicationReviewComponent_Conditional_8_Conditional_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 16);
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(1, "svg", 44);
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(2, "div")(3, "strong");
    i0.ɵɵtext(4, "Fee ledger pending");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "span");
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(6);
    i0.ɵɵtextInterpolate(ctx_r1.feeGenerationWarning());
} }
function ApplicationReviewComponent_Conditional_8_Conditional_25_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 27);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate2(" ", ctx_r1.blockerCount(), " blocker", ctx_r1.blockerCount() === 1 ? "" : "s", " ");
} }
function ApplicationReviewComponent_Conditional_8_Conditional_26_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 20);
    i0.ɵɵtext(1, "Ready for decision");
    i0.ɵɵelementEnd();
} }
function ApplicationReviewComponent_Conditional_8_For_29_Conditional_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(0, "svg", 46);
} }
function ApplicationReviewComponent_Conditional_8_For_29_Conditional_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(0, "svg", 47);
} }
function ApplicationReviewComponent_Conditional_8_For_29_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "li")(1, "span", 45);
    i0.ɵɵconditionalCreate(2, ApplicationReviewComponent_Conditional_8_For_29_Conditional_2_Template, 1, 0, ":svg:svg", 46)(3, ApplicationReviewComponent_Conditional_8_For_29_Conditional_3_Template, 1, 0, ":svg:svg", 47);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "div")(5, "strong");
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "p");
    i0.ɵɵtext(8);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(9, "span", 48);
    i0.ɵɵtext(10);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const check_r3 = ctx.$implicit;
    i0.ɵɵattribute("data-state", check_r3.state);
    i0.ɵɵadvance(2);
    i0.ɵɵconditional(check_r3.state === "pass" ? 2 : 3);
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(check_r3.label);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(check_r3.detail);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", check_r3.state === "pass" ? "Passed" : check_r3.state === "blocker" ? "Blocker" : "Review", " ");
} }
function ApplicationReviewComponent_Conditional_8_Conditional_30_For_11_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "li");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const gap_r4 = ctx.$implicit;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(gap_r4);
} }
function ApplicationReviewComponent_Conditional_8_Conditional_30_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "section", 29)(1, "header")(2, "span", 49);
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(3, "svg", 50);
    i0.ɵɵelementEnd();
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(4, "div")(5, "h2", 51);
    i0.ɵɵtext(6, "Missing required evidence");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "p");
    i0.ɵɵtext(8, "Resolve these responses before an approval decision is available.");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(9, "ul", 52);
    i0.ɵɵrepeaterCreate(10, ApplicationReviewComponent_Conditional_8_Conditional_30_For_11_Template, 2, 1, "li", null, i0.ɵɵrepeaterTrackByIdentity);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(10);
    i0.ɵɵrepeater(ctx_r1.missingRequired());
} }
function ApplicationReviewComponent_Conditional_8_Conditional_40_For_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "li")(1, "span", 53);
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(2, "svg", 54);
    i0.ɵɵelementEnd();
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(3, "div")(4, "strong");
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "span");
    i0.ɵɵtext(7);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(8, "span", 20);
    i0.ɵɵtext(9);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const document_r5 = ctx.$implicit;
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(document_r5.label);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(document_r5.value);
    i0.ɵɵadvance();
    i0.ɵɵclassProp("erp-status--warning", !document_r5.provided);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", document_r5.provided ? "Provided" : "Missing", " ");
} }
function ApplicationReviewComponent_Conditional_8_Conditional_40_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "ul", 33);
    i0.ɵɵrepeaterCreate(1, ApplicationReviewComponent_Conditional_8_Conditional_40_For_2_Template, 10, 5, "li", null, _forTrack0);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵrepeater(ctx_r1.documents());
} }
function ApplicationReviewComponent_Conditional_8_Conditional_41_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 34);
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(1, "svg", 55);
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(2, "p");
    i0.ɵɵtext(3, "No document fields are configured in this form snapshot.");
    i0.ɵɵelementEnd()();
} }
function ApplicationReviewComponent_Conditional_8_Conditional_52_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 39);
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(1, "svg", 56);
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(2, "div")(3, "strong");
    i0.ɵɵtext(4, "Approved and activated");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "span");
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const application_r6 = i0.ɵɵnextContext();
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(6);
    i0.ɵɵtextInterpolate(ctx_r1.dateLabel(application_r6.approvedAt));
} }
function ApplicationReviewComponent_Conditional_8_Conditional_53_Conditional_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 59);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r1.submissionError());
} }
function ApplicationReviewComponent_Conditional_8_Conditional_53_Conditional_11_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "a", 62);
    i0.ɵɵtext(1, " Return to application editor ");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const application_r6 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("routerLink", i0.ɵɵpureFunction1(1, _c1, application_r6._id));
} }
function ApplicationReviewComponent_Conditional_8_Conditional_53_Template(rf, ctx) { if (rf & 1) {
    const _r7 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 57);
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(1, "svg", 58);
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(2, "div")(3, "strong");
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "span");
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd()()();
    i0.ɵɵconditionalCreate(7, ApplicationReviewComponent_Conditional_8_Conditional_53_Conditional_7_Template, 2, 1, "p", 59);
    i0.ɵɵelementStart(8, "button", 60);
    i0.ɵɵlistener("click", function ApplicationReviewComponent_Conditional_8_Conditional_53_Template_button_click_8_listener() { i0.ɵɵrestoreView(_r7); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.submitForReview()); });
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(9, "svg", 61);
    i0.ɵɵtext(10);
    i0.ɵɵelementEnd();
    i0.ɵɵconditionalCreate(11, ApplicationReviewComponent_Conditional_8_Conditional_53_Conditional_11_Template, 2, 3, "a", 62);
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵclassProp("application-review__decision-state--complete", ctx_r1.canSubmit());
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(ctx_r1.canSubmit() ? "Ready to submit" : "Application incomplete");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", ctx_r1.canSubmit() ? "All blocking checks pass. Submit the application to begin administrative review." : "Resolve the blocking checks before submitting this application.", " ");
    i0.ɵɵadvance();
    i0.ɵɵconditional(ctx_r1.submissionError() ? 7 : -1);
    i0.ɵɵadvance();
    i0.ɵɵproperty("disabled", !ctx_r1.canSubmit() || ctx_r1.submissionSaving());
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", ctx_r1.submissionSaving() ? "Submitting\u2026" : "Submit for review", " ");
    i0.ɵɵadvance();
    i0.ɵɵconditional(!ctx_r1.canSubmit() ? 11 : -1);
} }
function ApplicationReviewComponent_Conditional_8_Conditional_54_Conditional_14_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 65);
    i0.ɵɵtext(1, " Resolve all blockers before activation becomes available. ");
    i0.ɵɵelementEnd();
} }
function ApplicationReviewComponent_Conditional_8_Conditional_54_Template(rf, ctx) { if (rf & 1) {
    const _r8 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 63)(1, "div")(2, "span");
    i0.ɵɵtext(3, "Blocking checks");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "strong");
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(6, "div")(7, "span");
    i0.ɵɵtext(8, "Document fields");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(9, "strong");
    i0.ɵɵtext(10);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(11, "button", 60);
    i0.ɵɵlistener("click", function ApplicationReviewComponent_Conditional_8_Conditional_54_Template_button_click_11_listener($event) { i0.ɵɵrestoreView(_r8); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.openActivation($event)); });
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(12, "svg", 64);
    i0.ɵɵtext(13, " Approve and activate ");
    i0.ɵɵelementEnd();
    i0.ɵɵconditionalCreate(14, ApplicationReviewComponent_Conditional_8_Conditional_54_Conditional_14_Template, 2, 0, "p", 65);
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(ctx_r1.blockerCount());
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(ctx_r1.documents().length);
    i0.ɵɵadvance();
    i0.ɵɵproperty("disabled", !ctx_r1.canActivate());
    i0.ɵɵadvance(3);
    i0.ɵɵconditional(!ctx_r1.canActivate() ? 14 : -1);
} }
function ApplicationReviewComponent_Conditional_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵconditionalCreate(0, ApplicationReviewComponent_Conditional_8_Conditional_0_Template, 7, 1, "div", 15);
    i0.ɵɵconditionalCreate(1, ApplicationReviewComponent_Conditional_8_Conditional_1_Template, 7, 1, "div", 16);
    i0.ɵɵelementStart(2, "header", 17)(3, "span", 18);
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(4, "svg", 19);
    i0.ɵɵelementEnd();
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(5, "div")(6, "span");
    i0.ɵɵtext(7);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "h2");
    i0.ɵɵtext(9);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(10, "p");
    i0.ɵɵtext(11);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(12, "span", 20);
    i0.ɵɵtext(13);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(14, "div", 21)(15, "main", 22)(16, "section", 23)(17, "header")(18, "span", 24);
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(19, "svg", 25);
    i0.ɵɵelementEnd();
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(20, "div")(21, "h2", 26);
    i0.ɵɵtext(22, "Review readiness");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(23, "p");
    i0.ɵɵtext(24, "System-verifiable checks from the saved application and form snapshot.");
    i0.ɵɵelementEnd()();
    i0.ɵɵconditionalCreate(25, ApplicationReviewComponent_Conditional_8_Conditional_25_Template, 2, 2, "span", 27)(26, ApplicationReviewComponent_Conditional_8_Conditional_26_Template, 2, 0, "span", 20);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(27, "ul", 28);
    i0.ɵɵrepeaterCreate(28, ApplicationReviewComponent_Conditional_8_For_29_Template, 11, 5, "li", null, _forTrack0);
    i0.ɵɵelementEnd()();
    i0.ɵɵconditionalCreate(30, ApplicationReviewComponent_Conditional_8_Conditional_30_Template, 12, 0, "section", 29);
    i0.ɵɵelementStart(31, "section", 30)(32, "header")(33, "span", 24);
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(34, "svg", 31);
    i0.ɵɵelementEnd();
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(35, "div")(36, "h2", 32);
    i0.ɵɵtext(37, "Document evidence");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(38, "p");
    i0.ɵɵtext(39, "Configured uploads found in this application snapshot.");
    i0.ɵɵelementEnd()()();
    i0.ɵɵconditionalCreate(40, ApplicationReviewComponent_Conditional_8_Conditional_40_Template, 3, 0, "ul", 33)(41, ApplicationReviewComponent_Conditional_8_Conditional_41_Template, 4, 0, "div", 34);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(42, "aside", 35)(43, "section", 36)(44, "header")(45, "span", 24);
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(46, "svg", 37);
    i0.ɵɵelementEnd();
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(47, "div")(48, "h2", 38);
    i0.ɵɵtext(49, "Decision");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(50, "p");
    i0.ɵɵtext(51, "Complete review before creating student access.");
    i0.ɵɵelementEnd()()();
    i0.ɵɵconditionalCreate(52, ApplicationReviewComponent_Conditional_8_Conditional_52_Template, 7, 1, "div", 39)(53, ApplicationReviewComponent_Conditional_8_Conditional_53_Template, 12, 8)(54, ApplicationReviewComponent_Conditional_8_Conditional_54_Template, 15, 4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(55, "section", 40)(56, "h2", 41);
    i0.ɵɵtext(57, "Application context");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(58, "dl")(59, "div")(60, "dt");
    i0.ɵɵtext(61, "Created");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(62, "dd");
    i0.ɵɵtext(63);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(64, "div")(65, "dt");
    i0.ɵɵtext(66, "Submitted");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(67, "dd");
    i0.ɵɵtext(68);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(69, "div")(70, "dt");
    i0.ɵɵtext(71, "Form version");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(72, "dd");
    i0.ɵɵtext(73);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(74, "div")(75, "dt");
    i0.ɵɵtext(76, "Current fee mode");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(77, "dd");
    i0.ɵɵtext(78);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(79, "a", 42);
    i0.ɵɵtext(80, " Open complete application evidence ");
    i0.ɵɵelementEnd()()()();
} if (rf & 2) {
    const application_r6 = ctx;
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵconditional(ctx_r1.resultMessage() ? 0 : -1);
    i0.ɵɵadvance();
    i0.ɵɵconditional(ctx_r1.feeGenerationWarning() ? 1 : -1);
    i0.ɵɵadvance(6);
    i0.ɵɵtextInterpolate(ctx_r1.reference(application_r6));
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(application_r6.studentName || "Unnamed application");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate2(" ", application_r6.courseName || "Programme not selected", " \u00B7 ", application_r6.academicSession || "Session not selected", " ");
    i0.ɵɵadvance();
    i0.ɵɵclassProp("erp-status--warning", application_r6.status === "pending_approval" || application_r6.status === "submitted");
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r1.statusLabel(application_r6), " ");
    i0.ɵɵadvance(12);
    i0.ɵɵconditional(ctx_r1.blockerCount() ? 25 : 26);
    i0.ɵɵadvance(3);
    i0.ɵɵrepeater(ctx_r1.reviewChecks());
    i0.ɵɵadvance(2);
    i0.ɵɵconditional(ctx_r1.missingRequired().length ? 30 : -1);
    i0.ɵɵadvance(10);
    i0.ɵɵconditional(ctx_r1.documents().length ? 40 : 41);
    i0.ɵɵadvance(12);
    i0.ɵɵconditional(application_r6.status === "approved" ? 52 : application_r6.status === "draft" ? 53 : 54);
    i0.ɵɵadvance(11);
    i0.ɵɵtextInterpolate(ctx_r1.dateLabel(application_r6.createdAt));
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(ctx_r1.dateLabel(application_r6.submittedAt));
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate1(" ", application_r6.formVersion || application_r6.formSnapshot.version || "Not recorded", " ");
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(application_r6.feeFrequency === "semester" ? "Semester-wise" : "Full year");
    i0.ɵɵadvance();
    i0.ɵɵproperty("routerLink", i0.ɵɵpureFunction1(19, _c0, application_r6._id))("queryParams", i0.ɵɵpureFunction0(21, _c2));
} }
function ApplicationReviewComponent_Conditional_9_Conditional_16_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 59);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r1.activationError());
} }
function ApplicationReviewComponent_Conditional_9_For_42_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 80);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const year_r10 = ctx.$implicit;
    i0.ɵɵproperty("ngValue", year_r10);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1("Year ", year_r10);
} }
function ApplicationReviewComponent_Conditional_9_Conditional_43_For_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 80);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const semester_r12 = ctx.$implicit;
    i0.ɵɵproperty("ngValue", semester_r12);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1("Semester ", semester_r12);
} }
function ApplicationReviewComponent_Conditional_9_Conditional_43_Template(rf, ctx) { if (rf & 1) {
    const _r11 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "label")(1, "span");
    i0.ɵɵtext(2, "Current semester");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "select", 79);
    i0.ɵɵtwoWayListener("ngModelChange", function ApplicationReviewComponent_Conditional_9_Conditional_43_Template_select_ngModelChange_3_listener($event) { i0.ɵɵrestoreView(_r11); const ctx_r1 = i0.ɵɵnextContext(2); i0.ɵɵtwoWayBindingSet(ctx_r1.currentSemester, $event) || (ctx_r1.currentSemester = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵrepeaterCreate(4, ApplicationReviewComponent_Conditional_9_Conditional_43_For_5_Template, 2, 2, "option", 80, i0.ɵɵrepeaterTrackByIdentity);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(3);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r1.currentSemester);
    i0.ɵɵadvance();
    i0.ɵɵrepeater(ctx_r1.semesterOptions);
} }
function ApplicationReviewComponent_Conditional_9_Conditional_68_Template(rf, ctx) { if (rf & 1) {
    const _r13 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 75)(1, "label")(2, "span");
    i0.ɵɵtext(3, "Temporary password");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "input", 89);
    i0.ɵɵtwoWayListener("ngModelChange", function ApplicationReviewComponent_Conditional_9_Conditional_68_Template_input_ngModelChange_4_listener($event) { i0.ɵɵrestoreView(_r13); const ctx_r1 = i0.ɵɵnextContext(2); i0.ɵɵtwoWayBindingSet(ctx_r1.manualPassword, $event) || (ctx_r1.manualPassword = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(5, "label")(6, "span");
    i0.ɵɵtext(7, "Confirm password");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "input", 89);
    i0.ɵɵtwoWayListener("ngModelChange", function ApplicationReviewComponent_Conditional_9_Conditional_68_Template_input_ngModelChange_8_listener($event) { i0.ɵɵrestoreView(_r13); const ctx_r1 = i0.ɵɵnextContext(2); i0.ɵɵtwoWayBindingSet(ctx_r1.confirmPassword, $event) || (ctx_r1.confirmPassword = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(4);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r1.manualPassword);
    i0.ɵɵadvance(4);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r1.confirmPassword);
} }
function ApplicationReviewComponent_Conditional_9_Template(rf, ctx) { if (rf & 1) {
    const _r9 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 6)(1, "button", 66);
    i0.ɵɵlistener("click", function ApplicationReviewComponent_Conditional_9_Template_button_click_1_listener() { i0.ɵɵrestoreView(_r9); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.closeActivation()); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(2, "section", 67)(3, "header", 68)(4, "span", 69);
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(5, "svg", 70);
    i0.ɵɵelementEnd();
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(6, "div")(7, "small");
    i0.ɵɵtext(8, "Final review outcome");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(9, "h2", 71);
    i0.ɵɵtext(10, "Approve and activate student");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(11, "p");
    i0.ɵɵtext(12);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(13, "button", 72);
    i0.ɵɵlistener("click", function ApplicationReviewComponent_Conditional_9_Template_button_click_13_listener() { i0.ɵɵrestoreView(_r9); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.closeActivation()); });
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(14, "svg", 73);
    i0.ɵɵelementEnd()();
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(15, "div", 74);
    i0.ɵɵconditionalCreate(16, ApplicationReviewComponent_Conditional_9_Conditional_16_Template, 2, 1, "p", 59);
    i0.ɵɵelementStart(17, "section")(18, "header")(19, "span");
    i0.ɵɵtext(20, "1");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(21, "div")(22, "h3");
    i0.ɵɵtext(23, "Academic placement");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(24, "p");
    i0.ɵɵtext(25, "Set the student\u2019s current progression point.");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(26, "div", 75)(27, "label")(28, "span");
    i0.ɵɵtext(29, "Fee calculation mode");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(30, "select", 76);
    i0.ɵɵtwoWayListener("ngModelChange", function ApplicationReviewComponent_Conditional_9_Template_select_ngModelChange_30_listener($event) { i0.ɵɵrestoreView(_r9); const ctx_r1 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r1.feeFrequency, $event) || (ctx_r1.feeFrequency = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementStart(31, "option", 77);
    i0.ɵɵtext(32, "Full academic year");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(33, "option", 78);
    i0.ɵɵtext(34, "Semester-wise");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(35, "small");
    i0.ɵɵtext(36);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(37, "label")(38, "span");
    i0.ɵɵtext(39, "Current academic year");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(40, "select", 79);
    i0.ɵɵtwoWayListener("ngModelChange", function ApplicationReviewComponent_Conditional_9_Template_select_ngModelChange_40_listener($event) { i0.ɵɵrestoreView(_r9); const ctx_r1 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r1.currentAcademicYear, $event) || (ctx_r1.currentAcademicYear = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵrepeaterCreate(41, ApplicationReviewComponent_Conditional_9_For_42_Template, 2, 2, "option", 80, i0.ɵɵrepeaterTrackByIdentity);
    i0.ɵɵelementEnd()();
    i0.ɵɵconditionalCreate(43, ApplicationReviewComponent_Conditional_9_Conditional_43_Template, 6, 1, "label");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(44, "section")(45, "header")(46, "span");
    i0.ɵɵtext(47, "2");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(48, "div")(49, "h3");
    i0.ɵɵtext(50, "Student access");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(51, "p");
    i0.ɵɵtext(52, "Choose the temporary credential policy used by the existing account contract.");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(53, "div", 81)(54, "label")(55, "input", 82);
    i0.ɵɵtwoWayListener("ngModelChange", function ApplicationReviewComponent_Conditional_9_Template_input_ngModelChange_55_listener($event) { i0.ɵɵrestoreView(_r9); const ctx_r1 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r1.passwordMode, $event) || (ctx_r1.passwordMode = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(56, "span")(57, "strong");
    i0.ɵɵtext(58, "Use generated Student ID");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(59, "small");
    i0.ɵɵtext(60, "The student changes it after first sign-in.");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(61, "label")(62, "input", 83);
    i0.ɵɵtwoWayListener("ngModelChange", function ApplicationReviewComponent_Conditional_9_Template_input_ngModelChange_62_listener($event) { i0.ɵɵrestoreView(_r9); const ctx_r1 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r1.passwordMode, $event) || (ctx_r1.passwordMode = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(63, "span")(64, "strong");
    i0.ɵɵtext(65, "Set a temporary password");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(66, "small");
    i0.ɵɵtext(67, "Minimum eight characters; confirmation required.");
    i0.ɵɵelementEnd()()()();
    i0.ɵɵconditionalCreate(68, ApplicationReviewComponent_Conditional_9_Conditional_68_Template, 9, 2, "div", 75);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(69, "div", 84);
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(70, "svg", 85);
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(71, "p");
    i0.ɵɵtext(72, " Approval creates or activates the student login using the existing backend workflow. Review the academic placement before continuing. ");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(73, "footer", 86)(74, "button", 87);
    i0.ɵɵlistener("click", function ApplicationReviewComponent_Conditional_9_Template_button_click_74_listener() { i0.ɵɵrestoreView(_r9); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.closeActivation()); });
    i0.ɵɵtext(75, " Cancel ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(76, "button", 88);
    i0.ɵɵlistener("click", function ApplicationReviewComponent_Conditional_9_Template_button_click_76_listener() { i0.ɵɵrestoreView(_r9); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.activate()); });
    i0.ɵɵtext(77);
    i0.ɵɵelementEnd()()()();
} if (rf & 2) {
    const application_r14 = ctx;
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("cdkTrapFocusAutoCapture", true);
    i0.ɵɵadvance(10);
    i0.ɵɵtextInterpolate(application_r14.studentName || ctx_r1.reference(application_r14));
    i0.ɵɵadvance(4);
    i0.ɵɵconditional(ctx_r1.activationError() ? 16 : -1);
    i0.ɵɵadvance(14);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r1.feeFrequency);
    i0.ɵɵproperty("disabled", !!application_r14.feeFrequencyChoice);
    i0.ɵɵadvance(6);
    i0.ɵɵtextInterpolate(application_r14.feeFrequencyChoice ? "Selected in the admission form." : "No applicant selection was saved; verify before approval.");
    i0.ɵɵadvance(4);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r1.currentAcademicYear);
    i0.ɵɵadvance();
    i0.ɵɵrepeater(ctx_r1.academicYearOptions);
    i0.ɵɵadvance(2);
    i0.ɵɵconditional(ctx_r1.feeFrequency === "semester" ? 43 : -1);
    i0.ɵɵadvance(12);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r1.passwordMode);
    i0.ɵɵadvance(7);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r1.passwordMode);
    i0.ɵɵadvance(6);
    i0.ɵɵconditional(ctx_r1.passwordMode === "manual" ? 68 : -1);
    i0.ɵɵadvance(6);
    i0.ɵɵproperty("disabled", ctx_r1.activationSaving());
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("disabled", ctx_r1.activationSaving());
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r1.activationSaving() ? "Activating\u2026" : "Confirm approval and activation", " ");
} }
export class ApplicationReviewComponent {
    api = inject(ApiService);
    route = inject(ActivatedRoute);
    destroyRef = inject(DestroyRef);
    document = inject(DOCUMENT);
    activationReturnFocus;
    admissionId = signal('', ...(ngDevMode ? [{ debugName: "admissionId" }] : /* istanbul ignore next */ []));
    item = signal(null, ...(ngDevMode ? [{ debugName: "item" }] : /* istanbul ignore next */ []));
    masterLabels = signal({}, ...(ngDevMode ? [{ debugName: "masterLabels" }] : /* istanbul ignore next */ []));
    loading = signal(true, ...(ngDevMode ? [{ debugName: "loading" }] : /* istanbul ignore next */ []));
    error = signal('', ...(ngDevMode ? [{ debugName: "error" }] : /* istanbul ignore next */ []));
    resultMessage = signal('', ...(ngDevMode ? [{ debugName: "resultMessage" }] : /* istanbul ignore next */ []));
    feeGenerationWarning = signal('', ...(ngDevMode ? [{ debugName: "feeGenerationWarning" }] : /* istanbul ignore next */ []));
    activationOpen = signal(false, ...(ngDevMode ? [{ debugName: "activationOpen" }] : /* istanbul ignore next */ []));
    activationSaving = signal(false, ...(ngDevMode ? [{ debugName: "activationSaving" }] : /* istanbul ignore next */ []));
    activationError = signal('', ...(ngDevMode ? [{ debugName: "activationError" }] : /* istanbul ignore next */ []));
    submissionSaving = signal(false, ...(ngDevMode ? [{ debugName: "submissionSaving" }] : /* istanbul ignore next */ []));
    submissionError = signal('', ...(ngDevMode ? [{ debugName: "submissionError" }] : /* istanbul ignore next */ []));
    missingRequired = computed(() => admissionValidationIssues(this.item()).map((issue) => issue.path), ...(ngDevMode ? [{ debugName: "missingRequired" }] : /* istanbul ignore next */ []));
    documents = computed(() => this.documentEvidence(this.item()), ...(ngDevMode ? [{ debugName: "documents" }] : /* istanbul ignore next */ []));
    reviewChecks = computed(() => {
        const item = this.item();
        if (!item)
            return [];
        const identityReady = Boolean(item.studentName && item.courseName && item.academicSession);
        const requiredGaps = this.missingRequired();
        const documents = this.documents();
        const suppliedDocuments = documents.filter((document) => document.provided).length;
        const submitted = item.status === 'pending_approval' || item.status === 'submitted';
        return [
            {
                id: 'workflow',
                label: 'Workflow stage',
                detail: submitted
                    ? 'The application is submitted and ready for an administrative decision.'
                    : item.status === 'approved'
                        ? 'This application has already been approved.'
                        : 'The application must be submitted before it can be activated.',
                state: submitted || item.status === 'approved'
                    ? 'pass'
                    : item.status === 'draft'
                        ? 'attention'
                        : 'blocker',
            },
            {
                id: 'identity',
                label: 'Identity and programme',
                detail: identityReady
                    ? 'Applicant name, programme, and academic session are available.'
                    : 'Applicant name, programme, or academic session is missing.',
                state: identityReady ? 'pass' : 'blocker',
            },
            {
                id: 'required',
                label: 'Required responses',
                detail: requiredGaps.length
                    ? `${requiredGaps.length} required response${requiredGaps.length === 1 ? ' is' : 's are'} missing.`
                    : 'All required responses in the saved form snapshot are present.',
                state: requiredGaps.length ? 'blocker' : 'pass',
            },
            {
                id: 'documents',
                label: 'Document evidence',
                detail: documents.length
                    ? `${suppliedDocuments} of ${documents.length} configured document field${documents.length === 1 ? '' : 's'} supplied.`
                    : 'No document fields are configured in this form snapshot.',
                state: documents.length && suppliedDocuments < documents.length ? 'attention' : 'pass',
            },
        ];
    }, ...(ngDevMode ? [{ debugName: "reviewChecks" }] : /* istanbul ignore next */ []));
    blockerCount = computed(() => this.reviewChecks().filter((check) => check.state === 'blocker').length, ...(ngDevMode ? [{ debugName: "blockerCount" }] : /* istanbul ignore next */ []));
    canActivate = computed(() => {
        const item = this.item();
        return Boolean(item &&
            (item.status === 'pending_approval' || item.status === 'submitted') &&
            this.blockerCount() === 0);
    }, ...(ngDevMode ? [{ debugName: "canActivate" }] : /* istanbul ignore next */ []));
    canSubmit = computed(() => {
        const item = this.item();
        return Boolean(item &&
            item.status === 'draft' &&
            this.missingRequired().length === 0 &&
            item.studentName &&
            item.courseName &&
            item.academicSession);
    }, ...(ngDevMode ? [{ debugName: "canSubmit" }] : /* istanbul ignore next */ []));
    passwordMode = 'student-id';
    manualPassword = '';
    confirmPassword = '';
    currentAcademicYear = 1;
    currentSemester = 1;
    feeFrequency = 'year';
    academicYearOptions = Array.from({ length: 10 }, (_, index) => index + 1);
    semesterOptions = Array.from({ length: 20 }, (_, index) => index + 1);
    constructor() {
        this.route.paramMap.pipe(takeUntilDestroyed(this.destroyRef)).subscribe((params) => {
            const id = params.get('admissionId') || '';
            if (!id || id === this.admissionId())
                return;
            this.admissionId.set(id);
            this.load();
        });
        effect((onCleanup) => {
            if (!this.activationOpen())
                return;
            const previousOverflow = this.document.body.style.overflow;
            this.document.body.style.overflow = 'hidden';
            onCleanup(() => {
                this.document.body.style.overflow = previousOverflow;
            });
        });
    }
    load() {
        if (!this.admissionId())
            return;
        this.loading.set(true);
        this.error.set('');
        this.api
            .admission(this.admissionId())
            .pipe(takeUntilDestroyed(this.destroyRef))
            .subscribe({
            next: ({ item, masterLabels }) => {
                this.item.set(item);
                this.masterLabels.set(masterLabels);
                this.loading.set(false);
            },
            error: (error) => {
                this.error.set(error.error?.message || 'This application could not be loaded for review.');
                this.loading.set(false);
            },
        });
    }
    openActivation(event) {
        const item = this.item();
        if (!item || !this.canActivate())
            return;
        if (event.currentTarget instanceof HTMLElement)
            this.activationReturnFocus = event.currentTarget;
        this.passwordMode = 'student-id';
        this.manualPassword = '';
        this.confirmPassword = '';
        this.currentAcademicYear = Number(item.currentAcademicYear || 1);
        this.currentSemester = Number(item.currentSemester || this.currentAcademicYear * 2 - 1);
        this.feeFrequency = item.feeFrequencyChoice || item.feeFrequency || 'year';
        this.activationError.set('');
        this.activationOpen.set(true);
    }
    closeActivation(restoreFocus = true) {
        if (this.activationSaving())
            return;
        this.activationOpen.set(false);
        this.activationError.set('');
        if (restoreFocus)
            setTimeout(() => this.activationReturnFocus?.focus());
    }
    activate() {
        const item = this.item();
        if (!item || !this.canActivate() || this.activationSaving())
            return;
        this.activationError.set('');
        if (this.passwordMode === 'manual' &&
            (this.manualPassword.length < 8 || this.manualPassword !== this.confirmPassword)) {
            this.activationError.set('Manual passwords must match and contain at least 8 characters.');
            return;
        }
        this.activationSaving.set(true);
        this.api
            .approveAdmission(item._id, {
            passwordMode: this.passwordMode,
            password: this.passwordMode === 'manual' ? this.manualPassword : undefined,
            currentAcademicYear: this.feeFrequency === 'semester'
                ? this.yearForSemester(this.currentSemester)
                : this.currentAcademicYear,
            currentSemester: this.currentSemester,
            feeFrequency: this.feeFrequency,
        })
            .pipe(takeUntilDestroyed(this.destroyRef))
            .subscribe({
            next: ({ item: updated, feeGeneration }) => {
                this.item.set({ ...item, ...updated });
                this.activationSaving.set(false);
                this.activationOpen.set(false);
                const student = item.studentName || admissionReference(item);
                const academicCreated = feeGeneration?.createdKinds?.includes('academic');
                const academicFailure = feeGeneration?.skippedKinds?.find((entry) => entry.kind === 'academic')?.reason;
                this.resultMessage.set(academicCreated
                    ? `${student} was approved and activated, and the Academic Fee ledger was created successfully.`
                    : `${student} was approved and activated successfully.`);
                this.feeGenerationWarning.set(academicCreated
                    ? ''
                    : `The Academic Fee ledger was not created: ${feeGeneration?.reason || academicFailure || 'no matching fee configuration was available'}. Configure the fee and use Create Ledger from Approved Students; re-approval is not required.`);
            },
            error: (error) => {
                this.activationError.set(error.error?.message || 'The application could not be activated.');
                this.activationSaving.set(false);
            },
        });
    }
    submitForReview() {
        const item = this.item();
        if (!item || !this.canSubmit() || this.submissionSaving())
            return;
        this.submissionError.set('');
        this.submissionSaving.set(true);
        this.api
            .submitAdminAdmission(item._id)
            .pipe(takeUntilDestroyed(this.destroyRef))
            .subscribe({
            next: ({ item: updated }) => {
                this.item.set({ ...item, ...updated });
                this.submissionSaving.set(false);
                this.resultMessage.set('Application submitted for administrative review.');
            },
            error: (error) => {
                this.submissionError.set(error.error?.message || 'The application could not be submitted for review.');
                this.submissionSaving.set(false);
            },
        });
    }
    reference(item) {
        return admissionReference(item);
    }
    statusLabel(item) {
        return admissionStatusLabel(item);
    }
    dateLabel(value) {
        return admissionDateLabel(value);
    }
    yearForSemester(value) {
        return Math.ceil(Number(value) / 2);
    }
    onEscape() {
        if (this.activationOpen())
            this.closeActivation();
    }
    documentEvidence(item) {
        if (!item)
            return [];
        return item.formSnapshot.sections.flatMap((section) => section.subsections.flatMap((subsection) => subsection.fields
            .filter((field) => field.isActive && isDocumentField(field))
            .map((field) => {
            const rawValue = item.responses[field.id];
            return {
                id: field.id,
                label: field.name,
                value: admissionDisplayValue(rawValue, this.masterLabels()),
                provided: hasAdmissionValue(rawValue),
            };
        })));
    }
    static ɵfac = function ApplicationReviewComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || ApplicationReviewComponent)(); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ApplicationReviewComponent, selectors: [["erp-application-review"]], hostBindings: function ApplicationReviewComponent_HostBindings(rf, ctx) { if (rf & 1) {
            i0.ɵɵlistener("keydown.escape", function ApplicationReviewComponent_keydown_escape_HostBindingHandler() { return ctx.onEscape(); }, i0.ɵɵresolveDocument);
        } }, decls: 10, vars: 7, consts: [["eyebrow", "Admissions / Review", "description", "Validate the submitted evidence before approving and activating the student record.", "variant", "compact", 3, "title"], ["page-actions", "", 1, "application-review__page-actions"], [1, "erp-button", "erp-button--secondary", 3, "routerLink"], ["lucideArrowLeft", "", "size", "16", "aria-hidden", "true"], ["aria-label", "Loading application review", 1, "erp-card", "application-review__loading"], ["role", "alert", 1, "erp-card", "erp-empty-panel"], [1, "modal-backdrop", "application-review__dialog-layer"], ["lucidePencil", "", "size", "15", "aria-hidden", "true"], [1, "erp-skeleton", "application-review__skeleton-title"], [1, "application-review__skeleton-grid"], [1, "erp-skeleton"], [1, "erp-empty-panel__icon"], ["lucideCircleAlert", "", "size", "21", "aria-hidden", "true"], ["type", "button", 1, "erp-button", "erp-button--secondary", 3, "click"], ["lucideRefreshCw", "", "size", "15", "aria-hidden", "true"], ["aria-live", "polite", 1, "erp-notice", "erp-notice--success", "application-review__result"], ["role", "alert", 1, "erp-notice", "erp-notice--warning", "application-review__result"], [1, "erp-card", "application-review__identity"], [1, "application-review__identity-icon"], ["lucideUserRound", "", "size", "21", "aria-hidden", "true"], [1, "erp-status"], [1, "application-review__layout"], [1, "application-review__main"], ["aria-labelledby", "review-readiness-title", 1, "erp-card", "application-review__section"], [1, "application-review__section-icon"], ["lucideClipboardCheck", "", "size", "19", "aria-hidden", "true"], ["id", "review-readiness-title"], [1, "erp-status", "erp-status--warning"], [1, "application-review__checks"], ["aria-labelledby", "missing-evidence-title", 1, "erp-card", "application-review__section"], ["aria-labelledby", "document-evidence-title", 1, "erp-card", "application-review__section"], ["lucideFileCheck2", "", "size", "19", "aria-hidden", "true"], ["id", "document-evidence-title"], [1, "application-review__documents"], [1, "application-review__empty-evidence"], [1, "application-review__aside"], ["aria-labelledby", "review-decision-title", 1, "erp-card", "application-review__decision"], ["lucideShieldCheck", "", "size", "19", "aria-hidden", "true"], ["id", "review-decision-title"], [1, "application-review__decision-state", "application-review__decision-state--complete"], ["aria-labelledby", "review-context-title", 1, "erp-card", "application-review__meta"], ["id", "review-context-title"], [1, "application-review__evidence-link", 3, "routerLink", "queryParams"], ["lucideBadgeCheck", "", "size", "18", "aria-hidden", "true"], ["lucideCircleAlert", "", "size", "18", "aria-hidden", "true"], ["aria-hidden", "true", 1, "application-review__check-icon"], ["lucideBadgeCheck", "", "size", "17"], ["lucideCircleAlert", "", "size", "17"], [1, "application-review__check-state"], [1, "application-review__section-icon", "application-review__section-icon--warning"], ["lucideCircleAlert", "", "size", "19", "aria-hidden", "true"], ["id", "missing-evidence-title"], [1, "application-review__missing-list"], [1, "application-review__document-icon"], ["lucideFileText", "", "size", "17", "aria-hidden", "true"], ["lucideFileText", "", "size", "18", "aria-hidden", "true"], ["lucideBadgeCheck", "", "size", "20", "aria-hidden", "true"], [1, "application-review__decision-state"], ["lucideCircleAlert", "", "size", "20", "aria-hidden", "true"], ["role", "alert", 1, "erp-notice", "erp-notice--error"], ["type", "button", 1, "erp-button", "erp-button--primary", "application-review__activate", 3, "click", "disabled"], ["lucideClipboardCheck", "", "size", "16", "aria-hidden", "true"], [1, "application-review__evidence-link", 3, "routerLink"], [1, "application-review__decision-summary"], ["lucideShieldCheck", "", "size", "16", "aria-hidden", "true"], [1, "application-review__decision-help"], ["type", "button", "tabindex", "-1", "aria-label", "Close activation dialog", 1, "backdrop-close", 3, "click"], ["role", "dialog", "aria-modal", "true", "aria-labelledby", "activation-dialog-title", "cdkTrapFocus", "", 1, "modal", "application-review__dialog", 3, "cdkTrapFocusAutoCapture"], [1, "application-review__dialog-header"], [1, "application-review__dialog-icon"], ["lucideShieldCheck", "", "size", "20", "aria-hidden", "true"], ["id", "activation-dialog-title"], ["type", "button", "aria-label", "Close activation dialog", 3, "click"], ["lucideX", "", "size", "17", "aria-hidden", "true"], [1, "application-review__dialog-body"], [1, "application-review__form-grid"], [1, "erp-control", 3, "ngModelChange", "ngModel", "disabled"], ["value", "year"], ["value", "semester"], [1, "erp-control", 3, "ngModelChange", "ngModel"], [3, "ngValue"], [1, "application-review__credential-options"], ["type", "radio", "name", "activation-password-mode", "value", "student-id", 3, "ngModelChange", "ngModel"], ["type", "radio", "name", "activation-password-mode", "value", "manual", 3, "ngModelChange", "ngModel"], [1, "application-review__activation-note"], ["lucideKeyRound", "", "size", "18", "aria-hidden", "true"], [1, "application-review__dialog-footer"], ["type", "button", 1, "erp-button", "erp-button--secondary", 3, "click", "disabled"], ["type", "button", 1, "erp-button", "erp-button--primary", 3, "click", "disabled"], ["type", "password", "autocomplete", "new-password", 1, "erp-control", 3, "ngModelChange", "ngModel"]], template: function ApplicationReviewComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "erp-admin-page", 0)(1, "div", 1)(2, "a", 2);
            i0.ɵɵnamespaceSVG();
            i0.ɵɵelement(3, "svg", 3);
            i0.ɵɵtext(4, " Application record ");
            i0.ɵɵelementEnd();
            i0.ɵɵconditionalCreate(5, ApplicationReviewComponent_Conditional_5_Template, 3, 3, "a", 2);
            i0.ɵɵelementEnd();
            i0.ɵɵconditionalCreate(6, ApplicationReviewComponent_Conditional_6_Template, 7, 0, "section", 4)(7, ApplicationReviewComponent_Conditional_7_Template, 10, 1, "section", 5)(8, ApplicationReviewComponent_Conditional_8_Template, 81, 22);
            i0.ɵɵelementEnd();
            i0.ɵɵconditionalCreate(9, ApplicationReviewComponent_Conditional_9_Template, 78, 14, "div", 6);
        } if (rf & 2) {
            let tmp_0_0;
            let tmp_1_0;
            let tmp_2_0;
            let tmp_3_0;
            let tmp_4_0;
            i0.ɵɵproperty("title", ((tmp_0_0 = ctx.item()) == null ? null : tmp_0_0.studentName) || (ctx.loading() ? "Application review" : "Review unavailable"));
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("routerLink", i0.ɵɵpureFunction1(5, _c0, ((tmp_1_0 = ctx.item()) == null ? null : tmp_1_0._id) || ctx.admissionId()));
            i0.ɵɵadvance(3);
            i0.ɵɵconditional((tmp_2_0 = ctx.item()) ? 5 : -1, tmp_2_0);
            i0.ɵɵadvance();
            i0.ɵɵconditional(ctx.loading() ? 6 : ctx.error() ? 7 : (tmp_3_0 = ctx.item()) ? 8 : -1, tmp_3_0);
            i0.ɵɵadvance(3);
            i0.ɵɵconditional((tmp_4_0 = ctx.activationOpen() && ctx.item()) ? 9 : -1, tmp_4_0);
        } }, dependencies: [AdminPageComponent,
            CdkTrapFocus,
            FormsModule, i1.NgSelectOption, i1.ɵNgSelectMultipleOption, i1.DefaultValueAccessor, i1.SelectControlValueAccessor, i1.RadioControlValueAccessor, i1.NgControlStatus, i1.NgModel, LucideArrowLeft,
            LucideBadgeCheck,
            LucideCircleAlert,
            LucideClipboardCheck,
            LucideFileCheck2,
            LucideFileText,
            LucideKeyRound,
            LucidePencil,
            LucideRefreshCw,
            LucideShieldCheck,
            LucideUserRound,
            LucideX,
            RouterLink], styles: ["[_nghost-%COMP%] {\n  display: block;\n}\n\n.application-review__page-actions[_ngcontent-%COMP%], \n.application-review__result[_ngcontent-%COMP%], \n.application-review__identity[_ngcontent-%COMP%], \n.application-review__section[_ngcontent-%COMP%]    > header[_ngcontent-%COMP%], \n.application-review__decision[_ngcontent-%COMP%]    > header[_ngcontent-%COMP%], \n.application-review__dialog-header[_ngcontent-%COMP%], \n.application-review__dialog-footer[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n\n.application-review__page-actions[_ngcontent-%COMP%] {\n  flex-wrap: wrap;\n  justify-content: flex-end;\n  gap: var(--erp-space-2);\n}\n\n.application-review__loading[_ngcontent-%COMP%] {\n  display: grid;\n  min-height: var(--erp-state-panel-min-height);\n  align-content: start;\n  gap: var(--erp-space-5);\n  padding: var(--erp-space-6);\n}\n\n.application-review__skeleton-title[_ngcontent-%COMP%] {\n  width: min(22rem, 65%);\n  height: var(--erp-control-height);\n}\n\n.application-review__skeleton-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n  gap: var(--erp-space-4);\n}\n\n.application-review__skeleton-grid[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  min-height: 7rem;\n}\n\n.application-review__result[_ngcontent-%COMP%] {\n  gap: var(--erp-space-3);\n  margin-bottom: var(--erp-space-4);\n}\n\n.application-review__result[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  display: grid;\n  gap: var(--erp-space-1);\n}\n\n.application-review__result[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%], \n.application-review__result[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: block;\n}\n\n.application-review__identity[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: auto minmax(0, 1fr) auto;\n  gap: var(--erp-space-3);\n  margin-bottom: var(--erp-space-4);\n  padding: var(--erp-space-4) var(--erp-space-5);\n}\n\n.application-review__identity-icon[_ngcontent-%COMP%], \n.application-review__section-icon[_ngcontent-%COMP%], \n.application-review__document-icon[_ngcontent-%COMP%], \n.application-review__dialog-icon[_ngcontent-%COMP%] {\n  display: inline-grid;\n  flex: 0 0 auto;\n  place-items: center;\n  color: var(--erp-blue-700);\n  background: var(--erp-blue-50);\n  border-radius: var(--erp-radius-control);\n}\n\n.application-review__identity-icon[_ngcontent-%COMP%] {\n  width: var(--erp-control-height-large);\n  height: var(--erp-control-height-large);\n}\n\n.application-review__identity[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  min-width: 0;\n}\n\n.application-review__identity[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], \n.application-review__identity[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], \n.application-review__identity[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n}\n\n.application-review__identity[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  color: var(--erp-text-muted);\n  font-family: var(--erp-font-mono);\n  font-size: var(--erp-font-caption);\n}\n\n.application-review__identity[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  overflow: hidden;\n  color: var(--erp-text-heading);\n  font-size: var(--erp-font-section-title);\n  font-weight: var(--erp-weight-semibold);\n  line-height: var(--erp-line-section-title);\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n\n.application-review__identity[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  overflow: hidden;\n  color: var(--erp-text-muted);\n  font-size: var(--erp-font-caption);\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n\n.application-review__layout[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: minmax(0, 1fr) minmax(18rem, 22rem);\n  align-items: start;\n  gap: var(--erp-space-4);\n}\n\n.application-review__main[_ngcontent-%COMP%], \n.application-review__aside[_ngcontent-%COMP%] {\n  display: grid;\n  min-width: 0;\n  gap: var(--erp-space-4);\n}\n\n.application-review__aside[_ngcontent-%COMP%] {\n  position: sticky;\n  top: var(--erp-admin-sticky-top);\n}\n\n.application-review__section[_ngcontent-%COMP%], \n.application-review__decision[_ngcontent-%COMP%], \n.application-review__meta[_ngcontent-%COMP%] {\n  overflow: hidden;\n}\n\n.application-review__section[_ngcontent-%COMP%]    > header[_ngcontent-%COMP%], \n.application-review__decision[_ngcontent-%COMP%]    > header[_ngcontent-%COMP%] {\n  gap: var(--erp-space-3);\n  padding: var(--erp-space-4);\n  border-bottom: 1px solid var(--erp-border-subtle);\n}\n\n.application-review__section[_ngcontent-%COMP%]    > header[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%], \n.application-review__decision[_ngcontent-%COMP%]    > header[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  min-width: 0;\n  flex: 1;\n}\n\n.application-review__section-icon[_ngcontent-%COMP%], \n.application-review__dialog-icon[_ngcontent-%COMP%] {\n  width: var(--erp-control-height);\n  height: var(--erp-control-height);\n}\n\n.application-review__section-icon--warning[_ngcontent-%COMP%] {\n  color: var(--erp-warning-text);\n  background: var(--erp-warning-bg);\n}\n\n.application-review__section[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], \n.application-review__section[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], \n.application-review__decision[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], \n.application-review__decision[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], \n.application-review__meta[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0;\n}\n\n.application-review__section[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], \n.application-review__decision[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], \n.application-review__meta[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  color: var(--erp-text-heading);\n  font-size: var(--erp-font-panel-title);\n  font-weight: var(--erp-weight-semibold);\n  line-height: var(--erp-line-body);\n}\n\n.application-review__section[_ngcontent-%COMP%]   header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], \n.application-review__decision[_ngcontent-%COMP%]   header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin-top: var(--erp-space-1);\n  color: var(--erp-text-muted);\n  font-size: var(--erp-font-caption);\n}\n\n.application-review__checks[_ngcontent-%COMP%], \n.application-review__documents[_ngcontent-%COMP%], \n.application-review__missing-list[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n  list-style: none;\n}\n\n.application-review__checks[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%], \n.application-review__documents[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: auto minmax(0, 1fr) auto;\n  align-items: center;\n  gap: var(--erp-space-3);\n  padding: var(--erp-space-3) var(--erp-space-4);\n  border-bottom: 1px solid var(--erp-border-subtle);\n}\n\n.application-review__checks[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]:last-child, \n.application-review__documents[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]:last-child {\n  border-bottom: 0;\n}\n\n.application-review__check-icon[_ngcontent-%COMP%], \n.application-review__document-icon[_ngcontent-%COMP%] {\n  width: var(--erp-control-height-compact);\n  height: var(--erp-control-height-compact);\n}\n\n.application-review__checks[_ngcontent-%COMP%]   li[data-state='pass'][_ngcontent-%COMP%]   .application-review__check-icon[_ngcontent-%COMP%] {\n  color: var(--erp-success-text);\n  background: var(--erp-success-bg);\n}\n\n.application-review__checks[_ngcontent-%COMP%]   li[data-state='attention'][_ngcontent-%COMP%]   .application-review__check-icon[_ngcontent-%COMP%] {\n  color: var(--erp-warning-text);\n  background: var(--erp-warning-bg);\n}\n\n.application-review__checks[_ngcontent-%COMP%]   li[data-state='blocker'][_ngcontent-%COMP%]   .application-review__check-icon[_ngcontent-%COMP%] {\n  color: var(--erp-danger-text);\n  background: var(--erp-danger-bg);\n}\n\n.application-review__checks[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%], \n.application-review__documents[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  display: block;\n  color: var(--erp-text-heading);\n  font-size: var(--erp-font-label);\n  font-weight: var(--erp-weight-semibold);\n}\n\n.application-review__checks[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], \n.application-review__documents[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  margin: var(--erp-space-1) 0 0;\n  color: var(--erp-text-muted);\n  font-size: var(--erp-font-caption);\n}\n\n.application-review__check-state[_ngcontent-%COMP%] {\n  color: var(--erp-text-muted);\n  font-size: var(--erp-font-caption);\n  font-weight: var(--erp-weight-semibold);\n}\n\n.application-review__missing-list[_ngcontent-%COMP%] {\n  display: grid;\n  gap: var(--erp-space-2);\n  padding: var(--erp-space-4);\n}\n\n.application-review__missing-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  position: relative;\n  padding-left: var(--erp-space-4);\n  color: var(--erp-danger-text);\n  font-size: var(--erp-font-label);\n}\n\n.application-review__missing-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]::before {\n  position: absolute;\n  top: 0.55em;\n  left: var(--erp-space-1);\n  width: var(--erp-space-1);\n  height: var(--erp-space-1);\n  border-radius: var(--erp-radius-pill);\n  background: var(--erp-danger);\n  content: '';\n}\n\n.application-review__empty-evidence[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: var(--erp-space-2);\n  padding: var(--erp-space-4);\n  color: var(--erp-text-muted);\n}\n\n.application-review__empty-evidence[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: var(--erp-font-label);\n}\n\n.application-review__decision-summary[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n  gap: var(--erp-space-2);\n  padding: var(--erp-space-4);\n}\n\n.application-review__decision-summary[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  display: grid;\n  gap: var(--erp-space-1);\n  padding: var(--erp-space-3);\n  background: var(--erp-surface-detail);\n  border: 1px solid var(--erp-border-subtle);\n  border-radius: var(--erp-radius-control);\n}\n\n.application-review__decision-summary[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], \n.application-review__decision-help[_ngcontent-%COMP%], \n.application-review__decision-state[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: var(--erp-text-muted);\n  font-size: var(--erp-font-caption);\n}\n\n.application-review__decision-summary[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: var(--erp-text-heading);\n  font-size: var(--erp-font-section-title);\n}\n\n.application-review__activate[_ngcontent-%COMP%] {\n  width: calc(100% - (var(--erp-space-4) * 2));\n  justify-content: center;\n  margin: 0 var(--erp-space-4);\n}\n\n.application-review__decision[_ngcontent-%COMP%]    > .erp-notice[_ngcontent-%COMP%], \n.application-review__decision[_ngcontent-%COMP%]    > .application-review__evidence-link[_ngcontent-%COMP%] {\n  margin: var(--erp-space-3) var(--erp-space-4) 0;\n}\n\n.application-review__decision[_ngcontent-%COMP%]    > .application-review__evidence-link[_ngcontent-%COMP%] {\n  display: block;\n  text-align: center;\n}\n\n.application-review__decision-help[_ngcontent-%COMP%] {\n  margin: var(--erp-space-2) var(--erp-space-4) var(--erp-space-4);\n  text-align: center;\n}\n\n.application-review__decision-state[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: var(--erp-space-3);\n  margin: var(--erp-space-4);\n  padding: var(--erp-space-3);\n  color: var(--erp-warning-text);\n  background: var(--erp-warning-bg);\n  border-radius: var(--erp-radius-control);\n}\n\n.application-review__decision-state--complete[_ngcontent-%COMP%] {\n  color: var(--erp-success-text);\n  background: var(--erp-success-bg);\n}\n\n.application-review__decision-state[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%], \n.application-review__decision-state[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: block;\n}\n\n.application-review__decision-state[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  font-size: var(--erp-font-label);\n}\n\n.application-review__meta[_ngcontent-%COMP%] {\n  padding: var(--erp-space-4);\n}\n\n.application-review__meta[_ngcontent-%COMP%]   dl[_ngcontent-%COMP%] {\n  display: grid;\n  gap: var(--erp-space-3);\n  margin: var(--erp-space-4) 0;\n}\n\n.application-review__meta[_ngcontent-%COMP%]   dl[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  gap: var(--erp-space-3);\n}\n\n.application-review__meta[_ngcontent-%COMP%]   dt[_ngcontent-%COMP%], \n.application-review__meta[_ngcontent-%COMP%]   dd[_ngcontent-%COMP%] {\n  font-size: var(--erp-font-caption);\n}\n\n.application-review__meta[_ngcontent-%COMP%]   dt[_ngcontent-%COMP%] {\n  color: var(--erp-text-muted);\n}\n\n.application-review__meta[_ngcontent-%COMP%]   dd[_ngcontent-%COMP%] {\n  margin: 0;\n  color: var(--erp-text-heading);\n  font-weight: var(--erp-weight-semibold);\n  text-align: right;\n}\n\n.application-review__evidence-link[_ngcontent-%COMP%] {\n  color: var(--erp-text-link);\n  font-size: var(--erp-font-label);\n  font-weight: var(--erp-weight-semibold);\n  text-decoration: none;\n}\n\n.application-review__evidence-link[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n\n.application-review__dialog-layer[_ngcontent-%COMP%] {\n  padding: var(--erp-space-4);\n}\n\n.application-review__dialog[_ngcontent-%COMP%] {\n  display: grid;\n  width: min(42rem, 100%);\n  max-height: min(48rem, calc(100dvh - (var(--erp-space-4) * 2)));\n  grid-template-rows: auto minmax(0, 1fr) auto;\n  overflow: hidden;\n}\n\n.application-review__dialog-header[_ngcontent-%COMP%] {\n  gap: var(--erp-space-3);\n  padding: var(--erp-space-4);\n  border-bottom: 1px solid var(--erp-border-subtle);\n}\n\n.application-review__dialog-header[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  min-width: 0;\n  flex: 1;\n}\n\n.application-review__dialog-header[_ngcontent-%COMP%]   small[_ngcontent-%COMP%], \n.application-review__dialog-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], \n.application-review__dialog-header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n}\n\n.application-review__dialog-header[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  color: var(--erp-text-muted);\n  font-size: var(--erp-font-caption);\n}\n\n.application-review__dialog-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  color: var(--erp-text-heading);\n  font-size: var(--erp-font-section-title);\n  line-height: var(--erp-line-section-title);\n}\n\n.application-review__dialog-header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: var(--erp-text-muted);\n  font-size: var(--erp-font-label);\n}\n\n.application-review__dialog-header[_ngcontent-%COMP%]    > button[_ngcontent-%COMP%] {\n  display: inline-grid;\n  width: var(--erp-control-height-compact);\n  height: var(--erp-control-height-compact);\n  place-items: center;\n  padding: 0;\n  color: var(--erp-text-muted);\n  background: transparent;\n  border: 0;\n  border-radius: var(--erp-radius-control);\n}\n\n.application-review__dialog-body[_ngcontent-%COMP%] {\n  display: grid;\n  gap: var(--erp-space-4);\n  overflow-y: auto;\n  padding: var(--erp-space-4);\n}\n\n.application-review__dialog-body[_ngcontent-%COMP%]    > section[_ngcontent-%COMP%] {\n  display: grid;\n  gap: var(--erp-space-3);\n  padding-bottom: var(--erp-space-4);\n  border-bottom: 1px solid var(--erp-border-subtle);\n}\n\n.application-review__dialog-body[_ngcontent-%COMP%]    > section[_ngcontent-%COMP%]    > header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: var(--erp-space-3);\n}\n\n.application-review__dialog-body[_ngcontent-%COMP%]    > section[_ngcontent-%COMP%]    > header[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  display: inline-grid;\n  width: var(--erp-control-height-compact);\n  height: var(--erp-control-height-compact);\n  flex: 0 0 auto;\n  place-items: center;\n  color: var(--erp-blue-700);\n  background: var(--erp-blue-50);\n  border-radius: var(--erp-radius-pill);\n  font-size: var(--erp-font-caption);\n  font-weight: var(--erp-weight-semibold);\n}\n\n.application-review__dialog-body[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], \n.application-review__dialog-body[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n}\n\n.application-review__dialog-body[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  color: var(--erp-text-heading);\n  font-size: var(--erp-font-panel-title);\n}\n\n.application-review__dialog-body[_ngcontent-%COMP%]   header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin-top: var(--erp-space-1);\n  color: var(--erp-text-muted);\n  font-size: var(--erp-font-caption);\n}\n\n.application-review__form-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n  gap: var(--erp-space-3);\n}\n\n.application-review__form-grid[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: grid;\n  gap: var(--erp-space-1);\n  color: var(--erp-text-muted);\n  font-size: var(--erp-font-caption);\n  font-weight: var(--erp-weight-semibold);\n}\n\n.application-review__credential-options[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n  gap: var(--erp-space-2);\n}\n\n.application-review__credential-options[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: var(--erp-space-2);\n  padding: var(--erp-space-3);\n  border: 1px solid var(--erp-border-default);\n  border-radius: var(--erp-radius-control);\n}\n\n.application-review__credential-options[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  margin-top: var(--erp-space-1);\n}\n\n.application-review__credential-options[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%], \n.application-review__credential-options[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  display: block;\n}\n\n.application-review__credential-options[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: var(--erp-text-heading);\n  font-size: var(--erp-font-label);\n}\n\n.application-review__credential-options[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  margin-top: var(--erp-space-1);\n  color: var(--erp-text-muted);\n  font-size: var(--erp-font-caption);\n}\n\n.application-review__activation-note[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: var(--erp-space-2);\n  padding: var(--erp-space-3);\n  color: var(--erp-info-text);\n  background: var(--erp-info-bg);\n  border-radius: var(--erp-radius-control);\n}\n\n.application-review__activation-note[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: var(--erp-font-caption);\n}\n\n.application-review__dialog-footer[_ngcontent-%COMP%] {\n  justify-content: flex-end;\n  gap: var(--erp-space-2);\n  padding: var(--erp-space-3) var(--erp-space-4);\n  border-top: 1px solid var(--erp-border-subtle);\n}\n\n@media (max-width: 64rem) {\n  .application-review__layout[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n\n  .application-review__aside[_ngcontent-%COMP%] {\n    position: static;\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n  }\n}\n\n@media (max-width: 48rem) {\n  .application-review__page-actions[_ngcontent-%COMP%], \n   .application-review__page-actions[_ngcontent-%COMP%]   .erp-button[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n\n  .application-review__page-actions[_ngcontent-%COMP%]   .erp-button[_ngcontent-%COMP%] {\n    justify-content: center;\n  }\n\n  .application-review__identity[_ngcontent-%COMP%] {\n    grid-template-columns: auto minmax(0, 1fr);\n  }\n\n  .application-review__identity[_ngcontent-%COMP%]    > .erp-status[_ngcontent-%COMP%] {\n    grid-column: 1 / -1;\n    justify-self: start;\n  }\n\n  .application-review__checks[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%], \n   .application-review__documents[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%] {\n    grid-template-columns: auto minmax(0, 1fr);\n  }\n\n  .application-review__check-state[_ngcontent-%COMP%], \n   .application-review__documents[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > .erp-status[_ngcontent-%COMP%] {\n    grid-column: 2;\n    justify-self: start;\n  }\n\n  .application-review__aside[_ngcontent-%COMP%], \n   .application-review__form-grid[_ngcontent-%COMP%], \n   .application-review__credential-options[_ngcontent-%COMP%], \n   .application-review__skeleton-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n\n  .application-review__dialog-layer[_ngcontent-%COMP%] {\n    padding: 0;\n  }\n\n  .application-review__dialog[_ngcontent-%COMP%] {\n    width: 100%;\n    max-width: none;\n    max-height: 100dvh;\n    min-height: 100dvh;\n    border-radius: 0;\n  }\n\n  .application-review__dialog-footer[_ngcontent-%COMP%]   .erp-button[_ngcontent-%COMP%] {\n    flex: 1;\n  }\n}"], changeDetection: 0 });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ApplicationReviewComponent, [{
        type: Component,
        args: [{ selector: 'erp-application-review', imports: [
                    AdminPageComponent,
                    CdkTrapFocus,
                    FormsModule,
                    LucideArrowLeft,
                    LucideBadgeCheck,
                    LucideCircleAlert,
                    LucideClipboardCheck,
                    LucideFileCheck2,
                    LucideFileText,
                    LucideKeyRound,
                    LucidePencil,
                    LucideRefreshCw,
                    LucideShieldCheck,
                    LucideUserRound,
                    LucideX,
                    RouterLink,
                ], changeDetection: ChangeDetectionStrategy.OnPush, template: "<erp-admin-page\n  eyebrow=\"Admissions / Review\"\n  [title]=\"item()?.studentName || (loading() ? 'Application review' : 'Review unavailable')\"\n  description=\"Validate the submitted evidence before approving and activating the student record.\"\n  variant=\"compact\"\n>\n  <div page-actions class=\"application-review__page-actions\">\n    <a\n      class=\"erp-button erp-button--secondary\"\n      [routerLink]=\"['/admin/admissions/applications', item()?._id || admissionId()]\"\n    >\n      <svg lucideArrowLeft size=\"16\" aria-hidden=\"true\"></svg>\n      Application record\n    </a>\n    @if (item(); as application) {\n      <a\n        class=\"erp-button erp-button--secondary\"\n        [routerLink]=\"['/admin/admissions', application._id, 'edit']\"\n      >\n        <svg lucidePencil size=\"15\" aria-hidden=\"true\"></svg>\n        Edit application\n      </a>\n    }\n  </div>\n\n  @if (loading()) {\n    <section class=\"erp-card application-review__loading\" aria-label=\"Loading application review\">\n      <span class=\"erp-skeleton application-review__skeleton-title\"></span>\n      <div class=\"application-review__skeleton-grid\">\n        <span class=\"erp-skeleton\"></span>\n        <span class=\"erp-skeleton\"></span>\n        <span class=\"erp-skeleton\"></span>\n        <span class=\"erp-skeleton\"></span>\n      </div>\n    </section>\n  } @else if (error()) {\n    <section class=\"erp-card erp-empty-panel\" role=\"alert\">\n      <span class=\"erp-empty-panel__icon\">\n        <svg lucideCircleAlert size=\"21\" aria-hidden=\"true\"></svg>\n      </span>\n      <h2>Application review unavailable</h2>\n      <p>{{ error() }}</p>\n      <button class=\"erp-button erp-button--secondary\" type=\"button\" (click)=\"load()\">\n        <svg lucideRefreshCw size=\"15\" aria-hidden=\"true\"></svg>\n        Try again\n      </button>\n    </section>\n  } @else if (item(); as application) {\n    @if (resultMessage()) {\n      <div class=\"erp-notice erp-notice--success application-review__result\" aria-live=\"polite\">\n        <svg lucideBadgeCheck size=\"18\" aria-hidden=\"true\"></svg>\n        <div>\n          <strong>Activation complete</strong>\n          <span>{{ resultMessage() }}</span>\n        </div>\n      </div>\n    }\n    @if (feeGenerationWarning()) {\n      <div class=\"erp-notice erp-notice--warning application-review__result\" role=\"alert\">\n        <svg lucideCircleAlert size=\"18\" aria-hidden=\"true\"></svg>\n        <div>\n          <strong>Fee ledger pending</strong>\n          <span>{{ feeGenerationWarning() }}</span>\n        </div>\n      </div>\n    }\n\n    <header class=\"erp-card application-review__identity\">\n      <span class=\"application-review__identity-icon\">\n        <svg lucideUserRound size=\"21\" aria-hidden=\"true\"></svg>\n      </span>\n      <div>\n        <span>{{ reference(application) }}</span>\n        <h2>{{ application.studentName || 'Unnamed application' }}</h2>\n        <p>\n          {{ application.courseName || 'Programme not selected' }} \u00B7\n          {{ application.academicSession || 'Session not selected' }}\n        </p>\n      </div>\n      <span\n        class=\"erp-status\"\n        [class.erp-status--warning]=\"\n          application.status === 'pending_approval' || application.status === 'submitted'\n        \"\n      >\n        {{ statusLabel(application) }}\n      </span>\n    </header>\n\n    <div class=\"application-review__layout\">\n      <main class=\"application-review__main\">\n        <section\n          class=\"erp-card application-review__section\"\n          aria-labelledby=\"review-readiness-title\"\n        >\n          <header>\n            <span class=\"application-review__section-icon\">\n              <svg lucideClipboardCheck size=\"19\" aria-hidden=\"true\"></svg>\n            </span>\n            <div>\n              <h2 id=\"review-readiness-title\">Review readiness</h2>\n              <p>System-verifiable checks from the saved application and form snapshot.</p>\n            </div>\n            @if (blockerCount()) {\n              <span class=\"erp-status erp-status--warning\">\n                {{ blockerCount() }} blocker{{ blockerCount() === 1 ? '' : 's' }}\n              </span>\n            } @else {\n              <span class=\"erp-status\">Ready for decision</span>\n            }\n          </header>\n\n          <ul class=\"application-review__checks\">\n            @for (check of reviewChecks(); track check.id) {\n              <li [attr.data-state]=\"check.state\">\n                <span class=\"application-review__check-icon\" aria-hidden=\"true\">\n                  @if (check.state === 'pass') {\n                    <svg lucideBadgeCheck size=\"17\"></svg>\n                  } @else {\n                    <svg lucideCircleAlert size=\"17\"></svg>\n                  }\n                </span>\n                <div>\n                  <strong>{{ check.label }}</strong>\n                  <p>{{ check.detail }}</p>\n                </div>\n                <span class=\"application-review__check-state\">\n                  {{\n                    check.state === 'pass'\n                      ? 'Passed'\n                      : check.state === 'blocker'\n                        ? 'Blocker'\n                        : 'Review'\n                  }}\n                </span>\n              </li>\n            }\n          </ul>\n        </section>\n\n        @if (missingRequired().length) {\n          <section\n            class=\"erp-card application-review__section\"\n            aria-labelledby=\"missing-evidence-title\"\n          >\n            <header>\n              <span\n                class=\"application-review__section-icon application-review__section-icon--warning\"\n              >\n                <svg lucideCircleAlert size=\"19\" aria-hidden=\"true\"></svg>\n              </span>\n              <div>\n                <h2 id=\"missing-evidence-title\">Missing required evidence</h2>\n                <p>Resolve these responses before an approval decision is available.</p>\n              </div>\n            </header>\n            <ul class=\"application-review__missing-list\">\n              @for (gap of missingRequired(); track gap) {\n                <li>{{ gap }}</li>\n              }\n            </ul>\n          </section>\n        }\n\n        <section\n          class=\"erp-card application-review__section\"\n          aria-labelledby=\"document-evidence-title\"\n        >\n          <header>\n            <span class=\"application-review__section-icon\">\n              <svg lucideFileCheck2 size=\"19\" aria-hidden=\"true\"></svg>\n            </span>\n            <div>\n              <h2 id=\"document-evidence-title\">Document evidence</h2>\n              <p>Configured uploads found in this application snapshot.</p>\n            </div>\n          </header>\n\n          @if (documents().length) {\n            <ul class=\"application-review__documents\">\n              @for (document of documents(); track document.id) {\n                <li>\n                  <span class=\"application-review__document-icon\">\n                    <svg lucideFileText size=\"17\" aria-hidden=\"true\"></svg>\n                  </span>\n                  <div>\n                    <strong>{{ document.label }}</strong>\n                    <span>{{ document.value }}</span>\n                  </div>\n                  <span class=\"erp-status\" [class.erp-status--warning]=\"!document.provided\">\n                    {{ document.provided ? 'Provided' : 'Missing' }}\n                  </span>\n                </li>\n              }\n            </ul>\n          } @else {\n            <div class=\"application-review__empty-evidence\">\n              <svg lucideFileText size=\"18\" aria-hidden=\"true\"></svg>\n              <p>No document fields are configured in this form snapshot.</p>\n            </div>\n          }\n        </section>\n      </main>\n\n      <aside class=\"application-review__aside\">\n        <section\n          class=\"erp-card application-review__decision\"\n          aria-labelledby=\"review-decision-title\"\n        >\n          <header>\n            <span class=\"application-review__section-icon\">\n              <svg lucideShieldCheck size=\"19\" aria-hidden=\"true\"></svg>\n            </span>\n            <div>\n              <h2 id=\"review-decision-title\">Decision</h2>\n              <p>Complete review before creating student access.</p>\n            </div>\n          </header>\n\n          @if (application.status === 'approved') {\n            <div\n              class=\"application-review__decision-state application-review__decision-state--complete\"\n            >\n              <svg lucideBadgeCheck size=\"20\" aria-hidden=\"true\"></svg>\n              <div>\n                <strong>Approved and activated</strong>\n                <span>{{ dateLabel(application.approvedAt) }}</span>\n              </div>\n            </div>\n          } @else if (application.status === 'draft') {\n            <div\n              class=\"application-review__decision-state\"\n              [class.application-review__decision-state--complete]=\"canSubmit()\"\n            >\n              <svg lucideCircleAlert size=\"20\" aria-hidden=\"true\"></svg>\n              <div>\n                <strong>{{ canSubmit() ? 'Ready to submit' : 'Application incomplete' }}</strong>\n                <span>\n                  {{\n                    canSubmit()\n                      ? 'All blocking checks pass. Submit the application to begin administrative review.'\n                      : 'Resolve the blocking checks before submitting this application.'\n                  }}\n                </span>\n              </div>\n            </div>\n            @if (submissionError()) {\n              <p class=\"erp-notice erp-notice--error\" role=\"alert\">{{ submissionError() }}</p>\n            }\n            <button\n              class=\"erp-button erp-button--primary application-review__activate\"\n              type=\"button\"\n              [disabled]=\"!canSubmit() || submissionSaving()\"\n              (click)=\"submitForReview()\"\n            >\n              <svg lucideClipboardCheck size=\"16\" aria-hidden=\"true\"></svg>\n              {{ submissionSaving() ? 'Submitting\u2026' : 'Submit for review' }}\n            </button>\n            @if (!canSubmit()) {\n              <a\n                class=\"application-review__evidence-link\"\n                [routerLink]=\"['/admin/admissions', application._id, 'edit']\"\n              >\n                Return to application editor\n              </a>\n            }\n          } @else {\n            <div class=\"application-review__decision-summary\">\n              <div>\n                <span>Blocking checks</span>\n                <strong>{{ blockerCount() }}</strong>\n              </div>\n              <div>\n                <span>Document fields</span>\n                <strong>{{ documents().length }}</strong>\n              </div>\n            </div>\n            <button\n              class=\"erp-button erp-button--primary application-review__activate\"\n              type=\"button\"\n              [disabled]=\"!canActivate()\"\n              (click)=\"openActivation($event)\"\n            >\n              <svg lucideShieldCheck size=\"16\" aria-hidden=\"true\"></svg>\n              Approve and activate\n            </button>\n            @if (!canActivate()) {\n              <p class=\"application-review__decision-help\">\n                Resolve all blockers before activation becomes available.\n              </p>\n            }\n          }\n        </section>\n\n        <section class=\"erp-card application-review__meta\" aria-labelledby=\"review-context-title\">\n          <h2 id=\"review-context-title\">Application context</h2>\n          <dl>\n            <div>\n              <dt>Created</dt>\n              <dd>{{ dateLabel(application.createdAt) }}</dd>\n            </div>\n            <div>\n              <dt>Submitted</dt>\n              <dd>{{ dateLabel(application.submittedAt) }}</dd>\n            </div>\n            <div>\n              <dt>Form version</dt>\n              <dd>\n                {{ application.formVersion || application.formSnapshot.version || 'Not recorded' }}\n              </dd>\n            </div>\n            <div>\n              <dt>Current fee mode</dt>\n              <dd>{{ application.feeFrequency === 'semester' ? 'Semester-wise' : 'Full year' }}</dd>\n            </div>\n          </dl>\n          <a\n            class=\"application-review__evidence-link\"\n            [routerLink]=\"['/admin/admissions/applications', application._id]\"\n            [queryParams]=\"{ tab: 'application' }\"\n          >\n            Open complete application evidence\n          </a>\n        </section>\n      </aside>\n    </div>\n  }\n</erp-admin-page>\n\n@if (activationOpen() && item(); as application) {\n  <div class=\"modal-backdrop application-review__dialog-layer\">\n    <button\n      class=\"backdrop-close\"\n      type=\"button\"\n      tabindex=\"-1\"\n      aria-label=\"Close activation dialog\"\n      (click)=\"closeActivation()\"\n    ></button>\n    <section\n      class=\"modal application-review__dialog\"\n      role=\"dialog\"\n      aria-modal=\"true\"\n      aria-labelledby=\"activation-dialog-title\"\n      cdkTrapFocus\n      [cdkTrapFocusAutoCapture]=\"true\"\n    >\n      <header class=\"application-review__dialog-header\">\n        <span class=\"application-review__dialog-icon\">\n          <svg lucideShieldCheck size=\"20\" aria-hidden=\"true\"></svg>\n        </span>\n        <div>\n          <small>Final review outcome</small>\n          <h2 id=\"activation-dialog-title\">Approve and activate student</h2>\n          <p>{{ application.studentName || reference(application) }}</p>\n        </div>\n        <button type=\"button\" aria-label=\"Close activation dialog\" (click)=\"closeActivation()\">\n          <svg lucideX size=\"17\" aria-hidden=\"true\"></svg>\n        </button>\n      </header>\n\n      <div class=\"application-review__dialog-body\">\n        @if (activationError()) {\n          <p class=\"erp-notice erp-notice--error\" role=\"alert\">{{ activationError() }}</p>\n        }\n\n        <section>\n          <header>\n            <span>1</span>\n            <div>\n              <h3>Academic placement</h3>\n              <p>Set the student\u2019s current progression point.</p>\n            </div>\n          </header>\n          <div class=\"application-review__form-grid\">\n            <label>\n              <span>Fee calculation mode</span>\n              <select\n                class=\"erp-control\"\n                [(ngModel)]=\"feeFrequency\"\n                [disabled]=\"!!application.feeFrequencyChoice\"\n              >\n                <option value=\"year\">Full academic year</option>\n                <option value=\"semester\">Semester-wise</option>\n              </select>\n              <small>{{\n                application.feeFrequencyChoice\n                  ? 'Selected in the admission form.'\n                  : 'No applicant selection was saved; verify before approval.'\n              }}</small>\n            </label>\n            <label>\n              <span>Current academic year</span>\n              <select class=\"erp-control\" [(ngModel)]=\"currentAcademicYear\">\n                @for (year of academicYearOptions; track year) {\n                  <option [ngValue]=\"year\">Year {{ year }}</option>\n                }\n              </select>\n            </label>\n            @if (feeFrequency === 'semester') {\n              <label>\n                <span>Current semester</span>\n                <select class=\"erp-control\" [(ngModel)]=\"currentSemester\">\n                  @for (semester of semesterOptions; track semester) {\n                    <option [ngValue]=\"semester\">Semester {{ semester }}</option>\n                  }\n                </select>\n              </label>\n            }\n          </div>\n        </section>\n\n        <section>\n          <header>\n            <span>2</span>\n            <div>\n              <h3>Student access</h3>\n              <p>Choose the temporary credential policy used by the existing account contract.</p>\n            </div>\n          </header>\n          <div class=\"application-review__credential-options\">\n            <label>\n              <input\n                type=\"radio\"\n                name=\"activation-password-mode\"\n                value=\"student-id\"\n                [(ngModel)]=\"passwordMode\"\n              />\n              <span>\n                <strong>Use generated Student ID</strong>\n                <small>The student changes it after first sign-in.</small>\n              </span>\n            </label>\n            <label>\n              <input\n                type=\"radio\"\n                name=\"activation-password-mode\"\n                value=\"manual\"\n                [(ngModel)]=\"passwordMode\"\n              />\n              <span>\n                <strong>Set a temporary password</strong>\n                <small>Minimum eight characters; confirmation required.</small>\n              </span>\n            </label>\n          </div>\n          @if (passwordMode === 'manual') {\n            <div class=\"application-review__form-grid\">\n              <label>\n                <span>Temporary password</span>\n                <input\n                  class=\"erp-control\"\n                  type=\"password\"\n                  autocomplete=\"new-password\"\n                  [(ngModel)]=\"manualPassword\"\n                />\n              </label>\n              <label>\n                <span>Confirm password</span>\n                <input\n                  class=\"erp-control\"\n                  type=\"password\"\n                  autocomplete=\"new-password\"\n                  [(ngModel)]=\"confirmPassword\"\n                />\n              </label>\n            </div>\n          }\n        </section>\n\n        <div class=\"application-review__activation-note\">\n          <svg lucideKeyRound size=\"18\" aria-hidden=\"true\"></svg>\n          <p>\n            Approval creates or activates the student login using the existing backend workflow.\n            Review the academic placement before continuing.\n          </p>\n        </div>\n      </div>\n\n      <footer class=\"application-review__dialog-footer\">\n        <button\n          class=\"erp-button erp-button--secondary\"\n          type=\"button\"\n          [disabled]=\"activationSaving()\"\n          (click)=\"closeActivation()\"\n        >\n          Cancel\n        </button>\n        <button\n          class=\"erp-button erp-button--primary\"\n          type=\"button\"\n          [disabled]=\"activationSaving()\"\n          (click)=\"activate()\"\n        >\n          {{ activationSaving() ? 'Activating\u2026' : 'Confirm approval and activation' }}\n        </button>\n      </footer>\n    </section>\n  </div>\n}\n", styles: [":host {\n  display: block;\n}\n\n.application-review__page-actions,\n.application-review__result,\n.application-review__identity,\n.application-review__section > header,\n.application-review__decision > header,\n.application-review__dialog-header,\n.application-review__dialog-footer {\n  display: flex;\n  align-items: center;\n}\n\n.application-review__page-actions {\n  flex-wrap: wrap;\n  justify-content: flex-end;\n  gap: var(--erp-space-2);\n}\n\n.application-review__loading {\n  display: grid;\n  min-height: var(--erp-state-panel-min-height);\n  align-content: start;\n  gap: var(--erp-space-5);\n  padding: var(--erp-space-6);\n}\n\n.application-review__skeleton-title {\n  width: min(22rem, 65%);\n  height: var(--erp-control-height);\n}\n\n.application-review__skeleton-grid {\n  display: grid;\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n  gap: var(--erp-space-4);\n}\n\n.application-review__skeleton-grid > span {\n  min-height: 7rem;\n}\n\n.application-review__result {\n  gap: var(--erp-space-3);\n  margin-bottom: var(--erp-space-4);\n}\n\n.application-review__result > div {\n  display: grid;\n  gap: var(--erp-space-1);\n}\n\n.application-review__result strong,\n.application-review__result span {\n  display: block;\n}\n\n.application-review__identity {\n  display: grid;\n  grid-template-columns: auto minmax(0, 1fr) auto;\n  gap: var(--erp-space-3);\n  margin-bottom: var(--erp-space-4);\n  padding: var(--erp-space-4) var(--erp-space-5);\n}\n\n.application-review__identity-icon,\n.application-review__section-icon,\n.application-review__document-icon,\n.application-review__dialog-icon {\n  display: inline-grid;\n  flex: 0 0 auto;\n  place-items: center;\n  color: var(--erp-blue-700);\n  background: var(--erp-blue-50);\n  border-radius: var(--erp-radius-control);\n}\n\n.application-review__identity-icon {\n  width: var(--erp-control-height-large);\n  height: var(--erp-control-height-large);\n}\n\n.application-review__identity > div {\n  min-width: 0;\n}\n\n.application-review__identity span,\n.application-review__identity h2,\n.application-review__identity p {\n  margin: 0;\n}\n\n.application-review__identity > div > span {\n  color: var(--erp-text-muted);\n  font-family: var(--erp-font-mono);\n  font-size: var(--erp-font-caption);\n}\n\n.application-review__identity h2 {\n  overflow: hidden;\n  color: var(--erp-text-heading);\n  font-size: var(--erp-font-section-title);\n  font-weight: var(--erp-weight-semibold);\n  line-height: var(--erp-line-section-title);\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n\n.application-review__identity p {\n  overflow: hidden;\n  color: var(--erp-text-muted);\n  font-size: var(--erp-font-caption);\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n\n.application-review__layout {\n  display: grid;\n  grid-template-columns: minmax(0, 1fr) minmax(18rem, 22rem);\n  align-items: start;\n  gap: var(--erp-space-4);\n}\n\n.application-review__main,\n.application-review__aside {\n  display: grid;\n  min-width: 0;\n  gap: var(--erp-space-4);\n}\n\n.application-review__aside {\n  position: sticky;\n  top: var(--erp-admin-sticky-top);\n}\n\n.application-review__section,\n.application-review__decision,\n.application-review__meta {\n  overflow: hidden;\n}\n\n.application-review__section > header,\n.application-review__decision > header {\n  gap: var(--erp-space-3);\n  padding: var(--erp-space-4);\n  border-bottom: 1px solid var(--erp-border-subtle);\n}\n\n.application-review__section > header > div,\n.application-review__decision > header > div {\n  min-width: 0;\n  flex: 1;\n}\n\n.application-review__section-icon,\n.application-review__dialog-icon {\n  width: var(--erp-control-height);\n  height: var(--erp-control-height);\n}\n\n.application-review__section-icon--warning {\n  color: var(--erp-warning-text);\n  background: var(--erp-warning-bg);\n}\n\n.application-review__section h2,\n.application-review__section p,\n.application-review__decision h2,\n.application-review__decision p,\n.application-review__meta h2 {\n  margin: 0;\n}\n\n.application-review__section h2,\n.application-review__decision h2,\n.application-review__meta h2 {\n  color: var(--erp-text-heading);\n  font-size: var(--erp-font-panel-title);\n  font-weight: var(--erp-weight-semibold);\n  line-height: var(--erp-line-body);\n}\n\n.application-review__section header p,\n.application-review__decision header p {\n  margin-top: var(--erp-space-1);\n  color: var(--erp-text-muted);\n  font-size: var(--erp-font-caption);\n}\n\n.application-review__checks,\n.application-review__documents,\n.application-review__missing-list {\n  margin: 0;\n  padding: 0;\n  list-style: none;\n}\n\n.application-review__checks > li,\n.application-review__documents > li {\n  display: grid;\n  grid-template-columns: auto minmax(0, 1fr) auto;\n  align-items: center;\n  gap: var(--erp-space-3);\n  padding: var(--erp-space-3) var(--erp-space-4);\n  border-bottom: 1px solid var(--erp-border-subtle);\n}\n\n.application-review__checks > li:last-child,\n.application-review__documents > li:last-child {\n  border-bottom: 0;\n}\n\n.application-review__check-icon,\n.application-review__document-icon {\n  width: var(--erp-control-height-compact);\n  height: var(--erp-control-height-compact);\n}\n\n.application-review__checks li[data-state='pass'] .application-review__check-icon {\n  color: var(--erp-success-text);\n  background: var(--erp-success-bg);\n}\n\n.application-review__checks li[data-state='attention'] .application-review__check-icon {\n  color: var(--erp-warning-text);\n  background: var(--erp-warning-bg);\n}\n\n.application-review__checks li[data-state='blocker'] .application-review__check-icon {\n  color: var(--erp-danger-text);\n  background: var(--erp-danger-bg);\n}\n\n.application-review__checks strong,\n.application-review__documents strong {\n  display: block;\n  color: var(--erp-text-heading);\n  font-size: var(--erp-font-label);\n  font-weight: var(--erp-weight-semibold);\n}\n\n.application-review__checks p,\n.application-review__documents span {\n  margin: var(--erp-space-1) 0 0;\n  color: var(--erp-text-muted);\n  font-size: var(--erp-font-caption);\n}\n\n.application-review__check-state {\n  color: var(--erp-text-muted);\n  font-size: var(--erp-font-caption);\n  font-weight: var(--erp-weight-semibold);\n}\n\n.application-review__missing-list {\n  display: grid;\n  gap: var(--erp-space-2);\n  padding: var(--erp-space-4);\n}\n\n.application-review__missing-list li {\n  position: relative;\n  padding-left: var(--erp-space-4);\n  color: var(--erp-danger-text);\n  font-size: var(--erp-font-label);\n}\n\n.application-review__missing-list li::before {\n  position: absolute;\n  top: 0.55em;\n  left: var(--erp-space-1);\n  width: var(--erp-space-1);\n  height: var(--erp-space-1);\n  border-radius: var(--erp-radius-pill);\n  background: var(--erp-danger);\n  content: '';\n}\n\n.application-review__empty-evidence {\n  display: flex;\n  align-items: center;\n  gap: var(--erp-space-2);\n  padding: var(--erp-space-4);\n  color: var(--erp-text-muted);\n}\n\n.application-review__empty-evidence p {\n  margin: 0;\n  font-size: var(--erp-font-label);\n}\n\n.application-review__decision-summary {\n  display: grid;\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n  gap: var(--erp-space-2);\n  padding: var(--erp-space-4);\n}\n\n.application-review__decision-summary > div {\n  display: grid;\n  gap: var(--erp-space-1);\n  padding: var(--erp-space-3);\n  background: var(--erp-surface-detail);\n  border: 1px solid var(--erp-border-subtle);\n  border-radius: var(--erp-radius-control);\n}\n\n.application-review__decision-summary span,\n.application-review__decision-help,\n.application-review__decision-state span {\n  color: var(--erp-text-muted);\n  font-size: var(--erp-font-caption);\n}\n\n.application-review__decision-summary strong {\n  color: var(--erp-text-heading);\n  font-size: var(--erp-font-section-title);\n}\n\n.application-review__activate {\n  width: calc(100% - (var(--erp-space-4) * 2));\n  justify-content: center;\n  margin: 0 var(--erp-space-4);\n}\n\n.application-review__decision > .erp-notice,\n.application-review__decision > .application-review__evidence-link {\n  margin: var(--erp-space-3) var(--erp-space-4) 0;\n}\n\n.application-review__decision > .application-review__evidence-link {\n  display: block;\n  text-align: center;\n}\n\n.application-review__decision-help {\n  margin: var(--erp-space-2) var(--erp-space-4) var(--erp-space-4);\n  text-align: center;\n}\n\n.application-review__decision-state {\n  display: flex;\n  align-items: flex-start;\n  gap: var(--erp-space-3);\n  margin: var(--erp-space-4);\n  padding: var(--erp-space-3);\n  color: var(--erp-warning-text);\n  background: var(--erp-warning-bg);\n  border-radius: var(--erp-radius-control);\n}\n\n.application-review__decision-state--complete {\n  color: var(--erp-success-text);\n  background: var(--erp-success-bg);\n}\n\n.application-review__decision-state strong,\n.application-review__decision-state span {\n  display: block;\n}\n\n.application-review__decision-state strong {\n  font-size: var(--erp-font-label);\n}\n\n.application-review__meta {\n  padding: var(--erp-space-4);\n}\n\n.application-review__meta dl {\n  display: grid;\n  gap: var(--erp-space-3);\n  margin: var(--erp-space-4) 0;\n}\n\n.application-review__meta dl > div {\n  display: flex;\n  justify-content: space-between;\n  gap: var(--erp-space-3);\n}\n\n.application-review__meta dt,\n.application-review__meta dd {\n  font-size: var(--erp-font-caption);\n}\n\n.application-review__meta dt {\n  color: var(--erp-text-muted);\n}\n\n.application-review__meta dd {\n  margin: 0;\n  color: var(--erp-text-heading);\n  font-weight: var(--erp-weight-semibold);\n  text-align: right;\n}\n\n.application-review__evidence-link {\n  color: var(--erp-text-link);\n  font-size: var(--erp-font-label);\n  font-weight: var(--erp-weight-semibold);\n  text-decoration: none;\n}\n\n.application-review__evidence-link:hover {\n  text-decoration: underline;\n}\n\n.application-review__dialog-layer {\n  padding: var(--erp-space-4);\n}\n\n.application-review__dialog {\n  display: grid;\n  width: min(42rem, 100%);\n  max-height: min(48rem, calc(100dvh - (var(--erp-space-4) * 2)));\n  grid-template-rows: auto minmax(0, 1fr) auto;\n  overflow: hidden;\n}\n\n.application-review__dialog-header {\n  gap: var(--erp-space-3);\n  padding: var(--erp-space-4);\n  border-bottom: 1px solid var(--erp-border-subtle);\n}\n\n.application-review__dialog-header > div {\n  min-width: 0;\n  flex: 1;\n}\n\n.application-review__dialog-header small,\n.application-review__dialog-header h2,\n.application-review__dialog-header p {\n  margin: 0;\n}\n\n.application-review__dialog-header small {\n  color: var(--erp-text-muted);\n  font-size: var(--erp-font-caption);\n}\n\n.application-review__dialog-header h2 {\n  color: var(--erp-text-heading);\n  font-size: var(--erp-font-section-title);\n  line-height: var(--erp-line-section-title);\n}\n\n.application-review__dialog-header p {\n  color: var(--erp-text-muted);\n  font-size: var(--erp-font-label);\n}\n\n.application-review__dialog-header > button {\n  display: inline-grid;\n  width: var(--erp-control-height-compact);\n  height: var(--erp-control-height-compact);\n  place-items: center;\n  padding: 0;\n  color: var(--erp-text-muted);\n  background: transparent;\n  border: 0;\n  border-radius: var(--erp-radius-control);\n}\n\n.application-review__dialog-body {\n  display: grid;\n  gap: var(--erp-space-4);\n  overflow-y: auto;\n  padding: var(--erp-space-4);\n}\n\n.application-review__dialog-body > section {\n  display: grid;\n  gap: var(--erp-space-3);\n  padding-bottom: var(--erp-space-4);\n  border-bottom: 1px solid var(--erp-border-subtle);\n}\n\n.application-review__dialog-body > section > header {\n  display: flex;\n  align-items: flex-start;\n  gap: var(--erp-space-3);\n}\n\n.application-review__dialog-body > section > header > span {\n  display: inline-grid;\n  width: var(--erp-control-height-compact);\n  height: var(--erp-control-height-compact);\n  flex: 0 0 auto;\n  place-items: center;\n  color: var(--erp-blue-700);\n  background: var(--erp-blue-50);\n  border-radius: var(--erp-radius-pill);\n  font-size: var(--erp-font-caption);\n  font-weight: var(--erp-weight-semibold);\n}\n\n.application-review__dialog-body h3,\n.application-review__dialog-body p {\n  margin: 0;\n}\n\n.application-review__dialog-body h3 {\n  color: var(--erp-text-heading);\n  font-size: var(--erp-font-panel-title);\n}\n\n.application-review__dialog-body header p {\n  margin-top: var(--erp-space-1);\n  color: var(--erp-text-muted);\n  font-size: var(--erp-font-caption);\n}\n\n.application-review__form-grid {\n  display: grid;\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n  gap: var(--erp-space-3);\n}\n\n.application-review__form-grid label {\n  display: grid;\n  gap: var(--erp-space-1);\n  color: var(--erp-text-muted);\n  font-size: var(--erp-font-caption);\n  font-weight: var(--erp-weight-semibold);\n}\n\n.application-review__credential-options {\n  display: grid;\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n  gap: var(--erp-space-2);\n}\n\n.application-review__credential-options label {\n  display: flex;\n  align-items: flex-start;\n  gap: var(--erp-space-2);\n  padding: var(--erp-space-3);\n  border: 1px solid var(--erp-border-default);\n  border-radius: var(--erp-radius-control);\n}\n\n.application-review__credential-options input {\n  margin-top: var(--erp-space-1);\n}\n\n.application-review__credential-options strong,\n.application-review__credential-options small {\n  display: block;\n}\n\n.application-review__credential-options strong {\n  color: var(--erp-text-heading);\n  font-size: var(--erp-font-label);\n}\n\n.application-review__credential-options small {\n  margin-top: var(--erp-space-1);\n  color: var(--erp-text-muted);\n  font-size: var(--erp-font-caption);\n}\n\n.application-review__activation-note {\n  display: flex;\n  align-items: flex-start;\n  gap: var(--erp-space-2);\n  padding: var(--erp-space-3);\n  color: var(--erp-info-text);\n  background: var(--erp-info-bg);\n  border-radius: var(--erp-radius-control);\n}\n\n.application-review__activation-note p {\n  font-size: var(--erp-font-caption);\n}\n\n.application-review__dialog-footer {\n  justify-content: flex-end;\n  gap: var(--erp-space-2);\n  padding: var(--erp-space-3) var(--erp-space-4);\n  border-top: 1px solid var(--erp-border-subtle);\n}\n\n@media (max-width: 64rem) {\n  .application-review__layout {\n    grid-template-columns: 1fr;\n  }\n\n  .application-review__aside {\n    position: static;\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n  }\n}\n\n@media (max-width: 48rem) {\n  .application-review__page-actions,\n  .application-review__page-actions .erp-button {\n    width: 100%;\n  }\n\n  .application-review__page-actions .erp-button {\n    justify-content: center;\n  }\n\n  .application-review__identity {\n    grid-template-columns: auto minmax(0, 1fr);\n  }\n\n  .application-review__identity > .erp-status {\n    grid-column: 1 / -1;\n    justify-self: start;\n  }\n\n  .application-review__checks > li,\n  .application-review__documents > li {\n    grid-template-columns: auto minmax(0, 1fr);\n  }\n\n  .application-review__check-state,\n  .application-review__documents > li > .erp-status {\n    grid-column: 2;\n    justify-self: start;\n  }\n\n  .application-review__aside,\n  .application-review__form-grid,\n  .application-review__credential-options,\n  .application-review__skeleton-grid {\n    grid-template-columns: 1fr;\n  }\n\n  .application-review__dialog-layer {\n    padding: 0;\n  }\n\n  .application-review__dialog {\n    width: 100%;\n    max-width: none;\n    max-height: 100dvh;\n    min-height: 100dvh;\n    border-radius: 0;\n  }\n\n  .application-review__dialog-footer .erp-button {\n    flex: 1;\n  }\n}\n"] }]
    }], () => [], { onEscape: [{
            type: HostListener,
            args: ['document:keydown.escape']
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(ApplicationReviewComponent, { className: "ApplicationReviewComponent", filePath: "frontend/src/app/features/admin/admissions/application-review/application-review.component.ts", lineNumber: 79 }); })();
function isDocumentField(field) {
    return field.type === 'file' || field.type === 'image' || field.type === 'signature';
}
