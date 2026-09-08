import { computed, Injectable, signal } from '@angular/core';
import * as i0 from "@angular/core";
const FACULTY_TOKEN_KEY = 'taskly_faculty_token';
const FACULTY_PROFILE_KEY = 'taskly_faculty_profile';
export class FacultySessionService {
    tokenState = signal(readStorage(FACULTY_TOKEN_KEY), ...(ngDevMode ? [{ debugName: "tokenState" }] : /* istanbul ignore next */ []));
    profileState = signal(readProfile(), ...(ngDevMode ? [{ debugName: "profileState" }] : /* istanbul ignore next */ []));
    token = this.tokenState.asReadonly();
    profile = this.profileState.asReadonly();
    isAuthenticated = computed(() => Boolean(this.tokenState() && this.profileState()), ...(ngDevMode ? [{ debugName: "isAuthenticated" }] : /* istanbul ignore next */ []));
    firstName = computed(() => this.profileState()?.name.trim().split(/\s+/)[0] || null, ...(ngDevMode ? [{ debugName: "firstName" }] : /* istanbul ignore next */ []));
    initials = computed(() => {
        const name = this.profileState()?.name.trim();
        if (!name)
            return 'FC';
        return name
            .split(/\s+/)
            .slice(0, 2)
            .map((part) => part.charAt(0).toUpperCase())
            .join('');
    }, ...(ngDevMode ? [{ debugName: "initials" }] : /* istanbul ignore next */ []));
    save(token, profile) {
        localStorage.setItem(FACULTY_TOKEN_KEY, token);
        localStorage.setItem(FACULTY_PROFILE_KEY, JSON.stringify(profile));
        this.tokenState.set(token);
        this.profileState.set(profile);
    }
    clear() {
        localStorage.removeItem(FACULTY_TOKEN_KEY);
        localStorage.removeItem(FACULTY_PROFILE_KEY);
        this.tokenState.set(null);
        this.profileState.set(null);
    }
    static ɵfac = function FacultySessionService_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || FacultySessionService)(); };
    static ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: FacultySessionService, factory: FacultySessionService.ɵfac, providedIn: 'root' });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(FacultySessionService, [{
        type: Injectable,
        args: [{ providedIn: 'root' }]
    }], null, null); })();
function readProfile() {
    try {
        const value = JSON.parse(readStorage(FACULTY_PROFILE_KEY) || 'null');
        return value?.id && value.employeeId && value.name ? value : null;
    }
    catch {
        localStorage.removeItem(FACULTY_PROFILE_KEY);
        return null;
    }
}
function readStorage(key) {
    try {
        return localStorage.getItem(key);
    }
    catch {
        return null;
    }
}
