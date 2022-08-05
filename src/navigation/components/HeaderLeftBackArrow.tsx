import { HeaderBackButtonProps } from '@react-navigation/elements';
import React, { FC } from 'react';
import { useTheme } from 'styled-components/native';

import { IcoMoon } from '../../config';
import { HeaderLeftButtonContainer } from './_shared';

export const HeaderLeftBackArrow: FC<HeaderBackButtonProps> = (props) => {
  const theme = useTheme();

  return props.onPress ? (
    <HeaderLeftButtonContainer onPress={props.onPress}>
      <IcoMoon
        name="caret-left"
        size={theme.sizes.icon.sizeSmall}
        color={theme.colors.textStandard}
      />
    </HeaderLeftButtonContainer>
  ) : null;
};
