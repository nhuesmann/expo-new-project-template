import { FC } from 'react';

import {
  CenteringContainer,
  Divider,
  FlexFill,
  HeadingSmallText,
  SafeScreenContainer,
  SmallButton,
} from '../../components';
import type { SettingsNavigatorScreenProps } from '../../navigation';
import { baseTheme } from '../../theme';

export const SettingsNestedSettingScreen: FC<
  SettingsNavigatorScreenProps<'SettingsNestedSetting'>
> = ({ navigation }) => (
  <SafeScreenContainer>
    <FlexFill centerContent={true}>
      <HeadingSmallText>Some Nested Screen</HeadingSmallText>
    </FlexFill>
    <CenteringContainer>
      <SmallButton text="Back" hasCaret={false} onPress={navigation.goBack} />
      <Divider px={baseTheme.sizes.spacing.medium} />
      <SmallButton
        text="Home"
        hasCaret={false}
        onPress={() => {
          navigation.popToTop();
          navigation.goBack();
        }}
      />
    </CenteringContainer>
  </SafeScreenContainer>
);
