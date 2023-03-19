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
  loadUser,
  loadUserSuccess,
  loadUserFailure,
  registerSubmit,
  registerSuccess,
  registerFailure,
} from './users.actions';

export const usersInitialState: IUserState = {};

export const usersReducer = createReducer(
  usersInitialState,

  // Login Reducers
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

  // Register Reducers
  on(registerSubmit, (state) => ({
    ...state,
    processing: true,
    errorMessage: '',
    successMessage: '',
  })),
  on(registerSuccess, (state, { username }) => ({
    ...state,
    data: { username },
    processing: false,
  })),
  on(registerFailure, (state, { errorMessage }) => ({
    ...state,
    errorMessage,
    processing: false,
  })),

  // Generic Reducers
  on(startProcess, (state) => ({
    ...state,
    processing: true,
    errorMessage: '',
    successMessage: '',
  })),
  on(endProcess, (state) => ({ ...state, processing: false })),
  on(resetError, (state) => ({ ...state, errorMessage: '' })),
  on(resetSucess, (state) => ({ ...state, successMessage: '' })),

  // User Data Reducers
  on(loadUser, (state) => ({
    ...state,
    processing: true,
  })),
  on(loadUserSuccess, (state, userData) => ({
    ...state,
    data: userData,
    processing: false,
  })),
  on(loadUserFailure, (state, { errorMessage }) => ({
    ...state,
    errorMessage,
    processing: false,
  }))
);
