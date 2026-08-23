import { inject, Injectable, signal } from '@angular/core';
import { tap } from 'rxjs';
import { ApiService } from './api.service';
import { MasterType } from './models';

@Injectable({ providedIn: 'root' })
export class MasterDataStore {
  private readonly api = inject(ApiService);
  readonly types = signal<MasterType[]>([]);

  load() {
    return this.api
      .masterTypes()
      .pipe(tap(({ items }) => this.types.set(items.filter((item) => item.isActive))));
  }
}
