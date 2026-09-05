import { computed, Injectable, signal } from '@angular/core';
import * as i0 from "@angular/core";
const STUDENT_TOKEN_KEY = 'taskly_student_token';
const STUDENT_PROFILE_KEY = 'taskly_student_profile';
export class StudentSessionService {
    tokenState = signal(localStorage.getItem(STUDENT_TOKEN_KEY), ...(ngDevMode ? [{ debugName: "tokenState" }] : /* istanbul ignore next */ []));
    profileState = signal(this.readStoredProfile(), ...(ngDevMode ? [{ debugName: "profileState" }] : /* istanbul ignore next */ []));
    token = this.tokenState.asReadonly();
    profile = this.profileState.asReadonly();
    isAuthenticated = computed(() => Boolean(this.tokenState() && this.profileState()), ...(ngDevMode ? [{ debugName: "isAuthenticated" }] : /* istanbul ignore next */ []));
    firstName = computed(() => this.profileState()?.name.trim().split(/\s+/)[0] || null, ...(ngDevMode ? [{ debugName: "firstName" }] : /* istanbul ignore next */ []));
    initials = computed(() => {
        const name = this.profileState()?.name.trim();
        if (!name)
            return 'ST';
        return name
            .split(/\s+/)
            .slice(0, 2)
            .map((part) => part.charAt(0).toUpperCase())
            .join('');
    }, ...(ngDevMode ? [{ debugName: "initials" }] : /* istanbul ignore next */ []));
    save(token, profile) {
        localStorage.setItem(STUDENT_TOKEN_KEY, token);
        localStorage.setItem(STUDENT_PROFILE_KEY, JSON.stringify(profile));
        this.tokenState.set(token);
        this.profileState.set(profile);
    }
    clear() {
        localStorage.removeItem(STUDENT_TOKEN_KEY);
        localStorage.removeItem(STUDENT_PROFILE_KEY);
        this.tokenState.set(null);
        this.profileState.set(null);
    }
    readStoredProfile() {
        try {
            const stored = localStorage.getItem(STUDENT_PROFILE_KEY);
            if (!stored)
                return null;
            const value = JSON.parse(stored);
            if (!value.id || !value.studentId || !value.name)
                return null;
            return {
                id: value.id,
                studentId: value.studentId,
                name: value.name,
                mustChangePassword: value.mustChangePassword !== false,
                academicSession: value.academicSession,
                courseName: value.courseName,
                currentAcademicYear: value.currentAcademicYear,
                currentSemester: value.currentSemester,
                feeFrequency: value.feeFrequency,
            };
        }
        catch {
            localStorage.removeItem(STUDENT_PROFILE_KEY);
            return null;
        }
    }
    static ɵfac = function StudentSessionService_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || StudentSessionService)(); };
    static ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: StudentSessionService, factory: StudentSessionService.ɵfac, providedIn: 'root' });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(StudentSessionService, [{
        type: Injectable,
        args: [{ providedIn: 'root' }]
    }], null, null); })();
