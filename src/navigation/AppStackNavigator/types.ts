import { RouteProp } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

export type AppNavigatorStackParams = {
  Home: undefined;
  Profile: undefined;
  Modal: undefined;
};

// Nav
export type AppNavigatorNavProp<T extends keyof AppNavigatorStackParams> =
  NativeStackNavigationProp<AppNavigatorStackParams, T>;

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
