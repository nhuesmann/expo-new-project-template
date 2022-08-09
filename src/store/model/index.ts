import { SettingsModel, settingsModel } from './settings';
import { ThemeModel, themeModel } from './theme';

export interface StoreModel {
  settings: SettingsModel;
  theme: ThemeModel;
}

export const storeModel: StoreModel = {
  settings: settingsModel,
  theme: themeModel,
};
