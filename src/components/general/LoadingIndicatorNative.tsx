import { FC } from 'react';
import { ActivityIndicator } from 'react-native';
import styled, { useTheme } from 'styled-components/native';

interface Props {
  size?: number | 'small' | 'large';
  color?: string;
  includePadding?: boolean;
}

export const LoadingIndicatorNative: FC<Props> = ({
  size = 'large',
  color,
  includePadding = true,
}) => {
  const theme = useTheme();

  const indicatorColor = color || theme.colors.hero;

  return (
    <Container includePadding={includePadding}>
      <ActivityIndicator size={size} color={indicatorColor} />
    </Container>
  );
};

const Container = styled.View<Props>`
  justify-content: center;
  align-items: center;
  padding: ${({ theme, includePadding }) =>
    includePadding ? theme.sizes.spacing.marginStandard : 0}px;
`;
