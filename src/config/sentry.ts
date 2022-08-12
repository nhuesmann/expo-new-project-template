import * as Sentry from 'sentry-expo';

import { getEnv } from './env';

export function configureSentry() {
  Sentry.init({
    dsn: getEnv().SENTRY_DSN,
    enableInExpoDevelopment: true,
    debug: !!__DEV__,
    environment: getEnv().ENVIRONMENT,
  });
}
