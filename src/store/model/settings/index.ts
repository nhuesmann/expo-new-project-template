import {
  Action,
  action,
  Computed,
  computed,
  Thunk,
  thunk,
  ThunkOn,
  thunkOn,
} from 'easy-peasy';
import debounce from 'lodash/debounce';
import memoizerific from 'memoizerific';

import { ASYNC_STORAGE_KEYS, SafeAsyncStorage } from '../../../config';
import type { ThemeAppearanceModeSetting } from '../../../types';
import { getDeviceAppearanceMode } from '../../../utils';
import type { StoreModel } from '../index';

interface AppSettings {
  appearanceMode: ThemeAppearanceModeSetting;
}

const defaultAppearanceMode = 'device';
const defaultSettings: AppSettings = {
  appearanceMode: defaultAppearanceMode,
};
const settingsKey = ASYNC_STORAGE_KEYS.SETTINGS;

const saveSettingsDebounced = debounce(saveSettings, 500);

export interface SettingsModel {
  // Initialization
  initialize: Thunk<SettingsModel, void, StoreModel>;
  setInitialFields: Action<SettingsModel, AppSettings>;
  // Settings
  appearanceMode: ThemeAppearanceModeSetting;
  setAppearanceMode: Action<SettingsModel, ThemeAppearanceModeSetting>;
  isAppearanceModeSelected: Computed<
    SettingsModel,
    (appearanceMode: ThemeAppearanceModeSetting) => boolean
  >;
  // Thunk listeners
  onAppearanceModeChange: ThunkOn<SettingsModel, void, StoreModel>;
  onSettingsChangeAutosave: ThunkOn<SettingsModel, void, StoreModel>;
}

export const settingsModel: SettingsModel = {
  initialize: thunk(async (actions) => {
    const loadedSettings = await SafeAsyncStorage.getObject<AppSettings>(
      settingsKey
    );

    if (!loadedSettings) {
      await saveSettings(defaultSettings);
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
  isAppearanceModeSelected: computed((state) =>
    memoizerific(2)((appearanceMode) => state.appearanceMode === appearanceMode)
  ),
  onAppearanceModeChange: thunkOn(
    (actions) => [actions.setAppearanceMode, actions.setInitialFields],
    (_, __, { getState, dispatch }) => {
      const state = getState();

      if (state.appearanceMode === 'device') {
        dispatch.theme.setAppearanceMode(getDeviceAppearanceMode());
      } else {
        dispatch.theme.setAppearanceMode(state.appearanceMode);
      }
    }
  ),
  onSettingsChangeAutosave: thunkOn(
    (actions) => [actions.setAppearanceMode],
    (_, __, { getState }) => {
      // Save updated settings
      const state = getState();
      const updatedSettings: AppSettings = {
        appearanceMode: state.appearanceMode,
      };
      saveSettingsDebounced(updatedSettings);
    }
  ),
};

async function saveSettings(settings: AppSettings) {
  SafeAsyncStorage.setObject(settingsKey, settings);
}
