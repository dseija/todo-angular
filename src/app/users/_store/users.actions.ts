import { HttpErrorResponse } from '@angular/common/http';
import { createAction, props } from '@ngrx/store';

export enum UsersActions {
  Login = '[Users] Login',
  LoginSuccess = '[Users] Login Success',
  LoginFailure = '[Users] Login Failure',
  StartProcess = '[Users] Start Process',
  EndProcess = '[Users] End Process',
  ResetError = '[Users] Reset Error Message',
  ResetSuccess = '[Users] Reset Success Message',
}

export const login = createAction(
  UsersActions.Login,
  props<{ username: string; password: string }>()
);

export const loginSuccess = createAction(
  UsersActions.LoginSuccess,
  props<{ username?: string; firstname?: string; token?: string }>()
);

export const loginFailure = createAction(
  UsersActions.LoginFailure,
  props<{ errorMessage?: string }>()
);

export const startProcess = createAction(UsersActions.StartProcess);

export const endProcess = createAction(UsersActions.EndProcess);

export const resetError = createAction(UsersActions.ResetError);

export const resetSucess = createAction(UsersActions.ResetSuccess);
