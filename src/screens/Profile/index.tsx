import { FC } from 'react';
import { Button, Text } from 'react-native';

import { ScreenContainer } from '../../components';
import type { AppNavigatorScreenNavProps } from '../../navigation';

export const ProfileScreen: FC<AppNavigatorScreenNavProps<'Profile'>> = ({
  navigation,
}) => (
  <ScreenContainer>
    <Text>Home Screen</Text>
    <Button onPress={() => navigation.navigate('Home')} title="Go Home" />
    <Button onPress={() => navigation.navigate('Modal')} title="Show Modal" />
  </ScreenContainer>
);
