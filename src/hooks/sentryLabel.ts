import { useRoute } from '@react-navigation/native';

export const useSentryButtonLabel = (buttonName: string) => {
  const route = useRoute();
  const sentryLabel = `${route.name} Screen | ${buttonName} Button`;

  return sentryLabel;
};
