import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { DatePipe, JsonPipe } from '@angular/common';
import { ApiService } from '../../../core/api.service';
import { Admission } from '../../../core/models';
@Component({
  selector: 'erp-admissions',
  imports: [DatePipe, JsonPipe],
  templateUrl: './admissions.component.html',
  styleUrl: './admissions.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AdmissionsComponent {
  readonly items = signal<Admission[]>([]);
  readonly selected = signal<Admission | null>(null);
  constructor() {
    inject(ApiService)
      .admissions()
      .subscribe(({ items }) => this.items.set(items));
  }
}
