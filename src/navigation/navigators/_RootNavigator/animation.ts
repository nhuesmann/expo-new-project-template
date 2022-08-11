import { StackCardInterpolationProps } from '@react-navigation/stack';

export const homeScreenAnimation = ({
  current,
  index,
}: StackCardInterpolationProps) => {
  const scale = current.progress.interpolate({
    inputRange: [index - 1, index, index + 1],
    outputRange: [1.2, 1, 1],
  });

  const opacity = current.progress.interpolate({
    inputRange: [index - 1, index],
    outputRange: [0, 1],
  });

  return {
    cardStyle: {
      opacity,
      transform: [{ scaleX: scale }, { scaleY: scale }],
    },
  };
};
