import { FC } from 'react';
import styled, { useTheme } from 'styled-components/native';

import { Divider, HeadingSmallText, SmallButton } from '../../components';
import type { SettingsNavigatorScreenNavProps } from '../../navigation';

export const SettingsNestedSettingScreen: FC<
  SettingsNavigatorScreenNavProps<'SettingsNestedSetting'>
> = ({ navigation }) => {
  const theme = useTheme();

  return (
    <Container>
      <HeadingSmallText>Settings Nested Setting Screen</HeadingSmallText>
      <Divider px={theme.sizes.spacing.large} />
      <SmallButton
        text="Go Back"
        hasCaret={false}
        onPress={navigation.goBack}
      />
      <Divider px={theme.sizes.spacing.medium} />
      <SmallButton
        text="Go Home"
        hasCaret={false}
        onPress={() => {
          navigation.popToTop();
          navigation.goBack();
        }}
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
