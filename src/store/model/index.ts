import { AppLoadingModel, appLoadingModel } from './appLoading';
import { SettingsModel, settingsModel } from './settings';
import { ThemeModel, themeModel } from './theme';

export interface StoreModel {
  appLoading: AppLoadingModel;
  settings: SettingsModel;
  theme: ThemeModel;
}

export const storeModel: StoreModel = {
  appLoading: appLoadingModel,
  settings: settingsModel,
  theme: themeModel,
};
