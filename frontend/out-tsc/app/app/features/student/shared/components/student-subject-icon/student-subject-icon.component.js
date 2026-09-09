import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';
import { LucideBookOpen, LucideBraces, LucideDynamicIcon, LucideFlaskConical, } from '@lucide/angular';
import * as i0 from "@angular/core";
// A deliberately small, scalable icon vocabulary. The ERP can contain thousands of
// subjects, so subject identity comes from its name/code rather than a bespoke asset.
const SUBJECT_CATEGORIES = [
    { pattern: /lab|practical|workshop|studio|experiment/i, icon: LucideFlaskConical, tone: 'practical' },
    {
        pattern: /computer|software|program|code|web|network|data|database|system|technology|algorithm|compiler|artificial intelligence|machine learning/i,
        icon: LucideBraces,
        tone: 'technical',
    },
];
export class StudentSubjectIconComponent {
    subject = input('', ...(ngDevMode ? [{ debugName: "subject" }] : /* istanbul ignore next */ []));
    size = input(24, ...(ngDevMode ? [{ debugName: "size" }] : /* istanbul ignore next */ []));
    boxSize = input(42, ...(ngDevMode ? [{ debugName: "boxSize" }] : /* istanbul ignore next */ []));
    visual = computed(() => SUBJECT_CATEGORIES.find((category) => category.pattern.test(this.subject())) || {
        icon: LucideBookOpen,
        tone: 'general',
    }, ...(ngDevMode ? [{ debugName: "visual" }] : /* istanbul ignore next */ []));
    static ɵfac = function StudentSubjectIconComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || StudentSubjectIconComponent)(); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: StudentSubjectIconComponent, selectors: [["erp-student-subject-icon"]], inputs: { subject: [1, "subject"], size: [1, "size"], boxSize: [1, "boxSize"] }, decls: 2, vars: 7, consts: [["aria-hidden", "true", 1, "student-subject-icon"], [3, "lucideIcon", "size"]], template: function StudentSubjectIconComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "span", 0);
            i0.ɵɵnamespaceSVG();
            i0.ɵɵelement(1, "svg", 1);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵstyleProp("width", ctx.boxSize(), "px")("height", ctx.boxSize(), "px");
            i0.ɵɵattribute("data-tone", ctx.visual().tone);
            i0.ɵɵadvance();
            i0.ɵɵproperty("lucideIcon", ctx.visual().icon)("size", ctx.size());
        } }, dependencies: [LucideDynamicIcon], styles: ["[_nghost-%COMP%] { display: inline-flex; }\n    .student-subject-icon[_ngcontent-%COMP%] { display: grid; width: 42px; height: 42px; place-items: center; border-radius: var(--student-radius-control); color: var(--student-color-primary-pressed); background: var(--student-color-primary-soft); }\n    .student-subject-icon[data-tone='technical'][_ngcontent-%COMP%] { color: var(--student-color-primary-pressed); background: var(--student-color-primary-soft); }\n    .student-subject-icon[data-tone='practical'][_ngcontent-%COMP%] { color: var(--student-color-success); background: var(--student-color-success-soft); }"], changeDetection: 0 });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(StudentSubjectIconComponent, [{
        type: Component,
        args: [{ selector: 'erp-student-subject-icon', imports: [LucideDynamicIcon], template: `<span class="student-subject-icon" [attr.data-tone]="visual().tone" [style.width.px]="boxSize()" [style.height.px]="boxSize()" aria-hidden="true"><svg [lucideIcon]="visual().icon" [size]="size()"></svg></span>`, changeDetection: ChangeDetectionStrategy.OnPush, styles: ["\n    :host { display: inline-flex; }\n    .student-subject-icon { display: grid; width: 42px; height: 42px; place-items: center; border-radius: var(--student-radius-control); color: var(--student-color-primary-pressed); background: var(--student-color-primary-soft); }\n    .student-subject-icon[data-tone='technical'] { color: var(--student-color-primary-pressed); background: var(--student-color-primary-soft); }\n    .student-subject-icon[data-tone='practical'] { color: var(--student-color-success); background: var(--student-color-success-soft); }\n  "] }]
    }], null, { subject: [{ type: i0.Input, args: [{ isSignal: true, alias: "subject", required: false }] }], size: [{ type: i0.Input, args: [{ isSignal: true, alias: "size", required: false }] }], boxSize: [{ type: i0.Input, args: [{ isSignal: true, alias: "boxSize", required: false }] }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(StudentSubjectIconComponent, { className: "StudentSubjectIconComponent", filePath: "frontend/src/app/features/student/shared/components/student-subject-icon/student-subject-icon.component.ts", lineNumber: 33 }); })();
