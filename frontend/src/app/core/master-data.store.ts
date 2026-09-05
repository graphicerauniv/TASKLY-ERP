import { inject, Injectable, signal } from '@angular/core';
import { of, tap } from 'rxjs';
import { ApiService } from './api.service';
import { MasterType } from './models';

@Injectable({ providedIn: 'root' })
export class MasterDataStore {
  private readonly api = inject(ApiService);
  readonly types = signal<MasterType[]>([]);

  load(force = false) {
    if (!force && this.types().length) return of({ items: this.types() });
    return this.api
      .masterTypes()
      .pipe(tap(({ items }) => this.types.set(items.filter((item) => item.isActive))));
  }
}
