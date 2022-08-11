import { useNavigation } from '@react-navigation/native';
import { useEffect } from 'react';

import type { AppNavigatorNavProp } from '../../navigation';
import { useStoreState } from '../../store';

type NavProp = AppNavigatorNavProp<'AppLoading'>;

export const NavigationTrigger = () => {
  const navigation = useNavigation<NavProp>();

  const canNavigateToHomeScreen = useStoreState(
    (state) => state.appLoading.canNavigateToHomeScreen
  );

  useEffect(() => {
    if (canNavigateToHomeScreen) {
      navigation.reset({
        index: 0,
        routes: [{ name: 'Home' }],
      });
    }
  }, [canNavigateToHomeScreen]);

  return null;
};
