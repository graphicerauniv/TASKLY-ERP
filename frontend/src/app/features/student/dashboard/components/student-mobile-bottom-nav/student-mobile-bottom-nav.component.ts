import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { LucideBookOpen, LucideHome, LucideLayoutGrid, LucideUserRound } from '@lucide/angular';

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
}
