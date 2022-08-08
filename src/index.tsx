import 'easy-peasy/map-set-support';

import { NavigationContainer } from '@react-navigation/native';
import { StoreProvider } from 'easy-peasy';
import * as Font from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect, useState } from 'react';
import * as RN from 'react-native';
import * as RNGH from 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { ThemeProvider } from 'styled-components/native';

import { fontMap } from './config';
import { AppStackNavigator } from './navigation';
import { store, useStoreState } from './store';

// Destructure components needed from react-native & react-native-gesture-handler
const {
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  SectionList,
  ScrollView,
  StatusBar,
}: any = RN;
const { TouchableOpacity: RNGHTouchableOpacity }: any = RNGH;

// Configure LayoutAnimation on Android
if (RN.Platform.OS === 'android') {
  if (RN.UIManager.setLayoutAnimationEnabledExperimental) {
    RN.UIManager.setLayoutAnimationEnabledExperimental(true);
  }
}

// Hide status bar initially and make it light for splash screen
if (RN.Platform.OS === 'ios') {
  StatusBar.setHidden(true);
  StatusBar.setBarStyle('light-content');
}

// Fix Android StatusBar appearing and pushing content down
if (RN.Platform.OS === 'android') {
  StatusBar.setTranslucent(true);
  StatusBar.setBackgroundColor('transparent');
}

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
    }

    loadFonts();
  }, []);

  // Disable font scaling and padding
  Text.defaultProps = Text.defaultProps || {};
  Text.defaultProps.allowFontScaling = false;
  Text.defaultProps.includeFontPadding = false;
  Text.defaultProps.textAlignVertical = 'center';
  TextInput.defaultProps = TextInput.defaultProps || {};
  TextInput.defaultProps.allowFontScaling = false;
  // Override TouchableOpacity default activeOpacity
  TouchableOpacity.defaultProps = TouchableOpacity.defaultProps || {};
  TouchableOpacity.defaultProps.activeOpacity = 0.5;
  RNGHTouchableOpacity.defaultProps = RNGHTouchableOpacity.defaultProps || {};
  RNGHTouchableOpacity.defaultProps.activeOpacity = 0.5;
  // Override onEndReachedThreshold for lazy loading
  FlatList.defaultProps = FlatList.defaultProps || {};
  FlatList.defaultProps.onEndReachedThreshold = 0.1;
  FlatList.defaultProps.alwaysBounceVertical = false;
  SectionList.defaultProps = SectionList.defaultProps || {};
  SectionList.defaultProps.onEndReachedThreshold = 0.1;
  SectionList.defaultProps.stickySectionHeadersEnabled = true;
  ScrollView.defaultProps = ScrollView.defaultProps || {};
  ScrollView.defaultProps.onEndReachedThreshold = 0.1;
  ScrollView.defaultProps.alwaysBounceVertical = false;

  return !isInitialized ? null : (
    <RNGH.GestureHandlerRootView style={{ flex: 1 }}>
      <SafeAreaProvider>
        <StoreProvider store={store}>
          <NavigationWithTheme />
        </StoreProvider>
      </SafeAreaProvider>
    </RNGH.GestureHandlerRootView>
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
