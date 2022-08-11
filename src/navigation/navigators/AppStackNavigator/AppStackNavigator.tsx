import {
  createStackNavigator,
  TransitionPresets,
} from '@react-navigation/stack';

import { HomeScreen, ModalScreen, ProfileScreen } from '../../../screens';
import { HeaderLeftX } from '../../components';
import { screenOptionsHeaderStandard } from '../../config';
import { SettingsStackNavigator } from '../SettingsStackNavigator';
import type { AppNavigatorStackParams } from './types';

const AppStack = createStackNavigator<AppNavigatorStackParams>();

export const AppStackNavigator = () => (
  <AppStack.Navigator screenOptions={screenOptionsHeaderStandard}>
    <AppStack.Group>
      <AppStack.Screen name="Home" component={HomeScreen} />
    </AppStack.Group>
    <AppStack.Group>
      <AppStack.Screen name="Profile" component={ProfileScreen} />
    </AppStack.Group>
    <AppStack.Group screenOptions={{ presentation: 'modal' }}>
      <AppStack.Screen
        name="Modal"
        component={ModalScreen}
        options={{ headerLeft: HeaderLeftX }}
      />
    </AppStack.Group>
    <AppStack.Group
      screenOptions={{
        presentation: 'transparentModal',
        ...TransitionPresets.ModalTransition,
      }}
    >
      <AppStack.Screen
        name="Settings"
        component={SettingsStackNavigator}
        options={{ headerShown: false }}
      />
    </AppStack.Group>
  </AppStack.Navigator>
);
