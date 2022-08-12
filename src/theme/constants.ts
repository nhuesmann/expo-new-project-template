import Constants from 'expo-constants';
import { PixelRatio, Platform } from 'react-native';

export const statusBarHeight = Constants.statusBarHeight;
export const isIPhoneWithNotch =
  Platform.OS === 'ios' && (statusBarHeight === 44 || statusBarHeight === 47);
export const pixelRatio = PixelRatio.get();
export const BASE_PIXEL_VALUE = 8;
