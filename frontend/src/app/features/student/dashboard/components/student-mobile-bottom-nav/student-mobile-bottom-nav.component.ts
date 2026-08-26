import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { LucideBookOpen, LucideHome, LucideLayoutGrid, LucideUserRound } from '@lucide/angular';
import { StudentLayoutStateService } from '../../../shared/services/student-layout-state.service';

@Component({
  selector: 'erp-student-mobile-bottom-nav',
  imports: [
    RouterLink,
    RouterLinkActive,
    LucideBookOpen,
    LucideHome,
    LucideLayoutGrid,
    LucideUserRound,
  ],
  templateUrl: './student-mobile-bottom-nav.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StudentMobileBottomNavComponent {
  readonly layoutState = inject(StudentLayoutStateService);

  openProfile(trigger: EventTarget | null): void {
    if (trigger instanceof HTMLElement) this.layoutState.toggleProfileMenu(trigger);
  }
}
