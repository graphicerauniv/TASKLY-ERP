import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { ApiService } from '../../../core/api.service';
import { AuthService } from '../../../core/auth.service';
import { MasterType } from '../../../core/models';

@Component({
  selector: 'erp-admin-shell',
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './admin-shell.component.html',
  styleUrl: './admin-shell.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AdminShellComponent {
  private readonly api = inject(ApiService);
  readonly auth = inject(AuthService);
  private readonly router = inject(Router);
  readonly masterTypes = signal<MasterType[]>([]);
  readonly menuOpen = signal(false);
  constructor() {
    this.api
      .masterTypes()
      .subscribe(({ items }) => this.masterTypes.set(items.filter((item) => item.isActive)));
  }
  logout() {
    this.auth.clear();
    void this.router.navigate(['/admin/login']);
  }
}
