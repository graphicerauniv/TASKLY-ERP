import {
  ChangeDetectionStrategy,
  Component,
  HostListener,
  input,
  output,
  signal,
} from '@angular/core';
import { CdkConnectedOverlay, CdkOverlayOrigin, ConnectedPosition } from '@angular/cdk/overlay';
import {
  LucideArrowDown,
  LucideArrowUp,
  LucideArrowRightLeft,
  LucideCopy,
  LucideCheck,
  LucideDynamicIcon,
  LucideFilePlus2,
  LucideFolderPlus,
  LucidePencil,
  LucidePlus,
  LucideSettings2,
  LucideSquarePlus,
  LucideTrash2,
  LucideEye,
  LucideEllipsisVertical,
  LucideGraduationCap,
  LucideKeyRound,
  LucideLogOut,
  LucideWalletCards,
} from '@lucide/angular';

const ACTION_ICONS = {
  'add-tab': LucideFilePlus2,
  'add-section': LucideFolderPlus,
  'add-field': LucideSquarePlus,
  rename: LucidePencil,
  edit: LucideSettings2,
  duplicate: LucideCopy,
  up: LucideArrowUp,
  down: LucideArrowDown,
  'add-child': LucidePlus,
  delete: LucideTrash2,
  view: LucideEye,
  check: LucideCheck,
  fees: LucideWalletCards,
  scholarship: LucideGraduationCap,
  password: LucideKeyRound,
  transfer: LucideArrowRightLeft,
  vacate: LucideLogOut,
} as const;

export type CompactActionIcon = keyof typeof ACTION_ICONS;

export interface CompactActionItem {
  id: string;
  label: string;
  icon?: CompactActionIcon;
  disabled?: boolean;
  destructive?: boolean;
  separator?: boolean;
}

