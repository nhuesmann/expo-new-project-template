import { ThemeColors, themeColorsDark, themeColorsLight } from './colors';
import { Sizes, sizes } from './sizes';

export { navThemeDark, navThemeLight } from './colors';

interface Font {
  fontSize: number;
  lineHeight: number;
}

interface Fonts {
  title1: Font;
  title2: Font;
  body: Font;
}

interface BaseTheme {
  sizes: Sizes;
  fonts: Fonts;
}

export const baseTheme: BaseTheme = {
  sizes,
  fonts: {
    title1: {
      fontSize: 16,
      lineHeight: 24,
    },
    title2: {
      fontSize: 18,
      lineHeight: 27,
    },
    body: {
      fontSize: 12,
      lineHeight: 18,
    },
  },
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
