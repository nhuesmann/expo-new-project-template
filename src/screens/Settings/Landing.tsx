import { FC } from 'react';

import {
  CenteringContainer,
  Divider,
  FlexFill,
  SafeScreenContainer,
  SectionHeading,
  SmallButton,
  StandardButton,
} from '../../components';
import type { SettingsNavigatorScreenNavProps } from '../../navigation';
import { baseTheme } from '../../theme';

export const SettingsLandingScreen: FC<
  SettingsNavigatorScreenNavProps<'SettingsLanding'>
> = ({ navigation }) => (
  <SafeScreenContainer>
    <FlexFill centerContent={true}>
      <SectionHeading text="Theme" />
      <SmallButton text="Device Setting" />
      <SmallButton text="Dark" />
      <SmallButton text="Light" />
    </FlexFill>
    <CenteringContainer>
      <StandardButton
        text="Nested Screen"
        onPress={() => navigation.navigate('SettingsNestedSetting')}
      />
      <Divider px={baseTheme.sizes.spacing.medium} />
      <SmallButton
        text="Dismiss"
        hasCaret={false}
        onPress={navigation.goBack}
      />
    </CenteringContainer>
  </SafeScreenContainer>
);
