import { FC } from 'react';
import styled from 'styled-components/native';

import {
  CenteringContainer,
  Divider,
  FlexFill,
  SafeScreenContainer,
  SectionHeading,
  SmallButton,
  StandardButton,
} from '../../../components';
import type { SettingsNavigatorScreenProps } from '../../../navigation';
import { baseTheme } from '../../../theme';
import { ThemeOption } from './ThemeOption';

export const SettingsLandingScreen: FC<
  SettingsNavigatorScreenProps<'SettingsLanding'>
> = ({ navigation }) => (
  <SafeScreenContainer sentry-label="SettingsLanding Screen">
    <FlexFill centerContent={true}>
      <OptionsContainer>
        <SectionHeading text="Theme" />
        <Divider line={true} />
        <ThemeOption appearanceMode="device" label="Device Setting" />
        <Divider line={true} />
        <ThemeOption appearanceMode="dark" label="Dark" />
        <Divider line={true} />
        <ThemeOption appearanceMode="light" label="Light" />
        <Divider line={true} />
      </OptionsContainer>
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

const OptionsContainer = styled.View`
  width: 100%;
`;
