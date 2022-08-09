import 'easy-peasy/map-set-support';

import { NavigationContainer } from '@react-navigation/native';
import { StoreProvider } from 'easy-peasy';
import * as Font from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect, useRef, useState } from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { ThemeProvider } from 'styled-components/native';

import { configureReactNative, configureStatusBar, fontMap } from './config';
import { AppStackNavigator } from './navigation';
import { store, useStoreState } from './store';

SplashScreen.preventAutoHideAsync();

configureReactNative();

// TODO: enable this after adding status bar fade in after animation
// configureStatusBar();

// TODO: set up sentry, enable dev tools, init segment, set up notifications

/*
 * Main App Component. Wraps all context providers.
 */
export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SafeAreaProvider>
        <StoreProvider store={store}>
          <AppInitializer />
        </StoreProvider>
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
}

/*
 * React Component. Handles all async initialization and theming
 */
function AppInitializer() {
  const [isAppInitialized, setIsAppInitialized] = useState(false);

  const theme = useStoreState((state) => state.theme.theme);
  const navTheme = useStoreState((state) => state.theme.navTheme);

  const previousRouteRef = useRef<any>();
  const navigationRef = useRef<any>();

  useEffect(() => {
    if (!isAppInitialized) {
      initializeApp();
    }
  }, []);

  // Main initializer function
  async function initializeApp() {
    // Cache fonts, load saved settings, (check auth, clean cache, etc)
    const fontPromise = Font.loadAsync(fontMap);
    // TODO: load settings
    // const userSettingsPromise = store.dispatch.settings.initialize();

    await Promise.all([fontPromise]);

    setIsAppInitialized(true);
  }

  /*
  TODO: add this here? needs to live in a component somewhere
  Subscribe to theme color changes
  const colorScheme = RN.useColorScheme();
  useEffect(() => {
    if (settings.theme === 'device' && !!colorScheme && !isAppearanceModeSelected(colorScheme)) {
      change it
    }

    ! need to ensure this only happens after app settings have been loaded... maybe in an app init?
    Could have a store variable "isAppInitialized" that this checks for
  }, [colorScheme])
  */

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

  /*
   * RENDER
   */
  // If not initialized, return null so Expo SplashScreen stays enabled
  if (!isAppInitialized) {
    return null;
  }

  // TODO: add error boundary here!

  // TODO: REMOVE THIS LINE - add to layout of nested landing screen
  SplashScreen.hideAsync();

  // ? Note: can render diff navigators depending on auth status (inside NavigationContainer)
  return (
    <ThemeProvider theme={theme}>
      <NavigationContainer
        theme={navTheme}
        // linking={linking}
        ref={navigationRef}
        onReady={onReady}
        onStateChange={onStateChange}
      >
        <AppStackNavigator />
      </NavigationContainer>
    </ThemeProvider>
  );
}
