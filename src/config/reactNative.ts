import * as RN from 'react-native';
import * as RNGH from 'react-native-gesture-handler';

/*
 * Overrides a lot of default react-native and gesture-handler config
 */

export function configureReactNative() {
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
}
