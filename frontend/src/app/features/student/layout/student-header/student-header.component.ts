import { ChangeDetectionStrategy, Component, DestroyRef, inject, signal } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { NavigationEnd, Router } from '@angular/router';
import {
  LucideBell,
  LucideCalendarDays,
  LucideChevronDown,
  LucideMenu,
  LucideSearch,
} from '@lucide/angular';
import { StudentLayoutStateService } from '../../shared/services/student-layout-state.service';
import { StudentSessionService } from '../../shared/services/student-session.service';
import { StudentProfileMenuComponent } from '../student-profile-menu/student-profile-menu.component';
import { filter } from 'rxjs';

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
  readonly session = inject(StudentSessionService);
  readonly pageTitle = signal('Dashboard');
  private readonly router = inject(Router);
  private readonly destroyRef = inject(DestroyRef);

  constructor() {
    this.updatePageTitle(this.router.url);
    this.router.events
      .pipe(
        filter((event): event is NavigationEnd => event instanceof NavigationEnd),
        takeUntilDestroyed(this.destroyRef),
      )
      .subscribe((event) => this.updatePageTitle(event.urlAfterRedirects));
  }
  openMobileNavigation(trigger: EventTarget | null): void {
    if (trigger instanceof HTMLElement) this.layoutState.openMobileNavigation(trigger);
  }

  toggleProfileMenu(trigger: EventTarget | null): void {
    if (trigger instanceof HTMLElement) this.layoutState.toggleProfileMenu(trigger);
  }

  private updatePageTitle(url: string): void {
    this.pageTitle.set(
      url.startsWith('/student/profile')
        ? 'Student Profile'
        : url.startsWith('/student/fees')
          ? 'Fees'
          : 'Dashboard',
    );
  }
}
