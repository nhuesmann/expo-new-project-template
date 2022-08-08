import { FontName, fontSizeMap, FontStyle } from '../config/fonts';
import { scale } from './responsiveDesign';

export const getScaledFontValues = (font: FontName) => {
  const baseSizes: FontStyle = fontSizeMap[font];

  return {
    fontSize: scale(baseSizes.fontSize),
    lineHeight: baseSizes.lineHeight ? scale(baseSizes.lineHeight) : undefined,
    letterSpacing: baseSizes.letterSpacing
      ? scale(baseSizes.letterSpacing)
      : undefined,
  };
};
