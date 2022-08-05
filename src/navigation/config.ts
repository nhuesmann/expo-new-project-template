import { TransitionPresets } from '@react-navigation/stack';
import { Platform } from 'react-native';

import { baseTheme } from '../theme';
import { scale } from '../utils';
import { HeaderLeftBackArrow, HeaderLeftX } from './components';

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

// TODO: how do I get the shadow under the left part of screen during transition???

type HeaderTitleAlign = 'center' | 'left' | undefined;
const baseHeaderOptions = {
  // header: Header,
  headerStyle: baseHeaderStyle,
  headerTitleStyle: baseHeaderTitleStyle,
  headerBackTitleVisible: false,
  headerTitleAlign: 'center' as HeaderTitleAlign,
};

export const screenOptionsHeaderStandard = {
  ...baseHeaderOptions,
  headerLeft: HeaderLeftBackArrow,
};

// TODO: do i need this?
export const screenOptionsHeaderXButton = {
  ...baseHeaderOptions,
  headerLeft: HeaderLeftX,
};
