import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LucideArrowRight } from '@lucide/angular';
import { AdminPageComponent } from '../../../shared/ui/admin-page/admin-page.component';
import { AdminIllustrationComponent } from '../../../shared/ui/admin-illustration/admin-illustration.component';
import * as i0 from "@angular/core";
const _forTrack0 = ($index, $item) => $item.title;
const _forTrack1 = ($index, $item) => $item.route;
function FinanceOverviewComponent_For_6_For_11_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "a", 9)(1, "span")(2, "strong");
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "small");
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd()();
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(6, "svg", 10);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const link_r1 = ctx.$implicit;
    i0.ɵɵproperty("routerLink", link_r1.route);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(link_r1.title);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(link_r1.description);
} }
function FinanceOverviewComponent_For_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "section", 4)(1, "header", 5)(2, "div", 6);
    i0.ɵɵelement(3, "erp-admin-illustration", 7);
    i0.ɵɵelementStart(4, "div")(5, "h2");
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "p");
    i0.ɵɵtext(8);
    i0.ɵɵelementEnd()()()();
    i0.ɵɵelementStart(9, "nav", 8);
    i0.ɵɵrepeaterCreate(10, FinanceOverviewComponent_For_6_For_11_Template, 7, 3, "a", 9, _forTrack1);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const group_r2 = ctx.$implicit;
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("kind", group_r2.illustration);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(group_r2.title);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(group_r2.description);
    i0.ɵɵadvance();
    i0.ɵɵattribute("aria-label", group_r2.title);
    i0.ɵɵadvance();
    i0.ɵɵrepeater(group_r2.links);
} }
export class FinanceOverviewComponent {
    groups = [
        {
            title: 'Fee configuration',
            description: 'Define reusable fee structures before assigning charges.',
            illustration: 'feeConfiguration',
            links: [
                {
                    title: 'Fee books',
                    description: 'College, academic session and collection frequency',
                    route: '/admin/fees/books/view',
                },
                {
                    title: 'Fee heads',
                    description: 'Charge categories and collection priorities',
                    route: '/admin/fees/heads/view',
                },
                {
                    title: 'Course fee structures',
                    description: 'Review published structures by course and period',
                    route: '/admin/fees/course-fees/view',
                },
                {
                    title: 'Bulk workbook import',
                    description: 'Upload, map and review course-fee assignments',
                    route: '/admin/fees/course-fees/import',
                },
                {
                    title: 'Saved fee drafts',
                    description: 'Resume a structure before saving it',
                    route: '/admin/fees/course-fees/drafts',
                },
                {
                    title: 'Hostel fees',
                    description: 'Maintain residence fee configuration',
                    route: '/admin/fees/hostel-fees/view',
                },
            ],
        },
        {
            title: 'Generation & publication',
            description: 'Preparation and publication are separate operations.',
            illustration: 'taskSchedule',
            links: [
                {
                    title: 'Prepare next-period fees',
                    description: 'Review eligible students and confirm the selection',
                    route: '/admin/fees/progression',
                },
                {
                    title: 'Publication schedules',
                    description: 'Configure visibility dates, deadlines and fine rules',
                    route: '/admin/fees/schedules',
                },
                {
                    title: 'Scholarship schemes',
                    description: 'Manage reusable concession rules',
                    route: '/admin/fees/scholarships/view',
                },
            ],
        },
        {
            title: 'Collections & audit',
            description: 'Separate, searchable directories with record-level details.',
            illustration: 'feeWallet',
            links: [
                {
                    title: 'Collections overview',
                    description: 'All-time collections, pending orders and available credit',
                    route: '/admin/accounts/overview',
                },
                {
                    title: 'Student payments',
                    description: 'Transactions, allocations and receipt downloads',
                    route: '/admin/accounts/payments',
                },
                {
                    title: 'Excess credits',
                    description: 'Original, remaining and consumed student credit',
                    route: '/admin/accounts/credits',
                },
                {
                    title: 'Discount audit',
                    description: 'One-time concessions and internal review notes',
                    route: '/admin/accounts/discounts',
                },
            ],
        },
    ];
    static ɵfac = function FinanceOverviewComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || FinanceOverviewComponent)(); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: FinanceOverviewComponent, selectors: [["erp-finance-overview"]], decls: 7, vars: 0, consts: [["title", "Finance operations", "description", "Choose a focused workspace for configuration, fee preparation or collections.", "variant", "compact"], ["page-actions", "", "routerLink", "/admin/accounts/payments", 1, "erp-button", "erp-button--primary"], ["lucideArrowRight", "", "size", "17", "aria-hidden", "true"], [1, "erp-finance-workspaces"], [1, "erp-card", "erp-card--padded"], [1, "erp-card__header"], [1, "erp-finance-group-heading"], ["size", "compact", 3, "kind"], [1, "erp-crm-workspace-links"], [3, "routerLink"], ["lucideArrowRight", "", "size", "18", "aria-hidden", "true"]], template: function FinanceOverviewComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "erp-admin-page", 0)(1, "a", 1);
            i0.ɵɵtext(2, "Open student payments ");
            i0.ɵɵnamespaceSVG();
            i0.ɵɵelement(3, "svg", 2);
            i0.ɵɵelementEnd();
            i0.ɵɵnamespaceHTML();
            i0.ɵɵelementStart(4, "div", 3);
            i0.ɵɵrepeaterCreate(5, FinanceOverviewComponent_For_6_Template, 12, 4, "section", 4, _forTrack0);
            i0.ɵɵelementEnd()();
        } if (rf & 2) {
            i0.ɵɵadvance(5);
            i0.ɵɵrepeater(ctx.groups);
        } }, dependencies: [RouterLink, LucideArrowRight, AdminPageComponent, AdminIllustrationComponent], encapsulation: 2, changeDetection: 0 });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(FinanceOverviewComponent, [{
        type: Component,
        args: [{ selector: 'erp-finance-overview', imports: [RouterLink, LucideArrowRight, AdminPageComponent, AdminIllustrationComponent], changeDetection: ChangeDetectionStrategy.OnPush, template: "<erp-admin-page\n  title=\"Finance operations\"\n  description=\"Choose a focused workspace for configuration, fee preparation or collections.\"\n  variant=\"compact\"\n>\n  <a page-actions class=\"erp-button erp-button--primary\" routerLink=\"/admin/accounts/payments\"\n    >Open student payments <svg lucideArrowRight size=\"17\" aria-hidden=\"true\"\n  /></a>\n  <div class=\"erp-finance-workspaces\">\n    @for (group of groups; track group.title) {\n      <section class=\"erp-card erp-card--padded\">\n        <header class=\"erp-card__header\">\n          <div class=\"erp-finance-group-heading\">\n            <erp-admin-illustration [kind]=\"group.illustration\" size=\"compact\" />\n            <div>\n              <h2>{{ group.title }}</h2>\n              <p>{{ group.description }}</p>\n            </div>\n          </div>\n        </header>\n        <nav class=\"erp-crm-workspace-links\" [attr.aria-label]=\"group.title\">\n          @for (link of group.links; track link.route) {\n            <a [routerLink]=\"link.route\"\n              ><span\n                ><strong>{{ link.title }}</strong\n                ><small>{{ link.description }}</small></span\n              ><svg lucideArrowRight size=\"18\" aria-hidden=\"true\"\n            /></a>\n          }\n        </nav>\n      </section>\n    }\n  </div>\n</erp-admin-page>\n" }]
    }], null, null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(FinanceOverviewComponent, { className: "FinanceOverviewComponent", filePath: "frontend/src/app/features/admin/fee-management/finance-overview.component.ts", lineNumber: 14 }); })();
