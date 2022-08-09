import { Platform, StatusBar } from 'react-native';

export function configureStatusBar() {
  // Hide status bar initially and make it light for splash screen
  if (Platform.OS === 'ios') {
    StatusBar.setHidden(true);
    StatusBar.setBarStyle('light-content');
  }

  // Fix Android StatusBar appearing and pushing content down
  if (Platform.OS === 'android') {
    StatusBar.setTranslucent(true);
    StatusBar.setBackgroundColor('transparent');
  }
}
