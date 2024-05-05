import { getWebAppFromGlobal } from '@/telegram-web-app/core';

/**
 * This function provides `getItem` method from {@link telegram!CloudStorage} as Promise
 * @throws
 */
export type GetItemFunction = (key: string) => Promise<string | null>;

/**
 * This function provides `setItem` method from {@link telegram!CloudStorage} as Promise
 * @throws
 */
export type SetItemFunction = (key: string, value: string) => Promise<void>;

/**
 * This function provides `getItems` method from {@link telegram!CloudStorage} as Promise
 * @throws
 */
export type GetItemsFunction = (keys: string[]) => Promise<string[]>;

/**
 * This function provides `removeItem` method from {@link telegram!CloudStorage} as Promise
 * @throws
 */
export type RemoveItemFunction = (key: string) => Promise<void>;

/**
 * This function provides `removeItems` method from {@link telegram!CloudStorage} as Promise
 * @throws
 */
export type RemoveItemsFunction = (key: string[]) => Promise<void>;

/**
 * This function provides `getKeys` method from {@link telegram!CloudStorage} as Promise
 * @throws
 */
export type GetKeysFunction = () => Promise<string[]>;

class CloudStorageClient {
  cloudStorage: CloudStorage | undefined = getWebAppFromGlobal()?.CloudStorage;

  getItem: GetItemFunction = (key) =>
    new Promise((resolve, reject) => {
      this.cloudStorage?.getItem(key, (error, value) => {
        if (!error) {
          resolve(value);
        } else {
          reject(error);
        }
      });
    });

  setItem: SetItemFunction = (key, value) => {
    return new Promise((resolve, reject) => {
      this.cloudStorage?.setItem(key, value, (error, state) => {
        if (!error && state) {
          resolve();
        } else {
          reject(error);
        }
      });
    });
  };

  getKeys: GetKeysFunction = () => {
    return new Promise((resolve, reject) => {
      this.cloudStorage?.getKeys((error, state) => {
        if (!error && state) {
          resolve(state);
        } else {
          reject(error);
        }
      });
    });
  };
}

export const cloudStorageClient = new CloudStorageClient();
