import { createStackNavigator } from '@react-navigation/stack';

import { AppLoading } from '../../../screens';
import { AppStackNavigator } from '../AppStackNavigator';
import { homeScreenAnimation } from './animation';
import { RootNavigatorParams } from './types';

const Root = createStackNavigator<RootNavigatorParams>();

export const RootNavigator = () => (
  <Root.Navigator
    screenOptions={{ headerShown: false }}
    initialRouteName="AppLoading"
  >
    <Root.Screen
      name="AppLoading"
      component={AppLoading}
      options={{ gestureEnabled: false }}
    />
    <Root.Screen
      name="App"
      component={AppStackNavigator}
      options={{ cardStyleInterpolator: homeScreenAnimation }}
    />
  </Root.Navigator>
);
