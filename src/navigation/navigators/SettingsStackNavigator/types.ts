import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

export type SettingsStackNavigatorRoutes = {
  // Child routes
  SettingsLanding: undefined;
  SettingsNestedSetting: undefined;
  // Additional available routes
};

// Nav
export type SettingsNavigatorNavProp<
  T extends keyof SettingsStackNavigatorRoutes
> = StackNavigationProp<SettingsStackNavigatorRoutes, T>;

// Route
export type SettingsNavigatorRouteProp<
  T extends keyof SettingsStackNavigatorRoutes
> = RouteProp<SettingsStackNavigatorRoutes, T>;

// Screen Props
export type SettingsNavigatorScreenProps<
  T extends keyof SettingsStackNavigatorRoutes
> = {
  navigation: SettingsNavigatorNavProp<T>;
  route: SettingsNavigatorRouteProp<T>;
};
