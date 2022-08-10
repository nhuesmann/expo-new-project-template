import { HeaderBackButtonProps } from '@react-navigation/elements';
import { useNavigation } from '@react-navigation/native';
import { FC } from 'react';
import { useTheme } from 'styled-components/native';

import { IcoMoon, icoMoonIcons } from '../../config';
import { HeaderLeftButtonContainer } from './_shared';

export const HeaderLeftX: FC<HeaderBackButtonProps> = () => {
  const theme = useTheme();
  const navigation = useNavigation();

  return (
    <HeaderLeftButtonContainer onPress={navigation.goBack}>
      <IcoMoon
        name={icoMoonIcons.x}
        size={theme.sizes.icon.sizeSmall}
        color={theme.colors.textStandard}
      />
    </HeaderLeftButtonContainer>
  );
};
