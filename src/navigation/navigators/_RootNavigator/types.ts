import { NavigatorScreenParams, RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

import type { AppStackNavigatorRoutes } from '../AppStackNavigator';

export type RootNavigatorRoutes = {
  AppLoading: undefined;
  App: NavigatorScreenParams<AppStackNavigatorRoutes>;
};

// Nav
export type RootNavigatorNavProp<T extends keyof RootNavigatorRoutes> =
  StackNavigationProp<RootNavigatorRoutes, T>;

// Route
export type RootNavigatorRouteProp<T extends keyof RootNavigatorRoutes> =
  RouteProp<RootNavigatorRoutes, T>;

// Screen Props
export type RootNavigatorScreenProps<T extends keyof RootNavigatorRoutes> = {
  navigation: RootNavigatorNavProp<T>;
  route: RootNavigatorRouteProp<T>;
};
