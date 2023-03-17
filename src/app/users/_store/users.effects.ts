import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, exhaustMap, map, of } from 'rxjs';

import { UsersService } from '../users.service';
import { loginSubmit, loginFailure, loginSuccess } from './users.actions';

@Injectable()
export class UsersEffects {
  login$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loginSubmit),
      exhaustMap((loginData) =>
        this.usersService.login(loginData).pipe(
          map(({ username, firstname, token }) =>
            loginSuccess({ username, firstname, token })
          ),
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

  constructor(
    private readonly actions$: Actions,
    private readonly usersService: UsersService
  ) {}
}
