const APP_PREFIX = '@app_name';

// The list of all AsyncStorage keys
const asyncStorageKeys = {
  SETTINGS: createNamespacedKey('SETTINGS'),
};

export type AsyncStorageKey = keyof typeof asyncStorageKeys;

function createNamespacedKey(key: string) {
  return `${APP_PREFIX}_${key}`;
}

export function getNamespacedAsyncStorageKey(key: AsyncStorageKey) {
  return asyncStorageKeys[key];
}
