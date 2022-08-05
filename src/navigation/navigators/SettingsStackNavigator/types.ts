import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

export type SettingsNavigatorStackParams = {
  // Child routes
  SettingsLanding: undefined;
  SettingsNestedSetting: undefined;
  // Additional available routes
};

// Nav
export type SettingsNavigatorNavProp<
  T extends keyof SettingsNavigatorStackParams
> = StackNavigationProp<SettingsNavigatorStackParams, T>;

// Route
export type SettingsNavigatorRouteProp<
  T extends keyof SettingsNavigatorStackParams
> = RouteProp<SettingsNavigatorStackParams, T>;

// Screen Props
export type SettingsNavigatorScreenNavProps<
  T extends keyof SettingsNavigatorStackParams
> = {
  navigation: SettingsNavigatorNavProp<T>;
  route: SettingsNavigatorRouteProp<T>;
};
