import { FC } from 'react';
import styled from 'styled-components/native';

import { EyebrowText } from '../font';

interface Props {
  text: string;
}

export const SectionHeading: FC<Props> = ({ text }) => (
  <Container>
    <EyebrowText>{text}</EyebrowText>
  </Container>
);

const Container = styled.View`
  justify-content: center;
  padding: ${({ theme }) => theme.sizes.spacing.listItem}px 0px;
`;
