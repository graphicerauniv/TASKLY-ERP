import { ChangeDetectionStrategy, Component, DestroyRef, computed, inject, signal, } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { LucideArrowLeft, LucideBadgeCheck, LucideCircleAlert, LucideClipboardList, LucideFileText, LucidePencil, LucideRefreshCw, LucideUserRound, } from '@lucide/angular';
import { ApiService } from '../../../../core/api.service';
import { AdminPageComponent } from '../../../../shared/ui/admin-page/admin-page.component';
import { admissionCaptureStats, admissionDateLabel, admissionFieldValue, admissionReference, admissionStatusLabel, } from '../admission-presentation';
import * as i0 from "@angular/core";
const _c0 = a0 => ["/admin/admissions", a0, "edit"];
const _c1 = a0 => ["/admin/admissions/applications", a0, "review"];
const _c2 = () => [];
const _c3 = () => ({ tab: null, section: null });
const _c4 = () => ({ tab: "application" });
const _forTrack0 = ($index, $item) => $item.id;
function ApplicationRecordComponent_Conditional_5_Conditional_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "a", 8);
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(1, "svg", 9);
    i0.ɵɵtext(2, " Edit application ");
    i0.ɵɵelementEnd();
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(3, "a", 7);
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(4, "svg", 10);
    i0.ɵɵtext(5, " Review application ");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const record_r1 = i0.ɵɵnextContext();
    i0.ɵɵproperty("routerLink", i0.ɵɵpureFunction1(2, _c0, record_r1._id));
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("routerLink", i0.ɵɵpureFunction1(4, _c1, record_r1._id));
} }
function ApplicationRecordComponent_Conditional_5_Conditional_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "a", 7);
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(1, "svg", 9);
    i0.ɵɵtext(2, " Edit application ");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const record_r1 = i0.ɵɵnextContext();
    i0.ɵɵproperty("routerLink", i0.ɵɵpureFunction1(1, _c0, record_r1._id));
} }
function ApplicationRecordComponent_Conditional_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵconditionalCreate(0, ApplicationRecordComponent_Conditional_5_Conditional_0_Template, 6, 6)(1, ApplicationRecordComponent_Conditional_5_Conditional_1_Template, 3, 3, "a", 7);
} if (rf & 2) {
    const record_r1 = ctx;
    i0.ɵɵconditional(record_r1.status === "pending_approval" || record_r1.status === "submitted" ? 0 : 1);
} }
function ApplicationRecordComponent_Conditional_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "section", 4);
    i0.ɵɵelement(1, "span", 11)(2, "span", 12);
    i0.ɵɵelementStart(3, "div");
    i0.ɵɵelement(4, "span", 13)(5, "span", 13)(6, "span", 13)(7, "span", 13);
    i0.ɵɵelementEnd()();
} }
function ApplicationRecordComponent_Conditional_7_Template(rf, ctx) { if (rf & 1) {
    const _r2 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "section", 5)(1, "span", 14);
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(2, "svg", 15);
    i0.ɵɵelementEnd();
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(3, "h2");
    i0.ɵɵtext(4, "Application record unavailable");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "p");
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "button", 16);
    i0.ɵɵlistener("click", function ApplicationRecordComponent_Conditional_7_Template_button_click_7_listener() { i0.ɵɵrestoreView(_r2); const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.load()); });
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(8, "svg", 17);
    i0.ɵɵtext(9, " Try again ");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance(6);
    i0.ɵɵtextInterpolate(ctx_r2.error());
} }
function ApplicationRecordComponent_Conditional_8_Conditional_24_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 27)(1, "section", 28)(2, "header")(3, "div")(4, "h3");
    i0.ɵɵtext(5, "Academic and identity context");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "p");
    i0.ɵɵtext(7, "Primary information used when locating and validating this record.");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(8, "dl", 29)(9, "div")(10, "dt");
    i0.ɵɵtext(11, "Application reference");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(12, "dd");
    i0.ɵɵtext(13);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(14, "div")(15, "dt");
    i0.ɵɵtext(16, "Student ID");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(17, "dd");
    i0.ɵɵtext(18);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(19, "div")(20, "dt");
    i0.ɵɵtext(21, "Programme");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(22, "dd");
    i0.ɵɵtext(23);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(24, "div")(25, "dt");
    i0.ɵɵtext(26, "Academic session");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(27, "dd");
    i0.ɵɵtext(28);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(29, "div")(30, "dt");
    i0.ɵɵtext(31, "College");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(32, "dd");
    i0.ɵɵtext(33);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(34, "div")(35, "dt");
    i0.ɵɵtext(36, "Department");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(37, "dd");
    i0.ɵɵtext(38);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(39, "div")(40, "dt");
    i0.ɵɵtext(41, "Level");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(42, "dd");
    i0.ɵɵtext(43);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(44, "div")(45, "dt");
    i0.ɵɵtext(46, "Student type");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(47, "dd");
    i0.ɵɵtext(48);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(49, "div")(50, "dt");
    i0.ɵɵtext(51, "Domicile");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(52, "dd");
    i0.ɵɵtext(53);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(54, "div")(55, "dt");
    i0.ɵɵtext(56, "Country");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(57, "dd");
    i0.ɵɵtext(58);
    i0.ɵɵelementEnd()()()();
    i0.ɵɵelementStart(59, "aside", 30)(60, "section", 28)(61, "header")(62, "div")(63, "h3");
    i0.ɵɵtext(64, "Lifecycle");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(65, "p");
    i0.ɵɵtext(66, "Dates available from the current record.");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(67, "dl", 31)(68, "div")(69, "dt");
    i0.ɵɵtext(70, "Created");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(71, "dd");
    i0.ɵɵtext(72);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(73, "div")(74, "dt");
    i0.ɵɵtext(75, "Submitted");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(76, "dd");
    i0.ɵɵtext(77);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(78, "div")(79, "dt");
    i0.ɵɵtext(80, "Approved");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(81, "dd");
    i0.ɵɵtext(82);
    i0.ɵɵelementEnd()()()();
    i0.ɵɵelementStart(83, "section", 28)(84, "header")(85, "div")(86, "h3");
    i0.ɵɵtext(87, "Form snapshot");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(88, "p");
    i0.ɵɵtext(89, "The schema version retained with this application.");
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(90, "dl", 31)(91, "div")(92, "dt");
    i0.ɵɵtext(93, "Form");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(94, "dd");
    i0.ɵɵtext(95);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(96, "div")(97, "dt");
    i0.ɵɵtext(98, "Version");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(99, "dd");
    i0.ɵɵtext(100);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(101, "div")(102, "dt");
    i0.ɵɵtext(103, "Evidence");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(104, "dd");
    i0.ɵɵtext(105);
    i0.ɵɵelementEnd()()()()()();
} if (rf & 2) {
    const record_r4 = i0.ɵɵnextContext();
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance(13);
    i0.ɵɵtextInterpolate(ctx_r2.reference(record_r4));
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(record_r4.studentId || "Not generated");
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(record_r4.courseName || "Not selected");
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(record_r4.academicSession || "Not selected");
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(record_r4.collegeName || "Not selected");
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(record_r4.departmentName || "Not selected");
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(record_r4.levelName || "Not selected");
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(record_r4.studentTypeName || "Not selected");
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(record_r4.domicileName || "Not selected");
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(record_r4.countryName || "Not selected");
    i0.ɵɵadvance(14);
    i0.ɵɵtextInterpolate(ctx_r2.dateLabel(record_r4.createdAt));
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(ctx_r2.dateLabel(record_r4.submittedAt));
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(ctx_r2.dateLabel(record_r4.approvedAt));
    i0.ɵɵadvance(13);
    i0.ɵɵtextInterpolate(record_r4.formSnapshot.name || "Not recorded");
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate1(" ", record_r4.formVersion || record_r4.formSnapshot.version || "Not recorded", " ");
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(ctx_r2.captureLabel(record_r4));
} }
function ApplicationRecordComponent_Conditional_8_Conditional_25_Conditional_0_For_5_Template(rf, ctx) { if (rf & 1) {
    const _r5 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 37);
    i0.ɵɵlistener("click", function ApplicationRecordComponent_Conditional_8_Conditional_25_Conditional_0_For_5_Template_button_click_0_listener() { const section_r6 = i0.ɵɵrestoreView(_r5).$implicit; const ctx_r2 = i0.ɵɵnextContext(4); return i0.ɵɵresetView(ctx_r2.setSection(section_r6.id)); });
    i0.ɵɵelementStart(1, "span");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "small");
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const section_r6 = ctx.$implicit;
    const ctx_r2 = i0.ɵɵnextContext(4);
    i0.ɵɵclassProp("is-active", ctx_r2.activeSectionId() === section_r6.id);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(section_r6.name);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate2("", section_r6.subsections.length, " group", section_r6.subsections.length === 1 ? "" : "s");
} }
function ApplicationRecordComponent_Conditional_8_Conditional_25_Conditional_0_Conditional_7_For_9_Conditional_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const subsection_r7 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(subsection_r7.description);
} }
function ApplicationRecordComponent_Conditional_8_Conditional_25_Conditional_0_Conditional_7_For_9_Conditional_5_For_1_For_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div")(1, "dt");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "dd");
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const field_r8 = ctx.$implicit;
    const entry_r9 = i0.ɵɵnextContext().$implicit;
    const ctx_r2 = i0.ɵɵnextContext(7);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(field_r8.name);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r2.value(field_r8, entry_r9));
} }
function ApplicationRecordComponent_Conditional_8_Conditional_25_Conditional_0_Conditional_7_For_9_Conditional_5_For_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "article", 43)(1, "strong");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "dl");
    i0.ɵɵrepeaterCreate(4, ApplicationRecordComponent_Conditional_8_Conditional_25_Conditional_0_Conditional_7_For_9_Conditional_5_For_1_For_5_Template, 5, 2, "div", null, _forTrack0);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ɵ$index_328_r10 = ctx.$index;
    const subsection_r7 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate2("", subsection_r7.name, " ", ɵ$index_328_r10 + 1);
    i0.ɵɵadvance(2);
    i0.ɵɵrepeater(subsection_r7.fields);
} }
function ApplicationRecordComponent_Conditional_8_Conditional_25_Conditional_0_Conditional_7_For_9_Conditional_5_ForEmpty_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 41);
    i0.ɵɵtext(1, " No entries were saved for this group. ");
    i0.ɵɵelementEnd();
} }
function ApplicationRecordComponent_Conditional_8_Conditional_25_Conditional_0_Conditional_7_For_9_Conditional_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵrepeaterCreate(0, ApplicationRecordComponent_Conditional_8_Conditional_25_Conditional_0_Conditional_7_For_9_Conditional_5_For_1_Template, 6, 2, "article", 43, i0.ɵɵrepeaterTrackByIndex, false, ApplicationRecordComponent_Conditional_8_Conditional_25_Conditional_0_Conditional_7_For_9_Conditional_5_ForEmpty_2_Template, 2, 0, "p", 41);
} if (rf & 2) {
    const subsection_r7 = i0.ɵɵnextContext().$implicit;
    const record_r4 = i0.ɵɵnextContext(4);
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵrepeater(ctx_r2.entries(record_r4, subsection_r7));
} }
function ApplicationRecordComponent_Conditional_8_Conditional_25_Conditional_0_Conditional_7_For_9_Conditional_6_For_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div")(1, "dt");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "dd");
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const field_r11 = ctx.$implicit;
    const record_r4 = i0.ɵɵnextContext(6);
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(field_r11.name);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r2.value(field_r11, record_r4.responses));
} }
function ApplicationRecordComponent_Conditional_8_Conditional_25_Conditional_0_Conditional_7_For_9_Conditional_6_ForEmpty_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div")(1, "dt");
    i0.ɵɵtext(2, "Responses");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "dd");
    i0.ɵɵtext(4, "No fields were configured in this group.");
    i0.ɵɵelementEnd()();
} }
function ApplicationRecordComponent_Conditional_8_Conditional_25_Conditional_0_Conditional_7_For_9_Conditional_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "dl", 42);
    i0.ɵɵrepeaterCreate(1, ApplicationRecordComponent_Conditional_8_Conditional_25_Conditional_0_Conditional_7_For_9_Conditional_6_For_2_Template, 5, 2, "div", null, _forTrack0, false, ApplicationRecordComponent_Conditional_8_Conditional_25_Conditional_0_Conditional_7_For_9_Conditional_6_ForEmpty_3_Template, 5, 0, "div");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const subsection_r7 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance();
    i0.ɵɵrepeater(subsection_r7.fields);
} }
function ApplicationRecordComponent_Conditional_8_Conditional_25_Conditional_0_Conditional_7_For_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "section", 40)(1, "header")(2, "h4");
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵconditionalCreate(4, ApplicationRecordComponent_Conditional_8_Conditional_25_Conditional_0_Conditional_7_For_9_Conditional_4_Template, 2, 1, "p");
    i0.ɵɵelementEnd();
    i0.ɵɵconditionalCreate(5, ApplicationRecordComponent_Conditional_8_Conditional_25_Conditional_0_Conditional_7_For_9_Conditional_5_Template, 3, 1)(6, ApplicationRecordComponent_Conditional_8_Conditional_25_Conditional_0_Conditional_7_For_9_Conditional_6_Template, 4, 1, "dl", 42);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const subsection_r7 = ctx.$implicit;
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(subsection_r7.name);
    i0.ɵɵadvance();
    i0.ɵɵconditional(subsection_r7.description ? 4 : -1);
    i0.ɵɵadvance();
    i0.ɵɵconditional(subsection_r7.isRepeatable ? 5 : 6);
} }
function ApplicationRecordComponent_Conditional_8_Conditional_25_Conditional_0_Conditional_7_ForEmpty_10_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 41);
    i0.ɵɵtext(1, " No response groups are present in this section. ");
    i0.ɵɵelementEnd();
} }
function ApplicationRecordComponent_Conditional_8_Conditional_25_Conditional_0_Conditional_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "header")(1, "span", 38);
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(2, "svg", 39);
    i0.ɵɵelementEnd();
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(3, "div")(4, "h3");
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "p");
    i0.ɵɵtext(7);
    i0.ɵɵelementEnd()()();
    i0.ɵɵrepeaterCreate(8, ApplicationRecordComponent_Conditional_8_Conditional_25_Conditional_0_Conditional_7_For_9_Template, 7, 3, "section", 40, _forTrack0, false, ApplicationRecordComponent_Conditional_8_Conditional_25_Conditional_0_Conditional_7_ForEmpty_10_Template, 2, 0, "div", 41);
} if (rf & 2) {
    const section_r12 = ctx;
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(section_r12.name);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", section_r12.description || "Saved application responses for this section.", " ");
    i0.ɵɵadvance();
    i0.ɵɵrepeater(section_r12.subsections);
} }
function ApplicationRecordComponent_Conditional_8_Conditional_25_Conditional_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 32)(1, "nav", 34)(2, "span");
    i0.ɵɵtext(3, "Form sections");
    i0.ɵɵelementEnd();
    i0.ɵɵrepeaterCreate(4, ApplicationRecordComponent_Conditional_8_Conditional_25_Conditional_0_For_5_Template, 5, 5, "button", 35, _forTrack0);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "div", 36);
    i0.ɵɵconditionalCreate(7, ApplicationRecordComponent_Conditional_8_Conditional_25_Conditional_0_Conditional_7_Template, 11, 3);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    let tmp_5_0;
    const record_r4 = i0.ɵɵnextContext(2);
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance(4);
    i0.ɵɵrepeater(record_r4.formSnapshot.sections);
    i0.ɵɵadvance(3);
    i0.ɵɵconditional((tmp_5_0 = ctx_r2.activeSection()) ? 7 : -1, tmp_5_0);
} }
function ApplicationRecordComponent_Conditional_8_Conditional_25_Conditional_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 33)(1, "span", 14);
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(2, "svg", 44);
    i0.ɵɵelementEnd();
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(3, "h2");
    i0.ɵɵtext(4, "No application snapshot");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "p");
    i0.ɵɵtext(6, "This record does not contain a saved form structure to display.");
    i0.ɵɵelementEnd()();
} }
function ApplicationRecordComponent_Conditional_8_Conditional_25_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵconditionalCreate(0, ApplicationRecordComponent_Conditional_8_Conditional_25_Conditional_0_Template, 8, 1, "div", 32)(1, ApplicationRecordComponent_Conditional_8_Conditional_25_Conditional_1_Template, 7, 0, "div", 33);
} if (rf & 2) {
    const record_r4 = i0.ɵɵnextContext();
    i0.ɵɵconditional(record_r4.formSnapshot.sections.length ? 0 : 1);
} }
function ApplicationRecordComponent_Conditional_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "section", 6)(1, "header", 18)(2, "span", 19);
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(3, "svg", 20);
    i0.ɵɵelementEnd();
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(4, "div")(5, "span");
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "h2");
    i0.ɵɵtext(8);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(9, "p");
    i0.ɵɵtext(10);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(11, "div", 21)(12, "span", 22);
    i0.ɵɵtext(13);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(14, "small");
    i0.ɵɵtext(15);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(16, "nav", 23)(17, "a", 24);
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(18, "svg", 10);
    i0.ɵɵtext(19, " Overview ");
    i0.ɵɵelementEnd();
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(20, "a", 24);
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(21, "svg", 25);
    i0.ɵɵtext(22, " Application ");
    i0.ɵɵelementEnd()();
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(23, "div", 26);
    i0.ɵɵconditionalCreate(24, ApplicationRecordComponent_Conditional_8_Conditional_24_Template, 106, 16, "div", 27)(25, ApplicationRecordComponent_Conditional_8_Conditional_25_Template, 2, 1);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const record_r4 = ctx;
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance(6);
    i0.ɵɵtextInterpolate(ctx_r2.reference(record_r4));
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(record_r4.studentName || "Unnamed application");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate2(" ", record_r4.courseName || "Programme not selected", " \u00B7 ", record_r4.academicSession || "Session not selected", " ");
    i0.ɵɵadvance(2);
    i0.ɵɵclassProp("erp-status--draft", record_r4.status === "draft")("erp-status--warning", record_r4.status === "pending_approval" || record_r4.status === "submitted");
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r2.statusLabel(record_r4));
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r2.captureLabel(record_r4));
    i0.ɵɵadvance(2);
    i0.ɵɵclassProp("is-active", ctx_r2.tab() === "overview");
    i0.ɵɵproperty("routerLink", i0.ɵɵpureFunction0(21, _c2))("queryParams", i0.ɵɵpureFunction0(22, _c3));
    i0.ɵɵattribute("aria-current", ctx_r2.tab() === "overview" ? "page" : null);
    i0.ɵɵadvance(3);
    i0.ɵɵclassProp("is-active", ctx_r2.tab() === "application");
    i0.ɵɵproperty("routerLink", i0.ɵɵpureFunction0(23, _c2))("queryParams", i0.ɵɵpureFunction0(24, _c4));
    i0.ɵɵattribute("aria-current", ctx_r2.tab() === "application" ? "page" : null);
    i0.ɵɵadvance(4);
    i0.ɵɵconditional(ctx_r2.tab() === "overview" ? 24 : 25);
} }
export class ApplicationRecordComponent {
    api = inject(ApiService);
    route = inject(ActivatedRoute);
    router = inject(Router);
    destroyRef = inject(DestroyRef);
    item = signal(null, ...(ngDevMode ? [{ debugName: "item" }] : /* istanbul ignore next */ []));
    masterLabels = signal({}, ...(ngDevMode ? [{ debugName: "masterLabels" }] : /* istanbul ignore next */ []));
    loading = signal(true, ...(ngDevMode ? [{ debugName: "loading" }] : /* istanbul ignore next */ []));
    error = signal('', ...(ngDevMode ? [{ debugName: "error" }] : /* istanbul ignore next */ []));
    tab = signal('overview', ...(ngDevMode ? [{ debugName: "tab" }] : /* istanbul ignore next */ []));
    activeSectionId = signal('', ...(ngDevMode ? [{ debugName: "activeSectionId" }] : /* istanbul ignore next */ []));
    activeSection = computed(() => this.item()?.formSnapshot?.sections.find((section) => section.id === this.activeSectionId()), ...(ngDevMode ? [{ debugName: "activeSection" }] : /* istanbul ignore next */ []));
    admissionId = '';
    constructor() {
        this.route.paramMap.pipe(takeUntilDestroyed(this.destroyRef)).subscribe((params) => {
            const id = params.get('admissionId') || '';
            if (!id || id === this.admissionId)
                return;
            this.admissionId = id;
            this.load();
        });
        this.route.queryParamMap.pipe(takeUntilDestroyed(this.destroyRef)).subscribe((params) => {
            this.tab.set(params.get('tab') === 'application' ? 'application' : 'overview');
            const requestedSection = params.get('section');
            if (requestedSection)
                this.activeSectionId.set(requestedSection);
        });
    }
    load() {
        if (!this.admissionId)
            return;
        this.loading.set(true);
        this.error.set('');
        this.api
            .admission(this.admissionId)
            .pipe(takeUntilDestroyed(this.destroyRef))
            .subscribe({
            next: ({ item, masterLabels }) => {
                this.item.set(item);
                this.masterLabels.set(masterLabels);
                const requested = this.activeSectionId();
                const sectionExists = item.formSnapshot?.sections.some((section) => section.id === requested);
                if (!sectionExists)
                    this.activeSectionId.set(item.formSnapshot?.sections[0]?.id || '');
                this.loading.set(false);
            },
            error: (error) => {
                this.error.set(error.error?.message || 'This application record could not be loaded.');
                this.loading.set(false);
            },
        });
    }
    setTab(tab) {
        void this.router.navigate([], {
            relativeTo: this.route,
            queryParams: { tab: tab === 'application' ? 'application' : null },
            queryParamsHandling: 'merge',
            replaceUrl: true,
        });
    }
    setSection(sectionId) {
        this.activeSectionId.set(sectionId);
        void this.router.navigate([], {
            relativeTo: this.route,
            queryParams: { tab: 'application', section: sectionId },
            queryParamsHandling: 'merge',
            replaceUrl: true,
        });
    }
    reference(item) {
        return admissionReference(item);
    }
    statusLabel(item) {
        return admissionStatusLabel(item);
    }
    captureLabel(item) {
        const stats = admissionCaptureStats(item);
        return stats.total
            ? `${stats.answered} of ${stats.total} fields captured`
            : 'No form fields recorded';
    }
    dateLabel(value) {
        return admissionDateLabel(value);
    }
    value(field, responses) {
        return admissionFieldValue(field, responses, this.masterLabels());
    }
    entries(item, subsection) {
        return item.repeatableResponses?.[subsection.id] || [];
    }
    static ɵfac = function ApplicationRecordComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || ApplicationRecordComponent)(); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ApplicationRecordComponent, selectors: [["erp-application-record"]], decls: 9, vars: 3, consts: [["eyebrow", "Admissions / Application record", "description", "Read-only application evidence and lifecycle context.", "variant", "compact", 3, "title"], ["page-actions", "", 1, "application-record__page-actions"], ["routerLink", "/admin/admissions/applications", 1, "erp-button", "erp-button--secondary"], ["lucideArrowLeft", "", "size", "16", "aria-hidden", "true"], ["aria-label", "Loading application record", 1, "erp-card", "application-record__loading"], ["role", "alert", 1, "erp-card", "erp-empty-panel"], [1, "erp-card", "application-record__shell"], [1, "erp-button", "erp-button--primary", 3, "routerLink"], [1, "erp-button", "erp-button--secondary", 3, "routerLink"], ["lucidePencil", "", "size", "15", "aria-hidden", "true"], ["lucideClipboardList", "", "size", "16", "aria-hidden", "true"], [1, "erp-skeleton", "application-record__skeleton-title"], [1, "erp-skeleton", "application-record__skeleton-tabs"], [1, "erp-skeleton"], [1, "erp-empty-panel__icon"], ["lucideCircleAlert", "", "size", "21", "aria-hidden", "true"], ["type", "button", 1, "erp-button", "erp-button--secondary", 3, "click"], ["lucideRefreshCw", "", "size", "15", "aria-hidden", "true"], [1, "application-record__identity"], [1, "application-record__identity-icon"], ["lucideUserRound", "", "size", "21", "aria-hidden", "true"], [1, "application-record__identity-status"], [1, "erp-status"], ["aria-label", "Application record sections", 1, "application-record__tabs"], ["queryParamsHandling", "merge", 3, "routerLink", "queryParams"], ["lucideFileText", "", "size", "16", "aria-hidden", "true"], [1, "application-record__content"], [1, "application-record__overview"], [1, "application-record__section"], [1, "application-record__facts"], [1, "application-record__side"], [1, "application-record__timeline"], [1, "application-record__application"], [1, "erp-empty-panel"], ["aria-label", "Application form sections"], ["type", "button", 3, "is-active"], [1, "application-record__evidence"], ["type", "button", 3, "click"], [1, "application-record__evidence-icon"], ["lucideBadgeCheck", "", "size", "18", "aria-hidden", "true"], [1, "application-record__subsection"], [1, "application-record__no-data"], [1, "application-record__responses"], [1, "application-record__repeat-entry"], ["lucideFileText", "", "size", "20", "aria-hidden", "true"]], template: function ApplicationRecordComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "erp-admin-page", 0)(1, "div", 1)(2, "a", 2);
            i0.ɵɵnamespaceSVG();
            i0.ɵɵelement(3, "svg", 3);
            i0.ɵɵtext(4, " Applications ");
            i0.ɵɵelementEnd();
            i0.ɵɵconditionalCreate(5, ApplicationRecordComponent_Conditional_5_Template, 2, 1);
            i0.ɵɵelementEnd();
            i0.ɵɵconditionalCreate(6, ApplicationRecordComponent_Conditional_6_Template, 8, 0, "section", 4)(7, ApplicationRecordComponent_Conditional_7_Template, 10, 1, "section", 5)(8, ApplicationRecordComponent_Conditional_8_Template, 26, 25, "section", 6);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            let tmp_0_0;
            let tmp_1_0;
            let tmp_2_0;
            i0.ɵɵproperty("title", ((tmp_0_0 = ctx.item()) == null ? null : tmp_0_0.studentName) || (ctx.loading() ? "Application record" : "Application unavailable"));
            i0.ɵɵadvance(5);
            i0.ɵɵconditional((tmp_1_0 = ctx.item()) ? 5 : -1, tmp_1_0);
            i0.ɵɵadvance();
            i0.ɵɵconditional(ctx.loading() ? 6 : ctx.error() ? 7 : (tmp_2_0 = ctx.item()) ? 8 : -1, tmp_2_0);
        } }, dependencies: [AdminPageComponent,
            LucideArrowLeft,
            LucideBadgeCheck,
            LucideCircleAlert,
            LucideClipboardList,
            LucideFileText,
            LucidePencil,
            LucideRefreshCw,
            LucideUserRound,
            RouterLink], styles: ["\n[_nghost-%COMP%] {\n  display: block;\n}\n\n.application-record__page-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: var(--erp-space-2);\n}\n\n.application-record__shell[_ngcontent-%COMP%] {\n  overflow: hidden;\n}\n\n.application-record__identity[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: auto minmax(0, 1fr) auto;\n  align-items: center;\n  gap: var(--erp-space-4);\n  padding: var(--erp-space-5) var(--erp-space-6);\n  background: var(--erp-surface-raised);\n  border-bottom: 1px solid var(--erp-border-subtle);\n}\n\n.application-record__identity-icon[_ngcontent-%COMP%], \n.application-record__evidence-icon[_ngcontent-%COMP%] {\n  display: inline-grid;\n  width: var(--erp-control-height-large);\n  height: var(--erp-control-height-large);\n  place-items: center;\n  color: var(--erp-blue-700);\n  background: var(--erp-blue-50);\n  border: 1px solid var(--erp-border-default);\n  border-radius: var(--erp-radius-compact);\n}\n\n.application-record__identity[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  color: var(--erp-blue-700);\n  font-size: var(--erp-font-size-xs);\n  font-weight: var(--erp-weight-bold);\n  letter-spacing: 0.04em;\n  text-transform: uppercase;\n}\n\n.application-record__identity[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], \n.application-record__identity[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n}\n\n.application-record__identity[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin-top: var(--erp-space-1);\n  color: var(--erp-text-heading);\n  font-size: var(--erp-font-section-title);\n}\n\n.application-record__identity[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin-top: var(--erp-space-1);\n  color: var(--erp-text-muted);\n  font-size: var(--erp-font-caption);\n}\n\n.application-record__identity-status[_ngcontent-%COMP%] {\n  display: grid;\n  justify-items: end;\n  gap: var(--erp-space-2);\n}\n\n.application-record__identity-status[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  color: var(--erp-text-muted);\n  font-size: var(--erp-font-size-xs);\n}\n\n.application-record__tabs[_ngcontent-%COMP%] {\n  display: flex;\n  gap: var(--erp-space-5);\n  padding: 0 var(--erp-space-6);\n  background: var(--erp-surface-overlay);\n  border-bottom: 1px solid var(--erp-border-subtle);\n}\n\n.application-record__tabs[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  display: inline-flex;\n  min-height: var(--erp-control-height-large);\n  align-items: center;\n  gap: var(--erp-space-2);\n  padding: 0;\n  color: var(--erp-text-muted);\n  background: transparent;\n  border: 0;\n  border-bottom: 2px solid transparent;\n  font-size: var(--erp-font-label);\n  font-weight: var(--erp-weight-semibold);\n  text-decoration: none;\n  cursor: pointer;\n}\n\n.application-record__tabs[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover, \n.application-record__tabs[_ngcontent-%COMP%]   a.is-active[_ngcontent-%COMP%] {\n  color: var(--erp-blue-700);\n}\n\n.application-record__tabs[_ngcontent-%COMP%]   a.is-active[_ngcontent-%COMP%] {\n  border-bottom-color: var(--erp-blue-600);\n}\n\n.application-record__content[_ngcontent-%COMP%] {\n  min-height: var(--erp-state-panel-min-height);\n  padding: var(--erp-space-5);\n  background: var(--erp-surface-detail-soft);\n}\n\n.application-record__overview[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: minmax(0, 2fr) minmax(18rem, 1fr);\n  align-items: start;\n  gap: var(--erp-space-4);\n}\n\n.application-record__side[_ngcontent-%COMP%] {\n  display: grid;\n  gap: var(--erp-space-4);\n}\n\n.application-record__section[_ngcontent-%COMP%], \n.application-record__evidence[_ngcontent-%COMP%] {\n  overflow: hidden;\n  background: var(--erp-surface-overlay);\n  border: 1px solid var(--erp-border-subtle);\n  border-radius: var(--erp-radius-compact);\n}\n\n.application-record__section[_ngcontent-%COMP%]    > header[_ngcontent-%COMP%], \n.application-record__subsection[_ngcontent-%COMP%]    > header[_ngcontent-%COMP%] {\n  padding: var(--erp-space-3) var(--erp-space-4);\n  background: var(--erp-surface-page-panel);\n  border-bottom: 1px solid var(--erp-border-subtle);\n}\n\n.application-record__section[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], \n.application-record__section[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], \n.application-record__subsection[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%], \n.application-record__subsection[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], \n.application-record__evidence[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], \n.application-record__evidence[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n}\n\n.application-record__section[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], \n.application-record__evidence[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  color: var(--erp-text-heading);\n  font-size: var(--erp-font-label);\n}\n\n.application-record__section[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], \n.application-record__subsection[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], \n.application-record__evidence[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin-top: var(--erp-space-1);\n  color: var(--erp-text-muted);\n  font-size: var(--erp-font-size-xs);\n}\n\n.application-record__facts[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n  margin: 0;\n  padding: var(--erp-space-2) var(--erp-space-4);\n}\n\n.application-record__facts[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%], \n.application-record__timeline[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%], \n.application-record__responses[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%], \n.application-record__repeat-entry[_ngcontent-%COMP%]   dl[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  padding: var(--erp-space-3) 0;\n  border-bottom: 1px solid var(--erp-border-subtle);\n}\n\n.application-record__facts[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:nth-child(odd), \n.application-record__responses[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:nth-child(odd), \n.application-record__repeat-entry[_ngcontent-%COMP%]   dl[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:nth-child(odd) {\n  padding-right: var(--erp-space-4);\n}\n\n.application-record__facts[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:nth-last-child(-n + 2), \n.application-record__timeline[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:last-child, \n.application-record__responses[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:nth-last-child(-n + 2), \n.application-record__repeat-entry[_ngcontent-%COMP%]   dl[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:nth-last-child(-n + 2) {\n  border-bottom: 0;\n}\n\n.application-record__facts[_ngcontent-%COMP%]   dt[_ngcontent-%COMP%], \n.application-record__timeline[_ngcontent-%COMP%]   dt[_ngcontent-%COMP%], \n.application-record__responses[_ngcontent-%COMP%]   dt[_ngcontent-%COMP%], \n.application-record__repeat-entry[_ngcontent-%COMP%]   dt[_ngcontent-%COMP%] {\n  color: var(--erp-text-muted);\n  font-size: var(--erp-font-size-xs);\n}\n\n.application-record__facts[_ngcontent-%COMP%]   dd[_ngcontent-%COMP%], \n.application-record__timeline[_ngcontent-%COMP%]   dd[_ngcontent-%COMP%], \n.application-record__responses[_ngcontent-%COMP%]   dd[_ngcontent-%COMP%], \n.application-record__repeat-entry[_ngcontent-%COMP%]   dd[_ngcontent-%COMP%] {\n  margin: var(--erp-space-1) 0 0;\n  overflow-wrap: anywhere;\n  color: var(--erp-text-heading);\n  font-size: var(--erp-font-label);\n  font-weight: var(--erp-weight-semibold);\n}\n\n.application-record__timeline[_ngcontent-%COMP%] {\n  display: grid;\n  margin: 0;\n  padding: 0 var(--erp-space-4);\n}\n\n.application-record__timeline[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: minmax(0, 1fr) auto;\n  align-items: baseline;\n  gap: var(--erp-space-3);\n}\n\n.application-record__timeline[_ngcontent-%COMP%]   dd[_ngcontent-%COMP%] {\n  text-align: right;\n}\n\n.application-record__application[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 14rem minmax(0, 1fr);\n  align-items: start;\n  gap: var(--erp-space-4);\n}\n\n.application-record__application[_ngcontent-%COMP%]    > nav[_ngcontent-%COMP%] {\n  position: sticky;\n  top: var(--erp-space-4);\n  display: grid;\n  gap: var(--erp-space-1);\n  padding: var(--erp-space-2);\n  background: var(--erp-surface-overlay);\n  border: 1px solid var(--erp-border-subtle);\n  border-radius: var(--erp-radius-compact);\n}\n\n.application-record__application[_ngcontent-%COMP%]    > nav[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  padding: var(--erp-space-2) var(--erp-space-3);\n  color: var(--erp-text-muted);\n  font-size: var(--erp-font-size-xs);\n  font-weight: var(--erp-weight-bold);\n  letter-spacing: 0.06em;\n  text-transform: uppercase;\n}\n\n.application-record__application[_ngcontent-%COMP%]    > nav[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  display: grid;\n  gap: var(--erp-space-1);\n  padding: var(--erp-space-2) var(--erp-space-3);\n  color: var(--erp-text-body);\n  text-align: left;\n  background: transparent;\n  border: 1px solid transparent;\n  border-radius: var(--erp-radius-control);\n  cursor: pointer;\n}\n\n.application-record__application[_ngcontent-%COMP%]    > nav[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover, \n.application-record__application[_ngcontent-%COMP%]    > nav[_ngcontent-%COMP%]   button.is-active[_ngcontent-%COMP%] {\n  color: var(--erp-blue-700);\n  background: var(--erp-blue-50);\n  border-color: var(--erp-border-default);\n}\n\n.application-record__application[_ngcontent-%COMP%]    > nav[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: var(--erp-font-label);\n  font-weight: var(--erp-weight-semibold);\n}\n\n.application-record__application[_ngcontent-%COMP%]    > nav[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  color: var(--erp-text-muted);\n  font-size: var(--erp-font-size-xs);\n}\n\n.application-record__evidence[_ngcontent-%COMP%]    > header[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: auto minmax(0, 1fr);\n  align-items: center;\n  gap: var(--erp-space-3);\n  padding: var(--erp-space-4);\n  background: var(--erp-surface-page-panel);\n  border-bottom: 1px solid var(--erp-border-subtle);\n}\n\n.application-record__evidence-icon[_ngcontent-%COMP%] {\n  width: var(--erp-control-height-compact);\n  height: var(--erp-control-height-compact);\n}\n\n.application-record__subsection[_ngcontent-%COMP%]    + .application-record__subsection[_ngcontent-%COMP%] {\n  border-top: 1px solid var(--erp-border-subtle);\n}\n\n.application-record__subsection[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  color: var(--erp-text-heading);\n  font-size: var(--erp-font-label);\n}\n\n.application-record__responses[_ngcontent-%COMP%], \n.application-record__repeat-entry[_ngcontent-%COMP%]   dl[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n  margin: 0;\n  padding: var(--erp-space-2) var(--erp-space-4);\n}\n\n.application-record__repeat-entry[_ngcontent-%COMP%] {\n  margin: var(--erp-space-4);\n  border: 1px solid var(--erp-border-subtle);\n  border-radius: var(--erp-radius-control);\n}\n\n.application-record__repeat-entry[_ngcontent-%COMP%]    > strong[_ngcontent-%COMP%] {\n  display: block;\n  padding: var(--erp-space-2) var(--erp-space-4);\n  color: var(--erp-text-heading);\n  font-size: var(--erp-font-label);\n  background: var(--erp-surface-detail-soft);\n  border-bottom: 1px solid var(--erp-border-subtle);\n}\n\n.application-record__no-data[_ngcontent-%COMP%] {\n  padding: var(--erp-space-6) !important;\n  margin: 0 !important;\n  color: var(--erp-text-muted);\n  text-align: center;\n  font-size: var(--erp-font-caption) !important;\n}\n\n.application-record__loading[_ngcontent-%COMP%] {\n  display: grid;\n  gap: var(--erp-space-5);\n  padding: var(--erp-space-6);\n}\n\n.application-record__loading[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n  gap: var(--erp-space-4);\n}\n\n.application-record__loading[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]   .erp-skeleton[_ngcontent-%COMP%] {\n  min-height: calc(var(--erp-space-12) * 2);\n}\n\n.application-record__skeleton-title[_ngcontent-%COMP%] {\n  width: 34%;\n}\n\n.application-record__skeleton-tabs[_ngcontent-%COMP%] {\n  width: 22%;\n}\n\n@media (max-width: 64rem) {\n  .application-record__overview[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n\n@media (max-width: 48rem) {\n  .application-record__page-actions[_ngcontent-%COMP%], \n   .application-record__identity[_ngcontent-%COMP%] {\n    align-items: stretch;\n  }\n\n  .application-record__page-actions[_ngcontent-%COMP%] {\n    flex-wrap: wrap;\n  }\n\n  .application-record__identity[_ngcontent-%COMP%] {\n    grid-template-columns: auto minmax(0, 1fr);\n  }\n\n  .application-record__identity-status[_ngcontent-%COMP%] {\n    grid-column: 1 / -1;\n    justify-items: start;\n  }\n\n  .application-record__tabs[_ngcontent-%COMP%] {\n    padding-inline: var(--erp-space-4);\n  }\n\n  .application-record__content[_ngcontent-%COMP%] {\n    padding: var(--erp-space-3);\n  }\n\n  .application-record__application[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n\n  .application-record__application[_ngcontent-%COMP%]    > nav[_ngcontent-%COMP%] {\n    position: static;\n    display: flex;\n    overflow-x: auto;\n  }\n\n  .application-record__application[_ngcontent-%COMP%]    > nav[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n    display: none;\n  }\n\n  .application-record__application[_ngcontent-%COMP%]    > nav[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    min-width: 10rem;\n  }\n\n  .application-record__facts[_ngcontent-%COMP%], \n   .application-record__responses[_ngcontent-%COMP%], \n   .application-record__repeat-entry[_ngcontent-%COMP%]   dl[_ngcontent-%COMP%], \n   .application-record__loading[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n\n  .application-record__facts[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:nth-last-child(2), \n   .application-record__responses[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:nth-last-child(2), \n   .application-record__repeat-entry[_ngcontent-%COMP%]   dl[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:nth-last-child(2) {\n    border-bottom: 1px solid var(--erp-border-subtle);\n  }\n\n  .application-record__facts[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:nth-child(odd), \n   .application-record__responses[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:nth-child(odd), \n   .application-record__repeat-entry[_ngcontent-%COMP%]   dl[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:nth-child(odd) {\n    padding-right: 0;\n  }\n}"], changeDetection: 0 });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ApplicationRecordComponent, [{
        type: Component,
        args: [{ selector: 'erp-application-record', imports: [
                    AdminPageComponent,
                    LucideArrowLeft,
                    LucideBadgeCheck,
                    LucideCircleAlert,
                    LucideClipboardList,
                    LucideFileText,
                    LucidePencil,
                    LucideRefreshCw,
                    LucideUserRound,
                    RouterLink,
                ], changeDetection: ChangeDetectionStrategy.OnPush, template: "<erp-admin-page\n  eyebrow=\"Admissions / Application record\"\n  [title]=\"item()?.studentName || (loading() ? 'Application record' : 'Application unavailable')\"\n  description=\"Read-only application evidence and lifecycle context.\"\n  variant=\"compact\"\n>\n  <div page-actions class=\"application-record__page-actions\">\n    <a class=\"erp-button erp-button--secondary\" routerLink=\"/admin/admissions/applications\">\n      <svg lucideArrowLeft size=\"16\" aria-hidden=\"true\"></svg>\n      Applications\n    </a>\n    @if (item(); as record) {\n      @if (record.status === 'pending_approval' || record.status === 'submitted') {\n        <a\n          class=\"erp-button erp-button--secondary\"\n          [routerLink]=\"['/admin/admissions', record._id, 'edit']\"\n        >\n          <svg lucidePencil size=\"15\" aria-hidden=\"true\"></svg>\n          Edit application\n        </a>\n        <a\n          class=\"erp-button erp-button--primary\"\n          [routerLink]=\"['/admin/admissions/applications', record._id, 'review']\"\n        >\n          <svg lucideClipboardList size=\"16\" aria-hidden=\"true\"></svg>\n          Review application\n        </a>\n      } @else {\n        <a\n          class=\"erp-button erp-button--primary\"\n          [routerLink]=\"['/admin/admissions', record._id, 'edit']\"\n        >\n          <svg lucidePencil size=\"15\" aria-hidden=\"true\"></svg>\n          Edit application\n        </a>\n      }\n    }\n  </div>\n\n  @if (loading()) {\n    <section class=\"erp-card application-record__loading\" aria-label=\"Loading application record\">\n      <span class=\"erp-skeleton application-record__skeleton-title\"></span>\n      <span class=\"erp-skeleton application-record__skeleton-tabs\"></span>\n      <div>\n        <span class=\"erp-skeleton\"></span>\n        <span class=\"erp-skeleton\"></span>\n        <span class=\"erp-skeleton\"></span>\n        <span class=\"erp-skeleton\"></span>\n      </div>\n    </section>\n  } @else if (error()) {\n    <section class=\"erp-card erp-empty-panel\" role=\"alert\">\n      <span class=\"erp-empty-panel__icon\"\n        ><svg lucideCircleAlert size=\"21\" aria-hidden=\"true\"></svg\n      ></span>\n      <h2>Application record unavailable</h2>\n      <p>{{ error() }}</p>\n      <button class=\"erp-button erp-button--secondary\" type=\"button\" (click)=\"load()\">\n        <svg lucideRefreshCw size=\"15\" aria-hidden=\"true\"></svg>\n        Try again\n      </button>\n    </section>\n  } @else if (item(); as record) {\n    <section class=\"erp-card application-record__shell\">\n      <header class=\"application-record__identity\">\n        <span class=\"application-record__identity-icon\"\n          ><svg lucideUserRound size=\"21\" aria-hidden=\"true\"></svg\n        ></span>\n        <div>\n          <span>{{ reference(record) }}</span>\n          <h2>{{ record.studentName || 'Unnamed application' }}</h2>\n          <p>\n            {{ record.courseName || 'Programme not selected' }} \u00B7\n            {{ record.academicSession || 'Session not selected' }}\n          </p>\n        </div>\n        <div class=\"application-record__identity-status\">\n          <span\n            class=\"erp-status\"\n            [class.erp-status--draft]=\"record.status === 'draft'\"\n            [class.erp-status--warning]=\"\n              record.status === 'pending_approval' || record.status === 'submitted'\n            \"\n            >{{ statusLabel(record) }}</span\n          >\n          <small>{{ captureLabel(record) }}</small>\n        </div>\n      </header>\n\n      <nav class=\"application-record__tabs\" aria-label=\"Application record sections\">\n        <a\n          [routerLink]=\"[]\"\n          [queryParams]=\"{ tab: null, section: null }\"\n          queryParamsHandling=\"merge\"\n          [class.is-active]=\"tab() === 'overview'\"\n          [attr.aria-current]=\"tab() === 'overview' ? 'page' : null\"\n        >\n          <svg lucideClipboardList size=\"16\" aria-hidden=\"true\"></svg>\n          Overview\n        </a>\n        <a\n          [routerLink]=\"[]\"\n          [queryParams]=\"{ tab: 'application' }\"\n          queryParamsHandling=\"merge\"\n          [class.is-active]=\"tab() === 'application'\"\n          [attr.aria-current]=\"tab() === 'application' ? 'page' : null\"\n        >\n          <svg lucideFileText size=\"16\" aria-hidden=\"true\"></svg>\n          Application\n        </a>\n      </nav>\n\n      <div class=\"application-record__content\">\n        @if (tab() === 'overview') {\n          <div class=\"application-record__overview\">\n            <section class=\"application-record__section\">\n              <header>\n                <div>\n                  <h3>Academic and identity context</h3>\n                  <p>Primary information used when locating and validating this record.</p>\n                </div>\n              </header>\n              <dl class=\"application-record__facts\">\n                <div>\n                  <dt>Application reference</dt>\n                  <dd>{{ reference(record) }}</dd>\n                </div>\n                <div>\n                  <dt>Student ID</dt>\n                  <dd>{{ record.studentId || 'Not generated' }}</dd>\n                </div>\n                <div>\n                  <dt>Programme</dt>\n                  <dd>{{ record.courseName || 'Not selected' }}</dd>\n                </div>\n                <div>\n                  <dt>Academic session</dt>\n                  <dd>{{ record.academicSession || 'Not selected' }}</dd>\n                </div>\n                <div>\n                  <dt>College</dt>\n                  <dd>{{ record.collegeName || 'Not selected' }}</dd>\n                </div>\n                <div>\n                  <dt>Department</dt>\n                  <dd>{{ record.departmentName || 'Not selected' }}</dd>\n                </div>\n                <div>\n                  <dt>Level</dt>\n                  <dd>{{ record.levelName || 'Not selected' }}</dd>\n                </div>\n                <div>\n                  <dt>Student type</dt>\n                  <dd>{{ record.studentTypeName || 'Not selected' }}</dd>\n                </div>\n                <div>\n                  <dt>Domicile</dt>\n                  <dd>{{ record.domicileName || 'Not selected' }}</dd>\n                </div>\n                <div>\n                  <dt>Country</dt>\n                  <dd>{{ record.countryName || 'Not selected' }}</dd>\n                </div>\n              </dl>\n            </section>\n\n            <aside class=\"application-record__side\">\n              <section class=\"application-record__section\">\n                <header>\n                  <div>\n                    <h3>Lifecycle</h3>\n                    <p>Dates available from the current record.</p>\n                  </div>\n                </header>\n                <dl class=\"application-record__timeline\">\n                  <div>\n                    <dt>Created</dt>\n                    <dd>{{ dateLabel(record.createdAt) }}</dd>\n                  </div>\n                  <div>\n                    <dt>Submitted</dt>\n                    <dd>{{ dateLabel(record.submittedAt) }}</dd>\n                  </div>\n                  <div>\n                    <dt>Approved</dt>\n                    <dd>{{ dateLabel(record.approvedAt) }}</dd>\n                  </div>\n                </dl>\n              </section>\n\n              <section class=\"application-record__section\">\n                <header>\n                  <div>\n                    <h3>Form snapshot</h3>\n                    <p>The schema version retained with this application.</p>\n                  </div>\n                </header>\n                <dl class=\"application-record__timeline\">\n                  <div>\n                    <dt>Form</dt>\n                    <dd>{{ record.formSnapshot.name || 'Not recorded' }}</dd>\n                  </div>\n                  <div>\n                    <dt>Version</dt>\n                    <dd>\n                      {{ record.formVersion || record.formSnapshot.version || 'Not recorded' }}\n                    </dd>\n                  </div>\n                  <div>\n                    <dt>Evidence</dt>\n                    <dd>{{ captureLabel(record) }}</dd>\n                  </div>\n                </dl>\n              </section>\n            </aside>\n          </div>\n        } @else {\n          @if (record.formSnapshot.sections.length) {\n            <div class=\"application-record__application\">\n              <nav aria-label=\"Application form sections\">\n                <span>Form sections</span>\n                @for (section of record.formSnapshot.sections; track section.id) {\n                  <button\n                    type=\"button\"\n                    [class.is-active]=\"activeSectionId() === section.id\"\n                    (click)=\"setSection(section.id)\"\n                  >\n                    <span>{{ section.name }}</span>\n                    <small\n                      >{{ section.subsections.length }} group{{\n                        section.subsections.length === 1 ? '' : 's'\n                      }}</small\n                    >\n                  </button>\n                }\n              </nav>\n\n              <div class=\"application-record__evidence\">\n                @if (activeSection(); as section) {\n                  <header>\n                    <span class=\"application-record__evidence-icon\"\n                      ><svg lucideBadgeCheck size=\"18\" aria-hidden=\"true\"></svg\n                    ></span>\n                    <div>\n                      <h3>{{ section.name }}</h3>\n                      <p>\n                        {{ section.description || 'Saved application responses for this section.' }}\n                      </p>\n                    </div>\n                  </header>\n                  @for (subsection of section.subsections; track subsection.id) {\n                    <section class=\"application-record__subsection\">\n                      <header>\n                        <h4>{{ subsection.name }}</h4>\n                        @if (subsection.description) {\n                          <p>{{ subsection.description }}</p>\n                        }\n                      </header>\n                      @if (subsection.isRepeatable) {\n                        @for (\n                          entry of entries(record, subsection);\n                          track $index;\n                          let entryIndex = $index\n                        ) {\n                          <article class=\"application-record__repeat-entry\">\n                            <strong>{{ subsection.name }} {{ entryIndex + 1 }}</strong>\n                            <dl>\n                              @for (field of subsection.fields; track field.id) {\n                                <div>\n                                  <dt>{{ field.name }}</dt>\n                                  <dd>{{ value(field, entry) }}</dd>\n                                </div>\n                              }\n                            </dl>\n                          </article>\n                        } @empty {\n                          <p class=\"application-record__no-data\">\n                            No entries were saved for this group.\n                          </p>\n                        }\n                      } @else {\n                        <dl class=\"application-record__responses\">\n                          @for (field of subsection.fields; track field.id) {\n                            <div>\n                              <dt>{{ field.name }}</dt>\n                              <dd>{{ value(field, record.responses) }}</dd>\n                            </div>\n                          } @empty {\n                            <div>\n                              <dt>Responses</dt>\n                              <dd>No fields were configured in this group.</dd>\n                            </div>\n                          }\n                        </dl>\n                      }\n                    </section>\n                  } @empty {\n                    <div class=\"application-record__no-data\">\n                      No response groups are present in this section.\n                    </div>\n                  }\n                }\n              </div>\n            </div>\n          } @else {\n            <div class=\"erp-empty-panel\">\n              <span class=\"erp-empty-panel__icon\"\n                ><svg lucideFileText size=\"20\" aria-hidden=\"true\"></svg\n              ></span>\n              <h2>No application snapshot</h2>\n              <p>This record does not contain a saved form structure to display.</p>\n            </div>\n          }\n        }\n      </div>\n    </section>\n  }\n</erp-admin-page>\n", styles: ["/* ERP-LOCAL-STYLE: Read-only Application Record composes shared page and card primitives around versioned admission evidence. */\n:host {\n  display: block;\n}\n\n.application-record__page-actions {\n  display: flex;\n  gap: var(--erp-space-2);\n}\n\n.application-record__shell {\n  overflow: hidden;\n}\n\n.application-record__identity {\n  display: grid;\n  grid-template-columns: auto minmax(0, 1fr) auto;\n  align-items: center;\n  gap: var(--erp-space-4);\n  padding: var(--erp-space-5) var(--erp-space-6);\n  background: var(--erp-surface-raised);\n  border-bottom: 1px solid var(--erp-border-subtle);\n}\n\n.application-record__identity-icon,\n.application-record__evidence-icon {\n  display: inline-grid;\n  width: var(--erp-control-height-large);\n  height: var(--erp-control-height-large);\n  place-items: center;\n  color: var(--erp-blue-700);\n  background: var(--erp-blue-50);\n  border: 1px solid var(--erp-border-default);\n  border-radius: var(--erp-radius-compact);\n}\n\n.application-record__identity > div > span {\n  color: var(--erp-blue-700);\n  font-size: var(--erp-font-size-xs);\n  font-weight: var(--erp-weight-bold);\n  letter-spacing: 0.04em;\n  text-transform: uppercase;\n}\n\n.application-record__identity h2,\n.application-record__identity p {\n  margin: 0;\n}\n\n.application-record__identity h2 {\n  margin-top: var(--erp-space-1);\n  color: var(--erp-text-heading);\n  font-size: var(--erp-font-section-title);\n}\n\n.application-record__identity p {\n  margin-top: var(--erp-space-1);\n  color: var(--erp-text-muted);\n  font-size: var(--erp-font-caption);\n}\n\n.application-record__identity-status {\n  display: grid;\n  justify-items: end;\n  gap: var(--erp-space-2);\n}\n\n.application-record__identity-status small {\n  color: var(--erp-text-muted);\n  font-size: var(--erp-font-size-xs);\n}\n\n.application-record__tabs {\n  display: flex;\n  gap: var(--erp-space-5);\n  padding: 0 var(--erp-space-6);\n  background: var(--erp-surface-overlay);\n  border-bottom: 1px solid var(--erp-border-subtle);\n}\n\n.application-record__tabs a {\n  display: inline-flex;\n  min-height: var(--erp-control-height-large);\n  align-items: center;\n  gap: var(--erp-space-2);\n  padding: 0;\n  color: var(--erp-text-muted);\n  background: transparent;\n  border: 0;\n  border-bottom: 2px solid transparent;\n  font-size: var(--erp-font-label);\n  font-weight: var(--erp-weight-semibold);\n  text-decoration: none;\n  cursor: pointer;\n}\n\n.application-record__tabs a:hover,\n.application-record__tabs a.is-active {\n  color: var(--erp-blue-700);\n}\n\n.application-record__tabs a.is-active {\n  border-bottom-color: var(--erp-blue-600);\n}\n\n.application-record__content {\n  min-height: var(--erp-state-panel-min-height);\n  padding: var(--erp-space-5);\n  background: var(--erp-surface-detail-soft);\n}\n\n.application-record__overview {\n  display: grid;\n  grid-template-columns: minmax(0, 2fr) minmax(18rem, 1fr);\n  align-items: start;\n  gap: var(--erp-space-4);\n}\n\n.application-record__side {\n  display: grid;\n  gap: var(--erp-space-4);\n}\n\n.application-record__section,\n.application-record__evidence {\n  overflow: hidden;\n  background: var(--erp-surface-overlay);\n  border: 1px solid var(--erp-border-subtle);\n  border-radius: var(--erp-radius-compact);\n}\n\n.application-record__section > header,\n.application-record__subsection > header {\n  padding: var(--erp-space-3) var(--erp-space-4);\n  background: var(--erp-surface-page-panel);\n  border-bottom: 1px solid var(--erp-border-subtle);\n}\n\n.application-record__section h3,\n.application-record__section p,\n.application-record__subsection h4,\n.application-record__subsection p,\n.application-record__evidence h3,\n.application-record__evidence p {\n  margin: 0;\n}\n\n.application-record__section h3,\n.application-record__evidence h3 {\n  color: var(--erp-text-heading);\n  font-size: var(--erp-font-label);\n}\n\n.application-record__section p,\n.application-record__subsection p,\n.application-record__evidence p {\n  margin-top: var(--erp-space-1);\n  color: var(--erp-text-muted);\n  font-size: var(--erp-font-size-xs);\n}\n\n.application-record__facts {\n  display: grid;\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n  margin: 0;\n  padding: var(--erp-space-2) var(--erp-space-4);\n}\n\n.application-record__facts > div,\n.application-record__timeline > div,\n.application-record__responses > div,\n.application-record__repeat-entry dl > div {\n  padding: var(--erp-space-3) 0;\n  border-bottom: 1px solid var(--erp-border-subtle);\n}\n\n.application-record__facts > div:nth-child(odd),\n.application-record__responses > div:nth-child(odd),\n.application-record__repeat-entry dl > div:nth-child(odd) {\n  padding-right: var(--erp-space-4);\n}\n\n.application-record__facts > div:nth-last-child(-n + 2),\n.application-record__timeline > div:last-child,\n.application-record__responses > div:nth-last-child(-n + 2),\n.application-record__repeat-entry dl > div:nth-last-child(-n + 2) {\n  border-bottom: 0;\n}\n\n.application-record__facts dt,\n.application-record__timeline dt,\n.application-record__responses dt,\n.application-record__repeat-entry dt {\n  color: var(--erp-text-muted);\n  font-size: var(--erp-font-size-xs);\n}\n\n.application-record__facts dd,\n.application-record__timeline dd,\n.application-record__responses dd,\n.application-record__repeat-entry dd {\n  margin: var(--erp-space-1) 0 0;\n  overflow-wrap: anywhere;\n  color: var(--erp-text-heading);\n  font-size: var(--erp-font-label);\n  font-weight: var(--erp-weight-semibold);\n}\n\n.application-record__timeline {\n  display: grid;\n  margin: 0;\n  padding: 0 var(--erp-space-4);\n}\n\n.application-record__timeline > div {\n  display: grid;\n  grid-template-columns: minmax(0, 1fr) auto;\n  align-items: baseline;\n  gap: var(--erp-space-3);\n}\n\n.application-record__timeline dd {\n  text-align: right;\n}\n\n.application-record__application {\n  display: grid;\n  grid-template-columns: 14rem minmax(0, 1fr);\n  align-items: start;\n  gap: var(--erp-space-4);\n}\n\n.application-record__application > nav {\n  position: sticky;\n  top: var(--erp-space-4);\n  display: grid;\n  gap: var(--erp-space-1);\n  padding: var(--erp-space-2);\n  background: var(--erp-surface-overlay);\n  border: 1px solid var(--erp-border-subtle);\n  border-radius: var(--erp-radius-compact);\n}\n\n.application-record__application > nav > span {\n  padding: var(--erp-space-2) var(--erp-space-3);\n  color: var(--erp-text-muted);\n  font-size: var(--erp-font-size-xs);\n  font-weight: var(--erp-weight-bold);\n  letter-spacing: 0.06em;\n  text-transform: uppercase;\n}\n\n.application-record__application > nav button {\n  display: grid;\n  gap: var(--erp-space-1);\n  padding: var(--erp-space-2) var(--erp-space-3);\n  color: var(--erp-text-body);\n  text-align: left;\n  background: transparent;\n  border: 1px solid transparent;\n  border-radius: var(--erp-radius-control);\n  cursor: pointer;\n}\n\n.application-record__application > nav button:hover,\n.application-record__application > nav button.is-active {\n  color: var(--erp-blue-700);\n  background: var(--erp-blue-50);\n  border-color: var(--erp-border-default);\n}\n\n.application-record__application > nav button span {\n  font-size: var(--erp-font-label);\n  font-weight: var(--erp-weight-semibold);\n}\n\n.application-record__application > nav button small {\n  color: var(--erp-text-muted);\n  font-size: var(--erp-font-size-xs);\n}\n\n.application-record__evidence > header {\n  display: grid;\n  grid-template-columns: auto minmax(0, 1fr);\n  align-items: center;\n  gap: var(--erp-space-3);\n  padding: var(--erp-space-4);\n  background: var(--erp-surface-page-panel);\n  border-bottom: 1px solid var(--erp-border-subtle);\n}\n\n.application-record__evidence-icon {\n  width: var(--erp-control-height-compact);\n  height: var(--erp-control-height-compact);\n}\n\n.application-record__subsection + .application-record__subsection {\n  border-top: 1px solid var(--erp-border-subtle);\n}\n\n.application-record__subsection h4 {\n  color: var(--erp-text-heading);\n  font-size: var(--erp-font-label);\n}\n\n.application-record__responses,\n.application-record__repeat-entry dl {\n  display: grid;\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n  margin: 0;\n  padding: var(--erp-space-2) var(--erp-space-4);\n}\n\n.application-record__repeat-entry {\n  margin: var(--erp-space-4);\n  border: 1px solid var(--erp-border-subtle);\n  border-radius: var(--erp-radius-control);\n}\n\n.application-record__repeat-entry > strong {\n  display: block;\n  padding: var(--erp-space-2) var(--erp-space-4);\n  color: var(--erp-text-heading);\n  font-size: var(--erp-font-label);\n  background: var(--erp-surface-detail-soft);\n  border-bottom: 1px solid var(--erp-border-subtle);\n}\n\n.application-record__no-data {\n  padding: var(--erp-space-6) !important;\n  margin: 0 !important;\n  color: var(--erp-text-muted);\n  text-align: center;\n  font-size: var(--erp-font-caption) !important;\n}\n\n.application-record__loading {\n  display: grid;\n  gap: var(--erp-space-5);\n  padding: var(--erp-space-6);\n}\n\n.application-record__loading > div {\n  display: grid;\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n  gap: var(--erp-space-4);\n}\n\n.application-record__loading > div .erp-skeleton {\n  min-height: calc(var(--erp-space-12) * 2);\n}\n\n.application-record__skeleton-title {\n  width: 34%;\n}\n\n.application-record__skeleton-tabs {\n  width: 22%;\n}\n\n@media (max-width: 64rem) {\n  .application-record__overview {\n    grid-template-columns: 1fr;\n  }\n}\n\n@media (max-width: 48rem) {\n  .application-record__page-actions,\n  .application-record__identity {\n    align-items: stretch;\n  }\n\n  .application-record__page-actions {\n    flex-wrap: wrap;\n  }\n\n  .application-record__identity {\n    grid-template-columns: auto minmax(0, 1fr);\n  }\n\n  .application-record__identity-status {\n    grid-column: 1 / -1;\n    justify-items: start;\n  }\n\n  .application-record__tabs {\n    padding-inline: var(--erp-space-4);\n  }\n\n  .application-record__content {\n    padding: var(--erp-space-3);\n  }\n\n  .application-record__application {\n    grid-template-columns: 1fr;\n  }\n\n  .application-record__application > nav {\n    position: static;\n    display: flex;\n    overflow-x: auto;\n  }\n\n  .application-record__application > nav > span {\n    display: none;\n  }\n\n  .application-record__application > nav button {\n    min-width: 10rem;\n  }\n\n  .application-record__facts,\n  .application-record__responses,\n  .application-record__repeat-entry dl,\n  .application-record__loading > div {\n    grid-template-columns: 1fr;\n  }\n\n  .application-record__facts > div:nth-last-child(2),\n  .application-record__responses > div:nth-last-child(2),\n  .application-record__repeat-entry dl > div:nth-last-child(2) {\n    border-bottom: 1px solid var(--erp-border-subtle);\n  }\n\n  .application-record__facts > div:nth-child(odd),\n  .application-record__responses > div:nth-child(odd),\n  .application-record__repeat-entry dl > div:nth-child(odd) {\n    padding-right: 0;\n  }\n}\n"] }]
    }], () => [], null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(ApplicationRecordComponent, { className: "ApplicationRecordComponent", filePath: "frontend/src/app/features/admin/admissions/application-record/application-record.component.ts", lineNumber: 52 }); })();
