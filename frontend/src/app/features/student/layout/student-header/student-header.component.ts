import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import {
  LucideBell,
  LucideCalendarDays,
  LucideChevronDown,
  LucideMenu,
  LucideSearch,
} from '@lucide/angular';
import { StudentLayoutStateService } from '../../shared/services/student-layout-state.service';
import { StudentProfileMenuComponent } from '../student-profile-menu/student-profile-menu.component';

@Component({
  selector: 'erp-student-header',
  imports: [
    LucideBell,
    LucideCalendarDays,
    LucideChevronDown,
    LucideMenu,
    LucideSearch,
    StudentProfileMenuComponent,
  ],
  templateUrl: './student-header.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StudentHeaderComponent {
  readonly layoutState = inject(StudentLayoutStateService);

  openMobileNavigation(trigger: EventTarget | null): void {
    if (trigger instanceof HTMLElement) this.layoutState.openMobileNavigation(trigger);
  }

  toggleProfileMenu(trigger: EventTarget | null): void {
    if (trigger instanceof HTMLElement) this.layoutState.toggleProfileMenu(trigger);
  }
}
