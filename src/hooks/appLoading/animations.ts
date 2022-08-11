import { StatusBar } from 'react-native';
import Animated, { EasingNode } from 'react-native-reanimated';
import { useTheme } from 'styled-components/native';

import { baseTheme } from '../../theme';
import { hp } from '../../utils/responsiveDesign';

const { interpolateNode, interpolateColors, timing, Value } = Animated;

const baseTranslateDistance = baseTheme.sizes.spacing.marginStandard;
const easing = EasingNode.inOut(EasingNode.ease);

interface Params {
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

  const backgroundColor = interpolateColors(colorNode, {
    inputRange: [0, 1],
    outputColorRange: [themeHero, themeBg],
  });
  const iconColor = interpolateColors(colorNode, {
    inputRange: [0, 1],
    outputColorRange: [white, themeHero],
  });

  // Icon Position
  const iconTranslateY = new Value(0);

  // Title
  const titleNode = new Value(0);
  const titleOpacity = interpolateNode(titleNode, {
    inputRange: [0, 1],
    outputRange: [0, 1],
  });
  const titleTranslateY = interpolateNode(titleNode, {
    inputRange: [0, 1],
    outputRange: [baseTranslateDistance, 0],
  });

  // Controls (Buttons + Legal / Loading Indicator)
  const controlsNode = new Value(0);
  const controlsOpacity = interpolateNode(controlsNode, {
    inputRange: [0, 1],
    outputRange: [0, 1],
  });
  const controlsTranslateY = interpolateNode(controlsNode, {
    inputRange: [0, 1],
    outputRange: [baseTranslateDistance, 0],
  });

  function runAnimations({ initialIconY, callback }: Params) {
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
    const iconAnim = timing(iconTranslateY, {
      toValue: 0,
      duration: 450,
      easing,
    });

    // Title
    const titleAnim = timing(titleNode, {
      toValue: 1,
      duration: 250,
      easing,
    });

    // Controls (Buttons + Legal / Loading Indicator)
    const controlsAnim = timing(controlsNode, {
      toValue: 1,
      duration: 250,
      easing,
    });

    /* Run animations */
    colorAnim.start(() => {
      iconAnim.start(() => {
        titleAnim.start(() => {
          controlsAnim.start(() => {
            StatusBar.setHidden(false, 'fade');

            if (typeof callback === 'function') {
              callback();
            }
          });
        });
      });
    });
  }

  return {
    backgroundColor,
    iconColor,
    iconTranslateY,
    titleOpacity,
    titleTranslateY,
    controlsOpacity,
    controlsTranslateY,
    runAnimations,
  };
};
