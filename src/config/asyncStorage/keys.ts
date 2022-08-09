const APP_PREFIX = '@app_name';

// The list of all AsyncStorage keys
export const ASYNC_STORAGE_KEYS = {
  SETTINGS: 'SETTINGS' as 'SETTINGS',
};

export type AsyncStorageKey = keyof typeof ASYNC_STORAGE_KEYS;

export function getNamespacedAsyncStorageKey(key: AsyncStorageKey) {
  const rawKey = ASYNC_STORAGE_KEYS[key];
  const namespacedKey = `${APP_PREFIX}_${rawKey}`;
  return namespacedKey;
}
