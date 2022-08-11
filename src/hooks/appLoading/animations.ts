import Animated, { EasingNode } from 'react-native-reanimated';
import { useTheme } from 'styled-components/native';

import { baseTheme } from '../../theme';
import { hp } from '../../utils';

const { interpolateColors, timing, Value } = Animated;

const easing = EasingNode.inOut(EasingNode.ease);

interface RunAnimationParams {
  initialIconY: number;
  callback?: () => void;
}

export const useAppLoadingAnimations = () => {
  const theme = useTheme();

  // Colors
  const colorNode = new Value(0);
  const white = '#FFFFFF';
  const themeHero = theme.colors.hero;
  const themeBg = theme.colors.background;

  const backgroundColor: any = interpolateColors(colorNode, {
    inputRange: [0, 1],
    outputColorRange: [themeHero, themeBg],
  });
  const iconColor = interpolateColors(colorNode, {
    inputRange: [0, 1],
    outputColorRange: [white, themeHero],
  });

  // Icon Position
  const iconTranslateY = new Value(0);

  function runAnimations({ initialIconY, callback }: RunAnimationParams) {
    /* Set up animations */
    // Colors
    const colorAnim = timing(colorNode, {
      toValue: 1,
      duration: 450,
      easing,
    });

    // Icon Position
    // Need to calculate the difference between exact center and its final render location, that will be the initial translateY. It will travel from there to 0.
    const middleScreenY = hp('100%') / 2 - baseTheme.sizes.icon.sizeSplash / 2;
    const translateDistance = middleScreenY - initialIconY;
    iconTranslateY.setValue(translateDistance as any);

    /* Run animations */
    colorAnim.start(() => {
      // After final animation, call callback
      if (typeof callback === 'function') {
        callback();
      }
    });
  }

  return {
    backgroundColor,
    iconColor,
    iconTranslateY,
    runAnimations,
  };
};
