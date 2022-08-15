import * as Sentry from 'sentry-expo';

import { configureSentry } from './src/config';
import App from './src/index';

configureSentry();

export default Sentry.Native.wrap(App);
