import { FC } from 'react';

import {
  CenteringContainer,
  Divider,
  FlexFill,
  HeadingSmallText,
  SafeScreenContainer,
  SmallButton,
  StandardButton,
} from '../../components';
import type { AppNavigatorScreenNavProps } from '../../navigation';
import { baseTheme } from '../../theme';

export const HomeScreen: FC<AppNavigatorScreenNavProps<'Home'>> = ({
  navigation,
}) => (
  <SafeScreenContainer>
    <FlexFill centerContent={true}>
      <HeadingSmallText>This is the Home Screen</HeadingSmallText>
    </FlexFill>
    <CenteringContainer>
      <StandardButton
        text="Profile"
        onPress={() => navigation.navigate('Profile')}
      />
      <Divider px={baseTheme.sizes.spacing.medium} />
      <StandardButton
        text="Settings"
        onPress={() =>
          navigation.navigate('Settings', {
            screen: 'SettingsLanding',
          })
        }
      />
      <Divider px={baseTheme.sizes.spacing.medium} />
      <SmallButton
        text="Show Modal"
        hasCaret={false}
        onPress={() => navigation.navigate('Modal')}
      />
    </CenteringContainer>
  </SafeScreenContainer>
);
