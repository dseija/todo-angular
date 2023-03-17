import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { catchError, exhaustMap, map, of } from 'rxjs';

import { UsersService } from '../users.service';
import { IUserState } from '../users.types';
import {
  endProcess,
  login,
  loginFailure,
  loginSuccess,
  startProcess,
} from './users.actions';

@Injectable()
export class UsersEffects {
  login$ = createEffect(() =>
    this.actions$.pipe(
      ofType(login),
      exhaustMap((loginData) => {
        this.store.dispatch(startProcess());

        return this.usersService.login(loginData).pipe(
          map(({ username, firstname, token }) => {
            this.store.dispatch(endProcess());

            return loginSuccess({ username, firstname, token });
          }),
          catchError((errorStatus: number) => {
            this.store.dispatch(endProcess());

            return of(
              loginFailure({
                errorMessage:
                  errorStatus === 401
                    ? 'Wrong username or password.'
                    : 'Unexpected error, please try again.',
              })
            );
          })
        );
      })
    )
  );

  constructor(
    private readonly actions$: Actions,
    private readonly usersService: UsersService,
    private readonly store: Store<IUserState>
  ) {}
}
