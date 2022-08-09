import { FC } from 'react';
import styled, { useTheme } from 'styled-components/native';

import {
  Divider,
  HeadingSmallText,
  SmallButton,
  StandardButton,
} from '../../components';
import type { SettingsNavigatorScreenNavProps } from '../../navigation';

export const SettingsLandingScreen: FC<
  SettingsNavigatorScreenNavProps<'SettingsLanding'>
> = ({ navigation }) => {
  const theme = useTheme();

  return (
    <Container>
      <HeadingSmallText>Settings Landing Screen</HeadingSmallText>
      <Divider px={theme.sizes.spacing.large} />
      <StandardButton
        text="Go To Nested Screen"
        onPress={() => navigation.navigate('SettingsNestedSetting')}
      />
      <Divider px={theme.sizes.spacing.medium} />
      <SmallButton
        text="Dismiss"
        hasCaret={false}
        onPress={navigation.goBack}
      />
    </Container>
  );
};

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: ${({ theme }) => theme.sizes.spacing.marginStandard}px;
  background-color: ${({ theme }) => theme.colors.background};
`;
