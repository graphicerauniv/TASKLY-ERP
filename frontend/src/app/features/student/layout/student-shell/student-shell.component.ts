import {
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
  HostListener,
  inject,
} from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { filter } from 'rxjs';
import { StudentLayoutStateService } from '../../shared/services/student-layout-state.service';
import { StudentHeaderComponent } from '../student-header/student-header.component';
import { StudentMobileDrawerComponent } from '../student-mobile-drawer/student-mobile-drawer.component';
import { StudentSidebarComponent } from '../student-sidebar/student-sidebar.component';

@Component({
  selector: 'erp-student-shell',
  imports: [
    RouterOutlet,
    StudentHeaderComponent,
    StudentMobileDrawerComponent,
    StudentSidebarComponent,
  ],
  templateUrl: './student-shell.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StudentShellComponent {
  readonly layoutState = inject(StudentLayoutStateService);
  private readonly router = inject(Router);
  private readonly destroyRef = inject(DestroyRef);

  constructor() {
    this.router.events
      .pipe(
        filter((event): event is NavigationEnd => event instanceof NavigationEnd),
        takeUntilDestroyed(this.destroyRef),
      )
      .subscribe(() => this.layoutState.closeTransientOverlays());
  }

  @HostListener('document:keydown.escape')
  closeTopOverlay(): void {
    this.layoutState.closeTransientOverlays(true);
  }
}
