import { HeaderBackButtonProps } from '@react-navigation/elements';
import { useNavigation } from '@react-navigation/native';
import { FC } from 'react';
import { useTheme } from 'styled-components/native';

import { IcoMoon, icoMoonIconNames } from '../../config';
import { useSentryButtonLabel } from '../../hooks';
import { HeaderLeftButtonContainer } from './_shared';

export const HeaderLeftX: FC<HeaderBackButtonProps> = () => {
  const theme = useTheme();
  const navigation = useNavigation();
  const sentryLabel = useSentryButtonLabel('HeaderLeftX');

  return (
    <HeaderLeftButtonContainer
      onPress={navigation.goBack}
      sentry-label={sentryLabel}
    >
      <IcoMoon
        name={icoMoonIconNames.x}
        size={theme.sizes.icon.sizeSmall}
        color={theme.colors.textStandard}
      />
    </HeaderLeftButtonContainer>
  );
};
