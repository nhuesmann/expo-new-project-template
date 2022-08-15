import Constants from 'expo-constants';

interface AppEnv {
  ENVIRONMENT: 'development' | 'staging' | 'production';
  SENTRY_DSN: string;
}

type GetEnvFn = () => AppEnv;

export const getEnv: GetEnvFn = () => Constants!.manifest!.extra as AppEnv;
