import { createReducer, on } from '@ngrx/store';
import { IUserState } from '../users.types';
import {
  loginSubmit,
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

  on(loginSubmit, (state) => ({
    ...state,
    processing: true,
    errorMessage: '',
    successMessage: '',
  })),

  on(loginSuccess, (state, { username, firstname }) => ({
    ...state,
    isLoggedIn: true,
    data: { username, firstname },
    processing: false,
  })),

  on(loginFailure, (state, { errorMessage }) => ({
    ...state,
    errorMessage,
    processing: false,
  })),

  on(startProcess, (state) => ({
    ...state,
    processing: true,
    errorMessage: '',
    successMessage: '',
  })),

  on(endProcess, (state) => ({ ...state, processing: false })),

  on(resetError, (state) => ({ ...state, errorMessage: '' })),

  on(resetSucess, (state) => ({ ...state, successMessage: '' }))
);
