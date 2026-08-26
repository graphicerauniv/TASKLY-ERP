import { CdkTrapFocus } from '@angular/cdk/a11y';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { LucideDynamicIcon, LucideLogOut, LucideUserRound, LucideX } from '@lucide/angular';
import {
  STUDENT_NAVIGATION,
  studentNavigationIcon,
} from '../../shared/config/student-navigation.config';
import { StudentLayoutStateService } from '../../shared/services/student-layout-state.service';

@Component({
  selector: 'erp-student-mobile-drawer',
  imports: [
    CdkTrapFocus,
    LucideDynamicIcon,
    LucideLogOut,
    LucideUserRound,
    LucideX,
    RouterLink,
    RouterLinkActive,
  ],
  templateUrl: './student-mobile-drawer.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StudentMobileDrawerComponent {
  readonly layoutState = inject(StudentLayoutStateService);
  readonly navigation = STUDENT_NAVIGATION;
  readonly navigationIcon = studentNavigationIcon;

  close(restoreFocus = true): void {
    this.layoutState.closeMobileNavigation(restoreFocus);
  }
}
