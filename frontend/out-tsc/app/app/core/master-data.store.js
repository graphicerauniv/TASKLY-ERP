import { inject, Injectable, signal } from '@angular/core';
import { of, tap } from 'rxjs';
import { ApiService } from './api.service';
import * as i0 from "@angular/core";
export class MasterDataStore {
    api = inject(ApiService);
    types = signal([], ...(ngDevMode ? [{ debugName: "types" }] : /* istanbul ignore next */ []));
    load(force = false) {
        if (!force && this.types().length)
            return of({ items: this.types() });
        return this.api
            .masterTypes()
            .pipe(tap(({ items }) => this.types.set(items.filter((item) => item.isActive))));
    }
    static ɵfac = function MasterDataStore_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || MasterDataStore)(); };
    static ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: MasterDataStore, factory: MasterDataStore.ɵfac, providedIn: 'root' });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MasterDataStore, [{
        type: Injectable,
        args: [{ providedIn: 'root' }]
    }], null, null); })();
