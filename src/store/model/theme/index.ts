import { Theme as NavTheme } from '@react-navigation/native';
import { Action, action, Computed, computed } from 'easy-peasy';
import * as NavigationBar from 'expo-navigation-bar';
import memoizerific from 'memoizerific';
import { Platform, StatusBar } from 'react-native';

import {
  navThemeDark,
  navThemeLight,
  Theme,
  themeDark,
  themeLight,
} from '../../../theme';
import type { ThemeAppearanceMode } from '../../../types';
import { getDefaultAppearanceMode } from '../../../utils';

export interface ThemeModel {
  theme: Theme;
  navTheme: NavTheme;
  appearanceMode: ThemeAppearanceMode;
  setAppearanceMode: Action<ThemeModel, ThemeAppearanceMode>;
  isAppearanceModeSelected: Computed<
    ThemeModel,
    (appearanceMode: ThemeAppearanceMode) => boolean
  >;
}

const defaultAppearanceMode = getDefaultAppearanceMode();
const defaultTheme = defaultAppearanceMode === 'dark' ? themeDark : themeLight;
const defaultNavTheme =
  defaultAppearanceMode === 'dark' ? navThemeDark : navThemeLight;

export const themeModel: ThemeModel = {
  theme: defaultTheme,
  navTheme: defaultNavTheme,
  appearanceMode: getDefaultAppearanceMode(),
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
  isAppearanceModeSelected: computed((state) =>
    memoizerific(2)((appearanceMode) => state.appearanceMode === appearanceMode)
  ),
};
