import { createStackNavigator } from '@react-navigation/stack';

import { SettingsLandingScreen } from '../../../screens';
import { SettingsNestedSettingScreen } from '../../../screens/Settings/NestedSetting';
import { HeaderLeftX } from '../../components';
import { screenOptionsStandard } from '../../config';
import type { SettingsStackNavigatorRoutes } from './types';

const SettingsStack = createStackNavigator<SettingsStackNavigatorRoutes>();

export const SettingsStackNavigator = () => (
  <SettingsStack.Navigator screenOptions={screenOptionsStandard}>
    <SettingsStack.Screen
      name="SettingsLanding"
      component={SettingsLandingScreen}
      options={{ headerLeft: HeaderLeftX }}
    />
    <SettingsStack.Screen
      name="SettingsNestedSetting"
      component={SettingsNestedSettingScreen}
    />
  </SettingsStack.Navigator>
);
