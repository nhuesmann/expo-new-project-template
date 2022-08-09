import { FC } from 'react';
import { TouchableOpacity, TouchableOpacityProps } from 'react-native';
import styled, { useTheme } from 'styled-components/native';

import { IcoMoon } from '../../config';
import { BodyMediumText } from '../font';

export interface StandardButtonProps extends TouchableOpacityProps {
  text: string;
  iconName?: string;
}

export const StandardButton: FC<StandardButtonProps> = ({
  text,
  iconName,
  ...touchableProps
}) => {
  const theme = useTheme();

  return (
    <ButtonContainer {...touchableProps}>
      <BodyMediumText>{text}</BodyMediumText>
      {iconName ? (
        <IcoMoon name={iconName} size={theme.sizes.icon.sizeMedium} />
      ) : null}
    </ButtonContainer>
  );
};

const ButtonContainer = styled(TouchableOpacity)`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: ${({ theme }) => theme.sizes.button.heightStandard}px;
  border-radius: ${({ theme }) => theme.sizes.borderRadius.sizeStandard}px;
  padding: 0px ${({ theme }) => theme.sizes.button.paddingStandard}px;
  background-color: ${({ theme }) => theme.colors.tileBackground};
`;
