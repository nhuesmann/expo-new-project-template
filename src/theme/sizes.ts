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
  },
  icon: {
    sizeSplash: scale(64),
    sizeLarge: scale(26),
    sizeMedium: scale(24),
    sizeSmall: scale(16),
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
