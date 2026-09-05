import { computed, inject, Injectable } from '@angular/core';
import { StudentSessionService } from '../../shared/services/student-session.service';
import { STUDENT_DASHBOARD_SOURCE_CONFIG } from '../config/dashboard-source.config';
import { STUDENT_DASHBOARD_MODULES } from '../config/student-dashboard-modules.config';
import { STUDENT_DASHBOARD_PREVIEW_DATA } from './student-dashboard-preview-data';
import * as i0 from "@angular/core";
function unavailable() {
    return { status: 'unavailable', data: null, errorMessage: null };
}
function loaded(data) {
    return { status: 'loaded', data, errorMessage: null };
}
export class StudentDashboardFacade {
    session = inject(StudentSessionService);
    identity = computed(() => {
        const profile = this.session.profile();
        const firstName = this.session.firstName();
        if (!profile || !firstName)
            return unavailable();
        return {
            status: 'loaded',
            data: {
                id: profile.id,
                studentId: profile.studentId,
                displayName: profile.name,
                firstName,
                initials: this.session.initials(),
            },
            errorMessage: null,
        };
    }, ...(ngDevMode ? [{ debugName: "identity" }] : /* istanbul ignore next */ []));
    state = computed(() => ({
        sourceStatus: STUDENT_DASHBOARD_SOURCE_CONFIG,
        identity: this.identity(),
        schedule: loaded(STUDENT_DASHBOARD_PREVIEW_DATA.schedule),
        attendance: loaded(STUDENT_DASHBOARD_PREVIEW_DATA.attendance),
        academics: unavailable(),
        fees: loaded(STUDENT_DASHBOARD_PREVIEW_DATA.fees),
        examinations: loaded(STUDENT_DASHBOARD_PREVIEW_DATA.examination),
        hostel: unavailable(),
        notices: loaded(STUDENT_DASHBOARD_PREVIEW_DATA.notices),
        documents: unavailable(),
        notifications: unavailable(),
        quickActions: STUDENT_DASHBOARD_PREVIEW_DATA.quickActions,
    }), ...(ngDevMode ? [{ debugName: "state" }] : /* istanbul ignore next */ []));
    /** One normalized source consumed by both desktop and mobile dashboard presentation. */
    viewModel = computed(() => ({
        firstName: this.identity().data?.firstName ?? null,
        modules: STUDENT_DASHBOARD_MODULES,
        operational: this.state(),
    }), ...(ngDevMode ? [{ debugName: "viewModel" }] : /* istanbul ignore next */ []));
    static ɵfac = function StudentDashboardFacade_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || StudentDashboardFacade)(); };
    static ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: StudentDashboardFacade, factory: StudentDashboardFacade.ɵfac, providedIn: 'root' });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(StudentDashboardFacade, [{
        type: Injectable,
        args: [{ providedIn: 'root' }]
    }], null, null); })();
