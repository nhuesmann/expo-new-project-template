import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { HomeScreen, ModalScreen, ProfileScreen } from '../../screens';
import type { AppNavigatorStackParams } from './types';

const AppStack = createNativeStackNavigator<AppNavigatorStackParams>();

export function AppStackNavigator() {
  return (
    <AppStack.Navigator>
      <AppStack.Group>
        <AppStack.Screen name="Home" component={HomeScreen} />
        <AppStack.Screen name="Profile" component={ProfileScreen} />
      </AppStack.Group>
      <AppStack.Group screenOptions={{ presentation: 'modal' }}>
        <AppStack.Screen name="Modal" component={ModalScreen} />
      </AppStack.Group>
    </AppStack.Navigator>
  );
}