@Component({
  selector: 'erp-compact-action-menu',
  imports: [
    CdkConnectedOverlay,
    CdkOverlayOrigin,
    LucideDynamicIcon,
    LucideEllipsisVertical,
    LucidePlus,
  ],
  template: `
    <div class="action-menu" cdkOverlayOrigin #menuOrigin="cdkOverlayOrigin">
      <button
        class="action-menu__trigger"
        type="button"
        aria-label="More actions"
        [attr.aria-expanded]="open()"
        (click)="toggle($event)"
      >
        @if (variant() === 'add') {
          <svg lucidePlus size="16" aria-hidden="true"></svg><span>{{ label() }}</span>
        } @else {
          <svg lucideEllipsisVertical size="18" aria-hidden="true"></svg>
        }
      </button>
      <ng-template
        cdk-connected-overlay
        [cdkConnectedOverlayOrigin]="menuOrigin"
        [cdkConnectedOverlayOpen]="open()"
        [cdkConnectedOverlayPositions]="positions"
        [cdkConnectedOverlayHasBackdrop]="true"
        cdkConnectedOverlayBackdropClass="cdk-overlay-transparent-backdrop"
        [cdkConnectedOverlayPush]="true"
        [cdkConnectedOverlayFlexibleDimensions]="false"
        [cdkConnectedOverlayViewportMargin]="8"
        (backdropClick)="close()"
        (detach)="close()"
      >
        <div class="action-menu__panel" role="menu">
          @for (item of items(); track item.id) {
            <button
              type="button"
              role="menuitem"
              [class.action-menu__item--danger]="item.destructive"
              [class.action-menu__item--separated]="item.separator"
              [disabled]="item.disabled"
              (click)="choose(item.id)"
            >
              @if (item.icon) {
                <svg [lucideIcon]="itemIcon(item.icon)" size="15" aria-hidden="true"></svg>
              }
              <span>{{ item.label }}</span>
            </button>
          }
        </div>
      </ng-template>
    </div>
  `,
  styles: `
    :host {
      display: inline-flex;
    }
    .action-menu {
      position: relative;
    }
    .action-menu__trigger {
      display: grid;
      width: 34px;
      height: 34px;
      padding: 0;
      place-items: center;
      border: 1px solid var(--erp-border-default);
      border-radius: var(--erp-radius-control);
      color: var(--erp-blue-700);
      background: var(--erp-blue-50);
      cursor: pointer;
      transition: var(--erp-standard-transition);
    }
    .action-menu__trigger:hover,
    .action-menu__trigger[aria-expanded='true'] {
      color: var(--erp-blue-700);
      border-color: var(--erp-border-strong);
      background: var(--erp-surface-hover);
    }
    .action-menu__trigger span {
      font-size: var(--erp-font-caption);
      font-weight: var(--erp-weight-semibold);
    }
    .action-menu__trigger:has(span) {
      width: auto;
      min-width: 62px;
      padding-inline: 9px;
      gap: 5px;
    }
    .action-menu__panel {
      display: grid;
      width: min(224px, calc(100vw - 16px));
      max-height: min(420px, calc(100dvh - 16px));
      padding: 6px;
      overflow-y: auto;
      border: 1px solid var(--erp-border-default);
      border-radius: var(--erp-radius-compact);
      background: var(--erp-surface-overlay);
      box-shadow: var(--erp-shadow-overlay);
      animation: action-menu-enter var(--erp-duration-standard) var(--erp-ease-enter);
    }
    .action-menu__panel button {
      display: grid;
      min-height: 34px;
      grid-template-columns: 18px minmax(0, 1fr);
      align-items: center;
      gap: 7px;
      padding: 7px 10px;
      border: 0;
      border-radius: 7px;
      color: var(--erp-text-body);
      background: transparent;
      text-align: left;
      cursor: pointer;
      font-size: var(--erp-font-caption);
      font-weight: var(--erp-weight-medium);
    }
    .action-menu__panel button:not(:has(svg)) {
      grid-template-columns: minmax(0, 1fr);
    }
    .action-menu__panel button:hover:not(:disabled) {
      color: var(--erp-text-heading);
      background: var(--erp-surface-hover);
    }
    .action-menu__panel button:disabled {
      opacity: 0.42;
      cursor: not-allowed;
    }
    .action-menu__item--danger {
      color: var(--erp-danger-text) !important;
    }
    .action-menu__item--danger:hover {
      background: var(--erp-danger-bg) !important;
    }
    .action-menu__item--separated {
      margin-top: 5px;
      border-top: 1px solid var(--erp-border-subtle) !important;
      border-radius: 0 0 7px 7px !important;
    }
    @keyframes action-menu-enter {
      from {
        opacity: 0;
        transform: translateY(-4px);
      }
    }
    @media (prefers-reduced-motion: reduce) {
      .action-menu__panel {
        animation-duration: 1ms;
      }
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CompactActionMenuComponent {
  private static activeMenu: CompactActionMenuComponent | null = null;

  readonly items = input.required<CompactActionItem[]>();
  readonly variant = input<'more' | 'add'>('more');
  readonly label = input('Add');
  readonly selected = output<string>();
  readonly open = signal(false);
  readonly positions: ConnectedPosition[] = [
    {
      originX: 'end',
      originY: 'bottom',
      overlayX: 'end',
      overlayY: 'top',
      offsetY: 6,
    },
    {
      originX: 'end',
      originY: 'top',
      overlayX: 'end',
      overlayY: 'bottom',
      offsetY: -6,
    },
    {
      originX: 'start',
      originY: 'bottom',
      overlayX: 'start',
      overlayY: 'top',
      offsetY: 6,
    },
  ];

  toggle(event: MouseEvent) {
    event.stopPropagation();
    const next = !this.open();
    if (next && CompactActionMenuComponent.activeMenu !== this) {
      CompactActionMenuComponent.activeMenu?.open.set(false);
      CompactActionMenuComponent.activeMenu = this;
    }
    this.open.set(next);
    if (!next && CompactActionMenuComponent.activeMenu === this) {
      CompactActionMenuComponent.activeMenu = null;
    }
  }

  choose(id: string) {
    this.open.set(false);
    if (CompactActionMenuComponent.activeMenu === this) {
      CompactActionMenuComponent.activeMenu = null;
    }
    this.selected.emit(id);
  }

  itemIcon(icon: CompactActionIcon) {
    return ACTION_ICONS[icon];
  }

  close() {
    this.open.set(false);
    if (CompactActionMenuComponent.activeMenu === this) {
      CompactActionMenuComponent.activeMenu = null;
    }
  }

  @HostListener('document:keydown.escape')
  closeOnEscape() {
    this.open.set(false);
  }

  @HostListener('window:resize')
  closeOnViewportChange() {
    this.close();
  }
}
