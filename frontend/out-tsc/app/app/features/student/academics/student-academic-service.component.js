import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { LucideArrowLeft, LucideCalendarDays, LucideCheck, LucideDownload, LucideFileText, LucideInfo, LucideSend, LucideUpload, } from '@lucide/angular';
import { StudentSessionService } from '../shared/services/student-session.service';
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
function StudentAcademicServiceComponent_Conditional_18_Template(rf, ctx) { if (rf & 1) {
    const _r1 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 9)(1, "span");
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(2, "svg", 11);
    i0.ɵɵelementEnd();
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(3, "h2");
    i0.ɵɵtext(4, "Request submitted");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "p");
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "button", 12);
    i0.ɵɵlistener("click", function StudentAcademicServiceComponent_Conditional_18_Template_button_click_7_listener() { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.submitted.set(false)); });
    i0.ɵɵtext(8, "Create another");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(6);
    i0.ɵɵtextInterpolate1("Your ", ctx_r1.service().title.toLowerCase(), " request has been recorded successfully.");
} }
function StudentAcademicServiceComponent_Conditional_19_For_6_Template(rf, ctx) { if (rf & 1) {
    const _r3 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "article")(1, "span");
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(2, "svg", 15);
    i0.ɵɵelementEnd();
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(3, "div")(4, "strong");
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "small");
    i0.ɵɵtext(7);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(8, "button", 12);
    i0.ɵɵlistener("click", function StudentAcademicServiceComponent_Conditional_19_For_6_Template_button_click_8_listener() { const option_r4 = i0.ɵɵrestoreView(_r3).$implicit; const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.download(option_r4)); });
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(9, "svg", 16);
    i0.ɵɵtext(10, "Download ");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const option_r4 = ctx.$implicit;
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(option_r4);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1("Updated for ", ctx_r1.period());
} }
function StudentAcademicServiceComponent_Conditional_19_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "h2");
    i0.ɵɵtext(1, "Available documents");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(2, "p", 13);
    i0.ɵɵtext(3, "Choose a document to generate and download.");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "div", 14);
    i0.ɵɵrepeaterCreate(5, StudentAcademicServiceComponent_Conditional_19_For_6_Template, 11, 2, "article", null, i0.ɵɵrepeaterTrackByIdentity);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(5);
    i0.ɵɵrepeater(ctx_r1.service().options);
} }
function StudentAcademicServiceComponent_Conditional_20_Conditional_4_For_2_Template(rf, ctx) { if (rf & 1) {
    const _r5 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 12);
    i0.ɵɵlistener("click", function StudentAcademicServiceComponent_Conditional_20_Conditional_4_For_2_Template_button_click_0_listener() { const option_r6 = i0.ɵɵrestoreView(_r5).$implicit; const ctx_r1 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r1.selectedOption.set(option_r6)); });
    i0.ɵɵelementStart(1, "span");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "i");
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(4, "svg", 11);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const option_r6 = ctx.$implicit;
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵclassProp("selected", ctx_r1.selectedOption() === option_r6);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(option_r6);
} }
function StudentAcademicServiceComponent_Conditional_20_Conditional_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 17);
    i0.ɵɵrepeaterCreate(1, StudentAcademicServiceComponent_Conditional_20_Conditional_4_For_2_Template, 5, 3, "button", 21, i0.ɵɵrepeaterTrackByIdentity);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵrepeater(ctx_r1.service().options);
} }
function StudentAcademicServiceComponent_Conditional_20_Conditional_5_Template(rf, ctx) { if (rf & 1) {
    const _r7 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 22)(1, "label")(2, "span");
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "input", 23);
    i0.ɵɵlistener("ngModelChange", function StudentAcademicServiceComponent_Conditional_20_Conditional_5_Template_input_ngModelChange_4_listener($event) { i0.ɵɵrestoreView(_r7); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.reference.set($event)); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(5, "label")(6, "span");
    i0.ɵɵtext(7, "Student");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(8, "input", 24);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(9, "label", 25)(10, "span");
    i0.ɵɵtext(11, "Additional details");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(12, "textarea", 26);
    i0.ɵɵlistener("ngModelChange", function StudentAcademicServiceComponent_Conditional_20_Conditional_5_Template_textarea_ngModelChange_12_listener($event) { i0.ɵɵrestoreView(_r7); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.note.set($event)); });
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    let tmp_5_0;
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(ctx_r1.service().mode === "identity" ? "ABC account number" : "Request title");
    i0.ɵɵadvance();
    i0.ɵɵproperty("placeholder", ctx_r1.service().mode === "identity" ? "Enter 12-digit ABC ID" : "Enter request title")("ngModel", ctx_r1.reference());
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("value", ((tmp_5_0 = ctx_r1.session.profile()) == null ? null : tmp_5_0.name) || "Student");
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("ngModel", ctx_r1.note());
} }
function StudentAcademicServiceComponent_Conditional_20_Conditional_6_Template(rf, ctx) { if (rf & 1) {
    const _r8 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "label", 18)(1, "input", 27);
    i0.ɵɵlistener("change", function StudentAcademicServiceComponent_Conditional_20_Conditional_6_Template_input_change_1_listener($event) { i0.ɵɵrestoreView(_r8); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.selectFile($event)); });
    i0.ɵɵelementEnd();
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(2, "svg", 28);
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(3, "strong");
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "small");
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(ctx_r1.fileName() || "Choose a file to upload");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r1.service().helper);
} }
function StudentAcademicServiceComponent_Conditional_20_Conditional_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "a", 19);
    i0.ɵɵtext(1, "View timetable ");
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(2, "svg", 5);
    i0.ɵɵelementEnd();
} }
function StudentAcademicServiceComponent_Conditional_20_Conditional_8_Template(rf, ctx) { if (rf & 1) {
    const _r9 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 29);
    i0.ɵɵlistener("click", function StudentAcademicServiceComponent_Conditional_20_Conditional_8_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r9); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.submit()); });
    i0.ɵɵtext(1);
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(2, "svg", 30);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r1.service().action, " ");
} }
function StudentAcademicServiceComponent_Conditional_20_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "h2");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(2, "p", 13);
    i0.ɵɵtext(3, "Complete the information below to continue.");
    i0.ɵɵelementEnd();
    i0.ɵɵconditionalCreate(4, StudentAcademicServiceComponent_Conditional_20_Conditional_4_Template, 3, 0, "div", 17)(5, StudentAcademicServiceComponent_Conditional_20_Conditional_5_Template, 13, 5);
    i0.ɵɵconditionalCreate(6, StudentAcademicServiceComponent_Conditional_20_Conditional_6_Template, 7, 2, "label", 18);
    i0.ɵɵconditionalCreate(7, StudentAcademicServiceComponent_Conditional_20_Conditional_7_Template, 3, 0, "a", 19)(8, StudentAcademicServiceComponent_Conditional_20_Conditional_8_Template, 3, 1, "button", 20);
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r1.service().mode === "catalog" ? "Select an option" : "Request details");
    i0.ɵɵadvance(3);
    i0.ɵɵconditional(ctx_r1.service().mode === "catalog" ? 4 : 5);
    i0.ɵɵadvance(2);
    i0.ɵɵconditional(ctx_r1.service().mode === "upload" ? 6 : -1);
    i0.ɵɵadvance();
    i0.ɵɵconditional(ctx_r1.service().title === "Current Subjects" ? 7 : 8);
} }
const ASSET_ROOT = '/assets/student/academics';
const SERVICES = {
    assignments: {
        title: 'Assignments',
        description: 'View upcoming work and submit your assignments.',
        icon: `${ASSET_ROOT}/assignment.png`,
        eyebrow: 'Learning & Schedule',
        mode: 'upload',
        action: 'Submit assignment',
        helper: 'Attach your completed PDF or document before submitting.',
    },
    feedback: {
        title: 'Student Feedback',
        description: 'Share feedback about your academic experience.',
        icon: `${ASSET_ROOT}/feedback.png`,
        eyebrow: 'Learning & Schedule',
        mode: 'form',
        action: 'Send feedback',
        helper: 'Your feedback is reviewed by the academic office.',
    },
    subjects: {
        title: 'Current Subjects',
        description: 'Review subjects registered for your current semester.',
        icon: `${ASSET_ROOT}/current-subjects.png`,
        eyebrow: 'Learning & Schedule',
        mode: 'catalog',
        action: 'View timetable',
        helper: 'Subject details reflect your current academic registration.',
        options: [
            'Computer Networks',
            'Operating Systems',
            'Data Structures',
            'Database Management Systems',
        ],
    },
    minor: {
        title: 'Minor / Specialization Course',
        description: 'Explore and apply for an additional specialization.',
        icon: `${ASSET_ROOT}/minor-specialization.png`,
        eyebrow: 'Registration & Programmes',
        mode: 'catalog',
        action: 'Save preference',
        helper: 'Availability depends on eligibility and seat capacity.',
        options: ['Artificial Intelligence', 'Cyber Security', 'Cloud Computing', 'Data Analytics'],
    },
    'semester-registration': {
        title: 'Semester Registration',
        description: 'Complete registration for your next semester.',
        icon: `${ASSET_ROOT}/semester-registration.png`,
        eyebrow: 'Registration & Programmes',
        mode: 'form',
        action: 'Submit registration',
        helper: 'Verify your details before submitting the registration.',
    },
    enrollment: {
        title: 'Enrollment Form',
        description: 'Complete and submit your academic enrollment details.',
        icon: `${ASSET_ROOT}/enrollment-form.png`,
        eyebrow: 'Registration & Programmes',
        mode: 'form',
        action: 'Submit enrollment',
        helper: 'All required fields must match your official student record.',
    },
    electives: {
        title: 'Elective Subject Options',
        description: 'Choose preferred elective subjects for the semester.',
        icon: `${ASSET_ROOT}/elective-subjects.png`,
        eyebrow: 'Registration & Programmes',
        mode: 'catalog',
        action: 'Confirm selection',
        helper: 'Final allocation is subject to timetable and seat availability.',
        options: ['Machine Learning', 'Internet of Things', 'Information Security', 'Mobile Computing'],
    },
    thesis: {
        title: 'Submit Thesis and Subject',
        description: 'Provide your thesis topic and supporting document.',
        icon: `${ASSET_ROOT}/thesis-submission.png`,
        eyebrow: 'Registration & Programmes',
        mode: 'upload',
        action: 'Submit thesis',
        helper: 'Upload a PDF document with the approved title and synopsis.',
    },
    'international-document': {
        title: 'International Document',
        description: 'Apply for transcripts and documents for international use.',
        icon: `${ASSET_ROOT}/international-document.png`,
        eyebrow: 'Records & Services',
        mode: 'form',
        action: 'Submit application',
        helper: 'The academic office will verify your request before processing.',
    },
    'abc-account': {
        title: 'ABC Account Number',
        description: 'View and link your Academic Bank of Credits ID.',
        icon: `${ASSET_ROOT}/abc-account.png`,
        eyebrow: 'Records & Services',
        mode: 'identity',
        action: 'Save ABC ID',
        helper: 'Enter the 12-digit ABC ID linked to your DigiLocker account.',
    },
    'vehicle-registration': {
        title: 'Vehicle Registration',
        description: 'Register a vehicle for campus access.',
        icon: `${ASSET_ROOT}/vehicle-registration.png`,
        eyebrow: 'Records & Services',
        mode: 'form',
        action: 'Register vehicle',
        helper: 'Keep the registration certificate available for verification.',
    },
    'document-upload': {
        title: 'Document Upload',
        description: 'Upload academic and identity documents securely.',
        icon: `${ASSET_ROOT}/document-upload.png`,
        eyebrow: 'Records & Services',
        mode: 'upload',
        action: 'Upload document',
        helper: 'PDF, JPG and PNG files up to 10 MB are supported.',
    },
    'document-download': {
        title: 'Student Document Download',
        description: 'Access available student documents and letters.',
        icon: `${ASSET_ROOT}/document-download.png`,
        eyebrow: 'Records & Services',
        mode: 'download',
        action: 'Download',
        helper: 'Documents are generated using your current student record.',
        options: ['Bonafide Certificate', 'Enrollment Letter', 'Student Profile Summary'],
    },
};
export class StudentAcademicServiceComponent {
    route = inject(ActivatedRoute);
    router = inject(Router);
    session = inject(StudentSessionService);
    service = signal(SERVICES['assignments'], ...(ngDevMode ? [{ debugName: "service" }] : /* istanbul ignore next */ []));
    selectedOption = signal('', ...(ngDevMode ? [{ debugName: "selectedOption" }] : /* istanbul ignore next */ []));
    note = signal('', ...(ngDevMode ? [{ debugName: "note" }] : /* istanbul ignore next */ []));
    reference = signal('', ...(ngDevMode ? [{ debugName: "reference" }] : /* istanbul ignore next */ []));
    fileName = signal('', ...(ngDevMode ? [{ debugName: "fileName" }] : /* istanbul ignore next */ []));
    submitted = signal(false, ...(ngDevMode ? [{ debugName: "submitted" }] : /* istanbul ignore next */ []));
    period = computed(() => `${this.session.profile()?.academicSession || 'Current session'} · Semester ${this.session.profile()?.currentSemester || 1}`, ...(ngDevMode ? [{ debugName: "period" }] : /* istanbul ignore next */ []));
    constructor() {
        this.route.paramMap.subscribe((params) => {
            const serviceId = params.get('serviceId') || '';
            if (serviceId === 'semester-registration') {
                void this.router.navigateByUrl('/student/academics/semester-registration');
                return;
            }
            const definition = SERVICES[serviceId];
            if (!definition) {
                void this.router.navigateByUrl('/student/academics');
                return;
            }
            this.service.set(definition);
            this.selectedOption.set(definition.options?.[0] || '');
            this.note.set('');
            this.reference.set('');
            this.fileName.set('');
            this.submitted.set(false);
        });
    }
    selectFile(event) {
        const file = event.target.files?.[0];
        this.fileName.set(file?.name || '');
        this.submitted.set(false);
    }
    submit() {
        this.submitted.set(true);
    }
    download(name) {
        const profile = this.session.profile();
        const content = `${name}\n\nStudent: ${profile?.name || 'Student'}\nStudent ID: ${profile?.studentId || ''}\nAcademic period: ${this.period()}\n`;
        const link = document.createElement('a');
        link.href = URL.createObjectURL(new Blob([content], { type: 'text/plain' }));
        link.download = `${name.toLowerCase().replace(/\s+/g, '-')}.txt`;
        link.click();
        URL.revokeObjectURL(link.href);
    }
    static ɵfac = function StudentAcademicServiceComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || StudentAcademicServiceComponent)(); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: StudentAcademicServiceComponent, selectors: [["erp-student-academic-service"]], decls: 43, vars: 9, consts: [[1, "academic-service-page"], ["routerLink", "/student/academics", 1, "back-link"], ["lucideArrowLeft", ""], [1, "service-hero"], [1, "service-copy"], ["lucideCalendarDays", ""], ["width", "320", "height", "320", "alt", "", "aria-hidden", "true", 3, "src"], [1, "service-workspace"], [1, "service-panel"], [1, "success-state"], ["lucideInfo", ""], ["lucideCheck", ""], ["type", "button", 3, "click"], [1, "section-copy"], [1, "document-list"], ["lucideFileText", ""], ["lucideDownload", ""], [1, "option-grid"], [1, "upload-box"], ["routerLink", "/student/academics/timetable", 1, "primary-action"], ["type", "button", 1, "primary-action"], ["type", "button", 3, "selected"], [1, "field-grid"], [3, "ngModelChange", "placeholder", "ngModel"], ["readonly", "", 3, "value"], [1, "notes"], ["rows", "5", "placeholder", "Add any information the academic office should know...", 3, "ngModelChange", "ngModel"], ["type", "file", "accept", ".pdf,.doc,.docx,.jpg,.jpeg,.png", 3, "change"], ["lucideUpload", ""], ["type", "button", 1, "primary-action", 3, "click"], ["lucideSend", ""]], template: function StudentAcademicServiceComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "main", 0)(1, "a", 1);
            i0.ɵɵnamespaceSVG();
            i0.ɵɵelement(2, "svg", 2);
            i0.ɵɵtext(3, "Back to Academics");
            i0.ɵɵelementEnd();
            i0.ɵɵnamespaceHTML();
            i0.ɵɵelementStart(4, "header", 3)(5, "div", 4)(6, "small");
            i0.ɵɵtext(7);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(8, "h1");
            i0.ɵɵtext(9);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(10, "p");
            i0.ɵɵtext(11);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(12, "span");
            i0.ɵɵnamespaceSVG();
            i0.ɵɵelement(13, "svg", 5);
            i0.ɵɵtext(14);
            i0.ɵɵelementEnd()();
            i0.ɵɵnamespaceHTML();
            i0.ɵɵelement(15, "img", 6);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(16, "section", 7)(17, "div", 8);
            i0.ɵɵconditionalCreate(18, StudentAcademicServiceComponent_Conditional_18_Template, 9, 1, "div", 9)(19, StudentAcademicServiceComponent_Conditional_19_Template, 7, 0)(20, StudentAcademicServiceComponent_Conditional_20_Template, 9, 4);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(21, "aside")(22, "h2");
            i0.ɵɵtext(23, "Before you continue");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(24, "p");
            i0.ɵɵnamespaceSVG();
            i0.ɵɵelement(25, "svg", 10);
            i0.ɵɵtext(26);
            i0.ɵɵelementEnd();
            i0.ɵɵnamespaceHTML();
            i0.ɵɵelementStart(27, "dl")(28, "div")(29, "dt");
            i0.ɵɵtext(30, "Student ID");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(31, "dd");
            i0.ɵɵtext(32);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(33, "div")(34, "dt");
            i0.ɵɵtext(35, "Academic period");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(36, "dd");
            i0.ɵɵtext(37);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(38, "div")(39, "dt");
            i0.ɵɵtext(40, "Status");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(41, "dd");
            i0.ɵɵtext(42, "Available");
            i0.ɵɵelementEnd()()()()()();
        } if (rf & 2) {
            let tmp_7_0;
            i0.ɵɵadvance(7);
            i0.ɵɵtextInterpolate(ctx.service().eyebrow);
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate(ctx.service().title);
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate(ctx.service().description);
            i0.ɵɵadvance(3);
            i0.ɵɵtextInterpolate(ctx.period());
            i0.ɵɵadvance();
            i0.ɵɵproperty("src", ctx.service().icon, i0.ɵɵsanitizeUrl);
            i0.ɵɵadvance(3);
            i0.ɵɵconditional(ctx.submitted() ? 18 : ctx.service().mode === "download" ? 19 : 20);
            i0.ɵɵadvance(8);
            i0.ɵɵtextInterpolate(ctx.service().helper);
            i0.ɵɵadvance(6);
            i0.ɵɵtextInterpolate(((tmp_7_0 = ctx.session.profile()) == null ? null : tmp_7_0.studentId) || "\u2014");
            i0.ɵɵadvance(5);
            i0.ɵɵtextInterpolate(ctx.period());
        } }, dependencies: [FormsModule, i1.DefaultValueAccessor, i1.NgControlStatus, i1.NgModel, RouterLink,
            LucideArrowLeft,
            LucideCalendarDays,
            LucideCheck,
            LucideDownload,
            LucideFileText,
            LucideInfo,
            LucideSend,
            LucideUpload], styles: ["[_nghost-%COMP%] {\n  display: block;\n}\n.academic-service-page[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 18px;\n  color: var(--student-color-text);\n}\n.back-link[_ngcontent-%COMP%] {\n  display: flex;\n  width: max-content;\n  align-items: center;\n  gap: 8px;\n  color: var(--student-color-primary);\n  font-weight: 750;\n  text-decoration: none;\n}\n.back-link[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 19px;\n}\n.service-hero[_ngcontent-%COMP%] {\n  display: flex;\n  min-height: 210px;\n  align-items: center;\n  justify-content: space-between;\n  overflow: hidden;\n  padding: 26px 40px;\n  border: 1px solid var(--student-color-border);\n  border-radius: 22px;\n  background: linear-gradient(\n    135deg,\n    var(--student-color-surface),\n    var(--student-color-primary-soft)\n  );\n  box-shadow: var(--student-shadow-card);\n}\n.service-copy[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  color: var(--student-color-primary);\n  font-weight: 800;\n}\n.service-copy[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  margin: 9px 0 8px;\n  font-size: clamp(30px, 4vw, 44px);\n  letter-spacing: -0.035em;\n}\n.service-copy[_ngcontent-%COMP%]    > p[_ngcontent-%COMP%] {\n  max-width: 650px;\n  margin: 0;\n  color: var(--student-color-text-secondary);\n  font-size: 17px;\n}\n.service-copy[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  margin-top: 22px;\n  font-weight: 700;\n}\n.service-copy[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 19px;\n  color: var(--student-color-primary);\n}\n.service-hero[_ngcontent-%COMP%]    > img[_ngcontent-%COMP%] {\n  width: 190px;\n  height: 160px;\n  object-fit: contain;\n}\n.service-workspace[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: minmax(0, 2fr) minmax(260px, 1fr);\n  gap: 18px;\n}\n.service-panel[_ngcontent-%COMP%], \n.service-workspace[_ngcontent-%COMP%]   aside[_ngcontent-%COMP%] {\n  padding: 26px;\n  border: 1px solid var(--student-color-border);\n  border-radius: 20px;\n  background: var(--student-color-surface);\n  box-shadow: var(--student-shadow-card);\n}\nh2[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 21px;\n}\n.section-copy[_ngcontent-%COMP%] {\n  margin: 5px 0 22px;\n  color: var(--student-color-text-secondary);\n}\n.field-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 16px;\n}\nlabel[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  display: block;\n  margin-bottom: 8px;\n  font-weight: 750;\n}\ninput[_ngcontent-%COMP%], \ntextarea[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n  width: 100%;\n  border: 1px solid var(--student-color-border-strong);\n  border-radius: 12px;\n  outline: 0;\n  color: var(--student-color-text);\n  background: var(--student-color-surface);\n  font: inherit;\n}\ninput[_ngcontent-%COMP%] {\n  height: 48px;\n  padding: 0 14px;\n}\ntextarea[_ngcontent-%COMP%] {\n  padding: 13px;\n  resize: vertical;\n}\n.notes[_ngcontent-%COMP%] {\n  display: block;\n  margin-top: 16px;\n}\n.option-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 12px;\n}\n.option-grid[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  display: flex;\n  min-height: 64px;\n  align-items: center;\n  justify-content: space-between;\n  padding: 0 16px;\n  border: 1px solid var(--student-color-border-strong);\n  border-radius: 13px;\n  color: var(--student-color-text);\n  background: var(--student-color-surface);\n  font: inherit;\n  font-weight: 700;\n  text-align: left;\n}\n.option-grid[_ngcontent-%COMP%]   button.selected[_ngcontent-%COMP%] {\n  border-color: var(--student-color-primary);\n  background: var(--student-color-primary-soft);\n}\n.option-grid[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  display: grid;\n  width: 27px;\n  height: 27px;\n  place-items: center;\n  border-radius: 50%;\n  color: var(--student-color-surface);\n  background: var(--student-color-primary);\n  opacity: 0;\n}\n.option-grid[_ngcontent-%COMP%]   button.selected[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  opacity: 1;\n}\n.option-grid[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 16px;\n}\n.upload-box[_ngcontent-%COMP%] {\n  display: grid;\n  min-height: 150px;\n  place-items: center;\n  margin-top: 18px;\n  padding: 20px;\n  border: 1px dashed var(--student-color-primary-middle);\n  border-radius: 15px;\n  background: var(--student-color-primary-subtle);\n  cursor: pointer;\n  text-align: center;\n}\n.upload-box[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  display: none;\n}\n.upload-box[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 36px;\n  height: 36px;\n  color: var(--student-color-primary);\n}\n.upload-box[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  color: var(--student-color-text-secondary);\n}\n.primary-action[_ngcontent-%COMP%] {\n  display: flex;\n  width: max-content;\n  min-height: 48px;\n  align-items: center;\n  gap: 10px;\n  margin-top: 22px;\n  padding: 0 20px;\n  border: 0;\n  border-radius: 12px;\n  color: var(--student-color-text-inverse);\n  background: var(--student-color-primary);\n  font: inherit;\n  font-weight: 800;\n  text-decoration: none;\n  cursor: pointer;\n}\n.primary-action[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 19px;\n}\n.service-workspace[_ngcontent-%COMP%]   aside[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 10px;\n  padding: 14px;\n  border-radius: 12px;\n  color: var(--student-color-text-secondary);\n  background: var(--student-color-primary-subtle);\n  line-height: 1.5;\n}\n.service-workspace[_ngcontent-%COMP%]   aside[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 20px;\n  min-width: 20px;\n  color: var(--student-color-primary);\n}\ndl[_ngcontent-%COMP%] {\n  margin: 20px 0 0;\n}\ndl[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  padding: 14px 0;\n  border-bottom: 1px solid var(--student-color-divider);\n}\ndl[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:last-child {\n  border-bottom: 0;\n}\ndt[_ngcontent-%COMP%] {\n  color: var(--student-color-text-secondary);\n  font-size: 13px;\n}\ndd[_ngcontent-%COMP%] {\n  margin: 5px 0 0;\n  font-weight: 750;\n}\n.document-list[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 10px;\n}\n.document-list[_ngcontent-%COMP%]   article[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 44px 1fr auto;\n  align-items: center;\n  gap: 12px;\n  padding: 14px;\n  border: 1px solid var(--student-color-border);\n  border-radius: 13px;\n}\n.document-list[_ngcontent-%COMP%]   article[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  display: grid;\n  width: 42px;\n  height: 42px;\n  place-items: center;\n  border-radius: 10px;\n  color: var(--student-color-primary);\n  background: var(--student-color-primary-soft);\n}\n.document-list[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%], \n.document-list[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  display: block;\n}\n.document-list[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  margin-top: 4px;\n  color: var(--student-color-text-secondary);\n}\n.document-list[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 7px;\n  padding: 9px 12px;\n  border: 1px solid var(--student-color-primary-middle);\n  border-radius: 10px;\n  color: var(--student-color-primary);\n  background: var(--student-color-surface);\n  font: inherit;\n  font-weight: 750;\n}\n.document-list[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 17px;\n}\n.success-state[_ngcontent-%COMP%] {\n  display: grid;\n  min-height: 330px;\n  align-content: center;\n  justify-items: center;\n  text-align: center;\n}\n.success-state[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  display: grid;\n  width: 66px;\n  height: 66px;\n  place-items: center;\n  border-radius: 50%;\n  color: var(--student-color-text-inverse);\n  background: var(--student-color-success);\n}\n.success-state[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin-top: 16px;\n}\n.success-state[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: var(--student-color-text-secondary);\n}\n.success-state[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  padding: 10px 16px;\n  border: 1px solid var(--student-color-primary);\n  border-radius: 10px;\n  color: var(--student-color-primary);\n  background: var(--student-color-surface);\n  font: inherit;\n  font-weight: 750;\n}\n@media (max-width: 850px) {\n  .service-workspace[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .service-hero[_ngcontent-%COMP%] {\n    padding: 22px;\n  }\n  .service-hero[_ngcontent-%COMP%]    > img[_ngcontent-%COMP%] {\n    width: 145px;\n    height: 135px;\n  }\n}\n@media (max-width: 600px) {\n  .academic-service-page[_ngcontent-%COMP%] {\n    gap: 14px;\n  }\n  .service-hero[_ngcontent-%COMP%] {\n    min-height: 180px;\n    padding: 20px;\n  }\n  .service-copy[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 29px;\n  }\n  .service-copy[_ngcontent-%COMP%]    > p[_ngcontent-%COMP%] {\n    font-size: 15px;\n  }\n  .service-hero[_ngcontent-%COMP%]    > img[_ngcontent-%COMP%] {\n    width: 105px;\n    height: 105px;\n  }\n  .service-panel[_ngcontent-%COMP%], \n   .service-workspace[_ngcontent-%COMP%]   aside[_ngcontent-%COMP%] {\n    padding: 18px;\n  }\n  .field-grid[_ngcontent-%COMP%], \n   .option-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .document-list[_ngcontent-%COMP%]   article[_ngcontent-%COMP%] {\n    grid-template-columns: 40px 1fr;\n  }\n  .document-list[_ngcontent-%COMP%]   article[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    grid-column: 1/-1;\n    justify-content: center;\n  }\n  .primary-action[_ngcontent-%COMP%] {\n    width: 100%;\n    justify-content: center;\n  }\n}"], changeDetection: 0 });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(StudentAcademicServiceComponent, [{
        type: Component,
        args: [{ selector: 'erp-student-academic-service', imports: [
                    FormsModule,
                    RouterLink,
                    LucideArrowLeft,
                    LucideCalendarDays,
                    LucideCheck,
                    LucideDownload,
                    LucideFileText,
                    LucideInfo,
                    LucideSend,
                    LucideUpload,
                ], changeDetection: ChangeDetectionStrategy.OnPush, template: "<main class=\"academic-service-page\">\n  <a class=\"back-link\" routerLink=\"/student/academics\"\n    ><svg lucideArrowLeft></svg>Back to Academics</a\n  >\n\n  <header class=\"service-hero\">\n    <div class=\"service-copy\">\n      <small>{{ service().eyebrow }}</small>\n      <h1>{{ service().title }}</h1>\n      <p>{{ service().description }}</p>\n      <span><svg lucideCalendarDays></svg>{{ period() }}</span>\n    </div>\n    <img [src]=\"service().icon\" width=\"320\" height=\"320\" alt=\"\" aria-hidden=\"true\" />\n  </header>\n\n  <section class=\"service-workspace\">\n    <div class=\"service-panel\">\n      @if (submitted()) {\n        <div class=\"success-state\">\n          <span><svg lucideCheck></svg></span>\n          <h2>Request submitted</h2>\n          <p>Your {{ service().title.toLowerCase() }} request has been recorded successfully.</p>\n          <button type=\"button\" (click)=\"submitted.set(false)\">Create another</button>\n        </div>\n      } @else if (service().mode === 'download') {\n        <h2>Available documents</h2>\n        <p class=\"section-copy\">Choose a document to generate and download.</p>\n        <div class=\"document-list\">\n          @for (option of service().options; track option) {\n            <article>\n              <span><svg lucideFileText></svg></span>\n              <div>\n                <strong>{{ option }}</strong\n                ><small>Updated for {{ period() }}</small>\n              </div>\n              <button type=\"button\" (click)=\"download(option)\">\n                <svg lucideDownload></svg>Download\n              </button>\n            </article>\n          }\n        </div>\n      } @else {\n        <h2>{{ service().mode === 'catalog' ? 'Select an option' : 'Request details' }}</h2>\n        <p class=\"section-copy\">Complete the information below to continue.</p>\n\n        @if (service().mode === 'catalog') {\n          <div class=\"option-grid\">\n            @for (option of service().options; track option) {\n              <button\n                type=\"button\"\n                [class.selected]=\"selectedOption() === option\"\n                (click)=\"selectedOption.set(option)\"\n              >\n                <span>{{ option }}</span\n                ><i><svg lucideCheck></svg></i>\n              </button>\n            }\n          </div>\n        } @else {\n          <div class=\"field-grid\">\n            <label\n              ><span>{{\n                service().mode === 'identity' ? 'ABC account number' : 'Request title'\n              }}</span\n              ><input\n                [placeholder]=\"\n                  service().mode === 'identity' ? 'Enter 12-digit ABC ID' : 'Enter request title'\n                \"\n                [ngModel]=\"reference()\"\n                (ngModelChange)=\"reference.set($event)\"\n            /></label>\n            <label\n              ><span>Student</span><input [value]=\"session.profile()?.name || 'Student'\" readonly\n            /></label>\n          </div>\n          <label class=\"notes\"\n            ><span>Additional details</span\n            ><textarea\n              rows=\"5\"\n              placeholder=\"Add any information the academic office should know...\"\n              [ngModel]=\"note()\"\n              (ngModelChange)=\"note.set($event)\"\n            ></textarea>\n          </label>\n        }\n\n        @if (service().mode === 'upload') {\n          <label class=\"upload-box\"\n            ><input\n              type=\"file\"\n              accept=\".pdf,.doc,.docx,.jpg,.jpeg,.png\"\n              (change)=\"selectFile($event)\"\n            /><svg lucideUpload></svg><strong>{{ fileName() || 'Choose a file to upload' }}</strong\n            ><small>{{ service().helper }}</small></label\n          >\n        }\n\n        @if (service().title === 'Current Subjects') {\n          <a class=\"primary-action\" routerLink=\"/student/academics/timetable\"\n            >View timetable <svg lucideCalendarDays></svg\n          ></a>\n        } @else {\n          <button class=\"primary-action\" type=\"button\" (click)=\"submit()\">\n            {{ service().action }} <svg lucideSend></svg>\n          </button>\n        }\n      }\n    </div>\n\n    <aside>\n      <h2>Before you continue</h2>\n      <p><svg lucideInfo></svg>{{ service().helper }}</p>\n      <dl>\n        <div>\n          <dt>Student ID</dt>\n          <dd>{{ session.profile()?.studentId || '\u2014' }}</dd>\n        </div>\n        <div>\n          <dt>Academic period</dt>\n          <dd>{{ period() }}</dd>\n        </div>\n        <div>\n          <dt>Status</dt>\n          <dd>Available</dd>\n        </div>\n      </dl>\n    </aside>\n  </section>\n</main>\n", styles: [":host {\n  display: block;\n}\n.academic-service-page {\n  display: grid;\n  gap: 18px;\n  color: var(--student-color-text);\n}\n.back-link {\n  display: flex;\n  width: max-content;\n  align-items: center;\n  gap: 8px;\n  color: var(--student-color-primary);\n  font-weight: 750;\n  text-decoration: none;\n}\n.back-link svg {\n  width: 19px;\n}\n.service-hero {\n  display: flex;\n  min-height: 210px;\n  align-items: center;\n  justify-content: space-between;\n  overflow: hidden;\n  padding: 26px 40px;\n  border: 1px solid var(--student-color-border);\n  border-radius: 22px;\n  background: linear-gradient(\n    135deg,\n    var(--student-color-surface),\n    var(--student-color-primary-soft)\n  );\n  box-shadow: var(--student-shadow-card);\n}\n.service-copy small {\n  color: var(--student-color-primary);\n  font-weight: 800;\n}\n.service-copy h1 {\n  margin: 9px 0 8px;\n  font-size: clamp(30px, 4vw, 44px);\n  letter-spacing: -0.035em;\n}\n.service-copy > p {\n  max-width: 650px;\n  margin: 0;\n  color: var(--student-color-text-secondary);\n  font-size: 17px;\n}\n.service-copy > span {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  margin-top: 22px;\n  font-weight: 700;\n}\n.service-copy > span svg {\n  width: 19px;\n  color: var(--student-color-primary);\n}\n.service-hero > img {\n  width: 190px;\n  height: 160px;\n  object-fit: contain;\n}\n.service-workspace {\n  display: grid;\n  grid-template-columns: minmax(0, 2fr) minmax(260px, 1fr);\n  gap: 18px;\n}\n.service-panel,\n.service-workspace aside {\n  padding: 26px;\n  border: 1px solid var(--student-color-border);\n  border-radius: 20px;\n  background: var(--student-color-surface);\n  box-shadow: var(--student-shadow-card);\n}\nh2 {\n  margin: 0;\n  font-size: 21px;\n}\n.section-copy {\n  margin: 5px 0 22px;\n  color: var(--student-color-text-secondary);\n}\n.field-grid {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 16px;\n}\nlabel > span {\n  display: block;\n  margin-bottom: 8px;\n  font-weight: 750;\n}\ninput,\ntextarea {\n  box-sizing: border-box;\n  width: 100%;\n  border: 1px solid var(--student-color-border-strong);\n  border-radius: 12px;\n  outline: 0;\n  color: var(--student-color-text);\n  background: var(--student-color-surface);\n  font: inherit;\n}\ninput {\n  height: 48px;\n  padding: 0 14px;\n}\ntextarea {\n  padding: 13px;\n  resize: vertical;\n}\n.notes {\n  display: block;\n  margin-top: 16px;\n}\n.option-grid {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 12px;\n}\n.option-grid button {\n  display: flex;\n  min-height: 64px;\n  align-items: center;\n  justify-content: space-between;\n  padding: 0 16px;\n  border: 1px solid var(--student-color-border-strong);\n  border-radius: 13px;\n  color: var(--student-color-text);\n  background: var(--student-color-surface);\n  font: inherit;\n  font-weight: 700;\n  text-align: left;\n}\n.option-grid button.selected {\n  border-color: var(--student-color-primary);\n  background: var(--student-color-primary-soft);\n}\n.option-grid i {\n  display: grid;\n  width: 27px;\n  height: 27px;\n  place-items: center;\n  border-radius: 50%;\n  color: var(--student-color-surface);\n  background: var(--student-color-primary);\n  opacity: 0;\n}\n.option-grid button.selected i {\n  opacity: 1;\n}\n.option-grid svg {\n  width: 16px;\n}\n.upload-box {\n  display: grid;\n  min-height: 150px;\n  place-items: center;\n  margin-top: 18px;\n  padding: 20px;\n  border: 1px dashed var(--student-color-primary-middle);\n  border-radius: 15px;\n  background: var(--student-color-primary-subtle);\n  cursor: pointer;\n  text-align: center;\n}\n.upload-box input {\n  display: none;\n}\n.upload-box svg {\n  width: 36px;\n  height: 36px;\n  color: var(--student-color-primary);\n}\n.upload-box small {\n  color: var(--student-color-text-secondary);\n}\n.primary-action {\n  display: flex;\n  width: max-content;\n  min-height: 48px;\n  align-items: center;\n  gap: 10px;\n  margin-top: 22px;\n  padding: 0 20px;\n  border: 0;\n  border-radius: 12px;\n  color: var(--student-color-text-inverse);\n  background: var(--student-color-primary);\n  font: inherit;\n  font-weight: 800;\n  text-decoration: none;\n  cursor: pointer;\n}\n.primary-action svg {\n  width: 19px;\n}\n.service-workspace aside p {\n  display: flex;\n  gap: 10px;\n  padding: 14px;\n  border-radius: 12px;\n  color: var(--student-color-text-secondary);\n  background: var(--student-color-primary-subtle);\n  line-height: 1.5;\n}\n.service-workspace aside p svg {\n  width: 20px;\n  min-width: 20px;\n  color: var(--student-color-primary);\n}\ndl {\n  margin: 20px 0 0;\n}\ndl div {\n  padding: 14px 0;\n  border-bottom: 1px solid var(--student-color-divider);\n}\ndl div:last-child {\n  border-bottom: 0;\n}\ndt {\n  color: var(--student-color-text-secondary);\n  font-size: 13px;\n}\ndd {\n  margin: 5px 0 0;\n  font-weight: 750;\n}\n.document-list {\n  display: grid;\n  gap: 10px;\n}\n.document-list article {\n  display: grid;\n  grid-template-columns: 44px 1fr auto;\n  align-items: center;\n  gap: 12px;\n  padding: 14px;\n  border: 1px solid var(--student-color-border);\n  border-radius: 13px;\n}\n.document-list article > span {\n  display: grid;\n  width: 42px;\n  height: 42px;\n  place-items: center;\n  border-radius: 10px;\n  color: var(--student-color-primary);\n  background: var(--student-color-primary-soft);\n}\n.document-list strong,\n.document-list small {\n  display: block;\n}\n.document-list small {\n  margin-top: 4px;\n  color: var(--student-color-text-secondary);\n}\n.document-list button {\n  display: flex;\n  align-items: center;\n  gap: 7px;\n  padding: 9px 12px;\n  border: 1px solid var(--student-color-primary-middle);\n  border-radius: 10px;\n  color: var(--student-color-primary);\n  background: var(--student-color-surface);\n  font: inherit;\n  font-weight: 750;\n}\n.document-list button svg {\n  width: 17px;\n}\n.success-state {\n  display: grid;\n  min-height: 330px;\n  align-content: center;\n  justify-items: center;\n  text-align: center;\n}\n.success-state > span {\n  display: grid;\n  width: 66px;\n  height: 66px;\n  place-items: center;\n  border-radius: 50%;\n  color: var(--student-color-text-inverse);\n  background: var(--student-color-success);\n}\n.success-state h2 {\n  margin-top: 16px;\n}\n.success-state p {\n  color: var(--student-color-text-secondary);\n}\n.success-state button {\n  padding: 10px 16px;\n  border: 1px solid var(--student-color-primary);\n  border-radius: 10px;\n  color: var(--student-color-primary);\n  background: var(--student-color-surface);\n  font: inherit;\n  font-weight: 750;\n}\n@media (max-width: 850px) {\n  .service-workspace {\n    grid-template-columns: 1fr;\n  }\n  .service-hero {\n    padding: 22px;\n  }\n  .service-hero > img {\n    width: 145px;\n    height: 135px;\n  }\n}\n@media (max-width: 600px) {\n  .academic-service-page {\n    gap: 14px;\n  }\n  .service-hero {\n    min-height: 180px;\n    padding: 20px;\n  }\n  .service-copy h1 {\n    font-size: 29px;\n  }\n  .service-copy > p {\n    font-size: 15px;\n  }\n  .service-hero > img {\n    width: 105px;\n    height: 105px;\n  }\n  .service-panel,\n  .service-workspace aside {\n    padding: 18px;\n  }\n  .field-grid,\n  .option-grid {\n    grid-template-columns: 1fr;\n  }\n  .document-list article {\n    grid-template-columns: 40px 1fr;\n  }\n  .document-list article button {\n    grid-column: 1/-1;\n    justify-content: center;\n  }\n  .primary-action {\n    width: 100%;\n    justify-content: center;\n  }\n}\n"] }]
    }], () => [], null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(StudentAcademicServiceComponent, { className: "StudentAcademicServiceComponent", filePath: "frontend/src/app/features/student/academics/student-academic-service.component.ts", lineNumber: 176 }); })();
