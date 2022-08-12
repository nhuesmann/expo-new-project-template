import styled from 'styled-components/native';

interface Props {
  centerContent?: boolean;
}

export const FlexFill = styled.View<Props>`
  flex: 1;
  overflow: hidden; /* NOTE: added so ListCollapsibleHeader wouldn't overflow the container and render above Header */
  ${({ centerContent }) =>
    centerContent &&
    `
    justify-content: center;
    align-items: center;
  `}
`;
