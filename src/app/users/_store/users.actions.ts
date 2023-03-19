import { createAction, props } from '@ngrx/store';
import { UserData } from '../users.types';

export enum UsersActions {
  // Login Actions
  LoginSubmit = '[Users] Login Submit',
  LoginSuccess = '[Users] Login Success',
  LoginFailure = '[Users] Login Failure',

  // Register Actions
  RegisterSubmit = '[Users] Register Submit',
  RegisterSuccess = '[Users] Register Success',
  RegisterFailure = '[Users] Register Failure',

  // Generic Actions
  StartProcess = '[Users] Start Process',
  EndProcess = '[Users] End Process',
  ResetError = '[Users] Reset Error Message',
  ResetSuccess = '[Users] Reset Success Message',

  // User Data Actions
  LoadUser = '[Users] Load User Data',
  LoadUserSuccess = '[Users] Load User Data Success',
  LoadUserFailure = '[Users] Load User Data Failure',
}

export const loginSubmit = createAction(
  UsersActions.LoginSubmit,
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

export const registerSubmit = createAction(
  UsersActions.RegisterSubmit,
  props<Partial<UserData>>()
);

export const registerSuccess = createAction(
  UsersActions.RegisterSuccess,
  props<{ username?: string }>()
);

export const registerFailure = createAction(
  UsersActions.RegisterFailure,
  props<{ errorMessage?: string }>()
);

export const startProcess = createAction(UsersActions.StartProcess);

export const endProcess = createAction(UsersActions.EndProcess);

export const resetError = createAction(UsersActions.ResetError);

export const resetSucess = createAction(UsersActions.ResetSuccess);

export const loadUser = createAction(UsersActions.LoadUser);

export const loadUserSuccess = createAction(
  UsersActions.LoadUserSuccess,
  props<Partial<UserData>>()
);

export const loadUserFailure = createAction(
  UsersActions.LoadUserFailure,
  props<{ errorMessage?: string }>()
);
