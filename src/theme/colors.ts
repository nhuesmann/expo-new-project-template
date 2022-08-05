const APP_COLORS = {
  transparent: '#FFFFFF00',
  hero: '#15E885',
  graySlate: '#131313',
  grayExtraDark: '#2F2F2F',
  grayDark: '#5A5A5A',
  grayMedium: '#828282',
  grayLight: '#B8B8B8',
  grayExtraLight: '#F1F1F1',
  white: '#FFFFFF',
};

export interface ThemeColors {
  hero: string;
  background: string;
  tileBackground: string;
  textStandard: string;
  textAlt: string;
  symbol: string;
}

export const themeColorsDark: ThemeColors = {
  hero: APP_COLORS.hero,
  background: APP_COLORS.graySlate,
  tileBackground: APP_COLORS.grayExtraDark,
  textStandard: APP_COLORS.white,
  textAlt: APP_COLORS.grayLight,
  symbol: APP_COLORS.grayDark,
};

export const themeColorsLight: ThemeColors = {
  hero: APP_COLORS.hero,
  background: APP_COLORS.white,
  tileBackground: APP_COLORS.grayExtraLight,
  textStandard: APP_COLORS.graySlate,
  textAlt: APP_COLORS.grayMedium,
  symbol: APP_COLORS.grayLight,
};
