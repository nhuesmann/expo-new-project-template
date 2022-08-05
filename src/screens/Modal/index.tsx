import React, { FC } from 'react';
import { Button, Text } from 'react-native';

import { ScreenContainer } from '../../components';
import type { AppNavigatorScreenNavProps } from '../../navigation';

export const ModalScreen: FC<AppNavigatorScreenNavProps<'Modal'>> = ({
  navigation,
}) => (
  <ScreenContainer>
    <Text>Modal Screen</Text>
    <Button onPress={navigation.goBack} title="Dismiss" />
  </ScreenContainer>
);
