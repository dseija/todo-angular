import { createAction, props } from '@ngrx/store';
import { ISettingsState } from '../settings.types';

enum SettingsActions {
  SetSettings = '[Settings] Set Settings',
  ToggleThemeMode = '[Settings] Toggle Settings Theme Mode',
}

export const setSettings = createAction(
  SettingsActions.SetSettings,
  props<{ settings: ISettingsState }>()
);

export const toggleThemeMode = createAction(SettingsActions.ToggleThemeMode);
