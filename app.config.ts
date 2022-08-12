const commonConfig = {
  // Shared config
  slug: 'expo-new-project-template',
  scheme: 'expo-new-project-template',
  privacy: 'unlisted',
  platforms: ['ios', 'android', 'web'],
  plugins: ['sentry-expo'],
  jsEngine: 'hermes',
  version: '1.0.0',
  orientation: 'portrait',
  primaryColor: '#15E885',
  splash: {
    image: './src/assets/icons/splash.png',
    resizeMode: 'cover',
    backgroundColor: '#15E885',
  },
  updates: {
    enabled: true,
    checkAutomatically: 'ON_LOAD',
    fallbackToCacheTimeout: 7000,
  },
  userInterfaceStyle: 'automatic',
  assetBundlePatterns: ['**/*'],
  // iOS
  ios: {
    supportsTablet: false,
    backgroundColor: '#FFFFFF',
  },
  // Android
  android: {
    versionCode: 1,
    backgroundColor: '#FFFFFF',
  },
  // Sentry
  hooks: {
    postPublish: [
      {
        file: 'sentry-expo/upload-sourcemaps',
        config: {
          organization: 'cardboard-companion',
          project: 'expo-new-project-template',
          authToken:
            '3660f20c2e724d539c71b993a4a1a3711332904d6df6402f8ad6fea1273ba658',
        },
      },
    ],
  },
};

export default () => {
  // ! * * * * * * * * * * * * * * * PRODUCTION * * * * * * * * * * * * * * * !
  if (process.env.APP_ENV === 'production') {
    return {
      ...commonConfig,
      name: 'Expo New Project Template',
      // env vars
      extra: {
        ENVIRONMENT: 'production',
        SENTRY_DSN:
          'https://90f1407e74a242c29e66a2c727113e44@o120362.ingest.sentry.io/6644497',
      },
      // iOS
      ios: {
        ...commonConfig.ios,
        icon: './src/assets/icons/app-icon-ios.png',
        bundleIdentifier: 'com.nathanhuesmann.ExpoNewProjectTemplate',
      },
      // Android
      android: {
        ...commonConfig.android,
        icon: './src/assets/icons/app-icon-android-legacy.png',
        adaptiveIcon: {
          foregroundImage:
            './src/assets/icons/app-icon-android-adaptive-foreground.png',
          backgroundColor: '#15E885',
        },
        package: 'com.nathanhuesmann.ExpoNewProjectTemplate',
      },
    };
  }

  // ! * * * * * * * * * * * * * * * DEVELOPMENT * * * * * * * * * * * * * * * !
  return {
    ...commonConfig,
    name: 'Expo New Project Template | Dev',
    // env vars
    extra: {
      ENVIRONMENT: 'development',
      SENTRY_DSN:
        'https://90f1407e74a242c29e66a2c727113e44@o120362.ingest.sentry.io/6644497',
    },
    // iOS
    ios: {
      ...commonConfig.ios,
      icon: './src/assets/icons/app-icon-ios-DEV.png',
      bundleIdentifier: 'com.nathanhuesmann.ExpoNewProjectTemplate.DEV',
    },
    // Android
    android: {
      ...commonConfig.android,
      icon: './src/assets/icons/app-icon-android-legacy-DEV.png',
      adaptiveIcon: {
        foregroundImage:
          './src/assets/icons/app-icon-android-adaptive-foreground-DEV.png',
        backgroundColor: '#15E885',
      },
      package: 'com.nathanhuesmann.ExpoNewProjectTemplate.DEV',
    },
  };
};
