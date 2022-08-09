import 'easy-peasy/map-set-support';

import { NavigationContainer } from '@react-navigation/native';
import { StoreProvider } from 'easy-peasy';
import * as Font from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect, useState } from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { ThemeProvider } from 'styled-components/native';

import { configureReactNative, fontMap } from './config';
import { AppStackNavigator } from './navigation';
import { store, useStoreState } from './store';

// Override RN defaults
configureReactNative();

// TODO: set up sentry, enable dev tools, init segment, set up notifications

export default function App() {
  // Fix Splash Screen bug
  useEffect(() => {
    SplashScreen.preventAutoHideAsync();
  }, []);

  // TODO: move this into separate component!
  const [isInitialized, setIsInitialized] = useState(false);
  useEffect(() => {
    async function loadFonts() {
      await Font.loadAsync(fontMap);
      setIsInitialized(true);
      await SplashScreen.hideAsync();
    }

    loadFonts();
  }, []);

  return !isInitialized ? null : (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SafeAreaProvider>
        <StoreProvider store={store}>
          <NavigationWithTheme />
        </StoreProvider>
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
}

const NavigationWithTheme = () => {
  // TODO: should this be here? needs to live in a component somewhere
  // Subscribe to theme color changes
  // const colorScheme = RN.useColorScheme();
  // useEffect(() => {
  //   /*
  //     if (settings.theme === 'device' && !!colorScheme && !isAppearanceModeSelected(colorScheme)) {
  //       change it
  //     }

  //     ! need to ensure this only happens after app settings have been loaded... maybe in an app init?
  // Could have a store variable "isInitialized" that this checks for
  //   */
  // }, [colorScheme])

  const theme = useStoreState((state) => state.theme.theme);
  const navTheme = useStoreState((state) => state.theme.navTheme);

  return (
    <ThemeProvider theme={theme}>
      <NavigationContainer theme={navTheme}>
        <AppStackNavigator />
      </NavigationContainer>
    </ThemeProvider>
  );
};
