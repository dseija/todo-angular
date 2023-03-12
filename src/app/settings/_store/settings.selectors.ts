import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ISettingsState } from '../settings.types';

const selectFeature = createFeatureSelector<ISettingsState>('settingsState');

export const selectSettings = createSelector(selectFeature, (state) => state);

export const selectThemeModeSetting = createSelector(
  selectSettings,
  (settings) => settings.themeMode
);
