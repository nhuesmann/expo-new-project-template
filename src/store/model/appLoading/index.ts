import { Action, action, Thunk, thunk, ThunkOn, thunkOn } from 'easy-peasy';
import * as Font from 'expo-font';

import { fontMap } from '../../../config';
import type { StoreModel } from '../index';

export interface AppLoadingModel {
  /**
   * 1. Loading that takes place while SplashScreen is active
   * Primarily ON DEVICE data loading + bare minimum remote data loading (auth)
   */
  isSplashLoadingComplete: boolean;
  setIsSplashLoadingComplete: Action<AppLoadingModel, boolean>;
  loadLocalData: Thunk<AppLoadingModel, void, void, StoreModel>;
  // If needing auth: can use thunk below to check auth, then call that in
  // AppInitializer. This thunk would be the one to set splash loading complete.
  // checkUserAuthentication: Thunk<AppLoadingModal, void, void, StoreModel>;
  /**
   * 2. Loading that occurs after SplashScreen has been swapped with rendered
   * loading screen, with optional loading indicator
   * Primarily REMOTE data loading (backend data requests)
   * Can also be used by components to hold off rendering until all loading is done
   */
  isAppLoadingComplete: boolean;
  setIsAppLoadingComplete: Action<AppLoadingModel, boolean>;
  fetchRemoteData: Thunk<AppLoadingModel, void, void, StoreModel>;
  showLoading: boolean;
  setShowLoading: Action<AppLoadingModel, boolean>;
  /**
   * 3. Animation state
   * Animation starts as soon as AppLoading component layout is complete. End of
   * animation is used as navigation trigger (along with isAppLoadingComplete)
   * and to indicate that the loading indicator can be shown if needed.
   */
  isAnimationComplete: boolean;
  setIsAnimationComplete: Action<AppLoadingModel, boolean>;
  onSetIsAnimationComplete: ThunkOn<AppLoadingModel>;
}

export const appLoadingModel: AppLoadingModel = {
  // Splash (local) loading
  isSplashLoadingComplete: false,
  setIsSplashLoadingComplete: action((state, isSplashLoadingComplete) => {
    state.isSplashLoadingComplete = isSplashLoadingComplete;
  }),
  loadLocalData: thunk(async (actions, _, { dispatch }) => {
    const fontPromise = Font.loadAsync(fontMap);
    const userSettingsPromise = dispatch.settings.initialize();

    await Promise.all([fontPromise, userSettingsPromise]);

    actions.setIsSplashLoadingComplete(true);
  }),
  // Remote data loading
  isAppLoadingComplete: false,
  setIsAppLoadingComplete: action((state, isAppLoadingComplete) => {
    state.isAppLoadingComplete = isAppLoadingComplete;
  }),
  fetchRemoteData: thunk(async (actions, _, { dispatch }) => {
    // TODO: add an artificial delay here to simulate network request
    //
  }),
  showLoading: false,
  setShowLoading: action((state, showLoading) => {
    state.showLoading = showLoading;
  }),
  // Animations
  isAnimationComplete: false,
  setIsAnimationComplete: action((state, isAnimationComplete) => {
    state.isAnimationComplete = isAnimationComplete;
  }),
  onSetIsAnimationComplete: thunkOn(
    (actions) => actions.setIsAnimationComplete,
    (actions) => {
      // TODO: use Delayer to show loading!
    }
  ),
};
