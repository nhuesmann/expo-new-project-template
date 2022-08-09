import { Appearance } from 'react-native';

export const getDefaultAppearanceMode = () =>
  Appearance.getColorScheme() || 'dark';

export const getPreferredAppearanceMode = () => {
  const preferredAppearanceMode = Appearance.getColorScheme();
  if (!preferredAppearanceMode) {
    return 'device';
  }
  return preferredAppearanceMode;
};
