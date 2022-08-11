import { StatusBar } from 'react-native';
import Animated, { EasingNode } from 'react-native-reanimated';
import { useTheme } from 'styled-components/native';

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

  function runAnimations({ callback }: RunAnimationParams) {
    /* Set up animations */
    // Colors
    const colorAnim = timing(colorNode, {
      toValue: 1,
      duration: 450,
      easing,
    });

    /* Run animations */
    colorAnim.start(() => {
      // After final animation, call callback
      StatusBar.setHidden(false, 'fade');

      if (typeof callback === 'function') {
        callback();
      }
    });
  }

  return {
    backgroundColor,
    iconColor,
    runAnimations,
  };
};
