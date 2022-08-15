import React, { FC } from 'react';
import { TouchableOpacity, TouchableOpacityProps } from 'react-native';
import styled, { useTheme } from 'styled-components/native';

import { IcoMoon, IcoMoonIconName, icoMoonIconNames } from '../../config';
import { useSentryButtonLabel } from '../../hooks';
import { BodySmallBoldText } from '../font';
import { ButtonShrinkContainer } from './_shared';

export interface SmallButtonProps extends TouchableOpacityProps {
  text: string;
  iconName?: IcoMoonIconName;
  hasCaret?: boolean;
}

export const SmallButton: FC<SmallButtonProps> = ({
  text,
  iconName,
  hasCaret,
  ...touchableProps
}) => {
  const theme = useTheme();
  const sentryLabel = useSentryButtonLabel(text);

  return (
    <ButtonShrinkContainer sentry-label={sentryLabel}>
      <Button {...touchableProps}>
        {iconName ? (
          <IcoMoon name={iconName} size={theme.sizes.icon.sizeMedium} />
        ) : null}
        <BodySmallBoldText textAlign="center">{text}</BodySmallBoldText>
        {hasCaret ? (
          <IcoMoon
            name={icoMoonIconNames.caret_left}
            size={theme.sizes.icon.sizeMicro}
            color={theme.colors.textStandard}
            style={{
              marginLeft: theme.sizes.spacing.small,
              transform: [{ rotate: '-90deg' }],
            }}
          />
        ) : null}
      </Button>
    </ButtonShrinkContainer>
  );
};

const Button = styled(TouchableOpacity)`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: ${({ theme }) => theme.sizes.button.heightSmall}px;
  border-radius: ${({ theme }) => theme.sizes.borderRadius.sizeStandard}px;
  padding: 0px ${({ theme }) => theme.sizes.button.paddingSmall}px;
  background-color: ${({ theme }) => theme.colors.tileBackground};
`;
