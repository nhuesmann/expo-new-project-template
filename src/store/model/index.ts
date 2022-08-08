import { ThemeModel, themeModel } from './theme';

export interface StoreModel {
  theme: ThemeModel;
}

export const storeModel: StoreModel = {
  theme: themeModel,
};
