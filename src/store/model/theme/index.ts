import { Theme as NavTheme } from '@react-navigation/native';
import { Action, action } from 'easy-peasy';
import * as NavigationBar from 'expo-navigation-bar';
import { Platform, StatusBar } from 'react-native';

import {
  navThemeDark,
  navThemeLight,
  Theme,
  themeDark,
  themeLight,
} from '../../../theme';
import type { ThemeAppearanceMode } from '../../../types';
import { getDeviceAppearanceMode } from '../../../utils';

export interface ThemeModel {
  theme: Theme;
  navTheme: NavTheme;
  appearanceMode: ThemeAppearanceMode;
  setAppearanceMode: Action<ThemeModel, ThemeAppearanceMode>;
}

const defaultAppearanceMode = getDeviceAppearanceMode();
const defaultTheme = defaultAppearanceMode === 'dark' ? themeDark : themeLight;
const defaultNavTheme =
  defaultAppearanceMode === 'dark' ? navThemeDark : navThemeLight;

export const themeModel: ThemeModel = {
  theme: defaultTheme,
  navTheme: defaultNavTheme,
  appearanceMode: getDeviceAppearanceMode(),
  setAppearanceMode: action((state, appearanceMode) => {
    const theme = appearanceMode === 'dark' ? themeDark : themeLight;
    const navTheme = appearanceMode === 'dark' ? navThemeDark : navThemeLight;

    state.appearanceMode = appearanceMode;
    state.theme = theme;
    state.navTheme = navTheme;

    // Style status bar
    if (appearanceMode === 'light') {
      StatusBar.setBarStyle('dark-content', true);
    } else {
      StatusBar.setBarStyle('light-content', true);
    }

    // Style Android nav bar
    if (Platform.OS === 'android') {
      NavigationBar.setBackgroundColorAsync(theme.colors.background);
      NavigationBar.setButtonStyleAsync(
        appearanceMode === 'dark' ? 'light' : 'dark'
      );
    }
  }),
};
