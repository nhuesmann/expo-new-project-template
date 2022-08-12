import { FC } from 'react';
import { TouchableOpacity, TouchableOpacityProps } from 'react-native';
import styled, { useTheme } from 'styled-components/native';

import { IcoMoon, IcoMoonIconName } from '../../config';
import { BodyMediumText } from '../font';
import { ButtonShrinkContainer } from './_shared';

interface ContainerProps {
  fullWidth?: boolean;
}
export interface StandardButtonProps
  extends TouchableOpacityProps,
    ContainerProps {
  text: string;
  iconName?: IcoMoonIconName;
}

export const StandardButton: FC<StandardButtonProps> = ({
  text,
  iconName,
  fullWidth,
  ...touchableProps
}) => {
  const theme = useTheme();

  return (
    <ButtonShrinkContainer>
      <Button {...touchableProps} fullWidth={fullWidth}>
        <BodyMediumText textAlign="center">{text}</BodyMediumText>
        {iconName ? (
          <IcoMoon name={iconName} size={theme.sizes.icon.sizeMedium} />
        ) : null}
      </Button>
    </ButtonShrinkContainer>
  );
};

const Button = styled(TouchableOpacity)<ContainerProps>`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: ${({ theme }) => theme.sizes.button.heightStandard}px;
  width: ${({ theme, fullWidth }) =>
    fullWidth ? '100%' : `${theme.sizes.button.widthFixed}px`};
  border-radius: ${({ theme }) => theme.sizes.borderRadius.sizeStandard}px;
  padding: 0px ${({ theme }) => theme.sizes.button.paddingStandard}px;
  background-color: ${({ theme }) => theme.colors.tileBackground};
`;
