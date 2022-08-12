import { Platform } from 'react-native';

import { hp, scale, wp } from '../utils/responsiveDesign';
import { BASE_PIXEL_VALUE, pixelRatio, statusBarHeight } from './constants';

const androidNavBarOffset = Platform.OS === 'android' ? statusBarHeight : 0;

export const sizes = {
  borderRadius: {
    sizeStandard: scale(8),
    sizeSmall: scale(4),
    sizeMicro: scale(2),
  },
  button: {
    heightStandard: scale(56),
    heightSmall: scale(32),
    paddingStandard: scale(BASE_PIXEL_VALUE * 2),
    paddingSmall: scale(BASE_PIXEL_VALUE),
    // 100% width minus standard margin on each side minus the space between divided by 2
    widthFixed:
      (wp('100%') - BASE_PIXEL_VALUE * 3 * 2 - scale(BASE_PIXEL_VALUE)) / 2,
  },
  icon: {
    sizeSplash: 90, // ? Adjust this value to match the static SplashScreen
    sizeLarge: scale(26),
    sizeMedium: scale(24),
    sizeSmall: scale(16),
    sizeMicro: scale(8),
  },
  header: {
    height: scale(64),
    heightWithStatusBar: scale(64) + statusBarHeight,
    buttonHeight: scale(40),
    buttonPadding: 16,
    buttonMargin: 8,
  },
  device: {
    width: wp('100%'),
    height: hp('100%') + androidNavBarOffset,
    statusBarHeight,
    pixelRatio,
  },
  spacing: {
    // Standard values - scaled
    small: scale(BASE_PIXEL_VALUE),
    medium: scale(BASE_PIXEL_VALUE * 2),
    large: scale(BASE_PIXEL_VALUE * 3),
    // Specialty values - not scaled
    listItem: BASE_PIXEL_VALUE * 2,
    marginStandard: BASE_PIXEL_VALUE * 3,
  },
};

export type Sizes = {
  [key in keyof typeof sizes]: {
    [val in keyof typeof sizes[key]]: number;
  };
};
