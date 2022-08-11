import * as SplashScreen from 'expo-splash-screen';
import React, { useEffect } from 'react';
import { LayoutChangeEvent, Platform } from 'react-native';
import Animated from 'react-native-reanimated';
import styled from 'styled-components/native';

import { Divider, HeadingSmallText } from '../../components';
import { IcoMoon } from '../../config';
import { useAppLoadingAnimations, useSafeAreaPaddingBottom } from '../../hooks';
import { useStoreActions, useStoreState } from '../../store';
import { baseTheme } from '../../theme';
import { hp } from '../../utils';

const AnimatedIcoMoon = Animated.createAnimatedComponent(IcoMoon);

export const AppLoading = () => {
  const paddingBottom = useSafeAreaPaddingBottom();

  const { fetchRemoteData, setIsAnimationComplete } = useStoreActions(
    (actions) => ({
      fetchRemoteData: actions.appLoading.fetchRemoteData,
      setIsAnimationComplete: actions.appLoading.setIsAnimationComplete,
    })
  );

  useEffect(() => {
    fetchRemoteData();
  }, []);

  const {
    backgroundColor,
    iconColor,
    iconTranslateY,
    titleOpacity,
    titleTranslateY,
    controlsOpacity,
    controlsTranslateY,
    runAnimations,
  } = useAppLoadingAnimations();

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
        name="logo"
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
        <LoadingIndicatorWithNavSTUB />
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

const LoadingIndicatorWithNavSTUB = () => {
  const isAppLoadingComplete = useStoreState(
    (state) => state.appLoading.isAppLoadingComplete
  );
  const isAnimationComplete = useStoreState(
    (state) => state.appLoading.isAnimationComplete
  );
  const showLoading = useStoreState((state) => state.appLoading.showLoading);

  // TODO: make this imperative! DON'T hide it in this component!
  useEffect(() => {
    if (!isAppLoadingComplete || !isAnimationComplete) {
      return;
    }

    console.log('gonna nav!');
  }, []);

  return showLoading ? <LoadingIndicatorNative /> : null;
};
