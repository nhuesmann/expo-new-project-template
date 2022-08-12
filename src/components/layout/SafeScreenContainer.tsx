import React, { FC } from 'react';
import styled from 'styled-components/native';

import { useSafeAreaPaddingBottom } from '../../hooks';
import { baseTheme } from '../../theme';
import { ReactChildren } from '../../types';

export const SafeScreenContainer: FC<ReactChildren> = ({ children }) => {
  const padding = baseTheme.sizes.spacing.marginStandard;
  const paddingBottom = useSafeAreaPaddingBottom();

  return <Container style={{ padding, paddingBottom }}>{children}</Container>;
};

const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background};
`;
