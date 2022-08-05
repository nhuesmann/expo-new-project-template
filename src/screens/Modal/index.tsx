import React, { FC } from 'react';
import styled, { useTheme } from 'styled-components/native';

import { HeadingSmallText, SmallButton, Spacing } from '../../components';
import type { AppNavigatorScreenNavProps } from '../../navigation';

export const ModalScreen: FC<AppNavigatorScreenNavProps<'Modal'>> = ({
  navigation,
}) => {
  const theme = useTheme();

  return (
    <Container>
      <HeadingSmallText>Modal Screen</HeadingSmallText>
      <Spacing px={theme.sizes.spacing.large} />
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
