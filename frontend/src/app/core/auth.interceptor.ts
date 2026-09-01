import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, throwError } from 'rxjs';
import { AuthService } from './auth.service';

export const authInterceptor: HttpInterceptorFn = (request, next) => {
  const auth = inject(AuthService);
  const router = inject(Router);
  const token = auth.token();
  const usesAdminSession = Boolean(token && !request.headers.has('Authorization'));
  const authenticatedRequest = usesAdminSession
    ? request.clone({ setHeaders: { Authorization: `Bearer ${token}` } })
    : request;

  return next(authenticatedRequest).pipe(
    catchError((error: { status?: number }) => {
      if (usesAdminSession && error.status === 401) {
        auth.clear();
        void router.navigate(['/login'], {
          queryParams: { reason: 'session-expired' },
          replaceUrl: true,
        });
      }
      return throwError(() => error);
    }),
  );
};
