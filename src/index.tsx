import 'easy-peasy/map-set-support';

import { NavigationContainer } from '@react-navigation/native';
import { StoreProvider } from 'easy-peasy';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { ThemeProvider } from 'styled-components/native';

import { configureReactNative, configureStatusBar } from './config';
import { useResponsiveAppTheme, useScreenTracking } from './hooks';
import { RootNavigator } from './navigation';
import { store, useStoreActions, useStoreState } from './store';

SplashScreen.preventAutoHideAsync();

configureReactNative();

configureStatusBar();

// TODO: set up sentry, enable dev tools, init segment, set up notifications

/*
 * Main App Component. Wraps all context providers.
 */
export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SafeAreaProvider>
        {/* @ts-ignore TODO: figure out why React 18 doesn't like this */}
        <StoreProvider store={store}>
          <AppInitializer />
        </StoreProvider>
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
}

/*
 * React Component. Handles theming + loading that occurs while SplashScreen is active.
 */
function AppInitializer() {
  const theme = useStoreState((state) => state.theme.theme);
  const navTheme = useStoreState((state) => state.theme.navTheme);
  const isSplashLoadingComplete = useStoreState(
    (state) => state.appLoading.isSplashLoadingComplete
  );
  const loadLocalData = useStoreActions(
    (actions) => actions.appLoading.loadLocalData
  );

  // Custom hooks
  useResponsiveAppTheme();
  const { navigationRef, onReady, onStateChange } = useScreenTracking();

  // Initialize on mount
  useEffect(() => {
    if (!isSplashLoadingComplete) {
      loadLocalData();
    }
  }, []);

  // If not initialized, return null so Expo SplashScreen stays enabled
  if (!isSplashLoadingComplete) {
    return null;
  }

  // TODO: add error boundary here!

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
        <RootNavigator />
      </NavigationContainer>
    </ThemeProvider>
  );
}
