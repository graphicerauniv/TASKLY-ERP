import { ChangeDetectionStrategy, Component, input, signal } from '@angular/core';
import {
  AttendanceDashboardViewModel,
  DashboardWidgetState,
  ExaminationSummaryViewModel,
  FeeStatusViewModel,
} from '../../models/student-dashboard-operational.model';

@Component({
  selector: 'erp-dashboard-quick-updates',
  templateUrl: './dashboard-quick-updates.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboardQuickUpdatesComponent {
  readonly attendance = input.required<DashboardWidgetState<AttendanceDashboardViewModel>>();
  readonly fees = input.required<DashboardWidgetState<FeeStatusViewModel>>();
  readonly examination = input.required<DashboardWidgetState<ExaminationSummaryViewModel>>();
  readonly activeIndex = signal(0);

  updateActiveCard(event: Event): void {
    const track = event.currentTarget;
    if (!(track instanceof HTMLElement)) return;
    const firstCard = track.querySelector<HTMLElement>('.student-quick-update');
    if (!firstCard) return;
    const step = firstCard.offsetWidth + 12;
    this.activeIndex.set(Math.max(0, Math.min(2, Math.round(track.scrollLeft / step))));
  }

  focusCard(track: HTMLElement, index: number): void {
    const card = track.children.item(index);
    if (card instanceof HTMLElement) {
      card.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'start' });
      this.activeIndex.set(index);
    }
  }
}
