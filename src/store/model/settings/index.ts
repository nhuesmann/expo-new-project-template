import { Action, action, Thunk, thunk, ThunkOn, thunkOn } from 'easy-peasy';

import { ASYNC_STORAGE_KEYS, SafeAsyncStorage } from '../../../config';
import type { ThemeAppearanceModeSetting } from '../../../types';
import { getPreferredAppearanceMode } from '../../../utils';
import type { StoreModel } from '../index';

interface AppSettings {
  appearanceMode: ThemeAppearanceModeSetting;
}

const defaultAppearanceMode = getPreferredAppearanceMode();
const defaultSettings: AppSettings = {
  appearanceMode: defaultAppearanceMode,
};
const settingsKey = ASYNC_STORAGE_KEYS.SETTINGS;

export interface SettingsModel {
  // Initialization
  initialize: Thunk<SettingsModel>;
  setInitialFields: Action<SettingsModel, AppSettings>;
  // Settings
  appearanceMode: ThemeAppearanceModeSetting;
  setAppearanceMode: Action<SettingsModel, ThemeAppearanceModeSetting>;
  // Autosave
  onSettingsChangeAutosave: ThunkOn<SettingsModel, void, StoreModel>;
}

export const settingsModel: SettingsModel = {
  initialize: thunk(async (actions) => {
    const loadedSettings = await SafeAsyncStorage.getObject<AppSettings>(
      settingsKey
    );

    if (!loadedSettings) {
      await SafeAsyncStorage.setObject(settingsKey, defaultSettings);
    }

    actions.setInitialFields(loadedSettings || defaultSettings);
  }),
  setInitialFields: action((state, initialFields) => {
    state.appearanceMode = initialFields.appearanceMode;
  }),
  appearanceMode: defaultAppearanceMode,
  setAppearanceMode: action((state, appearanceMode) => {
    state.appearanceMode = appearanceMode;
  }),
  onSettingsChangeAutosave: thunkOn(
    (actions) => [actions.setAppearanceMode],
    async (_, __, { getState, dispatch }) => {
      const state = getState();

      // Call any side effects
      if (state.appearanceMode !== 'device') {
        dispatch.theme.setAppearanceMode(state.appearanceMode);
      }

      // Save updated settings
      const updatedSettings: AppSettings = {
        appearanceMode: state.appearanceMode,
      };
      // TODO: needs to be debounced
      await saveSettings(updatedSettings);
    }
  ),
};

async function saveSettings(settings: AppSettings) {
  SafeAsyncStorage.setObject(settingsKey, settings);
}
