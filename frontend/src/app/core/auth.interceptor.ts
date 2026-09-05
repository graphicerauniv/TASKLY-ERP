import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, switchMap, throwError } from 'rxjs';
import { AuthService } from './auth.service';

export const authInterceptor: HttpInterceptorFn = (request, next) => {
  const auth = inject(AuthService);
  const router = inject(Router);
  const token = auth.token();
  const isSessionEndpoint = /\/auth\/(?:login|refresh)(?:\?|$)/.test(request.url);
  const usesAdminSession = Boolean(
    token && !request.headers.has('Authorization') && !isSessionEndpoint,
  );
  const authenticatedRequest = usesAdminSession
    ? request.clone({ setHeaders: { Authorization: `Bearer ${token}` } })
    : request;

  return next(authenticatedRequest).pipe(
    catchError((error: { status?: number }) => {
      if (usesAdminSession && error.status === 401) {
        return auth.refreshAccessToken().pipe(
          switchMap((freshToken) =>
            next(request.clone({ setHeaders: { Authorization: `Bearer ${freshToken}` } })),
          ),
          catchError((refreshError) => {
            auth.clear();
            void router.navigate(['/login'], {
              queryParams: { reason: 'session-expired' },
              replaceUrl: true,
            });
            return throwError(() => refreshError);
          }),
        );
      }
      return throwError(() => error);
    }),
  );
};
