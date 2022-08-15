import { baseTheme } from '../theme';
import { scale } from '../utils';
import { HeaderLeftBackArrow } from './components';

const baseHeaderStyle = {
  height: baseTheme.sizes.header.heightWithStatusBar,
  borderBottomWidth: 0,
  shadowOpacity: 0,
  elevation: 0,
};

const baseHeaderTitleStyle = {
  fontFamily: 'rubik-medium',
  fontSize: scale(18),
};

// const cardShadowSettings = {
//   cardShadowEnabled: false, // Use this prop to have visible shadows during transitions. Defaults to true.
//   cardOverlayEnabled: true, // Use this prop to have a semi-transparent dark overlay visible under the card during transitions. Defaults to true on Android and false on iOS.
// }

type HeaderTitleAlign = 'center' | 'left' | undefined;
const baseOptions = {
  // header: Header,
  headerStyle: baseHeaderStyle,
  headerTitleStyle: baseHeaderTitleStyle,
  headerBackTitleVisible: false,
  headerTitleAlign: 'center' as HeaderTitleAlign,
};

export const screenOptionsStandard = {
  ...baseOptions,
  headerLeft: HeaderLeftBackArrow,
};

// export const screenOptionsXButtonHeader = {
//   ...baseOptions,
//   headerLeft: HeaderLeftX,
// };
