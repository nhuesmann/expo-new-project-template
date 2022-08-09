import AsyncStorage from '@react-native-async-storage/async-storage';

import type { AnyObject } from '../../types';
import { AsyncStorageKey, getNamespacedAsyncStorageKey } from './keys';

export { ASYNC_STORAGE_KEYS } from './keys';

/**
 * Typesafe getters and setters
 */
export class SafeAsyncStorage {
  // Objects
  static setObject(key: AsyncStorageKey, value: AnyObject) {
    const valueString = JSON.stringify(value);
    setItem(key, valueString);
  }

  static getObject<T>(key: AsyncStorageKey): Promise<T | undefined> {
    const cb: Callback = (value: string) => JSON.parse(value);
    return getAndConvertItem(key, cb);
  }

  // Strings
  static setString(key: AsyncStorageKey, value: string) {
    setItem(key, value);
  }

  static getString(key: AsyncStorageKey): Promise<string | undefined> {
    const cb: Callback = (value: string) => value;
    return getAndConvertItem(key, cb);
  }

  // Numbers
  static setNumber(key: AsyncStorageKey, value: number) {
    const valueString = value.toString();
    setItem(key, valueString);
  }

  static getNumber(key: AsyncStorageKey): Promise<number | undefined> {
    const cb: Callback = (value: string) => +value;
    return getAndConvertItem(key, cb);
  }

  // Booleans
  static setBoolean(key: AsyncStorageKey, value: boolean) {
    const valueString = value.toString();
    setItem(key, valueString);
  }

  static getBoolean(key: AsyncStorageKey): Promise<boolean | undefined> {
    const cb: Callback = (value: string) => Boolean(value);
    return getAndConvertItem(key, cb);
  }

  // Dates
  static setDate(key: AsyncStorageKey, value: Date) {
    const valueString = value.toISOString();
    setItem(key, valueString);
  }

  static getDate(key: AsyncStorageKey): Promise<Date | undefined> {
    const cb: Callback = (value: string) => new Date(value);
    return getAndConvertItem(key, cb);
  }
}

/**
 * Abstracted getter and setter helpers
 */
type Callback = (value: string) => any;
async function getAndConvertItem(key: AsyncStorageKey, cb: Callback) {
  const storageKey = getNamespacedAsyncStorageKey(key);
  const value = await AsyncStorage.getItem(storageKey);

  if (!value?.length) {
    // eslint-disable-next-line no-console
    console.warn('AsyncStorage: Item not found');
    return undefined;
  }

  return cb(value);
}

async function setItem(key: AsyncStorageKey, value: string) {
  const storageKey = getNamespacedAsyncStorageKey(key);
  AsyncStorage.setItem(storageKey, value);
}
