import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, exhaustMap, map, of } from 'rxjs';

import { SessionService } from '../../session/session.service';
import { UsersService } from '../users.service';
import {
  loginSubmit,
  loginFailure,
  loginSuccess,
  loadUser,
  loadUserSuccess,
  loadUserFailure,
} from './users.actions';

@Injectable()
export class UsersEffects {
  loginSubmit$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loginSubmit),
      exhaustMap((loginData) =>
        this.usersService.login(loginData).pipe(
          map(({ username, firstname, token }) => {
            this.sessionService.setCookies({ username, firstname, token });
            return loginSuccess({ username, firstname });
          }),
          catchError((errorStatus: number) =>
            of(
              loginFailure({
                errorMessage:
                  errorStatus === 401
                    ? 'Wrong username or password.'
                    : 'Unexpected error, please try again.',
              })
            )
          )
        )
      )
    )
  );

  loadUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadUser),
      exhaustMap(() =>
        this.usersService.getUser().pipe(
          map((userData) => loadUserSuccess(userData)),
          catchError((errorStatus: number) => {
            let errorMessage = 'Unexpected error, please try again.';
            if ([401, 403].includes(errorStatus)) {
              this.sessionService.clearCookies();
              errorMessage = 'Session expired, please sign in.';
            }

            return of(loadUserFailure({ errorMessage }));
          })
        )
      )
    )
  );

  constructor(
    private readonly actions$: Actions,
    private readonly usersService: UsersService,
    private readonly sessionService: SessionService
  ) {}
}
