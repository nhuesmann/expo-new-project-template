import { HeaderBackButtonProps } from '@react-navigation/elements';
import { FC } from 'react';
import { useTheme } from 'styled-components/native';

import { IcoMoon, icoMoonIconNames } from '../../config';
import { HeaderLeftButtonContainer } from './_shared';

export const HeaderLeftBackArrow: FC<HeaderBackButtonProps> = (props) => {
  const theme = useTheme();

  return props.onPress ? (
    <HeaderLeftButtonContainer onPress={props.onPress}>
      <IcoMoon
        name={icoMoonIconNames.caret_left}
        size={theme.sizes.icon.sizeSmall}
        color={theme.colors.textStandard}
      />
    </HeaderLeftButtonContainer>
  ) : null;
};
