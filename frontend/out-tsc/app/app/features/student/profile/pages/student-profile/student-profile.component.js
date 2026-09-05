import { CdkTrapFocus } from '@angular/cdk/a11y';
import { DatePipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, DestroyRef, HostListener, inject, signal, } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { ActivatedRoute } from '@angular/router';
import { LucideCheck, LucideChevronDown, LucideChevronRight, LucideDownload, LucideEye, LucideGraduationCap, LucideInfo, LucideShieldCheck, LucideUserRound, LucideX, } from '@lucide/angular';
import { take } from 'rxjs';
import { StudentMobileBottomNavComponent } from '../../../dashboard/components/student-mobile-bottom-nav/student-mobile-bottom-nav.component';
import { StudentSessionService } from '../../../shared/services/student-session.service';
import { StudentProfileFacade } from '../../data-access/student-profile.facade';
import * as i0 from "@angular/core";
const _forTrack0 = ($index, $item) => $item.id;
const _forTrack1 = ($index, $item) => $item.label;
function StudentProfileComponent_Conditional_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "img", 5);
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵproperty("src", ctx_r0.profile().identity.photoUrl, i0.ɵɵsanitizeUrl)("alt", ctx_r0.profile().identity.name);
} }
function StudentProfileComponent_Conditional_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "img", 6);
} }
function StudentProfileComponent_Conditional_23_For_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div")(1, "dt");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "dd");
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const field_r2 = ctx.$implicit;
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(field_r2.label);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(field_r2.value);
} }
function StudentProfileComponent_Conditional_23_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "dl");
    i0.ɵɵrepeaterCreate(1, StudentProfileComponent_Conditional_23_For_2_Template, 5, 2, "div", null, _forTrack1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵrepeater(ctx_r0.personalFields());
} }
function StudentProfileComponent_Conditional_30_For_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div")(1, "dt");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "dd");
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const field_r3 = ctx.$implicit;
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(field_r3.label);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(field_r3.value);
} }
function StudentProfileComponent_Conditional_30_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "dl");
    i0.ɵɵrepeaterCreate(1, StudentProfileComponent_Conditional_30_For_2_Template, 5, 2, "div", null, _forTrack1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵrepeater(ctx_r0.academicFields());
} }
function StudentProfileComponent_Conditional_37_For_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div")(1, "dt");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "dd");
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const field_r4 = ctx.$implicit;
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(field_r4.label);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(field_r4.value);
} }
function StudentProfileComponent_Conditional_37_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "dl");
    i0.ɵɵrepeaterCreate(1, StudentProfileComponent_Conditional_37_For_2_Template, 5, 2, "div", null, _forTrack1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵrepeater(ctx_r0.contactFields());
} }
function StudentProfileComponent_For_59_Template(rf, ctx) { if (rf & 1) {
    const _r5 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 36);
    i0.ɵɵlistener("click", function StudentProfileComponent_For_59_Template_button_click_0_listener() { const service_r6 = i0.ɵɵrestoreView(_r5).$implicit; const ctx_r0 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r0.openService(service_r6.id)); });
    i0.ɵɵelementStart(1, "span", 37);
    i0.ɵɵelement(2, "img", 38);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "span")(4, "strong");
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "small");
    i0.ɵɵtext(7);
    i0.ɵɵelementEnd()();
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(8, "svg", 39);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const service_r6 = ctx.$implicit;
    i0.ɵɵclassMap("student-profile-service-card student-profile-service-card--" + service_r6.tone);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("src", service_r6.image, i0.ɵɵsanitizeUrl);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(service_r6.title);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(service_r6.description);
} }
function StudentProfileComponent_Conditional_88_Case_15_Template(rf, ctx) { if (rf & 1) {
    const _r8 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 50)(1, "div", 51);
    i0.ɵɵelement(2, "img", 52);
    i0.ɵɵelementStart(3, "span")(4, "strong");
    i0.ɵɵtext(5, "GEHU");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "small");
    i0.ɵɵtext(7, "Graphic Era (Deemed to be University)");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(8, "div", 53)(9, "div")(10, "h3");
    i0.ɵɵtext(11);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(12, "p");
    i0.ɵɵtext(13, "Student ID ");
    i0.ɵɵelementStart(14, "strong");
    i0.ɵɵtext(15);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(16, "p");
    i0.ɵɵtext(17);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(18, "p");
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(19, "svg", 54);
    i0.ɵɵtext(20);
    i0.ɵɵelementEnd()();
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(21, "span", 55);
    i0.ɵɵtext(22);
    i0.ɵɵelementEnd();
    i0.ɵɵelement(23, "span", 56);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(24, "div", 57)(25, "span");
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(26, "svg", 58);
    i0.ɵɵelementEnd();
    i0.ɵɵtext(27, "University verified");
    i0.ɵɵelementEnd()();
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(28, "p", 59);
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(29, "svg", 60);
    i0.ɵɵtext(30, "Official university credential");
    i0.ɵɵelementEnd();
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(31, "div", 61)(32, "button", 30);
    i0.ɵɵlistener("click", function StudentProfileComponent_Conditional_88_Case_15_Template_button_click_32_listener() { i0.ɵɵrestoreView(_r8); const ctx_r0 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r0.closeService()); });
    i0.ɵɵtext(33, "Close");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(34, "button", 28);
    i0.ɵɵlistener("click", function StudentProfileComponent_Conditional_88_Case_15_Template_button_click_34_listener() { i0.ɵɵrestoreView(_r8); const ctx_r0 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r0.downloadId()); });
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(35, "svg", 31);
    i0.ɵɵtext(36, "Download ID");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(11);
    i0.ɵɵtextInterpolate(ctx_r0.profile().identity.name);
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(ctx_r0.profile().identity.studentId);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate3("", ctx_r0.profile().academic.branch, " \u00B7 Semester ", ctx_r0.profile().academic.semester, " \u00B7 ", ctx_r0.profile().academic.section);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(ctx_r0.profile().academic.campus);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r0.initials());
} }
function StudentProfileComponent_Conditional_88_Case_16_For_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "article")(1, "small");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "strong");
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const field_r9 = ctx.$implicit;
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(field_r9.label);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(field_r9.value);
} }
function StudentProfileComponent_Conditional_88_Case_16_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 48);
    i0.ɵɵrepeaterCreate(1, StudentProfileComponent_Conditional_88_Case_16_For_2_Template, 5, 2, "article", null, _forTrack1);
    i0.ɵɵelementStart(3, "article")(4, "small");
    i0.ɵɵtext(5, "Gender");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "strong");
    i0.ɵɵtext(7);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(8, "article")(9, "small");
    i0.ɵɵtext(10, "Blood Group");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(11, "strong");
    i0.ɵɵtext(12);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(13, "article", 62)(14, "small");
    i0.ɵɵtext(15, "Address");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(16, "strong");
    i0.ɵɵtext(17);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵrepeater(ctx_r0.personalFields());
    i0.ɵɵadvance(6);
    i0.ɵɵtextInterpolate(ctx_r0.present(ctx_r0.profile().personal.gender));
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(ctx_r0.present(ctx_r0.profile().personal.bloodGroup));
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(ctx_r0.present(ctx_r0.profile().personal.address));
} }
function StudentProfileComponent_Conditional_88_Case_17_For_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "article")(1, "small");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "strong");
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const field_r10 = ctx.$implicit;
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(field_r10.label);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(field_r10.value);
} }
function StudentProfileComponent_Conditional_88_Case_17_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 48);
    i0.ɵɵrepeaterCreate(1, StudentProfileComponent_Conditional_88_Case_17_For_2_Template, 5, 2, "article", null, _forTrack1);
    i0.ɵɵelementStart(3, "article")(4, "small");
    i0.ɵɵtext(5, "Academic Session");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "strong");
    i0.ɵɵtext(7);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(8, "article")(9, "small");
    i0.ɵɵtext(10, "Campus");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(11, "strong");
    i0.ɵɵtext(12);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵrepeater(ctx_r0.academicFields());
    i0.ɵɵadvance(6);
    i0.ɵɵtextInterpolate(ctx_r0.profile().academic.academicSession);
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(ctx_r0.profile().academic.campus);
} }
function StudentProfileComponent_Conditional_88_Case_18_For_2_For_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p")(1, "small");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "strong");
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const field_r11 = ctx.$implicit;
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(field_r11.label);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(field_r11.value);
} }
function StudentProfileComponent_Conditional_88_Case_18_For_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "article")(1, "span");
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(2, "svg", 64);
    i0.ɵɵelementEnd();
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(3, "div")(4, "h3");
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd();
    i0.ɵɵrepeaterCreate(6, StudentProfileComponent_Conditional_88_Case_18_For_2_For_7_Template, 5, 2, "p", null, _forTrack1);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "em");
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(9, "svg", 65);
    i0.ɵɵtext(10, "Verified");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const record_r12 = ctx.$implicit;
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(record_r12.title);
    i0.ɵɵadvance();
    i0.ɵɵrepeater(record_r12.fields);
} }
function StudentProfileComponent_Conditional_88_Case_18_ForEmpty_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 63);
    i0.ɵɵelement(1, "img", 66);
    i0.ɵɵelementStart(2, "strong");
    i0.ɵɵtext(3, "No education records available");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "p");
    i0.ɵɵtext(5, "Verified qualification records will appear here.");
    i0.ɵɵelementEnd()();
} }
function StudentProfileComponent_Conditional_88_Case_18_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 49);
    i0.ɵɵrepeaterCreate(1, StudentProfileComponent_Conditional_88_Case_18_For_2_Template, 11, 1, "article", null, _forTrack0, false, StudentProfileComponent_Conditional_88_Case_18_ForEmpty_3_Template, 6, 0, "div", 63);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵrepeater(ctx_r0.profile().educationRecords);
} }
function StudentProfileComponent_Conditional_88_Case_19_For_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "a", 67)(1, "span");
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(2, "svg", 68);
    i0.ɵɵelementEnd();
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(3, "div")(4, "h3");
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "p");
    i0.ɵɵtext(7);
    i0.ɵɵelementEnd()();
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(8, "svg", 69);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const document_r13 = ctx.$implicit;
    i0.ɵɵproperty("href", document_r13.url, i0.ɵɵsanitizeUrl);
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(document_r13.name);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(document_r13.category);
} }
function StudentProfileComponent_Conditional_88_Case_19_ForEmpty_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 63);
    i0.ɵɵelement(1, "img", 70);
    i0.ɵɵelementStart(2, "strong");
    i0.ɵɵtext(3, "No documents available");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "p");
    i0.ɵɵtext(5, "Documents uploaded with your admission record will appear here.");
    i0.ɵɵelementEnd()();
} }
function StudentProfileComponent_Conditional_88_Case_19_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 49);
    i0.ɵɵrepeaterCreate(1, StudentProfileComponent_Conditional_88_Case_19_For_2_Template, 9, 3, "a", 67, _forTrack0, false, StudentProfileComponent_Conditional_88_Case_19_ForEmpty_3_Template, 6, 0, "div", 63);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵrepeater(ctx_r0.profile().documents);
} }
function StudentProfileComponent_Conditional_88_Case_20_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 71)(1, "article");
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(2, "svg", 72);
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(3, "span")(4, "small");
    i0.ɵɵtext(5, "Account status");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "strong");
    i0.ɵɵtext(7);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(8, "article");
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(9, "svg", 73);
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(10, "span")(11, "small");
    i0.ɵɵtext(12, "Last sign in");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(13, "strong");
    i0.ɵɵtext(14);
    i0.ɵɵpipe(15, "date");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(16, "article");
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(17, "svg", 73);
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(18, "span")(19, "small");
    i0.ɵɵtext(20, "Official email");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(21, "strong");
    i0.ɵɵtext(22);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(23, "article");
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(24, "svg", 73);
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(25, "span")(26, "small");
    i0.ɵɵtext(27, "Registered mobile");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(28, "strong");
    i0.ɵɵtext(29);
    i0.ɵɵelementEnd()()()();
    i0.ɵɵelementStart(30, "div", 74);
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(31, "svg", 75);
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(32, "span")(33, "strong");
    i0.ɵɵtext(34, "Need help with your profile?");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(35, "p");
    i0.ɵɵtext(36, "Contact the university student support desk for verified record corrections.");
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(7);
    i0.ɵɵtextInterpolate(ctx_r0.profile().security.accountActive ? "Active and protected" : "Inactive");
    i0.ɵɵadvance(7);
    i0.ɵɵtextInterpolate(ctx_r0.profile().security.lastLoginAt ? i0.ɵɵpipeBind2(15, 4, ctx_r0.profile().security.lastLoginAt, "medium") : "Not available");
    i0.ɵɵadvance(8);
    i0.ɵɵtextInterpolate(ctx_r0.profile().contact.officialEmail);
    i0.ɵɵadvance(7);
    i0.ɵɵtextInterpolate(ctx_r0.profile().contact.mobile);
} }
function StudentProfileComponent_Conditional_88_Template(rf, ctx) { if (rf & 1) {
    const _r7 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 35)(1, "button", 40);
    i0.ɵɵlistener("click", function StudentProfileComponent_Conditional_88_Template_button_click_1_listener() { i0.ɵɵrestoreView(_r7); const ctx_r0 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r0.closeService()); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(2, "section", 41);
    i0.ɵɵelement(3, "span", 42);
    i0.ɵɵelementStart(4, "header")(5, "span");
    i0.ɵɵelement(6, "img", 43);
    i0.ɵɵelementStart(7, "span")(8, "h2", 44);
    i0.ɵɵtext(9);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(10, "p");
    i0.ɵɵtext(11);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(12, "button", 45);
    i0.ɵɵlistener("click", function StudentProfileComponent_Conditional_88_Template_button_click_12_listener() { i0.ɵɵrestoreView(_r7); const ctx_r0 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r0.closeService()); });
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(13, "svg", 46);
    i0.ɵɵelementEnd()();
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(14, "div", 47);
    i0.ɵɵconditionalCreate(15, StudentProfileComponent_Conditional_88_Case_15_Template, 37, 7)(16, StudentProfileComponent_Conditional_88_Case_16_Template, 18, 3, "div", 48)(17, StudentProfileComponent_Conditional_88_Case_17_Template, 13, 2, "div", 48)(18, StudentProfileComponent_Conditional_88_Case_18_Template, 4, 1, "div", 49)(19, StudentProfileComponent_Conditional_88_Case_19_Template, 4, 1, "div", 49)(20, StudentProfileComponent_Conditional_88_Case_20_Template, 37, 7);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    let tmp_10_0;
    const service_r14 = ctx;
    i0.ɵɵadvance();
    i0.ɵɵariaProperty("aria-label", i0.ɵɵinterpolate1("Close ", service_r14.title));
    i0.ɵɵadvance();
    i0.ɵɵproperty("cdkTrapFocusAutoCapture", true);
    i0.ɵɵattribute("aria-labelledby", service_r14.id + "-dialog-title");
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("src", service_r14.image, i0.ɵɵsanitizeUrl);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("id", service_r14.id + "-dialog-title");
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(service_r14.title);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(service_r14.description);
    i0.ɵɵadvance();
    i0.ɵɵariaProperty("aria-label", i0.ɵɵinterpolate1("Close ", service_r14.title));
    i0.ɵɵadvance(3);
    i0.ɵɵconditional((tmp_10_0 = service_r14.id) === "digital-id" ? 15 : tmp_10_0 === "personal" ? 16 : tmp_10_0 === "academic" ? 17 : tmp_10_0 === "education" ? 18 : tmp_10_0 === "documents" ? 19 : tmp_10_0 === "security" ? 20 : -1);
} }
const ASSET = '/assets/student/profile-icons';
export class StudentProfileComponent {
    facade = inject(StudentProfileFacade);
    session = inject(StudentSessionService);
    route = inject(ActivatedRoute);
    destroyRef = inject(DestroyRef);
    viewModel = signal(this.facade.loading(this.session.profile()), ...(ngDevMode ? [{ debugName: "viewModel" }] : /* istanbul ignore next */ []));
    selectedServiceId = signal(null, ...(ngDevMode ? [{ debugName: "selectedServiceId" }] : /* istanbul ignore next */ []));
    expandedSections = signal({ personal: true, academic: true, contact: true }, ...(ngDevMode ? [{ debugName: "expandedSections" }] : /* istanbul ignore next */ []));
    services = [
        { id: 'digital-id', title: 'Digital ID', description: 'View or download', image: `${ASSET}/digital-id.webp`, tone: 'blue' },
        { id: 'personal', title: 'Personal Details', description: 'Identity & contact', image: `${ASSET}/personal-details.webp`, tone: 'teal' },
        { id: 'academic', title: 'Academic Profile', description: 'Program & semester', image: `${ASSET}/academic-profile.webp`, tone: 'blue' },
        { id: 'education', title: 'Education Records', description: 'School qualifications', image: `${ASSET}/education-records.webp`, tone: 'violet' },
        { id: 'documents', title: 'Documents', description: 'Verified documents', image: `${ASSET}/documents.webp`, tone: 'blue' },
        { id: 'security', title: 'Security & Support', description: 'Account assistance', image: `${ASSET}/security-support.webp`, tone: 'green' },
    ];
    activeService = computed(() => this.services.find((item) => item.id === this.selectedServiceId()) ?? null, ...(ngDevMode ? [{ debugName: "activeService" }] : /* istanbul ignore next */ []));
    profile = computed(() => this.viewModel().profile, ...(ngDevMode ? [{ debugName: "profile" }] : /* istanbul ignore next */ []));
    personalFields = computed(() => [
        { label: 'Date of Birth', value: this.present(this.profile().personal.dateOfBirth) },
        { label: 'Father Name', value: this.present(this.profile().personal.fatherName) },
        { label: 'Mother Name', value: this.present(this.profile().personal.motherName) },
    ], ...(ngDevMode ? [{ debugName: "personalFields" }] : /* istanbul ignore next */ []));
    academicFields = computed(() => [
        { label: 'College', value: this.present(this.profile().academic.college) },
        { label: 'Course', value: this.present(this.profile().academic.course) },
        { label: 'Branch', value: this.present(this.profile().academic.branch) },
        { label: 'Semester', value: String(this.profile().academic.semester || 'Not provided') },
        { label: 'Section', value: this.present(this.profile().academic.section) },
        { label: 'Specialization', value: this.present(this.profile().academic.specialization) },
    ], ...(ngDevMode ? [{ debugName: "academicFields" }] : /* istanbul ignore next */ []));
    contactFields = computed(() => [
        { label: 'Official Email', value: this.present(this.profile().contact.officialEmail) },
        { label: 'Personal Email', value: this.present(this.profile().contact.personalEmail) },
        { label: 'Mobile Number', value: this.present(this.profile().contact.mobile) },
    ], ...(ngDevMode ? [{ debugName: "contactFields" }] : /* istanbul ignore next */ []));
    constructor() {
        this.destroyRef.onDestroy(() => {
            document.body.style.overflow = '';
        });
        this.load();
        this.route.queryParamMap.pipe(takeUntilDestroyed(this.destroyRef)).subscribe((params) => {
            const requested = params.get('view');
            if (requested && this.services.some((service) => service.id === requested))
                this.openService(requested);
        });
    }
    load() {
        const token = this.session.token();
        if (!token) {
            this.viewModel.set({ ...this.facade.loading(this.session.profile()), state: 'loaded' });
            return;
        }
        this.facade.load(token, this.session.profile()).pipe(take(1)).subscribe((value) => this.viewModel.set(value));
    }
    openService(id) {
        this.selectedServiceId.set(id);
        document.body.style.overflow = 'hidden';
    }
    closeService() {
        if (!this.selectedServiceId())
            return;
        this.selectedServiceId.set(null);
        document.body.style.overflow = '';
    }
    toggleSection(id) {
        this.expandedSections.update((current) => ({ ...current, [id]: !current[id] }));
    }
    downloadId() {
        const profile = this.profile();
        const content = `<svg xmlns="http://www.w3.org/2000/svg" width="1000" height="620" viewBox="0 0 1000 620"><defs><linearGradient id="g" x2="1" y2="1"><stop stop-color="midnightblue"/><stop offset="1" stop-color="royalblue"/></linearGradient></defs><rect width="1000" height="620" rx="34" fill="url(#g)"/><rect x="24" y="24" width="952" height="572" rx="26" fill="none" stroke="gold" stroke-width="4"/><text x="70" y="105" fill="white" font-family="Arial" font-size="56" font-weight="700">GEHU</text><text x="70" y="146" fill="white" font-family="Arial" font-size="24">Graphic Era (Deemed to be University)</text><line x1="70" y1="170" x2="610" y2="170" stroke="gold" stroke-width="3"/><text x="70" y="255" fill="white" font-family="Arial" font-size="42" font-weight="700">${escapeXml(profile.identity.name)}</text><text x="70" y="318" fill="white" font-family="Arial" font-size="28">Student ID  <tspan fill="gold" font-weight="700">${escapeXml(profile.identity.studentId)}</tspan></text><text x="70" y="374" fill="white" font-family="Arial" font-size="25">${escapeXml(profile.academic.branch)} · Semester ${profile.academic.semester} · ${escapeXml(profile.academic.section)}</text><text x="70" y="430" fill="white" font-family="Arial" font-size="23">${escapeXml(profile.academic.campus)}</text><circle cx="820" cy="200" r="88" fill="white" opacity=".16"/><text x="820" y="222" text-anchor="middle" fill="white" font-family="Arial" font-size="52" font-weight="700">${escapeXml(this.initials())}</text><circle cx="120" cy="520" r="36" fill="gold"/><path d="M103 520l12 13 24-29" fill="none" stroke="midnightblue" stroke-width="10"/><text x="175" y="531" fill="gold" font-family="Arial" font-size="26" font-weight="700">UNIVERSITY VERIFIED</text></svg>`;
        const url = URL.createObjectURL(new Blob([content], { type: 'image/svg+xml' }));
        const link = document.createElement('a');
        link.href = url;
        link.download = `${profile.identity.studentId || 'student'}-digital-id.svg`;
        link.click();
        URL.revokeObjectURL(url);
    }
    initials() {
        return this.profile().identity.name.split(/\s+/).slice(0, 2).map((part) => part[0]?.toUpperCase()).join('') || 'ST';
    }
    present(value) {
        return value?.trim() || 'Not provided';
    }
    closeOnEscape() {
        this.closeService();
    }
    static ɵfac = function StudentProfileComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || StudentProfileComponent)(); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: StudentProfileComponent, selectors: [["erp-student-profile-page"]], hostBindings: function StudentProfileComponent_HostBindings(rf, ctx) { if (rf & 1) {
            i0.ɵɵlistener("keydown.escape", function StudentProfileComponent_keydown_escape_HostBindingHandler() { return ctx.closeOnEscape(); }, i0.ɵɵresolveDocument);
        } }, decls: 90, vars: 15, consts: [["aria-labelledby", "student-profile-title", 1, "student-profile-page"], [1, "student-profile-layout"], ["aria-label", "Student summary and information", 1, "student-profile-summary"], [1, "student-profile-summary__identity"], [1, "student-profile-photo"], [3, "src", "alt"], ["src", "/assets/student/profile-icons/profile-identity.webp", "alt", ""], [1, "student-profile-status"], [1, "student-profile-summary__id"], [1, "student-profile-information"], [1, "student-profile-info-group"], ["type", "button", 3, "click"], ["lucideUserRound", "", "size", "18", "aria-hidden", "true"], ["lucideChevronDown", "", "size", "17", "aria-hidden", "true", 1, "student-profile-info-group__chevron"], ["lucideGraduationCap", "", "size", "19", "aria-hidden", "true"], ["lucideMail", "", "size", "18", "aria-hidden", "true"], [1, "student-profile-content"], [1, "student-profile-hero"], ["id", "student-profile-title"], [1, "student-profile-verification"], ["lucideCheck", "", "size", "15", "aria-hidden", "true"], ["src", "/assets/student/profile-icons/profile-hero.webp", "width", "700", "height", "362", "alt", "", "aria-hidden", "true"], ["aria-labelledby", "profile-services-title", 1, "student-profile-services"], ["id", "profile-services-title"], [1, "student-profile-services__grid"], ["type", "button", 1, "student-profile-service-card", 3, "class"], [1, "student-profile-id-action"], ["src", "/assets/student/profile-icons/digital-id.webp", "width", "74", "height", "74", "alt", "", "loading", "lazy"], ["type", "button", 1, "student-profile-primary-action", 3, "click"], ["lucideEye", "", "size", "18", "aria-hidden", "true"], ["type", "button", 1, "student-profile-outline-action", 3, "click"], ["lucideDownload", "", "size", "18", "aria-hidden", "true"], ["lucideShieldCheck", "", "size", "19", "aria-hidden", "true"], [1, "student-profile-sync-note"], ["lucideInfo", "", "size", "19", "aria-hidden", "true"], [1, "student-profile-dialog-layer"], ["type", "button", 1, "student-profile-service-card", 3, "click"], [1, "student-profile-service-card__art"], ["width", "104", "height", "104", "alt", "", "loading", "lazy", 3, "src"], ["lucideChevronRight", "", "size", "20", "aria-hidden", "true"], ["type", "button", 1, "student-profile-dialog__backdrop", 3, "click", "aria-label"], ["role", "dialog", "aria-modal", "true", "cdkTrapFocus", "", 1, "student-profile-dialog", 3, "cdkTrapFocusAutoCapture"], ["aria-hidden", "true", 1, "student-profile-dialog__handle"], ["width", "64", "height", "64", "alt", "", 3, "src"], [3, "id"], ["type", "button", 3, "click", "aria-label"], ["lucideX", "", "size", "22", "aria-hidden", "true"], [1, "student-profile-dialog__content"], [1, "student-profile-detail-grid"], [1, "student-profile-record-list"], ["aria-label", "Digital student ID preview", 1, "student-digital-id"], [1, "student-digital-id__brand"], ["src", "/assets/images/brand/graphic-era-mark.png", "width", "64", "height", "64", "alt", ""], [1, "student-digital-id__body"], ["lucideInfo", "", "size", "18", "aria-hidden", "true"], [1, "student-digital-id__portrait"], ["aria-hidden", "true", 1, "student-digital-id__qr"], [1, "student-digital-id__verified"], ["lucideCheck", "", "size", "19", "aria-hidden", "true"], [1, "student-profile-dialog__security"], ["lucideShieldCheck", "", "size", "20", "aria-hidden", "true"], [1, "student-profile-dialog__actions"], [1, "student-profile-detail-grid__wide"], [1, "student-profile-empty"], ["lucideGraduationCap", "", "size", "22", "aria-hidden", "true"], ["lucideCheck", "", "size", "14", "aria-hidden", "true"], ["src", "/assets/student/profile-icons/education-records.webp", "width", "100", "height", "100", "alt", ""], ["target", "_blank", "rel", "noopener", 3, "href"], ["lucideShieldCheck", "", "size", "22", "aria-hidden", "true"], ["lucideChevronRight", "", "size", "18", "aria-hidden", "true"], ["src", "/assets/student/profile-icons/documents.webp", "width", "108", "height", "108", "alt", ""], [1, "student-profile-security-grid"], ["lucideShieldCheck", "", "size", "25", "aria-hidden", "true"], ["lucideInfo", "", "size", "25", "aria-hidden", "true"], [1, "student-profile-support"], ["lucideShieldCheck", "", "size", "29", "aria-hidden", "true"]], template: function StudentProfileComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "main", 0)(1, "section", 1)(2, "aside", 2)(3, "header", 3)(4, "span", 4);
            i0.ɵɵconditionalCreate(5, StudentProfileComponent_Conditional_5_Template, 1, 2, "img", 5)(6, StudentProfileComponent_Conditional_6_Template, 1, 0, "img", 6);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(7, "h2");
            i0.ɵɵtext(8);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(9, "span", 7);
            i0.ɵɵelement(10, "i");
            i0.ɵɵtext(11);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(12, "small");
            i0.ɵɵtext(13, "Student ID");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(14, "strong", 8);
            i0.ɵɵtext(15);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(16, "div", 9)(17, "section", 10)(18, "button", 11);
            i0.ɵɵlistener("click", function StudentProfileComponent_Template_button_click_18_listener() { return ctx.toggleSection("personal"); });
            i0.ɵɵelementStart(19, "span");
            i0.ɵɵnamespaceSVG();
            i0.ɵɵelement(20, "svg", 12);
            i0.ɵɵtext(21, "Personal");
            i0.ɵɵelementEnd();
            i0.ɵɵelement(22, "svg", 13);
            i0.ɵɵelementEnd();
            i0.ɵɵconditionalCreate(23, StudentProfileComponent_Conditional_23_Template, 3, 0, "dl");
            i0.ɵɵelementEnd();
            i0.ɵɵnamespaceHTML();
            i0.ɵɵelementStart(24, "section", 10)(25, "button", 11);
            i0.ɵɵlistener("click", function StudentProfileComponent_Template_button_click_25_listener() { return ctx.toggleSection("academic"); });
            i0.ɵɵelementStart(26, "span");
            i0.ɵɵnamespaceSVG();
            i0.ɵɵelement(27, "svg", 14);
            i0.ɵɵtext(28, "Academic");
            i0.ɵɵelementEnd();
            i0.ɵɵelement(29, "svg", 13);
            i0.ɵɵelementEnd();
            i0.ɵɵconditionalCreate(30, StudentProfileComponent_Conditional_30_Template, 3, 0, "dl");
            i0.ɵɵelementEnd();
            i0.ɵɵnamespaceHTML();
            i0.ɵɵelementStart(31, "section", 10)(32, "button", 11);
            i0.ɵɵlistener("click", function StudentProfileComponent_Template_button_click_32_listener() { return ctx.toggleSection("contact"); });
            i0.ɵɵelementStart(33, "span");
            i0.ɵɵnamespaceSVG();
            i0.ɵɵelement(34, "svg", 15);
            i0.ɵɵtext(35, "Contact");
            i0.ɵɵelementEnd();
            i0.ɵɵelement(36, "svg", 13);
            i0.ɵɵelementEnd();
            i0.ɵɵconditionalCreate(37, StudentProfileComponent_Conditional_37_Template, 3, 0, "dl");
            i0.ɵɵelementEnd()()();
            i0.ɵɵnamespaceHTML();
            i0.ɵɵelementStart(38, "div", 16)(39, "header", 17)(40, "div")(41, "h1", 18);
            i0.ɵɵtext(42, "Student ");
            i0.ɵɵelementStart(43, "span");
            i0.ɵɵtext(44, "Profile");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(45, "p");
            i0.ɵɵtext(46, "Your verified university identity and records");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(47, "span", 19);
            i0.ɵɵnamespaceSVG();
            i0.ɵɵelement(48, "svg", 20);
            i0.ɵɵtext(49, "Verified ");
            i0.ɵɵnamespaceHTML();
            i0.ɵɵelementStart(50, "i");
            i0.ɵɵtext(51, "\u2022");
            i0.ɵɵelementEnd();
            i0.ɵɵtext(52, " Read-only");
            i0.ɵɵelementEnd()();
            i0.ɵɵelement(53, "img", 21);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(54, "section", 22)(55, "h2", 23);
            i0.ɵɵtext(56, "Profile services");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(57, "div", 24);
            i0.ɵɵrepeaterCreate(58, StudentProfileComponent_For_59_Template, 9, 5, "button", 25, _forTrack0);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(60, "section", 26);
            i0.ɵɵelement(61, "img", 27);
            i0.ɵɵelementStart(62, "span")(63, "strong");
            i0.ɵɵtext(64, "Digital Student ID");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(65, "small");
            i0.ɵɵtext(66, "Access your university-issued identity");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(67, "div")(68, "button", 28);
            i0.ɵɵlistener("click", function StudentProfileComponent_Template_button_click_68_listener() { return ctx.openService("digital-id"); });
            i0.ɵɵnamespaceSVG();
            i0.ɵɵelement(69, "svg", 29);
            i0.ɵɵtext(70, "View ID");
            i0.ɵɵelementEnd();
            i0.ɵɵnamespaceHTML();
            i0.ɵɵelementStart(71, "button", 30);
            i0.ɵɵlistener("click", function StudentProfileComponent_Template_button_click_71_listener() { return ctx.downloadId(); });
            i0.ɵɵnamespaceSVG();
            i0.ɵɵelement(72, "svg", 31);
            i0.ɵɵtext(73, "Download ID");
            i0.ɵɵelementEnd()();
            i0.ɵɵnamespaceHTML();
            i0.ɵɵelementStart(74, "p");
            i0.ɵɵnamespaceSVG();
            i0.ɵɵelement(75, "svg", 32);
            i0.ɵɵtext(76, "University verified ");
            i0.ɵɵnamespaceHTML();
            i0.ɵɵelementStart(77, "i");
            i0.ɵɵtext(78, "\u2022");
            i0.ɵɵelementEnd();
            i0.ɵɵtext(79, " Opens securely in a popup");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(80, "footer", 33);
            i0.ɵɵnamespaceSVG();
            i0.ɵɵelement(81, "svg", 34);
            i0.ɵɵnamespaceHTML();
            i0.ɵɵelementStart(82, "span")(83, "strong");
            i0.ɵɵtext(84, "Profile records are synced from the university ERP");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(85, "small");
            i0.ɵɵtext(86);
            i0.ɵɵpipe(87, "date");
            i0.ɵɵelementEnd()()()()();
            i0.ɵɵconditionalCreate(88, StudentProfileComponent_Conditional_88_Template, 21, 11, "div", 35);
            i0.ɵɵelementEnd();
            i0.ɵɵelement(89, "erp-student-mobile-bottom-nav");
        } if (rf & 2) {
            let tmp_12_0;
            i0.ɵɵadvance(5);
            i0.ɵɵconditional(ctx.profile().identity.photoUrl ? 5 : 6);
            i0.ɵɵadvance(3);
            i0.ɵɵtextInterpolate(ctx.profile().identity.name);
            i0.ɵɵadvance(3);
            i0.ɵɵtextInterpolate(ctx.profile().identity.status === "active" ? "Active" : "Inactive");
            i0.ɵɵadvance(4);
            i0.ɵɵtextInterpolate(ctx.profile().identity.studentId);
            i0.ɵɵadvance(3);
            i0.ɵɵattribute("aria-expanded", ctx.expandedSections()["personal"]);
            i0.ɵɵadvance(5);
            i0.ɵɵconditional(ctx.expandedSections()["personal"] ? 23 : -1);
            i0.ɵɵadvance(2);
            i0.ɵɵattribute("aria-expanded", ctx.expandedSections()["academic"]);
            i0.ɵɵadvance(5);
            i0.ɵɵconditional(ctx.expandedSections()["academic"] ? 30 : -1);
            i0.ɵɵadvance(2);
            i0.ɵɵattribute("aria-expanded", ctx.expandedSections()["contact"]);
            i0.ɵɵadvance(5);
            i0.ɵɵconditional(ctx.expandedSections()["contact"] ? 37 : -1);
            i0.ɵɵadvance(21);
            i0.ɵɵrepeater(ctx.services);
            i0.ɵɵadvance(28);
            i0.ɵɵtextInterpolate1("Information is read-only and last synced ", i0.ɵɵpipeBind2(87, 12, ctx.profile().syncedAt, "medium"), ".");
            i0.ɵɵadvance(2);
            i0.ɵɵconditional((tmp_12_0 = ctx.activeService()) ? 88 : -1, tmp_12_0);
        } }, dependencies: [CdkTrapFocus,
            StudentMobileBottomNavComponent,
            LucideCheck,
            LucideChevronDown,
            LucideChevronRight,
            LucideDownload,
            LucideEye,
            LucideGraduationCap,
            LucideInfo,
            LucideShieldCheck,
            LucideUserRound,
            LucideX,
            DatePipe], encapsulation: 2, changeDetection: 0 });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(StudentProfileComponent, [{
        type: Component,
        args: [{ selector: 'erp-student-profile-page', imports: [
                    CdkTrapFocus,
                    DatePipe,
                    StudentMobileBottomNavComponent,
                    LucideCheck,
                    LucideChevronDown,
                    LucideChevronRight,
                    LucideDownload,
                    LucideEye,
                    LucideGraduationCap,
                    LucideInfo,
                    LucideShieldCheck,
                    LucideUserRound,
                    LucideX,
                ], changeDetection: ChangeDetectionStrategy.OnPush, template: "<main class=\"student-profile-page\" aria-labelledby=\"student-profile-title\">\n  <section class=\"student-profile-layout\">\n    <aside class=\"student-profile-summary\" aria-label=\"Student summary and information\">\n      <header class=\"student-profile-summary__identity\">\n        <span class=\"student-profile-photo\">\n          @if (profile().identity.photoUrl) {\n            <img [src]=\"profile().identity.photoUrl\" [alt]=\"profile().identity.name\" />\n          } @else {\n            <img src=\"/assets/student/profile-icons/profile-identity.webp\" alt=\"\" />\n          }\n        </span>\n        <h2>{{ profile().identity.name }}</h2>\n        <span class=\"student-profile-status\"><i></i>{{ profile().identity.status === 'active' ? 'Active' : 'Inactive' }}</span>\n        <small>Student ID</small>\n        <strong class=\"student-profile-summary__id\">{{ profile().identity.studentId }}</strong>\n      </header>\n\n      <div class=\"student-profile-information\">\n        <section class=\"student-profile-info-group\">\n          <button type=\"button\" [attr.aria-expanded]=\"expandedSections()['personal']\" (click)=\"toggleSection('personal')\">\n            <span><svg lucideUserRound size=\"18\" aria-hidden=\"true\"></svg>Personal</span><svg class=\"student-profile-info-group__chevron\" lucideChevronDown size=\"17\" aria-hidden=\"true\"></svg>\n          </button>\n          @if (expandedSections()['personal']) { <dl>@for (field of personalFields(); track field.label) { <div><dt>{{ field.label }}</dt><dd>{{ field.value }}</dd></div> }</dl> }\n        </section>\n        <section class=\"student-profile-info-group\">\n          <button type=\"button\" [attr.aria-expanded]=\"expandedSections()['academic']\" (click)=\"toggleSection('academic')\">\n            <span><svg lucideGraduationCap size=\"19\" aria-hidden=\"true\"></svg>Academic</span><svg class=\"student-profile-info-group__chevron\" lucideChevronDown size=\"17\" aria-hidden=\"true\"></svg>\n          </button>\n          @if (expandedSections()['academic']) { <dl>@for (field of academicFields(); track field.label) { <div><dt>{{ field.label }}</dt><dd>{{ field.value }}</dd></div> }</dl> }\n        </section>\n        <section class=\"student-profile-info-group\">\n          <button type=\"button\" [attr.aria-expanded]=\"expandedSections()['contact']\" (click)=\"toggleSection('contact')\">\n            <span><svg lucideMail size=\"18\" aria-hidden=\"true\"></svg>Contact</span><svg class=\"student-profile-info-group__chevron\" lucideChevronDown size=\"17\" aria-hidden=\"true\"></svg>\n          </button>\n          @if (expandedSections()['contact']) { <dl>@for (field of contactFields(); track field.label) { <div><dt>{{ field.label }}</dt><dd>{{ field.value }}</dd></div> }</dl> }\n        </section>\n      </div>\n    </aside>\n\n    <div class=\"student-profile-content\">\n      <header class=\"student-profile-hero\">\n        <div>\n          <h1 id=\"student-profile-title\">Student <span>Profile</span></h1>\n          <p>Your verified university identity and records</p>\n          <span class=\"student-profile-verification\"><svg lucideCheck size=\"15\" aria-hidden=\"true\"></svg>Verified <i>\u2022</i> Read-only</span>\n        </div>\n        <img src=\"/assets/student/profile-icons/profile-hero.webp\" width=\"700\" height=\"362\" alt=\"\" aria-hidden=\"true\" />\n      </header>\n\n      <section class=\"student-profile-services\" aria-labelledby=\"profile-services-title\">\n        <h2 id=\"profile-services-title\">Profile services</h2>\n        <div class=\"student-profile-services__grid\">\n          @for (service of services; track service.id) {\n            <button class=\"student-profile-service-card\" [class]=\"'student-profile-service-card student-profile-service-card--' + service.tone\" type=\"button\" (click)=\"openService(service.id)\">\n              <span class=\"student-profile-service-card__art\"><img [src]=\"service.image\" width=\"104\" height=\"104\" alt=\"\" loading=\"lazy\" /></span>\n              <span><strong>{{ service.title }}</strong><small>{{ service.description }}</small></span>\n              <svg lucideChevronRight size=\"20\" aria-hidden=\"true\"></svg>\n            </button>\n          }\n        </div>\n      </section>\n\n      <section class=\"student-profile-id-action\">\n        <img src=\"/assets/student/profile-icons/digital-id.webp\" width=\"74\" height=\"74\" alt=\"\" loading=\"lazy\" />\n        <span><strong>Digital Student ID</strong><small>Access your university-issued identity</small></span>\n        <div>\n          <button type=\"button\" class=\"student-profile-primary-action\" (click)=\"openService('digital-id')\"><svg lucideEye size=\"18\" aria-hidden=\"true\"></svg>View ID</button>\n          <button type=\"button\" class=\"student-profile-outline-action\" (click)=\"downloadId()\"><svg lucideDownload size=\"18\" aria-hidden=\"true\"></svg>Download ID</button>\n        </div>\n        <p><svg lucideShieldCheck size=\"19\" aria-hidden=\"true\"></svg>University verified <i>\u2022</i> Opens securely in a popup</p>\n      </section>\n\n      <footer class=\"student-profile-sync-note\">\n        <svg lucideInfo size=\"19\" aria-hidden=\"true\"></svg>\n        <span><strong>Profile records are synced from the university ERP</strong><small>Information is read-only and last synced {{ profile().syncedAt | date: 'medium' }}.</small></span>\n      </footer>\n    </div>\n  </section>\n\n  @if (activeService(); as service) {\n    <div class=\"student-profile-dialog-layer\">\n      <button class=\"student-profile-dialog__backdrop\" type=\"button\" aria-label=\"Close {{ service.title }}\" (click)=\"closeService()\"></button>\n      <section class=\"student-profile-dialog\" role=\"dialog\" aria-modal=\"true\" [attr.aria-labelledby]=\"service.id + '-dialog-title'\" cdkTrapFocus [cdkTrapFocusAutoCapture]=\"true\">\n        <span class=\"student-profile-dialog__handle\" aria-hidden=\"true\"></span>\n        <header>\n          <span><img [src]=\"service.image\" width=\"64\" height=\"64\" alt=\"\" /><span><h2 [id]=\"service.id + '-dialog-title'\">{{ service.title }}</h2><p>{{ service.description }}</p></span></span>\n          <button type=\"button\" aria-label=\"Close {{ service.title }}\" (click)=\"closeService()\"><svg lucideX size=\"22\" aria-hidden=\"true\"></svg></button>\n        </header>\n\n        <div class=\"student-profile-dialog__content\">\n          @switch (service.id) {\n            @case ('digital-id') {\n              <div class=\"student-digital-id\" aria-label=\"Digital student ID preview\">\n                <div class=\"student-digital-id__brand\"><img src=\"/assets/images/brand/graphic-era-mark.png\" width=\"64\" height=\"64\" alt=\"\" /><span><strong>GEHU</strong><small>Graphic Era (Deemed to be University)</small></span></div>\n                <div class=\"student-digital-id__body\"><div><h3>{{ profile().identity.name }}</h3><p>Student ID <strong>{{ profile().identity.studentId }}</strong></p><p>{{ profile().academic.branch }} \u00B7 Semester {{ profile().academic.semester }} \u00B7 {{ profile().academic.section }}</p><p><svg lucideInfo size=\"18\" aria-hidden=\"true\"></svg>{{ profile().academic.campus }}</p></div><span class=\"student-digital-id__portrait\">{{ initials() }}</span><span class=\"student-digital-id__qr\" aria-hidden=\"true\"></span></div>\n                <div class=\"student-digital-id__verified\"><span><svg lucideCheck size=\"19\" aria-hidden=\"true\"></svg></span>University verified</div>\n              </div>\n              <p class=\"student-profile-dialog__security\"><svg lucideShieldCheck size=\"20\" aria-hidden=\"true\"></svg>Official university credential</p>\n              <div class=\"student-profile-dialog__actions\"><button type=\"button\" class=\"student-profile-outline-action\" (click)=\"closeService()\">Close</button><button type=\"button\" class=\"student-profile-primary-action\" (click)=\"downloadId()\"><svg lucideDownload size=\"18\" aria-hidden=\"true\"></svg>Download ID</button></div>\n            }\n            @case ('personal') {\n              <div class=\"student-profile-detail-grid\">@for (field of personalFields(); track field.label) { <article><small>{{ field.label }}</small><strong>{{ field.value }}</strong></article> }<article><small>Gender</small><strong>{{ present(profile().personal.gender) }}</strong></article><article><small>Blood Group</small><strong>{{ present(profile().personal.bloodGroup) }}</strong></article><article class=\"student-profile-detail-grid__wide\"><small>Address</small><strong>{{ present(profile().personal.address) }}</strong></article></div>\n            }\n            @case ('academic') {\n              <div class=\"student-profile-detail-grid\">@for (field of academicFields(); track field.label) { <article><small>{{ field.label }}</small><strong>{{ field.value }}</strong></article> }<article><small>Academic Session</small><strong>{{ profile().academic.academicSession }}</strong></article><article><small>Campus</small><strong>{{ profile().academic.campus }}</strong></article></div>\n            }\n            @case ('education') {\n              <div class=\"student-profile-record-list\">@for (record of profile().educationRecords; track record.id) { <article><span><svg lucideGraduationCap size=\"22\" aria-hidden=\"true\"></svg></span><div><h3>{{ record.title }}</h3>@for (field of record.fields; track field.label) { <p><small>{{ field.label }}</small><strong>{{ field.value }}</strong></p> }</div><em><svg lucideCheck size=\"14\" aria-hidden=\"true\"></svg>Verified</em></article> } @empty { <div class=\"student-profile-empty\"><img src=\"/assets/student/profile-icons/education-records.webp\" width=\"100\" height=\"100\" alt=\"\" /><strong>No education records available</strong><p>Verified qualification records will appear here.</p></div> }</div>\n            }\n            @case ('documents') {\n              <div class=\"student-profile-record-list\">@for (document of profile().documents; track document.id) { <a [href]=\"document.url\" target=\"_blank\" rel=\"noopener\"><span><svg lucideShieldCheck size=\"22\" aria-hidden=\"true\"></svg></span><div><h3>{{ document.name }}</h3><p>{{ document.category }}</p></div><svg lucideChevronRight size=\"18\" aria-hidden=\"true\"></svg></a> } @empty { <div class=\"student-profile-empty\"><img src=\"/assets/student/profile-icons/documents.webp\" width=\"108\" height=\"108\" alt=\"\" /><strong>No documents available</strong><p>Documents uploaded with your admission record will appear here.</p></div> }</div>\n            }\n            @case ('security') {\n              <div class=\"student-profile-security-grid\"><article><svg lucideShieldCheck size=\"25\" aria-hidden=\"true\"></svg><span><small>Account status</small><strong>{{ profile().security.accountActive ? 'Active and protected' : 'Inactive' }}</strong></span></article><article><svg lucideInfo size=\"25\" aria-hidden=\"true\"></svg><span><small>Last sign in</small><strong>{{ profile().security.lastLoginAt ? (profile().security.lastLoginAt | date: 'medium') : 'Not available' }}</strong></span></article><article><svg lucideInfo size=\"25\" aria-hidden=\"true\"></svg><span><small>Official email</small><strong>{{ profile().contact.officialEmail }}</strong></span></article><article><svg lucideInfo size=\"25\" aria-hidden=\"true\"></svg><span><small>Registered mobile</small><strong>{{ profile().contact.mobile }}</strong></span></article></div><div class=\"student-profile-support\"><svg lucideShieldCheck size=\"29\" aria-hidden=\"true\"></svg><span><strong>Need help with your profile?</strong><p>Contact the university student support desk for verified record corrections.</p></span></div>\n            }\n          }\n        </div>\n      </section>\n    </div>\n  }\n</main>\n\n<erp-student-mobile-bottom-nav />\n" }]
    }], () => [], { closeOnEscape: [{
            type: HostListener,
            args: ['document:keydown.escape']
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(StudentProfileComponent, { className: "StudentProfileComponent", filePath: "frontend/src/app/features/student/profile/pages/student-profile/student-profile.component.ts", lineNumber: 59 }); })();
function escapeXml(value) {
    return String(value).replace(/[<>&'"]/g, (character) => ({ '<': '&lt;', '>': '&gt;', '&': '&amp;', "'": '&apos;', '"': '&quot;' })[character] || character);
}
