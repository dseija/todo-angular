import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { SessionService } from './session.service';

export const sessionGuard: CanActivateFn = () => {
  const router = inject(Router);
  const sessionService = inject(SessionService);

  const token = sessionService.getSessionCookie();
  if (!token) return router.navigateByUrl('/signin', { replaceUrl: true });

  return true;
};
