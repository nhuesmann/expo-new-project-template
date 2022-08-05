import { FC } from 'react';
import styled from 'styled-components/native';

// TODO: prob delete me??

export const ScreenContainer: FC = ({ children }) => (
  <Container>{children}</Container>
);

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: ${({ theme }) => theme.sizes.spacing.marginStandard}px;
  background-color: ${({ theme }) => theme.colors.background};
`;
