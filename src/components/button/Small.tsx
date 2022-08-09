import { FC } from 'react';
import { TouchableOpacity, TouchableOpacityProps } from 'react-native';
import styled, { useTheme } from 'styled-components/native';

import { IcoMoon } from '../../config';
import { BodySmallBoldText } from '../font';

export interface SmallButtonProps extends TouchableOpacityProps {
  text: string;
  iconName?: string;
  hasCaret?: boolean;
}

export const SmallButton: FC<SmallButtonProps> = ({
  text,
  iconName,
  hasCaret = true,
  ...touchableProps
}) => {
  const theme = useTheme();

  return (
    <ButtonContainer {...touchableProps}>
      {iconName ? (
        <IcoMoon name={iconName} size={theme.sizes.icon.sizeMedium} />
      ) : null}
      <BodySmallBoldText>{text}</BodySmallBoldText>
      {hasCaret ? (
        <IcoMoon
          name="caret-left"
          size={theme.sizes.icon.sizeMedium}
          style={{ transform: [{ rotate: '-90deg' }] }}
        />
      ) : null}
    </ButtonContainer>
  );
};

const ButtonContainer = styled(TouchableOpacity)`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: ${({ theme }) => theme.sizes.button.heightSmall}px;
  border-radius: ${({ theme }) => theme.sizes.borderRadius.sizeStandard}px;
  padding: 0px ${({ theme }) => theme.sizes.button.paddingSmall}px;
  background-color: ${({ theme }) => theme.colors.tileBackground};
`;
