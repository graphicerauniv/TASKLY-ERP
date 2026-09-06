import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { LucideCalendarCheck, LucideClipboardCheck } from '@lucide/angular';

@Component({
  selector: 'erp-faculty-feature',
  imports: [RouterLink, LucideCalendarCheck, LucideClipboardCheck],
  template: `
    <section class="student-dashboard-placeholder">
      @if (feature === 'attendance') {
        <svg lucideCalendarCheck size="42" aria-hidden="true"></svg>
      } @else {
        <svg lucideClipboardCheck size="42" aria-hidden="true"></svg>
      }
      <p class="student-dashboard-placeholder__eyebrow">Faculty portal</p>
      <h1>{{ feature === 'attendance' ? 'Attendance' : 'Exams' }}</h1>
      <p>
        {{
          feature === 'attendance'
            ? 'Faculty attendance tools are ready for the next implementation phase.'
            : 'Faculty examination tools are ready for the next implementation phase.'
        }}
      </p>
      <a routerLink="/faculty/dashboard">Back to dashboard</a>
    </section>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FacultyFeatureComponent {
  readonly feature = inject(ActivatedRoute).snapshot.data['feature'] as 'attendance' | 'exams';
}
