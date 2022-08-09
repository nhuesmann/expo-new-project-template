import { FC } from 'react';
import styled, { useTheme } from 'styled-components/native';

import {
  Divider,
  HeadingSmallText,
  SmallButton,
  StandardButton,
} from '../../components';
import type { AppNavigatorScreenNavProps } from '../../navigation';
import { useStoreActions, useStoreState } from '../../store';

export const HomeScreen: FC<AppNavigatorScreenNavProps<'Home'>> = ({
  navigation,
}) => {
  const theme = useTheme();

  const appearanceMode = useStoreState((state) => state.theme.appearanceMode);
  const setAppearanceMode = useStoreActions(
    (actions) => actions.theme.setAppearanceMode
  );

  const nextAppearanceMode = appearanceMode === 'dark' ? 'light' : 'dark';

  function toggleAppearanceMode() {
    setAppearanceMode(nextAppearanceMode);
  }

  return (
    <Container>
      <HeadingSmallText>Home Screen</HeadingSmallText>
      <Divider px={theme.sizes.spacing.large} />
      <StandardButton
        text="Go to Profile"
        onPress={() => navigation.navigate('Profile')}
      />
      <Divider px={theme.sizes.spacing.medium} />
      <StandardButton
        text="Go To Settings"
        onPress={() =>
          navigation.navigate('Settings', {
            screen: 'SettingsLanding',
          })
        }
      />
      <Divider px={theme.sizes.spacing.medium} />
      <SmallButton
        text="Show Modal"
        hasCaret={false}
        onPress={() => navigation.navigate('Modal')}
      />
      <Divider px={theme.sizes.spacing.medium} />
      <SmallButton
        text={`Switch to ${nextAppearanceMode} mode`}
        hasCaret={false}
        onPress={toggleAppearanceMode}
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
