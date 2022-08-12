import styled from 'styled-components/native';

export const HeaderLeftButtonContainer = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  margin-left: ${({ theme }) => theme.sizes.header.buttonMargin}px;
  padding: ${({ theme }) => theme.sizes.header.buttonPadding}px;
`;
