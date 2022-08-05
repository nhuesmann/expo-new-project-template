import { NavigatorScreenParams, RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

import { SettingsNavigatorStackParams } from '../SettingsStackNavigator';

export type AppNavigatorStackParams = {
  Home: undefined;
  Profile: undefined;
  Modal: undefined;
  Settings: NavigatorScreenParams<SettingsNavigatorStackParams>;
};

// Nav
export type AppNavigatorNavProp<T extends keyof AppNavigatorStackParams> =
  StackNavigationProp<AppNavigatorStackParams, T>;

// Route
export type AppNavigatorRouteProp<T extends keyof AppNavigatorStackParams> =
  RouteProp<AppNavigatorStackParams, T>;

// Screen Props
export type AppNavigatorScreenNavProps<
  T extends keyof AppNavigatorStackParams
> = {
  navigation: AppNavigatorNavProp<T>;
  route: AppNavigatorRouteProp<T>;
};
