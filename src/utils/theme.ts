import { Appearance } from 'react-native';

export const getDefaultAppearanceMode = () =>
  Appearance.getColorScheme() || 'dark';
