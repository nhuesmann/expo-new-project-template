import { createStore, createTypedHooks } from 'easy-peasy';

import { StoreModel, storeModel } from './model';

const store = createStore(storeModel);

// Enable hot reloading
if (__DEV__) {
  if ((module as any).hot) {
    (module as any).hot.accept(() => {
      store.reconfigure(storeModel); // 👈 Here is the magic
    });
  }
}

const typedHooks = createTypedHooks<StoreModel>();

const useStoreActions = typedHooks.useStoreActions;
const useStoreDispatch = typedHooks.useStoreDispatch;
const useStoreState = typedHooks.useStoreState;

export { store, useStoreActions, useStoreDispatch, useStoreState };
