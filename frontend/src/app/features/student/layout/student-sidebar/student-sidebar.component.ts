import { ChangeDetectionStrategy, Component, HostListener, inject, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { LucideDynamicIcon, LucideLogOut, LucideUserRound } from '@lucide/angular';
import {
  STUDENT_NAVIGATION,
  studentNavigationIcon,
} from '../../shared/config/student-navigation.config';
import { StudentLayoutStateService } from '../../shared/services/student-layout-state.service';

@Component({
  selector: 'erp-student-sidebar',
  imports: [LucideDynamicIcon, LucideLogOut, LucideUserRound, RouterLink, RouterLinkActive],
  templateUrl: './student-sidebar.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StudentSidebarComponent {
  readonly navigation = STUDENT_NAVIGATION;
  readonly layoutState = inject(StudentLayoutStateService);
  readonly navigationIcon = studentNavigationIcon;
  readonly tooltipLabel = signal('');
  readonly tooltipTop = signal(0);
  private collapseTimer: ReturnType<typeof setTimeout> | null = null;

  @HostListener('pointerenter')
  expand(): void {
    this.cancelCollapse();
    this.layoutState.setDesktopSidebarExpanded(true);
  }

  @HostListener('pointerleave')
  scheduleCollapse(): void {
    this.cancelCollapse();
    this.collapseTimer = setTimeout(() => {
      this.layoutState.setDesktopSidebarExpanded(false);
    }, 160);
  }

  @HostListener('focusin')
  expandForKeyboard(): void {
    this.expand();
  }

  @HostListener('focusout', ['$event'])
  collapseAfterFocus(event: FocusEvent): void {
    const nextTarget = event.relatedTarget;
    if (
      !(nextTarget instanceof Node) ||
      !(event.currentTarget as HTMLElement).contains(nextTarget)
    ) {
      this.scheduleCollapse();
    }
  }

  selectNavigation(): void {
    this.cancelCollapse();
    this.layoutState.setDesktopSidebarExpanded(false);
  }

  showTooltip(label: string, event: PointerEvent): void {
    if (this.layoutState.desktopSidebarExpanded()) return;
    const target = event.currentTarget;
    if (!(target instanceof HTMLElement)) return;
    const bounds = target.getBoundingClientRect();
    this.tooltipLabel.set(label);
    this.tooltipTop.set(bounds.top + bounds.height / 2);
  }

  hideTooltip(): void {
    this.tooltipLabel.set('');
  }

  private cancelCollapse(): void {
    if (this.collapseTimer) clearTimeout(this.collapseTimer);
    this.collapseTimer = null;
  }
}
