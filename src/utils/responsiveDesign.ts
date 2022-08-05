import { Dimensions, PixelRatio } from 'react-native';

import { roundNumber } from './math';

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;
const deviceWidth = wp('100%');

const DESIGN_DEVICE_WIDTH = 375; // This is the width of the iPhone X, which is what all designs are based off
export const DESIGN_DEVICE_WIDTH_RATIO = deviceWidth / DESIGN_DEVICE_WIDTH;

export function wp(widthPercent: string) {
  const elementWidth =
    typeof widthPercent === 'number' ? widthPercent : parseFloat(widthPercent);

  return PixelRatio.roundToNearestPixel((screenWidth * elementWidth) / 100);
}

export function hp(heightPercent: string) {
  const elementHeight =
    typeof heightPercent === 'number'
      ? heightPercent
      : parseFloat(heightPercent);

  return PixelRatio.roundToNearestPixel((screenHeight * elementHeight) / 100);
}

export function scale(num: number) {
  return roundNumber(num * DESIGN_DEVICE_WIDTH_RATIO, 1);
}
