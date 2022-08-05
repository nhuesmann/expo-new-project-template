import { NavigationContainer } from '@react-navigation/native';
import * as Font from 'expo-font';
import { useEffect, useState } from 'react';
import * as RN from 'react-native';
import * as RNGH from 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { ThemeProvider } from 'styled-components/native';

import { fontMap } from './config';
import { AppStackNavigator } from './navigation';
import { navThemeDark, navThemeLight, themeDark, themeLight } from './theme';

const {
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  SectionList,
  ScrollView,
}: any = RN;
const { TouchableOpacity: RNGHTouchableOpacity }: any = RNGH;

export default function App() {
  // TODO: move this into separate component!
  const [isInitialized, setIsInitialized] = useState(false);
  useEffect(() => {
    async function loadFonts() {
      await Font.loadAsync(fontMap);
      setIsInitialized(true);
    }

    loadFonts();
  }, []);

  // TODO: splash screen fix, status bar adjustments

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
        <ThemeProvider theme={themeLight}>
          <NavigationContainer theme={navThemeLight}>
            <AppStackNavigator />
          </NavigationContainer>
        </ThemeProvider>
      </SafeAreaProvider>
    </RNGH.GestureHandlerRootView>
  );
}
