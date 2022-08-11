import * as SplashScreen from 'expo-splash-screen';
import React, { useEffect } from 'react';
import { LayoutChangeEvent, Platform } from 'react-native';
import Animated from 'react-native-reanimated';
import styled from 'styled-components/native';

import {
  Divider,
  HeadingSmallText,
  LoadingIndicatorNative,
} from '../../components';
import { IcoMoon, icoMoonIconNames } from '../../config';
import { useSafeAreaPaddingBottom } from '../../hooks';
import { useAppLoadingAnimationsWithAllProperties } from '../../hooks/appLoading/animationsWithAllPropertiesExample';
import { useStoreActions, useStoreState } from '../../store';
import { baseTheme } from '../../theme';
import { hp } from '../../utils';

const AnimatedIcoMoon = Animated.createAnimatedComponent(IcoMoon);

export const AppLoading = () => {
  const paddingBottom = useSafeAreaPaddingBottom();

  const canNavigateToHomeScreen = useStoreState(
    (state) => state.appLoading.canNavigateToHomeScreen
  );
  const { fetchRemoteData, setIsAnimationComplete } = useStoreActions(
    (actions) => ({
      fetchRemoteData: actions.appLoading.fetchRemoteData,
      setIsAnimationComplete: actions.appLoading.setIsAnimationComplete,
    })
  );

  const {
    backgroundColor,
    iconColor,
    iconTranslateY,
    titleOpacity,
    titleTranslateY,
    controlsOpacity,
    controlsTranslateY,
    runAnimations,
  } = useAppLoadingAnimationsWithAllProperties();

  useEffect(() => {
    fetchRemoteData();
  }, []);

  useEffect(() => {
    if (canNavigateToHomeScreen) {
      console.log('gonna nav!');
      // TODO: enable once I fix the navigators and TS types
      // navigation.reset({
      //   index: 0,
      //   routes: [{ name: 'Home' }],
      // });
    }
  }, [canNavigateToHomeScreen]);

  function animationCallback() {
    setIsAnimationComplete(true);
  }

  function onLayout(event: LayoutChangeEvent) {
    const paddingOffset = Platform.OS === 'ios' ? 0 : paddingBottom;
    const initialIconY = event.nativeEvent.layout.y - paddingOffset;

    SplashScreen.hideAsync();
    runAnimations({ initialIconY, callback: animationCallback });
  }

  return (
    <Container style={{ paddingBottom, backgroundColor }}>
      <Divider px={hp('23.8%')} />
      <AnimatedIcoMoon
        onLayout={onLayout}
        name={icoMoonIconNames.logo}
        size={baseTheme.sizes.icon.sizeSplash}
        color={iconColor}
        style={{ transform: [{ translateY: iconTranslateY }] }}
      />
      <Divider px={baseTheme.sizes.spacing.listItem * 2} />
      <Animated.View
        style={{
          opacity: titleOpacity,
          transform: [{ translateY: titleTranslateY }],
        }}
      >
        <HeadingSmallText textAlign="center">App Name</HeadingSmallText>
      </Animated.View>
      <LoadingContainer
        style={{
          opacity: controlsOpacity,
          transform: [{ translateY: controlsTranslateY }],
        }}
      >
        <LoadingIndicator />
      </LoadingContainer>
    </Container>
  );
};

const Container = styled(Animated.View)`
  flex: 1;
  padding: 0 ${({ theme }) => theme.sizes.spacing.marginStandard}px;
  align-items: center;
`;

const LoadingContainer = styled(Animated.View)`
  margin-top: ${({ theme }) => theme.sizes.spacing.marginStandard}px;
`;

const LoadingIndicator = () => {
  const showLoading = useStoreState((state) => state.appLoading.showLoading);
  return showLoading ? <LoadingIndicatorNative /> : null;
};
