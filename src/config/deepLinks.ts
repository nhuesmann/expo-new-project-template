/* This file was heavily inspired by Expo & React Navigation documentation:
  - https://docs.expo.dev/versions/latest/sdk/splash-screen/
  - https://reactnavigation.org/docs/deep-linking/#setup-with-expo-projects

  * Uncomment below to enable deep linking
*/

// import { LinkingOptions } from '@react-navigation/native';
// import * as Linking from 'expo-linking';
// import * as Notifications from 'expo-notifications';

// const prefix = Linking.createURL('/');

// // ! Need to add type argument to LinkingOptions
// export const linking: LinkingOptions = {
//   prefixes: [prefix],
//   config: {
//     screens: {
//       ScreenName: 'screen-name/:id',
//     },
//   },
//   subscribe(listener) {
//     const onReceiveURL = ({ url }: { url: string }) => listener(url);

//     // Listen to incoming links from deep linking
//     Linking.addEventListener('url', onReceiveURL);

//     // Listen to Expo push notifications
//     const subscription = Notifications.addNotificationResponseReceivedListener(
//       (response) => {
//         const url = response.notification.request.content.data.url as string;

//         // ! Do I need any custom logic to see whether the URL needs to be handled?

//         // Let React Navigation handle the URL
//         listener(url);
//       }
//     );

//     return () => {
//       // Clean up the event listeners
//       Linking.removeEventListener('url', onReceiveURL);
//       subscription.remove();
//     };
//   },
// };
