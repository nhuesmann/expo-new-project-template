import { useEffect, useRef } from 'react';
import { useColorScheme } from 'react-native';

import { store } from './store';

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

export const useScreenTracking = () => {
  const previousRouteRef = useRef<any>();
  const navigationRef = useRef<any>();

  // Set up refs for screen tracking
  function onReady() {
    previousRouteRef.current = navigationRef.current.getCurrentRoute();
  }

  // Configure screen tracking
  function onStateChange() {
    const previousRoute = previousRouteRef.current;
    const currentRoute = navigationRef.current.getCurrentRoute();

    const { name: prevRouteName, params: prevRouteParams } = previousRoute;
    const { name: currRouteName, params: currRouteParams } = currentRoute;

    const prevRouteId = prevRouteParams?.id;
    const currRouteId = currRouteParams?.id;
    const currRouteTitle = currRouteParams?.title || currRouteParams?.name;

    if (prevRouteName !== currRouteName || prevRouteId !== currRouteId) {
      const includeOptions = !!currRouteId;
      const segmentOptions: any = includeOptions ? {} : undefined;
      const firebaseOptions: any = { screen_name: currRouteName };

      if (includeOptions) {
        // Add id/title if they are part of route params
        if (currRouteId) {
          segmentOptions.itemId = currRouteId;
          firebaseOptions.item_id = currRouteId;
        }
        if (currRouteTitle) {
          segmentOptions.itemTitle = currRouteTitle;
          firebaseOptions.item_title = currRouteTitle;
        }

        // Segment.screenWithProperties(currRouteName, segmentOptions);
      } else {
        // Segment.screen(currRouteName);
      }

      // Log the Firebase Analytics event, with screen_name and optional properties
      // Analytics.logEvent('screen_view', firebaseOptions);
    }

    // Save the current route to previous for later comparision
    previousRouteRef.current = currentRoute;
  }

  return {
    navigationRef,
    onReady,
    onStateChange,
  };
};
