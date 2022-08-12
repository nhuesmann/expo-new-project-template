import { FC } from 'react';

import {
  CenteringContainer,
  FlexFill,
  HeadingSmallText,
  SafeScreenContainer,
  SmallButton,
} from '../../components';
import type { AppNavigatorScreenProps } from '../../navigation';

export const ModalScreen: FC<AppNavigatorScreenProps<'Modal'>> = ({
  navigation,
}) => (
  <SafeScreenContainer>
    <FlexFill centerContent={true}>
      <HeadingSmallText>This is a Modal</HeadingSmallText>
    </FlexFill>
    <CenteringContainer>
      <SmallButton
        text="Dismiss"
        hasCaret={false}
        onPress={navigation.goBack}
      />
    </CenteringContainer>
  </SafeScreenContainer>
);
