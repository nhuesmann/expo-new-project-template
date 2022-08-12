import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { baseTheme } from '../theme';

export const useSafeAreaPaddingBottom = () => {
  const bottomInset = useSafeAreaInsets().bottom;
  return Math.max(baseTheme.sizes.spacing.marginStandard, bottomInset);
};
