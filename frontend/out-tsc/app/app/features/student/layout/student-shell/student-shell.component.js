import { ChangeDetectionStrategy, Component, DestroyRef, HostListener, inject, } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { filter } from 'rxjs';
import { StudentLayoutStateService } from '../../shared/services/student-layout-state.service';
import { StudentHeaderComponent } from '../student-header/student-header.component';
import { StudentMobileDrawerComponent } from '../student-mobile-drawer/student-mobile-drawer.component';
import { StudentSidebarComponent } from '../student-sidebar/student-sidebar.component';
import * as i0 from "@angular/core";
export class StudentShellComponent {
    layoutState = inject(StudentLayoutStateService);
    router = inject(Router);
    destroyRef = inject(DestroyRef);
    constructor() {
        this.router.events
            .pipe(filter((event) => event instanceof NavigationEnd), takeUntilDestroyed(this.destroyRef))
            .subscribe(() => this.layoutState.closeTransientOverlays());
    }
    closeTopOverlay() {
        this.layoutState.closeTransientOverlays(true);
    }
    static ɵfac = function StudentShellComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || StudentShellComponent)(); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: StudentShellComponent, selectors: [["erp-student-shell"]], hostBindings: function StudentShellComponent_HostBindings(rf, ctx) { if (rf & 1) {
            i0.ɵɵlistener("keydown.escape", function StudentShellComponent_keydown_escape_HostBindingHandler() { return ctx.closeTopOverlay(); }, i0.ɵɵresolveDocument);
        } }, decls: 7, vars: 2, consts: [["data-portal", "student", 1, "student-shell"], ["id", "student-main-content", "tabindex", "-1", 1, "student-page"], [1, "student-page__container"]], template: function StudentShellComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0);
            i0.ɵɵelement(1, "erp-student-sidebar")(2, "erp-student-header")(3, "erp-student-mobile-drawer");
            i0.ɵɵelementStart(4, "main", 1)(5, "div", 2);
            i0.ɵɵelement(6, "router-outlet");
            i0.ɵɵelementEnd()()();
        } if (rf & 2) {
            i0.ɵɵclassProp("student-shell--sidebar-expanded", ctx.layoutState.desktopSidebarExpanded());
        } }, dependencies: [RouterOutlet,
            StudentHeaderComponent,
            StudentMobileDrawerComponent,
            StudentSidebarComponent], encapsulation: 2, changeDetection: 0 });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(StudentShellComponent, [{
        type: Component,
        args: [{ selector: 'erp-student-shell', imports: [
                    RouterOutlet,
                    StudentHeaderComponent,
                    StudentMobileDrawerComponent,
                    StudentSidebarComponent,
                ], changeDetection: ChangeDetectionStrategy.OnPush, template: "<div\n  class=\"student-shell\"\n  data-portal=\"student\"\n  [class.student-shell--sidebar-expanded]=\"layoutState.desktopSidebarExpanded()\"\n>\n  <erp-student-sidebar />\n  <erp-student-header />\n  <erp-student-mobile-drawer />\n\n  <main id=\"student-main-content\" class=\"student-page\" tabindex=\"-1\">\n    <div class=\"student-page__container\">\n      <router-outlet />\n    </div>\n  </main>\n</div>\n" }]
    }], () => [], { closeTopOverlay: [{
            type: HostListener,
            args: ['document:keydown.escape']
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(StudentShellComponent, { className: "StudentShellComponent", filePath: "frontend/src/app/features/student/layout/student-shell/student-shell.component.ts", lineNumber: 27 }); })();
