export const fontMap = {
  // Icons
  IcoMoon: require('../assets/fonts/icomoon.ttf'),
  // App font
  // ? Note: you can usually just replace font name with new font and all styles should apply
  'rubik-black': require('../assets/fonts/Rubik-Black.ttf'),
  'rubik-black-italic': require('../assets/fonts/Rubik-BlackItalic.ttf'),
  'rubik-bold': require('../assets/fonts/Rubik-Bold.ttf'),
  'rubik-bold-italic': require('../assets/fonts/Rubik-BoldItalic.ttf'),
  'rubik-extra-bold': require('../assets/fonts/Rubik-ExtraBold.ttf'),
  'rubik-extra-bold-italic': require('../assets/fonts/Rubik-ExtraBoldItalic.ttf'),
  'rubik-italic': require('../assets/fonts/Rubik-Italic.ttf'),
  'rubik-light': require('../assets/fonts/Rubik-Light.ttf'),
  'rubik-light-italic': require('../assets/fonts/Rubik-LightItalic.ttf'),
  'rubik-medium': require('../assets/fonts/Rubik-Medium.ttf'),
  'rubik-medium-italic': require('../assets/fonts/Rubik-MediumItalic.ttf'),
  'rubik-regular': require('../assets/fonts/Rubik-Regular.ttf'),
  'rubik-semi-bold': require('../assets/fonts/Rubik-SemiBold.ttf'),
  'rubik-semi-bold-italic': require('../assets/fonts/Rubik-SemiBoldItalic.ttf'),
};

export const fontSizeMap = {
  headingLarge: {
    fontSize: 40,
  },
  headingSmall: {
    fontSize: 18,
  },
  bodyMedium: {
    fontSize: 16,
  },
  bodySmall: {
    fontSize: 14,
    lineHeight: 16,
  },
  eyebrow: {
    fontSize: 12,
    lineHeight: 18,
    letterSpacingPercent: 13,
  },
  micro: {
    fontSize: 12,
    lineHeight: 10,
    letterSpacingPercent: 2,
  },
};
export type FontName = keyof typeof fontSizeMap;
export interface FontStyle {
  fontSize: number;
  lineHeight?: number;
  letterSpacing?: number;
}
