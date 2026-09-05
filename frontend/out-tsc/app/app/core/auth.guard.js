import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';
export function authGuard() {
    const auth = inject(AuthService);
    return auth.isAuthenticated() || inject(Router).createUrlTree(['/login']);
}
