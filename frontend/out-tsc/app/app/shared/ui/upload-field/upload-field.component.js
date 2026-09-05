import { ChangeDetectionStrategy, Component, computed, input, output } from '@angular/core';
import { LucideImage, LucidePaperclip, LucideRefreshCw, LucideX } from '@lucide/angular';
import * as i0 from "@angular/core";
function UploadFieldComponent_Conditional_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(0, "svg", 2);
} }
function UploadFieldComponent_Conditional_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(0, "svg", 3);
} }
function UploadFieldComponent_Conditional_10_Template(rf, ctx) { if (rf & 1) {
    const _r1 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 5)(1, "span");
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(2, "svg", 6);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(4, "button", 7);
    i0.ɵɵlistener("click", function UploadFieldComponent_Conditional_10_Template_button_click_4_listener() { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.removed.emit()); });
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(5, "svg", 8);
    i0.ɵɵtext(6, " Remove ");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1(" ", ctx_r1.fileName(), " ");
} }
export class UploadFieldComponent {
    field = input.required(...(ngDevMode ? [{ debugName: "field" }] : /* istanbul ignore next */ []));
    value = input(...(ngDevMode ? [undefined, { debugName: "value" }] : /* istanbul ignore next */ []));
    fileSelected = output();
    removed = output();
    accept = computed(() => {
        const categories = this.field().uploadConfig?.allowedTypes ||
            (this.field().type === 'file' ? ['image', 'pdf', 'word'] : ['image']);
        return categories
            .flatMap((type) => type === 'image'
            ? ['image/jpeg', 'image/png', 'image/webp']
            : type === 'pdf'
                ? ['application/pdf']
                : [
                    'application/msword',
                    'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
                ])
            .join(',');
    }, ...(ngDevMode ? [{ debugName: "accept" }] : /* istanbul ignore next */ []));
    helpText = computed(() => {
        const categories = this.field().uploadConfig?.allowedTypes ||
            (this.field().type === 'file' ? ['image', 'pdf', 'word'] : ['image']);
        const labels = categories
            .map((type) => ({ image: 'JPG / PNG / WebP', pdf: 'PDF', word: 'DOC / DOCX' })[type])
            .join(' · ');
        return `${labels} · Maximum ${this.field().uploadConfig?.maxSizeMb || 5} MB`;
    }, ...(ngDevMode ? [{ debugName: "helpText" }] : /* istanbul ignore next */ []));
    choose(event) {
        const input = event.target;
        const file = input.files?.[0];
        if (file)
            this.fileSelected.emit(file);
        input.value = '';
    }
    fileName() {
        const value = this.value();
        return value?.name || 'Uploaded file';
    }
    static ɵfac = function UploadFieldComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || UploadFieldComponent)(); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: UploadFieldComponent, selectors: [["erp-upload-field"]], inputs: { field: [1, "field"], value: [1, "value"] }, outputs: { fileSelected: "fileSelected", removed: "removed" }, decls: 11, vars: 7, consts: [[1, "erp-upload-field"], [1, "erp-upload-field__dropzone"], ["lucideImage", "", "size", "20", "aria-hidden", "true"], ["lucidePaperclip", "", "size", "20", "aria-hidden", "true"], ["type", "file", 3, "change", "accept"], [1, "erp-upload-field__file"], ["lucideRefreshCw", "", "size", "13", "aria-hidden", "true"], ["type", "button", "aria-label", "Remove uploaded file", 3, "click"], ["lucideX", "", "size", "14", "aria-hidden", "true"]], template: function UploadFieldComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0)(1, "label", 1);
            i0.ɵɵconditionalCreate(2, UploadFieldComponent_Conditional_2_Template, 1, 0, ":svg:svg", 2)(3, UploadFieldComponent_Conditional_3_Template, 1, 0, ":svg:svg", 3);
            i0.ɵɵelementStart(4, "span")(5, "strong");
            i0.ɵɵtext(6);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(7, "small");
            i0.ɵɵtext(8);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(9, "input", 4);
            i0.ɵɵlistener("change", function UploadFieldComponent_Template_input_change_9_listener($event) { return ctx.choose($event); });
            i0.ɵɵelementEnd()();
            i0.ɵɵconditionalCreate(10, UploadFieldComponent_Conditional_10_Template, 7, 1, "div", 5);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵclassProp("erp-upload-field--complete", !!ctx.value());
            i0.ɵɵadvance(2);
            i0.ɵɵconditional(ctx.field().type === "image" ? 2 : 3);
            i0.ɵɵadvance(4);
            i0.ɵɵtextInterpolate(ctx.value() ? "Replace " + ctx.field().name : "Upload " + ctx.field().name);
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate(ctx.helpText());
            i0.ɵɵadvance();
            i0.ɵɵproperty("accept", ctx.accept());
            i0.ɵɵadvance();
            i0.ɵɵconditional(ctx.value() ? 10 : -1);
        } }, dependencies: [LucideImage, LucidePaperclip, LucideRefreshCw, LucideX], encapsulation: 2, changeDetection: 0 });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(UploadFieldComponent, [{
        type: Component,
        args: [{ selector: 'erp-upload-field', imports: [LucideImage, LucidePaperclip, LucideRefreshCw, LucideX], changeDetection: ChangeDetectionStrategy.OnPush, template: "<div class=\"erp-upload-field\" [class.erp-upload-field--complete]=\"!!value()\">\n  <label class=\"erp-upload-field__dropzone\">\n    @if (field().type === 'image') {\n      <svg lucideImage size=\"20\" aria-hidden=\"true\"></svg>\n    } @else {\n      <svg lucidePaperclip size=\"20\" aria-hidden=\"true\"></svg>\n    }\n    <span>\n      <strong>{{ value() ? 'Replace ' + field().name : 'Upload ' + field().name }}</strong>\n      <small>{{ helpText() }}</small>\n    </span>\n    <input type=\"file\" [accept]=\"accept()\" (change)=\"choose($event)\" />\n  </label>\n\n  @if (value()) {\n    <div class=\"erp-upload-field__file\">\n      <span>\n        <svg lucideRefreshCw size=\"13\" aria-hidden=\"true\"></svg>\n        {{ fileName() }}\n      </span>\n      <button type=\"button\" aria-label=\"Remove uploaded file\" (click)=\"removed.emit()\">\n        <svg lucideX size=\"14\" aria-hidden=\"true\"></svg>\n        Remove\n      </button>\n    </div>\n  }\n</div>\n" }]
    }], null, { field: [{ type: i0.Input, args: [{ isSignal: true, alias: "field", required: true }] }], value: [{ type: i0.Input, args: [{ isSignal: true, alias: "value", required: false }] }], fileSelected: [{ type: i0.Output, args: ["fileSelected"] }], removed: [{ type: i0.Output, args: ["removed"] }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(UploadFieldComponent, { className: "UploadFieldComponent", filePath: "frontend/src/app/shared/ui/upload-field/upload-field.component.ts", lineNumber: 11 }); })();
