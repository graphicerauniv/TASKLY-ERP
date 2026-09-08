import { HttpClient } from '@angular/common/http';
import { computed, inject, Injectable, signal } from '@angular/core';
import { finalize, map, shareReplay, tap, throwError } from 'rxjs';
import { API_BASE_URL } from './runtime-config';
import * as i0 from "@angular/core";
export class AuthService {
    http = inject(HttpClient);
    tokenState = signal(readStorage('taskly_admin_token'), ...(ngDevMode ? [{ debugName: "tokenState" }] : /* istanbul ignore next */ []));
    refreshTokenState = signal(readStorage('taskly_admin_refresh_token'), ...(ngDevMode ? [{ debugName: "refreshTokenState" }] : /* istanbul ignore next */ []));
    refreshRequest = null;
    admin = signal(readAdminIdentity(), ...(ngDevMode ? [{ debugName: "admin" }] : /* istanbul ignore next */ []));
    isAuthenticated = computed(() => Boolean(this.tokenState()), ...(ngDevMode ? [{ debugName: "isAuthenticated" }] : /* istanbul ignore next */ []));
    token() {
        return this.tokenState();
    }
    save(token, admin, refreshToken) {
        writeStorage('taskly_admin_token', token);
        writeStorage('taskly_admin', JSON.stringify(admin));
        if (refreshToken) {
            writeStorage('taskly_admin_refresh_token', refreshToken);
            this.refreshTokenState.set(refreshToken);
        }
        this.tokenState.set(token);
        this.admin.set(admin);
    }
    refreshAccessToken() {
        const refreshToken = this.refreshTokenState();
        if (!refreshToken)
            return throwError(() => new Error('No renewable admin session exists.'));
        if (this.refreshRequest)
            return this.refreshRequest;
        this.refreshRequest = this.http
            .post(`${API_BASE_URL}/auth/refresh`, { refreshToken })
            .pipe(tap((session) => this.save(session.token, session.admin, session.refreshToken)), map((session) => session.token), finalize(() => {
            this.refreshRequest = null;
        }), shareReplay({ bufferSize: 1, refCount: false }));
        return this.refreshRequest;
    }
    clear() {
        removeStorage('taskly_admin_token');
        removeStorage('taskly_admin_refresh_token');
        removeStorage('taskly_admin');
        this.tokenState.set(null);
        this.refreshTokenState.set(null);
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
