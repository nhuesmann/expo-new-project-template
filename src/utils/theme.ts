import { Appearance } from 'react-native';

export const getDeviceAppearanceMode = () =>
  Appearance.getColorScheme() || 'dark';
