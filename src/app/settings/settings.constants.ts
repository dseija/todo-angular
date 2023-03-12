import { ISettingsState } from './settings.types';

export const SETTINGS_STORAGE_KEY = 'settingsStorage';

export const DEFAULT_SETTINGS: ISettingsState = {
  themeMode: 'dark',
};
