import { createReducer, on } from '@ngrx/store';
import { IUserState } from '../users.types';
import {
  loginFailure,
  loginSuccess,
  startProcess,
  endProcess,
  resetError,
  resetSucess,
} from './users.actions';

export const usersInitialState: IUserState = {};

export const usersReducer = createReducer(
  usersInitialState,

  on(loginSuccess, (state, { username, firstname }) => ({
    ...state,
    isLoggedIn: true,
    data: { username, firstname },
  })),

  on(loginFailure, (state, { errorMessage }) => ({
    ...state,
    errorMessage,
  })),

  on(startProcess, (state) => ({ ...state, processing: true })),

  on(endProcess, (state) => ({ ...state, processing: false })),

  on(resetError, (state) => ({ ...state, errorMessage: '' })),

  on(resetSucess, (state) => ({ ...state, successMessage: '' }))
);
