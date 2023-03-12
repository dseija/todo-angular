import { DEFAULT_SETTINGS, SETTINGS_STORAGE_KEY } from './settings.constants';
import { ISettingsState } from './settings.types';

export const loadSavedSettings = (): ISettingsState => {
  const settingsStr = localStorage.getItem(SETTINGS_STORAGE_KEY);
  return settingsStr ? JSON.parse(settingsStr) : DEFAULT_SETTINGS;
};

export const saveSettings = (settings: ISettingsState) => {
  const oldSettingsStr = localStorage.getItem(SETTINGS_STORAGE_KEY);
  const settingsStr = JSON.stringify(settings);
  if (oldSettingsStr === settingsStr) return false;

  localStorage.setItem(SETTINGS_STORAGE_KEY, settingsStr);

  return true;
};

export const clearSettings = () => {
  localStorage.removeItem(SETTINGS_STORAGE_KEY);
};
