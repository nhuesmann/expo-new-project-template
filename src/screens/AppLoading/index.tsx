import * as SplashScreen from 'expo-splash-screen';
import React, { useEffect } from 'react';
import { LayoutChangeEvent, Platform } from 'react-native';
import Animated from 'react-native-reanimated';
import styled from 'styled-components/native';

import { IcoMoon, icoMoonIconNames } from '../../config';
import { useAppLoadingAnimations, useSafeAreaPaddingBottom } from '../../hooks';
import { useStoreActions } from '../../store';
import { baseTheme } from '../../theme';
import { NavigationTrigger } from './NavigationTrigger';

const AnimatedIcoMoon = Animated.createAnimatedComponent(IcoMoon);

export const AppLoading = () => {
  const paddingBottom = useSafeAreaPaddingBottom();

  const { fetchRemoteData, setIsAnimationComplete } = useStoreActions(
    (actions) => ({
      fetchRemoteData: actions.appLoading.fetchRemoteData,
      setIsAnimationComplete: actions.appLoading.setIsAnimationComplete,
    })
  );

  const { backgroundColor, iconColor, iconTranslateY, runAnimations } =
    useAppLoadingAnimations();

  useEffect(() => {
    fetchRemoteData();
  }, []);

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
      <AnimatedIcoMoon
        onLayout={onLayout}
        name={icoMoonIconNames.logo}
        size={baseTheme.sizes.icon.sizeSplash}
        color={iconColor}
        style={{ transform: [{ translateY: iconTranslateY }] }}
      />
      <NavigationTrigger />
    </Container>
  );
};

const Container = styled(Animated.View)`
  flex: 1;
  padding: 0 ${({ theme }) => theme.sizes.spacing.marginStandard}px;
  align-items: center;
`;
