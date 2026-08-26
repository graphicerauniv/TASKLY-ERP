import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  HostListener,
  inject,
} from '@angular/core';
import { RouterLink } from '@angular/router';
import {
  LucideFolderOpen,
  LucideGraduationCap,
  LucideLogOut,
  LucideSettings,
  LucideUserRound,
} from '@lucide/angular';
import { StudentLayoutStateService } from '../../shared/services/student-layout-state.service';

@Component({
  selector: 'erp-student-profile-menu',
  imports: [
    LucideFolderOpen,
    LucideGraduationCap,
    LucideLogOut,
    LucideSettings,
    LucideUserRound,
    RouterLink,
  ],
  templateUrl: './student-profile-menu.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StudentProfileMenuComponent {
  readonly layoutState = inject(StudentLayoutStateService);
  private readonly elementRef = inject<ElementRef<HTMLElement>>(ElementRef);

  @HostListener('document:pointerdown', ['$event'])
  closeOnOutsidePointer(event: PointerEvent): void {
    if (!this.layoutState.profileMenuOpen()) return;
    const target = event.target;
    if (!(target instanceof Node)) return;
    if (this.elementRef.nativeElement.contains(target) || this.layoutState.isProfileTrigger(target))
      return;
    this.layoutState.closeProfileMenu();
  }

  close(): void {
    this.layoutState.closeProfileMenu();
  }
}
