import { ChangeDetectionStrategy, Component, HostListener, input, output, signal, } from '@angular/core';
import { CdkConnectedOverlay, CdkOverlayOrigin } from '@angular/cdk/overlay';
import { LucideArrowDown, LucideArrowUp, LucideArrowRightLeft, LucideCopy, LucideCheck, LucideDownload, LucideDynamicIcon, LucideFilePlus2, LucideFolderPlus, LucidePencil, LucidePlus, LucideSettings2, LucideSquarePlus, LucideTrash2, LucideEye, LucideEllipsisVertical, LucideGraduationCap, LucideKeyRound, LucideLogOut, LucideWalletCards, } from '@lucide/angular';
import * as i0 from "@angular/core";
const _forTrack0 = ($index, $item) => $item.id;
function CompactActionMenuComponent_Conditional_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(0, "svg", 5);
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(1, "span");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r0.label());
} }
function CompactActionMenuComponent_Conditional_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(0, "svg", 3);
} }
function CompactActionMenuComponent_ng_template_5_For_2_Conditional_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(0, "svg", 9);
} if (rf & 2) {
    const item_r3 = i0.ɵɵnextContext().$implicit;
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("lucideIcon", ctx_r0.itemIcon(item_r3.icon));
} }
function CompactActionMenuComponent_ng_template_5_For_2_Template(rf, ctx) { if (rf & 1) {
    const _r2 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 8);
    i0.ɵɵlistener("click", function CompactActionMenuComponent_ng_template_5_For_2_Template_button_click_0_listener() { const item_r3 = i0.ɵɵrestoreView(_r2).$implicit; const ctx_r0 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r0.choose(item_r3.id)); });
    i0.ɵɵconditionalCreate(1, CompactActionMenuComponent_ng_template_5_For_2_Conditional_1_Template, 1, 1, ":svg:svg", 9);
    i0.ɵɵelementStart(2, "span");
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const item_r3 = ctx.$implicit;
    i0.ɵɵclassProp("action-menu__item--danger", item_r3.destructive)("action-menu__item--separated", item_r3.separator);
    i0.ɵɵproperty("disabled", item_r3.disabled);
    i0.ɵɵadvance();
    i0.ɵɵconditional(item_r3.icon ? 1 : -1);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(item_r3.label);
} }
function CompactActionMenuComponent_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 6);
    i0.ɵɵrepeaterCreate(1, CompactActionMenuComponent_ng_template_5_For_2_Template, 4, 7, "button", 7, _forTrack0);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵrepeater(ctx_r0.items());
} }
const ACTION_ICONS = {
    'add-tab': LucideFilePlus2,
    'add-section': LucideFolderPlus,
    'add-field': LucideSquarePlus,
    rename: LucidePencil,
    edit: LucideSettings2,
    duplicate: LucideCopy,
    up: LucideArrowUp,
    down: LucideArrowDown,
    'add-child': LucidePlus,
    delete: LucideTrash2,
    view: LucideEye,
    check: LucideCheck,
    download: LucideDownload,
    fees: LucideWalletCards,
    scholarship: LucideGraduationCap,
    password: LucideKeyRound,
    transfer: LucideArrowRightLeft,
    vacate: LucideLogOut,
};
export class CompactActionMenuComponent {
    static activeMenu = null;
    items = input.required(...(ngDevMode ? [{ debugName: "items" }] : /* istanbul ignore next */ []));
    variant = input('more', ...(ngDevMode ? [{ debugName: "variant" }] : /* istanbul ignore next */ []));
    label = input('Add', ...(ngDevMode ? [{ debugName: "label" }] : /* istanbul ignore next */ []));
    selected = output();
    open = signal(false, ...(ngDevMode ? [{ debugName: "open" }] : /* istanbul ignore next */ []));
    positions = [
        {
            originX: 'end',
            originY: 'bottom',
            overlayX: 'end',
            overlayY: 'top',
            offsetY: 6,
        },
        {
            originX: 'end',
            originY: 'top',
            overlayX: 'end',
            overlayY: 'bottom',
            offsetY: -6,
        },
        {
            originX: 'start',
            originY: 'bottom',
            overlayX: 'start',
            overlayY: 'top',
            offsetY: 6,
        },
    ];
    toggle(event) {
        event.stopPropagation();
        const next = !this.open();
        if (next && CompactActionMenuComponent.activeMenu !== this) {
            CompactActionMenuComponent.activeMenu?.open.set(false);
            CompactActionMenuComponent.activeMenu = this;
        }
        this.open.set(next);
        if (!next && CompactActionMenuComponent.activeMenu === this) {
            CompactActionMenuComponent.activeMenu = null;
        }
    }
    choose(id) {
        this.open.set(false);
        if (CompactActionMenuComponent.activeMenu === this) {
            CompactActionMenuComponent.activeMenu = null;
        }
        this.selected.emit(id);
    }
    itemIcon(icon) {
        return ACTION_ICONS[icon];
    }
    close() {
        this.open.set(false);
        if (CompactActionMenuComponent.activeMenu === this) {
            CompactActionMenuComponent.activeMenu = null;
        }
    }
    closeOnEscape() {
        this.open.set(false);
    }
    closeOnViewportChange() {
        this.close();
    }
    static ɵfac = function CompactActionMenuComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || CompactActionMenuComponent)(); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: CompactActionMenuComponent, selectors: [["erp-compact-action-menu"]], hostBindings: function CompactActionMenuComponent_HostBindings(rf, ctx) { if (rf & 1) {
            i0.ɵɵlistener("keydown.escape", function CompactActionMenuComponent_keydown_escape_HostBindingHandler() { return ctx.closeOnEscape(); }, i0.ɵɵresolveDocument)("resize", function CompactActionMenuComponent_resize_HostBindingHandler() { return ctx.closeOnViewportChange(); }, i0.ɵɵresolveWindow);
        } }, inputs: { items: [1, "items"], variant: [1, "variant"], label: [1, "label"] }, outputs: { selected: "selected" }, decls: 6, vars: 9, consts: [["menuOrigin", "cdkOverlayOrigin"], ["cdkOverlayOrigin", "", 1, "action-menu"], ["type", "button", "aria-label", "More actions", 1, "action-menu__trigger", 3, "click"], ["lucideEllipsisVertical", "", "size", "18", "aria-hidden", "true"], ["cdk-connected-overlay", "", "cdkConnectedOverlayBackdropClass", "cdk-overlay-transparent-backdrop", 3, "backdropClick", "detach", "cdkConnectedOverlayOrigin", "cdkConnectedOverlayOpen", "cdkConnectedOverlayPositions", "cdkConnectedOverlayHasBackdrop", "cdkConnectedOverlayPush", "cdkConnectedOverlayFlexibleDimensions", "cdkConnectedOverlayViewportMargin"], ["lucidePlus", "", "size", "16", "aria-hidden", "true"], ["role", "menu", 1, "action-menu__panel"], ["type", "button", "role", "menuitem", 3, "action-menu__item--danger", "action-menu__item--separated", "disabled"], ["type", "button", "role", "menuitem", 3, "click", "disabled"], ["size", "15", "aria-hidden", "true", 3, "lucideIcon"]], template: function CompactActionMenuComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 1, 0)(2, "button", 2);
            i0.ɵɵlistener("click", function CompactActionMenuComponent_Template_button_click_2_listener($event) { return ctx.toggle($event); });
            i0.ɵɵconditionalCreate(3, CompactActionMenuComponent_Conditional_3_Template, 3, 1)(4, CompactActionMenuComponent_Conditional_4_Template, 1, 0, ":svg:svg", 3);
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(5, CompactActionMenuComponent_ng_template_5_Template, 3, 0, "ng-template", 4);
            i0.ɵɵlistener("backdropClick", function CompactActionMenuComponent_Template_ng_template_backdropClick_5_listener() { return ctx.close(); })("detach", function CompactActionMenuComponent_Template_ng_template_detach_5_listener() { return ctx.close(); });
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            const menuOrigin_r4 = i0.ɵɵreference(1);
            i0.ɵɵadvance(2);
            i0.ɵɵattribute("aria-expanded", ctx.open());
            i0.ɵɵadvance();
            i0.ɵɵconditional(ctx.variant() === "add" ? 3 : 4);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("cdkConnectedOverlayOrigin", menuOrigin_r4)("cdkConnectedOverlayOpen", ctx.open())("cdkConnectedOverlayPositions", ctx.positions)("cdkConnectedOverlayHasBackdrop", true)("cdkConnectedOverlayPush", true)("cdkConnectedOverlayFlexibleDimensions", false)("cdkConnectedOverlayViewportMargin", 8);
        } }, dependencies: [CdkConnectedOverlay,
            CdkOverlayOrigin,
            LucideDynamicIcon,
            LucideEllipsisVertical,
            LucidePlus], styles: ["[_nghost-%COMP%] {\n      display: inline-flex;\n    }\n    .action-menu[_ngcontent-%COMP%] {\n      position: relative;\n    }\n    .action-menu__trigger[_ngcontent-%COMP%] {\n      display: grid;\n      width: 34px;\n      height: 34px;\n      padding: 0;\n      place-items: center;\n      border: 1px solid var(--erp-border-default);\n      border-radius: var(--erp-radius-control);\n      color: var(--erp-blue-700);\n      background: var(--erp-blue-50);\n      cursor: pointer;\n      transition: var(--erp-standard-transition);\n    }\n    .action-menu__trigger[_ngcontent-%COMP%]:hover, \n   .action-menu__trigger[aria-expanded='true'][_ngcontent-%COMP%] {\n      color: var(--erp-blue-700);\n      border-color: var(--erp-border-strong);\n      background: var(--erp-surface-hover);\n    }\n    .action-menu__trigger[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n      font-size: var(--erp-font-caption);\n      font-weight: var(--erp-weight-semibold);\n    }\n    .action-menu__trigger[_ngcontent-%COMP%]:has(span) {\n      width: auto;\n      min-width: 62px;\n      padding-inline: 9px;\n      gap: 5px;\n    }\n    .action-menu__panel[_ngcontent-%COMP%] {\n      display: grid;\n      width: min(224px, calc(100vw - 16px));\n      max-height: min(420px, calc(100dvh - 16px));\n      padding: 6px;\n      overflow-y: auto;\n      border: 1px solid var(--erp-border-default);\n      border-radius: var(--erp-radius-compact);\n      background: var(--erp-surface-overlay);\n      box-shadow: var(--erp-shadow-overlay);\n      animation: _ngcontent-%COMP%_action-menu-enter var(--erp-duration-standard) var(--erp-ease-enter);\n    }\n    .action-menu__panel[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n      display: grid;\n      min-height: 34px;\n      grid-template-columns: 18px minmax(0, 1fr);\n      align-items: center;\n      gap: 7px;\n      padding: 7px 10px;\n      border: 0;\n      border-radius: 7px;\n      color: var(--erp-text-body);\n      background: transparent;\n      text-align: left;\n      cursor: pointer;\n      font-size: var(--erp-font-caption);\n      font-weight: var(--erp-weight-medium);\n    }\n    .action-menu__panel[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:not(:has(svg)) {\n      grid-template-columns: minmax(0, 1fr);\n    }\n    .action-menu__panel[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover:not(:disabled) {\n      color: var(--erp-text-heading);\n      background: var(--erp-surface-hover);\n    }\n    .action-menu__panel[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:disabled {\n      opacity: 0.42;\n      cursor: not-allowed;\n    }\n    .action-menu__item--danger[_ngcontent-%COMP%] {\n      color: var(--erp-danger-text) !important;\n    }\n    .action-menu__item--danger[_ngcontent-%COMP%]:hover {\n      background: var(--erp-danger-bg) !important;\n    }\n    .action-menu__item--separated[_ngcontent-%COMP%] {\n      margin-top: 5px;\n      border-top: 1px solid var(--erp-border-subtle) !important;\n      border-radius: 0 0 7px 7px !important;\n    }\n    @keyframes _ngcontent-%COMP%_action-menu-enter {\n      from {\n        opacity: 0;\n        transform: translateY(-4px);\n      }\n    }\n    @media (prefers-reduced-motion: reduce) {\n      .action-menu__panel[_ngcontent-%COMP%] {\n        animation-duration: 1ms;\n      }\n    }"], changeDetection: 0 });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CompactActionMenuComponent, [{
        type: Component,
        args: [{ selector: 'erp-compact-action-menu', imports: [
                    CdkConnectedOverlay,
                    CdkOverlayOrigin,
                    LucideDynamicIcon,
                    LucideEllipsisVertical,
                    LucidePlus,
                ], template: `
    <div class="action-menu" cdkOverlayOrigin #menuOrigin="cdkOverlayOrigin">
      <button
        class="action-menu__trigger"
        type="button"
        aria-label="More actions"
        [attr.aria-expanded]="open()"
        (click)="toggle($event)"
      >
        @if (variant() === 'add') {
          <svg lucidePlus size="16" aria-hidden="true"></svg><span>{{ label() }}</span>
        } @else {
          <svg lucideEllipsisVertical size="18" aria-hidden="true"></svg>
        }
      </button>
      <ng-template
        cdk-connected-overlay
        [cdkConnectedOverlayOrigin]="menuOrigin"
        [cdkConnectedOverlayOpen]="open()"
        [cdkConnectedOverlayPositions]="positions"
        [cdkConnectedOverlayHasBackdrop]="true"
        cdkConnectedOverlayBackdropClass="cdk-overlay-transparent-backdrop"
        [cdkConnectedOverlayPush]="true"
        [cdkConnectedOverlayFlexibleDimensions]="false"
        [cdkConnectedOverlayViewportMargin]="8"
        (backdropClick)="close()"
        (detach)="close()"
      >
        <div class="action-menu__panel" role="menu">
          @for (item of items(); track item.id) {
            <button
              type="button"
              role="menuitem"
              [class.action-menu__item--danger]="item.destructive"
              [class.action-menu__item--separated]="item.separator"
              [disabled]="item.disabled"
              (click)="choose(item.id)"
            >
              @if (item.icon) {
                <svg [lucideIcon]="itemIcon(item.icon)" size="15" aria-hidden="true"></svg>
              }
              <span>{{ item.label }}</span>
            </button>
          }
        </div>
      </ng-template>
    </div>
  `, changeDetection: ChangeDetectionStrategy.OnPush, styles: ["\n    :host {\n      display: inline-flex;\n    }\n    .action-menu {\n      position: relative;\n    }\n    .action-menu__trigger {\n      display: grid;\n      width: 34px;\n      height: 34px;\n      padding: 0;\n      place-items: center;\n      border: 1px solid var(--erp-border-default);\n      border-radius: var(--erp-radius-control);\n      color: var(--erp-blue-700);\n      background: var(--erp-blue-50);\n      cursor: pointer;\n      transition: var(--erp-standard-transition);\n    }\n    .action-menu__trigger:hover,\n    .action-menu__trigger[aria-expanded='true'] {\n      color: var(--erp-blue-700);\n      border-color: var(--erp-border-strong);\n      background: var(--erp-surface-hover);\n    }\n    .action-menu__trigger span {\n      font-size: var(--erp-font-caption);\n      font-weight: var(--erp-weight-semibold);\n    }\n    .action-menu__trigger:has(span) {\n      width: auto;\n      min-width: 62px;\n      padding-inline: 9px;\n      gap: 5px;\n    }\n    .action-menu__panel {\n      display: grid;\n      width: min(224px, calc(100vw - 16px));\n      max-height: min(420px, calc(100dvh - 16px));\n      padding: 6px;\n      overflow-y: auto;\n      border: 1px solid var(--erp-border-default);\n      border-radius: var(--erp-radius-compact);\n      background: var(--erp-surface-overlay);\n      box-shadow: var(--erp-shadow-overlay);\n      animation: action-menu-enter var(--erp-duration-standard) var(--erp-ease-enter);\n    }\n    .action-menu__panel button {\n      display: grid;\n      min-height: 34px;\n      grid-template-columns: 18px minmax(0, 1fr);\n      align-items: center;\n      gap: 7px;\n      padding: 7px 10px;\n      border: 0;\n      border-radius: 7px;\n      color: var(--erp-text-body);\n      background: transparent;\n      text-align: left;\n      cursor: pointer;\n      font-size: var(--erp-font-caption);\n      font-weight: var(--erp-weight-medium);\n    }\n    .action-menu__panel button:not(:has(svg)) {\n      grid-template-columns: minmax(0, 1fr);\n    }\n    .action-menu__panel button:hover:not(:disabled) {\n      color: var(--erp-text-heading);\n      background: var(--erp-surface-hover);\n    }\n    .action-menu__panel button:disabled {\n      opacity: 0.42;\n      cursor: not-allowed;\n    }\n    .action-menu__item--danger {\n      color: var(--erp-danger-text) !important;\n    }\n    .action-menu__item--danger:hover {\n      background: var(--erp-danger-bg) !important;\n    }\n    .action-menu__item--separated {\n      margin-top: 5px;\n      border-top: 1px solid var(--erp-border-subtle) !important;\n      border-radius: 0 0 7px 7px !important;\n    }\n    @keyframes action-menu-enter {\n      from {\n        opacity: 0;\n        transform: translateY(-4px);\n      }\n    }\n    @media (prefers-reduced-motion: reduce) {\n      .action-menu__panel {\n        animation-duration: 1ms;\n      }\n    }\n  "] }]
    }], null, { items: [{ type: i0.Input, args: [{ isSignal: true, alias: "items", required: true }] }], variant: [{ type: i0.Input, args: [{ isSignal: true, alias: "variant", required: false }] }], label: [{ type: i0.Input, args: [{ isSignal: true, alias: "label", required: false }] }], selected: [{ type: i0.Output, args: ["selected"] }], closeOnEscape: [{
            type: HostListener,
            args: ['document:keydown.escape']
        }], closeOnViewportChange: [{
            type: HostListener,
            args: ['window:resize']
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(CompactActionMenuComponent, { className: "CompactActionMenuComponent", filePath: "frontend/src/app/shared/ui/compact-action-menu/compact-action-menu.component.ts", lineNumber: 222 }); })();
