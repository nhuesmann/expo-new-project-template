import React, { FC } from 'react';
import styled, { useTheme } from 'styled-components/native';

import {
  HeadingSmallText,
  SmallButton,
  Spacing,
  StandardButton,
} from '../../components';
import type { AppNavigatorScreenNavProps } from '../../navigation';

export const ProfileScreen: FC<AppNavigatorScreenNavProps<'Profile'>> = ({
  navigation,
}) => {
  const theme = useTheme();

  return (
    <Container>
      <HeadingSmallText>Profile Screen</HeadingSmallText>
      <Spacing px={theme.sizes.spacing.large} />
      <StandardButton
        text="Go Home"
        onPress={() => navigation.navigate('Home')}
      />
      <Spacing px={theme.sizes.spacing.medium} />
      <SmallButton
        text="Show Modal"
        hasCaret={false}
        onPress={() => navigation.navigate('Modal')}
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
