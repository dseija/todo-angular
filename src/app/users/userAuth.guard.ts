import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { UsersService } from './users.service';

export const userAuthGuard: CanActivateFn = () => {
  const router = inject(Router);
  const userService = inject(UsersService);

  const token = userService.getSessionCookie();
  if (!token) return router.navigateByUrl('/signin', { replaceUrl: true });

  return true;
};
