import { Platform, StatusBar } from 'react-native';

export function configureStatusBar() {
  // Fix Android StatusBar appearing and pushing content down
  if (Platform.OS === 'android') {
    StatusBar.setTranslucent(true);
    StatusBar.setBackgroundColor('transparent');
  }
}
