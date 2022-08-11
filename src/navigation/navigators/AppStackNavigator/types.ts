import { NavigatorScreenParams, RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

import type { SettingsStackNavigatorRoutes } from '../SettingsStackNavigator';

export type AppStackNavigatorRoutes = {
  Home: undefined;
  Profile: undefined;
  Modal: undefined;
  Settings: NavigatorScreenParams<SettingsStackNavigatorRoutes>;
};

// Nav
export type AppNavigatorNavProp<T extends keyof AppStackNavigatorRoutes> =
  StackNavigationProp<AppStackNavigatorRoutes, T>;

// Route
export type AppNavigatorRouteProp<T extends keyof AppStackNavigatorRoutes> =
  RouteProp<AppStackNavigatorRoutes, T>;

// Screen Props
export type AppNavigatorScreenProps<T extends keyof AppStackNavigatorRoutes> = {
  navigation: AppNavigatorNavProp<T>;
  route: AppNavigatorRouteProp<T>;
};
