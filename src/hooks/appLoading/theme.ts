import { useEffect } from 'react';
import { useColorScheme } from 'react-native';

import { store } from '../../store';

// Listens for device appearance changes and changes theme automatically
export const useResponsiveAppTheme = () => {
  const colorScheme = useColorScheme();

  useEffect(() => {
    if (!colorScheme) {
      return;
    }

    const appearanceModeSetting = store.getState().settings.appearanceMode;
    const activeAppearanceMode = store.getState().theme.appearanceMode;

    if (
      appearanceModeSetting === 'device' &&
      colorScheme !== activeAppearanceMode
    ) {
      store.dispatch.theme.setAppearanceMode(colorScheme);
    }
  }, [colorScheme]);
};
