import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, switchMap, throwError } from 'rxjs';
import { AuthService } from './auth.service';
import { StudentSessionService } from '../features/student/shared/services/student-session.service';

export const authInterceptor: HttpInterceptorFn = (request, next) => {
  const auth = inject(AuthService);
  const studentSession = inject(StudentSessionService);
  const router = inject(Router);
  const token = auth.token();
  const isSessionEndpoint = /\/auth\/(?:login|refresh|student\/(?:login|refresh))(?:\?|$)/.test(
    request.url,
  );
  const studentToken = studentSession.token();
  const usesStudentSession = Boolean(
    studentToken && request.headers.get('Authorization') === `Bearer ${studentToken}`,
  );
  const usesAdminSession = Boolean(
    token && !request.headers.has('Authorization') && !isSessionEndpoint,
  );
  const authenticatedRequest = usesAdminSession
    ? request.clone({ setHeaders: { Authorization: `Bearer ${token}` } })
    : request;

  return next(authenticatedRequest).pipe(
    catchError((error: { status?: number }) => {
      if (usesStudentSession && error.status === 401) {
        return studentSession.refreshAccessToken().pipe(
          switchMap((freshToken) =>
            next(request.clone({ setHeaders: { Authorization: `Bearer ${freshToken}` } })),
          ),
          catchError((refreshError) => {
            studentSession.clear();
            void router.navigate(['/student/login'], {
              queryParams: { reason: 'session-expired' },
              replaceUrl: true,
            });
            return throwError(() => refreshError);
          }),
        );
      }
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
