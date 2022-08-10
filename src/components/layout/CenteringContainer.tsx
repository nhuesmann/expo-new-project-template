import styled from 'styled-components/native';

interface Props {
  horizontal?: boolean;
  vertical?: boolean;
}

export const CenteringContainer = styled.View<Props>`
  justify-content: ${({ vertical = true }) =>
    vertical ? 'center' : 'flex-start'};
  align-items: ${({ horizontal = true }) =>
    horizontal ? 'center' : 'flex-start'};
`;
