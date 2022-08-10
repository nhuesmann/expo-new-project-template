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

export const ProfileScreen: FC<AppNavigatorScreenNavProps<'Profile'>> = ({
  navigation,
}) => (
  <SafeScreenContainer>
    <FlexFill centerContent={true}>
      <HeadingSmallText>This is the Profile</HeadingSmallText>
    </FlexFill>
    <CenteringContainer>
      <StandardButton text="Home" onPress={() => navigation.navigate('Home')} />
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
