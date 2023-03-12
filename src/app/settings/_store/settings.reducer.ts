import { createReducer, on } from '@ngrx/store';
import { loadSavedSettings } from '../settings.helpers';
import { ISettingsState } from '../settings.types';
import { setSettings, toggleThemeMode } from './settings.actions';

export const settingsInitialState: ISettingsState = loadSavedSettings();

export const settingsReducer = createReducer(
  settingsInitialState,

  on(setSettings, (_state, { settings }) => settings),

  on(toggleThemeMode, (state) => ({
    ...state,
    themeMode: state.themeMode === 'dark' ? 'light' : 'dark',
  }))
);
