import { createFeatureSelector, createSelector } from '@ngrx/store';
import { IUserState } from '../users.types';

const selectFeature = createFeatureSelector<IUserState>('usersState');

export const selectUsersState = createSelector(selectFeature, (state) => state);

export const selectIsLoggedIn = createSelector(
  selectUsersState,
  ({ isLoggedIn }) => isLoggedIn
);

export const selectErrorMessage = createSelector(
  selectUsersState,
  ({ errorMessage }) => errorMessage
);

export const selectSuccessMessage = createSelector(
  selectUsersState,
  ({ successMessage }) => successMessage
);

export const selectProcessing = createSelector(
  selectUsersState,
  ({ processing }) => processing
);

export const selectUserData = createSelector(
  selectUsersState,
  ({ data }) => data
);

export const selectUserName = createSelector(
  selectUserData,
  (userData) => userData?.firstname || userData?.username
);
