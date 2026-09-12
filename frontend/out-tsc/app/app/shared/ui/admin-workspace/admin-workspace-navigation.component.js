import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AdminIllustrationComponent } from '../admin-illustration/admin-illustration.component';
import { resolveAdminWorkspace } from './admin-workspace.registry';
import * as i0 from "@angular/core";
const _forTrack0 = ($index, $item) => $item.route;
function AdminWorkspaceNavigationComponent_Conditional_0_For_10_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "a", 5);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const link_r1 = ctx.$implicit;
    i0.ɵɵclassProp("is-active", link_r1.active);
    i0.ɵɵproperty("routerLink", link_r1.route);
    i0.ɵɵattribute("aria-current", link_r1.active ? "page" : null);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(link_r1.label);
} }
function AdminWorkspaceNavigationComponent_Conditional_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "section", 0)(1, "div", 1);
    i0.ɵɵelement(2, "erp-admin-illustration", 2);
    i0.ɵɵelementStart(3, "div")(4, "small");
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "strong");
    i0.ɵɵtext(7);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(8, "nav", 3);
    i0.ɵɵrepeaterCreate(9, AdminWorkspaceNavigationComponent_Conditional_0_For_10_Template, 2, 5, "a", 4, _forTrack0);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const context_r2 = ctx;
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("kind", context_r2.illustration);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(context_r2.module);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(context_r2.title);
    i0.ɵɵadvance();
    i0.ɵɵattribute("aria-label", context_r2.title + " pages");
    i0.ɵɵadvance();
    i0.ɵɵrepeater(context_r2.links);
} }
export class AdminWorkspaceNavigationComponent {
    url = input.required(...(ngDevMode ? [{ debugName: "url" }] : /* istanbul ignore next */ []));
    workspace = computed(() => resolveAdminWorkspace(this.url()), ...(ngDevMode ? [{ debugName: "workspace" }] : /* istanbul ignore next */ []));
    static ɵfac = function AdminWorkspaceNavigationComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || AdminWorkspaceNavigationComponent)(); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: AdminWorkspaceNavigationComponent, selectors: [["erp-admin-workspace-navigation"]], inputs: { url: [1, "url"] }, decls: 1, vars: 1, consts: [["aria-label", "Workspace navigation", 1, "erp-workspace-bar"], [1, "erp-workspace-bar__identity"], ["size", "compact", 3, "kind"], [1, "erp-workspace-tabs"], [3, "routerLink", "is-active"], [3, "routerLink"]], template: function AdminWorkspaceNavigationComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵconditionalCreate(0, AdminWorkspaceNavigationComponent_Conditional_0_Template, 11, 4, "section", 0);
        } if (rf & 2) {
            let tmp_0_0;
            i0.ɵɵconditional((tmp_0_0 = ctx.workspace()) ? 0 : -1, tmp_0_0);
        } }, dependencies: [RouterLink, AdminIllustrationComponent], encapsulation: 2, changeDetection: 0 });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AdminWorkspaceNavigationComponent, [{
        type: Component,
        args: [{
                selector: 'erp-admin-workspace-navigation',
                imports: [RouterLink, AdminIllustrationComponent],
                template: `
    @if (workspace(); as context) {
      <section class="erp-workspace-bar" aria-label="Workspace navigation">
        <div class="erp-workspace-bar__identity">
          <erp-admin-illustration [kind]="context.illustration" size="compact" />
          <div>
            <small>{{ context.module }}</small
            ><strong>{{ context.title }}</strong>
          </div>
        </div>
        <nav class="erp-workspace-tabs" [attr.aria-label]="context.title + ' pages'">
          @for (link of context.links; track link.route) {
            <a
              [routerLink]="link.route"
              [class.is-active]="link.active"
              [attr.aria-current]="link.active ? 'page' : null"
              >{{ link.label }}</a
            >
          }
        </nav>
      </section>
    }
  `,
                changeDetection: ChangeDetectionStrategy.OnPush,
            }]
    }], null, { url: [{ type: i0.Input, args: [{ isSignal: true, alias: "url", required: true }] }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(AdminWorkspaceNavigationComponent, { className: "AdminWorkspaceNavigationComponent", filePath: "frontend/src/app/shared/ui/admin-workspace/admin-workspace-navigation.component.ts", lineNumber: 34 }); })();
