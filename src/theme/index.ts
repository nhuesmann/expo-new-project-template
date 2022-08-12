import { ThemeColors, themeColorsDark, themeColorsLight } from './colors';
import { Sizes, sizes } from './sizes';

export { navThemeDark, navThemeLight } from './colors';

interface BaseTheme {
  sizes: Sizes;
}

export const baseTheme: BaseTheme = {
  sizes,
};

export interface Theme extends BaseTheme {
  colors: ThemeColors;
}

export const themeDark: Theme = {
  colors: themeColorsDark,
  ...baseTheme,
};

export const themeLight: Theme = {
  colors: themeColorsLight,
  ...baseTheme,
};
