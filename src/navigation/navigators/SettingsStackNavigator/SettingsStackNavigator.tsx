import { createStackNavigator } from '@react-navigation/stack';

import { SettingsLandingScreen } from '../../../screens';
import { SettingsNestedSettingScreen } from '../../../screens/Settings/NestedSetting';
import { HeaderLeftX } from '../../components';
import { screenOptionsHeaderStandard } from '../../config';
import type { SettingsNavigatorStackParams } from './types';

const SettingsStack = createStackNavigator<SettingsNavigatorStackParams>();

export const SettingsStackNavigator = () => (
  <SettingsStack.Navigator screenOptions={screenOptionsHeaderStandard}>
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
