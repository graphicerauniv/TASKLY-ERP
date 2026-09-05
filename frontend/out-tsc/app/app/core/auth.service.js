import { computed, Injectable, signal } from '@angular/core';
import * as i0 from "@angular/core";
export class AuthService {
    tokenState = signal(readStorage('taskly_admin_token'), ...(ngDevMode ? [{ debugName: "tokenState" }] : /* istanbul ignore next */ []));
    admin = signal(readAdminIdentity(), ...(ngDevMode ? [{ debugName: "admin" }] : /* istanbul ignore next */ []));
    isAuthenticated = computed(() => Boolean(this.tokenState()), ...(ngDevMode ? [{ debugName: "isAuthenticated" }] : /* istanbul ignore next */ []));
    token() {
        return this.tokenState();
    }
    save(token, admin) {
        writeStorage('taskly_admin_token', token);
        writeStorage('taskly_admin', JSON.stringify(admin));
        this.tokenState.set(token);
        this.admin.set(admin);
    }
    clear() {
        removeStorage('taskly_admin_token');
        removeStorage('taskly_admin');
        this.tokenState.set(null);
        this.admin.set(null);
    }
    static ɵfac = function AuthService_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || AuthService)(); };
    static ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: AuthService, factory: AuthService.ɵfac, providedIn: 'root' });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AuthService, [{
        type: Injectable,
        args: [{ providedIn: 'root' }]
    }], null, null); })();
function readAdminIdentity() {
    const stored = readStorage('taskly_admin');
    if (!stored)
        return null;
    try {
        const value = JSON.parse(stored);
        if (!value || typeof value.name !== 'string' || typeof value.email !== 'string') {
            removeStorage('taskly_admin');
            return null;
        }
        return { name: value.name, email: value.email };
    }
    catch {
        removeStorage('taskly_admin');
        return null;
    }
}
function readStorage(key) {
    try {
        return globalThis.localStorage?.getItem(key) || null;
    }
    catch {
        return null;
    }
}
function writeStorage(key, value) {
    try {
        globalThis.localStorage?.setItem(key, value);
    }
    catch {
        // Authentication state remains available for the current tab when storage is restricted.
    }
}
function removeStorage(key) {
    try {
        globalThis.localStorage?.removeItem(key);
    }
    catch {
        // Restricted storage should not prevent logout or application bootstrap.
    }
}
