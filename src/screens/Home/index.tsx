import React, { FC } from 'react';
import { Button, Text } from 'react-native';

import { ScreenContainer } from '../../components';
import type { AppNavigatorScreenNavProps } from '../../navigation';

export const HomeScreen: FC<AppNavigatorScreenNavProps<'Home'>> = ({
  navigation,
}) => (
  <ScreenContainer>
    <Text>Home Screen</Text>
    <Button
      onPress={() => navigation.navigate('Profile')}
      title="Go to Profile"
    />
    <Button onPress={() => navigation.navigate('Modal')} title="Show Modal" />
  </ScreenContainer>
);
